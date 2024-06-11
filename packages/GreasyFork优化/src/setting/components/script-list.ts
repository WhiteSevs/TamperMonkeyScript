import { Greasyfork } from "@/main/Greasyfork";
import i18next from "i18next";

const SettingUIScriptList: PopsPanelContentConfig = {
	id: "greasy-fork-panel-config-script-list",
	title: i18next.t("脚本列表"),
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
