import { UISwitch } from "../common-components/ui-switch"

const SettingUI_Common: PopsPanelContentConfig = {
    id: "xhs-panel-config-common",
    title: "通用",
    forms: [
        {
            text: "功能",
            type: "forms",
            "forms": [
                UISwitch(
                    "允许复制",
                    "pc-xhs-allowCopy",
                    true,
                    void 0,
                    "可以选择文字并复制"
                ),
                UISwitch(
                    "新标签页打开文章",
                    "pc-xhs-open-blank-article",
                    false,
                    void 0,
                    "点击文章不会在本页展开，会打开新标签页"
                ),
            ]
        },
        {
            text: "搜索",
            type: "forms",
            forms: [
                UISwitch(
                    "允许搜索",
                    "pc-xhs-search-enable",
                    false,
                    void 0,
                    "可以在不登录的情况下进行搜索",
                ),
                UISwitch(
                    "新标签页打开-搜索按钮",
                    "pc-xhs-search-open-blank-btn",
                    false,
                    void 0,
                    "点击右边的搜索按钮直接新标签页打开搜索内容"
                ),
                UISwitch(
                    "新标签页打开-回车键",
                    "pc-xhs-search-open-blank-keyboard-enter",
                    false,
                    void 0,
                    "按下回车键直接新标签页打开搜索内容"
                ),
            ],
        },
        {
            text: "劫持/拦截",
            type: "forms",
            forms: [
                UISwitch(
                    "劫持Vue",
                    "pc-xhs-hook-vue",
                    false,
                    void 0,
                    "恢复__vue__属性",
                ),
            ],
        },
    ],

}

export {
    SettingUI_Common
}