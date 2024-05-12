import { BaiduRouter } from "@/router/BaiduRouter";
import { UISwitch } from "@/setting/common-components/ui-switch";

const PanelMapSettingUI: PopsPanelContentConfig = {
    id: "baidu-panel-config-map",
    title: "地图",
    headerTitle: "百度地图<br />map.baidu.com",
    isDefault() {
        return BaiduRouter.isMap();
    },
    scrollToDefaultView: true,
    forms: [
        {
            text: "劫持/拦截",
            type: "forms",
            forms: [
                UISwitch(
                    "拦截-唤醒App",
                    "baidu_map_hijack_wakeup",
                    false,
                    void 0,
                    "阻止唤醒调用App"
                ),
            ],
        },
    ],
}

export {
    PanelMapSettingUI
}