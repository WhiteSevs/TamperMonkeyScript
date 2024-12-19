import { GM, GM_openInTab } from "ViteGM";
import { ApiTestBase } from "../ApiTestBase";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/common-components/ui-info";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/types/main";
import { DOMUtils, utils } from "@/env";
import { CommonUtil } from "@/utils/CommonUtil";
import Qmsg from "qmsg";

export class ApiTest_openInTab extends ApiTestBase {
	public isSupport() {
		return typeof GM_openInTab === "function";
	}
	public getApiName() {
		return "GM_openInTab";
	}
	public getAsyncApiOption() {
		return {
			name: "GM.openInTab",
			isSupport: this.isSupportGM() && typeof GM.openInTab === "function",
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
						return {
							text: CommonUtil.escapeHtml("后台打开新标签页"),
							description: "https://www.example.com/",
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
									let result = GM_openInTab("https://www.example.com/");
									if (typeof result === "object" && result != null) {
										let support_close =
											"close" in result && typeof result.close === "function";
										let support_closed =
											"closed" in result && typeof result.closed === "boolean";
										let support_onclose = "onclose" in result;
										Qmsg.info(
											/*html*/ `
											<div style="text-align: left;">
												<p>GM_openInTab 返回的对象属性</p>
												<p>close:Function ${support_close}</p>
												<p>closed:Boolean ${support_closed}</p>
												<p>onclose ${support_onclose}</p>
											</div>`,
											{
												isHTML: true,
												timeout: 6000,
											}
										);
									} else {
										Qmsg.error(
											"GM_openInTab 不支持返回object对象或返回值为null"
										);
									}
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
				}),
				UIInfo(() => {
					try {
						return {
							text: CommonUtil.escapeHtml("配置 active: true"),
							description: "https://www.example.com/",
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
									GM_openInTab("https://www.example.com/", {
										active: true,
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
				}),
				UIInfo(() => {
					try {
						return {
							text: CommonUtil.escapeHtml("测试调用返回值 .close()"),
							description: "https://www.example.com/",
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
									let result = GM_openInTab("https://www.example.com/");
									if (result && typeof result?.close === "function") {
										setTimeout(() => {
											try {
												result.close();
												Qmsg.success("成功调用 .close() 方法");
											} catch (error) {
												Qmsg.error("调用 .close() 方法失败 " + error);
											}
										}, 1000);
									} else {
										Qmsg.error("返回对象中不支持 .close() 方法");
									}
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
				}),
				UIInfo(() => {
					try {
						return {
							text: CommonUtil.escapeHtml("测试监听关闭是否生效 .onclose"),
							description: "https://www.example.com/",
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
									let result = GM_openInTab("https://www.example.com/");
									let timeId: undefined | number = void 0;
									if (typeof result === "object" && result != null) {
										result.onclose = () => {
											Qmsg.success("成功触发 .onclose");
											clearTimeout(timeId);
										};
									}
									if (result && typeof result?.close === "function") {
										setTimeout(() => {
											try {
												result.close();
												timeId = setTimeout(() => {
													Qmsg.error("测试超时，未触发回调 .onclose");
												}, 2000);
											} catch (error) {
												Qmsg.error("调用 .close() 方法失败 " + error);
											}
										}, 1000);
									} else {
										Qmsg.error("返回对象中不支持 .close() 方法");
									}
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
