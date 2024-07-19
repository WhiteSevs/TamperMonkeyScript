import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import i18next from "i18next";
import { UISwitch } from "../common-components/ui-switch";

export const SettingUIUsers: PopsPanelContentConfig = {
	id: "greasy-fork-panel-config-account",
	title: i18next.t("用户"),
	forms: [
		{
			text: "",
			type: "forms",
			forms: [
				{
					text: i18next.t("功能"),
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									i18next.t("迁移【控制台】到顶部导航栏"),
									"users-changeConsoleToTopNavigator",
									true,
									void 0,
									i18next.t("将【控制台】按钮移动到顶部导航栏，节省空间")
								),
							],
						},
					],
				},
			],
		},
	],
};
