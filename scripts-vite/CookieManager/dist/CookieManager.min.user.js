// ==UserScript==
// @name         CookieManager
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.5.2
// @author       WhiteSevs
// @description  简单而强大的Cookie编辑器，允许您快速创建、编辑和删除Cookie
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA/NJREFUeF7tWm1u4jAQjVHusfR3jMQNlp5ky0l2e5K2Jym9ARLO79JzEMgyKF5FqeN5YzuwQPoHqRl/zPObN5NxVHbnf+rO/c9GAEYG3DkCYwjcOQFGETxbCGitF1mWLeq6/qGUmtZ1PW1+t0qpN2PMn0uwcTAA5vP5tKqqp8bhJ8C5R2PMCrBLajIIAFprOs3fkp0eGfFaluVSMiaFbVIAQhy3Tlw1AA3dXyjGQ0/lagFoxO091PGrZkAq5wmEq2NASuevDgCB889HXVjleb6tqmraaASbHeq6ptpgm+f5cr1eb2PDyzdenAUawfsENuXM60VRvBydQ+oCWmJljHkE1go2EQOgtSbB86q9L54FAJIubMuyfAj2DhgoAmA2m1FlR+nO+6eUWm42m9c+IwREO9YYI9ojt7fuc9HkRVF8Uv0OLPLsq+0F82T/DQDCKs8bu1rrGgDxZELh5LKdTCYfPpah88MMkGy6WdwpghL6A054mQaMx/oBaOy3F2xS2ZtNg/SsqqqocrnrUAqRhBggTF0I8MlsYjUCAiCA/skc5CYaHACO/rZq42oDzpHQ55RyXWNRgWQZ0Ef/xvFlu4sjzBShPkPjXPtzDQwGIM/zB1edzjEG2n06I7aUZgFwpS3u1dVX6LSyg83zv8DiKgSWeABczkSUut82ZJun0h4iggaSJhEGuKq20FLXWRylaKm5ABkMAN/Efb0CbjNDCSiXJlkGeOL5GwuYk/TG4xDiyYFOrGEB8NXuVtCoe0M3Pb445jbDVZs0/rRhpegX7T4nEUFJB8erTX3iyTVJulkHFU4uW6EMEN/y9KFgGdPuFQAC2HuK3JtlKgCIbtF9f8ebom12euncV3DRfFxzlkvXEAM4eiL5OMbGp+Lc3rgMAAHQIM02QmOcZMb23hr7AEDoLwEgeRgIAOstuny1A0J/GACOagJnxKYu4UTiH6E/DAAZpipUQvsHRGlqhDb1Bm3Jd8ME9wrZQsgeGbFgt9u9h765nbN/gJ6+iAGxLDhX/wCNfXuwMANoAFC0OGOcU2TJRQkjImzp2x0vAsCCIA0F7lS4ig5RTu5do28OMQAtJiA3xHbd0P4B4ru1CfrKLAgAqR6E9A8knmdZFuS8WAS7mxI2MaT9AxSDYOejAZBqgqR/wHmPtr25eYJDoD1xbI3AbbL7PFTwXOskAaAljPQBxWBt7r6yWApg2z4ZAO2Kkb4RTtnmHsLxoEJIgjSFxX6/XxwOh5+Cj6L+LdF6Z/gY8kvy5AxwgdQG46S8nc/lm/9RY5U+j/uixid6uSk5lEE1IHYjlxp/FgZcyjlk3REABKVbthkZcMuni/g2MgBB6ZZt/gJwetZfo7objAAAAABJRU5ErkJggg==
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.12.1/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@2.0.7/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.8/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.1/dist/index.umd.min.js
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

