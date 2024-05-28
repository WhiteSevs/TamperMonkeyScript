import Qmsg from "qmsg";
import { UIButton } from "../common-components/ui-button";
import { UIInput } from "../common-components/ui-input";
import { UISwitch } from "../common-components/ui-switch";
import { PopsPanel } from "../setting";
import { GreasyforkMenu } from "@/main/GreasyforkMenu";
import { GreasyforkApi } from "@/api/GreasyForkApi";
import { GreasyforkRouter } from "@/router/GreasyforkRouter";

const SettingUIAccount: PopsPanelContentConfig = {
	id: "greasy-fork-panel-config-account",
	title: "账号",
	forms: [
		{
			text: "账号/密码",
			type: "forms",
			forms: [
				UIInput("账号", "user", "", void 0, void 0, "请输入账号"),
				UIInput("密码", "pwd", "", void 0, void 0, "请输入密码", false, true),
			],
		},
		{
			text: "功能",
			type: "forms",
			forms: [
				UISwitch(
					"自动登录",
					"autoLogin",
					true,
					void 0,
					"自动登录当前保存的账号"
				),
				UIButton(
					"清空账号/密码",
					void 0,
					"点击清空",
					void 0,
					void 0,
					false,
					"default",
					(event) => {
						if (confirm("确定清空账号和密码？")) {
							PopsPanel.deleteValue("user");
							PopsPanel.deleteValue("pwd");
							Qmsg.success("已清空账号/密码");
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
					"源代码同步【脚本列表】",
					void 0,
					"一键同步",
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
								Qmsg.success("前往用户主页");
								window.location.href =
									GreasyforkMenu.getUserLinkElement()!.href;
							} else {
								Qmsg.error("获取当前已登录的用户主页失败");
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
					"源代码同步【未上架的脚本】",
					void 0,
					"一键同步",
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
								Qmsg.success("前往用户主页");
								window.location.href =
									GreasyforkMenu.getUserLinkElement()!.href;
							} else {
								Qmsg.error("获取当前已登录的用户主页失败");
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
					"源代码同步【库】",
					void 0,
					"一键同步",
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
								Qmsg.success("前往用户主页");
								window.location.href =
									GreasyforkMenu.getUserLinkElement()!.href;
							} else {
								Qmsg.error("获取当前已登录的用户主页失败");
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

export { SettingUIAccount };
