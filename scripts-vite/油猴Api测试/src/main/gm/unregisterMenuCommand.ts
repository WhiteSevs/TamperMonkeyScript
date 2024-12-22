import { GM, GM_registerMenuCommand, GM_unregisterMenuCommand } from "ViteGM";
import { ApiTestBase } from "../base/ApiTestBase";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/common-components/ui-info";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/types/main";
import { DOMUtils, setTimeoutLog, utils } from "@/env";
import { CommonUtil } from "@/utils/CommonUtil";
import { TagUtil } from "@/setting/tag";
import Qmsg from "qmsg";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";

export class ApiTest_unregisterMenuCommand extends ApiAsyncTestBase {
	public isSupport() {
		return typeof GM_unregisterMenuCommand === "function";
	}
	public getApiName() {
		return "GM_unregisterMenuCommand";
	}
	public getAsyncApiOption() {
		return {
			name: "GM.unregisterMenuCommand",
			isSupport:
				this.isSupportGM() && typeof GM.unregisterMenuCommand === "function",
		};
	}
	public getUIOption() {
		const that = this;
		let apiName = this.getApiName();
		let apiAsyncInfo = this.getAsyncApiOption();

		let result: PopsPanelContentConfig = {
			id: "aside-" + apiName,
			title: "" + apiName,
			headerTitle: `${apiName} & ${apiAsyncInfo.name}`,
			scrollToDefaultView: true,
			isDefault() {
				return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
			},
			callback(data) {
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
			],
		};
		if (this.isSupport()) {
			((result["forms"][1] as any).forms as PopsPanelFormsTotalDetails[]).push(
				UIInfo(() => {
					try {
						return {
							text: "注册并卸载菜单 ==> Test UnRegister Menu",
							description: "请自行验证是否成功卸载菜单",
							tag: "info",
							afterRender(container) {
								let $button = DOMUtils.parseHTML(
									/*html*/ `
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,
									false,
									false
								);
								DOMUtils.after(container.$leftContainer, $button);
								// 点击事件
								let timeId: number;
								DOMUtils.on($button, "click", (event) => {
									try {
										utils.preventEvent(event);
										clearTimeout(timeId);

										const menuCommandId = GM_registerMenuCommand(
											"Test UnRegister Menu",
											(event) => {}
										);
										Qmsg.info("已注册菜单，10s后自动执行卸载", {
											timeout: 5 * 1000,
										});
										clearTimeout(timeId);
										timeId = setTimeoutLog(() => {
											GM_unregisterMenuCommand(menuCommandId);
											Qmsg.success("已执行卸载菜单命令，请自行验证");
										}, 10 * 1000);
									} catch (error: any) {
										Qmsg.error(error.toString(), { consoleLogContent: true });
									}
								});
							},
						};
					} catch (error) {
						console.error(error);
						return {
							text: "执行错误 " + error,
							tag: "error",
						};
					} finally {
					}
				})
			);
		}
		return result;
	}
}
