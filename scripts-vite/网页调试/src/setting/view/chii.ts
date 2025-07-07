import { DebugToolConfig } from "@/main/DebugToolConfig";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { UISwitch } from "@components/setting/components/ui-switch";
import { UIInput } from "@components/setting/components/ui-input";
import { UISlider } from "@components/setting/components/ui-slider";
import { UIButton } from "@components/setting/components/ui-button";
import { Panel } from "@components/setting/panel";
import { GlobalSettingConfig } from "../config";

export const PanelUI_chii: PopsPanelContentConfig = {
	id: "debug-panel-config-chii",
	title: "Chii",
	headerTitle: `<a href='${DebugToolConfig.chii.settingDocUrl}' target='_blank'>Chii设置</a>`,
	forms: [
		{
			text: "功能",
			type: "forms",
			forms: [
				UIButton(
					"调试页面",
					"",
					"前往",
					void 0,
					false,
					false,
					"primary",
					(event) => {
						let url = Panel.getValue(
							"chii-debug-url",
							DebugToolConfig.chii.defaultConfig.url
						);
						window.open(url, "_blank");
					},
					void 0,
					() => {
						return Boolean(
							Panel.getValue(
								GlobalSettingConfig.chii_script_embedded.key,
								GlobalSettingConfig.chii_script_embedded.defaultValue
							)
						);
					}
				),
			],
		},
		{
			text: "配置",
			type: "forms",
			forms: [
				UISwitch(
					"本页展示",
					GlobalSettingConfig.chii_script_embedded.key,
					GlobalSettingConfig.chii_script_embedded.defaultValue,
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
					GlobalSettingConfig.chii_disable_run_in_debug_url.key,
					GlobalSettingConfig.chii_disable_run_in_debug_url.defaultValue,
					void 0,
					"调试端是下面配置的【调试页面Url】"
				),
				UISwitch(
					"检测script加载",
					GlobalSettingConfig.chii_check_script_load.key,
					GlobalSettingConfig.chii_check_script_load.defaultValue,
					void 0,
					"失败会有alert提示弹出"
				),
				UIInput(
					"调试页面Url",
					GlobalSettingConfig.chii_debug_url.key,
					GlobalSettingConfig.chii_debug_url.defaultValue,
					"请输入链接Url",
					void 0,
					"配置【调试页面】的Url"
				),
				UIInput(
					"来源js",
					GlobalSettingConfig.chii_target_js.key,
					GlobalSettingConfig.chii_target_js.defaultValue,
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
				UISwitch(
					"锁定高度",
					GlobalSettingConfig.chii_embedded_height_enable.key,
					GlobalSettingConfig.chii_embedded_height_enable.defaultValue,
					void 0,
					"开启后将自动覆盖面板高度"
				),
				UISlider(
					"高度设定",
					GlobalSettingConfig.chii_embedded_height.key,
					GlobalSettingConfig.chii_embedded_height.defaultValue,
					0,
					parseInt(window.innerHeight.toString()),
					(_, value) => {
						let $chobitsu = document.querySelector<HTMLElement>(
							".__chobitsu-hide__:has(iframe)"
						);
						$chobitsu && ($chobitsu.style.height = value + "px");
					},
					(value) => value + "px",
					"可覆盖当前页面Chii面板的高度",
					1
				),
			],
		},
	],
};
