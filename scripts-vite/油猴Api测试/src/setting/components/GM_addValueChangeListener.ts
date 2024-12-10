import type {
	PopsPanelContentConfig,
	PopsPanelFormsTotalDetails,
} from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { GM, GM_addValueChangeListener } from "ViteGM";
import { UIInfo } from "../common-components/ui-info";
import { CommonUtil } from "@/utils/CommonUtil";
import { ApiSupportTest } from "@/main/ApiSupportTest";
import { StorageApi } from "@/main/StorageApi";
import { PanelKeyConfig } from "../panel-key-config";

export const PanelUI_GM_addValueChangeListener = (): PopsPanelContentConfig => {
	let isSupport = ApiSupportTest.addValueChangeListener();
	let isSupportAsync = ApiSupportTest.addValueChangeListener_async();

	let result: PopsPanelContentConfig = {
		id: "aside-GM_addValueChangeListener",
		title: "GM_addValueChangeListener",
		headerTitle: "GM_addValueChangeListener & GM.addValueChangeListener",
		scrollToDefaultView: true,
		isDefault() {
			return (
				StorageApi.get(PanelKeyConfig.asideLastVisit) ===
				"GM_addValueChangeListener"
			);
		},
		callback(data) {
			StorageApi.set(
				PanelKeyConfig.asideLastVisit,
				"GM_addValueChangeListener"
			);
		},
		forms: [
			{
				type: "forms",
				text: "函数测试",
				forms: [
					UIInfo(() =>
						isSupport
							? {
									text: "支持 GM_addValueChangeListener",
									tag: "success",
							  }
							: {
									text: "不支持 GM_addValueChangeListener",
									tag: "error",
							  }
					),
					UIInfo(() =>
						isSupportAsync
							? {
									text: "支持 GM.addValueChangeListener",
									tag: "success",
							  }
							: {
									text: "不支持 GM.addValueChangeListener",
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
