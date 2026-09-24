import { httpx, utils } from "@/env";
import { NetDiskCheckLinkValidityStatus } from "@/main/handler/check-valid/NetDiskCheckLinkValidityStatus";
import { NetDiskCheckLinkValidityRequestOption } from "@/main/handler/check-valid/NetDiskCheckLinkValidity";

export const NetDiskCheckLinkValidity_123pan: NetDiskCheckLinkValidityEntranceInstance = {
  async init(netDiskInfo) {
    const { ruleIndex, shareCode, accessCode } = netDiskInfo;
    if (netDiskInfo.ruleIndex === 1) {
      // 新域名
      const response = await httpx.get(
        `https://www.123pan.cn/gsb/s/share-list`,

        {
          data: {
            shareKey: shareCode,
            SharePwd: accessCode,
            OrderId: "",
          },
          headers: {
            "User-Agent": utils.getRandomPCUA(),
            "Content-Type": "application/json",
            Host: "www.123pan.cn",
            Origin: "https://www.123pan.cn",
            Referer: "https://www.123pan.cn/",
          },
          ...NetDiskCheckLinkValidityRequestOption,
        }
      );
      if (!response.status && utils.isNull(response.data.responseText)) {
        return {
          ...NetDiskCheckLinkValidityStatus.networkError,
          data: response,
        };
      }
      const data = utils.toJSON(response.data.responseText);
      if (data.code !== 0) {
        const message = data.message || "未知错误";
        return {
          ...NetDiskCheckLinkValidityStatus.failed,
          msg: message,
          data: data,
        };
      }
      return {
        ...NetDiskCheckLinkValidityStatus.success,
        data: data,
      };
    } else {
      const response = await httpx.get("https://www.123pan.com/api/share/info?shareKey=" + shareCode, {
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
      const data = utils.toJSON(response.data.responseText);
      if (response.data.responseText.includes("分享页面不存在")) {
        return {
          ...NetDiskCheckLinkValidityStatus.failed,
          msg: "分享页面不存在",
          data: data,
        };
      }
      if (data["code"] !== 0) {
        return {
          ...NetDiskCheckLinkValidityStatus.failed,
          msg: typeof data.message === "string" ? data.message : NetDiskCheckLinkValidityStatus.failed.msg,
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
    }
  },
};
