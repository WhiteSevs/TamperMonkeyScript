import type {
	PopsPanelContentConfig,
	PopsPanelFormsTotalDetails,
} from "@whitesev/pops/dist/types/src/components/panel/indexType";
// @ts-ignore
import { GM, GM_demo } from "ViteGM";
import { UIInfo } from "../common-components/ui-info";
import { CommonUtil } from "@/utils/CommonUtil";
import { StorageApi } from "@/main/StorageApi";
import { PanelKeyConfig } from "../panel-key-config";

export const PanelUI_GM_demo = (): PopsPanelContentConfig => {
	let isSupport = typeof GM_demo === "function";
	let isSupportGM =
		// @ts-ignore
		typeof GM === "object" && GM != null && typeof GM.demo === "function";

	let result: PopsPanelContentConfig = {
		id: "aside-GM_demo",
		title: "GM_demo",
		headerTitle: "GM_demo & GM.demo",
		scrollToDefaultView: true,
		isDefault() {
			return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_demo";
		},
		callback(data) {
			StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_demo");
		},
		forms: [
			{
				type: "forms",
				text: "函数测试",
				forms: [
					UIInfo(() =>
						isSupport
							? {
									text: "支持 GM_demo",
									tag: "success",
							  }
							: {
									text: "不支持 GM_demo",
									tag: "error",
							  }
					),
					UIInfo(() =>
						isSupportGM
							? {
									text: "支持 GM.demo",
									tag: "success",
							  }
							: {
									text: "不支持 GM.demo",
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
