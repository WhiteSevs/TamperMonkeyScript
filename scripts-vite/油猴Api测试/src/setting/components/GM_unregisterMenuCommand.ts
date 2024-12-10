import type {
	PopsPanelContentConfig,
	PopsPanelFormsTotalDetails,
} from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { GM, GM_unregisterMenuCommand } from "ViteGM";
import { UIInfo } from "../common-components/ui-info";
import { CommonUtil } from "@/utils/CommonUtil";
import { ApiSupportTest } from "@/main/ApiSupportTest";
import { StorageApi } from "@/main/StorageApi";
import { PanelKeyConfig } from "../panel-key-config";

export const PanelUI_GM_unregisterMenuCommand = (): PopsPanelContentConfig => {
	let isSupport = ApiSupportTest.unregisterMenuCommand();
	let isSupportAsync = ApiSupportTest.unregisterMenuCommand_async();

	let result: PopsPanelContentConfig = {
		id: "aside-GM_unregisterMenuCommand",
		title: "GM_unregisterMenuCommand",
		headerTitle: "GM_unregisterMenuCommand & GM.unregisterMenuCommand",
		scrollToDefaultView: true,
		isDefault() {
			return (
				StorageApi.get(PanelKeyConfig.asideLastVisit) ===
				"GM_unregisterMenuCommand"
			);
		},
		callback(data) {
			StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_unregisterMenuCommand");
		},
		forms: [
			{
				type: "forms",
				text: "函数测试",
				forms: [
					UIInfo(() =>
						isSupport
							? {
									text: "支持 GM_unregisterMenuCommand",
									tag: "success",
							  }
							: {
									text: "不支持 GM_unregisterMenuCommand",
									tag: "error",
							  }
					),
					UIInfo(() =>
						isSupportAsync
							? {
									text: "支持 GM.unregisterMenuCommand",
									tag: "success",
							  }
							: {
									text: "不支持 GM.unregisterMenuCommand",
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
		// ((result["forms"][1] as any).forms as PopsPanelFormsTotalDetails[]).push(
		// 	UIInfo(() => {
		// 		try {
		// 			return {
		// 				text: CommonUtil.escapeHtml("支持"),
		// 				tag: "success",
		// 			};
		// 		} catch (error) {
		// 			console.error(error);
		// 			return {
		// 				text: "执行错误 " + error,
		// 				tag: "error",
		// 			};
		// 		} finally {
		// 		}
		// 	})
		// );
	}
	return result;
};
