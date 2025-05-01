import { GM, GM_cookie, type GmCookieType } from "ViteGM";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/common-components/ui-info";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/types/main";
import { CommonUtil } from "@/utils/CommonUtil";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import { DOMUtils, pops, utils } from "@/env";
import Qmsg from "qmsg";
import { PanelUISize } from "@/setting/panel-ui-size";

interface GmCookieSetOptions {
	url?: string;
	name: string;
	value: string;
	domain?: string;
	firstPartyDomain?: string;
	partitionKey?: {
		topLevelSite?: string;
	};
	path?: string;
	secure?: boolean;
	httpOnly?: boolean;
	expirationDate?: number;
}
export class ApiTest_cookie extends ApiAsyncTestBase {
	public isSupport() {
		return (
			(typeof GM_cookie === "object" || typeof GM_cookie === "function") &&
			GM_cookie != null
		);
	}
	public getApiOption() {
		let isSupport = this.isSupport();
		return {
			isSupportList: isSupport && typeof GM_cookie.list === "function",
			isSupportSet: isSupport && typeof GM_cookie.set === "function",
			isSupportDelete: isSupport && typeof GM_cookie.delete === "function",
		};
	}
	public getApiName() {
		return "GM_cookie";
	}
	public getAsyncApiOption() {
		let isSupportAsync =
			this.isSupportGM() && typeof GM.cookie === "object" && GM.cookie != null;
		return {
			name: "GM.cookie",
			isSupport: isSupportAsync,
			isSupportList: isSupportAsync && typeof GM.cookie.list === "function",
			isSupportSet: isSupportAsync && typeof GM.cookie.set === "function",
			isSupportDelete: isSupportAsync && typeof GM.cookie.delete === "function",
		};
	}
	public getUIOption() {
		const that = this;
		let apiName = this.getApiName();
		let apiInfo = this.getApiOption();
		let apiAsyncInfo = this.getAsyncApiOption();

		let result: PopsPanelContentConfig = {
			id: "aside-" + apiName,
			title: "" + apiName,
			headerTitle: `${CommonUtil.getTampoerMonkeyApiUrl(
				apiName + ".list",
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
					],
				},
				{
					type: "forms",
					text: "功能测试",
					forms: [],
				},
			],
		};
		let firstFormList = (result["forms"][0] as any)
			.forms as PopsPanelFormsTotalDetails[];
		if (this.isSupport()) {
			firstFormList.push(
				UIInfo(() => {
					return apiInfo.isSupportList
						? {
								text: `支持 ${apiName}.list`,
								tag: "success",
						  }
						: {
								text: `不支持 ${apiName}.list`,
								tag: "error",
						  };
				}),
				UIInfo(() => {
					return apiInfo.isSupportSet
						? {
								text: `支持 ${apiName}.set`,
								tag: "success",
						  }
						: {
								text: `不支持 ${apiName}.set`,
								tag: "error",
						  };
				}),
				UIInfo(() => {
					return apiInfo.isSupportDelete
						? {
								text: `支持 ${apiName}.delete`,
								tag: "success",
						  }
						: {
								text: `不支持 ${apiName}.delete`,
								tag: "error",
						  };
				})
			);
		}
		if (apiAsyncInfo.isSupport) {
			firstFormList.push(
				UIInfo(() => {
					return apiAsyncInfo.isSupportList
						? {
								text: `支持 ${apiAsyncInfo.name}.list`,
								tag: "success",
						  }
						: {
								text: `不支持 ${apiAsyncInfo.name}.list`,
								tag: "error",
						  };
				}),
				UIInfo(() => {
					return apiAsyncInfo.isSupportSet
						? {
								text: `支持 ${apiAsyncInfo.name}.set`,
								tag: "success",
						  }
						: {
								text: `不支持 ${apiAsyncInfo.name}.set`,
								tag: "error",
						  };
				}),
				UIInfo(() => {
					return apiAsyncInfo.isSupportDelete
						? {
								text: `支持 ${apiAsyncInfo.name}.delete`,
								tag: "success",
						  }
						: {
								text: `不支持 ${apiAsyncInfo.name}.delete`,
								tag: "error",
						  };
				})
			);
		} else {
			firstFormList.push(
				UIInfo(() => {
					return { text: "不支持 " + apiAsyncInfo.name, tag: "error" };
				})
			);
		}
		if (this.isSupport()) {
			let newCookieInfo: GmCookieSetOptions = {
				name: "test",
				value: "1",
				expirationDate: (Date.now() + 24 * 60 * 60 * 1000) / 1000,
			};
			((result["forms"][1] as any).forms as PopsPanelFormsTotalDetails[]).push(
				UIInfo(() => {
					try {
						return {
							text: CommonUtil.escapeHtml("测试list获取所有Cookie"),
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
								DOMUtils.on($button, "click", (event) => {
									try {
										utils.preventEvent(event);
										GM_cookie.list({}, (cookies, error) => {
											console.log(cookies);
											if (error) {
												Qmsg.error(error);
											} else {
												if (Array.isArray(cookies)) {
													pops.alert({
														title: {
															text: "GM_cookie.list",
															position: "center",
														},
														content: {
															text: JSON.stringify(cookies, null, 4),
															html: true,
														},
														drag: true,
														mask: {
															enable: true,
														},
														width: PanelUISize.setting.width,
														height: PanelUISize.setting.height,
														style: /*css*/ `
															.pops-alert-content{
																white-space: pre-wrap;
															}
														`,
													});
												} else {
													alert("获取的cookie信息不是数组");
												}
											}
										});
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
				UIInfo(() => {
					try {
						return {
							text: CommonUtil.escapeHtml("测试set新增Cookie"),
							tag: "info",
							description: JSON.stringify(newCookieInfo),
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
									try {
										utils.preventEvent(event);
										GM_cookie.set(newCookieInfo, (error) => {
											if (error) {
												Qmsg.error(error, {
													consoleLogContent: true,
												});
											} else {
												Qmsg.success("set cookie success");
											}
										});
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
				UIInfo(() => {
					try {
						let deleteCookieInfo = {
							name: "test",
						};
						return {
							text: CommonUtil.escapeHtml("测试delete删除Cookie"),
							tag: "info",
							description: JSON.stringify(deleteCookieInfo),
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
									try {
										utils.preventEvent(event);
										GM_cookie.delete(deleteCookieInfo, (error) => {
											if (error) {
												Qmsg.error(error, {
													consoleLogContent: true,
												});
											} else {
												Qmsg.success("delete cookie success");
											}
										});
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
				})
			);
		}
		return result;
	}
}
