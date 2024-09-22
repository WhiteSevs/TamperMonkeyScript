import { BilibiliRouter } from "@/router/BilibiliRouter";
import { UISwitch } from "../common-components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";

const SettingUIVideo: PopsPanelContentConfig = {
	id: "panel-video",
	title: "视频",
	isDefault() {
		return BilibiliRouter.isVideo();
	},
	forms: [
		{
			text: "",
			type: "forms",
			forms: [
				{
					text: "功能",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									"调整视频底部区域高度",
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
									"美化底部推荐视频",
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
									"强制本页刷新跳转",
									"bili-video-forceThisPageToRefreshAndRedirect",
									false,
									void 0,
									"用于解决跳转播放视频时，播放当前视频会有上一个播放视频的声音的情况"
								),
								UISwitch(
									"initPlayer",
									"bili-video-initPlayer",
									true,
									void 0,
									"自动执行初始化播放器"
								),
								UISwitch(
									"检测是否静音",
									"bili-video-playerAutoPlayVideoCheckMute",
									false,
									void 0,
									"在播放视频时自动检测视频是否静音，有的话弹出Toast"
								),
							],
						},
						{
							text: "自动播放视频",
							type: "forms",
							forms: [
								UISwitch(
									"启用",
									"bili-video-playerAutoPlayVideo",
									false,
									void 0,
									"需开启【initPlayer】"
								),
								UISwitch(
									"自动进入全屏",
									"bili-video-playerAutoPlayVideoFullScreen",
									false,
									void 0,
									"需开启【自动播放视频】"
								),
							],
						},
						{
							type: "forms",
							text: "底部Tab",
							forms: [
								UISwitch(
									"滚动固钉Tab",
									"bili-video-optimizationScroll",
									true,
									void 0,
									"向下滚动时，自动跳转视频区域大小且对Tab进行吸附处理"
								),
								UISwitch(
									"禁止滑动切换Tab",
									"bili-video-disableSwipeTab",
									false,
									void 0,
									"禁止左右滑动切换Tab"
								),
							],
						},
					],
				},
				{
					text: "变量设置",
					type: "deepMenu",
					forms: [
						{
							text: "",
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
					],
				},
				{
					text: "覆盖点击事件",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									"相关视频",
									"bili-video-cover-bottomRecommendVideo",
									true,
									void 0,
									"点击下面的相关视频可正确跳转至该视频"
								),
								UISwitch(
									"选集",
									"bili-video-cover-seasonNew",
									true,
									void 0,
									"点击下面的选集列表内的视频可正确跳转至该视频"
								),
							],
						},
					],
				},
				{
					text: "网络拦截",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									"解锁清晰度",
									"bili-video-xhr-unlockQuality",
									true,
									void 0,
									"最高清晰度为720P"
								),
							],
						},
					],
				},
				{
					text: "劫持/拦截",
					type: "deepMenu",
					forms: [
						{
							text: "",
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
				},
			],
		},
	],
};

export { SettingUIVideo };
