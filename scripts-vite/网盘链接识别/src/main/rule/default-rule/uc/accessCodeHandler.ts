import { log, utils } from "@/env";
import { unsafeWindow } from "ViteGM";

export const NetDiskAccessCodeHandler_uc = function (
  handlerConfig: NetDiskHandlerAccessCodeOption,
  accessCode: AccessCodeType
): AccessCodeType {
  if (window.location.hostname !== "drive.uc.cn" && !window.location.pathname.startsWith("/s/")) {
    return accessCode;
  }
  const shareCodeCache = unsafeWindow.localStorage.getItem("share_code_cache");
  if (shareCodeCache) {
    const shareCodeCacheData = JSON.parse(shareCodeCache);
    if (Array.isArray(shareCodeCacheData)) {
      const findValue = shareCodeCacheData.find((it) => {
        return it.key === handlerConfig.shareCode && typeof it.code === "string" && utils.isNotNull(it.code);
      });
      if (findValue) {
        const local_accessCode = findValue.code;
        log.success("成功获取localStorage存储的访问码: " + local_accessCode);
        return local_accessCode;
      }
    }
  }
  return accessCode;
};
