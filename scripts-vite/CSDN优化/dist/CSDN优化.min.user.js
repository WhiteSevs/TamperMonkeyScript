// ==UserScript==
// @name         CSDN优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.6.25
// @author       WhiteSevs
// @description  支持PC和手机端、屏蔽广告、优化浏览体验、重定向拦截的Url、自动展开全文、自动展开代码块、全文居中、允许复制内容、去除复制内容的小尾巴、自定义屏蔽元素等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.csdn.net/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.12.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@2.0.8/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.8/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.2/dist/index.umd.min.js
// @connect      blog.csdn.net
// @connect      mp-action.csdn.net
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

(function(e,t,n,r){"use strict";var i=Object.create,a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,c=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,u=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=s(t),c=0,u=i.length,d;c<u;c++)d=i[c],!l.call(e,d)&&d!==n&&a(e,d,{get:(e=>t[e]).bind(null,d),enumerable:!(r=o(t,d))||r.enumerable});return e},d=(e,t,n)=>(n=e==null?{}:i(c(e)),u(t||!e||!e.__esModule?a(n,`default`,{value:e,enumerable:!0}):n,e));e=d(e),t=d(t),n=d(n),r=d(r);var f=typeof GM_addValueChangeListener<`u`?GM_addValueChangeListener:void 0,p=typeof GM_deleteValue<`u`?GM_deleteValue:void 0,m=typeof GM_getResourceText<`u`?GM_getResourceText:void 0,h=typeof GM_getValue<`u`?GM_getValue:void 0,g=typeof GM_info<`u`?GM_info:void 0,_=typeof GM_listValues<`u`?GM_listValues:void 0,v=typeof GM_registerMenuCommand<`u`?GM_registerMenuCommand:void 0,ee=typeof GM_removeValueChangeListener<`u`?GM_removeValueChangeListener:void 0,y=typeof GM_setValue<`u`?GM_setValue:void 0,te=typeof GM_setValues<`u`?GM_setValues:void 0,ne=typeof GM_unregisterMenuCommand<`u`?GM_unregisterMenuCommand:void 0,re=typeof GM_xmlhttpRequest<`u`?GM_xmlhttpRequest:void 0,b=typeof unsafeWindow<`u`?unsafeWindow:void 0,ie=window,x={qmsg_config_position:{key:`qmsg-config-position`,defaultValue:`bottom`},qmsg_config_maxnums:{key:`qmsg-config-maxnums`,defaultValue:3},qmsg_config_showreverse:{key:`qmsg-config-showreverse`,defaultValue:!1},httpx_cookie_manager_enable:{key:`httpx-use-cookie-enable`,defaultValue:!1},httpx_cookie_manager_use_document_cookie:{key:`httpx-use-document-cookie`,defaultValue:!1}},S={waitRemove(...e){e.forEach(e=>{typeof e==`string`&&t.default.waitNodeList(e).then(e=>{e.forEach(e=>e.remove())})})},createBlockCSSNode(...e){let n=[];if(e.length!==0&&!(e.length===1&&typeof e[0]==`string`&&e[0].trim()===``))return e.forEach(e=>{Array.isArray(e)?n=n.concat(e):n.push(e)}),t.default.createElement(`style`,{type:`text/css`,innerHTML:`${n.join(`,
`)}{display: none !important;}`})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]==`string`&&e[0].trim()===``)&&(e.forEach(e=>{Array.isArray(e)?t=t.concat(e):t.push(e)}),t=t.map(e=>e.trim()).filter(e=>e!==``),t.length))return k(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){let t=typeof m==`function`?m(e.keyName):null;return typeof t==`string`&&t?k(t):S.loadStyleLink(e.url)},async loadStyleLink(e){let n=document.createElement(`link`);return n.rel=`stylesheet`,n.type=`text/css`,n.href=e,new Promise(e=>{t.default.onReady(()=>{document.head.appendChild(n),e(n)})})},async loadScript(e){let t=document.createElement(`script`);return t.src=e,new Promise(e=>{t.onload=()=>{e(null)},(document.head||document.documentElement).appendChild(t)})},fixUrl(e){return e=e.trim(),e.startsWith(`data:`)||e.match(/^http(s|):\/\//i)?e:e.startsWith(`//`)?(e.startsWith(`///`)||(e=window.location.protocol+e),e):(e.startsWith(`/`)||(e+=`/`),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith(`https://`)||!e.startsWith(`http://`))return e;try{let t=new URL(e);return t.protocol=`https:`,t.toString()}catch{return e}},lockScroll(...e){let t=document.createElement(`style`);t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...e||[]);return n.forEach(e=>{e.classList.add(`pops-overflow-hidden-important`)}),(document.head||document.documentElement).appendChild(t),{recovery(){n.forEach(e=>{e.classList.remove(`pops-overflow-hidden-important`)}),t.remove()}}},async getClipboardText(){function e(e){navigator.clipboard.readText().then(t=>{e(t)}).catch(t=>{E.error(`读取剪贴板内容失败👉`,t),e(``)})}function t(t){navigator.permissions.query({name:`clipboard-read`}).then(()=>{e(t)}).catch(n=>{E.error(`申请剪贴板权限失败，尝试直接读取👉`,n.message??n.name??n.stack),e(t)})}function n(){return!(typeof navigator?.clipboard?.readText!=`function`||typeof navigator?.permissions?.query!=`function`)}return new Promise(e=>{if(!n()){e(``);return}document.hasFocus()?t(e):window.addEventListener(`focus`,()=>{t(e)},{once:!0})})},escapeHtml(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`).replace(/©/g,`&copy;`).replace(/®/g,`&reg;`).replace(/™/g,`&trade;`).replace(/→/g,`&rarr;`).replace(/←/g,`&larr;`).replace(/↑/g,`&uarr;`).replace(/↓/g,`&darr;`).replace(/—/g,`&mdash;`).replace(/–/g,`&ndash;`).replace(/…/g,`&hellip;`).replace(/ /g,`&nbsp;`).replace(/\r\n/g,`<br>`).replace(/\r/g,`<br>`).replace(/\n/g,`<br>`).replace(/\t/g,`&nbsp;&nbsp;&nbsp;&nbsp;`)},interval(e,t,n=5e3){let r,i=n-t,a=t,o=async n=>{let s=await e(n);if(typeof s==`boolean`&&s||n){C.workerClearTimeout(r);return}if(a+=t,a>i){o(!0);return}r=C.workerSetTimeout(()=>{o(!1)},t)};o(!1)},findParentNode(e,n,r){if(r){let i=t.default.closest(e,r);if(i)return i.querySelector(n)}else return t.default.matches(e,n)?e:t.default.closest(e,n)},toStr(e,t=2){let n=`__undefined__placeholder__replaced__str__`+performance.now();return JSON.stringify(e,(e,t)=>t===void 0?n:t,t).replace(RegExp(`"${n}"`,`g`),`undefined`)},isVerticalScreen(){return!globalThis.screen.orientation.type.includes(`landscape`)},isMobileDevice(e=768){return this.isVerticalScreen()?globalThis.innerWidth<e:globalThis.innerHeight<e},isTopWindow(){let e=typeof b==`object`&&b?b:window;return e.top===e.self},formatVideoDuration(e){if(typeof e!=`number`&&(e=parseInt(e)),isNaN(e))return e.toString();let t=function(e){return e<10?`0${e}`:e};if(e<60)return`0:${t(e)}`;if(e>=60&&e<3600)return`${Math.floor(e/60)}:${t(e%60)}`;{let n=Math.floor(e/3600),r=Math.floor(e/60)%60,i=e%60;return`${n}:${t(r)}:${t(i)}`}},formatTimeStamp(e,t){if(typeof e==`number`&&e<0xe8d4a51000){let t=String(Date.now()).length-String(e).length;e*=10**t}let n=e,r=new Date(typeof e==`string`?e.replace(/-/g,`/`):e),i=new Date(t??Date.now()).getTime()-r.getTime(),a=Math.floor(i/(24*3600*1e3));if(a>0)n=a>7?C.formatTime(r.getTime()):a+`天前`;else{let e=i%(24*3600*1e3),t=Math.floor(e/(3600*1e3));if(t>0)n=t+`小时前`;else{let t=e%(3600*1e3),r=Math.floor(t/(60*1e3));if(r>0)n=r+`分钟前`;else{let e=t%(60*1e3);n=Math.round(e/1e3)+`秒前`}}}return n}},C=r.default.noConflict(),w=t.default.noConflict(),T=n.default,E=new C.Log(g,b.console||ie.console),D=g?.script?.name||void 0,ae=n.default.fn.Utils.AnyTouch();E.config({debug:!1,logMaxCount:250,autoClearConsole:!0,tag:!0});var oe=()=>{let e=n.default.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex??0,t=C.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex??0;return Math.max(100,e,t)};e.default.config({isHTML:!0,autoClose:!0,showClose:!1,consoleLogContent(e){let t=e.setting.type;if(t===`loading`)return!1;let n=e.setting.content;return t===`warning`?E.warn(n):t===`error`?E.error(n):E.info(n),!1},get position(){return V.getValue(x.qmsg_config_position.key,x.qmsg_config_position.defaultValue)},get maxNums(){return V.getValue(x.qmsg_config_maxnums.key,x.qmsg_config_maxnums.defaultValue)},get showReverse(){return V.getValue(x.qmsg_config_showreverse.key,x.qmsg_config_showreverse.defaultValue)},get zIndex(){return oe()}}),T.GlobalConfig.setGlobalConfig({zIndex:()=>oe(),mask:{enable:!0,clickEvent:{toClose:!1,toHide:!1}},drag:!0});var se=new C.GM_Menu({GM_getValue:h,GM_setValue:y,GM_registerMenuCommand:v,GM_unregisterMenuCommand:ne}),O=new C.Httpx({xmlHttpRequest:re,logDetails:!1});O.interceptors.request.use(e=>e),O.interceptors.response.use(e=>e,t=>(E.error(`[Httpx-HttpxRequest.response] 响应错误`,{data:t}),t.type===`onabort`?e.default.warning(`请求取消`,{consoleLogContent:!0}):t.type===`onerror`?e.default.error(`请求异常`,{consoleLogContent:!0}):t.type===`ontimeout`?e.default.error(`请求超时`,{consoleLogContent:!0}):e.default.error(`其它错误`,{consoleLogContent:!0}),t)),b.Object.defineProperty,b.Object.keys,b.Object.values,b.Function.prototype.apply,b.Function.prototype.call,b.Element.prototype.appendChild,b.setTimeout.bind(b),b.clearTimeout.bind(b),b.setInterval.bind(b),b.clearInterval.bind(b);var k=w.addStyle.bind(w),A=S.addBlockCSS.bind(S),j=t.default.selector.bind(t.default),ce=t.default.selectorAll.bind(t.default),M=new C.CookieManagerService({baseCookieHandler:`GM_cookie`});M.isSupportGM_cookie||(M.isSupportCookieStore?M.setOptions({baseCookieHandler:`cookieStore`}):M.setOptions({baseCookieHandler:`document.cookie`})),new C.DocumentCookieHandler;var N=`GM_Panel`,le=`data-init`,P=`data-key`,F=`data-default-value`,ue=`data-init-more-value`,de=`data-plugin-search-config`,I=`data-storage-api`,L={followBrowserSize:!1,get width(){return L.followBrowserSize?globalThis.outerWidth:globalThis.innerWidth},get height(){return L.followBrowserSize?globalThis.outerHeight:globalThis.innerHeight}},R={setting:{get width(){return L.width<550?`88vw`:L.width<700?`550px`:`700px`},get height(){return L.height<450?`70vh`:L.height<550?`450px`:`550px`}},settingMiddle:{get width(){return L.width<350?`88vw`:`350px`},get height(){return L.height<450?`88vh`:`450px`}},settingBig:{get width(){return L.width<800?`92vw`:`800px`},get height(){return L.height<600?`80vh`:`600px`}},info:{get width(){return L.width<350?`88vw`:`350px`},get height(){return L.height<250?`88vh`:`250px`}}},z={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig??=new C.Dictionary,this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e)},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]},getDefaultBottomContentConfig(t){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let n=!1,r,i=(e,n)=>{if(t&&typeof t.translateCallback==`function`)return t.translateCallback(e,n);if(typeof n==`object`&&n)for(let t in n)e=e.replaceAll(`{{${t}}}`,n[t]);return e},a=(e,t)=>{typeof t!=`string`&&(t=S.toStr(t));let n=new Blob([t]),r=globalThis.URL.createObjectURL(n);w.createElement(`a`,{href:r,download:e}).click(),C.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(r)},500)},o=()=>{let t=t=>{let n=T.alert({title:{text:i(`请选择导入方式`),position:`center`},content:{text:`
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
          }`}),r=n.$shadowRoot.querySelector(`.btn-control[data-mode='local']`),a=n.$shadowRoot.querySelector(`.btn-control[data-mode='network']`),o=n.$shadowRoot.querySelector(`.btn-control[data-mode='clipboard']`),s=async n=>{confirm(i(`是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）`))&&(typeof _==`function`?typeof p==`function`?(_().forEach(e=>{p(e)}),e.default.success(i(`已清空脚本存储的配置`))):e.default.error(i(`不支持GM_deleteValue函数，无法执行删除脚本配置`)):e.default.error(i(`不支持GM_listValues函数，无法清空脚本存储的配置`))),typeof te==`function`?te(n):Object.keys(n).forEach(e=>{let t=n[e];y(e,t)}),e.default.success(i(`配置导入完毕`)),t?.()},c=t=>new Promise(async n=>{let r=C.toJSON(t);Object.keys(r).length===0?e.default.warning(i(`解析为空配置，不导入`)):await s(r),n(!0)});w.on(r,`click`,e=>{w.preventEvent(e),n.close();let t=w.createElement(`input`,{type:`file`,accept:`.json`});w.on(t,[`propertychange`,`input`],()=>{if(!t.files?.length)return;let e=t.files[0],n=new FileReader;n.onload=()=>{c(n.result)},n.readAsText(e,`UTF-8`)}),t.click()}),w.on(a,`click`,t=>{w.preventEvent(t),n.close();let r=T.prompt({title:{text:i(`网络导入`),position:`center`},content:{text:``,placeholder:i(`请填写URL`),focus:!0},btn:{close:{enable:!0,callback(e){e.close()}},ok:{text:i(`导入`),callback:async t=>{let n=t.text;if(C.isNull(n)){e.default.error(i(`请填入完整的url`));return}let r=e.default.loading(i(`正在获取配置...`)),a=await O.get(n,{allowInterceptConfig:!1});if(r.close(),!a.status){E.error(a),e.default.error(i(`获取配置失败`),{consoleLogContent:!0});return}await c(a.data.responseText)&&t.close()}},cancel:{enable:!1}},drag:!0,mask:{enable:!0},width:R.info.width,height:`auto`}),a=r.$shadowRoot.querySelector(`input`),o=r.$shadowRoot.querySelector(`.pops-prompt-btn-ok`);w.on(a,[`input`,`propertychange`],()=>{w.val(a)===``?w.attr(o,`disabled`,`true`):w.removeAttr(o,`disabled`)}),w.onKeyboard(a,`keydown`,(e,t,n)=>{e===`Enter`&&n.length===0&&w.val(a)!==``&&w.emit(o,`click`)}),w.emit(a,`input`)}),w.on(o,`click`,async t=>{w.preventEvent(t),n.close();let r=await S.getClipboardText();if(r.trim()===``){e.default.warning(i(`获取到的剪贴板内容为空`));return}await c(r)})},n=(t=`${D}_panel-setting-${C.formatTime(Date.now(),`yyyy_MM_dd_HH_mm_ss`)}.json`,n)=>{let r=T.alert({title:{text:i(`请选择导出方式`),position:`center`},content:{text:`
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
        `}).$shadowRoot.querySelector(`textarea`),o={};if(typeof _==`function`)_().forEach(e=>{let t=h(e);Reflect.set(o,e,t)});else{e.default.warning(i(`不支持函数GM_listValues，仅导出菜单配置`));let t=h(N);Reflect.set(o,N,t)}let s=S.toStr(o);r.value=s},s=()=>{let e=g?.script?.supportURL||g?.script?.namespace;typeof e==`string`&&C.isNotNull(e)&&window.open(e,`_blank`)};return[{id:`script-version`,title:i(`版本：{{version}}`,{version:g?.script?.version||i(`未知`)}),isBottom:!0,views:[],clickFirstCallback(){return!1},afterRender(e){new ae(e.$asideLiElement).on(`tap`,function(){clearTimeout(r),r=void 0,n?(n=!1,o()):(r=setTimeout(()=>{n=!1,s()},200),n=!0)})}}]},setDefaultBottomContentConfig(e){this.$data.__defaultBottomContentConfig=e}},fe={$data:{__menuOption:[{key:`show_pops_panel_setting`,text:`⚙ 设置`,autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{V.showPanel(z.getConfig(0))}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu()},initExtensionsMenu(){S.isTopWindow()&&se.add(this.$data.menuOption)},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e)},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(e=>{let t=this.$data.menuOption.findIndex(t=>t.key===e.key);t!==-1&&(this.$data.menuOption[t]=e)})},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1)}},pe=class{data={storeNodeList:[],destoryFnList:[]};option={};constructor(e){this.option=e}handlerResult(e,t){let n=[],r=[],i=[];if(Array.isArray(t))i=i.concat(t);else{let e=t=>{if(typeof t==`object`&&t)if(t instanceof Element)i.push(t);else if(Array.isArray(t))e(t);else{let{$css:e,destory:n}=t;e!=null&&(Array.isArray(e)?i=i.concat(e):e instanceof Element&&i.push(e)),typeof n==`function`&&i.push(n)}else i.push(t)};e(t)}let a=e=>{if(e!=null){if(e instanceof Element){n.push(e);return}if(typeof e==`function`){r.push(e);return}}};for(let e of i){let t=a(e);if(typeof t==`boolean`&&!t)break;if(Array.isArray(e))for(let t of e){let e=a(t);if(typeof e==`boolean`&&!e)break}}this.clearStoreNodeList(),this.execDestoryFnAndClear(),e&&(this.data.storeNodeList=this.data.storeNodeList.concat(n),this.data.destoryFnList=this.data.destoryFnList.concat(r))}getEnableStatus(e){return!!this.option.getValue(e)}clearStoreNodeList=()=>{for(let e=this.data.storeNodeList.length-1;e>=0;e--)this.data.storeNodeList[e]?.remove(),this.data.storeNodeList.splice(e,1)};execDestoryFnAndClear=()=>{for(let e=this.data.destoryFnList.length-1;e>=0;e--){let t=this.data.destoryFnList[e];t(),this.data.destoryFnList.splice(e,1)}};checkMenuExec(){let e=!1;return e=typeof this.option.checkExec==`function`?this.option.checkExec(this.option.keyList):this.option.keyList.every(e=>this.getEnableStatus(e)),e}},B=new class{storageKey;listenerData;cacheData;callbacks=[];constructor(e){if(typeof e==`string`){let t=e.trim();if(t==``)throw Error(`key can not be empty string`);this.storageKey=t}else throw TypeError(`key must be a string`);this.listenerData=new r.default.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.setLocalValue=this.setLocalValue.bind(this),this.destory=this.destory.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this)}[Symbol.dispose](){this.destory()}async[Symbol.asyncDispose](){this.destory()}destory(){this.cacheData=null;for(let e=this.callbacks.length-1;e>=0;e--){let t=this.callbacks[e];t(),this.callbacks.splice(e,1)}}getLocalValue(){if(this.cacheData==null){let e=h(this.storageKey);e??(e={},this.setLocalValue(e)),this.destory(),this.cacheData=e;let t=f(this.storageKey,(e,t,n)=>{this.cacheData=null,this.cacheData=n});return this.callbacks.push(()=>{ee(t)}),e}else return this.cacheData}setLocalValue(e){this.cacheData=null,this.cacheData=e,y(this.storageKey,e)}set(e,t){let n=this.get(e),r=this.getLocalValue();Reflect.set(r,e,t),this.setLocalValue(r),this.emitValueChangeListener(e,t,n)}get(e,t){let n=this.getLocalValue();return Reflect.get(n,e)??t}getAll(){return this.getLocalValue()}delete(e){let t=this.get(e),n=this.getLocalValue();Reflect.deleteProperty(n,e),this.setLocalValue(n),this.emitValueChangeListener(e,void 0,t)}has(e){let t=this.getLocalValue();return Reflect.has(t,e)}keys(){let e=this.getLocalValue();return Reflect.ownKeys(e)}values(){let e=this.getLocalValue();return Reflect.ownKeys(e).map(t=>Reflect.get(e,t))}clear(){this.destory(),p(this.storageKey)}addValueChangeListener(e,t){let n=Math.random(),r=this.listenerData.get(e)||[];return r.push({id:n,key:e,callback:t}),this.listenerData.set(e,r),n}removeValueChangeListener(e){let t=!1;for(let[n,r]of this.listenerData.entries()){for(let n=0;n<r.length;n++){let i=r[n];(typeof e==`string`&&i.key===e||typeof e==`number`&&i.id===e)&&(r.splice(n,1),n--,t=!0)}this.listenerData.set(n,r)}return t}async emitValueChangeListener(...e){let[t,n,r]=e;if(!this.listenerData.has(t))return;let i=this.listenerData.get(t);for(let a=0;a<i.length;a++){let o=i[a];if(typeof o.callback==`function`){let i,a;e.length===1||(e.length===2?i=n:e.length===3&&(i=n,a=r)),await o.callback(t,i,a)}}}}(N),V={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue??=new C.Dictionary,this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData??=new C.Dictionary,this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce??=new C.Dictionary,this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData??=new C.Dictionary,this.__onceExecData},get scriptName(){return D},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e},key:N,attributeKeyName:P,attributeDefaultValueName:F},init(){this.initContentDefaultValue(),fe.init()},initContentDefaultValue(){let e=e=>{if(!e.attributes||e.type===`button`||e.type===`container`||e.type===`deepMenu`)return;let t=e.attributes,n=t[le];if(typeof n==`function`){let e=n();if(typeof e==`boolean`&&!e)return}let r=new Map,i=t[P];if(i!=null){let e=t[F];r.set(i,e)}let a=t[ue];if(typeof a==`object`&&a&&Object.keys(a).forEach(e=>{let t=a[e];r.set(e,t)}),!r.size){E.warn(`请先配置键`,e);return}if(e.type===`switch`){let t=typeof e.disabled==`function`?e.disabled():e.disabled;typeof t==`boolean`&&t&&this.$data.contentConfigInitDisabledKeys.push(...r.keys())}for(let[e,t]of r.entries())this.setDefaultValue(e,t)},t=n=>{for(let r=0;r<n.length;r++){let i=n[r];e(i);let a=i.views;a&&Array.isArray(a)&&t(a)}},n=[...z.getAllContentConfig()];for(let e=0;e<n.length;e++){let r=n[e];if(!r.views)continue;let i=r.views;i&&Array.isArray(i)&&t(i)}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)]},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&E.warn(`该key已存在，初始化默认值失败: `,{key:e,initValue:this.$data.contentConfigInitDefaultValue.get(e)}),this.$data.contentConfigInitDefaultValue.set(e,t)},getDefaultValue(e){return this.$data.contentConfigInitDefaultValue.get(e)},setValue(e,t){B.set(e,t)},getValue(e,t){return B.get(e)??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){B.delete(e)},hasKey(e){return B.has(e)},addValueChangeListener(e,t,n){let r=B.addValueChangeListener(e,t);if(n?.immediate||n?.immediateAll){let r=this.getValue(e);n?.immediate?t(e,r,r):n?.immediateAll&&V.emitMenuValueChange(e,r,r)}return r},removeValueChangeListener(e){B.removeValueChangeListener(e)},emitMenuValueChange(e,t,n){B.emitValueChangeListener(e,t,n)},async exec(e,t,n,r=!0){let i;i=typeof e==`string`||Array.isArray(e)?()=>e:e;let a=!1,o=i(),s=[];Array.isArray(o)?(a=!0,s=o):s.push(o);let c=s.find(e=>!this.$data.contentConfigInitDefaultValue.has(e));if(c){E.warn(`${c} 键不存在`);return}let l=JSON.stringify(s);if(r&&this.$data.onceExecMenuData.has(l))return this.$data.onceExecMenuData.get(l);let u=[],d=new pe({keyList:s,getValue:e=>!!this.getValue(e),checkExec(e){let t=!1;return t=typeof n==`function`?n(e):e.every(e=>this.getValue(e)),t}}),f=async e=>{let n=d.checkMenuExec(),r=[];if(n){let i=s.map(e=>this.getValue(e));r=await t({key:s,triggerKey:e?.key,value:a?i:i[0],addStoreValue:(...e)=>d.handlerResult(n,e)})}d.handlerResult(n,r)};r&&s.forEach(e=>{let t=this.addValueChangeListener(e,(e,t,n)=>f({key:e,newValue:t,oldValue:n}));u.push(t)}),await f();let p={checkMenuExec:d.checkMenuExec.bind(d),keyList:s,reload(){this.clearStoreNodeList(),this.execDestoryFnAndClear(),f()},clear(){d.clearStoreNodeList(),this.execDestoryFnAndClear(),this.removeValueChangeListener(),this.clearOnceExecMenuData()},clearStoreNodeList:d.clearStoreNodeList.bind(d),execDestoryFnAndClear:d.execDestoryFnAndClear.bind(d),removeValueChangeListener:()=>{u.forEach(e=>{this.removeValueChangeListener(e)})},clearOnceExecMenuData(){r&&V.$data.onceExecMenuData.delete(l)}};return this.$data.onceExecMenuData.set(l,p),p},async execMenu(e,t,n=!1,r=!1){return await this.exec(e,async(...e)=>await t(...e),e=>e.every(e=>{let t=!!this.getValue(e);return V.$data.contentConfigInitDisabledKeys.includes(e)&&(t=!1,E.warn(`.execMenu${r?`Once`:``} ${e} 被禁用`)),n&&(t=!t),t}),r)},async execMenuOnce(e,t,n=!1,r=!1){let i=await this.execMenu(e,t,n,!0);return r&&i&&(this.removeUrlChangeWithExecMenuOnceListener(e),this.addUrlChangeWithExecMenuOnceListener(e,()=>{i.reload()})),i},async execMoreMenu(e,t,n=!1,r=!1,i=!1){let a=await Promise.all(e.map(async([e,t])=>await this.execMenu(e,(...e)=>t(...e),n,r))),o=new pe({keyList:e.map(([e])=>e),getValue:e=>!!this.getValue(e)}),s=[],c=(e=!1)=>{if(o.clearStoreNodeList(),o.execDestoryFnAndClear(),e){for(let e of s)this.removeValueChangeListener(e);for(let e of a)e&&this.removeUrlChangeWithExecMenuOnceListener(e.keyList)}},l=()=>{let e=a.every(e=>e?e.checkMenuExec():!0);if(c(!1),e){let n=t();o.handlerResult(e,n)}};l();for(let e of a)if(e){let t=this.addValueChangeListener(e.keyList[0],()=>{l()});s.push(t),i&&(this.removeUrlChangeWithExecMenuOnceListener(e.keyList),this.addUrlChangeWithExecMenuOnceListener(e.keyList,()=>{e.reload()}))}return{clear(){for(let e of a)e?.clear();this.execDestoryFnAndClear(),this.removeValueChangeListener()},execDestoryFnAndClear(){for(let e of a)e?.execDestoryFnAndClear();c(!1)},removeValueChangeListener(){for(let e of a)e?.removeValueChangeListener();c(!0)}}},async execMoreMenuOnce(e,t,n=!1,r=!1){return await this.execMoreMenu(e,t,n,!0,r)},deleteExecMenuOnce(e){return e=this.transformKey(e),this.$data.onceExecMenuData.delete(e),this.$data.urlChangeReloadMenuExecOnce.delete(e),B.removeValueChangeListener(e)},onceExec(e,t,n=!1){if(e=this.transformKey(e),typeof e!=`string`)throw TypeError(`key 必须是字符串`);this.$data.onceExecData.has(e)||n&&(Array.isArray(e)?e:[e]).findIndex(e=>{if(!V.getValue(e))return!0})!==-1||(t(),this.$data.onceExecData.set(e,1))},deleteOnceExec(e){e=this.transformKey(e),this.$data.onceExecData.delete(e)},addUrlChangeWithExecMenuOnceListener(e,t){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.set(e,t),{off:()=>this.removeUrlChangeWithExecMenuOnceListener(e)}},removeUrlChangeWithExecMenuOnceListener(e){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.delete(e)},hasUrlChangeWithExecMenuOnceListener(e){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.has(e)},async emitUrlChangeWithExecMenuOnceEvent(e){let t=this.$data.urlChangeReloadMenuExecOnce.values();for(let n of t)await n(e)},showPanel(e,t=`${D}-设置`,n=!1,r=!1){this.$data.$panel=null,this.$data.panelContent=[];let i=e.findIndex(e=>(typeof e.isBottom==`function`?e.isBottom():!!e.isBottom)&&e.id===`script-version`)!==-1;!n&&!i&&e.push(...z.getDefaultBottomContentConfig());let a=T.panel({title:{text:t,position:`center`,html:!1,style:``},content:e,btn:{close:{enable:!0,callback:e=>{e.close(),this.$data.$panel=null}}},mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1},clickCallBack:e=>{e(),this.$data.$panel=null}},width:R.setting.width,height:R.setting.height,drag:!0,only:!0,style:`
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
						`}),l=T.fn.PanelHandlerComponents();return w.on(c,`click`,()=>{let r=n.$shadowRoot.querySelectorAll(`aside.pops-panel-aside .pops-panel-aside-top-container li`)[t.index];if(!r){e.default.error(i(`左侧项下标{{index}}不存在`,{index:t.index}));return}r.scrollIntoView({behavior:`smooth`,block:`center`}),r.click(),a(t.next,async t=>{if(t?.next){let r=await w.waitNode(()=>Array.from(n.$shadowRoot.querySelectorAll(`.pops-panel-deepMenu-nav-item`)).find(e=>{let n=Reflect.get(e,l.$data.nodeStoreConfigKey);return typeof n==`object`&&!!n&&n.text===t.name}),2500);if(r)r.click();else return e.default.error(i(`未找到对应的二级菜单`)),{isFind:!0,data:t};return{isFind:!1,data:t.next}}else{let r=await w.waitNode(()=>Array.from(n.$shadowRoot.querySelectorAll(`li:not(.pops-panel-deepMenu-nav-item)`)).find(e=>Reflect.get(e,l.$data.nodeStoreConfigKey)===t.matchedData?.formConfig),2500);if(r){o(r);let e=r.closest(`.pops-panel-forms-fold[data-fold-enable]`);e&&(e.querySelector(`.pops-panel-forms-fold-container`).click(),await C.sleep(500)),o(r,()=>{s(r)})}else e.default.error(i(`未找到对应的菜单项`));return{isFind:!0,data:t}}})}),c},h=e=>{let t=new RegExp(e,`i`),n=[],i=(e,r)=>{for(let a=0;a<e.length;a++){let o=e[a],s=o.views;if(s&&Array.isArray(s)){let e=C.deepClone(r);if(o.type===`deepMenu`){let t=C.queryProperty(e,e=>e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e});t.next={name:o.text}}i(s,e)}else{let e,i;if(o.type===`own`){let t=Reflect.get(o.attributes||{},de);t&&(typeof t==`function`&&(t=t()),typeof t.text==`string`&&(e=t.text),typeof t.desc==`string`&&(i=t.desc))}else e=o.text,i=Reflect.get(o,`description`);let a=[e,i],s=a.findIndex(e=>{if(typeof e==`string`)return e.match(t)});if(s!==-1){let t=C.deepClone(r),c=C.queryProperty(t,e=>e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e});c.next={name:e,matchedData:{path:``,formConfig:o,matchedText:a[s],description:i}};let l=[];C.queryProperty(t,e=>{let t=e?.name;return typeof t==`string`&&t.trim()!==``&&l.push(t),e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e}});let u=l.join(S.escapeHtml(` - `));c.next.matchedData.path=u,n.push(t)}}}};for(let e=0;e<r.length;e++){let t=r[e];if(!t.views||t.isBottom&&t.id===`script-version`)continue;let n=t.views;if(n&&Array.isArray(n)){let r=t.title;typeof r==`function`&&(r=r()),i(n,{index:e,name:r})}}let a=document.createDocumentFragment();for(let e of n){let t=m(e);a.appendChild(t)}p(),d.append(a)};w.on(u,`input`,C.debounce(e=>{w.preventEvent(e);let t=w.val(u).trim();if(t===``){p();return}h(t)},200))};n.$shadowRoot.querySelectorAll(`aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`).forEach(e=>{w.on(e,`dblclick`,c)});let l=new WeakMap,u=!1,d,f=!1;w.on(n.$shadowRoot,`touchend`,`aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`,(e,t)=>{f=!0,clearTimeout(d),d=void 0,u&&l.has(t)?(u=!1,l.delete(t),c(e)):(d=setTimeout(()=>{u=!1},200),u=!0,l.set(t,e))},{capture:!0}),n.$shadowRoot.appendChild(w.createElement(`style`,{type:`text/css`,textContent:`
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
    		`}))},transformKey(e){if(Array.isArray(e))if(e.length>1){let t=e.sort();return JSON.stringify(t)}else return e[0];else return e},getDynamicValue(e,t){let n=!1,r=t,i=this.addValueChangeListener(e,(e,t)=>{r=t});return{get value(){return n||(n=!0,r=V.getValue(e,t)),r},destory(){V.removeValueChangeListener(i)}}}},me=class e{__href__;get __href(){return this.__href__||globalThis.location.href}__origin={value:void 0,type:`same`};__protocol={value:void 0,type:`same`};__host={value:void 0,type:`same`,hasPort:!1};__pathname={value:void 0,type:`same`};__searchParams={value:new Set};otherInstResultWithOr=!1;constructor(e){typeof e==`string`&&this.href(e)}href(e){return this.__href__=e,this}origin(e){return this.__origin={value:e,type:`same`},this}originStartsWith(e){return this.__origin={value:e,type:`startsWith`},this}originEndsWith(e){return this.__origin={value:e,type:`endsWith`},this}originIncludes(e){return this.__origin={value:e,type:`includes`},this}originMatch(e){return this.__origin={value:e,type:`match`},this}protocol(e){return this.__protocol={value:e,type:`same`},this}protocolStartsWith(e){return this.__protocol={value:e,type:`startsWith`},this}protocolEndsWith(e){return this.__protocol={value:e,type:`endsWith`},this}protocolIncludes(e){return this.__protocol={value:e,type:`includes`},this}protocolMatch(e){return this.__protocol={value:e,type:`match`},this}host(e){return this.__host={value:e,type:`same`,hasPort:!0},this}hostStartsWith(e){return this.__host={value:e,type:`startsWith`,hasPort:!0},this}hostEndsWith(e){return this.__host={value:e,type:`endsWith`,hasPort:!0},this}hostIncludes(e){return this.__host={value:e,type:`includes`,hasPort:!0},this}hostMatch(e){return this.__host={value:e,type:`match`,hasPort:!0},this}hostName(e){return this.__host={value:e,type:`same`,hasPort:!1},this}hostNameStartsWith(e){return this.__host={value:e,type:`startsWith`,hasPort:!1},this}hostNameEndsWith(e){return this.__host={value:e,type:`endsWith`,hasPort:!1},this}hostNameIncludes(e){return this.__host={value:e,type:`includes`,hasPort:!1},this}hostNameMatch(e){return this.__host={value:e,type:`match`,hasPort:!1},this}pathname(e){return this.__pathname={value:e,type:`same`},this}pathnameStartsWith(e){return this.__pathname={value:e,type:`startsWith`},this}pathnameEndsWith(e){return this.__pathname={value:e,type:`endsWith`},this}pathnameIncludes(e){return this.__pathname={value:e,type:`includes`},this}pathnameMatch(e){return this.__pathname={value:e,type:`match`},this}searchParams(e,t){return this.__searchParams.value.add({name:e,value:t}),this}search(e){return this.__searchParams.value.add({name:``,value:e,type:`same`}),this}searchStartsWith(e){return this.__searchParams.value.add({name:``,value:e,type:`startsWith`}),this}searchEndsWith(e){return this.__searchParams.value.add({name:``,value:e,type:`endsWith`}),this}searchIncludes(e){return this.__searchParams.value.add({name:``,value:e,type:`includes`}),this}searchMatch(e){return this.__searchParams.value.add({name:``,value:e,type:`match`}),this}build(){if(!this.__host.value)throw TypeError(`host or hostName should be required`);let e=`${this.__protocol.value||`https`}://${this.__host.value}${this.__pathname.value||`/`}`;if(this.__searchParams.value.size>0){let t=[];this.__searchParams.value.forEach(e=>{if(typeof e.name==`string`){let n=``;(typeof e.value==`string`||typeof e.value==`number`||typeof e.value==`boolean`)&&(n=e.value.toString()),t.push(`${encodeURIComponent(e.name)}=${encodeURIComponent(n)}`)}}),t.length&&(e+=`?${t.join(`&`)}`)}return e}or(t){this.otherInstResultWithOr=this.otherInstResultWithOr||this.r();let n=new e(t);return n.otherInstResultWithOr=this.otherInstResultWithOr,n}r(){if(this.otherInstResultWithOr)return this.otherInstResultWithOr;let e=new URL(this.__href);return[()=>{if(this.__origin.value)if(this.__origin.type===`same`){if(typeof this.__origin.value==`string`)return e.origin===this.__origin.value;throw TypeError(`origin value should be string by type `+this.__origin.type)}else if(this.__origin.type===`startsWith`){if(typeof this.__origin.value==`string`)return e.origin.startsWith(this.__origin.value);throw TypeError(`origin value should be string by type `+this.__origin.type)}else if(this.__origin.type===`endsWith`){if(typeof this.__origin.value==`string`)return e.origin.endsWith(this.__origin.value);throw TypeError(`origin value should be string by type `+this.__origin.type)}else if(this.__origin.type===`includes`){if(typeof this.__origin.value==`string`)return e.origin.includes(this.__origin.value);throw TypeError(`origin value should be string by type `+this.__origin.type)}else if(this.__origin.type===`match`){if(this.__origin.value instanceof RegExp)return this.__origin.value.test(e.origin);if(typeof this.__origin.value==`string`)return e.origin.match(this.__origin.value);throw TypeError(`origin value should be RegExp or string by type `+this.__origin.type)}else throw TypeError(`origin type should be same or startsWith or endsWith or includes or match`);else return!0},()=>{if(this.__protocol.value)if(this.__protocol.type===`same`){if(typeof this.__protocol.value==`string`)return e.protocol===this.__protocol.value;throw TypeError(`protocol value should be string by type `+this.__protocol.type)}else if(this.__protocol.type===`startsWith`){if(typeof this.__protocol.value==`string`)return e.protocol.startsWith(this.__protocol.value);throw TypeError(`protocol value should be string by type `+this.__protocol.type)}else if(this.__protocol.type===`endsWith`){if(typeof this.__protocol.value==`string`)return e.protocol.endsWith(this.__protocol.value);throw TypeError(`protocol value should be string by type `+this.__protocol.type)}else if(this.__protocol.type===`includes`){if(typeof this.__protocol.value==`string`)return e.protocol.includes(this.__protocol.value);throw TypeError(`protocol value should be string by type `+this.__protocol.type)}else if(this.__protocol.type===`match`){if(this.__protocol.value instanceof RegExp)return this.__protocol.value.test(e.protocol);if(typeof this.__protocol.value==`string`)return e.protocol.match(this.__protocol.value);throw TypeError(`protocol value should be RegExp or string by type `+this.__protocol.type)}else throw TypeError(`protocol type should be same,startsWith,endsWith,includes,match`);else return!0},()=>{if(this.__host.value){let t=this.__host.hasPort?e.host:e.hostname;if(this.__host.type===`same`){if(typeof this.__host.value==`string`)return this.__host.value===t;throw TypeError(`host value should be string by type `+this.__host.type)}else if(this.__host.type===`startsWith`){if(typeof this.__host.value==`string`)return t.startsWith(this.__host.value);throw TypeError(`host value should be string by type `+this.__host.type)}else if(this.__host.type===`endsWith`){if(typeof this.__host.value==`string`)return t.endsWith(this.__host.value);throw TypeError(`host value should be string by type `+this.__host.type)}else if(this.__host.type===`includes`){if(typeof this.__host.value==`string`)return t.includes(this.__host.value);throw TypeError(`host value should be string by type `+this.__host.type)}else if(this.__host.type===`match`){if(this.__host.value instanceof RegExp)return this.__host.value.test(t);if(typeof this.__host.value==`string`)return t.match(this.__host.value);throw TypeError(`host value should be RegExp or string by type `+this.__host.type)}else throw TypeError(`host type should be same,startsWith,endsWith,includes,match`)}else return!0},()=>{if(this.__pathname.value)if(this.__pathname.type===`same`){if(typeof this.__pathname.value==`string`)return e.pathname===this.__pathname.value;throw TypeError(`pathname value should be string by type `+this.__pathname.type)}else if(this.__pathname.type===`startsWith`){if(typeof this.__pathname.value==`string`)return e.pathname.startsWith(this.__pathname.value);throw TypeError(`pathname value should be string by type `+this.__pathname.type)}else if(this.__pathname.type===`endsWith`){if(typeof this.__pathname.value==`string`)return e.pathname.endsWith(this.__pathname.value);throw TypeError(`pathname value should be string by type `+this.__pathname.type)}else if(this.__pathname.type===`includes`){if(typeof this.__pathname.value==`string`)return e.pathname.includes(this.__pathname.value);throw TypeError(`pathname value should be string by type `+this.__pathname.type)}else if(this.__pathname.type===`match`){if(this.__pathname.value instanceof RegExp)return this.__pathname.value.test(e.pathname);if(typeof this.__pathname.value==`string`)return e.pathname.match(this.__pathname.value);throw TypeError(`pathname value should be RegExp or string by type `+this.__pathname.type)}else throw TypeError(`pathname type should be same,startsWith,endsWith,includes,match`);else return!0},()=>{let t=!0,n=[];this.__searchParams.value.forEach(e=>{n.push(e)});for(let r=0;r<n.length;r++){let i=n[r];if(i.type)if(i.type===`same`){if(typeof i.value==`string`||typeof i.value==`number`||typeof i.value==`boolean`)return e.search===i.value.toString();throw TypeError(`search value should be string、number、boolean by type `+i.type)}else if(i.type===`startsWith`){if(typeof i.value==`string`||typeof i.value==`number`||typeof i.value==`boolean`)return e.search.startsWith(i.value.toString());throw TypeError(`search value should be string、number、boolean by type `+i.type)}else if(i.type===`endsWith`){if(typeof i.value==`string`||typeof i.value==`number`||typeof i.value==`boolean`)return e.search.endsWith(i.value.toString());throw TypeError(`search value should be string、number、boolean by type `+i.type)}else if(i.type===`includes`){if(typeof i.value==`string`||typeof i.value==`number`||typeof i.value==`boolean`)return e.search.includes(i.value.toString());throw TypeError(`search value should be string、number、boolean by type `+i.type)}else if(i.type===`match`){if(i.value instanceof RegExp)return i.value.test(e.search);if(typeof i.value==`string`||typeof i.value==`number`||typeof i.value==`boolean`)return e.search.match(i.value.toString());throw TypeError(`search value should be RegExp、string、number、boolean by type `+i.type)}else throw TypeError(`search type should be same, startsWith, endsWith, includes, match`);else if(typeof i.name==`string`){let n=i.value;if(n==null||typeof n==`string`||typeof n==`number`||typeof n==`boolean`){if(n=n?.toString(),!e.searchParams.has(i.name,n)){t=!1;break}}else if(n instanceof RegExp){let r=e.searchParams.get(i.name);if(r){if(!n.test(r)){t=!1;break}}else{t=!1;break}}else throw TypeError(`searchParams value should be string, RegExp, boolean, number, null, undefined`)}else if(i.name instanceof RegExp){let n,r;if(e.searchParams.forEach((e,t)=>{!n&&t.match(i.name)&&(n=t,r=e)}),n){let e=i.value;if(e!=null)if(typeof e==`string`||typeof e==`number`||typeof e==`boolean`){if(e=e.toString(),t=e===r,!t)break}else if(e instanceof RegExp)if(r){if(!e.test(r)){t=!1;break}}else{t=!1;break}else throw TypeError(`searchParams value should be string, RegExp, boolean, number, null, undefined`)}else{t=!1;break}}else throw TypeError(`searchParams name should be string or RegExp`)}return t}].every(e=>e())}},H={host(e,t){return H.builder(t).host(e)},hostName(e,t){return H.builder(t).hostName(e)},search(e,t){return H.builder(t).search(e)},seachParams(e,t,n){return H.builder(n).searchParams(e,t)},pathname(e,t){return H.builder(t).pathname(e)},protocol(e,t){return H.builder(t).protocol(e)},builder(e){return new me(e)}},U={isCommunity(){return H.builder().originMatch(/(tencentcloud|huaweicloud).csdn.net/).r()},isBlog(){return H.builder().originIncludes(`blog.csdn.net`).r()},isBlogArticle(){return this.isBlog()&&H.builder().pathnameIncludes(`/article/details/`).r()},isWenKu(){return H.builder().originIncludes(`wenku.csdn.net`).r()},isLink(){return H.hostName(`link.csdn.net`).r()},isSo(){return H.hostName(`so.csdn.net`).r()},isSoCKnow(){return this.isSo()&&H.builder().pathnameStartsWith(`/chat`).or().pathnameStartsWith(`/so/ai`).r()},isDownload(){return H.hostName(`download.csdn.net`).r()}},he={init(){V.execMenuOnce(`csdn-link-jumpRedirect`,()=>{this.jumpRedirect()})},jumpRedirect(){try{let e=new URLSearchParams(window.location.search),t=`target`;if(e.has(t)){let n=e.get(t),r=decodeURIComponent(n);E.success(`跳转链接：${r}`),window.location.href=r}else E.error(`解析跳转的链接失败，原因：搜索参数中没有target参数`)}catch(t){e.default.error(`跳转链接失败：`+t.message)}}},ge={init(){V.execMenuOnce(`m-csdn-link-jumpRedirect`,()=>{he.jumpRedirect()})}},_e=`/* 右下角的 免费赢华为平板xxxx */
.org-main-content .siderbar-box {
  display: none !important;
}
`,ve=`/* 底部免费抽xxx奖品广告 */
.siderbar-box,
/* 加入社区 */
.user-desc {
  display: none !important;
}
`,W={init(){k(ve),V.execMenuOnce(`csdn-community-centerContent`,()=>this.centerContent()),V.execMenuOnce(`csdn-community-shieldCloudDeveloperTaskChallengeEvent`,()=>this.blockCloudDeveloperTaskChallengeEvent()),V.execMenuOnce(`csdn-community-autoExpandContent`,()=>this.autoExpandContent()),V.execMenuOnce(`csdn-community-shieldLeftFloatingButton`,()=>this.blockLeftFloatingButton()),V.execMenuOnce(`csdn-community-blockRightColumn`,()=>this.blockRightColumn()),V.execMenuOnce(`csdn-community-blockBottomCSo`,()=>this.blockBottomCSo()),V.execMenuOnce(`csdn-community-blockRecommendedContentAtTheBottom`,()=>this.blockRecommendedContentAtTheBottom()),V.execMenuOnce(`csdn-community-shieldTheBottomForMoreRecommendations`,()=>this.blockTheBottomForMoreRecommendations())},centerContent(){return E.info(`全文居中`),k(`
      /* 左侧的悬浮工具栏 阅读量 点赞 收藏 评论 分享 */
      .toolbar-wrapper,
      /* 右侧的目录 相关产品 活动日历等 */
      .page-home-right{
        display: none !important;
      }
      /* 正文宽度 */
      .article-detail{
        margin: 0 auto;
      }
      @media (min-width: 768px) and (max-width: 1500px) {
        .article-detail,
        .article-detail .main-content{
          max-width: 88dvw !important;
        }
      }
      @media (min-width: 1500px){
        .article-detail,
        .article-detail .main-content{
          max-width: 1360px !important;
        }
      }
    `)},autoExpandContent(){return E.info(`自动展开全文`),[A(`.article-show-more`),k(`
			/* 自动展开全文 */
			.main-content .user-article{
				height: auto !important;
				overflow: auto !important;
			}
			`)]},blockCloudDeveloperTaskChallengeEvent(){return E.info(`【屏蔽】云开发者任务挑战活动`),A(`.luck-draw-modal-warp`)},blockLeftFloatingButton(){return E.info(`【屏蔽】左侧悬浮按钮，包括当前阅读量、点赞按钮、评论按钮、分享按钮`),A(`.toolbar-wrapper.article-interact-bar`)},blockRightColumn(){return E.info(`【屏蔽】右侧栏，包括相关产品-活动日历-运营活动-热门标签`),A(`.page-home-right.dp-aside-right`)},blockBottomCSo(){return E.info(`【屏蔽】底部C知道`),A(`[class^="pcContainer_"]`)},blockRecommendedContentAtTheBottom(){return E.info(`【屏蔽】推荐内容`),A(`.recommend-card-box`)},blockTheBottomForMoreRecommendations(){return E.info(`【屏蔽】底部更多推荐`),A(`.more-article`)}},ye={init(){k(_e),V.execMenuOnce(`m-csdn-community-autoExpandContent`,()=>W.autoExpandContent()),V.execMenuOnce(`m-csdn-community-blockRecommendedContentAtTheBottom`,()=>W.blockRecommendedContentAtTheBottom()),V.execMenuOnce(`m-csdn-community-blockBottomJoinTheCommunity`,()=>this.blockBottomJoinTheCommunity())},blockBottomJoinTheCommunity(){return E.info(`【屏蔽】底部加入社区`),S.addBlockCSS(`.user-desc`)}},be=`/*.blog_container_aside,
#nav {
	margin-left: -45px;
}
.recommend-right.align-items-stretch.clearfix,
.dl_right_fixed {
	margin-left: 45px;
}*/
`,xe=`.ecommend-item-box.recommend-recommend-box,
.login-mark,
.opt-box.text-center,
.leftPop,
#csdn-shop-window,
.toolbar-advert,
.hide-article-box,
.user-desc.user-desc-fix,
.recommend-card-box,
.more-article,
.article-show-more,
#csdn-toolbar-profile-nologin,
.guide-rr-first,
#recommend-item-box-tow,
/* 发文章得原力分图片提示 */
div.csdn-toolbar-creative-mp,
/* 阅读终点，创作起航，您可以撰写心得或摘录文章要点写篇博文。 */
#toolBarBox div.write-guide-buttom-box,
/* 觉得还不错? 一键收藏 */
ul.toolbox-list div.tool-active-list,
/* 右边按钮组的最上面的创作话题 */
div.csdn-side-toolbar .activity-swiper-box,
.sidetool-writeguide-box .tip-box,
/* 右下角的登录提示 */
.passport-login-tip-container,
/* 全屏双十一红包 */
.csdn-reapck-select,
/* 侧栏的618会员开通 */
.csdn-side-toolbar  .sidecolumn-vip,
/* 右边推荐的推广广告 */
#recommendAdBox,
/* 顶部导航栏的vip推广 */
#csdn-plugin-vip,
/* 顶部导航栏的会员中心的右边的推广图片，如：春招 */
#csdn-toolbar .toolbar-btn a[href*="mall.csdn.net/vip"]>img[src],
/* 侧栏的【点击体验 DeepSeekR1满血版】 */
#sidecolumn-deepseek,
/* 侧栏的【下载APP、公众号、视频号】 */
.csdn-side-toolbar .option-box[data-type="app"],
/* 右偏下的悬浮的 本文章已经生成可运行项目 */
body > .ins-code-runner-btn {
  display: none !important;
}
`,G={init(){V.onceExec(`csdn-blog-blockCSS`,()=>this.addCSS()),V.execMenuOnce(`csdn-blog-shieldTopToolbar`,()=>this.shieldTopToolbar()),V.execMenuOnce(`csdn-blog-shieldLoginDialog`,()=>this.shieldLoginDialog()),V.execMenuOnce(`csdn-blog-shieldLeftBlogContainerAside`,()=>this.shieldLeftBlogContainerAside()),V.execMenuOnce(`csdn-blog-shieldRightDirectoryInformation`,()=>this.shieldRightDirectoryInformation()),V.execMenuOnce(`csdn-blog-shieldBottomFloatingToolbar`,()=>this.shieldBottomFloatingToolbar()),V.execMenuOnce(`csdn-blog-blockBottomAskAIToolbar`,()=>this.blockBottomAskAIToolbar()),V.execMenuOnce(`csdn-blog-blockRunnerBox`,()=>this.blockRunnerBox())},addCSS(){return E.info(`添加屏蔽CSS和功能CSS`),[k(xe),k(be)]},shieldTopToolbar(){return E.info(`【屏蔽】顶部工具栏`),S.addBlockCSS(`#toolbarBox`,`#csdn-toolbar`)},shieldLoginDialog(){return E.info(`【屏蔽】登录弹窗`),S.addBlockCSS(`.passport-login-container`)},shieldLeftBlogContainerAside(){return E.info(`【屏蔽】左侧博客信息`),S.addBlockCSS(`aside.blog_container_aside`)},shieldRightDirectoryInformation(){return E.info(`【屏蔽】右侧目录信息`),S.addBlockCSS(`#rightAsideConcision`,`#rightAside`)},shieldBottomFloatingToolbar(){return E.info(`屏蔽底部悬浮工具栏`),S.addBlockCSS(`#toolBarBox`)},blockBottomAskAIToolbar(){return E.info(`【屏蔽】底部的AI伴读`),S.addBlockCSS(`[class*="Container_"]:has([class^="chatMain"])`)},blockRunnerBox(){return E.info(`【屏蔽】runner-box`),S.addBlockCSS(`.runner-box`)}},Se={init(){G.init(),w.onReady(()=>{V.execMenuOnce(`csdn-blog-removeClipboardHijacking`,()=>{this.removeClipboardHijacking()}),V.execMenuOnce(`csdn-blog-unBlockCopy`,()=>{this.unBlockCopy()}),V.execMenuOnce(`csdn-blog-hookCSDN_loginBox`,()=>{this.hookCSDN_loginBox()})})},removeClipboardHijacking(){E.info(`拦截-复制的小尾巴`),w.remove(`.article-copyright`),b.articleType&&=0,b?.csdn?.copyright?.textData&&(b.csdn.copyright.textData=``),b?.csdn?.copyright?.htmlData&&(b.csdn.copyright.htmlData=``)},unBlockCopy(){E.info(`劫持-禁止复制`),w.on(document,`click`,`.hljs-button`,function(e,t){w.preventEvent(e);let n=t.closest(`.hljs`)||t.closest(`pre`),r=t.parentElement,i=n?.querySelector(`code`)||r.querySelector(`code`)||r,a=i.innerText;E.info(`点击复制按钮复制内容：`+(a.length>8?a.substring(0,8)+`...`:a),i),C.copy(a),t.setAttribute(`data-title`,`复制成功`)},{capture:!0});let e=new C.LockFunction(function(e){let t=e.target;if(t.localName!==`pre`)return;let n=t.querySelector(`.hljs-button`);n&&n.setAttribute(`data-title`,`复制`)});w.on(document,[`mouseenter`,`mouseleave`],function(t){e.run(t)},{capture:!0}),w.waitNode(`#content_views`).then(e=>{b.$&&b.$(`#content_views`)?.unbind(`copy`),w.on(e,`copy`,function(e){w.preventEvent(e);let t=b.getSelection()?.toString();return E.info(`Ctrl+C复制内容：`+(t.length>8?t.substring(0,8)+`...`:t)),C.copy(t),!1},{capture:!0})}),w.waitNode(`.hljs-button`).then(()=>{setTimeout(()=>{ce(`.hljs-button`).forEach(e=>{e.removeAttribute(`onclick`),e.removeAttribute(`data-report-click`),e.setAttribute(`data-title`,`复制`)})},250)})},hookCSDN_loginBox(){C.waitProperty(()=>typeof b.csdn?.loginBox?.show==`function`?b:null,`csdn`).then(()=>{typeof b.csdn?.loginBox?.show==`function`&&(E.success(`成功劫持 window.csdn.loginBox.show`),b.csdn.loginBox.show=function(){E.success(`成功阻止调用loginBox.show`)}),typeof b.csdn?.loginBox?.showAutoTip==`function`&&(b.csdn.loginBox.showAutoTip=function(){E.success(`成功阻止调用loginBox.showAutoTip`)}),typeof b.csdn?.loginBox?.showTip==`function`&&(b.csdn.loginBox.showTip=function(){E.success(`成功阻止调用loginBox.showTip`)})})}},K={waitRemove(...e){e.forEach(e=>{w.waitNodeList(e).then(e=>{e.forEach(e=>e.remove())})})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]==`string`&&e[0].trim()===``))return e.forEach(e=>{Array.isArray(e)?t=t.concat(e):t.push(e)}),k(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){let t=typeof m==`function`?m(e.keyName):``;typeof t==`string`&&t?k(t):K.loadStyleLink(e.url)},async loadStyleLink(e){let t=document.createElement(`link`);t.rel=`stylesheet`,t.type=`text/css`,t.href=e,w.onReady(()=>{document.head.appendChild(t)})},async loadScript(e){let t=document.createElement(`script`);return t.src=e,new Promise(e=>{t.onload=()=>{e(null)},(document.head||document.documentElement).appendChild(t)})},fixUrl(e){return e=e.trim(),e.match(/^http(s|):\/\//i)?e:(e.startsWith(`/`)||(e+=`/`),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith(`https://`)||!e.startsWith(`http://`))return e;let t=new URL(e);return t.protocol=`https:`,t.toString()}},Ce={init(){V.execMenuOnce(`m-csdn-blog-blockBottomArticle`,()=>this.blockBottomArticle()),V.execMenuOnce(`m-csdn-blog-removeResourceArticle`,()=>this.removeResourceArticle()),V.execMenuOnce(`m-csdn-blog-openNewTab`,()=>this.openNewTab()),w.onReady(()=>{V.execMenuOnce(`m-csdn-blog-refactoringRecommendation`,e=>this.refactoringRecommendation())})},blockBottomArticle(){return E.info(`【屏蔽】底部文章`),K.addBlockCSS(`#recommend`)},async refactoringRecommendation(){let e=new C.LockFunction(function(){ce(`.container-fluid`).forEach(e=>{let t=``,n=``,r=``,i=``;if(e.hasAttribute(`data-url`)){if(t=e.getAttribute(`data-url`),n=e.querySelector(`.recommend_title div.left`)?.innerHTML,!e.querySelector(`.text`))return;r=e.querySelector(`.text`)?.innerHTML,e.querySelectorAll(`.recommend-img`).length&&e.querySelectorAll(`.recommend-img`).forEach(e=>{i+=e.innerHTML})}else t=e.querySelector(`a[data-type]`).getAttribute(`href`),n=e.querySelector(`.recommend_title div.left`).innerHTML,r=e.querySelector(`.text`).innerHTML;let a=new URL(t);a.host===`download.csdn.net`||a.host===`www.iteye.com`&&a.pathname.match(/^\/resource/gi)?n=`<div class="component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>`+n:a.origin.match(/edu.csdn.net/gi)&&(n=`<div class="component-box"><a class="csdn-edu-title" href="javascript:;">CSDN学院</a></div>`+n),e.setAttribute(`class`,`GM-csdn-dl`),e.setAttribute(`data-url`,t),e.innerHTML=`<div class="GM-csdn-title"><div class="left">${n}</div></div><div class="GM-csdn-content">${r}</div><div class="GM-csdn-img">${i}</div>`,e.addEventListener(`click`,function(){window.location.href=t})})},50),t=await w.waitNode(`#recommend`);E.info(`重构底部推荐`);let n=C.mutationObserver(t,{config:{childList:!0,subtree:!0,attributes:!0},immediate:!0,callback:()=>{e.run()}});return[()=>{n.disconnect()}]},removeResourceArticle(){return E.info(`移除资源下载的文章`),K.addBlockCSS(`.container-fluid:has(a[href*="https://download.csdn.net/"])`,`.container-fluid[data-url*="https://download.csdn.net/"]`,`.GM-csdn-dl[data-url*="https://download.csdn.net/"]`)},openNewTab(){return E.info(`新标签页打开`),w.on(document,`click`,[`.container-fluid`,`.GM-csdn-dl`],(t,n)=>{w.preventEvent(t);let r=n.getAttribute(`data-url`);typeof r==`string`?(E.info(`新标签页打开：${r}`),window.open(r,`_blank`)):e.default.error(`未获取到data-url属性`)},{capture:!0}).off}},q={isSuccessResponse(e){return e==null?!1:(typeof e==`string`&&(e=C.toJSON(e)),e?.code===200)}},J={async folderListWithCheck(t){let n=await O.get(`https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/folderListWithCheck`,{data:{url:t},fetch:!0,allowInterceptConfig:!1,headers:{"User-Agent":C.getRandomPCUA()}});E.info(n);let r=C.toJSON(n.data.responseText);if(!n.status||!q.isSuccessResponse(n.data.responseText)){E.error(`获取收藏夹信息失败，请求异常`),typeof r.msg==`string`?e.default.error(r.msg):e.default.error(`获取收藏夹信息失败`);return}return r.data.result},async addFavoriteInFolds(t){let n=await O.post(`https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/addFavoriteInFolds`,{fetch:!0,data:t,headers:{"Content-Type":`application/json`,"User-Agent":C.getRandomPCUA()},allowInterceptConfig:!1});if(E.info(n),!n.status||!q.isSuccessResponse(n.data.responseText)){E.error(`添加收藏失败，请求异常`,n),e.default.error(`添加收藏失败，请求异常`);return}return!0},async checkFavoriteByUrl(t){let n=await O.get(`https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/checkFavoriteByUrl`,{data:{url:t},fetch:!0,allowInterceptConfig:!1,headers:{"User-Agent":C.getRandomPCUA()}});if(E.info(n),!n.status||!q.isSuccessResponse(n.data.responseText)){E.error(`检查收藏夹状态失败，请求异常`),e.default.error(`检查收藏夹状态失败，请求异常`);return}return C.toJSON(n.data.responseText).data},async createFolder(t){let n=await O.post(`https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/createFolder`,{data:t,fetch:!0,headers:{Accept:`application/json, text/javascript, */*; q=0.01`,"Content-Type":`application/json`,"User-Agent":C.getRandomPCUA()},allowInterceptConfig:!1});if(E.info(n),!n.status||!q.isSuccessResponse(n.data.responseText)){e.default.error(`创建收藏夹失败`);return}return C.toJSON(n.data.responseText).data}},we={init(){V.execMenuOnce(`m-csdn-blog-blockBottomToolbar`,()=>this.blockBottomToolbar()),V.execMenuOnce(`m-csdn-blog-bottom-toolbar-always-bottom`,()=>this.bottomToolBarAlwaysShow()),w.onReady(()=>{V.execMenuOnce(`m-csdn-blog-bottom-toolbar-optimizationCollectButton`,()=>this.optimizationCollectButton())})},blockBottomToolbar(){return E.info(`【屏蔽】底部工具栏`),K.addBlockCSS(`#operate`)},bottomToolBarAlwaysShow(){return E.info(`底部工具栏常驻`),k(`
    #operate {
        bottom: 0 !important;
    }
    `)},async optimizationCollectButton(){E.info(`优化收藏按钮`);let t=await w.waitNode(`#operate .collect-btn`,1e4);if(!t)return;let n=w.on(t,`click`,async n=>{w.preventEvent(n);let r=t.querySelector(`.collect`),i=t.querySelector(`.uncollect`),a=await J.folderListWithCheck(window.location.origin+window.location.pathname);if(!a)return;let o=[];a.forEach(e=>{e.IsFavorite&&o.push(e.ID)});let s=t=>{let n=t.ID,a=w.createElement(`li`,{className:`csdn-collection-item`,innerHTML:`
                <div class="csdn-collection-item_left">
                    <div class="csdn-collection-item_title">
                        <span class="title-m">${t.Name}</span>
                    </div>
                    <span class="csdn-collection-item_ext">
                        <span class="csdn-collection-item_length">${t.FavoriteNum}条内容</span>
                        <span class="dot">・</span>
                        <span class="csdn-collection-controls">${t.IsPrivate?`私密`:`公开`}</span>
                    </span>
                </div>
                <span class="collect-btn">${t.IsFavorite?`已收藏`:`收藏`}</span>
            `},{"data-is-collect":t.IsFavorite});a.querySelector(`.title-m`);let s=a.querySelector(`.csdn-collection-item_length`);a.querySelector(`.csdn-collection-controls`);let c=a.querySelector(`.collect-btn`);return w.on(c,`click`,async l=>{let u=b.articleDetailUrl;u??=window.location.origin+window.location.pathname;let d=b.articleId;if(d==null){E.error(`获取文章ID失败`),e.default.error(`获取文章ID失败`);return}let f=b.username;if(f==null){E.error(`获取文章作者失败`),e.default.error(`获取文章作者失败`);return}let p=b.articleTitle;if(p??=document.title.replace(/-CSDN博客$/,``),p==null){E.error(`获取文章标题失败`),e.default.error(`获取文章标题失败`);return}let m=b.articleDesc;if(m==null){let e=j(`meta[name='description']`);e&&(m=e.getAttribute(`content`))}if(m==null){E.error(`获取文章描述失败`),e.default.error(`获取文章描述失败`);return}let h=[...o],g=e.default.loading(`处理中...`);try{let l=await J.checkFavoriteByUrl(u);if(l==null)return;E.info(n,l);let _=!l[n];if(_?(E.info(`添加收藏`),h.push(n)):(E.info(`取消收藏`),h.splice(h.indexOf(n),1)),!await J.addFavoriteInFolds({author:f,url:u,source:`blog`,sourceId:d,title:p,description:m,fromType:`PC`,username:t.Username,folderIdList:h}))return;let v=await J.checkFavoriteByUrl(u);if(v==null)return;E.info(n,v),a.setAttribute(`data-is-collect`,(!!v[n]).toString()),_?v[n]?(E.success(`收藏成功`),e.default.success(`收藏成功`),w.text(c,`已收藏`),o.includes(n)||o.push(n),t.FavoriteNum++):(E.error(`收藏失败`,v,n),e.default.error(`收藏失败`)):v[n]?(E.error(`取消收藏失败`,v,n),e.default.error(`取消收藏失败`)):(E.success(`取消收藏成功`),e.default.success(`取消收藏成功`),w.text(c,`收藏`),o.includes(n)&&o.splice(o.indexOf(n),1),t.FavoriteNum--),w.text(s,`${t.FavoriteNum}条内容`),Object.values(v).find(e=>e)?(w.show(r,!1),w.hide(i,!1)):(w.show(i,!1),w.hide(r,!1)),g.close()}catch(e){E.error(e)}finally{g.close()}}),a},c=T.alert({title:{text:`添加收藏夹`,position:`center`},content:{text:`
									<ul class="csdn-collection-items"></ul>
								`,html:!0},btn:{ok:{enable:!1}},width:R.setting.width,height:R.setting.height,drag:!0,mask:{enable:!0},style:`
            .csdn-collection-items{
                --font-size: 16px;
            }
            .csdn-collection-items{
                font-size: var(--font-size);
                font-weight: 400;
                padding: 0 20px 0;
                margin: 24px 0;
                overflow: auto;
                -ms-scroll-chaining: none;
                overscroll-behavior: contain;
            }
            .csdn-collection-item{
                width: 100%;
                height: 62px;
                line-height: normal;
                position: relative;
                padding: 8px 12px;
                cursor: pointer;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between;
                border-bottom: 1px solid #f0f0f5;
            }
            .csdn-collection-item_left{
                line-height: normal;
                flex: 1;
                overflow: hidden;
            }
            .csdn-collection-item_title{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 100%;
            }
            .csdn-collection-item_ext{
                font-weight: 400;
                color: #999aaa;
                line-height: 17px;
                margin-top: 8px;
                font-size: .8em;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 100%;
                display: inline-flex;
                align-items: center;
            }
            .collect-btn{
                color: #555666;
                font-size: var(--font-size);
                width: 64px;
                height: 30px;
                line-height: 30px;
                border-radius: 20px;
                text-align: center;
                -webkit-transition: all .2s;
                transition: all .2s;
                border: 1px solid #ccccd8;
            }
            .csdn-collection-item[data-is-collect="true"] .collect-btn{
                color: #999aaa;
                background: rgba(232, 232, 237, .3);
                border: 1px solid #e8e8ed;
            }
            /* .csdn-collection-item:hover{
                background: #f5f6f7;
            }
            .csdn-collection-item:hover .collect-btn{
                border: 1px solid #555666;
            } */
        `}).$shadowRoot.querySelector(`.csdn-collection-items`);a.forEach(e=>{let t=s(e);c.appendChild(t)})},{capture:!0});return[()=>{n.off()}]}},Te={init(){V.execMenuOnce(`m-csdn-blog-blockComment`,()=>this.blockComment()),V.execMenuOnce(`m-csdn-blog-notLimitCommentMaxHeight`,()=>this.notLimitCommentMaxHeight())},blockComment(){return E.info(`【屏蔽】评论区`),K.addBlockCSS(`#comment`)},notLimitCommentMaxHeight(){return E.info(`不限制评论区的最大高度`),k(`
        #comment{
          max-height: none !important;
        }
      `)}},Ee={init(){Te.init(),Ce.init(),we.init(),V.execMenuOnce(`m-csdn-blog-blockTopToolbar`,()=>this.blockTopToolbar()),V.execMenuOnce(`m-csdn-blog-removeAds`,()=>this.removeAds()),V.execMenuOnce(`m-csdn-blog-allowSelectText`,()=>this.allowSelectText()),V.execMenuOnce(`m-csdn-blog-autoExpandContent`,()=>this.autoExpandContent()),V.execMenuOnce(`m-csdn-blog-notLimitCodePreMaxHeight`,()=>this.notLimitCodePreMaxHeight()),w.onReady(()=>{V.execMenuOnce(`m-csdn-blog-unBlockCopy`,()=>{Se.unBlockCopy()})})},blockTopToolbar(){return E.info(`屏蔽顶部Toolbar`),[S.addBlockCSS(`#csdn-toolbar`),k(`
			/* 内容顶部要归位 */
			body #main,
			.margin_sides{
			  margin-top: unset !important;
			  padding-top: unset !important;
			}
			#article .article_title{
			  margin-top: .32rem !important;
			  padding-top: unset !important;
			}
			`)]},removeAds(){return E.info(`去除广告`),[S.waitRemove(`.passport-login-container`),S.waitRemove(`.btn_open_app_prompt_box.detail-open-removed`),S.waitRemove(`.add-firstAd`),S.waitRemove(`div.feed-Sign-weixin`),S.waitRemove(`div.ios-shadowbox`)]},allowSelectText(){return E.info(`允许选择内容`),k(`
    #content_views,
    #content_views pre,
    #content_views pre code{
      webkit-touch-callout: text !important;
      -webkit-user-select: text !important;
      -khtml-user-select: text !important;
      -moz-user-select: text !important;
      -ms-user-select: text !important;
      user-select: text !important;
    }
    `)},autoExpandContent(){return E.info(`自动展开`),k(`
    #content_views pre.set-code-hide,
    .article_content{
      height: 100% !important;
      overflow: auto !important;
    }
    `)},notLimitCodePreMaxHeight(){return E.info(`不限制代码块的最大高度`),k(`
    pre{
        max-height: unset !important;
    }
    `)}},De=`/* 右下角的买一年送3个月的广告图标 */
