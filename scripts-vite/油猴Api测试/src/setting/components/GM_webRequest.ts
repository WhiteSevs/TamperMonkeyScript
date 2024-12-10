import type {
	PopsPanelContentConfig,
	PopsPanelFormsTotalDetails,
} from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { GM, GM_webRequest } from "ViteGM";
import { UIInfo } from "../common-components/ui-info";
import { CommonUtil } from "@/utils/CommonUtil";
import { ApiSupportTest } from "@/main/ApiSupportTest";
import { StorageApi } from "@/main/StorageApi";
import { PanelKeyConfig } from "../panel-key-config";

export const PanelUI_GM_webRequest = (): PopsPanelContentConfig => {
	let isSupport = ApiSupportTest.webRequest();
	let isSupportAsync = ApiSupportTest.webRequest_async();

	let result: PopsPanelContentConfig = {
		id: "aside-GM_webRequest",
		title: "GM_webRequest",
		headerTitle: "GM_webRequest & GM.webRequest",
		scrollToDefaultView: true,
		isDefault() {
			return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_webRequest";
		},
		callback(data) {
			StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_webRequest");
		},
		forms: [
			{
				type: "forms",
				text: "函数测试",
				forms: [
					UIInfo(() =>
						isSupport
							? {
									text: "支持 GM_webRequest",
									tag: "success",
							  }
							: {
									text: "不支持 GM_webRequest",
									tag: "error",
							  }
					),
					UIInfo(() =>
						isSupportAsync
							? {
									text: "支持 GM.webRequest",
									tag: "success",
							  }
							: {
									text: "不支持 GM.webRequest",
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
