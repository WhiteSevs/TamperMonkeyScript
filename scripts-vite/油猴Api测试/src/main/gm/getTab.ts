import { GM, GM_getTab } from "ViteGM";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/components/ui-info";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/types/main";
import { CommonUtil } from "@components/utils/CommonUtil";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import { DOMUtils, setTimeoutLog, utils } from "@/env";
import Qmsg from "qmsg";
import { TagUtil } from "@/setting/tag";
import { TamperMonkeyUtils } from "@/utils/TamperMonkeyUtils";
import type { PopsPanelFormsDetails } from "@whitesev/pops/dist/types/src/components/panel/types/components-forms";

export class ApiTest_getTab extends ApiAsyncTestBase {
	public isSupport() {
		return typeof GM_getTab === "function";
	}
	public getApiName() {
		return "GM_getTab";
	}
	public getAsyncApiOption() {
		return {
			name: "GM.getTab",
			isSupport: this.isSupportGM() && typeof GM.getTab === "function",
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
					fn: async () => {
						return new Promise<any>((resolve) => {
							GM_getTab((...args: any[]) => {
								// @ts-ignore
								resolve(...args);
							});
						});
					},
					formList: (<PopsPanelFormsDetails>result["forms"][1]).forms,
				},
				{
					name: apiAsyncInfo.name,
					fn: GM.getTab,
					formList: (<PopsPanelFormsDetails>result["forms"][2]).forms,
				},
			].forEach((data) => {
				let apiNameTag = data.name.replace(".", "__async__");

				data.formList.push(
					UIInfo(() => {
						return {
							text: "测试获取当前Tab",
							description: "",
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
								DOMUtils.on($button, "click", async (event) => {
									utils.preventEvent(event);
									try {
										clearTimeout(timeId);
										TagUtil.setTag(
											container.$leftText,
											"error",
											"等待3s内触发回调函数"
										);
										timeId = setTimeoutLog(() => {
											TagUtil.setTag(
												container.$leftText,
												"error",
												"超时，不支持触发回调函数"
											);
										}, 3000);
										let tab = await data.fn();
										clearTimeout(timeId);
										console.log(data.name + " callback tab", tab);
										if (typeof tab === "object" && tab != null) {
											TagUtil.setTagList(container.$leftText, [
												{
													tag: "success",
													text: "支持触发回调函数",
												},
												{
													tag: "success",
													text: "入参tab为object类型",
												},
											]);
										} else {
											TagUtil.setTagList(container.$leftText, [
												{
													tag: "success",
													text: "支持触发回调函数",
												},
												{
													tag: "error",
													text: "入参tab不为object类型",
												},
											]);
										}
										alert(JSON.stringify(tab));
									} catch (error: any) {
										Qmsg.error(error.toString(), { consoleLogContent: true });
									}
								});
							},
						};
					})
				);
			});
		}
		return result;
	}
}
