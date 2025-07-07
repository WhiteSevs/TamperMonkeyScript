import type {
	PopsPanelContentConfig,
	PopsPanelFormsTotalDetails,
} from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { ApiTestBase } from "../base/ApiTestBase";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/components/ui-info";
import { CommonUtil } from "@components/utils/CommonUtil";
import { DOMUtils, utils } from "@/env";
import Qmsg from "qmsg";
import { monkeyWindow } from "ViteGM";
import { TamperMonkeyUtils } from "@/utils/TamperMonkeyUtils";

export class GrantTest_close extends ApiTestBase {
	public getApiName() {
		return "window.close ";
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
			headerTitle: `${TamperMonkeyUtils.getApiDocUrl(apiName)}`,
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
									text: CommonUtil.escapeHtml("测试window.close"),
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
										DOMUtils.on($button, "click", (event) => {
											utils.preventEvent(event);
											try {
												monkeyWindow.close();
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
