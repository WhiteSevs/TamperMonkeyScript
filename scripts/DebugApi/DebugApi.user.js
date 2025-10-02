// ==UserScript==
// @name         DebugApi
// @name:en-US   DebugApi
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @version      2025.10.2
// @description  注册全局变量GM_bridge，调试油猴、ChromeXt、ScriptCat的Api
// @description:en-US  Register the global variable GM-bridge and debug APIs for Oil Monkey, ChromeXt, and ScriptCat
// @author       WhiteSevs
// @license      GPL-3.0-only
// @match        *://*/*
// @grant        unsafeWindow
// @grant        GM_addElement
// @grant        GM_addStyle
// @grant        GM_download
// @grant        GM_getResourceText
// @grant        GM_getResourceURL
// @grant        GM_info
// @grant        GM_log
// @grant        GM_notification
// @grant        GM_openInTab
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_setClipboard
// @grant        GM_getTab
// @grant        GM_saveTab
// @grant        GM_getTabs
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_addValueChangeListener
// @grant        GM_removeValueChangeListener
// @grant        GM_xmlhttpRequest
// @grant        GM_webRequest
// @grant        GM_cookie
// @grant        GM_audio
// @grant        GM.ChromeXt
// @grant        CAT_setProxy
// @grant        CAT_clearProxy
// @grant        CAT_click
// @grant        CAT_userConfig
// @grant        CAT_fileStorage
// @connect      *
// @run-at       document-start
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.9.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.7.0/dist/index.umd.js
// ==/UserScript==

