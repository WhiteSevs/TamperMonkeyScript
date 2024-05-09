// ==UserScript==
// @name         【移动端】MT论坛
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.5.9
// @author       WhiteSevs
// @description  MT论坛效果增强，如自动签到、自动展开帖子、滚动加载评论、显示UID、自定义屏蔽、手机版小黑屋、编辑器优化、在线用户查看、便捷式图床、自定义用户标签、积分商城商品上架提醒等
// @license      GPL-3.0-only
// @icon         https://bbs.binmt.cc/favicon.ico
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://bbs.binmt.cc/*
// @exclude      /^http(s|):\/\/bbs\.binmt\.cc\/uc_server.*$/
// @require      https://update.greasyfork.org/scripts/494167/1371335/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/462234/1322684/Message.js
// @require      https://update.greasyfork.org/scripts/456485/1371568/pops.js
// @require      https://update.greasyfork.org/scripts/455186/1371570/WhiteSevsUtils.js
// @require      https://update.greasyfork.org/scripts/465772/1360574/DOMUtils.js
// @resource     ElementPlusResourceCSS  https://cdn.jsdelivr.net/npm/element-plus@2.7.2/dist/index.min.css
// @connect      *
// @grant        GM_addStyle
// @grant        GM_cookie
// @grant        GM_deleteValue
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_setClipboard
// @grant        GM_setValue
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict';

  var _a;
  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_info = /* @__PURE__ */ (() => typeof GM_info != "undefined" ? GM_info : void 0)();
  var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  var _GM_unregisterMenuCommand = /* @__PURE__ */ (() => typeof GM_unregisterMenuCommand != "undefined" ? GM_unregisterMenuCommand : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  var _monkeyWindow = /* @__PURE__ */ (() => window)();
  const SCRIPT_NAME = "【移动端】MT论坛";
  const utils = (_monkeyWindow.Utils || _unsafeWindow.Utils).noConflict();
  const DOMUtils = (_monkeyWindow.DOMUtils || _unsafeWindow.DOMUtils).noConflict();
  _monkeyWindow.pops || _unsafeWindow.pops;
  const Qmsg = _monkeyWindow.Qmsg || _unsafeWindow.Qmsg;
  const console$1 = _unsafeWindow.console || _monkeyWindow.console;
  const log = new utils.Log(_GM_info, console$1);
  ((_a = _GM_info == null ? void 0 : _GM_info.script) == null ? void 0 : _a.name) || SCRIPT_NAME;
  log.config({
    debug: false,
    logMaxCount: 100,
    autoClearConsole: true,
    tag: true
  });
  Qmsg.config({
    position: "bottom",
    html: true,
    maxNums: 5,
    autoClose: true,
    showClose: false,
    showReverse: true
  });
  new utils.GM_Menu({
    GM_getValue: _GM_getValue,
    GM_setValue: _GM_setValue,
    GM_registerMenuCommand: _GM_registerMenuCommand,
    GM_unregisterMenuCommand: _GM_unregisterMenuCommand
  });
  DOMUtils.ready(() => {
    console.log("dom is loaded");
  });

})();