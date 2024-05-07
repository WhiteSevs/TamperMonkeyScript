import { BaiduHijack } from "@/hook/BaiDuHijack";
import { PopsPanel } from "@/ui";

const BaiduHaoKanHook = {
    init() {
        PopsPanel.execMenu("baidu_haokan_hijack_wakeup", () => {
            BaiduHijack.hijackFunctionCall_WebPack_HaoKan();

        })
    },
};


export {
    BaiduHaoKanHook
}