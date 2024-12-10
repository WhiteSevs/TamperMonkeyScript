import type {
	PopsPanelContentConfig,
	PopsPanelFormsTotalDetails,
} from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { GM, GM_getValue } from "ViteGM";
import { UIInfo } from "../common-components/ui-info";
import { CommonUtil } from "@/utils/CommonUtil";
import { ApiSupportTest } from "@/main/ApiSupportTest";
import { StorageApi } from "@/main/StorageApi";
import { PanelKeyConfig } from "../panel-key-config";

export const PanelUI_GM_getValue = (): PopsPanelContentConfig => {
	let isSupport = ApiSupportTest.getValue();
	let isSupportAsync = ApiSupportTest.getValue_async();

	let result: PopsPanelContentConfig = {
		id: "aside-GM_getValue",
		title: "GM_getValue",
		headerTitle: "GM_getValue & GM.getValue",
		scrollToDefaultView: true,
		isDefault() {
			return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_getValue";
		},
		callback(data) {
			StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_getValue");
		},
		forms: [
			{
				type: "forms",
				text: "函数测试",
				forms: [
					UIInfo(() =>
						isSupport
							? {
									text: "支持 GM_getValue",
									tag: "success",
							  }
							: {
									text: "不支持 GM_getValue",
									tag: "error",
							  }
					),
					UIInfo(() =>
						isSupportAsync
							? {
									text: "支持 GM.getValue",
									tag: "success",
							  }
							: {
									text: "不支持 GM.getValue",
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
