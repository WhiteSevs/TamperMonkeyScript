// ==UserScript==
// @name         小红书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.6.28
// @author       WhiteSevs
// @description  屏蔽登录弹窗、屏蔽广告、优化评论浏览、优化图片浏览、允许复制、禁止唤醒App、禁止唤醒弹窗、修复正确跳转等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAx9JREFUWEfNl09MU0EQxn/beFTDDRI41FAMcNGbBw62oPEGid6UULxg1EhEEzExgdBEEzRqlKDxZCHgDZJ6U8TWAyaQGIsHMQLSA0S8VYQT2NXp9tnX0vKnpi2TNH1vd3bmm5lv9+0o0kQ73SXsc7QCx1EcjU9rnOl6O3pXRNAqCjqCIsB6LKQioYh9rbK/6MMnWojFHgElO3KwWyUBBD1q9q3fWvoPgHY1dIHu2a3N3PRVt5ob98naOABdVd+K5nluxnJc5dBe9TU4qHS128lvRzDnOufoH4iyETukihJ9EnSH0i5PAFRj7oH8z0r9UmlXw0fQZrsVWhQRKcFCEepvQo0DcNXrQgeechDtbQAVpbCyBiurqUmqqYSD+2FyOnPyZE50ln7A4vKWCc5egvIyCA3DzV4YeZ00UlEGQ/eN88670HsjOTczZ8bbvXCiDqbC8HkeBkahuhLE5sBICqDdAzh9yjh1n4OlZZgdTxqcDEPfIAw9SI1aMjg1DVrDpe5tAIRewOJ36LyXzIAgv+IFz1ljXN5FJAOjrwwIcd583YwfO2L0JHvW2qqGjKXYnAExJkYfDyYBaGWibmyDGhe0t/z9bikDSMQO4NZlEO5YJTggfHCBf8SUIo0TqQCEPB8C0Ddg6m5xQIj4xAcXu+DLPASHjY5/1BDUDkAyWF6amXjCkcYLW5Sg1gWBZ3C7H6Y+mWdJ48y35LiQ0HvGGLHzIFsJLAJLSSQzssYmmzMg0TVfM9vMqqMYkcwIejEiv59rhliy3URP2H6n3/zXJsbsO+ipz+huCUCQSb2E3eJQRNL+ZsIQS/a1ALQIKDtCxu0i4EUs8GPvk7YEXFPbNrvAmj5ZJ3dB49wSYbTlUIgqANJFzoFfq4aE8izBiC0h49iEmctagszUyevoHvgYFf1zXEwA6PBeuJLVXwUe5pVp2Yyr2HmVaMUW8tYNZXWuI6xrT6IxcbeiHYVtTCT62ZDf1pp5ekB1FaYU2qfmgvGLQWpzKi0adOfxlhxF0ZGxObUiT7RqbjRNoJ0oVZIzINMNy5Eehtg7NvCrSChqz/IfgUZkW/BhLsQAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://www.xiaohongshu.com/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.12.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@2.0.8/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.8/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.js
// @resource     ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.css
// @connect      edith.xiaohongshu.com
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

