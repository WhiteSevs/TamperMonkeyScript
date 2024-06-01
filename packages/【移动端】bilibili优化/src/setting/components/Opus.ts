import { BilibiliRouter } from "@/router/BilibiliRouter";
import { UISwitch } from "../common-components/ui-switch";

export const SettingUIOpus: PopsPanelContentConfig = {
	id: "panel-opus",
	title: "专栏",
	isDefault() {
		return BilibiliRouter.isOpus();
	},
	forms: [
		{
			text: "覆盖点击事件",
			type: "forms",
			forms: [
				UISwitch(
					"话题",
					"bili-opus-cover-topicJump",
					true,
					void 0,
					"点击话题正确跳转"
				),
			],
		},
	],
};
