import { log, utils } from "@/env";
import { unsafeWindow } from "ViteGM";

export const NetDiskAccessCodeHandler_123pan = function (
  handlerConfig: NetDiskHandlerAccessCodeOption,
  accessCode: AccessCodeType
): AccessCodeType {
  if (!window.location.hostname.endsWith("share.123pan.cn") || utils.isNotNull(accessCode)) {
    return accessCode;
  }
  let localKey = `sharePwd_${handlerConfig.shareCode}`;
  let localKey2 = `sharePwdd_${handlerConfig.shareCode}`;
  let local_accessCode = unsafeWindow.localStorage.getItem(localKey) || unsafeWindow.localStorage.getItem(localKey2);
  if (utils.isNotNull(local_accessCode)) {
    local_accessCode = local_accessCode.replace(/^"/, "").replace(/"$/, "");
    log.success("成功获取localStorage存储的访问码: " + local_accessCode);
    return local_accessCode;
  }
  const searchParams = new URLSearchParams(window.location.search);
  const pwd = searchParams.get("pwd");
  if (pwd) {
    log.success("成功获取URL参数中的访问码: " + pwd);
    return pwd;
  }
  return accessCode;
};
