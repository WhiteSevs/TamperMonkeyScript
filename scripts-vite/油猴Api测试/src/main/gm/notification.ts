import { GM, GM_notification } from "ViteGM";
import { ApiTestBase } from "../ApiTestBase";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/common-components/ui-info";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/types/main";
import { DOMUtils, utils } from "@/env";
import { CommonUtil } from "@/utils/CommonUtil";

export class ApiTest_notification extends ApiTestBase {
	public isSupport() {
		return typeof GM_notification === "function";
	}
	public getApiName() {
		return "GM_notification";
	}
	public getAsyncApiOption() {
		return {
			name: "GM.notification",
			isSupport: this.isSupportGM() && typeof GM.notification === "function",
		};
	}
	public getUIOption() {
		const that = this;
		let apiName = this.getApiName();
		let apiAsyncInfo = this.getAsyncApiOption();

		let result: PopsPanelContentConfig = {
			id: "aside-" + apiName,
			title: "" + apiName,
			headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
			scrollToDefaultView: true,
			isDefault() {
				return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
			},
			callback(data) {
				StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
			},
			forms: [
				{
					type: "forms",
					text: "函数测试",
					forms: [
						UIInfo(() =>
							this.isSupport()
								? {
										text: "支持 " + apiName,
										tag: "success",
								  }
								: {
										text: "不支持 " + apiName,
										tag: "error",
								  }
						),
						UIInfo(() =>
							apiAsyncInfo.isSupport
								? {
										text: "支持 " + apiAsyncInfo.name,
										tag: "success",
								  }
								: {
										text: "不支持 " + apiAsyncInfo.name,
										tag: "error",
								  }
						),
					],
				},
				{
					type: "forms",
					text: "功能测试",
					forms: [],
				},
			],
		};
		if (this.isSupport()) {
			((result["forms"][1] as any).forms as PopsPanelFormsTotalDetails[]).push(
				UIInfo(() => {
					try {
						let $target: HTMLElement | undefined = undefined;
						let $info: HTMLElement | undefined = undefined;
						let isClick = false;
						let isPrevent = false;
						let isDone = false;

						let updateText = utils.debounce(() => {
							console.log("update");
							let text = "";
							let tag = "success";
							if (isClick) {
								text += "支持 onclick 函数";
								if (isPrevent) {
									text = text.trim();
									text += "且支持提供 event 参数";
								} else {
									text += "但是不支持提供 event 参数";
									tag = "warn";
								}
							} else {
								text += "不支持 onclick 函数";
								tag = "error";
							}
							if (isDone) {
								text += "<br>支持 ondone 函数";
							} else {
								text += "<br>不支持 ondone 函数";
								tag = "error";
							}
							DOMUtils.removeClass($info!, "info");
							DOMUtils.removeClass($info!, "warn");
							DOMUtils.removeClass($info!, "error");
							DOMUtils.removeClass($info!, "success");
							DOMUtils.addClass($info!, tag);
							DOMUtils.html($info!, text);

							// 重置参数
							isClick = false;
							isDone = false;
							isPrevent = false;
						}, 800);
						return {
							text: CommonUtil.escapeHtml("点击通知的内容用于测试函数是否生效"),
							tag: "info",
							afterRender(container) {
								$target = container.target!;
								$info =
									container.target!.querySelector<HTMLElement>(
										".support-info"
									)!;
								let $button = DOMUtils.parseHTML(
									/*html*/ `
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,
									false,
									false
								);
								DOMUtils.on($button, "click", (event) => {
									utils.preventEvent(event);
									GM_notification({
										title: "测试 GM_notification 标题",
										text: "测试 GM_notification 内容",
										url: "https:/example.com/",
										onclick: (event) => {
											// The userscript is still running, so don't open example.com
											isClick = true;
											if (event) {
												isPrevent = true;
												event.preventDefault();
											}
											// Display an alert message instead
											updateText();
										},
										ondone() {
											isDone = true;
											updateText();
										},
									});
								});
								DOMUtils.after($info!, $button);
							},
						};
					} catch (error) {
						console.error(error);
						return {
							text: "执行错误 " + error,
							tag: "error",
						};
					} finally {
					}
				}),
				UIInfo(() => {
					try {
						return {
							text: CommonUtil.escapeHtml("点击通知的内容跳转链接"),
							tag: "info",
							afterRender(container) {
								let $target = container.target!;
								let $info =
									container.target!.querySelector<HTMLElement>(
										".support-info"
									)!;
								let $button = DOMUtils.parseHTML(
									/*html*/ `
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,
									false,
									false
								);
								DOMUtils.on($button, "click", (event) => {
									utils.preventEvent(event);
									GM_notification({
										title: "测试 GM_notification 标题",
										text: "测试 GM_notification 内容",
										url: "https:/example.com/",
									});
								});
								DOMUtils.after($info!, $button);
							},
						};
					} catch (error) {
						console.error(error);
						return {
							text: "执行错误 " + error,
							tag: "error",
						};
					}
				})
			);
		}
		return result;
	}
}
