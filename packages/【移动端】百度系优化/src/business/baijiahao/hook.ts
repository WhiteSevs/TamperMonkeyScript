import { log } from "@/env";
import { BaiduHijack } from "@/hook/BaiDuHijack";
import { PopsPanel } from "@/ui/setting";

const BaiJiaHaoHook = {
    init() {
        if (PopsPanel.getValue("baijiahao_hijack_wakeup")) {
            BaiduHijack.hijackFunctionCall_BaiJiaHao_Map();
        }

        if (PopsPanel.getValue("baidu_baijiahao_hijack_iframe")) {
            BaiduHijack.hijackElementAppendChild(function (element) {
                if (
                    element.localName === "script" &&
                    (element as HTMLScriptElement)?.src?.includes("landing-share")
                ) {
                    log.success("阻止加载：" + (element as HTMLScriptElement).src);
                    return true;
                }
            });
        }
        if (PopsPanel.getValue("baidu_baijiahao_hijack_openbox")) {
            BaiduHijack.hijackOpenBox();
        }
    },
};

export {
    BaiJiaHaoHook
}