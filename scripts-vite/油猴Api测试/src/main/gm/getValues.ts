import { GM, GM_getValues, GM_setValues } from "ViteGM";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/components/ui-info";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/types/main";
import { CommonUtil } from "@components/utils/CommonUtil";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import { DOMUtils, utils } from "@/env";
import Qmsg from "qmsg";
import { TamperMonkeyUtils } from "@/utils/TamperMonkeyUtils";

export class ApiTest_getValues extends ApiAsyncTestBase {
	public isSupport() {
		return typeof GM_getValues === "function";
	}
	public getApiName() {
		return "GM_getValues";
	}
	public getAsyncApiOption() {
		return {
			name: "GM.getValues",
			isSupport: this.isSupportGM() && typeof GM.getValues === "function",
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
			clickCallback(data) {
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
					return UIInfo(() => {
						return {
							text: "测试直接读取",
							description: "没有入参",
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
										let value = GM_getValues();
										Qmsg.info("请在控制台查看读取的数据");
										console.log(value);
									} catch (error: any) {
										Qmsg.error(error.toString(), { consoleLogContent: true });
									}
								});
							},
						};
					});
				})(),
				(() => {
					return UIInfo(() => {
						let localStorageDataValue = {
							"GM_getValues-test-key-non-exists-1": 1111,
							"GM_getValues-test-key-non-exists-2": 2222,
						};
						return {
							text: "测试读取不存在的数据",
							description:
								"数据默认值：" + JSON.stringify(localStorageDataValue),
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
										let value = GM_getValues(localStorageDataValue);
										console.log(value);
										if (value == null) {
											Qmsg.error("读取失败，读取的数据为null");
										} else if (
											JSON.stringify(value) ===
											JSON.stringify(localStorageDataValue)
										) {
											Qmsg.success("读取成功，读取的数据和默认值相同");
										} else {
											Qmsg.error("读取成功，但读取的数据和默认值不同");
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
					let localStorageDataValue = {
						"GM_getValues-test-key-1": 1,
						"GM_getValues-test-key-2": 2,
					};
					return UIInfo(() => {
						return {
							text: "测试存储对象并读取",
							description: JSON.stringify(localStorageDataValue),
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
										GM_setValues(localStorageDataValue);
										let keys = Object.keys(localStorageDataValue);
										let value = GM_getValues(keys);
										console.log(value);
										if (value == null) {
											Qmsg.error("读取失败，读取的数据为null");
										} else if (
											JSON.stringify(value) ===
											JSON.stringify(localStorageDataValue)
										) {
											Qmsg.success("读取成功，写入的数据和读取的数据相同");
										} else {
											Qmsg.error("读取成功，但写入的数据和读取的数据不同");
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
