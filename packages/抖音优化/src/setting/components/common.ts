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
					"移除抖音的开发者模式检测",
					"debug",
					false,
					void 0,
				),
				UISwitch(
					"伪装登录",
					"使用随机UID进行伪装",
					"disguiseLogin",
					false,
					void 0,
				),
			],
		},
		{
			text: "屏蔽",
			type: "forms",
			forms: [
				UISwitch(
					"【屏蔽】登录弹窗",
					"屏蔽元素且自动等待元素出现并关闭登录弹窗",
					"watchLoginDialogToClose",
					true,
					void 0,
				),
			],
		},
		{
			text: "主框架-屏蔽",
			type: "forms",
			forms: [
				UISwitch(
					"【屏蔽】客户端提示",
					"屏蔽元素",
					"shieldClientTip",
					true,
					void 0,
				),
				UISwitch(
					"【屏蔽】充砖石",
					"屏蔽元素",
					"shieldFillingBricksAndStones",
					false,
					void 0,
				),
				UISwitch("【屏蔽】客户端", "屏蔽元素", "shieldClient", false, void 0),
				UISwitch(
					"【屏蔽】快捷访问",
					"屏蔽元素",
					"shieldQuickAccess",
					false,
					void 0,
				),
				UISwitch(
					"【屏蔽】通知",
					"屏蔽元素",
					"shieldNotifitation",
					false,
					void 0,
				),
				UISwitch(
					"【屏蔽】私信",
					"屏蔽元素",
					"shieldPrivateMessage",
					false,
					void 0,
				),
				UISwitch("【屏蔽】投稿", "屏蔽元素", "shieldSubmission", false, void 0),
			],
		},
		{
			text: "搜索-屏蔽",
			type: "forms",
			forms: [
				UISwitch("【屏蔽】搜索框", "屏蔽元素", "shieldSearch", false, void 0),
				UISwitch(
					"【屏蔽】搜索框的提示",
					"屏蔽元素",
					"shieldSearchPlaceholder",
					false,
					void 0,
				),
				UISwitch(
					"【屏蔽】猜你想搜",
					"屏蔽元素",
					"shieldSearchGuessYouWantToSearch",
					false,
					void 0,
				),
				UISwitch(
					"【屏蔽】抖音热点",
					"屏蔽元素",
					"shieldSearchTiktokHotspot",
					false,
					void 0,
				),
			],
		},
	],
};

export { PanelCommonConfig };
