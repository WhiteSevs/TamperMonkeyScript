import { GM, GM_log } from "ViteGM";
import { ApiTestBase } from "../ApiTestBase";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/common-components/ui-info";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/types/main";
import { DOMUtils, utils } from "@/env";
import { CommonUtil } from "@/utils/CommonUtil";

export class ApiTest_log extends ApiTestBase {
	public isSupport() {
		return typeof GM_log === "function";
	}
	public getApiName() {
		return "GM_log";
	}
	public getAsyncApiOption() {
		return {
			name: "GM.log",
			isSupport: this.isSupportGM() && typeof GM.log === "function",
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
						let logText = "test GM_log";
						return {
							text: CommonUtil.escapeHtml("请在控制台查看输出：" + logText),
							tag: "info",
							afterRender(container) {
								let $info =
									container.target!.querySelector<HTMLElement>(
										".support-info"
									)!;
								let $button = DOMUtils.parseHTML(
									/*html*/ `
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
								`,
									false,
									false
								);
								DOMUtils.on($button, "click", (event) => {
									utils.preventEvent(event);
									GM_log(logText);
								});
								DOMUtils.after($info!, $button);
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
