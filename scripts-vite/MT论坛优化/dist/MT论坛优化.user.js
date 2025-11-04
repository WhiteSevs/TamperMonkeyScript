// ==UserScript==
// @name         MT论坛优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.11.4
// @author       WhiteSevs
// @description  MT论坛效果增强，如自动签到、自动展开帖子、用户状态查看、美化导航、动态头像上传、最新发表、评论过滤器等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://bbs.binmt.cc/*
// @exclude      /^http(s|)://bbs.binmt.cc/uc_server.*$/
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.9.7/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.7.5/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@3.0.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.6.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.js
// @require      https://fastly.jsdelivr.net/npm/@highlightjs/cdn-assets@11.11.1/highlight.min.js
// @resource     HljsCSS    https://fastly.jsdelivr.net/npm/highlight.js@11.11.1/styles/github-dark.min.css
// @resource     ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.css
// @connect      *
// @grant        GM.cookie
// @grant        GM_addStyle
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

(function (Qmsg, DOMUtils, Utils, pops, hljs, Viewer) {
  "use strict";

  const d = new Set();
  const importCSS = async (t) => {
    d.has(t) ||
      (d.add(t),
      ((a) => {
        function r(n) {
          if (typeof GM_addStyle == "function") return GM_addStyle(n);
          const e = document.createElement("style");
          if ((e.setAttribute("type", "text/css"), e.setAttribute("data-type", "gm-css"), globalThis.trustedTypes)) {
            const c = globalThis.trustedTypes.createPolicy("safe-innerHTML", { createHTML: (i) => i });
            e.innerHTML = c.createHTML(n);
          } else e.innerHTML = n;
          return ((document.head || document.documentElement).appendChild(e), e);
        }
        r(a);
      })(t));
  };

  var _GM = (() => (typeof GM != "undefined" ? GM : void 0))();
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
        DOMUtils.ready(() => {
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
          .then((permissionStatus) => {
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
        let result = await fn(isTimeout);
        if ((typeof result === "boolean" && !result) || isTimeout) {
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
    toStr(data) {
      const undefinedReplacedStr = `__undefined__placeholder__replaced__str__`;
      const dataStr = JSON.stringify(
        data,
        (key, value) => {
          return value === void 0 ? undefinedReplacedStr : value;
        },
        2
      ).replace(new RegExp(`"${undefinedReplacedStr}"`, "g"), "undefined");
      return dataStr;
    },
  };
  const GM_RESOURCE_MAPPING = {
    Viewer: {
      keyName: "ViewerCSS",
      url: "https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css",
    },
    Hljs: {
      keyName: "HljsCSS",
      url: "https://fastly.jsdelivr.net/npm/highlight.js@latest/styles/github-dark.min.css",
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
  const AnyTouch = pops.config.Utils.AnyTouch();
  const DEBUG = false;
  log.config({
    debug: false,
    logMaxCount: 250,
    autoClearConsole: true,
    tag: true,
  });
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
    },
  });
  __pops__.GlobalConfig.setGlobalConfig({
    zIndex: () => {
      const maxZIndex = Utils.getMaxZIndex(void 0, void 0, ($ele) => {
        if ($ele?.classList?.contains("qmsg-shadow-container")) {
          return false;
        }
        if ($ele?.closest("qmsg") && $ele.getRootNode() instanceof ShadowRoot) {
          return false;
        }
      });
      const popsMaxZIndex = pops.config.InstanceUtils.getPopsMaxZIndex().zIndex;
      return Utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
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
  const GM_Menu = new utils.GM_Menu({
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
    },
    Function: {
      apply: _unsafeWindow.Function.prototype.apply,
      call: _unsafeWindow.Function.prototype.call,
    },
    Element: {
      appendChild: _unsafeWindow.Element.prototype.appendChild,
    },
    setTimeout: _unsafeWindow.setTimeout,
  });
  const addStyle = domUtils.addStyle.bind(domUtils);
  const $ = DOMUtils.selector.bind(DOMUtils);
  const $$ = DOMUtils.selectorAll.bind(DOMUtils);
  new utils.GM_Cookie();
  const KEY = "GM_Panel";
  const ATTRIBUTE_INIT = "data-init";
  const ATTRIBUTE_KEY = "data-key";
  const ATTRIBUTE_DEFAULT_VALUE = "data-default-value";
  const ATTRIBUTE_INIT_MORE_VALUE = "data-init-more-value";
  const ATTRIBUTE_PLUGIN_SEARCH_CONFIG = "data-plugin-search-config";
  const PROPS_STORAGE_API = "data-storage-api";
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
    },
    settingBig: {
      get width() {
        return PanelSizeUtil.width < 800 ? "92vw" : "800px";
      },
      get height() {
        return PanelSizeUtil.height < 600 ? "80vh" : "600px";
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
      this.triggerValueChangeListener = this.triggerValueChangeListener.bind(this);
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
      this.triggerValueChangeListener(key, oldValue, value);
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
      this.triggerValueChangeListener(key, oldValue, void 0);
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
    async triggerValueChangeListener(...args) {
      const [key, oldValue, newValue] = args;
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
          if (typeof oldValue !== "undefined" && args.length >= 2) {
            __oldValue = oldValue;
          } else {
            __oldValue = value;
          }
          if (typeof newValue !== "undefined" && args.length > 2) {
            __newValue = newValue;
          } else {
            __newValue = value;
          }
          await data.callback(key, __oldValue, __newValue);
        }
      }
    }
  }
  const PopsPanelStorageApi = new StorageUtils(KEY);
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
            domUtils.listenKeyboard($promptInput, "keydown", (keyName, keyValue, otherCodeList) => {
              if (keyName === "Enter" && otherCodeList.length === 0) {
                const value = domUtils.val($promptInput);
                if (value !== "") {
                  domUtils.trigger($promptOk, "click");
                }
              }
            });
            domUtils.trigger($promptInput, "input");
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
      if (!Panel.isTopWindow()) {
        return;
      }
      GM_Menu.add(this.$data.menuOption);
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
    isTopWindow() {
      return _unsafeWindow.top === _unsafeWindow.self;
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
          log.warn(["请先配置键", config]);
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
        log.warn("请检查该key(已存在): " + key);
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
    addValueChangeListener(key, callback) {
      const listenerId = PopsPanelStorageApi.addValueChangeListener(key, (__key, __newValue, __oldValue) => {
        callback(key, __oldValue, __newValue);
      });
      return listenerId;
    },
    removeValueChangeListener(listenerId) {
      PopsPanelStorageApi.removeValueChangeListener(listenerId);
    },
    triggerMenuValueChange(key, newValue, oldValue) {
      PopsPanelStorageApi.triggerValueChangeListener(key, oldValue, newValue);
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
          if (typeof args === "object" && args != null) {
            if (args instanceof Element) {
              resultValueList.push(args);
            } else {
              const { $css, destory } = args;
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
            resultValueList.push(args);
          }
        }
        for (const it of resultValueList) {
          if (it == null) {
            continue;
          }
          if (it instanceof Element) {
            dynamicMenuStoreValueList.push(it);
            continue;
          }
          if (typeof it === "function") {
            destoryFnList.push(it);
            continue;
          }
        }
        if (enableValue) {
          storeValueList = storeValueList.concat(dynamicMenuStoreValueList);
          destoryFnList = destoryFnList.concat(dynamicDestoryFnList);
        } else {
          execClearStoreStyleElements();
          execDestory();
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
        if (execFlag) {
          const valueList = keyList.map((key) => this.getValue(key));
          const callbackResult = await callback({
            value: isArrayKey ? valueList : valueList[0],
            addStoreValue: (...args) => {
              return addStoreValueCallback(true, args);
            },
          });
          addStoreValueCallback(true, callbackResult);
        } else {
          addStoreValueCallback(false, []);
        }
      };
      once &&
        keyList.forEach((key) => {
          const listenerId = this.addValueChangeListener(key, (key2, newValue, oldValue) => {
            return valueChangeCallback();
          });
          listenerIdList.push(listenerId);
        });
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
          once && that.$data.onceExecMenuData.delete(storageKey);
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
            isReverse && (flag = !flag);
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
    },
    removeUrlChangeWithExecMenuOnceListener(key) {
      key = this.transformKey(key);
      this.$data.urlChangeReloadMenuExecOnce.delete(key);
    },
    hasUrlChangeWithExecMenuOnceListener(key) {
      key = this.transformKey(key);
      return this.$data.urlChangeReloadMenuExecOnce.has(key);
    },
    async triggerUrlChangeWithExecMenuOnceEvent(config) {
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
      let checkHasBottomVersionContentConfig =
        content.findIndex((it) => {
          let isBottom = typeof it.isBottom === "function" ? it.isBottom() : Boolean(it.isBottom);
          return isBottom && it.id === "script-version";
        }) !== -1;
      if (!preventDefaultContentConfig && !checkHasBottomVersionContentConfig) {
        content.push(...PanelContent.getDefaultBottomContentConfig());
      }
      let $panel = __pops__.panel({
        ...{
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
              callback: (details, event) => {
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
            clickCallBack: (originalRun, config) => {
              originalRun();
              this.$data.$panel = null;
            },
          },
          width: PanelUISize.setting.width,
          height: PanelUISize.setting.height,
          drag: true,
          only: true,
        },
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
        domUtils.animationend($el, () => {
          $el.classList.remove(flashingClassName);
        });
        $el.classList.add(flashingClassName);
      };
      const dbclick_callback = (evt) => {
        if (evt.type === "dblclick" && isMobileTouch) {
          return;
        }
        domUtils.preventEvent(evt);
        clickElement = null;
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
          const panelHandlerComponents = __pops__.config.PanelHandlerComponents();
          domUtils.on($item, "click", (clickItemEvent) => {
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
              const child_forms = configItem.views;
              if (child_forms && Array.isArray(child_forms)) {
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
                loopContentConfig(child_forms, deepMenuPath);
              } else {
                let text;
                let description;
                if (configItem.type === "own") {
                  const searchConfig = Reflect.get(configItem.attributes || {}, ATTRIBUTE_PLUGIN_SEARCH_CONFIG);
                  if (searchConfig) {
                    if (typeof searchConfig.text === "string") {
                      text = searchConfig.text;
                    }
                    if (typeof searchConfig.desc === "string") {
                      description = searchConfig.desc;
                    }
                  }
                } else {
                  text = Reflect.get(configItem, "text");
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
      let clickElement = null;
      let isDoubleClick = false;
      let timer = void 0;
      let isMobileTouch = false;
      domUtils.on(
        $panel.$shadowRoot,
        "touchend",
        `aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`,
        (evt, selectorTarget) => {
          isMobileTouch = true;
          clearTimeout(timer);
          timer = void 0;
          if (isDoubleClick && clickElement === selectorTarget) {
            isDoubleClick = false;
            clickElement = null;
            dbclick_callback(evt);
          } else {
            timer = setTimeout(() => {
              isDoubleClick = false;
            }, 200);
            isDoubleClick = true;
            clickElement = selectorTarget;
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
  };
  const MTIdentifyLinks = () => {
    const HANDLER_CLASS_NAME = "texttolink";
    const url_regexp =
      /((https?:\/\/|www\.)[\x21-\x7e]+[\w\/]|(\w[\w._-]+\.(com|cn|org|net|info|tv|cc))(\/[\x21-\x7e]*[\w\/])?|ed2k:\/\/[\x21-\x7e]+\|\/|thunder:\/\/[\x21-\x7e]+=)/gi;
    const handleClearLink = function (event) {
      let targetElement = event.originalTarget ?? event.target;
      let url;
      if (
        null != targetElement &&
        "a" === targetElement.localName &&
        -1 !== targetElement.className.indexOf(HANDLER_CLASS_NAME) &&
        ((url = targetElement.getAttribute("href")),
        typeof url === "string" &&
          0 !== url.indexOf("http") &&
          0 !== url.indexOf("ed2k://") &&
          0 !== url.indexOf("thunder://"))
      ) {
        return targetElement.setAttribute("href", "http://" + targetElement);
      }
    };
    const setLink = function (textNode) {
      if (typeof textNode != "object" || textNode == null) {
        return;
      }
      const textContent = textNode?.textContent;
      const $parent = textNode?.parentNode;
      if ($parent == null) {
        return;
      }
      if (
        -1 === $parent?.className?.indexOf?.(HANDLER_CLASS_NAME) &&
        "#cdata-section" !== textNode.nodeName &&
        typeof textContent === "string"
      ) {
        const modifiedContent = textContent.replace(
          url_regexp,
          `<a href="$1" target="_blank" class="${HANDLER_CLASS_NAME}">$1</a>`
        );
        if (textContent.length !== modifiedContent.length) {
          const spanElement = document.createElement("span");
          domUtils.html(spanElement, modifiedContent);
          const $url = spanElement.querySelector("a");
          const url = $url.href;
          console.log(`识别: ${url}`);
          const isSpanParent = $parent.nodeName.toLowerCase() === "span";
          if (isSpanParent) {
            return $parent.replaceChild($url, textNode);
          } else {
            return $parent.replaceChild(spanElement, textNode);
          }
        }
      }
    };
    const excludedTags =
      "a svg canvas applet input button area pre embed frame frameset head iframe img option map meta noscript object script style textarea code".split(
        " "
      );
    const xpath = `//text()[not(ancestor::${excludedTags.join(") and not(ancestor::")})]`;
    const filter = new RegExp(`^(${excludedTags.join("|")})$`, "i");
    const processLinksInBatches = function (textNodesSnapshot, startIndex) {
      let currentIndex, endIndex;
      if (startIndex + 1e4 < textNodesSnapshot.snapshotLength) {
        let start = (currentIndex = startIndex);
        for (
          endIndex = startIndex + 1e4;
          startIndex <= endIndex ? currentIndex <= endIndex : currentIndex >= endIndex;
          start = startIndex <= endIndex ? ++currentIndex : --currentIndex
        ) {
          setLink(textNodesSnapshot.snapshotItem(start));
        }
        setTimeout(function () {
          return processLinksInBatches(textNodesSnapshot, startIndex + 1e4);
        }, 15);
      } else {
        let start;
        for (
          start = currentIndex = startIndex, endIndex = textNodesSnapshot.snapshotLength;
          startIndex <= endIndex ? currentIndex <= endIndex : currentIndex >= endIndex;
          start = startIndex <= endIndex ? ++currentIndex : --currentIndex
        ) {
          setLink(textNodesSnapshot.snapshotItem(start));
        }
      }
    };
    const linkifyText = function (element) {
      const textNodesSnapshot = document.evaluate(xpath, element, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
      return processLinksInBatches(textNodesSnapshot, 0);
    };
    const observePageChanges = function (rootElement) {
      for (
        const treeWalker = document.createTreeWalker(rootElement, NodeFilter.SHOW_TEXT, {
          acceptNode: function (node) {
            const localName = node?.parentNode?.localName;
            if (!filter.test(localName)) {
              return NodeFilter.FILTER_ACCEPT;
            } else {
              return NodeFilter.FILTER_SKIP;
            }
          },
        });
        treeWalker.nextNode();

      ) {
        setLink(treeWalker.currentNode);
      }
    };
    let lockFn = new utils.LockFunction((mutations) => {
      for (const mutation of mutations) {
        if ("childList" === mutation.type) {
          const addedNodes = mutation.addedNodes;
          for (let nodeIndex = 0; nodeIndex < addedNodes.length; nodeIndex++) {
            const node = addedNodes[nodeIndex];
            observePageChanges(node);
          }
        }
      }
    });
    const initLinkProcessing = function () {
      linkifyText(document.body);
      const mutationObserver = utils.mutationObserver(document.body, {
        config: {
          subtree: true,
          childList: true,
        },
        callback: (mutations) => {
          lockFn.run(mutations);
        },
      });
      return mutationObserver;
    };
    const clearLinkHelper = function (linkElement) {
      const url = linkElement.getAttribute("href");
      if (
        typeof url === "string" &&
        0 !== url.indexOf("http") &&
        0 !== url.indexOf("ed2k://") &&
        0 !== url.indexOf("thunder://")
      ) {
        return linkElement.setAttribute("href", "http://" + url);
      }
    };
    const clearAllLinks = function () {
      const linkElements = Array.from(document.getElementsByClassName(HANDLER_CLASS_NAME));
      for (const $link of linkElements) {
        clearLinkHelper($link);
      }
    };
    document.addEventListener("mouseover", handleClearLink);
    setTimeout(clearAllLinks, 1500);
    setTimeout(initLinkProcessing, 100);
  };
  {
    CommonUtil.setGMResourceCSS(GM_RESOURCE_MAPPING.Viewer);
  }
  {
    CommonUtil.setGMResourceCSS(GM_RESOURCE_MAPPING.Hljs);
  }
  __pops__.GlobalConfig.setGlobalConfig({
    mask: {
      enable: true,
    },
    drag: true,
  });
  const MTRegExp = {
    formhash: /formhash=([0-9a-zA-Z]+)/,
    uid: /uid(=|-)(\d+)/,
    fontSpecial: /<font.*?>|<\/font>|<strike>|<strong>|<i>|<u>|align=".*?"|<br>[\s]*<br>[\s]*<br>/g,
  };
  const MTUtils = {
    getAvatar: (uid, size = "middle") => {
      return `/uc_server/avatar.php?uid=${uid}&size=${size}&ts=1`;
    },
    getCurrentUID() {
      let discuz_uid = _unsafeWindow.discuz_uid;
      if (typeof discuz_uid === "string") {
        return discuz_uid;
      }
      let $exit = $('.sidenv_exit a[href*="uid-"]') || $('#comiis_key a[href*="uid-"]');
      if ($exit) {
        let uidMatch = $exit.href.match(/uid=([0-9]+)/);
        if (uidMatch) {
          return uidMatch[uidMatch.length - 1];
        }
      }
    },
    async getFormHash() {
      let $inputFormHashList = Array.from((top || globalThis).document.querySelectorAll("input[name=formhash]"));
      for (let index = 0; index < $inputFormHashList.length; index++) {
        const $input = $inputFormHashList[index];
        let formHash = $input.value;
        if (formHash) {
          return formHash;
        }
      }
      let $anchorFormHashList = Array.from((top || globalThis).document.querySelectorAll('a[href*="formhash="]'));
      for (let index = 0; index < $anchorFormHashList.length; index++) {
        const $anchorFormHash = $anchorFormHashList[index];
        let anchorFormHashMatch = $anchorFormHash.href.match(MTRegExp.formhash);
        if (anchorFormHashMatch) {
          let formHash = anchorFormHashMatch[anchorFormHashMatch.length - 1];
          if (formHash) {
            return formHash;
          }
        }
      }
      let homeResponse = await httpx.get("/home.php?mod=spacecp", {
        fetch: true,
        allowInterceptConfig: false,
      });
      if (homeResponse.status) {
        let homeText = homeResponse.data.responseText;
        let homeDoc = domUtils.toElement(homeText, true, true);
        let $formhash = homeDoc.querySelector("input[name=formhash]");
        if ($formhash) {
          let formHash = $formhash.value;
          if (utils.isNotNull(formHash)) {
            return formHash;
          }
        }
      } else {
        log.error("请求个人主页获取formhash失败", homeResponse);
      }
    },
    envIsMobile() {
      return (_unsafeWindow.STYLEID || window.STYLEID || (typeof STYLEID !== "undefined" && STYLEID)) === "3";
    },
    getThreadId: (url) => {
      let urlMatch = url.match(/thread-([\d]+)-|&tid=([\d]+)/i);
      if (urlMatch) {
        let forumIdList = urlMatch.filter(Boolean);
        let forumId = forumIdList[forumIdList.length - 1];
        return forumId;
      }
    },
    getForumId(url) {
      let urlMatch = url.match(/&fid=([\d]+)/i);
      if (urlMatch) {
        return urlMatch[urlMatch.length - 1];
      }
    },
    getPostId(url) {
      let urlMatch = url.match(/&pid=([\d]+)/i);
      if (urlMatch) {
        return urlMatch[urlMatch.length - 1];
      }
    },
    getRepquote(url) {
      let urlMatch = url.match(/&repquote=([\d]+)/i);
      if (urlMatch) {
        return urlMatch[urlMatch.length - 1];
      }
    },
  };
  const MTAutoSignIn = {
    $key: {
      sign: "mt-sign-time",
    },
    init() {
      this.sign();
    },
    checkSignInfo() {
      let signInfo = this.getSignInfo();
      let findValue = signInfo.find((it) => {
        return it.hostName === window.location.hostname;
      });
      if (findValue) {
        if (utils.formatTime(Date.now(), "yyyyMMdd") !== utils.formatTime(findValue.time, "yyyyMMdd")) {
          return false;
        }
        return true;
      }
      return false;
    },
    setSignInfo() {
      let signInfo = {
        hostName: window.location.hostname,
        time: Date.now(),
      };
      let localSignInfo = this.getSignInfo();
      let findIndex = localSignInfo.findIndex((it) => {
        return it.hostName === signInfo.hostName;
      });
      if (findIndex !== -1) {
        localSignInfo.splice(findIndex, 1);
      }
      localSignInfo.push(signInfo);
      _GM_setValue(this.$key.sign, localSignInfo);
    },
    getSignInfo() {
      let localSignInfo = _GM_getValue(this.$key.sign, []);
      if (!Array.isArray(localSignInfo)) {
        this.clearSignInfo();
        return [];
      }
      return localSignInfo;
    },
    getHostNameSignInfo(hostName = window.location.hostname) {
      let localSignInfo = this.getSignInfo();
      return localSignInfo.find((it) => {
        return it.hostName === hostName;
      });
    },
    clearSignInfo(hostName) {
      if (typeof hostName === "string") {
        let signInfo = this.getSignInfo();
        let findIndex = signInfo.findIndex((it) => {
          return it.hostName === hostName;
        });
        if (findIndex !== -1) {
          signInfo.splice(findIndex, 1);
        }
        _GM_setValue(this.$key.sign, signInfo);
      } else {
        _GM_deleteValue(this.$key.sign);
      }
    },
    checkLogin() {
      if (MTUtils.envIsMobile()) {
        let mobile_login_exitBtn = $("a[href*='member.php?mod=logging&action=logout']");
        return Boolean(mobile_login_exitBtn);
      } else {
        let pc_login = $("#comiis_key");
        return Boolean(pc_login);
      }
    },
    async sign() {
      let formHash = await MTUtils.getFormHash();
      if (formHash == null) {
        if ($("#comiis_picshowbox")) {
          log.info("当前为评论区的看图模式 ");
          return;
        }
        log.error("自动签到：获取账号formhash失败");
        this.clearSignInfo(window.location.hostname);
        Qmsg.error({
          content: "自动签到：获取账号formhash失败",
        });
        return;
      }
      if (this.checkSignInfo()) {
        log.info("今日已签到");
        return;
      }
      let useFetch = Boolean(Panel.getValue("mt-auto-sign-useFetch"));
      let userAgent = utils.getRandomPCUA();
      let signSuccessCallBack = () => {
        this.setSignInfo();
      };
      let signFailedCallBack = () => {
        this.clearSignInfo(window.location.hostname);
      };
      let unknownSignContentCallback = (content) => {
        let $alert = pops.alert({
          title: {
            text: "未知签到内容",
            position: "center",
          },
          content: {
            text: "",
            html: false,
          },
          width: "88vw",
          height: "300px",
        });
        let $content = $alert.$shadowRoot.querySelector(".pops-alert-content");
        $content.innerText = content;
      };
      let sign_plugin = [
        {
          checkPluginEnableUrl: "/plugin.php?id=k_misign:sign",
          async sign() {
            let searchParamsData = {
              operation: "qiandao",
              format: "button",
              formhash: formHash,
              inajax: 1,
              ajaxtarget: "midaben_sign",
            };
            let response = await httpx.get(`/k_misign-sign.html?${utils.toSearchParamsStr(searchParamsData)}`, {
              fetch: useFetch,
              headers: {
                "User-Agent": userAgent,
              },
              allowInterceptConfig: false,
            });
            if (!response.status) {
              Qmsg.error("签到：网络异常，请求失败", {
                consoleLogContent: true,
              });
              return;
            }
            signSuccessCallBack();
            log.info("签到信息：", response);
            let responseText = response.data.responseText;
            let CDATA = utils.parseCDATA(responseText);
            let CDATAElement = domUtils.toElement(`<div>${CDATA}</div>`, true, false);
            let content = domUtils.text(CDATAElement);
            if (content.includes("需要先登录")) {
              Qmsg.error("签到：请先登录账号", {
                timeout: 3e3,
                consoleLogContent: true,
              });
              signFailedCallBack();
              return;
            } else if (
              content.includes("请稍后再试") ||
              content.includes("您已经被列入黑名单") ||
              content.includes("绑定手机号后才可以签到") ||
              content.includes("您所在用户组不允许使用")
            ) {
              Qmsg.error("签到：" + content, {
                timeout: 5e3,
              });
              return;
            } else if (content.includes("今日已签") || content.includes("今日已经签到")) {
              Qmsg.info("签到：" + content);
              return;
            } else if (responseText.includes("您当前的访问请求当中含有非法字符，已经被系统拒绝")) {
              Qmsg.error("签到: 您当前的访问请求当中含有非法字符，已经被系统拒绝", {
                timeout: 6e3,
              });
              return;
            } else if (useFetch && "location" in utils.toJSON(responseText)) {
              Qmsg.success("签到: 签到成功");
              return;
            }
            let signIn_con = CDATAElement.querySelector(".con");
            let signIn_line = CDATAElement.querySelector(".line");
            if (signIn_con && signIn_line) {
              let conMatch = domUtils.text(signIn_con).match(/([0-9]+)金币/);
              let lineMatch = domUtils.text(signIn_line).match(/([0-9]+)/);
              let con = conMatch[conMatch.length - 1];
              let line = lineMatch[lineMatch.length - 1];
              log.success(`金币${con}，排名${line}`);
              Qmsg.info(
                `
							<div style="display: flex;${!MTUtils.envIsMobile() ? "padding: 20px;" : ""}">
								<div style="align-self: center;margin-right: 20px;">签到</div>
								<div>排名 ${line}<br>金币 ${con}</div>
							</div>`,
                {
                  timeout: 4e3,
                  isHTML: true,
                }
              );
              return;
            }
            unknownSignContentCallback(responseText);
          },
        },
        {
          checkPluginEnableUrl: "/plugin.php?id=dsu_paulsign:sign",
          async sign() {
            let searchParamsData = {
              id: "dsu_paulsign:sign",
              operation: "qiandao",
              infloat: 1,
              inajax: 1,
            };
            let response = await httpx.post(`/plugin.php?${utils.toSearchParamsStr(searchParamsData)}`, {
              data: {
                formhash: formHash,
                qdxq: "kx",
                qdmode: 3,
                todaysay: "",
                fastreply: 0,
              },
              processData: true,
              fetch: useFetch,
              headers: {
                "User-Agent": userAgent,
                "Content-Type": "application/x-www-form-urlencoded",
              },
              allowInterceptConfig: false,
            });
            if (!response.status) {
              Qmsg.error("签到：网络异常，请求失败", {
                consoleLogContent: true,
              });
              return;
            }
            signSuccessCallBack();
            log.info("签到信息：", response);
            let responseText = response.data.responseText;
            if (responseText.includes("签到成功")) {
              Qmsg.success("签到：签到成功");
              return;
            }
            if (responseText.includes("今日已经签到")) {
              Qmsg.info("签到：您今日已经签到，请明天再来！");
              return;
            }
            unknownSignContentCallback(responseText);
          },
        },
      ];
      for (let index = 0; index < sign_plugin.length; index++) {
        const signPluginItem = sign_plugin[index];
        let checkResponse = await httpx.get(signPluginItem.checkPluginEnableUrl, {
          fetch: useFetch,
          headers: {
            "User-Agent": utils.getRandomPCUA(),
          },
          allowInterceptConfig: false,
        });
        if (!checkResponse.status) {
          log.error("签到：检查签到插件是否启用的请求失败", checkResponse);
          continue;
        }
        let pluginDoc = domUtils.toElement(checkResponse.data.responseText, true, true);
        if (pluginDoc.querySelector("#messagetext") || checkResponse.data.responseText.includes("插件不存在或已关闭")) {
          log.error(`插件：${signPluginItem.checkPluginEnableUrl} 未启用或不存在`);
          continue;
        }
        await signPluginItem.sign();
        break;
      }
    },
  };
  const MTRouter = {
    isKMiSign() {
      return window.location.pathname.startsWith("/k_misign-sign.html");
    },
    isPost() {
      const searchParams = new URLSearchParams(window.location.search);
      return (
        window.location.pathname.startsWith("/thread-") ||
        (window.location.pathname.startsWith("/forum.php") && searchParams.has("mod", "viewthread"))
      );
    },
    isPage() {
      return Boolean(window.location.pathname.match(/^\/page-([0-9]+).html/g));
    },
    isGuide() {
      const searchParams = new URLSearchParams(window.location.search);
      return window.location.pathname.startsWith("/forum.php") && searchParams.has("mod", "guide");
    },
    isPlate() {
      return Boolean(window.location.pathname.match(/\/forum-[0-9]{1,2}-[0-9]{1,2}.html/g));
    },
    isSearch() {
      return window.location.pathname.startsWith("/search.php");
    },
    isSpace() {
      const searchParams = new URLSearchParams(window.location.search);
      return window.location.pathname.startsWith("/home.php") && searchParams.has("mod", "space");
    },
    isMySpace() {
      const searchParams = new URLSearchParams(window.location.search);
      return (
        window.location.pathname.startsWith("/home.php") &&
        searchParams.has("mod", "space") &&
        searchParams.has("do", "profile") &&
        searchParams.has("mycenter")
      );
    },
    isSpaceWithAt() {
      return window.location.pathname.startsWith("/space-uid-");
    },
    isForumList() {
      const searchParams = new URLSearchParams(window.location.search);
      return window.location.pathname.startsWith("/forum.php") && searchParams.has("forumlist");
    },
    isMessage() {
      const searchParams = new URLSearchParams(window.location.search);
      return (
        window.location.pathname.startsWith("/home.php") &&
        searchParams.has("mod", "space") &&
        searchParams.has("do", "notice")
      );
    },
    isMessageList() {
      const searchParams = new URLSearchParams(window.location.search);
      return (
        window.location.pathname.startsWith("/home.php") &&
        searchParams.has("mod", "space") &&
        searchParams.has("do", "pm")
      );
    },
    isPointsMall() {
      const searchParams = new URLSearchParams(window.location.search);
      return (
        window.location.pathname.startsWith("/keke_integralmall-keke_integralmall.html") ||
        (window.location.pathname.startsWith("/plugin.php") && searchParams.has("id", "keke_integralmal"))
      );
    },
    isPostPublish() {
      const searchParams = new URLSearchParams(window.location.search);
      return window.location.pathname.startsWith("/forum.php") && searchParams.has("mod", "post");
    },
    isPostPublish_voting() {
      const searchParams = new URLSearchParams(window.location.search);
      return (
        (window.location.pathname.startsWith("/forum.php") && searchParams.has("special", "1")) ||
        searchParams.has("fid", "42")
      );
    },
    isPostPublish_edit() {
      const searchParams = new URLSearchParams(window.location.search);
      return this.isPostPublish() && searchParams.has("action", "edit");
    },
    isPostPublish_newthread() {
      const searchParams = new URLSearchParams(window.location.search);
      return this.isPostPublish() && searchParams.has("action", "newthread");
    },
    isPostPublish_reply() {
      const searchParams = new URLSearchParams(window.location.search);
      return this.isPostPublish() && searchParams.has("action", "reply");
    },
  };
  const MTForumPostRightToolBar = {
    init() {
      domUtils.ready(() => {
        Panel.execMenuOnce("mt-forum-post-quickCollentBtn", () => {
          this.quickCollentBtn();
        });
        Panel.execMenuOnce("mt-forum-post-quickReplyOptimization", () => {
          this.quickReplyOptimization();
        });
      });
    },
    quickCollentBtn() {
      log.info(`【快捷收藏】`);
      domUtils.waitNode("#scrolltop", 1e4).then(async ($scrollTop) => {
        if (!$scrollTop) {
          return;
        }
        let formhash = await MTUtils.getFormHash();
        let threadId = MTUtils.getThreadId(window.location.href);
        let collectUrl = `/home.php?${utils.toSearchParamsStr({
          mod: "spacecp",
          ac: "favorite",
          type: "thread",
          id: threadId,
          formhash,
          infloat: "yes",
          handlekey: "k_favorite",
          inajax: 1,
          ajaxtarget: "fwin_content_k_favorite",
        })}`;
        let $collect = domUtils.createElement("span", {
          innerHTML: `
        <a href="${collectUrl}" 
          id="k_favorite"
          onclick="showWindow(this.id, this.href, 'get', 0);"
          onmouseover="this.title = $('favoritenumber').innerHTML + ' 人收藏'">
          <img src="https://s1.ax1x.com/2020/04/29/JTk3lD.gif"
              height="26" 
              width="26" 
              style="position:absolute;top:10px;left:11px">
        </a>
        `,
        });
        domUtils.prepend($scrollTop, $collect);
      });
    },
    quickReplyOptimization() {
      domUtils.waitNode('#scrolltop a[title="快速回复"]', 1e4).then(($ele) => {
        if (!$ele) {
          return;
        }
        log.info(`快捷回复优化`);
        domUtils.on($ele, "click", function () {
          _unsafeWindow.showWindow("reply", $ele.href);
          log.info(`等待弹窗出现`);
          domUtils.waitNode("#moreconf", 1e4).then(($moreconf) => {
            if (!$moreconf) {
              return;
            }
            log.success(`弹出出现，添加按钮`);
            let $oneKeySpace = domUtils.createElement(
              "button",
              {
                innerText: "一键空格",
                type: "button",
                id: "insertspace2",
              },
              {
                style: "float: left;",
              }
            );
            domUtils.on($oneKeySpace, "click", (event) => {
              domUtils.preventEvent(event);
              domUtils.val($("#postmessage"), domUtils.val($("#postmessage")) + "           ");
            });
            domUtils.append($moreconf, $oneKeySpace);
          });
        });
      });
    },
  };
  const beautifyCss =
    ".pls .avatar img,.avtm img{border-radius:10%}.pls .avatar img{--avatar-size: 90px;width:var(--avatar-size);height:var(--avatar-size)}";
  importCSS(beautifyCss);
  const MTForumPost = {
    $flag: {
      isSetHljsCSS: false,
    },
    init() {
      MTForumPostRightToolBar.init();
      Panel.execMenuOnce("mt-forum-post-autoExpandContent", () => {
        return this.autoExpandContent();
      });
      Panel.execMenuOnce("mt-forum-post-repairImageWidth", () => {
        return this.repairImageWidth();
      });
      Panel.execMenuOnce("mt-forum-post-hideBottomInfoBlock", () => {
        return this.hideBottomInfoBlock();
      });
      domUtils.ready(() => {
        Panel.execMenu("mt-forum-post-removeFontStyle", () => {
          this.removeFontStyle();
        });
        Panel.execMenu("mt-forum-post-removeCommentFontStyle", () => {
          this.removeCommentFontStyle();
        });
        Panel.execMenuOnce("mt-forum-post-loadNextPageComment", () => {
          return this.loadNextPageComment();
        });
        Panel.execMenuOnce("mt-forum-post-codeQuoteOptimization", () => {
          return this.codeQuoteOptimization();
        });
        Panel.execMenuOnce("mt-forum-post-optimizationImagePreview", () => {
          return this.optimizationImagePreview();
        });
        Panel.execMenuOnce("mt-forum-post-interceptionAttachment", () => {
          return this.setAttachmentsClickTip();
        });
        Panel.execMenu("mt-forum-post-detectingUserOnlineStatus", () => {
          this.detectingUserOnlineStatus();
        });
        Panel.execMenu("mt-forum-post-showUserLevel", () => {
          this.showUserLevel();
        });
      });
    },
    autoExpandContent() {
      log.info(`自动展开帖子内容`);
      return [
        addStyle(
          `
				div.comiis_message.bg_f.view_one.b_b.cl.message>div.comiis_messages.comiis_aimg_show.cl{
					max-height:inherit!important;
					overflow-y:inherit!important;
					position:inherit!important
				}
        	`
        ),
        CommonUtil.addBlockCSS(".comiis_lookfulltext_bg", ".comiis_lookfulltext_key"),
      ];
    },
    repairImageWidth() {
      log.info(`修复图片宽度`);
      return addStyle(
        `
        .comiis_messages img{
            max-width: 100% !important;
        }`
      );
    },
    removeFontStyle() {
      let $messageTable = $(".comiis_a.comiis_message_table");
      if (!$messageTable) {
        return;
      }
      log.info(`移除帖子字体效果`);
      domUtils.html($messageTable, domUtils.html($messageTable).replace(MTRegExp.fontSpecial, ""));
    },
    removeCommentFontStyle() {
      log.info(`移除评论区的字体效果`);
      let $fontList = $$("font");
      let $postForumMainContent = domUtils.html($(".comiis_postlist .comiis_postli")) || "";
      if ($postForumMainContent !== "") {
        $fontList.forEach(($font) => {
          if (!$postForumMainContent.includes($font.innerHTML)) {
            $font.removeAttribute("color");
            $font.removeAttribute("style");
            $font.removeAttribute("size");
          }
        });
        $$(".comiis_message.message").forEach(($message) => {
          if ($postForumMainContent.includes($message.innerHTML)) {
            domUtils.html($message, domUtils.html($message).replace(MTRegExp.fontSpecial, ""));
            let $next = domUtils.next($message);
            if ($next && $next.localName === "strike") {
              $next.outerHTML = $next.outerHTML.replace(/^<strike>(\n|)/g, "").replace(/<\/strike>$/g, "");
            }
          }
        });
      }
      $$(".comiis_postli.comiis_list_readimgs.nfqsqi").forEach((item) => {
        let $parent = item.parentElement;
        if ($parent && $parent.localName === "strike") {
          $parent.outerHTML = $parent.outerHTML.replace(/^<strike>(\n|)/g, "").replace(/<\/strike>$/g, "");
        }
      });
    },
    loadNextPageComment() {
      log.info(`自动加载下一页评论`);
      if (document.title.includes("提示信息 - MT论坛")) {
        return;
      }
      if ($$(".pgbtn").length == 0) {
        log.warn("没有找到下一页按钮");
        return;
      }
      const getPageInfo = async function (url) {
        let response = await httpx.get(url, {
          fetch: true,
          allowInterceptConfig: false,
        });
        if (!response.status) {
          Qmsg.error("网络异常，请求下一页失败");
          return;
        }
        const pageHTML = utils.parseFromString(response.data.responseText);
        const nextPageBtn = pageHTML.querySelector(".pgbtn a");
        pageHTML.querySelector("#postlistreply")?.remove();
        pageHTML.querySelector(".bm_h.comiis_snvbt")?.remove();
        return {
          url: nextPageBtn ? nextPageBtn.getAttribute("href") : null,
          postlist: pageHTML.querySelector("#postlist"),
          pgbtn: pageHTML.querySelector(".pgbtn"),
          pgs: pageHTML.querySelector(".pgs.mtm"),
        };
      };
      const scrollEvent = async function () {
        const nextURL = $(".pgbtn a").getAttribute("href");
        if (nextURL) {
          let pageInfo = await getPageInfo(nextURL);
          if (pageInfo) {
            if (pageInfo["postlist"]?.querySelector(".comiis_vrx")?.querySelector(".km1")) {
              Object.keys(pageInfo).forEach((it) => {
                pageInfo[it] = null;
              });
              log.warn(`检测到请求的本页内容中存在【楼主】标识，判断为重复页请求`);
            }
            if (!pageInfo["url"] || pageInfo["url"] == nextURL) {
              log.error("最后一页，取消监听");
              domUtils.off(document, ["scroll", "wheel"], lockFn.run);
              domUtils.remove(".pgbtn");
            }
            if (pageInfo["postlist"]) {
              domUtils.append("#postlist", domUtils.html(pageInfo["postlist"]));
            }
            if (pageInfo["pgbtn"]) {
              domUtils.html(".pgbtn", domUtils.html(pageInfo["pgbtn"]));
            }
            if (pageInfo["pgs"]) {
              domUtils.html(".pgs.mtm", domUtils.html(pageInfo["pgs"]));
            }
            MTForumPost.init();
          }
        } else {
          log.error("获取下一页元素失败");
        }
      };
      let lockFn = new utils.LockFunction(async () => {
        if (utils.isNearBottom()) {
          await scrollEvent();
        }
      });
      const listener = domUtils.on(document, ["scroll", "wheel"], lockFn.run);
      return [
        () => {
          listener.off();
        },
      ];
    },
    codeQuoteOptimization() {
      log.info(`代码块优化`);
      function hljs_smali(hljs2) {
        const smali_instr_low_prio = [
          "add",
          "and",
          "cmp",
          "cmpg",
          "cmpl",
          "const",
          "div",
          "double",
          "float",
          "goto",
          "if",
          "int",
          "long",
          "move",
          "mul",
          "neg",
          "new",
          "nop",
          "not",
          "or",
          "rem",
          "return",
          "shl",
          "shr",
          "sput",
          "sub",
          "throw",
          "ushr",
          "xor",
        ];
        const smali_instr_high_prio = [
          "aget",
          "aput",
          "array",
          "check",
          "execute",
          "fill",
          "filled",
          "goto/16",
          "goto/32",
          "iget",
          "instance",
          "invoke",
          "iput",
          "monitor",
          "packed",
          "sget",
          "sparse",
        ];
        const smali_keywords = [
          "transient",
          "constructor",
          "abstract",
          "final",
          "synthetic",
          "public",
          "private",
          "protected",
          "static",
          "bridge",
          "system",
          "interface",
          "enum",
          "annotation",
          "volatile",
          "native",
          "strictfp",
          "synchronized",
        ];
        const smali_types = [
          "void",
          "boolean",
          "byte",
          "short",
          "char",
          "int",
          "long",
          "float",
          "double",
          "boolean\\[",
          "byte\\[",
          "short\\[",
          "char\\[",
          "int\\[",
          "long\\[",
          "float\\[",
          "double\\[",
        ];
        return {
          aliases: ["smali"],
          keywords: {
            keyword: smali_keywords.join(" "),
            built_in: smali_instr_low_prio.concat(smali_instr_high_prio).join(" "),
            type: smali_types.join(" "),
          },
          contains: [
            {
              className: "string",
              begin: '"',
              end: '"',
              relevance: 0,
              contains: [
                hljs2.BACKSLASH_ESCAPE,
                {
                  className: "char.escape",
                  begin: /\\[nrtbf]/,
                  relevance: 0,
                },
              ],
            },
            {
              className: "string",
              begin: "'",
              end: "'",
              relevance: 0,
            },
            hljs2.COMMENT("#", "$", {
              relevance: 0,
            }),
            {
              className: "keyword",
              variants: [
                { begin: "\\s*\\.end\\s[a-zA-Z0-9]*" },
                { begin: "^[ ]*\\.[a-zA-Z]*", relevance: 0 },
                { begin: "\\s:[a-zA-Z_0-9]*", relevance: 0 },
                { begin: "\\s(" + smali_keywords.join("|") + ")" },
              ],
            },
            {
              className: "built_in",
              variants: [
                {
                  begin: "\\s(" + smali_instr_low_prio.join("|") + ")\\s",
                },
                {
                  begin: "\\s(" + smali_instr_low_prio.join("|") + ")((\\-|/)[a-zA-Z0-9]+)+\\s",
                  relevance: 10,
                },
                {
                  begin: "\\s(" + smali_instr_high_prio.join("|") + ")((\\-|/)[a-zA-Z0-9]+)*\\s",
                  relevance: 10,
                },
              ],
            },
            {
              className: "class",
              begin: "L[^(;:\n]*;",
              relevance: 0,
            },
            {
              className: "function",
              begin: "\\s*[a-zA-Z_<][a-zA-Z0-9_<>]*\\s*\\(",
              end: "\\s*\\)",
              excludeBegin: true,
              excludeEnd: true,
              relevance: 0,
              contains: [
                {
                  className: "params",
                  begin: "\\S",
                  endsWithParent: true,
                  relevance: 0,
                },
              ],
            },
            {
              className: "variable",
              begin: "[vp][0-9]+",
              relevance: 0,
            },
            {
              className: "number",
              variants: [
                { begin: "\\b-?0[xX][0-9a-fA-F]+[lL]?" },
                { begin: "\\b-?0[0-7]+[lL]?" },
                { begin: "\\b-?[0-9]+[lLfF]?" },
              ],
              relevance: 0,
            },
            {
              className: "property",
              begin: "\\s*[a-zA-Z_<][a-zA-Z0-9_<>]*\\s*->\\s*[a-zA-Z_<][a-zA-Z0-9_<>]*",
              relevance: 0,
            },
          ],
        };
      }
      hljs.registerLanguage("smali", hljs_smali);
      let lockFn = new utils.LockFunction(
        () => {
          function setElementHighlight($el, language = "java") {
            if (!$el.oldValue) {
              $el.oldValue = $el.textContent;
            }
            domUtils.html($el, hljs.highlight($el.oldValue, { language }).value.replace(/\\n$/gi, ""));
          }
          $$("em[onclick^=copycode]").forEach((coypCodeElement) => {
            if (
              coypCodeElement.nextElementSibling &&
              typeof coypCodeElement.nextElementSibling.className === "string" &&
              coypCodeElement.nextElementSibling.className == "code-select-language"
            ) {
              return;
            }
            const codeText = domUtils.text(coypCodeElement.parentElement.querySelector("div[id^=code]"));
            let codeLanguage = hljs.highlightAuto(codeText).language;
            if (codeText.trim().startsWith("invoke-")) {
              codeLanguage = "smali";
            }
            if (
              codeLanguage &&
              !["bash", "css", "javascript", "json", "java", "kotlin", "python", "smali", "typescript"].includes(
                codeLanguage
              )
            ) {
              codeLanguage = "plaintext";
            }
            const $select = domUtils.createElement("select", {
              className: "code-select-language",
            });
            let selectLanguageList = hljs.listLanguages().sort();
            selectLanguageList = selectLanguageList.concat("自动检测");
            let selectInnerHTML = "";
            selectLanguageList.forEach((languageName) => {
              if (languageName.startsWith("自动检测")) {
                selectInnerHTML += `<option data-value="${codeLanguage}" selected="selected">${languageName}(${codeLanguage})</option>`;
              } else {
                selectInnerHTML += `<option data-value="${languageName}">${languageName}</option>`;
              }
            });
            domUtils.html($select, selectInnerHTML);
            domUtils.on($select, "change", () => {
              let changeCodeLanguage = $select.selectedOptions[0].getAttribute("data-value");
              log.info("切换代码块语言: ", changeCodeLanguage);
              domUtils
                .parent($select)
                .querySelectorAll("li")
                .forEach((liElement) => {
                  setElementHighlight(liElement, changeCodeLanguage);
                });
            });
            domUtils.preventEvent($select, "click");
            domUtils.preventEvent(coypCodeElement, "click");
            coypCodeElement.insertAdjacentElement("afterend", $select);
            domUtils.trigger($select, "change");
          });
          let blockcodeElementList = $$(".blockcode");
          blockcodeElementList.forEach((ele) => (ele.className = "hljs"));
        },
        this,
        500
      );
      const observer = utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true,
        },
        callback: () => {
          lockFn.run();
        },
      });
      return [
        addStyle(
          `
			.hljs{text-align:left}
			.hljs ol{margin:0 0 0 10px;padding:10px 10px}
			.hljs li{padding-left:10px;list-style-type:decimal-leading-zero;font-family:Monaco,Consolas,'Lucida Console','Courier New',serif;font-size:12px;line-height:1.8em}
			.hljs li:hover{background:#2c313c}
			.hljs li::marker{unicode-bidi:isolate;font-variant-numeric:tabular-nums;text-transform:none;text-indent:0!important;text-align:start!important;text-align-last:start!important}
			.hljs em[onclick^=copycode]{color:#fff;background:#246fff;margin:5px 10px;border-radius:3px;padding:0 5px;cursor:pointer;height:32px;line-height:32px;display:inline-flex}
			.hljs .code-select-language{height:32px;line-height:32px;font-size:14px;border:1px solid #5c5c5c;border-radius:5px;text-align:center;outline:0}
		`
        ),
        () => {
          observer.disconnect();
        },
      ];
    },
    optimizationImagePreview() {
      log.info(`图片查看优化`);
      const blackListNoViewIMG = [
        {
          hostName: "avatar-bbs.mt2.cn",
          pathName: "*",
        },
        {
          hostName: "cdn-bbs.mt2.cn",
          pathName: "^(/static(/|//)image|/template)",
        },
        {
          hostName: window.location.hostname,
          pathName: "^(/static(/|//)image|/template)",
        },
        {
          hostName: window.location.hostname,
          pathName: "/uc_server/avatar.php",
        },
      ];
      function viewerViewImage(imgList = [], index = 0) {
        let viewerULNodeHTML = "";
        imgList.forEach((item) => {
          viewerULNodeHTML += `<li><img data-src="${item}"></li>`;
        });
        let viewerULNode = domUtils.createElement("ul", {
          innerHTML: viewerULNodeHTML,
        });
        let viewer = new Viewer(viewerULNode, {
          inline: false,
          url: "data-src",
          zIndex: utils.getMaxZIndex() + 100,
          hidden: () => {
            viewer.destroy();
          },
        });
        viewer.view(index);
        viewer.zoomTo(1);
        viewer.show();
      }
      function handleImageClick() {
        $$("#postlist .comiis_vrx:not([data-isHandlingViewIMG])").forEach((item) => {
          item.setAttribute("data-isHandlingViewIMG", "true");
          let totalImageList = [];
          item.querySelectorAll("img").forEach(($img) => {
            let currentImageUrl = $img.getAttribute("file") || $img.src;
            if (utils.isNull(currentImageUrl)) {
              return;
            }
            let imageUrlHostName = new URL(currentImageUrl).hostname;
            let imageUrlPathName = new URL(currentImageUrl).pathname;
            let $parent = $img.parentElement;
            if ($parent.nodeName.toLowerCase() === "a" && $parent.getAttribute("href") === currentImageUrl) {
              $parent.setAttribute("href", "javascript:;");
              $parent.removeAttribute("target");
            }
            let isInBlackList = false;
            for (let item2 of blackListNoViewIMG) {
              if (imageUrlHostName.indexOf(item2["hostName"]) != -1 && imageUrlPathName.match(item2["pathName"])) {
                isInBlackList = true;
                break;
              }
            }
            if (isInBlackList) {
              return;
            }
            totalImageList.push(currentImageUrl);
            $img.removeAttribute("onclick");
            $img.setAttribute("onclick", "");
            domUtils.on(
              $img,
              "click",
              function (event) {
                domUtils.preventEvent(event);
                log.info("点击图片", $img);
                let viewImageIndex = totalImageList.findIndex((imgUrl) => {
                  return imgUrl == currentImageUrl;
                });
                viewerViewImage(totalImageList, viewImageIndex);
              },
              { capture: true }
            );
          });
        });
      }
      let lockFn = new utils.LockFunction(() => {
        handleImageClick();
      });
      const observer = utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true,
        },
        immediate: true,
        callback: () => {
          lockFn.run();
        },
      });
      return [
        () => {
          observer.disconnect();
        },
      ];
    },
    setAttachmentsClickTip() {
      log.info(`附件点击提醒`);
      function handleClick(item) {
        if (item.hasAttribute("href")) {
          let attachmentId = item.hasAttribute("id") ? item.id : item.parentElement.id;
          let attachmentURL = item.getAttribute("href");
          let attachmentName = item.innerText;
          let $attachmentMenu = $(`#${attachmentId}_menu`);
          if ($attachmentMenu.innerText.indexOf("金币") === -1) {
            return;
          }
          console.log("发现附件", item);
          console.log("该附件是金币附件，拦截！");
          item.setAttribute("data-href", attachmentURL);
          item.style.setProperty("cursor", "pointer");
          item.removeAttribute("href");
          item.innerText = "【已拦截】" + attachmentName;
          item.onclick = function () {
            __pops__.confirm({
              title: {
                text: "提示",
                position: "center",
              },
              content: {
                text: `<br />确定花费2金币下载附件 <a style="color: #507daf !important;">${attachmentName}</a> ？<br /><br />`,
                html: true,
              },
              btn: {
                ok: {
                  callback: (details) => {
                    window.open(attachmentURL, "_blank");
                    details.close();
                  },
                },
              },
              width: "400px",
              height: "200px",
            });
          };
        }
      }
      const observer = utils.mutationObserver(document.documentElement, {
        callback: () => {
          $$(".attnm a").forEach((item) => {
            handleClick(item);
          });
          $$(".comiis_attach a").forEach((item) => {
            handleClick(item);
          });
          $$("span[id*=attach_] a").forEach((item) => {
            handleClick(item);
          });
        },
        immediate: true,
        config: { childList: true, subtree: true },
      });
      return [
        () => {
          observer.disconnect();
        },
      ];
    },
    async detectingUserOnlineStatus() {
      log.info(`探测用户在线状态`);
      Panel.onceExec("mt-forum-post-detectingUserOnlineStatus", () => {
        addStyle(
          `
				.gm-user-status-icon{
					border: 0 !important;
					float: right !important;
					display: block !important;
					width: 40px !important;
					height: 40px !important;
				}
			`
        );
      });
      function getStatusIcon(isOffLine) {
        return domUtils.createElement("img", {
          className: "gm-user-status-icon",
          smilied: isOffLine ? "1353" : "1384",
          loading: "lazy",
          src: isOffLine
            ? "data:image/png;base64,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"
            : "data:image/png;base64,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",
        });
      }
      function setAvatarOnlineStatus($ele, isOffLine) {
        let $icon = getStatusIcon(isOffLine);
        domUtils.prepend($ele, $icon);
      }
      let $favatarList = Array.from($$(".pls.favatar:not([data-is-detectingUserOnlineStatus])"));
      for (let index = 0; index < $favatarList.length; index++) {
        const $favatar = $favatarList[index];
        let $kmfxx = $favatar.querySelector(".comiis_o.cl a.kmfxx");
        if (!$kmfxx) {
          log.error("探测用户在线状态失败，未找到发消息按钮");
          return;
        }
        $favatar.setAttribute("data-is-detectingUserOnlineStatus", "true");
        let sendMessageUrl = $kmfxx.href;
        let response = await httpx.get(sendMessageUrl, {
          fetch: true,
          allowInterceptConfig: false,
        });
        if (!response.status) {
          log.error("探测用户在线状态，中止网络请求探测");
          setAvatarOnlineStatus($favatar, true);
          return;
        }
        let doc = domUtils.toElement(response.data.responseText, true, true);
        let $flb = doc.querySelector(".flb");
        if ($flb) {
          let statusText = domUtils.text($flb)?.trim();
          let isOffLine = statusText.endsWith("……[离线]");
          setAvatarOnlineStatus($favatar, isOffLine);
        } else {
          setAvatarOnlineStatus($favatar, true);
        }
      }
    },
    showUserLevel() {
      log.info(`显示用户等级`);
      $$(".pls.favatar:not([data-show-user-level])").forEach(($userAvatar) => {
        $userAvatar.setAttribute("data-show-user-level", "true");
        let userLevel = "0级";
        let $userInfo = $userAvatar.querySelector(".tns tr");
        let $currentLevelText = $userAvatar.querySelector("p em").innerText;
        let $userLevelText = document.createElement("td");
        $userLevelText.setAttribute("style", "border-left: 1px solid #e3e3e3;");
        switch ($currentLevelText) {
          case "幼儿园":
          case "初级工程师":
            userLevel = "1级";
            break;
          case "小学生":
          case "中级工程师":
            userLevel = "2级";
            break;
          case "初中生":
          case "高级工程师":
            userLevel = "3级";
            break;
          case "高中生":
          case "专家":
            userLevel = "4级";
            break;
          case "大学生":
          case "高级专家":
            userLevel = "5级";
            break;
          case "硕士生":
          case "资深专家":
            userLevel = "6级";
            break;
          case "博士生":
          case "实习版主":
          case "版主":
          case "审核员":
          case "研究员":
            userLevel = "7级";
            break;
          case "博士后":
          case "超级版主":
          case "网站编辑":
          case "高级研究员":
          case "荣誉开发者":
            userLevel = "8级";
            break;
          case "管理员":
          case "信息监察员":
          case "资深研究员":
            userLevel = "9级";
            break;
        }
        domUtils.html($userLevelText, `<p><a class="dj">${userLevel}</a></p>Lv`);
        $userInfo.appendChild($userLevelText);
      });
    },
    hideBottomInfoBlock() {
      log.info(`隐藏底部信息块`);
      return addStyle(
        `
			.pls .favatar>*:not([id^="userinfo"]+div){
				display: none;
			}
			.pls .favatar>div[id^="userinfo"],
			.pls .favatar>div.tns{
				display: block;
			}
			.t_f{
				min-height: 100px !important;
			}
		`
      );
    },
  };
  const MTGuide = {
    init() {
      domUtils.ready(() => {
        Panel.execMenuOnce("mt-guide-beautifyPage", () => {
          this.beautifyPage();
        });
      });
    },
    beautifyPage() {
      log.info(`页面美化`);
      addStyle(
        `
		.xst{font-size:15px}
		td.author_img{width:50px;padding:15px 0}
		td.author_img img{width:40px;height:40px;border-radius:50%}
		.list_author{margin-top:2px;color:#999;font-size:12px}
		.bankuai_tu_by a{color:#999!important}
		.bankuai_tu_by img{height:16px;margin:1px 1px 0 0;vertical-align:top}
		tbody a:hover{text-decoration:none;color:#3498db}
		.byg_th_align em+a{margin-right:5px}
	`
      );
      $$(".bm_c table tbody").forEach(($tbody) => {
        let $common = $tbody.querySelector("th.common");
        let commonHTML = domUtils.html($common);
        let forumUrl = $common.querySelectorAll("a")[0].getAttribute("href");
        let mid = null;
        let $uidAnchor = $tbody.querySelector("td.by>cite>a");
        let uid = $uidAnchor.getAttribute("href").match(/uid-(\d+)/)[1];
        let newHTML = `
			<td class="author_img">
				<a href="space-uid-${uid}.html" c="1" mid="${mid}">
					<img src="${MTUtils.getAvatar(uid, "middle")}">
				</a>
			</td>
			<th colspan="3" class="new byg_th">
				<div class="byg_th_align">
					<em>[${$tbody.querySelector("tr>td.by>a").outerHTML}]</em>
					${commonHTML}
				</div>
				<div class="list_author cl">
					<span class="z">作者:&nbsp;
						${$tbody.querySelectorAll("td.by>cite>a")[0].innerHTML}
						${$tbody.querySelectorAll("td.by>em>span")[0].innerHTML}
					</span>
					<span class="z pipe">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
					<span class="z">最后发表:&nbsp;
						${$tbody.querySelectorAll("td.by>cite>a")[1].innerHTML}&nbsp;&nbsp;&nbsp;
						${$tbody.querySelectorAll("td.by>em>a")[0].innerHTML}
					</span>
					<span class="y bankuai_tu_by">
						<a href="${forumUrl}">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACOUlEQVRYR+1X0XETMRDdtfRP0gFUgG9O+iZUAKmApAJMBZgKMBUQKohTQcy3dHOmApIOzL/lZTbc3eh0ki/kfMkww37Zlkbv7e7bJxnhiQOfGB/+HQJlWR45594AwAkAvAWAo6B6GwBYAsBKCHGVZRl/743eCjDwbrd7T0SzCGgKYIOIi8lk8qWPyF4C1lrO9OtfAIeEuArnSimuTDSSBIqiOCMiBh8ciPghz/NF7KAogUOC16CIeJ7n+UVIokPAGHOCiNeD044cQESvtdYrf6lDwFq7BoCXIxFYa62zJIFKdJdjgHtnnvqibFXAWss9ejcygW9KqbNGGz6YtZbH5tnIBDZKqeMUAQrBieiT1noemYwfQgj2CXDO8Zw3uqkVb4yZI+LH8EylVFP55kNZllPnXLlvszFmhYiveI8/20VRzIjoM/9ORN+11mzXd2Gt7SQlhMiyLGOxty+j2OZ6dKq74Kfnikul1GkFwhXge4JjI4R4wRacGuloBVJsq0N5dqehJRPRnywQec0P1hKvNZXwF5ME/BKPKMQrpdSddjotGMOCw0RCS275QNXnmxFH8VYIMfWv6I4V+4oeoQ0tF+y0wBsdX9WH4tFywKgG6h+rVrDyD3UpRcGTFfAqMfhuqJ00Vca9T7IhbwN2RCnlrHa8xyJwyy9jIlqGD4+DEOCsAGAupbzZbrfP/UOllOu+F3CMxN4WeMb0CxFnsTfd0BHp08CcAaSUi4dkdx9yvX9M7nPIkD3/CfwGBboJMIftEqkAAAAASUVORK5CYII=" />${$tbody.querySelectorAll("td.num>a")[0].innerText}
						</a>&nbsp;
					</span>
					<span class="y bankuai_tu_by" style="margin-right: 20px">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACVElEQVRYR+1W3W3bQAwmTb83GzSdoDnr7rn2BukETSeoO0HtCdpO0GSCeoPYzzrhnA3sDZJ3yywYSIIk352sOIBRIHwTxCM/kh9/EM4seGb/8Abg/8mAc+4yz/NPAHANAFcAcNnizwYA1gCwIKKVUkq+O6UzA4XjHwBw02mtqXBLRPMuIFEAaZrOEFGcv1gQcZYkyTxkwAvAOXex2+3uEVFSfbIw83o4HE6UUo9tYwcAnHNXeZ7/9dS4/nYrtUbE5zozs/BBuPE+gnZDRAKiwY0GgCMif0LEaZIktz5HWZbdMPMvAHjn++/LRAOAtVZY/DEQxRMRjZVSohOUIoPLGAhjjCoNVACstYL8W5AsiF/bkadpOiYiHo1Gq/q7IhN/Ijh/a62n8v8ZgBhCxPvIg63Wuup7D0+kvp/r2bHWSq2DnGDmiTFmWQJYIqIMmZBUiEUhYHyjtf5QGujKKAAstdYTtNYKe4X1QUHE70mSSImi2SqjEr0sy6bM/DNmV/TPD6CI6jVK0OBJVwmYeWWMGR9LwkZ9CxIuaiTbEtF1HxISkRL9k9tQMihs7tOGzDw3xsyqNqwxNzaIHotReswgkpa+CBDwQWtd7ZiDUZznuUQTmoayTKZa6zuf8WIACfODzotpWi0l3zKSw0NARBcLMzeWESJKO7ePlDrOh7bzgxKU2rKUOjIRa2/fP6/zIIDSwmscJHXC+ZAde5IJY7/0DPuOiGYnnWR1h3Ib7vf7MTOXR2mbI3KkrBFxMRgMFr7r50UZ6Bl1b/XOEvS22PPBG4CzZ+AfrntRcuAjU2wAAAAASUVORK5CYII=" />${$tbody.querySelectorAll("td.num>em")[0].innerText}
					</span>
				</div>
			</th>
			`;
        domUtils.html($tbody, newHTML);
      });
    },
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
    isNumber,
    isPassword,
    afterAddToUListCallBack,
    valueChangeCallback
  ) {
    const result = {
      text,
      type: "input",
      isNumber: Boolean(isNumber),
      isPassword: Boolean(isPassword),
      attributes: {},
      props: {},
      description,
      afterAddToUListCallBack,
      getValue() {
        const storageApiValue = this.props[PROPS_STORAGE_API];
        return storageApiValue.get(key, defaultValue);
      },
      callback(event, value, valueAsNumber) {
        const storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
      placeholder,
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
  const UISwitch = function (
    text,
    key,
    defaultValue,
    clickCallBack,
    description,
    afterAddToUListCallBack,
    disabled,
    valueChangeCallBack
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
        const storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
      afterAddToUListCallBack,
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
  class RuleEditView {
    option;
    constructor(option) {
      this.option = option;
    }
    async showView() {
      let $dialog = __pops__.confirm({
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
      let $form = $dialog.$shadowRoot.querySelector(".rule-form-container");
      $dialog.$shadowRoot.querySelector("input[type=submit]");
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
  const MTCommentFilter = {
    $el: {
      isFilterElementHTML: [],
    },
    $key: {
      STORAGE_KEY: "mt-post-comment-filter-rule",
    },
    init() {
      this.registerMenu();
      if (MTRouter.isPost()) {
        let allData = this.getData();
        if (!allData.enable) {
          return;
        }
        let lockFn = new utils.LockFunction(() => {
          this.runFilter(allData);
        });
        utils.mutationObserver(document, {
          config: {
            subtree: true,
            childList: true,
          },
          callback: () => {
            lockFn.run();
          },
        });
      }
    },
    registerMenu() {
      GM_Menu.add({
        key: "comment-filter",
        text: "⚙ 评论过滤器",
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
    runFilter(filterData) {
      let isBlackListUser = function (postForumInfo) {
        for (const userName of filterData["userBlackList"]) {
          if (userName == postForumInfo.userName || userName == postForumInfo.userUID) {
            log.success("评论过滤器：黑名单用户", postForumInfo);
            return true;
          }
        }
        return false;
      };
      let isWhiteListUser = function (postForumInfo) {
        for (const userName of filterData["userWhiteList"]) {
          if (userName === postForumInfo.userName || userName === postForumInfo.userUID) {
            log.success("评论过滤器：白名单用户", postForumInfo);
            return true;
          }
        }
        return false;
      };
      $$(".comiis_vrx").forEach((item) => {
        if (item.querySelector(".plc .pti .authi .show")) {
          return;
        }
        let $name = item.querySelector(".pls .authi a");
        let postForumInfo = {
          userName: $name?.innerText || "",
          userUID: $name?.href?.match(MTRegExp.uid)?.[2]?.trim() || "",
          content: item.querySelector(".plc td.t_f")?.innerText?.trim() || "",
          isAuthor: false,
        };
        if (isWhiteListUser(postForumInfo)) {
          return;
        }
        if (filterData["replyFlag"] && item.querySelector(".quote")) {
          let comiis_quote_Element = item.querySelector(".quote");
          this.$el.isFilterElementHTML.push(comiis_quote_Element.outerHTML);
          comiis_quote_Element.remove();
        }
        if (postForumInfo.isAuthor && !filterData["avatarFlag"]) {
          return;
        }
        if (isBlackListUser(postForumInfo)) {
          this.$el.isFilterElementHTML.push(item.outerHTML);
          item.remove();
          return;
        }
        if (typeof filterData["minLength"] === "number" && filterData["minLength"] > postForumInfo.content.length) {
          return;
        }
        if (
          typeof filterData["keywordLength"] === "number" &&
          filterData["keywordLength"] < postForumInfo.content.length
        ) {
          return;
        }
        for (const keywordItem of filterData["keywords"]) {
          if (typeof keywordItem !== "string") {
            continue;
          }
          let keywordPattern = new RegExp(keywordItem);
          if (postForumInfo.content.match(keywordPattern)) {
            console.log("评论过滤器：", postForumInfo);
            this.$el.isFilterElementHTML.push(item.outerHTML);
            item.remove();
            return;
          }
        }
      });
    },
    showView() {
      const that = this;
      function generateStorageApi(data) {
        return {
          get(key, defaultValue) {
            let localData = that.getData();
            let value = Reflect.get(localData, key, defaultValue);
            if (key === "keywords" || key === "userWhiteList" || key === "userBlackList") {
              value = value.join("\n");
            }
            return value;
          },
          set(key, value) {
            if (key === "keywords" || key === "userWhiteList" || key === "userBlackList") {
              value = value.split("\n").filter((item) => item.trim() != "");
            }
            Reflect.set(data, key, value);
            that.setData(data);
          },
        };
      }
      let panelHandlerComponents = __pops__.config.PanelHandlerComponents();
      let view = new RuleEditView({
        title: "评论过滤器",
        data: () => {
          return this.getData();
        },
        getView: (data) => {
          let $fragment = document.createDocumentFragment();
          let enable_template = UISwitch("启用", "enable", true);
          Reflect.set(enable_template.props, PROPS_STORAGE_API, generateStorageApi(data));
          let $enable = panelHandlerComponents.createSectionContainerItem_switch(enable_template);
          let replyFlag_template = UISwitch("处理回复引用", "replyFlag", false, void 0, "移除引用");
          Reflect.set(replyFlag_template.props, PROPS_STORAGE_API, generateStorageApi(data));
          let $replyFlag = panelHandlerComponents.createSectionContainerItem_switch(replyFlag_template);
          let avatarFlag_template = UISwitch("处理作者评论", "avatarFlag", false);
          Reflect.set(avatarFlag_template.props, PROPS_STORAGE_API, generateStorageApi(data));
          let $avatarFlag = panelHandlerComponents.createSectionContainerItem_switch(avatarFlag_template);
          let viewthreadFlag_template = UISwitch(
            '处理从"搜索页面"或"我的帖子提醒页面"进入的网站',
            "viewthreadFlag",
            false
          );
          Reflect.set(viewthreadFlag_template.props, PROPS_STORAGE_API, generateStorageApi(data));
          let $viewthreadFlag = panelHandlerComponents.createSectionContainerItem_switch(viewthreadFlag_template);
          let minLength_template = UIInput(
            "匹配的评论内容长度最小值",
            "minLength",
            5,
            "小于此长度的评论就算关键字匹配成功了也不会被排除",
            void 0,
            "",
            true
          );
          Reflect.set(minLength_template.props, PROPS_STORAGE_API, generateStorageApi(data));
          let $minLength = panelHandlerComponents.createSectionContainerItem_input(minLength_template);
          let keywordLength = UIInput(
            "匹配的评论内容长度最大值",
            "keywordLength",
            8,
            "大于此长度的评论就算关键字匹配成功了也不会被排除",
            void 0,
            "",
            true
          );
          Reflect.set(keywordLength.props, PROPS_STORAGE_API, generateStorageApi(data));
          let $keywordLength = panelHandlerComponents.createSectionContainerItem_input(keywordLength);
          let keywords_template = UITextArea("评论关键字", "keywords", "", "多个评论关键字换行分割");
          Reflect.set(keywords_template.props, PROPS_STORAGE_API, generateStorageApi(data));
          let $keywords = panelHandlerComponents.createSectionContainerItem_textarea(keywords_template);
          let userBlackList_template = UITextArea("黑名单用户", "userBlackList", "", "多个用户换行分割");
          Reflect.set(userBlackList_template.props, PROPS_STORAGE_API, generateStorageApi(data));
          let $userBlackList = panelHandlerComponents.createSectionContainerItem_textarea(userBlackList_template);
          let userWhiteList_template = UITextArea("白名单用户", "userWhiteList", "", "多个用户换行分割");
          Reflect.set(userWhiteList_template.props, PROPS_STORAGE_API, generateStorageApi(data));
          let $userWhiteList = panelHandlerComponents.createSectionContainerItem_textarea(userWhiteList_template);
          $fragment.append(
            $enable,
            $replyFlag,
            $avatarFlag,
            $viewthreadFlag,
            $minLength,
            $keywordLength,
            $keywords,
            $userBlackList,
            $userWhiteList
          );
          return $fragment;
        },
        btn: {
          merge: true,
          position: "space-between",
          ok: {
            enable: false,
          },
          cancel: {
            enable: true,
            text: "关闭",
          },
          other: {
            enable: true,
            text: `查看已过滤（${this.$el.isFilterElementHTML.length}）`,
            type: "primary",
            callback: (details, event) => {
              __pops__.alert({
                title: {
                  text: "评论过滤器-已过滤",
                  position: "center",
                },
                content: {
                  text: `
                                ${Array.from($$('link[rel="stylesheet"]'))
                                  .map((item) => item.outerHTML)
                                  .join("\n")}

                                ${this.$el.isFilterElementHTML.join("\n")}
                                `,
                  html: true,
                },
                style: `
							.plhin{
								width: 100%;
							}
							td.plc .pi{
								height: auto;
							}
							`,
                width: "88vw",
                height: "80vh",
              });
            },
          },
        },
        dialogCloseCallBack(isSubmit) {},
        onsubmit: ($form, data) => {
          return {
            success: true,
            data,
          };
        },
        style: `
            .pops-panel-item-left-desc-text{
                line-height: normal;
                margin-top: 6px;
                font-size: 0.8em;
                color: rgb(108, 108, 108);
            }
            .pops-panel-item-left-main-text{
                max-width: unset;
            }
            .pops-panel-textarea textarea{
                height: 150px;
            }
            `,
      });
      view.showView();
    },
    getTemplateData() {
      return {
        enable: true,
        avatarFlag: false,
        replyFlag: false,
        viewthreadFlag: false,
        minLength: 5,
        keywordLength: 8,
        keywords: [],
        userBlackList: [],
        userWhiteList: [],
      };
    },
    getData() {
      return _GM_getValue(this.$key.STORAGE_KEY, this.getTemplateData());
    },
    setData(data) {
      _GM_setValue(this.$key.STORAGE_KEY, data);
    },
  };
  class RuleFilterView {
    option;
    $data = {
      isFilteredData: [],
    };
    constructor(option) {
      this.option = option;
    }
    showView() {
      let $alert = __pops__.alert({
        title: {
          text: this.option.title,
          position: "center",
        },
        content: {
          text: `
                <div class="filter-container"></div>
                `,
        },
        btn: {
          ok: {
            text: "关闭",
            type: "default",
          },
        },
        drag: true,
        mask: {
          enable: true,
        },
        width: window.innerWidth > 500 ? "350px" : "80vw",
        height: window.innerHeight > 500 ? "300px" : "70vh",
        style: `
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
            `,
      });
      let $filterContainer = $alert.$shadowRoot.querySelector(".filter-container");
      let $fragment = document.createDocumentFragment();
      this.option.filterOption.forEach((filterOption) => {
        let $button = domUtils.createElement(
          "button",
          {
            innerText: filterOption.name,
          },
          {
            type: "button",
          }
        );
        let execFilterAndCloseDialog = async () => {
          this.$data.isFilteredData = [];
          let allRuleInfo = await this.option.getAllRuleInfo();
          allRuleInfo.forEach(async (ruleInfo) => {
            let filterResult = await filterOption.filterCallBack(ruleInfo.data);
            if (filterResult) {
              domUtils.show(ruleInfo.$el, false);
            } else {
              domUtils.hide(ruleInfo.$el, false);
              this.$data.isFilteredData.push(ruleInfo.data);
            }
          });
          if (typeof this.option.execFilterCallBack === "function") {
            await this.option.execFilterCallBack();
          }
          $alert.close();
        };
        domUtils.on($button, "click", async (event) => {
          domUtils.preventEvent(event);
          if (typeof filterOption.callback === "function") {
            let result = await filterOption.callback(event, execFilterAndCloseDialog);
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
    getFilteredData() {
      return this.$data.isFilteredData;
    }
  }
  class RuleView {
    option;
    constructor(option) {
      this.option = option;
    }
    async showView(filterCallBack) {
      let $popsConfirm = __pops__.confirm({
        title: {
          text: this.option.title,
          position: "center",
        },
        content: {
          text: `
                    <div class="rule-view-container">
                    </div>
                    `,
          html: true,
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
              this.showEditView(false, await this.option.getAddData(), $popsConfirm.$shadowRoot);
            },
          },
          close: {
            enable: true,
            callback(event) {
              $popsConfirm.close();
            },
          },
          cancel: {
            enable: this.option?.bottomControls?.filter?.enable || false,
            type: "default",
            text: "过滤",
            callback: async (details, event) => {
              if (typeof this.option?.bottomControls?.filter?.callback === "function") {
                let result = await this.option.bottomControls.filter.callback();
                if (typeof result === "boolean" && !result) {
                  return;
                }
              }
              let getAllRuleElement = () => {
                return Array.from($popsConfirm.$shadowRoot.querySelectorAll(".rule-view-container .rule-item"));
              };
              let $button = event.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");
              if (domUtils.text($button).includes("取消")) {
                let cancelFilterResult = await this.option?.bottomControls?.filter?.cancelFilterCallback?.({
                  $button,
                  getAllRuleElement,
                });
                if (typeof cancelFilterResult === "boolean" && !cancelFilterResult) {
                  return;
                }
                getAllRuleElement().forEach(($el) => {
                  domUtils.show($el, false);
                });
                domUtils.text($button, "过滤");
              } else {
                let ruleFilterView = new RuleFilterView({
                  title: this.option.bottomControls?.filter?.title ?? "过滤规则",
                  filterOption: this.option.bottomControls?.filter?.option || [],
                  execFilterCallBack: async () => {
                    domUtils.text($button, "取消过滤");
                    await this.option.bottomControls?.filter?.execFilterCallBack?.();
                    const isFilteredData = ruleFilterView.getFilteredData();
                    if (isFilteredData.length) {
                      domUtils.text($button, `取消过滤(${isFilteredData.length})`);
                    }
                  },
                  getAllRuleInfo: () => {
                    return getAllRuleElement().map(($el) => {
                      return {
                        data: this.parseRuleItemElement($el).data,
                        $el,
                      };
                    });
                  },
                });
                ruleFilterView.showView();
              }
            },
          },
          other: {
            enable: this.option?.bottomControls?.clear?.enable || true,
            type: "xiaomi-primary",
            text: `清空所有(${(await this.option.data()).length})`,
            callback: (event) => {
              let $askDialog = __pops__.confirm({
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
        style: `
            ${__pops__.config.cssText.panelCSS}
            
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
      });
      let allData = await this.option.data();
      let changeButtonText = false;
      let isFilteredDataLength = 0;
      for (let index = 0; index < allData.length; index++) {
        let item = allData[index];
        let $ruleItemList = await this.appendRuleItemElement($popsConfirm.$shadowRoot, item);
        let isNotFilterFlag = true;
        if (typeof filterCallBack === "function") {
          isNotFilterFlag = filterCallBack(item);
        } else if (typeof filterCallBack === "number" && !isNaN(filterCallBack)) {
          isNotFilterFlag =
            (await this.option.bottomControls?.filter?.option[filterCallBack]?.filterCallBack(item)) ?? isNotFilterFlag;
        }
        if (!isNotFilterFlag) {
          changeButtonText = true;
          domUtils.hide($ruleItemList, false);
          isFilteredDataLength++;
        }
      }
      if (changeButtonText) {
        let $button = $popsConfirm.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");
        domUtils.text($button, `取消过滤${isFilteredDataLength ? `(${isFilteredDataLength})` : ""}`);
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
            callback: async (detail, event) => {
              detail.close();
              await dialogCloseCallBack(false);
            },
          },
          close: {
            callback: async (detail, event) => {
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
              $parentShadowRoot &&
                (await this.updateRuleItemElement(result.data, $editRuleItemElement, $parentShadowRoot));
            } else {
              $parentShadowRoot && (await this.appendRuleItemElement($parentShadowRoot, result.data));
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
      let $container = $shadowRoot.querySelector(".rule-view-container");
      let $deleteBtn = $shadowRoot.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");
      return {
        $container,
        $deleteBtn,
      };
    }
    parseRuleItemElement($ruleElement) {
      let $enable = $ruleElement.querySelector(".rule-controls-enable");
      let $enableSwitch = $enable.querySelector(".pops-panel-switch");
      let $enableSwitchInput = $enable.querySelector(".pops-panel-switch__input");
      let $enableSwitchCore = $enable.querySelector(".pops-panel-switch__core");
      let $edit = $ruleElement.querySelector(".rule-controls-edit");
      let $delete = $ruleElement.querySelector(".rule-controls-delete");
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
      let name = await this.option.getDataItemName(data);
      let $ruleItem = domUtils.createElement("div", {
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
      let switchCheckedClassName = "pops-panel-switch-is-checked";
      const { $enable, $enableSwitch, $enableSwitchCore, $enableSwitchInput, $delete, $edit } =
        this.parseRuleItemElement($ruleItem);
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
          let $askDialog = __pops__.confirm({
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
                callback: async (popsEvent) => {
                  log.success("删除数据");
                  let flag = await this.option.itemControls.delete.deleteCallBack(data);
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
    async updateRuleContaienrElement($shadowRoot) {
      this.clearContent($shadowRoot);
      const { $container } = this.parseViewElement($shadowRoot);
      let data = await this.option.data();
      await this.appendRuleItemElement($shadowRoot, data);
      await this.updateDeleteAllBtnText($shadowRoot);
    }
    async updateRuleItemElement(data, $oldRuleItem, $shadowRoot) {
      let $newRuleItem = await this.createRuleItemElement(data, $shadowRoot);
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
  const MTProductListingReminder = {
    $key: {
      STORAGE_KEY: "mt-productListingReminder-rule",
    },
    init() {
      this.registerMenu();
      this.runRule();
    },
    registerMenu() {
      GM_Menu.add({
        key: "product-reminder",
        text: "⚙ 商品上架提醒",
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
    async runRule() {
      async function getCurrentProduct() {
        let response = await httpx.get("/keke_integralmall-keke_integralmall.html", {
          allowInterceptConfig: false,
          headers: {
            "User-Agent": utils.getRandomAndroidUA(),
          },
        });
        if (!response.status) {
          Qmsg.error("【积分商城】获取数据失败");
          return;
        }
        let productInfoList = [];
        let doc = domUtils.toElement(response.data.responseText, true, true);
        doc.querySelectorAll(".task-list-wrapper li.col-xs-12").forEach(($taskList) => {
          productInfoList.push({
            name:
              domUtils.text($taskList.querySelector(".mall-info a > *:first-child")) ||
              domUtils.text($taskList.querySelector(".mall-info a")),
            price: domUtils.text($taskList.querySelector(".mall-info span.discount-price i")),
            endTime: domUtils.text($taskList.querySelector(".mall-info #time_hz span.time")),
            remainingQuantity: parseInt(
              $taskList.querySelector(".mall-info .mall-count .count-r")?.innerText?.replace(/仅剩|件/gi, "") || "0"
            ),
          });
        });
        return productInfoList;
      }
      if (MTRouter.isPointsMall()) {
        return;
      }
      let allData = this.getData();
      if (!allData.length) {
        return;
      }
      let productList = await getCurrentProduct();
      if (!productList) {
        return;
      }
      for (const productItem of productList) {
        for (const reminderOption of allData) {
          if (
            reminderOption.enable &&
            productItem["name"].match(new RegExp(reminderOption["productName"], "i")) &&
            !isNaN(productItem["remainingQuantity"]) &&
            productItem["remainingQuantity"] > 0
          ) {
            log.success(`成功匹配对应商品`, reminderOption, productItem);
            __pops__.confirm({
              title: {
                text: "积分商城提醒",
                position: "center",
              },
              content: {
                text: `<br />
                            您设置的商品已上架在积分商城中，当前售价 ${productItem["price"]}金币，仅剩${productItem["remainingQuantity"]}件，是否前往购买？
                            <a style="color: red !important;">(如需关闭提醒，请删除该关键字)</a>
                            <br />`,
                html: true,
              },
              btn: {
                merge: true,
                position: "space-between",
                other: {
                  enable: true,
                  type: "danger",
                  text: "删除提醒",
                  callback: () => {
                    let status = this.deleteData(reminderOption);
                    if (status) {
                      Qmsg.success("删除成功");
                    } else {
                      Qmsg.error("删除失败");
                    }
                  },
                },
                ok: {
                  text: "前往购买",
                  callback: () => {
                    window.location.href = `${window.location.origin}/keke_integralmall-keke_integralmall.html`;
                  },
                },
              },
              width: "300px",
              height: "300px",
            });
            return;
          }
        }
      }
    },
    getTemplateData() {
      return {
        uuid: utils.generateUUID(),
        enable: true,
        name: "",
        productName: "",
      };
    },
    showView() {
      let panelHandlerComponents = __pops__.config.PanelHandlerComponents();
      function generateStorageApi(data) {
        return {
          get(key, defaultValue) {
            return data[key] ?? defaultValue;
          },
          set(key, value) {
            data[key] = value;
          },
        };
      }
      let ruleView = new RuleView({
        title: "商品上架提醒",
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
            },
          },
          edit: {
            enable: true,
            getView: (data, isEdit) => {
              let $fragment = document.createDocumentFragment();
              if (!isEdit) {
                data = this.getTemplateData();
              }
              let enable_template = UISwitch("启用", "enable", true);
              Reflect.set(enable_template.props, PROPS_STORAGE_API, generateStorageApi(data));
              let $enable = panelHandlerComponents.createSectionContainerItem_switch(enable_template);
              let name_template = UIInput("规则名称", "name", "", "", void 0, "必填");
              Reflect.set(name_template.props, PROPS_STORAGE_API, generateStorageApi(data));
              let $name = panelHandlerComponents.createSectionContainerItem_input(name_template);
              let productName_template = UIInput("商品名", "productName", "", "", void 0, "可正则，需手动转义");
              Reflect.set(productName_template.props, PROPS_STORAGE_API, generateStorageApi(data));
              let $productName = panelHandlerComponents.createSectionContainerItem_input(productName_template);
              $fragment.append($enable, $name, $productName);
              return $fragment;
            },
            onsubmit: ($form, isEdit, editData) => {
              let $ulist_li = $form.querySelectorAll(".rule-form-ulist > li");
              let data = this.getTemplateData();
              if (isEdit) {
                data.uuid = editData.uuid;
              }
              $ulist_li.forEach(($li) => {
                let viewConfig = Reflect.get($li, panelHandlerComponents.$data.nodeStoreConfigKey);
                let attrs = Reflect.get(viewConfig, "attributes");
                let storageApi = Reflect.get($li, PROPS_STORAGE_API);
                let key = Reflect.get(attrs, ATTRIBUTE_KEY);
                let defaultValue = Reflect.get(attrs, ATTRIBUTE_DEFAULT_VALUE);
                let value = storageApi.get(key, defaultValue);
                if (Reflect.has(data, key)) {
                  Reflect.set(data, key, value);
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
            },
          },
          delete: {
            enable: true,
            deleteCallBack: (data) => {
              return this.deleteData(data);
            },
          },
        },
      });
      ruleView.showView();
    },
    getData() {
      return _GM_getValue(this.$key.STORAGE_KEY, []);
    },
    setData(data) {
      _GM_setValue(this.$key.STORAGE_KEY, data);
    },
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
    clearData() {
      _GM_deleteValue(this.$key.STORAGE_KEY);
    },
  };
  const blackHomeCSS =
    ".pops-confirm-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.blackhome-user-filter input {\r\n  width: -moz-available;\r\n  width: -webkit-fill-available;\r\n  height: 30px;\r\n  margin: 8px 20px;\r\n  border: 0;\r\n  border-bottom: 1px solid;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n.blackhome-user-filter input:focus-within {\r\n  outline: none;\r\n}\r\n.blackhome-user-list {\r\n  flex: 1;\r\n  overflow-y: auto;\r\n}\r\n.blackhome-user-list .blackhome-user-item {\r\n  margin: 15px 10px;\r\n  padding: 10px;\r\n  border-radius: 8px;\r\n  box-shadow:\r\n    0 0 0.6rem #c8d0e7,\r\n    -0.2rem -0.2rem 0.5rem #fff;\r\n}\r\n.blackhome-user {\r\n  display: flex;\r\n}\r\n.blackhome-user img {\r\n  width: 45px;\r\n  height: 45px;\r\n  border-radius: 45px;\r\n}\r\n.blackhome-user-info {\r\n  margin-left: 10px;\r\n}\r\n.blackhome-user-info p:nth-child(1) {\r\n  margin-bottom: 5px;\r\n}\r\n.blackhome-user-info p:nth-child(2) {\r\n  font-size: 14px;\r\n}\r\n.blackhome-user-action {\r\n  display: flex;\r\n  margin: 10px 0;\r\n}\r\n.blackhome-user-action p:nth-child(1),\r\n.blackhome-user-action p:nth-child(2) {\r\n  border: 1px solid red;\r\n  color: red;\r\n  border-radius: 4px;\r\n  padding: 2px 4px;\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n  place-self: center;\r\n}\r\n.blackhome-user-action p:nth-child(2) {\r\n  border: 1px solid #ff4b4b;\r\n  color: #ff4b4b;\r\n  margin-left: 8px;\r\n}\r\n.blackhome-user-uuid {\r\n  border: 1px solid #ff7600;\r\n  color: #ff7600;\r\n  border-radius: 4px;\r\n  padding: 2px 4px;\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n  width: fit-content;\r\n  width: -moz-fit-content;\r\n  margin: 10px 0;\r\n}\r\n.blackhome-operator {\r\n  padding: 10px;\r\n  background-color: #efefef;\r\n  border-radius: 6px;\r\n}\r\n.blackhome-operator-user {\r\n  display: flex;\r\n}\r\n.blackhome-operator-user img {\r\n  width: 35px;\r\n  height: 35px;\r\n  border-radius: 35px;\r\n}\r\n.blackhome-operator-user p {\r\n  align-self: center;\r\n  margin-left: 10px;\r\n}\r\n.blackhome-operator-user-info {\r\n  margin: 10px 0;\r\n  font-weight: 500;\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n  .blackhome-user-list {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n  }\r\n  .blackhome-user-list .blackhome-user-item {\r\n    flex: 1 1 250px;\r\n    max-width: calc(50% - 10px - 10px);\r\n  }\r\n}\r\n";
  const MTBlackHome = {
    $data: {
      cid: "",
    },
    init() {
      this.registerMenu();
    },
    registerMenu() {
      GM_Menu.add({
        key: "black-home",
        text: "⚙ 小黑屋",
        autoReload: false,
        isStoreValue: false,
        showText(text) {
          return text;
        },
        callback: () => {
          this.showBlackHome();
        },
      });
    },
    async showBlackHome() {
      let $loading = Qmsg.loading("正在获取小黑屋名单中...");
      let blackListInfo = await this.getBlackListInfo("");
      $loading.close();
      if (!blackListInfo) {
        return;
      }
      if (blackListInfo.data.length === 0) {
        Qmsg.error("获取小黑屋名单为空");
        return;
      }
      this.$data.cid = blackListInfo.next_cid;
      let $confirm = __pops__.confirm({
        title: {
          text: "小黑屋名单",
          position: "center",
        },
        content: {
          text: `
                <div class="blackhome-user-filter">
                    <input placeholder="过滤用户名/操作人员/UID(可正则)">
                </div>
                <div class="blackhome-user-list"></div>
                `,
          html: true,
        },
        btn: {
          ok: {
            text: "下一页",
            callback: async () => {
              let $loading2 = Qmsg.loading("正在获取小黑屋名单中...");
              log.info("下一页的cid: ", this.$data.cid);
              let nextBlackListInfo2 = await this.getBlackListInfo(this.$data.cid);
              $loading2.close();
              if (!nextBlackListInfo2) {
                return;
              }
              this.$data.cid = nextBlackListInfo2.next_cid;
              nextBlackListInfo2.data.forEach((item) => {
                let $item = this.createListViewItem(item);
                $list.appendChild($item);
              });
              if (nextBlackListInfo2.data.length === 0) {
                Qmsg.error("获取小黑屋名单为空");
              } else {
                Qmsg.success(`成功获取 ${nextBlackListInfo2.data.length}条数据`);
              }
              domUtils.trigger($filterInput, "input");
            },
          },
          cancel: {
            text: "关闭",
          },
        },
        width: PanelUISize.settingBig.width,
        height: PanelUISize.settingBig.height,
        style: blackHomeCSS,
      });
      let $list = $confirm.$shadowRoot.querySelector(".blackhome-user-list");
      let $filterInput = $confirm.$shadowRoot.querySelector(".blackhome-user-filter input");
      blackListInfo.data.forEach((item) => {
        let $item = this.createListViewItem(item);
        $list.appendChild($item);
      });
      Qmsg.success(`成功获取 ${blackListInfo.data.length}条数据`);
      let isSeaching = false;
      domUtils.on(
        $filterInput,
        ["input", "propertychange"],
        utils.debounce(() => {
          let inputText = $filterInput.value.trim();
          if (isSeaching) {
            return;
          }
          isSeaching = true;
          if (inputText == "") {
            $confirm.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach((item) => {
              item.removeAttribute("style");
            });
            isSeaching = false;
            return;
          }
          $confirm.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach((item) => {
            if (
              item.getAttribute("data-name").match(new RegExp(inputText, "ig")) ||
              item.getAttribute("data-uid").trim().match(new RegExp(inputText, "ig")) ||
              item.getAttribute("data-operator").match(new RegExp(inputText, "ig"))
            ) {
              item.removeAttribute("style");
            } else {
              item.setAttribute("style", "display:none;");
            }
          });
          isSeaching = false;
        })
      );
      let nextBlackListInfo = await this.getBlackListInfo(this.$data.cid);
      if (!nextBlackListInfo) {
        return;
      }
      this.$data.cid = nextBlackListInfo.next_cid;
    },
    async getBlackListInfo(cid = "") {
      let searchParamsData = {
        mod: "misc",
        action: "showdarkroom",
        cid,
        ajaxdata: "json",
      };
      let response = await httpx.get(`/forum.php?${utils.toSearchParamsStr(searchParamsData)}`, {
        headers: {
          "User-Agent": utils.getRandomPCUA(),
        },
        responseType: "json",
      });
      if (!response.status) {
        return;
      }
      let data = utils.toJSON(response.data.responseText);
      let cidSplit = data["message"].split("|");
      let next_cid = cidSplit[cidSplit.length - 1];
      let blackListData = utils.parseObjectToArray(data["data"]);
      let new_blackListData = [];
      let new_blackListData_noTime = [];
      blackListData.forEach((item) => {
        let date = item["dateline"].match(/([0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]*[0-9]{1,2}:[0-9]{1,2})/g);
        if (date == null) {
          let _time_ = parseInt((Date.now() / 1e3).toString());
          let _time_after_count_ = 0;
          let sec_data = item["dateline"].match(/([0-9]+|半)[\s\S]*秒前/);
          let min_data = item["dateline"].match(/([0-9]+|半)[\s\S]*分钟前/);
          let hour_data = item["dateline"].match(/([0-9]+|半)[\s\S]*小时前/);
          let yesterday_time_data = item["dateline"].match(/昨天[\s\S]*(\d{2}):(\d{2})/);
          let before_yesterday_time_data = item["dateline"].match(/前天[\s\S]*(\d{2}):(\d{2})/);
          let day_data = item["dateline"].match(/([0-9]+|半)[\s\S]*天前/);
          if (sec_data) {
            sec_data = sec_data[sec_data.length - 1];
            sec_data = sec_data.replace(/半/g, 0.5);
            sec_data = parseFloat(sec_data);
            _time_after_count_ = _time_ - sec_data;
          } else if (min_data) {
            min_data = min_data[min_data.length - 1];
            min_data = min_data.replace(/半/g, 0.5);
            min_data = parseFloat(min_data);
            _time_after_count_ = _time_ - min_data * 60;
          } else if (hour_data) {
            hour_data = hour_data[hour_data.length - 1];
            hour_data = hour_data.replace(/半/g, 0.5);
            hour_data = parseFloat(hour_data);
            _time_after_count_ = _time_ - hour_data * 60 * 60;
          } else if (yesterday_time_data) {
            let yesterday_hour_data = yesterday_time_data[1];
            let yesterday_min_data = yesterday_time_data[2];
            _time_after_count_ =
              _time_ - 86400 - parseInt(yesterday_hour_data) * 3600 - parseInt(yesterday_min_data) * 60;
          } else if (before_yesterday_time_data) {
            let before_yesterday_hour_data = before_yesterday_time_data[1];
            let before_yesterday_min_data = before_yesterday_time_data[2];
            _time_after_count_ =
              _time_ -
              86400 * 2 -
              parseInt(before_yesterday_hour_data) * 3600 -
              parseInt(before_yesterday_min_data) * 60;
          } else if (day_data) {
            day_data = day_data[day_data.length - 1];
            day_data = day_data.replace(/半/g, 0.5);
            day_data = parseFloat(day_data);
            _time_after_count_ = _time_ - day_data * 60 * 60 * 24;
          }
          item["time"] = parseInt(_time_after_count_.toString()) * 1e3;
          new_blackListData = new_blackListData.concat(item);
          return;
        } else {
          date = date[0];
        }
        item["time"] = utils.formatToTimeStamp(date);
        new_blackListData = new_blackListData.concat(item);
      });
      utils.sortListByProperty(new_blackListData, "time");
      utils.sortListByProperty(new_blackListData_noTime, "time", false);
      new_blackListData = new_blackListData.concat(new_blackListData_noTime);
      return {
        next_cid,
        data: new_blackListData,
      };
    },
    createListViewItem(userInfo) {
      let $item = domUtils.createElement(
        "div",
        {
          className: "blackhome-user-item",
          innerHTML: `
                <div class="blackhome-user-avatar">
                    <div class="blackhome-user">
                    <img src="${MTUtils.getAvatar(userInfo["uid"], "big")}" loading="lazy">
                    <div class="blackhome-user-info">
                        <p>${userInfo["username"]}</p>
                        <p>${userInfo["dateline"]}</p>
                    </div>
                    </div>
                    <div class="blackhome-user-action">
                    <p>${userInfo["action"]}</p>
                    <p>到期: ${userInfo["groupexpiry"]}</p>
                    </div>
                    <div class="blackhome-user-uuid">UID: ${userInfo["uid"]}</div>
                    <div class="blackhome-operator">
                    <div class="blackhome-operator-user">
                        <img loading="lazy" src="${MTUtils.getAvatar(userInfo["operatorid"], "big")}">
                        <p>${userInfo["operator"]}</p>
                    </div>
                    <div class="blackhome-operator-user-info">
                    ${userInfo["reason"]}
                    </div>
                    </div>
                </div>
                `,
        },
        {
          "data-name": userInfo.username,
          "data-uid": userInfo.uid,
          "data-operator": userInfo.operator,
          "data-operator-uid": userInfo.operatorid,
        }
      );
      domUtils.on($item, "click", ".blackhome-user img", function () {
        window.open(`home.php?mod=space&uid=${userInfo.uid}&do=profile`, "_blank");
      });
      domUtils.on($item, "click", ".blackhome-operator-user img", function () {
        window.open(`home.php?mod=space&uid=${userInfo.operatorid}&do=profile`, "_blank");
      });
      return $item;
    },
  };
  const onlineUserCSS =
    '.pops-alert-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.pops-alert-content > .online-user-info {\r\n  text-align: center;\r\n  padding: 0px 6px;\r\n}\r\n.online-user-filter input {\r\n  width: -webkit-fill-available;\r\n  width: -moz-available;\r\n  height: 30px;\r\n  margin: 8px 20px;\r\n  border: 0;\r\n  border-bottom: 1px solid;\r\n}\r\n.online-user-filter input:focus-within {\r\n  outline: none;\r\n}\r\n.online-user-list {\r\n  flex: 1;\r\n  overflow-y: auto;\r\n}\r\n.online-user-list li {\r\n  margin: 18px 0;\r\n}\r\n.online-user {\r\n  display: flex;\r\n  margin: 2px 20px;\r\n  align-items: center;\r\n}\r\n.online-user img[data-avatar] {\r\n  width: 45px;\r\n  height: 45px;\r\n  border-radius: 45px;\r\n}\r\n.online-user-list .online-user-info {\r\n  margin: 2px 14px;\r\n}\r\n.online-user-list .online-user-info p[data-name] {\r\n  margin-bottom: 4px;\r\n}\r\n.online-user-list .online-user-info span[data-sf] {\r\n  border-radius: 4px;\r\n  padding: 2px 4px;\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n}\r\n.online-user-list .online-user-info span[data-uid] {\r\n  border: 1px solid #ff7600;\r\n  color: #ff7600;\r\n  border-radius: 4px;\r\n  padding: 2px 4px;\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n  width: fit-content;\r\n  width: -moz-fit-content;\r\n  margin: 10px 0;\r\n}\r\n.online-user-list .online-user-info span[data-sf="会员"] {\r\n  color: #88b500;\r\n  border: 1px solid #88b500;\r\n}\r\n.online-user-list .online-user-info span[data-sf="版主"] {\r\n  color: #2db5e3;\r\n  border: 1px solid #2db5e3;\r\n}\r\n.online-user-list .online-user-info span[data-sf="超级版主"] {\r\n  color: #e89e38;\r\n  border: 1px solid #e89e38;\r\n}\r\n.online-user-list .online-user-info span[data-sf="管理员"] {\r\n  color: #ff5416;\r\n  border: 1px solid #ff5416;\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n  .online-user-list {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n  }\r\n  .online-user-list .online-item {\r\n    flex: 1 1 250px;\r\n  }\r\n}\r\n';
  const MTOnlineUser = {
    $data: {},
    init() {
      this.registerMenu();
    },
    registerMenu() {
      GM_Menu.add({
        key: "online-user",
        text: "⚙ 在线用户",
        autoReload: false,
        isStoreValue: false,
        showText(text) {
          return text;
        },
        callback: () => {
          this.showOnlineUser();
        },
      });
    },
    async showOnlineUser() {
      let $loading = Qmsg.loading("正在获取在线用户名单中...");
      let onlineUserInfo = await this.getOnlineUserListInfo();
      $loading.close();
      if (!onlineUserInfo) {
        return;
      }
      let $alert = __pops__.alert({
        title: {
          text: "在线用户",
          position: "center",
        },
        content: {
          text: `
                <div class="online-user-info">${onlineUserInfo.totalOnline} 人在线 - ${onlineUserInfo.onlineUser} 会员${onlineUserInfo.invisibleUser == 0 ? "" : `(${onlineUserInfo.invisibleUser}隐身)`} - ${onlineUserInfo.noRegisterUser} 位游客</div>
                <div class="online-user-filter">
                    <input placeholder="过滤用户名/身份/UID(可正则)"></div>
                <div class="online-user-list"></div>
                `,
          html: true,
        },
        btn: {
          ok: {
            text: "关闭",
            type: "default",
          },
        },
        width: PanelUISize.settingBig.width,
        height: PanelUISize.settingBig.height,
        style: onlineUserCSS,
      });
      let $list = $alert.$shadowRoot.querySelector(".online-user-list");
      let $filterInput = $alert.$shadowRoot.querySelector(".online-user-filter input");
      onlineUserInfo.data.forEach((item) => {
        let $item = this.createListViewItem(item);
        $list.appendChild($item);
      });
      Qmsg.success(`成功获取 ${onlineUserInfo.data.length}条数据`);
      let isSeaching = false;
      DOMUtils.on(
        $filterInput,
        ["propertychange", "input"],
        utils.debounce(() => {
          let inputText = $filterInput.value.trim();
          if (isSeaching) {
            return;
          }
          isSeaching = true;
          if (inputText == "") {
            $alert.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach((item) => {
              item.removeAttribute("style");
            });
            isSeaching = false;
            return;
          }
          $alert.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach((item) => {
            if (
              item.getAttribute("data-name").match(new RegExp(inputText, "ig")) ||
              item.getAttribute("data-sf").match(new RegExp(inputText, "ig")) ||
              item.getAttribute("data-uid").match(new RegExp(inputText, "ig"))
            ) {
              item.removeAttribute("style");
            } else {
              item.setAttribute("style", "display:none;");
            }
          });
          isSeaching = false;
        })
      );
    },
    async getOnlineUserListInfo() {
      let searchParamsData = {
        showoldetails: "yes",
      };
      let response = await httpx.get(`/forum.php?${utils.toSearchParamsStr(searchParamsData)}`, {
        headers: {
          "User-Agent": utils.getRandomPCUA(),
        },
      });
      if (!response.status) {
        return;
      }
      let pageHTML = utils.parseFromString(response.data.responseText, "text/html");
      let result = {
        data: [],
        totalOnline: 0,
        onlineUser: 0,
        noRegisterUser: 0,
        invisibleUser: 0,
      };
      let onlineList = pageHTML.querySelectorAll("#onlinelist ul li");
      onlineList.forEach((item) => {
        let uid = item.querySelector("a").getAttribute("href").match("uid-(.+?).html")[1];
        let avatar = MTUtils.getAvatar(uid, "middle");
        let name = item.querySelector("a").innerText;
        let sf = "";
        let space = item.querySelector("a").getAttribute("href");
        let memberSrc = item.querySelector("img").src;
        if (memberSrc.indexOf("online_member") != -1) {
          sf = "会员";
        } else if (memberSrc.indexOf("online_moderator") != -1) {
          sf = "版主";
        } else if (memberSrc.indexOf("online_supermod") != -1) {
          sf = "超级版主";
        } else if (memberSrc.indexOf("online_admin") != -1) {
          sf = "管理员";
        } else {
          sf = "未知身份";
        }
        result.data.push({
          uid,
          avatar,
          name,
          sf,
          space,
        });
      });
      let onlineInfo = pageHTML.querySelector("#online div.bm_h span.xs1").textContent;
      result.totalOnline = utils.parseInt(onlineInfo.match(/([0-9]*)\s*人在线/i), 0);
      result.onlineUser = utils.parseInt(onlineInfo.match(/([0-9]*)\s*会员/i), 0);
      result.noRegisterUser = utils.parseInt(onlineInfo.match(/([0-9]*)\s*位游客/i), 0);
      result.invisibleUser = utils.parseInt(onlineInfo.match(/([0-9]*)\s*隐身/i), 0);
      return result;
    },
    createListViewItem(userInfo) {
      let $item = DOMUtils.createElement(
        "div",
        {
          className: "online-item",
          innerHTML: `
                <div class="online-user">
                    <img data-avatar src="${userInfo["avatar"]}" loading="lazy" class="online-user-avatar">
                    <div class="online-user-info">
                        <p data-name>${userInfo["name"]}</p>
                        <span data-sf="${userInfo["sf"]}">${userInfo["sf"]}</span>
                        <span data-uid>UID: ${userInfo["uid"]}</span>
                    </div>
                </div>
            `,
        },
        {
          "data-name": userInfo.name,
          "data-uid": userInfo.uid,
          "data-sf": userInfo.sf,
        }
      );
      DOMUtils.on($item, "click", ".online-user-avatar", (event) => {
        DOMUtils.preventEvent(event);
        window.open(`home.php?mod=space&uid=${userInfo.uid}&do=profile`, "_blank");
      });
      return $item;
    },
  };
  const MT = {
    $flag: {
      showUserUID_initCSS: false,
    },
    init() {
      Panel.onceExec("mt-MTCommentFilter", () => {
        MTCommentFilter.init();
      });
      if (MTRouter.isPost()) {
        log.info(`Router: 帖子`);
        MTForumPost.init();
      } else if (MTRouter.isGuide()) {
        log.info(`Router: 导读`);
        MTGuide.init();
      } else {
        log.error(`Router: 未适配的链接 ==> ` + window.location.href);
      }
      domUtils.ready(() => {
        Panel.onceExec("mt-MTProductListingReminder", () => {
          MTProductListingReminder.init();
        });
        Panel.onceExec("mt-blackHome", () => {
          MTBlackHome.init();
        });
        Panel.onceExec("mt-onlineUser", () => {
          MTOnlineUser.init();
        });
        Panel.execMenuOnce("mt-addLatestPostBtn", () => {
          return this.addLatestPostBtn();
        });
        Panel.execMenu("mt-auto-sign", () => {
          MTAutoSignIn.init();
        });
        Panel.execMenu("mt-extend-cookie-expire", () => {
          this.extendCookieExpire();
        });
        if (!MTRouter.isPostPublish_edit()) {
          Panel.execMenuOnce("mt-link-text-to-hyperlink", () => {
            return MTIdentifyLinks();
          });
        }
      });
    },
    addLatestPostBtn() {
      log.info(`新增【最新发表】`);
      const $latest_publication = domUtils.createElement("li", {
        id: "latest_publication",
        innerHTML: `
				<a href="/forum.php?mod=guide&view=newthread" hidefocus="true" title="最新发表">最新发表</a>
			`,
      });
      const $link = $latest_publication.querySelector("a");
      domUtils.append("#comiis_nv .wp.comiis_nvbox.cl ul", $latest_publication);
      if (window.location.href.includes("/forum.php?mod=guide&view=newthread")) {
        domUtils.removeClass("#mn_forum_10", "a");
        domUtils.css(
          $link,
          "background",
          'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAADICAYAAAAk7PuyAAAAAXNSR0IArs4c6QAAAGFJREFUWEft1zESgCAQQ9HsVfb+d5RRlLHRVotHS5f5+YHKyymXiRAihKMISBDCNOInJHT39iTkcpkIYUcTCUKYkkKCEJBwTaY6cML5eiNGYiRGYrz9pqyDdbAOqxC/q8MApobR97qxnMwAAAAASUVORK5CYII=") repeat-x 50% -50px'
        );
      }
      return [$latest_publication];
    },
    async extendCookieExpire() {
      log.info(`延长cookie有效期`);
      let cookieList = await _GM.cookie.list({});
      let needExtendCookieNameList = ["_auth", "_saltkey", "_client_created", "_client_token"];
      cookieList.forEach(async (cookieItem) => {
        if (cookieItem.session) {
          return;
        }
        let expireTime = cookieItem.expirationDate;
        let nowTime = Date.now() / 1e3;
        if (expireTime < nowTime) {
          return;
        }
        let _30days = 60 * 60 * 24 * 30;
        if (expireTime - nowTime > _30days) {
          return;
        }
        let flag = needExtendCookieNameList.find((it) => cookieItem.name.endsWith(it));
        if (!flag) {
          return;
        }
        _GM.cookie
          .set({
            name: cookieItem.name,
            value: cookieItem.value,
            expirationDate: cookieItem.expirationDate + _30days,
          })
          .then(() => {
            log.info(`延长Cookie +30天成功：${cookieItem.name}`);
          })
          .catch(() => {
            log.error(`延长Cookie +30天失败：${cookieItem.name}`);
          });
      });
    },
  };
  const UISelect = function (text, key, defaultValue, data, selectCallBack, description, valueChangeCallBack) {
    let selectData = [];
    if (typeof data === "function") {
      selectData = data();
    } else {
      selectData = data;
    }
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
      callback(event, isSelectedValue, isSelectedText) {
        const value = isSelectedValue;
        log.info(`选择：${isSelectedText}`);
        if (typeof selectCallBack === "function") {
          const result2 = selectCallBack(event, value, isSelectedText);
          if (result2) {
            return;
          }
        }
        const storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
      data: selectData,
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
  const UIOwn = function (getLiElementCallBack, initConfig, searchConfig, attr, props, afterAddToUListCallBack) {
    const result = {
      type: "own",
      attributes: {},
      props: {},
      getLiElementCallBack,
      afterAddToUListCallBack,
    };
    {
      Reflect.set(result.attributes, ATTRIBUTE_INIT, () => false);
    }
    if (typeof searchConfig === "object" && searchConfig !== null) {
      Reflect.set(result.attributes, ATTRIBUTE_PLUGIN_SEARCH_CONFIG, searchConfig);
    }
    return result;
  };
  const MTDyncmicAvatar = {
    $upload: {
      small: false,
      middle: false,
      big: false,
    },
    $data: {
      avatarInfo: {
        maxSize: 2097152,
        small: {
          width: 48,
          height: 48,
        },
        middle: {
          width: 120,
          height: 120,
        },
        big: {
          width: 200,
          height: 250,
        },
      },
    },
    $el: {
      $smallUpload: null,
      $middleUpload: null,
      $bigUpload: null,
      $smallStatus: null,
      $middleStatus: null,
      $bigStatus: null,
    },
    $avatar: {
      get small() {
        return MTDyncmicAvatar.$el.$smallUpload.files[0];
      },
      get middle() {
        return MTDyncmicAvatar.$el.$middleUpload.files[0];
      },
      get big() {
        return MTDyncmicAvatar.$el.$bigUpload.files[0];
      },
    },
    init() {
      this.showView();
    },
    showView() {
      const that = this;
      let $confirm = __pops__.confirm({
        title: {
          text: "修改头像",
          position: "center",
        },
        content: {
          text: `
                <div class="avatar-container">
                    <p class="avatar-tip">1. 小头像（图片宽高限制最大尺寸：48×48）</p>
                    <p class="avatar-upload-status" data-type="small">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="small" data-maxwidth="48" data-maxheight="48" accept="image/*">
                </div>
                <div class="avatar-container">
                    <p class="avatar-tip">2. 中头像（图片宽高限制最大尺寸：120×120）</p>
                    <p class="avatar-upload-status" data-type="middle">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="middle" data-maxwidth="120" data-maxheight="120" accept="image/*">
                </div>
                <div class="avatar-container">
                    <p class="avatar-tip">3. 大头像（图片宽高限制最大尺寸：200×250）</p>
                    <p class="avatar-upload-status" data-type="big">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="big" data-maxwidth="200" data-maxheight="250" accept="image/*">
                </div>
                `,
          html: true,
        },
        btn: {
          ok: {
            text: "上传",
            callback: async () => {
              if (!that.$upload.small) {
                Qmsg.error("请上传小头像");
                return;
              }
              if (!that.$upload.middle) {
                Qmsg.error("请上传中头像");
                return;
              }
              if (!that.$upload.big) {
                Qmsg.error("请上传大头像");
                return;
              }
              let $loading = Qmsg.loading("正在处理数据中...");
              try {
                let uploadUrl = await this.getUploadUrl();
                if (uploadUrl == null) {
                  return;
                }
                let formhash = await MTUtils.getFormHash();
                if (formhash == null) {
                  Qmsg.error("获取formhash失败");
                  return;
                }
                let avatarInfo = {
                  big: {
                    base64: await utils.parseFileToBase64(this.$avatar.big),
                  },
                  middle: {
                    base64: await utils.parseFileToBase64(this.$avatar.middle),
                  },
                  small: {
                    base64: await utils.parseFileToBase64(this.$avatar.small),
                  },
                };
                Object.keys(avatarInfo).forEach((keyName) => {
                  let value = avatarInfo[keyName];
                  value.base64 = value.base64.substring(value.base64.indexOf(",") + 1);
                });
                let formData = new FormData();
                formData.append("Filedata", this.$avatar.big || "");
                formData.append("confirm", "确定");
                formData.append("avatar1", avatarInfo.big.base64);
                formData.append("avatar2", avatarInfo.middle.base64);
                formData.append("avatar3", avatarInfo.small.base64);
                formData.append("formhash", formhash);
                log.info(`头像的base64字符串`, avatarInfo);
                let response = await httpx.post(uploadUrl, {
                  data: formData,
                  processData: false,
                  headers: {
                    Accept:
                      "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                    "User-Agent": utils.getRandomPCUA(),
                    Host: window.location.hostname,
                    Origin: window.location.origin,
                    Referer: `${window.location.origin}/home.php?mod=spacecp&ac=avatar`,
                  },
                });
                if (!response.status) {
                  return;
                }
                if (response.data.responseText.indexOf("window.parent.postMessage('success','*')") != -1) {
                  $confirm.close();
                  Qmsg.success("上传成功");
                } else {
                  log.error("上传失败", response);
                  Qmsg.error(response.data.responseText, {
                    timeout: 6e3,
                    isHTML: false,
                  });
                }
              } catch (error) {
                log.error(error);
              } finally {
                $loading.close();
              }
            },
          },
        },
        width: window.innerWidth > 500 ? "500px" : "88vw",
        height: window.innerHeight > 500 ? "500px" : "80vh",
        style: `
            .avatar-container{
                display: flex;
                width: -webkit-fill-available;
                width: -moz-available;
                margin: 6px 10px;
                flex-direction: column;
            }
            .avatar-tip{
                float: left;
                font-weight: bold;
            }
            .avatar-upload-status {
                padding: 0px;
                padding-left: 10px;
                font-weight: bold;
                width: -webkit-fill-available;
                text-align: left;
                font-size: small;
            }
            .avatar-upload-status[data-success="false"]{
                color: red;
            }
            .avatar-upload-status[data-success="true"]{
                color: green;
            }
            .avatar-upload {
                margin: 20px 0px;
            }
            `,
      });
      this.$el.$smallUpload = $confirm.$shadowRoot.querySelector(".avatar-upload[data-type='small']");
      this.$el.$middleUpload = $confirm.$shadowRoot.querySelector(".avatar-upload[data-type='middle']");
      this.$el.$bigUpload = $confirm.$shadowRoot.querySelector(".avatar-upload[data-type='big']");
      this.$el.$smallStatus = $confirm.$shadowRoot.querySelector(".avatar-upload-status[data-type='small']");
      this.$el.$middleStatus = $confirm.$shadowRoot.querySelector(".avatar-upload-status[data-type='middle']");
      this.$el.$bigStatus = $confirm.$shadowRoot.querySelector(".avatar-upload-status[data-type='big']");
      this.setUploadChangeEvent(this.$el.$smallUpload, this.$el.$smallStatus, this.$data.avatarInfo.small, () => {
        this.$upload.small = true;
      });
      this.setUploadChangeEvent(this.$el.$middleUpload, this.$el.$middleStatus, this.$data.avatarInfo.middle, () => {
        this.$upload.middle = true;
      });
      this.setUploadChangeEvent(this.$el.$bigUpload, this.$el.$bigStatus, this.$data.avatarInfo.big, () => {
        this.$upload.big = true;
      });
    },
    setUploadChangeEvent($file, $status, sizeInfo, successCallBack) {
      domUtils.on($file, "change", (event) => {
        if (!$file.files?.length) {
          return;
        }
        domUtils.text($status, "🤡获取文件信息中...");
        $status.removeAttribute("data-success");
        let uploadImageFile = $file.files[0];
        let fileSize = uploadImageFile.size;
        let $image = new Image();
        let reader = new FileReader();
        reader.readAsDataURL(uploadImageFile);
        reader.onload = function (response) {
          $image.src = response.target.result;
          $image.onload = function () {
            if ($image.width > sizeInfo.width || $image.height > sizeInfo.height) {
              $file.value = "";
              $status.setAttribute("data-success", "false");
              domUtils.text($status, `🤡校验失败 ==> 图片尺寸不符合，宽：${$image.width} 高：${$image.height}`);
              return;
            }
            if (fileSize > MTDyncmicAvatar.$data.avatarInfo.maxSize) {
              $file.value = "";
              $status.setAttribute("data-success", "false");
              domUtils.text(
                $status,
                `🤡校验失败 ==> 图片大小不符合：${fileSize}byte，限制最大：${MTDyncmicAvatar.$data.avatarInfo.maxSize}byte`
              );
              return;
            }
            $status.setAttribute("data-success", "true");
            domUtils.text($status, `🤣 通过 宽:${$image.width} 高:${$image.height} 大小(byte):${fileSize}`);
            successCallBack();
          };
        };
      });
    },
    async getUploadUrl() {
      let response = await httpx.get("/home.php?mod=spacecp&ac=avatar", {
        headers: {
          "User-Agent": utils.getRandomPCUA(),
        },
      });
      if (!response.status) {
        return;
      }
      if (utils.isNull(response.data.responseText)) {
        Qmsg.error("动态头像：获取上传地址的内容失败");
        return;
      }
      let dataMatch = response.data.responseText.match(/var[\s]*data[\s]*=[\s]*"(.+?)"/);
      if (dataMatch == null || dataMatch.length != 2) {
        Qmsg.error("动态头像：获取变量data失败");
        return;
      }
      let data = dataMatch[dataMatch.length - 1];
      let data_split = data.split(",");
      let srcIndex = data_split.indexOf("stl_src");
      if (srcIndex === -1) {
        srcIndex = data_split.indexOf("src");
      }
      if (srcIndex === -1) {
        Qmsg.error("动态头像：获取上传地址失败");
        return;
      }
      let uploadUrl = data_split[srcIndex + 1];
      let uploadUrlInst = new URL(uploadUrl);
      uploadUrlInst.pathname = uploadUrlInst.pathname.replace("/images/camera.swf", "/index.php");
      uploadUrlInst.searchParams.delete("inajax");
      uploadUrlInst.searchParams.set("m", "user");
      uploadUrlInst.searchParams.set("a", "rectavatar");
      uploadUrlInst.searchParams.set("base64", "yes");
      uploadUrl = uploadUrlInst.toString();
      log.info(`上传地址：` + uploadUrl);
      return uploadUrl;
    },
  };
  const Component_Common = {
    id: "component-common",
    title: "通用",
    views: [
      {
        text: "",
        type: "container",
        views: [
          {
            text: "Toast配置",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [
                  UISelect(
                    "Toast位置",
                    "qmsg-config-position",
                    "bottom",
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
                  UISwitch("逆序弹出", "qmsg-config-showreverse", false, void 0, "修改Toast弹出的顺序"),
                ],
              },
            ],
          },
        ],
      },
      {
        text: "",
        type: "container",
        views: [
          {
            text: "功能",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [
                  UISwitch("新增【最新发表】", "mt-addLatestPostBtn", true, void 0, "便于快捷跳转"),
                  UISwitch(
                    "文本转超链接",
                    "mt-link-text-to-hyperlink",
                    true,
                    void 0,
                    "自动把符合超链接格式的文字转为超链接"
                  ),
                  UISwitch(
                    "延长登录Cookie过期时间",
                    "mt-extend-cookie-expire",
                    false,
                    void 0,
                    "减少频繁登录账号的问题"
                  ),
                ],
              },
            ],
          },
          {
            type: "deepMenu",
            text: "自动签到",
            views: [
              {
                text: "",
                type: "container",
                views: [
                  UISwitch("启用", "mt-auto-sign", true, void 0, "自动请求签到"),
                  UISwitch("使用fetch请求", "mt-auto-sign-useFetch", false, void 0, ""),
                  UIButton(
                    "签到信息",
                    `上次签到时间：${(() => {
                      let signInfo = MTAutoSignIn.getHostNameSignInfo(window.location.hostname);
                      if (signInfo) {
                        return Utils.formatTime(signInfo.time);
                      } else {
                        return "尚未签到";
                      }
                    })()}`,
                    "清空信息",
                    void 0,
                    void 0,
                    void 0,
                    "primary",
                    (event) => {
                      let $click = event.composedPath()[0];
                      let $desc = $click.closest("li").querySelector(".pops-panel-item-left-desc-text");
                      __pops__.confirm({
                        title: {
                          text: "提示 ",
                          position: "center",
                        },
                        content: {
                          text: "<p>是否清空脚本签到记录的时间?</p>",
                          html: true,
                        },
                        btn: {
                          ok: {
                            enable: true,
                            callback: (event2) => {
                              let hostName = window.location.hostname;
                              MTAutoSignIn.clearSignInfo(hostName);
                              Qmsg.success("删除成功");
                              domUtils.text(
                                $desc,
                                `上次签到时间：${(() => {
                                  let signInfo = MTAutoSignIn.getHostNameSignInfo(hostName);
                                  if (signInfo) {
                                    return Utils.formatTime(signInfo.time);
                                  } else {
                                    return "尚未签到";
                                  }
                                })()}`
                              );
                              event2.close();
                            },
                          },
                        },
                        width: "300px",
                        height: "200px",
                      });
                    }
                  ),
                ],
              },
            ],
          },
          {
            text: "头像",
            type: "deepMenu",
            views: [
              {
                text: "<a href='https://ezgif.com/resize' target='_blank'>Resize Image</a>",
                type: "container",
                views: [
                  UIOwn(
                    ($li) => {
                      const $left = domUtils.createElement("div", {
                        className: "pops-panel-item-left-text",
                        innerHTML: `
											<p class="pops-panel-item-left-main-text">头像（有缓存）</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`,
                      });
                      const $right = domUtils.createElement("div", {
                        className: "pops-panel-avatar-img",
                        innerHTML: `
											<img 
												src="/uc_server/avatar.php?uid=${MTUtils.getCurrentUID()}&size=small"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${MTUtils.getCurrentUID()}&size=middle"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${MTUtils.getCurrentUID()}&size=big"
												class="avatar-img" data-size="big">
											`,
                      });
                      const $style = domUtils.createElement("style", {
                        innerHTML: `
											.avatar-img {
												width: 30px;
												height: 30px;
												border-radius: 50%;
												overflow: hidden;
											}
										`,
                      });
                      $right.querySelector(".avatar-img[data-size='small']");
                      $right.querySelector(".avatar-img[data-size='middle']");
                      $right.querySelector(".avatar-img[data-size='big']");
                      $li.appendChild($left);
                      $li.appendChild($right);
                      $li.appendChild($style);
                      return $li;
                    },
                    void 0,
                    {
                      text: "头像（有缓存）",
                      desc: "小、中、大",
                    }
                  ),
                  UIOwn(
                    ($li) => {
                      const $left = domUtils.createElement("div", {
                        className: "pops-panel-item-left-text",
                        innerHTML: `
											<p class="pops-panel-item-left-main-text">头像</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`,
                      });
                      const $right = domUtils.createElement("div", {
                        className: "pops-panel-avatar-img",
                        innerHTML: `
											<img 
												src="/uc_server/avatar.php?uid=${MTUtils.getCurrentUID()}&size=small&ts=${Date.now()}"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${MTUtils.getCurrentUID()}&size=middle&ts=${Date.now()}"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${MTUtils.getCurrentUID()}&size=big&ts=${Date.now()}"
												class="avatar-img" data-size="big">
											`,
                      });
                      $li.appendChild($left);
                      $li.appendChild($right);
                      return $li;
                    },
                    void 0,
                    {
                      text: "头像",
                      desc: "小、中、大",
                    }
                  ),
                  UIButton(
                    "修改头像",
                    `可以上传gif图片，注意图片最大限制为${Utils.formatByteToSize(
                      MTDyncmicAvatar.$data.avatarInfo.maxSize
                    )}`,
                    "上传",
                    void 0,
                    false,
                    false,
                    "primary",
                    () => {
                      MTDyncmicAvatar.init();
                    }
                  ),
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const Component_ForumPost = {
    id: "component-forum-post",
    title: "帖子",
    views: [
      {
        type: "container",
        text: "",
        views: [
          {
            text: "功能",
            type: "deepMenu",
            views: [
              {
                type: "container",
                text: "",
                views: [
                  UISwitch(
                    "拦截附件",
                    "mt-forum-post-interceptionAttachment",
                    true,
                    void 0,
                    "点击附件时弹出提示框进行确认是否下载附件"
                  ),
                  UISwitch(
                    "图片查看优化",
                    "mt-forum-post-optimizationImagePreview",
                    true,
                    void 0,
                    "使用Viewer查看图片"
                  ),
                  UISwitch("自动加载下一页", "mt-forum-post-loadNextPageComment", true, void 0, "无缝预览下一页"),
                  UISwitch(
                    "代码块优化",
                    "mt-forum-post-codeQuoteOptimization",
                    true,
                    void 0,
                    "自动检测代码块语言并设置关键字高亮"
                  ),
                ],
              },
            ],
          },
          {
            type: "deepMenu",
            text: "用户信息块",
            views: [
              {
                type: "container",
                text: "",
                views: [
                  UISwitch(
                    "探测用户在线状态",
                    "mt-forum-post-detectingUserOnlineStatus",
                    false,
                    void 0,
                    "获取用户在线状态并在用户信息处显示状态表情"
                  ),
                  UISwitch(
                    "显示用户等级",
                    "mt-forum-post-showUserLevel",
                    true,
                    void 0,
                    "在用户信息处显示当前用户的等级"
                  ),
                  UISwitch(
                    "隐藏底部信息块",
                    "mt-forum-post-hideBottomInfoBlock",
                    false,
                    void 0,
                    "包括金币、好评、信誉等信息"
                  ),
                ],
              },
            ],
          },
          {
            type: "deepMenu",
            text: "右侧悬浮工具栏",
            views: [
              {
                type: "container",
                text: "",
                views: [
                  UISwitch(
                    "新增【快捷收藏】",
                    "mt-forum-post-quickCollentBtn",
                    true,
                    void 0,
                    "在右侧悬浮工具栏添加【收藏】按钮，用于快捷收藏"
                  ),
                  UISwitch(
                    "快捷回复优化",
                    "mt-forum-post-quickReplyOptimization",
                    true,
                    void 0,
                    "为快捷回复弹窗底部区域添加【一键空格】按钮"
                  ),
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const Component_Guide = {
    id: "component-guide",
    title: "导读",
    views: [
      {
        type: "container",
        text: "",
        views: [UISwitch("页面美化", "mt-guide-beautifyPage", true, void 0, "美化样式")],
      },
    ],
  };
  PanelContent.addContentConfig([Component_Common, Component_ForumPost, Component_Guide]);
  Panel.init();
  MT.init();
})(Qmsg, DOMUtils, Utils, pops, hljs, Viewer);
