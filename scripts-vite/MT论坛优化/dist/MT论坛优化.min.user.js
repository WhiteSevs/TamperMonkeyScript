// ==UserScript==
// @name         MT论坛优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.5.11
// @author       WhiteSevs
// @description  MT论坛效果增强，如自动签到、自动展开帖子、用户状态查看、美化导航、动态头像上传、最新发表、评论过滤器等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://bbs.binmt.cc/*
// @exclude      /^http(s|)://bbs.binmt.cc/uc_server.*$/
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.12.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@2.0.8/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.8/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.js
// @require      https://fastly.jsdelivr.net/npm/@highlightjs/cdn-assets@11.11.1/highlight.min.js
// @resource     HljsCSS    https://fastly.jsdelivr.net/npm/highlight.js@11.11.1/styles/github-dark.min.css
// @resource     ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.css
// @connect      *
// @grant        GM.cookie
// @grant        GM_addStyle
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

(function(e,t,n,r,i,a){'use strict';var o=Object.create,s=Object.defineProperty,c=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,u=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty,f=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=l(t),a=0,o=i.length,u;a<o;a++)u=i[a],!d.call(e,u)&&u!==n&&s(e,u,{get:(e=>t[e]).bind(null,u),enumerable:!(r=c(t,u))||r.enumerable});return e},p=(e,t,n)=>(n=e==null?{}:o(u(e)),f(t||!e||!e.__esModule?s(n,`default`,{value:e,enumerable:!0}):n,e));e=p(e),t=p(t),n=p(n),r=p(r),i=p(i),a=p(a);var m=new Set,h=async e=>{m.has(e)||(m.add(e),(e=>{function t(e){if(typeof GM_addStyle==`function`)return GM_addStyle(e);let t=document.createElement(`style`);return t.setAttribute(`type`,`text/css`),t.setAttribute(`data-type`,`gm-css`),globalThis.trustedTypes?t.innerHTML=globalThis.trustedTypes.createPolicy(`safe-innerHTML`,{createHTML:e=>e}).createHTML(e):t.innerHTML=e,(document.head||document.documentElement).appendChild(t),t}t(e)})(e))},g=typeof GM<`u`?GM:void 0,ee=typeof GM_addValueChangeListener<`u`?GM_addValueChangeListener:void 0,_=typeof GM_deleteValue<`u`?GM_deleteValue:void 0,te=typeof GM_getResourceText<`u`?GM_getResourceText:void 0,v=typeof GM_getValue<`u`?GM_getValue:void 0,y=typeof GM_info<`u`?GM_info:void 0,b=typeof GM_listValues<`u`?GM_listValues:void 0,ne=typeof GM_registerMenuCommand<`u`?GM_registerMenuCommand:void 0,re=typeof GM_removeValueChangeListener<`u`?GM_removeValueChangeListener:void 0,x=typeof GM_setValue<`u`?GM_setValue:void 0,ie=typeof GM_setValues<`u`?GM_setValues:void 0,ae=typeof GM_unregisterMenuCommand<`u`?GM_unregisterMenuCommand:void 0,oe=typeof GM_xmlhttpRequest<`u`?GM_xmlhttpRequest:void 0,S=typeof unsafeWindow<`u`?unsafeWindow:void 0,se=window,ce={ElementPlus:{keyName:`ElementPlusResourceCSS`,url:`https://fastly.jsdelivr.net/npm/element-plus@latest/dist/index.min.css`},Viewer:{keyName:`ViewerCSS`,url:`https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css`},Hljs:{keyName:`HljsCSS`,url:`https://fastly.jsdelivr.net/npm/highlight.js@latest/styles/github-dark.min.css`}},C={qmsg_config_position:{key:`qmsg-config-position`,defaultValue:`bottom`},qmsg_config_maxnums:{key:`qmsg-config-maxnums`,defaultValue:3},qmsg_config_showreverse:{key:`qmsg-config-showreverse`,defaultValue:!1},httpx_cookie_manager_enable:{key:`httpx-use-cookie-enable`,defaultValue:!1},httpx_cookie_manager_use_document_cookie:{key:`httpx-use-document-cookie`,defaultValue:!1}},w={waitRemove(...e){e.forEach(e=>{typeof e==`string`&&t.default.waitNodeList(e).then(e=>{e.forEach(e=>e.remove())})})},createBlockCSSNode(...e){let n=[];if(e.length!==0&&!(e.length===1&&typeof e[0]==`string`&&e[0].trim()===``))return e.forEach(e=>{Array.isArray(e)?n=n.concat(e):n.push(e)}),t.default.createElement(`style`,{type:`text/css`,innerHTML:`${n.join(`,
`)}{display: none !important;}`})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]==`string`&&e[0].trim()===``)&&(e.forEach(e=>{Array.isArray(e)?t=t.concat(e):t.push(e)}),t=t.map(e=>e.trim()).filter(e=>e!==``),t.length))return M(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){let t=typeof te==`function`?te(e.keyName):null;return typeof t==`string`&&t?M(t):w.loadStyleLink(e.url)},async loadStyleLink(e){let n=document.createElement(`link`);return n.rel=`stylesheet`,n.type=`text/css`,n.href=e,new Promise(e=>{t.default.onReady(()=>{document.head.appendChild(n),e(n)})})},async loadScript(e){let t=document.createElement(`script`);return t.src=e,new Promise(e=>{t.onload=()=>{e(null)},(document.head||document.documentElement).appendChild(t)})},fixUrl(e){return e=e.trim(),e.startsWith(`data:`)||e.match(/^http(s|):\/\//i)?e:e.startsWith(`//`)?(e.startsWith(`///`)||(e=window.location.protocol+e),e):(e.startsWith(`/`)||(e+=`/`),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith(`https://`)||!e.startsWith(`http://`))return e;try{let t=new URL(e);return t.protocol=`https:`,t.toString()}catch{return e}},lockScroll(...e){let t=document.createElement(`style`);t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...e||[]);return n.forEach(e=>{e.classList.add(`pops-overflow-hidden-important`)}),(document.head||document.documentElement).appendChild(t),{recovery(){n.forEach(e=>{e.classList.remove(`pops-overflow-hidden-important`)}),t.remove()}}},async getClipboardText(){function e(e){navigator.clipboard.readText().then(t=>{e(t)}).catch(t=>{O.error(`读取剪贴板内容失败👉`,t),e(``)})}function t(t){navigator.permissions.query({name:`clipboard-read`}).then(()=>{e(t)}).catch(n=>{O.error(`申请剪贴板权限失败，尝试直接读取👉`,n.message??n.name??n.stack),e(t)})}function n(){return!(typeof navigator?.clipboard?.readText!=`function`||typeof navigator?.permissions?.query!=`function`)}return new Promise(e=>{if(!n()){e(``);return}document.hasFocus()?t(e):window.addEventListener(`focus`,()=>{t(e)},{once:!0})})},escapeHtml(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`).replace(/©/g,`&copy;`).replace(/®/g,`&reg;`).replace(/™/g,`&trade;`).replace(/→/g,`&rarr;`).replace(/←/g,`&larr;`).replace(/↑/g,`&uarr;`).replace(/↓/g,`&darr;`).replace(/—/g,`&mdash;`).replace(/–/g,`&ndash;`).replace(/…/g,`&hellip;`).replace(/ /g,`&nbsp;`).replace(/\r\n/g,`<br>`).replace(/\r/g,`<br>`).replace(/\n/g,`<br>`).replace(/\t/g,`&nbsp;&nbsp;&nbsp;&nbsp;`)},interval(e,t,n=5e3){let r,i=n-t,a=t,o=async n=>{let s=await e(n);if(typeof s==`boolean`&&s||n){T.workerClearTimeout(r);return}if(a+=t,a>i){o(!0);return}r=T.workerSetTimeout(()=>{o(!1)},t)};o(!1)},findParentNode(e,n,r){if(r){let i=t.default.closest(e,r);if(i)return i.querySelector(n)}else return t.default.matches(e,n)?e:t.default.closest(e,n)},toStr(e,t=2){let n=`__undefined__placeholder__replaced__str__`+performance.now();return JSON.stringify(e,(e,t)=>t===void 0?n:t,t).replace(RegExp(`"${n}"`,`g`),`undefined`)},isVerticalScreen(){return!globalThis.screen.orientation.type.includes(`landscape`)},isMobileDevice(e=768){return this.isVerticalScreen()?globalThis.innerWidth<e:globalThis.innerHeight<e},isTopWindow(){let e=typeof S==`object`&&S?S:window;return e.top===e.self},formatVideoDuration(e){if(typeof e!=`number`&&(e=parseInt(e)),isNaN(e))return e.toString();let t=function(e){return e<10?`0${e}`:e};if(e<60)return`0:${t(e)}`;if(e>=60&&e<3600)return`${Math.floor(e/60)}:${t(e%60)}`;{let n=Math.floor(e/3600),r=Math.floor(e/60)%60,i=e%60;return`${n}:${t(r)}:${t(i)}`}},formatTimeStamp(e,t){if(typeof e==`number`&&e<0xe8d4a51000){let t=String(Date.now()).length-String(e).length;e*=10**t}let n=e,r=new Date(typeof e==`string`?e.replace(/-/g,`/`):e),i=new Date(t??Date.now()).getTime()-r.getTime(),a=Math.floor(i/(24*3600*1e3));if(a>0)n=a>7?T.formatTime(r.getTime()):a+`天前`;else{let e=i%(24*3600*1e3),t=Math.floor(e/(3600*1e3));if(t>0)n=t+`小时前`;else{let t=e%(3600*1e3),r=Math.floor(t/(60*1e3));if(r>0)n=r+`分钟前`;else{let e=t%(60*1e3);n=Math.round(e/1e3)+`秒前`}}}return n}},T=r.default.noConflict(),E=t.default.noConflict(),D=n.default,O=new T.Log(y,S.console||se.console),k=y?.script?.name||void 0,le=n.default.fn.Utils.AnyTouch();O.config({debug:!1,logMaxCount:250,autoClearConsole:!0,tag:!0});var ue=()=>{let e=n.default.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex??0,t=T.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex??0;return Math.max(100,e,t)};e.default.config({isHTML:!0,autoClose:!0,showClose:!1,consoleLogContent(e){let t=e.setting.type;if(t===`loading`)return!1;let n=e.setting.content;return t===`warning`?O.warn(n):t===`error`?O.error(n):O.info(n),!1},get position(){return G.getValue(C.qmsg_config_position.key,C.qmsg_config_position.defaultValue)},get maxNums(){return G.getValue(C.qmsg_config_maxnums.key,C.qmsg_config_maxnums.defaultValue)},get showReverse(){return G.getValue(C.qmsg_config_showreverse.key,C.qmsg_config_showreverse.defaultValue)},get zIndex(){return ue()}}),D.GlobalConfig.setGlobalConfig({zIndex:()=>ue(),mask:{enable:!0,clickEvent:{toClose:!1,toHide:!1}},drag:!0});var A=new T.GM_Menu({GM_getValue:v,GM_setValue:x,GM_registerMenuCommand:ne,GM_unregisterMenuCommand:ae}),j=new T.Httpx({xmlHttpRequest:oe,logDetails:!1});j.interceptors.request.use(e=>e),j.interceptors.response.use(e=>e,t=>(O.error(`[Httpx-HttpxRequest.response] 响应错误`,{data:t}),t.type===`onabort`?e.default.warning(`请求取消`,{consoleLogContent:!0}):t.type===`onerror`?e.default.error(`请求异常`,{consoleLogContent:!0}):t.type===`ontimeout`?e.default.error(`请求超时`,{consoleLogContent:!0}):e.default.error(`其它错误`,{consoleLogContent:!0}),t)),S.Object.defineProperty,S.Object.keys,S.Object.values,S.Function.prototype.apply,S.Function.prototype.call,S.Element.prototype.appendChild,S.setTimeout.bind(S),S.clearTimeout.bind(S),S.setInterval.bind(S),S.clearInterval.bind(S);var M=E.addStyle.bind(E);w.addBlockCSS.bind(w);var N=t.default.selector.bind(t.default),P=t.default.selectorAll.bind(t.default),F=new T.CookieManagerService({baseCookieHandler:`GM_cookie`});F.isSupportGM_cookie||(F.isSupportCookieStore?F.setOptions({baseCookieHandler:`cookieStore`}):F.setOptions({baseCookieHandler:`document.cookie`})),new T.DocumentCookieHandler;var I=`GM_Panel`,L=`data-init`,R=`data-key`,z=`data-default-value`,de=`data-init-more-value`,fe=`data-plugin-search-config`,B=`data-storage-api`,V={followBrowserSize:!1,get width(){return V.followBrowserSize?globalThis.outerWidth:globalThis.innerWidth},get height(){return V.followBrowserSize?globalThis.outerHeight:globalThis.innerHeight}},H={setting:{get width(){return V.width<550?`88vw`:V.width<700?`550px`:`700px`},get height(){return V.height<450?`70vh`:V.height<550?`450px`:`550px`}},settingMiddle:{get width(){return V.width<350?`88vw`:`350px`},get height(){return V.height<450?`88vh`:`450px`}},settingBig:{get width(){return V.width<800?`92vw`:`800px`},get height(){return V.height<600?`80vh`:`600px`}},info:{get width(){return V.width<350?`88vw`:`350px`},get height(){return V.height<250?`88vh`:`250px`}}},U={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig??=new T.Dictionary,this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e)},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]},getDefaultBottomContentConfig(t){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let n=!1,r,i=(e,n)=>{if(t&&typeof t.translateCallback==`function`)return t.translateCallback(e,n);if(typeof n==`object`&&n)for(let t in n)e=e.replaceAll(`{{${t}}}`,n[t]);return e},a=(e,t)=>{typeof t!=`string`&&(t=w.toStr(t));let n=new Blob([t]),r=globalThis.URL.createObjectURL(n);E.createElement(`a`,{href:r,download:e}).click(),T.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(r)},500)},o=()=>{let t=t=>{let n=D.alert({title:{text:i(`请选择导入方式`),position:`center`},content:{text:`
            <div class="btn-control" data-mode="local">${i(`本地导入`)}</div>
            <div class="btn-control" data-mode="network">${i(`网络导入`)}</div>
            <div class="btn-control" data-mode="clipboard">${i(`剪贴板导入`)}</div>`,html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(e){e.close()}}},drag:!0,mask:{enable:!0},width:H.info.width,height:H.info.height,style:`
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
          }`}),r=n.$shadowRoot.querySelector(`.btn-control[data-mode='local']`),a=n.$shadowRoot.querySelector(`.btn-control[data-mode='network']`),o=n.$shadowRoot.querySelector(`.btn-control[data-mode='clipboard']`),s=async n=>{confirm(i(`是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）`))&&(typeof b==`function`?typeof _==`function`?(b().forEach(e=>{_(e)}),e.default.success(i(`已清空脚本存储的配置`))):e.default.error(i(`不支持GM_deleteValue函数，无法执行删除脚本配置`)):e.default.error(i(`不支持GM_listValues函数，无法清空脚本存储的配置`))),typeof ie==`function`?ie(n):Object.keys(n).forEach(e=>{let t=n[e];x(e,t)}),e.default.success(i(`配置导入完毕`)),t?.()},c=t=>new Promise(async n=>{let r=T.toJSON(t);Object.keys(r).length===0?e.default.warning(i(`解析为空配置，不导入`)):await s(r),n(!0)});E.on(r,`click`,e=>{E.preventEvent(e),n.close();let t=E.createElement(`input`,{type:`file`,accept:`.json`});E.on(t,[`propertychange`,`input`],()=>{if(!t.files?.length)return;let e=t.files[0],n=new FileReader;n.onload=()=>{c(n.result)},n.readAsText(e,`UTF-8`)}),t.click()}),E.on(a,`click`,t=>{E.preventEvent(t),n.close();let r=D.prompt({title:{text:i(`网络导入`),position:`center`},content:{text:``,placeholder:i(`请填写URL`),focus:!0},btn:{close:{enable:!0,callback(e){e.close()}},ok:{text:i(`导入`),callback:async t=>{let n=t.text;if(T.isNull(n)){e.default.error(i(`请填入完整的url`));return}let r=e.default.loading(i(`正在获取配置...`)),a=await j.get(n,{allowInterceptConfig:!1});if(r.close(),!a.status){O.error(a),e.default.error(i(`获取配置失败`),{consoleLogContent:!0});return}await c(a.data.responseText)&&t.close()}},cancel:{enable:!1}},drag:!0,mask:{enable:!0},width:H.info.width,height:`auto`}),a=r.$shadowRoot.querySelector(`input`),o=r.$shadowRoot.querySelector(`.pops-prompt-btn-ok`);E.on(a,[`input`,`propertychange`],()=>{E.val(a)===``?E.attr(o,`disabled`,`true`):E.removeAttr(o,`disabled`)}),E.onKeyboard(a,`keydown`,(e,t,n)=>{e===`Enter`&&n.length===0&&E.val(a)!==``&&E.emit(o,`click`)}),E.emit(a,`input`)}),E.on(o,`click`,async t=>{E.preventEvent(t),n.close();let r=await w.getClipboardText();if(r.trim()===``){e.default.warning(i(`获取到的剪贴板内容为空`));return}await c(r)})},n=(t=`${k}_panel-setting-${T.formatTime(Date.now(),`yyyy_MM_dd_HH_mm_ss`)}.json`,n)=>{let r=D.alert({title:{text:i(`请选择导出方式`),position:`center`},content:{text:`
            <div class="btn-control" data-mode="export-to-file">${i(`导出至文件`)}</div>
            <div class="btn-control" data-mode="export-to-clipboard">${i(`导出至剪贴板`)}</div>
            `,html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(e){e.close()}}},drag:!0,mask:{enable:!0},width:H.info.width,height:H.info.height,style:`
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
          }`}),o=r.$shadowRoot.querySelector(`.btn-control[data-mode='export-to-file']`),s=r.$shadowRoot.querySelector(`.btn-control[data-mode='export-to-clipboard']`);E.on(o,`click`,i=>{E.preventEvent(i);try{a(t,n),r.close()}catch(t){e.default.error(t.toString(),{consoleLogContent:!0})}}),E.on(s,`click`,async()=>{await T.copy(n)?(e.default.success(i(`复制成功`)),r.close()):e.default.error(i(`复制失败`))})},r=D.confirm({title:{text:i(`配置`),position:`center`},content:{text:`<textarea name="config-value" id="config" readonly></textarea>`,html:!0},btn:{ok:{enable:!0,type:`primary`,text:i(`导入`),callback(){t()}},cancel:{enable:!0,text:i(`导出`),callback(){n(void 0,s)}}},width:V.width<450?`90vw`:`450px`,height:`auto`,style:`
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
        `}).$shadowRoot.querySelector(`textarea`),o={};if(typeof b==`function`)b().forEach(e=>{let t=v(e);Reflect.set(o,e,t)});else{e.default.warning(i(`不支持函数GM_listValues，仅导出菜单配置`));let t=v(I);Reflect.set(o,I,t)}let s=w.toStr(o);r.value=s},s=()=>{let e=y?.script?.supportURL||y?.script?.namespace;typeof e==`string`&&T.isNotNull(e)&&window.open(e,`_blank`)};return[{id:`script-version`,title:i(`版本：{{version}}`,{version:y?.script?.version||i(`未知`)}),isBottom:!0,views:[],clickFirstCallback(){return!1},afterRender(e){new le(e.$asideLiElement).on(`tap`,function(){clearTimeout(r),r=void 0,n?(n=!1,o()):(r=setTimeout(()=>{n=!1,s()},200),n=!0)})}}]},setDefaultBottomContentConfig(e){this.$data.__defaultBottomContentConfig=e}},pe={$data:{__menuOption:[{key:`show_pops_panel_setting`,text:`⚙ 设置`,autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{G.showPanel(U.getConfig(0))}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu()},initExtensionsMenu(){w.isTopWindow()&&A.add(this.$data.menuOption)},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e)},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(e=>{let t=this.$data.menuOption.findIndex(t=>t.key===e.key);t!==-1&&(this.$data.menuOption[t]=e)})},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1)}},me=class{data={storeNodeList:[],destoryFnList:[]};option={};constructor(e){this.option=e}handlerResult(e,t){let n=[],r=[],i=[];if(Array.isArray(t))i=i.concat(t);else{let e=t=>{if(typeof t==`object`&&t)if(t instanceof Element)i.push(t);else if(Array.isArray(t))e(t);else{let{$css:e,destory:n}=t;e!=null&&(Array.isArray(e)?i=i.concat(e):e instanceof Element&&i.push(e)),typeof n==`function`&&i.push(n)}else i.push(t)};e(t)}let a=e=>{if(e!=null){if(e instanceof Element){n.push(e);return}if(typeof e==`function`){r.push(e);return}}};for(let e of i){let t=a(e);if(typeof t==`boolean`&&!t)break;if(Array.isArray(e))for(let t of e){let e=a(t);if(typeof e==`boolean`&&!e)break}}this.clearStoreNodeList(),this.execDestoryFnAndClear(),e&&(this.data.storeNodeList=this.data.storeNodeList.concat(n),this.data.destoryFnList=this.data.destoryFnList.concat(r))}getEnableStatus(e){return!!this.option.getValue(e)}clearStoreNodeList=()=>{for(let e=this.data.storeNodeList.length-1;e>=0;e--)this.data.storeNodeList[e]?.remove(),this.data.storeNodeList.splice(e,1)};execDestoryFnAndClear=()=>{for(let e=this.data.destoryFnList.length-1;e>=0;e--){let t=this.data.destoryFnList[e];t(),this.data.destoryFnList.splice(e,1)}};checkMenuExec(){let e=!1;return e=typeof this.option.checkExec==`function`?this.option.checkExec(this.option.keyList):this.option.keyList.every(e=>this.getEnableStatus(e)),e}},W=new class{storageKey;listenerData;cacheData;callbacks=[];constructor(e){if(typeof e==`string`){let t=e.trim();if(t==``)throw Error(`key can not be empty string`);this.storageKey=t}else throw TypeError(`key must be a string`);this.listenerData=new r.default.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.setLocalValue=this.setLocalValue.bind(this),this.destory=this.destory.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this)}[Symbol.dispose](){this.destory()}async[Symbol.asyncDispose](){this.destory()}destory(){this.cacheData=null;for(let e=this.callbacks.length-1;e>=0;e--){let t=this.callbacks[e];t(),this.callbacks.splice(e,1)}}getLocalValue(){if(this.cacheData==null){let e=v(this.storageKey);e??(e={},this.setLocalValue(e)),this.destory(),this.cacheData=e;let t=ee(this.storageKey,(e,t,n)=>{this.cacheData=null,this.cacheData=n});return this.callbacks.push(()=>{re(t)}),e}else return this.cacheData}setLocalValue(e){this.cacheData=null,this.cacheData=e,x(this.storageKey,e)}set(e,t){let n=this.get(e),r=this.getLocalValue();Reflect.set(r,e,t),this.setLocalValue(r),this.emitValueChangeListener(e,t,n)}get(e,t){let n=this.getLocalValue();return Reflect.get(n,e)??t}getAll(){return this.getLocalValue()}delete(e){let t=this.get(e),n=this.getLocalValue();Reflect.deleteProperty(n,e),this.setLocalValue(n),this.emitValueChangeListener(e,void 0,t)}has(e){let t=this.getLocalValue();return Reflect.has(t,e)}keys(){let e=this.getLocalValue();return Reflect.ownKeys(e)}values(){let e=this.getLocalValue();return Reflect.ownKeys(e).map(t=>Reflect.get(e,t))}clear(){this.destory(),_(this.storageKey)}addValueChangeListener(e,t){let n=Math.random(),r=this.listenerData.get(e)||[];return r.push({id:n,key:e,callback:t}),this.listenerData.set(e,r),n}removeValueChangeListener(e){let t=!1;for(let[n,r]of this.listenerData.entries()){for(let n=0;n<r.length;n++){let i=r[n];(typeof e==`string`&&i.key===e||typeof e==`number`&&i.id===e)&&(r.splice(n,1),n--,t=!0)}this.listenerData.set(n,r)}return t}async emitValueChangeListener(...e){let[t,n,r]=e;if(!this.listenerData.has(t))return;let i=this.listenerData.get(t);for(let a=0;a<i.length;a++){let o=i[a];if(typeof o.callback==`function`){let i,a;e.length===1||(e.length===2?i=n:e.length===3&&(i=n,a=r)),await o.callback(t,i,a)}}}}(I),G={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue??=new T.Dictionary,this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData??=new T.Dictionary,this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce??=new T.Dictionary,this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData??=new T.Dictionary,this.__onceExecData},get scriptName(){return k},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e},key:I,attributeKeyName:R,attributeDefaultValueName:z},init(){this.initContentDefaultValue(),pe.init()},initContentDefaultValue(){let e=e=>{if(!e.attributes||e.type===`button`||e.type===`container`||e.type===`deepMenu`)return;let t=e.attributes,n=t[L];if(typeof n==`function`){let e=n();if(typeof e==`boolean`&&!e)return}let r=new Map,i=t[R];if(i!=null){let e=t[z];r.set(i,e)}let a=t[de];if(typeof a==`object`&&a&&Object.keys(a).forEach(e=>{let t=a[e];r.set(e,t)}),!r.size){O.warn(`请先配置键`,e);return}if(e.type===`switch`){let t=typeof e.disabled==`function`?e.disabled():e.disabled;typeof t==`boolean`&&t&&this.$data.contentConfigInitDisabledKeys.push(...r.keys())}for(let[e,t]of r.entries())this.setDefaultValue(e,t)},t=n=>{for(let r=0;r<n.length;r++){let i=n[r];e(i);let a=i.views;a&&Array.isArray(a)&&t(a)}},n=[...U.getAllContentConfig()];for(let e=0;e<n.length;e++){let r=n[e];if(!r.views)continue;let i=r.views;i&&Array.isArray(i)&&t(i)}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)]},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&O.warn(`该key已存在，初始化默认值失败: `,{key:e,initValue:this.$data.contentConfigInitDefaultValue.get(e)}),this.$data.contentConfigInitDefaultValue.set(e,t)},getDefaultValue(e){return this.$data.contentConfigInitDefaultValue.get(e)},setValue(e,t){W.set(e,t)},getValue(e,t){return W.get(e)??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){W.delete(e)},hasKey(e){return W.has(e)},addValueChangeListener(e,t,n){let r=W.addValueChangeListener(e,t);if(n?.immediate||n?.immediateAll){let r=this.getValue(e);n?.immediate?t(e,r,r):n?.immediateAll&&G.emitMenuValueChange(e,r,r)}return r},removeValueChangeListener(e){W.removeValueChangeListener(e)},emitMenuValueChange(e,t,n){W.emitValueChangeListener(e,t,n)},async exec(e,t,n,r=!0){let i;i=typeof e==`string`||Array.isArray(e)?()=>e:e;let a=!1,o=i(),s=[];Array.isArray(o)?(a=!0,s=o):s.push(o);let c=s.find(e=>!this.$data.contentConfigInitDefaultValue.has(e));if(c){O.warn(`${c} 键不存在`);return}let l=JSON.stringify(s);if(r&&this.$data.onceExecMenuData.has(l))return this.$data.onceExecMenuData.get(l);let u=[],d=new me({keyList:s,getValue:e=>!!this.getValue(e),checkExec(e){let t=!1;return t=typeof n==`function`?n(e):e.every(e=>this.getValue(e)),t}}),f=async e=>{let n=d.checkMenuExec(),r=[];if(n){let i=s.map(e=>this.getValue(e));r=await t({key:s,triggerKey:e?.key,value:a?i:i[0],addStoreValue:(...e)=>d.handlerResult(n,e)})}d.handlerResult(n,r)};r&&s.forEach(e=>{let t=this.addValueChangeListener(e,(e,t,n)=>f({key:e,newValue:t,oldValue:n}));u.push(t)}),await f();let p={checkMenuExec:d.checkMenuExec.bind(d),keyList:s,reload(){this.clearStoreNodeList(),this.execDestoryFnAndClear(),f()},clear(){d.clearStoreNodeList(),this.execDestoryFnAndClear(),this.removeValueChangeListener(),this.clearOnceExecMenuData()},clearStoreNodeList:d.clearStoreNodeList.bind(d),execDestoryFnAndClear:d.execDestoryFnAndClear.bind(d),removeValueChangeListener:()=>{u.forEach(e=>{this.removeValueChangeListener(e)})},clearOnceExecMenuData(){r&&G.$data.onceExecMenuData.delete(l)}};return this.$data.onceExecMenuData.set(l,p),p},async execMenu(e,t,n=!1,r=!1){return await this.exec(e,async(...e)=>await t(...e),e=>e.every(e=>{let t=!!this.getValue(e);return G.$data.contentConfigInitDisabledKeys.includes(e)&&(t=!1,O.warn(`.execMenu${r?`Once`:``} ${e} 被禁用`)),n&&(t=!t),t}),r)},async execMenuOnce(e,t,n=!1,r=!1){let i=await this.execMenu(e,t,n,!0);return r&&i&&(this.removeUrlChangeWithExecMenuOnceListener(e),this.addUrlChangeWithExecMenuOnceListener(e,()=>{i.reload()})),i},async execMoreMenu(e,t,n=!1,r=!1,i=!1){let a=await Promise.all(e.map(async([e,t])=>await this.execMenu(e,(...e)=>t(...e),n,r))),o=new me({keyList:e.map(([e])=>e),getValue:e=>!!this.getValue(e)}),s=[],c=(e=!1)=>{if(o.clearStoreNodeList(),o.execDestoryFnAndClear(),e){for(let e of s)this.removeValueChangeListener(e);for(let e of a)e&&this.removeUrlChangeWithExecMenuOnceListener(e.keyList)}},l=()=>{let e=a.every(e=>e?e.checkMenuExec():!0);if(c(!1),e){let n=t();o.handlerResult(e,n)}};l();for(let e of a)if(e){let t=this.addValueChangeListener(e.keyList[0],()=>{l()});s.push(t),i&&(this.removeUrlChangeWithExecMenuOnceListener(e.keyList),this.addUrlChangeWithExecMenuOnceListener(e.keyList,()=>{e.reload()}))}return{clear(){for(let e of a)e?.clear();this.execDestoryFnAndClear(),this.removeValueChangeListener()},execDestoryFnAndClear(){for(let e of a)e?.execDestoryFnAndClear();c(!1)},removeValueChangeListener(){for(let e of a)e?.removeValueChangeListener();c(!0)}}},async execMoreMenuOnce(e,t,n=!1,r=!1){return await this.execMoreMenu(e,t,n,!0,r)},deleteExecMenuOnce(e){return e=this.transformKey(e),this.$data.onceExecMenuData.delete(e),this.$data.urlChangeReloadMenuExecOnce.delete(e),W.removeValueChangeListener(e)},onceExec(e,t,n=!1){if(e=this.transformKey(e),typeof e!=`string`)throw TypeError(`key 必须是字符串`);this.$data.onceExecData.has(e)||n&&(Array.isArray(e)?e:[e]).findIndex(e=>{if(!G.getValue(e))return!0})!==-1||(t(),this.$data.onceExecData.set(e,1))},deleteOnceExec(e){e=this.transformKey(e),this.$data.onceExecData.delete(e)},addUrlChangeWithExecMenuOnceListener(e,t){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.set(e,t),{off:()=>this.removeUrlChangeWithExecMenuOnceListener(e)}},removeUrlChangeWithExecMenuOnceListener(e){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.delete(e)},hasUrlChangeWithExecMenuOnceListener(e){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.has(e)},async emitUrlChangeWithExecMenuOnceEvent(e){let t=this.$data.urlChangeReloadMenuExecOnce.values();for(let n of t)await n(e)},showPanel(e,t=`${k}-设置`,n=!1,r=!1){this.$data.$panel=null,this.$data.panelContent=[];let i=e.findIndex(e=>(typeof e.isBottom==`function`?e.isBottom():!!e.isBottom)&&e.id===`script-version`)!==-1;!n&&!i&&e.push(...U.getDefaultBottomContentConfig());let a=D.panel({title:{text:t,position:`center`,html:!1,style:``},content:e,btn:{close:{enable:!0,callback:e=>{e.close(),this.$data.$panel=null}}},mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1},clickCallBack:e=>{e(),this.$data.$panel=null}},width:H.setting.width,height:H.setting.height,drag:!0,only:!0,style:`
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,...this.$data.panelConfig});return this.$data.$panel=a,this.$data.panelContent=e,r||this.registerConfigSearch({$panel:a,content:e}),{$panel:a,content:e}},registerConfigSearch(t){let{$panel:n,content:r}=t,i=(e,n)=>{if(typeof t.translateCallback==`function`)return t.translateCallback(e,n);if(typeof n==`object`&&n)for(let t in n)e=e.replaceAll(`{{${t}}}`,n[t]);return e},a=async(e,t)=>{if(e==null)return;let n=await t(e);return n&&typeof n.isFind==`boolean`&&n.isFind?n.data:await a(n.data,t)},o=(e,t)=>{let n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(t?.(),n.disconnect())})},{root:null,threshold:1});n.observe(e),e.scrollIntoView({behavior:`smooth`,block:`center`})},s=e=>{let t=`pops-flashing`;E.onAnimationend(e,()=>{e.classList.remove(t)}),e.classList.add(t)},c=c=>{if(c.type===`dblclick`&&f)return;E.preventEvent(c);let l=D.alert({title:{text:i(`搜索配置`),position:`center`},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="${i(`请输入需要搜素的配置名称`)}">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:!0},btn:{ok:{enable:!1}},mask:{clickEvent:{toClose:!0}},width:H.settingMiddle.width,height:`auto`,drag:!0,style:`
					${D.config.cssText.panelCSS}

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
				`}),u=l.$shadowRoot.querySelector(`.search-config-text`),d=l.$shadowRoot.querySelector(`.search-result-wrapper`);u.focus();let p=()=>{E.empty(d)},m=t=>{let r=T.queryProperty(t,e=>e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e}),c=E.createElement(`div`,{className:`search-result-item`,innerHTML:`
							<div class="search-result-item-path">${r.matchedData?.path}</div>
							<div class="search-result-item-description">${r.matchedData?.description??``}</div>
						`}),l=D.fn.PanelHandlerComponents();return E.on(c,`click`,()=>{let r=n.$shadowRoot.querySelectorAll(`aside.pops-panel-aside .pops-panel-aside-top-container li`)[t.index];if(!r){e.default.error(i(`左侧项下标{{index}}不存在`,{index:t.index}));return}r.scrollIntoView({behavior:`smooth`,block:`center`}),r.click(),a(t.next,async t=>{if(t?.next){let r=await E.waitNode(()=>Array.from(n.$shadowRoot.querySelectorAll(`.pops-panel-deepMenu-nav-item`)).find(e=>{let n=Reflect.get(e,l.$data.nodeStoreConfigKey);return typeof n==`object`&&!!n&&n.text===t.name}),2500);if(r)r.click();else return e.default.error(i(`未找到对应的二级菜单`)),{isFind:!0,data:t};return{isFind:!1,data:t.next}}else{let r=await E.waitNode(()=>Array.from(n.$shadowRoot.querySelectorAll(`li:not(.pops-panel-deepMenu-nav-item)`)).find(e=>Reflect.get(e,l.$data.nodeStoreConfigKey)===t.matchedData?.formConfig),2500);if(r){o(r);let e=r.closest(`.pops-panel-forms-fold[data-fold-enable]`);e&&(e.querySelector(`.pops-panel-forms-fold-container`).click(),await T.sleep(500)),o(r,()=>{s(r)})}else e.default.error(i(`未找到对应的菜单项`));return{isFind:!0,data:t}}})}),c},h=e=>{let t=new RegExp(e,`i`),n=[],i=(e,r)=>{for(let a=0;a<e.length;a++){let o=e[a],s=o.views;if(s&&Array.isArray(s)){let e=T.deepClone(r);if(o.type===`deepMenu`){let t=T.queryProperty(e,e=>e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e});t.next={name:o.text}}i(s,e)}else{let e,i;if(o.type===`own`){let t=Reflect.get(o.attributes||{},fe);t&&(typeof t==`function`&&(t=t()),typeof t.text==`string`&&(e=t.text),typeof t.desc==`string`&&(i=t.desc))}else e=o.text,i=Reflect.get(o,`description`);let a=[e,i],s=a.findIndex(e=>{if(typeof e==`string`)return e.match(t)});if(s!==-1){let t=T.deepClone(r),c=T.queryProperty(t,e=>e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e});c.next={name:e,matchedData:{path:``,formConfig:o,matchedText:a[s],description:i}};let l=[];T.queryProperty(t,e=>{let t=e?.name;return typeof t==`string`&&t.trim()!==``&&l.push(t),e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e}});let u=l.join(w.escapeHtml(` - `));c.next.matchedData.path=u,n.push(t)}}}};for(let e=0;e<r.length;e++){let t=r[e];if(!t.views||t.isBottom&&t.id===`script-version`)continue;let n=t.views;if(n&&Array.isArray(n)){let r=t.title;typeof r==`function`&&(r=r()),i(n,{index:e,name:r})}}let a=document.createDocumentFragment();for(let e of n){let t=m(e);a.appendChild(t)}p(),d.append(a)};E.on(u,`input`,T.debounce(e=>{E.preventEvent(e);let t=E.val(u).trim();if(t===``){p();return}h(t)},200))};n.$shadowRoot.querySelectorAll(`aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`).forEach(e=>{E.on(e,`dblclick`,c)});let l=new WeakMap,u=!1,d,f=!1;E.on(n.$shadowRoot,`touchend`,`aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`,(e,t)=>{f=!0,clearTimeout(d),d=void 0,u&&l.has(t)?(u=!1,l.delete(t),c(e)):(d=setTimeout(()=>{u=!1},200),u=!0,l.set(t,e))},{capture:!0}),n.$shadowRoot.appendChild(E.createElement(`style`,{type:`text/css`,textContent:`
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
    		`}))},transformKey(e){if(Array.isArray(e))if(e.length>1){let t=e.sort();return JSON.stringify(t)}else return e[0];else return e},getDynamicValue(e,t){let n=!1,r=t,i=this.addValueChangeListener(e,(e,t)=>{r=t});return{get value(){return n||(n=!0,r=G.getValue(e,t)),r},destory(){G.removeValueChangeListener(i)}}}};w.setGMResourceCSS(ce.Viewer),w.setGMResourceCSS(ce.Hljs),D.GlobalConfig.setGlobalConfig({mask:{enable:!0},drag:!0});var he=()=>{let e=`texttolink`,t=/((https?:\/\/|www\.)[\x21-\x7e]+[\w\/]|(\w[\w._-]+\.(com|cn|org|net|info|tv|cc))(\/[\x21-\x7e]*[\w\/])?|ed2k:\/\/[\x21-\x7e]+\|\/|thunder:\/\/[\x21-\x7e]+=)/gi,n=function(t){let n=t.originalTarget??t.target,r;if(n!=null&&n.localName===`a`&&n.className.indexOf(e)!==-1&&(r=n.getAttribute(`href`),typeof r==`string`&&r.indexOf(`http`)!==0&&r.indexOf(`ed2k://`)!==0&&r.indexOf(`thunder://`)!==0))return n.setAttribute(`href`,`http://`+n)},r=function(n){if(typeof n!=`object`||!n)return;let r=n?.textContent,i=n?.parentNode;if(i!=null&&i?.className?.indexOf?.(e)===-1&&n.nodeName!==`#cdata-section`&&typeof r==`string`){let a=r.replace(t,`<a href="$1" target="_blank" class="${e}">$1</a>`);if(r.length!==a.length){let e=document.createElement(`span`);E.html(e,a);let t=e.querySelector(`a`),r=t.href;return console.log(`识别: ${r}`),i.nodeName.toLowerCase()===`span`?i.replaceChild(t,n):i.replaceChild(e,n)}}},i=`a svg canvas applet input button area pre embed frame frameset head iframe img option map meta noscript object script style textarea code`.split(` `),a=`//text()[not(ancestor::${i.join(`) and not(ancestor::`)})]`,o=RegExp(`^(${i.join(`|`)})$`,`i`),s=function(e,t){let n,i;if(t+1e4<e.snapshotLength){let a=n=t;for(i=t+1e4;t<=i?n<=i:n>=i;a=t<=i?++n:--n)r(e.snapshotItem(a));setTimeout(function(){return s(e,t+1e4)},15)}else{let a;for(a=n=t,i=e.snapshotLength;t<=i?n<=i:n>=i;a=t<=i?++n:--n)r(e.snapshotItem(a))}},c=function(e){return s(document.evaluate(a,e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null),0)},l=function(e){for(let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,{acceptNode:function(e){let t=e?.parentNode?.localName;return o.test(t)?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT}});t.nextNode();)r(t.currentNode)},u=new T.LockFunction(e=>{for(let t of e)if(t.type===`childList`){let e=t.addedNodes;for(let t=0;t<e.length;t++){let n=e[t];l(n)}}}),d=function(){return c(document.body),T.mutationObserver(document.body,{config:{subtree:!0,childList:!0},callback:e=>{u.run(e)}})},f=function(e){let t=e.getAttribute(`href`);if(typeof t==`string`&&t.indexOf(`http`)!==0&&t.indexOf(`ed2k://`)!==0&&t.indexOf(`thunder://`)!==0)return e.setAttribute(`href`,`http://`+t)};document.addEventListener(`mouseover`,n),setTimeout(function(){let t=Array.from(document.getElementsByClassName(e));for(let e of t)f(e)},1500),setTimeout(d,100)},K={formhash:/formhash=([0-9a-zA-Z]+)/,hash:/hash=(.+)&/,uid:/uid(=|-)(\d+)/,fontSpecial:/<font.*?>|<\/font>|<strike>|<strong>|<i>|<u>|align=".*?"|<br>[\s]*<br>[\s]*<br>/g,ptid:/&ptid=([\d]+)/i,pid:/&pid=([\d]+)/i,tid:/&tid=([\d]+)/i},q={getAvatar:(e,t=`middle`)=>`/uc_server/avatar.php?uid=${e}&size=${t}&ts=1`,getCurrentUID(){let e=S.discuz_uid;if(typeof e==`string`)return e;let t=N(`.sidenv_exit a[href*="uid-"]`)||N(`#comiis_key a[href*="uid-"]`);if(t){let e=t.href.match(/uid=([0-9]+)/);if(e)return e[e.length-1]}},async getFormHash(){let e=Array.from((top||globalThis).document.querySelectorAll(`input[name=formhash]`));for(let t=0;t<e.length;t++){let n=e[t].value;if(n)return n}let t=Array.from((top||globalThis).document.querySelectorAll(`a[href*="formhash="]`));for(let e=0;e<t.length;e++){let n=t[e].href.match(K.formhash);if(n){let e=n[n.length-1];if(e)return e}}let n=await j.get(`/home.php?mod=spacecp`,{fetch:!0,allowInterceptConfig:!1});if(n.status){let e=n.data.responseText,t=E.toElement(e,!0,!0).querySelector(`input[name=formhash]`);if(t){let e=t.value;if(T.isNotNull(e))return e}}else O.error(`请求个人主页获取formhash失败`,n)},envIsMobile(){return(S.STYLEID||window.STYLEID||typeof STYLEID<`u`&&STYLEID)===`3`},getThreadId:e=>{let t=e.match(/thread-([\d]+)-|&tid=([\d]+)/i);if(t){let e=t.filter(Boolean);return e[e.length-1]}},getForumId(e){let t=e.match(/&fid=([\d]+)/i);if(t)return t[t.length-1]},getPostId(e){let t=e.match(/&pid=([\d]+)/i);if(t)return t[t.length-1]},getRepquote(e){let t=e.match(/&repquote=([\d]+)/i);if(t)return t[t.length-1]}},J={$key:{sign:`mt-sign-time`},init(){this.sign()},checkSignInfo(){let e=this.getSignInfo().find(e=>e.hostName===window.location.hostname);return e?T.formatTime(Date.now(),`yyyyMMdd`)===T.formatTime(e.time,`yyyyMMdd`):!1},setSignInfo(){let e={hostName:window.location.hostname,time:Date.now()},t=this.getSignInfo(),n=t.findIndex(t=>t.hostName===e.hostName);n!==-1&&t.splice(n,1),t.push(e),x(this.$key.sign,t)},getSignInfo(){let e=v(this.$key.sign,[]);return Array.isArray(e)?e:(this.clearSignInfo(),[])},getHostNameSignInfo(e=window.location.hostname){return this.getSignInfo().find(t=>t.hostName===e)},clearSignInfo(e){if(typeof e==`string`){let t=this.getSignInfo(),n=t.findIndex(t=>t.hostName===e);n!==-1&&t.splice(n,1),x(this.$key.sign,t)}else _(this.$key.sign)},checkLogin(){return q.envIsMobile()?!!N(`a[href*='member.php?mod=logging&action=logout']`):!!N(`#comiis_key`)},async sign(){let t=await q.getFormHash();if(t==null){if(N(`#comiis_picshowbox`)){O.info(`当前为评论区的看图模式 `);return}O.error(`自动签到：获取账号formhash失败`),this.clearSignInfo(window.location.hostname),e.default.error({content:`自动签到：获取账号formhash失败`});return}if(this.checkSignInfo()){O.info(`今日已签到`);return}let r=!!G.getValue(`mt-auto-sign-useFetch`),i=T.getRandomPCUA(),a=()=>{this.setSignInfo()},o=()=>{this.clearSignInfo(window.location.hostname)},s=e=>{let t=n.default.alert({title:{text:`未知签到内容`,position:`center`},content:{text:``,html:!1},width:`88vw`,height:`300px`}).$shadowRoot.querySelector(`.pops-alert-content`);t.innerText=e},c=[{checkPluginEnableUrl:`/plugin.php?id=k_misign:sign`,async sign(){let n={operation:`qiandao`,format:`button`,formhash:t,inajax:1,ajaxtarget:`midaben_sign`},c=await j.get(`/k_misign-sign.html?${T.toSearchParamsStr(n)}`,{fetch:r,headers:{"User-Agent":i},allowInterceptConfig:!1});if(!c.status){e.default.error(`签到：网络异常，请求失败`,{consoleLogContent:!0});return}a(),O.info(`签到信息：`,c);let l=c.data.responseText,u=T.parseCDATA(l),d=E.toElement(`<div>${u}</div>`,!0,!1),f=E.text(d);if(f.includes(`需要先登录`)){e.default.error(`签到：请先登录账号`,{timeout:3e3,consoleLogContent:!0}),o();return}else if(f.includes(`请稍后再试`)||f.includes(`您已经被列入黑名单`)||f.includes(`绑定手机号后才可以签到`)||f.includes(`您所在用户组不允许使用`)){e.default.error(`签到：`+f,{timeout:5e3});return}else if(f.includes(`今日已签`)||f.includes(`今日已经签到`)){e.default.info(`签到：`+f);return}else if(l.includes(`您当前的访问请求当中含有非法字符，已经被系统拒绝`)){e.default.error(`签到: 您当前的访问请求当中含有非法字符，已经被系统拒绝`,{timeout:6e3});return}else if(r&&`location`in T.toJSON(l)){e.default.success(`签到: 签到成功`);return}let p=d.querySelector(`.con`),m=d.querySelector(`.line`);if(p&&m){let t=E.text(p).match(/([0-9]+)金币/),n=E.text(m).match(/([0-9]+)/),r=t[t.length-1],i=n[n.length-1];O.success(`金币${r}，排名${i}`),e.default.info(`
							<div style="display: flex;${q.envIsMobile()?``:`padding: 20px;`}">
								<div style="align-self: center;margin-right: 20px;">签到</div>
								<div>排名 ${i}<br>金币 ${r}</div>
							</div>`,{timeout:4e3,isHTML:!0});return}s(l)}},{checkPluginEnableUrl:`/plugin.php?id=dsu_paulsign:sign`,async sign(){let n=await j.post(`/plugin.php?${T.toSearchParamsStr({id:`dsu_paulsign:sign`,operation:`qiandao`,infloat:1,inajax:1})}`,{data:{formhash:t,qdxq:`kx`,qdmode:3,todaysay:``,fastreply:0},processData:!0,fetch:r,headers:{"User-Agent":i,"Content-Type":`application/x-www-form-urlencoded`},allowInterceptConfig:!1});if(!n.status){e.default.error(`签到：网络异常，请求失败`,{consoleLogContent:!0});return}a(),O.info(`签到信息：`,n);let o=n.data.responseText;if(o.includes(`签到成功`)){e.default.success(`签到：签到成功`);return}if(o.includes(`今日已经签到`)){e.default.info(`签到：您今日已经签到，请明天再来！`);return}s(o)}}];for(let e=0;e<c.length;e++){let t=c[e],n=await j.get(t.checkPluginEnableUrl,{fetch:r,headers:{"User-Agent":T.getRandomPCUA()},allowInterceptConfig:!1});if(!n.status){O.error(`签到：检查签到插件是否启用的请求失败`,n);continue}if(E.toElement(n.data.responseText,!0,!0).querySelector(`#messagetext`)||n.data.responseText.includes(`插件不存在或已关闭`)){O.error(`插件：${t.checkPluginEnableUrl} 未启用或不存在`);continue}await t.sign();break}}},Y={isKMiSign(){return window.location.pathname.startsWith(`/k_misign-sign.html`)},isPost(){let e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith(`/thread-`)||window.location.pathname.startsWith(`/forum.php`)&&e.has(`mod`,`viewthread`)},isPage(){return!!window.location.pathname.match(/^\/page-([0-9]+).html/g)},isGuide(){let e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith(`/forum.php`)&&e.has(`mod`,`guide`)},isPlate(){return!!window.location.pathname.match(/\/forum-[0-9]{1,2}-[0-9]{1,2}.html/g)},isSearch(){return window.location.pathname.startsWith(`/search.php`)},isSpace(){let e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith(`/home.php`)&&e.has(`mod`,`space`)},isMySpace(){let e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith(`/home.php`)&&e.has(`mod`,`space`)&&e.has(`do`,`profile`)&&e.has(`mycenter`)},isSpaceWithAt(){return window.location.pathname.startsWith(`/space-uid-`)},isForumList(){let e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith(`/forum.php`)&&e.has(`forumlist`)},isMessage(){let e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith(`/home.php`)&&e.has(`mod`,`space`)&&e.has(`do`,`notice`)},isMessageList(){let e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith(`/home.php`)&&e.has(`mod`,`space`)&&e.has(`do`,`pm`)},isPointsMall(){let e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith(`/keke_integralmall-keke_integralmall.html`)||window.location.pathname.startsWith(`/plugin.php`)&&e.has(`id`,`keke_integralmal`)},isPostPublish(){let e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith(`/forum.php`)&&e.has(`mod`,`post`)},isPostPublish_voting(){let e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith(`/forum.php`)&&e.has(`special`,`1`)||e.has(`fid`,`42`)},isPostPublish_edit(){let e=new URLSearchParams(window.location.search);return this.isPostPublish()&&e.has(`action`,`edit`)},isPostPublish_newthread(){let e=new URLSearchParams(window.location.search);return this.isPostPublish()&&e.has(`action`,`newthread`)},isPostPublish_reply(){let e=new URLSearchParams(window.location.search);return this.isPostPublish()&&e.has(`action`,`reply`)}},ge={init(){E.onReady(()=>{G.execMenuOnce(`mt-forum-post-quickCollentBtn`,()=>this.quickCollentBtn()),G.execMenuOnce(`mt-forum-post-quickReplyOptimization`,()=>this.quickReplyOptimization())})},async quickCollentBtn(){O.info(`【快捷收藏】`);let e=await E.waitNode(`#scrolltop`,1e4);if(!e)return;let t=await q.getFormHash(),n=q.getThreadId(window.location.href),r=`/home.php?${T.toSearchParamsStr({mod:`spacecp`,ac:`favorite`,type:`thread`,id:n,formhash:t,infloat:`yes`,handlekey:`k_favorite`,inajax:1,ajaxtarget:`fwin_content_k_favorite`})}`,i=E.createElement(`span`,{innerHTML:`
      <a href="${r}" 
        id="k_favorite"
        onclick="showWindow(this.id, this.href, 'get', 0);"
        onmouseover="this.title = $('favoritenumber').innerHTML + ' 人收藏'">
        <img src="data:image/png;base64,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"
            height="26" 
            width="26" 
            style="position:absolute;top:10px;left:11px">
      </a>
      `});return E.prepend(e,i),[M(`
      a#k_favorite{
        background: #ffffff;
      }
      a#k_favorite:hover{
        background: #f80 !important;
      }
    `),()=>{E.remove(i)}]},async quickReplyOptimization(){let e=await E.waitNode(`#scrolltop a[title="快速回复"]`,1e4);if(e)return O.info(`快捷回复优化`),E.on(e,`click`,function(){S.showWindow(`reply`,e.href),O.info(`等待弹窗出现`),E.waitNode(`#moreconf`,1e4).then(e=>{if(!e)return;O.success(`弹出出现，添加按钮`);let t=E.createElement(`button`,{innerText:`一键空格`,type:`button`,id:`insertspace2`},{style:`float: left;`});E.on(t,`click`,e=>{E.preventEvent(e),E.val(N(`#postmessage`),E.val(N(`#postmessage`))+`           `)}),E.append(e,t)})}).off}};h(`.pls .avatar img,.avtm img{border-radius:10%}.pls .avatar img{--avatar-size:90px;width:var(--avatar-size);height:var(--avatar-size)}`);var _e={$flag:{isSetHljsCSS:!1},init(){ge.init(),G.execMenuOnce(`mt-forum-post-autoExpandContent`,()=>this.autoExpandContent()),G.execMenuOnce(`mt-forum-post-repairImageWidth`,()=>this.repairImageWidth()),G.execMenuOnce(`mt-forum-post-hideBottomInfoBlock`,()=>this.hideBottomInfoBlock()),E.onReady(()=>{G.execMenu(`mt-forum-post-removeFontStyle`,()=>{this.removeFontStyle()}),G.execMenu(`mt-forum-post-removeCommentFontStyle`,()=>{this.removeCommentFontStyle()}),G.execMenuOnce(`mt-forum-post-loadNextPageComment`,()=>this.loadNextPageComment()),G.execMenuOnce(`mt-forum-post-codeQuoteOptimization`,()=>this.codeQuoteOptimization()),G.execMenuOnce(`mt-forum-post-optimizationImagePreview`,()=>this.optimizationImagePreview()),G.execMenuOnce(`mt-forum-post-interceptionAttachment`,()=>this.setAttachmentsClickTip()),G.execMenu(`mt-forum-post-detectingUserOnlineStatus`,()=>{this.detectingUserOnlineStatus()}),G.execMenu(`mt-forum-post-showUserLevel`,()=>{this.showUserLevel()})})},autoExpandContent(){return O.info(`自动展开帖子内容`),[M(`
				div.comiis_message.bg_f.view_one.b_b.cl.message>div.comiis_messages.comiis_aimg_show.cl{
					max-height:inherit!important;
					overflow-y:inherit!important;
					position:inherit!important
				}
        	`),w.addBlockCSS(`.comiis_lookfulltext_bg`,`.comiis_lookfulltext_key`)]},repairImageWidth(){return O.info(`修复图片宽度`),M(`
        .comiis_messages img{
            max-width: 100% !important;
        }`)},removeFontStyle(){let e=N(`.comiis_a.comiis_message_table`);e&&(O.info(`移除帖子字体效果`),E.html(e,E.html(e).replace(K.fontSpecial,``)))},removeCommentFontStyle(){O.info(`移除评论区的字体效果`);let e=P(`font`),t=E.html(N(`.comiis_postlist .comiis_postli`))||``;t!==``&&(e.forEach(e=>{t.includes(e.innerHTML)||(e.removeAttribute(`color`),e.removeAttribute(`style`),e.removeAttribute(`size`))}),P(`.comiis_message.message`).forEach(e=>{if(t.includes(e.innerHTML)){E.html(e,E.html(e).replace(K.fontSpecial,``));let t=E.next(e);t&&t.localName===`strike`&&(t.outerHTML=t.outerHTML.replace(/^<strike>(\n|)/g,``).replace(/<\/strike>$/g,``))}})),P(`.comiis_postli.comiis_list_readimgs.nfqsqi`).forEach(e=>{let t=e.parentElement;t&&t.localName===`strike`&&(t.outerHTML=t.outerHTML.replace(/^<strike>(\n|)/g,``).replace(/<\/strike>$/g,``))})},loadNextPageComment(){if(O.info(`自动加载下一页评论`),document.title.includes(`提示信息 - MT论坛`))return;if(P(`.pgbtn`).length==0){O.warn(`没有找到下一页按钮`);return}let t=async function(t){let n=await j.get(t,{fetch:!0,allowInterceptConfig:!1});if(!n.status){e.default.error(`网络异常，请求下一页失败`);return}let r=T.parseFromString(n.data.responseText),i=r.querySelector(`.pgbtn a`);return r.querySelector(`#postlistreply`)?.remove(),r.querySelector(`.bm_h.comiis_snvbt`)?.remove(),{url:i?i.getAttribute(`href`):null,postlist:r.querySelector(`#postlist`),pgbtn:r.querySelector(`.pgbtn`),pgs:r.querySelector(`.pgs.mtm`)}},n=async function(){let e=N(`.pgbtn a`).getAttribute(`href`);if(e){let n=await t(e);n&&(n.postlist?.querySelector(`.comiis_vrx`)?.querySelector(`.km1`)&&(Object.keys(n).forEach(e=>{n[e]=null}),O.warn(`检测到请求的本页内容中存在【楼主】标识，判断为重复页请求`)),(!n.url||n.url==e)&&(O.error(`最后一页，取消监听`),E.off(document,[`scroll`,`wheel`],r.run),E.remove(`.pgbtn`)),n.postlist&&E.append(`#postlist`,E.html(n.postlist)),n.pgbtn&&E.html(`.pgbtn`,E.html(n.pgbtn)),n.pgs&&E.html(`.pgs.mtm`,E.html(n.pgs)),_e.init())}else O.error(`获取下一页元素失败`)},r=new T.LockFunction(async()=>{T.isNearBottom()&&await n()}),i=E.on(document,[`scroll`,`wheel`],r.run);return[()=>{i.off()}]},codeQuoteOptimization(){O.info(`代码块优化`);function e(e){let t=`add.and.cmp.cmpg.cmpl.const.div.double.float.goto.if.int.long.move.mul.neg.new.nop.not.or.rem.return.shl.shr.sput.sub.throw.ushr.xor`.split(`.`),n=[`aget`,`aput`,`array`,`check`,`execute`,`fill`,`filled`,`goto/16`,`goto/32`,`iget`,`instance`,`invoke`,`iput`,`monitor`,`packed`,`sget`,`sparse`],r=[`transient`,`constructor`,`abstract`,`final`,`synthetic`,`public`,`private`,`protected`,`static`,`bridge`,`system`,`interface`,`enum`,`annotation`,`volatile`,`native`,`strictfp`,`synchronized`];return{aliases:[`smali`],keywords:{keyword:r.join(` `),built_in:t.concat(n).join(` `),type:[`void`,`boolean`,`byte`,`short`,`char`,`int`,`long`,`float`,`double`,`boolean\\[`,`byte\\[`,`short\\[`,`char\\[`,`int\\[`,`long\\[`,`float\\[`,`double\\[`].join(` `)},contains:[{className:`string`,begin:`"`,end:`"`,relevance:0,contains:[e.BACKSLASH_ESCAPE,{className:`char.escape`,begin:/\\[nrtbf]/,relevance:0}]},{className:`string`,begin:`'`,end:`'`,relevance:0},e.COMMENT(`#`,`$`,{relevance:0}),{className:`keyword`,variants:[{begin:`\\s*\\.end\\s[a-zA-Z0-9]*`},{begin:`^[ ]*\\.[a-zA-Z]*`,relevance:0},{begin:`\\s:[a-zA-Z_0-9]*`,relevance:0},{begin:`\\s(`+r.join(`|`)+`)`}]},{className:`built_in`,variants:[{begin:`\\s(`+t.join(`|`)+`)\\s`},{begin:`\\s(`+t.join(`|`)+`)((\\-|/)[a-zA-Z0-9]+)+\\s`,relevance:10},{begin:`\\s(`+n.join(`|`)+`)((\\-|/)[a-zA-Z0-9]+)*\\s`,relevance:10}]},{className:`class`,begin:`L[^(;:
]*;`,relevance:0},{className:`function`,begin:`\\s*[a-zA-Z_<][a-zA-Z0-9_<>]*\\s*\\(`,end:`\\s*\\)`,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[{className:`params`,begin:`\\S`,endsWithParent:!0,relevance:0}]},{className:`variable`,begin:`[vp][0-9]+`,relevance:0},{className:`number`,variants:[{begin:`\\b-?0[xX][0-9a-fA-F]+[lL]?`},{begin:`\\b-?0[0-7]+[lL]?`},{begin:`\\b-?[0-9]+[lLfF]?`}],relevance:0},{className:`property`,begin:`\\s*[a-zA-Z_<][a-zA-Z0-9_<>]*\\s*->\\s*[a-zA-Z_<][a-zA-Z0-9_<>]*`,relevance:0}]}}i.default.registerLanguage(`smali`,e);let t=new T.LockFunction(()=>{function e(e,t=`java`){e.oldValue||=e.textContent,E.html(e,i.default.highlight(e.oldValue,{language:t}).value.replace(/\\n$/gi,``))}P(`em[onclick^=copycode]`).forEach(t=>{if(t.nextElementSibling&&typeof t.nextElementSibling.className==`string`&&t.nextElementSibling.className==`code-select-language`)return;let n=E.text(t.parentElement.querySelector(`div[id^=code]`)),r=i.default.highlightAuto(n).language;n.trim().startsWith(`invoke-`)&&(r=`smali`),r&&![`bash`,`css`,`javascript`,`json`,`java`,`kotlin`,`python`,`smali`,`typescript`].includes(r)&&(r=`plaintext`);let a=E.createElement(`select`,{className:`code-select-language`}),o=i.default.listLanguages().sort();o=o.concat(`自动检测`);let s=``;o.forEach(e=>{e.startsWith(`自动检测`)?s+=`<option data-value="${r}" selected="selected">${e}(${r})</option>`:s+=`<option data-value="${e}">${e}\</option>`}),E.html(a,s),E.on(a,`change`,()=>{let t=a.selectedOptions[0].getAttribute(`data-value`);O.info(`切换代码块语言: `,t),E.parent(a).querySelectorAll(`li`).forEach(n=>{e(n,t)})}),E.preventEvent(a,`click`),E.preventEvent(t,`click`),t.insertAdjacentElement(`afterend`,a),E.emit(a,`change`)}),P(`.blockcode`).forEach(e=>e.className=`hljs`)},this,500),n=T.mutationObserver(document,{config:{subtree:!0,childList:!0},callback:()=>{t.run()}});return[M(`
			.hljs{text-align:left}
			.hljs ol{margin:0 0 0 10px;padding:10px 10px}
			.hljs li{padding-left:10px;list-style-type:decimal-leading-zero;font-family:Monaco,Consolas,'Lucida Console','Courier New',serif;font-size:12px;line-height:1.8em}
			.hljs li:hover{background:#2c313c}
			.hljs li::marker{unicode-bidi:isolate;font-variant-numeric:tabular-nums;text-transform:none;text-indent:0!important;text-align:start!important;text-align-last:start!important}
			.hljs em[onclick^=copycode]{color:#fff;background:#246fff;margin:5px 10px;border-radius:3px;padding:0 5px;cursor:pointer;height:32px;line-height:32px;display:inline-flex}
			.hljs .code-select-language{height:32px;line-height:32px;font-size:14px;border:1px solid #5c5c5c;border-radius:5px;text-align:center;outline:0}
		`),()=>{n.disconnect()}]},optimizationImagePreview(){O.info(`图片查看优化`);let e=[{hostName:`avatar-bbs.mt2.cn`,pathName:`*`},{hostName:`cdn-bbs.mt2.cn`,pathName:`^(/static(/|//)image|/template)`},{hostName:window.location.hostname,pathName:`^(/static(/|//)image|/template)`},{hostName:window.location.hostname,pathName:`/uc_server/avatar.php`}];function t(e=[],t=0){let n=``;e.forEach(e=>{n+=`<li><img data-src="${e}"></li>`});let r=new a.default(E.createElement(`ul`,{innerHTML:n}),{inline:!1,url:`data-src`,zIndex:T.getMaxZIndex()+100,hidden:()=>{r.destroy()}});r.view(t),r.zoomTo(1),r.show()}function n(){P(`#postlist .comiis_vrx:not([data-isHandlingViewIMG])`).forEach(n=>{n.setAttribute(`data-isHandlingViewIMG`,`true`);let r=[];n.querySelectorAll(`img`).forEach(n=>{let i=n.getAttribute(`file`)||n.src;if(T.isNull(i))return;let a=new URL(i).hostname,o=new URL(i).pathname,s=n.parentElement;s.nodeName.toLowerCase()===`a`&&s.getAttribute(`href`)===i&&(s.setAttribute(`href`,`javascript:;`),s.removeAttribute(`target`));let c=!1;for(let t of e)if(a.indexOf(t.hostName)!=-1&&o.match(t.pathName)){c=!0;break}c||(r.push(i),n.removeAttribute(`onclick`),n.setAttribute(`onclick`,``),E.on(n,`click`,function(e){E.preventEvent(e),O.info(`点击图片`,n),t(r,r.findIndex(e=>e==i))},{capture:!0}))})})}let r=new T.LockFunction(()=>{n()}),i=T.mutationObserver(document,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{r.run()}});return[()=>{i.disconnect()}]},setAttachmentsClickTip(){O.info(`附件点击提醒`);function e(e){if(e.hasAttribute(`href`)){let t=e.hasAttribute(`id`)?e.id:e.parentElement.id,n=e.getAttribute(`href`),r=e.innerText;if(N(`#${t}_menu`).innerText.indexOf(`金币`)===-1)return;console.log(`发现附件`,e),console.log(`该附件是金币附件，拦截！`),e.setAttribute(`data-href`,n),e.style.setProperty(`cursor`,`pointer`),e.removeAttribute(`href`),e.innerText=`【已拦截】`+r,e.onclick=function(){D.confirm({title:{text:`提示`,position:`center`},content:{text:`<br />确定花费2金币下载附件 <a style="color: #507daf !important;">${r}</a> ？<br /><br />`,html:!0},btn:{ok:{callback:e=>{window.open(n,`_blank`),e.close()}}},width:`400px`,height:`200px`})}}}let t=T.mutationObserver(document.documentElement,{callback:()=>{P(`.attnm a`).forEach(t=>{e(t)}),P(`.comiis_attach a`).forEach(t=>{e(t)}),P(`span[id*=attach_] a`).forEach(t=>{e(t)})},immediate:!0,config:{childList:!0,subtree:!0}});return[()=>{t.disconnect()}]},async detectingUserOnlineStatus(){O.info(`探测用户在线状态`),G.onceExec(`mt-forum-post-detectingUserOnlineStatus`,()=>{M(`
				.gm-user-status-icon{
					border: 0 !important;
					float: right !important;
					display: block !important;
					width: 40px !important;
					height: 40px !important;
				}
			`)});function e(e){return E.createElement(`img`,{className:`gm-user-status-icon`,smilied:e?`1353`:`1384`,loading:`lazy`,src:e?`data:image/png;base64,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`:`data:image/png;base64,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`})}function t(t,n){let r=e(n);E.prepend(t,r)}let n=Array.from(P(`.pls.favatar:not([data-is-detectingUserOnlineStatus])`));for(let e=0;e<n.length;e++){let r=n[e],i=r.querySelector(`.comiis_o.cl a.kmfxx`);if(!i){O.error(`探测用户在线状态失败，未找到发消息按钮`);return}r.setAttribute(`data-is-detectingUserOnlineStatus`,`true`);let a=i.href,o=await j.get(a,{fetch:!0,allowInterceptConfig:!1});if(!o.status){O.error(`探测用户在线状态，中止网络请求探测`),t(r,!0);return}let s=E.toElement(o.data.responseText,!0,!0).querySelector(`.flb`);s?t(r,(E.text(s)?.trim()).endsWith(`……[离线]`)):t(r,!0)}},showUserLevel(){O.info(`显示用户等级`),P(`.pls.favatar:not([data-show-user-level])`).forEach(e=>{e.setAttribute(`data-show-user-level`,`true`);let t=`0级`,n=e.querySelector(`.tns tr`),r=e.querySelector(`p em`).innerText,i=document.createElement(`td`);switch(i.setAttribute(`style`,`border-left: 1px solid #e3e3e3;`),r){case`幼儿园`:case`初级工程师`:t=`1级`;break;case`小学生`:case`中级工程师`:t=`2级`;break;case`初中生`:case`高级工程师`:t=`3级`;break;case`高中生`:case`专家`:t=`4级`;break;case`大学生`:case`高级专家`:t=`5级`;break;case`硕士生`:case`资深专家`:t=`6级`;break;case`博士生`:case`实习版主`:case`版主`:case`审核员`:case`研究员`:t=`7级`;break;case`博士后`:case`超级版主`:case`网站编辑`:case`高级研究员`:case`荣誉开发者`:t=`8级`;break;case`管理员`:case`信息监察员`:case`资深研究员`:t=`9级`;break}E.html(i,`<p><a class="dj">${t}</a></p>Lv`),n.appendChild(i)})},hideBottomInfoBlock(){return O.info(`隐藏底部信息块`),M(`
			.pls .favatar>*:not([id^="userinfo"]+div){
				display: none;
			}
			.pls .favatar>div[id^="userinfo"],
			.pls .favatar>div.tns{
				display: block;
			}
			.t_f{
				min-height: 100px !important;
			}
		`)}},ve={init(){E.onReady(()=>{G.execMenuOnce(`mt-guide-beautifyPage`,()=>{this.beautifyPage()})})},beautifyPage(){O.info(`页面美化`),M(`
		.xst{font-size:15px}
		td.author_img{width:50px;padding:15px 0}
		td.author_img img{width:40px;height:40px;border-radius:50%}
		.list_author{margin-top:2px;color:#999;font-size:12px}
		.bankuai_tu_by a{color:#999!important}
		.bankuai_tu_by img{height:16px;margin:1px 1px 0 0;vertical-align:top}
		tbody a:hover{text-decoration:none;color:#3498db}
		.byg_th_align em+a{margin-right:5px}
	`),P(`.bm_c table tbody`).forEach(e=>{let t=e.querySelector(`th.common`),n=E.html(t),r=t.querySelectorAll(`a`)[0].getAttribute(`href`),i=e.querySelector(`td.by>cite>a`).getAttribute(`href`).match(/uid-(\d+)/)[1],a=`
			<td class="author_img">
				<a href="space-uid-${i}.html" c="1" mid="null">
					<img src="${q.getAvatar(i,`middle`)}">
				</a>
			</td>
			<th colspan="3" class="new byg_th">
				<div class="byg_th_align">
					<em>[${e.querySelector(`tr>td.by>a`).outerHTML}]</em>
					${n}
				</div>
				<div class="list_author cl">
					<span class="z">作者:&nbsp;
						${e.querySelectorAll(`td.by>cite>a`)[0].innerHTML}
						${e.querySelectorAll(`td.by>em>span`)[0].innerHTML}
					</span>
					<span class="z pipe">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
					<span class="z">最后发表:&nbsp;
						${e.querySelectorAll(`td.by>cite>a`)[1].innerHTML}&nbsp;&nbsp;&nbsp;
						${e.querySelectorAll(`td.by>em>a`)[0].innerHTML}
					</span>
					<span class="y bankuai_tu_by">
						<a href="${r}">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACOUlEQVRYR+1X0XETMRDdtfRP0gFUgG9O+iZUAKmApAJMBZgKMBUQKohTQcy3dHOmApIOzL/lZTbc3eh0ki/kfMkww37Zlkbv7e7bJxnhiQOfGB/+HQJlWR45594AwAkAvAWAo6B6GwBYAsBKCHGVZRl/743eCjDwbrd7T0SzCGgKYIOIi8lk8qWPyF4C1lrO9OtfAIeEuArnSimuTDSSBIqiOCMiBh8ciPghz/NF7KAogUOC16CIeJ7n+UVIokPAGHOCiNeD044cQESvtdYrf6lDwFq7BoCXIxFYa62zJIFKdJdjgHtnnvqibFXAWss9ejcygW9KqbNGGz6YtZbH5tnIBDZKqeMUAQrBieiT1noemYwfQgj2CXDO8Zw3uqkVb4yZI+LH8EylVFP55kNZllPnXLlvszFmhYiveI8/20VRzIjoM/9ORN+11mzXd2Gt7SQlhMiyLGOxty+j2OZ6dKq74Kfnikul1GkFwhXge4JjI4R4wRacGuloBVJsq0N5dqehJRPRnywQec0P1hKvNZXwF5ME/BKPKMQrpdSddjotGMOCw0RCS275QNXnmxFH8VYIMfWv6I4V+4oeoQ0tF+y0wBsdX9WH4tFywKgG6h+rVrDyD3UpRcGTFfAqMfhuqJ00Vca9T7IhbwN2RCnlrHa8xyJwyy9jIlqGD4+DEOCsAGAupbzZbrfP/UOllOu+F3CMxN4WeMb0CxFnsTfd0BHp08CcAaSUi4dkdx9yvX9M7nPIkD3/CfwGBboJMIftEqkAAAAASUVORK5CYII=" />${e.querySelectorAll(`td.num>a`)[0].innerText}
						</a>&nbsp;
					</span>
					<span class="y bankuai_tu_by" style="margin-right: 20px">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACVElEQVRYR+1W3W3bQAwmTb83GzSdoDnr7rn2BukETSeoO0HtCdpO0GSCeoPYzzrhnA3sDZJ3yywYSIIk352sOIBRIHwTxCM/kh9/EM4seGb/8Abg/8mAc+4yz/NPAHANAFcAcNnizwYA1gCwIKKVUkq+O6UzA4XjHwBw02mtqXBLRPMuIFEAaZrOEFGcv1gQcZYkyTxkwAvAOXex2+3uEVFSfbIw83o4HE6UUo9tYwcAnHNXeZ7/9dS4/nYrtUbE5zozs/BBuPE+gnZDRAKiwY0GgCMif0LEaZIktz5HWZbdMPMvAHjn++/LRAOAtVZY/DEQxRMRjZVSohOUIoPLGAhjjCoNVACstYL8W5AsiF/bkadpOiYiHo1Gq/q7IhN/Ijh/a62n8v8ZgBhCxPvIg63Wuup7D0+kvp/r2bHWSq2DnGDmiTFmWQJYIqIMmZBUiEUhYHyjtf5QGujKKAAstdYTtNYKe4X1QUHE70mSSImi2SqjEr0sy6bM/DNmV/TPD6CI6jVK0OBJVwmYeWWMGR9LwkZ9CxIuaiTbEtF1HxISkRL9k9tQMihs7tOGzDw3xsyqNqwxNzaIHotReswgkpa+CBDwQWtd7ZiDUZznuUQTmoayTKZa6zuf8WIACfODzotpWi0l3zKSw0NARBcLMzeWESJKO7ePlDrOh7bzgxKU2rKUOjIRa2/fP6/zIIDSwmscJHXC+ZAde5IJY7/0DPuOiGYnnWR1h3Ib7vf7MTOXR2mbI3KkrBFxMRgMFr7r50UZ6Bl1b/XOEvS22PPBG4CzZ+AfrntRcuAjU2wAAAAASUVORK5CYII=" />${e.querySelectorAll(`td.num>em`)[0].innerText}
					</span>
				</div>
			</th>
			`;E.html(e,a)})}},ye=function(e,t,n,r,i,a,o,s,c,l){let u={text:e,type:`button`,attributes:{},props:{},description:t,buttonIcon:r,buttonIsRightIcon:i,buttonIconIsLoading:a,buttonType:o,buttonText:n,callback(e){typeof s==`function`&&s(e)},afterAddToUListCallBack:c};return Reflect.set(u.attributes,L,()=>{u.disable=!!(typeof l==`function`?l():l)}),u},be=function(e,t,n,r,i,a=``,o,s){let c={text:e,type:`input`,inputType:`number`,attributes:{},props:{},description:r,placeholder:a,afterAddToUListCallBack:o,getValue(){return this.props[B].get(t,n)},callback(e,r,a){a??=Number(n),!(typeof i==`function`&&i(e,r,a))&&(this.props[B].set(t,r),typeof s==`function`&&s(e,r,a))}};return Reflect.set(c.attributes,R,t),Reflect.set(c.attributes,z,n),Q.initComponentsStorageApi(`input`,c,{get(e,t){return G.getValue(e,t)},set(e,t){G.setValue(e,t)}}),c},xe=function(e,t,n,r,i,a){let o={type:`own`,attributes:r||{},props:i||{},createLIElement:e,afterAddToUListCallBack:a};return typeof t==`object`&&t&&Object.keys(t).length>0?Reflect.set(o.attributes,de,t):Reflect.set(o.attributes,L,()=>!1),typeof n==`object`&&n&&Reflect.set(o.attributes,fe,n),o},Se=function(e,t,n,r,i,a,o){let s={text:e,type:`select`,description:a,attributes:{},props:{},getValue(){return this.props[B].get(t,n)},callback(e){if(e==null)return;let n=e.value;O.info(`选择：${e.text}`),!(typeof i==`function`&&i(e))&&(this.props[B].set(t,n),typeof o==`function`&&o(e))},data:r};return Reflect.set(s.attributes,R,t),Reflect.set(s.attributes,z,n),Q.initComponentsStorageApi(`select`,s,{get(e,t){return G.getValue(e,t)},set(e,t){G.setValue(e,t)}}),s},X=function(t,n,r=!1,i,a,o,s,c,l){if(l&&typeof l.defaultValue==`object`&&l.defaultValue!=null){let e=l.key??n;l.handler.add({key:e,name:t}),l.handler.shortCut.initConfig(e,l.defaultValue)}let u={text:t,type:`switch`,description:a,disabled:s,attributes:{},props:{},getValue(){return this.props[B].get(n,r)},callback(e,r){let a=!!r;O.success(`${a?`开启`:`关闭`} ${t}`),!(typeof i==`function`&&i(e,a))&&(this.props[B].set(n,a),typeof c==`function`&&c(e,a))},afterAddToUListCallBack:(...r)=>{if(o?.(...r),l){let i=l.handler.shortCut,a=l.key??n,[o,s]=r,c=s.target?.querySelector(`.pops-panel-item-left-main-text`);if(!c)return;let u=()=>{let e=l.handler.shortCut.getShowText(a,`暂未录入快捷键`),n=E.createElement(`div`,{className:`pops-switch-shortcut-wrapper`,innerHTML:`
              <i class="pops-bottom-icon" is-loading="false">
                <svg viewBox="0 0 1123 1024" xmlns="http://www.w3.org/2000/svg" data-type="keyboard">
                  <path d="M1014.122186 1024H109.753483A109.753483 109.753483 0 0 1 0 914.246517V392.917471a109.753483 109.753483 0 0 1 109.753483-109.753484h904.368703a109.753483 109.753483 0 0 1 109.753484 109.753484v521.329046a109.753483 109.753483 0 0 1-109.753484 109.753483zM109.753483 370.966774a21.950697 21.950697 0 0 0-21.950696 21.950697v521.329046a21.950697 21.950697 0 0 0 21.950696 21.950696h904.368703a21.950697 21.950697 0 0 0 21.950697-21.950696V392.917471a21.950697 21.950697 0 0 0-21.950697-21.950697z"></path>
                  <path d="M687.056806 891.198285H307.309753a43.901393 43.901393 0 0 1 0-87.802787h379.747053a43.901393 43.901393 0 0 1 0 87.802787zM175.605573 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM432.428725 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM947.172562 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 546.572347a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 803.395498a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 678.276527a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM948.270096 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394z"></path>
                  <path d="M881.320472 766.079314H689.251876a43.901393 43.901393 0 0 1 0-87.802787h192.068596a21.950697 21.950697 0 0 0 21.950696-21.950696v-65.85209a43.901393 43.901393 0 0 1 87.802787 0v65.85209a109.753483 109.753483 0 0 1-109.753483 109.753483zM305.114684 502.670954H175.605573a43.901393 43.901393 0 0 1 0-87.802787h129.509111a43.901393 43.901393 0 0 1 0 87.802787zM563.03537 365.4791a43.901393 43.901393 0 0 1-43.901394-43.901394v-105.363344A109.753483 109.753483 0 0 1 628.88746 106.460879h61.461951a21.950697 21.950697 0 0 0 21.950696-21.950697V43.901393a43.901393 43.901393 0 0 1 87.802787 0v40.608789a109.753483 109.753483 0 0 1-109.753483 109.753484h-61.461951a21.950697 21.950697 0 0 0-21.950697 21.950696v105.363344a43.901393 43.901393 0 0 1-43.901393 43.901394z"></path>
                </svg>
              </i>
            `},{style:`margin-right: 5px;display: inline-flex;`}),r=n.querySelector(`.pops-bottom-icon`);E.on(r,`click`,function(e){l.handler.shortCut.deleteOption(a),i.toolTip.offEvent(),i.toolTip.close(),i.toolTip.destory(),n.remove()},{once:!0});let i=D.tooltip({$target:r,content:()=>e,className:`github-tooltip`,isFixed:!0,only:!0});E.empty(c),E.append(c,n,t)};if(D.rightClickMenu({$target:c,only:!0,data:[{text:()=>l.handler.shortCut.hasOption(a)?`修改快捷键`:`添加快捷键`,icon:D.config.iconSVG.keyboard,callback(t,n,r,o){if(i.isWaitKeyboardPress()){e.default.warning(`请先执行当前的录入操作`);return}let s=e.default.loading(`请按下快捷键...`,{showClose:!0,onClose(){i.cancelEnterShortcutKeys()}});i.enterShortcutKeys(a).then(({status:t,option:n,key:r})=>{s.close(),t?(O.success(`录入快捷键`,n),e.default.success(`录入成功`),u()):e.default.error(`快捷键 ${i.translateKeyboardValueToButtonText(n)} 已被 ${r} 占用`)})}}]}),!i.hasOption(a))return;u()}}};return Reflect.set(u.attributes,R,n),Reflect.set(u.attributes,z,r),Q.initComponentsStorageApi(`switch`,u,{get(e,t){return G.getValue(e,t)},set(e,t){G.setValue(e,t)}}),u},Z=function(e,t,n,r,i,a=``,o,s){let c={text:e,type:`textarea`,attributes:{},props:{},description:r,placeholder:a,disabled:o,getValue(){let e=this.props[B].get(t,n);return Array.isArray(e)?e.join(`
`):e},callback(e,n){typeof i==`function`&&i(e,n)||(this.props[B].set(t,n),typeof s==`function`&&s(e,n))}};return Reflect.set(c.attributes,R,t),Reflect.set(c.attributes,z,n),Q.initComponentsStorageApi(`switch`,c,{get(e,t){return G.getValue(e,t)},set(e,t){G.setValue(e,t)}}),c},Q={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||=new r.default.Dictionary,this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t)},initComponentsStorageApi(e,t,n){let r;r=this.hasStorageApi(e)?this.getStorageApi(e):n,this.setComponentsStorageApiProperty(t,r)},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,B,t)}},Ce=function(e,t,n,r,i,a=``,o=`text`,s,c){let l={text:e,type:`input`,inputType:o,attributes:{},props:{},description:r,placeholder:a,afterAddToUListCallBack:s,getValue(){return this.props[B].get(t,n)},callback(e,n){let r=e.target.validity.valid;typeof i==`function`&&i(e,n,r)||(this.props[B].set(t,n),typeof c==`function`&&c(e,n,r))}};return Reflect.set(l.attributes,R,t),Reflect.set(l.attributes,z,n),Q.initComponentsStorageApi(`input`,l,{get(e,t){return G.getValue(e,t)},set(e,t){G.setValue(e,t)}}),l},we=class{option;constructor(e){this.option=e}async showView(){let e=D.confirm({title:{text:this.option.title,position:`center`},content:{text:`
        <form class="rule-form-container" onsubmit="return false">
            <ul class="rule-form-ulist"></ul>
            <input type="submit" style="display: none;" />
        </form>
        `,html:!0},btn:T.assign({ok:{callback:async()=>{await i()}}},this.option.btn||{},!0),drag:!0,mask:{enable:!0},style:`
      ${D.config.cssText.panelCSS}
      
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
      `,width:typeof this.option.width==`function`?this.option.width():window.innerWidth>500?`500px`:`88vw`,height:typeof this.option.height==`function`?this.option.height():window.innerHeight>500?`500px`:`80vh`}),t=e.$shadowRoot.querySelector(`.rule-form-container`);e.$shadowRoot.querySelector(`input[type=submit]`);let n=e.$shadowRoot.querySelector(`.rule-form-ulist`),r=await this.option.getView(await this.option.data());E.append(n,r);let i=async()=>{(await this.option.onsubmit(t,await this.option.data())).success&&(e.close(),typeof this.option.dialogCloseCallBack==`function`&&await this.option.dialogCloseCallBack(!0))};return e}},Te={$el:{isFilterElementHTML:[]},$key:{STORAGE_KEY:`mt-post-comment-filter-rule`},init(){if(this.registerMenu(),Y.isPost()){let e=this.getData();if(!e.enable)return;let t=new T.LockFunction(()=>{this.runFilter(e)});T.mutationObserver(document,{config:{subtree:!0,childList:!0},callback:()=>{t.run()}})}},registerMenu(){A.add({key:`comment-filter`,text:`⚙ 评论过滤器`,autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showView()}})},runFilter(e){let t=function(t){for(let n of e.userBlackList)if(n==t.userName||n==t.userUID)return O.success(`评论过滤器：黑名单用户`,t),!0;return!1},n=function(t){for(let n of e.userWhiteList)if(n===t.userName||n===t.userUID)return O.success(`评论过滤器：白名单用户`,t),!0;return!1};P(`.comiis_vrx`).forEach(r=>{if(r.querySelector(`.plc .pti .authi .show`))return;let i=r.querySelector(`.pls .authi a`),a={userName:i?.innerText||``,userUID:i?.href?.match(K.uid)?.[2]?.trim()||``,content:r.querySelector(`.plc td.t_f`)?.innerText?.trim()||``,isAuthor:!1};if(!n(a)){if(e.replyFlag&&r.querySelector(`.quote`)){let e=r.querySelector(`.quote`);this.$el.isFilterElementHTML.push(e.outerHTML),e.remove()}if(!(a.isAuthor&&!e.avatarFlag)){if(t(a)){this.$el.isFilterElementHTML.push(r.outerHTML),r.remove();return}if(!(typeof e.minLength==`number`&&e.minLength>a.content.length)&&!(typeof e.keywordLength==`number`&&e.keywordLength<a.content.length))for(let t of e.keywords){if(typeof t!=`string`)continue;let e=new RegExp(t);if(a.content.match(e)){console.log(`评论过滤器：`,a),this.$el.isFilterElementHTML.push(r.outerHTML),r.remove();return}}}}})},showView(){let e=this,t=function(t){return{get(t,n){let r=e.getData(),i=Reflect.get(r,t,n);return(t===`keywords`||t===`userWhiteList`||t===`userBlackList`)&&(i=i.join(`
`)),i},set(n,r){(n===`keywords`||n===`userWhiteList`||n===`userBlackList`)&&(r=r.split(`
`).filter(e=>e.trim()!=``)),Reflect.set(t,n,r),e.setData(t)}}},n=D.fn.PanelHandlerComponents();new we({title:`评论过滤器`,data:()=>this.getData(),getView:e=>{let r=document.createDocumentFragment(),i=X(`启用`,`enable`,!0);Reflect.set(i.props,B,t(e));let a=n.createSectionContainerItem_switch(i).$el,o=X(`处理回复引用`,`replyFlag`,!1,void 0,`移除引用`);Reflect.set(o.props,B,t(e));let s=n.createSectionContainerItem_switch(o).$el,c=X(`处理作者评论`,`avatarFlag`,!1);Reflect.set(c.props,B,t(e));let l=n.createSectionContainerItem_switch(c).$el,u=X(`处理从"搜索页面"或"我的帖子提醒页面"进入的网站`,`viewthreadFlag`,!1);Reflect.set(u.props,B,t(e));let d=n.createSectionContainerItem_switch(u).$el,f=be(`匹配的评论内容长度最小值`,`minLength`,5,`小于此长度的评论就算关键字匹配成功了也不会被排除`);Reflect.set(f.props,B,t(e));let p=n.createSectionContainerItem_input(f).$el,m=be(`匹配的评论内容长度最大值`,`keywordLength`,8,`大于此长度的评论就算关键字匹配成功了也不会被排除`);Reflect.set(m.props,B,t(e));let h=n.createSectionContainerItem_input(m).$el,g=Z(`评论关键字`,`keywords`,``,`多个评论关键字换行分割`,void 0);Reflect.set(g.props,B,t(e));let ee=n.createSectionContainerItem_textarea(g).$el,_=Z(`黑名单用户`,`userBlackList`,``,`多个用户换行分割`,void 0);Reflect.set(_.props,B,t(e));let te=n.createSectionContainerItem_textarea(_).$el,v=Z(`白名单用户`,`userWhiteList`,``,`多个用户换行分割`,void 0);Reflect.set(v.props,B,t(e));let y=n.createSectionContainerItem_textarea(v).$el;return r.append(a,s,l,d,p,h,ee,te,y),r},btn:{merge:!0,position:`space-between`,ok:{enable:!1},cancel:{enable:!0,text:`关闭`},other:{enable:!0,text:`查看已过滤（${this.$el.isFilterElementHTML.length}）`,type:`primary`,callback:(e,t)=>{D.alert({title:{text:`评论过滤器-已过滤`,position:`center`},content:{text:`
                ${Array.from(P(`link[rel="stylesheet"]`)).map(e=>e.outerHTML).join(`
`)}

                ${this.$el.isFilterElementHTML.join(`
`)}
                `,html:!0},style:`
							.plhin{
								width: 100%;
							}
							td.plc .pi{
								height: auto;
							}
							`,width:`88vw`,height:`80vh`})}}},dialogCloseCallBack(e){},onsubmit:(e,t)=>({success:!0,data:t}),style:`
      .pops-panel-item-left-desc-text{
          line-height: normal;
          margin-top: 6px;
          font-size: 0.8em;
          color: rgb(108, 108, 108);
      }
      .pops-panel-item-left-main-text{
          max-width: unset;
      }
      .pops-panel-textarea textarea{
          height: 150px;
      }
      `}).showView()},getTemplateData(){return{enable:!0,avatarFlag:!1,replyFlag:!1,viewthreadFlag:!1,minLength:5,keywordLength:8,keywords:[],userBlackList:[],userWhiteList:[]}},getData(){return v(this.$key.STORAGE_KEY,this.getTemplateData())},setData(e){x(this.$key.STORAGE_KEY,e)}},Ee=class{option;constructor(e){this.option=e}async showView(t){let n=D.confirm({title:{text:this.option.title,position:`center`},content:{text:`
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
      ${D.config.cssText.panelCSS}

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
      `,btn:{merge:!0,reverse:!1,position:`space-between`,ok:{enable:this.option?.bottomControls?.add?.enable||!0,type:`primary`,text:`添加`,callback:async()=>{this.showEditView(!1,await this.option.getAddData(),n.$shadowRoot)}},close:{enable:!0,callback(){n.close()}},cancel:{enable:!1},other:{enable:this.option?.bottomControls?.clear?.enable||!0,type:`xiaomi-primary`,text:`清空所有(${(await this.option.data()).length})`,callback:()=>{let t=D.confirm({title:{text:`提示`,position:`center`},content:{text:`确定清空所有的数据？`,html:!1},btn:{ok:{enable:!0,callback:async()=>{if(O.success(`清空所有`),typeof this.option?.bottomControls?.clear?.callback==`function`&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){e.default.error(`清理失败`);return}else e.default.success(`清理成功`);await this.updateDeleteAllBtnText(n.$shadowRoot),this.clearContent(n.$shadowRoot),t.close()}},cancel:{text:`取消`,enable:!0}},mask:{enable:!0},width:`300px`,height:`200px`})}}},mask:{enable:!0},width:window.innerWidth>500?`500px`:`88vw`,height:window.innerHeight>500?`500px`:`80vh`}),{$searchContainer:r,$externalSelect:i,$ruleValueSelect:a,$searchInput:o}=this.parseViewElement(n.$shadowRoot);if(this.option.bottomControls?.filter?.enable){let e=null,r=null;Array.isArray(this.option.bottomControls?.filter?.option)&&E.append(i,this.option.bottomControls?.filter?.option.map(e=>{let t=E.createElement(`option`,{innerText:e.name});return Reflect.set(t,`data-value`,e),t})),Array.isArray(this.option.bottomControls?.filter?.inputOption)&&E.append(a,this.option.bottomControls?.filter?.inputOption.map(e=>{let t=E.createElement(`option`,{innerText:e.name});return Reflect.set(t,`data-value`,e),t})),E.on(i,`change`,async()=>{let t=i[i.selectedIndex],n=Reflect.get(t,`data-value`);typeof n?.selectedCallBack==`function`&&n.selectedCallBack(n),e=n,await c(!1)}),E.on(a,`change`,async()=>{let e=a[a.selectedIndex],t=Reflect.get(e,`data-value`);typeof t?.selectedCallBack==`function`&&t.selectedCallBack(t),r=t,await c(!1)}),E.onInput(o,T.debounce(async()=>{await c(!1)}));let s=()=>{let t=i[i.selectedIndex];e=Reflect.get(t,`data-value`);let n=a[a.selectedIndex];r=Reflect.get(n,`data-value`)},c=async i=>{this.clearContent(n.$shadowRoot),i&&s();let a=await this.option.data(),c=[],l=E.val(o);for(let n=0;n<a.length;n++){let i=a[n];if(typeof t==`function`){let e=await t(i);if(typeof e==`boolean`&&!e)continue}if(e){let t=await e?.filterCallBack?.(i);if(typeof t==`boolean`&&!t)continue}if(r){let e=!0;if(e=l===``,e||=await r?.filterCallBack?.(i,l),!e)continue}c.push(i)}await this.appendRuleItemElement(n.$shadowRoot,c)};if(typeof t==`object`&&t){let e;e=typeof t.external==`number`?t.external:Array.from(i.options).findIndex(e=>Reflect.get(e,`data-value`).value===t.external),e!==-1&&(i.selectedIndex=e);let n;n=typeof t.rule==`number`?t.rule:Array.from(a.options).findIndex(e=>Reflect.get(e,`data-value`).value===t.rule),n!==-1&&(a.selectedIndex=n)}await c(!0)}else E.hide(r,!1)}showEditView(t,n,r,i,a,o){let s=async e=>{e?typeof o==`function`&&o(await this.option.getData(n)):(t||await this.option.deleteData(n),typeof a==`function`&&a(await this.option.getData(n)))};new we({title:t?`编辑`:`添加`,data:()=>n,dialogCloseCallBack:s,getView:async e=>await this.option.itemControls.edit.getView(e,t),btn:{ok:{enable:!0,text:t?`修改`:`添加`},cancel:{callback:async e=>{e.close(),await s(!1)}},close:{callback:async e=>{e.close(),await s(!1)}}},onsubmit:async(n,a)=>{let o=await this.option.itemControls.edit.onsubmit(n,t,a);return o.success?t?(e.default.success(`修改成功`),r&&await this.updateRuleItemElement(o.data,i,r)):r&&await this.appendRuleItemElement(r,o.data):t&&O.error(`修改失败`),o},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView()}parseViewElement(e){let t=e.querySelector(`.rule-view-container`),n=e.querySelector(`.pops-confirm-btn button.pops-confirm-btn-other`),r=e.querySelector(`.rule-view-search-container`);return{$container:t,$deleteBtn:n,$searchContainer:r,$externalSelect:r.querySelector(`.pops-panel-select .select-rule-status`),$ruleValueSelect:r.querySelector(`.pops-panel-select .select-rule-value`),$searchInput:r.querySelector(`.pops-panel-input input`)}}parseRuleItemElement(e){let t=e.querySelector(`.rule-controls-enable`);return{$enable:t,$enableSwitch:t.querySelector(`.pops-panel-switch`),$enableSwitchInput:t.querySelector(`.pops-panel-switch__input`),$enableSwitchCore:t.querySelector(`.pops-panel-switch__core`),$edit:e.querySelector(`.rule-controls-edit`),$delete:e.querySelector(`.rule-controls-delete`),data:Reflect.get(e,`data-rule`)}}async createRuleItemElement(t,n){let r=await this.option.getDataItemName(t),i=E.createElement(`div`,{className:`rule-item`,innerHTML:`
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
					${D.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${D.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(i,`data-rule`,t);let a=`pops-panel-switch-is-checked`,{$enable:o,$enableSwitch:s,$enableSwitchCore:c,$enableSwitchInput:l,$delete:u,$edit:d}=this.parseRuleItemElement(i);return this.option.itemControls.enable.enable?(E.on(c,`click`,async()=>{let e=!1;s.classList.contains(a)?(s.classList.remove(a),e=!1):(s.classList.add(a),e=!0),l.checked=e,await this.option.itemControls.enable.callback(t,e)}),await this.option.itemControls.enable.getEnable(t)&&s.classList.add(a)):o.remove(),this.option.itemControls.edit.enable?E.on(d,`click`,e=>{E.preventEvent(e),this.showEditView(!0,t,n,i,e=>{t=null,t=e})}):d.remove(),this.option.itemControls.delete.enable?E.on(u,`click`,r=>{E.preventEvent(r);let a=D.confirm({title:{text:`提示`,position:`center`},content:{text:`确定删除该条数据？`,html:!1},btn:{ok:{enable:!0,callback:async()=>{O.success(`删除数据`),await this.option.itemControls.delete.deleteCallBack(t)?(e.default.success(`成功删除该数据`),i.remove(),await this.updateDeleteAllBtnText(n),a.close()):e.default.error(`删除该数据失败`)}},cancel:{text:`取消`,enable:!0}},mask:{enable:!0},width:`300px`,height:`200px`})}):u.remove(),i}async appendRuleItemElement(e,t){let{$container:n}=this.parseViewElement(e),r=[],i=Array.isArray(t)?t:[t];for(let t=0;t<i.length;t++){let n=i[t],a=await this.createRuleItemElement(n,e);r.push(a)}return E.append(n,r),await this.updateDeleteAllBtnText(e),r}async updateRuleContaienrElement(e){this.clearContent(e);let t=await this.option.data();await this.appendRuleItemElement(e,t),await this.updateDeleteAllBtnText(e)}async updateRuleItemElement(e,t,n){let r=await this.createRuleItemElement(e,n);t.after(r),t.remove()}clearContent(e){let{$container:t}=this.parseViewElement(e);E.html(t,``)}setDeleteBtnText(e,t,n=!1){let{$deleteBtn:r}=this.parseViewElement(e);n?E.html(r,t):E.text(r,t)}async updateDeleteAllBtnText(e){let t=await this.option.data();this.setDeleteBtnText(e,`清空所有(${t.length})`)}},De={$key:{STORAGE_KEY:`mt-productListingReminder-rule`},init(){this.registerMenu(),this.runRule()},registerMenu(){A.add({key:`product-reminder`,text:`⚙ 商品上架提醒`,autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showView()}})},async runRule(){async function t(){let t=await j.get(`/keke_integralmall-keke_integralmall.html`,{allowInterceptConfig:!1,headers:{"User-Agent":T.getRandomAndroidUA()}});if(!t.status){e.default.error(`【积分商城】获取数据失败`);return}let n=[];return E.toElement(t.data.responseText,!0,!0).querySelectorAll(`.task-list-wrapper li.col-xs-12`).forEach(e=>{n.push({name:E.text(e.querySelector(`.mall-info a > *:first-child`))||E.text(e.querySelector(`.mall-info a`)),price:E.text(e.querySelector(`.mall-info span.discount-price i`)),endTime:E.text(e.querySelector(`.mall-info #time_hz span.time`)),remainingQuantity:parseInt(e.querySelector(`.mall-info .mall-count .count-r`)?.innerText?.replace(/仅剩|件/gi,``)||`0`)})}),n}if(Y.isPointsMall())return;let n=this.getData();if(!n.length)return;let r=await t();if(r){for(let t of r)for(let r of n)if(r.enable&&t.name.match(new RegExp(r.productName,`i`))&&!isNaN(t.remainingQuantity)&&t.remainingQuantity>0){O.success(`成功匹配对应商品`,r,t),D.confirm({title:{text:`积分商城提醒`,position:`center`},content:{text:`<br />
                            您设置的商品已上架在积分商城中，当前售价 ${t.price}金币，仅剩${t.remainingQuantity}件，是否前往购买？
                            <a style="color: red !important;">(如需关闭提醒，请删除该关键字)</a>
                            <br />`,html:!0},btn:{merge:!0,position:`space-between`,other:{enable:!0,type:`danger`,text:`删除提醒`,callback:()=>{this.deleteData(r)?e.default.success(`删除成功`):e.default.error(`删除失败`)}},ok:{text:`前往购买`,callback:()=>{window.location.href=`${window.location.origin}/keke_integralmall-keke_integralmall.html`}}},width:`300px`,height:`300px`});return}}},getTemplateData(){return{uuid:T.generateUUID(),enable:!0,name:``,productName:``}},showView(){let t=D.fn.PanelHandlerComponents();function n(e){return{get(t,n){return e[t]??n},set(t,n){e[t]=n}}}new Ee({title:`商品上架提醒`,data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:e=>e.name,updateData:e=>this.updateData(e),deleteData:e=>this.deleteData(e),getData:e=>this.getData().find(t=>t.uuid===e.uuid)??e,itemControls:{enable:{enable:!0,getEnable(e){return e.enable},callback:(e,t)=>{e.enable=t,this.updateData(e)}},edit:{enable:!0,getView:(e,r)=>{let i=document.createDocumentFragment();r||(e=this.getTemplateData());let a=X(`启用`,`enable`,!0);Reflect.set(a.props,B,n(e));let o=t.createSectionContainerItem_switch(a).$el,s=Ce(`规则名称`,`name`,``,``,void 0,`必填`);Reflect.set(s.props,B,n(e));let c=t.createSectionContainerItem_input(s).$el,l=Ce(`商品名`,`productName`,``,``,void 0,`可正则，需手动转义`);Reflect.set(l.props,B,n(e));let u=t.createSectionContainerItem_input(l).$el;return i.append(o,c,u),i},onsubmit:(n,r,i)=>{let a=n.querySelectorAll(`.rule-form-ulist > li`),o=this.getTemplateData();return r&&(o.uuid=i.uuid),a.forEach(e=>{let n=Reflect.get(e,t.$data.nodeStoreConfigKey),r=Reflect.get(n,`attributes`),i=Reflect.get(e,B),a=Reflect.get(r,R),s=Reflect.get(r,z),c=i.get(a,s);Reflect.has(o,a)?Reflect.set(o,a,c):O.error(`${a}不在数据中`)}),o.name.trim()===``?(e.default.error(`规则名称不能为空`),{success:!1,data:o}):r?{success:this.updateData(o),data:o}:{success:this.addData(o),data:o}}},delete:{enable:!0,deleteCallBack:e=>this.deleteData(e)}},bottomControls:{filter:{enable:!0,option:[{name:`无`,value:``,filterCallBack(e){return!0}},{name:`启用`,value:`enable`,filterCallBack(e){return e.enable}},{name:`未启用`,value:`notEnable`,filterCallBack(e){return!e.enable}}],inputOption:[{name:`规则名`,value:`name`,filterCallBack(e,t){return!!e.name.match(t)}},{name:`商品名`,value:`productName`,filterCallBack(e,t){return!!e.productName.match(t)}}]}}}).showView()},getData(){return v(this.$key.STORAGE_KEY,[])},setData(e){x(this.$key.STORAGE_KEY,e)},addData(e){let t=this.getData();return t.findIndex(t=>t.uuid==e.uuid)===-1?(t.push(e),x(this.$key.STORAGE_KEY,t),!0):!1},updateData(e){let t=this.getData(),n=t.findIndex(t=>t.uuid==e.uuid),r=!1;return n!==-1&&(r=!0,t[n]=e),this.setData(t),r},deleteData(e){let t=this.getData(),n=t.findIndex(t=>t.uuid==e.uuid),r=!1;return n!==-1&&(r=!0,t.splice(n,1)),this.setData(t),r},clearData(){_(this.$key.STORAGE_KEY)}},Oe=`.pops-confirm-content {
  display: flex;
  flex-direction: column;
}
.blackhome-user-filter input {
  width: -moz-available;
  width: -webkit-fill-available;
  height: 30px;
  margin: 8px 20px;
  border: 0;
  border-bottom: 1px solid;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.blackhome-user-filter input:focus-within {
  outline: none;
}
.blackhome-user-list {
  flex: 1;
  overflow-y: auto;
}
.blackhome-user-list .blackhome-user-item {
  margin: 15px 10px;
  padding: 10px;
  border-radius: 8px;
  box-shadow:
    0 0 0.6rem #c8d0e7,
    -0.2rem -0.2rem 0.5rem #fff;
}
.blackhome-user {
  display: flex;
}
.blackhome-user img {
  width: 45px;
  height: 45px;
  border-radius: 45px;
}
.blackhome-user-info {
  margin-left: 10px;
}
.blackhome-user-info p:nth-child(1) {
  margin-bottom: 5px;
}
.blackhome-user-info p:nth-child(2) {
  font-size: 14px;
}
.blackhome-user-action {
  display: flex;
  margin: 10px 0;
}
.blackhome-user-action p:nth-child(1),
.blackhome-user-action p:nth-child(2) {
  border: 1px solid red;
  color: red;
  border-radius: 4px;
  padding: 2px 4px;
  font-weight: 500;
  font-size: 14px;
  place-self: center;
}
.blackhome-user-action p:nth-child(2) {
  border: 1px solid #ff4b4b;
  color: #ff4b4b;
  margin-left: 8px;
}
.blackhome-user-uuid {
  border: 1px solid #ff7600;
  color: #ff7600;
  border-radius: 4px;
  padding: 2px 4px;
  font-weight: 500;
  font-size: 14px;
  width: fit-content;
  width: -moz-fit-content;
  margin: 10px 0;
}
.blackhome-operator {
  padding: 10px;
  background-color: #efefef;
  border-radius: 6px;
}
.blackhome-operator-user {
  display: flex;
}
.blackhome-operator-user img {
  width: 35px;
  height: 35px;
  border-radius: 35px;
}
.blackhome-operator-user p {
  align-self: center;
  margin-left: 10px;
}
.blackhome-operator-user-info {
  margin: 10px 0;
  font-weight: 500;
}

@media screen and (min-width: 800px) {
  .blackhome-user-list {
    display: flex;
    flex-wrap: wrap;
  }
  .blackhome-user-list .blackhome-user-item {
    flex: 1 1 250px;
    max-width: calc(50% - 10px - 10px);
  }
}
`,ke={$data:{cid:``},init(){this.registerMenu()},registerMenu(){A.add({key:`black-home`,text:`⚙ 小黑屋`,autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showBlackHome()}})},async showBlackHome(){let t=e.default.loading(`正在获取小黑屋名单中...`),n=await this.getBlackListInfo(``);if(t.close(),!n)return;if(n.data.length===0){e.default.error(`获取小黑屋名单为空`);return}this.$data.cid=n.next_cid;let r=D.confirm({title:{text:`小黑屋名单`,position:`center`},content:{text:`
                <div class="blackhome-user-filter">
                    <input placeholder="过滤用户名/操作人员/UID(可正则)">
                </div>
                <div class="blackhome-user-list"></div>
                `,html:!0},btn:{ok:{text:`下一页`,callback:async()=>{let t=e.default.loading(`正在获取小黑屋名单中...`);O.info(`下一页的cid: `,this.$data.cid);let n=await this.getBlackListInfo(this.$data.cid);t.close(),n&&(this.$data.cid=n.next_cid,n.data.forEach(e=>{let t=this.createListViewItem(e);i.appendChild(t)}),n.data.length===0?e.default.error(`获取小黑屋名单为空`):e.default.success(`成功获取 ${n.data.length}条数据`),E.emit(a,`input`))}},cancel:{text:`关闭`}},width:H.settingBig.width,height:H.settingBig.height,style:Oe}),i=r.$shadowRoot.querySelector(`.blackhome-user-list`),a=r.$shadowRoot.querySelector(`.blackhome-user-filter input`);n.data.forEach(e=>{let t=this.createListViewItem(e);i.appendChild(t)}),e.default.success(`成功获取 ${n.data.length}条数据`);let o=!1;E.on(a,[`input`,`propertychange`],T.debounce(()=>{let e=a.value.trim();if(!o){if(o=!0,e==``){r.$shadowRoot.querySelectorAll(`.blackhome-user-item`).forEach(e=>{e.removeAttribute(`style`)}),o=!1;return}r.$shadowRoot.querySelectorAll(`.blackhome-user-item`).forEach(t=>{t.getAttribute(`data-name`).match(new RegExp(e,`ig`))||t.getAttribute(`data-uid`).trim().match(new RegExp(e,`ig`))||t.getAttribute(`data-operator`).match(new RegExp(e,`ig`))?t.removeAttribute(`style`):t.setAttribute(`style`,`display:none;`)}),o=!1}}));let s=await this.getBlackListInfo(this.$data.cid);s&&(this.$data.cid=s.next_cid)},async getBlackListInfo(e=``){let t={mod:`misc`,action:`showdarkroom`,cid:e,ajaxdata:`json`},n=await j.get(`/forum.php?${T.toSearchParamsStr(t)}`,{headers:{"User-Agent":T.getRandomPCUA()},responseType:`json`});if(!n.status)return;let r=T.toJSON(n.data.responseText),i=r.message.split(`|`),a=i[i.length-1],o=T.parseObjectToArray(r.data),s=[],c=[];return o.forEach(e=>{let t=e.dateline.match(/([0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]*[0-9]{1,2}:[0-9]{1,2})/g);if(t==null){let t=parseInt((Date.now()/1e3).toString()),n=0,r=e.dateline.match(/([0-9]+|半)[\s\S]*秒前/),i=e.dateline.match(/([0-9]+|半)[\s\S]*分钟前/),a=e.dateline.match(/([0-9]+|半)[\s\S]*小时前/),o=e.dateline.match(/昨天[\s\S]*(\d{2}):(\d{2})/),c=e.dateline.match(/前天[\s\S]*(\d{2}):(\d{2})/),l=e.dateline.match(/([0-9]+|半)[\s\S]*天前/);if(r)r=r[r.length-1],r=r.replace(/半/g,.5),r=parseFloat(r),n=t-r;else if(i)i=i[i.length-1],i=i.replace(/半/g,.5),i=parseFloat(i),n=t-i*60;else if(a)a=a[a.length-1],a=a.replace(/半/g,.5),a=parseFloat(a),n=t-a*60*60;else if(o){let e=o[1],r=o[2];n=t-86400-parseInt(e)*3600-parseInt(r)*60}else if(c){let e=c[1],r=c[2];n=t-86400*2-parseInt(e)*3600-parseInt(r)*60}else l&&(l=l[l.length-1],l=l.replace(/半/g,.5),l=parseFloat(l),n=t-l*60*60*24);e.time=parseInt(n.toString())*1e3,s=s.concat(e);return}else t=t[0];e.time=T.formatToTimeStamp(t),s=s.concat(e)}),T.sortListByProperty(s,`time`),T.sortListByProperty(c,`time`,!1),s=s.concat(c),{next_cid:a,data:s}},createListViewItem(e){let t=E.createElement(`div`,{className:`blackhome-user-item`,innerHTML:`
                <div class="blackhome-user-avatar">
                    <div class="blackhome-user">
                    <img src="${q.getAvatar(e.uid,`big`)}" loading="lazy">
                    <div class="blackhome-user-info">
                        <p>${e.username}</p>
                        <p>${e.dateline}</p>
                    </div>
                    </div>
                    <div class="blackhome-user-action">
                    <p>${e.action}</p>
                    <p>到期: ${e.groupexpiry}</p>
                    </div>
                    <div class="blackhome-user-uuid">UID: ${e.uid}</div>
                    <div class="blackhome-operator">
                    <div class="blackhome-operator-user">
                        <img loading="lazy" src="${q.getAvatar(e.operatorid,`big`)}">
                        <p>${e.operator}</p>
                    </div>
                    <div class="blackhome-operator-user-info">
                    ${e.reason}
                    </div>
                    </div>
                </div>
                `},{"data-name":e.username,"data-uid":e.uid,"data-operator":e.operator,"data-operator-uid":e.operatorid});return E.on(t,`click`,`.blackhome-user img`,function(){window.open(`home.php?mod=space&uid=${e.uid}&do=profile`,`_blank`)}),E.on(t,`click`,`.blackhome-operator-user img`,function(){window.open(`home.php?mod=space&uid=${e.operatorid}&do=profile`,`_blank`)}),t}},Ae=`.pops-alert-content {
  display: flex;
  flex-direction: column;
}
.pops-alert-content > .online-user-info {
  text-align: center;
  padding: 0px 6px;
}
.online-user-filter input {
  width: -webkit-fill-available;
  width: -moz-available;
  height: 30px;
  margin: 8px 20px;
  border: 0;
  border-bottom: 1px solid;
}
.online-user-filter input:focus-within {
  outline: none;
}
.online-user-list {
  flex: 1;
  overflow-y: auto;
}
.online-user-list li {
  margin: 18px 0;
}
.online-user {
  display: flex;
  margin: 2px 20px;
  align-items: center;
}
.online-user img[data-avatar] {
  width: 45px;
  height: 45px;
  border-radius: 45px;
}
.online-user-list .online-user-info {
  margin: 2px 14px;
}
.online-user-list .online-user-info p[data-name] {
  margin-bottom: 4px;
}
.online-user-list .online-user-info span[data-sf] {
  border-radius: 4px;
  padding: 2px 4px;
  font-weight: 500;
  font-size: 14px;
}
.online-user-list .online-user-info span[data-uid] {
  border: 1px solid #ff7600;
  color: #ff7600;
  border-radius: 4px;
  padding: 2px 4px;
  font-weight: 500;
  font-size: 14px;
  width: fit-content;
  width: -moz-fit-content;
  margin: 10px 0;
}
.online-user-list .online-user-info span[data-sf="会员"] {
  color: #88b500;
  border: 1px solid #88b500;
}
.online-user-list .online-user-info span[data-sf="版主"] {
  color: #2db5e3;
  border: 1px solid #2db5e3;
}
.online-user-list .online-user-info span[data-sf="超级版主"] {
  color: #e89e38;
  border: 1px solid #e89e38;
}
.online-user-list .online-user-info span[data-sf="管理员"] {
  color: #ff5416;
  border: 1px solid #ff5416;
}

@media screen and (min-width: 800px) {
  .online-user-list {
    display: flex;
    flex-wrap: wrap;
  }
  .online-user-list .online-item {
    flex: 1 1 250px;
  }
}
`,je={$data:{},init(){this.registerMenu()},registerMenu(){A.add({key:`online-user`,text:`⚙ 在线用户`,autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showOnlineUser()}})},async showOnlineUser(){let n=e.default.loading(`正在获取在线用户名单中...`),r=await this.getOnlineUserListInfo();if(n.close(),!r)return;let i=D.alert({title:{text:`在线用户`,position:`center`},content:{text:`
                <div class="online-user-info">${r.totalOnline} 人在线 - ${r.onlineUser} 会员${r.invisibleUser==0?``:`(${r.invisibleUser}隐身)`} - ${r.noRegisterUser} 位游客</div>
                <div class="online-user-filter">
                    <input placeholder="过滤用户名/身份/UID(可正则)"></div>
                <div class="online-user-list"></div>
                `,html:!0},btn:{ok:{text:`关闭`,type:`default`}},width:H.settingBig.width,height:H.settingBig.height,style:Ae}),a=i.$shadowRoot.querySelector(`.online-user-list`),o=i.$shadowRoot.querySelector(`.online-user-filter input`);r.data.forEach(e=>{let t=this.createListViewItem(e);a.appendChild(t)}),e.default.success(`成功获取 ${r.data.length}条数据`);let s=!1;t.default.on(o,[`propertychange`,`input`],T.debounce(()=>{let e=o.value.trim();if(!s){if(s=!0,e==``){i.$shadowRoot.querySelectorAll(`.online-user-list .online-item`).forEach(e=>{e.removeAttribute(`style`)}),s=!1;return}i.$shadowRoot.querySelectorAll(`.online-user-list .online-item`).forEach(t=>{t.getAttribute(`data-name`).match(new RegExp(e,`ig`))||t.getAttribute(`data-sf`).match(new RegExp(e,`ig`))||t.getAttribute(`data-uid`).match(new RegExp(e,`ig`))?t.removeAttribute(`style`):t.setAttribute(`style`,`display:none;`)}),s=!1}}))},async getOnlineUserListInfo(){let e=await j.get(`/forum.php?${T.toSearchParamsStr({showoldetails:`yes`})}`,{headers:{"User-Agent":T.getRandomPCUA()}});if(!e.status)return;let t=T.parseFromString(e.data.responseText,`text/html`),n={data:[],totalOnline:0,onlineUser:0,noRegisterUser:0,invisibleUser:0};t.querySelectorAll(`#onlinelist ul li`).forEach(e=>{let t=e.querySelector(`a`).getAttribute(`href`).match(`uid-(.+?).html`)[1],r=q.getAvatar(t,`middle`),i=e.querySelector(`a`).innerText,a=``,o=e.querySelector(`a`).getAttribute(`href`),s=e.querySelector(`img`).src;a=s.indexOf(`online_member`)==-1?s.indexOf(`online_moderator`)==-1?s.indexOf(`online_supermod`)==-1?s.indexOf(`online_admin`)==-1?`未知身份`:`管理员`:`超级版主`:`版主`:`会员`,n.data.push({uid:t,avatar:r,name:i,sf:a,space:o})});let r=t.querySelector(`#online div.bm_h span.xs1`).textContent;return n.totalOnline=T.parseInt(r.match(/([0-9]*)\s*人在线/i),0),n.onlineUser=T.parseInt(r.match(/([0-9]*)\s*会员/i),0),n.noRegisterUser=T.parseInt(r.match(/([0-9]*)\s*位游客/i),0),n.invisibleUser=T.parseInt(r.match(/([0-9]*)\s*隐身/i),0),n},createListViewItem(e){let n=t.default.createElement(`div`,{className:`online-item`,innerHTML:`
                <div class="online-user">
                    <img data-avatar src="${e.avatar}" loading="lazy" class="online-user-avatar">
                    <div class="online-user-info">
                        <p data-name>${e.name}</p>
                        <span data-sf="${e.sf}">${e.sf}</span>
                        <span data-uid>UID: ${e.uid}</span>
                    </div>
                </div>
            `},{"data-name":e.name,"data-uid":e.uid,"data-sf":e.sf});return t.default.on(n,`click`,`.online-user-avatar`,n=>{t.default.preventEvent(n),window.open(`home.php?mod=space&uid=${e.uid}&do=profile`,`_blank`)}),n}},Me={$flag:{showUserUID_initCSS:!1},init(){G.onceExec(`mt-MTCommentFilter`,()=>{Te.init()}),Y.isPost()?(O.info(`Router: 帖子`),_e.init()):Y.isGuide()?(O.info(`Router: 导读`),ve.init()):O.error(`Router: 未适配的链接 ==> `+window.location.href),E.onReady(()=>{G.onceExec(`mt-MTProductListingReminder`,()=>{De.init()}),G.onceExec(`mt-blackHome`,()=>{ke.init()}),G.onceExec(`mt-onlineUser`,()=>{je.init()}),G.execMenuOnce(`mt-addLatestPostBtn`,()=>this.addLatestPostBtn()),G.execMenu(`mt-auto-sign`,()=>{J.init()}),G.execMenu(`mt-extend-cookie-expire`,()=>{this.extendCookieExpire()}),Y.isPostPublish_edit()||G.execMenuOnce(`mt-link-text-to-hyperlink`,()=>he())})},addLatestPostBtn(){O.info(`新增【最新发表】`);let e=E.createElement(`li`,{id:`latest_publication`,innerHTML:`
				<a href="/forum.php?mod=guide&view=newthread" hidefocus="true" title="最新发表">最新发表</a>
			`}),t=e.querySelector(`a`);return E.append(`#comiis_nv .wp.comiis_nvbox.cl ul`,e),window.location.href.includes(`/forum.php?mod=guide&view=newthread`)&&(E.removeClass(`#mn_forum_10`,`a`),E.css(t,`background`,`url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAADICAYAAAAk7PuyAAAAAXNSR0IArs4c6QAAAGFJREFUWEft1zESgCAQQ9HsVfb+d5RRlLHRVotHS5f5+YHKyymXiRAihKMISBDCNOInJHT39iTkcpkIYUcTCUKYkkKCEJBwTaY6cML5eiNGYiRGYrz9pqyDdbAOqxC/q8MApobR97qxnMwAAAAASUVORK5CYII=") repeat-x 50% -50px`)),[e]},async extendCookieExpire(){O.info(`延长cookie有效期`);let e=await g.cookie.list({}),t=[`_auth`,`_saltkey`,`_client_created`,`_client_token`];e.forEach(async e=>{if(e.session)return;let n=e.expirationDate,r=Date.now()/1e3;if(n<r)return;let i=3600*24*30;n-r>i||t.find(t=>e.name.endsWith(t))&&g.cookie.set({name:e.name,value:e.value,expirationDate:e.expirationDate+i}).then(()=>{O.info(`延长Cookie +30天成功：${e.name}`)}).catch(()=>{O.error(`延长Cookie +30天失败：${e.name}`)})})}},$={$upload:{small:!1,middle:!1,big:!1},$data:{avatarInfo:{maxSize:2097152,small:{width:48,height:48},middle:{width:120,height:120},big:{width:200,height:250}}},$el:{$smallUpload:null,$middleUpload:null,$bigUpload:null,$smallStatus:null,$middleStatus:null,$bigStatus:null},$avatar:{get small(){return $.$el.$smallUpload.files[0]},get middle(){return $.$el.$middleUpload.files[0]},get big(){return $.$el.$bigUpload.files[0]}},init(){this.showView()},showView(){let t=this,n=D.confirm({title:{text:`修改头像`,position:`center`},content:{text:`
                <div class="avatar-container">
                    <p class="avatar-tip">1. 小头像（图片宽高限制最大尺寸：48×48）</p>
                    <p class="avatar-upload-status" data-type="small">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="small" data-maxwidth="48" data-maxheight="48" accept="image/*">
                </div>
                <div class="avatar-container">
                    <p class="avatar-tip">2. 中头像（图片宽高限制最大尺寸：120×120）</p>
                    <p class="avatar-upload-status" data-type="middle">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="middle" data-maxwidth="120" data-maxheight="120" accept="image/*">
                </div>
                <div class="avatar-container">
                    <p class="avatar-tip">3. 大头像（图片宽高限制最大尺寸：200×250）</p>
                    <p class="avatar-upload-status" data-type="big">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="big" data-maxwidth="200" data-maxheight="250" accept="image/*">
                </div>
                `,html:!0},btn:{ok:{text:`上传`,callback:async()=>{if(!t.$upload.small){e.default.error(`请上传小头像`);return}if(!t.$upload.middle){e.default.error(`请上传中头像`);return}if(!t.$upload.big){e.default.error(`请上传大头像`);return}let r=e.default.loading(`正在处理数据中...`);try{let t=await this.getUploadUrl();if(t==null)return;let r=await q.getFormHash();if(r==null){e.default.error(`获取formhash失败`);return}let i={big:{base64:await T.parseFileToBase64(this.$avatar.big)},middle:{base64:await T.parseFileToBase64(this.$avatar.middle)},small:{base64:await T.parseFileToBase64(this.$avatar.small)}};Object.keys(i).forEach(e=>{let t=i[e];t.base64=t.base64.substring(t.base64.indexOf(`,`)+1)});let a=new FormData;a.append(`Filedata`,this.$avatar.big||``),a.append(`confirm`,`确定`),a.append(`avatar1`,i.big.base64),a.append(`avatar2`,i.middle.base64),a.append(`avatar3`,i.small.base64),a.append(`formhash`,r),O.info(`头像的base64字符串`,i);let o=await j.post(t,{data:a,processData:!1,headers:{Accept:`text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9`,"User-Agent":T.getRandomPCUA(),Host:window.location.hostname,Origin:window.location.origin,Referer:`${window.location.origin}/home.php?mod=spacecp&ac=avatar`}});if(!o.status)return;o.data.responseText.indexOf(`window.parent.postMessage('success','*')`)==-1?(O.error(`上传失败`,o),e.default.error(o.data.responseText,{timeout:6e3,isHTML:!1})):(n.close(),e.default.success(`上传成功`))}catch(e){O.error(e)}finally{r.close()}}}},width:window.innerWidth>500?`500px`:`88vw`,height:window.innerHeight>500?`500px`:`80vh`,style:`
            .avatar-container{
                display: flex;
                width: -webkit-fill-available;
                width: -moz-available;
                margin: 6px 10px;
                flex-direction: column;
            }
            .avatar-tip{
                float: left;
                font-weight: bold;
            }
            .avatar-upload-status {
                padding: 0px;
                padding-left: 10px;
                font-weight: bold;
                width: -webkit-fill-available;
                text-align: left;
                font-size: small;
            }
            .avatar-upload-status[data-success="false"]{
                color: red;
            }
            .avatar-upload-status[data-success="true"]{
                color: green;
            }
            .avatar-upload {
                margin: 20px 0px;
            }
            `});this.$el.$smallUpload=n.$shadowRoot.querySelector(`.avatar-upload[data-type='small']`),this.$el.$middleUpload=n.$shadowRoot.querySelector(`.avatar-upload[data-type='middle']`),this.$el.$bigUpload=n.$shadowRoot.querySelector(`.avatar-upload[data-type='big']`),this.$el.$smallStatus=n.$shadowRoot.querySelector(`.avatar-upload-status[data-type='small']`),this.$el.$middleStatus=n.$shadowRoot.querySelector(`.avatar-upload-status[data-type='middle']`),this.$el.$bigStatus=n.$shadowRoot.querySelector(`.avatar-upload-status[data-type='big']`),this.setUploadChangeEvent(this.$el.$smallUpload,this.$el.$smallStatus,this.$data.avatarInfo.small,()=>{this.$upload.small=!0}),this.setUploadChangeEvent(this.$el.$middleUpload,this.$el.$middleStatus,this.$data.avatarInfo.middle,()=>{this.$upload.middle=!0}),this.setUploadChangeEvent(this.$el.$bigUpload,this.$el.$bigStatus,this.$data.avatarInfo.big,()=>{this.$upload.big=!0})},setUploadChangeEvent(e,t,n,r){E.on(e,`change`,i=>{if(!e.files?.length)return;E.text(t,`🤡获取文件信息中...`),t.removeAttribute(`data-success`);let a=e.files[0],o=a.size,s=new Image,c=new FileReader;c.readAsDataURL(a),c.onload=function(i){s.src=i.target.result,s.onload=function(){if(s.width>n.width||s.height>n.height){e.value=``,t.setAttribute(`data-success`,`false`),E.text(t,`🤡校验失败 ==> 图片尺寸不符合，宽：${s.width} 高：${s.height}`);return}if(o>$.$data.avatarInfo.maxSize){e.value=``,t.setAttribute(`data-success`,`false`),E.text(t,`🤡校验失败 ==> 图片大小不符合：${o}byte，限制最大：${$.$data.avatarInfo.maxSize}byte`);return}t.setAttribute(`data-success`,`true`),E.text(t,`🤣 通过 宽:${s.width} 高:${s.height} 大小(byte):${o}`),r()}}})},async getUploadUrl(){let t=await j.get(`/home.php?mod=spacecp&ac=avatar`,{headers:{"User-Agent":T.getRandomPCUA()}});if(!t.status)return;if(T.isNull(t.data.responseText)){e.default.error(`动态头像：获取上传地址的内容失败`);return}let n=t.data.responseText.match(/var[\s]*data[\s]*=[\s]*"(.+?)"/);if(n==null||n.length!=2){e.default.error(`动态头像：获取变量data失败`);return}let r=n[n.length-1].split(`,`),i=r.indexOf(`stl_src`);if(i===-1&&(i=r.indexOf(`src`)),i===-1){e.default.error(`动态头像：获取上传地址失败`);return}let a=r[i+1],o=new URL(a);return o.pathname=o.pathname.replace(`/images/camera.swf`,`/index.php`),o.searchParams.delete(`inajax`),o.searchParams.set(`m`,`user`),o.searchParams.set(`a`,`rectavatar`),o.searchParams.set(`base64`,`yes`),a=o.toString(),O.info(`上传地址：`+a),a}},Ne={id:`component-common`,title:`通用`,views:[{text:``,type:`container`,views:[{text:`Toast配置`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Se(`Toast位置`,`qmsg-config-position`,`bottom`,[{value:`topleft`,text:`左上角`},{value:`top`,text:`顶部`},{value:`topright`,text:`右上角`},{value:`left`,text:`左边`},{value:`center`,text:`中间`},{value:`right`,text:`右边`},{value:`bottomleft`,text:`左下角`},{value:`bottom`,text:`底部`},{value:`bottomright`,text:`右下角`}],e=>{O.info(`设置当前Qmsg弹出位置`+e.text)},`Toast显示在页面九宫格的位置`),Se(`最多显示的数量`,`qmsg-config-maxnums`,3,[{value:1,text:`1`},{value:2,text:`2`},{value:3,text:`3`},{value:4,text:`4`},{value:5,text:`5`}],void 0,`限制Toast显示的数量`),X(`逆序弹出`,`qmsg-config-showreverse`,!1,void 0,`修改Toast弹出的顺序`)]}]}]},{text:``,type:`container`,views:[{text:`功能`,type:`deepMenu`,views:[{text:``,type:`container`,views:[X(`新增【最新发表】`,`mt-addLatestPostBtn`,!0,void 0,`便于快捷跳转`),X(`文本转超链接`,`mt-link-text-to-hyperlink`,!0,void 0,`自动把符合超链接格式的文字转为超链接`),X(`延长登录Cookie过期时间`,`mt-extend-cookie-expire`,!1,void 0,`减少频繁登录账号的问题`)]}]},{type:`deepMenu`,text:`自动签到`,views:[{text:``,type:`container`,views:[X(`启用`,`mt-auto-sign`,!0,void 0,`自动请求签到`),X(`使用fetch请求`,`mt-auto-sign-useFetch`,!1,void 0,``),ye(`签到信息`,`上次签到时间：${(()=>{let e=J.getHostNameSignInfo(window.location.hostname);return e?r.default.formatTime(e.time):`尚未签到`})()}`,`清空信息`,void 0,void 0,void 0,`primary`,t=>{let n=t.composedPath()[0].closest(`li`).querySelector(`.pops-panel-item-left-desc-text`);D.confirm({title:{text:`提示 `,position:`center`},content:{text:`<p>是否清空脚本签到记录的时间?</p>`,html:!0},btn:{ok:{enable:!0,callback:t=>{let i=window.location.hostname;J.clearSignInfo(i),e.default.success(`删除成功`),E.text(n,`上次签到时间：${(()=>{let e=J.getHostNameSignInfo(i);return e?r.default.formatTime(e.time):`尚未签到`})()}`),t.close()}}},width:`300px`,height:`200px`})})]}]},{text:`头像`,type:`deepMenu`,views:[{text:`<a href='https://ezgif.com/resize' target='_blank'>Resize Image</a>`,type:`container`,views:[xe(e=>{let t=E.createElement(`div`,{className:`pops-panel-item-left-text`,innerHTML:`
											<p class="pops-panel-item-left-main-text">头像（有缓存）</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),n=E.createElement(`div`,{className:`pops-panel-avatar-img`,innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${q.getCurrentUID()}&size=small"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${q.getCurrentUID()}&size=middle"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${q.getCurrentUID()}&size=big"
												class="avatar-img" data-size="big">
											`}),r=E.createElement(`style`,{innerHTML:`
											.avatar-img {
												width: 30px;
												height: 30px;
												border-radius: 50%;
												overflow: hidden;
											}
										`});return n.querySelector(`.avatar-img[data-size='small']`),n.querySelector(`.avatar-img[data-size='middle']`),n.querySelector(`.avatar-img[data-size='big']`),e.appendChild(t),e.appendChild(n),e.appendChild(r),e},void 0,{text:`头像（有缓存）`,desc:`小、中、大`}),xe(e=>{let t=E.createElement(`div`,{className:`pops-panel-item-left-text`,innerHTML:`
											<p class="pops-panel-item-left-main-text">头像</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),n=E.createElement(`div`,{className:`pops-panel-avatar-img`,innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${q.getCurrentUID()}&size=small&ts=${Date.now()}"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${q.getCurrentUID()}&size=middle&ts=${Date.now()}"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${q.getCurrentUID()}&size=big&ts=${Date.now()}"
												class="avatar-img" data-size="big">
											`});return e.appendChild(t),e.appendChild(n),e},void 0,{text:`头像`,desc:`小、中、大`}),ye(`修改头像`,`可以上传gif图片，注意图片最大限制为${r.default.formatByteToSize($.$data.avatarInfo.maxSize)}`,`上传`,void 0,!1,!1,`primary`,()=>{$.init()})]}]}]}]},Pe={id:`component-forum-post`,title:`帖子`,views:[{type:`container`,text:``,views:[{text:`功能`,type:`deepMenu`,views:[{type:`container`,text:``,views:[X(`拦截附件`,`mt-forum-post-interceptionAttachment`,!0,void 0,`点击附件时弹出提示框进行确认是否下载附件`),X(`图片查看优化`,`mt-forum-post-optimizationImagePreview`,!0,void 0,`使用Viewer查看图片`),X(`自动加载下一页`,`mt-forum-post-loadNextPageComment`,!0,void 0,`无缝预览下一页`),X(`代码块优化`,`mt-forum-post-codeQuoteOptimization`,!0,void 0,`自动检测代码块语言并设置关键字高亮`)]}]},{type:`deepMenu`,text:`用户信息块`,views:[{type:`container`,text:``,views:[X(`探测用户在线状态`,`mt-forum-post-detectingUserOnlineStatus`,!1,void 0,`获取用户在线状态并在用户信息处显示状态表情`),X(`显示用户等级`,`mt-forum-post-showUserLevel`,!0,void 0,`在用户信息处显示当前用户的等级`),X(`隐藏底部信息块`,`mt-forum-post-hideBottomInfoBlock`,!1,void 0,`包括金币、好评、信誉等信息`)]}]},{type:`deepMenu`,text:`右侧悬浮工具栏`,views:[{type:`container`,text:``,views:[X(`新增【快捷收藏】`,`mt-forum-post-quickCollentBtn`,!0,void 0,`在右侧悬浮工具栏添加【收藏】按钮，用于快捷收藏`),X(`快捷回复优化`,`mt-forum-post-quickReplyOptimization`,!0,void 0,`为快捷回复弹窗底部区域添加【一键空格】按钮`)]}]}]}]},Fe={id:`component-guide`,title:`导读`,views:[{type:`container`,text:``,views:[X(`页面美化`,`mt-guide-beautifyPage`,!0,void 0,`美化样式`)]}]};U.addContentConfig([Ne,Pe,Fe]),G.init(),Me.init()})(Qmsg,DOMUtils,pops,Utils,hljs,Viewer);
