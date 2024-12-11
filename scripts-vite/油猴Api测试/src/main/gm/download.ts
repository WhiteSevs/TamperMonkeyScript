import { GM, GM_download } from "ViteGM";
import { ApiTestBase } from "../ApiTestBase";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/common-components/ui-info";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/types/main";
import { DOMUtils } from "@/env";
import { CommonUtil } from "@/utils/CommonUtil";

export class ApiTest_download extends ApiTestBase {
	public isSupport(): boolean {
		return typeof GM_download === "function";
	}
	public getApiName() {
		return "GM_download";
	}
	public getAsyncApiOption(): { name: string; isSupport: boolean } {
		return {
			name: "GM.download",
			isSupport: this.isSupportGM() && typeof GM.download === "function",
		};
	}
	public getUIOption() {
		const that = this;
		let apiName = this.getApiName();
		let apiAsyncInfo = this.getAsyncApiOption();

		let result: PopsPanelContentConfig = {
			id: "aside-" + apiName,
			title: apiName,
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
					return {
						text: CommonUtil.escapeHtml("TODO..."),
						tag: "info",
						afterRender(container) {
							let $info =
								container.target?.querySelector<HTMLElement>(".support-info")!;
							try {
							} catch (error) {
								console.error(error);
								DOMUtils.text($info, "执行错误 " + error);
							} finally {
							}
						},
					};
				})
			);
		}
		return result;
	}
}
