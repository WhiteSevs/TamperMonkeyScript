import { cookieManager, log, utils } from "@/env";
import { GM_getValue, GM_setValue, unsafeWindow } from "ViteGM";
import { NetDiskRuleData } from "../../../data/NetDiskRuleData";
import { NetDiskRule_feijipan } from "./rule";

export const NetDiskAuthorization_feijipan_appToken = {
  KEY: "feijipan_appToken",
  set(value: string) {
    GM_setValue(this.KEY, value);
  },
  get() {
    return GM_getValue<string>(this.KEY);
  },
};
export const NetDiskAuthorization_feijipan = function () {
  if (!window.location.hostname.endsWith(".feijipan.com") && window.location.hostname !== "feijipan.com") {
    return;
  }
  // 没在设置中开启直链获取就不获取鉴权信息
  if (NetDiskRuleData.function.linkClickMode(NetDiskRule_feijipan.setting.key) !== "parseFile") {
    return;
  }
  const cookie_appToken = cookieManager.get("appToken");
  if (cookie_appToken) {
    const appToken = cookie_appToken.value;
    log.success("获取小飞机网盘的appToken: " + appToken);
    NetDiskAuthorization_feijipan_appToken.set(appToken);
  }
};
