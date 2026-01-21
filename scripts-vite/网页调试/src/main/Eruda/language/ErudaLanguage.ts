import { log, unsafeWin } from "@/env";
import { GlobalSettingConfig } from "@/setting/config";
import { Panel } from "@components/setting/panel";
import { zh_CN_language } from "./zh-CN/zh-CN";

export const ErudaLanguage = {
  $data: {},
  data: [
    {
      text: "English",
      lng: "en-US",
    },
    {
      text: "中文",
      lng: "zh-CN",
      data: zh_CN_language,
    },
  ],
  init() {
    const Eruda =
      unsafeWin.Eruda ||
      // @ts-expect-error
      globalThis.Eruda;
    if (!Eruda) return;
    const i18n: import("i18next").i18n = Eruda._i18n;
    this.data.forEach((item) => {
      if (item.data == null) return;
      i18n.addResources(item.lng, "translation", item.data);
    });
    const lng = Panel.getValue<string>(GlobalSettingConfig.eruda_language.key);
    log.success(`切换语言：${lng}`);
    i18n.changeLanguage(lng);
    // i18n.emit("eruda:languageChanged");
  },
};
