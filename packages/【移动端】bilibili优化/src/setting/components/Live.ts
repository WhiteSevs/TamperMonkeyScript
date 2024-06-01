import { BilibiliRouter } from "@/router/BilibiliRouter";
import { UISwitch } from "../common-components/ui-switch";

const SettingUILive: PopsPanelContentConfig = {
	id: "panel-live",
	title: "直播",
	isDefault() {
		return BilibiliRouter.isLive();
	},
	forms: [
		{
			text: "屏蔽",
			type: "forms",
			forms: [
				UISwitch(
					"【屏蔽】聊天室",
					"bili-live-block-chatRoom",
					false,
					void 0,
					"直接不显示底部的聊天室"
				),
				UISwitch(
					"【屏蔽】xxx进入直播间",
					"bili-live-block-brush-prompt",
					false,
					void 0,
					"直接不显示底部的xxx进入直播间"
				),
				UISwitch(
					"【屏蔽】控制面板",
					"bili-live-block-control-panel",
					false,
					void 0,
					"屏蔽底部的发个弹幕、送礼"
				),
			],
		},
		{
			text: "劫持/拦截",
			type: "forms",
			forms: [
				UISwitch(
					"阻止open-app-btn元素点击事件触发",
					"bili-live-prevent-openAppBtn",
					true,
					void 0,
					"开启后可不跳转至唤醒App页面"
				),
			],
		},
	],
};

export { SettingUILive };