.blind_box {
  display: none !important;
}
`,Oe={init(){k(De),V.execMenuOnce(`m-csdn-wenku-shieldBottomToolbar`,()=>this.shieldBottomToolbar())},shieldBottomToolbar(){return E.info(`【屏蔽】底部工具栏`),S.addBlockCSS(`.page-container > div.btn`)}},ke=`/* 右下角悬浮图标 买1年送3个月 */
.page-container .blind_box,
/* 底部工具栏右边的 开会员按钮（低至xx元/次） */
.page-container .btn .ml-12,
/* 登录弹窗 */
.passport-login-container,
/* 通用广告className匹配 */
.ads {
  display: none !important;
}
`,Ae={init(){V.execMenuOnce(`m-csdn-download-removeAds`,()=>k(ke)),V.execMenuOnce(`m-csdn-download-automaticallyExpandResourceIntroduction`,()=>this.automaticallyExpandResourceIntroduction())},automaticallyExpandResourceIntroduction(){return E.info(`自动展开资源介绍`),[S.addBlockCSS(`label.unfold-font`),k(`
			.resource-desc{
				max-height: unset !important;
				overflow: unset !important;
			}
			`)]}},je=`.view_comment_box,
.weixin-shadowbox.wap-shadowbox,
.feed-Sign-span,
.user-desc.user-desc-fix,
.comment_read_more_box,
#content_views pre.set-code-hide .hide-preCode-box,
/* 登录弹窗 */
.passport-login-container,
.hljs-button[data-title='登录后复制'],
.article-show-more,
#treeSkill,
div.btn_open_app_prompt_div,
div.readall_box,
div.aside-header-fixed,
div.feed-Sign-weixin,
div.ios-shadowbox,
/* 底部评论工具栏的抢沙发图片 */
.comment-sofa-flag {
  display: none !important;
}
`,Me=`#mainBox {
  width: auto;
}
.user-desc.user-desc-fix {
  height: auto !important;
  overflow: auto !important;
}
.component-box .praise {
  background: #ff5722;
  border-radius: 5px;
  padding: 0px 8px;
  height: auto;
}
.component-box .praise,
.component-box .share {
  color: #fff;
}
.component-box a {
  display: inline-block;
  font-size: xx-small;
}
.component-box {
  display: inline;
  margin: 0;
  position: relative;
  white-space: nowrap;
}
.csdn-edu-title {
  background: #4d6de1;
  border-radius: 5px;
  padding: 0px 8px;
  height: auto;
  color: #fff !important;
}

