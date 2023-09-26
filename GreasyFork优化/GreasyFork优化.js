// ==UserScript==
// @name         GreasyFork优化
// @namespace    https://greasyfork.org/zh-CN/scripts/475722
// @supportURL   https://greasyfork.org/zh-CN/scripts/475722/feedback
// @version      2023.9.26.18
// @description  自动登录、快捷寻找自己库被其他脚本引用、更新自己的脚本列表、库、优化图片浏览
// @author       WhiteSevs
// @license      MIT
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
// @require      https://greasyfork.org/scripts/449471-viewer/code/Viewer.js?version=1249086
// @require      https://greasyfork.org/scripts/462234-message/code/Message.js?version=1252081
// @require      https://greasyfork.org/scripts/455186-whitesevsutils/code/WhiteSevsUtils.js?version=1256418
// @require      https://greasyfork.org/scripts/465772-domutils/code/DOMUtils.js?version=1256298
// ==/UserScript==

(function () {
  /* -----------------↓公共配置↓----------------- */
  /**
   * @type {import("../库/Utils")}
   */
  const utils = window.Utils.noConflict();
  /**
   * @type {import("../库/DOMUtils")}
   */
  const DOMUtils = window.DOMUtils.noConflict();
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
    /**
     * @class
     */
    menu: new utils.GM_Menu({
      GM_getValue,
      GM_setValue,
      GM_registerMenuCommand,
      GM_unregisterMenuCommand,
    }),
    /**
     * 当前是否已登录
     */
    isLogin: false,
    /**
     * 初始化菜单对象
     */
    initMenu() {
      this.menu.add([
        {
          key: "enterAccount_Password",
          text: "录入账号/密码",
          showText(_text_, _enable_) {
            let user = GM_getValue("user");
            if (user) {
              return `账号:${user} 点击重新录入`;
            } else {
              return "录入账号/密码";
            }
          },
          callback() {
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
        {
          key: "clearAccount_Password",
          text: "⚙ 清空账号/密码",
          showText(text) {
            return text;
          },
          callback() {
            if (confirm("确定清空账号和密码？")) {
              GM_deleteValue("user");
              GM_deleteValue("pwd");
              Qmsg.success("已清空账号/密码");
            }
          },
        },
        {
          key: "autoLogin",
          text: "自动登录",
          enable: true,
        },
      ]);
    },
    /**
     * 初始化环境变量
     */
    initEnv() {
      let userLinkElement = this.getUserLinkElement();
      this.isLogin = Boolean(userLinkElement);
    },
    /**
     * 获取当前登录用户的a标签元素
     * @returns {?HTMLElement}
     */
    getUserLinkElement() {
      return document.querySelector("#nav-user-info span.user-profile-link a");
    },
    /**
     * 处理添加用户界面的菜单项
     */
    handleUserMenu() {
      log.success(["用户界面", this.menu]);
      this.menu.add([
        {
          key: "updateSettingsAndSynchronize_scriptList",
          text: "⚙ 更新设置并同步【脚本列表】",
          showText(text) {
            return text;
          },
          callback() {
            if (!window.location.pathname.match(/\/.+\/users\/.+/gi)) {
              GM_setValue("goto_updateSettingsAndSynchronize_scriptList", true);
              if (GreasyforkMenu.getUserLinkElement()) {
                Qmsg.success("前往用户主页");
                window.location.href = GreasyforkMenu.getUserLinkElement().href;
              } else {
                Qmsg.error("获取当前已登录的用户主页失败");
              }
              return;
            }
            let scriptUrlList = [];
            document
              .querySelectorAll("#user-script-list-section li a.script-link")
              .forEach((item) => {
                scriptUrlList = scriptUrlList.concat(
                  GreasyforkApi.getAdminUrl(item.href)
                );
              });
            GreasyforkMenu.updateScript(scriptUrlList);
          },
        },
        {
          key: "updateSettingsAndSynchronize_unlistedScriptList",
          text: "⚙ 更新设置并同步【未上架的脚本】",
          showText(text) {
            return text;
          },
          callback() {
            if (!window.location.pathname.match(/\/.+\/users\/.+/gi)) {
              GM_setValue(
                "goto_updateSettingsAndSynchronize_unlistedScriptList",
                true
              );
              if (GreasyforkMenu.getUserLinkElement()) {
                Qmsg.success("前往用户主页");
                window.location.href = GreasyforkMenu.getUserLinkElement().href;
              } else {
                Qmsg.error("获取当前已登录的用户主页失败");
              }
              return;
            }
            let scriptUrlList = [];
            document
              .querySelectorAll("#user-unlisted-script-list li a.script-link")
              .forEach((item) => {
                scriptUrlList = scriptUrlList.concat(
                  GreasyforkApi.getAdminUrl(item.href)
                );
              });
            GreasyforkMenu.updateScript(scriptUrlList);
          },
        },
        {
          key: "updateSettingsAndSynchronize_libraryScriptList",
          text: "⚙ 更新设置并同步【库】",
          showText(text) {
            return text;
          },
          callback() {
            if (!window.location.pathname.match(/\/.+\/users\/.+/gi)) {
              GM_setValue(
                "goto_updateSettingsAndSynchronize_libraryScriptList",
                true
              );
              if (GreasyforkMenu.getUserLinkElement()) {
                Qmsg.success("前往用户主页");
                window.location.href = GreasyforkMenu.getUserLinkElement().href;
              } else {
                Qmsg.error("获取当前已登录的用户主页失败");
              }
              return;
            }
            let scriptUrlList = [];
            document
              .querySelectorAll("#user-library-script-list li a.script-link")
              .forEach((item) => {
                scriptUrlList = scriptUrlList.concat(
                  GreasyforkApi.getAdminUrl(item.href)
                );
              });
            GreasyforkMenu.updateScript(scriptUrlList);
          },
        },
      ]);
    },
    /**
     * 将要更新的脚本存储到本地
     * @param {[...string]} scriptUrlList
     */
    updateScript(scriptUrlList) {
      if (utils.isNull(scriptUrlList)) {
        Qmsg.error("未获取到【脚本列表】");
        GM_deleteValue("isUpdate");
        GM_deleteValue("nextUrlList");
        GM_deleteValue("nextUrlIndex");
      } else {
        Qmsg.success(
          "获取【脚本列表】 " + scriptUrlList.length + " 个，准备更新"
        );
        GM_setValue("isUpdate", true);
        GM_setValue("nextUrlList", scriptUrlList);
        GM_setValue("nextUrlIndex", 0);
        setTimeout(() => {
          window.location.href = scriptUrlList[0];
        }, 2500);
      }
    },
    /**
     * 处理本地的goto事件
     */
    handleLocalGotoCallBack() {
      if (GM_getValue("goto_updateSettingsAndSynchronize_scriptList")) {
        let menuCallBack = this.menu.getCallBack(
          "updateSettingsAndSynchronize_scriptList"
        );
        GM_deleteValue("goto_updateSettingsAndSynchronize_scriptList");
        menuCallBack();
      } else if (
        GM_getValue("goto_updateSettingsAndSynchronize_unlistedScriptList")
      ) {
        let menuCallBack = this.menu.getCallBack(
          "updateSettingsAndSynchronize_unlistedScriptList"
        );
        GM_deleteValue("goto_updateSettingsAndSynchronize_unlistedScriptList");
        menuCallBack();
      } else if (
        GM_getValue("goto_updateSettingsAndSynchronize_libraryScriptList")
      ) {
        let menuCallBack = this.menu.getCallBack(
          "updateSettingsAndSynchronize_libraryScriptList"
        );
        GM_deleteValue("goto_updateSettingsAndSynchronize_libraryScriptList");
        menuCallBack();
      }
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
        let postResp = null;
        try {
          postResp = await fetch("https://greasyfork.org/zh-CN/users/sign_in", {
            method: "POST",
            body: encodeURI(
              `authenticity_token=${csrfToken.getAttribute(
                "content"
              )}&user[email]=${user}&user[password]=${pwd}&user[remember_me]=1&commit=登录`
            ),
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          });
        } catch (error) {
          log.error(error);
          Qmsg.error("请求失败，请在控制台查看原因");
          return;
        }
        loginTip.destroy();
        if (!postResp.ok) {
          log.error(postResp);
          Qmsg.error("登录失败，请在控制台查看原因");
          return;
        }
        let respText = await postResp.text();
        let parseLoginHTMLNode = DOMUtils.parseHTML(respText, true, true);
        if (
          parseLoginHTMLNode.querySelectorAll(
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
        let searchBtn = DOMUtils.createElement("li", {
          innerHTML: `<a href="javascript:;"><span>寻找引用</span></a>`,
        });
        DOMUtils.append(document.querySelector("ul#script-links"), searchBtn);
        DOMUtils.on(searchBtn, "click", async function () {
          let scriptId = window.location.pathname.match(/scripts\/([\d]+)/i);
          if (!scriptId) {
            log.error([scriptId, window.location.pathname]);
            Qmsg.error("获取脚本id失败");
            return;
          }
          scriptId = scriptId[scriptId.length - 1];
          let getResp = null;
          try {
            getResp = await fetch(
              `https://greasyfork.org/zh-CN/scripts/${scriptId}.json`,
              {
                responseType: "json",
              }
            );
          } catch (error) {
            Qmsg.error("请求失败，请在控制台查看原因");
            return;
          }
          if (!getResp.ok) {
            Qmsg.error("获取脚本信息JSON失败");
            return;
          }
          let respData = await getResp.json();
          if (!respData) {
            Qmsg.error("解析fetch的JSON失败");
            return;
          }
          let url = respData.code_url;
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
          log.info(["下一个的下标：", nextUrlInfo.nextUrlIndex]);
          log.info(["下一个：", nextUrlInfo.nextUrl]);
          Qmsg.success("下一个: " + nextUrlInfo.nextUrl);
          GM_setValue("nextUrlIndex", nextUrlInfo.nextUrlIndex);
        }
        log.success("1秒后点击同步按钮");
        setTimeout(() => {
          let btnUpdateAndSync = document.querySelector(
            "input[name='update-and-sync']"
          );
          /* 更新设置并立即同步按钮 */
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
    /**
     * 修复代码的行号显示不够问题
     * 超过1w行不会高亮代码
     */
    repairCodeLineNumber() {
      if (!window.location.pathname.split("/")?.includes("code")) {
        return;
      }
      utils
        .waitNode("#script-content div.code-container pre.prettyprint ol")
        .then((nodeList) => {
          if (nodeList[0].childElementCount >= 1000) {
            log.success(
              `当前代码行数${nodeList[0].childElementCount}行，超过1000行，优化行号显示问题`
            );
            GM_addStyle(`
          pre.prettyprint{
            padding-left: 10px;
            font-family: Monaco,Consolas,'Lucida Console','Courier New',serif;
            font-size: 12px;
          }
          `);
          }
        });
    },
    /**
     * 优化图片浏览
     */
    optimizeImageBrowsing() {
      GM_addStyle(`
      @media (max-width: 460px) {
        .lum-lightbox-image-wrapper {
            display:flex;
            overflow: auto;
            -webkit-overflow-scrolling: touch
        }
    
        .lum-lightbox-caption {
            width: 100%;
            position: absolute;
            bottom: 0
        }
    
        .lum-lightbox-position-helper {
            margin: auto
        }
    
        .lum-lightbox-inner img {
            max-width:100%;
            max-height:100%;
        }
      }
      `);
      /**
       * 查看图片
       * @param {Array} imgList
       * @param {Number} _index_
       */
      function viewIMG(imgList = [], _index_ = 0) {
        let viewerULNodeHTML = "";
        imgList.forEach((item) => {
          viewerULNodeHTML += `<li><img data-src="${item}" loading="lazy"></li>`;
        });
        let viewerULNode = DOMUtils.createElement("ul", {
          innerHTML: viewerULNodeHTML,
        });
        /**
         * @type {import("../库/Viewer")}
         */
        let viewer = new Viewer(viewerULNode, {
          inline: false,
          url: "data-src",
          zIndex: utils.getMaxZIndex() + 100,
          hidden: () => {
            viewer.destroy();
          },
        });
        _index_ = _index_ < 0 ? 0 : _index_;
        viewer.view(_index_);
        viewer.zoomTo(1);
        viewer.show();
      }
      DOMUtils.on(document, "click", "img", function (event) {
        let clickElement = event.target;
        /* 在超链接标签里 */
        if (clickElement?.parentElement?.localName === "a") {
          return;
        }
        /* Viewer的图片浏览 */
        if (
          clickElement?.parentElement?.className === "viewer-canvas" ||
          clickElement?.parentElement?.hasAttribute("data-viewer-action")
        ) {
          return;
        }
        /* GreasFork自带的图片浏览 */
        if (
          clickElement?.parentElement?.className ===
          "lum-lightbox-position-helper"
        ) {
          return;
        }
        let imgSrc =
          clickElement.getAttribute("src") ||
          clickElement.getAttribute("data-src") ||
          clickElement.getAttribute("alt");
        log.success(["点击浏览图片👉", imgSrc]);
        viewIMG([imgSrc]);
      });
    },
  };
  /* -----------------↑函数区域↑----------------- */

  /* -----------------↓执行入口↓----------------- */
  GreasyforkMenu.init();
  DOMUtils.ready(function () {
    GreasyforkMenu.initEnv();
    if (GreasyforkMenu.menu.get("autoLogin")) {
      GreasyforkBusiness.autoLogin();
    }
    GreasyforkMenu.handleLocalGotoCallBack();
    GreasyforkBusiness.setFindCodeSearchBtn();
    GreasyforkBusiness.updateScript();
    GreasyforkBusiness.repairImgShow();
    GreasyforkBusiness.repairCodeLineNumber();
    GreasyforkBusiness.optimizeImageBrowsing();
  });
  /* -----------------↑执行入口↑----------------- */
})();
