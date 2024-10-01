import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UISwitch } from "../common-components/ui-switch";

export const SettingUIDetail: PopsPanelContentConfig = {
	id: "weibo-panel-config-detail",
	title: "正文",
	forms: [
		{
			text: "功能",
			type: "forms",
			forms: [
				UISwitch(
					"修改发布时间显示为绝对时间",
					"weibo-detail-setArticleAbsoluteTime",
					false,
					void 0,
					"该功能全局生效包括但不限于微博正文、首页等"
				),
			],
		},
	],
};
