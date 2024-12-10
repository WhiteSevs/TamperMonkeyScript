import type {
	PopsPanelContentConfig,
	PopsPanelFormsTotalDetails,
} from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { GM, GM_deleteValues } from "ViteGM";
import { UIInfo } from "../common-components/ui-info";
import { CommonUtil } from "@/utils/CommonUtil";
import { ApiSupportTest } from "@/main/ApiSupportTest";
import { StorageApi } from "@/main/StorageApi";
import { PanelKeyConfig } from "../panel-key-config";

export const PanelUI_GM_deleteValues = (): PopsPanelContentConfig => {
	let isSupport = ApiSupportTest.deleteValues();
	let isSupportAsync = ApiSupportTest.deleteValues_async();

	let result: PopsPanelContentConfig = {
		id: "aside-GM_deleteValues",
		title: "GM_deleteValues",
		headerTitle: "GM_deleteValues & GM.deleteValues",
		scrollToDefaultView: true,
		isDefault() {
			return (
				StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_deleteValues"
			);
		},
		callback(data) {
			StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_deleteValues");
		},
		forms: [
			{
				type: "forms",
				text: "函数测试",
				forms: [
					UIInfo(() =>
						isSupport
							? {
									text: "支持 GM_deleteValues",
									tag: "success",
							  }
							: {
									text: "不支持 GM_deleteValues",
									tag: "error",
							  }
					),
					UIInfo(() =>
						isSupportAsync
							? {
									text: "支持 GM.deleteValues",
									tag: "success",
							  }
							: {
									text: "不支持 GM.deleteValues",
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
