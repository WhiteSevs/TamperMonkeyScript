import { BaiduRouter } from "@/router/BaiduRouter";

const PanelImageSettingUI: PopsPanelContentConfig = {
    id: "baidu-panel-config-image",
    title: "图片",
    headerTitle: "百度经验<br />image.baidu.com",
    isDefault() {
        return BaiduRouter.isJingYan();
    },
    scrollToDefaultView: true,
    forms: [],
}

export {
    PanelImageSettingUI
};