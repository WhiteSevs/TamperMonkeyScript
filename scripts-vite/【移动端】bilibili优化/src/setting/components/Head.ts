import { BilibiliQrCodeLogin } from "@/account/BilibiliQrCodeLogin";
import { UIInput } from "../common-components/ui-input";
import { UISwitch } from "../common-components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";

export const SettingUIHead: PopsPanelContentConfig = {
	id: "panel-head",
	title: "首页",
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
									"美化显示",
									"bili-head-beautify",
									true,
									void 0,
									"调整瀑布流视频卡片样式类似哔哩哔哩App"
								),
								UISwitch(
									"美化顶部NavBar",
									"bili-beautifyTopNavBar",
									true,
									void 0,
									"类似哔哩哔哩App的样式"
								),
								UISwitch(
									"补充推荐视频信息",
									"bili-head-supplementaryVideoStreamingInformation",
									true,
									void 0,
									"给视频添加UP主名，当前视频总时长信息"
								),
								UISwitch(
									"新标签页打开",
									"bili-head-openVideoInNewTab",
									false,
									void 0,
									"包括视频、番剧"
								),
							],
						},
					],
				},
				{
					text: "推荐视频",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									"启用",
									"bili-head-recommend-enable",
									false,
									void 0,
									"添加【推荐】标签，数据来源为App端(如果填入了access_token的话)"
								),
								UISwitch(
									"显示【图文】",
									"bili-head-recommend-push-graphic",
									true,
									void 0,
									"加载App端推送的【图文】卡片"
								),
							],
						},
					],
				},
			],
		},
	],
};
