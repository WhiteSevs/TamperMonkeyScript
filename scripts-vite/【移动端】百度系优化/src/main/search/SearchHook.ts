import { log } from "@/env";
import { BaiduHook } from "@/hook/BaiduHook";
import { Panel } from "@components/setting/panel";

/**
 * 处理劫持
 */
const BaiduSearchHook = {
  init() {
    Panel.execMenuOnce("baidu_search_hijack__onClick", () => {
      log.success("hook: baidu onClick");
      BaiduHook.objectDefineProperty_search("baidu_search_hijack__onClick");
    });
    Panel.execMenuOnce("baidu_search_hijack_openbox", () => {
      log.success("hook: window.OpenBox");
      BaiduHook.windowOpenBox();
    });
    Panel.execMenuOnce("baidu_search_hijack_scheme", () => {
      log.success("hook: Function.apply => scheme");
      BaiduHook.functionApply("scheme");
    });
    Panel.execMenuOnce("baidu_search_hijack_copy", () => {
      log.success("hook: Function.apply => copy");
      BaiduHook.functionApply("copy");
    });
    Panel.execMenuOnce("baidu_search_hijack_setTimeout", () => {
      BaiduHook.setTimeout("getGeoLocation|loopPlay()|.videoAutoplay");
    });
  },
};

export { BaiduSearchHook };
