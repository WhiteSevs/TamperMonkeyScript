import { ScriptRouter } from "@/router/router"
import { UISwitch } from "../common-components/ui-switch"

const SettingUIBangumi: PopsPanelContentConfig = {
    id: "panel-bangumi",
    title: "番剧",
    isDefault() {
        return ScriptRouter.isBangumi();
    },
    forms: [
        {
            text: "变量设置",
            type: "forms",
            forms: [
                UISwitch(
                    "pay",
                    "bili-bangumi-setPay",
                    false,
                    void 0,
                    "设置pay为1",
                ),
            ]
        },
        {
            text: "覆盖点击事件",
            type: "forms",
            forms: [
                UISwitch(
                    "【选集】",
                    "bili-bangumi-cover-clicl-event-chooseEp",
                    false,
                    void 0,
                    "让【选集】的视频列表可点击跳转",
                ),
                UISwitch(
                    "【其它】",
                    "bili-bangumi-cover-clicl-event-other",
                    false,
                    void 0,
                    "让【PV&其他】、【预告】、【主题曲】、【香境剧场】等的视频列表可点击跳转",
                ),
                UISwitch(
                    "【更多推荐】",
                    "bili-bangumi-cover-clicl-event-recommend",
                    false,
                    void 0,
                    "让【更多推荐】的视频列表可点击跳转",
                ),
            ]
        },
        {
            text: "劫持/拦截",
            type: "forms",
            forms: [
                UISwitch(
                    "阻止调用App",
                    "bili-bangumi-hook-callApp",
                    false,
                    void 0,
                    "",
                ),
            ]
        }
    ]
}

export {
    SettingUIBangumi
}