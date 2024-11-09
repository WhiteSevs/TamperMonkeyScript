import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UIButton } from "../common-components/ui-button";
import { ToolsConfig } from "@/main/ToolsConfig";
import { utils } from "@/env";
import { UISwitch } from "../common-components/ui-switch";
import { UISelect } from "../common-components/ui-select";
import { PopsPanel } from "../setting";
import { UIInput } from "../common-components/ui-input";
import { PanelSettingConfig } from "../panel-setting-config";
import { ToolVersionInfo } from "@/main/ToolVersionInfo";

export const PanelUI_vConsole: PopsPanelContentConfig = {
	id: "debug-panel-config-vconsole",
	title: "vConsole",
	headerTitle: `<a href='${ToolsConfig.vConsole.settingDocUrl}' target='_blank'>vConsole设置</a>`,
	forms: [
		{
			text: "功能",
			type: "forms",
			forms: [
				UIButton(
					"当前版本",
					"",
					ToolsConfig.vConsole.version,
					void 0,
					false,
					false,
					"primary",
					(event) => {
						utils.preventEvent(event);
						window.open(ToolsConfig.vConsole.homeUrl, "_blank");
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
                        <a href="${ToolsConfig.vConsole.homeUrl}" target="_blank">
                            <img src="https://img.shields.io/npm/v/vconsole/latest.svg?label=vConsole" alt="vConsole">
                        </a>
                        `;
						liElement.appendChild($left);
						liElement.appendChild($right);
						return liElement;
					},
				},
				UISwitch(
					"自动打开面板",
					PanelSettingConfig.vconsole_auto_open_panel.key,
					PanelSettingConfig.vconsole_auto_open_panel.defaultValue,
					void 0,
					"加载完毕后自动显示面板内容"
				),
				UISelect(
					"默认展示的面板元素",
					PanelSettingConfig.vconsole_default_show_panel_name.key,
					PanelSettingConfig.vconsole_default_show_panel_name.defaultValue,
					[
						{
							text: "Log",
							value: "default",
						},
						{
							text: "System",
							value: "system",
							disable() {
								return !PopsPanel.getValue(
									PanelSettingConfig.vConsole_panel_system.key
								);
							},
						},
						{
							text: "Network",
							value: "network",
							disable() {
								return !PopsPanel.getValue(
									PanelSettingConfig.vConsole_panel_network.key
								);
							},
						},
						{
							text: "Element",
							value: "element",
							disable() {
								return !PopsPanel.getValue(
									PanelSettingConfig.vConsole_panel_element.key
								);
							},
						},
						{
							text: "Storage",
							value: "storage",
							disable() {
								return !PopsPanel.getValue(
									PanelSettingConfig.vConsole_panel_storage.key
								);
							},
						},
						{
							text: "Stats",
							value: "stats",
							disable() {
								return !PopsPanel.getValue(
									PanelSettingConfig.vConsole_plugin_Resource_vConsole_Stats.key
								);
							},
						},
						{
							text: "exportLog",
							value: "exportlog",
							disable() {
								return !PopsPanel.getValue(
									PanelSettingConfig.vConsole_plugin_Resource_vConsole_ExportLog
										.key
								);
							},
						},
						{
							text: "Vue",
							value: "vue",
							disable() {
								return !PopsPanel.getValue(
									PanelSettingConfig
										.vConsole_plugin_Resource_vConsoleVueDevtools.key
								);
							},
						},
					],
					void 0,
					"开启【自动打开面板】才会生效"
				),
			],
		},

		{
			text: "面板",
			type: "forms",
			forms: [
				UISwitch(
					"System",
					PanelSettingConfig.vConsole_panel_system.key,
					PanelSettingConfig.vConsole_panel_system.defaultValue,
					void 0,
					"控制台"
				),
				UISwitch(
					"Network",
					PanelSettingConfig.vConsole_panel_network.key,
					PanelSettingConfig.vConsole_panel_network.defaultValue,
					void 0,
					"元素"
				),
				UISwitch(
					"Element",
					PanelSettingConfig.vConsole_panel_element.key,
					PanelSettingConfig.vConsole_panel_element.defaultValue,
					void 0,
					"网络"
				),
				UISwitch(
					"Storage",
					PanelSettingConfig.vConsole_panel_storage.key,
					PanelSettingConfig.vConsole_panel_storage.defaultValue,
					void 0,
					"资源"
				),
			],
		},
		{
			text: "配置",
			type: "forms",
			forms: [
				UISelect(
					"主题",
					PanelSettingConfig.vConsole_theme.key,
					PanelSettingConfig.vConsole_theme.defaultValue,
					[
						{
							value: "auto",
							text: "自动",
						},
						{
							value: "light",
							text: "浅色主题",
						},
						{
							value: "dark",
							text: "深色主题",
						},
					],
					void 0,
					void 0
				),
				UISwitch(
					"禁止Log自动滚动",
					PanelSettingConfig.vconsole_disableLogScrolling.key,
					PanelSettingConfig.vconsole_disableLogScrolling.defaultValue
				),
				UISwitch(
					"显示日志的输出时间",
					PanelSettingConfig.vconsole_showTimestamps.key,
					PanelSettingConfig.vconsole_showTimestamps.defaultValue
				),
				UIInput(
					"日志的上限数量",
					PanelSettingConfig.vconsole_maxLogNumber.key,
					PanelSettingConfig.vconsole_maxLogNumber.defaultValue,
					"请输入数字",
					void 0,
					void 0,
					true
				),
				UIInput(
					"请求记录的上限数量",
					PanelSettingConfig.vconsole_maxNetworkNumber.key,
					PanelSettingConfig.vconsole_maxNetworkNumber.defaultValue,
					"请输入数字",
					void 0,
					void 0,
					true
				),
			],
		},
		{
			text: "Storage配置",
			type: "forms",
			forms: [
				UISwitch(
					"Cookies",
					PanelSettingConfig.vConsole_storage_defaultStorages_cookies.key,
					PanelSettingConfig.vConsole_storage_defaultStorages_cookies
						.defaultValue,
					void 0,
					"显示Cookies"
				),
				UISwitch(
					"LocalStorage",
					PanelSettingConfig.vConsole_storage_defaultStorages_localStorage.key,
					PanelSettingConfig.vConsole_storage_defaultStorages_localStorage
						.defaultValue,
					void 0,
					"显示LocalStorage"
				),
				UISwitch(
					"SessionStorage",
					PanelSettingConfig.vConsole_storage_defaultStorages_sessionStorage
						.key,
					PanelSettingConfig.vConsole_storage_defaultStorages_sessionStorage
						.defaultValue,
					void 0,
					"显示SessionStorage"
				),
			],
		},
		{
			text: "插件",
			type: "forms",
			forms: [
				UISwitch(
					"vconsole-stats-plugin",
					PanelSettingConfig.vConsole_plugin_Resource_vConsole_Stats.key,
					PanelSettingConfig.vConsole_plugin_Resource_vConsole_Stats
						.defaultValue,
					void 0,
					"A vConsole plugin which can show Stats in front-end."
				),
				UISwitch(
					"vconsole-outputlog-plugin",
					PanelSettingConfig.vConsole_plugin_Resource_vConsole_ExportLog.key,
					PanelSettingConfig.vConsole_plugin_Resource_vConsole_ExportLog
						.defaultValue,
					void 0,
					"使用该插件可以复制或下载console中打印的log"
				),
				UISwitch(
					/*html*/ `
                        <a class="plugin-anchor" href="https://github.com/Zippowxk/vue-vconsole-devtools" target="_blank">
                            <img src="https://img.shields.io/npm/v/vue-vconsole-devtools/latest.svg?label=">
                        </a>
                        vue-vconsole-devtools
                    `,
					PanelSettingConfig.vConsole_plugin_Resource_vConsoleVueDevtools.key,
					PanelSettingConfig.vConsole_plugin_Resource_vConsoleVueDevtools
						.defaultValue,
					void 0,
					`
                        v${ToolVersionInfo.vconsole.plugin["vue-vconsole-devtools"]}
                        <br>
                        Vue-vConsole-devtools 是一款vConsole插件，把Vue.js官方调试工具vue-devtools移植到移动端，可以直接在移动端查看调试Vue.js应用
                    `
				),
			],
		},
	],
};