.GM-csdn-dl {
  padding: 0.24rem 0.32rem;
  width: 100%;
  justify-content: space-between;
  -webkit-box-pack: justify;
  border-bottom: 1px solid #f5f6f7 !important;
}
.GM-csdn-title {
  font-size: 0.3rem;
  color: #222226;
  letter-spacing: 0;
  line-height: 0.44rem;
  font-weight: 600;
  /*max-height: .88rem;*/
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.GM-csdn-title a {
  word-break: break-all;
  color: #222226;
  font-weight: 600;
}
.GM-csdn-title em,
.GM-csdn-content em {
  font-style: normal;
  color: #fc5531;
}
.GM-csdn-content {
  /*max-width: 5.58rem;*/
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: #555666;
  font-size: 0.24rem;
  line-height: 0.34rem;
  max-height: 0.34rem;
  word-break: break-all;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-top: 0.16rem;
}
.GM-csdn-img img {
  width: 2.18rem;
  height: 1.58rem;
  /*margin-left: .16rem*/
}
`,Ne={init(){V.onceExec(`m-csdn-blog-removeAds`,()=>this.addCSS()),V.execMenuOnce(`m-csdn-blog-blockBottomAskAIToolbar`,()=>G.blockBottomAskAIToolbar())},addCSS(){return[k(je),k(Me)]}},Pe={init(){Ne.init()}},Fe={init(){U.isLink()?(E.info(`Router: 中转链接`),ge.init()):U.isCommunity()?(E.info(`Router: 社区`),ye.init()):U.isBlog()?(E.info(`Router: 博客`),Pe.init(),U.isBlogArticle()&&(E.info(`Router: 文章`),Ee.init())):U.isWenKu()?(E.info(`Router: 文库`),Oe.init()):U.isDownload()?(E.info(`Router: 资源下载`),Ae.init()):E.error(`暂未适配，请反馈开发者：`+globalThis.location.href)}},Ie=`#chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid {
  max-height: unset !important;
  height: auto !important;
  overflow: auto !important;
}