(function(e,t,n,r,i){"use strict";var a=Object.create,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,d=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=c(t),a=0,l=i.length,d;a<l;a++)d=i[a],!u.call(e,d)&&d!==n&&o(e,d,{get:(e=>t[e]).bind(null,d),enumerable:!(r=s(t,d))||r.enumerable});return e},f=(e,t,n)=>(n=e==null?{}:a(l(e)),d(t||!e||!e.__esModule?o(n,`default`,{value:e,enumerable:!0}):n,e));e=f(e),t=f(t),n=f(n),r=f(r),i=f(i);var p=typeof GM_addValueChangeListener<`u`?GM_addValueChangeListener:void 0,m=typeof GM_deleteValue<`u`?GM_deleteValue:void 0,h=typeof GM_getResourceText<`u`?GM_getResourceText:void 0,g=typeof GM_getValue<`u`?GM_getValue:void 0,_=typeof GM_info<`u`?GM_info:void 0,v=typeof GM_listValues<`u`?GM_listValues:void 0,ee=typeof GM_registerMenuCommand<`u`?GM_registerMenuCommand:void 0,te=typeof GM_removeValueChangeListener<`u`?GM_removeValueChangeListener:void 0,y=typeof GM_setValue<`u`?GM_setValue:void 0,ne=typeof GM_setValues<`u`?GM_setValues:void 0,re=typeof GM_unregisterMenuCommand<`u`?GM_unregisterMenuCommand:void 0,ie=typeof GM_xmlhttpRequest<`u`?GM_xmlhttpRequest:void 0,b=typeof unsafeWindow<`u`?unsafeWindow:void 0,ae=window,oe={ElementPlus:{keyName:`ElementPlusResourceCSS`,url:`https://fastly.jsdelivr.net/npm/element-plus@latest/dist/index.min.css`},Viewer:{keyName:`ViewerCSS`,url:`https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css`},Hljs:{keyName:`HljsCSS`,url:`https://fastly.jsdelivr.net/npm/highlight.js@latest/styles/github-dark.min.css`}},x={qmsg_config_position:{key:`qmsg-config-position`,defaultValue:`bottom`},qmsg_config_maxnums:{key:`qmsg-config-maxnums`,defaultValue:3},qmsg_config_showreverse:{key:`qmsg-config-showreverse`,defaultValue:!1},httpx_cookie_manager_enable:{key:`httpx-use-cookie-enable`,defaultValue:!1},httpx_cookie_manager_use_document_cookie:{key:`httpx-use-document-cookie`,defaultValue:!1}},S={waitRemove(...e){e.forEach(e=>{typeof e==`string`&&t.default.waitNodeList(e).then(e=>{e.forEach(e=>e.remove())})})},createBlockCSSNode(...e){let n=[];if(e.length!==0&&!(e.length===1&&typeof e[0]==`string`&&e[0].trim()===``))return e.forEach(e=>{Array.isArray(e)?n=n.concat(e):n.push(e)}),t.default.createElement(`style`,{type:`text/css`,innerHTML:`${n.join(`,
`)}{display: none !important;}`})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]==`string`&&e[0].trim()===``)&&(e.forEach(e=>{Array.isArray(e)?t=t.concat(e):t.push(e)}),t=t.map(e=>e.trim()).filter(e=>e!==``),t.length))return A(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){let t=typeof h==`function`?h(e.keyName):null;return typeof t==`string`&&t?A(t):S.loadStyleLink(e.url)},async loadStyleLink(e){let n=document.createElement(`link`);return n.rel=`stylesheet`,n.type=`text/css`,n.href=e,new Promise(e=>{t.default.onReady(()=>{document.head.appendChild(n),e(n)})})},async loadScript(e){let t=document.createElement(`script`);return t.src=e,new Promise(e=>{t.onload=()=>{e(null)},(document.head||document.documentElement).appendChild(t)})},fixUrl(e){return e=e.trim(),e.startsWith(`data:`)||e.match(/^http(s|):\/\//i)?e:e.startsWith(`//`)?(e.startsWith(`///`)||(e=window.location.protocol+e),e):(e.startsWith(`/`)||(e+=`/`),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith(`https://`)||!e.startsWith(`http://`))return e;try{let t=new URL(e);return t.protocol=`https:`,t.toString()}catch{return e}},lockScroll(...e){let t=document.createElement(`style`);t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...e||[]);return n.forEach(e=>{e.classList.add(`pops-overflow-hidden-important`)}),(document.head||document.documentElement).appendChild(t),{recovery(){n.forEach(e=>{e.classList.remove(`pops-overflow-hidden-important`)}),t.remove()}}},async getClipboardText(){function e(e){navigator.clipboard.readText().then(t=>{e(t)}).catch(t=>{E.error(`读取剪贴板内容失败👉`,t),e(``)})}function t(t){navigator.permissions.query({name:`clipboard-read`}).then(()=>{e(t)}).catch(n=>{E.error(`申请剪贴板权限失败，尝试直接读取👉`,n.message??n.name??n.stack),e(t)})}function n(){return!(typeof navigator?.clipboard?.readText!=`function`||typeof navigator?.permissions?.query!=`function`)}return new Promise(e=>{if(!n()){e(``);return}document.hasFocus()?t(e):window.addEventListener(`focus`,()=>{t(e)},{once:!0})})},escapeHtml(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`).replace(/©/g,`&copy;`).replace(/®/g,`&reg;`).replace(/™/g,`&trade;`).replace(/→/g,`&rarr;`).replace(/←/g,`&larr;`).replace(/↑/g,`&uarr;`).replace(/↓/g,`&darr;`).replace(/—/g,`&mdash;`).replace(/–/g,`&ndash;`).replace(/…/g,`&hellip;`).replace(/ /g,`&nbsp;`).replace(/\r\n/g,`<br>`).replace(/\r/g,`<br>`).replace(/\n/g,`<br>`).replace(/\t/g,`&nbsp;&nbsp;&nbsp;&nbsp;`)},interval(e,t,n=5e3){let r,i=n-t,a=t,o=async n=>{let s=await e(n);if(typeof s==`boolean`&&s||n){C.workerClearTimeout(r);return}if(a+=t,a>i){o(!0);return}r=C.workerSetTimeout(()=>{o(!1)},t)};o(!1)},findParentNode(e,n,r){if(r){let i=t.default.closest(e,r);if(i)return i.querySelector(n)}else return t.default.matches(e,n)?e:t.default.closest(e,n)},toStr(e,t=2){let n=`__undefined__placeholder__replaced__str__`+performance.now();return JSON.stringify(e,(e,t)=>t===void 0?n:t,t).replace(RegExp(`"${n}"`,`g`),`undefined`)},isVerticalScreen(){return!globalThis.screen.orientation.type.includes(`landscape`)},isMobileDevice(e=768){return this.isVerticalScreen()?globalThis.innerWidth<e:globalThis.innerHeight<e},isTopWindow(){let e=typeof b==`object`&&b?b:window;return e.top===e.self},formatVideoDuration(e){if(typeof e!=`number`&&(e=parseInt(e)),isNaN(e))return e.toString();let t=function(e){return e<10?`0${e}`:e};if(e<60)return`0:${t(e)}`;if(e>=60&&e<3600)return`${Math.floor(e/60)}:${t(e%60)}`;{let n=Math.floor(e/3600),r=Math.floor(e/60)%60,i=e%60;return`${n}:${t(r)}:${t(i)}`}},formatTimeStamp(e,t){if(typeof e==`number`&&e<0xe8d4a51000){let t=String(Date.now()).length-String(e).length;e*=10**t}let n=e,r=new Date(typeof e==`string`?e.replace(/-/g,`/`):e),i=new Date(t??Date.now()).getTime()-r.getTime(),a=Math.floor(i/(24*3600*1e3));if(a>0)n=a>7?C.formatTime(r.getTime()):a+`天前`;else{let e=i%(24*3600*1e3),t=Math.floor(e/(3600*1e3));if(t>0)n=t+`小时前`;else{let t=e%(3600*1e3),r=Math.floor(t/(60*1e3));if(r>0)n=r+`分钟前`;else{let e=t%(60*1e3);n=Math.round(e/1e3)+`秒前`}}}return n}},C=r.default.noConflict(),w=t.default.noConflict(),T=n.default,E=new C.Log(_,b.console||ae.console),D=_?.script?.name||void 0,se=n.default.fn.Utils.AnyTouch();E.config({debug:!1,logMaxCount:250,autoClearConsole:!0,tag:!0});var ce=()=>{let e=n.default.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex??0,t=C.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex??0;return Math.max(100,e,t)};e.default.config({isHTML:!0,autoClose:!0,showClose:!1,consoleLogContent(e){let t=e.setting.type;if(t===`loading`)return!1;let n=e.setting.content;return t===`warning`?E.warn(n):t===`error`?E.error(n):E.info(n),!1},get position(){return H.getValue(x.qmsg_config_position.key,x.qmsg_config_position.defaultValue)},get maxNums(){return H.getValue(x.qmsg_config_maxnums.key,x.qmsg_config_maxnums.defaultValue)},get showReverse(){return H.getValue(x.qmsg_config_showreverse.key,x.qmsg_config_showreverse.defaultValue)},get zIndex(){return ce()}}),T.GlobalConfig.setGlobalConfig({zIndex:()=>ce(),mask:{enable:!0,clickEvent:{toClose:!1,toHide:!1}},drag:!0});var O=new C.GM_Menu({GM_getValue:g,GM_setValue:y,GM_registerMenuCommand:ee,GM_unregisterMenuCommand:re}),k=new C.Httpx({xmlHttpRequest:ie,logDetails:!1});k.interceptors.request.use(e=>e),k.interceptors.response.use(e=>e,t=>(E.error(`[Httpx-HttpxRequest.response] 响应错误`,{data:t}),t.type===`onabort`?e.default.warning(`请求取消`,{consoleLogContent:!0}):t.type===`onerror`?e.default.error(`请求异常`,{consoleLogContent:!0}):t.type===`ontimeout`?e.default.error(`请求超时`,{consoleLogContent:!0}):e.default.error(`其它错误`,{consoleLogContent:!0}),t));var le={Object:{defineProperty:b.Object.defineProperty,keys:b.Object.keys,values:b.Object.values},Function:{apply:b.Function.prototype.apply,call:b.Function.prototype.call},Element:{appendChild:b.Element.prototype.appendChild},setTimeout:b.setTimeout.bind(b),clearTimeout:b.clearTimeout.bind(b),setInterval:b.setInterval.bind(b),clearInterval:b.clearInterval.bind(b)},A=w.addStyle.bind(w);S.addBlockCSS.bind(S);var j=t.default.selector.bind(t.default),ue=t.default.selectorAll.bind(t.default),M=new C.CookieManagerService({baseCookieHandler:`GM_cookie`});M.isSupportGM_cookie||(M.isSupportCookieStore?M.setOptions({baseCookieHandler:`cookieStore`}):M.setOptions({baseCookieHandler:`document.cookie`})),new C.DocumentCookieHandler;var N=`GM_Panel`,de=`data-init`,P=`data-key`,F=`data-default-value`,fe=`data-init-more-value`,pe=`data-plugin-search-config`,I=`data-storage-api`,L={followBrowserSize:!1,get width(){return L.followBrowserSize?globalThis.outerWidth:globalThis.innerWidth},get height(){return L.followBrowserSize?globalThis.outerHeight:globalThis.innerHeight}},R={setting:{get width(){return L.width<550?`88vw`:L.width<700?`550px`:`700px`},get height(){return L.height<450?`70vh`:L.height<550?`450px`:`550px`}},settingMiddle:{get width(){return L.width<350?`88vw`:`350px`},get height(){return L.height<450?`88vh`:`450px`}},settingBig:{get width(){return L.width<800?`92vw`:`800px`},get height(){return L.height<600?`80vh`:`600px`}},info:{get width(){return L.width<350?`88vw`:`350px`},get height(){return L.height<250?`88vh`:`250px`}}},z={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig??=new C.Dictionary,this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e)},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]},getDefaultBottomContentConfig(t){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let n=!1,r,i=(e,n)=>{if(t&&typeof t.translateCallback==`function`)return t.translateCallback(e,n);if(typeof n==`object`&&n)for(let t in n)e=e.replaceAll(`{{${t}}}`,n[t]);return e},a=(e,t)=>{typeof t!=`string`&&(t=S.toStr(t));let n=new Blob([t]),r=globalThis.URL.createObjectURL(n);w.createElement(`a`,{href:r,download:e}).click(),C.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(r)},500)},o=()=>{let t=t=>{let n=T.alert({title:{text:i(`请选择导入方式`),position:`center`},content:{text:`
            <div class="btn-control" data-mode="local">${i(`本地导入`)}</div>
            <div class="btn-control" data-mode="network">${i(`网络导入`)}</div>
            <div class="btn-control" data-mode="clipboard">${i(`剪贴板导入`)}</div>`,html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(e){e.close()}}},drag:!0,mask:{enable:!0},width:R.info.width,height:R.info.height,style:`
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
          }`}),r=n.$shadowRoot.querySelector(`.btn-control[data-mode='local']`),a=n.$shadowRoot.querySelector(`.btn-control[data-mode='network']`),o=n.$shadowRoot.querySelector(`.btn-control[data-mode='clipboard']`),s=async n=>{confirm(i(`是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）`))&&(typeof v==`function`?typeof m==`function`?(v().forEach(e=>{m(e)}),e.default.success(i(`已清空脚本存储的配置`))):e.default.error(i(`不支持GM_deleteValue函数，无法执行删除脚本配置`)):e.default.error(i(`不支持GM_listValues函数，无法清空脚本存储的配置`))),typeof ne==`function`?ne(n):Object.keys(n).forEach(e=>{let t=n[e];y(e,t)}),e.default.success(i(`配置导入完毕`)),t?.()},c=t=>new Promise(async n=>{let r=C.toJSON(t);Object.keys(r).length===0?e.default.warning(i(`解析为空配置，不导入`)):await s(r),n(!0)});w.on(r,`click`,e=>{w.preventEvent(e),n.close();let t=w.createElement(`input`,{type:`file`,accept:`.json`});w.on(t,[`propertychange`,`input`],()=>{if(!t.files?.length)return;let e=t.files[0],n=new FileReader;n.onload=()=>{c(n.result)},n.readAsText(e,`UTF-8`)}),t.click()}),w.on(a,`click`,t=>{w.preventEvent(t),n.close();let r=T.prompt({title:{text:i(`网络导入`),position:`center`},content:{text:``,placeholder:i(`请填写URL`),focus:!0},btn:{close:{enable:!0,callback(e){e.close()}},ok:{text:i(`导入`),callback:async t=>{let n=t.text;if(C.isNull(n)){e.default.error(i(`请填入完整的url`));return}let r=e.default.loading(i(`正在获取配置...`)),a=await k.get(n,{allowInterceptConfig:!1});if(r.close(),!a.status){E.error(a),e.default.error(i(`获取配置失败`),{consoleLogContent:!0});return}await c(a.data.responseText)&&t.close()}},cancel:{enable:!1}},drag:!0,mask:{enable:!0},width:R.info.width,height:`auto`}),a=r.$shadowRoot.querySelector(`input`),o=r.$shadowRoot.querySelector(`.pops-prompt-btn-ok`);w.on(a,[`input`,`propertychange`],()=>{w.val(a)===``?w.attr(o,`disabled`,`true`):w.removeAttr(o,`disabled`)}),w.onKeyboard(a,`keydown`,(e,t,n)=>{e===`Enter`&&n.length===0&&w.val(a)!==``&&w.emit(o,`click`)}),w.emit(a,`input`)}),w.on(o,`click`,async t=>{w.preventEvent(t),n.close();let r=await S.getClipboardText();if(r.trim()===``){e.default.warning(i(`获取到的剪贴板内容为空`));return}await c(r)})},n=(t=`${D}_panel-setting-${C.formatTime(Date.now(),`yyyy_MM_dd_HH_mm_ss`)}.json`,n)=>{let r=T.alert({title:{text:i(`请选择导出方式`),position:`center`},content:{text:`
            <div class="btn-control" data-mode="export-to-file">${i(`导出至文件`)}</div>
            <div class="btn-control" data-mode="export-to-clipboard">${i(`导出至剪贴板`)}</div>
            `,html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(e){e.close()}}},drag:!0,mask:{enable:!0},width:R.info.width,height:R.info.height,style:`
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
          }`}),o=r.$shadowRoot.querySelector(`.btn-control[data-mode='export-to-file']`),s=r.$shadowRoot.querySelector(`.btn-control[data-mode='export-to-clipboard']`);w.on(o,`click`,i=>{w.preventEvent(i);try{a(t,n),r.close()}catch(t){e.default.error(t.toString(),{consoleLogContent:!0})}}),w.on(s,`click`,async()=>{await C.copy(n)?(e.default.success(i(`复制成功`)),r.close()):e.default.error(i(`复制失败`))})},r=T.confirm({title:{text:i(`配置`),position:`center`},content:{text:`<textarea name="config-value" id="config" readonly></textarea>`,html:!0},btn:{ok:{enable:!0,type:`primary`,text:i(`导入`),callback(){t()}},cancel:{enable:!0,text:i(`导出`),callback(){n(void 0,s)}}},width:L.width<450?`90vw`:`450px`,height:`auto`,style:`
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
        `}).$shadowRoot.querySelector(`textarea`),o={};if(typeof v==`function`)v().forEach(e=>{let t=g(e);Reflect.set(o,e,t)});else{e.default.warning(i(`不支持函数GM_listValues，仅导出菜单配置`));let t=g(N);Reflect.set(o,N,t)}let s=S.toStr(o);r.value=s},s=()=>{let e=_?.script?.supportURL||_?.script?.namespace;typeof e==`string`&&C.isNotNull(e)&&window.open(e,`_blank`)};return[{id:`script-version`,title:i(`版本：{{version}}`,{version:_?.script?.version||i(`未知`)}),isBottom:!0,views:[],clickFirstCallback(){return!1},afterRender(e){new se(e.$asideLiElement).on(`tap`,function(){clearTimeout(r),r=void 0,n?(n=!1,o()):(r=setTimeout(()=>{n=!1,s()},200),n=!0)})}}]},setDefaultBottomContentConfig(e){this.$data.__defaultBottomContentConfig=e}},B={$data:{__menuOption:[{key:`show_pops_panel_setting`,text:`⚙ 设置`,autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{H.showPanel(z.getConfig(0))}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu()},initExtensionsMenu(){S.isTopWindow()&&O.add(this.$data.menuOption)},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e)},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(e=>{let t=this.$data.menuOption.findIndex(t=>t.key===e.key);t!==-1&&(this.$data.menuOption[t]=e)})},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1)}},me=class{data={storeNodeList:[],destoryFnList:[]};option={};constructor(e){this.option=e}handlerResult(e,t){let n=[],r=[],i=[];if(Array.isArray(t))i=i.concat(t);else{let e=t=>{if(typeof t==`object`&&t)if(t instanceof Element)i.push(t);else if(Array.isArray(t))e(t);else{let{$css:e,destory:n}=t;e!=null&&(Array.isArray(e)?i=i.concat(e):e instanceof Element&&i.push(e)),typeof n==`function`&&i.push(n)}else i.push(t)};e(t)}let a=e=>{if(e!=null){if(e instanceof Element){n.push(e);return}if(typeof e==`function`){r.push(e);return}}};for(let e of i){let t=a(e);if(typeof t==`boolean`&&!t)break;if(Array.isArray(e))for(let t of e){let e=a(t);if(typeof e==`boolean`&&!e)break}}this.clearStoreNodeList(),this.execDestoryFnAndClear(),e&&(this.data.storeNodeList=this.data.storeNodeList.concat(n),this.data.destoryFnList=this.data.destoryFnList.concat(r))}getEnableStatus(e){return!!this.option.getValue(e)}clearStoreNodeList=()=>{for(let e=this.data.storeNodeList.length-1;e>=0;e--)this.data.storeNodeList[e]?.remove(),this.data.storeNodeList.splice(e,1)};execDestoryFnAndClear=()=>{for(let e=this.data.destoryFnList.length-1;e>=0;e--){let t=this.data.destoryFnList[e];t(),this.data.destoryFnList.splice(e,1)}};checkMenuExec(){let e=!1;return e=typeof this.option.checkExec==`function`?this.option.checkExec(this.option.keyList):this.option.keyList.every(e=>this.getEnableStatus(e)),e}},V=new class{storageKey;listenerData;cacheData;callbacks=[];constructor(e){if(typeof e==`string`){let t=e.trim();if(t==``)throw Error(`key can not be empty string`);this.storageKey=t}else throw TypeError(`key must be a string`);this.listenerData=new r.default.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.setLocalValue=this.setLocalValue.bind(this),this.destory=this.destory.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this)}[Symbol.dispose](){this.destory()}async[Symbol.asyncDispose](){this.destory()}destory(){this.cacheData=null;for(let e=this.callbacks.length-1;e>=0;e--){let t=this.callbacks[e];t(),this.callbacks.splice(e,1)}}getLocalValue(){if(this.cacheData==null){let e=g(this.storageKey);e??(e={},this.setLocalValue(e)),this.destory(),this.cacheData=e;let t=p(this.storageKey,(e,t,n)=>{this.cacheData=null,this.cacheData=n});return this.callbacks.push(()=>{te(t)}),e}else return this.cacheData}setLocalValue(e){this.cacheData=null,this.cacheData=e,y(this.storageKey,e)}set(e,t){let n=this.get(e),r=this.getLocalValue();Reflect.set(r,e,t),this.setLocalValue(r),this.emitValueChangeListener(e,t,n)}get(e,t){let n=this.getLocalValue();return Reflect.get(n,e)??t}getAll(){return this.getLocalValue()}delete(e){let t=this.get(e),n=this.getLocalValue();Reflect.deleteProperty(n,e),this.setLocalValue(n),this.emitValueChangeListener(e,void 0,t)}has(e){let t=this.getLocalValue();return Reflect.has(t,e)}keys(){let e=this.getLocalValue();return Reflect.ownKeys(e)}values(){let e=this.getLocalValue();return Reflect.ownKeys(e).map(t=>Reflect.get(e,t))}clear(){this.destory(),m(this.storageKey)}addValueChangeListener(e,t){let n=Math.random(),r=this.listenerData.get(e)||[];return r.push({id:n,key:e,callback:t}),this.listenerData.set(e,r),n}removeValueChangeListener(e){let t=!1;for(let[n,r]of this.listenerData.entries()){for(let n=0;n<r.length;n++){let i=r[n];(typeof e==`string`&&i.key===e||typeof e==`number`&&i.id===e)&&(r.splice(n,1),n--,t=!0)}this.listenerData.set(n,r)}return t}async emitValueChangeListener(...e){let[t,n,r]=e;if(!this.listenerData.has(t))return;let i=this.listenerData.get(t);for(let a=0;a<i.length;a++){let o=i[a];if(typeof o.callback==`function`){let i,a;e.length===1||(e.length===2?i=n:e.length===3&&(i=n,a=r)),await o.callback(t,i,a)}}}}(N),H={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue??=new C.Dictionary,this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData??=new C.Dictionary,this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce??=new C.Dictionary,this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData??=new C.Dictionary,this.__onceExecData},get scriptName(){return D},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e},key:N,attributeKeyName:P,attributeDefaultValueName:F},init(){this.initContentDefaultValue(),B.init()},initContentDefaultValue(){let e=e=>{if(!e.attributes||e.type===`button`||e.type===`container`||e.type===`deepMenu`)return;let t=e.attributes,n=t[de];if(typeof n==`function`){let e=n();if(typeof e==`boolean`&&!e)return}let r=new Map,i=t[P];if(i!=null){let e=t[F];r.set(i,e)}let a=t[fe];if(typeof a==`object`&&a&&Object.keys(a).forEach(e=>{let t=a[e];r.set(e,t)}),!r.size){E.warn(`请先配置键`,e);return}if(e.type===`switch`){let t=typeof e.disabled==`function`?e.disabled():e.disabled;typeof t==`boolean`&&t&&this.$data.contentConfigInitDisabledKeys.push(...r.keys())}for(let[e,t]of r.entries())this.setDefaultValue(e,t)},t=n=>{for(let r=0;r<n.length;r++){let i=n[r];e(i);let a=i.views;a&&Array.isArray(a)&&t(a)}},n=[...z.getAllContentConfig()];for(let e=0;e<n.length;e++){let r=n[e];if(!r.views)continue;let i=r.views;i&&Array.isArray(i)&&t(i)}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)]},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&E.warn(`该key的默认值已进行初始化，覆盖该默认值: `,{key:e,defaultValue:t,coverDefaultValue:this.$data.contentConfigInitDefaultValue.get(e)}),this.$data.contentConfigInitDefaultValue.set(e,t)},getDefaultValue(e){return this.$data.contentConfigInitDefaultValue.get(e)},setValue(e,t){V.set(e,t)},getValue(e,t){return V.get(e)??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){V.delete(e)},hasKey(e){return V.has(e)},addValueChangeListener(e,t,n){let r=V.addValueChangeListener(e,t);if(n?.immediate||n?.immediateAll){let r=this.getValue(e);n?.immediate?t(e,r,r):n?.immediateAll&&H.emitMenuValueChange(e,r,r)}return r},removeValueChangeListener(e){V.removeValueChangeListener(e)},emitMenuValueChange(e,t,n){V.emitValueChangeListener(e,t,n)},async exec(e,t,n,r=!0){let i;i=typeof e==`string`||Array.isArray(e)?()=>e:e;let a=!1,o=i(),s=[];Array.isArray(o)?(a=!0,s=o):s.push(o);let c=s.find(e=>!this.$data.contentConfigInitDefaultValue.has(e));if(c){E.warn(`${c} 键不存在`);return}let l=JSON.stringify(s);if(r&&this.$data.onceExecMenuData.has(l))return this.$data.onceExecMenuData.get(l);let u=[],d=new me({keyList:s,getValue:e=>!!this.getValue(e),checkExec(e){let t=!1;return t=typeof n==`function`?n(e):e.every(e=>this.getValue(e)),t}}),f=async e=>{let n=d.checkMenuExec(),r=[];if(n){let i=s.map(e=>this.getValue(e));r=await t({key:s,triggerKey:e?.key,value:a?i:i[0],addStoreValue:(...e)=>d.handlerResult(n,e)})}d.handlerResult(n,r)};r&&s.forEach(e=>{let t=this.addValueChangeListener(e,(e,t,n)=>f({key:e,newValue:t,oldValue:n}));u.push(t)}),await f();let p={checkMenuExec:d.checkMenuExec.bind(d),keyList:s,reload(){this.clearStoreNodeList(),this.execDestoryFnAndClear(),f()},clear(){d.clearStoreNodeList(),this.execDestoryFnAndClear(),this.removeValueChangeListener(),this.clearOnceExecMenuData()},clearStoreNodeList:d.clearStoreNodeList.bind(d),execDestoryFnAndClear:d.execDestoryFnAndClear.bind(d),removeValueChangeListener:()=>{u.forEach(e=>{this.removeValueChangeListener(e)})},clearOnceExecMenuData(){r&&H.$data.onceExecMenuData.delete(l)}};return this.$data.onceExecMenuData.set(l,p),p},async execMenu(e,t,n=!1,r=!1){return await this.exec(e,async(...e)=>await t(...e),e=>e.every(e=>{let t=!!this.getValue(e);return H.$data.contentConfigInitDisabledKeys.includes(e)&&(t=!1,E.warn(`.execMenu${r?`Once`:``} ${e} 被禁用`)),n&&(t=!t),t}),r)},async execMenuOnce(e,t,n=!1,r=!1){let i=await this.execMenu(e,t,n,!0);return r&&i&&(this.removeUrlChangeWithExecMenuOnceListener(e),this.addUrlChangeWithExecMenuOnceListener(e,()=>{i.reload()})),i},async execMoreMenu(e,t,n=!1,r=!1,i=!1){let a=await Promise.all(e.map(async([e,t])=>await this.execMenu(e,(...e)=>t(...e),n,r))),o=new me({keyList:e.map(([e])=>e),getValue:e=>!!this.getValue(e)}),s=[],c=(e=!1)=>{if(o.clearStoreNodeList(),o.execDestoryFnAndClear(),e){for(let e of s)this.removeValueChangeListener(e);for(let e of a)e&&this.removeUrlChangeWithExecMenuOnceListener(e.keyList)}},l=()=>{let e=a.every(e=>e?e.checkMenuExec():!0);if(c(!1),e){let n=t();o.handlerResult(e,n)}};l();for(let e of a)if(e){let t=this.addValueChangeListener(e.keyList[0],()=>{l()});s.push(t),i&&(this.removeUrlChangeWithExecMenuOnceListener(e.keyList),this.addUrlChangeWithExecMenuOnceListener(e.keyList,()=>{e.reload()}))}return{clear(){for(let e of a)e?.clear();this.execDestoryFnAndClear(),this.removeValueChangeListener()},execDestoryFnAndClear(){for(let e of a)e?.execDestoryFnAndClear();c(!1)},removeValueChangeListener(){for(let e of a)e?.removeValueChangeListener();c(!0)}}},async execMoreMenuOnce(e,t,n=!1,r=!1){return await this.execMoreMenu(e,t,n,!0,r)},deleteExecMenuOnce(e){return e=this.transformKey(e),this.$data.onceExecMenuData.delete(e),this.$data.urlChangeReloadMenuExecOnce.delete(e),V.removeValueChangeListener(e)},onceExec(e,t,n=!1){if(e=this.transformKey(e),typeof e!=`string`)throw TypeError(`key 必须是字符串`);this.$data.onceExecData.has(e)||n&&(Array.isArray(e)?e:[e]).findIndex(e=>{if(!H.getValue(e))return!0})!==-1||(t(),this.$data.onceExecData.set(e,1))},deleteOnceExec(e){e=this.transformKey(e),this.$data.onceExecData.delete(e)},addUrlChangeWithExecMenuOnceListener(e,t){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.set(e,t),{off:()=>this.removeUrlChangeWithExecMenuOnceListener(e)}},removeUrlChangeWithExecMenuOnceListener(e){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.delete(e)},hasUrlChangeWithExecMenuOnceListener(e){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.has(e)},async emitUrlChangeWithExecMenuOnceEvent(e){let t=this.$data.urlChangeReloadMenuExecOnce.values();for(let n of t)await n(e)},showPanel(e,t=`${D}-设置`,n=!1,r=!1){this.$data.$panel=null,this.$data.panelContent=[];let i=e.findIndex(e=>(typeof e.isBottom==`function`?e.isBottom():!!e.isBottom)&&e.id===`script-version`)!==-1;!n&&!i&&e.push(...z.getDefaultBottomContentConfig());let a=T.panel({title:{text:t,position:`center`,html:!1,style:``},content:e,btn:{close:{enable:!0,callback:e=>{e.close(),this.$data.$panel=null}}},mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1},clickCallBack:e=>{e(),this.$data.$panel=null}},width:R.setting.width,height:R.setting.height,drag:!0,only:!0,style:`
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,...this.$data.panelConfig});return this.$data.$panel=a,this.$data.panelContent=e,r||this.registerConfigSearch({$panel:a,content:e}),{$panel:a,content:e}},registerConfigSearch(t){let{$panel:n,content:r}=t,i=(e,n)=>{if(typeof t.translateCallback==`function`)return t.translateCallback(e,n);if(typeof n==`object`&&n)for(let t in n)e=e.replaceAll(`{{${t}}}`,n[t]);return e},a=async(e,t)=>{if(e==null)return;let n=await t(e);return n&&typeof n.isFind==`boolean`&&n.isFind?n.data:await a(n.data,t)},o=(e,t)=>{let n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(t?.(),n.disconnect())})},{root:null,threshold:1});n.observe(e),e.scrollIntoView({behavior:`smooth`,block:`center`})},s=e=>{let t=`pops-flashing`;w.onAnimationend(e,()=>{e.classList.remove(t)}),e.classList.add(t)},c=c=>{if(c.type===`dblclick`&&f)return;w.preventEvent(c);let l=T.alert({title:{text:i(`搜索配置`),position:`center`},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="${i(`请输入需要搜素的配置名称`)}">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:!0},btn:{ok:{enable:!1}},mask:{clickEvent:{toClose:!0}},width:R.settingMiddle.width,height:`auto`,drag:!0,style:`
					${T.config.cssText.panelCSS}

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
					${t.searchDialogStyle??``}
				`}),u=l.$shadowRoot.querySelector(`.search-config-text`),d=l.$shadowRoot.querySelector(`.search-result-wrapper`);u.focus();let p=()=>{w.empty(d)},m=t=>{let r=C.queryProperty(t,e=>e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e}),c=w.createElement(`div`,{className:`search-result-item`,innerHTML:`
							<div class="search-result-item-path">${r.matchedData?.path}</div>
							<div class="search-result-item-description">${r.matchedData?.description??``}</div>
						`}),l=T.fn.PanelHandlerComponents();return w.on(c,`click`,()=>{let r=n.$shadowRoot.querySelectorAll(`aside.pops-panel-aside .pops-panel-aside-top-container li`)[t.index];if(!r){e.default.error(i(`左侧项下标{{index}}不存在`,{index:t.index}));return}r.scrollIntoView({behavior:`smooth`,block:`center`}),r.click(),a(t.next,async t=>{if(t?.next){let r=await w.waitNode(()=>Array.from(n.$shadowRoot.querySelectorAll(`.pops-panel-deepMenu-nav-item`)).find(e=>{let n=Reflect.get(e,l.$data.nodeStoreConfigKey);return typeof n==`object`&&!!n&&n.text===t.name}),2500);if(r)r.click();else return e.default.error(i(`未找到对应的二级菜单`)),{isFind:!0,data:t};return{isFind:!1,data:t.next}}else{let r=await w.waitNode(()=>Array.from(n.$shadowRoot.querySelectorAll(`li:not(.pops-panel-deepMenu-nav-item)`)).find(e=>Reflect.get(e,l.$data.nodeStoreConfigKey)===t.matchedData?.formConfig),2500);if(r){o(r);let e=r.closest(`.pops-panel-forms-fold[data-fold-enable]`);e&&(e.querySelector(`.pops-panel-forms-fold-container`).click(),await C.sleep(500)),o(r,()=>{s(r)})}else e.default.error(i(`未找到对应的菜单项`));return{isFind:!0,data:t}}})}),c},h=e=>{let t=new RegExp(e,`i`),n=[],i=(e,r)=>{for(let a=0;a<e.length;a++){let o=e[a],s=o.views;if(s&&Array.isArray(s)){let e=C.deepClone(r);if(o.type===`deepMenu`){let t=C.queryProperty(e,e=>e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e});t.next={name:o.text}}i(s,e)}else{let e,i;if(o.type===`own`){let t=Reflect.get(o.attributes||{},pe);t&&(typeof t==`function`&&(t=t()),typeof t.text==`string`&&(e=t.text),typeof t.desc==`string`&&(i=t.desc))}else e=o.text,i=Reflect.get(o,`description`);let a=[e,i],s=a.findIndex(e=>{if(typeof e==`string`)return e.match(t)});if(s!==-1){let t=C.deepClone(r),c=C.queryProperty(t,e=>e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e});c.next={name:e,matchedData:{path:``,formConfig:o,matchedText:a[s],description:i}};let l=[];C.queryProperty(t,e=>{let t=e?.name;return typeof t==`string`&&t.trim()!==``&&l.push(t),e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e}});let u=l.join(S.escapeHtml(` - `));c.next.matchedData.path=u,n.push(t)}}}};for(let e=0;e<r.length;e++){let t=r[e];if(!t.views||t.isBottom&&t.id===`script-version`)continue;let n=t.views;if(n&&Array.isArray(n)){let r=t.title;typeof r==`function`&&(r=r()),i(n,{index:e,name:r})}}let a=document.createDocumentFragment();for(let e of n){let t=m(e);a.appendChild(t)}p(),d.append(a)};w.on(u,`input`,C.debounce(e=>{w.preventEvent(e);let t=w.val(u).trim();if(t===``){p();return}h(t)},200))};n.$shadowRoot.querySelectorAll(`aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`).forEach(e=>{w.on(e,`dblclick`,c)});let l=new WeakMap,u=!1,d,f=!1;w.on(n.$shadowRoot,`touchend`,`aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`,(e,t)=>{f=!0,clearTimeout(d),d=void 0,u&&l.has(t)?(u=!1,l.delete(t),c(e)):(d=setTimeout(()=>{u=!1},200),u=!0,l.set(t,e))},{capture:!0}),n.$shadowRoot.appendChild(w.createElement(`style`,{type:`text/css`,textContent:`
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
    		`}))},transformKey(e){if(Array.isArray(e))if(e.length>1){let t=e.sort();return JSON.stringify(t)}else return e[0];else return e},getDynamicValue(e,t){let n=!1,r=t,i=this.addValueChangeListener(e,(e,t)=>{r=t});return{get value(){return n||(n=!0,r=H.getValue(e,t)),r},destory(){H.removeValueChangeListener(i)}}}},he=D||`小红书优化`,ge=i.default,U={isArticle(){return globalThis.location.pathname.startsWith(`/discovery/item/`)||globalThis.location.pathname.startsWith(`/explore/`)},isUserHome(){return globalThis.location.pathname.startsWith(`/user/profile/`)},isHome(){return globalThis.location.href===`https://www.xiaohongshu.com/`||globalThis.location.href===`https://www.xiaohongshu.com`},isSearch(){return globalThis.location.pathname.startsWith(`/search_result/`)}},_e=`https://edith.xiaohongshu.com`,ve={async getPageInfo(t,n=``,r=``,i=``,a=`jpg,webp`){let o={note_id:t,cursor:n,top_comment_id:i,image_formats:a,xsec_token:r},s=`/api/sns/web/v2/comment/page?`+C.toSearchParamsStr(o),c=await k.get(`${_e}${s}`,{headers:{Accept:`application/json, text/plain, */*`,"User-Agent":C.getRandomPCUA(),Origin:`https://www.xiaohongshu.com`,Referer:`https://www.xiaohongshu.com/`}});if(!c.status)return;let l=C.toJSON(c.data.responseText);if(E.info([`获取页信息`,l]),l.code===0||l.success)return l.data;l.code!==-101&&e.default.error(l.msg)},async getLzlPageInfo(t=``,n=``,r=10,i=``,a=`jpg,webp,avif`,o=``){let s={note_id:t,root_comment_id:n,num:r,cursor:i,image_formats:a,top_comment_id:o};``+C.toSearchParamsStr(s);let c=`${_e}/api/sns/web/v2/comment/sub/page?${C.toSearchParamsStr(s)}`,l=await k.get(c,{headers:{Accept:`application/json, text/plain, */*`,"User-Agent":`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36`,Host:`edith.xiaohongshu.com`,Origin:`https://www.xiaohongshu.com`,Referer:`https://www.xiaohongshu.com/`},onerror(){}});if(!l.status){l.data.status===406&&C.isNotNull(l.data.responseText)?C.toJSON(l.data.responseText).code==-1?e.default.error(`获取楼中楼信息失败，验证x-s、x-t、x-s-common失败`):e.default.error(`获取楼中楼信息失败`):e.default.error(`请求异常`),E.error([`获取楼中楼信息失败`,l]);return}let u=C.toJSON(l.data.responseText);if(E.info([`获取楼中楼页信息`,u]),u.code===0||u.success)return u.data;e.default.error(u.msg)},async getSearchRecommend(e){let t=await k.get(`https://edith.xiaohongshu.com/api/sns/web/v1/search/recommend?keyword=${e}`,{fetch:!0});if(!t.status)return;let n=C.toJSON(t.data.responseText);if(n.success||n.code===1e3)return n.data.sug_items}},ye={$data:{document_addEventListener:[],element_addEventListener:[],setTimeout:[],setInterval:[],function_apply:[],function_call:[],defineProperty:[]},document_addEventListener(e){if(this.$data.document_addEventListener.push(e),E.info(`document.addEventListener hook新增劫持判断回调`),this.$data.document_addEventListener.length>1)return;let t=this,n=new WeakMap,r=b.document.addEventListener,i=b.document.removeEventListener;b.document.addEventListener=function(...e){let i=this,a=e[0],o=e[1],s=e[2];for(let r=0;r<t.$data.document_addEventListener.length;r++){let c=t.$data.document_addEventListener[r],l=Reflect.apply(c,this,[i,a,o,s]);if(typeof l==`function`){e[1]=l,n.set(o,{eventName:a,fn:l,options:s});break}else if(typeof l==`boolean`&&!l)return}return Reflect.apply(r,this,e)},b.document.removeEventListener=function(...e){let t=e[0],r=e[1],a=e[2];if(n.has(r)){let{eventName:i,fn:o,options:s}=n.get(r),c=!1;t===i&&(typeof a==`boolean`&&a===s||typeof a==`object`&&typeof s==`object`&&a.capture===s.capture||a==a)&&(c=!0),c&&(e[1]=o)}return Reflect.apply(i,this,e)}},element_addEventListener(e){if(this.$data.element_addEventListener.push(e),E.info(`Element.prototype.addEventListener hook新增劫持判断回调`),this.$data.element_addEventListener.length>1)return;let t=this,n=new WeakMap,r=b.Element.prototype.addEventListener,i=b.Element.prototype.removeEventListener;b.Element.prototype.addEventListener=function(...e){let i=this,a=e[0],o=e[1],s=e[2];for(let r=0;r<t.$data.element_addEventListener.length;r++){let c=t.$data.element_addEventListener[r],l=Reflect.apply(c,this,[i,a,o,s]);if(typeof l==`function`){e[1]=l,n.set(o,{eventName:a,fn:l,options:s});break}else if(typeof l==`boolean`&&!l)return}return Reflect.apply(r,this,e)},b.Element.prototype.removeEventListener=function(...e){let t=e[0],r=e[1],a=e[2];if(n.has(r)){let{eventName:i,fn:o,options:s}=n.get(r),c=!1;i===t&&(typeof a==`boolean`&&a===s||typeof a==`object`&&typeof s==`object`&&a.capture===s.capture||a==s)&&(c=!0),c&&(e[1]=o)}return Reflect.apply(i,this,e)}},setTimeout(e){if(this.$data.setTimeout.push(e),E.info(`window.setTimeout hook新增劫持`),this.$data.setTimeout.length>1)return;let t=this,n=b.setTimeout;b.setTimeout=function(...e){let r=e[0],i=e[1];for(let n=0;n<t.$data.setTimeout.length;n++){let a=t.$data.setTimeout[n],o=a(r,i);if(typeof o==`boolean`&&!o)return;if(typeof o==`function`){e[0]=o;break}}return Reflect.apply(n,this,e)}},setInterval(e){if(this.$data.setInterval.push(e),E.info(`window.setInterval hook新增劫持`),this.$data.setInterval.length>1)return;let t=this,n=b.setInterval;b.setInterval=function(...e){let r=e[0],i=e[1];for(let n=0;n<t.$data.setInterval.length;n++){let a=t.$data.setInterval[n],o=a(r,i);if(typeof o==`boolean`&&!o)return;if(typeof o==`function`){e[0]=o;break}}return Reflect.apply(n,this,e)}},function_apply(e){if(this.$data.function_apply.push(e),E.info(`Function.prototype.apply hook新增劫持`),this.$data.function_apply.length>1)return;let t=this,n=b.Function.prototype.apply;b.Function.prototype.apply=function(...e){let r=e[0],i=e[1],a=this;for(let n=0;n<t.$data.function_apply.length;n++){let o=t.$data.function_apply[n];if(typeof o.paramsHandler==`function`){let t=o.paramsHandler(a,r,i,e);if(t!=null){if(t.args&&(`thisArg`in t.args&&(e[0]=t.args.thisArg),`argArray`in t.args&&(e[1]=t.args.argArray),typeof t.args.fn==`function`&&(a=t.args.fn)),t.preventDefault)return`result`in t?t.result:void 0;break}}}let o=n.call(a,...e);for(let n=0;n<t.$data.function_apply.length;n++){let r=t.$data.function_apply[n];if(typeof r.returnsHandler==`function`){let t=r.returnsHandler(a,e[0],e[1],o,e);t!=null&&`result`in t&&(o=t.result)}}return o}},function_call(e){if(this.$data.function_call.push(e),E.info(`Function.prototype.call hook新增劫持`),this.$data.function_call.length>1)return;let t=this,n=b.Function.prototype.call;b.Function.prototype.call=function(...e){let r=e[0],i=e.slice(1),a=this;for(let n=0;n<t.$data.function_call.length;n++){let o=t.$data.function_call[n];if(typeof o.paramsHandler==`function`){let t=o.paramsHandler(a,r,i,e);if(t!=null){if(t.args&&(`thisArg`in t.args&&(e[0]=t.args.thisArg),`argArray`in t.args&&e.splice(1,i.length,...t.args.argArray),typeof t.args.fn==`function`&&(a=t.args.fn)),t.preventDefault)return`result`in t?t.result:void 0;break}}}let o=n.apply(a,e);for(let n=0;n<t.$data.function_call.length;n++){let r=t.$data.function_call[n];if(typeof r.returnsHandler==`function`){let t=r.returnsHandler(a,e[0],e[1],o,e);t!=null&&`result`in t&&(o=t.result)}}return o}},defineProperty(e){if(this.$data.defineProperty.push(e),E.info(`Object.defineProperty hook新增劫持`),this.$data.defineProperty.length>1)return;let t=this,n=b.Object.defineProperty;b.Object.defineProperty=function(...e){let r=e[0],i=e[1],a=e[2];for(let n=0;n<t.$data.defineProperty.length;n++){let o=t.$data.defineProperty[n],s=o(r,i,a);if(s!=null){e[0]=s.target,e[1]=s.key,e[2]=s.attributes;break}}return Reflect.apply(n,this,e)}},window_webpack(e=`webpackJsonp`,t,n){let r;le.Object.defineProperty(b,e,{get(){return r},set(e){r=e;let i=e.push;e.push=function(...e){let r=e[0][0],a=!1;if(typeof t==`function`){let e=t(r);typeof e==`boolean`&&(a=e)}else a=t==r,a||Array.isArray(t)&&Array.isArray(r)&&(a=JSON.stringify(t)===JSON.stringify(r));if(a){let t=e[0][1];le.Object.keys(t).forEach(r=>{let i=t[r];typeof i==`function`&&(e[0][1][r]=function(...e){let t=i.call(this,...e),r=e[0];return e[0]=n(r),t})})}return i.call(this,...e)}}})}},W={webpackChunkranchi(){let e;Object.defineProperty(b,"webpackChunkranchi",{get(){return e},set(t){e=t;let n=e.push;e.push=function(...e){return e[0][0],typeof e[0][1]==`object`&&Object.keys(e[0][1]).forEach((t,n)=>{if(typeof e[0][1][t]==`function`&&e[0][1][t].toString().startsWith(`function(e,n,t){t.d(n,{Z:function(){return y}});`)&&e[0][1][t].toString().includes(`jumpToApp`)&&H.getValue(`little-red-book-hijack-webpack-scheme`)){let n=e[0][1][t];e[0][1][t]=function(...e){E.success([`成功劫持scheme唤醒`,e]);let t=e[2].d;return e[2].d=function(...e){if(e.length===2&&typeof e[1]?.Z==`function`){let t=e[1].Z;t.toString()===`function(){return y}`&&(e[1].Z=function(...e){let n=t.call(this,...e);return typeof n==`function`&&n.toString().includes(`jumpToApp`)?function(){return{jumpToApp(e){if(E.success([`拦截唤醒`,e]),e.deeplink?.startsWith(`xhsdiscover://user/`)){let t=e.deeplink.replace(/^xhsdiscover:\/\/user\//,``),n=window.location.origin+`/user/profile/${t}`;window.open(n,`_blank`)}}}}:n})}return t.call(this,...e)},n.call(this,...e)}}}),n.call(this,...e)}}})},hookVue(){let e=b.Object.assign,t=!1;b.Object.assign=function(...n){if(n.length==2&&n[1]?.render!==void 0&&!t){let e=n[1],r=e.render,i=!1;e.render=function(...e){return i||=(e[5]._.appContext.mixins.push({mounted(){this.$el.__Ivue__=this}}),!0),r.call(this,...e)},t=!0}return Reflect.apply(e,this,n)}},setTimeout(){ye.setTimeout(e=>{let t=e.toString();if(t===`function(){r()}`||t===`function(){u()}`)return E.success([`成功劫持setTimeout唤醒`,e]),!1})},call(){ye.function_call({paramsHandler(e,t,n){if(e.toString(),n[0]?.label===0&&Array.isArray(n[0]?.ops)&&Array.isArray(n[0]?.trys)&&typeof n[0]?.sent==`function`)return E.success([`成功劫持call唤醒`,e,t,n]),{args:{fn:e,thisArg:t,argArray:[]}};if(typeof t==`string`&&t.startsWith(`https://oia.xiaohongshu.com/oia`))return E.success([`成功劫持call跳转下载页面`,e,t,n]),{preventDefault:!0}}})}},be=`/* 底部的App内打开 */
.bottom-button-box,
/* 顶部的打开看看 */
.nav-bar-box {
  display: none !important;
}
`,G={allowCopy(){return E.info(`允许复制`),A(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `)},blockBottomSearchFind(){return E.info(`屏蔽底部搜索发现`),S.addBlockCSS(`.hotlist-container`,`.safe-area-bottom.margin-placeholder`)},blockBottomToorBar(){return E.info(`屏蔽底部工具栏`),S.addBlockCSS(`.engage-bar-container`)},blockAuthorHotNote(){return E.info(`屏蔽视频笔记的作者热门笔记`),S.addBlockCSS(`.user-notes-box.user-notes-clo-layout-container`)},blockHotRecommendNote(){return E.info(`屏蔽视频笔记的热门推荐`),S.addBlockCSS(`#new-note-view-container .recommend-box`)}},xe={optimizeVideoNoteDesc(){return E.info(`优化视频笔记的描述（可滚动）`),A(`
    .author-box .author-desc-wrapper .author-desc{
      max-height: 70px !important;
      overflow: auto !important;
    }
    /* 展开按钮 */
    .author-box .author-desc-wrapper .author-desc .author-desc-trigger{
      display: none !important;
    }`)}},Se={init(){A(be),(H.getValue(`little-red-book-hijack-webpack-mask`)||H.getValue(`little-red-book-hijack-webpack-scheme`))&&(E.info(`劫持webpack`),W.setTimeout(),W.call()),H.execMenuOnce(`little-red-book-shieldBottomSearchFind`,()=>G.blockBottomSearchFind()),H.execMenuOnce(`little-red-book-shieldBottomToorBar`,()=>G.blockBottomToorBar()),H.execMenuOnce(`little-red-book-optimizeImageBrowsing`,()=>Se.optimizeImageBrowsing()),H.execMenuOnce(`little-red-book-optimizeVideoNoteDesc`,()=>xe.optimizeVideoNoteDesc()),H.execMenuOnce(`little-red-book-shieldAuthorHotNote`,()=>G.blockAuthorHotNote()),H.execMenuOnce(`little-red-book-shieldHotRecommendNote`,()=>G.blockHotRecommendNote()),w.onReady(function(){H.execMenu(`little-red-book-optimizeCommentBrowsing`,()=>{Se.optimizeCommentBrowsing()})})},optimizeCommentBrowsing(){E.info(`优化评论浏览`);let t={QmsgLoading:void 0,scrollFunc:void 0,noteId:``,xsec_token:``,noteData:{},commentData:{},emojiMap:{},emojiNameList:[],currentCursor:void 0,commentContainer:void 0,init(){this.emojiMap=C.toJSON(b.localStorage.getItem(`redmoji`))?.redmojiMap||{},this.emojiNameList=Object.keys(this.emojiMap),this.scrollFunc=new C.LockFunction(this.scrollEvent,this);let e=b.__INITIAL_STATE__,n=e.noteData??e.data.noteData;t.noteData=n.data.noteData,t.commentData=n.data.commentData,t.noteId=t.noteData.noteId,t.xsec_token=e.noteData.routeQuery.xsec_token,E.info([`笔记数据`,t.noteData]),E.info([`评论数据`,t.commentData])},getCommentHTML(e){return`
				<div class="little-red-book-comments-avatar">
						<a target="_blank" href="/user/profile/${e.user_id}">
							<img src="${e.user_avatar}" crossorigin="anonymous">
						</a>
				</div>
				<div class="little-red-book-comments-content-wrapper">
					<div class="little-red-book-comments-author-wrapper">
						<div class="little-red-book-comments-author">
							<a href="/user/profile/${e.user_id}" class="little-red-book-comments-author-name" target="_blank">
								${e.user_nickname}
							</a>
						</div>
						<div class="little-red-book-comments-content">
							${e.content}
						</div>
						<div class="little-red-book-comments-info">
							<div class="little-red-book-comments-info-date">
								<span class="little-red-book-comments-create-time">${C.formatTime(e.create_time)}</span>
								<span class="little-red-book-comments-location">${e.ip_location}</span>
							</div>
						</div>
					</div>
				</div>
            `},getCommentElement(n){let r=n.content,i=n.create_time||parseInt(n.time),a=n.id,o=n.ip_location||n.ipLocation,s=n.sub_comment_has_more,c=parseInt(n.sub_comment_count)||0,l=n.sub_comment_cursor,u=n.sub_comments||n.subComments,d=(n.user_info||n.user).image,f=(n.user_info||n.user).nickname,p=n?.user_info?.user_id||n?.user?.userId;r=t.converContent(r);let m=w.createElement(`div`,{className:`little-red-book-comments-item`,innerHTML:`
					<div class="little-red-book-comments-parent">
					${t.getCommentHTML({user_id:p,user_avatar:d,user_nickname:f,content:r,create_time:i,ip_location:o})}
					</div>
					`});if(s&&Array.isArray(u)&&(u.forEach(e=>{let n=w.createElement(`div`,{className:`little-red-book-comments-reply-container`,innerHTML:t.getCommentHTML({user_id:e.user_info.user_id,user_avatar:e.user_info.image,user_nickname:e.user_info.nickname,content:t.converContent(e.content),create_time:e.create_time,ip_location:e.ip_location})});m.appendChild(n)}),c!==u.length)){let n=c-u.length,r=l,i=w.createElement(`div`,{className:`little-red-book-comments-reply-show-more`,innerText:`展开 ${n} 条回复`});async function o(){let s=e.default.loading(`加载中，请稍后...`),c=await ve.getLzlPageInfo(t.noteId,a,10,r,void 0);s.close(),c&&(r=c.cursor,n-=c.comments.length,i.innerText=`展开 ${n} 条回复`,c.comments.forEach(e=>{let n=w.createElement(`div`,{className:`little-red-book-comments-reply-container`,innerHTML:t.getCommentHTML({user_id:e.user_info.user_id,user_avatar:e.user_info.image,user_nickname:e.user_info.nickname,content:t.converContent(e.content),create_time:e.create_time,ip_location:e.ip_location})});w.before(i,n)}),c.has_more||(w.off(i,`click`,void 0,o,{capture:!0}),i.remove()))}w.on(i,`click`,void 0,o,{capture:!0}),m.appendChild(i)}return m},converContent(e){return t.emojiNameList.forEach(n=>{e.includes(n)&&(e=e.replaceAll(n,`<img class="little-red-book-note-content-emoji" crossorigin="anonymous" src="${t.emojiMap[n]}">`))}),e},async scrollEvent(){if(!C.isNearBottom(window.innerHeight/3))return;this.QmsgLoading??=e.default.loading(`加载中，请稍后...`);let n=await ve.getPageInfo(t.noteId,t.currentCursor,t.xsec_token);if(this.QmsgLoading&&=(this.QmsgLoading.close(),void 0),n&&(t.currentCursor=n.cursor,n.comments.forEach(e=>{let n=t.getCommentElement(e);t.commentContainer.appendChild(n)}),!n.has_more)){e.default.info(`已加载全部评论`),t.removeScrollEventListener();return}},addSrollEventListener(){E.success(`添加滚动监听事件`),w.on(document,`scroll`,void 0,t.scrollFunc.run,{capture:!0,once:!1,passive:!0})},removeScrollEventListener(){E.success(`移除滚动监听事件`),w.off(document,`scroll`,void 0,t.scrollFunc.run,{capture:!0})}};w.waitNode(`.narmal-note-container`).then(async()=>{E.info(`优化评论浏览-笔记元素出现`);let e=j(`.note-view-container`),n=w.createElement(`div`,{className:`little-red-book-comments-container`,innerHTML:`
          <style>
              .little-red-book-comments-parent {
                  position: relative;
                  display: flex;
                  padding: 8px;
                  width: 100%;
              }
              
              .little-red-book-comments-reply-container {
                  position: relative;
                  display: flex;
                  padding: 8px;
                  width: 100%;
                  padding-left: 52px;
              }
              .little-red-book-comments-container {
                  background: #fff;
                  position: relative;
                  padding: 8px 8px;
              }
              
              .little-red-book-comments-item {
                  position: relative;
              }
              
              .little-red-book-comments-avatar {
                  flex: 0 0 auto;
              }
              
              .little-red-book-comments-avatar img {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;
                  border-radius: 100%;
                  border: 1px solid rgba(0,0,0,0.08);
                  object-fit: cover;
                  width: 40px;
                  height: 40px;
              }
              .little-red-book-comments-content-wrapper {
                  margin-left: 12px;
                  display: flex;
                  flex-direction: column;
                  font-size: 14px;
                  flex-grow: 1;
              }
              
              .little-red-book-comments-author {display: flex;justify-content: space-between;align-items: center;}
              
              a.little-red-book-comments-author-name {
                  line-height: 18px;
                  color: rgba(51,51,51,0.6);
              }
              
              .little-red-book-comments-content {
                  margin-top: 4px;
                  line-height: 140%;
                  color: #333;
              }
              
              .little-red-book-comments-info {
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  font-size: 12px;
                  line-height: 16px;
                  color: rgba(51,51,51,0.6);
              }
              
              .little-red-book-comments-info-date {
                  margin: 8px 0;
              }
              
              span.little-red-book-comments-location {
                  margin-left: 4px;
                  line-height: 120%;
              }
              img.little-red-book-note-content-emoji {
                  margin: 0 1px;
                  height: 16px;
                  transform: translateY(2px);
                  position: relative;
              }
              .little-red-book-comments-reply-container .little-red-book-comments-avatar img {
                  width: 24px;
                  height: 24px;
              }
              .little-red-book-comments-total{
                  font-size: 14px;
                  color: rgba(51,51,51,0.6);
                  margin-left: 8px;
                  margin-bottom: 12px;
              }
              .little-red-book-comments-reply-show-more {
              padding-left: calc(52px + 24px + 12px);
              height: 32px;
              line-height: 32px;
              color: #13386c;
              cursor: pointer;
              font-weight: 500;
              font-size: 14px;
              }
          </style>
        `});t.commentContainer=n,t.init();let r=w.createElement(`div`,{className:`little-red-book-comments-total`,innerHTML:`共 ${t.commentData.commentCount??t.noteData.comments} 条评论`});n.appendChild(r),t.commentData&&t.commentData.comments&&(E.info(`从固定的评论中加载`),t.commentData.comments.forEach(e=>{let r=t.getCommentElement(e);n.appendChild(r)})),w.append(e,n)})},optimizeImageBrowsing(){E.info(`优化图片浏览`);let e=function(e=[],t=0){let n=``;e.forEach(e=>{n+=`<li><img data-src="${e}" loading="lazy"></li>`});let r=new ge(w.createElement(`ul`,{innerHTML:n}),{inline:!1,url:`data-src`,zIndex:C.getMaxZIndex()+100,hidden:()=>{r.destroy()}});t=t<0?0:t,r.view(t),r.zoomTo(1),r.show()},t=w.on(document,`click`,`.note-image-box`,(t,n)=>{let r=n.querySelector(`img`),i=[],a=[];a=n.closest(`.onix-carousel-item`)?Array.from(n.closest(`.onix-carousel-item`).parentElement.querySelectorAll(`img`)):[r];let o=a.findIndex(e=>e==r);a.forEach(e=>{let t=e.getAttribute(`src`)||e.getAttribute(`data-src`)||e.getAttribute(`alt`);t&&i.push(t)}),E.success([`点击浏览图片👉`,i[o]]),e(i,o)});return[S.setGMResourceCSS(oe.Viewer),()=>{t.off()}]}},Ce=`/* 用户主页 */
/* 底部的-App内打开 */
.launch-app-container.bottom-bar,
/* 顶部的-打开看看 */
.main-container > .scroll-view-container > .launch-app-container:first-child,
/* 底部的-打开小红书看更多精彩内容 */
.bottom-launch-app-tip.show-bottom-bar,
/* 首页-顶部横幅 */
#app .launch-app-container,
/* 笔记-顶部横幅 */
.note-view-container .nav-bar-box-expand ,
.note-view-container .nav-bar-box-expand+.placeholder-expand,
/* 404页面 顶部的打开看看 */
.not-found-container .nav-bar-box-expand:has(.share-info-box):has(.launch-btn),
/* 404页面 底部的-App内打开 */
.not-found-container #fmp {
  display: none !important;
}
`,we={init(){w.onReady(()=>{H.execMenuOnce(`little-red-book-repariClick`,()=>we.repariClick())})},repariClick(){E.info(`修复正确的点击跳转`);let t=w.on(document,`click`,t=>{let n=t.target;if(E.info([`点击的按钮元素`,n]),n?.className?.includes(`follow-btn`))E.success(`点击-关注按钮`);else if(n?.closest(`button.reds-button.message-btn`))E.success(`点击-私信按钮`);else if(n?.closest(`div.reds-tab-item`))E.success(`点击-笔记/收藏按钮`);else if(n?.closest(`section.reds-note-card`)){E.success(`点击-笔记卡片`);let t=n?.closest(`section.reds-note-card`),r=t.getAttribute(`id`)||C.toJSON(t.getAttribute(`impression`))?.noteTarget?.value?.noteId;r?window.open(`https://www.xiaohongshu.com/discovery/item/${r}`,`_blank`):e.default.error(`获取笔记note_id失败`)}return w.preventEvent(t),!1},{capture:!0});return[()=>{t.off()}]}},Te={init(){H.execMenuOnce(`little-red-book-shieldAd`,()=>(E.info(`注入默认屏蔽CSS`),A(Ce))),H.execMenuOnce(`little-red-book-allowCopy`,()=>Te.allowCopy()),U.isArticle()?Se.init():U.isUserHome()&&we.init()},allowCopy(){return E.info(`允许复制文字`),A(`
        *{
            -webkit-user-select: unset !important;
            user-select: unset !important;
        }
        `)}},Ee={getSearchUrl(e){return`https://www.xiaohongshu.com/search_result?keyword=${e}&source=web_explore_feed`}},K={getVue(e){if(e!=null)return e.__vue__||e.__Ivue__||e.__IVue__},getVue3(e){if(e!=null)return e.__vueParentComponent},waitVuePropToSet(e,t){Array.isArray(t)||(t=[t]);function n(){let t=null;return typeof e==`string`?t=w.selector(e):typeof e==`function`?t=e():e instanceof HTMLElement&&(t=e),t}t.forEach(e=>{typeof e.msg==`string`&&E.info(e.msg);let t=function(){let t=n();if(t==null)return{status:!1,isTimeout:!0,inst:null,$el:t};let r=K.getVue(t);return r==null?{status:!1,isTimeout:!1,inst:null,$el:t}:{status:!!e.check(r,t),isTimeout:!1,inst:r,$el:t}};C.waitVueByInterval(()=>n(),()=>t().status,250,1e4).then(()=>{let n=t();if(n.status){let t=n.inst;e.set(t,n.$el)}else typeof e.failWait==`function`&&e.failWait(n.isTimeout)})})},watchVuePropChange(e,t,n,r,i){let a=C.assign({immediate:!0,deep:!1},r||{});return new Promise(r=>{K.waitVuePropToSet(e,{check(e){return typeof e?.$watch==`function`},set(e){let i=null;i=typeof t==`function`?e.$watch(()=>t(e),(t,r)=>{n(e,t,r)},a):e.$watch(t,(t,r)=>{n(e,t,r)},a),r(i)},failWait:i})})},goToUrl(t,n,r=!1){if(t==null){e.default.error(`跳转Url: $vueNode为空`),E.error(`跳转Url: $vueNode为空：`+n);return}let i=K.getVue(t);if(i==null){e.default.error(`获取vue属性失败`,{consoleLogContent:!0});return}let a=i.$router,o=!0;if(E.info(`即将跳转URL：`+n),r&&(o=!1),o)window.open(n,`_blank`);else{if(n.startsWith(`http`)||n.startsWith(`//`)){n.startsWith(`//`)&&(n=window.location.protocol+n);let e=new URL(n);if(e.origin===window.location.origin)n=e.pathname+e.search+e.hash;else{E.info(`不同域名，直接本页打开，不用Router：`+n),window.location.href=n;return}}E.info(`$router push跳转Url：`+n),a.push(n)}},hookGestureReturnByVueRouter(e){function t(){E.success(`触发popstate事件`),r(!0)}function n(){E.success(`监听地址改变`),e.vueInst.$router.history.push(e.hash),w.on(b,`popstate`,t)}async function r(n=!1){if(w.off(b,`popstate`,t),!e.callback(n))for(;;)if(e.vueInst.$router.history.current.hash===e.hash)E.info(`后退！`),e.vueInst.$router.back(),await C.sleep(250);else return}return n(),{resumeBack:r}}},De={init(){(H.getValue(`pc-xhs-search-open-blank-btn`)||H.getValue(`pc-xhs-search-open-blank-keyboard-enter`))&&this.optimizationSearch(),H.exec([`pc-xhs-search-open-blank-btn`,`pc-xhs-search-open-blank-keyboard-enter`],()=>this.optimizationSearch(),e=>e.some(e=>{let t=!!H.getValue(e);return H.$data.contentConfigInitDisabledKeys.includes(e)&&(t=!1,E.warn(`.exec ${e} 被禁用`)),t})),H.execMenuOnce(`pc-xhs-article-fullWidth`,()=>this.fullWidth())},optimizationSearch(){let t=function(t,n=!0){if(t==null){let t=j(`#search-input`);if(t){let e=t.value,r=Ee.getSearchUrl(e);E.info(`搜索内容: `+e),window.open(r,n?`_blank`:`_self`)}else e.default.error(`未找到搜索的输入框`)}else E.info(`搜索内容: `+t),window.open(t,n?`_blank`:`_self`)};w.waitNode(`#search-input`).then(e=>{e.placeholder=`搜索小红书`,H.execMenu(`pc-xhs-search-open-blank-keyboard-enter`,()=>{w.onKeyboard(e,`keydown`,(n,r,i,a)=>{n===`Enter`&&!i.length&&(E.info(`按下回车键`),w.preventEvent(a),e.blur(),t())})})}),w.waitNode(`#search-input + .input-button .search-icon`).then(e=>{H.execMenu(`pc-xhs-search-open-blank-btn`,()=>{w.on(e,`click`,e=>{w.preventEvent(e),E.info(`点击搜索按钮`),t()},{capture:!0})})})},fullWidth(){E.info(`笔记宽屏`);let e=H.getValue(`pc-xhs-article-fullWidth-widthSize`,90),t=H.getValue(`pc-xhs-article-fullWidth-imageSize`,80);return A(`
		.main-container .main-content{
			padding-left: 0 !important;
		}
		.outer-link-container{
			width: 100% !important;
		}
		/* 隐藏左侧工具栏 */
		.main-container .side-bar{
			display: none !important;
		}
		#noteContainer{
			width: ${e}vw;
		}
		@media (min-width: 960px) {
			#noteContainer .media-container{
				width: ${t}% !important;
				height: auto !important;
			}
		}
		@media (max-width: 959px) {
			#noteContainer .media-container{
				height: ${t}% !important;
				width: auto !important;
			}
		}
		`)},transformPublishTime(){E.info(`转换笔记发布时间`);let e=new C.LockFunction(()=>{ue(`.note-content:not([data-edit-date])`).forEach(e=>{let t=K.getVue(e);if(!t)return;let n=t?._?.props?.note;if(n==null)return;let r=n.time,i=n.lastUpdateTime,a=n.ipLocation;if(typeof r==`number`){let t=[];t.push(`发布：${C.formatTime(r)}`),typeof i==`number`&&t.push(`修改：${C.formatTime(i)}`),typeof a==`string`&&C.isNotNull(a)&&t.push(a);let n=e.querySelector(`.date`);w.html(n,t.join(`<br>`)),e.setAttribute(`data-edit-date`,``)}})}),t=C.mutationObserver(document,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{e.run()}});return[()=>{t?.disconnect()}]}},Oe={__ajaxHooker:null,get ajaxHooker(){return this.__ajaxHooker??=C.ajaxHooker(),this.__ajaxHooker}},ke=function(e,t,n,r,i,a,o,s,c,l){let u={text:e,type:`button`,attributes:{},props:{},description:t,buttonIcon:r,buttonIsRightIcon:i,buttonIconIsLoading:a,buttonType:o,buttonText:n,callback(e){typeof s==`function`&&s(e)},afterAddToUListCallBack:c};return Reflect.set(u.attributes,de,()=>{u.disable=!!(typeof l==`function`?l():l)}),u},q=function(e,t,n,r,i,a,o){let s={text:e,type:`select`,description:a,attributes:{},props:{},getValue(){return this.props[I].get(t,n)},callback(e){if(e==null)return;let n=e.value;E.info(`选择：${e.text}`),!(typeof i==`function`&&i(e))&&(this.props[I].set(t,n),typeof o==`function`&&o(e))},data:r};return Reflect.set(s.attributes,P,t),Reflect.set(s.attributes,F,n),Y.initComponentsStorageApi(`select`,s,{get(e,t){return H.getValue(e,t)},set(e,t){H.setValue(e,t)}}),s},Ae=function(e,t,n,r,i,a,o=`请至少选择一个选项`,s,c){let l=[];l=typeof r==`function`?r():r;let u={text:e,type:`select-multiple`,description:a,placeholder:o,attributes:{},props:{},getValue(){return this.props[I].get(t,n)},selectConfirmDialogConfig:s,callback(e){let n=this.props[I],r=[];e.forEach(e=>{r.push(e.value)}),E.info(`多选-选择：`,r),!(typeof i==`function`&&i(e))&&(n.set(t,r),typeof c==`function`&&c(e))},data:l};return Reflect.set(u.attributes,P,t),Reflect.set(u.attributes,F,n),Y.initComponentsStorageApi(`select-multiple`,u,{get(e,t){return H.getValue(e,t)},set(e,t){H.setValue(e,t)}}),u},je=function(e,t,n,r,i,a,o,s,c,l){let u={text:e,type:`slider`,description:s,attributes:{},props:{},getValue(){return this.props[I].get(t,n)},getToolTipContent(e){return typeof o==`function`?o(e):`${e}`},callback(e,n){typeof a==`function`&&a(e,n)||(this.props[I].set(t,n),typeof l==`function`&&l(e,n))},min:r,max:i,step:c};return Reflect.set(u.attributes,P,t),Reflect.set(u.attributes,F,n),Y.initComponentsStorageApi(`slider`,u,{get(e,t){return H.getValue(e,t)},set(e,t){H.setValue(e,t)}}),u},J=function(t,n,r=!1,i,a,o,s,c,l){if(l&&typeof l.defaultValue==`object`&&l.defaultValue!=null){let e=l.key??n;l.handler.add({key:e,name:t}),l.handler.shortCut.initConfig(e,l.defaultValue)}let u={text:t,type:`switch`,description:a,disabled:s,attributes:{},props:{},getValue(){return this.props[I].get(n,r)},callback(e,r){let a=!!r;E.success(`${a?`开启`:`关闭`} ${t}`),!(typeof i==`function`&&i(e,a))&&(this.props[I].set(n,a),typeof c==`function`&&c(e,a))},afterAddToUListCallBack:(...r)=>{if(o?.(...r),l){let i=l.handler.shortCut,a=l.key??n,[o,s]=r,c=s.target?.querySelector(`.pops-panel-item-left-main-text`);if(!c)return;let u=()=>{let e=l.handler.shortCut.getShowText(a,`暂未录入快捷键`),n=w.createElement(`div`,{className:`pops-switch-shortcut-wrapper`,innerHTML:`
              <i class="pops-bottom-icon" is-loading="false">
                <svg viewBox="0 0 1123 1024" xmlns="http://www.w3.org/2000/svg" data-type="keyboard">
                  <path d="M1014.122186 1024H109.753483A109.753483 109.753483 0 0 1 0 914.246517V392.917471a109.753483 109.753483 0 0 1 109.753483-109.753484h904.368703a109.753483 109.753483 0 0 1 109.753484 109.753484v521.329046a109.753483 109.753483 0 0 1-109.753484 109.753483zM109.753483 370.966774a21.950697 21.950697 0 0 0-21.950696 21.950697v521.329046a21.950697 21.950697 0 0 0 21.950696 21.950696h904.368703a21.950697 21.950697 0 0 0 21.950697-21.950696V392.917471a21.950697 21.950697 0 0 0-21.950697-21.950697z"></path>
                  <path d="M687.056806 891.198285H307.309753a43.901393 43.901393 0 0 1 0-87.802787h379.747053a43.901393 43.901393 0 0 1 0 87.802787zM175.605573 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM432.428725 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM947.172562 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 546.572347a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 803.395498a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 678.276527a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM948.270096 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394z"></path>
                  <path d="M881.320472 766.079314H689.251876a43.901393 43.901393 0 0 1 0-87.802787h192.068596a21.950697 21.950697 0 0 0 21.950696-21.950696v-65.85209a43.901393 43.901393 0 0 1 87.802787 0v65.85209a109.753483 109.753483 0 0 1-109.753483 109.753483zM305.114684 502.670954H175.605573a43.901393 43.901393 0 0 1 0-87.802787h129.509111a43.901393 43.901393 0 0 1 0 87.802787zM563.03537 365.4791a43.901393 43.901393 0 0 1-43.901394-43.901394v-105.363344A109.753483 109.753483 0 0 1 628.88746 106.460879h61.461951a21.950697 21.950697 0 0 0 21.950696-21.950697V43.901393a43.901393 43.901393 0 0 1 87.802787 0v40.608789a109.753483 109.753483 0 0 1-109.753483 109.753484h-61.461951a21.950697 21.950697 0 0 0-21.950697 21.950696v105.363344a43.901393 43.901393 0 0 1-43.901393 43.901394z"></path>
                </svg>
              </i>
            `},{style:`margin-right: 5px;display: inline-flex;`}),r=n.querySelector(`.pops-bottom-icon`);w.on(r,`click`,function(e){l.handler.shortCut.deleteOption(a),i.toolTip.offEvent(),i.toolTip.close(),i.toolTip.destory(),n.remove()},{once:!0});let i=T.tooltip({$target:r,content:()=>e,className:`github-tooltip`,isFixed:!0,only:!0});w.empty(c),w.append(c,n,t)};if(T.rightClickMenu({$target:c,only:!0,data:[{text:()=>l.handler.shortCut.hasOption(a)?`修改快捷键`:`添加快捷键`,icon:T.config.iconSVG.keyboard,callback(t,n,r,o){if(i.isWaitKeyboardPress()){e.default.warning(`请先执行当前的录入操作`);return}let s=e.default.loading(`请按下快捷键...`,{showClose:!0,onClose(){i.cancelEnterShortcutKeys()}});i.enterShortcutKeys(a).then(({status:t,option:n,key:r})=>{s.close(),t?(E.success(`录入快捷键`,n),e.default.success(`录入成功`),u()):e.default.error(`快捷键 ${i.translateKeyboardValueToButtonText(n)} 已被 ${r} 占用`)})}}]}),!i.hasOption(a))return;u()}}};return Reflect.set(u.attributes,P,n),Reflect.set(u.attributes,F,r),Y.initComponentsStorageApi(`switch`,u,{get(e,t){return H.getValue(e,t)},set(e,t){H.setValue(e,t)}}),u},Me=function(e,t,n,r,i,a=``,o,s){let c={text:e,type:`textarea`,attributes:{},props:{},description:r,placeholder:a,disabled:o,getValue(){let e=this.props[I].get(t,n);return Array.isArray(e)?e.join(`
`):e},callback(e,n){typeof i==`function`&&i(e,n)||(this.props[I].set(t,n),typeof s==`function`&&s(e,n))}};return Reflect.set(c.attributes,P,t),Reflect.set(c.attributes,F,n),Y.initComponentsStorageApi(`switch`,c,{get(e,t){return H.getValue(e,t)},set(e,t){H.setValue(e,t)}}),c},Y={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||=new r.default.Dictionary,this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t)},initComponentsStorageApi(e,t,n){let r;r=this.hasStorageApi(e)?this.getStorageApi(e):n,this.setComponentsStorageApiProperty(t,r)},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,I,t)}},Ne=function(e,t,n,r,i,a=``,o=`text`,s,c){let l={text:e,type:`input`,inputType:o,attributes:{},props:{},description:r,placeholder:a,afterAddToUListCallBack:s,getValue(){return this.props[I].get(t,n)},callback(e,n){let r=e.target.validity.valid;typeof i==`function`&&i(e,n,r)||(this.props[I].set(t,n),typeof c==`function`&&c(e,n,r))}};return Reflect.set(l.attributes,P,t),Reflect.set(l.attributes,F,n),Y.initComponentsStorageApi(`input`,l,{get(e,t){return H.getValue(e,t)},set(e,t){H.setValue(e,t)}}),l},Pe=class{option;constructor(e){this.option=e}getAllRule(){return g(this.option.STORAGE_API_KEY,[])}setAllRule(e){y(this.option.STORAGE_API_KEY,e)}clearAllRule(){this.setAllRule([])}getRule(e){let t=this.getAllRule(),n=t.findIndex(t=>t.uuid===e);if(n!==-1)return t[n]}setRule(e){let t=this.getAllRule(),n=t.findIndex(t=>t.uuid===e.uuid),r=!1;return n!==-1&&(t[n]=e,this.setAllRule(t),r=!0),r}addRule(e){let t=this.getAllRule(),n=t.findIndex(t=>t.uuid===e.uuid),r=!1;return n!==-1||(t.push(e),this.setAllRule(t),r=!0),r}updateRule(e){let t=this.getAllRule(),n=t.findIndex(t=>t.uuid===e.uuid);n===-1?t.push(e):t[n]=e,this.setAllRule(t)}deleteRule(e){let t=this.getAllRule(),n=typeof e==`string`?e:e.uuid,r=t.findIndex(e=>e.uuid===n);return r===-1?!1:(t.splice(r,1),this.setAllRule(t),!0)}importRules(t){let n=T.alert({title:{text:`请选择导入方式`,position:`center`},content:{text:`
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(e){e.close()}}},mask:{enable:!0},drag:!0,width:R.info.width,height:R.info.height,style:`
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),r=n.$shadowRoot.querySelector(`.btn-control[data-mode='local']`),i=n.$shadowRoot.querySelector(`.btn-control[data-mode='network']`),a=n.$shadowRoot.querySelector(`.btn-control[data-mode='clipboard']`),o=async n=>{let r=this.getAllRule(),i=[],a=[],o=!1;for(let e=0;e<n.length;e++){let t=n[e],o=r.findIndex(e=>e.uuid===t.uuid);o===-1?i.push(t):a.push({index:o,data:t})}if(a.length&&await new Promise(e=>{T.alert({title:{text:`覆盖规则`,position:`center`},content:{text:`存在相同的uuid的规则 ${a.length}条，是否进行覆盖？`,html:!0},btn:{close:{callback(t){t.close(),e(!1)}},ok:{text:`覆盖`,callback(t){t.close(),e(!0)}}},width:R.info.width,height:R.info.height,mask:{enable:!0},drag:!0})})){for(let e of a)r[e.index]=e.data;o=!0}i.length&&(r=r.concat(i)),this.setAllRule(r);let s=`共 ${n.length} 条规则，新增 ${i.length} 条，覆盖 ${o?a.length:0} 条`;e.default.success(s),t?.()},s=t=>new Promise(async n=>{let r=C.toJSON(t);if(!Array.isArray(r)){E.error(r),e.default.error(`导入失败，格式不符合（不是数组）`,{consoleLogContent:!0}),n(!1);return}if(!r.length){e.default.error(`导入失败，解析出的数据为空`,{consoleLogContent:!0}),n(!1);return}await o(r),n(!0)});w.on(r,`click`,e=>{w.preventEvent(e),n.close();let t=w.createElement(`input`,{type:`file`,accept:`.json`});w.on(t,[`propertychange`,`input`],()=>{if(!t.files?.length)return;let e=t.files[0],n=new FileReader;n.onload=()=>{s(n.result)},n.readAsText(e,`UTF-8`)}),t.click()}),w.on(i,`click`,t=>{w.preventEvent(t),n.close();let r=T.prompt({title:{text:`网络导入`,position:`center`},content:{text:``,placeholder:`请填写URL`,focus:!0},btn:{close:{enable:!0,callback(e){e.close()}},ok:{text:`导入`,callback:async t=>{let n=t.text;if(C.isNull(n)){e.default.error(`请填入完整的url`);return}let r=e.default.loading(`正在获取配置...`),i=await k.get(n,{allowInterceptConfig:!1});if(r.close(),!i.status){E.error(i),e.default.error(`获取配置失败`,{consoleLogContent:!0});return}await s(i.data.responseText)&&t.close()}},cancel:{enable:!1}},mask:{enable:!0},drag:!0,width:R.info.width,height:`auto`}),i=r.$shadowRoot.querySelector(`input`),a=r.$shadowRoot.querySelector(`.pops-prompt-btn-ok`);w.on(i,[`input`,`propertychange`],()=>{w.val(i)===``?w.attr(a,`disabled`,`true`):w.removeAttr(a,`disabled`)}),w.onKeyboard(i,`keydown`,(e,t,n)=>{e===`Enter`&&n.length===0&&w.val(i)!==``&&w.emit(a,`click`)}),w.emit(i,`input`)}),w.on(a,`click`,async t=>{w.preventEvent(t),n.close();let r=await C.getClipboardInfo();if(r.error!=null){e.default.error(r.error.toString());return}if(r.content.trim()===``){e.default.warning(`获取到的剪贴板内容为空`);return}await s(r.content)})}exportRules(e=`rule.json`){let t=this.getAllRule(),n=new Blob([JSON.stringify(t,null,4)]),r=globalThis.URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=e,i.click(),setTimeout(()=>{globalThis.URL.revokeObjectURL(r)},1500)}},Fe=class{option;constructor(e){this.option=e}async showView(){let e=T.confirm({title:{text:this.option.title,position:`center`},content:{text:`
        <form class="rule-form-container" onsubmit="return false">
            <ul class="rule-form-ulist"></ul>
            <input type="submit" style="display: none;" />
        </form>
        `,html:!0},btn:C.assign({ok:{callback:async()=>{await i()}}},this.option.btn||{},!0),drag:!0,mask:{enable:!0},style:`
      ${T.config.cssText.panelCSS}
      
      .rule-form-container {
          
      }
      .rule-form-container li{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 5px 20px;
        gap: 10px;
      }
      .rule-form-ulist-dynamic{
        --button-margin-top: 0px;
        --button-margin-right: 0px;
        --button-margin-bottom: 0px;
        --button-margin-left: 0px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 5px 0px 5px 20px;
      }
      .rule-form-ulist-dynamic__inner{
        width: 100%;
      }
      .rule-form-ulist-dynamic__inner-container{
        display: flex;
        align-items: center;
      }
      .dynamic-forms{
        width: 100%;
      }
      .pops-panel-item-left-main-text{
        max-width: 150px;
      }
      .pops-panel-item-right-text{
        padding-left: 30px;
      }
      .pops-panel-item-right-text,
      .pops-panel-item-right-main-text{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .pops-panel-item-left-desc-text{
        line-height: normal;
        margin-top: 6px;
        font-size: 0.8em;
        color: rgb(108, 108, 108);
      }

      ${this.option?.style??``}
      `,width:typeof this.option.width==`function`?this.option.width():window.innerWidth>500?`500px`:`88vw`,height:typeof this.option.height==`function`?this.option.height():window.innerHeight>500?`500px`:`80vh`}),t=e.$shadowRoot.querySelector(`.rule-form-container`);e.$shadowRoot.querySelector(`input[type=submit]`);let n=e.$shadowRoot.querySelector(`.rule-form-ulist`),r=await this.option.getView(await this.option.data());w.append(n,r);let i=async()=>{(await this.option.onsubmit(t,await this.option.data())).success&&(e.close(),typeof this.option.dialogCloseCallBack==`function`&&await this.option.dialogCloseCallBack(!0))};return e}},Ie=class{option;constructor(e){this.option=e}async showView(t){let n=T.confirm({title:{text:this.option.title,position:`center`},content:{text:`
        <div class="rule-view-search-container">
          <div class="pops-panel-select pops-user-select-none" data-mode="native" style="min-width: 50px;">
            <select class="select-rule-status">
            </select>
          </div>
          <div class="pops-panel-select pops-user-select-none" data-mode="native" style="min-width: 50px;">
            <select class="select-rule-value">
            </select>
          </div>
          <div class="pops-panel-input pops-user-select-none">
            <div class="pops-panel-input_inner">
                <input type="text" placeholder="">
            </div>
          </div>
        </div>
        <div class="rule-view-container"></div>
        `,html:!0},style:`
      ${T.config.cssText.panelCSS}

      .rule-view-search-container{
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 4px 8px;
      }
      .rule-view-search-container .pops-panel-select{
        min-width: fit-content;
        max-width: 60px;
      }
      .rule-view-search-container .pops-panel-select select{
        width: 100%;
        min-width: auto;
      }
      .rule-view-search-container .pops-panel-input{
        width: 100%;
      }


      .rule-item{
          display: flex;
          align-items: center;
          line-height: normal;
          font-size: 16px;
          padding: 4px 8px;
          gap: 8px;
      }
      .rule-name{
          flex: 1;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
      }
      .rule-controls{
          display: flex;
          align-items: center;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          gap: 8px;
          padding: 0px;
      }
      .rule-controls-enable{
          
      }
      .rule-controls-edit{
          
      }
      .rule-controls-delete{
          
      }
      .rule-controls-edit,
      .rule-controls-delete{
          width: 16px;
          height: 16px;
          cursor: pointer;
      }
      `,btn:{merge:!0,reverse:!1,position:`space-between`,ok:{enable:this.option?.bottomControls?.add?.enable||!0,type:`primary`,text:`添加`,callback:async()=>{this.showEditView(!1,await this.option.getAddData(),n.$shadowRoot)}},close:{enable:!0,callback(){n.close()}},cancel:{enable:!1},other:{enable:this.option?.bottomControls?.clear?.enable||!0,type:`xiaomi-primary`,text:`清空所有(${(await this.option.data()).length})`,callback:()=>{let t=T.confirm({title:{text:`提示`,position:`center`},content:{text:`确定清空所有的数据？`,html:!1},btn:{ok:{enable:!0,callback:async()=>{if(E.success(`清空所有`),typeof this.option?.bottomControls?.clear?.callback==`function`&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){e.default.error(`清理失败`);return}else e.default.success(`清理成功`);await this.updateDeleteAllBtnText(n.$shadowRoot),this.clearContent(n.$shadowRoot),t.close()}},cancel:{text:`取消`,enable:!0}},mask:{enable:!0},width:`300px`,height:`200px`})}}},mask:{enable:!0},width:window.innerWidth>500?`500px`:`88vw`,height:window.innerHeight>500?`500px`:`80vh`}),{$searchContainer:r,$externalSelect:i,$ruleValueSelect:a,$searchInput:o}=this.parseViewElement(n.$shadowRoot);if(this.option.bottomControls?.filter?.enable){let e=null,r=null;Array.isArray(this.option.bottomControls?.filter?.option)&&w.append(i,this.option.bottomControls?.filter?.option.map(e=>{let t=w.createElement(`option`,{innerText:e.name});return Reflect.set(t,`data-value`,e),t})),Array.isArray(this.option.bottomControls?.filter?.inputOption)&&w.append(a,this.option.bottomControls?.filter?.inputOption.map(e=>{let t=w.createElement(`option`,{innerText:e.name});return Reflect.set(t,`data-value`,e),t})),w.on(i,`change`,async()=>{let t=i[i.selectedIndex],n=Reflect.get(t,`data-value`);typeof n?.selectedCallBack==`function`&&n.selectedCallBack(n),e=n,await c(!1)}),w.on(a,`change`,async()=>{let e=a[a.selectedIndex],t=Reflect.get(e,`data-value`);typeof t?.selectedCallBack==`function`&&t.selectedCallBack(t),r=t,await c(!1)}),w.onInput(o,C.debounce(async()=>{await c(!1)}));let s=()=>{let t=i[i.selectedIndex];e=Reflect.get(t,`data-value`);let n=a[a.selectedIndex];r=Reflect.get(n,`data-value`)},c=async i=>{this.clearContent(n.$shadowRoot),i&&s();let a=await this.option.data(),c=[],l=w.val(o);for(let n=0;n<a.length;n++){let i=a[n];if(typeof t==`function`){let e=await t(i);if(typeof e==`boolean`&&!e)continue}if(e){let t=await e?.filterCallBack?.(i);if(typeof t==`boolean`&&!t)continue}if(r){let e=!0;if(e=l===``,e||=await r?.filterCallBack?.(i,l),!e)continue}c.push(i)}await this.appendRuleItemElement(n.$shadowRoot,c)};if(typeof t==`object`&&t){let e;e=typeof t.external==`number`?t.external:Array.from(i.options).findIndex(e=>Reflect.get(e,`data-value`).value===t.external),e!==-1&&(i.selectedIndex=e);let n;n=typeof t.rule==`number`?t.rule:Array.from(a.options).findIndex(e=>Reflect.get(e,`data-value`).value===t.rule),n!==-1&&(a.selectedIndex=n)}await c(!0)}else w.hide(r,!1)}showEditView(t,n,r,i,a,o){let s=async e=>{e?typeof o==`function`&&o(await this.option.getData(n)):(t||await this.option.deleteData(n),typeof a==`function`&&a(await this.option.getData(n)))};new Fe({title:t?`编辑`:`添加`,data:()=>n,dialogCloseCallBack:s,getView:async e=>await this.option.itemControls.edit.getView(e,t),btn:{ok:{enable:!0,text:t?`修改`:`添加`},cancel:{callback:async e=>{e.close(),await s(!1)}},close:{callback:async e=>{e.close(),await s(!1)}}},onsubmit:async(n,a)=>{let o=await this.option.itemControls.edit.onsubmit(n,t,a);return o.success?t?(e.default.success(`修改成功`),r&&await this.updateRuleItemElement(o.data,i,r)):r&&await this.appendRuleItemElement(r,o.data):t&&E.error(`修改失败`),o},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView()}parseViewElement(e){let t=e.querySelector(`.rule-view-container`),n=e.querySelector(`.pops-confirm-btn button.pops-confirm-btn-other`),r=e.querySelector(`.rule-view-search-container`);return{$container:t,$deleteBtn:n,$searchContainer:r,$externalSelect:r.querySelector(`.pops-panel-select .select-rule-status`),$ruleValueSelect:r.querySelector(`.pops-panel-select .select-rule-value`),$searchInput:r.querySelector(`.pops-panel-input input`)}}parseRuleItemElement(e){let t=e.querySelector(`.rule-controls-enable`);return{$enable:t,$enableSwitch:t.querySelector(`.pops-panel-switch`),$enableSwitchInput:t.querySelector(`.pops-panel-switch__input`),$enableSwitchCore:t.querySelector(`.pops-panel-switch__core`),$edit:e.querySelector(`.rule-controls-edit`),$delete:e.querySelector(`.rule-controls-delete`),data:Reflect.get(e,`data-rule`)}}async createRuleItemElement(t,n){let r=await this.option.getDataItemName(t),i=w.createElement(`div`,{className:`rule-item`,innerHTML:`
			<div class="rule-name">${r}</div>
			<div class="rule-controls">
				<div class="rule-controls-enable">
					<div class="pops-panel-switch">
						<input class="pops-panel-switch__input" type="checkbox">
						<span class="pops-panel-switch__core">
							<div class="pops-panel-switch__action">
							</div>
						</span>
					</div>
				</div>
				<div class="rule-controls-edit">
					${T.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${T.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(i,`data-rule`,t);let a=`pops-panel-switch-is-checked`,{$enable:o,$enableSwitch:s,$enableSwitchCore:c,$enableSwitchInput:l,$delete:u,$edit:d}=this.parseRuleItemElement(i);return this.option.itemControls.enable.enable?(w.on(c,`click`,async()=>{let e=!1;s.classList.contains(a)?(s.classList.remove(a),e=!1):(s.classList.add(a),e=!0),l.checked=e,await this.option.itemControls.enable.callback(t,e)}),await this.option.itemControls.enable.getEnable(t)&&s.classList.add(a)):o.remove(),this.option.itemControls.edit.enable?w.on(d,`click`,e=>{w.preventEvent(e),this.showEditView(!0,t,n,i,e=>{t=null,t=e})}):d.remove(),this.option.itemControls.delete.enable?w.on(u,`click`,r=>{w.preventEvent(r);let a=T.confirm({title:{text:`提示`,position:`center`},content:{text:`确定删除该条数据？`,html:!1},btn:{ok:{enable:!0,callback:async()=>{E.success(`删除数据`),await this.option.itemControls.delete.deleteCallBack(t)?(e.default.success(`成功删除该数据`),i.remove(),await this.updateDeleteAllBtnText(n),a.close()):e.default.error(`删除该数据失败`)}},cancel:{text:`取消`,enable:!0}},mask:{enable:!0},width:`300px`,height:`200px`})}):u.remove(),i}async appendRuleItemElement(e,t){let{$container:n}=this.parseViewElement(e),r=[],i=Array.isArray(t)?t:[t];for(let t=0;t<i.length;t++){let n=i[t],a=await this.createRuleItemElement(n,e);r.push(a)}return w.append(n,r),await this.updateDeleteAllBtnText(e),r}async updateRuleContaienrElement(e){this.clearContent(e);let t=await this.option.data();await this.appendRuleItemElement(e,t),await this.updateDeleteAllBtnText(e)}async updateRuleItemElement(e,t,n){let r=await this.createRuleItemElement(e,n);t.after(r),t.remove()}clearContent(e){let{$container:t}=this.parseViewElement(e);w.html(t,``)}setDeleteBtnText(e,t,n=!1){let{$deleteBtn:r}=this.parseViewElement(e);n?w.html(r,t):w.text(r,t)}async updateDeleteAllBtnText(e){let t=await this.option.data();this.setDeleteBtnText(e,`清空所有(${t.length})`)}},Le=class{parseInfoDictData(e,t=!1){let n=e?.note_card,r=e.id,i=n.display_title,a=!!n?.interact_info?.liked,o=0,s=e?.note_card?.interact_info?.liked_count;typeof s==`string`&&(o=parseInt(s),isNaN(o)&&(o=0));let c=n?.user?.nick_name||n?.user?.nickname,l=n?.user?.user_id,u=n?.type===`video`,d=n?.video?.capa?.duration||0;return{articleId:r,display_title:i,isLike:a,liked_count:o,nick_name:c,user_id:l,isVideo:u,videoDuration:d}}checkFilterWithRule(e){if(e.infoValue==null||e.ruleValue==null)return!1;if(typeof e.infoValue==`string`){if(e.infoValue.match(e.ruleValue))return!0}else if(typeof e.infoValue==`object`){if(Array.isArray(e.infoValue)&&e.infoValue.find(t=>typeof t==`string`&&e.ruleValue!=null?!!t.match(e.ruleValue):!1))return!0}else if(typeof e.infoValue==`number`){if(typeof e.ruleValue==`string`){let t=e.ruleValue.trim(),n=t.match(/(\d+)/);if(!n)return E.warn(`过滤器-解析比较大小的数字失败: `,e),!1;let r=Number(n[1]);if(t.startsWith(`>`)){if(t.startsWith(`>=`)){if(e.infoValue>=r)return!0}else if(e.infoValue>r)return!0}else if(t.startsWith(`<`)){if(t.startsWith(`<=`)){if(e.infoValue<=r)return!0}else if(e.infoValue<r)return!0}else if(t.startsWith(`=`)){if(e.infoValue===r)return!0}else return E.warn(`视频过滤器-未经允许的比较符号: `,e),!1}}else if(typeof e.infoValue==`boolean`&&typeof e.ruleValue==`string`){let t=e.ruleValue.trim();return e.infoValue.toString()===t}return!1}checkInfoIsFilter(e,t){let n=this.parseInfoDictData(t),r=!1,i=null;outerLoop:for(let a=0;a<e.length;a++){let o=e[a],s=Array.isArray(o.data.ruleName)?o.data.ruleName:[o.data.ruleName];for(let e=0;e<s.length;e++){let a=s[e];if(!Reflect.has(n,a))continue;let c=a,l={infoKey:c,infoValue:n[c],ruleKey:o.data.ruleName,ruleValue:o.data.ruleValue};if(r=this.checkFilterWithRule(l),r)if(Array.isArray(o.dynamicData)&&o.dynamicData.length){let e=[];for(let t=0;t<o.dynamicData.length;t++){let i=o.dynamicData[t],a=i.ruleName,s={infoKey:a,infoValue:n[a],ruleKey:i.ruleName,ruleValue:i.ruleValue};e.push(s);let c=this.checkFilterWithRule(s);if(r&&=c,!r)break}r&&E.success([`视频过滤器-多组 ==> ${o.name}`,n,l,e,t,o])}else E.success([`视频过滤器 ==> ${o.name}`,n,l,t,o]);if(r){i=o;break outerLoop}}}return{isFilter:r,matchedFilterOption:i,transformInfo:n,info:t}}removeArticle(...e){if(e.length===1){let t=e[0];t!=null&&t instanceof Element&&t.remove()}else if(e.length===2){let t=e[0],n=e[1];if(typeof n==`number`){let e=t[n];e!=null&&e instanceof Element&&e.remove(),t.splice(n,1)}}}},X={$key:{ENABLE_KEY:`shieldVideo-exec-network-enable`},$data:{isFilterAwemeInfoList:new r.default.Dictionary,articleInfoMap:new r.default.Dictionary,__videoFilterRuleStorage:null,get videoFilterRuleStorage(){return this.__videoFilterRuleStorage??=new Pe({STORAGE_API_KEY:`xhs-article-filter-rule`}),this.__videoFilterRuleStorage},get isReverse(){return H.getValue(`xhs-article-filter-only-show-filtered-video`)}},init(){this.execFilter()},execFilter(){H.execMenuOnce(this.$key.ENABLE_KEY,async()=>{E.info(`执行笔记过滤器`);let e=new Le,t=e=>{if(this.$data.isReverse&&(e.isFilter=!e.isFilter,typeof e.transformInfo.articleId==`string`&&e.matchedFilterOption)){let t=this.$data.isFilterAwemeInfoList.get(e.transformInfo.articleId)||[];t.push(e.matchedFilterOption),this.$data.isFilterAwemeInfoList.set(e.transformInfo.articleId,t)}typeof e.transformInfo.articleId==`string`&&this.$data.articleInfoMap.set(e.transformInfo.articleId,{articleInfo:e.info,transformArticleInfo:e.transformInfo})},n=e=>{if(!H.getValue(this.$key.ENABLE_KEY))return[];let t=this.$data.videoFilterRuleStorage.getAllRule();if(!t.length)return[];let n=Array.isArray(e)?e:[e];return t.filter(e=>e.enable&&(e.data.scope.includes(`all`)||Array.from(n).findIndex(t=>e.data.scope.includes(t))!==-1))},r=(r,i)=>{i.response=i=>{let a=n(r);if(!a.length)return;let o=C.toJSON(i.responseText),s=o?.data?.items;if(Array.isArray(s)){for(let n=0;n<s.length;n++){let r=s[n]||{},i=e.checkInfoIsFilter(a,r);t(i),i.isFilter&&e.removeArticle(s,n--)}i.responseText=JSON.stringify(o)}}};Oe.ajaxHooker.hook(e=>{let t=S.fixUrl(e.url);new URL(t).pathname.startsWith(`/api/sns/web/v1/homefeed`)&&r(`xhr-explore`,e)})})},getTemplateData(){return{uuid:C.generateUUID(),enable:!0,name:``,data:{scope:[],ruleName:`display_title`,ruleValue:``,remarks:``},dynamicData:[]}},showView(){this.getRuleViewInstance().showView()},getRuleViewInstance(){let t=this,n=T.fn.PanelHandlerComponents();function r(e){return{get(t,n){return e[t]??n},set(t,n){e[t]=n}}}return new Ie({title:`笔记过滤器`,data:()=>this.$data.videoFilterRuleStorage.getAllRule(),getAddData:()=>this.getTemplateData(),getDataItemName:e=>e.name,updateData:e=>this.$data.videoFilterRuleStorage.setRule(e),deleteData:e=>this.$data.videoFilterRuleStorage.deleteRule(e),getData:e=>this.$data.videoFilterRuleStorage.getAllRule().find(t=>t.uuid===e.uuid)??e,itemControls:{enable:{enable:!0,getEnable(e){return e.enable},callback:(e,t)=>{e.enable=t,this.$data.videoFilterRuleStorage.setRule(e)}},edit:{enable:!0,getView:(e,t)=>{let i=document.createDocumentFragment();t||(e=this.getTemplateData());let a=J(`启用`,`enable`,!0);Reflect.set(a.props,I,r(e));let o=n.createSectionContainerItem_switch(a).$el,s=Ne(`规则名称`,`name`,``,``,void 0,`必填`);Reflect.set(s.props,I,r(e));let c=n.createSectionContainerItem_input(s).$el,l=Ae(`作用域`,`scope`,[],[{text:`所有`,value:`all`},{text:`发现`,value:`xhr-explore`}].map(e=>({...e,value:e.value})),void 0,`选择需要在xxx上生效的作用域`);Reflect.set(l.props,I,r(e.data));let u=n.createSectionContainerItem_select_multiple(l).$el,d=[`display_title`,`isLike`,`liked_count`,`nick_name`,`user_id`,`isVideo`,`videoDuration`],f=e=>{let t=Ae(`属性名`,`ruleName`,Array.isArray(e.ruleName)?e.ruleName:[e.ruleName],d.map(e=>({text:e,value:e})),void 0,`选择需要的属性名 `);Reflect.set(t.props,I,r(e));let i=n.createSectionContainerItem_select_multiple(t).$el,a=Me(`属性值`,`ruleValue`,``,`如果是字符串，可正则，注意转义`,void 0);Reflect.set(a.props,I,r(e));let o=n.createSectionContainerItem_textarea(a).$el,s=Me(`备注`,`remarks`,``,``,void 0);return Reflect.set(s.props,I,r(e)),{$ruleName:i,$ruleValue:o,$remarks:n.createSectionContainerItem_textarea(s).$el}},p=w.createElement(`div`,{className:`rule-form-ulist-dynamic`,innerHTML:`
							<div class="rule-form-ulist-dynamic__inner">

							</div>
							<div class="pops-panel-button pops-panel-button-no-icon">
								<button class="pops-panel-button_inner" data-type="default">
									<i class="pops-bottom-icon" is-loading="false"></i>
									<span class="pops-panel-button-text">添加额外属性</span>
								</button>
							</div>
							`}),m=p.querySelector(`.rule-form-ulist-dynamic__inner`),h=p.querySelector(`.pops-panel-button`),g=(t={ruleName:[],ruleValue:``,remarks:``})=>{let n=w.createElement(`div`,{className:`rule-form-ulist-dynamic__inner-container`,innerHTML:`
									<div class="dynamic-control-delete">
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" data-type="danger">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">×</span>
											</button>
										</div>
									</div>
									<ul class="dynamic-forms">

									</ul>
								`}),r=n.querySelector(`.dynamic-control-delete`);w.on(r,`click`,r=>{if(w.preventEvent(r),n.remove(),Array.isArray(e.dynamicData)){let n=e.dynamicData.findIndex(e=>e==t);n!==-1&&e.dynamicData.splice(n,1)}});let i=n.querySelector(`.dynamic-forms`),{$ruleName:a,$ruleValue:o,$remarks:s}=f(t);i.appendChild(a),i.appendChild(o),i.appendChild(s),m.appendChild(n)};if(w.on(h,`click`,e=>{w.preventEvent(e),g()}),Array.isArray(e.dynamicData))for(let t=0;t<e.dynamicData.length;t++){let n=e.dynamicData[t];g(n)}let{$ruleName:_,$ruleValue:v,$remarks:ee}=f(e.data);return i.append(o,c,u,_,v,ee,p),i},onsubmit:(r,i,a)=>{let o=r.querySelectorAll(`.rule-form-ulist > li`),s=this.getTemplateData();return i&&(s.uuid=a.uuid),o.forEach(e=>{let t=Reflect.get(e,n.$data.nodeStoreConfigKey);if(!t)return;let r=Reflect.get(t,`attributes`);if(!r)return;let i=Reflect.get(e,I),a=Reflect.get(r,P),o=Reflect.get(r,F),c=i.get(a,o);Reflect.has(s,a)?Reflect.set(s,a,c):Reflect.has(s.data,a)?Reflect.set(s.data,a,c):E.error(`${a}不在数据中`)}),r.querySelectorAll(`.rule-form-ulist-dynamic__inner-container`).forEach(e=>{let t={};e.querySelectorAll(`.dynamic-forms > li`).forEach(e=>{let r=Reflect.get(e,n.$data.nodeStoreConfigKey);if(!r)return;let i=Reflect.get(r,`attributes`);if(!i)return;let a=Reflect.get(e,I),o=Reflect.get(i,P),s=Reflect.get(i,F),c=a.get(o,s);Reflect.set(t,o,c)}),s.dynamicData.push(t)}),s.name.trim()===``?(e.default.error(`规则名称不能为空`),{success:!1,data:s}):s.data.scope.length===0?(e.default.error(`请选择作用域`),{success:!1,data:s}):s.data.ruleName.length===0?(e.default.error(`请选择属性名`),{success:!1,data:s}):s.data.ruleValue.trim()===``?(e.default.error(`属性值不能为空`),{success:!1,data:s}):i?{success:t.$data.videoFilterRuleStorage.setRule(s),data:s}:{success:t.$data.videoFilterRuleStorage.addRule(s),data:s}},style:`
                    .pops-panel-textarea textarea{
                        height: 150px;
                    }
					.pops-panel-item-left-desc-text{
						line-height: normal;
						margin-top: 6px;
						font-size: 0.8em;
						color: rgb(108, 108, 108);
					}
					.rule-form-ulist-dynamic{
						--button-margin-top: 0px;
						--button-margin-right: 0px;
						--button-margin-bottom: 0px;
						--button-margin-left: 0px;
						display: flex;
						flex-direction: column;
						align-items: flex-start;
						padding: 5px 20px;
					}
					.rule-form-ulist-dynamic__inner{
						width: 100%;
					}
					.rule-form-ulist-dynamic__inner-container{
						display: flex;
						align-items: center;
					}
					.dynamic-forms{
						width: 100%;
					}
					.pops-panel-textarea textarea{
						height: 60px;
						min-height: 60px;
						width: 250px;
						max-width: 400px;
						min-width: 250px;
						resize: auto;
						transition: unset;
					}
                    `,width:()=>window.innerWidth>700?`700px`:`88vw`},delete:{enable:!0,deleteCallBack:e=>t.$data.videoFilterRuleStorage.deleteRule(e)}},bottomControls:{filter:{enable:!0,option:[{name:`启用`,value:`enable`,filterCallBack(e){return e.enable}},{name:`未启用`,value:`notEnable`,filterCallBack(e){return!e.enable}}],inputOption:[{name:`规则名称`,value:`name`,filterCallBack(e,t){return!!e.name.match(t)}},{name:`备注`,value:`remarks`,filterCallBack(e,t){let n=!!e.data.remarks.match(t);return n||=!!e.dynamicData?.find(e=>!!e.remarks.match(t)),n}}]},clear:{enable:!0,callback:()=>{t.$data.videoFilterRuleStorage.clearAllRule()}}}})}},Re={init(){H.execMenuOnce(`pc-xhs-shieldAd`,()=>A(``)),H.execMenuOnce(`pc-xhs-shield-select-text-search-position`,()=>this.blockSelectTextVisibleSearchPosition()),H.execMenuOnce(`pc-xhs-shield-topToolbar`,()=>this.blockTopToolbar()),w.onReady(()=>{H.execMenuOnce(`pc-xhs-shield-login-dialog`,()=>this.blockLoginContainer())})},blockLoginContainer(){E.info(`添加屏蔽登录弹窗CSS，监听登录弹窗出现`);let e=C.mutationObserver(document.body,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{let e=j(`.login-container .icon-btn-wrapper`);e&&(e.click(),E.success(`登录弹窗出现，自动点击关闭按钮`))}});return[S.addBlockCSS(`.login-container`),()=>{e?.disconnect()}]},blockSelectTextVisibleSearchPosition(){return E.info(`屏蔽选择文字弹出的搜索提示`),S.addBlockCSS(`.search-position`)},blockTopToolbar(){return E.info(`【屏蔽】顶部工具栏`),[S.addBlockCSS(`#headerContainer`,`.header-container`),A(`
			/* 主内容去除padding */
			#mfContainer{
				padding-top: 0 !important;
			}
			.outer-link-container{
				margin-top: 0 !important;
				height: 100vh !important;
				padding: 30px 0;
			}
			#noteContainer{
				height: 100%;
			}
			`)]}},ze={init(){X.init(),H.execMenuOnce(`pc-xhs-hook-vue`,()=>{W.hookVue()}),H.execMenuOnce(`pc-xhs-allowCopy`,()=>ze.allowPCCopy()),H.execMenuOnce(`pc-xhs-open-blank-article`,()=>ze.openBlankArticle()),Re.init(),H.execMenuOnce(`pc-xhs-article-showPubsliushTime`,()=>De.transformPublishTime()),U.isArticle()&&(E.info(`Router: 笔记页面`),De.init())},allowPCCopy(){E.success(`允许复制文字`);let e=w.on(b,`copy`,e=>{w.preventEvent(e);let t=b.getSelection();return t?C.copy(t.toString()):E.error(`未选中任何内容`),!1},{capture:!0});return[()=>{e.off()}]},openBlankArticle(){E.success(`新标签页打开文章`);let t=w.on(document,`click`,`.feeds-container .note-item`,(t,n)=>{if(!H.getValue(`pc-xhs-open-blank-article`))return;let r=n.querySelector(`a.cover[href]`)?.href;if(!r){let e=n.querySelector(`.xhs-live-note-item-badge`);if(e&&w.text(e).includes(`直播中`))return}if(w.preventEvent(t),!r){e.default.error(`未找到文章链接`);return}E.info(`跳转文章: `+r);let i=new URL(r);i.pathname=i.pathname.replace(/^\/user\/profile\/[a-z0-9A-Z]+\//i,`/discovery/item/`),r=i.toString(),window.open(r,`_blank`)},{capture:!0});return[()=>{t.off()}]}},Be={id:`little-red-book-panel-config-common`,title:`通用`,views:[{text:``,type:`container`,views:[{text:`Toast配置`,type:`deepMenu`,views:[{text:``,type:`container`,views:[q(`Toast位置`,`qmsg-config-position`,`bottom`,[{value:`topleft`,text:`左上角`},{value:`top`,text:`顶部`},{value:`topright`,text:`右上角`},{value:`left`,text:`左边`},{value:`center`,text:`中间`},{value:`right`,text:`右边`},{value:`bottomleft`,text:`左下角`},{value:`bottom`,text:`底部`},{value:`bottomright`,text:`右下角`}],e=>{E.info(`设置当前Qmsg弹出位置`+e.text)},`Toast显示在页面九宫格的位置`),q(`最多显示的数量`,`qmsg-config-maxnums`,3,[{value:1,text:`1`},{value:2,text:`2`},{value:3,text:`3`},{value:4,text:`4`},{value:5,text:`5`}],void 0,`限制Toast显示的数量`),J(`逆序弹出`,`qmsg-config-showreverse`,!1,void 0,`修改Toast弹出的顺序`)]}]}]},{text:``,type:`container`,views:[{text:`屏蔽`,type:`deepMenu`,views:[{text:``,type:`container`,views:[J(`【屏蔽】广告`,`little-red-book-shieldAd`,!0,void 0,`如：App内打开`),J(`【屏蔽】底部搜索发现`,`little-red-book-shieldBottomSearchFind`,!0,void 0,`建议开启`),J(`【屏蔽】底部工具栏`,`little-red-book-shieldBottomToorBar`,!0,void 0,`建议开启`)]}]}]}]},Ve={id:`little-red-book-panel-config-home`,title:`主页`,views:[{text:``,type:`container`,views:[{text:`劫持/拦截`,type:`deepMenu`,views:[{text:``,type:`container`,views:[J(`劫持点击事件`,`little-red-book-repariClick`,!0,void 0,`可阻止点击跳转至下载页面`)]}]}]}]},He={id:`little-red-book-panel-config-note`,title:`笔记`,views:[{text:``,type:`container`,views:[{text:`视频笔记`,type:`deepMenu`,views:[{text:``,type:`container`,views:[J(`优化视频描述`,`little-red-book-optimizeVideoNoteDesc`,!0,void 0,`让视频描述可以滚动显示更多`),J(`【屏蔽】作者热门笔记`,`little-red-book-shieldAuthorHotNote`,!0,void 0,`建议开启`),J(`【屏蔽】热门推荐`,`little-red-book-shieldHotRecommendNote`,!0,void 0,`建议开启`)]}]}]},{text:``,type:`container`,views:[{text:`功能`,type:`deepMenu`,views:[{text:``,type:`container`,views:[J(`优化评论浏览`,`little-red-book-optimizeCommentBrowsing`,!0,void 0,`目前仅可加载部分评论`),J(`优化图片浏览`,`little-red-book-optimizeImageBrowsing`,!0,void 0,`更方便的浏览图片`),J(`允许复制`,`little-red-book-allowCopy`,!0,void 0,`可以复制笔记的内容`)]}]},{text:`劫持/拦截`,type:`deepMenu`,views:[{text:``,type:`container`,views:[J(`劫持webpack-弹窗`,`little-red-book-hijack-webpack-mask`,!0,void 0,`如：打开App弹窗、登录弹窗`),J(`劫持webpack-唤醒App`,`little-red-book-hijack-webpack-scheme`,!0,void 0,`禁止跳转商店小红书详情页/小红书`)]}]}]}]},Ue={id:`xhs-panel-config-article`,title:`笔记`,views:[{type:`container`,text:`功能`,views:[J(`显示发布、修改的绝对时间`,`pc-xhs-article-showPubsliushTime`,!1,void 0,`注：需要开启<code>通用</code>-<code>劫持/拦截</code>-<code>劫持Vue</code>`)]},{text:`笔记宽屏`,type:`container`,views:[J(`启用`,`pc-xhs-article-fullWidth`,!1,void 0,`让笔记占据宽屏，当页面可视宽度>=960px时才会触发该功能，当前页面可视宽度: ${window.innerWidth}px`),je(`占据范围`,`pc-xhs-article-fullWidth-widthSize`,90,30,100,(e,t)=>{let n=j(`#noteContainer`);if(!n){E.error(`未找到笔记容器`);return}n.style.width=`${t}vw`},e=>`${e}%，默认：90%`,`调整笔记页面占据的页面范围`),je(`图片尺寸`,`pc-xhs-article-fullWidth-imageSize`,80,30,100,(e,t)=>{let n=j(`#noteContainer`);if(!n){E.error(`未找到笔记容器`);return}let r=n.querySelector(`.media-container`);if(!r){E.error(`未找到媒体容器`);return}window.innerWidth>=960?(r.style.width=`${t}%`,r.style.height=``):(r.style.height=`${t}%`,r.style.width=``)},e=>`${e}%，默认：80%`,`横向布局时调整宽度，竖向布局时调整高度`)]}]},We={id:`xhs-panel-config-common`,title:`通用`,views:[{type:`container`,text:``,views:[{text:`Toast配置`,type:`deepMenu`,views:[{text:``,type:`container`,views:[q(`Toast位置`,`qmsg-config-position`,`bottom`,[{value:`topleft`,text:`左上角`},{value:`top`,text:`顶部`},{value:`topright`,text:`右上角`},{value:`left`,text:`左边`},{value:`center`,text:`中间`},{value:`right`,text:`右边`},{value:`bottomleft`,text:`左下角`},{value:`bottom`,text:`底部`},{value:`bottomright`,text:`右下角`}],e=>{E.info(`设置当前Qmsg弹出位置`+e.text)},`Toast显示在页面九宫格的位置`),q(`最多显示的数量`,`qmsg-config-maxnums`,3,[{value:1,text:`1`},{value:2,text:`2`},{value:3,text:`3`},{value:4,text:`4`},{value:5,text:`5`}],void 0,`限制Toast显示的数量`),J(`逆序弹出`,`qmsg-config-showreverse`,!1,void 0,`修改Toast弹出的顺序`)]}]}]},{text:``,type:`container`,views:[{text:`功能`,type:`deepMenu`,views:[{text:``,type:`container`,views:[J(`允许复制`,`pc-xhs-allowCopy`,!0,void 0,`可以选择文字并复制`),J(`新标签页打开文章`,`pc-xhs-open-blank-article`,!1,void 0,`点击文章不会在本页展开，会打开新标签页`)]}]},{text:`搜索`,type:`deepMenu`,views:[{text:``,type:`container`,views:[J(`新标签页打开-搜索按钮`,`pc-xhs-search-open-blank-btn`,!1,void 0,`点击右边的搜索按钮直接新标签页打开搜索内容`),J(`新标签页打开-回车键`,`pc-xhs-search-open-blank-keyboard-enter`,!1,void 0,`按下回车键直接新标签页打开搜索内容`)]}]},{text:`屏蔽`,type:`deepMenu`,views:[{text:``,type:`container`,views:[J(`【屏蔽】广告`,`pc-xhs-shieldAd`,!0,void 0,`屏蔽元素`),J(`【屏蔽】登录弹窗`,`pc-xhs-shield-login-dialog`,!0,void 0,`屏蔽会自动弹出的登录弹窗`),J(`【屏蔽】选择文字弹出的搜索提示`,`pc-xhs-shield-select-text-search-position`,!1,void 0,`屏蔽元素`),J(`【屏蔽】顶部工具栏`,`pc-xhs-shield-topToolbar`,!1,void 0,`屏蔽元素`)]}]},{type:`deepMenu`,text:`笔记过滤器`,views:[{text:`<a href="https://greasyfork.org/zh-CN/scripts/483960-%E5%B0%8F%E7%BA%A2%E4%B9%A6%E4%BC%98%E5%8C%96#:~:text=%E5%B1%8F%E8%94%BD%E8%A7%84%E5%88%99" target="_blank">点击查看规则</a>`,type:`container`,views:[J(`启用`,`shieldVideo-exec-network-enable`,!0,void 0,`开启后以下功能才会生效`),J(`仅显示被过滤的笔记`,`xhs-article-filter-only-show-filtered-video`,!1,void 0,`只会显示过滤规则命中的笔记`),ke(`笔记过滤规则`,`可过滤笔记`,`自定义`,void 0,!1,!1,`primary`,()=>{X.showView()})]},{type:`container`,text:``,views:[ke(`数据导入`,`导入自定义规则数据`,`导入`,void 0,!1,!1,`primary`,()=>{X.$data.videoFilterRuleStorage.importRules()}),ke(`数据导出`,`导出自定义规则数据`,`导出`,void 0,!1,!1,`primary`,()=>{X.$data.videoFilterRuleStorage.exportRules(he+`-视频过滤规则.json`)})]}]},{text:`劫持/拦截`,type:`deepMenu`,views:[{text:``,type:`container`,views:[J(`劫持Vue`,`pc-xhs-hook-vue`,!0,void 0,`恢复__vue__属性`)]}]}]}]};A(`
.qmsg svg.animate-turn {
  fill: none;
}
`),B.deleteMenuOption(0),B.addMenuOption([{key:`pc_setting`,text:`⚙ PC端设置`,autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{H.showPanel(z.getConfig(0))}},{key:`m_setting`,text:`⚙ 移动端设置`,autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{H.showPanel(z.getConfig(1))}}]),z.addContentConfig([We,Ue]),z.addContentConfig([Be,Ve,He]),H.init();var Z=C.isPhone(),Q=`change_env_set`,$=g(Q);$!=null&&($==1?(Z=!0,E.info(`手动指定为移动端`)):$==2?(Z=!1,E.info(`手动指定为PC端`)):(e.default.error(`意外，手动指定的值不在允许范围内，自动判定为${$===1?`移动端`:`PC端`}`),m(Q))),O.add({key:Q,text:`🖥️ 自动: ${Z?`移动端`:`PC端`}`,autoReload:!1,isStoreValue:!1,showText(e){return $==null?e:`🖥️ 手动: ${$==1?`移动端`:$==2?`PC端`:`未知`}`},callback:()=>{let t=[0,1,2],n=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,`0`);if(!n)return;let r=parseInt(n);if(isNaN(r)){e.default.error(`输入的不是规范的数字`);return}if(!t.includes(r)){e.default.error(`输入的值必须是0或1或2`);return}r==0?m(Q):y(Q,r)}}),Z?(E.info(`自动判定为移动端`),O.delete(`pc_setting`),Te.init()):(E.info(`自动判定为PC端`),O.delete(`m_setting`),ze.init())})(Qmsg,DOMUtils,pops,Utils,Viewer);
