import { DOMUtils, httpx, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import i18next from "i18next";
import Qmsg from "qmsg";

const GreasyforkAccount = {
	init() {
		PopsPanel.execMenu("autoLogin", () => {
			this.autoLogin();
		});
	},

	/**
	 * 自动登录
	 */
	autoLogin() {
		utils
			.waitNode<HTMLAnchorElement>("span.sign-in-link a[rel=nofollow]")
			.then(async () => {
				let user = PopsPanel.getValue("user");
				let pwd = PopsPanel.getValue("pwd");
				if (utils.isNull(user)) {
					Qmsg.error(i18next.t("请先在菜单中录入账号"));
					return;
				}
				if (utils.isNull(pwd)) {
					Qmsg.error(i18next.t("请先在菜单中录入密码"));
					return;
				}
				let csrfToken = document.querySelector("meta[name='csrf-token']");
				if (!csrfToken) {
					Qmsg.error(i18next.t("获取csrf-token失败"));
					return;
				}
				let loginTip = Qmsg.loading(i18next.t("正在登录中..."));
				let postResp = await httpx.post(
					"https://greasyfork.org/zh-CN/users/sign_in",
					{
						fetch: true,
						data: encodeURI(
							`authenticity_token=${csrfToken.getAttribute(
								"content"
							)}&user[email]=${user}&user[password]=${pwd}&user[remember_me]=1&commit=登录`
						),
						headers: {
							"Content-Type": "application/x-www-form-urlencoded",
						},
					}
				);
				loginTip.destroy();
				if (!postResp.status) {
					log.error(postResp);
					Qmsg.error(i18next.t("登录失败，请在控制台查看原因"));
					return;
				}
				let respText = postResp.data.responseText;
				let parseLoginHTMLNode = DOMUtils.parseHTML(respText, true, true);
				if (
					parseLoginHTMLNode.querySelectorAll(
						".sign-out-link a[rel=nofollow][data-method='delete']"
					).length
				) {
					Qmsg.success(i18next.t("登录成功，1s后自动跳转"));
					setTimeout(() => {
						window.location.reload();
					}, 1000);
				} else {
					log.error(postResp);
					log.error(`当前账号:${user}`);
					log.error(`当前密码:${pwd}`);
					Qmsg.error(
						i18next.t("登录失败，可能是账号/密码错误，请在控制台查看原因")
					);
				}
			});
	},
};

export { GreasyforkAccount };
