import { GM, GM_info } from "ViteGM";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/components/ui-info";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/types/main";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import { CommonUtil } from "@components/utils/CommonUtil";
import { TamperMonkeyUtils } from "@/utils/TamperMonkeyUtils";
import type { TagName } from "@/setting/tag";
import type { PopsPanelFormsDetails } from "@whitesev/pops/dist/types/src/components/panel/types/components-forms";

export class ApiTest_info extends ApiAsyncTestBase {
	public isSupport() {
		return typeof GM_info === "object" && GM_info != null;
	}
	public getApiName() {
		return "GM_info";
	}
	public getAsyncApiOption() {
		return {
			name: "GM.info",
			isSupport: this.isSupportGM() && typeof GM.info === "object",
		};
	}
	public getUIOption() {
		const that = this;
		let apiName = this.getApiName();
		let apiAsyncInfo = this.getAsyncApiOption();

		let result: PopsPanelContentConfig = {
			id: "aside-" + apiName,
			title: "" + apiName,
			headerTitle: `${TamperMonkeyUtils.getApiDocUrl(apiName, `${apiName} & ${apiAsyncInfo.name}`)}`,
			scrollToDefaultView: true,
			isDefault() {
				return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
			},
			clickCallback(data) {
				StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
			},
			forms: [
				{
					type: "forms",
					text: "函数测试",
					forms: [
						UIInfo(() =>
							this.isSupport()
								? {
										text: "支持 " + apiName,
										tag: "success",
								  }
								: {
										text: "不支持 " + apiName,
										tag: "error",
								  }
						),
						UIInfo(() =>
							apiAsyncInfo.isSupport
								? {
										text: "支持 " + apiAsyncInfo.name,
										tag: "success",
								  }
								: {
										text: "不支持 " + apiAsyncInfo.name,
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
				{
					type: "forms",
					text: "功能测试（GM）",
					forms: [],
				},
			],
		};
		if (this.isSupport()) {
			[
				{
					name: apiName,
					fn: GM_info,
					formList: (<PopsPanelFormsDetails>result["forms"][1]).forms,
				},
				{
					name: apiAsyncInfo.name,
					fn: GM.info,
					formList: (<PopsPanelFormsDetails>result["forms"][2]).forms,
				},
			].forEach((data) => {
				let apiNameTag = data.name;

				data.formList.push(
					...[
						{
							value: data.fn?.downloadMode,
							type: "string",
							text: `${data.name}.downloadMode`,
							notExistsTag: "error" as TagName,
						},
						{
							value: data.fn?.scriptHandler,
							type: "string",
							text: `${data.name}.scriptHandler`,
						},
						{
							value: data.fn?.scriptMetaStr,
							type: "string",
							text: `${data.name}.scriptMetaStr`,
						},
						{
							value: data.fn?.version,
							type: "string",
							text: `${data.name}.version`,
						},
						{
							value: data.fn?.script,
							type: "object",
							text: `${data.name}.script`,
						},
						{
							value: data.fn?.script?.name,
							type: "string",
							text: `${data.name}.script.name`,
						},
						{
							value: data.fn?.script?.author,
							type: "string",
							text: `${data.name}.script.author`,
						},
						{
							value: data.fn?.script?.description,
							type: "string",
							text: `${data.name}.script.description`,
						},
						{
							value: data.fn?.script?.version,
							type: "string",
							text: `${data.name}.script.version`,
						},
					].map((it) =>
						UIInfo(() => {
							try {
								if (it.value != null && typeof it.value === it.type) {
									return {
										text: "支持 " + it.text + " 类型：" + it.type,
										tag: "success",
									};
								} else {
									return {
										text: "不支持 " + it.text + " 类型：" + it.type,
										tag: <TagName>it.notExistsTag ?? "error",
									};
								}
							} catch (error) {
								console.error(error);
								return {
									text: "执行错误 " + error,
									tag: "error",
								};
							} finally {
							}
						})
					)
				);
			});
		}
		return result;
	}
}
