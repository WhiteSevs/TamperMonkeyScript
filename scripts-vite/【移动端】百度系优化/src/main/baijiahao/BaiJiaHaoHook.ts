import { log } from "@/env";
import { BaiduHook } from "@/hook/BaiduHook";
import { Panel } from "@components/setting/panel";

const BaiJiaHaoHook = {
  init() {
    Panel.execMenu("baijiahao_hijack_wakeup", () => {
      log.success("hook: Function.property.call");
      BaiduHook.functionCall("baijiahao_invoke");
    });
    Panel.execMenu("baidu_baijiahao_hijack_iframe", () => {
      log.success("hook: Element.append");
      BaiduHook.elementAppendChild(function (element) {
        if (element.localName === "script" && (element as HTMLScriptElement)?.src?.includes("landing-share")) {
          log.success("阻止加载：" + (element as HTMLScriptElement).src);
          return true;
        }
      });
    });
    Panel.execMenu("baidu_baijiahao_hijack_openbox", () => {
      log.success("hook: window.Box");
      BaiduHook.windowOpenBox();
    });
    Panel.execMenu("baidu_baijiahao_hijack_openContentBox", () => {
      log.success("hook: window.openContentBox");
      BaiduHook.window_openContentBox();
    });
  },
};

export { BaiJiaHaoHook };
