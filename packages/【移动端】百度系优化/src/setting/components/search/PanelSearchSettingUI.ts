import { BaiduSearchRule } from "@/main/search/SearchRule";
import { DOMUtils, utils } from "@/env";
import { BaiduRouter } from "@/router/BaiduRouter";
import { PopsPanel } from "@/setting/setting";
import { UISwitch } from "@/setting/common-components/ui-switch";
import Qmsg from "qmsg";

const PanelSearchSettingUI: PopsPanelContentConfig = {
	id: "baidu-panel-config-search",
	title: "搜索",
	headerTitle: "百度搜索<br />m.baidu.com<br />www.baidu.com",
	isDefault() {
		return (
			BaiduRouter.isSearch() ||
			BaiduRouter.isSearchHome() ||
			BaiduRouter.isSearchBh()
		);
	},
	forms: [
		{
			text: "主页",
			type: "forms",
			forms: [
				UISwitch("精简主页", "baidu_search_home_homepage_minification", true),
			],
		},
		{
			text: "百度健康(快速问医生)",
			type: "forms",
			forms: [
				UISwitch(
					"【屏蔽】底部其它信息",
					"baidu_search_headlth_shield_other_info",
					true
				),
				UISwitch(
					"【屏蔽】底部工具栏",
					"baidu_search_headlth_shield_bottom_toolbar",
					true
				),
			],
		},
		{
			text: "userAgent包含SearchCraft时",
			type: "forms",
			forms: [
				UISwitch(
					"自动点击翻页",
					"baidu_search_automatically_click_on_the_next_page_with_searchcraft_ua",
					false,
					function (event, enable) {
						if (
							enable &&
							PopsPanel.getValue("baidu_search_automatically_expand_next_page")
						) {
							let checkboxCoreElement = document.querySelector(
								`li[${PopsPanel.$data.attributeKeyName}="baidu_search_automatically_expand_next_page"] span.pops-panel-switch__core`
							);
							if (!checkboxCoreElement) {
								throw new Error("未找到互斥元素");
							}
							(checkboxCoreElement as HTMLSpanElement).click();
						}
					},
					"与【功能-自动翻页】冲突"
				),
			],
		},
		{
			text: "屏蔽/禁止",
			type: "forms",
			forms: [
				UISwitch(
					"【屏蔽】大家还在搜",
					"baidu_search_blocking_everyone_is_still_searching",
					true,
					void 0,
					"用于补充下面自定义拦截规则的默认配置的【大家还在搜】"
				),
			],
		},
		{
			text: "功能",
			type: "forms",
			forms: [
				UISwitch(
					"处理搜索结果",
					"baidu_search_handle_search_result",
					true,
					void 0,
					"将百度重定向链接替换为真实地址(存在就替换，不存在的话保持原样)"
				),
				UISwitch(
					"重定向顶部的链接",
					"baidu_search_redirect_top_link",
					true,
					void 0,
					"如全部、视频、图片、贴吧、咨询..."
				),
				UISwitch(
					"重构百度搜索",
					"baidu_search_refactoring_input_boxes",
					true,
					void 0,
					"重构顶部的输入框、百度一下按钮、搜索建议框，可不出现百度App提示"
				),
				UISwitch(
					"自动翻页",
					"baidu_search_automatically_expand_next_page",
					true,
					function (event, enable) {
						if (
							enable &&
							PopsPanel.getValue(
								"baidu_search_automatically_click_on_the_next_page_with_searchcraft_ua"
							)
						) {
							let checkboxCoreElement = document.querySelector(
								`li[${PopsPanel.$data.attributeKeyName}="baidu_search_automatically_click_on_the_next_page_with_searchcraft_ua"] span.pops-panel-switch__core`
							);
							if (!checkboxCoreElement) {
								throw new Error("未找到互斥元素");
							}
							(checkboxCoreElement as HTMLSpanElement).click();
						}
					},
					"与上面的【自动点击翻页】冲突"
				),
				UISwitch(
					"同步地址",
					"baidu_search_sync_next_page_address",
					false,
					function (event, enable) {
						if (enable) {
							alert(
								"开启后，且开启【自动翻页】，当自动加载到第N页时，浏览器地址也会跟随改变，刷新网页就是当前加载的第N页"
							);
						}
					},
					"地址同步自动翻页的地址"
				),
				UISwitch(
					"【优化】大家还在搜",
					"baidu_search_refactor_everyone_is_still_searching",
					true,
					void 0,
					"正确新标签页打开"
				),
				UISwitch(
					"【beta】新标签页打开",
					"baidu_search_hijack__onClick_to_blank",
					false,
					void 0,
					"实验性功能，需开启【劫持-_onClick函数】和【处理搜索结果】且能成功劫持到该函数才会生效，否则是粗糙的提取article的链接跳转"
				),
			],
		},
		{
			text: "劫持/拦截",
			type: "forms",
			forms: [
				UISwitch(
					"劫持-define函数",
					"baidu_search_hijack_define",
					false,
					void 0,
					"开启后将禁止原有的define"
				),
				UISwitch(
					"劫持-复制",
					"baidu_search_hijack_copy",
					true,
					void 0,
					"阻止百度复制xxx到剪贴板"
				),
				UISwitch(
					"劫持-Scheme唤醒App",
					"baidu_search_hijack_scheme",
					true,
					void 0,
					"阻止唤醒调用App"
				),
				UISwitch(
					"劫持-OpenBox函数",
					"baidu_search_hijack_openbox",
					true,
					void 0,
					"优化搜索结果跳转"
				),
				UISwitch(
					"劫持-_onClick函数",
					"baidu_search_hijack__onClick",
					true,
					void 0,
					"优化搜索结果跳转"
				),
				UISwitch(
					"劫持-setTimeout",
					"baidu_search_hijack_setTimeout",
					true,
					void 0,
					"可阻止获取定位、视频播放"
				),
			],
		},
		{
			text: "自定义拦截规则<br><a href='https://greasyfork.org/zh-CN/scripts/418349' target='_blank'>查看规则文档(在最下面)</><br><a href='javascript:;' class='baidu-search-shield-css-reset'>点击重置</a>",
			type: "forms",
			forms: [
				UISwitch(
					"启用默认拦截规则",
					"baidu-search-enable-default-interception-rules",
					true,
					void 0,
					"默认拦截规则"
				),
				{
					type: "own",
					afterAddToUListCallBack(formConfig, rightContainerOptions) {
						let $searchShield =
							rightContainerOptions?.formHeaderDivElement?.querySelector(
								"a.baidu-search-shield-css-reset"
							) as HTMLAnchorElement;
						DOMUtils.on($searchShield, "click", void 0, () => {
							BaiduSearchRule.clearLocalRule();
							let $textArea =
								rightContainerOptions.ulElement.querySelector("textarea");
							$textArea!.value = "";
							Qmsg.success("已重置");
						});
					},
					getLiElementCallBack(liElement) {
						let $textAreaContainer = DOMUtils.createElement("div", {
							className: "pops-panel-textarea baidu-search-interception-rule",
							innerHTML: `
                            <style>
                            .baidu-search-interception-rule{
                                width: 100%;
                            }
                            .baidu-search-interception-rule textarea{
                                min-height: 3.6rem;
                                white-space: pre;
                                border-radius: 0 !important;
                            }
                            </style>
                            <textarea></textarea>
                            `,
						});
						let $textArea = $textAreaContainer.querySelector(
							"textarea"
						) as HTMLTextAreaElement;
						/* 自定义规则 */
						let customRule = BaiduSearchRule.getLocalRule();
						$textArea!.value = customRule;
						liElement.appendChild($textAreaContainer);
						DOMUtils.on(
							$textArea,
							["input", "propertychange"],
							void 0,
							utils.debounce(function () {
								BaiduSearchRule.setLocalRule($textArea.value);
							}, 100)
						);
						return liElement;
					},
				},
			],
		},
		{
			text: "自定义样式",
			type: "forms",
			forms: [
				{
					type: "own",
					getLiElementCallBack(liElement) {
						let $textAreaContainer = DOMUtils.createElement("div", {
							className: "pops-panel-textarea baidu-search-user-style",
							innerHTML: `
                            <style>
                            .baidu-search-user-style{
                                width: 100%;
                            }
                            .baidu-search-user-style textarea{
                                min-height: 3.6rem;
                                white-space: pre;
                                border-radius: 0 !important;
                            }
                            </style>
                            <textarea></textarea>
                            `,
						});
						let $textArea = $textAreaContainer.querySelector(
							"textarea"
						) as HTMLTextAreaElement;
						/* 自定义样式 */
						$textArea.value = PopsPanel.getValue("baidu-search-user-style", "");
						liElement.appendChild($textAreaContainer);
						DOMUtils.on(
							$textArea,
							["input", "propertychange"],
							void 0,
							utils.debounce(function () {
								PopsPanel.setValue("baidu-search-user-style", $textArea.value);
							}, 100)
						);
						return liElement;
					},
				},
			],
		},
	],
};

export { PanelSearchSettingUI };
