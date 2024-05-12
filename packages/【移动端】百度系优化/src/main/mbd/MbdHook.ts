import { unsafeWindow } from "ViteGM";
import { OriginPrototype, log } from "@/env";
import { BaiduHook } from "@/hook/BaiduHook";
import { PopsPanel } from "@/setting/setting";

const BaiduMbdHook = {
    init() {
        PopsPanel.execMenu("baidu_mbd_camouflage_lite_baiduboxapp", () => {
            log.info("hook: navigator.userAgent ==> lite baiduboxapp");
            let oldNavigatorUserAgent = unsafeWindow.navigator.userAgent;
            OriginPrototype.Object.defineProperty(
                unsafeWindow.navigator,
                "userAgent",
                {
                    get() {
                        return oldNavigatorUserAgent + " lite baiduboxapp";
                    },
                }
            );
        })
        PopsPanel.execMenu("baidu_mbd_hijack_wakeup", () => {
            log.info("hook: Function.call");
            BaiduHook.hijackFunctionCall_BaiJiaHao_Map();
        })
        PopsPanel.execMenu("", () => {
            log.info("hook: window.BoxJSBefore");
            BaiduHook.hijackBoxJSBefore();
        })
        PopsPanel.execMenu("", () => {
            log.info("hook: Element.appendChild");
            BaiduHook.hijackElementAppendChild();
        })
    },
};

export {
    BaiduMbdHook
}