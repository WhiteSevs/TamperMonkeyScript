import { DOMUtils, log } from "@/env";
import { BaiduHook } from "@/hook/BaiduHook";
import { Panel } from "@components/setting/panel";

export const BaiduMapHook = {
  init() {
    Panel.execMenuOnce("baidu_map_hijack-element-appendChild", () => {
      log.success("hook: Element.appendChild");
      BaiduHook.elementAppendChild();
    });
    Panel.execMenuOnce("baidu_map_hijack-setTimeout", () => {
      log.success("hook: window.setTimeout");
      BaiduHook.setTimeout(
        /goToDownloadOfAndrod|downloadAndrFromMarket|jumpToDownloadPage|jumpToMiddlePage|downloadIosPkg/
      );
    });
    DOMUtils.onReady(function () {
      Panel.execMenuOnce("baidu_map_hijack-jQuery-append", () => {
        log.success("hook: $.append");
        BaiduHook.windowJQueryAppend();
      });
    });
  },
};