.forbid {
  user-select: text !important;
}
`,Le=`/* wenku顶部横幅 */
#app > div > div.main.pb-32 > div > div.top-bar,
/* 底部展开全文 */
#chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid > div.open,
/* 全屏红包雨 */
#csdn-redpack {
  display: none !important;
}
`,Re={init(){k(Ie),k(Le),V.execMenuOnce(`csdn-wenku-shieldResourceRecommend`,()=>this.shieldResourceRecommend()),V.execMenuOnce(`csdn-wenku-shieldRightUserInfo`,()=>this.shieldRightUserInfo()),V.execMenuOnce(`csdn-wenku-shieldRightToolBar`,()=>this.shieldRightToolBar())},shieldResourceRecommend(){return E.info(`【屏蔽】资源推荐`),S.addBlockCSS(`#recommend`)},shieldRightUserInfo(){return E.info(`【屏蔽】右侧用户信息`),S.addBlockCSS(`.layout-right`)},shieldRightToolBar(){return E.info(`【屏蔽】右侧悬浮工具栏`),S.addBlockCSS(`.csdn-side-toolbar`)}},ze={init(){V.execMenuOnce(`csdn-blog-shieldBottomSkillTree`,()=>this.shieldBottomSkillTree()),V.execMenuOnce(`csdn-blog-shieldArticleSearchTip`,()=>this.shieldArticleSearchTip()),V.execMenuOnce(`csdn-blog-blockGitCodeLinkCard`,()=>this.blockGitCodeLinkCard())},shieldBottomSkillTree(){return E.info(`【屏蔽】底部xx技能树`),S.addBlockCSS(`#treeSkill`)},shieldArticleSearchTip(){return E.info(`【屏蔽】选中文字悬浮栏`),S.addBlockCSS(`#articleSearchTip`)},blockGitCodeLinkCard(){return E.info(`【屏蔽】gitcode链接卡片`),S.addBlockCSS(`a.has-card[href*="gitcode.com"]`,`.t2-card-container`)}},Be=`.main_father {
  justify-content: center;
}
#mainBox main {
  width: inherit !important;
}
/* 当文章向下滚动时，触发左侧信息悬浮 */
aside.blog_container_aside[style*="position: fixed;"] {
  display: none !important;
}

