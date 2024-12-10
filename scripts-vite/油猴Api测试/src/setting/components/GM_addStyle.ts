import type {
	PopsPanelContentConfig,
	PopsPanelFormsTotalDetails,
} from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { GM, GM_addStyle } from "ViteGM";
import { CommonUtil } from "@/utils/CommonUtil";
import { UIInfo } from "../common-components/ui-info";
import { DOMUtils } from "@/env";
import { ApiSupportTest } from "@/main/ApiSupportTest";
import { StorageApi } from "@/main/StorageApi";
import { PanelKeyConfig } from "../panel-key-config";

export const PanelUI_GM_addStyle = (): PopsPanelContentConfig => {
	let isSupport = ApiSupportTest.addStyle();
	let isSupportAsync = ApiSupportTest.addStyle_async();

	let result: PopsPanelContentConfig = {
		id: "aside-GM_addStyle",
		title: "GM_addStyle",
		headerTitle: "GM_addStyle & GM.addStyle",
		scrollToDefaultView: true,
		isDefault() {
			return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_addStyle";
		},
		callback(data) {
			StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_addStyle");
		},
		forms: [
			{
				type: "forms",
				text: "函数测试",
				forms: [
					UIInfo(() =>
						isSupport
							? {
									text: "支持 GM_addStyle",
									tag: "success",
							  }
							: {
									text: "不支持 GM_addStyle",
									tag: "error",
							  }
					),
					UIInfo(() =>
						isSupportAsync
							? {
									text: "支持 GM.addStyle",
									tag: "success",
							  }
							: {
									text: "不支持 GM.addStyle",
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
				let $test: null | HTMLElement = null;
				let $testCSS: HTMLStyleElement | null = null;
				try {
					$test = DOMUtils.createElement("div", {
						id: "GM_addStyle",
						innerText: "GM_addStyle test",
					});
					document.body.appendChild($test);
					$testCSS = GM_addStyle(/*css*/ `
                        #GM_addStyle {
                            background-color: rgb(255, 0, 0);
                        }
                    `);
					if ($testCSS == null) {
						return {
							text: "GM_addStyle returns is null",
							tag: "error",
						};
					}
					const computedStyle = window.getComputedStyle($test);
					if (computedStyle.backgroundColor !== "rgb(255, 0, 0)") {
						return {
							text: "GM_addStyle test element background is not rgb(255, 0, 0)",
							tag: "error",
						};
					}
					return {
						text: CommonUtil.escapeHtml("支持添加CSS字符串"),
						tag: "success",
					};
				} catch (error) {
					console.error(error);
					return {
						text: "执行错误 " + error,
						tag: "error",
					};
				} finally {
					$test?.remove();
					$testCSS?.remove();
				}
			})
		);
	}
	return result;
};
