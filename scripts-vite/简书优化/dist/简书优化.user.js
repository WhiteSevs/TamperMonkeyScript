// ==UserScript==
// @name         简书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.12.26
// @author       WhiteSevs
// @description  支持手机端和PC端、屏蔽广告、优化浏览体验、重定向链接、全文居中、自动展开全文、允许复制文字、劫持唤醒/跳转App、自定义屏蔽元素等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.jianshu.com/*
// @match        *://*.jianshu.io/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.9.10/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.8.7/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@3.1.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.6.2/dist/index.umd.js
// @connect      *
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

(function (DOMUtils, pops, Utils, Qmsg) {
  "use strict";

  const blockCSS = `.download-app-guidance,\r
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
      if (!Panel.isTopWindow()) {
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
      const listenerId = PopsPanelStorageApi.addValueChangeListener(key, callback);
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
          const handlerArgs = (obj) => {
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
              handlerArgs(it);
            }
          } else {
            handlerArgs(args);
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
  DOMUtils.selector.bind(DOMUtils);
  DOMUtils.selectorAll.bind(DOMUtils);
  new utils.GM_Cookie();
  const JianshuRouter = {
    isGoWild() {
      return window.location.pathname === "/go-wild";
    },
  };
  const waitForElementToRemove = function (selectorText = "") {
    domUtils.waitNodeList(selectorText).then((nodeList) => {
      nodeList.forEach((item) => item.remove());
    });
  };
  const Jianshu = {
    init() {
      this.addCSS();
      Panel.execMenu("JianShuAutoJumpRedirect_PC", () => {
        this.jumpRedirect();
      });
      Panel.execMenu("JianShuRemoveClipboardHijacking", () => {
        this.removeClipboardHijacking();
      });
      Panel.execMenu("JianShuAutoExpandFullText", () => {
        this.autoExpandFullText();
      });
      Panel.execMenu("JianShuArticleCenter", () => {
        return this.articleCenter();
      });
      Panel.execMenu("JianShuShieldRelatedArticles", () => {
        return this.blockRelatedArticles();
      });
      Panel.execMenu("jianshu-shieldClientDialog", () => {
        this.blockClientDialog();
      });
      Panel.execMenuOnce("JianShuShieldUserComments", () => {
        return this.blockUserComments();
      });
      Panel.execMenuOnce("JianShuShieldRecommendedReading", () => {
        return this.blockRecommendedReading();
      });
      Panel.execMenuOnce("jianshu-shieldTopNav", () => {
        return this.blockTopNav();
      });
      Panel.execMenuOnce("jianshu-shieldBottomToolbar", () => {
        return this.blockBottomToolbar();
      });
    },
    addCSS() {
      log.info("添加屏蔽CSS");
      return addStyle(blockCSS);
    },
    articleCenter() {
      log.info("全文居中");
      let result = [];
      result.push(
        CommonUtil.addBlockCSS("div[role=main] aside", "div._3Pnjry"),
        addStyle(
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
      domUtils.waitNodeList("div._gp-ck").then((nodeList) => {
        nodeList.forEach((item) => {
          item.style["width"] = "100%";
        });
      });
      return result;
    },
    removeClipboardHijacking() {
      log.info("去除剪贴板劫持");
      const stopNativePropagation = (event) => {
        event.stopPropagation();
      };
      window.addEventListener("copy", stopNativePropagation, true);
      document.addEventListener("copy", stopNativePropagation, true);
    },
    autoExpandFullText() {
      domUtils.waitNode(`div#homepage div[class*="dialog-"]`).then((element) => {
        element.style["visibility"] = "hidden";
        log.info("自动展开全文");
        utils.mutationObserver(element, {
          callback: (mutations) => {
            if (mutations.length == 0) {
              return;
            }
            mutations.forEach((mutationItem) => {
              if (mutationItem.target.style["display"] != "none") {
                log.success("自动展开全文-自动点击");
                document.querySelector('div#homepage div[class*="dialog-"] .cancel')?.click();
              }
            });
          },
          config: {
            childList: false,
            attributes: true,
            characterData: true,
            subtree: true,
          },
        });
      });
    },
    jumpRedirect() {
      if (JianshuRouter.isGoWild()) {
        log.success("去除简书拦截其它网址的url并自动跳转");
        window.stop();
        let search = window.location.href.replace(window.location.origin + "/", "");
        search = decodeURIComponent(search);
        let newURL = search.replace(/^go-wild\?ac=2&url=/gi, "").replace(/^https:\/\/link.zhihu.com\/\?target\=/gi, "");
        window.location.href = newURL;
      }
    },
    blockRelatedArticles() {
      log.info("屏蔽相关文章");
      return CommonUtil.addBlockCSS('div[role="main"] > div > section:nth-child(2)');
    },
    blockClientDialog() {
      log.info("【屏蔽】客户端弹窗");
      CommonUtil.addBlockCSS(
        'div:has(>div[class*="-mask"]:not([class*="-mask-hidden"]) + div[tabindex="-1"][role="dialog"])'
      );
      domUtils
        .waitNode(`div[class*="-mask"]:not([class*="-mask-hidden"]) + div[tabindex="-1"][role="dialog"]`)
        .then((element) => {
          log.success("弹窗出现");
          utils
            .waitPropertyByInterval(
              element,
              () => {
                let react = utils.getReactInstance(element);
                return react?.reactInternalInstance?.return?.return?.memoizedProps?.onClose;
              },
              250,
              1e4
            )
            .then(() => {
              let react = utils.getReactInstance(element);
              react.reactInternalInstance.return.return.memoizedProps.onClose(new Event("click"));
              log.success("调用函数关闭弹窗");
            });
        });
    },
    blockUserComments() {
      log.info("屏蔽评论区");
      return CommonUtil.addBlockCSS("div#note-page-comment");
    },
    blockRecommendedReading() {
      log.info("屏蔽底部推荐阅读");
      return CommonUtil.addBlockCSS('div[role="main"] > div > section:last-child');
    },
    blockTopNav() {
      log.info("【屏蔽】顶部导航栏");
      return CommonUtil.addBlockCSS("header");
    },
    blockBottomToolbar() {
      log.info("【屏蔽】底部工具栏");
      return CommonUtil.addBlockCSS("footer");
    },
  };
  const M_Jianshu = {
    init() {
      this.addCSS();
      Panel.execMenu("JianShuAutoJumpRedirect_Mobile", () => {
        Jianshu.jumpRedirect();
      });
      Panel.execMenu("JianShuHijackSchemeScriptLabel_Mobile", () => {
        this.handlePrototype();
      });
      Panel.execMenu("JianShuRemoveClipboardHijacking_Mobile", () => {
        Jianshu.removeClipboardHijacking();
      });
      Panel.execMenu("JianShuAutoExpandFullText_Mobile", () => {
        Jianshu.autoExpandFullText();
      });
      Panel.execMenuOnce("JianShuremoveFooterRecommendRead", () => {
        return this.blockeFooterRecommendRead();
      });
      Panel.execMenu("JianShuShieldUserCommentsMobile", () => {
        return this.blockUserComments();
      });
    },
    addCSS() {
      Jianshu.addCSS();
    },
    blockeFooterRecommendRead() {
      log.info("屏蔽底部推荐阅读");
      return CommonUtil.addBlockCSS("#recommended-notes");
    },
    handlePrototype() {
      log.info("处理原型添加script标签");
      let originalAppendChild = Node.prototype.appendChild;
      _unsafeWindow.Node.prototype.appendChild = function (element) {
        let allowElementLocalNameList = ["img"];
        if (
          element.src &&
          !element.src.includes("jianshu.io") &&
          !allowElementLocalNameList.includes(element.localName)
        ) {
          log.success(["禁止添加的元素", element]);
          return null;
        } else {
          return originalAppendChild.call(this, element);
        }
      };
    },
    blockUserComments() {
      log.info("屏蔽评论区");
      return CommonUtil.addBlockCSS("#comment-main");
    },
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
  const SettingUIMobile = {
    id: "jianshu-panel-config-mobile",
    title: "移动端",
    views: [
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
                  UISwitch("自动展开全文", "JianShuAutoExpandFullText_Mobile", true),
                  UISwitch("重定向链接", "JianShuAutoJumpRedirect_Mobile", true, void 0, "自动跳转简书拦截的Url链接"),
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
                  UISwitch("【屏蔽】底部推荐阅读", "JianShuremoveFooterRecommendRead", false),
                  UISwitch("【屏蔽】评论区", "JianShuShieldUserCommentsMobile", false),
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
                  UISwitch("拦截-剪贴板", "JianShuRemoveClipboardHijacking_Mobile", true, void 0, "去除禁止复制"),
                  UISwitch(
                    "劫持-唤醒/跳转App",
                    "JianShuHijackSchemeScriptLabel_Mobile",
                    true,
                    void 0,
                    "去除简书唤醒调用App"
                  ),
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const SettingUICommon = {
    id: "jianshu-panel-common",
    title: "通用",
    views: [
      {
        text: "Toast配置",
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
  };
  const SettingUIPC = {
    id: "jianshu-panel-config-pc",
    title: "桌面端",
    views: [
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
                  UISwitch("全文居中", "JianShuArticleCenter", true),
                  UISwitch("自动展开全文", "JianShuAutoExpandFullText", true),
                  UISwitch("重定向链接", "JianShuAutoJumpRedirect_PC", true, void 0, "自动跳转简书拦截的Url链接"),
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
                  UISwitch("【屏蔽】底部推荐阅读", "JianShuShieldRecommendedReading", false),
                  UISwitch("【屏蔽】评论区", "JianShuShieldUserComments", false),
                  UISwitch("【屏蔽】相关文章", "JianShuShieldRelatedArticles", false),
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
                  ),
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
                views: [UISwitch("拦截-剪贴板", "JianShuRemoveClipboardHijacking", true, void 0, "去除禁止复制")],
              },
            ],
          },
        ],
      },
    ],
  };
  PanelContent.addContentConfig([SettingUICommon, SettingUIPC, SettingUIMobile]);
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
})(DOMUtils, pops, Utils, Qmsg);
