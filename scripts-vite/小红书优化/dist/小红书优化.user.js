// ==UserScript==
// @name         小红书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.3.1
// @author       WhiteSevs
// @description  屏蔽登录弹窗、屏蔽广告、优化评论浏览、优化图片浏览、允许复制、禁止唤醒App、禁止唤醒弹窗、修复正确跳转等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAx9JREFUWEfNl09MU0EQxn/beFTDDRI41FAMcNGbBw62oPEGid6UULxg1EhEEzExgdBEEzRqlKDxZCHgDZJ6U8TWAyaQGIsHMQLSA0S8VYQT2NXp9tnX0vKnpi2TNH1vd3bmm5lv9+0o0kQ73SXsc7QCx1EcjU9rnOl6O3pXRNAqCjqCIsB6LKQioYh9rbK/6MMnWojFHgElO3KwWyUBBD1q9q3fWvoPgHY1dIHu2a3N3PRVt5ob98naOABdVd+K5nluxnJc5dBe9TU4qHS128lvRzDnOufoH4iyETukihJ9EnSH0i5PAFRj7oH8z0r9UmlXw0fQZrsVWhQRKcFCEepvQo0DcNXrQgeechDtbQAVpbCyBiurqUmqqYSD+2FyOnPyZE50ln7A4vKWCc5egvIyCA3DzV4YeZ00UlEGQ/eN88670HsjOTczZ8bbvXCiDqbC8HkeBkahuhLE5sBICqDdAzh9yjh1n4OlZZgdTxqcDEPfIAw9SI1aMjg1DVrDpe5tAIRewOJ36LyXzIAgv+IFz1ljXN5FJAOjrwwIcd583YwfO2L0JHvW2qqGjKXYnAExJkYfDyYBaGWibmyDGhe0t/z9bikDSMQO4NZlEO5YJTggfHCBf8SUIo0TqQCEPB8C0Ddg6m5xQIj4xAcXu+DLPASHjY5/1BDUDkAyWF6amXjCkcYLW5Sg1gWBZ3C7H6Y+mWdJ48y35LiQ0HvGGLHzIFsJLAJLSSQzssYmmzMg0TVfM9vMqqMYkcwIejEiv59rhliy3URP2H6n3/zXJsbsO+ipz+huCUCQSb2E3eJQRNL+ZsIQS/a1ALQIKDtCxu0i4EUs8GPvk7YEXFPbNrvAmj5ZJ3dB49wSYbTlUIgqANJFzoFfq4aE8izBiC0h49iEmctagszUyevoHvgYFf1zXEwA6PBeuJLVXwUe5pVp2Yyr2HmVaMUW8tYNZXWuI6xrT6IxcbeiHYVtTCT62ZDf1pp5ekB1FaYU2qfmgvGLQWpzKi0adOfxlhxF0ZGxObUiT7RqbjRNoJ0oVZIzINMNy5Eehtg7NvCrSChqz/IfgUZkW/BhLsQAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://www.xiaohongshu.com/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.11.3/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.9.5/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@3.3.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.js
// @resource     ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.css
// @connect      edith.xiaohongshu.com
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

