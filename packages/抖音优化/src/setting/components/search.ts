import { UISwitch } from "../common-components/ui-switch";

const PanelSearchConfig: PopsPanelContentConfig = {
	id: "panel-config-search",
	title: "搜索",
	forms: [
		{
			text: "屏蔽",
			type: "forms",
			forms: [
				UISwitch(
					"【屏蔽】相关搜索",
					"douyin-search-shieldReleatedSearches",
					false,
					void 0,
					"屏蔽右边的相关搜索"
				),
			],
		},
	],
};

export { PanelSearchConfig };
