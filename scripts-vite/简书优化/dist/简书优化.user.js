// ==UserScript==
// @name         简书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.7.24
// @author       WhiteSevs
// @description  支持手机端和PC端、屏蔽广告、优化浏览体验、重定向链接、全文居中、自动展开全文、允许复制文字、劫持唤醒/跳转App、自定义屏蔽元素等
// @license      GPL-3.0-only
// @icon         https://www.jianshu.com/favicon.ico
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.jianshu.com/*
// @match        *://*.jianshu.io/*
// @require      https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.1.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.3.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.5.0/dist/index.umd.js
// @grant        GM_deleteValue
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (Qmsg, DOMUtils, Utils, pops) {
  'use strict';

  var _a;
  var _GM_deleteValue = /* @__PURE__ */ (() => typeof GM_deleteValue != "undefined" ? GM_deleteValue : void 0)();
  var _GM_getResourceText = /* @__PURE__ */ (() => typeof GM_getResourceText != "undefined" ? GM_getResourceText : void 0)();
  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_info = /* @__PURE__ */ (() => typeof GM_info != "undefined" ? GM_info : void 0)();
  var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  var _GM_unregisterMenuCommand = /* @__PURE__ */ (() => typeof GM_unregisterMenuCommand != "undefined" ? GM_unregisterMenuCommand : void 0)();
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  var _monkeyWindow = /* @__PURE__ */ (() => window)();
  const _SCRIPT_NAME_ = "简书优化";
  const utils = Utils.noConflict();
  const domUtils = DOMUtils.noConflict();
  const log = new utils.Log(
    _GM_info,
    _unsafeWindow.console || _monkeyWindow.console
  );
  const SCRIPT_NAME = ((_a = _GM_info == null ? void 0 : _GM_info.script) == null ? void 0 : _a.name) || _SCRIPT_NAME_;
  const DEBUG = false;
  log.config({
    debug: DEBUG,
    logMaxCount: 1e3,
    autoClearConsole: true,
    tag: true
  });
  Qmsg.config(
    Object.defineProperties(
      {
        html: true,
        autoClose: true,
        showClose: false
      },
      {
        position: {
          get() {
            return PopsPanel.getValue("qmsg-config-position", "bottom");
          }
        },
        maxNums: {
          get() {
            return PopsPanel.getValue("qmsg-config-maxnums", 5);
          }
        },
        showReverse: {
          get() {
            return PopsPanel.getValue("qmsg-config-showreverse", true);
          }
        },
        zIndex: {
          get() {
            let maxZIndex = Utils.getMaxZIndex();
            let popsMaxZIndex = pops.config.InstanceUtils.getPopsMaxZIndex(maxZIndex).zIndex;
            return Utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
          }
        }
      }
    )
  );
  const GM_Menu = new utils.GM_Menu({
    GM_getValue: _GM_getValue,
    GM_setValue: _GM_setValue,
    GM_registerMenuCommand: _GM_registerMenuCommand,
    GM_unregisterMenuCommand: _GM_unregisterMenuCommand
  });
  const httpx = new utils.Httpx(_GM_xmlhttpRequest);
  httpx.interceptors.response.use(void 0, (data) => {
    log.error(["拦截器-请求错误", data]);
    if (data.type === "onabort") {
      Qmsg.warning("请求取消");
    } else if (data.type === "onerror") {
      Qmsg.error("请求异常");
    } else if (data.type === "ontimeout") {
      Qmsg.error("请求超时");
    } else {
      Qmsg.error("其它错误");
    }
    return data;
  });
  httpx.config({
    logDetails: DEBUG
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
  const addStyle = utils.addStyle.bind(utils);
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
  const SettingUIPC = {
    id: "jianshu-panel-config-pc",
    title: "桌面端",
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "功能",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch("全文居中", "JianShuArticleCenter", true),
                  UISwitch("自动展开全文", "JianShuAutoExpandFullText", true),
                  UISwitch(
                    "重定向链接",
                    "JianShuAutoJumpRedirect_PC",
                    true,
                    void 0,
                    "自动跳转简书拦截的Url链接"
                  )
                ]
              }
            ]
          },
          {
            text: "屏蔽",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】底部推荐阅读",
                    "JianShuShieldRecommendedReading",
                    false
                  ),
                  UISwitch("【屏蔽】评论区", "JianShuShieldUserComments", false),
                  UISwitch(
                    "【屏蔽】相关文章",
                    "JianShuShieldRelatedArticles",
                    false
                  ),
                  UISwitch(
                    "【屏蔽】客户端弹窗",
                    "jianshu-shieldClientDialog",
                    true,
                    void 0,
                    "弹出的【扫码安装简书客户端 畅享全文阅读体验】"
                  ),
                  UISwitch("【屏蔽】顶部导航栏", "jianshu-shieldTopNav", false),
                  UISwitch(
                    "【屏蔽】底部工具栏",
                    "jianshu-shieldBottomToolbar",
                    false,
                    void 0,
                    "屏蔽掉底部悬浮的评论输入框、评论、点赞..."
                  )
                ]
              }
            ]
          },
          {
            text: "劫持/拦截",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "拦截-剪贴板",
                    "JianShuRemoveClipboardHijacking",
                    true,
                    void 0,
                    "去除禁止复制"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const SettingUIMobile = {
    id: "jianshu-panel-config-mobile",
    title: "移动端",
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "功能",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "自动展开全文",
                    "JianShuAutoExpandFullText_Mobile",
                    true
                  ),
                  UISwitch(
                    "重定向链接",
                    "JianShuAutoJumpRedirect_Mobile",
                    true,
                    void 0,
                    "自动跳转简书拦截的Url链接"
                  )
                ]
              }
            ]
          },
          {
            text: "屏蔽",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】底部推荐阅读",
                    "JianShuremoveFooterRecommendRead",
                    false
                  ),
                  UISwitch(
                    "【屏蔽】评论区",
                    "JianShuShieldUserCommentsMobile",
                    false
                  )
                ]
              }
            ]
          },
          {
            text: "劫持/拦截",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "拦截-剪贴板",
                    "JianShuRemoveClipboardHijacking_Mobile",
                    true,
                    void 0,
                    "去除禁止复制"
                  ),
                  UISwitch(
                    "劫持-唤醒/跳转App",
                    "JianShuHijackSchemeScriptLabel_Mobile",
                    true,
                    void 0,
                    "去除简书唤醒调用App"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const UISelect = function(text, key, defaultValue, data, callback, description) {
    let selectData = [];
    if (typeof data === "function") {
      selectData = data();
    } else {
      selectData = data;
    }
    let result = {
      text,
      type: "select",
      description,
      attributes: {},
      getValue() {
        return PopsPanel.getValue(key, defaultValue);
      },
      callback(event, isSelectedValue, isSelectedText) {
        PopsPanel.setValue(key, isSelectedValue);
        if (typeof callback === "function") {
          callback(event, isSelectedValue, isSelectedText);
        }
      },
      data: selectData
    };
    if (result.attributes) {
      result.attributes[ATTRIBUTE_KEY] = key;
      result.attributes[ATTRIBUTE_DEFAULT_VALUE] = defaultValue;
    }
    return result;
  };
  const SettingUICommon = {
    id: "jianshu-panel-common",
    title: "通用",
    forms: [
      {
        text: "Toast配置",
        type: "forms",
        forms: [
          UISelect(
            "Toast位置",
            "qmsg-config-position",
            "bottom",
            [
              {
                value: "topleft",
                text: "左上角"
              },
              {
                value: "top",
                text: "顶部"
              },
              {
                value: "topright",
                text: "右上角"
              },
              {
                value: "left",
                text: "左边"
              },
              {
                value: "center",
                text: "中间"
              },
              {
                value: "right",
                text: "右边"
              },
              {
                value: "bottomleft",
                text: "左下角"
              },
              {
                value: "bottom",
                text: "底部"
              },
              {
                value: "bottomright",
                text: "右下角"
              }
            ],
            (event, isSelectValue, isSelectText) => {
              log.info("设置当前Qmsg弹出位置" + isSelectText);
            },
            "Toast显示在页面九宫格的位置"
          ),
          UISelect(
            "最多显示的数量",
            "qmsg-config-maxnums",
            3,
            [
              {
                value: 1,
                text: "1"
              },
              {
                value: 2,
                text: "2"
              },
              {
                value: 3,
                text: "3"
              },
              {
                value: 4,
                text: "4"
              },
              {
                value: 5,
                text: "5"
              }
            ],
            void 0,
            "限制Toast显示的数量"
          ),
          UISwitch(
            "逆序弹出",
            "qmsg-config-showreverse",
            false,
            void 0,
            "修改Toast弹出的顺序"
          )
        ]
      }
    ]
  };
  const __PopsPanel__ = {
    data: null,
    oneSuccessExecMenu: null,
    onceExec: null,
    listenData: null
  };
  const PopsPanel = {
    /** 数据 */
    $data: {
      /**
       * 菜单项的默认值
       */
      get data() {
        if (__PopsPanel__.data == null) {
          __PopsPanel__.data = new utils.Dictionary();
        }
        return __PopsPanel__.data;
      },
      /**
       * 成功只执行了一次的项
       */
      get oneSuccessExecMenu() {
        if (__PopsPanel__.oneSuccessExecMenu == null) {
          __PopsPanel__.oneSuccessExecMenu = new utils.Dictionary();
        }
        return __PopsPanel__.oneSuccessExecMenu;
      },
      /**
       * 成功只执行了一次的项
       */
      get onceExec() {
        if (__PopsPanel__.onceExec == null) {
          __PopsPanel__.onceExec = new utils.Dictionary();
        }
        return __PopsPanel__.onceExec;
      },
      /** 脚本名，一般用在设置的标题上 */
      get scriptName() {
        return SCRIPT_NAME;
      },
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
      get listenData() {
        if (__PopsPanel__.listenData == null) {
          __PopsPanel__.listenData = new utils.Dictionary();
        }
        return __PopsPanel__.listenData;
      }
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
      function loopInitDefaultValue(configList) {
        for (let index = 0; index < configList.length; index++) {
          let configItem = configList[index];
          initDefaultValue(configItem);
          let childForms = configItem.forms;
          if (childForms && Array.isArray(childForms)) {
            loopInitDefaultValue(childForms);
          }
        }
      }
      let contentConfigList = this.getPanelContentConfig();
      for (let index = 0; index < contentConfigList.length; index++) {
        let leftContentConfigItem = contentConfigList[index];
        if (!leftContentConfigItem.forms) {
          continue;
        }
        let rightContentConfigList = leftContentConfigItem.forms;
        if (rightContentConfigList && Array.isArray(rightContentConfigList)) {
          loopInitDefaultValue(rightContentConfigList);
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
      if (this.$data.oneSuccessExecMenu.has(key)) {
        return;
      }
      this.$data.oneSuccessExecMenu.set(key, 1);
      let resultStyleList = [];
      let pushStyleNode = (style) => {
        let __value = PopsPanel.getValue(key);
        changeCallBack(__value, style);
      };
      let changeCallBack = (currentValue, resultStyle) => {
        let resultList = [];
        if (currentValue) {
          let result = resultStyle ?? callback(currentValue, pushStyleNode);
          if (result instanceof HTMLStyleElement) {
            resultList = [result];
          } else if (Array.isArray(result)) {
            resultList = [
              ...result.filter(
                (item) => item != null && item instanceof HTMLStyleElement
              )
            ];
          }
        }
        for (let index = 0; index < resultStyleList.length; index++) {
          let $css = resultStyleList[index];
          $css.remove();
          resultStyleList.splice(index, 1);
          index--;
        }
        resultStyleList = [...resultList];
      };
      this.addValueChangeListener(
        key,
        (__key, oldValue, newValue) => {
          changeCallBack(newValue);
        }
      );
      let value = PopsPanel.getValue(key);
      if (value) {
        changeCallBack(value);
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
        return "92vw";
      } else {
        return "550px";
      }
    },
    /**
     * 获取设置面板的高度
     */
    getHeight() {
      if (window.outerHeight > 450) {
        return "80vh";
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
        SettingUIPC,
        SettingUIMobile
      ];
      return configList;
    }
  };
  const ShieldCSS = `.download-app-guidance,\r
.call-app-btn,\r
.collapse-tips,\r
.note-graceful-button,\r
.app-open,\r
.header-wrap,\r
.recommend-wrap.recommend-ad,\r
.call-app-Ad-bottom,\r
#recommended-notes p.top-title span.more,\r
#homepage .modal,\r
button.index_call-app-btn,\r
span.note__flow__download,\r
.download-guide,\r
#footer,\r
.comment-open-app-btn-wrap,\r
.nav.navbar-nav + div,\r
.self-flow-ad,\r
#free-reward-panel,\r
div[id*='AdFive'],\r
#index-aside-download-qrbox,\r
.baidu-app-download-2eIkf_1,\r
/* 底部的"小礼物走一走，来简书关注我"、赞赏支持和更多精彩内容，就在简书APP */\r
div[role="main"] > div > section:first-child > div:nth-last-child(2),\r
/* 它的内部是script标签，可能影响部分评论之间的高度问题 */\r
div.adad_container ,\r
/* 顶部导航栏的【下载App】 */\r
#__next nav a[href*="navbar-app"] {\r
	display: none !important;\r
}\r
body.reader-day-mode.normal-size {\r
	overflow: auto !important;\r
}\r
.collapse-free-content {\r
	height: auto !important;\r
}\r
.copyright {\r
	color: #000 !important;\r
}\r
#note-show .content .show-content-free .collapse-free-content:after {\r
	background-image: none !important;\r
}\r
footer > div > div {\r
	justify-content: center;\r
}\r
/* 修复底部最后编辑于：。。。在某些套壳浏览器上的错位问题 */\r
#note-show .content .show-content-free .note-meta-time {\r
	margin-top: 0px !important;\r
}\r
`;
  const JianshuRouter = {
    /**
     * 简书拦截跳转的网址
     */
    isGoWild() {
      return window.location.pathname === "/go-wild";
    }
  };
  const CommonUtils = {
    /**
     * 添加屏蔽CSS
     * @param args
     * @example
     * addBlockCSS("")
     * addBlockCSS("","")
     * addBlockCSS(["",""])
     */
    addBlockCSS(...args) {
      let selectorList = [];
      if (args.length === 0) {
        return;
      }
      if (args.length === 1 && typeof args[0] === "string" && args[0].trim() === "") {
        return;
      }
      args.forEach((selector) => {
        if (Array.isArray(selector)) {
          selectorList = selectorList.concat(selector);
        } else {
          selectorList.push(selector);
        }
      });
      return addStyle(`${selectorList.join(",\n")}{display: none !important;}`);
    },
    /**
     * 设置GM_getResourceText的style内容
     * @param resourceMapData 资源数据
     */
    setGMResourceCSS(resourceMapData) {
      let cssText = typeof _GM_getResourceText === "function" ? _GM_getResourceText(resourceMapData.keyName) : "";
      if (typeof cssText === "string" && cssText) {
        addStyle(cssText);
      } else {
        CommonUtils.addLinkNode(resourceMapData.url);
      }
    },
    /**
     * 添加<link>标签
     * @param url
     */
    async addLinkNode(url) {
      let $link = document.createElement("link");
      $link.rel = "stylesheet";
      $link.type = "text/css";
      $link.href = url;
      domUtils.ready(() => {
        document.head.appendChild($link);
      });
      return $link;
    },
    /**
     * 将url修复，例如只有search的链接/sss/xxx?sss=xxxx
     * @param url 需要修复的链接
     */
    fixUrl(url) {
      url = url.trim();
      if (url.match(/^http(s|):\/\//i)) {
        return url;
      } else {
        if (!url.startsWith("/")) {
          url += "/";
        }
        url = window.location.origin + url;
        return url;
      }
    }
  };
  const waitForElementToRemove = function(selectorText = "") {
    utils.waitNodeList(selectorText).then((nodeList) => {
      nodeList.forEach((item) => item.remove());
    });
  };
  const Jianshu = {
    init() {
      this.addCSS();
      PopsPanel.execMenu("JianShuAutoJumpRedirect_PC", () => {
        this.jumpRedirect();
      });
      PopsPanel.execMenu("JianShuRemoveClipboardHijacking", () => {
        this.removeClipboardHijacking();
      });
      PopsPanel.execMenu("JianShuAutoExpandFullText", () => {
        this.autoExpandFullText();
      });
      PopsPanel.execMenu("JianShuArticleCenter", () => {
        return this.articleCenter();
      });
      PopsPanel.execMenu("JianShuShieldRelatedArticles", () => {
        return this.shieldRelatedArticles();
      });
      PopsPanel.execMenu("jianshu-shieldClientDialog", () => {
        this.shieldClientDialog();
      });
      PopsPanel.execMenuOnce("JianShuShieldUserComments", () => {
        return this.shieldUserComments();
      });
      PopsPanel.execMenuOnce("JianShuShieldRecommendedReading", () => {
        return this.shieldRecommendedReading();
      });
      PopsPanel.execMenuOnce("jianshu-shieldTopNav", () => {
        return this.shieldTopNav();
      });
      PopsPanel.execMenuOnce("jianshu-shieldBottomToolbar", () => {
        return this.shieldBottomToolbar();
      });
    },
    /**
     * 添加屏蔽CSS
     */
    addCSS() {
      log.info("添加屏蔽CSS");
      return addStyle(ShieldCSS);
    },
    /**
     * 全文居中
     */
    articleCenter() {
      log.info("全文居中");
      let result = [];
      result.push(
        CommonUtils.addBlockCSS("div[role=main] aside", "div._3Pnjry"),
        addStyle(
          /*css*/
          `
			div[role=main] aside,
			div._3Pnjry{
				display: none !important;
			}
			div._gp-ck{
				width: 100% !important;
			}`
        )
      );
      waitForElementToRemove("div[role=main] aside");
      waitForElementToRemove("div._3Pnjry");
      utils.waitNodeList("div._gp-ck").then((nodeList) => {
        nodeList.forEach((item) => {
          item.style["width"] = "100%";
        });
      });
      return result;
    },
    /**
     * 去除剪贴板劫持
     */
    removeClipboardHijacking() {
      log.info("去除剪贴板劫持");
      const stopNativePropagation = (event) => {
        event.stopPropagation();
      };
      window.addEventListener("copy", stopNativePropagation, true);
      document.addEventListener("copy", stopNativePropagation, true);
    },
    /**
     * 自动展开全文
     */
    autoExpandFullText() {
      utils.waitNode(`div#homepage div[class*="dialog-"]`).then((element) => {
        element.style["visibility"] = "hidden";
        log.info("自动展开全文");
        utils.mutationObserver(element, {
          callback: (mutations) => {
            if (mutations.length == 0) {
              return;
            }
            mutations.forEach((mutationItem) => {
              var _a2;
              if (mutationItem.target.style["display"] != "none") {
                log.success("自动展开全文-自动点击");
                (_a2 = document.querySelector(
                  'div#homepage div[class*="dialog-"] .cancel'
                )) == null ? void 0 : _a2.click();
              }
            });
          },
          config: {
            /* 子节点的变动（新增、删除或者更改） */
            childList: false,
            /* 属性的变动 */
            attributes: true,
            /* 节点内容或节点文本的变动 */
            characterData: true,
            /* 是否将观察器应用于该节点的所有后代节点 */
            subtree: true
          }
        });
      });
    },
    /**
     * 去除简书拦截其它网址的url并自动跳转
     */
    jumpRedirect() {
      if (JianshuRouter.isGoWild()) {
        log.success("去除简书拦截其它网址的url并自动跳转");
        window.stop();
        let search = window.location.href.replace(
          window.location.origin + "/",
          ""
        );
        search = decodeURIComponent(search);
        let newURL = search.replace(/^go-wild\?ac=2&url=/gi, "").replace(/^https:\/\/link.zhihu.com\/\?target\=/gi, "");
        window.location.href = newURL;
      }
    },
    /**
     * 屏蔽相关文章
     */
    shieldRelatedArticles() {
      log.info("屏蔽相关文章");
      return CommonUtils.addBlockCSS(
        'div[role="main"] > div > section:nth-child(2)'
      );
    },
    /**
     * 【屏蔽】客户端弹窗
     */
    shieldClientDialog() {
      log.info("【屏蔽】客户端弹窗");
      CommonUtils.addBlockCSS(
        'div:has(>div[class*="-mask"]:not([class*="-mask-hidden"]) + div[tabindex="-1"][role="dialog"])'
      );
      utils.waitNode(
        `div[class*="-mask"]:not([class*="-mask-hidden"]) + div[tabindex="-1"][role="dialog"]`
      ).then((element) => {
        log.success("弹窗出现");
        utils.waitPropertyByInterval(
          element,
          () => {
            var _a2, _b, _c, _d;
            let react = utils.getReactObj(element);
            return (_d = (_c = (_b = (_a2 = react == null ? void 0 : react.reactInternalInstance) == null ? void 0 : _a2.return) == null ? void 0 : _b.return) == null ? void 0 : _c.memoizedProps) == null ? void 0 : _d.onClose;
          },
          250,
          1e4
        ).then(() => {
          let react = utils.getReactObj(element);
          react.reactInternalInstance.return.return.memoizedProps.onClose(
            new Event("click")
          );
          log.success("调用函数关闭弹窗");
        });
      });
    },
    /**
     * 屏蔽评论区
     */
    shieldUserComments() {
      log.info("屏蔽评论区");
      return CommonUtils.addBlockCSS("div#note-page-comment");
    },
    /**
     * 屏蔽底部推荐阅读
     */
    shieldRecommendedReading() {
      log.info("屏蔽底部推荐阅读");
      return CommonUtils.addBlockCSS(
        'div[role="main"] > div > section:last-child'
      );
    },
    /**
     * 【屏蔽】顶部导航栏
     */
    shieldTopNav() {
      log.info("【屏蔽】顶部导航栏");
      return CommonUtils.addBlockCSS("header");
    },
    /**
     * 【屏蔽】底部工具栏
     */
    shieldBottomToolbar() {
      log.info("【屏蔽】底部工具栏");
      return CommonUtils.addBlockCSS("footer");
    }
  };
  const M_Jianshu = {
    init() {
      this.addCSS();
      PopsPanel.execMenu("JianShuAutoJumpRedirect_Mobile", () => {
        Jianshu.jumpRedirect();
      });
      PopsPanel.execMenu("JianShuHijackSchemeScriptLabel_Mobile", () => {
        this.handlePrototype();
      });
      PopsPanel.execMenu("JianShuRemoveClipboardHijacking_Mobile", () => {
        Jianshu.removeClipboardHijacking();
      });
      PopsPanel.execMenu("JianShuAutoExpandFullText_Mobile", () => {
        Jianshu.autoExpandFullText();
      });
      PopsPanel.execMenuOnce("JianShuremoveFooterRecommendRead", () => {
        return this.removeFooterRecommendRead();
      });
      PopsPanel.execMenu("JianShuShieldUserCommentsMobile", () => {
        return this.shieldUserComments();
      });
    },
    /**
     * 添加屏蔽CSS
     */
    addCSS() {
      Jianshu.addCSS();
    },
    /**
     * 手机-屏蔽底部推荐阅读
     */
    removeFooterRecommendRead() {
      log.info("屏蔽底部推荐阅读");
      return CommonUtils.addBlockCSS("#recommended-notes");
    },
    /**
     * 处理原型
     */
    handlePrototype() {
      log.info("处理原型添加script标签");
      let originalAppendChild = Node.prototype.appendChild;
      _unsafeWindow.Node.prototype.appendChild = function(element) {
        let allowElementLocalNameList = ["img"];
        if (element.src && !element.src.includes("jianshu.io") && !allowElementLocalNameList.includes(element.localName)) {
          log.success(["禁止添加的元素", element]);
          return null;
        } else {
          return originalAppendChild.call(this, element);
        }
      };
    },
    /**
     * 屏蔽评论区
     */
    shieldUserComments() {
      log.info("屏蔽评论区");
      return CommonUtils.addBlockCSS("#comment-main");
    }
  };
  PopsPanel.init();
  let isMobile = utils.isPhone();
  let CHANGE_ENV_SET_KEY = "change_env_set";
  let chooseMode = _GM_getValue(CHANGE_ENV_SET_KEY);
  GM_Menu.add({
    key: CHANGE_ENV_SET_KEY,
    text: `⚙ 自动: ${isMobile ? "移动端" : "PC端"}`,
    autoReload: false,
    isStoreValue: false,
    showText(text) {
      if (chooseMode == null) {
        return text;
      }
      return text + ` 手动: ${chooseMode == 1 ? "移动端" : chooseMode == 2 ? "PC端" : "未知"}`;
    },
    callback: () => {
      let allowValue = [0, 1, 2];
      let chooseText = window.prompt(
        "请输入当前脚本环境判定\n\n自动判断: 0\n移动端: 1\nPC端: 2",
        "0"
      );
      if (!chooseText) {
        return;
      }
      let chooseMode2 = parseInt(chooseText);
      if (isNaN(chooseMode2)) {
        Qmsg.error("输入的不是规范的数字");
        return;
      }
      if (!allowValue.includes(chooseMode2)) {
        Qmsg.error("输入的值必须是0或1或2");
        return;
      }
      if (chooseMode2 == 0) {
        _GM_deleteValue(CHANGE_ENV_SET_KEY);
      } else {
        _GM_setValue(CHANGE_ENV_SET_KEY, chooseMode2);
      }
    }
  });
  if (chooseMode != null) {
    log.info(`手动判定为${chooseMode === 1 ? "移动端" : "PC端"}`);
    if (chooseMode == 1) {
      M_Jianshu.init();
    } else if (chooseMode == 2) {
      Jianshu.init();
    } else {
      Qmsg.error("意外，手动判定的值不在范围内");
      _GM_deleteValue(CHANGE_ENV_SET_KEY);
    }
  } else {
    if (isMobile) {
      log.info("自动判定为移动端");
      M_Jianshu.init();
    } else {
      log.info("自动判定为PC端");
      Jianshu.init();
    }
  }

})(Qmsg, DOMUtils, Utils, pops);