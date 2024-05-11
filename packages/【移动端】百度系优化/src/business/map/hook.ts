import { DOMUtils } from "@/env";
import { BaiduHijack } from "@/hook/BaiDuHijack";
import { PopsPanel } from "@/ui/setting";

const BaiduMapHook = {
    init() {
        PopsPanel.execMenu("baidu_map_hijack_wakeup", () => {
            BaiduHijack.hijackElementAppendChild();
            DOMUtils.ready(function () {
                BaiduHijack.hijackJQueryAppend();
            });
            BaiduHijack.hijackSetTimeout(
                /goToDownloadOfAndrod|downloadAndrFromMarket|jumpToDownloadPage|jumpToMiddlePage|downloadIosPkg/
            );
        })
    }
}

export {
    BaiduMapHook
}