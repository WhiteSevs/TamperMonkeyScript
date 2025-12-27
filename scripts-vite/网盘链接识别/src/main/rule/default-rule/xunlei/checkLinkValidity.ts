import { httpx, utils } from "@/env";
import { NetDiskCheckLinkValidityStatus } from "@/main/check-valid/NetDiskCheckLinkValidityStatus";
import { NetDiskCheckLinkValidityRequestOption } from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "../../../link-click-mode/NetDiskLinkClickMode";

export const NetDiskCheckLinkValidity_xunlei: NetDiskCheckLinkValidityEntranceInstance = {
  async init(netDiskInfo) {
    const { ruleIndex, shareCode, accessCode } = netDiskInfo;
    const response = await httpx.post("https://xluser-ssl.xunlei.com/v1/shield/captcha/init", {
      data: JSON.stringify({
        client_id: "Xqp0kJBXWhwaTpB6",
        device_id: "925b7631473a13716b791d7f28289cad",
        action: "get:/drive/v1/share",
        meta: {
          package_name: "pan.xunlei.com",
          client_version: "1.45.0",
          captcha_sign: "1.fe2108ad808a74c9ac0243309242726c",
          timestamp: "1645241033384",
        },
      }),
      headers: {
        "User-Agent": utils.getRandomPCUA(),
        Host: "pan.xunlei.com",
        Referer: NetDiskLinkClickModeUtils.getBlankUrl({
          ruleKeyName: "xunlei",
          ruleIndex,
          shareCode,
          accessCode,
        }),
        Origin: "https://pan.xunlei.com",
      },
      ...NetDiskCheckLinkValidityRequestOption,
    });
    if (!response.status && utils.isNull(response.data.responseText)) {
      return {
        ...NetDiskCheckLinkValidityStatus.networkError,
        data: response,
      };
    }
    const postResponseData = utils.toJSON(response.data.responseText);
    const token = postResponseData["captcha_token"];
    const shareResponse = await httpx.get("https://api-pan.xunlei.com/drive/v1/share?share_id=" + shareCode, {
      headers: {
        "User-Agent": utils.getRandomPCUA(),
        Host: "pan.xunlei.com",
        Referer: NetDiskLinkClickModeUtils.getBlankUrl({
          ruleKeyName: "xunlei",
          ruleIndex,
          shareCode,
          accessCode,
        }),
        Origin: "https://pan.xunlei.com",
        "x-captcha-token": token,
        "x-client-id": "Xqp0kJBXWhwaTpB6",
        "x-device-id": "925b7631473a13716b791d7f28289cad",
      },
      ...NetDiskCheckLinkValidityRequestOption,
    });

    if (!shareResponse.status && utils.isNull(shareResponse.data.responseText)) {
      return {
        ...NetDiskCheckLinkValidityStatus.networkError,
        data: [response, shareResponse],
      };
    }
    let responseText = shareResponse.data.responseText;
    if (
      responseText.includes("NOT_FOUND") ||
      responseText.includes("SENSITIVE_RESOURCE") ||
      responseText.includes("EXPIRED") ||
      responseText.includes("DELETED")
    ) {
      return {
        ...NetDiskCheckLinkValidityStatus.failed,
        data: shareResponse,
      };
    } else if (responseText.includes("PASS_CODE_EMPTY")) {
      return {
        ...NetDiskCheckLinkValidityStatus.needAccessCode,
        data: shareResponse,
      };
    }
    return {
      ...NetDiskCheckLinkValidityStatus.success,
      data: shareResponse,
    };
  },
};
