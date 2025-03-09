import { BilibiliRouter } from "@/router/BilibiliRouter";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UISwitch } from "../common-components/ui-switch";

export const SettingUISpace: PopsPanelContentConfig = {
	id: "panel-space",
	title: "个人空间",
	isDefault() {
		return BilibiliRouter.isSpace();
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
									"修复正确跳转",
									"bili-space-repairRealJump",
									true,
									void 0,
									"修复视频|动态的正确跳转，避免跳转404"
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
									"动态视频",
									"bili-space-coverDynamicStateCardVideo",
									true,
									void 0,
									"点击发布动态的视频可正常跳转至该视频"
								),
							],
						},
					],
				},
			],
		},
	],
};
