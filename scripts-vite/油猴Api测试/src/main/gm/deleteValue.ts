import { GM, GM_deleteValue } from "ViteGM";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/common-components/ui-info";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/types/main";
import { CommonUtil } from "@/utils/CommonUtil";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";

export class ApiTest_deleteValue extends ApiAsyncTestBase {
	public isSupport() {
		return typeof GM_deleteValue === "function";
	}
	public getApiName() {
		return "GM_deleteValue";
	}
	public getAsyncApiOption() {
		return {
			name: "GM.deleteValue",
			isSupport: this.isSupportGM() && typeof GM.deleteValue === "function",
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
						UIInfo(() =>
							apiAsyncInfo.name
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
