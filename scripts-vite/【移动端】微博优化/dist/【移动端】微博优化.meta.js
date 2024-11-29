// ==UserScript==
// @name         【移动端】微博优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.11.29
// @author       WhiteSevs
// @description  劫持自动跳转登录，修复用户主页正确跳转，伪装客户端，可查看名人堂日程表，解锁视频清晰度(1080p、2K、2K-60、4K、4K-60)
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://m.weibo.cn/*
// @match        *://huati.weibo.cn/*
// @match        *://h5.video.weibo.com/*
// @match        *://card.weibo.com/*
// @match        *://weibo.com/l/wblive/m/show/*
// @require      https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.5.3/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.4.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.9.4/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.7/dist/index.umd.js
// @connect      *
// @connect      m.weibo.cn
// @connect      www.weibo.com
// @connect      passport.weibo.com
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==