import { BilibiliRouter } from "@/router/BilibiliRouter";
import { UISwitch } from "@components/setting/components/ui-switch";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { UISelect } from "@components/setting/components/ui-select";
import { BilibiliCDNProxy } from "@/api/BilibiliCDNProxy";
import { UISlider } from "@components/setting/components/ui-slider";

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
								// UISwitch(
								// 	"调整视频底部区域高度",
								// 	"bili-video-repairVideoBottomAreaHeight",
								// 	true,
								// 	void 0,
								// 	"添加margin-top"
								// ),
								// UISwitch(
								// 	"美化底部推荐视频",
								// 	"bili-video-beautify",
								// 	true,
								// 	void 0,
								// 	"调整底部推荐视频卡片样式类似哔哩哔哩App"
								// ),
								// UISwitch(
								// 	"手势返回关闭评论区",
								// 	"bili-video-gestureReturnToCloseCommentArea",
								// 	true,
								// 	void 0,
								// 	"当浏览器手势触发浏览器回退页面时，关闭评论区"
								// ),
								UISwitch(
									"强制本页刷新跳转",
									"bili-video-forceThisPageToRefreshAndRedirect",
									false,
									void 0,
									"用于处理内存泄露问题"
								),
								// UISwitch(
								// 	"修复链接跳转",
								// 	"bili-video-repairLinkJump",
								// 	true,
								// 	void 0,
								// 	"如@用户、搜索"
								// ),
								UISwitch(
									"新增评论模块",
									"bili-video-addCommentModule",
									true,
									void 0,
									"用于查看当前视频的评论"
								),
								UISwitch(
									"新增简介模块",
									"bili-video-addDescModule",
									true,
									void 0,
									"用于查看当前视频的播放量、简介、一键三连等信息"
								),
							],
						},
						// {
						// 	type: "forms",
						// 	text: "底部Tab",
						// 	forms: [
						// 		UISwitch(
						// 			"滚动固钉Tab",
						// 			"bili-video-optimizationScroll",
						// 			true,
						// 			void 0,
						// 			"向下滚动时，自动跳转视频区域大小且对Tab进行吸附处理"
						// 		),
						// 		UISwitch(
						// 			"禁止滑动切换Tab",
						// 			"bili-video-disableSwipeTab",
						// 			false,
						// 			void 0,
						// 			"禁止左右滑动切换Tab"
						// 		),
						// 	],
						// },
					],
				},
				{
					text: "ArtPlayer播放器",
					type: "deepMenu",
					forms: [
						{
							text: "功能",
							type: "forms",
							forms: [
								UISwitch(
									"启用",
									"bili-video-enableArtPlayer",
									true,
									void 0,
									"使用artplayer代替页面的播放器"
								),
								UISelect(
									"播放的视频类型",
									"bili-video-playType",
									"mp4",
									[
										{
											text: "mp4",
											value: "mp4",
										},
										{
											text: "dash",
											value: "dash",
										},
									],
									void 0,
									"当选择dash时会有画质更高的选项"
								),
								UISwitch(
									"自动播放视频",
									"bili-video-playerAutoPlayVideo",
									false,
									void 0,
									""
								),
								UISwitch(
									"自动进入全屏",
									"bili-video-playerAutoPlayVideoFullScreen",
									false,
									void 0,
									""
								),
							],
						},
						{
							text: "控件设置",
							type: "forms",
							forms: [
								UISlider(
									"controls左右边距",
									"bili-video-artplayer-controlsPadding-left-right",
									0,
									0,
									50,
									void 0,
									(value) => {
										return value + "px";
									},
									"可用于全屏横屏适配屏幕",
									1
								),
							],
						},
						{
							text: "插件",
							type: "forms",
							forms: [
								UISwitch(
									"弹幕",
									"artplayer-plugin-video-danmaku-enable",
									true,
									void 0,
									"哔哩哔哩 (゜-゜)つロ 干杯~"
								),
								UISwitch(
									"Dash Audio Support",
									"artplayer-plugin-video-m4sAudioSupport-enable",
									true,
									void 0,
									"视频类型为dash时，该插件可支持播放音频"
								),
								UISwitch(
									"选集",
									"artplayer-plugin-video-epChoose-enable",
									true,
									void 0,
									"当视频播放完毕后会自动连播"
								),
								UISwitch(
									"CC字幕",
									"artplayer-plugin-video-cc-subtitle-enable",
									true,
									void 0,
									"字幕支持插件，如果存在繁体字幕，则自动生成简体字幕"
								),
								UISwitch(
									"顶部工具栏",
									"artplayer-plugin-video-toptoolbar-enable",
									true,
									void 0,
									"显示视频标题和当前观看人数"
								),
								UISwitch(
									"视频统计信息",
									"artplayer-plugin-video-statistics-enable",
									true,
									void 0,
									"用于显示当前视频信息的弹窗"
								),
							],
						},
						{
							text: "加速CDN设置",
							type: "forms",
							forms: [
								UISelect(
									"UPOS服务器设置",
									"bili-video-uposServerSelect",
									"",
									BilibiliCDNProxy.getUposCDNServerList().map((item) => {
										return {
											text: item.name,
											value: item.host,
										};
									}),
									void 0,
									"设置视频流的服务器，可加快视频加载速度"
								),
								UISwitch(
									"作用于Audio上",
									"bili-video-uposServerSelect-applyAudio",
									false,
									void 0,
									"把m4s类型的audio也进行upos替换"
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
									"UP主信息",
									"bili-video-cover-UpWrapper",
									true,
									void 0,
									"点击UP主头像/名称可跳转至UP主空间"
								),
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
