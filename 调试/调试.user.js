// ==UserScript==
// @name         调试
// @namespace    https://greasyfork.org/zh-CN/scripts/475424
// @supportURL   https://greasyfork.org/zh-CN/scripts/475424/feedback
// @version      2023.9.26.18
// @description  用于调试油猴和相关API
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
// @require      https://greasyfork.org/scripts/455186-whitesevsutils/code/WhiteSevsUtils.js?version=1270431
// @require      https://greasyfork.org/scripts/465772-domutils/code/DOMUtils.js?version=1258535
// ==/UserScript==

(function () {
  let utils = window.Utils.noConflict();
  unsafeWindow.GM_bridge = {
    win: window,
    unsafeWindow,
    doc: document,
    globalThis,
    self,
    topWindow: top.window,
    log: new utils.Log(GM_info),
    httpx: new utils.Httpx(GM_xmlhttpRequest),
    Utils: utils,
    DOMUtils: window.DOMUtils,
    GM_addElement,
    GM_addStyle,
    GM_download,
    GM_getResourceText,
    GM_getResourceURL,
    GM_info,
    GM_log,
    GM_notification,
    GM_openInTab,
    GM_registerMenuCommand,
    GM_unregisterMenuCommand,
    GM_setClipboard,
    GM_getTab,
    GM_saveTab,
    GM_getTabs,
    GM_setValue,
    GM_getValue,
    GM_deleteValue,
    GM_listValues,
    GM_addValueChangeListener,
    GM_removeValueChangeListener,
    GM_xmlhttpRequest,
    GM_cookie,
    ChromeXt,
  };
})();
