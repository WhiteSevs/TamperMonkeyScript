import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UISwitch } from "../common-components/ui-switch";

export const Component_Guide: PopsPanelContentConfig = {
	id: "component-guide",
	title: "导读",
	forms: [
		{
			type: "forms",
			text: "",
			forms: [
				UISwitch(
					"页面美化",
					"mt-guide-beautifyPage",
					true,
					void 0,
					"美化样式"
				),
			],
		},
	],
};
