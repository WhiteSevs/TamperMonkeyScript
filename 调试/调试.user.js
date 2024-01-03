// ==UserScript==
// @name         调试
// @namespace    https://greasyfork.org/zh-CN/scripts/475424
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @version      2024.1.3
// @description  用于调试油猴、ChromeXt和相关API
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
// @grant        GM.ChromeXt
// @connect      *
// @run-at       document-start
// @require      https://update.greasyfork.org/scripts/455186/1305491/WhiteSevsUtils.js
// @require      https://update.greasyfork.org/scripts/465772/1305501/DOMUtils.js
// ==/UserScript==

(function () {
  let utils = window.Utils.noConflict();
  let __unsafeWindow__ =
    typeof unsafeWindow === "undefined" ? globalThis : unsafeWindow;
  let exportObj = {
    win: window,
    doc: document,
    globalThis: globalThis,
    self: self,
    topWindow: top.window,
    log: new utils.Log(GM_info),
    httpx: new utils.Httpx(GM_xmlhttpRequest),
    Utils: utils,
    utils: utils,
    DOMUtils: window.DOMUtils,
    unsafeWindow: __unsafeWindow__,
    GM_addElement:
      typeof GM_addElement === "undefined" ? undefined : GM_addElement,
    GM_addStyle: typeof GM_addStyle === "undefined" ? undefined : GM_addStyle,
    GM_download: typeof GM_download === "undefined" ? undefined : GM_download,
    GM_getResourceText:
      typeof GM_getResourceText === "undefined"
        ? undefined
        : GM_getResourceText,
    GM_getResourceURL:
      typeof GM_getResourceURL === "undefined" ? undefined : GM_getResourceURL,
    GM_info: typeof GM_info === "undefined" ? undefined : GM_info,
    GM_log: typeof GM_log === "undefined" ? undefined : GM_log,
    GM_notification:
      typeof GM_notification === "undefined" ? undefined : GM_notification,
    GM_registerMenuCommand:
      typeof GM_registerMenuCommand === "undefined"
        ? undefined
        : GM_registerMenuCommand,
    GM_unregisterMenuCommand:
      typeof GM_unregisterMenuCommand === "undefined"
        ? undefined
        : GM_unregisterMenuCommand,
    GM_setClipboard:
      typeof GM_setClipboard === "undefined" ? undefined : GM_setClipboard,
    GM_getTab: typeof GM_getTab === "undefined" ? undefined : GM_getTab,
    GM_saveTab: typeof GM_saveTab === "undefined" ? undefined : GM_saveTab,
    GM_getTabs: typeof GM_getTabs === "undefined" ? undefined : GM_getTabs,
    GM_setValue: typeof GM_setValue === "undefined" ? undefined : GM_setValue,
    GM_getValue: typeof GM_getValue === "undefined" ? undefined : GM_getValue,
    GM_deleteValue:
      typeof GM_deleteValue === "undefined" ? undefined : GM_deleteValue,
    GM_listValues:
      typeof GM_listValues === "undefined" ? undefined : GM_listValues,
    GM_addValueChangeListener:
      typeof GM_addValueChangeListener === "undefined"
        ? undefined
        : GM_addValueChangeListener,
    GM_removeValueChangeListener:
      typeof GM_removeValueChangeListener === "undefined"
        ? undefined
        : GM_removeValueChangeListener,
    GM_xmlhttpRequest:
      typeof GM_xmlhttpRequest === "undefined" ? undefined : GM_xmlhttpRequest,
    GM_cookie: typeof GM_cookie === "undefined" ? undefined : GM_cookie,
    ChromeXt: typeof ChromeXt === "undefined" ? undefined : ChromeXt,
  };
  exportObj = Object.freeze(exportObj);
  __unsafeWindow__.GM_bridge = exportObj;
})();
