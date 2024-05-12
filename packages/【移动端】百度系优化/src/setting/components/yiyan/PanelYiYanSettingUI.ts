import { BaiduRouter } from "@/router/BaiduRouter";
import { UISwitch } from "@/setting/common-components/ui-switch";

const PanelYiYanSettingUI: PopsPanelContentConfig = {
    id: "baidu-panel-config-yiyan",
    title: "文心一言",
    headerTitle: "文心一言<br />yiyan.baidu.com",
    isDefault() {
        return BaiduRouter.isYiYan();
    },
    scrollToDefaultView: true,
    forms: [
        {
            text: "屏蔽",
            type: "forms",
            forms: [
                UISwitch(
                    "【屏蔽】文字/图片水印",
                    "baidu_yiyan_remove_ai_mask",
                    true
                ),
            ],
        },
    ],
}


export {
    PanelYiYanSettingUI
}