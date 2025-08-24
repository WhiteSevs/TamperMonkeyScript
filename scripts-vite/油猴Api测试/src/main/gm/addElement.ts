import { GM, GM_addElement } from "ViteGM";
import type {
	PopsPanelContentConfig,
	PopsPanelFormsTotalDetails,
} from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo, type UIInfoResultConfig } from "@/setting/components/ui-info";
import { CommonUtil } from "@components/utils/CommonUtil";
import { GlobalUtil } from "../GlobalUtil";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import { TamperMonkeyUtils } from "@/utils/TamperMonkeyUtils";
import type { PopsPanelFormsDetails } from "@whitesev/pops/dist/types/src/components/panel/types/components-forms";

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
			headerTitle: `${TamperMonkeyUtils.getApiDocUrl(apiName, `${apiName} & ${apiAsyncInfo.name}`)}`,
			scrollToDefaultView: true,
			isDefault() {
				return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
			},
			clickCallback(data) {
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
				{
					type: "forms",
					text: "功能测试（异步）",
					forms: [],
				},
			],
		};
		if (this.isSupport()) {
			[
				{
					name: apiName,
					fn: async (...args: any[]) => {
						return new Promise<any>((resolve) => {
							let fnResult = Reflect.apply(GM_addElement, this, args);
							resolve(fnResult);
						});
					},
					formList: (<PopsPanelFormsDetails>result["forms"][1]).forms,
				},
				{
					name: apiAsyncInfo.name,
					fn: GM.addElement,
					formList: (<PopsPanelFormsDetails>result["forms"][2]).forms,
				},
			].forEach((data) => {
				let apiNameTag = data.name.replace(".", "__async__");

				data.formList.push(
					UIInfo(async () => {
						let $script: HTMLScriptElement | null = null;
						let $script_page: HTMLScriptElement | null = null;

						let win = GlobalUtil.getWindow();
						let el_script_id = apiNameTag + "_test_script_exec";
						let winPropName = `${el_script_id}_test_str`;
						try {
							$script = await data.fn("script", {
								id: el_script_id,
								textContent: `window["${winPropName}"] = "bar";`,
							});

							$script_page = document.querySelector<HTMLScriptElement>("#" + el_script_id);
							if ($script == null) {
								return {
									text: `${data.name} returns is null`,
									tag: "error",
								};
							}
							if (!($script instanceof HTMLElement)) {
								return {
									text: `${data.name} returns is not style element`,
									tag: "error",
								};
							}
							if (typeof win[winPropName] !== "string") {
								return {
									text: `${data.name} script element is not work`,
									tag: "error",
								};
							}
							Reflect.deleteProperty(win, winPropName);

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
							if ($script_page) {
								($script_page as HTMLScriptElement).remove();
							}
						}
					}),
					UIInfo(async () => {
						let $el_div: HTMLElement | null = null;
						let $el_page: HTMLElement | null = null;
						let el_id = apiNameTag + "_test2";

						try {
							$el_div = await data.fn(document.body, "div", {
								"data-src": "https://example.com/image.png",
								id: el_id,
							});
							if ($el_div == null) {
								return {
									text: data.name + " returns is null",
									tag: "error",
								};
							}
							if (!($el_div instanceof HTMLElement)) {
								return {
									text: data.name + " returns is not style element",
									tag: "error",
								};
							}
							$el_page = document.querySelector<HTMLElement>("#" + el_id);
							if (!$el_page) {
								return {
									text: "不支持3个参数",
									tag: "error",
								};
							}
							const shadowRoot = $el_page.attachShadow({
								mode: "closed",
							});
							await data.fn(shadowRoot, "style", {
								textContent: "div { color: black; };",
							});
							if (!shadowRoot.querySelector("style")) {
								return {
									text: "不支持3个参数的shadowRoot",
									tag: "error",
								};
							}
							if ($el_div == null) {
								return {
									text: "传入3个参数但是返回为空",
									tag: "error",
								};
							}
							if (!$el_page.hasAttribute("data-src")) {
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
							if ($el_page) {
								($el_page as HTMLElement).remove();
							}
						}
					})
				);
			});
		}
		return result;
	}
}
