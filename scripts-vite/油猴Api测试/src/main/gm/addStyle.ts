import { GM, GM_addStyle } from "ViteGM";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/components/ui-info";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/types/main";
import { DOMUtils } from "@/env";
import { CommonUtil } from "@/utils/CommonUtil";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";

export class ApiTest_addStyle extends ApiAsyncTestBase {
	public isSupport() {
		return typeof GM_addStyle === "function";
	}
	public getApiName() {
		return "GM_addStyle";
	}
	public getAsyncApiOption() {
		return {
			name: "GM.addStyle",
			isSupport: this.isSupportGM() && typeof GM.addStyle === "function",
		};
	}
	public getUIOption() {
		let apiName = this.getApiName();
		let apiAsyncInfo = this.getAsyncApiOption();
		let result: PopsPanelContentConfig = {
			id: "aside-GM_addStyle" + apiName,
			title: apiName,
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
				UIInfo(() => {
					let $test: null | HTMLElement = null;
					let $testCSS: HTMLStyleElement | null = null;
					try {
						$test = DOMUtils.createElement("div", {
							id: apiName,
							innerText: apiName + " test",
						});
						document.body.appendChild($test);
						$testCSS = GM_addStyle(/*css*/ `
                            #${apiName} {
                                background-color: rgb(255, 0, 0);
                            }
                        `);
						if ($testCSS == null) {
							return {
								text: apiName + " returns is null",
								tag: "error",
							};
						}
						const computedStyle = window.getComputedStyle($test);
						if (computedStyle.backgroundColor !== "rgb(255, 0, 0)") {
							return {
								text:
									apiName + " test element background is not rgb(255, 0, 0)",
								tag: "error",
							};
						}
						return {
							text: CommonUtil.escapeHtml("支持添加CSS字符串并返回元素对象"),
							tag: "success",
						};
					} catch (error) {
						console.error(error);
						return {
							text: "执行错误 " + error,
							tag: "error",
						};
					} finally {
						$test?.remove();
						$testCSS?.remove();
					}
				})
			);
		}
		return result;
	}
}
