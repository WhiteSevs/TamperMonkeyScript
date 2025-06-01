import { GM, GM_listValues } from "ViteGM";
import { ApiTestBase } from "../base/ApiTestBase";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/components/ui-info";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/types/main";
import { DOMUtils, utils } from "@/env";
import { CommonUtil } from "@/utils/CommonUtil";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import Qmsg from "qmsg";

export class ApiTest_listValues extends ApiAsyncTestBase {
	public isSupport() {
		return typeof GM_listValues === "function";
	}
	public getApiName() {
		return "GM_listValues";
	}
	public getAsyncApiOption() {
		return {
			name: "GM.listValues",
			isSupport: this.isSupportGM() && typeof GM.listValues === "function",
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
				UIInfo(() => {
					return {
						text: "查看存储的所有键名",
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
							DOMUtils.on($button, "click", (event) => {
								utils.preventEvent(event);
								try {
									let data = GM_listValues();
									if (Array.isArray(data)) {
										let isNotTotalStr = data.find(
											(it) => typeof it !== "string"
										);
										if (isNotTotalStr) {
											Qmsg.error("返回值数组中存在非string类型");
										} else {
											alert(JSON.stringify(data, null, 4));
										}
									} else {
										Qmsg.error("返回值不是数组");
									}
								} catch (error: any) {
									Qmsg.error(error.toString(), { consoleLogContent: true });
								}
							});
						},
					};
				})
			);
		}
		return result;
	}
}
