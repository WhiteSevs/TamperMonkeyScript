// ==UserScript==
// @name         ImageViewer
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.11.1
// @author       WhiteSevs
// @description  Viewer看图工具，支持图片翻转、旋转、缩放
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.9.6/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.7.4/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.6.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.6.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.js
// @resource     ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.css
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

(function (Qmsg, DOMUtils, Utils, pops, Viewer) {
  "use strict";

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
          forms: [],
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
        if (config.type === "button" || config.type === "forms" || config.type === "deepMenu") {
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
                      const __formConfig__ = Reflect.get($deepMenu, "__formConfig__");
                      return (
                        typeof __formConfig__ === "object" &&
                        __formConfig__ != null &&
                        __formConfig__.text === target.name
                      );
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
                      const __formConfig__ = Reflect.get($menuItem, "__formConfig__");
                      return __formConfig__ === target.matchedData?.formConfig;
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
              const child_forms = configItem.forms;
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
  const Component_Common = {
    id: "view-general",
    title: "通用",
    forms: [
      {
        type: "forms",
        text: "功能",
        forms: [
          UISwitch("默认规则", "user-rule-default-enable", true, void 0, "如果当前网站没有设置规则，那么使用默认规则"),
        ],
      },
    ],
  };
  const WebSiteStorage = new StorageUtils("user-rule-data");
  const WebSiteDefaultRule = () => {
    return {
      url: "*://*/*",
      selector: "img",
      mode: "handleClickEvent",
      isPreventDefault: true,
      clickEvent: `
      const $image = event.target;
      const url = this.ImageUtils.getImageElementUrl($image);
      resolve({
        "isView": true,
        "imageList": [url],
      });
      `,
    };
  };
  const ImageUtils = {
    getImageElementUrl($el) {
      function isStringNull(target) {
        return target.trim() === "null" || target.trim() === "undefined" || target.trim() === "";
      }
      if ($el == null) {
        return;
      }
      if (typeof $el === "string" && isStringNull($el)) {
        return;
      }
      let url = "";
      if (isStringNull(url)) {
        if ($el.hasAttribute("data-src")) {
          url = $el.getAttribute("data-src");
        }
      }
      if (isStringNull(url)) {
        if ($el.hasAttribute("src")) {
          url = $el.getAttribute("src");
        }
      }
      if (isStringNull(url)) {
        if ($el.hasAttribute("alt")) {
          url = $el.getAttribute("alt");
        }
      }
      if (isStringNull(url)) {
        return;
      }
      return url;
    },
  };
  const ImageViewer = {
    viewIMG(imageUrlList, index = 0) {
      log.info(["查看图片", [imageUrlList, index]]);
      let viewerULHTML = "";
      imageUrlList.forEach((item) => {
        viewerULHTML += `<li><img data-src="${item}" loading="lazy"></li>`;
      });
      let viewerULElement = domUtils.createElement("ul", {
        innerHTML: viewerULHTML,
      });
      let viewer = new Viewer(viewerULElement, {
        inline: false,
        url: "data-src",
        zIndex: utils.getMaxZIndex() + 100,
        hidden: () => {
          viewer.destroy();
        },
      });
      index = parseInt(index.toString());
      if (isNaN(index) || index < 0) {
        index = 0;
      }
      viewer.view(index);
      viewer.zoomTo(1);
      viewer.show();
    },
  };
  const WebSiteRule = {
    $data: {
      get defaultRule() {
        return WebSiteDefaultRule();
      },
      get userRule() {
        return WebSiteStorage.get("user-rule", []);
      },
      currentRule: [],
    },
    execRule() {
      log.info("正在匹配当前网站规则...");
      this.$data.userRule.forEach((rule, index) => {
        if (utils.isNull(rule)) {
          log.error(["改规则不存在匹配Url", [rule, index]]);
          return;
        }
        let urlPattern = new RegExp(rule.url, "gi");
        if (!urlPattern.test(window.location.href)) {
          return;
        }
        this.$data.currentRule.push(rule);
      });
      if (this.$data.currentRule.length === 0 && Panel.getValue("user-rule-default-enable")) {
        this.$data.currentRule.push(this.$data.defaultRule);
      }
      log.success(["当前的看图规则", this.$data.currentRule]);
      this.$data.currentRule.forEach((rule) => {
        if (rule.mode === "handleClickEvent") {
          this.handleClickEvent(rule);
        } else if (rule.mode === "handleElement") {
          this.handleElement(rule);
        } else {
          log.error(["未知模式的规则", rule]);
        }
      });
    },
    handleClickEvent(rule) {
      function setClickEvent($el) {
        if ($el == null) return;
        domUtils.on(
          $el,
          "click",
          rule.selector,
          async (event) => {
            if (rule.isPreventDefault) {
              domUtils.preventEvent(event);
            }
            const targetElement = event.target;
            if (targetElement instanceof HTMLImageElement && targetElement.closest(".viewer-container")) {
              return;
            }
            let imageList = [];
            let imageIndex = 0;
            if (typeof rule.clickEvent === "string") {
              const asyncUserClickEvent = function (event2) {
                return new Promise((resolve, reject) => {
                  let userClickEvent = new Function("event", "resolve", "reject", rule.clickEvent).bind({
                    ImageUtils,
                    utils,
                    DOMUtils: domUtils,
                  });
                  userClickEvent(event2, resolve, reject);
                });
              };
              let result = await asyncUserClickEvent(event);
              if (!Boolean(result.isView)) {
                return;
              }
              if (Array.isArray(result.imageList)) {
                imageList = result.imageList;
              }
              if (typeof result.imageIndex === "number") {
                imageIndex = result.imageIndex;
                if (imageIndex < 0 || imageIndex >= imageList.length) {
                  imageIndex = 0;
                }
              }
            }
            ImageViewer.viewIMG(imageList, imageIndex);
          },
          {
            capture: true,
          }
        );
      }
      if (typeof rule.context === "string") {
        domUtils.waitNode(rule.context).then((contextElement) => {
          if (rule.useSelector === "querySelector") {
            setClickEvent($(rule.context));
          } else {
            setClickEvent($$(rule.context));
          }
        });
      } else {
        setClickEvent(document);
      }
    },
    handleElement(rule) {},
  };
  PanelContent.addContentConfig([Component_Common]);
  Panel.init();
  DOMUtils.ready(() => {
    WebSiteRule.execRule();
  });
})(Qmsg, DOMUtils, Utils, pops, Viewer);
