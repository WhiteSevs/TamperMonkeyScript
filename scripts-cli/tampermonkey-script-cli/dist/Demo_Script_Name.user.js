// ==UserScript==
// @name         Demo_Script_Name
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.5.15
// @author       WhiteSevs
// @description  demo_description
// @license      GPL-3.0-only
// @icon         https://avatars.githubusercontent.com/u/50544447?s=64&v=4
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.12.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@2.0.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.2/dist/index.umd.js
// @connect      *
// @grant        GM_addValueChangeListener
// @grant        GM_deleteValue
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_listValues
// @grant        GM_registerMenuCommand
// @grant        GM_removeValueChangeListener
// @grant        GM_setValue
// @grant        GM_setValues
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (_whitesev_domutils, _whitesev_pops, _whitesev_utils, qmsg) {
  "use strict";
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __copyProps = (to, from, except, desc) => {
    if ((from && typeof from === "object") || typeof from === "function")
      for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
        key = keys[i];
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
            get: ((k) => from[k]).bind(null, key),
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
          });
      }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (
    (target = mod != null ? __create(__getProtoOf(mod)) : {}),
    __copyProps(
      isNodeMode || !mod || !mod.__esModule
        ? __defProp(target, "default", {
            value: mod,
            enumerable: true,
          })
        : target,
      mod
    )
  );
  _whitesev_domutils = __toESM(_whitesev_domutils);
  _whitesev_pops = __toESM(_whitesev_pops);
  _whitesev_utils = __toESM(_whitesev_utils);
  qmsg = __toESM(qmsg);
  var _GM_addValueChangeListener = typeof GM_addValueChangeListener != "undefined" ? GM_addValueChangeListener : void 0;
  var _GM_deleteValue = typeof GM_deleteValue != "undefined" ? GM_deleteValue : void 0;
  var _GM_getResourceText = typeof GM_getResourceText != "undefined" ? GM_getResourceText : void 0;
  var _GM_getValue = typeof GM_getValue != "undefined" ? GM_getValue : void 0;
  var _GM_info = typeof GM_info != "undefined" ? GM_info : void 0;
  var _GM_listValues = typeof GM_listValues != "undefined" ? GM_listValues : void 0;
  var _GM_registerMenuCommand = typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0;
  var _GM_removeValueChangeListener =
    typeof GM_removeValueChangeListener != "undefined" ? GM_removeValueChangeListener : void 0;
  var _GM_setValue = typeof GM_setValue != "undefined" ? GM_setValue : void 0;
  var _GM_setValues = typeof GM_setValues != "undefined" ? GM_setValues : void 0;
  var _GM_unregisterMenuCommand = typeof GM_unregisterMenuCommand != "undefined" ? GM_unregisterMenuCommand : void 0;
  var _GM_xmlhttpRequest = typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0;
  var _unsafeWindow = typeof unsafeWindow != "undefined" ? unsafeWindow : void 0;
  var _monkeyWindow = window;
  var CommonUtil = {
    waitRemove(...args) {
      args.forEach((selector) => {
        if (typeof selector !== "string") return;
        _whitesev_domutils.default.waitNodeList(selector).then((nodeList) => {
          nodeList.forEach(($el) => $el.remove());
        });
      });
    },
    createBlockCSSNode(...args) {
      let selectorList = [];
      if (args.length === 0) return;
      if (args.length === 1 && typeof args[0] === "string" && args[0].trim() === "") return;
      args.forEach((selector) => {
        if (Array.isArray(selector)) selectorList = selectorList.concat(selector);
        else selectorList.push(selector);
      });
      return _whitesev_domutils.default.createElement("style", {
        type: "text/css",
        innerHTML: `${selectorList.join(",\n")}{display: none !important;}`,
      });
    },
    addBlockCSS(...args) {
      let selectorList = [];
      if (args.length === 0) return;
      if (args.length === 1 && typeof args[0] === "string" && args[0].trim() === "") return;
      args.forEach((selector) => {
        if (Array.isArray(selector)) selectorList = selectorList.concat(selector);
        else selectorList.push(selector);
      });
      selectorList = selectorList.map((it) => it.trim()).filter((it) => it !== "");
      if (selectorList.length) return addStyle(`${selectorList.join(",\n")}{display: none !important;}`);
    },
    setGMResourceCSS(resourceMapData) {
      const cssText = typeof _GM_getResourceText === "function" ? _GM_getResourceText(resourceMapData.keyName) : null;
      if (typeof cssText === "string" && cssText) return addStyle(cssText);
      else return CommonUtil.loadStyleLink(resourceMapData.url);
    },
    async loadStyleLink(url) {
      let $link = document.createElement("link");
      $link.rel = "stylesheet";
      $link.type = "text/css";
      $link.href = url;
      return new Promise((resolve) => {
        _whitesev_domutils.default.onReady(() => {
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
      if (url.startsWith("data:")) return url;
      if (url.match(/^http(s|):\/\//i)) return url;
      else if (url.startsWith("//")) {
        if (url.startsWith("///")) {
        } else url = window.location.protocol + url;
        return url;
      } else {
        if (!url.startsWith("/")) url += "/";
        url = window.location.origin + url;
        return url;
      }
    },
    fixHttps(url) {
      if (url.startsWith("https://")) return url;
      if (!url.startsWith("http://")) return url;
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
          .query({ name: "clipboard-read" })
          .then(() => {
            readClipboardText(resolve);
          })
          .catch((error) => {
            log.error("申请剪贴板权限失败，尝试直接读取👉", error.message ?? error.name ?? error.stack);
            readClipboardText(resolve);
          });
      }
      function checkClipboardApi() {
        if (typeof navigator?.clipboard?.readText !== "function") return false;
        if (typeof navigator?.permissions?.query !== "function") return false;
        return true;
      }
      return new Promise((resolve) => {
        if (!checkClipboardApi()) {
          resolve("");
          return;
        }
        if (document.hasFocus()) requestPermissionsWithClipboard(resolve);
        else
          window.addEventListener(
            "focus",
            () => {
              requestPermissionsWithClipboard(resolve);
            },
            { once: true }
          );
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
        let $parent = _whitesev_domutils.default.closest($el, parentSelector);
        if ($parent) return $parent.querySelector(selector);
      } else {
        if (_whitesev_domutils.default.matches($el, selector)) return $el;
        return _whitesev_domutils.default.closest($el, selector);
      }
    },
    toStr(data, space = 2) {
      const undefinedReplacedStr = `__undefined__placeholder__replaced__str__` + performance.now();
      return JSON.stringify(
        data,
        (key, value) => {
          return value === void 0 ? undefinedReplacedStr : value;
        },
        space
      ).replace(new RegExp(`"${undefinedReplacedStr}"`, "g"), "undefined");
    },
    isVerticalScreen() {
      return !globalThis.screen.orientation.type.includes("landscape");
    },
    isMobileDevice(size = 768) {
      if (this.isVerticalScreen()) return globalThis.innerWidth < size;
      else return globalThis.innerHeight < size;
    },
    isTopWindow() {
      const win = typeof _unsafeWindow === "object" && _unsafeWindow != null ? _unsafeWindow : window;
      return win.top === win.self;
    },
    formatVideoDuration(duration) {
      if (typeof duration !== "number") duration = parseInt(duration);
      if (isNaN(duration)) return duration.toString();
      const zeroPadding = function (num) {
        if (num < 10) return `0${num}`;
        else return num;
      };
      if (duration < 60) return `0:${zeroPadding(duration)}`;
      else if (duration >= 60 && duration < 3600) return `${Math.floor(duration / 60)}:${zeroPadding(duration % 60)}`;
      else {
        const hours = Math.floor(duration / 3600);
        const minutes = Math.floor(duration / 60) % 60;
        const seconds = duration % 60;
        return `${hours}:${zeroPadding(minutes)}:${zeroPadding(seconds)}`;
      }
    },
    formatTimeStamp(time, endTime) {
      if (typeof time === "number") {
        if (time < 0xe8d4a51000) {
          const padZeroLength = String(Date.now()).length - String(time).length;
          time = time * Math.pow(10, padZeroLength);
        }
      }
      let result = time;
      let oldTime = new Date(typeof time === "string" ? time.replace(/-/g, "/") : time);
      let timeDifference = new Date(endTime ?? Date.now()).getTime() - oldTime.getTime();
      let days = Math.floor(timeDifference / (24 * 3600 * 1e3));
      if (days > 0)
        if (days > 7) result = utils.formatTime(oldTime.getTime());
        else result = days + "天前";
      else {
        let leave1 = timeDifference % (24 * 3600 * 1e3);
        let hours = Math.floor(leave1 / (3600 * 1e3));
        if (hours > 0) result = hours + "小时前";
        else {
          let leave2 = leave1 % (3600 * 1e3);
          let minutes = Math.floor(leave2 / (60 * 1e3));
          if (minutes > 0) result = minutes + "分钟前";
          else {
            let leave3 = leave2 % (60 * 1e3);
            result = Math.round(leave3 / 1e3) + "秒前";
          }
        }
      }
      return result;
    },
  };
  var KEY = "GM_Panel";
  var ATTRIBUTE_INIT = "data-init";
  var ATTRIBUTE_KEY = "data-key";
  var ATTRIBUTE_DEFAULT_VALUE = "data-default-value";
  var ATTRIBUTE_INIT_MORE_VALUE = "data-init-more-value";
  var ATTRIBUTE_PLUGIN_SEARCH_CONFIG = "data-plugin-search-config";
  var PROPS_STORAGE_API = "data-storage-api";
  var PanelSizeUtil = {
    followBrowserSize: false,
    get width() {
      return PanelSizeUtil.followBrowserSize ? globalThis.outerWidth : globalThis.innerWidth;
    },
    get height() {
      return PanelSizeUtil.followBrowserSize ? globalThis.outerHeight : globalThis.innerHeight;
    },
  };
  var PanelUISize = {
    setting: {
      get width() {
        if (PanelSizeUtil.width < 550) return "88vw";
        else if (PanelSizeUtil.width < 700) return "550px";
        else return "700px";
      },
      get height() {
        if (PanelSizeUtil.height < 450) return "70vh";
        else if (PanelSizeUtil.height < 550) return "450px";
        else return "550px";
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
  var PanelContent = {
    $data: {
      __contentConfig: null,
      get contentConfig() {
        if (this.__contentConfig == null) this.__contentConfig = new utils.Dictionary();
        return this.__contentConfig;
      },
      __defaultBottomContentConfig: [],
    },
    addContentConfig(configList) {
      if (!Array.isArray(configList)) configList = [configList];
      let index = this.$data.contentConfig.keys().length;
      this.$data.contentConfig.set(index, configList);
    },
    getAllContentConfig() {
      return this.$data.contentConfig.values().flat();
    },
    getConfig(index = 0) {
      return this.$data.contentConfig.get(index) ?? [];
    },
    getDefaultBottomContentConfig(config) {
      if (this.$data.__defaultBottomContentConfig.length) return this.$data.__defaultBottomContentConfig;
      let isDoubleClick = false;
      let timer = void 0;
      const translateCallback = (text, translateMap) => {
        if (config && typeof config.translateCallback === "function")
          return config.translateCallback(text, translateMap);
        else {
          if (typeof translateMap === "object" && translateMap)
            for (const key in translateMap) text = text.replaceAll(`{{${key}}}`, translateMap[key]);
          return text;
        }
      };
      const exportToFile = (fileName, fileData) => {
        if (typeof fileData !== "string") fileData = CommonUtil.toStr(fileData);
        const blob = new Blob([fileData]);
        const blobUrl = globalThis.URL.createObjectURL(blob);
        domUtils
          .createElement("a", {
            href: blobUrl,
            download: fileName,
          })
          .click();
        utils.workerSetTimeout(() => {
          globalThis.URL.revokeObjectURL(blobUrl);
        }, 500);
      };
      const dbclick_callback = () => {
        const importConfig = (importEndCallBack) => {
          const $alert = __pops__.alert({
            title: {
              text: translateCallback("请选择导入方式"),
              position: "center",
            },
            content: {
              text: `
            <div class="btn-control" data-mode="local">${translateCallback("本地导入")}</div>
            <div class="btn-control" data-mode="network">${translateCallback("网络导入")}</div>
            <div class="btn-control" data-mode="clipboard">${translateCallback("剪贴板导入")}</div>`,
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
            drag: true,
            mask: { enable: true },
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
            if (confirm(translateCallback("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）")))
              if (typeof _GM_listValues === "function")
                if (typeof _GM_deleteValue === "function") {
                  _GM_listValues().forEach((key) => {
                    _GM_deleteValue(key);
                  });
                  qmsg.default.success(translateCallback("已清空脚本存储的配置"));
                } else qmsg.default.error(translateCallback("不支持GM_deleteValue函数，无法执行删除脚本配置"));
              else qmsg.default.error(translateCallback("不支持GM_listValues函数，无法清空脚本存储的配置"));
            if (typeof _GM_setValues === "function") _GM_setValues(data);
            else
              Object.keys(data).forEach((key) => {
                const value = data[key];
                _GM_setValue(key, value);
              });
            qmsg.default.success(translateCallback("配置导入完毕"));
            importEndCallBack?.();
          };
          const importFile = (configText) => {
            return new Promise(async (resolve) => {
              const data = utils.toJSON(configText);
              if (Object.keys(data).length === 0) qmsg.default.warning(translateCallback("解析为空配置，不导入"));
              else await updateConfigToStorage(data);
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
              if (!$input.files?.length) return;
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
                text: translateCallback("网络导入"),
                position: "center",
              },
              content: {
                text: "",
                placeholder: translateCallback("请填写URL"),
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
                  text: translateCallback("导入"),
                  callback: async (details) => {
                    const url = details.text;
                    if (utils.isNull(url)) {
                      qmsg.default.error(translateCallback("请填入完整的url"));
                      return;
                    }
                    const $loading = qmsg.default.loading(translateCallback("正在获取配置..."));
                    const response = await httpx.get(url, { allowInterceptConfig: false });
                    $loading.close();
                    if (!response.status) {
                      log.error(response);
                      qmsg.default.error(translateCallback("获取配置失败"), { consoleLogContent: true });
                      return;
                    }
                    if (!(await importFile(response.data.responseText))) return;
                    details.close();
                  },
                },
                cancel: { enable: false },
              },
              drag: true,
              mask: { enable: true },
              width: PanelUISize.info.width,
              height: "auto",
            });
            const $promptInput = $prompt.$shadowRoot.querySelector("input");
            const $promptOk = $prompt.$shadowRoot.querySelector(".pops-prompt-btn-ok");
            domUtils.on($promptInput, ["input", "propertychange"], () => {
              if (domUtils.val($promptInput) === "") domUtils.attr($promptOk, "disabled", "true");
              else domUtils.removeAttr($promptOk, "disabled");
            });
            domUtils.onKeyboard($promptInput, "keydown", (keyName, keyValue, otherCodeList) => {
              if (keyName === "Enter" && otherCodeList.length === 0) {
                if (domUtils.val($promptInput) !== "") domUtils.emit($promptOk, "click");
              }
            });
            domUtils.emit($promptInput, "input");
          });
          domUtils.on($clipboard, "click", async (event) => {
            domUtils.preventEvent(event);
            $alert.close();
            let clipboardText = await CommonUtil.getClipboardText();
            if (clipboardText.trim() === "") {
              qmsg.default.warning(translateCallback("获取到的剪贴板内容为空"));
              return;
            }
            if (!(await importFile(clipboardText))) return;
          });
        };
        const exportConfig = (
          fileName = `${SCRIPT_NAME}_panel-setting-${utils.formatTime(Date.now(), "yyyy_MM_dd_HH_mm_ss")}.json`,
          fileData
        ) => {
          const $alert = __pops__.alert({
            title: {
              text: translateCallback("请选择导出方式"),
              position: "center",
            },
            content: {
              text: `
            <div class="btn-control" data-mode="export-to-file">${translateCallback("导出至文件")}</div>
            <div class="btn-control" data-mode="export-to-clipboard">${translateCallback("导出至剪贴板")}</div>
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
            drag: true,
            mask: { enable: true },
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
              qmsg.default.error(error.toString(), { consoleLogContent: true });
            }
          });
          domUtils.on($exportToClipboard, "click", async () => {
            if (await utils.copy(fileData)) {
              qmsg.default.success(translateCallback("复制成功"));
              $alert.close();
            } else qmsg.default.error(translateCallback("复制失败"));
          });
        };
        const $textarea = __pops__
          .confirm({
            title: {
              text: translateCallback("配置"),
              position: "center",
            },
            content: {
              text: `<textarea name="config-value" id="config" readonly></textarea>`,
              html: true,
            },
            btn: {
              ok: {
                enable: true,
                type: "primary",
                text: translateCallback("导入"),
                callback() {
                  importConfig();
                },
              },
              cancel: {
                enable: true,
                text: translateCallback("导出"),
                callback() {
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
          })
          .$shadowRoot.querySelector("textarea");
        const configData = {};
        if (typeof _GM_listValues === "function")
          _GM_listValues().forEach((key) => {
            const value = _GM_getValue(key);
            Reflect.set(configData, key, value);
          });
        else {
          qmsg.default.warning(translateCallback("不支持函数GM_listValues，仅导出菜单配置"));
          const panelLocalValue = _GM_getValue(KEY);
          Reflect.set(configData, KEY, panelLocalValue);
        }
        const configDataStr = CommonUtil.toStr(configData);
        $textarea.value = configDataStr;
      };
      const click_callback = () => {
        let supportURL = _GM_info?.script?.supportURL || _GM_info?.script?.namespace;
        if (typeof supportURL === "string" && utils.isNotNull(supportURL)) window.open(supportURL, "_blank");
      };
      return [
        {
          id: "script-version",
          title: translateCallback(`版本：{{version}}`, {
            version: _GM_info?.script?.version || translateCallback("未知"),
          }),
          isBottom: true,
          views: [],
          clickFirstCallback() {
            return false;
          },
          afterRender(config) {
            new AnyTouch(config.$asideLiElement).on("tap", function () {
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
  var PanelMenu = {
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
      if (!CommonUtil.isTopWindow()) return;
      MenuRegister.add(this.$data.menuOption);
    },
    addMenuOption(option) {
      if (!Array.isArray(option)) option = [option];
      this.$data.menuOption.push(...option);
    },
    updateMenuOption(option) {
      if (!Array.isArray(option)) option = [option];
      option.forEach((optionItem) => {
        let findIndex = this.$data.menuOption.findIndex((it) => {
          return it.key === optionItem.key;
        });
        if (findIndex !== -1) this.$data.menuOption[findIndex] = optionItem;
      });
    },
    getMenuOption(index = 0) {
      return this.$data.menuOption[index];
    },
    deleteMenuOption(index = 0) {
      this.$data.menuOption.splice(index, 1);
    },
  };
  var PanelMenuResultsHandler = class {
    data = {
      storeNodeList: [],
      destoryFnList: [],
    };
    option = {};
    constructor(option) {
      this.option = option;
    }
    handlerResult(enableValue, args) {
      const dynamicMenuStoreNodeList = [];
      const dynamicDestoryFnList = [];
      let resultValueList = [];
      if (Array.isArray(args)) resultValueList = resultValueList.concat(args);
      else {
        const handleArgs = (obj) => {
          if (typeof obj === "object" && obj != null)
            if (obj instanceof Element) resultValueList.push(obj);
            else if (Array.isArray(obj)) handleArgs(obj);
            else {
              const { $css, destory } = obj;
              if ($css != null) {
                if (Array.isArray($css)) resultValueList = resultValueList.concat($css);
                else if ($css instanceof Element) resultValueList.push($css);
              }
              if (typeof destory === "function") resultValueList.push(destory);
            }
          else resultValueList.push(obj);
        };
        handleArgs(args);
      }
      const handleResult = (it) => {
        if (it == null) return;
        if (it instanceof Element) {
          dynamicMenuStoreNodeList.push(it);
          return;
        }
        if (typeof it === "function") {
          dynamicDestoryFnList.push(it);
          return;
        }
      };
      for (const it of resultValueList) {
        const flag = handleResult(it);
        if (typeof flag === "boolean" && !flag) break;
        if (Array.isArray(it))
          for (const it2 of it) {
            const flag2 = handleResult(it2);
            if (typeof flag2 === "boolean" && !flag2) break;
          }
      }
      this.clearStoreNodeList();
      this.execDestoryFnAndClear();
      if (enableValue) {
        this.data.storeNodeList = this.data.storeNodeList.concat(dynamicMenuStoreNodeList);
        this.data.destoryFnList = this.data.destoryFnList.concat(dynamicDestoryFnList);
      }
    }
    getEnableStatus(key) {
      const value = this.option.getValue(key);
      return Boolean(value);
    }
    clearStoreNodeList = () => {
      for (let index = this.data.storeNodeList.length - 1; index >= 0; index--) {
        this.data.storeNodeList[index]?.remove();
        this.data.storeNodeList.splice(index, 1);
      }
    };
    execDestoryFnAndClear = () => {
      for (let index = this.data.destoryFnList.length - 1; index >= 0; index--) {
        const destoryFnItem = this.data.destoryFnList[index];
        destoryFnItem();
        this.data.destoryFnList.splice(index, 1);
      }
    };
    checkMenuExec() {
      let flag = false;
      if (typeof this.option.checkExec === "function") flag = this.option.checkExec(this.option.keyList);
      else flag = this.option.keyList.every((key) => this.getEnableStatus(key));
      return flag;
    }
  };
  var StorageUtils = class {
    storageKey;
    listenerData;
    cacheData;
    callbacks = [];
    constructor(key) {
      if (typeof key === "string") {
        const trimKey = key.trim();
        if (trimKey == "") throw new Error("key can not be empty string");
        this.storageKey = trimKey;
      } else throw new TypeError("key must be a string");
      this.listenerData = new _whitesev_utils.default.Dictionary();
      this.getLocalValue = this.getLocalValue.bind(this);
      this.setLocalValue = this.setLocalValue.bind(this);
      this.destory = this.destory.bind(this);
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
    [Symbol.dispose]() {
      this.destory();
    }
    async [Symbol.asyncDispose]() {
      this.destory();
    }
    destory() {
      this.cacheData = null;
      for (let index = this.callbacks.length - 1; index >= 0; index--) {
        const cb = this.callbacks[index];
        cb();
        this.callbacks.splice(index, 1);
      }
    }
    getLocalValue() {
      if (this.cacheData == null) {
        let localValue = _GM_getValue(this.storageKey);
        if (localValue == null) {
          localValue = {};
          this.setLocalValue(localValue);
        }
        this.destory();
        this.cacheData = localValue;
        const listenerId = _GM_addValueChangeListener(this.storageKey, (name, oldValue, newValue) => {
          this.cacheData = null;
          this.cacheData = newValue;
        });
        this.callbacks.push(() => {
          _GM_removeValueChangeListener(listenerId);
        });
        return localValue;
      } else return this.cacheData;
    }
    setLocalValue(value) {
      this.cacheData = null;
      this.cacheData = value;
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
      return this.getLocalValue();
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
      this.destory();
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
      if (!this.listenerData.has(key)) return;
      const listenerData = this.listenerData.get(key);
      for (let index = 0; index < listenerData.length; index++) {
        const data = listenerData[index];
        if (typeof data.callback === "function") {
          let __newValue;
          let __oldValue;
          if (args.length === 1) {
          } else if (args.length === 2) __newValue = newValue;
          else if (args.length === 3) {
            __newValue = newValue;
            __oldValue = oldValue;
          }
          await data.callback(key, __newValue, __oldValue);
        }
      }
    }
  };
  var PopsPanelStorageApi = new StorageUtils(KEY);
  var Panel = {
    $data: {
      __contentConfigInitDefaultValue: null,
      __onceExecMenuData: null,
      __urlChangeReloadMenuExecOnce: null,
      __onceExecData: null,
      __panelConfig: {},
      $panel: null,
      panelContent: [],
      get contentConfigInitDefaultValue() {
        if (this.__contentConfigInitDefaultValue == null) this.__contentConfigInitDefaultValue = new utils.Dictionary();
        return this.__contentConfigInitDefaultValue;
      },
      contentConfigInitDisabledKeys: [],
      get onceExecMenuData() {
        if (this.__onceExecMenuData == null) this.__onceExecMenuData = new utils.Dictionary();
        return this.__onceExecMenuData;
      },
      get urlChangeReloadMenuExecOnce() {
        if (this.__urlChangeReloadMenuExecOnce == null) this.__urlChangeReloadMenuExecOnce = new utils.Dictionary();
        return this.__urlChangeReloadMenuExecOnce;
      },
      get onceExecData() {
        if (this.__onceExecData == null) this.__onceExecData = new utils.Dictionary();
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
        if (!config.attributes) return;
        if (config.type === "button" || config.type === "container" || config.type === "deepMenu") return;
        const attributes = config.attributes;
        const __attr_init__ = attributes[ATTRIBUTE_INIT];
        if (typeof __attr_init__ === "function") {
          const __attr_result__ = __attr_init__();
          if (typeof __attr_result__ === "boolean" && !__attr_result__) return;
        }
        const menuDefaultConfig = new Map();
        const key = attributes[ATTRIBUTE_KEY];
        if (key != null) {
          const defaultValue = attributes[ATTRIBUTE_DEFAULT_VALUE];
          menuDefaultConfig.set(key, defaultValue);
        }
        const moreMenuDefaultConfig = attributes[ATTRIBUTE_INIT_MORE_VALUE];
        if (typeof moreMenuDefaultConfig === "object" && moreMenuDefaultConfig)
          Object.keys(moreMenuDefaultConfig).forEach((key) => {
            const defaultValue = moreMenuDefaultConfig[key];
            menuDefaultConfig.set(key, defaultValue);
          });
        if (!menuDefaultConfig.size) {
          log.warn("请先配置键", config);
          return;
        }
        if (config.type === "switch") {
          const disabled = typeof config.disabled === "function" ? config.disabled() : config.disabled;
          if (typeof disabled === "boolean" && disabled)
            this.$data.contentConfigInitDisabledKeys.push(...menuDefaultConfig.keys());
        }
        for (const [__key, __defaultValue] of menuDefaultConfig.entries()) this.setDefaultValue(__key, __defaultValue);
      };
      const loopInitDefaultValue = (configList) => {
        for (let index = 0; index < configList.length; index++) {
          const configItem = configList[index];
          initDefaultValue(configItem);
          const childViews = configItem.views;
          if (childViews && Array.isArray(childViews)) loopInitDefaultValue(childViews);
        }
      };
      const contentConfigList = [...PanelContent.getAllContentConfig()];
      for (let index = 0; index < contentConfigList.length; index++) {
        const leftContentConfigItem = contentConfigList[index];
        if (!leftContentConfigItem.views) continue;
        const rightContentConfigList = leftContentConfigItem.views;
        if (rightContentConfigList && Array.isArray(rightContentConfigList))
          loopInitDefaultValue(rightContentConfigList);
      }
      this.$data.contentConfigInitDisabledKeys = [...new Set(this.$data.contentConfigInitDisabledKeys)];
    },
    setDefaultValue(key, defaultValue) {
      if (this.$data.contentConfigInitDefaultValue.has(key))
        log.warn("该key已存在，初始化默认值失败: ", {
          key,
          initValue: this.$data.contentConfigInitDefaultValue.get(key),
        });
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
        if (this.$data.contentConfigInitDefaultValue.has(key)) return this.$data.contentConfigInitDefaultValue.get(key);
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
        if (option?.immediate) callback(key, value, value);
        else if (option?.immediateAll) Panel.emitMenuValueChange(key, value, value);
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
      let queryKeyFn;
      if (typeof queryKey === "string" || Array.isArray(queryKey)) queryKeyFn = () => queryKey;
      else queryKeyFn = queryKey;
      let isArrayKey = false;
      const queryKeyResult = queryKeyFn();
      let keyList = [];
      if (Array.isArray(queryKeyResult)) {
        isArrayKey = true;
        keyList = queryKeyResult;
      } else keyList.push(queryKeyResult);
      const findNotInDataKey = keyList.find((it) => !this.$data.contentConfigInitDefaultValue.has(it));
      if (findNotInDataKey) {
        log.warn(`${findNotInDataKey} 键不存在`);
        return;
      }
      const storageKey = JSON.stringify(keyList);
      if (once) {
        if (this.$data.onceExecMenuData.has(storageKey)) return this.$data.onceExecMenuData.get(storageKey);
      }
      const listenerIdList = [];
      const panelMenuResultsHandler = new PanelMenuResultsHandler({
        keyList,
        getValue: (key) => {
          const value = this.getValue(key);
          return Boolean(value);
        },
        checkExec(keyList) {
          let flag = false;
          if (typeof checkExec === "function") flag = checkExec(keyList);
          else flag = keyList.every((key) => this.getValue(key));
          return flag;
        },
      });
      const valueChangeCallback = async (valueOption) => {
        const execFlag = panelMenuResultsHandler.checkMenuExec();
        let callbackResult = [];
        if (execFlag) {
          const valueList = keyList.map((key) => this.getValue(key));
          callbackResult = await callback({
            key: keyList,
            triggerKey: valueOption?.key,
            value: isArrayKey ? valueList : valueList[0],
            addStoreValue: (...args) => {
              return panelMenuResultsHandler.handlerResult(execFlag, args);
            },
          });
        }
        panelMenuResultsHandler.handlerResult(execFlag, callbackResult);
      };
      if (once)
        keyList.forEach((key) => {
          const listenerId = this.addValueChangeListener(key, (key, newValue, oldValue) => {
            return valueChangeCallback({
              key,
              newValue,
              oldValue,
            });
          });
          listenerIdList.push(listenerId);
        });
      await valueChangeCallback();
      const result = {
        checkMenuExec: panelMenuResultsHandler.checkMenuExec.bind(panelMenuResultsHandler),
        keyList,
        reload() {
          this.clearStoreNodeList();
          this.execDestoryFnAndClear();
          valueChangeCallback();
        },
        clear() {
          panelMenuResultsHandler.clearStoreNodeList();
          this.execDestoryFnAndClear();
          this.removeValueChangeListener();
          this.clearOnceExecMenuData();
        },
        clearStoreNodeList: panelMenuResultsHandler.clearStoreNodeList.bind(panelMenuResultsHandler),
        execDestoryFnAndClear: panelMenuResultsHandler.execDestoryFnAndClear.bind(panelMenuResultsHandler),
        removeValueChangeListener: () => {
          listenerIdList.forEach((listenerId) => {
            this.removeValueChangeListener(listenerId);
          });
        },
        clearOnceExecMenuData() {
          if (once) Panel.$data.onceExecMenuData.delete(storageKey);
        },
      };
      this.$data.onceExecMenuData.set(storageKey, result);
      return result;
    },
    async execMenu(key, callback, isReverse = false, once = false) {
      return await this.exec(
        key,
        async (...args) => {
          return await callback(...args);
        },
        (keyList) => {
          return keyList.every((__key__) => {
            let flag = !!this.getValue(__key__);
            if (Panel.$data.contentConfigInitDisabledKeys.includes(__key__)) {
              flag = false;
              log.warn(`.execMenu${once ? "Once" : ""} ${__key__} 被禁用`);
            }
            if (isReverse) flag = !flag;
            return flag;
          });
        },
        once
      );
    },
    async execMenuOnce(key, callback, isReverse = false, listenUrlChange = false) {
      const result = await this.execMenu(key, callback, isReverse, true);
      if (listenUrlChange) {
        if (result) {
          const urlChangeCallback = () => {
            result.reload();
          };
          this.removeUrlChangeWithExecMenuOnceListener(key);
          this.addUrlChangeWithExecMenuOnceListener(key, urlChangeCallback);
        }
      }
      return result;
    },
    async execMoreMenu(menus, allExecCallback, isReverse = false, once = false, listenUrlChange = false) {
      const results = await Promise.all(
        menus.map(async ([key, callback]) => {
          return await this.execMenu(
            key,
            (...args) => {
              return callback(...args);
            },
            isReverse,
            once
          );
        })
      );
      const panelMenuResultsHandler = new PanelMenuResultsHandler({
        keyList: menus.map(([key]) => key),
        getValue: (key) => {
          const value = this.getValue(key);
          return Boolean(value);
        },
      });
      const listenerIdList = [];
      const __destory__ = (removeListener = false) => {
        panelMenuResultsHandler.clearStoreNodeList();
        panelMenuResultsHandler.execDestoryFnAndClear();
        if (removeListener) {
          for (const listenerId of listenerIdList) this.removeValueChangeListener(listenerId);
          for (const result of results) if (result) this.removeUrlChangeWithExecMenuOnceListener(result.keyList);
        }
      };
      const __allExecCallback__ = () => {
        const allExecFlag = results.every((result) => {
          if (result) return result.checkMenuExec();
          else return true;
        });
        __destory__(false);
        if (allExecFlag) {
          const execResult = allExecCallback();
          panelMenuResultsHandler.handlerResult(allExecFlag, execResult);
        }
      };
      __allExecCallback__();
      for (const result of results)
        if (result) {
          const listenerId = this.addValueChangeListener(result.keyList[0], () => {
            __allExecCallback__();
          });
          listenerIdList.push(listenerId);
          if (listenUrlChange) {
            const urlChangeCallback = () => {
              result.reload();
            };
            this.removeUrlChangeWithExecMenuOnceListener(result.keyList);
            this.addUrlChangeWithExecMenuOnceListener(result.keyList, urlChangeCallback);
          }
        }
      return {
        clear() {
          for (const result of results) result?.clear();
          this.execDestoryFnAndClear();
          this.removeValueChangeListener();
        },
        execDestoryFnAndClear() {
          for (const result of results) result?.execDestoryFnAndClear();
          __destory__(false);
        },
        removeValueChangeListener() {
          for (const result of results) result?.removeValueChangeListener();
          __destory__(true);
        },
      };
    },
    async execMoreMenuOnce(menus, allExecCallback, isReverse = false, listenUrlChange = false) {
      return await this.execMoreMenu(menus, allExecCallback, isReverse, true, listenUrlChange);
    },
    deleteExecMenuOnce(key) {
      key = this.transformKey(key);
      this.$data.onceExecMenuData.delete(key);
      this.$data.urlChangeReloadMenuExecOnce.delete(key);
      return PopsPanelStorageApi.removeValueChangeListener(key);
    },
    onceExec(key, callback, runWithMenuEnable = false) {
      key = this.transformKey(key);
      if (typeof key !== "string") throw new TypeError("key 必须是字符串");
      if (this.$data.onceExecData.has(key)) return;
      if (runWithMenuEnable) {
        if (
          (Array.isArray(key) ? key : [key]).findIndex((it) => {
            if (!!!Panel.getValue(it)) return true;
          }) !== -1
        )
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
      for (const callback of values) await callback(config);
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
          return (
            (typeof it.isBottom === "function" ? it.isBottom() : Boolean(it.isBottom)) && it.id === "script-version"
          );
        }) !== -1;
      if (!preventDefaultContentConfig && !checkHasBottomVersionContentConfig)
        content.push(...PanelContent.getDefaultBottomContentConfig());
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
      if (!preventRegisterSearchPlugin)
        this.registerConfigSearch({
          $panel,
          content,
        });
      return {
        $panel,
        content,
      };
    },
    registerConfigSearch(config) {
      const { $panel, content } = config;
      const translateCallback = (text, translateMap) => {
        if (typeof config.translateCallback === "function") return config.translateCallback(text, translateMap);
        else {
          if (typeof translateMap === "object" && translateMap)
            for (const key in translateMap) text = text.replaceAll(`{{${key}}}`, translateMap[key]);
          return text;
        }
      };
      const asyncQueryProperty = async (target, handler) => {
        if (target == null) return;
        const handleResult = await handler(target);
        if (handleResult && typeof handleResult.isFind === "boolean" && handleResult.isFind) return handleResult.data;
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
        $el.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      };
      const addFlashingClass = ($el) => {
        const flashingClassName = "pops-flashing";
        domUtils.onAnimationend($el, () => {
          $el.classList.remove(flashingClassName);
        });
        $el.classList.add(flashingClassName);
      };
      const dbclick_callback = (evt) => {
        if (evt.type === "dblclick" && isMobileTouch) return;
        domUtils.preventEvent(evt);
        const $alert = __pops__.alert({
          title: {
            text: translateCallback("搜索配置"),
            position: "center",
          },
          content: {
            text: `
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="${translateCallback("请输入需要搜素的配置名称")}">
						</div>
						<div class="search-result-wrapper"></div>
					`,
            html: true,
          },
          btn: { ok: { enable: false } },
          mask: { clickEvent: { toClose: true } },
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
            flex-wrap: wrap;
					}
					.search-result-item-description{
						font-size: 0.8em;
						color: #6c6c6c;
					}
					${config.searchDialogStyle ?? ""}
				`,
        });
        const $searchInput = $alert.$shadowRoot.querySelector(".search-config-text");
        const $searchResultWrapper = $alert.$shadowRoot.querySelector(".search-result-wrapper");
        $searchInput.focus();
        const clearSearchResult = () => {
          domUtils.empty($searchResultWrapper);
        };
        const createSearchResultItem = (pathInfo) => {
          const searchPath = utils.queryProperty(pathInfo, (target) => {
            if (target?.next)
              return {
                isFind: false,
                data: target.next,
              };
            else
              return {
                isFind: true,
                data: target,
              };
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
            const $targetAsideItem = $panel.$shadowRoot.querySelectorAll(
              "aside.pops-panel-aside .pops-panel-aside-top-container li"
            )[pathInfo.index];
            if (!$targetAsideItem) {
              qmsg.default.error(translateCallback(`左侧项下标{{index}}不存在`, { index: pathInfo.index }));
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
                if ($findDeepMenu) $findDeepMenu.click();
                else {
                  qmsg.default.error(translateCallback("未找到对应的二级菜单"));
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
                      return (
                        Reflect.get($menuItem, panelHandlerComponents.$data.nodeStoreConfigKey) ===
                        target.matchedData?.formConfig
                      );
                    }
                  );
                }, 2500);
                if ($findTargetMenu) {
                  scrollToElementAndListen($findTargetMenu);
                  const $fold = $findTargetMenu.closest(`.pops-panel-forms-fold[data-fold-enable]`);
                  if ($fold) {
                    $fold.querySelector(".pops-panel-forms-fold-container").click();
                    await utils.sleep(500);
                  }
                  scrollToElementAndListen($findTargetMenu, () => {
                    addFlashingClass($findTargetMenu);
                  });
                } else qmsg.default.error(translateCallback("未找到对应的菜单项"));
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
                    if (target?.next)
                      return {
                        isFind: false,
                        data: target.next,
                      };
                    else
                      return {
                        isFind: true,
                        data: target,
                      };
                  });
                  deepNext.next = { name: configItem.text };
                }
                loopContentConfig(childViewConfig, deepMenuPath);
              } else {
                let text;
                let description;
                if (configItem.type === "own") {
                  let searchConfig = Reflect.get(configItem.attributes || {}, ATTRIBUTE_PLUGIN_SEARCH_CONFIG);
                  if (searchConfig) {
                    if (typeof searchConfig === "function") searchConfig = searchConfig();
                    if (typeof searchConfig.text === "string") text = searchConfig.text;
                    if (typeof searchConfig.desc === "string") description = searchConfig.desc;
                  }
                } else {
                  text = configItem.text;
                  description = Reflect.get(configItem, "description");
                }
                const delayMatchedTextList = [text, description];
                const matchedIndex = delayMatchedTextList.findIndex((configText) => {
                  if (typeof configText !== "string") return;
                  return configText.match(searchTextRegExp);
                });
                if (matchedIndex !== -1) {
                  const matchedPath = utils.deepClone(path);
                  const deepNext = utils.queryProperty(matchedPath, (target) => {
                    if (target?.next)
                      return {
                        isFind: false,
                        data: target.next,
                      };
                    else
                      return {
                        isFind: true,
                        data: target,
                      };
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
                    if (typeof name === "string" && name.trim() !== "") pathList.push(name);
                    if (target?.next)
                      return {
                        isFind: false,
                        data: target.next,
                      };
                    else
                      return {
                        isFind: true,
                        data: target,
                      };
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
            if (!leftContentConfigItem.views) continue;
            if (leftContentConfigItem.isBottom && leftContentConfigItem.id === "script-version") continue;
            const rightContentConfigList = leftContentConfigItem.views;
            if (rightContentConfigList && Array.isArray(rightContentConfigList)) {
              let text = leftContentConfigItem.title;
              if (typeof text === "function") text = text();
              loopContentConfig(rightContentConfigList, {
                index,
                name: text,
              });
            }
          }
          const $fragment = document.createDocumentFragment();
          for (const pathInfo of searchConfigResult) {
            const $resultItem = createSearchResultItem(pathInfo);
            $fragment.appendChild($resultItem);
          }
          clearSearchResult();
          $searchResultWrapper.append($fragment);
        };
        domUtils.on(
          $searchInput,
          "input",
          utils.debounce((evt2) => {
            domUtils.preventEvent(evt2);
            const searchText = domUtils.val($searchInput).trim();
            if (searchText === "") {
              clearSearchResult();
              return;
            }
            execSearch(searchText);
          }, 200)
        );
      };
      $panel.$shadowRoot
        .querySelectorAll(`aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`)
        .forEach(($asideItem) => {
          domUtils.on($asideItem, "dblclick", dbclick_callback);
        });
      const clickMap = new WeakMap();
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
        { capture: true }
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
      if (Array.isArray(key))
        if (key.length > 1) {
          const keyArray = key.sort();
          return JSON.stringify(keyArray);
        } else return key[0];
      else return key;
    },
    getDynamicValue(key, defaultValue) {
      let isInit = false;
      let __value = defaultValue;
      const listenerId = this.addValueChangeListener(key, (_, newValue) => {
        __value = newValue;
      });
      return {
        get value() {
          if (!isInit) {
            isInit = true;
            __value = Panel.getValue(key, defaultValue);
          }
          return __value;
        },
        destory() {
          Panel.removeValueChangeListener(listenerId);
        },
      };
    },
  };
  var PanelSettingConfig = {
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
    httpx_cookie_manager_enable: {
      key: "httpx-use-cookie-enable",
      defaultValue: false,
    },
    httpx_cookie_manager_use_document_cookie: {
      key: "httpx-use-document-cookie",
      defaultValue: false,
    },
  };
  var utils = _whitesev_utils.default.noConflict();
  var domUtils = _whitesev_domutils.default.noConflict();
  var __pops__ = _whitesev_pops.default;
  var log = new utils.Log(_GM_info, _unsafeWindow.console || _monkeyWindow.console);
  var SCRIPT_NAME = _GM_info?.script?.name || void 0;
  var AnyTouch = _whitesev_pops.default.fn.Utils.AnyTouch();
  log.config({
    debug: false,
    logMaxCount: 250,
    autoClearConsole: true,
    tag: true,
  });
  var getPageMaxZIndex = () => {
    const deviation = 100;
    const popsZIndex = _whitesev_pops.default.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex ?? 0;
    const pointZIndex = utils.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex ?? 0;
    return Math.max(deviation, popsZIndex, pointZIndex);
  };
  qmsg.default.config({
    isHTML: true,
    autoClose: true,
    showClose: false,
    consoleLogContent(qmsgInst) {
      const qmsgType = qmsgInst.setting.type;
      if (qmsgType === "loading") return false;
      const content = qmsgInst.setting.content;
      if (qmsgType === "warning") log.warn(content);
      else if (qmsgType === "error") log.error(content);
      else log.info(content);
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
  var MenuRegister = new utils.GM_Menu({
    GM_getValue: _GM_getValue,
    GM_setValue: _GM_setValue,
    GM_registerMenuCommand: _GM_registerMenuCommand,
    GM_unregisterMenuCommand: _GM_unregisterMenuCommand,
  });
  var httpx = new utils.Httpx({
    xmlHttpRequest: _GM_xmlhttpRequest,
    logDetails: false,
  });
  httpx.interceptors.request.use((data) => {
    return data;
  });
  httpx.interceptors.response.use(
    (response) => {
      return response;
    },
    (data) => {
      log.error("[Httpx-HttpxRequest.response] 响应错误", { data });
      if (data.type === "onabort") qmsg.default.warning("请求取消", { consoleLogContent: true });
      else if (data.type === "onerror") qmsg.default.error("请求异常", { consoleLogContent: true });
      else if (data.type === "ontimeout") qmsg.default.error("请求超时", { consoleLogContent: true });
      else qmsg.default.error("其它错误", { consoleLogContent: true });
      return data;
    }
  );
  (_unsafeWindow.Object.defineProperty,
    _unsafeWindow.Object.keys,
    _unsafeWindow.Object.values,
    _unsafeWindow.Function.prototype.apply,
    _unsafeWindow.Function.prototype.call,
    _unsafeWindow.Element.prototype.appendChild,
    _unsafeWindow.setTimeout.bind(_unsafeWindow),
    _unsafeWindow.clearTimeout.bind(_unsafeWindow),
    _unsafeWindow.setInterval.bind(_unsafeWindow),
    _unsafeWindow.clearInterval.bind(_unsafeWindow));
  var addStyle = domUtils.addStyle.bind(domUtils);
  CommonUtil.addBlockCSS.bind(CommonUtil);
  _whitesev_domutils.default.selector.bind(_whitesev_domutils.default);
  _whitesev_domutils.default.selectorAll.bind(_whitesev_domutils.default);
  var cookieManager = new utils.CookieManagerService({ baseCookieHandler: "GM_cookie" });
  if (!cookieManager.isSupportGM_cookie)
    if (cookieManager.isSupportCookieStore) cookieManager.setOptions({ baseCookieHandler: "cookieStore" });
    else cookieManager.setOptions({ baseCookieHandler: "document.cookie" });
  new utils.DocumentCookieHandler();
  var DemoWebSite = {
    init() {
      log.info(`demo site init`);
    },
  };
  var UISwitch = function (
    text,
    key,
    defaultValue = false,
    clickCallBack,
    description,
    afterAddToUListCallBack,
    disabled,
    valueChangeCallBack,
    shortCutOption
  ) {
    if (shortCutOption && typeof shortCutOption.defaultValue === "object" && shortCutOption.defaultValue != null) {
      const shortCutKey = shortCutOption.key ?? key;
      shortCutOption.handler.add({
        key: shortCutKey,
        name: text,
      });
      shortCutOption.handler.shortCut.initConfig(shortCutKey, shortCutOption.defaultValue);
    }
    const result = {
      text,
      type: "switch",
      description,
      disabled,
      attributes: {},
      props: {},
      getValue() {
        return this.props[PROPS_STORAGE_API].get(key, defaultValue);
      },
      callback(event, __value) {
        const value = Boolean(__value);
        log.success(`${value ? "开启" : "关闭"} ${text}`);
        if (typeof clickCallBack === "function") {
          if (clickCallBack(event, value)) return;
        }
        this.props[PROPS_STORAGE_API].set(key, value);
        if (typeof valueChangeCallBack === "function") valueChangeCallBack(event, value);
      },
      afterAddToUListCallBack: (...args) => {
        afterAddToUListCallBack?.(...args);
        if (shortCutOption) {
          const shortCut = shortCutOption.handler.shortCut;
          const shortCutKey = shortCutOption.key ?? key;
          const [_, container] = args;
          const $leftMainText = container.target?.querySelector(".pops-panel-item-left-main-text");
          if (!$leftMainText) return;
          const renderKeyboard = () => {
            const tooltipShowText = shortCutOption.handler.shortCut.getShowText(shortCutKey, "暂未录入快捷键");
            const $wrapper = domUtils.createElement(
              "div",
              {
                className: "pops-switch-shortcut-wrapper",
                innerHTML: `
              <i class="pops-bottom-icon" is-loading="false">
                <svg viewBox="0 0 1123 1024" xmlns="http://www.w3.org/2000/svg" data-type="keyboard">
                  <path d="M1014.122186 1024H109.753483A109.753483 109.753483 0 0 1 0 914.246517V392.917471a109.753483 109.753483 0 0 1 109.753483-109.753484h904.368703a109.753483 109.753483 0 0 1 109.753484 109.753484v521.329046a109.753483 109.753483 0 0 1-109.753484 109.753483zM109.753483 370.966774a21.950697 21.950697 0 0 0-21.950696 21.950697v521.329046a21.950697 21.950697 0 0 0 21.950696 21.950696h904.368703a21.950697 21.950697 0 0 0 21.950697-21.950696V392.917471a21.950697 21.950697 0 0 0-21.950697-21.950697z"></path>
                  <path d="M687.056806 891.198285H307.309753a43.901393 43.901393 0 0 1 0-87.802787h379.747053a43.901393 43.901393 0 0 1 0 87.802787zM175.605573 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM432.428725 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM947.172562 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 546.572347a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 803.395498a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 678.276527a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM948.270096 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394z"></path>
                  <path d="M881.320472 766.079314H689.251876a43.901393 43.901393 0 0 1 0-87.802787h192.068596a21.950697 21.950697 0 0 0 21.950696-21.950696v-65.85209a43.901393 43.901393 0 0 1 87.802787 0v65.85209a109.753483 109.753483 0 0 1-109.753483 109.753483zM305.114684 502.670954H175.605573a43.901393 43.901393 0 0 1 0-87.802787h129.509111a43.901393 43.901393 0 0 1 0 87.802787zM563.03537 365.4791a43.901393 43.901393 0 0 1-43.901394-43.901394v-105.363344A109.753483 109.753483 0 0 1 628.88746 106.460879h61.461951a21.950697 21.950697 0 0 0 21.950696-21.950697V43.901393a43.901393 43.901393 0 0 1 87.802787 0v40.608789a109.753483 109.753483 0 0 1-109.753483 109.753484h-61.461951a21.950697 21.950697 0 0 0-21.950697 21.950696v105.363344a43.901393 43.901393 0 0 1-43.901393 43.901394z"></path>
                </svg>
              </i>
            `,
              },
              { style: "margin-right: 5px;display: inline-flex;" }
            );
            const $icon = $wrapper.querySelector(".pops-bottom-icon");
            domUtils.on(
              $icon,
              "click",
              function (evt) {
                shortCutOption.handler.shortCut.deleteOption(shortCutKey);
                $tooltip.toolTip.offEvent();
                $tooltip.toolTip.close();
                $tooltip.toolTip.destory();
                $wrapper.remove();
              },
              { once: true }
            );
            const $tooltip = __pops__.tooltip({
              $target: $icon,
              content: () => {
                return tooltipShowText;
              },
              className: "github-tooltip",
              isFixed: true,
              only: true,
            });
            domUtils.empty($leftMainText);
            domUtils.append($leftMainText, $wrapper, text);
          };
          __pops__.rightClickMenu({
            $target: $leftMainText,
            only: true,
            data: [
              {
                text: () => {
                  if (shortCutOption.handler.shortCut.hasOption(shortCutKey)) return "修改快捷键";
                  else return "添加快捷键";
                },
                icon: __pops__.config.iconSVG.keyboard,
                callback(clickEvent, contextMenuEvent, $li, $listenerRootNode) {
                  if (shortCut.isWaitKeyboardPress()) {
                    qmsg.default.warning("请先执行当前的录入操作");
                    return;
                  }
                  const $loading = qmsg.default.loading("请按下快捷键...", {
                    showClose: true,
                    onClose() {
                      shortCut.cancelEnterShortcutKeys();
                    },
                  });
                  shortCut.enterShortcutKeys(shortCutKey).then(({ status, option, key: isUsedKey }) => {
                    $loading.close();
                    if (status) {
                      log.success("录入快捷键", option);
                      qmsg.default.success("录入成功");
                      renderKeyboard();
                    } else
                      qmsg.default.error(
                        `快捷键 ${shortCut.translateKeyboardValueToButtonText(option)} 已被 ${isUsedKey} 占用`
                      );
                  });
                },
              },
            ],
          });
          if (!shortCut.hasOption(shortCutKey)) return;
          renderKeyboard();
        }
      },
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi("switch", result, {
      get(key, defaultValue) {
        return Panel.getValue(key, defaultValue);
      },
      set(key, value) {
        Panel.setValue(key, value);
      },
    });
    return result;
  };
  var PanelComponents = {
    $data: {
      __storeApiFn: null,
      get storeApiValue() {
        if (!this.__storeApiFn) this.__storeApiFn = new _whitesev_utils.default.Dictionary();
        return this.__storeApiFn;
      },
    },
    getStorageApi(type) {
      if (!this.hasStorageApi(type)) return;
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
      if (this.hasStorageApi(type)) propsStorageApi = this.getStorageApi(type);
      else propsStorageApi = storageApiValue;
      this.setComponentsStorageApiProperty(config, propsStorageApi);
    },
    setComponentsStorageApiProperty(config, storageApiValue) {
      Reflect.set(config.props, PROPS_STORAGE_API, storageApiValue);
    },
  };
  var UISelect = function (text, key, defaultValue, data, selectCallBack, description, valueChangeCallBack) {
    const result = {
      text,
      type: "select",
      description,
      attributes: {},
      props: {},
      getValue() {
        return this.props[PROPS_STORAGE_API].get(key, defaultValue);
      },
      callback(isSelectedInfo) {
        if (isSelectedInfo == null) return;
        const value = isSelectedInfo.value;
        log.info(`选择：${isSelectedInfo.text}`);
        if (typeof selectCallBack === "function") {
          if (selectCallBack(isSelectedInfo)) return;
        }
        this.props[PROPS_STORAGE_API].set(key, value);
        if (typeof valueChangeCallBack === "function") valueChangeCallBack(isSelectedInfo);
      },
      data,
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi("select", result, {
      get(key, defaultValue) {
        return Panel.getValue(key, defaultValue);
      },
      set(key, value) {
        Panel.setValue(key, value);
      },
    });
    return result;
  };
  var Component_Common = {
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
      {
        text: "Cookie配置",
        type: "container",
        views: [
          UISwitch(
            "启用",
            PanelSettingConfig.httpx_cookie_manager_enable.key,
            PanelSettingConfig.httpx_cookie_manager_enable.defaultValue,
            void 0,
            "Api请求时会自动使用下面的Cookie设置"
          ),
          UISwitch(
            "使用document.cookie",
            PanelSettingConfig.httpx_cookie_manager_use_document_cookie.key,
            PanelSettingConfig.httpx_cookie_manager_use_document_cookie.defaultValue,
            void 0,
            "会自动根据请求的域名来使用cookie"
          ),
        ],
      },
    ],
  };
  PanelContent.addContentConfig([Component_Common]);
  Panel.init();
  DemoWebSite.init();
})(DOMUtils, pops, Utils, Qmsg);
