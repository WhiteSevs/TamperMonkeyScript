import { DOMUtils, httpx, utils } from "@/env";
import { NetDiskCheckLinkValidityStatus } from "@/main/handler/check-valid/NetDiskCheckLinkValidityStatus";
import { NetDiskCheckLinkValidityRequestOption } from "@/main/handler/check-valid/NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "@/main/link-click-mode/NetDiskLinkClickMode";

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
    const $errorTip =
      responseDocument.querySelector<HTMLElement>(".h5-page-main")! ||
      responseDocument.querySelector<HTMLElement>(".share-error-tips");
    if ($errorTip) {
      // 存在错误
      const errorText = $errorTip.textContent || $errorTip.innerText;
      if (
        errorText.includes("失效") ||
        errorText.includes("不存在") ||
        errorText.includes("违规") ||
        errorText.includes("删除") ||
        errorText.includes("停止分享")
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
