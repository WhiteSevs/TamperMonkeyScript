import { VideoQualityMapWithPC } from "@/main/detail/WeiBoDetail";
import { UISelect } from "../common-components/ui-select";
import { UISwitch } from "../common-components/ui-switch";

export const SettingUIDetail: PopsPanelContentConfig = {
	id: "weibo-panel-config-detail",
	title: "帖子",
	forms: [
		{
			text: "功能",
			type: "forms",
			forms: [
				UISelect(
					"视频清晰度",
					"weibo-detail-quality",
					"",
					[
						{
							value: "",
							text: "自动",
						},
						...(() => {
							let result = <
								{
									value: string;
									text: string;
								}[]
							>[];
							Object.keys(VideoQualityMapWithPC).forEach((name) => {
								let value = VideoQualityMapWithPC[name];
								result.push({
									value: value.name,
									text: name,
								});
							});
							return result;
						})(),
					],
					void 0,
					"设置视频清晰度，默认自动，其它的清晰度将自动被删除(强制固定选择的清晰度)"
				),
				UISwitch(
					"解锁更多的清晰度",
					"weibo-detail-unlockHigherVideoQuality",
					true,
					void 0,
					"自动请求PC端的视频清晰度，如果请求成功，将解锁更多的清晰度，如1080p、2K"
				),
			],
		},
	],
};
