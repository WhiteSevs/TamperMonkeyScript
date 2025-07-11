// ==UserScript==
// @name         CSDN优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.7.11
// @author       WhiteSevs
// @description  支持PC和手机端、屏蔽广告、优化浏览体验、重定向拦截的Url、自动展开全文、自动展开代码块、全文居中、允许复制内容、去除复制内容的小尾巴、自定义屏蔽元素等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.csdn.net/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.7.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.5.11/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.1.11/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.3.8/dist/index.umd.js
// @connect      blog.csdn.net
// @connect      mp-action.csdn.net
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
  const CommonUtil = {
    /**
     * 移除元素（未出现也可以等待出现）
     * @param selector 元素选择器
     */
    waitRemove(...args) {
      args.forEach((selector) => {
        if (typeof selector !== "string") {
          return;
        }
        utils.waitNodeList(selector).then((nodeList) => {
          nodeList.forEach(($el) => $el.remove());
        });
      });
    },
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
     * @example
     * setGMResourceCSS({
     *   keyName: "ViewerCSS",
     *   url: "https://example.com/example.css",
     * })
     */
    setGMResourceCSS(resourceMapData) {
      let cssText = typeof _GM_getResourceText === "function" ? _GM_getResourceText(resourceMapData.keyName) : null;
      if (typeof cssText === "string" && cssText) {
        addStyle(cssText);
      } else {
        CommonUtil.loadStyleLink(resourceMapData.url);
      }
    },
    /**
     * 添加<link>标签
     * @param url
     * @example
     * loadStyleLink("https://example.com/example.css")
     */
    async loadStyleLink(url) {
      let $link = document.createElement("link");
      $link.rel = "stylesheet";
      $link.type = "text/css";
      $link.href = url;
      DOMUtils.ready(() => {
        document.head.appendChild($link);
      });
    },
    /**
     * 添加<script>标签
     * @param url
     * @example
     * loadStyleLink("https://example.com/example.js")
     */
    async loadScript(url) {
      let $script = document.createElement("script");
      $script.src = url;
      return new Promise((resolve) => {
        $script.onload = () => {
          resolve(null);
        };
        (document.head || document.documentElement).appendChild($script);
      });
    },
    /**
     * 将url修复，例如只有search的链接修复为完整的链接
     *
     * 注意：不包括http转https
     * @param url 需要修复的链接
     * @example
     * 修复前：`/xxx/xxx?ss=ssss`
     * 修复后：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
     * @example
     * 修复前：`//xxx/xxx?ss=ssss`
     * 修复后：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
     * @example
     * 修复前：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
     * 修复后：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
     * @example
     * 修复前：`xxx/xxx?ss=ssss`
     * 修复后：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
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
    },
    /**
     * http转https
     * @param url 需要修复的链接
     * @example
     * 修复前：
     * 修复后：
     * @example
     * 修复前：
     * 修复后：
     */
    fixHttps(url) {
      if (url.startsWith("https://")) {
        return url;
      }
      if (!url.startsWith("http://")) {
        return url;
      }
      let urlInstance = new URL(url);
      urlInstance.protocol = "https:";
      return urlInstance.toString();
    },
    /**
     * 禁止页面滚动，默认锁定html和body
     * @example
     * lockScroll();
     * @example
     * lockScroll(document.body);
     */
    lockScroll(...args) {
      let $hidden = document.createElement("style");
      $hidden.innerHTML = /*css*/
      `
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;
      let $elList = [document.documentElement, document.body].concat(
        ...args || []
      );
      $elList.forEach(($el) => {
        $el.classList.add("pops-overflow-hidden-important");
      });
      (document.head || document.documentElement).appendChild($hidden);
      return {
        /**
         * 解除锁定
         */
        recovery() {
          $elList.forEach(($el) => {
            $el.classList.remove("pops-overflow-hidden-important");
          });
          $hidden.remove();
        }
      };
    },
    /**
     * 获取剪贴板文本
     */
    async getClipboardText() {
      function readClipboardText(resolve) {
        navigator.clipboard.readText().then((clipboardText) => {
          resolve(clipboardText);
        }).catch((error) => {
          log.error("读取剪贴板内容失败👉", error);
          resolve("");
        });
      }
      function requestPermissionsWithClipboard(resolve) {
        navigator.permissions.query({
          // @ts-ignore
          name: "clipboard-read"
        }).then((permissionStatus) => {
          readClipboardText(resolve);
        }).catch((error) => {
          log.error(
            "申请剪贴板权限失败，尝试直接读取👉",
            error.message ?? error.name ?? error.stack
          );
          readClipboardText(resolve);
        });
      }
      function checkClipboardApi() {
        if (typeof navigator?.clipboard?.readText !== "function") {
          return false;
        }
        if (typeof navigator?.permissions?.query !== "function") {
          return false;
        }
        return true;
      }
      return new Promise((resolve) => {
        if (!checkClipboardApi()) {
          resolve("");
          return;
        }
        if (document.hasFocus()) {
          requestPermissionsWithClipboard(resolve);
        } else {
          window.addEventListener(
            "focus",
            () => {
              requestPermissionsWithClipboard(resolve);
            },
            {
              once: true
            }
          );
        }
      });
    },
    /**
     * html转义
     * @param unsafe
     */
    escapeHtml(unsafe) {
      return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/©/g, "&copy;").replace(/®/g, "&reg;").replace(/™/g, "&trade;").replace(/→/g, "&rarr;").replace(/←/g, "&larr;").replace(/↑/g, "&uarr;").replace(/↓/g, "&darr;").replace(/—/g, "&mdash;").replace(/–/g, "&ndash;").replace(/…/g, "&hellip;").replace(/ /g, "&nbsp;").replace(/\r\n/g, "<br>").replace(/\r/g, "<br>").replace(/\n/g, "<br>").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
    }
  };
  const PanelSettingConfig = {
    /** Toast位置 */
    qmsg_config_position: {
      key: "qmsg-config-position",
      defaultValue: "bottom"
    },
    /** 最多显示的数量 */
    qmsg_config_maxnums: {
      key: "qmsg-config-maxnums",
      defaultValue: 3
    },
    /** 逆序弹出 */
    qmsg_config_showreverse: {
      key: "qmsg-config-showreverse",
      defaultValue: false
    }
  };
  const utils = Utils.noConflict();
  const domUtils = DOMUtils.noConflict();
  const __pops = pops;
  const log = new utils.Log(
    _GM_info,
    _unsafeWindow.console || _monkeyWindow.console
  );
  let SCRIPT_NAME = _GM_info?.script?.name || void 0;
  pops.config.Utils.AnyTouch();
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
            return Panel.getValue(
              PanelSettingConfig.qmsg_config_position.key,
              PanelSettingConfig.qmsg_config_position.defaultValue
            );
          }
        },
        maxNums: {
          get() {
            return Panel.getValue(
              PanelSettingConfig.qmsg_config_maxnums.key,
              PanelSettingConfig.qmsg_config_maxnums.defaultValue
            );
          }
        },
        showReverse: {
          get() {
            return Panel.getValue(
              PanelSettingConfig.qmsg_config_showreverse.key,
              PanelSettingConfig.qmsg_config_showreverse.defaultValue
            );
          }
        },
        zIndex: {
          get() {
            let maxZIndex = Utils.getMaxZIndex();
            let popsMaxZIndex = pops.config.InstanceUtils.getPopsMaxZIndex().zIndex;
            return Utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
          }
        }
      }
    )
  );
  __pops.GlobalConfig.setGlobalConfig({
    zIndex: () => {
      let maxZIndex = Utils.getMaxZIndex(void 0, void 0, ($ele) => {
        if ($ele?.classList?.contains("qmsg-shadow-container")) {
          return false;
        }
        if ($ele?.closest("qmsg") && $ele.getRootNode() instanceof ShadowRoot) {
          return false;
        }
      });
      let popsMaxZIndex = pops.config.InstanceUtils.getPopsMaxZIndex().zIndex;
      return Utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
    },
    mask: {
      // 开启遮罩层
      enable: true,
      // 取消点击遮罩层的事件
      clickEvent: {
        toClose: false,
        toHide: false
      }
    }
  });
  const GM_Menu = new utils.GM_Menu({
    GM_getValue: _GM_getValue,
    GM_setValue: _GM_setValue,
    GM_registerMenuCommand: _GM_registerMenuCommand,
    GM_unregisterMenuCommand: _GM_unregisterMenuCommand
  });
  const httpx = new utils.Httpx({
    xmlHttpRequest: _GM_xmlhttpRequest,
    logDetails: DEBUG
  });
  httpx.interceptors.request.use((data) => {
    return data;
  });
  httpx.interceptors.response.use(void 0, (data) => {
    log.error("拦截器-请求错误", data);
    if (data.type === "onabort") {
      Qmsg.warning("请求取消", { consoleLogContent: true });
    } else if (data.type === "onerror") {
      Qmsg.error("请求异常", { consoleLogContent: true });
    } else if (data.type === "ontimeout") {
      Qmsg.error("请求超时", { consoleLogContent: true });
    } else {
      Qmsg.error("其它错误", { consoleLogContent: true });
    }
    return data;
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
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);
  new utils.GM_Cookie();
  const KEY = "GM_Panel";
  const ATTRIBUTE_INIT = "data-init";
  const ATTRIBUTE_KEY = "data-key";
  const ATTRIBUTE_DEFAULT_VALUE = "data-default-value";
  const ATTRIBUTE_INIT_MORE_VALUE = "data-init-more-value";
  const PROPS_STORAGE_API = "data-storage-api";
  const PanelUISize = {
    /**
     * 一般设置界面的尺寸
     */
    setting: {
      get width() {
        if (window.innerWidth < 550) {
          return "88vw";
        } else if (window.innerWidth < 700) {
          return "550px";
        } else {
          return "700px";
        }
      },
      get height() {
        if (window.innerHeight < 450) {
          return "70vh";
        } else if (window.innerHeight < 550) {
          return "450px";
        } else {
          return "550px";
        }
      }
    }
  };
  class StorageUtils {
    /** 存储的键名 */
    storageKey;
    listenerData;
    /**
     * 存储的键名，可以是多层的，如：a.b.c
     *
     * 那就是
     * {
     *  "a": {
     *     "b": {
     *       "c": {
     *         ...你的数据
     *       }
     *     }
     *   }
     * }
     * @param key
     */
    constructor(key) {
      if (typeof key === "string") {
        let trimKey = key.trim();
        if (trimKey == "") {
          throw new Error("key参数不能为空字符串");
        }
        this.storageKey = trimKey;
      } else {
        throw new Error("key参数类型错误，必须是字符串");
      }
      this.listenerData = new Utils.Dictionary();
    }
    /**
     * 获取本地值
     */
    getLocalValue() {
      let localValue = _GM_getValue(this.storageKey);
      if (localValue == null) {
        localValue = {};
        this.setLocalValue(localValue);
      }
      return localValue;
    }
    /**
     * 设置本地值
     * @param value
     */
    setLocalValue(value) {
      _GM_setValue(this.storageKey, value);
    }
    /**
     * 设置值
     * @param key 键
     * @param value 值
     */
    set(key, value) {
      let oldValue = this.get(key);
      let localValue = this.getLocalValue();
      Reflect.set(localValue, key, value);
      this.setLocalValue(localValue);
      this.triggerValueChangeListener(key, oldValue, value);
    }
    /**
     * 获取值
     * @param key 键
     * @param defaultValue 默认值
     */
    get(key, defaultValue) {
      let localValue = this.getLocalValue();
      return Reflect.get(localValue, key) ?? defaultValue;
    }
    /**
     * 获取所有值
     */
    getAll() {
      let localValue = this.getLocalValue();
      return localValue;
    }
    /**
     * 删除值
     * @param key 键
     */
    delete(key) {
      let oldValue = this.get(key);
      let localValue = this.getLocalValue();
      Reflect.deleteProperty(localValue, key);
      this.setLocalValue(localValue);
      this.triggerValueChangeListener(key, oldValue, void 0);
    }
    /**
     * 判断是否存在该值
     */
    has(key) {
      let localValue = this.getLocalValue();
      return Reflect.has(localValue, key);
    }
    /**
     * 获取所有键
     */
    keys() {
      let localValue = this.getLocalValue();
      return Reflect.ownKeys(localValue);
    }
    /**
     * 获取所有值
     */
    values() {
      let localValue = this.getLocalValue();
      return Reflect.ownKeys(localValue).map(
        (key) => Reflect.get(localValue, key)
      );
    }
    /**
     * 清空所有值
     */
    clear() {
      _GM_deleteValue(this.storageKey);
    }
    /**
     * 监听值改变
     * + .set
     * + .delete
     * @param key 监听的键
     * @param callback 值改变的回调函数
     */
    addValueChangeListener(key, callback) {
      let listenerId = Math.random();
      let listenerData = this.listenerData.get(key) || [];
      listenerData.push({
        id: listenerId,
        key,
        callback
      });
      this.listenerData.set(key, listenerData);
      return listenerId;
    }
    /**
     * 移除监听
     * @param listenerId 监听的id或键名
     */
    removeValueChangeListener(listenerId) {
      let flag = false;
      for (const [key, listenerData] of this.listenerData.entries()) {
        for (let index = 0; index < listenerData.length; index++) {
          const value = listenerData[index];
          if (typeof listenerId === "string" && value.key === listenerId || typeof listenerId === "number" && value.id === listenerId) {
            listenerData.splice(index, 1);
            index--;
            flag = true;
          }
        }
        this.listenerData.set(key, listenerData);
      }
      return flag;
    }
    /**
     * 主动触发监听器
     * @param key 键
     * @param oldValue （可选）旧值
     * @param newValue （可选）新值
     */
    triggerValueChangeListener(key, oldValue, newValue) {
      if (!this.listenerData.has(key)) {
        return;
      }
      let listenerData = this.listenerData.get(key);
      for (let index = 0; index < listenerData.length; index++) {
        const data = listenerData[index];
        if (typeof data.callback === "function") {
          let value = this.get(key);
          let __newValue;
          let __oldValue;
          if (typeof oldValue !== "undefined" && arguments.length >= 2) {
            __oldValue = oldValue;
          } else {
            __oldValue = value;
          }
          if (typeof newValue !== "undefined" && arguments.length > 2) {
            __newValue = newValue;
          } else {
            __newValue = value;
          }
          data.callback(key, __oldValue, __newValue);
        }
      }
    }
  }
  const PopsPanelStorageApi = new StorageUtils(KEY);
  const PanelContent = {
    $data: {
      /**
       * @private
       */
      __contentConfig: null,
      get contentConfig() {
        if (this.__contentConfig == null) {
          this.__contentConfig = new utils.Dictionary();
        }
        return this.__contentConfig;
      }
    },
    /**
     * 设置所有配置项，用于初始化默认的值
     *
     * 如果是第一组添加的话，那么它默认就是设置菜单打开的配置
     * @param configList 配置项
     */
    addContentConfig(configList) {
      if (!Array.isArray(configList)) {
        configList = [configList];
      }
      let index = this.$data.contentConfig.keys().length;
      this.$data.contentConfig.set(index, configList);
    },
    /**
     * 获取所有的配置内容，用于初始化默认的值
     */
    getAllContentConfig() {
      return this.$data.contentConfig.values().flat();
    },
    /**
     * 获取配置内容
     * @param index 配置索引
     */
    getConfig(index = 0) {
      return this.$data.contentConfig.get(index) ?? [];
    },
    /**
     * 获取默认左侧底部的配置项
     */
    getDefaultBottomContentConfig() {
      return [
        {
          id: "script-version",
          title: `版本：${_GM_info?.script?.version || "未知"}`,
          isBottom: true,
          forms: [],
          clickFirstCallback(event, rightHeaderElement, rightContainerElement) {
            window.open(
              _GM_info?.script?.namespace || "https://github.com/WhiteSevs/TamperMonkeyScript",
              "_blank"
            );
            return false;
          }
        }
      ];
    }
  };
  const PanelMenu = {
    $data: {
      __menuOption: [
        {
          key: "show_pops_panel_setting",
          text: "⚙ 设置",
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            Panel.showPanel(PanelContent.getConfig(0));
          }
        }
      ],
      get menuOption() {
        return this.__menuOption;
      }
    },
    init() {
      this.initExtensionsMenu();
    },
    /**
     * 初始化菜单项
     */
    initExtensionsMenu() {
      if (!Panel.isTopWindow()) {
        return;
      }
      GM_Menu.add(this.$data.menuOption);
    },
    /**
     * 添加菜单项
     * @param option 菜单配置
     */
    addMenuOption(option) {
      if (!Array.isArray(option)) {
        option = [option];
      }
      this.$data.menuOption.push(...option);
    },
    /**
     * 更新菜单项
     * @param option 菜单配置
     */
    updateMenuOption(option) {
      if (!Array.isArray(option)) {
        option = [option];
      }
      option.forEach((optionItem) => {
        let findIndex = this.$data.menuOption.findIndex((it) => {
          return it.key === optionItem.key;
        });
        if (findIndex !== -1) {
          this.$data.menuOption[findIndex] = optionItem;
        }
      });
    },
    /**
     * 获取菜单项
     * @param [index=0] 索引
     */
    getMenuOption(index = 0) {
      return this.$data.menuOption[index];
    },
    /**
     * 删除菜单项
     * @param [index=0] 索引
     */
    deleteMenuOption(index = 0) {
      this.$data.menuOption.splice(index, 1);
    }
  };
  const Panel = {
    /** 数据 */
    $data: {
      /**
       * @private
       */
      __configDefaultValueData: null,
      /**
       * @private
       */
      __onceExecMenuData: null,
      /**
       * @private
       */
      __onceExecData: null,
      /**
       * @private
       */
      __panelConfig: {},
      $panel: null,
      /**
       * 菜单项的默认值
       */
      get configDefaultValueData() {
        if (this.__configDefaultValueData == null) {
          this.__configDefaultValueData = new utils.Dictionary();
        }
        return this.__configDefaultValueData;
      },
      /**
       * 成功只执行了一次的项
       */
      get onceExecMenuData() {
        if (this.__onceExecMenuData == null) {
          this.__onceExecMenuData = new utils.Dictionary();
        }
        return this.__onceExecMenuData;
      },
      /**
       * 成功只执行了一次的项
       */
      get onceExecData() {
        if (this.__onceExecData == null) {
          this.__onceExecData = new utils.Dictionary();
        }
        return this.__onceExecData;
      },
      /** 脚本名，一般用在设置的标题上 */
      get scriptName() {
        return SCRIPT_NAME;
      },
      /**
       * pops.panel的默认配置
       */
      get panelConfig() {
        return this.__panelConfig;
      },
      set panelConfig(value) {
        this.__panelConfig = value;
      },
      /** 菜单项的总值在本地数据配置的键名 */
      key: KEY,
      /** 菜单项在attributes上配置的菜单键 */
      attributeKeyName: ATTRIBUTE_KEY,
      /** 菜单项在attributes上配置的菜单默认值 */
      attributeDefaultValueName: ATTRIBUTE_DEFAULT_VALUE
    },
    init() {
      this.initContentDefaultValue();
      PanelMenu.init();
    },
    /** 判断是否是顶层窗口 */
    isTopWindow() {
      return _unsafeWindow.top === _unsafeWindow.self;
    },
    /** 初始化菜单项的默认值保存到本地数据中 */
    initContentDefaultValue() {
      const initDefaultValue = (config) => {
        if (!config.attributes) {
          return;
        }
        if (config.type === "button" || config.type === "forms" || config.type === "deepMenu") {
          return;
        }
        let needInitConfig = {};
        let key = config.attributes[ATTRIBUTE_KEY];
        if (key != null) {
          needInitConfig[key] = config.attributes[ATTRIBUTE_DEFAULT_VALUE];
        }
        let __attr_init__ = config.attributes[ATTRIBUTE_INIT];
        if (typeof __attr_init__ === "function") {
          let __attr_result__ = __attr_init__();
          if (typeof __attr_result__ === "boolean" && !__attr_result__) {
            return;
          }
        }
        let initMoreValue = config.attributes[ATTRIBUTE_INIT_MORE_VALUE];
        if (initMoreValue && typeof initMoreValue === "object") {
          Object.assign(needInitConfig, initMoreValue);
        }
        let needInitConfigList = Object.keys(needInitConfig);
        if (!needInitConfigList.length) {
          log.warn(["请先配置键", config]);
          return;
        }
        needInitConfigList.forEach((__key) => {
          let __defaultValue = needInitConfig[__key];
          this.setDefaultValue(__key, __defaultValue);
        });
      };
      const loopInitDefaultValue = (configList) => {
        for (let index = 0; index < configList.length; index++) {
          let configItem = configList[index];
          initDefaultValue(configItem);
          let childForms = configItem.forms;
          if (childForms && Array.isArray(childForms)) {
            loopInitDefaultValue(childForms);
          }
        }
      };
      const contentConfigList = [...PanelContent.getAllContentConfig()];
      for (let index = 0; index < contentConfigList.length; index++) {
        let leftContentConfigItem = contentConfigList[index];
        if (!leftContentConfigItem.forms) {
          continue;
        }
        const rightContentConfigList = leftContentConfigItem.forms;
        if (rightContentConfigList && Array.isArray(rightContentConfigList)) {
          loopInitDefaultValue(rightContentConfigList);
        }
      }
    },
    /**
     * 设置初始化使用的默认值
     */
    setDefaultValue(key, defaultValue) {
      if (this.$data.configDefaultValueData.has(key)) {
        log.warn("请检查该key(已存在): " + key);
      }
      this.$data.configDefaultValueData.set(key, defaultValue);
    },
    /**
     * 设置值
     * @param key 键
     * @param value 值
     */
    setValue(key, value) {
      PopsPanelStorageApi.set(key, value);
    },
    /**
     * 获取值
     * @param key 键
     * @param defaultValue 默认值
     */
    getValue(key, defaultValue) {
      let localValue = PopsPanelStorageApi.get(key);
      if (localValue == null) {
        if (this.$data.configDefaultValueData.has(key)) {
          return this.$data.configDefaultValueData.get(key);
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
      PopsPanelStorageApi.delete(key);
    },
    /**
     * 判断该键是否存在
     * @param key 键
     */
    hasKey(key) {
      return PopsPanelStorageApi.has(key);
    },
    /**
     * 监听调用setValue、deleteValue
     * @param key 需要监听的键
     * @param callback
     */
    addValueChangeListener(key, callback) {
      let listenerId = PopsPanelStorageApi.addValueChangeListener(
        key,
        (__key, __newValue, __oldValue) => {
          callback(key, __oldValue, __newValue);
        }
      );
      return listenerId;
    },
    /**
     * 移除监听
     * @param listenerId 监听的id
     */
    removeValueChangeListener(listenerId) {
      PopsPanelStorageApi.removeValueChangeListener(listenerId);
    },
    /**
     * 主动触发菜单值改变的回调
     * @param key 菜单键
     * @param newValue 想要触发的新值，默认使用当前值
     * @param oldValue 想要触发的旧值，默认使用当前值
     */
    triggerMenuValueChange(key, newValue, oldValue) {
      PopsPanelStorageApi.triggerValueChangeListener(key, oldValue, newValue);
    },
    /**
     * 移除已执行的仅执行一次的菜单
     * @param key 键
     */
    deleteExecMenuOnce(key) {
      this.$data.onceExecMenuData.delete(key);
      let flag = PopsPanelStorageApi.removeValueChangeListener(key);
      return flag;
    },
    /**
     * 移除已执行的仅执行一次的菜单
     * @param key 键
     */
    deleteOnceExec(key) {
      this.$data.onceExecData.delete(key);
    },
    /**
     * 执行菜单
     *
     * @param queryKey 键|键数组
     * @param callback 执行的回调函数
     * @param checkExec 判断是否执行回调
     *
     * （默认）如果想要每个菜单是`与`关系，即每个菜单都判断为开启，那么就判断它们的值&就行
     *
     * 如果想要任意菜单存在true再执行，那么判断它们的值|就行
     *
     * + 返回值都为`true`，执行回调，如果回调返回了<style>元素，该元素会在监听到值改变时被移除掉
     * + 返回值有一个为`false`，则不执行回调，且移除之前回调函数返回的<style>元素
     * @param once 是否只执行一次，默认true
     *
     * + true （默认）只执行一次，且会监听键的值改变
     * + false 不会监听键的值改变
     */
    exec(queryKey, callback, checkExec, once = true) {
      const that = this;
      let queryKeyFn;
      if (typeof queryKey === "string" || Array.isArray(queryKey)) {
        queryKeyFn = () => queryKey;
      } else {
        queryKeyFn = queryKey;
      }
      let isArrayKey = false;
      let queryKeyResult = queryKeyFn();
      let keyList = [];
      if (Array.isArray(queryKeyResult)) {
        isArrayKey = true;
        keyList = queryKeyResult;
      } else {
        keyList.push(queryKeyResult);
      }
      let findNotInDataKey = keyList.find(
        (it) => !this.$data.configDefaultValueData.has(it)
      );
      if (findNotInDataKey) {
        log.warn(`${findNotInDataKey} 键不存在`);
        return;
      }
      let storageKey = JSON.stringify(keyList);
      if (once) {
        if (this.$data.onceExecMenuData.has(storageKey)) {
          return;
        }
        this.$data.onceExecMenuData.set(storageKey, 1);
      }
      let storeValueList = [];
      let listenerIdList = [];
      let dynamicAddStyleNodeCallback = (value, $style) => {
        let dynamicResultList = [];
        if (!Array.isArray($style)) {
          $style = [$style];
        }
        $style.forEach(($styleItem) => {
          if ($styleItem == null) {
            return;
          }
          if ($styleItem instanceof HTMLStyleElement) {
            dynamicResultList.push($styleItem);
            return;
          }
        });
        {
          storeValueList = storeValueList.concat(dynamicResultList);
        }
      };
      let getMenuValue = (key) => {
        let value = this.getValue(key);
        return value;
      };
      let clearBeforeStoreValue = () => {
        for (let index = 0; index < storeValueList.length; index++) {
          let $css = storeValueList[index];
          $css.remove();
          storeValueList.splice(index, 1);
          index--;
        }
      };
      let checkMenuExec = () => {
        let flag = false;
        if (typeof checkExec === "function") {
          flag = checkExec(keyList);
        } else {
          flag = keyList.every((key) => getMenuValue(key));
        }
        return flag;
      };
      let valueChangeCallback = (valueOption) => {
        let execFlag = checkMenuExec();
        let resultList = [];
        if (execFlag) {
          let valueList = keyList.map((key) => this.getValue(key));
          let callbackResult = callback({
            value: isArrayKey ? valueList : valueList[0],
            addStyleElement: (...args) => {
              return dynamicAddStyleNodeCallback(true, ...args);
            }
          });
          if (!Array.isArray(callbackResult)) {
            callbackResult = [callbackResult];
          }
          callbackResult.forEach((it) => {
            if (it == null) {
              return;
            }
            if (it instanceof HTMLStyleElement) {
              resultList.push(it);
              return;
            }
          });
        }
        clearBeforeStoreValue();
        storeValueList = [...resultList];
      };
      once && keyList.forEach((key) => {
        let listenerId = this.addValueChangeListener(
          key,
          (key2, newValue, oldValue) => {
            valueChangeCallback();
          }
        );
        listenerIdList.push(listenerId);
      });
      valueChangeCallback();
      let result = {
        /**
         * 清空菜单执行情况
         *
         * + 清空存储的元素列表
         * + 清空值改变的监听器
         * + 清空存储的一次执行的键
         */
        clear() {
          this.clearStoreStyleElements();
          this.removeValueChangeListener();
          once && that.$data.onceExecMenuData.delete(storageKey);
        },
        /**
         * 清空存储的元素列表
         */
        clearStoreStyleElements: () => {
          return clearBeforeStoreValue();
        },
        /**
         * 移除值改变的监听器
         */
        removeValueChangeListener: () => {
          listenerIdList.forEach((listenerId) => {
            this.removeValueChangeListener(listenerId);
          });
        }
      };
      return result;
    },
    /**
     * 自动判断菜单是否启用，然后执行回调
     * @param key
     * @param callback 回调
     * @param [isReverse=false] 逆反判断菜单启用
     */
    execMenu(key, callback, isReverse = false) {
      return this.exec(
        key,
        (option) => {
          return callback(option);
        },
        (keyList) => {
          let execFlag = keyList.every((__key__) => {
            let flag = !!this.getValue(__key__);
            isReverse && (flag = !flag);
            return flag;
          });
          return execFlag;
        },
        false
      );
    },
    /**
     * 自动判断菜单是否启用，然后执行回调，只会执行一次
     *
     * 它会自动监听值改变（设置中的修改），改变后如果未执行，则执行一次
     * @param key
     * @param callback 回调
     * @param getValueFn 自定义处理获取当前值，值true是启用并执行回调，值false是不执行回调
     * @param handleValueChangeFn 自定义处理值改变时的回调，值true是启用并执行回调，值false是不执行回调
     */
    execMenuOnce(key, callback) {
      return this.exec(
        key,
        callback,
        (keyList) => {
          let execFlag = keyList.every((__key__) => {
            let flag = !!this.getValue(__key__);
            return flag;
          });
          return execFlag;
        },
        true
      );
    },
    /**
     * 根据key执行一次
     * @param key 键
     * @param callback 回调
     */
    onceExec(key, callback) {
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (this.$data.onceExecData.has(key)) {
        return;
      }
      callback();
      this.$data.onceExecData.set(key, 1);
    },
    /**
     * 显示设置面板
     * @param content 显示的内容配置
     * @param [title] 标题
     * @param [preventDefaultContentConfig=false] 是否阻止默认添加内容配置（版本号）
     */
    showPanel(content, title = `${SCRIPT_NAME}-设置`, preventDefaultContentConfig = false) {
      let notHasBottomVersionContentConfig = content.some((it) => {
        let isBottom = typeof it.isBottom === "function" ? it.isBottom() : Boolean(it.isBottom);
        return !isBottom && it.id !== "script-version";
      });
      if (!preventDefaultContentConfig && notHasBottomVersionContentConfig) {
        content.push(...PanelContent.getDefaultBottomContentConfig());
      }
      let $panel = __pops.panel({
        ...{
          title: {
            text: title,
            position: "center",
            html: false,
            style: ""
          },
          content,
          btn: {
            close: {
              enable: true,
              callback: (details, event) => {
                details.close();
                this.$data.$panel = null;
              }
            }
          },
          mask: {
            enable: true,
            clickEvent: {
              toClose: true,
              toHide: false
            },
            clickCallBack: (originalRun, config) => {
              originalRun();
              this.$data.$panel = null;
            }
          },
          width: PanelUISize.setting.width,
          height: PanelUISize.setting.height,
          drag: true,
          only: true
        },
        ...this.$data.panelConfig
      });
      this.$data.$panel = $panel;
    }
  };
  const CSDNRouter = {
    /**
     * 判断是否是华为云联盟
     * + huaweicloud.csdn.net
     */
    isHuaWeiCloudBlog() {
      return Boolean(/huaweicloud.csdn.net/i.test(window.location.origin));
    },
    /**
     * 判断是否是博客
     * + blog.csdn.net
     */
    isBlog() {
      return Boolean(/blog.csdn.net/i.test(window.location.origin));
    },
    /** 
     * 博客帖子
     */
    isBlogArticle() {
      return this.isBlog() && window.location.pathname.includes("/article/details/");
    },
    /**
     * 判断是否是文库
     * + wenku.csdn.net
     */
    isWenKu() {
      return Boolean(/wenku.csdn.net/i.test(window.location.origin));
    },
    /**
     * 判断是否是链接
     * + link.csdn.net
     */
    isLink() {
      return window.location.hostname === "link.csdn.net";
    },
    /**
     * 判断是否是搜索
     * + so.csdn.net
     */
    isSo() {
      return window.location.hostname === "so.csdn.net";
    },
    /**
     * 判断是否是C知道
     * + so.csdn.net/know
     * + /chat
     * + /so/ai
     */
    isSoCKnow() {
      return this.isSo() && (window.location.pathname.startsWith("/chat") || window.location.pathname.startsWith("/so/ai"));
    },
    /**
     * 判断是否是资源页面
     * + download.csdn.net
     */
    isDownload() {
      return window.location.hostname === "download.csdn.net";
    }
  };
  const ShieldCSS$4 = "/* 底部免费抽xxx奖品广告 */\r\ndiv.siderbar-box,\r\n/* 华为开发者联盟加入社区 */\r\ndiv.user-desc.user-desc-fix {\r\n  display: none !important;\r\n}\r\n";
  const CSDNHuaWeiCloud = {
    init() {
      addStyle(ShieldCSS$4);
      Panel.execMenuOnce(
        "csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",
        () => {
          return this.shieldCloudDeveloperTaskChallengeEvent();
        }
      );
      Panel.execMenuOnce("csdn-hua-wei-cloud-autoExpandContent", () => {
        return this.autoExpandContent();
      });
      Panel.execMenuOnce(
        "csdn-hua-wei-cloud-shieldLeftFloatingButton",
        () => {
          return this.shieldLeftFloatingButton();
        }
      );
      Panel.execMenuOnce("csdn-hua-wei-cloud-blockRightColumn", () => {
        return this.blockRightColumn();
      });
      Panel.execMenuOnce(
        "csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",
        () => {
          return this.blockRecommendedContentAtTheBottom();
        }
      );
      Panel.execMenuOnce(
        "csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",
        () => {
          return this.shieldTheBottomForMoreRecommendations();
        }
      );
    },
    /**
     * 自动展开内容
     */
    autoExpandContent() {
      log.info("自动展开全文");
      return [
        CommonUtil.addBlockCSS("div.article-show-more"),
        addStyle(`
			/* 自动展开全文 */
			.main-content .user-article{
				height: auto !important;
				overflow: auto !important;
			}
			`)
      ];
    },
    /**
     * 屏蔽云开发者任务挑战活动
     */
    shieldCloudDeveloperTaskChallengeEvent() {
      log.info("屏蔽云开发者任务挑战活动");
      return CommonUtil.addBlockCSS(".luck-draw-modal-warp");
    },
    /**
     * 屏蔽左侧悬浮按钮
     */
    shieldLeftFloatingButton() {
      log.info("屏蔽左侧悬浮按钮，包括当前阅读量、点赞按钮、评论按钮、分享按钮");
      return CommonUtil.addBlockCSS("div.toolbar-wrapper.article-interact-bar");
    },
    /**
     * 屏蔽右侧栏
     */
    blockRightColumn() {
      log.info("屏蔽右侧栏，包括相关产品-活动日历-运营活动-热门标签");
      return CommonUtil.addBlockCSS("div.page-home-right.dp-aside-right");
    },
    /**
     * 屏蔽底部推荐内容
     */
    blockRecommendedContentAtTheBottom() {
      log.info("屏蔽底部推荐内容");
      return CommonUtil.addBlockCSS("div.recommend-card-box");
    },
    /**
     * 屏蔽底部更多推荐
     */
    shieldTheBottomForMoreRecommendations() {
      log.info("屏蔽底部更多推荐");
      return CommonUtil.addBlockCSS("div.more-article");
    }
  };
  const BlogArticleCenterCSS = '#mainBox main {\r\n	width: inherit !important;\r\n}\r\n/* 当文章向下滚动时，触发左侧信息悬浮 */\r\naside.blog_container_aside[style*="position: fixed;"] {\r\n	display: none !important;\r\n}\r\n\r\n@media (min-width: 1320px) and (max-width: 1380px) {\r\n	.nodata .container {\r\n		width: 900px !important;\r\n	}\r\n\r\n	.nodata .container main {\r\n		width: 900px;\r\n	}\r\n\r\n	.nodata .container main #pcCommentBox pre > ol.hljs-ln {\r\n		width: 490px !important;\r\n	}\r\n\r\n	.nodata .container main .articleConDownSource {\r\n		width: 500px;\r\n	}\r\n}\r\n\r\n@media screen and (max-width: 1320px) {\r\n	.nodata .container {\r\n		width: 760px !important;\r\n	}\r\n\r\n	.nodata .container main {\r\n		width: 760px;\r\n	}\r\n\r\n	.nodata .container main #pcCommentBox pre > ol.hljs-ln {\r\n		width: 490px !important;\r\n	}\r\n\r\n	.nodata .container main .toolbox-list .tool-reward {\r\n		display: none;\r\n	}\r\n\r\n	.nodata\r\n		.container\r\n		main\r\n		.more-toolbox-new\r\n		.toolbox-left\r\n		.profile-box\r\n		.profile-name {\r\n		max-width: 128px;\r\n	}\r\n\r\n	.nodata .container main .articleConDownSource {\r\n		width: 420px;\r\n	}\r\n}\r\n\r\n@media screen and (min-width: 1380px) {\r\n	.nodata .container {\r\n		width: 1010px !important;\r\n	}\r\n\r\n	.nodata .container main {\r\n		width: 1010px;\r\n	}\r\n\r\n	.nodata .container main #pcCommentBox pre > ol.hljs-ln {\r\n		width: 490px !important;\r\n	}\r\n\r\n	.nodata .container main .articleConDownSource {\r\n		width: 560px;\r\n	}\r\n}\r\n\r\n@media (min-width: 1550px) and (max-width: 1700px) {\r\n	.nodata .container {\r\n		width: 820px !important;\r\n	}\r\n\r\n	.nodata .container main {\r\n		width: 820px;\r\n	}\r\n\r\n	.nodata .container main #pcCommentBox pre > ol.hljs-ln {\r\n		width: 690px !important;\r\n	}\r\n\r\n	.nodata .container main .articleConDownSource {\r\n		width: 500px;\r\n	}\r\n}\r\n\r\n@media screen and (min-width: 1700px) {\r\n	.nodata .container {\r\n		width: 1010px !important;\r\n	}\r\n\r\n	.nodata .container main {\r\n		width: 1010px;\r\n	}\r\n\r\n	.nodata .container main #pcCommentBox pre > ol.hljs-ln {\r\n		width: 690px !important;\r\n	}\r\n\r\n	.nodata .container main .articleConDownSource {\r\n		width: 560px;\r\n	}\r\n}\r\n';
  const CSDNBlogArticleRightToolBar = {
    init() {
      Panel.exec(
        "csdn-blog-rightToolbarEnable",
        () => {
          return this.shieldRightToolbar();
        },
        (keyList) => !Panel.getValue(keyList[0]),
        true
      );
      Panel.execMenuOnce("csdn-blog-rightToolbarCreativeCenter", () => {
        return this.shieldCreativeCenter();
      });
      Panel.execMenuOnce("csdn-blog-rightToolbarShowOrSidebar", () => {
        return this.shieldShowOrSidebar();
      });
      Panel.execMenuOnce("csdn-blog-rightToolbarBeginnerGuidance", () => {
        return this.shieldBeginnerGuidance();
      });
      Panel.execMenuOnce("csdn-blog-rightToolbarCustomerService", () => {
        return this.shieldCustomerService();
      });
      Panel.execMenuOnce("csdn-blog-rightToolbarReport", () => {
        return this.shieldReport();
      });
      Panel.execMenuOnce("csdn-blog-rightToolbarBackToTop", () => {
        return this.shieldBackToTop();
      });
      this.initRightToolbarOffset();
      domUtils.ready(() => {
        Panel.execMenuOnce("csdn-blog-addGotoRecommandButton", () => {
          this.addGotoRecommandButton();
        });
      });
    },
    /**
     * 【添加】前往评论按钮，在返回顶部的下面
     */
    addGotoRecommandButton() {
      log.info("【添加】前往评论按钮，在返回顶部的上面");
      let gotoRecommandNode = document.createElement("a");
      gotoRecommandNode.className = "option-box";
      gotoRecommandNode.setAttribute("data-type", "gorecommand");
      gotoRecommandNode.innerHTML = /*html*/
      `
		<img src="https://g.csdnimg.cn/side-toolbar/3.6/images/customer.png" alt="" srcset="">
		<span class="show-txt" style="opacity:100;">前往<br>评论</span>
		`;
      gotoRecommandNode.addEventListener("click", function() {
        let toolbarBoxElement = document.querySelector("#toolBarBox");
        if (!toolbarBoxElement || !toolbarBoxElement.getClientRects().length) {
          let $pcCommentBox = $("#pcCommentBox");
          if ($pcCommentBox && $pcCommentBox.getClientRects().length) {
            toolbarBoxElement = $pcCommentBox;
          } else {
            log.error("评论区处于隐藏状态");
            return;
          }
        }
        log.info("滚动到评论");
        let toolbarBoxOffsetTop = toolbarBoxElement.getBoundingClientRect().top + window.scrollY;
        let csdnToolBarElement = document.querySelector(
          "#csdn-toolbar"
        );
        let csdnToolBarStyles = window.getComputedStyle(csdnToolBarElement);
        let csdnToolBarHeight = csdnToolBarElement.clientHeight - parseFloat(csdnToolBarStyles.paddingTop) - parseFloat(csdnToolBarStyles.paddingBottom);
        window.scrollTo({
          top: toolbarBoxOffsetTop - csdnToolBarHeight - 8,
          left: 0,
          behavior: "smooth"
        });
      });
      utils.waitNode(".csdn-side-toolbar").then(() => {
        let targetElement = document.querySelector(
          ".csdn-side-toolbar a:nth-last-child(2)"
        );
        targetElement.parentElement.insertBefore(
          gotoRecommandNode,
          targetElement.nextSibling
        );
      });
    },
    /**
     * 初始化右侧工具栏的偏移（top、right）
     */
    initRightToolbarOffset() {
      log.info("初始化右侧工具栏的偏移（top、right）");
      addStyle(
        /*css*/
        `
        .csdn-side-toolbar{
          left: unset !important;
        }
        `
      );
      utils.waitNode(".csdn-side-toolbar").then(($sideToolbar) => {
        domUtils.css($sideToolbar, {
          top: parseInt(Panel.getValue("csdn-blog-rightToolbarTopOffset")) + "px",
          right: parseInt(Panel.getValue("csdn-blog-rightToolbarRightOffset")) + "px"
        });
      });
    },
    /**
     * 屏蔽右侧工具栏
     */
    shieldRightToolbar() {
      log.info("屏蔽右侧工具栏");
      return CommonUtil.addBlockCSS(`div.csdn-side-toolbar`);
    },
    /**
     * 【屏蔽】创作中心
     */
    shieldCreativeCenter() {
      log.info("【屏蔽】创作中心");
      return CommonUtil.addBlockCSS(
        ".csdn-side-toolbar .sidetool-writeguide-box"
      );
    },
    /**
     * 【屏蔽】显示/隐藏侧栏
     */
    shieldShowOrSidebar() {
      log.info("【屏蔽】显示/隐藏侧栏");
      return CommonUtil.addBlockCSS(".csdn-side-toolbar a.sidecolumn");
    },
    /**
     * 【屏蔽】新手引导
     */
    shieldBeginnerGuidance() {
      log.info("【屏蔽】新手引导");
      return CommonUtil.addBlockCSS(
        '.csdn-side-toolbar a.option-box[data-type="guide"]'
      );
    },
    /**
     * 【屏蔽】客服
     */
    shieldCustomerService() {
      log.info("【屏蔽】客服");
      return CommonUtil.addBlockCSS(
        '.csdn-side-toolbar a.option-box[data-type="cs"]'
      );
    },
    /**
     * 【屏蔽】举报
     */
    shieldReport() {
      log.info("【屏蔽】举报");
      return CommonUtil.addBlockCSS(
        '.csdn-side-toolbar a.option-box[data-type="report"]'
      );
    },
    /**
     * 【屏蔽】返回顶部
     */
    shieldBackToTop() {
      log.info("【屏蔽】返回顶部");
      return CommonUtil.addBlockCSS(
        '.csdn-side-toolbar a.option-box[data-type="gotop"]'
      );
    }
  };
  const CSDNBlogArticle = {
    init() {
      CSDNBlogArticleRightToolBar.init();
      Panel.execMenuOnce("csdn-blog-articleCenter", () => {
        return this.articleCenter();
      });
      Panel.execMenuOnce("csdn-blog-shieldLoginDialog", () => {
        return this.shieldLoginDialog();
      });
      Panel.execMenuOnce("csdn-blog-autoExpandContent", () => {
        return this.autoExpandContent();
      });
      Panel.execMenuOnce("csdn-blog-autoExpandCodeContent", () => {
        return this.autoExpandCodeContent();
      });
      Panel.exec(
        "csdn-blog-blockComment",
        () => {
          return this.blockComment();
        },
        (keyList) => !Panel.getValue(keyList[0]),
        true
      );
      Panel.exec(
        "csdn-blog-bottomRecommendArticleEnable",
        () => {
          return this.shieldBottomRecommendArticle();
        },
        (keyList) => !Panel.getValue(keyList[0]),
        true
      );
      Panel.execMenuOnce("csdn-blog-shieldBottomSkillTree", () => {
        return this.shieldBottomSkillTree();
      });
      Panel.execMenuOnce("csdn-blog-shieldBottomFloatingToolbar", () => {
        return this.shieldBottomFloatingToolbar();
      });
      Panel.execMenuOnce("csdn-blog-shieldLeftBlogContainerAside", () => {
        return this.shieldLeftBlogContainerAside();
      });
      Panel.execMenuOnce("csdn-blog-shieldRightDirectoryInformation", () => {
        return this.shieldRightDirectoryInformation();
      });
      Panel.execMenuOnce("csdn-blog-shieldArticleSearchTip", () => {
        return this.shieldArticleSearchTip();
      });
      Panel.execMenuOnce("csdn-blog-allowSelectContent", () => {
        return this.allowSelectContent();
      });
      domUtils.ready(() => {
        Panel.execMenuOnce("csdn-blog-identityCSDNDownload", () => {
          this.identityCSDNDownload();
        });
        Panel.execMenuOnce("csdn-blog-clickPreCodeAutomatically", () => {
          this.clickPreCodeAutomatically();
        });
        Panel.execMenuOnce("csdn-blog-restoreComments", () => {
          this.restoreComments();
        });
      });
    },
    /**
     * 点击代码块自动展开
     */
    clickPreCodeAutomatically() {
      log.info("点击代码块自动展开");
      document.addEventListener("click", function(event) {
        let $click = event.target;
        if ($click.localName !== "pre") {
          return;
        }
        $click.style.setProperty("height", "auto");
        $click.querySelector(".hide-preCode-box")?.remove();
      });
    },
    /**
     * 恢复评论到正确位置
     */
    restoreComments() {
      log.info("恢复评论到正确位置-第一条评论");
      utils.waitNode(".first-recommend-box").then(($firstRecommendBox) => {
        let recommendBoxElement = document.querySelector(
          ".recommend-box.insert-baidu-box.recommend-box-style"
        );
        recommendBoxElement.insertBefore(
          $firstRecommendBox,
          recommendBoxElement.firstChild
        );
      });
      log.info("恢复评论到正确位置-第二条评论");
      utils.waitNode(".second-recommend-box").then(($secondRecommendBox) => {
        let recommendBoxElement = document.querySelector(
          ".recommend-box.insert-baidu-box.recommend-box-style"
        );
        recommendBoxElement.insertBefore(
          $secondRecommendBox,
          recommendBoxElement.firstChild
        );
      });
    },
    /**
     * 标识CSDN下载的链接
     */
    identityCSDNDownload() {
      log.info("标识CSDN下载的链接");
      document.querySelectorAll(
        ".recommend-item-box[data-url*='https://download.csdn.net/']"
      ).forEach((item) => {
        if (Panel.getValue("csdn-blog-removeResourceDownloadArticle")) {
          item.remove();
        } else {
          item.querySelector(".content-box").style.setProperty("border", "2px solid red");
        }
      });
    },
    /**
     * 全文居中
     */
    articleCenter() {
      log.info("全文居中");
      return addStyle(BlogArticleCenterCSS);
    },
    /**
     * 屏蔽登录弹窗
     */
    shieldLoginDialog() {
      log.info("屏蔽登录弹窗");
      return CommonUtil.addBlockCSS(`.passport-login-container`);
    },
    /**
     * 自动展开代码块
     */
    autoExpandCodeContent() {
      log.info("自动展开代码块");
      return [
        CommonUtil.addBlockCSS("pre.set-code-hide .hide-preCode-box"),
        addStyle(
          /*css*/
          `
			pre.set-code-hide{
				height: auto !important;
			}
			/* 自动展开代码块 */
			.comment-list-box,
			main div.blog-content-box pre {
				max-height: none !important;
			}
        `
        )
      ];
    },
    /**
     * 自动展开全文
     */
    autoExpandContent() {
      log.info("自动展开全文");
      return addStyle(
        /*css*/
        `
		/* 自动展开全文 */
		#article_content,
		.user-article.user-article-hide {
			height: auto !important;
			overflow: auto !important;
		}
        `
      );
    },
    /**
     * 屏蔽评论区
     */
    blockComment() {
      log.info("屏蔽评论区");
      return CommonUtil.addBlockCSS(`#pcCommentBox`);
    },
    /**
     * 屏蔽底部推荐文章
     */
    shieldBottomRecommendArticle() {
      log.info("屏蔽底部推荐文章");
      return CommonUtil.addBlockCSS(`main > div.recommend-box`);
    },
    /**
     * 屏蔽底部xx技能树
     */
    shieldBottomSkillTree() {
      log.info("屏蔽底部xx技能树");
      return CommonUtil.addBlockCSS(`#treeSkill`);
    },
    /**
     * 屏蔽底部悬浮工具栏
     */
    shieldBottomFloatingToolbar() {
      log.info("屏蔽底部悬浮工具栏");
      return CommonUtil.addBlockCSS(`#toolBarBox`);
    },
    /**
     * 屏蔽左侧博客信息
     */
    shieldLeftBlogContainerAside() {
      log.info("【屏蔽】左侧博客信息");
      return CommonUtil.addBlockCSS(`aside.blog_container_aside`);
    },
    /**
     * 【屏蔽】右侧目录信息
     */
    shieldRightDirectoryInformation() {
      log.info("【屏蔽】右侧目录信息");
      return CommonUtil.addBlockCSS("#rightAsideConcision", "#rightAside");
    },
    /**
     * 屏蔽文章内的选中搜索悬浮提示
     */
    shieldArticleSearchTip() {
      log.info("屏蔽文章内的选中搜索悬浮提示");
      return CommonUtil.addBlockCSS(`#articleSearchTip`);
    },
    /**
     * 允许选择内容
     */
    allowSelectContent() {
      log.info("允许选择内容");
      return addStyle(
        /*css*/
        `
		#content_views,
		#content_views pre,
		#content_views pre code {
			user-select: text !important;
		}
		`
      );
    }
  };
  const WenkuCSS = "#chatgpt-article-detail\r\n  > div.layout-center\r\n  > div.main\r\n  > div.article-box\r\n  > div.cont.first-show.forbid {\r\n  max-height: unset !important;\r\n  height: auto !important;\r\n  overflow: auto !important;\r\n}\r\n\r\n.forbid {\r\n  user-select: text !important;\r\n}\r\n";
  const ShieldCSS$3 = "/* wenku顶部横幅 */\r\n#app > div > div.main.pb-32 > div > div.top-bar,\r\n/* 底部展开全文 */\r\n#chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid > div.open {\r\n  display: none !important;\r\n}";
  const CSDNWenKu = {
    init() {
      addStyle(WenkuCSS);
      addStyle(ShieldCSS$3);
      Panel.execMenuOnce("csdn-wenku-shieldResourceRecommend", () => {
        return this.shieldResourceRecommend();
      });
      Panel.execMenuOnce("csdn-wenku-shieldRightUserInfo", () => {
        return this.shieldRightUserInfo();
      });
      Panel.execMenuOnce("csdn-wenku-shieldRightToolBar", () => {
        return this.shieldRightToolBar();
      });
    },
    /**
     * 【屏蔽】资源推荐
     */
    shieldResourceRecommend() {
      log.info("【屏蔽】资源推荐");
      return CommonUtil.addBlockCSS("#recommend");
    },
    /**
     * 【屏蔽】右侧用户信息
     */
    shieldRightUserInfo() {
      log.info("【屏蔽】右侧用户信息");
      return CommonUtil.addBlockCSS(".layout-right");
    },
    /**
     * 【屏蔽】右侧悬浮工具栏
     */
    shieldRightToolBar() {
      log.info("【屏蔽】右侧悬浮工具栏");
      return CommonUtil.addBlockCSS(".csdn-side-toolbar");
    }
  };
  const CSDNLink = {
    init() {
      Panel.execMenuOnce("csdn-link-jumpRedirect", () => {
        this.jumpRedirect();
      });
    },
    /**
     * 去除CSDN拦截其它网址的url并自动跳转
     * @example
     * https://link.csdn.net/?target=https%3A%2F%2Fjaist.dl.sourceforge.net%2Fproject%2Fportecle%2Fv1.11%2Fportecle-1.11.zip
     */
    jumpRedirect() {
      try {
        let urlSearchParams = new URLSearchParams(window.location.search);
        const URL_KEY = "target";
        if (urlSearchParams.has(URL_KEY)) {
          let target = urlSearchParams.get(URL_KEY);
          let jumpUrl = decodeURIComponent(target);
          log.success(`跳转链接：${jumpUrl}`);
          window.location.href = jumpUrl;
        } else {
          log.error("解析跳转的链接失败，原因：搜索参数中没有target参数");
        }
      } catch (error) {
        Qmsg.error("跳转链接失败：" + error.message);
      }
    }
  };
  const BlogShieldCSS = ".ecommend-item-box.recommend-recommend-box,\r\n.login-mark,\r\n.opt-box.text-center,\r\n.leftPop,\r\n#csdn-shop-window,\r\n.toolbar-advert,\r\n.hide-article-box,\r\n.user-desc.user-desc-fix,\r\n.recommend-card-box,\r\n.more-article,\r\n.article-show-more,\r\n#csdn-toolbar-profile-nologin,\r\n.guide-rr-first,\r\n#recommend-item-box-tow,\r\n/* 发文章得原力分图片提示 */\r\ndiv.csdn-toolbar-creative-mp,\r\n/* 阅读终点，创作起航，您可以撰写心得或摘录文章要点写篇博文。 */\r\n#toolBarBox div.write-guide-buttom-box,\r\n/* 觉得还不错? 一键收藏 */\r\nul.toolbox-list div.tool-active-list,\r\n/* 右边按钮组的最上面的创作话题 */\r\ndiv.csdn-side-toolbar .activity-swiper-box,\r\n.sidetool-writeguide-box .tip-box,\r\n/* 右下角的登录提示 */\r\n.passport-login-tip-container,\r\n/* 全屏双十一红包 */\r\n.csdn-reapck-select,\r\n/* 侧栏的618会员开通 */\r\n.csdn-side-toolbar  .sidecolumn-vip {\r\n	display: none !important;\r\n}\r\n";
  const BlogCSS = "/*.blog_container_aside,\r\n#nav {\r\n	margin-left: -45px;\r\n}\r\n.recommend-right.align-items-stretch.clearfix,\r\n.dl_right_fixed {\r\n	margin-left: 45px;\r\n}*/\r\n";
  const CSDNBlog = {
    init() {
      this.addCSS();
      Panel.execMenuOnce("csdn-blog-shieldTopToolbar", () => {
        return this.shieldTopToolbar();
      });
      domUtils.ready(() => {
        Panel.execMenuOnce("csdn-blog-removeClipboardHijacking", () => {
          this.removeClipboardHijacking();
        });
        Panel.execMenuOnce("csdn-blog-unBlockCopy", () => {
          this.unBlockCopy();
        });
      });
    },
    /**
     * 添加屏蔽CSS和功能CSS
     */
    addCSS() {
      log.info("添加屏蔽CSS和功能CSS");
      return [addStyle(BlogShieldCSS), addStyle(BlogCSS)];
    },
    /**
     * 去除剪贴板劫持
     */
    removeClipboardHijacking() {
      log.info("去除剪贴板劫持");
      let $article_copyright = document.querySelector(".article-copyright");
      if ($article_copyright) {
        $article_copyright.remove();
      }
      if (_unsafeWindow.articleType) {
        _unsafeWindow.articleType = 0;
      }
      if (_unsafeWindow.csdn && _unsafeWindow.csdn.copyright && _unsafeWindow.csdn.copyright.textData) {
        _unsafeWindow.csdn.copyright.textData = "";
      }
      if (_unsafeWindow.csdn && _unsafeWindow.csdn.copyright && _unsafeWindow.csdn.copyright.htmlData) {
        _unsafeWindow.csdn.copyright.htmlData = "";
      }
    },
    /**
     * 取消禁止复制
     */
    unBlockCopy() {
      log.info("取消禁止复制");
      domUtils.on(
        document,
        "click",
        function(event) {
          let $click = event.target;
          let $parent = $click.parentElement;
          if (!$click.classList.contains("hljs-button")) {
            return;
          }
          let $code = $parent.querySelector("code");
          $code = $code || $parent;
          utils.preventEvent(event);
          let copyText = $code.innerText;
          log.info(
            "点击复制按钮复制内容：" + (copyText.length > 8 ? copyText.substring(0, 8) + "..." : copyText)
          );
          utils.setClip(copyText);
          $click.setAttribute("data-title", "复制成功");
        },
        {
          capture: true
        }
      );
      let changeDataTitle = new utils.LockFunction(function(event) {
        let $mouse = event.target;
        if ($mouse.localName !== "pre") {
          return;
        }
        let $hljsBtn = $mouse.querySelector(".hljs-button");
        if ($hljsBtn) {
          $hljsBtn.setAttribute("data-title", "复制");
        }
      });
      domUtils.on(
        document,
        ["mouseenter", "mouseleave"],
        function(event) {
          changeDataTitle.run(event);
        },
        {
          capture: true
        }
      );
      utils.waitNode("#content_views").then(($content_views) => {
        if (_unsafeWindow.$) {
          _unsafeWindow.$("#content_views")?.unbind("copy");
        }
        domUtils.on(
          $content_views,
          "copy",
          function(event) {
            utils.preventEvent(event);
            let selectText = _unsafeWindow.getSelection();
            let copyText = selectText?.toString();
            log.info(
              "Ctrl+C复制内容：" + (copyText.length > 8 ? copyText.substring(0, 8) + "..." : copyText)
            );
            utils.setClip(copyText);
            return false;
          },
          {
            capture: true
          }
        );
      });
      utils.waitNode(".hljs-button").then(() => {
        setTimeout(() => {
          $$(".hljs-button").forEach(($el) => {
            $el.removeAttribute("onclick");
            $el.removeAttribute("data-report-click");
            $el.setAttribute("data-title", "复制");
          });
        }, 250);
      });
    },
    /**
     * 屏蔽顶部Toolbar
     */
    shieldTopToolbar() {
      log.info("屏蔽顶部Toolbar");
      return CommonUtil.addBlockCSS("#toolbarBox", "#csdn-toolbar");
    }
  };
  const CSDN = {
    init() {
      if (CSDNRouter.isLink()) {
        log.info("Router: 中转链接");
        CSDNLink.init();
      } else if (CSDNRouter.isHuaWeiCloudBlog()) {
        log.info("Router: 华为云联盟");
        CSDNHuaWeiCloud.init();
      } else if (CSDNRouter.isBlog()) {
        log.info("Router: 博客");
        CSDNBlog.init();
        if (CSDNRouter.isBlogArticle()) {
          log.info("Router: 帖子");
          CSDNBlogArticle.init();
        }
      } else if (CSDNRouter.isWenKu()) {
        log.info("Router: 文库");
        CSDNWenKu.init();
      } else {
        log.error("暂未适配，请反馈开发者：" + globalThis.location.href);
      }
    }
  };
  const M_CSDNLink = {
    init() {
      Panel.execMenuOnce("m-csdn-link-jumpRedirect", () => {
        CSDNLink.jumpRedirect();
      });
    }
  };
  const ShieldCSS$2 = "/* 右下角的 免费赢华为平板xxxx */\r\n.org-main-content .siderbar-box {\r\n  display: none !important;\r\n}\r\n";
  const M_CSDNHuaWeiCloud = {
    init() {
      addStyle(ShieldCSS$2);
      Panel.execMenuOnce("m-csdn-hua-wei-cloud-autoExpandContent", () => {
        return CSDNHuaWeiCloud.autoExpandContent();
      });
      Panel.execMenuOnce(
        "m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",
        () => {
          return this.blockBottomJoinTheCommunity();
        }
      );
    },
    /**
     * 【屏蔽】底部加入社区
     */
    blockBottomJoinTheCommunity() {
      log.info("【屏蔽】底部加入社区");
      return CommonUtil.addBlockCSS(".user-desc");
    }
  };
  const ApiResponseCheck = {
    isSuccessResponse(data) {
      if (data == null) {
        return false;
      }
      if (typeof data === "string") {
        data = utils.toJSON(data);
      }
      return data?.code === 200;
    }
  };
  const CSDNFavoriteApi = {
    /**
     * 获取收藏夹信息
     * @param url 当前url
     */
    async folderListWithCheck(url) {
      let response = await httpx.get(
        `https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/folderListWithCheck`,
        {
          data: {
            url
          },
          fetch: true,
          allowInterceptConfig: false,
          headers: {
            "User-Agent": utils.getRandomPCUA()
          }
        }
      );
      log.info(response);
      let data = utils.toJSON(response.data.responseText);
      if (!response.status || !ApiResponseCheck.isSuccessResponse(response.data.responseText)) {
        log.error("获取收藏夹信息失败，请求异常");
        if (typeof data.msg === "string") {
          Qmsg.error(data.msg);
        } else {
          Qmsg.error("获取收藏夹信息失败");
        }
        return;
      }
      return data.data.result;
    },
    /**
     * 添加到某个收藏夹
     */
    async addFavoriteInFolds(requestData) {
      let response = await httpx.post(
        "https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/addFavoriteInFolds",
        {
          fetch: true,
          data: requestData,
          headers: {
            "Content-Type": "application/json",
            "User-Agent": utils.getRandomPCUA()
          },
          allowInterceptConfig: false
        }
      );
      log.info(response);
      if (!response.status || !ApiResponseCheck.isSuccessResponse(response.data.responseText)) {
        log.error("添加收藏失败，请求异常", response);
        Qmsg.error("添加收藏失败，请求异常");
        return;
      }
      return true;
    },
    /**
     * 检查收藏夹信息
     * @param url
     * @returns
     * + true 已收藏
     * + false 未收藏
     */
    async checkFavoriteByUrl(url) {
      debugger;
      let response = await httpx.get(
        `https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/checkFavoriteByUrl`,
        {
          data: {
            url
          },
          fetch: true,
          allowInterceptConfig: false,
          headers: {
            "User-Agent": utils.getRandomPCUA()
          }
        }
      );
      log.info(response);
      if (!response.status || !ApiResponseCheck.isSuccessResponse(response.data.responseText)) {
        log.error("检查收藏夹状态失败，请求异常");
        Qmsg.error("检查收藏夹状态失败，请求异常");
        return;
      }
      let data = utils.toJSON(response.data.responseText);
      return data.data;
    },
    /**
     * 创建收藏夹
     */
    async createFolder(config) {
      let response = await httpx.post(
        `https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/createFolder`,
        {
          data: config,
          fetch: true,
          headers: {
            Accept: "application/json, text/javascript, */*; q=0.01",
            "Content-Type": "application/json",
            "User-Agent": utils.getRandomPCUA()
          },
          allowInterceptConfig: false
        }
      );
      log.info(response);
      if (!response.status || !ApiResponseCheck.isSuccessResponse(response.data.responseText)) {
        Qmsg.error("创建收藏夹失败");
        return;
      }
      let data = utils.toJSON(response.data.responseText);
      return data.data;
    }
  };
  const M_CSDNBlogArticle = {
    init() {
      Panel.exec(
        "m-csdn-blog-shieldTopToolbar",
        () => {
          return this.shieldTopToolbar();
        },
        (keyList) => {
          return !Panel.getValue(keyList[0]);
        },
        true
      );
      Panel.execMenuOnce("m-csdn-blog-notLimitCodePreMaxHeight", () => {
        return this.notLimitCodePreMaxHeight();
      });
      Panel.execMenuOnce("m-csdn-blog-notLimitCommentMaxHeight", () => {
        return this.notLimitCommentMaxHeight();
      });
      Panel.execMenuOnce("m-csdn-blog-allowSelectText", () => {
        return this.allowSelectText();
      });
      Panel.execMenuOnce("m-csdn-blog-autoExpandContent", () => {
        return this.autoExpandContent();
      });
      Panel.exec(
        "m-csdn-blog-bottomArticleEnable",
        () => {
          return this.blockBottomArticle();
        },
        (keyList) => {
          return !Panel.getValue(keyList[0]);
        },
        true
      );
      Panel.exec(
        "m-csdn-blog-comment-enable",
        () => {
          return this.blockComment();
        },
        (keyList) => {
          return !Panel.getValue(keyList[0]);
        },
        true
      );
      Panel.exec(
        "m-csdn-blog-bottom-toolbar-enable",
        () => {
          return this.blockBottomToolBar();
        },
        (keyList) => {
          return !Panel.getValue(keyList[0]);
        },
        true
      );
      Panel.execMenuOnce("m-csdn-blog-bottom-toolbar-always-bottom", () => {
        return this.bottomToolBarAlwaysShow();
      });
      domUtils.ready(() => {
        Panel.execMenuOnce("m-csdn-blog-removeAds", () => {
          return this.removeAds();
        });
        Panel.execMenuOnce("m-csdn-blog-refactoringRecommendation", () => {
          this.refactoringRecommendation();
        });
        Panel.execMenuOnce("m-csdn-blog-unBlockCopy", () => {
          CSDNBlog.unBlockCopy();
        });
        Panel.execMenuOnce(
          "m-csdn-blog-bottom-toolbar-optimizationCollectButton",
          () => {
            this.optimizationCollectButton();
          }
        );
      });
    },
    /**
     * 屏蔽顶部Toolbar
     */
    shieldTopToolbar() {
      log.info("屏蔽顶部Toolbar");
      return [
        CommonUtil.addBlockCSS("#csdn-toolbar"),
        addStyle(
          /*css*/
          `
			/* 内容顶部要归位 */
			body #main,
			.margin_sides{
			  margin-top: unset !important;
			  padding-top: unset !important;
			}
			#article .article_title{
			  margin-top: .32rem !important;
			  padding-top: unset !important;
			}
			`
        )
      ];
    },
    /**
     * 重构底部推荐
     */
    refactoringRecommendation() {
      function refactoring() {
        document.querySelectorAll(".container-fluid").forEach((item) => {
          let url = "";
          let title = "";
          let content = "";
          let img = "";
          let isCSDNDownload = false;
          let isCSDNEduDownload = false;
          if (item.hasAttribute("data-url")) {
            url = item.getAttribute("data-url");
            title = item.querySelector(".recommend_title div.left")?.innerHTML;
            if (!item.querySelector(".text")) {
              return;
            }
            content = item.querySelector(".text")?.innerHTML;
            if (item.querySelectorAll(".recommend-img").length) {
              item.querySelectorAll(".recommend-img").forEach((item2) => {
                img += item2.innerHTML;
              });
            }
          } else {
            url = item.querySelector("a[data-type]").getAttribute("href");
            title = item.querySelector(".recommend_title div.left").innerHTML;
            content = item.querySelector(".text").innerHTML;
          }
          var _URL_ = new URL(url);
          if (_URL_.host === "download.csdn.net" || _URL_.host === "www.iteye.com" && _URL_.pathname.match(/^\/resource/gi)) {
            isCSDNDownload = true;
            title = `<div class="component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>` + title;
          } else if (_URL_.origin.match(/edu.csdn.net/gi)) {
            isCSDNEduDownload = true;
            title = `<div class="component-box"><a class="csdn-edu-title" href="javascript:;">CSDN学院</a></div>` + title;
          }
          item.setAttribute("class", "GM-csdn-dl");
          item.setAttribute("data-url", url);
          item.innerHTML = `<div class="GM-csdn-title"><div class="left">${title}</div></div><div class="GM-csdn-content">${content}</div><div class="GM-csdn-img">${img}</div>`;
          item.addEventListener("click", function() {
            if (Panel.getValue("m-csdn-blog-openNewTab")) {
              window.open(url, "_blank");
            } else {
              window.location.href = url;
            }
          });
          if ((isCSDNDownload || isCSDNEduDownload) && Panel.getValue("m-csdn-blog-removeResourceArticle")) {
            item.remove();
          }
        });
      }
      let lockFunction = new utils.LockFunction(refactoring, 50);
      utils.waitNode("#recommend").then(($recommend) => {
        log.info("重构底部推荐");
        lockFunction.run();
        utils.mutationObserver($recommend, {
          callback: () => {
            lockFunction.run();
          },
          config: { childList: true, subtree: true, attributes: true }
        });
      });
    },
    /**
     * 屏蔽底部文章
     */
    blockBottomArticle() {
      log.info("屏蔽底部文章");
      return CommonUtil.addBlockCSS("#recommend");
    },
    /**
     * 屏蔽评论
     */
    blockComment() {
      log.info("屏蔽评论");
      return CommonUtil.addBlockCSS("#comment");
    },
    /**
     * 去除广告
     */
    removeAds() {
      log.info("去除广告");
      return [
        /* 登录窗口 */
        CommonUtil.waitRemove(".passport-login-container"),
        /* 打开APP */
        CommonUtil.waitRemove(".btn_open_app_prompt_box.detail-open-removed"),
        /* 广告 */
        CommonUtil.waitRemove(".add-firstAd"),
        /* 打开CSDN APP 小程序看全文 */
        CommonUtil.waitRemove("div.feed-Sign-weixin"),
        /* ios版本提示 */
        CommonUtil.waitRemove("div.ios-shadowbox")
      ];
    },
    /**
     * 不限制代码块最大高度
     */
    notLimitCodePreMaxHeight() {
      log.info("不限制代码块最大高度");
      return addStyle(
        /*css*/
        `
        pre{
            max-height: unset !important;
        }
        `
      );
    },
    /**
     * 不限制评论区最大高度
     */
    notLimitCommentMaxHeight() {
      log.info("不限制评论区最大高度");
      return addStyle(
        /*css*/
        `
        #comment{
          max-height: none !important;
        }
      `
      );
    },
    /**
     * 允许选择文字
     */
    allowSelectText() {
      log.info("允许选择文字");
      return addStyle(
        /*css*/
        `
        #content_views,
        #content_views pre,
        #content_views pre code{
            webkit-touch-callout: text !important;
            -webkit-user-select: text !important;
            -khtml-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
            user-select: text !important;
        }
        `
      );
    },
    /**
     * 自动展开内容
     */
    autoExpandContent() {
      log.info("自动展开内容");
      return addStyle(
        /*css*/
        `
        #content_views pre.set-code-hide,
        .article_content{
          height: 100% !important;
          overflow: auto !important;
        }
        `
      );
    },
    /**
     * 屏蔽底部工具栏
     */
    blockBottomToolBar() {
      log.info(`屏蔽底部工具栏`);
      return CommonUtil.addBlockCSS("#operate");
    },
    /**
     * 底部工具栏常驻
     */
    bottomToolBarAlwaysShow() {
      log.info(`底部工具栏常驻`);
      return addStyle(
        /*css*/
        `
			/* 底部工具栏 */
			#operate {
				bottom: 0 !important;
			}
			`
      );
    },
    /**
     * 优化收藏按钮
     */
    optimizationCollectButton() {
      log.info(`优化收藏按钮`);
      utils.waitNode("#operate .collect-btn", 1e4).then(($collectBtn) => {
        if (!$collectBtn) {
          return;
        }
        domUtils.on(
          $collectBtn,
          "click",
          async (event) => {
            utils.preventEvent(event);
            let $isCollect = $collectBtn.querySelector(".collect");
            let $unCollect = $collectBtn.querySelector(".uncollect");
            let folderInfo = await CSDNFavoriteApi.folderListWithCheck(
              window.location.origin + window.location.pathname
            );
            if (!folderInfo) {
              return;
            }
            let isFavoriteFolderIdList = [];
            folderInfo.forEach((item) => {
              if (item.IsFavorite) {
                isFavoriteFolderIdList.push(item.ID);
              }
            });
            let createCollectItem = (data) => {
              let folderId = data.ID;
              let $item = domUtils.createElement(
                "li",
                {
                  className: "csdn-collection-item",
                  innerHTML: (
                    /*html*/
                    `
									<div class="csdn-collection-item_left">
										<div class="csdn-collection-item_title">
											<span class="title-m">${data.Name}</span>
										</div>
										<span class="csdn-collection-item_ext">
											<span class="csdn-collection-item_length">${data.FavoriteNum}条内容</span>
											<span class="dot">・</span>
											<span class="csdn-collection-controls">${data.IsPrivate ? "私密" : "公开"}</span>
										</span>
									</div>
									<span class="collect-btn">${data.IsFavorite ? "已收藏" : "收藏"}</span>
								`
                  )
                },
                {
                  "data-is-collect": data.IsFavorite
                }
              );
              $item.querySelector(".title-m");
              let $contentLength = $item.querySelector(
                ".csdn-collection-item_length"
              );
              $item.querySelector(
                ".csdn-collection-controls"
              );
              let $collectBtn2 = $item.querySelector(".collect-btn");
              domUtils.on($collectBtn2, "click", async (event2) => {
                let articleDetailUrl = _unsafeWindow.articleDetailUrl;
                if (articleDetailUrl == null) {
                  articleDetailUrl = window.location.origin + window.location.pathname;
                }
                let articleId = _unsafeWindow.articleId;
                if (articleId == null) {
                  log.error("获取文章ID失败");
                  Qmsg.error("获取文章ID失败");
                  return;
                }
                let username = _unsafeWindow.username;
                if (username == null) {
                  log.error("获取文章作者失败");
                  Qmsg.error("获取文章作者失败");
                  return;
                }
                let articleTitle = _unsafeWindow.articleTitle;
                if (articleTitle == null) {
                  articleTitle = document.title.replace(/-CSDN博客$/, "");
                }
                if (articleTitle == null) {
                  log.error("获取文章标题失败");
                  Qmsg.error("获取文章标题失败");
                  return;
                }
                let articleDesc = _unsafeWindow.articleDesc;
                if (articleDesc == null) {
                  let $meta = $("meta[name='description']");
                  if ($meta) {
                    articleDesc = $meta.getAttribute("content");
                  }
                }
                if (articleDesc == null) {
                  log.error("获取文章描述失败");
                  Qmsg.error("获取文章描述失败");
                  return;
                }
                let folderIdList = [...isFavoriteFolderIdList];
                let $loading = Qmsg.loading("处理中...");
                try {
                  let checkResponse = await CSDNFavoriteApi.checkFavoriteByUrl(
                    articleDetailUrl
                  );
                  if (checkResponse == null) {
                    return;
                  }
                  log.info(folderId, checkResponse);
                  let toCollect = !checkResponse[folderId];
                  if (toCollect) {
                    log.info(`添加收藏`);
                    folderIdList.push(folderId);
                  } else {
                    log.info(`取消收藏`);
                    folderIdList.splice(folderIdList.indexOf(folderId), 1);
                  }
                  let response = await CSDNFavoriteApi.addFavoriteInFolds({
                    author: username,
                    url: articleDetailUrl,
                    source: "blog",
                    sourceId: articleId,
                    title: articleTitle,
                    description: articleDesc,
                    fromType: "PC",
                    username: data.Username,
                    folderIdList
                  });
                  if (!response) {
                    return;
                  }
                  let check_isCollect = await CSDNFavoriteApi.checkFavoriteByUrl(articleDetailUrl);
                  if (check_isCollect == null) {
                    return;
                  }
                  log.info(folderId, check_isCollect);
                  $item.setAttribute(
                    "data-is-collect",
                    (!!check_isCollect[folderId]).toString()
                  );
                  if (toCollect) {
                    if (!check_isCollect[folderId]) {
                      log.error("收藏失败", check_isCollect, folderId);
                      Qmsg.error("收藏失败");
                    } else {
                      log.success("收藏成功");
                      Qmsg.success("收藏成功");
                      domUtils.text($collectBtn2, "已收藏");
                      if (!isFavoriteFolderIdList.includes(folderId)) {
                        isFavoriteFolderIdList.push(folderId);
                      }
                      data.FavoriteNum++;
                    }
                  } else {
                    if (!check_isCollect[folderId]) {
                      log.success("取消收藏成功");
                      Qmsg.success("取消收藏成功");
                      domUtils.text($collectBtn2, "收藏");
                      if (isFavoriteFolderIdList.includes(folderId)) {
                        isFavoriteFolderIdList.splice(
                          isFavoriteFolderIdList.indexOf(folderId),
                          1
                        );
                      }
                      data.FavoriteNum--;
                    } else {
                      log.error("取消收藏失败", check_isCollect, folderId);
                      Qmsg.error("取消收藏失败");
                    }
                  }
                  domUtils.text($contentLength, `${data.FavoriteNum}条内容`);
                  let findValue = Object.values(check_isCollect).find(
                    (item) => item
                  );
                  if (findValue) {
                    domUtils.show($isCollect, false);
                    domUtils.hide($unCollect, false);
                  } else {
                    domUtils.show($unCollect, false);
                    domUtils.hide($isCollect, false);
                  }
                  $loading.close();
                } catch (error) {
                  log.error(error);
                } finally {
                  $loading.close();
                }
              });
              return $item;
            };
            let $alert = __pops.alert({
              title: {
                text: "添加收藏夹",
                position: "center"
              },
              content: {
                text: (
                  /*html*/
                  `
									<ul class="csdn-collection-items"></ul>
								`
                ),
                html: true
              },
              btn: {
                ok: {
                  enable: false
                }
              },
              width: PanelUISize.setting.width,
              height: PanelUISize.setting.height,
              drag: true,
              mask: {
                enable: true
              },
              style: (
                /*css*/
                `
								.csdn-collection-items{
									--font-size: 16px;
								}
								.csdn-collection-items{
									font-size: var(--font-size);
									font-weight: 400;
									padding: 0 20px 0;
									margin: 24px 0;
									overflow: auto;
									-ms-scroll-chaining: none;
									overscroll-behavior: contain;
								}
								.csdn-collection-item{
									width: 100%;
    								height: 62px;
									line-height: normal;
									position: relative;
									padding: 8px 12px;
									cursor: pointer;
									display: -webkit-box;
									display: -ms-flexbox;
									display: flex;
									-webkit-box-align: center;
									-ms-flex-align: center;
									align-items: center;
									-webkit-box-pack: justify;
									-ms-flex-pack: justify;
									justify-content: space-between;
									border-bottom: 1px solid #f0f0f5;
								}
								.csdn-collection-item_left{
									line-height: normal;
									flex: 1;
									overflow: hidden;
								}
								.csdn-collection-item_title{
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
									width: 100%;
								}
								.csdn-collection-item_ext{
									font-weight: 400;
									color: #999aaa;
									line-height: 17px;
									margin-top: 8px;
									font-size: .8em;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
									width: 100%;
									display: inline-flex;
									align-items: center;
								}
								.collect-btn{
									color: #555666;
									font-size: var(--font-size);
									width: 64px;
									height: 30px;
									line-height: 30px;
									border-radius: 20px;
									text-align: center;
									-webkit-transition: all .2s;
									transition: all .2s;
									border: 1px solid #ccccd8;
								}
								.csdn-collection-item[data-is-collect="true"] .collect-btn{
									color: #999aaa;
									background: rgba(232, 232, 237, .3);
									border: 1px solid #e8e8ed;
								}
								/* .csdn-collection-item:hover{
									background: #f5f6f7;
								}
								.csdn-collection-item:hover .collect-btn{
									border: 1px solid #555666;
								} */
							`
              )
            });
            let $collectionContainer = $alert.$shadowRoot.querySelector(
              ".csdn-collection-items"
            );
            folderInfo.forEach((folderInfoItem) => {
              let $item = createCollectItem(folderInfoItem);
              $collectionContainer.appendChild($item);
            });
          },
          { capture: true }
        );
      });
    }
  };
  const ShieldCSS$1 = "/* 右下角的买一年送3个月的广告图标 */\r\n.blind_box {\r\n  display: none !important;\r\n}\r\n";
  const M_CSDNWenKu = {
    init() {
      addStyle(ShieldCSS$1);
      Panel.execMenuOnce("m-csdn-wenku-shieldBottomToolbar", () => {
        return this.shieldBottomToolbar();
      });
    },
    /**
     * 【屏蔽】底部工具栏
     */
    shieldBottomToolbar() {
      log.info("【屏蔽】底部工具栏");
      return CommonUtil.addBlockCSS(`.page-container > div.btn`);
    }
  };
  const CSDNBlockCSS = "/* 右下角悬浮图标 买1年送3个月 */\r\n.page-container .blind_box,\r\n/* 底部工具栏右边的 开会员按钮（低至xx元/次） */\r\n.page-container .btn .ml-12,\r\n/* 登录弹窗 */\r\n.passport-login-container,\r\n/* 通用广告className匹配 */\r\n.ads {\r\n	display: none !important;\r\n}\r\n";
  const M_CSDNDownload = {
    init() {
      Panel.execMenuOnce("m-csdn-download-removeAds", () => {
        return addStyle(CSDNBlockCSS);
      });
      Panel.execMenuOnce(
        "m-csdn-download-automaticallyExpandResourceIntroduction",
        () => {
          return this.automaticallyExpandResourceIntroduction();
        }
      );
    },
    /**
     * 自动展开资源介绍
     */
    automaticallyExpandResourceIntroduction() {
      log.info("自动展开资源介绍");
      return [
        CommonUtil.addBlockCSS("label.unfold-font"),
        addStyle(
          /*css*/
          `
			.resource-desc{
				max-height: unset !important;
				overflow: unset !important;
			}
			`
        )
      ];
    }
  };
  const ShieldCSS = ".view_comment_box,\r\n.weixin-shadowbox.wap-shadowbox,\r\n.feed-Sign-span,\r\n.user-desc.user-desc-fix,\r\n.comment_read_more_box,\r\n#content_views pre.set-code-hide .hide-preCode-box,\r\n/* 登录弹窗 */\r\n.passport-login-container,\r\n.hljs-button[data-title='登录后复制'],\r\n.article-show-more,\r\n#treeSkill,\r\ndiv.btn_open_app_prompt_div,\r\ndiv.readall_box,\r\ndiv.aside-header-fixed,\r\ndiv.feed-Sign-weixin,\r\ndiv.ios-shadowbox,\r\n/* 底部评论工具栏的抢沙发图片 */\r\n.comment-sofa-flag {\r\n	display: none !important;\r\n}\r\n";
  const MBlogCSS = "#mainBox {\r\n  width: auto;\r\n}\r\n.user-desc.user-desc-fix {\r\n  height: auto !important;\r\n  overflow: auto !important;\r\n}\r\n.component-box .praise {\r\n  background: #ff5722;\r\n  border-radius: 5px;\r\n  padding: 0px 8px;\r\n  height: auto;\r\n}\r\n.component-box .praise,\r\n.component-box .share {\r\n  color: #fff;\r\n}\r\n.component-box a {\r\n  display: inline-block;\r\n  font-size: xx-small;\r\n}\r\n.component-box {\r\n  display: inline;\r\n  margin: 0;\r\n  position: relative;\r\n  white-space: nowrap;\r\n}\r\n.csdn-edu-title {\r\n  background: #4d6de1;\r\n  border-radius: 5px;\r\n  padding: 0px 8px;\r\n  height: auto;\r\n  color: #fff !important;\r\n}\r\n\r\n.GM-csdn-dl {\r\n  padding: 0.24rem 0.32rem;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n  -webkit-box-pack: justify;\r\n  border-bottom: 1px solid #f5f6f7 !important;\r\n}\r\n.GM-csdn-title {\r\n  font-size: 0.3rem;\r\n  color: #222226;\r\n  letter-spacing: 0;\r\n  line-height: 0.44rem;\r\n  font-weight: 600;\r\n  /*max-height: .88rem;*/\r\n  word-break: break-all;\r\n  overflow: hidden;\r\n  display: -webkit-box;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-line-clamp: 2;\r\n}\r\n.GM-csdn-title a {\r\n  word-break: break-all;\r\n  color: #222226;\r\n  font-weight: 600;\r\n}\r\n.GM-csdn-title em,\r\n.GM-csdn-content em {\r\n  font-style: normal;\r\n  color: #fc5531;\r\n}\r\n.GM-csdn-content {\r\n  /*max-width: 5.58rem;*/\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 1;\r\n  -webkit-box-orient: vertical;\r\n  color: #555666;\r\n  font-size: 0.24rem;\r\n  line-height: 0.34rem;\r\n  max-height: 0.34rem;\r\n  word-break: break-all;\r\n  -webkit-box-flex: 1;\r\n  -ms-flex: 1;\r\n  flex: 1;\r\n  margin-top: 0.16rem;\r\n}\r\n.GM-csdn-img img {\r\n  width: 2.18rem;\r\n  height: 1.58rem;\r\n  /*margin-left: .16rem*/\r\n}\r\n";
  const M_CSDNBlog = {
    init() {
      this.addCSS();
    },
    /**
     * 添加屏蔽CSS
     */
    addCSS() {
      return [addStyle(ShieldCSS), addStyle(MBlogCSS)];
    }
  };
  const M_CSDN = {
    init() {
      if (CSDNRouter.isLink()) {
        log.info("Router: 中转链接");
        M_CSDNLink.init();
      } else if (CSDNRouter.isHuaWeiCloudBlog()) {
        log.info("Router: 华为云联盟");
        M_CSDNHuaWeiCloud.init();
      } else if (CSDNRouter.isBlog()) {
        log.info("Router: 博客");
        M_CSDNBlog.init();
        if (CSDNRouter.isBlogArticle()) {
          log.info("Router: 文章");
          M_CSDNBlogArticle.init();
        }
      } else if (CSDNRouter.isWenKu()) {
        log.info("Router: 文库");
        M_CSDNWenKu.init();
      } else if (CSDNRouter.isDownload()) {
        log.info("Router: 资源下载");
        M_CSDNDownload.init();
      } else {
        log.error("暂未适配，请反馈开发者：" + globalThis.location.href);
      }
    }
  };
  const PanelComponents = {
    $data: {
      __storeApiFn: null,
      get storeApiValue() {
        if (!this.__storeApiFn) {
          this.__storeApiFn = new Utils.Dictionary();
        }
        return this.__storeApiFn;
      }
    },
    /**
     * 获取自定义的存储接口
     * @param type 组件类型
     */
    getStorageApi(type) {
      if (!this.hasStorageApi(type)) {
        return;
      }
      return this.$data.storeApiValue.get(type);
    },
    /**
     * 判断是否存在自定义的存储接口
     * @param type 组件类型
     */
    hasStorageApi(type) {
      return this.$data.storeApiValue.has(type);
    },
    /**
     * 设置自定义的存储接口
     * @param type 组件类型
     * @param storageApiValue 存储接口
     */
    setStorageApi(type, storageApiValue) {
      this.$data.storeApiValue.set(type, storageApiValue);
    },
    /**
     * 初始化组件的存储接口属性
     *
     * @param type 组件类型
     * @param config 组件配置，必须包含prop属性
     * @param storageApiValue 存储接口
     */
    initComponentsStorageApi(type, config, storageApiValue) {
      let propsStorageApi;
      if (this.hasStorageApi(type)) {
        propsStorageApi = this.getStorageApi(type);
      } else {
        propsStorageApi = storageApiValue;
      }
      this.setComponentsStorageApiProperty(config, propsStorageApi);
    },
    /**
     * 设置组件的存储接口属性
     * @param config 组件配置，必须包含prop属性
     * @param storageApiValue 存储接口
     */
    setComponentsStorageApiProperty(config, storageApiValue) {
      Reflect.set(config.props, PROPS_STORAGE_API, storageApiValue);
    }
  };
  const UISwitch = function(text, key, defaultValue, clickCallback, description, afterAddToUListCallBack) {
    let result = {
      text,
      type: "switch",
      description,
      attributes: {},
      props: {},
      getValue() {
        let storageApiValue = this.props[PROPS_STORAGE_API];
        return Boolean(storageApiValue.get(key, defaultValue));
      },
      callback(event, __value) {
        let value = Boolean(__value);
        log.success(`${value ? "开启" : "关闭"} ${text}`);
        if (typeof clickCallback === "function") {
          let result2 = clickCallback(event, value);
          if (result2) {
            return;
          }
        }
        let storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
      afterAddToUListCallBack
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi(
      "switch",
      result,
      {
        get(key2, defaultValue2) {
          return Panel.getValue(key2, defaultValue2);
        },
        set(key2, value) {
          Panel.setValue(key2, value);
        }
      }
    );
    return result;
  };
  const UISelect = function(text, key, defaultValue, data, changeCallback, description) {
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
      props: {},
      getValue() {
        let storageApiValue = this.props[PROPS_STORAGE_API];
        return storageApiValue.get(key, defaultValue);
      },
      callback(event, isSelectedValue, isSelectedText) {
        let value = isSelectedValue;
        log.info(`选择：${isSelectedText}`);
        if (typeof changeCallback === "function") {
          let result2 = changeCallback(event, value, isSelectedText);
          if (result2) {
            return;
          }
        }
        let storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
      data: selectData
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi(
      "select",
      result,
      {
        get(key2, defaultValue2) {
          return Panel.getValue(key2, defaultValue2);
        },
        set(key2, value) {
          Panel.setValue(key2, value);
        }
      }
    );
    return result;
  };
  const SettingUICommon = {
    id: "component-common",
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
      // {
      // 	text: "Cookie配置",
      // 	type: "forms",
      // 	forms: [
      // 		UISwitch(
      // 			"启用",
      // 			"httpx-use-cookie-enable",
      // 			false,
      // 			void 0,
      // 			"启用后，将根据下面的配置进行添加cookie"
      // 		),
      // 		UISwitch(
      // 			"使用document.cookie",
      // 			"httpx-use-document-cookie",
      // 			false,
      // 			void 0,
      // 			"自动根据请求的域名来设置对应的cookie"
      // 		),
      // 		UITextArea(
      // 			"tieba.baidu.com",
      // 			"httpx-cookie-tieba.baidu.com",
      // 			"",
      // 			void 0,
      // 			void 0,
      // 			"Cookie格式：xxx=xxxx;xxx=xxxx"
      // 		),
      // 	],
      // },
    ]
  };
  const UISlider = function(text, key, defaultValue, min, max, changeCallback, getToolTipContent, description, step) {
    let result = {
      text,
      type: "slider",
      description,
      attributes: {},
      props: {},
      getValue() {
        let storageApiValue = this.props[PROPS_STORAGE_API];
        return storageApiValue.get(key, defaultValue);
      },
      getToolTipContent(value) {
        if (typeof getToolTipContent === "function") {
          return getToolTipContent(value);
        } else {
          return `${value}`;
        }
      },
      callback(event, value) {
        if (typeof changeCallback === "function") {
          let result2 = changeCallback(event, value);
          if (result2) {
            return;
          }
        }
        let storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
      min,
      max,
      step
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi(
      "slider",
      result,
      {
        get(key2, defaultValue2) {
          return Panel.getValue(key2, defaultValue2);
        },
        set(key2, value) {
          Panel.setValue(key2, value);
        }
      }
    );
    return result;
  };
  const SettingUIBlog = {
    id: "panel-blog",
    title: "博客",
    isDefault() {
      return CSDNRouter.isBlog();
    },
    forms: [
      {
        type: "forms",
        text: "",
        forms: [
          {
            type: "deepMenu",
            text: "文章",
            forms: [
              {
                type: "forms",
                text: "",
                forms: [
                  {
                    text: "布局屏蔽",
                    type: "deepMenu",
                    forms: [
                      {
                        text: "",
                        type: "forms",
                        forms: [
                          UISwitch(
                            "【屏蔽】登录弹窗",
                            "csdn-blog-shieldLoginDialog",
                            true
                          ),
                          UISwitch(
                            "【屏蔽】左侧博客信息",
                            "csdn-blog-shieldLeftBlogContainerAside",
                            false
                          ),
                          UISwitch(
                            "【屏蔽】右侧目录信息",
                            "csdn-blog-shieldRightDirectoryInformation",
                            false
                          ),
                          UISwitch(
                            "【屏蔽】底部的悬浮工具栏",
                            "csdn-blog-shieldBottomFloatingToolbar",
                            false
                          )
                        ]
                      }
                    ]
                  },
                  {
                    text: "右侧悬浮工具栏",
                    type: "deepMenu",
                    forms: [
                      {
                        text: "功能",
                        type: "forms",
                        forms: [
                          UISwitch(
                            "启用",
                            "csdn-blog-rightToolbarEnable",
                            true,
                            void 0,
                            "创作中心，隐藏/显示侧栏，新手引导，客服、举报..."
                          ),
                          UISwitch(
                            "【添加按钮】前往评论",
                            "csdn-blog-addGotoRecommandButton",
                            true,
                            void 0,
                            "在悬浮工具栏最后面添加"
                          ),
                          UISlider(
                            "right偏移",
                            "csdn-blog-rightToolbarRightOffset",
                            90,
                            0,
                            document.documentElement.clientWidth,
                            (event, value) => {
                              let csdnSideToolbar = document.querySelector(
                                ".csdn-side-toolbar"
                              );
                              domUtils.css(csdnSideToolbar, {
                                right: value + "px"
                              });
                            },
                            (value) => {
                              return `当前：${value}px，默认：90px`;
                            }
                          ),
                          UISlider(
                            "top偏移",
                            "csdn-blog-rightToolbarTopOffset",
                            140,
                            0,
                            document.documentElement.clientHeight,
                            (event, value) => {
                              let csdnSideToolbar = document.querySelector(
                                ".csdn-side-toolbar"
                              );
                              domUtils.css(csdnSideToolbar, {
                                top: value + "px"
                              });
                            },
                            (value) => {
                              return `当前：${value}px，默认：90px`;
                            }
                          )
                        ]
                      },
                      {
                        text: "屏蔽",
                        type: "forms",
                        forms: [
                          UISwitch(
                            "【屏蔽】创作中心",
                            "csdn-blog-rightToolbarCreativeCenter",
                            false
                          ),
                          UISwitch(
                            "【屏蔽】显示/隐藏侧栏",
                            "csdn-blog-rightToolbarShowOrSidebar",
                            false
                          ),
                          UISwitch(
                            "【屏蔽】新手引导",
                            "csdn-blog-rightToolbarBeginnerGuidance",
                            false
                          ),
                          UISwitch(
                            "【屏蔽】客服",
                            "csdn-blog-rightToolbarCustomerService",
                            false
                          ),
                          UISwitch(
                            "【屏蔽】举报",
                            "csdn-blog-rightToolbarReport",
                            false
                          ),
                          UISwitch(
                            "【屏蔽】返回顶部",
                            "csdn-blog-rightToolbarBackToTop",
                            false
                          )
                        ]
                      }
                    ]
                  },
                  {
                    text: "内容",
                    type: "deepMenu",
                    forms: [
                      {
                        text: "功能",
                        type: "forms",
                        forms: [
                          UISwitch(
                            "点击代码块自动展开",
                            "csdn-blog-clickPreCodeAutomatically",
                            true,
                            void 0,
                            "当鼠标点击代码块区域时，将自动展开内容"
                          ),
                          UISwitch(
                            "自动展开代码块",
                            "csdn-blog-autoExpandCodeContent",
                            true,
                            void 0,
                            "懒人操作，免手动点击展开"
                          ),
                          UISwitch(
                            "自动展开内容",
                            "csdn-blog-autoExpandContent",
                            true,
                            void 0,
                            "懒人操作，免手动点击展开"
                          ),
                          UISwitch(
                            "全文居中",
                            "csdn-blog-articleCenter",
                            true,
                            function(event, enable) {
                              if (enable) {
                                alert(
                                  "为了更好的呈现效果，请开启功能：【屏蔽】左侧博客信息、【屏蔽】右侧目录信息"
                                );
                              }
                            },
                            "自动屏蔽左侧和右侧的信息，且将文章居中"
                          ),
                          UISwitch(
                            "允许选择内容",
                            "csdn-blog-allowSelectContent",
                            true,
                            void 0
                          )
                        ]
                      },
                      {
                        text: "屏蔽",
                        type: "forms",
                        forms: [
                          UISwitch(
                            "【屏蔽】底部xx技能树",
                            "csdn-blog-shieldBottomSkillTree",
                            false
                          ),
                          UISwitch(
                            "【屏蔽】选中文字悬浮栏",
                            "csdn-blog-shieldArticleSearchTip",
                            false,
                            void 0,
                            "选中文字弹出的，例如：搜索、评论、笔记"
                          )
                        ]
                      }
                    ]
                  },
                  {
                    text: "评论区",
                    type: "deepMenu",
                    forms: [
                      {
                        text: "",
                        type: "forms",
                        forms: [
                          UISwitch(
                            "启用",
                            "csdn-blog-blockComment",
                            true,
                            void 0,
                            "关闭是屏蔽评论区"
                          ),
                          UISwitch(
                            "优化评论区的位置",
                            "csdn-blog-restoreComments",
                            true
                          )
                        ]
                      }
                    ]
                  },
                  {
                    text: "底部文章",
                    type: "deepMenu",
                    forms: [
                      {
                        text: "",
                        type: "forms",
                        forms: [
                          UISwitch(
                            "启用",
                            "csdn-blog-bottomRecommendArticleEnable",
                            true,
                            void 0,
                            "关闭是屏蔽底部文章"
                          ),
                          UISwitch(
                            "标识CSDN下载",
                            "csdn-blog-identityCSDNDownload",
                            true,
                            void 0,
                            "使用红框标识"
                          ),
                          UISwitch(
                            "移除资源下载的文章",
                            "csdn-blog-removeResourceDownloadArticle",
                            false,
                            void 0,
                            "download.csdn.net<br>www.iteye.com<br>edu.csdn.net"
                          )
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "全局布局屏蔽",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】顶部工具栏",
                    "csdn-blog-shieldTopToolbar",
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
                    "拦截-复制的小尾巴",
                    "csdn-blog-removeClipboardHijacking",
                    true
                  ),
                  UISwitch(
                    "劫持-禁止复制",
                    "csdn-blog-unBlockCopy",
                    true,
                    void 0,
                    "允许点击复制按钮进行复制"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const SettingUILink = {
    id: "panel-link",
    title: "链接",
    isDefault() {
      return CSDNRouter.isLink();
    },
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UISwitch(
            "重定向链接",
            "csdn-link-jumpRedirect",
            true,
            void 0,
            "自动跳转至被拦截的Url链接"
          )
        ]
      }
    ]
  };
  const SettingUIHuaWeiCloud = {
    id: "panel-hua-wei-cloud",
    title: "华为云开发者联盟",
    isDefault() {
      return CSDNRouter.isHuaWeiCloudBlog();
    },
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UISwitch("自动展开全文", "csdn-hua-wei-cloud-autoExpandContent", true)
        ]
      },
      {
        text: "屏蔽",
        type: "forms",
        forms: [
          UISwitch(
            "【屏蔽】云开发者任务挑战活动",
            "csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",
            true
          ),
          UISwitch(
            "【屏蔽】左侧悬浮按钮",
            "csdn-hua-wei-cloud-shieldLeftFloatingButton",
            false,
            function(event, enable) {
              if (enable) {
                alert(
                  "开启后将屏蔽【当前阅读量】、【点赞按钮】、【评论按钮】、【分享按钮】"
                );
              }
            }
          ),
          UISwitch(
            "【屏蔽】右侧栏",
            "csdn-hua-wei-cloud-blockRightColumn",
            false,
            function(event, enable) {
              if (enable) {
                alert(
                  "开启后将屏蔽【相关产品】-【活动日历】-【运营活动】-【热门标签】"
                );
              }
            }
          ),
          UISwitch(
            "【屏蔽】底部推荐内容",
            "csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",
            false
          ),
          UISwitch(
            "【屏蔽】底部更多推荐",
            "csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",
            false
          )
        ]
      }
    ]
  };
  const SettingUIWenKu = {
    id: "panel-wenku",
    title: "资源",
    isDefault() {
      return CSDNRouter.isLink();
    },
    forms: [
      {
        text: "屏蔽",
        type: "forms",
        forms: [
          UISwitch(
            "【屏蔽】资源推荐",
            "csdn-wenku-shieldResourceRecommend",
            false
          ),
          UISwitch(
            "【屏蔽】右侧用户信息",
            "csdn-wenku-shieldRightUserInfo",
            false
          ),
          UISwitch(
            "【屏蔽】右侧悬浮工具栏",
            "csdn-wenku-shieldRightToolBar",
            false
          )
        ]
      }
    ]
  };
  const SettingUISo = {
    id: "panel-so",
    title: "搜索",
    isDefault() {
      return CSDNRouter.isSo();
    },
    forms: [
      {
        text: "C知道-功能",
        type: "forms",
        forms: [UISwitch("去除水印", "csdn-so-cknow-removeMaskCover", true)]
      }
    ]
  };
  const MSettingUICommon = {
    id: "component-common",
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
      // {
      // 	text: "Cookie配置",
      // 	type: "forms",
      // 	forms: [
      // 		UISwitch(
      // 			"启用",
      // 			"httpx-use-cookie-enable",
      // 			false,
      // 			void 0,
      // 			"启用后，将根据下面的配置进行添加cookie"
      // 		),
      // 		UISwitch(
      // 			"使用document.cookie",
      // 			"httpx-use-document-cookie",
      // 			false,
      // 			void 0,
      // 			"自动根据请求的域名来设置对应的cookie"
      // 		),
      // 		UITextArea(
      // 			"tieba.baidu.com",
      // 			"httpx-cookie-tieba.baidu.com",
      // 			"",
      // 			void 0,
      // 			void 0,
      // 			"Cookie格式：xxx=xxxx;xxx=xxxx"
      // 		),
      // 	],
      // },
    ]
  };
  const MSettingUIBlog = {
    id: "m-panel-blog",
    title: "博客",
    isDefault() {
      return CSDNRouter.isBlog();
    },
    forms: [
      {
        type: "forms",
        text: "",
        forms: [
          {
            type: "deepMenu",
            text: "文章",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  {
                    type: "deepMenu",
                    text: "顶部工具栏",
                    forms: [
                      {
                        type: "forms",
                        text: "",
                        forms: [
                          UISwitch(
                            "启用",
                            "m-csdn-blog-shieldTopToolbar",
                            false,
                            void 0,
                            "关闭是屏蔽顶部工具栏"
                          )
                        ]
                      }
                    ]
                  },
                  {
                    text: "内容",
                    type: "deepMenu",
                    forms: [
                      {
                        text: "",
                        type: "forms",
                        forms: [
                          UISwitch(
                            "允许选中文字",
                            "m-csdn-blog-allowSelectText",
                            true,
                            void 0,
                            "设置user-select: text;"
                          ),
                          UISwitch(
                            "自动展开",
                            "m-csdn-blog-autoExpandContent",
                            true,
                            void 0,
                            "包括内容、代码块"
                          ),
                          UISwitch(
                            "不限制代码块的最大高度",
                            "m-csdn-blog-notLimitCodePreMaxHeight",
                            false,
                            void 0,
                            "让代码块的高度直接被撑开"
                          )
                        ]
                      }
                    ]
                  },
                  {
                    text: "评论",
                    type: "deepMenu",
                    forms: [
                      {
                        text: "",
                        type: "forms",
                        forms: [
                          UISwitch(
                            "启用",
                            "m-csdn-blog-comment-enable",
                            true,
                            void 0,
                            "关闭是屏蔽评论区"
                          ),
                          UISwitch(
                            "不限制评论区的最大高度",
                            "m-csdn-blog-notLimitCommentMaxHeight",
                            true,
                            void 0,
                            "让评论区高度直接被撑开"
                          )
                        ]
                      }
                    ]
                  },
                  {
                    text: "底部文章",
                    type: "deepMenu",
                    forms: [
                      {
                        text: "",
                        type: "forms",
                        forms: [
                          UISwitch(
                            "启用",
                            "m-csdn-blog-bottomArticleEnable",
                            true,
                            void 0,
                            "关闭是屏蔽底部文章"
                          ),
                          UISwitch(
                            "移除资源下载",
                            "m-csdn-blog-removeResourceArticle",
                            false,
                            void 0,
                            "download.csdn.net<br>www.iteye.com<br>edu.csdn.net"
                          ),
                          UISwitch(
                            "重构",
                            "m-csdn-blog-refactoringRecommendation",
                            true,
                            void 0,
                            "文章的样式统一"
                          ),
                          UISwitch(
                            "新标签页打开",
                            "m-csdn-blog-openNewTab",
                            true,
                            void 0,
                            "新标签页打开文章"
                          )
                        ]
                      }
                    ]
                  },
                  {
                    type: "deepMenu",
                    text: "底部工具栏",
                    forms: [
                      {
                        type: "forms",
                        text: "",
                        forms: [
                          UISwitch(
                            "启用",
                            "m-csdn-blog-bottom-toolbar-enable",
                            false,
                            void 0,
                            "关闭是屏蔽底部工具栏"
                          ),
                          UISwitch(
                            "常驻底部",
                            "m-csdn-blog-bottom-toolbar-always-bottom",
                            false,
                            void 0,
                            "开启后底部工具栏不随下滑滚动而隐藏"
                          ),
                          UISwitch(
                            "优化收藏按钮",
                            "m-csdn-blog-bottom-toolbar-optimizationCollectButton",
                            false,
                            void 0,
                            "可以自行选择收藏夹"
                          )
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        type: "forms",
        text: "",
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
                    "【屏蔽】广告",
                    "m-csdn-blog-removeAds",
                    true,
                    void 0,
                    "包括：登录弹窗、打开APP、ios版本提示等"
                  ),
                  UISwitch(
                    "允许复制",
                    "m-csdn-blog-unBlockCopy",
                    true,
                    void 0,
                    "允许点击复制按钮进行复制"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const MSettingUILink = {
    id: "m-panel-link",
    title: "链接",
    isDefault() {
      return CSDNRouter.isLink();
    },
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UISwitch(
            "重定向链接",
            "m-csdn-link-jumpRedirect",
            true,
            void 0,
            "自动跳转至被拦截的Url链接"
          )
        ]
      }
    ]
  };
  const MSettingUIHuaWeiCloud = {
    id: "m-panel-hua-wei-cloud",
    title: "华为云开发者联盟",
    isDefault() {
      return CSDNRouter.isHuaWeiCloudBlog();
    },
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UISwitch(
            "自动展开全文",
            "m-csdn-hua-wei-cloud-autoExpandContent",
            true
          )
        ]
      },
      {
        text: "屏蔽",
        type: "forms",
        forms: [
          UISwitch(
            "【屏蔽】底部加入社区",
            "m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",
            true
          )
        ]
      }
    ]
  };
  const MSettingUIWenKu = {
    id: "m-panel-wenku",
    title: "文库",
    isDefault() {
      return CSDNRouter.isWenKu();
    },
    forms: [
      {
        text: "屏蔽",
        type: "forms",
        forms: [
          UISwitch(
            "【屏蔽】底部工具栏",
            "m-csdn-wenku-shieldBottomToolbar",
            false
          )
        ]
      }
    ]
  };
  const MSettingUISo = {
    id: "panel-so",
    title: "搜索",
    isDefault() {
      return CSDNRouter.isSo();
    },
    forms: [
      {
        text: "C知道-功能",
        type: "forms",
        forms: [UISwitch("去除水印", "m-csdn-so-cknow-removeMaskCover", true)]
      }
    ]
  };
  const MSettingUIDownload = {
    id: "m-panel-download",
    title: "资源",
    isDefault() {
      return CSDNRouter.isDownload();
    },
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UISwitch(
            "自动展开资源介绍",
            "m-csdn-download-automaticallyExpandResourceIntroduction",
            true,
            void 0,
            "屏蔽资源介绍【展开全部】按钮并展开资源介绍"
          )
        ]
      },
      {
        text: "屏蔽",
        type: "forms",
        forms: [
          UISwitch(
            "【屏蔽】广告",
            "m-csdn-download-removeAds",
            true,
            void 0,
            "包括：登录弹窗、会员降价等"
          )
        ]
      }
    ]
  };
  PanelMenu.deleteMenuOption(0);
  PanelMenu.addMenuOption([
    {
      key: "show_pops_panel_setting",
      text: "⚙ PC端设置",
      autoReload: false,
      isStoreValue: false,
      showText(text) {
        return text;
      },
      callback: () => {
        Panel.showPanel(PanelContent.getConfig(0));
      }
    },
    {
      key: "m_show_pops_panel_setting",
      text: "⚙ 移动端端设置",
      autoReload: false,
      isStoreValue: false,
      showText(text) {
        return text;
      },
      callback: () => {
        Panel.showPanel(PanelContent.getConfig(1));
      }
    },
    {
      key: "gotoCSDNCKnow",
      text: "⚙ 前往C知道",
      isStoreValue: false,
      autoReload: false,
      showText(text) {
        return text;
      },
      callback() {
        window.open("https://so.csdn.net/chat", "_blank");
      }
    }
  ]);
  PanelContent.addContentConfig([
    SettingUICommon,
    SettingUIBlog,
    SettingUILink,
    SettingUIHuaWeiCloud,
    SettingUIWenKu,
    SettingUISo
  ]);
  PanelContent.addContentConfig([
    MSettingUICommon,
    MSettingUIBlog,
    MSettingUILink,
    MSettingUIHuaWeiCloud,
    MSettingUIWenKu,
    MSettingUISo,
    MSettingUIDownload
  ]);
  Panel.init();
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
      M_CSDN.init();
    } else if (chooseMode == 2) {
      CSDN.init();
    } else {
      Qmsg.error("意外，手动判定的值不在范围内");
      _GM_deleteValue(CHANGE_ENV_SET_KEY);
    }
  } else {
    if (isMobile) {
      log.info("自动判定为移动端");
      M_CSDN.init();
    } else {
      log.info("自动判定为PC端");
      CSDN.init();
    }
  }

})(Qmsg, DOMUtils, Utils, pops);