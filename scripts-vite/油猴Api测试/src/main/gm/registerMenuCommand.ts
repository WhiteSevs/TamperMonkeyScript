import { GM, GM_registerMenuCommand } from "ViteGM";
import { ApiTestBase } from "../base/ApiTestBase";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/components/ui-info";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/types/main";
import { DOMUtils, setTimeoutLog, utils } from "@/env";
import { CommonUtil } from "@components/utils/CommonUtil";
import { TagUtil, type TagName } from "@/setting/tag";
import Qmsg from "qmsg";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import { TamperMonkeyUtils } from "@/utils/TamperMonkeyUtils";

export class ApiTest_registerMenuCommand extends ApiAsyncTestBase {
	public isSupport() {
		return typeof GM_registerMenuCommand === "function";
	}
	public getApiName() {
		return "GM_registerMenuCommand";
	}
	public getAsyncApiOption() {
		return {
			name: "GM.registerMenuCommand",
			isSupport:
				this.isSupportGM() && typeof GM.registerMenuCommand === "function",
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
				UIInfo(() => {
					try {
						return {
							text: "注册菜单 ==> Test Menu",
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
								let timeId: number;
								let intervalId: number;
								DOMUtils.on($button, "click", (event) => {
									try {
										utils.preventEvent(event);
										clearTimeout(timeId);
										clearInterval(intervalId);
										DOMUtils.text(container.$leftDesc, this.text);
										DOMUtils.show(container.$leftDesc, false);

										let intervalCheckCount = 10;
										let setCheckText = () => {
											let result = `已执行注册菜单，请在${intervalCheckCount}s内点击菜单项`;
											intervalCheckCount--;
											return result;
										};
										TagUtil.setTag(container.$leftText, "info", setCheckText());
										intervalId = setInterval(() => {
											TagUtil.setTag(
												container.$leftText,
												"info",
												setCheckText()
											);
										}, 1000);
										timeId = setTimeoutLog(() => {
											clearInterval(intervalId);
											TagUtil.setTag(
												container.$leftText,
												"error",
												"测试超时，未触发回调"
											);
										}, 10 * 1000);

										const menuCommandId = GM_registerMenuCommand(
											"Test Menu",
											(event) => {
												try {
													clearInterval(intervalId);
													clearTimeout(timeId);
													TagUtil.clearTag(container.$leftText);
													let checkResultText: {
														tag: TagName;
														text: string;
													}[] = [];
													checkResultText.push({
														tag: "success",
														text: "支持注册菜单",
													});
													if (event) {
														checkResultText.push({
															tag: "success",
															text: "支持点击回调且有event参数",
														});
													} else {
														checkResultText.push({
															tag: "warn",
															text: "支持点击回调但是没有event参数",
														});
													}
													if (
														typeof menuCommandId === "number" ||
														typeof menuCommandId === "string"
													) {
														checkResultText.push({
															tag: "success",
															text: "函数返回值是string|number",
														});
													} else {
														checkResultText.push({
															tag: "error",
															text:
																"函数返回值不是string|number：" +
																typeof menuCommandId,
														});
													}
													DOMUtils.html(
														container.$leftText,
														checkResultText
															.map(
																(it) => `<p class="${it.tag}">${it.text}</p>`
															)
															.join("\n")
													);
												} catch (error: any) {
													Qmsg.error(error.toString(), {
														consoleLogContent: true,
													});
												}
											}
										);
									} catch (error: any) {
										Qmsg.error(error.toString(), { consoleLogContent: true });
									}
								});
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
							text: "注册并更新菜单 ==> Test Update Menu",
							description:
								"请自行验证是否成功更新菜单文字为：Test Update Menu Success!!!",
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
								let timeId: number;
								DOMUtils.on($button, "click", (event) => {
									try {
										utils.preventEvent(event);
										clearTimeout(timeId);

										const menuCommandId = GM_registerMenuCommand(
											"Test Update Menu",
											(event) => {}
										);
										Qmsg.info("已注册菜单，3s后自动更新", {
											timeout: 3000,
										});
										clearTimeout(timeId);
										timeId = setTimeoutLog(() => {
											GM_registerMenuCommand(
												"Test Update Menu Success!!!",
												() => {},
												{
													id: menuCommandId,
												}
											);
											Qmsg.success("已执行更新菜单命令，请自行验证");
										}, 3000);
									} catch (error: any) {
										Qmsg.error(error.toString(), { consoleLogContent: true });
									}
								});
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
