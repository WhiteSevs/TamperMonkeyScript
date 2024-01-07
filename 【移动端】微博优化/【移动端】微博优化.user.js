// ==UserScript==
// @name         【移动端】微博优化
// @icon         https://favicon.yandex.net/favicon/v2/https://m.weibo.cn/?size=32
// @namespace    https://greasyfork.org/zh-CN/scripts/480094
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @version      2024.1.7
// @description  劫持自动跳转登录，修复用户主页正确跳转
// @author       WhiteSevs
// @license      MIT
// @match        *://m.weibo.cn/*
// @run-at       document-start
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_info
// @connect      m.weibo.cn
// @require      https://update.greasyfork.org/scripts/455186/1307823/WhiteSevsUtils.js
// ==/UserScript==

(function () {
  /* -----------------↓公共配置↓----------------- */
  /**
   * @type {import("../库/Utils")}
   */
  const utils = window.Utils.noConflict();
  const log = new utils.Log(GM_info);
  log.config({
    debug: false,
  });
  /* -----------------↑公共配置↑----------------- */

  /* -----------------↓函数区域↓----------------- */

  const WeiBoMenu = {
    /**
     * @class
     */
    menu: new utils.GM_Menu({
      GM_getValue,
      GM_setValue,
      GM_registerMenuCommand,
      GM_unregisterMenuCommand,
    }),
    initMenu() {
      this.menu.add([
        {
          key: "weibo_shield_bottom_bar",
          text: "【屏蔽】底部工具栏(聊天/关注)",
        },
        {
          key: "weibo_masquerade_as_logged_in",
          text: "伪装已登录",
        },
        {
          key: "weibo_hijack_jump_login",
          text: "劫持跳转登录",
        },
      ]);
    },
    startMenuFunc() {
      if (this.menu.get("weibo_shield_bottom_bar")) {
        log.success(this.menu.getShowTextValue("weibo_shield_bottom_bar"));
        GM_addStyle(`
        #app div.m-tab-bar.m-bar-panel.m-container-max{
            display: none !important;
        }`);
      }
      if (this.menu.get("weibo_hijack_jump_login")) {
        log.success(this.menu.getShowTextValue("weibo_hijack_jump_login"));
        WebBoHijack.hijackApply();
      }
    },
  };

  const WeiBoBusiness = {
    /**
     * 添加去广告CSS
     */
    addRemoveAdsCSS() {
      GM_addStyle(`
      /* 底部中间的 登录/注册按钮 */
      #app div.main-wrap div.login-box,
      /* 主内容底部的小程序横幅推荐 */
      #app > div.lite-page-wrap > div > div.main > div > div.wrap{
        display: none !important;
      }`);
    },
  };

  const WebBoHijack = {
    /**
     * 劫持Function.prototype.apply;
     */
    hijackApply() {
      let originApply = Function.prototype.apply;
      Function.prototype.apply = function () {
        if (arguments.length !== 2) {
          return originApply.call(this, ...arguments);
        }
        if (arguments.length === 2 && !Array.isArray(arguments[1])) {
          return originApply.call(this, ...arguments);
        }
        if (typeof arguments[1][0] !== "string") {
          return originApply.call(this, ...arguments);
        }
        /**
         * @type {string}
         */
        const ApiPath = arguments[1][0];
        /**
         * @type {object}
         */
        const ApiSearchParams = arguments[1]?.[1]?.["params"];
        if (ApiPath === "api/attitudes/create") {
          log.success("拦截跳转登录");
          return new Promise((resolve) => {
            resolve({
              data: {},
            });
          });
        } else if (ApiPath === "api/likes/update") {
          log.success("拦截点赞跳转登录");
          return new Promise((resolve) => {
            resolve({
              data: {},
            });
          });
        } else if (ApiPath === "api/comments/create") {
          log.success("拦截评论跳转登录");
          return new Promise((resolve) => {
            resolve({
              data: {},
            });
          });
        } else if (ApiPath === "api/friendships/create") {
          log.success("拦截关注跳转登录");
          return new Promise((resolve) => {
            resolve({
              data: {},
            });
          });
        } else if (ApiPath === "api/comments/reply") {
          log.success("拦截回复跳转登录");
          return new Promise((resolve, reject) => {
            /* 伪装发送成功 */
            debugger;
            resolve({
              data: {
                ok: 200,
              },
            });
          });
        } else if (ApiPath.startsWith("profile/info")) {
          log.success(["拦截跳转xx微博主页", ApiSearchParams]);
          let uidHomeUrl = `https://weibo.com/${ApiSearchParams["uid"]}`;
          log.success("跳转微博主页：" + uidHomeUrl);
          window.location.href = uidHomeUrl;
          return null;
        } else if (ApiPath === "comments/hotflow") {
          if (
            !(
              "id" in ApiSearchParams &&
              "max_id_type" in ApiSearchParams &&
              "mid" in ApiSearchParams
            ) ||
            ("id" in ApiSearchParams &&
              "max_id" in ApiSearchParams &&
              "max_id_type" in ApiSearchParams &&
              "mid" in ApiSearchParams)
          ) {
            log.success(["拦截下拉加载更多评论跳转登录", ApiSearchParams]);
            return new Promise((resolve) => {
              resolve({
                ok: 1,
                data: {
                  data: [],
                  total_number: 0,
                },
              });
            });
          }
        } else if (ApiPath === "comments/hotFlowChild") {
          if ("max_id" in ApiSearchParams && ApiSearchParams["max_id"] !== 0) {
            log.success([
              "拦截评论中的评论下拉加载更多评论跳转登录",
              ApiSearchParams,
            ]);
            return new Promise((resolve) => {
              resolve({
                data: {
                  ok: 1,
                  data: [],
                  rootComment: [],
                  total_number: 0,
                },
              });
            });
          }
        } else if (ApiPath === "api/statuses/repostTimeline") {
          log.success(["拦截查看转发数据，因为需登录", ApiSearchParams]);
          return new Promise((resolve) => {
            resolve({
              data: {
                ok: 1,
                data: {
                  data: [],
                  total_number: 0,
                },
              },
            });
          });
        } else {
          log.info(["请求API：", ApiPath, ApiSearchParams]);
        }
        return originApply.call(this, ...arguments);
      };
    },
    /**
     * 拦截网络
     */
    hijackNetWork() {
      let ajaxHooker = utils.ajaxHooker();
      ajaxHooker.hook(function (request) {
        log.info(request.url);
        if (
          WeiBoMenu.menu.get("weibo_masquerade_as_logged_in") &&
          request.url.startsWith("https://m.weibo.cn/api/config")
        ) {
          /**
           * 重构响应
           * @param {XMLHttpRequest} _request_
           */
          request.response = function (_request_) {
            let data = utils.toJSON(_request_.responseText);
            data.data.preferQuickapp = 0;
            data.data.login = true;
            data.data.uid = "";
            delete data.data.loginUrl;
            delete data.data.wx_callback;
            delete data.data.wx_authorize;
            delete data.data.passport_login_url;

            log.success("伪装已登录");
            _request_.responseText = JSON.stringify(data);
          };
        } else if (request.url.startsWith("https://m.weibo.cn/comments/hot")) {
          /**
           * 重构响应
           * @param {XMLHttpRequest} _request_
           */
          request.response = function (_request_) {
            let data = utils.toJSON(_request_.responseText);
            if (data.ok !== 1) {
              log.error(["由于尚未登录，获取不到更多评论数据", data]);
              data = {
                ok: 1,
              };
            }
            _request_.responseText = JSON.stringify(data);
          };
        }
      });
    },
    /**
     * 拦截Vue Router跳转
     */
    hijackVueRouter() {
      utils.waitNode("#app").then(async (element) => {
        await utils.waitPropertyByInterval(
          () => {
            return document.querySelector("#app");
          },
          () => {
            return document.querySelector("#app")?.__vue__?.$router?.push;
          },
          250,
          10000
        );
        let vueRouterPush = document.querySelector("#app").__vue__.$router.push;
        log.success("拦截Vue路由跳转");
        document.querySelector("#app").__vue__.$router.push = function (
          e,
          t,
          n
        ) {
          if (e?.path?.startsWith("/profile/")) {
            let uid = e?.params?.uid;
            if (uid == null) {
              uid = e.path.match(/\/profile\/([\d]+)/)?.[1];
            }
            log.success(["拦截跳转xx微博主页", e]);
            let uidHomeUrl = `https://m.weibo.cn/u/${uid}`;
            log.success("跳转微博主页：" + uidHomeUrl);
            window.location.href = uidHomeUrl;
            return;
          }
          return vueRouterPush.apply(this, arguments);
        };
      });
    },
  };

  /* -----------------↑函数区域↑----------------- */

  /* -----------------↓执行入口↓----------------- */

  WeiBoMenu.initMenu();
  WeiBoMenu.startMenuFunc();
  WeiBoBusiness.addRemoveAdsCSS();
  WebBoHijack.hijackNetWork();
  WebBoHijack.hijackVueRouter();

  /* -----------------↑执行入口↑----------------- */
})();
