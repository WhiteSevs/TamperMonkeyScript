// ==UserScript==
// @name         CookieManager
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.8.24
// @author       WhiteSevs
// @description  简单而强大的Cookie编辑器，允许您快速创建、编辑和删除Cookie
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA/NJREFUeF7tWm1u4jAQjVHusfR3jMQNlp5ky0l2e5K2Jym9ARLO79JzEMgyKF5FqeN5YzuwQPoHqRl/zPObN5NxVHbnf+rO/c9GAEYG3DkCYwjcOQFGETxbCGitF1mWLeq6/qGUmtZ1PW1+t0qpN2PMn0uwcTAA5vP5tKqqp8bhJ8C5R2PMCrBLajIIAFprOs3fkp0eGfFaluVSMiaFbVIAQhy3Tlw1AA3dXyjGQ0/lagFoxO091PGrZkAq5wmEq2NASuevDgCB889HXVjleb6tqmraaASbHeq6ptpgm+f5cr1eb2PDyzdenAUawfsENuXM60VRvBydQ+oCWmJljHkE1go2EQOgtSbB86q9L54FAJIubMuyfAj2DhgoAmA2m1FlR+nO+6eUWm42m9c+IwREO9YYI9ojt7fuc9HkRVF8Uv0OLPLsq+0F82T/DQDCKs8bu1rrGgDxZELh5LKdTCYfPpah88MMkGy6WdwpghL6A054mQaMx/oBaOy3F2xS2ZtNg/SsqqqocrnrUAqRhBggTF0I8MlsYjUCAiCA/skc5CYaHACO/rZq42oDzpHQ55RyXWNRgWQZ0Ef/xvFlu4sjzBShPkPjXPtzDQwGIM/zB1edzjEG2n06I7aUZgFwpS3u1dVX6LSyg83zv8DiKgSWeABczkSUut82ZJun0h4iggaSJhEGuKq20FLXWRylaKm5ABkMAN/Efb0CbjNDCSiXJlkGeOL5GwuYk/TG4xDiyYFOrGEB8NXuVtCoe0M3Pb445jbDVZs0/rRhpegX7T4nEUFJB8erTX3iyTVJulkHFU4uW6EMEN/y9KFgGdPuFQAC2HuK3JtlKgCIbtF9f8ebom12euncV3DRfFxzlkvXEAM4eiL5OMbGp+Lc3rgMAAHQIM02QmOcZMb23hr7AEDoLwEgeRgIAOstuny1A0J/GACOagJnxKYu4UTiH6E/DAAZpipUQvsHRGlqhDb1Bm3Jd8ME9wrZQsgeGbFgt9u9h765nbN/gJ6+iAGxLDhX/wCNfXuwMANoAFC0OGOcU2TJRQkjImzp2x0vAsCCIA0F7lS4ig5RTu5do28OMQAtJiA3xHbd0P4B4ru1CfrKLAgAqR6E9A8knmdZFuS8WAS7mxI2MaT9AxSDYOejAZBqgqR/wHmPtr25eYJDoD1xbI3AbbL7PFTwXOskAaAljPQBxWBt7r6yWApg2z4ZAO2Kkb4RTtnmHsLxoEJIgjSFxX6/XxwOh5+Cj6L+LdF6Z/gY8kvy5AxwgdQG46S8nc/lm/9RY5U+j/uixid6uSk5lEE1IHYjlxp/FgZcyjlk3REABKVbthkZcMuni/g2MgBB6ZZt/gJwetZfo7objAAAAABJRU5ErkJggg==
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.7.5/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.6.5/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.3.6/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.4.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@886625af68455365e426018ecb55419dd4ea6f30/lib/CryptoJS/index.js
// @connect      *
// @grant        GM.cookie
// @grant        GM_cookie
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

