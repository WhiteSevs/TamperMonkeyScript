import { Greasyfork } from "@/main/Greasyfork";

const SettingUIScriptList: PopsPanelContentConfig = {
	id: "greasy-fork-panel-config-script-list",
	title: "脚本列表",
	callback(event, rightHeaderElement, rightContainerElement) {
		Greasyfork.UIScriptList(
			"script-list",
			event,
			rightHeaderElement,
			rightContainerElement
		);
	},
	forms: [],
};

export { SettingUIScriptList };
