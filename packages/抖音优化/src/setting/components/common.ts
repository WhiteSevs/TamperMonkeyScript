import { UISwitch } from "../common-components/ui-switch";

const PanelCommonConfig: PopsPanelContentConfig = {
	id: "panel-config-common",
	title: "通用",
	forms: [
		{
			text: "功能",
			type: "forms",
			forms: [
				UISwitch(
					"debug模式",
					"debug",
					true,
					void 0,
					"移除抖音的开发者模式检测"
				),
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
		{
			text: "屏蔽",
			type: "forms",
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
		{
			text: "主框架-屏蔽",
			type: "forms",
			forms: [
				UISwitch(
					"【屏蔽】客户端提示",
					"shieldClientTip",
					true,
					void 0,
					"屏蔽元素"
				),
				UISwitch(
					"【屏蔽】充砖石",
					"shieldFillingBricksAndStones",
					true,
					void 0,
					"屏蔽元素"
				),
				UISwitch("【屏蔽】客户端", "shieldClient", true, void 0, "屏蔽元素"),
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
				UISwitch("【屏蔽】投稿", "shieldSubmission", false, void 0, "屏蔽元素"),
				UISwitch(
					"【屏蔽】左侧导航栏",
					"shieldLeftNavigator",
					false,
					void 0,
					"屏蔽元素"
				),
				UISwitch(
					"【屏蔽】顶部导航栏",
					"shieldTopNavigator",
					false,
					void 0,
					"屏蔽元素"
				),
			],
		},
		{
			text: "搜索-屏蔽",
			type: "forms",
			forms: [
				UISwitch("【屏蔽】搜索框", "shieldSearch", false, void 0, "屏蔽元素"),
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
};

export { PanelCommonConfig };
