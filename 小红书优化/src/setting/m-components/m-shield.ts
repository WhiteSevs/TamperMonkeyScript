import { UISwitch } from "../common-components/ui-switch";

const MSettingUI_Shield: PopsPanelContentConfig = {
    id: "little-red-book-panel-config-shield",
    title: "屏蔽",
    forms: [
        {
            text: "功能",
            type: "forms",
            forms: [
                UISwitch(
                    "【屏蔽】广告",
                    "little-red-book-shieldAd",
                    true,
                    void 0,
                    "如：App内打开",
                ),
                UISwitch(
                    "【屏蔽】底部搜索发现",
                    "little-red-book-shieldBottomSearchFind",
                    true,
                    void 0,
                    "建议开启",
                ),
                UISwitch(
                    "【屏蔽】底部工具栏",
                    "little-red-book-shieldBottomToorBar",
                    true,
                    void 0,
                    "建议开启",
                ),
            ],
        },
    ],
};

export {
    MSettingUI_Shield
}