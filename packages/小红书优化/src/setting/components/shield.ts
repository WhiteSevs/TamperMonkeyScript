import { UISwitch } from "../common-components/ui-switch";

const SettingUI_Shield: PopsPanelContentConfig = {
	id: "xhs-panel-config-shield",
	title: "屏蔽",
	forms: [
		{
			text: "功能",
			type: "forms",
			forms: [
				UISwitch("【屏蔽】广告", "pc-xhs-shieldAd", true, void 0, "屏蔽元素"),
				UISwitch(
					"【屏蔽】登录弹窗",
					"pc-xhs-shield-login-dialog",
					true,
					void 0,
					"屏蔽会自动弹出的登录弹窗"
				),
				UISwitch(
					"【屏蔽】选择文字弹出的搜索提示",
					"pc-xhs-shield-select-text-search-position",
					false,
					void 0,
					"屏蔽元素"
				),
				UISwitch(
					"【屏蔽】顶部工具栏",
					"pc-xhs-shield-topToolbar",
					false,
					void 0,
					"屏蔽元素"
				),
			],
		},
	],
};

export { SettingUI_Shield };
