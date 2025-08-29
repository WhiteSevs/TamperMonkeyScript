import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { UISelect } from "@components/setting/components/ui-select";
import { UISwitch } from "@components/setting/components/ui-switch";
import { GlobalSettingConfig } from "../config";

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
					GlobalSettingConfig.debugTool.key,
					GlobalSettingConfig.debugTool.defaultValue,
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
					GlobalSettingConfig.allowRunInIframe.key,
					GlobalSettingConfig.allowRunInIframe.defaultValue,
					void 0,
					"如果指定本脚本的容器并没有在iframe内执行本脚本，那么该功能将不会生效"
				),
				UISwitch(
					"主动加载调试工具",
					GlobalSettingConfig.autoLoadDebugTool.key,
					GlobalSettingConfig.autoLoadDebugTool.defaultValue,
					void 0,
					"关闭后将会在脚本菜单注册按钮，有3种状态【加载并显示调试工具】、【隐藏调试工具】、【显示调试工具】"
				),
			],
		},
		{
			type: "forms",
			text: "其它设置",
			forms: [
				UISwitch(
					"面板尺寸跟随浏览器窗口尺寸",
					"panel-ui-size-follow-browser-window",
					false,
					void 0,
					"如果开启，设置面板的宽高将使用outerWidth和outerHeight获取，如果关闭，则使用innerWidth和innerHeight获取"
				),
			],
		},
	],
};
