import { GM, GM_getValue, GM_setValue } from "ViteGM";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/components/ui-info";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/types/main";
import { CommonUtil } from "@components/utils/CommonUtil";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import { DOMUtils, utils } from "@/env";
import Qmsg from "qmsg";
import { TamperMonkeyUtils } from "@/utils/TamperMonkeyUtils";

export class ApiTest_getValue extends ApiAsyncTestBase {
	public isSupport() {
		return typeof GM_getValue === "function";
	}
	public getApiName() {
		return "GM_getValue";
	}
	public getAsyncApiOption() {
		return {
			name: "GM.getValue",
			isSupport: this.isSupportGM() && typeof GM.getValue === "function",
		};
	}
	public getUIOption() {
		const that = this;
		let apiName = this.getApiName();
		let apiAsyncInfo = this.getAsyncApiOption();

		let result: PopsPanelContentConfig = {
			id: "aside-" + apiName,
			title: "" + apiName,
			headerTitle: `${TamperMonkeyUtils.getApiDocUrl(
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
				...[
					{
						key: "Test GM_getValue boolean",
						value: true,
						text: function () {
							return `存储boolean类型并读取`;
						},
						desc: function () {
							return `"${this.key}": ${this.value}`;
						},
					},
					{
						key: "Test GM_getValue number",
						value: 1,
						text: function () {
							return `存储number类型并读取`;
						},
						desc: function () {
							return `"${this.key}": ${this.value}`;
						},
					},
					{
						key: "Test GM_getValue string",
						value: "测试字符串",
						text: function () {
							return `存储string类型并读取`;
						},
						desc: function () {
							return `"${this.key}": "${this.value}"`;
						},
					},
					{
						key: "Test GM_getValue undefined",
						value: undefined,
						text: function () {
							return `存储undefined类型并读取`;
						},
						desc: function () {
							return `"${this.key}": ${this.value}`;
						},
					},
					{
						key: "Test GM_getValue null",
						value: null,
						text: function () {
							return `存储object类型的null并读取`;
						},
						desc: function () {
							return `"${this.key}": ${this.value}`;
						},
					},
					{
						key: "Test GM_getValue object",
						value: { "object key": "object value" },
						text: function () {
							return `存储object类型并读取`;
						},
						desc: function () {
							return `"${this.key}": ${JSON.stringify(this.value)}`;
						},
					},
				].map((it) => {
					return (() => {
						let localStorageDataKey = it.key;
						let localStorageDataValue = it.value;
						return UIInfo(() => {
							return {
								text: it.text(),
								description: it.desc(),
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
									DOMUtils.on($button, "click", (event) => {
										utils.preventEvent(event);
										try {
											GM_setValue(localStorageDataKey, localStorageDataValue);
											let value = GM_getValue(localStorageDataKey);
											if (typeof value === typeof localStorageDataValue) {
												if (
													localStorageDataValue === null &&
													localStorageDataValue != value
												) {
													Qmsg.error(
														"读取成功，但存储类型和读取类型不同，存储类型为null，但读取类型不为null"
													);
													return;
												}
												Qmsg.success("读取成功，存储类型和读取类型一致");
											} else {
												Qmsg.error("读取成功，但存储类型和读取类型不同");
											}
										} catch (error: any) {
											Qmsg.error(error.toString(), { consoleLogContent: true });
										}
									});
								},
							};
						});
					})();
				}),
				(() => {
					let localStorageDataKey = "Test GM_getValue null with defaultValue";
					let localStorageDefaultValue = 123;
					return UIInfo(() => {
						return {
							text:
								"存储object类型的null，读取时指定默认值为" +
								localStorageDefaultValue,
							description: `GM_getValue("${localStorageDataKey}", ${localStorageDefaultValue})`,
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
								DOMUtils.on($button, "click", (event) => {
									utils.preventEvent(event);
									try {
										GM_setValue(localStorageDataKey, null);
										let value = GM_getValue(
											localStorageDataKey,
											localStorageDefaultValue
										);
										if (typeof value === "object" && value == null) {
											Qmsg.success("读取的值是存储的值：" + value);
										} else {
											Qmsg.error("读取的值不是存储的值：" + value);
										}
									} catch (error: any) {
										Qmsg.error(error.toString(), { consoleLogContent: true });
									}
								});
							},
						};
					});
				})(),
				(() => {
					let localStorageDataKey = "Test GM_getValue defaultValue";
					let localStorageDefaultValue = 123;
					return UIInfo(() => {
						return {
							text: "不存储，测试调用默认值",
							description: `GM_getValue("${localStorageDataKey}", ${localStorageDefaultValue})`,
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
								DOMUtils.on($button, "click", (event) => {
									utils.preventEvent(event);
									try {
										let value = GM_getValue(
											localStorageDataKey,
											localStorageDefaultValue
										);
										if (typeof value === typeof localStorageDefaultValue) {
											Qmsg.success("读取的值是默认值：" + value);
										} else {
											Qmsg.error("读取的值不是默认值：" + value);
										}
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
