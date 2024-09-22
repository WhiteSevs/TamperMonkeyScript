import { BilibiliRouter } from "@/router/BilibiliRouter";
import { UISwitch } from "../common-components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";

const SettingUISearch: PopsPanelContentConfig = {
	id: "panel-search",
	title: "搜索",
	isDefault() {
		return BilibiliRouter.isSearch();
	},
	forms: [
		{
			type: "forms",
			text: "",
			forms: [
				{
					type: "deepMenu",
					text: "功能",
					forms: [
						{
							type: "forms",
							text: "",
							forms: [
								UISwitch(
									"搜索框自动获取焦点",
									"bili-search-inputAutoFocus",
									false,
									void 0,
									""
								),
							],
						},
					],
				},
				{
					type: "deepMenu",
					text: "覆盖点击事件",
					forms: [
						{
							type: "forms",
							text: "",
							forms: [
								UISwitch(
									"取消",
									"bili-search-cover-cancel",
									false,
									void 0,
									"点击取消按钮回退至上一页"
								),
							],
						},
					],
				},
			],
		},
	],
};

export { SettingUISearch };
