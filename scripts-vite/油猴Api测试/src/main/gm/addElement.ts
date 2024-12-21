import { GM, GM_addElement } from "ViteGM";
import type {
	PopsPanelContentConfig,
	PopsPanelFormsTotalDetails,
} from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/common-components/ui-info";
import { CommonUtil } from "@/utils/CommonUtil";
import { GlobalUtil } from "../GlobalUtil";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";

export class ApiTest_addElement extends ApiAsyncTestBase {
	public getApiName() {
		return "GM_addElement";
	}
	public getAsyncApiOption() {
		return {
			name: "GM.addElement",
			isSupport: this.isSupportGM() && typeof GM.addElement === "function",
		};
	}
	public isSupport() {
		return typeof GM_addElement === "function";
	}
	public getUIOption() {
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
					let $test: HTMLElement | null = null;
					let $page_test: HTMLElement | null = null;
					try {
						let win = GlobalUtil.getWindow();
						let element_id = "GM_addElement_test_script_exec";
						$test = GM_addElement("script", {
							id: element_id,
							textContent: 'window.GM_addElement_test_str = "bar";',
						});
						$page_test = document.querySelector<HTMLElement>("#" + element_id);
						if ($test == null) {
							return {
								text: "GM_addElement is not retrun element",
								tag: "error",
							};
						}
						if (typeof win["GM_addElement_test_str"] !== "string") {
							return {
								text: "GM_addElement script element is not work",
								tag: "error",
							};
						}
						Reflect.deleteProperty(win, "GM_addElement_test_str");

						return {
							text: CommonUtil.escapeHtml("支持添加<script>元素且执行js"),
							tag: "success",
						};
					} catch (error) {
						console.error(error);
						return {
							text: "执行错误 " + error,
							tag: "error",
						};
					} finally {
						$page_test?.remove();
					}
				}),
				UIInfo(() => {
					let $test: HTMLElement | null = null;
					let $page_test: HTMLElement | null = null;
					try {
						let element_id = "GM_addElement_test2";
						$test = GM_addElement(document.body, "div", {
							// @ts-ignore
							"data-src": "https://example.com/image.png",
							id: element_id,
						});
						$page_test = document.querySelector<HTMLElement>("#" + element_id);
						if (!$page_test) {
							return {
								text: "不支持3个参数",
								tag: "error",
							};
						}
						const shadowRoot = $page_test.attachShadow({ mode: "closed" });
						GM_addElement(shadowRoot, "style", {
							textContent: "div { color: black; };",
						});
						if (!shadowRoot.querySelector("style")) {
							return {
								text: "不支持3个参数的shadowRoot",
								tag: "error",
							};
						}
						if ($test == null) {
							return {
								text: "传入3个参数但是返回为空",
								tag: "error",
							};
						}
						if (!$page_test.hasAttribute("data-src")) {
							return {
								text: "不支持设置自定义属性data-src",
								tag: "error",
							};
						}
						return {
							text: "支持3个参数并返回元素对象",
							tag: "success",
						};
					} catch (error) {
						console.error(error);
						return {
							text: "执行错误 " + error,
							tag: "error",
						};
					} finally {
						$page_test?.remove();
					}
				})
			);
		}
		return result;
	}
}
