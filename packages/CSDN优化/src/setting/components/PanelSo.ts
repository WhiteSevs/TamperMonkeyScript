import { CSDNRouter } from "@/router/CSDNRouter"
import { UISwitch } from "@/setting/common-components/ui-switch"

const SettingUISo: PopsPanelContentConfig = {
    id: "panel-so",
    title: "搜索",
    isDefault() {
        return CSDNRouter.isSo()
    },
    forms: [
        {
            text: "C知道-功能",
            type: "forms",
            forms: [
                UISwitch(
                    "去除水印",
                    "csdn-so-cknow-removeMaskCover",
                    true
                ),
            ],
        },
    ]
}


export {
    SettingUISo
}