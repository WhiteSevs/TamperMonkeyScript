import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UISelect } from "../common-components/ui-select";
import { PanelSettingConfig } from "../panel-setting-config";
import { UISwitch } from "../common-components/ui-switch";

export const PanelUI_globalSetting: PopsPanelContentConfig = {
	id: "debug-panel-config-all",
	title: "总设置",
	headerTitle: "总设置",
	forms: [
		{
			text: "功能",
			type: "forms",
			forms: [
				UISelect(
					"调试工具",
					PanelSettingConfig.debugTool.key,
					PanelSettingConfig.debugTool.defaultValue,
					[
						{
							value: "eruda",
							text: "Eruda",
						},
						{
							value: "vconsole",
							text: "VConsole",
						},
						{
							value: "pagespy",
							text: "PageSpy",
						},
						{
							value: "chii",
							text: "Chii",
						},
					],
					void 0,
					void 0
				),
				UISwitch(
					"允许在iframe内加载",
					PanelSettingConfig.allowRunInIframe.key,
					PanelSettingConfig.allowRunInIframe.defaultValue,
					void 0,
					"如果指定本脚本的容器并没有在iframe内执行本脚本，那么该功能将不会生效"
				),
				UISwitch(
					"主动加载调试工具",
					PanelSettingConfig.autoLoadDebugTool.key,
					PanelSettingConfig.autoLoadDebugTool.defaultValue,
					void 0,
					"关闭后将会在脚本菜单注册按钮，有3种状态【加载并显示调试工具】、【隐藏调试工具】、【显示调试工具】"
				),
			],
		},
	],
};
