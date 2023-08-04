// ==UserScript==
// @name         GreasyFork优化
// @version      0.7
// @description  自动登录、快捷寻找自己库被其他脚本引用、更新自己的脚本列表、库
// @author       WhiteSevs
// @icon         https://favicon.yandex.net/favicon/v2/https://greasyfork.org/?size=32
// @match        http*://*.greasyfork.org/*
// @run-at       document-start
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @connect      greasyfork.org
// @require	     https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.4.1/jquery.min.js
// @require      https://greasyfork.org/scripts/462234-message/code/Message.js?version=1198446
// @require      https://greasyfork.org/scripts/455186-whitesevsutils/code/WhiteSevsUtils.js?version=1230385
// ==/UserScript==

(function () {
  /* -----------------↓公共配置↓----------------- */
  const utils = Utils.noConflict();
  Qmsg.config({
    position: "top",
    html: true,
    maxNums: 4,
    autoClose: true,
    showClose: false,
    showReverse: false,
  });
  const log = new utils.Log(GM_info);
  const httpx = new utils.Httpx(GM_xmlhttpRequest);
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
  /* -----------------↑公共配置↑----------------- */



  /* -----------------↓函数区域↓----------------- */
  /**
   * GreasyFork的配置
   */
  const GreasyforkApi = {
    /**
     * 获取代码搜索地址
     * @param {string} url
     * @returns {string}
     */
    getCodeSearchUrl(url) {
      return "https://greasyfork.org/zh-CN/scripts/code-search?c=" + url;
    },
    /**
     * 获取管理地址
     * @param {string} url
     * @returns {string}
     */
    getAdminUrl(url) {
      return url + "/admin";
    },
  };

  /**
   * GreasyFork的菜单
   */
  const GreasyforkMenu = {
    menu: null,
    /**
     * 初始化菜单对象
     */
    initMenu() {
      this.menu = new utils.GM_Menu(
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
    },
    /**
     * 处理添加用户界面的菜单项
     */
    handleUserMenu() {
      if (!window.location.pathname.match(/\/.+\/users\/.+/gi)) {
        return;
      }
      log.success(["用户界面", this.menu]);
      this.menu.add({
        updateSettingsAndSynchronize_scriptList: {
          text: "⚙ 更新设置并同步【脚本列表】",
          callback: () => {
            let scriptUrlList = [];
            document
              .querySelectorAll("#user-script-list-section li a.script-link")
              .forEach((item) => {
                scriptUrlList = scriptUrlList.concat(
                  GreasyforkApi.getAdminUrl(item.href)
                );
              });
            if (utils.isNull(scriptUrlList)) {
              Qmsg.error("未获取到【脚本列表】");
            } else {
              Qmsg.success(
                "获取【脚本列表】 " + scriptUrlList.length + " 个，准备更新"
              );
              setTimeout(() => {
                window.location.href = scriptUrlList[0];
              }, 2500);
            }
            GM_setValue("isUpdate", true);
            GM_setValue("nextUrlList", scriptUrlList);
            GM_setValue("nextUrlIndex", 0);
          },
        },
        updateSettingsAndSynchronize_unlistedScriptList: {
          text: "⚙ 更新设置并同步【未上架的脚本】",
          callback: () => {
            let unlistedScriptUrlList = [];
            document
              .querySelectorAll("#user-unlisted-script-list li a.script-link")
              .forEach((item) => {
                unlistedScriptUrlList = unlistedScriptUrlList.concat(
                  GreasyforkApi.getAdminUrl(item.href)
                );
              });
            if (utils.isNull(unlistedScriptUrlList)) {
              Qmsg.error("未获取到【未上架的脚本】");
            } else {
              Qmsg.success(
                "获取【未上架的脚本】 " +
                  unlistedScriptUrlList.length +
                  " 个，准备更新"
              );
              setTimeout(() => {
                window.location.href = unlistedScriptUrlList[0];
              }, 2500);
            }
            GM_setValue("isUpdate", true);
            GM_setValue("nextUrlList", unlistedScriptUrlList);
            GM_setValue("nextUrlIndex", 0);
          },
        },
        updateSettingsAndSynchronize_libraryScriptList: {
          text: "⚙ 更新设置并同步【库】",
          callback: () => {
            let libraryScriptUrlList = [];
            document
              .querySelectorAll("#user-library-script-list li a.script-link")
              .forEach((item) => {
                libraryScriptUrlList = libraryScriptUrlList.concat(
                  GreasyforkApi.getAdminUrl(item.href)
                );
              });
            if (utils.isNull(libraryScriptUrlList)) {
              Qmsg.error("未获取到【库】");
            } else {
              Qmsg.success(
                "获取【库】 " + libraryScriptUrlList.length + " 个，准备更新"
              );
              setTimeout(() => {
                window.location.href = libraryScriptUrlList[0];
              }, 2500);
            }
            GM_setValue("isUpdate", true);
            GM_setValue("nextUrlList", libraryScriptUrlList);
            GM_setValue("nextUrlIndex", 0);
          },
        },
      });
    },
    /**
     * 入口
     */
    init() {
      this.initMenu();
      this.handleUserMenu();
    },
  };

  /**
   * GreasyFork的业务功能
   */
  const GreasyforkBusiness = {
    /**
     * 自动登录
     */
    autoLogin() {
      utils.waitNode("span.sign-in-link a[rel=nofollow]").then(async () => {
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
        let loginTip = Qmsg.loading("正在登录中...");
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
        loginTip.destroy();
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
    },
    /**
     * 设置代码搜索按钮(对于库)
     */
    setFindCodeSearchBtn() {
      utils.waitNode("ul#script-links li.current span").then(() => {
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
          window.location.href = GreasyforkApi.getCodeSearchUrl(url);
        });
      });
    },
    /**
     * 更新脚本
     */
    updateScript() {
      let nextUrlInfo = {
        /**
         * @type {[...string]} 需要更新的地址列表
         */
        nextUrlList: GM_getValue("nextUrlList", []),
        /**
         * @type {Number} 当前的地址列表下标
         */
        nextUrlIndex: GM_getValue("nextUrlIndex", 0),
        /**
         * @type {string|null} 下一个的URL
         */
        nextUrl: null,
        /**
         * @type {string} 当前url
         */
        currentUrl: decodeURIComponent(window.location.href),
        /**
         * @type {boolean} 是否是更新中
         */
        isUpdate: GM_getValue("isUpdate", false),
      };
      nextUrlInfo.nextUrl = decodeURIComponent(
        nextUrlInfo.nextUrlList[nextUrlInfo.nextUrlIndex]
      );
      if (!nextUrlInfo.isUpdate) {
        /* 标志位不是更新中 */
        return;
      }
      if (!nextUrlInfo.nextUrlList.length) {
        /* 没获取到更新列表 */
        return;
      }
      if (nextUrlInfo.currentUrl === nextUrlInfo.nextUrl) {
        nextUrlInfo.nextUrlIndex++;
        nextUrlInfo.nextUrl = decodeURIComponent(
          nextUrlInfo.nextUrlList[nextUrlInfo.nextUrlIndex]
        );
        if (nextUrlInfo.nextUrlIndex >= nextUrlInfo.nextUrlList.length) {
          Qmsg.success("当前为最后一个，结束");
          GM_deleteValue("nextUrlList");
          GM_deleteValue("nextUrlIndex");
          GM_deleteValue("isUpdate");
        } else {
          console.log("下一个的下标", nextUrlInfo.nextUrlIndex);
          console.log("下一个: ", nextUrlInfo.nextUrl);
          Qmsg.success("下一个: " + nextUrlInfo.nextUrl);
          GM_setValue("nextUrlIndex", nextUrlInfo.nextUrlIndex);
        }
        console.log("点击同步按钮");
        setTimeout(() => {
          let btnUpdateAndSync = document.querySelector(
            "input[name='update-and-sync']"
          ); /* 更新设置并立即同步按钮 */
          btnUpdateAndSync.click();
        }, 1000);
      } else {
        setTimeout(() => {
          Qmsg.success(
            `进度 ${nextUrlInfo.nextUrlIndex}/${nextUrlInfo.nextUrlList.length}`
          );
          window.location.href = nextUrlInfo.nextUrl;
        }, 1000);
      }
    },
    /**
     * 修复图片显示问题
     */
    repairImgShow() {
      if (window.innerWidth < window.innerHeight) {
        GM_addStyle(`
        img.lum-img{
          width: 100% !important;
          height: 100% !important;
        }
        `);
      }
    },
  };
  /* -----------------↑函数区域↑----------------- */



  /* -----------------↓执行入口↓----------------- */
  GreasyforkMenu.init();
  $(function () {
    if (GreasyforkMenu.menu.get("autoLogin")) {
      GreasyforkBusiness.autoLogin();
    }
    GreasyforkBusiness.setFindCodeSearchBtn();
    GreasyforkBusiness.updateScript();
    GreasyforkBusiness.repairImgShow();
  });
  /* -----------------↑执行入口↑----------------- */
})();
