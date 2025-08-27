import { GM, GM_notification, type GmNotificationControl, type GmNotificationOptions } from "ViteGM";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/components/ui-info";
import { DOMUtils, setTimeoutLog, utils } from "@/env";
import { CommonUtil } from "@components/utils/CommonUtil";
import { Tag, TagUtil, type TagName } from "@/setting/tag";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import Qmsg from "qmsg";
import { TamperMonkeyUtils } from "@/utils/TamperMonkeyUtils";
import type { PopsPanelFormsDetails } from "@whitesev/pops/dist/types/src/components/panel/types/components-forms";

export class ApiTest_notification extends ApiAsyncTestBase {
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
			headerTitle: `${TamperMonkeyUtils.getApiDocUrl(apiName, `${apiName} & ${apiAsyncInfo.name}`)}`,
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
				{
					type: "forms",
					text: "功能测试（异步）",
					forms: [],
				},
			],
		};
		if (this.isSupport()) {
			[
				{
					name: apiName,
					fn: async (details: GmNotificationOptions) => {
						return new Promise<boolean | GmNotificationControl>((resolve) => {
							let originClick = details.onclick;
							let fnResult = GM_notification({
								...details,
								onclick(...args: any[]) {
									if (typeof originClick === "function") {
										Reflect.apply(originClick, this, args);
									}
									resolve(fnResult ?? true);
								},
							});
						});
					},
					formList: (<PopsPanelFormsDetails>result["forms"][1]).forms,
				},
				{
					name: apiAsyncInfo.name,
					fn: GM.notification,
					formList: (<PopsPanelFormsDetails>result["forms"][2]).forms,
				},
			].forEach((data) => {
				let apiNameTag = data.name.replace(".", "__async__");

				data.formList.push(
					UIInfo(() => {
						try {
							return {
								text: CommonUtil.escapeHtml("点击通知的内容测试url"),
								tag: "info",
								description: "https://example.com/",
								afterRender(container) {
									let $target = container.target!;
									let $button = DOMUtils.parseHTML(
										/*html*/ `
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,
										false,
										false
									);
									DOMUtils.on($button, "click", async (event) => {
										utils.preventEvent(event);
										try {
											await data.fn({
												title: `测试 ${data.name} 标题`,
												text: `测试 ${data.name} 内容`,
												url: "https://example.com/",
											});
										} catch (error: any) {
											Qmsg.error(error.toString(), { consoleLogContent: true });
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
						}
					}),
					UIInfo(() => {
						try {
							let $target: HTMLElement | undefined = undefined;
							let $info: HTMLElement | undefined = undefined;
							let isClick = false;
							let isDone = false;

							return {
								text: "测试通知的timeout",
								description: "请勿点击通知",
								tag: "info",
								afterRender(container) {
									$target = container.target!;
									$info = container.$leftContainer;
									let $button = DOMUtils.parseHTML(
										/*html*/ `
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,
										false,
										false
									);
									let timeId: number | undefined = void 0;
									let updateText = utils.debounce(() => {
										try {
											clearTimeout(timeId);
											let clickText = "测试成功，触发";
											let clickTag: TagName = "success";
											DOMUtils.html(container.$leftText, /*html*/ `<p class="${clickTag}">${clickText}</p>`);

											// 重置参数
											isClick = false;
											isDone = false;
										} catch (error: any) {
											Qmsg.error(error.toString(), { consoleLogContent: true });
										}
									}, 800);
									DOMUtils.on($button, "click", async (event) => {
										try {
											utils.preventEvent(event);
											clearTimeout(timeId);
											let timeCount = 10;
											let calcTimeCount = timeCount;
											let tipInfoText = () => {
												let result = `正在等待触发超时：5000ms`;
												calcTimeCount--;
												return result;
											};
											TagUtil.setTag(container.$leftText, "info", tipInfoText());
											timeId = setTimeoutLog(() => {
												TagUtil.setTag(container.$leftText, "error", "测试超时，未触发ondone回调");
											}, timeCount * 1000);
											const clicked = await data.fn({
												title: `测试 ${data.name} 标题`,
												text: `测试 ${data.name} 内容`,
												url: "https://example.com/",
												timeout: 5000,
												ondone() {
													updateText();
												},
											});
										} catch (error: any) {
											Qmsg.error(error.toString(), { consoleLogContent: true });
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
						} finally {
						}
					}),
					UIInfo(() => {
						try {
							let $target: HTMLElement | undefined = undefined;
							let $info: HTMLElement | undefined = undefined;
							let isClick = false;
							let isPrevent = false;
							let isDone = false;
							let text = "点击通知的内容测试onclick、ondone函数";
							let desc = "https://example.com/";
							return {
								text: text,
								description: desc,
								tag: "info",
								afterRender(container) {
									$target = container.target!;
									$info = container.$leftContainer;
									let $button = DOMUtils.parseHTML(
										/*html*/ `
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,
										false,
										false
									);
									let timeId: number | undefined = void 0;
									let intervalId: number | undefined = void 0;
									let updateText = utils.debounce(() => {
										try {
											clearTimeout(timeId);
											clearInterval(intervalId);
											let clickText = "";
											let clickTag: TagName = "success";
											let doneText = "";
											let doneTag: TagName = "success";
											if (isClick) {
												clickText += "支持 onclick 函数";
												if (isPrevent) {
													clickText = clickText.trim();
													clickText += "且支持提供 event 参数";
												} else {
													clickText += "但是不支持提供 event 参数";
													clickTag = "warn";
												}
											} else {
												clickText += "不支持 onclick 函数";
												clickTag = "error";
											}
											if (isDone) {
												doneText += "支持 ondone 函数";
											} else {
												doneText += "不支持 ondone 函数";
												doneTag = "error";
											}
											DOMUtils.html(
												container.$leftText,
												/*html*/ `
												<p class="${clickTag}">${clickText}</p>
												<p class="${doneTag}">${doneText}</p>`
											);

											// 重置参数
											isClick = false;
											isDone = false;
											isPrevent = false;
										} catch (error: any) {
											Qmsg.error(error.toString(), { consoleLogContent: true });
										}
									}, 800);
									DOMUtils.on($button, "click", async (event) => {
										try {
											utils.preventEvent(event);
											clearTimeout(timeId);
											clearInterval(intervalId);
											let timeCount = 10;
											let calcTimeCount = timeCount;
											let tipInfoText = () => {
												let result = `正在等待触发回调，请在规定时间内点击弹窗的【关闭】按钮或者内容：${calcTimeCount}s`;
												calcTimeCount--;
												return result;
											};
											DOMUtils.text(container.$leftText, tipInfoText());
											DOMUtils.text(container.$leftDesc, text);
											DOMUtils.show(container.$leftDesc, false);
											timeId = setTimeoutLog(() => {
												clearInterval(intervalId);
												TagUtil.setTag(container.$leftText, "error", "测试超时，未触发回调");
											}, timeCount * 1000);
											intervalId = setInterval(() => {
												DOMUtils.text(container.$leftText, tipInfoText());
											}, 1000);
											await data.fn({
												title: `测试 ${data.name} 标题`,
												text: `测试 ${data.name} 内容`,
												url: "https://example.com/",
												onclick: (event) => {
													// The userscript is still running, so don't open example.com
													console.log(event);
													isClick = true;
													if (event && typeof event.preventDefault === "function") {
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
										} catch (error: any) {
											Qmsg.error(error.toString(), { consoleLogContent: true });
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
						} finally {
						}
					}),
					UIInfo(() => {
						try {
							let $target: HTMLElement | undefined = undefined;
							let $info: HTMLElement | undefined = undefined;
							let isClick = false;
							let isPrevent = false;
							let isDone = false;
							let beforeContent = "123";
							let afterContent = "456";
							let tag = "notification_tag_" + Date.now();

							let notificationOption: GmNotificationOptions = {
								title: "测试通知的内容更新（tag）",
								text: beforeContent,
								tag: tag,
							};
							let desc = `更新前：${beforeContent}，更新后：${afterContent}`;
							return {
								text: notificationOption.title!,
								description: desc,
								tag: "info",
								afterRender(container) {
									$target = container.target!;
									$info = container.$leftContainer;
									let $button = DOMUtils.parseHTML(
										/*html*/ `
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,
										false,
										false
									);
									let timeId: number | undefined = void 0;
									let intervalId: number | undefined = void 0;
									DOMUtils.on($button, "click", async (event) => {
										try {
											utils.preventEvent(event);
											clearTimeout(timeId);
											clearInterval(intervalId);
											let timeCount = 5;
											let calcTimeCount = timeCount;
											let tipInfoText = () => {
												let result = `${calcTimeCount}s后通知的内容将更新为：${afterContent}`;
												calcTimeCount--;
												return result;
											};
											DOMUtils.text(container.$leftDesc, tipInfoText());
											DOMUtils.show(container.$leftDesc, false);
											timeId = setTimeout(async () => {
												clearInterval(intervalId);
												DOMUtils.text(container.$leftDesc, desc);
												data.fn({
													...notificationOption,
													text: afterContent,
												});
											}, timeCount * 1000);
											intervalId = setInterval(() => {
												DOMUtils.text(container.$leftDesc, tipInfoText());
											}, 1000);
											await data.fn(notificationOption);
										} catch (error: any) {
											Qmsg.error(error.toString(), { consoleLogContent: true });
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
						} finally {
						}
					})
				);
			});
		}
		return result;
	}
}
