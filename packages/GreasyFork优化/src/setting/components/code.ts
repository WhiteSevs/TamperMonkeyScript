import i18next from "i18next";
import { UISelect } from "../common-components/ui-select";
import { UISwitch } from "../common-components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";

const SettingUIOptimization: PopsPanelContentConfig = {
	id: "greasy-fork-panel-config-code",
	title: i18next.t("代码"),
	forms: [
		{
			text: "",
			type: "forms",
			forms: [
				UISwitch(
					i18next.t("添加复制代码按钮"),
					"addCopyCodeButton",
					true,
					void 0,
					i18next.t("更优雅的复制")
				),
				UISwitch(
					i18next.t("快捷键"),
					"fullScreenOptimization",
					true,
					void 0,
					i18next.t("【F】键全屏、【Alt+Shift+F】键宽屏")
				),
				UISwitch(
					i18next.t("修复代码行号显示"),
					"code-repairCodeLineNumber",
					true,
					void 0,
					i18next.t("修复代码行数超过1k行号显示不全问题")
				),
			],
		},
	],
};

export { SettingUIOptimization };
