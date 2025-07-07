import { BaiduRouter } from "@/router/BaiduRouter";
import { UISwitch } from "@components/setting/components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";

const PanelYiYanSettingUI: PopsPanelContentConfig = {
	id: "baidu-panel-config-yiyan",
	title: "文心一言",
	headerTitle: "文心一言<br />yiyan.baidu.com",
	isDefault() {
		return BaiduRouter.isYiYan();
	},
	scrollToDefaultView: true,
	forms: [
		{
			type: "forms",
			text: "",
			forms: [
				{
					type: "deepMenu",
					text: "功能",
					forms: [
						{
							type: "forms",
							text: "",
							forms: [
								UISwitch(
									"地址参数识别",
									"baidu_yiyan-execByUrlSearchParams",
									false,
									(event, value) => {
										if (!value) {
											return;
										}
										let url =
											"https://greasyfork.org/zh-CN/scripts/418349-%E7%A7%BB%E5%8A%A8%E7%AB%AF-%E7%99%BE%E5%BA%A6%E7%B3%BB%E4%BC%98%E5%8C%96/discussions/254331";
										let isOk = globalThis.confirm(
											"帮助文档↓ 点击确定自动打开文档地址↓\n" + url
										);
										if (isOk) {
											window.open(url, "_blank");
										}
									},
									"开启后可在特定Url执行搜索功能"
								),
							],
						},
					],
				},
				{
					type: "deepMenu",
					text: "屏蔽",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									"【屏蔽】文字/图片水印",
									"baidu_yiyan_remove_ai_mask",
									true
								),
							],
						},
					],
				},
			],
		},
	],
};

export { PanelYiYanSettingUI };
