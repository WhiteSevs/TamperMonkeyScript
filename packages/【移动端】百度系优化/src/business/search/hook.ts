import { unsafeWindow } from "ViteGM";
import { OriginPrototype } from "@/env";
import { BaiduHijack } from "@/hook/BaiDuHijack";
import { PopsPanel } from "@/ui/setting";

/**
 * 处理劫持
 */
const BaiduSearchHook = {
    init() {
        if (PopsPanel.getValue("baidu_search_hijack_define")) {
            OriginPrototype.Object.defineProperty(unsafeWindow, "define", {
                get(...args) {
                    return function (...args: any) { };
                },
            });
        }
        if (PopsPanel.getValue("baidu_search_hijack__onClick")) {
            BaiduHijack.hijack_onClick("baidu_search_hijack__onClick");
        }
        if (PopsPanel.getValue("baidu_search_hijack_openbox")) {
            BaiduHijack.hijackOpenBox();
        }
        if (
            PopsPanel.getValue("baidu_search_hijack_scheme") ||
            PopsPanel.getValue("baidu_search_hijack_copy")
        ) {
            if (
                PopsPanel.getValue("baidu_search_hijack_scheme") &&
                PopsPanel.getValue("baidu_search_hijack_copy")
            ) {
                BaiduHijack.hijackFunctionApply("copy scheme");
            } else {
                if (PopsPanel.getValue("baidu_search_hijack_scheme")) {
                    BaiduHijack.hijackFunctionApply("scheme");
                }
                if (PopsPanel.getValue("baidu_search_hijack_copy")) {
                    BaiduHijack.hijackFunctionApply("copy");
                }
            }
        }
        if (PopsPanel.getValue("baidu_search_hijack_setTimeout")) {
            BaiduHijack.hijackSetTimeout("getGeoLocation|loopPlay()");
        }
    },
};

export {
    BaiduSearchHook
}