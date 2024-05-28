import { Greasyfork } from "@/main/Greasyfork";

const SettingUIScriptLib: PopsPanelContentConfig = {
	id: "greasy-fork-panel-config-library",
	title: "库",
	callback(event, rightHeaderElement, rightContainerElement) {
		Greasyfork.UIScriptList(
			"script-library",
			event,
			rightHeaderElement,
			rightContainerElement
		);
	},
	forms: [],
};

export { SettingUIScriptLib };
