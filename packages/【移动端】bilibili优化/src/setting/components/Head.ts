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
					"补充视频信息",
					"bili-head-supplementaryVideoStreamingInformation",
					true,
					void 0,
					"给视频添加UP主名，当前视频总时长信息"
				),
			],
		},
	],
};
