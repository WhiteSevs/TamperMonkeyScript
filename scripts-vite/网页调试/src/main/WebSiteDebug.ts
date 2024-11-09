import { PopsPanel } from "@/setting/setting";
import { Tools } from "./Tools";
import { PanelSettingConfig } from "@/setting/panel-setting-config";

export const WebSiteDebug = {
	init() {
		if (Tools.handleIframe()) {
			if (PopsPanel.getValue(PanelSettingConfig.autoLoadDebugTool.key)) {
				Tools.runDebugTool();
			} else {
				Tools.addControlDebugToolScriptMenu();
			}
		}
	},
};
