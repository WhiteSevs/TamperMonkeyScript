import {
	GM,
	GM_addValueChangeListener,
	GM_removeValueChangeListener,
	GM_setValue,
} from "ViteGM";
import { ApiTestBase } from "../base/ApiTestBase";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/common-components/ui-info";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/types/main";
import { DOMUtils, utils } from "@/env";
import { CommonUtil } from "@/utils/CommonUtil";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import Qmsg from "qmsg";
import { TagUtil, type Tag } from "@/setting/tag";

export class ApiTest_removeValueChangeListener extends ApiAsyncTestBase {
	public isSupport() {
		return typeof GM_removeValueChangeListener === "function";
	}
	public getApiName() {
		return "GM_removeValueChangeListener";
	}
	public getAsyncApiOption() {
		return {
			name: "GM.removeValueChangeListener",
			isSupport:
				this.isSupportGM() &&
				typeof GM.removeValueChangeListener === "function",
		};
	}
	public getUIOption() {
		const that = this;
		let apiName = this.getApiName();
		let apiAsyncInfo = this.getAsyncApiOption();

		let result: PopsPanelContentConfig = {
			id: "aside-" + apiName,
			title: "" + apiName,
			headerTitle: `${CommonUtil.getTampoerMonkeyApiUrl(
				apiName,
				`${apiName} & ${apiAsyncInfo.name}`
			)}`,
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
				(() => {
					let localStorageDataKey = apiName + "_key_1";
					return UIInfo(() => {
						return {
							text: "测试移除监听器",
							description: ``,
							tag: "info",
							afterRender(container) {
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
								DOMUtils.after(container.$leftContainer, $button);
								// 点击事件
								let tagTextList: {
									tag: keyof typeof Tag;
									text?: string;
								}[] = [];
								DOMUtils.on($button, "click", (event) => {
									utils.preventEvent(event);
									try {
										tagTextList = [];
										TagUtil.setTag(
											container.$leftText,
											"info",
											"等待移除监听器"
										);
										DOMUtils.text(container.$leftDesc, this.text);
										DOMUtils.show(container.$leftDesc, false);
										let delaySetValue = utils.formatTime(Date.now());

										let listenerId = GM_addValueChangeListener(
											localStorageDataKey,
											function (key, oldValue, newValue, remote) {
												console.log(arguments);
												tagTextList.push({
													tag: "error",
													text: "未成功移除监听器",
												});
												TagUtil.setTagList(container.$leftText, tagTextList);
											}
										);
										GM_removeValueChangeListener(listenerId);
										tagTextList.push({
											tag: "success",
											text: "支持移除监听器",
										});
										TagUtil.setTagList(container.$leftText, tagTextList);
										GM_setValue(localStorageDataKey, delaySetValue);
									} catch (error: any) {
										Qmsg.error(error.toString(), { consoleLogContent: true });
									}
								});
							},
						};
					});
				})()
			);
		}
		return result;
	}
}
