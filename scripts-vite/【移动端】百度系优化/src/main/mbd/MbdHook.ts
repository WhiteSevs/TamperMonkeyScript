import { unsafeWindow } from "ViteGM";
import { OriginPrototype, log } from "@/env";
import { BaiduHook } from "@/hook/BaiduHook";
import { Panel } from "@components/setting/panel";

const BaiduMbdHook = {
  init() {
    Panel.execMenu("baidu_mbd_camouflage_lite_baiduboxapp", () => {
      log.info("hook: navigator.userAgent ==> lite baiduboxapp");
      let oldNavigatorUserAgent = unsafeWindow.navigator.userAgent;
      OriginPrototype.Object.defineProperty(unsafeWindow.navigator, "userAgent", {
        get() {
          return oldNavigatorUserAgent + " lite baiduboxapp";
        },
      });
    });
    Panel.execMenu("baidu_mbd_hijack_wakeup", () => {
      log.info("hook: Function.property.call");
      BaiduHook.functionCall("map");
    });
    Panel.execMenu("baidu_mbd_hijack_BoxJSBefore", () => {
      log.info("hook: window.BoxJSBefore");
      BaiduHook.windowBoxJSBefore();
    });
    Panel.execMenu("baidu_mbd_hijack_iframe", () => {
      log.info("hook: Element.appendChild");
      BaiduHook.elementAppendChild();
    });
  },
};

export { BaiduMbdHook };
