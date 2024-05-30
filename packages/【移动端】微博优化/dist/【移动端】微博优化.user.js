// ==UserScript==
// @name         【移动端】微博优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.5.30
// @author       WhiteSevs
// @description  劫持自动跳转登录，修复用户主页正确跳转，伪装客户端，可查看名人堂日程表
// @license      GPL-3.0-only
// @icon         https://favicon.yandex.net/favicon/v2/https://m.weibo.cn/?size=32
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        http*://m.weibo.cn/*
// @match        http*://huati.weibo.cn/*
// @match        http*://h5.video.weibo.com/*
// @require      https://update.greasyfork.org/scripts/494167/1376186/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/456485/1384984/pops.js
// @require      https://cdn.jsdelivr.net/npm/qmsg@1.1.0/dist/index.umd.js
// @require      https://cdn.jsdelivr.net/npm/@whitesev/utils@1.3.0/dist/index.umd.js
// @require      https://cdn.jsdelivr.net/npm/@whitesev/domutils@1.1.0/dist/index.umd.js
// @resource     ElementPlusResourceCSS  https://cdn.jsdelivr.net/npm/element-plus@2.7.2/dist/index.min.css
// @connect      m.weibo.cn
// @grant        GM_addStyle
// @grant        GM_deleteValue
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (Qmsg, DOMUtils, Utils) {
  'use strict';

  var _a;
  var _GM_addStyle = /* @__PURE__ */ (() => typeof GM_addStyle != "undefined" ? GM_addStyle : void 0)();
  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_info = /* @__PURE__ */ (() => typeof GM_info != "undefined" ? GM_info : void 0)();
  var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  var _GM_unregisterMenuCommand = /* @__PURE__ */ (() => typeof GM_unregisterMenuCommand != "undefined" ? GM_unregisterMenuCommand : void 0)();
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  var _monkeyWindow = /* @__PURE__ */ (() => window)();
  const _SCRIPT_NAME_ = "【移动端】微博优化";
  const utils = Utils.noConflict();
  DOMUtils.noConflict();
  const pops = _monkeyWindow.pops || _unsafeWindow.pops;
  const log = new utils.Log(
    _GM_info,
    _unsafeWindow.console || _monkeyWindow.console
  );
  const SCRIPT_NAME = ((_a = _GM_info == null ? void 0 : _GM_info.script) == null ? void 0 : _a.name) || _SCRIPT_NAME_;
  const DEBUG = false;
  log.config({
    debug: DEBUG,
    logMaxCount: 2e4,
    autoClearConsole: true,
    tag: true
  });
  Qmsg.config({
    position: "bottom",
    html: true,
    maxNums: 5,
    autoClose: true,
    showClose: false,
    showReverse: true
  });
  const GM_Menu = new utils.GM_Menu({
    GM_getValue: _GM_getValue,
    GM_setValue: _GM_setValue,
    GM_registerMenuCommand: _GM_registerMenuCommand,
    GM_unregisterMenuCommand: _GM_unregisterMenuCommand
  });
  const httpx = new utils.Httpx(_GM_xmlhttpRequest);
  httpx.config({
    logDetails: DEBUG,
    onabort() {
      Qmsg.warning("请求取消");
    },
    ontimeout() {
      Qmsg.error("请求超时");
    },
    onerror(response) {
      Qmsg.error("请求异常");
      log.error(["httpx-onerror 请求异常", response]);
    }
  });
  ({
    Object: {
      defineProperty: _unsafeWindow.Object.defineProperty
    },
    Function: {
      apply: _unsafeWindow.Function.prototype.apply,
      call: _unsafeWindow.Function.prototype.call
    },
    Element: {
      appendChild: _unsafeWindow.Element.prototype.appendChild
    },
    setTimeout: _unsafeWindow.setTimeout
  });
  const KEY = "GM_Panel";
  const ATTRIBUTE_KEY = "data-key";
  const ATTRIBUTE_DEFAULT_VALUE = "data-default-value";
  const UISwitch = function(text, key, defaultValue, clickCallBack, description) {
    let result = {
      text,
      type: "switch",
      description,
      attributes: {},
      getValue() {
        return Boolean(PopsPanel.getValue(key, defaultValue));
      },
      callback(event, value) {
        log.success(`${value ? "开启" : "关闭"} ${text}`);
        PopsPanel.setValue(key, Boolean(value));
      },
      afterAddToUListCallBack: void 0
    };
    if (result.attributes) {
      result.attributes[ATTRIBUTE_KEY] = key;
      result.attributes[ATTRIBUTE_DEFAULT_VALUE] = Boolean(defaultValue);
    }
    return result;
  };
  const SettingUICommon = {
    id: "weibo-panel-config-currency",
    title: "通用",
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UISwitch(
            "【屏蔽】广告",
            "weibo_remove_ads",
            true,
            void 0,
            "包括【登录/注册按钮】、【小程序横幅推荐】"
          ),
          UISwitch(
            "【屏蔽】底部工具栏",
            "weibo_shield_bottom_bar",
            false,
            void 0,
            "屏蔽聊天/关注按钮"
          )
        ]
      },
      {
        text: "拦截跳转",
        type: "forms",
        forms: [
          UISwitch("api/attitudes/create", "weibo_apply_attitudes_create", true),
          UISwitch(
            "点赞",
            "weibo_apply_likes_update",
            true,
            void 0,
            "未登录时，拦截点赞跳转登录"
          ),
          UISwitch(
            "评论",
            "weibo_apply_comments_create",
            true,
            void 0,
            "未登录时，拦截评论跳转登录"
          ),
          UISwitch(
            "关注",
            "weibo_apply_friendships_create",
            true,
            void 0,
            "未登录时，拦截关注跳转登录"
          ),
          UISwitch(
            "转发",
            "weibo_apply_statuses_repostTimeline",
            true,
            void 0,
            "未登录时，拦截查看转发数据"
          ),
          UISwitch(
            "回复",
            "weibo_apply_comments_reply",
            true,
            void 0,
            "未登录时，拦截回复跳转登录"
          ),
          UISwitch(
            "优化跳转主页",
            "weibo_apply_profile_info",
            true,
            void 0,
            "未登录时，正确跳转至用户主页"
          ),
          UISwitch(
            "下拉加载更多评论",
            "weibo_apply_comments_hotflow",
            true,
            void 0,
            "未登录时，拦截下拉加载更多评论跳转登录"
          ),
          UISwitch(
            "楼中楼下拉加载更多评论",
            "weibo_apply_comments_hotFlowChild",
            true,
            void 0,
            "未登录时，拦截下拉加载更多评论跳转登录"
          )
        ]
      },
      {
        text: "网络请求(不一定能劫持到)",
        type: "forms",
        forms: [
          UISwitch(
            "/api/config",
            "weibo_request_api_config",
            true,
            void 0,
            "Api为获取用户数据，未登录时伪装为已登录"
          ),
          UISwitch(
            "/comments/hot",
            "weibo_request_comments_hot",
            true,
            void 0,
            "Api为获取评论数据，未登录时伪装为成功获取评论数据"
          ),
          UISwitch(
            "/status/push",
            "weibo_request_status_push",
            true,
            void 0,
            "Api为获取顶部的热点新闻信息流"
          )
        ]
      },
      {
        text: "Router路由",
        type: "forms",
        forms: [
          UISwitch(
            "优化跳转用户主页",
            "weibo_router_profile_to_user_home",
            true,
            void 0,
            "可以正确跳转至用户主页"
          )
        ]
      },
      {
        text: "函数禁用",
        type: "forms",
        forms: [
          UISwitch(
            "navigator.serviceWorker.register",
            "weibo_hijack_navigator_service_worker_register",
            true,
            void 0,
            "禁止注册serviceWorker"
          )
        ]
      }
    ]
  };
  const SettingUIHuaTi = {
    id: "weibo-panel-config-huati",
    title: "话题",
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UISwitch(
            "伪装微博客户端",
            "huati_weibo_masquerade_weibo_client_app",
            true,
            void 0,
            "可以隐藏底部的【在微博内打开】"
          )
        ]
      },
      {
        text: "网络请求(不一定能劫持到)",
        type: "forms",
        forms: [
          UISwitch(
            "/ajax/super/starschedule",
            "huati_weibo_get_more_celebrity_calendar_information",
            true,
            void 0,
            "Api为获取日程数据，开启后可获取正常日程数据"
          )
        ]
      }
    ]
  };
  const SettingUIVideo = {
    id: "weibo-panel-config-video",
    title: "视频",
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UISwitch(
            "【屏蔽】底部工具栏",
            "weibo_video_shield_bottom_toolbar",
            true
          ),
          UISwitch("【屏蔽】相关推荐", "weibo_video_shield_recommend", true),
          UISwitch("【屏蔽】热门评论", "weibo_video_shield_hot_comments", true)
        ]
      },
      {
        text: "webpack",
        type: "forms",
        forms: [
          UISwitch(
            "gotoApp",
            "weibo_video_webpack_gotoApp",
            true,
            void 0,
            "开启后阻止唤醒Scheme"
          )
        ]
      }
    ]
  };
  const PopsPanel = {
    /** 数据 */
    $data: {
      /**
       * 菜单项的默认值
       */
      data: new utils.Dictionary(),
      /**
       * 成功只执行了一次的项
       */
      oneSuccessExecMenu: new utils.Dictionary(),
      /**
       * 成功只执行了一次的项
       */
      onceExec: new utils.Dictionary(),
      /** 脚本名，一般用在设置的标题上 */
      scriptName: SCRIPT_NAME,
      /** 菜单项的总值在本地数据配置的键名 */
      key: KEY,
      /** 菜单项在attributes上配置的菜单键 */
      attributeKeyName: ATTRIBUTE_KEY,
      /** 菜单项在attributes上配置的菜单默认值 */
      attributeDefaultValueName: ATTRIBUTE_DEFAULT_VALUE
    },
    /** 监听器 */
    $listener: {
      /**
       * 值改变的监听器
       */
      listenData: new utils.Dictionary()
    },
    init() {
      this.initPanelDefaultValue();
      this.initExtensionsMenu();
    },
    initExtensionsMenu() {
      if (_unsafeWindow.top !== _unsafeWindow.self) {
        return;
      }
      GM_Menu.add([
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
          }
        }
      ]);
    },
    /** 初始化本地设置默认的值 */
    initPanelDefaultValue() {
      let that = this;
      function initDefaultValue(config) {
        if (!config["attributes"]) {
          return;
        }
        let key = config.attributes[ATTRIBUTE_KEY];
        let defaultValue = config["attributes"][ATTRIBUTE_DEFAULT_VALUE];
        if (key == null) {
          log.warn(["请先配置键", config]);
          return;
        }
        if (that.$data.data.has(key)) {
          log.warn("请检查该key(已存在): " + key);
        }
        that.$data.data.set(key, defaultValue);
      }
      let contentConfigList = this.getPanelContentConfig();
      for (let index = 0; index < contentConfigList.length; index++) {
        let leftContentConfigItem = contentConfigList[index];
        if (!leftContentConfigItem.forms) {
          continue;
        }
        let rightContentConfigList = leftContentConfigItem.forms;
        for (let formItemIndex = 0; formItemIndex < rightContentConfigList.length; formItemIndex++) {
          let rightContentConfigItem = rightContentConfigList[formItemIndex];
          if (rightContentConfigItem.forms) {
            let childFormConfigList = rightContentConfigItem.forms;
            for (let formChildConfigIndex = 0; formChildConfigIndex < childFormConfigList.length; formChildConfigIndex++) {
              initDefaultValue(childFormConfigList[formChildConfigIndex]);
            }
          } else {
            initDefaultValue(rightContentConfigItem);
          }
        }
      }
    },
    /**
     * 设置值
     * @param key 键
     * @param value 值
     */
    setValue(key, value) {
      let locaData = _GM_getValue(KEY, {});
      let oldValue = locaData[key];
      locaData[key] = value;
      _GM_setValue(KEY, locaData);
      if (this.$listener.listenData.has(key)) {
        this.$listener.listenData.get(key).callback(key, oldValue, value);
      }
    },
    /**
     * 获取值
     * @param key 键
     * @param defaultValue 默认值
     */
    getValue(key, defaultValue) {
      let locaData = _GM_getValue(KEY, {});
      let localValue = locaData[key];
      if (localValue == null) {
        if (this.$data.data.has(key)) {
          return this.$data.data.get(key);
        }
        return defaultValue;
      }
      return localValue;
    },
    /**
     * 删除值
     * @param key 键
     */
    deleteValue(key) {
      let locaData = _GM_getValue(KEY, {});
      let oldValue = locaData[key];
      Reflect.deleteProperty(locaData, key);
      _GM_setValue(KEY, locaData);
      if (this.$listener.listenData.has(key)) {
        this.$listener.listenData.get(key).callback(key, oldValue, void 0);
      }
    },
    /**
     * 监听调用setValue、deleteValue
     * @param key 需要监听的键
     * @param callback
     */
    addValueChangeListener(key, callback) {
      let listenerId = Math.random();
      this.$listener.listenData.set(key, {
        id: listenerId,
        key,
        callback
      });
      return listenerId;
    },
    /**
     * 移除监听
     * @param listenerId 监听的id
     */
    removeValueChangeListener(listenerId) {
      let deleteKey = null;
      for (const [key, value] of this.$listener.listenData.entries()) {
        if (value.id === listenerId) {
          deleteKey = key;
          break;
        }
      }
      if (typeof deleteKey === "string") {
        this.$listener.listenData.delete(deleteKey);
      } else {
        console.warn("没有找到对应的监听器");
      }
    },
    /**
     * 判断该键是否存在
     * @param key 键
     */
    hasKey(key) {
      let locaData = _GM_getValue(KEY, {});
      return key in locaData;
    },
    /**
     * 自动判断菜单是否启用，然后执行回调
     * @param key
     * @param callback 回调
     */
    execMenu(key, callback) {
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (!this.$data.data.has(key)) {
        log.warn(`${key} 键不存在`);
        return;
      }
      let value = PopsPanel.getValue(key);
      if (value) {
        callback(value);
      }
    },
    /**
     * 自动判断菜单是否启用，然后执行回调，只会执行一次
     * @param key
     * @param callback 回调
     */
    execMenuOnce(key, callback) {
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (!this.$data.data.has(key)) {
        log.warn(`${key} 键不存在`);
        return;
      }
      let value = PopsPanel.getValue(key);
      if (value) {
        if (this.$data.oneSuccessExecMenu.has(key)) {
          return;
        }
        callback(value);
        this.$data.oneSuccessExecMenu.set(key, 1);
      }
    },
    /**
     * 根据key执行一次
     * @param key
     */
    onceExec(key, callback) {
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (this.$data.onceExec.has(key)) {
        return;
      }
      callback();
      this.$data.onceExec.set(key, 1);
    },
    /**
     * 显示设置面板
     */
    showPanel() {
      pops.panel({
        title: {
          text: `${SCRIPT_NAME}-设置`,
          position: "center",
          html: false,
          style: ""
        },
        content: this.getPanelContentConfig(),
        mask: {
          enable: true,
          clickEvent: {
            toClose: true,
            toHide: false
          }
        },
        isMobile: this.isMobile(),
        width: this.getWidth(),
        height: this.getHeight(),
        drag: true,
        only: true,
        style: `
			aside.pops-panel-aside{
			  width: auto !important;
			}
			`
      });
    },
    isMobile() {
      return window.outerWidth < 550;
    },
    /**
     * 获取设置面板的宽度
     */
    getWidth() {
      if (window.outerWidth < 550) {
        return "92dvw";
      } else {
        return "550px";
      }
    },
    /**
     * 获取设置面板的高度
     */
    getHeight() {
      if (window.outerHeight > 450) {
        return "80dvh";
      } else {
        return "450px";
      }
    },
    /**
     * 获取配置内容
     */
    getPanelContentConfig() {
      let configList = [
        SettingUICommon,
        SettingUIHuaTi,
        SettingUIVideo
      ];
      return configList;
    }
  };
  const blockAdsCSS = "/* 底部中间的 登录/注册按钮 */\r\n#app div.main-wrap div.login-box,\r\n /* 主内容底部的小程序横幅推荐 */\r\n #app > div.lite-page-wrap > div > div.main > div > div.wrap,\r\n /* 底部悬浮的在微博内打开 */\r\n #app .woo-frame.blog-config-page div.weibo-btn-box,\r\n /* 顶部的新闻信息流 */\r\n #app .woo-frame div.woo-panel-container.news-banner {\r\n	display: none !important;\r\n}\r\n";
  let _ajaxHooker_ = null;
  const WeiBoNetWorkHook = {
    get ajaxHooker() {
      if (_ajaxHooker_ == null) {
        log.info("启用ajaxHooker拦截网络");
        _ajaxHooker_ = utils.ajaxHooker();
        _ajaxHooker_.protect();
      }
      return _ajaxHooker_;
    }
  };
  const WeiBoHook = {
    /**
     * 劫持Function.prototype.apply;
     */
    hookApply() {
      log.info("劫持Function.prototype.apply");
      let originApply = _unsafeWindow.Function.prototype.apply;
      _unsafeWindow.Function.prototype.apply = function(...args) {
        var _a2, _b;
        if (args.length !== 2) {
          return originApply.call(this, ...args);
        }
        if (args.length === 2 && !Array.isArray(args[1])) {
          return originApply.call(this, ...args);
        }
        if (typeof args[1][0] !== "string") {
          return originApply.call(this, ...args);
        }
        const ApiPath = args[1][0];
        const ApiSearchParams = (_b = (_a2 = args[1]) == null ? void 0 : _a2[1]) == null ? void 0 : _b["params"];
        if (ApiPath === "api/attitudes/create" && PopsPanel.getValue("weibo_apply_attitudes_create")) {
          log.success("拦截跳转登录");
          return new Promise((resolve) => {
            resolve({
              data: {}
            });
          });
        } else if (ApiPath === "api/likes/update" && PopsPanel.getValue("weibo_apply_likes_update")) {
          log.success("拦截点赞跳转登录");
          return new Promise((resolve) => {
            resolve({
              data: {}
            });
          });
        } else if (ApiPath === "api/comments/create" && PopsPanel.getValue("weibo_apply_comments_create")) {
          log.success("拦截评论跳转登录");
          return new Promise((resolve) => {
            resolve({
              data: {}
            });
          });
        } else if (ApiPath === "api/friendships/create" && PopsPanel.getValue("weibo_apply_friendships_create")) {
          log.success("拦截关注跳转登录");
          return new Promise((resolve) => {
            resolve({
              data: {}
            });
          });
        } else if (ApiPath === "api/comments/reply" && PopsPanel.getValue("weibo_apply_comments_reply")) {
          log.success("拦截回复跳转登录");
          return new Promise((resolve, reject) => {
            resolve({
              data: {
                ok: 200
              }
            });
          });
        } else if (ApiPath.startsWith("profile/info") && PopsPanel.getValue("weibo_apply_profile_info")) {
          log.success(["优化跳转xx微博主页", ApiSearchParams]);
          let uidHomeUrl = `https://weibo.com/${ApiSearchParams["uid"]}`;
          log.success("跳转微博主页：" + uidHomeUrl);
          window.location.href = uidHomeUrl;
          return null;
        } else if (ApiPath === "comments/hotflow" && PopsPanel.getValue("weibo_apply_comments_hotflow")) {
          if (!("id" in ApiSearchParams && "max_id_type" in ApiSearchParams && "mid" in ApiSearchParams) || "id" in ApiSearchParams && "max_id" in ApiSearchParams && "max_id_type" in ApiSearchParams && "mid" in ApiSearchParams) {
            log.success(["拦截下拉加载更多评论跳转登录", ApiSearchParams]);
            return new Promise((resolve) => {
              resolve({
                ok: 1,
                data: {
                  data: [],
                  total_number: 0
                }
              });
            });
          }
        } else if (ApiPath === "comments/hotFlowChild" && PopsPanel.getValue("weibo_apply_comments_hotFlowChild")) {
          if ("max_id" in ApiSearchParams && ApiSearchParams["max_id"] !== 0) {
            log.success([
              "拦截评论中的评论下拉加载更多评论跳转登录",
              ApiSearchParams
            ]);
            return new Promise((resolve) => {
              resolve({
                data: {
                  ok: 1,
                  data: [],
                  rootComment: [],
                  total_number: 0
                }
              });
            });
          }
        } else if (ApiPath === "api/statuses/repostTimeline" && PopsPanel.getValue("weibo_apply_statuses_repostTimeline")) {
          log.success(["拦截查看转发数据，因为需登录", ApiSearchParams]);
          return new Promise((resolve) => {
            resolve({
              data: {
                ok: 1,
                data: {
                  data: [],
                  total_number: 0
                }
              }
            });
          });
        } else
          ;
        return originApply.call(this, ...args);
      };
    },
    /**
     * 拦截网络
     */
    hookNetWork() {
      WeiBoNetWorkHook.ajaxHooker.hook(function(request) {
        log.info(["ajaxHookr: ", request.url]);
        if (request.url.startsWith("https://m.weibo.cn/api/config") && PopsPanel.getValue("weibo_request_api_config")) {
          request.response = function(_request_) {
            let data = utils.toJSON(_request_.responseText);
            data.data.preferQuickapp = 0;
            data.data.login = true;
            data.data.uid = "";
            Reflect.deleteProperty(data.data, "loginUrl");
            Reflect.deleteProperty(data.data, "wx_callback");
            Reflect.deleteProperty(data.data, "wx_authorize");
            Reflect.deleteProperty(data.data, "passport_login_url");
            log.success("伪装已登录");
            _request_.responseText = JSON.stringify(data);
          };
        } else if (request.url.startsWith("https://m.weibo.cn/comments/hot") && PopsPanel.getValue("weibo_request_comments_hot")) {
          request.response = function(_request_) {
            let data = utils.toJSON(_request_.responseText);
            if (data.ok !== 1) {
              log.error(["由于尚未登录，获取不到更多评论数据", data]);
              data = {
                ok: 1
              };
            }
            _request_.responseText = JSON.stringify(data);
          };
        } else if (request.url.startsWith("https://m.weibo.cn/status/push?") && PopsPanel.getValue("weibo_request_status_push")) {
          request.response = function(_request_) {
            utils.toJSON(_request_.responseText);
            _request_.json = {};
          };
        }
      });
    },
    /**
     * 劫持webpack
     * @param webpackName 当前全局变量的webpack名
     * @param mainCoreData 需要劫持的webpack的顶部core，例如：(window.webpackJsonp = window.webpackJsonp || []).push([["core:0"],{}])
     * @param checkCallBack 如果mainCoreData匹配上，则调用此回调函数
     */
    hookWebpack(webpackName = "webpackJsonp", mainCoreData, checkCallBack) {
      let originObject = void 0;
      Object.defineProperty(_unsafeWindow, webpackName, {
        get() {
          return originObject;
        },
        set(newValue) {
          log.success("成功劫持webpack，当前webpack名：" + webpackName);
          originObject = newValue;
          const originPush = originObject.push;
          originObject.push = function(...args) {
            let _mainCoreData = args[0][0];
            if (mainCoreData == _mainCoreData || Array.isArray(mainCoreData) && Array.isArray(_mainCoreData) && JSON.stringify(mainCoreData) === JSON.stringify(_mainCoreData)) {
              Object.keys(args[0][1]).forEach((keyName) => {
                let originSwitchFunc = args[0][1][keyName];
                args[0][1][keyName] = function(..._args) {
                  let result = originSwitchFunc.call(this, ..._args);
                  _args[0] = checkCallBack(_args[0]);
                  return result;
                };
              });
            }
            return originPush.call(this, ...args);
          };
        }
      });
    },
    /**
     * 拦截Vue Router跳转
     */
    hookVueRouter() {
      utils.waitNode("#app").then(async ($app) => {
        if (!$app) {
          log.error("元素#app获取失败");
          return;
        }
        await utils.waitPropertyByInterval(
          $app,
          () => {
            var _a2, _b;
            return (_b = (_a2 = $app == null ? void 0 : $app.__vue__) == null ? void 0 : _a2.$router) == null ? void 0 : _b.push;
          },
          250,
          1e4
        );
        if (!$app.__vue__) {
          log.error("#app的vue属性不存在");
          return;
        }
        let vueRouterPush = $app.__vue__.$router.push;
        log.success("拦截Vue路由跳转");
        $app.__vue__.$router.push = function(...args) {
          var _a2, _b, _c;
          let router = args[0];
          if (((_a2 = router == null ? void 0 : router.path) == null ? void 0 : _a2.startsWith("/profile/")) && PopsPanel.getValue("weibo_router_profile_to_user_home")) {
            let uid = (_b = router == null ? void 0 : router.params) == null ? void 0 : _b.uid;
            if (uid == null) {
              uid = (_c = router.path.match(/\/profile\/([\d]+)/)) == null ? void 0 : _c[1];
            }
            log.success(["拦截跳转xx微博主页", router]);
            let uidHomeUrl = `https://m.weibo.cn/u/${uid}`;
            log.success("跳转微博主页：" + uidHomeUrl);
            window.location.href = uidHomeUrl;
            return;
          }
          return vueRouterPush.apply(this, arguments);
        };
      });
    },
    /**
     * 禁止Service Worker注册
     */
    hookServiceWorkerRegister() {
      log.info("hook => navigator.serviceWorker.register");
      _unsafeWindow.Object.defineProperty(
        _unsafeWindow.navigator.serviceWorker,
        "register",
        {
          get() {
            return function(...args) {
              log.success(["劫持navigator.serviceWorker.register: ", args]);
            };
          }
        }
      );
    }
  };
  const WeiBoRouter = {
    /**
     * 移动端微博
     * @returns
     */
    isMWeiBo() {
      return globalThis.location.hostname === "m.weibo.cn";
    },
    /**
     * 话题
     * @returns
     */
    isHuaTi() {
      return globalThis.location.hostname === "huati.weibo.cn";
    },
    /**
     * 视频页
     * @returns
     */
    isVideo() {
      return globalThis.location.hostname === "h5.video.weibo.com";
    }
  };
  const WeiBoHuaTi = {
    init() {
      PopsPanel.execMenu("huati_weibo_masquerade_weibo_client_app", () => {
        this.isWeibo();
      });
      PopsPanel.execMenuOnce(
        "huati_weibo_get_more_celebrity_calendar_information",
        () => {
          this.hookNetWorkWithGetMoreCelebrityCalendarInformation();
        }
      );
    },
    /**
     * 伪装微博
     */
    isWeibo() {
      log.info("伪装微博");
      utils.waitNode("#loadMore", 1e4).then(async ($loadMore) => {
        if (!$loadMore) {
          log.error("元素#loadMore获取失败");
          return;
        }
        await utils.waitVueByInterval(
          $loadMore,
          (__vue__) => {
            return typeof __vue__.isWeibo === "boolean";
          },
          250,
          1e4
        );
        let loadMoreVue = $loadMore == null ? void 0 : $loadMore.__vue__;
        if (!loadMoreVue) {
          log.error("未发现#loadMore上的__vue__");
          return;
        }
        loadMoreVue.isWeibo = true;
        log.success("伪装微博: success");
      });
    },
    /**
     * 劫持请求让获取更多名人日历信息
     */
    hookNetWorkWithGetMoreCelebrityCalendarInformation() {
      WeiBoNetWorkHook.ajaxHooker.hook((request) => {
        log.info(["ajaxHookr: ", request.url]);
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
                "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
              }
            });
            res.response = getResp.data.responseText;
            res.responseText = getResp.data.responseText;
          };
        }
      });
    }
  };
  const WeiBoVideo = {
    init() {
      PopsPanel.execMenu("weibo_video_shield_bottom_toolbar", () => {
        this.shieldBottomToolBar();
      });
      PopsPanel.execMenu("weibo_video_shield_hot_comments", () => {
        this.shieldHotComments();
      });
      PopsPanel.execMenu("weibo_video_shield_recommend", () => {
        this.shieldRecommend();
      });
      WeiBoVideo.hookWebpack();
    },
    /**
     * 劫持webpack
     */
    hookWebpack() {
      log.info("劫持webpack");
      WeiBoHook.hookWebpack("webpackJsonp", "chunk-common", (webpackExports) => {
        if (typeof (webpackExports == null ? void 0 : webpackExports.exports) === "object" && typeof webpackExports.exports["a"] === "object" && typeof webpackExports.exports["a"]["gotoApp"] === "function" && PopsPanel.getValue("weibo_video_webpack_gotoApp")) {
          log.success(["成功劫持webpack调用函数", webpackExports]);
          webpackExports.exports["a"]["gotoApp"] = function(...args) {
            log.info(["阻止唤醒App：", args]);
          };
          return webpackExports;
        }
      });
    },
    /** 【屏蔽】底部工具栏 */
    shieldBottomToolBar() {
      log.info("【屏蔽】底部工具栏");
      _GM_addStyle(`
        .woo-toolBar{
            display: none !important;
        }`);
    },
    /** 【屏蔽】相关推荐 */
    shieldRecommend() {
      log.info("【屏蔽】相关推荐");
      _GM_addStyle(`
        #app .woo-panel[class*="Playdetail_card_"]:nth-child(2){
            display: none !important;
        }`);
    },
    /** 【屏蔽】热门评论 */
    shieldHotComments() {
      log.info("【屏蔽】热门评论");
      _GM_addStyle(`
        #app .woo-panel[class*="Playdetail_card_"]:nth-child(3){
            display: none !important;
        }`);
    }
  };
  const WeiBo = {
    init() {
      PopsPanel.execMenuOnce(
        "weibo_hijack_navigator_service_worker_register",
        () => {
          WeiBoHook.hookServiceWorkerRegister();
        }
      );
      if (WeiBoRouter.isHuaTi()) {
        WeiBoHuaTi.init();
      } else if (WeiBoRouter.isMWeiBo()) {
        WeiBoHook.hookNetWork();
        WeiBoHook.hookApply();
        WeiBoHook.hookVueRouter();
        PopsPanel.execMenuOnce("weibo_remove_ads", () => {
          _GM_addStyle(blockAdsCSS);
        });
        PopsPanel.execMenu("weibo_shield_bottom_bar", () => {
          this.shieldBottomBar();
        });
      } else if (WeiBoRouter.isVideo()) {
        WeiBoVideo.init();
      } else {
        log.warn("未适配Router: " + window.location.href);
      }
    },
    /**
     * 【屏蔽】底部工具栏
     */
    shieldBottomBar() {
      log.info("【屏蔽】底部工具栏");
      _GM_addStyle(`
        #app div.m-tab-bar.m-bar-panel.m-container-max{
            display: none !important;
        }`);
    }
  };
  PopsPanel.init();
  WeiBo.init();

})(Qmsg, DOMUtils, Utils);