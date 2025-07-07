import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { UISelect } from "@components/setting/components/ui-select";
import { UISwitch } from "@components/setting/components/ui-switch";

const SettingUIVideo: PopsPanelContentConfig = {
	id: "weibo-panel-config-video",
	title: "视频",
	forms: [
		{
			text: "功能",
			type: "forms",
			forms: [
				UISelect(
					"视频清晰度",
					"weibo-video-quality",
					"",
					[
						{
							value: "",
							text: "自动",
						},
						{
							value: "mp4_ld_mp4",
							text: "流畅360p",
						},
						{
							value: "mp4_hd_mp4",
							text: "标清480p",
						},
						{
							value: "mp4_720p_mp4",
							text: "高清720p",
						},
						{
							value: "mp4_1080p_mp4",
							text: "超清1080p",
						},
					],
					void 0,
					"设置视频清晰度，默认自动，其它的清晰度将自动被删除(强制固定选择的清晰度)"
				),
				UISwitch(
					"解锁1080p",
					"weibo-video-unlockVideo1080p",
					true,
					void 0,
					"请求PC端的视频1080p链接，开启该功能↑选择的1080p才会生效"
				),
			],
		},
		{
			text: "屏蔽",
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
