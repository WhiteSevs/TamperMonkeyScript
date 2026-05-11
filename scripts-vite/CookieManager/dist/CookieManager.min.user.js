// ==UserScript==
// @name         CookieManager
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.5.11
// @author       WhiteSevs
// @description  简单而强大的Cookie编辑器，允许您快速创建、编辑和删除Cookie
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA/NJREFUeF7tWm1u4jAQjVHusfR3jMQNlp5ky0l2e5K2Jym9ARLO79JzEMgyKF5FqeN5YzuwQPoHqRl/zPObN5NxVHbnf+rO/c9GAEYG3DkCYwjcOQFGETxbCGitF1mWLeq6/qGUmtZ1PW1+t0qpN2PMn0uwcTAA5vP5tKqqp8bhJ8C5R2PMCrBLajIIAFprOs3fkp0eGfFaluVSMiaFbVIAQhy3Tlw1AA3dXyjGQ0/lagFoxO091PGrZkAq5wmEq2NASuevDgCB889HXVjleb6tqmraaASbHeq6ptpgm+f5cr1eb2PDyzdenAUawfsENuXM60VRvBydQ+oCWmJljHkE1go2EQOgtSbB86q9L54FAJIubMuyfAj2DhgoAmA2m1FlR+nO+6eUWm42m9c+IwREO9YYI9ojt7fuc9HkRVF8Uv0OLPLsq+0F82T/DQDCKs8bu1rrGgDxZELh5LKdTCYfPpah88MMkGy6WdwpghL6A054mQaMx/oBaOy3F2xS2ZtNg/SsqqqocrnrUAqRhBggTF0I8MlsYjUCAiCA/skc5CYaHACO/rZq42oDzpHQ55RyXWNRgWQZ0Ef/xvFlu4sjzBShPkPjXPtzDQwGIM/zB1edzjEG2n06I7aUZgFwpS3u1dVX6LSyg83zv8DiKgSWeABczkSUut82ZJun0h4iggaSJhEGuKq20FLXWRylaKm5ABkMAN/Efb0CbjNDCSiXJlkGeOL5GwuYk/TG4xDiyYFOrGEB8NXuVtCoe0M3Pb445jbDVZs0/rRhpegX7T4nEUFJB8erTX3iyTVJulkHFU4uW6EMEN/y9KFgGdPuFQAC2HuK3JtlKgCIbtF9f8ebom12euncV3DRfFxzlkvXEAM4eiL5OMbGp+Lc3rgMAAHQIM02QmOcZMb23hr7AEDoLwEgeRgIAOstuny1A0J/GACOagJnxKYu4UTiH6E/DAAZpipUQvsHRGlqhDb1Bm3Jd8ME9wrZQsgeGbFgt9u9h765nbN/gJ6+iAGxLDhX/wCNfXuwMANoAFC0OGOcU2TJRQkjImzp2x0vAsCCIA0F7lS4ig5RTu5do28OMQAtJiA3xHbd0P4B4ru1CfrKLAgAqR6E9A8knmdZFuS8WAS7mxI2MaT9AxSDYOejAZBqgqR/wHmPtr25eYJDoD1xbI3AbbL7PFTwXOskAaAljPQBxWBt7r6yWApg2z4ZAO2Kkb4RTtnmHsLxoEJIgjSFxX6/XxwOh5+Cj6L+LdF6Z/gY8kvy5AxwgdQG46S8nc/lm/9RY5U+j/uixid6uSk5lEE1IHYjlxp/FgZcyjlk3REABKVbthkZcMuni/g2MgBB6ZZt/gJwetZfo7objAAAAABJRU5ErkJggg==
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.12.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@2.0.8/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.8/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@886625af68455365e426018ecb55419dd4ea6f30/lib/CryptoJS/index.js
// @connect      *
// @grant        GM_addValueChangeListener
// @grant        GM_cookie
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

