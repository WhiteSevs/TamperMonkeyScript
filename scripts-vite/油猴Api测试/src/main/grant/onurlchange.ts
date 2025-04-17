import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { ApiTestBase } from "../base/ApiTestBase";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/common-components/ui-info";
import { CommonUtil } from "@/utils/CommonUtil";
import { DOMUtils, utils } from "@/env";
import { monkeyWindow } from "ViteGM";
import Qmsg from "qmsg";

export class GrantTest_onurlchange extends ApiTestBase {
	public getApiName() {
		return "window.onurlchange ";
	}
	getAsyncApiOption() {
		return void 0;
	}
	public isSupport() {
		return true;
	}
	public getUIOption() {
		let apiName = this.getApiName();
		let result: PopsPanelContentConfig = {
			id: "aside-" + apiName,
			title: "" + apiName,
			headerTitle: `${CommonUtil.getTampoerMonkeyApiUrl(apiName)}`,
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
					text: "功能测试",
					forms: [
						UIInfo(() => {
							try {
								return {
									text: CommonUtil.escapeHtml("测试window.onurlchange"),
									tag: "info",
									description: "点击按钮进行测试",
									afterRender(container) {
										let $button = DOMUtils.parseHTML(
											/*html*/ `
											<div class="pops-panel-button pops-panel-button-no-icon">
												<button class="pops-panel-button_inner" type="default">
													<i class="pops-bottom-icon" is-loading="false"></i>
													<span class="pops-panel-button-text">点击执行</span>
												</button>
											</div>
											`,
											false,
											false
										);
										/**
										 * urlchange改变事件
										 */
										let urlChangeEvent = (info: { url: string }) => {
											clearTimeout(timeId);
											console.log("urlchange event info ==> ", info);
											Qmsg.success("urlchange event ==> url is changed");
										};
										let timeId: number;
										DOMUtils.on($button, "click", (event) => {
											try {
												utils.preventEvent(event);
												clearTimeout(timeId);
												// 该值为null，而非undefined
												if (monkeyWindow.onurlchange === null) {
													monkeyWindow.removeEventListener(
														"urlchange",
														urlChangeEvent
													);
													monkeyWindow.addEventListener(
														"urlchange",
														urlChangeEvent
													);
													window.history.pushState({}, "", "#/onurlchange");
													timeId = setTimeout(() => {
														Qmsg.error("urlchange event is not trigger");
													}, 1000);
												} else {
													Qmsg.error("window.onurlchange is not null");
												}
											} catch (error: any) {
												Qmsg.error(error.toString(), {
													consoleLogContent: true,
												});
											}
										});
										DOMUtils.after(container.$leftContainer, $button);
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
					],
				},
			],
		};

		return result;
	}
}
