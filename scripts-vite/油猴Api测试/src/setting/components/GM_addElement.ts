import type {
	PopsPanelContentConfig,
	PopsPanelFormsTotalDetails,
} from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { GM, GM_addElement, unsafeWindow } from "ViteGM";
import { UIInfo, type UIInfoResultConfig } from "../common-components/ui-info";
import { CommonUtil } from "@/utils/CommonUtil";
import { ApiSupportTest } from "@/main/ApiSupportTest";
import { StorageApi } from "@/main/StorageApi";
import { PanelKeyConfig } from "../panel-key-config";

export const PanelUI_GM_addElement = (): PopsPanelContentConfig => {
	let isSupport = ApiSupportTest.addElement();
	let isSupportAsync = ApiSupportTest.addElement_async();

	let result: PopsPanelContentConfig = {
		id: "aside-GM_addElement",
		title: "GM_addElement",
		headerTitle: "GM_addElement & GM.addElement",
		scrollToDefaultView: true,
		isDefault() {
			return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_addElement";
		},
		callback(data) {
			StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_addElement");
		},
		forms: [
			{
				type: "forms",
				text: "函数测试",
				forms: [
					UIInfo(() =>
						isSupport
							? {
									text: "支持 GM_addElement",
									tag: "success",
							  }
							: {
									text: "不支持 GM_addElement",
									tag: "error",
							  }
					),
					UIInfo(() =>
						isSupportAsync
							? {
									text: "支持 GM.addElement",
									tag: "success",
							  }
							: {
									text: "不支持 GM.addElement",
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
	if (isSupport) {
		((result["forms"][1] as any).forms as PopsPanelFormsTotalDetails[]).push(
			UIInfo(() => {
				let $test: HTMLElement | null = null;
				let $page_test: HTMLElement | null = null;
				try {
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
					// @ts-ignore
					if (typeof unsafeWindow["GM_addElement_test_str"] !== "string") {
						return {
							text: "GM_addElement script element is not work",
							tag: "error",
						};
					}
					Reflect.deleteProperty(unsafeWindow, "GM_addElement_test_str");

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
};
