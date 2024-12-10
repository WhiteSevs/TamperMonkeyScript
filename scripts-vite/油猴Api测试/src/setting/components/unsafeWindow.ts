import { DOMUtils } from "@/env";
import type {
	PopsPanelContentConfig,
	PopsPanelFormsTotalDetails,
} from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UIButton } from "../common-components/ui-button";
import { monkeyWindow, unsafeWindow } from "ViteGM";
import { Tag } from "../tag";
import { UIInfo } from "../common-components/ui-info";
import { ApiSupportTest } from "@/main/ApiSupportTest";
import { StorageApi } from "@/main/StorageApi";
import { PanelKeyConfig } from "../panel-key-config";

export const PanelUI_unsafeWindow = (): PopsPanelContentConfig => {
	let isSupport = ApiSupportTest.unsafeWindow();

	let result: PopsPanelContentConfig = {
		id: "aside-unsafewindow",
		title: "unsafeWindow",
		scrollToDefaultView: true,
		isDefault() {
			return StorageApi.get(PanelKeyConfig.asideLastVisit) === "unsafewindow";
		},
		callback(data) {
			StorageApi.set(PanelKeyConfig.asideLastVisit, "unsafewindow");
		},
		forms: [
			{
				type: "forms",
				text: "函数测试",
				forms: [
					UIInfo(() =>
						isSupport
							? {
									text: "支持 unsafewindow",
									tag: "success",
							  }
							: {
									text: "不支持 unsafewindow",
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
				let key = "test-gm-window";
				let flag = monkeyWindow == unsafeWindow;
				// @ts-ignore
				monkeyWindow[key] = key;
				// @ts-ignore
				flag = typeof unsafeWindow[key] !== "string";
				Reflect.deleteProperty(monkeyWindow, key);
				if (flag) {
					return {
						text: "window是ProxyWindow",
						tag: "success",
					};
				} else {
					return {
						text: "window不是ProxyWindow，全局变量会覆盖页面",
						tag: "warn",
					};
				}
			})
		);
	}
	return result;
};
