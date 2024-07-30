import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UISwitch } from "../common-components/ui-switch";
import { UISelect } from "../common-components/ui-select";

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
				{
					text: "屏蔽-主框架",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISelect(
									"【屏蔽】左侧导航栏",
									"search-shieldLeftNavigator",
									-1,
									[
										{
											text: "跟随主设置",
											value: -1,
										},
										{
											text: "是",
											value: 1,
										},
										{
											text: "否",
											value: 0,
										},
									],
									void 0,
									"屏蔽元素"
								),
								UISelect(
									"【屏蔽】顶部导航栏",
									"search-shieldTopNavigator",
									-1,
									[
										{
											text: "跟随主设置",
											value: -1,
										},
										{
											text: "是",
											value: 1,
										},
										{
											text: "否",
											value: 0,
										},
									],
									void 0,
									"屏蔽元素"
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
