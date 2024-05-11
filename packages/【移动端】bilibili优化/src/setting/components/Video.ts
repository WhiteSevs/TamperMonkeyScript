import { ScriptRouter } from "@/router/router"
import { UISwitch } from "../common-components/ui-switch"

const SettingUIVideo: PopsPanelContentConfig = {
    id: "panel-video",
    title: "视频",
    isDefault() {
        return ScriptRouter.isVideo();
    },
    forms: [
        {
            text: "功能",
            type: "forms",
            forms: [
            ]
        },
        {
            text: "变量设置",
            type: "forms",
            forms: [
                UISwitch(
                    "playBtnNoOpenApp",
                    "bili-video-setVideoPlayer",
                    false,
                    void 0,
                    "设置playBtnNoOpenApp为true,playBtnOpenApp为false,coverOpenApp为false",
                ),
            ]
        },
    ]
}

export {
    SettingUIVideo
}