@media (min-width: 1320px) and (max-width: 1380px) {
  .nodata .container {
    width: 900px !important;
  }

  .nodata .container main {
    width: 900px;
  }

  .nodata .container main #pcCommentBox pre > ol.hljs-ln {
    width: 490px !important;
  }

  .nodata .container main .articleConDownSource {
    width: 500px;
  }
}

@media screen and (max-width: 1320px) {
  .nodata .container {
    width: 760px !important;
  }

  .nodata .container main {
    width: 760px;
  }

  .nodata .container main #pcCommentBox pre > ol.hljs-ln {
    width: 490px !important;
  }

  .nodata .container main .toolbox-list .tool-reward {
    display: none;
  }

  .nodata .container main .more-toolbox-new .toolbox-left .profile-box .profile-name {
    max-width: 128px;
  }

  .nodata .container main .articleConDownSource {
    width: 420px;
  }
}

@media screen and (min-width: 1380px) {
  .nodata .container {
    width: 1010px !important;
  }

  .nodata .container main {
    width: 1010px;
  }

  .nodata .container main #pcCommentBox pre > ol.hljs-ln {
    width: 490px !important;
  }

  .nodata .container main .articleConDownSource {
    width: 560px;
  }
}

@media (min-width: 1550px) and (max-width: 1700px) {
  .nodata .container {
    width: 820px !important;
  }

  .nodata .container main {
    width: 820px;
  }

  .nodata .container main #pcCommentBox pre > ol.hljs-ln {
    width: 690px !important;
  }

  .nodata .container main .articleConDownSource {
    width: 500px;
  }
}

