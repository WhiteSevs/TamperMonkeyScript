import { BilibiliRouter } from "@/router/BilibiliRouter";
import { UISwitch } from "../common-components/ui-switch";

const SettingUIVideo: PopsPanelContentConfig = {
	id: "panel-video",
	title: "视频",
	isDefault() {
		return BilibiliRouter.isVideo();
	},
	forms: [
		{
			text: "功能",
			type: "forms",
			forms: [
				UISwitch(
					"修复视频底部区域高度",
					"bili-video-repairVideoBottomAreaHeight",
					true,
					void 0,
					"添加margin-top"
				),
				UISwitch(
					"自动点击【继续在网页观看】",
					"bili-video-autoClickContinueToWatchOnTheWebpage",
					true,
					void 0,
					"可避免弹窗出现且自动点击后播放视频"
				),
				UISwitch(
					"美化显示",
					"bili-video-beautify",
					true,
					void 0,
					"调整底部推荐视频卡片样式类似哔哩哔哩App"
				),
				UISwitch(
					"手势返回关闭评论区",
					"bili-video-gestureReturnToCloseCommentArea",
					true,
					void 0,
					"当浏览器手势触发浏览器回退页面时，关闭评论区"
				),
				UISwitch(
					"initPlayer",
					"bili-video-initPlayer",
					true,
					void 0,
					"自动执行初始化播放器"
				),
			],
		},
		{
			text: "变量设置",
			type: "forms",
			forms: [
				UISwitch(
					"playBtnNoOpenApp",
					"bili-video-setVideoPlayer",
					true,
					void 0,
					"playBtnNoOpenApp=true<br>playBtnOpenApp=false<br>coverOpenApp=false"
				),
				UISwitch(
					"解锁充电限制",
					"bili-video-unlockUpower",
					false,
					void 0,
					"is_upower_exclusive=true<br>is_upower_play=false<br>is_upower_preview=false"
				),
			],
		},
		{
			text: "覆盖点击事件",
			type: "forms",
			forms: [
				UISwitch(
					"相关视频",
					"bili-video-cover-bottomRecommendVideo",
					true,
					void 0,
					"点击下面的相关视频可正确跳转至该视频"
				),
			],
		},
		{
			text: "劫持/拦截",
			type: "forms",
			forms: [
				UISwitch(
					"阻止调用App",
					"bili-video-hook-callApp",
					true,
					void 0,
					"处理函数: PlayerAgent"
				),
			],
		},
	],
};

export { SettingUIVideo };
