import i18next from "i18next";
import { UISwitch } from "@components/setting/components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";

export const SettingUIScripts: PopsPanelContentConfig = {
	id: "greasy-fork-panel-config-scripts",
	title: i18next.t("脚本"),
	forms: [
		{
			text: "",
			type: "forms",
			forms: [
				{
					text: i18next.t("代码"),
					type: "deepMenu",
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
									false,
									void 0,
									i18next.t("修复代码行数超过1k行号显示不全问题")
								),
								UISwitch(
									"monacoEditor",
									"code-use-monaco-editor",
									true,
									void 0,
									i18next.t("使用Monaco编辑器")
								),
							],
						},
					],
				},
				{
					text: i18next.t("历史版本"),
					type: "deepMenu",
					forms: [
						{
							text: i18next.t("功能"),
							type: "forms",
							forms: [
								UISwitch(
									i18next.t("添加额外的标签按钮"),
									"scripts-versions-addExtraTagButton",
									true,
									void 0,
									i18next.t("在版本下面添加【安装】、【查看代码】按钮")
								),
								UISwitch(
									i18next.t("添加代码对比按钮"),
									"scripts-versions-addCompareCodeButton",
									true,
									void 0,
									i18next.t("monacoEditor")
								),
							],
						},
						{
							text: i18next.t("美化"),
							type: "forms",
							forms: [
								UISwitch(
									i18next.t("美化历史版本页面"),
									"beautifyHistoryVersionPage",
									true,
									void 0,
									i18next.t("更直观的查看版本迭代")
								),
							],
						},
					],
				},
			],
		},
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
									i18next.t("添加【寻找引用】按钮"),
									"addFindReferenceButton",
									true,
									void 0,
									i18next.t("在脚本栏添加按钮，一般用于搜索引用该库的相关脚本")
								),
								UISwitch(
									i18next.t("添加【收藏】按钮"),
									"addCollectionButton",
									true,
									void 0,
									i18next.t("在脚本栏添加按钮，一般用于快捷收藏该脚本/库")
								),
								UISwitch(
									i18next.t("添加【今日检查】信息块"),
									"scriptHomepageAddedTodaySUpdate",
									true,
									void 0,
									i18next.t("在脚本信息栏添加【今日检查】信息块")
								),
							],
						},
					],
				},
			],
		},
	],
};
