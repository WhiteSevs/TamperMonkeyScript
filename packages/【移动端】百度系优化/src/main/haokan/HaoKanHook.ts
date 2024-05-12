import { log } from "@/env";
import { BaiduHook } from "@/hook/BaiduHook";
import { PopsPanel } from "@/setting/setting";

const BaiduHaoKanHook = {
    init() {
        PopsPanel.execMenu("baidu_haokan_hijack_wakeup", () => {
            log.success("hook: window.webpackJsonp");
            BaiduHook.hijackFunctionCall_WebPack_HaoKan();

        })
    },
};


export {
    BaiduHaoKanHook
}