import { UISwitch } from "../common-components/ui-switch";

export const SettingUIHead: PopsPanelContentConfig = {
	id: "panel-head",
	title: "首页",
	forms: [
		{
			text: "功能",
			type: "forms",
			forms: [
				UISwitch(
					"美化显示",
					"bili-head-beautify",
					true,
					void 0,
					"调整瀑布流视频卡片样式类似哔哩哔哩App"
				),
				UISwitch(
					"补充推荐视频信息",
					"bili-head-supplementaryVideoStreamingInformation",
					true,
					void 0,
					"给视频添加UP主名，当前视频总时长信息"
				),
			],
		},
	],
};
