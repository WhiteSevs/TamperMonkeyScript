import { BaiduSearchBlockRule } from "@/main/search/SearchBlockRule";
import { DOMUtils, utils } from "@/env";
import { BaiduRouter } from "@/router/BaiduRouter";
import { PopsPanel } from "@/setting/setting";
import { UISwitch } from "@/setting/common-components/ui-switch";
import Qmsg from "qmsg";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";

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
			text: "",
			type: "forms",
			forms: [
				{
					text: "主页",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									"精简主页",
									"baidu_search_home_homepage_minification",
									true
								),
							],
						},
					],
				},
				{
					text: "百度健康",
					type: "deepMenu",
					headerTitle: "百度健康（/bh）",
					forms: [
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
					],
				},
				{
					text: "视频页",
					type: "deepMenu",
					forms: [
						{
							text: "功能",
							type: "forms",
							forms: [
								UISwitch(
									"自动跳转至原网页",
									"baidu-search-video-autoJumpToOriginUrl",
									false,
									void 0,
									"自动点击【原网页】进行跳转"
								),
							],
						},
						{
							text: "屏蔽",
							type: "forms",
							forms: [
								UISwitch(
									"【屏蔽】底部推荐视频",
									"baidu-search-video-blockBottomRecommendVideo",
									false,
									void 0,
									"屏蔽元素"
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
					text: "图片",
					type: "deepMenu",
					forms: [
						{
							text: "Vue属性",
							type: "forms",
							forms: [
								UISwitch(
									"isBaiduBox",
									"baidu_search_vsearch-isBaiduBox",
									true,
									void 0,
									""
								),
							],
						},
					],
				},
				// {
				// 	text: "问答",
				// 	type: "deepMenu",
				// 	forms: [
				// 		{
				// 			text: "",
				// 			type: "forms",
				// 			forms: [],
				// 		},
				// 	],
				// },
				// {
				// 	text: "笔记",
				// 	type: "deepMenu",
				// 	forms: [
				// 		{
				// 			text: "",
				// 			type: "forms",
				// 			forms: [],
				// 		},
				// 	],
				// },
			],
		},
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
									"禁止自动播放视频",
									"baidu-search-blockAutomaticVideoPlayback",
									false,
									void 0,
									"移除video-player元素，可能会导致某些第一个结果是智能卡片时，点击更多按钮无反应(webview/Safari)"
								),
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
									"自动点击翻页 => SearchCraft",
									"baidu_search_automatically_click_on_the_next_page_with_searchcraft_ua",
									false,
									function (event, enable) {
										if (
											enable &&
											PopsPanel.getValue(
												"baidu_search_automatically_expand_next_page"
											)
										) {
											let $click = event.target as HTMLElement;
											let $shadowRoot = $click.getRootNode() as ShadowRoot;
											let $checkbox =
												$shadowRoot.querySelector<HTMLSpanElement>(
													`li[${PopsPanel.$data.attributeKeyName}="baidu_search_automatically_expand_next_page"] span.pops-panel-switch__core`
												);
											if (!$checkbox) {
												throw new Error("未找到互斥元素");
											}
											$checkbox.click();
										}
									},
									"userAgent包含SearchCraft时生效，与↓【自动翻页】功能冲突"
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
											let $click = event.target as HTMLElement;
											let $shadowRoot = $click.getRootNode() as ShadowRoot;
											let $checkbox =
												$shadowRoot.querySelector<HTMLSpanElement>(
													`li[${PopsPanel.$data.attributeKeyName}="baidu_search_automatically_click_on_the_next_page_with_searchcraft_ua"] span.pops-panel-switch__core`
												);
											if (!$checkbox) {
												throw new Error("未找到互斥元素");
											}
											$checkbox.click();
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
									"需启用【自动翻页】，浏览器地址栏会自动同步当前页面的Url"
								),
								UISwitch(
									"【优化】大家还在搜",
									"baidu_search_refactor_everyone_is_still_searching",
									true,
									void 0,
									"正确新标签页打开，避免跳转至App下载页面"
								),
								UISwitch(
									"新标签页打开",
									"baidu_search_hijack__onClick_to_blank",
									false,
									void 0,
									"需开启【劫持-_onClick函数】和【处理搜索结果】且能成功劫持到该函数才会生效，否则是提取article的URL链接信息跳转"
								),
							],
						},
					],
				},
				{
					text: "屏蔽",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									"【屏蔽】大家还在搜",
									"baidu_search_blocking_everyone_is_still_searching",
									true,
									void 0,
									"用于补充下面自定义拦截规则的默认配置的【大家还在搜】"
								),
								UISwitch(
									"【屏蔽】精选笔记",
									"baidu-search-blockNoteLead",
									false,
									void 0,
									"屏蔽 精选笔记 搜素结果"
								),
							],
						},
					],
				},
				{
					text: "劫持/拦截",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
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
					],
				},
				{
					text: "自定义拦截规则",
					type: "deepMenu",
					forms: [
						{
							text: "<a href='https://greasyfork.org/zh-CN/scripts/418349-%E7%A7%BB%E5%8A%A8%E7%AB%AF-%E7%99%BE%E5%BA%A6%E7%B3%BB%E4%BC%98%E5%8C%96#:~:text=%E5%A6%82%E4%BD%95%E8%87%AA%E5%AE%9A%E4%B9%89%E7%99%BE%E5%BA%A6%E6%90%9C%E7%B4%A2%E6%8B%A6%E6%88%AA%E8%A7%84%E5%88%99' target='_blank'>查看规则文档</><br><a href='javascript:;' class='baidu-search-shield-css-reset'>点击重置</a>",
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
											BaiduSearchBlockRule.clearLocalRule();
											let $textArea =
												rightContainerOptions.ulElement.querySelector(
													"textarea"
												);
											$textArea!.value = "";
											Qmsg.success("已重置");
										});
									},
									getLiElementCallBack(liElement) {
										let $textAreaContainer = DOMUtils.createElement("div", {
											className:
												"pops-panel-textarea baidu-search-interception-rule",
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
										let customRule = BaiduSearchBlockRule.getLocalRule();
										$textArea!.value = customRule;
										liElement.appendChild($textAreaContainer);
										DOMUtils.on(
											$textArea,
											["input", "propertychange"],
											void 0,
											utils.debounce(function () {
												BaiduSearchBlockRule.setLocalRule($textArea.value);
											}, 100)
										);
										return liElement;
									},
								},
							],
						},
					],
				},
				{
					text: "自定义样式",
					type: "deepMenu",
					forms: [
						{
							text: "",
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
										$textArea.value = PopsPanel.getValue(
											"baidu-search-user-style",
											""
										);
										liElement.appendChild($textAreaContainer);
										DOMUtils.on(
											$textArea,
											["input", "propertychange"],
											void 0,
											utils.debounce(function () {
												PopsPanel.setValue(
													"baidu-search-user-style",
													$textArea.value
												);
											}, 100)
										);
										return liElement;
									},
								},
							],
						},
					],
				},
			],
		},
	],
};

export { PanelSearchSettingUI };
