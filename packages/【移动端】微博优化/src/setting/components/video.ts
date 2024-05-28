import { UISwitch } from "../common-components/ui-switch";

const SettingUIVideo: PopsPanelContentConfig = {
	id: "weibo-panel-config-video",
	title: "视频",
	forms: [
		{
			text: "功能",
			type: "forms",
			forms: [
				UISwitch(
					"【屏蔽】底部工具栏",
					"weibo_video_shield_bottom_toolbar",
					true
				),
				UISwitch("【屏蔽】相关推荐", "weibo_video_shield_recommend", true),
				UISwitch("【屏蔽】热门评论", "weibo_video_shield_hot_comments", true),
			],
		},
		{
			text: "webpack",
			type: "forms",
			forms: [
				UISwitch(
					"gotoApp",
					"weibo_video_webpack_gotoApp",
					true,
					void 0,
					"开启后阻止唤醒Scheme"
				),
			],
		},
	],
};

export { SettingUIVideo };
