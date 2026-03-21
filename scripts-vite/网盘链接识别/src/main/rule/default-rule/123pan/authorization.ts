import { log, utils } from "@/env";
import { GM_getValue, GM_setValue, unsafeWindow } from "ViteGM";
import { NetDiskRuleData } from "@/main/data/NetDiskRuleData";
import { NetDiskRule_123pan } from "./rule";

export const NetDiskAuthorization_123pan_Authorization = {
  KEY: "_123pan_User_Authorization",
  set(value: string) {
    GM_setValue(this.KEY, value);
  },
  get() {
    return GM_getValue<string>(this.KEY);
  },
};
export const NetDiskAuthorization_123pan = function () {
  if (window.location.hostname !== "www.123pan.com") {
    return;
  }
  // 没在设置中开启直链获取就不获取鉴权信息
  if (NetDiskRuleData.function.linkClickMode(NetDiskRule_123pan.setting.key) !== "parseFile") {
    return;
  }
  let authorToken = unsafeWindow.localStorage.getItem("authorToken");
  if (utils.isNull(authorToken)) {
    return;
  }
  // 去除左右的引号
  authorToken = authorToken.replace(/^\"/, "").replace(/\"$/, "");
  log.success("获取123网盘已登录用户的authorToken值👇");
  log.success(authorToken);
  NetDiskAuthorization_123pan_Authorization.set(authorToken);
};
