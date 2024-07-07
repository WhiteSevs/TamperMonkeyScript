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
									"自动展开阅读全文",
									"bili-opus-automaticallyExpandToReadFullText",
									true,
									void 0,
									"屏蔽【展开阅读全文】按钮并自动处理全文高度"
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
									"话题",
									"bili-opus-cover-topicJump",
									true,
									void 0,
									"点击话题正确跳转"
								),
								UISwitch(
									"header用户",
									"bili-opus-cover-header",
									true,
									void 0,
									"点击内容上的发布本动态的用户正确跳转个人空间"
								),
							],
						},
					],
				},
			],
		},
	],
};
