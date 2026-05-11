// ==UserScript==
// @name         m3u8内容过滤器
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.5.11
// @author       WhiteSevs
// @description  自定义规则对网页中的m3u8的请求内容进行过滤
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.12.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@2.0.8/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.8/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.2/dist/index.umd.min.js
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

(function(e,t,n,r){'use strict';var i=Object.create,a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,c=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,u=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=s(t),c=0,u=i.length,d;c<u;c++)d=i[c],!l.call(e,d)&&d!==n&&a(e,d,{get:(e=>t[e]).bind(null,d),enumerable:!(r=o(t,d))||r.enumerable});return e},d=(e,t,n)=>(n=e==null?{}:i(c(e)),u(t||!e||!e.__esModule?a(n,`default`,{value:e,enumerable:!0}):n,e));e=d(e),t=d(t),n=d(n),r=d(r);var f=typeof GM_addValueChangeListener<`u`?GM_addValueChangeListener:void 0,p=typeof GM_deleteValue<`u`?GM_deleteValue:void 0,m=typeof GM_getResourceText<`u`?GM_getResourceText:void 0,h=typeof GM_getValue<`u`?GM_getValue:void 0,g=typeof GM_info<`u`?GM_info:void 0,_=typeof GM_listValues<`u`?GM_listValues:void 0,ee=typeof GM_registerMenuCommand<`u`?GM_registerMenuCommand:void 0,te=typeof GM_removeValueChangeListener<`u`?GM_removeValueChangeListener:void 0,v=typeof GM_setValue<`u`?GM_setValue:void 0,y=typeof GM_setValues<`u`?GM_setValues:void 0,ne=typeof GM_unregisterMenuCommand<`u`?GM_unregisterMenuCommand:void 0,re=typeof GM_xmlhttpRequest<`u`?GM_xmlhttpRequest:void 0,b=typeof unsafeWindow<`u`?unsafeWindow:void 0,ie=window,x={waitRemove(...e){e.forEach(e=>{typeof e==`string`&&t.default.waitNodeList(e).then(e=>{e.forEach(e=>e.remove())})})},createBlockCSSNode(...e){let n=[];if(e.length!==0&&!(e.length===1&&typeof e[0]==`string`&&e[0].trim()===``))return e.forEach(e=>{Array.isArray(e)?n=n.concat(e):n.push(e)}),t.default.createElement(`style`,{type:`text/css`,innerHTML:`${n.join(`,
`)}{display: none !important;}`})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]==`string`&&e[0].trim()===``)&&(e.forEach(e=>{Array.isArray(e)?t=t.concat(e):t.push(e)}),t=t.map(e=>e.trim()).filter(e=>e!==``),t.length))return V(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){let t=typeof m==`function`?m(e.keyName):null;return typeof t==`string`&&t?V(t):x.loadStyleLink(e.url)},async loadStyleLink(e){let n=document.createElement(`link`);return n.rel=`stylesheet`,n.type=`text/css`,n.href=e,new Promise(e=>{t.default.onReady(()=>{document.head.appendChild(n),e(n)})})},async loadScript(e){let t=document.createElement(`script`);return t.src=e,new Promise(e=>{t.onload=()=>{e(null)},(document.head||document.documentElement).appendChild(t)})},fixUrl(e){return e=e.trim(),e.startsWith(`data:`)||e.match(/^http(s|):\/\//i)?e:e.startsWith(`//`)?(e.startsWith(`///`)||(e=window.location.protocol+e),e):(e.startsWith(`/`)||(e+=`/`),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith(`https://`)||!e.startsWith(`http://`))return e;try{let t=new URL(e);return t.protocol=`https:`,t.toString()}catch{return e}},lockScroll(...e){let t=document.createElement(`style`);t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...e||[]);return n.forEach(e=>{e.classList.add(`pops-overflow-hidden-important`)}),(document.head||document.documentElement).appendChild(t),{recovery(){n.forEach(e=>{e.classList.remove(`pops-overflow-hidden-important`)}),t.remove()}}},async getClipboardText(){function e(e){navigator.clipboard.readText().then(t=>{e(t)}).catch(t=>{I.error(`读取剪贴板内容失败👉`,t),e(``)})}function t(t){navigator.permissions.query({name:`clipboard-read`}).then(()=>{e(t)}).catch(n=>{I.error(`申请剪贴板权限失败，尝试直接读取👉`,n.message??n.name??n.stack),e(t)})}function n(){return!(typeof navigator?.clipboard?.readText!=`function`||typeof navigator?.permissions?.query!=`function`)}return new Promise(e=>{if(!n()){e(``);return}document.hasFocus()?t(e):window.addEventListener(`focus`,()=>{t(e)},{once:!0})})},escapeHtml(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`).replace(/©/g,`&copy;`).replace(/®/g,`&reg;`).replace(/™/g,`&trade;`).replace(/→/g,`&rarr;`).replace(/←/g,`&larr;`).replace(/↑/g,`&uarr;`).replace(/↓/g,`&darr;`).replace(/—/g,`&mdash;`).replace(/–/g,`&ndash;`).replace(/…/g,`&hellip;`).replace(/ /g,`&nbsp;`).replace(/\r\n/g,`<br>`).replace(/\r/g,`<br>`).replace(/\n/g,`<br>`).replace(/\t/g,`&nbsp;&nbsp;&nbsp;&nbsp;`)},interval(e,t,n=5e3){let r,i=n-t,a=t,o=async n=>{let s=await e(n);if(typeof s==`boolean`&&s||n){N.workerClearTimeout(r);return}if(a+=t,a>i){o(!0);return}r=N.workerSetTimeout(()=>{o(!1)},t)};o(!1)},findParentNode(e,n,r){if(r){let i=t.default.closest(e,r);if(i)return i.querySelector(n)}else return t.default.matches(e,n)?e:t.default.closest(e,n)},toStr(e,t=2){let n=`__undefined__placeholder__replaced__str__`+performance.now();return JSON.stringify(e,(e,t)=>t===void 0?n:t,t).replace(RegExp(`"${n}"`,`g`),`undefined`)},isVerticalScreen(){return!globalThis.screen.orientation.type.includes(`landscape`)},isMobileDevice(e=768){return this.isVerticalScreen()?globalThis.innerWidth<e:globalThis.innerHeight<e},isTopWindow(){let e=typeof b==`object`&&b?b:window;return e.top===e.self},formatVideoDuration(e){if(typeof e!=`number`&&(e=parseInt(e)),isNaN(e))return e.toString();let t=function(e){return e<10?`0${e}`:e};if(e<60)return`0:${t(e)}`;if(e>=60&&e<3600)return`${Math.floor(e/60)}:${t(e%60)}`;{let n=Math.floor(e/3600),r=Math.floor(e/60)%60,i=e%60;return`${n}:${t(r)}:${t(i)}`}},formatTimeStamp(e,t){if(typeof e==`number`&&e<0xe8d4a51000){let t=String(Date.now()).length-String(e).length;e*=10**t}let n=e,r=new Date(typeof e==`string`?e.replace(/-/g,`/`):e),i=new Date(t??Date.now()).getTime()-r.getTime(),a=Math.floor(i/(24*3600*1e3));if(a>0)n=a>7?N.formatTime(r.getTime()):a+`天前`;else{let e=i%(24*3600*1e3),t=Math.floor(e/(3600*1e3));if(t>0)n=t+`小时前`;else{let t=e%(3600*1e3),r=Math.floor(t/(60*1e3));if(r>0)n=r+`分钟前`;else{let e=t%(60*1e3);n=Math.round(e/1e3)+`秒前`}}}return n}},S=`GM_Panel`,ae=`data-init`,C=`data-key`,w=`data-default-value`,oe=`data-init-more-value`,se=`data-plugin-search-config`,T=`data-storage-api`,E={$data:{__menuOption:[{key:`show_pops_panel_setting`,text:`⚙ 设置`,autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{j.showPanel(U.getConfig(0))}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu()},initExtensionsMenu(){x.isTopWindow()&&z.add(this.$data.menuOption)},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e)},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(e=>{let t=this.$data.menuOption.findIndex(t=>t.key===e.key);t!==-1&&(this.$data.menuOption[t]=e)})},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1)}},D=class{data={storeNodeList:[],destoryFnList:[]};option={};constructor(e){this.option=e}handlerResult(e,t){let n=[],r=[],i=[];if(Array.isArray(t))i=i.concat(t);else{let e=t=>{if(typeof t==`object`&&t)if(t instanceof Element)i.push(t);else if(Array.isArray(t))e(t);else{let{$css:e,destory:n}=t;e!=null&&(Array.isArray(e)?i=i.concat(e):e instanceof Element&&i.push(e)),typeof n==`function`&&i.push(n)}else i.push(t)};e(t)}let a=e=>{if(e!=null){if(e instanceof Element){n.push(e);return}if(typeof e==`function`){r.push(e);return}}};for(let e of i){let t=a(e);if(typeof t==`boolean`&&!t)break;if(Array.isArray(e))for(let t of e){let e=a(t);if(typeof e==`boolean`&&!e)break}}this.clearStoreNodeList(),this.execDestoryFnAndClear(),e&&(this.data.storeNodeList=this.data.storeNodeList.concat(n),this.data.destoryFnList=this.data.destoryFnList.concat(r))}getEnableStatus(e){return!!this.option.getValue(e)}clearStoreNodeList=()=>{for(let e=this.data.storeNodeList.length-1;e>=0;e--)this.data.storeNodeList[e]?.remove(),this.data.storeNodeList.splice(e,1)};execDestoryFnAndClear=()=>{for(let e=this.data.destoryFnList.length-1;e>=0;e--){let t=this.data.destoryFnList[e];t(),this.data.destoryFnList.splice(e,1)}};checkMenuExec(){let e=!1;return e=typeof this.option.checkExec==`function`?this.option.checkExec(this.option.keyList):this.option.keyList.every(e=>this.getEnableStatus(e)),e}},O=new class{storageKey;listenerData;cacheData;callbacks=[];constructor(e){if(typeof e==`string`){let t=e.trim();if(t==``)throw Error(`key can not be empty string`);this.storageKey=t}else throw TypeError(`key must be a string`);this.listenerData=new r.default.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.setLocalValue=this.setLocalValue.bind(this),this.destory=this.destory.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this)}[Symbol.dispose](){this.destory()}async[Symbol.asyncDispose](){this.destory()}destory(){this.cacheData=null;for(let e=this.callbacks.length-1;e>=0;e--){let t=this.callbacks[e];t(),this.callbacks.splice(e,1)}}getLocalValue(){if(this.cacheData==null){let e=h(this.storageKey);e??(e={},this.setLocalValue(e)),this.destory(),this.cacheData=e;let t=f(this.storageKey,(e,t,n)=>{this.cacheData=null,this.cacheData=n});return this.callbacks.push(()=>{te(t)}),e}else return this.cacheData}setLocalValue(e){this.cacheData=null,this.cacheData=e,v(this.storageKey,e)}set(e,t){let n=this.get(e),r=this.getLocalValue();Reflect.set(r,e,t),this.setLocalValue(r),this.emitValueChangeListener(e,t,n)}get(e,t){let n=this.getLocalValue();return Reflect.get(n,e)??t}getAll(){return this.getLocalValue()}delete(e){let t=this.get(e),n=this.getLocalValue();Reflect.deleteProperty(n,e),this.setLocalValue(n),this.emitValueChangeListener(e,void 0,t)}has(e){let t=this.getLocalValue();return Reflect.has(t,e)}keys(){let e=this.getLocalValue();return Reflect.ownKeys(e)}values(){let e=this.getLocalValue();return Reflect.ownKeys(e).map(t=>Reflect.get(e,t))}clear(){this.destory(),p(this.storageKey)}addValueChangeListener(e,t){let n=Math.random(),r=this.listenerData.get(e)||[];return r.push({id:n,key:e,callback:t}),this.listenerData.set(e,r),n}removeValueChangeListener(e){let t=!1;for(let[n,r]of this.listenerData.entries()){for(let n=0;n<r.length;n++){let i=r[n];(typeof e==`string`&&i.key===e||typeof e==`number`&&i.id===e)&&(r.splice(n,1),n--,t=!0)}this.listenerData.set(n,r)}return t}async emitValueChangeListener(...e){let[t,n,r]=e;if(!this.listenerData.has(t))return;let i=this.listenerData.get(t);for(let a=0;a<i.length;a++){let o=i[a];if(typeof o.callback==`function`){let i,a;e.length===1||(e.length===2?i=n:e.length===3&&(i=n,a=r)),await o.callback(t,i,a)}}}}(S),k={followBrowserSize:!1,get width(){return k.followBrowserSize?globalThis.outerWidth:globalThis.innerWidth},get height(){return k.followBrowserSize?globalThis.outerHeight:globalThis.innerHeight}},A={setting:{get width(){return k.width<550?`88vw`:k.width<700?`550px`:`700px`},get height(){return k.height<450?`70vh`:k.height<550?`450px`:`550px`}},settingMiddle:{get width(){return k.width<350?`88vw`:`350px`},get height(){return k.height<450?`88vh`:`450px`}},settingBig:{get width(){return k.width<800?`92vw`:`800px`},get height(){return k.height<600?`80vh`:`600px`}},info:{get width(){return k.width<350?`88vw`:`350px`},get height(){return k.height<250?`88vh`:`250px`}}},j={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue??=new N.Dictionary,this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData??=new N.Dictionary,this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce??=new N.Dictionary,this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData??=new N.Dictionary,this.__onceExecData},get scriptName(){return L},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e},key:S,attributeKeyName:C,attributeDefaultValueName:w},init(){this.initContentDefaultValue(),E.init()},initContentDefaultValue(){let e=e=>{if(!e.attributes||e.type===`button`||e.type===`container`||e.type===`deepMenu`)return;let t=e.attributes,n=t[ae];if(typeof n==`function`){let e=n();if(typeof e==`boolean`&&!e)return}let r=new Map,i=t[C];if(i!=null){let e=t[w];r.set(i,e)}let a=t[oe];if(typeof a==`object`&&a&&Object.keys(a).forEach(e=>{let t=a[e];r.set(e,t)}),!r.size){I.warn(`请先配置键`,e);return}if(e.type===`switch`){let t=typeof e.disabled==`function`?e.disabled():e.disabled;typeof t==`boolean`&&t&&this.$data.contentConfigInitDisabledKeys.push(...r.keys())}for(let[e,t]of r.entries())this.setDefaultValue(e,t)},t=n=>{for(let r=0;r<n.length;r++){let i=n[r];e(i);let a=i.views;a&&Array.isArray(a)&&t(a)}},n=[...U.getAllContentConfig()];for(let e=0;e<n.length;e++){let r=n[e];if(!r.views)continue;let i=r.views;i&&Array.isArray(i)&&t(i)}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)]},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&I.warn(`该key已存在，初始化默认值失败: `,{key:e,initValue:this.$data.contentConfigInitDefaultValue.get(e)}),this.$data.contentConfigInitDefaultValue.set(e,t)},getDefaultValue(e){return this.$data.contentConfigInitDefaultValue.get(e)},setValue(e,t){O.set(e,t)},getValue(e,t){return O.get(e)??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){O.delete(e)},hasKey(e){return O.has(e)},addValueChangeListener(e,t,n){let r=O.addValueChangeListener(e,t);if(n?.immediate||n?.immediateAll){let r=this.getValue(e);n?.immediate?t(e,r,r):n?.immediateAll&&j.emitMenuValueChange(e,r,r)}return r},removeValueChangeListener(e){O.removeValueChangeListener(e)},emitMenuValueChange(e,t,n){O.emitValueChangeListener(e,t,n)},async exec(e,t,n,r=!0){let i;i=typeof e==`string`||Array.isArray(e)?()=>e:e;let a=!1,o=i(),s=[];Array.isArray(o)?(a=!0,s=o):s.push(o);let c=s.find(e=>!this.$data.contentConfigInitDefaultValue.has(e));if(c){I.warn(`${c} 键不存在`);return}let l=JSON.stringify(s);if(r&&this.$data.onceExecMenuData.has(l))return this.$data.onceExecMenuData.get(l);let u=[],d=new D({keyList:s,getValue:e=>!!this.getValue(e),checkExec(e){let t=!1;return t=typeof n==`function`?n(e):e.every(e=>this.getValue(e)),t}}),f=async e=>{let n=d.checkMenuExec(),r=[];if(n){let i=s.map(e=>this.getValue(e));r=await t({key:s,triggerKey:e?.key,value:a?i:i[0],addStoreValue:(...e)=>d.handlerResult(n,e)})}d.handlerResult(n,r)};r&&s.forEach(e=>{let t=this.addValueChangeListener(e,(e,t,n)=>f({key:e,newValue:t,oldValue:n}));u.push(t)}),await f();let p={checkMenuExec:d.checkMenuExec.bind(d),keyList:s,reload(){this.clearStoreNodeList(),this.execDestoryFnAndClear(),f()},clear(){d.clearStoreNodeList(),this.execDestoryFnAndClear(),this.removeValueChangeListener(),this.clearOnceExecMenuData()},clearStoreNodeList:d.clearStoreNodeList.bind(d),execDestoryFnAndClear:d.execDestoryFnAndClear.bind(d),removeValueChangeListener:()=>{u.forEach(e=>{this.removeValueChangeListener(e)})},clearOnceExecMenuData(){r&&j.$data.onceExecMenuData.delete(l)}};return this.$data.onceExecMenuData.set(l,p),p},async execMenu(e,t,n=!1,r=!1){return await this.exec(e,async(...e)=>await t(...e),e=>e.every(e=>{let t=!!this.getValue(e);return j.$data.contentConfigInitDisabledKeys.includes(e)&&(t=!1,I.warn(`.execMenu${r?`Once`:``} ${e} 被禁用`)),n&&(t=!t),t}),r)},async execMenuOnce(e,t,n=!1,r=!1){let i=await this.execMenu(e,t,n,!0);return r&&i&&(this.removeUrlChangeWithExecMenuOnceListener(e),this.addUrlChangeWithExecMenuOnceListener(e,()=>{i.reload()})),i},async execMoreMenu(e,t,n=!1,r=!1,i=!1){let a=await Promise.all(e.map(async([e,t])=>await this.execMenu(e,(...e)=>t(...e),n,r))),o=new D({keyList:e.map(([e])=>e),getValue:e=>!!this.getValue(e)}),s=[],c=(e=!1)=>{if(o.clearStoreNodeList(),o.execDestoryFnAndClear(),e){for(let e of s)this.removeValueChangeListener(e);for(let e of a)e&&this.removeUrlChangeWithExecMenuOnceListener(e.keyList)}},l=()=>{let e=a.every(e=>e?e.checkMenuExec():!0);if(c(!1),e){let n=t();o.handlerResult(e,n)}};l();for(let e of a)if(e){let t=this.addValueChangeListener(e.keyList[0],()=>{l()});s.push(t),i&&(this.removeUrlChangeWithExecMenuOnceListener(e.keyList),this.addUrlChangeWithExecMenuOnceListener(e.keyList,()=>{e.reload()}))}return{clear(){for(let e of a)e?.clear();this.execDestoryFnAndClear(),this.removeValueChangeListener()},execDestoryFnAndClear(){for(let e of a)e?.execDestoryFnAndClear();c(!1)},removeValueChangeListener(){for(let e of a)e?.removeValueChangeListener();c(!0)}}},async execMoreMenuOnce(e,t,n=!1,r=!1){return await this.execMoreMenu(e,t,n,!0,r)},deleteExecMenuOnce(e){return e=this.transformKey(e),this.$data.onceExecMenuData.delete(e),this.$data.urlChangeReloadMenuExecOnce.delete(e),O.removeValueChangeListener(e)},onceExec(e,t,n=!1){if(e=this.transformKey(e),typeof e!=`string`)throw TypeError(`key 必须是字符串`);this.$data.onceExecData.has(e)||n&&(Array.isArray(e)?e:[e]).findIndex(e=>{if(!j.getValue(e))return!0})!==-1||(t(),this.$data.onceExecData.set(e,1))},deleteOnceExec(e){e=this.transformKey(e),this.$data.onceExecData.delete(e)},addUrlChangeWithExecMenuOnceListener(e,t){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.set(e,t),{off:()=>this.removeUrlChangeWithExecMenuOnceListener(e)}},removeUrlChangeWithExecMenuOnceListener(e){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.delete(e)},hasUrlChangeWithExecMenuOnceListener(e){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.has(e)},async emitUrlChangeWithExecMenuOnceEvent(e){let t=this.$data.urlChangeReloadMenuExecOnce.values();for(let n of t)await n(e)},showPanel(e,t=`${L}-设置`,n=!1,r=!1){this.$data.$panel=null,this.$data.panelContent=[];let i=e.findIndex(e=>(typeof e.isBottom==`function`?e.isBottom():!!e.isBottom)&&e.id===`script-version`)!==-1;!n&&!i&&e.push(...U.getDefaultBottomContentConfig());let a=F.panel({title:{text:t,position:`center`,html:!1,style:``},content:e,btn:{close:{enable:!0,callback:e=>{e.close(),this.$data.$panel=null}}},mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1},clickCallBack:e=>{e(),this.$data.$panel=null}},width:A.setting.width,height:A.setting.height,drag:!0,only:!0,style:`
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,...this.$data.panelConfig});return this.$data.$panel=a,this.$data.panelContent=e,r||this.registerConfigSearch({$panel:a,content:e}),{$panel:a,content:e}},registerConfigSearch(t){let{$panel:n,content:r}=t,i=(e,n)=>{if(typeof t.translateCallback==`function`)return t.translateCallback(e,n);if(typeof n==`object`&&n)for(let t in n)e=e.replaceAll(`{{${t}}}`,n[t]);return e},a=async(e,t)=>{if(e==null)return;let n=await t(e);return n&&typeof n.isFind==`boolean`&&n.isFind?n.data:await a(n.data,t)},o=(e,t)=>{let n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(t?.(),n.disconnect())})},{root:null,threshold:1});n.observe(e),e.scrollIntoView({behavior:`smooth`,block:`center`})},s=e=>{let t=`pops-flashing`;P.onAnimationend(e,()=>{e.classList.remove(t)}),e.classList.add(t)},c=c=>{if(c.type===`dblclick`&&f)return;P.preventEvent(c);let l=F.alert({title:{text:i(`搜索配置`),position:`center`},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="${i(`请输入需要搜素的配置名称`)}">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:!0},btn:{ok:{enable:!1}},mask:{clickEvent:{toClose:!0}},width:A.settingMiddle.width,height:`auto`,drag:!0,style:`
					${F.config.cssText.panelCSS}

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
				`}),u=l.$shadowRoot.querySelector(`.search-config-text`),d=l.$shadowRoot.querySelector(`.search-result-wrapper`);u.focus();let p=()=>{P.empty(d)},m=t=>{let r=N.queryProperty(t,e=>e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e}),c=P.createElement(`div`,{className:`search-result-item`,innerHTML:`
							<div class="search-result-item-path">${r.matchedData?.path}</div>
							<div class="search-result-item-description">${r.matchedData?.description??``}</div>
						`}),l=F.fn.PanelHandlerComponents();return P.on(c,`click`,()=>{let r=n.$shadowRoot.querySelectorAll(`aside.pops-panel-aside .pops-panel-aside-top-container li`)[t.index];if(!r){e.default.error(i(`左侧项下标{{index}}不存在`,{index:t.index}));return}r.scrollIntoView({behavior:`smooth`,block:`center`}),r.click(),a(t.next,async t=>{if(t?.next){let r=await P.waitNode(()=>Array.from(n.$shadowRoot.querySelectorAll(`.pops-panel-deepMenu-nav-item`)).find(e=>{let n=Reflect.get(e,l.$data.nodeStoreConfigKey);return typeof n==`object`&&!!n&&n.text===t.name}),2500);if(r)r.click();else return e.default.error(i(`未找到对应的二级菜单`)),{isFind:!0,data:t};return{isFind:!1,data:t.next}}else{let r=await P.waitNode(()=>Array.from(n.$shadowRoot.querySelectorAll(`li:not(.pops-panel-deepMenu-nav-item)`)).find(e=>Reflect.get(e,l.$data.nodeStoreConfigKey)===t.matchedData?.formConfig),2500);if(r){o(r);let e=r.closest(`.pops-panel-forms-fold[data-fold-enable]`);e&&(e.querySelector(`.pops-panel-forms-fold-container`).click(),await N.sleep(500)),o(r,()=>{s(r)})}else e.default.error(i(`未找到对应的菜单项`));return{isFind:!0,data:t}}})}),c},h=e=>{let t=new RegExp(e,`i`),n=[],i=(e,r)=>{for(let a=0;a<e.length;a++){let o=e[a],s=o.views;if(s&&Array.isArray(s)){let e=N.deepClone(r);if(o.type===`deepMenu`){let t=N.queryProperty(e,e=>e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e});t.next={name:o.text}}i(s,e)}else{let e,i;if(o.type===`own`){let t=Reflect.get(o.attributes||{},se);t&&(typeof t==`function`&&(t=t()),typeof t.text==`string`&&(e=t.text),typeof t.desc==`string`&&(i=t.desc))}else e=o.text,i=Reflect.get(o,`description`);let a=[e,i],s=a.findIndex(e=>{if(typeof e==`string`)return e.match(t)});if(s!==-1){let t=N.deepClone(r),c=N.queryProperty(t,e=>e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e});c.next={name:e,matchedData:{path:``,formConfig:o,matchedText:a[s],description:i}};let l=[];N.queryProperty(t,e=>{let t=e?.name;return typeof t==`string`&&t.trim()!==``&&l.push(t),e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e}});let u=l.join(x.escapeHtml(` - `));c.next.matchedData.path=u,n.push(t)}}}};for(let e=0;e<r.length;e++){let t=r[e];if(!t.views||t.isBottom&&t.id===`script-version`)continue;let n=t.views;if(n&&Array.isArray(n)){let r=t.title;typeof r==`function`&&(r=r()),i(n,{index:e,name:r})}}let a=document.createDocumentFragment();for(let e of n){let t=m(e);a.appendChild(t)}p(),d.append(a)};P.on(u,`input`,N.debounce(e=>{P.preventEvent(e);let t=P.val(u).trim();if(t===``){p();return}h(t)},200))};n.$shadowRoot.querySelectorAll(`aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`).forEach(e=>{P.on(e,`dblclick`,c)});let l=new WeakMap,u=!1,d,f=!1;P.on(n.$shadowRoot,`touchend`,`aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`,(e,t)=>{f=!0,clearTimeout(d),d=void 0,u&&l.has(t)?(u=!1,l.delete(t),c(e)):(d=setTimeout(()=>{u=!1},200),u=!0,l.set(t,e))},{capture:!0}),n.$shadowRoot.appendChild(P.createElement(`style`,{type:`text/css`,textContent:`
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
    		`}))},transformKey(e){if(Array.isArray(e))if(e.length>1){let t=e.sort();return JSON.stringify(t)}else return e[0];else return e},getDynamicValue(e,t){let n=!1,r=t,i=this.addValueChangeListener(e,(e,t)=>{r=t});return{get value(){return n||(n=!0,r=j.getValue(e,t)),r},destory(){j.removeValueChangeListener(i)}}}},M={qmsg_config_position:{key:`qmsg-config-position`,defaultValue:`bottom`},qmsg_config_maxnums:{key:`qmsg-config-maxnums`,defaultValue:3},qmsg_config_showreverse:{key:`qmsg-config-showreverse`,defaultValue:!1},httpx_cookie_manager_enable:{key:`httpx-use-cookie-enable`,defaultValue:!1},httpx_cookie_manager_use_document_cookie:{key:`httpx-use-document-cookie`,defaultValue:!1}},N=r.default.noConflict(),P=t.default.noConflict(),F=n.default,I=new N.Log(g,b.console||ie.console),L=g?.script?.name||void 0,ce=n.default.fn.Utils.AnyTouch();I.config({debug:!1,logMaxCount:250,autoClearConsole:!0,tag:!0});var R=()=>{let e=n.default.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex??0,t=N.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex??0;return Math.max(100,e,t)};e.default.config({isHTML:!0,autoClose:!0,showClose:!1,consoleLogContent(e){let t=e.setting.type;if(t===`loading`)return!1;let n=e.setting.content;return t===`warning`?I.warn(n):t===`error`?I.error(n):I.info(n),!1},get position(){return j.getValue(M.qmsg_config_position.key,M.qmsg_config_position.defaultValue)},get maxNums(){return j.getValue(M.qmsg_config_maxnums.key,M.qmsg_config_maxnums.defaultValue)},get showReverse(){return j.getValue(M.qmsg_config_showreverse.key,M.qmsg_config_showreverse.defaultValue)},get zIndex(){return R()}}),F.GlobalConfig.setGlobalConfig({zIndex:()=>R(),mask:{enable:!0,clickEvent:{toClose:!1,toHide:!1}},drag:!0});var z=new N.GM_Menu({GM_getValue:h,GM_setValue:v,GM_registerMenuCommand:ee,GM_unregisterMenuCommand:ne}),B=new N.Httpx({xmlHttpRequest:re,logDetails:!1});B.interceptors.request.use(e=>e),B.interceptors.response.use(e=>e,t=>(I.error(`[Httpx-HttpxRequest.response] 响应错误`,{data:t}),t.type===`onabort`?e.default.warning(`请求取消`,{consoleLogContent:!0}):t.type===`onerror`?e.default.error(`请求异常`,{consoleLogContent:!0}):t.type===`ontimeout`?e.default.error(`请求超时`,{consoleLogContent:!0}):e.default.error(`其它错误`,{consoleLogContent:!0}),t)),b.Object.defineProperty,b.Object.keys,b.Object.values,b.Function.prototype.apply,b.Function.prototype.call,b.Element.prototype.appendChild,b.setTimeout.bind(b),b.clearTimeout.bind(b),b.setInterval.bind(b),b.clearInterval.bind(b);var V=P.addStyle.bind(P);x.addBlockCSS.bind(x),t.default.selector.bind(t.default),t.default.selectorAll.bind(t.default);var H=new N.CookieManagerService({baseCookieHandler:`GM_cookie`});H.isSupportGM_cookie||(H.isSupportCookieStore?H.setOptions({baseCookieHandler:`cookieStore`}):H.setOptions({baseCookieHandler:`document.cookie`})),new N.DocumentCookieHandler;var U={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig??=new N.Dictionary,this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e)},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]},getDefaultBottomContentConfig(t){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let n=!1,r,i=(e,n)=>{if(t&&typeof t.translateCallback==`function`)return t.translateCallback(e,n);if(typeof n==`object`&&n)for(let t in n)e=e.replaceAll(`{{${t}}}`,n[t]);return e},a=(e,t)=>{typeof t!=`string`&&(t=x.toStr(t));let n=new Blob([t]),r=globalThis.URL.createObjectURL(n);P.createElement(`a`,{href:r,download:e}).click(),N.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(r)},500)},o=()=>{let t=t=>{let n=F.alert({title:{text:i(`请选择导入方式`),position:`center`},content:{text:`
            <div class="btn-control" data-mode="local">${i(`本地导入`)}</div>
            <div class="btn-control" data-mode="network">${i(`网络导入`)}</div>
            <div class="btn-control" data-mode="clipboard">${i(`剪贴板导入`)}</div>`,html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(e){e.close()}}},drag:!0,mask:{enable:!0},width:A.info.width,height:A.info.height,style:`
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
          }`}),r=n.$shadowRoot.querySelector(`.btn-control[data-mode='local']`),a=n.$shadowRoot.querySelector(`.btn-control[data-mode='network']`),o=n.$shadowRoot.querySelector(`.btn-control[data-mode='clipboard']`),s=async n=>{confirm(i(`是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）`))&&(typeof _==`function`?typeof p==`function`?(_().forEach(e=>{p(e)}),e.default.success(i(`已清空脚本存储的配置`))):e.default.error(i(`不支持GM_deleteValue函数，无法执行删除脚本配置`)):e.default.error(i(`不支持GM_listValues函数，无法清空脚本存储的配置`))),typeof y==`function`?y(n):Object.keys(n).forEach(e=>{let t=n[e];v(e,t)}),e.default.success(i(`配置导入完毕`)),t?.()},c=t=>new Promise(async n=>{let r=N.toJSON(t);Object.keys(r).length===0?e.default.warning(i(`解析为空配置，不导入`)):await s(r),n(!0)});P.on(r,`click`,e=>{P.preventEvent(e),n.close();let t=P.createElement(`input`,{type:`file`,accept:`.json`});P.on(t,[`propertychange`,`input`],()=>{if(!t.files?.length)return;let e=t.files[0],n=new FileReader;n.onload=()=>{c(n.result)},n.readAsText(e,`UTF-8`)}),t.click()}),P.on(a,`click`,t=>{P.preventEvent(t),n.close();let r=F.prompt({title:{text:i(`网络导入`),position:`center`},content:{text:``,placeholder:i(`请填写URL`),focus:!0},btn:{close:{enable:!0,callback(e){e.close()}},ok:{text:i(`导入`),callback:async t=>{let n=t.text;if(N.isNull(n)){e.default.error(i(`请填入完整的url`));return}let r=e.default.loading(i(`正在获取配置...`)),a=await B.get(n,{allowInterceptConfig:!1});if(r.close(),!a.status){I.error(a),e.default.error(i(`获取配置失败`),{consoleLogContent:!0});return}await c(a.data.responseText)&&t.close()}},cancel:{enable:!1}},drag:!0,mask:{enable:!0},width:A.info.width,height:`auto`}),a=r.$shadowRoot.querySelector(`input`),o=r.$shadowRoot.querySelector(`.pops-prompt-btn-ok`);P.on(a,[`input`,`propertychange`],()=>{P.val(a)===``?P.attr(o,`disabled`,`true`):P.removeAttr(o,`disabled`)}),P.onKeyboard(a,`keydown`,(e,t,n)=>{e===`Enter`&&n.length===0&&P.val(a)!==``&&P.emit(o,`click`)}),P.emit(a,`input`)}),P.on(o,`click`,async t=>{P.preventEvent(t),n.close();let r=await x.getClipboardText();if(r.trim()===``){e.default.warning(i(`获取到的剪贴板内容为空`));return}await c(r)})},n=(t=`${L}_panel-setting-${N.formatTime(Date.now(),`yyyy_MM_dd_HH_mm_ss`)}.json`,n)=>{let r=F.alert({title:{text:i(`请选择导出方式`),position:`center`},content:{text:`
            <div class="btn-control" data-mode="export-to-file">${i(`导出至文件`)}</div>
            <div class="btn-control" data-mode="export-to-clipboard">${i(`导出至剪贴板`)}</div>
            `,html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(e){e.close()}}},drag:!0,mask:{enable:!0},width:A.info.width,height:A.info.height,style:`
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
          }`}),o=r.$shadowRoot.querySelector(`.btn-control[data-mode='export-to-file']`),s=r.$shadowRoot.querySelector(`.btn-control[data-mode='export-to-clipboard']`);P.on(o,`click`,i=>{P.preventEvent(i);try{a(t,n),r.close()}catch(t){e.default.error(t.toString(),{consoleLogContent:!0})}}),P.on(s,`click`,async()=>{await N.copy(n)?(e.default.success(i(`复制成功`)),r.close()):e.default.error(i(`复制失败`))})},r=F.confirm({title:{text:i(`配置`),position:`center`},content:{text:`<textarea name="config-value" id="config" readonly></textarea>`,html:!0},btn:{ok:{enable:!0,type:`primary`,text:i(`导入`),callback(){t()}},cancel:{enable:!0,text:i(`导出`),callback(){n(void 0,s)}}},width:k.width<450?`90vw`:`450px`,height:`auto`,style:`
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
        `}).$shadowRoot.querySelector(`textarea`),o={};if(typeof _==`function`)_().forEach(e=>{let t=h(e);Reflect.set(o,e,t)});else{e.default.warning(i(`不支持函数GM_listValues，仅导出菜单配置`));let t=h(S);Reflect.set(o,S,t)}let s=x.toStr(o);r.value=s},s=()=>{let e=g?.script?.supportURL||g?.script?.namespace;typeof e==`string`&&N.isNotNull(e)&&window.open(e,`_blank`)};return[{id:`script-version`,title:i(`版本：{{version}}`,{version:g?.script?.version||i(`未知`)}),isBottom:!0,views:[],clickFirstCallback(){return!1},afterRender(e){new ce(e.$asideLiElement).on(`tap`,function(){clearTimeout(r),r=void 0,n?(n=!1,o()):(r=setTimeout(()=>{n=!1,s()},200),n=!0)})}}]},setDefaultBottomContentConfig(e){this.$data.__defaultBottomContentConfig=e}},le={get ajaxHooker(){return this.__ajaxHooker??=N.ajaxHooker(),this.__ajaxHooker},hook(){this.ajaxHooker.hook(e=>{let t=x.fixUrl(e.url);try{if(!new URL(t).pathname.endsWith(`.m3u8`))return;e.response=e=>{let t=e.responseText;t.trim()!==``&&t.includes(`#EXT-X-ENDLIST`)&&(e.responseText=$.runRule(t))}}catch(e){I.error(`m3u8过滤器 hook network出错`,e)}})},unhook(){this.ajaxHooker.unhook()}},W=function(e,t,n,r,i,a,o){let s={text:e,type:`select`,description:a,attributes:{},props:{},getValue(){return this.props[T].get(t,n)},callback(e){if(e==null)return;let n=e.value;I.info(`选择：${e.text}`),!(typeof i==`function`&&i(e))&&(this.props[T].set(t,n),typeof o==`function`&&o(e))},data:r};return Reflect.set(s.attributes,C,t),Reflect.set(s.attributes,w,n),K.initComponentsStorageApi(`select`,s,{get(e,t){return j.getValue(e,t)},set(e,t){j.setValue(e,t)}}),s},G=function(t,n,r=!1,i,a,o,s,c,l){if(l&&typeof l.defaultValue==`object`&&l.defaultValue!=null){let e=l.key??n;l.handler.add({key:e,name:t}),l.handler.shortCut.initConfig(e,l.defaultValue)}let u={text:t,type:`switch`,description:a,disabled:s,attributes:{},props:{},getValue(){return this.props[T].get(n,r)},callback(e,r){let a=!!r;I.success(`${a?`开启`:`关闭`} ${t}`),!(typeof i==`function`&&i(e,a))&&(this.props[T].set(n,a),typeof c==`function`&&c(e,a))},afterAddToUListCallBack:(...r)=>{if(o?.(...r),l){let i=l.handler.shortCut,a=l.key??n,[o,s]=r,c=s.target?.querySelector(`.pops-panel-item-left-main-text`);if(!c)return;let u=()=>{let e=l.handler.shortCut.getShowText(a,`暂未录入快捷键`),n=P.createElement(`div`,{className:`pops-switch-shortcut-wrapper`,innerHTML:`
              <i class="pops-bottom-icon" is-loading="false">
                <svg viewBox="0 0 1123 1024" xmlns="http://www.w3.org/2000/svg" data-type="keyboard">
                  <path d="M1014.122186 1024H109.753483A109.753483 109.753483 0 0 1 0 914.246517V392.917471a109.753483 109.753483 0 0 1 109.753483-109.753484h904.368703a109.753483 109.753483 0 0 1 109.753484 109.753484v521.329046a109.753483 109.753483 0 0 1-109.753484 109.753483zM109.753483 370.966774a21.950697 21.950697 0 0 0-21.950696 21.950697v521.329046a21.950697 21.950697 0 0 0 21.950696 21.950696h904.368703a21.950697 21.950697 0 0 0 21.950697-21.950696V392.917471a21.950697 21.950697 0 0 0-21.950697-21.950697z"></path>
                  <path d="M687.056806 891.198285H307.309753a43.901393 43.901393 0 0 1 0-87.802787h379.747053a43.901393 43.901393 0 0 1 0 87.802787zM175.605573 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM432.428725 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM947.172562 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 546.572347a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 803.395498a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 678.276527a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM948.270096 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394z"></path>
                  <path d="M881.320472 766.079314H689.251876a43.901393 43.901393 0 0 1 0-87.802787h192.068596a21.950697 21.950697 0 0 0 21.950696-21.950696v-65.85209a43.901393 43.901393 0 0 1 87.802787 0v65.85209a109.753483 109.753483 0 0 1-109.753483 109.753483zM305.114684 502.670954H175.605573a43.901393 43.901393 0 0 1 0-87.802787h129.509111a43.901393 43.901393 0 0 1 0 87.802787zM563.03537 365.4791a43.901393 43.901393 0 0 1-43.901394-43.901394v-105.363344A109.753483 109.753483 0 0 1 628.88746 106.460879h61.461951a21.950697 21.950697 0 0 0 21.950696-21.950697V43.901393a43.901393 43.901393 0 0 1 87.802787 0v40.608789a109.753483 109.753483 0 0 1-109.753483 109.753484h-61.461951a21.950697 21.950697 0 0 0-21.950697 21.950696v105.363344a43.901393 43.901393 0 0 1-43.901393 43.901394z"></path>
                </svg>
              </i>
            `},{style:`margin-right: 5px;display: inline-flex;`}),r=n.querySelector(`.pops-bottom-icon`);P.on(r,`click`,function(e){l.handler.shortCut.deleteOption(a),i.toolTip.offEvent(),i.toolTip.close(),i.toolTip.destory(),n.remove()},{once:!0});let i=F.tooltip({$target:r,content:()=>e,className:`github-tooltip`,isFixed:!0,only:!0});P.empty(c),P.append(c,n,t)};if(F.rightClickMenu({$target:c,only:!0,data:[{text:()=>l.handler.shortCut.hasOption(a)?`修改快捷键`:`添加快捷键`,icon:F.config.iconSVG.keyboard,callback(t,n,r,o){if(i.isWaitKeyboardPress()){e.default.warning(`请先执行当前的录入操作`);return}let s=e.default.loading(`请按下快捷键...`,{showClose:!0,onClose(){i.cancelEnterShortcutKeys()}});i.enterShortcutKeys(a).then(({status:t,option:n,key:r})=>{s.close(),t?(I.success(`录入快捷键`,n),e.default.success(`录入成功`),u()):e.default.error(`快捷键 ${i.translateKeyboardValueToButtonText(n)} 已被 ${r} 占用`)})}}]}),!i.hasOption(a))return;u()}}};return Reflect.set(u.attributes,C,n),Reflect.set(u.attributes,w,r),K.initComponentsStorageApi(`switch`,u,{get(e,t){return j.getValue(e,t)},set(e,t){j.setValue(e,t)}}),u},ue=function(e,t,n,r,i,a=``,o,s){let c={text:e,type:`textarea`,attributes:{},props:{},description:r,placeholder:a,disabled:o,getValue(){let e=this.props[T].get(t,n);return Array.isArray(e)?e.join(`
`):e},callback(e,n){typeof i==`function`&&i(e,n)||(this.props[T].set(t,n),typeof s==`function`&&s(e,n))}};return Reflect.set(c.attributes,C,t),Reflect.set(c.attributes,w,n),K.initComponentsStorageApi(`switch`,c,{get(e,t){return j.getValue(e,t)},set(e,t){j.setValue(e,t)}}),c},K={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||=new r.default.Dictionary,this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t)},initComponentsStorageApi(e,t,n){let r;r=this.hasStorageApi(e)?this.getStorageApi(e):n,this.setComponentsStorageApiProperty(t,r)},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,T,t)}},q=function(e,t,n,r,i,a=``,o=`text`,s,c){let l={text:e,type:`input`,inputType:o,attributes:{},props:{},description:r,placeholder:a,afterAddToUListCallBack:s,getValue(){return this.props[T].get(t,n)},callback(e,n){let r=e.target.validity.valid;typeof i==`function`&&i(e,n,r)||(this.props[T].set(t,n),typeof c==`function`&&c(e,n,r))}};return Reflect.set(l.attributes,C,t),Reflect.set(l.attributes,w,n),K.initComponentsStorageApi(`input`,l,{get(e,t){return j.getValue(e,t)},set(e,t){j.setValue(e,t)}}),l},de=class{option;constructor(e){this.option=e}async showView(){let e=F.confirm({title:{text:this.option.title,position:`center`},content:{text:`
        <form class="rule-form-container" onsubmit="return false">
            <ul class="rule-form-ulist"></ul>
            <input type="submit" style="display: none;" />
        </form>
        `,html:!0},btn:N.assign({ok:{callback:async()=>{await i()}}},this.option.btn||{},!0),drag:!0,mask:{enable:!0},style:`
      ${F.config.cssText.panelCSS}
      
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
      `,width:typeof this.option.width==`function`?this.option.width():window.innerWidth>500?`500px`:`88vw`,height:typeof this.option.height==`function`?this.option.height():window.innerHeight>500?`500px`:`80vh`}),t=e.$shadowRoot.querySelector(`.rule-form-container`);e.$shadowRoot.querySelector(`input[type=submit]`);let n=e.$shadowRoot.querySelector(`.rule-form-ulist`),r=await this.option.getView(await this.option.data());P.append(n,r);let i=async()=>{(await this.option.onsubmit(t,await this.option.data())).success&&(e.close(),typeof this.option.dialogCloseCallBack==`function`&&await this.option.dialogCloseCallBack(!0))};return e}},fe=class{option;constructor(e){this.option=e}async showView(t){let n=F.confirm({title:{text:this.option.title,position:`center`},content:{text:`
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
      ${F.config.cssText.panelCSS}

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
      `,btn:{merge:!0,reverse:!1,position:`space-between`,ok:{enable:this.option?.bottomControls?.add?.enable||!0,type:`primary`,text:`添加`,callback:async()=>{this.showEditView(!1,await this.option.getAddData(),n.$shadowRoot)}},close:{enable:!0,callback(){n.close()}},cancel:{enable:!1},other:{enable:this.option?.bottomControls?.clear?.enable||!0,type:`xiaomi-primary`,text:`清空所有(${(await this.option.data()).length})`,callback:()=>{let t=F.confirm({title:{text:`提示`,position:`center`},content:{text:`确定清空所有的数据？`,html:!1},btn:{ok:{enable:!0,callback:async()=>{if(I.success(`清空所有`),typeof this.option?.bottomControls?.clear?.callback==`function`&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){e.default.error(`清理失败`);return}else e.default.success(`清理成功`);await this.updateDeleteAllBtnText(n.$shadowRoot),this.clearContent(n.$shadowRoot),t.close()}},cancel:{text:`取消`,enable:!0}},mask:{enable:!0},width:`300px`,height:`200px`})}}},mask:{enable:!0},width:window.innerWidth>500?`500px`:`88vw`,height:window.innerHeight>500?`500px`:`80vh`}),{$searchContainer:r,$externalSelect:i,$ruleValueSelect:a,$searchInput:o}=this.parseViewElement(n.$shadowRoot);if(this.option.bottomControls?.filter?.enable){let e=null,r=null;Array.isArray(this.option.bottomControls?.filter?.option)&&P.append(i,this.option.bottomControls?.filter?.option.map(e=>{let t=P.createElement(`option`,{innerText:e.name});return Reflect.set(t,`data-value`,e),t})),Array.isArray(this.option.bottomControls?.filter?.inputOption)&&P.append(a,this.option.bottomControls?.filter?.inputOption.map(e=>{let t=P.createElement(`option`,{innerText:e.name});return Reflect.set(t,`data-value`,e),t})),P.on(i,`change`,async()=>{let t=i[i.selectedIndex],n=Reflect.get(t,`data-value`);typeof n?.selectedCallBack==`function`&&n.selectedCallBack(n),e=n,await c(!1)}),P.on(a,`change`,async()=>{let e=a[a.selectedIndex],t=Reflect.get(e,`data-value`);typeof t?.selectedCallBack==`function`&&t.selectedCallBack(t),r=t,await c(!1)}),P.onInput(o,N.debounce(async()=>{await c(!1)}));let s=()=>{let t=i[i.selectedIndex];e=Reflect.get(t,`data-value`);let n=a[a.selectedIndex];r=Reflect.get(n,`data-value`)},c=async i=>{this.clearContent(n.$shadowRoot),i&&s();let a=await this.option.data(),c=[],l=P.val(o);for(let n=0;n<a.length;n++){let i=a[n];if(typeof t==`function`){let e=await t(i);if(typeof e==`boolean`&&!e)continue}if(e){let t=await e?.filterCallBack?.(i);if(typeof t==`boolean`&&!t)continue}if(r){let e=!0;if(e=l===``,e||=await r?.filterCallBack?.(i,l),!e)continue}c.push(i)}await this.appendRuleItemElement(n.$shadowRoot,c)};if(typeof t==`object`&&t){let e;e=typeof t.external==`number`?t.external:Array.from(i.options).findIndex(e=>Reflect.get(e,`data-value`).value===t.external),e!==-1&&(i.selectedIndex=e);let n;n=typeof t.rule==`number`?t.rule:Array.from(a.options).findIndex(e=>Reflect.get(e,`data-value`).value===t.rule),n!==-1&&(a.selectedIndex=n)}await c(!0)}else P.hide(r,!1)}showEditView(t,n,r,i,a,o){let s=async e=>{e?typeof o==`function`&&o(await this.option.getData(n)):(t||await this.option.deleteData(n),typeof a==`function`&&a(await this.option.getData(n)))};new de({title:t?`编辑`:`添加`,data:()=>n,dialogCloseCallBack:s,getView:async e=>await this.option.itemControls.edit.getView(e,t),btn:{ok:{enable:!0,text:t?`修改`:`添加`},cancel:{callback:async e=>{e.close(),await s(!1)}},close:{callback:async e=>{e.close(),await s(!1)}}},onsubmit:async(n,a)=>{let o=await this.option.itemControls.edit.onsubmit(n,t,a);return o.success?t?(e.default.success(`修改成功`),r&&await this.updateRuleItemElement(o.data,i,r)):r&&await this.appendRuleItemElement(r,o.data):t&&I.error(`修改失败`),o},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView()}parseViewElement(e){let t=e.querySelector(`.rule-view-container`),n=e.querySelector(`.pops-confirm-btn button.pops-confirm-btn-other`),r=e.querySelector(`.rule-view-search-container`);return{$container:t,$deleteBtn:n,$searchContainer:r,$externalSelect:r.querySelector(`.pops-panel-select .select-rule-status`),$ruleValueSelect:r.querySelector(`.pops-panel-select .select-rule-value`),$searchInput:r.querySelector(`.pops-panel-input input`)}}parseRuleItemElement(e){let t=e.querySelector(`.rule-controls-enable`);return{$enable:t,$enableSwitch:t.querySelector(`.pops-panel-switch`),$enableSwitchInput:t.querySelector(`.pops-panel-switch__input`),$enableSwitchCore:t.querySelector(`.pops-panel-switch__core`),$edit:e.querySelector(`.rule-controls-edit`),$delete:e.querySelector(`.rule-controls-delete`),data:Reflect.get(e,`data-rule`)}}async createRuleItemElement(t,n){let r=await this.option.getDataItemName(t),i=P.createElement(`div`,{className:`rule-item`,innerHTML:`
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
					${F.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${F.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(i,`data-rule`,t);let a=`pops-panel-switch-is-checked`,{$enable:o,$enableSwitch:s,$enableSwitchCore:c,$enableSwitchInput:l,$delete:u,$edit:d}=this.parseRuleItemElement(i);return this.option.itemControls.enable.enable?(P.on(c,`click`,async()=>{let e=!1;s.classList.contains(a)?(s.classList.remove(a),e=!1):(s.classList.add(a),e=!0),l.checked=e,await this.option.itemControls.enable.callback(t,e)}),await this.option.itemControls.enable.getEnable(t)&&s.classList.add(a)):o.remove(),this.option.itemControls.edit.enable?P.on(d,`click`,e=>{P.preventEvent(e),this.showEditView(!0,t,n,i,e=>{t=null,t=e})}):d.remove(),this.option.itemControls.delete.enable?P.on(u,`click`,r=>{P.preventEvent(r);let a=F.confirm({title:{text:`提示`,position:`center`},content:{text:`确定删除该条数据？`,html:!1},btn:{ok:{enable:!0,callback:async()=>{I.success(`删除数据`),await this.option.itemControls.delete.deleteCallBack(t)?(e.default.success(`成功删除该数据`),i.remove(),await this.updateDeleteAllBtnText(n),a.close()):e.default.error(`删除该数据失败`)}},cancel:{text:`取消`,enable:!0}},mask:{enable:!0},width:`300px`,height:`200px`})}):u.remove(),i}async appendRuleItemElement(e,t){let{$container:n}=this.parseViewElement(e),r=[],i=Array.isArray(t)?t:[t];for(let t=0;t<i.length;t++){let n=i[t],a=await this.createRuleItemElement(n,e);r.push(a)}return P.append(n,r),await this.updateDeleteAllBtnText(e),r}async updateRuleContaienrElement(e){this.clearContent(e);let t=await this.option.data();await this.appendRuleItemElement(e,t),await this.updateDeleteAllBtnText(e)}async updateRuleItemElement(e,t,n){let r=await this.createRuleItemElement(e,n);t.after(r),t.remove()}clearContent(e){let{$container:t}=this.parseViewElement(e);P.html(t,``)}setDeleteBtnText(e,t,n=!1){let{$deleteBtn:r}=this.parseViewElement(e);n?P.html(r,t):P.text(r,t)}async updateDeleteAllBtnText(e){let t=await this.option.data();this.setDeleteBtnText(e,`清空所有(${t.length})`)}},J={duration2Text(e){let t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=parseInt((e%60).toString());return[t.toString().padStart(2,`0`),n.toString().padStart(2,`0`),r.toString().padStart(2,`0`)].join(`:`)},similar(e,t){if(!e||!t)return 0;var n=e.length>t.length?e.length:t.length,r=e.length,i=t.length,a=[],o=function(e,t,n){return e<t?e<n?e:n:t<n?t:n},s,c,l,u,d;if(r===0)return i;if(i===0)return r;for(s=0;s<=r;s++)a[s]=[],a[s][0]=s;for(c=0;c<=i;c++)a[0][c]=c;for(s=1;s<=r;s++)for(l=e.charAt(s-1),c=1;c<=i;c++)u=t.charAt(c-1),d=l===u?0:1,a[s][c]=o(a[s-1][c]+1,a[s][c-1]+1,a[s-1][c-1]+d);return 1-a[r][i]/n}},Y={updateISMatchedRuleMenu(){let e={key:`matched-rule-count`,text:`🔧 当前页面执行规则数量： ${$.$data.matchedRule.length}`,autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{}};z.update(e)},updateIsFilterAdsDurationInfoMenu(e){let t={key:`is-filter-segment-duration`,text:`🍵 已过滤时长：${e}s`,autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{}};z.update(t)}},X={parse_EXTINF(e,t,n){let r=Number(e.replace(/(^#EXTINF:\s*|,)/g,``)),i=n,a=n+r;return{filePath:t.trim(),startDuration:i,endDuration:a,duration:r}}},Z=e=>{Q.$data.isFilterDuration+=e.duration,Y.updateIsFilterAdsDurationInfoMenu(Q.$data.isFilterDuration)},Q={$data:{isFilterDuration:0},filterAdsWithFilePathLength(e,t={handlerFilePath(e){return e}}){let n=e.split(`
`),r=new N.Dictionary,i=0;for(let e=0;e<n.length;e++){let a=n[e].trim();if(!a.startsWith(`#EXTINF:`))continue;let{duration:o,startDuration:s,endDuration:c,filePath:l}=X.parse_EXTINF(a,n[e+1],i);if(t&&typeof t.handlerFilePath==`function`){let e=t.handlerFilePath(l);typeof e==`string`&&(l=e)}i+=o;let u=l.length.toString(),d=r.get(u)||[];d.push({filePath:l,startDuration:s,endDuration:c,duration:o,index:e}),r.set(u,d),e++}let a=[];if(r.forEach((e,t)=>{a.push({filePathLength:t,segmentsInfoList:e})}),a=N.sortListByProperty(a,e=>e.segmentsInfoList.length,!0),a.splice(0,1),a.length){let e=[];a.forEach(t=>{t.segmentsInfoList.forEach(t=>{e.push({index:t.index,data:t})})});let t=0;for(let r=0;r<n.length;r++){let i=e.findIndex(e=>e.index===r+t);if(i!=-1){let a=e[i];I.info(`通杀1：过滤广告片段 ==> 索引：${r+t} 文件名：${a.data.filePath} 开始：${J.duration2Text(a.data.startDuration)} 持续时长：${a.data.duration}s`),n.splice(r,2),r-=2,e.splice(i,1),t+=2}}}return a.forEach(e=>{e.segmentsInfoList.forEach(e=>{Z(e)})}),{m3u8Text:n.join(`
`),filterInfo:a}},filterAdsWithFilePathSimilar(e,t={similarCompareValue:.35,includePercent:.5,handlerFilePath(e){return e}}){let n=e.split(`
`),r=[],i=0;for(let e=0;e<n.length;e++){let a=n[e].trim();if(!a.startsWith(`#EXTINF:`))continue;let{duration:o,startDuration:s,endDuration:c,filePath:l}=X.parse_EXTINF(a,n[e+1],i);if(t&&typeof t.handlerFilePath==`function`){let e=t.handlerFilePath(l);typeof e==`string`&&(l=e)}i+=o,r.push({filePath:l,startDuration:s,endDuration:c,duration:o,index:e}),e++}let a=[],o=0;for(let e=0;e<r.length;e++){let i=r[e],s=!0,c=0,l=r;for(let e=0;e<l.length;e++){let n=l[e];if(J.similar(i.filePath,n.filePath)>=t.similarCompareValue&&c++,c/l.length>t.includePercent){s=!1;break}}s&&(a.push(i),I.info(`通杀2：过滤广告片段 ==> 索引：${i.index} 文件名：${i.filePath} 开始：${J.duration2Text(i.startDuration)} 持续时长：${i.duration}s`),n.splice(i.index-o,2),o+=2)}return a.forEach(e=>{Z(e)}),{m3u8Text:n.join(`
`),filterInfo:a}}},$={$key:{STORAGE_KEY:`m3u8-rule`},$data:{matchedRule:[]},init(){let e=this.getData();this.registerMenu(e);for(let t=0;t<e.length;t++)try{let n=e[t];n.enable&&window.location.href.match(new RegExp(n.data.url))&&this.$data.matchedRule.push(n)}catch(e){I.error(`m3u8过滤器 ==> 规则初始化出错`,e)}this.$data.matchedRule.length&&(I.info(`m3u8过滤器 ==> 当前网站执行的规则：`,this.$data.matchedRule),le.hook(),Y.updateISMatchedRuleMenu())},registerMenu(e){z.update([{key:`m3u8-rule`,text:`⚙ 自定义规则（${e.length}条）`,autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showView()}},{key:`m3u8-export-rule`,text:`⚙ 规则导出`,autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.exportRule(`m3u8-filter-rule.json`)}},{key:`m3u8-import-rule`,text:`⚙ 规则导入`,autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.importRule()}}])},getTemplateData(){return{uuid:N.generateUUID(),enable:!0,name:``,data:{url:``,commonFilterAdsSegmentsFilePathLength:!0,commonFilterAdsSegmentsFilePathSimilar:!1,ownFilterCode:``}}},showView(){let t=F.fn.PanelHandlerComponents();function n(e){return{get(t,n){return e[t]??n},set(t,n){e[t]=n}}}new fe({title:`m3u8自定义规则`,data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:e=>e.name,updateData:e=>this.updateData(e),deleteData:e=>this.deleteData(e),getData:e=>this.getData().find(t=>t.uuid===e.uuid)??e,itemControls:{enable:{enable:!0,getEnable(e){return e.enable},callback:(e,t)=>{e.enable=t,this.updateData(e)}},edit:{enable:!0,getView:(e,r)=>{let i=document.createDocumentFragment();r||(e=this.getTemplateData());let a=G(`启用`,`enable`,!0);Reflect.set(a.props,T,n(e));let o=t.createSectionContainerItem_switch(a).$el,s=q(`规则名称`,`name`,``,``,void 0,`必填`);Reflect.set(s.props,T,n(e));let c=t.createSectionContainerItem_input(s).$el,l=q(`匹配网址`,`url`,``,``,void 0,`必填，可正则，注意转义`);Reflect.set(l.props,T,n(e.data));let u=t.createSectionContainerItem_input(l).$el,d=G(`广告通杀1`,`commonFilterAdsSegmentsFilePathLength`,!0,void 0,`使用文件名称长度比较`);Reflect.set(d.props,T,n(e.data));let f=t.createSectionContainerItem_switch(d).$el,p=G(`广告通杀2`,`commonFilterAdsSegmentsFilePathSimilar`,!1,void 0,`使用文件名称相似度比较`);Reflect.set(p.props,T,n(e.data));let m=t.createSectionContainerItem_switch(p).$el,h=ue(`自定义过滤js`,`ownFilterCode`,``,``,void 0,`参数：
    [m3u8Text]：需要处理的m3u8字符串
返回：[String]

例如：
m3u8Text = m3u8Text.replace('','');
return m3u8Text;
`);Reflect.set(h.props,T,n(e.data));let g=t.createSectionContainerItem_textarea(h).$el;return i.appendChild(o),i.appendChild(c),i.appendChild(u),i.appendChild(f),i.appendChild(m),i.appendChild(g),i},onsubmit:(n,r,i)=>{let a=n.querySelectorAll(`.rule-form-ulist > li`),o=this.getTemplateData();return r&&(o.uuid=i.uuid),a.forEach(e=>{let n=Reflect.get(e,t.$data.nodeStoreConfigKey),r=Reflect.get(n,`attributes`),i=Reflect.get(e,T),a=Reflect.get(r,C),s=Reflect.get(r,w),c=i.get(a,s);Reflect.has(o,a)?Reflect.set(o,a,c):Reflect.has(o.data,a)?Reflect.set(o.data,a,c):I.error(`${a}不在数据中`)}),o.name.trim()===``?(e.default.error(`规则名称不能为空`),{success:!1,data:o}):o.data.url.trim()===``?(e.default.error(`匹配网址不能为空`),{success:!1,data:o}):r?{success:this.updateData(o),data:o}:{success:this.addData(o),data:o}},style:`
                        li[data-key="ownFilterCode"]{
                            gap: 30px;
                        }
                        li[data-key="ownFilterCode"] .pops-panel-textarea{
                            flex: 1;
                        }
                        li[data-key="ownFilterCode"] .pops-panel-textarea textarea{
                            height: 300px;
                        }
                    `},delete:{enable:!0,deleteCallBack:e=>this.deleteData(e)}},bottomControls:{filter:{enable:!0,option:[{name:`启用`,value:`enable`,filterCallBack(e){return e.enable}},{name:`未启用`,value:`notEnable`,filterCallBack(e){return!e.enable}},{name:`当前网址运行的规则`,value:`currentUrl`,filterCallBack(e){try{return!!window.location.href.match(new RegExp(e.data.url))}catch{return!1}}}],inputOption:[{name:`规则名称`,value:`name`,filterCallBack(e,t){return!!e.name.match(t)}},{name:`网址`,value:`url`,filterCallBack(e,t){return!!e.data.url.match(t)}}]}}}).showView()},runRule(e){let t=e;for(let e=0;e<this.$data.matchedRule.length;e++)try{let n=this.$data.matchedRule[e].data;if(n.commonFilterAdsSegmentsFilePathLength){let{filterInfo:e,m3u8Text:n}=Q.filterAdsWithFilePathLength(t);t=n}if(n.commonFilterAdsSegmentsFilePathSimilar){let{filterInfo:e,m3u8Text:n}=Q.filterAdsWithFilePathSimilar(t);t=n}if(n.ownFilterCode.trim()!==``){let e=Function(`m3u8Text`,`M3U8Filter`,`M3U8Parser`,n.ownFilterCode)(t,Q,X);typeof e==`string`?t=e:I.error(`m3u8过滤器 ==> 自定义过滤js代码执行结果不是字符串`,e)}break}catch(e){I.error(`m3u8过滤器 ==> 执行m3u8文本过滤时出现异常`,e)}return t},getData(){return h(this.$key.STORAGE_KEY,[])},setData(e){v(this.$key.STORAGE_KEY,e)},addData(e){let t=this.getData();return t.findIndex(t=>t.uuid==e.uuid)===-1?(t.push(e),v(this.$key.STORAGE_KEY,t),!0):!1},updateData(e){let t=this.getData(),n=t.findIndex(t=>t.uuid==e.uuid),r=!1;return n!==-1&&(r=!0,t[n]=e),this.setData(t),r},deleteData(e){let t=this.getData(),n=t.findIndex(t=>t.uuid==e.uuid),r=!1;return n!==-1&&(r=!0,t.splice(n,1)),this.setData(t),r},clearData(){p(this.$key.STORAGE_KEY)},exportRule(e=`rule.json`){let t=this.getData(),n=new Blob([JSON.stringify(t,null,4)]),r=window.URL.createObjectURL(n),i=P.createElement(`a`);i.href=r,i.download=e,i.click(),setTimeout(()=>{window.URL.revokeObjectURL(r)},1500)},importRule(t){let n=F.alert({title:{text:`请选择导入方式`,position:`center`},content:{text:`
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(e,t){e.close()}}},mask:{enable:!0},drag:!0,width:A.info.width,height:A.info.height,style:`
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),r=n.$shadowRoot.querySelector(`.btn-control[data-mode='local']`),i=n.$shadowRoot.querySelector(`.btn-control[data-mode='network']`),a=n.$shadowRoot.querySelector(`.btn-control[data-mode='clipboard']`),o=n=>{let r=this.getData(),i=[];for(let e=0;e<n.length;e++){let t=n[e];r.findIndex(e=>e.uuid===t.uuid)!==-1||i.push(t)}r=r.concat(i),this.setData(r),e.default.success(`共 ${n.length} 条规则，新增 ${i.length} 条`),t?.()},s=t=>new Promise(n=>{let r=N.toJSON(t);if(!Array.isArray(r)){I.error(r),e.default.error(`导入失败，格式不符合（不是数组）`,{consoleLogContent:!0}),n(!1);return}if(!r.length){e.default.error(`导入失败，解析出的数据为空`,{consoleLogContent:!0}),n(!1);return}o(r),n(!0)});P.on(r,`click`,e=>{P.preventEvent(e),n.close();let t=P.createElement(`input`,{type:`file`,accept:`.json`});P.on(t,[`propertychange`,`input`],e=>{if(!t.files?.length)return;let n=t.files[0],r=new FileReader;r.onload=()=>{s(r.result)},r.readAsText(n,`UTF-8`)}),t.click()}),P.on(i,`click`,t=>{P.preventEvent(t),n.close();let r=F.prompt({title:{text:`网络导入`,position:`center`},content:{text:``,placeholder:`请填写URL`,focus:!0},btn:{close:{enable:!0,callback(e,t){e.close()}},ok:{text:`导入`,callback:async(t,n)=>{let r=t.text;if(N.isNull(r)){e.default.error(`请填入完整的url`);return}let i=e.default.loading(`正在获取配置...`),a=await B.get(r,{allowInterceptConfig:!1});if(i.close(),!a.status){I.error(a),e.default.error(`获取配置失败`,{consoleLogContent:!0});return}await s(a.data.responseText)&&t.close()}},cancel:{enable:!1}},mask:{enable:!0},drag:!0,width:A.info.width,height:`auto`}),i=r.$shadowRoot.querySelector(`input`),a=r.$shadowRoot.querySelector(`.pops-prompt-btn-ok`);P.on(i,[`input`,`propertychange`],e=>{P.val(i)===``?P.attr(a,`disabled`,`true`):P.removeAttr(a,`disabled`)}),P.onKeyboard(i,`keydown`,(e,t,n)=>{e===`Enter`&&n.length===0&&P.val(i)!==``&&P.emit(a,`click`)}),P.emit(i,`input`)}),P.on(a,`click`,async t=>{P.preventEvent(t),n.close();let r=await N.getClipboardInfo();if(r.error!=null){e.default.error(r.error.toString());return}if(r.content.trim()===``){e.default.warning(`获取到的剪贴板内容为空`);return}await s(r.content)})}},pe={id:`component-common`,title:`通用`,views:[{text:`Toast配置`,type:`container`,views:[W(`Toast位置`,`qmsg-config-position`,`bottom`,[{value:`topleft`,text:`左上角`},{value:`top`,text:`顶部`},{value:`topright`,text:`右上角`},{value:`left`,text:`左边`},{value:`center`,text:`中间`},{value:`right`,text:`右边`},{value:`bottomleft`,text:`左下角`},{value:`bottom`,text:`底部`},{value:`bottomright`,text:`右下角`}],e=>{I.info(`设置当前Qmsg弹出位置`+e.text)},`Toast显示在页面九宫格的位置`),W(`最多显示的数量`,`qmsg-config-maxnums`,3,[{value:1,text:`1`},{value:2,text:`2`},{value:3,text:`3`},{value:4,text:`4`},{value:5,text:`5`}],void 0,`限制Toast显示的数量`),G(`逆序弹出`,`qmsg-config-showreverse`,!1,void 0,`修改Toast弹出的顺序`)]},{text:`Cookie配置`,type:`container`,views:[G(`启用`,`httpx-use-cookie-enable`,!1,void 0,`启用后，将根据下面的配置进行添加cookie`),G(`使用document.cookie`,`httpx-use-document-cookie`,!1,void 0,`自动根据请求的域名来设置对应的cookie`)]}]};U.addContentConfig([pe]),E.deleteMenuOption(),j.init(),$.init()})(Qmsg,DOMUtils,pops,Utils);
