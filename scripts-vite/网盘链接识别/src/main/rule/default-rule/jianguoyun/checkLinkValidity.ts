import { httpx, utils } from "@/env";
import { NetDiskCheckLinkValidityStatus } from "@/main/check-valid/NetDiskCheckLinkValidityStatus";
import { NetDiskCheckLinkValidityRequestOption } from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "../../../link-click-mode/NetDiskLinkClickMode";

export const NetDiskCheckLinkValidity_jianguoyun: NetDiskCheckLinkValidityEntranceInstance = {
  async init(netDiskInfo) {
    const { ruleIndex, shareCode, accessCode } = netDiskInfo;
    const url = NetDiskLinkClickModeUtils.getBlankUrl({
      ruleKeyName: "jianguoyun",
      ruleIndex,
      shareCode,
      accessCode,
    });
    const response = await httpx.get(url, {
      headers: {
        "User-Agent": utils.getRandomPCUA(),
        Host: "www.jianguoyun.com",
        Referer: NetDiskLinkClickModeUtils.getBlankUrl({
          ruleKeyName: "jianguoyun",
          ruleIndex,
          shareCode,
          accessCode,
        }),
        Origin: "https://www.jianguoyun.com",
      },
      ...NetDiskCheckLinkValidityRequestOption,
    });
    const responseText = response.data.responseText;
    if (!response.status && utils.isNull(responseText)) {
      return {
        ...NetDiskCheckLinkValidityStatus.networkError,
        data: response,
      };
    }
    if (responseText.includes("<h1>啊噢！")) {
      return {
        ...NetDiskCheckLinkValidityStatus.failed,
        data: response,
      };
    }
    return {
      ...NetDiskCheckLinkValidityStatus.success,
      data: response,
    };
  },
};
