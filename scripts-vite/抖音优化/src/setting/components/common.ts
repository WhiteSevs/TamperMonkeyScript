import { DOMUtils, log, utils } from "@/env";
import { UISelect } from "../common-components/ui-select";
import { UISwitch } from "../common-components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { AutoOpenOrClose } from "../utils/all-open-or-close";

const PanelCommonConfig: PopsPanelContentConfig = {
	id: "panel-config-common",
	title: "通用",
	forms: [
		{
			text: "",
			type: "forms",
			forms: [
				{
					text: "Toast配置",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISelect(
									"Toast位置",
									"qmsg-config-position",
									"bottom",
									[
										{
											value: "topleft",
											text: "左上角",
										},
										{
											value: "top",
											text: "顶部",
										},
										{
											value: "topright",
											text: "右上角",
										},
										{
											value: "left",
											text: "左边",
										},
										{
											value: "center",
											text: "中间",
										},
										{
											value: "right",
											text: "右边",
										},
										{
											value: "bottomleft",
											text: "左下角",
										},
										{
											value: "bottom",
											text: "底部",
										},
										{
											value: "bottomright",
											text: "右下角",
										},
									],
									(event, isSelectValue, isSelectText) => {
										log.info("设置当前Qmsg弹出位置" + isSelectText);
									},
									"Toast显示在页面九宫格的位置"
								),
								UISelect(
									"最多显示的数量",
									"qmsg-config-maxnums",
									3,
									[
										{
											value: 1,
											text: "1",
										},
										{
											value: 2,
											text: "2",
										},
										{
											value: 3,
											text: "3",
										},
										{
											value: 4,
											text: "4",
										},
										{
											value: 5,
											text: "5",
										},
									],
									void 0,
									"限制Toast显示的数量"
								),
								UISwitch(
									"逆序弹出",
									"qmsg-config-showreverse",
									false,
									void 0,
									"修改Toast弹出的顺序"
								),
							],
						},
					],
				},
			],
		},
		{
			type: "forms",
			text: "",
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
									"伪装登录",
									"disguiseLogin",
									false,
									void 0,
									"使用随机UID进行伪装"
								),
								UISwitch(
									"initial-scale=1",
									"dy-initialScale",
									false,
									void 0,
									"可配合手机模式放大页面"
								),
								UISwitch(
									"移除<meta> apple-itunes-app",
									"dy-apple-removeMetaAppleItunesApp",
									true,
									void 0,
									"Safari使用，移除顶部横幅【Open in the 抖音 app】"
								),
								UISwitch(
									"监听Router改变",
									"dy-common-listenRouterChange",
									true,
									void 0,
									"功能重载"
								),
								UISwitch(
									"移除某些Cookie",
									"dy-cookie-remove__ac__",
									false,
									void 0,
									""
								),
							],
						},
						{
							text: "Url重定向",
							type: "forms",
							forms: [
								UISwitch(
									"重定向/home",
									"douyin-redirect-url-home-to-root",
									false,
									void 0,
									"/home => /"
								),
							],
						},
					],
				},
				{
					type: "deepMenu",
					text: "快捷键禁用",
					afterEnterDeepMenuCallBack:
						AutoOpenOrClose.afterEnterDeepMenuCallBack,
					forms: [
						{
							type: "forms",
							text: AutoOpenOrClose.text,
							forms: [
								UISwitch(
									"赞|取消赞",
									"dy-keyboard-hook-likeOrDislike",
									false,
									void 0,
									"Z"
								),
								UISwitch(
									"评论",
									"dy-keyboard-hook-comment",
									false,
									void 0,
									"X"
								),
								UISwitch(
									"开启/关闭弹幕",
									"dy-keyboard-hook-danmaku-enable",
									false,
									void 0,
									"B"
								),
								UISwitch(
									"收藏/取消收藏",
									"dy-keyboard-hook-collect-enable",
									false,
									void 0,
									"C"
								),
								UISwitch(
									"复制分享口令",
									"dy-keyboard-hook-copyShareLink",
									false,
									void 0,
									"V"
								),
								UISwitch(
									"清屏",
									"dy-keyboard-hook-clearScreen",
									false,
									void 0,
									"J"
								),
								UISwitch(
									"自动连播",
									"dy-keyboard-hook-automaticBroadcast",
									false,
									void 0,
									"K"
								),
								UISwitch(
									"视频信息",
									"dy-keyboard-hook-videoInfo",
									false,
									void 0,
									"I"
								),
								UISwitch(
									"不感兴趣",
									"dy-keyboard-hook-notInterested",
									false,
									void 0,
									"R"
								),
								UISwitch(
									"进入作者主页",
									"dy-keyboard-hook-enterAuthorHomePage",
									false,
									void 0,
									"F"
								),
								UISwitch(
									"关注/取消关注",
									"dy-keyboard-hook-follow",
									false,
									void 0,
									"G"
								),
								UISwitch(
									"抖音搜索",
									"dy-keyboard-hook-search",
									false,
									void 0,
									"Shift+F"
								),
								UISwitch(
									"一键关闭当前页",
									"dy-keyboard-hook-closeTheCurrentPageWithOneClick",
									false,
									void 0,
									"Shift+Q"
								),
								UISwitch(
									"上下翻页",
									"dy-keyboard-hook-pageUpAndDown",
									false,
									void 0,
									"↑↓"
								),
								UISwitch(
									"快进快退",
									"dy-keyboard-hook-fastForwardAndFastBack",
									false,
									void 0,
									"← →"
								),
								UISwitch(
									"暂停",
									"dy-keyboard-hook-pause",
									false,
									void 0,
									"空格"
								),
								UISwitch(
									"网页内全屏",
									"dy-keyboard-hook-fullScreenInsideThePage",
									false,
									void 0,
									"Y"
								),
								UISwitch(
									"全屏",
									"dy-keyboard-hook-fullScreen",
									false,
									void 0,
									"H"
								),
								UISwitch(
									"稍后再看",
									"dy-keyboard-hook-watchItOutLater",
									false,
									void 0,
									"L"
								),
								UISwitch(
									"音量调整",
									"dy-keyboard-hook-volumeAdjustment",
									false,
									void 0,
									"Shift + / Shift -"
								),
								UISwitch(
									"呼出快捷键列表",
									"dy-keyboard-hook-listOfCallShortcutKeys",
									false,
									void 0,
									"?"
								),
								UISwitch(
									"关闭快捷键列表",
									"dy-keyboard-hook-closeTheShortcutKeyList",
									false,
									void 0,
									"ESC"
								),
								UISwitch(
									"相关推荐",
									"dy-keyboard-hook-relevantRecommendation",
									false,
									void 0,
									"N"
								),
							],
						},
					],
				},
			],
		},
		{
			text: "",
			type: "forms",
			forms: [
				{
					text: "屏蔽-通用",
					type: "deepMenu",
					afterEnterDeepMenuCallBack:
						AutoOpenOrClose.afterEnterDeepMenuCallBack,
					forms: [
						{
							type: "forms",
							text: AutoOpenOrClose.text,
							forms: [
								UISwitch(
									"【屏蔽】登录弹窗",
									"watchLoginDialogToClose",
									true,
									void 0,
									"屏蔽元素且自动等待元素出现并关闭登录弹窗"
								),
								UISwitch(
									"【屏蔽】底部？按钮",
									"shieldBottomQuestionButton",
									true,
									void 0,
									"屏蔽元素"
								),
							],
						},
					],
				},
				{
					text: "屏蔽-左侧导航栏",
					type: "deepMenu",
					afterEnterDeepMenuCallBack:
						AutoOpenOrClose.afterEnterDeepMenuCallBack,
					forms: [
						{
							type: "forms",
							text: AutoOpenOrClose.text,
							forms: [
								UISwitch(
									"【屏蔽】左侧导航栏",
									"shieldLeftNavigator",
									false,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】首页",
									"shieldLeftNavigator-tab-home",
									false,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】推荐",
									"shieldLeftNavigator-tab-recommend",
									false,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】关注",
									"shieldLeftNavigator-tab-follow",
									false,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】朋友",
									"shieldLeftNavigator-tab-friend",
									false,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】我的",
									"shieldLeftNavigator-tab-user_self",
									false,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】喜欢",
									"shieldLeftNavigator-tab-user_self_like",
									false,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】收藏",
									"shieldLeftNavigator-tab-user_self_collection",
									false,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】观看历史",
									"shieldLeftNavigator-tab-user_self_record",
									false,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】看奥运",
									"shieldLeftNavigator-tab-olympics",
									false,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】直播",
									"shieldLeftNavigator-tab-live",
									false,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】放映厅",
									"shieldLeftNavigator-tab-vs",
									false,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】短剧",
									"shieldLeftNavigator-tab-series",
									false,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】知识",
									"shieldLeftNavigator-tab-channel_300203",
									false,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】游戏",
									"shieldLeftNavigator-tab-channel_300205",
									false,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】二次元",
									"shieldLeftNavigator-tab-channel_300206",
									false,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】音乐",
									"shieldLeftNavigator-tab-channel_300209",
									false,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】美食",
									"shieldLeftNavigator-tab-channel_300204",
									false,
									void 0,
									"屏蔽元素"
								),
							],
						},
					],
				},
				{
					text: "屏蔽-顶部导航栏",
					type: "deepMenu",
					afterEnterDeepMenuCallBack:
						AutoOpenOrClose.afterEnterDeepMenuCallBack,
					forms: [
						{
							text: AutoOpenOrClose.text,
							type: "forms",
							forms: [
								UISwitch(
									"【屏蔽】顶部导航栏",
									"shieldTopNavigator",
									false,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】客户端提示",
									"shieldClientTip",
									true,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】充钻石",
									"shieldFillingBricksAndStones",
									true,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】客户端",
									"shieldClient",
									true,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】快捷访问",
									"shieldQuickAccess",
									false,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】通知",
									"shieldNotifitation",
									false,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】私信",
									"shieldPrivateMessage",
									false,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】投稿",
									"shieldSubmission",
									false,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】壁纸",
									"shieldWallpaper",
									false,
									void 0,
									"屏蔽元素"
								),
							],
						},
					],
				},
				{
					text: "屏蔽-搜索",
					type: "deepMenu",
					afterEnterDeepMenuCallBack:
						AutoOpenOrClose.afterEnterDeepMenuCallBack,
					forms: [
						{
							text: AutoOpenOrClose.text,
							type: "forms",
							forms: [
								UISwitch(
									"【屏蔽】搜索框",
									"shieldSearch",
									false,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】搜索框的提示",
									"shieldSearchPlaceholder",
									false,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】猜你想搜",
									"shieldSearchGuessYouWantToSearch",
									false,
									void 0,
									"屏蔽元素"
								),
								UISwitch(
									"【屏蔽】抖音热点",
									"shieldSearchTiktokHotspot",
									false,
									void 0,
									"屏蔽元素"
								),
							],
						},
					],
				},
				{
					type: "deepMenu",
					text: "屏蔽-鼠标悬浮提示",
					afterEnterDeepMenuCallBack:
						AutoOpenOrClose.afterEnterDeepMenuCallBack,
					forms: [
						{
							type: "forms",
							text: AutoOpenOrClose.text + "<br>视频区域-右侧工具栏",
							forms: [
								UISwitch(
									"进入作者主页",
									"dy-video-mouseHoverTip-rightToolBar-enterUserHome",
									false
								),
								UISwitch(
									"关注",
									"dy-video-mouseHoverTip-rightToolBar-follow",
									false
								),
								UISwitch(
									"点赞",
									"dy-video-mouseHoverTip-rightToolBar-addLike",
									false
								),
								UISwitch(
									"评论",
									"dy-video-mouseHoverTip-rightToolBar-comment",
									false
								),
								UISwitch(
									"收藏",
									"dy-video-mouseHoverTip-rightToolBar-collect",
									false
								),
								UISwitch(
									"分享",
									"dy-video-mouseHoverTip-rightToolBar-share",
									false
								),
								UISwitch(
									"看相关",
									"dy-video-mouseHoverTip-rightToolBar-seeCorrelation",
									false
								),
							],
						},
						{
							type: "forms",
							text: "视频区域-底部工具栏",
							forms: [
								UISwitch(
									"自动连播",
									"dy-video-mouseHoverTip-bottomToolBar-automaticBroadcast",
									false
								),
								UISwitch(
									"清屏",
									"dy-video-mouseHoverTip-bottomToolBar-clearScreen",
									false
								),
								UISwitch(
									"稍后再看",
									"dy-video-mouseHoverTip-bottomToolBar-watchLater",
									false
								),
								UISwitch(
									"网页全屏",
									"dy-video-mouseHoverTip-bottomToolBar-pageFullScreen",
									false
								),
								UISwitch(
									"全屏",
									"dy-video-mouseHoverTip-bottomToolBar-fullScreen",
									false
								),
							],
						},
					],
				},
			],
		},
	],
};

export { PanelCommonConfig };
