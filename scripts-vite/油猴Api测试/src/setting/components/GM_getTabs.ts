import type {
	PopsPanelContentConfig,
	PopsPanelFormsTotalDetails,
} from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { GM, GM_getTabs } from "ViteGM";
import { UIInfo } from "../common-components/ui-info";
import { CommonUtil } from "@/utils/CommonUtil";
import { ApiSupportTest } from "@/main/ApiSupportTest";
import { PanelKeyConfig } from "../panel-key-config";
import { StorageApi } from "@/main/StorageApi";

export const PanelUI_GM_getTabs = (): PopsPanelContentConfig => {
	let isSupport = ApiSupportTest.getTabs();
	let isSupportAsync = ApiSupportTest.getTabs_async();

	let result: PopsPanelContentConfig = {
		id: "aside-GM_getTabs",
		title: "GM_getTabs",
		headerTitle: "GM_getTabs & GM.getTabs",
		scrollToDefaultView: true,
		isDefault() {
			return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_getTabs";
		},
		callback(data) {
			StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_getTabs");
		},
		forms: [
			{
				type: "forms",
				text: "函数测试",
				forms: [
					UIInfo(() =>
						isSupport
							? {
									text: "支持 GM_getTabs",
									tag: "success",
							  }
							: {
									text: "不支持 GM_getTabs",
									tag: "error",
							  }
					),
					UIInfo(() =>
						isSupportAsync
							? {
									text: "支持 GM.getTabs",
									tag: "success",
							  }
							: {
									text: "不支持 GM.getTabs",
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
