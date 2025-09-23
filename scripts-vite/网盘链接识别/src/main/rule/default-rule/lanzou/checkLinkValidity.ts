import { httpx, utils } from "@/env";
import {
  NetDiskCheckLinkValidity,
  NetDiskCheckLinkValidityRequestOption,
} from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "../../../link-click-mode/NetDiskLinkClickMode";
import { NetDiskCheckLinkValidityStatus } from "@/main/check-valid/NetDiskCheckLinkValidityStatus";

export const NetDiskCheckLinkValidity_lanzou: NetDiskCheckLinkValidityEntranceInstance = {
  async init(netDiskInfo) {
    const { ruleIndex, shareCode, accessCode } = netDiskInfo;
    let url = NetDiskLinkClickModeUtils.getBlankUrl({
      ruleKeyName: "lanzou",
      ruleIndex,
      shareCode,
      accessCode,
    });
    let urlInst = new URL(url);

    let response = await httpx.get(url, {
      headers: {
        "User-Agent": utils.getRandomPCUA(),
        Host: urlInst.hostname,
        Origin: urlInst.origin,
        Referer: url,
      },
      ...NetDiskCheckLinkValidityRequestOption,
    });
    if (!response.status) {
      if (response.type === "ontimeout") {
        return {
          ...NetDiskCheckLinkValidityStatus.networkError,
          data: response,
        };
      }
    }
    let responseText = response.data.responseText;
    if (utils.isNull(responseText)) {
      // 空的
      return {
        ...NetDiskCheckLinkValidityStatus.failed,
        data: response,
        tipMsg: "响应数据为空",
      };
    } else if (responseText.includes("输入密码")) {
      return {
        ...NetDiskCheckLinkValidityStatus.needAccessCode,
        data: response,
      };
    } else if (
      responseText.includes("来晚啦") ||
      responseText.includes("不存在") ||
      responseText.includes("div>文件链接失效，请获取新链接</div>")
    ) {
      return {
        ...NetDiskCheckLinkValidityStatus.failed,
        data: response,
      };
    } else {
      if (response.status) {
        return {
          ...NetDiskCheckLinkValidityStatus.success,
          data: response,
        };
      } else {
        return {
          ...NetDiskCheckLinkValidityStatus.unknown,
          data: response,
          tipMsg: response.msg,
        };
      }
    }
  },
};
