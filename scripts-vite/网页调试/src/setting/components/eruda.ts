import { ToolsConfig } from "@/main/ToolsConfig";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UIButton } from "../common-components/ui-button";
import { utils } from "@/env";
import { UISwitch } from "../common-components/ui-switch";
import { UISelect } from "../common-components/ui-select";
import { PopsPanel } from "../setting";
import { PanelSettingConfig } from "../panel-setting-config";
import { ToolVersionInfo } from "@/main/ToolVersionInfo";

export const PanelUI_eruda: PopsPanelContentConfig = {
	id: "debug-panel-config-eruda",
	title: "Eruda",
	headerTitle: `<a href='${ToolsConfig.eruda.settingDocUrl}' target='_blank'>Eruda设置</a>`,
	forms: [
		{
			text: "功能",
			type: "forms",
			forms: [
				UIButton(
					"当前版本",
					"",
					ToolsConfig.eruda.version,
					void 0,
					false,
					false,
					"primary",
					(event) => {
						utils.preventEvent(event);
						window.open(ToolsConfig.eruda.homeUrl, "_blank");
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
                        <a href="${ToolsConfig.eruda.homeUrl}" target="_blank">
                            <img src="https://img.shields.io/npm/v/eruda/latest.svg?label=eruda" alt="eruda">
                        </a>
                        `;
						liElement.appendChild($left);
						liElement.appendChild($right);
						return liElement;
					},
				},
				UISwitch(
					"自动打开面板",
					PanelSettingConfig.eruda_auto_open_panel.key,
					PanelSettingConfig.eruda_auto_open_panel.defaultValue,
					void 0,
					"加载完毕后自动显示面板内容"
				),
				UISelect(
					"默认展示的面板元素",
					PanelSettingConfig.eruda_default_show_panel_name.key,
					PanelSettingConfig.eruda_default_show_panel_name.defaultValue,
					[
						{
							text: "Console",
							value: "console",
							disable() {
								return !PopsPanel.getValue(
									PanelSettingConfig.eruda_panel_console.key
								);
							},
						},
						{
							text: "Elements",
							value: "elements",
							disable() {
								return !PopsPanel.getValue(
									PanelSettingConfig.eruda_panel_elements.key
								);
							},
						},
						{
							text: "Network",
							value: "network",
							disable() {
								return !PopsPanel.getValue(
									PanelSettingConfig.eruda_panel_network.key
								);
							},
						},
						{
							text: "Resources",
							value: "resources",
							disable() {
								return !PopsPanel.getValue(
									PanelSettingConfig.eruda_panel_resources.key
								);
							},
						},
						{
							text: "Sources",
							value: "sources",
							disable() {
								return !PopsPanel.getValue(
									PanelSettingConfig.eruda_panel_sources.key
								);
							},
						},
						{
							text: "Info",
							value: "info",
							disable() {
								return !PopsPanel.getValue(
									PanelSettingConfig.eruda_panel_info.key
								);
							},
						},
						{
							text: "Snippets",
							value: "snippets",
							disable() {
								return !PopsPanel.getValue(
									PanelSettingConfig.eruda_panel_snippets.key
								);
							},
						},
						{
							text: "Monitor",
							value: "monitor",
							disable() {
								return !PopsPanel.getValue(
									PanelSettingConfig.eruda_plugin_Resource_erudaMonitor.key
								);
							},
						},
						{
							text: "Features",
							value: "features",
							disable() {
								return !PopsPanel.getValue(
									PanelSettingConfig.eruda_plugin_Resource_erudaFeatures.key
								);
							},
						},
						{
							text: "Timing",
							value: "timing",
							disable() {
								return !PopsPanel.getValue(
									PanelSettingConfig.eruda_plugin_Resource_erudaTiming.key
								);
							},
						},
						{
							text: "Code",
							value: "code",
							disable() {
								return !PopsPanel.getValue(
									PanelSettingConfig.eruda_plugin_Resource_erudaCode.key
								);
							},
						},
						{
							text: "Benchmark",
							value: "benchmark",
							disable() {
								return !PopsPanel.getValue(
									PanelSettingConfig.eruda_plugin_Resource_erudaBenchmark.key
								);
							},
						},
						{
							text: "Geolocation",
							value: "geolocation",
							disable() {
								return !PopsPanel.getValue(
									PanelSettingConfig.eruda_plugin_Resource_erudaGeolocation.key
								);
							},
						},
						{
							text: "Orientation",
							value: "orientation",
							disable() {
								return !PopsPanel.getValue(
									PanelSettingConfig.eruda_plugin_Resource_erudaOrientation.key
								);
							},
						},
						{
							text: "Touches",
							value: "touches",
							disable() {
								return !PopsPanel.getValue(
									PanelSettingConfig.eruda_plugin_Resource_erudaTouches.key
								);
							},
						},
						{
							text: "Outline",
							value: "outline",
							disable() {
								return !PopsPanel.getValue(
									PanelSettingConfig.eruda_plugin_Resource_erudaOutlinePlugin
										.key
								);
							},
						},
						{
							text: "Pixel",
							value: "pixel",
							disable() {
								return !PopsPanel.getValue(
									PanelSettingConfig.eruda_plugin_Resource_erudaPixel.key
								);
							},
						},
						{
							text: "Vue",
							value: "vue",
							disable() {
								return !PopsPanel.getValue(
									PanelSettingConfig.eruda_plugin_Resource_erudaVue.key
								);
							},
						},
						{
							text: "Settings",
							value: "settings",
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
					"Console",
					PanelSettingConfig.eruda_panel_console.key,
					PanelSettingConfig.eruda_panel_console.defaultValue,
					void 0,
					"控制台"
				),
				UISwitch(
					"Elements",
					PanelSettingConfig.eruda_panel_elements.key,
					PanelSettingConfig.eruda_panel_elements.defaultValue,
					void 0,
					"元素"
				),
				UISwitch(
					"Network",
					PanelSettingConfig.eruda_panel_network.key,
					PanelSettingConfig.eruda_panel_network.defaultValue,
					void 0,
					"网络"
				),
				UISwitch(
					"Resources",
					PanelSettingConfig.eruda_panel_resources.key,
					PanelSettingConfig.eruda_panel_resources.defaultValue,
					void 0,
					"资源"
				),
				UISwitch(
					"Sources",
					PanelSettingConfig.eruda_panel_sources.key,
					PanelSettingConfig.eruda_panel_sources.defaultValue,
					void 0,
					"源代码"
				),
				UISwitch(
					"Info",
					PanelSettingConfig.eruda_panel_info.key,
					PanelSettingConfig.eruda_panel_info.defaultValue,
					void 0,
					"信息"
				),
				UISwitch(
					"Snippets",
					PanelSettingConfig.eruda_panel_snippets.key,
					PanelSettingConfig.eruda_panel_snippets.defaultValue,
					void 0,
					"拓展"
				),
			],
		},
		{
			text: "插件",
			type: "forms",
			forms: [
				UISwitch(
					/*html*/ `
                    <a class="plugin-anchor" href="https://github.com/liriliri/eruda-monitor" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-monitor/latest.svg?label=">
                    </a>
                    eruda-monitor
                    `,
					PanelSettingConfig.eruda_plugin_Resource_erudaMonitor.key,
					PanelSettingConfig.eruda_plugin_Resource_erudaMonitor.defaultValue,
					void 0,
					`
						v${ToolVersionInfo.eruda.plugin["eruda-monitor"]}
						<br>
						展示页面的 fps 和内存信息
                    `
				),
				UISwitch(
					/*html*/ `
                    <a class="plugin-anchor" href="https://github.com/liriliri/eruda-features" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-features/latest.svg?label=">
                    </a>
                    eruda-features
                    `,
					PanelSettingConfig.eruda_plugin_Resource_erudaFeatures.key,
					PanelSettingConfig.eruda_plugin_Resource_erudaFeatures.defaultValue,
					void 0,
					`
						v${ToolVersionInfo.eruda.plugin["eruda-features"]}
						<br>
						浏览器特性检测
                    `
				),
				UISwitch(
					/*html*/ `
                    <a class="plugin-anchor" href="https://github.com/liriliri/eruda-timing" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-timing/latest.svg?label=">
                    </a>
                    eruda-timing
                    `,
					PanelSettingConfig.eruda_plugin_Resource_erudaTiming.key,
					PanelSettingConfig.eruda_plugin_Resource_erudaTiming.defaultValue,
					void 0,
					`
						v${ToolVersionInfo["eruda"]["plugin"]["eruda-timing"]}
						<br>
						展示性能资源数据
                    `
				),
				UISwitch(
					/*html*/ `
                    <a class="plugin-anchor" href="https://github.com/liriliri/eruda-code" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-code/latest.svg?label=">
                    </a>
                    eruda-code
                    `,
					PanelSettingConfig.eruda_plugin_Resource_erudaCode.key,
					PanelSettingConfig.eruda_plugin_Resource_erudaCode.defaultValue,
					void 0,
					`
						v${ToolVersionInfo.eruda.plugin["eruda-code"]}
						<br>
						运行 JavaScript 代码
                    `
				),
				UISwitch(
					/*html*/ `
                    <a class="plugin-anchor" href="https://github.com/liriliri/eruda-benchmark" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-benchmark/latest.svg?label=">
                    </a>
                    eruda-benchmark
                    `,
					PanelSettingConfig.eruda_plugin_Resource_erudaBenchmark.key,
					PanelSettingConfig.eruda_plugin_Resource_erudaBenchmark.defaultValue,
					void 0,
					`
						v${ToolVersionInfo.eruda.plugin["eruda-benchmark"]}
						<br>
						运行 JavaScript 性能测试
                    `
				),
				UISwitch(
					"eruda-geolocation",
					PanelSettingConfig.eruda_plugin_Resource_erudaGeolocation.key,
					PanelSettingConfig.eruda_plugin_Resource_erudaGeolocation
						.defaultValue,
					void 0,
					"测试地理位置接口"
				),
				UISwitch(
					/*html*/ `
                    <a class="plugin-anchor" href="https://github.com/liriliri/eruda-orientation" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-orientation/latest.svg?label=">
                    </a>
                    eruda-orientation
                    `,
					PanelSettingConfig.eruda_plugin_Resource_erudaOrientation.key,
					PanelSettingConfig.eruda_plugin_Resource_erudaOrientation
						.defaultValue,
					void 0,
					`
						v${ToolVersionInfo.eruda.plugin["eruda-orientation"]}
						<br>
						测试重力感应接口
                    `
				),
				UISwitch(
					/*html*/ `
                    <a class="plugin-anchor" href="https://github.com/liriliri/eruda-vue" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-vue/latest.svg?label=">
                    </a>
                    eruda-vue
                    `,
					PanelSettingConfig.eruda_plugin_Resource_erudaVue.key,
					PanelSettingConfig.eruda_plugin_Resource_erudaVue.defaultValue,
					void 0,
					`
						v${ToolVersionInfo.eruda.plugin["eruda-vue"]}
						<br>
						Vue调试工具
                    `
				),
				UISwitch(
					/*html*/ `
                    <a class="plugin-anchor" href="https://github.com/liriliri/eruda-touches" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-touches/latest.svg?label=">
                    </a>
                    eruda-touches
                    `,
					PanelSettingConfig.eruda_plugin_Resource_erudaTouches.key,
					PanelSettingConfig.eruda_plugin_Resource_erudaTouches.defaultValue,
					void 0,
					`
						v${ToolVersionInfo.eruda.plugin["eruda-touches"]}
						<br>
						可视化屏幕 Touch 事件触发
                    `
				),
				UISwitch(
					/*html*/ `
                    <a class="plugin-anchor" href="https://github.com/pomelo-chuan/eruda-outline-plugin" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-outline-plugin/latest.svg?label=">
                    </a>
                    eruda-outline-plugin
                    `,
					PanelSettingConfig.eruda_plugin_Resource_erudaOutlinePlugin.key,
					PanelSettingConfig.eruda_plugin_Resource_erudaOutlinePlugin
						.defaultValue,
					void 0,
					`
						v${ToolVersionInfo.eruda.plugin["eruda-outline-plugin"]}
						<br>
						给页面的元素添加边框
					`
				),
				UISwitch(
					/*html*/ `
                    <a class="plugin-anchor" href="https://github.com/Faithree/eruda-pixel" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-pixel/latest.svg?label=">
                    </a>
                    eruda-pixel
                    `,
					PanelSettingConfig.eruda_plugin_Resource_erudaPixel.key,
					PanelSettingConfig.eruda_plugin_Resource_erudaPixel.defaultValue,
					void 0,
					`
						v${ToolVersionInfo.eruda.plugin["eruda-pixel"]}
						<br>
						高精度的UI恢复辅助工具
                    `
				),
			],
		},
	],
};
