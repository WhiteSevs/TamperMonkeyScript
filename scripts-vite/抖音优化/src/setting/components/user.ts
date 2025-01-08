import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UISwitch } from "../common-components/ui-switch";
import { UISelect } from "../common-components/ui-select";
import { AutoOpenOrClose } from "../utils/all-open-or-close";

export const PanelUserConfig: PopsPanelContentConfig = {
	id: "panel-config-user",
	title: "用户",
	forms: [
		{
            text: "功能",
            type: "forms",
            forms: [
                UISwitch(
                    "显示UID",
                    "dy-user-addShowUserUID",
                    true,
                    void 0,
                    "在用户信息区域下方显示当前用户的uid"
                ),
            ],
        },
	],
};
