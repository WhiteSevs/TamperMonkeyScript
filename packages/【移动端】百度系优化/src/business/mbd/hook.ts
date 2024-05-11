import { unsafeWindow } from "ViteGM";
import { OriginPrototype } from "@/env";
import { BaiduHijack } from "@/hook/BaiDuHijack";
import { PopsPanel } from "@/ui/setting";

const BaiduMbdHook = {
    init() {
        PopsPanel.execMenu("baidu_mbd_camouflage_lite_baiduboxapp", () => {
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
            BaiduHijack.hijackFunctionCall_BaiJiaHao_Map();
        })
        PopsPanel.execMenu("", () => {
            BaiduHijack.hijackBoxJSBefore();
        })
        PopsPanel.execMenu("", () => {
            /* 劫持iframe添加到页面 */
            BaiduHijack.hijackElementAppendChild();
        })
    },
};

export {
    BaiduMbdHook
}