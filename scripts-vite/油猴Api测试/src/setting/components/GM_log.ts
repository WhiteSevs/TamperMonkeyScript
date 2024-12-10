import type {
	PopsPanelContentConfig,
	PopsPanelFormsTotalDetails,
} from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { GM, GM_log } from "ViteGM";
import { UIInfo } from "../common-components/ui-info";
import { CommonUtil } from "@/utils/CommonUtil";
import { ApiSupportTest } from "@/main/ApiSupportTest";
import { DOMUtils } from "@/env";
import { StorageApi } from "@/main/StorageApi";
import { PanelKeyConfig } from "../panel-key-config";

export const PanelUI_GM_log = (): PopsPanelContentConfig => {
	let isSupport = ApiSupportTest.log();
	let isSupportAsync = ApiSupportTest.log_async();

	let result: PopsPanelContentConfig = {
		id: "aside-GM_log",
		title: "GM_log",
		headerTitle: "GM_log & GM.log",
		scrollToDefaultView: true,
		isDefault() {
			return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_log";
		},
		callback(data) {
			StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_log");
		},
		forms: [
			{
				type: "forms",
				text: "函数测试",
				forms: [
					UIInfo(() =>
						isSupport
							? {
									text: "支持 GM_log",
									tag: "success",
							  }
							: {
									text: "不支持 GM_log",
									tag: "error",
							  }
					),
					UIInfo(() =>
						isSupportAsync
							? {
									text: "支持 GM.log",
									tag: "success",
							  }
							: {
									text: "不支持 GM.log",
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
};
