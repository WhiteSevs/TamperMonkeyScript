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
import { log } from "@/env";

const SettingUIGeneral: PopsPanelContentConfig = {
	id: "greasy-fork-panel-config-account",
	title: i18next.t("通用"),
	forms: [
		{
			text: i18next.t("账号/密码"),
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
			text: i18next.t("Toast配置"),
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
		{
			text: i18next.t("脚本配置"),
			type: "forms",
			forms: [
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
			text: i18next.t("功能"),
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
};

export { SettingUIGeneral };
