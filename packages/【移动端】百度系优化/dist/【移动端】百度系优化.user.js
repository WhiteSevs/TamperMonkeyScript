// ==UserScript==
// @name         【移动端】百度系优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.7.7.19
// @author       WhiteSevs
// @description  用于【移动端】的百度系列产品优化，包括【百度搜索】、【百家号】、【百度贴吧】、【百度文库】、【百度经验】、【百度百科】、【百度知道】、【百度翻译】、【百度图片】、【百度地图】、【百度好看视频】、【百度爱企查】、【百度问题】、【百度识图】等
// @license      GPL-3.0-only
// @icon         https://www.baidu.com/favicon.ico
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.baidu.com/*
// @match        *://www.tieba.com/*
// @match        *://uf9kyh.smartapps.cn/*
// @require      https://update.greasyfork.org/scripts/494167/1376186/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/456485/1406779/pops.js
// @require      https://update.greasyfork.org/scripts/488179/1384528/showdown.js
// @require      https://fastly.jsdelivr.net/npm/vue@3.4.31/dist/vue.global.prod.js
// @require      https://fastly.jsdelivr.net/npm/vue-demi@0.14.8/lib/index.iife.min.js
// @require      https://fastly.jsdelivr.net/npm/pinia@2.1.7/dist/pinia.iife.prod.js
// @require      https://fastly.jsdelivr.net/npm/vue-router@4.4.0/dist/vue-router.global.js
// @require      https://update.greasyfork.org/scripts/495227/1378053/Element-Plus.js
// @require      https://fastly.jsdelivr.net/npm/@element-plus/icons-vue@2.3.1/dist/index.iife.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.1.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@1.5.9/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.1.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.6/dist/viewer.min.js
// @resource     ElementPlusResourceCSS  https://fastly.jsdelivr.net/npm/element-plus@2.7.5/dist/index.min.css
// @resource     ViewerCSS               https://fastly.jsdelivr.net/npm/viewerjs@1.11.6/dist/viewer.min.css
// @connect      www.baidu.com
// @connect      m.baidu.com
// @connect      tieba.baidu.com
// @connect      www.tieba.com
// @connect      baike.baidu.com
// @connect      chat.baidu.com
// @connect      chat-ws.baidu.com
// @grant        GM_addStyle
// @grant        GM_deleteValue
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

(e=>{function o(t){if(typeof t!="string")throw new TypeError("cssText must be a string");let l=document.createElement("style");return l.setAttribute("type","text/css"),l.innerHTML=t,document.head?document.head.appendChild(l):document.body?document.body.appendChild(l):document.documentElement.childNodes.length===0?document.documentElement.appendChild(l):document.documentElement.insertBefore(l,document.documentElement.childNodes[0]),l}if(typeof GM_addStyle=="function"){GM_addStyle(e);return}o(e)})(' @charset "UTF-8";#small-toolbar[data-v-b0424261]{position:fixed;bottom:0;width:100%;background:#fff;height:.56rem;display:flex;align-items:center;z-index:1000}#small-toolbar[data-v-b0424261] .icon[data-v-b0424261]{width:.2rem;height:.2rem}#small-toolbar[data-v-b0424261] #reply-editor[data-v-b0424261]{flex:1}#small-toolbar[data-v-b0424261] .small-editor-toolbar[data-v-b0424261]{flex:1;margin:10px 15px;width:100%;font-size:.16rem;line-height:.16rem;display:flex;align-items:center;position:relative}#small-toolbar[data-v-b0424261] .small-editor-toolbar[data-v-b0424261] .small-editor-toolbar-input[data-v-b0424261]{width:100%;background:#e9e9e9;border-radius:.06rem;padding:.06rem;border:0;outline:none;font-size:.14rem;line-height:.14rem;cursor:default}#small-toolbar[data-v-b0424261] .small-editor-toolbar[data-v-b0424261] .small-editor-toolbar-emoji-btn[data-v-b0424261]{position:absolute;top:50%;right:.06rem;transform:translateY(-50%)}#small-toolbar[data-v-b0424261] .small-editor-toolbar[data-v-b0424261] .small-editor-toolbar-input[data-v-b0424261]:focus,#small-toolbar[data-v-b0424261] .small-editor-toolbar[data-v-b0424261] .small-editor-toolbar-input[data-v-b0424261]:visited,#small-toolbar[data-v-b0424261] .small-editor-toolbar[data-v-b0424261] .small-editor-toolbar-input[data-v-b0424261]:focus-within,#small-toolbar[data-v-b0424261] .small-editor-toolbar[data-v-b0424261] .small-editor-toolbar-input[data-v-b0424261]:focus-visible{border:0;outline:none}#small-toolbar[data-v-b0424261] .gm-reply-other-toolbar[data-v-b0424261]{flex:0 auto;display:flex;align-items:safe center}#small-toolbar[data-v-b0424261] .gm-reply-other-toolbar[data-v-b0424261] .reply-comment-count[data-v-b0424261],#small-toolbar[data-v-b0424261] .gm-reply-other-toolbar[data-v-b0424261] .reply-good-count[data-v-b0424261]{padding:8px;display:flex;flex-direction:column;align-items:center}#small-toolbar[data-v-b0424261] .gm-reply-other-toolbar[data-v-b0424261] .reply-comment-count[data-v-b0424261] p.text[data-v-b0424261],#small-toolbar[data-v-b0424261] .gm-reply-other-toolbar[data-v-b0424261] .reply-good-count[data-v-b0424261] p.text[data-v-b0424261]{font-size:.1rem}:root{--el-color-white:#ffffff;--el-color-black:#000000;--el-color-primary-rgb:64,158,255;--el-color-success-rgb:103,194,58;--el-color-warning-rgb:230,162,60;--el-color-danger-rgb:245,108,108;--el-color-error-rgb:245,108,108;--el-color-info-rgb:144,147,153;--el-font-size-extra-large:20px;--el-font-size-large:18px;--el-font-size-medium:16px;--el-font-size-base:14px;--el-font-size-small:13px;--el-font-size-extra-small:12px;--el-font-family:"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","\u5FAE\u8F6F\u96C5\u9ED1",Arial,sans-serif;--el-font-weight-primary:500;--el-font-line-height-primary:24px;--el-index-normal:1;--el-index-top:1000;--el-index-popper:2000;--el-border-radius-base:4px;--el-border-radius-small:2px;--el-border-radius-round:20px;--el-border-radius-circle:100%;--el-transition-duration:.3s;--el-transition-duration-fast:.2s;--el-transition-function-ease-in-out-bezier:cubic-bezier(.645,.045,.355,1);--el-transition-function-fast-bezier:cubic-bezier(.23,1,.32,1);--el-transition-all:all var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);--el-transition-fade:opacity var(--el-transition-duration) var(--el-transition-function-fast-bezier);--el-transition-md-fade:transform var(--el-transition-duration) var(--el-transition-function-fast-bezier),opacity var(--el-transition-duration) var(--el-transition-function-fast-bezier);--el-transition-fade-linear:opacity var(--el-transition-duration-fast) linear;--el-transition-border:border-color var(--el-transition-duration-fast) var(--el-transition-function-ease-in-out-bezier);--el-transition-box-shadow:box-shadow var(--el-transition-duration-fast) var(--el-transition-function-ease-in-out-bezier);--el-transition-color:color var(--el-transition-duration-fast) var(--el-transition-function-ease-in-out-bezier);--el-component-size-large:40px;--el-component-size:32px;--el-component-size-small:24px}:root{color-scheme:light;--el-color-primary:#409eff;--el-color-primary-light-3:#79bbff;--el-color-primary-light-5:#a0cfff;--el-color-primary-light-7:#c6e2ff;--el-color-primary-light-8:#d9ecff;--el-color-primary-light-9:#ecf5ff;--el-color-primary-dark-2:#337ecc;--el-color-success:#67c23a;--el-color-success-light-3:#95d475;--el-color-success-light-5:#b3e19d;--el-color-success-light-7:#d1edc4;--el-color-success-light-8:#e1f3d8;--el-color-success-light-9:#f0f9eb;--el-color-success-dark-2:#529b2e;--el-color-warning:#e6a23c;--el-color-warning-light-3:#eebe77;--el-color-warning-light-5:#f3d19e;--el-color-warning-light-7:#f8e3c5;--el-color-warning-light-8:#faecd8;--el-color-warning-light-9:#fdf6ec;--el-color-warning-dark-2:#b88230;--el-color-danger:#f56c6c;--el-color-danger-light-3:#f89898;--el-color-danger-light-5:#fab6b6;--el-color-danger-light-7:#fcd3d3;--el-color-danger-light-8:#fde2e2;--el-color-danger-light-9:#fef0f0;--el-color-danger-dark-2:#c45656;--el-color-error:#f56c6c;--el-color-error-light-3:#f89898;--el-color-error-light-5:#fab6b6;--el-color-error-light-7:#fcd3d3;--el-color-error-light-8:#fde2e2;--el-color-error-light-9:#fef0f0;--el-color-error-dark-2:#c45656;--el-color-info:#909399;--el-color-info-light-3:#b1b3b8;--el-color-info-light-5:#c8c9cc;--el-color-info-light-7:#dedfe0;--el-color-info-light-8:#e9e9eb;--el-color-info-light-9:#f4f4f5;--el-color-info-dark-2:#73767a;--el-bg-color:#ffffff;--el-bg-color-page:#f2f3f5;--el-bg-color-overlay:#ffffff;--el-text-color-primary:#303133;--el-text-color-regular:#606266;--el-text-color-secondary:#909399;--el-text-color-placeholder:#a8abb2;--el-text-color-disabled:#c0c4cc;--el-border-color:#dcdfe6;--el-border-color-light:#e4e7ed;--el-border-color-lighter:#ebeef5;--el-border-color-extra-light:#f2f6fc;--el-border-color-dark:#d4d7de;--el-border-color-darker:#cdd0d6;--el-fill-color:#f0f2f5;--el-fill-color-light:#f5f7fa;--el-fill-color-lighter:#fafafa;--el-fill-color-extra-light:#fafcff;--el-fill-color-dark:#ebedf0;--el-fill-color-darker:#e6e8eb;--el-fill-color-blank:#ffffff;--el-box-shadow:0px 12px 32px 4px rgba(0,0,0,.04),0px 8px 20px rgba(0,0,0,.08);--el-box-shadow-light:0px 0px 12px rgba(0,0,0,.12);--el-box-shadow-lighter:0px 0px 6px rgba(0,0,0,.12);--el-box-shadow-dark:0px 16px 48px 16px rgba(0,0,0,.08),0px 12px 32px rgba(0,0,0,.12),0px 8px 16px -8px rgba(0,0,0,.16);--el-disabled-bg-color:var(--el-fill-color-light);--el-disabled-text-color:var(--el-text-color-placeholder);--el-disabled-border-color:var(--el-border-color-light);--el-overlay-color:rgba(0,0,0,.8);--el-overlay-color-light:rgba(0,0,0,.7);--el-overlay-color-lighter:rgba(0,0,0,.5);--el-mask-color:rgba(255,255,255,.9);--el-mask-color-extra-light:rgba(255,255,255,.3);--el-border-width:1px;--el-border-style:solid;--el-border-color-hover:var(--el-text-color-disabled);--el-border:var(--el-border-width) var(--el-border-style) var(--el-border-color);--el-svg-monochrome-grey:var(--el-border-color)}.fade-in-linear-enter-active,.fade-in-linear-leave-active{transition:var(--el-transition-fade-linear)}.fade-in-linear-enter-from,.fade-in-linear-leave-to{opacity:0}.el-fade-in-linear-enter-active,.el-fade-in-linear-leave-active{transition:var(--el-transition-fade-linear)}.el-fade-in-linear-enter-from,.el-fade-in-linear-leave-to{opacity:0}.el-fade-in-enter-active,.el-fade-in-leave-active{transition:all var(--el-transition-duration) cubic-bezier(.55,0,.1,1)}.el-fade-in-enter-from,.el-fade-in-leave-active{opacity:0}.el-zoom-in-center-enter-active,.el-zoom-in-center-leave-active{transition:all var(--el-transition-duration) cubic-bezier(.55,0,.1,1)}.el-zoom-in-center-enter-from,.el-zoom-in-center-leave-active{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active,.el-zoom-in-top-leave-active{opacity:1;transform:scaleY(1);transform-origin:center top;transition:var(--el-transition-md-fade)}.el-zoom-in-top-enter-active[data-popper-placement^=top],.el-zoom-in-top-leave-active[data-popper-placement^=top]{transform-origin:center bottom}.el-zoom-in-top-enter-from,.el-zoom-in-top-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active,.el-zoom-in-bottom-leave-active{opacity:1;transform:scaleY(1);transform-origin:center bottom;transition:var(--el-transition-md-fade)}.el-zoom-in-bottom-enter-from,.el-zoom-in-bottom-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active,.el-zoom-in-left-leave-active{opacity:1;transform:scale(1);transform-origin:top left;transition:var(--el-transition-md-fade)}.el-zoom-in-left-enter-from,.el-zoom-in-left-leave-active{opacity:0;transform:scale(.45)}.collapse-transition{transition:var(--el-transition-duration) height ease-in-out,var(--el-transition-duration) padding-top ease-in-out,var(--el-transition-duration) padding-bottom ease-in-out}.el-collapse-transition-enter-active,.el-collapse-transition-leave-active{transition:var(--el-transition-duration) max-height ease-in-out,var(--el-transition-duration) padding-top ease-in-out,var(--el-transition-duration) padding-bottom ease-in-out}.horizontal-collapse-transition{transition:var(--el-transition-duration) width ease-in-out,var(--el-transition-duration) padding-left ease-in-out,var(--el-transition-duration) padding-right ease-in-out}.el-list-enter-active,.el-list-leave-active{transition:all 1s}.el-list-enter-from,.el-list-leave-to{opacity:0;transform:translateY(-30px)}.el-list-leave-active{position:absolute!important}.el-opacity-transition{transition:opacity var(--el-transition-duration) cubic-bezier(.55,0,.1,1)}.el-icon-loading{-webkit-animation:rotating 2s linear infinite;animation:rotating 2s linear infinite}.el-icon--right{margin-left:5px}.el-icon--left{margin-right:5px}@-webkit-keyframes rotating{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes rotating{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.el-icon{--color:inherit;align-items:center;display:inline-flex;height:1em;justify-content:center;line-height:1em;position:relative;width:1em;fill:currentColor;color:var(--color);font-size:inherit}.el-icon.is-loading{-webkit-animation:rotating 2s linear infinite;animation:rotating 2s linear infinite}.el-icon svg{height:1em;width:1em}.el-avatar{--el-avatar-text-color:var(--el-color-white);--el-avatar-bg-color:var(--el-text-color-disabled);--el-avatar-text-size:14px;--el-avatar-icon-size:18px;--el-avatar-border-radius:var(--el-border-radius-base);--el-avatar-size-large:56px;--el-avatar-size-small:24px;--el-avatar-size:40px;align-items:center;background:var(--el-avatar-bg-color);box-sizing:border-box;color:var(--el-avatar-text-color);display:inline-flex;font-size:var(--el-avatar-text-size);height:var(--el-avatar-size);justify-content:center;overflow:hidden;text-align:center;width:var(--el-avatar-size)}.el-avatar>img{display:block;height:100%;width:100%}.el-avatar--circle{border-radius:50%}.el-avatar--square{border-radius:var(--el-avatar-border-radius)}.el-avatar--icon{font-size:var(--el-avatar-icon-size)}.el-avatar--small{--el-avatar-size:24px}.el-avatar--large{--el-avatar-size:56px}.el-row{box-sizing:border-box;display:flex;flex-wrap:wrap;position:relative}.el-row.is-justify-center{justify-content:center}.el-row.is-justify-end{justify-content:flex-end}.el-row.is-justify-space-between{justify-content:space-between}.el-row.is-justify-space-around{justify-content:space-around}.el-row.is-justify-space-evenly{justify-content:space-evenly}.el-row.is-align-top{align-items:flex-start}.el-row.is-align-middle{align-items:center}.el-row.is-align-bottom{align-items:flex-end}[class*=el-col-]{box-sizing:border-box}[class*=el-col-].is-guttered{display:block;min-height:1px}.el-col-0{flex:0 0 0%;max-width:0}.el-col-0,.el-col-0.is-guttered{display:none}.el-col-offset-0{margin-left:0}.el-col-pull-0{position:relative;right:0}.el-col-push-0{left:0;position:relative}.el-col-1{flex:0 0 4.1666666667%;max-width:4.1666666667%}.el-col-1,.el-col-1.is-guttered{display:block}.el-col-offset-1{margin-left:4.1666666667%}.el-col-pull-1{position:relative;right:4.1666666667%}.el-col-push-1{left:4.1666666667%;position:relative}.el-col-2{flex:0 0 8.3333333333%;max-width:8.3333333333%}.el-col-2,.el-col-2.is-guttered{display:block}.el-col-offset-2{margin-left:8.3333333333%}.el-col-pull-2{position:relative;right:8.3333333333%}.el-col-push-2{left:8.3333333333%;position:relative}.el-col-3{flex:0 0 12.5%;max-width:12.5%}.el-col-3,.el-col-3.is-guttered{display:block}.el-col-offset-3{margin-left:12.5%}.el-col-pull-3{position:relative;right:12.5%}.el-col-push-3{left:12.5%;position:relative}.el-col-4{flex:0 0 16.6666666667%;max-width:16.6666666667%}.el-col-4,.el-col-4.is-guttered{display:block}.el-col-offset-4{margin-left:16.6666666667%}.el-col-pull-4{position:relative;right:16.6666666667%}.el-col-push-4{left:16.6666666667%;position:relative}.el-col-5{flex:0 0 20.8333333333%;max-width:20.8333333333%}.el-col-5,.el-col-5.is-guttered{display:block}.el-col-offset-5{margin-left:20.8333333333%}.el-col-pull-5{position:relative;right:20.8333333333%}.el-col-push-5{left:20.8333333333%;position:relative}.el-col-6{flex:0 0 25%;max-width:25%}.el-col-6,.el-col-6.is-guttered{display:block}.el-col-offset-6{margin-left:25%}.el-col-pull-6{position:relative;right:25%}.el-col-push-6{left:25%;position:relative}.el-col-7{flex:0 0 29.1666666667%;max-width:29.1666666667%}.el-col-7,.el-col-7.is-guttered{display:block}.el-col-offset-7{margin-left:29.1666666667%}.el-col-pull-7{position:relative;right:29.1666666667%}.el-col-push-7{left:29.1666666667%;position:relative}.el-col-8{flex:0 0 33.3333333333%;max-width:33.3333333333%}.el-col-8,.el-col-8.is-guttered{display:block}.el-col-offset-8{margin-left:33.3333333333%}.el-col-pull-8{position:relative;right:33.3333333333%}.el-col-push-8{left:33.3333333333%;position:relative}.el-col-9{flex:0 0 37.5%;max-width:37.5%}.el-col-9,.el-col-9.is-guttered{display:block}.el-col-offset-9{margin-left:37.5%}.el-col-pull-9{position:relative;right:37.5%}.el-col-push-9{left:37.5%;position:relative}.el-col-10{flex:0 0 41.6666666667%;max-width:41.6666666667%}.el-col-10,.el-col-10.is-guttered{display:block}.el-col-offset-10{margin-left:41.6666666667%}.el-col-pull-10{position:relative;right:41.6666666667%}.el-col-push-10{left:41.6666666667%;position:relative}.el-col-11{flex:0 0 45.8333333333%;max-width:45.8333333333%}.el-col-11,.el-col-11.is-guttered{display:block}.el-col-offset-11{margin-left:45.8333333333%}.el-col-pull-11{position:relative;right:45.8333333333%}.el-col-push-11{left:45.8333333333%;position:relative}.el-col-12{flex:0 0 50%;max-width:50%}.el-col-12,.el-col-12.is-guttered{display:block}.el-col-offset-12{margin-left:50%}.el-col-pull-12{position:relative;right:50%}.el-col-push-12{left:50%;position:relative}.el-col-13{flex:0 0 54.1666666667%;max-width:54.1666666667%}.el-col-13,.el-col-13.is-guttered{display:block}.el-col-offset-13{margin-left:54.1666666667%}.el-col-pull-13{position:relative;right:54.1666666667%}.el-col-push-13{left:54.1666666667%;position:relative}.el-col-14{flex:0 0 58.3333333333%;max-width:58.3333333333%}.el-col-14,.el-col-14.is-guttered{display:block}.el-col-offset-14{margin-left:58.3333333333%}.el-col-pull-14{position:relative;right:58.3333333333%}.el-col-push-14{left:58.3333333333%;position:relative}.el-col-15{flex:0 0 62.5%;max-width:62.5%}.el-col-15,.el-col-15.is-guttered{display:block}.el-col-offset-15{margin-left:62.5%}.el-col-pull-15{position:relative;right:62.5%}.el-col-push-15{left:62.5%;position:relative}.el-col-16{flex:0 0 66.6666666667%;max-width:66.6666666667%}.el-col-16,.el-col-16.is-guttered{display:block}.el-col-offset-16{margin-left:66.6666666667%}.el-col-pull-16{position:relative;right:66.6666666667%}.el-col-push-16{left:66.6666666667%;position:relative}.el-col-17{flex:0 0 70.8333333333%;max-width:70.8333333333%}.el-col-17,.el-col-17.is-guttered{display:block}.el-col-offset-17{margin-left:70.8333333333%}.el-col-pull-17{position:relative;right:70.8333333333%}.el-col-push-17{left:70.8333333333%;position:relative}.el-col-18{flex:0 0 75%;max-width:75%}.el-col-18,.el-col-18.is-guttered{display:block}.el-col-offset-18{margin-left:75%}.el-col-pull-18{position:relative;right:75%}.el-col-push-18{left:75%;position:relative}.el-col-19{flex:0 0 79.1666666667%;max-width:79.1666666667%}.el-col-19,.el-col-19.is-guttered{display:block}.el-col-offset-19{margin-left:79.1666666667%}.el-col-pull-19{position:relative;right:79.1666666667%}.el-col-push-19{left:79.1666666667%;position:relative}.el-col-20{flex:0 0 83.3333333333%;max-width:83.3333333333%}.el-col-20,.el-col-20.is-guttered{display:block}.el-col-offset-20{margin-left:83.3333333333%}.el-col-pull-20{position:relative;right:83.3333333333%}.el-col-push-20{left:83.3333333333%;position:relative}.el-col-21{flex:0 0 87.5%;max-width:87.5%}.el-col-21,.el-col-21.is-guttered{display:block}.el-col-offset-21{margin-left:87.5%}.el-col-pull-21{position:relative;right:87.5%}.el-col-push-21{left:87.5%;position:relative}.el-col-22{flex:0 0 91.6666666667%;max-width:91.6666666667%}.el-col-22,.el-col-22.is-guttered{display:block}.el-col-offset-22{margin-left:91.6666666667%}.el-col-pull-22{position:relative;right:91.6666666667%}.el-col-push-22{left:91.6666666667%;position:relative}.el-col-23{flex:0 0 95.8333333333%;max-width:95.8333333333%}.el-col-23,.el-col-23.is-guttered{display:block}.el-col-offset-23{margin-left:95.8333333333%}.el-col-pull-23{position:relative;right:95.8333333333%}.el-col-push-23{left:95.8333333333%;position:relative}.el-col-24{flex:0 0 100%;max-width:100%}.el-col-24,.el-col-24.is-guttered{display:block}.el-col-offset-24{margin-left:100%}.el-col-pull-24{position:relative;right:100%}.el-col-push-24{left:100%;position:relative}@media only screen and (max-width:767px){.el-col-xs-0{display:none;flex:0 0 0%;max-width:0}.el-col-xs-0.is-guttered{display:none}.el-col-xs-offset-0{margin-left:0}.el-col-xs-pull-0{position:relative;right:0}.el-col-xs-push-0{left:0;position:relative}.el-col-xs-1{flex:0 0 4.1666666667%;max-width:4.1666666667%}.el-col-xs-1,.el-col-xs-1.is-guttered{display:block}.el-col-xs-offset-1{margin-left:4.1666666667%}.el-col-xs-pull-1{position:relative;right:4.1666666667%}.el-col-xs-push-1{left:4.1666666667%;position:relative}.el-col-xs-2{flex:0 0 8.3333333333%;max-width:8.3333333333%}.el-col-xs-2,.el-col-xs-2.is-guttered{display:block}.el-col-xs-offset-2{margin-left:8.3333333333%}.el-col-xs-pull-2{position:relative;right:8.3333333333%}.el-col-xs-push-2{left:8.3333333333%;position:relative}.el-col-xs-3{flex:0 0 12.5%;max-width:12.5%}.el-col-xs-3,.el-col-xs-3.is-guttered{display:block}.el-col-xs-offset-3{margin-left:12.5%}.el-col-xs-pull-3{position:relative;right:12.5%}.el-col-xs-push-3{left:12.5%;position:relative}.el-col-xs-4{flex:0 0 16.6666666667%;max-width:16.6666666667%}.el-col-xs-4,.el-col-xs-4.is-guttered{display:block}.el-col-xs-offset-4{margin-left:16.6666666667%}.el-col-xs-pull-4{position:relative;right:16.6666666667%}.el-col-xs-push-4{left:16.6666666667%;position:relative}.el-col-xs-5{flex:0 0 20.8333333333%;max-width:20.8333333333%}.el-col-xs-5,.el-col-xs-5.is-guttered{display:block}.el-col-xs-offset-5{margin-left:20.8333333333%}.el-col-xs-pull-5{position:relative;right:20.8333333333%}.el-col-xs-push-5{left:20.8333333333%;position:relative}.el-col-xs-6{flex:0 0 25%;max-width:25%}.el-col-xs-6,.el-col-xs-6.is-guttered{display:block}.el-col-xs-offset-6{margin-left:25%}.el-col-xs-pull-6{position:relative;right:25%}.el-col-xs-push-6{left:25%;position:relative}.el-col-xs-7{flex:0 0 29.1666666667%;max-width:29.1666666667%}.el-col-xs-7,.el-col-xs-7.is-guttered{display:block}.el-col-xs-offset-7{margin-left:29.1666666667%}.el-col-xs-pull-7{position:relative;right:29.1666666667%}.el-col-xs-push-7{left:29.1666666667%;position:relative}.el-col-xs-8{flex:0 0 33.3333333333%;max-width:33.3333333333%}.el-col-xs-8,.el-col-xs-8.is-guttered{display:block}.el-col-xs-offset-8{margin-left:33.3333333333%}.el-col-xs-pull-8{position:relative;right:33.3333333333%}.el-col-xs-push-8{left:33.3333333333%;position:relative}.el-col-xs-9{flex:0 0 37.5%;max-width:37.5%}.el-col-xs-9,.el-col-xs-9.is-guttered{display:block}.el-col-xs-offset-9{margin-left:37.5%}.el-col-xs-pull-9{position:relative;right:37.5%}.el-col-xs-push-9{left:37.5%;position:relative}.el-col-xs-10{display:block;flex:0 0 41.6666666667%;max-width:41.6666666667%}.el-col-xs-10.is-guttered{display:block}.el-col-xs-offset-10{margin-left:41.6666666667%}.el-col-xs-pull-10{position:relative;right:41.6666666667%}.el-col-xs-push-10{left:41.6666666667%;position:relative}.el-col-xs-11{display:block;flex:0 0 45.8333333333%;max-width:45.8333333333%}.el-col-xs-11.is-guttered{display:block}.el-col-xs-offset-11{margin-left:45.8333333333%}.el-col-xs-pull-11{position:relative;right:45.8333333333%}.el-col-xs-push-11{left:45.8333333333%;position:relative}.el-col-xs-12{display:block;flex:0 0 50%;max-width:50%}.el-col-xs-12.is-guttered{display:block}.el-col-xs-offset-12{margin-left:50%}.el-col-xs-pull-12{position:relative;right:50%}.el-col-xs-push-12{left:50%;position:relative}.el-col-xs-13{display:block;flex:0 0 54.1666666667%;max-width:54.1666666667%}.el-col-xs-13.is-guttered{display:block}.el-col-xs-offset-13{margin-left:54.1666666667%}.el-col-xs-pull-13{position:relative;right:54.1666666667%}.el-col-xs-push-13{left:54.1666666667%;position:relative}.el-col-xs-14{display:block;flex:0 0 58.3333333333%;max-width:58.3333333333%}.el-col-xs-14.is-guttered{display:block}.el-col-xs-offset-14{margin-left:58.3333333333%}.el-col-xs-pull-14{position:relative;right:58.3333333333%}.el-col-xs-push-14{left:58.3333333333%;position:relative}.el-col-xs-15{display:block;flex:0 0 62.5%;max-width:62.5%}.el-col-xs-15.is-guttered{display:block}.el-col-xs-offset-15{margin-left:62.5%}.el-col-xs-pull-15{position:relative;right:62.5%}.el-col-xs-push-15{left:62.5%;position:relative}.el-col-xs-16{display:block;flex:0 0 66.6666666667%;max-width:66.6666666667%}.el-col-xs-16.is-guttered{display:block}.el-col-xs-offset-16{margin-left:66.6666666667%}.el-col-xs-pull-16{position:relative;right:66.6666666667%}.el-col-xs-push-16{left:66.6666666667%;position:relative}.el-col-xs-17{display:block;flex:0 0 70.8333333333%;max-width:70.8333333333%}.el-col-xs-17.is-guttered{display:block}.el-col-xs-offset-17{margin-left:70.8333333333%}.el-col-xs-pull-17{position:relative;right:70.8333333333%}.el-col-xs-push-17{left:70.8333333333%;position:relative}.el-col-xs-18{display:block;flex:0 0 75%;max-width:75%}.el-col-xs-18.is-guttered{display:block}.el-col-xs-offset-18{margin-left:75%}.el-col-xs-pull-18{position:relative;right:75%}.el-col-xs-push-18{left:75%;position:relative}.el-col-xs-19{display:block;flex:0 0 79.1666666667%;max-width:79.1666666667%}.el-col-xs-19.is-guttered{display:block}.el-col-xs-offset-19{margin-left:79.1666666667%}.el-col-xs-pull-19{position:relative;right:79.1666666667%}.el-col-xs-push-19{left:79.1666666667%;position:relative}.el-col-xs-20{display:block;flex:0 0 83.3333333333%;max-width:83.3333333333%}.el-col-xs-20.is-guttered{display:block}.el-col-xs-offset-20{margin-left:83.3333333333%}.el-col-xs-pull-20{position:relative;right:83.3333333333%}.el-col-xs-push-20{left:83.3333333333%;position:relative}.el-col-xs-21{display:block;flex:0 0 87.5%;max-width:87.5%}.el-col-xs-21.is-guttered{display:block}.el-col-xs-offset-21{margin-left:87.5%}.el-col-xs-pull-21{position:relative;right:87.5%}.el-col-xs-push-21{left:87.5%;position:relative}.el-col-xs-22{display:block;flex:0 0 91.6666666667%;max-width:91.6666666667%}.el-col-xs-22.is-guttered{display:block}.el-col-xs-offset-22{margin-left:91.6666666667%}.el-col-xs-pull-22{position:relative;right:91.6666666667%}.el-col-xs-push-22{left:91.6666666667%;position:relative}.el-col-xs-23{display:block;flex:0 0 95.8333333333%;max-width:95.8333333333%}.el-col-xs-23.is-guttered{display:block}.el-col-xs-offset-23{margin-left:95.8333333333%}.el-col-xs-pull-23{position:relative;right:95.8333333333%}.el-col-xs-push-23{left:95.8333333333%;position:relative}.el-col-xs-24{display:block;flex:0 0 100%;max-width:100%}.el-col-xs-24.is-guttered{display:block}.el-col-xs-offset-24{margin-left:100%}.el-col-xs-pull-24{position:relative;right:100%}.el-col-xs-push-24{left:100%;position:relative}}@media only screen and (min-width:768px){.el-col-sm-0{display:none;flex:0 0 0%;max-width:0}.el-col-sm-0.is-guttered{display:none}.el-col-sm-offset-0{margin-left:0}.el-col-sm-pull-0{position:relative;right:0}.el-col-sm-push-0{left:0;position:relative}.el-col-sm-1{flex:0 0 4.1666666667%;max-width:4.1666666667%}.el-col-sm-1,.el-col-sm-1.is-guttered{display:block}.el-col-sm-offset-1{margin-left:4.1666666667%}.el-col-sm-pull-1{position:relative;right:4.1666666667%}.el-col-sm-push-1{left:4.1666666667%;position:relative}.el-col-sm-2{flex:0 0 8.3333333333%;max-width:8.3333333333%}.el-col-sm-2,.el-col-sm-2.is-guttered{display:block}.el-col-sm-offset-2{margin-left:8.3333333333%}.el-col-sm-pull-2{position:relative;right:8.3333333333%}.el-col-sm-push-2{left:8.3333333333%;position:relative}.el-col-sm-3{flex:0 0 12.5%;max-width:12.5%}.el-col-sm-3,.el-col-sm-3.is-guttered{display:block}.el-col-sm-offset-3{margin-left:12.5%}.el-col-sm-pull-3{position:relative;right:12.5%}.el-col-sm-push-3{left:12.5%;position:relative}.el-col-sm-4{flex:0 0 16.6666666667%;max-width:16.6666666667%}.el-col-sm-4,.el-col-sm-4.is-guttered{display:block}.el-col-sm-offset-4{margin-left:16.6666666667%}.el-col-sm-pull-4{position:relative;right:16.6666666667%}.el-col-sm-push-4{left:16.6666666667%;position:relative}.el-col-sm-5{flex:0 0 20.8333333333%;max-width:20.8333333333%}.el-col-sm-5,.el-col-sm-5.is-guttered{display:block}.el-col-sm-offset-5{margin-left:20.8333333333%}.el-col-sm-pull-5{position:relative;right:20.8333333333%}.el-col-sm-push-5{left:20.8333333333%;position:relative}.el-col-sm-6{flex:0 0 25%;max-width:25%}.el-col-sm-6,.el-col-sm-6.is-guttered{display:block}.el-col-sm-offset-6{margin-left:25%}.el-col-sm-pull-6{position:relative;right:25%}.el-col-sm-push-6{left:25%;position:relative}.el-col-sm-7{flex:0 0 29.1666666667%;max-width:29.1666666667%}.el-col-sm-7,.el-col-sm-7.is-guttered{display:block}.el-col-sm-offset-7{margin-left:29.1666666667%}.el-col-sm-pull-7{position:relative;right:29.1666666667%}.el-col-sm-push-7{left:29.1666666667%;position:relative}.el-col-sm-8{flex:0 0 33.3333333333%;max-width:33.3333333333%}.el-col-sm-8,.el-col-sm-8.is-guttered{display:block}.el-col-sm-offset-8{margin-left:33.3333333333%}.el-col-sm-pull-8{position:relative;right:33.3333333333%}.el-col-sm-push-8{left:33.3333333333%;position:relative}.el-col-sm-9{flex:0 0 37.5%;max-width:37.5%}.el-col-sm-9,.el-col-sm-9.is-guttered{display:block}.el-col-sm-offset-9{margin-left:37.5%}.el-col-sm-pull-9{position:relative;right:37.5%}.el-col-sm-push-9{left:37.5%;position:relative}.el-col-sm-10{display:block;flex:0 0 41.6666666667%;max-width:41.6666666667%}.el-col-sm-10.is-guttered{display:block}.el-col-sm-offset-10{margin-left:41.6666666667%}.el-col-sm-pull-10{position:relative;right:41.6666666667%}.el-col-sm-push-10{left:41.6666666667%;position:relative}.el-col-sm-11{display:block;flex:0 0 45.8333333333%;max-width:45.8333333333%}.el-col-sm-11.is-guttered{display:block}.el-col-sm-offset-11{margin-left:45.8333333333%}.el-col-sm-pull-11{position:relative;right:45.8333333333%}.el-col-sm-push-11{left:45.8333333333%;position:relative}.el-col-sm-12{display:block;flex:0 0 50%;max-width:50%}.el-col-sm-12.is-guttered{display:block}.el-col-sm-offset-12{margin-left:50%}.el-col-sm-pull-12{position:relative;right:50%}.el-col-sm-push-12{left:50%;position:relative}.el-col-sm-13{display:block;flex:0 0 54.1666666667%;max-width:54.1666666667%}.el-col-sm-13.is-guttered{display:block}.el-col-sm-offset-13{margin-left:54.1666666667%}.el-col-sm-pull-13{position:relative;right:54.1666666667%}.el-col-sm-push-13{left:54.1666666667%;position:relative}.el-col-sm-14{display:block;flex:0 0 58.3333333333%;max-width:58.3333333333%}.el-col-sm-14.is-guttered{display:block}.el-col-sm-offset-14{margin-left:58.3333333333%}.el-col-sm-pull-14{position:relative;right:58.3333333333%}.el-col-sm-push-14{left:58.3333333333%;position:relative}.el-col-sm-15{display:block;flex:0 0 62.5%;max-width:62.5%}.el-col-sm-15.is-guttered{display:block}.el-col-sm-offset-15{margin-left:62.5%}.el-col-sm-pull-15{position:relative;right:62.5%}.el-col-sm-push-15{left:62.5%;position:relative}.el-col-sm-16{display:block;flex:0 0 66.6666666667%;max-width:66.6666666667%}.el-col-sm-16.is-guttered{display:block}.el-col-sm-offset-16{margin-left:66.6666666667%}.el-col-sm-pull-16{position:relative;right:66.6666666667%}.el-col-sm-push-16{left:66.6666666667%;position:relative}.el-col-sm-17{display:block;flex:0 0 70.8333333333%;max-width:70.8333333333%}.el-col-sm-17.is-guttered{display:block}.el-col-sm-offset-17{margin-left:70.8333333333%}.el-col-sm-pull-17{position:relative;right:70.8333333333%}.el-col-sm-push-17{left:70.8333333333%;position:relative}.el-col-sm-18{display:block;flex:0 0 75%;max-width:75%}.el-col-sm-18.is-guttered{display:block}.el-col-sm-offset-18{margin-left:75%}.el-col-sm-pull-18{position:relative;right:75%}.el-col-sm-push-18{left:75%;position:relative}.el-col-sm-19{display:block;flex:0 0 79.1666666667%;max-width:79.1666666667%}.el-col-sm-19.is-guttered{display:block}.el-col-sm-offset-19{margin-left:79.1666666667%}.el-col-sm-pull-19{position:relative;right:79.1666666667%}.el-col-sm-push-19{left:79.1666666667%;position:relative}.el-col-sm-20{display:block;flex:0 0 83.3333333333%;max-width:83.3333333333%}.el-col-sm-20.is-guttered{display:block}.el-col-sm-offset-20{margin-left:83.3333333333%}.el-col-sm-pull-20{position:relative;right:83.3333333333%}.el-col-sm-push-20{left:83.3333333333%;position:relative}.el-col-sm-21{display:block;flex:0 0 87.5%;max-width:87.5%}.el-col-sm-21.is-guttered{display:block}.el-col-sm-offset-21{margin-left:87.5%}.el-col-sm-pull-21{position:relative;right:87.5%}.el-col-sm-push-21{left:87.5%;position:relative}.el-col-sm-22{display:block;flex:0 0 91.6666666667%;max-width:91.6666666667%}.el-col-sm-22.is-guttered{display:block}.el-col-sm-offset-22{margin-left:91.6666666667%}.el-col-sm-pull-22{position:relative;right:91.6666666667%}.el-col-sm-push-22{left:91.6666666667%;position:relative}.el-col-sm-23{display:block;flex:0 0 95.8333333333%;max-width:95.8333333333%}.el-col-sm-23.is-guttered{display:block}.el-col-sm-offset-23{margin-left:95.8333333333%}.el-col-sm-pull-23{position:relative;right:95.8333333333%}.el-col-sm-push-23{left:95.8333333333%;position:relative}.el-col-sm-24{display:block;flex:0 0 100%;max-width:100%}.el-col-sm-24.is-guttered{display:block}.el-col-sm-offset-24{margin-left:100%}.el-col-sm-pull-24{position:relative;right:100%}.el-col-sm-push-24{left:100%;position:relative}}@media only screen and (min-width:992px){.el-col-md-0{display:none;flex:0 0 0%;max-width:0}.el-col-md-0.is-guttered{display:none}.el-col-md-offset-0{margin-left:0}.el-col-md-pull-0{position:relative;right:0}.el-col-md-push-0{left:0;position:relative}.el-col-md-1{flex:0 0 4.1666666667%;max-width:4.1666666667%}.el-col-md-1,.el-col-md-1.is-guttered{display:block}.el-col-md-offset-1{margin-left:4.1666666667%}.el-col-md-pull-1{position:relative;right:4.1666666667%}.el-col-md-push-1{left:4.1666666667%;position:relative}.el-col-md-2{flex:0 0 8.3333333333%;max-width:8.3333333333%}.el-col-md-2,.el-col-md-2.is-guttered{display:block}.el-col-md-offset-2{margin-left:8.3333333333%}.el-col-md-pull-2{position:relative;right:8.3333333333%}.el-col-md-push-2{left:8.3333333333%;position:relative}.el-col-md-3{flex:0 0 12.5%;max-width:12.5%}.el-col-md-3,.el-col-md-3.is-guttered{display:block}.el-col-md-offset-3{margin-left:12.5%}.el-col-md-pull-3{position:relative;right:12.5%}.el-col-md-push-3{left:12.5%;position:relative}.el-col-md-4{flex:0 0 16.6666666667%;max-width:16.6666666667%}.el-col-md-4,.el-col-md-4.is-guttered{display:block}.el-col-md-offset-4{margin-left:16.6666666667%}.el-col-md-pull-4{position:relative;right:16.6666666667%}.el-col-md-push-4{left:16.6666666667%;position:relative}.el-col-md-5{flex:0 0 20.8333333333%;max-width:20.8333333333%}.el-col-md-5,.el-col-md-5.is-guttered{display:block}.el-col-md-offset-5{margin-left:20.8333333333%}.el-col-md-pull-5{position:relative;right:20.8333333333%}.el-col-md-push-5{left:20.8333333333%;position:relative}.el-col-md-6{flex:0 0 25%;max-width:25%}.el-col-md-6,.el-col-md-6.is-guttered{display:block}.el-col-md-offset-6{margin-left:25%}.el-col-md-pull-6{position:relative;right:25%}.el-col-md-push-6{left:25%;position:relative}.el-col-md-7{flex:0 0 29.1666666667%;max-width:29.1666666667%}.el-col-md-7,.el-col-md-7.is-guttered{display:block}.el-col-md-offset-7{margin-left:29.1666666667%}.el-col-md-pull-7{position:relative;right:29.1666666667%}.el-col-md-push-7{left:29.1666666667%;position:relative}.el-col-md-8{flex:0 0 33.3333333333%;max-width:33.3333333333%}.el-col-md-8,.el-col-md-8.is-guttered{display:block}.el-col-md-offset-8{margin-left:33.3333333333%}.el-col-md-pull-8{position:relative;right:33.3333333333%}.el-col-md-push-8{left:33.3333333333%;position:relative}.el-col-md-9{flex:0 0 37.5%;max-width:37.5%}.el-col-md-9,.el-col-md-9.is-guttered{display:block}.el-col-md-offset-9{margin-left:37.5%}.el-col-md-pull-9{position:relative;right:37.5%}.el-col-md-push-9{left:37.5%;position:relative}.el-col-md-10{display:block;flex:0 0 41.6666666667%;max-width:41.6666666667%}.el-col-md-10.is-guttered{display:block}.el-col-md-offset-10{margin-left:41.6666666667%}.el-col-md-pull-10{position:relative;right:41.6666666667%}.el-col-md-push-10{left:41.6666666667%;position:relative}.el-col-md-11{display:block;flex:0 0 45.8333333333%;max-width:45.8333333333%}.el-col-md-11.is-guttered{display:block}.el-col-md-offset-11{margin-left:45.8333333333%}.el-col-md-pull-11{position:relative;right:45.8333333333%}.el-col-md-push-11{left:45.8333333333%;position:relative}.el-col-md-12{display:block;flex:0 0 50%;max-width:50%}.el-col-md-12.is-guttered{display:block}.el-col-md-offset-12{margin-left:50%}.el-col-md-pull-12{position:relative;right:50%}.el-col-md-push-12{left:50%;position:relative}.el-col-md-13{display:block;flex:0 0 54.1666666667%;max-width:54.1666666667%}.el-col-md-13.is-guttered{display:block}.el-col-md-offset-13{margin-left:54.1666666667%}.el-col-md-pull-13{position:relative;right:54.1666666667%}.el-col-md-push-13{left:54.1666666667%;position:relative}.el-col-md-14{display:block;flex:0 0 58.3333333333%;max-width:58.3333333333%}.el-col-md-14.is-guttered{display:block}.el-col-md-offset-14{margin-left:58.3333333333%}.el-col-md-pull-14{position:relative;right:58.3333333333%}.el-col-md-push-14{left:58.3333333333%;position:relative}.el-col-md-15{display:block;flex:0 0 62.5%;max-width:62.5%}.el-col-md-15.is-guttered{display:block}.el-col-md-offset-15{margin-left:62.5%}.el-col-md-pull-15{position:relative;right:62.5%}.el-col-md-push-15{left:62.5%;position:relative}.el-col-md-16{display:block;flex:0 0 66.6666666667%;max-width:66.6666666667%}.el-col-md-16.is-guttered{display:block}.el-col-md-offset-16{margin-left:66.6666666667%}.el-col-md-pull-16{position:relative;right:66.6666666667%}.el-col-md-push-16{left:66.6666666667%;position:relative}.el-col-md-17{display:block;flex:0 0 70.8333333333%;max-width:70.8333333333%}.el-col-md-17.is-guttered{display:block}.el-col-md-offset-17{margin-left:70.8333333333%}.el-col-md-pull-17{position:relative;right:70.8333333333%}.el-col-md-push-17{left:70.8333333333%;position:relative}.el-col-md-18{display:block;flex:0 0 75%;max-width:75%}.el-col-md-18.is-guttered{display:block}.el-col-md-offset-18{margin-left:75%}.el-col-md-pull-18{position:relative;right:75%}.el-col-md-push-18{left:75%;position:relative}.el-col-md-19{display:block;flex:0 0 79.1666666667%;max-width:79.1666666667%}.el-col-md-19.is-guttered{display:block}.el-col-md-offset-19{margin-left:79.1666666667%}.el-col-md-pull-19{position:relative;right:79.1666666667%}.el-col-md-push-19{left:79.1666666667%;position:relative}.el-col-md-20{display:block;flex:0 0 83.3333333333%;max-width:83.3333333333%}.el-col-md-20.is-guttered{display:block}.el-col-md-offset-20{margin-left:83.3333333333%}.el-col-md-pull-20{position:relative;right:83.3333333333%}.el-col-md-push-20{left:83.3333333333%;position:relative}.el-col-md-21{display:block;flex:0 0 87.5%;max-width:87.5%}.el-col-md-21.is-guttered{display:block}.el-col-md-offset-21{margin-left:87.5%}.el-col-md-pull-21{position:relative;right:87.5%}.el-col-md-push-21{left:87.5%;position:relative}.el-col-md-22{display:block;flex:0 0 91.6666666667%;max-width:91.6666666667%}.el-col-md-22.is-guttered{display:block}.el-col-md-offset-22{margin-left:91.6666666667%}.el-col-md-pull-22{position:relative;right:91.6666666667%}.el-col-md-push-22{left:91.6666666667%;position:relative}.el-col-md-23{display:block;flex:0 0 95.8333333333%;max-width:95.8333333333%}.el-col-md-23.is-guttered{display:block}.el-col-md-offset-23{margin-left:95.8333333333%}.el-col-md-pull-23{position:relative;right:95.8333333333%}.el-col-md-push-23{left:95.8333333333%;position:relative}.el-col-md-24{display:block;flex:0 0 100%;max-width:100%}.el-col-md-24.is-guttered{display:block}.el-col-md-offset-24{margin-left:100%}.el-col-md-pull-24{position:relative;right:100%}.el-col-md-push-24{left:100%;position:relative}}@media only screen and (min-width:1200px){.el-col-lg-0{display:none;flex:0 0 0%;max-width:0}.el-col-lg-0.is-guttered{display:none}.el-col-lg-offset-0{margin-left:0}.el-col-lg-pull-0{position:relative;right:0}.el-col-lg-push-0{left:0;position:relative}.el-col-lg-1{flex:0 0 4.1666666667%;max-width:4.1666666667%}.el-col-lg-1,.el-col-lg-1.is-guttered{display:block}.el-col-lg-offset-1{margin-left:4.1666666667%}.el-col-lg-pull-1{position:relative;right:4.1666666667%}.el-col-lg-push-1{left:4.1666666667%;position:relative}.el-col-lg-2{flex:0 0 8.3333333333%;max-width:8.3333333333%}.el-col-lg-2,.el-col-lg-2.is-guttered{display:block}.el-col-lg-offset-2{margin-left:8.3333333333%}.el-col-lg-pull-2{position:relative;right:8.3333333333%}.el-col-lg-push-2{left:8.3333333333%;position:relative}.el-col-lg-3{flex:0 0 12.5%;max-width:12.5%}.el-col-lg-3,.el-col-lg-3.is-guttered{display:block}.el-col-lg-offset-3{margin-left:12.5%}.el-col-lg-pull-3{position:relative;right:12.5%}.el-col-lg-push-3{left:12.5%;position:relative}.el-col-lg-4{flex:0 0 16.6666666667%;max-width:16.6666666667%}.el-col-lg-4,.el-col-lg-4.is-guttered{display:block}.el-col-lg-offset-4{margin-left:16.6666666667%}.el-col-lg-pull-4{position:relative;right:16.6666666667%}.el-col-lg-push-4{left:16.6666666667%;position:relative}.el-col-lg-5{flex:0 0 20.8333333333%;max-width:20.8333333333%}.el-col-lg-5,.el-col-lg-5.is-guttered{display:block}.el-col-lg-offset-5{margin-left:20.8333333333%}.el-col-lg-pull-5{position:relative;right:20.8333333333%}.el-col-lg-push-5{left:20.8333333333%;position:relative}.el-col-lg-6{flex:0 0 25%;max-width:25%}.el-col-lg-6,.el-col-lg-6.is-guttered{display:block}.el-col-lg-offset-6{margin-left:25%}.el-col-lg-pull-6{position:relative;right:25%}.el-col-lg-push-6{left:25%;position:relative}.el-col-lg-7{flex:0 0 29.1666666667%;max-width:29.1666666667%}.el-col-lg-7,.el-col-lg-7.is-guttered{display:block}.el-col-lg-offset-7{margin-left:29.1666666667%}.el-col-lg-pull-7{position:relative;right:29.1666666667%}.el-col-lg-push-7{left:29.1666666667%;position:relative}.el-col-lg-8{flex:0 0 33.3333333333%;max-width:33.3333333333%}.el-col-lg-8,.el-col-lg-8.is-guttered{display:block}.el-col-lg-offset-8{margin-left:33.3333333333%}.el-col-lg-pull-8{position:relative;right:33.3333333333%}.el-col-lg-push-8{left:33.3333333333%;position:relative}.el-col-lg-9{flex:0 0 37.5%;max-width:37.5%}.el-col-lg-9,.el-col-lg-9.is-guttered{display:block}.el-col-lg-offset-9{margin-left:37.5%}.el-col-lg-pull-9{position:relative;right:37.5%}.el-col-lg-push-9{left:37.5%;position:relative}.el-col-lg-10{display:block;flex:0 0 41.6666666667%;max-width:41.6666666667%}.el-col-lg-10.is-guttered{display:block}.el-col-lg-offset-10{margin-left:41.6666666667%}.el-col-lg-pull-10{position:relative;right:41.6666666667%}.el-col-lg-push-10{left:41.6666666667%;position:relative}.el-col-lg-11{display:block;flex:0 0 45.8333333333%;max-width:45.8333333333%}.el-col-lg-11.is-guttered{display:block}.el-col-lg-offset-11{margin-left:45.8333333333%}.el-col-lg-pull-11{position:relative;right:45.8333333333%}.el-col-lg-push-11{left:45.8333333333%;position:relative}.el-col-lg-12{display:block;flex:0 0 50%;max-width:50%}.el-col-lg-12.is-guttered{display:block}.el-col-lg-offset-12{margin-left:50%}.el-col-lg-pull-12{position:relative;right:50%}.el-col-lg-push-12{left:50%;position:relative}.el-col-lg-13{display:block;flex:0 0 54.1666666667%;max-width:54.1666666667%}.el-col-lg-13.is-guttered{display:block}.el-col-lg-offset-13{margin-left:54.1666666667%}.el-col-lg-pull-13{position:relative;right:54.1666666667%}.el-col-lg-push-13{left:54.1666666667%;position:relative}.el-col-lg-14{display:block;flex:0 0 58.3333333333%;max-width:58.3333333333%}.el-col-lg-14.is-guttered{display:block}.el-col-lg-offset-14{margin-left:58.3333333333%}.el-col-lg-pull-14{position:relative;right:58.3333333333%}.el-col-lg-push-14{left:58.3333333333%;position:relative}.el-col-lg-15{display:block;flex:0 0 62.5%;max-width:62.5%}.el-col-lg-15.is-guttered{display:block}.el-col-lg-offset-15{margin-left:62.5%}.el-col-lg-pull-15{position:relative;right:62.5%}.el-col-lg-push-15{left:62.5%;position:relative}.el-col-lg-16{display:block;flex:0 0 66.6666666667%;max-width:66.6666666667%}.el-col-lg-16.is-guttered{display:block}.el-col-lg-offset-16{margin-left:66.6666666667%}.el-col-lg-pull-16{position:relative;right:66.6666666667%}.el-col-lg-push-16{left:66.6666666667%;position:relative}.el-col-lg-17{display:block;flex:0 0 70.8333333333%;max-width:70.8333333333%}.el-col-lg-17.is-guttered{display:block}.el-col-lg-offset-17{margin-left:70.8333333333%}.el-col-lg-pull-17{position:relative;right:70.8333333333%}.el-col-lg-push-17{left:70.8333333333%;position:relative}.el-col-lg-18{display:block;flex:0 0 75%;max-width:75%}.el-col-lg-18.is-guttered{display:block}.el-col-lg-offset-18{margin-left:75%}.el-col-lg-pull-18{position:relative;right:75%}.el-col-lg-push-18{left:75%;position:relative}.el-col-lg-19{display:block;flex:0 0 79.1666666667%;max-width:79.1666666667%}.el-col-lg-19.is-guttered{display:block}.el-col-lg-offset-19{margin-left:79.1666666667%}.el-col-lg-pull-19{position:relative;right:79.1666666667%}.el-col-lg-push-19{left:79.1666666667%;position:relative}.el-col-lg-20{display:block;flex:0 0 83.3333333333%;max-width:83.3333333333%}.el-col-lg-20.is-guttered{display:block}.el-col-lg-offset-20{margin-left:83.3333333333%}.el-col-lg-pull-20{position:relative;right:83.3333333333%}.el-col-lg-push-20{left:83.3333333333%;position:relative}.el-col-lg-21{display:block;flex:0 0 87.5%;max-width:87.5%}.el-col-lg-21.is-guttered{display:block}.el-col-lg-offset-21{margin-left:87.5%}.el-col-lg-pull-21{position:relative;right:87.5%}.el-col-lg-push-21{left:87.5%;position:relative}.el-col-lg-22{display:block;flex:0 0 91.6666666667%;max-width:91.6666666667%}.el-col-lg-22.is-guttered{display:block}.el-col-lg-offset-22{margin-left:91.6666666667%}.el-col-lg-pull-22{position:relative;right:91.6666666667%}.el-col-lg-push-22{left:91.6666666667%;position:relative}.el-col-lg-23{display:block;flex:0 0 95.8333333333%;max-width:95.8333333333%}.el-col-lg-23.is-guttered{display:block}.el-col-lg-offset-23{margin-left:95.8333333333%}.el-col-lg-pull-23{position:relative;right:95.8333333333%}.el-col-lg-push-23{left:95.8333333333%;position:relative}.el-col-lg-24{display:block;flex:0 0 100%;max-width:100%}.el-col-lg-24.is-guttered{display:block}.el-col-lg-offset-24{margin-left:100%}.el-col-lg-pull-24{position:relative;right:100%}.el-col-lg-push-24{left:100%;position:relative}}@media only screen and (min-width:1920px){.el-col-xl-0{display:none;flex:0 0 0%;max-width:0}.el-col-xl-0.is-guttered{display:none}.el-col-xl-offset-0{margin-left:0}.el-col-xl-pull-0{position:relative;right:0}.el-col-xl-push-0{left:0;position:relative}.el-col-xl-1{flex:0 0 4.1666666667%;max-width:4.1666666667%}.el-col-xl-1,.el-col-xl-1.is-guttered{display:block}.el-col-xl-offset-1{margin-left:4.1666666667%}.el-col-xl-pull-1{position:relative;right:4.1666666667%}.el-col-xl-push-1{left:4.1666666667%;position:relative}.el-col-xl-2{flex:0 0 8.3333333333%;max-width:8.3333333333%}.el-col-xl-2,.el-col-xl-2.is-guttered{display:block}.el-col-xl-offset-2{margin-left:8.3333333333%}.el-col-xl-pull-2{position:relative;right:8.3333333333%}.el-col-xl-push-2{left:8.3333333333%;position:relative}.el-col-xl-3{flex:0 0 12.5%;max-width:12.5%}.el-col-xl-3,.el-col-xl-3.is-guttered{display:block}.el-col-xl-offset-3{margin-left:12.5%}.el-col-xl-pull-3{position:relative;right:12.5%}.el-col-xl-push-3{left:12.5%;position:relative}.el-col-xl-4{flex:0 0 16.6666666667%;max-width:16.6666666667%}.el-col-xl-4,.el-col-xl-4.is-guttered{display:block}.el-col-xl-offset-4{margin-left:16.6666666667%}.el-col-xl-pull-4{position:relative;right:16.6666666667%}.el-col-xl-push-4{left:16.6666666667%;position:relative}.el-col-xl-5{flex:0 0 20.8333333333%;max-width:20.8333333333%}.el-col-xl-5,.el-col-xl-5.is-guttered{display:block}.el-col-xl-offset-5{margin-left:20.8333333333%}.el-col-xl-pull-5{position:relative;right:20.8333333333%}.el-col-xl-push-5{left:20.8333333333%;position:relative}.el-col-xl-6{flex:0 0 25%;max-width:25%}.el-col-xl-6,.el-col-xl-6.is-guttered{display:block}.el-col-xl-offset-6{margin-left:25%}.el-col-xl-pull-6{position:relative;right:25%}.el-col-xl-push-6{left:25%;position:relative}.el-col-xl-7{flex:0 0 29.1666666667%;max-width:29.1666666667%}.el-col-xl-7,.el-col-xl-7.is-guttered{display:block}.el-col-xl-offset-7{margin-left:29.1666666667%}.el-col-xl-pull-7{position:relative;right:29.1666666667%}.el-col-xl-push-7{left:29.1666666667%;position:relative}.el-col-xl-8{flex:0 0 33.3333333333%;max-width:33.3333333333%}.el-col-xl-8,.el-col-xl-8.is-guttered{display:block}.el-col-xl-offset-8{margin-left:33.3333333333%}.el-col-xl-pull-8{position:relative;right:33.3333333333%}.el-col-xl-push-8{left:33.3333333333%;position:relative}.el-col-xl-9{flex:0 0 37.5%;max-width:37.5%}.el-col-xl-9,.el-col-xl-9.is-guttered{display:block}.el-col-xl-offset-9{margin-left:37.5%}.el-col-xl-pull-9{position:relative;right:37.5%}.el-col-xl-push-9{left:37.5%;position:relative}.el-col-xl-10{display:block;flex:0 0 41.6666666667%;max-width:41.6666666667%}.el-col-xl-10.is-guttered{display:block}.el-col-xl-offset-10{margin-left:41.6666666667%}.el-col-xl-pull-10{position:relative;right:41.6666666667%}.el-col-xl-push-10{left:41.6666666667%;position:relative}.el-col-xl-11{display:block;flex:0 0 45.8333333333%;max-width:45.8333333333%}.el-col-xl-11.is-guttered{display:block}.el-col-xl-offset-11{margin-left:45.8333333333%}.el-col-xl-pull-11{position:relative;right:45.8333333333%}.el-col-xl-push-11{left:45.8333333333%;position:relative}.el-col-xl-12{display:block;flex:0 0 50%;max-width:50%}.el-col-xl-12.is-guttered{display:block}.el-col-xl-offset-12{margin-left:50%}.el-col-xl-pull-12{position:relative;right:50%}.el-col-xl-push-12{left:50%;position:relative}.el-col-xl-13{display:block;flex:0 0 54.1666666667%;max-width:54.1666666667%}.el-col-xl-13.is-guttered{display:block}.el-col-xl-offset-13{margin-left:54.1666666667%}.el-col-xl-pull-13{position:relative;right:54.1666666667%}.el-col-xl-push-13{left:54.1666666667%;position:relative}.el-col-xl-14{display:block;flex:0 0 58.3333333333%;max-width:58.3333333333%}.el-col-xl-14.is-guttered{display:block}.el-col-xl-offset-14{margin-left:58.3333333333%}.el-col-xl-pull-14{position:relative;right:58.3333333333%}.el-col-xl-push-14{left:58.3333333333%;position:relative}.el-col-xl-15{display:block;flex:0 0 62.5%;max-width:62.5%}.el-col-xl-15.is-guttered{display:block}.el-col-xl-offset-15{margin-left:62.5%}.el-col-xl-pull-15{position:relative;right:62.5%}.el-col-xl-push-15{left:62.5%;position:relative}.el-col-xl-16{display:block;flex:0 0 66.6666666667%;max-width:66.6666666667%}.el-col-xl-16.is-guttered{display:block}.el-col-xl-offset-16{margin-left:66.6666666667%}.el-col-xl-pull-16{position:relative;right:66.6666666667%}.el-col-xl-push-16{left:66.6666666667%;position:relative}.el-col-xl-17{display:block;flex:0 0 70.8333333333%;max-width:70.8333333333%}.el-col-xl-17.is-guttered{display:block}.el-col-xl-offset-17{margin-left:70.8333333333%}.el-col-xl-pull-17{position:relative;right:70.8333333333%}.el-col-xl-push-17{left:70.8333333333%;position:relative}.el-col-xl-18{display:block;flex:0 0 75%;max-width:75%}.el-col-xl-18.is-guttered{display:block}.el-col-xl-offset-18{margin-left:75%}.el-col-xl-pull-18{position:relative;right:75%}.el-col-xl-push-18{left:75%;position:relative}.el-col-xl-19{display:block;flex:0 0 79.1666666667%;max-width:79.1666666667%}.el-col-xl-19.is-guttered{display:block}.el-col-xl-offset-19{margin-left:79.1666666667%}.el-col-xl-pull-19{position:relative;right:79.1666666667%}.el-col-xl-push-19{left:79.1666666667%;position:relative}.el-col-xl-20{display:block;flex:0 0 83.3333333333%;max-width:83.3333333333%}.el-col-xl-20.is-guttered{display:block}.el-col-xl-offset-20{margin-left:83.3333333333%}.el-col-xl-pull-20{position:relative;right:83.3333333333%}.el-col-xl-push-20{left:83.3333333333%;position:relative}.el-col-xl-21{display:block;flex:0 0 87.5%;max-width:87.5%}.el-col-xl-21.is-guttered{display:block}.el-col-xl-offset-21{margin-left:87.5%}.el-col-xl-pull-21{position:relative;right:87.5%}.el-col-xl-push-21{left:87.5%;position:relative}.el-col-xl-22{display:block;flex:0 0 91.6666666667%;max-width:91.6666666667%}.el-col-xl-22.is-guttered{display:block}.el-col-xl-offset-22{margin-left:91.6666666667%}.el-col-xl-pull-22{position:relative;right:91.6666666667%}.el-col-xl-push-22{left:91.6666666667%;position:relative}.el-col-xl-23{display:block;flex:0 0 95.8333333333%;max-width:95.8333333333%}.el-col-xl-23.is-guttered{display:block}.el-col-xl-offset-23{margin-left:95.8333333333%}.el-col-xl-pull-23{position:relative;right:95.8333333333%}.el-col-xl-push-23{left:95.8333333333%;position:relative}.el-col-xl-24{display:block;flex:0 0 100%;max-width:100%}.el-col-xl-24.is-guttered{display:block}.el-col-xl-offset-24{margin-left:100%}.el-col-xl-pull-24{position:relative;right:100%}.el-col-xl-push-24{left:100%;position:relative}}.el-button{--el-button-font-weight:var(--el-font-weight-primary);--el-button-border-color:var(--el-border-color);--el-button-bg-color:var(--el-fill-color-blank);--el-button-text-color:var(--el-text-color-regular);--el-button-disabled-text-color:var(--el-disabled-text-color);--el-button-disabled-bg-color:var(--el-fill-color-blank);--el-button-disabled-border-color:var(--el-border-color-light);--el-button-divide-border-color:rgba(255,255,255,.5);--el-button-hover-text-color:var(--el-color-primary);--el-button-hover-bg-color:var(--el-color-primary-light-9);--el-button-hover-border-color:var(--el-color-primary-light-7);--el-button-active-text-color:var(--el-button-hover-text-color);--el-button-active-border-color:var(--el-color-primary);--el-button-active-bg-color:var(--el-button-hover-bg-color);--el-button-outline-color:var(--el-color-primary-light-5);--el-button-hover-link-text-color:var(--el-color-info);--el-button-active-color:var(--el-text-color-primary);align-items:center;-webkit-appearance:none;background-color:var(--el-button-bg-color);border:var(--el-border);border-color:var(--el-button-border-color);border-radius:var(--el-border-radius-base);box-sizing:border-box;color:var(--el-button-text-color);cursor:pointer;display:inline-flex;font-size:var(--el-font-size-base);font-weight:var(--el-button-font-weight);height:32px;justify-content:center;line-height:1;outline:none;padding:8px 15px;text-align:center;transition:.1s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.el-button:hover{background-color:var(--el-button-hover-bg-color);border-color:var(--el-button-hover-border-color);color:var(--el-button-hover-text-color);outline:none}.el-button:active{background-color:var(--el-button-active-bg-color);border-color:var(--el-button-active-border-color);color:var(--el-button-active-text-color);outline:none}.el-button:focus-visible{outline:2px solid var(--el-button-outline-color);outline-offset:1px;transition:outline-offset 0s,outline 0s}.el-button>span{align-items:center;display:inline-flex}.el-button+.el-button{margin-left:12px}.el-button.is-round{padding:8px 15px}.el-button::-moz-focus-inner{border:0}.el-button [class*=el-icon]+span{margin-left:6px}.el-button [class*=el-icon] svg{vertical-align:bottom}.el-button.is-plain{--el-button-hover-text-color:var(--el-color-primary);--el-button-hover-bg-color:var(--el-fill-color-blank);--el-button-hover-border-color:var(--el-color-primary)}.el-button.is-active{background-color:var(--el-button-active-bg-color);border-color:var(--el-button-active-border-color);color:var(--el-button-active-text-color);outline:none}.el-button.is-disabled,.el-button.is-disabled:hover{background-color:var(--el-button-disabled-bg-color);background-image:none;border-color:var(--el-button-disabled-border-color);color:var(--el-button-disabled-text-color);cursor:not-allowed}.el-button.is-loading{pointer-events:none;position:relative}.el-button.is-loading:before{background-color:var(--el-mask-color-extra-light);border-radius:inherit;bottom:-1px;content:"";left:-1px;pointer-events:none;position:absolute;right:-1px;top:-1px;z-index:1}.el-button.is-round{border-radius:var(--el-border-radius-round)}.el-button.is-circle{border-radius:50%;padding:8px;width:32px}.el-button.is-text{background-color:transparent;border:0 solid transparent;color:var(--el-button-text-color)}.el-button.is-text.is-disabled{background-color:transparent!important;color:var(--el-button-disabled-text-color)}.el-button.is-text:not(.is-disabled):hover{background-color:var(--el-fill-color-light)}.el-button.is-text:not(.is-disabled):focus-visible{outline:2px solid var(--el-button-outline-color);outline-offset:1px;transition:outline-offset 0s,outline 0s}.el-button.is-text:not(.is-disabled):active{background-color:var(--el-fill-color)}.el-button.is-text:not(.is-disabled).is-has-bg{background-color:var(--el-fill-color-light)}.el-button.is-text:not(.is-disabled).is-has-bg:hover{background-color:var(--el-fill-color)}.el-button.is-text:not(.is-disabled).is-has-bg:active{background-color:var(--el-fill-color-dark)}.el-button__text--expand{letter-spacing:.3em;margin-right:-.3em}.el-button.is-link{background:transparent;border-color:transparent;color:var(--el-button-text-color);height:auto;padding:2px}.el-button.is-link:hover{color:var(--el-button-hover-link-text-color)}.el-button.is-link.is-disabled{background-color:transparent!important;border-color:transparent!important;color:var(--el-button-disabled-text-color)}.el-button.is-link:not(.is-disabled):hover{background-color:transparent;border-color:transparent}.el-button.is-link:not(.is-disabled):active{background-color:transparent;border-color:transparent;color:var(--el-button-active-color)}.el-button--text{background:transparent;border-color:transparent;color:var(--el-color-primary);padding-left:0;padding-right:0}.el-button--text.is-disabled{background-color:transparent!important;border-color:transparent!important;color:var(--el-button-disabled-text-color)}.el-button--text:not(.is-disabled):hover{background-color:transparent;border-color:transparent;color:var(--el-color-primary-light-3)}.el-button--text:not(.is-disabled):active{background-color:transparent;border-color:transparent;color:var(--el-color-primary-dark-2)}.el-button__link--expand{letter-spacing:.3em;margin-right:-.3em}.el-button--primary{--el-button-text-color:var(--el-color-white);--el-button-bg-color:var(--el-color-primary);--el-button-border-color:var(--el-color-primary);--el-button-outline-color:var(--el-color-primary-light-5);--el-button-active-color:var(--el-color-primary-dark-2);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-link-text-color:var(--el-color-primary-light-5);--el-button-hover-bg-color:var(--el-color-primary-light-3);--el-button-hover-border-color:var(--el-color-primary-light-3);--el-button-active-bg-color:var(--el-color-primary-dark-2);--el-button-active-border-color:var(--el-color-primary-dark-2);--el-button-disabled-text-color:var(--el-color-white);--el-button-disabled-bg-color:var(--el-color-primary-light-5);--el-button-disabled-border-color:var(--el-color-primary-light-5)}.el-button--primary.is-link,.el-button--primary.is-plain,.el-button--primary.is-text{--el-button-text-color:var(--el-color-primary);--el-button-bg-color:var(--el-color-primary-light-9);--el-button-border-color:var(--el-color-primary-light-5);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-bg-color:var(--el-color-primary);--el-button-hover-border-color:var(--el-color-primary);--el-button-active-text-color:var(--el-color-white)}.el-button--primary.is-link.is-disabled,.el-button--primary.is-link.is-disabled:active,.el-button--primary.is-link.is-disabled:focus,.el-button--primary.is-link.is-disabled:hover,.el-button--primary.is-plain.is-disabled,.el-button--primary.is-plain.is-disabled:active,.el-button--primary.is-plain.is-disabled:focus,.el-button--primary.is-plain.is-disabled:hover,.el-button--primary.is-text.is-disabled,.el-button--primary.is-text.is-disabled:active,.el-button--primary.is-text.is-disabled:focus,.el-button--primary.is-text.is-disabled:hover{background-color:var(--el-color-primary-light-9);border-color:var(--el-color-primary-light-8);color:var(--el-color-primary-light-5)}.el-button--success{--el-button-text-color:var(--el-color-white);--el-button-bg-color:var(--el-color-success);--el-button-border-color:var(--el-color-success);--el-button-outline-color:var(--el-color-success-light-5);--el-button-active-color:var(--el-color-success-dark-2);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-link-text-color:var(--el-color-success-light-5);--el-button-hover-bg-color:var(--el-color-success-light-3);--el-button-hover-border-color:var(--el-color-success-light-3);--el-button-active-bg-color:var(--el-color-success-dark-2);--el-button-active-border-color:var(--el-color-success-dark-2);--el-button-disabled-text-color:var(--el-color-white);--el-button-disabled-bg-color:var(--el-color-success-light-5);--el-button-disabled-border-color:var(--el-color-success-light-5)}.el-button--success.is-link,.el-button--success.is-plain,.el-button--success.is-text{--el-button-text-color:var(--el-color-success);--el-button-bg-color:var(--el-color-success-light-9);--el-button-border-color:var(--el-color-success-light-5);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-bg-color:var(--el-color-success);--el-button-hover-border-color:var(--el-color-success);--el-button-active-text-color:var(--el-color-white)}.el-button--success.is-link.is-disabled,.el-button--success.is-link.is-disabled:active,.el-button--success.is-link.is-disabled:focus,.el-button--success.is-link.is-disabled:hover,.el-button--success.is-plain.is-disabled,.el-button--success.is-plain.is-disabled:active,.el-button--success.is-plain.is-disabled:focus,.el-button--success.is-plain.is-disabled:hover,.el-button--success.is-text.is-disabled,.el-button--success.is-text.is-disabled:active,.el-button--success.is-text.is-disabled:focus,.el-button--success.is-text.is-disabled:hover{background-color:var(--el-color-success-light-9);border-color:var(--el-color-success-light-8);color:var(--el-color-success-light-5)}.el-button--warning{--el-button-text-color:var(--el-color-white);--el-button-bg-color:var(--el-color-warning);--el-button-border-color:var(--el-color-warning);--el-button-outline-color:var(--el-color-warning-light-5);--el-button-active-color:var(--el-color-warning-dark-2);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-link-text-color:var(--el-color-warning-light-5);--el-button-hover-bg-color:var(--el-color-warning-light-3);--el-button-hover-border-color:var(--el-color-warning-light-3);--el-button-active-bg-color:var(--el-color-warning-dark-2);--el-button-active-border-color:var(--el-color-warning-dark-2);--el-button-disabled-text-color:var(--el-color-white);--el-button-disabled-bg-color:var(--el-color-warning-light-5);--el-button-disabled-border-color:var(--el-color-warning-light-5)}.el-button--warning.is-link,.el-button--warning.is-plain,.el-button--warning.is-text{--el-button-text-color:var(--el-color-warning);--el-button-bg-color:var(--el-color-warning-light-9);--el-button-border-color:var(--el-color-warning-light-5);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-bg-color:var(--el-color-warning);--el-button-hover-border-color:var(--el-color-warning);--el-button-active-text-color:var(--el-color-white)}.el-button--warning.is-link.is-disabled,.el-button--warning.is-link.is-disabled:active,.el-button--warning.is-link.is-disabled:focus,.el-button--warning.is-link.is-disabled:hover,.el-button--warning.is-plain.is-disabled,.el-button--warning.is-plain.is-disabled:active,.el-button--warning.is-plain.is-disabled:focus,.el-button--warning.is-plain.is-disabled:hover,.el-button--warning.is-text.is-disabled,.el-button--warning.is-text.is-disabled:active,.el-button--warning.is-text.is-disabled:focus,.el-button--warning.is-text.is-disabled:hover{background-color:var(--el-color-warning-light-9);border-color:var(--el-color-warning-light-8);color:var(--el-color-warning-light-5)}.el-button--danger{--el-button-text-color:var(--el-color-white);--el-button-bg-color:var(--el-color-danger);--el-button-border-color:var(--el-color-danger);--el-button-outline-color:var(--el-color-danger-light-5);--el-button-active-color:var(--el-color-danger-dark-2);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-link-text-color:var(--el-color-danger-light-5);--el-button-hover-bg-color:var(--el-color-danger-light-3);--el-button-hover-border-color:var(--el-color-danger-light-3);--el-button-active-bg-color:var(--el-color-danger-dark-2);--el-button-active-border-color:var(--el-color-danger-dark-2);--el-button-disabled-text-color:var(--el-color-white);--el-button-disabled-bg-color:var(--el-color-danger-light-5);--el-button-disabled-border-color:var(--el-color-danger-light-5)}.el-button--danger.is-link,.el-button--danger.is-plain,.el-button--danger.is-text{--el-button-text-color:var(--el-color-danger);--el-button-bg-color:var(--el-color-danger-light-9);--el-button-border-color:var(--el-color-danger-light-5);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-bg-color:var(--el-color-danger);--el-button-hover-border-color:var(--el-color-danger);--el-button-active-text-color:var(--el-color-white)}.el-button--danger.is-link.is-disabled,.el-button--danger.is-link.is-disabled:active,.el-button--danger.is-link.is-disabled:focus,.el-button--danger.is-link.is-disabled:hover,.el-button--danger.is-plain.is-disabled,.el-button--danger.is-plain.is-disabled:active,.el-button--danger.is-plain.is-disabled:focus,.el-button--danger.is-plain.is-disabled:hover,.el-button--danger.is-text.is-disabled,.el-button--danger.is-text.is-disabled:active,.el-button--danger.is-text.is-disabled:focus,.el-button--danger.is-text.is-disabled:hover{background-color:var(--el-color-danger-light-9);border-color:var(--el-color-danger-light-8);color:var(--el-color-danger-light-5)}.el-button--info{--el-button-text-color:var(--el-color-white);--el-button-bg-color:var(--el-color-info);--el-button-border-color:var(--el-color-info);--el-button-outline-color:var(--el-color-info-light-5);--el-button-active-color:var(--el-color-info-dark-2);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-link-text-color:var(--el-color-info-light-5);--el-button-hover-bg-color:var(--el-color-info-light-3);--el-button-hover-border-color:var(--el-color-info-light-3);--el-button-active-bg-color:var(--el-color-info-dark-2);--el-button-active-border-color:var(--el-color-info-dark-2);--el-button-disabled-text-color:var(--el-color-white);--el-button-disabled-bg-color:var(--el-color-info-light-5);--el-button-disabled-border-color:var(--el-color-info-light-5)}.el-button--info.is-link,.el-button--info.is-plain,.el-button--info.is-text{--el-button-text-color:var(--el-color-info);--el-button-bg-color:var(--el-color-info-light-9);--el-button-border-color:var(--el-color-info-light-5);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-bg-color:var(--el-color-info);--el-button-hover-border-color:var(--el-color-info);--el-button-active-text-color:var(--el-color-white)}.el-button--info.is-link.is-disabled,.el-button--info.is-link.is-disabled:active,.el-button--info.is-link.is-disabled:focus,.el-button--info.is-link.is-disabled:hover,.el-button--info.is-plain.is-disabled,.el-button--info.is-plain.is-disabled:active,.el-button--info.is-plain.is-disabled:focus,.el-button--info.is-plain.is-disabled:hover,.el-button--info.is-text.is-disabled,.el-button--info.is-text.is-disabled:active,.el-button--info.is-text.is-disabled:focus,.el-button--info.is-text.is-disabled:hover{background-color:var(--el-color-info-light-9);border-color:var(--el-color-info-light-8);color:var(--el-color-info-light-5)}.el-button--large{--el-button-size:40px;border-radius:var(--el-border-radius-base);font-size:var(--el-font-size-base);height:var(--el-button-size);padding:12px 19px}.el-button--large [class*=el-icon]+span{margin-left:8px}.el-button--large.is-round{padding:12px 19px}.el-button--large.is-circle{padding:12px;width:var(--el-button-size)}.el-button--small{--el-button-size:24px;border-radius:calc(var(--el-border-radius-base) - 1px);font-size:12px;height:var(--el-button-size);padding:5px 11px}.el-button--small [class*=el-icon]+span{margin-left:4px}.el-button--small.is-round{padding:5px 11px}.el-button--small.is-circle{padding:5px;width:var(--el-button-size)}.tiptap p.is-editor-empty:first-child:before{content:attr(data-placeholder);float:left;color:#adb5bd;pointer-events:none;height:0}#reply-editor .tiptap{width:100%;height:100%;outline:0!important;font-size:.16rem}.tiptap-input-image{width:.18rem;height:.18rem}#reply-editor[data-v-348dbf1b]{overflow:auto;background-color:#e5e5e5;padding:.06rem;height:100%;border-radius:5px}.icon-active[data-v-81bfdcdf]{fill:#7557ff}#full-toolbar[data-v-81bfdcdf]{position:fixed;bottom:0;width:100%;background:#fff;display:flex;align-items:center;z-index:100099;flex-flow:column}#full-toolbar[data-v-81bfdcdf] .full-toolbar-top-reply-user[data-v-81bfdcdf]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#adb5bd;width:-webkit-fill-available;width:-moz-available;padding-left:.2rem;padding-top:.06rem}#full-toolbar[data-v-81bfdcdf] .full-toolbar-top-container[data-v-81bfdcdf]{display:flex;align-items:end;width:-moz-available;width:-webkit-fill-available;padding:.06rem .1rem;height:.6rem}#full-toolbar[data-v-81bfdcdf] .full-toolbar-top-container[data-v-81bfdcdf] .full-toolbar-top-left-container[data-v-81bfdcdf]{display:flex;flex-direction:column;flex:1;overflow:hidden;margin:0px .1rem;height:100%}#full-toolbar[data-v-81bfdcdf] .full-toolbar-top-container[data-v-81bfdcdf] .full-toolbar-top-right-container[data-v-81bfdcdf]{flex:0 auto;display:flex;flex-direction:column;align-items:center;justify-content:space-between;height:100%}#full-toolbar[data-v-81bfdcdf] .full-toolbar-bottom-container[data-v-81bfdcdf]{margin:.06rem 0;padding:0px 0px .06rem;margin-right:auto}#full-toolbar[data-v-81bfdcdf] .full-toolbar-bottom-container[data-v-81bfdcdf] .full-toolbar-emoji-btn[data-v-81bfdcdf],#full-toolbar[data-v-81bfdcdf] .full-toolbar-bottom-container[data-v-81bfdcdf] .full-toolbar-panel-at-btn[data-v-81bfdcdf]{margin:0 20px;display:flex;flex-direction:column;align-items:center}#full-toolbar[data-v-81bfdcdf] .emoji-panel[data-v-81bfdcdf]{width:100%;height:30dvh;background-color:#efefef;overflow:auto}.emoji-panel-huaji[data-v-81bfdcdf]{padding:.03rem;overflow-y:auto}.emoji-panel-huaji[data-v-81bfdcdf] .el-avatar[data-v-81bfdcdf]{margin:16px}#full-toolbar[data-v-81bfdcdf]:has(.full-toolbar-top-container[data-full=true]){height:-moz-available;height:100%;height:-webkit-fill-available}#full-toolbar[data-v-81bfdcdf]:has(.full-toolbar-top-container[data-full=true]) .full-toolbar-top-container[data-v-81bfdcdf],#full-toolbar[data-v-81bfdcdf]:has(.full-toolbar-top-container[data-full=true]) #reply-editor[data-v-81bfdcdf]{height:-moz-available;height:100%;height:-webkit-fill-available}#full-toolbar[data-v-81bfdcdf]:has(.full-toolbar-top-container[data-full=true]) .full-toolbar-top-reply-user[data-v-81bfdcdf],#full-toolbar[data-v-81bfdcdf]:has(.full-toolbar-top-container[data-full=true]) .full-toolbar-top-right-container[data-v-81bfdcdf]{display:none}#full-toolbar[data-v-81bfdcdf]:has(.full-toolbar-top-container[data-full=true]) .full-toolbar-top-container[data-v-81bfdcdf]{flex-direction:column}#full-toolbar[data-v-81bfdcdf]:has(.full-toolbar-top-container[data-full=true]) .full-toolbar-top-left-container[data-v-81bfdcdf]{width:-webkit-fill-available;width:-moz-available}.full-toolbar-top-nav-container[data-v-81bfdcdf]{display:flex;width:-webkit-fill-available;width:-moz-available;align-items:center;justify-content:space-between;padding:.16rem}#full-toolbar .full-toolbar-top-container{max-height:calc(100dvh - .12rem - 40px)}#full-toolbar[data-show-bottom-panel=true] .full-toolbar-top-container{max-height:calc(70dvh - .12rem - 40px)}.el-container{box-sizing:border-box;display:flex;flex:1;flex-basis:auto;flex-direction:row;min-width:0}.el-container.is-vertical{flex-direction:column}.el-aside{box-sizing:border-box;flex-shrink:0;overflow:auto;width:var(--el-aside-width,300px)}.el-footer{--el-footer-padding:0 20px;--el-footer-height:60px;box-sizing:border-box;flex-shrink:0;height:var(--el-footer-height);padding:var(--el-footer-padding)}.el-header{--el-header-padding:0 20px;--el-header-height:60px;box-sizing:border-box;flex-shrink:0;height:var(--el-header-height);padding:var(--el-header-padding)}.el-main{--el-main-padding:20px;box-sizing:border-box;display:block;flex:1;flex-basis:auto;overflow:auto;padding:var(--el-main-padding)}.el-tabs{--el-tabs-header-height:40px}.el-tabs__header{margin:0 0 15px;padding:0;position:relative}.el-tabs__active-bar{background-color:var(--el-color-primary);bottom:0;height:2px;left:0;list-style:none;position:absolute;transition:width var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier),transform var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);z-index:1}.el-tabs__new-tab{align-items:center;border:1px solid var(--el-border-color);border-radius:3px;color:var(--el-text-color-primary);cursor:pointer;display:flex;float:right;font-size:12px;height:20px;justify-content:center;line-height:20px;margin:10px 0 10px 10px;text-align:center;transition:all .15s;width:20px}.el-tabs__new-tab .is-icon-plus{height:inherit;transform:scale(.8);width:inherit}.el-tabs__new-tab .is-icon-plus svg{vertical-align:middle}.el-tabs__new-tab:hover{color:var(--el-color-primary)}.el-tabs__nav-wrap{margin-bottom:-1px;overflow:hidden;position:relative}.el-tabs__nav-wrap:after{background-color:var(--el-border-color-light);bottom:0;content:"";height:2px;left:0;position:absolute;width:100%;z-index:var(--el-index-normal)}.el-tabs__nav-wrap.is-scrollable{box-sizing:border-box;padding:0 20px}.el-tabs__nav-scroll{overflow:hidden}.el-tabs__nav-next,.el-tabs__nav-prev{color:var(--el-text-color-secondary);cursor:pointer;font-size:12px;line-height:44px;position:absolute;text-align:center;width:20px}.el-tabs__nav-next{right:0}.el-tabs__nav-prev{left:0}.el-tabs__nav{display:flex;float:left;position:relative;transition:transform var(--el-transition-duration);white-space:nowrap;z-index:calc(var(--el-index-normal) + 1)}.el-tabs__nav.is-stretch{display:flex;min-width:100%}.el-tabs__nav.is-stretch>*{flex:1;text-align:center}.el-tabs__item{align-items:center;box-sizing:border-box;color:var(--el-text-color-primary);display:flex;font-size:var(--el-font-size-base);font-weight:500;height:var(--el-tabs-header-height);justify-content:center;list-style:none;padding:0 20px;position:relative}.el-tabs__item:focus,.el-tabs__item:focus:active{outline:none}.el-tabs__item:focus-visible{border-radius:3px;box-shadow:0 0 2px 2px var(--el-color-primary) inset}.el-tabs__item .is-icon-close{border-radius:50%;margin-left:5px;text-align:center;transition:all var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier)}.el-tabs__item .is-icon-close:before{display:inline-block;transform:scale(.9)}.el-tabs__item .is-icon-close:hover{background-color:var(--el-text-color-placeholder);color:#fff}.el-tabs__item.is-active{color:var(--el-color-primary)}.el-tabs__item:hover{color:var(--el-color-primary);cursor:pointer}.el-tabs__item.is-disabled{color:var(--el-disabled-text-color);cursor:not-allowed}.el-tabs__content{overflow:hidden;position:relative}.el-tabs--card>.el-tabs__header{border-bottom:1px solid var(--el-border-color-light);height:var(--el-tabs-header-height)}.el-tabs--card>.el-tabs__header .el-tabs__nav-wrap:after{content:none}.el-tabs--card>.el-tabs__header .el-tabs__nav{border:1px solid var(--el-border-color-light);border-bottom:none;border-radius:4px 4px 0 0;box-sizing:border-box}.el-tabs--card>.el-tabs__header .el-tabs__active-bar{display:none}.el-tabs--card>.el-tabs__header .el-tabs__item .is-icon-close{font-size:12px;height:14px;overflow:hidden;position:relative;right:-2px;transform-origin:100% 50%;width:0}.el-tabs--card>.el-tabs__header .el-tabs__item{border-bottom:1px solid transparent;border-left:1px solid var(--el-border-color-light);transition:color var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier),padding var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier)}.el-tabs--card>.el-tabs__header .el-tabs__item:first-child{border-left:none}.el-tabs--card>.el-tabs__header .el-tabs__item.is-closable:hover{padding-left:13px;padding-right:13px}.el-tabs--card>.el-tabs__header .el-tabs__item.is-closable:hover .is-icon-close{width:14px}.el-tabs--card>.el-tabs__header .el-tabs__item.is-active{border-bottom-color:var(--el-bg-color)}.el-tabs--card>.el-tabs__header .el-tabs__item.is-active.is-closable{padding-left:20px;padding-right:20px}.el-tabs--card>.el-tabs__header .el-tabs__item.is-active.is-closable .is-icon-close{width:14px}.el-tabs--border-card{background:var(--el-bg-color-overlay);border:1px solid var(--el-border-color)}.el-tabs--border-card>.el-tabs__content{padding:15px}.el-tabs--border-card>.el-tabs__header{background-color:var(--el-fill-color-light);border-bottom:1px solid var(--el-border-color-light);margin:0}.el-tabs--border-card>.el-tabs__header .el-tabs__nav-wrap:after{content:none}.el-tabs--border-card>.el-tabs__header .el-tabs__item{border:1px solid transparent;color:var(--el-text-color-secondary);margin-top:-1px;transition:all var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier)}.el-tabs--border-card>.el-tabs__header .el-tabs__item:first-child{margin-left:-1px}.el-tabs--border-card>.el-tabs__header .el-tabs__item+.el-tabs__item{margin-left:-1px}.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{background-color:var(--el-bg-color-overlay);border-left-color:var(--el-border-color);border-right-color:var(--el-border-color);color:var(--el-color-primary)}.el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover{color:var(--el-color-primary)}.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-disabled{color:var(--el-disabled-text-color)}.el-tabs--border-card>.el-tabs__header .is-scrollable .el-tabs__item:first-child{margin-left:0}.el-tabs--bottom .el-tabs__item.is-bottom:nth-child(2),.el-tabs--bottom .el-tabs__item.is-top:nth-child(2),.el-tabs--top .el-tabs__item.is-bottom:nth-child(2),.el-tabs--top .el-tabs__item.is-top:nth-child(2){padding-left:0}.el-tabs--bottom .el-tabs__item.is-bottom:last-child,.el-tabs--bottom .el-tabs__item.is-top:last-child,.el-tabs--top .el-tabs__item.is-bottom:last-child,.el-tabs--top .el-tabs__item.is-top:last-child{padding-right:0}.el-tabs--bottom .el-tabs--left>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--bottom .el-tabs--right>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--bottom.el-tabs--border-card>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--bottom.el-tabs--card>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--top .el-tabs--left>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--top .el-tabs--right>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--top.el-tabs--card>.el-tabs__header .el-tabs__item:nth-child(2){padding-left:20px}.el-tabs--bottom .el-tabs--left>.el-tabs__header .el-tabs__item:nth-child(2):not(.is-active).is-closable:hover,.el-tabs--bottom .el-tabs--right>.el-tabs__header .el-tabs__item:nth-child(2):not(.is-active).is-closable:hover,.el-tabs--bottom.el-tabs--border-card>.el-tabs__header .el-tabs__item:nth-child(2):not(.is-active).is-closable:hover,.el-tabs--bottom.el-tabs--card>.el-tabs__header .el-tabs__item:nth-child(2):not(.is-active).is-closable:hover,.el-tabs--top .el-tabs--left>.el-tabs__header .el-tabs__item:nth-child(2):not(.is-active).is-closable:hover,.el-tabs--top .el-tabs--right>.el-tabs__header .el-tabs__item:nth-child(2):not(.is-active).is-closable:hover,.el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:nth-child(2):not(.is-active).is-closable:hover,.el-tabs--top.el-tabs--card>.el-tabs__header .el-tabs__item:nth-child(2):not(.is-active).is-closable:hover{padding-left:13px}.el-tabs--bottom .el-tabs--left>.el-tabs__header .el-tabs__item:last-child,.el-tabs--bottom .el-tabs--right>.el-tabs__header .el-tabs__item:last-child,.el-tabs--bottom.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child,.el-tabs--bottom.el-tabs--card>.el-tabs__header .el-tabs__item:last-child,.el-tabs--top .el-tabs--left>.el-tabs__header .el-tabs__item:last-child,.el-tabs--top .el-tabs--right>.el-tabs__header .el-tabs__item:last-child,.el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child,.el-tabs--top.el-tabs--card>.el-tabs__header .el-tabs__item:last-child{padding-right:20px}.el-tabs--bottom .el-tabs--left>.el-tabs__header .el-tabs__item:last-child:not(.is-active).is-closable:hover,.el-tabs--bottom .el-tabs--right>.el-tabs__header .el-tabs__item:last-child:not(.is-active).is-closable:hover,.el-tabs--bottom.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child:not(.is-active).is-closable:hover,.el-tabs--bottom.el-tabs--card>.el-tabs__header .el-tabs__item:last-child:not(.is-active).is-closable:hover,.el-tabs--top .el-tabs--left>.el-tabs__header .el-tabs__item:last-child:not(.is-active).is-closable:hover,.el-tabs--top .el-tabs--right>.el-tabs__header .el-tabs__item:last-child:not(.is-active).is-closable:hover,.el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child:not(.is-active).is-closable:hover,.el-tabs--top.el-tabs--card>.el-tabs__header .el-tabs__item:last-child:not(.is-active).is-closable:hover{padding-right:13px}.el-tabs--bottom .el-tabs__header.is-bottom{margin-bottom:0;margin-top:10px}.el-tabs--bottom.el-tabs--border-card .el-tabs__header.is-bottom{border-bottom:0;border-top:1px solid var(--el-border-color)}.el-tabs--bottom.el-tabs--border-card .el-tabs__nav-wrap.is-bottom{margin-bottom:0;margin-top:-1px}.el-tabs--bottom.el-tabs--border-card .el-tabs__item.is-bottom:not(.is-active){border:1px solid transparent}.el-tabs--bottom.el-tabs--border-card .el-tabs__item.is-bottom{margin:0 -1px -1px}.el-tabs--left,.el-tabs--right{overflow:hidden}.el-tabs--left .el-tabs__header.is-left,.el-tabs--left .el-tabs__header.is-right,.el-tabs--left .el-tabs__nav-scroll,.el-tabs--left .el-tabs__nav-wrap.is-left,.el-tabs--left .el-tabs__nav-wrap.is-right,.el-tabs--right .el-tabs__header.is-left,.el-tabs--right .el-tabs__header.is-right,.el-tabs--right .el-tabs__nav-scroll,.el-tabs--right .el-tabs__nav-wrap.is-left,.el-tabs--right .el-tabs__nav-wrap.is-right{height:100%}.el-tabs--left .el-tabs__active-bar.is-left,.el-tabs--left .el-tabs__active-bar.is-right,.el-tabs--right .el-tabs__active-bar.is-left,.el-tabs--right .el-tabs__active-bar.is-right{bottom:auto;height:auto;top:0;width:2px}.el-tabs--left .el-tabs__nav-wrap.is-left,.el-tabs--left .el-tabs__nav-wrap.is-right,.el-tabs--right .el-tabs__nav-wrap.is-left,.el-tabs--right .el-tabs__nav-wrap.is-right{margin-bottom:0}.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-next,.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-next,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-next,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-next,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev{cursor:pointer;height:30px;line-height:30px;text-align:center;width:100%}.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-next i,.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev i,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-next i,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev i,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-next i,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev i,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-next i,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev i{transform:rotate(90deg)}.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev{left:auto;top:0}.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-next,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-next,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-next,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-next{bottom:0;right:auto}.el-tabs--left .el-tabs__nav-wrap.is-left.is-scrollable,.el-tabs--left .el-tabs__nav-wrap.is-right.is-scrollable,.el-tabs--right .el-tabs__nav-wrap.is-left.is-scrollable,.el-tabs--right .el-tabs__nav-wrap.is-right.is-scrollable{padding:30px 0}.el-tabs--left .el-tabs__nav-wrap.is-left:after,.el-tabs--left .el-tabs__nav-wrap.is-right:after,.el-tabs--right .el-tabs__nav-wrap.is-left:after,.el-tabs--right .el-tabs__nav-wrap.is-right:after{bottom:auto;height:100%;top:0;width:2px}.el-tabs--left .el-tabs__nav.is-left,.el-tabs--left .el-tabs__nav.is-right,.el-tabs--right .el-tabs__nav.is-left,.el-tabs--right .el-tabs__nav.is-right{flex-direction:column}.el-tabs--left .el-tabs__item.is-left,.el-tabs--right .el-tabs__item.is-left{justify-content:flex-end}.el-tabs--left .el-tabs__item.is-right,.el-tabs--right .el-tabs__item.is-right{justify-content:flex-start}.el-tabs--left .el-tabs__header.is-left{float:left;margin-bottom:0;margin-right:10px}.el-tabs--left .el-tabs__nav-wrap.is-left{margin-right:-1px}.el-tabs--left .el-tabs__nav-wrap.is-left:after{left:auto;right:0}.el-tabs--left .el-tabs__active-bar.is-left{left:auto;right:0}.el-tabs--left .el-tabs__item.is-left{text-align:right}.el-tabs--left.el-tabs--card .el-tabs__active-bar.is-left{display:none}.el-tabs--left.el-tabs--card .el-tabs__item.is-left{border-bottom:none;border-left:none;border-right:1px solid var(--el-border-color-light);border-top:1px solid var(--el-border-color-light);text-align:left}.el-tabs--left.el-tabs--card .el-tabs__item.is-left:first-child{border-right:1px solid var(--el-border-color-light);border-top:none}.el-tabs--left.el-tabs--card .el-tabs__item.is-left.is-active{border:1px solid var(--el-border-color-light);border-bottom:none;border-left:none;border-right:1px solid #fff}.el-tabs--left.el-tabs--card .el-tabs__item.is-left.is-active:first-child{border-top:none}.el-tabs--left.el-tabs--card .el-tabs__item.is-left.is-active:last-child{border-bottom:none}.el-tabs--left.el-tabs--card .el-tabs__nav{border-bottom:1px solid var(--el-border-color-light);border-radius:4px 0 0 4px;border-right:none}.el-tabs--left.el-tabs--card .el-tabs__new-tab{float:none}.el-tabs--left.el-tabs--border-card .el-tabs__header.is-left{border-right:1px solid var(--el-border-color)}.el-tabs--left.el-tabs--border-card .el-tabs__item.is-left{border:1px solid transparent;margin:-1px 0 -1px -1px}.el-tabs--left.el-tabs--border-card .el-tabs__item.is-left.is-active{border-color:rgb(209,219,229) transparent}.el-tabs--right .el-tabs__header.is-right{float:right;margin-bottom:0;margin-left:10px}.el-tabs--right .el-tabs__nav-wrap.is-right{margin-left:-1px}.el-tabs--right .el-tabs__nav-wrap.is-right:after{left:0;right:auto}.el-tabs--right .el-tabs__active-bar.is-right{left:0}.el-tabs--right.el-tabs--card .el-tabs__active-bar.is-right{display:none}.el-tabs--right.el-tabs--card .el-tabs__item.is-right{border-bottom:none;border-top:1px solid var(--el-border-color-light)}.el-tabs--right.el-tabs--card .el-tabs__item.is-right:first-child{border-left:1px solid var(--el-border-color-light);border-top:none}.el-tabs--right.el-tabs--card .el-tabs__item.is-right.is-active{border:1px solid var(--el-border-color-light);border-bottom:none;border-left:1px solid #fff;border-right:none}.el-tabs--right.el-tabs--card .el-tabs__item.is-right.is-active:first-child{border-top:none}.el-tabs--right.el-tabs--card .el-tabs__item.is-right.is-active:last-child{border-bottom:none}.el-tabs--right.el-tabs--card .el-tabs__nav{border-bottom:1px solid var(--el-border-color-light);border-left:none;border-radius:0 4px 4px 0}.el-tabs--right.el-tabs--border-card .el-tabs__header.is-right{border-left:1px solid var(--el-border-color)}.el-tabs--right.el-tabs--border-card .el-tabs__item.is-right{border:1px solid transparent;margin:-1px -1px -1px 0}.el-tabs--right.el-tabs--border-card .el-tabs__item.is-right.is-active{border-color:rgb(209,219,229) transparent}.slideInLeft-transition,.slideInRight-transition{display:inline-block}.slideInRight-enter{-webkit-animation:slideInRight-enter var(--el-transition-duration);animation:slideInRight-enter var(--el-transition-duration)}.slideInRight-leave{-webkit-animation:slideInRight-leave var(--el-transition-duration);animation:slideInRight-leave var(--el-transition-duration);left:0;position:absolute;right:0}.slideInLeft-enter{-webkit-animation:slideInLeft-enter var(--el-transition-duration);animation:slideInLeft-enter var(--el-transition-duration)}.slideInLeft-leave{-webkit-animation:slideInLeft-leave var(--el-transition-duration);animation:slideInLeft-leave var(--el-transition-duration);left:0;position:absolute;right:0}@-webkit-keyframes slideInRight-enter{0%{opacity:0;transform:translate(100%);transform-origin:0 0}to{opacity:1;transform:translate(0);transform-origin:0 0}}@keyframes slideInRight-enter{0%{opacity:0;transform:translate(100%);transform-origin:0 0}to{opacity:1;transform:translate(0);transform-origin:0 0}}@-webkit-keyframes slideInRight-leave{0%{opacity:1;transform:translate(0);transform-origin:0 0}to{opacity:0;transform:translate(100%);transform-origin:0 0}}@keyframes slideInRight-leave{0%{opacity:1;transform:translate(0);transform-origin:0 0}to{opacity:0;transform:translate(100%);transform-origin:0 0}}@-webkit-keyframes slideInLeft-enter{0%{opacity:0;transform:translate(-100%);transform-origin:0 0}to{opacity:1;transform:translate(0);transform-origin:0 0}}@keyframes slideInLeft-enter{0%{opacity:0;transform:translate(-100%);transform-origin:0 0}to{opacity:1;transform:translate(0);transform-origin:0 0}}@-webkit-keyframes slideInLeft-leave{0%{opacity:1;transform:translate(0);transform-origin:0 0}to{opacity:0;transform:translate(-100%);transform-origin:0 0}}@keyframes slideInLeft-leave{0%{opacity:1;transform:translate(0);transform-origin:0 0}to{opacity:0;transform:translate(-100%);transform-origin:0 0}}.el-space{display:inline-flex;vertical-align:top}.el-space__item{display:flex;flex-wrap:wrap}.el-space__item>*{flex:1}.el-space--vertical{flex-direction:column}.el-link{--el-link-font-size:var(--el-font-size-base);--el-link-font-weight:var(--el-font-weight-primary);--el-link-text-color:var(--el-text-color-regular);--el-link-hover-text-color:var(--el-color-primary);--el-link-disabled-text-color:var(--el-text-color-placeholder);align-items:center;color:var(--el-link-text-color);cursor:pointer;display:inline-flex;flex-direction:row;font-size:var(--el-link-font-size);font-weight:var(--el-link-font-weight);justify-content:center;outline:none;padding:0;position:relative;text-decoration:none;vertical-align:middle}.el-link:hover{color:var(--el-link-hover-text-color)}.el-link.is-underline:hover:after{border-bottom:1px solid var(--el-link-hover-text-color);bottom:0;content:"";height:0;left:0;position:absolute;right:0}.el-link.is-disabled{color:var(--el-link-disabled-text-color);cursor:not-allowed}.el-link [class*=el-icon-]+span{margin-left:5px}.el-link.el-link--default:after{border-color:var(--el-link-hover-text-color)}.el-link__inner{align-items:center;display:inline-flex;justify-content:center}.el-link.el-link--primary{--el-link-text-color:var(--el-color-primary);--el-link-hover-text-color:var(--el-color-primary-light-3);--el-link-disabled-text-color:var(--el-color-primary-light-5)}.el-link.el-link--primary:after{border-color:var(--el-link-text-color)}.el-link.el-link--primary.is-underline:hover:after{border-color:var(--el-link-text-color)}.el-link.el-link--success{--el-link-text-color:var(--el-color-success);--el-link-hover-text-color:var(--el-color-success-light-3);--el-link-disabled-text-color:var(--el-color-success-light-5)}.el-link.el-link--success:after{border-color:var(--el-link-text-color)}.el-link.el-link--success.is-underline:hover:after{border-color:var(--el-link-text-color)}.el-link.el-link--warning{--el-link-text-color:var(--el-color-warning);--el-link-hover-text-color:var(--el-color-warning-light-3);--el-link-disabled-text-color:var(--el-color-warning-light-5)}.el-link.el-link--warning:after{border-color:var(--el-link-text-color)}.el-link.el-link--warning.is-underline:hover:after{border-color:var(--el-link-text-color)}.el-link.el-link--danger{--el-link-text-color:var(--el-color-danger);--el-link-hover-text-color:var(--el-color-danger-light-3);--el-link-disabled-text-color:var(--el-color-danger-light-5)}.el-link.el-link--danger:after{border-color:var(--el-link-text-color)}.el-link.el-link--danger.is-underline:hover:after{border-color:var(--el-link-text-color)}.el-link.el-link--error{--el-link-text-color:var(--el-color-error);--el-link-hover-text-color:var(--el-color-error-light-3);--el-link-disabled-text-color:var(--el-color-error-light-5)}.el-link.el-link--error:after{border-color:var(--el-link-text-color)}.el-link.el-link--error.is-underline:hover:after{border-color:var(--el-link-text-color)}.el-link.el-link--info{--el-link-text-color:var(--el-color-info);--el-link-hover-text-color:var(--el-color-info-light-3);--el-link-disabled-text-color:var(--el-color-info-light-5)}.el-link.el-link--info:after{border-color:var(--el-link-text-color)}.el-link.el-link--info.is-underline:hover:after{border-color:var(--el-link-text-color)}.el-divider{position:relative}.el-divider--horizontal{border-top:1px var(--el-border-color) var(--el-border-style);display:block;height:1px;margin:24px 0;width:100%}.el-divider--vertical{border-left:1px var(--el-border-color) var(--el-border-style);display:inline-block;height:1em;margin:0 8px;position:relative;vertical-align:middle;width:1px}.el-divider__text{background-color:var(--el-bg-color);color:var(--el-text-color-primary);font-size:14px;font-weight:500;padding:0 20px;position:absolute}.el-divider__text.is-left{left:20px;transform:translateY(-50%)}.el-divider__text.is-center{left:50%;transform:translate(-50%) translateY(-50%)}.el-divider__text.is-right{right:20px;transform:translateY(-50%)}.el-text{--el-text-font-size:var(--el-font-size-base);--el-text-color:var(--el-text-color-regular);align-self:center;color:var(--el-text-color);font-size:var(--el-text-font-size);margin:0;overflow-wrap:break-word;padding:0}.el-text.is-truncated{display:inline-block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.el-text.is-line-clamp{display:-webkit-inline-box;-webkit-box-orient:vertical;overflow:hidden}.el-text--large{--el-text-font-size:var(--el-font-size-medium)}.el-text--default{--el-text-font-size:var(--el-font-size-base)}.el-text--small{--el-text-font-size:var(--el-font-size-extra-small)}.el-text.el-text--primary{--el-text-color:var(--el-color-primary)}.el-text.el-text--success{--el-text-color:var(--el-color-success)}.el-text.el-text--warning{--el-text-color:var(--el-color-warning)}.el-text.el-text--danger{--el-text-color:var(--el-color-danger)}.el-text.el-text--error{--el-text-color:var(--el-color-error)}.el-text.el-text--info{--el-text-color:var(--el-color-info)}.el-text>.el-icon{vertical-align:-2px}.el-backtop{--el-backtop-bg-color:var(--el-bg-color-overlay);--el-backtop-text-color:var(--el-color-primary);--el-backtop-hover-bg-color:var(--el-border-color-extra-light);align-items:center;background-color:var(--el-backtop-bg-color);border-radius:50%;box-shadow:var(--el-box-shadow-lighter);color:var(--el-backtop-text-color);cursor:pointer;display:flex;font-size:20px;height:40px;justify-content:center;position:fixed;width:40px;z-index:5}.el-backtop:hover{background-color:var(--el-backtop-hover-bg-color)}.el-backtop__icon{font-size:20px}.el-image__error,.el-image__inner,.el-image__placeholder,.el-image__wrapper{height:100%;width:100%}.el-image{display:inline-block;overflow:hidden;position:relative}.el-image__inner{opacity:1;vertical-align:top}.el-image__inner.is-loading{opacity:0}.el-image__wrapper{left:0;position:absolute;top:0}.el-image__error,.el-image__placeholder{background:var(--el-fill-color-light)}.el-image__error{align-items:center;color:var(--el-text-color-placeholder);display:flex;font-size:14px;justify-content:center;vertical-align:middle}.el-image__preview{cursor:pointer}.el-image-viewer__wrapper{bottom:0;left:0;position:fixed;right:0;top:0}.el-image-viewer__btn{align-items:center;border-radius:50%;box-sizing:border-box;cursor:pointer;display:flex;justify-content:center;opacity:.8;position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}.el-image-viewer__btn .el-icon{cursor:pointer;font-size:inherit}.el-image-viewer__close{font-size:40px;height:40px;right:40px;top:40px;width:40px}.el-image-viewer__canvas{align-items:center;display:flex;height:100%;justify-content:center;position:static;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.el-image-viewer__actions{background-color:var(--el-text-color-regular);border-color:#fff;border-radius:22px;bottom:30px;height:44px;left:50%;padding:0 23px;transform:translate(-50%);width:282px}.el-image-viewer__actions__inner{align-items:center;color:#fff;cursor:default;display:flex;font-size:23px;height:100%;justify-content:space-around;width:100%}.el-image-viewer__prev{left:40px}.el-image-viewer__next,.el-image-viewer__prev{background-color:var(--el-text-color-regular);border-color:#fff;color:#fff;font-size:24px;height:44px;top:50%;transform:translateY(-50%);width:44px}.el-image-viewer__next{right:40px;text-indent:2px}.el-image-viewer__close{background-color:var(--el-text-color-regular);border-color:#fff;color:#fff;font-size:24px;height:44px;width:44px}.el-image-viewer__mask{background:#000;height:100%;left:0;opacity:.5;position:absolute;top:0;width:100%}.viewer-fade-enter-active{-webkit-animation:viewer-fade-in var(--el-transition-duration);animation:viewer-fade-in var(--el-transition-duration)}.viewer-fade-leave-active{-webkit-animation:viewer-fade-out var(--el-transition-duration);animation:viewer-fade-out var(--el-transition-duration)}@-webkit-keyframes viewer-fade-in{0%{opacity:0;transform:translate3d(0,-20px,0)}to{opacity:1;transform:translateZ(0)}}@keyframes viewer-fade-in{0%{opacity:0;transform:translate3d(0,-20px,0)}to{opacity:1;transform:translateZ(0)}}@-webkit-keyframes viewer-fade-out{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(0,-20px,0)}}@keyframes viewer-fade-out{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(0,-20px,0)}}.el-empty{--el-empty-padding:40px 0;--el-empty-image-width:160px;--el-empty-description-margin-top:20px;--el-empty-bottom-margin-top:20px;--el-empty-fill-color-0:var(--el-color-white);--el-empty-fill-color-1:#fcfcfd;--el-empty-fill-color-2:#f8f9fb;--el-empty-fill-color-3:#f7f8fc;--el-empty-fill-color-4:#eeeff3;--el-empty-fill-color-5:#edeef2;--el-empty-fill-color-6:#e9ebef;--el-empty-fill-color-7:#e5e7e9;--el-empty-fill-color-8:#e0e3e9;--el-empty-fill-color-9:#d5d7de;align-items:center;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;padding:var(--el-empty-padding);text-align:center}.el-empty__image{width:var(--el-empty-image-width)}.el-empty__image img{height:100%;-o-object-fit:contain;object-fit:contain;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;width:100%}.el-empty__image svg{color:var(--el-svg-monochrome-grey);fill:currentColor;height:100%;vertical-align:top;width:100%}.el-empty__description{margin-top:var(--el-empty-description-margin-top)}.el-empty__description p{color:var(--el-text-color-secondary);font-size:var(--el-font-size-base);margin:0}.el-empty__bottom{margin-top:var(--el-empty-bottom-margin-top)}.el-skeleton{--el-skeleton-color:var(--el-fill-color);--el-skeleton-to-color:var(--el-fill-color-darker)}@-webkit-keyframes el-skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@keyframes el-skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}.el-skeleton{width:100%}.el-skeleton__first-line,.el-skeleton__paragraph{background:var(--el-skeleton-color);height:16px;margin-top:16px}.el-skeleton.is-animated .el-skeleton__item{-webkit-animation:el-skeleton-loading 1.4s ease infinite;animation:el-skeleton-loading 1.4s ease infinite;background:linear-gradient(90deg,var(--el-skeleton-color) 25%,var(--el-skeleton-to-color) 37%,var(--el-skeleton-color) 63%);background-size:400% 100%}.el-skeleton{--el-skeleton-circle-size:var(--el-avatar-size)}.el-skeleton__item{background:var(--el-skeleton-color);border-radius:var(--el-border-radius-base);display:inline-block;height:16px;width:100%}.el-skeleton__circle{border-radius:50%;height:var(--el-skeleton-circle-size);line-height:var(--el-skeleton-circle-size);width:var(--el-skeleton-circle-size)}.el-skeleton__button{border-radius:4px;height:40px;width:64px}.el-skeleton__p{width:100%}.el-skeleton__p.is-last{width:61%}.el-skeleton__p.is-first{width:33%}.el-skeleton__text{height:var(--el-font-size-small);width:100%}.el-skeleton__caption{height:var(--el-font-size-extra-small)}.el-skeleton__h1{height:var(--el-font-size-extra-large)}.el-skeleton__h3{height:var(--el-font-size-large)}.el-skeleton__h5{height:var(--el-font-size-medium)}.el-skeleton__image{align-items:center;border-radius:0;display:flex;justify-content:center;width:unset}.el-skeleton__image svg{color:var(--el-svg-monochrome-grey);fill:currentColor;height:22%;width:22%}.posts-container-item[data-v-7741d033]{width:-webkit-fill-available;width:-moz-available}.posts-item-title[data-v-7741d033]{font-weight:700}.posts-item-title[data-v-7741d033],.posts-item-content[data-v-7741d033],.posts-item-media-container[data-v-7741d033]{margin:10px 0}.posts-item-footer[data-v-7741d033]{margin:15px 0 5px}.posts-item-footer .el-col[data-v-7741d033]{text-align:center}.posts-item-footer-icon-container[data-v-7741d033]{display:flex;align-items:center;justify-content:center;gap:0px 6px}.posts-item-right-user-info[data-v-7741d033]{padding:0 10px}.posts-container[data-v-f56c32ba]{background:#f2f2f4;padding:10px}.posts-container-item[data-v-f56c32ba]{background:#fff;border-radius:12px;margin:10px 0;padding:10px}.posts-item-title[data-v-f56c32ba]{font-weight:700}.posts-item-title[data-v-f56c32ba],.posts-item-content[data-v-f56c32ba],.posts-item-media-container[data-v-f56c32ba]{margin:10px 0}.posts-item-footer[data-v-f56c32ba]{margin:15px 0 5px}.posts-item-footer .el-col[data-v-f56c32ba]{text-align:center}.posts-item-footer-icon-container[data-v-f56c32ba]{display:flex;align-items:center;justify-content:center;gap:0px 6px}.posts-item-right-user-info[data-v-f56c32ba]{padding:0 10px}.follow-forum-container[data-v-01b2cebf]{background:#f2f2f4;padding:10px}.follow-forum-list-container[data-v-01b2cebf]{background:#fff;border-radius:12px;margin:10px 0;padding:10px}.follow-forum-item[data-v-01b2cebf]{width:50%;max-width:50%;display:flex;align-items:flex-start;margin:10px 0}.follow-forum-avatar[data-v-01b2cebf]{border-radius:12px}.follow-forum-item-right-container[data-v-01b2cebf]{margin:0 10px;width:inherit;display:flex;flex-direction:column}.follow-forum-item-name[data-v-01b2cebf]{display:flex;align-items:center;width:-webkit-fill-available;width:-moz-available}.follow-forum-item-level[data-level][data-v-01b2cebf]{margin:5px;padding:2px;border-radius:3px;font-size:.6rem;line-height:.6rem;font-weight:700;text-align:center;background:var(--5ff1c432);color:var(--77e5956c)}.follow-forum-item-level[data-level="0"][data-v-01b2cebf],.follow-forum-item-level[data-level="1"][data-v-01b2cebf],.follow-forum-item-level[data-level="2"][data-v-01b2cebf],.follow-forum-item-level[data-level="3"][data-v-01b2cebf]{background:var(--f42fba10)}.follow-forum-item-level[data-level="4"][data-v-01b2cebf],.follow-forum-item-level[data-level="5"][data-v-01b2cebf],.follow-forum-item-level[data-level="6"][data-v-01b2cebf],.follow-forum-item-level[data-level="7"][data-v-01b2cebf],.follow-forum-item-level[data-level="8"][data-v-01b2cebf],.follow-forum-item-level[data-level="9"][data-v-01b2cebf]{background:var(--f42f9bfc)}.follow-forum-item-level[data-level="10"][data-v-01b2cebf],.follow-forum-item-level[data-level="11"][data-v-01b2cebf],.follow-forum-item-level[data-level="12"][data-v-01b2cebf],.follow-forum-item-level[data-level="13"][data-v-01b2cebf],.follow-forum-item-level[data-level="14"][data-v-01b2cebf],.follow-forum-item-level[data-level="15"][data-v-01b2cebf]{background:var(--a736ab50)}.follow-forum-item-level[data-level="16"][data-v-01b2cebf],.follow-forum-item-level[data-level="17"][data-v-01b2cebf],.follow-forum-item-level[data-level="18"][data-v-01b2cebf]{background:var(--a73136d6)}.follow-forum-item-info[data-v-01b2cebf]{word-wrap:break-word}#main[data-v-f1356a71]{z-index:1000;width:100%;height:100%}.big-text[data-v-f1356a71]{font-weight:700}.top-container[data-v-f1356a71]{width:-webkit-fill-available;width:-moz-available;padding:15px 15px 0}.user-info-bg[data-v-f1356a71]{width:100%;height:100px}.user-info-bg-main[data-v-f1356a71]{width:100%;height:160px;position:absolute;background:url(https://tb2.bdstatic.com/tb/mobile/suser/img/home_card_back_6cdfca5.jpg);background-size:100%;background-repeat:no-repeat}.user-avatar-top-background[data-v-f1356a71]{position:absolute;width:100%;height:40%;padding:0;margin:0;border-top-left-radius:12px;border-top-right-radius:12px;background:#fff;transform:translateY(100%)}.user-info-container[data-v-f1356a71]{padding:0 10px}.nav-left-arrow-icon[data-v-c9511d44]{align-content:center;padding-left:0!important}.nav-title[data-v-c9511d44]{font-weight:700;text-align:center;padding:10px}.user-avatar[data-v-c9511d44]{text-align:center;padding-bottom:20px}.user-info-item[data-v-c9511d44]{display:flex;padding:10px}.user-desc-key[data-v-c9511d44]{width:60px;display:block}.user-end-text[data-v-c9511d44]{padding:0 20px}.el-scrollbar{--el-scrollbar-opacity:.3;--el-scrollbar-bg-color:var(--el-text-color-secondary);--el-scrollbar-hover-opacity:.5;--el-scrollbar-hover-bg-color:var(--el-text-color-secondary);height:100%;overflow:hidden;position:relative}.el-scrollbar__wrap{height:100%;overflow:auto}.el-scrollbar__wrap--hidden-default{scrollbar-width:none}.el-scrollbar__wrap--hidden-default::-webkit-scrollbar{display:none}.el-scrollbar__thumb{background-color:var(--el-scrollbar-bg-color,var(--el-text-color-secondary));border-radius:inherit;cursor:pointer;display:block;height:0;opacity:var(--el-scrollbar-opacity,.3);position:relative;transition:var(--el-transition-duration) background-color;width:0}.el-scrollbar__thumb:hover{background-color:var(--el-scrollbar-hover-bg-color,var(--el-text-color-secondary));opacity:var(--el-scrollbar-hover-opacity,.5)}.el-scrollbar__bar{border-radius:4px;bottom:2px;position:absolute;right:2px;z-index:1}.el-scrollbar__bar.is-vertical{top:2px;width:6px}.el-scrollbar__bar.is-vertical>div{width:100%}.el-scrollbar__bar.is-horizontal{height:6px;left:2px}.el-scrollbar__bar.is-horizontal>div{height:100%}.el-scrollbar-fade-enter-active{transition:opacity .34s ease-out}.el-scrollbar-fade-leave-active{transition:opacity .12s ease-out}.el-scrollbar-fade-enter-from,.el-scrollbar-fade-leave-active{opacity:0}.user-top[data-v-82b5d2d1]{height:40px;width:100%;position:relative}.top-left-arrow-icon[data-v-82b5d2d1]{align-content:center;padding-left:0!important}.top-title-name[data-v-82b5d2d1]{text-align:center;padding:10px}.user-main[data-v-82b5d2d1]{padding:0;position:absolute;top:40px;right:0;bottom:0;left:0;width:100%;height:calc(100% - 40px)}.user-container[data-v-82b5d2d1]{padding:0 10px}.user-container .el-scrollbar__view[data-v-82b5d2d1]{height:100%}.user-item[data-v-82b5d2d1]{margin:10px 0}.user-item-row[data-v-82b5d2d1]{display:flex;align-items:center;justify-content:space-between}.user-item-row-center[data-v-82b5d2d1]{padding:0 10px}.user-name[data-v-82b5d2d1],.user-sign-text[data-v-82b5d2d1]{text-align:left}.user-sign-text[data-v-82b5d2d1]{color:#a2a2a2}.user-follow-btn[data-v-82b5d2d1]{float:right}.user-info[data-v-82b5d2d1]{display:grid}.user-item-row-left[data-v-82b5d2d1]{display:flex}.user-item-row-right[data-v-82b5d2d1]{float:right}.user-top[data-v-416d1c10]{height:40px;width:100%;position:relative}.top-left-arrow-icon[data-v-416d1c10]{align-content:center;padding-left:0!important}.top-title-name[data-v-416d1c10]{text-align:center;padding:10px}.user-main[data-v-416d1c10]{padding:0;position:absolute;right:0;bottom:0;left:0;width:100%;height:calc(100% - 40px);top:40px}.user-container[data-v-416d1c10]{padding:0 10px}.user-container .el-scrollbar__view[data-v-416d1c10]{height:100%}.user-item[data-v-416d1c10]{margin:10px 0}.user-item-row[data-v-416d1c10]{display:flex;align-items:center;justify-content:space-between}.user-item-row-center[data-v-416d1c10]{padding:0 10px;align-content:center}.user-name[data-v-416d1c10],.user-sign-text[data-v-416d1c10]{text-align:left}.user-sign-text[data-v-416d1c10]{color:#a2a2a2}.user-follow-btn[data-v-416d1c10]{float:right}.user-info[data-v-416d1c10]{display:grid}.user-item-row-left[data-v-416d1c10]{display:flex}.user-item-row-right[data-v-416d1c10]{float:right} ');

(function (vue, Qmsg, Utils, DOMUtils, Viewer, pinia$1, iconsVue, vueDemi, vueRouter, ElementPlus) {
  'use strict';

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  var _a2;
  var _GM_getResourceText = /* @__PURE__ */ (() => typeof GM_getResourceText != "undefined" ? GM_getResourceText : void 0)();
  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_info = /* @__PURE__ */ (() => typeof GM_info != "undefined" ? GM_info : void 0)();
  var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  var _GM_unregisterMenuCommand = /* @__PURE__ */ (() => typeof GM_unregisterMenuCommand != "undefined" ? GM_unregisterMenuCommand : void 0)();
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  var _monkeyWindow = /* @__PURE__ */ (() => window)();
  const BaiduRouter = {
    /**
     * 百度搜索
     * @returns
     */
    isSearch() {
      return Boolean(
        window.location.href.match(
          /^http(s|):\/\/(m[0-9]{0,2}|www).baidu.com\/.*/g
        )
      );
    },
    /**
     * 百度搜索 - /bh
     * @returns
     */
    isSearchBh() {
      return Boolean(
        this.isSearch() && window.location.pathname.startsWith("/bh")
      );
    },
    /**
     * 百度搜索主页
     * @returns
     */
    isSearchHome() {
      return Boolean(
        window.location.href.match(
          /^http(s|):\/\/(m[0-9]{0,2}|www).baidu.com\/$/g
        ) || window.location.href.match(
          /^http(s|):\/\/(m[0-9]{0,2}|www).baidu.com\/(\?ref=|\?tn=|\?from=|#\/)/g
        )
      );
    },
    /**
     * 百度搜索其它卡片搜索结果页面
     * /sf/vsearch
     * 例如：视频、笔记、贴吧、图片、资讯、问答、文库...等
     */
    isSearchVSearch() {
      return this.isSearch() && window.location.pathname.startsWith("/sf/vsearch");
    },
    /**
     * 百家号
     * @returns
     */
    isBaiJiaHao() {
      return Boolean(
        window.location.href.match(/^http(s|):\/\/baijiahao.baidu.com/g)
      );
    },
    /**
     * 贴吧
     * @returns
     */
    isTieBa() {
      return Boolean(
        window.location.href.match(
          /^http(s|):\/\/(tieba.baidu|www.tieba|ala.baidu|static.tieba.baidu|nba.baidu).com/g
        )
      );
    },
    /**
     * 贴吧 - 帖子
     * @returns
     */
    isTieBaPost() {
      return Boolean(
        this.isTieBa() && window.location.pathname.startsWith("/p/")
      );
    },
    /**
     * 贴吧 - 热帖
     * @returns
     */
    isTieBaNewTopic() {
      return Boolean(
        this.isTieBa() && window.location.pathname.startsWith("/mo/q/newtopic/topicTemplate")
      );
    },
    /**
     * 贴吧 - 搜索结果界面
     * @returns
     */
    isTieBaHybrid() {
      return Boolean(
        this.isTieBa() && window.location.pathname.startsWith("/mo/q/hybrid")
      );
    },
    /**
     * 贴吧 - 吧内
     * @returns
     */
    isTieBaNei() {
      return Boolean(this.isTieBa() && window.location.pathname === "/f");
    },
    /**
     * 贴吧 - 首页
     * @returns
     */
    isTieBaIndex() {
      return Boolean(
        this.isTieBa() && window.location.pathname.startsWith("/index")
      );
    },
    /**
     * 贴吧 - 主页
     */
    isTieBaHome() {
      return Boolean(
        this.isTieBa() && window.location.pathname.startsWith("/home/main")
      );
    },
    /**
     * 百度文库
     * @returns
     */
    isWenKu() {
      return Boolean(
        window.location.href.match(/^http(s|):\/\/(wk|tanbi).baidu.com/g)
      );
    },
    /**
     * 百度经验
     * @returns
     */
    isJingYan() {
      return Boolean(
        window.location.href.match(/^http(s|):\/\/jingyan.baidu.com/g)
      );
    },
    /**
     * 百度百科
     * @returns
     */
    isBaiKe() {
      return Boolean(
        window.location.href.match(/^http(s|):\/\/(baike|wapbaike).baidu.com/g)
      );
    },
    /**
     * 百度百科 - 他说
     * @returns
     */
    isBaiKeTaShuo() {
      return Boolean(
        this.isBaiKe() && window.location.pathname.startsWith("/tashuo")
      );
    },
    /**
     * 百度知道
     * @returns
     */
    isZhiDao() {
      return Boolean(
        window.location.href.match(/^http(s|):\/\/zhidao.baidu.com/g)
      );
    },
    /**
     * 百度翻译
     * @returns
     */
    isFanYi() {
      return Boolean(
        window.location.href.match(/^http(s|):\/\/fanyi.baidu.com/g)
      );
    },
    /**
     * 百度翻译 - App
     * @returns
     */
    isFanYiApp() {
      return Boolean(
        window.location.href.match(/^http(s|):\/\/fanyi-app.baidu.com/g)
      );
    },
    /**
     * 百度图片
     * @returns
     */
    isImage() {
      return Boolean(
        window.location.href.match(/^http(s|):\/\/image.baidu.com/g)
      );
    },
    /**
     * 百度地图
     * @returns
     */
    isMap() {
      return Boolean(window.location.href.match(/^http(s|):\/\/map.baidu.com/g));
    },
    /**
     *
     * @returns
     */
    isMbd() {
      return Boolean(window.location.href.match(/^http(s|):\/\/mbd.baidu.com/g));
    },
    /**
     * 百度好学
     * @returns
     */
    isXue() {
      return Boolean(window.location.href.match(/^http(s|):\/\/xue.baidu.com/g));
    },
    /**
     * 爱企查
     * @returns
     */
    isAiQiCha() {
      return Boolean(
        window.location.href.match(/^http(s|):\/\/aiqicha.baidu.com/g)
      );
    },
    /**
     * 百度网盟
     * @returns
     */
    isPos() {
      return Boolean(window.location.href.match(/^http(s|):\/\/pos.baidu.com/g));
    },
    /**
     * 好看视频
     * @returns
     */
    isHaoKan() {
      return Boolean(
        window.location.href.match(/^http(s|):\/\/haokan.baidu.com/g)
      );
    },
    /**
     * 百度图片搜索
     * @returns
     */
    isGraph() {
      return Boolean(
        window.location.href.match(/^http(s|):\/\/graph.baidu.com/g)
      );
    },
    /**
     * 百度网盘
     * @returns
     */
    isPan() {
      return Boolean(window.location.href.match(/^http(s|):\/\/pan.baidu.com/g));
    },
    /**
     * 文心一言
     * @returns
     */
    isYiYan() {
      return Boolean(
        window.location.href.match(/^http(s|):\/\/yiyan.baidu.com/g)
      );
    },
    /**
     * 搜索AI伙伴
     * @returns
     */
    isChat() {
      return Boolean(window.location.href.match(/^http(s|):\/\/chat.baidu.com/g));
    },
    /**
     * 百度教育
     * @returns
     */
    isMiniJiaoYu() {
      return Boolean(
        window.location.href.match(/^http(s|):\/\/uf9kyh.smartapps.cn/g)
      );
    },
    /**
     * 百度教育
     * @returns
     */
    isEasyLearn() {
      return Boolean(
        window.location.href.match(/^http(s|):\/\/easylearn.baidu.com/g)
      );
    },
    /**
     * 百度基木鱼
     * @returns
     */
    isISite() {
      return Boolean(
        window.location.href.match(
          /^http(s|):\/\/isite.baidu.com\/site\/wjz2tdly/g
        )
      );
    },
    /**
     * 百度爱学
     * @returns
     */
    isAiStudy() {
      return Boolean(
        window.location.href.match(/^http(s|):\/\/aistudy.baidu.com/g)
      );
    }
  };
  class LoadingView {
    /**
     *
     * @param withIcon 是否添加icon
     * @param isEnd icon是否添加在后面
     */
    constructor(withIcon, isEnd) {
      __publicField(this, "config");
      __publicField(this, "loadingViewElement");
      __publicField(this, "loadingViewHTML");
      __publicField(this, "loadingViewIconHTML");
      this.config = {
        className: "whitesev-load-view",
        textClassName: "whitesev-load-view-text",
        iconClassName: "whitesev-load-view-icon",
        outSideClassName: "whitesev-load-view-icon-outside",
        withInClassName: "whitesev-load-view-icon-within"
      };
      this.loadingViewElement = void 0;
      this.loadingViewHTML = `
        <div class="${this.config.className}">
          <span class="${this.config.textClassName}">Loading...</span>
        </div>`.trim();
      this.loadingViewIconHTML = `
        <div class="${this.config.iconClassName}">
          <div class="${this.config.outSideClassName}"></div>
          <div class="${this.config.withInClassName}"></div>
        </div>`.trim();
      this.initCSS();
      this.initLoadingView(withIcon, isEnd);
    }
    /**
     * 加载需要的CSS
     */
    initCSS() {
      if (this.isExistsCSS()) {
        return;
      }
      let loadingViewCSSText = `
      .${this.config.className}{
        margin: 0.08rem;
        background: #fff;
        font-size: 15px;
        text-align: center;
        width: inherit;
        border-radius: 0.12rem;
      }
      .${this.config.iconClassName}{
        width: 45px;
      }
      .${this.config.className},
      .${this.config.iconClassName}{
        height: 45px;
        line-height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .${this.config.outSideClassName},
      .${this.config.withInClassName}{
        position: absolute;
        margin-left: 140px;
        border: 5px solid rgba(0, 183, 229, 0.9);
        opacity: .9;
        border-radius: 50px;
        width: 20px;
        height: 20px;
        margin: 0 auto;
      }
      .${this.config.outSideClassName}{
        background-color: rgba(0, 0, 0, 0);
        border-right: 5px solid rgba(0, 0, 0, 0);
        border-left: 5px solid rgba(0, 0, 0, 0);
        box-shadow: 0 0 35px #2187e7;
        -moz-animation: spinPulse 1s infinite ease-in-out;
        -webkit-animation: spinPulse 1s infinite ease-in-out;
        -o-animation: spinPulse 1s infinite ease-in-out;
        -ms-animation: spinPulse 1s infinite ease-in-out;
      }
      .${this.config.withInClassName}{
        background: rgba(0, 0, 0, 0) no-repeat center center;
        border-top: 5px solid rgba(0, 0, 0, 0);
        border-bottom: 5px solid rgba(0, 0, 0, 0);
        box-shadow: 0 0 15px #2187e7;
        -moz-animation: spinoffPulse 3s infinite linear;
        -webkit-animation: spinoffPulse 3s infinite linear;
        -o-animation: spinoffPulse 3s infinite linear;
        -ms-animation: spinoffPulse 3s infinite linear;
      }
      @-moz-keyframes spinPulse{0%{-moz-transform:rotate(160deg);opacity:0;box-shadow:0 0 1px #505050}
      50%{-moz-transform:rotate(145deg);opacity:1}
      100%{-moz-transform:rotate(-320deg);opacity:0}
      }
      @-moz-keyframes spinoffPulse{0%{-moz-transform:rotate(0)}
      100%{-moz-transform:rotate(360deg)}
      }
      @-webkit-keyframes spinPulse{0%{-webkit-transform:rotate(160deg);opacity:0;box-shadow:0 0 1px #505050}
      50%{-webkit-transform:rotate(145deg);opacity:1}
      100%{-webkit-transform:rotate(-320deg);opacity:0}
      }
      @-webkit-keyframes spinoffPulse{0%{-webkit-transform:rotate(0)}
      100%{-webkit-transform:rotate(360deg)}
      }
      @-o-keyframes spinPulse{0%{-o-transform:rotate(160deg);opacity:0;box-shadow:0 0 1px #505050}
      50%{-o-transform:rotate(145deg);opacity:1}
      100%{-o-transform:rotate(-320deg);opacity:0}
      }
      @-o-keyframes spinoffPulse{0%{-o-transform:rotate(0)}
      100%{-o-transform:rotate(360deg)}
      }
      @-ms-keyframes spinPulse{0%{-ms-transform:rotate(160deg);opacity:0;box-shadow:0 0 1px #505050}
      50%{-ms-transform:rotate(145deg);opacity:1}
      100%{-ms-transform:rotate(-320deg);opacity:0}
      }
      @-ms-keyframes spinoffPulse{0%{-ms-transform:rotate(0)}
      100%{-ms-transform:rotate(360deg)}
      }
      `;
      utils.addStyle(loadingViewCSSText);
    }
    /**
     * 初始化loadingView元素
     * @param withIcon 是否添加icon
     * @param isEnd icon是否添加在后面
     */
    initLoadingView(withIcon = false, isEnd = true) {
      this.setLoadingViewElement();
      let divElement = document.createElement("div");
      divElement.innerHTML = this.loadingViewHTML;
      let resultElement = divElement.firstChild;
      if (withIcon) {
        let iconElement = document.createElement("div");
        iconElement.innerHTML = this.loadingViewIconHTML;
        if (isEnd) {
          resultElement.appendChild(iconElement.firstChild);
        } else {
          resultElement.insertBefore(
            iconElement.firstChild,
            resultElement.firstChild
          );
        }
      }
      this.setLoadingViewElement(resultElement);
      return resultElement;
    }
    /**
     * 设置LoadingView
     * @param element
     */
    setLoadingViewElement(element) {
      this.loadingViewElement = element;
    }
    /**
     * 获取LoadingView
     */
    getLoadingViewElement() {
      if (!this.loadingViewElement) {
        throw new Error("object loadingViewElement is null");
      }
      return this.loadingViewElement;
    }
    /**
     * 获取实例化的loadingView的icon
     */
    getIconElement() {
      return this.getLoadingViewElement().querySelector(
        "." + this.config.iconClassName
      );
    }
    /**
     * 显示LoadingView
     */
    show() {
      this.getLoadingViewElement().style.display = "";
    }
    /**
     * 隐藏LoadingView
     */
    hide() {
      this.getLoadingViewElement().style.display = "none";
    }
    /**
     * 显示icon
     */
    showIcon() {
      let iconElement = this.getIconElement();
      iconElement && (iconElement.style.display = "");
    }
    /**
     * 隐藏icon
     */
    hideIcon() {
      let iconElement = this.getIconElement();
      iconElement && (iconElement.style.display = "none");
    }
    /**
     * 设置文本
     * @param text 文本
     * @param withIcon 是否设置Icon图标
     * @param isEnd icon是否添加在后面
     */
    setText(text, withIcon = false, isEnd = true) {
      var _a3;
      this.getLoadingViewElement().innerHTML = `<span>${text}</span>`;
      if (withIcon) {
        let iconElement = this.getIconElement();
        if (!iconElement) {
          let divElement = document.createElement("div");
          divElement.innerHTML = this.loadingViewIconHTML;
          iconElement = divElement.firstChild;
          if (isEnd) {
            this.getLoadingViewElement().appendChild(iconElement);
          } else {
            this.getLoadingViewElement().insertBefore(
              iconElement,
              this.getLoadingViewElement().firstChild
            );
          }
        }
        iconElement.style.display = "";
      } else {
        (_a3 = this.getIconElement()) == null ? void 0 : _a3.remove();
      }
    }
    /**
     * 设置超文本
     * @param text 文本
     */
    setHTML(text) {
      this.getLoadingViewElement().innerHTML = text;
    }
    /**
     * 删除Loading元素
     */
    destory() {
      var _a3;
      (_a3 = this.getLoadingViewElement()) == null ? void 0 : _a3.remove();
      this.setLoadingViewElement();
    }
    /**
     * 删除页面中所有的loadingView
     */
    removeAll() {
      document.querySelectorAll("." + this.config.className).forEach((item) => item.remove());
    }
    /**
     * 判断Loading是否已加载到页面中
     */
    isExists() {
      return Boolean(document.querySelector(`.${this.config.className}`));
    }
    /**
     * 判断Loading是否存在Loading图标
     */
    isExistsIcon() {
      return Boolean(this.getIconElement());
    }
    /**
     * 判断Loading中的文本是否存在
     */
    isExistsText() {
      return Boolean(
        this.getLoadingViewElement().querySelector(
          `.${this.config.textClassName}`
        )
      );
    }
    /**
     * 判断页面中是否存在CSS的style
     */
    isExistsCSS() {
      return Boolean(
        document.querySelector(
          "style[data-from='loadingView'][type='text/css'][data-author='whitesev']"
        )
      );
    }
  }
  const KEY = "GM_Panel";
  const ATTRIBUTE_KEY = "data-key";
  const ATTRIBUTE_DEFAULT_VALUE = "data-default-value";
  const BaiduSearchRule = {
    defaultRule: `
// 百度健康
match-href##expert.baidu.com
// 大家还在搜
match-href##recommend_list.baidu.com&&&&match-attr##tpl##recommend_list
// 大家还在搜:隐藏的(点击后，跳出来的)
remove-child##.c-atom-afterclick-recomm-wrap
// 百家号聚合
match-href##author.baidu.com/home/
// xxx 相关 xxx
match-attr##srcid##(sigma|vid_fourfold)
// 问一问
match-attr##data-log##wenda_inquiry
// 百度游戏
match-attr##srcid##yx_entity_san
// 大家还在看
match-attr##srcid##yl_recommend_list
// 百度-智能小程序
match-attr##srcid##xcx_multi
// 百度 xx精选商品问答
match-attr##srcid##b2b_wenda_wise
// 百度爱采购
match-attr##srcid##b2b_straight_wise_vertical
// ↓会误杀有些情况下是百度知道的回答链接
// match-attr##srcid##lego_tpl
match-href##^http(s|)://b2b.baidu.com
// 百度优选
match-attr##srcid##sp_purc_san
// 全网热卖
match-attr##srcid##sp_purc_atom


// 搜索聚合
// match-attr##srcid##note_lead
// 资讯
// match-attr##srcid##realtime
// 百度有驾
// match-attr##srcid##(car_kg2_san|car_view_point_san)
// 动态(微博、百度动态...等)
// match-attr##srcid##rel_ugc_san
`,
    /**
     * 搜索规则
     */
    rule: [],
    init() {
      let localRule = this.getLocalRule();
      if (PopsPanel.getValue("baidu-search-enable-default-interception-rules")) {
        localRule = this.defaultRule + "\n\n" + localRule;
      }
      this.rule = this.parseRule(localRule);
    },
    /** 获取本地存储的自定义拦截规则 */
    getLocalRule() {
      let localRule = PopsPanel.getValue("baidu-search-interception-rules", "");
      localRule = localRule.trim();
      return localRule;
    },
    /** 设置本地存储的自定义拦截规则 */
    setLocalRule(rule) {
      PopsPanel.setValue("baidu-search-interception-rules", rule);
    },
    /** 清空规则 */
    clearLocalRule() {
      PopsPanel.deleteValue("baidu-search-interception-rules");
    },
    /**
     * 把规则进行转换
     * @param localRule
     */
    parseRule(localRule) {
      let result = [];
      function parseOneRule(ruleItem) {
        let cRuleItemSplit = ruleItem.split("##");
        if (!cRuleItemSplit.length) {
          log.error(["无效规则", ruleItem]);
          return;
        }
        let ruleName = cRuleItemSplit[0];
        let ruleNameLowerCase = ruleName.toLowerCase();
        let endRule = ruleItem.replace(ruleName + "##", "");
        if (ruleNameLowerCase === "match-href") {
          return {
            rule: ruleItem,
            mode: ruleNameLowerCase,
            matchText: new RegExp(endRule)
          };
        } else if (ruleNameLowerCase === "match-attr") {
          let otherRuleSplit = endRule.split("##");
          if (otherRuleSplit.length === 1) {
            log.error(["无效规则", ruleItem]);
            return;
          }
          let attrName = otherRuleSplit[0];
          let attrValueMatch = endRule.replace(attrName + "##", "");
          return {
            rule: ruleItem,
            mode: ruleNameLowerCase,
            attr: attrName,
            matchText: new RegExp(attrValueMatch)
          };
        } else if (ruleNameLowerCase === "contains-child" || ruleNameLowerCase === "remove-child") {
          return {
            rule: ruleItem,
            mode: ruleNameLowerCase,
            matchText: endRule
          };
        } else {
          log.error(["无效规则", ruleItem]);
        }
      }
      localRule.split("\n").forEach((ruleItem) => {
        ruleItem = ruleItem.trim();
        if (ruleItem === "") {
          return;
        }
        if (ruleItem.startsWith("//")) {
          return;
        }
        let moreRule = ruleItem.split("&&&&");
        if (moreRule.length === 1) {
          let parsedRule = parseOneRule(ruleItem);
          if (parsedRule) {
            result.push(parsedRule);
          }
        } else {
          let resultRule = [];
          moreRule.forEach((oneRule) => {
            oneRule = oneRule.trim();
            let parsedRule = parseOneRule(oneRule);
            if (parsedRule) {
              resultRule.push(parsedRule);
            }
          });
          result.push({
            mode: "more-rule",
            moreRule: resultRule
          });
        }
      });
      return result;
    },
    /**
     * 执行自定义规则，拦截返回true
     * @param element
     * @param url 真实链接
     */
    handleCustomRule(element, url) {
      function handleOneRule(ruleItem) {
        var _a3, _b;
        if (ruleItem.mode === "match-href") {
          if (typeof url === "string" && url.match(ruleItem.matchText)) {
            return true;
          }
        } else if (ruleItem.mode === "match-attr") {
          if (element.hasAttribute(ruleItem.attr) && ((_a3 = element.getAttribute(ruleItem.attr)) == null ? void 0 : _a3.match(ruleItem.matchText))) {
            return true;
          }
        } else if (ruleItem.mode === "contains-child") {
          if (element.querySelector(ruleItem.matchText)) {
            return true;
          }
        } else if (ruleItem.mode === "remove-child") {
          (_b = element.querySelector(ruleItem["matchText"])) == null ? void 0 : _b.remove();
        }
      }
      for (const ruleItem of this.rule) {
        if (ruleItem.moreRule) {
          for (const oneRule of ruleItem.moreRule) {
            if (handleOneRule(oneRule)) {
              return true;
            }
          }
        } else {
          if (handleOneRule(ruleItem)) {
            return true;
          }
        }
      }
    }
  };
  const UISwitch = function(text, key, defaultValue, clickCallBack, description) {
    let result = {
      text,
      type: "switch",
      description,
      attributes: {},
      getValue() {
        return Boolean(PopsPanel.getValue(key, defaultValue));
      },
      callback(event, value) {
        log.success(`${value ? "开启" : "关闭"} ${text}`);
        if (typeof clickCallBack === "function") {
          if (clickCallBack(event, value)) {
            return;
          }
        }
        PopsPanel.setValue(key, Boolean(value));
      },
      afterAddToUListCallBack: void 0
    };
    if (result.attributes) {
      result.attributes[ATTRIBUTE_KEY] = key;
      result.attributes[ATTRIBUTE_DEFAULT_VALUE] = Boolean(defaultValue);
    }
    return result;
  };
  const PanelSearchSettingUI = {
    id: "baidu-panel-config-search",
    title: "搜索",
    headerTitle: "百度搜索<br />m.baidu.com<br />www.baidu.com",
    isDefault() {
      return BaiduRouter.isSearch() || BaiduRouter.isSearchHome() || BaiduRouter.isSearchBh();
    },
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "主页",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "精简主页",
                    "baidu_search_home_homepage_minification",
                    true
                  )
                ]
              }
            ]
          },
          {
            text: "百度健康",
            type: "deepMenu",
            forms: [
              {
                text: "百度健康(快速问医生)",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】底部其它信息",
                    "baidu_search_headlth_shield_other_info",
                    true
                  ),
                  UISwitch(
                    "【屏蔽】底部工具栏",
                    "baidu_search_headlth_shield_bottom_toolbar",
                    true
                  )
                ]
              }
            ]
          }
        ]
      },
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "功能",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "处理搜索结果",
                    "baidu_search_handle_search_result",
                    true,
                    void 0,
                    "将百度重定向链接替换为真实地址(存在就替换，不存在的话保持原样)"
                  ),
                  UISwitch(
                    "重定向顶部的链接",
                    "baidu_search_redirect_top_link",
                    true,
                    void 0,
                    "如全部、视频、图片、贴吧、咨询..."
                  ),
                  UISwitch(
                    "重构百度搜索",
                    "baidu_search_refactoring_input_boxes",
                    true,
                    void 0,
                    "重构顶部的输入框、百度一下按钮、搜索建议框，可不出现百度App提示"
                  ),
                  UISwitch(
                    "自动点击翻页 => SearchCraft",
                    "baidu_search_automatically_click_on_the_next_page_with_searchcraft_ua",
                    false,
                    function(event, enable) {
                      if (enable && PopsPanel.getValue(
                        "baidu_search_automatically_expand_next_page"
                      )) {
                        let $click = event.target;
                        let $shadowRoot = $click.getRootNode();
                        let $checkbox = $shadowRoot.querySelector(
                          `li[${PopsPanel.$data.attributeKeyName}="baidu_search_automatically_expand_next_page"] span.pops-panel-switch__core`
                        );
                        if (!$checkbox) {
                          throw new Error("未找到互斥元素");
                        }
                        $checkbox.click();
                      }
                    },
                    "userAgent包含SearchCraft时生效，与↓【自动翻页】功能冲突"
                  ),
                  UISwitch(
                    "自动翻页",
                    "baidu_search_automatically_expand_next_page",
                    true,
                    function(event, enable) {
                      if (enable && PopsPanel.getValue(
                        "baidu_search_automatically_click_on_the_next_page_with_searchcraft_ua"
                      )) {
                        let $click = event.target;
                        let $shadowRoot = $click.getRootNode();
                        let $checkbox = $shadowRoot.querySelector(
                          `li[${PopsPanel.$data.attributeKeyName}="baidu_search_automatically_click_on_the_next_page_with_searchcraft_ua"] span.pops-panel-switch__core`
                        );
                        if (!$checkbox) {
                          throw new Error("未找到互斥元素");
                        }
                        $checkbox.click();
                      }
                    },
                    "与上面的【自动点击翻页】冲突"
                  ),
                  UISwitch(
                    "同步地址",
                    "baidu_search_sync_next_page_address",
                    false,
                    function(event, enable) {
                      if (enable) {
                        alert(
                          "开启后，且开启【自动翻页】，当自动加载到第N页时，浏览器地址也会跟随改变，刷新网页就是当前加载的第N页"
                        );
                      }
                    },
                    "需启用【自动翻页】，浏览器地址栏会自动同步当前页面的Url"
                  ),
                  UISwitch(
                    "【优化】大家还在搜",
                    "baidu_search_refactor_everyone_is_still_searching",
                    true,
                    void 0,
                    "正确新标签页打开，避免跳转至App下载页面"
                  ),
                  UISwitch(
                    "新标签页打开",
                    "baidu_search_hijack__onClick_to_blank",
                    false,
                    void 0,
                    "需开启【劫持-_onClick函数】和【处理搜索结果】且能成功劫持到该函数才会生效，否则是提取article的URL链接信息跳转"
                  )
                ]
              }
            ]
          },
          {
            text: "屏蔽/禁止",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】大家还在搜",
                    "baidu_search_blocking_everyone_is_still_searching",
                    true,
                    void 0,
                    "用于补充下面自定义拦截规则的默认配置的【大家还在搜】"
                  ),
                  UISwitch(
                    "【禁止】自动播放视频",
                    "baidu-search-blockAutomaticVideoPlayback",
                    true,
                    void 0,
                    "移除video-player元素，可能会导致某些第一个结果是智能卡片时，点击更多按钮无反应(webview/Safari)"
                  )
                ]
              }
            ]
          },
          {
            text: "劫持/拦截",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "劫持-复制",
                    "baidu_search_hijack_copy",
                    true,
                    void 0,
                    "阻止百度复制xxx到剪贴板"
                  ),
                  UISwitch(
                    "劫持-Scheme唤醒App",
                    "baidu_search_hijack_scheme",
                    true,
                    void 0,
                    "阻止唤醒调用App"
                  ),
                  UISwitch(
                    "劫持-OpenBox函数",
                    "baidu_search_hijack_openbox",
                    true,
                    void 0,
                    "优化搜索结果跳转"
                  ),
                  UISwitch(
                    "劫持-_onClick函数",
                    "baidu_search_hijack__onClick",
                    true,
                    void 0,
                    "优化搜索结果跳转"
                  ),
                  UISwitch(
                    "劫持-setTimeout",
                    "baidu_search_hijack_setTimeout",
                    true,
                    void 0,
                    "可阻止获取定位、视频播放"
                  )
                ]
              }
            ]
          },
          {
            text: "自定义拦截规则",
            type: "deepMenu",
            forms: [
              {
                text: "<a href='https://greasyfork.org/zh-CN/scripts/418349-%E7%A7%BB%E5%8A%A8%E7%AB%AF-%E7%99%BE%E5%BA%A6%E7%B3%BB%E4%BC%98%E5%8C%96#:~:text=%E5%A6%82%E4%BD%95%E8%87%AA%E5%AE%9A%E4%B9%89%E7%99%BE%E5%BA%A6%E6%90%9C%E7%B4%A2%E6%8B%A6%E6%88%AA%E8%A7%84%E5%88%99' target='_blank'>查看规则文档</><br><a href='javascript:;' class='baidu-search-shield-css-reset'>点击重置</a>",
                type: "forms",
                forms: [
                  UISwitch(
                    "启用默认拦截规则",
                    "baidu-search-enable-default-interception-rules",
                    true,
                    void 0,
                    "默认拦截规则"
                  ),
                  {
                    type: "own",
                    afterAddToUListCallBack(formConfig, rightContainerOptions) {
                      var _a3;
                      let $searchShield = (_a3 = rightContainerOptions == null ? void 0 : rightContainerOptions.formHeaderDivElement) == null ? void 0 : _a3.querySelector(
                        "a.baidu-search-shield-css-reset"
                      );
                      domutils.on($searchShield, "click", void 0, () => {
                        BaiduSearchRule.clearLocalRule();
                        let $textArea = rightContainerOptions.ulElement.querySelector(
                          "textarea"
                        );
                        $textArea.value = "";
                        Qmsg.success("已重置");
                      });
                    },
                    getLiElementCallBack(liElement) {
                      let $textAreaContainer = domutils.createElement("div", {
                        className: "pops-panel-textarea baidu-search-interception-rule",
                        innerHTML: `
									<style>
									.baidu-search-interception-rule{
										width: 100%;
									}
									.baidu-search-interception-rule textarea{
										min-height: 3.6rem;
										white-space: pre;
										border-radius: 0 !important;
									}
									</style>
									<textarea></textarea>
									`
                      });
                      let $textArea = $textAreaContainer.querySelector(
                        "textarea"
                      );
                      let customRule = BaiduSearchRule.getLocalRule();
                      $textArea.value = customRule;
                      liElement.appendChild($textAreaContainer);
                      domutils.on(
                        $textArea,
                        ["input", "propertychange"],
                        void 0,
                        utils.debounce(function() {
                          BaiduSearchRule.setLocalRule($textArea.value);
                        }, 100)
                      );
                      return liElement;
                    }
                  }
                ]
              }
            ]
          },
          {
            text: "自定义样式",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  {
                    type: "own",
                    getLiElementCallBack(liElement) {
                      let $textAreaContainer = domutils.createElement("div", {
                        className: "pops-panel-textarea baidu-search-user-style",
                        innerHTML: `
											<style>
											.baidu-search-user-style{
												width: 100%;
											}
											.baidu-search-user-style textarea{
												min-height: 3.6rem;
												white-space: pre;
												border-radius: 0 !important;
											}
											</style>
											<textarea></textarea>
											`
                      });
                      let $textArea = $textAreaContainer.querySelector(
                        "textarea"
                      );
                      $textArea.value = PopsPanel.getValue(
                        "baidu-search-user-style",
                        ""
                      );
                      liElement.appendChild($textAreaContainer);
                      domutils.on(
                        $textArea,
                        ["input", "propertychange"],
                        void 0,
                        utils.debounce(function() {
                          PopsPanel.setValue(
                            "baidu-search-user-style",
                            $textArea.value
                          );
                        }, 100)
                      );
                      return liElement;
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const PanelBaiJiaHaoSettingUI = {
    id: "baidu-panel-config-baijiahao",
    title: "百家号",
    headerTitle: "百家号<br />baijiahao.baidu.com<br />mbd.baidu.com",
    isDefault() {
      return BaiduRouter.isBaiJiaHao() || BaiduRouter.isMbd();
    },
    scrollToDefaultView: true,
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "百家号",
            description: "baijiahao.baidu.com",
            type: "deepMenu",
            forms: [
              {
                text: "屏蔽",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】推荐文章",
                    "baijiahao_shield_recommended_article",
                    true
                  ),
                  UISwitch(
                    "【屏蔽】用户评论",
                    "baijiahao_shield_user_comment",
                    false
                  ),
                  UISwitch(
                    "【屏蔽】底部悬浮工具栏",
                    "baijiahao_shield_user_comment_input_box",
                    false
                  )
                ]
              },
              {
                text: "劫持/拦截",
                type: "forms",
                forms: [
                  UISwitch(
                    "劫持-唤醒App",
                    "baijiahao_hijack_wakeup",
                    true,
                    void 0,
                    "阻止唤醒调用App"
                  ),
                  UISwitch(
                    "劫持-iframe唤醒App",
                    "baidu_baijiahao_hijack_iframe",
                    true,
                    void 0,
                    "阻止唤醒调用App"
                  ),
                  UISwitch(
                    "劫持-OpenBox函数",
                    "baidu_baijiahao_hijack_openbox",
                    true
                  )
                ]
              }
            ]
          },
          {
            text: "百家号",
            type: "deepMenu",
            description: "mbd.baidu.com",
            forms: [
              {
                text: "屏蔽",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】精彩评论",
                    "baidu_mbd_block_exciting_comments",
                    false
                  ),
                  UISwitch(
                    "【屏蔽】精彩推荐",
                    "baidu_mbd_block_exciting_recommendations",
                    false
                  ),
                  UISwitch(
                    "【屏蔽】底部工具栏",
                    "baidu_mbd_shield_bottom_toolbar",
                    false
                  )
                ]
              },
              {
                text: "功能",
                type: "forms",
                forms: [
                  UISwitch(
                    "伪装成lite baiduboxapp",
                    "baidu_mbd_camouflage_lite_baiduboxapp",
                    true,
                    void 0,
                    "可以优化浏览体验"
                  )
                ]
              },
              {
                text: "劫持/拦截",
                type: "forms",
                forms: [
                  UISwitch(
                    "拦截-唤醒App",
                    "baidu_mbd_hijack_wakeup",
                    true,
                    void 0,
                    "阻止唤醒调用App"
                  ),
                  UISwitch(
                    "拦截-iframe唤醒App",
                    "baidu_mbd_hijack_iframe",
                    true,
                    void 0,
                    "阻止唤醒调用App"
                  ),
                  UISwitch(
                    "劫持-BoxJSBefore函数",
                    "baidu_mbd_hijack_BoxJSBefore",
                    true,
                    void 0,
                    "阻止唤醒调用App"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const VueUtils = {
    /**
     * 获取vue实例
     * @param element
     * @returns
     */
    getVue(element) {
      if (element == null) {
        return;
      }
      return element["__vue__"] || element["__Ivue__"] || element["__IVue__"];
    },
    /**
     * 等待vue属性并进行设置
     */
    waitVuePropToSet($target, needSetList) {
      function getTarget() {
        let __target__ = null;
        if (typeof $target === "string") {
          __target__ = document.querySelector($target);
        } else if (typeof $target === "function") {
          __target__ = $target();
        } else if ($target instanceof HTMLElement) {
          __target__ = $target;
        }
        return __target__;
      }
      needSetList.forEach((needSetOption) => {
        if (typeof needSetOption.msg === "string") {
          log.info(needSetOption.msg);
        }
        function checkVue() {
          let target = getTarget();
          if (target == null) {
            return false;
          }
          let vueObj = VueUtils.getVue(target);
          if (vueObj == null) {
            return false;
          }
          let needOwnCheck = needSetOption.check(vueObj);
          return Boolean(needOwnCheck);
        }
        utils.waitVueByInterval(
          () => {
            return getTarget();
          },
          checkVue,
          250,
          1e4
        ).then((result) => {
          if (!result) {
            return;
          }
          let target = getTarget();
          let vueObj = VueUtils.getVue(target);
          if (vueObj == null) {
            return;
          }
          needSetOption.set(vueObj);
        });
      });
    }
  };
  const TieBaApi = {
    /**
     * 根据un|portrait获取个人主页信息
     *
     * /home/get/panel
     * @param userInfo
     */
    async getUserHomeInfo(userInfo) {
      let searchParams = "";
      if (userInfo["un"]) {
        searchParams = `un=${userInfo["un"]}`;
      } else if (userInfo["portrait"]) {
        searchParams = `portrait=${userInfo["portrait"]}`;
      } else {
        throw new TypeError("userInfo.un|userInfo.portrait is undefined");
      }
      let getResp = await httpx.get(
        `https://tieba.baidu.com/home/get/panel?ie=utf-8&${searchParams}`,
        {
          headers: {
            "User-Agent": utils.getRandomPCUA(),
            Host: "tieba.baidu.com",
            Referer: "https://tieba.baidu.com/"
          }
        }
      );
      if (!getResp.status) {
        return;
      }
      let data = utils.toJSON(getResp.data.responseText);
      if (data["no"] !== 0) {
        return;
      }
      return data.data;
    },
    /**
     * 根据un获取帖子信息
     *
     * /home/post
     * @param un 用户的un(userName)
     * @param [pn=1] 第xx页
     */
    async getUserPosts(un, pn = 1) {
      let getResp = await httpx.get(
        `https://tieba.baidu.com/home/post?un=${un}&is_ajax=1&lp=&pn=${pn}`,
        {
          fetch: true,
          headers: {
            "User-Agent": utils.getRandomPCUA()
          }
        }
      );
      if (!getResp.status) {
        return;
      }
      let data = utils.toJSON(getResp.data.responseText);
      if (data.no != 0) {
        return;
      }
      if (utils.isNull(data.data.content)) {
        return;
      }
      let result = {
        has_more: Boolean(data.data.page.has_more),
        data: []
      };
      let contentDoc = domutils.parseHTML(data.data.content, true, true);
      Array.from(contentDoc.querySelectorAll(".list_item")).forEach(
        (liElement) => {
          let postInfo = {
            url: liElement.querySelector("a.list_item_link").href,
            title: liElement.querySelector(".post_list_item_title").innerHTML,
            content: liElement.querySelector(".post_abstract_text").innerHTML,
            forumName: liElement.querySelector(
              ".post_list_item_info_forum"
            ).innerText.replace(/吧$/, ""),
            createTime: liElement.querySelector(
              ".post_list_item_info_time"
            ).innerText,
            replyNum: parseInt(
              liElement.querySelector(
                ".post_item_info_reply_icon"
              ).innerText
            ),
            mediaList: []
          };
          if (isNaN(postInfo.replyNum)) {
            postInfo.replyNum = 0;
          }
          if (liElement.querySelector(".thread_body_media")) {
            postInfo.mediaList.concat(
              Array.from(
                liElement.querySelectorAll(
                  ".thread_body_media img"
                )
              ).map((item) => item.src)
            );
          }
          result.data.push(postInfo);
        }
      );
      return result;
    },
    /**
     * 根据un获取用户信息
     * @param un 用户的un(userName)，自动进行gbk编码
     */
    async getUserJSON(un) {
      let gbkEncoder = new utils.GBKEncoder();
      un = gbkEncoder.encode(un);
      let getResp = await httpx.get(
        `https://tieba.baidu.com/i/sys/user_json?un=${un}`,
        {
          headers: {
            "User-Agent": utils.getRandomPCUA(),
            Host: "tieba.baidu.com",
            Referer: "https://tieba.baidu.com/"
          }
        }
      );
      if (!getResp.status) {
        return;
      }
      let data = utils.toJSON(getResp.data.responseText);
      return data;
    },
    /**
     * 根据uid获取用户信息
     *
     * 注意：该请求是http非安全请求
     * @param uid
     * @returns
     */
    async getChatUserInfo(uid) {
      let getResp = await httpx.get(
        `http://tieba.baidu.com/im/pcmsg/query/getUserInfo?chatUid=${uid}`,
        {
          headers: {
            "User-Agent": utils.getRandomPCUA(),
            Host: "tieba.baidu.com",
            Referer: "https://tieba.baidu.com/"
          }
        }
      );
      if (!getResp.status) {
        return;
      }
      let data = utils.toJSON(getResp.data.responseText);
      if (data.errno !== 0) {
        return;
      }
      return data.chatUser;
    },
    /**
     * 签到吧
     *
     * /sign/add
     * @param forumName 吧名
     * @param tbs 应该是用户token
     * @returns
     */
    async forumSign(forumName, tbs) {
      log.success(["发送签到请求→", forumName, tbs]);
      let postResp = await httpx.post("https://tieba.baidu.com/sign/add", {
        data: `ie=utf-8&kw=${forumName}&tbs=${tbs}`,
        responseType: "json",
        headers: {
          Accept: "application/json, text/javascript, */*; q=0.01",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          Host: "tieba.baidu.com",
          Origin: "https://tieba.baidu.com",
          "User-Agent": utils.getRandomPCUA(),
          Referer: "https://tieba.baidu.com/p/",
          "X-Requested-With": "XMLHttpRequest"
        }
      });
      log.success(postResp);
      if (!postResp.status) {
        return;
      }
      let data = utils.toJSON(postResp.data.responseText);
      log.success(data);
      return data;
    },
    /**
     * 获取用户所有关注的吧
     * 需要cookie
     * 如果未登录，那么会获取到空列表
     *
     * /mo/q/sug
     */
    async getUserAllLikeForum() {
      let getResp = await httpx.get(
        "https://tieba.baidu.com/mo/q/sug?query=&is_ajax=1&sug=1",
        {
          headers: {
            Accept: "application/json",
            Host: "tieba.baidu.com",
            Referer: "https://tieba.baidu.com/i/i/forum",
            "User-Agent": utils.getRandomAndroidUA()
          }
        }
      );
      log.success(getResp);
      if (!getResp.status) {
        return;
      }
      let data = utils.toJSON(
        getResp.data.responseText
      );
      log.success(data);
      return data["data"]["like_forum"];
    },
    /**
     * 获取吧的tbs值
     */
    async getForumTbs(forumName) {
      let getResp = await httpx.get(
        `https://tieba.baidu.com/f?kw=${forumName}&ie=utf-8`,
        {
          headers: {
            Host: "tieba.baidu.com",
            Referer: `https://tieba.baidu.com/f?kw=${forumName}&ie=utf-8`
          }
        }
      );
      if (!getResp.status) {
        return;
      }
      let PageData = getResp.data.responseText.match(
        /var[\s]*PageData[\s\S]*'tbs'.*"(.+)"/
      );
      if (!PageData) {
        return;
      }
      return PageData[1];
    },
    /**
     * 获取帖子内的图片
     *
     * /photo/bw/picture/guide
     * @param forumName
     * @param tid
     * @param see_lz
     * @param from_page
     * @param alt
     * @param next
     * @param prev
     * @returns
     */
    async getPictureGuide(forumName, tid, see_lz = 0, from_page = 0, alt = "jview", next = 1e3, prev = 1e3) {
      let getResp = await httpx.get(
        `https://tieba.baidu.com/photo/bw/picture/guide?kw=${forumName}&tid=${tid}&see_lz=${see_lz}&from_page=${from_page}&alt=${alt}&next=${next}&prev=${prev}&_=${Date.now()}`,
        {
          headers: {
            Accept: "*/*",
            Host: "tieba.baidu.com",
            "User-Agent": utils.getRandomPCUA()
          },
          responseType: "json"
        }
      );
      if (!getResp.status) {
        return;
      }
      let data = utils.toJSON(
        getResp.data.responseText
      );
      if (data["no"] === 0 || data["error"] === "sucess!") {
        return data["data"];
      }
    }
  };
  const TiebaUrlApi = {
    /**
     * 根据portrait获取用户头像
     */
    getUserAvatar(portrait) {
      let authorImgId = "6LZ1dD3d1sgCo2Kml5_Y_D3";
      return `https://gss0.bdstatic.com/${authorImgId}/sys/portrait/item/${portrait}`;
    },
    /**
     * 根据tid/pid获取帖子链接
     * @param id
     */
    getPost(id) {
      return `https://tieba.baidu.com/p/${id}`;
    },
    /**
     * 获取搜索综合的地址
     * @param searchText
     */
    getHybridSearch(searchText) {
      return `https://tieba.baidu.com/mo/q/hybrid/search?keyword=${searchText}`;
    },
    /**
     * 获取贴吧表情图片
     * @param pathName 原static.baidu.com的pathname
     * @returns
     */
    getImageSmiley(pathName) {
      if (pathName.startsWith("/")) {
        pathName = pathName.replace(/^\//, "");
      }
      return `https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK/${pathName}`;
    },
    /**
     * 获取吧的链接
     * @param kw 吧名
     * @returns
     */
    getForum(kw) {
      return "https://tieba.baidu.com/f?kw=" + kw;
    },
    /**
     * 获取发帖页面的链接
     * @param fname 吧名
     * @param fid 吧id
     * @param tbs tbs值
     */
    getPostPage(fname, fid, tbs) {
      return `https://tieba.baidu.com/h5activity/post?fname=${fname}&fid=${fid}&tbs=${tbs}`;
    },
    /**
     * 进吧
     */
    getGoToForum() {
      return "https://tieba.baidu.com/index/tbwise/forum";
    },
    /**
     * 我的
     */
    getMine() {
      return "https://tieba.baidu.com/index/tbwise/mine";
    },
    /**
     * 获取登录链接
     * @param [from=window.location.href] 想要登录成功后重定向的地址，默认是当前地址
     */
    getLoginUrl(from = window.location.href) {
      return "https://wappass.baidu.com/passport?login&tpl=tb&u=" + encodeURIComponent(from);
    }
  };
  const TiebaPageDataApi = {
    /**
     * 从页面中获取forum的id
     */
    getForumId() {
      var _a3, _b, _c;
      let dataBannerInfoStr = (_a3 = document.querySelector(".recommend-item")) == null ? void 0 : _a3.getAttribute("data-banner-info");
      let dataBannerInfo = utils.toJSON(dataBannerInfoStr);
      if (dataBannerInfo["forum_id"]) {
        return dataBannerInfo["forum_id"];
      } else {
        return (_c = (_b = VueUtils.getVue(document.querySelector(".app-view"))) == null ? void 0 : _b.forum) == null ? void 0 : _c.id;
      }
    }
  };
  const UIButton = function(text, description, buttonText, buttonIcon, buttonIsRightIcon, buttonIconIsLoading, buttonType, clickCallBack) {
    let result = {
      text,
      type: "button",
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
      afterAddToUListCallBack: void 0
    };
    return result;
  };
  const PanelTieBaSettingUI = {
    id: "baidu-panel-config-tieba",
    title: "贴吧",
    headerTitle: "百度贴吧<br />tieba.baidu.com<br />www.tieba.com<br />...等",
    isDefault() {
      return BaiduRouter.isTieBa();
    },
    scrollToDefaultView: true,
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "首页",
            type: "deepMenu",
            forms: [
              {
                text: "功能",
                type: "forms",
                forms: [
                  UISwitch(
                    "新标签页打开",
                    "baidu_tieba_index_openANewTab",
                    false,
                    void 0,
                    "新标签页打开帖子"
                  )
                ]
              }
            ]
          },
          {
            text: "话题热议",
            type: "deepMenu",
            forms: [
              {
                text: "功能",
                type: "forms",
                forms: [
                  UISwitch(
                    "重定向xx吧跳转",
                    "baidu_tieba_topic_redirect_jump",
                    true,
                    void 0,
                    "点击帖子直接跳转"
                  ),
                  UISwitch(
                    "新标签页打开",
                    "baidu_tieba_topic_openANewTab",
                    false,
                    void 0,
                    "新标签页打开帖子"
                  )
                ]
              }
            ]
          },
          {
            text: "搜索综合",
            type: "deepMenu",
            forms: [
              {
                text: "功能",
                type: "forms",
                forms: [
                  UISwitch(
                    "新标签页打开",
                    "baidu_tieba_hybrid_search_openANewTab",
                    false,
                    void 0,
                    "新标签页打开帖子"
                  )
                ]
              }
            ]
          },
          {
            text: "吧内",
            type: "deepMenu",
            forms: [
              {
                text: "功能",
                type: "forms",
                forms: [
                  UISwitch(
                    "记住当前选择的看帖排序",
                    "baidu_tieba_remember_user_post_sort",
                    true,
                    void 0,
                    "记住选择的发布/回复"
                  ),
                  UISwitch(
                    "过滤重复帖子",
                    "baidu_tieba_filterDuplicatePosts",
                    false,
                    void 0,
                    "过滤掉重复id的帖"
                  ),
                  UISwitch(
                    "解除签到限制",
                    "baidu_tieba_removeForumSignInLimit",
                    true,
                    void 0,
                    "在登录情况下可点击签到"
                  ),
                  UISwitch(
                    "新标签页打开",
                    "baidu_tieba_openANewTab",
                    false,
                    void 0,
                    "新标签页打开帖子"
                  )
                ]
              }
            ]
          },
          {
            text: "帖内",
            type: "deepMenu",
            forms: [
              {
                text: "功能",
                type: "forms",
                forms: [
                  UISwitch(
                    "楼中楼回复弹窗后退手势优化",
                    "baidu_tieba_lzl_ban_global_back",
                    false,
                    function(event, enable) {
                      if (enable) {
                        alert(
                          "开启后，当在手机浏览器中使用屏幕左滑回退网页操作或者点击浏览器的回退到上一页按钮，不会触发回退上一页操作，而是会关闭当前查看的楼中楼的弹窗。注：某些浏览器不适用"
                        );
                      }
                    },
                    "使浏览器后退变成关闭楼中楼弹窗"
                  ),
                  UISwitch(
                    "新增滚动到顶部按钮",
                    "baidu_tieba_add_scroll_top_button_in_forum",
                    true,
                    void 0,
                    "向下滚动的距离>页面高度*2就会出现按钮"
                  ),
                  UISwitch(
                    "优化查看评论",
                    "baidu_tieba_optimize_see_comments",
                    true,
                    void 0,
                    "可以查看更多的评论"
                  ),
                  UISwitch(
                    "优化评论工具栏",
                    "baidu_tieba_optimize_comments_toolbar",
                    true,
                    void 0,
                    "可以进行评论区回复/楼中楼回复，需开启【优化查看评论】"
                  ),
                  UISwitch(
                    "优化图片点击预览",
                    "baidu_tieba_optimize_image_preview",
                    true,
                    void 0,
                    "使用Viewer查看图片"
                  ),
                  UISwitch(
                    "强制查看被屏蔽的帖子",
                    "baidu_tieba_repairErrorThread",
                    false,
                    function(event, enable) {
                      if (enable) {
                        window.alert(
                          "开启后，如果查看的帖子显示【贴子不存在或者已被删除】或【该帖子需要去app内查看哦】，且该帖子在PC端可以查看，那么该修复可以生效。"
                        );
                      }
                    },
                    "PC端可以查看帖子该功能才能正确生效"
                  ),
                  UISwitch(
                    "点击楼主头像正确跳转主页",
                    "baidu_tieba_clickOnTheOwnerSAvatarToCorrectlyRedirectToTheHomepage",
                    true,
                    void 0,
                    "点击头像正确跳转至用户主页"
                  ),
                  UISwitch(
                    "屏蔽机器人",
                    "baidu_tieba_shield_commnets_baodating",
                    true,
                    void 0,
                    "屏蔽【贴吧包打听】机器人，回答的评论都是牛头不对马嘴的"
                  ),
                  UISwitch(
                    "显示用户当前吧的等级头衔",
                    "baidu_tieba_show_forum_level",
                    true,
                    void 0,
                    "只对评论和楼中楼的用户进行显示处理"
                  )
                ]
              }
            ]
          }
        ]
      },
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "账号功能",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UIButton(
                    "签到所有关注的吧",
                    void 0,
                    "签到",
                    void 0,
                    void 0,
                    false,
                    "default",
                    async () => {
                      function getLoadingHTML(index, maxIndex, forumName, text, signText) {
                        return `
							<div>进度：${index}/${maxIndex}</div>
							<div>吧名：${forumName}</div>
							<div>信息：${text}</div>
							${""}
							`;
                      }
                      Qmsg.info("正在获取所有关注吧");
                      let likeForumList = await TieBaApi.getUserAllLikeForum();
                      if (!likeForumList) {
                        return;
                      }
                      if (!likeForumList.length) {
                        Qmsg.error("该账号尚未关注帖子");
                        return;
                      }
                      let isStop = false;
                      let loading = Qmsg.loading(
                        getLoadingHTML(
                          1,
                          likeForumList.length,
                          likeForumList[0].forum_name,
                          "正在获取tbs"
                        ),
                        {
                          showClose: true,
                          onClose() {
                            isStop = true;
                          }
                        }
                      );
                      for (let index = 0; index < likeForumList.length; index++) {
                        if (isStop) {
                          Qmsg.info("中断");
                          return;
                        }
                        let likeForum = likeForumList[index];
                        loading.setHTML(
                          getLoadingHTML(
                            index + 1,
                            likeForumList.length,
                            likeForum.forum_name,
                            "正在获取tbs"
                          )
                        );
                        let tbs = await TieBaApi.getForumTbs(
                          likeForum.forum_name
                        );
                        if (!tbs) {
                          Qmsg.info("2秒后切换至下一个");
                          await utils.sleep(2e3);
                          continue;
                        }
                        Qmsg.success(`tbs ===> ${tbs}`);
                        loading.setHTML(
                          getLoadingHTML(
                            index + 1,
                            likeForumList.length,
                            likeForum.forum_name,
                            "发送签到请求..."
                          )
                        );
                        let signResult = await TieBaApi.forumSign(
                          likeForum.forum_name,
                          tbs
                        );
                        if (!signResult) {
                          Qmsg.info("2秒后切换至下一个");
                          await utils.sleep(2e3);
                          continue;
                        }
                        if (typeof signResult["data"] === "object") {
                          loading.setHTML(
                            getLoadingHTML(
                              index + 1,
                              likeForumList.length,
                              likeForum.forum_name,
                              `今日本吧第${signResult["data"]["finfo"]["current_rank_info"]["sign_count"]}个签到`
                            )
                          );
                        } else {
                          Qmsg.error(signResult["error"]);
                        }
                        Qmsg.info("2秒后切换至下一个");
                        await utils.sleep(2e3);
                      }
                      Qmsg.success(`执行签到 ${likeForumList.length} 个贴吧完毕`);
                      loading.close();
                    }
                  )
                ]
              }
            ]
          },
          {
            text: "通用",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "检测骨架屏",
                    "baidu_tieba_checkSkeleton",
                    true,
                    void 0,
                    "当页面加载完毕后检测到还是骨架屏，将会自动刷新页面"
                  ),
                  UISwitch(
                    "自动重定向至主域名",
                    "baidu_tieba_autoJumpToMainHost",
                    false,
                    void 0,
                    "域名为nba.baidu.com、static.tieba.baidu.com...等时自动重定向至tieba.baidu.com"
                  )
                ]
              }
            ]
          },
          {
            text: "搜索功能",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "启用",
                    "baidu_tieba_add_search",
                    true,
                    void 0,
                    "在贴内和吧内右上角添加搜索按钮"
                  ),
                  UISwitch(
                    "获取详细信息",
                    "baidu_tieba_search_opt_user_info",
                    true,
                    void 0,
                    "将搜索结果的【用户名/头像】替换成请求获取的【用户名/头像】"
                  ),
                  UISwitch(
                    "使用【搜索综合】",
                    "baidu_tieba_use_hybrid_search",
                    false,
                    void 0,
                    "使用贴吧移动端的搜索功能"
                  )
                ]
              }
            ]
          },
          {
            text: "屏蔽",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】评论输入框",
                    "baidu-tieba-blockCommentInput",
                    false,
                    void 0,
                    "屏蔽元素"
                  )
                ]
              }
            ]
          },
          {
            text: "劫持/拦截",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "劫持-唤醒App",
                    "baidu_tieba_hijack_wake_up",
                    false,
                    void 0,
                    "阻止唤醒调用App"
                  ),
                  UISwitch(
                    "伪装客户端已调用",
                    "baidu_tieba_clientCallMasquerade",
                    true,
                    void 0,
                    "阻止弹窗"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const PanelWenKuSettingUI = {
    id: "baidu-panel-config-wenku",
    title: "文库",
    headerTitle: "百度文库<br />wk.baidu.com<br />tanbi.baidu.com",
    isDefault: BaiduRouter.isWenKu,
    scrollToDefaultView: true,
    forms: [
      {
        text: "屏蔽",
        type: "forms",
        forms: [
          UISwitch("【屏蔽】会员精选", "baidu_wenku_block_member_picks", true),
          UISwitch("【屏蔽】APP精选", "baidu_wenku_blocking_app_featured", true),
          UISwitch(
            "【屏蔽】相关文档",
            "baidu_wenku_blocking_related_documents",
            false
          ),
          UISwitch(
            "【屏蔽】底部工具栏",
            "baidu_wenku_blocking_bottom_toolbar",
            false
          ),
          UISwitch("【屏蔽】下一篇按钮", "baidu_wenku_shield_next_btn", false),
          UISwitch(
            "【屏蔽】文档助手",
            "baidu_wenku_blockDocumentAssistant",
            false,
            void 0,
            "右下角的悬浮按钮"
          )
        ]
      }
    ]
  };
  const PanelJingYanSettingUI = {
    id: "baidu-panel-config-jingyan",
    title: "经验",
    headerTitle: "百度经验<br />jingyan.baidu.com",
    isDefault() {
      return BaiduRouter.isJingYan();
    },
    scrollToDefaultView: true,
    forms: []
  };
  const PanelBaiKeSettingUI = {
    id: "baidu-panel-config-baike",
    title: "百科",
    headerTitle: "百度百科<br />baike.baidu.com<br />wapbaike.baidu.com",
    isDefault() {
      return BaiduRouter.isBaiKe();
    },
    scrollToDefaultView: true,
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "他说",
            description: "/tashuo",
            type: "deepMenu",
            forms: [
              {
                text: "屏蔽",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】底部广告",
                    "baidu_baike_tashuo_remove_bottom_ad",
                    true
                  )
                ]
              }
            ]
          }
        ]
      },
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "劫持",
            type: "deepMenu",
            forms: [
              {
                text: "劫持Box",
                type: "forms",
                forms: [
                  UISwitch(
                    "isBox",
                    "baidu-baike-Box-isBox",
                    true,
                    void 0,
                    "Box.isBox和Box.$isBox强制返回true"
                  ),
                  UISwitch(
                    "isLiteBox",
                    "baidu-baike-Box-isLiteBox",
                    false,
                    void 0,
                    "Box.isLiteBox和Box.$isLiteBox强制返回true"
                  ),
                  UISwitch(
                    "isInfoBox",
                    "baidu-baike-Box-isInfoBox",
                    false,
                    void 0,
                    "Box.isInfoBox和Box.$isInfoBox强制返回true"
                  ),
                  UISwitch(
                    "isIOS",
                    "baidu-baike-Box-isIOS",
                    false,
                    void 0,
                    "Box.isIOS和Box.$isIOS强制返回true"
                  ),
                  UISwitch(
                    "isAndroid",
                    "baidu-baike-Box-isAndroid",
                    false,
                    void 0,
                    "Box.isAndroid和Box.$isAndroid强制返回true"
                  ),
                  UISwitch(
                    "android.invokeApp",
                    "baidu-baike-Box-android.invokeApp",
                    true,
                    void 0,
                    "Box.android.invokeApp()置空"
                  ),
                  UISwitch(
                    "android.invokeLiteApp",
                    "baidu-baike-Box-android.invokeLiteApp",
                    true,
                    void 0,
                    "Box.android.invokeLiteApp()置空"
                  ),
                  UISwitch(
                    "ios.invokeApp",
                    "baidu-baike-Box-ios.invokeApp",
                    true,
                    void 0,
                    "Box.ios.invokeApp()置空"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const PanelZhiDaoSettingUI = {
    id: "baidu-panel-config-zhidao",
    title: "知道",
    headerTitle: "百度知道<br />zhidao.baidu.com",
    isDefault() {
      return BaiduRouter.isZhiDao();
    },
    scrollToDefaultView: true,
    forms: [
      {
        text: "屏蔽",
        type: "forms",
        forms: [
          UISwitch(
            "【屏蔽】推荐更多精彩内容",
            "baidu_zhidao_block_recommend_more_exciting_content",
            true
          ),
          UISwitch("【屏蔽】相关问题", "baidu_zhidao_block_related_issues", true),
          UISwitch("【屏蔽】其他回答", "baidu_zhidao_block_other_answers", false),
          UISwitch(
            "【屏蔽】顶部浮动工具栏",
            "baidu_zhidao_shield_top_fixed_toolbar",
            false
          )
        ]
      }
    ]
  };
  const PanelFanYiSettingUI = {
    id: "baidu-panel-config-fanyi",
    title: "翻译",
    headerTitle: "百度翻译<br />fanyi.baidu.com<br />fanyi-app.baidu.com",
    isDefault() {
      return BaiduRouter.isFanYi() || BaiduRouter.isFanYiApp();
    },
    scrollToDefaultView: true,
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "App",
            type: "deepMenu",
            description: "fanyi-app",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】专栏信息",
                    "baidu_fanyi_app_shield_column_information",
                    false
                  ),
                  UISwitch(
                    "【屏蔽】为你推荐",
                    "baidu_fanyi_app_shield_recommended_for_you",
                    false
                  ),
                  UISwitch(
                    "【屏蔽】我要跟读",
                    "baidu_fanyi_app_shield_i_need_to_follow_along",
                    false
                  )
                ]
              }
            ]
          }
        ]
      },
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "功能",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch("自动聚焦输入框", "baidu_fanyi_auto_focus", true)
                ]
              }
            ]
          },
          {
            text: "屏蔽",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】底部推荐",
                    "baidu_fanyi_recommended_shielding_bottom",
                    true
                  ),
                  UISwitch(
                    "【屏蔽】底部其它",
                    "baidu_fanyi_other_shielding_bottom",
                    true
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const PanelImageSettingUI = {
    id: "baidu-panel-config-image",
    title: "图片",
    headerTitle: "百度经验<br />image.baidu.com",
    isDefault() {
      return BaiduRouter.isJingYan();
    },
    scrollToDefaultView: true,
    forms: []
  };
  const PanelMapSettingUI = {
    id: "baidu-panel-config-map",
    title: "地图",
    headerTitle: "百度地图<br />map.baidu.com",
    isDefault() {
      return BaiduRouter.isMap();
    },
    scrollToDefaultView: true,
    forms: [
      {
        text: "劫持/拦截",
        type: "forms",
        forms: [
          UISwitch(
            "拦截-唤醒App",
            "baidu_map_hijack_wakeup",
            true,
            void 0,
            "阻止唤醒调用App"
          )
        ]
      }
    ]
  };
  const PanelXueSettingUI = {
    id: "baidu-panel-config-xue",
    title: "知了好学",
    headerTitle: "知了好学<br />xue.baidu.com",
    isDefault() {
      return BaiduRouter.isJingYan();
    },
    scrollToDefaultView: true,
    forms: []
  };
  const PanelAiQiChaSettingUI = {
    id: "baidu-panel-config-aiqicha",
    title: "爱企查",
    headerTitle: "爱企查<br />aiqicha.baidu.com",
    isDefault() {
      return BaiduRouter.isAiQiCha();
    },
    scrollToDefaultView: true,
    forms: [
      {
        text: "屏蔽",
        type: "forms",
        forms: [
          UISwitch("【屏蔽】轮播图", "baidu_aiqicha_shield_carousel", true),
          UISwitch(
            "【屏蔽】行业热点新闻",
            "baidu_aiqicha_shield_industry_host_news",
            true
          )
        ]
      }
    ]
  };
  const PanelPosSettingUI = {
    id: "baidu-panel-config-pos",
    title: "网盟",
    headerTitle: "百度网盟推广<br />pos.baidu.com",
    isDefault() {
      return BaiduRouter.isPos();
    },
    scrollToDefaultView: true,
    forms: []
  };
  const PanelHaoKanSettingUI = {
    id: "baidu-panel-config-haokan",
    title: "好看视频",
    headerTitle: "好看视频<br />haokan.baidu.com",
    isDefault() {
      return BaiduRouter.isHaoKan();
    },
    scrollToDefaultView: true,
    forms: [
      {
        text: "屏蔽",
        type: "forms",
        forms: [
          UISwitch("【屏蔽】猜你喜欢", "baidu_haokan_shield_may_also_like", true),
          UISwitch(
            "【屏蔽】今日热播榜单",
            "baidu_haokan_shield_today_s_hot_list",
            true
          ),
          UISwitch(
            "【屏蔽】右侧工具栏",
            "baidu_haokan_shield_right_video_action",
            true
          )
        ]
      },
      {
        text: "功能",
        type: "forms",
        forms: [
          UISwitch(
            "播放视频自动进入全屏",
            "baidu_haokan_play_video_and_automatically_enter_full_screen",
            false
          )
        ]
      },
      {
        text: "劫持/拦截",
        type: "forms",
        forms: [
          UISwitch(
            "拦截-唤醒App",
            "baidu_haokan_hijack_wakeup",
            true,
            void 0,
            "阻止唤醒调用App"
          )
        ]
      }
    ]
  };
  const PanelGraphSettingUI = {
    id: "baidu-panel-config-graph",
    title: "识图",
    headerTitle: "百度识图<br />graph.baidu.com",
    isDefault() {
      return BaiduRouter.isGraph();
    },
    scrollToDefaultView: true,
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UISwitch(
            "【重构】识图一下",
            "baidu-graph-repairHomeRecognitionPicture",
            true,
            void 0,
            "重构主页的识图一下，就可以直接点击上传图片进行搜索"
          ),
          UISwitch(
            "【重构】搜索按钮",
            "baidu-graph-repairSearchButton",
            true,
            void 0,
            "重构主页的往下滑动右下角出现的搜索图标按钮"
          ),
          UISwitch(
            "【重构】重拍",
            "baidu-graph-repairRetakeButton",
            true,
            void 0,
            "在已搜索出相关结果的界面中的重构【重拍】按钮"
          ),
          UISwitch(
            "修复搜索无结果",
            "baidu-graph-repairSearchNoResult",
            true,
            void 0,
            "如果出现识图没结果，重新识别，可能是因为后面参数多了tpl_from=pc的问题"
          )
        ]
      }
    ]
  };
  const PanelPanSettingUI = {
    id: "baidu-panel-config-pan",
    title: "网盘",
    headerTitle: "百度网盘<br />pan.baidu.com",
    isDefault() {
      return BaiduRouter.isPan();
    },
    scrollToDefaultView: true,
    forms: []
  };
  const PanelYiYanSettingUI = {
    id: "baidu-panel-config-yiyan",
    title: "文心一言",
    headerTitle: "文心一言<br />yiyan.baidu.com",
    isDefault() {
      return BaiduRouter.isYiYan();
    },
    scrollToDefaultView: true,
    forms: [
      {
        text: "屏蔽",
        type: "forms",
        forms: [
          UISwitch("【屏蔽】文字/图片水印", "baidu_yiyan_remove_ai_mask", true)
        ]
      }
    ]
  };
  const PanelChatSettingUI = {
    id: "baidu-panel-config-chat",
    title: "AI伙伴",
    headerTitle: "搜索AI伙伴<br />chat.baidu.com",
    isDefault() {
      return BaiduRouter.isChat();
    },
    scrollToDefaultView: true,
    forms: [
      {
        text: "屏蔽",
        type: "forms",
        forms: [
          UISwitch("【屏蔽】文字/图片水印", "baidu_chat_remove_ai_mask", true)
        ]
      }
    ]
  };
  const PanelEasyLearnSettingUI = {
    id: "baidu-panel-config-easy-learn",
    title: "教育",
    headerTitle: "百度教育<br />easylearn.baidu.com<br />uf9kyh.smartapps.cn",
    isDefault() {
      return BaiduRouter.isEasyLearn() || BaiduRouter.isMiniJiaoYu();
    },
    scrollToDefaultView: true,
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "小程序",
            type: "deepMenu",
            forms: [
              {
                text: "屏蔽",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】底部下拉菜单",
                    "mini_baidu_jiaoyu_shield_bottom_pull_down_menu",
                    false
                  )
                ]
              }
            ]
          }
        ]
      },
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "功能",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "解锁顶部搜索框",
                    "baidu_easylearn_unlocking_top_search_input",
                    true
                  ),
                  UISwitch(
                    "解锁搜题上限",
                    "baidu_easylearn_unlocking_the_upper_limit_of_search_questions",
                    true
                  ),
                  UISwitch(
                    "自动显示答案",
                    "baidu_easylearn_auto_show_answer",
                    true
                  )
                ]
              }
            ]
          },
          {
            text: "屏蔽",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】本题试卷",
                    "baidu_easylearn_shield_this_question_paper",
                    false
                  ),
                  UISwitch(
                    "【屏蔽】本卷好题",
                    "baidu_easylearn_shield_good_questions_in_this_volume",
                    false
                  ),
                  UISwitch(
                    "【屏蔽】相关试卷",
                    "baidu_easylearn_shield_related_test_papers",
                    false
                  ),
                  UISwitch(
                    "【屏蔽】视频讲解",
                    "baidu_easylearn_shield_video_explanation",
                    false
                  ),
                  UISwitch(
                    "【屏蔽】学霸笔记",
                    "baidu_easylearn_shield_xueba_notes",
                    false
                  ),
                  UISwitch(
                    "【屏蔽】底部工具栏",
                    "baidu_easylearn_shield_bottom_toolbar",
                    false
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const PanelAiStudySettingUI = {
    id: "baidu-panel-config-ai-study",
    title: "知了爱学",
    headerTitle: "知了爱学<br />aistudy.baidu.com<br />isite.baidu.com/site/wjz2tdly",
    isDefault() {
      return BaiduRouter.isAiStudy() || BaiduRouter.isISite();
    },
    scrollToDefaultView: true,
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "知了爱学",
            description: "isite",
            type: "deepMenu",
            forms: [
              {
                text: "屏蔽",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】底部免费在线咨询",
                    "baidu_isite_wjz2tdly_shieldBottomBarRootContainer",
                    true
                  ),
                  UISwitch(
                    "【屏蔽】右侧悬浮按钮-查看更多",
                    "baidu_isite_wjz2tdly_shieldRightSeeMoreToolBar",
                    false
                  ),
                  UISwitch(
                    "【屏蔽】大家还在看",
                    "baidu_isite_wjz2tdly_shieldArticleBottom",
                    true
                  )
                ]
              },
              {
                text: "功能",
                type: "forms",
                forms: [
                  UISwitch(
                    "自动展开全文",
                    "baidu_isite_wjz2tdly_autoExpandFullText",
                    true
                  )
                ]
              }
            ]
          },
          {
            text: "知了爱学",
            description: "aistudy",
            type: "deepMenu",
            forms: [
              {
                text: "屏蔽",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】底部工具栏",
                    "baidu_ai_study_shieldBottomToolBar",
                    true
                  )
                ]
              },
              {
                text: "功能",
                type: "forms",
                forms: [
                  UISwitch(
                    "自动展开全文",
                    "baidu_ai_study_autoExpandFullText",
                    true
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const YiYanChat = {
    dialogAlias: null,
    /** 是否正在进行初始化参数 */
    isIniting: false,
    /** 是否已初始化参数 */
    isInitParams: false,
    aisearch_id: null,
    pvId: null,
    sessionId: null,
    question: [],
    async init() {
      if (!this.isInitParams) {
        this.isIniting = true;
        Qmsg.info("初始化参数中...");
        this.isInitParams = Boolean(await this.initParams());
        this.isIniting = false;
        if (this.isInitParams) {
          Qmsg.success("初始化成功！");
          this.init();
        } else {
          Qmsg.error("初始化参数失败");
        }
      } else if (!this.isIniting) {
        this.showChatGPTDialog();
      }
    },
    /**
     * 初始化参数
     * @param queryText 需要提问的问题
     */
    async initParams(queryText = "") {
      let getResp = await httpx.get(
        `https://chat.baidu.com/?pcasync=pc&asyncRenderUrl=&passportStaticPage=https%3A%2F%2Fwww.baidu.com%2Fcache%2Fuser%2Fhtml%2Fv3Jump.html&from=pc_tab&word=${encodeURI(
        queryText
      )}&source=pd_ic`,
        {
          fetch: true,
          headers: {
            Accept: "*/*",
            Origin: "https://www.baidu.com",
            Referer: `https://www.baidu.com/`
          },
          data: JSON.stringify({
            data: {}
          })
        }
      );
      if (!getResp.status) {
        return false;
      }
      try {
        let aisearch_id = /"aisearch_id":"(.*?)"/i.exec(
          getResp.data.responseText
        );
        if (!(aisearch_id == null ? void 0 : aisearch_id[1])) {
          throw new TypeError("获取aisearch_id失败");
        }
        let pvId = /"pvId":"(.*?)"/i.exec(getResp.data.responseText);
        if (!(pvId == null ? void 0 : pvId[1])) {
          throw new TypeError("获取pvId失败");
        }
        let sessionId = /"sessionId":"(.*?)"/i.exec(getResp.data.responseText);
        if (!(sessionId == null ? void 0 : sessionId[1])) {
          throw new TypeError("获取sessionId失败");
        }
        YiYanChat.aisearch_id = aisearch_id[1];
        YiYanChat.pvId = pvId[1];
        YiYanChat.sessionId = sessionId[1];
        log.success("获取一言参数aisearch_id：" + YiYanChat.aisearch_id);
        log.success("获取一言参数pvId：" + YiYanChat.pvId);
        log.success("获取一言参数sessionId：" + YiYanChat.sessionId);
        return true;
      } catch (error) {
        log.error(error);
        return false;
      }
    },
    /**
     * 显示ChatGPT回答弹窗
     */
    showChatGPTDialog() {
      if (YiYanChat.dialogAlias != null) {
        if (!YiYanChat.dialogAlias.popsElement.getClientRects().length) {
          YiYanChat.dialogAlias.show();
        } else {
          log.info("请勿重复打开");
        }
        return;
      }
      YiYanChat.dialogAlias = pops.alert({
        title: {
          text: "<p style='width:100%;'>文心一言</p>",
          position: "center",
          html: true
        },
        content: {
          text: ""
        },
        mask: {
          enable: true,
          clickEvent: {
            toHide: true
          }
        },
        btn: {
          close: {
            enable: true,
            callback(event) {
              event.hide();
            }
          }
        },
        drag: true,
        dragLimit: true,
        width: "95vw",
        height: "90vh",
        style: `
            .pops{
            --container-title-height: 45px;
            --container-bottom-btn-height: 100px;

            --gpt-bg-color: #ffffff;
            --gpt-border-radius: 4px;
            }
            .pops-alert-content{
            background: #ECEAF7;
            }
            .pops-alert-btn .ask-question{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            }
            .pops-alert-btn .ask-question textarea{
            width: inherit;
            height: inherit;
            }
            .pops-alert-btn .ask-question textarea {
            vertical-align: bottom;
            position: relative;
            display: block;
            resize: none;
            padding: 5px 11px;
            line-height: 1.5;
            box-sizing: border-box;
            font-size: 16px;
            font-family: inherit;
            background-color: var(--gpt-bg-color);
            background-image: none;
            -webkit-appearance: none;
            appearance: none;
            box-shadow: 0 0 0 1px #dcdfe6 inset;
            border-radius: 0;
            transition: box-shadow .2s cubic-bezier(.645, .045, .355, 1);
            border: none;
            }
            .pops-alert-btn .ask-question textarea:hover{box-shadow:0 0 0 1px #c0c4cc inset}
            .pops-alert-btn .ask-question textarea:focus{outline:0;box-shadow:0 0 0 1px #409eff inset}

            .ask-container{

            }
            .ask-container .user-question,
            .ask-container .gpt-answer{
            display: flex;
            margin: 10px 10px;
            }
            .ask-container .user-question{

            }
            .ask-container .gpt-answer{

            }
            .ask-container .avatar-img{
            
            }
            .ask-container .avatar-img img{
            width: 30px;
            height: 30px;
            border-radius: 6px;
            background: var(--gpt-bg-color);
            }
            .ask-container .ask-text,
            .ask-container .answer-text{
            background: var(--gpt-bg-color);
            border-radius: var(--gpt-border-radius);
            padding: 10px;
            margin-left: 10px;
            text-align: left;
            }
            .ask-container .ask-text{
            width: auto;
            }
            .ask-container .answer-text{
            }
            .ask-container .answer-text *{
            text-wrap: wrap;
            }
            .gpt-btn-control{
            display: flex;
            flex-direction: column;
            }
            .gpt-btn-control .pops-alert-btn-clear-history{
            margin-bottom: 5px;
            }
            .gpt-btn-control .pops-alert-btn-ok{
            margin-top: 5px;
            }

            .markdown-body .code-header{
            align-items: center;
            background: #e3e8f6;
            border-radius: 7px 7px 0 0;
            display: flex;
            height: 34px;
            }
            .markdown-body .code-header+pre{
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;
            }
            .markdown-body span.code-lang{
            color: #120649;
            flex: 1 0 auto;
            font-family: PingFangSC-Semibold;
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 0;
            padding-left: 14px;
            text-align: justify;
            display: flex;
            }
            .markdown-body span.code-copy{
            align-items: center;
            color: #7886a4;
            display: flex;
            font-family: PingFangSC-Regular;
            font-size: 13px;
            font-weight: 400;
            letter-spacing: 0;
            line-height: 14px;
            text-align: justify;
            user-select: none;
            }
            .markdown-body span.code-copy-text{
            margin-left: 7px;
            margin-right: 20px;
            }


            .typing::after {
            content: '▌';
            }
            .typing::after {
            animation: blinker 1s step-end infinite;
            }
            @keyframes blinker {
            0% {
                visibility: visible;
            }
            50% {
                visibility: hidden;
            }
            100% {
                visibility: visible;
            }
            }
            `
      });
      YiYanChat.loadCSS(
        "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.1/github-markdown.min.css"
      );
      let $alertBtn = YiYanChat.dialogAlias.popsElement.querySelector(
        ".pops-alert-btn"
      );
      $alertBtn.innerHTML = `
        <div class="ask-question">
            <textarea class="ask-question-input" placeholder="请输入问题"></textarea>
            <div class="gpt-btn-control">
            <button class="pops-alert-btn-clear-history" type="danger" data-icon="" data-righticon="false">
                <span>清空</span>
            </button>
            <button class="pops-alert-btn-ok" type="primary" data-icon="" data-righticon="false">
                <span>发送</span>
            </button>
            </div>
        </div>`;
      let $textArea = $alertBtn.querySelector("textarea");
      let $enterBtn = $alertBtn.querySelector(
        ".pops-alert-btn-ok"
      );
      let $clearHistoryBtn = $alertBtn.querySelector(
        ".pops-alert-btn-clear-history"
      );
      let $content = YiYanChat.dialogAlias.popsElement.querySelector(
        ".pops-alert-content"
      );
      $content.innerHTML = "";
      function sendEvent(event) {
        let queryText = $textArea.value;
        if (queryText.trim() === "") {
          Qmsg.error("你没有输入内容哦", {
            timeout: 1500
          });
          return;
        }
        $textArea.value = "";
        let askElement = YiYanChat.getAskElement(queryText);
        let answerElement = YiYanChat.getAnswerElement();
        let answerTextElement = answerElement.querySelector(
          ".answer-text"
        );
        let askContainer = domutils.createElement("div", {
          className: "ask-container"
        });
        let newQueryText = "";
        YiYanChat.question.forEach((item) => {
          if (item.questionText) {
            newQueryText += "\n\n" + item.questionText;
            if (item.answerText) {
              newQueryText += "\n\n" + item.answerText;
            }
          }
        });
        newQueryText += "\n\n" + queryText;
        YiYanChat.question.push({
          questionText: queryText,
          answerText: void 0,
          markdownText: void 0
        });
        YiYanChat.conversation(newQueryText).then(async (stream) => {
          if (!stream) {
            YiYanChat.question.pop();
            return;
          }
          try {
            let latestQuestion = YiYanChat.question[YiYanChat.question.length - 1];
            let answer = await YiYanChat.getAnswerStream(stream, (itemText) => {
              latestQuestion.answerText += itemText;
              answerTextElement.innerText += itemText;
              YiYanChat.scrollToContentContainerEnd();
            });
            answerTextElement.classList.remove("typing");
            if (!answer) {
              YiYanChat.question.pop();
              return;
            }
            latestQuestion.answerText = answer;
            let parseData = YiYanChat.conversionTextToMarkdown(answer);
            log.info(["转换为markdown", parseData]);
            if (parseData.status) {
              latestQuestion.markdownText = parseData.text;
              answerTextElement.innerHTML = parseData.text;
              YiYanChat.handleMarkdown(answerTextElement);
            } else {
              Qmsg.error("转换为Markdown失败");
            }
            YiYanChat.scrollToContentContainerEnd();
          } catch (error) {
            answerTextElement.classList.remove("typing");
            YiYanChat.question.pop();
            log.error(error);
            Qmsg.error(error);
          }
        });
        askContainer.appendChild(askElement);
        askContainer.appendChild(answerElement);
        $content.appendChild(askContainer);
        YiYanChat.scrollToContentContainerEnd();
      }
      utils.listenKeyboard(
        $textArea,
        "keydown",
        function(keyName, keyValue, otherCodeList) {
          if (otherCodeList.includes("ctrl") && keyName === "Enter") {
            $enterBtn.click();
          }
        }
      );
      domutils.on($enterBtn, "click", void 0, sendEvent);
      domutils.on($clearHistoryBtn, "click", void 0, function() {
        YiYanChat.clearHistoryQuestion();
      });
    },
    /**
     * 获取回答流
     * @param stream
     * @param callback 每次的流读取的回调
     */
    async getAnswerStream(stream, callback) {
      const reader = stream.getReader();
      async function parseStreamText() {
        let answerChunkList = [];
        let preResponseItem = "";
        let combineItem = [];
        let referenceList;
        return new Promise((resolve, reject) => {
          reader.read().then(
            //@ts-ignore
            function processText({ done, value }) {
              var _a3, _b, _c, _d, _e, _f, _g, _h;
              try {
                if (done) {
                  log.success("=====读取结束，转换内容=====");
                  let result = answerChunkList.join("");
                  resolve(result);
                  return;
                }
                let responseItem = new TextDecoder("utf-8").decode(
                  value
                );
                responseItem = responseItem.trim();
                if (!responseItem.includes("event:ping") && !responseItem.startsWith("event:messag")) {
                  combineItem.push(preResponseItem);
                  combineItem.push(responseItem);
                  preResponseItem = "";
                  responseItem = combineItem.join("");
                  combineItem = [];
                } else if (!responseItem.includes("event:ping")) {
                  preResponseItem = responseItem;
                }
                let responseItemSplit = responseItem.split("\n").filter((item) => item.trim().startsWith("data:"));
                for (let item of responseItemSplit) {
                  item = item.trim();
                  let streamDataStr = item.replace(/^data:/gi, "").trim();
                  if (utils.isNull(streamDataStr)) {
                    continue;
                  }
                  log.info(streamDataStr);
                  let streamData = utils.toJSON(streamDataStr);
                  if (utils.isNull(streamData)) {
                    continue;
                  }
                  let answerChunk = (_d = (_c = (_b = (_a3 = streamData == null ? void 0 : streamData.data) == null ? void 0 : _a3.message) == null ? void 0 : _b.content) == null ? void 0 : _c.generator) == null ? void 0 : _d.text;
                  if (!answerChunk) {
                    continue;
                  }
                  callback(answerChunk);
                  answerChunkList.push(answerChunk);
                  if ((_h = (_g = (_f = (_e = streamData == null ? void 0 : streamData.data) == null ? void 0 : _e.message) == null ? void 0 : _f.content) == null ? void 0 : _g.generator) == null ? void 0 : _h.referenceList) {
                    referenceList = streamData == null ? void 0 : streamData.data.message.content.generator.referenceList;
                  }
                }
              } catch (error) {
                log.error(error);
              }
              return reader.read().then(processText);
            }
          ).catch((error) => {
            reject(error);
          });
        });
      }
      return parseStreamText();
    },
    /**
     * 添加CSS链接
     * @param url
     */
    loadCSS(url) {
      YiYanChat.dialogAlias.$shadowRoot.insertBefore(
        domutils.createElement("link", {
          rel: "stylesheet",
          href: url,
          type: "text/css",
          crossOrigin: "anonymous"
        }),
        YiYanChat.dialogAlias.$shadowRoot.childNodes[0]
      );
    },
    /**
     * 获取提问的元素
     * @param queryText 提问的问题
     */
    getAskElement(queryText = "") {
      let element = domutils.createElement("div", {
        className: "user-question",
        innerHTML: `
        <div class="avatar-img">
          <img src="https://www.baidu.com/img/flexible/logo/bearicon_198.png"></img>
        </div>
        <div class="ask-text">${queryText}</div>
        `
      });
      return element;
    },
    /**
     * 获取回答的元素
     */
    getAnswerElement() {
      let element = domutils.createElement("div", {
        className: "gpt-answer",
        innerHTML: `
        <div class="avatar-img">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAADwZJREFUaEN1WmlsXdUR/s59tuPsCYmAOM5KnQYSx06TOCnZ2Erpj1aiqAv93eVPpaqoFRCytAIKBVSqItr+qESphFSpgv6gVf8USAJBxGscO7ZjkjgrblZCVi/vnVPNmZlzzn3PiRT5+fnee87MfPPNN3Oucc45lP0bHwMGux2G+h0uDDuM3QT0Igv67GBhQLfS9/Rd5e+AdXyfM/LZAdZ/pvsM/zR8jX+Gv97BOgNn4jX8bKB2MrBgvkHzigz3rjaYNMmUbx2m3KD+dof9/7UYHUmvpSWNX8w5A+s/qSHwi7FRYoADSn6jfD07gI1mY8QB/u/xXjIIhp0VjNa15DrvIJBxBo89XMD9G7KcUcEgWwLe/6fF0d7ygKkxsmEnC0qk/IY0AolR6m0fCfV64gi6zxutUZQI6bO80+hvck1cQw1mh61vKuDH361CVYHtCga997bFkZ4K9Pm4sMcEGgoR62CNwK4MUj4CYrj3qDc6Hw2NDEdLI08GEOQiDPlZ5bBUNPC1G5oL+OnjVdGggQ6HPe8SKMRK+anhDXnj4SMLSC4EmCUQpNtpIb+RW2xQ74vXyLM1R/29KUQlp9RBwRFs3A8fq8aDLRnM+Khzb71qMXKTwBGTnz77RRPsRkJQr1f+PRABgBJZRpES2NDvwUlKAJKb3gHkJCswmyAy9LgIU4mkGD11isHrT9XAHGqz7sN/xeikGaaJHvJBI6TRSXIgMFSAJzNYyW9ciCEHJWUxgVyaf2XGRNgqlOWZHtbR8T/6djXMv/9WdKeO5tlPH+DpNsE3s1vcnM+twFTMXhP+PYFpRcTDphRyMYc0F5n2aS3NJWHKhEHp2qZlGcybvy25mzfycMvhO3iOveFpmxLc8s88LPMMRIvMqzNoXs2k0tFpcXq4LMF9lOU5uXqkdJ4QhjiUWbOMOABMn2pg/ryrSA7w/7S2+AU8g8l3mtxpHRHMc3FVapZEpodPB9a1AAsWCkPSM5zD0AngkzaHy1eliCpshcZpEzESWoTTOsfMmrsmqX/BoGiMPFD5PxBDfIgyXaoaFHpVNUBjs8GKFVQU+CEeLmIQ3VMsAgf7gK4eh/HxWHR1o/rcWMTFYR66oiLSYh4IBhwhjU6UHWkdiTInpwaIcUQ1eWkCh7saDL6y1niJ4nPFinP8T66SASoWuH4TaO1yGDxmo/TRyCv1K3JEJlUwb4go55U3KK03kQSkECaRqqhHstjc2x1avpphzpzoCNohR0Vqko+0kIp1KJGnBdJnLzh80mExfEHlUpRGwQAp4hVQ8wZFxjR/IoNyuJWIlLNbLo/Y85OnOqxpMViyNEKKDUjyj+oKeVt/BiMT5SCRPHocaO22uHYjoeMyosgVdlEkrBdZjZg/7io6L1MC3kVEprorV52BrAq4ZxWwstEgK0ixVHhprvifBpc+d+g8yB5sagRmzDBwcm1OXdP1FhgtAt0DFj2HHcZLtxDDuTqVpIQBzOs7iy5W8DwdpupZ4bZwaYY16xwmTxO2Ee/4Tar34TAyYtDZ7dB/mODFzyUp8uWGzBtWXZ2/P0glieSV6w77DzoMneb8qiAtEby52khLvCYRCpI+oURV0vS3yVOATfcDc+9kdeo3QIun1E7Ua4GBQYeOLoeRMYGOqAVtHWomAU2NGRqWkEuT0hBIRJgRDsMXHHa3WU8gKSHw59iKqGHmDzuLzheqoIqTBZLc2rAFnsW8p+l6iQjtSCNzZthhf6vDpcupREn7oNhLzZ4NbFpfwIzpkTiCSg95xrk4cMJiX5fnSf97KaiThMKFHc3vxSCvkMuoMiWLrV8zmL8gNnAKMTLm6lWgtd3h+EmCBydorClR0tDzJtUaNDcCdy3O4gal8VHYxY6WHXNiGHh/P5lR1tmq9BLJRSabV3eOO9ZJUacFTwWqNNj6oMH8hQxmvzB9tEBnp0NvHyWwwE/0n2e60KlyjV2+zGDl3RmqqxRS/AxFh69rUqu4n2JiOTFs8V4rG6SqJKSDZVWvpcf8bsc4ybK8NpKGjDfFC5JB9QsIahIBC5w4Bbz/AUOBo8sKO97Hm5pfZ7CmyWBaSiTqmEAkwNi4w81RYOrk5Bk+Qg4ftJVQSuYYvjXJtfS8B/PKDs6hwCIBLom6dcAWMqg+epM81NfvsL/NTw6CN9OGbtoMg7XNGebdwcUv1KfEGFUOnx636OhzaL7HYGl9Jh0vO/rk/9ggRkaMvLboKVmYlylCOUWt4i/pTuGw9YEMdfUxh+jhZBDlTg7bxmHuHIMnflKFaVM4qU+fdRgaLrFCV6UsBfjcJYf93RYXPmenbFidYWk9EY3SOnDirMMH7aXKAY3MHGIvBpiXyKAwLxAvansrmCVsb70v86SQarH+ATaIO9KoMF7ZVYPaSfkeq+eoxflLQhrO4foNoK3X4tjpqBjIeDJoiTdI1zIcofZirEc5Q5Lok1J4UQ3KbUovigVtCxlEEUpIob/foa2DDIp1Y/Jkg1d2VFfMyy5+AXQeLqFUAnoHSQlYjJVkNJZ0nevJoPkUSVIUXJBPnnXY3VEK3alCrLLYAuYFgRxTtLYI2pUqXg02bwXqyXMJK5EKaO2IOUQLFQrAa8/WVBh09pLDu7uLaOtxuHZDBKVOjZIBy/omNijM66wY1KksJ219xeiMjTfPbx93nMjlLXB+oLhlq/Fs5fNN5AkZ1NZpGR5S8Wkjzz1Zjbmz4lSTvvvLO0XsbbMemjzoSGldSoYDyKDFFKFEqZ+iCHVRDsUZYCgzyshSdM1z24kUkmlm0l+k6mHLZoM6D4UIuwGKUFcSIcnFbzyUYd3KAm6baTA6BvQdL2H3fou+o5QvMdeUjLRLpd/XryKDmOV8g+ccTp0Tg0JvlHa10Rm+sD6rBt2isVK5vpkMqhcoiPf6Bx3aupSyY0f7yAMZZs7UERezVdtBh/5jSgBJCx1mA+zUlsYCFteRQdKiO3iD9nSVwjgsiFXtr7SAE+R+7Q0SlgpjKYFWMnvevIkjFPoRB/QPWrQfYOymiviRBwqYNSPf4LX1lhKDJp6Mkklk0KI6dpwfgYlBe7u1DqnWzM/IFTnmV2RQmWqlXQc5ITO4TZsy1MlC6r3+QaDjgK0YJH79vgJmzUympw5o7y1hYIhaiUQPSnnQkwvaVEtjhkUUIV+z1CCLvd1E28qK2sqrM2M+ml3bx1jLCW2nWsmrWnnoxk0F1NXl24VTZxz2fCzzAD1pMA5k0EwfIYmodejodegbYjbRSSrTfQJNABtXZ5g3N5+rp8857D0o4jQMR+RkQ0ZpZLwXQzueGWPI5WbWsU9nrnfYeG/GLOfrUEzEnn6L3gGHoq8ZzIzeoOlxIEJR6Txk0X/MxvOg5IyIuuUsc7h7SYblSwpRTUiJOHXe4aODUofKRmu5WkQ59Mz2MT9TCK2C8HuUQ/y3jfcaD7mUTrnIctXvOuRw/Ax7/OGtme9zVDzSdx2HHAaOi5CVhGcaNqi/02BVQ+bVhUIynUGcPm/xYQ9zMe9TdWbaYbNDzbZnxvzUR3uh3AQoya21awyWLMqTQuhfZA527qJDW4/FuqaMIyQtBv3s7LMYGCrJiQKvR8TRvDzDbTRnkJlbaBuSucORMxZtg6zlWAiLzksnUuIk87RCLsV2MnLVyE2qBdatzXDHXO1Ak6iWtQIlcnOWZ7nOfofDQwQbgxoaRjZkWKgkI8U6ODWB1WeXHFr7Srg5JiSTDkDToxrJLfMUGZQzJlHUQQrFpq5unsGqlQZ0fKFFMghJFZQyFAlNnjPo7C/h05MOX1pksHxJhkJBa1qk/RTOV244HDhiceaiFO6kNMROWhVOPFU0T6pByXFGfiRbeRZEg42GuwyWN9DGElyLmAwHwoR1y2x06pzF9GkGU2pjZNkAVgOq4seKDoeGHA7TtEcmrmGAk3TA+VliLMLml2IQD+iV7ZImKswZ8t/RIgSdlcsNFtbzfCAwYNKiM4zys23ueiUyCi8LHPvMomfI4uZo2dmSzA21XirzquOUpclI84ttRNt6lK49iIYw1qGU2tP+R5O76R6DObNZsih0uNInTCTR0BZEnXD+skPXpxaXrtK6SX+UDhRzI+kINT6PikLAPLFNWC6dxyVyPsh4KbBemSvL5GAK1M8zWLEsQ21t1HwMp9iOaBSJGK+NAN1HrIcjy6fKgyy9N7zroM2nM36c5UtD+A4wP3961Hle96fUZS2E1iTpEFU15Fv2PNuZKmDZ4gwNiwxMGdNpRGhCRLM2+j+uM289xk+avbQWpspc34EISkTLC80tf0YRynknCs1cFU5O2jyk/Lgq8Xwik2jx2lpgZUOGuttFXUhNou7z4NESro/E0RNB0x8Ie8USTxIYDRHCHKV4wBagpvqQ4rXt+TF35VqSKxO9RDHhJEjuSeEZMB9PqGfPApYvzrwCIOlz/gu+T0+zaYNsTERHUBhlecMkkJ6zqrP4GXOm05HkX4uu5zDrJIUUz7zyLUH0jHgsKWqxk4zDyjC8DHO6yjYjREPgxkZpHiVISTpV/w4Q0Tm17zoL9JlkcP+KDGZfa8m99U4xxxQRasJ25Cn//oBjWAgt02NoIpTO9EJHG6aZlRJfaTeSS37WFtT4BLUx96qNvJ0iJ0H4zfdqYEZGndv+0hiu0uAihFMbPh1WlLFPCkutOf6liSRC4QgkHv0z5nmR6GFhtzQKqSHJqznKgkpe5GD/OAPcNtVgz85aftfn43aLN9/muVdglnASrvlQqRhylJ7O8tIGMT0hD0Zq4ks+yZmK9kca5SCag7bMz//0UJrGMS88XoPvrK+KLy+98Y8i9tEEp+y0LjBg+Vlr8GjyCpkynx9wJG9phfeCZC4uJMOz6qT+BIPj6QW976PF2Ttb9qFzMjLm0ZYqvPwDHp3F18uswxtvl/Chn38lczEdVqSLlVdzZR8hikDrCZ1q8YsvCqZvoZRNcSbooNnR0SF8DgE8uq4KL36/xs8DcwapxR91lPD3/5Rw+doEk5myEWxI7oqN3/oI0d8TGHJio1jnxcMCZbPQZlPOTDN48pvVeKyFXysLEZvwFc1xYN8Bi/Y+i6OnLS5eiTUnDDkCZcorMul7Nwm5hMI4QWH2k53kbCcOa/SUg0/odKp050yDFfUZHmos4FtrqlBbOXHG/wFNfBNjhmzqbQAAAABJRU5ErkJggg=="></img>
        </div>
        <div class="answer-text markdown-body typing"></div>
        `
      });
      return element;
    },
    /**
     * 获取AI的回答
     */
    async conversation(queryText = "") {
      let postResp = await httpx.post(
        "https://chat-ws.baidu.com/aichat/api/conversation",
        {
          headers: {
            Accept: "text/event-stream",
            "Content-Type": "application/json",
            Origin: "https://www.baidu.com",
            Referer: `https://www.baidu.com/`
          },
          fetch: true,
          responseType: "stream",
          data: JSON.stringify({
            message: {
              inputMethod: "keyboard",
              isRebuild: false,
              content: {
                query: queryText,
                qtype: 0
              }
            },
            sessionId: YiYanChat.sessionId,
            aisearchId: YiYanChat.aisearch_id,
            pvId: YiYanChat.pvId
          })
        }
      );
      if (!postResp.status) {
        return;
      }
      let stream = postResp.data.response;
      return stream;
    },
    /**
     * 转换文本为markdown格式
     * @param text
     */
    conversionTextToMarkdown(text) {
      let converter = new showdown.Converter();
      converter.setOption("tables", true);
      converter.setOption("openLinksInNewWindow", true);
      converter.setOption("strikethrough", true);
      converter.setOption("emoji", true);
      showdown.setFlavor("github");
      try {
        let markHTML = converter.makeHtml(text);
        return {
          status: true,
          text: markHTML
        };
      } catch (error) {
        return {
          status: false,
          error
        };
      }
    },
    /**
     * 对内部的markdown元素进行处理
     * @param element
     */
    handleMarkdown(element) {
      element.querySelectorAll("pre").forEach((ele) => {
        let codeElement = ele.querySelector("code");
        let language = "";
        if (codeElement.classList.length >= 2) {
          language = codeElement.classList[0];
        }
        let copyText = codeElement.innerText || codeElement.textContent;
        let codeHeader = domutils.createElement("div", {
          className: "code-header",
          innerHTML: `
          <span class="code-lang">${language}</span>
          <span class="code-copy">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 32 32">
              <path d="M28 1.333H9.333C8.597 1.333 8 1.93 8 2.667v4H4c-.736 0-1.333.597-1.333 1.333v14.667c0 .353.14.692.39.943l6.667 6.666c.25.25.589.39.943.39h12c.736 0 1.333-.596 1.333-1.333v-4h4c.736 0 1.333-.597 1.333-1.333V2.667c0-.737-.597-1.334-1.333-1.334zM9.333 26.115L7.22 24h2.114v2.115zm12 1.885H12v-5.333c0-.737-.597-1.334-1.333-1.334H5.333v-12h16V28zm5.334-5.333H24V8c0-.736-.597-1.333-1.333-1.333h-12V4h16v18.667z"></path>
            </svg>
            <span class="code-copy-text">复制代码</span>
          </span>
          `
        });
        let codeCopyText = codeHeader.querySelector(
          ".code-copy-text"
        );
        domutils.on(codeCopyText, "click", void 0, function() {
          try {
            utils.setClip(copyText);
            Qmsg.success("复制成功");
          } catch (error) {
            Qmsg.error("复制失败，" + error);
          }
        });
        domutils.before(ele, codeHeader);
      });
    },
    /**
     * 清除提问历史
     */
    clearHistoryQuestion() {
      YiYanChat.question = [];
      let $content = YiYanChat.dialogAlias.$shadowRoot.querySelector(
        ".pops-alert-content"
      );
      $content.innerHTML = "";
    },
    /**
     * 滚动到内容容器的底部
     */
    scrollToContentContainerEnd() {
      let $contentElement = YiYanChat.dialogAlias.popsElement.querySelector(
        ".pops-alert-content"
      );
      $contentElement.scrollTo(0, $contentElement.scrollHeight);
    }
  };
  const UISelect = function(text, key, defaultValue, data, callback, description) {
    let selectData = [];
    if (typeof data === "function") {
      selectData = data();
    } else {
      selectData = data;
    }
    let result = {
      text,
      type: "select",
      description,
      attributes: {},
      getValue() {
        return PopsPanel.getValue(key, defaultValue);
      },
      callback(event, isSelectedValue, isSelectedText) {
        PopsPanel.setValue(key, isSelectedValue);
        if (typeof callback === "function") {
          callback(event, isSelectedValue, isSelectedText);
        }
      },
      data: selectData
    };
    if (result.attributes) {
      result.attributes[ATTRIBUTE_KEY] = key;
      result.attributes[ATTRIBUTE_DEFAULT_VALUE] = defaultValue;
    }
    return result;
  };
  const UITextArea = function(text, key, defaultValue, description, changeCallBack, placeholder = "", disabled) {
    let result = {
      text,
      type: "textarea",
      attributes: {},
      description,
      placeholder,
      disabled,
      getValue() {
        let localValue = PopsPanel.getValue(key, defaultValue);
        return localValue;
      },
      callback(event, value) {
        PopsPanel.setValue(key, value);
      }
    };
    if (result.attributes) {
      result.attributes[ATTRIBUTE_KEY] = key;
      result.attributes[ATTRIBUTE_DEFAULT_VALUE] = defaultValue;
    }
    return result;
  };
  const PanelCommonSettingUI = {
    id: "baidu-panel-config-common",
    title: "通用",
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "Toast配置",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISelect(
                    "Toast位置",
                    "qmsg-config-position",
                    "bottom",
                    [
                      {
                        value: "topleft",
                        text: "左上角"
                      },
                      {
                        value: "top",
                        text: "顶部"
                      },
                      {
                        value: "topright",
                        text: "右上角"
                      },
                      {
                        value: "left",
                        text: "左边"
                      },
                      {
                        value: "center",
                        text: "中间"
                      },
                      {
                        value: "right",
                        text: "右边"
                      },
                      {
                        value: "bottomleft",
                        text: "左下角"
                      },
                      {
                        value: "bottom",
                        text: "底部"
                      },
                      {
                        value: "bottomright",
                        text: "右下角"
                      }
                    ],
                    (event, isSelectValue, isSelectText) => {
                      log.info("设置当前Qmsg弹出位置" + isSelectText);
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
                        text: "1"
                      },
                      {
                        value: 2,
                        text: "2"
                      },
                      {
                        value: 3,
                        text: "3"
                      },
                      {
                        value: 4,
                        text: "4"
                      },
                      {
                        value: 5,
                        text: "5"
                      }
                    ],
                    void 0,
                    "限制Toast显示的数量"
                  ),
                  UISwitch(
                    "逆序弹出",
                    "qmsg-config-showreverse",
                    false,
                    void 0,
                    "修改Toast弹出的顺序"
                  )
                ]
              }
            ]
          },
          {
            text: "Cookie配置",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "启用",
                    "httpx-use-cookie-enable",
                    false,
                    void 0,
                    "启用后，将根据下面的配置进行添加cookie"
                  ),
                  UISwitch(
                    "使用document.cookie",
                    "httpx-use-document-cookie",
                    false,
                    void 0,
                    "自动根据请求的域名来获取对应的cookie"
                  ),
                  UITextArea(
                    "tieba.baidu.com",
                    "httpx-cookie-tieba.baidu.com",
                    "",
                    void 0,
                    void 0,
                    "Cookie格式：xxx=xxxx;xxx=xxxx"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const __PopsPanel__ = {
    data: null,
    oneSuccessExecMenu: null,
    onceExec: null,
    listenData: null
  };
  const PopsPanel = {
    /** 数据 */
    $data: {
      /**
       * 菜单项的默认值
       */
      get data() {
        if (__PopsPanel__.data == null) {
          __PopsPanel__.data = new utils.Dictionary();
        }
        return __PopsPanel__.data;
      },
      /**
       * 成功只执行了一次的项
       */
      get oneSuccessExecMenu() {
        if (__PopsPanel__.oneSuccessExecMenu == null) {
          __PopsPanel__.oneSuccessExecMenu = new utils.Dictionary();
        }
        return __PopsPanel__.oneSuccessExecMenu;
      },
      /**
       * 成功只执行了一次的项
       */
      get onceExec() {
        if (__PopsPanel__.onceExec == null) {
          __PopsPanel__.onceExec = new utils.Dictionary();
        }
        return __PopsPanel__.onceExec;
      },
      /** 脚本名，一般用在设置的标题上 */
      get scriptName() {
        return SCRIPT_NAME;
      },
      /** 菜单项的总值在本地数据配置的键名 */
      key: KEY,
      /** 菜单项在attributes上配置的菜单键 */
      attributeKeyName: ATTRIBUTE_KEY,
      /** 菜单项在attributes上配置的菜单默认值 */
      attributeDefaultValueName: ATTRIBUTE_DEFAULT_VALUE
    },
    /** 监听器 */
    $listener: {
      /**
       * 值改变的监听器
       */
      get listenData() {
        if (__PopsPanel__.listenData == null) {
          __PopsPanel__.listenData = new utils.Dictionary();
        }
        return __PopsPanel__.listenData;
      }
    },
    init() {
      this.initPanelDefaultValue();
      this.initExtensionsMenu();
    },
    initExtensionsMenu() {
      if (_unsafeWindow.top !== _unsafeWindow.self) {
        return;
      }
      GM_Menu.add([
        {
          key: "show_pops_panel_setting",
          text: "⚙ 设置",
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            this.showPanel();
          }
        },
        {
          key: "show_yiyan_chatgpt",
          text: "⚙ 文心一言",
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            YiYanChat.init();
          }
        }
      ]);
    },
    /** 初始化本地设置默认的值 */
    initPanelDefaultValue() {
      let that = this;
      function initDefaultValue(config) {
        if (!config["attributes"]) {
          return;
        }
        let key = config.attributes[ATTRIBUTE_KEY];
        let defaultValue = config["attributes"][ATTRIBUTE_DEFAULT_VALUE];
        if (key == null) {
          log.warn(["请先配置键", config]);
          return;
        }
        if (that.$data.data.has(key)) {
          log.warn("请检查该key(已存在): " + key);
        }
        that.$data.data.set(key, defaultValue);
      }
      function loopInitDefaultValue(configList) {
        for (let index = 0; index < configList.length; index++) {
          let configItem = configList[index];
          initDefaultValue(configItem);
          let childForms = configItem.forms;
          if (childForms && Array.isArray(childForms)) {
            loopInitDefaultValue(childForms);
          }
        }
      }
      let contentConfigList = this.getPanelContentConfig();
      for (let index = 0; index < contentConfigList.length; index++) {
        let leftContentConfigItem = contentConfigList[index];
        if (!leftContentConfigItem.forms) {
          continue;
        }
        let rightContentConfigList = leftContentConfigItem.forms;
        if (rightContentConfigList && Array.isArray(rightContentConfigList)) {
          loopInitDefaultValue(rightContentConfigList);
        }
      }
    },
    /**
     * 设置值
     * @param key 键
     * @param value 值
     */
    setValue(key, value) {
      let locaData = _GM_getValue(KEY, {});
      let oldValue = locaData[key];
      locaData[key] = value;
      _GM_setValue(KEY, locaData);
      if (this.$listener.listenData.has(key)) {
        this.$listener.listenData.get(key).callback(key, oldValue, value);
      }
    },
    /**
     * 获取值
     * @param key 键
     * @param defaultValue 默认值
     */
    getValue(key, defaultValue) {
      let locaData = _GM_getValue(KEY, {});
      let localValue = locaData[key];
      if (localValue == null) {
        if (this.$data.data.has(key)) {
          return this.$data.data.get(key);
        }
        return defaultValue;
      }
      return localValue;
    },
    /**
     * 删除值
     * @param key 键
     */
    deleteValue(key) {
      let locaData = _GM_getValue(KEY, {});
      let oldValue = locaData[key];
      Reflect.deleteProperty(locaData, key);
      _GM_setValue(KEY, locaData);
      if (this.$listener.listenData.has(key)) {
        this.$listener.listenData.get(key).callback(key, oldValue, void 0);
      }
    },
    /**
     * 监听调用setValue、deleteValue
     * @param key 需要监听的键
     * @param callback
     */
    addValueChangeListener(key, callback) {
      let listenerId = Math.random();
      this.$listener.listenData.set(key, {
        id: listenerId,
        key,
        callback
      });
      return listenerId;
    },
    /**
     * 移除监听
     * @param listenerId 监听的id
     */
    removeValueChangeListener(listenerId) {
      let deleteKey = null;
      for (const [key, value] of this.$listener.listenData.entries()) {
        if (value.id === listenerId) {
          deleteKey = key;
          break;
        }
      }
      if (typeof deleteKey === "string") {
        this.$listener.listenData.delete(deleteKey);
      } else {
        console.warn("没有找到对应的监听器");
      }
    },
    /**
     * 判断该键是否存在
     * @param key 键
     */
    hasKey(key) {
      let locaData = _GM_getValue(KEY, {});
      return key in locaData;
    },
    /**
     * 自动判断菜单是否启用，然后执行回调
     * @param key
     * @param callback 回调
     */
    execMenu(key, callback) {
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (!this.$data.data.has(key)) {
        log.warn(`${key} 键不存在`);
        return;
      }
      let value = PopsPanel.getValue(key);
      if (value) {
        callback(value);
      }
    },
    /**
     * 自动判断菜单是否启用，然后执行回调，只会执行一次
     * @param key
     * @param callback 回调
     */
    execMenuOnce(key, callback) {
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (!this.$data.data.has(key)) {
        log.warn(`${key} 键不存在`);
        return;
      }
      let value = PopsPanel.getValue(key);
      if (value) {
        if (this.$data.oneSuccessExecMenu.has(key)) {
          return;
        }
        callback(value);
        this.$data.oneSuccessExecMenu.set(key, 1);
      }
    },
    /**
     * 根据key执行一次
     * @param key
     */
    onceExec(key, callback) {
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (this.$data.onceExec.has(key)) {
        return;
      }
      callback();
      this.$data.onceExec.set(key, 1);
    },
    /**
     * 显示设置面板
     */
    showPanel() {
      pops.panel({
        title: {
          text: `${SCRIPT_NAME}-设置`,
          position: "center",
          html: false,
          style: ""
        },
        content: this.getPanelContentConfig(),
        mask: {
          enable: true,
          clickEvent: {
            toClose: true,
            toHide: false
          }
        },
        isMobile: this.isMobile(),
        width: this.getWidth(),
        height: this.getHeight(),
        drag: true,
        only: true
      });
    },
    isMobile() {
      return window.outerWidth < 550;
    },
    /**
     * 获取设置面板的宽度
     */
    getWidth() {
      if (window.outerWidth < 550) {
        return "92dvw";
      } else {
        return "550px";
      }
    },
    /**
     * 获取设置面板的高度
     */
    getHeight() {
      if (window.outerHeight > 450) {
        return "80dvh";
      } else {
        return "450px";
      }
    },
    /**
     * 获取配置内容
     */
    getPanelContentConfig() {
      let configList = [
        PanelCommonSettingUI,
        PanelSearchSettingUI,
        PanelBaiJiaHaoSettingUI,
        PanelTieBaSettingUI,
        PanelWenKuSettingUI,
        PanelJingYanSettingUI,
        PanelBaiKeSettingUI,
        PanelZhiDaoSettingUI,
        PanelFanYiSettingUI,
        PanelImageSettingUI,
        PanelMapSettingUI,
        PanelXueSettingUI,
        PanelAiQiChaSettingUI,
        PanelPosSettingUI,
        PanelHaoKanSettingUI,
        PanelGraphSettingUI,
        PanelPanSettingUI,
        PanelYiYanSettingUI,
        PanelChatSettingUI,
        PanelEasyLearnSettingUI,
        PanelAiStudySettingUI
      ];
      return configList;
    }
  };
  const HttpxCookieManager = {
    $data: {
      /** 是否启用 */
      get enable() {
        return PopsPanel.getValue("httpx-use-cookie-enable");
      },
      /** 是否使用document.cookie */
      get useDocumentCookie() {
        return PopsPanel.getValue("httpx-use-document-cookie");
      },
      cookieRule: [
        {
          key: "httpx-cookie-tieba.baidu.com",
          hostname: /(tieba.baidu|www.tieba|ala.baidu|static.tieba.baidu|nba.baidu).com/g
        }
      ]
    },
    /**
     * 补充cookie末尾分号
     */
    fixCookieSplit(str) {
      if (utils.isNotNull(str) && !str.trim().endsWith(";")) {
        str += ";";
      }
      return str;
    },
    /**
     * 合并两个cookie
     */
    concatCookie(targetCookie, newCookie) {
      if (utils.isNull(targetCookie)) {
        return newCookie;
      }
      targetCookie = targetCookie.trim();
      newCookie = newCookie.trim();
      targetCookie = this.fixCookieSplit(targetCookie);
      if (newCookie.startsWith(";")) {
        newCookie = newCookie.substring(1);
      }
      return targetCookie.concat(newCookie);
    },
    /**
     * 处理cookie
     * @param details
     * @returns
     */
    handle(details) {
      if (details.fetch) {
        return;
      }
      if (!this.$data.enable) {
        return;
      }
      let ownCookie = "";
      let url = details.url;
      if (url.startsWith("//")) {
        url = window.location.protocol + url;
      }
      let urlObj = new URL(url);
      if (this.$data.useDocumentCookie && urlObj.hostname.endsWith(
        window.location.hostname.split(".").slice(-2).join(".")
      )) {
        ownCookie = this.concatCookie(ownCookie, document.cookie.trim());
      }
      for (let index = 0; index < this.$data.cookieRule.length; index++) {
        let rule = this.$data.cookieRule[index];
        if (urlObj.hostname.match(rule.hostname)) {
          let cookie = PopsPanel.getValue(rule.key);
          if (utils.isNull(cookie)) {
            break;
          }
          ownCookie = this.concatCookie(ownCookie, cookie);
        }
      }
      if (utils.isNotNull(ownCookie)) {
        if (details.headers && details.headers["Cookie"]) {
          details.headers.Cookie = this.concatCookie(
            details.headers.Cookie,
            ownCookie
          );
        } else {
          details.headers["Cookie"] = ownCookie;
        }
        log.info(["Httpx => 设置cookie:", details]);
      }
      if (details.headers && details.headers.Cookie != null && utils.isNull(details.headers.Cookie)) {
        delete details.headers.Cookie;
      }
    }
  };
  const CommonUtils = {
    /**
     * 添加屏蔽CSS
     * @param args
     * @example
     * addBlockCSS("")
     * addBlockCSS("","")
     * addBlockCSS(["",""])
     */
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
      addStyle(`${selectorList.join(",\n")}{display: none !important;}`);
    },
    /**
     * 设置GM_getResourceText的style内容
     * @param resourceMapData 资源数据
     */
    setGMResourceCSS(resourceMapData) {
      let cssText = typeof _GM_getResourceText === "function" ? _GM_getResourceText(resourceMapData.keyName) : "";
      if (typeof cssText === "string" && cssText) {
        addStyle(cssText);
      } else {
        CommonUtils.addLinkNode(resourceMapData.url);
      }
    },
    /**
     * 添加<link>标签
     * @param url
     */
    async addLinkNode(url) {
      let $link = document.createElement("link");
      $link.rel = "stylesheet";
      $link.type = "text/css";
      $link.href = url;
      domutils.ready(() => {
        document.head.appendChild($link);
      });
    }
  };
  const GM_RESOURCE_MAP = {
    ElementPlus: {
      keyName: "ElementPlusResourceCSS",
      url: "https://fastly.jsdelivr.net/npm/element-plus@latest/dist/index.min.css"
    },
    Viewer: {
      keyName: "ViewerCSS",
      url: "https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"
    }
  };
  const _SCRIPT_NAME_ = "【移动端】百度系优化";
  const utils = Utils.noConflict();
  const domutils = DOMUtils.noConflict();
  const pops = _monkeyWindow.pops || _unsafeWindow.pops;
  const showdown = _monkeyWindow.showdown || _unsafeWindow.showdown;
  const log = new Utils.Log(
    _GM_info,
    _unsafeWindow.console || _monkeyWindow.console
  );
  const SCRIPT_NAME = ((_a2 = _GM_info == null ? void 0 : _GM_info.script) == null ? void 0 : _a2.name) || _SCRIPT_NAME_;
  const loadingView = new LoadingView(true);
  const DEBUG = false;
  log.config({
    debug: DEBUG,
    logMaxCount: 2e4,
    autoClearConsole: true,
    tag: true
  });
  Qmsg.config(
    Object.defineProperties(
      {
        html: true,
        autoClose: true,
        showClose: false
      },
      {
        position: {
          get() {
            return PopsPanel.getValue("qmsg-config-position", "bottom");
          }
        },
        maxNums: {
          get() {
            return PopsPanel.getValue("qmsg-config-maxnums", 5);
          }
        },
        showReverse: {
          get() {
            return PopsPanel.getValue("qmsg-config-showreverse", true);
          }
        },
        zIndex: {
          get() {
            let maxZIndex = Utils.getMaxZIndex();
            let popsMaxZIndex = pops.config.Utils.getPopsMaxZIndex(maxZIndex).zIndex;
            return Utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
          }
        }
      }
    )
  );
  const GM_Menu = new Utils.GM_Menu({
    GM_getValue: _GM_getValue,
    GM_setValue: _GM_setValue,
    GM_registerMenuCommand: _GM_registerMenuCommand,
    GM_unregisterMenuCommand: _GM_unregisterMenuCommand
  });
  const httpx = new Utils.Httpx(_GM_xmlhttpRequest);
  httpx.interceptors.request.use((data) => {
    HttpxCookieManager.handle(data);
    return data;
  });
  httpx.interceptors.response.use(void 0, (data) => {
    log.error(["拦截器-请求错误", data]);
    if (data.type === "onabort") {
      Qmsg.warning("请求取消");
    } else if (data.type === "onerror") {
      Qmsg.error("请求异常");
    } else if (data.type === "ontimeout") {
      Qmsg.error("请求超时");
    } else {
      Qmsg.error("其它错误");
    }
    return data;
  });
  httpx.config({
    logDetails: DEBUG
  });
  const OriginPrototype = {
    Object: {
      defineProperty: _unsafeWindow.Object.defineProperty
    },
    Function: {
      apply: _unsafeWindow.Function.prototype.apply,
      call: _unsafeWindow.Function.prototype.call
    },
    Element: {
      appendChild: _unsafeWindow.Element.prototype.appendChild
    },
    setTimeout: _unsafeWindow.setTimeout
  };
  const addStyle = Utils.addStyle;
  const VUE_ELE_NAME_ID = "vite-app";
  const MountVue = async function(targetApp, plugin = []) {
    DOMUtils.ready(async () => {
      const app = vue.createApp(targetApp);
      let $mount = DOMUtils.createElement("div", {
        id: VUE_ELE_NAME_ID
      });
      {
        if (ElementPlusIconsVue != null) {
          for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component);
          }
        }
      }
      document.body.appendChild($mount);
      plugin.forEach((item) => {
        app.use(item);
      });
      app.mount($mount);
    });
    {
      CommonUtils.setGMResourceCSS(GM_RESOURCE_MAP.ElementPlus);
    }
  };
  const SearchShieldCSS = `.c-container.na-ec-item,\r
.c-container.ec-container,\r
div[data-type="ad"],\r
.c-result.sfc-log[data-tpl="adv_wenku_fc"],\r
.c-recomm-wrap.new-ux-recom-wrapper.animation,\r
#results-pre,\r
.video-recommend,\r
.c-result.sfc-log[data-tpl="search_recomm"],\r
.sfc-image-content-waterfall-item[wat-item-data-id="no-img"],\r
.se-results-pre,\r
.ec_wise_ad,\r
div#copyright + div,\r
div#pop-up,\r
div[class*='ad-wrapper__'],\r
div[class*='rec-wrapper__'],\r
.brand-entry,\r
.barea-ad,\r
.swan-ad-fc-rcmd.swan-ad-fc-base-wrap[data-platform],\r
div#page-bd div.recommend,\r
div.short-mini div[data-module="rec:undefined-undefined"],\r
/* 相关软件 */\r
div[srcid="sigma_celebrity_rela"],\r
/* 搜一些隐私的内容时弹出的来的，开启无痕模式----保护隐私，安全浏览 */\r
div:has(p.ivk-private-p),\r
/* 智能卡片的 更多 按钮 */\r
.c-result-content div[rl-type="stop"]:has(div[data-module="lgsd"]) {\r
	display: none !important;\r
}\r
.searchboxtop.newsearch-white-style .se-form {\r
	border-color: #4e6ef2 !important;\r
}\r
.searchboxtop.newsearch-white-style .se-bn {\r
	color: #fff !important;\r
	background: #4e6ef2 !important;\r
}\r
.se-head-logo .se-logo img {\r
	display: inherit !important;\r
}\r
.se-head-tablink {\r
	border-bottom: 1px solid #e6e6e6 !important;\r
	/*background-color: #fff !important;*/\r
	background-color: transparent !important;\r
}\r
\r
a.se-tabitem span {\r
	color: #000 !important;\r
}\r
/*div.c-peak-layer{\r
   display:none !important;\r
 } 百度关键字背景*/\r
.se-tablink-scroll-wrapper .se-tab-cur:after {\r
	border-bottom: 2px solid #38f !important;\r
}\r
.c-tags-scroll.c-padding-x {\r
	display: none !important;\r
}\r
.white-bdsearch-isredirecrt {\r
	display: inline-flex;\r
	background: #43ba76;\r
	color: #fff;\r
	width: 28px;\r
	font-size: 16px;\r
	line-height: 25px;\r
	justify-content: center;\r
	align-items: center;\r
	border-radius: 5px;\r
	margin: 0 auto;\r
	margin-right: 6px;\r
}\r
/* 修复图片显示问题 */\r
.image-strong-card div[class*="image-content__"] > div {\r
	display: inline-block;\r
	overflow: hidden;\r
	vertical-align: top;\r
}\r
.c-result-content div[class*="tieba-newxml-forum-img-class__"] {\r
	display: -webkit-box;\r
	display: -webkit-flex;\r
	display: flex;\r
	-webkit-box-align: center;\r
	-moz-box-align: center;\r
	-webkit-align-items: center;\r
	align-items: center;\r
}\r
\r
.c-result-content div[class*="tieba-newxml-forum-img__"] {\r
	width: 0.553rem;\r
	height: 0.553rem;\r
}\r
\r
.c-result-content div[class*="tieba-newxml-forum-img__"] img {\r
	width: 100%;\r
	height: 100%;\r
	border-radius: 0.09rem;\r
}\r
.c-result-content div[class*="tieba-newxml-forum-class__"] {\r
	display: -webkit-flex;\r
	display: flex;\r
	-webkit-box-orient: vertical;\r
	-moz-box-orient: vertical;\r
	-webkit-box-direction: normal;\r
	-moz-box-direction: normal;\r
	-webkit-flex-direction: column;\r
	-moz-flex-direction: column;\r
	flex-direction: column;\r
	-webkit-box-pack: center;\r
	-moz-box-pack: center;\r
	-webkit-justify-content: center;\r
	-moz-justify-content: center;\r
	justify-content: center;\r
	max-width: 2.2rem;\r
}\r
.c-result-content div[class*="c-img-content-btn__"] {\r
	position: absolute;\r
	right: 0;\r
	width: 0.55rem;\r
	text-align: center;\r
	line-height: 0.28rem;\r
	border: 1px solid rgba(31, 31, 31, 0.5);\r
	border-radius: 0.15rem;\r
	font-family: PingFangSC-Medium;\r
	font-size: 0.13rem;\r
	color: #1f1f1f;\r
}\r
.c-result-content div[class*="tieba-newxml-thread-comment-user__"] {\r
	display: -webkit-flex;\r
	display: flex;\r
	-webkit-box-align: center;\r
	-moz-box-align: center;\r
	-webkit-align-items: center;\r
	-moz-align-items: center;\r
	align-items: center;\r
	margin-top: 0.03rem;\r
}\r
.c-result-content div[class*="tieba-newxml-thread-comment-user__"] img {\r
	width: 0.16rem;\r
	height: 0.16rem;\r
	border-radius: 50%;\r
}\r
.c-result-content div[class*="tieba-newxml-thread-comment-user__"] span {\r
	margin-right: 0.08rem;\r
}\r
.whitesev-gm-refactor-everyone-searching {\r
	width: 100%;\r
	box-sizing: border-box;\r
	height: 2.857em;\r
	line-height: 2.857;\r
	background-color: #f5f6f9;\r
	border-color: #f5f6f9;\r
	padding: 0 0.08rem;\r
	/*vertical-align: middle;*/\r
	outline: 0;\r
	font-size: 14px;\r
	overflow: hidden;\r
	border-radius: 9px;\r
	text-align: center;\r
	text-decoration: none;\r
	-webkit-tap-highlight-color: transparent;\r
	-moz-tap-highlight-color: transparent;\r
	text-overflow: ellipsis;\r
	white-space: nowrap;\r
	-webkit-box-orient: horizontal;\r
	-moz-box-orient: horizontal;\r
	-webkit-box-align: stretch;\r
	-moz-box-align: stretch;\r
	display: block;\r
	justify-content: space-between;\r
	-webkit-justify-content: space-between;\r
	-moz-justify-content: space-between;\r
	-webkit-align-items: stretch;\r
	-moz-align-items: stretch;\r
	align-items: stretch;\r
	flex-wrap: nowrap;\r
	-webkit-flex-wrap: nowrap;\r
	-moz-flex-wrap: nowrap;\r
}\r
\r
/* 让搜索中某些视频的阶段可以横向滚动 */\r
div[class^="new-summary-container_"] {\r
	overflow: auto;\r
}\r
\r
/* 智能卡片 展开更多，这里是拼音 */\r
.c-result-content\r
	div[class*="multi-pinyin_"]\r
	div[class*="multi-pinyin-item"][style*="display: none"] {\r
	display: block !important;\r
}\r
`;
  const SearchHealthShieldCSS = '/* 右下角悬浮的健康直播间图标按钮 */\r\ndiv[class^="index_brandEntry"] {\r\n  display: none !important;\r\n}\r\n';
  const BaiduHeadlth = {
    init() {
      PopsPanel.execMenu("baidu_search_headlth_shield_other_info", () => {
        this.shieldOtherInfo();
      });
      PopsPanel.execMenu("baidu_search_headlth_shield_bottom_toolbar", () => {
        this.shieldServiceButtonsRow();
      });
    },
    /**
     * 【屏蔽】底部其它信息
     */
    shieldOtherInfo() {
      log.info("【屏蔽】底部其它信息");
      CommonUtils.addBlockCSS('article[class] > div[class^="index_container"]');
    },
    /**
     * 【屏蔽】底部工具栏
     */
    shieldServiceButtonsRow() {
      log.info("【屏蔽】底部工具栏");
      CommonUtils.addBlockCSS(
        'article[class] > div[class^="index_healthServiceButtonsRow"]'
      );
    }
  };
  const BaiduHook = {
    $isHook: {
      windowBoxJSBefore: false,
      objectDefineProperty_search: false,
      windowJQueryAppend: false,
      windowOpenBox: false,
      windowWebpackJsonp_tieba: false,
      windowWebpackJsonp_haokan: false,
      functionCall_baijiahao_map: false
    },
    $data: {
      functionApply: [],
      elementAppendChild: [],
      setTimeout: [],
      windowDefine: []
    },
    /**
     * 统一管理apply的劫持，防止套娃
     * @param mode 劫持的类型
     */
    functionApply(mode) {
      this.$data.functionApply.push(mode);
      if (this.$data.functionApply.length > 1) {
        log.info("Function.apply hook新增劫持参数：" + mode);
        return;
      }
      let that = this;
      log.info("初始化Function.apply hook");
      _unsafeWindow.Function.prototype.apply = function(...args) {
        if (that.$data.functionApply.includes("copy")) {
          try {
            let firstParam = args[1];
            if (args.length === 2 && typeof firstParam === "object" && "" + firstParam === "[object Arguments]" && firstParam.length === 1 && typeof firstParam[0] === "object" && firstParam[0] != null && "appName" in firstParam[0] && "checkTokenCopied" in firstParam[0] && "deeplink" in firstParam[0] && "scheme" in firstParam[0] && "token" in firstParam[0] && "useDeeplink" in firstParam[0]) {
              log.success(["劫持复制到剪贴板函数", ...firstParam]);
              return new Promise(function(resolve) {
                log.success(["修改参数并劫持复制到剪贴板返回true"]);
                resolve({
                  status: true
                });
              });
            }
          } catch (error) {
          }
        }
        if (that.$data.functionApply.includes("scheme")) {
          try {
            let firstParam = args[1];
            if (args.length === 2 && typeof firstParam === "object" && "" + firstParam === "[object Arguments]" && firstParam.length === 2 && firstParam[1] === "scheme") {
              log.success(["劫持Scheme", ...firstParam]);
              return;
            }
          } catch (error) {
          }
        }
        return OriginPrototype.Function.apply.call(this, ...args);
      };
    },
    /**
     * 劫持全局define
     */
    windowDefine(path, requirePathList, callback) {
      this.$data.windowDefine.push({
        path,
        requirePathList,
        callback
      });
      if (this.$data.windowDefine.length > 1) {
        log.info("define hook新增劫持参数：" + path);
        return;
      }
      let that = this;
      let safeDefine = void 0;
      let unsafeDefine = function(...args) {
        let define_path = args[0];
        let define_requrePathList = args[1];
        args[2];
        for (let index = 0; index < that.$data.windowDefine.length; index++) {
          let hookConfig = that.$data.windowDefine[index];
          if (hookConfig.path === define_path && JSON.stringify(hookConfig.requirePathList) === JSON.stringify(define_requrePathList)) {
            args[2] = hookConfig.callback;
            break;
          }
        }
        safeDefine(...args);
      };
      unsafeDefine.prototype.amd = {};
      OriginPrototype.Object.defineProperty(_unsafeWindow, "define", {
        get() {
          if (safeDefine == null) {
            return;
          }
          return unsafeDefine;
        },
        set(v) {
          log.success(["define ==> ", v]);
          safeDefine = v;
        }
      });
    },
    /**
     * 劫持百度搜索某些项的点击事件
     * + 百度搜索
     *
     * Object.defineProperty
     * @param menuKeyName
     */
    objectDefineProperty_search(menuKeyName) {
      if (this.$isHook.objectDefineProperty_search) {
        return;
      }
      this.$isHook.objectDefineProperty_search = true;
      _unsafeWindow.Object.defineProperty = function(target, propertyKey, _attributes) {
        if (propertyKey === "_onClick") {
          log.info(["成功劫持_onClick", arguments]);
          let oldFn = _attributes["value"];
          _attributes["value"] = function(event) {
            let eventNode = this._getNode(event.target);
            let eventNodeName = this._getType(eventNode);
            if (eventNodeName === "link") {
              let linkProps2 = this._getLinkProps(eventNode);
              log.success(["点击事件-linkProps信息", linkProps2]);
              if (!linkProps2.href) {
                domutils.trigger(document, "click", event, false);
                return;
              }
              utils.preventEvent(event);
              if (PopsPanel.getValue("baidu_search_hijack__onClick_to_blank")) {
                log.success("新标签页打开: " + linkProps2.href);
                window.open(linkProps2.href, "_blank");
              } else {
                window.location.href = linkProps2.href;
              }
            } else {
              log.success([
                "点击事件-this._getType(eventNode)不为link",
                eventNodeName,
                event
              ]);
              oldFn.call(this, ...arguments);
            }
          };
        }
        return OriginPrototype.Object.defineProperty.call(this, ...arguments);
      };
    },
    /**
     * 劫持添加元素，包括script标签、iframe标签，默认劫持iframe的非http链接
     * + 百度贴吧(tieba.baidu.com)
     * + 百度地图(map.baidu.com)
     * Element.prototype.appendChild
     * @param handleCallBack 处理的回调函数，如果劫持请返回true
     */
    elementAppendChild(handleCallBack = function(element) {
      var _a3;
      if (element instanceof HTMLIFrameElement) {
        if (!((_a3 = element == null ? void 0 : element.src) == null ? void 0 : _a3.startsWith("http"))) {
          log.success(["劫持iframe唤醒：" + element.src, element]);
          return;
        }
      }
    }) {
      this.$data.elementAppendChild.push(handleCallBack);
      if (this.$data.elementAppendChild.length > 1) {
        log.info("Element.prototype.appendChild hook新增劫持判断回调");
        return;
      }
      _unsafeWindow.Element.prototype.appendChild = function(element) {
        if (typeof handleCallBack === "function") {
          let handleResult = handleCallBack(element);
          if (handleResult) {
            return;
          }
        }
        return OriginPrototype.Element.appendChild.call(this, element);
      };
    },
    /**
     * 劫持jQuery的append的iframe
     * + 百度地图(map.baidu.com)
     *
     * $().append();
     */
    windowJQueryAppend() {
      if (this.$isHook.windowJQueryAppend) {
        return;
      }
      this.$isHook.windowJQueryAppend = true;
      let originAppend = _unsafeWindow.$.fn.append;
      _unsafeWindow.$.fn.append = function(params) {
        if (typeof params === "string") {
          params = params.trim();
          if (params.startsWith('<iframe src="') && !params.startsWith('<iframe src="http')) {
            log.success(["劫持jQuery的iframe", params]);
            return;
          }
        }
        originAppend.apply(this, arguments);
      };
    },
    /**
     * 劫持OpenBox
     * + 百度搜索
     *
     * window.OpenBox
     */
    windowOpenBox() {
      if (this.$isHook.windowOpenBox) {
        return;
      }
      this.$isHook.windowOpenBox = true;
      let OpenBox = function() {
        return {
          open(...args) {
            log.info(["劫持OpenBox-open传入参数👇", args]);
            if (!args.length) {
              return;
            }
            let invokeUrl = args[0]["invokeURL"] || args[0]["invoke_url"];
            if (typeof args[0] === "object" && typeof invokeUrl === "string") {
              log.success("直接跳转Url：" + invokeUrl);
              window.location.href = invokeUrl;
            }
          },
          ready(...args) {
            log.info(["劫持OpenBox-ready传入参数👇", args]);
          },
          version: 20170811
        };
      };
      OpenBox.prototype.getIdmData = function() {
        return {};
      };
      let OpenBox_u = {
        open(...args) {
          log.info(["劫持OpenBox-open传入参数👇", args]);
          if (!args.length) {
            return;
          }
          let invokeUrl = args[0]["invokeURL"] || args[0]["invoke_url"];
          if (typeof args[0] === "object" && typeof invokeUrl === "string") {
            log.success("直接跳转Url：" + invokeUrl);
            window.location.href = invokeUrl;
          }
        }
      };
      let isObjectOpenBox = false;
      OriginPrototype.Object.defineProperty(_unsafeWindow, "OpenBox", {
        get() {
          return isObjectOpenBox ? OpenBox_u : OpenBox;
        },
        set(v) {
          log.info(["OpenBox ==> ", v]);
          isObjectOpenBox = typeof v === "object";
        }
      });
    },
    /**
     * 劫持全局setTimeout
     * + 百度地图
     * + 百度搜索
     *
     * window.setTimeout
     * @param matchStr 需要进行匹配的函数字符串
     */
    setTimeout(matchStr) {
      this.$data.setTimeout.push(matchStr);
      if (this.$data.setTimeout.length > 1) {
        log.info("window.setTimeout hook新增劫持判断参数：" + matchStr);
        return;
      }
      _unsafeWindow.setTimeout = function(...args) {
        let callBackString = args[0].toString();
        if (callBackString.match(matchStr)) {
          log.success(["劫持延迟函数", callBackString]);
          return;
        }
        return OriginPrototype.setTimeout.apply(this, args);
      };
    },
    /**
     * 劫持百度贴吧的window.webpackJsonp
     * 当前 "core:67"
     * + 百度贴吧(tieba.baidu.com)
     *
     * https://tb3.bdstatic.com/tb/wise/wise-main-core/static/js/collect~download~frs~gaokao~index~pb~userpost.e5a81d45.js
     * tiebaNewWakeup.js v3.0.3
     * (c) 2018-2023 liugui01
     * Released under the BaiDuTieBa License.
     */
    windowWebpackJsonp_tieba() {
      if (this.$isHook.windowWebpackJsonp_tieba) {
        return;
      }
      this.$isHook.windowWebpackJsonp_tieba = true;
      this.windowWebPack(
        "webpackJsonp",
        ["core:0"],
        function(webpackExports) {
          if (typeof (webpackExports == null ? void 0 : webpackExports.exports) === "object" && typeof webpackExports.exports["getSchema"] === "function" && typeof webpackExports.exports["getToken"] === "function" && typeof webpackExports.exports["init"] === "function" && typeof webpackExports.exports["initDiffer"] === "function") {
            log.success(["成功劫持webpack调用函数", webpackExports]);
            webpackExports == null ? void 0 : webpackExports["i"];
            webpackExports.exports.getSchema = function(...args) {
            };
            webpackExports.exports.getToken = function(...args) {
              log.info(["阻止调用getToken", ...args]);
            };
            webpackExports.exports.init = function(...args) {
              var _a3;
              log.info(["阻止初始化", ...args]);
              if (((_a3 = args == null ? void 0 : args[0]) == null ? void 0 : _a3["page"]) === "usercenter") {
                let homeUrl = "/home/main?id=" + args[0]["param"]["portrait"];
                log.info(["跳转至用户空间", homeUrl]);
                window.open(homeUrl);
              }
              return;
            };
            webpackExports.exports.initDiffer = function(...args) {
              log.info(["阻止初始化差异", ...args]);
              return;
            };
          }
          return webpackExports;
        }
      );
    },
    /**
     * 劫持webpack
     * @param webpackName 当前全局变量的webpack名
     * @param mainCoreData 需要劫持的webpack的顶部core，例如：(window.webpackJsonp = window.webpackJsonp || []).push([["core:0"],{}])
     * @param checkCallBack 如果mainCoreData匹配上，则调用此回调函数
     */
    windowWebPack(webpackName = "webpackJsonp", mainCoreData, checkCallBack) {
      let originObject = void 0;
      OriginPrototype.Object.defineProperty(_unsafeWindow, webpackName, {
        get() {
          return originObject;
        },
        set(newValue) {
          log.success("成功劫持webpack，当前webpack名：" + webpackName);
          originObject = newValue;
          const originPush = originObject.push;
          originObject.push = function(...args) {
            let _mainCoreData = args[0][0];
            if (mainCoreData == _mainCoreData || Array.isArray(mainCoreData) && Array.isArray(_mainCoreData) && JSON.stringify(mainCoreData) === JSON.stringify(_mainCoreData)) {
              Object.keys(args[0][1]).forEach((keyName) => {
                let originSwitchFunc = args[0][1][keyName];
                args[0][1][keyName] = function(..._args) {
                  let result = originSwitchFunc.call(this, ..._args);
                  _args[0] = checkCallBack(_args[0]);
                  return result;
                };
              });
            }
            return originPush.call(this, ...args);
          };
        }
      });
    },
    /**
     * 劫持百度好看视频的window.webpackJsonp
     * + 百度好看视频(haokan.baidu.com)
     *
     */
    windowWebpackJsonp_haokan() {
      if (this.$isHook.windowWebpackJsonp_haokan) {
        return;
      }
      this.$isHook.windowWebpackJsonp_haokan = true;
      this.windowWebPack(
        "webpackJsonp",
        [40, 1],
        function(webpackExports) {
          if (typeof (webpackExports == null ? void 0 : webpackExports.exports) === "object" && typeof webpackExports.exports["LaunchScheme"] === "function" && typeof webpackExports.exports["__esModule"] === "boolean") {
            log.success(["成功劫持webpack调用函数", webpackExports]);
            webpackExports == null ? void 0 : webpackExports["i"];
            webpackExports.exports["LaunchScheme"] = function() {
              log.success(["修改参数：LaunchScheme"]);
              return {
                launch() {
                  return new Promise(function(resolve) {
                    log.success(["修改参数：launch"]);
                    resolve(void 0);
                  });
                }
              };
            };
          }
          return webpackExports;
        }
      );
    },
    /**
     * 劫持百家号和百度地图的Function的call
     * + 百家号(baijiahao.baidu.com)
     * + 百度地图(map.baidu.com)
     * Function.property.call
     */
    functionCall_baijiahao_map() {
      if (this.$isHook.functionCall_baijiahao_map) {
        return;
      }
      this.$isHook.functionCall_baijiahao_map = true;
      _unsafeWindow.Function.prototype.call = function(...args) {
        if (args.length === 2 && args[0] === void 0 && args[1] != null && "arg" in args[1] && "delegate" in args[1] && "done" in args[1] && "method" in args[1] && "next" in args[1] && "prev" in args[1]) {
          log.success(["修改参数", args[1]]);
          args[1]["method"] = "return";
          args[1]["next"] = "end";
          args[1]["prev"] = 24;
        }
        let result = OriginPrototype.Function.call.apply(this, args);
        return result;
      };
    },
    /**
     * 劫持window下的BoxJSBefore对象调用，它的所有的属性都是函数
     * + 百家号(mbd.baidu.com)
     *
     * window.BoxJSBefore
     */
    windowBoxJSBefore() {
      if (this.$isHook.windowBoxJSBefore) {
        return;
      }
      this.$isHook.windowBoxJSBefore = true;
      OriginPrototype.Object.defineProperty(_unsafeWindow, "BoxJSBefore", {
        get() {
          return new Proxy(
            {},
            {
              get(target, name, receiver) {
                log.success("劫持BoxJSBefore调用：" + name);
              }
            }
          );
        }
      });
    }
  };
  const BaiduSearchHook = {
    init() {
      PopsPanel.execMenuOnce("baidu_search_hijack__onClick", () => {
        log.success("hook: baidu onClick");
        BaiduHook.objectDefineProperty_search("baidu_search_hijack__onClick");
      });
      PopsPanel.execMenuOnce("baidu_search_hijack_openbox", () => {
        log.success("hook: window.OpenBox");
        BaiduHook.windowOpenBox();
      });
      PopsPanel.execMenuOnce("baidu_search_hijack_scheme", () => {
        log.success("hook: Function.apply => scheme");
        BaiduHook.functionApply("scheme");
      });
      PopsPanel.execMenuOnce("baidu_search_hijack_copy", () => {
        log.success("hook: Function.apply => copy");
        BaiduHook.functionApply("copy");
      });
      PopsPanel.execMenuOnce("baidu_search_hijack_setTimeout", () => {
        BaiduHook.setTimeout("getGeoLocation|loopPlay()");
      });
    }
  };
  const SearchResultEveryOneSearch = {
    /**
     * 是否重构大家都在搜
     */
    get refactorEveryoneIsStillSearching() {
      return PopsPanel.getValue(
        "baidu_search_refactor_everyone_is_still_searching",
        false
      );
    },
    /**
     * 处理底部的
     * @param bottomElement
     */
    handleBottom(bottomElement) {
      log.success("大家还在搜: 处理底部的");
      bottomElement.forEach((item) => {
        var _a3, _b;
        if (item.hasAttribute("gm-refactor-everyone-search-bottom")) {
          return;
        }
        item.removeAttribute("class");
        item.removeAttribute("id");
        item.setAttribute("gm-refactor-everyone-search-bottom", "true");
        item.querySelectorAll(".rw-list-container .rw-list-new").forEach((searchItemEle) => {
          var _a4;
          let searchText = (_a4 = searchItemEle == null ? void 0 : searchItemEle.textContent) == null ? void 0 : _a4.trim();
          searchItemEle.innerHTML = `
                        <a href="javascript:;" onclick="return false;" target="_self" class="whitesev-gm-refactor-everyone-searching">
                        <span>${searchText}</span>
                        </a>`;
          searchItemEle.style.setProperty(
            "padding",
            "0.06rem"
          );
        });
        (_a3 = item.querySelector("div.c-line-clamp1")) == null ? void 0 : _a3.remove();
        if (!item.closest("#results")) {
          (_b = document.querySelector("#results")) == null ? void 0 : _b.appendChild(item);
        }
        domutils.on(item, "click", "div.rw-list-new", function(event) {
          var _a4, _b2, _c, _d;
          let searchText = (_b2 = (_a4 = event.target.querySelector("span")) == null ? void 0 : _a4.textContent) == null ? void 0 : _b2.trim();
          log.success("底部 点击大家还在搜 ==> " + searchText);
          utils.preventEvent(event);
          window.location.href = `https://m.baidu.com/s?word=${(_d = (_c = event.target) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()}`;
        });
      });
    },
    /**
     * 处理中间的
     * @param centerElement
     */
    handleCenter(centerElement) {
      log.success("大家还在搜: 处理中间的");
      centerElement.forEach((recommendElement) => {
        if (recommendElement.hasAttribute("gm-refactor-everyone-search-center")) {
          return;
        }
        if (!recommendElement.querySelector("div.c-gap-inner-bottom-small") && !recommendElement.querySelector("div.cos-row div.cos-col")) {
          return;
        }
        recommendElement.setAttribute(
          "gm-refactor-everyone-search-center",
          "true"
        );
        let rwListContainerHTML = "";
        let innerBottomSmallElementList = recommendElement.querySelectorAll(
          "div.c-gap-inner-bottom-small"
        );
        if (!innerBottomSmallElementList.length) {
          innerBottomSmallElementList = recommendElement.querySelectorAll(
            "div.cos-row div.cos-col"
          );
        }
        innerBottomSmallElementList.forEach((item) => {
          var _a3;
          let searchText = (_a3 = item.textContent) == null ? void 0 : _a3.trim();
          rwListContainerHTML += `
                <div class="rw-list-new rw-list-new2" style="padding: 0.06rem;width: 49%;">
                    <a href="javascript:;" onclick="return false;" target="_self" class="whitesev-gm-refactor-everyone-searching">
                    <span>${searchText}</span>
                    </a>
                </div>`;
        });
        recommendElement.innerHTML = `
                <div m-service="relative" data-tpl="san" id="relativewords" class="se-relativewords c-container se-relativewords-new c-bg-color-white">
                <div class="rw-little-title">
                    <div class="c-row">
                    <div class="c-color little-title c-span10 c-row-youth c-row-gap-zero-two-youth c-fwb">大家还在搜</div>
                    <div class="func-btn">
                        <div class="func-btn-bg"><i class="c-icon c-color-gray"></i></div>
                    </div>
                    </div>
                </div>
                <div class="rw-list-container rw-list-container2" style="display: inline-table;display: -webkit-inline-box;">
                    ${rwListContainerHTML}</div>
                </div>`;
        domutils.on(
          recommendElement,
          "click",
          "div.rw-list-new",
          function(event) {
            var _a3, _b;
            let searchText = (_b = (_a3 = event.target.querySelector("span")) == null ? void 0 : _a3.textContent) == null ? void 0 : _b.trim();
            log.success("中间 点击大家还在搜 ==> " + searchText);
            utils.preventEvent(event);
            window.location.href = `https://m.baidu.com/s?word=${searchText}`;
          }
        );
      });
    }
  };
  const BaiduResultItem = {
    originURLMap: null,
    /**
     * 判断链接是否是百度的中转链接
     * @param url
     * @returns
     * + true 是百度的中转链接
     * + false 不是百度的中转链接
     */
    isBaiDuTransferStation(url) {
      try {
        url = decodeURIComponent(url);
        return utils.startsWith(
          url,
          "http(s|)://(m[0-9]{0,2}|www).baidu.com/from"
        );
      } catch (error) {
        log.error(error);
        return false;
      }
    },
    /**
     * 判断链接是否是黑名单链接，不进行处理
     * @param url
     * @returns
     * + true 是黑名单url
     * + false 不是黑名单url
     */
    isBlackList(url) {
      let blackList = [
        /^http(s|):\/\/(m[0-9]{0,2}|www).baidu.com\/productcard/,
        /^http(s|):\/\/ks.baidu.com/,
        /^http(s|):\/\/mbd.baidu.com\/ma\/tips/
      ];
      for (const blackUrlRegexp of blackList) {
        if (url.match(blackUrlRegexp)) {
          return true;
        }
      }
      return false;
    },
    /**
     * 为搜索结果每一条设置原始链接
     * @param targetNode
     * @param articleURL article的真实url
     */
    setArticleOriginUrl(targetNode, articleURL) {
      targetNode.querySelectorAll("a").forEach(async (item) => {
        if (BaiduResultItem.originURLMap.has(item.href)) {
          articleURL = BaiduResultItem.originURLMap.get(item.href);
        }
        let domOriginUrl = BaiduResultItem.parseDOMAttrOriginUrl(item);
        if (!utils.isNull(domOriginUrl)) {
          articleURL = domOriginUrl;
        }
        if (utils.isNull(articleURL) || articleURL === item.href) {
          return;
        }
        if (BaiduResultItem.isBlackList(articleURL)) {
          return;
        }
        item.href = articleURL;
      });
      Array.from(
        targetNode.querySelectorAll(
          "div[data-aftclk][class*=img-container]"
        )
      ).forEach(($imgContainer) => {
        let domOriginUrl = BaiduResultItem.parseDOMAttrOriginUrl($imgContainer);
        if (!utils.isNull(domOriginUrl) && !BaiduResultItem.isBlackList(domOriginUrl)) {
          $imgContainer.setAttribute("href", domOriginUrl);
          $imgContainer.setAttribute("rl-link-href", domOriginUrl);
        }
      });
      Array.from(
        targetNode.querySelectorAll(
          "div.c-video-container div[data-aftclk]"
        )
      ).forEach(($aftclk) => {
        let domOriginUrl = BaiduResultItem.parseDOMAttrOriginUrl($aftclk);
        if (!utils.isNull(domOriginUrl) && !BaiduResultItem.isBlackList(domOriginUrl)) {
          $aftclk.setAttribute("href", domOriginUrl);
          $aftclk.setAttribute("rl-link-href", domOriginUrl);
        }
      });
      Array.from(
        targetNode.querySelectorAll(
          'div[data-module="sc_pc"] div[rl-link-href]'
        )
      ).forEach(($rlLinkHref) => {
        let domOriginUrl = BaiduResultItem.parseDOMAttrOriginUrl($rlLinkHref);
        if (!utils.isNull(domOriginUrl) && !BaiduResultItem.isBlackList(domOriginUrl)) {
          $rlLinkHref.setAttribute("href", domOriginUrl);
          $rlLinkHref.setAttribute("rl-link-href", domOriginUrl);
        }
      });
    },
    /**
     * 解析在JSON数据中的urlParams中真正的链接，如果不存在，返回undefined
     * @param data 传入 {"urlParams":{...}} 中的urlParams
     */
    parseURLParamsOriginURL(data) {
      if (data["originUrl"]) {
        return data["originUrl"];
      } else if (data["log"]) {
        let url = void 0;
        try {
          url = utils.toJSON(data["log"])["mu"];
          utils.isNull(url) && (url = void 0);
        } catch (error) {
        }
        return url;
      }
    },
    /**
     * 由于部分真实链接存储在 script 标签中，得取出
     * @param targetNode 目标元素
     */
    parseScriptDOMOriginUrlMap(targetNode) {
      let urlMap = new utils.Dictionary();
      targetNode.querySelectorAll("script[id^='atom-data-']").forEach((item) => {
        let jsonData = utils.toJSON(item.innerHTML);
        if (jsonData["data"]["resultAtomData"] == null) {
          return;
        }
        let resultAtomData = jsonData["data"]["resultAtomData"];
        if (resultAtomData["abstract"] && resultAtomData["abstract"]["urlParams"] && resultAtomData["abstract"]["urlParams"]["tcUrl"]) {
          let url = BaiduResultItem.parseURLParamsOriginURL(
            resultAtomData["abstract"]["urlParams"]
          );
          if (url) {
            urlMap.set(resultAtomData["abstract"]["urlParams"]["tcUrl"], url);
          }
        }
        if (resultAtomData["content"] && resultAtomData["content"]["abstract"] && resultAtomData["content"]["abstract"]["urlParams"] && resultAtomData["content"]["abstract"]["urlParams"]["tcUrl"]) {
          let url = BaiduResultItem.parseURLParamsOriginURL(
            resultAtomData["content"]["abstract"]["urlParams"]
          );
          if (url) {
            urlMap.set(
              resultAtomData["content"]["abstract"]["urlParams"]["tcUrl"],
              url
            );
          }
        }
        if (resultAtomData["content"] && resultAtomData["content"]["links"] && resultAtomData["content"]["links"]["list"]) {
          resultAtomData["content"]["links"]["list"].forEach((item2) => {
            item2.forEach((item22) => {
              if (item22["urlParams"]["tcUrl"]) {
                let url = BaiduResultItem.parseURLParamsOriginURL(
                  item22["urlParams"]
                );
                if (url) {
                  urlMap.set(item22["urlParams"]["tcUrl"], url);
                }
              }
            });
          });
        }
        if (resultAtomData["content"] && resultAtomData["content"]["site"]) {
          resultAtomData["content"]["site"]["list"].forEach(
            (item2) => {
              if (item2["urlParams"]["tcUrl"]) {
                let url = BaiduResultItem.parseURLParamsOriginURL(
                  item2["urlParams"]
                );
                if (url) {
                  urlMap.set(item2["urlParams"]["tcUrl"], url);
                }
              }
            }
          );
        }
      });
      return urlMap;
    },
    /**
     * 判断传入的链接是否不是正确的真实链接
     * @param url
     */
    isNotRlLinkUrl(url) {
      if (utils.isNull(url)) {
        return true;
      }
      if (typeof url !== "string") {
        return true;
      }
      if (!url.startsWith("http")) {
        return true;
      }
      if (url.match(/^http(s|):\/\/nourl\.(ubs\.|)baidu\.com/gi)) {
        return true;
      }
      return false;
    },
    /**
     * 解析DOM节点上隐藏在属性中的真正url
     * @param element 目标元素
     */
    parseDOMAttrOriginUrl(element) {
      var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
      let url = null;
      let dataLogStr = element.getAttribute("data-log");
      let $article = element.querySelector("article");
      if (dataLogStr && dataLogStr !== "{") {
        try {
          let dataLog = utils.toJSON(dataLogStr);
          url = dataLog.mu;
        } catch (error) {
          log.error("DOM的属性data-log不存在👇");
          log.error(error);
        }
      }
      if (this.isNotRlLinkUrl(url)) {
        let rlLinkDataUrl = ($article == null ? void 0 : $article.getAttribute("rl-link-data-url")) || element.getAttribute("rl-link-data-url");
        if (rlLinkDataUrl) {
          url = rlLinkDataUrl;
        }
      }
      if (this.isNotRlLinkUrl(url)) {
        let dataIVKStr = element.getAttribute("data-ivk");
        if (dataIVKStr) {
          try {
            let dataIVK = utils.toJSON(dataIVKStr);
            if (((_a3 = dataIVK == null ? void 0 : dataIVK.control) == null ? void 0 : _a3.default_url) && !BaiduResultItem.isBaiDuTransferStation(
              (_b = dataIVK == null ? void 0 : dataIVK.control) == null ? void 0 : _b.default_url
            )) {
              url = (_c = dataIVK == null ? void 0 : dataIVK.control) == null ? void 0 : _c.default_url;
            } else if (((_d = dataIVK == null ? void 0 : dataIVK.control) == null ? void 0 : _d.dataUrl) && !BaiduResultItem.isBaiDuTransferStation((_e = dataIVK == null ? void 0 : dataIVK.control) == null ? void 0 : _e.dataUrl)) {
              url = (_f = dataIVK == null ? void 0 : dataIVK.control) == null ? void 0 : _f.dataUrl;
            } else if (((_h = (_g = dataIVK == null ? void 0 : dataIVK.control) == null ? void 0 : _g.ext) == null ? void 0 : _h.url) && !BaiduResultItem.isBaiDuTransferStation((_j = (_i = dataIVK == null ? void 0 : dataIVK.control) == null ? void 0 : _i.ext) == null ? void 0 : _j.url)) {
              url = (_l = (_k = dataIVK == null ? void 0 : dataIVK.control) == null ? void 0 : _k.ext) == null ? void 0 : _l.url;
            }
          } catch (error) {
            log.error("DOM的属性data-ivk不存在👇");
            log.error(error);
          }
        }
      }
      if (this.isNotRlLinkUrl(url)) {
        let rlLinkDataLogStr = element.getAttribute("rl-link-data-log");
        if (rlLinkDataLogStr) {
          try {
            let rlLinkDataLog = utils.toJSON(rlLinkDataLogStr);
            if (utils.isNull(rlLinkDataLog.mu) && rlLinkDataLog.extra) {
              try {
                let rlLinkDataLogExtra = utils.toJSON(rlLinkDataLog.extra);
                if (rlLinkDataLogExtra.loc && !BaiduResultItem.isBaiDuTransferStation(rlLinkDataLogExtra.loc)) {
                  url = decodeURIComponent(rlLinkDataLogExtra.loc);
                } else if (rlLinkDataLogExtra.log_loc && !BaiduResultItem.isBaiDuTransferStation(
                  rlLinkDataLogExtra.log_loc
                )) {
                  url = decodeURIComponent(rlLinkDataLogExtra.log_loc);
                }
              } catch (error) {
                log.error("DOM的属性rl-link-data-log的extra不存在👇");
                log.error(error);
              }
            } else {
              url = rlLinkDataLog.mu;
            }
          } catch (error) {
            log.error("DOM的属性rl-link-data-log不存在👇");
            log.error(error);
          }
        }
      }
      if (this.isNotRlLinkUrl(url)) {
        let rlLinkDataIvkStr = element.getAttribute("rl-link-data-ivk");
        if (rlLinkDataIvkStr) {
          try {
            let rlLinkDataIvk = utils.toJSON(rlLinkDataIvkStr);
            if (((_m = rlLinkDataIvk == null ? void 0 : rlLinkDataIvk.control) == null ? void 0 : _m.default_url) && !BaiduResultItem.isBaiDuTransferStation(
              (_n = rlLinkDataIvk == null ? void 0 : rlLinkDataIvk.control) == null ? void 0 : _n.default_url
            )) {
              url = (_o = rlLinkDataIvk == null ? void 0 : rlLinkDataIvk.control) == null ? void 0 : _o.default_url;
            } else if (((_p = rlLinkDataIvk == null ? void 0 : rlLinkDataIvk.control) == null ? void 0 : _p.invoke_url) && !BaiduResultItem.isBaiDuTransferStation(
              (_q = rlLinkDataIvk == null ? void 0 : rlLinkDataIvk.control) == null ? void 0 : _q.invoke_url
            )) {
              url = (_r = rlLinkDataIvk == null ? void 0 : rlLinkDataIvk.control) == null ? void 0 : _r.invoke_url;
            } else if (((_t = (_s = rlLinkDataIvk == null ? void 0 : rlLinkDataIvk.control) == null ? void 0 : _s.ext) == null ? void 0 : _t.url) && !BaiduResultItem.isBaiDuTransferStation(
              (_v = (_u = rlLinkDataIvk == null ? void 0 : rlLinkDataIvk.control) == null ? void 0 : _u.ext) == null ? void 0 : _v.url
            )) {
              url = (_x = (_w = rlLinkDataIvk == null ? void 0 : rlLinkDataIvk.control) == null ? void 0 : _w.ext) == null ? void 0 : _x.url;
            }
          } catch (error) {
            log.error("DOM的属性rl-link-data-ivk不存在👇");
            log.error(error);
          }
        }
      }
      if (this.isNotRlLinkUrl(url)) {
        let articleDataLogStr = $article == null ? void 0 : $article.getAttribute("rl-link-data-log");
        if (articleDataLogStr) {
          try {
            let articleDataLog = utils.toJSON(articleDataLogStr);
            url = articleDataLog.mu;
          } catch (error) {
            log.error("article DOM的属性的rl-link-data-log不存在👇");
            log.error(element);
          }
        }
      }
      if (this.isNotRlLinkUrl(url)) {
        let articleLinkDataIVKStr = $article == null ? void 0 : $article.getAttribute("rl-link-data-ivk");
        if (articleLinkDataIVKStr) {
          try {
            let articleLinkDataIVK = utils.toJSON(articleLinkDataIVKStr);
            if (((_y = articleLinkDataIVK == null ? void 0 : articleLinkDataIVK.control) == null ? void 0 : _y.default_url) && !BaiduResultItem.isBaiDuTransferStation(
              (_z = articleLinkDataIVK == null ? void 0 : articleLinkDataIVK.control) == null ? void 0 : _z.default_url
            )) {
              url = (_A = articleLinkDataIVK == null ? void 0 : articleLinkDataIVK.control) == null ? void 0 : _A.default_url;
            } else if (((_B = articleLinkDataIVK == null ? void 0 : articleLinkDataIVK.control) == null ? void 0 : _B.dataUrl) && !BaiduResultItem.isBaiDuTransferStation(
              (_C = articleLinkDataIVK == null ? void 0 : articleLinkDataIVK.control) == null ? void 0 : _C.dataUrl
            )) {
              url = (_D = articleLinkDataIVK == null ? void 0 : articleLinkDataIVK.control) == null ? void 0 : _D.dataUrl;
            }
          } catch (error) {
            log.error("article DOM的属性rl-link-data-ivk不存在👇");
            log.error(error);
          }
        }
      }
      if (this.isNotRlLinkUrl(url)) {
        url = null;
      } else {
        let chineseArr = url.match(/[\u4e00-\u9fa5]/g);
        if (chineseArr) {
          for (let i = 0; i < chineseArr.length; i++) {
            url = url.replace(chineseArr[i], encodeURI(chineseArr[i]));
          }
        }
      }
      if (this.isNotRlLinkUrl(url)) {
        let labelUrl = element.getAttribute("label-url");
        if (labelUrl) {
          url = labelUrl;
        }
      }
      if (!this.isNotRlLinkUrl(url) && utils.startsWith(url, "http(s|)://(m[0-9]{0,2}|www).baidu.com/sf?")) {
        url = decodeURIComponent(url);
      }
      if (!this.isNotRlLinkUrl(url)) {
        if (utils.startsWith(url, "http(s|)://nourl.baidu.com")) {
          url = "";
        }
      }
      return url;
    },
    /**
     * 获取每一项的标题元素
     * @param targetNode 目标项
     */
    getItemTitleElement(targetNode) {
      return targetNode.querySelector(".c-title-text") || targetNode.querySelector("p.cu-title") || targetNode.querySelector("div[class^=header-wrapper]") || targetNode.querySelector(".c-title");
    },
    /**
     * 添加CSDN的CSS
     */
    addCSDNFlagCSS() {
      addStyle(`
        .csdn-flag-component-box{display:flex;margin:0;text-align:left;font-size:0;position:relative;width:260px;margin:5px 0}
        .csdn-flag-component-box a{display:inline-block;font-size:14px}
        .csdn-flag-component-box .praise {
            padding-right: 20px;
            background: #ff5722;
            border-top-left-radius: 50px;
            border-top-right-radius: 50px;
            border-bottom-left-radius: 50px;
            border-bottom-right-radius: 50px;
            background: -webkit-linear-gradient(left,#ff5722,#f78d6b);
            background: -o-linear-gradient(right,#ff5722,#f78d6b);
            background: -moz-linear-gradient(right,#ff5722,#f78d6b);
            background: linear-gradient(to right,#ff5722,#f78d6b);
        }
        .csdn-flag-component-box .praise,
        .csdn-flag-component-box .share {
            height:auto;
            line-height:normal;
            color: #fff;
            background: #ff0505;
            border-radius: 5px;
            padding: 2px 4px;
        }`);
    },
    /**
     * 给元素添加【CSDN】下载标识
     * @param $result
     */
    addCSDNFlag($result) {
      if ($result.querySelector(".csdn-flag-component-box")) {
        return;
      }
      let $titleText = BaiduResultItem.getItemTitleElement($result);
      if ($titleText) {
        domutils.append(
          $titleText,
          `<div class="csdn-flag-component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>`
        );
        log.success("插入CSDN下载提示标题");
      }
    },
    /**
     * 移除广告、推广
     */
    removeAds() {
      if (PopsPanel.getValue("baidu_search_blocking_everyone_is_still_searching")) {
        let pageRelativeElement = document.querySelectorAll("#page-relative");
        if (pageRelativeElement.length) {
          log.success(
            `删除广告位 ==> 末尾 大家都在搜 ${pageRelativeElement.length}个`
          );
          domutils.remove(pageRelativeElement);
        }
        let centerRecommandWarpperElement = document.querySelectorAll(
          ".c-recomm-wrap.new-ux-recom-wrapper.c-bg-color-white.animation"
        );
        if (centerRecommandWarpperElement.length) {
          log.success(
            `删除广告位 ==> 中间 大家都在搜 ${centerRecommandWarpperElement.length}个`
          );
          domutils.remove(centerRecommandWarpperElement);
        }
        let relativewordsElement = document.querySelectorAll("#relativewords");
        if (relativewordsElement.length) {
          log.success(
            `删除广告位 ==> 简单搜索加载下一页出现的 大家都在搜 ${relativewordsElement.length}个`
          );
          domutils.remove(relativewordsElement);
        }
      } else {
        if (SearchResultEveryOneSearch.refactorEveryoneIsStillSearching) {
          SearchResultEveryOneSearch.handleBottom(
            Array.from(document.querySelectorAll("#page-relative"))
          );
          SearchResultEveryOneSearch.handleCenter(
            Array.from(
              document.querySelectorAll('.c-result.result[tpl^="recommend_list"]')
            )
          );
        }
      }
      let popUpElement = document.querySelectorAll("#pop-up");
      if (popUpElement.length) {
        log.success(`删除 ==> 跳转百度app提示 ${popUpElement.length}个`);
        domutils.remove(popUpElement);
      }
      let ecWiseAdElement = document.querySelectorAll(".ec_wise_ad");
      if (ecWiseAdElement.length) {
        log.success(`删除 ==> 顶部的部分商品广告 ${ecWiseAdElement.length}个`);
        domutils.remove(domutils.parent(ecWiseAdElement));
      }
      document.querySelectorAll(".c-result.result").forEach(($result) => {
        var _a3, _b;
        let dataLog = utils.toJSON($result.getAttribute("data-log"));
        let searchArticleOriginal_link = dataLog["mu"] || ((_a3 = $result.querySelector("article")) == null ? void 0 : _a3.getAttribute("rl-link-href"));
        if (utils.isNotNull(searchArticleOriginal_link) && BaiduSearchRule.handleCustomRule($result, searchArticleOriginal_link)) {
          log.info(["触发自定义规则，拦截该项：", searchArticleOriginal_link]);
          $result.remove();
          return;
        }
        if (PopsPanel.getValue("baidu-search-blockAutomaticVideoPlayback")) {
          $result.querySelectorAll("[class*='-video-player']").forEach((ele) => ele.remove());
        }
        if (utils.isNotNull(searchArticleOriginal_link)) {
          if (searchArticleOriginal_link.match(
            /^http(s|):\/\/(download.csdn.net|www.iteye.com\/resource)/g
          )) {
            log.success("添加CSDN下载标识");
            BaiduResultItem.addCSDNFlag($result);
          }
        }
        if (PopsPanel.getValue(
          "baidu_search_blocking_everyone_is_still_searching"
        )) {
          let $title = $result.querySelector(
            ".rw-little-title"
          );
          if ($title && ((_b = $title.textContent) == null ? void 0 : _b.startsWith("大家还在搜"))) {
            $result == null ? void 0 : $result.remove();
            log.success("删除广告 ==> 大家都在搜（能看到的）");
          }
          $result.querySelectorAll("span").forEach((item) => {
            var _a4;
            let resultParentElement = (_a4 = item.parentElement) == null ? void 0 : _a4.parentElement;
            if (item.innerText.match(/百度APP内打开/) || resultParentElement.getAttribute("data-from") === "etpl") {
              resultParentElement.remove();
              log.success(
                "删除广告 ==> 百度APP内打开，隐藏的广告，会在滚动时跳出来的"
              );
            }
          });
        }
        Array.from(
          $result.querySelectorAll(".c-color-source")
        ).forEach(($bottomLogo) => {
          var _a4;
          if ((_a4 = $bottomLogo.outerText) == null ? void 0 : _a4.match(/百度(APP内打开|手机助手)/)) {
            $result.remove();
            log.success("删除广告 ==> 百度APP内打开|百度手机助手");
          }
        });
      });
    },
    /**
     * 重定向顶部的链接，如全部、视频、图片、贴吧、咨询...
     */
    redirectTopLink() {
      document.querySelectorAll(".se-head-tablink a").forEach((item) => {
        if (item.hasAttribute("data-sflink") && !utils.isNull(item.getAttribute("data-sflink")) && BaiduResultItem.isBaiDuTransferStation(
          item.getAttribute("href")
        ) && item.getAttribute("href") !== item.getAttribute("data-sflink")) {
          item.href = item.getAttribute(
            "data-sflink"
          );
        }
      });
    },
    /**
     * 删除script标签中的百度APP提示
     */
    replaceScriptBaiDuTip() {
      document.querySelectorAll("script").forEach((item) => {
        if (item.innerText.match(/define\(\"@molecule\/aftclk\/index\",/g)) {
          item.remove();
          log.success("删除广告 ==> script元素 跳转百度app提示");
        }
      });
    },
    /**
     * 替换链接
     */
    async replaceLink() {
      let searchResultList = Array.from(
        document.querySelectorAll(".c-result.result")
      );
      for (const searchResultItem of searchResultList) {
        let resultItemOriginURL = BaiduResultItem.parseDOMAttrOriginUrl(searchResultItem);
        if (utils.isNull(resultItemOriginURL)) {
          continue;
        }
        let articleElement = searchResultItem.querySelector("article");
        if (!articleElement) {
          continue;
        }
        if (BaiduResultItem.isBlackList(resultItemOriginURL)) {
          log.error("黑名单链接不进行替换👉" + resultItemOriginURL);
          continue;
        }
        if (searchResultItem.getAttribute("tpl") === "wenda_abstract" && searchResultItem.getAttribute("preventClick") == null) {
          searchResultItem.setAttribute("preventClick", "true");
          domutils.on(
            searchResultItem,
            "click",
            function(event) {
              utils.preventEvent(event);
              let clickNode = event.target;
              if (clickNode.localName && clickNode.localName === "sup" && clickNode.getAttribute("rl-type") === "stop") {
                return;
              } else {
                window.stop();
                window.location.href = decodeURI(resultItemOriginURL);
              }
            }
          );
          continue;
        }
        if (resultItemOriginURL.match(/^http(s|):\/\/www.internal.video.baidu.com/g)) {
          let internalVideo = decodeURI(
            articleElement.getAttribute("rl-link-data-log")
          );
          let internalVideoMatch = internalVideo.match(
            /\/sf\?pd=video_pag(.*?)={/g
          );
          if (internalVideoMatch) {
            let internalVideoText = internalVideoMatch[0];
            let newinternalVideo = internalVideoText.substring(
              0,
              internalVideoMatch.length - 2
            );
            resultItemOriginURL = newinternalVideo;
            log.info(`视频链接 ${newinternalVideo}`);
          }
        }
        BaiduResultItem.setArticleOriginUrl(
          searchResultItem,
          resultItemOriginURL
        );
        articleElement.setAttribute("rl-link-href", resultItemOriginURL);
      }
    },
    /**
     * 替换链接-vsearch
     */
    replaceVSearchLink() {
      document.querySelectorAll("#realtime-container  div:not([class])").forEach((element) => {
        let linkElement = element.querySelector("a");
        if (!linkElement) {
          return;
        }
        if (linkElement.hasAttribute("data-sf-visited")) {
          let dataSfVisited = linkElement.getAttribute(
            "data-sf-visited"
          );
          if (dataSfVisited !== linkElement.href) {
            linkElement.href = dataSfVisited;
            log.success("替换链接  " + dataSfVisited);
          }
        }
      });
    }
  };
  const SearchNextPage = {
    /**
     * 初始页面的信息
     */
    initPageInfo: null,
    /**
     * 本页的信息，自动跟随请求下一页更新数据
     */
    pageInfo: null,
    /**
     * 本页的下一页的信息
     */
    nextPageInfo: null,
    /**
     * 观察器
     */
    intersectionObserver: null,
    init() {
      this.initPageLineCSS();
      CommonUtils.addBlockCSS(
        /* 隐藏分页控制器 */
        "#page-controller"
      );
      loadingView.initLoadingView(true);
      let $loadingViewPrev = document.querySelector("#page-controller") || document.querySelector("#page-bd");
      if ($loadingViewPrev) {
        domutils.after($loadingViewPrev, loadingView.getLoadingViewElement());
      } else {
        log.error("未找到可以在后面插入加载中的元素");
        return;
      }
      this.setNextPageLoadingObserver();
    },
    /**
     * 设置滚动事件
     */
    setNextPageLoadingObserver() {
      let isLoadingNextPage = false;
      if (typeof IntersectionObserver === "undefined") {
        log.success("监听滚动: scroll");
        domutils.on(
          document,
          "scroll",
          void 0,
          async () => {
            if (isLoadingNextPage) {
              return;
            }
            if (!utils.isNearBottom(window.innerHeight / 3)) {
              return;
            }
            isLoadingNextPage = true;
            await this.scrollEvent();
            await utils.sleep(150);
            isLoadingNextPage = false;
          },
          {
            capture: true,
            passive: true,
            once: false
          }
        );
      } else {
        log.success("监听滚动: IntersectionObserver");
        this.intersectionObserver = new IntersectionObserver(
          async (entries) => {
            if (!isLoadingNextPage && entries[0].isIntersecting) {
              isLoadingNextPage = true;
              await this.scrollEvent();
              isLoadingNextPage = false;
            }
          },
          { threshold: 0 }
        );
        this.intersectionObserver.observe(
          loadingView.loadingViewElement
        );
      }
    },
    /**
     * 移除滚动事件
     */
    removeNextPageLoadingObserver() {
      if (typeof IntersectionObserver === "undefined") {
        domutils.off(
          document,
          "scroll",
          void 0,
          void 0,
          {
            capture: true
          },
          (value) => {
            return value.originCallBack.toString().includes("isLoadingNextPage");
          }
        );
        loadingView.destory();
        log.info("取消监听滚动: scroll", "#f400ff");
      } else {
        this.intersectionObserver.disconnect();
        this.intersectionObserver = null;
        loadingView.destory();
        log.info("取消监听滚动: IntersectionObserver", "#f400ff");
      }
    },
    /**
     * 把参数pn转换为页码
     * pn: 10
     * pageNum: 2
     * @param pn 10的倍数
     */
    parseParamPnToPageNum(pn) {
      pn = parseInt(pn);
      if (isNaN(pn)) {
        throw new TypeError("pn参数解析失败");
      }
      let pageNum = pn / 10 + 1;
      return pageNum;
    },
    /**
     * 把页码转为参数pn
     * pageNum: 2
     * pn: 10
     * @param pageNum
     */
    parsePageNumToParamPn(pageNum) {
      pageNum = parseInt(pageNum);
      if (isNaN(pageNum)) {
        throw new TypeError("页码解析失败");
      }
      let pn = (pageNum - 1) * 10;
      return pn;
    },
    /**
     * 解析分页控制器的元素的下一页信息
     */
    parseNextPageInfoWithPageController($pageController) {
      var _a3, _b;
      let nextPageUrl = ((_a3 = $pageController.querySelector(
        ".new-nextpage"
      )) == null ? void 0 : _a3.href) || ((_b = $pageController.querySelector(
        ".new-nextpage-only"
      )) == null ? void 0 : _b.href);
      if (nextPageUrl) {
        let param_pn_match = new URL(nextPageUrl).search.match(/[0-9]+/);
        if (param_pn_match == null) {
          log.warn("获取不到pn参数");
          return;
        }
        let param_pn = parseInt(param_pn_match[0]);
        let pageNum = this.parseParamPnToPageNum(param_pn);
        return {
          pn: param_pn,
          pageNum,
          nextPageUrl: this.fixNextPageUrl(nextPageUrl)
        };
      }
      return;
    },
    /**
     * 修复下一页的url
     * 有时候获取到的下一页的url的hostname和当前页面的hostname不同
     * 因为使用的fetch，不能跨域
     * 所以需要把下一页的url的hostname替换成当前页面的hostname
     */
    fixNextPageUrl(url) {
      let urlObj = new URL(url);
      let newUrl = url;
      if (urlObj.hostname !== window.location.hostname) {
        urlObj.hostname = window.location.hostname;
        newUrl = urlObj.toString();
        log.success("成功修复下一页的链接的不同域名：" + newUrl);
      }
      return newUrl;
    },
    /**
     * 初始化获取本页的页码信息
     */
    getInitPageInfo() {
      var _a3, _b, _c, _d;
      let initPageInfo = this.parseNextPageInfoWithPageController(document);
      if (initPageInfo) {
        initPageInfo.pageNum = initPageInfo.pageNum - 1;
        initPageInfo.pn = initPageInfo.pn - 10;
        return initPageInfo;
      } else {
        if (typeof ((_b = (_a3 = _unsafeWindow == null ? void 0 : _unsafeWindow.page) == null ? void 0 : _a3.comm) == null ? void 0 : _b.pn) !== "number") {
          log.warn("page.comm.pn参数未定义");
          return;
        }
        if (typeof ((_d = (_c = _unsafeWindow == null ? void 0 : _unsafeWindow.page) == null ? void 0 : _c.comm) == null ? void 0 : _d.pageNum) !== "number") {
          log.warn("page.comm.pageNum参数未定义");
          return;
        }
        let pn = _unsafeWindow.page.comm.pn;
        let pageNum = _unsafeWindow.page.comm.pageNum;
        let query = _unsafeWindow.page.comm.query || _unsafeWindow.page.comm.prequery || _unsafeWindow.page.comm.rawQuery;
        let nextPageObj = new URL(window.location.origin);
        nextPageObj.pathname = "/s";
        nextPageObj.searchParams.append(
          "from",
          _unsafeWindow.page.comm.from
        );
        nextPageObj.searchParams.append("ssid", "0");
        nextPageObj.searchParams.append("pn", pn + 10);
        nextPageObj.searchParams.append("usm", "");
        nextPageObj.searchParams.append("word", query);
        nextPageObj.searchParams.append("rtime", "");
        nextPageObj.searchParams.append("vfeed", "1024");
        nextPageObj.searchParams.append("sa", "np");
        nextPageObj.searchParams.append("ms", "1");
        nextPageObj.searchParams.append("params_ssrt", "node-san");
        nextPageObj.searchParams.append("suv", "");
        nextPageObj.searchParams.append("cv", "1.0.14");
        nextPageObj.searchParams.append("mod", "0");
        nextPageObj.searchParams.append("async", "1");
        let nextPageUrl = nextPageObj.toString();
        return {
          pn,
          pageNum,
          nextPageUrl: this.fixNextPageUrl(nextPageUrl)
        };
      }
    },
    /**
     * 添加第xx页的分割线
     * @param num 分页
     */
    appendLineDriver(num) {
      let currentResultsDOM = document.querySelector("#results");
      currentResultsDOM.appendChild(SearchNextPage.getPageLineElement(num));
    },
    /**
     * 滚动事件
     * @async
     */
    async scrollEvent() {
      if (this.initPageInfo == null) {
        let pageInfo = this.getInitPageInfo();
        if (!pageInfo) {
          log.warn("初始化失败，未获取到本页信息");
          SearchNextPage.removeNextPageLoadingObserver();
          return;
        }
        this.initPageInfo = null;
        this.initPageInfo = pageInfo;
        this.pageInfo = null;
        this.pageInfo = pageInfo;
        this.nextPageInfo = null;
        this.nextPageInfo = {
          pn: pageInfo.pn + 10,
          pageNum: pageInfo.pageNum + 1,
          nextPageUrl: pageInfo.nextPageUrl
        };
      }
      if (this.nextPageInfo == null) {
        log.warn("不存在下一页，移除监听");
        SearchNextPage.removeNextPageLoadingObserver();
        return;
      }
      log.success(`当前第 ${this.pageInfo.pageNum} 页，pn：${this.pageInfo.pn}`);
      log.success(
        `请求第 ${this.nextPageInfo.pageNum} 页，pn：${this.nextPageInfo.pn}`
      );
      if (!this.nextPageInfo.nextPageUrl) {
        log.warn("获取不到下一页Url，怀疑已加载所有的搜索结果");
        SearchNextPage.removeNextPageLoadingObserver();
        return;
      }
      loadingView.setText("Loading...", true);
      let getResp = await httpx.get({
        url: this.nextPageInfo.nextPageUrl,
        fetch: true
      });
      let respData = getResp.data;
      if (getResp.status) {
        log.success("响应的finalUrl: " + respData["finalUrl"]);
        let nextPageHTMLNode = domutils.parseHTML(
          respData.responseText,
          true,
          true
        );
        let scriptAtomData = domutils.createElement("div");
        nextPageHTMLNode.querySelectorAll("script[id^=atom-data]").forEach((item) => {
          scriptAtomData.appendChild(item);
        });
        let nextPageScriptOriginUrlMap = BaiduResultItem.parseScriptDOMOriginUrlMap(scriptAtomData);
        BaiduResultItem.originURLMap.concat(nextPageScriptOriginUrlMap);
        nextPageHTMLNode.querySelectorAll("style[data-vue-ssr-id]").forEach((item) => {
          let dataVueSsrId = "data-vue-ssr-id";
          let dataVueSsrIdValue = item.getAttribute(dataVueSsrId);
          if (utils.isNull(dataVueSsrIdValue) || !document.querySelector(
            `style[data-vue-ssr-id="${dataVueSsrIdValue}"]`
          )) {
            let cssDOM = addStyle(item.innerHTML);
            cssDOM.setAttribute("data-vue-ssr-id", dataVueSsrIdValue);
            log.info(["插入Vue的CSS", cssDOM]);
          }
        });
        let searchResultDOM = nextPageHTMLNode.querySelectorAll(".c-result.result");
        let nextPageControllerDOM = nextPageHTMLNode.querySelector("#page-controller");
        let currentResultsDOM = document.querySelector("#results");
        if (nextPageControllerDOM) {
          this.appendLineDriver(this.pageInfo.pageNum);
          let nextPageSearchResultFragment = document.createDocumentFragment();
          searchResultDOM.forEach((item) => {
            nextPageSearchResultFragment.appendChild(item);
          });
          currentResultsDOM.appendChild(nextPageSearchResultFragment);
          if (PopsPanel.getValue("baidu_search_sync_next_page_address")) {
            window.history.pushState(
              "forward",
              "",
              this.nextPageInfo.nextPageUrl
            );
          }
          if (SearchResultEveryOneSearch.refactorEveryoneIsStillSearching) {
            SearchResultEveryOneSearch.handleBottom(
              Array.from(nextPageHTMLNode.querySelectorAll("#page-relative"))
            );
          }
          let nextNextPageInfo = this.parseNextPageInfoWithPageController(nextPageHTMLNode);
          if (nextNextPageInfo) {
            if (nextNextPageInfo.pageNum > this.nextPageInfo.pageNum) {
              let nextPageInfo = this.nextPageInfo;
              this.pageInfo = null;
              this.nextPageInfo = null;
              this.pageInfo = nextPageInfo;
              this.nextPageInfo = nextNextPageInfo;
            } else {
              let nextPageInfo = this.nextPageInfo;
              this.pageInfo = null;
              this.nextPageInfo = null;
              this.pageInfo = nextPageInfo;
              log.warn("下下一页的页码<=当前页码，取消监听");
              SearchNextPage.removeNextPageLoadingObserver();
            }
          } else {
            let nextPageInfo = this.nextPageInfo;
            this.pageInfo = null;
            this.nextPageInfo = null;
            this.pageInfo = nextPageInfo;
            log.warn("获取不到下下一页的页码，怀疑已经加载全部结果");
            SearchNextPage.removeNextPageLoadingObserver();
            this.appendLineDriver(this.pageInfo.pageNum);
          }
        } else {
          log.info("已加载所有的搜索结果");
          SearchNextPage.removeNextPageLoadingObserver();
        }
      } else if (getResp.type === "onerror") {
        if (utils.isNull(this.nextPageInfo.nextPageUrl)) {
          log.error("未获取到下一页的url");
        } else {
          log.error("加载失败 👇");
          loadingView.setText("加载失败");
        }
        log.error(respData);
      } else if (getResp.type === "ontimeout") {
        log.error("请求超时 👇");
        loadingView.setText("请求超时");
        log.error(respData);
      } else {
        log.error("未知错误");
        loadingView.setText("未知错误");
        log.error(respData);
      }
    },
    /**
     * 初始化页码的CSS
     */
    initPageLineCSS() {
      log.info("初始化页码的CSS");
      addStyle(`
        .whitesev-page-info{-webkit-tap-highlight-color:transparent}
        .whitesev-page-info .whitesev-new-pagenav{display:block;width:auto;color:#333;z-index:1;font-weight:700;text-decoration:none;position:relative;height:52px;line-height:52px}
        .whitesev-page-info .whitesev-new-pagenav{margin:.08rem;background:#fff;word-wrap:break-word;border:0;border-radius:.06rem;text-align:center;text-align:-webkit-center}
        .whitesev-page-info p::before{content:"第";margin-right:10px}
        .whitesev-page-info p::after{content:"页";margin-left:10px}
        `);
    },
    /**
     * 获取自定义页码元素
     * @param pageText 页码
     */
    getPageLineElement(pageText) {
      return domutils.createElement("div", {
        className: "whitesev-page-info result-op",
        innerHTML: `
            <div class="whitesev-new-pagenav">
                <p>${pageText}</p>
            </div>`
      });
    }
  };
  const SearchNextPage_SearchCraft = {
    /**
     * 观察器
     */
    intersectionObserver: null,
    init() {
      let isSearchCraft = navigator.userAgent.includes("SearchCraft");
      log.success(
        `判断是否是SearchCraft：${isSearchCraft ? GM_Menu.getEnableTrueEmoji() : GM_Menu.getEnableFalseEmoji()}`
      );
      if (isSearchCraft) {
        this.setNextPageInterSectionObserver();
      }
    },
    /**
     * 设置滚动事件
     */
    setNextPageInterSectionObserver() {
      let isLoadingNextPage = false;
      let nextPageElement = document.querySelector(
        ".infinite-load-wrap .se-infiniteload-text"
      );
      if (typeof IntersectionObserver === "undefined") {
        log.success("SearchCraft监听滚动: scroll");
        domutils.on(
          document,
          "scroll",
          void 0,
          async () => {
            if (isLoadingNextPage) {
              return;
            }
            if (!utils.isNearBottom(window.innerHeight / 3)) {
              return;
            }
            isLoadingNextPage = true;
            nextPageElement = document.querySelector(
              ".infinite-load-wrap .se-infiniteload-text"
            );
            await this.scrollEvent(nextPageElement);
            await utils.sleep(150);
            isLoadingNextPage = false;
          },
          {
            capture: true,
            passive: true,
            once: false
          }
        );
      } else {
        log.success("SearchCraft监听滚动: IntersectionObserver");
        this.intersectionObserver = new IntersectionObserver(
          async (entries) => {
            if (!isLoadingNextPage && entries[0].isIntersecting) {
              isLoadingNextPage = true;
              await this.scrollEvent(entries[0].target);
              isLoadingNextPage = false;
            }
          },
          { threshold: 0 }
        );
        this.intersectionObserver.observe(nextPageElement);
      }
    },
    /**
     * 移除滚动事件
     */
    removeNextPageInterSectionObserver() {
      var _a3;
      if (typeof IntersectionObserver === "undefined") {
        domutils.off(
          document,
          "scroll",
          void 0,
          void 0,
          {
            capture: true
          },
          (value) => {
            return value.originCallBack.toString().includes("isLoadingNextPage");
          }
        );
        log.info("SearchCraft取消监听滚动: scroll", "#f400ff");
      } else {
        (_a3 = this.intersectionObserver) == null ? void 0 : _a3.disconnect();
        this.intersectionObserver = null;
        log.info("SearchCraft取消监听滚动: IntersectionObserver", "#f400ff");
      }
    },
    /**
     * 滚动事件
     * @async
     */
    async scrollEvent(nextPageElement) {
      let elementText = nextPageElement.textContent || nextPageElement.innerText;
      if (elementText.includes("更多结果")) {
        log.success("点击【更多结果】");
        nextPageElement.click();
        await utils.sleep(500);
      } else if (elementText.includes("到底了 没有更多内容了")) {
        log.error("到底了 没有更多内容了，移除滚动监听");
        SearchNextPage_SearchCraft.removeNextPageInterSectionObserver();
      }
    }
  };
  const SearchInputEvent = {
    init() {
      let suggestListSelector = "#se-box .suggest-content";
      let suggestListBtnSelectorList = "#se-box .suggest-content button";
      let suggestList2Selector = "#se-box2 .suggest-content";
      let suggestListBtn2SelectorList = "#se-box2 .suggest-content button";
      let suggestList_HOME_Selector = "#index-box .suggest-content";
      let suggestListBtn_HOME_SelectorList = "#index-box .suggest-content button";
      let searchInputSelector = "#kw";
      let searchInput2Selector = "#kw2";
      let searchBtnSelector = "#se-bn";
      let searchBtn2Selector = "#se-bn2";
      let searchInput_HOME_Selector = "#index-kw";
      let searchBtn_HOME_Selector = "#index-bn";
      utils.waitNode(suggestListSelector).then((element) => {
        utils.mutationObserver(element, {
          callback: () => {
            SearchInputEvent.mutationObserverFunction(suggestListBtnSelectorList);
          },
          config: { childList: true, attributes: true }
        });
      });
      utils.waitNode(suggestList2Selector).then((element) => {
        utils.mutationObserver(element, {
          callback: () => {
            SearchInputEvent.mutationObserverFunction(
              suggestListBtn2SelectorList
            );
          },
          config: { childList: true, attributes: true }
        });
      });
      utils.waitNode(suggestList_HOME_Selector).then((element) => {
        utils.mutationObserver(element, {
          callback: () => {
            SearchInputEvent.mutationObserverFunction(
              suggestListBtn_HOME_SelectorList
            );
          },
          config: { childList: true, attributes: true }
        });
      });
      domutils.on(searchBtnSelector, "click", function(event) {
        return SearchInputEvent.searchBtnJump(
          event,
          document.querySelector(searchInputSelector)
        );
      });
      domutils.on(searchInputSelector, "keydown", function(event) {
        return SearchInputEvent.enterKeyDownEvent(
          event,
          document.querySelector(searchInputSelector)
        );
      });
      domutils.on(searchBtn2Selector, "click", function(event) {
        return SearchInputEvent.searchBtnJump(
          event,
          document.querySelector(searchInput2Selector)
        );
      });
      domutils.on(
        document.querySelector(searchInput2Selector),
        "keydown",
        function(event) {
          return SearchInputEvent.enterKeyDownEvent(
            event,
            document.querySelector(searchInput2Selector)
          );
        }
      );
      domutils.on(searchBtn_HOME_Selector, "click", function(event) {
        return SearchInputEvent.searchBtnJump(
          event,
          document.querySelector(searchInput_HOME_Selector)
        );
      });
      domutils.on(searchInput_HOME_Selector, "keydown", function(event) {
        return SearchInputEvent.enterKeyDownEvent(
          event,
          document.querySelector(searchInput_HOME_Selector)
        );
      });
    },
    /**
     * 设置搜索建议自定义click事件
     * @param elementSelector
     */
    mutationObserverFunction(elementSelector) {
      log.success("设置搜索建议自定义click事件");
      document.querySelectorAll(elementSelector).forEach((item) => {
        domutils.on(item, "click", function(event) {
          utils.preventEvent(event);
          window == null ? void 0 : window.stop();
          let searchText = event.target.textContent;
          let redirectURL = window.location.origin + "/s?word=" + searchText;
          log.success("点击按钮跳转搜索 -> " + searchText);
          log.success(redirectURL);
          window.location.href = redirectURL;
          return false;
        });
      });
    },
    /**
     * 搜索按钮点击跳转
     * @param event
     * @param searchInputElement
     * @returns
     */
    searchBtnJump(event, searchInputElement) {
      utils.preventEvent(event);
      window == null ? void 0 : window.stop();
      let redirectURL = window.location.origin + "/s?word=" + searchInputElement.value;
      log.success("点击按钮跳转搜索 -> " + searchInputElement.value);
      log.success(redirectURL);
      window.location.href = redirectURL;
      return false;
    },
    /**
     * 判决回车搜索事件
     * @param event
     * @param searchInputElement
     * @returns
     */
    enterKeyDownEvent(event, searchInputElement) {
      if (event.keyCode === 108 || event.keyCode === 13) {
        window == null ? void 0 : window.stop();
        utils.preventEvent(event);
        let redirectURL = window.location.origin + "/s?word=" + searchInputElement.value;
        log.success("回车键跳转搜索 -> " + searchInputElement.value);
        log.success(redirectURL);
        window.location.href = redirectURL;
        return false;
      }
      return true;
    }
  };
  const UserCustomStyle = {
    /**
     * 获取用户自定义样式
     */
    getUserStyle() {
      return PopsPanel.getValue("baidu-search-user-style", "");
    }
  };
  const BaiduSearch = {
    async init() {
      addStyle(UserCustomStyle.getUserStyle());
      log.info("插入用户CSS规则");
      BaiduSearchRule.init();
      if (BaiduRouter.isSearchBh()) {
        addStyle(SearchHealthShieldCSS);
        log.info("插入CSS规则");
        BaiduHeadlth.init();
      } else {
        BaiduSearchHook.init();
        addStyle(SearchShieldCSS);
        log.info("插入CSS规则");
        PopsPanel.execMenu("baidu_search_hijack__onClick_to_blank", () => {
          this.openResultBlank();
        });
        domutils.ready(function() {
          BaiduResultItem.originURLMap = BaiduResultItem.parseScriptDOMOriginUrlMap(document);
          let baidu_search_handle_search_result_enable = PopsPanel.getValue(
            "baidu_search_handle_search_result"
          );
          if (baidu_search_handle_search_result_enable) {
            let searchUpdateRealLink = new utils.LockFunction(async () => {
              try {
                await BaiduResultItem.replaceLink();
              } catch (error) {
                log.error(["替换为真实链接失败", error]);
              }
            }, 600);
            let removeAdsLockFunction = new utils.LockFunction(
              BaiduResultItem.removeAds,
              600
            );
            utils.waitNode("div#page.search-page").then((element) => {
              utils.mutationObserver(element, {
                callback: async () => {
                  if (baidu_search_handle_search_result_enable) {
                    await searchUpdateRealLink.run();
                  }
                  removeAdsLockFunction.run();
                },
                config: {
                  childList: true,
                  subtree: true
                }
              });
            });
            if (baidu_search_handle_search_result_enable) {
              searchUpdateRealLink.run();
            }
            removeAdsLockFunction.run();
          }
          utils.waitNodeList(
            "style[class^='vsearch-sigma-style']"
          ).then((nodeList) => {
            log.success(["删除sigma的CSS", nodeList]);
            nodeList.forEach((item) => item.remove());
          });
          PopsPanel.execMenu("baidu_search_redirect_top_link", () => {
            BaiduResultItem.redirectTopLink();
          });
          BaiduResultItem.replaceScriptBaiDuTip();
          PopsPanel.execMenu("baidu_search_refactoring_input_boxes", () => {
            SearchInputEvent.init();
          });
          if (PopsPanel.getValue("baidu_search_automatically_expand_next_page")) {
            SearchNextPage.init();
          } else if (PopsPanel.getValue(
            "baidu_search_automatically_click_on_the_next_page_with_searchcraft_ua"
          )) {
            SearchNextPage_SearchCraft.init();
          }
          if (BaiduRouter.isSearchVSearch()) {
            utils.waitNode("#realtime-container .c-infinite-scroll").then((element) => {
              let replaceVSearchLinkLonkFunction = new utils.LockFunction(
                BaiduResultItem.replaceVSearchLink,
                600
              );
              utils.mutationObserver(element, {
                config: {
                  subtree: true,
                  childList: true
                },
                callback: () => {
                  replaceVSearchLinkLonkFunction.run();
                }
              });
            });
          }
        });
      }
    },
    /**
     * 新标签页打开
     */
    openResultBlank() {
      function globalResultClickEvent(event) {
        let url = null;
        let $click = event.composedPath()[0];
        let $result = event.target;
        if ($click) {
          if ($click.closest("a")) {
            let $link = $click.closest("a");
            if (utils.isNotNull($link.href)) {
              log.info([
                "链接来自上层a元素",
                {
                  event,
                  $click,
                  $link
                }
              ]);
              url = $link.href;
            }
          } else if ($click.closest("[rl-link-href]")) {
            let $rlLinkDiv = $click.closest("[rl-link-href]");
            let rlLinkHref = $rlLinkDiv.getAttribute("rl-link-href");
            if (utils.isNotNull(rlLinkHref)) {
              log.info([
                "链接来自上层含有[rl-link-href]属性的元素",
                {
                  event,
                  $click,
                  $rlLinkDiv
                }
              ]);
              url = rlLinkHref;
            }
          }
        } else {
          let $article = $result.querySelector("article");
          url = $article.getAttribute("rl-link-href");
          log.info([
            "链接来自顶层向下寻找article元素",
            { event, $result, $article }
          ]);
        }
        if (utils.isNull(url)) {
          log.info(["未找到有效链接", { event, url, $result, $click }]);
          return;
        }
        utils.preventEvent(event);
        log.success(["新标签页打开-来自click事件", url]);
        window.open(url, "_blank");
      }
      domutils.on(document, "click", ".c-result.result", globalResultClickEvent, {
        capture: true
      });
    }
  };
  const SearchHomeShieldCSS = "";
  const SearchHomeMinificationShieldCSS = "html,\r\nbody,\r\ndiv#header {\r\n  height: calc(100vh - 120px);\r\n}\r\nform#index-form {\r\n  position: static;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  margin: auto !important;\r\n  width: 90%;\r\n}\r\ndiv#navs ~ div,\r\n#login-wraps,\r\na.square-enterance,\r\ndiv#ts-image-uploader-icon,\r\ndiv.baiduappcall-wrap div.voice.call,\r\ndiv.tab_news,\r\ndiv#navs {\r\n  display: none !important;\r\n}\r\n/* 图片logo往下移40px */\r\n#logo {\r\n  padding-top: 40px;\r\n}\r\n";
  const BaiduSearchHome = {
    init() {
      addStyle(SearchHomeShieldCSS);
      log.info("插入CSS规则");
      PopsPanel.execMenu("baidu_search_home_homepage_minification", () => {
        this.homepageMinification();
      });
    },
    /**
     * 精简主页
     */
    homepageMinification() {
      log.info("插入精简主页CSS规则");
      addStyle(SearchHomeMinificationShieldCSS);
    }
  };
  const BaiJiaHaoShieldCSS = ".layer-wrap,\r\n.openImg,\r\n.oPadding,\r\n.bottomTTSStruct,\r\n.undefined,\r\n.headDeflectorContainer,\r\n.followSuper,\r\n#searchwordSdk,\r\ndiv#commentModule > div > div > span:nth-child(2),\r\n/* 顶部打开APP横幅 */\r\n#headDeflectorContainer,\r\n/* 展开全文 */\r\n.foldMaskWrapper {\r\n  display: none !important;\r\n}\r\nbody.scrollHide {\r\n  overflow: auto !important;\r\n}\r\n.mainContent,\r\n#mainContentContainer {\r\n  height: auto !important;\r\n}\r\n";
  const BaiJiaHaoHook = {
    init() {
      PopsPanel.execMenu("baijiahao_hijack_wakeup", () => {
        log.success("hook: Function.call");
        BaiduHook.functionCall_baijiahao_map();
      });
      PopsPanel.execMenu("baidu_baijiahao_hijack_iframe", () => {
        log.success("hook: Element.append");
        BaiduHook.elementAppendChild(function(element) {
          var _a3;
          if (element.localName === "script" && ((_a3 = element == null ? void 0 : element.src) == null ? void 0 : _a3.includes("landing-share"))) {
            log.success("阻止加载：" + element.src);
            return true;
          }
        });
      });
      PopsPanel.execMenu("baidu_baijiahao_hijack_openbox", () => {
        log.success("hook: window.Box");
        BaiduHook.windowOpenBox();
      });
    }
  };
  const BaiduBaiJiaHao = {
    init() {
      addStyle(BaiJiaHaoShieldCSS);
      log.info("插入CSS规则");
      BaiJiaHaoHook.init();
      PopsPanel.execMenu("baijiahao_shield_recommended_article", () => {
        this.shieldRecommendArticle();
      });
      PopsPanel.execMenu("baijiahao_shield_user_comment", () => {
        this.shieldUserComment();
      });
      PopsPanel.execMenu("baijiahao_shield_user_comment_input_box", () => {
        this.shieldBottomToolBar();
      });
    },
    /**
     * 【屏蔽】推荐文章
     */
    shieldRecommendArticle() {
      log.info("【屏蔽】推荐文章");
      CommonUtils.addBlockCSS(
        ".infinite-scroll-component__outerdiv",
        "div#page_wrapper > div > div:nth-child(5)",
        "div:has(+ .infinite-scroll-component__outerdiv)",
        /* 电脑端的左边的按钮-屏蔽 */
        "#ssr-content > :last-child",
        /* 电脑端的右边的推荐-屏蔽 */
        "#ssr-content > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)"
      );
      addStyle(`
        /* 电脑端的文章居中 */
        #ssr-content > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) {
            width: 55% !important;
        }`);
      CommonUtils.addBlockCSS(
        '#page_wrapper > div.other > div[class=""]:nth-child(4)'
      );
      CommonUtils.addBlockCSS(
        '#page_wrapper div.spider > div[class=""]:nth-child(4)',
        'page_wrapper div.spider > div[class=""]:nth-child(5)'
      );
      CommonUtils.addBlockCSS('#page_wrapper .searchCraft > div[class=""]');
    },
    /**
     * 【屏蔽】用户评论
     */
    shieldUserComment() {
      log.info("【屏蔽】用户评论");
      CommonUtils.addBlockCSS("#commentModule");
    },
    /**
     * 【屏蔽】底部悬浮工具栏
     */
    shieldBottomToolBar() {
      log.info("【屏蔽】底部悬浮工具栏");
      CommonUtils.addBlockCSS("div#wise-invoke-interact-bar");
    }
  };
  const TieBaShieldCSS = ".tb-backflow-defensive,\r\n.fixed-nav-bar-defensive,\r\n.post-cut-guide,\r\n.ertiao-wrap-defensive,\r\n.feed-warp.gray-background,\r\n.pb-page-wrapper.app-view.transition-fade nav:first-child,\r\n.only-lz,\r\n.nav-bar-v2 .nav-bar-bottom,\r\n.more-image-desc,\r\n.fengchao-banner-defensive,\r\n.wake-app,\r\n.banner-wrapper-defensive,\r\n.open-app,\r\n.topic-share-page-v2 .bav-bar-top,\r\n/* 打开APP查看更多评论 */\r\n.cmt-large-cut-guide,\r\n/* 底部评论滚动栏 */\r\ndiv.diy-guide-wrapper,\r\n/* 底部评论滚动栏上面的空白 */\r\n.individuality,\r\n/* 吧内的广告 */\r\n.tb-threadlist__wrapper .tb-banner-wrapper-defensive,\r\n/* 首页-我的-底部的 年轻人的潮流文化社区 */\r\n.app-view .tb-index-navbar .bottom-guide-box.bottom-guide-box .desc,\r\n/* 首页-我的-底部的 立即下载 */\r\n.app-view .tb-index-navbar .bottom-guide-box.bottom-guide-box .download-btn {\r\n  display: none !important;\r\n}\r\nbody.tb-modal-open {\r\n  overflow: auto !important;\r\n}\r\n";
  const TiebaTopic = {
    init() {
      PopsPanel.execMenu("baidu_tieba_topic_redirect_jump", () => {
        TiebaTopic.redirectJump();
      });
    },
    /**
     * 重定向跳转
     */
    redirectJump() {
      log.info("话题热榜-阻止默认跳转");
      domutils.on(
        document,
        "click",
        ".topic-share-item",
        function(event) {
          var _a3;
          utils.preventEvent(event);
          window == null ? void 0 : window.stop();
          let clickNode = event.target;
          let pid = (_a3 = VueUtils.getVue(clickNode)) == null ? void 0 : _a3.item.tid;
          let url = TiebaUrlApi.getPost(pid);
          log.success(`跳转至: ${url}`);
          if (PopsPanel.getValue("baidu_tieba_topic_openANewTab")) {
            window.open(url, "_blank");
          } else {
            window.open(url);
          }
          return false;
        },
        {
          capture: true
        }
      );
    }
  };
  const TiebaHybrid = {
    init() {
      this.blockAds();
      PopsPanel.execMenu("baidu_tieba_hybrid_search_openANewTab", () => {
        this.openANewTab();
      });
    },
    /**
     * 屏蔽广告
     */
    blockAds() {
      CommonUtils.addBlockCSS(
        /* 顶部横幅 */
        ".tb-index-navbar .fix-nav-guide-bar",
        /* 底部的百度贴吧app内打开 */
        ".tb-index-navbar div:has(.fix-nav-bar-bottom)"
      );
      addStyle(`
          /* 把下面的内容往上移 */
          #app_container ul.navbar-box{
            top: 0px !important;
          }
          /* 把下面的内容往上移 */
          #app_container .navbar-view{
            padding-top: 0px !important;
          } 
		  `);
    },
    /**
     * 新标签页打开
     */
    openANewTab() {
      domutils.on(
        document,
        "click",
        ".scroll-list-wrapper .threadcardclass",
        function(event) {
          var _a3;
          utils.preventEvent(event);
          let clickNode = event.target;
          let tid = (_a3 = VueUtils.getVue(clickNode)) == null ? void 0 : _a3.tid;
          if (utils.isNull(tid)) {
            Qmsg.error("获取帖子的tid失败");
            return;
          }
          window.open(TiebaUrlApi.getPost(tid), "_blank");
        },
        {
          capture: true
        }
      );
    }
  };
  const TiebaBaNei = {
    /**
     * __vue__
     */
    vueRootView: null,
    init() {
      PopsPanel.execMenu("baidu_tieba_openANewTab", () => {
        TiebaBaNei.openANewTab();
      });
      PopsPanel.execMenu("baidu_tieba_remember_user_post_sort", () => {
        TiebaBaNei.rememberPostSort();
      });
      PopsPanel.execMenu("baidu_tieba_filterDuplicatePosts", () => {
        TiebaBaNei.filterDuplicatePosts();
      });
      PopsPanel.execMenu("baidu_tieba_removeForumSignInLimit", () => {
        TiebaBaNei.removeForumSignInLimit();
      });
    },
    /**
     * 解除签到限制
     */
    removeForumSignInLimit() {
      utils.waitNode(".tb-mobile-viewport").then(async () => {
        var _a3, _b;
        TiebaBaNei.vueRootView = VueUtils.getVue(
          document.querySelector(".tb-mobile-viewport")
        );
        let isLogin = Boolean((_b = (_a3 = TiebaBaNei.vueRootView) == null ? void 0 : _a3["user"]) == null ? void 0 : _b["is_login"]);
        utils.waitNode(".tb-forum-user__join-btn").then((element) => {
          if (isLogin) {
            element.children[0].innerText = "点击签到";
          } else {
            element.children[0].innerText = "点击登录";
          }
          log.success("修改页面中的APP内签到");
          domutils.on(
            element,
            "click",
            async function(event) {
              utils.preventEvent(event);
              if (isLogin) {
                TiebaBaNei.vueRootView["user"]["portrait"];
                let forumName = TiebaBaNei.vueRootView["forum"]["name"];
                let tbs = TiebaBaNei.vueRootView["$store"]["state"]["common"]["tbs"];
                let signResult = await TieBaApi.forumSign(forumName, tbs);
                if (signResult && typeof signResult["data"] === "object") {
                  Qmsg.success(
                    `今日本吧第${signResult["data"]["finfo"]["current_rank_info"]["sign_count"]}个签到`
                  );
                } else {
                  Qmsg.error(signResult == null ? void 0 : signResult["error"]);
                }
              } else {
                TiebaBaNei.vueRootView["isShowModal"] = true;
              }
            },
            {
              capture: true
            }
          );
        });
      });
    },
    /**
     * 新标签页打开
     */
    openANewTab() {
      domutils.on(
        document,
        "click",
        "div.tb-threadlist__item",
        function(event) {
          var _a3, _b;
          utils.preventEvent(event);
          let vueObj = VueUtils.getVue(event.target);
          let pbUrl = vueObj == null ? void 0 : vueObj.pbUrl;
          let tid = (vueObj == null ? void 0 : vueObj.tid) ?? ((_a3 = vueObj == null ? void 0 : vueObj.thread) == null ? void 0 : _a3.tid);
          let id = (vueObj == null ? void 0 : vueObj.id) ?? ((_b = vueObj == null ? void 0 : vueObj.thread) == null ? void 0 : _b.id);
          let newUrl = "";
          if (pbUrl) {
            newUrl = window.location.origin + pbUrl;
          } else if (tid || id) {
            newUrl = TiebaUrlApi.getPost(tid ?? id);
          } else {
            Qmsg.error("获取帖子链接失败");
            return;
          }
          log.info("帖子链接: " + newUrl);
          window.open(newUrl, "_blank");
        },
        {
          capture: true
        }
      );
    },
    /**
     * 记住当前用户的看帖排序
     * + -1 不知道什么作用
     * + 1  不知道什么作用
     * + 2  回复
     * + 3  发布
     */
    rememberPostSort() {
      let userSortModel = parseInt(
        PopsPanel.getValue("baidu-tieba-sort-model", 3).toString()
      );
      utils.waitNode(".tb-page__main .tb-sort .tab-pack").then((element) => {
        var _a3;
        let originChange = (_a3 = VueUtils.getVue(element)) == null ? void 0 : _a3.change;
        originChange(userSortModel);
        element.__vue__.change = function(index) {
          PopsPanel.setValue("baidu-tieba-sort-model", index);
          originChange(index);
        };
        log.info("注入记住当前选择的看帖排序");
      });
    },
    /**
     * 过滤重复帖子
     */
    filterDuplicatePosts() {
      VueUtils.waitVuePropToSet(".tb-threadlist", [
        {
          msg: "等待获取$watch监听帖子列表",
          check(vueObj) {
            return typeof (vueObj == null ? void 0 : vueObj.$watch) === "function";
          },
          set(vueObj) {
            log.success("监听帖子数量改变");
            vueObj.$watch(
              "list",
              function(newVal, oldVal) {
                log.success("帖子数量触发改变");
                let postsMap = {};
                let samePostList = [];
                for (let index = 0; index < this.$props.list.length; index++) {
                  let postsInfo = this.$props.list[index];
                  if (!postsInfo.id) {
                    continue;
                  }
                  if (postsInfo.id in postsMap) {
                    samePostList.push({
                      title: postsInfo.title ?? "",
                      id: postsInfo.id,
                      index
                    });
                  } else {
                    postsMap[postsInfo.id] = index;
                  }
                }
                if (samePostList.length) {
                  console.log(postsMap);
                  console.log(samePostList);
                }
                for (let index = samePostList.length - 1; index >= 0; index--) {
                  let removePostInfo = samePostList[index];
                  log.error("移除重复帖子：" + removePostInfo.title);
                  this.$props.list.splice(removePostInfo.index, 1);
                }
              },
              {
                deep: true,
                immediate: true
              }
            );
          }
        }
      ]);
    }
  };
  const TiebaCore = {
    /**
     * 伪装客户端已调用
     */
    clientCallMasquerade() {
      let originGetItem = _unsafeWindow.localStorage.getItem;
      _unsafeWindow.localStorage.getItem = function(key) {
        if (key === "p_w_app_call" || key === "p_w_launchappcall" || key === "loginWakeModal") {
          log.info("伪装客户端已调用 " + key);
          return JSON.stringify({
            value: 1,
            date: utils.formatTime(void 0, "yyyyMMdd")
          });
        } else if (key.startsWith("p_w_new_slient") || key.startsWith("f_w_slient") || key.startsWith("f_w_pop_slient") || key.startsWith("f_w_floor") || key.startsWith("t_w_slient") || key.startsWith("t_w_pop_slient") || key.startsWith("auto_slient_wakeup") || key.startsWith("index_home_thread_guide-") || key.startsWith("search_w_pop_slient-")) {
          log.info("伪装客户端已调用 " + key);
          return "1";
        } else {
          return originGetItem.call(window.localStorage, key);
        }
      };
      let masqueradeParamsList = [
        "p_w_new_slient_",
        "f_w_slient_",
        "f_w_pop_slient_",
        "f_w_floor_",
        "t_w_slient_",
        "t_w_pop_slient_",
        "auto_slient_wakeup_",
        "index_home_thread_guide-",
        "search_w_pop_slient-"
      ];
      masqueradeParamsList.forEach((masqueradeParam) => {
        window.localStorage.setItem(
          masqueradeParam + utils.formatTime(void 0, "yyyy-MM-dd"),
          "1"
        );
      });
      for (let index = 0; index < window.localStorage.length; index++) {
        let keyName = window.localStorage.key(index);
        masqueradeParamsList.forEach((item) => {
          if (keyName.startsWith(item) && !keyName.endsWith(utils.formatTime(void 0, "yyyy-MM-dd"))) {
            log.success("删除过期键 ===> " + keyName);
            window.localStorage.removeItem(keyName);
          }
        });
      }
    },
    /**
     * 获取本帖楼主的信息
     */
    getLandlordInfo() {
      var _a3, _b, _c;
      return (_c = (_b = (_a3 = document.querySelector(
        ".main-page-wrap .user-line-wrapper.thread-user-line"
      )) == null ? void 0 : _a3.__vue__) == null ? void 0 : _b.$props) == null ? void 0 : _c.author;
    },
    /**
     * 获取当前的贴吧名字
     */
    getCurrentForumName() {
      var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      let tbMobileViewport = (_b = (_a3 = VueUtils.getVue(
        document.querySelector(".tb-mobile-viewport")
      )) == null ? void 0 : _a3.forum) == null ? void 0 : _b.name;
      let mainPageWrap = (_f = (_e = (_d = (_c = VueUtils.getVue(
        document.querySelector(".main-page-wrap")
      )) == null ? void 0 : _c.$children[0]) == null ? void 0 : _d.$children[0]) == null ? void 0 : _e.forum) == null ? void 0 : _f.name;
      let tbForum = (_h = (_g = VueUtils.getVue(
        document.querySelector(".tb-mobile-viewport .tb-forum")
      )) == null ? void 0 : _g.forum) == null ? void 0 : _h.name;
      let appView = (_j = (_i = VueUtils.getVue(document.querySelector(".app-view"))) == null ? void 0 : _i.forum) == null ? void 0 : _j.name;
      return tbMobileViewport || mainPageWrap || tbForum || appView;
    },
    /**
     * 获取当前的贴吧的id
     */
    getCurrentForumId() {
      var _a3, _b, _c, _d;
      let tbMobileViewport = (_b = (_a3 = VueUtils.getVue(
        document.querySelector(".tb-mobile-viewport")
      )) == null ? void 0 : _a3.forum) == null ? void 0 : _b.id;
      let appView = (_d = (_c = VueUtils.getVue(document.querySelector(".app-view"))) == null ? void 0 : _c.forum) == null ? void 0 : _d.id;
      return tbMobileViewport || appView;
    },
    /**
     * 获取当前帖子的tid
     */
    getCurrentForumPostTid() {
      var _a3, _b, _c;
      let tid = null;
      let appViewVue = VueUtils.getVue(document.querySelector(".app-view"));
      if (((_a3 = appViewVue == null ? void 0 : appViewVue.thread) == null ? void 0 : _a3.id) !== "" && ((_b = appViewVue == null ? void 0 : appViewVue.thread) == null ? void 0 : _b.id) != null) {
        tid = appViewVue.thread.id.toString();
      } else {
        tid = (_c = window.location.pathname.match(/([0-9]+)/g)) == null ? void 0 : _c[0];
      }
      return tid;
    },
    /**
     * 添加滚动到顶部按钮
     */
    addScrollTopButton() {
      log.success("添加滚动到顶部按钮");
      let isInsertButton = false;
      let showScrollTopButton = function() {
        isInsertButton = true;
        let buttonElement = domutils.parseHTML(
          `
            <div class="tb-totop whitesev-tb-totop">
              <style>
              .whitesev-tb-totop{
                position: fixed;
                right: .09rem;
                bottom: 1rem;
                z-index: 1000;
              }
              .whitesev-tb-totop .tb-totop__span{
                display: inline-block;
                width: .51rem;
                height: .51rem;
              }
              .whitesev-tb-totop .tb-totop__svg{
                width: 100%;
                height: 100%;
              }
              </style>
              <span class="tb-totop__span">
                <svg class="tb-totop__svg">
                  <use xlink:href="#icon_frs_top_50"></use>
                </svg>
              </span>
            </div>`,
          true,
          false
        );
        domutils.on(buttonElement, "click", function() {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
        });
        document.body.appendChild(buttonElement);
      };
      let hideScrollTopButton = function() {
        var _a3;
        isInsertButton = false;
        (_a3 = document.querySelector(".whitesev-tb-totop")) == null ? void 0 : _a3.remove();
      };
      let checkScroll = new utils.LockFunction(
        function() {
          let scrollTop = window.document.documentElement.scrollTop || window.document.body.scrollTop;
          let scrollHeight = window.innerHeight || document.documentElement.clientHeight || window.document.body.clientHeight;
          if (scrollTop > scrollHeight * 2) {
            if (!isInsertButton) {
              showScrollTopButton();
            }
          } else {
            hideScrollTopButton();
          }
        },
        this,
        50
      );
      window.addEventListener("scroll", checkScroll.run);
    },
    /**
     * 添加顶部的楼主头像/名字的点击事件-直接进入楼主的个人主页
     */
    addAuthorClickEvent() {
      utils.waitNode(
        "div.main-page-wrap .main-thread-content .user-line"
      ).then((element) => {
        log.info("添加顶部的楼主头像/名字的点击事件-直接进入楼主的个人主页");
        domutils.on(element, "click", function() {
          let vueInfo = VueUtils.getVue(element.parentElement) || VueUtils.getVue(element.closest(".user-line-wrapper"));
          let authorInfo = vueInfo == null ? void 0 : vueInfo.author;
          if (!authorInfo) {
            log.error(["获取贴主信息失败", vueInfo]);
            return;
          }
          log.success(["贴主信息", authorInfo]);
          window.open(`/home/main?id=${authorInfo.portrait}`);
        });
      });
    },
    /**
     * 检测骨架屏
     * @time 900
     */
    checkSkeleton() {
      setTimeout(() => {
        let appElement = document.querySelector("#app");
        if (appElement && appElement.innerHTML === "") {
          Qmsg.warning("检测到骨架屏，异常加载，刷新页面", {
            timeout: 1200,
            onClose() {
              window.location.reload();
            }
          });
        }
      }, 900);
    },
    /**
     * 自动重定向至主域名
     */
    autoJumpToMainHost() {
      if (_unsafeWindow.top !== _unsafeWindow.window) {
        return;
      }
      if (window.location.hostname === "tieba.baidu.com") {
        return;
      }
      let replacePattern = new RegExp(`^${window.location.origin}`);
      window.location.href = window.location.href.replace(
        replacePattern,
        "https://tieba.baidu.com"
      );
    }
  };
  const TiebaSearchSuggestion = {
    $data: {
      searchSuggestion: null,
      currentSearchText: ""
    },
    $ele: {
      /**
       * 输入框
       */
      $searchInput: null
    },
    init($input) {
      this.$ele.$searchInput = $input;
      this.initSearchSuggestion();
      let $oldMoreBtnDesc = document.querySelector(".more-btn-desc");
      domutils.on($oldMoreBtnDesc, "click", () => {
        this.enterSeachMode();
      });
      domutils.on(TiebaSearch.$ele.$searchBtn, "click", () => {
        this.frontPageSeach();
      });
      utils.listenKeyboard(this.$ele.$searchInput, "keypress", (keyName) => {
        if (keyName !== "Enter") {
          return;
        }
        this.frontPageSeach();
      });
      domutils.on(TiebaSearch.$ele.$navSearchBack, "click", function() {
        TiebaSearch.quitSearchMode();
      });
    },
    /**
     * 进入搜索模式
     */
    enterSeachMode() {
      domutils.hide(TiebaSearch.$ele.$selectWrapper);
      TiebaSearch.showSearchContainer();
      setTimeout(() => {
        this.$ele.$searchInput.focus();
      }, 20);
    },
    /**
     * 退出搜索模式
     */
    quiteSearchMode() {
      TiebaSearch.hideSearchContainer();
    },
    /**
     * 获取搜索内容
     */
    getSearchText() {
      return this.$ele.$searchInput.value.trim();
    },
    /**
     * 帖子外搜索(也就是首页搜索吧)
     */
    frontPageSeach() {
      log.success("当前是在首页");
      let searchText = this.getSearchText();
      if (utils.isNull(searchText)) {
        alert("请勿输入空内容");
        return;
      }
      let url = "https://tieba.baidu.com/f?ie=utf-8&kw=" + searchText;
      window.open(url, "_blank");
    },
    /**
     * 初始化搜索吧
     */
    initSearchSuggestion() {
      let that = this;
      async function getData(inputValue) {
        let result = [];
        log.success("搜索中...");
        let suggestionData = await that.getSuggestion(inputValue);
        if (utils.isNull(suggestionData)) {
          return result;
        }
        log.success(suggestionData);
        result = (suggestionData == null ? void 0 : suggestionData.query_match.search_data) || [];
        return result;
      }
      this.$data.searchSuggestion = pops.searchSuggestion({
        selfDocument: document,
        className: "WhiteSevsSearchSelect",
        target: this.$ele.$searchInput,
        inputTarget: this.$ele.$searchInput,
        data: [],
        isAbsolute: false,
        followTargetWidth: true,
        deleteIcon: {
          enable: false
        },
        topDistance: 4,
        itemClickCallBack(event, liElement, data) {
          window.location.href = "https://tieba.baidu.com/f?ie=utf-8&kw=" + data.fname;
        },
        getData,
        getItemHTML(item) {
          return `
				<div class="forum_item">
					<img class="forum_image" src="${item.fpic}">
					<div class="forum_right">
						<div class="forum_name">${item.fname}</div>
						<div class="forum_desc">${item.forum_desc}</div>
						<div class="forum_member">${item.member_num}</div>
						<div class="forum_thread">${item.thread_num}</div>
					</div>
				</div>`;
        },
        style: `
			.WhiteSevsSearchSelect .forum_item{
				display: flex;
				text-wrap: wrap;
				align-items: center;
			}
			.WhiteSevsSearchSelect .forum_image{
				float: left;
				width: 32px;
				height: 32px;
			}
			.WhiteSevsSearchSelect .forum_right{
				float: left;
				margin-left: 8px;
				color: #999;
				width: 88%;
			}
			.WhiteSevsSearchSelect .forum_name{
				color: #000;
				font-size: 14px;
				font-weight: 700;
			}
			.WhiteSevsSearchSelect .forum_name::after{
				content:"吧";
			}
			.WhiteSevsSearchSelect .forum_member,
			.WhiteSevsSearchSelect .forum_thread{
				margin: 4px 0px;
				padding: 0 0 0 18px;
				color: #999;
				font-weight: 400;
				font-size: 12px;
				background: url(//tb2.bdstatic.com/tb/static-common/img/suggestion/sugestion_ed6a819.png) no-repeat;
			}
			.WhiteSevsSearchSelect .forum_member{
				background-position: 0 0;
			}
			.WhiteSevsSearchSelect .forum_thread{
				background-position: 0 -26px;
			}
			`
      });
      this.$data.searchSuggestion.init();
      this.$data.searchSuggestion.setAllEvent();
      log.info("初始化默认搜索...");
      getData("").then((result) => {
        if (result.length) {
          this.$data.searchSuggestion.update(result);
        }
      });
    },
    /**
     * 获取搜索建议
     * @param queryText 搜索内容
     */
    async getSuggestion(queryText = "") {
      let getResp = await httpx.get({
        url: `https://tieba.baidu.com/suggestion?query=${queryText}&ie=utf-8&_=${(/* @__PURE__ */ new Date()).getTime()}`,
        headers: {
          "User-Agent": utils.getRandomPCUA(),
          Accept: "application/json, text/javascript, */*; q=0.01",
          Host: "tieba.baidu.com",
          Referer: window.location.href
        }
      });
      if (!getResp.status) {
        return;
      }
      let respData = getResp.data;
      return utils.toJSON(respData.responseText);
    }
  };
  const TiebaSearch = {
    $flag: {
      isInitKw: false,
      isInitPost: false,
      isInitHome: false,
      isSetScrollEvent: false
    },
    $even: {},
    $context: {
      lockFunc: null,
      loading: new LoadingView(true),
      gbkEncoder: new utils.GBKEncoder()
    },
    $data: {
      /**
       * 搜索类型，默认0
       * + 0 本吧
       * + 1 全局
       */
      searchType: 0,
      /**
       * 搜索结果类型，默认1
       * + 0 按时间顺序
       * + 1 按时间倒序
       * + 2 按相关性顺序
       * + 3 只看主题贴
       */
      searchModel: 1,
      /**
       * 下一页
       */
      nextPageUrl: null,
      /**
       * 当前搜索的内容
       */
      currentSearchText: ""
    },
    $ele: {
      /**
       * 搜索的容器
       */
      $searchContainer: null,
      /**
       * 自定义的顶部导航栏
       */
      $navTopSearch: null,
      /**
       * 返回按钮
       */
      $navSearchBack: null,
      /**
       * 搜索模式选择的容器
       */
      $selectWrapper: null,
      /**
       * 搜索模式选择
       */
      $select: null,
      /**
       * 输入框
       */
      $searchInput: null,
      /**
       * 搜索按钮
       */
      $searchBtn: null,
      /**
       * 搜索结果的容器
       */
      $searchResultContainer: null,
      /**
       * 搜索结果的列表
       */
      $searchResultList: null,
      /**
       * 选择搜索结果模式
       */
      $searchResultModel: null,
      /**
       * 以下内容来自xxx吧的搜索结果
       */
      $searchResultFrom: null
    },
    init() {
      let that = this;
      utils.waitNode(".more-btn-desc").then(($oldMoreBtnDesc) => {
        that.addCSS();
        $oldMoreBtnDesc.outerHTML = '<div class="more-btn-desc">搜索</div>';
        let $newSearch = domutils.createElement("div", {
          id: "search",
          innerHTML: `
				<div id="nav-top-search">
					<div class="nav-bar-wrapper">
						<div class="nav-search-back">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64"></path><path fill="currentColor" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z"></path></svg>
						</div>
						<div class="nav-search-select-wrapper">
							<select class="nav-search-select">
								<option>本吧</option>
								<option>全局</option>
							</select>
						</div>
						<input type="search" id="tieba-search" placeholder="请输入搜索内容..." autocomplete="off">
						<div class="nav-search-btn">搜索</div>
					</div>
				</div>
				<div class="search-result">
					<div class="search-result-model" style="display: none;">
						<div class="search-result-model-item" data-model="1" data-active="true">新帖在前</div>
						<div class="search-result-model-item" data-model="0">旧帖在前</div>
						<div class="search-result-model-item" data-model="2">只看相关</div>
						<div class="search-result-model-item" data-model="3">只看主题</div>
					</div>
					<div class="search-result-from-info" style="display: none;">

					</div>
					<div class="search-result-list">

					</div>
				</div>
				`
        });
        document.body.appendChild($newSearch);
        domutils.hide($newSearch);
        this.$ele.$searchContainer = $newSearch;
        this.$ele.$navTopSearch = $newSearch.querySelector(
          "#nav-top-search"
        );
        this.$ele.$navSearchBack = $newSearch.querySelector(
          ".nav-search-back"
        );
        this.$ele.$selectWrapper = $newSearch.querySelector(
          ".nav-search-select-wrapper"
        ), this.$ele.$select = $newSearch.querySelector(
          ".nav-search-select"
        );
        this.$ele.$searchInput = $newSearch.querySelector(
          "#tieba-search"
        );
        this.$ele.$searchBtn = $newSearch.querySelector(
          ".nav-search-btn"
        );
        this.$ele.$searchResultContainer = $newSearch.querySelector(
          ".search-result"
        );
        this.$ele.$searchResultList = $newSearch.querySelector(
          ".search-result-list"
        );
        this.$ele.$searchResultModel = $newSearch.querySelector(
          ".search-result-model"
        );
        this.$ele.$searchResultFrom = $newSearch.querySelector(
          ".search-result-from-info"
        );
        this.$context.loading.initLoadingView(true);
        this.$ele.$searchResultContainer.appendChild(
          this.$context.loading.getLoadingViewElement()
        );
        this.$context.loading.hide();
        let searchParams = new URLSearchParams(window.location.search);
        let $moreBtnDesc = document.querySelector(
          ".more-btn-desc"
        );
        if (window.location.pathname === "/f" && utils.isNotNull(searchParams.get("kw"))) {
          domutils.on($moreBtnDesc, "click", () => {
            this.enterSeachMode();
          });
        } else if (window.location.href.startsWith("https://tieba.baidu.com/p/")) {
          domutils.on($moreBtnDesc, "click", () => {
            this.enterSeachMode();
          });
        } else {
          TiebaSearchSuggestion.init(this.$ele.$searchInput);
          return;
        }
        let searchEvent = () => {
          let searchText = that.getSearchText();
          if (utils.isNull(searchText)) {
            alert("请勿输入纯空格或空内容");
            return;
          }
          this.$data.currentSearchText = searchText;
          TiebaSearch.clearOldSearchResult();
          TiebaSearch.postsPageSearch();
        };
        domutils.on(this.$ele.$searchBtn, "click", () => {
          searchEvent();
        });
        utils.listenKeyboard(this.$ele.$searchInput, "keypress", (keyName) => {
          if (keyName !== "Enter") {
            return;
          }
          searchEvent();
        });
        domutils.on(this.$ele.$navSearchBack, "click", () => {
          TiebaSearch.quitSearchMode();
        });
        domutils.on(this.$ele.$select, "change", (event) => {
          let select = event.target;
          select.value;
          let text = select.options[select.selectedIndex].text;
          log.info("当前搜索模式：" + text);
          if (text === "本吧") {
            this.$data.searchType = 0;
          } else if (text === "全局") {
            this.$data.searchType = 1;
          } else {
            log.error("未知选择模式");
          }
        });
        domutils.on(
          this.$ele.$searchResultModel,
          "click",
          ".search-result-model-item",
          (event) => {
            let $click = event.target;
            log.success("设置当前搜索结果模式：" + $click.innerText);
            this.$ele.$searchResultModel.querySelectorAll(".search-result-model-item").forEach((ele) => ele.removeAttribute("data-active"));
            $click.setAttribute("data-active", "true");
            let searchModelText = $click.getAttribute("data-model");
            let searchModel = parseInt(searchModelText);
            this.$data.searchModel = searchModel;
            this.clearOldSearchResult();
            this.postsPageSearch();
          }
        );
      });
    },
    addCSS() {
      addStyle(`
		.more-btn-desc{
			margin-right: 10px;
			font-size: .15rem;
			font-weight: 700;
			color: #614ec2;
		}
		`);
      addStyle(`
		#search{
			--bg-color: #F5F6F8;
			--ohter-bg-color: #F3F3F5;
			--result-item-bg-color: #ffffff;
			background: var(--bg-color);
		}
		#nav-top-search{
			top: 0;
			position: fixed;
			width: 100%;
			z-index: 1000;
			background: var(--bg-color);
		}
		.nav-bar-wrapper{
			position: relative;
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			-webkit-align-items: center;
			-ms-flex-align: center;
			align-items: center;
			width: 100%;
			height: .48rem;
			-webkit-box-pack: justify;
			-webkit-justify-content: space-between;
			-ms-flex-pack: justify;
			justify-content: space-between;
		}
		.nav-bar-wrapper svg{
			width: 0.16rem;
			height: 0.16rem;
		}
		.nav-search-back{
			margin-left: 10px;
		}
		.nav-search-select{
			background: var(--other-bg-color);
			height: 32px;
			line-height: 32px;
			border: 1px solid rgb(184, 184, 184, 1);
			border-radius: 5px;
			text-align: center;
			outline: 0;
			box-shadow: none;
			margin-left: 10px;
		}
		#tieba-search{
			background: var(--other-bg-color);
			padding: 0px 10px;
			height: 32px;
			line-height: 32px;
			font-size: 14px;
			border-radius: 5px;
			box-sizing: border-box;
			appearance: none;
			border: 1px solid rgb(184, 184, 184, 1);
			outline: none;
			flex: 1 1 0%;
			margin: 0px 1em;
			min-width: 80px;
		}
		.nav-search-btn{
			margin-right: 10px;
			font-size: .15rem;
			font-weight: 700;
			color: #614ec2;
		}
		.search-result{
			position: relative;
			top: 0.48rem;
		}
		.search-result-model{
			display: flex;
			padding: 0px 10px;
			position: fixed;
   			width: 100%;
			top: 0.48rem;
			height: 0.32rem;
			z-index: 1000;
			background: var(--bg-color);
		}
		.search-result-model .search-result-model-item{
			margin-right: 20px;
		}
		.search-result-from-info{
			margin-top: 0.32rem;
    		padding: 10px;
		}
		.search-result-from-info[style*="display"][style*="none"] + .search-result-list{
			margin-top: 0.32rem;
		}
		.search-result-list{
			overflow: auto;
		}
		.search-result-list .search_result{
			background: var(--result-item-bg-color);
			margin: 10px;
			padding: 10px;
			border-radius: 6px;
		}
		.search-result-list .search_result:first-child{
			margin-top: 0px;
		}
		`);
      addStyle(`
		.search-result-model .search-result-model-item[data-active]:after {
			content: " ";
			background: #7458FA;
			height: 4px;
			line-height: 5px;
			margin: 0.05rem 0px;
			border-radius: 6px;
			width: 0.2rem;
			position: relative;
		}

		.search-result-model .search-result-model-item[data-active] {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		`);
      addStyle(`
		#search .search-result-content img.BDE_Smiley{
			width: .2rem;
			height: .2rem;
			vertical-align: middle;
		}
		#search .search-result-content img:not(.BDE_Smiley){
			margin-top: 8px;
			max-width: 350px;
			cursor: url(//tb2.bdstatic.com/tb/static-pb/img/cur_zin.cur),pointer;
			height: auto;
			width: auto;
			width: 100%;
		}
		/* 搜索结果高亮 */
		#search .s_post em {
			color: #e10900;
			font-style: normal;
		}
		#search .BDE_Image_container {
			display: flex;
			overflow: auto;
		}
		#search .BDE_Image_container img.BDE_Image {
			max-width: 100px;
			max-height: 150px;
		}
        `);
      addStyle(`
		#search .search-result-media {
			display: flex;
			align-items: center;
		}
		
		#search .search-result-media-left {
			padding-right: .08rem;
		}
		
		#search .search-result-media-left img {
			width: .35rem;
			height: .35rem;
			border-radius: 50%;
		}
		
		#search .search-result-media-body-author-name {
			margin-top: .02rem;
			color: #272829;
			font-weight: 400;
			font-size: .16rem;
			line-height: .15rem;
		}
		
		#search .search-result-media-body-time {
			margin-top: .06rem;
			color: #a2a6a8;
			font-size: .12rem;
			line-height: .12rem;
		}
		
		#search h1.search-result-title-h1 {
			font-size: 0.16rem;
		}
		#search .search-result-content {
			min-height: 66px;
		}
		#search span.search-result-content-span {
			color: #141414;
			text-overflow: ellipsis;
			display: inline;
			word-break: break-all;
		}
		
		#search .search-result-title ,
		#search .search-result-content,
		#search .search-result-bottom-toolbar{
			margin-top: 0.08rem;
		}
		
		#search span.search-result-bottom-toolbar-span {
			color: #b7b9c1;
		}
		#search span.search-result-bottom-toolbar-span::before{
			content:"贴吧："   
		}
		`);
    },
    /**
     * 清空搜索结果
     */
    clearSearchResult() {
      log.success("清空搜索结果");
      this.$ele.$searchResultList.innerHTML = "";
    },
    /**
     * 显示搜索结果选项
     */
    showSearchResultModel() {
      domutils.show(this.$ele.$searchResultModel);
    },
    /**
     * 隐藏搜索结果选项
     */
    hideSearchResultModel() {
      domutils.hide(this.$ele.$searchResultModel);
    },
    /**
     * 显示搜索结果来自xxx
     */
    showSearchResultFrom() {
      domutils.show(this.$ele.$searchResultFrom);
      let searchKw = "全部吧";
      if (this.$data.searchType === 0) {
        searchKw = TiebaCore.getCurrentForumName();
        if (utils.isNull(searchKw)) {
          searchKw = "未知";
        } else {
          searchKw += "吧";
        }
      }
      this.$ele.$searchResultFrom.innerText = `以下内容来自${searchKw}的搜索结果`;
    },
    /**
     * 隐藏搜索结果来自xxx
     */
    hideSearchResultFrom() {
      domutils.hide(this.$ele.$searchResultFrom);
    },
    /**
     * 进入搜索模式
     *
     * 显示输入框，返回按钮什么的
     *
     * 如果已在搜索模式（即已显示搜索框），返回undefine，否则成功进入返回true
     */
    enterSeachMode() {
      domutils.hide("#vite-app");
      domutils.hide(".main-page-wrap");
      domutils.hide(".tb-mobile-viewport");
      this.showSearchContainer();
      setTimeout(() => {
        this.$ele.$searchInput.focus();
      }, 20);
    },
    /**
     * 退出搜索模式
     *
     * 隐藏输入框，返回按钮
     *
     * 如果已不在搜索模式（即已显示搜索框），返回undefine，否则成功退出返回true
     *
     * 显示本页主内容
     */
    quitSearchMode() {
      this.hideSearchContainer();
      domutils.show("#vite-app");
      domutils.show(".main-page-wrap");
      domutils.show(".tb-mobile-viewport");
    },
    /**
     * 获取搜索内容
     */
    getSearchText() {
      let searchText = this.$ele.$searchInput.value.trim();
      return searchText;
    },
    /**
     * 获取搜索结果
     * @param qw 搜索的关键字
     * @param pn 当前页码
     * @param sm 搜索结果排序
     * @param kw 搜索的目标吧，留空是全部
     * + 0 按时间顺序
     * + 1 按时间倒序 如果加上only_thread为1，就是只看主题贴
     * + 2 按相关性顺序
     */
    async getSearchResult(qw = "", pn = 0, sm = 1, kw = "") {
      var _a3, _b;
      let param_sm = sm.toString();
      if (sm === 3) {
        param_sm = "1&only_thread=1";
      }
      let url = "";
      let originText = "";
      if (arguments.length === 1) {
        url = arguments[0];
        log.success(`请求的下一页url: ${url}`);
      } else {
        originText = qw;
        qw = this.$context.gbkEncoder.encode(qw);
        kw = this.$context.gbkEncoder.decode(kw);
        kw = this.$context.gbkEncoder.encode(kw);
        log.success(`搜索内容gbk编码转换: ${originText} => ${qw}`);
        url = `https://tieba.baidu.com/f/search/res?isnew=1&kw=${kw}&qw=${qw}&un=&rn=10&pn=${pn}&sd=&ed=&sm=${param_sm}`;
      }
      log.success(
        `当前请求第 ${new URLSearchParams(new URL(url).search).get("pn")} 页`
      );
      let getResp = await httpx.get(url, {
        fetch: true,
        headers: {
          accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
          "cache-control": "no-cache",
          pragma: "no-cache",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "none"
        }
      });
      let respText = getResp.data.responseText;
      if (!getResp.status) {
        if (utils.isNull(respText)) {
          log.error("获取内容为空，可能触发了百度校验，请刷新网页再试");
          return {
            success: false,
            error: "获取内容为空，可能触发了百度校验，请刷新网页再试"
          };
        }
        if (respText.match("wappass.baidu.com") || respText.match(
          "https://seccaptcha.baidu.com/v1/webapi/verint/svcp.html"
        )) {
          let wappassUrl = (_a3 = respText == null ? void 0 : respText.match(/href="(.*?)"/)) == null ? void 0 : _a3[1];
          log.error("触发百度校验: " + wappassUrl);
          window.location.href = wappassUrl;
          return {
            success: false,
            error: "触发百度校验"
          };
        }
        log.error(respText);
        return {
          success: false,
          error: "请求失败，可能是网络异常或者接口异常"
        };
      }
      log.success(getResp);
      let searchDoc = domutils.parseHTML(respText, true, true);
      if (searchDoc.querySelector(".search_noresult")) {
        return {
          success: false,
          error: "抱歉，没有找到与“" + originText + "”相关的结果。"
        };
      }
      let result = [];
      let nextPageUrl = (_b = searchDoc.querySelector(".pager-search a.next")) == null ? void 0 : _b.href;
      searchDoc.querySelectorAll(".s_main .s_post_list .s_post").forEach(($s_post) => {
        if ($s_post.id === "post_user" || $s_post.id === "no_head") {
          return;
        }
        let postItemUrl = $s_post.querySelector("span.p_title a").href;
        let postItemTitle = $s_post.querySelector("span.p_title a").innerHTML;
        let postItemContent = $s_post.querySelector(".p_content").innerHTML;
        let postItemForumName = $s_post.querySelector("a.p_forum font.p_violet").textContent;
        let postItemAuthor = ($s_post.querySelector("a[href^='/home'] font.p_violet") || $s_post.querySelectorAll("font.p_violet")[1]).textContent;
        let postItemAuthorHomeUrl = "https://tieba.baidu.com/home/main?un=" + this.$context.gbkEncoder.encode(postItemAuthor);
        let postItemTime = $s_post.querySelector(".p_date").textContent;
        let imgList = [];
        $s_post.querySelectorAll("img.p_pic").forEach(
          (pictureImg) => imgList.push(pictureImg.getAttribute("original") || pictureImg.src)
        );
        result.push({
          url: postItemUrl,
          title: postItemTitle,
          content: postItemContent,
          forum: postItemForumName,
          author: postItemAuthor,
          authorHomeUrl: postItemAuthorHomeUrl,
          time: postItemTime,
          media: imgList
        });
      });
      if (result.length === 0) {
        return {
          success: false,
          error: "抱歉，获取到的数据为空"
        };
      }
      return {
        success: true,
        data: result,
        nextPageUrl
      };
    },
    /**
     * 获取搜索结果元素
     * @param currentSearchText 当前搜索的关键字
     * @param data 搜索的数据
     * @returns
     */
    getSearchItemElement(data) {
      let searchText = this.$data.currentSearchText;
      let time = data["time"];
      let newTime = utils.getDaysDifference(
        utils.formatToTimeStamp(time),
        void 0,
        "auto"
      );
      if (newTime.endsWith("小时") || newTime.endsWith("分钟") || newTime.endsWith("秒")) {
        time = newTime + "前";
      }
      let splitText = searchText.split(" ");
      splitText.filter((value, index, _splitText_) => {
        return _splitText_.indexOf(value) === index;
      });
      splitText.forEach((text) => {
        data["title"] = data["title"].replaceAll(text, "<em>" + text + "</em>");
      });
      let resultElement = domutils.createElement("div", {
        className: "s_post search_result",
        innerHTML: `
		  <div class="search-result-media">
			<div class="search-result-media-left">
			  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAGdBJREFUeF7tXWuT3MZ1Pd0AZmZfXL4pS5Qo2ZEcybG/JFX583FKkT8lKVc5FiU6liWbkimK1GbJfc4MHt2pc283gMHuPHa5qxlRO1XUUksAA9zT93Xu7Qvzb38sPK4+KyMBcwXIymAhN3IFyGrhcQXIiuFxBcgVIKsmgRW7nysfcgXIiklgxW7H/PbT8ioPWSIo3qv4jTH68wqQJaIBwDl3BchyIZj97VcasmR0osmKt3EFyBUgS5bAin/9lYYsGaC2yeLff5KAtON8DTZX57N0QLwJYZ+3KhXfEpGJotNjJv45HN8VqO1kVS4c0PzadL7CY5VAWT4gQdC1UE4FhAdFUCxmrfBpgAiYE6DyGz2I+RUgC1iIRrBxiVvoag/ARO1pAwhgEq72F7lwflDCKRq2wK1d6iFL15DafnTMk40mjOu3/jsaUOrjW8s+/K6rJY0EG9MXf+dMMJWXKubFL76igDgoIPzTaEj9WOJ3fGvFuwnQ2ibIBg1SrE7Sdvzn6GcWF9vlHbk6gPAZRWq6iptVPn0FT5iwGA90TVEAJF7FBDIvBgirBIaIYNnkogre1C5bQWk78ZNmRjVHRdw2T23hTo+dJrVklRz6CgESzMaJCItgODA0bqKwCEYbkMZh16Fx0JSOz2+sXsDlCpCu+a1KWGvhbQJmqo5hqNQG+Bcnf698qeGpMfDewJpUdcg5GFGRRovkGMYBEQnnkSTh2jw+1h28DddbrXLQkk2Wg3FeBWNV2I70gTETwnLwSKwC4ipi5QVEHmsT/q+XP21gRFO8R2KsAu30fAFfjtfvWLWP+e2n+VKXSBRK5HS4sA0SkZP+zogmWKgwqSoE0XsiY1GJ5ujxxhAAFbEKvZKf/A5qiWqV/psx1BCgksjrND/1w0DFe2/zWSsASLwhFYoAIqaJWbQVEJRdoZt2CoQrRfBqivRYBaGCDeZOzZaHNQkqzwtYEFZHzUgz+aKyLGEFweUBEoOTCP/SAWluKNp3Cj3UmQWUEEkZB2scetajP0ixPuhjY81iawOg4ojycMVXQJ4Do7FDXji8PDjEwXGJsgJsbx2lT1A5PUG0hicsFZBJTVw6INH50tw0DpdCUhrEgqveY5AaXLs2wK3tBBvr+hCMs2iIQggw8WSaOqqoj8fA7h6w8/IQx2MPYzOig4IBxUoxWZKHLNeHxGCI5kmcefAPiXVIrYevhrh35zru3rLoZwoAFUgMkPgLwiKOIfiR6Kg1LOZvow6McmBnF/hu5wXGuUM6WBdtoSlblc/SAaFUxdYHR46qRIISaVKin3q8//PtGggKTV1z2VrXSicqDOor6p8EiU6ToISDeMThEfDs+T5298dwdh0Venp2DAgYbgu+lw9UO9ITv/nvD2fvD+n2DcWVNO333ZU273w64iTJ4GnXnRMgTHWIuzf6eO/+JlKJuppPDAlPD1g7gHTOi6wJtbIogKfPD/Bsp4JLNpBXBj5l1JYTQ/VdhL8KmhbyHR/JSCZMrX6qaRo27/m7offSAUkSjXaAFP3EwhX7eOveJt5+I0UaTFPjMVQVZLHPRqaWT8xRJGQOyWT8e+GAb595PHl2CJ8OkDMqsBVKV2n+UlEjMzV9lwRIF8ilA0KfkWYWRTFGZjxu31rDu2+qGCQf72ZJ58jlYi4SH17yGiaIAMYOePykxM7eEIWEEAbGpvAVj0lhqLkCSCnMAY2rmDLREPq92WncPA1ZOUBk4fkCaVJhYz3BB++tyyPTqjP/UMfd+oSS71nte1cwStOQIaBHAj7/80sc5fQjAxSVQZZlqCoP6xI4+pQJQKhqTTI6zVwJkCeCDT26248VrzFXQ7o+oz7xjLTDiYawcD4BSZDD4Ai//ugOBswngnacVIZuAjff6UZtOE04cW0XDI1z4E9f7iJ3A1i7jmGeI03TUGfx8MhVS0KdxiITpplgLfKZ9vxn1pDLBES1o0KCMd55cwt3bxkxVUYMQ6s7oUZmGhW/iEiaY5pVSy0p4ZjNI8HTnRJPvhujcBlskqBwzPRpOFkMywGjgDBEj76lW5OZdic/DkDgkPgS/azCr365pcFnqStTe5AtYlDT0O/BltVPPl9LqqqqicW2wBjhGeNQkZJBH8MC+OKrIY5zminCkIYcJQAClgE0kkt8Xy71qoCcAGpe2HupGoISthrj7be2ce8Ggrliksc/iTiQmG3Xxdw6umq6UM6iH5M2nddQVsBTT73Fsx3gm6dHcDaB8wl8pPqpHa38pwHk1UzWuQE5y0Mveix9R+pH+M2HNwUM5hzCr4t/UWdy0YBM3JuAS15ef5t7C4bC//NoD5VP4WwG5zMlPGO+T59B0jP4kkV9yKIyWdipL3rBsxxH37G9VuKXzMZjbiHZdUDCivUORkJN02T+ERPBs3xr61jxYSHNFyoeYJr8v18NcTgsUZoMDj3hmRtdjTV/DX+XBsi01ppFmwROOz8xQ9y/neH+vYFELCJyPm+LjiIg+mkBco5c5FTIIiCaUogmMOJ68tzh6feH4typJRJiiJrwbzRdvM35vqv9nYvKb2ENWfSC09bqaeenGOL9d9Zx61oiQMTiUn2NEFKq2wiAnFMZpp4WaeHgpCjul0fAF397icIPUJl0EhD6N0OtXRIg05vO9BHnacis81PmHu9vY6uvlbxQEGz49FOSwAUZk8Vhayfahn4EGFXAwz/tocSaaA2FHxv3pEgmz71YUHFW+c3VkLNesCuJeYD8y4fb6FNBguvg+UzDhNiQLFcz4nZa0vrfxQU/7cjoQ+Snw9h7kG/+w8OXqMz6SUB4WwRDtKTR3LNYhvax3QU9FZB5QMSLTtOQRc7PcIR//adtJPKQTd3Oo0IqIRb/gdRr+Dbx9SoGc0aTMQsPvZ6ufNbYmST+/tMDlIYaEoIKr50uDCoWAWSR5z/NwqwGICxK2aZZrgZE1CXY6jpxv2hACETogmctn5EWLH7/8BC5WwMSpo0sIzeAUDuqOSbr3IB8/Ony5mXRh1BD9FGBKviRxmxdVDg13bLVLoTFIaqicUxX8d8PD1GYDVQSd2mIK7xb4K+q1q0tKvxF7KtZJUBiCqKARNdxdkJxkQePxzSABMtIH2IN/vPhgTj1xiRHQPR+ihAmJ4sl6gvf0koAksygqC+7mY0+SYMIdtxpQFEZBYRhL02pfhSQaFipIfR7PwlAYkGpW1haeJmd4UAJEsRcNdEcc5H/+ow+pB8qhREQctCqEq8tIP/8q23023VzyZ5bMXCLhddo6KI/2gdWAwJg6IA/PDpEjsFEvsFc5DUHZIjfvL+FzX5b0LGl55LzD8E1OgCnFcDALh+MgM/+cojC9qUbUrNyTQ7bgIjezK7gnnn1LNmHDPHBgy3c3ArEiPTczk4I4xNejKY0gDinbaskGHf3gT9/zTyElKfSJJHdfc0BGePdN9bwxu3IU4UMXew6y6dkHFX0F9DrcMpqbUIkqZ8nrBwCz3eBr57soyIHbell2tRJKAmEFfFaaQjp91sbHr94b1NbQkX+BKNSQEjDd3yISpWVu7ORe6fbjhYgEmHpTt8vvx7hxYFD6dOQqTeAyHVa5OJrBkiOfjLGr//xhhSnqBBZBAQZXFXJqo2FqgiGOveLAETBld4taNmWGvLHR3vIS6XepcDLdi0X0teQoUe29+IBeTi+YLe0uB8zpPHcCB+8exPXNpV+jw3WtckKWtLcZIs6icTg4l954sg6xA7F3N0j4M9fvpDOE3IYjqk5nXcLkFcsi828W/PxMgHxDqlxuHGtj/feToRCaQChrWoirTYgYsU6HNd5MZGaNndmBUC++nuJ3b0RgAHyqoSXrVvu0gDpblhaMiDUCo/UFvjol5sCSE82SeXafkNb0dGQmoK8KEDirioLjErg0ZcHGBcJ2JDEry/DXsfL0pATzdbL1BDxBd4iNTnu3enj/l3VEna/i66w34ErtI6yurtxXz1TpOZxDChx//b7HN88G6KsUmTpGkofWN0fQEPkGRn2/8dns/eHTGt5rPOBOR2MM88PnRupKZCZA3z4/m2sZezpLeEYhnJjzUSUdfGAsDBGTmo0Bv7y+HscjPtwZh3UEdZGSktj5pC0fQgBkoY5rpvZGdEi8msfsxKAsLe3n4xw59YAb9/ri+dIOs0NjY8IoepCJqtNxXajMm2cjiX1J8+O8fT5Hiq7DW/XULCVNMtQhKaG4NvDbahbvwhAur5vwoech1mdQPeM/b4SvdBXsPG5PMag5/Hegy1sDRj+6i4pLl+pU8SWLUbBrcrh9KZrXdnN+mXHevRJBIOUCAUOjNix+JcXGOYeJluTBjnel3Qvhu3W04LsV33+LoE6V0POG70seh7bPLn5kquNbaWDXoWPPtiU05kFyBY2+pKwv0MTM4paNg7M2OWkbZ9SDaS+lbq3vUk2HQpnBZAvHuc4OBzBJnTk3CvPM9N6S7UsnB9oY+jSASlcgX6awZXMygiIx+Y68IsHa8F0FfCeaZi6+3Zj2+Tu2dYabmVW0rVD3PgnUDFSO2cGmADfPAf+/nQXadaXiqWXfSMWpdM9j4wCf8jPkgHRGSViKrlbyVDsHlV1hPv3NvCzu5m4VjJMVjrZUmn7FSWRPqop1cSuDNvdiSGr46++3wW+fvpCKBJqR06UZAiB6oNs2JEBBT/cZyUAkX2GSGQLQlFUsgXauWM8uH8Td2/EinYVxvGFZFFWe0fyrUFnXRFWjjGTFTqAwt4lGN++QIEUlUlkWkTWG6AoCpkMIaM7JmajKPhxj+FiXVlnB3LJgGjDmQKiIzTSdIAyL5BaIEtKvH1vE9e3gR7LFXHfSOihmihktZ+9DUx0zBxiw5zDAbsvgW+f7mNUGtgsk552Otc07SHPc9k9xXtpO1wTVPO1B0QGyrgS3sZJDgkM7ZjjnnUODRjiZ3e3ce+2kYY6MVfiU+Kggeg7Tus24FF03hwWoOnmk+9GeL5zDGs3UFZGicNUL5wTLboWCTLUVEUgIt4NIPq9F+3sl64hVemR9bhbiaZCp/RIu7/twQrXVaHMD7C9meDNe9dwffP02Ep8dqvhLYbD0QMcjLw476ORR+UHKMoUSTqoB9TEEJdgMPLrZ4mYr26/8WUCslCmfnYreIYzaFpcmG8Vth0znJWVSTvO0KgskFmPaxspNjcSbAwMBn2LQW8yA2mNC6gDVKFFKmD/oEThEjzbOcC4JMfMHCNDyVlaYYtWl1OKK/+npSHcqyfjiaQqgYq5BbUkRk/ec2ulmIXN9QTXNjKklgPPSvTSDJk1yHoc22TE50jdxNH0cDBAISaoLJiJ9MDpo9/tHCMvDQpv4ZNWa2g9b0sjPpmrFVtWY1gX1tllaogsxHlc1hnW+7kOlaRPGN2k3pxf22uSbZXuQ9ze7uPmdgprKlRFrmObpPyukVYSKHT52codOCHCJBmKEnj6/RilS1AZVgatAE8tpL+I1/Fx9lb4XTOcphtlvaY+pJ6HzFXa4umiCWFe4l2B61s9XN/OYE0BL86e4zgMknpCnAKjg82aUX5c0cakojU7OwXGFRvhUsnGS8+5W3pebbK8lnEbDYnL4ycCCJ0mjVUMMcVkkOqQihFXcIkscdjezrC1yZ54zUcISJwOFwWqQlUOS8AhwcIIC7oL6sVejr3DQvyKOHQZfMNgInBlBD/O+WVeJGMEdcfUlEHa57IKs05aAZPFqW5xihxjfybgyjuR2bZujI2NDNev9THoJ6IdYqKE3mCIyhmK+ogN0deEwPI7yyzH4HjosLs/xHBMIXMTNvVAt0xLyyh9S5jR2FQkQ8k4fsfF9B9NxWTpgMRpo9yUL8Ij2Zga9HsW/V6CDUZUfYMeAQrDY3icWHBZ4TEqozPWcWZyHQpXxmeUMEkio/yoLaOxx/GokJ/jghrEzUKaNAoIXB1hDyHP/8G5rE8+L/y8IspMFUOYmVjzSlP4pXARVX09huuTOzIYWWVZgsFaT8b29fqQqIkBDn/K4q10gimjMtUG3cWkEVkkqMJgmBbprhk4tzsH05PQKwFVoR0m45wT50ocD3Pk41Kodw7IpHOvR80KZXK6FOJ8yIuyXeaThyMRUTeca4Q26dRi9K/NYyTgEng6Sk/TQxvC/YLqExIJLS08a6Qs1SYa0bgql4SLK//6Ziaa0O/TZoddbKElSMAL48cb2moyM9e5va1Ph8+qF1uYAdxs1tTrSJmKm4U8MB4BB0c5hkcl8pLPpGSN9muF9y7ErWzheikDhLLtA8OM4DiQYMr91XsWO/9+bkCijeUqoh0XFypzQ3Ql8qMj+xjTEwiNltKE9Hof17aoDdpXErPhyB/FcxdadS3G97QC27wCEhcBM3PvEpiUhSlIiHx0BByPPPYOjlGxPiKztDhqw4vvijOAg9zbw9L1tq2OteW1ydfpoJqmW6Z++0OHsTY0WTNNUicxkhXfUd8qJFakq+k+xXY7J8OPGSURiF5mcP3aBrY2jWTZUlrif5iHdMYYadAThyPPhmWewGefbZXO75QDpawbZheMC2Bvv8DeAZsfuMq0bMZe4NCxBT4oBwlqtBjJmtAeW0/SjmZPzXXU1PbLAWQhngcQNXH6qIzlpRLHor8sATpfNU0kKawpcX17DTe2LPrscg8DAnQG7yRBKPlhuG7Uljj9bSFtOfNBRgCJ36v19ZhvkNJRU0bAaM52X+TYPxyHEi/HbvAJQ4QWcyBDuFQOGnwERrTVaR+3WgsArbc1yP9//LmMhzzBWjbJ7nTmX9+9EVoxnQHtqeyodSWy1GNjLcGdmyl6GZCxgYTfRIrdEjCl2+O4n/Z9TdSZ582jmlEDOQs+UqcPmiLjPILWs4LoSHaGquPBEfB/u2McHw3hmZzanmT+0UrE7yRjICaUIXywQc2QzWafe/PimmDm5wMy/bFkFIUrhK5OmRFXTswTafIb1zdw95ZSsLGJWodIqznjBGqbpDp1WkbE6vdEYKT8LXMx55RQp4U/4bbbQJ/Wg6Ez4cN3C5umURs1U2h4CtsBRTCtHIrNEZEvXnrs7O5jxOGZJCs5FjBEZlxQMWSWEemtRxBWOVqB0E7UlrD5OPiQaEa7JWQ5+bRV2ApzxWIVBawtcPPaOu7e6qHPvIv+3VfIEt3oIoN+OC2OI8JlCnVDl7QdcvuFvfr76aBMCvxkbHpaSN91/gyh20yBLgwVqobAMZMPC4z37rXY9eS7fRznHnlJLzIQ0lLWmNA33G4dmIUgw8ihqR852TMzE5BFwJB2smqMQZbg1s0N3L7BTkTVBG4tyEjkcRky2gqDJyVvCw0HYirC/yvT2miJ/n1ek8GrpM7x2k3uFAf712RjeBNDFGCjsUJ4gTMyyZF9vzvEqOBrN9Zk1lZN4YQIix2a+pkMn6c69UneP0RSku2GqpoYUX0AVviYwcpejmqI9Z7FvbvbuLWt3RyG9Wlm0axJ08WF7kBZeXE+SpDj4u38p1UE9QFnfeYBejJUDlRJ96JCq0z+sr4jA+wdshX1WMaaO8Pey8gcaDwlUWf9hgaabE7Ni+8/aa5bR1knAAkPSqdWlhXSLEEl83UdBj2LIh/L8MrrGxnuv7GJtYFM54O1XjWEbyqQcauNwYlgyIMFk8eYbBYojYKcD5Cz9+4F9rf2QZMaGkgb+VelfXROCzWFDXePvz3G4biCSQZSIla+jcybk5xEygbhPShqMSa7Wswnn+v+kMZ3xObm8JPJjTCmdHTEI0ciM9nHuL29gbfu9tBno3q4LuezUw0IorxOoiVHjcro1BpTIa+kmGeVzhIudY6d140Z3i9/4htil/3M8+VtP/q8sk060TnAf/vmEHtHjBbWxOGTqNCSQGxe1SZzzekmF9oCgGh4ygnUBCOzFYp8iDfv3sKdmwbrmfxaODk5JCxpoSPC23OiqZLbqqOM0FAQBhW/gsxf6dRpGhSt0zwXxrUl+xNTThHSvITR4V+/HmH/qETpOZEulfiNpClDNo3A2BnJXOcEIJqpn4iugsliSz7BMBx2TEa2GuHOjU28dW8grTmMpELThghGtEleLRQilVN8brTSUTMWc8vT1Gj22fMEegLNztfUgNVf0z5AE0s+q/PcrVshsRnyED49flJg5+UQPiE1QRpF370YKSVakBhRxvto+ZDJWxNbyUEszqGXQrSCbyu4sZnhwf0N9KRW0cTwky2ereioLhqd700djUBPB2SeSTq3+gixWbeyTL1MfVftLd0mwTAHiMM335V4urMPJKQp1HwRNFeW9cvK2hefmqnXiBkv7Cz5p7UU+IcHG9KZLi0CMgYu3FJ4TZHQBTG8lbKQLq1ATzXfHR+4/sdziu4V/Q8ZqNM/isYswCVIUdZN6RLpDwiePmwg5XS6v/59H3tHTOf60sStWxkahvgUQDoTBOu9FyUSGTacS2j73jtbAoq8QiI4KpU07eLkW8+YgcfX253Q9kmtf7V5Ga8IyKvM6uBXs0FVFh2jqdiLFB6YySNFybDpi69eYv/YI+tvIi+aV/l1F4P53aNyokAVhchuvxQF+v4Y/bTEg3duC11OEyJbmIX+CIPaT805Z6z4LiDnVI4fw2lSBGUhrOJs+aco3QbKOO3UNB2StUX63aM8ABKnKZC/MdJ+2Tcl0nwXP3/nDq7fiG0v2pRAFjMOrvwxCObS7jEurpoP029qWwWpnyQc2ZHjr9+E4Zp2TUjJbne9+d2jkQCi79OL9l69/yBxuLMFvPMmuzb0W7jVjBv6+Vacq0+LZpsBSKyvUFMef5vj5WElNAtrK5ogt6ibTz4fqqzrFxxGDtpikFb41c8zYW9l/F5CM6aFGO7VuLQI58eE9AIaEgd8kufgwP+vHo9xNKbW6C6tNiD/DzWlRSi59QxkAAAAAElFTkSuQmCC">
			</div>
			<div class="search-result-media-body">
			  <h4 class="search-result-media-body-author-name">${data["author"]}</h4>
			  <p class="search-result-media-body-time">${time}</p>
			</div>
		  </div>
		  <div class="search-result-title">
			<h1 class="search-result-title-h1">
			  <span class="search-result-title-span">${data["title"]}</span>
			</h1>
		  </div>
		  <div class="search-result-content">
			<span class="search-result-content-span">${data["content"]}</span>
		  </div>
		  <div class="search-result-bottom-toolbar">
			  <span class="search-result-bottom-toolbar-span">${data["forum"]}</span>
		  </div>
		  `
      });
      let userAvatarElement = resultElement.querySelector(
        ".search-result-media-left img"
      );
      let userNameElement = resultElement.querySelector(
        ".search-result-media-body-author-name"
      );
      let mediaElement = resultElement.querySelector(
        ".search-result-media"
      );
      let titleElement = resultElement.querySelector(
        ".search-result-title"
      );
      let contentElement = resultElement.querySelector(
        ".search-result-content"
      );
      let contentSpanElement = resultElement.querySelector(
        ".search-result-content-span"
      );
      let bottomToolBarElement = resultElement.querySelector(
        ".search-result-bottom-toolbar"
      );
      if (PopsPanel.getValue("baidu_tieba_search_opt_user_info")) {
        TieBaApi.getUserHomeInfo({
          un: data["author"]
        }).then((userHomeInfo) => {
          if (!userHomeInfo) {
            return;
          }
          userAvatarElement.src = TiebaUrlApi.getUserAvatar(
            userHomeInfo["portrait"]
          );
          userNameElement.innerText = userHomeInfo["show_nickname"];
        });
      }
      let eleList = [
        { element: mediaElement, url: data["authorHomeUrl"] },
        { element: [titleElement, contentElement], url: data["url"] },
        {
          element: bottomToolBarElement,
          url: `https://tieba.baidu.com/f?kw=${data["forum"]}`
        }
      ];
      eleList.forEach((item) => {
        domutils.on(
          item.element,
          "click",
          function(event) {
            utils.preventEvent(event);
            globalThis.open(item.url, "_blank");
          },
          {
            capture: true
          }
        );
      });
      resultElement.querySelectorAll(
        ".search-result-content img.BDE_Image"
      ).forEach(($BDE_Image) => {
        let originalImageIndex = data["media"].findIndex(
          (src) => {
            return src.includes($BDE_Image.src);
          }
        );
        if (originalImageIndex !== -1) {
          let originalImage = data["media"][originalImageIndex];
          $BDE_Image.src = originalImage;
          data["media"].splice(originalImageIndex, 1);
        }
      });
      let imageContainerElement = domutils.createElement("div", {
        className: "BDE_Image_container"
      });
      data["media"].forEach((mediaSrc) => {
        domutils.append(
          imageContainerElement,
          domutils.createElement("img", {
            className: "BDE_Image",
            src: mediaSrc
          })
        );
      });
      contentSpanElement.appendChild(imageContainerElement);
      resultElement.querySelectorAll(
        ".search-result-content img.BDE_Smiley"
      ).forEach(($BDE_Smiley) => {
        if (!$BDE_Smiley.src.startsWith("http://static.tieba.baidu.com")) {
          return;
        }
        let imagePathName = new URL($BDE_Smiley.src).pathname;
        $BDE_Smiley.src = TiebaUrlApi.getImageSmiley(imagePathName);
      });
      return resultElement;
    },
    /**
     * 添加滚动事件
     */
    addScrollEvent() {
      log.success("添加滚动事件");
      this.$flag.isSetScrollEvent = true;
      this.$context.lockFunc = new utils.LockFunction(this.scrollEvent, this, 20);
      domutils.on(document, "scroll", this.$context.lockFunc.run);
    },
    /**
     * 移除滚动事件
     */
    removeScrollEvent() {
      var _a3;
      log.error("移除滚动事件");
      this.$context.loading.hide();
      if ((_a3 = this.$context.lockFunc) == null ? void 0 : _a3.run) {
        domutils.off(document, "scroll", this.$context.lockFunc.run);
      }
      this.$context.lockFunc = null;
      this.$flag.isSetScrollEvent = false;
      this.$data.nextPageUrl = null;
    },
    /**
     * 显示搜索失败的提示
     */
    alertErrorSearch(text) {
      pops.alert({
        title: {
          position: "center",
          text: "搜索失败"
        },
        content: {
          text
        },
        width: "80%",
        height: "200px",
        mask: {
          enable: true
        }
      });
    },
    /**
     * 添加搜索结果到页面中
     * @param data 搜索结果
     */
    setSearchResultToPage(data) {
      for (const searchResultItem of data) {
        domutils.append(
          this.$ele.$searchResultList,
          this.getSearchItemElement(searchResultItem)
        );
      }
    },
    /**
     * 滚动事件
     */
    async scrollEvent(event) {
      if (!utils.isNearBottom()) {
        return;
      }
      this.$context.loading.show();
      if (utils.isNull(this.$data.nextPageUrl)) {
        this.removeScrollEvent();
        log.success("已到达最后一页");
        this.$context.loading.hide();
        return;
      }
      let searchResult = await this.getSearchResult(this.$data.nextPageUrl);
      if (!searchResult.success) {
        this.$context.loading.hide();
        this.alertErrorSearch(searchResult.error);
        return;
      }
      log.success(searchResult);
      let searchData = searchResult.data;
      this.setSearchResultToPage(searchData);
      this.$context.loading.hide();
      if (utils.isNull(searchResult.nextPageUrl)) {
        this.removeScrollEvent();
        log.success("已到达最后一页");
        return;
      }
    },
    isShowSearchContainer() {
      return getComputedStyle(this.$ele.$searchContainer).display !== "none";
    },
    showSearchContainer() {
      domutils.show(this.$ele.$searchContainer);
    },
    hideSearchContainer() {
      domutils.hide(this.$ele.$searchContainer);
    },
    /**
     * 清空旧的搜索内容、滚动事件，重置为默认状态
     */
    clearOldSearchResult() {
      log.success("清空旧的搜索内容、滚动事件，搜索Url");
      this.clearSearchResult();
      this.removeScrollEvent();
    },
    /**
     * 帖子内搜索(搜索帖子)
     * */
    async postsPageSearch() {
      this.$context.loading.show();
      let searchKw = "";
      if (this.$data.searchType === 0) {
        searchKw = TiebaCore.getCurrentForumName();
        if (utils.isNull(searchKw)) {
          Qmsg.error("获取本吧吧名失败");
          this.$context.loading.hide();
          return;
        }
      }
      let searchResult = await this.getSearchResult(
        this.$data.currentSearchText,
        0,
        this.$data.searchModel,
        searchKw
      );
      if (!searchResult.success) {
        this.$context.loading.hide();
        this.alertErrorSearch(searchResult.error);
        return;
      }
      log.success(searchResult);
      let searchData = searchResult.data;
      this.setSearchResultToPage(searchData);
      this.$data.nextPageUrl = searchResult.nextPageUrl;
      this.$context.loading.hide();
      if (utils.isNotNull(searchResult.nextPageUrl)) {
        this.addScrollEvent();
        this.showSearchResultModel();
        this.showSearchResultFrom();
      } else {
        log.error("搜索结果就1页，不设置scroll监听");
      }
    }
  };
  const TiebaData = {
    /**
     * 当前吧名
     */
    forumName: void 0,
    /**
     * 当前吧名的id
     */
    forumId: void 0,
    /**
     * 高清图片映射
     */
    imageMap: /* @__PURE__ */ new Map()
  };
  const Toolbar = {
    $data: {},
    /**
     * 更新环境参数
     * 使用$watch好像不生效
     */
    updateEnvParam() {
      VueUtils.waitVuePropToSet(".main-thread-content .interaction-bar", [
        {
          msg: "获取参数 thread",
          check(vueObj) {
            return typeof (vueObj == null ? void 0 : vueObj.interactionNum) === "object" && typeof (vueObj == null ? void 0 : vueObj.interactionStates) === "object";
          },
          set(vueObj) {
            vueObj.$watch(
              "interactionNum",
              (newValue) => {
                TiebaComment.reply_num.value = newValue.reply;
                TiebaComment.agree_num.value = newValue.good;
                log.success(
                  "更新参数 reply_num：" + TiebaComment.reply_num.value
                );
                log.success(
                  "更新参数 agree_num：" + TiebaComment.agree_num.value
                );
              },
              {
                deep: true,
                immediate: true
              }
            );
            vueObj.$watch(
              "interactionStates",
              (newValue) => {
                TiebaComment.has_agree.value = newValue.good;
                log.success(
                  "更新参数 has_agree：" + TiebaComment.has_agree.value
                );
              },
              {
                deep: true,
                immediate: true
              }
            );
          }
        }
      ]);
      VueUtils.waitVuePropToSet(".app-view", [
        {
          msg: "获取登录用户参数 user",
          check(vueObj) {
            var _a3;
            return ((_a3 = vueObj == null ? void 0 : vueObj.user) == null ? void 0 : _a3.is_login) != null;
          },
          set(vueObj) {
            var _a3, _b;
            if (vueObj.user.is_login) {
              TiebaComment.userInfo.value.id = vueObj.user.id;
              TiebaComment.userInfo.value.is_login = vueObj.user.is_login;
              TiebaComment.userInfo.value.name = vueObj.user.name;
              TiebaComment.userInfo.value.name_show = (_a3 = vueObj.user) == null ? void 0 : _a3.name_show;
              TiebaComment.userInfo.value.portrait = vueObj.user.portrait;
              TiebaComment.userInfo.value.show_nickname = (_b = vueObj.user) == null ? void 0 : _b.show_nickname;
              log.success(
                `更新参数 userId: ${TiebaComment.userInfo.value.id} userName: ${TiebaComment.userInfo.value.name} userShowName: ${TiebaComment.userInfo.value.show_nickname}`
              );
            }
          }
        },
        {
          msg: "获取forum信息",
          check(vueObj) {
            var _a3;
            return typeof ((_a3 = vueObj == null ? void 0 : vueObj.forum) == null ? void 0 : _a3.id) === "number";
          },
          set(vueObj) {
            TiebaComment.forumInfo.value.id = vueObj.forum.id;
            TiebaComment.forumInfo.value.name = vueObj.forum.name;
            log.success(
              `成功设置参数 forum信息，id: ${TiebaComment.forumInfo.value.id} name: ${TiebaComment.forumInfo.value.name}`
            );
          }
        },
        {
          msg: "获取 tbs 值",
          check(vueObj) {
            var _a3, _b, _c;
            return typeof ((_c = (_b = (_a3 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a3.state) == null ? void 0 : _b.common) == null ? void 0 : _c.tbs) === "string";
          },
          set(vueObj) {
            TiebaComment.tbs = vueObj.$store.state.common.tbs;
            log.success(`成功设置参数 tbs: ${TiebaComment.tbs}`);
          }
        }
      ]);
    },
    /**
     * 工具栏的评论按钮的点击事件
     * @param event
     */
    goToReplyArea(event) {
      let $affixLine = document.querySelector(".affix-line");
      if (!$affixLine) {
        Qmsg.error("未找到元素.affix-line");
        return;
      }
      let scrollHeight = domutils.offset($affixLine).top - domutils.height(document.querySelector(".nav-bar-top"));
      log.info("前往评论区：" + scrollHeight);
      document.documentElement.scrollTo({
        top: scrollHeight,
        behavior: "smooth"
      });
    },
    /**
     * 工具栏的点赞按钮的点击事件
     */
    goodClickEvent() {
      log.info("点赞");
      let $good = document.querySelector(
        ".interaction-item.good"
      );
      if (!$good) {
        Qmsg.error("未找到元素.interaction-item.good");
        return;
      }
      $good.click();
      setTimeout(() => {
        this.updateEnvParam();
      }, 500);
    },
    /**
     * 发表回复
     */
    postMsg(content) {
    }
  };
  const TiebaPostApi = {
    /**
     * 评论帖子
     */
    async apubthread(details) {
      let api = "https://tieba.baidu.com/mo/q/apubthread";
      let data = {
        co: details.content,
        fid: details.fid,
        /**
         * 不知道具体值
         */
        src: 1,
        pid: details.pid,
        z: details.tid,
        word: details.forumName,
        /**
         * 客户端
         */
        client_type: "wap_smart",
        tbs: details.tbs,
        /**
         * 不知道具体值
         */
        come_from: 1
      };
      let formdata = utils.toFormData(data);
      let postResp = await httpx.post(api, {
        data: formdata,
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          Host: "tieba.baidu.com",
          Origin: "https://tieba.baidu.com",
          "X-Requested-With": "XMLHttpRequest"
        },
        fetch: true
      });
      if (!postResp.status) {
        return;
      }
      let postData = utils.toJSON(postResp.data.responseText);
      log.info(["发表回复", postData]);
      if (postData["no"] != 0) {
        Qmsg.error("发表回复失败");
        log.error("发表回复失败");
        return;
      }
      return postData["data"];
    },
    /**
     * 删除评论
     */
    async deleteCommit(data) {
      let api = "https://tieba.baidu.com/f/commit/post/delete";
      let postData = {
        // 可能还有个是lzl
        commit_fr: "pb",
        // 编码
        ie: "utf-8",
        // 贴吧tbs值 PageData.tbs
        tbs: data.tbs,
        // 当前吧名 PageData.forum.forum_name
        kw: data.kw,
        // forumId PageData.forum.forum_id
        fid: data.fid,
        // threadId PageData.thread.thread_id
        tid: data.tid,
        // 是否是会员删除？
        is_vipdel: 1,
        // 本回复的id comment_id
        pid: data.pid,
        // ???不知道是什么
        is_finf: 1
      };
      let resp = await httpx.post(api, {
        fetch: true,
        data: utils.toSearchParamsStr(postData),
        headers: {
          Accept: "application/json, text/javascript, */*; q=0.01",
          "X-Requested-With": "XMLHttpRequest",
          Host: "tieba.baidu.com",
          Referer: "https://tieba.baidu.com",
          "User-Agent": utils.getRandomPCUA(),
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
      });
      if (!resp.status) {
        return;
      }
      log.info(["删除回复的情况：", resp]);
      let respData = utils.toJSON(resp.data.responseText);
      if (respData.no !== 0) {
        Qmsg.error(respData.error);
        return;
      }
      return true;
    },
    /**
     * 获取评论数据
     * @param kz 帖子id
     * @param [pn=1] 评论页码
     * @param [rn=10] 每页评论数量
     * @param [only_post=1]
     */
    async getPbData(kz, pn = 1, rn = 10, only_post = 1) {
      let searchParamsData = {
        pn,
        rn,
        only_post,
        kz
      };
      let Api = "https://tieba.baidu.com/mg/p/getPbData";
      let getResp = await httpx.get(
        Api + "?" + utils.toSearchParamsStr(searchParamsData),
        {
          fetch: true,
          headers: {
            Accept: "application/json, text/plain, */*",
            "Referer-Asyn": "",
            "X-Requested-With": "XMLHttpRequest"
          }
        }
      );
      if (!getResp.status) {
        return;
      }
      let data = utils.toJSON(getResp.data.responseText);
      if (data["errno"] !== 0) {
        return;
      }
      let page = data["data"]["page"];
      let post_list = data["data"]["post_list"];
      return {
        page,
        post_list
      };
    },
    /**
     * 上传图片
     */
    async cooluploadpic(imageFile) {
      let postData = {
        pic: imageFile
      };
      let searchParamsData = {
        fr: "smallapp",
        from_zt: 1,
        r: 0.10027896050957352
      };
      let Api = "https://tieba.baidu.com/mo/q/cooluploadpic";
      let postResp = await httpx.post(
        Api + "?" + utils.toSearchParamsStr(searchParamsData),
        {
          fetch: true,
          data: utils.toFormData(postData),
          headers: {
            Accept: "application/json, text/plain, */*"
          }
        }
      );
      if (!postResp.status) {
        return;
      }
      let data = utils.toJSON(postResp.data.responseText);
      if (data["no"] !== 0) {
        return;
      }
      return {
        upload_img_info: data["data"]["upload_img_info"],
        upload_img_url: data["data"]["upload_img_url"],
        view_img_url_auth: data["data"]["view_img_url_auth"]
      };
    }
  };
  function setAffix(option) {
    let defaultOption = {
      offset: 0,
      position: "top",
      target: "",
      "z-index": 100,
      root: null,
      change: () => {
      }
    };
    utils.assign(defaultOption, option);
    if (utils.isNull(defaultOption)) {
      throw new TypeError("target不能为空");
    }
    utils.waitNode(defaultOption.target, 1e4).then(($target) => {
      if (!$target) {
        return;
      }
      addStyle(`
			.affix-container-top-fixed[data-target="${defaultOption.target}"]{
				position: fixed;
				top: ${defaultOption.offset}px;
				left: 0;
				z-index: ${defaultOption["z-index"]};
			}
			`);
      let checkOffset = defaultOption.offset;
      let $affixLine = document.createElement("div");
      $affixLine.className = "affix-line";
      $target.setAttribute("data-target", defaultOption.target);
      domutils.before($target, $affixLine);
      let rootMargin = `0px`;
      if (defaultOption.position === "bottom") {
        rootMargin = `0px 0px ${-checkOffset}px 0px`;
      } else {
        rootMargin = `${-checkOffset}px 0px 0px 0px`;
      }
      let threshold = [0.01, 0.99];
      let thresholdMaxValue = threshold[threshold.length - 1] * checkOffset;
      let lockFunc = new utils.LockFunction(
        (entries) => {
          let intersectionObserverEntry = entries[0];
          let boundTop = intersectionObserverEntry.boundingClientRect.top;
          if (defaultOption.position === "top") {
            if (boundTop < thresholdMaxValue) {
              $affixLine.style.height = domutils.outerHeight($target) + "px";
              $target.classList.add("affix-container-top-fixed");
            } else {
              $affixLine.style.height = "";
              $target.classList.remove("affix-container-top-fixed");
            }
          }
        },
        0
      );
      const observer = new IntersectionObserver(
        (entries) => {
          lockFunc.run(entries);
        },
        {
          root: null,
          threshold,
          // threshold 设置为 1 表示目标元素完全可见时触发回调函数
          rootMargin
          // rootMargin 设置为 0px 表示目标元素与视窗之间的距离
        }
      );
      observer.observe($affixLine);
    });
  }
  const TiebaComment = {
    /**
     * 当前页
     */
    page: 1,
    /**
     * 当前最大页
     */
    maxPage: 1,
    /**
     * 楼层数量
     */
    floor_num: 1,
    /**
     * 滚动监听锁
     */
    funcLock: null,
    /**
     * tbs值
     */
    tbs: null,
    /**
     * tid
     */
    param_tid: null,
    /**
     * 帖子id
     */
    param_forum_id: null,
    /**
     * 发帖人的id
     */
    postAuthorId: null,
    /**
     * 本帖子post的id
     */
    pid: null,
    /**
     * 帖子回复的数量
     */
    reply_num: vue.ref(0),
    /**
     * 是否已对当前帖子点赞
     */
    has_agree: vue.ref(false),
    /**
     * 帖子点赞的数量
     */
    agree_num: vue.ref(0),
    /**
     * 当前已登录用户的信息
     */
    userInfo: vue.ref({
      /**
       * 用户id
       */
      id: null,
      /**
       * 是否已登录，如果是0，那么其它数据不存在
       * + 1 已登录
       * + 0 未登录
       */
      is_login: 0,
      /**
       * 用户名
       */
      name: null,
      /**
       * 显示的用户名
       */
      name_show: null,
      /**
       * 用户的tb
       */
      portrait: null,
      /**
       * 显示的用户名
       */
      show_nickname: null
    }),
    forumInfo: vue.ref({
      /**
       * 当前吧id，简称tid
       */
      id: null,
      /**
       * 当前吧名，简称kw
       */
      name: null
    }),
    /**
     * 进过百度验证的额外安全参数
     */
    extraSearchSignParams: "",
    /**
     * vue根元素
     */
    vueRootView: null,
    /**
     * 判断是否在底部附近的误差值
     * @type
     */
    isNearBottomValue: 250,
    init() {
      let urlSignParams = new URLSearchParams(window.location.search);
      if (urlSignParams.has("p_tk") && urlSignParams.has("p_sign") && urlSignParams.has("p_signature")) {
        log.error("当前页面是经过百度验证后的网站，添加验证参数");
        urlSignParams.forEach((value, key) => {
          if (["pn", "tid", "pid", "fid", "t", "see_lz"].includes(key)) {
            return;
          }
          log.success(`设置额外参数：${key}=${value}`);
        });
        log.error(["百度验证后的参数👇", TiebaComment.extraSearchSignParams]);
      }
      utils.waitNode(".main-page-wrap").then(() => {
        TiebaComment.insertLoadingHTML();
      });
      utils.waitAnyNode([
        ".recommend-item[data-banner-info]",
        "div.app-view.transition-fade.pb-page-wrapper.mask-hidden .post-item"
      ]).then(() => {
        domutils.remove(".post-item");
        TiebaComment.initReplyDialogCSS();
        TiebaComment.mainPositive();
        TiebaComment.insertReverseBtn();
        TiebaComment.insertOnlyLZ();
        utils.waitNode('.nav-bar-v2-fixed[main-type="forum"]').then(($navBar) => {
          setAffix({
            target: "#replySwitch",
            position: "top",
            root: $navBar,
            offset: 49,
            change() {
            }
          });
        });
      });
      VueUtils.waitVuePropToSet(".app-view", [
        {
          msg: "设置参数 isHitMedicalPost",
          check(vueObj) {
            return typeof (vueObj == null ? void 0 : vueObj.isHitMedicalPost) === "boolean";
          },
          set(vueObj) {
            vueObj.isHitMedicalPost = false;
            log.success("成功设置参数 isHitMedicalPost=false");
          }
        },
        {
          msg: "获取参数 __vue__.postAuthorId",
          check(vueObj) {
            return typeof (vueObj == null ? void 0 : vueObj.postAuthorId) === "number";
          },
          set(vueObj) {
            TiebaComment.postAuthorId = vueObj.postAuthorId;
            log.success("获取当前帖子的作者ID：" + TiebaComment.postAuthorId);
          }
        },
        {
          msg: "获取参数 __vue__.currentReplyObj.pid",
          check(vueObj) {
            var _a3;
            return typeof ((_a3 = vueObj == null ? void 0 : vueObj.currentReplyObj) == null ? void 0 : _a3.pid) === "number";
          },
          set(vueObj) {
            TiebaComment.pid = vueObj.currentReplyObj.pid;
            log.success("获取当前帖子的pid：" + TiebaComment.pid);
          }
        }
      ]);
      Toolbar.updateEnvParam();
      this.initCSS();
      this.setUserCommentHandler();
    },
    initCSS() {
      addStyle(`
		/* 去除底部高度设定 */
		.pb-page-wrapper{
			margin-bottom: 0 !important;
		}
		.post-item[data-v-74eb13e2] {
			overflow: hidden;
			margin: .16rem .13rem 0;
		}
		.post-item .content[data-v-74eb13e2]{
			margin-top: .06rem;
			margin-bottom: .06rem;
		}
		.post-item .user-line-post[data-v-74eb13e2] {
			margin-bottom: .06rem;
		}
		.user-line-wrapper[data-v-188c0e84], .user-line[data-v-188c0e84] {
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
		}
		.user-line-wrapper[data-v-188c0e84] {
			-webkit-box-pack: justify;
			-moz-box-pack: justify;
			-webkit-justify-content: space-between;
			-moz-justify-content: space-between;
			-ms-flex-pack: justify;
			justify-content: space-between;
		}
		.post-item .content[data-v-74eb13e2] {
			padding-left: .44rem;
			width: auto;
		}
		.user-line[data-v-188c0e84] {
			-webkit-box-align: center;
			-moz-box-align: center;
			-webkit-align-items: center;
			-moz-align-items: center;
			-ms-flex-align: center;
			align-items: center;
			-webkit-box-pack: left;
			-moz-box-pack: left;
			-webkit-justify-content: left;
			-moz-justify-content: left;
			-ms-flex-pack: left;
			justify-content: left;
		}
		.user-line-wrapper[data-v-188c0e84], .user-line[data-v-188c0e84] {
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
		}
		.user-line .avatar[data-v-188c0e84] {
			position: relative;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			width: .36rem;
			height: .36rem;
			margin-right: .08rem;
			border-radius: 50%;
			background-repeat: no-repeat;
			background-position: 50%;
			background-size: cover;
			-webkit-box-flex: 0;
			-webkit-flex: none;
			-ms-flex: none;
			flex: none;
		}
		.tbfe-1px-border {
			position: relative;
			border-radius: .08rem;
			font-size: 0;
		}
		.user-line .user-info[data-v-188c0e84] {
			position: relative;
			overflow: hidden;
			-webkit-box-flex: 0;
			-webkit-flex: none;
			-ms-flex: none;
			flex: none;
		}
		.user-line .avatar[data-v-188c0e84]:after {
			border-radius: 50%;
		}
		.tbfe-1px-border:after {
			content: "";
			position: absolute;
			z-index: 100;
			top: 0;
			left: 0;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			border: 1px solid rgba(0,0,0,.12);
			-webkit-transform-origin: 0 0;
			-ms-transform-origin: 0 0;
			transform-origin: 0 0;
			pointer-events: none;
		}
		.user-line .user-info .username[data-v-188c0e84],
		#whitesev-reply-dialog .whitesev-reply-dialog-user-username {
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			-webkit-align-items: center;
			-ms-flex-align: center;
			align-items: center;
			overflow: hidden;
			font-size: .15rem;
			line-height: .28rem;
			white-space: nowrap;
			-o-text-overflow: ellipsis;
			text-overflow: ellipsis;
			font-weight: 400;
		}
		.whitesev-reply-dialog-user-info{
			display: flex;
			align-items: center;
		}
		.desc-info[data-v-188c0e84] {
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			-webkit-align-items: center;
			-ms-flex-align: center;
			align-items: center;
			font-size: .12rem;
			line-height: .18rem;
			overflow: hidden;
			white-space: nowrap;
			-o-text-overflow: ellipsis;
			text-overflow: ellipsis;
			color: #a3a2a8;
			margin: 0.06rem;
		}
		.floor-info[data-v-188c0e84],
		.user-line .user-info .forum-info[data-v-188c0e84] {
			margin-right: .08rem;
		}
		.post-item .content .post-text[data-v-74eb13e2] {
			display: unset;
			font-size: .16rem;
			line-height: .24rem;
		}
		.thread-text[data-v-ab14b3fe] {
			font-size: .13rem;
			line-height: .21rem;
			text-align: justify;
			word-break: break-all;
		}
		.post-item .content .lzl-post[data-v-74eb13e2] {
			/* margin-top: .06rem; */
		}
		.lzl-post[data-v-5b60f30b] {
			padding: .08rem .12rem;
			background: #f8f7fd;
			border-radius: .08rem;
		}
		.post-item .content .post-split-line[data-v-74eb13e2] {
			margin-top: .12rem;
			background-color: #ededf0;
			height: 1px;
			width: 200%;
			-webkit-transform: scale(.5);
			-ms-transform: scale(.5);
			transform: scale(.5);
			-webkit-transform-origin: top left;
			-ms-transform-origin: top left;
			transform-origin: top left;
		}
		.lzl-post .lzl-post-item[data-v-5b60f30b]:first-child {
			margin-top: 0;
		}
		.lzl-post .lzl-post-item[data-v-5b60f30b] {
			margin-top: .04rem;
		}
		.lzl-post .lzl-post-item .text-box[data-v-5b60f30b] {
			font-size: .13rem;
			line-height: .2rem;
		}
		.lzl-post .lzl-post-item .text-box .link[data-v-5b60f30b] {
			display: -webkit-inline-box;
			display: -webkit-inline-flex;
			display: -ms-inline-flexbox;
			display: inline-flex;
			-webkit-box-align: center;
			-webkit-align-items: center;
			-ms-flex-align: center;
			align-items: center;
			font-weight: 600;
			color: #a4a1a8;
		}
		.lzl-post .lzl-post-item .lzl-post-text[data-v-5b60f30b] {
			display: inline;
		}
		.thread-text[data-v-ab14b3fe] {
			font-size: .13rem;
			line-height: .26rem;
			text-align: justify;
			word-break: break-all;
		}
		.lzl-post .lzl-post-item .text-box .link .landlord[data-v-5b60f30b] {
			width: .28rem;
			height: .28rem;
			margin-left: .04rem;
		}
		.user-line .user-info .username .landlord[data-v-188c0e84],
		#whitesev-reply-dialog .landlord[data-v-188c0e84]{
			width: .28rem;
			height: .28rem;
			margin-left: .04rem
		}

		/* 修复帖子主内容底部的高度 */
		.post-resource-list + .interaction-bar{
			padding: 0.09rem !important;
		}
		/* 修复全部回复距离上面的空白区域 */
		#replySwitch{
			padding-top: 0.06rem;
			width: -webkit-fill-available;
			width: -moz-available;
			background: #ffffff;
		}
		`);
      addStyle(`
		.thread-text .BDE_Smiley {
			width: .2rem;
			height: .2rem;
			vertical-align: middle;
		}
		.thread-text .BDE_Image{
			margin-top: 8px;
			max-width: 350px;
			cursor: url(//tb2.bdstatic.com/tb/static-pb/img/cur_zin.cur),pointer;
			height: auto;
			width: auto;
			width: 100%;
		}
		.text-content .at{
			font-weight: 600;
			color: #614FBC;
		}`);
      addStyle(`
		body > div.main-page-wrap > div.app-view.transition-fade.pb-page-wrapper.mask-hidden > div.placeholder,
		div.app-view.transition-fade.pb-page-wrapper.mask-hidden .post-item[data-track]{
			display: none;
		}`);
      addStyle(this.getLevelCSS());
      addStyle(`
		/* 更多的按钮 */
		.user-comment-handler{
			display: flex;
			align-items: center;
		}
		.user-comment-handler .icon{
		    width: 0.16rem;
		    height: 0.16rem;
		}
		`);
    },
    /**
     * 设置每条评论右边的更多按钮的事件
     */
    setUserCommentHandler() {
      async function deleteItem(id) {
        let comment_id = id;
        let thread_id = TiebaComment.param_tid;
        let kw = TiebaComment.forumInfo.value.name;
        let tbs = TiebaComment.tbs;
        let forum_id = TiebaComment.param_forum_id;
        return await TiebaPostApi.deleteCommit({
          tbs,
          fid: forum_id,
          kw,
          tid: thread_id,
          pid: comment_id
        });
      }
      function clickCallBack(data) {
        let $drawer = pops.drawer({
          title: {
            enable: false
          },
          content: {
            text: `
					<div class="handler-container">
						<div class="reply-content-info">
							<div class="reply-content-name">${data.user}：</div>
							<div class="reply-content-text">${data.content}</div>
						</div>
						<div class="reply-tool">
							<div class="reply-tool-item">
								<div class="reply-tool-delete">
									<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20049"><path d="M288 256V128c0-38.4 25.6-64 70.4-64h310.4c41.6 0 67.2 25.6 67.2 64v128h160c19.2 0 32 12.8 32 32s-12.8 32-32 32H128c-19.2 0-32-12.8-32-32s12.8-32 32-32h160z m64 0h320V128H352v128zM256 896h512V416c0-16 12.8-32 32-32 16 0 32 12.8 32 32v480c0 38.4-22.4 64-60.8 64H252.8C214.4 960 192 934.4 192 896V416c0-19.2 12.8-32 32-32s32 12.8 32 32v480z m256-512c19.2 0 32 12.8 32 32v352c0 19.2-12.8 32-32 32s-32-12.8-32-32V416c0-19.2 12.8-32 32-32z" p-id="20050"></path></svg>
									<p>删除</p>
								</div>
							</div>
						</div>
					</div>
					`,
            html: true
          },
          btn: {
            ok: {
              enable: false
            },
            cancel: {
              text: "取消",
              type: "tieba-cancel",
              enable: true
            }
          },
          direction: "bottom",
          size: "30%",
          zIndex: utils.getMaxZIndex(100),
          mask: {
            enable: true,
            clickEvent: {
              toClose: true,
              toHide: false
            }
          },
          style: `
				.pops[type-value="drawer"]{
					height: unset !important;
					max-height: 32%;
					border-top-left-radius: 16px !important;
					border-top-right-radius: 16px !important;
				}
				.pops-drawer-content{
					padding: 20px 20px 0px 20px !important
				}
				.pops-drawer-btn{
					align-self: center;
				}
				.pops-drawer-btn-cancel[type="tieba-cancel"]{
					border-color: transparent;
					background: transparent;
				}

				.reply-content-info{
					display: flex;
					font-size: 0.14rem;
					justify-content: center;
				}
				.reply-content-name{
					color: #a3a2a8;
				}
				.reply-content-text{
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
				}
				.reply-tool{
					padding: 20px;
				}
				.reply-tool-item > div{
					padding: 0px 20px;
					flex: 1;
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				.reply-tool-item > div > p{
					padding-top: 6px;
				}
				.reply-tool .reply-tool-item{
					display: flex;
					border-bottom: 1px solid #e5e5e5;
					padding: 6px 0px;
				}
				.reply-tool .reply-tool-item svg{
					width: 28px;
					height: 28px;
				}
				.reply-tool .reply-tool-item:last-child{
					border-bottom: 0;
				}
				`
        });
        let $deleteBtn = $drawer.$shadowRoot.querySelector(".reply-tool-delete");
        if (TiebaComment.userInfo.value.id != null && TiebaComment.userInfo.value.id.toString() === data.userId.toString() || TiebaComment.userInfo.value.id != null && TiebaComment.userInfo.value.id.toString() === TiebaComment.postAuthorId.toString()) {
          domutils.on($deleteBtn, "click", function() {
            $drawer.close();
            pops.confirm({
              title: {
                text: ""
              },
              content: {
                text: "确定删除此条回复贴",
                style: "text-align:center;"
              },
              btn: {
                position: "space-around",
                reverse: true,
                ok: {
                  enable: true,
                  text: "确认",
                  type: "tieba-confirm",
                  async callback(event) {
                    let comment_id = data.userPostId;
                    let deleteStatus = await deleteItem(comment_id);
                    if (deleteStatus) {
                      Qmsg.success("删除成功", {
                        zIndex: utils.getMaxZIndex(10)
                      });
                      data.$item.remove();
                      event.close();
                      if (typeof data.successDeleteCallBack === "function") {
                        data.successDeleteCallBack();
                      }
                    }
                  }
                },
                cancel: {
                  enable: true,
                  text: "取消",
                  type: "tieba-confirm"
                },
                close: {
                  enable: false
                }
              },
              mask: {
                enable: true,
                clickEvent: {
                  toClose: true
                }
              },
              width: "80dvw",
              height: "180px",
              zIndex: utils.getMaxZIndex(100),
              style: `
						.pops[type-value="confirm"]{
							--container-title-height: 0;
							--container-bottom-btn-height: 40px;
						}
						.pops-confirm-title{
							display: none !important;
						}
						.pops-confirm-content{
							height: calc(100% - var(--container-bottom-btn-height)) !important;
							align-content: center;
						}
						.pops-confirm-btn{
							padding: 5px 10px 5px 10px;
						}
						.pops-confirm-btn button{
							border-color: transparent;
							background: transparent;
							color: #7557ff;
						}
						`
            });
          });
        } else {
          $deleteBtn == null ? void 0 : $deleteBtn.remove();
        }
      }
      domutils.on(
        document,
        "click",
        ".post-item .user-comment-handler",
        function(event) {
          utils.preventEvent(event);
          let $click = event.target;
          let $item = $click.closest(".post-item");
          let $textContent = $item.querySelector(
            ".text-content"
          );
          let data = $item["data-whitesev"];
          log.info(["获取本条回复的数据", data]);
          if (!data) {
            Qmsg.error("获取本条回复的数据失败");
            return;
          }
          let userId = data["userId"];
          let user = data["userShowName"] || data["userName"];
          let userPostId = data["userPostId"];
          let content = $textContent.innerText;
          clickCallBack({
            $item,
            content,
            userId,
            user,
            userPostId,
            successDeleteCallBack() {
              var _a3, _b;
              let $appView = document.querySelector(".app-view");
              let $interactionBar = document.querySelector(
                ".main-thread-content .interaction-bar"
              );
              if ($interactionBar) {
                let vueObj = VueUtils.getVue($interactionBar);
                if (!vueObj) {
                  return;
                }
                if ((_a3 = vueObj == null ? void 0 : vueObj.interactionNum) == null ? void 0 : _a3.reply) {
                  vueObj.interactionNum.reply--;
                }
              } else if ($appView) {
                let vueObj = VueUtils.getVue($appView);
                if (!vueObj) {
                  return;
                }
                if ((_b = vueObj == null ? void 0 : vueObj.interactionNum) == null ? void 0 : _b.reply) {
                  vueObj.interactionNum.reply--;
                }
              }
            }
          });
        }
      );
      domutils.on(
        document,
        "click",
        "#whitesev-reply-dialog .user-comment-handler",
        function(event) {
          utils.preventEvent(event);
          let $click = event.target;
          let $item = $click.closest(
            ".whitesev-reply-dialog-sheet-other-content-item"
          );
          let $textContent = $item.querySelector(
            ".whitesev-reply-dialog-user-comment"
          );
          let data = $item["data-lzl-item"];
          log.info(["获取本条楼中楼回复的数据", data]);
          if (!data) {
            Qmsg.error("获取本条回复的数据失败");
            return;
          }
          let userId = data["userInfo"]["user_id"];
          let user = data["userInfo"]["user_name"] || data["userInfo"]["user_nickname"] || data["userInfo"]["nickname"];
          let userPostId = data["data"]["comment_id"];
          let content = $textContent.innerText;
          clickCallBack({
            $item,
            content,
            userId,
            user,
            userPostId,
            successDeleteCallBack() {
              let $commentNum = $item.querySelector(
                ".whitesev-reply-dialog-sheet-comment-num"
              );
              if (!$commentNum) {
                return;
              }
              let commentNum = parseInt($commentNum.innerText);
              if (!isNaN(commentNum)) {
                return;
              }
              $commentNum.innerText = (commentNum - 1).toString() + "条回复";
            }
          });
        }
      );
    },
    /** 用户贴吧等级CSS */
    getLevelCSS() {
      let colorConversion = new utils.ColorConversion();
      let colorLightLevel = 0.7;
      return `
          .forum-level-container{
            display: flex;
            align-items: center;
            margin: 0 0.03rem;
          }
          .forum-level[data-level]{
            padding: 0px 0.03rem;
            border-radius: 3px;
            font-size: 0.1rem;
            line-height: 0.16rem;
            font-weight: 700;
            color: #ffffff;
            background: #000000;
          }
          .forum-level[data-level="0"],
          .forum-level[data-level="1"],
          .forum-level[data-level="2"],
          .forum-level[data-level="3"]{
            background: ${colorConversion.getLightColor(
      "#5dc7a0",
      colorLightLevel
    )};
            color: #5dc7a0;
          }
          .forum-level[data-level="4"],
          .forum-level[data-level="5"],
          .forum-level[data-level="6"],
          .forum-level[data-level="7"],
          .forum-level[data-level="8"],
          .forum-level[data-level="9"]{
            background: ${colorConversion.getLightColor(
      "#6BA7FF",
      colorLightLevel
    )};
            color: #6BA7FF;
          }
          .forum-level[data-level="10"],
          .forum-level[data-level="11"],
          .forum-level[data-level="12"],
          .forum-level[data-level="13"],
          .forum-level[data-level="14"],
          .forum-level[data-level="15"]{
            background: ${colorConversion.getLightColor(
      "#F9B341",
      colorLightLevel
    )};
            color: #F9B341;
          }
          .forum-level[data-level="16"],
          .forum-level[data-level="17"],
          .forum-level[data-level="18"]{
            background: ${colorConversion.getLightColor(
      "#FBA71A",
      colorLightLevel
    )};
            color: #FBA71A;
          }
          `;
    },
    /**
     * 滚动事件
     * @param isPrev
     * @param pageDOM
     * @param pageCommentList
     * @returns
     */
    scrollEvent(isNext, pageDOM, pageCommentList) {
      log.info("成功获取评论和楼中楼评论");
      let comments = Array.from(
        pageDOM.querySelectorAll(".l_post.l_post_bright")
      );
      if (TiebaComment.page == 1) {
        comments.splice(0, 1);
      }
      if (isNext) ;
      else {
        comments.reverse();
      }
      comments.forEach((ele) => {
        TiebaComment.insertNewCommentInnerElement(
          TiebaComment.getNewCommentInnerElement(ele, pageCommentList)
        );
        TiebaComment.floor_num++;
      });
      let $onlyLz = document.querySelector(".white-only-lz");
      if ($onlyLz && $onlyLz.classList.contains("white-only-lz-qx")) {
        document.querySelectorAll(".post-item").forEach(($postItem) => {
          let landlord = $postItem.getAttribute("landlord");
          if (landlord == "0") {
            $postItem.classList.add("white-only-lz-none");
          }
        });
      }
      loadingView.hide();
      if (isNext && TiebaComment.page >= TiebaComment.maxPage || !isNext && TiebaComment.page <= 1) {
        log.info("已加载所有的评论");
        loadingView.setText("已加载所有的评论");
        loadingView.hide();
        TiebaComment.removeScrollListener();
        return;
      }
      if (isNext) {
        TiebaComment.page++;
      } else {
        TiebaComment.page--;
      }
      TiebaComment.triggerScrollEvent();
    },
    /**
     * 主动触发滚动事件
     */
    triggerScrollEvent() {
      setTimeout(() => {
        document.dispatchEvent(new Event("scroll"));
      }, 400);
    },
    /**
     * scroll事件触发 自动加载下一页的评论
     */
    nextPageScrollEvent: async (event) => {
      if (event.jsTrigger) ;
      else if (!utils.isNearBottom(TiebaComment.isNearBottomValue)) {
        return;
      } else if (TiebaSearch.isShowSearchContainer()) {
        return;
      }
      loadingView.setText("Loading...", true);
      loadingView.show();
      let timeStamp = Date.now();
      let nextPageUrl = TiebaUrlApi.getPost(
        `${TiebaComment.param_tid}?pn=${TiebaComment.page}${TiebaComment.extraSearchSignParams}`
      );
      let nextPageAllCommentUrl = TiebaUrlApi.getPost(
        `totalComment?t=${timeStamp}&tid=${TiebaComment.param_tid}&fid=${TiebaComment.param_forum_id}&pn=${TiebaComment.page}&see_lz=0${TiebaComment.extraSearchSignParams}`
      );
      let pageCommentInfo = await TiebaComment.getPageComment(nextPageUrl);
      if (!pageCommentInfo.success) {
        loadingView.setHTML(
          `<a href="${pageCommentInfo.data}" target="_blank">触发百度安全验证，点击前往验证</a>`
        );
        return;
      }
      let pageDOM = pageCommentInfo.data;
      let pageCommentList = await TiebaComment.getPageCommentList(
        nextPageAllCommentUrl
      );
      if (pageCommentList == null || pageCommentList.commentList && !pageCommentList.commentList) {
        loadingView.setText("获取评论失败");
        log.error("获取评论失败");
        TiebaComment.removeScrollListener();
        return;
      }
      TiebaComment.scrollEvent(true, pageDOM, pageCommentList);
    },
    /**
     * scroll事件触发 自动加载上一页的评论
     */
    prevPageScrollEvent: async (event) => {
      if (event.jsTrigger) ;
      else if (!utils.isNearBottom(TiebaComment.isNearBottomValue)) {
        return;
      } else if (TiebaSearch.isShowSearchContainer()) {
        return;
      }
      loadingView.setText("Loading...", true);
      loadingView.show();
      let timeStamp = Date.now();
      let pageUrl = TiebaUrlApi.getPost(
        `${TiebaComment.param_tid}?pn=${TiebaComment.page}${TiebaComment.extraSearchSignParams}`
      );
      let pageAllCommentUrl = TiebaUrlApi.getPost(
        `totalComment?t=${timeStamp}&tid=${TiebaComment.param_tid}&fid=${TiebaComment.param_forum_id}&pn=${TiebaComment.page}&see_lz=0${TiebaComment.extraSearchSignParams}`
      );
      let pageCommentInfo = await TiebaComment.getPageComment(pageUrl);
      if (!pageCommentInfo.success) {
        loadingView.setHTML(
          `<a href="${pageCommentInfo.data}" target="_blank">触发百度安全验证，点击前往验证</a>`
        );
        return;
      }
      let pageDOM = pageCommentInfo.data;
      let pageCommentList = await TiebaComment.getPageCommentList(
        pageAllCommentUrl
      );
      if (pageCommentList == null || pageCommentList.commentList && !pageCommentList.commentList) {
        loadingView.setText("评论数据获取失败");
        log.error("评论数据获取失败");
        return;
      }
      TiebaComment.scrollEvent(false, pageDOM, pageCommentList);
    },
    /**
     * 设置自动加载下一页的scrol事件
     */
    setNextPageScrollListener() {
      TiebaComment.funcLock = new utils.LockFunction(
        TiebaComment.nextPageScrollEvent,
        this
      );
      document.addEventListener("scroll", TiebaComment.funcLock.run);
      utils.dispatchEvent(document, "scroll", { jsTrigger: true });
      log.success("scroll监听事件【下一页】");
    },
    /**
     * 设置自动加载上一页的scrol事件
     */
    setPrevPageScrollListener() {
      TiebaComment.funcLock = new utils.LockFunction(
        TiebaComment.prevPageScrollEvent,
        this
      );
      document.addEventListener("scroll", TiebaComment.funcLock.run);
      utils.dispatchEvent(document, "scroll", { jsTrigger: true });
      log.success("scroll监听事件【上一页】");
    },
    /**
     * 移除scoll事件
     */
    removeScrollListener() {
      if (TiebaComment.funcLock) {
        document.removeEventListener("scroll", TiebaComment.funcLock.run);
        log.success("取消绑定scroll", "#f400ff");
      }
    },
    /**
     * 获取时间差
     * @param timeStr
     */
    getDifferTime(timeStr) {
      let currentTime = /* @__PURE__ */ new Date();
      let timeDifference = currentTime.getTime() - new Date(timeStr.replace(/-/g, "/")).getTime();
      let days = Math.floor(timeDifference / (24 * 3600 * 1e3));
      if (days > 0) {
        timeStr = days + "天前";
      } else {
        let leave1 = timeDifference % (24 * 3600 * 1e3);
        let hours = Math.floor(leave1 / (3600 * 1e3));
        if (hours > 0) {
          timeStr = hours + "小时前";
        } else {
          let leave2 = leave1 % (3600 * 1e3);
          let minutes = Math.floor(leave2 / (60 * 1e3));
          if (minutes > 0) {
            timeStr = minutes + "分钟前";
          } else {
            let leave3 = leave2 % (60 * 1e3);
            let seconds = Math.round(leave3 / 1e3);
            timeStr = seconds + "秒前";
          }
        }
      }
      return timeStr;
    },
    /**
     * 根据dom获取需要插入的评论的html
     * @param element
     * @param pageCommentList
     */
    getNewCommentInnerElement: (element, pageCommentList) => {
      var _a3, _b, _c, _d, _e, _f, _g;
      function parseCommentBottomInfo(ele) {
        var _a4;
        let $tailWrap = ele.querySelector(".post-tail-wrap");
        let userIpPosition2 = "";
        let userFloor2 = "";
        let userCommentTime2 = "1970-1-1 00:00:00";
        if ($tailWrap) {
          let childrenElement = $tailWrap.querySelectorAll("span.tail-info");
          let childSpanElementList = Array.from(
            $tailWrap.querySelectorAll("span")
          );
          for (const childSpanElement of childSpanElementList) {
            if (childSpanElement.hasAttribute("class")) {
              continue;
            }
            if (!((_a4 = childSpanElement == null ? void 0 : childSpanElement.textContent) == null ? void 0 : _a4.match("来自|禁言"))) {
              userIpPosition2 = childSpanElement.textContent;
              break;
            }
          }
          if (childrenElement.length == 3 || childrenElement.length == 2) {
            userFloor2 = childrenElement[childrenElement.length - 2].textContent;
            userCommentTime2 = childrenElement[childrenElement.length - 1].textContent;
          } else {
            log.error("获取PC端的数据楼层和时间信息失败👇");
            log.error(childrenElement);
            userFloor2 = "";
            userCommentTime2 = "";
          }
        } else {
          $tailWrap = element.querySelector(".acore_reply_tail");
          userIpPosition2 = data_field["content"]["ip_address"];
          userFloor2 = data_field["content"]["post_no"];
          userCommentTime2 = data_field["content"]["date"];
        }
        userCommentTime2 = TiebaComment.getDifferTime(userCommentTime2);
        return {
          userFloor: parseInt(userFloor2),
          userIpPosition: userIpPosition2,
          userCommentTime: userCommentTime2
        };
      }
      let data_field = utils.toJSON(element.getAttribute("data-field"));
      if (Object.keys(data_field).length == 0) {
        return;
      }
      let user_id = data_field["author"]["user_id"];
      let builderId = data_field["content"]["builderId"];
      let userComment = data_field["content"]["content"];
      if (!userComment) {
        userComment = ((_a3 = element.querySelector(".d_post_content")) == null ? void 0 : _a3.innerHTML) || "";
      }
      let userHomeUrl = (_b = element.querySelector(".p_author_face")) == null ? void 0 : _b.getAttribute("href");
      let userName = data_field["author"]["user_name"];
      let $userShowName = element.querySelector(".p_author_name");
      let userShowName = ($userShowName == null ? void 0 : $userShowName.textContent) || ((_c = element.querySelector(".p_author_face > img")) == null ? void 0 : _c.getAttribute("username")) || userName;
      let userAvatar = ((_d = element.querySelector(".p_author_face > img")) == null ? void 0 : _d.getAttribute("data-tb-lazyload")) || ((_e = element.querySelector(".p_author_face > img")) == null ? void 0 : _e.src) || "";
      let is_landlord = 0;
      if (user_id == builderId) {
        is_landlord = 1;
      }
      let userForumLevel = -1;
      let userForumLevelName = void 0;
      if (element.querySelector(".user_badge .d_badge_lv")) {
        userForumLevel = parseInt(
          (_f = element.querySelector(".user_badge .d_badge_lv")) == null ? void 0 : _f.textContent
        );
      }
      if (element.querySelector(".user_badge .d_badge_title")) {
        userForumLevelName = (_g = element.querySelector(
          ".user_badge .d_badge_title"
        )) == null ? void 0 : _g.textContent;
      }
      let { userFloor, userIpPosition, userCommentTime } = parseCommentBottomInfo(element);
      if (userAvatar.startsWith("//")) {
        userAvatar = "https:" + userAvatar;
      }
      let userAvatarObj = new URL(userAvatar);
      let userPortrait = data_field["author"]["portrait"];
      if (!userPortrait) {
        let userAvatarObjMatch = userAvatarObj.pathname.match(/\/item\/(.+)/i);
        if (userAvatarObjMatch) {
          userPortrait = userAvatarObjMatch[1];
        }
      }
      if (PopsPanel.getValue("baidu_tieba_shield_commnets_baodating")) {
        if (user_id != null && user_id.toString() === "6421022725") {
          return;
        } else if (userPortrait != null && userPortrait.toString().includes("tb.1.4c46bb61.pOGb2yswbMUBKOIUpteLvg")) {
          return;
        }
      }
      let post_id = data_field["content"]["post_id"];
      let newUserCommentHTML = "";
      if (pageCommentList.commentList[post_id]) {
        Array.from(pageCommentList.commentList[post_id].comment_info).forEach(
          (result) => {
            let u_user_name = result["show_nickname"];
            let u_content = result["content"];
            let u_user_id = result["user_id"];
            let u_user_portrait = pageCommentList.userList[u_user_id]["portrait"];
            let u_user_home_url = "/home/main?id=" + u_user_portrait;
            if (builderId == u_user_id) {
              u_user_name += '<svg data-v-5b60f30b="" class="landlord"><use xlink:href="#icon_landlord"></use></svg>';
            }
            let lzlCommentItemHTML = `
					<div data-v-5b60f30b="" class="lzl-post-item" style="">
						<div data-v-5b60f30b="" class="text-box">
							<span data-v-5b60f30b="" class="link username" data-home-url="${u_user_home_url}">${u_user_name}</span>
							<div data-v-ab14b3fe="" data-v-5b60f30b="" class="thread-text lzl-post-text">
								<span data-v-ab14b3fe="" class="text-content">${u_content}</span>
							</div>
						</div>
					</div>`;
            newUserCommentHTML += lzlCommentItemHTML;
          }
        );
      }
      if (newUserCommentHTML) {
        newUserCommentHTML = `
            <div data-v-5b60f30b="" data-v-74eb13e2="" class="lzl-post lzl-post" style="max-height: 2.35rem;overflow-y: hidden;">
              ${newUserCommentHTML}
            </div>
            `;
      }
      let newCommentElement = domutils.createElement(
        "div",
        {
          className: "post-item",
          innerHTML: `
				<div
					data-v-188c0e84=""
					data-v-74eb13e2=""
					class="user-line-wrapper user-line-post">
					<div data-v-188c0e84="" class="user-line">
						<div data-v-188c0e84="" class="tbfe-1px-border avatar" data-home-url="${userHomeUrl}"
							data-src="${userAvatar}"
							lazy="loaded"
							style="background-image: url(${userAvatar});"></div>
						<div data-v-188c0e84="" class="user-info">
							<div data-v-188c0e84="" class="username" data-home-url="${userHomeUrl}">
							${userShowName}
							${is_landlord ? `<svg data-v-188c0e84="" class="landlord"><use xlink:href="#icon_landlord"></use></svg>` : ""}
							${userForumLevel && userForumLevel >= 0 && PopsPanel.getValue("baidu_tieba_show_forum_level") ? `
								<div class="forum-level-container">
									<span class="forum-level" data-level="${userForumLevel}">Lv.${userForumLevel} ${userForumLevelName}</span>
								</div>` : ""}
							</div>
						</div>
					</div>
					<div class="user-comment-handler">
						<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2304"><path d="M448 191.004444a64 64 0 1 0 128 0 64 64 0 0 0-128 0z m0 320a64 64 0 1 0 128 0 64 64 0 0 0-128 0z m0 320a64 64 0 1 0 128 0 64 64 0 0 0-128 0z" fill="#000000" fill-opacity=".65" p-id="2305"></path>
						</svg>
					</div>
				</div>
				<div data-v-74eb13e2="" class="content">
					<p data-v-ab14b3fe="" data-v-74eb13e2="" class="thread-text post-text">
						<span data-v-ab14b3fe="" class="text-content">
							${userComment}
						</span>
					</p>
					<p data-v-188c0e84="" class="desc-info">
						<span data-v-188c0e84="" class="floor-info">
							第${userFloor}楼
						</span>
						<span data-v-188c0e84="" class="time" style="margin-right: .08rem;">
							${userCommentTime}
						</span>
						<span data-v-188c0e84="" class="ip">
							${userIpPosition}
						</span>
					</p>
					${newUserCommentHTML}
					<div data-v-74eb13e2="" class="post-split-line"></div>
				</div>
              `,
          "data-whitesev": {
            userId: user_id,
            userPostId: post_id,
            userPortrait,
            userFloor,
            userComment,
            userHomeUrl,
            userForumLevel,
            userForumLevelName,
            userAvatar,
            userName,
            userShowName,
            userCommentTime,
            userIpPosition,
            pageCommentList
          }
        },
        {
          "data-v-74eb13e2": "",
          "data-v-602e287c": "",
          "data-floor": TiebaComment.floor_num,
          landlord: is_landlord
        }
      );
      newCommentElement.querySelectorAll(".text-content embed.BDE_Music").forEach((ele) => ele.remove());
      return newCommentElement;
    },
    /**
     * 根据评论的html插入页面中
     * @param newCommentDOM
     */
    insertNewCommentInnerElement: (newCommentDOM) => {
      if (newCommentDOM == null) {
        return;
      }
      newCommentDOM.querySelectorAll(".tbfe-1px-border.avatar").forEach((item) => {
        if (item.hasAttribute("data-home-url")) {
          item.onclick = function(event) {
            utils.preventEvent(event);
            window.open(item.getAttribute("data-home-url"), "_blank");
          };
        }
      });
      newCommentDOM.querySelectorAll(".user-info .username").forEach((item) => {
        if (item.hasAttribute("data-home-url")) {
          item.onclick = function(event) {
            utils.preventEvent(event);
            window.open(item.getAttribute("data-home-url"), "_blank");
          };
        }
      });
      newCommentDOM.querySelectorAll("a.at").forEach((item) => {
        item.removeAttribute("onclick");
        item.removeAttribute("onmouseover");
        item.removeAttribute("onmouseout");
        if (item.hasAttribute("portrait")) {
          item.setAttribute(
            "href",
            "/home/main?id=" + item.getAttribute("portrait")
          );
        }
      });
      if (document.querySelector(".post-cut-guide")) {
        domutils.before(
          document.querySelector(".post-cut-guide"),
          newCommentDOM
        );
      } else {
        domutils.append(
          document.querySelector(".pb-page-wrapper"),
          newCommentDOM
        );
      }
      let lzlPostElement = newCommentDOM.querySelector(
        ".lzl-post.lzl-post"
      );
      if (lzlPostElement) {
        let lzlPostElementHeight = domutils.height(lzlPostElement);
        let lzlPostItemList = Array.from(
          lzlPostElement.querySelectorAll(".lzl-post-item")
        );
        let currentLzlPostElementHeight = 0;
        let addSeeAllReply = false;
        for (const lzlPostItem of lzlPostItemList) {
          currentLzlPostElementHeight += domutils.outerHeight(lzlPostItem);
          if (currentLzlPostElementHeight > lzlPostElementHeight) {
            addSeeAllReply = true;
            break;
          }
        }
        if (addSeeAllReply) {
          let lzlCommentNums = newCommentDOM["data-whitesev"]["pageCommentList"]["commentList"][newCommentDOM["data-whitesev"]["userPostId"]]["comment_num"];
          let seeAllReplyElement = domutils.createElement(
            "div",
            {
              className: "whitesev-see-all-reply",
              innerHTML: `查看全部${lzlCommentNums}条回复`
            },
            {
              style: "color: #6251B3;margin-top: 5px 0 0 10px;"
            }
          );
          domutils.on(seeAllReplyElement, "click", (event) => {
            utils.preventEvent(event);
            lzlPostElement.click();
          });
          domutils.after(lzlPostElement, seeAllReplyElement);
        }
        domutils.on(
          lzlPostElement,
          "click",
          (event) => {
            utils.preventEvent(event);
            log.success(`点击查看全部回复`);
            TiebaComment.showReplyDialog(lzlPostElement);
          },
          {
            capture: true
          }
        );
      }
    },
    /**
     * 初始化评论的弹窗的所有设置包括CSS
     */
    initReplyDialogCSS() {
      log.success("初始化回复的弹窗");
      addStyle(`
		/* 主 */
		#whitesev-reply-dialog{
			z-index: 99999;
			-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
		/* 背景 */
		.whitesev-reply-dialog-bg{
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
			width: 100%;
			height: 100%;
			background-color: rgba(0,0,0,.5);
			transition-timing-function: ease-in;
			transition-duration: .1s;
			transition-property: background-color,opacity;
		}
		/* 内容容器 */
		.whitesev-reply-dialog-sheet{
			position: absolute;
			bottom: 0;
			left: 0;
			z-index: 2;
			width: 100%;
			background-color: #fff;
			transition: .1s ease-in;
			transition-property: transform;
			transform: translate(0,100%);
			border-radius: 10px 10px 0px 0px;
		}
		/* 关闭 */
		.whitesev-reply-dialog-close{
			position: absolute;
		}
		/* 标题 */
		.whitesev-reply-dialog-sheet-title{
			display: block;
			width: 100%;
			box-sizing: border-box;
			padding: 15px;
			color: #222;
			line-height: 20px;
			text-align: center;
			border-bottom: 1px solid #dbdbdb;
		}
		/* 内容 */
		.whitesev-reply-dialog-sheet-content{
			height: 100%;
			overflow-y: auto;
		}
		/* 内容中主内容和其它内容 */
		.whitesev-reply-dialog-sheet-main-content,
		.whitesev-reply-dialog-sheet-other-content{
			margin: 20px 10px 10px 10px;
		}
		/* 内容中其它内容 */
		.whitesev-reply-dialog-sheet-ohter-content{

		}
		/* 弹出 */
		#whitesev-reply-dialog[data-on] .whitesev-reply-dialog-bg{
			transition-timing-function: ease-in;
			transition-duration: .2s;
		}
		#whitesev-reply-dialog[data-on] .whitesev-reply-dialog-bg{
			background-color: rgba(0,0,0,.5);
		}
		#whitesev-reply-dialog[data-on] .whitesev-reply-dialog-sheet{
			transition: .2s ease-in;
			transform: translate(0,0);
		}

		/* 头像 */
		.whitesev-reply-dialog-avatar {
			position: relative;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
			width: .36rem;
			height: .36rem;
			margin-right: .08rem;
			border-radius: 50%;
			background-repeat: no-repeat;
			background-position: 50%;
			background-size: cover;
			-webkit-box-flex: 0;
			-moz-box-flex: 0;
			-webkit-flex: none;
			-ms-flex: none;
			flex: none;
		}
		
		/* 用户行 */
		.whitesev-reply-dialog-user-line {
			display: flex;
			align-items: center;
		}
		.whitesev-reply-dialog-user-line,
		.whitesev-reply-dialog-user-comment,
		.whitesev-reply-dialog-user-desc-info {
			margin-bottom: 8px;
		}
		.whitesev-reply-dialog-user-line-wrapper{
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		/* 评论 */
		.whitesev-reply-dialog-user-comment {
			margin-left: .44rem;
		}
		/* 评论的贴吧自带表情 */
		.whitesev-reply-dialog-user-comment img.BDE_Smiley{
			width: .2rem;
			height: .2rem;
			vertical-align: middle;
		}
		/* 评论的贴吧自己上传的图片 */
		.whitesev-reply-dialog-user-comment img:not(.BDE_Smiley){
			margin-top: 8px;
			max-width: 350px;
			cursor: url(//tb2.bdstatic.com/tb/static-pb/img/cur_zin.cur),pointer;
			height: auto;
			width: auto;
			width: 100%;
		}
		/* 底部信息 */
		.whitesev-reply-dialog-user-desc-info{
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			margin-left: .44rem;
			border-bottom: 1px solid #dfdfdf;
		}
		.whitesev-reply-dialog-user-desc-info span{
			margin-right: .08rem;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			-moz-box-align: center;
			-webkit-align-items: center;
			-moz-align-items: center;
			-ms-flex-align: center;
			align-items: center;
			font-size: .12rem;
			line-height: .18rem;
			overflow: hidden;
			white-space: nowrap;
			-o-text-overflow: ellipsis;
			text-overflow: ellipsis;
			color: #a3a2a8;
		}
		/* 第xx楼 */
		.whitesev-reply-dialog-user-desc-info span[data-floor-info]::before {
			content:"第"
		}
		.whitesev-reply-dialog-user-desc-info span[data-floor-info]::after {
			content:"楼"
		}
		/* 中间行 */
		.whitesev-reply-dialog-sheet-main-content-bottom-line {
			background: #ebebeb;
			height: 6px;
		}
		/* 隐藏顶部主回复的底部边框 */
		.whitesev-reply-dialog-sheet-main-content .whitesev-reply-dialog-user-desc-info{
			border-bottom: none;
		}
		/* 其它回复中的最后一个 */
		.whitesev-reply-dialog-sheet-other-content > div:last-child{
		
		}
		/* 其它回复的每一项 */
		.whitesev-reply-dialog-sheet-other-content-item{
			margin-top: 12px;
		}
		/* 其它回复的底部边框 */
		.whitesev-reply-dialog-sheet-other-content-item .whitesev-reply-dialog-user-desc-info{
			padding-bottom: 12px;
		}
		/* xx条回复 */
		.whitesev-reply-dialog-sheet-comment-num {
			margin-top: -10px;
			margin-bottom: 20px;
		}
		/* 查看全部xx条回复 */
		.whitesev-see-all-reply{
			padding-top: 10px;
			padding-left: 10px;
		}`);
    },
    /**
     * 获取楼中楼评论的元素
     */
    getLzlItemElement(data) {
      let $otherCommentItem = document.createElement("div");
      $otherCommentItem.className = "whitesev-reply-dialog-sheet-other-content-item whitesev-reply-dialog-content-item";
      $otherCommentItem.innerHTML = `
		<div class="whitesev-reply-dialog-user-line-wrapper" data-portrait="${data.portrait}">
			<div class="whitesev-reply-dialog-user-line" data-portrait="${data.portrait}">
				<div class="whitesev-reply-dialog-avatar" style="background-image: url(${data.avatar});"></div>
				<div class="whitesev-reply-dialog-user-info">
					<div class="whitesev-reply-dialog-user-username">
					${data.show_nickname}
					${data.isLandlord ? `<svg data-v-188c0e84="" class="landlord"><use xlink:href="#icon_landlord"></use></svg>` : ""}
					${data.userForumLevel && data.userForumLevel >= 0 && PopsPanel.getValue("baidu_tieba_show_forum_level") ? `
						<div class="forum-level-container">
							<span class="forum-level" data-level="${data.userForumLevel}">Lv.${data.userForumLevel}</span>
						</div>` : ""}
					</div>
				</div>
			</div>
			<div class="user-comment-handler">
				<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2304"><path d="M448 191.004444a64 64 0 1 0 128 0 64 64 0 0 0-128 0z m0 320a64 64 0 1 0 128 0 64 64 0 0 0-128 0z m0 320a64 64 0 1 0 128 0 64 64 0 0 0-128 0z" fill="#000000" fill-opacity=".65" p-id="2305"></path>
				</svg>
			</div>
		</div>
		<div class="whitesev-reply-dialog-user-comment">${data.content}</div>
		<div class="whitesev-reply-dialog-user-desc-info">
			<span data-time="">${data.time}</span>
			<span data-ip="">${data.ip}</span>
		</div>
		`;
      return $otherCommentItem;
    },
    /**
     * 显示评论的弹窗
     * @param element
     */
    showReplyDialog(element) {
      let contentElement = element.closest("div.post-item");
      let data = {};
      if (contentElement && contentElement["data-whitesev"]) {
        data = contentElement["data-whitesev"];
      }
      log.success(["data-whitesev数据", data]);
      let currentCommentData = data["pageCommentList"]["commentList"][data["userPostId"]]["comment_info"];
      log.success(["当前评论数据信息JSON", currentCommentData]);
      let currentCommentListNum = data["pageCommentList"]["commentList"][data["userPostId"]]["comment_num"];
      let userList = data["pageCommentList"]["userList"];
      let mainUserAvatar = data["userAvatar"];
      let userAvatarHostName = new URL(mainUserAvatar).hostname;
      let userAvatarPath = new URL(mainUserAvatar).pathname.split("/")[1];
      let landlordInfo = TiebaCore.getLandlordInfo();
      log.success(["头像加密值路径是", userAvatarPath]);
      log.success(["本帖楼主的信息", landlordInfo]);
      let $ohterCommentFragment = document.createDocumentFragment();
      currentCommentData.forEach((item) => {
        var _a3;
        let itemUserInfo = userList[item["user_id"]];
        let userPortrait = itemUserInfo["portrait"];
        let isLandlord = Boolean(
          landlordInfo && landlordInfo.id === item["user_id"]
        );
        let itemUserCommentTime = utils.getDaysDifference(item["now_time"] * 1e3, void 0, "auto") + "前";
        let itemUserCommentIp = "";
        if (item["location"] && item["location"]["name"]) {
          itemUserCommentIp = item["location"]["name"];
        }
        if (userAvatarHostName === "imgsa.baidu.com") {
          userAvatarHostName = "gss0.bdstatic.com";
          userAvatarPath = "6LZ1dD3d1sgCo2Kml5_Y_D3";
        }
        let itemUserAvatar = `https://${userAvatarHostName}/${userAvatarPath}/sys/portrait/item/${userPortrait}`;
        if (userAvatarPath === "sys") {
          itemUserAvatar = itemUserAvatar.replace(
            "/sys/sys/portrait/item/",
            "/sys/portrait/item/"
          );
        }
        let userLikeForum = (_a3 = itemUserInfo == null ? void 0 : itemUserInfo["card"]) == null ? void 0 : _a3["like_forum"];
        let lzlUserForumLevel = -1;
        if (userLikeForum) {
          Object.keys(userLikeForum).forEach((itemForumLevel) => {
            let itemForumInfo = userLikeForum[itemForumLevel];
            if (itemForumInfo["forum_list"] && Array.isArray(itemForumInfo["forum_list"]) && itemForumInfo["forum_list"].includes(TiebaData.forumName)) {
              lzlUserForumLevel = itemForumLevel;
            }
          });
        }
        let $otherCommentItem = this.getLzlItemElement({
          portrait: userPortrait,
          avatar: itemUserAvatar,
          isLandlord,
          userForumLevel: lzlUserForumLevel,
          show_nickname: item["show_nickname"],
          content: item["content"],
          time: itemUserCommentTime,
          ip: itemUserCommentIp
        });
        $otherCommentItem["data-lzl-item"] = {
          data: item,
          userInfo: itemUserInfo,
          portrait: userPortrait
        };
        $ohterCommentFragment.appendChild($otherCommentItem);
      });
      log.success(["显示评论的弹窗", data]);
      let dialog = domutils.createElement("div", {
        id: "whitesev-reply-dialog",
        innerHTML: `
            <div class="whitesev-reply-dialog-bg"></div>
            <div class="whitesev-reply-dialog-sheet" style="height: ${document.documentElement.clientHeight * 0.92}px;">
              <div class="whitesev-reply-dialog-sheet-title">
                <div class="whitesev-reply-dialog-close">
                  <svg t="1694574625629" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2306" width="20" height="20"><path d="M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z" fill="#444444" p-id="2307"></path></svg>
                </div>
                ${data.userFloor}楼的回复
              </div>
              <div class="whitesev-reply-dialog-sheet-content">
              <div class="whitesev-reply-dialog-sheet-main-content whitesev-reply-dialog-content-item">
                  <div class="whitesev-reply-dialog-user-line" data-portrait="${data["userPortrait"]}">
                    <div class="whitesev-reply-dialog-avatar" style="background-image: url(${data["userAvatar"]});"></div>
                    <div class="whitesev-reply-dialog-user-info">
                      <div class="whitesev-reply-dialog-user-username">${data["userName"]}</div>
                      ${data["userForumLevel"] && data["userForumLevel"] >= 0 && PopsPanel.getValue("baidu_tieba_show_forum_level") ? `
                          <div class="forum-level-container">
                            <span class="forum-level" data-level="${data["userForumLevel"]}">Lv.${data["userForumLevel"]} ${data["userForumLevelName"]}</span>
                          </div>` : ""}
                    </div>
                  </div>
                  <div class="whitesev-reply-dialog-user-comment">${data["userComment"]}</div>
                  <div class="whitesev-reply-dialog-user-desc-info" style="border-bottom: none;">
                      <span data-floor-info="">${data["userFloor"]}</span>
                      <span data-time="">${data["userCommentTime"]}</span>
                      <span data-ip="">${data["userIpPosition"]}</span>
                  </div>
              </div>
              <div class="whitesev-reply-dialog-sheet-main-content-bottom-line"></div>
              <div class="whitesev-reply-dialog-sheet-other-content">
                <div class="whitesev-reply-dialog-sheet-comment-num">${currentCommentListNum}条回复</div>
              </div>
              </div>
            </div>
            `
      });
      dialog["data-whitesev"] = data;
      let dialogTitleElement = dialog.querySelector(
        ".whitesev-reply-dialog-sheet-title"
      );
      let dialogContentElement = dialog.querySelector(
        ".whitesev-reply-dialog-sheet-content"
      );
      let dialogOhterContentElement = dialog.querySelector(
        ".whitesev-reply-dialog-sheet-other-content"
      );
      dialogOhterContentElement.appendChild($ohterCommentFragment);
      let isClosingDialog = false;
      function popstateEvent(event) {
        utils.preventEvent(event);
        if (isClosingDialog) {
          return;
        }
        log.success("触发popstate事件");
        removePopStateEvent();
      }
      function setPopStateEvent() {
        log.success("监听popstate事件");
        window.history.pushState({}, "", "#/seeLzlReply");
        domutils.on(window, "popstate", popstateEvent, {
          capture: true
        });
      }
      async function removePopStateEvent() {
        isClosingDialog = true;
        log.success("location地址后退并关闭评论弹窗");
        closeDialogByUrlChange();
        while (true) {
          if (globalThis.location.hash.endsWith("seeLzlReply")) {
            log.info("后退！");
            globalThis.history.back();
            await utils.sleep(150);
          } else {
            break;
          }
        }
        log.success("停止popstate事件监听");
        domutils.off(window, "popstate", popstateEvent, { capture: true });
        isClosingDialog = false;
      }
      function closeDialog(event) {
        dialog.removeAttribute("data-on");
        domutils.on(dialog, utils.getTransitionEndNameList(), function() {
          domutils.off(dialog, utils.getTransitionEndNameList());
          log.success("关闭楼中楼回复弹窗_click");
          dialog.remove();
          if (PopsPanel.getValue("baidu_tieba_lzl_ban_global_back")) {
            removePopStateEvent();
          }
        });
      }
      function closeDialogByUrlChange() {
        dialog.removeAttribute("data-on");
        domutils.on(dialog, utils.getTransitionEndNameList(), function() {
          domutils.off(dialog, utils.getTransitionEndNameList());
          log.success("关闭楼中楼回复弹窗_urlchange");
          dialog.remove();
        });
      }
      domutils.on(
        dialog.querySelector(".whitesev-reply-dialog-close"),
        "click",
        closeDialog
      );
      domutils.on(
        dialog.querySelector(".whitesev-reply-dialog-bg"),
        "click",
        closeDialog
      );
      domutils.on(
        dialog,
        "click",
        ".whitesev-reply-dialog-avatar",
        function(event) {
          var _a3, _b;
          utils.preventEvent(event);
          window.open(
            "/home/main?id=" + ((_b = (_a3 = event.target) == null ? void 0 : _a3.closest(".whitesev-reply-dialog-user-line")) == null ? void 0 : _b.getAttribute("data-portrait")),
            "_blank"
          );
        }
      );
      domutils.on(
        dialog,
        "click",
        ".whitesev-reply-dialog-user-info",
        function(event) {
          var _a3, _b;
          utils.preventEvent(event);
          window.open(
            "/home/main?id=" + ((_b = (_a3 = event.target) == null ? void 0 : _a3.closest(".whitesev-reply-dialog-user-line")) == null ? void 0 : _b.getAttribute("data-portrait")),
            "_blank"
          );
        }
      );
      dialog.querySelectorAll(".whitesev-reply-dialog-user-comment a[portrait]").forEach((item) => {
        item.setAttribute(
          "href",
          "/home/main?id=" + item.getAttribute("portrait")
        );
        item.removeAttribute("onclick");
        item.removeAttribute("onmouseover");
        item.removeAttribute("onmouseout");
      });
      const lzlLoadingView = new LoadingView(false);
      let lzlPage = 2;
      async function lzlReplyCommentScrollEvent(event) {
        let scrollElement = event.target;
        if (scrollElement.scrollTop + scrollElement.clientHeight + 50 < scrollElement.scrollHeight) {
          return;
        }
        log.success("加载更多回复");
        lzlLoadingView.show();
        let replyInfo = await TiebaComment.getLzlCommentReply(
          TiebaComment.param_tid,
          data["userPostId"],
          lzlPage
        );
        log.success(["加载更多回复的数据", replyInfo]);
        if (replyInfo === "暂无更多回复") {
          log.error("暂无更多回复");
          lzlLoadingView.setText("暂无更多回复");
          domutils.off(
            dialog.querySelector(".whitesev-reply-dialog-sheet-content"),
            "scroll"
          );
          log.error("取消绑定楼中楼scroll监听事件【下一页】");
          return;
        } else if (typeof replyInfo === "string") {
          lzlLoadingView.setText(replyInfo);
          return;
        }
        let commentHTML = "";
        replyInfo["data"].forEach((item) => {
          let isLandlord = false;
          if (landlordInfo) {
            if (landlordInfo.id === item["user_id"]) {
              isLandlord = true;
            } else if (utils.isNotNull(item["userPortrait"]) && landlordInfo.portrait.includes(item["userPortrait"])) {
              isLandlord = true;
            }
          }
          commentHTML += `
              <div class="whitesev-reply-dialog-sheet-other-content-item" data-lazy-load-level="true" data-username="${item["userName"]}">
                <div class="whitesev-reply-dialog-user-line" data-portrait="${item["userPortrait"]}">
                  <div class="whitesev-reply-dialog-avatar" style="background-image: url(${item["userAvatar"]});"></div>
                  <div class="whitesev-reply-dialog-user-info">
                    <div class="whitesev-reply-dialog-user-username">
                    ${item["userShowName"]}
                    ${isLandlord ? `<svg data-v-188c0e84="" class="landlord"><use xlink:href="#icon_landlord"></use></svg>` : ""}
                    </div>
                  </div>
                </div>
                <div class="whitesev-reply-dialog-user-comment">${item["userReplyContent"]}</div>
                <div class="whitesev-reply-dialog-user-desc-info">
                    <span data-time="">${item["userReplyTime"]}</span>
                    <span data-ip=""></span>
                </div>
              </div>
              `;
        });
        if (scrollElement.querySelector("." + loadingView.config.className)) {
          domutils.before(
            scrollElement.querySelector(
              "." + loadingView.config.className
            ),
            commentHTML
          );
        } else {
          domutils.append(
            scrollElement.querySelector(
              ".whitesev-reply-dialog-sheet-other-content"
            ),
            commentHTML
          );
        }
        if (PopsPanel.getValue("baidu_tieba_show_forum_level")) {
          document.querySelectorAll(
            ".whitesev-reply-dialog-sheet-other-content-item[data-lazy-load-level]"
          ).forEach(async (ele) => {
            var _a3;
            if (!ele.hasAttribute("data-username")) {
              return;
            }
            let userInfo = await TieBaApi.getUserHomeInfo({
              un: ele.getAttribute("data-username")
            });
            if (!userInfo) {
              return;
            }
            let grade = (_a3 = userInfo == null ? void 0 : userInfo["honor"]) == null ? void 0 : _a3["grade"];
            ele.removeAttribute("data-lazy-load-level");
            if (!grade) {
              return;
            }
            Object.keys(grade).forEach((likeForumLevel) => {
              let likeForumInfo = grade[likeForumLevel];
              if (likeForumInfo["forum_list"] && Array.isArray(likeForumInfo["forum_list"]) && likeForumInfo["forum_list"].includes(
                TiebaData.forumName
              )) {
                let $userInfo = ele.querySelector(
                  ".whitesev-reply-dialog-user-info"
                );
                domutils.append(
                  $userInfo,
                  `
                                    <div class="forum-level-container">
                                        <span class="forum-level" data-level="${likeForumLevel}">Lv.${likeForumLevel}</span>
                                    </div>`
                );
              }
            });
          });
        }
        scrollElement.querySelectorAll(".whitesev-reply-dialog-user-comment a[portrait]").forEach((item) => {
          item.setAttribute(
            "href",
            "/home/main?id=" + item.getAttribute("portrait")
          );
          item.removeAttribute("onclick");
          item.removeAttribute("onmouseover");
          item.removeAttribute("onmouseout");
        });
        if (!replyInfo["nextPage"]) {
          log.error("暂无更多回复");
          lzlLoadingView.setText("暂无更多回复");
          domutils.off(
            dialog.querySelector(".whitesev-reply-dialog-sheet-content"),
            "scroll"
          );
          log.error("取消绑定楼中楼scroll监听事件【下一页】");
          return;
        }
        lzlPage = replyInfo["nextPage"];
      }
      let lzlScrollEventLock = new utils.LockFunction(
        lzlReplyCommentScrollEvent,
        this
      );
      domutils.on(
        dialog.querySelector(".whitesev-reply-dialog-sheet-content"),
        "scroll",
        lzlScrollEventLock.run
      );
      log.success("绑定楼中楼scroll监听事件【下一页】");
      document.body.appendChild(dialog);
      domutils.append(
        dialog.querySelector(
          ".whitesev-reply-dialog-sheet-other-content"
        ),
        lzlLoadingView.getLoadingViewElement()
      );
      lzlLoadingView.getLoadingViewElement().style.setProperty("color", "#c5c5c5");
      lzlLoadingView.getLoadingViewElement().style.setProperty("font-size", "14px");
      lzlLoadingView.setText("加载更多");
      lzlLoadingView.hide();
      setTimeout(() => {
        dialog.setAttribute("data-on", "true");
        dialogContentElement.style.setProperty(
          "height",
          `calc(100% - ${domutils.height(dialogTitleElement)}px)`
        );
        this.vueRootView = document.querySelector(
          ".main-page-wrap"
        );
        log.success(["成功获取Vue根元素", VueUtils.getVue(this.vueRootView)]);
        if (PopsPanel.getValue("baidu_tieba_lzl_ban_global_back")) {
          setPopStateEvent();
        }
      }, 0);
    },
    /**
     * 获取楼中楼评论
     * @param tid 帖子id
     * @param pid 回复主体id
     * @param pn 当前页
     */
    async getLzlCommentReply(tid = "", pid = "", pn = 1) {
      let getResp = await httpx.get({
        url: TiebaUrlApi.getPost(
          `comment?tid=${tid}&pid=${pid}&pn=${pn}&t=${(/* @__PURE__ */ new Date()).getTime()}${TiebaComment.extraSearchSignParams}`
        ),
        headers: {
          "User-Agent": utils.getRandomPCUA(),
          Host: "tieba.baidu.com",
          Referer: window.location.href
        }
      });
      if (!getResp.status) {
        log.error(getResp);
        return "请求失败";
      }
      let respData = getResp.data;
      log.success(respData);
      let parseDOM = domutils.parseHTML(respData.responseText, false, true);
      let lzlPostList = Array.from(
        parseDOM.querySelectorAll("li.lzl_single_post")
      );
      if (!lzlPostList.length) {
        return "暂无更多回复";
      }
      let result = {
        data: []
      };
      lzlPostList.forEach((item) => {
        var _a3, _b;
        let dataFieldJSON = utils.toJSON(item.getAttribute("data-field"));
        let userName = dataFieldJSON["user_name"];
        let userShowName = dataFieldJSON["showname"];
        let userPostId = dataFieldJSON["spid"];
        let userPortrait = dataFieldJSON["portrait"];
        let userHomeUrl = (_a3 = item.querySelector("a[data-field]")) == null ? void 0 : _a3.href;
        let userAvatar = (_b = item.querySelector("a[data-field] img")) == null ? void 0 : _b.src;
        let userReplyContent = item.querySelector("span.lzl_content_main").innerHTML;
        let userReplyTimeStr = item.querySelector("span.lzl_time").innerHTML;
        let userReplyTimeNumber = utils.formatToTimeStamp(userReplyTimeStr);
        let userReplyTime = utils.getDaysDifference(
          (/* @__PURE__ */ new Date()).getTime(),
          userReplyTimeNumber,
          "auto"
        ) + "前";
        if (utils.isNull(userName)) {
          userName = userShowName;
        }
        result["data"].push({
          userName,
          userShowName,
          userPostId,
          userPortrait,
          userHomeUrl,
          userAvatar,
          userReplyContent,
          userReplyTime
        });
      });
      parseDOM.querySelectorAll("p.j_pager a").forEach((item) => {
        var _a3, _b;
        if (((_a3 = item == null ? void 0 : item.textContent) == null ? void 0 : _a3.trim()) === "下一页") {
          result["nextPage"] = parseInt(
            (_b = item.getAttribute("href")) == null ? void 0 : _b.replace("#", "")
          );
        }
      });
      if (!result["data"].length) {
        return "解析回复失败";
      } else {
        return result;
      }
    },
    /**
     * 获取第XX页的评论（不包括楼中楼评论）
     * @param url
     */
    async getPageComment(url) {
      let getDetails = {
        url,
        headers: {
          "User-Agent": utils.getRandomPCUA(),
          Referer: "tieba.baidu.com"
        }
      };
      let getResp = await httpx.get(getDetails);
      let respData = getResp.data;
      log.success(["获取评论", getResp]);
      if (getResp.status) {
        let pageCommentHTMLElement = domutils.parseHTML(
          respData.responseText,
          true,
          true
        );
        if (pageCommentHTMLElement.title === "百度安全验证" || respData.finalUrl.startsWith("https://wappass.baidu.com")) {
          log.error("触发百度安全验证 👇" + respData.finalUrl);
          log.error(respData);
          return {
            success: false,
            msg: "触发百度安全验证",
            data: respData.finalUrl
          };
        } else {
          return {
            success: true,
            msg: "获取成功",
            data: pageCommentHTMLElement
          };
        }
      } else if (getResp.type === "onerror") {
        if (typeof respData.error === "string" && respData.error.match("wappass.baidu.com")) {
          let url2 = respData.error.match(/"(.*?)"/)[1];
          log.error("触发百度校验: " + url2);
          return {
            success: false,
            msg: "触发百度安全验证",
            data: url2
          };
        } else {
          log.error("获取评论数据失败 👇");
          log.error(respData);
          return {
            success: false,
            msg: "获取评论数据失败",
            data: null
          };
        }
      }
      return {
        success: false,
        msg: "未知状态",
        data: null
      };
    },
    /**
     * 获取第XX页的所有评论
     * @param url
     */
    async getPageCommentList(url) {
      let getResp = await httpx.get({
        url,
        headers: {
          Accept: "application/json, text/javascript, */*; q=0.01",
          "User-Agent": utils.getRandomPCUA(),
          Referer: "tieba.baidu.com"
        }
      });
      log.info(["获取楼中楼评论", getResp]);
      let respData = getResp.data;
      if (getResp.status) {
        let data = utils.toJSON(respData.responseText);
        log.success(["帖子评论信息JSON", data]);
        return {
          commentList: data["data"]["comment_list"],
          userList: data["data"]["user_list"]
        };
      } else if (getResp.type === "onerror") {
        log.error("获取楼中楼评论数据失败 👇");
        log.error(getResp);
      }
    },
    /**
     * 插入加载中的html
     */
    insertLoadingHTML() {
      if (!loadingView.isExists()) {
        log.info("插入loading");
        loadingView.initLoadingView();
        loadingView.hide();
        document.querySelector(".main-page-wrap").appendChild(
          loadingView.getLoadingViewElement()
        );
      }
    },
    /**
     * 插入只看楼主的按钮
     */
    insertOnlyLZ() {
      let replyRightContainer = document.querySelector(".reply-right-container");
      if (!replyRightContainer) {
        log.error("元素.reply-right-container不存在");
        return;
      }
      addStyle(`
          .white-only-lz{
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -moz-box-align: center;
            -webkit-align-items: center;
            -moz-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            line-height: .24rem;
            border-radius: .14rem;
            font-size: .13rem;
            color: #614ec2;
            margin-right: 16px;
          }
          .white-only-lz-qx:before {
            content: "取消";
          }
          .white-only-lz-none {
            display: none;
          }
          `);
      let onlyLzInnerElement = domutils.createElement("div", {
        className: "white-only-lz",
        textContent: "只看楼主"
      });
      replyRightContainer.appendChild(onlyLzInnerElement);
      let $whiteOnlyLz = document.querySelector(".white-only-lz");
      if (!$whiteOnlyLz) {
        throw new TypeError("$whiteOnlyLz is null");
      }
      domutils.on($whiteOnlyLz, "click", (event) => {
        let $postItemList = document.querySelectorAll(".post-item");
        if (Array.from($whiteOnlyLz.classList).includes("white-only-lz-qx")) {
          $whiteOnlyLz.classList.remove("white-only-lz-qx");
          $postItemList.forEach(($postItem) => {
            $postItem.classList.remove("white-only-lz-none");
          });
        } else {
          $whiteOnlyLz.classList.add("white-only-lz-qx");
          $postItemList.forEach(($postItem) => {
            let landlord = $postItem.getAttribute("landlord");
            if (landlord == "0") {
              $postItem.classList.add("white-only-lz-none");
            }
          });
          TiebaComment.triggerScrollEvent();
        }
      });
    },
    /**
     * 插入 正序=倒序的按钮
     */
    insertReverseBtn() {
      let replySwitchElement = document.querySelector("#replySwitch");
      if (!replySwitchElement) {
        log.error("元素#replySwitch不存在");
        return;
      }
      addStyle(`
          .reply-right-container {
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
          }
          .btn-comment-reverse-pack{
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            display: inline-block;
            white-space: nowrap;
            text-align: center;
            height: .29rem;
            line-height: .29rem;
            border-radius: .15rem;
            color: #a3a2a8;
            font-size: 13px;
            background-color: #f3f2f5;
          }
          .btn-comment-reverse-pack .tab-item{
            display: inline-block;
            width: .48rem;
          }
          .btn-comment-reverse-pack .selected-tab-item{
            position: relative;
            z-index: 99;
            color: #141414;
          }
          .btn-comment-reverse-pack .selected-tab-item:after{
            content: "";
            z-index: -99;
            position: absolute;
            top: 0;
            left: 0;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            display: block;
            height: .29rem;
            width: .48rem;
            border-radius: .15rem;
            border: .01rem solid #f3f2f5;
            background-color: #fff;
            color: #141414;
          }
          `);
      let replyRightContainer = domutils.createElement("div", {
        className: "reply-right-container"
      });
      let btnElement = domutils.createElement("div", {
        className: "btn-comment-reverse-pack",
        innerHTML: `
              <span class="tab-item selected-tab-item" data-positive>正序</span>
              <span class="tab-item" data-reverse>倒序</span>`
      });
      const positiveElement = btnElement.querySelector(
        ".tab-item[data-positive]"
      );
      const reverseElement = btnElement.querySelector(
        ".tab-item[data-reverse]"
      );
      replyRightContainer.appendChild(btnElement);
      replySwitchElement.appendChild(replyRightContainer);
      let isReverse = false;
      function clearSelected() {
        positiveElement.classList.remove("selected-tab-item");
        reverseElement.classList.remove("selected-tab-item");
      }
      domutils.on(btnElement, "click", () => {
        isReverse = !isReverse;
        TiebaComment.removeScrollListener();
        domutils.remove(".post-item");
        clearSelected();
        if (isReverse) {
          reverseElement.classList.add("selected-tab-item");
          positiveElement.classList.remove("selected-tab-item");
          reverseElement.classList.add("selected-tab-item");
          TiebaComment.mainReverse();
          log.info("获取评论===>倒序");
        } else {
          positiveElement.classList.add("selected-tab-item");
          reverseElement.classList.remove("selected-tab-item");
          positiveElement.classList.add("selected-tab-item");
          TiebaComment.mainPositive();
          log.info("获取评论===>正序");
        }
      });
    },
    /**
     * 查看-正序
     */
    async mainPositive() {
      log.info("查看-正序");
      TiebaComment.param_tid = TiebaCore.getCurrentForumPostTid();
      if (!TiebaComment.param_tid) {
        log.error("贴吧：未找到本页参数p");
        return;
      }
      TiebaComment.param_forum_id = TiebaPageDataApi.getForumId();
      if (!TiebaComment.param_forum_id) {
        let recommendItemElement = await utils.waitNode(
          ".recommend-item",
          5e3
        );
        if (recommendItemElement) {
          await utils.waitPropertyByInterval(
            recommendItemElement,
            () => {
              return recommendItemElement.hasAttribute("data-banner-info");
            },
            250,
            1e4
          );
          TiebaComment.param_forum_id = TiebaPageDataApi.getForumId();
          if (!TiebaComment.param_forum_id) {
            log.error("贴吧：获取参数data-banner-info失败");
            return;
          }
        } else {
          log.error("获取元素.recommend-item失败");
          Qmsg.error("获取元素.recommend-item失败");
          return;
        }
      }
      let timeStamp = Date.now();
      TiebaComment.page = 1;
      loadingView.setText("Loading...", true);
      loadingView.show();
      let url = TiebaUrlApi.getPost(
        `totalComment?t=${timeStamp}&tid=${TiebaComment.param_tid}&fid=${TiebaComment.param_forum_id}&pn=${TiebaComment.page}&see_lz=0${TiebaComment.extraSearchSignParams}`
      );
      let pageUrl = TiebaUrlApi.getPost(
        `${TiebaComment.param_tid}?pn=${TiebaComment.page}${TiebaComment.extraSearchSignParams}`
      );
      let pageCommentInfo = await TiebaComment.getPageComment(pageUrl);
      if (!pageCommentInfo.success) {
        loadingView.setHTML(
          `<a href="${pageCommentInfo.data}" target="_blank">触发百度安全验证，点击前往验证</a>`
        );
        return;
      }
      let pageDOM = pageCommentInfo.data;
      let pageCommentList = await TiebaComment.getPageCommentList(url);
      if (pageCommentList == null || pageCommentList.commentList && !pageCommentList.commentList) {
        loadingView.setText("评论数据获取失败");
        log.error("评论数据获取失败");
        return;
      }
      log.info("成功获取第一页评论和楼中楼评论");
      let jumpInputBrightDOM = pageDOM.querySelector(
        ".jump_input_bright"
      );
      TiebaComment.maxPage = 1;
      if (jumpInputBrightDOM) {
        TiebaComment.maxPage = parseInt(
          jumpInputBrightDOM.getAttribute("max-page")
        );
        TiebaComment.setNextPageScrollListener();
        log.info("当前为多页，执行监听");
      } else {
        let comments = Array.from(
          pageDOM.querySelectorAll(".l_post.l_post_bright")
        );
        document.querySelectorAll(".post-item").forEach((ele) => ele.remove());
        comments.shift();
        TiebaComment.floor_num = 1;
        console.log(comments);
        comments.forEach((element) => {
          TiebaComment.insertNewCommentInnerElement(
            TiebaComment.getNewCommentInnerElement(element, pageCommentList)
          );
          TiebaComment.floor_num++;
        });
        loadingView.hide();
      }
      log.info(
        `共 ${TiebaComment.maxPage} 页评论，当前所在 ${TiebaComment.page} 页`
      );
    },
    /**
     * 查看-倒序
     */
    async mainReverse() {
      TiebaComment.param_tid = TiebaCore.getCurrentForumPostTid();
      if (!TiebaComment.param_tid) {
        log.error("贴吧：未找到本页参数p");
        return;
      }
      TiebaComment.param_forum_id = TiebaPageDataApi.getForumId();
      if (!TiebaComment.param_forum_id) {
        let recommendItemElement = await utils.waitNode(
          ".recommend-item",
          5e3
        );
        if (recommendItemElement) {
          await utils.waitPropertyByInterval(
            recommendItemElement,
            () => {
              return recommendItemElement.hasAttribute("data-banner-info");
            },
            250,
            1e4
          );
          TiebaComment.param_forum_id = TiebaPageDataApi.getForumId();
          if (!TiebaComment.param_forum_id) {
            log.error("贴吧：获取参数data-banner-info失败");
            return;
          }
        } else {
          log.error("获取元素.recommend-item失败");
          Qmsg.error("获取元素.recommend-item失败");
          return;
        }
      }
      let timeStamp = Date.now();
      TiebaComment.page = 1;
      loadingView.setText("Loading...", true);
      loadingView.show();
      let url = TiebaUrlApi.getPost(
        `totalComment?t=${timeStamp}&tid=${TiebaComment.param_tid}&fid=${TiebaComment.param_forum_id}&pn=${TiebaComment.page}&see_lz=0${TiebaComment.extraSearchSignParams}`
      );
      let pageUrl = TiebaUrlApi.getPost(
        `${TiebaComment.param_tid}?pn=${TiebaComment.page}${TiebaComment.extraSearchSignParams}`
      );
      let pageCommentInfo = await TiebaComment.getPageComment(pageUrl);
      if (!pageCommentInfo.success) {
        loadingView.setHTML(
          `<a href="${pageCommentInfo.data}" target="_blank">触发百度安全验证，点击前往验证</a>`
        );
        return;
      }
      let pageDOM = pageCommentInfo.data;
      let pageCommentList = await TiebaComment.getPageCommentList(url);
      if (pageCommentList == null) {
        loadingView.setText("评论数据获取为undefined");
        log.error("评论数据获取为undefined");
        return;
      } else if (!pageCommentList.commentList) {
        loadingView.setText("评论数据获取失败");
        log.error("评论数据获取失败");
        return;
      }
      log.info("成功获取第一页评论和楼中楼评论");
      TiebaComment.maxPage = 1;
      let jumpInputBrightDOM = pageDOM.querySelector(
        ".jump_input_bright"
      );
      if (jumpInputBrightDOM) {
        TiebaComment.maxPage = parseInt(
          jumpInputBrightDOM.getAttribute("max-page")
        );
        TiebaComment.page = TiebaComment.maxPage;
        TiebaComment.setPrevPageScrollListener();
        log.info("当前为多页");
      } else {
        let comment = Array.from(
          pageDOM.querySelectorAll(".l_post.l_post_bright")
        );
        TiebaComment.maxPage = 1;
        document.querySelectorAll(".post-item").forEach((ele) => ele.remove());
        comment.shift();
        TiebaComment.floor_num = 1;
        comment.reverse();
        comment.forEach((element) => {
          TiebaComment.insertNewCommentInnerElement(
            TiebaComment.getNewCommentInnerElement(element, pageCommentList)
          );
          TiebaComment.floor_num++;
        });
        loadingView.hide();
      }
      log.info(
        `共 ${TiebaComment.maxPage} 页评论，当前所在 ${TiebaComment.page} 页`
      );
    }
  };
  const TiebaReply = {
    $data: {
      /**
       * 当前回复类型
       */
      type: vue.ref(),
      /**
       * 如果type=main，使用该数据
       */
      replyMainData: vue.ref(),
      /**
       * 如果type=comment，使用该数据
       */
      replyCommentData: vue.ref(),
      /**
       * 如果type=lzl-comment，使用该数据
       */
      replyLzlCommentData: vue.ref(),
      /**
       * 是否已登录
       */
      isLogin: vue.ref(false),
      /**
       * 是否正在发送中
       */
      isSending: vue.ref(false),
      /**
       * 主动触发显示完整的编辑器
       */
      isShowFullEditor: vue.ref(false)
    },
    $vue: {
      handlerCommentSuccess: null
    },
    init() {
      this.setGlobalContentClick();
      domutils.ready(() => {
        this.initLogin();
        this.cover_handlerCommentSuccess();
      });
    },
    /**
     * 设置当前回复为发布本帖子的人
     */
    setCurrentReplyMainUser() {
      let commentBoxVueObj = this.getCommentBoxWrapVue();
      if (!commentBoxVueObj) {
        return;
      }
      let replyInfo = commentBoxVueObj.replyInfo;
      let currentReplyObj = commentBoxVueObj.currentReplyObj;
      log.info([
        "设置本帖发帖人回复参数",
        {
          pid: TiebaComment.pid
        }
      ]);
      commentBoxVueObj.page = "pb";
      Object.keys(currentReplyObj).forEach((key) => {
        currentReplyObj[key] = void 0;
      });
      Object.keys(replyInfo).forEach((key) => {
        currentReplyObj[key] = void 0;
      });
      replyInfo.pid = TiebaComment.pid;
      currentReplyObj.pid = TiebaComment.pid;
    },
    /**
     * 设置当前为回复xx用户
     */
    setCurrentReplyUser(pid, authorName) {
      let commentBoxVueObj = this.getCommentBoxWrapVue();
      if (!commentBoxVueObj) {
        return;
      }
      let replyInfo = commentBoxVueObj.replyInfo;
      let currentReplyObj = commentBoxVueObj.currentReplyObj;
      log.info([
        "设置评论区回复参数",
        {
          pid,
          authorName
        }
      ]);
      commentBoxVueObj.page = "pb";
      Object.keys(currentReplyObj).forEach((key) => {
        currentReplyObj[key] = void 0;
      });
      Object.keys(replyInfo).forEach((key) => {
        currentReplyObj[key] = void 0;
      });
      replyInfo.pid = pid;
      replyInfo.authorName = authorName;
      currentReplyObj.pid = pid;
      currentReplyObj.authorName = authorName;
    },
    /**
     * 设置当前为回复楼中楼用户
     */
    setCurrentReplyLzlUser(pid, authorName, lzlId, floor, portrait) {
      let commentBoxVueObj = this.getCommentBoxWrapVue();
      if (!commentBoxVueObj) {
        return;
      }
      let replyInfo = commentBoxVueObj.replyInfo;
      let currentReplyObj = commentBoxVueObj.currentReplyObj;
      log.info([
        "设置楼中楼回复参数",
        {
          authorName,
          floor,
          lzlId,
          pid,
          portrait
        }
      ]);
      commentBoxVueObj.page = "lzl";
      Object.keys(currentReplyObj).forEach((key) => {
        currentReplyObj[key] = void 0;
      });
      Object.keys(replyInfo).forEach((key) => {
        currentReplyObj[key] = void 0;
      });
      replyInfo.authorName = authorName;
      replyInfo.floor = floor;
      replyInfo.lzlId = lzlId;
      replyInfo.pid = pid;
      replyInfo.portrait = portrait + "?";
      currentReplyObj.authorName = authorName;
      currentReplyObj.floor = floor;
      currentReplyObj.lzlId = lzlId;
      currentReplyObj.pid = pid;
      currentReplyObj.portrait = portrait + "?";
    },
    /**
     * 设置全局监听点击内容事件
     */
    setGlobalContentClick() {
      let that = this;
      function checkNotTriggerReply(event) {
        let currentComposed = event.composedPath()[0];
        if (currentComposed.localName === "a") {
          log.info("<a>标签不触发回复功能");
          return false;
        }
        if (currentComposed.localName === "img" && !currentComposed.classList.contains("BDE_Smiley")) {
          log.info("<img>标签不触发回复功能");
          return false;
        }
        return true;
      }
      domutils.on(document, "click", ".post-item .content", (event) => {
        if (!checkNotTriggerReply(event)) {
          return;
        }
        let $clickContent = event.target;
        that.$data.replyCommentData.value = void 0;
        that.$data.type.value = void 0;
        log.info("点击内容，触发设置当前回复的对象");
        try {
          let $commentBoxWrap = that.getCommentBoxWrap();
          $commentBoxWrap.classList.remove("comment-box-wrap-lzl");
          let $postItem = $clickContent.closest(".post-item");
          let itemData = $postItem["data-whitesev"];
          let $textContent = $clickContent.querySelector(
            ".text-content"
          );
          let textContent = $textContent.innerText;
          log.info(["获取元素上的数据", itemData]);
          let authorName = itemData["userName"];
          let pid = itemData["userPostId"];
          that.setCurrentReplyUser(pid, authorName);
          that.$data.replyCommentData.value = {
            type: "comment",
            data: {
              page: "pb",
              pid,
              authorName,
              content: textContent
            }
          };
          that.$data.type.value = "comment";
          that.$data.isShowFullEditor.value = true;
        } catch (error) {
          log.error(error);
          Qmsg.error(error.toString(), {
            zIndex: utils.getMaxZIndex() + 100
          });
        }
      });
      domutils.on(
        document,
        "click",
        "#whitesev-reply-dialog .whitesev-reply-dialog-content-item",
        (event) => {
          let $clickContent = event.target;
          if ($clickContent.classList.contains(
            "whitesev-reply-dialog-sheet-main-content"
          )) {
            return;
          }
          if (!checkNotTriggerReply(event)) {
            return;
          }
          that.$data.replyLzlCommentData.value = void 0;
          that.$data.type.value = void 0;
          log.info("点击楼中楼内容，触发设置当前回复的对象");
          try {
            let $commentBoxWrap = that.getCommentBoxWrap();
            $commentBoxWrap.classList.add("comment-box-wrap-lzl");
            let $replyDialog = $clickContent.closest(
              "#whitesev-reply-dialog"
            );
            let $userComment = $clickContent.querySelector(
              ".whitesev-reply-dialog-user-comment"
            );
            let userCommentText = $userComment.innerText;
            let mainData = $replyDialog["data-whitesev"];
            let itemData = $clickContent["data-lzl-item"];
            log.info(["主数据-获取元素上的数据", mainData]);
            log.info(["获取元素上的数据", itemData]);
            let authorName = itemData["userInfo"]["user_nickname"] || itemData["userInfo"]["user_name"];
            let pid = itemData["data"]["post_id"];
            let lzlId = itemData["data"]["comment_id"];
            let portrait = itemData["portrait"];
            let floor = mainData["userFloor"];
            that.setCurrentReplyLzlUser(pid, authorName, lzlId, floor, portrait);
            that.$data.replyLzlCommentData.value = {
              type: "lzl-comment",
              data: {
                page: "lzl",
                content: userCommentText,
                authorName,
                floor,
                lzlId,
                pid,
                portrait
              }
            };
            that.$data.type.value = "lzl-comment";
            that.$data.isShowFullEditor.value = true;
          } catch (error) {
            log.error(error);
            Qmsg.error(error.toString(), {
              zIndex: utils.getMaxZIndex() + 100
            });
          }
        }
      );
    },
    /**
     * 将输入框的值设置到原输入框中
     * @param value 输入的内容
     * @returns
     */
    setInputValue(value) {
      let commentBoxVueObj = this.getCommentBoxWrapVue();
      if (!commentBoxVueObj) {
        return;
      }
      try {
        commentBoxVueObj.inputValue = value;
        if (commentBoxVueObj.commentRef && commentBoxVueObj.commentRef instanceof HTMLInputElement) {
          commentBoxVueObj.commentRef.value = value;
          utils.dispatchEvent(commentBoxVueObj.commentRef, "input");
        }
      } catch (error) {
        Qmsg.error("设置输入框值失败");
        log.error(error);
      }
    },
    sendMsgBefore(submitTouchStartEvent) {
      let commentBoxVueObj = this.getCommentBoxWrapVue();
      if (!commentBoxVueObj) {
        return;
      }
      commentBoxVueObj.submitTouchstart(submitTouchStartEvent);
    },
    sendMsg(submitTouchEndEvent) {
      let commentBoxVueObj = this.getCommentBoxWrapVue();
      if (!commentBoxVueObj) {
        return;
      }
      commentBoxVueObj.submitTouchend(submitTouchEndEvent);
    },
    /**
     * 覆盖函数handlerCommentSuccess
     */
    cover_handlerCommentSuccess() {
      let that = this;
      VueUtils.waitVuePropToSet(".comment-box-wrap", [
        {
          msg: "等待属性 _events['comment-success'][0].fns => handlerCommentSuccess",
          check(vueObj) {
            var _a3, _b, _c;
            return typeof ((_c = (_b = (_a3 = vueObj == null ? void 0 : vueObj._events) == null ? void 0 : _a3["comment-success"]) == null ? void 0 : _b[0]) == null ? void 0 : _c.fns) === "function";
          },
          set(vueObj) {
            log.success("成功覆盖函数  _events['comment-success'][0].fns");
            vueObj._events["comment-success"][0].fns;
            vueObj._events["comment-success"][0].fns = (function(...args) {
              that.$vue.handlerCommentSuccess(...args);
            }).bind(vueObj);
          }
        }
      ]);
    },
    /**
     * 获取回复框容器元素
     */
    getCommentBoxWrap() {
      return document.querySelector(".comment-box-wrap");
    },
    /**
     * 等待评论框容器元素
     * @param callback
     * @returns
     */
    waitCommentBoxWrap(callback) {
      domutils.ready(() => {
        utils.waitNode(".comment-box-wrap", 1e4).then(($commentBoxWrap) => {
          if (!$commentBoxWrap) {
            log.error("获取不到评论框容器元素.comment-box-wrap");
            Qmsg.error("获取不到评论框容器元素.comment-box-wrap");
            return;
          }
          setTimeout(() => {
            callback();
          }, 200);
        });
      });
      return;
    },
    /**
     * 获取.comment-box-wrap的vue实例
     */
    getCommentBoxWrapVue() {
      let $commentBoxWrap = this.getCommentBoxWrap();
      if (!$commentBoxWrap) {
        log.error("获取不到.comment-box-wrap元素");
        Qmsg.error("获取不到.comment-box-wrap元素");
        return;
      }
      let vueObj = VueUtils.getVue($commentBoxWrap);
      if (!vueObj) {
        log.error("获取不到.comment-box-wrap元素上的vue属性");
        Qmsg.error("获取不到.comment-box-wrap元素上的vue属性");
        return;
      }
      return vueObj;
    },
    /**
     * 获取app-view的vue实例
     */
    getAppViewVue() {
      let $appView = document.querySelector(".app-view");
      if (!$appView) {
        log.error("获取不到app-view元素");
        Qmsg.error("获取不到app-view元素");
        return;
      }
      let vueObj = VueUtils.getVue($appView);
      if (!vueObj) {
        log.error("获取不到app-view元素上的vue属性");
        Qmsg.error("获取不到app-view元素上的vue属性");
        return;
      }
      return vueObj;
    },
    initLogin() {
      let that = this;
      VueUtils.waitVuePropToSet(".comment-box-wrap", [
        {
          msg: "等待参数 isLogin",
          check(vueObj) {
            return typeof vueObj.isLogin === "boolean";
          },
          set(vueObj) {
            that.$data.isLogin.value = vueObj.isLogin;
            log.success("成功获取参数 isLogin=" + that.$data.isLogin.value);
          }
        }
      ]);
    },
    checkLogin() {
      if (this.$data.isLogin.value) {
        return;
      }
      let $commentBoxWrap = this.getCommentBoxWrap();
      let vueObj = VueUtils.getVue($commentBoxWrap);
      if (!vueObj) {
        log.error("获取回复框容器元素的vue属性失败");
        return;
      }
      this.$data.isLogin.value = vueObj.isLogin;
      if (!vueObj.isLogin) {
        log.error("未登录");
        this.showLoginWakeModal();
      }
    },
    /**
     * 显示登录弹窗
     */
    showLoginWakeModal() {
      let vueObj = this.getAppViewVue();
      if (!vueObj) {
        return;
      }
      vueObj.isShowLoginWakeModal = true;
    },
    /**
     * 设置头像点击事件
     * + 未登录 点击显示登录弹窗提示
     * + 已登录 点击设置当前回复为当前帖子
     */
    setAvatarClickEvent() {
      let that = this;
      utils.waitNode(".comment-box-wrap .avatar", 1e4).then(($avatar) => {
        if (!$avatar) {
          log.error("获取回复框头像元素.comment-box-wrap .avatar失败");
          return;
        }
        domutils.on($avatar, "click", (event) => {
          let $commentBoxWrap = that.getCommentBoxWrap();
          let vueObj = VueUtils.getVue($commentBoxWrap);
          if (!vueObj) {
            log.error("获取回复框容器元素的vue属性失败");
            utils.preventEvent(event);
            return;
          }
          if (vueObj.isLogin) {
            log.info("重置默认当前回复为当前帖子");
            that.$data.type.value = "main";
            $commentBoxWrap.classList.remove("comment-box-wrap-lzl");
            let currentReplyObj = vueObj.currentReplyObj;
            let replyInfo = vueObj.replyInfo;
            Object.keys(currentReplyObj).forEach((key) => {
              delete currentReplyObj[key];
            });
            currentReplyObj.pid = replyInfo.pid;
          } else {
            log.error("未登录");
            that.showLoginWakeModal();
          }
        });
      });
    }
  };
  const useToolbarStore = pinia$1.defineStore({
    id: "ToolbarStore",
    state: () => ({
      /** 提示文字 */
      placeholder: "发帖千百度 文明第一步",
      /** 显示的 评论数量 */
      showCommentCount: "0",
      /** 显示的 点赞数量 */
      showGoodCount: "0"
    })
  });
  const useToolbarStateStore = pinia$1.defineStore({
    id: "ToolbarState",
    state: () => ({
      /** 是否显示小工具栏 */
      isShowSmallToolbar: true,
      /** 是否显示完整的工具栏 */
      isShowFullToolbar: false,
      /** 是否存在内容 */
      isEmpty: true
    })
  });
  const useAccountStore = pinia$1.defineStore("account", {
    state: () => {
      return {
        /** 是否已登录 */
        isLogin: false
      };
    },
    actions: {}
  });
  const _withScopeId$3 = (n) => (vue.pushScopeId("data-v-b0424261"), n = n(), vue.popScopeId(), n);
  const _hoisted_1$i = { id: "small-toolbar" };
  const _hoisted_2$c = { class: "small-editor-toolbar" };
  const _hoisted_3$9 = ["placeholder"];
  const _hoisted_4$9 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ vue.createElementVNode("svg", {
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "2299",
    width: "16",
    height: "16"
  }, [
    /* @__PURE__ */ vue.createElementVNode("path", {
      d: "M511 954.86c-119.3 0-231.4-46.1-315.8-129.9-84.3-83.8-130.8-195.3-130.8-313.8 0-118.5 46.5-230 130.8-313.8 84.3-83.8 196.5-129.9 315.8-129.9 119.3 0 231.5 46.1 315.8 129.9 174.1 173.1 174.1 454.6 0 627.6C742.5 908.66 630.3 954.86 511 954.86L511 954.86 511 954.86 511 954.86 511 954.86zM511.1 125.26c-103.8 0-201.3 40.1-274.6 113-73.4 72.9-113.8 169.8-113.8 272.9 0 103.1 40.4 200.1 113.7 272.9 73.3 72.8 170.9 113 274.6 113 103.8 0 201.4-40.2 274.8-113.1 151.4-150.4 151.4-395.3 0-545.8C712.4 165.36 614.8 125.26 511.1 125.26L511.1 125.26 511.1 125.26 511.1 125.26 511.1 125.26zM352.4 632.26c0 0 52.3 83.1 158.6 83.1 106.3 0 176-83.1 176-83.1s39.5-0.1 39.5 41.5c0 0-68.5 97-215.5 97s-194.8-97-194.8-97S314.7 632.26 352.4 632.26L352.4 632.26 352.4 632.26 352.4 632.26zM381.2 368.46c-30.1 0-54.7 24.3-54.7 54.3 0 30 24.6 54.3 54.7 54.3 30.3 0 54.7-24.3 54.7-54.3C435.9 392.76 411.5 368.46 381.2 368.46L381.2 368.46 381.2 368.46 381.2 368.46 381.2 368.46zM661.4 368.46c-30.2 0-54.7 24.3-54.7 54.3 0 30 24.5 54.3 54.7 54.3 30.2 0 54.7-24.3 54.7-54.3C716.1 392.76 691.7 368.46 661.4 368.46L661.4 368.46 661.4 368.46 661.4 368.46 661.4 368.46z",
      "p-id": "2300"
    })
  ], -1));
  const _hoisted_5$9 = [
    _hoisted_4$9
  ];
  const _hoisted_6$8 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ vue.createElementVNode("div", { class: "full-editor-toolbar" }, null, -1));
  const _hoisted_7$6 = { class: "gm-reply-other-toolbar" };
  const _hoisted_8$6 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ vue.createElementVNode("svg", { class: "icon icoon-comment" }, [
    /* @__PURE__ */ vue.createElementVNode("use", { "xlink:href": "#icon_pure_pb_bottom_comment28" })
  ], -1));
  const _hoisted_9$3 = { class: "text" };
  const _hoisted_10$2 = { class: "icon icoon-good" };
  const _hoisted_11$2 = ["xlink:href"];
  const _hoisted_12$2 = { class: "text" };
  const _sfc_main$D = /* @__PURE__ */ vue.defineComponent({
    __name: "SmallToolbar",
    emits: ["showFullToolbar"],
    setup(__props, { emit: __emit }) {
      const toolbarStore = useToolbarStore();
      const accountStore = useAccountStore();
      useToolbarStateStore();
      const emits = __emit;
      const ToolbarHandler = {
        /**
         * 点击工具栏触发显示完整的工具栏
         * @param event 
         */
        handleShowFullToolbar(event) {
          utils.preventEvent(event);
          if (!accountStore.isLogin) {
            TiebaReply.checkLogin();
            return;
          }
          emits("showFullToolbar", true);
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$i, [
          vue.createElementVNode("div", _hoisted_2$c, [
            vue.createElementVNode("input", {
              readonly: "",
              class: "small-editor-toolbar-input",
              placeholder: vue.unref(toolbarStore).placeholder,
              onClick: _cache[0] || (_cache[0] = //@ts-ignore
              (...args) => ToolbarHandler.handleShowFullToolbar && ToolbarHandler.handleShowFullToolbar(...args))
            }, null, 8, _hoisted_3$9),
            vue.createElementVNode("div", {
              class: "small-editor-toolbar-emoji-btn",
              onClick: _cache[1] || (_cache[1] = //@ts-ignore
              (...args) => ToolbarHandler.handleShowFullToolbar && ToolbarHandler.handleShowFullToolbar(...args))
            }, _hoisted_5$9)
          ]),
          _hoisted_6$8,
          vue.createElementVNode("div", _hoisted_7$6, [
            vue.createElementVNode("div", {
              class: "reply-comment-count",
              onClick: _cache[2] || (_cache[2] = //@ts-ignore
              (...args) => vue.unref(Toolbar).goToReplyArea && vue.unref(Toolbar).goToReplyArea(...args))
            }, [
              _hoisted_8$6,
              vue.createElementVNode("p", _hoisted_9$3, vue.toDisplayString(vue.unref(toolbarStore).showCommentCount), 1)
            ]),
            vue.createElementVNode("div", {
              class: "reply-good-count",
              onClick: _cache[3] || (_cache[3] = //@ts-ignore
              (...args) => vue.unref(Toolbar).goodClickEvent && vue.unref(Toolbar).goodClickEvent(...args))
            }, [
              (vue.openBlock(), vue.createElementBlock("svg", _hoisted_10$2, [
                vue.createElementVNode("use", {
                  "xlink:href": vue.unref(TiebaComment).has_agree.value ? "#icon_agree_after_26" : "#icon_agree_before_26"
                }, null, 8, _hoisted_11$2)
              ])),
              vue.createElementVNode("p", _hoisted_12$2, vue.toDisplayString(vue.unref(toolbarStore).showGoodCount), 1)
            ])
          ])
        ]);
      };
    }
  });
  const _export_sfc$1 = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const SmallToolbar = /* @__PURE__ */ _export_sfc$1(_sfc_main$D, [["__scopeId", "data-v-b0424261"]]);
  var __defProp$9 = Object.defineProperty;
  var __defProps$6 = Object.defineProperties;
  var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$b = Object.getOwnPropertySymbols;
  var __hasOwnProp$b = Object.prototype.hasOwnProperty;
  var __propIsEnum$b = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues$9 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$b.call(b, prop))
        __defNormalProp$9(a, prop, b[prop]);
    if (__getOwnPropSymbols$b)
      for (var prop of __getOwnPropSymbols$b(b)) {
        if (__propIsEnum$b.call(b, prop))
          __defNormalProp$9(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$6 = (a, b) => __defProps$6(a, __getOwnPropDescs$6(b));
  function computedEager(fn, options) {
    var _a3;
    const result = vueDemi.shallowRef();
    vueDemi.watchEffect(() => {
      result.value = fn();
    }, __spreadProps$6(__spreadValues$9({}, options), {
      flush: (_a3 = void 0) != null ? _a3 : "sync"
    }));
    return vueDemi.readonly(result);
  }
  var _a;
  const isClient = typeof window !== "undefined";
  const isString$1 = (val) => typeof val === "string";
  const noop = () => {
  };
  isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
  function resolveUnref(r) {
    return typeof r === "function" ? r() : vueDemi.unref(r);
  }
  function createFilterWrapper(filter, fn) {
    function wrapper(...args) {
      return new Promise((resolve, reject) => {
        Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
      });
    }
    return wrapper;
  }
  function throttleFilter(ms, trailing = true, leading = true, rejectOnCancel = false) {
    let lastExec = 0;
    let timer;
    let isLeading = true;
    let lastRejector = noop;
    let lastValue;
    const clear = () => {
      if (timer) {
        clearTimeout(timer);
        timer = void 0;
        lastRejector();
        lastRejector = noop;
      }
    };
    const filter = (_invoke) => {
      const duration = resolveUnref(ms);
      const elapsed = Date.now() - lastExec;
      const invoke = () => {
        return lastValue = _invoke();
      };
      clear();
      if (duration <= 0) {
        lastExec = Date.now();
        return invoke();
      }
      if (elapsed > duration && (leading || !isLeading)) {
        lastExec = Date.now();
        invoke();
      } else if (trailing) {
        lastValue = new Promise((resolve, reject) => {
          lastRejector = rejectOnCancel ? reject : resolve;
          timer = setTimeout(() => {
            lastExec = Date.now();
            isLeading = true;
            resolve(invoke());
            clear();
          }, Math.max(0, duration - elapsed));
        });
      }
      if (!leading && !timer)
        timer = setTimeout(() => isLeading = true, duration);
      isLeading = false;
      return lastValue;
    };
    return filter;
  }
  function identity$1(arg) {
    return arg;
  }
  function tryOnScopeDispose(fn) {
    if (vueDemi.getCurrentScope()) {
      vueDemi.onScopeDispose(fn);
      return true;
    }
    return false;
  }
  function useThrottleFn(fn, ms = 200, trailing = false, leading = true, rejectOnCancel = false) {
    return createFilterWrapper(throttleFilter(ms, trailing, leading, rejectOnCancel), fn);
  }
  function tryOnMounted(fn, sync = true) {
    if (vueDemi.getCurrentInstance())
      vueDemi.onMounted(fn);
    else if (sync)
      fn();
    else
      vueDemi.nextTick(fn);
  }
  function unrefElement(elRef) {
    var _a3;
    const plain = resolveUnref(elRef);
    return (_a3 = plain == null ? void 0 : plain.$el) != null ? _a3 : plain;
  }
  const defaultWindow = isClient ? window : void 0;
  const defaultDocument = isClient ? window.document : void 0;
  function useEventListener(...args) {
    let target;
    let events;
    let listeners;
    let options;
    if (isString$1(args[0]) || Array.isArray(args[0])) {
      [events, listeners, options] = args;
      target = defaultWindow;
    } else {
      [target, events, listeners, options] = args;
    }
    if (!target)
      return noop;
    if (!Array.isArray(events))
      events = [events];
    if (!Array.isArray(listeners))
      listeners = [listeners];
    const cleanups = [];
    const cleanup = () => {
      cleanups.forEach((fn) => fn());
      cleanups.length = 0;
    };
    const register = (el, event, listener, options2) => {
      el.addEventListener(event, listener, options2);
      return () => el.removeEventListener(event, listener, options2);
    };
    const stopWatch = vueDemi.watch(() => [unrefElement(target), resolveUnref(options)], ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      cleanups.push(...events.flatMap((event) => {
        return listeners.map((listener) => register(el, event, listener, options2));
      }));
    }, { immediate: true, flush: "post" });
    const stop = () => {
      stopWatch();
      cleanup();
    };
    tryOnScopeDispose(stop);
    return stop;
  }
  function useSupported(callback, sync = false) {
    const isSupported = vueDemi.ref();
    const update = () => isSupported.value = Boolean(callback());
    update();
    tryOnMounted(update, sync);
    return isSupported;
  }
  const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  const globalKey = "__vueuse_ssr_handlers__";
  _global[globalKey] = _global[globalKey] || {};
  function useDocumentVisibility({ document: document2 = defaultDocument } = {}) {
    if (!document2)
      return vueDemi.ref("visible");
    const visibility = vueDemi.ref(document2.visibilityState);
    useEventListener(document2, "visibilitychange", () => {
      visibility.value = document2.visibilityState;
    });
    return visibility;
  }
  var __getOwnPropSymbols$g = Object.getOwnPropertySymbols;
  var __hasOwnProp$g = Object.prototype.hasOwnProperty;
  var __propIsEnum$g = Object.prototype.propertyIsEnumerable;
  var __objRest$2 = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$g.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$g)
      for (var prop of __getOwnPropSymbols$g(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$g.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function useResizeObserver(target, callback, options = {}) {
    const _a3 = options, { window: window2 = defaultWindow } = _a3, observerOptions = __objRest$2(_a3, ["window"]);
    let observer;
    const isSupported = useSupported(() => window2 && "ResizeObserver" in window2);
    const cleanup = () => {
      if (observer) {
        observer.disconnect();
        observer = void 0;
      }
    };
    const stopWatch = vueDemi.watch(() => unrefElement(target), (el) => {
      cleanup();
      if (isSupported.value && window2 && el) {
        observer = new ResizeObserver(callback);
        observer.observe(el, observerOptions);
      }
    }, { immediate: true, flush: "post" });
    const stop = () => {
      cleanup();
      stopWatch();
    };
    tryOnScopeDispose(stop);
    return {
      isSupported,
      stop
    };
  }
  var SwipeDirection;
  (function(SwipeDirection2) {
    SwipeDirection2["UP"] = "UP";
    SwipeDirection2["RIGHT"] = "RIGHT";
    SwipeDirection2["DOWN"] = "DOWN";
    SwipeDirection2["LEFT"] = "LEFT";
    SwipeDirection2["NONE"] = "NONE";
  })(SwipeDirection || (SwipeDirection = {}));
  var __defProp2 = Object.defineProperty;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp2(a, prop, b[prop]);
      }
    return a;
  };
  const _TransitionPresets = {
    easeInSine: [0.12, 0, 0.39, 0],
    easeOutSine: [0.61, 1, 0.88, 1],
    easeInOutSine: [0.37, 0, 0.63, 1],
    easeInQuad: [0.11, 0, 0.5, 0],
    easeOutQuad: [0.5, 1, 0.89, 1],
    easeInOutQuad: [0.45, 0, 0.55, 1],
    easeInCubic: [0.32, 0, 0.67, 0],
    easeOutCubic: [0.33, 1, 0.68, 1],
    easeInOutCubic: [0.65, 0, 0.35, 1],
    easeInQuart: [0.5, 0, 0.75, 0],
    easeOutQuart: [0.25, 1, 0.5, 1],
    easeInOutQuart: [0.76, 0, 0.24, 1],
    easeInQuint: [0.64, 0, 0.78, 0],
    easeOutQuint: [0.22, 1, 0.36, 1],
    easeInOutQuint: [0.83, 0, 0.17, 1],
    easeInExpo: [0.7, 0, 0.84, 0],
    easeOutExpo: [0.16, 1, 0.3, 1],
    easeInOutExpo: [0.87, 0, 0.13, 1],
    easeInCirc: [0.55, 0, 1, 0.45],
    easeOutCirc: [0, 0.55, 0.45, 1],
    easeInOutCirc: [0.85, 0, 0.15, 1],
    easeInBack: [0.36, 0, 0.66, -0.56],
    easeOutBack: [0.34, 1.56, 0.64, 1],
    easeInOutBack: [0.68, -0.6, 0.32, 1.6]
  };
  __spreadValues({
    linear: identity$1
  }, _TransitionPresets);
  function useWindowFocus({ window: window2 = defaultWindow } = {}) {
    if (!window2)
      return vueDemi.ref(false);
    const focused = vueDemi.ref(window2.document.hasFocus());
    useEventListener(window2, "blur", () => {
      focused.value = false;
    });
    useEventListener(window2, "focus", () => {
      focused.value = true;
    });
    return focused;
  }
  const isInContainer = (el, container) => {
    if (!isClient || !el || !container)
      return false;
    const elRect = el.getBoundingClientRect();
    let containerRect;
    if (container instanceof Element) {
      containerRect = container.getBoundingClientRect();
    } else {
      containerRect = {
        top: 0,
        right: window.innerWidth,
        bottom: window.innerHeight,
        left: 0
      };
    }
    return elRect.top < containerRect.bottom && elRect.bottom > containerRect.top && elRect.right > containerRect.left && elRect.left < containerRect.right;
  };
  /**
  * @vue/shared v3.4.27
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **/
  const NOOP = () => {
  };
  const hasOwnProperty$6 = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty$6.call(val, key);
  const isArray$1 = Array.isArray;
  const isString = (val) => typeof val === "string";
  const isObject$1 = (val) => val !== null && typeof val === "object";
  const cacheStringFunction = (fn) => {
    const cache = /* @__PURE__ */ Object.create(null);
    return (str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  };
  const camelizeRE = /-(\w)/g;
  const camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
  });
  const capitalize$1 = cacheStringFunction((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
  var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  var Symbol$1 = root.Symbol;
  var objectProto$6 = Object.prototype;
  var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
  var nativeObjectToString$1 = objectProto$6.toString;
  var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty$5.call(value, symToStringTag$1), tag = value[symToStringTag$1];
    try {
      value[symToStringTag$1] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }
  var objectProto$5 = Object.prototype;
  var nativeObjectToString = objectProto$5.toString;
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
  var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var symbolTag = "[object Symbol]";
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
  }
  function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }
  var isArray = Array.isArray;
  var INFINITY$1 = 1 / 0;
  var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
  function baseToString(value) {
    if (typeof value == "string") {
      return value;
    }
    if (isArray(value)) {
      return arrayMap(value, baseToString) + "";
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : "";
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
  }
  var reWhitespace = /\s/;
  function trimmedEndIndex(string) {
    var index = string.length;
    while (index-- && reWhitespace.test(string.charAt(index))) {
    }
    return index;
  }
  var reTrimStart = /^\s+/;
  function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
  }
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var NAN = 0 / 0;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  function toNumber(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  function identity(value) {
    return value;
  }
  var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  var coreJsData = root["__core-js_shared__"];
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  var funcProto$1 = Function.prototype;
  var funcToString$1 = funcProto$1.toString;
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString$1.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto = Function.prototype, objectProto$4 = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
  var reIsNative = RegExp(
    "^" + funcToString.call(hasOwnProperty$4).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  var HOT_COUNT = 800, HOT_SPAN = 16;
  var nativeNow = Date.now;
  function shortOut(func) {
    var count = 0, lastCalled = 0;
    return function() {
      var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(void 0, arguments);
    };
  }
  function constant(value) {
    return function() {
      return value;
    };
  }
  var defineProperty = function() {
    try {
      var func = getNative(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e) {
    }
  }();
  var baseSetToString = !defineProperty ? identity : function(func, string) {
    return defineProperty(func, "toString", {
      "configurable": true,
      "enumerable": false,
      "value": constant(string),
      "writable": true
    });
  };
  var setToString = shortOut(baseSetToString);
  var MAX_SAFE_INTEGER$1 = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER$1 : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  function baseAssignValue(object, key, value) {
    if (key == "__proto__" && defineProperty) {
      defineProperty(object, key, {
        "configurable": true,
        "enumerable": true,
        "value": value,
        "writable": true
      });
    } else {
      object[key] = value;
    }
  }
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var objectProto$3 = Object.prototype;
  var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$3.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }
  var nativeMax$1 = Math.max;
  function overRest(func, start, transform) {
    start = nativeMax$1(start === void 0 ? func.length - 1 : start, 0);
    return function() {
      var args = arguments, index = -1, length = nativeMax$1(args.length - start, 0), array = Array(length);
      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return apply(func, this, otherArgs);
    };
  }
  var MAX_SAFE_INTEGER = 9007199254740991;
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  var argsTag = "[object Arguments]";
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }
  var objectProto$2 = Object.prototype;
  var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
  var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;
  var isArguments = baseIsArguments(/* @__PURE__ */ function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty$2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
  function isKey(value, object) {
    if (isArray(value)) {
      return false;
    }
    var type = typeof value;
    if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
  }
  var nativeCreate = getNative(Object, "create");
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
  var objectProto$1 = Object.prototype;
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED$1 ? void 0 : result;
    }
    return hasOwnProperty$1.call(data, key) ? data[key] : void 0;
  }
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
  }
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
    return this;
  }
  function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  Hash.prototype.clear = hashClear;
  Hash.prototype["delete"] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  var Map$1 = getNative(root, "Map");
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash(),
      "map": new (Map$1 || ListCache)(),
      "string": new Hash()
    };
  }
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  var FUNC_ERROR_TEXT$2 = "Expected a function";
  function memoize(func, resolver) {
    if (typeof func != "function" || resolver != null && typeof resolver != "function") {
      throw new TypeError(FUNC_ERROR_TEXT$2);
    }
    var memoized = function() {
      var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache)();
    return memoized;
  }
  memoize.Cache = MapCache;
  var MAX_MEMOIZE_SIZE = 500;
  function memoizeCapped(func) {
    var result = memoize(func, function(key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });
    var cache = result.cache;
    return result;
  }
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46) {
      result.push("");
    }
    string.replace(rePropName, function(match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
    });
    return result;
  });
  function toString(value) {
    return value == null ? "" : baseToString(value);
  }
  function castPath(value, object) {
    if (isArray(value)) {
      return value;
    }
    return isKey(value, object) ? [value] : stringToPath(toString(value));
  }
  var INFINITY = 1 / 0;
  function toKey(value) {
    if (typeof value == "string" || isSymbol(value)) {
      return value;
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
  }
  function baseGet(object, path) {
    path = castPath(path, object);
    var index = 0, length = path.length;
    while (object != null && index < length) {
      object = object[toKey(path[index++])];
    }
    return index && index == length ? object : void 0;
  }
  function get(object, path, defaultValue) {
    var result = object == null ? void 0 : baseGet(object, path);
    return result === void 0 ? defaultValue : result;
  }
  function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }
  var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : void 0;
  function isFlattenable(value) {
    return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
  }
  function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1, length = array.length;
    predicate || (predicate = isFlattenable);
    result || (result = []);
    while (++index < length) {
      var value = array[index];
      if (predicate(value)) {
        {
          arrayPush(result, value);
        }
      } else {
        result[result.length] = value;
      }
    }
    return result;
  }
  function flatten(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseFlatten(array) : [];
  }
  function flatRest(func) {
    return setToString(overRest(func, void 0, flatten), func + "");
  }
  function baseHasIn(object, key) {
    return object != null && key in Object(object);
  }
  function hasPath(object, path, hasFunc) {
    path = castPath(path, object);
    var index = -1, length = path.length, result = false;
    while (++index < length) {
      var key = toKey(path[index]);
      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }
      object = object[key];
    }
    if (result || ++index != length) {
      return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
  }
  function hasIn(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
  }
  var now = function() {
    return root.Date.now();
  };
  var FUNC_ERROR_TEXT$1 = "Expected a function";
  var nativeMax = Math.max, nativeMin = Math.min;
  function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT$1);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = "maxWait" in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
      var args = lastArgs, thisArg = lastThis;
      lastArgs = lastThis = void 0;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }
    function leadingEdge(time) {
      lastInvokeTime = time;
      timerId = setTimeout(timerExpired, wait);
      return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
      return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
      return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
      var time = now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
      timerId = void 0;
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = void 0;
      return result;
    }
    function cancel() {
      if (timerId !== void 0) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = void 0;
    }
    function flush() {
      return timerId === void 0 ? result : trailingEdge(now());
    }
    function debounced() {
      var time = now(), isInvoking = shouldInvoke(time);
      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;
      if (isInvoking) {
        if (timerId === void 0) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === void 0) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }
  function fromPairs(pairs) {
    var index = -1, length = pairs == null ? 0 : pairs.length, result = {};
    while (++index < length) {
      var pair = pairs[index];
      result[pair[0]] = pair[1];
    }
    return result;
  }
  function baseSet(object, path, value, customizer) {
    if (!isObject(object)) {
      return object;
    }
    path = castPath(path, object);
    var index = -1, length = path.length, lastIndex = length - 1, nested = object;
    while (nested != null && ++index < length) {
      var key = toKey(path[index]), newValue = value;
      if (key === "__proto__" || key === "constructor" || key === "prototype") {
        return object;
      }
      if (index != lastIndex) {
        var objValue = nested[key];
        newValue = void 0;
        if (newValue === void 0) {
          newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
        }
      }
      assignValue(nested, key, newValue);
      nested = nested[key];
    }
    return object;
  }
  function basePickBy(object, paths, predicate) {
    var index = -1, length = paths.length, result = {};
    while (++index < length) {
      var path = paths[index], value = baseGet(object, path);
      if (predicate(value, path)) {
        baseSet(result, castPath(path, object), value);
      }
    }
    return result;
  }
  function basePick(object, paths) {
    return basePickBy(object, paths, function(value, path) {
      return hasIn(object, path);
    });
  }
  var pick = flatRest(function(object, paths) {
    return object == null ? {} : basePick(object, paths);
  });
  var FUNC_ERROR_TEXT = "Expected a function";
  function throttle(func, wait, options) {
    var leading = true, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    if (isObject(options)) {
      leading = "leading" in options ? !!options.leading : leading;
      trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
      "leading": leading,
      "maxWait": wait,
      "trailing": trailing
    });
  }
  const isUndefined = (val) => val === void 0;
  const isNumber = (val) => typeof val === "number";
  const isElement = (e) => {
    if (typeof Element === "undefined")
      return false;
    return e instanceof Element;
  };
  const isStringNumber = (val) => {
    if (!isString(val)) {
      return false;
    }
    return !Number.isNaN(Number(val));
  };
  const capitalize = (str) => capitalize$1(str);
  const keysOf = (arr) => Object.keys(arr);
  class ElementPlusError extends Error {
    constructor(m) {
      super(m);
      this.name = "ElementPlusError";
    }
  }
  function throwError(scope, m) {
    throw new ElementPlusError(`[${scope}] ${m}`);
  }
  const getStyle = (element, styleName) => {
    var _a3;
    if (!isClient || !element || !styleName)
      return "";
    let key = camelize(styleName);
    if (key === "float")
      key = "cssFloat";
    try {
      const style = element.style[key];
      if (style)
        return style;
      const computed2 = (_a3 = document.defaultView) == null ? void 0 : _a3.getComputedStyle(element, "");
      return computed2 ? computed2[key] : "";
    } catch (e) {
      return element.style[key];
    }
  };
  function addUnit(value, defaultUnit = "px") {
    if (!value)
      return "";
    if (isNumber(value) || isStringNumber(value)) {
      return `${value}${defaultUnit}`;
    } else if (isString(value)) {
      return value;
    }
  }
  const isScroll = (el, isVertical) => {
    if (!isClient)
      return false;
    const key = {
      undefined: "overflow",
      true: "overflow-y",
      false: "overflow-x"
    }[String(isVertical)];
    const overflow = getStyle(el, key);
    return ["scroll", "auto", "overlay"].some((s) => overflow.includes(s));
  };
  const getScrollContainer = (el, isVertical) => {
    if (!isClient)
      return;
    let parent = el;
    while (parent) {
      if ([window, document, document.documentElement].includes(parent))
        return window;
      if (isScroll(parent, isVertical))
        return parent;
      parent = parent.parentNode;
    }
    return parent;
  };
  const epPropKey = "__epPropKey";
  const definePropType = (val) => val;
  const isEpProp = (val) => isObject$1(val) && !!val[epPropKey];
  const buildProp = (prop, key) => {
    if (!isObject$1(prop) || isEpProp(prop))
      return prop;
    const { values, required, default: defaultValue, type, validator } = prop;
    const _validator = values || validator ? (val) => {
      let valid = false;
      let allowedValues = [];
      if (values) {
        allowedValues = Array.from(values);
        if (hasOwn(prop, "default")) {
          allowedValues.push(defaultValue);
        }
        valid || (valid = allowedValues.includes(val));
      }
      if (validator)
        valid || (valid = validator(val));
      if (!valid && allowedValues.length > 0) {
        const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
        vue.warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
      }
      return valid;
    } : void 0;
    const epProp = {
      type,
      required: !!required,
      validator: _validator,
      [epPropKey]: true
    };
    if (hasOwn(prop, "default"))
      epProp.default = defaultValue;
    return epProp;
  };
  const buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [
    key,
    buildProp(option, key)
  ]));
  const iconPropType = definePropType([
    String,
    Object,
    Function
  ]);
  const withInstall = (main, extra) => {
    main.install = (app) => {
      for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
        app.component(comp.name, comp);
      }
    };
    if (extra) {
      for (const [key, comp] of Object.entries(extra)) {
        main[key] = comp;
      }
    }
    return main;
  };
  const withNoopInstall = (component) => {
    component.install = NOOP;
    return component;
  };
  const EVENT_CODE = {
    tab: "Tab",
    enter: "Enter",
    space: "Space",
    left: "ArrowLeft",
    up: "ArrowUp",
    right: "ArrowRight",
    down: "ArrowDown",
    esc: "Escape",
    delete: "Delete",
    backspace: "Backspace",
    numpadEnter: "NumpadEnter",
    pageUp: "PageUp",
    pageDown: "PageDown",
    home: "Home",
    end: "End"
  };
  const UPDATE_MODEL_EVENT = "update:modelValue";
  const componentSizes = ["", "default", "small", "large"];
  var PatchFlags = /* @__PURE__ */ ((PatchFlags2) => {
    PatchFlags2[PatchFlags2["TEXT"] = 1] = "TEXT";
    PatchFlags2[PatchFlags2["CLASS"] = 2] = "CLASS";
    PatchFlags2[PatchFlags2["STYLE"] = 4] = "STYLE";
    PatchFlags2[PatchFlags2["PROPS"] = 8] = "PROPS";
    PatchFlags2[PatchFlags2["FULL_PROPS"] = 16] = "FULL_PROPS";
    PatchFlags2[PatchFlags2["HYDRATE_EVENTS"] = 32] = "HYDRATE_EVENTS";
    PatchFlags2[PatchFlags2["STABLE_FRAGMENT"] = 64] = "STABLE_FRAGMENT";
    PatchFlags2[PatchFlags2["KEYED_FRAGMENT"] = 128] = "KEYED_FRAGMENT";
    PatchFlags2[PatchFlags2["UNKEYED_FRAGMENT"] = 256] = "UNKEYED_FRAGMENT";
    PatchFlags2[PatchFlags2["NEED_PATCH"] = 512] = "NEED_PATCH";
    PatchFlags2[PatchFlags2["DYNAMIC_SLOTS"] = 1024] = "DYNAMIC_SLOTS";
    PatchFlags2[PatchFlags2["HOISTED"] = -1] = "HOISTED";
    PatchFlags2[PatchFlags2["BAIL"] = -2] = "BAIL";
    return PatchFlags2;
  })(PatchFlags || {});
  function isFragment(node) {
    return vue.isVNode(node) && node.type === vue.Fragment;
  }
  function isComment(node) {
    return vue.isVNode(node) && node.type === vue.Comment;
  }
  function isValidElementNode(node) {
    return vue.isVNode(node) && !isFragment(node) && !isComment(node);
  }
  const flattedChildren = (children) => {
    const vNodes = isArray$1(children) ? children : [children];
    const result = [];
    vNodes.forEach((child) => {
      var _a3;
      if (isArray$1(child)) {
        result.push(...flattedChildren(child));
      } else if (vue.isVNode(child) && isArray$1(child.children)) {
        result.push(...flattedChildren(child.children));
      } else {
        result.push(child);
        if (vue.isVNode(child) && ((_a3 = child.component) == null ? void 0 : _a3.subTree)) {
          result.push(...flattedChildren(child.component.subTree));
        }
      }
    });
    return result;
  };
  const mutable = (val) => val;
  const DEFAULT_EXCLUDE_KEYS = ["class", "style"];
  const LISTENER_PREFIX = /^on[A-Z]/;
  const useAttrs = (params = {}) => {
    const { excludeListeners = false, excludeKeys } = params;
    const allExcludeKeys = vue.computed(() => {
      return ((excludeKeys == null ? void 0 : excludeKeys.value) || []).concat(DEFAULT_EXCLUDE_KEYS);
    });
    const instance = vue.getCurrentInstance();
    if (!instance) {
      return vue.computed(() => ({}));
    }
    return vue.computed(() => {
      var _a3;
      return fromPairs(Object.entries((_a3 = instance.proxy) == null ? void 0 : _a3.$attrs).filter(([key]) => !allExcludeKeys.value.includes(key) && !(excludeListeners && LISTENER_PREFIX.test(key))));
    });
  };
  const useDeprecated = ({ from, replacement, scope, version, ref: ref2, type = "API" }, condition) => {
    vue.watch(() => vue.unref(condition), (val) => {
    }, {
      immediate: true
    });
  };
  var English = {
    name: "en",
    el: {
      breadcrumb: {
        label: "Breadcrumb"
      },
      colorpicker: {
        confirm: "OK",
        clear: "Clear",
        defaultLabel: "color picker",
        description: "current color is {color}. press enter to select a new color."
      },
      datepicker: {
        now: "Now",
        today: "Today",
        cancel: "Cancel",
        clear: "Clear",
        confirm: "OK",
        dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
        monthTablePrompt: "Use the arrow keys and enter to select the month",
        yearTablePrompt: "Use the arrow keys and enter to select the year",
        selectedDate: "Selected date",
        selectDate: "Select date",
        selectTime: "Select time",
        startDate: "Start Date",
        startTime: "Start Time",
        endDate: "End Date",
        endTime: "End Time",
        prevYear: "Previous Year",
        nextYear: "Next Year",
        prevMonth: "Previous Month",
        nextMonth: "Next Month",
        year: "",
        month1: "January",
        month2: "February",
        month3: "March",
        month4: "April",
        month5: "May",
        month6: "June",
        month7: "July",
        month8: "August",
        month9: "September",
        month10: "October",
        month11: "November",
        month12: "December",
        week: "week",
        weeks: {
          sun: "Sun",
          mon: "Mon",
          tue: "Tue",
          wed: "Wed",
          thu: "Thu",
          fri: "Fri",
          sat: "Sat"
        },
        weeksFull: {
          sun: "Sunday",
          mon: "Monday",
          tue: "Tuesday",
          wed: "Wednesday",
          thu: "Thursday",
          fri: "Friday",
          sat: "Saturday"
        },
        months: {
          jan: "Jan",
          feb: "Feb",
          mar: "Mar",
          apr: "Apr",
          may: "May",
          jun: "Jun",
          jul: "Jul",
          aug: "Aug",
          sep: "Sep",
          oct: "Oct",
          nov: "Nov",
          dec: "Dec"
        }
      },
      inputNumber: {
        decrease: "decrease number",
        increase: "increase number"
      },
      select: {
        loading: "Loading",
        noMatch: "No matching data",
        noData: "No data",
        placeholder: "Select"
      },
      dropdown: {
        toggleDropdown: "Toggle Dropdown"
      },
      cascader: {
        noMatch: "No matching data",
        loading: "Loading",
        placeholder: "Select",
        noData: "No data"
      },
      pagination: {
        goto: "Go to",
        pagesize: "/page",
        total: "Total {total}",
        pageClassifier: "",
        page: "Page",
        prev: "Go to previous page",
        next: "Go to next page",
        currentPage: "page {pager}",
        prevPages: "Previous {pager} pages",
        nextPages: "Next {pager} pages",
        deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
      },
      dialog: {
        close: "Close this dialog"
      },
      drawer: {
        close: "Close this dialog"
      },
      messagebox: {
        title: "Message",
        confirm: "OK",
        cancel: "Cancel",
        error: "Illegal input",
        close: "Close this dialog"
      },
      upload: {
        deleteTip: "press delete to remove",
        delete: "Delete",
        preview: "Preview",
        continue: "Continue"
      },
      slider: {
        defaultLabel: "slider between {min} and {max}",
        defaultRangeStartLabel: "pick start value",
        defaultRangeEndLabel: "pick end value"
      },
      table: {
        emptyText: "No Data",
        confirmFilter: "Confirm",
        resetFilter: "Reset",
        clearFilter: "All",
        sumText: "Sum"
      },
      tour: {
        next: "Next",
        previous: "Previous",
        finish: "Finish"
      },
      tree: {
        emptyText: "No Data"
      },
      transfer: {
        noMatch: "No matching data",
        noData: "No data",
        titles: ["List 1", "List 2"],
        filterPlaceholder: "Enter keyword",
        noCheckedFormat: "{total} items",
        hasCheckedFormat: "{checked}/{total} checked"
      },
      image: {
        error: "FAILED"
      },
      pageHeader: {
        title: "Back"
      },
      popconfirm: {
        confirmButtonText: "Yes",
        cancelButtonText: "No"
      },
      carousel: {
        leftArrow: "Carousel arrow left",
        rightArrow: "Carousel arrow right",
        indicator: "Carousel switch to index {index}"
      }
    }
  };
  const buildTranslator = (locale) => (path, option) => translate(path, option, vue.unref(locale));
  const translate = (path, option, locale) => get(locale, path, path).replace(/\{(\w+)\}/g, (_, key) => {
    var _a3;
    return `${(_a3 = option == null ? void 0 : option[key]) != null ? _a3 : `{${key}}`}`;
  });
  const buildLocaleContext = (locale) => {
    const lang = vue.computed(() => vue.unref(locale).name);
    const localeRef = vue.isRef(locale) ? locale : vue.ref(locale);
    return {
      lang,
      locale: localeRef,
      t: buildTranslator(locale)
    };
  };
  const localeContextKey = Symbol("localeContextKey");
  const useLocale = (localeOverrides) => {
    const locale = vue.inject(localeContextKey, vue.ref());
    return buildLocaleContext(vue.computed(() => locale.value || English));
  };
  const defaultNamespace = "el";
  const statePrefix = "is-";
  const _bem = (namespace, block, blockSuffix, element, modifier) => {
    let cls = `${namespace}-${block}`;
    if (blockSuffix) {
      cls += `-${blockSuffix}`;
    }
    if (element) {
      cls += `__${element}`;
    }
    if (modifier) {
      cls += `--${modifier}`;
    }
    return cls;
  };
  const namespaceContextKey = Symbol("namespaceContextKey");
  const useGetDerivedNamespace = (namespaceOverrides) => {
    const derivedNamespace = vue.getCurrentInstance() ? vue.inject(namespaceContextKey, vue.ref(defaultNamespace)) : vue.ref(defaultNamespace);
    const namespace = vue.computed(() => {
      return vue.unref(derivedNamespace) || defaultNamespace;
    });
    return namespace;
  };
  const useNamespace = (block, namespaceOverrides) => {
    const namespace = useGetDerivedNamespace();
    const b = (blockSuffix = "") => _bem(namespace.value, block, blockSuffix, "", "");
    const e = (element) => element ? _bem(namespace.value, block, "", element, "") : "";
    const m = (modifier) => modifier ? _bem(namespace.value, block, "", "", modifier) : "";
    const be = (blockSuffix, element) => blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, "") : "";
    const em = (element, modifier) => element && modifier ? _bem(namespace.value, block, "", element, modifier) : "";
    const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, "", modifier) : "";
    const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : "";
    const is = (name, ...args) => {
      const state = args.length >= 1 ? args[0] : true;
      return name && state ? `${statePrefix}${name}` : "";
    };
    const cssVar = (object) => {
      const styles = {};
      for (const key in object) {
        if (object[key]) {
          styles[`--${namespace.value}-${key}`] = object[key];
        }
      }
      return styles;
    };
    const cssVarBlock = (object) => {
      const styles = {};
      for (const key in object) {
        if (object[key]) {
          styles[`--${namespace.value}-${block}-${key}`] = object[key];
        }
      }
      return styles;
    };
    const cssVarName = (name) => `--${namespace.value}-${name}`;
    const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
    return {
      namespace,
      b,
      e,
      m,
      be,
      em,
      bm,
      bem,
      is,
      cssVar,
      cssVarName,
      cssVarBlock,
      cssVarBlockName
    };
  };
  const useProp = (name) => {
    const vm = vue.getCurrentInstance();
    return vue.computed(() => {
      var _a3, _b;
      return (_b = (_a3 = vm == null ? void 0 : vm.proxy) == null ? void 0 : _a3.$props) == null ? void 0 : _b[name];
    });
  };
  const useThrottleRender = (loading, throttle2 = 0) => {
    if (throttle2 === 0)
      return loading;
    const throttled = vue.ref(false);
    let timeoutHandle = 0;
    const dispatchThrottling = () => {
      if (timeoutHandle) {
        clearTimeout(timeoutHandle);
      }
      timeoutHandle = window.setTimeout(() => {
        throttled.value = loading.value;
      }, throttle2);
    };
    vue.onMounted(dispatchThrottling);
    vue.watch(() => loading.value, (val) => {
      if (val) {
        dispatchThrottling();
      } else {
        throttled.value = val;
      }
    });
    return throttled;
  };
  const defaultIdInjection = {
    prefix: Math.floor(Math.random() * 1e4),
    current: 0
  };
  const ID_INJECTION_KEY = Symbol("elIdInjection");
  const useIdInjection = () => {
    return vue.getCurrentInstance() ? vue.inject(ID_INJECTION_KEY, defaultIdInjection) : defaultIdInjection;
  };
  const useId = (deterministicId) => {
    const idInjection = useIdInjection();
    const namespace = useGetDerivedNamespace();
    const idRef = vue.computed(() => vue.unref(deterministicId) || `${namespace.value}-id-${idInjection.prefix}-${idInjection.current++}`);
    return idRef;
  };
  const initial = {
    current: 0
  };
  const zIndex = vue.ref(0);
  const defaultInitialZIndex = 2e3;
  const ZINDEX_INJECTION_KEY = Symbol("elZIndexContextKey");
  const zIndexContextKey = Symbol("zIndexContextKey");
  const useZIndex = (zIndexOverrides) => {
    const increasingInjection = vue.getCurrentInstance() ? vue.inject(ZINDEX_INJECTION_KEY, initial) : initial;
    const zIndexInjection = vue.getCurrentInstance() ? vue.inject(zIndexContextKey, void 0) : void 0;
    const initialZIndex = vue.computed(() => {
      const zIndexFromInjection = vue.unref(zIndexInjection);
      return isNumber(zIndexFromInjection) ? zIndexFromInjection : defaultInitialZIndex;
    });
    const currentZIndex = vue.computed(() => initialZIndex.value + zIndex.value);
    const nextZIndex = () => {
      increasingInjection.current++;
      zIndex.value = increasingInjection.current;
      return currentZIndex.value;
    };
    if (!isClient && !vue.inject(ZINDEX_INJECTION_KEY)) ;
    return {
      initialZIndex,
      currentZIndex,
      nextZIndex
    };
  };
  const getOrderedChildren = (vm, childComponentName, children) => {
    const nodes = flattedChildren(vm.subTree).filter((n) => {
      var _a3;
      return vue.isVNode(n) && ((_a3 = n.type) == null ? void 0 : _a3.name) === childComponentName && !!n.component;
    });
    const uids = nodes.map((n) => n.component.uid);
    return uids.map((uid) => children[uid]).filter((p) => !!p);
  };
  const useOrderedChildren = (vm, childComponentName) => {
    const children = {};
    const orderedChildren = vue.shallowRef([]);
    const addChild = (child) => {
      children[child.uid] = child;
      orderedChildren.value = getOrderedChildren(vm, childComponentName, children);
    };
    const removeChild = (uid) => {
      delete children[uid];
      orderedChildren.value = orderedChildren.value.filter((children2) => children2.uid !== uid);
    };
    return {
      children: orderedChildren,
      addChild,
      removeChild
    };
  };
  const useSizeProp = buildProp({
    type: String,
    values: componentSizes,
    required: false
  });
  const SIZE_INJECTION_KEY = Symbol("size");
  const useGlobalSize = () => {
    const injectedSize = vue.inject(SIZE_INJECTION_KEY, {});
    return vue.computed(() => {
      return vue.unref(injectedSize.size) || "";
    });
  };
  const ariaProps = buildProps({
    ariaLabel: String,
    ariaOrientation: {
      type: String,
      values: ["horizontal", "vertical", "undefined"]
    },
    ariaControls: String
  });
  const useAriaProps = (arias) => {
    return pick(ariaProps, arias);
  };
  const configProviderContextKey = Symbol();
  const globalConfig = vue.ref();
  function useGlobalConfig(key, defaultValue = void 0) {
    const config = vue.getCurrentInstance() ? vue.inject(configProviderContextKey, globalConfig) : globalConfig;
    {
      return vue.computed(() => {
        var _a3, _b;
        return (_b = (_a3 = config.value) == null ? void 0 : _a3[key]) != null ? _b : defaultValue;
      });
    }
  }
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const iconProps = buildProps({
    size: {
      type: definePropType([Number, String])
    },
    color: {
      type: String
    }
  });
  const __default__$n = vue.defineComponent({
    name: "ElIcon",
    inheritAttrs: false
  });
  const _sfc_main$C = /* @__PURE__ */ vue.defineComponent({
    ...__default__$n,
    props: iconProps,
    setup(__props) {
      const props = __props;
      const ns = useNamespace("icon");
      const style = vue.computed(() => {
        const { size, color } = props;
        if (!size && !color)
          return {};
        return {
          fontSize: isUndefined(size) ? void 0 : addUnit(size),
          "--color": color
        };
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("i", vue.mergeProps({
          class: vue.unref(ns).b(),
          style: vue.unref(style)
        }, _ctx.$attrs), [
          vue.renderSlot(_ctx.$slots, "default")
        ], 16);
      };
    }
  });
  var Icon = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__file", "icon.vue"]]);
  const ElIcon = withInstall(Icon);
  const formContextKey = Symbol("formContextKey");
  const formItemContextKey = Symbol("formItemContextKey");
  const useFormSize = (fallback, ignore = {}) => {
    const emptyRef = vue.ref(void 0);
    const size = ignore.prop ? emptyRef : useProp("size");
    const globalConfig2 = ignore.global ? emptyRef : useGlobalSize();
    const form = ignore.form ? { size: void 0 } : vue.inject(formContextKey, void 0);
    const formItem = ignore.formItem ? { size: void 0 } : vue.inject(formItemContextKey, void 0);
    return vue.computed(() => size.value || vue.unref(fallback) || (formItem == null ? void 0 : formItem.size) || (form == null ? void 0 : form.size) || globalConfig2.value || "");
  };
  const useFormDisabled = (fallback) => {
    const disabled = useProp("disabled");
    const form = vue.inject(formContextKey, void 0);
    return vue.computed(() => disabled.value || vue.unref(fallback) || (form == null ? void 0 : form.disabled) || false);
  };
  const useFormItem = () => {
    const form = vue.inject(formContextKey, void 0);
    const formItem = vue.inject(formItemContextKey, void 0);
    return {
      form,
      formItem
    };
  };
  const GAP = 4;
  const BAR_MAP = {
    vertical: {
      offset: "offsetHeight",
      scroll: "scrollTop",
      scrollSize: "scrollHeight",
      size: "height",
      key: "vertical",
      axis: "Y",
      client: "clientY",
      direction: "top"
    },
    horizontal: {
      offset: "offsetWidth",
      scroll: "scrollLeft",
      scrollSize: "scrollWidth",
      size: "width",
      key: "horizontal",
      axis: "X",
      client: "clientX",
      direction: "left"
    }
  };
  const renderThumbStyle = ({
    move,
    size,
    bar
  }) => ({
    [bar.size]: size,
    transform: `translate${bar.axis}(${move}%)`
  });
  const scrollbarContextKey = Symbol("scrollbarContextKey");
  const thumbProps = buildProps({
    vertical: Boolean,
    size: String,
    move: Number,
    ratio: {
      type: Number,
      required: true
    },
    always: Boolean
  });
  const COMPONENT_NAME$5 = "Thumb";
  const _sfc_main$B = /* @__PURE__ */ vue.defineComponent({
    __name: "thumb",
    props: thumbProps,
    setup(__props) {
      const props = __props;
      const scrollbar = vue.inject(scrollbarContextKey);
      const ns = useNamespace("scrollbar");
      if (!scrollbar)
        throwError(COMPONENT_NAME$5, "can not inject scrollbar context");
      const instance = vue.ref();
      const thumb = vue.ref();
      const thumbState = vue.ref({});
      const visible = vue.ref(false);
      let cursorDown = false;
      let cursorLeave = false;
      let originalOnSelectStart = isClient ? document.onselectstart : null;
      const bar = vue.computed(() => BAR_MAP[props.vertical ? "vertical" : "horizontal"]);
      const thumbStyle = vue.computed(() => renderThumbStyle({
        size: props.size,
        move: props.move,
        bar: bar.value
      }));
      const offsetRatio = vue.computed(() => instance.value[bar.value.offset] ** 2 / scrollbar.wrapElement[bar.value.scrollSize] / props.ratio / thumb.value[bar.value.offset]);
      const clickThumbHandler = (e) => {
        var _a3;
        e.stopPropagation();
        if (e.ctrlKey || [1, 2].includes(e.button))
          return;
        (_a3 = window.getSelection()) == null ? void 0 : _a3.removeAllRanges();
        startDrag(e);
        const el = e.currentTarget;
        if (!el)
          return;
        thumbState.value[bar.value.axis] = el[bar.value.offset] - (e[bar.value.client] - el.getBoundingClientRect()[bar.value.direction]);
      };
      const clickTrackHandler = (e) => {
        if (!thumb.value || !instance.value || !scrollbar.wrapElement)
          return;
        const offset = Math.abs(e.target.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]);
        const thumbHalf = thumb.value[bar.value.offset] / 2;
        const thumbPositionPercentage = (offset - thumbHalf) * 100 * offsetRatio.value / instance.value[bar.value.offset];
        scrollbar.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize] / 100;
      };
      const startDrag = (e) => {
        e.stopImmediatePropagation();
        cursorDown = true;
        document.addEventListener("mousemove", mouseMoveDocumentHandler);
        document.addEventListener("mouseup", mouseUpDocumentHandler);
        originalOnSelectStart = document.onselectstart;
        document.onselectstart = () => false;
      };
      const mouseMoveDocumentHandler = (e) => {
        if (!instance.value || !thumb.value)
          return;
        if (cursorDown === false)
          return;
        const prevPage = thumbState.value[bar.value.axis];
        if (!prevPage)
          return;
        const offset = (instance.value.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]) * -1;
        const thumbClickPosition = thumb.value[bar.value.offset] - prevPage;
        const thumbPositionPercentage = (offset - thumbClickPosition) * 100 * offsetRatio.value / instance.value[bar.value.offset];
        scrollbar.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize] / 100;
      };
      const mouseUpDocumentHandler = () => {
        cursorDown = false;
        thumbState.value[bar.value.axis] = 0;
        document.removeEventListener("mousemove", mouseMoveDocumentHandler);
        document.removeEventListener("mouseup", mouseUpDocumentHandler);
        restoreOnselectstart();
        if (cursorLeave)
          visible.value = false;
      };
      const mouseMoveScrollbarHandler = () => {
        cursorLeave = false;
        visible.value = !!props.size;
      };
      const mouseLeaveScrollbarHandler = () => {
        cursorLeave = true;
        visible.value = cursorDown;
      };
      vue.onBeforeUnmount(() => {
        restoreOnselectstart();
        document.removeEventListener("mouseup", mouseUpDocumentHandler);
      });
      const restoreOnselectstart = () => {
        if (document.onselectstart !== originalOnSelectStart)
          document.onselectstart = originalOnSelectStart;
      };
      useEventListener(vue.toRef(scrollbar, "scrollbarElement"), "mousemove", mouseMoveScrollbarHandler);
      useEventListener(vue.toRef(scrollbar, "scrollbarElement"), "mouseleave", mouseLeaveScrollbarHandler);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.Transition, {
          name: vue.unref(ns).b("fade"),
          persisted: ""
        }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode("div", {
              ref_key: "instance",
              ref: instance,
              class: vue.normalizeClass([vue.unref(ns).e("bar"), vue.unref(ns).is(vue.unref(bar).key)]),
              onMousedown: clickTrackHandler
            }, [
              vue.createElementVNode("div", {
                ref_key: "thumb",
                ref: thumb,
                class: vue.normalizeClass(vue.unref(ns).e("thumb")),
                style: vue.normalizeStyle(vue.unref(thumbStyle)),
                onMousedown: clickThumbHandler
              }, null, 38)
            ], 34), [
              [vue.vShow, _ctx.always || visible.value]
            ])
          ]),
          _: 1
        }, 8, ["name"]);
      };
    }
  });
  var Thumb = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__file", "thumb.vue"]]);
  const barProps = buildProps({
    always: {
      type: Boolean,
      default: true
    },
    minSize: {
      type: Number,
      required: true
    }
  });
  const _sfc_main$A = /* @__PURE__ */ vue.defineComponent({
    __name: "bar",
    props: barProps,
    setup(__props, { expose }) {
      const props = __props;
      const scrollbar = vue.inject(scrollbarContextKey);
      const moveX = vue.ref(0);
      const moveY = vue.ref(0);
      const sizeWidth = vue.ref("");
      const sizeHeight = vue.ref("");
      const ratioY = vue.ref(1);
      const ratioX = vue.ref(1);
      const handleScroll = (wrap) => {
        if (wrap) {
          const offsetHeight = wrap.offsetHeight - GAP;
          const offsetWidth = wrap.offsetWidth - GAP;
          moveY.value = wrap.scrollTop * 100 / offsetHeight * ratioY.value;
          moveX.value = wrap.scrollLeft * 100 / offsetWidth * ratioX.value;
        }
      };
      const update = () => {
        const wrap = scrollbar == null ? void 0 : scrollbar.wrapElement;
        if (!wrap)
          return;
        const offsetHeight = wrap.offsetHeight - GAP;
        const offsetWidth = wrap.offsetWidth - GAP;
        const originalHeight = offsetHeight ** 2 / wrap.scrollHeight;
        const originalWidth = offsetWidth ** 2 / wrap.scrollWidth;
        const height = Math.max(originalHeight, props.minSize);
        const width = Math.max(originalWidth, props.minSize);
        ratioY.value = originalHeight / (offsetHeight - originalHeight) / (height / (offsetHeight - height));
        ratioX.value = originalWidth / (offsetWidth - originalWidth) / (width / (offsetWidth - width));
        sizeHeight.value = height + GAP < offsetHeight ? `${height}px` : "";
        sizeWidth.value = width + GAP < offsetWidth ? `${width}px` : "";
      };
      expose({
        handleScroll,
        update
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createVNode(Thumb, {
            move: moveX.value,
            ratio: ratioX.value,
            size: sizeWidth.value,
            always: _ctx.always
          }, null, 8, ["move", "ratio", "size", "always"]),
          vue.createVNode(Thumb, {
            move: moveY.value,
            ratio: ratioY.value,
            size: sizeHeight.value,
            vertical: "",
            always: _ctx.always
          }, null, 8, ["move", "ratio", "size", "always"])
        ], 64);
      };
    }
  });
  var Bar = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__file", "bar.vue"]]);
  const scrollbarProps = buildProps({
    height: {
      type: [String, Number],
      default: ""
    },
    maxHeight: {
      type: [String, Number],
      default: ""
    },
    native: {
      type: Boolean,
      default: false
    },
    wrapStyle: {
      type: definePropType([String, Object, Array]),
      default: ""
    },
    wrapClass: {
      type: [String, Array],
      default: ""
    },
    viewClass: {
      type: [String, Array],
      default: ""
    },
    viewStyle: {
      type: [String, Array, Object],
      default: ""
    },
    noresize: Boolean,
    tag: {
      type: String,
      default: "div"
    },
    always: Boolean,
    minSize: {
      type: Number,
      default: 20
    },
    id: String,
    role: String,
    ...useAriaProps(["ariaLabel", "ariaOrientation"])
  });
  const scrollbarEmits = {
    scroll: ({
      scrollTop,
      scrollLeft
    }) => [scrollTop, scrollLeft].every(isNumber)
  };
  const COMPONENT_NAME$4 = "ElScrollbar";
  const __default__$m = vue.defineComponent({
    name: COMPONENT_NAME$4
  });
  const _sfc_main$z = /* @__PURE__ */ vue.defineComponent({
    ...__default__$m,
    props: scrollbarProps,
    emits: scrollbarEmits,
    setup(__props, { expose, emit }) {
      const props = __props;
      const ns = useNamespace("scrollbar");
      let stopResizeObserver = void 0;
      let stopResizeListener = void 0;
      const scrollbarRef = vue.ref();
      const wrapRef = vue.ref();
      const resizeRef = vue.ref();
      const barRef = vue.ref();
      const wrapStyle = vue.computed(() => {
        const style = {};
        if (props.height)
          style.height = addUnit(props.height);
        if (props.maxHeight)
          style.maxHeight = addUnit(props.maxHeight);
        return [props.wrapStyle, style];
      });
      const wrapKls = vue.computed(() => {
        return [
          props.wrapClass,
          ns.e("wrap"),
          { [ns.em("wrap", "hidden-default")]: !props.native }
        ];
      });
      const resizeKls = vue.computed(() => {
        return [ns.e("view"), props.viewClass];
      });
      const handleScroll = () => {
        var _a3;
        if (wrapRef.value) {
          (_a3 = barRef.value) == null ? void 0 : _a3.handleScroll(wrapRef.value);
          emit("scroll", {
            scrollTop: wrapRef.value.scrollTop,
            scrollLeft: wrapRef.value.scrollLeft
          });
        }
      };
      function scrollTo(arg1, arg2) {
        if (isObject$1(arg1)) {
          wrapRef.value.scrollTo(arg1);
        } else if (isNumber(arg1) && isNumber(arg2)) {
          wrapRef.value.scrollTo(arg1, arg2);
        }
      }
      const setScrollTop = (value) => {
        if (!isNumber(value)) {
          return;
        }
        wrapRef.value.scrollTop = value;
      };
      const setScrollLeft = (value) => {
        if (!isNumber(value)) {
          return;
        }
        wrapRef.value.scrollLeft = value;
      };
      const update = () => {
        var _a3;
        (_a3 = barRef.value) == null ? void 0 : _a3.update();
      };
      vue.watch(() => props.noresize, (noresize) => {
        if (noresize) {
          stopResizeObserver == null ? void 0 : stopResizeObserver();
          stopResizeListener == null ? void 0 : stopResizeListener();
        } else {
          ({ stop: stopResizeObserver } = useResizeObserver(resizeRef, update));
          stopResizeListener = useEventListener("resize", update);
        }
      }, { immediate: true });
      vue.watch(() => [props.maxHeight, props.height], () => {
        if (!props.native)
          vue.nextTick(() => {
            var _a3;
            update();
            if (wrapRef.value) {
              (_a3 = barRef.value) == null ? void 0 : _a3.handleScroll(wrapRef.value);
            }
          });
      });
      vue.provide(scrollbarContextKey, vue.reactive({
        scrollbarElement: scrollbarRef,
        wrapElement: wrapRef
      }));
      vue.onMounted(() => {
        if (!props.native)
          vue.nextTick(() => {
            update();
          });
      });
      vue.onUpdated(() => update());
      expose({
        wrapRef,
        update,
        scrollTo,
        setScrollTop,
        setScrollLeft,
        handleScroll
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          ref_key: "scrollbarRef",
          ref: scrollbarRef,
          class: vue.normalizeClass(vue.unref(ns).b())
        }, [
          vue.createElementVNode("div", {
            ref_key: "wrapRef",
            ref: wrapRef,
            class: vue.normalizeClass(vue.unref(wrapKls)),
            style: vue.normalizeStyle(vue.unref(wrapStyle)),
            onScroll: handleScroll
          }, [
            (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), {
              id: _ctx.id,
              ref_key: "resizeRef",
              ref: resizeRef,
              class: vue.normalizeClass(vue.unref(resizeKls)),
              style: vue.normalizeStyle(_ctx.viewStyle),
              role: _ctx.role,
              "aria-label": _ctx.ariaLabel,
              "aria-orientation": _ctx.ariaOrientation
            }, {
              default: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
          ], 38),
          !_ctx.native ? (vue.openBlock(), vue.createBlock(Bar, {
            key: 0,
            ref_key: "barRef",
            ref: barRef,
            always: _ctx.always,
            "min-size": _ctx.minSize
          }, null, 8, ["always", "min-size"])) : vue.createCommentVNode("v-if", true)
        ], 2);
      };
    }
  });
  var Scrollbar = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__file", "scrollbar.vue"]]);
  const ElScrollbar = withInstall(Scrollbar);
  const avatarProps = buildProps({
    size: {
      type: [Number, String],
      values: componentSizes,
      default: "",
      validator: (val) => isNumber(val)
    },
    shape: {
      type: String,
      values: ["circle", "square"],
      default: "circle"
    },
    icon: {
      type: iconPropType
    },
    src: {
      type: String,
      default: ""
    },
    alt: String,
    srcSet: String,
    fit: {
      type: definePropType(String),
      default: "cover"
    }
  });
  const avatarEmits = {
    error: (evt) => evt instanceof Event
  };
  const _hoisted_1$h = ["src", "alt", "srcset"];
  const __default__$l = vue.defineComponent({
    name: "ElAvatar"
  });
  const _sfc_main$y = /* @__PURE__ */ vue.defineComponent({
    ...__default__$l,
    props: avatarProps,
    emits: avatarEmits,
    setup(__props, { emit }) {
      const props = __props;
      const ns = useNamespace("avatar");
      const hasLoadError = vue.ref(false);
      const avatarClass = vue.computed(() => {
        const { size, icon, shape } = props;
        const classList = [ns.b()];
        if (isString(size))
          classList.push(ns.m(size));
        if (icon)
          classList.push(ns.m("icon"));
        if (shape)
          classList.push(ns.m(shape));
        return classList;
      });
      const sizeStyle = vue.computed(() => {
        const { size } = props;
        return isNumber(size) ? ns.cssVarBlock({
          size: addUnit(size) || ""
        }) : void 0;
      });
      const fitStyle = vue.computed(() => ({
        objectFit: props.fit
      }));
      vue.watch(() => props.src, () => hasLoadError.value = false);
      function handleError(e) {
        hasLoadError.value = true;
        emit("error", e);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("span", {
          class: vue.normalizeClass(vue.unref(avatarClass)),
          style: vue.normalizeStyle(vue.unref(sizeStyle))
        }, [
          (_ctx.src || _ctx.srcSet) && !hasLoadError.value ? (vue.openBlock(), vue.createElementBlock("img", {
            key: 0,
            src: _ctx.src,
            alt: _ctx.alt,
            srcset: _ctx.srcSet,
            style: vue.normalizeStyle(vue.unref(fitStyle)),
            onError: handleError
          }, null, 44, _hoisted_1$h)) : _ctx.icon ? (vue.openBlock(), vue.createBlock(vue.unref(ElIcon), { key: 1 }, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.icon)))
            ]),
            _: 1
          })) : vue.renderSlot(_ctx.$slots, "default", { key: 2 })
        ], 6);
      };
    }
  });
  var Avatar = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__file", "avatar.vue"]]);
  const ElAvatar = withInstall(Avatar);
  const backtopProps = {
    visibilityHeight: {
      type: Number,
      default: 200
    },
    target: {
      type: String,
      default: ""
    },
    right: {
      type: Number,
      default: 40
    },
    bottom: {
      type: Number,
      default: 40
    }
  };
  const backtopEmits = {
    click: (evt) => evt instanceof MouseEvent
  };
  const useBackTop = (props, emit, componentName) => {
    const el = vue.shallowRef();
    const container = vue.shallowRef();
    const visible = vue.ref(false);
    const handleScroll = () => {
      if (el.value)
        visible.value = el.value.scrollTop >= props.visibilityHeight;
    };
    const handleClick = (event) => {
      var _a3;
      (_a3 = el.value) == null ? void 0 : _a3.scrollTo({ top: 0, behavior: "smooth" });
      emit("click", event);
    };
    const handleScrollThrottled = useThrottleFn(handleScroll, 300, true);
    useEventListener(container, "scroll", handleScrollThrottled);
    vue.onMounted(() => {
      var _a3;
      container.value = document;
      el.value = document.documentElement;
      if (props.target) {
        el.value = (_a3 = document.querySelector(props.target)) != null ? _a3 : void 0;
        if (!el.value) {
          throwError(componentName, `target does not exist: ${props.target}`);
        }
        container.value = el.value;
      }
      handleScroll();
    });
    return {
      visible,
      handleClick
    };
  };
  const COMPONENT_NAME$3 = "ElBacktop";
  const __default__$k = vue.defineComponent({
    name: COMPONENT_NAME$3
  });
  const _sfc_main$x = /* @__PURE__ */ vue.defineComponent({
    ...__default__$k,
    props: backtopProps,
    emits: backtopEmits,
    setup(__props, { emit }) {
      const props = __props;
      const ns = useNamespace("backtop");
      const { handleClick, visible } = useBackTop(props, emit, COMPONENT_NAME$3);
      const backTopStyle = vue.computed(() => ({
        right: `${props.right}px`,
        bottom: `${props.bottom}px`
      }));
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.Transition, {
          name: `${vue.unref(ns).namespace.value}-fade-in`
        }, {
          default: vue.withCtx(() => [
            vue.unref(visible) ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              style: vue.normalizeStyle(vue.unref(backTopStyle)),
              class: vue.normalizeClass(vue.unref(ns).b()),
              onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => vue.unref(handleClick) && vue.unref(handleClick)(...args), ["stop"]))
            }, [
              vue.renderSlot(_ctx.$slots, "default", {}, () => [
                vue.createVNode(vue.unref(ElIcon), {
                  class: vue.normalizeClass(vue.unref(ns).e("icon"))
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(vue.unref(iconsVue.CaretTop))
                  ]),
                  _: 1
                }, 8, ["class"])
              ])
            ], 6)) : vue.createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["name"]);
      };
    }
  });
  var Backtop = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__file", "backtop.vue"]]);
  const ElBacktop = withInstall(Backtop);
  const buttonGroupContextKey = Symbol("buttonGroupContextKey");
  const useButton = (props, emit) => {
    useDeprecated({
      from: "type.text",
      replacement: "link",
      version: "3.0.0",
      scope: "props",
      ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
    }, vue.computed(() => props.type === "text"));
    const buttonGroupContext = vue.inject(buttonGroupContextKey, void 0);
    const globalConfig2 = useGlobalConfig("button");
    const { form } = useFormItem();
    const _size = useFormSize(vue.computed(() => buttonGroupContext == null ? void 0 : buttonGroupContext.size));
    const _disabled = useFormDisabled();
    const _ref = vue.ref();
    const slots = vue.useSlots();
    const _type = vue.computed(() => props.type || (buttonGroupContext == null ? void 0 : buttonGroupContext.type) || "");
    const autoInsertSpace = vue.computed(() => {
      var _a3, _b, _c;
      return (_c = (_b = props.autoInsertSpace) != null ? _b : (_a3 = globalConfig2.value) == null ? void 0 : _a3.autoInsertSpace) != null ? _c : false;
    });
    const _props = vue.computed(() => {
      if (props.tag === "button") {
        return {
          ariaDisabled: _disabled.value || props.loading,
          disabled: _disabled.value || props.loading,
          autofocus: props.autofocus,
          type: props.nativeType
        };
      }
      return {};
    });
    const shouldAddSpace = vue.computed(() => {
      var _a3;
      const defaultSlot = (_a3 = slots.default) == null ? void 0 : _a3.call(slots);
      if (autoInsertSpace.value && (defaultSlot == null ? void 0 : defaultSlot.length) === 1) {
        const slot = defaultSlot[0];
        if ((slot == null ? void 0 : slot.type) === vue.Text) {
          const text = slot.children;
          return new RegExp("^\\p{Unified_Ideograph}{2}$", "u").test(text.trim());
        }
      }
      return false;
    });
    const handleClick = (evt) => {
      if (props.nativeType === "reset") {
        form == null ? void 0 : form.resetFields();
      }
      emit("click", evt);
    };
    return {
      _disabled,
      _size,
      _type,
      _ref,
      _props,
      shouldAddSpace,
      handleClick
    };
  };
  const buttonTypes = [
    "default",
    "primary",
    "success",
    "warning",
    "info",
    "danger",
    "text",
    ""
  ];
  const buttonNativeTypes = ["button", "submit", "reset"];
  const buttonProps = buildProps({
    size: useSizeProp,
    disabled: Boolean,
    type: {
      type: String,
      values: buttonTypes,
      default: ""
    },
    icon: {
      type: iconPropType
    },
    nativeType: {
      type: String,
      values: buttonNativeTypes,
      default: "button"
    },
    loading: Boolean,
    loadingIcon: {
      type: iconPropType,
      default: () => iconsVue.Loading
    },
    plain: Boolean,
    text: Boolean,
    link: Boolean,
    bg: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
    color: String,
    dark: Boolean,
    autoInsertSpace: {
      type: Boolean,
      default: void 0
    },
    tag: {
      type: definePropType([String, Object]),
      default: "button"
    }
  });
  const buttonEmits = {
    click: (evt) => evt instanceof MouseEvent
  };
  function bound01(n, max) {
    if (isOnePointZero(n)) {
      n = "100%";
    }
    var isPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    if (isPercent) {
      n = parseInt(String(n * max), 10) / 100;
    }
    if (Math.abs(n - max) < 1e-6) {
      return 1;
    }
    if (max === 360) {
      n = (n < 0 ? n % max + max : n % max) / parseFloat(String(max));
    } else {
      n = n % max / parseFloat(String(max));
    }
    return n;
  }
  function clamp01(val) {
    return Math.min(1, Math.max(0, val));
  }
  function isOnePointZero(n) {
    return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
  }
  function isPercentage(n) {
    return typeof n === "string" && n.indexOf("%") !== -1;
  }
  function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
      a = 1;
    }
    return a;
  }
  function convertToPercentage(n) {
    if (n <= 1) {
      return "".concat(Number(n) * 100, "%");
    }
    return n;
  }
  function pad2(c) {
    return c.length === 1 ? "0" + c : String(c);
  }
  function rgbToRgb(r, g, b) {
    return {
      r: bound01(r, 255) * 255,
      g: bound01(g, 255) * 255,
      b: bound01(b, 255) * 255
    };
  }
  function rgbToHsl(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h2 = 0;
    var s = 0;
    var l = (max + min) / 2;
    if (max === min) {
      s = 0;
      h2 = 0;
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h2 = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h2 = (b - r) / d + 2;
          break;
        case b:
          h2 = (r - g) / d + 4;
          break;
      }
      h2 /= 6;
    }
    return { h: h2, s, l };
  }
  function hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }
    if (t > 1) {
      t -= 1;
    }
    if (t < 1 / 6) {
      return p + (q - p) * (6 * t);
    }
    if (t < 1 / 2) {
      return q;
    }
    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
  }
  function hslToRgb(h2, s, l) {
    var r;
    var g;
    var b;
    h2 = bound01(h2, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);
    if (s === 0) {
      g = l;
      b = l;
      r = l;
    } else {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h2 + 1 / 3);
      g = hue2rgb(p, q, h2);
      b = hue2rgb(p, q, h2 - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
  }
  function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h2 = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
      h2 = 0;
    } else {
      switch (max) {
        case r:
          h2 = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h2 = (b - r) / d + 2;
          break;
        case b:
          h2 = (r - g) / d + 4;
          break;
      }
      h2 /= 6;
    }
    return { h: h2, s, v };
  }
  function hsvToRgb(h2, s, v) {
    h2 = bound01(h2, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    var i = Math.floor(h2);
    var f = h2 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
  }
  function rgbToHex(r, g, b, allow3Char) {
    var hex = [
      pad2(Math.round(r).toString(16)),
      pad2(Math.round(g).toString(16)),
      pad2(Math.round(b).toString(16))
    ];
    if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join("");
  }
  function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [
      pad2(Math.round(r).toString(16)),
      pad2(Math.round(g).toString(16)),
      pad2(Math.round(b).toString(16)),
      pad2(convertDecimalToHex(a))
    ];
    if (allow4Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1)) && hex[3].startsWith(hex[3].charAt(1))) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join("");
  }
  function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
  }
  function convertHexToDecimal(h2) {
    return parseIntFromHex(h2) / 255;
  }
  function parseIntFromHex(val) {
    return parseInt(val, 16);
  }
  function numberInputToObject(color) {
    return {
      r: color >> 16,
      g: (color & 65280) >> 8,
      b: color & 255
    };
  }
  var names = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    gold: "#ffd700",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavenderblush: "#fff0f5",
    lavender: "#e6e6fa",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  };
  function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === "string") {
      color = stringInputToObject(color);
    }
    if (typeof color === "object") {
      if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
        rgb = rgbToRgb(color.r, color.g, color.b);
        ok = true;
        format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
        s = convertToPercentage(color.s);
        v = convertToPercentage(color.v);
        rgb = hsvToRgb(color.h, s, v);
        ok = true;
        format = "hsv";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
        s = convertToPercentage(color.s);
        l = convertToPercentage(color.l);
        rgb = hslToRgb(color.h, s, l);
        ok = true;
        format = "hsl";
      }
      if (Object.prototype.hasOwnProperty.call(color, "a")) {
        a = color.a;
      }
    }
    a = boundAlpha(a);
    return {
      ok,
      format: color.format || format,
      r: Math.min(255, Math.max(rgb.r, 0)),
      g: Math.min(255, Math.max(rgb.g, 0)),
      b: Math.min(255, Math.max(rgb.b, 0)),
      a
    };
  }
  var CSS_INTEGER = "[-\\+]?\\d+%?";
  var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
  var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
  var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
  var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
  var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
    rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
    hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
    hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
    hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
    hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
  function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
      return false;
    }
    var named = false;
    if (names[color]) {
      color = names[color];
      named = true;
    } else if (color === "transparent") {
      return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }
    var match = matchers.rgb.exec(color);
    if (match) {
      return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
      return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
      return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
      return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
      return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
      return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        a: convertHexToDecimal(match[4]),
        format: named ? "name" : "hex8"
      };
    }
    match = matchers.hex6.exec(color);
    if (match) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        format: named ? "name" : "hex"
      };
    }
    match = matchers.hex4.exec(color);
    if (match) {
      return {
        r: parseIntFromHex(match[1] + match[1]),
        g: parseIntFromHex(match[2] + match[2]),
        b: parseIntFromHex(match[3] + match[3]),
        a: convertHexToDecimal(match[4] + match[4]),
        format: named ? "name" : "hex8"
      };
    }
    match = matchers.hex3.exec(color);
    if (match) {
      return {
        r: parseIntFromHex(match[1] + match[1]),
        g: parseIntFromHex(match[2] + match[2]),
        b: parseIntFromHex(match[3] + match[3]),
        format: named ? "name" : "hex"
      };
    }
    return false;
  }
  function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
  }
  var TinyColor = (
    /** @class */
    function() {
      function TinyColor2(color, opts) {
        if (color === void 0) {
          color = "";
        }
        if (opts === void 0) {
          opts = {};
        }
        var _a3;
        if (color instanceof TinyColor2) {
          return color;
        }
        if (typeof color === "number") {
          color = numberInputToObject(color);
        }
        this.originalInput = color;
        var rgb = inputToRGB(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = (_a3 = opts.format) !== null && _a3 !== void 0 ? _a3 : rgb.format;
        this.gradientType = opts.gradientType;
        if (this.r < 1) {
          this.r = Math.round(this.r);
        }
        if (this.g < 1) {
          this.g = Math.round(this.g);
        }
        if (this.b < 1) {
          this.b = Math.round(this.b);
        }
        this.isValid = rgb.ok;
      }
      TinyColor2.prototype.isDark = function() {
        return this.getBrightness() < 128;
      };
      TinyColor2.prototype.isLight = function() {
        return !this.isDark();
      };
      TinyColor2.prototype.getBrightness = function() {
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
      };
      TinyColor2.prototype.getLuminance = function() {
        var rgb = this.toRgb();
        var R;
        var G;
        var B;
        var RsRGB = rgb.r / 255;
        var GsRGB = rgb.g / 255;
        var BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
          R = RsRGB / 12.92;
        } else {
          R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        }
        if (GsRGB <= 0.03928) {
          G = GsRGB / 12.92;
        } else {
          G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        }
        if (BsRGB <= 0.03928) {
          B = BsRGB / 12.92;
        } else {
          B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
      };
      TinyColor2.prototype.getAlpha = function() {
        return this.a;
      };
      TinyColor2.prototype.setAlpha = function(alpha) {
        this.a = boundAlpha(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
      };
      TinyColor2.prototype.isMonochrome = function() {
        var s = this.toHsl().s;
        return s === 0;
      };
      TinyColor2.prototype.toHsv = function() {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
      };
      TinyColor2.prototype.toHsvString = function() {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        var h2 = Math.round(hsv.h * 360);
        var s = Math.round(hsv.s * 100);
        var v = Math.round(hsv.v * 100);
        return this.a === 1 ? "hsv(".concat(h2, ", ").concat(s, "%, ").concat(v, "%)") : "hsva(".concat(h2, ", ").concat(s, "%, ").concat(v, "%, ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toHsl = function() {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
      };
      TinyColor2.prototype.toHslString = function() {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        var h2 = Math.round(hsl.h * 360);
        var s = Math.round(hsl.s * 100);
        var l = Math.round(hsl.l * 100);
        return this.a === 1 ? "hsl(".concat(h2, ", ").concat(s, "%, ").concat(l, "%)") : "hsla(".concat(h2, ", ").concat(s, "%, ").concat(l, "%, ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toHex = function(allow3Char) {
        if (allow3Char === void 0) {
          allow3Char = false;
        }
        return rgbToHex(this.r, this.g, this.b, allow3Char);
      };
      TinyColor2.prototype.toHexString = function(allow3Char) {
        if (allow3Char === void 0) {
          allow3Char = false;
        }
        return "#" + this.toHex(allow3Char);
      };
      TinyColor2.prototype.toHex8 = function(allow4Char) {
        if (allow4Char === void 0) {
          allow4Char = false;
        }
        return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
      };
      TinyColor2.prototype.toHex8String = function(allow4Char) {
        if (allow4Char === void 0) {
          allow4Char = false;
        }
        return "#" + this.toHex8(allow4Char);
      };
      TinyColor2.prototype.toHexShortString = function(allowShortChar) {
        if (allowShortChar === void 0) {
          allowShortChar = false;
        }
        return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
      };
      TinyColor2.prototype.toRgb = function() {
        return {
          r: Math.round(this.r),
          g: Math.round(this.g),
          b: Math.round(this.b),
          a: this.a
        };
      };
      TinyColor2.prototype.toRgbString = function() {
        var r = Math.round(this.r);
        var g = Math.round(this.g);
        var b = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toPercentageRgb = function() {
        var fmt = function(x) {
          return "".concat(Math.round(bound01(x, 255) * 100), "%");
        };
        return {
          r: fmt(this.r),
          g: fmt(this.g),
          b: fmt(this.b),
          a: this.a
        };
      };
      TinyColor2.prototype.toPercentageRgbString = function() {
        var rnd = function(x) {
          return Math.round(bound01(x, 255) * 100);
        };
        return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toName = function() {
        if (this.a === 0) {
          return "transparent";
        }
        if (this.a < 1) {
          return false;
        }
        var hex = "#" + rgbToHex(this.r, this.g, this.b, false);
        for (var _i = 0, _a3 = Object.entries(names); _i < _a3.length; _i++) {
          var _b = _a3[_i], key = _b[0], value = _b[1];
          if (hex === value) {
            return key;
          }
        }
        return false;
      };
      TinyColor2.prototype.toString = function(format) {
        var formatSet = Boolean(format);
        format = format !== null && format !== void 0 ? format : this.format;
        var formattedString = false;
        var hasAlpha = this.a < 1 && this.a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith("hex") || format === "name");
        if (needsAlphaFormat) {
          if (format === "name" && this.a === 0) {
            return this.toName();
          }
          return this.toRgbString();
        }
        if (format === "rgb") {
          formattedString = this.toRgbString();
        }
        if (format === "prgb") {
          formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
          formattedString = this.toHexString();
        }
        if (format === "hex3") {
          formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
          formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
          formattedString = this.toHex8String();
        }
        if (format === "name") {
          formattedString = this.toName();
        }
        if (format === "hsl") {
          formattedString = this.toHslString();
        }
        if (format === "hsv") {
          formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
      };
      TinyColor2.prototype.toNumber = function() {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
      };
      TinyColor2.prototype.clone = function() {
        return new TinyColor2(this.toString());
      };
      TinyColor2.prototype.lighten = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.l += amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.brighten = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var rgb = this.toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return new TinyColor2(rgb);
      };
      TinyColor2.prototype.darken = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.l -= amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.tint = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        return this.mix("white", amount);
      };
      TinyColor2.prototype.shade = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        return this.mix("black", amount);
      };
      TinyColor2.prototype.desaturate = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.s -= amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.saturate = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.s += amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.greyscale = function() {
        return this.desaturate(100);
      };
      TinyColor2.prototype.spin = function(amount) {
        var hsl = this.toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.mix = function(color, amount) {
        if (amount === void 0) {
          amount = 50;
        }
        var rgb1 = this.toRgb();
        var rgb2 = new TinyColor2(color).toRgb();
        var p = amount / 100;
        var rgba = {
          r: (rgb2.r - rgb1.r) * p + rgb1.r,
          g: (rgb2.g - rgb1.g) * p + rgb1.g,
          b: (rgb2.b - rgb1.b) * p + rgb1.b,
          a: (rgb2.a - rgb1.a) * p + rgb1.a
        };
        return new TinyColor2(rgba);
      };
      TinyColor2.prototype.analogous = function(results, slices) {
        if (results === void 0) {
          results = 6;
        }
        if (slices === void 0) {
          slices = 30;
        }
        var hsl = this.toHsl();
        var part = 360 / slices;
        var ret = [this];
        for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
          hsl.h = (hsl.h + part) % 360;
          ret.push(new TinyColor2(hsl));
        }
        return ret;
      };
      TinyColor2.prototype.complement = function() {
        var hsl = this.toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.monochromatic = function(results) {
        if (results === void 0) {
          results = 6;
        }
        var hsv = this.toHsv();
        var h2 = hsv.h;
        var s = hsv.s;
        var v = hsv.v;
        var res = [];
        var modification = 1 / results;
        while (results--) {
          res.push(new TinyColor2({ h: h2, s, v }));
          v = (v + modification) % 1;
        }
        return res;
      };
      TinyColor2.prototype.splitcomplement = function() {
        var hsl = this.toHsl();
        var h2 = hsl.h;
        return [
          this,
          new TinyColor2({ h: (h2 + 72) % 360, s: hsl.s, l: hsl.l }),
          new TinyColor2({ h: (h2 + 216) % 360, s: hsl.s, l: hsl.l })
        ];
      };
      TinyColor2.prototype.onBackground = function(background) {
        var fg = this.toRgb();
        var bg = new TinyColor2(background).toRgb();
        var alpha = fg.a + bg.a * (1 - fg.a);
        return new TinyColor2({
          r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
          g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
          b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
          a: alpha
        });
      };
      TinyColor2.prototype.triad = function() {
        return this.polyad(3);
      };
      TinyColor2.prototype.tetrad = function() {
        return this.polyad(4);
      };
      TinyColor2.prototype.polyad = function(n) {
        var hsl = this.toHsl();
        var h2 = hsl.h;
        var result = [this];
        var increment = 360 / n;
        for (var i = 1; i < n; i++) {
          result.push(new TinyColor2({ h: (h2 + i * increment) % 360, s: hsl.s, l: hsl.l }));
        }
        return result;
      };
      TinyColor2.prototype.equals = function(color) {
        return this.toRgbString() === new TinyColor2(color).toRgbString();
      };
      return TinyColor2;
    }()
  );
  function darken(color, amount = 20) {
    return color.mix("#141414", amount).toString();
  }
  function useButtonCustomStyle(props) {
    const _disabled = useFormDisabled();
    const ns = useNamespace("button");
    return vue.computed(() => {
      let styles = {};
      const buttonColor = props.color;
      if (buttonColor) {
        const color = new TinyColor(buttonColor);
        const activeBgColor = props.dark ? color.tint(20).toString() : darken(color, 20);
        if (props.plain) {
          styles = ns.cssVarBlock({
            "bg-color": props.dark ? darken(color, 90) : color.tint(90).toString(),
            "text-color": buttonColor,
            "border-color": props.dark ? darken(color, 50) : color.tint(50).toString(),
            "hover-text-color": `var(${ns.cssVarName("color-white")})`,
            "hover-bg-color": buttonColor,
            "hover-border-color": buttonColor,
            "active-bg-color": activeBgColor,
            "active-text-color": `var(${ns.cssVarName("color-white")})`,
            "active-border-color": activeBgColor
          });
          if (_disabled.value) {
            styles[ns.cssVarBlockName("disabled-bg-color")] = props.dark ? darken(color, 90) : color.tint(90).toString();
            styles[ns.cssVarBlockName("disabled-text-color")] = props.dark ? darken(color, 50) : color.tint(50).toString();
            styles[ns.cssVarBlockName("disabled-border-color")] = props.dark ? darken(color, 80) : color.tint(80).toString();
          }
        } else {
          const hoverBgColor = props.dark ? darken(color, 30) : color.tint(30).toString();
          const textColor = color.isDark() ? `var(${ns.cssVarName("color-white")})` : `var(${ns.cssVarName("color-black")})`;
          styles = ns.cssVarBlock({
            "bg-color": buttonColor,
            "text-color": textColor,
            "border-color": buttonColor,
            "hover-bg-color": hoverBgColor,
            "hover-text-color": textColor,
            "hover-border-color": hoverBgColor,
            "active-bg-color": activeBgColor,
            "active-border-color": activeBgColor
          });
          if (_disabled.value) {
            const disabledButtonColor = props.dark ? darken(color, 50) : color.tint(50).toString();
            styles[ns.cssVarBlockName("disabled-bg-color")] = disabledButtonColor;
            styles[ns.cssVarBlockName("disabled-text-color")] = props.dark ? "rgba(255, 255, 255, 0.5)" : `var(${ns.cssVarName("color-white")})`;
            styles[ns.cssVarBlockName("disabled-border-color")] = disabledButtonColor;
          }
        }
      }
      return styles;
    });
  }
  const __default__$j = vue.defineComponent({
    name: "ElButton"
  });
  const _sfc_main$w = /* @__PURE__ */ vue.defineComponent({
    ...__default__$j,
    props: buttonProps,
    emits: buttonEmits,
    setup(__props, { expose, emit }) {
      const props = __props;
      const buttonStyle = useButtonCustomStyle(props);
      const ns = useNamespace("button");
      const { _ref, _size, _type, _disabled, _props, shouldAddSpace, handleClick } = useButton(props, emit);
      const buttonKls = vue.computed(() => [
        ns.b(),
        ns.m(_type.value),
        ns.m(_size.value),
        ns.is("disabled", _disabled.value),
        ns.is("loading", props.loading),
        ns.is("plain", props.plain),
        ns.is("round", props.round),
        ns.is("circle", props.circle),
        ns.is("text", props.text),
        ns.is("link", props.link),
        ns.is("has-bg", props.bg)
      ]);
      expose({
        ref: _ref,
        size: _size,
        type: _type,
        disabled: _disabled,
        shouldAddSpace
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), vue.mergeProps({
          ref_key: "_ref",
          ref: _ref
        }, vue.unref(_props), {
          class: vue.unref(buttonKls),
          style: vue.unref(buttonStyle),
          onClick: vue.unref(handleClick)
        }), {
          default: vue.withCtx(() => [
            _ctx.loading ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
              _ctx.$slots.loading ? vue.renderSlot(_ctx.$slots, "loading", { key: 0 }) : (vue.openBlock(), vue.createBlock(vue.unref(ElIcon), {
                key: 1,
                class: vue.normalizeClass(vue.unref(ns).is("loading"))
              }, {
                default: vue.withCtx(() => [
                  (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.loadingIcon)))
                ]),
                _: 1
              }, 8, ["class"]))
            ], 64)) : _ctx.icon || _ctx.$slots.icon ? (vue.openBlock(), vue.createBlock(vue.unref(ElIcon), { key: 1 }, {
              default: vue.withCtx(() => [
                _ctx.icon ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.icon), { key: 0 })) : vue.renderSlot(_ctx.$slots, "icon", { key: 1 })
              ]),
              _: 3
            })) : vue.createCommentVNode("v-if", true),
            _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", {
              key: 2,
              class: vue.normalizeClass({ [vue.unref(ns).em("text", "expand")]: vue.unref(shouldAddSpace) })
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 2)) : vue.createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 16, ["class", "style", "onClick"]);
      };
    }
  });
  var Button = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__file", "button.vue"]]);
  const buttonGroupProps = {
    size: buttonProps.size,
    type: buttonProps.type
  };
  const __default__$i = vue.defineComponent({
    name: "ElButtonGroup"
  });
  const _sfc_main$v = /* @__PURE__ */ vue.defineComponent({
    ...__default__$i,
    props: buttonGroupProps,
    setup(__props) {
      const props = __props;
      vue.provide(buttonGroupContextKey, vue.reactive({
        size: vue.toRef(props, "size"),
        type: vue.toRef(props, "type")
      }));
      const ns = useNamespace("button");
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(`${vue.unref(ns).b("group")}`)
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2);
      };
    }
  });
  var ButtonGroup = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__file", "button-group.vue"]]);
  const ElButton = withInstall(Button, {
    ButtonGroup
  });
  withNoopInstall(ButtonGroup);
  const rowContextKey = Symbol("rowContextKey");
  const RowJustify = [
    "start",
    "center",
    "end",
    "space-around",
    "space-between",
    "space-evenly"
  ];
  const RowAlign = ["top", "middle", "bottom"];
  const rowProps = buildProps({
    tag: {
      type: String,
      default: "div"
    },
    gutter: {
      type: Number,
      default: 0
    },
    justify: {
      type: String,
      values: RowJustify,
      default: "start"
    },
    align: {
      type: String,
      values: RowAlign
    }
  });
  const __default__$h = vue.defineComponent({
    name: "ElRow"
  });
  const _sfc_main$u = /* @__PURE__ */ vue.defineComponent({
    ...__default__$h,
    props: rowProps,
    setup(__props) {
      const props = __props;
      const ns = useNamespace("row");
      const gutter = vue.computed(() => props.gutter);
      vue.provide(rowContextKey, {
        gutter
      });
      const style = vue.computed(() => {
        const styles = {};
        if (!props.gutter) {
          return styles;
        }
        styles.marginRight = styles.marginLeft = `-${props.gutter / 2}px`;
        return styles;
      });
      const rowKls = vue.computed(() => [
        ns.b(),
        ns.is(`justify-${props.justify}`, props.justify !== "start"),
        ns.is(`align-${props.align}`, !!props.align)
      ]);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), {
          class: vue.normalizeClass(vue.unref(rowKls)),
          style: vue.normalizeStyle(vue.unref(style))
        }, {
          default: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]);
      };
    }
  });
  var Row = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__file", "row.vue"]]);
  const ElRow = withInstall(Row);
  const colProps = buildProps({
    tag: {
      type: String,
      default: "div"
    },
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    pull: {
      type: Number,
      default: 0
    },
    push: {
      type: Number,
      default: 0
    },
    xs: {
      type: definePropType([Number, Object]),
      default: () => mutable({})
    },
    sm: {
      type: definePropType([Number, Object]),
      default: () => mutable({})
    },
    md: {
      type: definePropType([Number, Object]),
      default: () => mutable({})
    },
    lg: {
      type: definePropType([Number, Object]),
      default: () => mutable({})
    },
    xl: {
      type: definePropType([Number, Object]),
      default: () => mutable({})
    }
  });
  const __default__$g = vue.defineComponent({
    name: "ElCol"
  });
  const _sfc_main$t = /* @__PURE__ */ vue.defineComponent({
    ...__default__$g,
    props: colProps,
    setup(__props) {
      const props = __props;
      const { gutter } = vue.inject(rowContextKey, { gutter: vue.computed(() => 0) });
      const ns = useNamespace("col");
      const style = vue.computed(() => {
        const styles = {};
        if (gutter.value) {
          styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`;
        }
        return styles;
      });
      const colKls = vue.computed(() => {
        const classes = [];
        const pos = ["span", "offset", "pull", "push"];
        pos.forEach((prop) => {
          const size = props[prop];
          if (isNumber(size)) {
            if (prop === "span")
              classes.push(ns.b(`${props[prop]}`));
            else if (size > 0)
              classes.push(ns.b(`${prop}-${props[prop]}`));
          }
        });
        const sizes = ["xs", "sm", "md", "lg", "xl"];
        sizes.forEach((size) => {
          if (isNumber(props[size])) {
            classes.push(ns.b(`${size}-${props[size]}`));
          } else if (isObject$1(props[size])) {
            Object.entries(props[size]).forEach(([prop, sizeProp]) => {
              classes.push(prop !== "span" ? ns.b(`${size}-${prop}-${sizeProp}`) : ns.b(`${size}-${sizeProp}`));
            });
          }
        });
        if (gutter.value) {
          classes.push(ns.is("guttered"));
        }
        return [ns.b(), classes];
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), {
          class: vue.normalizeClass(vue.unref(colKls)),
          style: vue.normalizeStyle(vue.unref(style))
        }, {
          default: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]);
      };
    }
  });
  var Col = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__file", "col.vue"]]);
  const ElCol = withInstall(Col);
  const __default__$f = vue.defineComponent({
    name: "ElContainer"
  });
  const _sfc_main$s = /* @__PURE__ */ vue.defineComponent({
    ...__default__$f,
    props: {
      direction: {
        type: String
      }
    },
    setup(__props) {
      const props = __props;
      const slots = vue.useSlots();
      const ns = useNamespace("container");
      const isVertical = vue.computed(() => {
        if (props.direction === "vertical") {
          return true;
        } else if (props.direction === "horizontal") {
          return false;
        }
        if (slots && slots.default) {
          const vNodes = slots.default();
          return vNodes.some((vNode) => {
            const tag = vNode.type.name;
            return tag === "ElHeader" || tag === "ElFooter";
          });
        } else {
          return false;
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("section", {
          class: vue.normalizeClass([vue.unref(ns).b(), vue.unref(ns).is("vertical", vue.unref(isVertical))])
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2);
      };
    }
  });
  var Container = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__file", "container.vue"]]);
  const __default__$e = vue.defineComponent({
    name: "ElAside"
  });
  const _sfc_main$r = /* @__PURE__ */ vue.defineComponent({
    ...__default__$e,
    props: {
      width: {
        type: String,
        default: null
      }
    },
    setup(__props) {
      const props = __props;
      const ns = useNamespace("aside");
      const style = vue.computed(() => props.width ? ns.cssVarBlock({ width: props.width }) : {});
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("aside", {
          class: vue.normalizeClass(vue.unref(ns).b()),
          style: vue.normalizeStyle(vue.unref(style))
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 6);
      };
    }
  });
  var Aside = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__file", "aside.vue"]]);
  const __default__$d = vue.defineComponent({
    name: "ElFooter"
  });
  const _sfc_main$q = /* @__PURE__ */ vue.defineComponent({
    ...__default__$d,
    props: {
      height: {
        type: String,
        default: null
      }
    },
    setup(__props) {
      const props = __props;
      const ns = useNamespace("footer");
      const style = vue.computed(() => props.height ? ns.cssVarBlock({ height: props.height }) : {});
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("footer", {
          class: vue.normalizeClass(vue.unref(ns).b()),
          style: vue.normalizeStyle(vue.unref(style))
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 6);
      };
    }
  });
  var Footer = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__file", "footer.vue"]]);
  const __default__$c = vue.defineComponent({
    name: "ElHeader"
  });
  const _sfc_main$p = /* @__PURE__ */ vue.defineComponent({
    ...__default__$c,
    props: {
      height: {
        type: String,
        default: null
      }
    },
    setup(__props) {
      const props = __props;
      const ns = useNamespace("header");
      const style = vue.computed(() => {
        return props.height ? ns.cssVarBlock({
          height: props.height
        }) : {};
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("header", {
          class: vue.normalizeClass(vue.unref(ns).b()),
          style: vue.normalizeStyle(vue.unref(style))
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 6);
      };
    }
  });
  var Header = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__file", "header.vue"]]);
  const __default__$b = vue.defineComponent({
    name: "ElMain"
  });
  const _sfc_main$o = /* @__PURE__ */ vue.defineComponent({
    ...__default__$b,
    setup(__props) {
      const ns = useNamespace("main");
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("main", {
          class: vue.normalizeClass(vue.unref(ns).b())
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2);
      };
    }
  });
  var Main = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__file", "main.vue"]]);
  const ElContainer = withInstall(Container, {
    Aside,
    Footer,
    Header,
    Main
  });
  withNoopInstall(Aside);
  withNoopInstall(Footer);
  const ElHeader = withNoopInstall(Header);
  const ElMain = withNoopInstall(Main);
  const dividerProps = buildProps({
    direction: {
      type: String,
      values: ["horizontal", "vertical"],
      default: "horizontal"
    },
    contentPosition: {
      type: String,
      values: ["left", "center", "right"],
      default: "center"
    },
    borderStyle: {
      type: definePropType(String),
      default: "solid"
    }
  });
  const __default__$a = vue.defineComponent({
    name: "ElDivider"
  });
  const _sfc_main$n = /* @__PURE__ */ vue.defineComponent({
    ...__default__$a,
    props: dividerProps,
    setup(__props) {
      const props = __props;
      const ns = useNamespace("divider");
      const dividerStyle = vue.computed(() => {
        return ns.cssVar({
          "border-style": props.borderStyle
        });
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass([vue.unref(ns).b(), vue.unref(ns).m(_ctx.direction)]),
          style: vue.normalizeStyle(vue.unref(dividerStyle)),
          role: "separator"
        }, [
          _ctx.$slots.default && _ctx.direction !== "vertical" ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: vue.normalizeClass([vue.unref(ns).e("text"), vue.unref(ns).is(_ctx.contentPosition)])
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 2)) : vue.createCommentVNode("v-if", true)
        ], 6);
      };
    }
  });
  var Divider = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__file", "divider.vue"]]);
  const ElDivider = withInstall(Divider);
  const _hoisted_1$g = {
    viewBox: "0 0 79 86",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  };
  const _hoisted_2$b = ["id"];
  const _hoisted_3$8 = ["stop-color"];
  const _hoisted_4$8 = ["stop-color"];
  const _hoisted_5$8 = ["id"];
  const _hoisted_6$7 = ["stop-color"];
  const _hoisted_7$5 = ["stop-color"];
  const _hoisted_8$5 = ["id"];
  const _hoisted_9$2 = {
    id: "Illustrations",
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd"
  };
  const _hoisted_10$1 = {
    id: "B-type",
    transform: "translate(-1268.000000, -535.000000)"
  };
  const _hoisted_11$1 = {
    id: "Group-2",
    transform: "translate(1268.000000, 535.000000)"
  };
  const _hoisted_12$1 = ["fill"];
  const _hoisted_13$1 = ["fill"];
  const _hoisted_14$1 = {
    id: "Group-Copy",
    transform: "translate(34.500000, 31.500000) scale(-1, 1) rotate(-25.000000) translate(-34.500000, -31.500000) translate(7.000000, 10.000000)"
  };
  const _hoisted_15$2 = ["fill"];
  const _hoisted_16$2 = ["fill"];
  const _hoisted_17$1 = ["fill"];
  const _hoisted_18 = ["fill"];
  const _hoisted_19 = ["fill"];
  const _hoisted_20 = {
    id: "Rectangle-Copy-17",
    transform: "translate(53.000000, 45.000000)"
  };
  const _hoisted_21 = ["fill", "xlink:href"];
  const _hoisted_22 = ["fill", "mask"];
  const _hoisted_23 = ["fill"];
  const __default__$9 = vue.defineComponent({
    name: "ImgEmpty"
  });
  const _sfc_main$m = /* @__PURE__ */ vue.defineComponent({
    ...__default__$9,
    setup(__props) {
      const ns = useNamespace("empty");
      const id = useId();
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$g, [
          vue.createElementVNode("defs", null, [
            vue.createElementVNode("linearGradient", {
              id: `linearGradient-1-${vue.unref(id)}`,
              x1: "38.8503086%",
              y1: "0%",
              x2: "61.1496914%",
              y2: "100%"
            }, [
              vue.createElementVNode("stop", {
                "stop-color": `var(${vue.unref(ns).cssVarBlockName("fill-color-1")})`,
                offset: "0%"
              }, null, 8, _hoisted_3$8),
              vue.createElementVNode("stop", {
                "stop-color": `var(${vue.unref(ns).cssVarBlockName("fill-color-4")})`,
                offset: "100%"
              }, null, 8, _hoisted_4$8)
            ], 8, _hoisted_2$b),
            vue.createElementVNode("linearGradient", {
              id: `linearGradient-2-${vue.unref(id)}`,
              x1: "0%",
              y1: "9.5%",
              x2: "100%",
              y2: "90.5%"
            }, [
              vue.createElementVNode("stop", {
                "stop-color": `var(${vue.unref(ns).cssVarBlockName("fill-color-1")})`,
                offset: "0%"
              }, null, 8, _hoisted_6$7),
              vue.createElementVNode("stop", {
                "stop-color": `var(${vue.unref(ns).cssVarBlockName("fill-color-6")})`,
                offset: "100%"
              }, null, 8, _hoisted_7$5)
            ], 8, _hoisted_5$8),
            vue.createElementVNode("rect", {
              id: `path-3-${vue.unref(id)}`,
              x: "0",
              y: "0",
              width: "17",
              height: "36"
            }, null, 8, _hoisted_8$5)
          ]),
          vue.createElementVNode("g", _hoisted_9$2, [
            vue.createElementVNode("g", _hoisted_10$1, [
              vue.createElementVNode("g", _hoisted_11$1, [
                vue.createElementVNode("path", {
                  id: "Oval-Copy-2",
                  d: "M39.5,86 C61.3152476,86 79,83.9106622 79,81.3333333 C79,78.7560045 57.3152476,78 35.5,78 C13.6847524,78 0,78.7560045 0,81.3333333 C0,83.9106622 17.6847524,86 39.5,86 Z",
                  fill: `var(${vue.unref(ns).cssVarBlockName("fill-color-3")})`
                }, null, 8, _hoisted_12$1),
                vue.createElementVNode("polygon", {
                  id: "Rectangle-Copy-14",
                  fill: `var(${vue.unref(ns).cssVarBlockName("fill-color-7")})`,
                  transform: "translate(27.500000, 51.500000) scale(1, -1) translate(-27.500000, -51.500000) ",
                  points: "13 58 53 58 42 45 2 45"
                }, null, 8, _hoisted_13$1),
                vue.createElementVNode("g", _hoisted_14$1, [
                  vue.createElementVNode("polygon", {
                    id: "Rectangle-Copy-10",
                    fill: `var(${vue.unref(ns).cssVarBlockName("fill-color-7")})`,
                    transform: "translate(11.500000, 5.000000) scale(1, -1) translate(-11.500000, -5.000000) ",
                    points: "2.84078316e-14 3 18 3 23 7 5 7"
                  }, null, 8, _hoisted_15$2),
                  vue.createElementVNode("polygon", {
                    id: "Rectangle-Copy-11",
                    fill: `var(${vue.unref(ns).cssVarBlockName("fill-color-5")})`,
                    points: "-3.69149156e-15 7 38 7 38 43 -3.69149156e-15 43"
                  }, null, 8, _hoisted_16$2),
                  vue.createElementVNode("rect", {
                    id: "Rectangle-Copy-12",
                    fill: `url(#linearGradient-1-${vue.unref(id)})`,
                    transform: "translate(46.500000, 25.000000) scale(-1, 1) translate(-46.500000, -25.000000) ",
                    x: "38",
                    y: "7",
                    width: "17",
                    height: "36"
                  }, null, 8, _hoisted_17$1),
                  vue.createElementVNode("polygon", {
                    id: "Rectangle-Copy-13",
                    fill: `var(${vue.unref(ns).cssVarBlockName("fill-color-2")})`,
                    transform: "translate(39.500000, 3.500000) scale(-1, 1) translate(-39.500000, -3.500000) ",
                    points: "24 7 41 7 55 -3.63806207e-12 38 -3.63806207e-12"
                  }, null, 8, _hoisted_18)
                ]),
                vue.createElementVNode("rect", {
                  id: "Rectangle-Copy-15",
                  fill: `url(#linearGradient-2-${vue.unref(id)})`,
                  x: "13",
                  y: "45",
                  width: "40",
                  height: "36"
                }, null, 8, _hoisted_19),
                vue.createElementVNode("g", _hoisted_20, [
                  vue.createElementVNode("use", {
                    id: "Mask",
                    fill: `var(${vue.unref(ns).cssVarBlockName("fill-color-8")})`,
                    transform: "translate(8.500000, 18.000000) scale(-1, 1) translate(-8.500000, -18.000000) ",
                    "xlink:href": `#path-3-${vue.unref(id)}`
                  }, null, 8, _hoisted_21),
                  vue.createElementVNode("polygon", {
                    id: "Rectangle-Copy",
                    fill: `var(${vue.unref(ns).cssVarBlockName("fill-color-9")})`,
                    mask: `url(#mask-4-${vue.unref(id)})`,
                    transform: "translate(12.000000, 9.000000) scale(-1, 1) translate(-12.000000, -9.000000) ",
                    points: "7 0 24 0 20 18 7 16.5"
                  }, null, 8, _hoisted_22)
                ]),
                vue.createElementVNode("polygon", {
                  id: "Rectangle-Copy-18",
                  fill: `var(${vue.unref(ns).cssVarBlockName("fill-color-2")})`,
                  transform: "translate(66.000000, 51.500000) scale(-1, 1) translate(-66.000000, -51.500000) ",
                  points: "62 45 79 45 70 58 53 58"
                }, null, 8, _hoisted_23)
              ])
            ])
          ])
        ]);
      };
    }
  });
  var ImgEmpty = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__file", "img-empty.vue"]]);
  const emptyProps = buildProps({
    image: {
      type: String,
      default: ""
    },
    imageSize: Number,
    description: {
      type: String,
      default: ""
    }
  });
  const _hoisted_1$f = ["src"];
  const _hoisted_2$a = { key: 1 };
  const __default__$8 = vue.defineComponent({
    name: "ElEmpty"
  });
  const _sfc_main$l = /* @__PURE__ */ vue.defineComponent({
    ...__default__$8,
    props: emptyProps,
    setup(__props) {
      const props = __props;
      const { t } = useLocale();
      const ns = useNamespace("empty");
      const emptyDescription = vue.computed(() => props.description || t("el.table.emptyText"));
      const imageStyle = vue.computed(() => ({
        width: addUnit(props.imageSize)
      }));
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(vue.unref(ns).b())
        }, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(vue.unref(ns).e("image")),
            style: vue.normalizeStyle(vue.unref(imageStyle))
          }, [
            _ctx.image ? (vue.openBlock(), vue.createElementBlock("img", {
              key: 0,
              src: _ctx.image,
              ondragstart: "return false"
            }, null, 8, _hoisted_1$f)) : vue.renderSlot(_ctx.$slots, "image", { key: 1 }, () => [
              vue.createVNode(ImgEmpty)
            ])
          ], 6),
          vue.createElementVNode("div", {
            class: vue.normalizeClass(vue.unref(ns).e("description"))
          }, [
            _ctx.$slots.description ? vue.renderSlot(_ctx.$slots, "description", { key: 0 }) : (vue.openBlock(), vue.createElementBlock("p", _hoisted_2$a, vue.toDisplayString(vue.unref(emptyDescription)), 1))
          ], 2),
          _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: vue.normalizeClass(vue.unref(ns).e("bottom"))
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 2)) : vue.createCommentVNode("v-if", true)
        ], 2);
      };
    }
  });
  var Empty = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__file", "empty.vue"]]);
  const ElEmpty = withInstall(Empty);
  const imageViewerProps = buildProps({
    urlList: {
      type: definePropType(Array),
      default: () => mutable([])
    },
    zIndex: {
      type: Number
    },
    initialIndex: {
      type: Number,
      default: 0
    },
    infinite: {
      type: Boolean,
      default: true
    },
    hideOnClickModal: Boolean,
    teleported: Boolean,
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    zoomRate: {
      type: Number,
      default: 1.2
    },
    minScale: {
      type: Number,
      default: 0.2
    },
    maxScale: {
      type: Number,
      default: 7
    },
    crossorigin: {
      type: definePropType(String)
    }
  });
  const imageViewerEmits = {
    close: () => true,
    switch: (index) => isNumber(index),
    rotate: (deg) => isNumber(deg)
  };
  const _hoisted_1$e = ["src", "crossorigin"];
  const __default__$7 = vue.defineComponent({
    name: "ElImageViewer"
  });
  const _sfc_main$k = /* @__PURE__ */ vue.defineComponent({
    ...__default__$7,
    props: imageViewerProps,
    emits: imageViewerEmits,
    setup(__props, { expose, emit }) {
      var _a3;
      const props = __props;
      const modes = {
        CONTAIN: {
          name: "contain",
          icon: vue.markRaw(iconsVue.FullScreen)
        },
        ORIGINAL: {
          name: "original",
          icon: vue.markRaw(iconsVue.ScaleToOriginal)
        }
      };
      const { t } = useLocale();
      const ns = useNamespace("image-viewer");
      const { nextZIndex } = useZIndex();
      const wrapper = vue.ref();
      const imgRefs = vue.ref([]);
      const scopeEventListener = vue.effectScope();
      const loading = vue.ref(true);
      const activeIndex = vue.ref(props.initialIndex);
      const mode = vue.shallowRef(modes.CONTAIN);
      const transform = vue.ref({
        scale: 1,
        deg: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: false
      });
      const zIndex2 = vue.ref((_a3 = props.zIndex) != null ? _a3 : nextZIndex());
      const isSingle = vue.computed(() => {
        const { urlList } = props;
        return urlList.length <= 1;
      });
      const isFirst = vue.computed(() => {
        return activeIndex.value === 0;
      });
      const isLast = vue.computed(() => {
        return activeIndex.value === props.urlList.length - 1;
      });
      const currentImg = vue.computed(() => {
        return props.urlList[activeIndex.value];
      });
      const arrowPrevKls = vue.computed(() => [
        ns.e("btn"),
        ns.e("prev"),
        ns.is("disabled", !props.infinite && isFirst.value)
      ]);
      const arrowNextKls = vue.computed(() => [
        ns.e("btn"),
        ns.e("next"),
        ns.is("disabled", !props.infinite && isLast.value)
      ]);
      const imgStyle = vue.computed(() => {
        const { scale, deg, offsetX, offsetY, enableTransition } = transform.value;
        let translateX = offsetX / scale;
        let translateY = offsetY / scale;
        switch (deg % 360) {
          case 90:
          case -270:
            [translateX, translateY] = [translateY, -translateX];
            break;
          case 180:
          case -180:
            [translateX, translateY] = [-translateX, -translateY];
            break;
          case 270:
          case -90:
            [translateX, translateY] = [-translateY, translateX];
            break;
        }
        const style = {
          transform: `scale(${scale}) rotate(${deg}deg) translate(${translateX}px, ${translateY}px)`,
          transition: enableTransition ? "transform .3s" : ""
        };
        if (mode.value.name === modes.CONTAIN.name) {
          style.maxWidth = style.maxHeight = "100%";
        }
        return style;
      });
      function hide() {
        unregisterEventListener();
        emit("close");
      }
      function registerEventListener() {
        const keydownHandler = throttle((e) => {
          switch (e.code) {
            case EVENT_CODE.esc:
              props.closeOnPressEscape && hide();
              break;
            case EVENT_CODE.space:
              toggleMode();
              break;
            case EVENT_CODE.left:
              prev();
              break;
            case EVENT_CODE.up:
              handleActions("zoomIn");
              break;
            case EVENT_CODE.right:
              next();
              break;
            case EVENT_CODE.down:
              handleActions("zoomOut");
              break;
          }
        });
        const mousewheelHandler = throttle((e) => {
          const delta = e.deltaY || e.deltaX;
          handleActions(delta < 0 ? "zoomIn" : "zoomOut", {
            zoomRate: props.zoomRate,
            enableTransition: false
          });
        });
        scopeEventListener.run(() => {
          useEventListener(document, "keydown", keydownHandler);
          useEventListener(document, "wheel", mousewheelHandler);
        });
      }
      function unregisterEventListener() {
        scopeEventListener.stop();
      }
      function handleImgLoad() {
        loading.value = false;
      }
      function handleImgError(e) {
        loading.value = false;
        e.target.alt = t("el.image.error");
      }
      function handleMouseDown(e) {
        if (loading.value || e.button !== 0 || !wrapper.value)
          return;
        transform.value.enableTransition = false;
        const { offsetX, offsetY } = transform.value;
        const startX = e.pageX;
        const startY = e.pageY;
        const dragHandler = throttle((ev) => {
          transform.value = {
            ...transform.value,
            offsetX: offsetX + ev.pageX - startX,
            offsetY: offsetY + ev.pageY - startY
          };
        });
        const removeMousemove = useEventListener(document, "mousemove", dragHandler);
        useEventListener(document, "mouseup", () => {
          removeMousemove();
        });
        e.preventDefault();
      }
      function reset() {
        transform.value = {
          scale: 1,
          deg: 0,
          offsetX: 0,
          offsetY: 0,
          enableTransition: false
        };
      }
      function toggleMode() {
        if (loading.value)
          return;
        const modeNames = keysOf(modes);
        const modeValues = Object.values(modes);
        const currentMode = mode.value.name;
        const index = modeValues.findIndex((i) => i.name === currentMode);
        const nextIndex = (index + 1) % modeNames.length;
        mode.value = modes[modeNames[nextIndex]];
        reset();
      }
      function setActiveItem(index) {
        const len = props.urlList.length;
        activeIndex.value = (index + len) % len;
      }
      function prev() {
        if (isFirst.value && !props.infinite)
          return;
        setActiveItem(activeIndex.value - 1);
      }
      function next() {
        if (isLast.value && !props.infinite)
          return;
        setActiveItem(activeIndex.value + 1);
      }
      function handleActions(action, options = {}) {
        if (loading.value)
          return;
        const { minScale, maxScale } = props;
        const { zoomRate, rotateDeg, enableTransition } = {
          zoomRate: props.zoomRate,
          rotateDeg: 90,
          enableTransition: true,
          ...options
        };
        switch (action) {
          case "zoomOut":
            if (transform.value.scale > minScale) {
              transform.value.scale = Number.parseFloat((transform.value.scale / zoomRate).toFixed(3));
            }
            break;
          case "zoomIn":
            if (transform.value.scale < maxScale) {
              transform.value.scale = Number.parseFloat((transform.value.scale * zoomRate).toFixed(3));
            }
            break;
          case "clockwise":
            transform.value.deg += rotateDeg;
            emit("rotate", transform.value.deg);
            break;
          case "anticlockwise":
            transform.value.deg -= rotateDeg;
            emit("rotate", transform.value.deg);
            break;
        }
        transform.value.enableTransition = enableTransition;
      }
      vue.watch(currentImg, () => {
        vue.nextTick(() => {
          const $img = imgRefs.value[0];
          if (!($img == null ? void 0 : $img.complete)) {
            loading.value = true;
          }
        });
      });
      vue.watch(activeIndex, (val) => {
        reset();
        emit("switch", val);
      });
      vue.onMounted(() => {
        var _a22, _b;
        registerEventListener();
        (_b = (_a22 = wrapper.value) == null ? void 0 : _a22.focus) == null ? void 0 : _b.call(_a22);
      });
      expose({
        setActiveItem
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.Teleport, {
          to: "body",
          disabled: !_ctx.teleported
        }, [
          vue.createVNode(vue.Transition, {
            name: "viewer-fade",
            appear: ""
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("div", {
                ref_key: "wrapper",
                ref: wrapper,
                tabindex: -1,
                class: vue.normalizeClass(vue.unref(ns).e("wrapper")),
                style: vue.normalizeStyle({ zIndex: zIndex2.value })
              }, [
                vue.createElementVNode("div", {
                  class: vue.normalizeClass(vue.unref(ns).e("mask")),
                  onClick: _cache[0] || (_cache[0] = vue.withModifiers(($event) => _ctx.hideOnClickModal && hide(), ["self"]))
                }, null, 2),
                vue.createCommentVNode(" CLOSE "),
                vue.createElementVNode("span", {
                  class: vue.normalizeClass([vue.unref(ns).e("btn"), vue.unref(ns).e("close")]),
                  onClick: hide
                }, [
                  vue.createVNode(vue.unref(ElIcon), null, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(iconsVue.Close))
                    ]),
                    _: 1
                  })
                ], 2),
                vue.createCommentVNode(" ARROW "),
                !vue.unref(isSingle) ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                  vue.createElementVNode("span", {
                    class: vue.normalizeClass(vue.unref(arrowPrevKls)),
                    onClick: prev
                  }, [
                    vue.createVNode(vue.unref(ElIcon), null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(vue.unref(iconsVue.ArrowLeft))
                      ]),
                      _: 1
                    })
                  ], 2),
                  vue.createElementVNode("span", {
                    class: vue.normalizeClass(vue.unref(arrowNextKls)),
                    onClick: next
                  }, [
                    vue.createVNode(vue.unref(ElIcon), null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(vue.unref(iconsVue.ArrowRight))
                      ]),
                      _: 1
                    })
                  ], 2)
                ], 64)) : vue.createCommentVNode("v-if", true),
                vue.createCommentVNode(" ACTIONS "),
                vue.createElementVNode("div", {
                  class: vue.normalizeClass([vue.unref(ns).e("btn"), vue.unref(ns).e("actions")])
                }, [
                  vue.createElementVNode("div", {
                    class: vue.normalizeClass(vue.unref(ns).e("actions__inner"))
                  }, [
                    vue.createVNode(vue.unref(ElIcon), {
                      onClick: _cache[1] || (_cache[1] = ($event) => handleActions("zoomOut"))
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(vue.unref(iconsVue.ZoomOut))
                      ]),
                      _: 1
                    }),
                    vue.createVNode(vue.unref(ElIcon), {
                      onClick: _cache[2] || (_cache[2] = ($event) => handleActions("zoomIn"))
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(vue.unref(iconsVue.ZoomIn))
                      ]),
                      _: 1
                    }),
                    vue.createElementVNode("i", {
                      class: vue.normalizeClass(vue.unref(ns).e("actions__divider"))
                    }, null, 2),
                    vue.createVNode(vue.unref(ElIcon), { onClick: toggleMode }, {
                      default: vue.withCtx(() => [
                        (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(mode).icon)))
                      ]),
                      _: 1
                    }),
                    vue.createElementVNode("i", {
                      class: vue.normalizeClass(vue.unref(ns).e("actions__divider"))
                    }, null, 2),
                    vue.createVNode(vue.unref(ElIcon), {
                      onClick: _cache[3] || (_cache[3] = ($event) => handleActions("anticlockwise"))
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(vue.unref(iconsVue.RefreshLeft))
                      ]),
                      _: 1
                    }),
                    vue.createVNode(vue.unref(ElIcon), {
                      onClick: _cache[4] || (_cache[4] = ($event) => handleActions("clockwise"))
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(vue.unref(iconsVue.RefreshRight))
                      ]),
                      _: 1
                    })
                  ], 2)
                ], 2),
                vue.createCommentVNode(" CANVAS "),
                vue.createElementVNode("div", {
                  class: vue.normalizeClass(vue.unref(ns).e("canvas"))
                }, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.urlList, (url, i) => {
                    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("img", {
                      ref_for: true,
                      ref: (el) => imgRefs.value[i] = el,
                      key: url,
                      src: url,
                      style: vue.normalizeStyle(vue.unref(imgStyle)),
                      class: vue.normalizeClass(vue.unref(ns).e("img")),
                      crossorigin: _ctx.crossorigin,
                      onLoad: handleImgLoad,
                      onError: handleImgError,
                      onMousedown: handleMouseDown
                    }, null, 46, _hoisted_1$e)), [
                      [vue.vShow, i === activeIndex.value]
                    ]);
                  }), 128))
                ], 2),
                vue.renderSlot(_ctx.$slots, "default")
              ], 6)
            ]),
            _: 3
          })
        ], 8, ["disabled"]);
      };
    }
  });
  var ImageViewer = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__file", "image-viewer.vue"]]);
  const ElImageViewer = withInstall(ImageViewer);
  const imageProps = buildProps({
    hideOnClickModal: Boolean,
    src: {
      type: String,
      default: ""
    },
    fit: {
      type: String,
      values: ["", "contain", "cover", "fill", "none", "scale-down"],
      default: ""
    },
    loading: {
      type: String,
      values: ["eager", "lazy"]
    },
    lazy: Boolean,
    scrollContainer: {
      type: definePropType([String, Object])
    },
    previewSrcList: {
      type: definePropType(Array),
      default: () => mutable([])
    },
    previewTeleported: Boolean,
    zIndex: {
      type: Number
    },
    initialIndex: {
      type: Number,
      default: 0
    },
    infinite: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    zoomRate: {
      type: Number,
      default: 1.2
    },
    minScale: {
      type: Number,
      default: 0.2
    },
    maxScale: {
      type: Number,
      default: 7
    },
    crossorigin: {
      type: definePropType(String)
    }
  });
  const imageEmits = {
    load: (evt) => evt instanceof Event,
    error: (evt) => evt instanceof Event,
    switch: (val) => isNumber(val),
    close: () => true,
    show: () => true
  };
  const _hoisted_1$d = ["src", "loading", "crossorigin"];
  const _hoisted_2$9 = { key: 0 };
  const __default__$6 = vue.defineComponent({
    name: "ElImage",
    inheritAttrs: false
  });
  const _sfc_main$j = /* @__PURE__ */ vue.defineComponent({
    ...__default__$6,
    props: imageProps,
    emits: imageEmits,
    setup(__props, { emit }) {
      const props = __props;
      let prevOverflow = "";
      const { t } = useLocale();
      const ns = useNamespace("image");
      const rawAttrs = vue.useAttrs();
      const attrs = useAttrs();
      const imageSrc = vue.ref();
      const hasLoadError = vue.ref(false);
      const isLoading = vue.ref(true);
      const showViewer = vue.ref(false);
      const container = vue.ref();
      const _scrollContainer = vue.ref();
      const supportLoading = isClient && "loading" in HTMLImageElement.prototype;
      let stopScrollListener;
      let stopWheelListener;
      const imageKls = vue.computed(() => [
        ns.e("inner"),
        preview.value && ns.e("preview"),
        isLoading.value && ns.is("loading")
      ]);
      const containerStyle = vue.computed(() => rawAttrs.style);
      const imageStyle = vue.computed(() => {
        const { fit } = props;
        if (isClient && fit) {
          return { objectFit: fit };
        }
        return {};
      });
      const preview = vue.computed(() => {
        const { previewSrcList } = props;
        return Array.isArray(previewSrcList) && previewSrcList.length > 0;
      });
      const imageIndex = vue.computed(() => {
        const { previewSrcList, initialIndex } = props;
        let previewIndex = initialIndex;
        if (initialIndex > previewSrcList.length - 1) {
          previewIndex = 0;
        }
        return previewIndex;
      });
      const isManual = vue.computed(() => {
        if (props.loading === "eager")
          return false;
        return !supportLoading && props.loading === "lazy" || props.lazy;
      });
      const loadImage = () => {
        if (!isClient)
          return;
        isLoading.value = true;
        hasLoadError.value = false;
        imageSrc.value = props.src;
      };
      function handleLoad(event) {
        isLoading.value = false;
        hasLoadError.value = false;
        emit("load", event);
      }
      function handleError(event) {
        isLoading.value = false;
        hasLoadError.value = true;
        emit("error", event);
      }
      function handleLazyLoad() {
        if (isInContainer(container.value, _scrollContainer.value)) {
          loadImage();
          removeLazyLoadListener();
        }
      }
      const lazyLoadHandler = useThrottleFn(handleLazyLoad, 200, true);
      async function addLazyLoadListener() {
        var _a3;
        if (!isClient)
          return;
        await vue.nextTick();
        const { scrollContainer } = props;
        if (isElement(scrollContainer)) {
          _scrollContainer.value = scrollContainer;
        } else if (isString(scrollContainer) && scrollContainer !== "") {
          _scrollContainer.value = (_a3 = document.querySelector(scrollContainer)) != null ? _a3 : void 0;
        } else if (container.value) {
          _scrollContainer.value = getScrollContainer(container.value);
        }
        if (_scrollContainer.value) {
          stopScrollListener = useEventListener(_scrollContainer, "scroll", lazyLoadHandler);
          setTimeout(() => handleLazyLoad(), 100);
        }
      }
      function removeLazyLoadListener() {
        if (!isClient || !_scrollContainer.value || !lazyLoadHandler)
          return;
        stopScrollListener == null ? void 0 : stopScrollListener();
        _scrollContainer.value = void 0;
      }
      function wheelHandler(e) {
        if (!e.ctrlKey)
          return;
        if (e.deltaY < 0) {
          e.preventDefault();
          return false;
        } else if (e.deltaY > 0) {
          e.preventDefault();
          return false;
        }
      }
      function clickHandler() {
        if (!preview.value)
          return;
        stopWheelListener = useEventListener("wheel", wheelHandler, {
          passive: false
        });
        prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        showViewer.value = true;
        emit("show");
      }
      function closeViewer() {
        stopWheelListener == null ? void 0 : stopWheelListener();
        document.body.style.overflow = prevOverflow;
        showViewer.value = false;
        emit("close");
      }
      function switchViewer(val) {
        emit("switch", val);
      }
      vue.watch(() => props.src, () => {
        if (isManual.value) {
          isLoading.value = true;
          hasLoadError.value = false;
          removeLazyLoadListener();
          addLazyLoadListener();
        } else {
          loadImage();
        }
      });
      vue.onMounted(() => {
        if (isManual.value) {
          addLazyLoadListener();
        } else {
          loadImage();
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          ref_key: "container",
          ref: container,
          class: vue.normalizeClass([vue.unref(ns).b(), _ctx.$attrs.class]),
          style: vue.normalizeStyle(vue.unref(containerStyle))
        }, [
          hasLoadError.value ? vue.renderSlot(_ctx.$slots, "error", { key: 0 }, () => [
            vue.createElementVNode("div", {
              class: vue.normalizeClass(vue.unref(ns).e("error"))
            }, vue.toDisplayString(vue.unref(t)("el.image.error")), 3)
          ]) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
            imageSrc.value !== void 0 ? (vue.openBlock(), vue.createElementBlock("img", vue.mergeProps({ key: 0 }, vue.unref(attrs), {
              src: imageSrc.value,
              loading: _ctx.loading,
              style: vue.unref(imageStyle),
              class: vue.unref(imageKls),
              crossorigin: _ctx.crossorigin,
              onClick: clickHandler,
              onLoad: handleLoad,
              onError: handleError
            }), null, 16, _hoisted_1$d)) : vue.createCommentVNode("v-if", true),
            isLoading.value ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 1,
              class: vue.normalizeClass(vue.unref(ns).e("wrapper"))
            }, [
              vue.renderSlot(_ctx.$slots, "placeholder", {}, () => [
                vue.createElementVNode("div", {
                  class: vue.normalizeClass(vue.unref(ns).e("placeholder"))
                }, null, 2)
              ])
            ], 2)) : vue.createCommentVNode("v-if", true)
          ], 64)),
          vue.unref(preview) ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 2 }, [
            showViewer.value ? (vue.openBlock(), vue.createBlock(vue.unref(ElImageViewer), {
              key: 0,
              "z-index": _ctx.zIndex,
              "initial-index": vue.unref(imageIndex),
              infinite: _ctx.infinite,
              "zoom-rate": _ctx.zoomRate,
              "min-scale": _ctx.minScale,
              "max-scale": _ctx.maxScale,
              "url-list": _ctx.previewSrcList,
              "hide-on-click-modal": _ctx.hideOnClickModal,
              teleported: _ctx.previewTeleported,
              "close-on-press-escape": _ctx.closeOnPressEscape,
              onClose: closeViewer,
              onSwitch: switchViewer
            }, {
              default: vue.withCtx(() => [
                _ctx.$slots.viewer ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$9, [
                  vue.renderSlot(_ctx.$slots, "viewer")
                ])) : vue.createCommentVNode("v-if", true)
              ]),
              _: 3
            }, 8, ["z-index", "initial-index", "infinite", "zoom-rate", "min-scale", "max-scale", "url-list", "hide-on-click-modal", "teleported", "close-on-press-escape"])) : vue.createCommentVNode("v-if", true)
          ], 64)) : vue.createCommentVNode("v-if", true)
        ], 6);
      };
    }
  });
  var Image = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__file", "image.vue"]]);
  const ElImage = withInstall(Image);
  const linkProps = buildProps({
    type: {
      type: String,
      values: ["primary", "success", "warning", "info", "danger", "default"],
      default: "default"
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: { type: Boolean, default: false },
    href: { type: String, default: "" },
    target: {
      type: String,
      default: "_self"
    },
    icon: {
      type: iconPropType
    }
  });
  const linkEmits = {
    click: (evt) => evt instanceof MouseEvent
  };
  const _hoisted_1$c = ["href", "target"];
  const __default__$5 = vue.defineComponent({
    name: "ElLink"
  });
  const _sfc_main$i = /* @__PURE__ */ vue.defineComponent({
    ...__default__$5,
    props: linkProps,
    emits: linkEmits,
    setup(__props, { emit }) {
      const props = __props;
      const ns = useNamespace("link");
      const linkKls = vue.computed(() => [
        ns.b(),
        ns.m(props.type),
        ns.is("disabled", props.disabled),
        ns.is("underline", props.underline && !props.disabled)
      ]);
      function handleClick(event) {
        if (!props.disabled)
          emit("click", event);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("a", {
          class: vue.normalizeClass(vue.unref(linkKls)),
          href: _ctx.disabled || !_ctx.href ? void 0 : _ctx.href,
          target: _ctx.disabled || !_ctx.href ? void 0 : _ctx.target,
          onClick: handleClick
        }, [
          _ctx.icon ? (vue.openBlock(), vue.createBlock(vue.unref(ElIcon), { key: 0 }, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.icon)))
            ]),
            _: 1
          })) : vue.createCommentVNode("v-if", true),
          _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 1,
            class: vue.normalizeClass(vue.unref(ns).e("inner"))
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 2)) : vue.createCommentVNode("v-if", true),
          _ctx.$slots.icon ? vue.renderSlot(_ctx.$slots, "icon", { key: 2 }) : vue.createCommentVNode("v-if", true)
        ], 10, _hoisted_1$c);
      };
    }
  });
  var Link = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__file", "link.vue"]]);
  const ElLink = withInstall(Link);
  const skeletonProps = buildProps({
    animated: {
      type: Boolean,
      default: false
    },
    count: {
      type: Number,
      default: 1
    },
    rows: {
      type: Number,
      default: 3
    },
    loading: {
      type: Boolean,
      default: true
    },
    throttle: {
      type: Number
    }
  });
  const skeletonItemProps = buildProps({
    variant: {
      type: String,
      values: [
        "circle",
        "rect",
        "h1",
        "h3",
        "text",
        "caption",
        "p",
        "image",
        "button"
      ],
      default: "text"
    }
  });
  const __default__$4 = vue.defineComponent({
    name: "ElSkeletonItem"
  });
  const _sfc_main$h = /* @__PURE__ */ vue.defineComponent({
    ...__default__$4,
    props: skeletonItemProps,
    setup(__props) {
      const ns = useNamespace("skeleton");
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass([vue.unref(ns).e("item"), vue.unref(ns).e(_ctx.variant)])
        }, [
          _ctx.variant === "image" ? (vue.openBlock(), vue.createBlock(vue.unref(iconsVue.PictureFilled), { key: 0 })) : vue.createCommentVNode("v-if", true)
        ], 2);
      };
    }
  });
  var SkeletonItem = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__file", "skeleton-item.vue"]]);
  const __default__$3 = vue.defineComponent({
    name: "ElSkeleton"
  });
  const _sfc_main$g = /* @__PURE__ */ vue.defineComponent({
    ...__default__$3,
    props: skeletonProps,
    setup(__props, { expose }) {
      const props = __props;
      const ns = useNamespace("skeleton");
      const uiLoading = useThrottleRender(vue.toRef(props, "loading"), props.throttle);
      expose({
        uiLoading
      });
      return (_ctx, _cache) => {
        return vue.unref(uiLoading) ? (vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
          key: 0,
          class: [vue.unref(ns).b(), vue.unref(ns).is("animated", _ctx.animated)]
        }, _ctx.$attrs), [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.count, (i) => {
            return vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: i }, [
              _ctx.loading ? vue.renderSlot(_ctx.$slots, "template", { key: i }, () => [
                vue.createVNode(SkeletonItem, {
                  class: vue.normalizeClass(vue.unref(ns).is("first")),
                  variant: "p"
                }, null, 8, ["class"]),
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.rows, (item) => {
                  return vue.openBlock(), vue.createBlock(SkeletonItem, {
                    key: item,
                    class: vue.normalizeClass([
                      vue.unref(ns).e("paragraph"),
                      vue.unref(ns).is("last", item === _ctx.rows && _ctx.rows > 1)
                    ]),
                    variant: "p"
                  }, null, 8, ["class"]);
                }), 128))
              ]) : vue.createCommentVNode("v-if", true)
            ], 64);
          }), 128))
        ], 16)) : vue.renderSlot(_ctx.$slots, "default", vue.normalizeProps(vue.mergeProps({ key: 1 }, _ctx.$attrs)));
      };
    }
  });
  var Skeleton = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__file", "skeleton.vue"]]);
  const ElSkeleton = withInstall(Skeleton, {
    SkeletonItem
  });
  const ElSkeletonItem = withNoopInstall(SkeletonItem);
  const spaceItemProps = buildProps({
    prefixCls: {
      type: String
    }
  });
  const SpaceItem = vue.defineComponent({
    name: "ElSpaceItem",
    props: spaceItemProps,
    setup(props, { slots }) {
      const ns = useNamespace("space");
      const classes = vue.computed(() => `${props.prefixCls || ns.b()}__item`);
      return () => vue.h("div", { class: classes.value }, vue.renderSlot(slots, "default"));
    }
  });
  const SIZE_MAP = {
    small: 8,
    default: 12,
    large: 16
  };
  function useSpace(props) {
    const ns = useNamespace("space");
    const classes = vue.computed(() => [ns.b(), ns.m(props.direction), props.class]);
    const horizontalSize = vue.ref(0);
    const verticalSize = vue.ref(0);
    const containerStyle = vue.computed(() => {
      const wrapKls = props.wrap || props.fill ? { flexWrap: "wrap" } : {};
      const alignment = {
        alignItems: props.alignment
      };
      const gap = {
        rowGap: `${verticalSize.value}px`,
        columnGap: `${horizontalSize.value}px`
      };
      return [wrapKls, alignment, gap, props.style];
    });
    const itemStyle = vue.computed(() => {
      return props.fill ? { flexGrow: 1, minWidth: `${props.fillRatio}%` } : {};
    });
    vue.watchEffect(() => {
      const { size = "small", wrap, direction: dir, fill } = props;
      if (isArray$1(size)) {
        const [h2 = 0, v = 0] = size;
        horizontalSize.value = h2;
        verticalSize.value = v;
      } else {
        let val;
        if (isNumber(size)) {
          val = size;
        } else {
          val = SIZE_MAP[size || "small"] || SIZE_MAP.small;
        }
        if ((wrap || fill) && dir === "horizontal") {
          horizontalSize.value = verticalSize.value = val;
        } else {
          if (dir === "horizontal") {
            horizontalSize.value = val;
            verticalSize.value = 0;
          } else {
            verticalSize.value = val;
            horizontalSize.value = 0;
          }
        }
      }
    });
    return {
      classes,
      containerStyle,
      itemStyle
    };
  }
  const spaceProps = buildProps({
    direction: {
      type: String,
      values: ["horizontal", "vertical"],
      default: "horizontal"
    },
    class: {
      type: definePropType([
        String,
        Object,
        Array
      ]),
      default: ""
    },
    style: {
      type: definePropType([String, Array, Object]),
      default: ""
    },
    alignment: {
      type: definePropType(String),
      default: "center"
    },
    prefixCls: {
      type: String
    },
    spacer: {
      type: definePropType([Object, String, Number, Array]),
      default: null,
      validator: (val) => vue.isVNode(val) || isNumber(val) || isString(val)
    },
    wrap: Boolean,
    fill: Boolean,
    fillRatio: {
      type: Number,
      default: 100
    },
    size: {
      type: [String, Array, Number],
      values: componentSizes,
      validator: (val) => {
        return isNumber(val) || isArray$1(val) && val.length === 2 && val.every(isNumber);
      }
    }
  });
  const Space = vue.defineComponent({
    name: "ElSpace",
    props: spaceProps,
    setup(props, { slots }) {
      const { classes, containerStyle, itemStyle } = useSpace(props);
      function extractChildren(children, parentKey = "", extractedChildren = []) {
        const { prefixCls } = props;
        children.forEach((child, loopKey) => {
          if (isFragment(child)) {
            if (isArray$1(child.children)) {
              child.children.forEach((nested, key) => {
                if (isFragment(nested) && isArray$1(nested.children)) {
                  extractChildren(nested.children, `${parentKey + key}-`, extractedChildren);
                } else {
                  extractedChildren.push(vue.createVNode(SpaceItem, {
                    style: itemStyle.value,
                    prefixCls,
                    key: `nested-${parentKey + key}`
                  }, {
                    default: () => [nested]
                  }, PatchFlags.PROPS | PatchFlags.STYLE, ["style", "prefixCls"]));
                }
              });
            }
          } else if (isValidElementNode(child)) {
            extractedChildren.push(vue.createVNode(SpaceItem, {
              style: itemStyle.value,
              prefixCls,
              key: `LoopKey${parentKey + loopKey}`
            }, {
              default: () => [child]
            }, PatchFlags.PROPS | PatchFlags.STYLE, ["style", "prefixCls"]));
          }
        });
        return extractedChildren;
      }
      return () => {
        var _a3;
        const { spacer, direction } = props;
        const children = vue.renderSlot(slots, "default", { key: 0 }, () => []);
        if (((_a3 = children.children) != null ? _a3 : []).length === 0)
          return null;
        if (isArray$1(children.children)) {
          let extractedChildren = extractChildren(children.children);
          if (spacer) {
            const len = extractedChildren.length - 1;
            extractedChildren = extractedChildren.reduce((acc, child, idx) => {
              const children2 = [...acc, child];
              if (idx !== len) {
                children2.push(vue.createVNode("span", {
                  style: [
                    itemStyle.value,
                    direction === "vertical" ? "width: 100%" : null
                  ],
                  key: idx
                }, [
                  vue.isVNode(spacer) ? spacer : vue.createTextVNode(spacer, PatchFlags.TEXT)
                ], PatchFlags.STYLE));
              }
              return children2;
            }, []);
          }
          return vue.createVNode("div", {
            class: classes.value,
            style: containerStyle.value
          }, extractedChildren, PatchFlags.STYLE | PatchFlags.CLASS);
        }
        return children.children;
      };
    }
  });
  const ElSpace = withInstall(Space);
  const tabsRootContextKey = Symbol("tabsRootContextKey");
  const tabBarProps = buildProps({
    tabs: {
      type: definePropType(Array),
      default: () => mutable([])
    }
  });
  const COMPONENT_NAME$2 = "ElTabBar";
  const __default__$2 = vue.defineComponent({
    name: COMPONENT_NAME$2
  });
  const _sfc_main$f = /* @__PURE__ */ vue.defineComponent({
    ...__default__$2,
    props: tabBarProps,
    setup(__props, { expose }) {
      const props = __props;
      const instance = vue.getCurrentInstance();
      const rootTabs = vue.inject(tabsRootContextKey);
      if (!rootTabs)
        throwError(COMPONENT_NAME$2, "<el-tabs><el-tab-bar /></el-tabs>");
      const ns = useNamespace("tabs");
      const barRef = vue.ref();
      const barStyle = vue.ref();
      const getBarStyle = () => {
        let offset = 0;
        let tabSize = 0;
        const sizeName = ["top", "bottom"].includes(rootTabs.props.tabPosition) ? "width" : "height";
        const sizeDir = sizeName === "width" ? "x" : "y";
        const position = sizeDir === "x" ? "left" : "top";
        props.tabs.every((tab) => {
          var _a3, _b;
          const $el = (_b = (_a3 = instance.parent) == null ? void 0 : _a3.refs) == null ? void 0 : _b[`tab-${tab.uid}`];
          if (!$el)
            return false;
          if (!tab.active) {
            return true;
          }
          offset = $el[`offset${capitalize(position)}`];
          tabSize = $el[`client${capitalize(sizeName)}`];
          const tabStyles = window.getComputedStyle($el);
          if (sizeName === "width") {
            if (props.tabs.length > 1) {
              tabSize -= Number.parseFloat(tabStyles.paddingLeft) + Number.parseFloat(tabStyles.paddingRight);
            }
            offset += Number.parseFloat(tabStyles.paddingLeft);
          }
          return false;
        });
        return {
          [sizeName]: `${tabSize}px`,
          transform: `translate${capitalize(sizeDir)}(${offset}px)`
        };
      };
      const update = () => barStyle.value = getBarStyle();
      vue.watch(() => props.tabs, async () => {
        await vue.nextTick();
        update();
      }, { immediate: true });
      useResizeObserver(barRef, () => update());
      expose({
        ref: barRef,
        update
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          ref_key: "barRef",
          ref: barRef,
          class: vue.normalizeClass([vue.unref(ns).e("active-bar"), vue.unref(ns).is(vue.unref(rootTabs).props.tabPosition)]),
          style: vue.normalizeStyle(barStyle.value)
        }, null, 6);
      };
    }
  });
  var TabBar = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__file", "tab-bar.vue"]]);
  const tabNavProps = buildProps({
    panes: {
      type: definePropType(Array),
      default: () => mutable([])
    },
    currentName: {
      type: [String, Number],
      default: ""
    },
    editable: Boolean,
    type: {
      type: String,
      values: ["card", "border-card", ""],
      default: ""
    },
    stretch: Boolean
  });
  const tabNavEmits = {
    tabClick: (tab, tabName, ev) => ev instanceof Event,
    tabRemove: (tab, ev) => ev instanceof Event
  };
  const COMPONENT_NAME$1 = "ElTabNav";
  const TabNav = vue.defineComponent({
    name: COMPONENT_NAME$1,
    props: tabNavProps,
    emits: tabNavEmits,
    setup(props, {
      expose,
      emit
    }) {
      const vm = vue.getCurrentInstance();
      const rootTabs = vue.inject(tabsRootContextKey);
      if (!rootTabs)
        throwError(COMPONENT_NAME$1, `<el-tabs><tab-nav /></el-tabs>`);
      const ns = useNamespace("tabs");
      const visibility = useDocumentVisibility();
      const focused = useWindowFocus();
      const navScroll$ = vue.ref();
      const nav$ = vue.ref();
      const el$ = vue.ref();
      const tabBarRef = vue.ref();
      const scrollable = vue.ref(false);
      const navOffset = vue.ref(0);
      const isFocus = vue.ref(false);
      const focusable = vue.ref(true);
      const sizeName = vue.computed(() => ["top", "bottom"].includes(rootTabs.props.tabPosition) ? "width" : "height");
      const navStyle = vue.computed(() => {
        const dir = sizeName.value === "width" ? "X" : "Y";
        return {
          transform: `translate${dir}(-${navOffset.value}px)`
        };
      });
      const scrollPrev = () => {
        if (!navScroll$.value)
          return;
        const containerSize = navScroll$.value[`offset${capitalize(sizeName.value)}`];
        const currentOffset = navOffset.value;
        if (!currentOffset)
          return;
        const newOffset = currentOffset > containerSize ? currentOffset - containerSize : 0;
        navOffset.value = newOffset;
      };
      const scrollNext = () => {
        if (!navScroll$.value || !nav$.value)
          return;
        const navSize = nav$.value[`offset${capitalize(sizeName.value)}`];
        const containerSize = navScroll$.value[`offset${capitalize(sizeName.value)}`];
        const currentOffset = navOffset.value;
        if (navSize - currentOffset <= containerSize)
          return;
        const newOffset = navSize - currentOffset > containerSize * 2 ? currentOffset + containerSize : navSize - containerSize;
        navOffset.value = newOffset;
      };
      const scrollToActiveTab = async () => {
        const nav = nav$.value;
        if (!scrollable.value || !el$.value || !navScroll$.value || !nav)
          return;
        await vue.nextTick();
        const activeTab = el$.value.querySelector(".is-active");
        if (!activeTab)
          return;
        const navScroll = navScroll$.value;
        const isHorizontal = ["top", "bottom"].includes(rootTabs.props.tabPosition);
        const activeTabBounding = activeTab.getBoundingClientRect();
        const navScrollBounding = navScroll.getBoundingClientRect();
        const maxOffset = isHorizontal ? nav.offsetWidth - navScrollBounding.width : nav.offsetHeight - navScrollBounding.height;
        const currentOffset = navOffset.value;
        let newOffset = currentOffset;
        if (isHorizontal) {
          if (activeTabBounding.left < navScrollBounding.left) {
            newOffset = currentOffset - (navScrollBounding.left - activeTabBounding.left);
          }
          if (activeTabBounding.right > navScrollBounding.right) {
            newOffset = currentOffset + activeTabBounding.right - navScrollBounding.right;
          }
        } else {
          if (activeTabBounding.top < navScrollBounding.top) {
            newOffset = currentOffset - (navScrollBounding.top - activeTabBounding.top);
          }
          if (activeTabBounding.bottom > navScrollBounding.bottom) {
            newOffset = currentOffset + (activeTabBounding.bottom - navScrollBounding.bottom);
          }
        }
        newOffset = Math.max(newOffset, 0);
        navOffset.value = Math.min(newOffset, maxOffset);
      };
      const update = () => {
        var _a3;
        if (!nav$.value || !navScroll$.value)
          return;
        props.stretch && ((_a3 = tabBarRef.value) == null ? void 0 : _a3.update());
        const navSize = nav$.value[`offset${capitalize(sizeName.value)}`];
        const containerSize = navScroll$.value[`offset${capitalize(sizeName.value)}`];
        const currentOffset = navOffset.value;
        if (containerSize < navSize) {
          scrollable.value = scrollable.value || {};
          scrollable.value.prev = currentOffset;
          scrollable.value.next = currentOffset + containerSize < navSize;
          if (navSize - currentOffset < containerSize) {
            navOffset.value = navSize - containerSize;
          }
        } else {
          scrollable.value = false;
          if (currentOffset > 0) {
            navOffset.value = 0;
          }
        }
      };
      const changeTab = (e) => {
        const code = e.code;
        const {
          up,
          down,
          left,
          right
        } = EVENT_CODE;
        if (![up, down, left, right].includes(code))
          return;
        const tabList = Array.from(e.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)"));
        const currentIndex = tabList.indexOf(e.target);
        let nextIndex;
        if (code === left || code === up) {
          if (currentIndex === 0) {
            nextIndex = tabList.length - 1;
          } else {
            nextIndex = currentIndex - 1;
          }
        } else {
          if (currentIndex < tabList.length - 1) {
            nextIndex = currentIndex + 1;
          } else {
            nextIndex = 0;
          }
        }
        tabList[nextIndex].focus({
          preventScroll: true
        });
        tabList[nextIndex].click();
        setFocus();
      };
      const setFocus = () => {
        if (focusable.value)
          isFocus.value = true;
      };
      const removeFocus = () => isFocus.value = false;
      vue.watch(visibility, (visibility2) => {
        if (visibility2 === "hidden") {
          focusable.value = false;
        } else if (visibility2 === "visible") {
          setTimeout(() => focusable.value = true, 50);
        }
      });
      vue.watch(focused, (focused2) => {
        if (focused2) {
          setTimeout(() => focusable.value = true, 50);
        } else {
          focusable.value = false;
        }
      });
      useResizeObserver(el$, update);
      vue.onMounted(() => setTimeout(() => scrollToActiveTab(), 0));
      vue.onUpdated(() => update());
      expose({
        scrollToActiveTab,
        removeFocus
      });
      vue.watch(() => props.panes, () => vm.update(), {
        flush: "post",
        deep: true
      });
      return () => {
        const scrollBtn = scrollable.value ? [vue.createVNode("span", {
          "class": [ns.e("nav-prev"), ns.is("disabled", !scrollable.value.prev)],
          "onClick": scrollPrev
        }, [vue.createVNode(ElIcon, null, {
          default: () => [vue.createVNode(iconsVue.ArrowLeft, null, null)]
        })]), vue.createVNode("span", {
          "class": [ns.e("nav-next"), ns.is("disabled", !scrollable.value.next)],
          "onClick": scrollNext
        }, [vue.createVNode(ElIcon, null, {
          default: () => [vue.createVNode(iconsVue.ArrowRight, null, null)]
        })])] : null;
        const tabs = props.panes.map((pane, index) => {
          var _a3, _b, _c, _d;
          const uid = pane.uid;
          const disabled = pane.props.disabled;
          const tabName = (_b = (_a3 = pane.props.name) != null ? _a3 : pane.index) != null ? _b : `${index}`;
          const closable = !disabled && (pane.isClosable || props.editable);
          pane.index = `${index}`;
          const btnClose = closable ? vue.createVNode(ElIcon, {
            "class": "is-icon-close",
            "onClick": (ev) => emit("tabRemove", pane, ev)
          }, {
            default: () => [vue.createVNode(iconsVue.Close, null, null)]
          }) : null;
          const tabLabelContent = ((_d = (_c = pane.slots).label) == null ? void 0 : _d.call(_c)) || pane.props.label;
          const tabindex = !disabled && pane.active ? 0 : -1;
          return vue.createVNode("div", {
            "ref": `tab-${uid}`,
            "class": [ns.e("item"), ns.is(rootTabs.props.tabPosition), ns.is("active", pane.active), ns.is("disabled", disabled), ns.is("closable", closable), ns.is("focus", isFocus.value)],
            "id": `tab-${tabName}`,
            "key": `tab-${uid}`,
            "aria-controls": `pane-${tabName}`,
            "role": "tab",
            "aria-selected": pane.active,
            "tabindex": tabindex,
            "onFocus": () => setFocus(),
            "onBlur": () => removeFocus(),
            "onClick": (ev) => {
              removeFocus();
              emit("tabClick", pane, tabName, ev);
            },
            "onKeydown": (ev) => {
              if (closable && (ev.code === EVENT_CODE.delete || ev.code === EVENT_CODE.backspace)) {
                emit("tabRemove", pane, ev);
              }
            }
          }, [...[tabLabelContent, btnClose]]);
        });
        return vue.createVNode("div", {
          "ref": el$,
          "class": [ns.e("nav-wrap"), ns.is("scrollable", !!scrollable.value), ns.is(rootTabs.props.tabPosition)]
        }, [scrollBtn, vue.createVNode("div", {
          "class": ns.e("nav-scroll"),
          "ref": navScroll$
        }, [vue.createVNode("div", {
          "class": [ns.e("nav"), ns.is(rootTabs.props.tabPosition), ns.is("stretch", props.stretch && ["top", "bottom"].includes(rootTabs.props.tabPosition))],
          "ref": nav$,
          "style": navStyle.value,
          "role": "tablist",
          "onKeydown": changeTab
        }, [...[!props.type ? vue.createVNode(TabBar, {
          "ref": tabBarRef,
          "tabs": [...props.panes]
        }, null) : null, tabs]])])]);
      };
    }
  });
  const tabsProps = buildProps({
    type: {
      type: String,
      values: ["card", "border-card", ""],
      default: ""
    },
    closable: Boolean,
    addable: Boolean,
    modelValue: {
      type: [String, Number]
    },
    editable: Boolean,
    tabPosition: {
      type: String,
      values: ["top", "right", "bottom", "left"],
      default: "top"
    },
    beforeLeave: {
      type: definePropType(Function),
      default: () => true
    },
    stretch: Boolean
  });
  const isPaneName = (value) => isString(value) || isNumber(value);
  const tabsEmits = {
    [UPDATE_MODEL_EVENT]: (name) => isPaneName(name),
    tabClick: (pane, ev) => ev instanceof Event,
    tabChange: (name) => isPaneName(name),
    edit: (paneName, action) => ["remove", "add"].includes(action),
    tabRemove: (name) => isPaneName(name),
    tabAdd: () => true
  };
  const Tabs = vue.defineComponent({
    name: "ElTabs",
    props: tabsProps,
    emits: tabsEmits,
    setup(props, {
      emit,
      slots,
      expose
    }) {
      var _a3;
      const ns = useNamespace("tabs");
      const {
        children: panes,
        addChild: registerPane,
        removeChild: unregisterPane
      } = useOrderedChildren(vue.getCurrentInstance(), "ElTabPane");
      const nav$ = vue.ref();
      const currentName = vue.ref((_a3 = props.modelValue) != null ? _a3 : "0");
      const setCurrentName = async (value, trigger = false) => {
        var _a22, _b, _c;
        if (currentName.value === value || isUndefined(value))
          return;
        try {
          const canLeave = await ((_a22 = props.beforeLeave) == null ? void 0 : _a22.call(props, value, currentName.value));
          if (canLeave !== false) {
            currentName.value = value;
            if (trigger) {
              emit(UPDATE_MODEL_EVENT, value);
              emit("tabChange", value);
            }
            (_c = (_b = nav$.value) == null ? void 0 : _b.removeFocus) == null ? void 0 : _c.call(_b);
          }
        } catch (e) {
        }
      };
      const handleTabClick = (tab, tabName, event) => {
        if (tab.props.disabled)
          return;
        setCurrentName(tabName, true);
        emit("tabClick", tab, event);
      };
      const handleTabRemove = (pane, ev) => {
        if (pane.props.disabled || isUndefined(pane.props.name))
          return;
        ev.stopPropagation();
        emit("edit", pane.props.name, "remove");
        emit("tabRemove", pane.props.name);
      };
      const handleTabAdd = () => {
        emit("edit", void 0, "add");
        emit("tabAdd");
      };
      vue.watch(() => props.modelValue, (modelValue) => setCurrentName(modelValue));
      vue.watch(currentName, async () => {
        var _a22;
        await vue.nextTick();
        (_a22 = nav$.value) == null ? void 0 : _a22.scrollToActiveTab();
      });
      vue.provide(tabsRootContextKey, {
        props,
        currentName,
        registerPane,
        unregisterPane
      });
      expose({
        currentName
      });
      return () => {
        const addSlot = slots["add-icon"];
        const newButton = props.editable || props.addable ? vue.createVNode("span", {
          "class": ns.e("new-tab"),
          "tabindex": "0",
          "onClick": handleTabAdd,
          "onKeydown": (ev) => {
            if (ev.code === EVENT_CODE.enter)
              handleTabAdd();
          }
        }, [addSlot ? vue.renderSlot(slots, "add-icon") : vue.createVNode(ElIcon, {
          "class": ns.is("icon-plus")
        }, {
          default: () => [vue.createVNode(iconsVue.Plus, null, null)]
        })]) : null;
        const header = vue.createVNode("div", {
          "class": [ns.e("header"), ns.is(props.tabPosition)]
        }, [newButton, vue.createVNode(TabNav, {
          "ref": nav$,
          "currentName": currentName.value,
          "editable": props.editable,
          "type": props.type,
          "panes": panes.value,
          "stretch": props.stretch,
          "onTabClick": handleTabClick,
          "onTabRemove": handleTabRemove
        }, null)]);
        const panels = vue.createVNode("div", {
          "class": ns.e("content")
        }, [vue.renderSlot(slots, "default")]);
        return vue.createVNode("div", {
          "class": [ns.b(), ns.m(props.tabPosition), {
            [ns.m("card")]: props.type === "card",
            [ns.m("border-card")]: props.type === "border-card"
          }]
        }, [...props.tabPosition !== "bottom" ? [header, panels] : [panels, header]]);
      };
    }
  });
  const tabPaneProps = buildProps({
    label: {
      type: String,
      default: ""
    },
    name: {
      type: [String, Number]
    },
    closable: Boolean,
    disabled: Boolean,
    lazy: Boolean
  });
  const _hoisted_1$b = ["id", "aria-hidden", "aria-labelledby"];
  const COMPONENT_NAME = "ElTabPane";
  const __default__$1 = vue.defineComponent({
    name: COMPONENT_NAME
  });
  const _sfc_main$e = /* @__PURE__ */ vue.defineComponent({
    ...__default__$1,
    props: tabPaneProps,
    setup(__props) {
      const props = __props;
      const instance = vue.getCurrentInstance();
      const slots = vue.useSlots();
      const tabsRoot = vue.inject(tabsRootContextKey);
      if (!tabsRoot)
        throwError(COMPONENT_NAME, "usage: <el-tabs><el-tab-pane /></el-tabs/>");
      const ns = useNamespace("tab-pane");
      const index = vue.ref();
      const isClosable = vue.computed(() => props.closable || tabsRoot.props.closable);
      const active = computedEager(() => {
        var _a3;
        return tabsRoot.currentName.value === ((_a3 = props.name) != null ? _a3 : index.value);
      });
      const loaded = vue.ref(active.value);
      const paneName = vue.computed(() => {
        var _a3;
        return (_a3 = props.name) != null ? _a3 : index.value;
      });
      const shouldBeRender = computedEager(() => !props.lazy || loaded.value || active.value);
      vue.watch(active, (val) => {
        if (val)
          loaded.value = true;
      });
      const pane = vue.reactive({
        uid: instance.uid,
        slots,
        props,
        paneName,
        active,
        index,
        isClosable
      });
      vue.onMounted(() => {
        tabsRoot.registerPane(pane);
      });
      vue.onUnmounted(() => {
        tabsRoot.unregisterPane(pane.uid);
      });
      return (_ctx, _cache) => {
        return vue.unref(shouldBeRender) ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          id: `pane-${vue.unref(paneName)}`,
          class: vue.normalizeClass(vue.unref(ns).b()),
          role: "tabpanel",
          "aria-hidden": !vue.unref(active),
          "aria-labelledby": `tab-${vue.unref(paneName)}`
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 10, _hoisted_1$b)), [
          [vue.vShow, vue.unref(active)]
        ]) : vue.createCommentVNode("v-if", true);
      };
    }
  });
  var TabPane = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__file", "tab-pane.vue"]]);
  const ElTabs = withInstall(Tabs, {
    TabPane
  });
  const ElTabPane = withNoopInstall(TabPane);
  const textProps = buildProps({
    type: {
      type: String,
      values: ["primary", "success", "info", "warning", "danger", ""],
      default: ""
    },
    size: {
      type: String,
      values: componentSizes,
      default: ""
    },
    truncated: {
      type: Boolean
    },
    lineClamp: {
      type: [String, Number]
    },
    tag: {
      type: String,
      default: "span"
    }
  });
  const __default__ = vue.defineComponent({
    name: "ElText"
  });
  const _sfc_main$d = /* @__PURE__ */ vue.defineComponent({
    ...__default__,
    props: textProps,
    setup(__props) {
      const props = __props;
      const textSize = useFormSize();
      const ns = useNamespace("text");
      const textKls = vue.computed(() => [
        ns.b(),
        ns.m(props.type),
        ns.m(textSize.value),
        ns.is("truncated", props.truncated),
        ns.is("line-clamp", !isUndefined(props.lineClamp))
      ]);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), {
          class: vue.normalizeClass(vue.unref(textKls)),
          style: vue.normalizeStyle({ "-webkit-line-clamp": _ctx.lineClamp })
        }, {
          default: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]);
      };
    }
  });
  var Text = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__file", "text.vue"]]);
  const ElText = withInstall(Text);
  const EmojiPanel = {
    $data: {
      imageUrlList: []
    },
    init() {
      if (this.$data.imageUrlList.length === 0) {
        this.createImageList();
      }
    },
    getImageList() {
      return this.$data.imageUrlList;
    },
    createImageList() {
      let imageTemplateUrl = "//tb2.bdstatic.com/tb/editor/images/face/i_f";
      let startImageId = 1;
      let endImageId = 55;
      let imageMineType = "png";
      for (let index = startImageId; index <= endImageId; index++) {
        this.$data.imageUrlList.push(
          `${imageTemplateUrl}${index < 10 ? "0" + index : index}.${imageMineType}`
        );
      }
    }
  };
  const useTiptapStore = pinia$1.defineStore({
    id: "tiptap",
    state: () => ({
      /**
       * 是否异步加载完成实例
       */
      isLoaded: false
    })
  });
  const _hoisted_1$a = { id: "reply-editor" };
  const _sfc_main$c = /* @__PURE__ */ vue.defineComponent({
    __name: "Tiptap",
    setup(__props, { expose: __expose }) {
      const tiptapStore = useTiptapStore();
      let editor = null;
      let $tiptap = domutils.createElement(
        "script",
        {
          innerHTML: `
                import { Editor } from 'https://fastly.jsdelivr.net/npm/@tiptap/core@2.2.0/+esm'
                import StarterKit from 'https://fastly.jsdelivr.net/npm/@tiptap/starter-kit@2.2.0/+esm'
                import Placeholder from 'https://fastly.jsdelivr.net/npm/@tiptap/extension-placeholder@2.2.0/+esm'
                import Image from "https://fastly.jsdelivr.net/npm/@tiptap/extension-image@2.2.0/+esm";
                const editor = new Editor({
                element: document.querySelector('#reply-editor'),
                extensions: [
                    StarterKit,
                    Placeholder.configure({
                        placeholder: "发帖千百度 文明第一步",
                    }),
                    Image.configure({
                        allowBase64: true,
                        HTMLAttributes: {
                            class: "tiptap-input-image",
                        },
                        inline: true,
                    }),
                ],
                content: '',
                });
                window.tiptapEditor = editor;
				window.dispatchEvent(new Event("tiptap-ready"));
                `
        },
        {
          type: "module"
        }
      );
      vue.onMounted(() => {
        domutils.append(document.head, $tiptap);
      });
      window.addEventListener("tiptap-ready", () => {
        log.success("Editor: Tiptap is success loaded", "green");
        tiptapStore.isLoaded = true;
        editor = _unsafeWindow.tiptapEditor;
      }, {
        once: true
      });
      const EditorTools = {
        /**
         * 插入图片
         * @param url 图片链接
         */
        insertImage(url) {
          log.info("Editor: 插入图片 => " + url);
          let tipEditor = editor;
          tipEditor.commands.setImage({
            src: url
          });
        },
        /**
         * 获取输入的内容
         * （内部进行字符串转换。比如表情转换）
         */
        getReplyContentInfo() {
          var _a3;
          log.info("Editor: 获取并解析内容");
          let tipEditor = editor;
          let contentHTML = tipEditor.getHTML();
          let $parseNode = document.createElement("div");
          $parseNode.innerHTML = contentHTML;
          let $parseContent = (_a3 = $parseNode.firstChild) == null ? void 0 : _a3.cloneNode(true);
          let content = "";
          $parseNode.querySelectorAll("& > *").forEach(($line) => {
            if ($line.className === "is-empty") {
              return;
            }
            $line.querySelectorAll("img.tiptap-input-image").forEach(($img) => {
              $img.outerHTML = `[emotion pic_type=1 width=30 height=30]${$img.src.replace(/^http(s|):/g, "")}[/emotion]`;
            });
            content += $line.innerText;
            content += "\n";
          });
          return {
            text: content,
            html: $parseContent.innerHTML
          };
        },
        /**
         * 清空内容
         */
        clearContent() {
          log.info("Editor: 清空");
          let tipEditor = editor;
          tipEditor.commands.clearContent();
        },
        /**
         * 监听编辑器内容改变时，是否为空
         * @param callback 监听回调
         */
        listenEditorContentChangeEmptyState(callback) {
          log.info("Editor: 设置监听编辑器内容改变时，是否为空");
          let tipEditor = editor;
          tipEditor.on("update", () => {
            callback(tipEditor.isEmpty);
            tipEditor.commands.scrollIntoView();
          });
        },
        /**
         * 编辑器获取焦点（移动端唤醒键盘）
         * @param [timeout=0] 延迟时间
         */
        setEditorFocus(timeout = 0) {
          log.info("Editor: 获取焦点");
          if (timeout < 0) {
            let tipEditor = editor;
            tipEditor.commands.focus();
          } else {
            setTimeout(() => {
              let tipEditor = editor;
              tipEditor.commands.focus();
            }, timeout);
          }
        }
      };
      __expose(EditorTools);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$a);
      };
    }
  });
  const Tiptap = /* @__PURE__ */ _export_sfc$1(_sfc_main$c, [["__scopeId", "data-v-348dbf1b"]]);
  const _withScopeId$2 = (n) => (vue.pushScopeId("data-v-81bfdcdf"), n = n(), vue.popScopeId(), n);
  const _hoisted_1$9 = ["data-show-bottom-panel", "data-show-reply-content"];
  const _hoisted_2$8 = ["data-full"];
  const _hoisted_3$7 = {
    key: 0,
    class: "full-toolbar-top-nav-container"
  };
  const _hoisted_4$7 = { class: "full-toolbar-top-left-container" };
  const _hoisted_5$7 = { class: "full-toolbar-top-right-container" };
  const _hoisted_6$6 = ["fill"];
  const _hoisted_7$4 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ vue.createElementVNode("path", {
    d: "M511 954.86c-119.3 0-231.4-46.1-315.8-129.9-84.3-83.8-130.8-195.3-130.8-313.8 0-118.5 46.5-230 130.8-313.8 84.3-83.8 196.5-129.9 315.8-129.9 119.3 0 231.5 46.1 315.8 129.9 174.1 173.1 174.1 454.6 0 627.6C742.5 908.66 630.3 954.86 511 954.86L511 954.86 511 954.86 511 954.86 511 954.86zM511.1 125.26c-103.8 0-201.3 40.1-274.6 113-73.4 72.9-113.8 169.8-113.8 272.9 0 103.1 40.4 200.1 113.7 272.9 73.3 72.8 170.9 113 274.6 113 103.8 0 201.4-40.2 274.8-113.1 151.4-150.4 151.4-395.3 0-545.8C712.4 165.36 614.8 125.26 511.1 125.26L511.1 125.26 511.1 125.26 511.1 125.26 511.1 125.26zM352.4 632.26c0 0 52.3 83.1 158.6 83.1 106.3 0 176-83.1 176-83.1s39.5-0.1 39.5 41.5c0 0-68.5 97-215.5 97s-194.8-97-194.8-97S314.7 632.26 352.4 632.26L352.4 632.26 352.4 632.26 352.4 632.26zM381.2 368.46c-30.1 0-54.7 24.3-54.7 54.3 0 30 24.6 54.3 54.7 54.3 30.3 0 54.7-24.3 54.7-54.3C435.9 392.76 411.5 368.46 381.2 368.46L381.2 368.46 381.2 368.46 381.2 368.46 381.2 368.46zM661.4 368.46c-30.2 0-54.7 24.3-54.7 54.3 0 30 24.5 54.3 54.7 54.3 30.2 0 54.7-24.3 54.7-54.3C716.1 392.76 691.7 368.46 661.4 368.46L661.4 368.46 661.4 368.46 661.4 368.46 661.4 368.46z",
    "p-id": "2300"
  }, null, -1));
  const _hoisted_8$4 = [
    _hoisted_7$4
  ];
  const _hoisted_15$1 = { class: "full-toolbar-bottom-panel" };
  const _hoisted_16$1 = {
    key: 0,
    class: "emoji-panel"
  };
  const _hoisted_17 = { class: "emoji-panel-huaji" };
  const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
    __name: "FullToolbar",
    emits: ["updateContentState", "showSmallToolbar"],
    setup(__props, { expose: __expose, emit: __emit }) {
      useToolbarStore();
      const toolbarStateStore = useToolbarStateStore();
      const tiptapStore = useTiptapStore();
      const emits = __emit;
      const EditorRef = vue.ref();
      const BtnColor = vue.ref("#7557FF");
      const currentPanelMenu = vue.ref({
        name: "emoji",
        state: true
      });
      const ReplyUser = vue.ref("");
      const ReplyUserContent = vue.ref("");
      const isEnlarge = vue.ref(false);
      const updateContentState = (state) => {
        emits("updateContentState", state);
      };
      EmojiPanel.init();
      const ToolbarHandler = {
        /** 处理底部panel显示/隐藏 */
        handleBottomPanelVisible(menuName, state = !currentPanelMenu.value.state) {
          currentPanelMenu.value.state = state;
          currentPanelMenu.value.name = menuName;
        },
        /** 放大、缩小按钮图标的点击事件 */
        handleEditorHeight() {
          isEnlarge.value = !isEnlarge.value;
        },
        /** 工具栏 表情 => 表情图片 点击事件 */
        handleEmojiImageClick(event, url) {
          if (EditorRef.value) {
            EditorRef.value.insertImage(url);
          }
        },
        /** 工具栏 表情 点击事件 */
        handleEmojiIconClick(event) {
          ToolbarHandler.handleBottomPanelVisible("emoji");
        },
        /** 工具栏 @ 点击事件 */
        handleAtIconClick(event) {
          ToolbarHandler.handleBottomPanelVisible("at");
        },
        /** 发表 点击事件 */
        handlePostMsgClickEvent(event) {
          log.info("点击发表按钮");
          TiebaReply.$data.isSending.value = true;
          TiebaReply.sendMsg(event);
        },
        /** 按下 发表按钮 */
        recordOnSubmitTouchStart(event) {
          let contentInfo = EditorRef.value.getReplyContentInfo();
          TiebaReply.setInputValue(contentInfo.text);
          TiebaReply.sendMsgBefore(event);
        },
        /** 重置回复的用户，使当前为回复本帖楼主 */
        resetReplyUser() {
          ReplyUser.value = "";
          ReplyUserContent.value = "";
          if (TiebaReply.$data.type.value !== "main") {
            TiebaReply.$data.type.value = "main";
            TiebaReply.setCurrentReplyMainUser();
          }
        },
        /** 重置编辑器，一般是发表后进行清空操作 */
        resetToolbar(showSmallToolbar = true) {
          ToolbarHandler.resetReplyUser();
          isEnlarge.value = false;
          EditorRef.value.clearContent();
          updateContentState(true);
          if (showSmallToolbar) {
            emits("showSmallToolbar");
          }
          TiebaReply.$data.isSending.value = false;
        }
      };
      TiebaReply.$vue.handlerCommentSuccess = (pid, content, no) => {
        log.success(["回复成功的回调", {
          no,
          pid,
          content
        }]);
        if (no === 0) {
          if (TiebaReply.$data.type.value === "lzl-comment") ;
          Qmsg.success("回复成功，请刷新查看~");
          ToolbarHandler.resetToolbar();
        } else {
          Qmsg.error("发表失败，请检查网络后重试", {
            zIndex: utils.getMaxZIndex() + 10
          });
        }
      };
      vue.watch(
        () => toolbarStateStore.isShowFullToolbar,
        (newValue, oldValue) => {
          if (newValue) {
            if (TiebaReply.$data.type.value != null) {
              if (TiebaReply.$data.type.value === "comment") {
                ReplyUser.value = `回复 ：${TiebaReply.$data.replyCommentData.value.data.authorName}`;
                ReplyUserContent.value = TiebaReply.$data.replyCommentData.value.data.content;
              } else if (TiebaReply.$data.type.value === "lzl-comment") {
                ReplyUser.value = `回复 ：${TiebaReply.$data.replyLzlCommentData.value.data.authorName}`;
                ReplyUserContent.value = TiebaReply.$data.replyLzlCommentData.value.data.content;
              } else {
                ReplyUser.value = "";
              }
            }
            setTimeout(() => {
              var _a3;
              (_a3 = EditorRef.value) == null ? void 0 : _a3.setEditorFocus();
            }, 200);
          } else {
            ToolbarHandler.resetReplyUser();
            isEnlarge.value = false;
          }
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.watch(() => tiptapStore.isLoaded, (newValue) => {
        var _a3;
        log.success("tiptap加载完毕，监听内容！");
        (_a3 = EditorRef.value) == null ? void 0 : _a3.listenEditorContentChangeEmptyState(updateContentState);
      }, {
        immediate: true,
        deep: true
      });
      __expose({
        handleBottomPanelVisible: ToolbarHandler.handleBottomPanelVisible,
        resetReplyUser: ToolbarHandler.resetReplyUser
      });
      return (_ctx, _cache) => {
        const _component_el_icon = ElIcon;
        const _component_el_button = ElButton;
        const _component_el_col = ElCol;
        const _component_el_row = ElRow;
        const _component_el_avatar = ElAvatar;
        return vue.openBlock(), vue.createElementBlock("div", {
          id: "full-toolbar",
          "data-show-bottom-panel": currentPanelMenu.value.state,
          "data-show-reply-content": ReplyUser.value !== ""
        }, [
          vue.withDirectives(vue.createElementVNode("div", { class: "full-toolbar-top-reply-user" }, vue.toDisplayString(ReplyUser.value) + " " + vue.toDisplayString(ReplyUserContent.value), 513), [
            [vue.vShow, ReplyUser.value !== ""]
          ]),
          vue.createElementVNode("div", {
            class: "full-toolbar-top-container",
            "data-full": isEnlarge.value
          }, [
            isEnlarge.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$7, [
              vue.createVNode(_component_el_icon, {
                size: "0.18rem",
                onClick: ToolbarHandler.handleEditorHeight
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(iconsVue.Close))
                ]),
                _: 1
              }, 8, ["onClick"]),
              vue.createVNode(_component_el_button, {
                class: "btn-publish",
                color: BtnColor.value,
                size: "small",
                round: "",
                onTouchstart: ToolbarHandler.recordOnSubmitTouchStart,
                onTouchend: ToolbarHandler.handlePostMsgClickEvent,
                disabled: vue.unref(toolbarStateStore).isEmpty
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("发表")
                ]),
                _: 1
              }, 8, ["color", "onTouchstart", "onTouchend", "disabled"])
            ])) : vue.createCommentVNode("", true),
            vue.createElementVNode("div", _hoisted_4$7, [
              vue.createVNode(Tiptap, {
                ref_key: "EditorRef",
                ref: EditorRef
              }, null, 512)
            ]),
            vue.createElementVNode("div", _hoisted_5$7, [
              !isEnlarge.value ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
                key: 0,
                class: "btn-enlarge",
                onClick: ToolbarHandler.handleEditorHeight
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(iconsVue.ArrowUp))
                ]),
                _: 1
              }, 8, ["onClick"])) : vue.createCommentVNode("", true),
              isEnlarge.value ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
                key: 1,
                class: "btn-narrow",
                onClick: ToolbarHandler.handleEditorHeight
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(iconsVue.ArrowDown))
                ]),
                _: 1
              }, 8, ["onClick"])) : vue.createCommentVNode("", true),
              vue.createVNode(_component_el_button, {
                class: "btn-publish",
                color: BtnColor.value,
                size: "small",
                round: "",
                onTouchstart: ToolbarHandler.recordOnSubmitTouchStart,
                onTouchend: ToolbarHandler.handlePostMsgClickEvent,
                disabled: vue.unref(toolbarStateStore).isEmpty
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("发表")
                ]),
                _: 1
              }, 8, ["color", "onTouchstart", "onTouchend", "disabled"])
            ])
          ], 8, _hoisted_2$8),
          vue.createVNode(_component_el_row, {
            class: "full-toolbar-bottom-container",
            justify: "space-evenly"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_el_col, { span: 8 }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("div", {
                    class: "full-toolbar-emoji-btn",
                    onClick: _cache[0] || (_cache[0] = //@ts-ignore
                    (...args) => ToolbarHandler.handleEmojiIconClick && ToolbarHandler.handleEmojiIconClick(...args))
                  }, [
                    (vue.openBlock(), vue.createElementBlock("svg", {
                      fill: currentPanelMenu.value.state && currentPanelMenu.value.name === "emoji" ? BtnColor.value : "",
                      class: "icon",
                      viewBox: "0 0 1024 1024",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg",
                      "p-id": "2299",
                      width: "20",
                      height: "20"
                    }, _hoisted_8$4, 8, _hoisted_6$6))
                  ])
                ]),
                _: 1
              }),
              vue.createCommentVNode("", true)
            ]),
            _: 1
          }),
          vue.createElementVNode("div", _hoisted_15$1, [
            currentPanelMenu.value.state && currentPanelMenu.value.name === "emoji" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_16$1, [
              vue.createElementVNode("div", _hoisted_17, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(EmojiPanel).getImageList(), (url) => {
                  return vue.openBlock(), vue.createBlock(_component_el_avatar, {
                    onClick: ($event) => ToolbarHandler.handleEmojiImageClick($event, url),
                    style: { "background": "transparent" },
                    shape: "square",
                    size: 35,
                    fit: "fill",
                    src: url
                  }, null, 8, ["onClick", "src"]);
                }), 256))
              ])
            ])) : vue.createCommentVNode("", true)
          ])
        ], 8, _hoisted_1$9);
      };
    }
  });
  const FullToolbar = /* @__PURE__ */ _export_sfc$1(_sfc_main$b, [["__scopeId", "data-v-81bfdcdf"]]);
  const usePlaceHolder = pinia$1.defineStore({
    id: "placeholder",
    state: () => ({
      /**
       * 内容为空时的placeholder
       */
      empty: "发帖千百度 文明第一步",
      /**
       * 存在内容时的placeholder
       */
      hasContent: "[草稿待发送]"
    })
  });
  const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      const accountStore = useAccountStore();
      const toolbarStore = useToolbarStore();
      const toolbarStateStore = useToolbarStateStore();
      const placeHolderStore = usePlaceHolder();
      const FullToolbarRef = vue.ref();
      const $viteApp = vue.shallowRef();
      const ElementCheckIn = {
        /**
         * 判断该元素是否是在小工具栏中
         * @param $ele 
         */
        isContainsInSmallToolbar($ele) {
          if ($ele == null) {
            return false;
          }
          let $smallToolbar = document.querySelector("#small-toolbar");
          if ($smallToolbar && $smallToolbar.contains($ele)) {
            return true;
          }
          return false;
        },
        /**
         * 判断该元素是否是在vue根元素内
         * @param $ele 
         */
        isContainsInRootApp($ele) {
          var _a3;
          if ($ele == null) {
            return false;
          }
          return Boolean((_a3 = $viteApp.value) == null ? void 0 : _a3.contains($ele));
        }
      };
      const GlobalEvent = {
        /**
         * 设置全局点击事件，点击其它地方，隐藏工具栏
         */
        setGlobalTouchClickCheck() {
          domutils.on(document, "touchstart", function(event) {
            let $click = event.target;
            if (ElementCheckIn.isContainsInSmallToolbar($click)) {
              return;
            }
            if (ElementCheckIn.isContainsInRootApp($click)) {
              return;
            }
            Main2.showSmallToolbar();
          });
        }
      };
      const Main2 = {
        /**
         * 初始化
         */
        init() {
          GlobalEvent.setGlobalTouchClickCheck();
          vue.onMounted(() => {
            $viteApp.value = document.querySelector("#vite-app");
          });
        },
        /**
         * 显示完整的工具栏，并隐藏小的工具栏
         * @param isShowEmoji 是否显示emoji组件，默认false
         */
        showFullToolbar(isShowEmoji = false) {
          if (!accountStore.isLogin) {
            TiebaReply.checkLogin();
            return;
          }
          toolbarStateStore.isShowSmallToolbar = false;
          toolbarStateStore.isShowFullToolbar = true;
          if (isShowEmoji) {
            FullToolbarRef.value.handleBottomPanelVisible("emoji", true);
          }
        },
        /**
         * 显示隐藏小的工具栏，并完整的工具栏
         */
        showSmallToolbar() {
          toolbarStateStore.isShowFullToolbar = false;
          toolbarStateStore.isShowSmallToolbar = true;
          TiebaReply.$data.isShowFullEditor.value = false;
        },
        /**
         * 更新编辑器状态
         * @param state 更新编辑器状态，判断是否输入框为空
         */
        updateContentState(state) {
          toolbarStateStore.isEmpty = state;
        }
      };
      Main2.init();
      vue.watch(
        () => TiebaComment.reply_num,
        (newValue) => {
          log.success(["update reply_num", newValue.value]);
          toolbarStore.showCommentCount = newValue.value > 999 ? "999+" : newValue.value.toString();
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.watch(
        () => TiebaComment.agree_num,
        (newValue) => {
          log.success(["update agree_num", newValue.value]);
          toolbarStore.showGoodCount = newValue.value > 999 ? "999+" : newValue.value.toString();
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.watch(
        () => toolbarStateStore.isEmpty,
        (newValue) => {
          if (newValue) {
            toolbarStore.placeholder = placeHolderStore.empty;
          } else {
            toolbarStore.placeholder = placeHolderStore.hasContent;
          }
        }
      );
      vue.watch(
        () => TiebaReply.$data.isShowFullEditor.value,
        (newValue) => {
          if (newValue) {
            Main2.showFullToolbar();
          }
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.watch(() => TiebaReply.$data.isLogin.value, (newValue) => {
        accountStore.isLogin = newValue;
      }, {
        immediate: true,
        deep: true
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.withDirectives(vue.createVNode(SmallToolbar, {
            onShowFullToolbar: Main2.showFullToolbar
          }, null, 8, ["onShowFullToolbar"]), [
            [vue.vShow, vue.unref(toolbarStateStore).isShowSmallToolbar]
          ]),
          vue.withDirectives(vue.createVNode(FullToolbar, {
            onShowSmallToolbar: Main2.showSmallToolbar,
            onUpdateContentState: Main2.updateContentState,
            ref_key: "FullToolbarRef",
            ref: FullToolbarRef
          }, null, 8, ["onShowSmallToolbar", "onUpdateContentState"]), [
            [vue.vShow, vue.unref(toolbarStateStore).isShowFullToolbar]
          ])
        ], 64);
      };
    }
  });
  const pinia = pinia$1.createPinia();
  const TiebaPost = {
    $data: {
      appName: "vite-app"
    },
    mainPostImgList: [],
    init() {
      PopsPanel.execMenu("baidu_tieba_repairErrorThread", () => {
        log.success("强制查看-帖子不存在|帖子已被删除|该帖子需要去app内查看哦");
        TiebaPost.repairErrorThread();
      });
      PopsPanel.execMenu("baidu_tieba_optimize_image_preview", () => {
        log.success("优化图片预览");
        TiebaPost.optimizeImagePreview();
      });
      PopsPanel.execMenuOnce("baidu_tieba_lzl_ban_global_back", () => {
        this.overrideVueRouterMatch();
      });
      PopsPanel.execMenu("baidu-tieba-blockCommentInput", () => {
        CommonUtils.addBlockCSS(".comment-box-wrap");
      });
      PopsPanel.execMenu("baidu_tieba_optimize_see_comments", () => {
        log.success("优化查看评论");
        TiebaComment.init();
        if (!PopsPanel.getValue("baidu-tieba-blockCommentInput")) {
          if (PopsPanel.getValue("baidu_tieba_optimize_comments_toolbar")) {
            CommonUtils.addBlockCSS(".comment-box-wrap");
            TiebaReply.waitCommentBoxWrap(() => {
              MountVue(_sfc_main$a, [pinia]);
            });
          }
        }
      });
      TiebaReply.init();
    },
    /**
     * 注册全局贴吧图片点击预览(只预览通过贴吧上传的图片，非其它图床图片)
     */
    optimizeImagePreview() {
      {
        CommonUtils.setGMResourceCSS(GM_RESOURCE_MAP.Viewer);
      }
      function viewIMG(imgList = [], imgIndex = 0) {
        log.info(["当前查看图片的索引下标：" + imgIndex]);
        log.info(["当前查看图片的列表信息：", imgList]);
        let viewerULNodeHTML = "";
        imgList.forEach((item) => {
          viewerULNodeHTML += `<li><img data-src="${item}" loading="lazy"></li>`;
        });
        let viewerULNode = domutils.createElement("ul", {
          innerHTML: viewerULNodeHTML
        });
        let viewer = new Viewer(viewerULNode, {
          inline: false,
          url: "data-src",
          zIndex: utils.getMaxZIndex() + 100,
          hidden: () => {
            viewer.destroy();
          }
        });
        if (imgIndex < 0) {
          imgIndex = 0;
          log.warn("imgIndex小于0，重置为0");
        } else if (imgIndex > imgList.length - 1) {
          imgIndex = imgList.length - 1;
          log.warn("imgIndex大于imgList最大下标，重置为imgList最大下标");
        }
        viewer.view(imgIndex);
        viewer.zoomTo(1);
        viewer.show();
        log.success("预览图片");
      }
      domutils.on(
        document,
        "click",
        "img",
        (event) => {
          let $click = event.target;
          let $clickParent = $click.parentElement;
          let imageUrl = $click.getAttribute("data-src") || $click.getAttribute("src");
          if ($clickParent.className === "viewer-canvas" || $clickParent.hasAttribute("data-viewer-action")) {
            log.info("点击的<img>属于Viewer内的元素， 不处理");
            return;
          }
          if (imageUrl == null ? void 0 : imageUrl.match(/^http(s|):\/\/(tiebapic|imgsa).baidu.com\/forum/g)) {
            utils.preventEvent(event);
            log.info(`点击图片👇`);
            log.info($click);
            if ($clickParent.className === "img-box") {
              let parentMain = $click.closest(".img-sudoku.main-img-sudoku");
              log.info(parentMain);
              if (!parentMain) {
                viewIMG([imageUrl]);
                return;
              }
              utils.preventEvent(event);
              let lazyImgList = [];
              if (TiebaPost.mainPostImgList.length) {
                TiebaPost.mainPostImgList.forEach((item) => {
                  lazyImgList.push(item.src);
                });
              } else {
                Array.from(
                  parentMain.querySelectorAll("img.img")
                ).forEach((item) => {
                  let _imgSrc_ = item.getAttribute("data-src") || item.src;
                  log.info(`获取图片: ${_imgSrc_}`);
                  let imgUrlInfo = new URL(_imgSrc_);
                  if (imgUrlInfo.pathname.startsWith("/forum/")) {
                    let picName = imgUrlInfo.pathname.split("/").pop();
                    let picIdSplit = picName.split(".");
                    if (picIdSplit) {
                      let picId = picIdSplit[0];
                      if (TiebaData.imageMap.has(picId)) {
                        _imgSrc_ = TiebaData.imageMap.get(picId);
                        log.success(["替换成高清图片", _imgSrc_]);
                      }
                    }
                  }
                  lazyImgList.push(_imgSrc_);
                });
              }
              log.info("图片列表👇");
              log.info(lazyImgList);
              viewIMG(lazyImgList, lazyImgList.indexOf(imageUrl));
            } else if ($clickParent.className === "text-content") {
              let lazyImgList = [];
              log.info($clickParent);
              $clickParent.querySelectorAll("img.BDE_Image").forEach((item) => {
                let _imgSrc_ = item.getAttribute("data-src") || item.src;
                log.info(`获取图片: ${_imgSrc_}`);
                let imgUrlInfo = new URL(_imgSrc_);
                if (imgUrlInfo.pathname.startsWith("/forum/")) {
                  let picName = imgUrlInfo.pathname.split("/").pop();
                  let picIdSplit = picName == null ? void 0 : picName.split(".");
                  if (picIdSplit) {
                    let picId = picIdSplit[0];
                    if (TiebaData.imageMap.has(picId)) {
                      _imgSrc_ = TiebaData.imageMap.get(picId);
                      log.success(["替换成高清图片", _imgSrc_]);
                    }
                  }
                }
                lazyImgList.push(_imgSrc_);
              });
              log.info("评论区图片列表👇");
              log.info(lazyImgList);
              viewIMG(lazyImgList, lazyImgList.indexOf(imageUrl));
            } else {
              viewIMG([imageUrl]);
            }
          }
        },
        {
          capture: true
        }
      );
      CommonUtils.addBlockCSS(
        /* 图片右上角的APP专享 */
        "div.img-sudoku .img-desc"
      );
      domutils.ready(function() {
        utils.waitNode("div.img-sudoku", 1e4).then(($imgSudoKu) => {
          if (!$imgSudoKu) {
            log.error("未找到元素 div.img-sudoku");
            return;
          }
          utils.waitNode("img", $imgSudoKu, 1e4).then((childImg) => {
            if (!childImg) {
              log.error("未找到元素 div.img-sudoku img");
              return;
            }
            let imgSudoKuImageElementList = $imgSudoKu.querySelectorAll("img.img");
            log.success([
              "重构主内容的图片",
              $imgSudoKu,
              imgSudoKuImageElementList
            ]);
            imgSudoKuImageElementList.forEach(($imgItem) => {
              if ($imgItem.hasAttribute("data-src")) {
                $imgItem.src = $imgItem.getAttribute("data-src");
              }
            });
            $imgSudoKu.innerHTML = $imgSudoKu.innerHTML;
          });
          VueUtils.waitVuePropToSet("div.img-sudoku", [
            {
              msg: "等待获取属性 imgs",
              check(vueObj) {
                return (vueObj == null ? void 0 : vueObj.imgs) != null;
              },
              set(vueObj) {
                TiebaPost.mainPostImgList = vueObj.imgs;
                log.success([
                  "Vue上隐藏的帖子高清图片列表",
                  TiebaPost.mainPostImgList
                ]);
              }
            }
          ]);
        });
      });
    },
    /**
     * 初始化帖子内图片信息
     */
    initPostImageInfo() {
      let forumName = TiebaCore.getCurrentForumName();
      let tid = TiebaCore.getCurrentForumPostTid();
      if (forumName && tid) {
        TieBaApi.getPictureGuide(forumName, tid).then((result) => {
          if (!result) {
            log.error("获取图片信息失败");
            return;
          }
          log.success(["请求本贴图片信息", result]);
          Object.values(result["pic_list"]).forEach((item) => {
            var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j;
            let id = ((_b = (_a3 = item == null ? void 0 : item["img"]) == null ? void 0 : _a3["original"]) == null ? void 0 : _b["id"]) || ((_d = (_c = item == null ? void 0 : item["img"]) == null ? void 0 : _c["medium"]) == null ? void 0 : _d["id"]) || ((_f = (_e = item == null ? void 0 : item["img"]) == null ? void 0 : _e["screen"]) == null ? void 0 : _f["id"]);
            let pictureUrl = ((_h = (_g = item == null ? void 0 : item["img"]) == null ? void 0 : _g["original"]) == null ? void 0 : _h["waterurl"]) || ((_j = (_i = item == null ? void 0 : item["img"]) == null ? void 0 : _i["screen"]) == null ? void 0 : _j["waterurl"]);
            if (id != null && pictureUrl != null) {
              TiebaData.imageMap.set(id, pictureUrl);
            }
          });
        });
      }
    },
    /**
     * 强制查看-帖子不存在|帖子已被删除|该帖子需要去app内查看哦
     *
     */
    repairErrorThread() {
      async function getPageInfo() {
        var _a3, _b;
        let getResp = await httpx.get(window.location.href, {
          headers: {
            "User-Agent": utils.getRandomPCUA()
          }
        });
        if (!getResp.status) {
          return;
        }
        log.info(getResp);
        let pageDOM = domutils.parseHTML(getResp.data.responseText, true, true);
        let postListFirstElement = pageDOM.querySelector("#j_p_postlist .l_post");
        if (!postListFirstElement) {
          log.error("未找到#j_p_postlist .l_post元素");
          Qmsg.error("未找到#j_p_postlist .l_post元素");
          return;
        }
        if (!postListFirstElement.hasAttribute("data-field")) {
          log.error("未找到 data-field 属性");
          Qmsg.error("未找到 data-field 属性");
          return;
        }
        let field = utils.toJSON(postListFirstElement.getAttribute("data-field"));
        let PageData = null;
        let PageDataScriptString = "";
        pageDOM.querySelectorAll("script").forEach((scriptElement) => {
          if (scriptElement.innerHTML.includes("var PageData")) {
            PageDataScriptString = `
						${PageDataScriptString}

						${scriptElement.innerHTML}

						`;
          }
        });
        if (PageDataScriptString === "") {
          log.error("未找到 PageData的script标签");
          Qmsg.error("未找到 PageData的script标签");
          return;
        }
        PageData = new Function(`
              ${PageDataScriptString}

              return PageData;
              `)();
        if (!PageData) {
          log.error("未找到 PageData");
          Qmsg.error("未找到 PageData");
          return;
        }
        let time = ((_a3 = pageDOM.querySelector(
          "#j_p_postlist .post-tail-wrap span.tail-info:nth-child(6)"
        )) == null ? void 0 : _a3.innerText) || ((_b = field == null ? void 0 : field.content) == null ? void 0 : _b.date) || "";
        if (utils.isNotNull(time)) {
          time = utils.formatToTimeStamp(time) / 1e3;
        }
        let content = pageDOM.querySelector(
          '.d_post_content_firstfloor .d_post_content[id^="post_content_"]'
        );
        return {
          field,
          PageData,
          time,
          content: content == null ? void 0 : content.innerHTML
        };
      }
      function getPostList(field, PageData, time) {
        let data = {
          agree: {
            agree_num: 0,
            disagree_num: 0
          },
          author: {
            /* author.user_id */
            id: field.author.user_id,
            /* author.user_name */
            name: field.author.user_name,
            /* author.user_nickname */
            name_show: field.author.user_nickname,
            /* author.portrait */
            portrait: field.author.portrait,
            /* author.user_nickname */
            show_nickname: field.author.user_nickname,
            type: 1,
            userhide: 0
          },
          content: [
            {
              /* content.content */
              text: field.content.content,
              /* parseInt(content.type) */
              type: parseInt(field.content.type)
            }
          ],
          floor: 1,
          game_info: [null],
          /* content.post_id */
          id: parseInt(field.content.post_id),
          is_bub: 0,
          is_voice: 0,
          is_vote: 0,
          ptype: 0,
          reply_num: PageData.thread.reply_num,
          sub_post_number: 0,
          time,
          title: PageData.thread.title,
          index: 0
        };
        let firstData = data;
        let secondData = data;
        secondData.floor = 3;
        return [firstData, secondData];
      }
      utils.waitNode(".app-view", 1e4).then(async ($appView) => {
        if (!$appView) {
          log.error("元素.app-view不存在");
          return;
        }
        await utils.waitVueByInterval(
          $appView,
          () => {
            var _a3;
            return typeof ((_a3 = VueUtils.getVue($appView)) == null ? void 0 : _a3.isErrorThread) === "boolean";
          },
          250,
          1e4
        );
        let appViewVue = VueUtils.getVue($appView);
        if (!(appViewVue && appViewVue.isErrorThread)) {
          log.info("验证参数isErrorThread：true，正常帖子");
          return;
        }
        log.warn("该帖子不能查看 修复中...");
        let loading = Qmsg.loading("该帖子不能查看 修复中...");
        let pageInfo = await getPageInfo();
        loading.close();
        if (!pageInfo) {
          return;
        }
        log.info(["获取到的页面信息", pageInfo]);
        let postList = getPostList(
          pageInfo.field,
          pageInfo.PageData,
          pageInfo.time
        );
        appViewVue.postList = postList;
        appViewVue.postAuthorId = postList[0].author.id;
        appViewVue.thread = {
          agree: {
            agree_num: 0,
            disagree_num: 0
          },
          collect_mark_pid: "0",
          collect_status: 0,
          create_time: postList[0].time,
          id: appViewVue.tid,
          is_frs_mask: 0,
          is_share_thread: 0,
          reply_num: postList[0].reply_num,
          robot_thread_type: 0,
          t_share_img: "",
          thread_type: 0,
          valid_post_num: 0,
          works_info: {}
        };
        appViewVue.forum = {
          /* PageData.forum.avatar */
          avatar: pageInfo.PageData.forum.avatar,
          /* PageData.forum.first_class */
          first_dir: pageInfo.PageData.forum.first_class || pageInfo.PageData.first_class,
          /* PageData.forum.id */
          id: pageInfo.PageData.forum.id || pageInfo.PageData.forum.forum_id || pageInfo.PageData.forum.true_forum_id,
          is_exists: 1,
          is_forbidden: 0,
          is_forum_merged: 0,
          /* PageData.forum.name */
          name: pageInfo.PageData.forum.name || pageInfo.PageData.forum.forum_name,
          /* PageData.forum.second_class */
          second_dir: pageInfo.PageData.forum.second_class || pageInfo.PageData.second_class
        };
        appViewVue.postNum = 100;
        appViewVue.isErrorThread = false;
        setTimeout(() => {
          var _a3, _b;
          domutils.append(
            document.querySelector(
              "div.app-view div.thread-main-wrapper .thread-text"
            ),
            postList[0].content[0].text || pageInfo.content
          );
          if (appViewVue.interactionNum && typeof ((_b = (_a3 = pageInfo == null ? void 0 : pageInfo.PageData) == null ? void 0 : _a3.thread) == null ? void 0 : _b.reply_num) === "number") {
            appViewVue.interactionNum.reply = pageInfo.PageData.thread.reply_num;
          }
        }, 300);
      });
    },
    /**
     * 覆盖vue的Router.matcher.match，阻止改变路由后页面__vue__属性也改变导致无法获取属性
     */
    overrideVueRouterMatch() {
      VueUtils.waitVuePropToSet(".app-view", [
        {
          msg: "等待获取 root的$router",
          check(vueObj) {
            var _a3, _b, _c;
            return typeof ((_c = (_b = (_a3 = vueObj == null ? void 0 : vueObj.$root) == null ? void 0 : _a3.$router) == null ? void 0 : _b.matcher) == null ? void 0 : _c.match) === "function";
          },
          set(vueObj) {
            let $oldRouterMatch = vueObj.$root.$router.matcher.match;
            vueObj.$root.$route;
            vueObj.$root.$router.matcher.match = function(...args) {
              args[0];
              args[1];
              log.info(["$router match", args]);
              let result = $oldRouterMatch.apply(this, args);
              return result;
            };
            log.success("成功覆盖 __vue__.$root.$router.matcher.match");
          }
        }
      ]);
    }
  };
  const TiebaHomeData = {
    async getUserData() {
      var _a3;
      let $name = document.querySelector(
        ".home_card_uname_link"
      );
      let name = new URL($name.href).searchParams.get("un");
      if (utils.isNull(name)) {
        Qmsg.error("获取用户un失败");
        return;
      }
      let $showName = document.querySelector(
        ".home_card_uname_link"
      );
      $showName.innerText;
      let $avatar = document.querySelector(
        "a.home_card_portrait_link img"
      );
      let avatar = $avatar.src;
      let $followBtn = document.querySelector(
        ".home_card_operate_icon_follow"
      );
      let isLike = $followBtn.classList.contains("icon_hide");
      let $posts = document.querySelector(
        ".home_tab .home_tab_item:nth-child(1) .home_tab_item_num"
      );
      let postsNum = parseInt($posts.innerText);
      let $forum = document.querySelector(
        ".home_tab .home_tab_item:nth-child(2) .home_tab_item_num"
      );
      let forumNum = parseInt($forum.innerText);
      let $follow = document.querySelector(
        ".home_tab .home_tab_item:nth-child(3) .home_tab_item_num"
      );
      let followNum = parseInt($follow.innerText);
      let $fans = document.querySelector(
        ".home_tab .home_tab_item:nth-child(4) .home_tab_item_num"
      );
      let fansNum = parseInt($fans.innerText);
      let pcUserInfo = await TiebaHomeData.getUserDataWithPCDoc();
      if (!pcUserInfo) {
        return;
      }
      let panelUserInfo = await TieBaApi.getUserHomeInfo({
        un: name
      });
      if (!panelUserInfo) {
        return;
      }
      let userJson = await TieBaApi.getUserJSON(name);
      if (!userJson) {
        return;
      }
      let portrait = panelUserInfo.portrait.replace(/\?t=(.+)/, "");
      let sex = 0;
      if (panelUserInfo.sex === "male") {
        sex = 1;
      } else if (panelUserInfo.sex == "female") {
        sex = 2;
      }
      let imprint = [];
      if (panelUserInfo.new_iconinfo) {
        Object.values(panelUserInfo.new_iconinfo).forEach((iconItem) => {
          if (iconItem.icon) {
            imprint.push(iconItem.icon);
          }
        });
      }
      return {
        id: userJson.id,
        tbs: userJson.tbs,
        name,
        showName: panelUserInfo.show_nickname || panelUserInfo.name_show,
        sex,
        ip: {
          location: (_a3 = pcUserInfo.ip) == null ? void 0 : _a3.location
        },
        avatar,
        portrait,
        imprint,
        is_vip: panelUserInfo.tb_vip,
        is_like: isLike,
        is_online: userJson.creator.is_online,
        level: panelUserInfo.tb_age,
        postInfo: {
          fans: fansNum,
          follow: followNum,
          forum: forumNum,
          receivedLikes: fansNum,
          post: postsNum
        },
        otherData: {
          PanelUserInfo: panelUserInfo,
          UserJSON: userJson,
          PCUserInfo: pcUserInfo
        }
      };
    },
    /**
     * 获取PC网页中的用户数据
     */
    async getUserDataWithPCDoc() {
      let getResp = await httpx.get(window.location.href, {
        headers: {
          "User-Agent": utils.getRandomPCUA()
        }
      });
      if (!getResp.status) {
        return;
      }
      let pcDoc = domutils.parseHTML(getResp.data.responseText, true, true);
      let level = "0";
      let ipLocation = "未知";
      Array.from(
        pcDoc.querySelectorAll(
          ".userinfo_userdata span"
        )
      ).forEach((spanItem) => {
        let spanText = spanItem.innerText;
        if (spanText.includes("吧龄")) {
          level = spanText.replace(/(吧龄|年|:|：)/g, "");
        } else if (spanText.includes("IP属地")) {
          ipLocation = spanText.replace(/(IP属地|:|：)/g, "");
        }
      });
      let postsList = [];
      Array.from(
        pcDoc.querySelectorAll("ul.new_list > div")
      ).forEach((listItem) => {
        let postInfo = {
          url: listItem.querySelector(
            "ul.new_list > div .title"
          ).href,
          title: listItem.querySelector(
            "ul.new_list > div .title"
          ).getAttribute("title") || listItem.querySelector(
            "ul.new_list > div .title"
          ).innerText,
          content: listItem.querySelector("ul.new_list > div .n_txt").innerHTML,
          forumName: listItem.querySelector("ul.new_list > div .n_name").getAttribute("title"),
          createTime: listItem.querySelector(
            "ul.new_list > div .n_post_time"
          ).innerText,
          /* 暂时获取不到 */
          replyNum: 0,
          mediaList: []
        };
        if (listItem.querySelector("ul.new_list > div .n_media")) {
          Array.from(
            listItem.querySelectorAll(
              "ul.new_list > div .n_media img"
            )
          ).forEach((item) => {
            let imgSrc = item.getAttribute("original") || item.src;
            if (imgSrc) {
              postInfo.mediaList.push(imgSrc);
            }
          });
        }
        postsList.push(postInfo);
      });
      return {
        level,
        ip: {
          location: ipLocation
        },
        postInfo: {
          data: postsList
        }
      };
    }
  };
  const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      let UserData = vue.ref({});
      vue.onMounted(async () => {
        let userData = await TiebaHomeData.getUserData();
        if (userData) {
          console.log("用户信息", userData);
          Object.assign(UserData.value, userData);
        } else {
          Qmsg.error("加载用户信息失败");
        }
      });
      return (_ctx, _cache) => {
        const _component_router_view = vue.resolveComponent("router-view");
        return vue.openBlock(), vue.createBlock(_component_router_view, { UserData: vue.unref(UserData) }, null, 8, ["UserData"]);
      };
    }
  });
  const _sfc_main$8 = {};
  const _hoisted_1$8 = { class: "posts-item-avatar-container" };
  const _hoisted_2$7 = { class: "posts-item-avatar" };
  const _hoisted_3$6 = { class: "posts-item-right-user-info" };
  const _hoisted_4$6 = { class: "posts-item-user-name" };
  const _hoisted_5$6 = { class: "posts-item-user-other-info" };
  const _hoisted_6$5 = { class: "posts-item-title" };
  const _hoisted_7$3 = { class: "posts-item-content" };
  const _hoisted_8$3 = { class: "posts-item-forum" };
  const _hoisted_9$1 = { class: "posts-item-footer" };
  function _sfc_render$2(_ctx, _cache) {
    const _component_el_skeleton_item = ElSkeletonItem;
    const _component_el_row = ElRow;
    const _component_el_col = ElCol;
    const _component_el_icon = ElIcon;
    const _component_el_skeleton = ElSkeleton;
    return vue.openBlock(), vue.createBlock(_component_el_skeleton, {
      class: "posts-container-item",
      animated: ""
    }, {
      template: vue.withCtx(() => [
        vue.createElementVNode("div", _hoisted_1$8, [
          vue.createVNode(_component_el_row, { style: { "align-items": "center" } }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("div", _hoisted_2$7, [
                vue.createVNode(_component_el_skeleton_item, {
                  variant: "image",
                  style: { "width": "35px", "height": "35px", "border-radius": "50%" }
                })
              ]),
              vue.createElementVNode("div", _hoisted_3$6, [
                vue.createElementVNode("div", _hoisted_4$6, [
                  vue.createVNode(_component_el_skeleton_item, {
                    variant: "text",
                    style: { "width": "80px", "height": "1rem" }
                  })
                ]),
                vue.createElementVNode("div", _hoisted_5$6, [
                  vue.createVNode(_component_el_skeleton_item, {
                    variant: "text",
                    style: { "width": "120px", "height": "0.8rem" }
                  })
                ])
              ])
            ]),
            _: 1
          })
        ]),
        vue.createElementVNode("div", _hoisted_6$5, [
          vue.createVNode(_component_el_skeleton_item, {
            variant: "text",
            style: { "width": "80%", "height": "1rem" }
          })
        ]),
        vue.createElementVNode("div", _hoisted_7$3, [
          vue.createVNode(_component_el_skeleton_item, {
            variant: "text",
            style: { "width": "100%", "height": "50px" }
          })
        ]),
        vue.createElementVNode("div", _hoisted_8$3, [
          vue.createVNode(_component_el_skeleton_item, {
            variant: "text",
            style: { "width": "100px", "height": "30px", "border-radius": "20px" }
          })
        ]),
        vue.createElementVNode("div", _hoisted_9$1, [
          vue.createVNode(_component_el_row, { justify: "space-between" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_el_col, {
                span: 6,
                class: "posts-item-footer-icon-container"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_el_skeleton_item, {
                    variant: "text",
                    style: { "width": "1rem", "height": "1rem", "border-radius": "50%" }
                  })
                ]),
                _: 1
              }),
              vue.createVNode(_component_el_col, {
                span: 6,
                class: "posts-item-footer-icon-container"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_el_icon, null, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_el_skeleton_item, {
                        variant: "text",
                        style: { "width": "1rem", "height": "1rem", "border-radius": "50%" }
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              vue.createVNode(_component_el_col, {
                span: 6,
                class: "posts-item-footer-icon-container"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_el_icon, null, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_el_skeleton_item, {
                        variant: "text",
                        style: { "width": "1rem", "height": "1rem", "border-radius": "50%" }
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ]),
      _: 1
    });
  }
  const TemplatePostsItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["render", _sfc_render$2], ["__scopeId", "data-v-7741d033"]]);
  const _withScopeId$1 = (n) => (vue.pushScopeId("data-v-f56c32ba"), n = n(), vue.popScopeId(), n);
  const _hoisted_1$7 = { class: "posts-container" };
  const _hoisted_2$6 = ["onClick"];
  const _hoisted_3$5 = { class: "posts-item-avatar-container" };
  const _hoisted_4$5 = { class: "posts-item-avatar" };
  const _hoisted_5$5 = { class: "posts-item-right-user-info" };
  const _hoisted_6$4 = { class: "posts-item-user-name" };
  const _hoisted_7$2 = { class: "posts-item-user-other-info" };
  const _hoisted_8$2 = { class: "posts-item-title" };
  const _hoisted_9 = { class: "posts-item-content" };
  const _hoisted_10 = {
    key: 0,
    class: "posts-item-media-container"
  };
  const _hoisted_11 = { class: "posts-item-forum" };
  const _hoisted_12 = { class: "posts-item-footer" };
  const _hoisted_13 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ vue.createElementVNode("svg", {
    t: "1714663858490",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ vue.createElementVNode("path", {
      d: "M422.5536 27.0336zM431.8208 25.6a25.6 25.6 0 0 1 4.096 50.8928c-1.024 0.2048-2.56 0.4096-7.5264 1.024H165.4272c-48.64 0-88.6272 42.0864-88.6272 94.6176v680.448c0 52.5312 39.9872 94.6176 88.6272 94.6176H858.624c48.64 0 88.6272-42.0864 88.6272-94.6176V451.584a25.6 25.6 0 0 1 51.2 0v400.9984c0 80.2304-62.3104 145.8176-139.8272 145.8176H165.376C87.9104 998.4 25.6 932.864 25.6 852.5824V172.1344C25.6 91.904 87.9104 26.3168 165.4272 26.3168l259.1744 0.1536A30.4128 30.4128 0 0 1 431.8208 25.6z m531.456 68.5568a24.832 24.832 0 0 1 18.432 29.3376 25.9072 25.9072 0 0 1-6.144 12.8L814.4896 363.008a25.6 25.6 0 0 1-41.7792-29.696l128.256-180.5312C634.5216 204.3904 409.088 423.6288 387.2768 688.128a25.6 25.6 0 0 1-51.0464-4.1984c22.528-273.7152 242.3808-500.8384 510.4128-571.2384l-156.0576-46.6432a25.6 25.6 0 0 1 14.6944-49.0496l257.9968 77.1584zM437.248 76.0832l-0.5632 0.2048a2.816 2.816 0 0 0 0.5632-0.2048z",
      "p-id": "6004"
    })
  ], -1));
  const _hoisted_14 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ vue.createElementVNode("svg", {
    t: "1714663974353",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ vue.createElementVNode("path", {
      d: "M157.568 751.296c-11.008-18.688-18.219-31.221-21.803-37.91A424.885 424.885 0 0 1 85.333 512c0-235.637 191.03-426.667 426.667-426.667S938.667 276.363 938.667 512 747.637 938.667 512 938.667a424.779 424.779 0 0 1-219.125-60.502A2786.56 2786.56 0 0 0 272.82 866.4l-104.405 28.48c-23.893 6.507-45.803-15.413-39.285-39.296l28.437-104.288z m65.301 3.787l-17.258 63.306 63.306-17.258a32 32 0 0 1 24.523 3.21 4515.84 4515.84 0 0 1 32.352 18.944A360.79 360.79 0 0 0 512 874.667c200.299 0 362.667-162.368 362.667-362.667S712.299 149.333 512 149.333 149.333 311.701 149.333 512c0 60.587 14.848 118.955 42.827 171.136 3.712 6.912 12.928 22.827 27.37 47.232a32 32 0 0 1 3.34 24.715z m145.995-70.774a32 32 0 1 1 40.917-49.205A159.19 159.19 0 0 0 512 672c37.888 0 73.675-13.173 102.187-36.885a32 32 0 0 1 40.917 49.216A223.179 223.179 0 0 1 512 736a223.179 223.179 0 0 1-143.136-51.69z",
      "p-id": "10588"
    })
  ], -1));
  const _hoisted_15 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ vue.createElementVNode("svg", {
    t: "1714664014034",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ vue.createElementVNode("path", {
      d: "M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z",
      "p-id": "11599"
    })
  ], -1));
  const _hoisted_16 = {
    key: 2,
    style: { "text-align": "center" }
  };
  const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
    __name: "Posts",
    props: {
      UserData: {}
    },
    setup(__props) {
      const props = __props;
      let postsInfoList = vue.ref([]);
      let showIsLoading = vue.ref(true);
      let isAsyncLoadEnd = vue.ref(false);
      let showLoadingEnd = vue.ref(false);
      let $loading = vue.ref(null);
      let pageNumber = vue.ref(1);
      let observe = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadMore();
          }
        });
      }, {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: 0.2
      });
      const stopWatchLoading = vue.watch($loading, () => {
        if ($loading.value) {
          observe.observe($loading.value.$el);
        }
      });
      const cancleLoadMoreObserve = () => {
        stopWatchLoading();
        observe.disconnect();
        showIsLoading.value = false;
        showLoadingEnd.value = true;
        log.success("移除滚动监听");
      };
      const handlePostItemClick = (postsItem) => {
        window.open(postsItem.url, "_blank");
      };
      const handlePostForumButtonClick = function(postsItem) {
        let url = TiebaUrlApi.getForum(postsItem.forumName);
        window.open(url, "_blank");
      };
      const loadMore = async () => {
        var _a3, _b;
        showIsLoading.value = false;
        let isFirstLoad = pageNumber.value === 1;
        if (isFirstLoad) {
          isAsyncLoadEnd.value = false;
          postsInfoList.value = [];
        }
        let userPostsList = await TieBaApi.getUserPosts(props.UserData.name, pageNumber.value);
        log.info(["获取到的帖子", userPostsList]);
        if (userPostsList) {
          if (isFirstLoad && userPostsList.data.length === 0) {
            let userPCPostsList = await TiebaHomeData.getUserDataWithPCDoc();
            log.info(["获取PC个人主页的帖子", userPCPostsList]);
            if ((_a3 = userPCPostsList == null ? void 0 : userPCPostsList.postInfo) == null ? void 0 : _a3.data) {
              postsInfoList.value = postsInfoList.value.concat(userPCPostsList.postInfo.data);
            }
          } else if (userPostsList.data) {
            postsInfoList.value = postsInfoList.value.concat(userPostsList.data);
            pageNumber.value++;
          }
          showIsLoading.value = false;
          if (!userPostsList.has_more) {
            cancleLoadMoreObserve();
          }
        } else {
          let userPCPostsList = await TiebaHomeData.getUserDataWithPCDoc();
          log.info(["获取PC个人主页的帖子", userPCPostsList]);
          if ((_b = userPCPostsList == null ? void 0 : userPCPostsList.postInfo) == null ? void 0 : _b.data) {
            postsInfoList.value = postsInfoList.value.concat(userPCPostsList.postInfo.data);
          }
          cancleLoadMoreObserve();
        }
        if (isFirstLoad) {
          isAsyncLoadEnd.value = false;
        }
      };
      return (_ctx, _cache) => {
        const _component_el_empty = ElEmpty;
        const _component_el_avatar = ElAvatar;
        const _component_el_text = ElText;
        const _component_el_row = ElRow;
        const _component_el_image = ElImage;
        const _component_el_button = ElButton;
        const _component_el_icon = ElIcon;
        const _component_el_col = ElCol;
        const _component_el_backtop = ElBacktop;
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("div", _hoisted_1$7, [
            vue.unref(isAsyncLoadEnd) && vue.unref(postsInfoList).length === 0 ? (vue.openBlock(), vue.createBlock(_component_el_empty, {
              key: 0,
              description: "帖子还在酝酿中"
            })) : vue.createCommentVNode("", true),
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(postsInfoList), (postItem) => {
              return vue.openBlock(), vue.createElementBlock("div", {
                class: "posts-container-item",
                onClick: ($event) => handlePostItemClick(postItem)
              }, [
                vue.createElementVNode("div", _hoisted_3$5, [
                  vue.createVNode(_component_el_row, { style: { "align-items": "center" } }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("div", _hoisted_4$5, [
                        vue.createVNode(_component_el_avatar, {
                          size: 35,
                          src: _ctx.UserData.avatar
                        }, null, 8, ["src"])
                      ]),
                      vue.createElementVNode("div", _hoisted_5$5, [
                        vue.createElementVNode("div", _hoisted_6$4, vue.toDisplayString(_ctx.UserData.showName), 1),
                        vue.createElementVNode("div", _hoisted_7$2, [
                          vue.createVNode(_component_el_text, {
                            type: "info",
                            size: "small"
                          }, {
                            default: vue.withCtx(() => [
                              vue.createTextVNode(vue.toDisplayString(postItem.forumName) + "吧 " + vue.toDisplayString(postItem.createTime), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                vue.createElementVNode("div", _hoisted_8$2, vue.toDisplayString(postItem.title), 1),
                vue.createElementVNode("div", _hoisted_9, vue.toDisplayString(postItem.content), 1),
                postItem.mediaList.length > 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_10, [
                  vue.createVNode(_component_el_row, {
                    onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
                    }, ["stop"]))
                  }, {
                    default: vue.withCtx(() => [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(postItem.mediaList, (media, index) => {
                        return vue.openBlock(), vue.createBlock(_component_el_image, {
                          style: { "width": "100px", "height": "100px" },
                          src: media,
                          "zoom-rate": 1,
                          "max-scale": 7,
                          "min-scale": 0.2,
                          "preview-src-list": postItem.mediaList,
                          "initial-index": index,
                          fit: "cover"
                        }, null, 8, ["src", "preview-src-list", "initial-index"]);
                      }), 256))
                    ]),
                    _: 2
                  }, 1024)
                ])) : vue.createCommentVNode("", true),
                vue.createElementVNode("div", _hoisted_11, [
                  vue.createVNode(_component_el_button, {
                    icon: vue.unref(iconsVue.ChromeFilled),
                    size: "small",
                    style: { "color": "#614FC0", "border-color": "#614FC0" },
                    plain: "",
                    round: "",
                    onClick: [
                      ($event) => handlePostForumButtonClick(postItem),
                      _cache[1] || (_cache[1] = vue.withModifiers(() => {
                      }, ["stop"]))
                    ]
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(postItem.forumName) + "吧", 1)
                    ]),
                    _: 2
                  }, 1032, ["icon", "onClick"])
                ]),
                vue.createElementVNode("div", _hoisted_12, [
                  vue.createVNode(_component_el_row, { justify: "space-between" }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_el_col, {
                        span: 6,
                        class: "posts-item-footer-icon-container"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_el_icon, null, {
                            default: vue.withCtx(() => [
                              _hoisted_13
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      vue.createVNode(_component_el_col, {
                        span: 6,
                        class: "posts-item-footer-icon-container"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_el_icon, null, {
                            default: vue.withCtx(() => [
                              _hoisted_14
                            ]),
                            _: 1
                          }),
                          vue.createTextVNode(" " + vue.toDisplayString(postItem.replyNum), 1)
                        ]),
                        _: 2
                      }, 1024),
                      vue.createVNode(_component_el_col, {
                        span: 6,
                        class: "posts-item-footer-icon-container"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_el_icon, null, {
                            default: vue.withCtx(() => [
                              _hoisted_15
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1024)
                ])
              ], 8, _hoisted_2$6);
            }), 256)),
            vue.unref(showIsLoading) ? (vue.openBlock(), vue.createBlock(TemplatePostsItem, {
              key: 1,
              ref_key: "$loading",
              ref: $loading
            }, null, 512)) : vue.createCommentVNode("", true),
            vue.unref(showLoadingEnd) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_16, "已经到底了~")) : vue.createCommentVNode("", true)
          ]),
          vue.createVNode(_component_el_backtop, {
            right: 10,
            bottom: 50
          })
        ], 64);
      };
    }
  });
  const Posts = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["__scopeId", "data-v-f56c32ba"]]);
  const _sfc_main$6 = {};
  const _hoisted_1$6 = { style: { "padding": "10px" } };
  const _hoisted_2$5 = { style: { "display": "flex", "align-items": "center", "justify-items": "space-between", "justify-content": "space-between" } };
  function _sfc_render$1(_ctx, _cache) {
    const _component_el_skeleton_item = ElSkeletonItem;
    const _component_el_skeleton = ElSkeleton;
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(3, (i) => {
      return vue.createVNode(_component_el_skeleton, {
        style: { "background-color": "#ffffff" },
        animated: ""
      }, {
        template: vue.withCtx(() => [
          vue.createElementVNode("div", _hoisted_1$6, [
            vue.createElementVNode("div", _hoisted_2$5, [
              vue.createVNode(_component_el_skeleton_item, {
                variant: "text",
                style: { "width": "calc( 50% - 5px )", "height": "35px" }
              }),
              vue.createVNode(_component_el_skeleton_item, {
                variant: "text",
                style: { "width": "calc( 50% - 5px )", "height": "35px" }
              })
            ])
          ])
        ]),
        _: 1
      });
    }), 64);
  }
  const TemplateFollowForum = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["render", _sfc_render$1]]);
  const TiebaHomeApi = {
    /**
     * 获取用户的关注的吧信息
     * User-Agent默认为移动端
     * @param un 用户名，不是show_nickname|nameshow
     * @param pn 第xx页
     */
    async getConcern(un, pn = 1) {
      let gbkEncoder = new utils.GBKEncoder();
      un = gbkEncoder.encode(un);
      let getResp = await httpx.get(`https://tieba.baidu.com/home/concern?un=${un}&is_ajax=1&lp=home_main_concern_more&pn=${pn}`, {
        fetch: true
      });
      if (!getResp.status) {
        return;
      }
      let data = utils.toJSON(getResp.data.responseText);
      if (data.no != 0) {
        return;
      }
      if (utils.isNull(data.data.content)) {
        return;
      }
      let $doc = domutils.parseHTML(data.data.content, true, true);
      let result = [];
      Array.from($doc.querySelectorAll(".home_concern_forum_item")).forEach(($li) => {
        let $url = $li.querySelector("a.home_concern_forum_item_link");
        let url = $url.href;
        let forumName = $url.getAttribute("data-start-app-param");
        let $level = $li.querySelector(".home_concern_forum_info .level");
        let level = parseInt($level.innerText);
        if (isNaN(level)) {
          level = 0;
        }
        let $intro = $li.querySelector(".home_concern_forum_intro");
        let intro = $intro.innerText;
        result.push({
          url,
          forumName,
          level,
          intro
        });
      });
      return {
        data: result,
        has_more: data.data.page.has_more
      };
    },
    /**
     * 获取用户关注的人
     * @param un 用户名，不是show_nickname|nameshow
     * @param offset 根据page_size的偏移，一般是page_size的n倍
     * @param page_size 限制返回的数量
     * @returns 
     */
    async getFollow(un, offset = 12, page_size = 12) {
      let getResp = await httpx.get(`https://tieba.baidu.com/mo/q/follow?un=${un}&lp=home_main_follow_more&is_ajax=1&offset=${offset}&rn=${page_size}`, {
        fetch: true
      });
      if (!getResp.status) {
        return;
      }
      let data = utils.toJSON(getResp.data.responseText);
      if (data.no != 0) {
        return;
      }
      if (utils.isNull(data.data.content)) {
        return;
      }
      let $doc = domutils.parseHTML(data.data.content, true, true);
      let result = [];
      Array.from($doc.querySelectorAll(".uloader_grid_item_user")).forEach(($url) => {
        let url = $url.href;
        let $userName = $url.querySelector(".uloader_user_name");
        let userName = $userName.innerText;
        let $avatar = $url.querySelector(".uloader_user_portrait");
        let avatar = $avatar.style.backgroundImage.replace(/^url\("/, "").replace(/"\)$/, "");
        let portrait = new URL(avatar).pathname.split("/").pop();
        result.push({
          url,
          userName,
          avatar,
          portrait
        });
      });
      return {
        data: result,
        has_next: data.data.page.has_next
      };
    },
    /**
     * 获取用户的粉丝
     * @param un 用户名，不是show_nickname|nameshow
     * @param offset 根据page_size的偏移，一般是page_size的n倍
     * @param page_size 限制返回的数量
     * @returns 
     */
    async getFans(un, offset = 12, page_size = 12) {
      let getResp = await httpx.get(`https://tieba.baidu.com/mo/q/fans?un=${un}&lp=home_main_fans_more&is_ajax=1&offset=${offset}&rn=${page_size}`, {
        fetch: true
      });
      if (!getResp.status) {
        return;
      }
      let data = utils.toJSON(getResp.data.responseText);
      if (data.no != 0) {
        return;
      }
      if (utils.isNull(data.data.content)) {
        return;
      }
      let $doc = domutils.parseHTML(data.data.content, true, true);
      let result = [];
      Array.from($doc.querySelectorAll(".uloader_grid_item_user")).forEach(($url) => {
        let url = $url.href;
        let $userName = $url.querySelector(".uloader_user_name");
        let userName = $userName.innerText;
        let $avatar = $url.querySelector(".uloader_user_portrait");
        let avatar = $avatar.style.backgroundImage.replace(/^url\("/, "").replace(/"\)$/, "");
        let portrait = new URL(avatar).pathname.split("/").pop();
        result.push({
          url,
          userName,
          avatar,
          portrait
        });
      });
      return {
        data: result,
        has_next: data.data.page.has_next
      };
    }
  };
  const _hoisted_1$5 = { class: "follow-forum-container" };
  const _hoisted_2$4 = ["onClick"];
  const _hoisted_3$4 = { class: "follow-forum-item-right-container" };
  const _hoisted_4$4 = { class: "follow-forum-item-name" };
  const _hoisted_5$4 = ["data-level"];
  const _hoisted_6$3 = {
    key: 2,
    style: { "text-align": "center" }
  };
  const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
    __name: "FollowForum",
    props: {
      UserData: {}
    },
    setup(__props) {
      vue.useCssVars((_ctx) => ({
        "5ff1c432": vue.unref(levelBgColor),
        "77e5956c": vue.unref(levelColor),
        "f42fba10": vue.unref(levelColor0_3),
        "f42f9bfc": vue.unref(levelColor4_9),
        "a736ab50": vue.unref(levelColor10_15),
        "a73136d6": vue.unref(levelColor16_18)
      }));
      const props = __props;
      let showIsLoading = vue.ref(true);
      let isAsyncLoadEnd = vue.ref(false);
      let isLoadingEnd = vue.ref(false);
      let $loading = vue.ref(null);
      let pageNumber = vue.ref(1);
      let followForum = vue.ref([]);
      let isEmpty = vue.ref(false);
      let colorConversion = new utils.ColorConversion();
      let colorLightLevel = 0.7;
      let levelColor = vue.ref("#ffffff");
      let levelColor0_3 = vue.ref("#5dc7a0");
      let levelColor4_9 = vue.ref("#6BA7FF");
      let levelColor10_15 = vue.ref("#F9B341");
      let levelColor16_18 = vue.ref("#FBA71A");
      let levelBgColor = vue.ref("#000000");
      vue.ref(
        colorConversion.getLightColor(levelColor0_3.value, colorLightLevel)
      );
      vue.ref(
        colorConversion.getLightColor(levelColor4_9.value, colorLightLevel)
      );
      vue.ref(
        colorConversion.getLightColor(levelColor10_15.value, colorLightLevel)
      );
      vue.ref(
        colorConversion.getLightColor(levelColor16_18.value, colorLightLevel)
      );
      let observe = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadMore();
            }
          });
        },
        {
          root: null,
          rootMargin: "0px 0px 0px 0px",
          threshold: 0.2
        }
      );
      const stopWatchLoading = vue.watch($loading, () => {
        if ($loading.value) {
          if ($loading.value.$el instanceof Element) {
            observe.observe($loading.value.$el);
          } else if ($loading.value.$el.nextElementSibling instanceof Element) {
            observe.observe($loading.value.$el.nextElementSibling);
          }
        }
      });
      const cancleLoadMoreObserve = () => {
        stopWatchLoading();
        observe.disconnect();
        showIsLoading.value = false;
        isLoadingEnd.value = true;
        log.info(["移除滚动监听"]);
      };
      const handleForumItemClick = (forumItem) => {
        window.open(forumItem.url, "_blank");
      };
      const loadMore = async () => {
        showIsLoading.value = false;
        let isFirstLoad = pageNumber.value === 1;
        if (isFirstLoad) {
          isAsyncLoadEnd.value = false;
          followForum.value = [];
        }
        let concernData = await TiebaHomeApi.getConcern(
          props.UserData.name,
          pageNumber.value
        );
        showIsLoading.value = true;
        if (concernData) {
          if (concernData.data) {
            followForum.value = followForum.value.concat(concernData.data);
            pageNumber.value++;
          }
          if (!concernData.has_more) {
            cancleLoadMoreObserve();
          }
        } else {
          log.info(["获取关注的吧数据失败"]);
          if (isFirstLoad) {
            isAsyncLoadEnd.value = true;
            cancleLoadMoreObserve();
            isEmpty.value = true;
            isLoadingEnd.value = false;
          }
        }
        log.info(["获取到的关注的吧", concernData]);
      };
      return (_ctx, _cache) => {
        const _component_el_empty = ElEmpty;
        const _component_el_avatar = ElAvatar;
        const _component_el_text = ElText;
        const _component_el_row = ElRow;
        const _component_el_backtop = ElBacktop;
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [
          vue.unref(isAsyncLoadEnd) && vue.unref(followForum).length === 0 ? (vue.openBlock(), vue.createBlock(_component_el_empty, {
            key: 0,
            description: "这位老铁已将关注的吧设为隐藏"
          })) : vue.createCommentVNode("", true),
          !vue.unref(isEmpty) ? (vue.openBlock(), vue.createBlock(_component_el_row, {
            key: 1,
            class: "follow-forum-list-container"
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(followForum), (item, index) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  class: "follow-forum-item",
                  span: 24,
                  key: index,
                  onClick: ($event) => handleForumItemClick(item)
                }, [
                  vue.createVNode(_component_el_avatar, {
                    class: "follow-forum-avatar",
                    size: 35,
                    src: "//tb2.bdstatic.com/tb/mobile/sglobal/layout/classic/icon/apple-touch-icon-144x144-precomposed_08a91b3.png"
                  }),
                  vue.createElementVNode("div", _hoisted_3$4, [
                    vue.createElementVNode("div", _hoisted_4$4, vue.toDisplayString(item.forumName), 1),
                    vue.createVNode(_component_el_text, {
                      class: "follow-forum-item-info",
                      type: "info",
                      size: "small",
                      truncated: ""
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(vue.toDisplayString(item.intro), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  vue.createElementVNode("span", {
                    class: "follow-forum-item-level",
                    "data-level": item.level
                  }, vue.toDisplayString(item.level), 9, _hoisted_5$4)
                ], 8, _hoisted_2$4);
              }), 128)),
              vue.unref(showIsLoading) ? (vue.openBlock(), vue.createBlock(TemplateFollowForum, {
                key: 0,
                ref_key: "$loading",
                ref: $loading
              }, null, 512)) : vue.createCommentVNode("", true)
            ]),
            _: 1
          })) : vue.createCommentVNode("", true),
          vue.unref(isLoadingEnd) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_6$3, "已经到底了~")) : vue.createCommentVNode("", true),
          vue.createVNode(_component_el_backtop, {
            right: 10,
            bottom: 50
          })
        ]);
      };
    }
  });
  const FollowForum = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["__scopeId", "data-v-01b2cebf"]]);
  const _withScopeId = (n) => (vue.pushScopeId("data-v-f1356a71"), n = n(), vue.popScopeId(), n);
  const _hoisted_1$4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("div", { class: "user-info-bg" }, [
    /* @__PURE__ */ vue.createElementVNode("div", { class: "user-info-bg-main" })
  ], -1));
  const _hoisted_2$3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("div", { class: "user-avatar-top-background" }, null, -1));
  const _hoisted_3$3 = ["data-sex"];
  const _hoisted_4$3 = {
    key: 1,
    style: { "display": "flex", "align-items": "center", "text-wrap": "nowrap" }
  };
  const _hoisted_5$3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("div", null, "Ta的印记", -1));
  const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
    __name: "Home",
    props: {
      UserData: {}
    },
    setup(__props) {
      const props = __props;
      let loadStatus = vue.ref(false);
      let activeName = vue.ref("帖子");
      const copyIdEvent = () => {
        utils.setClip(props.UserData.id).then((result) => {
          if (result) {
            Qmsg.success("复制成功");
          } else {
            Qmsg.error("复制失败");
          }
        });
      };
      const changeFollowBtnStatus = (time = 5e3) => {
        let interval = setInterval(() => {
          if (document.querySelector(".j_home_card_request_card:has(.icon_hide)")) {
            props.UserData.is_like = true;
          } else {
            props.UserData.is_like = false;
          }
        }, 200);
        setTimeout(() => {
          clearInterval(interval);
        }, time);
      };
      const clickFollowBtnEvent = () => {
        let selector = ".j_home_card_request_card:not(:has(.icon_hide))";
        let $btn = document.querySelector(selector);
        $btn.click();
        changeFollowBtnStatus();
      };
      const clickCancelFollowBtnEvent = () => {
        let selector = ".j_home_card_request_card:has(.icon_hide)";
        let $btn = document.querySelector(selector);
        $btn.click();
        utils.waitNode(".dia_wrapper").then(($ele) => {
          domutils.on(
            $ele,
            "click",
            ".dia_btnwrapper a",
            function() {
              changeFollowBtnStatus();
            },
            {
              capture: true
            }
          );
        });
      };
      const clickMessageBtnEvent = () => {
        document.querySelector(".j_home_card_chat ").click();
      };
      const clickIpHelpEvent = () => {
        ElementPlus.ElMessage({
          // @ts-ignore
          showClose: false,
          message: "IP属地以运营商信息为准，如有问题可咨询客服",
          center: true,
          plain: true,
          offset: 0,
          duration: 3500,
          type: "",
          customClass: "pops-ip-location-help"
        });
      };
      const clickReceivedLikesEvent = () => {
        var _a3;
        ElementPlus.ElMessageBox.confirm(
          `${props.UserData.showName}共获得吧友${(_a3 = props.UserData.postInfo) == null ? void 0 : _a3.receivedLikes}次点赞`,
          "",
          {
            showClose: false,
            showCancelButton: false,
            center: true,
            roundButton: true,
            confirmButtonText: "知道了"
          }
        );
      };
      const aboutUserEvent = function() {
        TiebaRouter.router.push({
          path: "/about"
        });
      };
      const clickFollowEvent = () => {
        TiebaRouter.router.push({
          path: "/follow"
        });
      };
      const clickFansEvent = () => {
        TiebaRouter.router.push({
          path: "/fans"
        });
      };
      vue.watch(
        props.UserData,
        () => {
          var _a3;
          if ((_a3 = props.UserData.postInfo) == null ? void 0 : _a3.post) {
            loadStatus.value = true;
          }
        },
        {
          deep: true,
          immediate: true
        }
      );
      return (_ctx, _cache) => {
        const _component_el_avatar = ElAvatar;
        const _component_el_col = ElCol;
        const _component_el_button = ElButton;
        const _component_el_text = ElText;
        const _component_el_divider = ElDivider;
        const _component_el_icon = ElIcon;
        const _component_el_link = ElLink;
        const _component_el_space = ElSpace;
        const _component_el_tab_pane = ElTabPane;
        const _component_el_tabs = ElTabs;
        const _component_el_main = ElMain;
        const _component_el_container = ElContainer;
        return vue.openBlock(), vue.createBlock(_component_el_container, { id: "main" }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_el_main, { style: { "padding": "0" } }, {
              default: vue.withCtx(() => [
                _hoisted_1$4,
                vue.createVNode(vue.unref(ElementPlus.ElRow), { justify: "center" }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_el_col, null, {
                      default: vue.withCtx(() => [
                        _hoisted_2$3,
                        vue.createVNode(vue.unref(ElementPlus.ElRow), {
                          class: "user-info-container",
                          gutter: 20,
                          align: "bottom",
                          style: { "margin": "0px 0px" }
                        }, {
                          default: vue.withCtx(() => [
                            vue.createVNode(_component_el_col, {
                              span: 12,
                              style: { "padding": "0" }
                            }, {
                              default: vue.withCtx(() => [
                                vue.createVNode(_component_el_avatar, {
                                  src: props.UserData.avatar,
                                  size: 90
                                }, null, 8, ["src"])
                              ]),
                              _: 1
                            }),
                            vue.createVNode(_component_el_col, {
                              span: 12,
                              style: { "padding": "0" }
                            }, {
                              default: vue.withCtx(() => [
                                vue.createVNode(vue.unref(ElementPlus.ElRow), {
                                  justify: "end",
                                  style: { "flex-wrap": "nowrap" }
                                }, {
                                  default: vue.withCtx(() => [
                                    !props.UserData.is_like ? (vue.openBlock(), vue.createBlock(_component_el_button, {
                                      key: 0,
                                      class: "user-handler-follow-btn",
                                      color: "#7558FE",
                                      round: "",
                                      icon: vue.unref(iconsVue.Plus),
                                      onClick: clickFollowBtnEvent
                                    }, {
                                      default: vue.withCtx(() => [
                                        vue.createTextVNode("关注")
                                      ]),
                                      _: 1
                                    }, 8, ["icon"])) : vue.createCommentVNode("", true),
                                    props.UserData.is_like ? (vue.openBlock(), vue.createBlock(_component_el_button, {
                                      key: 1,
                                      color: "#7558FE",
                                      class: "user-handler-cancel-follow-btn",
                                      plain: "",
                                      round: "",
                                      icon: vue.unref(iconsVue.Check),
                                      onClick: clickCancelFollowBtnEvent
                                    }, {
                                      default: vue.withCtx(() => [
                                        vue.createTextVNode("取消关注")
                                      ]),
                                      _: 1
                                    }, 8, ["icon"])) : vue.createCommentVNode("", true),
                                    vue.createVNode(_component_el_button, {
                                      color: "#7558FE",
                                      class: "user-handler-private-message-btn",
                                      plain: !props.UserData.is_like,
                                      round: "",
                                      icon: vue.unref(iconsVue.Message),
                                      onClick: clickMessageBtnEvent
                                    }, {
                                      default: vue.withCtx(() => [
                                        vue.createTextVNode("私信")
                                      ]),
                                      _: 1
                                    }, 8, ["plain", "icon"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_el_space, {
                  class: "top-container",
                  size: 10,
                  direction: "vertical",
                  alignment: "stretch"
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(vue.unref(ElementPlus.ElRow), null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_el_text, {
                          size: "large",
                          class: vue.normalizeClass("big-text"),
                          style: { "display": "flex", "align-items": "center" }
                        }, {
                          default: vue.withCtx(() => {
                            var _a3, _b, _c, _d, _e;
                            return [
                              vue.createTextVNode(vue.toDisplayString(props.UserData.showName) + " ", 1),
                              ((_c = (_b = (_a3 = props.UserData.otherData) == null ? void 0 : _a3.PanelUserInfo) == null ? void 0 : _b.vipInfo) == null ? void 0 : _c.icon_url) ? (vue.openBlock(), vue.createBlock(_component_el_avatar, {
                                key: 0,
                                size: 14,
                                src: (_e = (_d = props.UserData.otherData) == null ? void 0 : _d.PanelUserInfo) == null ? void 0 : _e.vipInfo.icon_url,
                                shape: "square",
                                style: { "margin": "0px 5px" }
                              }, null, 8, ["src"])) : vue.createCommentVNode("", true)
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    vue.createVNode(vue.unref(ElementPlus.ElRow), { style: { "color": "#909399" } }, {
                      default: vue.withCtx(() => {
                        var _a3;
                        return [
                          vue.createElementVNode("span", {
                            "data-sex": props.UserData.sex
                          }, vue.toDisplayString(props.UserData.sex == 0 ? "保密" : props.UserData.sex == 1 ? "♂" : "♀"), 9, _hoisted_3$3),
                          vue.createVNode(_component_el_divider, {
                            direction: "vertical",
                            "border-style": "dashed"
                          }),
                          vue.createVNode(_component_el_link, {
                            underline: false,
                            onClick: copyIdEvent
                          }, {
                            default: vue.withCtx(() => [
                              vue.createTextVNode(" ID " + vue.toDisplayString(props.UserData.id) + " ", 1),
                              vue.createVNode(_component_el_icon, null, {
                                default: vue.withCtx(() => [
                                  vue.createVNode(vue.unref(iconsVue.CopyDocument))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          vue.createVNode(_component_el_divider, {
                            direction: "vertical",
                            "border-style": "dashed"
                          }),
                          vue.createElementVNode("span", null, " 吧龄" + vue.toDisplayString(props.UserData.level) + "年 ", 1),
                          vue.unref(utils).isNotNull(props.UserData.ip) ? (vue.openBlock(), vue.createBlock(_component_el_divider, {
                            key: 0,
                            direction: "vertical",
                            "border-style": "dashed"
                          })) : vue.createCommentVNode("", true),
                          vue.unref(utils).isNotNull(props.UserData.ip) ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4$3, [
                            vue.createTextVNode(vue.toDisplayString((_a3 = props.UserData.ip) == null ? void 0 : _a3.location) + " ", 1),
                            vue.createVNode(_component_el_icon, { onClick: clickIpHelpEvent }, {
                              default: vue.withCtx(() => [
                                vue.createVNode(vue.unref(iconsVue.QuestionFilled))
                              ]),
                              _: 1
                            })
                          ])) : vue.createCommentVNode("", true)
                        ];
                      }),
                      _: 1
                    }),
                    vue.createVNode(vue.unref(ElementPlus.ElRow), {
                      justify: "space-between",
                      style: { "color": "#909399" },
                      onClick: aboutUserEvent
                    }, {
                      default: vue.withCtx(() => [
                        vue.createElementVNode("div", null, vue.toDisplayString(vue.unref(utils).isNull(props.UserData.personalSignature) ? "该用户还没有填写签名" : props.UserData.personalSignature), 1),
                        vue.createVNode(_component_el_text, { type: "info" }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode(" 关于Ta "),
                            vue.createVNode(_component_el_icon, null, {
                              default: vue.withCtx(() => [
                                vue.createVNode(vue.unref(iconsVue.ArrowRight))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    vue.createVNode(vue.unref(ElementPlus.ElRow), null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_el_space, { size: 25 }, {
                          default: vue.withCtx(() => [
                            vue.createVNode(_component_el_col, { onClick: clickReceivedLikesEvent }, {
                              default: vue.withCtx(() => [
                                vue.createVNode(_component_el_text, {
                                  size: "large",
                                  class: vue.normalizeClass("big-text"),
                                  style: { "margin-right": "0.5rem" }
                                }, {
                                  default: vue.withCtx(() => {
                                    var _a3;
                                    return [
                                      vue.createTextVNode(vue.toDisplayString((_a3 = props.UserData.postInfo) == null ? void 0 : _a3.receivedLikes), 1)
                                    ];
                                  }),
                                  _: 1
                                }),
                                vue.createVNode(_component_el_text, { type: "info" }, {
                                  default: vue.withCtx(() => [
                                    vue.createTextVNode("获赞")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            vue.createVNode(_component_el_col, { onClick: clickFollowEvent }, {
                              default: vue.withCtx(() => [
                                vue.createVNode(_component_el_text, {
                                  size: "large",
                                  class: vue.normalizeClass("big-text"),
                                  style: { "margin-right": "0.5rem" }
                                }, {
                                  default: vue.withCtx(() => {
                                    var _a3;
                                    return [
                                      vue.createTextVNode(vue.toDisplayString((_a3 = props.UserData.postInfo) == null ? void 0 : _a3.follow), 1)
                                    ];
                                  }),
                                  _: 1
                                }),
                                vue.createVNode(_component_el_text, { type: "info" }, {
                                  default: vue.withCtx(() => [
                                    vue.createTextVNode("关注")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            vue.createVNode(_component_el_col, { onClick: clickFansEvent }, {
                              default: vue.withCtx(() => [
                                vue.createVNode(_component_el_text, {
                                  size: "large",
                                  class: vue.normalizeClass("big-text"),
                                  style: { "margin-right": "0.5rem" }
                                }, {
                                  default: vue.withCtx(() => {
                                    var _a3;
                                    return [
                                      vue.createTextVNode(vue.toDisplayString((_a3 = props.UserData.postInfo) == null ? void 0 : _a3.fans), 1)
                                    ];
                                  }),
                                  _: 1
                                }),
                                vue.createVNode(_component_el_text, { type: "info" }, {
                                  default: vue.withCtx(() => [
                                    vue.createTextVNode("粉丝")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_el_divider, { style: { "margin": "0" } }),
                    vue.createVNode(vue.unref(ElementPlus.ElRow), {
                      justify: "space-between",
                      style: { "align-items": "center" }
                    }, {
                      default: vue.withCtx(() => [
                        _hoisted_5$3,
                        vue.createElementVNode("div", null, [
                          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(props.UserData.imprint, (imprintSrc) => {
                            return vue.openBlock(), vue.createBlock(_component_el_avatar, {
                              size: 20,
                              src: imprintSrc
                            }, null, 8, ["src"]);
                          }), 256)),
                          vue.createVNode(_component_el_icon, null, {
                            default: vue.withCtx(() => [
                              vue.createVNode(vue.unref(iconsVue.ArrowRight))
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_el_divider, { style: { "margin": "0" } }),
                    vue.createVNode(vue.unref(ElementPlus.ElRow), null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_el_tabs, {
                          modelValue: vue.unref(activeName),
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(activeName) ? activeName.value = $event : activeName = $event),
                          class: "user-info-tabs"
                        }, {
                          default: vue.withCtx(() => {
                            var _a3, _b, _c, _d;
                            return [
                              vue.createVNode(_component_el_tab_pane, {
                                label: "帖子" + (((_a3 = props.UserData.postInfo) == null ? void 0 : _a3.post) != null ? " " + ((_b = props.UserData.postInfo) == null ? void 0 : _b.post) : ""),
                                name: "帖子"
                              }, null, 8, ["label"]),
                              vue.createVNode(_component_el_tab_pane, {
                                label: "关注的吧" + (((_c = props.UserData.postInfo) == null ? void 0 : _c.forum) != null ? " " + ((_d = props.UserData.postInfo) == null ? void 0 : _d.forum) : ""),
                                name: "关注的吧"
                              }, null, 8, ["label"])
                            ];
                          }),
                          _: 1
                        }, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                vue.unref(activeName) === "帖子" && vue.unref(loadStatus) ? (vue.openBlock(), vue.createBlock(Posts, {
                  key: 0,
                  UserData: props.UserData
                }, null, 8, ["UserData"])) : vue.createCommentVNode("", true),
                vue.unref(activeName) === "关注的吧" && vue.unref(loadStatus) ? (vue.openBlock(), vue.createBlock(FollowForum, {
                  key: 1,
                  UserData: props.UserData
                }, null, 8, ["UserData"])) : vue.createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        });
      };
    }
  });
  const Home = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["__scopeId", "data-v-f1356a71"]]);
  const _hoisted_1$3 = { class: "user-avatar" };
  const _hoisted_2$2 = { class: "user-info" };
  const _hoisted_3$2 = { class: "user-info-item" };
  const _hoisted_4$2 = { class: "user-info-item" };
  const _hoisted_5$2 = { class: "user-info-item" };
  const _hoisted_6$2 = { class: "user-info-item" };
  const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    __name: "About",
    props: {
      UserData: {}
    },
    setup(__props) {
      const props = __props;
      let sexStr = vue.ref("保密");
      if (props.UserData.sex != null) {
        if (props.UserData.sex === 1) {
          sexStr.value = "男";
        } else if (props.UserData.sex === 2) {
          sexStr.value = "女";
        }
      }
      const arrowLeftClickEvent = () => {
        TiebaRouter.router.back();
      };
      return (_ctx, _cache) => {
        const _component_ArrowLeft = vue.resolveComponent("ArrowLeft");
        const _component_el_icon = ElIcon;
        const _component_el_col = ElCol;
        const _component_el_row = ElRow;
        const _component_el_header = ElHeader;
        const _component_el_avatar = ElAvatar;
        const _component_el_text = ElText;
        const _component_el_main = ElMain;
        const _component_el_container = ElContainer;
        return vue.openBlock(), vue.createBlock(_component_el_container, null, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_el_header, { class: "user-nav" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_el_row, {
                  gutter: 24,
                  class: "nav-container"
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_el_col, {
                      span: 4,
                      class: "nav-left-arrow-icon"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_el_icon, {
                          size: 20,
                          onClick: arrowLeftClickEvent
                        }, {
                          default: vue.withCtx(() => [
                            vue.createVNode(_component_ArrowLeft)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_el_col, {
                      span: 16,
                      class: "nav-title"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode("基本资料")
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_el_col, {
                      span: 4,
                      class: "nav-right-space"
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            vue.createVNode(_component_el_main, null, {
              default: vue.withCtx(() => [
                vue.createElementVNode("div", _hoisted_1$3, [
                  vue.createVNode(_component_el_avatar, {
                    size: 100,
                    src: _ctx.$props.UserData.avatar
                  }, null, 8, ["src"])
                ]),
                vue.createElementVNode("div", _hoisted_2$2, [
                  vue.createElementVNode("div", _hoisted_3$2, [
                    vue.createVNode(_component_el_text, {
                      type: "info",
                      class: "user-desc-key"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode("用户名")
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_el_text, {
                      type: "info",
                      class: "user-end-text"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(vue.toDisplayString(props.UserData.name), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  vue.createElementVNode("div", _hoisted_4$2, [
                    vue.createVNode(_component_el_text, {
                      type: "info",
                      class: "user-desc-key"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode("昵称")
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_el_text, {
                      type: "info",
                      class: "user-end-text"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(vue.toDisplayString(props.UserData.showName), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  vue.createElementVNode("div", _hoisted_5$2, [
                    vue.createVNode(_component_el_text, {
                      type: "info",
                      class: "user-desc-key"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode("性别")
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_el_text, {
                      type: "info",
                      class: "user-end-text"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(vue.toDisplayString(vue.unref(sexStr)), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  vue.createElementVNode("div", _hoisted_6$2, [
                    vue.createVNode(_component_el_text, {
                      type: "info",
                      class: "user-desc-key"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode("吧龄")
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_el_text, {
                      type: "info",
                      class: "user-end-text"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(vue.toDisplayString(props.UserData.level) + "年", 1)
                      ]),
                      _: 1
                    })
                  ])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        });
      };
    }
  });
  const About = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__scopeId", "data-v-c9511d44"]]);
  const _sfc_main$2 = {};
  const _hoisted_1$2 = { style: { "padding": "10px" } };
  function _sfc_render(_ctx, _cache) {
    const _component_el_skeleton_item = ElSkeletonItem;
    const _component_el_col = ElCol;
    const _component_el_row = ElRow;
    const _component_el_skeleton = ElSkeleton;
    return vue.openBlock(), vue.createBlock(_component_el_skeleton, {
      style: { "background-color": "#ffffff" },
      animated: ""
    }, {
      template: vue.withCtx(() => [
        vue.createElementVNode("div", _hoisted_1$2, [
          vue.createVNode(_component_el_row, { style: { "display": "flex", "align-items": "center" } }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_el_col, { span: 4 }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_el_skeleton_item, {
                    variant: "image",
                    style: { "width": "35px", "height": "35px", "border-radius": "50%" }
                  })
                ]),
                _: 1
              }),
              vue.createVNode(_component_el_col, { span: 16 }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("div", null, [
                    vue.createVNode(_component_el_skeleton_item, {
                      variant: "text",
                      style: { "width": "100px", "height": "16px" }
                    }),
                    vue.createVNode(_component_el_skeleton_item, {
                      variant: "text",
                      style: { "width": "100%", "height": "12px" }
                    })
                  ])
                ]),
                _: 1
              }),
              vue.createVNode(_component_el_col, { span: 4 }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_el_skeleton_item, {
                    variant: "text",
                    style: { "width": "35px", "height": "20px", "border-radius": "16px", "float": "right" }
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ]),
      _: 1
    });
  }
  const TemplateFollowUser = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["render", _sfc_render]]);
  const _hoisted_1$1 = ["onClick"];
  const _hoisted_2$1 = { class: "user-item-row" };
  const _hoisted_3$1 = { class: "user-item-row-left" };
  const _hoisted_4$1 = { class: "user-avatar" };
  const _hoisted_5$1 = { class: "user-item-row-center" };
  const _hoisted_6$1 = { class: "user-info" };
  const _hoisted_7$1 = { class: "user-item-row-right" };
  const _hoisted_8$1 = {
    key: 2,
    style: { "text-align": "center" }
  };
  const pageSize$1 = 12;
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "Follow",
    props: {
      UserData: {}
    },
    setup(__props) {
      const props = __props;
      let showIsLoading = vue.ref(true);
      let isEmpty = vue.ref(false);
      let isAsyncLoadEnd = vue.ref(false);
      let isLoadingEnd = vue.ref(false);
      let $loading = vue.ref(null);
      let pageOffset = vue.ref(12);
      let followInfoList = vue.ref([]);
      let observe = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadMore();
          }
        });
      }, {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: 0.2
      });
      const stopWatchLoading = vue.watch($loading, () => {
        if ($loading.value && Array.isArray($loading.value) && $loading.value.length) {
          observe.observe($loading.value[0].$el);
        }
      }, {
        deep: true,
        immediate: true
      });
      const cancleLoadMoreObserve = () => {
        stopWatchLoading();
        observe.disconnect();
        showIsLoading.value = false;
        isLoadingEnd.value = true;
        log.info(["移除滚动监听"]);
      };
      const loadMore = async () => {
        showIsLoading.value = false;
        let isFirstLoad = pageOffset.value === pageSize$1;
        if (isFirstLoad) {
          isAsyncLoadEnd.value = false;
          followInfoList.value = [];
        }
        let isCanceled = false;
        let getFollowInfoList = await TiebaHomeApi.getFollow(props.UserData.name, pageOffset.value, pageSize$1);
        showIsLoading.value = true;
        if (getFollowInfoList) {
          if (getFollowInfoList.data) {
            followInfoList.value = followInfoList.value.concat(getFollowInfoList.data);
            pageOffset.value += pageSize$1;
          }
          if (!getFollowInfoList.has_next) {
            isCanceled = true;
            cancleLoadMoreObserve();
          }
        } else {
          log.info(["获取关注的吧数据失败"]);
          if (isFirstLoad) {
            isAsyncLoadEnd.value = true;
            isCanceled = true;
            isEmpty.value = true;
            cancleLoadMoreObserve();
            isLoadingEnd.value = false;
          }
        }
        showIsLoading.value = !isCanceled;
        log.info(["获取到的Ta关注的人", getFollowInfoList]);
      };
      const arrowLeftClickEvent = () => {
        TiebaRouter.router.back();
      };
      const jumpToUserHome = (url) => {
        window.open(url, "_blank");
      };
      return (_ctx, _cache) => {
        const _component_ArrowLeft = vue.resolveComponent("ArrowLeft");
        const _component_el_icon = ElIcon;
        const _component_el_col = ElCol;
        const _component_el_row = ElRow;
        const _component_el_header = ElHeader;
        const _component_el_avatar = ElAvatar;
        const _component_el_text = ElText;
        const _component_el_button = ElButton;
        const _component_el_empty = ElEmpty;
        const _component_el_scrollbar = ElScrollbar;
        const _component_el_main = ElMain;
        const _component_el_container = ElContainer;
        return vue.openBlock(), vue.createBlock(_component_el_container, { class: "disable-html-body-scroll" }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_el_header, { class: "user-top" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_el_row, {
                  gutter: 24,
                  class: "top-nav-container"
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_el_col, {
                      span: 4,
                      class: "top-left-arrow-icon",
                      onClick: arrowLeftClickEvent
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_el_icon, { size: 20 }, {
                          default: vue.withCtx(() => [
                            vue.createVNode(_component_ArrowLeft)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_el_col, {
                      span: 16,
                      class: "top-title-name"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode("他关注的人")
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_el_col, {
                      span: 4,
                      class: "top-right-space"
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            vue.createVNode(_component_el_main, { class: "user-main" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_el_scrollbar, { class: "user-container" }, {
                  default: vue.withCtx(() => [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(followInfoList), (followInfo) => {
                      return vue.openBlock(), vue.createElementBlock("div", {
                        class: "user-item",
                        onClick: ($event) => jumpToUserHome(followInfo.url)
                      }, [
                        vue.createElementVNode("div", _hoisted_2$1, [
                          vue.createElementVNode("div", _hoisted_3$1, [
                            vue.createElementVNode("div", _hoisted_4$1, [
                              vue.createVNode(_component_el_avatar, {
                                src: followInfo.avatar,
                                size: 35
                              }, null, 8, ["src"])
                            ]),
                            vue.createElementVNode("div", _hoisted_5$1, [
                              vue.createElementVNode("div", _hoisted_6$1, [
                                vue.createVNode(_component_el_text, {
                                  class: "user-name",
                                  truncated: ""
                                }, {
                                  default: vue.withCtx(() => [
                                    vue.createTextVNode(vue.toDisplayString(followInfo.userName), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                vue.createVNode(_component_el_text, {
                                  class: "user-sign-text",
                                  size: "small",
                                  truncated: ""
                                }, {
                                  default: vue.withCtx(() => [
                                    vue.createTextVNode("来自贴吧关注 暂未实现获取签名信息接口")
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_7$1, [
                            vue.createVNode(_component_el_button, {
                              type: "info",
                              size: "small",
                              plain: "",
                              color: "#626aef",
                              round: "",
                              class: "user-follow-btn"
                            }, {
                              default: vue.withCtx(() => [
                                vue.createTextVNode("关注")
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ], 8, _hoisted_1$1);
                    }), 256)),
                    vue.unref(showIsLoading) ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList(3, (i) => {
                      return vue.createVNode(TemplateFollowUser, {
                        key: i,
                        ref_for: true,
                        ref_key: "$loading",
                        ref: $loading
                      });
                    }), 64)) : vue.createCommentVNode("", true),
                    vue.unref(isEmpty) ? (vue.openBlock(), vue.createBlock(_component_el_empty, {
                      key: 1,
                      description: "未获取到数据"
                    })) : vue.createCommentVNode("", true),
                    vue.unref(isLoadingEnd) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_8$1, "已经到底了~")) : vue.createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        });
      };
    }
  });
  const Follow = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-82b5d2d1"]]);
  const _hoisted_1 = ["onClick"];
  const _hoisted_2 = { class: "user-item-row" };
  const _hoisted_3 = { class: "user-item-row-left" };
  const _hoisted_4 = { class: "user-avatar" };
  const _hoisted_5 = { class: "user-item-row-center" };
  const _hoisted_6 = { class: "user-info" };
  const _hoisted_7 = { class: "user-item-row-right" };
  const _hoisted_8 = {
    key: 2,
    style: { "text-align": "center" }
  };
  const pageSize = 12;
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "Fans",
    props: {
      UserData: {}
    },
    setup(__props) {
      const props = __props;
      let showIsLoading = vue.ref(true);
      let isEmpty = vue.ref(false);
      let isAsyncLoadEnd = vue.ref(false);
      let isLoadingEnd = vue.ref(false);
      let $loading = vue.ref(null);
      let pageOffset = vue.ref(12);
      let fansInfoList = vue.ref([]);
      let navTitle = vue.ref("粉丝");
      if (props.UserData.sex != null) {
        if (props.UserData.sex == 1) {
          navTitle.value = "他的粉丝";
        } else if (props.UserData.sex == 2) {
          navTitle.value = "她的粉丝";
        }
      }
      let observe = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadMore();
          }
        });
      }, {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: 0.2
      });
      const stopWatchLoading = vue.watch($loading, () => {
        if ($loading.value && Array.isArray($loading.value) && $loading.value.length) {
          observe.observe($loading.value[0].$el);
        }
      }, {
        deep: true,
        immediate: true
      });
      const cancleScrollListener = () => {
        stopWatchLoading();
        observe.disconnect();
        showIsLoading.value = false;
        isLoadingEnd.value = true;
        log.info(["移除滚动监听"]);
      };
      const loadMore = async () => {
        showIsLoading.value = false;
        let isFirstLoad = pageOffset.value === pageSize;
        if (isFirstLoad) {
          isAsyncLoadEnd.value = false;
          fansInfoList.value = [];
        }
        let getFansInfoList = await TiebaHomeApi.getFans(props.UserData.name, pageOffset.value, pageSize);
        let isCanceled = false;
        if (getFansInfoList) {
          if (getFansInfoList.data) {
            fansInfoList.value = fansInfoList.value.concat(getFansInfoList.data);
            pageOffset.value += pageSize;
          }
          if (!getFansInfoList.has_next) {
            isCanceled = true;
            cancleScrollListener();
          }
        } else {
          log.info(["获取粉丝数据失败"]);
          if (isFirstLoad) {
            isAsyncLoadEnd.value = true;
            isCanceled = true;
            isEmpty.value = true;
            cancleScrollListener();
            isLoadingEnd.value = false;
          }
        }
        showIsLoading.value = !isCanceled;
        log.info(["获取到的粉丝", getFansInfoList]);
      };
      const arrowLeftClickEvent = () => {
        TiebaRouter.router.back();
      };
      const jumpToUserHome = (url) => {
        window.open(url, "_blank");
      };
      return (_ctx, _cache) => {
        const _component_ArrowLeft = vue.resolveComponent("ArrowLeft");
        const _component_el_icon = ElIcon;
        const _component_el_col = ElCol;
        const _component_el_row = ElRow;
        const _component_el_header = ElHeader;
        const _component_el_avatar = ElAvatar;
        const _component_el_text = ElText;
        const _component_el_button = ElButton;
        const _component_el_empty = ElEmpty;
        const _component_el_scrollbar = ElScrollbar;
        const _component_el_main = ElMain;
        const _component_el_container = ElContainer;
        return vue.openBlock(), vue.createBlock(_component_el_container, { class: "disable-html-body-scroll" }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_el_header, { class: "user-top" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_el_row, {
                  gutter: 24,
                  class: "top-nav-container"
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_el_col, {
                      span: 4,
                      class: "top-left-arrow-icon",
                      onClick: arrowLeftClickEvent
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_el_icon, { size: 20 }, {
                          default: vue.withCtx(() => [
                            vue.createVNode(_component_ArrowLeft)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_el_col, {
                      span: 16,
                      class: "top-title-name"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(vue.toDisplayString(vue.unref(navTitle)), 1)
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_el_col, {
                      span: 4,
                      class: "top-right-space"
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            vue.createVNode(_component_el_main, { class: "user-main" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_el_scrollbar, { class: "user-container" }, {
                  default: vue.withCtx(() => [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(fansInfoList), (fansInfo) => {
                      return vue.openBlock(), vue.createElementBlock("div", {
                        class: "user-item",
                        onClick: ($event) => jumpToUserHome(fansInfo.url)
                      }, [
                        vue.createElementVNode("div", _hoisted_2, [
                          vue.createElementVNode("div", _hoisted_3, [
                            vue.createElementVNode("div", _hoisted_4, [
                              vue.createVNode(_component_el_avatar, {
                                src: fansInfo.avatar,
                                size: 35
                              }, null, 8, ["src"])
                            ]),
                            vue.createElementVNode("div", _hoisted_5, [
                              vue.createElementVNode("div", _hoisted_6, [
                                vue.createVNode(_component_el_text, {
                                  class: "user-name",
                                  truncated: ""
                                }, {
                                  default: vue.withCtx(() => [
                                    vue.createTextVNode(vue.toDisplayString(fansInfo.userName), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_7, [
                            vue.createVNode(_component_el_button, {
                              type: "info",
                              size: "small",
                              plain: "",
                              color: "#626aef",
                              round: "",
                              class: "user-follow-btn"
                            }, {
                              default: vue.withCtx(() => [
                                vue.createTextVNode("关注")
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ], 8, _hoisted_1);
                    }), 256)),
                    vue.unref(showIsLoading) ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList(3, (i) => {
                      return vue.createVNode(TemplateFollowUser, {
                        key: i,
                        ref_for: true,
                        ref_key: "$loading",
                        ref: $loading
                      });
                    }), 64)) : vue.createCommentVNode("", true),
                    vue.unref(isEmpty) ? (vue.openBlock(), vue.createBlock(_component_el_empty, {
                      key: 1,
                      description: "未获取到数据"
                    })) : vue.createCommentVNode("", true),
                    vue.unref(isLoadingEnd) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_8, "已经到底了~")) : vue.createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        });
      };
    }
  });
  const Fans = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-416d1c10"]]);
  const TiebaRouter = {
    router: null,
    init() {
      this.router = vueRouter.createRouter({
        // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
        history: vueRouter.createWebHashHistory(),
        routes: [
          {
            path: "/",
            name: "Home",
            component: Home,
            meta: {
              keepAlive: true
            }
          },
          {
            path: "/about",
            name: "About",
            component: About
          },
          {
            path: "/follow",
            name: "Follow",
            component: Follow
          },
          {
            path: "/fans",
            name: "Fans",
            component: Fans
          }
        ]
      });
      this.router.push("/");
    }
  };
  const AppCSS = 'html,\r\nbody {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.user-info-tabs>.el-tabs__header {\r\n  margin: 0 0 5px;\r\n}\r\n\r\n.pops-ip-location-help {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  min-width: 100%;\r\n  text-align: center;\r\n  color: #7558FE;\r\n}\r\n\r\nspan[data-sex="1"] {\r\n  color: #37B8D5;\r\n}\r\n\r\nspan[data-sex="2"] {\r\n  color: #FF8787;\r\n}';
  const TiebaHome = {
    $data: {
      appName: "vite-app"
    },
    init() {
      TiebaRouter.init();
      MountVue(_sfc_main$9, [TiebaRouter.router, ElementPlus]);
      addStyle(`
        #${VUE_ELE_NAME_ID}{
            z-index: 1000;
        }
        body > div:not([id="${VUE_ELE_NAME_ID}"]){
            display: none;
        }
        body > div[class="dia_wrapper"],
        body > div[class="dia_mask"],
        #${VUE_ELE_NAME_ID} ~ *{
            display: unset;
        }
        `);
      addStyle(AppCSS);
    }
  };
  const BaiduTieBa = {
    init() {
      addStyle(TieBaShieldCSS);
      addStyle(`
		/* 由于lzl弹窗的z-index是99999，所以，回复框、toast、登录弹窗的z-index要大于99999 */
		/* 底部回复框 */
        .comment-box-wrap-lzl{
            z-index: calc(99999 + 10) !important;
        }
		/* 登录弹窗 */
		.login-wake-modal-mask{
			z-index: calc(99999 + 20) !important;
		}
		/* 消息toast */
		.tb-toast{
			z-index: calc(99999 + 100) !important;
		}
        `);
      log.info("插入CSS规则");
      PopsPanel.execMenu(
        "baidu_tieba_clickOnTheOwnerSAvatarToCorrectlyRedirectToTheHomepage",
        () => {
          TiebaCore.addAuthorClickEvent();
        }
      );
      PopsPanel.execMenu("baidu_tieba_autoJumpToMainHost", () => {
        TiebaCore.autoJumpToMainHost();
      });
      PopsPanel.execMenu("baidu_tieba_clientCallMasquerade", () => {
        TiebaCore.clientCallMasquerade();
      });
      BaiduHook.elementAppendChild();
      PopsPanel.execMenuOnce("baidu_tieba_hijack_wake_up", () => {
        BaiduHook.windowWebpackJsonp_tieba();
      });
      if (BaiduRouter.isTieBaIndex()) {
        log.success("Router: 首页");
        PopsPanel.execMenu("baidu_tieba_index_openANewTab", () => {
          TiebaBaNei.openANewTab();
        });
      } else if (BaiduRouter.isTieBaPost()) {
        log.success("Router: 帖子");
        TiebaPost.init();
      } else if (BaiduRouter.isTieBaNewTopic()) {
        log.success("Router: 话题热议");
        TiebaTopic.init();
      } else if (BaiduRouter.isTieBaHybrid()) {
        log.success("Router: 搜索综合");
        TiebaHybrid.init();
      } else if (BaiduRouter.isTieBaNei()) {
        log.success("Router: 吧内");
        TiebaBaNei.init();
      } else if (BaiduRouter.isTieBaHome()) {
        log.success("Router: 用户主页");
        TiebaHome.init();
        return;
      } else {
        log.error("Router: 未知");
      }
      PopsPanel.execMenu("baidu_tieba_add_scroll_top_button_in_forum", () => {
        TiebaCore.addScrollTopButton();
      });
      PopsPanel.execMenu("baidu_tieba_add_search", () => {
        TiebaSearch.init();
      });
      domutils.ready(() => {
        PopsPanel.execMenu("baidu_tieba_checkSkeleton", () => {
          TiebaCore.checkSkeleton();
        });
        this.initTiebaData();
        this.addTopLeftMenu();
      });
    },
    /**
     * 初始化贴吧数据
     *
     * 例如：吧名，高清图片
     */
    initTiebaData() {
      utils.waitAnyNode([".tb-mobile-viewport", ".main-page-wrap"]).then(async () => {
        let interval = setInterval(() => {
          TiebaData.forumName = TiebaCore.getCurrentForumName();
          TiebaData.forumId = TiebaCore.getCurrentForumId();
          if (TiebaData.forumName) {
            log.info("当前吧：" + TiebaData.forumName);
            if (PopsPanel.getValue("baidu_tieba_optimize_image_preview")) {
              TiebaPost.initPostImageInfo();
            }
            clearInterval(interval);
          }
        }, 250);
      });
    },
    /**
     * 替换顶部左侧贴吧按钮为菜单按钮
     */
    addTopLeftMenu() {
      addStyle(`
		.logo-wrapper{
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			margin-left: 0.13rem;
		}	
		`);
      utils.waitNode(".nav-bar-top .logo-wrapper", 1e4).then(($ele) => {
        if (!$ele) {
          return;
        }
        $ele.outerHTML = `
				<div class="logo-wrapper">
					<svg t="1718595396255" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3147" width="24" height="24"><path d="M128 298.666667h768a42.666667 42.666667 0 0 0 0-85.333334H128a42.666667 42.666667 0 0 0 0 85.333334z m768 170.666666H128a42.666667 42.666667 0 0 0 0 85.333334h768a42.666667 42.666667 0 0 0 0-85.333334z m0 256H128a42.666667 42.666667 0 0 0 0 85.333334h768a42.666667 42.666667 0 0 0 0-85.333334z" p-id="3148"></path></svg>
				</div>
				`;
        let $logoWrapper = document.querySelector(
          ".nav-bar-top .logo-wrapper"
        );
        function getHelloText() {
          var myDate = /* @__PURE__ */ new Date();
          var i = myDate.getHours();
          if (i < 12) return "早上好!";
          else if (i >= 12 && i < 14) return "中午好!";
          else if (i >= 14 && i < 18) return "下午好!";
          else if (i >= 18) return "晚上好!";
        }
        let menuListInfo = [
          {
            "data-to": "home",
            icon: '<svg fill="#3EBBFD" t="1718598127655" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2362"><path d="M459.704448 833.996598" fill="#DA2017" p-id="2363"></path><path d="M947.859367 456.556247 589.952908 156.258856c-21.905916-18.380626-49.721425-28.515451-78.323856-28.52466l-0.044002 0c-28.585035 0-56.395428 10.110265-78.305437 28.467355l-358.517373 300.340369c-12.852726 10.767228-14.544251 29.912263-3.777023 42.764989 6.007831 7.16519 14.616906 10.859325 23.288402 10.859325 6.875594 0 13.793144-2.322905 19.47761-7.082302l18.520819-15.519462 0 325.160661c0 21.898753 8.527211 42.488697 24.01188 57.973366 15.484669 15.482623 36.071543 24.010857 57.974389 24.010857l184.665837 0 0-0.019443c66.174142 0 60.780295-60.693314 60.780295-60.693314L459.704448 629.535927c0-4.14746 1.616824-8.048303 4.552689-10.983145 2.930749-2.934842 6.833639-4.547573 10.985192-4.547573l72.124667 0c4.15053 0 8.04728 1.612731 10.984169 4.547573 2.934842 2.934842 4.551666 6.836709 4.551666 10.983145l0 204.460672-0.010233 0c0 0-5.393847 60.693314 60.780295 60.693314l0 0.019443 184.678116 0c21.895683 0 42.484603-8.528234 57.969273-24.010857 15.488763-15.485693 24.015973-36.074613 24.015973-57.973366L890.336256 487.539912l18.501376 15.527648c12.844539 10.772344 31.993668 9.101285 42.770106-3.746324C962.379059 486.47772 960.702883 467.333708 947.859367 456.556247zM829.619406 812.724109c0 5.681396-2.210341 11.026124-6.226818 15.043624-4.0175 4.0175-9.357112 6.228865-15.040555 6.228865L623.614565 833.996598 623.614565 629.535927c0-20.364817-7.931646-39.513946-22.330588-53.91391-14.400988-14.402011-33.55114-22.334681-53.915957-22.334681l-72.124667 0c-20.369933 0-39.521109 7.93267-53.918004 22.334681-14.397918 14.398942-22.330588 33.54807-22.330588 53.91391l0 204.460672L214.257294 833.996598c-5.683443 0-11.023054-2.211365-15.040555-6.228865-4.022617-4.0175-6.232958-9.362228-6.232958-15.040555l0-376.024096 279.278681-233.966683c11.003612-9.216919 24.966625-14.292518 39.321564-14.292518l0.020466 0c14.359033 0.005117 28.328185 5.094018 39.326681 14.32117l278.688233 233.836723L829.619406 812.724109z" p-id="2364"></path></svg>',
            text: "首页",
            clickCallBack(event) {
              window.location.href = window.location.origin;
            }
          },
          {
            "data-to": "posting",
            icon: '<svg fill="#FF9900" t="1718599526156" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3362"><path d="M783.530667 910.961778l-252.017778-123.448889a38.001778 38.001778 0 0 1 33.28-68.266667l206.620444 101.319111 89.144889-610.247111-401.635555 481.678222v223.857778a37.944889 37.944889 0 0 1-75.832889 0v-236.316444c0-1.991111 0.113778-3.868444 0.455111-5.859556a38.968889 38.968889 0 0 1 8.533333-20.024889l378.424889-453.859555L163.84 514.389333l143.018667 74.126223c18.773333 9.898667 26.225778 32.824889 17.066666 51.768888a36.864 36.864 0 0 1-49.322666 17.066667L67.754667 549.717333a38.912 38.912 0 0 1-17.692445-18.887111 37.546667 37.546667 0 0 1 15.587556-50.744889L899.185778 47.786667a39.139556 39.139556 0 0 1 17.976889-4.323556 37.831111 37.831111 0 0 1 37.944889 31.004445 39.310222 39.310222 0 0 1-0.682667 18.318222L839.111111 882.062222a38.115556 38.115556 0 0 1-32.142222 32.199111 37.148444 37.148444 0 0 1-23.438222-3.299555z" p-id="3363"></path></svg>',
            text: "发帖",
            clickCallBack(event) {
              var _a3;
              if (BaiduRouter.isTieBaPost() || BaiduRouter.isTieBaNei()) {
                let $mobileViewport = document.querySelector(
                  ".tb-mobile-viewport"
                );
                if ($mobileViewport) {
                  let vueObj = VueUtils.getVue($mobileViewport);
                  if (vueObj) {
                    let goPost = (vueObj == null ? void 0 : vueObj.goPost) || ((_a3 = vueObj == null ? void 0 : vueObj.$parent) == null ? void 0 : _a3.goPost);
                    if (typeof goPost === "function") {
                      goPost();
                      return;
                    }
                  }
                }
                let $appView = document.querySelector(".app-view");
                if ($appView) {
                  let appViewVueObj = VueUtils.getVue($appView);
                  if (appViewVueObj && typeof appViewVueObj.gotoPostPage === "function") {
                    appViewVueObj.gotoPostPage();
                    return;
                  }
                }
                log.error("未找到发帖函数");
                Qmsg.error("未找到发帖函数");
              } else {
                log.error("请在吧内|帖子内使用");
                Qmsg.error("请在吧内|帖子内使用");
              }
            }
          },
          {
            "data-to": "search",
            icon: '<svg fill="#9DCA08" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" ><path d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"></path></svg>',
            text: "搜索",
            clickCallBack(event) {
              let userInput = prompt("请输入需要搜索的内容");
              if (userInput) {
                window.location.href = TiebaUrlApi.getHybridSearch(userInput);
              }
            }
          },
          {
            "data-to": "got-to-forum",
            icon: '<svg fill="#F37D7D" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4247"><path d="M840.937 780.573h-173.721l-140.376 151.009-44.542-151.009c-100.088 0-181.253-82.372-181.253-184.022l-0-76.793c0-101.649 81.165-184.022 181.253-184.022h358.639c100.108 0 181.252 82.373 181.252 184.022v76.792c0 101.65-81.144 184.023-181.252 184.023zM469.343 303.194c-100.089 0-201.581 79.641-201.581 181.271v81.846c0 99.892 28.075 153.273 65.339 178.753l-72.147 77.614-51.45-174.46c-115.657 0-209.404-95.173-209.404-212.587v-90.157c0-117.414 93.747-212.604 209.404-212.604h419.318c99.383 0 182.421 70.374 203.843 164.667-6.4 3.336-13.54 5.677-22.319 5.677l-341.002-0.019z" p-id="4248"></path></svg>',
            text: "进吧",
            clickCallBack(event) {
              window.location.href = TiebaUrlApi.getGoToForum();
            }
          },
          {
            "data-to": "mine",
            icon: '<svg fill="#DA99DB" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4291" width="128" height="128"><path d="M678.4 537.6c76.8-51.2 128-140.8 128-243.2 0-162.133333-132.266667-294.4-294.4-294.4s-294.4 132.266667-294.4 294.4c0 102.4 51.2 192 128 243.2-179.2 68.266667-302.933333 238.933333-302.933333 439.466667 0 25.6 17.066667 42.666667 42.666666 42.666666s42.666667-17.066667 42.666667-42.666666c0-209.066667 174.933333-384 384-384s384 170.666667 384 384c0 25.6 17.066667 42.666667 42.666667 42.666666s42.666667-21.333333 42.666666-42.666666c0-200.533333-128-371.2-302.933333-439.466667z m-375.466667-238.933333c0-115.2 93.866667-209.066667 209.066667-209.066667s209.066667 93.866667 209.066667 209.066667-93.866667 209.066667-209.066667 209.066666-209.066667-93.866667-209.066667-209.066666z" p-id="4292"></path></svg>',
            text: "我的",
            clickCallBack(event) {
              window.location.href = TiebaUrlApi.getMine();
            }
          }
        ];
        domutils.on($logoWrapper, "click", () => {
          var _a3, _b, _c, _d, _e, _f, _g;
          let $drawer = pops.drawer({
            title: {
              enable: true,
              text: `
							<div class="tieba_account_exit">
								<a href="javascript:;">
									<span>
										退出登录
									</span>
								</a>
							</div>
							<a href="javascript:;" class="tieba_user">
								<em>
									<img class="tieba_account_avatar" src="">
								</em>
								<p class="tieba-user-info">
									<span class="tieba_user_nologin_tip_center">
									${getHelloText()} 请登录或注册
									</span>
								</p>
                                <p class="tieba_user_nologin_tip_bottom">登录后更精彩...</p>
                            </a>
							`,
              html: true,
              style: ""
            },
            content: {
              text: '<ul class="tieba-menu-list"></ul>',
              html: true,
              style: ""
            },
            btn: {
              ok: {
                enable: false
              },
              cancel: {
                enable: false
              },
              close: {
                enable: false
              }
            },
            only: true,
            size: "66%",
            direction: "left",
            mask: {
              enable: true,
              clickEvent: {
                toClose: true
              }
            },
            style: `
						.pops{
							--avatar-size: 60px;
							--user-info-font-color: #ffffff;
						}
						.pops-drawer-title{
							background: url(https://api.chongss.com/pc.php?category=landscape);
							// background-size: cover;
							background-size: 100% 100%;
							background-position: center;
							background-repeat: no-repeat;
						}
						.tieba_account_exit{
							display: none;
						}
						.tieba_user{
							position: relative;
							display: block;
							padding: 18px 15px 12px;
							overflow: hidden;
							width: 100%;
							height: 175px;
							text-decoration: none;
						}
						.tieba_user em{
							display: block;
							width: 64px;
							height: 64px;
							margin-bottom: 23px;
							background: rgba(255, 255, 255, 0.4);
							border-radius: 50%;
							position: relative;
						}
						.tieba_account_avatar{
							width: var(--avatar-size);
							height: var(--avatar-size);
							margin: 2px;
							border-radius: 50%;
						}
						.tieba_user_nologin_tip_center{
							font-size: 20px;
							float: left;
							font-weight: 400;
							margin-right: 6px;
							text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
							color: var(--user-info-font-color);
						}
						.tieba_user_nologin_tip_bottom{
							display: block;
							width: 100%;
							height: 24px;
							line-height: 24px;
							overflow: hidden;
							color: var(--user-info-font-color);
							text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
							font-size: 13px;
							margin-top: 5px;
						}


						.pops-drawer-content{
							padding: 10px;
						}
						.tieba-menu-list{
						
						}
						.tieba-menu-item{
							display: flex;
							align-items: center;
							height: 38px;
    						line-height: 38px;
							font-size: 17px;
							margin: 3px 0px;
						}
						.tieba-menu-item:first-child{
							margin-top: 0px;
						}
						.tieba-menu-icon{
							display: flex;
    						align-items: center;
							font-size: 22px;
    						margin-right: 8px;
						}
						.tieba-menu-icon svg{
							width: 20px;
							height: 20px;
						}
						.teba-menu-text{
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
						`
          });
          let isLogin = false;
          let $tieba_user = $drawer.$shadowRoot.querySelector(".tieba_user");
          let $menuList = $drawer.$shadowRoot.querySelector(
            ".tieba-menu-list"
          );
          let $avatar = $drawer.$shadowRoot.querySelector(
            ".tieba_account_avatar"
          );
          $drawer.$shadowRoot.querySelector(
            ".tieba-user-info"
          );
          let $tieba_user_nologin_tip_center = $drawer.$shadowRoot.querySelector(
            ".tieba_user_nologin_tip_center"
          );
          let $tieba_user_nologin_tip_bottom = $drawer.$shadowRoot.querySelector(
            ".tieba_user_nologin_tip_bottom"
          );
          menuListInfo.forEach((menuItemInfo) => {
            let $menuItem = document.createElement("li");
            $menuItem.classList.add("tieba-menu-item");
            $menuItem.setAttribute("data-to", menuItemInfo["data-to"]);
            $menuItem.innerHTML = `
						<i class="tieba-menu-icon">
							${menuItemInfo.icon}
						</i>
						<p class="teba-menu-text">${menuItemInfo.text}</p>
						`;
            domutils.on($menuItem, "click", (event) => {
              menuItemInfo.clickCallBack(event);
            });
            $menuList.appendChild($menuItem);
          });
          $avatar.src = TiebaUrlApi.getUserAvatar("null");
          let $ele2 = document.querySelector(".app-view") || document.querySelector(".tb-mobile-viewport");
          if ($ele2) {
            let eleVueObj = VueUtils.getVue($ele2);
            if (eleVueObj) {
              if ((_a3 = eleVueObj == null ? void 0 : eleVueObj.user) == null ? void 0 : _a3.is_login) {
                isLogin = true;
                let portrait = eleVueObj.user.portrait;
                let showName = eleVueObj.user.show_nickname || eleVueObj.user.name_show || eleVueObj.user.name;
                $avatar.src = TiebaUrlApi.getUserAvatar(portrait);
                $tieba_user_nologin_tip_center.innerText = showName;
                domutils.hide($tieba_user_nologin_tip_bottom);
              } else if ((_d = (_c = (_b = eleVueObj == null ? void 0 : eleVueObj.$store) == null ? void 0 : _b.state) == null ? void 0 : _c.common) == null ? void 0 : _d.isLogin) {
                isLogin = true;
                domutils.hide($tieba_user_nologin_tip_bottom);
                $tieba_user_nologin_tip_center.innerText = "未知";
                $avatar.src = TiebaUrlApi.getUserAvatar(
                  (_g = (_f = (_e = eleVueObj == null ? void 0 : eleVueObj.$store) == null ? void 0 : _e.state) == null ? void 0 : _f.common) == null ? void 0 : _g.portrait
                );
              }
            }
          }
          domutils.on($tieba_user, "click", () => {
            if (isLogin) {
              return;
            }
            window.open(TiebaUrlApi.getLoginUrl(), "_blank");
          });
        });
      });
    }
  };
  const WenKuShieldCSS = '/* 首页顶部的开通VIP横幅 */\r\n.new-home-wrap .van-swipe.swipe-home,\r\n/* 优质文档VIP随便下 */\r\n.vip-card-wrap,\r\n.reader-pop-manager-view-containter,\r\n.core-download,\r\n.card-wrap.card-vip,\r\n.pop-manager-view-containter,\r\n#carousel,\r\n.card-wrap,\r\n.n-card-wrap-exp,\r\n.pageNo .pager~div[class*="__wm"],\r\n.fold-pager,\r\n.vip-choice,\r\n.wk-bottom-btn,\r\n.continue-read-wrap.invite-clipboard,\r\n.wk-student,\r\n.search-pay-container,\r\n.wk-student-defense,\r\n.vip-rec-card-main,\r\n.back-dialog,\r\ndiv.middle-box-root {\r\n  display: none !important;\r\n}\r\n.bartop {\r\n  display: unset;\r\n}\r\n.reader-wrap {\r\n  height: auto !important;\r\n}\r\n#view-rr-app {\r\n  overflow-y: auto !important;\r\n}\r\n#view-app,\r\n#view-rr-app {\r\n  max-height: 100% !important;\r\n}\r\n.top-card {\r\n  margin-top: 10px !important;\r\n}\r\n* {\r\n  -webkit-touch-callout: inherit !important;\r\n  -khtml-user-select: auto !important;\r\n  -moz-user-select: auto !important;\r\n  -ms-user-select: auto !important;\r\n  user-select: auto !important;\r\n}\r\n';
  const BaiduWenKu = {
    init() {
      addStyle(WenKuShieldCSS);
      log.info("插入CSS规则");
      addStyle(`
        /* 上面的工具栏会挡住标题栏 */
        #app-pre .top-card.top-card-top{
            margin-top: 56px !important;
        }
        `);
      PopsPanel.execMenu("baidu_wenku_block_member_picks", () => {
        this.shieldVipPicks();
      });
      PopsPanel.execMenu("baidu_wenku_blocking_app_featured", () => {
        this.shieldAppPicks();
      });
      PopsPanel.execMenu("baidu_wenku_blocking_related_documents", () => {
        this.shieldRelatedDocuments();
      });
      PopsPanel.execMenu("baidu_wenku_blocking_bottom_toolbar", () => {
        this.shieldBottomToolBar();
      });
      PopsPanel.execMenu("baidu_wenku_shield_next_btn", () => {
        this.shieldNextArticleButton();
      });
      PopsPanel.execMenu("baidu_wenku_blockDocumentAssistant", () => {
        this.blockDocumentAssistant();
      });
    },
    /** 屏蔽会员精选 */
    shieldVipPicks() {
      log.info("屏蔽会员精选");
      CommonUtils.addBlockCSS(
        'div[class*="vip-choice_"][data-ait-action="vipChoiceShow"]'
      );
    },
    /** 屏蔽APP精选 */
    shieldAppPicks() {
      log.info("屏蔽APP精选");
      CommonUtils.addBlockCSS(
        'div[class*="app-choice_"][data-ait-action="appChoiceNewShow"]',
        "div.folder-wrap.invite-clipboard[data-clipboard-text]"
      );
    },
    /** 屏蔽相关文档 */
    shieldRelatedDocuments() {
      log.info("屏蔽相关文档");
      CommonUtils.addBlockCSS(
        "div.fold-page-conversion",
        "div.newrecom-list.invite-clipboard[data-clipboard-text]"
      );
    },
    /** 屏蔽底部工具栏 */
    shieldBottomToolBar() {
      log.info("屏蔽底部工具栏");
      CommonUtils.addBlockCSS("div.barbottom");
    },
    /** 屏蔽下一篇按钮 */
    shieldNextArticleButton() {
      log.info("屏蔽下一篇按钮");
      CommonUtils.addBlockCSS("div.next-page-container");
    },
    /** 【屏蔽】文档助手 */
    blockDocumentAssistant() {
      log.info("【屏蔽】文档助手");
      CommonUtils.addBlockCSS(".ai-chat-wrap");
    }
  };
  const JingYanShieldCSS = ".article-feed-next,\r\n.wgt-rel-exp-feed,\r\n.article-feed-btn-fixed,\r\n.read-whole-mask.app,\r\n.asp-self-rander,\r\n.baobao-image-item,\r\n#wgt-ad-guess {\r\n  display: none !important;\r\n}\r\n.exp-content-container {\r\n  max-height: 100% !important;\r\n  overflow: auto !important;\r\n}\r\n";
  const BaiduJingYan = {
    init() {
      addStyle(JingYanShieldCSS);
      log.info("插入CSS规则");
    }
  };
  const BaiKeShieldCSS = "";
  const BaiduBaiKe = {
    init() {
      addStyle(BaiKeShieldCSS);
      log.info("插入CSS规则");
      PopsPanel.execMenuOnce("baidu_baike_automatically_expand_next_page", () => {
        BaiduBaiKe.automaticallyExpandNextPage();
      });
    },
    /**
     * 自动展开下一页
     * + window.Box
     */
    automaticallyExpandNextPage() {
      log.info("通过劫持window.Box自动展开下一页");
      let old_Box = null;
      OriginPrototype.Object.defineProperty(_unsafeWindow, "Box", {
        get() {
          if (old_Box == null) {
            return;
          }
          return new Proxy(old_Box, {
            get(target, prop, receiver) {
              if ((prop === "isBox" || prop === "$isBox") && PopsPanel.getValue("baidu-baike-Box-isBox")) {
                return true;
              }
              if ((prop === "isLiteBox" || prop === "$isLiteBox") && PopsPanel.getValue("baidu-baike-Box-isLiteBox")) {
                return true;
              }
              if ((prop === "isInfoBox" || prop === "$isInfoBox") && PopsPanel.getValue("baidu-baike-Box-isInfoBox")) {
                return true;
              }
              if ((prop === "isIOS" || prop === "$isIOS") && PopsPanel.getValue("baidu-baike-Box-isIOS")) {
                return true;
              }
              if ((prop === "isAndroid" || prop === "$isAndroid") && PopsPanel.getValue("baidu-baike-Box-isAndroid")) {
                return true;
              }
              if ((prop === "isAndroid" || prop === "$isAndroid") && PopsPanel.getValue("baidu-baike-Box-isAndroid")) {
                return true;
              }
              if (prop === "android") {
                let android = Reflect.get(target, prop, receiver);
                if (android["invokeApp"] && PopsPanel.getValue("baidu-baike-Box-android.invokeApp")) {
                  android["invokeApp"] = function(...args) {
                    log.info(["阻止调用android.invokeApp", args]);
                  };
                }
                if (android["invokeLiteApp"] && PopsPanel.getValue("baidu-baike-Box-android.invokeLiteApp")) {
                  android["invokeLiteApp"] = function(...args) {
                    log.info(["阻止调用android.invokeLiteApp", args]);
                  };
                }
              }
              if (prop === "ios") {
                let ios = Reflect.get(target, prop, receiver);
                if (ios["invokeLiteApp"] && PopsPanel.getValue("baidu-baike-Box-ios.invokeApp")) {
                  ios["invokeLiteApp"] = function(...args) {
                    log.info(["阻止调用ios.invokeApp", args]);
                  };
                }
              }
              return Reflect.get(target, prop, receiver);
            }
          });
        },
        set(value) {
          old_Box = value;
        }
      });
    }
  };
  const BaiKeTaShuoShieldCSS = "";
  const BaiduBaiKeTaShuo = {
    init() {
      addStyle(BaiKeTaShuoShieldCSS);
      log.info("插入CSS规则");
      PopsPanel.execMenu("baidu_baike_tashuo_remove_bottom_ad", () => {
        this.removeBottomAd();
      });
    },
    /**
     * 去除底部广告
     */
    removeBottomAd() {
      utils.waitNode("#index_tashuo_list").then(($tashuoList) => {
        log.info("去除底部广告");
        utils.mutationObserver($tashuoList, {
          callback() {
            Array.from($tashuoList.children).forEach((item) => {
              if (item.className !== "J-hot-item-container") {
                log.info("存在广告-删除！");
                item.remove();
              }
            });
          },
          config: { subtree: true, childList: true, attributes: true }
        });
      });
    }
  };
  const ZhiDaoShieldCSS = "/* .dec + div, */\r\n#feed-recommend,\r\n.dec,\r\n.wgt-topic-hot,\r\n#respect-footer,\r\n#wap-youx-change-asp,\r\ndiv.question-line + div:not(.replies-container),\r\n.wgt-asp-youx,\r\n.w-detail-display-btn,\r\n.ask-for-friend,\r\n#knowledge-answer-list,\r\n.go-to-ask,\r\ndiv[class*='ads'],\r\n/* 免费领票 */\r\n.doodle-container {\r\n  display: none !important;\r\n}\r\n.w-detail-container {\r\n  max-height: 100% !important;\r\n  overflow: auto !important;\r\n}\r\n";
  const BaiduZhiDao = {
    init() {
      addStyle(ZhiDaoShieldCSS);
      log.info("插入CSS规则");
      this.removeAd();
      PopsPanel.execMenu(
        "baidu_zhidao_block_recommend_more_exciting_content",
        () => {
          this.blockRecommendMoreExcitingContent();
        }
      );
      PopsPanel.execMenu("baidu_zhidao_block_other_answers", () => {
        this.blockOtherAnswers();
      });
      PopsPanel.execMenu("baidu_zhidao_block_related_issues", () => {
        this.blockRelatedIssues();
      });
      PopsPanel.execMenu("baidu_zhidao_shield_top_fixed_toolbar", () => {
        this.shieldTopFloatToolBar();
      });
    },
    /**
     * 移除广告
     */
    removeAd() {
      log.info("移除广告.ec-ad");
      if (document.querySelector(".ec-ad")) {
        domutils.remove(domutils.parent(document.querySelectorAll(".ec-ad")));
      }
    },
    /**
     * 屏蔽顶部悬浮工具栏
     */
    blockRecommendMoreExcitingContent() {
      log.info("屏蔽顶部悬浮工具栏");
      CommonUtils.addBlockCSS(
        ".feed-recommend-title",
        "#feed-recommend",
        ".mm-content-box.mm-content-line.feed-recommend"
      );
    },
    /**
     * 屏蔽其他回答
     */
    blockOtherAnswers() {
      log.info("屏蔽其他回答");
      CommonUtils.addBlockCSS(".replies-container + div");
    },
    /**
     * 屏蔽相关问题
     */
    blockRelatedIssues() {
      log.info("屏蔽相关问题");
      CommonUtils.addBlockCSS("div[id^=wahsd]", 'div[class^="w-question-list"]');
    },
    /**
     * 屏蔽顶部悬浮工具栏
     */
    shieldTopFloatToolBar() {
      log.info("屏蔽顶部悬浮工具栏");
      CommonUtils.addBlockCSS(
        ".iknow-root-dom-element .question-answer-container .question-answer-layer.fixed"
      );
    }
  };
  const FanYiShieldCSS = ".app-bar,\r\n.jifeng-container,\r\n.intro-title,\r\n.sideQrContainer,\r\n.inner.clearfix,\r\nsection.bottom-intro,\r\n#desktop-guide-wrapper {\r\n  display: none !important;\r\n}\r\n.new-header-dl {\r\n  visibility: hidden;\r\n}\r\n";
  const BaiduFanYi = {
    init() {
      addStyle(FanYiShieldCSS);
      log.info("插入CSS规则");
      PopsPanel.execMenu("baidu_fanyi_recommended_shielding_bottom", () => {
        this.shieldRecommendBottom();
      });
      PopsPanel.execMenu("baidu_fanyi_other_shielding_bottom", () => {
        this.shieldBottom();
      });
      PopsPanel.execMenu("baidu_fanyi_auto_focus", () => {
        this.autoFocus();
      });
    },
    /**
     * 屏蔽底部推荐
     */
    shieldRecommendBottom() {
      log.info("屏蔽底部推荐");
      CommonUtils.addBlockCSS("section.article.android-style");
    },
    /**
     * 屏蔽底部
     */
    shieldBottom() {
      log.info("屏蔽底部");
      CommonUtils.addBlockCSS(".trans-other-wrap.clearfix");
    },
    /**
     * 自动聚焦输入框
     */
    autoFocus() {
      utils.waitNode("textarea#j-textarea").then(($textarea) => {
        log.info("自动聚焦输入框");
        setTimeout(() => {
          $textarea.focus();
        }, 2500);
      });
    }
  };
  const FanYiAppShieldCSS = ".fanyi-invoke-btn,\r\n.top-bn {\r\n  display: none !important;\r\n}\r\n";
  const BaiduFanYiApp = {
    init() {
      addStyle(FanYiAppShieldCSS);
      log.info("插入CSS规则");
      this.repairContentHeight();
      PopsPanel.execMenu("baidu_fanyi_app_shield_column_information", () => {
        this.shieldColumnInformation();
      });
      PopsPanel.execMenu("baidu_fanyi_app_shield_recommended_for_you", () => {
        this.shieldRecommendedForYou();
      });
      PopsPanel.execMenu("baidu_fanyi_app_shield_i_need_to_follow_along", () => {
        this.shieldINeedToFollowAlong();
      });
    },
    /**
     * 修复内容高度
     */
    repairContentHeight() {
      utils.waitNode("#page-content").then(($pageContent) => {
        log.info("修复内容高度");
        $pageContent.setAttribute("style", "max-height:unset !important");
      });
    },
    /**
     * 隐藏专栏信息
     */
    shieldColumnInformation() {
      log.info("隐藏专栏信息");
      CommonUtils.addBlockCSS("div.fanyi-zhuan-lan-wrapper");
    },
    /**
     * 隐藏推荐
     */
    shieldRecommendedForYou() {
      log.info("隐藏推荐");
      CommonUtils.addBlockCSS("#fr-section");
    },
    /**
     * 隐藏需要跟随
     */
    shieldINeedToFollowAlong() {
      log.info("隐藏需要跟随");
      CommonUtils.addBlockCSS(".cover-all .daily-bottom");
    }
  };
  const ImageShieldCSS = "#boxBanner {\r\n  display: none !important;\r\n}\r\n";
  const BaiduImage = {
    init() {
      addStyle(ImageShieldCSS);
      log.info("插入CSS规则");
    }
  };
  const MapShieldCSS = '.index-widget-guidebanner,\r\n.common-widget-bottom-banner-changeId,\r\n#index-areaEntry-widget,\r\ndiv.common-widget-bottom-banner-changeId,\r\n#downloadnativepopup,\r\n.xiaoduVoiceCard,\r\n.index-widget-guidebanner,\r\n#message-center-panel,\r\n.xiaoduVoice-banner.-border-round,\r\n/* 底部中间横幅-打开百度地图APP */\r\n#main div[id^="fis_elm"] .btn-banner-float {\r\n  display: none !important;\r\n}\r\n';
  const BaiduMapHook = {
    init() {
      PopsPanel.execMenu("baidu_map_hijack_wakeup", () => {
        log.success("hook: Element.appendChild");
        BaiduHook.elementAppendChild();
        log.success("hook: window.setTimeout");
        BaiduHook.setTimeout(
          /goToDownloadOfAndrod|downloadAndrFromMarket|jumpToDownloadPage|jumpToMiddlePage|downloadIosPkg/
        );
        domutils.ready(function() {
          log.success("hook: $.append");
          BaiduHook.windowJQueryAppend();
        });
      });
    }
  };
  const BaiduMap = {
    init() {
      addStyle(MapShieldCSS);
      log.info("插入CSS规则");
      BaiduMapHook.init();
    }
  };
  const MbdShieldCSS = `div.headDeflectorContainer,\r
#bdrainrwDragButton,\r
#page_wrapper .other div[class*='undefined'],\r
#page_wrapper .other > div[class=""],\r
/* 底部按钮-百度APP内播放 */\r
div.common-wrap.single-pd,\r
/* 顶部横幅-APP内播放 */\r
div#app div.guid-new,\r
/* 顶部横幅-APP内阅读 */\r
#headDeflectorContainer,\r
/* 底部 打开百度APP，阅读体验更佳 */\r
#page_wrapper div[class^="foldMaskWrapper-"],\r
/* 打开百度APP，阅读完整内容 */\r
#content_wrapper .foldMaskWrapper,\r
/* 影响定位元素的遮罩层 */\r
#page_wrapper .bdboxshare>div:first-child,\r
/* 来百度APP畅享高清图片 */\r
.contentMedia .openImg,\r
/* 精彩推荐右边的 打开APP看更多精彩推荐 */\r
div[class*="relateTitle"] span[class*="subTitle"],\r
/* 会自动在上面弹出的【百度热榜】 */\r
#page_wrapper div:has(>div[class*="leftbox"]) {\r
	display: none !important;\r
}\r
/* 展开阅读 */\r
#page_wrapper #dynamicItem,\r
/* 手机版-展开阅读 */\r
#mainContentContainer {\r
	height: auto !important;\r
}\r
`;
  const BaiduMbdHook = {
    init() {
      PopsPanel.execMenu("baidu_mbd_camouflage_lite_baiduboxapp", () => {
        log.info("hook: navigator.userAgent ==> lite baiduboxapp");
        let oldNavigatorUserAgent = _unsafeWindow.navigator.userAgent;
        OriginPrototype.Object.defineProperty(
          _unsafeWindow.navigator,
          "userAgent",
          {
            get() {
              return oldNavigatorUserAgent + " lite baiduboxapp";
            }
          }
        );
      });
      PopsPanel.execMenu("baidu_mbd_hijack_wakeup", () => {
        log.info("hook: Function.call");
        BaiduHook.functionCall_baijiahao_map();
      });
      PopsPanel.execMenu("baidu_mbd_hijack_BoxJSBefore", () => {
        log.info("hook: window.BoxJSBefore");
        BaiduHook.windowBoxJSBefore();
      });
      PopsPanel.execMenu("baidu_mbd_hijack_iframe", () => {
        log.info("hook: Element.appendChild");
        BaiduHook.elementAppendChild();
      });
    }
  };
  const BaiduMbd = {
    init() {
      addStyle(MbdShieldCSS);
      log.info("插入CSS规则");
      BaiduMbdHook.init();
      PopsPanel.execMenu("baidu_mbd_block_exciting_comments", () => {
        this.blockExcitingComments();
      });
      PopsPanel.execMenu("baidu_mbd_block_exciting_recommendations", () => {
        this.blockExcitingRecommendations();
      });
      PopsPanel.execMenu("baidu_mbd_shield_bottom_toolbar", () => {
        this.shieldBottomToolbar();
      });
    },
    /**
     * 屏蔽最热评论
     */
    blockExcitingComments() {
      log.info("屏蔽最热评论");
      CommonUtils.addBlockCSS(
        "div#commentModule",
        "#comment",
        '#page_wrapper > div > div[class^="borderBottom-"]'
      );
    },
    /**
     * 屏蔽最热推荐
     */
    blockExcitingRecommendations() {
      log.info("屏蔽最热推荐");
      CommonUtils.addBlockCSS(
        'div[class^="relateTitle"]',
        ".infinite-scroll-component__outerdiv",
        "div#fuseVideo + div[class]",
        /* 精彩推荐的文字 */
        "#content_wrapper + div + div",
        /* 简单UA下精彩推荐的文字 */
        "#page_wrapper .searchCraft #content_wrapper + div"
      );
      CommonUtils.addBlockCSS(
        /* Gecko下的简单UA下精彩推荐 */
        "#page_wrapper > div > div:nth-child(6)"
      );
    },
    /**
     * 屏蔽底部工具栏
     */
    shieldBottomToolbar() {
      log.info("屏蔽底部工具栏");
      CommonUtils.addBlockCSS("div#wise-invoke-interact-bar");
    }
  };
  const XueShieldCSS = ".sc-dkcEsn,\r\n.sc-fHSyak,\r\n.sc-gikAfH,\r\nswan-view.strategy-institution-list,\r\nswan-view.strategy-wrapper,\r\n.swan-spider-tap,\r\n.booking,\r\n.head-bar,\r\n.head-bar-placeholder {\r\n  display: none !important;\r\n}\r\n.sc-cHGmPC {\r\n  width: auto !important;\r\n}\r\n";
  const BaiduXue = {
    init() {
      addStyle(XueShieldCSS);
      log.info("插入CSS规则");
    }
  };
  const AiQiChaShieldCSS = 'div.header-down-app,\r\ndiv.active-enter,\r\ndiv.app-enter,\r\ndiv.coupon-active,\r\ndiv.cpc-adv-container,\r\ndiv.detail-footer.detail-footer-test,\r\ndiv.index-more[data-show-id="indexMoreExposure"] {\r\n  display: none !important;\r\n}\r\n.bread-crumbs.has-down,\r\n.border-bottom-line {\r\n  top: 0 !important;\r\n}\r\n';
  const BaiduAiQiCha = {
    init() {
      addStyle(AiQiChaShieldCSS);
      log.info("插入CSS规则");
      this.camouflageBottomPopup();
      PopsPanel.execMenu("baidu_aiqicha_shield_carousel", () => {
        this.shieldCarousel();
      });
      PopsPanel.execMenu("baidu_aiqicha_shield_industry_host_news", () => {
        this.shieldIndustryHostNews();
      });
    },
    /**
     * 伪装为已经弹窗过了
     */
    camouflageBottomPopup() {
      log.info("伪装为已经弹窗过了");
      _unsafeWindow.localStorage.setItem(
        "coupon_bottom_popup",
        (/* @__PURE__ */ new Date()).getTime().toString()
      );
    },
    /**
     * 屏蔽轮播图
     */
    shieldCarousel() {
      log.info("屏蔽轮播图");
      CommonUtils.addBlockCSS("div.index-banner-container.van-swipe");
    },
    /**
     * 屏蔽行业热点新闻
     */
    shieldIndustryHostNews() {
      log.info("屏蔽行业热点新闻");
      CommonUtils.addBlockCSS(" div.hot-news");
    }
  };
  const PosShieldCSS = "html,\r\nbody {\r\n  display: none !important;\r\n}\r\n";
  const BaiduPos = {
    init() {
      addStyle(PosShieldCSS);
      log.info("插入CSS规则");
    }
  };
  const BaiduHaoKanHook = {
    init() {
      PopsPanel.execMenu("baidu_haokan_hijack_wakeup", () => {
        log.success("hook: window.webpackJsonp");
        BaiduHook.windowWebpackJsonp_haokan();
      });
    }
  };
  const HaoKanShieldCSS = "div.share-origin.wx-share-launch,\r\ndiv.open-app-top,\r\ndiv.open-app-bottom.wx-share-launch,\r\n/* 打开APP  好看更清晰(1080P) */\r\n.NewOpenApp,\r\n/* 顶部空白区域 */\r\n.placeholder,\r\n/* 底部好看视频图片 */\r\n.page-buttom,\r\n/* 暂停视频弹出来的打开百度好看视频 */\r\n.video-player-download-tips {\r\n  display: none !important;\r\n}\r\n";
  const BaiduHaoKan = {
    init() {
      addStyle(HaoKanShieldCSS);
      log.info("插入CSS规则");
      BaiduHaoKanHook.init();
      PopsPanel.execMenu("baidu_haokan_shield_may_also_like", () => {
        this.shieldMayAlsoLike();
      });
      PopsPanel.execMenu("baidu_haokan_shield_today_s_hot_list", () => {
        this.shieldTodayHotList();
      });
      PopsPanel.execMenu("baidu_haokan_shield_right_video_action", () => {
        this.shieldRightVideoAction();
      });
      domutils.ready(() => {
        this.setPlayEvent();
      });
    },
    /**
     * 覆盖播放按钮的点击事件
     */
    setPlayEvent() {
      let playBtn = document.querySelector(".play-btn");
      log.success("覆盖播放按钮的点击事件");
      domutils.on(playBtn, "click", function() {
        let currentPageSee = document.querySelector(
          ".video-player .video-player-pause-btns .continue"
        );
        setTimeout(() => {
          var _a3;
          (_a3 = utils.getReactObj(currentPageSee)["reactEventHandlers"]) == null ? void 0 : _a3["onClick"]();
          PopsPanel.execMenu(
            "baidu_haokan_play_video_and_automatically_enter_full_screen",
            () => {
              if (utils.isFullscreenEnabled()) {
                let videoElement = document.querySelector(
                  "#video video.hplayer-video"
                );
                utils.enterFullScreen(videoElement);
              }
            }
          );
        }, 0);
      });
    },
    /**
     * 屏蔽可能感兴趣
     */
    shieldMayAlsoLike() {
      log.info("屏蔽可能感兴趣");
      CommonUtils.addBlockCSS("div.top-video-list-container");
    },
    /**
     * 屏蔽今日热门
     */
    shieldTodayHotList() {
      log.info("屏蔽今日热门");
      CommonUtils.addBlockCSS(".hot-rank-video");
    },
    /**
     * 屏蔽右侧视频操作
     */
    shieldRightVideoAction() {
      log.info("屏蔽右侧视频操作");
      CommonUtils.addBlockCSS(".video-author-info-mask .new-video-action");
    }
  };
  const BaiduGraphApi = {
    /**
     * 上传图片
     * @param event
     */
    async uploadImage(event) {
      var _a3, _b;
      let uploadImageFile = (_b = (_a3 = event.target) == null ? void 0 : _a3.files) == null ? void 0 : _b[0];
      if (!uploadImageFile) {
        alert("似乎并未正确上传图片？");
        return;
      }
      let formData = new FormData();
      formData.append("image", uploadImageFile);
      formData.append("tn", "pc");
      formData.append("from", "pc");
      formData.append("image_source", "PC_UPLOAD_FILE");
      formData.append("sdkParams", "undefined");
      let postResp = await httpx.post({
        url: `https://graph.baidu.com/upload?uptime=${Date.now()}`,
        data: formData,
        fetch: true,
        resposeType: "json",
        headers: {
          "user-agent": utils.getRandomPCUA(),
          Origin: "https://graph.baidu.com",
          Referer: "https://graph.baidu.com/pcpage/index?tpl_from=pc",
          Accept: "*/*"
        }
      });
      event.target.value = "";
      log.success(postResp);
      if (!postResp.status || postResp.data.status !== 200) {
        alert("图片上传失败，详情请看控制台");
        return;
      }
      let imageJSONData = utils.toJSON(postResp.data.responseText);
      log.success(imageJSONData);
      if (imageJSONData["status"] !== 0) {
        alert("图片API返回信息中status不为0，详情请看控制台");
      }
      if (window.location.pathname === "/s") {
        window.location.href = imageJSONData["data"]["url"];
      } else {
        window.open(imageJSONData["data"]["url"], "_blank");
      }
    }
  };
  const GraphShieldCSS = "#app section.vf-home-booth div.vf-w-button.vf-home-booth-camera,\r\n#viewport .graph-imagecut-banner-invoke,\r\n/* 往下滑动右下角的搜索图标按钮 */\r\n#app .vf-home-camera {\r\n  display: none !important;\r\n}\r\n";
  const BaiduGraph = {
    init() {
      addStyle(GraphShieldCSS);
      log.info("插入CSS规则");
      PopsPanel.execMenu("baidu-graph-repairHomeRecognitionPicture", () => {
        this.repairHomeRecognitionPicture();
      });
      PopsPanel.execMenu("baidu-graph-baidu-graph-repairSearchButton", () => {
        this.repairSearchButton();
      });
      PopsPanel.execMenu("baidu-graph-baidu-graph-repairSearchNoResult", () => {
        this.repairSearchNoResult();
      });
      PopsPanel.execMenu("baidu-graph-baidu-graph-repairRetakeButton", () => {
        this.repairRetakeButton();
      });
      domutils.ready(() => {
        this.addNewUploadImageButton();
      });
    },
    /**
     * 添加上传图片按钮（不可见的）
     */
    addNewUploadImageButton() {
      log.info("添加上传图片按钮（不可见的）");
      let uploadImageInput = domutils.createElement(
        "input",
        {
          id: "whitesev-upload-image"
        },
        {
          type: "file",
          accept: "image/*",
          style: "display: none"
        }
      );
      domutils.on(uploadImageInput, "change", BaiduGraphApi.uploadImage);
      domutils.append(document.body, uploadImageInput);
    },
    /**
     *重构主页的识图一下
     */
    repairHomeRecognitionPicture() {
      utils.waitNode(
        "#app section.vf-home-booth div.vf-w-button.vf-home-booth-camera"
      ).then(($vfHomeBoothCamera) => {
        log.success("重构主页的识图一下");
        let uploadImageDivDOM = domutils.createElement("div", {
          className: "vf-home-booth-camera"
        });
        domutils.css(uploadImageDivDOM, {
          position: "absolute",
          bottom: "-.42rem",
          left: "50%",
          width: "2.2rem",
          height: ".74rem",
          "background-image": "url(https://imgn0.bdstatic.com/image/mobile/n/static/wiseik/static/img/camera_5e72a3a.png)",
          "background-repeat": "no-repeat",
          "background-size": "cover",
          "background-position": "top",
          "-webkit-transform": "translateX(-50%)",
          "-ms-transform": "translateX(-50%)",
          transform: "translateX(-50%)",
          "-webkit-tap-highlight-color": "transparent"
        });
        domutils.on(uploadImageDivDOM, "click", function() {
          document.querySelector(
            "input#whitesev-upload-image"
          ).click();
        });
        domutils.after($vfHomeBoothCamera, uploadImageDivDOM);
      });
    },
    /**
     * 重构主页的往下滑动右下角出现的搜索图标按钮
     */
    repairSearchButton() {
      utils.waitNode(".vf-home.view-page").then(($viewPage) => {
        log.success("重构主页的往下滑动右下角出现的搜索图标按钮");
        let divHomeCamera = domutils.createElement("div", {
          className: "whitesev-vf-home-camera"
        });
        domutils.css(divHomeCamera, {
          display: "none",
          position: "fixed",
          right: ".1rem",
          bottom: ".48rem",
          height: ".74rem",
          width: ".74rem",
          "border-radius": "3px",
          background: "url(https://imgn0.bdstatic.com/image/mobile/n/static/wiseik/static/img/cameraBtn_c19ac1e.png) no-repeat 50%/100% auto",
          "text-align": "center"
        });
        domutils.on(divHomeCamera, "click", function() {
          document.querySelector(
            "input#whitesev-upload-image"
          ).click();
        });
        domutils.append($viewPage, divHomeCamera);
        utils.watchObject(
          $viewPage.__vue__,
          "showBottomCamera",
          () => {
            return false;
          },
          (_value_) => {
            if (_value_) {
              domutils.show(divHomeCamera);
            } else {
              domutils.hide(divHomeCamera);
            }
          }
        );
      });
    },
    /**
     * 如果出现识图没结果，重新识别，可能是因为后面参数多了tpl_from=pc的问题
     */
    repairSearchNoResult() {
      utils.waitNode("#app .graph-noresult-text1").then(() => {
        log.info("判断网页参数是否包含tpl_from=pc");
        if (window.location.search.endsWith("&tpl_from=pc")) {
          window.location.href = window.location.href.replace(
            /&tpl_from=pc$/gi,
            ""
          );
        }
      });
    },
    /**
     * 在已搜索出相关结果的界面中的重构【重拍】按钮
     */
    repairRetakeButton() {
      utils.waitNode("#viewport .graph-imagecut-banner-ctn").then(($imageCutBanner) => {
        log.info("在已搜索出相关结果的界面中的重构【重拍】按钮");
        let retakeDivDOM = domutils.createElement("div", {
          className: "retake-image",
          textContent: "重拍"
        });
        domutils.css(retakeDivDOM, {
          position: "absolute",
          top: "50%",
          right: "0",
          padding: "0 .17rem",
          "font-size": "16px",
          "line-height": "60px",
          color: "#000",
          "-webkit-transform": "translateY(-50%)",
          transform: "translateY(-50%)"
        });
        domutils.on(retakeDivDOM, "click", function(event) {
          utils.preventEvent(event);
          document.querySelector(
            "input#whitesev-upload-image"
          ).click();
          domutils.trigger(
            document.querySelector(
              "input#whitesev-upload-image"
            ),
            "click"
          );
        });
        setTimeout(() => {
          domutils.append($imageCutBanner, retakeDivDOM);
        }, 2e3);
      });
    }
  };
  const PanShieldCSS = "/* 失败页底部广告推荐 */\r\ndiv.share-error-ad,\r\n/* 左侧导航栏底部下载百度网盘APP横栏 */\r\n#app div.download-app,\r\n/* 失败页-小飞机送惊喜 */\r\ndiv.errorWrap div.share-plane,\r\n/* 保存到网盘右上角的领红包图标 */\r\nimg.sharelist-savebutton-hb-tip {\r\n  display: none !important;\r\n}\r\n";
  const BaiduPan = {
    init() {
      addStyle(PanShieldCSS);
      log.info("插入CSS规则");
    }
  };
  const YiYanShieldCSS = "";
  const BaiduYiYan = {
    init() {
      addStyle(YiYanShieldCSS);
      log.info("插入CSS规则");
      PopsPanel.execMenu("baidu_yiyan_remove_ai_mask", () => {
        BaiduYiYan.blockWaterMark();
      });
    },
    /**
     * 通过处理attachShadow和appendChild原型来去除水印
     * 屏蔽 AI生成内容仅供参考
     * 屏蔽 AI作图
     */
    blockWaterMark() {
      log.info("hook: Element.attachShadow");
      let oldShadow = _unsafeWindow.Element.prototype.attachShadow;
      _unsafeWindow.Element.prototype.attachShadow = function(...args) {
        const shadowRoot = oldShadow.call(this, args);
        this._shadowRoot = shadowRoot;
        shadowRoot.appendChild(
          domutils.createElement(
            "style",
            "div[id^='mask']{display: none !important;}"
          )
        );
        return shadowRoot;
      };
      log.success("hook: Element.appendChild");
      let oldAppendChild = _unsafeWindow.Element.prototype.appendChild;
      _unsafeWindow.Element.prototype.appendChild = function(element) {
        if (element.localName === "img") {
          setTimeout(() => {
            document.querySelectorAll("img").forEach((imageElement) => {
              if (imageElement.src.endsWith("style/wm_ai")) {
                imageElement.src = imageElement.src.replace(
                  /style\/wm_ai$/gi,
                  ""
                );
              }
            });
          }, 150);
        }
        return oldAppendChild.call(this, element);
      };
    }
  };
  const ChatShieldCSS = "";
  const BaiduChat = {
    init() {
      addStyle(ChatShieldCSS);
      log.info("插入CSS规则");
      domutils.ready(() => {
        PopsPanel.execMenu("baidu_chat_remove_ai_mask", () => {
          this.removeAiMask();
        });
      });
    },
    /**
     * 去除AI的遮罩
     */
    removeAiMask() {
      log.info("去除AI的遮罩");
      CommonUtils.addBlockCSS(
        ".bot-body .watermark",
        '#searchChatApp div[class^="watermark"]'
      );
      let lockFunc = new utils.LockFunction(function() {
        document.querySelectorAll("img[src*='style/wm_ai']").forEach((imgElement) => {
          log.info("处理AI水印：" + imgElement.src);
          imgElement.src = imgElement.src.replace(/style\/wm_ai/g, "");
        });
      }, 400);
      utils.mutationObserver(document.body, {
        config: { subtree: true, childList: true },
        callback: lockFunc.run
      });
    }
  };
  const MiniJiaoYuShieldCSS = "";
  const BaiduMiniJiaoYu = {
    init() {
      addStyle(MiniJiaoYuShieldCSS);
      log.info("插入CSS规则");
      PopsPanel.execMenu("mini_baidu_jiaoyu_shield_bottom_pull_down_menu", () => {
        this.shieldBottomPullDownMenu();
      });
    },
    /**
     * 屏蔽底部下拉菜单
     */
    shieldBottomPullDownMenu() {
      log.info("屏蔽底部下拉菜单");
      let hideCSS = `
        #page_loft{
            display: none !important;
        }`;
      addStyle(hideCSS);
      if (_unsafeWindow.top === _unsafeWindow.self) {
        domutils.ready(function() {
          utils.waitNode("iframe.swan-web-iframe").then((iframeElement) => {
            let _document = iframeElement.contentDocument;
            let _window = iframeElement.contentWindow;
            let _globalThis = _window;
            let _self = _window;
            let iframeDOMUtils = domutils.createDOMUtils({
              document: _document,
              window: _window,
              globalThis: _globalThis,
              self: _self
            });
            let iframeUtils = utils.createUtils({
              document: _document,
              window: _window,
              globalThis: _globalThis,
              self: _self,
              top: _unsafeWindow.top
            });
            iframeDOMUtils.ready(() => {
              log.info("iframe => 注入CSS规则");
              iframeUtils.addStyle(hideCSS);
            });
          });
        });
      }
    }
  };
  const EasyLearnShieldCSS = "/* 中间弹窗-限时专享福利 */\r\n#app .pre-unpaid-wrap,\r\n/* 底部工具栏上面-月考全胜 您有xx元体验卡 */\r\n.question-bottom-bar .vip-bar,\r\n/* 解析-免费查看答案及解析 */\r\n.question-analysis-new .see-more,\r\n/* 最底部-百度教育商务合作、产品代理销售或内容合作等*/\r\n.business-el-line,\r\n.business-el-line-background,\r\n/* 展开按钮 */\r\n.question-analysis-new .expand,\r\n/* 7日VIP限免 大学生免费领 */\r\n#app .bgk-question-detail .float-fixed {\r\n  display: none !important;\r\n}\r\n/* 显示答案及解析 */\r\n.ques-title.analysis-title + div {\r\n  display: unset !important;\r\n}\r\n.question-analysis-new .analysis-wrap,\r\n#analysis {\r\n  overflow: unset !important;\r\n  height: unset !important;\r\n  max-height: unset !important;\r\n}\r\n/* 电脑端 */\r\n/* 中间弹窗-限时专享福利 */\r\n.kaixue-dialog-mask,\r\n/* 解析-免费查看答案及解析 */\r\n.question-cont .mask,\r\n/* 底部-横幅畅享百万解题视频、 千万整本试题解析VIP全场免费下 */\r\n.vip-banner-cont {\r\n  display: none !important;\r\n}\r\n";
  const BaiduEasyLearn = {
    init() {
      addStyle(EasyLearnShieldCSS);
      log.info("插入CSS规则");
      PopsPanel.execMenu("baidu_easylearn_shield_this_question_paper", () => {
        this.shieldQuestionPaper();
      });
      PopsPanel.execMenu(
        "baidu_easylearn_shield_good_questions_in_this_volume",
        () => {
          this.shieldGoodQuestionsInThisVolume();
        }
      );
      PopsPanel.execMenu("baidu_easylearn_shield_related_test_papers", () => {
        this.shieldRelatedTestPapers();
      });
      PopsPanel.execMenu("baidu_easylearn_shield_video_explanation", () => {
        this.shieldVideoExplanation();
      });
      PopsPanel.execMenu("baidu_easylearn_shield_xueba_notes", () => {
        this.shieldXuebaNotes();
      });
      PopsPanel.execMenu("baidu_easylearn_shield_bottom_toolbar", () => {
        this.shieldBottomToolbar();
      });
      PopsPanel.execMenu(
        "baidu_easylearn_unlocking_the_upper_limit_of_search_questions",
        () => {
          this.hijackUserSearchQuestCount();
        }
      );
      PopsPanel.execMenu("baidu_easylearn_auto_show_answer", () => {
        this.showAnswerContent();
      });
      domutils.ready(() => {
        PopsPanel.execMenu("baidu_easylearn_unlocking_top_search_input", () => {
          this.allowUserSearchInput();
        });
      });
    },
    /**
     * 屏蔽题卷
     */
    shieldQuestionPaper() {
      log.info("屏蔽题卷");
      CommonUtils.addBlockCSS(
        ".question-shijuan-wrap",
        /* PC端 */
        ".question-cont .timu-wrap .doc-cont-v2 .left"
      );
    },
    /**
     * 屏蔽本卷好题
     */
    shieldGoodQuestionsInThisVolume() {
      log.info("屏蔽本卷好题");
      CommonUtils.addBlockCSS(".exercise-questions-wrap");
    },
    /**
     * 屏蔽本卷相关试卷
     */
    shieldRelatedTestPapers() {
      log.info("屏蔽本卷相关试卷");
      CommonUtils.addBlockCSS(
        ".related-papers-wrap",
        /* PC端 */
        ".question-cont .timu-wrap .doc-cont-v2 .right"
      );
    },
    /**
     * 屏蔽视频解析
     */
    shieldVideoExplanation() {
      log.info("屏蔽视频解析");
      CommonUtils.addBlockCSS(
        ".video-doc-compo",
        /* PC端 */
        ".container #questionVideo"
      );
    },
    /**
     * 屏蔽学霸
     */
    shieldXuebaNotes() {
      log.info("屏蔽学霸");
      CommonUtils.addBlockCSS(".note-list");
    },
    /**
     * 屏蔽底部工具栏
     */
    shieldBottomToolbar() {
      log.info("屏蔽底部工具栏");
      CommonUtils.addBlockCSS(
        ".question-bottom-bar",
        "#app .bgk-question-detail .float-btm"
      );
    },
    /**
     * 显示答案内容
     */
    showAnswerContent() {
      utils.waitNode("div.question-swiper").then(async ($questionSwiper) => {
        log.info("显示答案内容");
        await utils.waitVueByInterval(
          $questionSwiper,
          function(vueObj2) {
            return "$watch" in vueObj2;
          },
          100,
          1e4
        );
        let vueObj = VueUtils.getVue($questionSwiper);
        if (!vueObj) {
          log.error("获取vue属性失败 => div.question-swiper");
          return;
        }
        vueObj.$watch(
          ["isShowAnswer", "isShowAnswerContent"],
          function(newVal, oldVal) {
            log.success("显示答案");
            this.isShowAnswer = true;
            this.isShowAnswerContent = true;
          },
          {
            deep: true,
            immediate: true
          }
        );
        vueObj.$parent.$watch(
          "isOnAlternativeDialog",
          function(newVal, oldVal) {
            log.success("禁止显示弹窗");
            this.isOnAlternativeDialog = false;
          },
          {
            deep: true,
            immediate: true
          }
        );
        vueObj.$parent.$watch(
          "userChangeQuestionCount",
          function() {
            log.success("滑动改变题目");
            vueObj.isShowAnswer = true;
            vueObj.isShowAnswerContent = true;
          },
          {
            deep: true,
            immediate: true
          }
        );
        vueObj.$parent.openBgkApp = function(...args) {
          log.success(["openBgkApp：阻止调用App Scheme", args]);
        };
        vueObj.openApp = function(...args) {
          log.success(["openApp：阻止调用App Scheme", args]);
        };
        vueObj.$parent.goToApp = function(...args) {
          log.success(["goToApp：阻止调用App Scheme", args]);
        };
      });
    },
    /**
     * 劫持-今日搜题次数已达上限
     */
    hijackUserSearchQuestCount() {
      log.info("移除-【今日搜题次数已达上限】的本次存储的记录");
      _unsafeWindow.localStorage.removeItem("user_search_quest_count");
    },
    /**
     * 允许使用顶部的输入框
     */
    allowUserSearchInput() {
      utils.waitNode(
        ".search-input .search-box-wrap.search-box",
        1e4
      ).then(async ($searchBox) => {
        if (!$searchBox) {
          log.error("元素.search-input .search-box-wrap.search-box未出现");
          return;
        }
        log.success("允许使用顶部的输入框");
        await utils.waitVueByInterval(
          $searchBox,
          function(vueObj2) {
            return "$watch" in vueObj2;
          },
          250,
          1e4
        );
        let vueObj = VueUtils.getVue($searchBox);
        if (vueObj == null) {
          log.error(
            "获取vue属性失败 => .search-input .search-box-wrap.search-box"
          );
          return;
        }
        vueObj.$watch(
          "isFake",
          function(newVal, oldVal) {
            log.success("允许使用顶部搜索输入框");
            this.isFake = false;
          },
          {
            deep: true,
            immediate: true
          }
        );
      });
    }
  };
  const AiStudyShieldCSS = "";
  const BaiduAiStudy = {
    init() {
      addStyle(AiStudyShieldCSS);
      log.info("插入CSS规则");
      PopsPanel.execMenu("baidu_ai_study_shieldBottomToolBar", () => {
        this.shieldBottomToolBar();
      });
      PopsPanel.execMenu("baidu_ai_study_autoExpandFullText", () => {
        this.autoExpandFullText();
      });
    },
    /**
     * 屏蔽底部工具栏
     */
    shieldBottomToolBar() {
      log.info("屏蔽底部工具栏");
      CommonUtils.addBlockCSS(".gt-edu-h5-c-article-bottom");
    },
    /**
     * 自动展开全文
     */
    autoExpandFullText() {
      log.info("自动展开全文");
      CommonUtils.addBlockCSS(
        ".gt-edu-h5-c-article-content .content-wrapper .detail-wrapper .unfold-wrapper"
      );
      addStyle(`
        .gt-edu-h5-c-article-content .content-wrapper .detail-wrapper{
            max-height: unset !important;
        }
        `);
    }
  };
  const ISiteShieldCSS = "/* 底部推荐广告项 */\r\n.gt-local-h5-advert-card-root-container {\r\n  display: none !important;\r\n}\r\n";
  const BaiduISite = {
    init() {
      addStyle(ISiteShieldCSS);
      log.info("插入CSS规则");
      PopsPanel.execMenu(
        "baidu_isite_wjz2tdly_shieldBottomBarRootContainer",
        () => {
          this.shieldBottomBarRootContainer();
        }
      );
      PopsPanel.execMenu("baidu_isite_wjz2tdly_shieldRightSeeMoreToolBar", () => {
        this.shieldRightSeeMoreToolBar();
      });
      PopsPanel.execMenu("baidu_isite_wjz2tdly_shieldArticleBottom", () => {
        this.shieldArticleBottom();
      });
      PopsPanel.execMenu("baidu_isite_wjz2tdly_autoExpandFullText", () => {
        this.autoExpandFullText();
      });
    },
    /**
     * 屏蔽底部免费在线咨询
     */
    shieldBottomBarRootContainer() {
      log.info("屏蔽底部免费在线咨询");
      CommonUtils.addBlockCSS(".gt-local-h5-article-bottom-bar-root-container");
    },
    /**
     * 屏蔽右侧悬浮按钮-查看更多
     */
    shieldRightSeeMoreToolBar() {
      log.info("屏蔽右侧悬浮按钮-查看更多");
      CommonUtils.addBlockCSS(".icon-article-list.icon-article-list-exp");
    },
    /**
     * 屏蔽底部-大家还在看
     */
    shieldArticleBottom() {
      log.info("屏蔽底部-大家还在看");
      CommonUtils.addBlockCSS(".article-bottom");
    },
    /**
     * 自动展开全文
     */
    autoExpandFullText() {
      log.info("自动展开全文");
      CommonUtils.addBlockCSS(
        /* 点击查看全文按钮 */
        ".fold-wrapper"
      );
      addStyle(`
        .gt-local-h5-article-detail-article-fold-exp{
            max-height: unset !important;
        }
        `);
    }
  };
  const Baidu = {
    init() {
      if (BaiduRouter.isSearch()) {
        log.success("Router: 百度搜索");
        BaiduSearch.init();
      }
      if (BaiduRouter.isSearchHome()) {
        log.success("Router: 百度搜索-主页");
        BaiduSearchHome.init();
      }
      if (BaiduRouter.isBaiJiaHao()) {
        log.success("Router: 百家号");
        BaiduBaiJiaHao.init();
      }
      if (BaiduRouter.isTieBa()) {
        log.success("Router: 贴吧");
        BaiduTieBa.init();
      }
      if (BaiduRouter.isWenKu()) {
        log.success("Router: 百度文库");
        BaiduWenKu.init();
      }
      if (BaiduRouter.isJingYan()) {
        log.success("Router: 百度经验");
        BaiduJingYan.init();
      }
      if (BaiduRouter.isBaiKe()) {
        log.success("Router: 百度百科");
        BaiduBaiKe.init();
        if (BaiduRouter.isBaiKeTaShuo()) {
          log.success("Router: 百度百科-他说");
          BaiduBaiKeTaShuo.init();
        }
      }
      if (BaiduRouter.isZhiDao()) {
        log.success("Router: 百度知道");
        BaiduZhiDao.init();
      }
      if (BaiduRouter.isFanYi()) {
        log.success("Router: 百度翻译");
        BaiduFanYi.init();
      }
      if (BaiduRouter.isFanYiApp()) {
        log.success("Router: 百度翻译-App");
        BaiduFanYiApp.init();
      }
      if (BaiduRouter.isImage()) {
        log.success("Router: 百度图片");
        BaiduImage.init();
      }
      if (BaiduRouter.isMap()) {
        log.success("Router: 百度地图");
        BaiduMap.init();
      }
      if (BaiduRouter.isMbd()) {
        log.success("Router: mbd");
        BaiduMbd.init();
      }
      if (BaiduRouter.isXue()) {
        log.success("Router: 百度好学");
        BaiduXue.init();
      }
      if (BaiduRouter.isAiQiCha()) {
        log.success("Router: 百度爱企查");
        BaiduAiQiCha.init();
      }
      if (BaiduRouter.isPos()) {
        log.success("Router: 网盟");
        BaiduPos.init();
      }
      if (BaiduRouter.isHaoKan()) {
        log.success("Router: 好看视频");
        BaiduHaoKan.init();
      }
      if (BaiduRouter.isGraph()) {
        log.success("Router: 百度识图");
        BaiduGraph.init();
      }
      if (BaiduRouter.isPan()) {
        log.success("Router: 百度网盘");
        BaiduPan.init();
      }
      if (BaiduRouter.isYiYan()) {
        log.success("Router: 文心一言");
        BaiduYiYan.init();
      }
      if (BaiduRouter.isChat()) {
        log.success("Router: chat");
        BaiduChat.init();
      }
      if (BaiduRouter.isMiniJiaoYu()) {
        log.success("Router: 小程序-百度教育");
        BaiduMiniJiaoYu.init();
      }
      if (BaiduRouter.isEasyLearn()) {
        log.success("Router: 百度教育");
        BaiduEasyLearn.init();
      }
      if (BaiduRouter.isAiStudy()) {
        log.success("Router: 百度爱学");
        BaiduAiStudy.init();
      }
      if (BaiduRouter.isISite()) {
        log.success("Router: 百度基木鱼");
        BaiduISite.init();
      }
    }
  };
  if (typeof _unsafeWindow.BaiduOptimizationScriptRunCount !== "number") {
    _unsafeWindow.BaiduOptimizationScriptRunCount = 0;
    PopsPanel.init();
    Baidu.init();
  } else {
    _unsafeWindow.BaiduOptimizationScriptRunCount++;
    log.warn(
      "阻止脚本容器反复执行本脚本 " + _unsafeWindow.BaiduOptimizationScriptRunCount + " 次"
    );
  }

})(Vue, Qmsg, Utils, DOMUtils, Viewer, Pinia, ElementPlusIconsVue, VueDemi, VueRouter, ElementPlus);