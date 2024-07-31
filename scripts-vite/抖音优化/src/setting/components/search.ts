import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UISwitch } from "../common-components/ui-switch";
import { UISelect } from "../common-components/ui-select";
import { DOMUtils, utils } from "@/env";
import { DouYinSearchFilter } from "@/main/search/DouYinSearchFilter";

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
				{
					text: "过滤-搜索结果",
					type: "deepMenu",
					forms: [
						{
							text: '<a href="https://greasyfork.org/zh-CN/scripts/494643-%E6%8A%96%E9%9F%B3%E4%BC%98%E5%8C%96#:~:text=%E5%B1%8F%E8%94%BD%E8%A7%84%E5%88%99" target="_blank">点击查看规则</a>',
							type: "forms",
							forms: [
								UISwitch(
									"启用",
									"search-shieldVideo",
									true,
									void 0,
									"开启后可启用下面的屏蔽功能"
								),
								UISwitch(
									"【屏蔽】直播",
									"search-shieldVideo-live",
									true,
									void 0,
									"过滤掉直播"
								),
								UISwitch(
									"【屏蔽】广告",
									"search-shieldVideo-ads",
									true,
									void 0,
									"过滤掉广告"
								),
								{
									type: "own",
									getLiElementCallBack(liElement: HTMLLIElement) {
										let textareaDiv = DOMUtils.createElement(
											"div",
											{
												className: "pops-panel-textarea",
												innerHTML: /*html*/ `<textarea placeholder="请输入屏蔽规则，每行一个" style="height:350px;"></textarea>`,
											},
											{
												style: "width: 100%;",
											}
										);
										let textarea = textareaDiv.querySelector(
											"textarea"
										) as HTMLTextAreaElement;
										textarea.value = DouYinSearchFilter.get();
										DOMUtils.on(
											textarea,
											["input", "propertychange"],
											utils.debounce(function () {
												DouYinSearchFilter.set(textarea.value);
											}, 200)
										);
										liElement.appendChild(textareaDiv);
										return liElement;
									},
								},
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
