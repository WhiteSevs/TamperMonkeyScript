import { GM, GM_addStyle } from "ViteGM";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/components/ui-info";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/types/main";
import { DOMUtils } from "@/env";
import { CommonUtil } from "@components/utils/CommonUtil";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import { TamperMonkeyUtils } from "@/utils/TamperMonkeyUtils";
import type { PopsPanelFormsDetails } from "@whitesev/pops/dist/types/src/components/panel/types/components-forms";

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
					fn: async (...args: any[]) => {
						return new Promise<HTMLStyleElement>((resolve) => {
							let fnResult = Reflect.apply(GM_addStyle, this, args);
							resolve(fnResult);
						});
					},
					formList: (<PopsPanelFormsDetails>result["forms"][1]).forms,
				},
				{
					name: apiAsyncInfo.name,
					fn: GM.addStyle,
					formList: (<PopsPanelFormsDetails>result["forms"][2]).forms,
				},
			].forEach((data) => {
				let apiNameTag = data.name.replace(".", "__async__");

				data.formList.push(
					UIInfo(async () => {
						let $test: null | HTMLElement = null;
						let $testCSS: HTMLStyleElement | null = null;
						try {
							$test = DOMUtils.createElement("div", {
								id: apiNameTag,
								innerText: apiNameTag + " test",
							});
							document.body.appendChild($test);
							$testCSS = await data.fn(/*css*/ `
							#${apiNameTag} {
								background-color: rgb(255, 0, 0);
							}
						`);
							if ($testCSS == null) {
								return {
									text: `${data.name} returns is null`,
									tag: "error",
								};
							}
							if (!($testCSS instanceof HTMLStyleElement)) {
								return {
									text: `${data.name} returns is not HTMLStyleElement`,
									tag: "error",
								};
							}
							const computedStyle = window.getComputedStyle($test);
							if (computedStyle.backgroundColor !== "rgb(255, 0, 0)") {
								return {
									text: `${data.name} test element background is not rgb(255, 0, 0)`,
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
			});
		}
		return result;
	}
}
