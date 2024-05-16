import { DouYinRouter } from "@/router/router";
import { UISwitch } from "../common-components/ui-switch";

const PanelSearchConfig: PopsPanelContentConfig = {
	id: "panel-config-search",
	title: "搜索",
	isDefault() {
		return DouYinRouter.isSearch();
	},
	forms: [
		{
			text: "屏蔽",
			type: "forms",
			forms: [
				UISwitch(
					"【屏蔽】相关搜索",
					"屏蔽右边的相关搜索",
					"douyin-search-shieldReleatedSearches",
					false,
					void 0
				),
			],
		},
	],
};

export { PanelSearchConfig };
