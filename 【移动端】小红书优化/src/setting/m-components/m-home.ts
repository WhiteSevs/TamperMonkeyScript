import { UISwitch } from "../common-components/ui-switch"

const MSettingUI_Home: PopsPanelContentConfig = {
    id: "little-red-book-panel-config-home",
    title: "主页",
    forms: [
        {
            text: "劫持/拦截",
            type: "forms",
            forms: [
                UISwitch(
                    "劫持点击事件",
                    "little-red-book-repariClick",
                    true,
                    void 0,
                    "可阻止点击跳转至下载页面",
                ),
            ],
        },
    ],
}

export {
    MSettingUI_Home
}