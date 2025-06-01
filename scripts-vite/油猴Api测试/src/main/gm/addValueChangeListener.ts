import { GM, GM_addValueChangeListener, GM_setValue } from "ViteGM";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/components/ui-info";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/types/main";
import { CommonUtil } from "@/utils/CommonUtil";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import Qmsg from "qmsg";
import { DOMUtils, utils } from "@/env";
import { Tag, TagUtil } from "@/setting/tag";

export class ApiTest_addValueChangeListener extends ApiAsyncTestBase {
	public isSupport() {
		return typeof GM_addValueChangeListener === "function";
	}
	public getApiName() {
		return "GM_addValueChangeListener";
	}
	public getAsyncApiOption() {
		return {
			name: "GM.addValueChangeListener",
			isSupport:
				this.isSupportGM() && typeof GM.addValueChangeListener === "function",
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
							text: "测试监听数据存储改变",
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
								let timeoutId: undefined | number = void 0;
								let listenerId: undefined | string | number = void 0;
								let tagTextList: {
									tag: keyof typeof Tag;
									text?: string;
								}[] = [];
								DOMUtils.on($button, "click", (event) => {
									utils.preventEvent(event);
									try {
										tagTextList = [];
										clearTimeout(timeoutId);
										TagUtil.setTag(container.$leftText, "info", "等待触发回调");
										DOMUtils.text(container.$leftDesc, this.text);
										DOMUtils.show(container.$leftDesc, false);
										let delaySetValue = utils.formatTime(Date.now());
										listenerId =
											listenerId ??
											GM_addValueChangeListener(
												localStorageDataKey,
												function (key, oldValue, newValue, remote) {
													console.log(arguments);
													clearTimeout(timeoutId);
													tagTextList.push({
														tag: "success",
														text: "支持触发回调",
													});
													if (typeof key !== "string") {
														tagTextList.push({
															tag: "error",
															text: `不支持回调参数key，当前类型：${typeof key}`,
														});
													} else {
														tagTextList.push({
															tag: "success",
															text: `支持回调参数key，当前类型：${typeof key}`,
														});
													}
													if (typeof newValue !== typeof delaySetValue) {
														tagTextList.push({
															tag: "error",
															text: `不支持回调参数newValue，当前类型：${typeof delaySetValue}`,
														});
													} else {
														tagTextList.push({
															tag: "success",
															text: `支持回调参数newValue，当前类型：${typeof delaySetValue}`,
														});
													}
													if (typeof remote !== "boolean") {
														tagTextList.push({
															tag: "error",
															text: `不支持回调参数remote，当前类型：${typeof remote}`,
														});
													} else {
														tagTextList.push({
															tag: "success",
															text: `支持回调参数remote，当前类型：${typeof remote}`,
														});
													}
													TagUtil.setTagList(container.$leftText, tagTextList);
												}
											);
										console.log(
											"GM_addValueChangeListener listenerId：" +
												listenerId +
												" typeof：" +
												typeof listenerId
										);
										if (
											typeof listenerId !== "number" &&
											typeof listenerId !== "string"
										) {
											tagTextList.push({
												tag: "warn",
												text: "listenerId类型不是number或string",
											});
										} else {
											tagTextList.push({
												tag: "success",
												text: "listenerId类型：" + typeof listenerId,
											});
										}
										timeoutId = setTimeout(() => {
											tagTextList.push({
												tag: "error",
												text: "不支持触发回调",
											});
											TagUtil.setTagList(container.$leftText, tagTextList);
										}, 3000);
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