(function (b, U, ve, ue, me) {
    'use strict';

    var qe=typeof GM_addValueChangeListener<"u"?GM_addValueChangeListener:void 0,Oe=typeof GM_cookie<"u"?GM_cookie:void 0,le=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,Re=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,ne=typeof GM_getValue<"u"?GM_getValue:void 0,te=typeof GM_info<"u"?GM_info:void 0,re=typeof GM_listValues<"u"?GM_listValues:void 0,Ne=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,Ge=typeof GM_removeValueChangeListener<"u"?GM_removeValueChangeListener:void 0,ie=typeof GM_setValue<"u"?GM_setValue:void 0,Me=typeof GM_setValues<"u"?GM_setValues:void 0,He=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Ue=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,O=typeof unsafeWindow<"u"?unsafeWindow:void 0,Fe=window;const j={waitRemove(...e){e.forEach(t=>{typeof t=="string"&&U.waitNodeList(t).then(n=>{n.forEach(i=>i.remove());});});},createBlockCSSNode(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),U.createElement("style",{type:"text/css",innerHTML:`${t.join(`,
`)}{display: none !important;}`})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),Te(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){const t=typeof Re=="function"?Re(e.keyName):null;return typeof t=="string"&&t?Te(t):j.loadStyleLink(e.url)},async loadStyleLink(e){let t=document.createElement("link");return t.rel="stylesheet",t.type="text/css",t.href=e,new Promise(n=>{U.onReady(()=>{document.head.appendChild(t),n(t);});})},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(n=>{t.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.startsWith("data:")||e.match(/^http(s|):\/\//i)?e:e.startsWith("//")?(e.startsWith("///")||(e=window.location.protocol+e),e):(e.startsWith("/")||(e+="/"),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;try{let t=new URL(e);return t.protocol="https:",t.toString()}catch{return e}},lockScroll(...e){let t=document.createElement("style");t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...e||[]);return n.forEach(i=>{i.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(t),{recovery(){n.forEach(i=>{i.classList.remove("pops-overflow-hidden-important");}),t.remove();}}},async getClipboardText(){function e(i){navigator.clipboard.readText().then(o=>{i(o);}).catch(o=>{S.error("读取剪贴板内容失败👉",o),i("");});}function t(i){navigator.permissions.query({name:"clipboard-read"}).then(()=>{e(i);}).catch(o=>{S.error("申请剪贴板权限失败，尝试直接读取👉",o.message??o.name??o.stack),e(i);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(i=>{if(!n()){i("");return}document.hasFocus()?t(i):window.addEventListener("focus",()=>{t(i);},{once:true});})},escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(e,t,n=5e3){let i,o=n-t,r=t,s=async a=>{const p=await e(a);if(typeof p=="boolean"&&p||a){k.workerClearTimeout(i);return}if(r+=t,r>o){s(true);return}i=k.workerSetTimeout(()=>{s(false);},t);};s(false);},findParentNode(e,t,n){if(n){let i=U.closest(e,n);if(i)return i.querySelector(t)}else return U.matches(e,t)?e:U.closest(e,t)},toStr(e,t=2){const n="__undefined__placeholder__replaced__str__"+performance.now();return JSON.stringify(e,(o,r)=>r===void 0?n:r,t).replace(new RegExp(`"${n}"`,"g"),"undefined")},isVerticalScreen(){return !globalThis.screen.orientation.type.includes("landscape")},isMobileDevice(e=768){return this.isVerticalScreen()?globalThis.innerWidth<e:globalThis.innerHeight<e},isTopWindow(){const e=typeof O=="object"&&O!=null?O:window;return e.top===e.self},formatVideoDuration(e){if(typeof e!="number"&&(e=parseInt(e)),isNaN(e))return e.toString();const t=function(n){return n<10?`0${n}`:n};if(e<60)return `0:${t(e)}`;if(e>=60&&e<3600){const n=Math.floor(e/60),i=e%60;return `${n}:${t(i)}`}else {const n=Math.floor(e/3600),i=Math.floor(e/60)%60,o=e%60;return `${n}:${t(i)}:${t(o)}`}},formatTimeStamp(e,t){if(typeof e=="number"&&e<1e12){const a=String(Date.now()).length-String(e).length;e=e*Math.pow(10,a);}let n=e,i=new Date(typeof e=="string"?e.replace(/-/g,"/"):e),r=new Date(t??Date.now()).getTime()-i.getTime(),s=Math.floor(r/(24*3600*1e3));if(s>0)s>7?n=k.formatTime(i.getTime()):n=s+"天前";else {let a=r%864e5,p=Math.floor(a/(3600*1e3));if(p>0)n=p+"小时前";else {let f=a%36e5,u=Math.floor(f/(60*1e3));if(u>0)n=u+"分钟前";else {let d=f%6e4;n=Math.round(d/1e3)+"秒前";}}}return n}},ce="GM_Panel",Ce="data-init",Y="data-key",Z="data-default-value",Be="data-init-more-value",Pe="data-plugin-search-config",q="data-storage-api",ze={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{M.showPanel(pe.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){j.isTopWindow()&&$e.add(this.$data.menuOption);},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e);},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(t=>{let n=this.$data.menuOption.findIndex(i=>i.key===t.key);n!==-1&&(this.$data.menuOption[n]=t);});},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1);}};class Ee{data={storeNodeList:[],destoryFnList:[]};option={};constructor(t){this.option=t;}handlerResult(t,n){const i=[],o=[];let r=[];if(Array.isArray(n))r=r.concat(n);else {const a=p=>{if(typeof p=="object"&&p!=null)if(p instanceof Element)r.push(p);else if(Array.isArray(p))a(p);else {const{$css:f,destory:u}=p;f!=null&&(Array.isArray(f)?r=r.concat(f):f instanceof Element&&r.push(f)),typeof u=="function"&&r.push(u);}else r.push(p);};a(n);}const s=a=>{if(a!=null){if(a instanceof Element){i.push(a);return}if(typeof a=="function"){o.push(a);return}}};for(const a of r){const p=s(a);if(typeof p=="boolean"&&!p)break;if(Array.isArray(a))for(const f of a){const u=s(f);if(typeof u=="boolean"&&!u)break}}this.clearStoreNodeList(),this.execDestoryFnAndClear(),t&&(this.data.storeNodeList=this.data.storeNodeList.concat(i),this.data.destoryFnList=this.data.destoryFnList.concat(o));}getEnableStatus(t){return !!this.option.getValue(t)}clearStoreNodeList=()=>{for(let t=this.data.storeNodeList.length-1;t>=0;t--)this.data.storeNodeList[t]?.remove(),this.data.storeNodeList.splice(t,1);};execDestoryFnAndClear=()=>{for(let t=this.data.destoryFnList.length-1;t>=0;t--){const n=this.data.destoryFnList[t];n(),this.data.destoryFnList.splice(t,1);}};checkMenuExec(){let t=false;return typeof this.option.checkExec=="function"?t=this.option.checkExec(this.option.keyList):t=this.option.keyList.every(n=>this.getEnableStatus(n)),t}}class Ke{storageKey;listenerData;cacheData;callbacks=[];constructor(t){if(typeof t=="string"){const n=t.trim();if(n=="")throw new Error("key can not be empty string");this.storageKey=n;}else throw new TypeError("key must be a string");this.listenerData=new ue.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.setLocalValue=this.setLocalValue.bind(this),this.destory=this.destory.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this);}[Symbol.dispose](){this.destory();}async[Symbol.asyncDispose](){this.destory();}destory(){this.cacheData=null;for(let t=this.callbacks.length-1;t>=0;t--){const n=this.callbacks[t];n(),this.callbacks.splice(t,1);}}getLocalValue(){if(this.cacheData==null){let t=ne(this.storageKey);t==null&&(t={},this.setLocalValue(t)),this.destory(),this.cacheData=t;const n=qe(this.storageKey,(i,o,r)=>{this.cacheData=null,this.cacheData=r;});return this.callbacks.push(()=>{Ge(n);}),t}else return this.cacheData}setLocalValue(t){this.cacheData=null,this.cacheData=t,ie(this.storageKey,t);}set(t,n){const i=this.get(t),o=this.getLocalValue();Reflect.set(o,t,n),this.setLocalValue(o),this.emitValueChangeListener(t,n,i);}get(t,n){const i=this.getLocalValue();return Reflect.get(i,t)??n}getAll(){return this.getLocalValue()}delete(t){const n=this.get(t),i=this.getLocalValue();Reflect.deleteProperty(i,t),this.setLocalValue(i),this.emitValueChangeListener(t,void 0,n);}has(t){const n=this.getLocalValue();return Reflect.has(n,t)}keys(){const t=this.getLocalValue();return Reflect.ownKeys(t)}values(){const t=this.getLocalValue();return Reflect.ownKeys(t).map(n=>Reflect.get(t,n))}clear(){this.destory(),le(this.storageKey);}addValueChangeListener(t,n){const i=Math.random(),o=this.listenerData.get(t)||[];return o.push({id:i,key:t,callback:n}),this.listenerData.set(t,o),i}removeValueChangeListener(t){let n=false;for(const[i,o]of this.listenerData.entries()){for(let r=0;r<o.length;r++){const s=o[r];(typeof t=="string"&&s.key===t||typeof t=="number"&&s.id===t)&&(o.splice(r,1),r--,n=true);}this.listenerData.set(i,o);}return n}async emitValueChangeListener(...t){const[n,i,o]=t;if(!this.listenerData.has(n))return;const r=this.listenerData.get(n);for(let s=0;s<r.length;s++){const a=r[s];if(typeof a.callback=="function"){let p,f;t.length===1||(t.length===2?p=i:t.length===3&&(p=i,f=o)),await a.callback(n,p,f);}}}}const K=new Ke(ce),B={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},N={setting:{get width(){return B.width<550?"88vw":B.width<700?"550px":"700px"},get height(){return B.height<450?"70vh":B.height<550?"450px":"550px"}},settingMiddle:{get width(){return B.width<350?"88vw":"350px"},get height(){return B.height<450?"88vh":"450px"}},info:{get width(){return B.width<350?"88vw":"350px"},get height(){return B.height<250?"88vh":"250px"}}},M={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new k.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new k.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new k.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new k.Dictionary),this.__onceExecData},get scriptName(){return be},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e;},key:ce,attributeKeyName:Y,attributeDefaultValueName:Z},init(){this.initContentDefaultValue(),ze.init();},initContentDefaultValue(){const e=i=>{if(!i.attributes||i.type==="button"||i.type==="container"||i.type==="deepMenu")return;const o=i.attributes,r=o[Ce];if(typeof r=="function"){const f=r();if(typeof f=="boolean"&&!f)return}const s=new Map,a=o[Y];if(a!=null){const f=o[Z];s.set(a,f);}const p=o[Be];if(typeof p=="object"&&p&&Object.keys(p).forEach(f=>{const u=p[f];s.set(f,u);}),!s.size){S.warn("请先配置键",i);return}if(i.type==="switch"){const f=typeof i.disabled=="function"?i.disabled():i.disabled;typeof f=="boolean"&&f&&this.$data.contentConfigInitDisabledKeys.push(...s.keys());}for(const[f,u]of s.entries())this.setDefaultValue(f,u);},t=i=>{for(let o=0;o<i.length;o++){const r=i[o];e(r);const s=r.views;s&&Array.isArray(s)&&t(s);}},n=[...pe.getAllContentConfig()];for(let i=0;i<n.length;i++){const o=n[i];if(!o.views)continue;const r=o.views;r&&Array.isArray(r)&&t(r);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&S.warn("该key已存在，初始化默认值失败: ",{key:e,initValue:this.$data.contentConfigInitDefaultValue.get(e)}),this.$data.contentConfigInitDefaultValue.set(e,t);},getDefaultValue(e){return this.$data.contentConfigInitDefaultValue.get(e)},setValue(e,t){K.set(e,t);},getValue(e,t){const n=K.get(e);return n??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){K.delete(e);},hasKey(e){return K.has(e)},addValueChangeListener(e,t,n){const i=K.addValueChangeListener(e,t);if(n?.immediate||n?.immediateAll){const o=this.getValue(e);n?.immediate?t(e,o,o):n?.immediateAll&&M.emitMenuValueChange(e,o,o);}return i},removeValueChangeListener(e){K.removeValueChangeListener(e);},emitMenuValueChange(e,t,n){K.emitValueChangeListener(e,t,n);},async exec(e,t,n,i=true){let o;typeof e=="string"||Array.isArray(e)?o=()=>e:o=e;let r=false;const s=o();let a=[];Array.isArray(s)?(r=true,a=s):a.push(s);const p=a.find(l=>!this.$data.contentConfigInitDefaultValue.has(l));if(p){S.warn(`${p} 键不存在`);return}const f=JSON.stringify(a);if(i&&this.$data.onceExecMenuData.has(f))return this.$data.onceExecMenuData.get(f);const u=[],d=new Ee({keyList:a,getValue:l=>!!this.getValue(l),checkExec(l){let h=false;return typeof n=="function"?h=n(l):h=l.every(y=>this.getValue(y)),h}}),m=async l=>{const h=d.checkMenuExec();let y=[];if(h){const x=a.map(w=>this.getValue(w));y=await t({key:a,triggerKey:l?.key,value:r?x:x[0],addStoreValue:(...w)=>d.handlerResult(h,w)});}d.handlerResult(h,y);};i&&a.forEach(l=>{const h=this.addValueChangeListener(l,(y,x,w)=>m({key:y}));u.push(h);}),await m();const g={checkMenuExec:d.checkMenuExec.bind(d),keyList:a,reload(){this.clearStoreNodeList(),this.execDestoryFnAndClear(),m();},clear(){d.clearStoreNodeList(),this.execDestoryFnAndClear(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreNodeList:d.clearStoreNodeList.bind(d),execDestoryFnAndClear:d.execDestoryFnAndClear.bind(d),removeValueChangeListener:()=>{u.forEach(l=>{this.removeValueChangeListener(l);});},clearOnceExecMenuData(){i&&M.$data.onceExecMenuData.delete(f);}};return this.$data.onceExecMenuData.set(f,g),g},async execMenu(e,t,n=false,i=false){return await this.exec(e,async(...o)=>await t(...o),o=>o.every(s=>{let a=!!this.getValue(s);return M.$data.contentConfigInitDisabledKeys.includes(s)&&(a=false,S.warn(`.execMenu${i?"Once":""} ${s} 被禁用`)),n&&(a=!a),a}),i)},async execMenuOnce(e,t,n=false,i=false){const o=await this.execMenu(e,t,n,true);if(i&&o){const r=()=>{o.reload();};this.removeUrlChangeWithExecMenuOnceListener(e),this.addUrlChangeWithExecMenuOnceListener(e,r);}return o},async execMoreMenu(e,t,n=false,i=false,o=false){const r=await Promise.all(e.map(async([u,d])=>await this.execMenu(u,(...g)=>d(...g),n,i))),s=new Ee({keyList:e.map(([u])=>u),getValue:u=>!!this.getValue(u)}),a=[],p=(u=false)=>{if(s.clearStoreNodeList(),s.execDestoryFnAndClear(),u){for(const d of a)this.removeValueChangeListener(d);for(const d of r)d&&this.removeUrlChangeWithExecMenuOnceListener(d.keyList);}},f=()=>{const u=r.every(d=>d?d.checkMenuExec():true);if(p(false),u){const d=t();s.handlerResult(u,d);}};f();for(const u of r)if(u){const d=this.addValueChangeListener(u.keyList[0],()=>{f();});if(a.push(d),o){const m=()=>{u.reload();};this.removeUrlChangeWithExecMenuOnceListener(u.keyList),this.addUrlChangeWithExecMenuOnceListener(u.keyList,m);}}return {clear(){for(const u of r)u?.clear();this.execDestoryFnAndClear(),this.removeValueChangeListener();},execDestoryFnAndClear(){for(const u of r)u?.execDestoryFnAndClear();p(false);},removeValueChangeListener(){for(const u of r)u?.removeValueChangeListener();p(true);}}},async execMoreMenuOnce(e,t,n=false,i=false){return await this.execMoreMenu(e,t,n,true,i)},deleteExecMenuOnce(e){return e=this.transformKey(e),this.$data.onceExecMenuData.delete(e),this.$data.urlChangeReloadMenuExecOnce.delete(e),K.removeValueChangeListener(e)},onceExec(e,t,n=false){if(e=this.transformKey(e),typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(e)||n&&(Array.isArray(e)?e:[e]).findIndex(o=>{if(!!!M.getValue(o))return  true})!==-1||(t(),this.$data.onceExecData.set(e,1));},deleteOnceExec(e){e=this.transformKey(e),this.$data.onceExecData.delete(e);},addUrlChangeWithExecMenuOnceListener(e,t){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.set(e,t),{off:()=>this.removeUrlChangeWithExecMenuOnceListener(e)}},removeUrlChangeWithExecMenuOnceListener(e){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.delete(e);},hasUrlChangeWithExecMenuOnceListener(e){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.has(e)},async emitUrlChangeWithExecMenuOnceEvent(e){const t=this.$data.urlChangeReloadMenuExecOnce.values();for(const n of t)await n(e);},showPanel(e,t=`${be}-设置`,n=false,i=false){this.$data.$panel=null,this.$data.panelContent=[];const o=e.findIndex(s=>(typeof s.isBottom=="function"?s.isBottom():!!s.isBottom)&&s.id==="script-version")!==-1;!n&&!o&&e.push(...pe.getDefaultBottomContentConfig());const r=C.panel({title:{text:t,position:"center",html:false,style:""},content:e,btn:{close:{enable:true,callback:s=>{s.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:s=>{s(),this.$data.$panel=null;}},width:N.setting.width,height:N.setting.height,drag:true,only:true,style:`
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,...this.$data.panelConfig});return this.$data.$panel=r,this.$data.panelContent=e,i||this.registerConfigSearch({$panel:r,content:e}),{$panel:r,content:e}},registerConfigSearch(e){const{$panel:t,content:n}=e,i=(g,l)=>{if(typeof e.translateCallback=="function")return e.translateCallback(g,l);if(typeof l=="object"&&l)for(const h in l)g=g.replaceAll(`{{${h}}}`,l[h]);return g},o=async(g,l)=>{if(g==null)return;const h=await l(g);return h&&typeof h.isFind=="boolean"&&h.isFind?h.data:await o(h.data,l)},r=(g,l)=>{const h=new IntersectionObserver(y=>{y.forEach(x=>{x.isIntersecting&&(l?.(),h.disconnect());});},{root:null,threshold:1});h.observe(g),g.scrollIntoView({behavior:"smooth",block:"center"});},s=g=>{const l="pops-flashing";c.onAnimationend(g,()=>{g.classList.remove(l);}),g.classList.add(l);},a=g=>{if(g.type==="dblclick"&&m)return;c.preventEvent(g);const l=C.alert({title:{text:i("搜索配置"),position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="${i("请输入需要搜素的配置名称")}">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:N.settingMiddle.width,height:"auto",drag:true,style:`
					${C.config.cssText.panelCSS}

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
					${e.searchDialogStyle??""}
				`}),h=l.$shadowRoot.querySelector(".search-config-text"),y=l.$shadowRoot.querySelector(".search-result-wrapper");h.focus();const x=()=>{c.empty(y);},w=$=>{const v=k.queryProperty($,A=>A?.next?{isFind:false,data:A.next}:{isFind:true,data:A}),_=c.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${v.matchedData?.path}</div>
							<div class="search-result-item-description">${v.matchedData?.description??""}</div>
						`}),R=C.fn.PanelHandlerComponents();return c.on(_,"click",()=>{const I=t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[$.index];if(!I){b.error(i("左侧项下标{{index}}不存在",{index:$.index}));return}I.scrollIntoView({behavior:"smooth",block:"center"}),I.click(),o($.next,async E=>{if(E?.next){const D=await c.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(L=>{const F=Reflect.get(L,R.$data.nodeStoreConfigKey);return typeof F=="object"&&F!=null&&F.text===E.name}),2500);if(D)D.click();else return b.error(i("未找到对应的二级菜单")),{isFind:true,data:E};return {isFind:false,data:E.next}}else {const D=await c.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(L=>Reflect.get(L,R.$data.nodeStoreConfigKey)===E.matchedData?.formConfig),2500);if(D){r(D);const L=D.closest(".pops-panel-forms-fold[data-fold-enable]");L&&(L.querySelector(".pops-panel-forms-fold-container").click(),await k.sleep(500)),r(D,()=>{s(D);});}else b.error(i("未找到对应的菜单项"));return {isFind:true,data:E}}});}),_},V=$=>{const v=new RegExp($,"i"),_=[],R=(I,E)=>{for(let D=0;D<I.length;D++){const L=I[D],F=L.views;if(F&&Array.isArray(F)){const W=k.deepClone(E);if(L.type==="deepMenu"){const Q=k.queryProperty(W,X=>X?.next?{isFind:false,data:X.next}:{isFind:true,data:X});Q.next={name:L.text};}R(F,W);}else {let W,Q;if(L.type==="own"){let G=Reflect.get(L.attributes||{},Pe);G&&(typeof G=="function"&&(G=G()),typeof G.text=="string"&&(W=G.text),typeof G.desc=="string"&&(Q=G.desc));}else W=L.text,Q=Reflect.get(L,"description");const X=[W,Q],_e=X.findIndex(G=>{if(typeof G=="string")return G.match(v)});if(_e!==-1){const G=k.deepClone(E),Se=k.queryProperty(G,z=>z?.next?{isFind:false,data:z.next}:{isFind:true,data:z});Se.next={name:W,matchedData:{path:"",formConfig:L,matchedText:X[_e],description:Q}};const Ve=[];k.queryProperty(G,z=>{const he=z?.name;return typeof he=="string"&&he.trim()!==""&&Ve.push(he),z?.next?{isFind:false,data:z.next}:{isFind:true,data:z}});const Ie=Ve.join(j.escapeHtml(" - "));Se.next.matchedData.path=Ie,_.push(G);}}}};for(let I=0;I<n.length;I++){const E=n[I];if(!E.views||E.isBottom&&E.id==="script-version")continue;const D=E.views;if(D&&Array.isArray(D)){let L=E.title;typeof L=="function"&&(L=L()),R(D,{index:I,name:L});}}const A=document.createDocumentFragment();for(const I of _){const E=w(I);A.appendChild(E);}x(),y.append(A);};c.on(h,"input",k.debounce($=>{c.preventEvent($);const v=c.val(h).trim();if(v===""){x();return}V(v);},200));};t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(g=>{c.on(g,"dblclick",a);});const f=new WeakMap;let u=false,d,m=false;c.on(t.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(g,l)=>{m=true,clearTimeout(d),d=void 0,u&&f.has(l)?(u=false,f.delete(l),a(g)):(d=setTimeout(()=>{u=false;},200),u=true,f.set(l,g));},{capture:true}),t.$shadowRoot.appendChild(c.createElement("style",{type:"text/css",textContent:`
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
    		`}));},transformKey(e){if(Array.isArray(e))if(e.length>1){const t=e.sort();return JSON.stringify(t)}else return e[0];else return e},getDynamicValue(e,t){let n=false,i=t;const o=this.addValueChangeListener(e,(r,s)=>{i=s;});return {get value(){return n||(n=true,i=M.getValue(e,t)),i},destory(){M.removeValueChangeListener(o);}}}},H={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},k=ue.noConflict(),c=U.noConflict(),C=ve,S=new k.Log(te,O.console||Fe.console),be=te?.script?.name||void 0,je=ve.fn.Utils.AnyTouch();S.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});const Le=()=>{const t=ve.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex??0,n=k.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex??0;return Math.max(100,t,n)};b.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(e){const t=e.setting.type;if(t==="loading")return  false;const n=e.setting.content;return t==="warning"?S.warn(n):t==="error"?S.error(n):S.info(n),false},get position(){return M.getValue(H.qmsg_config_position.key,H.qmsg_config_position.defaultValue)},get maxNums(){return M.getValue(H.qmsg_config_maxnums.key,H.qmsg_config_maxnums.defaultValue)},get showReverse(){return M.getValue(H.qmsg_config_showreverse.key,H.qmsg_config_showreverse.defaultValue)},get zIndex(){return Le()}});C.GlobalConfig.setGlobalConfig({zIndex:()=>Le(),mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const $e=new k.GM_Menu({GM_getValue:ne,GM_setValue:ie,GM_registerMenuCommand:Ne,GM_unregisterMenuCommand:He}),de=new k.Httpx({xmlHttpRequest:Ue,logDetails:false});de.interceptors.request.use(e=>e);de.interceptors.response.use(e=>e,e=>(S.error("[Httpx-HttpxRequest.response] 响应错误",{data:e}),e.type==="onabort"?b.warning("请求取消",{consoleLogContent:true}):e.type==="onerror"?b.error("请求异常",{consoleLogContent:true}):e.type==="ontimeout"?b.error("请求超时",{consoleLogContent:true}):b.error("其它错误",{consoleLogContent:true}),e));O.Object.defineProperty,O.Object.keys,O.Object.values,O.Function.prototype.apply,O.Function.prototype.call,O.Element.prototype.appendChild,O.setTimeout.bind(O),O.clearTimeout.bind(O),O.setInterval.bind(O),O.clearInterval.bind(O);const Te=c.addStyle.bind(c);j.addBlockCSS.bind(j);U.selector.bind(U);U.selectorAll.bind(U);const ee=new k.CookieManagerService({baseCookieHandler:"GM_cookie"});ee.isSupportGM_cookie||(ee.isSupportCookieStore?ee.setOptions({baseCookieHandler:"cookieStore"}):ee.setOptions({baseCookieHandler:"document.cookie"}));new k.DocumentCookieHandler;const pe={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new k.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]},getDefaultBottomContentConfig(e){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let t=false,n;const i=(a,p)=>{if(e&&typeof e.translateCallback=="function")return e.translateCallback(a,p);if(typeof p=="object"&&p)for(const f in p)a=a.replaceAll(`{{${f}}}`,p[f]);return a},o=(a,p)=>{typeof p!="string"&&(p=j.toStr(p));const f=new Blob([p]),u=globalThis.URL.createObjectURL(f);c.createElement("a",{href:u,download:a}).click(),k.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(u);},500);},r=()=>{const a=g=>{const l=C.alert({title:{text:i("请选择导入方式"),position:"center"},content:{text:`
            <div class="btn-control" data-mode="local">${i("本地导入")}</div>
            <div class="btn-control" data-mode="network">${i("网络导入")}</div>
            <div class="btn-control" data-mode="clipboard">${i("剪贴板导入")}</div>`,html:true},btn:{ok:{enable:false},close:{enable:true,callback($){$.close();}}},drag:true,mask:{enable:true},width:N.info.width,height:N.info.height,style:`
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
          }`}),h=l.$shadowRoot.querySelector(".btn-control[data-mode='local']"),y=l.$shadowRoot.querySelector(".btn-control[data-mode='network']"),x=l.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),w=async $=>{confirm(i("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）"))&&(typeof re=="function"?typeof le=="function"?(re().forEach(R=>{le(R);}),b.success(i("已清空脚本存储的配置"))):b.error(i("不支持GM_deleteValue函数，无法执行删除脚本配置")):b.error(i("不支持GM_listValues函数，无法清空脚本存储的配置"))),typeof Me=="function"?Me($):Object.keys($).forEach(R=>{const A=$[R];ie(R,A);}),b.success(i("配置导入完毕"));},V=$=>new Promise(async v=>{const _=k.toJSON($);Object.keys(_).length===0?b.warning(i("解析为空配置，不导入")):await w(_),v(true);});c.on(h,"click",$=>{c.preventEvent($),l.close();const v=c.createElement("input",{type:"file",accept:".json"});c.on(v,["propertychange","input"],()=>{if(!v.files?.length)return;const _=v.files[0],R=new FileReader;R.onload=()=>{V(R.result);},R.readAsText(_,"UTF-8");}),v.click();}),c.on(y,"click",$=>{c.preventEvent($),l.close();const v=C.prompt({title:{text:i("网络导入"),position:"center"},content:{text:"",placeholder:i("请填写URL"),focus:true},btn:{close:{enable:true,callback(A){A.close();}},ok:{text:i("导入"),callback:async A=>{const I=A.text;if(k.isNull(I)){b.error(i("请填入完整的url"));return}const E=b.loading(i("正在获取配置...")),D=await de.get(I,{allowInterceptConfig:false});if(E.close(),!D.status){S.error(D),b.error(i("获取配置失败"),{consoleLogContent:true});return}await V(D.data.responseText)&&A.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:N.info.width,height:"auto"}),_=v.$shadowRoot.querySelector("input"),R=v.$shadowRoot.querySelector(".pops-prompt-btn-ok");c.on(_,["input","propertychange"],()=>{c.val(_)===""?c.attr(R,"disabled","true"):c.removeAttr(R,"disabled");}),c.onKeyboard(_,"keydown",(A,I,E)=>{A==="Enter"&&E.length===0&&c.val(_)!==""&&c.emit(R,"click");}),c.emit(_,"input");}),c.on(x,"click",async $=>{c.preventEvent($),l.close();let v=await j.getClipboardText();if(v.trim()===""){b.warning(i("获取到的剪贴板内容为空"));return}await V(v);});},p=(g=`${be}_panel-setting-${k.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,l)=>{const h=C.alert({title:{text:i("请选择导出方式"),position:"center"},content:{text:`
            <div class="btn-control" data-mode="export-to-file">${i("导出至文件")}</div>
            <div class="btn-control" data-mode="export-to-clipboard">${i("导出至剪贴板")}</div>
            `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(w){w.close();}}},drag:true,mask:{enable:true},width:N.info.width,height:N.info.height,style:`
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
          }`}),y=h.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),x=h.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");c.on(y,"click",w=>{c.preventEvent(w);try{o(g,l),h.close();}catch(V){b.error(V.toString(),{consoleLogContent:true});}}),c.on(x,"click",async()=>{await k.copy(l)?(b.success(i("复制成功")),h.close()):b.error(i("复制失败"));});},u=C.confirm({title:{text:i("配置"),position:"center"},content:{text:'<textarea name="config-value" id="config" readonly></textarea>',html:true},btn:{ok:{enable:true,type:"primary",text:i("导入"),callback(){a();}},cancel:{enable:true,text:i("导出"),callback(){p(void 0,m);}}},width:B.width<450?"90vw":"450px",height:"auto",style:`
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
        `}).$shadowRoot.querySelector("textarea"),d={};if(typeof re=="function")re().forEach(l=>{const h=ne(l);Reflect.set(d,l,h);});else {b.warning(i("不支持函数GM_listValues，仅导出菜单配置"));const g=ne(ce);Reflect.set(d,ce,g);}const m=j.toStr(d);u.value=m;},s=()=>{let a=te?.script?.supportURL||te?.script?.namespace;typeof a=="string"&&k.isNotNull(a)&&window.open(a,"_blank");};return [{id:"script-version",title:i("版本：{{version}}",{version:te?.script?.version||i("未知")}),isBottom:true,views:[],clickFirstCallback(){return  false},afterRender(a){new je(a.$asideLiElement).on("tap",function(){clearTimeout(n),n=void 0,t?(t=false,r()):(n=setTimeout(()=>{t=false,s();},200),t=true);});}}]},setDefaultBottomContentConfig(e){this.$data.__defaultBottomContentConfig=e;}};let Ae=e=>{(typeof e=="object"&&e!=null||typeof e=="function")&&Object.keys(e).forEach(t=>{typeof e[t]=="function"&&(e[t]=e[t].bind(e));});};const We=Oe;Ae(We);Ae(ee);const T=new ue.CookieManagerService({baseCookieHandler(e){return M.getValue("cookie-manager-api",e)}}),oe={encrypt(e,t){return me.AES.encrypt(e,t).toString()},decrypt(e,t){return me.AES.decrypt(e,t).toString(me.enc.Utf8)},formatCookie(e,t,n){let i="";if(t==="header_string")i=e.map(o=>{let r=o.value;return `${o.name}=${r}; `}).join("");else if(t==="json")i=JSON.stringify({api:T.baseCookieHandler,hostname:window.location.hostname,data:e},null,2);else throw new Error("不支持的格式化类型："+t);return n&&(i=this.encrypt(i,n)),i},showExportDialog(){let e=C.confirm({title:{text:"导出 Cookie",position:"center"},content:{text:`
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
					`,html:true},width:window.innerWidth<400?"88vw":"400px",height:"auto",btn:{merge:true,position:"space-between",ok:{text:"导出",async callback(a){let p=ke.$data.cookieList;if(p.length===0){b.warning("Cookie为空");return}let f=oe.formatCookie(p,s.exportType,s.encodePwd);const u=new Blob([f],{type:"text/plain"}),d=URL.createObjectURL(u);c.createElement("a",{download:`${window.location.hostname}_${s.exportType}_${T.baseCookieHandler}_${Date.now()}.txt`,href:d,target:"_blank"}).click(),setTimeout(()=>{URL.revokeObjectURL(d);},500),a.close();}},other:{enable:true,text:"导出至剪贴板",type:"xiaomi-primary",async callback(a){let p=ke.$data.cookieList;if(p.length===0){b.warning("Cookie为空");return}let f=oe.formatCookie(p,s.exportType,s.encodePwd);await k.copy(f)?b.success("复制成功"):b.error("复制失败"),a.close();}}},style:`
      ${C.config.cssText.panelCSS}

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
      `});const t=e.$shadowRoot.querySelector(".export-example-code-text-container pre"),n=e.$shadowRoot.querySelector("#cookie-format-header_string"),i=e.$shadowRoot.querySelector("#cookie-format-json"),o=e.$shadowRoot.querySelector("#encode-pwd"),r={key:"cookie-backup-export-dialog-config",getConfig(){return M.getValue(this.key,{exportType:"header_string",encodePwd:""})},saveConfig(){let a="header_string";i.checked&&(a="json"),M.setValue(this.key,{exportType:a,encodePwd:c.val(o)}),s=this.getConfig();}};let s=r.getConfig();c.on(n,"input",()=>{const a=[{name:"_ga",value:"GA1.2.123456789.987654321",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false},{name:"PHPSESSID",value:"28f2d88ee9322cfd2e4f1e",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false},{name:"csrftoken",value:"abcdef123456",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false},{name:"logged_in",value:"true",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false}];let p=this.formatCookie(a,"header_string");c.text(t,p),r.saveConfig();}),c.on(i,"input",()=>{const a=[{name:"sessionId",value:"abc123xyz456",domain:".example.com",path:"/",secure:true,httpOnly:true,sameSite:"lax",expirationDate:1713543600,hostOnly:false,session:false}];let p=this.formatCookie(a,"json");c.text(t,p),r.saveConfig();}),c.on(o,["input","propertychange"],()=>{r.saveConfig();}),s.exportType==="header_string"?n.click():s.exportType==="json"&&i.click(),c.val(o,s.encodePwd);},showImportDialog(){let e=C.confirm({title:{text:"导入 Cookie",position:"center"},content:{text:`
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
					`,html:true},width:window.innerWidth<400?"88vw":"400px",height:"auto",btn:{ok:{text:"导入",async callback(d){try{const m=u.decodePwd;let g=u.value;m.trim()===""||(g=oe.decrypt(g,m));const l=k.toJSON(g);if(Array.isArray(l)){S.info(`使用${T.baseCookieHandler}导入cookie数据`);for(const h of l)await T.update(h);}else if(typeof l=="object"&&Object.keys(l).length&&Array.isArray(l.data)){const h=new k.CookieManagerService({baseCookieHandler:l.api});S.info(`使用${h.baseCookieHandler}导入cookie数据`);for(const y of l.data)await h.update(y);}else if(typeof l=="object"&&!Object.keys(l).length){let h=new k.DocumentCookieHandler;S.info(`使用${T.baseCookieHandler}导入cookie数据`);let y=h.parseCookie(g);for(const x of y)await T.update({name:x.key,value:x.value,domain:window.location.hostname,path:"/",sameSite:"unspecified",secure:!1,session:!1,hostOnly:!0,httpOnly:!1});}else {S.error(g,l),b.error("cookie格式不符合");return}d.close();}catch(m){b.error(m.toString());}}}},style:`
					${C.config.cssText.panelCSS}

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
        `}),t="";const n=e.$shadowRoot.querySelector("#import-cookie-import_from_text"),i=e.$shadowRoot.querySelector("#import-cookie-import_from_file"),o=e.$shadowRoot.querySelector(".import-cookie-value-text"),r=o.querySelector("textarea"),s=e.$shadowRoot.querySelector(".import-cookie-value-file"),a=s.querySelector("input"),p=e.$shadowRoot.querySelector("#decode-pwd"),f={key:"cookie-backup-import-dialog-config",getConfig(){let d=M.getValue(this.key,{importType:"import_from_text",decodePwd:"",value:""});return d.importType==="import_from_text"?d.value=r.value:d.importType==="import_from_file"&&(d.value=t),d},saveConfig(){let d="import_from_text";i.checked&&(d="import_from_file"),M.setValue(this.key,{importType:d,decodePwd:c.val(p)}),u=this.getConfig();}};let u=f.getConfig();c.on(n,"input",()=>{f.saveConfig(),a.value="",t="",c.hide(s,false),c.show(o,false);}),c.on(i,"input",()=>{f.saveConfig(),r.value="",c.hide(o,false),c.show(s,false);}),c.on(r,["input","propertychange"],k.debounce(()=>{f.saveConfig();})),c.on(a,["change","input"],()=>{const d=a.files?.[0];if(d){const m=new FileReader;m.onload=function(g){const l=g.target.result;typeof l=="string"&&(t=l,f.saveConfig());},m.readAsText(d);}}),c.on(p,["input","propertychange"],async()=>{f.saveConfig();}),u.importType==="import_from_text"?n.click():u.importType==="import_from_file"&&i.click(),c.val(p,u.decodePwd);}},ge=function(e,t,n,i,o,r,s,a,p,f){const u={text:e,type:"button",attributes:{},props:{},description:t,buttonIcon:i,buttonIsRightIcon:o,buttonIconIsLoading:r,buttonType:s,buttonText:n,callback(d){typeof a=="function"&&a(d);},afterAddToUListCallBack:p};return Reflect.set(u.attributes,Ce,()=>{u.disable=false;}),u},Je=function(e,t,n,i,o,r){const s={type:"own",attributes:{},props:{},createLIElement:e,afterAddToUListCallBack:r};return Reflect.set(s.attributes,Ce,()=>false),s},ae=function(e,t,n,i,o,r,s){const a={text:e,type:"select",description:r,attributes:{},props:{},getValue(){return this.props[q].get(t,n)},callback(p){if(p==null)return;const f=p.value;if(S.info(`选择：${p.text}`),typeof o=="function"&&o(p))return;this.props[q].set(t,f),typeof s=="function"&&s(p);},data:i};return Reflect.set(a.attributes,Y,t),Reflect.set(a.attributes,Z,n),fe.initComponentsStorageApi("select",a,{get(p,f){return M.getValue(p,f)},set(p,f){M.setValue(p,f);}}),a},J=function(e,t,n=false,i,o,r,s,a,p){const f={text:e,type:"switch",description:o,disabled:s,attributes:{},props:{},getValue(){return this.props[q].get(t,n)},callback(u,d){const m=!!d;if(S.success(`${m?"开启":"关闭"} ${e}`),typeof i=="function"&&i(u,m))return;this.props[q].set(t,m);},afterAddToUListCallBack:(...u)=>{r?.(...u);}};return Reflect.set(f.attributes,Y,t),Reflect.set(f.attributes,Z,n),fe.initComponentsStorageApi("switch",f,{get(u,d){return M.getValue(u,d)},set(u,d){M.setValue(u,d);}}),f},Ye=function(e,t,n,i,o,r="",s,a){const p={text:e,type:"textarea",attributes:{},props:{},description:i,placeholder:r,disabled:s,getValue(){const u=this.props[q].get(t,n);return Array.isArray(u)?u.join(`
`):u},callback(f,u){this.props[q].set(t,u);}};return Reflect.set(p.attributes,Y,t),Reflect.set(p.attributes,Z,n),fe.initComponentsStorageApi("switch",p,{get(f,u){return M.getValue(f,u)},set(f,u){M.setValue(f,u);}}),p},fe={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new ue.Dictionary),this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t);},initComponentsStorageApi(e,t,n){let i;this.hasStorageApi(e)?i=this.getStorageApi(e):i=n,this.setComponentsStorageApiProperty(t,i);},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,q,t);}},xe=function(e,t,n,i,o,r="",s="text",a,p){const f={text:e,type:"input",inputType:s,attributes:{},props:{},description:i,placeholder:r,afterAddToUListCallBack:a,getValue(){return this.props[q].get(t,n)},callback(u,d){u.target.validity.valid,this.props[q].set(t,d);}};return Reflect.set(f.attributes,Y,t),Reflect.set(f.attributes,Z,n),fe.initComponentsStorageApi("input",f,{get(u,d){return M.getValue(u,d)},set(u,d){M.setValue(u,d);}}),f};class Ze{option;constructor(t){this.option=t;}async showView(){const t=C.confirm({title:{text:this.option.title,position:"center"},content:{text:`
        <form class="rule-form-container" onsubmit="return false">
            <ul class="rule-form-ulist"></ul>
            <input type="submit" style="display: none;" />
        </form>
        `,html:true},btn:k.assign({ok:{callback:async()=>{await r();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
      ${C.config.cssText.panelCSS}
      
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

      ${this.option?.style??""}
      `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),n=t.$shadowRoot.querySelector(".rule-form-container");t.$shadowRoot.querySelector("input[type=submit]");const i=t.$shadowRoot.querySelector(".rule-form-ulist"),o=await this.option.getView(await this.option.data());c.append(i,o);const r=async()=>{(await this.option.onsubmit(n,await this.option.data())).success&&(t.close(),typeof this.option.dialogCloseCallBack=="function"&&await this.option.dialogCloseCallBack(true));};return t}}class Qe{option;constructor(t){this.option=t;}async showView(t){const n=C.confirm({title:{text:this.option.title,position:"center"},content:{text:`
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
        `,html:true},style:`
      ${C.config.cssText.panelCSS}

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
      `,btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async()=>{this.showEditView(false,await this.option.getAddData(),n.$shadowRoot);}},close:{enable:true,callback(){n.close();}},cancel:{enable:false},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:()=>{const a=C.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async()=>{if(S.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){b.error("清理失败");return}else b.success("清理成功");await this.updateDeleteAllBtnText(n.$shadowRoot),this.clearContent(n.$shadowRoot),a.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh"}),{$searchContainer:i,$externalSelect:o,$ruleValueSelect:r,$searchInput:s}=this.parseViewElement(n.$shadowRoot);if(this.option.bottomControls?.filter?.enable){let a=null,p=null;Array.isArray(this.option.bottomControls?.filter?.option)&&c.append(o,this.option.bottomControls?.filter?.option.map(d=>{const m=c.createElement("option",{innerText:d.name});return Reflect.set(m,"data-value",d),m})),Array.isArray(this.option.bottomControls?.filter?.inputOption)&&c.append(r,this.option.bottomControls?.filter?.inputOption.map(d=>{const m=c.createElement("option",{innerText:d.name});return Reflect.set(m,"data-value",d),m})),c.on(o,"change",async()=>{const d=o[o.selectedIndex],m=Reflect.get(d,"data-value");typeof m?.selectedCallBack=="function"&&m.selectedCallBack(m),a=m,await u(false);}),c.on(r,"change",async()=>{const d=r[r.selectedIndex],m=Reflect.get(d,"data-value");typeof m?.selectedCallBack=="function"&&m.selectedCallBack(m),p=m,await u(false);}),c.onInput(s,k.debounce(async()=>{await u(false);}));const f=()=>{const d=o[o.selectedIndex];a=Reflect.get(d,"data-value");const m=r[r.selectedIndex];p=Reflect.get(m,"data-value");},u=async d=>{this.clearContent(n.$shadowRoot),d&&f();const m=await this.option.data(),g=[],l=c.val(s);for(let h=0;h<m.length;h++){const y=m[h];if(typeof t=="function"){const x=await t(y);if(typeof x=="boolean"&&!x)continue}if(a){const x=await a?.filterCallBack?.(y);if(typeof x=="boolean"&&!x)continue}if(p){let x=true;if(l===""?x=true:x=false,x||(x=await p?.filterCallBack?.(y,l)),!x)continue}g.push(y);}await this.appendRuleItemElement(n.$shadowRoot,g);};if(typeof t=="object"&&t!=null){let d;typeof t.external=="number"?d=t.external:d=Array.from(o.options).findIndex(g=>Reflect.get(g,"data-value").value===t.external),d!==-1&&(o.selectedIndex=d);let m;typeof t.rule=="number"?m=t.rule:m=Array.from(r.options).findIndex(g=>Reflect.get(g,"data-value").value===t.rule),m!==-1&&(r.selectedIndex=m);}await u(true);}else c.hide(i,false);}showEditView(t,n,i,o,r,s){let a=async f=>{if(f){if(typeof s=="function"){let u=await this.option.getData(n);s(u);}}else if(t||await this.option.deleteData(n),typeof r=="function"){let u=await this.option.getData(n);r(u);}};new Ze({title:t?"编辑":"添加",data:()=>n,dialogCloseCallBack:a,getView:async f=>await this.option.itemControls.edit.getView(f,t),btn:{ok:{enable:true,text:t?"修改":"添加"},cancel:{callback:async f=>{f.close(),await a(false);}},close:{callback:async f=>{f.close(),await a(false);}}},onsubmit:async(f,u)=>{let d=await this.option.itemControls.edit.onsubmit(f,t,u);return d.success?t?(b.success("修改成功"),i&&await this.updateRuleItemElement(d.data,o,i)):i&&await this.appendRuleItemElement(i,d.data):t&&S.error("修改失败"),d},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(t){const n=t.querySelector(".rule-view-container"),i=t.querySelector(".pops-confirm-btn button.pops-confirm-btn-other"),o=t.querySelector(".rule-view-search-container"),r=o.querySelector(".pops-panel-select .select-rule-status"),s=o.querySelector(".pops-panel-select .select-rule-value"),a=o.querySelector(".pops-panel-input input");return {$container:n,$deleteBtn:i,$searchContainer:o,$externalSelect:r,$ruleValueSelect:s,$searchInput:a}}parseRuleItemElement(t){const n=t.querySelector(".rule-controls-enable"),i=n.querySelector(".pops-panel-switch"),o=n.querySelector(".pops-panel-switch__input"),r=n.querySelector(".pops-panel-switch__core"),s=t.querySelector(".rule-controls-edit"),a=t.querySelector(".rule-controls-delete");return {$enable:n,$enableSwitch:i,$enableSwitchInput:o,$enableSwitchCore:r,$edit:s,$delete:a,data:Reflect.get(t,"data-rule")}}async createRuleItemElement(t,n){const i=await this.option.getDataItemName(t),o=c.createElement("div",{className:"rule-item",innerHTML:`
			<div class="rule-name">${i}</div>
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
					${C.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${C.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(o,"data-rule",t);const r="pops-panel-switch-is-checked",{$enable:s,$enableSwitch:a,$enableSwitchCore:p,$enableSwitchInput:f,$delete:u,$edit:d}=this.parseRuleItemElement(o);return this.option.itemControls.enable.enable?(c.on(p,"click",async()=>{let m=false;a.classList.contains(r)?(a.classList.remove(r),m=false):(a.classList.add(r),m=true),f.checked=m,await this.option.itemControls.enable.callback(t,m);}),await this.option.itemControls.enable.getEnable(t)&&a.classList.add(r)):s.remove(),this.option.itemControls.edit.enable?c.on(d,"click",m=>{c.preventEvent(m),this.showEditView(true,t,n,o,g=>{t=null,t=g;});}):d.remove(),this.option.itemControls.delete.enable?c.on(u,"click",m=>{c.preventEvent(m);const g=C.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async()=>{S.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(t)?(b.success("成功删除该数据"),o.remove(),await this.updateDeleteAllBtnText(n),g.close()):b.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):u.remove(),o}async appendRuleItemElement(t,n){const{$container:i}=this.parseViewElement(t),o=[],r=Array.isArray(n)?n:[n];for(let s=0;s<r.length;s++){const a=r[s],p=await this.createRuleItemElement(a,t);o.push(p);}return c.append(i,o),await this.updateDeleteAllBtnText(t),o}async updateRuleContaienrElement(t){this.clearContent(t);const n=await this.option.data();await this.appendRuleItemElement(t,n),await this.updateDeleteAllBtnText(t);}async updateRuleItemElement(t,n,i){const o=await this.createRuleItemElement(t,i);n.after(o),n.remove();}clearContent(t){const{$container:n}=this.parseViewElement(t);c.html(n,"");}setDeleteBtnText(t,n,i=false){const{$deleteBtn:o}=this.parseViewElement(t);i?c.html(o,n):c.text(o,n);}async updateDeleteAllBtnText(t){let n=await this.option.data();this.setDeleteBtnText(t,`清空所有(${n.length})`);}}const P={$key:{STORAGE_KEY:"cookie-rule"},$data:{matchedRuleList:[]},init(){this.$data.matchedRuleList.length=0,this.$data.matchedRuleList=this.getMatchedRuleList(),this.$data.matchedRuleList.length&&$e.add({key:"matched-cookie-rule-list",text:`${window.location.hostname} ${this.$data.matchedRuleList.length}条规则`,isStoreValue:false,autoReload:false,showText(e){return e},callback(){console.log(P.$data.matchedRuleList),alert(`以下是命中的规则名：
`+P.$data.matchedRuleList.map(e=>e.name).join(`
`));}});},getMatchedRuleList(e=window.location.href){const t=this.getData(),n=[];return t.forEach(i=>{if(!i.enable)return;let o=i.data.url;if(i.data.enableRegExpToMatchUrl){if(!new RegExp(o,"i").test(e))return}else if(!e.includes(o))return;n.push(i);}),n},showView(){let e=C.fn.PanelHandlerComponents();function t(o){return {get(r,s){return Reflect.get(o,r)??s},set(r,s){Reflect.set(o,r,s);}}}const n=this.getMatchedRuleList();new Qe({title:"Cookie规则",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:o=>o.name,updateData:o=>this.updateData(o),deleteData:o=>this.deleteData(o),getData:o=>this.getData().find(a=>a.uuid===o.uuid)??o,itemControls:{enable:{enable:true,getEnable(o){return o.enable},callback:(o,r)=>{o.enable=r,this.updateData(o);}},edit:{enable:true,getView:(o,r)=>{const s=document.createDocumentFragment(),a=this.getTemplateData();r||(o=a);const p=J("启用","enable",a.enable);Reflect.set(p.props,q,t(o));const f=e.createSectionContainerItem_switch(p).$el,u=xe("规则名称","name","",a.name,void 0,"必填");Reflect.set(u.props,q,t(o));const d=e.createSectionContainerItem_input(u).$el,m=ae("Cookie管理Api","execApiName",a.data.execApiName,[{text:"（当前）"+T.baseCookieHandler,value:"use-global"},...T.totalCookieManagerApiNameList.map(E=>({text:E,value:E}))],void 0,"操作Cookie的Api函数");Reflect.set(m.props,q,t(o.data));const g=e.createSectionContainerItem_select(m).$el,l=xe("网址","url",a.data.url,"用于执行该规则的网址",void 0,"必填");Reflect.set(l.props,q,t(o.data));const h=e.createSectionContainerItem_input(l).$el,y=J("启用正则匹配网址","enableRegExpToMatchUrl",a.data.enableRegExpToMatchUrl);Reflect.set(y.props,q,t(o.data));const x=e.createSectionContainerItem_switch(y).$el,w=xe("Cookie名称","cookieName",a.data.cookieName,"用于匹配执行操作的Cookie名",void 0,"必填");Reflect.set(w.props,q,t(o.data));const V=e.createSectionContainerItem_input(w).$el,$=J("启用正则匹配Cookie名称","enableRegExpToMatchCookieName",a.data.enableRegExpToMatchCookieName);Reflect.set($.props,q,t(o.data));const v=e.createSectionContainerItem_switch($).$el,_=ae("操作模式","operationMode",a.data.operationMode,[{value:"delete",text:"删除Cookie"},{value:"extended",text:"自动延长Cookie有效期30天"},{value:"extended-90",text:"自动延长Cookie有效期90天"},{value:"extended-180",text:"自动延长Cookie有效期180天"},{value:"extended-360",text:"自动延长Cookie有效期360天"}]);Reflect.set(_.props,q,t(o.data));const R=e.createSectionContainerItem_select(_).$el,A=Ye("备注","remark",a.data.remark);Reflect.set(A.props,q,t(o.data));const I=e.createSectionContainerItem_textarea(A).$el;return s.append(f,d,g,h,x,V,v,R,I),s},onsubmit:(o,r,s)=>{const a=o.querySelectorAll(".rule-form-ulist > li"),p=this.getTemplateData();r&&(p.uuid=s.uuid);try{return a.forEach(f=>{const u=Reflect.get(f,e.$data.nodeStoreConfigKey),d=Reflect.get(u,"attributes"),m=Reflect.get(f,q),g=Reflect.get(d,Y),l=Reflect.get(d,Z),h=m.get(g,l);Reflect.has(p,g)?Reflect.set(p,g,h):Reflect.has(p.data,g)?Reflect.set(p.data,g,h):S.error(`${g}不在数据中`);}),p.name.trim()===""?(b.error("规则名称不能为空"),{success:!1,data:p}):p.data.url.trim()===""?(b.error("网址不能为空"),{success:!1,data:p}):p.data.cookieName.trim()===""?(b.error("Cookie名称不能为空"),{success:!1,data:p}):r?{success:this.updateData(p),data:p}:{success:this.addData(p),data:p}}catch(f){return S.error(f),{success:false,data:p}}finally{this.init();}},style:`
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
          `},delete:{enable:true,deleteCallBack:o=>this.deleteData(o)}},bottomControls:{filter:{enable:true,option:[{name:"全部",value:"all",filterCallBack(){return  true}},{name:"启用",value:"enable",filterCallBack(o){return o.enable}},{name:"未启用",value:"notEnable",filterCallBack(o){return !o.enable}},{name:"当前网站执行",value:"currentSite",filterCallBack(o){return n.some(r=>r.uuid===o.uuid)}}],inputOption:[{name:"规则名称",value:"url",filterCallBack(o,r){return !!o.name.match(r)}},{name:"网址",value:"url",filterCallBack(o,r){return !!o.data.url.match(r)}},{name:"Cookie名称",value:"cookieName",filterCallBack(o,r){return !!o.data.cookieName.match(r)}},{name:"备注",value:"remark",filterCallBack(o,r){return !!o.data.remark.match(r)}}]}}}).showView();},getTemplateData(){return {uuid:k.generateUUID(),enable:true,name:"",data:{url:"",execApiName:"use-global",enableRegExpToMatchUrl:false,cookieName:"",enableRegExpToMatchCookieName:false,operationMode:"delete",remark:""}}},getData(){return ne(this.$key.STORAGE_KEY,[])},setData(e){ie(this.$key.STORAGE_KEY,e);},addData(e){const t=this.getData();return t.findIndex(i=>i.uuid==e.uuid)===-1?(t.push(e),ie(this.$key.STORAGE_KEY,t),true):false},updateData(e){const t=this.getData(),n=t.findIndex(o=>o.uuid==e.uuid);let i=false;return n!==-1&&(i=true,t[n]=e),this.setData(t),i},deleteData(e){const t=this.getData(),n=t.findIndex(o=>o.uuid==e.uuid);let i=false;return n!==-1&&(i=true,t.splice(n,1)),this.setData(t),i},clearData(){le(this.$key.STORAGE_KEY);},exportRule(e="rule.json"){const t=this.getData(),n=new Blob([JSON.stringify(t,null,4)]),i=window.URL.createObjectURL(n),o=c.createElement("a");o.href=i,o.download=e,o.click(),setTimeout(()=>{window.URL.revokeObjectURL(i);},1500);},importRule(){const e=C.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
                    <div class="import-mode" data-mode="local">本地导入</div>
                    <div class="import-mode" data-mode="network">网络导入</div>
                `,html:true},width:N.info.width,height:N.info.height,style:`
                .import-mode{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),t=e.$shadowRoot.querySelector(".import-mode[data-mode='local']"),n=e.$shadowRoot.querySelector(".import-mode[data-mode='network']");c.on(t,"click",i=>{c.preventEvent(i),e.close();const o=c.createElement("input",{type:"file",accept:".json"});c.on(o,["propertychange","input"],()=>{if(!o.files?.length)return;const r=o.files[0],s=new FileReader;s.onload=()=>{const a=k.toJSON(s.result);if(!Array.isArray(a)){S.error("不是正确的规则文件",a),b.error("不是正确的规则文件");return}this.setData(a),b.success(`成功导入 ${a.length}条规则`);},s.readAsText(r,"UTF-8");}),o.click();}),c.on(n,"click",i=>{c.preventEvent(i),e.close(),C.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"url",focus:true},btn:{ok:{callback:async o=>{const r=o.text;if(k.isNull(r)){b.error("请填入完整的url");return}const s=await de.get(r);if(!s.status)return;const a=k.toJSON(s.data.responseText);if(!Array.isArray(a)){S.error("不是正确的规则文件",s,a),b.error("不是正确的规则文件");return}this.setData(a),o.close(),b.success(`成功导入 ${a.length}条规则`);}}},width:N.info.width,height:"auto"});});}},De={beforeEdit(e,t){const n=T.baseCookieHandler;return n==="cookieStore"?typeof e.expires=="number"&&(e.expirationDate=e.expires):(n==="GM_cookie"||n==="GM.cookie")&&t&&typeof e.expirationDate=="number"&&(e.expirationDate=e.expirationDate*1e3),e},afterEdit(e){const t=T.baseCookieHandler;return t==="document.cookie"?e.domain="":t==="cookieStore"?typeof e.expirationDate=="number"&&(e.expires=e.expirationDate):(t==="GM_cookie"||t==="GM.cookie")&&typeof e.expirationDate=="number"&&(e.expirationDate=Math.floor(e.expirationDate/1e3)),e}},se=(e,t,n,i)=>({text:e,type:"input",props:{},attributes:{},description:"",getValue(){return t()},callback(r,s){n(s);},placeholder:"",disabled:!!i}),Xe=(e,t,n,i)=>({text:e,type:"textarea",props:{},attributes:{},description:"",placeholder:"",getValue(){return t()},disabled:i,callback:function(r,s){n(s);}}),ye=(e,t,n,i,o)=>({text:e,type:"select",description:"",attributes:{},props:{},getValue(){return n()},callback(s){const a=s.value;i(a);},data:typeof t=="function"?t():t,disabled:false,width:"100%"}),we={init(){},showView(e,t){let n=!!e,i={name:"",value:"",domain:window.location.hostname,path:"/",secure:false,session:false,hostOnly:false,httpOnly:false,sameSite:"lax",expirationDate:Date.now()+3600*24*30*1e3},o=k.assign({},i,true);k.assign(o,e??{},true),o=De.beforeEdit(o,n);const s=C.confirm({title:{text:n?"编辑Cookie":"添加Cookie",position:"center"},content:{text:"",html:true},drag:true,btn:{position:"center",ok:{text:n?"编辑":"添加",async callback(x){const w=we.validCookieInfo(o);if(!w.status){typeof w.msg=="string"&&b.error(w.msg);return}if(o.value=encodeURIComponent(o.value),o=De.afterEdit(o),n){const V=await T.update(o);V?b.error(V.toString()):(b.success("修改成功"),x.close());}else {const V=await T.add(o);V?b.error(V.toString()):(b.success("添加成功"),x.close());}typeof t=="function"&&t(o);}},cancel:{text:"取消"}},mask:{enable:true},width:N.settingMiddle.width,height:"auto",style:`
      ${C.config.cssText.panelCSS}

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
      `}).$shadowRoot.querySelector(".pops-confirm-content"),a=C.fn.PanelHandlerComponents(),p=a.createSectionContainerItem_input(se("name",()=>o.name,x=>o.name=x,n)).$el,f=a.createSectionContainerItem_textarea(Xe("value",()=>o.value,x=>o.value=x)).$el,u=a.createSectionContainerItem_input(se("domain",()=>o.domain,x=>o.domain=x)).$el,d=a.createSectionContainerItem_input(se("path",()=>o.path,x=>o.path=x)).$el;let m;if(o.session)m=a.createSectionContainerItem_input(se("expires",()=>"会话",()=>{},true)).$el;else {const x=Je(()=>{const w=c.createElement("li",{innerHTML:`
							<div class="pops-panel-item-left-text">
								<p class="pops-panel-item-left-main-text">expires</p>
							</div>
							<div class="pops-panel-item-right-wrapper">
								<input type="datetime-local" id="cookie-item-property-expires">
							</div>
						`}),V=w.querySelector("#cookie-item-property-expires");return V.valueAsNumber=o.expirationDate,c.on(V,["change","input","propertychange"],$=>{c.preventEvent($),o.expirationDate=V.valueAsNumber;}),w});m=a.createSectionContainerItem_own(x).$el;}const g=a.createSectionContainerItem_select(ye("httpOnly",[{text:"true",value:true},{text:"false",value:false}],()=>o.httpOnly,x=>o.httpOnly=x)).$el,l=a.createSectionContainerItem_select(ye("secure",[{text:"true",value:true},{text:"false",value:false}],()=>o.secure,x=>o.secure=x)).$el;let h=[{text:"no_restriction",value:"no_restriction"},{text:"lax",value:"lax"},{text:"strict",value:"strict"},{text:"unspecified",value:"unspecified"}];T.baseCookieHandler==="cookieStore"&&(h=[{text:"lax",value:"lax"},{text:"strict",value:"strict"},{text:"none",value:"none"}]);const y=a.createSectionContainerItem_select(ye("sameSite",h,()=>o.sameSite,x=>o.sameSite=x)).$el;c.append(s,[p,f]),T.baseCookieHandler==="GM_cookie"||T.baseCookieHandler==="GM.cookie"?c.append(s,[u,d,m,g,l,y]):T.baseCookieHandler==="cookieStore"&&c.append(s,[u,d,m,y]);},validCookieInfo(e){return e.name==null||e.name==""?{status:false,msg:"name不能为空"}:e.domain==null||e.domain==""?{status:false,msg:"domain不能为空"}:e.path==null||e.path==""?{status:false,msg:"path不能为空"}:{status:true}}},ke={$data:{cookieList:[]},init(){this.registerMenu();},async showView(){const e=C.alert({title:{text:"Cookie编辑器",html:false,position:"center"},content:{text:`
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
        </div>`,html:true},btn:{ok:{enable:false}},mask:{enable:true},drag:true,width:N.setting.width,height:N.setting.height,style:`
      ${C.config.cssText.panelCSS}

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
      `}),t=e.$shadowRoot.querySelector(".cookie-search-inner input"),n=e.$shadowRoot.querySelector(".cookie-search-setting"),i=e.$shadowRoot.querySelector(".cookie-control-refresh"),o=e.$shadowRoot.querySelector(".cookie-control-add"),r=e.$shadowRoot.querySelector(".cookie-control-export"),s=e.$shadowRoot.querySelector(".cookie-control-import"),a=e.$shadowRoot.querySelector(".cookie-control-clear-all"),p=e.$shadowRoot.querySelector(".cookie-control-rule-manager"),f=e.$shadowRoot.querySelector(".cookie-setting"),u=e.$shadowRoot.querySelector(".cookie-list-wrapper"),d=l=>{const h=c.createElement("div",{className:"cookie-item",innerHTML:`
                `,"data-cookie-info":l}),y=[{leftText:"name",rightText:l.name},{leftText:"value",rightText:M.getValue("decode-cookie-value")?decodeURIComponent(l.value):encodeURIComponent(l.value)}];T.baseCookieHandler==="GM_cookie"||T.baseCookieHandler==="GM.cookie"?(l=l,y.push({leftText:"domain",rightText:l.domain},{leftText:"path",rightText:l.path},{leftText:"session",rightText:JSON.stringify(l.session)},{leftText:"expires",rightText:l.session?"会话":l.expirationDate?new Date(l.expirationDate*1e3).toISOString():"未知"},{leftText:"httpOnly",rightText:JSON.stringify(l.httpOnly)},{leftText:"hostOnly",rightText:JSON.stringify(l.hostOnly)},{leftText:"secure",rightText:JSON.stringify(l.secure)},{leftText:"sameSite",rightText:l.sameSite})):T.baseCookieHandler==="cookieStore"&&(l=l,y.push({leftText:"domain",rightText:l.domain},{leftText:"path",rightText:l.path},{leftText:"expires",rightText:l.expires?new Date(l.expires).toISOString():"会话"},{leftText:"secure",rightText:JSON.stringify(l.secure)},{leftText:"sameSite",rightText:l.sameSite})),y.forEach(v=>{const _=c.createElement("div",{className:"cookie-item-group",innerHTML:`
                        <div class="cookie-item-group-left">
                            <p>${v.leftText}</p>
                        </div>
                        <div class="cookie-item-group-right">
                            <p>${v.rightText}</p>
                        </div>
                    `});Reflect.set(_,"data-key",v.leftText),Reflect.set(_,"data-value",v.rightText),c.append(h,_);});const x=c.createElement("div",{className:"cookie-item-group cookie-item-group-control",innerHTML:`
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
              ${C.config.iconSVG.delete}
          </div>
        </div>`}),w=x.querySelector(".cookie-item-group-control-copy"),V=x.querySelector(".cookie-item-group-control-edit"),$=x.querySelector(".cookie-item-group-control-delete");return c.on(w,"click",v=>{c.preventEvent(v);const _=l.value;k.copy(_).then(R=>{R?b.success("复制成功"):b.error("复制失败");});}),c.on(V,"click",v=>{c.preventEvent(v),we.showView(l,_=>{const R=d(_);c.after(h,R),h.parentElement?.removeChild(h);});}),c.on($,"click",v=>{c.preventEvent(v),confirm("确定删除该Cookie？")&&T.delete(l).then(R=>{R?(S.error(R),b.error("删除失败")):(b.success("删除成功"),h.parentElement?.removeChild(h));});}),c.append(h,[x]),h},m=async l=>{const h=await T.listAll();c.empty(u);const y=document.createDocumentFragment(),x=M.getValue("exclude-session-cookie");h.forEach(w=>{if(x&&(w.session||T.baseCookieHandler==="cookieStore"&&w.expires==null)||typeof l=="function"&&!l(w))return;const V=d(w);y.appendChild(V);}),this.$data.cookieList=h,u.appendChild(y);};c.on(t,["input","propertychange"],k.debounce(async l=>{const h=c.val(t),y=h.trim()==="",x=M.getValue("search-config-use-regexp");await m(V=>y?true:x?!!V.name.match(new RegExp(h)):V.name.includes(h)),l.from==="refreshButton"&&b.success("刷新成功");})),c.on(e.$shadowRoot,"click",".cookie-item-group:has(.cookie-item-group-right > p)",(l,h)=>{if(e.$shadowRoot?.getSelection?.()?.type==="Range")return;const x=Reflect.get(h,"data-key"),w=Reflect.get(h,"data-value");if(!x){S.error("该项上未获取到data-key值");return}if(!w){S.error("该项上未获取到data-value值");return}k.copy(w).then(V=>{V?b.success(`复制 ${x} 成功`):b.error(`复制 ${x} 失败`);});}),c.onKeyboard(t,"keyup",(l,h,y)=>{l==="Enter"&&y.length===0&&g();}),c.on(n,"click",l=>{c.preventEvent(l);const y=C.alert({title:{text:"搜索配置",position:"center"},content:{text:"",html:true},btn:{ok:{enable:false}},drag:true,mask:{clickEvent:{toClose:true}},width:N.info.width,height:N.info.height,style:`
        ${C.config.cssText.panelCSS}

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
        `}).$shadowRoot.querySelector(".pops-alert-content"),w=C.fn.PanelHandlerComponents().createSectionContainerItem_switch(J("启用正则表达式","search-config-use-regexp",false,void 0,"使用正则表达式搜索Cookie名称",()=>{g();})).$el;c.append(y,w);}),c.on(i,"click",l=>{c.preventEvent(l),g("refreshButton");}),c.on(o,"click",l=>{c.preventEvent(l),we.showView(void 0,h=>{g();});}),c.on(r,"click",async l=>{c.preventEvent(l),oe.showExportDialog();}),c.on(s,"click",async l=>{c.preventEvent(l),oe.showImportDialog();}),c.on(a,"click",async l=>{if(c.preventEvent(l),!window.confirm("确定清除全部Cookie？"))return;const y=await T.clear();y.error?b.warning(`清除成功：${y.success} 失败：${y.error}`):b.success("清除成功"),g();}),c.on(p,"click",l=>{c.preventEvent(l),P.showView();}),c.on(f,"click",l=>{c.preventEvent(l);const y=C.alert({title:{text:"设置",position:"center"},content:{text:"",html:true},btn:{ok:{enable:false}},drag:true,mask:{clickEvent:{toClose:true}},width:N.settingMiddle.width,height:N.settingMiddle.height,style:`
        ${C.config.cssText.panelCSS}

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
        }`}).$shadowRoot.querySelector(".pops-alert-content"),x=C.fn.PanelHandlerComponents(),w=x.createSectionContainerItem_select(ae("CookieManager Api","cookie-manager-api","document.cookie",T.totalCookieManagerApiNameList.map(v=>({text:v,value:v})),void 0,"操作Cookie的Api函数",()=>{g();})).$el,V=x.createSectionContainerItem_switch(J("解码Cookie值","decode-cookie-value",false,()=>{g();},"对Cookie值进行解码")).$el,$=x.createSectionContainerItem_switch(J("排除Session Cookie","exclude-session-cookie",false,()=>{g();},"过滤掉浏览器会话Cookie")).$el;c.append(y,[w,V,$]);});const g=l=>{c.emit(t,"input",{from:l});};g();},registerMenu(){$e.add({key:"cookie_manager_view",text:"⚙ Cookie管理",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showView();}});}},et={init(){this.execController(),c.onReady(()=>{this.execController();});},async execController(){for(let e=0;e<P.$data.matchedRuleList.length;e++){const t=P.$data.matchedRuleList[e],n=t.data.operationMode;S.success(`执行规则：${t.name}`);let i=t.data.execApiName;i==="use-global"&&(i=void 0);const o=new k.CookieManagerService({baseCookieHandler:i}),r=await o.listAll();for(let s=0;s<r.length;s++){const a=r[s],p=a.name,f=t.data.cookieName;let u=false;if(t.data.enableRegExpToMatchCookieName?new RegExp(f,"i").test(p)&&(u=true):p.includes(f)&&(u=true),u){if(n==="delete")o.delete(a);else if(n.startsWith("extended")){let d=Date.now(),m=720*60*60*1e3,g=m*3,l=m*6,h=m*12,y=m;n==="extended-90"?y=g:n==="extended-180"?y=l:n==="extended-360"&&(y=h);let x=false;if(o.baseCookieHandler==="document.cookie")a.expirationDate=d+y,x=true;else if(o.baseCookieHandler==="cookieStore"){let w=a.expires;typeof w=="number"&&w-d<y&&(a.expires=w+y,x=true);}else if(o.baseCookieHandler==="GM_cookie"||o.baseCookieHandler==="GM.cookie"){let w=a.expirationDate;typeof w=="number"&&w*1e3-d<y&&(a.expirationDate=w+y/1e3,x=true);}else S.error("未知的cookieManagerApiName",o.baseCookieHandler);x&&await o.update(a);}}}}}},tt={id:"view-rule",title:"规则",headerTitle:"Cookie操作规则",views:[{type:"container",text:"",views:[ge("自定义规则","操作Cookie的规则","管理",void 0,false,false,"default",()=>{P.showView();})]},{type:"container",text:"",views:[ge("数据导入","导入自定义规则数据","导入",void 0,false,false,"primary",()=>{P.importRule();}),ge("数据导出","导出自定义规则数据","导出",void 0,false,false,"primary",()=>{P.exportRule("CookieManagerRule.json");})]}]},ot={id:"view-general",title:"通用",views:[{text:"Toast配置",type:"container",views:[ae("Toast位置",H.qmsg_config_position.key,H.qmsg_config_position.defaultValue,[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],e=>{S.info("设置当前Qmsg弹出位置"+e.text);},"Toast显示在页面九宫格的位置"),ae("最多显示的数量",H.qmsg_config_maxnums.key,H.qmsg_config_maxnums.defaultValue,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),J("逆序弹出",H.qmsg_config_showreverse.key,H.qmsg_config_showreverse.defaultValue,void 0,"修改Toast弹出的顺序")]}]};pe.addContentConfig([ot,tt]);M.init();ke.init();P.init();et.init();

})(Qmsg, DOMUtils, pops, Utils, CryptoJS);