import { DOMUtils, log } from "@/env";
import { BaiduHook } from "@/hook/BaiduHook";
import { PopsPanel } from "@/setting/setting";

const BaiduMapHook = {
    init() {
        PopsPanel.execMenu("baidu_map_hijack_wakeup", () => {
            log.success("hook: Element.appendChild")
            BaiduHook.elementAppendChild();
            log.success("hook: window.setTimeout")
            BaiduHook.setTimeout(
                /goToDownloadOfAndrod|downloadAndrFromMarket|jumpToDownloadPage|jumpToMiddlePage|downloadIosPkg/
            );
            DOMUtils.ready(function () {
                log.success("hook: $.append")
                BaiduHook.windowJQueryAppend();
            });
        })
    }
}

export {
    BaiduMapHook
}