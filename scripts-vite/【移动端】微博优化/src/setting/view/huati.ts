import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UISwitch } from "@components/setting/components/ui-switch";

const SettingUIHuaTi: PopsPanelContentConfig = {
	id: "weibo-panel-config-huati",
	title: "话题",
	forms: [
		{
			text: "功能",
			type: "forms",
			forms: [
				UISwitch(
					"伪装微博客户端",
					"huati_weibo_masquerade_weibo_client_app",
					true,
					void 0,
					"可以隐藏底部的【在微博内打开】"
				),
			],
		},
		{
			text: "网络请求(不一定能劫持到)",
			type: "forms",
			forms: [
				UISwitch(
					"/ajax/super/starschedule",
					"huati_weibo_get_more_celebrity_calendar_information",
					true,
					void 0,
					"Api为获取日程数据，开启后可获取正常日程数据"
				),
			],
		},
	],
};

export { SettingUIHuaTi };
