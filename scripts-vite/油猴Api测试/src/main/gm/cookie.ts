import { GM, GM_cookie } from "ViteGM";
import { ApiTestBase } from "../ApiTestBase";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/common-components/ui-info";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/types/main";
import { DOMUtils } from "@/env";
import { CommonUtil } from "@/utils/CommonUtil";

export class ApiTest_cookie extends ApiTestBase {
	public isSupport() {
		return typeof GM_cookie === "function";
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
		let apiAsyncInfo = this.getAsyncApiOption();

		let result: PopsPanelContentConfig = {
			id: "aside-" + apiName,
			title: "" + apiName,
			headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
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
			((result["forms"][1] as any).forms as PopsPanelFormsTotalDetails[]).push(
				UIInfo(() => {
					try {
						return {
							text: CommonUtil.escapeHtml("TODO"),
							tag: "info",
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
