import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UISwitch } from "../common-components/ui-switch";

export const SettingUIHome: PopsPanelContentConfig = {
	id: "weibo-panel-config-card-article",
	title: "首页",
	forms: [
		{
			text: "功能",
			type: "forms",
			forms: [
				UISwitch(
					"新增超话Tab",
					"weibo-home-addSupertalkTab",
					false,
					void 0,
					"在首页添加超话Tab，方便快速查看超话"
				),
			],
		},
		{
			text: "屏蔽",
			type: "forms",
			forms: [
				UISwitch(
					"屏蔽信息流广告",
					"weibo-home-blockArticleAds",
					true,
					void 0,
					'夹杂在文章中间的"微博广告"'
				),
				UISwitch(
					"屏蔽消息数量",
					"weibo-home-blockMessageCount",
					false,
					void 0,
					"即登录后右上角的消息提示数"
				),
			],
		},
	],
};
