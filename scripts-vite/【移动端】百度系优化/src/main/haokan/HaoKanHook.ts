import { log } from "@/env";
import { BaiduHook } from "@/hook/BaiduHook";
import { Panel } from "@components/setting/panel";

const BaiduHaoKanHook = {
    init() {
        Panel.execMenu("baidu_haokan_hijack_wakeup", () => {
            log.success("hook: window.webpackJsonp");
            BaiduHook.windowWebpackJsonp_haokan();

        })
    },
};


export {
    BaiduHaoKanHook
}