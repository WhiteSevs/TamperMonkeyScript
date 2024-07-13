import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UISwitch } from "../common-components/ui-switch";

const PanelSearchConfig: PopsPanelContentConfig = {
	id: "panel-config-search",
	title: "搜索",
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
									"禁止点击视频区域进入全屏",
									"dy-search-disableClickToEnterFullScreen",
									false,
									void 0,
									"禁止点击视频区域时会触发自动进入全屏功能"
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
					text: "屏蔽",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									"【屏蔽】相关搜索",
									"douyin-search-shieldReleatedSearches",
									false,
									void 0,
									"屏蔽右边的相关搜索"
								),
							],
						},
					],
				},
			],
		},
	],
};

export { PanelSearchConfig };
