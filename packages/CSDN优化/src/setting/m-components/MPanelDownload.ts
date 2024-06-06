import { CSDNRouter } from "@/router/CSDNRouter";
import { UISwitch } from "@/setting/common-components/ui-switch";

export const MSettingUIDownload: PopsPanelContentConfig = {
	id: "m-panel-download",
	title: "资源",
	isDefault() {
		return CSDNRouter.isDownload();
	},
	forms: [
		{
			text: "功能",
			type: "forms",
			forms: [
				UISwitch(
					"自动展开资源介绍",
					"m-csdn-download-automaticallyExpandResourceIntroduction",
					true,
					void 0,
					"屏蔽资源介绍【展开全部】按钮并展开资源介绍"
				),
			],
		},
		{
			text: "屏蔽",
			type: "forms",
			forms: [
				UISwitch(
					"【屏蔽】广告",
					"m-csdn-download-removeAds",
					true,
					void 0,
					"包括：登录弹窗、会员降价等"
				),
			],
		},
	],
};
