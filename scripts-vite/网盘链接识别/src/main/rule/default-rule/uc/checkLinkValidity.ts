import { DOMUtils, httpx, utils } from "@/env";
import { NetDiskCheckLinkValidityStatus } from "@/main/check-valid/NetDiskCheckLinkValidityStatus";
import { NetDiskCheckLinkValidityRequestOption } from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "../../../link-click-mode/NetDiskLinkClickMode";

export const NetDiskCheckLinkValidity_uc: NetDiskCheckLinkValidityEntranceInstance = {
  async init(netDiskInfo) {
    const { ruleIndex, shareCode, accessCode } = netDiskInfo;
    const response = await httpx.get("https://drive.uc.cn/s/" + shareCode, {
      headers: {
        "User-Agent": utils.getRandomAndroidUA(),
        Host: "drive.uc.cn",
        Referer: NetDiskLinkClickModeUtils.getBlankUrl({
          ruleKeyName: "uc",
          ruleIndex,
          shareCode,
          accessCode,
        }),
        Origin: "https://drive.uc.cn",
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
    const responseDocument = DOMUtils.toElement(responseText, true, true);
    if (responseDocument.querySelector(".h5-page-main")) {
      // 存在错误
      const $h5PageMain = responseDocument.querySelector<HTMLElement>(".h5-page-main")!;
      const errorText = $h5PageMain.textContent || $h5PageMain.innerText;
      if (
        errorText.includes("失效") ||
        errorText.includes("不存在") ||
        errorText.includes("违规") ||
        errorText.includes("删除")
      ) {
        return {
          ...NetDiskCheckLinkValidityStatus.failed,
          data: response,
        };
      } else {
        return {
          ...NetDiskCheckLinkValidityStatus.unknown,
          data: response,
        };
      }
    } else if (responseDocument.querySelector(".main-body .input-wrap input")) {
      return {
        ...NetDiskCheckLinkValidityStatus.needAccessCode,
        data: response,
      };
    } else {
      return {
        ...NetDiskCheckLinkValidityStatus.success,
        data: response,
      };
    }
  },
};