(function (Qmsg, DOMUtils, Utils, pops, CryptoJS) {
  'use strict';

  var _GM = /* @__PURE__ */ (() => typeof GM != "undefined" ? GM : void 0)();
  var _GM_cookie = /* @__PURE__ */ (() => typeof GM_cookie != "undefined" ? GM_cookie : void 0)();
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
    },
    /**
     * 中等的设置界面
     */
    settingMiddle: {
      get width() {
        return window.innerWidth < 350 ? "88vw" : "350px";
      },
      get height() {
        return window.innerHeight < 450 ? "88vh" : "450px";
      }
    },
    /**
     * 信息界面，一般用于提示信息之类
     */
    info: {
      get width() {
        return window.innerWidth < 350 ? "88vw" : "350px";
      },
      get height() {
        return window.innerHeight < 250 ? "88vh" : "250px";
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
     * 更新菜单项（如果该菜单项已存在，则更新，不存在则不做处理）
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
      } else if (url.startsWith("//")) {
        if (url.startsWith("///")) ;
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
      let $elList = [document.documentElement, document.body].concat(...args || []);
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
    },
    /**
     * 在规定时间内循环，如果超时或返回false则取消循环
     * @param fn 循环的函数
     * @param intervalTime 循环间隔时间
     * @param [timeout=5000] 循环超时时间
     */
    interval(fn, intervalTime, timeout = 5e3) {
      let timeId;
      let maxTimeout = timeout - intervalTime;
      let intervalTimeCount = intervalTime;
      let loop = async (isTimeout) => {
        let result = await fn(isTimeout);
        if (typeof result === "boolean" && !result || isTimeout) {
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
    /**
     * 找到对应的上层元素
     */
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
    }
  };
  const Panel = {
    /** 数据 */
    $data: {
      /**
       * @private
       */
      __contentConfigInitDefaultValue: null,
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
      /**
       * 面板
       */
      $panel: null,
      /**
       * 面板配置
       */
      panelContent: [],
      /**
       * 菜单项初始化的默认值
       */
      get contentConfigInitDefaultValue() {
        if (this.__contentConfigInitDefaultValue == null) {
          this.__contentConfigInitDefaultValue = new utils.Dictionary();
        }
        return this.__contentConfigInitDefaultValue;
      },
      /**
       * 菜单项初始化时禁用的键
       */
      contentConfigInitDisabledKeys: [],
      /**
       * 成功只执行了一次的菜单项
       *
       * + .exec
       * + .execMenu
       * + .execMenuOnce
       */
      get onceExecMenuData() {
        if (this.__onceExecMenuData == null) {
          this.__onceExecMenuData = new utils.Dictionary();
        }
        return this.__onceExecMenuData;
      },
      /**
       * 成功只执行了一次的项
       *
       * + .onceExec
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
        let menuDefaultConfig = /* @__PURE__ */ new Map();
        let key = config.attributes[ATTRIBUTE_KEY];
        if (key != null) {
          const defaultValue = config.attributes[ATTRIBUTE_DEFAULT_VALUE];
          menuDefaultConfig.set(key, defaultValue);
        }
        let moreMenuDefaultConfig = config.attributes[ATTRIBUTE_INIT_MORE_VALUE];
        if (typeof moreMenuDefaultConfig === "object" && moreMenuDefaultConfig) {
          Object.keys(moreMenuDefaultConfig).forEach((key2) => {
            menuDefaultConfig.set(key2, moreMenuDefaultConfig[key2]);
          });
        }
        if (!menuDefaultConfig.size) {
          log.warn(["请先配置键", config]);
          return;
        }
        let __attr_init__ = config.attributes[ATTRIBUTE_INIT];
        if (typeof __attr_init__ === "function") {
          let __attr_result__ = __attr_init__();
          if (typeof __attr_result__ === "boolean" && !__attr_result__) {
            return;
          }
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
          let child_forms = configItem.forms;
          if (child_forms && Array.isArray(child_forms)) {
            loopInitDefaultValue(child_forms);
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
      this.$data.contentConfigInitDisabledKeys = [...new Set(this.$data.contentConfigInitDisabledKeys)];
    },
    /**
     * 设置初始化使用的默认值
     * @param key 键
     * @param defaultValue 默认值
     */
    setDefaultValue(key, defaultValue) {
      if (this.$data.contentConfigInitDefaultValue.has(key)) {
        log.warn("请检查该key(已存在): " + key);
      }
      this.$data.contentConfigInitDefaultValue.set(key, defaultValue);
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
        if (this.$data.contentConfigInitDefaultValue.has(key)) {
          return this.$data.contentConfigInitDefaultValue.get(key);
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
      let listenerId = PopsPanelStorageApi.addValueChangeListener(key, (__key, __newValue, __oldValue) => {
        callback(key, __oldValue, __newValue);
      });
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
     * 执行菜单
     *
     * @param queryKey 判断的键，如果是字符串列表，那么它们的判断处理方式是与关系
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
      let findNotInDataKey = keyList.find((it) => !this.$data.contentConfigInitDefaultValue.has(it));
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
        let listenerId = this.addValueChangeListener(key, (key2, newValue, oldValue) => {
          valueChangeCallback();
        });
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
     * @param key 判断的键，如果是字符串列表，那么它们的判断处理方式是与关系
     * @param callback 回调
     * @param isReverse 逆反判断菜单启用，默认false
     * @param once 是否是只执行一次，默认false
     */
    execMenu(key, callback, isReverse = false, once = false) {
      return this.exec(
        key,
        (option) => {
          return callback(option);
        },
        (keyList) => {
          let execFlag = keyList.every((__key__) => {
            let flag = !!this.getValue(__key__);
            let disabled = Panel.$data.contentConfigInitDisabledKeys.includes(__key__);
            if (disabled) {
              flag = false;
              log.warn(`.execMenu${once ? "Once" : ""} ${__key__} 被禁用`);
            }
            isReverse && (flag = !flag);
            return flag;
          });
          return execFlag;
        },
        once
      );
    },
    /**
     * 自动判断菜单是否启用，然后执行回调，只会执行一次
     *
     * 它会自动监听值改变（设置中的修改），改变后如果未执行，则执行一次
     * @param key 判断的键，如果是字符串列表，那么它们的判断处理方式是与关系
     * @param callback 回调
     * @param isReverse 逆反判断菜单启用，默认false
     */
    execMenuOnce(key, callback, isReverse = false) {
      return this.execMenu(key, callback, isReverse, true);
    },
    /**
     * 移除已执行的仅执行一次的菜单
     * + .exec
     * + .execMenu
     * + .execMenuOnce
     * @param key 键
     */
    deleteExecMenuOnce(key) {
      this.$data.onceExecMenuData.delete(key);
      let flag = PopsPanelStorageApi.removeValueChangeListener(key);
      return flag;
    },
    /**
     * 根据key执行一次，该key不会和execMenu|exec|execMenuOnce已执行的key冲突
     * @param key 键
     * @param callback 回调
     */
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
    /**
     * 移除已执行的仅执行一次的菜单
     * + .onceExec
     * @param key 键
     */
    deleteOnceExec(key) {
      key = this.transformKey(key);
      this.$data.onceExecData.delete(key);
    },
    /**
     * 显示设置面板
     * @param content 显示的内容配置
     * @param [title] 标题
     * @param [preventDefaultContentConfig=false] 是否阻止默认添加内容配置（版本号），默认false
     * @param [preventRegisterSearchPlugin=false] 是否阻止默认添加搜索组件，默认false
     */
    showPanel(content, title = `${SCRIPT_NAME}-设置`, preventDefaultContentConfig = false, preventRegisterSearchPlugin = false) {
      this.$data.$panel = null;
      this.$data.panelContent = [];
      let checkHasBottomVersionContentConfig = content.findIndex((it) => {
        let isBottom = typeof it.isBottom === "function" ? it.isBottom() : Boolean(it.isBottom);
        return isBottom && it.id === "script-version";
      }) !== -1;
      if (!preventDefaultContentConfig && !checkHasBottomVersionContentConfig) {
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
      this.$data.panelContent = content;
      if (!preventRegisterSearchPlugin) {
        this.registerConfigSearch({ $panel, content });
      }
    },
    /**
     * 注册设置面板的搜索功能（双击左侧选项第一个）
     * @param config 配置项
     */
    registerConfigSearch(config) {
      const { $panel, content } = config;
      let asyncQueryProperty = async (target, handler) => {
        if (target == null) {
          return;
        }
        let handleResult = await handler(target);
        if (handleResult && typeof handleResult.isFind === "boolean" && handleResult.isFind) {
          return handleResult.data;
        }
        return await asyncQueryProperty(handleResult.data, handler);
      };
      let scrollToElementAndListen = ($el, callback) => {
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
            // 使用视口作为根
            threshold: 1
            // 元素完全进入视口时触发
          }
        );
        observer.observe($el);
        $el.scrollIntoView({ behavior: "smooth", block: "center" });
      };
      let addFlashingClass = ($el) => {
        const flashingClassName = "pops-flashing";
        domUtils.animationend($el, () => {
          $el.classList.remove(flashingClassName);
        });
        $el.classList.add(flashingClassName);
      };
      let dbclick_event = (evt, selectorTarget) => {
        utils.preventEvent(evt);
        let $alert = __pops.alert({
          title: {
            text: "搜索配置",
            position: "center"
          },
          content: {
            text: (
              /*html*/
              `
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`
            ),
            html: true
          },
          btn: {
            ok: { enable: false }
          },
          mask: {
            clickEvent: {
              toClose: true
            }
          },
          width: PanelUISize.settingMiddle.width,
          height: "auto",
          drag: true,
          style: (
            /*css*/
            `
					${__pops.config.cssText.panelCSS}

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
						font-size: 0.8rem;
						color: #6c6c6c;
					}
					${config.searchDialogStyle ?? ""}
				`
          )
        });
        $alert.$shadowRoot.querySelector(".search-wrapper");
        let $searchInput = $alert.$shadowRoot.querySelector(".search-config-text");
        let $searchResultWrapper = $alert.$shadowRoot.querySelector(".search-result-wrapper");
        $searchInput.focus();
        let clearSearchResult = () => {
          domUtils.empty($searchResultWrapper);
        };
        let createSearchResultItem = (pathInfo) => {
          const searchPath = utils.queryProperty(pathInfo, (target) => {
            if (target?.next) {
              return {
                isFind: false,
                data: target.next
              };
            } else {
              return {
                isFind: true,
                data: target
              };
            }
          });
          let $item = domUtils.createElement("div", {
            className: "search-result-item",
            innerHTML: (
              /*html*/
              `
							<div class="search-result-item-path">${searchPath.matchedData?.path}</div>
							<div class="search-result-item-description">${searchPath.matchedData?.description ?? ""}</div>
						`
            )
          });
          domUtils.on($item, "click", (clickItemEvent) => {
            let $asideItems = $panel.$shadowRoot.querySelectorAll(
              "aside.pops-panel-aside .pops-panel-aside-top-container li"
            );
            let $targetAsideItem = $asideItems[pathInfo.index];
            if (!$targetAsideItem) {
              Qmsg.error(`左侧项下标${pathInfo.index}不存在`);
              return;
            }
            $targetAsideItem.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });
            $targetAsideItem.click();
            asyncQueryProperty(pathInfo.next, async (target) => {
              if (target?.next) {
                let $findDeepMenu = await utils.waitNode(() => {
                  return Array.from(
                    $panel.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")
                  ).find(($deepMenu) => {
                    const __formConfig__ = Reflect.get($deepMenu, "__formConfig__");
                    return typeof __formConfig__ === "object" && __formConfig__ != null && __formConfig__.text === target.name;
                  });
                }, 2500);
                if ($findDeepMenu) {
                  $findDeepMenu.click();
                } else {
                  Qmsg.error("未找到对应的二级菜单");
                  return {
                    isFind: true,
                    data: target
                  };
                }
                return {
                  isFind: false,
                  data: target.next
                };
              } else {
                let $findTargetMenu = await utils.waitNode(() => {
                  return Array.from(
                    $panel.$shadowRoot.querySelectorAll(`li:not(.pops-panel-deepMenu-nav-item)`)
                  ).find(($menuItem) => {
                    const __formConfig__ = Reflect.get($menuItem, "__formConfig__");
                    return __formConfig__ === target.matchedData?.formConfig;
                  });
                }, 2500);
                if ($findTargetMenu) {
                  scrollToElementAndListen($findTargetMenu);
                  let $fold = $findTargetMenu.closest(`.pops-panel-forms-fold[data-fold-enable]`);
                  if ($fold) {
                    let $foldWrapper = $fold.querySelector(".pops-panel-forms-fold-container");
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
                  data: target
                };
              }
            });
          });
          return $item;
        };
        let execSearch = (searchText) => {
          const searchTextRegExp = new RegExp(searchText, "i");
          const searchConfigResult = [];
          const loopContentConfig = (configList, path) => {
            for (let index = 0; index < configList.length; index++) {
              const configItem = configList[index];
              let child_forms = configItem.forms;
              if (child_forms && Array.isArray(child_forms)) {
                const deepMenuPath = utils.deepClone(path);
                if (configItem.type === "deepMenu") {
                  const deepNext = utils.queryProperty(deepMenuPath, (target) => {
                    if (target?.next) {
                      return {
                        isFind: false,
                        data: target.next
                      };
                    } else {
                      return {
                        isFind: true,
                        data: target
                      };
                    }
                  });
                  deepNext.next = {
                    name: configItem.text
                  };
                }
                loopContentConfig(child_forms, deepMenuPath);
              } else {
                let text = Reflect.get(configItem, "text");
                let description = Reflect.get(configItem, "description");
                const delayMatchedTextList = [text, description];
                let matchedIndex = delayMatchedTextList.findIndex((configText) => {
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
                        data: target.next
                      };
                    } else {
                      return {
                        isFind: true,
                        data: target
                      };
                    }
                  });
                  deepNext.next = {
                    name: text,
                    matchedData: {
                      path: "",
                      formConfig: configItem,
                      matchedText: delayMatchedTextList[matchedIndex],
                      description
                    }
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
                        data: target.next
                      };
                    } else {
                      return {
                        isFind: true,
                        data: target
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
            if (!leftContentConfigItem.forms) {
              continue;
            }
            if (leftContentConfigItem.isBottom && leftContentConfigItem.id === "script-version") {
              continue;
            }
            const rightContentConfigList = leftContentConfigItem.forms;
            if (rightContentConfigList && Array.isArray(rightContentConfigList)) {
              let text = leftContentConfigItem.title;
              if (typeof text === "function") {
                text = text();
              }
              loopContentConfig(rightContentConfigList, {
                index,
                name: text
              });
            }
          }
          let fragment = document.createDocumentFragment();
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
            utils.preventEvent(evt2);
            let searchText = domUtils.val($searchInput).trim();
            if (searchText === "") {
              clearSearchResult();
              return;
            }
            execSearch(searchText);
          }, 200)
        );
      };
      let clickElement = null;
      let isDoubleClick = false;
      let timer = void 0;
      domUtils.on(
        $panel.$shadowRoot,
        "dblclick",
        `aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`,
        dbclick_event
      );
      domUtils.on(
        $panel.$shadowRoot,
        "touchend",
        `aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`,
        (evt, selectorTarget) => {
          clearTimeout(timer);
          timer = void 0;
          if (isDoubleClick && clickElement === selectorTarget) {
            isDoubleClick = false;
            clickElement = null;
            dbclick_event(evt);
          } else {
            timer = setTimeout(() => {
              isDoubleClick = false;
            }, 200);
            isDoubleClick = true;
            clickElement = selectorTarget;
          }
        },
        {
          capture: true
        }
      );
      $panel.$shadowRoot.appendChild(
        domUtils.createElement("style", {
          type: "text/css",
          textContent: (
            /*css*/
            `
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
				`
          )
        })
      );
    },
    /**
     * 把key:string[]转为string
     */
    transformKey(key) {
      if (Array.isArray(key)) {
        const keyArray = key.sort();
        return JSON.stringify(keyArray);
      } else {
        return key;
      }
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
  Qmsg.config({
    isHTML: true,
    autoClose: true,
    showClose: false,
    consoleLogContent(qmsgInst) {
      const qmsgType = qmsgInst.getSetting().type;
      if (qmsgType === "loading") {
        return false;
      }
      const content = qmsgInst.getSetting().content;
      if (qmsgType === "warning") {
        log.warn(content);
      } else if (qmsgType === "error") {
        log.error(content);
      } else {
        log.info(content);
      }
      return true;
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
      let maxZIndex = Utils.getMaxZIndex();
      let popsMaxZIndex = pops.config.InstanceUtils.getPopsMaxZIndex().zIndex;
      return Utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
    }
  });
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
    },
    drag: true
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
  DOMUtils.selector.bind(DOMUtils);
  DOMUtils.selectorAll.bind(DOMUtils);
  const cookieManager = new utils.GM_Cookie();
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
            let supportURL = _GM_info?.script?.supportURL || _GM_info?.script?.namespace;
            if (typeof supportURL === "string" && utils.isNotNull(supportURL)) {
              window.open(supportURL, "_blank");
            }
            return false;
          }
        }
      ];
    }
  };
  let applyObjectThis = (obj) => {
    if (typeof obj === "object" && obj != null || typeof obj === "function") {
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
  const CookieManagerApiNameList = [
    "document.cookie",
    "cookieStore",
    "GM_cookie",
    "GM.cookie"
  ];
  class CookieManagerService {
    __apiName;
    /**
     * @param apiName 强制使用Api的名称，是否使用保存的Api名称
     */
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
          }
        };
      } else if (this.cookieManagerApiName === "GM.cookie") {
        return {
          list(options, callback) {
            _GM.cookie.list().then((result) => {
              callback(result);
            });
          },
          set(cookieInfo, callback) {
            _GM.cookie.set(cookieInfo).then((result) => {
              callback(result ?? null);
            }).catch((reason) => {
              callback(reason);
            });
          },
          delete(cookieInfo, callback) {
            _GM.cookie.delete(cookieInfo).then((result) => {
              callback(result ?? null);
            }).catch((reason) => {
              callback(reason);
            });
          }
        };
      } else if (this.cookieManagerApiName === "cookieStore") {
        let cookieStore = _unsafeWindow.cookieStore;
        return {
          list(options, callback) {
            cookieStore.getAll().then((result) => {
              callback(result);
            }).catch((reason) => {
              log.error(reason);
              Qmsg.error(reason.toString());
            });
          },
          set(cookieInfo, callback) {
            cookieStore.set(cookieInfo).then(() => {
              callback();
            }).catch((reason) => {
              callback(reason);
            });
          },
          delete(cookieInfo, callback) {
            cookieStore.delete(cookieInfo).then((result) => {
              callback();
            }).catch((reason) => {
              callback(reason);
            });
          }
        };
      } else {
        return cookieManager;
      }
    }
    /**
     * 查询所有Cookie
     */
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
    /**
     * 清除所有Cookie
     */
    deleteAllCookie() {
      return new Promise((resolve, reject) => {
        try {
          this.cookieManager.list({}, async (cookieListResult) => {
            const __cookieListResult__ = cookieListResult || [];
            const result = {
              success: 0,
              error: 0
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
    /**
     * 添加Cookie
     */
    addCookie(cookieInfo) {
      return new Promise((resolve, reject) => {
        try {
          Reflect.deleteProperty(cookieInfo, "hostOnly");
          this.cookieManager.set(
            cookieInfo,
            (error) => {
              if (false) ;
              resolve(error);
            }
          );
        } catch (error) {
          log.error(error);
          Qmsg.error(error.toString());
          reject(error);
        }
      });
    }
    /**
     * 删除Cookie
     */
    deleteCookie(cookieInfo) {
      return new Promise((resolve, reject) => {
        try {
          this.cookieManager.delete(
            cookieInfo,
            (error) => {
              if (false) ;
              resolve(error);
            }
          );
        } catch (error) {
          log.error(error);
          Qmsg.error(error.toString());
          reject(error);
        }
      });
    }
    /**
     * 更新Cookie
     */
    updateCookie(cookieInfo) {
      return new Promise(async (resolve, reject) => {
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
  const UISwitch = function(text, key, defaultValue, clickCallBack, description, afterAddToUListCallBack, disabled, valueChangeCallBack) {
    let result = {
      text,
      type: "switch",
      description,
      disabled,
      attributes: {},
      props: {},
      getValue() {
        let storageApiValue = this.props[PROPS_STORAGE_API];
        let value = storageApiValue.get(key, defaultValue);
        return value;
      },
      callback(event, __value) {
        let value = Boolean(__value);
        log.success(`${value ? "开启" : "关闭"} ${text}`);
        if (typeof clickCallBack === "function") {
          let result2 = clickCallBack(event, value);
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
  const CookieInfoTransform = {
    /**
     * 对编辑前的cookie信息进行值转换
     * @param cookieInfo
     * @param isEdit 是否是编辑
     */
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
    /**
     * 对编辑后的cookie信息进行值转换
     * @param cookieInfo
     */
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
    }
  };
  let edit_ui_input = (text, getValue, setValue, disabled) => {
    let config = {
      text,
      type: "input",
      isNumber: false,
      isPassword: false,
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
      disabled: Boolean(disabled)
    };
    return config;
  };
  let edit_ui_textarea = (text, getValue, setValue, disabled) => {
    let config = {
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
      callback: function(event, value) {
        setValue(value);
      }
    };
    return config;
  };
  let edit_ui_select = (text, data, getValue, setValue, disabled) => {
    let config = {
      text,
      type: "select",
      description: "",
      attributes: {},
      props: {},
      getValue() {
        return getValue();
      },
      callback(event, isSelectedValue, isSelectedText) {
        let value = isSelectedValue;
        setValue(value);
      },
      data: typeof data === "function" ? data() : data,
      disabled: Boolean(disabled)
    };
    return config;
  };
  const CookieManagerEditView = {
    init() {
    },
    /**
     * 显示视图
     * @param cookieInfo 需要编辑的cookie，为空的话是添加
     * @param dialogCloseCallBack 弹窗关闭的回调
     */
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
        // 一个月后过期
        // 单位：毫秒
        expirationDate: Date.now() + 60 * 60 * 24 * 30 * 1e3
      };
      let cookieInfo = utils.assign({}, defaultCookieInfo, true);
      utils.assign(cookieInfo, __cookieInfo__ ?? {}, true);
      cookieInfo = CookieInfoTransform.beforeEdit(cookieInfo, isEdit);
      let $dialog = __pops.confirm({
        title: {
          text: isEdit ? "编辑Cookie" : "添加Cookie",
          position: "center"
        },
        content: {
          text: "",
          html: true
        },
        drag: true,
        btn: {
          position: "center",
          ok: {
            text: isEdit ? "编辑" : "添加",
            async callback(eventDetails, event) {
              let valid = CookieManagerEditView.validCookieInfo(cookieInfo);
              if (!valid) {
                return;
              }
              cookieInfo.value = encodeURIComponent(cookieInfo.value);
              cookieInfo = CookieInfoTransform.afterEdit(cookieInfo);
              if (isEdit) {
                let result = await CookieManager.updateCookie(cookieInfo);
                if (result) {
                  Qmsg.error(result.toString());
                } else {
                  Qmsg.success("修改成功");
                  eventDetails.close();
                }
              } else {
                let result = await CookieManager.addCookie(cookieInfo);
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
            }
          },
          cancel: {
            text: "取消"
          }
        },
        mask: {
          enable: true
        },
        width: PanelUISize.settingMiddle.width,
        height: "auto",
        style: (
          /*css*/
          `
                ${__pops.config.cssText.panelCSS}

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
				#cookie-item-property-expires{
					border: 1px solid rgb(184, 184, 184, var(--pops-bd-opacity));
					border-radius: 4px;
					background-color: #ffffff;
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
            `
        )
      });
      let $editContent = $dialog.$shadowRoot.querySelector(".pops-confirm-content");
      let panelHandlerComponents = __pops.config.PanelHandlerComponents();
      let $name = panelHandlerComponents.createSectionContainerItem_input(
        edit_ui_input(
          "name",
          () => cookieInfo.name,
          (value) => cookieInfo.name = value,
          isEdit
        )
      );
      let $value = panelHandlerComponents.createSectionContainerItem_textarea(
        edit_ui_textarea(
          "value",
          () => cookieInfo.value,
          (value) => cookieInfo.value = value
        )
      );
      let $domain = panelHandlerComponents.createSectionContainerItem_input(
        edit_ui_input(
          "domain",
          () => cookieInfo.domain,
          (value) => cookieInfo.domain = value
        )
      );
      let $path = panelHandlerComponents.createSectionContainerItem_input(
        edit_ui_input(
          "path",
          () => cookieInfo.path,
          (value) => cookieInfo.path = value
        )
      );
      let $expires;
      if (cookieInfo.session) {
        $expires = panelHandlerComponents.createSectionContainerItem_input(
          edit_ui_input(
            "expires",
            () => "会话",
            (value) => {
            },
            true
          )
        );
      } else {
        $expires = panelHandlerComponents.createSectionContainerItem_own({
          type: "own",
          getLiElementCallBack: function(liElement) {
            let $li = domUtils.createElement("li", {
              innerHTML: (
                /*html*/
                `
							<div class="pops-panel-item-left-text">
								<p class="pops-panel-item-left-main-text">expires</p>
							</div>
							<div class="pops-panel-item-right-wrapper">
								<input type="datetime-local" id="cookie-item-property-expires">
							</div>
						`
              )
            });
            let $dateTime = $li.querySelector("#cookie-item-property-expires");
            $dateTime.valueAsNumber = cookieInfo.expirationDate;
            domUtils.on($dateTime, ["change", "input", "propertychange"], (event) => {
              utils.preventEvent(event);
              cookieInfo.expirationDate = $dateTime.valueAsNumber;
            });
            return $li;
          }
        });
      }
      let $httpOnly = panelHandlerComponents.createSectionContainerItem_select(
        edit_ui_select(
          "httpOnly",
          [
            {
              text: "true",
              value: true
            },
            {
              text: "false",
              value: false
            }
          ],
          () => cookieInfo.httpOnly,
          (value) => cookieInfo.httpOnly = value
        )
      );
      let $secure = panelHandlerComponents.createSectionContainerItem_select(
        edit_ui_select(
          "secure",
          [
            {
              text: "true",
              value: true
            },
            {
              text: "false",
              value: false
            }
          ],
          () => cookieInfo.secure,
          (value) => cookieInfo.secure = value
        )
      );
      let sameSiteData = [
        {
          text: "no_restriction",
          value: "no_restriction"
        },
        {
          text: "lax",
          value: "lax"
        },
        {
          text: "strict",
          value: "strict"
        },
        {
          text: "unspecified",
          value: "unspecified"
        }
      ];
      if (CookieManager.cookieManagerApiName === "cookieStore") {
        sameSiteData = [
          {
            text: "lax",
            value: "lax"
          },
          {
            text: "strict",
            value: "strict"
          },
          {
            text: "none",
            value: "none"
          }
        ];
      }
      let $sameSite = panelHandlerComponents.createSectionContainerItem_select(
        edit_ui_select(
          "sameSite",
          sameSiteData,
          () => cookieInfo.sameSite,
          (value) => cookieInfo.sameSite = value
        )
      );
      domUtils.append($editContent, [$name, $value]);
      if (CookieManager.cookieManagerApiName === "GM_cookie" || CookieManager.cookieManagerApiName === "GM.cookie") {
        domUtils.append($editContent, [$domain, $path, $expires, $httpOnly, $secure, $sameSite]);
      } else if (CookieManager.cookieManagerApiName === "cookieStore") {
        domUtils.append($editContent, [$domain, $path, $expires, $sameSite]);
      }
    },
    /**
     * Cookie信息校验
     */
    validCookieInfo(cookieInfo) {
      if (cookieInfo.name == null || cookieInfo.name == "") {
        Qmsg.error("name不能为空");
        return false;
      }
      if (cookieInfo.domain == null || cookieInfo.domain == "") {
        Qmsg.error("domain不能为空");
        return false;
      }
      if (cookieInfo.path == null || cookieInfo.path == "") {
        Qmsg.error("path不能为空");
        return false;
      }
      return true;
    }
  };
  const UISelect = function(text, key, defaultValue, data, selectCallBack, description, valueChangeCallBack) {
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
        if (typeof selectCallBack === "function") {
          let result2 = selectCallBack(event, value, isSelectedText);
          if (result2) {
            return;
          }
        }
        let storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
        if (typeof valueChangeCallBack === "function") {
          valueChangeCallBack(event, value, isSelectedText);
        }
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
  const UIInput = function(text, key, defaultValue, description, changeCallback, placeholder = "", isNumber, isPassword, afterAddToUListCallBack, valueChangeCallback) {
    let result = {
      text,
      type: "input",
      isNumber: Boolean(isNumber),
      isPassword: Boolean(isPassword),
      attributes: {},
      props: {},
      description,
      afterAddToUListCallBack,
      getValue() {
        let storageApiValue = this.props[PROPS_STORAGE_API];
        return storageApiValue.get(key, defaultValue);
      },
      callback(event, value, valueAsNumber) {
        let storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
      placeholder
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi(
      "input",
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
  const UITextArea = function(text, key, defaultValue, description, changeCallback, placeholder = "", disabled, valueChangeCallBack) {
    let result = {
      text,
      type: "textarea",
      attributes: {},
      props: {},
      description,
      placeholder,
      disabled,
      getValue() {
        let storageApiValue = this.props[PROPS_STORAGE_API];
        let value = storageApiValue.get(key, defaultValue);
        if (Array.isArray(value)) {
          return value.join("\n");
        }
        return value;
      },
      callback(event, value) {
        let storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      }
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
  class RuleEditView {
    option;
    constructor(option) {
      this.option = option;
    }
    /**
     * 显示视图
     */
    async showView() {
      let $dialog = __pops.confirm({
        title: {
          text: this.option.title,
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist"></ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `
          ),
          html: true
        },
        btn: utils.assign(
          {
            ok: {
              callback: async () => {
                await submitSaveOption();
              }
            }
          },
          this.option.btn || {},
          true
        ),
        drag: true,
        mask: {
          enable: true
        },
        style: (
          /*css*/
          `
                ${__pops.config.cssText.panelCSS}
                
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
            `
        ),
        width: typeof this.option.width === "function" ? this.option.width() : window.innerWidth > 500 ? "500px" : "88vw",
        height: typeof this.option.height === "function" ? this.option.height() : window.innerHeight > 500 ? "500px" : "80vh"
      });
      let $form = $dialog.$shadowRoot.querySelector(
        ".rule-form-container"
      );
      $dialog.$shadowRoot.querySelector(
        "input[type=submit]"
      );
      let $ulist = $dialog.$shadowRoot.querySelector(".rule-form-ulist");
      let view = await this.option.getView(await this.option.data());
      $ulist.appendChild(view);
      const submitSaveOption = async () => {
        let result = await this.option.onsubmit($form, await this.option.data());
        if (!result.success) {
          return;
        }
        $dialog.close();
        await this.option.dialogCloseCallBack(true);
      };
    }
  }
  class RuleFilterView {
    option;
    constructor(option) {
      this.option = option;
    }
    showView() {
      let $alert = __pops.alert({
        title: {
          text: this.option.title,
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                <div class="filter-container"></div>
                `
          )
        },
        btn: {
          ok: {
            text: "关闭",
            type: "default"
          }
        },
        drag: true,
        mask: {
          enable: true
        },
        width: window.innerWidth > 500 ? "350px" : "80vw",
        height: window.innerHeight > 500 ? "300px" : "70vh",
        style: (
          /*css*/
          `
            .filter-container{
                height: 100%;
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            .filter-container button{
                text-wrap: wrap;
                padding: 8px;
                height: auto;
                text-align: left;
            }
            `
        )
      });
      let $filterContainer = $alert.$shadowRoot.querySelector(".filter-container");
      let $fragment = document.createDocumentFragment();
      this.option.filterOption.forEach((filterOption) => {
        let $button = domUtils.createElement(
          "button",
          {
            innerText: filterOption.name
          },
          {
            type: "button"
          }
        );
        let execFilterAndCloseDialog = async () => {
          let allRuleInfo = await this.option.getAllRuleInfo();
          allRuleInfo.forEach(async (ruleInfo) => {
            let filterResult = await filterOption.filterCallBack(ruleInfo.data);
            if (!filterResult) {
              domUtils.hide(ruleInfo.$el, false);
            } else {
              domUtils.show(ruleInfo.$el, false);
            }
          });
          if (typeof this.option.execFilterCallBack === "function") {
            await this.option.execFilterCallBack();
          }
          $alert.close();
        };
        domUtils.on($button, "click", async (event) => {
          utils.preventEvent(event);
          if (typeof filterOption.callback === "function") {
            let result = await filterOption.callback(
              event,
              execFilterAndCloseDialog
            );
            if (!result) {
              return;
            }
          }
          await execFilterAndCloseDialog();
        });
        $fragment.appendChild($button);
      });
      $filterContainer.appendChild($fragment);
    }
  }
  class RuleView {
    option;
    constructor(option) {
      this.option = option;
    }
    /**
     * 显示视图
     * @param filterCallBack 返回值为false隐藏，true则不隐藏（不处理）
     */
    async showView(filterCallBack) {
      let $popsConfirm = __pops.confirm({
        title: {
          text: this.option.title,
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                    <div class="rule-view-container">
                    </div>
                    `
          ),
          html: true
        },
        btn: {
          merge: true,
          reverse: false,
          position: "space-between",
          ok: {
            enable: this.option?.bottomControls?.add?.enable || true,
            type: "primary",
            text: "添加",
            callback: async (event) => {
              this.showEditView(
                false,
                await this.option.getAddData(),
                $popsConfirm.$shadowRoot
              );
            }
          },
          close: {
            enable: true,
            callback(event) {
              $popsConfirm.close();
            }
          },
          cancel: {
            enable: this.option?.bottomControls?.filter?.enable || false,
            type: "default",
            text: "过滤",
            callback: (details, event) => {
              if (typeof this.option?.bottomControls?.filter?.callback === "function") {
                this.option.bottomControls.filter.callback();
              }
              let getAllRuleElement = () => {
                return Array.from(
                  $popsConfirm.$shadowRoot.querySelectorAll(
                    ".rule-view-container .rule-item"
                  )
                );
              };
              let $button = event.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");
              if (domUtils.text($button).includes("取消")) {
                getAllRuleElement().forEach(($el) => {
                  domUtils.show($el, false);
                });
                domUtils.text($button, "过滤");
              } else {
                let ruleFilterView = new RuleFilterView({
                  title: this.option.bottomControls?.filter?.title ?? "过滤规则",
                  filterOption: this.option.bottomControls?.filter?.option || [],
                  execFilterCallBack() {
                    domUtils.text($button, "取消过滤");
                  },
                  getAllRuleInfo: () => {
                    return getAllRuleElement().map(($el) => {
                      return {
                        data: this.parseRuleItemElement($el).data,
                        $el
                      };
                    });
                  }
                });
                ruleFilterView.showView();
              }
            }
          },
          other: {
            enable: this.option?.bottomControls?.clear?.enable || true,
            type: "xiaomi-primary",
            text: `清空所有(${(await this.option.data()).length})`,
            callback: (event) => {
              let $askDialog = __pops.confirm({
                title: {
                  text: "提示",
                  position: "center"
                },
                content: {
                  text: "确定清空所有的数据？",
                  html: false
                },
                btn: {
                  ok: {
                    enable: true,
                    callback: async (popsEvent) => {
                      log.success("清空所有");
                      if (typeof this.option?.bottomControls?.clear?.callback === "function") {
                        this.option.bottomControls.clear.callback();
                      }
                      let data = await this.option.data();
                      if (data.length) {
                        Qmsg.error("清理失败");
                        return;
                      } else {
                        Qmsg.success("清理成功");
                      }
                      await this.updateDeleteAllBtnText($popsConfirm.$shadowRoot);
                      this.clearContent($popsConfirm.$shadowRoot);
                      $askDialog.close();
                    }
                  },
                  cancel: {
                    text: "取消",
                    enable: true
                  }
                },
                mask: { enable: true },
                width: "300px",
                height: "200px"
              });
            }
          }
        },
        mask: {
          enable: true
        },
        width: window.innerWidth > 500 ? "500px" : "88vw",
        height: window.innerHeight > 500 ? "500px" : "80vh",
        style: (
          /*css*/
          `
            ${__pops.config.cssText.panelCSS}
            
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
            `
        )
      });
      let allData = await this.option.data();
      let changeButtonText = false;
      for (let index = 0; index < allData.length; index++) {
        let item = allData[index];
        let $ruleItemList = await this.appendRuleItemElement(
          $popsConfirm.$shadowRoot,
          item
        );
        let flag = typeof filterCallBack === "function" ? filterCallBack(item) : true;
        if (!flag) {
          changeButtonText = true;
          $ruleItemList.forEach(($el) => {
            domUtils.hide($el, false);
          });
        }
      }
      if (changeButtonText) {
        let $button = $popsConfirm.$shadowRoot.querySelector(
          ".pops-confirm-btn-cancel span"
        );
        domUtils.text($button, "取消过滤");
      }
    }
    /**
     * 显示编辑视图
     * @param isEdit 是否是编辑状态
     * @param editData 编辑的数据
     * @param $parentShadowRoot （可选）关闭弹窗后对ShadowRoot进行操作
     * @param $editRuleItemElement （可选）关闭弹窗后对规则行进行更新数据
     * @param updateDataCallBack （可选）关闭添加/编辑弹窗的回调（不更新数据）
     * @param submitCallBack （可选）添加/修改提交的回调
     */
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
            text: isEdit ? "修改" : "添加"
          },
          cancel: {
            callback: async (detail, event) => {
              detail.close();
              await dialogCloseCallBack(false);
            }
          },
          close: {
            callback: async (detail, event) => {
              detail.close();
              await dialogCloseCallBack(false);
            }
          }
        },
        onsubmit: async ($form, data) => {
          let result = await this.option.itemControls.edit.onsubmit(
            $form,
            isEdit,
            data
          );
          if (result.success) {
            if (isEdit) {
              Qmsg.success("修改成功");
              $parentShadowRoot && await this.updateRuleItemElement(
                result.data,
                $editRuleItemElement,
                $parentShadowRoot
              );
            } else {
              $parentShadowRoot && await this.appendRuleItemElement(
                $parentShadowRoot,
                result.data
              );
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
        height: this.option.itemControls.edit.height
      });
      editView.showView();
    }
    /**
     * 解析弹窗内的各个元素
     */
    parseViewElement($shadowRoot) {
      let $container = $shadowRoot.querySelector(
        ".rule-view-container"
      );
      let $deleteBtn = $shadowRoot.querySelector(
        ".pops-confirm-btn button.pops-confirm-btn-other"
      );
      return {
        /** 容器 */
        $container,
        /** 左下角的清空按钮 */
        $deleteBtn
      };
    }
    /**
     * 解析每一项的元素
     */
    parseRuleItemElement($ruleElement) {
      let $enable = $ruleElement.querySelector(
        ".rule-controls-enable"
      );
      let $enableSwitch = $enable.querySelector(".pops-panel-switch");
      let $enableSwitchInput = $enable.querySelector(
        ".pops-panel-switch__input"
      );
      let $enableSwitchCore = $enable.querySelector(
        ".pops-panel-switch__core"
      );
      let $edit = $ruleElement.querySelector(".rule-controls-edit");
      let $delete = $ruleElement.querySelector(
        ".rule-controls-delete"
      );
      return {
        /** 启用开关 */
        $enable,
        /** 启用开关的container */
        $enableSwitch,
        /** 启用开关的input */
        $enableSwitchInput,
        /** 启用开关的core */
        $enableSwitchCore,
        /** 编辑按钮 */
        $edit,
        /** 删除按钮 */
        $delete,
        /** 存储在元素上的数据 */
        data: Reflect.get($ruleElement, "data-rule")
      };
    }
    /**
     * 创建一条规则元素
     */
    async createRuleItemElement(data, $shadowRoot) {
      let name = await this.option.getDataItemName(data);
      let $ruleItem = domUtils.createElement("div", {
        className: "rule-item",
        innerHTML: (
          /*html*/
          `
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
					${__pops.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${__pops.config.iconSVG.delete}
				</div>
			</div>
			`
        )
      });
      Reflect.set($ruleItem, "data-rule", data);
      let switchCheckedClassName = "pops-panel-switch-is-checked";
      const {
        $enable,
        $enableSwitch,
        $enableSwitchCore,
        $enableSwitchInput,
        $delete,
        $edit
      } = this.parseRuleItemElement($ruleItem);
      if (this.option.itemControls.enable.enable) {
        domUtils.on($enableSwitchCore, "click", async (event) => {
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
          utils.preventEvent(event);
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
          utils.preventEvent(event);
          let $askDialog = __pops.confirm({
            title: {
              text: "提示",
              position: "center"
            },
            content: {
              text: "确定删除该条数据？",
              html: false
            },
            btn: {
              ok: {
                enable: true,
                callback: async (popsEvent) => {
                  log.success("删除数据");
                  let flag = await this.option.itemControls.delete.deleteCallBack(
                    data
                  );
                  if (flag) {
                    Qmsg.success("成功删除该数据");
                    $ruleItem.remove();
                    await this.updateDeleteAllBtnText($shadowRoot);
                    $askDialog.close();
                  } else {
                    Qmsg.error("删除该数据失败");
                  }
                }
              },
              cancel: {
                text: "取消",
                enable: true
              }
            },
            mask: {
              enable: true
            },
            width: "300px",
            height: "200px"
          });
        });
      } else {
        $delete.remove();
      }
      return $ruleItem;
    }
    /**
     * 添加一个规则元素
     */
    async appendRuleItemElement($shadowRoot, data) {
      let { $container } = this.parseViewElement($shadowRoot);
      let $ruleItem = [];
      let iteratorData = Array.isArray(data) ? data : [data];
      for (let index = 0; index < iteratorData.length; index++) {
        let item = iteratorData[index];
        let $item = await this.createRuleItemElement(item, $shadowRoot);
        $container.appendChild($item);
        $ruleItem.push($item);
      }
      await this.updateDeleteAllBtnText($shadowRoot);
      return $ruleItem;
    }
    /**
     * 更新弹窗内容的元素
     */
    async updateRuleContaienrElement($shadowRoot) {
      this.clearContent($shadowRoot);
      const { $container } = this.parseViewElement($shadowRoot);
      let data = await this.option.data();
      await this.appendRuleItemElement($shadowRoot, data);
      await this.updateDeleteAllBtnText($shadowRoot);
    }
    /**
     * 更新规则元素
     */
    async updateRuleItemElement(data, $oldRuleItem, $shadowRoot) {
      let $newRuleItem = await this.createRuleItemElement(data, $shadowRoot);
      $oldRuleItem.after($newRuleItem);
      $oldRuleItem.remove();
    }
    /**
     * 清空内容
     */
    clearContent($shadowRoot) {
      const { $container } = this.parseViewElement($shadowRoot);
      domUtils.html($container, "");
    }
    /**
     * 设置删除按钮的文字
     */
    setDeleteBtnText($shadowRoot, text, isHTML = false) {
      const { $deleteBtn } = this.parseViewElement($shadowRoot);
      if (isHTML) {
        domUtils.html($deleteBtn, text);
      } else {
        domUtils.text($deleteBtn, text);
      }
    }
    /**
     * 更新【清空所有】的按钮的文字
     * @param $shadowRoot
     */
    async updateDeleteAllBtnText($shadowRoot) {
      let data = await this.option.data();
      this.setDeleteBtnText($shadowRoot, `清空所有(${data.length})`);
    }
  }
  const CookieRule = {
    $key: {
      STORAGE_KEY: "cookie-rule"
    },
    $data: {
      /** 匹配到的规则数据 */
      matchedRuleList: []
    },
    /** 初始化数据 */
    init() {
      this.$data.matchedRuleList = [];
      this.$data.matchedRuleList = this.getMatchedRuleList();
      if (this.$data.matchedRuleList.length) {
        GM_Menu.add({
          key: "matched-cookie-rule-list",
          text: `${window.location.hostname} ${this.$data.matchedRuleList.length}条规则`,
          isStoreValue: false,
          autoReload: false,
          showText(text, enable) {
            return text;
          },
          callback(data) {
            console.log(CookieRule.$data.matchedRuleList);
            alert(
              "以下是命中的规则名：\n" + CookieRule.$data.matchedRuleList.map((it) => it.name).join("\n")
            );
          }
        });
      }
    },
    /**
     * 获取匹配的规则
     */
    getMatchedRuleList(url = window.location.href) {
      let allData = this.getData();
      let matchedRuleList = [];
      allData.forEach((data) => {
        if (!data.enable) {
          return;
        }
        let url2 = window.location.href;
        let ruleUrl = data.data.url;
        let enableRegExpToMatchUrl = data.data.enableRegExpToMatchUrl;
        if (enableRegExpToMatchUrl) {
          let regExpUrl = new RegExp(ruleUrl, "i");
          if (!regExpUrl.test(url2)) {
            return;
          }
        } else {
          if (!url2.includes(ruleUrl)) {
            return;
          }
        }
        matchedRuleList.push(data);
      });
      return matchedRuleList;
    },
    /**
     * 显示视图
     */
    showView() {
      let panelHandlerComponents = __pops.config.PanelHandlerComponents();
      function generateStorageApi(data, handler) {
        return {
          get(key, defaultValue) {
            return Reflect.get(data, key) ?? defaultValue;
          },
          set(key, value) {
            Reflect.set(data, key, value);
          }
        };
      }
      const matchedRuleList = this.getMatchedRuleList();
      let ruleView = new RuleView({
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
          let allData = this.getData();
          let findValue = allData.find((item) => item.uuid === data.uuid);
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
            }
          },
          edit: {
            enable: true,
            getView: (data, isEdit) => {
              let $fragment = document.createDocumentFragment();
              let templateData = this.getTemplateData();
              if (!isEdit) {
                data = templateData;
              }
              let enable_template = UISwitch(
                "启用",
                "enable",
                templateData.enable
              );
              Reflect.set(
                enable_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data)
              );
              let $enable = panelHandlerComponents.createSectionContainerItem_switch(
                enable_template
              );
              let name_template = UIInput(
                "规则名称",
                "name",
                "",
                templateData.name,
                void 0,
                "必填"
              );
              Reflect.set(
                name_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data)
              );
              let $name = panelHandlerComponents.createSectionContainerItem_input(
                name_template
              );
              let apiName_template = UISelect(
                "Cookie管理Api",
                "execApiName",
                templateData.data.execApiName,
                [
                  {
                    text: "（当前）" + CookieManager.cookieManagerApiName,
                    value: "use-global"
                  },
                  ...CookieManagerApiNameList.map((it) => {
                    return {
                      text: it,
                      value: it
                    };
                  })
                ],
                void 0,
                "操作Cookie的Api函数"
              );
              Reflect.set(
                apiName_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data.data)
              );
              let $apiName = panelHandlerComponents.createSectionContainerItem_select(
                apiName_template
              );
              let url_template = UIInput(
                "网址",
                "url",
                templateData.data.url,
                "用于执行该规则的网址",
                void 0,
                "必填"
              );
              Reflect.set(
                url_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data.data)
              );
              let $url = panelHandlerComponents.createSectionContainerItem_input(
                url_template
              );
              let enableRegExpToMatchUrl_template = UISwitch(
                "启用正则匹配网址",
                "enableRegExpToMatchUrl",
                templateData.data.enableRegExpToMatchUrl
              );
              Reflect.set(
                enableRegExpToMatchUrl_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data.data)
              );
              let $enableRegExpToMatchUrl = panelHandlerComponents.createSectionContainerItem_switch(
                enableRegExpToMatchUrl_template
              );
              let cookieName_template = UIInput(
                "Cookie名称",
                "cookieName",
                templateData.data.cookieName,
                "用于匹配执行操作的Cookie名",
                void 0,
                "必填"
              );
              Reflect.set(
                cookieName_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data.data)
              );
              let $cookieName = panelHandlerComponents.createSectionContainerItem_input(
                cookieName_template
              );
              let enableRegExpToMatchCookieName_template = UISwitch(
                "启用正则匹配Cookie名称",
                "enableRegExpToMatchCookieName",
                templateData.data.enableRegExpToMatchCookieName
              );
              Reflect.set(
                enableRegExpToMatchCookieName_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data.data)
              );
              let $enableRegExpToMatchCookieName = panelHandlerComponents.createSectionContainerItem_switch(
                enableRegExpToMatchCookieName_template
              );
              let operationMode_template = UISelect(
                "操作模式",
                "operationMode",
                templateData.data.operationMode,
                [
                  {
                    value: "delete",
                    text: "删除Cookie"
                  },
                  {
                    value: "extended",
                    text: "自动延长Cookie有效期30天"
                  },
                  {
                    value: "extended-90",
                    text: "自动延长Cookie有效期90天"
                  },
                  {
                    value: "extended-180",
                    text: "自动延长Cookie有效期180天"
                  },
                  {
                    value: "extended-360",
                    text: "自动延长Cookie有效期360天"
                  }
                ]
              );
              Reflect.set(
                operationMode_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data.data)
              );
              let $operationMode = panelHandlerComponents.createSectionContainerItem_select(
                operationMode_template
              );
              let remark_template = UITextArea(
                "备注",
                "remark",
                templateData.data.remark
              );
              Reflect.set(
                remark_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data.data)
              );
              let $remark = panelHandlerComponents.createSectionContainerItem_textarea(
                remark_template
              );
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
              let $ulist_li = $form.querySelectorAll(
                ".rule-form-ulist > li"
              );
              let data = this.getTemplateData();
              if (isEdit) {
                data.uuid = editData.uuid;
              }
              try {
                $ulist_li.forEach(($li) => {
                  let formConfig = Reflect.get($li, "__formConfig__");
                  let attrs = Reflect.get(formConfig, "attributes");
                  let storageApi = Reflect.get($li, PROPS_STORAGE_API);
                  let key = Reflect.get(attrs, ATTRIBUTE_KEY);
                  let defaultValue = Reflect.get(attrs, ATTRIBUTE_DEFAULT_VALUE);
                  let value = storageApi.get(key, defaultValue);
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
                    data
                  };
                }
                if (data.data.url.trim() === "") {
                  Qmsg.error("网址不能为空");
                  return {
                    success: false,
                    data
                  };
                }
                if (data.data.cookieName.trim() === "") {
                  Qmsg.error("Cookie名称不能为空");
                  return {
                    success: false,
                    data
                  };
                }
                if (isEdit) {
                  return {
                    success: this.updateData(data),
                    data
                  };
                } else {
                  return {
                    success: this.addData(data),
                    data
                  };
                }
              } catch (error) {
                log.error(error);
                return {
                  success: false,
                  data
                };
              } finally {
                this.init();
              }
            },
            style: (
              /*css*/
              `
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
                    `
            )
          },
          delete: {
            enable: true,
            deleteCallBack: (data) => {
              return this.deleteData(data);
            }
          }
        },
        bottomControls: {
          filter: {
            enable: true,
            option: [
              {
                name: "过滤-已启用",
                filterCallBack(data) {
                  return data.enable;
                }
              },
              {
                name: "过滤-未启用",
                filterCallBack(data) {
                  return !data.enable;
                }
              },
              {
                name: "过滤-当前网站执行",
                filterCallBack(data) {
                  return matchedRuleList.some((it) => it.uuid === data.uuid);
                }
              }
            ]
          }
        }
      });
      ruleView.showView();
    },
    /**
     * 获取模板数据
     */
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
          remark: ""
        }
      };
    },
    /**
     * 获取数据
     */
    getData() {
      return _GM_getValue(this.$key.STORAGE_KEY, []);
    },
    /**
     * 设置数据
     * @param data
     */
    setData(data) {
      _GM_setValue(this.$key.STORAGE_KEY, data);
    },
    /**
     * 添加数据
     * @param data
     */
    addData(data) {
      let localData = this.getData();
      let findIndex = localData.findIndex((item) => item.uuid == data.uuid);
      if (findIndex === -1) {
        localData.push(data);
        _GM_setValue(this.$key.STORAGE_KEY, localData);
        return true;
      } else {
        return false;
      }
    },
    /**
     * 更新数据
     * @param data
     */
    updateData(data) {
      let localData = this.getData();
      let index = localData.findIndex((item) => item.uuid == data.uuid);
      let updateFlag = false;
      if (index !== -1) {
        updateFlag = true;
        localData[index] = data;
      }
      this.setData(localData);
      return updateFlag;
    },
    /**
     * 删除数据
     * @param data
     */
    deleteData(data) {
      let localData = this.getData();
      let index = localData.findIndex((item) => item.uuid == data.uuid);
      let deleteFlag = false;
      if (index !== -1) {
        deleteFlag = true;
        localData.splice(index, 1);
      }
      this.setData(localData);
      return deleteFlag;
    },
    /**
     * 清空数据
     */
    clearData() {
      _GM_deleteValue(this.$key.STORAGE_KEY);
    },
    /**
     * 导出规则
     */
    exportRule(fileName = "rule.json") {
      let allRule = this.getData();
      let blob = new Blob([JSON.stringify(allRule, null, 4)]);
      let blobUrl = window.URL.createObjectURL(blob);
      let $a = domUtils.createElement("a");
      $a.href = blobUrl;
      $a.download = fileName;
      $a.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
      }, 1500);
    },
    /**
     * 导入规则
     */
    importRule() {
      let $alert = __pops.alert({
        title: {
          text: "请选择导入方式",
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                    <div class="import-mode" data-mode="local">本地导入</div>
                    <div class="import-mode" data-mode="network">网络导入</div>
                `
          ),
          html: true
        },
        width: PanelUISize.info.width,
        height: PanelUISize.info.height,
        style: (
          /*css*/
          `
                .import-mode{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `
        )
      });
      let $local = $alert.$shadowRoot.querySelector(
        ".import-mode[data-mode='local']"
      );
      let $network = $alert.$shadowRoot.querySelector(
        ".import-mode[data-mode='network']"
      );
      domUtils.on($local, "click", (event) => {
        utils.preventEvent(event);
        $alert.close();
        let $input = domUtils.createElement("input", {
          type: "file",
          accept: ".json"
        });
        domUtils.on($input, ["propertychange", "input"], (event2) => {
          if (!$input.files?.length) {
            return;
          }
          let uploadFile = $input.files[0];
          let fileReader = new FileReader();
          fileReader.onload = () => {
            let data = utils.toJSON(fileReader.result);
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
        utils.preventEvent(event);
        $alert.close();
        __pops.prompt({
          title: {
            text: "网络导入",
            position: "center"
          },
          content: {
            text: "",
            placeholder: "url",
            focus: true
          },
          btn: {
            ok: {
              callback: async (eventDetails, event2) => {
                let url = eventDetails.text;
                if (utils.isNull(url)) {
                  Qmsg.error("请填入完整的url");
                  return;
                }
                let response = await httpx.get(url);
                if (!response.status) {
                  return;
                }
                let data = utils.toJSON(response.data.responseText);
                if (!Array.isArray(data)) {
                  log.error("不是正确的规则文件", response, data);
                  Qmsg.error("不是正确的规则文件");
                  return;
                }
                this.setData(data);
                eventDetails.close();
                Qmsg.success(`成功导入 ${data.length}条规则`);
              }
            }
          },
          width: PanelUISize.info.width,
          height: "auto"
        });
      });
    }
  };
  const CookieBackUpManager = {
    /**
     * 加密
     * @param text 要加密的文本
     * @param secretKey 密钥
     */
    encrypt(text, secretKey) {
      return CryptoJS.AES.encrypt(text, secretKey).toString();
    },
    /**
     * 解密
     * @param text 要解密的文本
     * @param secretKey 密钥
     */
    decrypt(text, secretKey) {
      const bytes = CryptoJS.AES.decrypt(text, secretKey);
      return bytes.toString(CryptoJS.enc.Utf8);
    },
    /**
     * 格式化导出的cookie
     */
    formatCookie(cookie, type, encodePwd) {
      let cookieText = "";
      if (type === "header_string") {
        cookieText = cookie.map((it) => {
          let cookieValue = it.value;
          return `${it.name}=${cookieValue}; `;
        }).join("");
      } else if (type === "json") {
        cookieText = JSON.stringify(
          {
            api: CookieManager.cookieManagerApiName,
            hostname: window.location.hostname,
            data: cookie
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
    /**
     * 显示导出弹窗
     */
    showExportDialog() {
      let $confirm = __pops.confirm({
        title: {
          text: "导出 Cookie",
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
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
					`
          ),
          html: true
        },
        width: window.innerWidth < 400 ? "88vw" : "400px",
        height: "auto",
        btn: {
          merge: true,
          position: "space-between",
          ok: {
            text: "导出",
            async callback(eventDetails, event) {
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
                target: "_blank"
              });
              $anchor.click();
              setTimeout(() => {
                URL.revokeObjectURL(url);
              }, 500);
              eventDetails.close();
            }
          },
          other: {
            enable: true,
            text: "导出至剪贴板",
            type: "xiaomi-primary",
            async callback(eventDetails, event) {
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
              const status = await utils.setClip(cookieText);
              if (status) {
                Qmsg.success("复制成功");
              } else {
                Qmsg.error("复制失败");
              }
              eventDetails.close();
            }
          }
        },
        style: (
          /*css*/
          `
					${__pops.config.cssText.panelCSS}

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
						background-color: #f9fafb;
						padding: 0.625rem;
						margin: 0.65rem 0px;
						font-size: 12px;
						color: #111827;
					}
					.cookir-format-encode-pwd-container p{
    					color: #6b7280;
						font-size: 12px;
					}
				`
        )
      });
      let $exampleCodeText = $confirm.$shadowRoot.querySelector(
        ".export-example-code-text-container pre"
      );
      let $format_header_string = $confirm.$shadowRoot.querySelector(
        "#cookie-format-header_string"
      );
      let $format_json = $confirm.$shadowRoot.querySelector("#cookie-format-json");
      let $encodePwd = $confirm.$shadowRoot.querySelector("#encode-pwd");
      const DialogConfigManager = {
        key: "cookie-backup-export-dialog-config",
        getConfig() {
          return Panel.getValue(this.key, {
            exportType: "header_string",
            encodePwd: ""
          });
        },
        saveConfig() {
          let exportType = "header_string";
          if ($format_json.checked) {
            exportType = "json";
          }
          Panel.setValue(this.key, {
            exportType,
            encodePwd: domUtils.val($encodePwd)
          });
          dialogConfig = this.getConfig();
        }
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
            secure: false
          },
          {
            name: "PHPSESSID",
            value: "28f2d88ee9322cfd2e4f1e",
            domain: window.location.hostname,
            expires: Date.now() + 1e3 * 60 * 60 * 24 * 30,
            partitioned: false,
            path: "/",
            sameSite: "unspecified",
            secure: false
          },
          {
            name: "csrftoken",
            value: "abcdef123456",
            domain: window.location.hostname,
            expires: Date.now() + 1e3 * 60 * 60 * 24 * 30,
            partitioned: false,
            path: "/",
            sameSite: "unspecified",
            secure: false
          },
          {
            name: "logged_in",
            value: "true",
            domain: window.location.hostname,
            expires: Date.now() + 1e3 * 60 * 60 * 24 * 30,
            partitioned: false,
            path: "/",
            sameSite: "unspecified",
            secure: false
          }
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
            session: false
          }
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
    /**
     * 显示导入弹窗
     */
    showImportDialog() {
      let $confirm = __pops.confirm({
        title: {
          text: "导入 Cookie",
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
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
					`
          ),
          html: true
        },
        width: window.innerWidth < 400 ? "88vw" : "400px",
        height: "auto",
        btn: {
          ok: {
            text: "导入",
            async callback(eventDetails, event) {
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
                      httpOnly: false
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
            }
          }
        },
        style: (
          /*css*/
          `
					${__pops.config.cssText.panelCSS}

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
						background-color: rgb(249 250 251 / 1);
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
				`
        )
      });
      let import_file_text = "";
      let $import_cookie_from_text = $confirm.$shadowRoot.querySelector(
        "#import-cookie-import_from_text"
      );
      let $import_cookie_from_file = $confirm.$shadowRoot.querySelector(
        "#import-cookie-import_from_file"
      );
      $confirm.$shadowRoot.querySelector(
        ".import-cookie-value-container"
      );
      let $importContainer_text = $confirm.$shadowRoot.querySelector(
        ".import-cookie-value-text"
      );
      let $import_text = $importContainer_text.querySelector("textarea");
      let $importContainer_file = $confirm.$shadowRoot.querySelector(
        ".import-cookie-value-file"
      );
      let $import_file = $importContainer_file.querySelector("input");
      let $decodePwd = $confirm.$shadowRoot.querySelector("#decode-pwd");
      const DialogConfigManager = {
        key: "cookie-backup-import-dialog-config",
        getConfig() {
          let config = Panel.getValue(this.key, {
            importType: "import_from_text",
            decodePwd: "",
            value: ""
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
            decodePwd: domUtils.val($decodePwd)
          });
          dialogConfig = this.getConfig();
        }
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
      domUtils.on($import_file, ["change", "input"], (evt) => {
        const file = $import_file.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function(e) {
            const content = e.target.result;
            if (typeof content === "string") {
              import_file_text = content;
              DialogConfigManager.saveConfig();
            }
          };
          reader.readAsText(file);
        }
      });
      domUtils.on($decodePwd, ["input", "propertychange"], async (evt) => {
        DialogConfigManager.saveConfig();
      });
      if (dialogConfig.importType === "import_from_text") {
        $import_cookie_from_text.click();
      } else if (dialogConfig.importType === "import_from_file") {
        $import_cookie_from_file.click();
      }
      domUtils.val($decodePwd, dialogConfig.decodePwd);
    }
  };
  const CookieManagerView = {
    $data: {
      /**
       * 当前的cookie列表
       */
      cookieList: []
    },
    init() {
      this.registerMenu();
    },
    /**
     * 显示视图
     */
    async showView() {
      const $alert = __pops.alert({
        title: {
          text: "Cookie编辑器",
          html: false,
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                    <div class="cookie-wrapper">
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
                        <div class="cookie-list-wrapper">
                        </div>
                    </div>
                `
          ),
          html: true
        },
        btn: {
          ok: {
            enable: false
          }
        },
        mask: {
          enable: true
        },
        drag: true,
        width: PanelUISize.setting.width,
        height: PanelUISize.setting.height,
        style: (
          /*css*/
          `
                ${__pops.config.cssText.panelCSS}
                .cookie-wrapper{
                    display: flex;
                    flex-direction: column;
                    padding: 10px;
                    gap: 10px;
                }
                .cookie-control-wrapper{
                    display: flex;
					flex-wrap: wrap;
                    padding: 0px 10px;
                    gap: 5px;
                    --button-margin-left: 0px;
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
                    align-items: center;
                }
                .cookie-item-group-left{
                    width: 100px;
                    min-width: 100px;
                    max-width: 100px;
                    text-transform: capitalize
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
            `
        )
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
      let createCookieItemElement = (cookieInfo) => {
        const $cookieItem = domUtils.createElement("div", {
          className: "cookie-item",
          innerHTML: (
            /*html*/
            `
                `
          ),
          "data-cookie-info": cookieInfo
        });
        const cookieProperty = [
          {
            leftText: "name",
            rightText: cookieInfo.name
          },
          {
            leftText: "value",
            // 解码值
            rightText: Panel.getValue("decode-cookie-value") ? decodeURIComponent(cookieInfo.value) : encodeURIComponent(cookieInfo.value)
          }
        ];
        if (CookieManager.cookieManagerApiName === "GM_cookie" || CookieManager.cookieManagerApiName === "GM.cookie") {
          cookieInfo = cookieInfo;
          cookieProperty.push(
            {
              leftText: "domain",
              rightText: cookieInfo.domain
            },
            {
              leftText: "path",
              rightText: cookieInfo.path
            },
            {
              leftText: "session",
              rightText: JSON.stringify(cookieInfo.session)
            },
            {
              leftText: "expires",
              rightText: cookieInfo.session ? "会话" : cookieInfo.expirationDate ? new Date(cookieInfo.expirationDate * 1e3).toISOString() : "未知"
            },
            {
              leftText: "httpOnly",
              rightText: JSON.stringify(cookieInfo.httpOnly)
            },
            {
              leftText: "hostOnly",
              rightText: JSON.stringify(cookieInfo.hostOnly)
            },
            {
              leftText: "secure",
              rightText: JSON.stringify(cookieInfo.secure)
            },
            {
              leftText: "sameSite",
              rightText: cookieInfo.sameSite
            }
          );
        } else if (CookieManager.cookieManagerApiName === "cookieStore") {
          cookieInfo = cookieInfo;
          cookieProperty.push(
            {
              leftText: "domain",
              rightText: cookieInfo.domain
            },
            {
              leftText: "path",
              rightText: cookieInfo.path
            },
            {
              leftText: "expires",
              rightText: cookieInfo.expires ? new Date(cookieInfo.expires).toISOString() : "会话"
            },
            {
              leftText: "secure",
              rightText: JSON.stringify(cookieInfo.secure)
            },
            {
              leftText: "sameSite",
              rightText: cookieInfo.sameSite
            }
          );
        }
        cookieProperty.forEach((it) => {
          const $cookieItemGroup = domUtils.createElement("div", {
            className: "cookie-item-group",
            innerHTML: (
              /*html*/
              `
                        <div class="cookie-item-group-left">
                            <p>${it.leftText}</p>
                        </div>
                        <div class="cookie-item-group-right">
                            <p>${it.rightText}</p>
                        </div>
                    `
            )
          });
          domUtils.append($cookieItem, $cookieItemGroup);
        });
        let $cookieItemGroupControl = domUtils.createElement("div", {
          className: "cookie-item-group cookie-item-group-control",
          innerHTML: (
            /*html*/
            `
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
                            ${__pops.config.iconSVG.delete}
                        </div>
                    </div>
                `
          )
        });
        let $cookieItemCopy = $cookieItemGroupControl.querySelector(
          ".cookie-item-group-control-copy"
        );
        let $cookieItemEdit = $cookieItemGroupControl.querySelector(
          ".cookie-item-group-control-edit"
        );
        let $cookieItemDelete = $cookieItemGroupControl.querySelector(
          ".cookie-item-group-control-delete"
        );
        domUtils.on($cookieItemCopy, "click", (event) => {
          utils.preventEvent(event);
          let cookieText = cookieInfo.value;
          utils.setClip(cookieText).then((status) => {
            if (status) {
              Qmsg.success("复制成功");
            } else {
              Qmsg.error("复制失败");
            }
          });
        });
        domUtils.on($cookieItemEdit, "click", (event) => {
          utils.preventEvent(event);
          CookieManagerEditView.showView(cookieInfo, (__cookieInfo__) => {
            let $newCookieItem = createCookieItemElement(__cookieInfo__);
            domUtils.after($cookieItem, $newCookieItem);
            $cookieItem.parentElement?.removeChild($cookieItem);
          });
        });
        domUtils.on($cookieItemDelete, "click", (event) => {
          utils.preventEvent(event);
          let result = confirm("确定删除该Cookie？");
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
      let updateCookieListGroup = async (filterCallBack) => {
        let cookieList = await CookieManager.queryAllCookie();
        domUtils.empty($cookieListWrapper);
        let $fragment = document.createDocumentFragment();
        let excludeSessionCookie = Panel.getValue("exclude-session-cookie");
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
            let filterResult = filterCallBack(cookieInfo);
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
        utils.debounce((event) => {
          let searchText = domUtils.val($search);
          let isNotFilter = searchText.trim() === "";
          let enableRegExp = Panel.getValue("search-config-use-regexp");
          updateCookieListGroup((cookieItem) => {
            if (isNotFilter) {
              return true;
            }
            return enableRegExp ? Boolean(cookieItem.name.match(new RegExp(searchText))) : cookieItem.name.includes(searchText);
          });
        })
      );
      domUtils.listenKeyboard($search, "keypress", (keyName, keyValue, otherCodeList) => {
        if (keyName === "Enter" && otherCodeList.length === 0) {
          triggerUpdateCookieListGroupWithSearchFilter();
        }
      });
      domUtils.on($searchSetting, "click", (event) => {
        utils.preventEvent(event);
        let $settingAlert = __pops.alert({
          title: {
            text: "搜索配置",
            position: "center"
          },
          content: {
            text: "",
            html: true
          },
          btn: {
            ok: {
              enable: false
            }
          },
          drag: true,
          mask: {
            clickEvent: {
              toClose: true
            }
          },
          width: PanelUISize.info.width,
          height: PanelUISize.info.height,
          style: (
            /*css*/
            `
                    ${__pops.config.cssText.panelCSS}

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
                `
          )
        });
        let $content = $settingAlert.$shadowRoot.querySelector(".pops-alert-content");
        let panelHandlerComponents = __pops.config.PanelHandlerComponents();
        let $useRegExp = panelHandlerComponents.createSectionContainerItem_switch(
          UISwitch(
            "启用正则表达式",
            "search-config-use-regexp",
            false,
            void 0,
            "使用正则表达式搜索Cookie名称",
            () => {
              triggerUpdateCookieListGroupWithSearchFilter();
            }
          )
        );
        domUtils.append($content, $useRegExp);
      });
      domUtils.on($refresh, "click", (event) => {
        utils.preventEvent(event);
        triggerUpdateCookieListGroupWithSearchFilter();
      });
      domUtils.on($add, "click", (event) => {
        utils.preventEvent(event);
        CookieManagerEditView.showView(void 0, (__cookieInfo__) => {
          triggerUpdateCookieListGroupWithSearchFilter();
        });
      });
      domUtils.on($export, "click", async (event) => {
        utils.preventEvent(event);
        CookieBackUpManager.showExportDialog();
      });
      domUtils.on($import, "click", async (event) => {
        utils.preventEvent(event);
        CookieBackUpManager.showImportDialog();
      });
      domUtils.on($clearAll, "click", async (event) => {
        utils.preventEvent(event);
        let result = window.confirm("确定清除全部Cookie？");
        if (!result) {
          return;
        }
        const deleteInfo = await CookieManager.deleteAllCookie();
        if (deleteInfo.error) {
          Qmsg.warning(`清除成功：${deleteInfo.success} 失败：${deleteInfo.error}`);
        } else {
          Qmsg.success("清除成功");
        }
        triggerUpdateCookieListGroupWithSearchFilter();
      });
      domUtils.on($ruleManager, "click", (event) => {
        utils.preventEvent(event);
        CookieRule.showView();
      });
      domUtils.on($setting, "click", (event) => {
        utils.preventEvent(event);
        let $settingAlert = __pops.alert({
          title: {
            text: "设置",
            position: "center"
          },
          content: {
            text: "",
            html: true
          },
          btn: {
            ok: {
              enable: false
            }
          },
          drag: true,
          mask: {
            clickEvent: {
              toClose: true
            }
          },
          width: PanelUISize.settingMiddle.width,
          height: PanelUISize.settingMiddle.height,
          style: (
            /*css*/
            `
                    ${__pops.config.cssText.panelCSS}

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
                `
          )
        });
        let $content = $settingAlert.$shadowRoot.querySelector(".pops-alert-content");
        let panelHandlerComponents = __pops.config.PanelHandlerComponents();
        let $useGM_cookie = panelHandlerComponents.createSectionContainerItem_select(
          UISelect(
            "CookieManager Api",
            "cookie-manager-api",
            "document.cookie",
            CookieManagerApiNameList.map((it) => {
              return {
                text: it,
                value: it
              };
            }),
            void 0,
            "操作Cookie的Api函数",
            (event2) => {
              triggerUpdateCookieListGroupWithSearchFilter();
            }
          )
        );
        let $decodeValue = panelHandlerComponents.createSectionContainerItem_switch(
          UISwitch(
            "解码Cookie值",
            "decode-cookie-value",
            false,
            () => {
              triggerUpdateCookieListGroupWithSearchFilter();
            },
            "对Cookie值进行解码"
          )
        );
        let $excludeSessionCookie = panelHandlerComponents.createSectionContainerItem_switch(
          UISwitch(
            "排除Session Cookie",
            "exclude-session-cookie",
            false,
            () => {
              triggerUpdateCookieListGroupWithSearchFilter();
            },
            "过滤掉浏览器会话Cookie"
          )
        );
        domUtils.append($content, [$useGM_cookie, $decodeValue, $excludeSessionCookie]);
      });
      let triggerUpdateCookieListGroupWithSearchFilter = () => {
        domUtils.trigger($search, "input");
      };
      triggerUpdateCookieListGroupWithSearchFilter();
    },
    /**
     * 注册脚本菜单
     */
    registerMenu() {
      const that = this;
      GM_Menu.add({
        key: "cookie_manager_view",
        text: "⚙ Cookie管理",
        autoReload: false,
        isStoreValue: false,
        showText(text, enable) {
          return text;
        },
        callback(data) {
          that.showView();
        }
      });
    }
  };
  const CookieRuleController = {
    init() {
      this.execController();
      domUtils.ready(() => {
        this.execController();
      });
    },
    /**
     * 执行cookie规则处理操作
     */
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
              } else if (cookieManager2.cookieManagerApiName === "GM_cookie" || cookieManager2.cookieManagerApiName === "GM.cookie") {
                let expireTime = cookieInfo.expirationDate;
                if (typeof expireTime === "number" && expireTime * 1e3 - currentTime < checkTime) {
                  cookieInfo.expirationDate = expireTime + checkTime / 1e3;
                  updateFlag = true;
                }
              } else {
                log.error(
                  "未知的cookieManagerApiName",
                  cookieManager2.cookieManagerApiName
                );
              }
              if (updateFlag) {
                await cookieManager2.updateCookie(cookieInfo);
              }
            }
          }
        }
      }
    }
  };
  const UIButton = function(text, description, buttonText, buttonIcon, buttonIsRightIcon, buttonIconIsLoading, buttonType, clickCallBack, afterAddToUListCallBack, disable) {
    let result = {
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
      afterAddToUListCallBack
    };
    Reflect.set(result.attributes, ATTRIBUTE_INIT, () => {
      result.disable = Boolean(
        disable
      );
    });
    return result;
  };
  const Component_Rule = {
    id: "view-rule",
    title: "规则",
    headerTitle: "Cookie操作规则",
    forms: [
      {
        type: "forms",
        text: "",
        forms: [
          UIButton(
            "自定义规则",
            "操作Cookie的规则",
            "管理",
            void 0,
            false,
            false,
            "default",
            () => {
              CookieRule.showView();
            }
          )
        ]
      },
      {
        type: "forms",
        text: "",
        forms: [
          UIButton(
            "数据导入",
            "导入自定义规则数据",
            "导入",
            void 0,
            false,
            false,
            "primary",
            () => {
              CookieRule.importRule();
            }
          ),
          UIButton(
            "数据导出",
            "导出自定义规则数据",
            "导出",
            void 0,
            false,
            false,
            "primary",
            () => {
              CookieRule.exportRule("CookieManagerRule.json");
            }
          )
        ]
      }
    ]
  };
  const Component_Common = {
    id: "view-general",
    title: "通用",
    forms: [
      {
        text: "Toast配置",
        type: "forms",
        forms: [
          UISelect(
            "Toast位置",
            PanelSettingConfig.qmsg_config_position.key,
            PanelSettingConfig.qmsg_config_position.defaultValue,
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
            PanelSettingConfig.qmsg_config_maxnums.key,
            PanelSettingConfig.qmsg_config_maxnums.defaultValue,
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
            PanelSettingConfig.qmsg_config_showreverse.key,
            PanelSettingConfig.qmsg_config_showreverse.defaultValue,
            void 0,
            "修改Toast弹出的顺序"
          )
        ]
      }
    ]
  };
  PanelContent.addContentConfig([Component_Common, Component_Rule]);
  Panel.init();
  CookieManagerView.init();
  CookieRule.init();
  CookieRuleController.init();

})(Qmsg, DOMUtils, Utils, pops, CryptoJS);