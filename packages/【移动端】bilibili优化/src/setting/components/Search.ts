import { ScriptRouter } from "@/router/router"
import { UISwitch } from "../common-components/ui-switch"

const SettingUISearch: PopsPanelContentConfig = {
    id: "panel-search",
    title: "搜索",
    isDefault() {
        return ScriptRouter.isSearch()
    },
    forms: [
        {
            text: "功能",
            type: "forms",
            forms: [
                UISwitch(
                    "修复点击UP主正确进入空间",
                    "bili-search-repair-enter-user-home",
                    false,
                    void 0,
                    "可以修复点击UP主进入个人空间但是是404问题"
                )
            ]
        }
    ]
}

export {
    SettingUISearch
}