(function(e,t,n,r,i){'use strict';var a=Object.create,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,d=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=c(t),a=0,l=i.length,d;a<l;a++)d=i[a],!u.call(e,d)&&d!==n&&o(e,d,{get:(e=>t[e]).bind(null,d),enumerable:!(r=s(t,d))||r.enumerable});return e},f=(e,t,n)=>(n=e==null?{}:a(l(e)),d(t||!e||!e.__esModule?o(n,`default`,{value:e,enumerable:!0}):n,e));e=f(e),t=f(t),n=f(n),r=f(r),i=f(i);var p=typeof GM_addValueChangeListener<`u`?GM_addValueChangeListener:void 0,m=typeof GM_cookie<`u`?GM_cookie:void 0,h=typeof GM_deleteValue<`u`?GM_deleteValue:void 0,g=typeof GM_getResourceText<`u`?GM_getResourceText:void 0,_=typeof GM_getValue<`u`?GM_getValue:void 0,v=typeof GM_info<`u`?GM_info:void 0,y=typeof GM_listValues<`u`?GM_listValues:void 0,b=typeof GM_registerMenuCommand<`u`?GM_registerMenuCommand:void 0,ee=typeof GM_removeValueChangeListener<`u`?GM_removeValueChangeListener:void 0,x=typeof GM_setValue<`u`?GM_setValue:void 0,S=typeof GM_setValues<`u`?GM_setValues:void 0,te=typeof GM_unregisterMenuCommand<`u`?GM_unregisterMenuCommand:void 0,ne=typeof GM_xmlhttpRequest<`u`?GM_xmlhttpRequest:void 0,C=typeof unsafeWindow<`u`?unsafeWindow:void 0,re=window,w={waitRemove(...e){e.forEach(e=>{typeof e==`string`&&t.default.waitNodeList(e).then(e=>{e.forEach(e=>e.remove())})})},createBlockCSSNode(...e){let n=[];if(e.length!==0&&!(e.length===1&&typeof e[0]==`string`&&e[0].trim()===``))return e.forEach(e=>{Array.isArray(e)?n=n.concat(e):n.push(e)}),t.default.createElement(`style`,{type:`text/css`,innerHTML:`${n.join(`,
`)}{display: none !important;}`})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]==`string`&&e[0].trim()===``)&&(e.forEach(e=>{Array.isArray(e)?t=t.concat(e):t.push(e)}),t=t.map(e=>e.trim()).filter(e=>e!==``),t.length))return ue(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){let t=typeof g==`function`?g(e.keyName):null;return typeof t==`string`&&t?ue(t):w.loadStyleLink(e.url)},async loadStyleLink(e){let n=document.createElement(`link`);return n.rel=`stylesheet`,n.type=`text/css`,n.href=e,new Promise(e=>{t.default.onReady(()=>{document.head.appendChild(n),e(n)})})},async loadScript(e){let t=document.createElement(`script`);return t.src=e,new Promise(e=>{t.onload=()=>{e(null)},(document.head||document.documentElement).appendChild(t)})},fixUrl(e){return e=e.trim(),e.startsWith(`data:`)||e.match(/^http(s|):\/\//i)?e:e.startsWith(`//`)?(e.startsWith(`///`)||(e=window.location.protocol+e),e):(e.startsWith(`/`)||(e+=`/`),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith(`https://`)||!e.startsWith(`http://`))return e;try{let t=new URL(e);return t.protocol=`https:`,t.toString()}catch{return e}},lockScroll(...e){let t=document.createElement(`style`);t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...e||[]);return n.forEach(e=>{e.classList.add(`pops-overflow-hidden-important`)}),(document.head||document.documentElement).appendChild(t),{recovery(){n.forEach(e=>{e.classList.remove(`pops-overflow-hidden-important`)}),t.remove()}}},async getClipboardText(){function e(e){navigator.clipboard.readText().then(t=>{e(t)}).catch(t=>{R.error(`读取剪贴板内容失败👉`,t),e(``)})}function t(t){navigator.permissions.query({name:`clipboard-read`}).then(()=>{e(t)}).catch(n=>{R.error(`申请剪贴板权限失败，尝试直接读取👉`,n.message??n.name??n.stack),e(t)})}function n(){return!(typeof navigator?.clipboard?.readText!=`function`||typeof navigator?.permissions?.query!=`function`)}return new Promise(e=>{if(!n()){e(``);return}document.hasFocus()?t(e):window.addEventListener(`focus`,()=>{t(e)},{once:!0})})},escapeHtml(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`).replace(/©/g,`&copy;`).replace(/®/g,`&reg;`).replace(/™/g,`&trade;`).replace(/→/g,`&rarr;`).replace(/←/g,`&larr;`).replace(/↑/g,`&uarr;`).replace(/↓/g,`&darr;`).replace(/—/g,`&mdash;`).replace(/–/g,`&ndash;`).replace(/…/g,`&hellip;`).replace(/ /g,`&nbsp;`).replace(/\r\n/g,`<br>`).replace(/\r/g,`<br>`).replace(/\n/g,`<br>`).replace(/\t/g,`&nbsp;&nbsp;&nbsp;&nbsp;`)},interval(e,t,n=5e3){let r,i=n-t,a=t,o=async n=>{let s=await e(n);if(typeof s==`boolean`&&s||n){F.workerClearTimeout(r);return}if(a+=t,a>i){o(!0);return}r=F.workerSetTimeout(()=>{o(!1)},t)};o(!1)},findParentNode(e,n,r){if(r){let i=t.default.closest(e,r);if(i)return i.querySelector(n)}else return t.default.matches(e,n)?e:t.default.closest(e,n)},toStr(e,t=2){let n=`__undefined__placeholder__replaced__str__`+performance.now();return JSON.stringify(e,(e,t)=>t===void 0?n:t,t).replace(RegExp(`"${n}"`,`g`),`undefined`)},isVerticalScreen(){return!globalThis.screen.orientation.type.includes(`landscape`)},isMobileDevice(e=768){return this.isVerticalScreen()?globalThis.innerWidth<e:globalThis.innerHeight<e},isTopWindow(){let e=typeof C==`object`&&C?C:window;return e.top===e.self},formatVideoDuration(e){if(typeof e!=`number`&&(e=parseInt(e)),isNaN(e))return e.toString();let t=function(e){return e<10?`0${e}`:e};if(e<60)return`0:${t(e)}`;if(e>=60&&e<3600)return`${Math.floor(e/60)}:${t(e%60)}`;{let n=Math.floor(e/3600),r=Math.floor(e/60)%60,i=e%60;return`${n}:${t(r)}:${t(i)}`}},formatTimeStamp(e,t){if(typeof e==`number`&&e<0xe8d4a51000){let t=String(Date.now()).length-String(e).length;e*=10**t}let n=e,r=new Date(typeof e==`string`?e.replace(/-/g,`/`):e),i=new Date(t??Date.now()).getTime()-r.getTime(),a=Math.floor(i/(24*3600*1e3));if(a>0)n=a>7?F.formatTime(r.getTime()):a+`天前`;else{let e=i%(24*3600*1e3),t=Math.floor(e/(3600*1e3));if(t>0)n=t+`小时前`;else{let t=e%(3600*1e3),r=Math.floor(t/(60*1e3));if(r>0)n=r+`分钟前`;else{let e=t%(60*1e3);n=Math.round(e/1e3)+`秒前`}}}return n}},T=`GM_Panel`,E=`data-init`,D=`data-key`,O=`data-default-value`,ie=`data-init-more-value`,ae=`data-plugin-search-config`,k=`data-storage-api`,oe={$data:{__menuOption:[{key:`show_pops_panel_setting`,text:`⚙ 设置`,autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{N.showPanel(U.getConfig(0))}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu()},initExtensionsMenu(){w.isTopWindow()&&B.add(this.$data.menuOption)},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e)},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(e=>{let t=this.$data.menuOption.findIndex(t=>t.key===e.key);t!==-1&&(this.$data.menuOption[t]=e)})},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1)}},se=class{data={storeNodeList:[],destoryFnList:[]};option={};constructor(e){this.option=e}handlerResult(e,t){let n=[],r=[],i=[];if(Array.isArray(t))i=i.concat(t);else{let e=t=>{if(typeof t==`object`&&t)if(t instanceof Element)i.push(t);else if(Array.isArray(t))e(t);else{let{$css:e,destory:n}=t;e!=null&&(Array.isArray(e)?i=i.concat(e):e instanceof Element&&i.push(e)),typeof n==`function`&&i.push(n)}else i.push(t)};e(t)}let a=e=>{if(e!=null){if(e instanceof Element){n.push(e);return}if(typeof e==`function`){r.push(e);return}}};for(let e of i){let t=a(e);if(typeof t==`boolean`&&!t)break;if(Array.isArray(e))for(let t of e){let e=a(t);if(typeof e==`boolean`&&!e)break}}this.clearStoreNodeList(),this.execDestoryFnAndClear(),e&&(this.data.storeNodeList=this.data.storeNodeList.concat(n),this.data.destoryFnList=this.data.destoryFnList.concat(r))}getEnableStatus(e){return!!this.option.getValue(e)}clearStoreNodeList=()=>{for(let e=this.data.storeNodeList.length-1;e>=0;e--)this.data.storeNodeList[e]?.remove(),this.data.storeNodeList.splice(e,1)};execDestoryFnAndClear=()=>{for(let e=this.data.destoryFnList.length-1;e>=0;e--){let t=this.data.destoryFnList[e];t(),this.data.destoryFnList.splice(e,1)}};checkMenuExec(){let e=!1;return e=typeof this.option.checkExec==`function`?this.option.checkExec(this.option.keyList):this.option.keyList.every(e=>this.getEnableStatus(e)),e}},A=new class{storageKey;listenerData;cacheData;callbacks=[];constructor(e){if(typeof e==`string`){let t=e.trim();if(t==``)throw Error(`key can not be empty string`);this.storageKey=t}else throw TypeError(`key must be a string`);this.listenerData=new r.default.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.setLocalValue=this.setLocalValue.bind(this),this.destory=this.destory.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this)}[Symbol.dispose](){this.destory()}async[Symbol.asyncDispose](){this.destory()}destory(){this.cacheData=null;for(let e=this.callbacks.length-1;e>=0;e--){let t=this.callbacks[e];t(),this.callbacks.splice(e,1)}}getLocalValue(){if(this.cacheData==null){let e=_(this.storageKey);e??(e={},this.setLocalValue(e)),this.destory(),this.cacheData=e;let t=p(this.storageKey,(e,t,n)=>{this.cacheData=null,this.cacheData=n});return this.callbacks.push(()=>{ee(t)}),e}else return this.cacheData}setLocalValue(e){this.cacheData=null,this.cacheData=e,x(this.storageKey,e)}set(e,t){let n=this.get(e),r=this.getLocalValue();Reflect.set(r,e,t),this.setLocalValue(r),this.emitValueChangeListener(e,t,n)}get(e,t){let n=this.getLocalValue();return Reflect.get(n,e)??t}getAll(){return this.getLocalValue()}delete(e){let t=this.get(e),n=this.getLocalValue();Reflect.deleteProperty(n,e),this.setLocalValue(n),this.emitValueChangeListener(e,void 0,t)}has(e){let t=this.getLocalValue();return Reflect.has(t,e)}keys(){let e=this.getLocalValue();return Reflect.ownKeys(e)}values(){let e=this.getLocalValue();return Reflect.ownKeys(e).map(t=>Reflect.get(e,t))}clear(){this.destory(),h(this.storageKey)}addValueChangeListener(e,t){let n=Math.random(),r=this.listenerData.get(e)||[];return r.push({id:n,key:e,callback:t}),this.listenerData.set(e,r),n}removeValueChangeListener(e){let t=!1;for(let[n,r]of this.listenerData.entries()){for(let n=0;n<r.length;n++){let i=r[n];(typeof e==`string`&&i.key===e||typeof e==`number`&&i.id===e)&&(r.splice(n,1),n--,t=!0)}this.listenerData.set(n,r)}return t}async emitValueChangeListener(...e){let[t,n,r]=e;if(!this.listenerData.has(t))return;let i=this.listenerData.get(t);for(let a=0;a<i.length;a++){let o=i[a];if(typeof o.callback==`function`){let i,a;e.length===1||(e.length===2?i=n:e.length===3&&(i=n,a=r)),await o.callback(t,i,a)}}}}(T),j={followBrowserSize:!1,get width(){return j.followBrowserSize?globalThis.outerWidth:globalThis.innerWidth},get height(){return j.followBrowserSize?globalThis.outerHeight:globalThis.innerHeight}},M={setting:{get width(){return j.width<550?`88vw`:j.width<700?`550px`:`700px`},get height(){return j.height<450?`70vh`:j.height<550?`450px`:`550px`}},settingMiddle:{get width(){return j.width<350?`88vw`:`350px`},get height(){return j.height<450?`88vh`:`450px`}},settingBig:{get width(){return j.width<800?`92vw`:`800px`},get height(){return j.height<600?`80vh`:`600px`}},info:{get width(){return j.width<350?`88vw`:`350px`},get height(){return j.height<250?`88vh`:`250px`}}},N={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue??=new F.Dictionary,this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData??=new F.Dictionary,this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce??=new F.Dictionary,this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData??=new F.Dictionary,this.__onceExecData},get scriptName(){return z},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e},key:T,attributeKeyName:D,attributeDefaultValueName:O},init(){this.initContentDefaultValue(),oe.init()},initContentDefaultValue(){let e=e=>{if(!e.attributes||e.type===`button`||e.type===`container`||e.type===`deepMenu`)return;let t=e.attributes,n=t[E];if(typeof n==`function`){let e=n();if(typeof e==`boolean`&&!e)return}let r=new Map,i=t[D];if(i!=null){let e=t[O];r.set(i,e)}let a=t[ie];if(typeof a==`object`&&a&&Object.keys(a).forEach(e=>{let t=a[e];r.set(e,t)}),!r.size){R.warn(`请先配置键`,e);return}if(e.type===`switch`){let t=typeof e.disabled==`function`?e.disabled():e.disabled;typeof t==`boolean`&&t&&this.$data.contentConfigInitDisabledKeys.push(...r.keys())}for(let[e,t]of r.entries())this.setDefaultValue(e,t)},t=n=>{for(let r=0;r<n.length;r++){let i=n[r];e(i);let a=i.views;a&&Array.isArray(a)&&t(a)}},n=[...U.getAllContentConfig()];for(let e=0;e<n.length;e++){let r=n[e];if(!r.views)continue;let i=r.views;i&&Array.isArray(i)&&t(i)}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)]},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&R.warn(`该key已存在，初始化默认值失败: `,{key:e,initValue:this.$data.contentConfigInitDefaultValue.get(e)}),this.$data.contentConfigInitDefaultValue.set(e,t)},getDefaultValue(e){return this.$data.contentConfigInitDefaultValue.get(e)},setValue(e,t){A.set(e,t)},getValue(e,t){return A.get(e)??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){A.delete(e)},hasKey(e){return A.has(e)},addValueChangeListener(e,t,n){let r=A.addValueChangeListener(e,t);if(n?.immediate||n?.immediateAll){let r=this.getValue(e);n?.immediate?t(e,r,r):n?.immediateAll&&N.emitMenuValueChange(e,r,r)}return r},removeValueChangeListener(e){A.removeValueChangeListener(e)},emitMenuValueChange(e,t,n){A.emitValueChangeListener(e,t,n)},async exec(e,t,n,r=!0){let i;i=typeof e==`string`||Array.isArray(e)?()=>e:e;let a=!1,o=i(),s=[];Array.isArray(o)?(a=!0,s=o):s.push(o);let c=s.find(e=>!this.$data.contentConfigInitDefaultValue.has(e));if(c){R.warn(`${c} 键不存在`);return}let l=JSON.stringify(s);if(r&&this.$data.onceExecMenuData.has(l))return this.$data.onceExecMenuData.get(l);let u=[],d=new se({keyList:s,getValue:e=>!!this.getValue(e),checkExec(e){let t=!1;return t=typeof n==`function`?n(e):e.every(e=>this.getValue(e)),t}}),f=async e=>{let n=d.checkMenuExec(),r=[];if(n){let i=s.map(e=>this.getValue(e));r=await t({key:s,triggerKey:e?.key,value:a?i:i[0],addStoreValue:(...e)=>d.handlerResult(n,e)})}d.handlerResult(n,r)};r&&s.forEach(e=>{let t=this.addValueChangeListener(e,(e,t,n)=>f({key:e,newValue:t,oldValue:n}));u.push(t)}),await f();let p={checkMenuExec:d.checkMenuExec.bind(d),keyList:s,reload(){this.clearStoreNodeList(),this.execDestoryFnAndClear(),f()},clear(){d.clearStoreNodeList(),this.execDestoryFnAndClear(),this.removeValueChangeListener(),this.clearOnceExecMenuData()},clearStoreNodeList:d.clearStoreNodeList.bind(d),execDestoryFnAndClear:d.execDestoryFnAndClear.bind(d),removeValueChangeListener:()=>{u.forEach(e=>{this.removeValueChangeListener(e)})},clearOnceExecMenuData(){r&&N.$data.onceExecMenuData.delete(l)}};return this.$data.onceExecMenuData.set(l,p),p},async execMenu(e,t,n=!1,r=!1){return await this.exec(e,async(...e)=>await t(...e),e=>e.every(e=>{let t=!!this.getValue(e);return N.$data.contentConfigInitDisabledKeys.includes(e)&&(t=!1,R.warn(`.execMenu${r?`Once`:``} ${e} 被禁用`)),n&&(t=!t),t}),r)},async execMenuOnce(e,t,n=!1,r=!1){let i=await this.execMenu(e,t,n,!0);return r&&i&&(this.removeUrlChangeWithExecMenuOnceListener(e),this.addUrlChangeWithExecMenuOnceListener(e,()=>{i.reload()})),i},async execMoreMenu(e,t,n=!1,r=!1,i=!1){let a=await Promise.all(e.map(async([e,t])=>await this.execMenu(e,(...e)=>t(...e),n,r))),o=new se({keyList:e.map(([e])=>e),getValue:e=>!!this.getValue(e)}),s=[],c=(e=!1)=>{if(o.clearStoreNodeList(),o.execDestoryFnAndClear(),e){for(let e of s)this.removeValueChangeListener(e);for(let e of a)e&&this.removeUrlChangeWithExecMenuOnceListener(e.keyList)}},l=()=>{let e=a.every(e=>e?e.checkMenuExec():!0);if(c(!1),e){let n=t();o.handlerResult(e,n)}};l();for(let e of a)if(e){let t=this.addValueChangeListener(e.keyList[0],()=>{l()});s.push(t),i&&(this.removeUrlChangeWithExecMenuOnceListener(e.keyList),this.addUrlChangeWithExecMenuOnceListener(e.keyList,()=>{e.reload()}))}return{clear(){for(let e of a)e?.clear();this.execDestoryFnAndClear(),this.removeValueChangeListener()},execDestoryFnAndClear(){for(let e of a)e?.execDestoryFnAndClear();c(!1)},removeValueChangeListener(){for(let e of a)e?.removeValueChangeListener();c(!0)}}},async execMoreMenuOnce(e,t,n=!1,r=!1){return await this.execMoreMenu(e,t,n,!0,r)},deleteExecMenuOnce(e){return e=this.transformKey(e),this.$data.onceExecMenuData.delete(e),this.$data.urlChangeReloadMenuExecOnce.delete(e),A.removeValueChangeListener(e)},onceExec(e,t,n=!1){if(e=this.transformKey(e),typeof e!=`string`)throw TypeError(`key 必须是字符串`);this.$data.onceExecData.has(e)||n&&(Array.isArray(e)?e:[e]).findIndex(e=>{if(!N.getValue(e))return!0})!==-1||(t(),this.$data.onceExecData.set(e,1))},deleteOnceExec(e){e=this.transformKey(e),this.$data.onceExecData.delete(e)},addUrlChangeWithExecMenuOnceListener(e,t){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.set(e,t),{off:()=>this.removeUrlChangeWithExecMenuOnceListener(e)}},removeUrlChangeWithExecMenuOnceListener(e){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.delete(e)},hasUrlChangeWithExecMenuOnceListener(e){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.has(e)},async emitUrlChangeWithExecMenuOnceEvent(e){let t=this.$data.urlChangeReloadMenuExecOnce.values();for(let n of t)await n(e)},showPanel(e,t=`${z}-设置`,n=!1,r=!1){this.$data.$panel=null,this.$data.panelContent=[];let i=e.findIndex(e=>(typeof e.isBottom==`function`?e.isBottom():!!e.isBottom)&&e.id===`script-version`)!==-1;!n&&!i&&e.push(...U.getDefaultBottomContentConfig());let a=L.panel({title:{text:t,position:`center`,html:!1,style:``},content:e,btn:{close:{enable:!0,callback:e=>{e.close(),this.$data.$panel=null}}},mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1},clickCallBack:e=>{e(),this.$data.$panel=null}},width:M.setting.width,height:M.setting.height,drag:!0,only:!0,style:`
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,...this.$data.panelConfig});return this.$data.$panel=a,this.$data.panelContent=e,r||this.registerConfigSearch({$panel:a,content:e}),{$panel:a,content:e}},registerConfigSearch(t){let{$panel:n,content:r}=t,i=(e,n)=>{if(typeof t.translateCallback==`function`)return t.translateCallback(e,n);if(typeof n==`object`&&n)for(let t in n)e=e.replaceAll(`{{${t}}}`,n[t]);return e},a=async(e,t)=>{if(e==null)return;let n=await t(e);return n&&typeof n.isFind==`boolean`&&n.isFind?n.data:await a(n.data,t)},o=(e,t)=>{let n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(t?.(),n.disconnect())})},{root:null,threshold:1});n.observe(e),e.scrollIntoView({behavior:`smooth`,block:`center`})},s=e=>{let t=`pops-flashing`;I.onAnimationend(e,()=>{e.classList.remove(t)}),e.classList.add(t)},c=c=>{if(c.type===`dblclick`&&f)return;I.preventEvent(c);let l=L.alert({title:{text:i(`搜索配置`),position:`center`},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="${i(`请输入需要搜素的配置名称`)}">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:!0},btn:{ok:{enable:!1}},mask:{clickEvent:{toClose:!0}},width:M.settingMiddle.width,height:`auto`,drag:!0,style:`
					${L.config.cssText.panelCSS}

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
				`}),u=l.$shadowRoot.querySelector(`.search-config-text`),d=l.$shadowRoot.querySelector(`.search-result-wrapper`);u.focus();let p=()=>{I.empty(d)},m=t=>{let r=F.queryProperty(t,e=>e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e}),c=I.createElement(`div`,{className:`search-result-item`,innerHTML:`
							<div class="search-result-item-path">${r.matchedData?.path}</div>
							<div class="search-result-item-description">${r.matchedData?.description??``}</div>
						`}),l=L.fn.PanelHandlerComponents();return I.on(c,`click`,()=>{let r=n.$shadowRoot.querySelectorAll(`aside.pops-panel-aside .pops-panel-aside-top-container li`)[t.index];if(!r){e.default.error(i(`左侧项下标{{index}}不存在`,{index:t.index}));return}r.scrollIntoView({behavior:`smooth`,block:`center`}),r.click(),a(t.next,async t=>{if(t?.next){let r=await I.waitNode(()=>Array.from(n.$shadowRoot.querySelectorAll(`.pops-panel-deepMenu-nav-item`)).find(e=>{let n=Reflect.get(e,l.$data.nodeStoreConfigKey);return typeof n==`object`&&!!n&&n.text===t.name}),2500);if(r)r.click();else return e.default.error(i(`未找到对应的二级菜单`)),{isFind:!0,data:t};return{isFind:!1,data:t.next}}else{let r=await I.waitNode(()=>Array.from(n.$shadowRoot.querySelectorAll(`li:not(.pops-panel-deepMenu-nav-item)`)).find(e=>Reflect.get(e,l.$data.nodeStoreConfigKey)===t.matchedData?.formConfig),2500);if(r){o(r);let e=r.closest(`.pops-panel-forms-fold[data-fold-enable]`);e&&(e.querySelector(`.pops-panel-forms-fold-container`).click(),await F.sleep(500)),o(r,()=>{s(r)})}else e.default.error(i(`未找到对应的菜单项`));return{isFind:!0,data:t}}})}),c},h=e=>{let t=new RegExp(e,`i`),n=[],i=(e,r)=>{for(let a=0;a<e.length;a++){let o=e[a],s=o.views;if(s&&Array.isArray(s)){let e=F.deepClone(r);if(o.type===`deepMenu`){let t=F.queryProperty(e,e=>e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e});t.next={name:o.text}}i(s,e)}else{let e,i;if(o.type===`own`){let t=Reflect.get(o.attributes||{},ae);t&&(typeof t==`function`&&(t=t()),typeof t.text==`string`&&(e=t.text),typeof t.desc==`string`&&(i=t.desc))}else e=o.text,i=Reflect.get(o,`description`);let a=[e,i],s=a.findIndex(e=>{if(typeof e==`string`)return e.match(t)});if(s!==-1){let t=F.deepClone(r),c=F.queryProperty(t,e=>e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e});c.next={name:e,matchedData:{path:``,formConfig:o,matchedText:a[s],description:i}};let l=[];F.queryProperty(t,e=>{let t=e?.name;return typeof t==`string`&&t.trim()!==``&&l.push(t),e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e}});let u=l.join(w.escapeHtml(` - `));c.next.matchedData.path=u,n.push(t)}}}};for(let e=0;e<r.length;e++){let t=r[e];if(!t.views||t.isBottom&&t.id===`script-version`)continue;let n=t.views;if(n&&Array.isArray(n)){let r=t.title;typeof r==`function`&&(r=r()),i(n,{index:e,name:r})}}let a=document.createDocumentFragment();for(let e of n){let t=m(e);a.appendChild(t)}p(),d.append(a)};I.on(u,`input`,F.debounce(e=>{I.preventEvent(e);let t=I.val(u).trim();if(t===``){p();return}h(t)},200))};n.$shadowRoot.querySelectorAll(`aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`).forEach(e=>{I.on(e,`dblclick`,c)});let l=new WeakMap,u=!1,d,f=!1;I.on(n.$shadowRoot,`touchend`,`aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`,(e,t)=>{f=!0,clearTimeout(d),d=void 0,u&&l.has(t)?(u=!1,l.delete(t),c(e)):(d=setTimeout(()=>{u=!1},200),u=!0,l.set(t,e))},{capture:!0}),n.$shadowRoot.appendChild(I.createElement(`style`,{type:`text/css`,textContent:`
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
    		`}))},transformKey(e){if(Array.isArray(e))if(e.length>1){let t=e.sort();return JSON.stringify(t)}else return e[0];else return e},getDynamicValue(e,t){let n=!1,r=t,i=this.addValueChangeListener(e,(e,t)=>{r=t});return{get value(){return n||(n=!0,r=N.getValue(e,t)),r},destory(){N.removeValueChangeListener(i)}}}},P={qmsg_config_position:{key:`qmsg-config-position`,defaultValue:`bottom`},qmsg_config_maxnums:{key:`qmsg-config-maxnums`,defaultValue:3},qmsg_config_showreverse:{key:`qmsg-config-showreverse`,defaultValue:!1},httpx_cookie_manager_enable:{key:`httpx-use-cookie-enable`,defaultValue:!1},httpx_cookie_manager_use_document_cookie:{key:`httpx-use-document-cookie`,defaultValue:!1}},F=r.default.noConflict(),I=t.default.noConflict(),L=n.default,R=new F.Log(v,C.console||re.console),z=v?.script?.name||void 0,ce=n.default.fn.Utils.AnyTouch();R.config({debug:!1,logMaxCount:250,autoClearConsole:!0,tag:!0});var le=()=>{let e=n.default.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex??0,t=F.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex??0;return Math.max(100,e,t)};e.default.config({isHTML:!0,autoClose:!0,showClose:!1,consoleLogContent(e){let t=e.setting.type;if(t===`loading`)return!1;let n=e.setting.content;return t===`warning`?R.warn(n):t===`error`?R.error(n):R.info(n),!1},get position(){return N.getValue(P.qmsg_config_position.key,P.qmsg_config_position.defaultValue)},get maxNums(){return N.getValue(P.qmsg_config_maxnums.key,P.qmsg_config_maxnums.defaultValue)},get showReverse(){return N.getValue(P.qmsg_config_showreverse.key,P.qmsg_config_showreverse.defaultValue)},get zIndex(){return le()}}),L.GlobalConfig.setGlobalConfig({zIndex:()=>le(),mask:{enable:!0,clickEvent:{toClose:!1,toHide:!1}},drag:!0});var B=new F.GM_Menu({GM_getValue:_,GM_setValue:x,GM_registerMenuCommand:b,GM_unregisterMenuCommand:te}),V=new F.Httpx({xmlHttpRequest:ne,logDetails:!1});V.interceptors.request.use(e=>e),V.interceptors.response.use(e=>e,t=>(R.error(`[Httpx-HttpxRequest.response] 响应错误`,{data:t}),t.type===`onabort`?e.default.warning(`请求取消`,{consoleLogContent:!0}):t.type===`onerror`?e.default.error(`请求异常`,{consoleLogContent:!0}):t.type===`ontimeout`?e.default.error(`请求超时`,{consoleLogContent:!0}):e.default.error(`其它错误`,{consoleLogContent:!0}),t)),C.Object.defineProperty,C.Object.keys,C.Object.values,C.Function.prototype.apply,C.Function.prototype.call,C.Element.prototype.appendChild,C.setTimeout.bind(C),C.clearTimeout.bind(C),C.setInterval.bind(C),C.clearInterval.bind(C);var ue=I.addStyle.bind(I);w.addBlockCSS.bind(w),t.default.selector.bind(t.default),t.default.selectorAll.bind(t.default);var H=new F.CookieManagerService({baseCookieHandler:`GM_cookie`});H.isSupportGM_cookie||(H.isSupportCookieStore?H.setOptions({baseCookieHandler:`cookieStore`}):H.setOptions({baseCookieHandler:`document.cookie`})),new F.DocumentCookieHandler;var U={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig??=new F.Dictionary,this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e)},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]},getDefaultBottomContentConfig(t){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let n=!1,r,i=(e,n)=>{if(t&&typeof t.translateCallback==`function`)return t.translateCallback(e,n);if(typeof n==`object`&&n)for(let t in n)e=e.replaceAll(`{{${t}}}`,n[t]);return e},a=(e,t)=>{typeof t!=`string`&&(t=w.toStr(t));let n=new Blob([t]),r=globalThis.URL.createObjectURL(n);I.createElement(`a`,{href:r,download:e}).click(),F.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(r)},500)},o=()=>{let t=t=>{let n=L.alert({title:{text:i(`请选择导入方式`),position:`center`},content:{text:`
            <div class="btn-control" data-mode="local">${i(`本地导入`)}</div>
            <div class="btn-control" data-mode="network">${i(`网络导入`)}</div>
            <div class="btn-control" data-mode="clipboard">${i(`剪贴板导入`)}</div>`,html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(e){e.close()}}},drag:!0,mask:{enable:!0},width:M.info.width,height:M.info.height,style:`
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
          }`}),r=n.$shadowRoot.querySelector(`.btn-control[data-mode='local']`),a=n.$shadowRoot.querySelector(`.btn-control[data-mode='network']`),o=n.$shadowRoot.querySelector(`.btn-control[data-mode='clipboard']`),s=async n=>{confirm(i(`是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）`))&&(typeof y==`function`?typeof h==`function`?(y().forEach(e=>{h(e)}),e.default.success(i(`已清空脚本存储的配置`))):e.default.error(i(`不支持GM_deleteValue函数，无法执行删除脚本配置`)):e.default.error(i(`不支持GM_listValues函数，无法清空脚本存储的配置`))),typeof S==`function`?S(n):Object.keys(n).forEach(e=>{let t=n[e];x(e,t)}),e.default.success(i(`配置导入完毕`)),t?.()},c=t=>new Promise(async n=>{let r=F.toJSON(t);Object.keys(r).length===0?e.default.warning(i(`解析为空配置，不导入`)):await s(r),n(!0)});I.on(r,`click`,e=>{I.preventEvent(e),n.close();let t=I.createElement(`input`,{type:`file`,accept:`.json`});I.on(t,[`propertychange`,`input`],()=>{if(!t.files?.length)return;let e=t.files[0],n=new FileReader;n.onload=()=>{c(n.result)},n.readAsText(e,`UTF-8`)}),t.click()}),I.on(a,`click`,t=>{I.preventEvent(t),n.close();let r=L.prompt({title:{text:i(`网络导入`),position:`center`},content:{text:``,placeholder:i(`请填写URL`),focus:!0},btn:{close:{enable:!0,callback(e){e.close()}},ok:{text:i(`导入`),callback:async t=>{let n=t.text;if(F.isNull(n)){e.default.error(i(`请填入完整的url`));return}let r=e.default.loading(i(`正在获取配置...`)),a=await V.get(n,{allowInterceptConfig:!1});if(r.close(),!a.status){R.error(a),e.default.error(i(`获取配置失败`),{consoleLogContent:!0});return}await c(a.data.responseText)&&t.close()}},cancel:{enable:!1}},drag:!0,mask:{enable:!0},width:M.info.width,height:`auto`}),a=r.$shadowRoot.querySelector(`input`),o=r.$shadowRoot.querySelector(`.pops-prompt-btn-ok`);I.on(a,[`input`,`propertychange`],()=>{I.val(a)===``?I.attr(o,`disabled`,`true`):I.removeAttr(o,`disabled`)}),I.onKeyboard(a,`keydown`,(e,t,n)=>{e===`Enter`&&n.length===0&&I.val(a)!==``&&I.emit(o,`click`)}),I.emit(a,`input`)}),I.on(o,`click`,async t=>{I.preventEvent(t),n.close();let r=await w.getClipboardText();if(r.trim()===``){e.default.warning(i(`获取到的剪贴板内容为空`));return}await c(r)})},n=(t=`${z}_panel-setting-${F.formatTime(Date.now(),`yyyy_MM_dd_HH_mm_ss`)}.json`,n)=>{let r=L.alert({title:{text:i(`请选择导出方式`),position:`center`},content:{text:`
            <div class="btn-control" data-mode="export-to-file">${i(`导出至文件`)}</div>
            <div class="btn-control" data-mode="export-to-clipboard">${i(`导出至剪贴板`)}</div>
            `,html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(e){e.close()}}},drag:!0,mask:{enable:!0},width:M.info.width,height:M.info.height,style:`
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
          }`}),o=r.$shadowRoot.querySelector(`.btn-control[data-mode='export-to-file']`),s=r.$shadowRoot.querySelector(`.btn-control[data-mode='export-to-clipboard']`);I.on(o,`click`,i=>{I.preventEvent(i);try{a(t,n),r.close()}catch(t){e.default.error(t.toString(),{consoleLogContent:!0})}}),I.on(s,`click`,async()=>{await F.copy(n)?(e.default.success(i(`复制成功`)),r.close()):e.default.error(i(`复制失败`))})},r=L.confirm({title:{text:i(`配置`),position:`center`},content:{text:`<textarea name="config-value" id="config" readonly></textarea>`,html:!0},btn:{ok:{enable:!0,type:`primary`,text:i(`导入`),callback(){t()}},cancel:{enable:!0,text:i(`导出`),callback(){n(void 0,s)}}},width:j.width<450?`90vw`:`450px`,height:`auto`,style:`
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
        `}).$shadowRoot.querySelector(`textarea`),o={};if(typeof y==`function`)y().forEach(e=>{let t=_(e);Reflect.set(o,e,t)});else{e.default.warning(i(`不支持函数GM_listValues，仅导出菜单配置`));let t=_(T);Reflect.set(o,T,t)}let s=w.toStr(o);r.value=s},s=()=>{let e=v?.script?.supportURL||v?.script?.namespace;typeof e==`string`&&F.isNotNull(e)&&window.open(e,`_blank`)};return[{id:`script-version`,title:i(`版本：{{version}}`,{version:v?.script?.version||i(`未知`)}),isBottom:!0,views:[],clickFirstCallback(){return!1},afterRender(e){new ce(e.$asideLiElement).on(`tap`,function(){clearTimeout(r),r=void 0,n?(n=!1,o()):(r=setTimeout(()=>{n=!1,s()},200),n=!0)})}}]},setDefaultBottomContentConfig(e){this.$data.__defaultBottomContentConfig=e}},de=e=>{(typeof e==`object`&&e||typeof e==`function`)&&Object.keys(e).forEach(t=>{typeof e[t]==`function`&&(e[t]=e[t].bind(e))})};de(m),de(H);var W=new r.default.CookieManagerService({baseCookieHandler(e){return N.getValue(`cookie-manager-api`,e)}}),G={encrypt(e,t){return i.default.AES.encrypt(e,t).toString()},decrypt(e,t){return i.default.AES.decrypt(e,t).toString(i.default.enc.Utf8)},formatCookie(e,t,n){let r=``;if(t===`header_string`)r=e.map(e=>{let t=e.value;return`${e.name}=${t}; `}).join(``);else if(t===`json`)r=JSON.stringify({api:W.baseCookieHandler,hostname:window.location.hostname,data:e},null,2);else throw Error(`不支持的格式化类型：`+t);return n&&(r=this.encrypt(r,n)),r},showExportDialog(){let t=L.confirm({title:{text:`导出 Cookie`,position:`center`},content:{text:`
						<p class="tip-text cookie-format-type-tip-text">您希望以哪种格式导出 Cookie？</p>
						<div class="cookie-format-type-container">
							<div class="cookie-format-type-item">
								<input id="cookie-format-header_string" type="radio" name="format" value="header_string">
								<label for="cookie-format-header_string">Header String</label>
							</div>
							<div class="cookie-format-type-item">
								<input id="cookie-format-json" type="radio" name="format" value="json">
								<label for="cookie-format-json">JSON</label>
							</div>
						</div>
						<p class="tip-text export-example-code-tip-text">示例</p>
						<div class="export-example-code-text-container">
							<pre></pre>
						</div>
						<div class="cookir-format-encode-pwd-container">
							<label for="hostOnly">用于加密 Cookie 的密码</label>
							<input id="encode-pwd" type="password" placeholder="用于加密 Cookie 的密码" value="">
							<p>如果您希望在导出前加密 Cookie，请输入密码（可选）。</p>
						</div>
					`,html:!0},width:window.innerWidth<400?`88vw`:`400px`,height:`auto`,btn:{merge:!0,position:`space-between`,ok:{text:`导出`,async callback(t){let n=ye.$data.cookieList;if(n.length===0){e.default.warning(`Cookie为空`);return}let r=G.formatCookie(n,s.exportType,s.encodePwd),i=new Blob([r],{type:`text/plain`}),a=URL.createObjectURL(i);I.createElement(`a`,{download:`${window.location.hostname}_${s.exportType}_${W.baseCookieHandler}_${Date.now()}.txt`,href:a,target:`_blank`}).click(),setTimeout(()=>{URL.revokeObjectURL(a)},500),t.close()}},other:{enable:!0,text:`导出至剪贴板`,type:`xiaomi-primary`,async callback(t){let n=ye.$data.cookieList;if(n.length===0){e.default.warning(`Cookie为空`);return}let r=G.formatCookie(n,s.exportType,s.encodePwd);await F.copy(r)?e.default.success(`复制成功`):e.default.error(`复制失败`),t.close()}}},style:`
      ${L.config.cssText.panelCSS}

      .pops-content{
        padding: 20px;
      }
      .cookie-format-type-container{
        display: flex;
        gap: 10px;
        margin: 10px 0px;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .cookie-format-type-item input[type="radio"]{
        width: 1rem;
        height: 1rem;
      }
      .export-example-code-text-container{
        padding: 10px;
        background: rgb(209 213 219 / 1);
        border-radius: 10px;
        width: 100%;
        margin: 1rem 0px;
      }
      .export-example-code-text-container pre{
        font-feature-settings: normal;
        font-variation-settings: normal;
        font-size: 1em;
        margin: 0;
        white-space: break-spaces;
      }
      .cookie-format-type-container label{
        color: rgb(17 24 39 / 1);
      }
      .cookir-format-encode-pwd-container label{
        color: #111827;
      }
      .cookie-format-type-tip-text,
      .export-example-code-tip-text,
      .cookir-format-encode-pwd-container label{
        font-weight: 600;
      }
      .cookir-format-encode-pwd-container input{
        border-radius: 0.5rem;
        width: 100%;
        border: 1px solid #d1d5db;
        background: #f9fafb;
        padding: 0.625rem;
        margin: 0.65rem 0px;
        font-size: 12px;
        color: #111827;
      }
      .cookir-format-encode-pwd-container p{
          color: #6b7280;
        font-size: 12px;
      }
		  `,darkStyle:`
      .cookie-format-type-container label{
        color: rgba(187, 187, 187, 1);
      }
      .cookir-format-encode-pwd-container input{
        background: #333333;
        border: 1px solid #5b5b5b;
        color: #ffffff;
      }
      .export-example-code-text-container{
        background: rgba(53,55,59,1);
      }
      .cookir-format-encode-pwd-container label{
        color: #ffffff;
      }
      `}),n=t.$shadowRoot.querySelector(`.export-example-code-text-container pre`),r=t.$shadowRoot.querySelector(`#cookie-format-header_string`),i=t.$shadowRoot.querySelector(`#cookie-format-json`),a=t.$shadowRoot.querySelector(`#encode-pwd`),o={key:`cookie-backup-export-dialog-config`,getConfig(){return N.getValue(this.key,{exportType:`header_string`,encodePwd:``})},saveConfig(){let e=`header_string`;i.checked&&(e=`json`),N.setValue(this.key,{exportType:e,encodePwd:I.val(a)}),s=this.getConfig()}},s=o.getConfig();I.on(r,`input`,()=>{let e=[{name:`_ga`,value:`GA1.2.123456789.987654321`,domain:window.location.hostname,expires:Date.now()+1e3*60*60*24*30,partitioned:!1,path:`/`,sameSite:`unspecified`,secure:!1},{name:`PHPSESSID`,value:`28f2d88ee9322cfd2e4f1e`,domain:window.location.hostname,expires:Date.now()+1e3*60*60*24*30,partitioned:!1,path:`/`,sameSite:`unspecified`,secure:!1},{name:`csrftoken`,value:`abcdef123456`,domain:window.location.hostname,expires:Date.now()+1e3*60*60*24*30,partitioned:!1,path:`/`,sameSite:`unspecified`,secure:!1},{name:`logged_in`,value:`true`,domain:window.location.hostname,expires:Date.now()+1e3*60*60*24*30,partitioned:!1,path:`/`,sameSite:`unspecified`,secure:!1}],t=this.formatCookie(e,`header_string`);I.text(n,t),o.saveConfig()}),I.on(i,`input`,()=>{let e=this.formatCookie([{name:`sessionId`,value:`abc123xyz456`,domain:`.example.com`,path:`/`,secure:!0,httpOnly:!0,sameSite:`lax`,expirationDate:1713543600,hostOnly:!1,session:!1}],`json`);I.text(n,e),o.saveConfig()}),I.on(a,[`input`,`propertychange`],()=>{o.saveConfig()}),s.exportType===`header_string`?r.click():s.exportType===`json`&&i.click(),I.val(a,s.encodePwd)},showImportDialog(){let t=L.confirm({title:{text:`导入 Cookie`,position:`center`},content:{text:`
						<p class="tip-text cookie-format-type-tip-text">您希望如何导入？</p>
						<div class="import-cookie-type-container">
							<div class="import-cookie-type-item">
								<input id="import-cookie-import_from_text" type="radio" name="format" value="import_from_text">
								<label for="import-cookie-import_from_text">Use text</label>
							</div>
							<div class="import-cookie-type-item">
								<input id="import-cookie-import_from_file" type="radio" name="format" value="import_from_file">
								<label for="import-cookie-import_from_file">Use a file</label>
							</div>
						</div>
						<div class="import-cookie-value-container">
							<div class="import-cookie-value-text">
								<label>Cookie value</label>
								<textarea rows="5" placeholder="Header string/JSON"></textarea>
							</div>
							<div class="import-cookie-value-file">
								<label>选择要导入的文件</label>
								<input accept=".txt, .json" type="file">
							</div>
						</div>
						<div class="cookie-format-decode-pwd-container">
							<label for="hostOnly">用于解密 Cookie 的密码</label>
							<input id="decode-pwd" type="password" placeholder="用于解密 Cookie 的密码" value="">
							<p>如果 Cookie 受加密保护，请输入解密密码（可选）。</p>
						</div>
					`,html:!0},width:window.innerWidth<400?`88vw`:`400px`,height:`auto`,btn:{ok:{text:`导入`,async callback(t){try{let n=d.decodePwd,r=d.value;n.trim()===``||(r=G.decrypt(r,n));let i=F.toJSON(r);if(Array.isArray(i)){R.info(`使用${W.baseCookieHandler}导入cookie数据`);for(let e of i)await W.update(e)}else if(typeof i==`object`&&Object.keys(i).length&&Array.isArray(i.data)){let e=new F.CookieManagerService({baseCookieHandler:i.api});R.info(`使用${e.baseCookieHandler}导入cookie数据`);for(let t of i.data)await e.update(t)}else if(typeof i==`object`&&!Object.keys(i).length){let e=new F.DocumentCookieHandler;R.info(`使用${W.baseCookieHandler}导入cookie数据`);let t=e.parseCookie(r);for(let e of t)await W.update({name:e.key,value:e.value,domain:window.location.hostname,path:`/`,sameSite:`unspecified`,secure:!1,session:!1,hostOnly:!0,httpOnly:!1})}else{R.error(r,i),e.default.error(`cookie格式不符合`);return}t.close()}catch(t){e.default.error(t.toString())}}}},style:`
					${L.config.cssText.panelCSS}

					.pops-content{
						padding: 20px;
					}
					.import-cookie-type-container{
						display: flex;
						gap: 10px;
						margin: 10px 0px;
						align-items: center;
						flex-wrap: wrap;
						justify-content: space-between;
					}
					.import-cookie-type-item input[type="radio"]{
						width: 1rem;
						height: 1rem;
					}
					.export-example-code-text-container{
						padding: 10px;
						background-color: rgb(209 213 219 / 1);
						border-radius: 10px;
						width: 100%;
						margin: 1rem 0px;
					}
					.export-example-code-text-container pre{
						font-feature-settings: normal;
						font-variation-settings: normal;
						font-size: 1em;
						margin: 0;
						white-space: break-spaces;
					}
					.import-cookie-type-container label{
						color: rgb(17 24 39 / 1);
					}
					.cookie-format-decode-pwd-container label{
						color: #111827;
					}
					.import-cookie-value-text label,
					.import-cookie-value-file label,
					.cookie-format-type-tip-text,
					.cookie-format-decode-pwd-container label{
						font-weight: 600;
					}
					.cookie-format-decode-pwd-container input{
						border-radius: 0.5rem;
						width: 100%;
						border: 1px solid #d1d5db;
						background-color: #f9fafb;
						padding: 0.625rem;
						margin: 0.65rem 0px;
						font-size: 12px;
						color: #111827;
					}
					.cookie-format-decode-pwd-container p{
    					color: #6b7280;
						font-size: 12px;
					}

					.import-cookie-value-text{
						display: flex;
						flex-direction: column;
					}
					.import-cookie-value-text label{

					}
					.import-cookie-value-text textarea{
						font-size: 0.875rem;
						line-height: 1.25rem;
						padding: 0.625rem;
						color: rgb(17 24 39 / 1);
						background: rgb(249 250 251 / 1);
						border: 1px solid rgb(209 213 219 / 1);
						border-radius: 0.5rem;
						width: 100%;
						margin: 10px 0px;
					}
					.import-cookie-value-file{
						display: flex;
						flex-direction: column;
					}
					.import-cookie-value-file label{

					}
					.import-cookie-value-file input{
						border: 1px solid #d1d5db;
						border-radius: 0.5rem;
						height: 2.25rem;
						width: 100%;
						margin: 1rem 0px;
					}
					.import-cookie-value-file input:hover,					
					.import-cookie-value-file input::file-selector-button:hover{
						cursor: pointer;
					}
					.import-cookie-value-file input::file-selector-button{
						background-color: #1E2939;
						color: #ffffff;
						height: 100%;
						box-sizing: border-box;
					}
					.import-cookie-value-file input::file-selector-button:hover{
						background-color: #364153;
					}
				`,darkStyle:`
        .import-cookie-type-container label {
          color: rgba(187, 187, 187, 1);
        }
        .import-cookie-value-text textarea{
          background: rgba(53, 55, 59, 1);
          border: 1px solid rgba(53, 55, 59, 1);
          color: #ffffff;
        }
        .cookie-format-decode-pwd-container label{
          color: #ffffff;
        }
        .cookie-format-decode-pwd-container input{
          background: #333333;
          border: 1px solid #5b5b5b;
          color: #ffffff;
        }
        `}),n=``,r=t.$shadowRoot.querySelector(`#import-cookie-import_from_text`),i=t.$shadowRoot.querySelector(`#import-cookie-import_from_file`),a=t.$shadowRoot.querySelector(`.import-cookie-value-text`),o=a.querySelector(`textarea`),s=t.$shadowRoot.querySelector(`.import-cookie-value-file`),c=s.querySelector(`input`),l=t.$shadowRoot.querySelector(`#decode-pwd`),u={key:`cookie-backup-import-dialog-config`,getConfig(){let e=N.getValue(this.key,{importType:`import_from_text`,decodePwd:``,value:``});return e.importType===`import_from_text`?e.value=o.value:e.importType===`import_from_file`&&(e.value=n),e},saveConfig(){let e=`import_from_text`;i.checked&&(e=`import_from_file`),N.setValue(this.key,{importType:e,decodePwd:I.val(l)}),d=this.getConfig()}},d=u.getConfig();I.on(r,`input`,()=>{u.saveConfig(),c.value=``,n=``,I.hide(s,!1),I.show(a,!1)}),I.on(i,`input`,()=>{u.saveConfig(),o.value=``,I.hide(a,!1),I.show(s,!1)}),I.on(o,[`input`,`propertychange`],F.debounce(()=>{u.saveConfig()})),I.on(c,[`change`,`input`],()=>{let e=c.files?.[0];if(e){let t=new FileReader;t.onload=function(e){let t=e.target.result;typeof t==`string`&&(n=t,u.saveConfig())},t.readAsText(e)}}),I.on(l,[`input`,`propertychange`],async()=>{u.saveConfig()}),d.importType===`import_from_text`?r.click():d.importType===`import_from_file`&&i.click(),I.val(l,d.decodePwd)}},K=function(e,t,n,r,i,a,o,s,c,l){let u={text:e,type:`button`,attributes:{},props:{},description:t,buttonIcon:r,buttonIsRightIcon:i,buttonIconIsLoading:a,buttonType:o,buttonText:n,callback(e){typeof s==`function`&&s(e)},afterAddToUListCallBack:c};return Reflect.set(u.attributes,E,()=>{u.disable=!!(typeof l==`function`?l():l)}),u},fe=function(e,t,n,r,i,a){let o={type:`own`,attributes:r||{},props:i||{},createLIElement:e,afterAddToUListCallBack:a};return typeof t==`object`&&t&&Object.keys(t).length>0?Reflect.set(o.attributes,ie,t):Reflect.set(o.attributes,E,()=>!1),typeof n==`object`&&n&&Reflect.set(o.attributes,ae,n),o},q=function(e,t,n,r,i,a,o){let s={text:e,type:`select`,description:a,attributes:{},props:{},getValue(){return this.props[k].get(t,n)},callback(e){if(e==null)return;let n=e.value;R.info(`选择：${e.text}`),!(typeof i==`function`&&i(e))&&(this.props[k].set(t,n),typeof o==`function`&&o(e))},data:r};return Reflect.set(s.attributes,D,t),Reflect.set(s.attributes,O,n),Y.initComponentsStorageApi(`select`,s,{get(e,t){return N.getValue(e,t)},set(e,t){N.setValue(e,t)}}),s},J=function(t,n,r=!1,i,a,o,s,c,l){if(l&&typeof l.defaultValue==`object`&&l.defaultValue!=null){let e=l.key??n;l.handler.add({key:e,name:t}),l.handler.shortCut.initConfig(e,l.defaultValue)}let u={text:t,type:`switch`,description:a,disabled:s,attributes:{},props:{},getValue(){return this.props[k].get(n,r)},callback(e,r){let a=!!r;R.success(`${a?`开启`:`关闭`} ${t}`),!(typeof i==`function`&&i(e,a))&&(this.props[k].set(n,a),typeof c==`function`&&c(e,a))},afterAddToUListCallBack:(...r)=>{if(o?.(...r),l){let i=l.handler.shortCut,a=l.key??n,[o,s]=r,c=s.target?.querySelector(`.pops-panel-item-left-main-text`);if(!c)return;let u=()=>{let e=l.handler.shortCut.getShowText(a,`暂未录入快捷键`),n=I.createElement(`div`,{className:`pops-switch-shortcut-wrapper`,innerHTML:`
              <i class="pops-bottom-icon" is-loading="false">
                <svg viewBox="0 0 1123 1024" xmlns="http://www.w3.org/2000/svg" data-type="keyboard">
                  <path d="M1014.122186 1024H109.753483A109.753483 109.753483 0 0 1 0 914.246517V392.917471a109.753483 109.753483 0 0 1 109.753483-109.753484h904.368703a109.753483 109.753483 0 0 1 109.753484 109.753484v521.329046a109.753483 109.753483 0 0 1-109.753484 109.753483zM109.753483 370.966774a21.950697 21.950697 0 0 0-21.950696 21.950697v521.329046a21.950697 21.950697 0 0 0 21.950696 21.950696h904.368703a21.950697 21.950697 0 0 0 21.950697-21.950696V392.917471a21.950697 21.950697 0 0 0-21.950697-21.950697z"></path>
                  <path d="M687.056806 891.198285H307.309753a43.901393 43.901393 0 0 1 0-87.802787h379.747053a43.901393 43.901393 0 0 1 0 87.802787zM175.605573 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM432.428725 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM947.172562 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 546.572347a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 803.395498a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 678.276527a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM948.270096 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394z"></path>
                  <path d="M881.320472 766.079314H689.251876a43.901393 43.901393 0 0 1 0-87.802787h192.068596a21.950697 21.950697 0 0 0 21.950696-21.950696v-65.85209a43.901393 43.901393 0 0 1 87.802787 0v65.85209a109.753483 109.753483 0 0 1-109.753483 109.753483zM305.114684 502.670954H175.605573a43.901393 43.901393 0 0 1 0-87.802787h129.509111a43.901393 43.901393 0 0 1 0 87.802787zM563.03537 365.4791a43.901393 43.901393 0 0 1-43.901394-43.901394v-105.363344A109.753483 109.753483 0 0 1 628.88746 106.460879h61.461951a21.950697 21.950697 0 0 0 21.950696-21.950697V43.901393a43.901393 43.901393 0 0 1 87.802787 0v40.608789a109.753483 109.753483 0 0 1-109.753483 109.753484h-61.461951a21.950697 21.950697 0 0 0-21.950697 21.950696v105.363344a43.901393 43.901393 0 0 1-43.901393 43.901394z"></path>
                </svg>
              </i>
            `},{style:`margin-right: 5px;display: inline-flex;`}),r=n.querySelector(`.pops-bottom-icon`);I.on(r,`click`,function(e){l.handler.shortCut.deleteOption(a),i.toolTip.offEvent(),i.toolTip.close(),i.toolTip.destory(),n.remove()},{once:!0});let i=L.tooltip({$target:r,content:()=>e,className:`github-tooltip`,isFixed:!0,only:!0});I.empty(c),I.append(c,n,t)};if(L.rightClickMenu({$target:c,only:!0,data:[{text:()=>l.handler.shortCut.hasOption(a)?`修改快捷键`:`添加快捷键`,icon:L.config.iconSVG.keyboard,callback(t,n,r,o){if(i.isWaitKeyboardPress()){e.default.warning(`请先执行当前的录入操作`);return}let s=e.default.loading(`请按下快捷键...`,{showClose:!0,onClose(){i.cancelEnterShortcutKeys()}});i.enterShortcutKeys(a).then(({status:t,option:n,key:r})=>{s.close(),t?(R.success(`录入快捷键`,n),e.default.success(`录入成功`),u()):e.default.error(`快捷键 ${i.translateKeyboardValueToButtonText(n)} 已被 ${r} 占用`)})}}]}),!i.hasOption(a))return;u()}}};return Reflect.set(u.attributes,D,n),Reflect.set(u.attributes,O,r),Y.initComponentsStorageApi(`switch`,u,{get(e,t){return N.getValue(e,t)},set(e,t){N.setValue(e,t)}}),u},pe=function(e,t,n,r,i,a=``,o,s){let c={text:e,type:`textarea`,attributes:{},props:{},description:r,placeholder:a,disabled:o,getValue(){let e=this.props[k].get(t,n);return Array.isArray(e)?e.join(`
`):e},callback(e,n){typeof i==`function`&&i(e,n)||(this.props[k].set(t,n),typeof s==`function`&&s(e,n))}};return Reflect.set(c.attributes,D,t),Reflect.set(c.attributes,O,n),Y.initComponentsStorageApi(`switch`,c,{get(e,t){return N.getValue(e,t)},set(e,t){N.setValue(e,t)}}),c},Y={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||=new r.default.Dictionary,this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t)},initComponentsStorageApi(e,t,n){let r;r=this.hasStorageApi(e)?this.getStorageApi(e):n,this.setComponentsStorageApiProperty(t,r)},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,k,t)}},X=function(e,t,n,r,i,a=``,o=`text`,s,c){let l={text:e,type:`input`,inputType:o,attributes:{},props:{},description:r,placeholder:a,afterAddToUListCallBack:s,getValue(){return this.props[k].get(t,n)},callback(e,n){let r=e.target.validity.valid;typeof i==`function`&&i(e,n,r)||(this.props[k].set(t,n),typeof c==`function`&&c(e,n,r))}};return Reflect.set(l.attributes,D,t),Reflect.set(l.attributes,O,n),Y.initComponentsStorageApi(`input`,l,{get(e,t){return N.getValue(e,t)},set(e,t){N.setValue(e,t)}}),l},me=class{option;constructor(e){this.option=e}async showView(){let e=L.confirm({title:{text:this.option.title,position:`center`},content:{text:`
        <form class="rule-form-container" onsubmit="return false">
            <ul class="rule-form-ulist"></ul>
            <input type="submit" style="display: none;" />
        </form>
        `,html:!0},btn:F.assign({ok:{callback:async()=>{await i()}}},this.option.btn||{},!0),drag:!0,mask:{enable:!0},style:`
      ${L.config.cssText.panelCSS}
      
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
      `,width:typeof this.option.width==`function`?this.option.width():window.innerWidth>500?`500px`:`88vw`,height:typeof this.option.height==`function`?this.option.height():window.innerHeight>500?`500px`:`80vh`}),t=e.$shadowRoot.querySelector(`.rule-form-container`);e.$shadowRoot.querySelector(`input[type=submit]`);let n=e.$shadowRoot.querySelector(`.rule-form-ulist`),r=await this.option.getView(await this.option.data());I.append(n,r);let i=async()=>{(await this.option.onsubmit(t,await this.option.data())).success&&(e.close(),typeof this.option.dialogCloseCallBack==`function`&&await this.option.dialogCloseCallBack(!0))};return e}},he=class{option;constructor(e){this.option=e}async showView(t){let n=L.confirm({title:{text:this.option.title,position:`center`},content:{text:`
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
      ${L.config.cssText.panelCSS}

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
      `,btn:{merge:!0,reverse:!1,position:`space-between`,ok:{enable:this.option?.bottomControls?.add?.enable||!0,type:`primary`,text:`添加`,callback:async()=>{this.showEditView(!1,await this.option.getAddData(),n.$shadowRoot)}},close:{enable:!0,callback(){n.close()}},cancel:{enable:!1},other:{enable:this.option?.bottomControls?.clear?.enable||!0,type:`xiaomi-primary`,text:`清空所有(${(await this.option.data()).length})`,callback:()=>{let t=L.confirm({title:{text:`提示`,position:`center`},content:{text:`确定清空所有的数据？`,html:!1},btn:{ok:{enable:!0,callback:async()=>{if(R.success(`清空所有`),typeof this.option?.bottomControls?.clear?.callback==`function`&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){e.default.error(`清理失败`);return}else e.default.success(`清理成功`);await this.updateDeleteAllBtnText(n.$shadowRoot),this.clearContent(n.$shadowRoot),t.close()}},cancel:{text:`取消`,enable:!0}},mask:{enable:!0},width:`300px`,height:`200px`})}}},mask:{enable:!0},width:window.innerWidth>500?`500px`:`88vw`,height:window.innerHeight>500?`500px`:`80vh`}),{$searchContainer:r,$externalSelect:i,$ruleValueSelect:a,$searchInput:o}=this.parseViewElement(n.$shadowRoot);if(this.option.bottomControls?.filter?.enable){let e=null,r=null;Array.isArray(this.option.bottomControls?.filter?.option)&&I.append(i,this.option.bottomControls?.filter?.option.map(e=>{let t=I.createElement(`option`,{innerText:e.name});return Reflect.set(t,`data-value`,e),t})),Array.isArray(this.option.bottomControls?.filter?.inputOption)&&I.append(a,this.option.bottomControls?.filter?.inputOption.map(e=>{let t=I.createElement(`option`,{innerText:e.name});return Reflect.set(t,`data-value`,e),t})),I.on(i,`change`,async()=>{let t=i[i.selectedIndex],n=Reflect.get(t,`data-value`);typeof n?.selectedCallBack==`function`&&n.selectedCallBack(n),e=n,await c(!1)}),I.on(a,`change`,async()=>{let e=a[a.selectedIndex],t=Reflect.get(e,`data-value`);typeof t?.selectedCallBack==`function`&&t.selectedCallBack(t),r=t,await c(!1)}),I.onInput(o,F.debounce(async()=>{await c(!1)}));let s=()=>{let t=i[i.selectedIndex];e=Reflect.get(t,`data-value`);let n=a[a.selectedIndex];r=Reflect.get(n,`data-value`)},c=async i=>{this.clearContent(n.$shadowRoot),i&&s();let a=await this.option.data(),c=[],l=I.val(o);for(let n=0;n<a.length;n++){let i=a[n];if(typeof t==`function`){let e=await t(i);if(typeof e==`boolean`&&!e)continue}if(e){let t=await e?.filterCallBack?.(i);if(typeof t==`boolean`&&!t)continue}if(r){let e=!0;if(e=l===``,e||=await r?.filterCallBack?.(i,l),!e)continue}c.push(i)}await this.appendRuleItemElement(n.$shadowRoot,c)};if(typeof t==`object`&&t){let e;e=typeof t.external==`number`?t.external:Array.from(i.options).findIndex(e=>Reflect.get(e,`data-value`).value===t.external),e!==-1&&(i.selectedIndex=e);let n;n=typeof t.rule==`number`?t.rule:Array.from(a.options).findIndex(e=>Reflect.get(e,`data-value`).value===t.rule),n!==-1&&(a.selectedIndex=n)}await c(!0)}else I.hide(r,!1)}showEditView(t,n,r,i,a,o){let s=async e=>{e?typeof o==`function`&&o(await this.option.getData(n)):(t||await this.option.deleteData(n),typeof a==`function`&&a(await this.option.getData(n)))};new me({title:t?`编辑`:`添加`,data:()=>n,dialogCloseCallBack:s,getView:async e=>await this.option.itemControls.edit.getView(e,t),btn:{ok:{enable:!0,text:t?`修改`:`添加`},cancel:{callback:async e=>{e.close(),await s(!1)}},close:{callback:async e=>{e.close(),await s(!1)}}},onsubmit:async(n,a)=>{let o=await this.option.itemControls.edit.onsubmit(n,t,a);return o.success?t?(e.default.success(`修改成功`),r&&await this.updateRuleItemElement(o.data,i,r)):r&&await this.appendRuleItemElement(r,o.data):t&&R.error(`修改失败`),o},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView()}parseViewElement(e){let t=e.querySelector(`.rule-view-container`),n=e.querySelector(`.pops-confirm-btn button.pops-confirm-btn-other`),r=e.querySelector(`.rule-view-search-container`);return{$container:t,$deleteBtn:n,$searchContainer:r,$externalSelect:r.querySelector(`.pops-panel-select .select-rule-status`),$ruleValueSelect:r.querySelector(`.pops-panel-select .select-rule-value`),$searchInput:r.querySelector(`.pops-panel-input input`)}}parseRuleItemElement(e){let t=e.querySelector(`.rule-controls-enable`);return{$enable:t,$enableSwitch:t.querySelector(`.pops-panel-switch`),$enableSwitchInput:t.querySelector(`.pops-panel-switch__input`),$enableSwitchCore:t.querySelector(`.pops-panel-switch__core`),$edit:e.querySelector(`.rule-controls-edit`),$delete:e.querySelector(`.rule-controls-delete`),data:Reflect.get(e,`data-rule`)}}async createRuleItemElement(t,n){let r=await this.option.getDataItemName(t),i=I.createElement(`div`,{className:`rule-item`,innerHTML:`
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
					${L.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${L.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(i,`data-rule`,t);let a=`pops-panel-switch-is-checked`,{$enable:o,$enableSwitch:s,$enableSwitchCore:c,$enableSwitchInput:l,$delete:u,$edit:d}=this.parseRuleItemElement(i);return this.option.itemControls.enable.enable?(I.on(c,`click`,async()=>{let e=!1;s.classList.contains(a)?(s.classList.remove(a),e=!1):(s.classList.add(a),e=!0),l.checked=e,await this.option.itemControls.enable.callback(t,e)}),await this.option.itemControls.enable.getEnable(t)&&s.classList.add(a)):o.remove(),this.option.itemControls.edit.enable?I.on(d,`click`,e=>{I.preventEvent(e),this.showEditView(!0,t,n,i,e=>{t=null,t=e})}):d.remove(),this.option.itemControls.delete.enable?I.on(u,`click`,r=>{I.preventEvent(r);let a=L.confirm({title:{text:`提示`,position:`center`},content:{text:`确定删除该条数据？`,html:!1},btn:{ok:{enable:!0,callback:async()=>{R.success(`删除数据`),await this.option.itemControls.delete.deleteCallBack(t)?(e.default.success(`成功删除该数据`),i.remove(),await this.updateDeleteAllBtnText(n),a.close()):e.default.error(`删除该数据失败`)}},cancel:{text:`取消`,enable:!0}},mask:{enable:!0},width:`300px`,height:`200px`})}):u.remove(),i}async appendRuleItemElement(e,t){let{$container:n}=this.parseViewElement(e),r=[],i=Array.isArray(t)?t:[t];for(let t=0;t<i.length;t++){let n=i[t],a=await this.createRuleItemElement(n,e);r.push(a)}return I.append(n,r),await this.updateDeleteAllBtnText(e),r}async updateRuleContaienrElement(e){this.clearContent(e);let t=await this.option.data();await this.appendRuleItemElement(e,t),await this.updateDeleteAllBtnText(e)}async updateRuleItemElement(e,t,n){let r=await this.createRuleItemElement(e,n);t.after(r),t.remove()}clearContent(e){let{$container:t}=this.parseViewElement(e);I.html(t,``)}setDeleteBtnText(e,t,n=!1){let{$deleteBtn:r}=this.parseViewElement(e);n?I.html(r,t):I.text(r,t)}async updateDeleteAllBtnText(e){let t=await this.option.data();this.setDeleteBtnText(e,`清空所有(${t.length})`)}},Z={$key:{STORAGE_KEY:`cookie-rule`},$data:{matchedRuleList:[]},init(){this.$data.matchedRuleList.length=0,this.$data.matchedRuleList=this.getMatchedRuleList(),this.$data.matchedRuleList.length&&B.add({key:`matched-cookie-rule-list`,text:`${window.location.hostname} ${this.$data.matchedRuleList.length}条规则`,isStoreValue:!1,autoReload:!1,showText(e){return e},callback(){console.log(Z.$data.matchedRuleList),alert(`以下是命中的规则名：
`+Z.$data.matchedRuleList.map(e=>e.name).join(`
`))}})},getMatchedRuleList(e=window.location.href){let t=this.getData(),n=[];return t.forEach(t=>{if(!t.enable)return;let r=t.data.url;if(t.data.enableRegExpToMatchUrl){if(!new RegExp(r,`i`).test(e))return}else if(!e.includes(r))return;n.push(t)}),n},showView(){let t=L.fn.PanelHandlerComponents();function n(e){return{get(t,n){return Reflect.get(e,t)??n},set(t,n){Reflect.set(e,t,n)}}}let r=this.getMatchedRuleList();new he({title:`Cookie规则`,data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:e=>e.name,updateData:e=>this.updateData(e),deleteData:e=>this.deleteData(e),getData:e=>this.getData().find(t=>t.uuid===e.uuid)??e,itemControls:{enable:{enable:!0,getEnable(e){return e.enable},callback:(e,t)=>{e.enable=t,this.updateData(e)}},edit:{enable:!0,getView:(e,r)=>{let i=document.createDocumentFragment(),a=this.getTemplateData();r||(e=a);let o=J(`启用`,`enable`,a.enable);Reflect.set(o.props,k,n(e));let s=t.createSectionContainerItem_switch(o).$el,c=X(`规则名称`,`name`,``,a.name,void 0,`必填`);Reflect.set(c.props,k,n(e));let l=t.createSectionContainerItem_input(c).$el,u=q(`Cookie管理Api`,`execApiName`,a.data.execApiName,[{text:`（当前）`+W.baseCookieHandler,value:`use-global`},...W.totalCookieManagerApiNameList.map(e=>({text:e,value:e}))],void 0,`操作Cookie的Api函数`);Reflect.set(u.props,k,n(e.data));let d=t.createSectionContainerItem_select(u).$el,f=X(`网址`,`url`,a.data.url,`用于执行该规则的网址`,void 0,`必填`);Reflect.set(f.props,k,n(e.data));let p=t.createSectionContainerItem_input(f).$el,m=J(`启用正则匹配网址`,`enableRegExpToMatchUrl`,a.data.enableRegExpToMatchUrl);Reflect.set(m.props,k,n(e.data));let h=t.createSectionContainerItem_switch(m).$el,g=X(`Cookie名称`,`cookieName`,a.data.cookieName,`用于匹配执行操作的Cookie名`,void 0,`必填`);Reflect.set(g.props,k,n(e.data));let _=t.createSectionContainerItem_input(g).$el,v=J(`启用正则匹配Cookie名称`,`enableRegExpToMatchCookieName`,a.data.enableRegExpToMatchCookieName);Reflect.set(v.props,k,n(e.data));let y=t.createSectionContainerItem_switch(v).$el,b=q(`操作模式`,`operationMode`,a.data.operationMode,[{value:`delete`,text:`删除Cookie`},{value:`extended`,text:`自动延长Cookie有效期30天`},{value:`extended-90`,text:`自动延长Cookie有效期90天`},{value:`extended-180`,text:`自动延长Cookie有效期180天`},{value:`extended-360`,text:`自动延长Cookie有效期360天`}]);Reflect.set(b.props,k,n(e.data));let ee=t.createSectionContainerItem_select(b).$el,x=pe(`备注`,`remark`,a.data.remark);Reflect.set(x.props,k,n(e.data));let S=t.createSectionContainerItem_textarea(x).$el;return i.append(s,l,d,p,h,_,y,ee,S),i},onsubmit:(n,r,i)=>{let a=n.querySelectorAll(`.rule-form-ulist > li`),o=this.getTemplateData();r&&(o.uuid=i.uuid);try{return a.forEach(e=>{let n=Reflect.get(e,t.$data.nodeStoreConfigKey),r=Reflect.get(n,`attributes`),i=Reflect.get(e,k),a=Reflect.get(r,D),s=Reflect.get(r,O),c=i.get(a,s);Reflect.has(o,a)?Reflect.set(o,a,c):Reflect.has(o.data,a)?Reflect.set(o.data,a,c):R.error(`${a}不在数据中`)}),o.name.trim()===``?(e.default.error(`规则名称不能为空`),{success:!1,data:o}):o.data.url.trim()===``?(e.default.error(`网址不能为空`),{success:!1,data:o}):o.data.cookieName.trim()===``?(e.default.error(`Cookie名称不能为空`),{success:!1,data:o}):r?{success:this.updateData(o),data:o}:{success:this.addData(o),data:o}}catch(e){return R.error(e),{success:!1,data:o}}finally{this.init()}},style:`
          .pops-panel-textarea textarea{
              height: 150px;
          }
					.pops-panel-item-left-desc-text{
						line-height: normal;
						margin-top: 6px;
						font-size: 0.8em;
						color: rgb(108, 108, 108);
						max-width: 100px;
					}
          `},delete:{enable:!0,deleteCallBack:e=>this.deleteData(e)}},bottomControls:{filter:{enable:!0,option:[{name:`全部`,value:`all`,filterCallBack(){return!0}},{name:`启用`,value:`enable`,filterCallBack(e){return e.enable}},{name:`未启用`,value:`notEnable`,filterCallBack(e){return!e.enable}},{name:`当前网站执行`,value:`currentSite`,filterCallBack(e){return r.some(t=>t.uuid===e.uuid)}}],inputOption:[{name:`规则名称`,value:`url`,filterCallBack(e,t){return!!e.name.match(t)}},{name:`网址`,value:`url`,filterCallBack(e,t){return!!e.data.url.match(t)}},{name:`Cookie名称`,value:`cookieName`,filterCallBack(e,t){return!!e.data.cookieName.match(t)}},{name:`备注`,value:`remark`,filterCallBack(e,t){return!!e.data.remark.match(t)}}]}}}).showView()},getTemplateData(){return{uuid:F.generateUUID(),enable:!0,name:``,data:{url:``,execApiName:`use-global`,enableRegExpToMatchUrl:!1,cookieName:``,enableRegExpToMatchCookieName:!1,operationMode:`delete`,remark:``}}},getData(){return _(this.$key.STORAGE_KEY,[])},setData(e){x(this.$key.STORAGE_KEY,e)},addData(e){let t=this.getData();return t.findIndex(t=>t.uuid==e.uuid)===-1?(t.push(e),x(this.$key.STORAGE_KEY,t),!0):!1},updateData(e){let t=this.getData(),n=t.findIndex(t=>t.uuid==e.uuid),r=!1;return n!==-1&&(r=!0,t[n]=e),this.setData(t),r},deleteData(e){let t=this.getData(),n=t.findIndex(t=>t.uuid==e.uuid),r=!1;return n!==-1&&(r=!0,t.splice(n,1)),this.setData(t),r},clearData(){h(this.$key.STORAGE_KEY)},exportRule(e=`rule.json`){let t=this.getData(),n=new Blob([JSON.stringify(t,null,4)]),r=window.URL.createObjectURL(n),i=I.createElement(`a`);i.href=r,i.download=e,i.click(),setTimeout(()=>{window.URL.revokeObjectURL(r)},1500)},importRule(){let t=L.alert({title:{text:`请选择导入方式`,position:`center`},content:{text:`
                    <div class="import-mode" data-mode="local">本地导入</div>
                    <div class="import-mode" data-mode="network">网络导入</div>
                `,html:!0},width:M.info.width,height:M.info.height,style:`
                .import-mode{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),n=t.$shadowRoot.querySelector(`.import-mode[data-mode='local']`),r=t.$shadowRoot.querySelector(`.import-mode[data-mode='network']`);I.on(n,`click`,n=>{I.preventEvent(n),t.close();let r=I.createElement(`input`,{type:`file`,accept:`.json`});I.on(r,[`propertychange`,`input`],()=>{if(!r.files?.length)return;let t=r.files[0],n=new FileReader;n.onload=()=>{let t=F.toJSON(n.result);if(!Array.isArray(t)){R.error(`不是正确的规则文件`,t),e.default.error(`不是正确的规则文件`);return}this.setData(t),e.default.success(`成功导入 ${t.length}条规则`)},n.readAsText(t,`UTF-8`)}),r.click()}),I.on(r,`click`,n=>{I.preventEvent(n),t.close(),L.prompt({title:{text:`网络导入`,position:`center`},content:{text:``,placeholder:`url`,focus:!0},btn:{ok:{callback:async t=>{let n=t.text;if(F.isNull(n)){e.default.error(`请填入完整的url`);return}let r=await V.get(n);if(!r.status)return;let i=F.toJSON(r.data.responseText);if(!Array.isArray(i)){R.error(`不是正确的规则文件`,r,i),e.default.error(`不是正确的规则文件`);return}this.setData(i),t.close(),e.default.success(`成功导入 ${i.length}条规则`)}}},width:M.info.width,height:`auto`})})}},ge={beforeEdit(e,t){let n=W.baseCookieHandler;return n===`cookieStore`?typeof e.expires==`number`&&(e.expirationDate=e.expires):(n===`GM_cookie`||n===`GM.cookie`)&&t&&typeof e.expirationDate==`number`&&(e.expirationDate*=1e3),e},afterEdit(e){let t=W.baseCookieHandler;return t===`document.cookie`?e.domain=``:t===`cookieStore`?typeof e.expirationDate==`number`&&(e.expires=e.expirationDate):(t===`GM_cookie`||t===`GM.cookie`)&&typeof e.expirationDate==`number`&&(e.expirationDate=Math.floor(e.expirationDate/1e3)),e}},Q=(e,t,n,r)=>({text:e,type:`input`,props:{},attributes:{},description:``,getValue(){return t()},callback(e,t){n(t)},placeholder:``,disabled:!!r}),_e=(e,t,n,r)=>({text:e,type:`textarea`,props:{},attributes:{},description:``,placeholder:``,getValue(){return t()},disabled:r,callback:function(e,t){n(t)}}),$=(e,t,n,r,i)=>({text:e,type:`select`,description:``,attributes:{},props:{},getValue(){return n()},callback(e){let t=e.value;r(t)},data:typeof t==`function`?t():t,disabled:!!i,width:`100%`}),ve={init(){},showView(t,n){let r=!!t,i={name:``,value:``,domain:window.location.hostname,path:`/`,secure:!1,session:!1,hostOnly:!1,httpOnly:!1,sameSite:`lax`,expirationDate:Date.now()+3600*24*30*1e3},a=F.assign({},i,!0);F.assign(a,t??{},!0),a=ge.beforeEdit(a,r);let o=L.confirm({title:{text:r?`编辑Cookie`:`添加Cookie`,position:`center`},content:{text:``,html:!0},drag:!0,btn:{position:`center`,ok:{text:r?`编辑`:`添加`,async callback(t){let i=ve.validCookieInfo(a);if(!i.status){typeof i.msg==`string`&&e.default.error(i.msg);return}if(a.value=encodeURIComponent(a.value),a=ge.afterEdit(a),r){let n=await W.update(a);n?e.default.error(n.toString()):(e.default.success(`修改成功`),t.close())}else{let n=await W.add(a);n?e.default.error(n.toString()):(e.default.success(`添加成功`),t.close())}typeof n==`function`&&n(a)}},cancel:{text:`取消`}},mask:{enable:!0},width:M.settingMiddle.width,height:`auto`,style:`
      ${L.config.cssText.panelCSS}

      .pops-panel-input input:disabled{
          color: #b4b4b4;
      }
      .pops-confirm-content{
          padding: 10px;
      }
      .pops-confirm-content li{
          display: flex;
          flex-direction: column;
      }
      .pops-panel-item-left-text{
          margin-bottom: 5px;
      }
      .pops-panel-input.pops-input-disabled{
          border: 1px solid #dcdfe6;
      }
      .pops-panel-textarea textarea{
        resize: auto;
        border-radius: 4px;
      }
      .pops-panel-input{
        width: 100%;
      }
      #cookie-item-property-expires{
        border: 1px solid rgb(184, 184, 184, var(--pops-bd-opacity));
        border-radius: 4px;
        background: #ffffff;
        width: 100%;
        height: 32px;
        padding: 0px 8px;
      }
      #cookie-item-property-expires:hover{
        border: 1px solid #c0c4cc
      }
      #cookie-item-property-expires:focus,
      #cookie-item-property-expires:focus-within{
        outline: 0;
        border: 1px solid #409eff;
        border-radius: 4px;
        box-shadow: none;
      }
      `,darkStyle:`
      #cookie-item-property-expires,
      .export-example-code-text-container,
      .cookir-format-encode-pwd-container input{
        background: #232323;
      }
      #cookie-item-property-expires{
        color: #ffffff;
        border: 1px solid #414141;
      }
      .cookir-format-encode-pwd-container input{
        color: #ffffff;
      }
      `}).$shadowRoot.querySelector(`.pops-confirm-content`),s=L.fn.PanelHandlerComponents(),c=s.createSectionContainerItem_input(Q(`name`,()=>a.name,e=>a.name=e,r)).$el,l=s.createSectionContainerItem_textarea(_e(`value`,()=>a.value,e=>a.value=e)).$el,u=s.createSectionContainerItem_input(Q(`domain`,()=>a.domain,e=>a.domain=e)).$el,d=s.createSectionContainerItem_input(Q(`path`,()=>a.path,e=>a.path=e)).$el,f;if(a.session)f=s.createSectionContainerItem_input(Q(`expires`,()=>`会话`,()=>{},!0)).$el;else{let e=fe(()=>{let e=I.createElement(`li`,{innerHTML:`
							<div class="pops-panel-item-left-text">
								<p class="pops-panel-item-left-main-text">expires</p>
							</div>
							<div class="pops-panel-item-right-wrapper">
								<input type="datetime-local" id="cookie-item-property-expires">
							</div>
						`}),t=e.querySelector(`#cookie-item-property-expires`);return t.valueAsNumber=a.expirationDate,I.on(t,[`change`,`input`,`propertychange`],e=>{I.preventEvent(e),a.expirationDate=t.valueAsNumber}),e});f=s.createSectionContainerItem_own(e).$el}let p=s.createSectionContainerItem_select($(`httpOnly`,[{text:`true`,value:!0},{text:`false`,value:!1}],()=>a.httpOnly,e=>a.httpOnly=e)).$el,m=s.createSectionContainerItem_select($(`secure`,[{text:`true`,value:!0},{text:`false`,value:!1}],()=>a.secure,e=>a.secure=e)).$el,h=[{text:`no_restriction`,value:`no_restriction`},{text:`lax`,value:`lax`},{text:`strict`,value:`strict`},{text:`unspecified`,value:`unspecified`}];W.baseCookieHandler===`cookieStore`&&(h=[{text:`lax`,value:`lax`},{text:`strict`,value:`strict`},{text:`none`,value:`none`}]);let g=s.createSectionContainerItem_select($(`sameSite`,h,()=>a.sameSite,e=>a.sameSite=e)).$el;I.append(o,[c,l]),W.baseCookieHandler===`GM_cookie`||W.baseCookieHandler===`GM.cookie`?I.append(o,[u,d,f,p,m,g]):W.baseCookieHandler===`cookieStore`&&I.append(o,[u,d,f,g])},validCookieInfo(e){return e.name==null||e.name==``?{status:!1,msg:`name不能为空`}:e.domain==null||e.domain==``?{status:!1,msg:`domain不能为空`}:e.path==null||e.path==``?{status:!1,msg:`path不能为空`}:{status:!0}}},ye={$data:{cookieList:[]},init(){this.registerMenu()},async showView(){let t=L.alert({title:{text:`Cookie编辑器`,html:!1,position:`center`},content:{text:`
        <div class="cookie-controls">
            <div class="cookie-search-wrapper">
                <div class="cookie-search-inner">
                    <input type="text" placeholder="搜索Cookie名称">
                </div>
                <div class="cookie-search-setting">
                    <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4368" width="28" height="28">
                        <path fill="#2c2c2c" d="M439.264 208a16 16 0 0 0-16 16v67.968a239.744 239.744 0 0 0-46.496 26.896l-58.912-34a16 16 0 0 0-21.856 5.856l-80 138.56a16 16 0 0 0 5.856 21.856l58.896 34a242.624 242.624 0 0 0 0 53.728l-58.88 34a16 16 0 0 0-6.72 20.176l0.848 1.68 80 138.56a16 16 0 0 0 21.856 5.856l58.912-34a239.744 239.744 0 0 0 46.496 26.88V800a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-67.968a239.744 239.744 0 0 0 46.512-26.896l58.912 34a16 16 0 0 0 21.856-5.856l80-138.56a16 16 0 0 0-4.288-20.832l-1.568-1.024-58.896-34a242.624 242.624 0 0 0 0-53.728l58.88-34a16 16 0 0 0 6.72-20.176l-0.848-1.68-80-138.56a16 16 0 0 0-21.856-5.856l-58.912 34a239.744 239.744 0 0 0-46.496-26.88V224a16 16 0 0 0-16-16h-160z m32 48h96v67.376l28.8 12.576c13.152 5.76 25.632 12.976 37.184 21.52l25.28 18.688 58.448-33.728 48 83.136-58.368 33.68 3.472 31.2a194.624 194.624 0 0 1 0 43.104l-3.472 31.2 58.368 33.68-48 83.136-58.432-33.728-25.296 18.688c-11.552 8.544-24.032 15.76-37.184 21.52l-28.8 12.576V768h-96v-67.376l-28.784-12.576c-13.152-5.76-25.632-12.976-37.184-21.52l-25.28-18.688-58.448 33.728-48-83.136 58.368-33.68-3.472-31.2a194.624 194.624 0 0 1 0-43.104l3.472-31.2-58.368-33.68 48-83.136 58.432 33.728 25.296-18.688a191.744 191.744 0 0 1 37.184-21.52l28.8-12.576V256z m47.28 144a112 112 0 1 0 0 224 112 112 0 0 0 0-224z m0 48a64 64 0 1 1 0 128 64 64 0 0 1 0-128z"></path>
                    </svg>
                </div>
            </div>
            <div class="cookie-control-wrapper">
                <button class="cookie-control-refresh" type="button" data-type="default">刷新</button>
                <button class="cookie-control-add" type="button" data-type="default">添加</button>
                <button class="cookie-control-export" type="button" data-type="default">导出</button>
                <button class="cookie-control-import" type="button" data-type="default">导入</button>
                <button class="cookie-control-clear-all" type="button" data-type="default">删除</button>
                <button class="cookie-control-rule-manager" type="button" data-type="default">规则管理</button>
                <div class="cookie-setting"> 
                    <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4368" width="28" height="28">
                        <path fill="#2c2c2c" d="M439.264 208a16 16 0 0 0-16 16v67.968a239.744 239.744 0 0 0-46.496 26.896l-58.912-34a16 16 0 0 0-21.856 5.856l-80 138.56a16 16 0 0 0 5.856 21.856l58.896 34a242.624 242.624 0 0 0 0 53.728l-58.88 34a16 16 0 0 0-6.72 20.176l0.848 1.68 80 138.56a16 16 0 0 0 21.856 5.856l58.912-34a239.744 239.744 0 0 0 46.496 26.88V800a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-67.968a239.744 239.744 0 0 0 46.512-26.896l58.912 34a16 16 0 0 0 21.856-5.856l80-138.56a16 16 0 0 0-4.288-20.832l-1.568-1.024-58.896-34a242.624 242.624 0 0 0 0-53.728l58.88-34a16 16 0 0 0 6.72-20.176l-0.848-1.68-80-138.56a16 16 0 0 0-21.856-5.856l-58.912 34a239.744 239.744 0 0 0-46.496-26.88V224a16 16 0 0 0-16-16h-160z m32 48h96v67.376l28.8 12.576c13.152 5.76 25.632 12.976 37.184 21.52l25.28 18.688 58.448-33.728 48 83.136-58.368 33.68 3.472 31.2a194.624 194.624 0 0 1 0 43.104l-3.472 31.2 58.368 33.68-48 83.136-58.432-33.728-25.296 18.688c-11.552 8.544-24.032 15.76-37.184 21.52l-28.8 12.576V768h-96v-67.376l-28.784-12.576c-13.152-5.76-25.632-12.976-37.184-21.52l-25.28-18.688-58.448 33.728-48-83.136 58.368-33.68-3.472-31.2a194.624 194.624 0 0 1 0-43.104l3.472-31.2-58.368-33.68 48-83.136 58.432 33.728 25.296-18.688a191.744 191.744 0 0 1 37.184-21.52l28.8-12.576V256z m47.28 144a112 112 0 1 0 0 224 112 112 0 0 0 0-224z m0 48a64 64 0 1 1 0 128 64 64 0 0 1 0-128z"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div class="cookie-wrapper">
            <div class="cookie-list-wrapper">
            </div>
        </div>`,html:!0},btn:{ok:{enable:!1}},mask:{enable:!0},drag:!0,width:M.setting.width,height:M.setting.height,style:`
      ${L.config.cssText.panelCSS}

      .pops .pops-content{
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }
      .cookie-controls{
        display: flex;
        flex-direction: column;
        padding: 10px;
        gap: 10px;
      }
      .cookie-wrapper{
          display: flex;
          flex-direction: column;
          padding: 10px;
          padding-top: 0px;
          gap: 10px;
          overflow: auto;
          height: 100%;
      }
      .cookie-control-wrapper{
          --button-margin-left: 0px;
          display: flex;
          flex-wrap: nowrap;
          padding: 0px 10px;
          gap: 5px;
          overflow-x: auto;
      }
      .cookie-search-wrapper{
          display: flex;
          align-items: center;
      }
      .cookie-search-inner{
          width: 100%;
          padding: 0px 10px;
      }
      .cookie-search-inner input{
          height: 30px;
          padding: 5px 8px;
          width: 100%;
          border-radius: 6px;
      }
      .cookie-search-inner input::placeholder{
        display: flex;
        align-items: baseline;
      }
      .cookie-search-inner input:focus-visible{
          outline: none;
      }
      .cookie-setting,
      .cookie-search-setting{
          display: flex;
          align-items: center;
      }
      .cookie-setting svg,
      .cookie-search-setting svg{
          cursor: pointer;
      }
      .cookie-list-wrapper{
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
      }
      .cookie-item{
          display: flex;
          flex-direction: column;
          padding: 10px 10px;
          margin: 0px 10px;
          background: #f1efef;
          border-radius: 10px;
          gap: 5px;
          box-sizing: border-box;
          width: 100%;
      }
      .cookie-item-group{
          display: flex;
          align-items: stretch;
      }
      .cookie-item-group-left{
          width: 100px;
          min-width: 100px;
          max-width: 100px;
          text-transform: capitalize
      }
      .cookie-item-group-control{
          align-items: center;
      }
      .cookie-item-group-control .cookie-item-group-right{
          display: flex;
          align-items: center;
          gap: 10px;
      }
      .cookie-item-group-control .cookie-item-group-control-copy,
      .cookie-item-group-control .cookie-item-group-control-edit,
      .cookie-item-group-control .cookie-item-group-control-delete{
          display: flex;
          align-items: center;
      }
      .cookie-item-group-control .cookie-item-group-control-delete svg{
          width: 16px;
          height: 16px;
      }
      .cookie-item-group-control svg{
          cursor: pointer;
      }
      
      `,darkStyle:`
      .cookie-item,
      #cookie-item-property-expires{
        background: #232323;
      }
      svg path{
        fill: currentColor;
      }
      .cookie-search-inner input{
        background: #000000;
        color: #ffffff;
        border-color: #ffffff;
      }
      .cookie-search-inner input::placeholder{
      }
      .cookie-search-inner input:focus-visible{
      }
      `}),n=t.$shadowRoot.querySelector(`.cookie-search-inner input`),r=t.$shadowRoot.querySelector(`.cookie-search-setting`),i=t.$shadowRoot.querySelector(`.cookie-control-refresh`),a=t.$shadowRoot.querySelector(`.cookie-control-add`),o=t.$shadowRoot.querySelector(`.cookie-control-export`),s=t.$shadowRoot.querySelector(`.cookie-control-import`),c=t.$shadowRoot.querySelector(`.cookie-control-clear-all`),l=t.$shadowRoot.querySelector(`.cookie-control-rule-manager`),u=t.$shadowRoot.querySelector(`.cookie-setting`),d=t.$shadowRoot.querySelector(`.cookie-list-wrapper`),f=t=>{let n=I.createElement(`div`,{className:`cookie-item`,innerHTML:`
                `,"data-cookie-info":t}),r=[{leftText:`name`,rightText:t.name},{leftText:`value`,rightText:N.getValue(`decode-cookie-value`)?decodeURIComponent(t.value):encodeURIComponent(t.value)}];W.baseCookieHandler===`GM_cookie`||W.baseCookieHandler===`GM.cookie`?(t=t,r.push({leftText:`domain`,rightText:t.domain},{leftText:`path`,rightText:t.path},{leftText:`session`,rightText:JSON.stringify(t.session)},{leftText:`expires`,rightText:t.session?`会话`:t.expirationDate?new Date(t.expirationDate*1e3).toISOString():`未知`},{leftText:`httpOnly`,rightText:JSON.stringify(t.httpOnly)},{leftText:`hostOnly`,rightText:JSON.stringify(t.hostOnly)},{leftText:`secure`,rightText:JSON.stringify(t.secure)},{leftText:`sameSite`,rightText:t.sameSite})):W.baseCookieHandler===`cookieStore`&&(t=t,r.push({leftText:`domain`,rightText:t.domain},{leftText:`path`,rightText:t.path},{leftText:`expires`,rightText:t.expires?new Date(t.expires).toISOString():`会话`},{leftText:`secure`,rightText:JSON.stringify(t.secure)},{leftText:`sameSite`,rightText:t.sameSite})),r.forEach(e=>{let t=I.createElement(`div`,{className:`cookie-item-group`,innerHTML:`
                        <div class="cookie-item-group-left">
                            <p>${e.leftText}</p>
                        </div>
                        <div class="cookie-item-group-right">
                            <p>${e.rightText}</p>
                        </div>
                    `});Reflect.set(t,`data-key`,e.leftText),Reflect.set(t,`data-value`,e.rightText),I.append(n,t)});let i=I.createElement(`div`,{className:`cookie-item-group cookie-item-group-control`,innerHTML:`
        <div class="cookie-item-group-left">操作</div>
        <div class="cookie-item-group-right">
          <div class="cookie-item-group-control-copy">
              <svg t="1742795616339" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="M880 247.008l-162.016-166.016Q700.992 64 677.984 64h-316.992q-26.016 0-46.016 18.016-16.992 15.008-23.008 36.992H231.968q-43.008 0-73.504 31.008t-30.496 76v627.008q0 44 30.496 75.488T231.968 960h508q43.008 0 73.504-31.488t30.496-75.488v-63.008q23.008-6.016 37.504-25.504t14.496-44.512V287.008q0-24-16-40z m-168-160.992l-3.008-3.008z m98.016 177.984L744 196z m-126.016-116.992l108 110.016h-108V147.008zM676.992 128zM204.992 948q4 0.992 4.992 2.016-2.016-0.992-4.992-2.016z m27.008 4q-6.016 0-12-0.992 4.992 0.992 12 0.992z m543.008-99.008q0 15.008-10.016 25.504t-24.992 10.496H232q-14.016 0-24.512-10.496t-10.496-25.504V225.984q0-15.008 10.496-25.504t24.512-10.496h58.016v531.008q0 30.016 20.992 51.008t50.016 20.992H775.04v60z m52-132.992q0 2.016-2.016 2.016h-464q-2.016 0-2.016-2.016V136.992q0-2.016 2.016-2.016h251.008v156.992q0 15.008 10.016 24.992t24 10.016h180.992v392.992z m9.984 64q4-0.992 8.992-2.016-4.992 0.992-8.992 2.016z m-244-168.992h-107.008q-15.008 0-24.992 10.496t-10.016 24.992 10.016 24.992 24.992 10.496h107.008q14.016 0 24.512-10.496t10.496-24.992-10.496-24.992-24.512-10.496z m107.008-111.008h-214.016q-14.016 0-24.512 10.496t-10.496 24.992 10.496 24.992 24.512 10.496h214.016q14.016 0 24-10.496t10.016-24.992-10.016-24.992-24-10.496z m-240.992 36q0 4 0.992 8-0.992-4-0.992-8zM700 512z m12 52l4-2.016z m-260.992-135.488q0 14.496 10.496 24.992t24.512 10.496h214.016q14.016 0 24-10.496t10.016-24.992-10.016-24.992-24-10.496h-214.016q-14.016 0-24.512 10.496t-10.496 24.992z m8 1.504z"></path>
              </svg>
          </div>
          <div class="cookie-item-group-control-edit">
              <svg t="1742795710451" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="M800 960 224 960c-52.928 0-96-43.072-96-96L128 224c0-52.928 43.072-96 96-96l448 0c17.696 0 32 14.336 32 32s-14.304 32-32 32L224 192C206.368 192 192 206.368 192 224l0 640c0 17.664 14.368 32 32 32l576 0c17.664 0 32-14.336 32-32L832 352c0-17.664 14.304-32 32-32s32 14.336 32 32l0 512C896 916.928 852.928 960 800 960zM612 448c-8.192 0-16.384-3.136-22.624-9.376-12.512-12.512-12.512-32.736 0-45.248l318.016-318.016c12.512-12.512 32.736-12.512 45.248 0s12.512 32.736 0 45.248l-318.016 318.016C628.384 444.896 620.192 448 612 448zM480 448 288 448c-17.664 0-32-14.336-32-32s14.336-32 32-32l192 0c17.664 0 32 14.336 32 32S497.664 448 480 448zM672 640 288 640c-17.664 0-32-14.304-32-32s14.336-32 32-32l384 0c17.696 0 32 14.304 32 32S689.696 640 672 640z"></path>
              </svg>
          </div>
          <div class="cookie-item-group-control-delete">
              ${L.config.iconSVG.delete}
          </div>
        </div>`}),a=i.querySelector(`.cookie-item-group-control-copy`),o=i.querySelector(`.cookie-item-group-control-edit`),s=i.querySelector(`.cookie-item-group-control-delete`);return I.on(a,`click`,n=>{I.preventEvent(n);let r=t.value;F.copy(r).then(t=>{t?e.default.success(`复制成功`):e.default.error(`复制失败`)})}),I.on(o,`click`,e=>{I.preventEvent(e),ve.showView(t,e=>{let t=f(e);I.after(n,t),n.parentElement?.removeChild(n)})}),I.on(s,`click`,r=>{I.preventEvent(r),confirm(`确定删除该Cookie？`)&&W.delete(t).then(t=>{t?(R.error(t),e.default.error(`删除失败`)):(e.default.success(`删除成功`),n.parentElement?.removeChild(n))})}),I.append(n,[i]),n},p=async e=>{let t=await W.listAll();I.empty(d);let n=document.createDocumentFragment(),r=N.getValue(`exclude-session-cookie`);t.forEach(t=>{if(r&&(t.session||W.baseCookieHandler===`cookieStore`&&t.expires==null)||typeof e==`function`&&!e(t))return;let i=f(t);n.appendChild(i)}),this.$data.cookieList=t,d.appendChild(n)};I.on(n,[`input`,`propertychange`],F.debounce(async t=>{let r=I.val(n),i=r.trim()===``,a=N.getValue(`search-config-use-regexp`);await p(e=>i?!0:a?!!e.name.match(new RegExp(r)):e.name.includes(r)),t.from===`refreshButton`&&e.default.success(`刷新成功`)})),I.on(t.$shadowRoot,`click`,`.cookie-item-group:has(.cookie-item-group-right > p)`,(n,r)=>{if(t.$shadowRoot?.getSelection?.()?.type===`Range`)return;let i=Reflect.get(r,`data-key`),a=Reflect.get(r,`data-value`);if(!i){R.error(`该项上未获取到data-key值`);return}if(!a){R.error(`该项上未获取到data-value值`);return}F.copy(a).then(t=>{t?e.default.success(`复制 ${i} 成功`):e.default.error(`复制 ${i} 失败`)})}),I.onKeyboard(n,`keyup`,(e,t,n)=>{e===`Enter`&&n.length===0&&m()}),I.on(r,`click`,e=>{I.preventEvent(e);let t=L.alert({title:{text:`搜索配置`,position:`center`},content:{text:``,html:!0},btn:{ok:{enable:!1}},drag:!0,mask:{clickEvent:{toClose:!0}},width:M.info.width,height:M.info.height,style:`
        ${L.config.cssText.panelCSS}

        .pops-alert-content li{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
        }
        .pops-panel-item-left-desc-text{
            line-height: normal;
            margin-top: 6px;
            font-size: 0.8em;
            color: rgb(108, 108, 108);
        }
        `}).$shadowRoot.querySelector(`.pops-alert-content`),n=L.fn.PanelHandlerComponents().createSectionContainerItem_switch(J(`启用正则表达式`,`search-config-use-regexp`,!1,void 0,`使用正则表达式搜索Cookie名称`,()=>{m()})).$el;I.append(t,n)}),I.on(i,`click`,e=>{I.preventEvent(e),m(`refreshButton`)}),I.on(a,`click`,e=>{I.preventEvent(e),ve.showView(void 0,e=>{m()})}),I.on(o,`click`,async e=>{I.preventEvent(e),G.showExportDialog()}),I.on(s,`click`,async e=>{I.preventEvent(e),G.showImportDialog()}),I.on(c,`click`,async t=>{if(I.preventEvent(t),!window.confirm(`确定清除全部Cookie？`))return;let n=await W.clear();n.error?e.default.warning(`清除成功：${n.success} 失败：${n.error}`):e.default.success(`清除成功`),m()}),I.on(l,`click`,e=>{I.preventEvent(e),Z.showView()}),I.on(u,`click`,e=>{I.preventEvent(e);let t=L.alert({title:{text:`设置`,position:`center`},content:{text:``,html:!0},btn:{ok:{enable:!1}},drag:!0,mask:{clickEvent:{toClose:!0}},width:M.settingMiddle.width,height:M.settingMiddle.height,style:`
        ${L.config.cssText.panelCSS}

        .pops-alert-content li{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
        }
        .pops-panel-item-left-desc-text{
            line-height: normal;
            margin-top: 6px;
            font-size: 0.8em;
            color: rgb(108, 108, 108);
        }`}).$shadowRoot.querySelector(`.pops-alert-content`),n=L.fn.PanelHandlerComponents(),r=n.createSectionContainerItem_select(q(`CookieManager Api`,`cookie-manager-api`,`document.cookie`,W.totalCookieManagerApiNameList.map(e=>({text:e,value:e})),void 0,`操作Cookie的Api函数`,()=>{m()})).$el,i=n.createSectionContainerItem_switch(J(`解码Cookie值`,`decode-cookie-value`,!1,()=>{m()},`对Cookie值进行解码`)).$el,a=n.createSectionContainerItem_switch(J(`排除Session Cookie`,`exclude-session-cookie`,!1,()=>{m()},`过滤掉浏览器会话Cookie`)).$el;I.append(t,[r,i,a])});let m=e=>{I.emit(n,`input`,{from:e})};m()},registerMenu(){B.add({key:`cookie_manager_view`,text:`⚙ Cookie管理`,autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showView()}})}},be={init(){this.execController(),I.onReady(()=>{this.execController()})},async execController(){for(let e=0;e<Z.$data.matchedRuleList.length;e++){let t=Z.$data.matchedRuleList[e],n=t.data.operationMode;R.success(`执行规则：${t.name}`);let r=t.data.execApiName;r===`use-global`&&(r=void 0);let i=new F.CookieManagerService({baseCookieHandler:r}),a=await i.listAll();for(let e=0;e<a.length;e++){let r=a[e],o=r.name,s=t.data.cookieName,c=!1;if(t.data.enableRegExpToMatchCookieName?new RegExp(s,`i`).test(o)&&(c=!0):o.includes(s)&&(c=!0),c){if(n===`delete`)i.delete(r);else if(n.startsWith(`extended`)){let e=Date.now(),t=720*60*60*1e3;t*3,t*6,t*12;let a=t;n===`extended-90`?a=7776e6:n===`extended-180`?a=15552e6:n===`extended-360`&&(a=31104e6);let o=!1;if(i.baseCookieHandler===`document.cookie`)r.expirationDate=e+a,o=!0;else if(i.baseCookieHandler===`cookieStore`){let t=r.expires;typeof t==`number`&&t-e<a&&(r.expires=t+a,o=!0)}else if(i.baseCookieHandler===`GM_cookie`||i.baseCookieHandler===`GM.cookie`){let t=r.expirationDate;typeof t==`number`&&t*1e3-e<a&&(r.expirationDate=t+a/1e3,o=!0)}else R.error(`未知的cookieManagerApiName`,i.baseCookieHandler);o&&await i.update(r)}}}}}},xe={id:`view-rule`,title:`规则`,headerTitle:`Cookie操作规则`,views:[{type:`container`,text:``,views:[K(`自定义规则`,`操作Cookie的规则`,`管理`,void 0,!1,!1,`default`,()=>{Z.showView()})]},{type:`container`,text:``,views:[K(`数据导入`,`导入自定义规则数据`,`导入`,void 0,!1,!1,`primary`,()=>{Z.importRule()}),K(`数据导出`,`导出自定义规则数据`,`导出`,void 0,!1,!1,`primary`,()=>{Z.exportRule(`CookieManagerRule.json`)})]}]},Se={id:`view-general`,title:`通用`,views:[{text:`Toast配置`,type:`container`,views:[q(`Toast位置`,P.qmsg_config_position.key,P.qmsg_config_position.defaultValue,[{value:`topleft`,text:`左上角`},{value:`top`,text:`顶部`},{value:`topright`,text:`右上角`},{value:`left`,text:`左边`},{value:`center`,text:`中间`},{value:`right`,text:`右边`},{value:`bottomleft`,text:`左下角`},{value:`bottom`,text:`底部`},{value:`bottomright`,text:`右下角`}],e=>{R.info(`设置当前Qmsg弹出位置`+e.text)},`Toast显示在页面九宫格的位置`),q(`最多显示的数量`,P.qmsg_config_maxnums.key,P.qmsg_config_maxnums.defaultValue,[{value:1,text:`1`},{value:2,text:`2`},{value:3,text:`3`},{value:4,text:`4`},{value:5,text:`5`}],void 0,`限制Toast显示的数量`),J(`逆序弹出`,P.qmsg_config_showreverse.key,P.qmsg_config_showreverse.defaultValue,void 0,`修改Toast弹出的顺序`)]}]};U.addContentConfig([Se,xe]),N.init(),ye.init(),Z.init(),be.init()})(Qmsg,DOMUtils,pops,Utils,CryptoJS);
