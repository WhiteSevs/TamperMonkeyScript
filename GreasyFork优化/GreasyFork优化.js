// ==UserScript==
// @name        GreasyFork优化
// @version      0.1
// @description  自动登录、快捷寻找自己库被其他脚本引用
// @author       WhiteSevs
// @icon        https://favicon.yandex.net/favicon/v2/https://greasyfork.org/?size=32
// @match       http*://*.greasyfork.org/*
// @run-at       document-start
// @license      GPL-3.0-only
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @connect      *
// @connect      greasyfork.org
// @require	     https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.4.1/jquery.min.js
// @require      https://greasyfork.org/scripts/462234-message/code/Message.js
// @require      https://greasyfork.org/scripts/455186-whitesevsutils/code/WhiteSevsUtils.js
// ==/UserScript==

(function () {
  Qmsg.config({
    position: "top",
    html: true,
    maxNums: 4,
    autoClose: true,
    showClose: false,
    showReverse: false,
  });
  let log = new Utils.Log(GM_info);
  let httpx = new Utils.Httpx(GM_xmlhttpRequest);
  httpx.config({
    onabort: function () {
      Qmsg.error("请求被取消");
    },
    ontimeout: function () {
      Qmsg.error("请求超时");
    },
    onerror: function (response) {
      Qmsg.error("请求异常");
      log.error(["httpx-onerror", response]);
    },
  });

  let GM_Menu = new Utils.GM_Menu(
    {
      enterAccount_Password: {
        text: "录入账号/密码",
        enable: false,
        showText: (_text_, _enable_) => {
          let user = GM_getValue("user");
          if (user) {
            return `账号:${user} 点击重新录入`;
          } else {
            return "录入账号/密码";
          }
        },
        callback: () => {
          let user = prompt("请输入GreasyFork的账号");
          if (!user) {
            Qmsg.error("取消输入账号");
            return;
          }
          if (user && user.trim() === "") {
            Qmsg.error("输入为空或纯空格");
            return;
          }
          let pwd = prompt("请输入GreasyFork的密码");

          if (!pwd) {
            Qmsg.error("取消输入密码");
            return;
          }
          if (pwd && pwd.trim() === "") {
            Qmsg.error("输入为空或纯空格");
            return;
          }
          GM_setValue("user", user);
          GM_setValue("pwd", pwd);
          Qmsg.success("成功录入账号/密码");
        },
      },
      clearAccount_Password: {
        text: "清空账号/密码",
        enable: false,
        showText: (_text_, _enable_) => {
          return `${_enable_ ? "✅" : "❌"} ${_text_}`;
        },
        callback: () => {
          Qmsg.success("已清空账号/密码");
        },
      },
      autoLogin: {
        text: "自动登录",
        enable: true,
        showText: (_text_, _enable_) => {
          return `${_enable_ ? "✅" : "❌"} ${_text_}`;
        },
      },
    },
    false,
    GM_getValue,
    GM_setValue,
    GM_registerMenuCommand,
    GM_unregisterMenuCommand
  );

  /**
   * GreasyFork的
   * 配置
   */
  let greasyforkConfig = {
    codeSearchURL: "https://greasyfork.org/zh-CN/scripts/code-search?c=",
  };

  /**
   * 自动登录
   */
  function autoLogin() {
    Utils.waitNode("span.sign-in-link a[rel=nofollow]").then(async () => {
      let user = GM_getValue("user", null);
      let pwd = GM_getValue("pwd", null);
      if (!user) {
        Qmsg.error("请在菜单中录入账号");
        return;
      }
      if (!pwd) {
        Qmsg.error("请在菜单中录入密码");
        return;
      }
      let csrfToken = document.querySelector("meta[name='csrf-token']");
      if (!csrfToken) {
        Qmsg.error("获取csrf-token失败");
        return;
      }
      let postResp = await httpx.post({
        url: "https://greasyfork.org/zh-CN/users/sign_in",
        data: encodeURI(
          `authenticity_token=${csrfToken.getAttribute(
            "content"
          )}&user[email]=${user}&user[password]=${pwd}&user[remember_me]=1&commit=登录`
        ),
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          origin: "https://greasyfork.org",
          referer:
            "https://greasyfork.org/zh-CN/users/sign_in?return_to=%2Fzh-CN",
        },
      });
      if (!postResp.status) {
        log.error(postResp);
        Qmsg.success("登录失败，请在控制台查看原因");
        return;
      }
      let parseLoginHTMLNode = $(postResp.data.responseText);
      if (
        parseLoginHTMLNode.find(
          ".sign-out-link a[rel=nofollow][data-method='delete']"
        ).length
      ) {
        Qmsg.success("登录成功，1s后自动跳转");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        log.error(postResp);
        log.error(`当前账号:${user}`);
        log.error(`当前密码:${pwd}`);
        Qmsg.error("登录失败，可能是账号/密码错误，请在控制台查看原因");
      }
    });
  }

  /**
   * 设置代码搜索按钮(对于库)
   */
  function setFindCodeSearchBtn() {
    Utils.waitNode("ul#script-links li.current span").then(() => {
      let searchBtn = $(`
      <li><a href="javascript:;"><span>寻找引用</span></a></li>
     `);
      $("ul#script-links").append(searchBtn);
      searchBtn.on("click", async function () {
        let scriptId = window.location.pathname.match(/scripts\/([\d]+)/i);
        if (!scriptId) {
          log.error([scriptId, window.location.pathname]);
          Qmsg.error("获取脚本id失败");
          return;
        }
        scriptId = scriptId[scriptId.length - 1];
        let getResp = await httpx.get({
          url: `https://greasyfork.org/zh-CN/scripts/${scriptId}.json`,
          responseType: "json",
        });
        if (!getResp.status) {
          Qmsg.error("请求脚本信息JSON失败");
          return;
        }
        let url = getResp.data.response.code_url;
        url = url.replace(/\?version.*/gi, "");
        url = url.replace(/^http(s|):\/\//gi, "");
        url = encodeURI(url);
        window.location.href = greasyforkConfig.codeSearchURL + url;
      });
    });
  }
  $(function () {
    if (GM_Menu.get("autoLogin")) {
      autoLogin();
    }
    setFindCodeSearchBtn();
  });
})();