(function (Qmsg, DOMUtils, pops, Utils, Viewer) {
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
  const GM_RESOURCE_MAPPING = {
    Viewer: {
      keyName: "ViewerCSS",
      url: "https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css",
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
  const OriginPrototype = {
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
  };
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
          const panelHandlerComponents = __pops__.config.PanelHandlerComponents();
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
  const _SCRIPT_NAME_ = SCRIPT_NAME || "小红书优化";
  const __viewer = Viewer;
  const XHSRouter = {
    isArticle() {
      return (
        globalThis.location.pathname.startsWith("/discovery/item/") ||
        globalThis.location.pathname.startsWith("/explore/")
      );
    },
    isUserHome() {
      return globalThis.location.pathname.startsWith("/user/profile/");
    },
    isHome() {
      return (
        globalThis.location.href === "https://www.xiaohongshu.com/" ||
        globalThis.location.href === "https://www.xiaohongshu.com"
      );
    },
    isSearch() {
      return globalThis.location.pathname.startsWith("/search_result/");
    },
  };
  const XHS_BASE_URL = "https://edith.xiaohongshu.com";
  const XHSApi = {
    async getPageInfo(note_id, cursor = "", xsec_token = "", top_comment_id = "", image_formats = "jpg,webp") {
      const Api = `/api/sns/web/v2/comment/page`;
      const SearchParamsData = {
        note_id,
        cursor,
        top_comment_id,
        image_formats,
        xsec_token,
      };
      const SearchParams = Api + "?" + utils.toSearchParamsStr(SearchParamsData);
      let getResp = await httpx.get(`${XHS_BASE_URL}${SearchParams}`, {
        headers: {
          Accept: "application/json, text/plain, */*",
          "User-Agent": utils.getRandomPCUA(),
          Origin: "https://www.xiaohongshu.com",
          Referer: "https://www.xiaohongshu.com/",
        },
      });
      if (!getResp.status) {
        return;
      }
      let data = utils.toJSON(getResp.data.responseText);
      log.info(["获取页信息", data]);
      if (data["code"] === 0 || data["success"]) {
        return data["data"];
      } else if (data["code"] === -101) {
        return;
      } else {
        Qmsg.error(data["msg"]);
      }
    },
    async getLzlPageInfo(
      note_id = "",
      root_comment_id = "",
      num = 10,
      cursor = "",
      image_formats = "jpg,webp,avif",
      top_comment_id = ""
    ) {
      const Api = `/api/sns/web/v2/comment/sub/page`;
      let ApiData = {
        note_id,
        root_comment_id,
        num,
        cursor,
        image_formats,
        top_comment_id,
      };
      Api + "?" + utils.toSearchParamsStr(ApiData);
      let url = `${XHS_BASE_URL}${Api}?${utils.toSearchParamsStr(ApiData)}`;
      let getResp = await httpx.get(url, {
        headers: {
          Accept: "application/json, text/plain, */*",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Host: "edith.xiaohongshu.com",
          Origin: "https://www.xiaohongshu.com",
          Referer: "https://www.xiaohongshu.com/",
        },
        onerror() {},
      });
      if (!getResp.status) {
        if (getResp.data.status === 406 && utils.isNotNull(getResp.data.responseText)) {
          let errorData = utils.toJSON(getResp.data.responseText);
          if (errorData["code"] == -1) {
            Qmsg.error("获取楼中楼信息失败，验证x-s、x-t、x-s-common失败");
          } else {
            Qmsg.error("获取楼中楼信息失败");
          }
        } else {
          Qmsg.error("请求异常");
        }
        log.error(["获取楼中楼信息失败", getResp]);
        return;
      }
      let data = utils.toJSON(getResp.data.responseText);
      log.info(["获取楼中楼页信息", data]);
      if (data["code"] === 0 || data["success"]) {
        return data["data"];
      } else {
        Qmsg.error(data["msg"]);
      }
    },
    async getSearchRecommend(searchText) {
      let getResp = await httpx.get(
        `https://edith.xiaohongshu.com/api/sns/web/v1/search/recommend?keyword=${searchText}`,
        {
          fetch: true,
        }
      );
      if (!getResp.status) {
        return;
      }
      let data = utils.toJSON(getResp.data.responseText);
      if (!(data.success || data.code === 1e3)) {
        return;
      }
      return data.data.sug_items;
    },
  };
  const Hook = {
    $data: {
      document_addEventListener: [],
      element_addEventListener: [],
      setTimeout: [],
      setInterval: [],
      function_apply: [],
      function_call: [],
      defineProperty: [],
    },
    document_addEventListener(handler) {
      this.$data.document_addEventListener.push(handler);
      log.info("document.addEventListener hook新增劫持判断回调");
      if (this.$data.document_addEventListener.length > 1) {
        return;
      }
      const that = this;
      const weakMap = new WeakMap();
      const originAddEventListener = _unsafeWindow.document.addEventListener;
      const originRemoveEventListener = _unsafeWindow.document.removeEventListener;
      _unsafeWindow.document.addEventListener = function (...args) {
        const target = this;
        const eventName = args[0];
        const listener = args[1];
        const options = args[2];
        for (let index = 0; index < that.$data.document_addEventListener.length; index++) {
          const callback = that.$data.document_addEventListener[index];
          const result = Reflect.apply(callback, this, [target, eventName, listener, options]);
          if (typeof result === "function") {
            args[1] = result;
            weakMap.set(listener, {
              eventName,
              fn: result,
              options,
            });
            break;
          } else if (typeof result === "boolean" && !result) {
            return;
          }
        }
        return Reflect.apply(originAddEventListener, this, args);
      };
      _unsafeWindow.document.removeEventListener = function (...args) {
        const eventName = args[0];
        const listener = args[1];
        const options = args[2];
        if (weakMap.has(listener)) {
          const { eventName: __eventName__, fn: __listener__, options: __options__ } = weakMap.get(listener);
          let flag = false;
          if (eventName === __eventName__) {
            if (typeof options === "boolean" && options === __options__) {
              flag = true;
            } else if (
              typeof options === "object" &&
              typeof __options__ === "object" &&
              options["capture"] === __options__["capture"]
            ) {
              flag = true;
            } else if (options == options) {
              flag = true;
            }
          }
          if (flag) {
            args[1] = __listener__;
          }
        }
        return Reflect.apply(originRemoveEventListener, this, args);
      };
    },
    element_addEventListener(handler) {
      this.$data.element_addEventListener.push(handler);
      log.info("Element.prototype.addEventListener hook新增劫持判断回调");
      if (this.$data.element_addEventListener.length > 1) {
        return;
      }
      const that = this;
      const weakMap = new WeakMap();
      const originAddEventListener = _unsafeWindow.Element.prototype.addEventListener;
      const originRemoveEventListener = _unsafeWindow.Element.prototype.removeEventListener;
      _unsafeWindow.Element.prototype.addEventListener = function (...args) {
        const target = this;
        const eventName = args[0];
        const listener = args[1];
        const options = args[2];
        for (let index = 0; index < that.$data.element_addEventListener.length; index++) {
          const callback = that.$data.element_addEventListener[index];
          const result = Reflect.apply(callback, this, [target, eventName, listener, options]);
          if (typeof result === "function") {
            args[1] = result;
            weakMap.set(listener, {
              eventName,
              fn: result,
              options,
            });
            break;
          } else if (typeof result === "boolean" && !result) {
            return;
          }
        }
        return Reflect.apply(originAddEventListener, this, args);
      };
      _unsafeWindow.Element.prototype.removeEventListener = function (...args) {
        const eventName = args[0];
        const listener = args[1];
        const options = args[2];
        if (weakMap.has(listener)) {
          const { eventName: __eventName__, fn: __listener__, options: __options__ } = weakMap.get(listener);
          let flag = false;
          if (__eventName__ === eventName) {
            if (typeof options === "boolean" && options === __options__) {
              flag = true;
            } else if (
              typeof options === "object" &&
              typeof __options__ === "object" &&
              options["capture"] === __options__["capture"]
            ) {
              flag = true;
            } else if (options == __options__) {
              flag = true;
            }
          }
          if (flag) {
            args[1] = __listener__;
          }
        }
        return Reflect.apply(originRemoveEventListener, this, args);
      };
    },
    setTimeout(handler) {
      this.$data.setTimeout.push(handler);
      log.info("window.setTimeout hook新增劫持");
      if (this.$data.setTimeout.length > 1) {
        return;
      }
      const that = this;
      const originSetTimeout = _unsafeWindow.setTimeout;
      _unsafeWindow.setTimeout = function (...args) {
        const fn = args[0];
        const timeout = args[1];
        for (let index = 0; index < that.$data.setTimeout.length; index++) {
          const item = that.$data.setTimeout[index];
          const result = item(fn, timeout);
          if (typeof result === "boolean" && !result) {
            return;
          }
          if (typeof result === "function") {
            args[0] = result;
            break;
          }
        }
        return Reflect.apply(originSetTimeout, this, args);
      };
    },
    setInterval(handler) {
      this.$data.setInterval.push(handler);
      log.info("window.setInterval hook新增劫持");
      if (this.$data.setInterval.length > 1) {
        return;
      }
      const that = this;
      const originSetInterval = _unsafeWindow.setInterval;
      _unsafeWindow.setInterval = function (...args) {
        const fn = args[0];
        const timeout = args[1];
        for (let index = 0; index < that.$data.setInterval.length; index++) {
          const item = that.$data.setInterval[index];
          const result = item(fn, timeout);
          if (typeof result === "boolean" && !result) {
            return;
          }
          if (typeof result === "function") {
            args[0] = result;
            break;
          }
        }
        return Reflect.apply(originSetInterval, this, args);
      };
    },
    function_apply(handler) {
      this.$data.function_apply.push(handler);
      log.info("Function.prototype.apply hook新增劫持");
      if (this.$data.function_apply.length > 1) {
        return;
      }
      const that = this;
      const originApply = _unsafeWindow.Function.prototype.apply;
      _unsafeWindow.Function.prototype.apply = function (...args) {
        const thisArg = args[0];
        const argArray = args[1];
        let fn = this;
        for (let index = 0; index < that.$data.function_apply.length; index++) {
          const item = that.$data.function_apply[index];
          if (typeof item.paramsHandler === "function") {
            const handlerResult = item.paramsHandler(fn, thisArg, argArray, args);
            if (handlerResult != null) {
              if (handlerResult.args) {
                if ("thisArg" in handlerResult.args) {
                  args[0] = handlerResult.args.thisArg;
                }
                if ("argArray" in handlerResult.args) {
                  args[1] = handlerResult.args.argArray;
                }
                if (typeof handlerResult.args.fn === "function") {
                  fn = handlerResult.args.fn;
                }
              }
              if (handlerResult.preventDefault) {
                if ("result" in handlerResult) {
                  return handlerResult.result;
                }
                return;
              }
              break;
            }
          }
        }
        let result = originApply.call(fn, ...args);
        for (let index = 0; index < that.$data.function_apply.length; index++) {
          const item = that.$data.function_apply[index];
          if (typeof item.returnsHandler === "function") {
            let handlerResult = item.returnsHandler(fn, args[0], args[1], result, args);
            if (handlerResult != null && "result" in handlerResult) {
              result = handlerResult.result;
            }
          }
        }
        return result;
      };
    },
    function_call(handler) {
      this.$data.function_call.push(handler);
      log.info("Function.prototype.call hook新增劫持");
      if (this.$data.function_call.length > 1) {
        return;
      }
      const that = this;
      const originCall = _unsafeWindow.Function.prototype.call;
      _unsafeWindow.Function.prototype.call = function (...args) {
        const thisArg = args[0];
        const argArray = args.slice(1);
        let fn = this;
        for (let index = 0; index < that.$data.function_call.length; index++) {
          const item = that.$data.function_call[index];
          if (typeof item.paramsHandler === "function") {
            const handlerResult = item.paramsHandler(fn, thisArg, argArray, args);
            if (handlerResult != null) {
              if (handlerResult.args) {
                if ("thisArg" in handlerResult.args) {
                  args[0] = handlerResult.args.thisArg;
                }
                if ("argArray" in handlerResult.args) {
                  args.splice(1, argArray.length, ...handlerResult.args.argArray);
                }
                if (typeof handlerResult.args.fn === "function") {
                  fn = handlerResult.args.fn;
                }
              }
              if (handlerResult.preventDefault) {
                if ("result" in handlerResult) {
                  return handlerResult.result;
                }
                return;
              }
              break;
            }
          }
        }
        let result = originCall.apply(fn, args);
        for (let index = 0; index < that.$data.function_call.length; index++) {
          const item = that.$data.function_call[index];
          if (typeof item.returnsHandler === "function") {
            const handlerResult = item.returnsHandler(fn, args[0], args[1], result, args);
            if (handlerResult != null && "result" in handlerResult) {
              result = handlerResult.result;
            }
          }
        }
        return result;
      };
    },
    defineProperty(handler) {
      this.$data.defineProperty.push(handler);
      log.info("Object.defineProperty hook新增劫持");
      if (this.$data.defineProperty.length > 1) {
        return;
      }
      const that = this;
      const originDefineProperty = _unsafeWindow.Object.defineProperty;
      _unsafeWindow.Object.defineProperty = function (...args) {
        const target = args[0];
        const key = args[1];
        const attributes = args[2];
        for (let index = 0; index < that.$data.defineProperty.length; index++) {
          const item = that.$data.defineProperty[index];
          const result = item(target, key, attributes);
          if (result != null) {
            args[0] = result.target;
            args[1] = result.key;
            args[2] = result.attributes;
            break;
          }
        }
        return Reflect.apply(originDefineProperty, this, args);
      };
    },
    window_webpack(webpackName = "webpackJsonp", mainCoreData, handler) {
      let webpackList = void 0;
      OriginPrototype.Object.defineProperty(_unsafeWindow, webpackName, {
        get() {
          return webpackList;
        },
        set(value) {
          webpackList = value;
          const originPush = value.push;
          value.push = function (...args) {
            const __mainCoreData = args[0][0];
            let isCoreIdMatched = false;
            if (typeof mainCoreData === "function") {
              const ret = mainCoreData(__mainCoreData);
              if (typeof ret === "boolean") {
                isCoreIdMatched = ret;
              }
            } else {
              isCoreIdMatched = mainCoreData == __mainCoreData;
              if (!isCoreIdMatched) {
                if (Array.isArray(mainCoreData) && Array.isArray(__mainCoreData)) {
                  isCoreIdMatched = JSON.stringify(mainCoreData) === JSON.stringify(__mainCoreData);
                }
              }
            }
            if (isCoreIdMatched) {
              const exportObj = args[0][1];
              const keys = OriginPrototype.Object.keys(exportObj);
              keys.forEach((keyName) => {
                const fn = exportObj[keyName];
                if (typeof fn === "function") {
                  args[0][1][keyName] = function (...args2) {
                    const result = fn.call(this, ...args2);
                    const exports$1 = args2[0];
                    args2[0] = handler(exports$1);
                    return result;
                  };
                }
              });
            }
            return originPush.call(this, ...args);
          };
        },
      });
    },
  };
  const XHSHook = {
    webpackChunkranchi() {
      let originObject = void 0;
      let webpackName = "webpackChunkranchi";
      Object.defineProperty(_unsafeWindow, webpackName, {
        get() {
          return originObject;
        },
        set(newValue) {
          originObject = newValue;
          const oldPush = originObject.push;
          originObject.push = function (...args) {
            args[0][0];
            if (typeof args[0][1] === "object") {
              Object.keys(args[0][1]).forEach((keyName, index) => {
                if (
                  typeof args[0][1][keyName] === "function" &&
                  args[0][1][keyName].toString().startsWith("function(e,n,t){t.d(n,{Z:function(){return y}});") &&
                  args[0][1][keyName].toString().includes("jumpToApp") &&
                  Panel.getValue("little-red-book-hijack-webpack-scheme")
                ) {
                  let oldFunc = args[0][1][keyName];
                  args[0][1][keyName] = function (...args_1) {
                    log.success(["成功劫持scheme唤醒", args_1]);
                    let oldD = args_1[2].d;
                    args_1[2].d = function (...args_2) {
                      if (args_2.length === 2 && typeof args_2[1]?.["Z"] === "function") {
                        let oldZ = args_2[1]["Z"];
                        if (oldZ.toString() === "function(){return y}") {
                          args_2[1]["Z"] = function (...args_3) {
                            let result = oldZ.call(this, ...args_3);
                            if (typeof result === "function" && result.toString().includes("jumpToApp")) {
                              return function () {
                                return {
                                  jumpToApp(data) {
                                    log.success(["拦截唤醒", data]);
                                    if (data["deeplink"]?.startsWith("xhsdiscover://user/")) {
                                      let userId = data["deeplink"].replace(/^xhsdiscover:\/\/user\//, "");
                                      let userHomeUrl = window.location.origin + `/user/profile/${userId}`;
                                      window.open(userHomeUrl, "_blank");
                                    }
                                  },
                                };
                              };
                            }
                            return result;
                          };
                        }
                      }
                      return oldD.call(this, ...args_2);
                    };
                    return oldFunc.call(this, ...args_1);
                  };
                }
              });
            }
            return oldPush.call(this, ...args);
          };
        },
      });
    },
    hookVue() {
      const assign = _unsafeWindow.Object.assign;
      let isRun = false;
      _unsafeWindow.Object.assign = function (...args) {
        if (args.length == 2 && args[1]?.render !== void 0 && !isRun) {
          let b = args[1];
          const originRender = b.render;
          let isInject = false;
          b.render = function (...args2) {
            if (!isInject) {
              args2[5]["_"].appContext.mixins.push({
                mounted() {
                  this.$el["__Ivue__"] = this;
                },
              });
              isInject = true;
            }
            return originRender.call(this, ...args2);
          };
          isRun = true;
        }
        return Reflect.apply(assign, this, args);
      };
    },
    setTimeout() {
      Hook.setTimeout((fn) => {
        let fnStr = fn.toString();
        if (fnStr === "function(){r()}" || fnStr === "function(){u()}") {
          log.success(["成功劫持setTimeout唤醒", fn]);
          return false;
        }
      });
    },
    call() {
      Hook.function_call({
        paramsHandler(fn, thisArg, argArray) {
          fn.toString();
          if (
            argArray[0]?.label === 0 &&
            Array.isArray(argArray[0]?.ops) &&
            Array.isArray(argArray[0]?.trys) &&
            typeof argArray[0]?.sent === "function"
          ) {
            log.success([`成功劫持call唤醒`, fn, thisArg, argArray]);
            return {
              args: {
                fn,
                thisArg,
                argArray: [],
              },
            };
          } else if (typeof thisArg === "string" && thisArg.startsWith("https://oia.xiaohongshu.com/oia")) {
            log.success([`成功劫持call跳转下载页面`, fn, thisArg, argArray]);
            return {
              preventDefault: true,
            };
          }
        },
      });
    },
  };
  const blockCSS$2 =
    "/* 底部的App内打开 */\n.bottom-button-box,\n/* 顶部的打开看看 */\n.nav-bar-box {\n  display: none !important;\n}\n";
  const M_XHSArticleBlock = {
    allowCopy() {
      log.info("允许复制");
      return addStyle(
        `
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `
      );
    },
    blockBottomSearchFind() {
      log.info("屏蔽底部搜索发现");
      return CommonUtil.addBlockCSS(".hotlist-container", ".safe-area-bottom.margin-placeholder");
    },
    blockBottomToorBar() {
      log.info("屏蔽底部工具栏");
      return CommonUtil.addBlockCSS(".engage-bar-container");
    },
    blockAuthorHotNote() {
      log.info("屏蔽视频笔记的作者热门笔记");
      return CommonUtil.addBlockCSS(".user-notes-box.user-notes-clo-layout-container");
    },
    blockHotRecommendNote() {
      log.info("屏蔽视频笔记的热门推荐");
      return CommonUtil.addBlockCSS("#new-note-view-container .recommend-box");
    },
  };
  const M_XHSArticleVideo = {
    optimizeVideoNoteDesc() {
      log.info("优化视频笔记的描述（可滚动）");
      return addStyle(
        `
    .author-box .author-desc-wrapper .author-desc{
      max-height: 70px !important;
      overflow: auto !important;
    }
    /* 展开按钮 */
    .author-box .author-desc-wrapper .author-desc .author-desc-trigger{
      display: none !important;
    }`
      );
    },
  };
  const M_XHSArticle = {
    init() {
      addStyle(blockCSS$2);
      if (
        Panel.getValue("little-red-book-hijack-webpack-mask") ||
        Panel.getValue("little-red-book-hijack-webpack-scheme")
      ) {
        log.info("劫持webpack");
        XHSHook.setTimeout();
        XHSHook.call();
      }
      Panel.execMenuOnce("little-red-book-shieldBottomSearchFind", () => {
        return M_XHSArticleBlock.blockBottomSearchFind();
      });
      Panel.execMenuOnce("little-red-book-shieldBottomToorBar", () => {
        return M_XHSArticleBlock.blockBottomToorBar();
      });
      Panel.execMenuOnce("little-red-book-optimizeImageBrowsing", () => {
        return M_XHSArticle.optimizeImageBrowsing();
      });
      Panel.execMenuOnce("little-red-book-optimizeVideoNoteDesc", () => {
        return M_XHSArticleVideo.optimizeVideoNoteDesc();
      });
      Panel.execMenuOnce("little-red-book-shieldAuthorHotNote", () => {
        return M_XHSArticleBlock.blockAuthorHotNote();
      });
      Panel.execMenuOnce("little-red-book-shieldHotRecommendNote", () => {
        return M_XHSArticleBlock.blockHotRecommendNote();
      });
      domUtils.onReady(function () {
        Panel.execMenu("little-red-book-optimizeCommentBrowsing", () => {
          M_XHSArticle.optimizeCommentBrowsing();
        });
      });
    },
    optimizeCommentBrowsing() {
      log.info("优化评论浏览");
      const Comments = {
        QmsgLoading: void 0,
        scrollFunc: void 0,
        noteId: "",
        xsec_token: "",
        noteData: {},
        commentData: {},
        emojiMap: {},
        emojiNameList: [],
        currentCursor: void 0,
        commentContainer: void 0,
        init() {
          this.emojiMap = utils.toJSON(_unsafeWindow.localStorage.getItem("redmoji"))?.["redmojiMap"] || {};
          this.emojiNameList = Object.keys(this.emojiMap);
          this.scrollFunc = new utils.LockFunction(this.scrollEvent, this);
          const __INITIAL_STATE__ = _unsafeWindow["__INITIAL_STATE__"];
          const noteData = __INITIAL_STATE__.noteData ?? __INITIAL_STATE__.data.noteData;
          Comments.noteData = noteData.data.noteData;
          Comments.commentData = noteData.data.commentData;
          Comments.noteId = Comments.noteData.noteId;
          Comments.xsec_token = __INITIAL_STATE__.noteData.routeQuery.xsec_token;
          log.info(["笔记数据", Comments.noteData]);
          log.info(["评论数据", Comments.commentData]);
        },
        getCommentHTML(data) {
          return `
				<div class="little-red-book-comments-avatar">
						<a target="_blank" href="/user/profile/${data.user_id}">
							<img src="${data.user_avatar}" crossorigin="anonymous">
						</a>
				</div>
				<div class="little-red-book-comments-content-wrapper">
					<div class="little-red-book-comments-author-wrapper">
						<div class="little-red-book-comments-author">
							<a href="/user/profile/${data.user_id}" class="little-red-book-comments-author-name" target="_blank">
								${data.user_nickname}
							</a>
						</div>
						<div class="little-red-book-comments-content">
							${data.content}
						</div>
						<div class="little-red-book-comments-info">
							<div class="little-red-book-comments-info-date">
								<span class="little-red-book-comments-create-time">${utils.formatTime(data.create_time)}</span>
								<span class="little-red-book-comments-location">${data.ip_location}</span>
							</div>
						</div>
					</div>
				</div>
            `;
        },
        getCommentElement(data) {
          let content = data["content"];
          let create_time = data["create_time"] || parseInt(data["time"]);
          let id = data["id"];
          let ip_location = data["ip_location"] || data["ipLocation"];
          let sub_comment_has_more = data["sub_comment_has_more"];
          let sub_comment_count = parseInt(data["sub_comment_count"]) || 0;
          let sub_comment_cursor = data["sub_comment_cursor"];
          let sub_comments = data["sub_comments"] || data["subComments"];
          let user_avatar = (data["user_info"] || data["user"])["image"];
          let user_nickname = (data["user_info"] || data["user"])["nickname"];
          let user_id = data?.["user_info"]?.["user_id"] || data?.["user"]?.["userId"];
          content = Comments.converContent(content);
          let commentItemElement = domUtils.createElement("div", {
            className: "little-red-book-comments-item",
            innerHTML: `
					<div class="little-red-book-comments-parent">
					${Comments.getCommentHTML({
            user_id,
            user_avatar,
            user_nickname,
            content,
            create_time,
            ip_location,
          })}
					</div>
					`,
          });
          if (sub_comment_has_more && Array.isArray(sub_comments)) {
            sub_comments.forEach((subCommentInfo) => {
              let subCommentElement = domUtils.createElement("div", {
                className: "little-red-book-comments-reply-container",
                innerHTML: Comments.getCommentHTML({
                  user_id: subCommentInfo["user_info"]["user_id"],
                  user_avatar: subCommentInfo["user_info"]["image"],
                  user_nickname: subCommentInfo["user_info"]["nickname"],
                  content: Comments.converContent(subCommentInfo["content"]),
                  create_time: subCommentInfo["create_time"],
                  ip_location: subCommentInfo["ip_location"],
                }),
              });
              commentItemElement.appendChild(subCommentElement);
            });
            if (sub_comment_count !== sub_comments.length) {
              let endReplyCount = sub_comment_count - sub_comments.length;
              let lzlCursor = sub_comment_cursor;
              let showMoreElement = domUtils.createElement("div", {
                className: "little-red-book-comments-reply-show-more",
                innerText: `展开 ${endReplyCount} 条回复`,
              });
              async function showMoreEvent() {
                let QmsgLoading = Qmsg.loading("加载中，请稍后...");
                let pageInfo2 = await XHSApi.getLzlPageInfo(Comments.noteId, id, 10, lzlCursor, void 0);
                QmsgLoading.close();
                if (!pageInfo2) {
                  return;
                }
                lzlCursor = pageInfo2.cursor;
                endReplyCount = endReplyCount - pageInfo2.comments.length;
                showMoreElement.innerText = `展开 ${endReplyCount} 条回复`;
                pageInfo2.comments.forEach((subCommentInfo) => {
                  let subCommentElement = domUtils.createElement("div", {
                    className: "little-red-book-comments-reply-container",
                    innerHTML: Comments.getCommentHTML({
                      user_id: subCommentInfo["user_info"]["user_id"],
                      user_avatar: subCommentInfo["user_info"]["image"],
                      user_nickname: subCommentInfo["user_info"]["nickname"],
                      content: Comments.converContent(subCommentInfo["content"]),
                      create_time: subCommentInfo["create_time"],
                      ip_location: subCommentInfo["ip_location"],
                    }),
                  });
                  domUtils.before(showMoreElement, subCommentElement);
                });
                if (!pageInfo2.has_more) {
                  domUtils.off(showMoreElement, "click", void 0, showMoreEvent, {
                    capture: true,
                  });
                  showMoreElement.remove();
                }
              }
              domUtils.on(showMoreElement, "click", void 0, showMoreEvent, {
                capture: true,
              });
              commentItemElement.appendChild(showMoreElement);
            }
          }
          return commentItemElement;
        },
        converContent(content) {
          Comments.emojiNameList.forEach((emojiName) => {
            if (content.includes(emojiName)) {
              content = content.replaceAll(
                emojiName,
                `<img class="little-red-book-note-content-emoji" crossorigin="anonymous" src="${Comments.emojiMap[emojiName]}">`
              );
            }
          });
          return content;
        },
        async scrollEvent() {
          if (!utils.isNearBottom(window.innerHeight / 3)) {
            return;
          }
          if (this.QmsgLoading == null) {
            this.QmsgLoading = Qmsg.loading("加载中，请稍后...");
          }
          let pageInfo2 = await XHSApi.getPageInfo(Comments.noteId, Comments.currentCursor, Comments.xsec_token);
          if (this.QmsgLoading) {
            this.QmsgLoading.close();
            this.QmsgLoading = void 0;
          }
          if (!pageInfo2) {
            return;
          }
          Comments.currentCursor = pageInfo2.cursor;
          pageInfo2.comments.forEach((commentItem) => {
            let commentItemElement = Comments.getCommentElement(commentItem);
            Comments.commentContainer.appendChild(commentItemElement);
          });
          if (!pageInfo2.has_more) {
            Qmsg.info("已加载全部评论");
            Comments.removeScrollEventListener();
            return;
          }
        },
        addSrollEventListener() {
          log.success("添加滚动监听事件");
          domUtils.on(document, "scroll", void 0, Comments.scrollFunc.run, {
            capture: true,
            once: false,
            passive: true,
          });
        },
        removeScrollEventListener() {
          log.success("移除滚动监听事件");
          domUtils.off(document, "scroll", void 0, Comments.scrollFunc.run, {
            capture: true,
          });
        },
      };
      domUtils.waitNode(".narmal-note-container").then(async () => {
        log.info("优化评论浏览-笔记元素出现");
        const $noteViewContainer = $(".note-view-container");
        const $commentContainer = domUtils.createElement("div", {
          className: "little-red-book-comments-container",
          innerHTML: `
          <style>
              .little-red-book-comments-parent {
                  position: relative;
                  display: flex;
                  padding: 8px;
                  width: 100%;
              }
              
              .little-red-book-comments-reply-container {
                  position: relative;
                  display: flex;
                  padding: 8px;
                  width: 100%;
                  padding-left: 52px;
              }
              .little-red-book-comments-container {
                  background: #fff;
                  position: relative;
                  padding: 8px 8px;
              }
              
              .little-red-book-comments-item {
                  position: relative;
              }
              
              .little-red-book-comments-avatar {
                  flex: 0 0 auto;
              }
              
              .little-red-book-comments-avatar img {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;
                  border-radius: 100%;
                  border: 1px solid rgba(0,0,0,0.08);
                  object-fit: cover;
                  width: 40px;
                  height: 40px;
              }
              .little-red-book-comments-content-wrapper {
                  margin-left: 12px;
                  display: flex;
                  flex-direction: column;
                  font-size: 14px;
                  flex-grow: 1;
              }
              
              .little-red-book-comments-author {display: flex;justify-content: space-between;align-items: center;}
              
              a.little-red-book-comments-author-name {
                  line-height: 18px;
                  color: rgba(51,51,51,0.6);
              }
              
              .little-red-book-comments-content {
                  margin-top: 4px;
                  line-height: 140%;
                  color: #333;
              }
              
              .little-red-book-comments-info {
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  font-size: 12px;
                  line-height: 16px;
                  color: rgba(51,51,51,0.6);
              }
              
              .little-red-book-comments-info-date {
                  margin: 8px 0;
              }
              
              span.little-red-book-comments-location {
                  margin-left: 4px;
                  line-height: 120%;
              }
              img.little-red-book-note-content-emoji {
                  margin: 0 1px;
                  height: 16px;
                  transform: translateY(2px);
                  position: relative;
              }
              .little-red-book-comments-reply-container .little-red-book-comments-avatar img {
                  width: 24px;
                  height: 24px;
              }
              .little-red-book-comments-total{
                  font-size: 14px;
                  color: rgba(51,51,51,0.6);
                  margin-left: 8px;
                  margin-bottom: 12px;
              }
              .little-red-book-comments-reply-show-more {
              padding-left: calc(52px + 24px + 12px);
              height: 32px;
              line-height: 32px;
              color: #13386c;
              cursor: pointer;
              font-weight: 500;
              font-size: 14px;
              }
          </style>
        `,
        });
        Comments.commentContainer = $commentContainer;
        Comments.init();
        const $commentsTotal = domUtils.createElement("div", {
          className: "little-red-book-comments-total",
          innerHTML: `共 ${Comments.commentData["commentCount"] ?? Comments.noteData["comments"]} 条评论`,
        });
        $commentContainer.appendChild($commentsTotal);
        if (Comments.commentData && Comments.commentData["comments"]) {
          log.info("从固定的评论中加载");
          Comments.commentData["comments"].forEach((commentItem) => {
            let commentItemElement = Comments.getCommentElement(commentItem);
            $commentContainer.appendChild(commentItemElement);
          });
        }
        domUtils.append($noteViewContainer, $commentContainer);
      });
    },
    optimizeImageBrowsing() {
      log.info("优化图片浏览");
      const viewIMG = function (imgSrcList = [], index = 0) {
        let viewerULNodeHTML = "";
        imgSrcList.forEach((item) => {
          viewerULNodeHTML += `<li><img data-src="${item}" loading="lazy"></li>`;
        });
        const $viewerUL = domUtils.createElement("ul", {
          innerHTML: viewerULNodeHTML,
        });
        const viewer = new __viewer($viewerUL, {
          inline: false,
          url: "data-src",
          zIndex: utils.getMaxZIndex() + 100,
          hidden: () => {
            viewer.destroy();
          },
        });
        index = index < 0 ? 0 : index;
        viewer.view(index);
        viewer.zoomTo(1);
        viewer.show();
      };
      const callback = (event, $click) => {
        let imgElement = $click.querySelector("img");
        let imgList = [];
        let imgBoxList = [];
        if ($click.closest(".onix-carousel-item")) {
          imgBoxList = Array.from($click.closest(".onix-carousel-item").parentElement.querySelectorAll("img"));
        } else {
          imgBoxList = [imgElement];
        }
        let index = imgBoxList.findIndex((value) => {
          return value == imgElement;
        });
        imgBoxList.forEach((element) => {
          let imgSrc = element.getAttribute("src") || element.getAttribute("data-src") || element.getAttribute("alt");
          if (imgSrc) {
            imgList.push(imgSrc);
          }
        });
        log.success(["点击浏览图片👉", imgList[index]]);
        viewIMG(imgList, index);
      };
      const listener = domUtils.on(document, "click", ".note-image-box", callback);
      return [
        CommonUtil.setGMResourceCSS(GM_RESOURCE_MAPPING.Viewer),
        () => {
          listener.off();
        },
      ];
    },
  };
  const blockCSS$1 =
    "/* 用户主页 */\n/* 底部的-App内打开 */\n.launch-app-container.bottom-bar,\n/* 顶部的-打开看看 */\n.main-container > .scroll-view-container > .launch-app-container:first-child,\n/* 底部的-打开小红书看更多精彩内容 */\n.bottom-launch-app-tip.show-bottom-bar,\n/* 首页-顶部横幅 */\n#app .launch-app-container,\n/* 笔记-顶部横幅 */\n.note-view-container .nav-bar-box-expand ,\n.note-view-container .nav-bar-box-expand+.placeholder-expand,\n/* 404页面 顶部的打开看看 */\n.not-found-container .nav-bar-box-expand:has(.share-info-box):has(.launch-btn),\n/* 404页面 底部的-App内打开 */\n.not-found-container #fmp {\n  display: none !important;\n}\n";
  const M_XHSHome = {
    init() {
      domUtils.onReady(() => {
        Panel.execMenuOnce("little-red-book-repariClick", () => {
          return M_XHSHome.repariClick();
        });
      });
    },
    repariClick() {
      log.info("修复正确的点击跳转");
      const callback = (event) => {
        const $click = event.target;
        log.info(["点击的按钮元素", $click]);
        if ($click?.className?.includes("follow-btn")) {
          log.success("点击-关注按钮");
        } else if ($click?.closest("button.reds-button.message-btn")) {
          log.success("点击-私信按钮");
        } else if ($click?.closest("div.reds-tab-item")) {
          log.success("点击-笔记/收藏按钮");
        } else if ($click?.closest("section.reds-note-card")) {
          log.success("点击-笔记卡片");
          const $section = $click?.closest("section.reds-note-card");
          const note_id =
            $section.getAttribute("id") ||
            utils.toJSON($section.getAttribute("impression"))?.["noteTarget"]?.["value"]?.["noteId"];
          if (note_id) {
            window.open(`https://www.xiaohongshu.com/discovery/item/${note_id}`, "_blank");
          } else {
            Qmsg.error("获取笔记note_id失败");
          }
        }
        domUtils.preventEvent(event);
        return false;
      };
      const listener = domUtils.on(document, "click", callback, {
        capture: true,
      });
      return [
        () => {
          listener.off();
        },
      ];
    },
  };
  const M_XHS = {
    init() {
      Panel.execMenuOnce("little-red-book-shieldAd", () => {
        log.info("注入默认屏蔽CSS");
        return addStyle(blockCSS$1);
      });
      Panel.execMenuOnce("little-red-book-allowCopy", () => {
        return M_XHS.allowCopy();
      });
      if (XHSRouter.isArticle()) {
        M_XHSArticle.init();
      } else if (XHSRouter.isUserHome()) {
        M_XHSHome.init();
      }
    },
    allowCopy() {
      log.info("允许复制文字");
      return addStyle(
        `
        *{
            -webkit-user-select: unset !important;
            user-select: unset !important;
        }
        `
      );
    },
  };
  const XHSUrlApi = {
    getSearchUrl(searchText) {
      return `https://www.xiaohongshu.com/search_result?keyword=${searchText}&source=web_explore_feed`;
    },
  };
  const VueUtils = {
    getVue($el) {
      if ($el == null) {
        return;
      }
      return $el["__vue__"] || $el["__Ivue__"] || $el["__IVue__"];
    },
    getVue3($el) {
      if ($el == null) {
        return;
      }
      return $el["__vueParentComponent"];
    },
    waitVuePropToSet($el, checkOption) {
      if (!Array.isArray(checkOption)) {
        checkOption = [checkOption];
      }
      function getTarget() {
        let __target__ = null;
        if (typeof $el === "string") {
          __target__ = domUtils.selector($el);
        } else if (typeof $el === "function") {
          __target__ = $el();
        } else if ($el instanceof HTMLElement) {
          __target__ = $el;
        }
        return __target__;
      }
      checkOption.forEach((needSetOption) => {
        if (typeof needSetOption.msg === "string") {
          log.info(needSetOption.msg);
        }
        const checkTarget = function () {
          const $targetEl = getTarget();
          if ($targetEl == null) {
            return {
              status: false,
              isTimeout: true,
              inst: null,
              $el: $targetEl,
            };
          }
          const vueInst = VueUtils.getVue($targetEl);
          if (vueInst == null) {
            return {
              status: false,
              isTimeout: false,
              inst: null,
              $el: $targetEl,
            };
          }
          const checkResult = Boolean(needSetOption.check(vueInst, $targetEl));
          return {
            status: checkResult,
            isTimeout: false,
            inst: vueInst,
            $el: $targetEl,
          };
        };
        utils
          .waitVueByInterval(
            () => {
              return getTarget();
            },
            () => checkTarget().status,
            250,
            1e4
          )
          .then(() => {
            const checkTargetResult = checkTarget();
            if (checkTargetResult.status) {
              const vueInst = checkTargetResult.inst;
              needSetOption.set(vueInst, checkTargetResult.$el);
            } else {
              if (typeof needSetOption.failWait === "function") {
                needSetOption.failWait(checkTargetResult.isTimeout);
              }
            }
          });
      });
    },
    watchVuePropChange($el, key, callback, watchConfig, failWait) {
      let config = utils.assign(
        {
          immediate: true,
          deep: false,
        },
        watchConfig || {}
      );
      return new Promise((resolve) => {
        VueUtils.waitVuePropToSet($el, {
          check(vueInstance) {
            return typeof vueInstance?.$watch === "function";
          },
          set(vueInstance) {
            let removeWatch = null;
            if (typeof key === "function") {
              removeWatch = vueInstance.$watch(
                () => {
                  return key(vueInstance);
                },
                (newValue, oldValue) => {
                  callback(vueInstance, newValue, oldValue);
                },
                config
              );
            } else {
              removeWatch = vueInstance.$watch(
                key,
                (newValue, oldValue) => {
                  callback(vueInstance, newValue, oldValue);
                },
                config
              );
            }
            resolve(removeWatch);
          },
          failWait,
        });
      });
    },
    goToUrl($el, path, useRouter = false) {
      if ($el == null) {
        Qmsg.error("跳转Url: $vueNode为空");
        log.error("跳转Url: $vueNode为空：" + path);
        return;
      }
      let vueInstance = VueUtils.getVue($el);
      if (vueInstance == null) {
        Qmsg.error("获取vue属性失败", { consoleLogContent: true });
        return;
      }
      let $router = vueInstance.$router;
      let isBlank = true;
      log.info("即将跳转URL：" + path);
      if (useRouter) {
        isBlank = false;
      }
      if (isBlank) {
        window.open(path, "_blank");
      } else {
        if (path.startsWith("http") || path.startsWith("//")) {
          if (path.startsWith("//")) {
            path = window.location.protocol + path;
          }
          let urlObj = new URL(path);
          if (urlObj.origin === window.location.origin) {
            path = urlObj.pathname + urlObj.search + urlObj.hash;
          } else {
            log.info("不同域名，直接本页打开，不用Router：" + path);
            window.location.href = path;
            return;
          }
        }
        log.info("$router push跳转Url：" + path);
        $router.push(path);
      }
    },
    hookGestureReturnByVueRouter(option) {
      function popstateEvent() {
        log.success("触发popstate事件");
        resumeBack(true);
      }
      function banBack() {
        log.success("监听地址改变");
        option.vueInst.$router.history.push(option.hash);
        domUtils.on(_unsafeWindow, "popstate", popstateEvent);
      }
      async function resumeBack(isFromPopState = false) {
        domUtils.off(_unsafeWindow, "popstate", popstateEvent);
        let callbackResult = option.callback(isFromPopState);
        if (callbackResult) {
          return;
        }
        while (true) {
          if (option.vueInst.$router.history.current.hash === option.hash) {
            log.info("后退！");
            option.vueInst.$router.back();
            await utils.sleep(250);
          } else {
            return;
          }
        }
      }
      banBack();
      return {
        resumeBack,
      };
    },
  };
  const XHSArticle = {
    init() {
      if (Panel.getValue("pc-xhs-search-open-blank-btn") || Panel.getValue("pc-xhs-search-open-blank-keyboard-enter")) {
        this.optimizationSearch();
      }
      Panel.exec(
        ["pc-xhs-search-open-blank-btn", "pc-xhs-search-open-blank-keyboard-enter"],
        () => {
          return this.optimizationSearch();
        },
        (keyList) => {
          const execFlag = keyList.some((__key__) => {
            let flag = !!Panel.getValue(__key__);
            const disabled = Panel.$data.contentConfigInitDisabledKeys.includes(__key__);
            if (disabled) {
              flag = false;
              log.warn(`.exec ${__key__} 被禁用`);
            }
            return flag;
          });
          return execFlag;
        }
      );
      Panel.execMenuOnce("pc-xhs-article-fullWidth", () => {
        return this.fullWidth();
      });
    },
    optimizationSearch() {
      const blankSearchText = function (searchText, isBlank = true) {
        {
          const $searchText = $("#search-input");
          if ($searchText) {
            const searchText2 = $searchText.value;
            const searchUrl = XHSUrlApi.getSearchUrl(searchText2);
            log.info("搜索内容: " + searchText2);
            window.open(searchUrl, isBlank ? "_blank" : "_self");
          } else {
            Qmsg.error("未找到搜索的输入框");
          }
        }
      };
      domUtils.waitNode("#search-input").then(($searchInput) => {
        $searchInput.placeholder = "搜索小红书";
        Panel.execMenu("pc-xhs-search-open-blank-keyboard-enter", () => {
          domUtils.onKeyboard($searchInput, "keydown", (keyName, keyValue, otherCodeList, event) => {
            if (keyName === "Enter" && !otherCodeList.length) {
              log.info("按下回车键");
              domUtils.preventEvent(event);
              $searchInput.blur();
              blankSearchText();
            }
          });
        });
      });
      domUtils.waitNode("#search-input + .input-button .search-icon").then(($searchIconBtn) => {
        Panel.execMenu("pc-xhs-search-open-blank-btn", () => {
          domUtils.on(
            $searchIconBtn,
            "click",
            (event) => {
              domUtils.preventEvent(event);
              log.info("点击搜索按钮");
              blankSearchText();
            },
            {
              capture: true,
            }
          );
        });
      });
    },
    fullWidth() {
      log.info("笔记宽屏");
      const noteContainerWidth = Panel.getValue("pc-xhs-article-fullWidth-widthSize", 90);
      const imageSize = Panel.getValue("pc-xhs-article-fullWidth-imageSize", 80);
      return addStyle(
        `
		.main-container .main-content{
			padding-left: 0 !important;
		}
		.outer-link-container{
			width: 100% !important;
		}
		/* 隐藏左侧工具栏 */
		.main-container .side-bar{
			display: none !important;
		}
		#noteContainer{
			width: ${noteContainerWidth}vw;
		}
		@media (min-width: 960px) {
			#noteContainer .media-container{
				width: ${imageSize}% !important;
				height: auto !important;
			}
		}
		@media (max-width: 959px) {
			#noteContainer .media-container{
				height: ${imageSize}% !important;
				width: auto !important;
			}
		}
		`
      );
    },
    transformPublishTime() {
      log.info(`转换笔记发布时间`);
      const lockFn = new utils.LockFunction(() => {
        $$(".note-content:not([data-edit-date])").forEach(($noteContent) => {
          const vueInst = VueUtils.getVue($noteContent);
          if (!vueInst) {
            return;
          }
          const note = vueInst?._?.props?.note;
          if (note == null) {
            return;
          }
          const publishTime = note.time;
          const lastUpdateTime = note.lastUpdateTime;
          const ipLocation = note.ipLocation;
          if (typeof publishTime === "number") {
            const detailTimeLocationInfo = [];
            detailTimeLocationInfo.push(`发布：${utils.formatTime(publishTime)}`);
            if (typeof lastUpdateTime === "number") {
              detailTimeLocationInfo.push(`修改：${utils.formatTime(lastUpdateTime)}`);
            }
            if (typeof ipLocation === "string" && utils.isNotNull(ipLocation)) {
              detailTimeLocationInfo.push(ipLocation);
            }
            const $date = $noteContent.querySelector(".date");
            domUtils.html($date, detailTimeLocationInfo.join("<br>"));
            $noteContent.setAttribute("data-edit-date", "");
          }
        });
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
          observer?.disconnect();
        },
      ];
    },
  };
  const XHSNetworkHook = {
    __ajaxHooker: null,
    get ajaxHooker() {
      if (this.__ajaxHooker == null) {
        this.__ajaxHooker = utils.ajaxHooker();
      }
      return this.__ajaxHooker;
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
  const UISelectMultiple = function (
    text,
    key,
    defaultValue,
    data,
    selectCallBack,
    description,
    placeholder = "请至少选择一个选项",
    selectConfirmDialogDetails,
    valueChangeCallBack
  ) {
    let selectData = [];
    if (typeof data === "function") {
      selectData = data();
    } else {
      selectData = data;
    }
    const result = {
      text,
      type: "select-multiple",
      description,
      placeholder,
      attributes: {},
      props: {},
      getValue() {
        const storageApiValue = this.props[PROPS_STORAGE_API];
        return storageApiValue.get(key, defaultValue);
      },
      selectConfirmDialogConfig: selectConfirmDialogDetails,
      callback(selectInfo) {
        const storageApiValue = this.props[PROPS_STORAGE_API];
        const value = [];
        selectInfo.forEach((selectedInfo) => {
          value.push(selectedInfo.value);
        });
        log.info(`多选-选择：`, value);
        storageApiValue.set(key, value);
      },
      data: selectData,
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi("select-multiple", result, {
      get(key2, defaultValue2) {
        return Panel.getValue(key2, defaultValue2);
      },
      set(key2, value) {
        Panel.setValue(key2, value);
      },
    });
    return result;
  };
  const UISlider = function (
    text,
    key,
    defaultValue,
    min,
    max,
    changeCallback,
    getToolTipContent,
    description,
    step,
    valueChangeCallBack
  ) {
    const result = {
      text,
      type: "slider",
      description,
      attributes: {},
      props: {},
      getValue() {
        const storageApiValue = this.props[PROPS_STORAGE_API];
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
          const result2 = changeCallback(event, value);
          if (result2) {
            return;
          }
        }
        const storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
      min,
      max,
      step,
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi("slider", result, {
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
        const storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
      afterAddToUListCallBack: (...args) => {},
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
  class RuleStorage {
    option;
    constructor(option) {
      this.option = option;
    }
    getAllRule() {
      const allRules = _GM_getValue(this.option.STORAGE_API_KEY, []);
      return allRules;
    }
    setAllRule(rules) {
      _GM_setValue(this.option.STORAGE_API_KEY, rules);
    }
    clearAllRule() {
      this.setAllRule([]);
    }
    getRule(uuid) {
      const allRules = this.getAllRule();
      const findIndex = allRules.findIndex((item) => item.uuid === uuid);
      if (findIndex !== -1) {
        const rule = allRules[findIndex];
        return rule;
      }
    }
    setRule(rule) {
      const allRules = this.getAllRule();
      const findIndex = allRules.findIndex((item) => item.uuid === rule.uuid);
      let updateFlag = false;
      if (findIndex !== -1) {
        allRules[findIndex] = rule;
        this.setAllRule(allRules);
        updateFlag = true;
      }
      return updateFlag;
    }
    addRule(rule) {
      const allRules = this.getAllRule();
      const findIndex = allRules.findIndex((item) => item.uuid === rule.uuid);
      let addFlag = false;
      if (findIndex !== -1);
      else {
        allRules.push(rule);
        this.setAllRule(allRules);
        addFlag = true;
      }
      return addFlag;
    }
    updateRule(rule) {
      const allRules = this.getAllRule();
      const findIndex = allRules.findIndex((item) => item.uuid === rule.uuid);
      if (findIndex !== -1) {
        allRules[findIndex] = rule;
      } else {
        allRules.push(rule);
      }
      this.setAllRule(allRules);
    }
    deleteRule(rule) {
      const allRules = this.getAllRule();
      const ruleUUID = typeof rule === "string" ? rule : rule.uuid;
      const findIndex = allRules.findIndex((item) => item.uuid === ruleUUID);
      if (findIndex !== -1) {
        allRules.splice(findIndex, 1);
        this.setAllRule(allRules);
        return true;
      } else {
        return false;
      }
    }
    importRules(importEndCallBack) {
      const $alert = __pops__.alert({
        title: {
          text: "请选择导入方式",
          position: "center",
        },
        content: {
          text: `
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,
          html: true,
        },
        btn: {
          ok: { enable: false },
          close: {
            enable: true,
            callback(details) {
              details.close();
            },
          },
        },
        mask: { enable: true },
        drag: true,
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
            `,
      });
      const $local = $alert.$shadowRoot.querySelector(".btn-control[data-mode='local']");
      const $network = $alert.$shadowRoot.querySelector(".btn-control[data-mode='network']");
      const $clipboard = $alert.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']");
      const updateRuleToStorage = async (data) => {
        let allData = this.getAllRule();
        const addNewData = [];
        const repeatData = [];
        let isRepeat = false;
        for (let index = 0; index < data.length; index++) {
          const dataItem = data[index];
          const findIndex = allData.findIndex((it) => it.uuid === dataItem.uuid);
          if (findIndex !== -1) {
            repeatData.push({
              index: findIndex,
              data: dataItem,
            });
          } else {
            addNewData.push(dataItem);
          }
        }
        if (repeatData.length) {
          const confirmRepeat = await new Promise((resolve) => {
            __pops__.alert({
              title: {
                text: "覆盖规则",
                position: "center",
              },
              content: {
                text: `存在相同的uuid的规则 ${repeatData.length}条，是否进行覆盖？`,
                html: true,
              },
              btn: {
                close: {
                  callback(details) {
                    details.close();
                    resolve(false);
                  },
                },
                ok: {
                  text: "覆盖",
                  callback(details) {
                    details.close();
                    resolve(true);
                  },
                },
              },
              width: PanelUISize.info.width,
              height: PanelUISize.info.height,
              mask: { enable: true },
              drag: true,
            });
          });
          if (confirmRepeat) {
            for (const repeatDataItem of repeatData) {
              allData[repeatDataItem.index] = repeatDataItem.data;
            }
            isRepeat = true;
          }
        }
        if (addNewData.length) {
          allData = allData.concat(addNewData);
        }
        this.setAllRule(allData);
        const message = `共 ${data.length} 条规则，新增 ${addNewData.length} 条，覆盖 ${isRepeat ? repeatData.length : 0} 条`;
        Qmsg.success(message);
        importEndCallBack?.();
      };
      const importFile = (subscribeText) => {
        return new Promise(async (resolve) => {
          const data = utils.toJSON(subscribeText);
          if (!Array.isArray(data)) {
            log.error(data);
            Qmsg.error("导入失败，格式不符合（不是数组）", {
              consoleLogContent: true,
            });
            resolve(false);
            return;
          }
          if (!data.length) {
            Qmsg.error("导入失败，解析出的数据为空", {
              consoleLogContent: true,
            });
            resolve(false);
            return;
          }
          await updateRuleToStorage(data);
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
        domUtils.on($input, ["propertychange", "input"], () => {
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
              callback(details) {
                details.close();
              },
            },
            ok: {
              text: "导入",
              callback: async (details) => {
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
          mask: { enable: true },
          drag: true,
          width: PanelUISize.info.width,
          height: "auto",
        });
        const $promptInput = $prompt.$shadowRoot.querySelector("input");
        const $promptOk = $prompt.$shadowRoot.querySelector(".pops-prompt-btn-ok");
        domUtils.on($promptInput, ["input", "propertychange"], () => {
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
        const clipboardInfo = await utils.getClipboardInfo();
        if (clipboardInfo.error != null) {
          Qmsg.error(clipboardInfo.error.toString());
          return;
        }
        if (clipboardInfo.content.trim() === "") {
          Qmsg.warning("获取到的剪贴板内容为空");
          return;
        }
        const flag = await importFile(clipboardInfo.content);
        if (!flag) {
          return;
        }
      });
    }
    exportRules(fileName = "rule.json") {
      const allRules = this.getAllRule();
      const blob = new Blob([JSON.stringify(allRules, null, 4)]);
      const blobUrl = globalThis.URL.createObjectURL(blob);
      const $a = document.createElement("a");
      $a.href = blobUrl;
      $a.download = fileName;
      $a.click();
      setTimeout(() => {
        globalThis.URL.revokeObjectURL(blobUrl);
      }, 1500);
    }
  }
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
  class XHSArticleFilterBase {
    parseInfoDictData(info, showLog = false) {
      const note_card = info?.note_card;
      let articleId = info.id;
      let display_title = note_card.display_title;
      let isLike = Boolean(note_card?.interact_info?.liked);
      let liked_count = 0;
      let liked_count_str = info?.note_card?.interact_info?.liked_count;
      if (typeof liked_count_str === "string") {
        liked_count = parseInt(liked_count_str);
        if (isNaN(liked_count)) {
          liked_count = 0;
        }
      }
      let nick_name = note_card?.user?.nick_name || note_card?.user?.nickname;
      let user_id = note_card?.user?.user_id;
      let isVideo = note_card?.type === "video";
      let videoDuration = note_card?.video?.capa?.duration || 0;
      return {
        articleId,
        display_title,
        isLike,
        liked_count,
        nick_name,
        user_id,
        isVideo,
        videoDuration,
      };
    }
    checkFilterWithRule(details) {
      if (details.infoValue == null) {
        return false;
      }
      if (details.ruleValue == null) {
        return false;
      }
      if (typeof details.infoValue === "string") {
        if (Boolean(details.infoValue.match(details.ruleValue))) {
          return true;
        }
      } else if (typeof details.infoValue === "object") {
        if (Array.isArray(details.infoValue)) {
          let findValue = details.infoValue.find((infoDictValue) => {
            if (typeof infoDictValue === "string" && details.ruleValue != null) {
              return Boolean(infoDictValue.match(details.ruleValue));
            } else {
              return false;
            }
          });
          if (findValue) {
            return true;
          }
        }
      } else if (typeof details.infoValue === "number") {
        if (typeof details.ruleValue === "string") {
          let ruleValue = details.ruleValue.trim();
          let compareNumberMatch = ruleValue.match(/(\d+)/);
          if (!compareNumberMatch) {
            log.warn("过滤器-解析比较大小的数字失败: ", details);
            return false;
          }
          let compareNumber = Number(compareNumberMatch[1]);
          if (ruleValue.startsWith(">")) {
            if (ruleValue.startsWith(">=")) {
              if (details.infoValue >= compareNumber) {
                return true;
              }
            } else {
              if (details.infoValue > compareNumber) {
                return true;
              }
            }
          } else if (ruleValue.startsWith("<")) {
            if (ruleValue.startsWith("<=")) {
              if (details.infoValue <= compareNumber) {
                return true;
              }
            } else {
              if (details.infoValue < compareNumber) {
                return true;
              }
            }
          } else if (ruleValue.startsWith("=")) {
            if (details.infoValue === compareNumber) {
              return true;
            }
          } else {
            log.warn("视频过滤器-未经允许的比较符号: ", details);
            return false;
          }
        }
      } else if (typeof details.infoValue === "boolean") {
        if (typeof details.ruleValue === "string") {
          let trimRuleValue = details.ruleValue.trim();
          return details.infoValue.toString() === trimRuleValue;
        }
      }
      return false;
    }
    checkInfoIsFilter(rule, info) {
      let transformInfo = this.parseInfoDictData(info);
      let flag = false;
      let matchedFilterOption = null;
      outerLoop: for (let index = 0; index < rule.length; index++) {
        const filterOption = rule[index];
        const ruleNameList = Array.isArray(filterOption.data.ruleName)
          ? filterOption.data.ruleName
          : [filterOption.data.ruleName];
        for (let ruleNameIndex = 0; ruleNameIndex < ruleNameList.length; ruleNameIndex++) {
          const ruleName = ruleNameList[ruleNameIndex];
          if (!Reflect.has(transformInfo, ruleName)) {
            continue;
          }
          let tagKey = ruleName;
          let tagValue = transformInfo[tagKey];
          let details = {
            infoKey: tagKey,
            infoValue: tagValue,
            ruleKey: filterOption.data.ruleName,
            ruleValue: filterOption.data.ruleValue,
          };
          flag = this.checkFilterWithRule(details);
          if (flag) {
            if (Array.isArray(filterOption.dynamicData) && filterOption.dynamicData.length) {
              let dynamicDetailsList = [];
              for (let dynamicIndex = 0; dynamicIndex < filterOption.dynamicData.length; dynamicIndex++) {
                const dynamicOption = filterOption.dynamicData[dynamicIndex];
                let dynamicTagKey = dynamicOption.ruleName;
                let dynamicTagValue = transformInfo[dynamicTagKey];
                let dynamicDetails = {
                  infoKey: dynamicTagKey,
                  infoValue: dynamicTagValue,
                  ruleKey: dynamicOption.ruleName,
                  ruleValue: dynamicOption.ruleValue,
                };
                dynamicDetailsList.push(dynamicDetails);
                let dynamicCheckFlag = this.checkFilterWithRule(dynamicDetails);
                flag = flag && dynamicCheckFlag;
                if (!flag) {
                  break;
                }
              }
              if (flag) {
                log.success([
                  `视频过滤器-多组 ==> ${filterOption.name}`,
                  transformInfo,
                  details,
                  dynamicDetailsList,
                  info,
                  filterOption,
                ]);
              }
            } else {
              log.success([`视频过滤器 ==> ${filterOption.name}`, transformInfo, details, info, filterOption]);
            }
          }
          if (flag) {
            matchedFilterOption = filterOption;
            break outerLoop;
          }
        }
      }
      return {
        isFilter: flag,
        matchedFilterOption,
        transformInfo,
        info,
      };
    }
    removeArticle(...args) {
      if (args.length === 1) {
        let $el = args[0];
        if ($el != null && $el instanceof Element) {
          $el.remove();
        }
      } else if (args.length === 2) {
        let infoList = args[0];
        let deleteIndex = args[1];
        if (typeof deleteIndex === "number") {
          let item = infoList[deleteIndex];
          if (item != null && item instanceof Element) {
            item.remove();
          }
          infoList.splice(deleteIndex, 1);
        }
      }
    }
  }
  const XHSArticleFilter = {
    $key: {
      ENABLE_KEY: "shieldVideo-exec-network-enable",
    },
    $data: {
      isFilterAwemeInfoList: new Utils.Dictionary(),
      articleInfoMap: new Utils.Dictionary(),
      __videoFilterRuleStorage: null,
      get videoFilterRuleStorage() {
        if (this.__videoFilterRuleStorage == null) {
          this.__videoFilterRuleStorage = new RuleStorage({
            STORAGE_API_KEY: "xhs-article-filter-rule",
          });
        }
        return this.__videoFilterRuleStorage;
      },
      get isReverse() {
        return Panel.getValue("xhs-article-filter-only-show-filtered-video");
      },
    },
    init() {
      this.execFilter();
    },
    execFilter() {
      Panel.execMenuOnce(this.$key.ENABLE_KEY, async () => {
        log.info(`执行笔记过滤器`);
        let filterBase = new XHSArticleFilterBase();
        let checkFilterCallBack = (filterTransformInfoResult) => {
          if (this.$data.isReverse) {
            filterTransformInfoResult.isFilter = !filterTransformInfoResult.isFilter;
            if (
              typeof filterTransformInfoResult.transformInfo.articleId === "string" &&
              filterTransformInfoResult.matchedFilterOption
            ) {
              let filterOptionList =
                this.$data.isFilterAwemeInfoList.get(filterTransformInfoResult.transformInfo.articleId) || [];
              filterOptionList.push(filterTransformInfoResult.matchedFilterOption);
              this.$data.isFilterAwemeInfoList.set(filterTransformInfoResult.transformInfo.articleId, filterOptionList);
            }
          }
          if (typeof filterTransformInfoResult.transformInfo.articleId === "string") {
            this.$data.articleInfoMap.set(filterTransformInfoResult.transformInfo.articleId, {
              articleInfo: filterTransformInfoResult.info,
              transformArticleInfo: filterTransformInfoResult.transformInfo,
            });
          }
        };
        let queryScopeFilterOptionList = (scopeName) => {
          if (!Panel.getValue(this.$key.ENABLE_KEY)) {
            return [];
          }
          let filterOptionList = this.$data.videoFilterRuleStorage.getAllRule();
          if (!filterOptionList.length) {
            return [];
          }
          let scopeNameList = Array.isArray(scopeName) ? scopeName : [scopeName];
          let matchedFilterOptionList = filterOptionList.filter(
            (it) =>
              it.enable &&
              (it.data.scope.includes("all") ||
                Array.from(scopeNameList).findIndex((item) => it.data.scope.includes(item)) !== -1)
          );
          return matchedFilterOptionList;
        };
        let xhr_hook_callback_1 = (scopeName, request) => {
          request.response = (response) => {
            let filterOptionList = queryScopeFilterOptionList(scopeName);
            if (!filterOptionList.length) {
              return;
            }
            let data = utils.toJSON(response.responseText);
            let items = data?.["data"]?.["items"];
            if (Array.isArray(items)) {
              for (let index = 0; index < items.length; index++) {
                let awemeInfo = items[index] || {};
                let filterResult = filterBase.checkInfoIsFilter(filterOptionList, awemeInfo);
                checkFilterCallBack(filterResult);
                if (filterResult.isFilter) {
                  filterBase.removeArticle(items, index--);
                }
              }
              response.responseText = JSON.stringify(data);
            }
          };
        };
        XHSNetworkHook.ajaxHooker.hook((request) => {
          let url = CommonUtil.fixUrl(request.url);
          let urlInst = new URL(url);
          if (urlInst.pathname.startsWith("/api/sns/web/v1/homefeed")) {
            xhr_hook_callback_1("xhr-explore", request);
          }
        });
      });
    },
    getTemplateData() {
      return {
        uuid: utils.generateUUID(),
        enable: true,
        name: "",
        data: {
          scope: [],
          ruleName: "display_title",
          ruleValue: "",
          remarks: "",
        },
        dynamicData: [],
      };
    },
    showView() {
      let ruleView = this.getRuleViewInstance();
      ruleView.showView();
    },
    getRuleViewInstance() {
      const that = this;
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
        title: "笔记过滤器",
        data: () => {
          return this.$data.videoFilterRuleStorage.getAllRule();
        },
        getAddData: () => {
          return this.getTemplateData();
        },
        getDataItemName: (data) => {
          return data["name"];
        },
        updateData: (data) => {
          return this.$data.videoFilterRuleStorage.setRule(data);
        },
        deleteData: (data) => {
          return this.$data.videoFilterRuleStorage.deleteRule(data);
        },
        getData: (data) => {
          let allData = this.$data.videoFilterRuleStorage.getAllRule();
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
              this.$data.videoFilterRuleStorage.setRule(data);
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
              let $enable = panelHandlerComponents.createSectionContainerItem_switch(enable_template).$el;
              let name_template = UIInput("规则名称", "name", "", "", void 0, "必填");
              Reflect.set(name_template.props, PROPS_STORAGE_API, generateStorageApi(data));
              let $name = panelHandlerComponents.createSectionContainerItem_input(name_template).$el;
              let scope_template = UISelectMultiple(
                "作用域",
                "scope",
                [],
                [
                  {
                    text: "所有",
                    value: "all",
                  },
                  {
                    text: "发现",
                    value: "xhr-explore",
                  },
                ].map((it) => {
                  let result = {
                    ...it,
                    value: it.value,
                  };
                  return result;
                }),
                void 0,
                "选择需要在xxx上生效的作用域"
              );
              Reflect.set(scope_template.props, PROPS_STORAGE_API, generateStorageApi(data.data));
              let $scope = panelHandlerComponents.createSectionContainerItem_select_multiple(scope_template).$el;
              let keyNameHandlerInfo = [
                "display_title",
                "isLike",
                "liked_count",
                "nick_name",
                "user_id",
                "isVideo",
                "videoDuration",
              ];
              let getDynamicProp = (storageData) => {
                let ruleNameDefaultValue = Array.isArray(storageData["ruleName"])
                  ? storageData["ruleName"]
                  : [storageData["ruleName"]];
                let ruleName_template = UISelectMultiple(
                  "属性名",
                  "ruleName",
                  ruleNameDefaultValue,
                  keyNameHandlerInfo.map((item) => {
                    return {
                      text: item,
                      value: item,
                    };
                  }),
                  void 0,
                  "选择需要的属性名 "
                );
                Reflect.set(ruleName_template.props, PROPS_STORAGE_API, generateStorageApi(storageData));
                let $ruleName2 =
                  panelHandlerComponents.createSectionContainerItem_select_multiple(ruleName_template).$el;
                let ruleValue_template = UITextArea("属性值", "ruleValue", "", "如果是字符串，可正则，注意转义");
                Reflect.set(ruleValue_template.props, PROPS_STORAGE_API, generateStorageApi(storageData));
                let $ruleValue2 = panelHandlerComponents.createSectionContainerItem_textarea(ruleValue_template).$el;
                let remarks_template = UITextArea("备注", "remarks", "", "");
                Reflect.set(remarks_template.props, PROPS_STORAGE_API, generateStorageApi(storageData));
                let $remarks2 = panelHandlerComponents.createSectionContainerItem_textarea(remarks_template).$el;
                return {
                  $ruleName: $ruleName2,
                  $ruleValue: $ruleValue2,
                  $remarks: $remarks2,
                };
              };
              let $dynamicContainer = domUtils.createElement("div", {
                className: "rule-form-ulist-dynamic",
                innerHTML: `
							<div class="rule-form-ulist-dynamic__inner">

							</div>
							<div class="pops-panel-button pops-panel-button-no-icon">
								<button class="pops-panel-button_inner" data-type="default">
									<i class="pops-bottom-icon" is-loading="false"></i>
									<span class="pops-panel-button-text">添加额外属性</span>
								</button>
							</div>
							`,
              });
              let $dynamicInner = $dynamicContainer.querySelector(".rule-form-ulist-dynamic__inner");
              let $addDynamicButton = $dynamicContainer.querySelector(".pops-panel-button");
              let addDynamicElementItem = (
                dynamicData = {
                  ruleName: [],
                  ruleValue: "",
                  remarks: "",
                }
              ) => {
                let $dynamicUListContainer = domUtils.createElement("div", {
                  className: "rule-form-ulist-dynamic__inner-container",
                  innerHTML: `
									<div class="dynamic-control-delete">
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" data-type="danger">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">×</span>
											</button>
										</div>
									</div>
									<ul class="dynamic-forms">

									</ul>
								`,
                });
                let $dynamicDelete = $dynamicUListContainer.querySelector(".dynamic-control-delete");
                domUtils.on($dynamicDelete, "click", (event) => {
                  domUtils.preventEvent(event);
                  $dynamicUListContainer.remove();
                  if (Array.isArray(data.dynamicData)) {
                    let findIndex = data.dynamicData.findIndex((it) => it == dynamicData);
                    if (findIndex !== -1) {
                      data.dynamicData.splice(findIndex, 1);
                    }
                  }
                });
                let $dynamicUList = $dynamicUListContainer.querySelector(".dynamic-forms");
                let {
                  $ruleName: $dynamic_ruleName,
                  $ruleValue: $dynamic_ruleValue,
                  $remarks: $dynamic_remarks,
                } = getDynamicProp(dynamicData);
                $dynamicUList.appendChild($dynamic_ruleName);
                $dynamicUList.appendChild($dynamic_ruleValue);
                $dynamicUList.appendChild($dynamic_remarks);
                $dynamicInner.appendChild($dynamicUListContainer);
              };
              domUtils.on($addDynamicButton, "click", (event) => {
                domUtils.preventEvent(event);
                addDynamicElementItem();
              });
              if (Array.isArray(data.dynamicData)) {
                for (let index = 0; index < data.dynamicData.length; index++) {
                  const moreDataItem = data.dynamicData[index];
                  addDynamicElementItem(moreDataItem);
                }
              }
              let { $ruleName, $ruleValue, $remarks } = getDynamicProp(data.data);
              $fragment.append($enable, $name, $scope, $ruleName, $ruleValue, $remarks, $dynamicContainer);
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
                if (!viewConfig) {
                  return;
                }
                let attrs = Reflect.get(viewConfig, "attributes");
                if (!attrs) {
                  return;
                }
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
              $form.querySelectorAll(".rule-form-ulist-dynamic__inner-container").forEach(($inner) => {
                let dynamicData = {};
                $inner.querySelectorAll(".dynamic-forms > li").forEach(($li) => {
                  let viewConfig = Reflect.get($li, panelHandlerComponents.$data.nodeStoreConfigKey);
                  if (!viewConfig) {
                    return;
                  }
                  let attrs = Reflect.get(viewConfig, "attributes");
                  if (!attrs) {
                    return;
                  }
                  let storageApi = Reflect.get($li, PROPS_STORAGE_API);
                  let key = Reflect.get(attrs, ATTRIBUTE_KEY);
                  let defaultValue = Reflect.get(attrs, ATTRIBUTE_DEFAULT_VALUE);
                  let value = storageApi.get(key, defaultValue);
                  Reflect.set(dynamicData, key, value);
                });
                data.dynamicData.push(dynamicData);
              });
              if (data.name.trim() === "") {
                Qmsg.error("规则名称不能为空");
                return {
                  success: false,
                  data,
                };
              }
              if (data.data.scope.length === 0) {
                Qmsg.error("请选择作用域");
                return {
                  success: false,
                  data,
                };
              }
              if (data.data.ruleName.length === 0) {
                Qmsg.error("请选择属性名");
                return {
                  success: false,
                  data,
                };
              }
              if (data.data.ruleValue.trim() === "") {
                Qmsg.error("属性值不能为空");
                return {
                  success: false,
                  data,
                };
              }
              if (isEdit) {
                return {
                  success: that.$data.videoFilterRuleStorage.setRule(data),
                  data,
                };
              } else {
                return {
                  success: that.$data.videoFilterRuleStorage.addRule(data),
                  data,
                };
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
					}
					.rule-form-ulist-dynamic{
						--button-margin-top: 0px;
						--button-margin-right: 0px;
						--button-margin-bottom: 0px;
						--button-margin-left: 0px;
						display: flex;
						flex-direction: column;
						align-items: flex-start;
						padding: 5px 20px;
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
					.pops-panel-textarea textarea{
						height: 60px;
						min-height: 60px;
						width: 250px;
						max-width: 400px;
						min-width: 250px;
						resize: auto;
						transition: unset;
					}
                    `,
            width: () => {
              return window.innerWidth > 700 ? "700px" : "88vw";
            },
          },
          delete: {
            enable: true,
            deleteCallBack: (data) => {
              return that.$data.videoFilterRuleStorage.deleteRule(data);
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
            ],
            inputOption: [
              {
                name: "规则名称",
                value: "name",
                filterCallBack(data, value) {
                  return !!data.name.match(value);
                },
              },
              {
                name: "备注",
                value: "remarks",
                filterCallBack(data, value) {
                  let flag = !!data.data.remarks.match(value);
                  if (!flag) {
                    flag = !!data.dynamicData?.find((it) => {
                      return !!it.remarks.match(value);
                    });
                  }
                  return flag;
                },
              },
            ],
          },
          clear: {
            enable: true,
            callback: () => {
              that.$data.videoFilterRuleStorage.clearAllRule();
            },
          },
        },
      });
      return ruleView;
    },
  };
  const blockCSS = "";
  const XHSBlock = {
    init() {
      Panel.execMenuOnce("pc-xhs-shieldAd", () => {
        return addStyle(blockCSS);
      });
      Panel.execMenuOnce("pc-xhs-shield-select-text-search-position", () => {
        return this.blockSelectTextVisibleSearchPosition();
      });
      Panel.execMenuOnce("pc-xhs-shield-topToolbar", () => {
        return this.blockTopToolbar();
      });
      domUtils.onReady(() => {
        Panel.execMenuOnce("pc-xhs-shield-login-dialog", () => {
          return this.blockLoginContainer();
        });
      });
    },
    blockLoginContainer() {
      log.info("添加屏蔽登录弹窗CSS，监听登录弹窗出现");
      const observer = utils.mutationObserver(document.body, {
        config: {
          subtree: true,
          childList: true,
        },
        immediate: true,
        callback: () => {
          const $close = $(".login-container .icon-btn-wrapper");
          if ($close) {
            $close.click();
            log.success("登录弹窗出现，自动点击关闭按钮");
          }
        },
      });
      return [
        CommonUtil.addBlockCSS(".login-container"),
        () => {
          observer?.disconnect();
        },
      ];
    },
    blockSelectTextVisibleSearchPosition() {
      log.info("屏蔽选择文字弹出的搜索提示");
      return CommonUtil.addBlockCSS(".search-position");
    },
    blockTopToolbar() {
      log.info("【屏蔽】顶部工具栏");
      return [
        CommonUtil.addBlockCSS("#headerContainer", ".header-container"),
        addStyle(
          `
			/* 主内容去除padding */
			#mfContainer{
				padding-top: 0 !important;
			}
			.outer-link-container{
				margin-top: 0 !important;
				height: 100vh !important;
				padding: 30px 0;
			}
			#noteContainer{
				height: 100%;
			}
			`
        ),
      ];
    },
  };
  const XHS = {
    init() {
      XHSArticleFilter.init();
      Panel.execMenuOnce("pc-xhs-hook-vue", () => {
        XHSHook.hookVue();
      });
      Panel.execMenuOnce("pc-xhs-allowCopy", () => {
        return XHS.allowPCCopy();
      });
      Panel.execMenuOnce("pc-xhs-open-blank-article", () => {
        return XHS.openBlankArticle();
      });
      XHSBlock.init();
      Panel.execMenuOnce("pc-xhs-article-showPubsliushTime", () => {
        return XHSArticle.transformPublishTime();
      });
      if (XHSRouter.isArticle()) {
        log.info("Router: 笔记页面");
        XHSArticle.init();
      }
    },
    allowPCCopy() {
      log.success("允许复制文字");
      const callback = (event) => {
        domUtils.preventEvent(event);
        let selectText = _unsafeWindow.getSelection();
        if (selectText) {
          utils.copy(selectText.toString());
        } else {
          log.error("未选中任何内容");
        }
        return false;
      };
      const listener = domUtils.on(_unsafeWindow, "copy", callback, {
        capture: true,
      });
      return [
        () => {
          listener.off();
        },
      ];
    },
    openBlankArticle() {
      log.success("新标签页打开文章");
      const callback = (event, $click) => {
        if (!Panel.getValue("pc-xhs-open-blank-article")) return;
        domUtils.preventEvent(event);
        const $url = $click.querySelector("a.cover[href]");
        let url = $url?.href;
        if (url) {
          log.info("跳转文章: " + url);
          const urlInst = new URL(url);
          urlInst.pathname = urlInst.pathname.replace(/^\/user\/profile\/[a-z0-9A-Z]+\//i, "/discovery/item/");
          url = urlInst.toString();
          window.open(url, "_blank");
        } else {
          Qmsg.error("未找到文章链接");
        }
      };
      const listener = domUtils.on(document, "click", ".feeds-container .note-item", callback, {
        capture: true,
      });
      return [
        () => {
          listener.off();
        },
      ];
    },
  };
  const MSettingUI_Common = {
    id: "little-red-book-panel-config-common",
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
                    (isSelectedInfo) => {
                      log.info("设置当前Qmsg弹出位置" + isSelectedInfo.text);
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
            text: "屏蔽",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [
                  UISwitch("【屏蔽】广告", "little-red-book-shieldAd", true, void 0, "如：App内打开"),
                  UISwitch("【屏蔽】底部搜索发现", "little-red-book-shieldBottomSearchFind", true, void 0, "建议开启"),
                  UISwitch("【屏蔽】底部工具栏", "little-red-book-shieldBottomToorBar", true, void 0, "建议开启"),
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const MSettingUI_Home = {
    id: "little-red-book-panel-config-home",
    title: "主页",
    views: [
      {
        text: "",
        type: "container",
        views: [
          {
            text: "劫持/拦截",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [
                  UISwitch("劫持点击事件", "little-red-book-repariClick", true, void 0, "可阻止点击跳转至下载页面"),
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const MSettingUI_Notes = {
    id: "little-red-book-panel-config-note",
    title: "笔记",
    views: [
      {
        text: "",
        type: "container",
        views: [
          {
            text: "视频笔记",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [
                  UISwitch(
                    "优化视频描述",
                    "little-red-book-optimizeVideoNoteDesc",
                    true,
                    void 0,
                    "让视频描述可以滚动显示更多"
                  ),
                  UISwitch("【屏蔽】作者热门笔记", "little-red-book-shieldAuthorHotNote", true, void 0, "建议开启"),
                  UISwitch("【屏蔽】热门推荐", "little-red-book-shieldHotRecommendNote", true, void 0, "建议开启"),
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
                  UISwitch(
                    "优化评论浏览",
                    "little-red-book-optimizeCommentBrowsing",
                    true,
                    void 0,
                    "目前仅可加载部分评论"
                  ),
                  UISwitch("优化图片浏览", "little-red-book-optimizeImageBrowsing", true, void 0, "更方便的浏览图片"),
                  UISwitch("允许复制", "little-red-book-allowCopy", true, void 0, "可以复制笔记的内容"),
                ],
              },
            ],
          },
          {
            text: "劫持/拦截",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [
                  UISwitch(
                    "劫持webpack-弹窗",
                    "little-red-book-hijack-webpack-mask",
                    true,
                    void 0,
                    "如：打开App弹窗、登录弹窗"
                  ),
                  UISwitch(
                    "劫持webpack-唤醒App",
                    "little-red-book-hijack-webpack-scheme",
                    true,
                    void 0,
                    "禁止跳转商店小红书详情页/小红书"
                  ),
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const SettingUI_Article = {
    id: "xhs-panel-config-article",
    title: "笔记",
    views: [
      {
        type: "container",
        text: "功能",
        views: [
          UISwitch(
            "显示发布、修改的绝对时间",
            "pc-xhs-article-showPubsliushTime",
            false,
            void 0,
            "注：需要开启<code>通用</code>-<code>劫持/拦截</code>-<code>劫持Vue</code>"
          ),
        ],
      },
      {
        text: "笔记宽屏",
        type: "container",
        views: [
          UISwitch(
            "启用",
            "pc-xhs-article-fullWidth",
            false,
            void 0,
            `让笔记占据宽屏，当页面可视宽度>=960px时才会触发该功能，当前页面可视宽度: ${window.innerWidth}px`
          ),
          UISlider(
            "占据范围",
            "pc-xhs-article-fullWidth-widthSize",
            90,
            30,
            100,
            (event, value) => {
              let $noteContainer = $("#noteContainer");
              if (!$noteContainer) {
                log.error("未找到笔记容器");
                return;
              }
              $noteContainer.style.width = `${value}vw`;
            },
            (value) => {
              return `${value}%，默认：90%`;
            },
            "调整笔记页面占据的页面范围"
          ),
          UISlider(
            "图片尺寸",
            "pc-xhs-article-fullWidth-imageSize",
            80,
            30,
            100,
            (event, value) => {
              let $noteContainer = $("#noteContainer");
              if (!$noteContainer) {
                log.error("未找到笔记容器");
                return;
              }
              let $mediaContainer = $noteContainer.querySelector(".media-container");
              if (!$mediaContainer) {
                log.error("未找到媒体容器");
                return;
              }
              if (window.innerWidth >= 960) {
                $mediaContainer.style.width = `${value}%`;
                $mediaContainer.style.height = "";
              } else {
                $mediaContainer.style.height = `${value}%`;
                $mediaContainer.style.width = "";
              }
            },
            (value) => {
              return `${value}%，默认：80%`;
            },
            "横向布局时调整宽度，竖向布局时调整高度"
          ),
        ],
      },
    ],
  };
  const SettingUI_Common = {
    id: "xhs-panel-config-common",
    title: "通用",
    views: [
      {
        type: "container",
        text: "",
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
                    (isSelectedInfo) => {
                      log.info("设置当前Qmsg弹出位置" + isSelectedInfo.text);
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
                  UISwitch("允许复制", "pc-xhs-allowCopy", true, void 0, "可以选择文字并复制"),
                  UISwitch(
                    "新标签页打开文章",
                    "pc-xhs-open-blank-article",
                    false,
                    void 0,
                    "点击文章不会在本页展开，会打开新标签页"
                  ),
                ],
              },
            ],
          },
          {
            text: "搜索",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [
                  UISwitch(
                    "新标签页打开-搜索按钮",
                    "pc-xhs-search-open-blank-btn",
                    false,
                    void 0,
                    "点击右边的搜索按钮直接新标签页打开搜索内容"
                  ),
                  UISwitch(
                    "新标签页打开-回车键",
                    "pc-xhs-search-open-blank-keyboard-enter",
                    false,
                    void 0,
                    "按下回车键直接新标签页打开搜索内容"
                  ),
                ],
              },
            ],
          },
          {
            text: "屏蔽",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [
                  UISwitch("【屏蔽】广告", "pc-xhs-shieldAd", true, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】登录弹窗", "pc-xhs-shield-login-dialog", true, void 0, "屏蔽会自动弹出的登录弹窗"),
                  UISwitch(
                    "【屏蔽】选择文字弹出的搜索提示",
                    "pc-xhs-shield-select-text-search-position",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch("【屏蔽】顶部工具栏", "pc-xhs-shield-topToolbar", false, void 0, "屏蔽元素"),
                ],
              },
            ],
          },
          {
            type: "deepMenu",
            text: "笔记过滤器",
            views: [
              {
                text: '<a href="https://greasyfork.org/zh-CN/scripts/483960-%E5%B0%8F%E7%BA%A2%E4%B9%A6%E4%BC%98%E5%8C%96#:~:text=%E5%B1%8F%E8%94%BD%E8%A7%84%E5%88%99" target="_blank">点击查看规则</a>',
                type: "container",
                views: [
                  UISwitch("启用", "shieldVideo-exec-network-enable", true, void 0, "开启后以下功能才会生效"),
                  UISwitch(
                    "仅显示被过滤的笔记",
                    "xhs-article-filter-only-show-filtered-video",
                    false,
                    void 0,
                    "只会显示过滤规则命中的笔记"
                  ),
                  UIButton("笔记过滤规则", "可过滤笔记", "自定义", void 0, false, false, "primary", () => {
                    XHSArticleFilter.showView();
                  }),
                ],
              },
              {
                type: "container",
                text: "",
                views: [
                  UIButton("数据导入", "导入自定义规则数据", "导入", void 0, false, false, "primary", () => {
                    XHSArticleFilter.$data.videoFilterRuleStorage.importRules();
                  }),
                  UIButton("数据导出", "导出自定义规则数据", "导出", void 0, false, false, "primary", () => {
                    XHSArticleFilter.$data.videoFilterRuleStorage.exportRules(_SCRIPT_NAME_ + "-视频过滤规则.json");
                  }),
                ],
              },
            ],
          },
          {
            text: "劫持/拦截",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [UISwitch("劫持Vue", "pc-xhs-hook-vue", true, void 0, "恢复__vue__属性")],
              },
            ],
          },
        ],
      },
    ],
  };
  addStyle(
    `
.qmsg svg.animate-turn {
    fill: none;
}
`
  );
  PanelContent.addContentConfig([SettingUI_Common, SettingUI_Article]);
  PanelContent.addContentConfig([MSettingUI_Common, MSettingUI_Home, MSettingUI_Notes]);
  const defaultMenuOption = PanelMenu.getMenuOption();
  defaultMenuOption.text = "⚙ PC-设置";
  PanelMenu.updateMenuOption(defaultMenuOption);
  PanelMenu.addMenuOption({
    key: "show_mobile_setting",
    text: "⚙ 移动端-设置",
    autoReload: false,
    isStoreValue: false,
    showText(text) {
      return text;
    },
    callback: () => {
      Panel.showPanel(PanelContent.getConfig(1), `${_SCRIPT_NAME_}-移动端设置`);
    },
  });
  Panel.init();
  let isMobile = utils.isPhone();
  let CHANGE_ENV_SET_KEY = "change_env_set";
  let chooseMode = _GM_getValue(CHANGE_ENV_SET_KEY);
  MenuRegister.add({
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
      let chooseText = window.prompt("请输入当前脚本环境判定\n\n自动判断: 0\n移动端: 1\nPC端: 2", "0");
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
    },
  });
  if (chooseMode != null) {
    log.info(`手动判定为${chooseMode === 1 ? "移动端" : "PC端"}`);
    if (chooseMode == 1) {
      M_XHS.init();
    } else if (chooseMode == 2) {
      XHS.init();
    } else {
      Qmsg.error("意外，手动判定的值不在范围内");
      _GM_deleteValue(CHANGE_ENV_SET_KEY);
    }
  } else {
    if (isMobile) {
      log.info("自动判定为移动端");
      M_XHS.init();
    } else {
      log.info("自动判定为PC端");
      XHS.init();
    }
  }
})(Qmsg, DOMUtils, pops, Utils, Viewer);
