import { PopsPanel } from "@/setting/setting";
import { DebugTool } from "./DebugTool";
import { PanelSettingConfig } from "@/setting/panel-setting-config";

export const WebSiteDebug = {
	init() {
		if (DebugTool.handleToolWithIframe()) {
			if (PopsPanel.getValue(PanelSettingConfig.autoLoadDebugTool.key)) {
				DebugTool.execDebugTool();
			} else {
				DebugTool.registerDebugToolMenuControls();
			}
		}
	},
};
