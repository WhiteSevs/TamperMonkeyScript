import { DOMUtils, httpx, utils } from "@/env";
import { NetDiskCheckLinkValidityRequestOption } from "@/main/check-valid/NetDiskCheckLinkValidity";
import { NetDiskCheckLinkValidityStatus } from "@/main/check-valid/NetDiskCheckLinkValidityStatus";

export const NetDiskCheckLinkValidity_360yunpan: NetDiskCheckLinkValidityEntranceInstance = {
  async init(netDiskInfo) {
    const { ruleIndex, shareCode, accessCode } = netDiskInfo;
    const url = "https://www.yunpan.com/lk/surl_" + shareCode;
    const response = await httpx.get(url, {
      headers: {
        "User-Agent": utils.getRandomPCUA(),
      },
      responseType: "json",
      ...NetDiskCheckLinkValidityRequestOption,
    });
    if (!response.status && utils.isNull(response.data.responseText)) {
      return {
        ...NetDiskCheckLinkValidityStatus.networkError,
        data: response,
      };
    }
    const responseDoc = DOMUtils.toElement(response.data.responseText, true, true);
    const $errorMsg = responseDoc.querySelector<HTMLElement>(".page-error .error-msg");
    if ($errorMsg) {
      const errorMsg = DOMUtils.text($errorMsg);
      if (errorMsg.includes("分享链接已失效")) {
        return {
          ...NetDiskCheckLinkValidityStatus.failed,
          data: response,
        };
      } else {
        return {
          ...NetDiskCheckLinkValidityStatus.unknown,
          data: response,
          tipMsg: errorMsg,
        };
      }
    }
    return {
      ...NetDiskCheckLinkValidityStatus.success,
      data: response,
    };
  },
};
