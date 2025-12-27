import { DOMUtils, httpx, utils } from "@/env";
import { NetDiskCheckLinkValidityStatus } from "@/main/check-valid/NetDiskCheckLinkValidityStatus";
import { NetDiskCheckLinkValidityRequestOption } from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "../../../link-click-mode/NetDiskLinkClickMode";

export const NetDiskCheckLinkValidity_onedrive: NetDiskCheckLinkValidityEntranceInstance = {
  async init(netDiskInfo) {
    const { ruleIndex, shareCode, accessCode } = netDiskInfo;
    const url = NetDiskLinkClickModeUtils.getBlankUrl({
      ruleKeyName: "onedrive",
      ruleIndex,
      shareCode,
      accessCode,
    });
    const urlInst = new URL(url);
    const response = await httpx.get(url, {
      headers: {
        "User-Agent": utils.getRandomPCUA(),
        Host: urlInst.hostname,
        Referer: url,
        Origin: urlInst.origin,
      },
      ...NetDiskCheckLinkValidityRequestOption,
    });
    if (!response.status) {
      const status = response.data?.status?.toString();
      if (status === "429") {
        return {
          ...NetDiskCheckLinkValidityStatus.networkError,
          data: response,
        };
      } else if (status === "404") {
        return {
          ...NetDiskCheckLinkValidityStatus.failed,
          data: response,
        };
      }
      return {
        ...NetDiskCheckLinkValidityStatus.networkError,
        data: response,
      };
    }
    const responseText = response.data.responseText;
    if (utils.isNotNull(responseText)) {
      try {
        const responseDocument = DOMUtils.toElement(responseText, true, true);
        const $title = responseDocument.querySelector("title");
        if ($title) {
          const title = DOMUtils.html($title);
          if (title.includes("错误")) {
            return {
              ...NetDiskCheckLinkValidityStatus.failed,
              data: response,
            };
          }
        }
      } catch (error) {}
    }
    return {
      ...NetDiskCheckLinkValidityStatus.success,
      data: response,
    };
  },
};
