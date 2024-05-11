import { UISwitch } from "../common-components/ui-switch"

const SettingUICommon: PopsPanelContentConfig = {
    id: "panel-common",
    title: "通用",
    forms: [
        {
            text: "功能",
            type: "forms",
            forms: [
                UISwitch(
                    "监听路由改变",
                    "bili-listenRouterChange",
                    false,
                    void 0,
                    "用于处理页面跳转时功能不生效问题"
                )
            ]
        },
        {
            text: "变量设置",
            type: "forms",
            forms: [
                UISwitch(
                    "isLogin",
                    "bili-setLogin",
                    false,
                    void 0,
                    "设置isLogin为true",
                ),
                UISwitch(
                    "isClient",
                    "bili-setIsClient",
                    false,
                    void 0,
                    "设置isClient为true",
                ),
                UISwitch(
                    "tinyApp",
                    "bili-setTinyApp",
                    false,
                    void 0,
                    "设置tinyApp为true",
                ),
            ]
        },
        {
            text: "劫持/拦截",
            type: "forms",
            forms: [
                UISwitch(
                    "阻止调用App",
                    "bili-video-hook-callApp",
                    false,
                    void 0,
                    "处理函数: PlayerAgent",
                ),
            ]
        }
    ],
}

export {
    SettingUICommon
}