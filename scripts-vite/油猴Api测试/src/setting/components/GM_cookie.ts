import type {
	PopsPanelContentConfig,
	PopsPanelFormsTotalDetails,
} from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { GM, GM_cookie } from "ViteGM";
import { UIInfo } from "../common-components/ui-info";
import { CommonUtil } from "@/utils/CommonUtil";
import { ApiSupportTest } from "@/main/ApiSupportTest";
import { StorageApi } from "@/main/StorageApi";
import { PanelKeyConfig } from "../panel-key-config";

export const PanelUI_GM_cookie = (): PopsPanelContentConfig => {
	let isSupport = ApiSupportTest.cookie();
	let isSupportAsync = ApiSupportTest.cookie_async();
	let isSupportAsync_list =
		isSupportAsync && typeof GM.cookie.list === "function";
	let isSupportAsync_set =
		isSupportAsync && typeof GM.cookie.set === "function";
	let isSupportAsync_delete =
		isSupportAsync && typeof GM.cookie.delete === "function";

	let result: PopsPanelContentConfig = {
		id: "aside-GM_cookie",
		title: "GM_cookie",
		headerTitle: "GM_cookie & GM.cookie",
		scrollToDefaultView: true,
		isDefault() {
			return StorageApi.get(PanelKeyConfig.asideLastVisit) === "GM_cookie";
		},
		callback(data) {
			StorageApi.set(PanelKeyConfig.asideLastVisit, "GM_cookie");
		},
		forms: [
			{
				type: "forms",
				text: "函数测试",
				forms: [
					UIInfo(() =>
						isSupport
							? {
									text: "支持 GM_cookie",
									tag: "success",
							  }
							: {
									text: "不支持 GM_cookie",
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
	let firstFormList = (result["forms"][0] as any)
		.forms as PopsPanelFormsTotalDetails[];
	if (isSupportAsync) {
		firstFormList.push(
			UIInfo(() => {
				return isSupportAsync_list
					? {
							text: "支持 GM.cookie.list",
							tag: "success",
					  }
					: {
							text: "不支持 GM.cookie.list",
							tag: "error",
					  };
			}),
			UIInfo(() => {
				return isSupportAsync_set
					? {
							text: "支持 GM.cookie.set",
							tag: "success",
					  }
					: {
							text: "不支持 GM.cookie.set",
							tag: "error",
					  };
			}),
			UIInfo(() => {
				return isSupportAsync_delete
					? {
							text: "支持 GM.cookie.delete",
							tag: "success",
					  }
					: {
							text: "不支持 GM.cookie.delete",
							tag: "error",
					  };
			})
		);
	} else {
		firstFormList.push(
			UIInfo(() => {
				return { text: "不支持 GM.cookie", tag: "error" };
			})
		);
	}
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
