import Qmsg from "qmsg";
import { UIButton } from "../common-components/ui-button";
import { UIInput } from "../common-components/ui-input";
import { UISwitch } from "../common-components/ui-switch";
import { PopsPanel } from "../setting";
import { GreasyforkMenu } from "@/main/GreasyforkMenu";
import { GreasyforkApi } from "@/api/GreasyForkApi";
import { GreasyforkRouter } from "@/router/GreasyforkRouter";
import i18next from "i18next";
import { UISelect } from "../common-components/ui-select";
import { DOMUtils, log, utils } from "@/env";
import { GreasyforkScriptsFilter } from "@/main/navigator/scripts/GreasyforkScriptsFilter";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UIButtonShortCut } from "../common-components/ui-button-shortcut";
import { GreasyforkShortCut } from "@/main/GreasyforkShortCut";

const SettingUIGeneral: PopsPanelContentConfig = {
	id: "greasy-fork-panel-config-account",
	title: i18next.t("通用"),
	forms: [
		{
			text: "",
			type: "forms",
			forms: [
				{
					text: i18next.t("Toast配置"),
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISelect(
									i18next.t("Toast位置"),
									"qmsg-config-position",
									"bottom",
									[
										{
											value: "topleft",
											text: i18next.t("左上角"),
										},
										{
											value: "top",
											text: i18next.t("顶部"),
										},
										{
											value: "topright",
											text: i18next.t("右上角"),
										},
										{
											value: "left",
											text: i18next.t("左边"),
										},
										{
											value: "center",
											text: i18next.t("中间"),
										},
										{
											value: "right",
											text: i18next.t("右边"),
										},
										{
											value: "bottomleft",
											text: i18next.t("左下角"),
										},
										{
											value: "bottom",
											text: i18next.t("底部"),
										},
										{
											value: "bottomright",
											text: i18next.t("右下角"),
										},
									],
									(event, isSelectValue, isSelectText) => {
										log.info("设置当前Qmsg弹出位置" + isSelectText);
									},
									i18next.t("Toast显示在页面九宫格的位置")
								),
								UISelect(
									i18next.t("最多显示的数量"),
									"qmsg-config-maxnums",
									3,
									[
										{
											value: 1,
											text: "1",
										},
										{
											value: 2,
											text: "2",
										},
										{
											value: 3,
											text: "3",
										},
										{
											value: 4,
											text: "4",
										},
										{
											value: 5,
											text: "5",
										},
									],
									void 0,
									i18next.t("限制Toast显示的数量")
								),
								UISwitch(
									i18next.t("逆序弹出"),
									"qmsg-config-showreverse",
									false,
									void 0,
									i18next.t("修改Toast弹出的顺序")
								),
							],
						},
					],
				},
				UISelect(
					i18next.t("语言"),
					"setting-language",
					"zh-CN",
					[
						{
							value: "zh-CN",
							text: "中文",
						},
						{
							value: "en-US",
							text: "English",
						},
					],
					(event, isSelectValue, isSelectText) => {
						log.info("改变语言：" + isSelectText);
						i18next.changeLanguage(isSelectValue);
					}
				),
			],
		},
		{
			text: "",
			type: "forms",
			forms: [
				{
					text: i18next.t("账号/密码"),
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UIInput(
									i18next.t("账号"),
									"user",
									"",
									void 0,
									void 0,
									i18next.t("请输入账号")
								),
								UIInput(
									i18next.t("密码"),
									"pwd",
									"",
									void 0,
									void 0,
									i18next.t("请输入密码"),
									false,
									true
								),
							],
						},
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									i18next.t("自动登录"),
									"autoLogin",
									true,
									void 0,
									i18next.t("自动登录当前保存的账号")
								),
								UIButton(
									i18next.t("清空账号/密码"),
									void 0,
									i18next.t("点击清空"),
									void 0,
									void 0,
									false,
									"default",
									(event) => {
										if (confirm(i18next.t("确定清空账号和密码？"))) {
											PopsPanel.deleteValue("user");
											PopsPanel.deleteValue("pwd");
											Qmsg.success(i18next.t("已清空账号/密码"));
											let $shadowRoot = (
												event.target as HTMLInputElement
											).getRootNode() as ShadowRoot;
											$shadowRoot.querySelector<HTMLInputElement>(
												`li[data-key="user"] .pops-panel-input input`
											)!.value = "";
											$shadowRoot.querySelector<HTMLInputElement>(
												`li[data-key="pwd"] .pops-panel-input input`
											)!.value = "";
										}
									}
								),
							],
						},
					],
				},
				{
					text: i18next.t("功能"),
					type: "deepMenu",
					forms: [
						{
							text: i18next.t("功能"),
							type: "forms",
							forms: [
								UISelect(
									i18next.t("固定当前语言"),
									"language-selector-locale",
									"",
									(function () {
										let result = [
											{
												value: "",
												text: i18next.t("无"),
											},
										];
										document
											.querySelectorAll<HTMLOptionElement>(
												"select#language-selector-locale option"
											)
											.forEach((element) => {
												let value = element.getAttribute("value") as string;
												if (value === "help") {
													return;
												}
												let text = (element.innerText ||
													element.textContent)!.trim();
												result.push({
													value: value,
													text: text,
												});
											});
										return result;
									})()
								),
								UISwitch(
									i18next.t("修复图片宽度显示问题"),
									"fixImageWidth",
									true,
									void 0,
									i18next.t("修复图片在移动端宽度超出浏览器宽度问题")
								),
								UISwitch(
									i18next.t("优化图片浏览"),
									"optimizeImageBrowsing",
									true,
									void 0,
									i18next.t("使用Viewer浏览图片")
								),
								UISwitch(
									i18next.t("覆盖图床图片跳转"),
									"overlayBedImageClickEvent",
									true,
									void 0,
									i18next.t("配合上面的【优化图片浏览】更优雅浏览图片")
								),
								UISwitch(
									i18next.t("添加【操作面板】按钮"),
									"scripts-addOperationPanelBtnWithNavigator",
									true,
									void 0,
									i18next.t("在脚本列表页面时为顶部导航栏添加【操作面板】按钮")
								),
								UISwitch(
									i18next.t("给Markdown添加【复制】按钮"),
									"addMarkdownCopyButton",
									true,
									void 0,
									i18next.t(
										"在Markdown内容右上角添加【复制】按钮，点击一键复制Markdown内容"
									)
								),
							],
						},
						{
							text: i18next.t("检测页面加载"),
							type: "forms",
							forms: [
								UISwitch(
									i18next.t("启用"),
									"checkPage",
									true,
									void 0,
									i18next.t(
										"检测Greasyfork页面是否正常加载，如加载失败则自动刷新页面"
									)
								),
								UISelect<number>(
									i18next.t("检测间隔"),
									"greasyfork-check-page-timeout",
									5,
									(() => {
										let result: {
											value: number;
											text: string;
										}[] = [];
										for (let index = 0; index < 5; index++) {
											result.push({
												value: index + 1,
												text: index + 1 + "s",
											});
										}
										return result;
									})(),
									void 0,
									i18next.t(
										"设置检测上次刷新页面的间隔时间，当距离上次刷新页面的时间超过设置的值，将不再刷新页面"
									)
								),
							],
						},
						{
							text: i18next.t("代码同步"),
							type: "forms",
							forms: [
								UIButton(
									i18next.t("源代码同步【脚本列表】"),
									void 0,
									i18next.t("一键同步"),
									void 0,
									void 0,
									false,
									"primary",
									(event) => {
										if (!GreasyforkRouter.isUserHome()) {
											PopsPanel.setValue(
												"goto_updateSettingsAndSynchronize_scriptList",
												true
											);
											if (GreasyforkMenu.getUserLinkElement()) {
												Qmsg.success(i18next.t("前往用户主页"));
												window.location.href =
													GreasyforkMenu.getUserLinkElement()!.href;
											} else {
												Qmsg.error(i18next.t("获取当前已登录的用户主页失败"));
											}
											return;
										}
										let scriptUrlList: string[] = [];
										document
											.querySelectorAll<HTMLAnchorElement>(
												"#user-script-list-section li a.script-link"
											)
											.forEach((item) => {
												scriptUrlList = scriptUrlList.concat(
													GreasyforkApi.getAdminUrl(item.href)
												);
											});
										GreasyforkMenu.updateScript(scriptUrlList);
									}
								),
								UIButton(
									i18next.t("源代码同步【未上架的脚本】"),
									void 0,
									i18next.t("一键同步"),
									void 0,
									void 0,
									false,
									"primary",
									(event) => {
										if (!GreasyforkRouter.isUserHome()) {
											PopsPanel.setValue(
												"goto_updateSettingsAndSynchronize_unlistedScriptList",
												true
											);
											if (GreasyforkMenu.getUserLinkElement()) {
												Qmsg.success(i18next.t("前往用户主页"));
												window.location.href =
													GreasyforkMenu.getUserLinkElement()!.href;
											} else {
												Qmsg.error(i18next.t("获取当前已登录的用户主页失败"));
											}
											return;
										}
										let scriptUrlList: string[] = [];
										document
											.querySelectorAll<HTMLAnchorElement>(
												"#user-unlisted-script-list li a.script-link"
											)
											.forEach((item) => {
												scriptUrlList = scriptUrlList.concat(
													GreasyforkApi.getAdminUrl(item.href)
												);
											});
										GreasyforkMenu.updateScript(scriptUrlList);
									}
								),
								UIButton(
									i18next.t("源代码同步【库】"),
									void 0,
									i18next.t("一键同步"),
									void 0,
									void 0,
									false,
									"primary",
									(event) => {
										if (!GreasyforkRouter.isUserHome()) {
											PopsPanel.setValue(
												"goto_updateSettingsAndSynchronize_libraryScriptList",
												true
											);
											if (GreasyforkMenu.getUserLinkElement()) {
												Qmsg.success(i18next.t("前往用户主页"));
												window.location.href =
													GreasyforkMenu.getUserLinkElement()!.href;
											} else {
												Qmsg.error(i18next.t("获取当前已登录的用户主页失败"));
											}
											return;
										}
										let scriptUrlList: string[] = [];
										document
											.querySelectorAll<HTMLAnchorElement>(
												"#user-library-script-list li a.script-link"
											)
											.forEach((item) => {
												scriptUrlList = scriptUrlList.concat(
													GreasyforkApi.getAdminUrl(item.href)
												);
											});
										GreasyforkMenu.updateScript(scriptUrlList);
									}
								),
							],
						},
					],
				},
				{
					text: i18next.t("美化"),
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									i18next.t("美化页面元素"),
									"beautifyPage",
									true,
									void 0,
									i18next.t("如button、input、textarea")
								),
								UISwitch(
									i18next.t("美化上传图片按钮"),
									"beautifyUploadImage",
									true,
									void 0,
									i18next.t("放大上传区域")
								),
								UISwitch(
									i18next.t("美化顶部导航栏"),
									"beautifyTopNavigationBar",
									true,
									void 0,
									i18next.t("可能会跟Greasyfork Beautify脚本有冲突")
								),
								UISwitch(
									i18next.t("美化Greasyfork Beautify脚本"),
									"beautifyGreasyforkBeautify",
									true,
									void 0,
									i18next.t(
										'需安装Greasyfork Beautify脚本，<a href="https://greasyfork.org/zh-CN/scripts/446849-greasyfork-beautify" target="_blank">🖐点我安装</a>'
									)
								),
							],
						},
					],
				},
				{
					type: "deepMenu",
					text: i18next.t("自定义快捷键"),
					forms: [
						{
							type: "forms",
							text: "",
							forms: [
								UIButtonShortCut(
									i18next.t("快捷键发表回复"),
									i18next.t("在输入框内按下快捷发表回复，例如：{{key}}", {
										key: "Ctrl + Enter",
									}),
									"gf-quickReply",
									{
										keyName: "Enter",
										keyValue: "13",
										ohterCodeList: ["ctrl"],
									},
									i18next.t("点击录入快捷键"),
									void 0,
									GreasyforkShortCut.shortCut
								),
							],
						},
					],
				},
			],
		},
	],
};

export { SettingUIGeneral };
