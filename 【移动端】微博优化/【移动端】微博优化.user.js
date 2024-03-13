// ==UserScript==
// @name         【移动端】微博优化
// @icon         https://favicon.yandex.net/favicon/v2/https://m.weibo.cn/?size=32
// @namespace    https://greasyfork.org/zh-CN/scripts/480094
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @version      2024.3.13
// @description  劫持自动跳转登录，修复用户主页正确跳转，伪装客户端，可查看名人堂日程表
// @author       WhiteSevs
// @license      MIT
// @match        http*://m.weibo.cn/*
// @match        http*://huati.weibo.cn/*
// @match        http*://h5.video.weibo.com/*
// @run-at       document-start
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_info
// @grant        unsafeWindow
// @connect      m.weibo.cn
// @require      https://update.greasyfork.org/scripts/462234/1322684/Message.js
// @require      https://update.greasyfork.org/scripts/456485/1342149/pops.js
// @require      https://update.greasyfork.org/scripts/455186/1341797/WhiteSevsUtils.js
// ==/UserScript==

(function () {
  if(typeof unsafeWindow === "undefined"){
    unsafeWindow = globalThis;
  }
  /* -----------------↓公共配置↓----------------- */
  /**
   * @type {import("../库/Qmsg")}
   */
  const Qmsg = window.Qmsg;
  /**
   * @type {import("../库/pops")}
   */
  const pops = window.pops;
  /**
   * @type {import("../库/Utils")}
   */
  const utils = window.Utils.noConflict();
  const httpx = new utils.Httpx(GM_xmlhttpRequest);
  const log = new utils.Log(GM_info, unsafeWindow.console || console);
  log.config({
    debug: false,
  });
  /* -----------------↑公共配置↑----------------- */

  /* -----------------↓函数区域↓----------------- */

  const WeiBo = {
    /** 屏蔽 广告 */
    shieldAds() {
      GM_addStyle(`
      /* 底部中间的 登录/注册按钮 */
      #app div.main-wrap div.login-box,
      /* 主内容底部的小程序横幅推荐 */
      #app > div.lite-page-wrap > div > div.main > div > div.wrap{
        display: none !important;
      }`);
    },
    /** 屏蔽 底部工具栏 */
    shieldBottomBar() {
      GM_addStyle(`
      #app div.m-tab-bar.m-bar-panel.m-container-max{
          display: none !important;
      }`);
    },
  };

  const WeiBoMenu = {
    /** @type {UtilsGMMenuConstructor} */
    menu: null,
    init() {
      this.menu = new utils.GM_Menu({
        GM_getValue: GM_getValue,
        GM_setValue: GM_setValue,
        GM_registerMenuCommand: GM_registerMenuCommand,
        GM_unregisterMenuCommand: GM_unregisterMenuCommand,
      });
    },
  };

  /* 微博话题 */
  const WeiBoHuaTi = {
    /**
     * 伪装微博
     */
    isWeibo() {
      utils.waitNodeWithInterval("#loadMore", 10000).then(async (ele) => {
        await utils.waitVueByInterval(
          () => {
            return document.querySelector("#loadMore");
          },
          (__vue__) => {
            return typeof __vue__.isWeibo === "boolean";
          },
          250,
          10000
        );
        let $loadMore = document.querySelector("#loadMore");
        let loadMoreVue = $loadMore?.__vue__;
        if (!loadMoreVue) {
          log.error("未发现#loadMore上的__vue__");
          return;
        }
        loadMoreVue.isWeibo = true;
      });
    },
    /**
     * 劫持请求
     */
    hijackNetWork() {
      const ajaxHooker = utils.ajaxHooker();
      ajaxHooker.hook((request) => {
        if (request.url.startsWith("/ajax/super/starschedule?")) {
          request.response = async (res) => {
            let getResp = await httpx.get(request.url, {
              headers: {
                Host: globalThis.location.hostname,
                Accept: "application/json, text/plain, */*",
                "X-Requested-With": "XMLHttpRequest",
                "sec-ch-ua-mobile": "?1",
                "User-Agent": utils.getRandomAndroidUA() + " Weibo (__weibo__)",
                "sec-ch-ua-platform": "Android",
                "Sec-Fetch-Site": "same-origin",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Dest": "empty",
                Referer: globalThis.location.href,
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
              },
            });
            res.response = getResp.data.responseText;
            res.responseText = getResp.data.responseText;
          };
        }
      });
    },
  };

  const WeiBoVideo = {
    hijackWebPack() {
      WebBoHijack.hijackWebpack(
        "webpackJsonp",
        "chunk-common",
        (webpackExports) => {
          if (
            typeof webpackExports?.exports === "object" &&
            typeof webpackExports.exports["a"] === "object" &&
            typeof webpackExports.exports["a"]["gotoApp"] === "function" &&
            PopsPanel.getValue("weibo_video_webpack_gotoApp")
          ) {
            log.success(["成功劫持webpack调用函数", webpackExports]);
            webpackExports.exports["a"]["gotoApp"] = function (...args) {
              log.info(["阻止唤醒App：", args]);
            };
            return webpackExports;
          }
        }
      );
    },
    /** 屏蔽 底部工具栏 */
    shieldBottomToolBar() {
      GM_addStyle(`
      .woo-toolBar{
        display: none !important;
      }
      `);
    },
    /** 屏蔽 相关推荐 */
    shieldRecommend() {
      GM_addStyle(`
      #app .woo-panel[class*="Playdetail_card_"]:nth-child(2){
        display: none !important;
      }
      `);
    },
    /** 屏蔽 热门评论 */
    shieldHotComments() {
      GM_addStyle(`
      #app .woo-panel[class*="Playdetail_card_"]:nth-child(3){
        display: none !important;
      }
      `);
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
        if (
          ApiPath === "api/attitudes/create" &&
          PopsPanel.getValue("weibo_apply_attitudes_create")
        ) {
          log.success("拦截跳转登录");
          return new Promise((resolve) => {
            resolve({
              data: {},
            });
          });
        } else if (
          ApiPath === "api/likes/update" &&
          PopsPanel.getValue("weibo_apply_likes_update")
        ) {
          log.success("拦截点赞跳转登录");
          return new Promise((resolve) => {
            resolve({
              data: {},
            });
          });
        } else if (
          ApiPath === "api/comments/create" &&
          PopsPanel.getValue("weibo_apply_comments_create")
        ) {
          log.success("拦截评论跳转登录");
          return new Promise((resolve) => {
            resolve({
              data: {},
            });
          });
        } else if (
          ApiPath === "api/friendships/create" &&
          PopsPanel.getValue("weibo_apply_friendships_create")
        ) {
          log.success("拦截关注跳转登录");
          return new Promise((resolve) => {
            resolve({
              data: {},
            });
          });
        } else if (
          ApiPath === "api/comments/reply" &&
          PopsPanel.getValue("weibo_apply_comments_reply")
        ) {
          log.success("拦截回复跳转登录");
          return new Promise((resolve, reject) => {
            /* 伪装发送成功 */
            resolve({
              data: {
                ok: 200,
              },
            });
          });
        } else if (
          ApiPath.startsWith("profile/info") &&
          PopsPanel.getValue("weibo_apply_profile_info")
        ) {
          log.success(["优化跳转xx微博主页", ApiSearchParams]);
          let uidHomeUrl = `https://weibo.com/${ApiSearchParams["uid"]}`;
          log.success("跳转微博主页：" + uidHomeUrl);
          window.location.href = uidHomeUrl;
          return null;
        } else if (
          ApiPath === "comments/hotflow" &&
          PopsPanel.getValue("weibo_apply_comments_hotflow")
        ) {
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
        } else if (
          ApiPath === "comments/hotFlowChild" &&
          PopsPanel.getValue("weibo_apply_comments_hotFlowChild")
        ) {
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
        } else if (
          ApiPath === "api/statuses/repostTimeline" &&
          PopsPanel.getValue("weibo_apply_statuses_repostTimeline")
        ) {
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
          request.url.startsWith("https://m.weibo.cn/api/config") &&
          PopsPanel.getValue("weibo_request_api_config")
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
        } else if (
          request.url.startsWith("https://m.weibo.cn/comments/hot") &&
          PopsPanel.getValue("weibo_request_comments_hot")
        ) {
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
     * 劫持webpack
     * @param {string} webpackName 当前全局变量的webpack名
     * @param {string|any[]} mainCoreData 需要劫持的webpack的顶部core，例如：(window.webpackJsonp = window.webpackJsonp || []).push([["core:0"],{}])
     * @param {(webpackExports: object|undefined)=>{}} checkCallBack 如果mainCoreData匹配上，则调用此回调函数
     */
    hijackWebpack(webpackName = "webpackJsonp", mainCoreData, checkCallBack) {
      let originObject = void 0;
      Object.defineProperty(unsafeWindow, webpackName, {
        get() {
          return originObject;
        },
        set(newValue) {
          log.success("成功劫持webpack，当前webpack名：" + webpackName);
          originObject = newValue;
          const originPush = originObject.push;
          originObject.push = function (...args) {
            let _mainCoreData = args[0][0];
            if (
              mainCoreData == _mainCoreData ||
              (Array.isArray(mainCoreData) &&
                Array.isArray(_mainCoreData) &&
                JSON.stringify(mainCoreData) === JSON.stringify(_mainCoreData))
            ) {
              Object.keys(args[0][1]).forEach((keyName) => {
                let originSwitchFunc = args[0][1][keyName];
                args[0][1][keyName] = function (..._args) {
                  let result = originSwitchFunc.call(this, ..._args);
                  _args[0] = checkCallBack(_args[0]);
                  return result;
                };
              });
            }
            return originPush.call(this, ...args);
          };
        },
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
          if (
            e?.path?.startsWith("/profile/") &&
            PopsPanel.getValue("weibo_router_profile_to_user_home")
          ) {
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

  /**
   * 配置面板
   */
  const PopsPanel = {
    /** 本地存储的总键名 */
    key: "GM_Panel",
    /** 属性attributes的 data-key */
    attributeDataKey_Name: "data-key",
    /** 属性attributes的 data-default-value */
    attributeDataDefaultValue_Name: "data-default-value",
    /** 初始化菜单 */
    initMenu() {
      this.initLocalDefaultValue();
      if (unsafeWindow.top !== unsafeWindow.self) {
        return;
      }
      WeiBoMenu.menu.add([
        {
          key: "show_pops_panel_setting",
          text: "⚙ 设置",
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            this.showPanel();
          },
        },
        {
          key: "transfer_old_data",
          text: "🔧 迁移旧数据",
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            this.transferOldData();
          },
        },
      ]);
    },
    /** 初始化本地设置默认的值 */
    initLocalDefaultValue() {
      let content = this.getContent();
      content.forEach((item) => {
        if (!item["forms"]) {
          return;
        }
        item.forms.forEach((__item__) => {
          if (__item__.forms) {
            __item__.forms.forEach((containerItem) => {
              if (!containerItem.attributes) {
                return;
              }
              let key = containerItem.attributes[this.attributeDataKey_Name];
              let defaultValue =
                containerItem.attributes[this.attributeDataDefaultValue_Name];
              if (this.getValue(key) == null) {
                this.setValue(key, defaultValue);
              }
            });
          } else {
          }
        });
      });
    },
    /**
     * 设置值
     * @param {string} key 键
     * @param {any} value 值
     */
    setValue(key, value) {
      let localValue = GM_getValue(this.key, {});
      localValue[key] = value;
      GM_setValue(this.key, localValue);
    },
    /**
     * 获取值
     * @param {string} key 键
     * @param {any} defaultValue 默认值
     * @returns {any}
     */
    getValue(key, defaultValue) {
      let localValue = GM_getValue(this.key, {});
      return localValue[key] ?? defaultValue;
    },
    /**
     * 删除值
     * @param {string} key 键
     */
    deleteValue(key) {
      let localValue = GM_getValue(this.key, {});
      delete localValue[key];
      GM_setValue(this.key, localValue);
    },
    /** 显示设置面板 */
    showPanel() {
      pops.panel({
        title: {
          text: `${GM_info?.script?.name || "【移动端】微博优化"}-设置`,
          position: "center",
        },
        content: this.getContent(),
        mask: {
          enable: true,
          clickEvent: {
            toClose: true,
          },
        },
        width: "92vw",
        height: "80vh",
        isMobile: true,
        style: `
        aside.pops-panel-aside{
          width: auto !important;
        }
        `,
        only: true,
        drag: true,
      });
    },
    /**
     * 获取按钮配置
     * @param {string} text 文字
     * @param {string|undefined} description 描述
     * @param {string} key 键
     * @param {boolean} defaultValue 默认值
     * @param {?(event:Event,value: boolean)=>boolean} _callback_ 点击回调
     */
    getSwtichDetail(text, description, key, defaultValue, _callback_) {
      let result = {
        text: text,
        description: description,
        type: "switch",
        attributes: {},
        getValue() {
          if (PopsPanel.getValue(key) == null) {
            PopsPanel.setValue(key, Boolean(defaultValue));
          }
          return Boolean(PopsPanel.getValue(key, defaultValue));
        },
        callback(event, value) {
          log.success(`${value ? "开启" : "关闭"} ${text}`);
          if (typeof _callback_ === "function") {
            if (_callback_(event, value)) {
              return;
            }
          }
          PopsPanel.setValue(key, Boolean(value));
        },
      };
      result.attributes[this.attributeDataKey_Name] = key;
      result.attributes[this.attributeDataDefaultValue_Name] =
        Boolean(defaultValue);
      return result;
    },
    /**
     * 获取配置内容
     * @returns {PopsPanelContentConfig[]}
     */
    getContent() {
      return [
        {
          id: "weibo-panel-config-currency",
          title: "通用",
          forms: [
            {
              text: "功能",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "【屏蔽】广告",
                  "包括【登录/注册按钮】、【小程序横幅推荐】",
                  "weibo_remove_ads",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】底部工具栏",
                  "屏蔽聊天/关注按钮",
                  "weibo_shield_bottom_bar",
                  false
                ),
              ],
            },
            {
              text: "拦截跳转",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "api/attitudes/create",
                  void 0,
                  "weibo_apply_attitudes_create",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "点赞",
                  "未登录时，拦截点赞跳转登录",
                  "weibo_apply_likes_update",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "评论",
                  "未登录时，拦截评论跳转登录",
                  "weibo_apply_comments_create",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "关注",
                  "未登录时，拦截关注跳转登录",
                  "weibo_apply_friendships_create",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "转发",
                  "未登录时，拦截查看转发数据",
                  "weibo_apply_statuses_repostTimeline",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "回复",
                  "未登录时，拦截回复跳转登录",
                  "weibo_apply_comments_reply",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "优化跳转主页",
                  "未登录时，正确跳转至用户主页",
                  "weibo_apply_profile_info",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "下拉加载更多评论",
                  "未登录时，拦截下拉加载更多评论跳转登录",
                  "weibo_apply_comments_hotflow",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "楼中楼下拉加载更多评论",
                  "未登录时，拦截下拉加载更多评论跳转登录",
                  "weibo_apply_comments_hotFlowChild",
                  true
                ),
              ],
            },
            {
              text: "网络请求",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "/api/config",
                  "Api为获取用户数据，未登录时伪装为已登录",
                  "weibo_request_api_config",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "/comments/hot",
                  "Api为获取评论数据，未登录时伪装为成功获取评论数据",
                  "weibo_request_comments_hot",
                  true
                ),
              ],
            },
            {
              text: "Router路由",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "优化跳转用户主页",
                  "可以正确跳转至用户主页",
                  "weibo_router_profile_to_user_home",
                  true
                ),
              ],
            },
          ],
        },
        {
          id: "weibo-panel-config-huati",
          title: "话题",
          forms: [
            {
              text: "功能",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "伪装微博客户端",
                  "可以隐藏底部的【在微博内打开】",
                  "huati_weibo_masquerade_weibo_client_app",
                  true
                ),
              ],
            },
            {
              text: "网络请求",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "/ajax/super/starschedule",
                  "Api为获取日程数据，开启后可获取正常日程数据",
                  "huati_weibo_get_more_celebrity_calendar_information",
                  true
                ),
              ],
            },
          ],
        },
        {
          id: "weibo-panel-config-video",
          title: "视频",
          forms: [
            {
              text: "功能",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "【屏蔽】底部工具栏",
                  void 0,
                  "weibo_video_shield_bottom_toolbar",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】相关推荐",
                  void 0,
                  "weibo_video_shield_recommend",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】热门评论",
                  void 0,
                  "weibo_video_shield_hot_comments",
                  true
                ),
              ],
            },
            {
              text: "webpack",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "gotoApp",
                  "开启后阻止唤醒Scheme",
                  "weibo_video_webpack_gotoApp",
                  true
                ),
              ],
            },
          ],
        },
      ];
    },
    /** 迁移旧数据 */
    transferOldData() {
      let oldData = GM_getValue("GM_Menu_Local_Map");
      let currentData = GM_getValue(this.key, {});
      if (oldData) {
        Object.assign(currentData, oldData);
        GM_setValue(this.key, currentData);
        GM_deleteValue("GM_Menu_Local_Map");
        Qmsg.success("共迁移数据量：" + Object.keys(oldData).length);
      } else {
        Qmsg.info("不存在旧数据");
      }
    },
  };
  /* -----------------↑函数区域↑----------------- */

  /* -----------------↓执行入口↓----------------- */
  WeiBoMenu.init();
  PopsPanel.initMenu();
  if (globalThis.location.hostname === "huati.weibo.cn") {
    if (PopsPanel.getValue("huati_weibo_masquerade_weibo_client_app")) {
      WeiBoHuaTi.isWeibo();
    }
    if (
      PopsPanel.getValue("huati_weibo_get_more_celebrity_calendar_information")
    ) {
      WeiBoHuaTi.hijackNetWork();
    }
  } else if (globalThis.location.hostname === "m.weibo.cn") {
    if (PopsPanel.getValue("weibo_remove_ads")) {
      WeiBo.shieldAds();
    }
    if (PopsPanel.getValue("weibo_shield_bottom_bar")) {
      WeiBo.shieldBottomBar();
    }
    WebBoHijack.hijackApply();
    WebBoHijack.hijackNetWork();
    WebBoHijack.hijackVueRouter();
  } else if (globalThis.location.hostname === "h5.video.weibo.com") {
    if (PopsPanel.getValue("weibo_video_shield_bottom_toolbar")) {
      WeiBoVideo.shieldBottomToolBar();
    }
    if (PopsPanel.getValue("weibo_video_shield_hot_comments")) {
      WeiBoVideo.shieldHotComments();
    }
    if (PopsPanel.getValue("weibo_video_shield_recommend")) {
      WeiBoVideo.shieldRecommend();
    }
    WeiBoVideo.hijackWebPack();
  }

  /* -----------------↑执行入口↑----------------- */
})();
