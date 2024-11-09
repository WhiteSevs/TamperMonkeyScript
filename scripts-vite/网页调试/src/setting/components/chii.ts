import { ToolsConfig } from "@/main/ToolsConfig";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UISwitch } from "../common-components/ui-switch";
import { PopsPanel } from "../setting";
import { UIInput } from "../common-components/ui-input";
import { PanelSettingConfig } from "../panel-setting-config";
import { UISlider } from "../common-components/ui-slider";

export const PanelUI_chii: PopsPanelContentConfig = {
	id: "debug-panel-config-chii",
	title: "Chii",
	headerTitle: `<a href='${ToolsConfig.chii.settingDocUrl}' target='_blank'>Chii设置</a>`,
	forms: [
		{
			text: "功能",
			type: "forms",
			forms: [
				{
					text: "调试页面",
					type: "button",
					buttonType: "primary",
					buttonText: "前往",
					disable: Boolean(PopsPanel.getValue("chii-script-embedded", true)),
					callback(event) {
						let url = PopsPanel.getValue(
							"chii-debug-url",
							ToolsConfig.chii.defaultConfig.url
						);
						window.open(url, "_blank");
					},
				},
			],
		},
		{
			text: "配置",
			type: "forms",
			forms: [
				UISwitch(
					"本页展示",
					PanelSettingConfig.chii_script_embedded.key,
					PanelSettingConfig.chii_script_embedded.defaultValue,
					(event, value) => {
						// @ts-ignore
						let $shadowRoot = event.target.getRootNode();
						let button = $shadowRoot.querySelector(
							"li.pops-panel-forms-container-item ul > li > .pops-panel-button button"
						) as HTMLElement;
						if (value) {
							button.setAttribute("disabled", "true");
						} else {
							button.removeAttribute("disabled");
						}
					},
					"将调试器展示在同一页面中"
				),
				UISwitch(
					"禁止在调试端运行",
					PanelSettingConfig.chii_disable_run_in_debug_url.key,
					PanelSettingConfig.chii_disable_run_in_debug_url.defaultValue,
					void 0,
					"调试端是下面配置的【调试页面Url】"
				),
				UISwitch(
					"检测script加载",
					PanelSettingConfig.chii_check_script_load.key,
					PanelSettingConfig.chii_check_script_load.defaultValue,
					void 0,
					"失败会有alert提示弹出"
				),
				UIInput(
					"调试页面Url",
					PanelSettingConfig.chii_debug_url.key,
					PanelSettingConfig.chii_debug_url.defaultValue,
					"请输入链接Url",
					void 0,
					"配置【调试页面】的Url"
				),
				UIInput(
					"来源js",
					PanelSettingConfig.chii_target_js.key,
					PanelSettingConfig.chii_target_js.defaultValue,
					"请输入目标js文件",
					void 0,
					"用于注入页面来进行调试"
				),
			],
		},
		{
			text: "本页展示的配置",
			type: "forms",
			forms: [
				UISlider(
					"高度",
					PanelSettingConfig.chii_embedded_height.key,
					PanelSettingConfig.chii_embedded_height.defaultValue,
					0,
					parseInt(window.innerHeight.toString()),
					void 0,
					(value) => value + "px",
					"移动端不好拖拽，使用这个配置高度",
					1
				),
			],
		},
	],
};
