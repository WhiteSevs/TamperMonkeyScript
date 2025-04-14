import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { ApiTestBase } from "../base/ApiTestBase";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/common-components/ui-info";
import { CommonUtil } from "@/utils/CommonUtil";
import { DOMUtils, utils } from "@/env";
import Qmsg from "qmsg";
import { monkeyWindow, unsafeWindow } from "ViteGM";

export class GrantTest_focus extends ApiTestBase {
	public getApiName() {
		return "window.focus ";
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
									text: CommonUtil.escapeHtml("测试window.focus"),
									tag: "info",
									description: "点击按钮执行该函数",
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
										let blurEvent = () => {
											// 已切换至其它页面
											setTimeout(() => {
												monkeyWindow.focus();
											}, 3000);
										};
										DOMUtils.on($button, "click", (event) => {
											utils.preventEvent(event);
											window.removeEventListener("blur", blurEvent, {
												capture: true,
											});
											window.addEventListener("blur", blurEvent, {
												capture: true,
												once: true,
											});
											try {
												Qmsg.info(
													"请切换至其它Tab页面，切换完毕3秒后会自动调用该函数"
												);
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
