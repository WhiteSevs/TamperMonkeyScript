import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UISwitch } from "@components/setting/components/ui-switch";

export const Component_Guide: PopsPanelContentConfig = {
	id: "component-guide",
	title: "导读",
	forms: [
		{
			type: "forms",
			text: "",
			forms: [
				UISwitch(
					"显示最新帖子",
					"mt-guide-showLatestPost",
					true,
					void 0,
					"在最上面显示最新发布的帖子"
				),
			],
		},
	],
};
