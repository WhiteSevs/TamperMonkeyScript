import { $, DOMUtils, httpx, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import i18next from "i18next";
import Qmsg from "qmsg";
import * as OTPAuth from "otpauth";

export const GreasyforkAccount = {
  init() {
    Panel.execMenu("autoLogin", () => {
      this.autoLogin();
    });
  },

  /**
   * 自动登录
   */
  autoLogin() {
    DOMUtils.waitNode<HTMLAnchorElement>("span.sign-in-link a[rel=nofollow]").then(async () => {
      let user = Panel.getValue<string>("user");
      let pwd = Panel.getValue<string>("pwd");
      let secret = Panel.getValue<string>("secret");
      if (utils.isNull(user)) {
        Qmsg.error(i18next.t("请先在菜单中录入账号"));
        return;
      }
      if (utils.isNull(pwd)) {
        Qmsg.error(i18next.t("请先在菜单中录入密码"));
        return;
      }
      if (utils.isNull(secret)) {
        Qmsg.error(i18next.t("请先在菜单中录入secret"));
        return;
      }
      let csrfToken = $<HTMLElement>("meta[name='csrf-token']");
      if (!csrfToken) {
        Qmsg.error(i18next.t("获取csrf-token失败"));
        return;
      }
      let totp = new OTPAuth.TOTP({
        secret: secret,
      });
      let otpPwd = totp.generate();
      let loginTip = Qmsg.loading(i18next.t("正在登录中..."));
      let postResp = await httpx.post("/zh-CN/users/sign_in", {
        fetch: true,
        data: encodeURI(
          `authenticity_token=${csrfToken.getAttribute(
            "content"
          )}&user[email]=${user}&user[password]=${pwd}&user[remember_me]=1&user[otp_attempt]=${otpPwd}&commit=登录`
        ),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      loginTip.destroy();
      if (!postResp.status) {
        log.error(postResp);
        Qmsg.error(i18next.t("登录失败，请求异常"));
        return;
      }
      let respText = postResp.data.responseText;
      let $signInPageHTML = DOMUtils.toElement(respText, true, true);
      let $error = $signInPageHTML.querySelector<HTMLElement>(".width-constraint .alert");
      if ($signInPageHTML.querySelectorAll(".sign-out-link a[rel=nofollow][data-method='delete']").length) {
        Qmsg.success(i18next.t("登录成功，1s后自动跳转"));
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else if ($error) {
        log.error($error);
        Qmsg.error(DOMUtils.text($error));
      } else {
        Qmsg.error(i18next.t("登录失败，可能是账号/密码错误，请在控制台查看原因"), {
          consoleLogContent: true,
        });
        log.error(postResp);
        log.error(`当前账号:${user}`);
        log.error(`当前密码:${pwd}`);
      }
    });
  },
};
