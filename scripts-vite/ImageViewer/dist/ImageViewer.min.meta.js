// ==UserScript==
// @name         ImageViewer
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.1.29
// @author       WhiteSevs
// @description  Viewer看图工具，支持图片翻转、旋转、缩放
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.9.10/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.9.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@3.2.1/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.6.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.js
// @require      Viewer
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