@media screen and (min-width: 1700px) {
  .nodata .container {
    width: 1010px !important;
  }

  .nodata .container main {
    width: 1010px;
  }

  .nodata .container main #pcCommentBox pre > ol.hljs-ln {
    width: 690px !important;
  }

  .nodata .container main .articleConDownSource {
    width: 560px;
  }
}
`,Ve={init(){V.execMenuOnce(`csdn-blog-blockComment`,()=>this.blockComment()),w.onReady(()=>{V.execMenuOnce(`csdn-blog-restoreComments`,()=>{this.restoreComments()})})},blockComment(){return E.info(`【屏蔽】评论区`),K.addBlockCSS(`#pcCommentBox`)},restoreComments(){E.info(`恢复评论到正确位置-第一条评论`),w.waitNode(`.first-recommend-box`).then(e=>{let t=j(`.recommend-box.insert-baidu-box.recommend-box-style`);t.insertBefore(e,t.firstChild)}),E.info(`恢复评论到正确位置-第二条评论`),w.waitNode(`.second-recommend-box`).then(e=>{let t=j(`.recommend-box.insert-baidu-box.recommend-box-style`);t.insertBefore(e,t.firstChild)})}},He={init(){V.execMenuOnce(`csdn-blog-blockBottomRecommendArticle`,()=>this.blockBottomRecommendArticle()),V.execMenuOnce(`csdn-blog-identityCSDNDownload`,()=>this.identityCSDNDownload()),V.execMenuOnce(`csdn-blog-removeResourceDownloadArticle`,()=>this.removeResourceDownloadArticle())},blockBottomRecommendArticle(){return E.info(`【屏蔽】底部文章`),K.addBlockCSS(`main > div.recommend-box`)},identityCSDNDownload(){return E.info(`标识CSDN下载的链接`),k(`
        .recommend-item-box[data-url*='https://download.csdn.net/'] .content-box{
            border: 2px solid red;
        }
    `)},removeResourceDownloadArticle(){return E.info(`移除资源下载的文章`),K.addBlockCSS(`.recommend-item-box[data-url*='https://download.csdn.net/']`)}},Ue={init(){V.exec(`csdn-blog-rightToolbarEnable`,()=>this.shieldRightToolbar(),e=>!V.getValue(e[0]),!0),V.execMenuOnce(`csdn-blog-rightToolbarCreativeCenter`,()=>this.shieldCreativeCenter()),V.execMenuOnce(`csdn-blog-rightToolbarShowOrSidebar`,()=>this.shieldShowOrSidebar()),V.execMenuOnce(`csdn-blog-rightToolbarBeginnerGuidance`,()=>this.shieldBeginnerGuidance()),V.execMenuOnce(`csdn-blog-rightToolbarCustomerService`,()=>this.shieldCustomerService()),V.execMenuOnce(`csdn-blog-rightToolbarReport`,()=>this.shieldReport()),V.execMenuOnce(`csdn-blog-rightToolbarBackToTop`,()=>this.shieldBackToTop())},shieldRightToolbar(){return E.info(`启用/关闭 右侧工具栏`),K.addBlockCSS(`div.csdn-side-toolbar`,`.article-aside-container`)},shieldCreativeCenter(){return E.info(`【屏蔽】创作中心`),K.addBlockCSS(`.csdn-side-toolbar .sidetool-writeguide-box`)},shieldShowOrSidebar(){return E.info(`【屏蔽】显示/隐藏侧栏`),K.addBlockCSS(`.csdn-side-toolbar a.sidecolumn`)},shieldBeginnerGuidance(){return E.info(`【屏蔽】新手引导`),K.addBlockCSS(`.csdn-side-toolbar a.option-box[data-type="guide"]`)},shieldCustomerService(){return E.info(`【屏蔽】客服`),K.addBlockCSS(`.csdn-side-toolbar a.option-box[data-type="cs"]`)},shieldReport(){return E.info(`【屏蔽】举报`),K.addBlockCSS(`.csdn-side-toolbar a.option-box[data-type="report"]`)},shieldBackToTop(){return E.info(`【屏蔽】返回顶部`),K.addBlockCSS(`.csdn-side-toolbar a.option-box[data-type="gotop"]`)}},We={init(){Ue.init(),V.execMenuOnce([`csdn-blog-coverRightToolOffSet`,`csdn-blog-rightToolbarTopOffset`,`csdn-blog-rightToolbarRightOffset`],e=>{if(e.value[0])return this.initRightToolbarOffset(e.value[1],e.value[2])}),w.onReady(()=>{V.execMenuOnce(`csdn-blog-addGotoRecommandButton`,()=>{this.addGotoRecommandButton()})})},addGotoRecommandButton(){E.info(`【添加】前往评论按钮，在返回顶部的上面`);let e=document.createElement(`a`);e.className=`option-box`,e.setAttribute(`data-type`,`gorecommand`),e.innerHTML=`
		<img src="https://g.csdnimg.cn/side-toolbar/3.6/images/customer.png" alt="" srcset="">
		<span class="show-txt" style="opacity:100;">前往<br>评论</span>
		`,e.addEventListener(`click`,function(){let e=document.querySelector(`#toolBarBox`);if(!e||!e.getClientRects().length){let t=j(`#pcCommentBox`);if(t&&t.getClientRects().length)e=t;else{E.error(`评论区处于隐藏状态`);return}}E.info(`滚动到评论`);let t=e.getBoundingClientRect().top+window.scrollY,n=document.querySelector(`#csdn-toolbar`),r=window.getComputedStyle(n),i=n.clientHeight-parseFloat(r.paddingTop)-parseFloat(r.paddingBottom);window.scrollTo({top:t-i-8,left:0,behavior:`smooth`})}),w.waitNode(`.csdn-side-toolbar`).then(()=>{let t=document.querySelector(`.csdn-side-toolbar a:nth-last-child(2)`);t.parentElement.insertBefore(e,t.nextSibling)})},async initRightToolbarOffset(e,t){return E.info(`初始化右侧工具栏的偏移（top、right）`),k(`
    .csdn-side-toolbar{
      left: unset !important;
      top: ${e}px !important;
      right: ${t}px !important;
    }
    `)}},Ge={init(){V.execMenuOnce(`csdn-blog-ai-blockRightToolbar`,()=>this.blockRightToolbar()),V.execMenuOnce(`csdn-blog-ai-blockRightToolbarCatalogue`,()=>this.blockRightToolbarCatalogue()),V.execMenuOnce(`csdn-blog-ai-blockRightToolbarLike`,()=>this.blockRightToolbarLike()),V.execMenuOnce(`csdn-blog-ai-blockRightToolbarComment`,()=>this.blockRightToolbarComment()),V.execMenuOnce(`csdn-blog-ai-blockRightToolbarCollect`,()=>this.blockRightToolbarCollect()),V.execMenuOnce(`csdn-blog-ai-blockRightToolbarShare`,()=>this.blockRightToolbarShare()),V.execMenuOnce(`csdn-blog-ai-blockRightToolbarMore`,()=>this.blockRightToolbarMore())},blockRightToolbar(){return E.info(`【屏蔽】右侧工具栏`),K.addBlockCSS(`.article-aside-container`)},blockRightToolbarCatalogue(){return E.info(`【屏蔽】目录`),K.addBlockCSS(`.article-aside-container .sidebar-item.groupfile`)},blockRightToolbarLike(){return E.info(`【屏蔽】点赞`),K.addBlockCSS(`.article-aside-container .sidebar-item.islike`)},blockRightToolbarComment(){return E.info(`【屏蔽】评论`),K.addBlockCSS(`.article-aside-container .sidebar-item.go-side-comment`)},blockRightToolbarCollect(){return E.info(`【屏蔽】收藏`),K.addBlockCSS(`.article-aside-container .sidebar-item#sidebar-collect`)},blockRightToolbarShare(){return E.info(`【屏蔽】分享`),K.addBlockCSS(`.article-aside-container .sidebar-item#tool-share`)},blockRightToolbarMore(){return E.info(`【屏蔽】...`),K.addBlockCSS(`.article-aside-container .sidebar-item#sidebar-more`)}},Ke={init(){Ge.init(),V.execMenuOnce([`csdn-blog-ai-coverRightToolOffSet`,`csdn-blog-ai-coverRightToolOffSet-top`,`csdn-blog-ai-coverRightToolOffSet-right`],e=>{if(e.value[0])return this.coverRightToolOffSet(e.value[1],e.value[2])})},async coverRightToolOffSet(e,t){return E.info(`覆盖右侧工具栏的偏移（top、right）`),k(`
    #mainBox .article-aside-container{
      left: unset !important;
      top: ${e}px !important;
      right: ${t}px !important;
    }
    `)}},qe={init(){ze.init(),Ve.init(),He.init(),We.init(),Ke.init(),V.execMenuOnce(`csdn-blog-articleCenter`,()=>this.articleCenter()),V.execMenuOnce(`csdn-blog-autoExpandContent`,()=>this.autoExpandContent()),V.execMenuOnce(`csdn-blog-autoExpandCodeContent`,()=>this.autoExpandCodeContent()),V.execMenuOnce(`csdn-blog-allowSelectContent`,()=>this.allowSelectContent()),w.onReady(()=>{V.execMenuOnce(`csdn-blog-clickPreCodeAutomatically`,()=>{this.clickPreCodeAutomatically()})})},clickPreCodeAutomatically(){E.info(`点击代码块自动展开`),document.addEventListener(`click`,function(e){let t=e.target;t.localName===`pre`&&(t.style.setProperty(`height`,`auto`),t.querySelector(`.hide-preCode-box`)?.remove())})},articleCenter(){E.info(`全文居中`);let e=[k(Be)];return e.push(G.shieldRightDirectoryInformation()),e.push(k(`
      #mainBox {
        margin-right: 0px;
      }
      `)),e.push(G.shieldLeftBlogContainerAside()),e.push(k(`
      #mainBox {
        margin-left: 0px;
      }`)),e.push(k(`
    html body .main_father #mainBox{
      padding-right: 0px !important;
    }
    .article-aside-container{
      left: unset !important;
      right: 150px !important;
    }
    `)),e},autoExpandCodeContent(){return E.info(`自动展开代码块`),[S.addBlockCSS(`pre.set-code-hide .hide-preCode-box`),k(`
			pre.set-code-hide{
				height: auto !important;
			}
			/* 自动展开代码块 */
			.comment-list-box,
			main div.blog-content-box pre {
				max-height: none !important;
			}
        `)]},autoExpandContent(){return E.info(`自动展开全文`),k(`
		/* 自动展开全文 */
		#article_content,
		.user-article.user-article-hide {
			height: auto !important;
			overflow: auto !important;
		}
        `)},allowSelectContent(){return E.info(`允许选择内容`),k(`
		#content_views,
		#content_views pre,
		#content_views pre code {
			user-select: text !important;
		}
		`)}},Je=`/* 红包雨 */
