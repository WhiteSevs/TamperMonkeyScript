// ==UserScript==
// @name         m3u8内容过滤器
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.5.2
// @author       WhiteSevs
// @description  自定义规则对网页中的m3u8的请求内容进行过滤
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.12.1/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@2.0.7/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.8/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.1/dist/index.umd.min.js
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

(function (y, O, he, ge) {
    'use strict';

    var Ie=typeof GM_addValueChangeListener<"u"?GM_addValueChangeListener:void 0,oe=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,we=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,ee=typeof GM_getValue<"u"?GM_getValue:void 0,J=typeof GM_info<"u"?GM_info:void 0,ne=typeof GM_listValues<"u"?GM_listValues:void 0,Me=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,Ae=typeof GM_removeValueChangeListener<"u"?GM_removeValueChangeListener:void 0,te=typeof GM_setValue<"u"?GM_setValue:void 0,Ce=typeof GM_setValues<"u"?GM_setValues:void 0,Le=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Te=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,I=typeof unsafeWindow<"u"?unsafeWindow:void 0,Fe=window;const q={waitRemove(...t){t.forEach(e=>{typeof e=="string"&&O.waitNodeList(e).then(a=>{a.forEach(n=>n.remove());});});},createBlockCSSNode(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(a=>{Array.isArray(a)?e=e.concat(a):e.push(a);}),O.createElement("style",{type:"text/css",innerHTML:`${e.join(`,
`)}{display: none !important;}`})},addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(a=>{Array.isArray(a)?e=e.concat(a):e.push(a);}),_e(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){const e=typeof we=="function"?we(t.keyName):null;return typeof e=="string"&&e?_e(e):q.loadStyleLink(t.url)},async loadStyleLink(t){let e=document.createElement("link");return e.rel="stylesheet",e.type="text/css",e.href=t,new Promise(a=>{O.onReady(()=>{document.head.appendChild(e),a(e);});})},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(a=>{e.onload=()=>{a(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.startsWith("data:")||t.match(/^http(s|):\/\//i)?t:t.startsWith("//")?(t.startsWith("///")||(t=window.location.protocol+t),t):(t.startsWith("/")||(t+="/"),t=window.location.origin+t,t)},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;try{let e=new URL(t);return e.protocol="https:",e.toString()}catch{return t}},lockScroll(...t){let e=document.createElement("style");e.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let a=[document.documentElement,document.body].concat(...t||[]);return a.forEach(n=>{n.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(e),{recovery(){a.forEach(n=>{n.classList.remove("pops-overflow-hidden-important");}),e.remove();}}},async getClipboardText(){function t(n){navigator.clipboard.readText().then(o=>{n(o);}).catch(o=>{b.error("读取剪贴板内容失败👉",o),n("");});}function e(n){navigator.permissions.query({name:"clipboard-read"}).then(()=>{t(n);}).catch(o=>{b.error("申请剪贴板权限失败，尝试直接读取👉",o.message??o.name??o.stack),t(n);});}function a(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(n=>{if(!a()){n("");return}document.hasFocus()?e(n):window.addEventListener("focus",()=>{e(n);},{once:true});})},escapeHtml(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(t,e,a=5e3){let n,o=a-e,l=e,s=async i=>{const r=await t(i);if(typeof r=="boolean"&&r||i){x.workerClearTimeout(n);return}if(l+=e,l>o){s(true);return}n=x.workerSetTimeout(()=>{s(false);},e);};s(false);},findParentNode(t,e,a){if(a){let n=O.closest(t,a);if(n)return n.querySelector(e)}else return O.matches(t,e)?t:O.closest(t,e)},toStr(t,e=2){const a="__undefined__placeholder__replaced__str__"+performance.now();return JSON.stringify(t,(o,l)=>l===void 0?a:l,e).replace(new RegExp(`"${a}"`,"g"),"undefined")},isVerticalScreen(){return !globalThis.screen.orientation.type.includes("landscape")},isMobileDevice(t=768){return this.isVerticalScreen()?globalThis.innerWidth<t:globalThis.innerHeight<t},isTopWindow(){const t=typeof I=="object"&&I!=null?I:window;return t.top===t.self},formatVideoDuration(t){if(typeof t!="number"&&(t=parseInt(t)),isNaN(t))return t.toString();const e=function(a){return a<10?`0${a}`:a};if(t<60)return `0:${e(t)}`;if(t>=60&&t<3600){const a=Math.floor(t/60),n=t%60;return `${a}:${e(n)}`}else {const a=Math.floor(t/3600),n=Math.floor(t/60)%60,o=t%60;return `${a}:${e(n)}:${e(o)}`}},formatTimeStamp(t,e){if(typeof t=="number"&&t<1e12){const i=String(Date.now()).length-String(t).length;t=t*Math.pow(10,i);}let a=t,n=new Date(typeof t=="string"?t.replace(/-/g,"/"):t),l=new Date(e??Date.now()).getTime()-n.getTime(),s=Math.floor(l/(24*3600*1e3));if(s>0)s>7?a=x.formatTime(n.getTime()):a=s+"天前";else {let i=l%864e5,r=Math.floor(i/(3600*1e3));if(r>0)a=r+"小时前";else {let c=i%36e5,u=Math.floor(c/(60*1e3));if(u>0)a=u+"分钟前";else {let d=c%6e4;a=Math.round(d/1e3)+"秒前";}}}return a}},ie="GM_Panel",Oe="data-init",W="data-key",j="data-default-value",Pe="data-init-more-value",Ue="data-plugin-search-config",L="data-storage-api",Se={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{D.showPanel(re.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){q.isTopWindow()&&le.add(this.$data.menuOption);},addMenuOption(t){Array.isArray(t)||(t=[t]),this.$data.menuOption.push(...t);},updateMenuOption(t){Array.isArray(t)||(t=[t]),t.forEach(e=>{let a=this.$data.menuOption.findIndex(n=>n.key===e.key);a!==-1&&(this.$data.menuOption[a]=e);});},getMenuOption(t=0){return this.$data.menuOption[t]},deleteMenuOption(t=0){this.$data.menuOption.splice(t,1);}};class ve{data={storeNodeList:[],destoryFnList:[]};option={};constructor(e){this.option=e;}handlerResult(e,a){const n=[],o=[];let l=[];if(Array.isArray(a))l=l.concat(a);else {const i=r=>{if(typeof r=="object"&&r!=null)if(r instanceof Element)l.push(r);else if(Array.isArray(r))i(r);else {const{$css:c,destory:u}=r;c!=null&&(Array.isArray(c)?l=l.concat(c):c instanceof Element&&l.push(c)),typeof u=="function"&&l.push(u);}else l.push(r);};i(a);}const s=i=>{if(i!=null){if(i instanceof Element){n.push(i);return}if(typeof i=="function"){o.push(i);return}}};for(const i of l){const r=s(i);if(typeof r=="boolean"&&!r)break;if(Array.isArray(i))for(const c of i){const u=s(c);if(typeof u=="boolean"&&!u)break}}this.clearStoreNodeList(),this.execDestoryFnAndClear(),e&&(this.data.storeNodeList=this.data.storeNodeList.concat(n),this.data.destoryFnList=this.data.destoryFnList.concat(o));}getEnableStatus(e){return !!this.option.getValue(e)}clearStoreNodeList=()=>{for(let e=this.data.storeNodeList.length-1;e>=0;e--)this.data.storeNodeList[e]?.remove(),this.data.storeNodeList.splice(e,1);};execDestoryFnAndClear=()=>{for(let e=this.data.destoryFnList.length-1;e>=0;e--){const a=this.data.destoryFnList[e];a(),this.data.destoryFnList.splice(e,1);}};checkMenuExec(){let e=false;return typeof this.option.checkExec=="function"?e=this.option.checkExec(this.option.keyList):e=this.option.keyList.every(a=>this.getEnableStatus(a)),e}}class qe{storageKey;listenerData;cacheData;callbacks=[];constructor(e){if(typeof e=="string"){const a=e.trim();if(a=="")throw new Error("key can not be empty string");this.storageKey=a;}else throw new TypeError("key must be a string");this.listenerData=new ge.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.setLocalValue=this.setLocalValue.bind(this),this.destory=this.destory.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this);}[Symbol.dispose](){this.destory();}async[Symbol.asyncDispose](){this.destory();}destory(){this.cacheData=null;for(let e=this.callbacks.length-1;e>=0;e--){const a=this.callbacks[e];a(),this.callbacks.splice(e,1);}}getLocalValue(){if(this.cacheData==null){let e=ee(this.storageKey);e==null&&(e={},this.setLocalValue(e)),this.destory(),this.cacheData=e;const a=Ie(this.storageKey,(n,o,l)=>{this.cacheData=null,this.cacheData=l;});return this.callbacks.push(()=>{Ae(a);}),e}else return this.cacheData}setLocalValue(e){this.cacheData=null,this.cacheData=e,te(this.storageKey,e);}set(e,a){const n=this.get(e),o=this.getLocalValue();Reflect.set(o,e,a),this.setLocalValue(o),this.emitValueChangeListener(e,a,n);}get(e,a){const n=this.getLocalValue();return Reflect.get(n,e)??a}getAll(){return this.getLocalValue()}delete(e){const a=this.get(e),n=this.getLocalValue();Reflect.deleteProperty(n,e),this.setLocalValue(n),this.emitValueChangeListener(e,void 0,a);}has(e){const a=this.getLocalValue();return Reflect.has(a,e)}keys(){const e=this.getLocalValue();return Reflect.ownKeys(e)}values(){const e=this.getLocalValue();return Reflect.ownKeys(e).map(a=>Reflect.get(e,a))}clear(){this.destory(),oe(this.storageKey);}addValueChangeListener(e,a){const n=Math.random(),o=this.listenerData.get(e)||[];return o.push({id:n,key:e,callback:a}),this.listenerData.set(e,o),n}removeValueChangeListener(e){let a=false;for(const[n,o]of this.listenerData.entries()){for(let l=0;l<o.length;l++){const s=o[l];(typeof e=="string"&&s.key===e||typeof e=="number"&&s.id===e)&&(o.splice(l,1),l--,a=true);}this.listenerData.set(n,o);}return a}async emitValueChangeListener(...e){const[a,n,o]=e;if(!this.listenerData.has(a))return;const l=this.listenerData.get(a);for(let s=0;s<l.length;s++){const i=l[s];if(typeof i.callback=="function"){let r,c;e.length===1||(e.length===2?r=n:e.length===3&&(r=n,c=o)),await i.callback(a,r,c);}}}}const G=new qe(ie),B={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},P={setting:{get width(){return B.width<550?"88vw":B.width<700?"550px":"700px"},get height(){return B.height<450?"70vh":B.height<550?"450px":"550px"}},settingMiddle:{get width(){return B.width<350?"88vw":"350px"}},info:{get width(){return B.width<350?"88vw":"350px"},get height(){return B.height<250?"88vh":"250px"}}},D={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new x.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new x.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new x.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new x.Dictionary),this.__onceExecData},get scriptName(){return pe},get panelConfig(){return this.__panelConfig},set panelConfig(t){this.__panelConfig=t;},key:ie,attributeKeyName:W,attributeDefaultValueName:j},init(){this.initContentDefaultValue(),Se.init();},initContentDefaultValue(){const t=n=>{if(!n.attributes||n.type==="button"||n.type==="container"||n.type==="deepMenu")return;const o=n.attributes,l=o[Oe];if(typeof l=="function"){const c=l();if(typeof c=="boolean"&&!c)return}const s=new Map,i=o[W];if(i!=null){const c=o[j];s.set(i,c);}const r=o[Pe];if(typeof r=="object"&&r&&Object.keys(r).forEach(c=>{const u=r[c];s.set(c,u);}),!s.size){b.warn("请先配置键",n);return}if(n.type==="switch"){const c=typeof n.disabled=="function"?n.disabled():n.disabled;typeof c=="boolean"&&c&&this.$data.contentConfigInitDisabledKeys.push(...s.keys());}for(const[c,u]of s.entries())this.setDefaultValue(c,u);},e=n=>{for(let o=0;o<n.length;o++){const l=n[o];t(l);const s=l.views;s&&Array.isArray(s)&&e(s);}},a=[...re.getAllContentConfig()];for(let n=0;n<a.length;n++){const o=a[n];if(!o.views)continue;const l=o.views;l&&Array.isArray(l)&&e(l);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(t,e){this.$data.contentConfigInitDefaultValue.has(t)&&b.warn("该key已存在，初始化默认值失败: ",{key:t,initValue:this.$data.contentConfigInitDefaultValue.get(t)}),this.$data.contentConfigInitDefaultValue.set(t,e);},getDefaultValue(t){return this.$data.contentConfigInitDefaultValue.get(t)},setValue(t,e){G.set(t,e);},getValue(t,e){const a=G.get(t);return a??(this.$data.contentConfigInitDefaultValue.has(t)?this.$data.contentConfigInitDefaultValue.get(t):e)},deleteValue(t){G.delete(t);},hasKey(t){return G.has(t)},addValueChangeListener(t,e,a){const n=G.addValueChangeListener(t,e);if(a?.immediate||a?.immediateAll){const o=this.getValue(t);a?.immediate?e(t,o,o):a?.immediateAll&&D.emitMenuValueChange(t,o,o);}return n},removeValueChangeListener(t){G.removeValueChangeListener(t);},emitMenuValueChange(t,e,a){G.emitValueChangeListener(t,e,a);},async exec(t,e,a,n=true){let o;typeof t=="string"||Array.isArray(t)?o=()=>t:o=t;let l=false;const s=o();let i=[];Array.isArray(s)?(l=true,i=s):i.push(s);const r=i.find(h=>!this.$data.contentConfigInitDefaultValue.has(h));if(r){b.warn(`${r} 键不存在`);return}const c=JSON.stringify(i);if(n&&this.$data.onceExecMenuData.has(c))return this.$data.onceExecMenuData.get(c);const u=[],d=new ve({keyList:i,getValue:h=>!!this.getValue(h),checkExec(h){let m=false;return typeof a=="function"?m=a(h):m=h.every(C=>this.getValue(C)),m}}),p=async h=>{const m=d.checkMenuExec();let C=[];if(m){const w=i.map(F=>this.getValue(F));C=await e({key:i,triggerKey:h?.key,value:l?w:w[0],addStoreValue:(...F)=>d.handlerResult(m,F)});}d.handlerResult(m,C);};n&&i.forEach(h=>{const m=this.addValueChangeListener(h,(C,w,F)=>p({key:C}));u.push(m);}),await p();const g={checkMenuExec:d.checkMenuExec.bind(d),keyList:i,reload(){this.clearStoreNodeList(),this.execDestoryFnAndClear(),p();},clear(){d.clearStoreNodeList(),this.execDestoryFnAndClear(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreNodeList:d.clearStoreNodeList.bind(d),execDestoryFnAndClear:d.execDestoryFnAndClear.bind(d),removeValueChangeListener:()=>{u.forEach(h=>{this.removeValueChangeListener(h);});},clearOnceExecMenuData(){n&&D.$data.onceExecMenuData.delete(c);}};return this.$data.onceExecMenuData.set(c,g),g},async execMenu(t,e,a=false,n=false){return await this.exec(t,async(...o)=>await e(...o),o=>o.every(s=>{let i=!!this.getValue(s);return D.$data.contentConfigInitDisabledKeys.includes(s)&&(i=false,b.warn(`.execMenu${n?"Once":""} ${s} 被禁用`)),a&&(i=!i),i}),n)},async execMenuOnce(t,e,a=false,n=false){const o=await this.execMenu(t,e,a,true);if(n&&o){const l=()=>{o.reload();};this.removeUrlChangeWithExecMenuOnceListener(t),this.addUrlChangeWithExecMenuOnceListener(t,l);}return o},async execMoreMenu(t,e,a=false,n=false,o=false){const l=await Promise.all(t.map(async([u,d])=>await this.execMenu(u,(...g)=>d(...g),a,n))),s=new ve({keyList:t.map(([u])=>u),getValue:u=>!!this.getValue(u)}),i=[],r=(u=false)=>{if(s.clearStoreNodeList(),s.execDestoryFnAndClear(),u){for(const d of i)this.removeValueChangeListener(d);for(const d of l)d&&this.removeUrlChangeWithExecMenuOnceListener(d.keyList);}},c=()=>{const u=l.every(d=>d?d.checkMenuExec():true);if(r(false),u){const d=e();s.handlerResult(u,d);}};c();for(const u of l)if(u){const d=this.addValueChangeListener(u.keyList[0],()=>{c();});if(i.push(d),o){const p=()=>{u.reload();};this.removeUrlChangeWithExecMenuOnceListener(u.keyList),this.addUrlChangeWithExecMenuOnceListener(u.keyList,p);}}return {clear(){for(const u of l)u?.clear();this.execDestoryFnAndClear(),this.removeValueChangeListener();},execDestoryFnAndClear(){for(const u of l)u?.execDestoryFnAndClear();r(false);},removeValueChangeListener(){for(const u of l)u?.removeValueChangeListener();r(true);}}},async execMoreMenuOnce(t,e,a=false,n=false){return await this.execMoreMenu(t,e,a,true,n)},deleteExecMenuOnce(t){return t=this.transformKey(t),this.$data.onceExecMenuData.delete(t),this.$data.urlChangeReloadMenuExecOnce.delete(t),G.removeValueChangeListener(t)},onceExec(t,e,a=false){if(t=this.transformKey(t),typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(t)||a&&(Array.isArray(t)?t:[t]).findIndex(o=>{if(!!!D.getValue(o))return  true})!==-1||(e(),this.$data.onceExecData.set(t,1));},deleteOnceExec(t){t=this.transformKey(t),this.$data.onceExecData.delete(t);},addUrlChangeWithExecMenuOnceListener(t,e){return t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.set(t,e),{off:()=>this.removeUrlChangeWithExecMenuOnceListener(t)}},removeUrlChangeWithExecMenuOnceListener(t){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.delete(t);},hasUrlChangeWithExecMenuOnceListener(t){return t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.has(t)},async emitUrlChangeWithExecMenuOnceEvent(t){const e=this.$data.urlChangeReloadMenuExecOnce.values();for(const a of e)await a(t);},showPanel(t,e=`${pe}-设置`,a=false,n=false){this.$data.$panel=null,this.$data.panelContent=[];const o=t.findIndex(s=>(typeof s.isBottom=="function"?s.isBottom():!!s.isBottom)&&s.id==="script-version")!==-1;!a&&!o&&t.push(...re.getDefaultBottomContentConfig());const l=S.panel({title:{text:e,position:"center",html:false,style:""},content:t,btn:{close:{enable:true,callback:s=>{s.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:s=>{s(),this.$data.$panel=null;}},width:P.setting.width,height:P.setting.height,drag:true,only:true,style:`
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,...this.$data.panelConfig});return this.$data.$panel=l,this.$data.panelContent=t,n||this.registerConfigSearch({$panel:l,content:t}),{$panel:l,content:t}},registerConfigSearch(t){const{$panel:e,content:a}=t,n=(g,h)=>{if(typeof t.translateCallback=="function")return t.translateCallback(g,h);if(typeof h=="object"&&h)for(const m in h)g=g.replaceAll(`{{${m}}}`,h[m]);return g},o=async(g,h)=>{if(g==null)return;const m=await h(g);return m&&typeof m.isFind=="boolean"&&m.isFind?m.data:await o(m.data,h)},l=(g,h)=>{const m=new IntersectionObserver(C=>{C.forEach(w=>{w.isIntersecting&&(h?.(),m.disconnect());});},{root:null,threshold:1});m.observe(g),g.scrollIntoView({behavior:"smooth",block:"center"});},s=g=>{const h="pops-flashing";f.onAnimationend(g,()=>{g.classList.remove(h);}),g.classList.add(h);},i=g=>{if(g.type==="dblclick"&&p)return;f.preventEvent(g);const h=S.alert({title:{text:n("搜索配置"),position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="${n("请输入需要搜素的配置名称")}">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:P.settingMiddle.width,height:"auto",drag:true,style:`
					${S.config.cssText.panelCSS}

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
					${t.searchDialogStyle??""}
				`}),m=h.$shadowRoot.querySelector(".search-config-text"),C=h.$shadowRoot.querySelector(".search-result-wrapper");m.focus();const w=()=>{f.empty(C);},F=v=>{const _=x.queryProperty(v,M=>M?.next?{isFind:false,data:M.next}:{isFind:true,data:M}),R=f.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${_.matchedData?.path}</div>
							<div class="search-result-item-description">${_.matchedData?.description??""}</div>
						`}),E=S.fn.PanelHandlerComponents();return f.on(R,"click",()=>{const A=e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[v.index];if(!A){y.error(n("左侧项下标{{index}}不存在",{index:v.index}));return}A.scrollIntoView({behavior:"smooth",block:"center"}),A.click(),o(v.next,async $=>{if($?.next){const k=await f.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(V=>{const U=Reflect.get(V,E.$data.nodeStoreConfigKey);return typeof U=="object"&&U!=null&&U.text===$.name}),2500);if(k)k.click();else return y.error(n("未找到对应的二级菜单")),{isFind:true,data:$};return {isFind:false,data:$.next}}else {const k=await f.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(V=>Reflect.get(V,E.$data.nodeStoreConfigKey)===$.matchedData?.formConfig),2500);if(k){l(k);const V=k.closest(".pops-panel-forms-fold[data-fold-enable]");V&&(V.querySelector(".pops-panel-forms-fold-container").click(),await x.sleep(500)),l(k,()=>{s(k);});}else y.error(n("未找到对应的菜单项"));return {isFind:true,data:$}}});}),R},K=v=>{const _=new RegExp(v,"i"),R=[],E=(A,$)=>{for(let k=0;k<A.length;k++){const V=A[k],U=V.views;if(U&&Array.isArray(U)){const H=x.deepClone($);if(V.type==="deepMenu"){const z=x.queryProperty(H,X=>X?.next?{isFind:false,data:X.next}:{isFind:true,data:X});z.next={name:V.text};}E(U,H);}else {let H,z;if(V.type==="own"){let T=Reflect.get(V.attributes||{},Ue);T&&(typeof T=="function"&&(T=T()),typeof T.text=="string"&&(H=T.text),typeof T.desc=="string"&&(z=T.desc));}else H=V.text,z=Reflect.get(V,"description");const X=[H,z],xe=X.findIndex(T=>{if(typeof T=="string")return T.match(_)});if(xe!==-1){const T=x.deepClone($),ye=x.queryProperty(T,N=>N?.next?{isFind:false,data:N.next}:{isFind:true,data:N});ye.next={name:H,matchedData:{path:"",formConfig:V,matchedText:X[xe],description:z}};const be=[];x.queryProperty(T,N=>{const ue=N?.name;return typeof ue=="string"&&ue.trim()!==""&&be.push(ue),N?.next?{isFind:false,data:N.next}:{isFind:true,data:N}});const Ee=be.join(q.escapeHtml(" - "));ye.next.matchedData.path=Ee,R.push(T);}}}};for(let A=0;A<a.length;A++){const $=a[A];if(!$.views||$.isBottom&&$.id==="script-version")continue;const k=$.views;if(k&&Array.isArray(k)){let V=$.title;typeof V=="function"&&(V=V()),E(k,{index:A,name:V});}}const M=document.createDocumentFragment();for(const A of R){const $=F(A);M.appendChild($);}w(),C.append(M);};f.on(m,"input",x.debounce(v=>{f.preventEvent(v);const _=f.val(m).trim();if(_===""){w();return}K(_);},200));};e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(g=>{f.on(g,"dblclick",i);});const c=new WeakMap;let u=false,d,p=false;f.on(e.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(g,h)=>{p=true,clearTimeout(d),d=void 0,u&&c.has(h)?(u=false,c.delete(h),i(g)):(d=setTimeout(()=>{u=false;},200),u=true,c.set(h,g));},{capture:true}),e.$shadowRoot.appendChild(f.createElement("style",{type:"text/css",textContent:`
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
    		`}));},transformKey(t){if(Array.isArray(t))if(t.length>1){const e=t.sort();return JSON.stringify(e)}else return t[0];else return t},getDynamicValue(t,e){let a=false,n=e;const o=this.addValueChangeListener(t,(l,s)=>{n=s;});return {get value(){return a||(a=true,n=D.getValue(t,e)),n},destory(){D.removeValueChangeListener(o);}}}},Z={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},x=ge.noConflict(),f=O.noConflict(),S=he,b=new x.Log(J,I.console||Fe.console),pe=J?.script?.name||void 0,Ne=he.fn.Utils.AnyTouch();b.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});const Re=()=>{const e=he.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex??0,a=x.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex??0;return Math.max(100,e,a)};y.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(t){const e=t.setting.type;if(e==="loading")return  false;const a=t.setting.content;return e==="warning"?b.warn(a):e==="error"?b.error(a):b.info(a),false},get position(){return D.getValue(Z.qmsg_config_position.key,Z.qmsg_config_position.defaultValue)},get maxNums(){return D.getValue(Z.qmsg_config_maxnums.key,Z.qmsg_config_maxnums.defaultValue)},get showReverse(){return D.getValue(Z.qmsg_config_showreverse.key,Z.qmsg_config_showreverse.defaultValue)},get zIndex(){return Re()}});S.GlobalConfig.setGlobalConfig({zIndex:()=>Re(),mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const le=new x.GM_Menu({GM_getValue:ee,GM_setValue:te,GM_registerMenuCommand:Me,GM_unregisterMenuCommand:Le}),se=new x.Httpx({xmlHttpRequest:Te,logDetails:false});se.interceptors.request.use(t=>t);se.interceptors.response.use(t=>t,t=>(b.error("[Httpx-HttpxRequest.response] 响应错误",{data:t}),t.type==="onabort"?y.warning("请求取消",{consoleLogContent:true}):t.type==="onerror"?y.error("请求异常",{consoleLogContent:true}):t.type==="ontimeout"?y.error("请求超时",{consoleLogContent:true}):y.error("其它错误",{consoleLogContent:true}),t));I.Object.defineProperty,I.Object.keys,I.Object.values,I.Function.prototype.apply,I.Function.prototype.call,I.Element.prototype.appendChild,I.setTimeout.bind(I),I.clearTimeout.bind(I),I.setInterval.bind(I),I.clearInterval.bind(I);const _e=f.addStyle.bind(f);q.addBlockCSS.bind(q);O.selector.bind(O);O.selectorAll.bind(O);const ae=new x.CookieManagerService({baseCookieHandler:"GM_cookie"});ae.isSupportGM_cookie||(ae.isSupportCookieStore?ae.setOptions({baseCookieHandler:"cookieStore"}):ae.setOptions({baseCookieHandler:"document.cookie"}));new x.DocumentCookieHandler;const re={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new x.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(t){Array.isArray(t)||(t=[t]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,t);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(t=0){return this.$data.contentConfig.get(t)??[]},getDefaultBottomContentConfig(t){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let e=false,a;const n=(i,r)=>{if(t&&typeof t.translateCallback=="function")return t.translateCallback(i,r);if(typeof r=="object"&&r)for(const c in r)i=i.replaceAll(`{{${c}}}`,r[c]);return i},o=(i,r)=>{typeof r!="string"&&(r=q.toStr(r));const c=new Blob([r]),u=globalThis.URL.createObjectURL(c);f.createElement("a",{href:u,download:i}).click(),x.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(u);},500);},l=()=>{const i=g=>{const h=S.alert({title:{text:n("请选择导入方式"),position:"center"},content:{text:`
            <div class="btn-control" data-mode="local">${n("本地导入")}</div>
            <div class="btn-control" data-mode="network">${n("网络导入")}</div>
            <div class="btn-control" data-mode="clipboard">${n("剪贴板导入")}</div>`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(v){v.close();}}},drag:true,mask:{enable:true},width:P.info.width,height:P.info.height,style:`
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
          }`}),m=h.$shadowRoot.querySelector(".btn-control[data-mode='local']"),C=h.$shadowRoot.querySelector(".btn-control[data-mode='network']"),w=h.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),F=async v=>{confirm(n("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）"))&&(typeof ne=="function"?typeof oe=="function"?(ne().forEach(E=>{oe(E);}),y.success(n("已清空脚本存储的配置"))):y.error(n("不支持GM_deleteValue函数，无法执行删除脚本配置")):y.error(n("不支持GM_listValues函数，无法清空脚本存储的配置"))),typeof Ce=="function"?Ce(v):Object.keys(v).forEach(E=>{const M=v[E];te(E,M);}),y.success(n("配置导入完毕"));},K=v=>new Promise(async _=>{const R=x.toJSON(v);Object.keys(R).length===0?y.warning(n("解析为空配置，不导入")):await F(R),_(true);});f.on(m,"click",v=>{f.preventEvent(v),h.close();const _=f.createElement("input",{type:"file",accept:".json"});f.on(_,["propertychange","input"],()=>{if(!_.files?.length)return;const R=_.files[0],E=new FileReader;E.onload=()=>{K(E.result);},E.readAsText(R,"UTF-8");}),_.click();}),f.on(C,"click",v=>{f.preventEvent(v),h.close();const _=S.prompt({title:{text:n("网络导入"),position:"center"},content:{text:"",placeholder:n("请填写URL"),focus:true},btn:{close:{enable:true,callback(M){M.close();}},ok:{text:n("导入"),callback:async M=>{const A=M.text;if(x.isNull(A)){y.error(n("请填入完整的url"));return}const $=y.loading(n("正在获取配置...")),k=await se.get(A,{allowInterceptConfig:false});if($.close(),!k.status){b.error(k),y.error(n("获取配置失败"),{consoleLogContent:true});return}await K(k.data.responseText)&&M.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:P.info.width,height:"auto"}),R=_.$shadowRoot.querySelector("input"),E=_.$shadowRoot.querySelector(".pops-prompt-btn-ok");f.on(R,["input","propertychange"],()=>{f.val(R)===""?f.attr(E,"disabled","true"):f.removeAttr(E,"disabled");}),f.onKeyboard(R,"keydown",(M,A,$)=>{M==="Enter"&&$.length===0&&f.val(R)!==""&&f.emit(E,"click");}),f.emit(R,"input");}),f.on(w,"click",async v=>{f.preventEvent(v),h.close();let _=await q.getClipboardText();if(_.trim()===""){y.warning(n("获取到的剪贴板内容为空"));return}await K(_);});},r=(g=`${pe}_panel-setting-${x.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,h)=>{const m=S.alert({title:{text:n("请选择导出方式"),position:"center"},content:{text:`
            <div class="btn-control" data-mode="export-to-file">${n("导出至文件")}</div>
            <div class="btn-control" data-mode="export-to-clipboard">${n("导出至剪贴板")}</div>
            `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(F){F.close();}}},drag:true,mask:{enable:true},width:P.info.width,height:P.info.height,style:`
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
          }`}),C=m.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),w=m.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");f.on(C,"click",F=>{f.preventEvent(F);try{o(g,h),m.close();}catch(K){y.error(K.toString(),{consoleLogContent:true});}}),f.on(w,"click",async()=>{await x.copy(h)?(y.success(n("复制成功")),m.close()):y.error(n("复制失败"));});},u=S.confirm({title:{text:n("配置"),position:"center"},content:{text:'<textarea name="config-value" id="config" readonly></textarea>',html:true},btn:{ok:{enable:true,type:"primary",text:n("导入"),callback(){i();}},cancel:{enable:true,text:n("导出"),callback(){r(void 0,p);}}},width:B.width<450?"90vw":"450px",height:"auto",style:`
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
        `}).$shadowRoot.querySelector("textarea"),d={};if(typeof ne=="function")ne().forEach(h=>{const m=ee(h);Reflect.set(d,h,m);});else {y.warning(n("不支持函数GM_listValues，仅导出菜单配置"));const g=ee(ie);Reflect.set(d,ie,g);}const p=q.toStr(d);u.value=p;},s=()=>{let i=J?.script?.supportURL||J?.script?.namespace;typeof i=="string"&&x.isNotNull(i)&&window.open(i,"_blank");};return [{id:"script-version",title:n("版本：{{version}}",{version:J?.script?.version||n("未知")}),isBottom:true,views:[],clickFirstCallback(){return  false},afterRender(i){new Ne(i.$asideLiElement).on("tap",function(){clearTimeout(a),a=void 0,e?(e=false,l()):(a=setTimeout(()=>{e=false,s();},200),e=true);});}}]},setDefaultBottomContentConfig(t){this.$data.__defaultBottomContentConfig=t;}},Ge={get ajaxHooker(){return this.__ajaxHooker==null&&(this.__ajaxHooker=x.ajaxHooker()),this.__ajaxHooker},hook(){this.ajaxHooker.hook(t=>{let e=q.fixUrl(t.url);try{if(!new URL(e).pathname.endsWith(".m3u8"))return;t.response=o=>{let l=o.responseText;if(l.trim()===""||!l.includes("#EXT-X-ENDLIST"))return;let s=me.runRule(l);o.responseText=s;};}catch(a){b.error("m3u8过滤器 hook network出错",a);}});},unhook(){this.ajaxHooker.unhook();}},$e=function(t,e,a,n,o,l,s){const i={text:t,type:"select",description:l,attributes:{},props:{},getValue(){return this.props[L].get(e,a)},callback(r){if(r==null)return;const c=r.value;if(b.info(`选择：${r.text}`),typeof o=="function"&&o(r))return;this.props[L].set(e,c);},data:n};return Reflect.set(i.attributes,W,e),Reflect.set(i.attributes,j,a),ce.initComponentsStorageApi("select",i,{get(r,c){return D.getValue(r,c)},set(r,c){D.setValue(r,c);}}),i},Y=function(t,e,a=false,n,o,l,s,i,r){const c={text:t,type:"switch",description:o,disabled:s,attributes:{},props:{},getValue(){return this.props[L].get(e,a)},callback(u,d){const p=!!d;b.success(`${p?"开启":"关闭"} ${t}`),this.props[L].set(e,p);},afterAddToUListCallBack:(...u)=>{}};return Reflect.set(c.attributes,W,e),Reflect.set(c.attributes,j,a),ce.initComponentsStorageApi("switch",c,{get(u,d){return D.getValue(u,d)},set(u,d){D.setValue(u,d);}}),c},Be=function(t,e,a,n,o,l="",s,i){const r={text:t,type:"textarea",attributes:{},props:{},description:n,placeholder:l,disabled:s,getValue(){const u=this.props[L].get(e,a);return Array.isArray(u)?u.join(`
`):u},callback(c,u){this.props[L].set(e,u);}};return Reflect.set(r.attributes,W,e),Reflect.set(r.attributes,j,a),ce.initComponentsStorageApi("switch",r,{get(c,u){return D.getValue(c,u)},set(c,u){D.setValue(c,u);}}),r},ce={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new ge.Dictionary),this.__storeApiFn}},getStorageApi(t){if(this.hasStorageApi(t))return this.$data.storeApiValue.get(t)},hasStorageApi(t){return this.$data.storeApiValue.has(t)},setStorageApi(t,e){this.$data.storeApiValue.set(t,e);},initComponentsStorageApi(t,e,a){let n;this.hasStorageApi(t)?n=this.getStorageApi(t):n=a,this.setComponentsStorageApiProperty(e,n);},setComponentsStorageApiProperty(t,e){Reflect.set(t.props,L,e);}},ke=function(t,e,a,n,o,l="",s="text",i,r){const c={text:t,type:"input",inputType:s,attributes:{},props:{},description:n,placeholder:l,afterAddToUListCallBack:i,getValue(){return this.props[L].get(e,a)},callback(u,d){u.target.validity.valid,this.props[L].set(e,d);}};return Reflect.set(c.attributes,W,e),Reflect.set(c.attributes,j,a),ce.initComponentsStorageApi("input",c,{get(u,d){return D.getValue(u,d)},set(u,d){D.setValue(u,d);}}),c};class Ke{option;constructor(e){this.option=e;}async showView(){const e=S.confirm({title:{text:this.option.title,position:"center"},content:{text:`
        <form class="rule-form-container" onsubmit="return false">
            <ul class="rule-form-ulist"></ul>
            <input type="submit" style="display: none;" />
        </form>
        `,html:true},btn:x.assign({ok:{callback:async()=>{await l();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
      ${S.config.cssText.panelCSS}
      
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
      `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),a=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");const n=e.$shadowRoot.querySelector(".rule-form-ulist"),o=await this.option.getView(await this.option.data());f.append(n,o);const l=async()=>{(await this.option.onsubmit(a,await this.option.data())).success&&(e.close(),typeof this.option.dialogCloseCallBack=="function"&&await this.option.dialogCloseCallBack(true));};return e}}class He{option;constructor(e){this.option=e;}async showView(e){const a=S.confirm({title:{text:this.option.title,position:"center"},content:{text:`
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
      ${S.config.cssText.panelCSS}

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
      `,btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async()=>{this.showEditView(false,await this.option.getAddData(),a.$shadowRoot);}},close:{enable:true,callback(){a.close();}},cancel:{enable:false},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:()=>{const i=S.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async()=>{if(b.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){y.error("清理失败");return}else y.success("清理成功");await this.updateDeleteAllBtnText(a.$shadowRoot),this.clearContent(a.$shadowRoot),i.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh"}),{$searchContainer:n,$externalSelect:o,$ruleValueSelect:l,$searchInput:s}=this.parseViewElement(a.$shadowRoot);if(this.option.bottomControls?.filter?.enable){let i=null,r=null;Array.isArray(this.option.bottomControls?.filter?.option)&&f.append(o,this.option.bottomControls?.filter?.option.map(d=>{const p=f.createElement("option",{innerText:d.name});return Reflect.set(p,"data-value",d),p})),Array.isArray(this.option.bottomControls?.filter?.inputOption)&&f.append(l,this.option.bottomControls?.filter?.inputOption.map(d=>{const p=f.createElement("option",{innerText:d.name});return Reflect.set(p,"data-value",d),p})),f.on(o,"change",async()=>{const d=o[o.selectedIndex],p=Reflect.get(d,"data-value");typeof p?.selectedCallBack=="function"&&p.selectedCallBack(p),i=p,await u(false);}),f.on(l,"change",async()=>{const d=l[l.selectedIndex],p=Reflect.get(d,"data-value");typeof p?.selectedCallBack=="function"&&p.selectedCallBack(p),r=p,await u(false);}),f.onInput(s,x.debounce(async()=>{await u(false);}));const c=()=>{const d=o[o.selectedIndex];i=Reflect.get(d,"data-value");const p=l[l.selectedIndex];r=Reflect.get(p,"data-value");},u=async d=>{this.clearContent(a.$shadowRoot),d&&c();const p=await this.option.data(),g=[],h=f.val(s);for(let m=0;m<p.length;m++){const C=p[m];if(typeof e=="function"){const w=await e(C);if(typeof w=="boolean"&&!w)continue}if(i){const w=await i?.filterCallBack?.(C);if(typeof w=="boolean"&&!w)continue}if(r){let w=true;if(h===""?w=true:w=false,w||(w=await r?.filterCallBack?.(C,h)),!w)continue}g.push(C);}await this.appendRuleItemElement(a.$shadowRoot,g);};if(typeof e=="object"&&e!=null){let d;typeof e.external=="number"?d=e.external:d=Array.from(o.options).findIndex(g=>Reflect.get(g,"data-value").value===e.external),d!==-1&&(o.selectedIndex=d);let p;typeof e.rule=="number"?p=e.rule:p=Array.from(l.options).findIndex(g=>Reflect.get(g,"data-value").value===e.rule),p!==-1&&(l.selectedIndex=p);}await u(true);}else f.hide(n,false);}showEditView(e,a,n,o,l,s){let i=async c=>{if(c){if(typeof s=="function"){let u=await this.option.getData(a);s(u);}}else if(e||await this.option.deleteData(a),typeof l=="function"){let u=await this.option.getData(a);l(u);}};new Ke({title:e?"编辑":"添加",data:()=>a,dialogCloseCallBack:i,getView:async c=>await this.option.itemControls.edit.getView(c,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async c=>{c.close(),await i(false);}},close:{callback:async c=>{c.close(),await i(false);}}},onsubmit:async(c,u)=>{let d=await this.option.itemControls.edit.onsubmit(c,e,u);return d.success?e?(y.success("修改成功"),n&&await this.updateRuleItemElement(d.data,o,n)):n&&await this.appendRuleItemElement(n,d.data):e&&b.error("修改失败"),d},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(e){const a=e.querySelector(".rule-view-container"),n=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other"),o=e.querySelector(".rule-view-search-container"),l=o.querySelector(".pops-panel-select .select-rule-status"),s=o.querySelector(".pops-panel-select .select-rule-value"),i=o.querySelector(".pops-panel-input input");return {$container:a,$deleteBtn:n,$searchContainer:o,$externalSelect:l,$ruleValueSelect:s,$searchInput:i}}parseRuleItemElement(e){const a=e.querySelector(".rule-controls-enable"),n=a.querySelector(".pops-panel-switch"),o=a.querySelector(".pops-panel-switch__input"),l=a.querySelector(".pops-panel-switch__core"),s=e.querySelector(".rule-controls-edit"),i=e.querySelector(".rule-controls-delete");return {$enable:a,$enableSwitch:n,$enableSwitchInput:o,$enableSwitchCore:l,$edit:s,$delete:i,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,a){const n=await this.option.getDataItemName(e),o=f.createElement("div",{className:"rule-item",innerHTML:`
			<div class="rule-name">${n}</div>
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
					${S.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${S.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(o,"data-rule",e);const l="pops-panel-switch-is-checked",{$enable:s,$enableSwitch:i,$enableSwitchCore:r,$enableSwitchInput:c,$delete:u,$edit:d}=this.parseRuleItemElement(o);return this.option.itemControls.enable.enable?(f.on(r,"click",async()=>{let p=false;i.classList.contains(l)?(i.classList.remove(l),p=false):(i.classList.add(l),p=true),c.checked=p,await this.option.itemControls.enable.callback(e,p);}),await this.option.itemControls.enable.getEnable(e)&&i.classList.add(l)):s.remove(),this.option.itemControls.edit.enable?f.on(d,"click",p=>{f.preventEvent(p),this.showEditView(true,e,a,o,g=>{e=null,e=g;});}):d.remove(),this.option.itemControls.delete.enable?f.on(u,"click",p=>{f.preventEvent(p);const g=S.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async()=>{b.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(y.success("成功删除该数据"),o.remove(),await this.updateDeleteAllBtnText(a),g.close()):y.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):u.remove(),o}async appendRuleItemElement(e,a){const{$container:n}=this.parseViewElement(e),o=[],l=Array.isArray(a)?a:[a];for(let s=0;s<l.length;s++){const i=l[s],r=await this.createRuleItemElement(i,e);o.push(r);}return f.append(n,o),await this.updateDeleteAllBtnText(e),o}async updateRuleContaienrElement(e){this.clearContent(e);const a=await this.option.data();await this.appendRuleItemElement(e,a),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,a,n){const o=await this.createRuleItemElement(e,n);a.after(o),a.remove();}clearContent(e){const{$container:a}=this.parseViewElement(e);f.html(a,"");}setDeleteBtnText(e,a,n=false){const{$deleteBtn:o}=this.parseViewElement(e);n?f.html(o,a):f.text(o,a);}async updateDeleteAllBtnText(e){let a=await this.option.data();this.setDeleteBtnText(e,`清空所有(${a.length})`);}}const de={duration2Text(t){const e=Math.floor(t/3600),a=Math.floor(t%3600/60),n=parseInt((t%60).toString());return [e.toString().padStart(2,"0"),a.toString().padStart(2,"0"),n.toString().padStart(2,"0")].join(":")},similar(t,e){if(!t||!e)return 0;var a=t.length>e.length?t.length:e.length,n=t.length,o=e.length,l=[],s=function(g,h,m){return g<h?g<m?g:m:h<m?h:m},i,r,c,u,d;if(n===0)return o;if(o===0)return n;for(i=0;i<=n;i++)l[i]=[],l[i][0]=i;for(r=0;r<=o;r++)l[0][r]=r;for(i=1;i<=n;i++)for(c=t.charAt(i-1),r=1;r<=o;r++)u=e.charAt(r-1),c===u?d=0:d=1,l[i][r]=s(l[i-1][r]+1,l[i][r-1]+1,l[i-1][r-1]+d);return 1-l[n][o]/a}},De={updateISMatchedRuleMenu(){let t={key:"matched-rule-count",text:`🔧 当前页面执行规则数量： ${me.$data.matchedRule.length}`,autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{}};le.update(t);},updateIsFilterAdsDurationInfoMenu(t){let e={key:"is-filter-segment-duration",text:`🍵 已过滤时长：${t}s`,autoReload:false,isStoreValue:false,showText(a){return a},callback:()=>{}};le.update(e);}},fe={parse_EXTINF(t,e,a){let n=Number(t.replace(/(^#EXTINF:\s*|,)/g,"")),o=a,l=a+n;return {filePath:e.trim(),startDuration:o,endDuration:l,duration:n}}},Ve=t=>{Q.$data.isFilterDuration+=t.duration,De.updateIsFilterAdsDurationInfoMenu(Q.$data.isFilterDuration);},Q={$data:{isFilterDuration:0},filterAdsWithFilePathLength(t,e={handlerFilePath(a){return a}}){let a=t.split(`
`),n=new x.Dictionary,o=0;for(let s=0;s<a.length;s++){const i=a[s].trim();if(!i.startsWith("#EXTINF:"))continue;let{duration:r,startDuration:c,endDuration:u,filePath:d}=fe.parse_EXTINF(i,a[s+1],o);if(e&&typeof e.handlerFilePath=="function"){let h=e.handlerFilePath(d);typeof h=="string"&&(d=h);}o+=r;let p=d.length.toString(),g=n.get(p)||[];g.push({filePath:d,startDuration:c,endDuration:u,duration:r,index:s}),n.set(p,g),s++;}let l=[];if(n.forEach((s,i)=>{l.push({filePathLength:i,segmentsInfoList:s});}),l=x.sortListByProperty(l,s=>s.segmentsInfoList.length,true),l.splice(0,1),l.length){let s=[];l.forEach(r=>{r.segmentsInfoList.forEach(c=>{s.push({index:c.index,data:c});});});let i=0;for(let r=0;r<a.length;r++){let c=s.findIndex(u=>u.index===r+i);if(c!=-1){let u=s[c];b.info(`通杀1：过滤广告片段 ==> 索引：${r+i} 文件名：${u.data.filePath} 开始：${de.duration2Text(u.data.startDuration)} 持续时长：${u.data.duration}s`),a.splice(r,2),r-=2,s.splice(c,1),i=i+2;}}}return l.forEach(s=>{s.segmentsInfoList.forEach(i=>{Ve(i);});}),{m3u8Text:a.join(`
`),filterInfo:l}},filterAdsWithFilePathSimilar(t,e={similarCompareValue:.35,includePercent:.5,handlerFilePath(a){return a}}){let a=t.split(`
`),n=[],o=0;for(let i=0;i<a.length;i++){const r=a[i].trim();if(!r.startsWith("#EXTINF:"))continue;let{duration:c,startDuration:u,endDuration:d,filePath:p}=fe.parse_EXTINF(r,a[i+1],o);if(e&&typeof e.handlerFilePath=="function"){let g=e.handlerFilePath(p);typeof g=="string"&&(p=g);}o+=c,n.push({filePath:p,startDuration:u,endDuration:d,duration:c,index:i}),i++;}let l=[],s=0;for(let i=0;i<n.length;i++){const r=n[i];let c=true,u=0,d=n;for(let p=0;p<d.length;p++){const g=d[p];if(de.similar(r.filePath,g.filePath)>=e.similarCompareValue&&u++,u/d.length>e.includePercent){c=false;break}}c&&(l.push(r),b.info(`通杀2：过滤广告片段 ==> 索引：${r.index} 文件名：${r.filePath} 开始：${de.duration2Text(r.startDuration)} 持续时长：${r.duration}s`),a.splice(r.index-s,2),s+=2);}return l.forEach(i=>{Ve(i);}),{m3u8Text:a.join(`
`),filterInfo:l}}},me={$key:{STORAGE_KEY:"m3u8-rule"},$data:{matchedRule:[]},init(){let t=this.getData();this.registerMenu(t);for(let e=0;e<t.length;e++)try{const a=t[e];a.enable&&window.location.href.match(new RegExp(a.data.url))&&this.$data.matchedRule.push(a);}catch(a){b.error("m3u8过滤器 ==> 规则初始化出错",a);}this.$data.matchedRule.length&&(b.info("m3u8过滤器 ==> 当前网站执行的规则：",this.$data.matchedRule),Ge.hook(),De.updateISMatchedRuleMenu());},registerMenu(t){le.update([{key:"m3u8-rule",text:`⚙ 自定义规则（${t.length}条）`,autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showView();}},{key:"m3u8-export-rule",text:"⚙ 规则导出",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.exportRule("m3u8-filter-rule.json");}},{key:"m3u8-import-rule",text:"⚙ 规则导入",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.importRule();}}]);},getTemplateData(){return {uuid:x.generateUUID(),enable:true,name:"",data:{url:"",commonFilterAdsSegmentsFilePathLength:true,commonFilterAdsSegmentsFilePathSimilar:false,ownFilterCode:""}}},showView(){let t=S.fn.PanelHandlerComponents();function e(n){return {get(o,l){return n[o]??l},set(o,l){n[o]=l;}}}new He({title:"m3u8自定义规则",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:n=>n.name,updateData:n=>this.updateData(n),deleteData:n=>this.deleteData(n),getData:n=>this.getData().find(s=>s.uuid===n.uuid)??n,itemControls:{enable:{enable:true,getEnable(n){return n.enable},callback:(n,o)=>{n.enable=o,this.updateData(n);}},edit:{enable:true,getView:(n,o)=>{let l=document.createDocumentFragment();o||(n=this.getTemplateData());let s=Y("启用","enable",true);Reflect.set(s.props,L,e(n));let i=t.createSectionContainerItem_switch(s).$el,r=ke("规则名称","name","","",void 0,"必填");Reflect.set(r.props,L,e(n));let c=t.createSectionContainerItem_input(r).$el,u=ke("匹配网址","url","","",void 0,"必填，可正则，注意转义");Reflect.set(u.props,L,e(n.data));let d=t.createSectionContainerItem_input(u).$el,p=Y("广告通杀1","commonFilterAdsSegmentsFilePathLength",true,void 0,"使用文件名称长度比较");Reflect.set(p.props,L,e(n.data));let g=t.createSectionContainerItem_switch(p).$el,h=Y("广告通杀2","commonFilterAdsSegmentsFilePathSimilar",false,void 0,"使用文件名称相似度比较");Reflect.set(h.props,L,e(n.data));let m=t.createSectionContainerItem_switch(h).$el,C=Be("自定义过滤js","ownFilterCode","","",void 0,`参数：
    [m3u8Text]：需要处理的m3u8字符串
返回：[String]

例如：
m3u8Text = m3u8Text.replace('','');
return m3u8Text;
`);Reflect.set(C.props,L,e(n.data));let w=t.createSectionContainerItem_textarea(C).$el;return l.appendChild(i),l.appendChild(c),l.appendChild(d),l.appendChild(g),l.appendChild(m),l.appendChild(w),l},onsubmit:(n,o,l)=>{let s=n.querySelectorAll(".rule-form-ulist > li"),i=this.getTemplateData();return o&&(i.uuid=l.uuid),s.forEach(r=>{let c=Reflect.get(r,t.$data.nodeStoreConfigKey),u=Reflect.get(c,"attributes"),d=Reflect.get(r,L),p=Reflect.get(u,W),g=Reflect.get(u,j),h=d.get(p,g);Reflect.has(i,p)?Reflect.set(i,p,h):Reflect.has(i.data,p)?Reflect.set(i.data,p,h):b.error(`${p}不在数据中`);}),i.name.trim()===""?(y.error("规则名称不能为空"),{success:false,data:i}):i.data.url.trim()===""?(y.error("匹配网址不能为空"),{success:false,data:i}):o?{success:this.updateData(i),data:i}:{success:this.addData(i),data:i}},style:`
                        li[data-key="ownFilterCode"]{
                            gap: 30px;
                        }
                        li[data-key="ownFilterCode"] .pops-panel-textarea{
                            flex: 1;
                        }
                        li[data-key="ownFilterCode"] .pops-panel-textarea textarea{
                            height: 300px;
                        }
                    `},delete:{enable:true,deleteCallBack:n=>this.deleteData(n)}},bottomControls:{filter:{enable:true,option:[{name:"启用",value:"enable",filterCallBack(n){return n.enable}},{name:"未启用",value:"notEnable",filterCallBack(n){return !n.enable}},{name:"当前网址运行的规则",value:"currentUrl",filterCallBack(n){try{return !!window.location.href.match(new RegExp(n.data.url))}catch{return  false}}}],inputOption:[{name:"规则名称",value:"name",filterCallBack(n,o){return !!n.name.match(o)}},{name:"网址",value:"url",filterCallBack(n,o){return !!n.data.url.match(o)}}]}}}).showView();},runRule(t){let e=t;for(let a=0;a<this.$data.matchedRule.length;a++)try{const o=this.$data.matchedRule[a].data;if(o.commonFilterAdsSegmentsFilePathLength){const{filterInfo:l,m3u8Text:s}=Q.filterAdsWithFilePathLength(e);e=s;}if(o.commonFilterAdsSegmentsFilePathSimilar){const{filterInfo:l,m3u8Text:s}=Q.filterAdsWithFilePathSimilar(e);e=s;}if(o.ownFilterCode.trim()!==""){let s=new Function("m3u8Text","M3U8Filter","M3U8Parser",o.ownFilterCode)(e,Q,fe);typeof s=="string"?e=s:b.error("m3u8过滤器 ==> 自定义过滤js代码执行结果不是字符串",s);}break}catch(n){b.error("m3u8过滤器 ==> 执行m3u8文本过滤时出现异常",n);}return e},getData(){return ee(this.$key.STORAGE_KEY,[])},setData(t){te(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(n=>n.uuid==t.uuid)===-1?(e.push(t),te(this.$key.STORAGE_KEY,e),true):false},updateData(t){let e=this.getData(),a=e.findIndex(o=>o.uuid==t.uuid),n=false;return a!==-1&&(n=true,e[a]=t),this.setData(e),n},deleteData(t){let e=this.getData(),a=e.findIndex(o=>o.uuid==t.uuid),n=false;return a!==-1&&(n=true,e.splice(a,1)),this.setData(e),n},clearData(){oe(this.$key.STORAGE_KEY);},exportRule(t="rule.json"){let e=this.getData(),a=new Blob([JSON.stringify(e,null,4)]),n=window.URL.createObjectURL(a),o=f.createElement("a");o.href=n,o.download=t,o.click(),setTimeout(()=>{window.URL.revokeObjectURL(n);},1500);},importRule(t){let e=S.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(i,r){i.close();}}},mask:{enable:true},drag:true,width:P.info.width,height:P.info.height,style:`
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),a=e.$shadowRoot.querySelector(".btn-control[data-mode='local']"),n=e.$shadowRoot.querySelector(".btn-control[data-mode='network']"),o=e.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),l=i=>{let r=this.getData(),c=[];for(let u=0;u<i.length;u++){const d=i[u];r.findIndex(g=>g.uuid===d.uuid)!==-1||c.push(d);}r=r.concat(c),this.setData(r),y.success(`共 ${i.length} 条规则，新增 ${c.length} 条`),t?.();},s=i=>new Promise(r=>{let c=x.toJSON(i);if(!Array.isArray(c)){b.error(c),y.error("导入失败，格式不符合（不是数组）",{consoleLogContent:true}),r(false);return}if(!c.length){y.error("导入失败，解析出的数据为空",{consoleLogContent:true}),r(false);return}l(c),r(true);});f.on(a,"click",i=>{f.preventEvent(i),e.close();let r=f.createElement("input",{type:"file",accept:".json"});f.on(r,["propertychange","input"],c=>{if(!r.files?.length)return;let u=r.files[0],d=new FileReader;d.onload=()=>{s(d.result);},d.readAsText(u,"UTF-8");}),r.click();}),f.on(n,"click",i=>{f.preventEvent(i),e.close();let r=S.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(d,p){d.close();}},ok:{text:"导入",callback:async(d,p)=>{let g=d.text;if(x.isNull(g)){y.error("请填入完整的url");return}let h=y.loading("正在获取配置..."),m=await se.get(g,{allowInterceptConfig:false});if(h.close(),!m.status){b.error(m),y.error("获取配置失败",{consoleLogContent:true});return}await s(m.data.responseText)&&d.close();}},cancel:{enable:false}},mask:{enable:true},drag:true,width:P.info.width,height:"auto"}),c=r.$shadowRoot.querySelector("input"),u=r.$shadowRoot.querySelector(".pops-prompt-btn-ok");f.on(c,["input","propertychange"],d=>{f.val(c)===""?f.attr(u,"disabled","true"):f.removeAttr(u,"disabled");}),f.onKeyboard(c,"keydown",(d,p,g)=>{d==="Enter"&&g.length===0&&f.val(c)!==""&&f.emit(u,"click");}),f.emit(c,"input");}),f.on(o,"click",async i=>{f.preventEvent(i),e.close();let r=await x.getClipboardInfo();if(r.error!=null){y.error(r.error.toString());return}if(r.content.trim()===""){y.warning("获取到的剪贴板内容为空");return}await s(r.content);});}},We={id:"component-common",title:"通用",views:[{text:"Toast配置",type:"container",views:[$e("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],t=>{b.info("设置当前Qmsg弹出位置"+t.text);},"Toast显示在页面九宫格的位置"),$e("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),Y("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]},{text:"Cookie配置",type:"container",views:[Y("启用","httpx-use-cookie-enable",false,void 0,"启用后，将根据下面的配置进行添加cookie"),Y("使用document.cookie","httpx-use-document-cookie",false,void 0,"自动根据请求的域名来设置对应的cookie")]}]};re.addContentConfig([We]);Se.deleteMenuOption();D.init();me.init();

})(Qmsg, DOMUtils, pops, Utils);