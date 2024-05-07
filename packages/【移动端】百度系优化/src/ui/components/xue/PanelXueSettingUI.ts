import { BaiduRouter } from "@/router";

const PanelXueSettingUI: PopsPanelContentConfig = {
    id: "baidu-panel-config-xue",
    title: "知了好学",
    headerTitle: "知了好学<br />xue.baidu.com",
    isDefault() {
        return BaiduRouter.isJingYan();
    },
    scrollToDefaultView: true,
    forms: [],
}


export {
    PanelXueSettingUI
}