import { GM, GM_getResourceURL } from "ViteGM";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/components/ui-info";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/types/main";
import { CommonUtil } from "@components/utils/CommonUtil";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import { TamperMonkeyUtils } from "@/utils/TamperMonkeyUtils";
import type { PopsPanelFormsDetails } from "@whitesev/pops/dist/types/src/components/panel/formsType";

export class ApiTest_getResourceUrl extends ApiAsyncTestBase {
	public isSupport() {
		return typeof GM_getResourceURL === "function";
	}
	public getApiName() {
		return "GM_getResourceURL";
	}
	public getAsyncApiOption() {
		return {
			name: "GM.getResourceUrl",
			isSupport: this.isSupportGM() && typeof GM.getResourceUrl === "function",
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
					fn: async (...args: any[]) => {
						return new Promise<string>((resolve) => {
							let fnResult = Reflect.apply(GM_getResourceURL, this, args);
							resolve(fnResult);
						});
					},
					formList: (<PopsPanelFormsDetails>result["forms"][1]).forms,
				},
				{
					name: apiAsyncInfo.name,
					fn: GM.getResourceUrl,
					formList: (<PopsPanelFormsDetails>result["forms"][2]).forms,
				},
			].forEach((data) => {
				let apiNameTag = data.name.replace(".", "__async__");
				data.formList.push(
					UIInfo(async () => {
						try {
							let resourceBase64Data = await data.fn("ViewerCSS");
							if (typeof resourceBase64Data !== "string") {
								return {
									text: CommonUtil.escapeHtml(
										`${data.name} return is not string`
									),
									tag: "error",
								};
							}
							resourceBase64Data = resourceBase64Data.trim();
							if (resourceBase64Data.startsWith("data:text/css;base64")) {
								if (
									resourceBase64Data.startsWith(
										"data:text/css;base64,LyohCiAqIFZpZXdlci5qcyB2MS4xMS43CiAqIGh0dHBzOi8vZmVuZ3"
									)
								) {
									return {
										text: CommonUtil.escapeHtml(
											"支持通过@resource引用资源并进行base64编码"
										),
										tag: "success",
									};
								} else {
									return {
										text: CommonUtil.escapeHtml(
											"支持通过@resource引用资源并进行base64编码，但是base64编码的实现方式不同"
										),
										tag: "warn",
									};
								}
							} else {
								return {
									text: CommonUtil.escapeHtml(
										"支持通过@resource引用资源，但是未对资源进行base64编码"
									),
									tag: "warn",
								};
							}
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
