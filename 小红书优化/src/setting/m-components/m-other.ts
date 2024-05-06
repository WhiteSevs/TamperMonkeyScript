import { UISwitch } from "../common-components/ui-switch";

const MSettingUI_Other: PopsPanelContentConfig = {
    id: "little-red-book-panel-config-other",
    title: "其它",
    forms: [
        {
            text: "劫持/拦截",
            type: "forms",
            forms: [
                UISwitch(
                    "劫持Vue",
                    "little-red-book-hijack-vue",
                    false,
                    void 0,
                    "恢复__vue__属性",
                ),
            ],
        },
    ],
}

export {
    MSettingUI_Other
}