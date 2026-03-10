// ==UserScript==
// @name         CookieManager
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.3.10.22
// @author       WhiteSevs
// @description  简单而强大的Cookie编辑器，允许您快速创建、编辑和删除Cookie
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA/NJREFUeF7tWm1u4jAQjVHusfR3jMQNlp5ky0l2e5K2Jym9ARLO79JzEMgyKF5FqeN5YzuwQPoHqRl/zPObN5NxVHbnf+rO/c9GAEYG3DkCYwjcOQFGETxbCGitF1mWLeq6/qGUmtZ1PW1+t0qpN2PMn0uwcTAA5vP5tKqqp8bhJ8C5R2PMCrBLajIIAFprOs3fkp0eGfFaluVSMiaFbVIAQhy3Tlw1AA3dXyjGQ0/lagFoxO091PGrZkAq5wmEq2NASuevDgCB889HXVjleb6tqmraaASbHeq6ptpgm+f5cr1eb2PDyzdenAUawfsENuXM60VRvBydQ+oCWmJljHkE1go2EQOgtSbB86q9L54FAJIubMuyfAj2DhgoAmA2m1FlR+nO+6eUWm42m9c+IwREO9YYI9ojt7fuc9HkRVF8Uv0OLPLsq+0F82T/DQDCKs8bu1rrGgDxZELh5LKdTCYfPpah88MMkGy6WdwpghL6A054mQaMx/oBaOy3F2xS2ZtNg/SsqqqocrnrUAqRhBggTF0I8MlsYjUCAiCA/skc5CYaHACO/rZq42oDzpHQ55RyXWNRgWQZ0Ef/xvFlu4sjzBShPkPjXPtzDQwGIM/zB1edzjEG2n06I7aUZgFwpS3u1dVX6LSyg83zv8DiKgSWeABczkSUut82ZJun0h4iggaSJhEGuKq20FLXWRylaKm5ABkMAN/Efb0CbjNDCSiXJlkGeOL5GwuYk/TG4xDiyYFOrGEB8NXuVtCoe0M3Pb445jbDVZs0/rRhpegX7T4nEUFJB8erTX3iyTVJulkHFU4uW6EMEN/y9KFgGdPuFQAC2HuK3JtlKgCIbtF9f8ebom12euncV3DRfFxzlkvXEAM4eiL5OMbGp+Lc3rgMAAHQIM02QmOcZMb23hr7AEDoLwEgeRgIAOstuny1A0J/GACOagJnxKYu4UTiH6E/DAAZpipUQvsHRGlqhDb1Bm3Jd8ME9wrZQsgeGbFgt9u9h765nbN/gJ6+iAGxLDhX/wCNfXuwMANoAFC0OGOcU2TJRQkjImzp2x0vAsCCIA0F7lS4ig5RTu5do28OMQAtJiA3xHbd0P4B4ru1CfrKLAgAqR6E9A8knmdZFuS8WAS7mxI2MaT9AxSDYOejAZBqgqR/wHmPtr25eYJDoD1xbI3AbbL7PFTwXOskAaAljPQBxWBt7r6yWApg2z4ZAO2Kkb4RTtnmHsLxoEJIgjSFxX6/XxwOh5+Cj6L+LdF6Z/gY8kvy5AxwgdQG46S8nc/lm/9RY5U+j/uixid6uSk5lEE1IHYjlxp/FgZcyjlk3REABKVbthkZcMuni/g2MgBB6ZZt/gJwetZfo7objAAAAABJRU5ErkJggg==
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.11.11/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.9.11/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.3/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@886625af68455365e426018ecb55419dd4ea6f30/lib/CryptoJS/index.js
// @connect      *
// @grant        GM.cookie
// @grant        GM_cookie
// @grant        GM_deleteValue
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_listValues
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_setValues
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (Qmsg, DOMUtils, pops, Utils, CryptoJS) {
  "use strict";

  var _GM = (() => (typeof GM != "undefined" ? GM : void 0))();
  var _GM_cookie = (() => (typeof GM_cookie != "undefined" ? GM_cookie : void 0))();
  var _GM_deleteValue = (() => (typeof GM_deleteValue != "undefined" ? GM_deleteValue : void 0))();
  var _GM_getResourceText = (() => (typeof GM_getResourceText != "undefined" ? GM_getResourceText : void 0))();
  var _GM_getValue = (() => (typeof GM_getValue != "undefined" ? GM_getValue : void 0))();
  var _GM_info = (() => (typeof GM_info != "undefined" ? GM_info : void 0))();
  var _GM_listValues = (() => (typeof GM_listValues != "undefined" ? GM_listValues : void 0))();
  var _GM_registerMenuCommand = (() =>
    typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_setValue = (() => (typeof GM_setValue != "undefined" ? GM_setValue : void 0))();
  var _GM_setValues = (() => (typeof GM_setValues != "undefined" ? GM_setValues : void 0))();
  var _GM_unregisterMenuCommand = (() =>
    typeof GM_unregisterMenuCommand != "undefined" ? GM_unregisterMenuCommand : void 0)();
  var _GM_xmlhttpRequest = (() => (typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0))();
  var _unsafeWindow = (() => (typeof unsafeWindow != "undefined" ? unsafeWindow : void 0))();
  var _monkeyWindow = (() => window)();
  const CommonUtil = {
    waitRemove(...args) {
      args.forEach((selector) => {
        if (typeof selector !== "string") {
          return;
        }
        DOMUtils.waitNodeList(selector).then((nodeList) => {
          nodeList.forEach(($el) => $el.remove());
        });
      });
    },
    createBlockCSSNode(...args) {
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
      return DOMUtils.createElement("style", {
        type: "text/css",
        innerHTML: `${selectorList.join(",\n")}{display: none !important;}`,
      });
    },
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
    setGMResourceCSS(resourceMapData) {
      const cssText = typeof _GM_getResourceText === "function" ? _GM_getResourceText(resourceMapData.keyName) : null;
      if (typeof cssText === "string" && cssText) {
        return addStyle(cssText);
      } else {
        return CommonUtil.loadStyleLink(resourceMapData.url);
      }
    },
    async loadStyleLink(url) {
      let $link = document.createElement("link");
      $link.rel = "stylesheet";
      $link.type = "text/css";
      $link.href = url;
      return new Promise((resolve) => {
        DOMUtils.onReady(() => {
          document.head.appendChild($link);
          resolve($link);
        });
      });
    },
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
    fixUrl(url) {
      url = url.trim();
      if (url.startsWith("data:")) {
        return url;
      }
      if (url.match(/^http(s|):\/\//i)) {
        return url;
      } else if (url.startsWith("//")) {
        if (url.startsWith("///"));
        else {
          url = window.location.protocol + url;
        }
        return url;
      } else {
        if (!url.startsWith("/")) {
          url += "/";
        }
        url = window.location.origin + url;
        return url;
      }
    },
    fixHttps(url) {
      if (url.startsWith("https://")) {
        return url;
      }
      if (!url.startsWith("http://")) {
        return url;
      }
      try {
        let urlInstance = new URL(url);
        urlInstance.protocol = "https:";
        return urlInstance.toString();
      } catch {
        return url;
      }
    },
    lockScroll(...args) {
      let $hidden = document.createElement("style");
      $hidden.innerHTML = `
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;
      let $elList = [document.documentElement, document.body].concat(...(args || []));
      $elList.forEach(($el) => {
        $el.classList.add("pops-overflow-hidden-important");
      });
      (document.head || document.documentElement).appendChild($hidden);
      return {
        recovery() {
          $elList.forEach(($el) => {
            $el.classList.remove("pops-overflow-hidden-important");
          });
          $hidden.remove();
        },
      };
    },
    async getClipboardText() {
      function readClipboardText(resolve) {
        navigator.clipboard
          .readText()
          .then((clipboardText) => {
            resolve(clipboardText);
          })
          .catch((error) => {
            log.error("读取剪贴板内容失败👉", error);
            resolve("");
          });
      }
      function requestPermissionsWithClipboard(resolve) {
        navigator.permissions
          .query({
            name: "clipboard-read",
          })
          .then(() => {
            readClipboardText(resolve);
          })
          .catch((error) => {
            log.error("申请剪贴板权限失败，尝试直接读取👉", error.message ?? error.name ?? error.stack);
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
              once: true,
            }
          );
        }
      });
    },
    escapeHtml(unsafe) {
      return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/©/g, "&copy;")
        .replace(/®/g, "&reg;")
        .replace(/™/g, "&trade;")
        .replace(/→/g, "&rarr;")
        .replace(/←/g, "&larr;")
        .replace(/↑/g, "&uarr;")
        .replace(/↓/g, "&darr;")
        .replace(/—/g, "&mdash;")
        .replace(/–/g, "&ndash;")
        .replace(/…/g, "&hellip;")
        .replace(/ /g, "&nbsp;")
        .replace(/\r\n/g, "<br>")
        .replace(/\r/g, "<br>")
        .replace(/\n/g, "<br>")
        .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
    },
    interval(fn, intervalTime, timeout = 5e3) {
      let timeId;
      let maxTimeout = timeout - intervalTime;
      let intervalTimeCount = intervalTime;
      let loop = async (isTimeout) => {
        const result = await fn(isTimeout);
        if ((typeof result === "boolean" && result) || isTimeout) {
          utils.workerClearTimeout(timeId);
          return;
        }
        intervalTimeCount += intervalTime;
        if (intervalTimeCount > maxTimeout) {
          loop(true);
          return;
        }
        timeId = utils.workerSetTimeout(() => {
          loop(false);
        }, intervalTime);
      };
      loop(false);
    },
    findParentNode($el, selector, parentSelector) {
      if (parentSelector) {
        let $parent = DOMUtils.closest($el, parentSelector);
        if ($parent) {
          let $target = $parent.querySelector(selector);
          return $target;
        }
      } else {
        if (DOMUtils.matches($el, selector)) {
          return $el;
        }
        let $parent = DOMUtils.closest($el, selector);
        return $parent;
      }
    },
    toStr(data, space = 2) {
      const undefinedReplacedStr = `__undefined__placeholder__replaced__str__` + performance.now();
      const dataStr = JSON.stringify(
        data,
        (key, value) => {
          return value === void 0 ? undefinedReplacedStr : value;
        },
        space
      ).replace(new RegExp(`"${undefinedReplacedStr}"`, "g"), "undefined");
      return dataStr;
    },
    isVerticalScreen() {
      return !globalThis.screen.orientation.type.includes("landscape");
    },
    isMobileDevice(size = 768) {
      const isVerticalScreen = this.isVerticalScreen();
      if (isVerticalScreen) {
        return globalThis.innerWidth < size;
      } else {
        return globalThis.innerHeight < size;
      }
    },
    isTopWindow() {
      const win = typeof _unsafeWindow === "object" && _unsafeWindow != null ? _unsafeWindow : window;
      return win.top === win.self;
    },
  };
  const KEY = "GM_Panel";
  const ATTRIBUTE_INIT = "data-init";
  const ATTRIBUTE_KEY = "data-key";
  const ATTRIBUTE_DEFAULT_VALUE = "data-default-value";
  const ATTRIBUTE_INIT_MORE_VALUE = "data-init-more-value";
  const ATTRIBUTE_PLUGIN_SEARCH_CONFIG = "data-plugin-search-config";
  const PROPS_STORAGE_API = "data-storage-api";
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
          },
        },
      ],
      get menuOption() {
        return this.__menuOption;
      },
    },
    init() {
      this.initExtensionsMenu();
    },
    initExtensionsMenu() {
      if (!CommonUtil.isTopWindow()) {
        return;
      }
      MenuRegister.add(this.$data.menuOption);
    },
    addMenuOption(option) {
      if (!Array.isArray(option)) {
        option = [option];
      }
      this.$data.menuOption.push(...option);
    },
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
    getMenuOption(index = 0) {
      return this.$data.menuOption[index];
    },
    deleteMenuOption(index = 0) {
      this.$data.menuOption.splice(index, 1);
    },
  };
  class StorageUtils {
    storageKey;
    listenerData;
    constructor(key) {
      if (typeof key === "string") {
        const trimKey = key.trim();
        if (trimKey == "") {
          throw new Error("key参数不能为空字符串");
        }
        this.storageKey = trimKey;
      } else {
        throw new Error("key参数类型错误，必须是字符串");
      }
      this.listenerData = new Utils.Dictionary();
      this.getLocalValue = this.getLocalValue.bind(this);
      this.set = this.set.bind(this);
      this.get = this.get.bind(this);
      this.getAll = this.getAll.bind(this);
      this.delete = this.delete.bind(this);
      this.has = this.has.bind(this);
      this.keys = this.keys.bind(this);
      this.values = this.values.bind(this);
      this.clear = this.clear.bind(this);
      this.addValueChangeListener = this.addValueChangeListener.bind(this);
      this.removeValueChangeListener = this.removeValueChangeListener.bind(this);
      this.emitValueChangeListener = this.emitValueChangeListener.bind(this);
    }
    getLocalValue() {
      let localValue = _GM_getValue(this.storageKey);
      if (localValue == null) {
        localValue = {};
        this.setLocalValue(localValue);
      }
      return localValue;
    }
    setLocalValue(value) {
      _GM_setValue(this.storageKey, value);
    }
    set(key, value) {
      const oldValue = this.get(key);
      const localValue = this.getLocalValue();
      Reflect.set(localValue, key, value);
      this.setLocalValue(localValue);
      this.emitValueChangeListener(key, value, oldValue);
    }
    get(key, defaultValue) {
      const localValue = this.getLocalValue();
      return Reflect.get(localValue, key) ?? defaultValue;
    }
    getAll() {
      const localValue = this.getLocalValue();
      return localValue;
    }
    delete(key) {
      const oldValue = this.get(key);
      const localValue = this.getLocalValue();
      Reflect.deleteProperty(localValue, key);
      this.setLocalValue(localValue);
      this.emitValueChangeListener(key, void 0, oldValue);
    }
    has(key) {
      const localValue = this.getLocalValue();
      return Reflect.has(localValue, key);
    }
    keys() {
      const localValue = this.getLocalValue();
      return Reflect.ownKeys(localValue);
    }
    values() {
      const localValue = this.getLocalValue();
      return Reflect.ownKeys(localValue).map((key) => Reflect.get(localValue, key));
    }
    clear() {
      _GM_deleteValue(this.storageKey);
    }
    addValueChangeListener(key, callback) {
      const listenerId = Math.random();
      const listenerData = this.listenerData.get(key) || [];
      listenerData.push({
        id: listenerId,
        key,
        callback,
      });
      this.listenerData.set(key, listenerData);
      return listenerId;
    }
    removeValueChangeListener(listenerId) {
      let flag = false;
      for (const [key, listenerData] of this.listenerData.entries()) {
        for (let index = 0; index < listenerData.length; index++) {
          const value = listenerData[index];
          if (
            (typeof listenerId === "string" && value.key === listenerId) ||
            (typeof listenerId === "number" && value.id === listenerId)
          ) {
            listenerData.splice(index, 1);
            index--;
            flag = true;
          }
        }
        this.listenerData.set(key, listenerData);
      }
      return flag;
    }
    async emitValueChangeListener(...args) {
      const [key, newValue, oldValue] = args;
      if (!this.listenerData.has(key)) {
        return;
      }
      const listenerData = this.listenerData.get(key);
      for (let index = 0; index < listenerData.length; index++) {
        const data = listenerData[index];
        if (typeof data.callback === "function") {
          let __newValue;
          let __oldValue;
          if (args.length === 1);
          else if (args.length === 2) {
            __newValue = newValue;
          } else if (args.length === 3) {
            __newValue = newValue;
            __oldValue = oldValue;
          }
          await data.callback(key, __newValue, __oldValue);
        }
      }
    }
  }
  const PopsPanelStorageApi = new StorageUtils(KEY);
  const PanelSizeUtil = {
    get width() {
      return globalThis.innerWidth;
    },
    get height() {
      return globalThis.innerHeight;
    },
  };
  const PanelUISize = {
    setting: {
      get width() {
        if (PanelSizeUtil.width < 550) {
          return "88vw";
        } else if (PanelSizeUtil.width < 700) {
          return "550px";
        } else {
          return "700px";
        }
      },
      get height() {
        if (PanelSizeUtil.height < 450) {
          return "70vh";
        } else if (PanelSizeUtil.height < 550) {
          return "450px";
        } else {
          return "550px";
        }
      },
    },
    settingMiddle: {
      get width() {
        return PanelSizeUtil.width < 350 ? "88vw" : "350px";
      },
      get height() {
        return PanelSizeUtil.height < 450 ? "88vh" : "450px";
      },
    },
    info: {
      get width() {
        return PanelSizeUtil.width < 350 ? "88vw" : "350px";
      },
      get height() {
        return PanelSizeUtil.height < 250 ? "88vh" : "250px";
      },
    },
  };
  const Panel = {
    $data: {
      __contentConfigInitDefaultValue: null,
      __onceExecMenuData: null,
      __urlChangeReloadMenuExecOnce: null,
      __onceExecData: null,
      __panelConfig: {},
      $panel: null,
      panelContent: [],
      get contentConfigInitDefaultValue() {
        if (this.__contentConfigInitDefaultValue == null) {
          this.__contentConfigInitDefaultValue = new utils.Dictionary();
        }
        return this.__contentConfigInitDefaultValue;
      },
      contentConfigInitDisabledKeys: [],
      get onceExecMenuData() {
        if (this.__onceExecMenuData == null) {
          this.__onceExecMenuData = new utils.Dictionary();
        }
        return this.__onceExecMenuData;
      },
      get urlChangeReloadMenuExecOnce() {
        if (this.__urlChangeReloadMenuExecOnce == null) {
          this.__urlChangeReloadMenuExecOnce = new utils.Dictionary();
        }
        return this.__urlChangeReloadMenuExecOnce;
      },
      get onceExecData() {
        if (this.__onceExecData == null) {
          this.__onceExecData = new utils.Dictionary();
        }
        return this.__onceExecData;
      },
      get scriptName() {
        return SCRIPT_NAME;
      },
      get panelConfig() {
        return this.__panelConfig;
      },
      set panelConfig(value) {
        this.__panelConfig = value;
      },
      key: KEY,
      attributeKeyName: ATTRIBUTE_KEY,
      attributeDefaultValueName: ATTRIBUTE_DEFAULT_VALUE,
    },
    init() {
      this.initContentDefaultValue();
      PanelMenu.init();
    },
    initContentDefaultValue() {
      const initDefaultValue = (config) => {
        if (!config.attributes) {
          return;
        }
        if (config.type === "button" || config.type === "container" || config.type === "deepMenu") {
          return;
        }
        const attributes = config.attributes;
        let __attr_init__ = attributes[ATTRIBUTE_INIT];
        if (typeof __attr_init__ === "function") {
          let __attr_result__ = __attr_init__();
          if (typeof __attr_result__ === "boolean" && !__attr_result__) {
            return;
          }
        }
        let menuDefaultConfig = new Map();
        let key = attributes[ATTRIBUTE_KEY];
        if (key != null) {
          const defaultValue = attributes[ATTRIBUTE_DEFAULT_VALUE];
          menuDefaultConfig.set(key, defaultValue);
        }
        let moreMenuDefaultConfig = attributes[ATTRIBUTE_INIT_MORE_VALUE];
        if (typeof moreMenuDefaultConfig === "object" && moreMenuDefaultConfig) {
          Object.keys(moreMenuDefaultConfig).forEach((key2) => {
            const defaultValue = moreMenuDefaultConfig[key2];
            menuDefaultConfig.set(key2, defaultValue);
          });
        }
        if (!menuDefaultConfig.size) {
          log.warn("请先配置键", config);
          return;
        }
        if (config.type === "switch") {
          let disabled = typeof config.disabled === "function" ? config.disabled() : config.disabled;
          if (typeof disabled === "boolean" && disabled) {
            this.$data.contentConfigInitDisabledKeys.push(...menuDefaultConfig.keys());
          }
        }
        for (const [__key, __defaultValue] of menuDefaultConfig.entries()) {
          this.setDefaultValue(__key, __defaultValue);
        }
      };
      const loopInitDefaultValue = (configList) => {
        for (let index = 0; index < configList.length; index++) {
          let configItem = configList[index];
          initDefaultValue(configItem);
          let childViews = configItem.views;
          if (childViews && Array.isArray(childViews)) {
            loopInitDefaultValue(childViews);
          }
        }
      };
      const contentConfigList = [...PanelContent.getAllContentConfig()];
      for (let index = 0; index < contentConfigList.length; index++) {
        let leftContentConfigItem = contentConfigList[index];
        if (!leftContentConfigItem.views) {
          continue;
        }
        const rightContentConfigList = leftContentConfigItem.views;
        if (rightContentConfigList && Array.isArray(rightContentConfigList)) {
          loopInitDefaultValue(rightContentConfigList);
        }
      }
      this.$data.contentConfigInitDisabledKeys = [...new Set(this.$data.contentConfigInitDisabledKeys)];
    },
    setDefaultValue(key, defaultValue) {
      if (this.$data.contentConfigInitDefaultValue.has(key)) {
        log.warn("该key已存在，初始化默认值失败: " + key);
      }
      this.$data.contentConfigInitDefaultValue.set(key, defaultValue);
    },
    getDefaultValue(key) {
      return this.$data.contentConfigInitDefaultValue.get(key);
    },
    setValue(key, value) {
      PopsPanelStorageApi.set(key, value);
    },
    getValue(key, defaultValue) {
      const localValue = PopsPanelStorageApi.get(key);
      if (localValue == null) {
        if (this.$data.contentConfigInitDefaultValue.has(key)) {
          return this.$data.contentConfigInitDefaultValue.get(key);
        }
        return defaultValue;
      }
      return localValue;
    },
    deleteValue(key) {
      PopsPanelStorageApi.delete(key);
    },
    hasKey(key) {
      return PopsPanelStorageApi.has(key);
    },
    addValueChangeListener(key, callback, option) {
      const listenerId = PopsPanelStorageApi.addValueChangeListener(key, callback);
      if (option?.immediate || option?.immediateAll) {
        const value = this.getValue(key);
        if (option?.immediate) {
          callback(key, value, value);
        } else if (option?.immediateAll) {
          Panel.emitMenuValueChange(key, value, value);
        }
      }
      return listenerId;
    },
    removeValueChangeListener(listenerId) {
      PopsPanelStorageApi.removeValueChangeListener(listenerId);
    },
    emitMenuValueChange(key, newValue, oldValue) {
      PopsPanelStorageApi.emitValueChangeListener(key, newValue, oldValue);
    },
    async exec(queryKey, callback, checkExec, once = true) {
      const that = this;
      let queryKeyFn;
      if (typeof queryKey === "string" || Array.isArray(queryKey)) {
        queryKeyFn = () => queryKey;
      } else {
        queryKeyFn = queryKey;
      }
      let isArrayKey = false;
      const queryKeyResult = queryKeyFn();
      let keyList = [];
      if (Array.isArray(queryKeyResult)) {
        isArrayKey = true;
        keyList = queryKeyResult;
      } else {
        keyList.push(queryKeyResult);
      }
      const findNotInDataKey = keyList.find((it) => !this.$data.contentConfigInitDefaultValue.has(it));
      if (findNotInDataKey) {
        log.warn(`${findNotInDataKey} 键不存在`);
        return;
      }
      const storageKey = JSON.stringify(keyList);
      if (once) {
        if (this.$data.onceExecMenuData.has(storageKey)) {
          return this.$data.onceExecMenuData.get(storageKey);
        }
      }
      let storeValueList = [];
      const listenerIdList = [];
      let destoryFnList = [];
      const addStoreValueCallback = (enableValue, args) => {
        let dynamicMenuStoreValueList = [];
        let dynamicDestoryFnList = [];
        let resultValueList = [];
        if (Array.isArray(args)) {
          resultValueList = resultValueList.concat(args);
        } else {
          const handleArgs = (obj) => {
            if (typeof obj === "object" && obj != null) {
              if (obj instanceof Element) {
                resultValueList.push(obj);
              } else {
                const { $css, destory } = obj;
                if ($css != null) {
                  if (Array.isArray($css)) {
                    resultValueList = resultValueList.concat($css);
                  } else {
                    resultValueList.push($css);
                  }
                }
                if (typeof destory === "function") {
                  resultValueList.push(destory);
                }
              }
            } else {
              resultValueList.push(obj);
            }
          };
          if (args != null && Array.isArray(args)) {
            for (const it of args) {
              handleArgs(it);
            }
          } else {
            handleArgs(args);
          }
        }
        const handleResult = (it) => {
          if (it == null) {
            return;
          }
          if (it instanceof Element) {
            dynamicMenuStoreValueList.push(it);
            return;
          }
          if (typeof it === "function") {
            dynamicDestoryFnList.push(it);
            return;
          }
        };
        for (const it of resultValueList) {
          const flag = handleResult(it);
          if (typeof flag === "boolean" && !flag) {
            break;
          }
          if (Array.isArray(it)) {
            for (const it2 of it) {
              const flag2 = handleResult(it2);
              if (typeof flag2 === "boolean" && !flag2) {
                break;
              }
            }
          }
        }
        execClearStoreStyleElements();
        execDestory();
        if (enableValue) {
          storeValueList = storeValueList.concat(dynamicMenuStoreValueList);
          destoryFnList = destoryFnList.concat(dynamicDestoryFnList);
        }
      };
      const getMenuValue = (key) => {
        const value = this.getValue(key);
        return Boolean(value);
      };
      const execClearStoreStyleElements = () => {
        for (let index = 0; index < storeValueList.length; index++) {
          const $css = storeValueList[index];
          $css?.remove();
          storeValueList.splice(index, 1);
          index--;
        }
      };
      const execDestory = () => {
        for (let index = 0; index < destoryFnList.length; index++) {
          const destoryFnItem = destoryFnList[index];
          destoryFnItem();
          destoryFnList.splice(index, 1);
          index--;
        }
      };
      const checkMenuExec = () => {
        let flag = false;
        if (typeof checkExec === "function") {
          flag = checkExec(keyList);
        } else {
          flag = keyList.every((key) => getMenuValue(key));
        }
        return flag;
      };
      const valueChangeCallback = async (valueOption) => {
        const execFlag = checkMenuExec();
        let callbackResult = [];
        if (execFlag) {
          const valueList = keyList.map((key) => this.getValue(key));
          callbackResult = await callback({
            key: keyList,
            triggerKey: valueOption?.key,
            value: isArrayKey ? valueList : valueList[0],
            addStoreValue: (...args) => {
              return addStoreValueCallback(execFlag, args);
            },
          });
        }
        addStoreValueCallback(execFlag, callbackResult);
      };
      if (once) {
        keyList.forEach((key) => {
          const listenerId = this.addValueChangeListener(key, (key2, newValue, oldValue) => {
            return valueChangeCallback({
              key: key2,
            });
          });
          listenerIdList.push(listenerId);
        });
      }
      await valueChangeCallback();
      const result = {
        reload() {
          this.clearStoreStyleElements();
          this.destory();
          valueChangeCallback();
        },
        clear() {
          this.clearStoreStyleElements();
          this.destory();
          this.removeValueChangeListener();
          this.clearOnceExecMenuData();
        },
        clearStoreStyleElements: () => {
          return execClearStoreStyleElements();
        },
        destory() {
          return execDestory();
        },
        removeValueChangeListener: () => {
          listenerIdList.forEach((listenerId) => {
            this.removeValueChangeListener(listenerId);
          });
        },
        clearOnceExecMenuData() {
          if (once) {
            that.$data.onceExecMenuData.delete(storageKey);
          }
        },
      };
      this.$data.onceExecMenuData.set(storageKey, result);
      return result;
    },
    async execMenu(key, callback, isReverse = false, once = false) {
      return await this.exec(
        key,
        async (option) => {
          return await callback(option);
        },
        (keyList) => {
          const execFlag = keyList.every((__key__) => {
            let flag = !!this.getValue(__key__);
            const disabled = Panel.$data.contentConfigInitDisabledKeys.includes(__key__);
            if (disabled) {
              flag = false;
              log.warn(`.execMenu${once ? "Once" : ""} ${__key__} 被禁用`);
            }
            if (isReverse) {
              flag = !flag;
            }
            return flag;
          });
          return execFlag;
        },
        once
      );
    },
    async execMenuOnce(key, callback, isReverse = false, listenUrlChange = false) {
      const result = await this.execMenu(key, callback, isReverse, true);
      if (listenUrlChange) {
        if (result) {
          const urlChangeEvent = () => {
            result.reload();
          };
          this.removeUrlChangeWithExecMenuOnceListener(key);
          this.addUrlChangeWithExecMenuOnceListener(key, urlChangeEvent);
        }
      }
      return result;
    },
    deleteExecMenuOnce(key) {
      key = this.transformKey(key);
      this.$data.onceExecMenuData.delete(key);
      this.$data.urlChangeReloadMenuExecOnce.delete(key);
      const flag = PopsPanelStorageApi.removeValueChangeListener(key);
      return flag;
    },
    onceExec(key, callback) {
      key = this.transformKey(key);
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (this.$data.onceExecData.has(key)) {
        return;
      }
      callback();
      this.$data.onceExecData.set(key, 1);
    },
    deleteOnceExec(key) {
      key = this.transformKey(key);
      this.$data.onceExecData.delete(key);
    },
    addUrlChangeWithExecMenuOnceListener(key, callback) {
      key = this.transformKey(key);
      this.$data.urlChangeReloadMenuExecOnce.set(key, callback);
      return {
        off: () => {
          return this.removeUrlChangeWithExecMenuOnceListener(key);
        },
      };
    },
    removeUrlChangeWithExecMenuOnceListener(key) {
      key = this.transformKey(key);
      this.$data.urlChangeReloadMenuExecOnce.delete(key);
    },
    hasUrlChangeWithExecMenuOnceListener(key) {
      key = this.transformKey(key);
      return this.$data.urlChangeReloadMenuExecOnce.has(key);
    },
    async emitUrlChangeWithExecMenuOnceEvent(config) {
      const values = this.$data.urlChangeReloadMenuExecOnce.values();
      for (const callback of values) {
        await callback(config);
      }
    },
    showPanel(
      content,
      title = `${SCRIPT_NAME}-设置`,
      preventDefaultContentConfig = false,
      preventRegisterSearchPlugin = false
    ) {
      this.$data.$panel = null;
      this.$data.panelContent = [];
      const checkHasBottomVersionContentConfig =
        content.findIndex((it) => {
          const isBottom = typeof it.isBottom === "function" ? it.isBottom() : Boolean(it.isBottom);
          return isBottom && it.id === "script-version";
        }) !== -1;
      if (!preventDefaultContentConfig && !checkHasBottomVersionContentConfig) {
        content.push(...PanelContent.getDefaultBottomContentConfig());
      }
      const $panel = __pops__.panel({
        title: {
          text: title,
          position: "center",
          html: false,
          style: "",
        },
        content,
        btn: {
          close: {
            enable: true,
            callback: (details) => {
              details.close();
              this.$data.$panel = null;
            },
          },
        },
        mask: {
          enable: true,
          clickEvent: {
            toClose: true,
            toHide: false,
          },
          clickCallBack: (originalRun) => {
            originalRun();
            this.$data.$panel = null;
          },
        },
        width: PanelUISize.setting.width,
        height: PanelUISize.setting.height,
        drag: true,
        only: true,
        style: `
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,
        ...this.$data.panelConfig,
      });
      this.$data.$panel = $panel;
      this.$data.panelContent = content;
      if (!preventRegisterSearchPlugin) {
        this.registerConfigSearch({ $panel, content });
      }
    },
    registerConfigSearch(config) {
      const { $panel, content } = config;
      const asyncQueryProperty = async (target, handler) => {
        if (target == null) {
          return;
        }
        const handleResult = await handler(target);
        if (handleResult && typeof handleResult.isFind === "boolean" && handleResult.isFind) {
          return handleResult.data;
        }
        return await asyncQueryProperty(handleResult.data, handler);
      };
      const scrollToElementAndListen = ($el, callback) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                callback?.();
                observer.disconnect();
              }
            });
          },
          {
            root: null,
            threshold: 1,
          }
        );
        observer.observe($el);
        $el.scrollIntoView({ behavior: "smooth", block: "center" });
      };
      const addFlashingClass = ($el) => {
        const flashingClassName = "pops-flashing";
        domUtils.onAnimationend($el, () => {
          $el.classList.remove(flashingClassName);
        });
        $el.classList.add(flashingClassName);
      };
      const dbclick_callback = (evt) => {
        if (evt.type === "dblclick" && isMobileTouch) {
          return;
        }
        domUtils.preventEvent(evt);
        const $alert = __pops__.alert({
          title: {
            text: "搜索配置",
            position: "center",
          },
          content: {
            text: `
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,
            html: true,
          },
          btn: {
            ok: { enable: false },
          },
          mask: {
            clickEvent: {
              toClose: true,
            },
          },
          width: PanelUISize.settingMiddle.width,
          height: "auto",
          drag: true,
          style: `
					${__pops__.config.cssText.panelCSS}

					.search-wrapper{
						border-bottom: 1px solid rgb(235, 238, 245, 1);
					}
					.pops-content:has(.search-result-wrapper:empty) .search-wrapper{
						border-bottom: 0;
					}
					.search-config-text{
						width: 100%;
						border: 0;
						height: 32px;
						padding: 0px 10px;
						outline: none;
					}
					.search-result-wrapper{
						max-height: 400px;
						overflow: auto;
					}
					.search-result-item{
						cursor: pointer;
						padding: 5px 10px;
						display: flex;
						flex-direction: column;
					}
					.search-result-item:hover{
						background-color: #D8F1FD;
					}
					.search-result-item-path{
						display: flex;
    					align-items: center;
					}
					.search-result-item-description{
						font-size: 0.8em;
						color: #6c6c6c;
					}
					${config.searchDialogStyle ?? ""}
				`,
        });
        $alert.$shadowRoot.querySelector(".search-wrapper");
        const $searchInput = $alert.$shadowRoot.querySelector(".search-config-text");
        const $searchResultWrapper = $alert.$shadowRoot.querySelector(".search-result-wrapper");
        $searchInput.focus();
        const clearSearchResult = () => {
          domUtils.empty($searchResultWrapper);
        };
        const createSearchResultItem = (pathInfo) => {
          const searchPath = utils.queryProperty(pathInfo, (target) => {
            if (target?.next) {
              return {
                isFind: false,
                data: target.next,
              };
            } else {
              return {
                isFind: true,
                data: target,
              };
            }
          });
          const $item = domUtils.createElement("div", {
            className: "search-result-item",
            innerHTML: `
							<div class="search-result-item-path">${searchPath.matchedData?.path}</div>
							<div class="search-result-item-description">${searchPath.matchedData?.description ?? ""}</div>
						`,
          });
          const panelHandlerComponents = __pops__.fn.PanelHandlerComponents();
          domUtils.on($item, "click", () => {
            const $asideItems2 = $panel.$shadowRoot.querySelectorAll(
              "aside.pops-panel-aside .pops-panel-aside-top-container li"
            );
            const $targetAsideItem = $asideItems2[pathInfo.index];
            if (!$targetAsideItem) {
              Qmsg.error(`左侧项下标${pathInfo.index}不存在`);
              return;
            }
            $targetAsideItem.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
            $targetAsideItem.click();
            asyncQueryProperty(pathInfo.next, async (target) => {
              if (target?.next) {
                const $findDeepMenu = await domUtils.waitNode(() => {
                  return Array.from($panel.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(
                    ($deepMenu) => {
                      const viewConfig = Reflect.get($deepMenu, panelHandlerComponents.$data.nodeStoreConfigKey);
                      return typeof viewConfig === "object" && viewConfig != null && viewConfig.text === target.name;
                    }
                  );
                }, 2500);
                if ($findDeepMenu) {
                  $findDeepMenu.click();
                } else {
                  Qmsg.error("未找到对应的二级菜单");
                  return {
                    isFind: true,
                    data: target,
                  };
                }
                return {
                  isFind: false,
                  data: target.next,
                };
              } else {
                const $findTargetMenu = await domUtils.waitNode(() => {
                  return Array.from($panel.$shadowRoot.querySelectorAll(`li:not(.pops-panel-deepMenu-nav-item)`)).find(
                    ($menuItem) => {
                      const viewConfig = Reflect.get($menuItem, panelHandlerComponents.$data.nodeStoreConfigKey);
                      return viewConfig === target.matchedData?.formConfig;
                    }
                  );
                }, 2500);
                if ($findTargetMenu) {
                  scrollToElementAndListen($findTargetMenu);
                  const $fold = $findTargetMenu.closest(`.pops-panel-forms-fold[data-fold-enable]`);
                  if ($fold) {
                    const $foldWrapper = $fold.querySelector(".pops-panel-forms-fold-container");
                    $foldWrapper.click();
                    await utils.sleep(500);
                  }
                  scrollToElementAndListen($findTargetMenu, () => {
                    addFlashingClass($findTargetMenu);
                  });
                } else {
                  Qmsg.error("未找到对应的菜单项");
                }
                return {
                  isFind: true,
                  data: target,
                };
              }
            });
          });
          return $item;
        };
        const execSearch = (searchText) => {
          const searchTextRegExp = new RegExp(searchText, "i");
          const searchConfigResult = [];
          const loopContentConfig = (configList, path) => {
            for (let index = 0; index < configList.length; index++) {
              const configItem = configList[index];
              const childViewConfig = configItem.views;
              if (childViewConfig && Array.isArray(childViewConfig)) {
                const deepMenuPath = utils.deepClone(path);
                if (configItem.type === "deepMenu") {
                  const deepNext = utils.queryProperty(deepMenuPath, (target) => {
                    if (target?.next) {
                      return {
                        isFind: false,
                        data: target.next,
                      };
                    } else {
                      return {
                        isFind: true,
                        data: target,
                      };
                    }
                  });
                  deepNext.next = {
                    name: configItem.text,
                  };
                }
                loopContentConfig(childViewConfig, deepMenuPath);
              } else {
                let text;
                let description;
                if (configItem.type === "own") {
                  let searchConfig = Reflect.get(configItem.attributes || {}, ATTRIBUTE_PLUGIN_SEARCH_CONFIG);
                  if (searchConfig) {
                    if (typeof searchConfig === "function") {
                      searchConfig = searchConfig();
                    }
                    if (typeof searchConfig.text === "string") {
                      text = searchConfig.text;
                    }
                    if (typeof searchConfig.desc === "string") {
                      description = searchConfig.desc;
                    }
                  }
                } else {
                  text = configItem.text;
                  description = Reflect.get(configItem, "description");
                }
                const delayMatchedTextList = [text, description];
                const matchedIndex = delayMatchedTextList.findIndex((configText) => {
                  if (typeof configText !== "string") {
                    return;
                  }
                  return configText.match(searchTextRegExp);
                });
                if (matchedIndex !== -1) {
                  const matchedPath = utils.deepClone(path);
                  const deepNext = utils.queryProperty(matchedPath, (target) => {
                    if (target?.next) {
                      return {
                        isFind: false,
                        data: target.next,
                      };
                    } else {
                      return {
                        isFind: true,
                        data: target,
                      };
                    }
                  });
                  deepNext.next = {
                    name: text,
                    matchedData: {
                      path: "",
                      formConfig: configItem,
                      matchedText: delayMatchedTextList[matchedIndex],
                      description,
                    },
                  };
                  const pathList = [];
                  utils.queryProperty(matchedPath, (target) => {
                    const name = target?.name;
                    if (typeof name === "string" && name.trim() !== "") {
                      pathList.push(name);
                    }
                    if (target?.next) {
                      return {
                        isFind: false,
                        data: target.next,
                      };
                    } else {
                      return {
                        isFind: true,
                        data: target,
                      };
                    }
                  });
                  const pathStr = pathList.join(CommonUtil.escapeHtml(" - "));
                  deepNext.next.matchedData.path = pathStr;
                  searchConfigResult.push(matchedPath);
                }
              }
            }
          };
          for (let index = 0; index < content.length; index++) {
            const leftContentConfigItem = content[index];
            if (!leftContentConfigItem.views) {
              continue;
            }
            if (leftContentConfigItem.isBottom && leftContentConfigItem.id === "script-version") {
              continue;
            }
            const rightContentConfigList = leftContentConfigItem.views;
            if (rightContentConfigList && Array.isArray(rightContentConfigList)) {
              let text = leftContentConfigItem.title;
              if (typeof text === "function") {
                text = text();
              }
              loopContentConfig(rightContentConfigList, {
                index,
                name: text,
              });
            }
          }
          const fragment = document.createDocumentFragment();
          for (const pathInfo of searchConfigResult) {
            let $resultItem = createSearchResultItem(pathInfo);
            fragment.appendChild($resultItem);
          }
          clearSearchResult();
          $searchResultWrapper.append(fragment);
        };
        domUtils.on(
          $searchInput,
          "input",
          utils.debounce((evt2) => {
            domUtils.preventEvent(evt2);
            let searchText = domUtils.val($searchInput).trim();
            if (searchText === "") {
              clearSearchResult();
              return;
            }
            execSearch(searchText);
          }, 200)
        );
      };
      const $asideItems = $panel.$shadowRoot.querySelectorAll(
        `aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`
      );
      $asideItems.forEach(($asideItem) => {
        domUtils.on($asideItem, "dblclick", dbclick_callback);
      });
      let clickMap = new WeakMap();
      let isDoubleClick = false;
      let timer = void 0;
      let isMobileTouch = false;
      domUtils.on(
        $panel.$shadowRoot,
        "touchend",
        `aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`,
        (evt, $selector) => {
          isMobileTouch = true;
          clearTimeout(timer);
          timer = void 0;
          if (isDoubleClick && clickMap.has($selector)) {
            isDoubleClick = false;
            clickMap.delete($selector);
            dbclick_callback(evt);
          } else {
            timer = setTimeout(() => {
              isDoubleClick = false;
            }, 200);
            isDoubleClick = true;
            clickMap.set($selector, evt);
          }
        },
        {
          capture: true,
        }
      );
      $panel.$shadowRoot.appendChild(
        domUtils.createElement("style", {
          type: "text/css",
          textContent: `
    			.pops-flashing{
    				animation: double-blink 1.5s ease-in-out;
    			}
    			@keyframes double-blink {
    				 0% {
    					background-color: initial;
    				}
    				25% {
    					background-color: yellow;
    				}
    				50% {
    					background-color: initial;
    				}
    				75% {
    					background-color: yellow;
    				}
    				100% {
    					background-color: initial;
    				}
    			}
    		`,
        })
      );
    },
    transformKey(key) {
      if (Array.isArray(key)) {
        const keyArray = key.sort();
        return JSON.stringify(keyArray);
      } else {
        return key;
      }
    },
    getDynamicValue(key, defaultValue) {
      const that = this;
      let isInit = false;
      let __value = defaultValue;
      const listenerId = this.addValueChangeListener(key, (_, newValue) => {
        __value = newValue;
      });
      return {
        get value() {
          if (!isInit) {
            isInit = true;
            __value = that.getValue(key, defaultValue);
          }
          return __value;
        },
        destory() {
          that.removeValueChangeListener(listenerId);
        },
      };
    },
  };
  const PanelSettingConfig = {
    qmsg_config_position: {
      key: "qmsg-config-position",
      defaultValue: "bottom",
    },
    qmsg_config_maxnums: {
      key: "qmsg-config-maxnums",
      defaultValue: 3,
    },
    qmsg_config_showreverse: {
      key: "qmsg-config-showreverse",
      defaultValue: false,
    },
  };
  const utils = Utils.noConflict();
  const domUtils = DOMUtils.noConflict();
  const __pops__ = pops;
  const log = new utils.Log(_GM_info, _unsafeWindow.console || _monkeyWindow.console);
  const SCRIPT_NAME = _GM_info?.script?.name || void 0;
  const AnyTouch = pops.fn.Utils.AnyTouch();
  const DEBUG = false;
  log.config({
    debug: false,
    logMaxCount: 250,
    autoClearConsole: true,
    tag: true,
  });
  const getPageMaxZIndex = () => {
    const deviation = 100;
    const popsZIndex = pops.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex ?? 0;
    const pointZIndex = utils.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex ?? 0;
    const maxZIndex = Math.max(deviation, popsZIndex, pointZIndex);
    return maxZIndex;
  };
  Qmsg.config({
    isHTML: true,
    autoClose: true,
    showClose: false,
    consoleLogContent(qmsgInst) {
      const qmsgType = qmsgInst.setting.type;
      if (qmsgType === "loading") {
        return false;
      }
      const content = qmsgInst.setting.content;
      if (qmsgType === "warning") {
        log.warn(content);
      } else if (qmsgType === "error") {
        log.error(content);
      } else {
        log.info(content);
      }
      return false;
    },
    get position() {
      return Panel.getValue(
        PanelSettingConfig.qmsg_config_position.key,
        PanelSettingConfig.qmsg_config_position.defaultValue
      );
    },
    get maxNums() {
      return Panel.getValue(
        PanelSettingConfig.qmsg_config_maxnums.key,
        PanelSettingConfig.qmsg_config_maxnums.defaultValue
      );
    },
    get showReverse() {
      return Panel.getValue(
        PanelSettingConfig.qmsg_config_showreverse.key,
        PanelSettingConfig.qmsg_config_showreverse.defaultValue
      );
    },
    get zIndex() {
      return getPageMaxZIndex();
    },
  });
  __pops__.GlobalConfig.setGlobalConfig({
    zIndex: () => {
      return getPageMaxZIndex();
    },
    mask: {
      enable: true,
      clickEvent: {
        toClose: false,
        toHide: false,
      },
    },
    drag: true,
  });
  const MenuRegister = new utils.GM_Menu({
    GM_getValue: _GM_getValue,
    GM_setValue: _GM_setValue,
    GM_registerMenuCommand: _GM_registerMenuCommand,
    GM_unregisterMenuCommand: _GM_unregisterMenuCommand,
  });
  const httpx = new utils.Httpx({
    xmlHttpRequest: _GM_xmlhttpRequest,
    logDetails: DEBUG,
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
      defineProperty: _unsafeWindow.Object.defineProperty,
      keys: _unsafeWindow.Object.keys,
      values: _unsafeWindow.Object.values,
    },
    Function: {
      apply: _unsafeWindow.Function.prototype.apply,
      call: _unsafeWindow.Function.prototype.call,
    },
    Element: {
      appendChild: _unsafeWindow.Element.prototype.appendChild,
    },
    setTimeout: _unsafeWindow.setTimeout.bind(_unsafeWindow),
    clearTimeout: _unsafeWindow.clearTimeout.bind(_unsafeWindow),
    setInterval: _unsafeWindow.setInterval.bind(_unsafeWindow),
    clearInterval: _unsafeWindow.clearInterval.bind(_unsafeWindow),
  });
  const addStyle = domUtils.addStyle.bind(domUtils);
  DOMUtils.selector.bind(DOMUtils);
  DOMUtils.selectorAll.bind(DOMUtils);
  const cookieManager = new utils.GM_Cookie();
  const PanelContent = {
    $data: {
      __contentConfig: null,
      get contentConfig() {
        if (this.__contentConfig == null) {
          this.__contentConfig = new utils.Dictionary();
        }
        return this.__contentConfig;
      },
      __defaultBottomContentConfig: [],
    },
    addContentConfig(configList) {
      if (!Array.isArray(configList)) {
        configList = [configList];
      }
      let index = this.$data.contentConfig.keys().length;
      this.$data.contentConfig.set(index, configList);
    },
    getAllContentConfig() {
      return this.$data.contentConfig.values().flat();
    },
    getConfig(index = 0) {
      return this.$data.contentConfig.get(index) ?? [];
    },
    getDefaultBottomContentConfig() {
      if (this.$data.__defaultBottomContentConfig.length) {
        return this.$data.__defaultBottomContentConfig;
      }
      let isDoubleClick = false;
      let timer = void 0;
      const exportToFile = (fileName, fileData) => {
        if (typeof fileData !== "string") {
          fileData = CommonUtil.toStr(fileData);
        }
        const blob = new Blob([fileData]);
        const blobUrl = globalThis.URL.createObjectURL(blob);
        const $anchor = domUtils.createElement("a", {
          href: blobUrl,
          download: fileName,
        });
        $anchor.click();
        utils.workerSetTimeout(() => {
          globalThis.URL.revokeObjectURL(blobUrl);
        }, 500);
      };
      const dbclick_callback = () => {
        const importConfig = (importEndCallBack) => {
          const $alert = __pops__.alert({
            title: {
              text: "请选择导入方式",
              position: "center",
            },
            content: {
              text: `
            <div class="btn-control" data-mode="local">本地导入</div>
            <div class="btn-control" data-mode="network">网络导入</div>
            <div class="btn-control" data-mode="clipboard">剪贴板导入</div>`,
              html: true,
            },
            btn: {
              ok: { enable: false },
              close: {
                enable: true,
                callback(details, event) {
                  details.close();
                },
              },
            },
            drag: true,
            mask: {
              enable: true,
            },
            width: PanelUISize.info.width,
            height: PanelUISize.info.height,
            style: `
          .btn-control{
              display: inline-block;
              margin: 10px;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 5px;
              cursor: pointer;
          }
          .btn-control:hover{
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
          }`,
          });
          const $local = $alert.$shadowRoot.querySelector(".btn-control[data-mode='local']");
          const $network = $alert.$shadowRoot.querySelector(".btn-control[data-mode='network']");
          const $clipboard = $alert.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']");
          const updateConfigToStorage = async (data) => {
            const clearLocalStorage = confirm("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）");
            if (clearLocalStorage) {
              if (typeof _GM_listValues === "function") {
                if (typeof _GM_deleteValue === "function") {
                  const localStorageKeys = _GM_listValues();
                  localStorageKeys.forEach((key) => {
                    _GM_deleteValue(key);
                  });
                  Qmsg.success("已清空脚本存储的配置");
                } else {
                  Qmsg.error("不支持GM_deleteValue函数，无法执行删除脚本配置");
                }
              } else {
                Qmsg.error("不支持GM_listValues函数，无法清空脚本存储的配置");
              }
            }
            if (typeof _GM_setValues === "function") {
              _GM_setValues(data);
            } else {
              const keys = Object.keys(data);
              keys.forEach((key) => {
                const value = data[key];
                _GM_setValue(key, value);
              });
            }
            Qmsg.success("配置导入完毕");
          };
          const importFile = (configText) => {
            return new Promise(async (resolve) => {
              const data = utils.toJSON(configText);
              if (Object.keys(data).length === 0) {
                Qmsg.warning("解析为空配置，不导入");
              } else {
                await updateConfigToStorage(data);
              }
              resolve(true);
            });
          };
          domUtils.on($local, "click", (event) => {
            domUtils.preventEvent(event);
            $alert.close();
            const $input = domUtils.createElement("input", {
              type: "file",
              accept: ".json",
            });
            domUtils.on($input, ["propertychange", "input"], (event2) => {
              if (!$input.files?.length) {
                return;
              }
              const uploadFile = $input.files[0];
              const fileReader = new FileReader();
              fileReader.onload = () => {
                importFile(fileReader.result);
              };
              fileReader.readAsText(uploadFile, "UTF-8");
            });
            $input.click();
          });
          domUtils.on($network, "click", (event) => {
            domUtils.preventEvent(event);
            $alert.close();
            const $prompt = __pops__.prompt({
              title: {
                text: "网络导入",
                position: "center",
              },
              content: {
                text: "",
                placeholder: "请填写URL",
                focus: true,
              },
              btn: {
                close: {
                  enable: true,
                  callback(details, event2) {
                    details.close();
                  },
                },
                ok: {
                  text: "导入",
                  callback: async (details, event2) => {
                    const url = details.text;
                    if (utils.isNull(url)) {
                      Qmsg.error("请填入完整的url");
                      return;
                    }
                    const $loading = Qmsg.loading("正在获取配置...");
                    const response = await httpx.get(url, {
                      allowInterceptConfig: false,
                    });
                    $loading.close();
                    if (!response.status) {
                      log.error(response);
                      Qmsg.error("获取配置失败", { consoleLogContent: true });
                      return;
                    }
                    const flag = await importFile(response.data.responseText);
                    if (!flag) {
                      return;
                    }
                    details.close();
                  },
                },
                cancel: {
                  enable: false,
                },
              },
              drag: true,
              mask: {
                enable: true,
              },
              width: PanelUISize.info.width,
              height: "auto",
            });
            const $promptInput = $prompt.$shadowRoot.querySelector("input");
            const $promptOk = $prompt.$shadowRoot.querySelector(".pops-prompt-btn-ok");
            domUtils.on($promptInput, ["input", "propertychange"], (event2) => {
              const value = domUtils.val($promptInput);
              if (value === "") {
                domUtils.attr($promptOk, "disabled", "true");
              } else {
                domUtils.removeAttr($promptOk, "disabled");
              }
            });
            domUtils.onKeyboard($promptInput, "keydown", (keyName, keyValue, otherCodeList) => {
              if (keyName === "Enter" && otherCodeList.length === 0) {
                const value = domUtils.val($promptInput);
                if (value !== "") {
                  domUtils.emit($promptOk, "click");
                }
              }
            });
            domUtils.emit($promptInput, "input");
          });
          domUtils.on($clipboard, "click", async (event) => {
            domUtils.preventEvent(event);
            $alert.close();
            let clipboardText = await CommonUtil.getClipboardText();
            if (clipboardText.trim() === "") {
              Qmsg.warning("获取到的剪贴板内容为空");
              return;
            }
            const flag = await importFile(clipboardText);
            if (!flag) {
              return;
            }
          });
        };
        const exportConfig = (
          fileName = `${SCRIPT_NAME}_panel-setting-${utils.formatTime(Date.now(), "yyyy_MM_dd_HH_mm_ss")}.json`,
          fileData
        ) => {
          const $alert = __pops__.alert({
            title: {
              text: "请选择导出方式",
              position: "center",
            },
            content: {
              text: `
            <div class="btn-control" data-mode="export-to-file">导出至文件</div>
            <div class="btn-control" data-mode="export-to-clipboard">导出至剪贴板</div>
            `,
              html: true,
            },
            btn: {
              ok: { enable: false },
              close: {
                enable: true,
                callback(details, event) {
                  details.close();
                },
              },
            },
            drag: true,
            mask: {
              enable: true,
            },
            width: PanelUISize.info.width,
            height: PanelUISize.info.height,
            style: `
          .btn-control{
              display: inline-block;
              margin: 10px;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 5px;
              cursor: pointer;
          }
          .btn-control:hover{
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
          }`,
          });
          const $exportToFile = $alert.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']");
          const $exportToClipboard = $alert.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");
          domUtils.on($exportToFile, "click", (event) => {
            domUtils.preventEvent(event);
            try {
              exportToFile(fileName, fileData);
              $alert.close();
            } catch (error) {
              Qmsg.error(error.toString(), { consoleLogContent: true });
            }
          });
          domUtils.on($exportToClipboard, "click", async (event) => {
            const result = await utils.copy(fileData);
            if (result) {
              Qmsg.success("复制成功");
              $alert.close();
            } else {
              Qmsg.error("复制失败");
            }
          });
        };
        const $dialog = __pops__.confirm({
          title: {
            text: "配置",
            position: "center",
          },
          content: {
            text: `
            <textarea name="config-value" id="config" readonly></textarea>
          `,
            html: true,
          },
          btn: {
            ok: {
              enable: true,
              type: "primary",
              text: "导入",
              callback(eventDetails, event) {
                importConfig();
              },
            },
            cancel: {
              enable: true,
              text: "导出",
              callback(eventDetails, event) {
                exportConfig(void 0, configDataStr);
              },
            },
          },
          width: PanelSizeUtil.width < 450 ? "90vw" : "450px",
          height: "auto",
          style: `
          .pops-content textarea {
            --textarea-bd-color: #dcdfe6;
            display: inline-block;
            resize: vertical;
            padding: 5px 15px;
            margin: 0;
            line-height: normal;
            box-sizing: border-box;
            color: #606266;
            border: 0;
            border-radius: 0;
            outline: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background: none;
            width: 100%;
            height: 100%;
            appearance: none;
            resize: none;
          }
          .pops-content textarea{
            height: 500px;
          }
          .pops-content textarea:focus {
            --textarea-bd-color: #3677f0;
          }
          .pops-content textarea:hover {
            --textarea-bd-color: #c0c4cc;
          }
        `,
        });
        const $textarea = $dialog.$shadowRoot.querySelector("textarea");
        const configData = {};
        if (typeof _GM_listValues === "function") {
          const LocalKeys = _GM_listValues();
          LocalKeys.forEach((key) => {
            const value = _GM_getValue(key);
            Reflect.set(configData, key, value);
          });
        } else {
          Qmsg.warning("不支持函数GM_listValues，仅导出菜单配置");
          const panelLocalValue = _GM_getValue(KEY);
          Reflect.set(configData, KEY, panelLocalValue);
        }
        const configDataStr = CommonUtil.toStr(configData);
        $textarea.value = configDataStr;
      };
      const click_callback = () => {
        let supportURL = _GM_info?.script?.supportURL || _GM_info?.script?.namespace;
        if (typeof supportURL === "string" && utils.isNotNull(supportURL)) {
          window.open(supportURL, "_blank");
        }
      };
      return [
        {
          id: "script-version",
          title: `版本：${_GM_info?.script?.version || "未知"}`,
          isBottom: true,
          views: [],
          clickFirstCallback() {
            return false;
          },
          afterRender(config) {
            const anyTouch = new AnyTouch(config.$asideLiElement);
            anyTouch.on("tap", function (event) {
              clearTimeout(timer);
              timer = void 0;
              if (isDoubleClick) {
                isDoubleClick = false;
                dbclick_callback();
              } else {
                timer = setTimeout(() => {
                  isDoubleClick = false;
                  click_callback();
                }, 200);
                isDoubleClick = true;
              }
            });
          },
        },
      ];
    },
    setDefaultBottomContentConfig(config) {
      this.$data.__defaultBottomContentConfig = config;
    },
  };
  let applyObjectThis = (obj) => {
    if ((typeof obj === "object" && obj != null) || typeof obj === "function") {
      Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === "function") {
          obj[key] = obj[key].bind(obj);
        }
      });
    }
  };
  const __GM_cookie__ = _GM_cookie;
  applyObjectThis(__GM_cookie__);
  applyObjectThis(cookieManager);
  const CookieManagerApiNameList = ["document.cookie", "cookieStore", "GM_cookie", "GM.cookie"];
  class CookieManagerService {
    __apiName;
    constructor(apiName) {
      if (typeof apiName === "string") {
        if (!CookieManagerApiNameList.includes(apiName)) {
          throw new Error(`未知的apiName：${apiName}`);
        }
      }
      this.__apiName = apiName;
    }
    get cookieManagerApiName() {
      let managerApi = Panel.getValue("cookie-manager-api", "document.cookie");
      return this.__apiName || managerApi;
    }
    get cookieManager() {
      if (this.cookieManagerApiName === "GM_cookie") {
        return {
          list(options, callback) {
            __GM_cookie__.list(options, (result) => {
              callback(result);
            });
          },
          set(cookieInfo, callback) {
            __GM_cookie__.set(cookieInfo, (result) => {
              callback(result);
            });
          },
          delete(cookieInfo, callback) {
            __GM_cookie__.delete(cookieInfo, (result) => {
              callback(result);
            });
          },
        };
      } else if (this.cookieManagerApiName === "GM.cookie") {
        return {
          list(options, callback) {
            _GM.cookie.list().then((result) => {
              callback(result);
            });
          },
          set(cookieInfo, callback) {
            _GM.cookie
              .set(cookieInfo)
              .then((result) => {
                callback(result ?? null);
              })
              .catch((reason) => {
                callback(reason);
              });
          },
          delete(cookieInfo, callback) {
            _GM.cookie
              .delete(cookieInfo)
              .then((result) => {
                callback(result ?? null);
              })
              .catch((reason) => {
                callback(reason);
              });
          },
        };
      } else if (this.cookieManagerApiName === "cookieStore") {
        let cookieStore = _unsafeWindow.cookieStore;
        return {
          list(options, callback) {
            cookieStore
              .getAll()
              .then((result) => {
                result.forEach((it) => {
                  if (it.domain == null) {
                    it.domain = globalThis.location.hostname;
                  }
                });
                callback(result);
              })
              .catch((reason) => {
                log.error(reason);
                Qmsg.error(reason.toString());
              });
          },
          set(cookieInfo, callback) {
            cookieStore
              .set(cookieInfo)
              .then(() => {
                callback();
              })
              .catch((reason) => {
                callback(reason);
              });
          },
          delete(cookieInfo, callback) {
            cookieStore
              .delete(cookieInfo)
              .then(() => {
                callback();
              })
              .catch((reason) => {
                callback(reason);
              });
          },
        };
      } else {
        return cookieManager;
      }
    }
    queryAllCookie() {
      return new Promise((resolve, reject) => {
        try {
          this.cookieManager.list({}, (cookieListResult) => {
            let __cookieListResult__ = cookieListResult || [];
            __cookieListResult__ = __cookieListResult__.sort((a, b) => a.name.localeCompare(b.name));
            resolve(__cookieListResult__);
          });
        } catch (error) {
          log.error(error);
          Qmsg.error(error.toString());
          reject(error);
        }
      });
    }
    deleteAllCookie() {
      return new Promise((resolve, reject) => {
        try {
          this.cookieManager.list({}, async (cookieListResult) => {
            const __cookieListResult__ = cookieListResult || [];
            const result = {
              success: 0,
              error: 0,
            };
            for (let index = 0; index < __cookieListResult__.length; index++) {
              const cookieListItem = __cookieListResult__[index];
              let deleteError = await new Promise((deleteResolve) => {
                this.deleteCookie(cookieListItem).then((deleteResult) => {
                  deleteResolve(deleteResult);
                });
              });
              if (deleteError) {
                result.error++;
              } else {
                result.success++;
              }
            }
            resolve(result);
          });
        } catch (error) {
          log.error(error);
          Qmsg.error(error.toString());
          reject(error);
        }
      });
    }
    addCookie(cookieInfo) {
      return new Promise((resolve, reject) => {
        try {
          Reflect.deleteProperty(cookieInfo, "hostOnly");
          this.cookieManager.set(cookieInfo, (error) => {
            if (false);
            resolve(error);
          });
        } catch (error) {
          log.error(error);
          Qmsg.error(error.toString());
          reject(error);
        }
      });
    }
    deleteCookie(cookieInfo) {
      return new Promise((resolve, reject) => {
        try {
          this.cookieManager.delete(cookieInfo, (error) => {
            if (false);
            resolve(error);
          });
        } catch (error) {
          log.error(error);
          Qmsg.error(error.toString());
          reject(error);
        }
      });
    }
    updateCookie(cookieInfo) {
      return new Promise(async (resolve) => {
        let result;
        try {
          if (this.cookieManagerApiName === "document.cookie" || this.cookieManagerApiName === "cookieStore") {
            let deleteError = await this.deleteCookie(cookieInfo);
            if (deleteError) {
              throw new TypeError(deleteError.toString());
            }
          }
          let addError = await this.addCookie(cookieInfo);
          if (addError) {
            throw new TypeError(addError.toString());
          }
        } catch (error) {
          result = error;
        } finally {
          resolve(result);
        }
      });
    }
  }
  const CookieManager = new CookieManagerService();
  const CookieBackUpManager = {
    encrypt(text, secretKey) {
      return CryptoJS.AES.encrypt(text, secretKey).toString();
    },
    decrypt(text, secretKey) {
      const bytes = CryptoJS.AES.decrypt(text, secretKey);
      return bytes.toString(CryptoJS.enc.Utf8);
    },
    formatCookie(cookie, type, encodePwd) {
      let cookieText = "";
      if (type === "header_string") {
        cookieText = cookie
          .map((it) => {
            let cookieValue = it.value;
            return `${it.name}=${cookieValue}; `;
          })
          .join("");
      } else if (type === "json") {
        cookieText = JSON.stringify(
          {
            api: CookieManager.cookieManagerApiName,
            hostname: window.location.hostname,
            data: cookie,
          },
          null,
          2
        );
      } else {
        throw new Error("不支持的格式化类型：" + type);
      }
      if (encodePwd) {
        cookieText = this.encrypt(cookieText, encodePwd);
      }
      return cookieText;
    },
    showExportDialog() {
      let $confirm = __pops__.confirm({
        title: {
          text: "导出 Cookie",
          position: "center",
        },
        content: {
          text: `
						<p class="tip-text cookie-format-type-tip-text">您希望以哪种格式导出 Cookie？</p>
						<div class="cookie-format-type-container">
							<div class="cookie-format-type-item">
								<input id="cookie-format-header_string" type="radio" name="format" value="header_string">
								<label for="cookie-format-header_string">Header String</label>
							</div>
							<div class="cookie-format-type-item">
								<input id="cookie-format-json" type="radio" name="format" value="json">
								<label for="cookie-format-json">JSON</label>
							</div>
						</div>
						<p class="tip-text export-example-code-tip-text">示例</p>
						<div class="export-example-code-text-container">
							<pre></pre>
						</div>
						<div class="cookir-format-encode-pwd-container">
							<label for="hostOnly">用于加密 Cookie 的密码</label>
							<input id="encode-pwd" type="password" placeholder="用于加密 Cookie 的密码" value="">
							<p>如果您希望在导出前加密 Cookie，请输入密码（可选）。</p>
						</div>
					`,
          html: true,
        },
        width: window.innerWidth < 400 ? "88vw" : "400px",
        height: "auto",
        btn: {
          merge: true,
          position: "space-between",
          ok: {
            text: "导出",
            async callback(eventDetails) {
              let cookieList = CookieManagerView.$data.cookieList;
              if (cookieList.length === 0) {
                Qmsg.warning("Cookie为空");
                return;
              }
              let cookieText = CookieBackUpManager.formatCookie(
                cookieList,
                dialogConfig.exportType,
                dialogConfig.encodePwd
              );
              const blob = new Blob([cookieText], { type: "text/plain" });
              const url = URL.createObjectURL(blob);
              let $anchor = domUtils.createElement("a", {
                download: `${window.location.hostname}_${dialogConfig.exportType}_${CookieManager.cookieManagerApiName}_${Date.now()}.txt`,
                href: url,
                target: "_blank",
              });
              $anchor.click();
              setTimeout(() => {
                URL.revokeObjectURL(url);
              }, 500);
              eventDetails.close();
            },
          },
          other: {
            enable: true,
            text: "导出至剪贴板",
            type: "xiaomi-primary",
            async callback(eventDetails) {
              let cookieList = CookieManagerView.$data.cookieList;
              if (cookieList.length === 0) {
                Qmsg.warning("Cookie为空");
                return;
              }
              let cookieText = CookieBackUpManager.formatCookie(
                cookieList,
                dialogConfig.exportType,
                dialogConfig.encodePwd
              );
              const status = await utils.copy(cookieText);
              if (status) {
                Qmsg.success("复制成功");
              } else {
                Qmsg.error("复制失败");
              }
              eventDetails.close();
            },
          },
        },
        style: `
      ${__pops__.config.cssText.panelCSS}

      .pops-content{
        padding: 20px;
      }
      .cookie-format-type-container{
        display: flex;
        gap: 10px;
        margin: 10px 0px;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .cookie-format-type-item input[type="radio"]{
        width: 1rem;
        height: 1rem;
      }
      .export-example-code-text-container{
        padding: 10px;
        background: rgb(209 213 219 / 1);
        border-radius: 10px;
        width: 100%;
        margin: 1rem 0px;
      }
      .export-example-code-text-container pre{
        font-feature-settings: normal;
        font-variation-settings: normal;
        font-size: 1em;
        margin: 0;
        white-space: break-spaces;
      }
      .cookie-format-type-container label{
        color: rgb(17 24 39 / 1);
      }
      .cookir-format-encode-pwd-container label{
        color: #111827;
      }
      .cookie-format-type-tip-text,
      .export-example-code-tip-text,
      .cookir-format-encode-pwd-container label{
        font-weight: 600;
      }
      .cookir-format-encode-pwd-container input{
        border-radius: 0.5rem;
        width: 100%;
        border: 1px solid #d1d5db;
        background: #f9fafb;
        padding: 0.625rem;
        margin: 0.65rem 0px;
        font-size: 12px;
        color: #111827;
      }
      .cookir-format-encode-pwd-container p{
          color: #6b7280;
        font-size: 12px;
      }
		  `,
        darkStyle: `
      .cookie-format-type-container label{
        color: rgba(187, 187, 187, 1);
      }
      .cookir-format-encode-pwd-container input{
        background: #333333;
        border: 1px solid #5b5b5b;
        color: #ffffff;
      }
      .export-example-code-text-container{
        background: rgba(53,55,59,1);
      }
      .cookir-format-encode-pwd-container label{
        color: #ffffff;
      }
      `,
      });
      const $exampleCodeText = $confirm.$shadowRoot.querySelector(".export-example-code-text-container pre");
      const $format_header_string = $confirm.$shadowRoot.querySelector("#cookie-format-header_string");
      const $format_json = $confirm.$shadowRoot.querySelector("#cookie-format-json");
      const $encodePwd = $confirm.$shadowRoot.querySelector("#encode-pwd");
      const DialogConfigManager = {
        key: "cookie-backup-export-dialog-config",
        getConfig() {
          return Panel.getValue(this.key, {
            exportType: "header_string",
            encodePwd: "",
          });
        },
        saveConfig() {
          let exportType = "header_string";
          if ($format_json.checked) {
            exportType = "json";
          }
          Panel.setValue(this.key, {
            exportType,
            encodePwd: domUtils.val($encodePwd),
          });
          dialogConfig = this.getConfig();
        },
      };
      let dialogConfig = DialogConfigManager.getConfig();
      domUtils.on($format_header_string, "input", () => {
        const exampleCooikieList = [
          {
            name: "_ga",
            value: "GA1.2.123456789.987654321",
            domain: window.location.hostname,
            expires: Date.now() + 1e3 * 60 * 60 * 24 * 30,
            partitioned: false,
            path: "/",
            sameSite: "unspecified",
            secure: false,
          },
          {
            name: "PHPSESSID",
            value: "28f2d88ee9322cfd2e4f1e",
            domain: window.location.hostname,
            expires: Date.now() + 1e3 * 60 * 60 * 24 * 30,
            partitioned: false,
            path: "/",
            sameSite: "unspecified",
            secure: false,
          },
          {
            name: "csrftoken",
            value: "abcdef123456",
            domain: window.location.hostname,
            expires: Date.now() + 1e3 * 60 * 60 * 24 * 30,
            partitioned: false,
            path: "/",
            sameSite: "unspecified",
            secure: false,
          },
          {
            name: "logged_in",
            value: "true",
            domain: window.location.hostname,
            expires: Date.now() + 1e3 * 60 * 60 * 24 * 30,
            partitioned: false,
            path: "/",
            sameSite: "unspecified",
            secure: false,
          },
        ];
        let exampleText = this.formatCookie(exampleCooikieList, "header_string");
        domUtils.text($exampleCodeText, exampleText);
        DialogConfigManager.saveConfig();
      });
      domUtils.on($format_json, "input", () => {
        const exampleCooikieList = [
          {
            name: "sessionId",
            value: "abc123xyz456",
            domain: ".example.com",
            path: "/",
            secure: true,
            httpOnly: true,
            sameSite: "lax",
            expirationDate: 1713543600,
            hostOnly: false,
            session: false,
          },
        ];
        let exampleText = this.formatCookie(exampleCooikieList, "json");
        domUtils.text($exampleCodeText, exampleText);
        DialogConfigManager.saveConfig();
      });
      domUtils.on($encodePwd, ["input", "propertychange"], () => {
        DialogConfigManager.saveConfig();
      });
      if (dialogConfig.exportType === "header_string") {
        $format_header_string.click();
      } else if (dialogConfig.exportType === "json") {
        $format_json.click();
      }
      domUtils.val($encodePwd, dialogConfig.encodePwd);
    },
    showImportDialog() {
      let $confirm = __pops__.confirm({
        title: {
          text: "导入 Cookie",
          position: "center",
        },
        content: {
          text: `
						<p class="tip-text cookie-format-type-tip-text">您希望如何导入？</p>
						<div class="import-cookie-type-container">
							<div class="import-cookie-type-item">
								<input id="import-cookie-import_from_text" type="radio" name="format" value="import_from_text">
								<label for="import-cookie-import_from_text">Use text</label>
							</div>
							<div class="import-cookie-type-item">
								<input id="import-cookie-import_from_file" type="radio" name="format" value="import_from_file">
								<label for="import-cookie-import_from_file">Use a file</label>
							</div>
						</div>
						<div class="import-cookie-value-container">
							<div class="import-cookie-value-text">
								<label>Cookie value</label>
								<textarea rows="5" placeholder="Header string/JSON"></textarea>
							</div>
							<div class="import-cookie-value-file">
								<label>选择要导入的文件</label>
								<input accept=".txt, .json" type="file">
							</div>
						</div>
						<div class="cookie-format-decode-pwd-container">
							<label for="hostOnly">用于解密 Cookie 的密码</label>
							<input id="decode-pwd" type="password" placeholder="用于解密 Cookie 的密码" value="">
							<p>如果 Cookie 受加密保护，请输入解密密码（可选）。</p>
						</div>
					`,
          html: true,
        },
        width: window.innerWidth < 400 ? "88vw" : "400px",
        height: "auto",
        btn: {
          ok: {
            text: "导入",
            async callback(eventDetails) {
              try {
                const decodePwd = dialogConfig.decodePwd;
                let cookieListStr = dialogConfig.value;
                if (decodePwd.trim() === "") {
                } else {
                  cookieListStr = CookieBackUpManager.decrypt(cookieListStr, decodePwd);
                }
                const cookie = utils.toJSON(cookieListStr);
                if (Array.isArray(cookie)) {
                  log.info(`使用${CookieManager.cookieManagerApiName}导入cookie数据`);
                  for (const cookieInfo of cookie) {
                    await CookieManager.updateCookie(cookieInfo);
                  }
                } else if (typeof cookie === "object" && Object.keys(cookie).length && Array.isArray(cookie["data"])) {
                  const cookieManager2 = new CookieManagerService(cookie.api);
                  log.info(`使用${cookieManager2.cookieManagerApiName}导入cookie数据`);
                  for (const cookieInfo of cookie.data) {
                    await cookieManager2.updateCookie(cookieInfo);
                  }
                } else if (typeof cookie === "object" && !Object.keys(cookie).length) {
                  let utilsCookieManager = new utils.GM_Cookie();
                  log.info(`使用${CookieManager.cookieManagerApiName}导入cookie数据`);
                  let cookieObj = utilsCookieManager.parseCookie(cookieListStr);
                  for (const cookieInfo of cookieObj) {
                    await CookieManager.updateCookie({
                      name: cookieInfo.key,
                      value: cookieInfo.value,
                      domain: window.location.hostname,
                      path: "/",
                      sameSite: "unspecified",
                      secure: false,
                      session: false,
                      hostOnly: true,
                      httpOnly: false,
                    });
                  }
                } else {
                  log.error(cookieListStr, cookie);
                  Qmsg.error("cookie格式不符合");
                  return;
                }
                eventDetails.close();
              } catch (error) {
                Qmsg.error(error.toString());
              }
            },
          },
        },
        style: `
					${__pops__.config.cssText.panelCSS}

					.pops-content{
						padding: 20px;
					}
					.import-cookie-type-container{
						display: flex;
						gap: 10px;
						margin: 10px 0px;
						align-items: center;
						flex-wrap: wrap;
						justify-content: space-between;
					}
					.import-cookie-type-item input[type="radio"]{
						width: 1rem;
						height: 1rem;
					}
					.export-example-code-text-container{
						padding: 10px;
						background-color: rgb(209 213 219 / 1);
						border-radius: 10px;
						width: 100%;
						margin: 1rem 0px;
					}
					.export-example-code-text-container pre{
						font-feature-settings: normal;
						font-variation-settings: normal;
						font-size: 1em;
						margin: 0;
						white-space: break-spaces;
					}
					.import-cookie-type-container label{
						color: rgb(17 24 39 / 1);
					}
					.cookie-format-decode-pwd-container label{
						color: #111827;
					}
					.import-cookie-value-text label,
					.import-cookie-value-file label,
					.cookie-format-type-tip-text,
					.cookie-format-decode-pwd-container label{
						font-weight: 600;
					}
					.cookie-format-decode-pwd-container input{
						border-radius: 0.5rem;
						width: 100%;
						border: 1px solid #d1d5db;
						background-color: #f9fafb;
						padding: 0.625rem;
						margin: 0.65rem 0px;
						font-size: 12px;
						color: #111827;
					}
					.cookie-format-decode-pwd-container p{
    					color: #6b7280;
						font-size: 12px;
					}

					.import-cookie-value-text{
						display: flex;
						flex-direction: column;
					}
					.import-cookie-value-text label{

					}
					.import-cookie-value-text textarea{
						font-size: 0.875rem;
						line-height: 1.25rem;
						padding: 0.625rem;
						color: rgb(17 24 39 / 1);
						background: rgb(249 250 251 / 1);
						border: 1px solid rgb(209 213 219 / 1);
						border-radius: 0.5rem;
						width: 100%;
						margin: 10px 0px;
					}
					.import-cookie-value-file{
						display: flex;
						flex-direction: column;
					}
					.import-cookie-value-file label{

					}
					.import-cookie-value-file input{
						border: 1px solid #d1d5db;
						border-radius: 0.5rem;
						height: 2.25rem;
						width: 100%;
						margin: 1rem 0px;
					}
					.import-cookie-value-file input:hover,					
					.import-cookie-value-file input::file-selector-button:hover{
						cursor: pointer;
					}
					.import-cookie-value-file input::file-selector-button{
						background-color: #1E2939;
						color: #ffffff;
						height: 100%;
						box-sizing: border-box;
					}
					.import-cookie-value-file input::file-selector-button:hover{
						background-color: #364153;
					}
				`,
        darkStyle: `
        .import-cookie-type-container label {
          color: rgba(187, 187, 187, 1);
        }
        .import-cookie-value-text textarea{
          background: rgba(53, 55, 59, 1);
          border: 1px solid rgba(53, 55, 59, 1);
          color: #ffffff;
        }
        .cookie-format-decode-pwd-container label{
          color: #ffffff;
        }
        .cookie-format-decode-pwd-container input{
          background: #333333;
          border: 1px solid #5b5b5b;
          color: #ffffff;
        }
        `,
      });
      let import_file_text = "";
      const $import_cookie_from_text = $confirm.$shadowRoot.querySelector("#import-cookie-import_from_text");
      const $import_cookie_from_file = $confirm.$shadowRoot.querySelector("#import-cookie-import_from_file");
      $confirm.$shadowRoot.querySelector(".import-cookie-value-container");
      const $importContainer_text = $confirm.$shadowRoot.querySelector(".import-cookie-value-text");
      const $import_text = $importContainer_text.querySelector("textarea");
      const $importContainer_file = $confirm.$shadowRoot.querySelector(".import-cookie-value-file");
      const $import_file = $importContainer_file.querySelector("input");
      const $decodePwd = $confirm.$shadowRoot.querySelector("#decode-pwd");
      const DialogConfigManager = {
        key: "cookie-backup-import-dialog-config",
        getConfig() {
          let config = Panel.getValue(this.key, {
            importType: "import_from_text",
            decodePwd: "",
            value: "",
          });
          if (config.importType === "import_from_text") {
            config.value = $import_text.value;
          } else if (config.importType === "import_from_file") {
            config.value = import_file_text;
          }
          return config;
        },
        saveConfig() {
          let importType = "import_from_text";
          if ($import_cookie_from_file.checked) {
            importType = "import_from_file";
          }
          Panel.setValue(this.key, {
            importType,
            decodePwd: domUtils.val($decodePwd),
          });
          dialogConfig = this.getConfig();
        },
      };
      let dialogConfig = DialogConfigManager.getConfig();
      domUtils.on($import_cookie_from_text, "input", () => {
        DialogConfigManager.saveConfig();
        $import_file.value = "";
        import_file_text = "";
        domUtils.hide($importContainer_file, false);
        domUtils.show($importContainer_text, false);
      });
      domUtils.on($import_cookie_from_file, "input", () => {
        DialogConfigManager.saveConfig();
        $import_text.value = "";
        domUtils.hide($importContainer_text, false);
        domUtils.show($importContainer_file, false);
      });
      domUtils.on(
        $import_text,
        ["input", "propertychange"],
        utils.debounce(() => {
          DialogConfigManager.saveConfig();
        })
      );
      domUtils.on($import_file, ["change", "input"], () => {
        const file = $import_file.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function (e) {
            const content = e.target.result;
            if (typeof content === "string") {
              import_file_text = content;
              DialogConfigManager.saveConfig();
            }
          };
          reader.readAsText(file);
        }
      });
      domUtils.on($decodePwd, ["input", "propertychange"], async () => {
        DialogConfigManager.saveConfig();
      });
      if (dialogConfig.importType === "import_from_text") {
        $import_cookie_from_text.click();
      } else if (dialogConfig.importType === "import_from_file") {
        $import_cookie_from_file.click();
      }
      domUtils.val($decodePwd, dialogConfig.decodePwd);
    },
  };
  const UIButton = function (
    text,
    description,
    buttonText,
    buttonIcon,
    buttonIsRightIcon,
    buttonIconIsLoading,
    buttonType,
    clickCallBack,
    afterAddToUListCallBack,
    disable
  ) {
    const result = {
      text,
      type: "button",
      attributes: {},
      props: {},
      description,
      buttonIcon,
      buttonIsRightIcon,
      buttonIconIsLoading,
      buttonType,
      buttonText,
      callback(event) {
        if (typeof clickCallBack === "function") {
          clickCallBack(event);
        }
      },
      afterAddToUListCallBack,
    };
    Reflect.set(result.attributes, ATTRIBUTE_INIT, () => {
      result.disable = Boolean(disable);
    });
    return result;
  };
  const UIOwn = function (createLIElement, initConfig, searchConfig, attr, props, afterAddToUListCallBack) {
    const result = {
      type: "own",
      attributes: {},
      props: {},
      createLIElement,
      afterAddToUListCallBack,
    };
    {
      Reflect.set(result.attributes, ATTRIBUTE_INIT, () => false);
    }
    return result;
  };
  const UISelect = function (text, key, defaultValue, data, selectCallBack, description, valueChangeCallBack) {
    const result = {
      text,
      type: "select",
      description,
      attributes: {},
      props: {},
      getValue() {
        const storageApiValue = this.props[PROPS_STORAGE_API];
        return storageApiValue.get(key, defaultValue);
      },
      callback(isSelectedInfo) {
        if (isSelectedInfo == null) {
          return;
        }
        const value = isSelectedInfo.value;
        log.info(`选择：${isSelectedInfo.text}`);
        if (typeof selectCallBack === "function") {
          const result2 = selectCallBack(isSelectedInfo);
          if (result2) {
            return;
          }
        }
        const storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
        if (typeof valueChangeCallBack === "function") {
          valueChangeCallBack(isSelectedInfo);
        }
      },
      data,
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi("select", result, {
      get(key2, defaultValue2) {
        return Panel.getValue(key2, defaultValue2);
      },
      set(key2, value) {
        Panel.setValue(key2, value);
      },
    });
    return result;
  };
  const UISwitch = function (
    text,
    key,
    defaultValue,
    clickCallBack,
    description,
    afterAddToUListCallBack,
    disabled,
    valueChangeCallBack,
    shortCutOption
  ) {
    const result = {
      text,
      type: "switch",
      description,
      disabled,
      attributes: {},
      props: {},
      getValue() {
        const storageApiValue = this.props[PROPS_STORAGE_API];
        const value = storageApiValue.get(key, defaultValue);
        return value;
      },
      callback(event, __value) {
        const value = Boolean(__value);
        log.success(`${value ? "开启" : "关闭"} ${text}`);
        if (typeof clickCallBack === "function") {
          const result2 = clickCallBack(event, value);
          if (result2) {
            return;
          }
        }
        const storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
      afterAddToUListCallBack: (...args) => {
        afterAddToUListCallBack?.(...args);
      },
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi("switch", result, {
      get(key2, defaultValue2) {
        return Panel.getValue(key2, defaultValue2);
      },
      set(key2, value) {
        Panel.setValue(key2, value);
      },
    });
    return result;
  };
  const UITextArea = function (
    text,
    key,
    defaultValue,
    description,
    changeCallback,
    placeholder = "",
    disabled,
    valueChangeCallBack
  ) {
    const result = {
      text,
      type: "textarea",
      attributes: {},
      props: {},
      description,
      placeholder,
      disabled,
      getValue() {
        const storageApiValue = this.props[PROPS_STORAGE_API];
        const value = storageApiValue.get(key, defaultValue);
        if (Array.isArray(value)) {
          return value.join("\n");
        }
        return value;
      },
      callback(event, value) {
        const storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi("switch", result, {
      get(key2, defaultValue2) {
        return Panel.getValue(key2, defaultValue2);
      },
      set(key2, value) {
        Panel.setValue(key2, value);
      },
    });
    return result;
  };
  const PanelComponents = {
    $data: {
      __storeApiFn: null,
      get storeApiValue() {
        if (!this.__storeApiFn) {
          this.__storeApiFn = new Utils.Dictionary();
        }
        return this.__storeApiFn;
      },
    },
    getStorageApi(type) {
      if (!this.hasStorageApi(type)) {
        return;
      }
      return this.$data.storeApiValue.get(type);
    },
    hasStorageApi(type) {
      return this.$data.storeApiValue.has(type);
    },
    setStorageApi(type, storageApiValue) {
      this.$data.storeApiValue.set(type, storageApiValue);
    },
    initComponentsStorageApi(type, config, storageApiValue) {
      let propsStorageApi;
      if (this.hasStorageApi(type)) {
        propsStorageApi = this.getStorageApi(type);
      } else {
        propsStorageApi = storageApiValue;
      }
      this.setComponentsStorageApiProperty(config, propsStorageApi);
    },
    setComponentsStorageApiProperty(config, storageApiValue) {
      Reflect.set(config.props, PROPS_STORAGE_API, storageApiValue);
    },
  };
  const UIInput = function (
    text,
    key,
    defaultValue,
    description,
    changeCallback,
    placeholder = "",
    inputType = "text",
    afterAddToUListCallBack,
    valueChangeCallback
  ) {
    const result = {
      text,
      type: "input",
      inputType,
      attributes: {},
      props: {},
      description,
      placeholder,
      afterAddToUListCallBack,
      getValue() {
        const storageApiValue = this.props[PROPS_STORAGE_API];
        return storageApiValue.get(key, defaultValue);
      },
      callback(event, value) {
        const $input = event.target;
        $input.validity.valid;
        const storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi("input", result, {
      get(key2, defaultValue2) {
        return Panel.getValue(key2, defaultValue2);
      },
      set(key2, value) {
        Panel.setValue(key2, value);
      },
    });
    return result;
  };
  class RuleEditView {
    option;
    constructor(option) {
      this.option = option;
    }
    async showView() {
      const $dialog = __pops__.confirm({
        title: {
          text: this.option.title,
          position: "center",
        },
        content: {
          text: `
        <form class="rule-form-container" onsubmit="return false">
            <ul class="rule-form-ulist"></ul>
            <input type="submit" style="display: none;" />
        </form>
        `,
          html: true,
        },
        btn: utils.assign(
          {
            ok: {
              callback: async () => {
                await submitSaveOption();
              },
            },
          },
          this.option.btn || {},
          true
        ),
        drag: true,
        mask: {
          enable: true,
        },
        style: `
      ${__pops__.config.cssText.panelCSS}
      
      .rule-form-container {
          
      }
      .rule-form-container li{
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 5px 20px;
          gap: 10px;
      }
      .rule-form-ulist-dynamic{
        --button-margin-top: 0px;
        --button-margin-right: 0px;
        --button-margin-bottom: 0px;
        --button-margin-left: 0px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 5px 0px 5px 20px;
      }
      .rule-form-ulist-dynamic__inner{
        width: 100%;
      }
      .rule-form-ulist-dynamic__inner-container{
        display: flex;
        align-items: center;
      }
      .dynamic-forms{
        width: 100%;
      }
      .pops-panel-item-left-main-text{
          max-width: 150px;
      }
      .pops-panel-item-right-text{
          padding-left: 30px;
      }
      .pops-panel-item-right-text,
      .pops-panel-item-right-main-text{
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
      }
      .pops-panel-item-left-desc-text{
        line-height: normal;
        margin-top: 6px;
        font-size: 0.8em;
        color: rgb(108, 108, 108);
      }

      ${this.option?.style ?? ""}
      `,
        width:
          typeof this.option.width === "function" ? this.option.width() : window.innerWidth > 500 ? "500px" : "88vw",
        height:
          typeof this.option.height === "function" ? this.option.height() : window.innerHeight > 500 ? "500px" : "80vh",
      });
      const $form = $dialog.$shadowRoot.querySelector(".rule-form-container");
      $dialog.$shadowRoot.querySelector("input[type=submit]");
      const $ulist = $dialog.$shadowRoot.querySelector(".rule-form-ulist");
      const view = await this.option.getView(await this.option.data());
      domUtils.append($ulist, view);
      const submitSaveOption = async () => {
        const result = await this.option.onsubmit($form, await this.option.data());
        if (!result.success) {
          return;
        }
        $dialog.close();
        if (typeof this.option.dialogCloseCallBack === "function") {
          await this.option.dialogCloseCallBack(true);
        }
      };
      return $dialog;
    }
  }
  class RuleView {
    option;
    constructor(option) {
      this.option = option;
    }
    async showView(filterCallBack) {
      const $popsConfirm = __pops__.confirm({
        title: {
          text: this.option.title,
          position: "center",
        },
        content: {
          text: `
        <div class="rule-view-search-container">
          <div class="pops-panel-select pops-user-select-none" data-mode="native" style="min-width: 50px;">
            <select class="select-rule-status">
            </select>
          </div>
          <div class="pops-panel-select pops-user-select-none" data-mode="native" style="min-width: 50px;">
            <select class="select-rule-value">
            </select>
          </div>
          <div class="pops-panel-input pops-user-select-none">
            <div class="pops-panel-input_inner">
                <input type="text" placeholder="">
            </div>
          </div>
        </div>
        <div class="rule-view-container"></div>
        `,
          html: true,
        },
        style: `
      ${__pops__.config.cssText.panelCSS}

      .rule-view-search-container{
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 4px 8px;
      }
      .rule-view-search-container .pops-panel-select{
        min-width: fit-content;
        max-width: 60px;
      }
      .rule-view-search-container .pops-panel-select select{
        width: 100%;
        min-width: auto;
      }
      .rule-view-search-container .pops-panel-input{
        width: 100%;
      }


      .rule-item{
          display: flex;
          align-items: center;
          line-height: normal;
          font-size: 16px;
          padding: 4px 8px;
          gap: 8px;
      }
      .rule-name{
          flex: 1;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
      }
      .rule-controls{
          display: flex;
          align-items: center;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          gap: 8px;
          padding: 0px;
      }
      .rule-controls-enable{
          
      }
      .rule-controls-edit{
          
      }
      .rule-controls-delete{
          
      }
      .rule-controls-edit,
      .rule-controls-delete{
          width: 16px;
          height: 16px;
          cursor: pointer;
      }
      `,
        btn: {
          merge: true,
          reverse: false,
          position: "space-between",
          ok: {
            enable: this.option?.bottomControls?.add?.enable || true,
            type: "primary",
            text: "添加",
            callback: async () => {
              this.showEditView(false, await this.option.getAddData(), $popsConfirm.$shadowRoot);
            },
          },
          close: {
            enable: true,
            callback() {
              $popsConfirm.close();
            },
          },
          cancel: {
            enable: false,
          },
          other: {
            enable: this.option?.bottomControls?.clear?.enable || true,
            type: "xiaomi-primary",
            text: `清空所有(${(await this.option.data()).length})`,
            callback: () => {
              const $askDialog = __pops__.confirm({
                title: {
                  text: "提示",
                  position: "center",
                },
                content: {
                  text: "确定清空所有的数据？",
                  html: false,
                },
                btn: {
                  ok: {
                    enable: true,
                    callback: async () => {
                      log.success("清空所有");
                      if (typeof this.option?.bottomControls?.clear?.callback === "function") {
                        this.option.bottomControls.clear.callback();
                      }
                      const data = await this.option.data();
                      if (data.length) {
                        Qmsg.error("清理失败");
                        return;
                      } else {
                        Qmsg.success("清理成功");
                      }
                      await this.updateDeleteAllBtnText($popsConfirm.$shadowRoot);
                      this.clearContent($popsConfirm.$shadowRoot);
                      $askDialog.close();
                    },
                  },
                  cancel: {
                    text: "取消",
                    enable: true,
                  },
                },
                mask: { enable: true },
                width: "300px",
                height: "200px",
              });
            },
          },
        },
        mask: {
          enable: true,
        },
        width: window.innerWidth > 500 ? "500px" : "88vw",
        height: window.innerHeight > 500 ? "500px" : "80vh",
      });
      const { $searchContainer, $externalSelect, $ruleValueSelect, $searchInput } = this.parseViewElement(
        $popsConfirm.$shadowRoot
      );
      if (this.option.bottomControls?.filter?.enable) {
        let externalSelectInfo = null;
        let ruleValueSelectInfo = null;
        if (Array.isArray(this.option.bottomControls?.filter?.option)) {
          domUtils.append(
            $externalSelect,
            this.option.bottomControls?.filter?.option.map((option) => {
              const $option = domUtils.createElement("option", {
                innerText: option.name,
              });
              Reflect.set($option, "data-value", option);
              return $option;
            })
          );
        }
        if (Array.isArray(this.option.bottomControls?.filter?.inputOption)) {
          domUtils.append(
            $ruleValueSelect,
            this.option.bottomControls?.filter?.inputOption.map((option) => {
              const $option = domUtils.createElement("option", {
                innerText: option.name,
              });
              Reflect.set($option, "data-value", option);
              return $option;
            })
          );
        }
        domUtils.on($externalSelect, "change", async () => {
          const $isSelectedElement = $externalSelect[$externalSelect.selectedIndex];
          const selectInfo = Reflect.get($isSelectedElement, "data-value");
          if (typeof selectInfo?.selectedCallBack === "function") {
            selectInfo.selectedCallBack(selectInfo);
          }
          externalSelectInfo = selectInfo;
          await execFilter(false);
        });
        domUtils.on($ruleValueSelect, "change", async () => {
          const $isSelectedElement = $ruleValueSelect[$ruleValueSelect.selectedIndex];
          const selectInfo = Reflect.get($isSelectedElement, "data-value");
          if (typeof selectInfo?.selectedCallBack === "function") {
            selectInfo.selectedCallBack(selectInfo);
          }
          ruleValueSelectInfo = selectInfo;
          await execFilter(false);
        });
        domUtils.onInput(
          $searchInput,
          utils.debounce(async () => {
            await execFilter(false);
          })
        );
        const updateSelectData = () => {
          const $externalSelected = $externalSelect[$externalSelect.selectedIndex];
          externalSelectInfo = Reflect.get($externalSelected, "data-value");
          const $ruleValueSelected = $ruleValueSelect[$ruleValueSelect.selectedIndex];
          ruleValueSelectInfo = Reflect.get($ruleValueSelected, "data-value");
        };
        const execFilter = async (isUpdateSelectData) => {
          this.clearContent($popsConfirm.$shadowRoot);
          if (isUpdateSelectData) {
            updateSelectData();
          }
          const allData = await this.option.data();
          const filteredData = [];
          const searchText = domUtils.val($searchInput);
          for (let index = 0; index < allData.length; index++) {
            const item = allData[index];
            if (typeof filterCallBack === "function") {
              const flag = await filterCallBack(item);
              if (typeof flag === "boolean" && !flag) {
                continue;
              }
            }
            if (externalSelectInfo) {
              const externalFilterResult = await externalSelectInfo?.filterCallBack?.(item);
              if (typeof externalFilterResult === "boolean" && !externalFilterResult) {
                continue;
              }
            }
            if (ruleValueSelectInfo) {
              let flag = true;
              if (searchText === "") {
                flag = true;
              } else {
                flag = false;
              }
              if (!flag) {
                flag = await ruleValueSelectInfo?.filterCallBack?.(item, searchText);
              }
              if (!flag) {
                continue;
              }
            }
            filteredData.push(item);
          }
          await this.appendRuleItemElement($popsConfirm.$shadowRoot, filteredData);
        };
        if (typeof filterCallBack === "object" && filterCallBack != null) {
          let externalIndex;
          if (typeof filterCallBack.external === "number") {
            externalIndex = filterCallBack.external;
          } else {
            externalIndex = Array.from($externalSelect.options).findIndex((option) => {
              const data = Reflect.get(option, "data-value");
              return data.value === filterCallBack.external;
            });
          }
          if (externalIndex !== -1) {
            $externalSelect.selectedIndex = externalIndex;
          }
          let ruleIndex;
          if (typeof filterCallBack.rule === "number") {
            ruleIndex = filterCallBack.rule;
          } else {
            ruleIndex = Array.from($ruleValueSelect.options).findIndex((option) => {
              const data = Reflect.get(option, "data-value");
              return data.value === filterCallBack.rule;
            });
          }
          if (ruleIndex !== -1) {
            $ruleValueSelect.selectedIndex = ruleIndex;
          }
        }
        await execFilter(true);
      } else {
        domUtils.hide($searchContainer, false);
      }
    }
    showEditView(isEdit, editData, $parentShadowRoot, $editRuleItemElement, updateDataCallBack, submitCallBack) {
      let dialogCloseCallBack = async (isSubmit) => {
        if (isSubmit) {
          if (typeof submitCallBack === "function") {
            let newData = await this.option.getData(editData);
            submitCallBack(newData);
          }
        } else {
          if (!isEdit) {
            await this.option.deleteData(editData);
          }
          if (typeof updateDataCallBack === "function") {
            let newData = await this.option.getData(editData);
            updateDataCallBack(newData);
          }
        }
      };
      let editView = new RuleEditView({
        title: isEdit ? "编辑" : "添加",
        data: () => {
          return editData;
        },
        dialogCloseCallBack,
        getView: async (data) => {
          return await this.option.itemControls.edit.getView(data, isEdit);
        },
        btn: {
          ok: {
            enable: true,
            text: isEdit ? "修改" : "添加",
          },
          cancel: {
            callback: async (detail) => {
              detail.close();
              await dialogCloseCallBack(false);
            },
          },
          close: {
            callback: async (detail) => {
              detail.close();
              await dialogCloseCallBack(false);
            },
          },
        },
        onsubmit: async ($form, data) => {
          let result = await this.option.itemControls.edit.onsubmit($form, isEdit, data);
          if (result.success) {
            if (isEdit) {
              Qmsg.success("修改成功");
              if ($parentShadowRoot) {
                await this.updateRuleItemElement(result.data, $editRuleItemElement, $parentShadowRoot);
              }
            } else {
              if ($parentShadowRoot) {
                await this.appendRuleItemElement($parentShadowRoot, result.data);
              }
            }
          } else {
            if (isEdit) {
              log.error("修改失败");
            }
          }
          return result;
        },
        style: this.option.itemControls.edit.style,
        width: this.option.itemControls.edit.width,
        height: this.option.itemControls.edit.height,
      });
      editView.showView();
    }
    parseViewElement($shadowRoot) {
      const $container = $shadowRoot.querySelector(".rule-view-container");
      const $deleteBtn = $shadowRoot.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");
      const $searchContainer = $shadowRoot.querySelector(".rule-view-search-container");
      const $externalSelect = $searchContainer.querySelector(".pops-panel-select .select-rule-status");
      const $ruleValueSelect = $searchContainer.querySelector(".pops-panel-select .select-rule-value");
      const $searchInput = $searchContainer.querySelector(".pops-panel-input input");
      return {
        $container,
        $deleteBtn,
        $searchContainer,
        $externalSelect,
        $ruleValueSelect,
        $searchInput,
      };
    }
    parseRuleItemElement($ruleElement) {
      const $enable = $ruleElement.querySelector(".rule-controls-enable");
      const $enableSwitch = $enable.querySelector(".pops-panel-switch");
      const $enableSwitchInput = $enable.querySelector(".pops-panel-switch__input");
      const $enableSwitchCore = $enable.querySelector(".pops-panel-switch__core");
      const $edit = $ruleElement.querySelector(".rule-controls-edit");
      const $delete = $ruleElement.querySelector(".rule-controls-delete");
      return {
        $enable,
        $enableSwitch,
        $enableSwitchInput,
        $enableSwitchCore,
        $edit,
        $delete,
        data: Reflect.get($ruleElement, "data-rule"),
      };
    }
    async createRuleItemElement(data, $shadowRoot) {
      const name = await this.option.getDataItemName(data);
      const $ruleItem = domUtils.createElement("div", {
        className: "rule-item",
        innerHTML: `
			<div class="rule-name">${name}</div>
			<div class="rule-controls">
				<div class="rule-controls-enable">
					<div class="pops-panel-switch">
						<input class="pops-panel-switch__input" type="checkbox">
						<span class="pops-panel-switch__core">
							<div class="pops-panel-switch__action">
							</div>
						</span>
					</div>
				</div>
				<div class="rule-controls-edit">
					${__pops__.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${__pops__.config.iconSVG.delete}
				</div>
			</div>
			`,
      });
      Reflect.set($ruleItem, "data-rule", data);
      const switchCheckedClassName = "pops-panel-switch-is-checked";
      const { $enable, $enableSwitch, $enableSwitchCore, $enableSwitchInput, $delete, $edit } =
        this.parseRuleItemElement($ruleItem);
      if (this.option.itemControls.enable.enable) {
        domUtils.on($enableSwitchCore, "click", async () => {
          let isChecked = false;
          if ($enableSwitch.classList.contains(switchCheckedClassName)) {
            $enableSwitch.classList.remove(switchCheckedClassName);
            isChecked = false;
          } else {
            $enableSwitch.classList.add(switchCheckedClassName);
            isChecked = true;
          }
          $enableSwitchInput.checked = isChecked;
          await this.option.itemControls.enable.callback(data, isChecked);
        });
        if (await this.option.itemControls.enable.getEnable(data)) {
          $enableSwitch.classList.add(switchCheckedClassName);
        }
      } else {
        $enable.remove();
      }
      if (this.option.itemControls.edit.enable) {
        domUtils.on($edit, "click", (event) => {
          domUtils.preventEvent(event);
          this.showEditView(true, data, $shadowRoot, $ruleItem, (newData) => {
            data = null;
            data = newData;
          });
        });
      } else {
        $edit.remove();
      }
      if (this.option.itemControls.delete.enable) {
        domUtils.on($delete, "click", (event) => {
          domUtils.preventEvent(event);
          const $askDialog = __pops__.confirm({
            title: {
              text: "提示",
              position: "center",
            },
            content: {
              text: "确定删除该条数据？",
              html: false,
            },
            btn: {
              ok: {
                enable: true,
                callback: async () => {
                  log.success("删除数据");
                  const flag = await this.option.itemControls.delete.deleteCallBack(data);
                  if (flag) {
                    Qmsg.success("成功删除该数据");
                    $ruleItem.remove();
                    await this.updateDeleteAllBtnText($shadowRoot);
                    $askDialog.close();
                  } else {
                    Qmsg.error("删除该数据失败");
                  }
                },
              },
              cancel: {
                text: "取消",
                enable: true,
              },
            },
            mask: {
              enable: true,
            },
            width: "300px",
            height: "200px",
          });
        });
      } else {
        $delete.remove();
      }
      return $ruleItem;
    }
    async appendRuleItemElement($shadowRoot, data) {
      const { $container } = this.parseViewElement($shadowRoot);
      const $ruleItem = [];
      const iteratorData = Array.isArray(data) ? data : [data];
      for (let index = 0; index < iteratorData.length; index++) {
        const item = iteratorData[index];
        const $item = await this.createRuleItemElement(item, $shadowRoot);
        $ruleItem.push($item);
      }
      domUtils.append($container, $ruleItem);
      await this.updateDeleteAllBtnText($shadowRoot);
      return $ruleItem;
    }
    async updateRuleContaienrElement($shadowRoot) {
      this.clearContent($shadowRoot);
      const data = await this.option.data();
      await this.appendRuleItemElement($shadowRoot, data);
      await this.updateDeleteAllBtnText($shadowRoot);
    }
    async updateRuleItemElement(data, $oldRuleItem, $shadowRoot) {
      const $newRuleItem = await this.createRuleItemElement(data, $shadowRoot);
      $oldRuleItem.after($newRuleItem);
      $oldRuleItem.remove();
    }
    clearContent($shadowRoot) {
      const { $container } = this.parseViewElement($shadowRoot);
      domUtils.html($container, "");
    }
    setDeleteBtnText($shadowRoot, text, isHTML = false) {
      const { $deleteBtn } = this.parseViewElement($shadowRoot);
      if (isHTML) {
        domUtils.html($deleteBtn, text);
      } else {
        domUtils.text($deleteBtn, text);
      }
    }
    async updateDeleteAllBtnText($shadowRoot) {
      let data = await this.option.data();
      this.setDeleteBtnText($shadowRoot, `清空所有(${data.length})`);
    }
  }
  const CookieRule = {
    $key: {
      STORAGE_KEY: "cookie-rule",
    },
    $data: {
      matchedRuleList: [],
    },
    init() {
      this.$data.matchedRuleList.length = 0;
      this.$data.matchedRuleList = this.getMatchedRuleList();
      if (this.$data.matchedRuleList.length) {
        MenuRegister.add({
          key: "matched-cookie-rule-list",
          text: `${window.location.hostname} ${this.$data.matchedRuleList.length}条规则`,
          isStoreValue: false,
          autoReload: false,
          showText(text) {
            return text;
          },
          callback() {
            console.log(CookieRule.$data.matchedRuleList);
            alert("以下是命中的规则名：\n" + CookieRule.$data.matchedRuleList.map((it) => it.name).join("\n"));
          },
        });
      }
    },
    getMatchedRuleList(url = window.location.href) {
      const allData = this.getData();
      const matchedRuleList = [];
      allData.forEach((data) => {
        if (!data.enable) {
          return;
        }
        let ruleUrl = data.data.url;
        let enableRegExpToMatchUrl = data.data.enableRegExpToMatchUrl;
        if (enableRegExpToMatchUrl) {
          let regExpUrl = new RegExp(ruleUrl, "i");
          if (!regExpUrl.test(url)) {
            return;
          }
        } else {
          if (!url.includes(ruleUrl)) {
            return;
          }
        }
        matchedRuleList.push(data);
      });
      return matchedRuleList;
    },
    showView() {
      let panelHandlerComponents = __pops__.fn.PanelHandlerComponents();
      function generateStorageApi(data) {
        return {
          get(key, defaultValue) {
            return Reflect.get(data, key) ?? defaultValue;
          },
          set(key, value) {
            Reflect.set(data, key, value);
          },
        };
      }
      const matchedRuleList = this.getMatchedRuleList();
      const ruleView = new RuleView({
        title: "Cookie规则",
        data: () => {
          return this.getData();
        },
        getAddData: () => {
          return this.getTemplateData();
        },
        getDataItemName: (data) => {
          return data["name"];
        },
        updateData: (data) => {
          return this.updateData(data);
        },
        deleteData: (data) => {
          return this.deleteData(data);
        },
        getData: (data) => {
          const allData = this.getData();
          const findValue = allData.find((item) => item.uuid === data.uuid);
          return findValue ?? data;
        },
        itemControls: {
          enable: {
            enable: true,
            getEnable(data) {
              return data.enable;
            },
            callback: (data, enable) => {
              data.enable = enable;
              this.updateData(data);
            },
          },
          edit: {
            enable: true,
            getView: (data, isEdit) => {
              const $fragment = document.createDocumentFragment();
              const templateData = this.getTemplateData();
              if (!isEdit) {
                data = templateData;
              }
              const enable_template = UISwitch("启用", "enable", templateData.enable);
              Reflect.set(enable_template.props, PROPS_STORAGE_API, generateStorageApi(data));
              const $enable = panelHandlerComponents.createSectionContainerItem_switch(enable_template).$el;
              const name_template = UIInput("规则名称", "name", "", templateData.name, void 0, "必填");
              Reflect.set(name_template.props, PROPS_STORAGE_API, generateStorageApi(data));
              const $name = panelHandlerComponents.createSectionContainerItem_input(name_template).$el;
              const apiName_template = UISelect(
                "Cookie管理Api",
                "execApiName",
                templateData.data.execApiName,
                [
                  {
                    text: "（当前）" + CookieManager.cookieManagerApiName,
                    value: "use-global",
                  },
                  ...CookieManagerApiNameList.map((it) => {
                    return {
                      text: it,
                      value: it,
                    };
                  }),
                ],
                void 0,
                "操作Cookie的Api函数"
              );
              Reflect.set(apiName_template.props, PROPS_STORAGE_API, generateStorageApi(data.data));
              const $apiName = panelHandlerComponents.createSectionContainerItem_select(apiName_template).$el;
              const url_template = UIInput(
                "网址",
                "url",
                templateData.data.url,
                "用于执行该规则的网址",
                void 0,
                "必填"
              );
              Reflect.set(url_template.props, PROPS_STORAGE_API, generateStorageApi(data.data));
              const $url = panelHandlerComponents.createSectionContainerItem_input(url_template).$el;
              const enableRegExpToMatchUrl_template = UISwitch(
                "启用正则匹配网址",
                "enableRegExpToMatchUrl",
                templateData.data.enableRegExpToMatchUrl
              );
              Reflect.set(enableRegExpToMatchUrl_template.props, PROPS_STORAGE_API, generateStorageApi(data.data));
              const $enableRegExpToMatchUrl = panelHandlerComponents.createSectionContainerItem_switch(
                enableRegExpToMatchUrl_template
              ).$el;
              const cookieName_template = UIInput(
                "Cookie名称",
                "cookieName",
                templateData.data.cookieName,
                "用于匹配执行操作的Cookie名",
                void 0,
                "必填"
              );
              Reflect.set(cookieName_template.props, PROPS_STORAGE_API, generateStorageApi(data.data));
              const $cookieName = panelHandlerComponents.createSectionContainerItem_input(cookieName_template).$el;
              const enableRegExpToMatchCookieName_template = UISwitch(
                "启用正则匹配Cookie名称",
                "enableRegExpToMatchCookieName",
                templateData.data.enableRegExpToMatchCookieName
              );
              Reflect.set(
                enableRegExpToMatchCookieName_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data.data)
              );
              const $enableRegExpToMatchCookieName = panelHandlerComponents.createSectionContainerItem_switch(
                enableRegExpToMatchCookieName_template
              ).$el;
              const operationMode_template = UISelect("操作模式", "operationMode", templateData.data.operationMode, [
                {
                  value: "delete",
                  text: "删除Cookie",
                },
                {
                  value: "extended",
                  text: "自动延长Cookie有效期30天",
                },
                {
                  value: "extended-90",
                  text: "自动延长Cookie有效期90天",
                },
                {
                  value: "extended-180",
                  text: "自动延长Cookie有效期180天",
                },
                {
                  value: "extended-360",
                  text: "自动延长Cookie有效期360天",
                },
              ]);
              Reflect.set(operationMode_template.props, PROPS_STORAGE_API, generateStorageApi(data.data));
              const $operationMode =
                panelHandlerComponents.createSectionContainerItem_select(operationMode_template).$el;
              const remark_template = UITextArea("备注", "remark", templateData.data.remark);
              Reflect.set(remark_template.props, PROPS_STORAGE_API, generateStorageApi(data.data));
              const $remark = panelHandlerComponents.createSectionContainerItem_textarea(remark_template).$el;
              $fragment.append(
                $enable,
                $name,
                $apiName,
                $url,
                $enableRegExpToMatchUrl,
                $cookieName,
                $enableRegExpToMatchCookieName,
                $operationMode,
                $remark
              );
              return $fragment;
            },
            onsubmit: ($form, isEdit, editData) => {
              const $ulist_li = $form.querySelectorAll(".rule-form-ulist > li");
              const data = this.getTemplateData();
              if (isEdit) {
                data.uuid = editData.uuid;
              }
              try {
                $ulist_li.forEach(($li) => {
                  const viewConfig = Reflect.get($li, panelHandlerComponents.$data.nodeStoreConfigKey);
                  const attrs = Reflect.get(viewConfig, "attributes");
                  const storageApi = Reflect.get($li, PROPS_STORAGE_API);
                  const key = Reflect.get(attrs, ATTRIBUTE_KEY);
                  const defaultValue = Reflect.get(attrs, ATTRIBUTE_DEFAULT_VALUE);
                  const value = storageApi.get(key, defaultValue);
                  if (Reflect.has(data, key)) {
                    Reflect.set(data, key, value);
                  } else if (Reflect.has(data.data, key)) {
                    Reflect.set(data.data, key, value);
                  } else {
                    log.error(`${key}不在数据中`);
                  }
                });
                if (data.name.trim() === "") {
                  Qmsg.error("规则名称不能为空");
                  return {
                    success: false,
                    data,
                  };
                }
                if (data.data.url.trim() === "") {
                  Qmsg.error("网址不能为空");
                  return {
                    success: false,
                    data,
                  };
                }
                if (data.data.cookieName.trim() === "") {
                  Qmsg.error("Cookie名称不能为空");
                  return {
                    success: false,
                    data,
                  };
                }
                if (isEdit) {
                  return {
                    success: this.updateData(data),
                    data,
                  };
                } else {
                  return {
                    success: this.addData(data),
                    data,
                  };
                }
              } catch (error) {
                log.error(error);
                return {
                  success: false,
                  data,
                };
              } finally {
                this.init();
              }
            },
            style: `
          .pops-panel-textarea textarea{
              height: 150px;
          }
					.pops-panel-item-left-desc-text{
						line-height: normal;
						margin-top: 6px;
						font-size: 0.8em;
						color: rgb(108, 108, 108);
						max-width: 100px;
					}
          `,
          },
          delete: {
            enable: true,
            deleteCallBack: (data) => {
              return this.deleteData(data);
            },
          },
        },
        bottomControls: {
          filter: {
            enable: true,
            option: [
              {
                name: "启用",
                value: "enable",
                filterCallBack(data) {
                  return data.enable;
                },
              },
              {
                name: "未启用",
                value: "notEnable",
                filterCallBack(data) {
                  return !data.enable;
                },
              },
              {
                name: "当前网站执行",
                value: "currentSite",
                filterCallBack(data) {
                  return matchedRuleList.some((it) => it.uuid === data.uuid);
                },
              },
            ],
            inputOption: [
              {
                name: "规则名称",
                value: "url",
                filterCallBack(data, searchText) {
                  return Boolean(data.name.match(searchText));
                },
              },
              {
                name: "网址",
                value: "url",
                filterCallBack(data, searchText) {
                  return Boolean(data.data.url.match(searchText));
                },
              },
              {
                name: "Cookie名称",
                value: "cookieName",
                filterCallBack(data, searchText) {
                  return Boolean(data.data.cookieName.match(searchText));
                },
              },
              {
                name: "备注",
                value: "remark",
                filterCallBack(data, searchText) {
                  return Boolean(data.data.remark.match(searchText));
                },
              },
            ],
          },
        },
      });
      ruleView.showView();
    },
    getTemplateData() {
      return {
        uuid: utils.generateUUID(),
        enable: true,
        name: "",
        data: {
          url: "",
          execApiName: "use-global",
          enableRegExpToMatchUrl: false,
          cookieName: "",
          enableRegExpToMatchCookieName: false,
          operationMode: "delete",
          remark: "",
        },
      };
    },
    getData() {
      return _GM_getValue(this.$key.STORAGE_KEY, []);
    },
    setData(data) {
      _GM_setValue(this.$key.STORAGE_KEY, data);
    },
    addData(data) {
      const localData = this.getData();
      const findIndex = localData.findIndex((item) => item.uuid == data.uuid);
      if (findIndex === -1) {
        localData.push(data);
        _GM_setValue(this.$key.STORAGE_KEY, localData);
        return true;
      } else {
        return false;
      }
    },
    updateData(data) {
      const localData = this.getData();
      const index = localData.findIndex((item) => item.uuid == data.uuid);
      let updateFlag = false;
      if (index !== -1) {
        updateFlag = true;
        localData[index] = data;
      }
      this.setData(localData);
      return updateFlag;
    },
    deleteData(data) {
      const localData = this.getData();
      const index = localData.findIndex((item) => item.uuid == data.uuid);
      let deleteFlag = false;
      if (index !== -1) {
        deleteFlag = true;
        localData.splice(index, 1);
      }
      this.setData(localData);
      return deleteFlag;
    },
    clearData() {
      _GM_deleteValue(this.$key.STORAGE_KEY);
    },
    exportRule(fileName = "rule.json") {
      const allRule = this.getData();
      const blob = new Blob([JSON.stringify(allRule, null, 4)]);
      const blobUrl = window.URL.createObjectURL(blob);
      const $a = domUtils.createElement("a");
      $a.href = blobUrl;
      $a.download = fileName;
      $a.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
      }, 1500);
    },
    importRule() {
      const $alert = __pops__.alert({
        title: {
          text: "请选择导入方式",
          position: "center",
        },
        content: {
          text: `
                    <div class="import-mode" data-mode="local">本地导入</div>
                    <div class="import-mode" data-mode="network">网络导入</div>
                `,
          html: true,
        },
        width: PanelUISize.info.width,
        height: PanelUISize.info.height,
        style: `
                .import-mode{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `,
      });
      const $local = $alert.$shadowRoot.querySelector(".import-mode[data-mode='local']");
      const $network = $alert.$shadowRoot.querySelector(".import-mode[data-mode='network']");
      domUtils.on($local, "click", (event) => {
        domUtils.preventEvent(event);
        $alert.close();
        const $input = domUtils.createElement("input", {
          type: "file",
          accept: ".json",
        });
        domUtils.on($input, ["propertychange", "input"], () => {
          if (!$input.files?.length) {
            return;
          }
          const uploadFile = $input.files[0];
          const fileReader = new FileReader();
          fileReader.onload = () => {
            const data = utils.toJSON(fileReader.result);
            if (!Array.isArray(data)) {
              log.error("不是正确的规则文件", data);
              Qmsg.error("不是正确的规则文件");
              return;
            }
            this.setData(data);
            Qmsg.success(`成功导入 ${data.length}条规则`);
          };
          fileReader.readAsText(uploadFile, "UTF-8");
        });
        $input.click();
      });
      domUtils.on($network, "click", (event) => {
        domUtils.preventEvent(event);
        $alert.close();
        __pops__.prompt({
          title: {
            text: "网络导入",
            position: "center",
          },
          content: {
            text: "",
            placeholder: "url",
            focus: true,
          },
          btn: {
            ok: {
              callback: async (eventDetails) => {
                const url = eventDetails.text;
                if (utils.isNull(url)) {
                  Qmsg.error("请填入完整的url");
                  return;
                }
                const response = await httpx.get(url);
                if (!response.status) {
                  return;
                }
                const data = utils.toJSON(response.data.responseText);
                if (!Array.isArray(data)) {
                  log.error("不是正确的规则文件", response, data);
                  Qmsg.error("不是正确的规则文件");
                  return;
                }
                this.setData(data);
                eventDetails.close();
                Qmsg.success(`成功导入 ${data.length}条规则`);
              },
            },
          },
          width: PanelUISize.info.width,
          height: "auto",
        });
      });
    },
  };
  const CookieInfoTransform = {
    beforeEdit(cookieInfo, isEdit) {
      const cookieManagerApiName = CookieManager.cookieManagerApiName;
      if (cookieManagerApiName === "cookieStore") {
        if (typeof cookieInfo.expires === "number") {
          cookieInfo.expirationDate = cookieInfo.expires;
        }
      } else if (cookieManagerApiName === "GM_cookie" || cookieManagerApiName === "GM.cookie") {
        if (isEdit) {
          if (typeof cookieInfo.expirationDate === "number") {
            cookieInfo.expirationDate = cookieInfo.expirationDate * 1e3;
          }
        }
      }
      return cookieInfo;
    },
    afterEdit(cookieInfo) {
      const cookieManagerApiName = CookieManager.cookieManagerApiName;
      if (cookieManagerApiName === "document.cookie") {
        cookieInfo.domain = "";
      } else if (cookieManagerApiName === "cookieStore") {
        if (typeof cookieInfo.expirationDate === "number") {
          cookieInfo.expires = cookieInfo.expirationDate;
        }
      } else if (cookieManagerApiName === "GM_cookie" || cookieManagerApiName === "GM.cookie") {
        if (typeof cookieInfo.expirationDate === "number") {
          cookieInfo.expirationDate = Math.floor(cookieInfo.expirationDate / 1e3);
        }
      }
      return cookieInfo;
    },
  };
  const edit_ui_input = (text, getValue, setValue, disabled) => {
    const config = {
      text,
      type: "input",
      props: {},
      attributes: {},
      description: "",
      getValue() {
        return getValue();
      },
      callback(event, value) {
        setValue(value);
      },
      placeholder: "",
      disabled: Boolean(disabled),
    };
    return config;
  };
  const edit_ui_textarea = (text, getValue, setValue, disabled) => {
    const config = {
      text,
      type: "textarea",
      props: {},
      attributes: {},
      description: "",
      placeholder: "",
      getValue() {
        return getValue();
      },
      disabled,
      callback: function (event, value) {
        setValue(value);
      },
    };
    return config;
  };
  const edit_ui_select = (text, data, getValue, setValue, disabled) => {
    const config = {
      text,
      type: "select",
      description: "",
      attributes: {},
      props: {},
      getValue() {
        return getValue();
      },
      callback(isSelectedInfo) {
        const value = isSelectedInfo.value;
        setValue(value);
      },
      data: typeof data === "function" ? data() : data,
      disabled: Boolean(disabled),
      width: "100%",
    };
    return config;
  };
  const CookieManagerEditView = {
    init() {},
    showView(__cookieInfo__, dialogCloseCallBack) {
      let isEdit = !!__cookieInfo__;
      let defaultCookieInfo = {
        name: "",
        value: "",
        domain: window.location.hostname,
        path: "/",
        secure: false,
        session: false,
        hostOnly: false,
        httpOnly: false,
        sameSite: "lax",

        expirationDate: Date.now() + 60 * 60 * 24 * 30 * 1e3,
      };
      let cookieInfo = utils.assign({}, defaultCookieInfo, true);
      utils.assign(cookieInfo, __cookieInfo__ ?? {}, true);
      cookieInfo = CookieInfoTransform.beforeEdit(cookieInfo, isEdit);
      const $dialog = __pops__.confirm({
        title: {
          text: isEdit ? "编辑Cookie" : "添加Cookie",
          position: "center",
        },
        content: {
          text: "",
          html: true,
        },
        drag: true,
        btn: {
          position: "center",
          ok: {
            text: isEdit ? "编辑" : "添加",
            async callback(eventDetails) {
              const valid = CookieManagerEditView.validCookieInfo(cookieInfo);
              if (!valid.status) {
                if (typeof valid.msg === "string") {
                  Qmsg.error(valid.msg);
                }
                return;
              }
              cookieInfo.value = encodeURIComponent(cookieInfo.value);
              cookieInfo = CookieInfoTransform.afterEdit(cookieInfo);
              if (isEdit) {
                const result = await CookieManager.updateCookie(cookieInfo);
                if (result) {
                  Qmsg.error(result.toString());
                } else {
                  Qmsg.success("修改成功");
                  eventDetails.close();
                }
              } else {
                const result = await CookieManager.addCookie(cookieInfo);
                if (result) {
                  Qmsg.error(result.toString());
                } else {
                  Qmsg.success("添加成功");
                  eventDetails.close();
                }
              }
              if (typeof dialogCloseCallBack === "function") {
                dialogCloseCallBack(cookieInfo);
              }
            },
          },
          cancel: {
            text: "取消",
          },
        },
        mask: {
          enable: true,
        },
        width: PanelUISize.settingMiddle.width,
        height: "auto",
        style: `
      ${__pops__.config.cssText.panelCSS}

      .pops-panel-input input:disabled{
          color: #b4b4b4;
      }
      .pops-confirm-content{
          padding: 10px;
      }
      .pops-confirm-content li{
          display: flex;
          flex-direction: column;
      }
      .pops-panel-item-left-text{
          margin-bottom: 5px;
      }
      .pops-panel-input.pops-input-disabled{
          border: 1px solid #dcdfe6;
      }
      .pops-panel-textarea textarea{
        resize: auto;
        border-radius: 4px;
      }
      .pops-panel-input{
        width: 100%;
      }
      #cookie-item-property-expires{
        border: 1px solid rgb(184, 184, 184, var(--pops-bd-opacity));
        border-radius: 4px;
        background: #ffffff;
        width: 100%;
        height: 32px;
        padding: 0px 8px;
      }
      #cookie-item-property-expires:hover{
        border: 1px solid #c0c4cc
      }
      #cookie-item-property-expires:focus,
      #cookie-item-property-expires:focus-within{
        outline: 0;
        border: 1px solid #409eff;
        border-radius: 4px;
        box-shadow: none;
      }
      `,
        darkStyle: `
      #cookie-item-property-expires,
      .export-example-code-text-container,
      .cookir-format-encode-pwd-container input{
        background: #232323;
      }
      #cookie-item-property-expires{
        color: #ffffff;
        border: 1px solid #414141;
      }
      .cookir-format-encode-pwd-container input{
        color: #ffffff;
      }
      `,
      });
      const $editContent = $dialog.$shadowRoot.querySelector(".pops-confirm-content");
      const panelHandlerComponents = __pops__.fn.PanelHandlerComponents();
      const $name = panelHandlerComponents.createSectionContainerItem_input(
        edit_ui_input(
          "name",
          () => cookieInfo.name,
          (value) => (cookieInfo.name = value),
          isEdit
        )
      ).$el;
      const $value = panelHandlerComponents.createSectionContainerItem_textarea(
        edit_ui_textarea(
          "value",
          () => cookieInfo.value,
          (value) => (cookieInfo.value = value)
        )
      ).$el;
      const $domain = panelHandlerComponents.createSectionContainerItem_input(
        edit_ui_input(
          "domain",
          () => cookieInfo.domain,
          (value) => (cookieInfo.domain = value)
        )
      ).$el;
      const $path = panelHandlerComponents.createSectionContainerItem_input(
        edit_ui_input(
          "path",
          () => cookieInfo.path,
          (value) => (cookieInfo.path = value)
        )
      ).$el;
      let $expires;
      if (cookieInfo.session) {
        $expires = panelHandlerComponents.createSectionContainerItem_input(
          edit_ui_input(
            "expires",
            () => "会话",
            () => {},
            true
          )
        ).$el;
      } else {
        const expiresTemplate = UIOwn(() => {
          const $li = domUtils.createElement("li", {
            innerHTML: `
							<div class="pops-panel-item-left-text">
								<p class="pops-panel-item-left-main-text">expires</p>
							</div>
							<div class="pops-panel-item-right-wrapper">
								<input type="datetime-local" id="cookie-item-property-expires">
							</div>
						`,
          });
          const $dateTime = $li.querySelector("#cookie-item-property-expires");
          $dateTime.valueAsNumber = cookieInfo.expirationDate;
          domUtils.on($dateTime, ["change", "input", "propertychange"], (event) => {
            domUtils.preventEvent(event);
            cookieInfo.expirationDate = $dateTime.valueAsNumber;
          });
          return $li;
        });
        $expires = panelHandlerComponents.createSectionContainerItem_own(expiresTemplate).$el;
      }
      const $httpOnly = panelHandlerComponents.createSectionContainerItem_select(
        edit_ui_select(
          "httpOnly",
          [
            {
              text: "true",
              value: true,
            },
            {
              text: "false",
              value: false,
            },
          ],
          () => cookieInfo.httpOnly,
          (value) => (cookieInfo.httpOnly = value)
        )
      ).$el;
      const $secure = panelHandlerComponents.createSectionContainerItem_select(
        edit_ui_select(
          "secure",
          [
            {
              text: "true",
              value: true,
            },
            {
              text: "false",
              value: false,
            },
          ],
          () => cookieInfo.secure,
          (value) => (cookieInfo.secure = value)
        )
      ).$el;
      let sameSiteData = [
        {
          text: "no_restriction",
          value: "no_restriction",
        },
        {
          text: "lax",
          value: "lax",
        },
        {
          text: "strict",
          value: "strict",
        },
        {
          text: "unspecified",
          value: "unspecified",
        },
      ];
      if (CookieManager.cookieManagerApiName === "cookieStore") {
        sameSiteData = [
          {
            text: "lax",
            value: "lax",
          },
          {
            text: "strict",
            value: "strict",
          },
          {
            text: "none",
            value: "none",
          },
        ];
      }
      const $sameSite = panelHandlerComponents.createSectionContainerItem_select(
        edit_ui_select(
          "sameSite",
          sameSiteData,
          () => cookieInfo.sameSite,
          (value) => (cookieInfo.sameSite = value)
        )
      ).$el;
      domUtils.append($editContent, [$name, $value]);
      if (CookieManager.cookieManagerApiName === "GM_cookie" || CookieManager.cookieManagerApiName === "GM.cookie") {
        domUtils.append($editContent, [$domain, $path, $expires, $httpOnly, $secure, $sameSite]);
      } else if (CookieManager.cookieManagerApiName === "cookieStore") {
        domUtils.append($editContent, [$domain, $path, $expires, $sameSite]);
      }
    },
    validCookieInfo(cookieInfo) {
      if (cookieInfo.name == null || cookieInfo.name == "") {
        return {
          status: false,
          msg: "name不能为空",
        };
      }
      if (cookieInfo.domain == null || cookieInfo.domain == "") {
        return {
          status: false,
          msg: "domain不能为空",
        };
      }
      if (cookieInfo.path == null || cookieInfo.path == "") {
        return {
          status: false,
          msg: "path不能为空",
        };
      }
      return {
        status: true,
      };
    },
  };
  const CookieManagerView = {
    $data: {
      cookieList: [],
    },
    init() {
      this.registerMenu();
    },
    async showView() {
      const $alert = __pops__.alert({
        title: {
          text: "Cookie编辑器",
          html: false,
          position: "center",
        },
        content: {
          text: `
        <div class="cookie-controls">
            <div class="cookie-search-wrapper">
                <div class="cookie-search-inner">
                    <input type="text" placeholder="搜索Cookie名称">
                </div>
                <div class="cookie-search-setting">
                    <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4368" width="28" height="28">
                        <path fill="#2c2c2c" d="M439.264 208a16 16 0 0 0-16 16v67.968a239.744 239.744 0 0 0-46.496 26.896l-58.912-34a16 16 0 0 0-21.856 5.856l-80 138.56a16 16 0 0 0 5.856 21.856l58.896 34a242.624 242.624 0 0 0 0 53.728l-58.88 34a16 16 0 0 0-6.72 20.176l0.848 1.68 80 138.56a16 16 0 0 0 21.856 5.856l58.912-34a239.744 239.744 0 0 0 46.496 26.88V800a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-67.968a239.744 239.744 0 0 0 46.512-26.896l58.912 34a16 16 0 0 0 21.856-5.856l80-138.56a16 16 0 0 0-4.288-20.832l-1.568-1.024-58.896-34a242.624 242.624 0 0 0 0-53.728l58.88-34a16 16 0 0 0 6.72-20.176l-0.848-1.68-80-138.56a16 16 0 0 0-21.856-5.856l-58.912 34a239.744 239.744 0 0 0-46.496-26.88V224a16 16 0 0 0-16-16h-160z m32 48h96v67.376l28.8 12.576c13.152 5.76 25.632 12.976 37.184 21.52l25.28 18.688 58.448-33.728 48 83.136-58.368 33.68 3.472 31.2a194.624 194.624 0 0 1 0 43.104l-3.472 31.2 58.368 33.68-48 83.136-58.432-33.728-25.296 18.688c-11.552 8.544-24.032 15.76-37.184 21.52l-28.8 12.576V768h-96v-67.376l-28.784-12.576c-13.152-5.76-25.632-12.976-37.184-21.52l-25.28-18.688-58.448 33.728-48-83.136 58.368-33.68-3.472-31.2a194.624 194.624 0 0 1 0-43.104l3.472-31.2-58.368-33.68 48-83.136 58.432 33.728 25.296-18.688a191.744 191.744 0 0 1 37.184-21.52l28.8-12.576V256z m47.28 144a112 112 0 1 0 0 224 112 112 0 0 0 0-224z m0 48a64 64 0 1 1 0 128 64 64 0 0 1 0-128z"></path>
                    </svg>
                </div>
            </div>
            <div class="cookie-control-wrapper">
                <button class="cookie-control-refresh" type="button" data-type="default">刷新</button>
                <button class="cookie-control-add" type="button" data-type="default">添加</button>
                <button class="cookie-control-export" type="button" data-type="default">导出</button>
                <button class="cookie-control-import" type="button" data-type="default">导入</button>
                <button class="cookie-control-clear-all" type="button" data-type="default">删除</button>
                <button class="cookie-control-rule-manager" type="button" data-type="default">规则管理</button>
                <div class="cookie-setting"> 
                    <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4368" width="28" height="28">
                        <path fill="#2c2c2c" d="M439.264 208a16 16 0 0 0-16 16v67.968a239.744 239.744 0 0 0-46.496 26.896l-58.912-34a16 16 0 0 0-21.856 5.856l-80 138.56a16 16 0 0 0 5.856 21.856l58.896 34a242.624 242.624 0 0 0 0 53.728l-58.88 34a16 16 0 0 0-6.72 20.176l0.848 1.68 80 138.56a16 16 0 0 0 21.856 5.856l58.912-34a239.744 239.744 0 0 0 46.496 26.88V800a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-67.968a239.744 239.744 0 0 0 46.512-26.896l58.912 34a16 16 0 0 0 21.856-5.856l80-138.56a16 16 0 0 0-4.288-20.832l-1.568-1.024-58.896-34a242.624 242.624 0 0 0 0-53.728l58.88-34a16 16 0 0 0 6.72-20.176l-0.848-1.68-80-138.56a16 16 0 0 0-21.856-5.856l-58.912 34a239.744 239.744 0 0 0-46.496-26.88V224a16 16 0 0 0-16-16h-160z m32 48h96v67.376l28.8 12.576c13.152 5.76 25.632 12.976 37.184 21.52l25.28 18.688 58.448-33.728 48 83.136-58.368 33.68 3.472 31.2a194.624 194.624 0 0 1 0 43.104l-3.472 31.2 58.368 33.68-48 83.136-58.432-33.728-25.296 18.688c-11.552 8.544-24.032 15.76-37.184 21.52l-28.8 12.576V768h-96v-67.376l-28.784-12.576c-13.152-5.76-25.632-12.976-37.184-21.52l-25.28-18.688-58.448 33.728-48-83.136 58.368-33.68-3.472-31.2a194.624 194.624 0 0 1 0-43.104l3.472-31.2-58.368-33.68 48-83.136 58.432 33.728 25.296-18.688a191.744 191.744 0 0 1 37.184-21.52l28.8-12.576V256z m47.28 144a112 112 0 1 0 0 224 112 112 0 0 0 0-224z m0 48a64 64 0 1 1 0 128 64 64 0 0 1 0-128z"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div class="cookie-wrapper">
            <div class="cookie-list-wrapper">
            </div>
        </div>`,
          html: true,
        },
        btn: {
          ok: {
            enable: false,
          },
        },
        mask: {
          enable: true,
        },
        drag: true,
        width: PanelUISize.setting.width,
        height: PanelUISize.setting.height,
        style: `
      ${__pops__.config.cssText.panelCSS}

      .pops .pops-content{
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }
      .cookie-controls{
        display: flex;
        flex-direction: column;
        padding: 10px;
        gap: 10px;
      }
      .cookie-wrapper{
          display: flex;
          flex-direction: column;
          padding: 10px;
          padding-top: 0px;
          gap: 10px;
          overflow: auto;
          height: 100%;
      }
      .cookie-control-wrapper{
          --button-margin-left: 0px;
          display: flex;
          flex-wrap: nowrap;
          padding: 0px 10px;
          gap: 5px;
          overflow-x: auto;
      }
      .cookie-search-wrapper{
          display: flex;
          align-items: center;
      }
      .cookie-search-inner{
          width: 100%;
          padding: 0px 10px;
      }
      .cookie-search-inner input{
          height: 30px;
          padding: 5px 8px;
          width: 100%;
          border-radius: 6px;
      }
      .cookie-search-inner input::placeholder{
        display: flex;
        align-items: baseline;
      }
      .cookie-search-inner input:focus-visible{
          outline: none;
      }
      .cookie-setting,
      .cookie-search-setting{
          display: flex;
          align-items: center;
      }
      .cookie-setting svg,
      .cookie-search-setting svg{
          cursor: pointer;
      }
      .cookie-list-wrapper{
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
      }
      .cookie-item{
          display: flex;
          flex-direction: column;
          padding: 10px 10px;
          margin: 0px 10px;
          background: #f1efef;
          border-radius: 10px;
          gap: 5px;
          box-sizing: border-box;
          width: 100%;
      }
      .cookie-item-group{
          display: flex;
          align-items: stretch;
      }
      .cookie-item-group-left{
          width: 100px;
          min-width: 100px;
          max-width: 100px;
          text-transform: capitalize
      }
      .cookie-item-group-control{
          align-items: center;
      }
      .cookie-item-group-control .cookie-item-group-right{
          display: flex;
          align-items: center;
          gap: 10px;
      }
      .cookie-item-group-control .cookie-item-group-control-copy,
      .cookie-item-group-control .cookie-item-group-control-edit,
      .cookie-item-group-control .cookie-item-group-control-delete{
          display: flex;
          align-items: center;
      }
      .cookie-item-group-control .cookie-item-group-control-delete svg{
          width: 16px;
          height: 16px;
      }
      .cookie-item-group-control svg{
          cursor: pointer;
      }
      
      `,
        darkStyle: `
      .cookie-item,
      #cookie-item-property-expires{
        background: #232323;
      }
      svg path{
        fill: currentColor;
      }
      .cookie-search-inner input{
        background: #000000;
        color: #ffffff;
        border-color: #ffffff;
      }
      .cookie-search-inner input::placeholder{
      }
      .cookie-search-inner input:focus-visible{
      }
      `,
      });
      const $search = $alert.$shadowRoot.querySelector(".cookie-search-inner input");
      const $searchSetting = $alert.$shadowRoot.querySelector(".cookie-search-setting");
      const $refresh = $alert.$shadowRoot.querySelector(".cookie-control-refresh");
      const $add = $alert.$shadowRoot.querySelector(".cookie-control-add");
      const $export = $alert.$shadowRoot.querySelector(".cookie-control-export");
      const $import = $alert.$shadowRoot.querySelector(".cookie-control-import");
      const $clearAll = $alert.$shadowRoot.querySelector(".cookie-control-clear-all");
      const $ruleManager = $alert.$shadowRoot.querySelector(".cookie-control-rule-manager");
      const $setting = $alert.$shadowRoot.querySelector(".cookie-setting");
      const $cookieListWrapper = $alert.$shadowRoot.querySelector(".cookie-list-wrapper");
      const createCookieItemElement = (cookieInfo) => {
        const $cookieItem = domUtils.createElement("div", {
          className: "cookie-item",
          innerHTML: `
                `,
          "data-cookie-info": cookieInfo,
        });
        const cookieProperty = [
          {
            leftText: "name",
            rightText: cookieInfo.name,
          },
          {
            leftText: "value",
            rightText: Panel.getValue("decode-cookie-value")
              ? decodeURIComponent(cookieInfo.value)
              : encodeURIComponent(cookieInfo.value),
          },
        ];
        if (CookieManager.cookieManagerApiName === "GM_cookie" || CookieManager.cookieManagerApiName === "GM.cookie") {
          cookieInfo = cookieInfo;
          cookieProperty.push(
            {
              leftText: "domain",
              rightText: cookieInfo.domain,
            },
            {
              leftText: "path",
              rightText: cookieInfo.path,
            },
            {
              leftText: "session",
              rightText: JSON.stringify(cookieInfo.session),
            },
            {
              leftText: "expires",
              rightText: cookieInfo.session
                ? "会话"
                : cookieInfo.expirationDate
                  ? new Date(cookieInfo.expirationDate * 1e3).toISOString()
                  : "未知",
            },
            {
              leftText: "httpOnly",
              rightText: JSON.stringify(cookieInfo.httpOnly),
            },
            {
              leftText: "hostOnly",
              rightText: JSON.stringify(cookieInfo.hostOnly),
            },
            {
              leftText: "secure",
              rightText: JSON.stringify(cookieInfo.secure),
            },
            {
              leftText: "sameSite",
              rightText: cookieInfo.sameSite,
            }
          );
        } else if (CookieManager.cookieManagerApiName === "cookieStore") {
          cookieInfo = cookieInfo;
          cookieProperty.push(
            {
              leftText: "domain",
              rightText: cookieInfo.domain,
            },
            {
              leftText: "path",
              rightText: cookieInfo.path,
            },
            {
              leftText: "expires",
              rightText: cookieInfo.expires ? new Date(cookieInfo.expires).toISOString() : "会话",
            },
            {
              leftText: "secure",
              rightText: JSON.stringify(cookieInfo.secure),
            },
            {
              leftText: "sameSite",
              rightText: cookieInfo.sameSite,
            }
          );
        }
        cookieProperty.forEach((it) => {
          const $cookieItemGroup = domUtils.createElement("div", {
            className: "cookie-item-group",
            innerHTML: `
                        <div class="cookie-item-group-left">
                            <p>${it.leftText}</p>
                        </div>
                        <div class="cookie-item-group-right">
                            <p>${it.rightText}</p>
                        </div>
                    `,
          });
          Reflect.set($cookieItemGroup, "data-key", it.leftText);
          Reflect.set($cookieItemGroup, "data-value", it.rightText);
          domUtils.append($cookieItem, $cookieItemGroup);
        });
        const $cookieItemGroupControl = domUtils.createElement("div", {
          className: "cookie-item-group cookie-item-group-control",
          innerHTML: `
        <div class="cookie-item-group-left">操作</div>
        <div class="cookie-item-group-right">
          <div class="cookie-item-group-control-copy">
              <svg t="1742795616339" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="M880 247.008l-162.016-166.016Q700.992 64 677.984 64h-316.992q-26.016 0-46.016 18.016-16.992 15.008-23.008 36.992H231.968q-43.008 0-73.504 31.008t-30.496 76v627.008q0 44 30.496 75.488T231.968 960h508q43.008 0 73.504-31.488t30.496-75.488v-63.008q23.008-6.016 37.504-25.504t14.496-44.512V287.008q0-24-16-40z m-168-160.992l-3.008-3.008z m98.016 177.984L744 196z m-126.016-116.992l108 110.016h-108V147.008zM676.992 128zM204.992 948q4 0.992 4.992 2.016-2.016-0.992-4.992-2.016z m27.008 4q-6.016 0-12-0.992 4.992 0.992 12 0.992z m543.008-99.008q0 15.008-10.016 25.504t-24.992 10.496H232q-14.016 0-24.512-10.496t-10.496-25.504V225.984q0-15.008 10.496-25.504t24.512-10.496h58.016v531.008q0 30.016 20.992 51.008t50.016 20.992H775.04v60z m52-132.992q0 2.016-2.016 2.016h-464q-2.016 0-2.016-2.016V136.992q0-2.016 2.016-2.016h251.008v156.992q0 15.008 10.016 24.992t24 10.016h180.992v392.992z m9.984 64q4-0.992 8.992-2.016-4.992 0.992-8.992 2.016z m-244-168.992h-107.008q-15.008 0-24.992 10.496t-10.016 24.992 10.016 24.992 24.992 10.496h107.008q14.016 0 24.512-10.496t10.496-24.992-10.496-24.992-24.512-10.496z m107.008-111.008h-214.016q-14.016 0-24.512 10.496t-10.496 24.992 10.496 24.992 24.512 10.496h214.016q14.016 0 24-10.496t10.016-24.992-10.016-24.992-24-10.496z m-240.992 36q0 4 0.992 8-0.992-4-0.992-8zM700 512z m12 52l4-2.016z m-260.992-135.488q0 14.496 10.496 24.992t24.512 10.496h214.016q14.016 0 24-10.496t10.016-24.992-10.016-24.992-24-10.496h-214.016q-14.016 0-24.512 10.496t-10.496 24.992z m8 1.504z"></path>
              </svg>
          </div>
          <div class="cookie-item-group-control-edit">
              <svg t="1742795710451" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="M800 960 224 960c-52.928 0-96-43.072-96-96L128 224c0-52.928 43.072-96 96-96l448 0c17.696 0 32 14.336 32 32s-14.304 32-32 32L224 192C206.368 192 192 206.368 192 224l0 640c0 17.664 14.368 32 32 32l576 0c17.664 0 32-14.336 32-32L832 352c0-17.664 14.304-32 32-32s32 14.336 32 32l0 512C896 916.928 852.928 960 800 960zM612 448c-8.192 0-16.384-3.136-22.624-9.376-12.512-12.512-12.512-32.736 0-45.248l318.016-318.016c12.512-12.512 32.736-12.512 45.248 0s12.512 32.736 0 45.248l-318.016 318.016C628.384 444.896 620.192 448 612 448zM480 448 288 448c-17.664 0-32-14.336-32-32s14.336-32 32-32l192 0c17.664 0 32 14.336 32 32S497.664 448 480 448zM672 640 288 640c-17.664 0-32-14.304-32-32s14.336-32 32-32l384 0c17.696 0 32 14.304 32 32S689.696 640 672 640z"></path>
              </svg>
          </div>
          <div class="cookie-item-group-control-delete">
              ${__pops__.config.iconSVG.delete}
          </div>
        </div>`,
        });
        const $cookieItemCopy = $cookieItemGroupControl.querySelector(".cookie-item-group-control-copy");
        const $cookieItemEdit = $cookieItemGroupControl.querySelector(".cookie-item-group-control-edit");
        const $cookieItemDelete = $cookieItemGroupControl.querySelector(".cookie-item-group-control-delete");
        domUtils.on($cookieItemCopy, "click", (event) => {
          domUtils.preventEvent(event);
          const cookieText = cookieInfo.value;
          utils.copy(cookieText).then((status) => {
            if (status) {
              Qmsg.success("复制成功");
            } else {
              Qmsg.error("复制失败");
            }
          });
        });
        domUtils.on($cookieItemEdit, "click", (event) => {
          domUtils.preventEvent(event);
          CookieManagerEditView.showView(cookieInfo, (__cookieInfo__) => {
            const $newCookieItem = createCookieItemElement(__cookieInfo__);
            domUtils.after($cookieItem, $newCookieItem);
            $cookieItem.parentElement?.removeChild($cookieItem);
          });
        });
        domUtils.on($cookieItemDelete, "click", (event) => {
          domUtils.preventEvent(event);
          const result = confirm("确定删除该Cookie？");
          if (!result) {
            return;
          }
          CookieManager.deleteCookie(cookieInfo).then((status) => {
            if (!status) {
              Qmsg.success("删除成功");
              $cookieItem.parentElement?.removeChild($cookieItem);
            } else {
              log.error(status);
              Qmsg.error("删除失败");
            }
          });
        });
        domUtils.append($cookieItem, [$cookieItemGroupControl]);
        return $cookieItem;
      };
      const updateCookieListGroup = async (filterCallBack) => {
        const cookieList = await CookieManager.queryAllCookie();
        domUtils.empty($cookieListWrapper);
        const $fragment = document.createDocumentFragment();
        const excludeSessionCookie = Panel.getValue("exclude-session-cookie");
        cookieList.forEach((cookieInfo) => {
          if (excludeSessionCookie) {
            if (cookieInfo.session) {
              return;
            }
            if (CookieManager.cookieManagerApiName === "cookieStore" && cookieInfo.expires == null) {
              return;
            }
          }
          if (typeof filterCallBack === "function") {
            const filterResult = filterCallBack(cookieInfo);
            if (!filterResult) {
              return;
            }
          }
          const $cookieItem = createCookieItemElement(cookieInfo);
          $fragment.appendChild($cookieItem);
        });
        this.$data.cookieList = cookieList;
        $cookieListWrapper.appendChild($fragment);
      };
      domUtils.on(
        $search,
        ["input", "propertychange"],
        utils.debounce(async (event) => {
          const searchText = domUtils.val($search);
          const isNotFilter = searchText.trim() === "";
          const enableRegExp = Panel.getValue("search-config-use-regexp");
          await updateCookieListGroup((cookieItem) => {
            if (isNotFilter) {
              return true;
            }
            return enableRegExp
              ? Boolean(cookieItem.name.match(new RegExp(searchText)))
              : cookieItem.name.includes(searchText);
          });
          const from = event.from;
          if (from === "refreshButton") {
            Qmsg.success("刷新成功");
          }
        })
      );
      domUtils.on(
        $alert.$shadowRoot,
        "click",
        ".cookie-item-group:has(.cookie-item-group-right > p)",
        (evt, $click) => {
          const selectRange = $alert.$shadowRoot?.getSelection?.();
          if (selectRange?.type === "Range") {
            return;
          }
          const key = Reflect.get($click, "data-key");
          const value = Reflect.get($click, "data-value");
          if (!key) {
            log.error("该项上未获取到data-key值");
            return;
          }
          if (!value) {
            log.error("该项上未获取到data-value值");
            return;
          }
          utils.copy(value).then((status) => {
            if (status) {
              Qmsg.success(`复制 ${key} 成功`);
            } else {
              Qmsg.error(`复制 ${key} 失败`);
            }
          });
        }
      );
      domUtils.onKeyboard($search, "keyup", (keyName, keyValue, otherCodeList) => {
        if (keyName === "Enter" && otherCodeList.length === 0) {
          emitUpdateCookieListGroupWithSearchFilter();
        }
      });
      domUtils.on($searchSetting, "click", (event) => {
        domUtils.preventEvent(event);
        const $settingAlert = __pops__.alert({
          title: {
            text: "搜索配置",
            position: "center",
          },
          content: {
            text: "",
            html: true,
          },
          btn: {
            ok: {
              enable: false,
            },
          },
          drag: true,
          mask: {
            clickEvent: {
              toClose: true,
            },
          },
          width: PanelUISize.info.width,
          height: PanelUISize.info.height,
          style: `
        ${__pops__.config.cssText.panelCSS}

        .pops-alert-content li{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
        }
        .pops-panel-item-left-desc-text{
            line-height: normal;
            margin-top: 6px;
            font-size: 0.8em;
            color: rgb(108, 108, 108);
        }
        `,
        });
        const $content = $settingAlert.$shadowRoot.querySelector(".pops-alert-content");
        const panelHandlerComponents = __pops__.fn.PanelHandlerComponents();
        const $useRegExp = panelHandlerComponents.createSectionContainerItem_switch(
          UISwitch("启用正则表达式", "search-config-use-regexp", false, void 0, "使用正则表达式搜索Cookie名称", () => {
            emitUpdateCookieListGroupWithSearchFilter();
          })
        ).$el;
        domUtils.append($content, $useRegExp);
      });
      domUtils.on($refresh, "click", (event) => {
        domUtils.preventEvent(event);
        emitUpdateCookieListGroupWithSearchFilter("refreshButton");
      });
      domUtils.on($add, "click", (event) => {
        domUtils.preventEvent(event);
        CookieManagerEditView.showView(void 0, (__cookieInfo__) => {
          emitUpdateCookieListGroupWithSearchFilter();
        });
      });
      domUtils.on($export, "click", async (event) => {
        domUtils.preventEvent(event);
        CookieBackUpManager.showExportDialog();
      });
      domUtils.on($import, "click", async (event) => {
        domUtils.preventEvent(event);
        CookieBackUpManager.showImportDialog();
      });
      domUtils.on($clearAll, "click", async (event) => {
        domUtils.preventEvent(event);
        const result = window.confirm("确定清除全部Cookie？");
        if (!result) {
          return;
        }
        const deleteInfo = await CookieManager.deleteAllCookie();
        if (deleteInfo.error) {
          Qmsg.warning(`清除成功：${deleteInfo.success} 失败：${deleteInfo.error}`);
        } else {
          Qmsg.success("清除成功");
        }
        emitUpdateCookieListGroupWithSearchFilter();
      });
      domUtils.on($ruleManager, "click", (event) => {
        domUtils.preventEvent(event);
        CookieRule.showView();
      });
      domUtils.on($setting, "click", (event) => {
        domUtils.preventEvent(event);
        const $settingAlert = __pops__.alert({
          title: {
            text: "设置",
            position: "center",
          },
          content: {
            text: "",
            html: true,
          },
          btn: {
            ok: {
              enable: false,
            },
          },
          drag: true,
          mask: {
            clickEvent: {
              toClose: true,
            },
          },
          width: PanelUISize.settingMiddle.width,
          height: PanelUISize.settingMiddle.height,
          style: `
        ${__pops__.config.cssText.panelCSS}

        .pops-alert-content li{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
        }
        .pops-panel-item-left-desc-text{
            line-height: normal;
            margin-top: 6px;
            font-size: 0.8em;
            color: rgb(108, 108, 108);
        }`,
        });
        const $content = $settingAlert.$shadowRoot.querySelector(".pops-alert-content");
        const panelHandlerComponents = __pops__.fn.PanelHandlerComponents();
        const $useGM_cookie = panelHandlerComponents.createSectionContainerItem_select(
          UISelect(
            "CookieManager Api",
            "cookie-manager-api",
            "document.cookie",
            CookieManagerApiNameList.map((it) => {
              return {
                text: it,
                value: it,
              };
            }),
            void 0,
            "操作Cookie的Api函数",
            () => {
              emitUpdateCookieListGroupWithSearchFilter();
            }
          )
        ).$el;
        const $decodeValue = panelHandlerComponents.createSectionContainerItem_switch(
          UISwitch(
            "解码Cookie值",
            "decode-cookie-value",
            false,
            () => {
              emitUpdateCookieListGroupWithSearchFilter();
            },
            "对Cookie值进行解码"
          )
        ).$el;
        const $excludeSessionCookie = panelHandlerComponents.createSectionContainerItem_switch(
          UISwitch(
            "排除Session Cookie",
            "exclude-session-cookie",
            false,
            () => {
              emitUpdateCookieListGroupWithSearchFilter();
            },
            "过滤掉浏览器会话Cookie"
          )
        ).$el;
        domUtils.append($content, [$useGM_cookie, $decodeValue, $excludeSessionCookie]);
      });
      const emitUpdateCookieListGroupWithSearchFilter = (from) => {
        domUtils.emit($search, "input", {
          from,
        });
      };
      emitUpdateCookieListGroupWithSearchFilter();
    },
    registerMenu() {
      MenuRegister.add({
        key: "cookie_manager_view",
        text: "⚙ Cookie管理",
        autoReload: false,
        isStoreValue: false,
        showText(text) {
          return text;
        },
        callback: () => {
          this.showView();
        },
      });
    },
  };
  const CookieRuleController = {
    init() {
      this.execController();
      domUtils.onReady(() => {
        this.execController();
      });
    },
    async execController() {
      for (let index = 0; index < CookieRule.$data.matchedRuleList.length; index++) {
        const cookieRuleItem = CookieRule.$data.matchedRuleList[index];
        const operationMode = cookieRuleItem.data.operationMode;
        log.success(`执行规则：${cookieRuleItem.name}`);
        let apiName = cookieRuleItem.data.execApiName;
        if (apiName === "use-global") {
          apiName = void 0;
        }
        const cookieManager2 = new CookieManagerService(apiName);
        const cookieListResult = await cookieManager2.queryAllCookie();
        for (let cookieInfoIndex = 0; cookieInfoIndex < cookieListResult.length; cookieInfoIndex++) {
          let cookieInfo = cookieListResult[cookieInfoIndex];
          const cookieName = cookieInfo.name;
          const ruleCookieName = cookieRuleItem.data.cookieName;
          let flag = false;
          if (cookieRuleItem.data.enableRegExpToMatchCookieName) {
            let regExpCookieName = new RegExp(ruleCookieName, "i");
            if (regExpCookieName.test(cookieName)) {
              flag = true;
            }
          } else {
            if (cookieName.includes(ruleCookieName)) {
              flag = true;
            }
          }
          if (flag) {
            if (operationMode === "delete") {
              cookieManager2.deleteCookie(cookieInfo);
            } else if (operationMode.startsWith("extended")) {
              let currentTime = Date.now();
              let oneMonth = 30 * 24 * 60 * 60 * 1e3;
              let threeMonth = oneMonth * 3;
              let halfAYear = oneMonth * 6;
              let oneYear = oneMonth * 12;
              let checkTime = oneMonth;
              if (operationMode === "extended-90") {
                checkTime = threeMonth;
              } else if (operationMode === "extended-180") {
                checkTime = halfAYear;
              } else if (operationMode === "extended-360") {
                checkTime = oneYear;
              }
              let updateFlag = false;
              if (cookieManager2.cookieManagerApiName === "document.cookie") {
                cookieInfo.expirationDate = currentTime + checkTime;
                updateFlag = true;
              } else if (cookieManager2.cookieManagerApiName === "cookieStore") {
                let expireTime = cookieInfo.expires;
                if (typeof expireTime === "number" && expireTime - currentTime < checkTime) {
                  cookieInfo.expires = expireTime + checkTime;
                  updateFlag = true;
                }
              } else if (
                cookieManager2.cookieManagerApiName === "GM_cookie" ||
                cookieManager2.cookieManagerApiName === "GM.cookie"
              ) {
                let expireTime = cookieInfo.expirationDate;
                if (typeof expireTime === "number" && expireTime * 1e3 - currentTime < checkTime) {
                  cookieInfo.expirationDate = expireTime + checkTime / 1e3;
                  updateFlag = true;
                }
              } else {
                log.error("未知的cookieManagerApiName", cookieManager2.cookieManagerApiName);
              }
              if (updateFlag) {
                await cookieManager2.updateCookie(cookieInfo);
              }
            }
          }
        }
      }
    },
  };
  const Component_Rule = {
    id: "view-rule",
    title: "规则",
    headerTitle: "Cookie操作规则",
    views: [
      {
        type: "container",
        text: "",
        views: [
          UIButton("自定义规则", "操作Cookie的规则", "管理", void 0, false, false, "default", () => {
            CookieRule.showView();
          }),
        ],
      },
      {
        type: "container",
        text: "",
        views: [
          UIButton("数据导入", "导入自定义规则数据", "导入", void 0, false, false, "primary", () => {
            CookieRule.importRule();
          }),
          UIButton("数据导出", "导出自定义规则数据", "导出", void 0, false, false, "primary", () => {
            CookieRule.exportRule("CookieManagerRule.json");
          }),
        ],
      },
    ],
  };
  const Component_Common = {
    id: "view-general",
    title: "通用",
    views: [
      {
        text: "Toast配置",
        type: "container",
        views: [
          UISelect(
            "Toast位置",
            PanelSettingConfig.qmsg_config_position.key,
            PanelSettingConfig.qmsg_config_position.defaultValue,
            [
              {
                value: "topleft",
                text: "左上角",
              },
              {
                value: "top",
                text: "顶部",
              },
              {
                value: "topright",
                text: "右上角",
              },
              {
                value: "left",
                text: "左边",
              },
              {
                value: "center",
                text: "中间",
              },
              {
                value: "right",
                text: "右边",
              },
              {
                value: "bottomleft",
                text: "左下角",
              },
              {
                value: "bottom",
                text: "底部",
              },
              {
                value: "bottomright",
                text: "右下角",
              },
            ],
            (isSelectedInfo) => {
              log.info("设置当前Qmsg弹出位置" + isSelectedInfo.text);
            },
            "Toast显示在页面九宫格的位置"
          ),
          UISelect(
            "最多显示的数量",
            PanelSettingConfig.qmsg_config_maxnums.key,
            PanelSettingConfig.qmsg_config_maxnums.defaultValue,
            [
              {
                value: 1,
                text: "1",
              },
              {
                value: 2,
                text: "2",
              },
              {
                value: 3,
                text: "3",
              },
              {
                value: 4,
                text: "4",
              },
              {
                value: 5,
                text: "5",
              },
            ],
            void 0,
            "限制Toast显示的数量"
          ),
          UISwitch(
            "逆序弹出",
            PanelSettingConfig.qmsg_config_showreverse.key,
            PanelSettingConfig.qmsg_config_showreverse.defaultValue,
            void 0,
            "修改Toast弹出的顺序"
          ),
        ],
      },
    ],
  };
  PanelContent.addContentConfig([Component_Common, Component_Rule]);
  Panel.init();
  CookieManagerView.init();
  CookieRule.init();
  CookieRuleController.init();
})(Qmsg, DOMUtils, pops, Utils, CryptoJS);
