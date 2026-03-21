import { httpx, utils } from "@/env";
import {
  NetDiskCheckLinkValidity,
  NetDiskCheckLinkValidityRequestOption,
} from "@/main/handler/check-valid/NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "@/main/link-click-mode/NetDiskLinkClickMode";
import { NetDiskCheckLinkValidityStatus } from "@/main/handler/check-valid/NetDiskCheckLinkValidityStatus";

export const NetDiskCheckLinkValidity_hecaiyun: NetDiskCheckLinkValidityEntranceInstance = {
  async init(netDiskInfo) {
    const { ruleIndex, shareCode, accessCode } = netDiskInfo;
    let response = await httpx.post("https://caiyun.139.com/stapi/custom/outlink/brief", {
      data: "linkId=" + shareCode,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": utils.getRandomPCUA(),
        Referer: NetDiskLinkClickModeUtils.getBlankUrl({
          ruleKeyName: "hecaiyun",
          ruleIndex,
          shareCode,
          accessCode,
        }),
      },
      ...NetDiskCheckLinkValidityRequestOption,
    });
    if (!response.status) {
      return {
        ...NetDiskCheckLinkValidityStatus.networkError,
        data: response,
      };
    }
    let data = utils.toJSON(response.data.responseText);
    if (data.code == 0) {
      if (data.data.isPasswd === "1") {
        return {
          ...NetDiskCheckLinkValidityStatus.needAccessCode,
          data: data,
        };
      } else {
        return {
          ...NetDiskCheckLinkValidityStatus.success,
          data: data,
        };
      }
    } else {
      return {
        ...NetDiskCheckLinkValidityStatus.failed,
        data: data,
      };
    }
  },
};
