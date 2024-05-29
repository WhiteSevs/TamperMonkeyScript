// ==UserScript==
// @name         【移动端】bilibili优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.5.29.15
// @author       WhiteSevs
// @description  bilibili(哔哩哔哩)优化，免登录等
// @license      GPL-3.0-only
// @icon         https://i0.hdslb.com/bfs/static/jinkela/long/images/512.png
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://m.bilibili.com/*
// @match        *://live.bilibili.com/*
// @require      https://update.greasyfork.org/scripts/494167/1376186/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/456485/1384984/pops.js
// @require      https://cdn.jsdelivr.net/npm/qmsg@1.1.0/dist/index.umd.js
// @require      https://cdn.jsdelivr.net/npm/@whitesev/utils@1.2.2/dist/index.umd.js
// @require      https://cdn.jsdelivr.net/npm/@whitesev/domutils@1.1.0/dist/index.umd.js
// @connect      *
// @connect      m.bilibili.com
// @connect      www.bilibili.com
// @connect      api.bilibili.com
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

(n=>{function a(p){if(typeof p!="string")throw new TypeError("cssText must be a string");let e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=p,document.head?document.head.appendChild(e):document.body?document.body.appendChild(e):document.documentElement.childNodes.length===0?document.documentElement.appendChild(e):document.documentElement.insertBefore(e,document.documentElement.childNodes[0]),e}if(typeof GM_addStyle=="function"){GM_addStyle(n);return}a(n)})(" .m-video2-awaken-btn,.m-home .launch-app-btn.home-float-openapp,.m-space .launch-app-btn.m-space-float-openapp,.m-space .launch-app-btn.m-nav-openapp{display:none!important}#app .video .openapp-dialog,#app .video .launch-app-btn.m-video-main-launchapp:has([class^=m-video2-awaken]),#app .video .launch-app-btn.m-nav-openapp,#app .video .mplayer-widescreen-callapp,#app .video .launch-app-btn.m-float-openapp{display:none!important}#app.LIVE .open-app-btn.bili-btn-warp{display:none!important} ");

