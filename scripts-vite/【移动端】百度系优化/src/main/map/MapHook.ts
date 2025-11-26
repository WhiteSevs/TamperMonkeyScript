import { addStyle, DOMUtils, log } from "@/env";
import { BaiduHook } from "@/hook/BaiduHook";
import { Panel } from "@components/setting/panel";
import blockCSS from "./shield.css?raw";

export const BaiduMapHook = {
  init() {
    addStyle(blockCSS);
    log.info("插入CSS规则");
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
