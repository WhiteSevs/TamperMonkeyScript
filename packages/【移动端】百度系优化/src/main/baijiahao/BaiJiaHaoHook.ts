import { log } from "@/env";
import { BaiduHook } from "@/hook/BaiduHook";
import { PopsPanel } from "@/setting/setting";

const BaiJiaHaoHook = {
    init() {
        PopsPanel.execMenu("baijiahao_hijack_wakeup", () => {
            log.success("hook: Function.call")
            BaiduHook.hijackFunctionCall_BaiJiaHao_Map();
        })
        PopsPanel.execMenu("baidu_baijiahao_hijack_iframe", () => {
            log.success("hook: Element.append")
            BaiduHook.hijackElementAppendChild(function (element) {
                if (
                    element.localName === "script" &&
                    (element as HTMLScriptElement)?.src?.includes("landing-share")
                ) {
                    log.success("阻止加载：" + (element as HTMLScriptElement).src);
                    return true;
                }
            });
        })
        PopsPanel.execMenu("baidu_baijiahao_hijack_openbox", () => {
            log.success("hook: window.Box")
            BaiduHook.hijackOpenBox();
        })
    },
};

export {
    BaiJiaHaoHook
}