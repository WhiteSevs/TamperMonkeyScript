import { GM, GM_setClipboard } from "ViteGM";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/common-components/ui-info";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/types/main";
import { DOMUtils, setTimeoutLog, utils } from "@/env";
import { TagUtil } from "@/setting/tag";
import Qmsg from "qmsg";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";

export class ApiTest_setClipboard extends ApiAsyncTestBase {
	public isSupport() {
		return typeof GM_setClipboard === "function";
	}
	public getApiName() {
		return "GM_setClipboard";
	}
	public getAsyncApiOption() {
		return {
			name: "GM.setClipboard",
			isSupport: this.isSupportGM() && typeof GM.setClipboard === "function",
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
					return {
						text: "复制内容到剪贴板：Test GM_setClipboard",
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
							let timeId: number;
							DOMUtils.on($button, "click", (event) => {
								try {
									utils.preventEvent(event);
									clearTimeout(timeId);
									Qmsg.info("等待3s内触发成功复制的回调");
									timeId = setTimeoutLog(() => {
										TagUtil.setTag(
											container.$leftText,
											"error",
											"不支持触发回调函数"
										);
									}, 3000);
									GM_setClipboard("Test GM_setClipboard", "text", () => {
										clearTimeout(timeId);
										TagUtil.setTag(
											container.$leftText,
											"success",
											"支持触发回调函数"
										);
									});
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