(function (Qmsg, Utils, DOMUtils) {
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
  const _SCRIPT_NAME_ = "【移动端】bilibili优化";
  const utils = Utils.noConflict();
  const domutils = DOMUtils.noConflict();
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
  const OriginPrototype = {
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
  };
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
    id: "panel-common",
    title: "通用",
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UISwitch(
            "监听路由改变",
            "bili-listenRouterChange",
            false,
            void 0,
            "用于处理页面跳转时功能不生效问题"
          )
        ]
      },
      {
        text: "变量设置",
        type: "forms",
        forms: [
          UISwitch(
            "isLogin",
            "bili-setLogin",
            false,
            void 0,
            "设置isLogin为true"
          ),
          UISwitch(
            "isClient",
            "bili-setIsClient",
            false,
            void 0,
            "设置isClient为true"
          ),
          UISwitch(
            "tinyApp",
            "bili-setTinyApp",
            false,
            void 0,
            "设置tinyApp为true"
          )
        ]
      },
      {
        text: "劫持/拦截",
        type: "forms",
        forms: [
          UISwitch(
            "阻止调用App",
            "bili-video-hook-callApp",
            false,
            void 0,
            "处理函数: PlayerAgent"
          )
        ]
      }
    ]
  };
  const ScriptRouter = {
    /**
     * 判断当前路径
     * + /video/
     */
    isVideo() {
      return window.location.pathname.startsWith("/video/");
    },
    /**
     * 判断当前路径
     * + /banggumi/
     */
    isBangumi() {
      return window.location.pathname.startsWith("/bangumi/");
    },
    /**
     * 判断当前路径
     * + /search
     */
    isSearch() {
      return window.location.pathname.startsWith("/search");
    },
    /**
     * 判断当前路径
     * + live.bilibili.com
     */
    isLive() {
      return window.location.hostname === "live.bilibili.com";
    }
  };
  const SettingUIVideo = {
    id: "panel-video",
    title: "视频",
    isDefault() {
      return ScriptRouter.isVideo();
    },
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: []
      },
      {
        text: "变量设置",
        type: "forms",
        forms: [
          UISwitch(
            "playBtnNoOpenApp",
            "bili-video-setVideoPlayer",
            false,
            void 0,
            "设置playBtnNoOpenApp为true,playBtnOpenApp为false,coverOpenApp为false"
          )
        ]
      }
    ]
  };
  const SettingUIBangumi = {
    id: "panel-bangumi",
    title: "番剧",
    isDefault() {
      return ScriptRouter.isBangumi();
    },
    forms: [
      {
        text: "变量设置",
        type: "forms",
        forms: [
          UISwitch(
            "pay",
            "bili-bangumi-setPay",
            false,
            void 0,
            "设置pay为1"
          )
        ]
      },
      {
        text: "覆盖点击事件",
        type: "forms",
        forms: [
          UISwitch(
            "【选集】",
            "bili-bangumi-cover-clicl-event-chooseEp",
            false,
            void 0,
            "让【选集】的视频列表可点击跳转"
          ),
          UISwitch(
            "【其它】",
            "bili-bangumi-cover-clicl-event-other",
            false,
            void 0,
            "让【PV&其他】、【预告】、【主题曲】、【香境剧场】等的视频列表可点击跳转"
          ),
          UISwitch(
            "【更多推荐】",
            "bili-bangumi-cover-clicl-event-recommend",
            false,
            void 0,
            "让【更多推荐】的视频列表可点击跳转"
          )
        ]
      },
      {
        text: "劫持/拦截",
        type: "forms",
        forms: [
          UISwitch(
            "阻止调用App",
            "bili-bangumi-hook-callApp",
            false,
            void 0,
            ""
          )
        ]
      }
    ]
  };
  const SettingUISearch = {
    id: "panel-search",
    title: "搜索",
    isDefault() {
      return ScriptRouter.isSearch();
    },
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UISwitch(
            "修复点击UP主正确进入空间",
            "bili-search-repair-enter-user-home",
            false,
            void 0,
            "可以修复点击UP主进入个人空间但是是404问题"
          )
        ]
      }
    ]
  };
  const SettingUILive = {
    id: "panel-live",
    title: "直播",
    isDefault() {
      return ScriptRouter.isLive();
    },
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UISwitch(
            "阻止open-app-btn元素点击事件触发",
            "bili-live-prevent-openAppBtn",
            false,
            void 0,
            "开启后可不跳转至唤醒App页面"
          ),
          UISwitch(
            "【屏蔽】聊天室",
            "bili-live-block-chatRoom",
            false,
            void 0,
            "直接不显示底部的聊天室"
          ),
          UISwitch(
            "【屏蔽】xxx进入直播间",
            "bili-live-block-brush-prompt",
            false,
            void 0,
            "直接不显示底部的xxx进入直播间"
          ),
          UISwitch(
            "【屏蔽】控制面板",
            "bili-live-block-control-panel",
            false,
            void 0,
            "屏蔽底部的发个弹幕、送礼"
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
      this.$listener.listenData.delete(deleteKey);
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
        only: true
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
        SettingUIVideo,
        SettingUIBangumi,
        SettingUISearch,
        SettingUILive
      ];
      return configList;
    }
  };
  const BilibiliHook = {
    /**
     * window.PlayerAgent
     */
    hookPlayerAgent() {
      let PlayerAgent = void 0;
      OriginPrototype.Object.defineProperty(_unsafeWindow, "PlayerAgent", {
        get() {
          return new Proxy({}, {
            get(target, key) {
              if (key === "openApp") {
                return function(...args) {
                  let data = args[0];
                  log.info(["调用PlayerAgent.openApp", data]);
                };
              } else {
                return PlayerAgent[key];
              }
            }
          });
        },
        set(v) {
          PlayerAgent = v;
        }
      });
    }
  };
  const BilibiliVideoHook = {
    init() {
      PopsPanel.execMenuOnce("bili-video-hook-callApp", () => {
        BilibiliHook.hookPlayerAgent();
      });
    }
  };
  const BilibiliVideo = {
    init() {
      BilibiliVideoHook.init();
      PopsPanel.execMenu("bili-video-setVideoPlayer", () => {
        this.setVideoPlayer();
      });
    },
    /**
     * 修改视频播放器设置参数
     * 
     * + __vue__.playBtnNoOpenApp: `true`
     * + __vue__.playBtnOpenApp: `false`
     * + __vue__.coverOpenApp: `false`
     */
    setVideoPlayer() {
      utils.waitNode(".m-video-player").then(($app) => {
        let check = function(__vue__) {
          return __vue__ != null && typeof __vue__.playBtnNoOpenApp === "boolean" && typeof __vue__.playBtnOpenApp === "boolean" && typeof __vue__.coverOpenApp === "boolean";
        };
        utils.waitVueByInterval(() => {
          return document.querySelector(".m-video-player");
        }, check, 250, 1e4).then(() => {
          $app = document.querySelector(".m-video-player");
          if (check($app.__vue__)) {
            log.success("成功设置参数 playBtnNoOpenApp、playBtnOpenApp、coverOpenApp");
            $app.__vue__.playBtnNoOpenApp = true;
            $app.__vue__.playBtnOpenApp = false;
            $app.__vue__.coverOpenApp = false;
          }
        });
      });
    }
  };
  const BilibiliOpenApp = {
    getUrl($ele) {
      if ($ele == null) {
        return;
      }
      return $ele.getAttribute("universallink");
    },
    /**
     * 直接跳转Url
     * @param event
     */
    jumpToUrl(event) {
      let $click = event.target;
      let $biliOpenApp = $click.querySelector("bili-open-app");
      if ($biliOpenApp) {
        let url = BilibiliOpenApp.getUrl($biliOpenApp);
        if (url) {
          window.location.href = url;
        } else {
          Qmsg.error("获取bili-open-app的Url失败");
          log.error("获取bili-open-app的Url失败");
        }
      } else {
        Qmsg.error("未获取到<bili-open-app>元素");
        log.error("未获取到<bili-open-app>元素");
      }
    }
  };
  const BilibiliBangumi = {
    init() {
      PopsPanel.execMenuOnce("bili-bangumi-hook-callApp", () => {
        this.hookCallApp();
      });
      PopsPanel.execMenu("bili-bangumi-setPay", () => {
        this.setPay();
      });
      PopsPanel.execMenu("bili-bangumi-cover-clicl-event-chooseEp", () => {
        this.setChooseEpClickEvent();
      });
      PopsPanel.execMenu("bili-bangumi-cover-clicl-event-other", () => {
        this.setClickOtherVideo();
      });
      PopsPanel.execMenu("bili-bangumi-cover-clicl-event-recommend", () => {
        this.setRecommendClickEvent();
      });
    },
    /**
     * 阻止唤醒App
     */
    hookCallApp() {
      let oldSetTimeout = _unsafeWindow.setTimeout;
      _unsafeWindow.setTimeout = function(...args) {
        let callString = args[0].toString();
        if (callString.includes("autoOpenApp")) {
          log.success(["阻止唤醒App", args]);
          return;
        }
        return oldSetTimeout.apply(this, args);
      };
    },
    /**
     * 设置已购买番剧(会员？)
     *
     * + __vue__.$store.state.userStat.pay `1`
     */
    setPay() {
      utils.waitNode("#app").then(($app) => {
        let check = function(__vue__) {
          var _a2, _b, _c;
          return __vue__ != null && typeof ((_c = (_b = (_a2 = __vue__ == null ? void 0 : __vue__.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b.userStat) == null ? void 0 : _c.pay) === "number";
        };
        utils.waitVueByInterval($app, check, 250, 1e4).then(() => {
          if (check($app.__vue__)) {
            log.success("成功设置参数 pay");
            $app.__vue__.$store.state.userStat.pay = 1;
          }
        });
      });
    },
    /**
     * 覆盖【选集】的点击事件
     */
    setChooseEpClickEvent() {
      utils.waitNode(".ep-list-pre-wrapper ul.ep-list-pre-container").then(() => {
        log.info("覆盖【选集】的点击事件");
        domutils.on(
          ".ep-list-pre-wrapper ul.ep-list-pre-container",
          "click",
          "li.episode-item",
          function(event) {
            utils.preventEvent(event);
            BilibiliOpenApp.jumpToUrl(event);
          },
          {
            capture: true
          }
        );
      });
      utils.waitNode(".ep-list-pre-wrapper ul.season-list-wrapper").then(() => {
        log.info("覆盖【xx季】的点击事件");
        domutils.on(
          ".ep-list-pre-wrapper ul.season-list-wrapper",
          "click",
          "li",
          function(event) {
            utils.preventEvent(event);
            BilibiliOpenApp.jumpToUrl(event);
          },
          {
            capture: true
          }
        );
      });
      utils.waitNode(".ep-list-pre-header").then(() => {
        log.info("覆盖【选集】右上角的【全xx话】Arrow的点击事件");
        domutils.on(
          ".ep-list-pre-header",
          "click",
          function(event) {
            utils.preventEvent(event);
          },
          {
            capture: true
          }
        );
      });
    },
    /**
     * 覆盖【PV&其他】、【预告】、【主题曲】的点击事件
     */
    setClickOtherVideo() {
      utils.waitNode(".section-preview-wrapper ul.ep-list-pre-container").then(() => {
        log.info("覆盖【PV&其他】、【预告】、【主题曲】的点击事件");
        domutils.on(
          ".section-preview-wrapper .ep-list-pre-container",
          "click",
          "li.section-preview-item",
          function(event) {
            utils.preventEvent(event);
            BilibiliOpenApp.jumpToUrl(event);
          },
          {
            capture: true
          }
        );
      });
      utils.waitNode(".section-preview-header").then(() => {
        log.info("覆盖【PV&其他】、【预告】、【主题曲】右上角的Arrow的点击事件");
        domutils.on(
          ".section-preview-header",
          "click",
          function(event) {
            utils.preventEvent(event);
          },
          {
            capture: true
          }
        );
      });
    },
    /**
     * 覆盖【更多推荐】番剧的点击事件
     */
    setRecommendClickEvent() {
      utils.waitNode(".recom-wrapper ul.recom-list").then(() => {
        log.info("覆盖【更多推荐】番剧的点击事件");
        domutils.on(
          ".recom-wrapper ul.recom-list",
          "click",
          "li.recom-item-v2",
          function(event) {
            utils.preventEvent(event);
            BilibiliOpenApp.jumpToUrl(event);
          },
          {
            capture: true
          }
        );
      });
    }
  };
  const BilibiliSearch = {
    init() {
      PopsPanel.execMenuOnce("bili-search-repair-enter-user-home", () => {
        this.repairEnterUserHome();
      });
    },
    /**
     * 修复点击UP主正确进入空间
     */
    repairEnterUserHome() {
      utils.waitNode(".result-panel").then(($cardBox) => {
        log.info("修复点击UP主正确进入空间");
        domutils.on($cardBox, "click", "a.m-search-user-item[href]", function(event) {
          utils.preventEvent(event);
          let $click = event.target;
          let url = $click.href;
          log.success("链接跳转: " + url);
          window.location.href = url;
        }, {
          capture: true
        });
      });
    }
  };
  const BilibiliLive = {
    init() {
      PopsPanel.execMenuOnce("bili-live-prevent-openAppBtn", () => {
        this.preventOpenAppBtn();
      });
      PopsPanel.execMenuOnce("bili-live-block-chatRoom", () => {
        this.blockChatRoom();
      });
      PopsPanel.execMenuOnce("bili-live-block-brush-prompt", () => {
        this.blockBrushPrompt();
      });
      PopsPanel.execMenuOnce("bili-live-block-control-panel", () => {
        this.blockControlPanel();
      });
    },
    /**
     * 阻止触发打开App
     */
    preventOpenAppBtn() {
      utils.waitNode("body").then(($body) => {
        log.info("阻止.open-app-btn元素触发点击事件");
        domutils.on($body, "click", ".open-app-btn", function(event) {
          utils.preventEvent(event);
        }, {
          capture: true
        });
        domutils.on($body, "click", "#web-player-controller-wrap-el", function(event) {
          utils.preventEvent(event);
        }, {
          capture: true
        });
      });
    },
    /**
     * 屏蔽聊天室
     */
    blockChatRoom() {
      log.info("屏蔽聊天室");
      _GM_addStyle(`
        #chat-items{
            display: none !important;
        }
        `);
    },
    /**
     * 屏蔽xxx进入直播间
     */
    blockBrushPrompt() {
      log.info("屏蔽xxx进入直播间");
      _GM_addStyle(`
        #brush-prompt{
            display: none !important;
        }
        `);
    },
    /**
     * 屏蔽底部工具栏
     */
    blockControlPanel() {
      log.info("屏蔽底部工具栏");
      _GM_addStyle(`
        .control-panel{
            display: none !important;
        }`);
    }
  };
  const Bilibili = {
    init() {
      PopsPanel.execMenu("bili-setLogin", () => {
        this.setLogin();
      });
      PopsPanel.execMenu("bili-setIsClient", () => {
        this.setIsClient();
      });
      PopsPanel.execMenu("bili-setTinyApp", () => {
        this.setTinyApp();
      });
      PopsPanel.execMenuOnce("bili-listenRouterChange", () => {
        this.listenRouterChange();
      });
      if (ScriptRouter.isVideo()) {
        log.info("Router: 视频稿件");
        BilibiliVideo.init();
      } else if (ScriptRouter.isBangumi()) {
        log.info("Router: 番剧");
        BilibiliBangumi.init();
      } else if (ScriptRouter.isSearch()) {
        log.info("Router: 搜索");
        BilibiliSearch.init();
      } else if (ScriptRouter.isLive()) {
        log.info("Router: 直播");
        BilibiliLive.init();
      }
    },
    /**
     * 设置登录
     * 
     * + __vue__.$store.state.common.noCallApp: `true`
     * + __vue__.$store.state.common.userInfo.isLogin: `true`
     */
    setLogin() {
      utils.waitNode("#app").then(($app) => {
        let check = function(__vue__) {
          var _a2, _b, _c, _d, _e, _f, _g;
          return __vue__ != null && typeof ((_c = (_b = (_a2 = __vue__ == null ? void 0 : __vue__.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b.common) == null ? void 0 : _c.noCallApp) === "boolean" && typeof ((_g = (_f = (_e = (_d = __vue__ == null ? void 0 : __vue__.$store) == null ? void 0 : _d.state) == null ? void 0 : _e.common) == null ? void 0 : _f.userInfo) == null ? void 0 : _g.isLogin) === "boolean";
        };
        utils.waitVueByInterval($app, check, 250, 1e4).then(() => {
          if (check($app.__vue__)) {
            log.success("成功设置参数 noCallApp isLogin");
            $app.__vue__.$store.state.common.noCallApp = true;
            $app.__vue__.$store.state.common.userInfo.isLogin = true;
          }
        });
      });
    },
    /**
     * 设置为客户端(不确定是否有用)
     * 
     * + __vue__.$store.state.video.isClient: `true`
     * + __vue__.$store.state.opus.isClient: `true`
     * + __vue__.$store.state.playlist.isClient: `true`
     */
    setIsClient() {
      utils.waitNode("#app").then(($app) => {
        let check = function(__vue__) {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
          return __vue__ != null && typeof ((_c = (_b = (_a2 = __vue__ == null ? void 0 : __vue__.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b.video) == null ? void 0 : _c.isClient) === "boolean" && typeof ((_f = (_e = (_d = __vue__ == null ? void 0 : __vue__.$store) == null ? void 0 : _d.state) == null ? void 0 : _e.opus) == null ? void 0 : _f.isClient) === "boolean" && typeof ((_i = (_h = (_g = __vue__ == null ? void 0 : __vue__.$store) == null ? void 0 : _g.state) == null ? void 0 : _h.playlist) == null ? void 0 : _i.isClient) === "boolean";
        };
        utils.waitVueByInterval($app, check, 250, 1e4).then(() => {
          if (check($app.__vue__)) {
            $app.__vue__.$store.state.video.isClient = true;
            $app.__vue__.$store.state.opus.isClient = true;
            $app.__vue__.$store.state.playlist.isClient = true;
          }
        });
      });
    },
    /**
     * 设置为微应用(可以看评论且视频稿件变大)
     * 
     * + __vue__.$store.state.common.tinyApp `true`
     */
    setTinyApp() {
      utils.waitNode("#app").then(($app) => {
        let check = function(__vue__) {
          var _a2, _b, _c;
          return typeof ((_c = (_b = (_a2 = __vue__ == null ? void 0 : __vue__.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b.common) == null ? void 0 : _c.tinyApp) === "boolean";
        };
        utils.waitVueByInterval($app, check, 250, 1e4).then(() => {
          if (check($app.__vue__)) {
            $app.__vue__.$store.state.common.tinyApp = true;
            log.success("成功设置参数 tinyApp");
            setTimeout(() => {
              if (!document.querySelector("#bilibiliPlayer video")) {
                let checkInitPlayer = function(__vue__) {
                  return typeof (__vue__ == null ? void 0 : __vue__.initPlayer) === "function";
                };
                utils.waitNode(".m-video-player").then(($videoPlayer) => {
                  utils.waitVueByInterval($videoPlayer, checkInitPlayer, 250, 1e4).then(() => {
                    if (checkInitPlayer($videoPlayer.__vue__)) {
                      log.success("成功调用函数 initPlayer()");
                      $videoPlayer.__vue__.initPlayer();
                    }
                  });
                });
              }
            }, 2e3);
          }
        });
      });
      if (ScriptRouter.isVideo()) {
        PopsPanel.onceExec("bili-video-repair-bottom-recommend-video-margin-top", () => {
          _GM_addStyle(`
                /* 修复一下底部推荐视频的margin-top */
                .m-video-bottom-tab .v-switcher__content--multi{
                    margin-top: 34vmin;
                }
                `);
        });
      }
    },
    /**
     * 监听路由变化
     */
    listenRouterChange() {
      utils.waitNode("#app").then(($app) => {
        let check = function(__vue__) {
          var _a2;
          return typeof ((_a2 = __vue__ == null ? void 0 : __vue__.$router) == null ? void 0 : _a2.afterEach) === "function";
        };
        utils.waitVueByInterval($app, check).then(() => {
          if (check($app.__vue__)) {
            log.success("成功设置监听路由变化");
            $app.__vue__.$router.afterEach((to, from) => {
              log.success(["路由变化", [to, from]]);
              Bilibili.init();
            });
          }
        });
      });
    }
  };
  PopsPanel.init();
  Bilibili.init();

})(Qmsg, Utils, DOMUtils);