import { log, utils } from "@/env";
import { unsafeWindow } from "ViteGM";

export const NetDiskAccessCodeHandler_baidu = function (
  handlerConfig: NetDiskHandlerAccessCodeOption,
  accessCode: AccessCodeType
): AccessCodeType {
  if (window.location.hostname !== "pan.baidu.com" || utils.isNotNull(accessCode)) {
    return accessCode;
  }
  let localKey = handlerConfig.shareCode + "_pwd";
  if (!localKey.startsWith("1")) {
    localKey = "1" + localKey;
  }
  const local_accessCode = unsafeWindow.localStorage.getItem(localKey);
  if (utils.isNotNull(local_accessCode)) {
    log.success("成功获取localStorage存储的访问码: " + local_accessCode);
    return local_accessCode;
  }
  return accessCode;
};
