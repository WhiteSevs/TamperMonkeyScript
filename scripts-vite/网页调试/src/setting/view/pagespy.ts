import { pops, utils } from "@/env";
import { DebugToolConfig } from "@/main/DebugToolConfig";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { UIButton } from "@components/setting/components/ui-button";
import { UISwitch } from "@components/setting/components/ui-switch";
import { UIInput } from "@components/setting/components/ui-input";
import { PanelUISize } from "@components/setting/panel-ui-size";
import { UISelect } from "@components/setting/components/ui-select";
import { GlobalSettingConfig } from "../config";

export const PanelUI_pagespy: PopsPanelContentConfig = {
	id: "debug-panel-config-pagespy",
	title: "PageSpy",
	headerTitle: `<a href='${DebugToolConfig.pageSpy.settingDocUrl}' target='_blank'>PageSpy设置</a>`,
	forms: [
		{
			text: "功能",
			type: "forms",
			forms: [
				UIButton(
					"注意！隐私保护！",
					"",
					"了解详情",
					void 0,
					false,
					false,
					"danger",
					(event) => {
						pops.confirm({
							title: {
								text: "提示",
								position: "center",
							},
							content: {
								text: `下面默认配置的${DebugToolConfig.pageSpy.defaultConfig.api}是仅供测试使用的，其他人也可以看到你的调试信息，包括Cookie等信息，如果想用，请自己搭建一个调试端`,
							},
							btn: {
								reverse: true,
								position: "end",
								ok: {
									text: "前往了解更多",
									callback() {
										window.open(
											"https://github.com/HuolalaTech/page-spy-web/wiki/%F0%9F%90%9E-%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E8%A7%A3%E7%AD%94#user-content-testjikejishucom-%E6%98%AF%E5%AE%98%E6%96%B9%E6%8F%90%E4%BE%9B%E7%9A%84%E5%9F%9F%E5%90%8D%E5%90%97%E4%B8%80%E7%9B%B4%E5%8F%AF%E4%BB%A5%E7%94%A8%E5%90%97",
											"_blank"
										);
									},
								},
							},
							mask: {
								enable: true,
							},
							width: PanelUISize.info.width,
							height: PanelUISize.info.height,
						});
					},
					void 0
				),
				UIButton(
					"当前版本",
					"",
					DebugToolConfig.pageSpy.version,
					void 0,
					false,
					false,
					"primary",
					(event) => {
						utils.preventEvent(event);
						window.open(DebugToolConfig.pageSpy.homeUrl, "_blank");
					}
				),
				{
					type: "own",
					getLiElementCallBack(liElement) {
						let $left = document.createElement("div");
						$left.className = "pops-panel-item-left-text";
						$left.innerHTML = /*html*/ `
                            <p class="pops-panel-item-left-main-text">最新版本</p>
                        `;
						let $right = document.createElement("div");
						$right.className = "pops-panel-item-right-text";
						$right.innerHTML = /*html*/ `
                        <a href="${DebugToolConfig.pageSpy.homeUrl}" target="_blank">
                            <img src="https://img.shields.io/npm/v/@huolala-tech/page-spy-browser?label=pagespy" alt="page-spy-browser">
                        </a>
                        `;
						liElement.appendChild($left);
						liElement.appendChild($right);
						return liElement;
					},
				},
				UISwitch(
					"禁止在调试端运行",
					GlobalSettingConfig.pagespy_disable_run_in_debug_client.key,
					GlobalSettingConfig.pagespy_disable_run_in_debug_client.defaultValue,
					void 0,
					"调试端是下面配置的api/clientOrigin地址"
				),
			],
		},
		{
			text: "配置",
			type: "forms",
			forms: [
				UIInput(
					"api",
					GlobalSettingConfig.pagespy_api.key,
					GlobalSettingConfig.pagespy_api.defaultValue,
					"",
					void 0,
					"服务器地址的 Host"
				),
				UIInput(
					"clientOrigin",
					GlobalSettingConfig.pagespy_clientOrigin.key,
					GlobalSettingConfig.pagespy_clientOrigin.defaultValue,
					"",
					void 0,
					"服务器地址的 Origin"
				),
				UIInput(
					"project",
					GlobalSettingConfig.pagespy_project.key,
					GlobalSettingConfig.pagespy_project.defaultValue,
					void 0,
					void 0,
					"项目名称"
				),
				UIInput(
					"title",
					GlobalSettingConfig.pagespy_title.key,
					GlobalSettingConfig.pagespy_title.defaultValue,
					void 0,
					void 0,
					"自定义标题"
				),
				UISwitch(
					"autoRender",
					GlobalSettingConfig.pagespy_autoRender.key,
					GlobalSettingConfig.pagespy_autoRender.defaultValue,
					void 0,
					"自动渲染「圆形白底带 Logo」"
				),
				UISelect(
					"enableSSL",
					GlobalSettingConfig.pagespy_enableSSL.key,
					GlobalSettingConfig.pagespy_enableSSL.defaultValue,
					[
						{
							value: null,
							text: "默认(自动分析)",
						},
						{
							value: true,
							text: "开启",
						},
						{
							value: false,
							text: "关闭",
						},
					],
					void 0,
					"是否https"
				),
				UISwitch(
					"offline",
					GlobalSettingConfig.pagespy_offline.key,
					GlobalSettingConfig.pagespy_offline.defaultValue,
					void 0,
					`是否进入 "离线模式"，具体表现为 PageSpy 不会创建房间、建立 WebSocket 连接。`
				),
				UISwitch(
					"serializeData",
					GlobalSettingConfig.pagespy_serializeData.key,
					GlobalSettingConfig.pagespy_serializeData.defaultValue,
					void 0,
					`是否允许 SDK 在收集离线日志时，序列化非基本类型的数据，序列化的目的是方便在回放时查看`
				),
				UISwitch(
					"useSecret",
					GlobalSettingConfig.pagespy_useSecret.key,
					GlobalSettingConfig.pagespy_useSecret.defaultValue,
					void 0,
					`是否启用权限认证功能。启用后，SDK 会生成 6 位数的随机 “密钥”；调试端进入房间时要求输入对应的密钥`
				),
				UIInput(
					"messageCapacity",
					GlobalSettingConfig.pagespy_messageCapacity.key,
					GlobalSettingConfig.pagespy_messageCapacity.defaultValue,
					"调试端进入房间后可以看到之前的数据量的大小",
					void 0,
					`指定 SDK 在本地最多缓存多少条数据记录`
				),
			],
		},
	],
};
