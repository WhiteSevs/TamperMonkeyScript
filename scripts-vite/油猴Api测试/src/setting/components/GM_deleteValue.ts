import type {
	PopsPanelContentConfig,
	PopsPanelFormsTotalDetails,
} from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { GM, GM_deleteValue } from "ViteGM";
import { UIInfo } from "../common-components/ui-info";
import { CommonUtil } from "@/utils/CommonUtil";
import { ApiSupportTest } from "@/main/ApiSupportTest";
import { PanelKeyConfig } from "../panel-key-config";
import { StorageApi } from "@/main/StorageApi";

export const PanelUI_GM_deleteValue = (): PopsPanelContentConfig => {
	let isSupport = ApiSupportTest.deleteValue();
	let isSupportAsync = ApiSupportTest.deleteValue_async();

	let result: PopsPanelContentConfig = {
		id: "aside-GM_deleteValue",
		title: "GM_deleteValue",
		headerTitle: "GM_deleteValue & GM.deleteValue",
		scrollToDefaultView: true,
		isDefault() {
			return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_deleteValue";
		},
		callback(data) {
			StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_deleteValue");
		},
		forms: [
			{
				type: "forms",
				text: "函数测试",
				forms: [
					UIInfo(() =>
						isSupport
							? {
									text: "支持 GM_deleteValue",
									tag: "success",
							  }
							: {
									text: "不支持 GM_deleteValue",
									tag: "error",
							  }
					),
					UIInfo(() =>
						isSupportAsync
							? {
									text: "支持 GM.deleteValue",
									tag: "success",
							  }
							: {
									text: "不支持 GM.deleteValue",
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
