import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { ApiTestBase } from "../base/ApiTestBase";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/common-components/ui-info";

export class GrantTest_onurlchange extends ApiTestBase {
	public getApiName() {
		return "window.onurlchange ";
	}
	getAsyncApiOption() {
		return void 0;
	}
	public isSupport() {
		return true;
	}
	public getUIOption() {
		let apiName = this.getApiName();
		let result: PopsPanelContentConfig = {
			id: "aside-" + apiName,
			title: "" + apiName,
			headerTitle: `${apiName}`,
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
					text: "功能测试",
					forms: [
						UIInfo(() => {
							return {
								text: "TODO",
								tag: "info",
								afterRender(container) {},
							};
						}),
					],
				},
			],
		};

		return result;
	}
}