#csdn-redpack,
/* 顶部 购会员横幅 */
.page-container .top-bar,
/* 底部 购会员横幅 */
.page-container .fix-bottom-bar {
  display: none !important;
}
`,Ye={init(){k(Je),k(``)}},Xe=`/* 顶部工具栏右边的 会员 */
#csdn-toolbar .toolbar-btn > a[href*="mall.csdn.net/vip"],
/* 顶部工具栏右边的 VIP抢千元豪礼 */
#csdn-toolbar a.toolbar-btn[href*="mall.csdn.net/vip"] {
  display: none !important;
}
`,Ze={init(){k(Xe),U.isLink()?(E.info(`Router: 中转链接`),he.init()):U.isCommunity()?(E.info(`Router: 社区`),W.init()):U.isBlog()?(E.info(`Router: 博客`),Se.init(),U.isBlogArticle()&&(E.info(`Router: 帖子`),qe.init())):U.isWenKu()?(E.info(`Router: 文库`),Re.init()):U.isDownload()?(E.info(`Router: 下载`),Ye.init()):E.error(`暂未适配，请反馈开发者：`+globalThis.location.href)}},Y=function(e,t,n,r,i,a,o){let s={text:e,type:`select`,description:a,attributes:{},props:{},getValue(){return this.props[I].get(t,n)},callback(e){if(e==null)return;let n=e.value;E.info(`选择：${e.text}`),!(typeof i==`function`&&i(e))&&(this.props[I].set(t,n),typeof o==`function`&&o(e))},data:r};return Reflect.set(s.attributes,P,t),Reflect.set(s.attributes,F,n),Qe.initComponentsStorageApi(`select`,s,{get(e,t){return V.getValue(e,t)},set(e,t){V.setValue(e,t)}}),s},X=function(e,t,n,r,i,a,o,s,c,l){let u={text:e,type:`slider`,description:s,attributes:{},props:{},getValue(){return this.props[I].get(t,n)},getToolTipContent(e){return typeof o==`function`?o(e):`${e}`},callback(e,n){typeof a==`function`&&a(e,n)||(this.props[I].set(t,n),typeof l==`function`&&l(e,n))},min:r,max:i,step:c};return Reflect.set(u.attributes,P,t),Reflect.set(u.attributes,F,n),Qe.initComponentsStorageApi(`slider`,u,{get(e,t){return V.getValue(e,t)},set(e,t){V.setValue(e,t)}}),u},Qe={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||=new r.default.Dictionary,this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t)},initComponentsStorageApi(e,t,n){let r;r=this.hasStorageApi(e)?this.getStorageApi(e):n,this.setComponentsStorageApiProperty(t,r)},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,I,t)}},Z=function(t,n,r=!1,i,a,o,s,c,l){if(l&&typeof l.defaultValue==`object`&&l.defaultValue!=null){let e=l.key??n;l.handler.add({key:e,name:t}),l.handler.shortCut.initConfig(e,l.defaultValue)}let u={text:t,type:`switch`,description:a,disabled:s,attributes:{},props:{},getValue(){return this.props[I].get(n,r)},callback(e,r){let a=!!r;E.success(`${a?`开启`:`关闭`} ${t}`),!(typeof i==`function`&&i(e,a))&&(this.props[I].set(n,a),typeof c==`function`&&c(e,a))},afterAddToUListCallBack:(...r)=>{if(o?.(...r),l){let i=l.handler.shortCut,a=l.key??n,[o,s]=r,c=s.target?.querySelector(`.pops-panel-item-left-main-text`);if(!c)return;let u=()=>{let e=l.handler.shortCut.getShowText(a,`暂未录入快捷键`),n=w.createElement(`div`,{className:`pops-switch-shortcut-wrapper`,innerHTML:`
              <i class="pops-bottom-icon" is-loading="false">
                <svg viewBox="0 0 1123 1024" xmlns="http://www.w3.org/2000/svg" data-type="keyboard">
                  <path d="M1014.122186 1024H109.753483A109.753483 109.753483 0 0 1 0 914.246517V392.917471a109.753483 109.753483 0 0 1 109.753483-109.753484h904.368703a109.753483 109.753483 0 0 1 109.753484 109.753484v521.329046a109.753483 109.753483 0 0 1-109.753484 109.753483zM109.753483 370.966774a21.950697 21.950697 0 0 0-21.950696 21.950697v521.329046a21.950697 21.950697 0 0 0 21.950696 21.950696h904.368703a21.950697 21.950697 0 0 0 21.950697-21.950696V392.917471a21.950697 21.950697 0 0 0-21.950697-21.950697z"></path>
                  <path d="M687.056806 891.198285H307.309753a43.901393 43.901393 0 0 1 0-87.802787h379.747053a43.901393 43.901393 0 0 1 0 87.802787zM175.605573 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM432.428725 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM947.172562 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 546.572347a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 803.395498a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 678.276527a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM948.270096 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394z"></path>
                  <path d="M881.320472 766.079314H689.251876a43.901393 43.901393 0 0 1 0-87.802787h192.068596a21.950697 21.950697 0 0 0 21.950696-21.950696v-65.85209a43.901393 43.901393 0 0 1 87.802787 0v65.85209a109.753483 109.753483 0 0 1-109.753483 109.753483zM305.114684 502.670954H175.605573a43.901393 43.901393 0 0 1 0-87.802787h129.509111a43.901393 43.901393 0 0 1 0 87.802787zM563.03537 365.4791a43.901393 43.901393 0 0 1-43.901394-43.901394v-105.363344A109.753483 109.753483 0 0 1 628.88746 106.460879h61.461951a21.950697 21.950697 0 0 0 21.950696-21.950697V43.901393a43.901393 43.901393 0 0 1 87.802787 0v40.608789a109.753483 109.753483 0 0 1-109.753483 109.753484h-61.461951a21.950697 21.950697 0 0 0-21.950697 21.950696v105.363344a43.901393 43.901393 0 0 1-43.901393 43.901394z"></path>
                </svg>
              </i>
            `},{style:`margin-right: 5px;display: inline-flex;`}),r=n.querySelector(`.pops-bottom-icon`);w.on(r,`click`,function(e){l.handler.shortCut.deleteOption(a),i.toolTip.offEvent(),i.toolTip.close(),i.toolTip.destory(),n.remove()},{once:!0});let i=T.tooltip({$target:r,content:()=>e,className:`github-tooltip`,isFixed:!0,only:!0});w.empty(c),w.append(c,n,t)};if(T.rightClickMenu({$target:c,only:!0,data:[{text:()=>l.handler.shortCut.hasOption(a)?`修改快捷键`:`添加快捷键`,icon:T.config.iconSVG.keyboard,callback(t,n,r,o){if(i.isWaitKeyboardPress()){e.default.warning(`请先执行当前的录入操作`);return}let s=e.default.loading(`请按下快捷键...`,{showClose:!0,onClose(){i.cancelEnterShortcutKeys()}});i.enterShortcutKeys(a).then(({status:t,option:n,key:r})=>{s.close(),t?(E.success(`录入快捷键`,n),e.default.success(`录入成功`),u()):e.default.error(`快捷键 ${i.translateKeyboardValueToButtonText(n)} 已被 ${r} 占用`)})}}]}),!i.hasOption(a))return;u()}}};return Reflect.set(u.attributes,P,n),Reflect.set(u.attributes,F,r),Qe.initComponentsStorageApi(`switch`,u,{get(e,t){return V.getValue(e,t)},set(e,t){V.setValue(e,t)}}),u},$e={id:`m-panel-blog`,title:`博客`,isDefault(){return U.isBlog()},views:[{text:``,type:`container`,views:[{text:`劫持/拦截`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Z(`允许复制`,`m-csdn-blog-unBlockCopy`,!0,void 0,`允许点击复制按钮进行复制`)]}]}]},{type:`container`,text:`文章`,views:[{text:`布局屏蔽`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Z(`【屏蔽】广告`,`m-csdn-blog-removeAds`,!0,void 0,`包括：登录弹窗、打开APP、ios版本提示等`),Z(`【屏蔽】顶部工具栏`,`m-csdn-blog-blockTopToolbar`,!1),Z(`【屏蔽】评论区`,`m-csdn-blog-blockComment`,!1),Z(`【屏蔽】底部文章`,`m-csdn-blog-blockBottomArticle`,!1),Z(`【屏蔽】底部工具栏`,`m-csdn-blog-blockBottomToolbar`,!1),Z(`【屏蔽】底部的AI伴读`,`m-csdn-blog-blockBottomAskAIToolbar`,!1)]}]},{text:`内容`,type:`deepMenu`,views:[{text:`功能`,type:`container`,views:[Z(`允许选择内容`,`m-csdn-blog-allowSelectText`,!0,void 0,`解除文字选中限制`),Z(`自动展开`,`m-csdn-blog-autoExpandContent`,!0,void 0,`懒人操作，免手动点击展开，包括：内容、代码块`),Z(`不限制代码块的最大高度`,`m-csdn-blog-notLimitCodePreMaxHeight`,!1,void 0,`让代码块的高度直接被撑开`)]}]},{text:`评论`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Z(`不限制评论区的最大高度`,`m-csdn-blog-notLimitCommentMaxHeight`,!0,void 0,`让评论区高度直接被撑开`)]}]},{text:`底部文章`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Z(`重构`,`m-csdn-blog-refactoringRecommendation`,!0,void 0,`文章的样式统一`),Z(`移除资源下载的文章`,`m-csdn-blog-removeResourceArticle`,!1,void 0,`download.csdn.net<br>www.iteye.com<br>edu.csdn.net`),Z(`新标签页打开`,`m-csdn-blog-openNewTab`,!0,void 0,`新标签页打开文章`)]}]},{type:`deepMenu`,text:`底部工具栏`,views:[{type:`container`,text:``,views:[Z(`常驻底部`,`m-csdn-blog-bottom-toolbar-always-bottom`,!1,void 0,`开启后底部工具栏不随下滑滚动而隐藏`),Z(`优化收藏按钮`,`m-csdn-blog-bottom-toolbar-optimizationCollectButton`,!1,void 0,`可以自行选择收藏夹`)]}]}]}]},et={id:`m-panel-community`,title:`社区`,isDefault(){return U.isCommunity()},views:[{text:`功能`,type:`container`,views:[Z(`自动展开全文`,`m-csdn-community-autoExpandContent`,!0)]},{text:`布局屏蔽`,type:`container`,views:[Z(`【屏蔽】推荐内容`,`m-csdn-community-blockRecommendedContentAtTheBottom`,!1),Z(`【屏蔽】底部的加入社区`,`m-csdn-community-blockBottomJoinTheCommunity`,!0)]}]},tt={id:`m-panel-download`,title:`资源`,isDefault(){return U.isDownload()},views:[{text:`功能`,type:`container`,views:[Z(`自动展开资源介绍`,`m-csdn-download-automaticallyExpandResourceIntroduction`,!0,void 0,`屏蔽资源介绍【展开全部】按钮并展开资源介绍`)]},{text:`布局屏蔽`,type:`container`,views:[Z(`【屏蔽】广告`,`m-csdn-download-removeAds`,!0,void 0,`包括：登录弹窗、会员降价等`)]}]},nt={id:`component-common`,title:`通用`,views:[{text:`Toast配置`,type:`container`,views:[Y(`Toast位置`,`qmsg-config-position`,`bottom`,[{value:`topleft`,text:`左上角`},{value:`top`,text:`顶部`},{value:`topright`,text:`右上角`},{value:`left`,text:`左边`},{value:`center`,text:`中间`},{value:`right`,text:`右边`},{value:`bottomleft`,text:`左下角`},{value:`bottom`,text:`底部`},{value:`bottomright`,text:`右下角`}],e=>{E.info(`设置当前Qmsg弹出位置`+e.text)},`Toast显示在页面九宫格的位置`),Y(`最多显示的数量`,`qmsg-config-maxnums`,3,[{value:1,text:`1`},{value:2,text:`2`},{value:3,text:`3`},{value:4,text:`4`},{value:5,text:`5`}],void 0,`限制Toast显示的数量`),Z(`逆序弹出`,`qmsg-config-showreverse`,!1,void 0,`修改Toast弹出的顺序`)]}]},rt={id:`m-panel-link`,title:`链接`,isDefault(){return U.isLink()},views:[{text:`功能`,type:`container`,views:[Z(`重定向链接`,`m-csdn-link-jumpRedirect`,!0,void 0,`自动跳转至被拦截的Url链接`)]}]},it={id:`panel-so`,title:`搜索`,isDefault(){return U.isSo()},views:[{text:`C知道-功能`,type:`container`,views:[Z(`去除水印`,`m-csdn-so-cknow-removeMaskCover`,!0)]}]},at={id:`m-panel-wenku`,title:`文库`,isDefault(){return U.isWenKu()},views:[{text:`布局屏蔽`,type:`container`,views:[Z(`【屏蔽】底部工具栏`,`m-csdn-wenku-shieldBottomToolbar`,!1)]}]},ot={id:`panel-blog`,title:`博客`,isDefault(){return U.isBlog()},views:[{text:``,type:`container`,views:[{text:`劫持/拦截`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Z(`拦截-复制的小尾巴`,`csdn-blog-removeClipboardHijacking`,!0),Z(`劫持-禁止复制`,`csdn-blog-unBlockCopy`,!0,void 0,`允许点击复制按钮进行复制`),Z(`劫持-loginBox`,`csdn-blog-hookCSDN_loginBox`,!0,void 0,`阻止跳转登录`)]}]}]},{type:`container`,text:`文章`,views:[{text:`布局屏蔽`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Z(`【屏蔽】登录弹窗`,`csdn-blog-shieldLoginDialog`,!0),Z(`【屏蔽】顶部工具栏`,`csdn-blog-shieldTopToolbar`,!1),Z(`【屏蔽】左侧博客信息`,`csdn-blog-shieldLeftBlogContainerAside`,!1),Z(`【屏蔽】右侧目录信息`,`csdn-blog-shieldRightDirectoryInformation`,!1),Z(`【屏蔽】评论区`,`csdn-blog-blockComment`,!1),Z(`【屏蔽】底部文章`,`csdn-blog-blockBottomRecommendArticle`,!1),Z(`【屏蔽】底部的悬浮工具栏`,`csdn-blog-shieldBottomFloatingToolbar`,!1),Z(`【屏蔽】底部的AI伴读`,`csdn-blog-blockBottomAskAIToolbar`,!1),Z(`【屏蔽】runner-box`,`csdn-blog-blockRunnerBox`,!0)]}]},{text:`右侧悬浮工具栏`,type:`deepMenu`,views:[{text:`功能`,type:`container`,views:[Z(`【添加按钮】前往评论`,`csdn-blog-addGotoRecommandButton`,!0,void 0,`在悬浮工具栏最后面添加`)]},{text:`坐标偏移`,type:`container`,views:[Z(`启用`,`csdn-blog-coverRightToolOffSet`,!1),X(`top偏移`,`csdn-blog-rightToolbarTopOffset`,140,0,Math.max(document.documentElement.clientHeight/2,400),void 0,e=>`当前：${e}px，默认：140px`),X(`right偏移`,`csdn-blog-rightToolbarRightOffset`,90,0,Math.max(document.documentElement.clientWidth/2,400),void 0,e=>`当前：${e}px，默认：90px`)]},{text:`屏蔽`,type:`container`,views:[Z(`【屏蔽】右侧工具栏`,`csdn-blog-rightToolbarEnable`,!1),Z(`【屏蔽】创作中心`,`csdn-blog-rightToolbarCreativeCenter`,!1),Z(`【屏蔽】显示/隐藏侧栏`,`csdn-blog-rightToolbarShowOrSidebar`,!1),Z(`【屏蔽】新手引导`,`csdn-blog-rightToolbarBeginnerGuidance`,!1),Z(`【屏蔽】客服`,`csdn-blog-rightToolbarCustomerService`,!1),Z(`【屏蔽】举报`,`csdn-blog-rightToolbarReport`,!1),Z(`【屏蔽】返回顶部`,`csdn-blog-rightToolbarBackToTop`,!1)]}]},{text:`右侧悬浮工具栏（AI助读版）`,type:`deepMenu`,views:[{text:`坐标偏移`,type:`container`,views:[Z(`启用`,`csdn-blog-ai-coverRightToolOffSet`,!1),X(`top偏移`,`csdn-blog-ai-coverRightToolOffSet-top`,48,0,Math.max(document.documentElement.clientHeight/2,400),void 0,e=>`当前：${e}px，默认：48px`),X(`right偏移`,`csdn-blog-ai-coverRightToolOffSet-right`,150,0,Math.max(document.documentElement.clientWidth/2,400),void 0,e=>`当前：${e}px，默认：150px`)]},{text:`屏蔽`,type:`container`,views:[Z(`【屏蔽】右侧工具栏`,`csdn-blog-ai-blockRightToolbar`,!1),Z(`【屏蔽】目录`,`csdn-blog-ai-blockRightToolbarCatalogue`,!1),Z(`【屏蔽】点赞`,`csdn-blog-ai-blockRightToolbarLike`,!1),Z(`【屏蔽】评论`,`csdn-blog-ai-blockRightToolbarComment`,!1),Z(`【屏蔽】收藏`,`csdn-blog-ai-blockRightToolbarCollect`,!1),Z(`【屏蔽】分享`,`csdn-blog-ai-blockRightToolbarShare`,!1),Z(`【屏蔽】...`,`csdn-blog-ai-blockRightToolbarMore`,!1)]}]},{text:`内容`,type:`deepMenu`,views:[{text:`功能`,type:`container`,views:[Z(`点击代码块自动展开`,`csdn-blog-clickPreCodeAutomatically`,!0,void 0,`当鼠标点击代码块区域时，将自动展开内容`),Z(`自动展开代码块`,`csdn-blog-autoExpandCodeContent`,!0,void 0,`懒人操作，免手动点击展开`),Z(`自动展开内容`,`csdn-blog-autoExpandContent`,!0,void 0,`懒人操作，免手动点击展开`),Z(`全文居中`,`csdn-blog-articleCenter`,!0,void 0,`自动执行<code>【屏蔽】左侧博客信息</code>和<code>【屏蔽】右侧目录信息</code>，并将文章居中`),Z(`允许选择内容`,`csdn-blog-allowSelectContent`,!0,void 0,`解除文字选中限制`)]},{text:`屏蔽`,type:`container`,views:[Z(`【屏蔽】底部xx技能树`,`csdn-blog-shieldBottomSkillTree`,!1),Z(`【屏蔽】选中文字悬浮栏`,`csdn-blog-shieldArticleSearchTip`,!1,void 0,`选中文字弹出的，例如：搜索、评论、笔记`),Z(`【屏蔽】gitcode链接卡片`,`csdn-blog-blockGitCodeLinkCard`,!1)]}]},{text:`评论区`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Z(`优化评论区的位置`,`csdn-blog-restoreComments`,!0)]}]},{text:`底部文章`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Z(`标识CSDN下载`,`csdn-blog-identityCSDNDownload`,!0,void 0,`使用红框标识`),Z(`移除资源下载的文章`,`csdn-blog-removeResourceDownloadArticle`,!1,void 0,`download.csdn.net<br>www.iteye.com<br>edu.csdn.net`)]}]}]}]},st={id:`panel-community`,title:`社区`,isDefault(){return U.isCommunity()},views:[{text:`功能`,type:`container`,views:[Z(`自动展开全文`,`csdn-community-autoExpandContent`,!0),Z(`全文居中`,`csdn-community-centerContent`,!1)]},{text:`布局屏蔽`,type:`container`,views:[Z(`【屏蔽】云开发者任务挑战活动`,`csdn-community-shieldCloudDeveloperTaskChallengeEvent`,!0),Z(`【屏蔽】推荐内容`,`csdn-community-blockRecommendedContentAtTheBottom`,!0),Z(`【屏蔽】左侧悬浮按钮`,`csdn-community-shieldLeftFloatingButton`,!1,void 0,`开启后将屏蔽【当前阅读量】、【点赞按钮】、【评论按钮】、【分享按钮】`),Z(`【屏蔽】右侧栏`,`csdn-community-blockRightColumn`,!1,void 0,`开启后将屏蔽【相关产品】-【活动日历】-【运营活动】-【热门标签】`),Z(`【屏蔽】底部C知道`,`csdn-community-blockBottomCSo`,!1),Z(`【屏蔽】底部更多推荐`,`csdn-community-shieldTheBottomForMoreRecommendations`,!1)]}]},ct={id:`component-common`,title:`通用`,views:[{text:`Toast配置`,type:`container`,views:[Y(`Toast位置`,`qmsg-config-position`,`bottom`,[{value:`topleft`,text:`左上角`},{value:`top`,text:`顶部`},{value:`topright`,text:`右上角`},{value:`left`,text:`左边`},{value:`center`,text:`中间`},{value:`right`,text:`右边`},{value:`bottomleft`,text:`左下角`},{value:`bottom`,text:`底部`},{value:`bottomright`,text:`右下角`}],e=>{E.info(`设置当前Qmsg弹出位置`+e.text)},`Toast显示在页面九宫格的位置`),Y(`最多显示的数量`,`qmsg-config-maxnums`,3,[{value:1,text:`1`},{value:2,text:`2`},{value:3,text:`3`},{value:4,text:`4`},{value:5,text:`5`}],void 0,`限制Toast显示的数量`),Z(`逆序弹出`,`qmsg-config-showreverse`,!1,void 0,`修改Toast弹出的顺序`)]}]},lt={id:`panel-link`,title:`链接`,isDefault(){return U.isLink()},views:[{text:`功能`,type:`container`,views:[Z(`重定向链接`,`csdn-link-jumpRedirect`,!0,void 0,`自动跳转至被拦截的Url链接`)]}]},ut={id:`panel-so`,title:`搜索`,isDefault(){return U.isSo()},views:[{text:`C知道-功能`,type:`container`,views:[Z(`去除水印`,`csdn-so-cknow-removeMaskCover`,!0)]}]},dt={id:`panel-wenku`,title:`资源`,isDefault(){return U.isLink()},views:[{text:`布局屏蔽`,type:`container`,views:[Z(`【屏蔽】资源推荐`,`csdn-wenku-shieldResourceRecommend`,!1),Z(`【屏蔽】右侧用户信息`,`csdn-wenku-shieldRightUserInfo`,!1),Z(`【屏蔽】右侧悬浮工具栏`,`csdn-wenku-shieldRightToolBar`,!1)]}]};fe.deleteMenuOption(0),fe.addMenuOption([{key:`show_pops_panel_setting`,text:`⚙ PC端设置`,autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{V.showPanel(z.getConfig(0))}},{key:`m_show_pops_panel_setting`,text:`⚙ 移动端端设置`,autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{V.showPanel(z.getConfig(1))}},{key:`gotoCSDNCKnow`,text:`⚙ 前往C知道`,isStoreValue:!1,autoReload:!1,showText(e){return e},callback(){window.open(`https://so.csdn.net/chat`,`_blank`)}}]),z.addContentConfig([ct,ot,lt,st,dt,ut]),z.addContentConfig([nt,$e,rt,et,at,it,tt]),V.init();var ft=C.isPhone(),Q=`change_env_set`,$=h(Q);se.add({key:Q,text:`⚙ 自动: ${ft?`移动端`:`PC端`}`,autoReload:!1,isStoreValue:!1,showText(e){return $==null?e:e+` 手动: ${$==1?`移动端`:$==2?`PC端`:`未知`}`},callback:()=>{let t=[0,1,2],n=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,`0`);if(!n)return;let r=parseInt(n);if(isNaN(r)){e.default.error(`输入的不是规范的数字`);return}if(!t.includes(r)){e.default.error(`输入的值必须是0或1或2`);return}r==0?p(Q):y(Q,r)}}),$==null?ft?(E.info(`自动判定为移动端`),Fe.init()):(E.info(`自动判定为PC端`),Ze.init()):(E.info(`手动判定为${$===1?`移动端`:`PC端`}`),$==1?Fe.init():$==2?Ze.init():(e.default.error(`意外，手动判定的值不在范围内`),p(Q)))})(Qmsg,DOMUtils,pops,Utils);
