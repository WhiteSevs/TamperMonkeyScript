import { httpx, utils } from "@/env";
import { NetDiskCheckLinkValidityRequestOption } from "@/main/check-valid/NetDiskCheckLinkValidity";
import { NetDiskCheckLinkValidityStatus } from "@/main/check-valid/NetDiskCheckLinkValidityStatus";

export const NetDiskCheckLinkValidity_115pan: NetDiskCheckLinkValidityEntranceInstance = {
  async init(netDiskInfo) {
    const { ruleIndex, shareCode, accessCode } = netDiskInfo;
    let response = await httpx.get(
      `https://webapi.115.com/share/snap?share_code=${shareCode}&offset=0&limit=20&receive_code=&cid=`,
      {
        headers: {
          Accept: "application/json, text/javascript, */*;",
          "User-Agent": utils.getRandomPCUA(),
          Host: "webapi.115.com",
          Referer: "https://115.com/",
          Origin: "https://115.com",
        },
        ...NetDiskCheckLinkValidityRequestOption,
      }
    );
    if (!response.status) {
      if (utils.isNull(response.data.responseText)) {
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
    let data = utils.toJSON(response.data.responseText);
    if (data.state) {
      return {
        ...NetDiskCheckLinkValidityStatus.success,
        data: data,
      };
    }
    if (typeof data.error === "string") {
      if (data.error.includes("访问码")) {
        return {
          ...NetDiskCheckLinkValidityStatus.needAccessCode,
          data: data,
        };
      } else if (data.error.includes("链接") || data.error.includes("分享已取消")) {
        return {
          ...NetDiskCheckLinkValidityStatus.failed,
          data: data,
        };
      }
    }

    return {
      ...NetDiskCheckLinkValidityStatus.unknown,
      data: data,
    };
  },
};
