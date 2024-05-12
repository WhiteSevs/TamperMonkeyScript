import { unsafeWindow } from "ViteGM";
import { OriginPrototype, log } from "@/env";
import { BaiduHook } from "@/hook/BaiduHook";
import { PopsPanel } from "@/setting/setting";

/**
 * 处理劫持
 */
const BaiduSearchHook = {
    init() {
        PopsPanel.execMenu('baidu_search_hijack_define', () => {
            log.success('hook: window.define');
            OriginPrototype.Object.defineProperty(unsafeWindow, "define", {
                get(...args) {
                    return function (...args: any) { };
                },
            });
        });
        PopsPanel.execMenu('baidu_search_hijack__onClick', () => {
            log.success('hooke: baidu onClick');
            BaiduHook.hijack_onClick("baidu_search_hijack__onClick");
        });
        PopsPanel.execMenu('baidu_search_hijack_openbox', () => {
            log.success('hook: window.OpenBox');
            BaiduHook.hijackOpenBox();
        });
        if (
            PopsPanel.getValue("baidu_search_hijack_scheme") ||
            PopsPanel.getValue("baidu_search_hijack_copy")
        ) {
            if (
                PopsPanel.getValue("baidu_search_hijack_scheme") &&
                PopsPanel.getValue("baidu_search_hijack_copy")
            ) {
                log.success('hook: Function.apply => copy scheme');
                BaiduHook.hijackFunctionApply("copy scheme");
            } else {
                PopsPanel.execMenu('baidu_search_hijack_scheme', () => {
                    log.success('hook: Function.apply => scheme');
                    BaiduHook.hijackFunctionApply("scheme");
                });
                PopsPanel.execMenu('baidu_search_hijack_copy', () => {
                    log.success('hook: Function.apply => copy');
                    BaiduHook.hijackFunctionApply("copy");
                });
            }
        }
        PopsPanel.execMenu('baidu_search_hijack_setTimeout', () => {
            BaiduHook.hijackSetTimeout("getGeoLocation|loopPlay()");
        });
    },
};

export {
    BaiduSearchHook
}