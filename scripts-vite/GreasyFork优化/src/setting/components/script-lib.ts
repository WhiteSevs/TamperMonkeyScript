import { Greasyfork } from "@/main/Greasyfork";
import { PopsPanelUISetting } from "@/main/ui-setting/PopsPanelUISetting";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import i18next from "i18next";

export const SettingUIScriptLib: PopsPanelContentConfig = {
	id: "greasy-fork-panel-config-library",
	title: i18next.t("库"),
	callback(event, rightHeaderElement, rightContainerElement) {
		PopsPanelUISetting.UIScriptList(
			"script-library",
			event,
			rightHeaderElement,
			rightContainerElement
		);
	},
	forms: [],
};
