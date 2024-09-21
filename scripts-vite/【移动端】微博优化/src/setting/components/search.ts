import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UISwitch } from "../common-components/ui-switch";

export const SettingUISearch: PopsPanelContentConfig = {
	id: "weibo-panel-config-u",
	title: "搜索",
	forms: [
		{
			text: "功能",
			type: "forms",
			forms: [
				UISwitch("自动聚焦搜索框", "weibo-search-autoFocusSearchInput", void 0),
			],
		},
	],
};
