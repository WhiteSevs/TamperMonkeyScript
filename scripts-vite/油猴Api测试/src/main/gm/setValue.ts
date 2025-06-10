import { GM, GM_setValue } from "ViteGM";
import { ApiTestBase } from "../base/ApiTestBase";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/components/ui-info";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/types/main";
import { DOMUtils, utils } from "@/env";
import { CommonUtil } from "@components/utils/CommonUtil";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import Qmsg from "qmsg";
import { TamperMonkeyUtils } from "@/utils/TamperMonkeyUtils";

export class ApiTest_setValue extends ApiAsyncTestBase {
	public isSupport() {
		return typeof GM_setValue === "function";
	}
	public getApiName() {
		return "GM_setValue";
	}
	public getAsyncApiOption() {
		return {
			name: "GM.setValue",
			isSupport: this.isSupportGM() && typeof GM.setValue === "function",
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
			],
		};
		if (this.isSupport()) {
			((result["forms"][1] as any).forms as PopsPanelFormsTotalDetails[]).push(
				...[
					{
						key: "Test GM_setValue boolean",
						value: true,
						text: function () {
							return `存储boolean类型`;
						},
						desc: function () {
							return `"${this.key}": ${this.value}`;
						},
					},
					{
						key: "Test GM_setValue number",
						value: 1,
						text: function () {
							return `存储number类型`;
						},
						desc: function () {
							return `"${this.key}": ${this.value}`;
						},
					},
					{
						key: "Test GM_setValue string",
						value: "测试字符串",
						text: function () {
							return `存储string类型`;
						},
						desc: function () {
							return `"${this.key}": "${this.value}"`;
						},
					},
					{
						key: "Test GM_setValue undefined",
						value: undefined,
						text: function () {
							return `存储undefined类型`;
						},
						desc: function () {
							return `"${this.key}": ${this.value}`;
						},
					},
					{
						key: "Test GM_setValue null",
						value: null,
						text: function () {
							return `存储object类型的null`;
						},
						desc: function () {
							return `"${this.key}": ${this.value}`;
						},
					},
					{
						key: "Test GM_setValue object",
						value: { "object key": "object value" },
						text: function () {
							return `存储object类型`;
						},
						desc: function () {
							return `"${this.key}": ${JSON.stringify(this.value)}`;
						},
					},
				].map((it) => {
					return (() => {
						let localStorageDataKey = it.key;
						let localStorageDataValue = it.value;
						return UIInfo(() => {
							return {
								text: it.text(),
								description: it.desc(),
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
											GM_setValue(localStorageDataKey, localStorageDataValue);
											Qmsg.info("执行写入完毕，请自行查看是否成功写入");
										} catch (error: any) {
											Qmsg.error(error.toString(), { consoleLogContent: true });
										}
									});
								},
							};
						});
					})();
				})
			);
		}
		return result;
	}
}
