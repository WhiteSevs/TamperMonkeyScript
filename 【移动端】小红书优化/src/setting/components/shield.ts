import { UISwitch } from "../common-components/ui-switch"

const SettingUI_Shield: PopsPanelContentConfig = {
    id: "xhs-panel-config-shield",
    title: "屏蔽",
    forms: [
        {
            text: "功能",
            type: "forms",
            forms: [
                UISwitch(
                    "【屏蔽】广告",
                    "pc-xhs-shieldAd",
                    true,
                    void 0,
                    "屏蔽屏蔽屏蔽屏蔽",
                ),
                UISwitch(
                    "【屏蔽】登录弹窗",
                    "pc-xhs-shield-login-dialog",
                    true,
                    void 0,
                    "屏蔽自动跳出的需要登录的弹窗"
                ),
                UISwitch(
                    "【屏蔽】选择文字弹出的搜索提示",
                    "pc-xhs-shield-select-text-search-position",
                    false,
                    void 0,
                    "屏蔽选择文字弹出的搜索提示",
                )
            ]
        }
    ],
}

export {
    SettingUI_Shield
}