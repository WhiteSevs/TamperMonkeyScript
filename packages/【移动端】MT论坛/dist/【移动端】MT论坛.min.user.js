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

	var u=typeof GM_getValue<"u"?GM_getValue:void 0,n=typeof GM_info<"u"?GM_info:void 0,i=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,a=typeof GM_setValue<"u"?GM_setValue:void 0,d=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,e=typeof unsafeWindow<"u"?unsafeWindow:void 0,o=window;const s=(o.Utils||e.Utils).noConflict(),r=(o.DOMUtils||e.DOMUtils).noConflict();o.pops||e.pops;const l=o.Qmsg||e.Qmsg,m=e.console||o.console,_=new s.Log(n,m);var t;(t=n==null?void 0:n.script)!=null&&t.name;_.config({debug:!1,logMaxCount:100,autoClearConsole:!0,tag:!0});l.config({position:"bottom",html:!0,maxNums:5,autoClose:!0,showClose:!1,showReverse:!0});new s.GM_Menu({GM_getValue:u,GM_setValue:a,GM_registerMenuCommand:i,GM_unregisterMenuCommand:d});r.ready(()=>{console.log("dom is loaded");});

})();