import { Greasyfork } from "@/main/Greasyfork";
import { PopsPanelUISetting } from "@/main/ui-setting/PopsPanelUISetting";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import i18next from "i18next";

export const SettingUIScriptList: PopsPanelContentConfig = {
	id: "greasy-fork-panel-config-script-list",
	title: i18next.t("脚本列表"),
	callback(event, rightHeaderElement, rightContainerElement) {
		PopsPanelUISetting.UIScriptList(
			"script-list",
			event,
			rightHeaderElement,
			rightContainerElement
		);
	},
	forms: [],
};
