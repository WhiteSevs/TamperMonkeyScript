import type {
	PopsPanelContentConfig,
	PopsPanelFormsTotalDetails,
} from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { GM, GM_setValue } from "ViteGM";
import { UIInfo } from "../common-components/ui-info";
import { CommonUtil } from "@/utils/CommonUtil";
import { ApiSupportTest } from "@/main/ApiSupportTest";
import { StorageApi } from "@/main/StorageApi";
import { PanelKeyConfig } from "../panel-key-config";

export const PanelUI_GM_setValue = (): PopsPanelContentConfig => {
	let isSupport = ApiSupportTest.setValue();
	let isSupportAsync = ApiSupportTest.setValue_async();

	let result: PopsPanelContentConfig = {
		id: "aside-GM_setValue",
		title: "GM_setValue",
		headerTitle: "GM_setValue & GM.setValue",
		scrollToDefaultView: true,
		isDefault() {
			return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_setValue";
		},
		callback(data) {
			StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_setValue");
		},
		forms: [
			{
				type: "forms",
				text: "函数测试",
				forms: [
					UIInfo(() =>
						isSupport
							? {
									text: "支持 GM_setValue",
									tag: "success",
							  }
							: {
									text: "不支持 GM_setValue",
									tag: "error",
							  }
					),
					UIInfo(() =>
						isSupportAsync
							? {
									text: "支持 GM.setValue",
									tag: "success",
							  }
							: {
									text: "不支持 GM.setValue",
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
