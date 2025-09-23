import { httpx, utils } from "@/env";
import {
  NetDiskCheckLinkValidity,
  NetDiskCheckLinkValidityRequestOption,
} from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskCheckLinkValidityStatus } from "@/main/check-valid/NetDiskCheckLinkValidityStatus";

export const NetDiskCheckLinkValidity_123pan: NetDiskCheckLinkValidityEntranceInstance = {
  async init(netDiskInfo) {
    const { ruleIndex, shareCode, accessCode } = netDiskInfo;
    let response = await httpx.get("https://www.123pan.com/api/share/info?shareKey=" + shareCode, {
      headers: {
        "User-Agent": utils.getRandomPCUA(),
        Host: "www.123pan.com",
        Origin: "https://www.123pan.com",
        Referer: "https://www.123pan.com/",
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
    let data = utils.toJSON(response.data.responseText);
    if (response.data.responseText.includes("分享页面不存在") || data["code"] !== 0) {
      return {
        ...NetDiskCheckLinkValidityStatus.failed,
        data: data,
      };
    }
    if (data["data"]["HasPwd"]) {
      return {
        ...NetDiskCheckLinkValidityStatus.needAccessCode,
        data: data,
      };
    }
    return {
      ...NetDiskCheckLinkValidityStatus.success,
      data: data,
    };
  },
};