(function () {
  if (typeof unsafeWindow === "undefined") {
    var unsafeWindow = globalThis.unsafeWindow || globalThis || window || self;
  }
  let utils = window.Utils.noConflict();

  /** 油猴Api */
  const GMApi = {
    unsafeWindow: unsafeWindow,
    GM_addElement:
      typeof GM_addElement === "undefined" || (typeof GM_addElement !== "undefined" && GM_addElement == null)
        ? void 0
        : GM_addElement,
    GM_addStyle:
      typeof GM_addStyle === "undefined" || (typeof GM_addStyle !== "undefined" && GM_addStyle == null)
        ? void 0
        : GM_addStyle,
    GM_download:
      typeof GM_download === "undefined" || (typeof GM_download !== "undefined" && GM_download == null)
        ? void 0
        : GM_download,
    GM_getResourceText:
      typeof GM_getResourceText === "undefined" ||
      (typeof GM_getResourceText !== "undefined" && GM_getResourceText == null)
        ? void 0
        : GM_getResourceText,
    GM_getResourceURL:
      typeof GM_getResourceURL === "undefined" ||
      (typeof GM_getResourceURL !== "undefined" && GM_getResourceURL == null)
        ? void 0
        : GM_getResourceURL,
    GM_info: typeof GM_info === "undefined" || (typeof GM_info !== "undefined" && GM_info == null) ? void 0 : GM_info,
    GM_log: typeof GM_log === "undefined" || (typeof GM_log !== "undefined" && GM_log == null) ? void 0 : GM_log,
    GM_notification:
      typeof GM_notification === "undefined" || (typeof GM_notification !== "undefined" && GM_notification == null)
        ? void 0
        : GM_notification,
    GM_registerMenuCommand:
      typeof GM_registerMenuCommand === "undefined" ||
      (typeof GM_registerMenuCommand !== "undefined" && GM_registerMenuCommand == null)
        ? void 0
        : GM_registerMenuCommand,
    GM_unregisterMenuCommand:
      typeof GM_unregisterMenuCommand === "undefined" ||
      (typeof GM_unregisterMenuCommand !== "undefined" && GM_unregisterMenuCommand == null)
        ? void 0
        : GM_unregisterMenuCommand,
    GM_setClipboard:
      typeof GM_setClipboard === "undefined" || (typeof GM_setClipboard !== "undefined" && GM_setClipboard == null)
        ? void 0
        : GM_setClipboard,
    GM_getTab:
      typeof GM_getTab === "undefined" || (typeof GM_getTab !== "undefined" && GM_getTab == null) ? void 0 : GM_getTab,
    GM_saveTab:
      typeof GM_saveTab === "undefined" || (typeof GM_saveTab !== "undefined" && GM_saveTab == null)
        ? void 0
        : GM_saveTab,
    GM_getTabs:
      typeof GM_getTabs === "undefined" || (typeof GM_getTabs !== "undefined" && GM_getTabs == null)
        ? void 0
        : GM_getTabs,
    GM_setValue:
      typeof GM_setValue === "undefined" || (typeof GM_setValue !== "undefined" && GM_setValue == null)
        ? void 0
        : GM_setValue,
    GM_getValue:
      typeof GM_getValue === "undefined" || (typeof GM_getValue !== "undefined" && GM_getValue == null)
        ? void 0
        : GM_getValue,
    GM_deleteValue:
      typeof GM_deleteValue === "undefined" || (typeof GM_deleteValue !== "undefined" && GM_deleteValue == null)
        ? void 0
        : GM_deleteValue,
    GM_listValues:
      typeof GM_listValues === "undefined" || (typeof GM_listValues !== "undefined" && GM_listValues == null)
        ? void 0
        : GM_listValues,
    GM_addValueChangeListener:
      typeof GM_addValueChangeListener === "undefined" ||
      (typeof GM_addValueChangeListener !== "undefined" && GM_addValueChangeListener == null)
        ? void 0
        : GM_addValueChangeListener,
    GM_removeValueChangeListener:
      typeof GM_removeValueChangeListener === "undefined" ||
      (typeof GM_removeValueChangeListener !== "undefined" && GM_removeValueChangeListener == null)
        ? void 0
        : GM_removeValueChangeListener,
    GM_xmlhttpRequest:
      typeof GM_xmlhttpRequest === "undefined" ||
      (typeof GM_xmlhttpRequest !== "undefined" && GM_xmlhttpRequest == null)
        ? void 0
        : GM_xmlhttpRequest,
    GM_audio:
      typeof GM_audio === "undefined" || (typeof GM_audio !== "undefined" && GM_audio == null) ? void 0 : GM_audio,
  };
  /** 油猴beta Api */
  const GMBetaApi = {
    GM_cookie:
      typeof GM_cookie === "undefined" || (typeof GM_cookie !== "undefined" && GM_cookie == null)
        ? undefined
        : GM_cookie,
    GM_webRequest:
      typeof GM_webRequest === "undefined" || (typeof GM_webRequest !== "undefined" && GM_webRequest == null)
        ? undefined
        : GM_webRequest,
  };
  /** ChromeXt的Api */
  const ChromeXtApi = {
    ChromeXt:
      typeof ChromeXt === "undefined" || (typeof ChromeXt !== "undefined" && ChromeXt == null) ? void 0 : ChromeXt,
  };
  /** ScriptCat的Api */
  const ScriptCatApi = {
    CAT_userConfig:
      typeof CAT_userConfig === "undefined" || (typeof CAT_userConfig !== "undefined" && CAT_userConfig == null)
        ? void 0
        : CAT_userConfig,
    CAT_fileStorage:
      typeof CAT_fileStorage === "undefined" || (typeof CAT_fileStorage !== "undefined" && CAT_fileStorage == null)
        ? void 0
        : CAT_fileStorage,
  };
  /** ScriptCat的beta api */
  const ScriptCatBetaApi = {};
  /** ScriptCat的弃用api */
  const ScriptCatDeprecatedApi = {
    CAT_setProxy:
      typeof CAT_setProxy === "undefined" || (typeof CAT_setProxy !== "undefined" && CAT_setProxy == null)
        ? void 0
        : CAT_setProxy,
    CAT_clearProxy:
      typeof CAT_clearProxy === "undefined" || (typeof CAT_clearProxy !== "undefined" && CAT_clearProxy == null)
        ? void 0
        : CAT_clearProxy,
    CAT_click:
      typeof CAT_click === "undefined" || (typeof CAT_click !== "undefined" && CAT_click == null) ? void 0 : CAT_click,
  };
  /** 其它api */
  const otherApi = {
    log: new utils.Log(GM_info, unsafeWindow.console || console),
    httpx: new utils.Httpx(GM_xmlhttpRequest),
    Utils: utils,
    utils: utils,
    DOMUtils: window.DOMUtils,
  };
  /** window环境api */
  const windowApi = {
    win: window,
    doc: document,
    globalThis: globalThis,
    self: self,
    topWindow: top.window,
  };

  /** 导出到全局变量的api */
  const exportApi = {
    ...GMApi,
    ...GMBetaApi,
    ...ChromeXtApi,
    ...ScriptCatApi,
    ...ScriptCatBetaApi,
    ...ScriptCatDeprecatedApi,
    ...otherApi,
    ...windowApi,
  };
  // 冻结对象
  exportApi = Object.freeze(exportApi);
  // 注册
  unsafeWindow.GM_bridge = exportApi;
  if (
    typeof window.GM_bridge === "undefined" ||
    (typeof window.GM_bridge !== "undefined" && window.GM_bridge == null)
  ) {
    // 如果不存在，继续注册尝试
    window.GM_bridge = exportApi;
  }
})();
