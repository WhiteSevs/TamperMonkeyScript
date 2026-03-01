// ==UserScript==
// @name         CookieManager
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.3.1
// @author       WhiteSevs
// @description  简单而强大的Cookie编辑器，允许您快速创建、编辑和删除Cookie
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA/NJREFUeF7tWm1u4jAQjVHusfR3jMQNlp5ky0l2e5K2Jym9ARLO79JzEMgyKF5FqeN5YzuwQPoHqRl/zPObN5NxVHbnf+rO/c9GAEYG3DkCYwjcOQFGETxbCGitF1mWLeq6/qGUmtZ1PW1+t0qpN2PMn0uwcTAA5vP5tKqqp8bhJ8C5R2PMCrBLajIIAFprOs3fkp0eGfFaluVSMiaFbVIAQhy3Tlw1AA3dXyjGQ0/lagFoxO091PGrZkAq5wmEq2NASuevDgCB889HXVjleb6tqmraaASbHeq6ptpgm+f5cr1eb2PDyzdenAUawfsENuXM60VRvBydQ+oCWmJljHkE1go2EQOgtSbB86q9L54FAJIubMuyfAj2DhgoAmA2m1FlR+nO+6eUWm42m9c+IwREO9YYI9ojt7fuc9HkRVF8Uv0OLPLsq+0F82T/DQDCKs8bu1rrGgDxZELh5LKdTCYfPpah88MMkGy6WdwpghL6A054mQaMx/oBaOy3F2xS2ZtNg/SsqqqocrnrUAqRhBggTF0I8MlsYjUCAiCA/skc5CYaHACO/rZq42oDzpHQ55RyXWNRgWQZ0Ef/xvFlu4sjzBShPkPjXPtzDQwGIM/zB1edzjEG2n06I7aUZgFwpS3u1dVX6LSyg83zv8DiKgSWeABczkSUut82ZJun0h4iggaSJhEGuKq20FLXWRylaKm5ABkMAN/Efb0CbjNDCSiXJlkGeOL5GwuYk/TG4xDiyYFOrGEB8NXuVtCoe0M3Pb445jbDVZs0/rRhpegX7T4nEUFJB8erTX3iyTVJulkHFU4uW6EMEN/y9KFgGdPuFQAC2HuK3JtlKgCIbtF9f8ebom12euncV3DRfFxzlkvXEAM4eiL5OMbGp+Lc3rgMAAHQIM02QmOcZMb23hr7AEDoLwEgeRgIAOstuny1A0J/GACOagJnxKYu4UTiH6E/DAAZpipUQvsHRGlqhDb1Bm3Jd8ME9wrZQsgeGbFgt9u9h765nbN/gJ6+iAGxLDhX/wCNfXuwMANoAFC0OGOcU2TJRQkjImzp2x0vAsCCIA0F7lS4ig5RTu5do28OMQAtJiA3xHbd0P4B4ru1CfrKLAgAqR6E9A8knmdZFuS8WAS7mxI2MaT9AxSDYOejAZBqgqR/wHmPtr25eYJDoD1xbI3AbbL7PFTwXOskAaAljPQBxWBt7r6yWApg2z4ZAO2Kkb4RTtnmHsLxoEJIgjSFxX6/XxwOh5+Cj6L+LdF6Z/gY8kvy5AxwgdQG46S8nc/lm/9RY5U+j/uixid6uSk5lEE1IHYjlxp/FgZcyjlk3REABKVbthkZcMuni/g2MgBB6ZZt/gJwetZfo7objAAAAABJRU5ErkJggg==
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.11.3/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.9.5/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@3.3.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.0/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@886625af68455365e426018ecb55419dd4ea6f30/lib/CryptoJS/index.js
// @connect      *
// @grant        GM.cookie
// @grant        GM_cookie
// @grant        GM_deleteValue
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_listValues
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_setValues
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (w, z, ue, J, me) {
    'use strict';

    var ge=typeof GM<"u"?GM:void 0,Ne=typeof GM_cookie<"u"?GM_cookie:void 0,se=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,Ee=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,oe=typeof GM_getValue<"u"?GM_getValue:void 0,ee=typeof GM_info<"u"?GM_info:void 0,ae=typeof GM_listValues<"u"?GM_listValues:void 0,Oe=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,ne=typeof GM_setValue<"u"?GM_setValue:void 0,Ae=typeof GM_setValues<"u"?GM_setValues:void 0,Ge=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Ue=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,I=typeof unsafeWindow<"u"?unsafeWindow:void 0,Pe=window;const X={waitRemove(...t){t.forEach(e=>{typeof e=="string"&&z.waitNodeList(e).then(n=>{n.forEach(i=>i.remove());});});},createBlockCSSNode(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),z.createElement("style",{type:"text/css",innerHTML:`${e.join(`,
`)}{display: none !important;}`})},addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),Te(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){const e=typeof Ee=="function"?Ee(t.keyName):null;return typeof e=="string"&&e?Te(e):X.loadStyleLink(t.url)},async loadStyleLink(t){let e=document.createElement("link");return e.rel="stylesheet",e.type="text/css",e.href=t,new Promise(n=>{z.onReady(()=>{document.head.appendChild(e),n(e);});})},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(n=>{e.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.startsWith("data:")||t.match(/^http(s|):\/\//i)?t:t.startsWith("//")?(t.startsWith("///")||(t=window.location.protocol+t),t):(t.startsWith("/")||(t+="/"),t=window.location.origin+t,t)},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;try{let e=new URL(t);return e.protocol="https:",e.toString()}catch{return t}},lockScroll(...t){let e=document.createElement("style");e.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...t||[]);return n.forEach(i=>{i.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(e),{recovery(){n.forEach(i=>{i.classList.remove("pops-overflow-hidden-important");}),e.remove();}}},async getClipboardText(){function t(i){navigator.clipboard.readText().then(o=>{i(o);}).catch(o=>{R.error("读取剪贴板内容失败👉",o),i("");});}function e(i){navigator.permissions.query({name:"clipboard-read"}).then(()=>{t(i);}).catch(o=>{R.error("申请剪贴板权限失败，尝试直接读取👉",o.message??o.name??o.stack),t(i);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(i=>{if(!n()){i("");return}document.hasFocus()?e(i):window.addEventListener("focus",()=>{e(i);},{once:true});})},escapeHtml(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(t,e,n=5e3){let i,o=n-e,a=e,r=async l=>{const c=await t(l);if(typeof c=="boolean"&&c||l){_.workerClearTimeout(i);return}if(a+=e,a>o){r(true);return}i=_.workerSetTimeout(()=>{r(false);},e);};r(false);},findParentNode(t,e,n){if(n){let i=z.closest(t,n);if(i)return i.querySelector(e)}else return z.matches(t,e)?t:z.closest(t,e)},toStr(t){const e="__undefined__placeholder__replaced__str__";return JSON.stringify(t,(i,o)=>o===void 0?e:o,2).replace(new RegExp(`"${e}"`,"g"),"undefined")},isVerticalScreen(){return !globalThis.screen.orientation.type.includes("landscape")},isMobileDevice(t=768){return this.isVerticalScreen()?globalThis.innerWidth<t:globalThis.innerHeight<t},isTopWindow(){const t=typeof I=="object"&&I!=null?I:window;return t.top===t.self}},ce="GM_Panel",Ce="data-init",Y="data-key",Z="data-default-value",Be="data-init-more-value",ze="data-plugin-search-config",N="data-storage-api",Fe={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{D.showPanel(pe.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){X.isTopWindow()&&_e.add(this.$data.menuOption);},addMenuOption(t){Array.isArray(t)||(t=[t]),this.$data.menuOption.push(...t);},updateMenuOption(t){Array.isArray(t)||(t=[t]),t.forEach(e=>{let n=this.$data.menuOption.findIndex(i=>i.key===e.key);n!==-1&&(this.$data.menuOption[n]=e);});},getMenuOption(t=0){return this.$data.menuOption[t]},deleteMenuOption(t=0){this.$data.menuOption.splice(t,1);}};class He{storageKey;listenerData;constructor(e){if(typeof e=="string"){const n=e.trim();if(n=="")throw new Error("key参数不能为空字符串");this.storageKey=n;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new J.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this);}getLocalValue(){let e=oe(this.storageKey);return e==null&&(e={},this.setLocalValue(e)),e}setLocalValue(e){ne(this.storageKey,e);}set(e,n){const i=this.get(e),o=this.getLocalValue();Reflect.set(o,e,n),this.setLocalValue(o),this.emitValueChangeListener(e,n,i);}get(e,n){const i=this.getLocalValue();return Reflect.get(i,e)??n}getAll(){return this.getLocalValue()}delete(e){const n=this.get(e),i=this.getLocalValue();Reflect.deleteProperty(i,e),this.setLocalValue(i),this.emitValueChangeListener(e,void 0,n);}has(e){const n=this.getLocalValue();return Reflect.has(n,e)}keys(){const e=this.getLocalValue();return Reflect.ownKeys(e)}values(){const e=this.getLocalValue();return Reflect.ownKeys(e).map(n=>Reflect.get(e,n))}clear(){se(this.storageKey);}addValueChangeListener(e,n){const i=Math.random(),o=this.listenerData.get(e)||[];return o.push({id:i,key:e,callback:n}),this.listenerData.set(e,o),i}removeValueChangeListener(e){let n=false;for(const[i,o]of this.listenerData.entries()){for(let a=0;a<o.length;a++){const r=o[a];(typeof e=="string"&&r.key===e||typeof e=="number"&&r.id===e)&&(o.splice(a,1),a--,n=true);}this.listenerData.set(i,o);}return n}async emitValueChangeListener(...e){const[n,i,o]=e;if(!this.listenerData.has(n))return;const a=this.listenerData.get(n);for(let r=0;r<a.length;r++){const l=a[r];if(typeof l.callback=="function"){let c,d;e.length===1||(e.length===2?c=i:e.length===3&&(c=i,d=o)),await l.callback(n,c,d);}}}}const j=new He(ce),F={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},O={setting:{get width(){return F.width<550?"88vw":F.width<700?"550px":"700px"},get height(){return F.height<450?"70vh":F.height<550?"450px":"550px"}},settingMiddle:{get width(){return F.width<350?"88vw":"350px"},get height(){return F.height<450?"88vh":"450px"}},info:{get width(){return F.width<350?"88vw":"350px"},get height(){return F.height<250?"88vh":"250px"}}},D={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new _.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new _.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new _.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new _.Dictionary),this.__onceExecData},get scriptName(){return be},get panelConfig(){return this.__panelConfig},set panelConfig(t){this.__panelConfig=t;},key:ce,attributeKeyName:Y,attributeDefaultValueName:Z},init(){this.initContentDefaultValue(),Fe.init();},initContentDefaultValue(){const t=i=>{if(!i.attributes||i.type==="button"||i.type==="container"||i.type==="deepMenu")return;const o=i.attributes;let a=o[Ce];if(typeof a=="function"){let d=a();if(typeof d=="boolean"&&!d)return}let r=new Map,l=o[Y];if(l!=null){const d=o[Z];r.set(l,d);}let c=o[Be];if(typeof c=="object"&&c&&Object.keys(c).forEach(d=>{const h=c[d];r.set(d,h);}),!r.size){R.warn("请先配置键",i);return}if(i.type==="switch"){let d=typeof i.disabled=="function"?i.disabled():i.disabled;typeof d=="boolean"&&d&&this.$data.contentConfigInitDisabledKeys.push(...r.keys());}for(const[d,h]of r.entries())this.setDefaultValue(d,h);},e=i=>{for(let o=0;o<i.length;o++){let a=i[o];t(a);let r=a.views;r&&Array.isArray(r)&&e(r);}},n=[...pe.getAllContentConfig()];for(let i=0;i<n.length;i++){let o=n[i];if(!o.views)continue;const a=o.views;a&&Array.isArray(a)&&e(a);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(t,e){this.$data.contentConfigInitDefaultValue.has(t)&&R.warn("该key已存在，初始化默认值失败: "+t),this.$data.contentConfigInitDefaultValue.set(t,e);},getDefaultValue(t){return this.$data.contentConfigInitDefaultValue.get(t)},setValue(t,e){j.set(t,e);},getValue(t,e){const n=j.get(t);return n??(this.$data.contentConfigInitDefaultValue.has(t)?this.$data.contentConfigInitDefaultValue.get(t):e)},deleteValue(t){j.delete(t);},hasKey(t){return j.has(t)},addValueChangeListener(t,e,n){const i=j.addValueChangeListener(t,e);if(n?.immediate||n?.immediateAll){const o=this.getValue(t);n?.immediate?e(t,o,o):n?.immediateAll&&D.emitMenuValueChange(t,o,o);}return i},removeValueChangeListener(t){j.removeValueChangeListener(t);},emitMenuValueChange(t,e,n){j.emitValueChangeListener(t,e,n);},async exec(t,e,n,i=true){const o=this;let a;typeof t=="string"||Array.isArray(t)?a=()=>t:a=t;let r=false;const l=a();let c=[];Array.isArray(l)?(r=true,c=l):c.push(l);const d=c.find(x=>!this.$data.contentConfigInitDefaultValue.has(x));if(d){R.warn(`${d} 键不存在`);return}const h=JSON.stringify(c);if(i&&this.$data.onceExecMenuData.has(h))return this.$data.onceExecMenuData.get(h);let f=[];const u=[];let m=[];const p=(x,v)=>{let E=[],A=[],$=[];if(Array.isArray(v))$=$.concat(v);else {const M=q=>{if(typeof q=="object"&&q!=null)if(q instanceof Element)$.push(q);else {const{$css:G,destory:U}=q;G!=null&&(Array.isArray(G)?$=$.concat(G):$.push(G)),typeof U=="function"&&$.push(U);}else $.push(q);};if(v!=null&&Array.isArray(v))for(const q of v)M(q);else M(v);}const T=M=>{if(M!=null){if(M instanceof Element){E.push(M);return}if(typeof M=="function"){A.push(M);return}}};for(const M of $){const q=T(M);if(typeof q=="boolean"&&!q)break;if(Array.isArray(M))for(const G of M){const U=T(G);if(typeof U=="boolean"&&!U)break}}y(),g(),x&&(f=f.concat(E),m=m.concat(A));},b=x=>!!this.getValue(x),y=()=>{for(let x=0;x<f.length;x++)f[x]?.remove(),f.splice(x,1),x--;},g=()=>{for(let x=0;x<m.length;x++){const v=m[x];v(),m.splice(x,1),x--;}},C=()=>{let x=false;return typeof n=="function"?x=n(c):x=c.every(v=>b(v)),x},k=async x=>{const v=C();let E=[];if(v){const A=c.map($=>this.getValue($));E=await e({key:c,triggerKey:x?.key,value:r?A:A[0],addStoreValue:(...$)=>p(v,$)});}p(v,E);};i&&c.forEach(x=>{const v=this.addValueChangeListener(x,(E,A,$)=>k({key:E}));u.push(v);}),await k();const V={reload(){this.clearStoreStyleElements(),this.destory(),k();},clear(){this.clearStoreStyleElements(),this.destory(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreStyleElements:()=>y(),destory(){return g()},removeValueChangeListener:()=>{u.forEach(x=>{this.removeValueChangeListener(x);});},clearOnceExecMenuData(){i&&o.$data.onceExecMenuData.delete(h);}};return this.$data.onceExecMenuData.set(h,V),V},async execMenu(t,e,n=false,i=false){return await this.exec(t,async o=>await e(o),o=>o.every(r=>{let l=!!this.getValue(r);return D.$data.contentConfigInitDisabledKeys.includes(r)&&(l=false,R.warn(`.execMenu${i?"Once":""} ${r} 被禁用`)),n&&(l=!l),l}),i)},async execMenuOnce(t,e,n=false,i=false){const o=await this.execMenu(t,e,n,true);if(i&&o){const a=()=>{o.reload();};this.removeUrlChangeWithExecMenuOnceListener(t),this.addUrlChangeWithExecMenuOnceListener(t,a);}return o},deleteExecMenuOnce(t){return t=this.transformKey(t),this.$data.onceExecMenuData.delete(t),this.$data.urlChangeReloadMenuExecOnce.delete(t),j.removeValueChangeListener(t)},onceExec(t,e){if(t=this.transformKey(t),typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(t)||(e(),this.$data.onceExecData.set(t,1));},deleteOnceExec(t){t=this.transformKey(t),this.$data.onceExecData.delete(t);},addUrlChangeWithExecMenuOnceListener(t,e){return t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.set(t,e),{off:()=>this.removeUrlChangeWithExecMenuOnceListener(t)}},removeUrlChangeWithExecMenuOnceListener(t){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.delete(t);},hasUrlChangeWithExecMenuOnceListener(t){return t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.has(t)},async emitUrlChangeWithExecMenuOnceEvent(t){const e=this.$data.urlChangeReloadMenuExecOnce.values();for(const n of e)await n(t);},showPanel(t,e=`${be}-设置`,n=false,i=false){this.$data.$panel=null,this.$data.panelContent=[];const o=t.findIndex(r=>(typeof r.isBottom=="function"?r.isBottom():!!r.isBottom)&&r.id==="script-version")!==-1;!n&&!o&&t.push(...pe.getDefaultBottomContentConfig());const a=S.panel({title:{text:e,position:"center",html:false,style:""},content:t,btn:{close:{enable:true,callback:r=>{r.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:r=>{r(),this.$data.$panel=null;}},width:O.setting.width,height:O.setting.height,drag:true,only:true,style:`
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,...this.$data.panelConfig});this.$data.$panel=a,this.$data.panelContent=t,i||this.registerConfigSearch({$panel:a,content:t});},registerConfigSearch(t){const{$panel:e,content:n}=t,i=async(u,m)=>{if(u==null)return;const p=await m(u);return p&&typeof p.isFind=="boolean"&&p.isFind?p.data:await i(p.data,m)},o=(u,m)=>{const p=new IntersectionObserver(b=>{b.forEach(y=>{y.isIntersecting&&(m?.(),p.disconnect());});},{root:null,threshold:1});p.observe(u),u.scrollIntoView({behavior:"smooth",block:"center"});},a=u=>{const m="pops-flashing";s.onAnimationend(u,()=>{u.classList.remove(m);}),u.classList.add(m);},r=u=>{if(u.type==="dblclick"&&f)return;s.preventEvent(u);const m=S.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:O.settingMiddle.width,height:"auto",drag:true,style:`
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
					}
					.search-result-item-description{
						font-size: 0.8em;
						color: #6c6c6c;
					}
					${t.searchDialogStyle??""}
				`});m.$shadowRoot.querySelector(".search-wrapper");const p=m.$shadowRoot.querySelector(".search-config-text"),b=m.$shadowRoot.querySelector(".search-result-wrapper");p.focus();const y=()=>{s.empty(b);},g=k=>{const V=_.queryProperty(k,E=>E?.next?{isFind:false,data:E.next}:{isFind:true,data:E}),x=s.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${V.matchedData?.path}</div>
							<div class="search-result-item-description">${V.matchedData?.description??""}</div>
						`}),v=S.config.PanelHandlerComponents();return s.on(x,"click",()=>{const A=e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[k.index];if(!A){w.error(`左侧项下标${k.index}不存在`);return}A.scrollIntoView({behavior:"smooth",block:"center"}),A.click(),i(k.next,async $=>{if($?.next){const T=await s.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(M=>{const q=Reflect.get(M,v.$data.nodeStoreConfigKey);return typeof q=="object"&&q!=null&&q.text===$.name}),2500);if(T)T.click();else return w.error("未找到对应的二级菜单"),{isFind:true,data:$};return {isFind:false,data:$.next}}else {const T=await s.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(M=>Reflect.get(M,v.$data.nodeStoreConfigKey)===$.matchedData?.formConfig),2500);if(T){o(T);const M=T.closest(".pops-panel-forms-fold[data-fold-enable]");M&&(M.querySelector(".pops-panel-forms-fold-container").click(),await _.sleep(500)),o(T,()=>{a(T);});}else w.error("未找到对应的菜单项");return {isFind:true,data:$}}});}),x},C=k=>{const V=new RegExp(k,"i"),x=[],v=(A,$)=>{for(let T=0;T<A.length;T++){const M=A[T],q=M.views;if(q&&Array.isArray(q)){const G=_.deepClone($);if(M.type==="deepMenu"){const U=_.queryProperty(G,Q=>Q?.next?{isFind:false,data:Q.next}:{isFind:true,data:Q});U.next={name:M.text};}v(q,G);}else {let G,U;if(M.type==="own"){const P=Reflect.get(M.attributes||{},ze);P&&(typeof P.text=="string"&&(G=P.text),typeof P.desc=="string"&&(U=P.desc));}else G=M.text,U=Reflect.get(M,"description");const Q=[G,U],Me=Q.findIndex(P=>{if(typeof P=="string")return P.match(V)});if(Me!==-1){const P=_.deepClone($),Re=_.queryProperty(P,K=>K?.next?{isFind:false,data:K.next}:{isFind:true,data:K});Re.next={name:G,matchedData:{path:"",formConfig:M,matchedText:Q[Me],description:U}};const Ve=[];_.queryProperty(P,K=>{const he=K?.name;return typeof he=="string"&&he.trim()!==""&&Ve.push(he),K?.next?{isFind:false,data:K.next}:{isFind:true,data:K}});const Ie=Ve.join(X.escapeHtml(" - "));Re.next.matchedData.path=Ie,x.push(P);}}}};for(let A=0;A<n.length;A++){const $=n[A];if(!$.views||$.isBottom&&$.id==="script-version")continue;const T=$.views;if(T&&Array.isArray(T)){let M=$.title;typeof M=="function"&&(M=M()),v(T,{index:A,name:M});}}const E=document.createDocumentFragment();for(const A of x){let $=g(A);E.appendChild($);}y(),b.append(E);};s.on(p,"input",_.debounce(k=>{s.preventEvent(k);let V=s.val(p).trim();if(V===""){y();return}C(V);},200));};e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(u=>{s.on(u,"dblclick",r);});let c=new WeakMap,d=false,h,f=false;s.on(e.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(u,m)=>{f=true,clearTimeout(h),h=void 0,d&&c.has(m)?(d=false,c.delete(m),r(u)):(h=setTimeout(()=>{d=false;},200),d=true,c.set(m,u));},{capture:true}),e.$shadowRoot.appendChild(s.createElement("style",{type:"text/css",textContent:`
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
    		`}));},transformKey(t){if(Array.isArray(t)){const e=t.sort();return JSON.stringify(e)}else return t},getDynamicValue(t,e){const n=this;let i=false,o=e;const a=this.addValueChangeListener(t,(r,l)=>{o=l;});return {get value(){return i||(i=true,o=n.getValue(t,e)),o},destory(){n.removeValueChangeListener(a);}}}},B={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},_=J.noConflict(),s=z.noConflict(),S=ue,R=new _.Log(ee,I.console||Pe.console),be=ee?.script?.name||void 0,Ke=ue.config.Utils.AnyTouch(),je=false;R.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});w.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(t){const e=t.setting.type;if(e==="loading")return  false;const n=t.setting.content;return e==="warning"?R.warn(n):e==="error"?R.error(n):R.info(n),false},get position(){return D.getValue(B.qmsg_config_position.key,B.qmsg_config_position.defaultValue)},get maxNums(){return D.getValue(B.qmsg_config_maxnums.key,B.qmsg_config_maxnums.defaultValue)},get showReverse(){return D.getValue(B.qmsg_config_showreverse.key,B.qmsg_config_showreverse.defaultValue)},get zIndex(){let t=J.getMaxZIndex(),e=ue.config.InstanceUtils.getPopsMaxZIndex().zIndex;return J.getMaxValue(t,e)+100}});S.GlobalConfig.setGlobalConfig({zIndex:()=>{const t=J.getMaxZIndex(void 0,void 0,n=>{if(n?.classList?.contains("qmsg-shadow-container")||n?.closest("qmsg")&&n.getRootNode()instanceof ShadowRoot)return  false}),e=ue.config.InstanceUtils.getPopsMaxZIndex().zIndex;return J.getMaxValue(t,e)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const _e=new _.GM_Menu({GM_getValue:oe,GM_setValue:ne,GM_registerMenuCommand:Oe,GM_unregisterMenuCommand:Ge}),de=new _.Httpx({xmlHttpRequest:Ue,logDetails:je});de.interceptors.request.use(t=>t);de.interceptors.response.use(void 0,t=>(R.error("拦截器-请求错误",t),t.type==="onabort"?w.warning("请求取消",{consoleLogContent:true}):t.type==="onerror"?w.error("请求异常",{consoleLogContent:true}):t.type==="ontimeout"?w.error("请求超时",{consoleLogContent:true}):w.error("其它错误",{consoleLogContent:true}),t));I.Object.defineProperty,I.Object.keys,I.Object.values,I.Function.prototype.apply,I.Function.prototype.call,I.Element.prototype.appendChild,I.setTimeout.bind(I),I.clearTimeout.bind(I),I.setInterval.bind(I),I.clearInterval.bind(I);const Te=s.addStyle.bind(s);z.selector.bind(z);z.selectorAll.bind(z);const Le=new _.GM_Cookie,pe={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new _.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(t){Array.isArray(t)||(t=[t]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,t);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(t=0){return this.$data.contentConfig.get(t)??[]},getDefaultBottomContentConfig(){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let t=false,e;const n=(a,r)=>{typeof r!="string"&&(r=X.toStr(r));const l=new Blob([r]),c=globalThis.URL.createObjectURL(l);s.createElement("a",{href:c,download:a}).click(),_.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(c);},500);},i=()=>{const a=f=>{const u=S.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="local">本地导入</div>
            <div class="btn-control" data-mode="network">网络导入</div>
            <div class="btn-control" data-mode="clipboard">剪贴板导入</div>`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(C,k){C.close();}}},drag:true,mask:{enable:true},width:O.info.width,height:O.info.height,style:`
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
          }`}),m=u.$shadowRoot.querySelector(".btn-control[data-mode='local']"),p=u.$shadowRoot.querySelector(".btn-control[data-mode='network']"),b=u.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),y=async C=>{confirm("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）")&&(typeof ae=="function"?typeof se=="function"?(ae().forEach(x=>{se(x);}),w.success("已清空脚本存储的配置")):w.error("不支持GM_deleteValue函数，无法执行删除脚本配置"):w.error("不支持GM_listValues函数，无法清空脚本存储的配置")),typeof Ae=="function"?Ae(C):Object.keys(C).forEach(x=>{const v=C[x];ne(x,v);}),w.success("配置导入完毕");},g=C=>new Promise(async k=>{const V=_.toJSON(C);Object.keys(V).length===0?w.warning("解析为空配置，不导入"):await y(V),k(true);});s.on(m,"click",C=>{s.preventEvent(C),u.close();const k=s.createElement("input",{type:"file",accept:".json"});s.on(k,["propertychange","input"],V=>{if(!k.files?.length)return;const x=k.files[0],v=new FileReader;v.onload=()=>{g(v.result);},v.readAsText(x,"UTF-8");}),k.click();}),s.on(p,"click",C=>{s.preventEvent(C),u.close();const k=S.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(v,E){v.close();}},ok:{text:"导入",callback:async(v,E)=>{const A=v.text;if(_.isNull(A)){w.error("请填入完整的url");return}const $=w.loading("正在获取配置..."),T=await de.get(A,{allowInterceptConfig:false});if($.close(),!T.status){R.error(T),w.error("获取配置失败",{consoleLogContent:true});return}await g(T.data.responseText)&&v.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:O.info.width,height:"auto"}),V=k.$shadowRoot.querySelector("input"),x=k.$shadowRoot.querySelector(".pops-prompt-btn-ok");s.on(V,["input","propertychange"],v=>{s.val(V)===""?s.attr(x,"disabled","true"):s.removeAttr(x,"disabled");}),s.onKeyboard(V,"keydown",(v,E,A)=>{v==="Enter"&&A.length===0&&s.val(V)!==""&&s.emit(x,"click");}),s.emit(V,"input");}),s.on(b,"click",async C=>{s.preventEvent(C),u.close();let k=await X.getClipboardText();if(k.trim()===""){w.warning("获取到的剪贴板内容为空");return}await g(k);});},r=(f=`${be}_panel-setting-${_.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,u)=>{const m=S.alert({title:{text:"请选择导出方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="export-to-file">导出至文件</div>
            <div class="btn-control" data-mode="export-to-clipboard">导出至剪贴板</div>
            `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(y,g){y.close();}}},drag:true,mask:{enable:true},width:O.info.width,height:O.info.height,style:`
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
          }`}),p=m.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),b=m.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");s.on(p,"click",y=>{s.preventEvent(y);try{n(f,u),m.close();}catch(g){w.error(g.toString(),{consoleLogContent:true});}}),s.on(b,"click",async y=>{await _.copy(u)?(w.success("复制成功"),m.close()):w.error("复制失败");});},c=S.confirm({title:{text:"配置",position:"center"},content:{text:`
            <textarea name="config-value" id="config" readonly></textarea>
          `,html:true},btn:{ok:{enable:true,type:"primary",text:"导入",callback(f,u){a();}},cancel:{enable:true,text:"导出",callback(f,u){r(void 0,h);}}},width:F.width<450?"90vw":"450px",height:"auto",style:`
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
        `}).$shadowRoot.querySelector("textarea"),d={};if(typeof ae=="function")ae().forEach(u=>{const m=oe(u);Reflect.set(d,u,m);});else {w.warning("不支持函数GM_listValues，仅导出菜单配置");const f=oe(ce);Reflect.set(d,ce,f);}const h=X.toStr(d);c.value=h;},o=()=>{let a=ee?.script?.supportURL||ee?.script?.namespace;typeof a=="string"&&_.isNotNull(a)&&window.open(a,"_blank");};return [{id:"script-version",title:`版本：${ee?.script?.version||"未知"}`,isBottom:true,views:[],clickFirstCallback(){return  false},afterRender(a){new Ke(a.$asideLiElement).on("tap",function(l){clearTimeout(e),e=void 0,t?(t=false,i()):(e=setTimeout(()=>{t=false,o();},200),t=true);});}}]},setDefaultBottomContentConfig(t){this.$data.__defaultBottomContentConfig=t;}};let qe=t=>{(typeof t=="object"&&t!=null||typeof t=="function")&&Object.keys(t).forEach(e=>{typeof t[e]=="function"&&(t[e]=t[e].bind(t));});};const le=Ne;qe(le);qe(Le);const $e=["document.cookie","cookieStore","GM_cookie","GM.cookie"];class Se{__apiName;constructor(e){if(typeof e=="string"&&!$e.includes(e))throw new Error(`未知的apiName：${e}`);this.__apiName=e;}get cookieManagerApiName(){let e=D.getValue("cookie-manager-api","document.cookie");return this.__apiName||e}get cookieManager(){if(this.cookieManagerApiName==="GM_cookie")return {list(e,n){le.list(e,i=>{n(i);});},set(e,n){le.set(e,i=>{n(i);});},delete(e,n){le.delete(e,i=>{n(i);});}};if(this.cookieManagerApiName==="GM.cookie")return {list(e,n){ge.cookie.list().then(i=>{n(i);});},set(e,n){ge.cookie.set(e).then(i=>{n(i??null);}).catch(i=>{n(i);});},delete(e,n){ge.cookie.delete(e).then(i=>{n(i??null);}).catch(i=>{n(i);});}};if(this.cookieManagerApiName==="cookieStore"){let e=I.cookieStore;return {list(n,i){e.getAll().then(o=>{i(o);}).catch(o=>{R.error(o),w.error(o.toString());});},set(n,i){e.set(n).then(()=>{i();}).catch(o=>{i(o);});},delete(n,i){e.delete(n).then(()=>{i();}).catch(o=>{i(o);});}}}else return Le}queryAllCookie(){return new Promise((e,n)=>{try{this.cookieManager.list({},i=>{let o=i||[];o=o.sort((a,r)=>a.name.localeCompare(r.name)),e(o);});}catch(i){R.error(i),w.error(i.toString()),n(i);}})}deleteAllCookie(){return new Promise((e,n)=>{try{this.cookieManager.list({},async i=>{const o=i||[],a={success:0,error:0};for(let r=0;r<o.length;r++){const l=o[r];await new Promise(d=>{this.deleteCookie(l).then(h=>{d(h);});})?a.error++:a.success++;}e(a);});}catch(i){R.error(i),w.error(i.toString()),n(i);}})}addCookie(e){return new Promise((n,i)=>{try{Reflect.deleteProperty(e,"hostOnly"),this.cookieManager.set(e,o=>{n(o);});}catch(o){R.error(o),w.error(o.toString()),i(o);}})}deleteCookie(e){return new Promise((n,i)=>{try{this.cookieManager.delete(e,o=>{n(o);});}catch(o){R.error(o),w.error(o.toString()),i(o);}})}updateCookie(e){return new Promise(async n=>{let i;try{if(this.cookieManagerApiName==="document.cookie"||this.cookieManagerApiName==="cookieStore"){let a=await this.deleteCookie(e);if(a)throw new TypeError(a.toString())}let o=await this.addCookie(e);if(o)throw new TypeError(o.toString())}catch(o){i=o;}finally{n(i);}})}}const L=new Se,te={encrypt(t,e){return me.AES.encrypt(t,e).toString()},decrypt(t,e){return me.AES.decrypt(t,e).toString(me.enc.Utf8)},formatCookie(t,e,n){let i="";if(e==="header_string")i=t.map(o=>{let a=o.value;return `${o.name}=${a}; `}).join("");else if(e==="json")i=JSON.stringify({api:L.cookieManagerApiName,hostname:window.location.hostname,data:t},null,2);else throw new Error("不支持的格式化类型："+e);return n&&(i=this.encrypt(i,n)),i},showExportDialog(){let t=S.confirm({title:{text:"导出 Cookie",position:"center"},content:{text:`
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
					`,html:true},width:window.innerWidth<400?"88vw":"400px",height:"auto",btn:{merge:true,position:"space-between",ok:{text:"导出",async callback(l){let c=ve.$data.cookieList;if(c.length===0){w.warning("Cookie为空");return}let d=te.formatCookie(c,r.exportType,r.encodePwd);const h=new Blob([d],{type:"text/plain"}),f=URL.createObjectURL(h);s.createElement("a",{download:`${window.location.hostname}_${r.exportType}_${L.cookieManagerApiName}_${Date.now()}.txt`,href:f,target:"_blank"}).click(),setTimeout(()=>{URL.revokeObjectURL(f);},500),l.close();}},other:{enable:true,text:"导出至剪贴板",type:"xiaomi-primary",async callback(l){let c=ve.$data.cookieList;if(c.length===0){w.warning("Cookie为空");return}let d=te.formatCookie(c,r.exportType,r.encodePwd);await _.copy(d)?w.success("复制成功"):w.error("复制失败"),l.close();}}},style:`
      ${S.config.cssText.panelCSS}

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
      `});const e=t.$shadowRoot.querySelector(".export-example-code-text-container pre"),n=t.$shadowRoot.querySelector("#cookie-format-header_string"),i=t.$shadowRoot.querySelector("#cookie-format-json"),o=t.$shadowRoot.querySelector("#encode-pwd"),a={key:"cookie-backup-export-dialog-config",getConfig(){return D.getValue(this.key,{exportType:"header_string",encodePwd:""})},saveConfig(){let l="header_string";i.checked&&(l="json"),D.setValue(this.key,{exportType:l,encodePwd:s.val(o)}),r=this.getConfig();}};let r=a.getConfig();s.on(n,"input",()=>{const l=[{name:"_ga",value:"GA1.2.123456789.987654321",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false},{name:"PHPSESSID",value:"28f2d88ee9322cfd2e4f1e",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false},{name:"csrftoken",value:"abcdef123456",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false},{name:"logged_in",value:"true",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false}];let c=this.formatCookie(l,"header_string");s.text(e,c),a.saveConfig();}),s.on(i,"input",()=>{const l=[{name:"sessionId",value:"abc123xyz456",domain:".example.com",path:"/",secure:true,httpOnly:true,sameSite:"lax",expirationDate:1713543600,hostOnly:false,session:false}];let c=this.formatCookie(l,"json");s.text(e,c),a.saveConfig();}),s.on(o,["input","propertychange"],()=>{a.saveConfig();}),r.exportType==="header_string"?n.click():r.exportType==="json"&&i.click(),s.val(o,r.encodePwd);},showImportDialog(){let t=S.confirm({title:{text:"导入 Cookie",position:"center"},content:{text:`
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
					`,html:true},width:window.innerWidth<400?"88vw":"400px",height:"auto",btn:{ok:{text:"导入",async callback(f){try{const u=h.decodePwd;let m=h.value;u.trim()===""||(m=te.decrypt(m,u));const p=_.toJSON(m);if(Array.isArray(p)){R.info(`使用${L.cookieManagerApiName}导入cookie数据`);for(const b of p)await L.updateCookie(b);}else if(typeof p=="object"&&Object.keys(p).length&&Array.isArray(p.data)){const b=new Se(p.api);R.info(`使用${b.cookieManagerApiName}导入cookie数据`);for(const y of p.data)await b.updateCookie(y);}else if(typeof p=="object"&&!Object.keys(p).length){let b=new _.GM_Cookie;R.info(`使用${L.cookieManagerApiName}导入cookie数据`);let y=b.parseCookie(m);for(const g of y)await L.updateCookie({name:g.key,value:g.value,domain:window.location.hostname,path:"/",sameSite:"unspecified",secure:!1,session:!1,hostOnly:!0,httpOnly:!1});}else {R.error(m,p),w.error("cookie格式不符合");return}f.close();}catch(u){w.error(u.toString());}}}},style:`
					${S.config.cssText.panelCSS}

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
        `}),e="";const n=t.$shadowRoot.querySelector("#import-cookie-import_from_text"),i=t.$shadowRoot.querySelector("#import-cookie-import_from_file");t.$shadowRoot.querySelector(".import-cookie-value-container");const o=t.$shadowRoot.querySelector(".import-cookie-value-text"),a=o.querySelector("textarea"),r=t.$shadowRoot.querySelector(".import-cookie-value-file"),l=r.querySelector("input"),c=t.$shadowRoot.querySelector("#decode-pwd"),d={key:"cookie-backup-import-dialog-config",getConfig(){let f=D.getValue(this.key,{importType:"import_from_text",decodePwd:"",value:""});return f.importType==="import_from_text"?f.value=a.value:f.importType==="import_from_file"&&(f.value=e),f},saveConfig(){let f="import_from_text";i.checked&&(f="import_from_file"),D.setValue(this.key,{importType:f,decodePwd:s.val(c)}),h=this.getConfig();}};let h=d.getConfig();s.on(n,"input",()=>{d.saveConfig(),l.value="",e="",s.hide(r,false),s.show(o,false);}),s.on(i,"input",()=>{d.saveConfig(),a.value="",s.hide(o,false),s.show(r,false);}),s.on(a,["input","propertychange"],_.debounce(()=>{d.saveConfig();})),s.on(l,["change","input"],()=>{const f=l.files?.[0];if(f){const u=new FileReader;u.onload=function(m){const p=m.target.result;typeof p=="string"&&(e=p,d.saveConfig());},u.readAsText(f);}}),s.on(c,["input","propertychange"],async()=>{d.saveConfig();}),h.importType==="import_from_text"?n.click():h.importType==="import_from_file"&&i.click(),s.val(c,h.decodePwd);}},xe=function(t,e,n,i,o,a,r,l,c,d){const h={text:t,type:"button",attributes:{},props:{},description:e,buttonIcon:i,buttonIsRightIcon:o,buttonIconIsLoading:a,buttonType:r,buttonText:n,callback(f){typeof l=="function"&&l(f);},afterAddToUListCallBack:c};return Reflect.set(h.attributes,Ce,()=>{h.disable=false;}),h},ye=function(t,e,n,i,o,a="",r="text",l,c){const d={text:t,type:"input",inputType:r,attributes:{},props:{},description:i,placeholder:a,afterAddToUListCallBack:l,getValue(){return this.props[N].get(e,n)},callback(h,f){h.target.validity.valid,this.props[N].set(e,f);}};return Reflect.set(d.attributes,Y,e),Reflect.set(d.attributes,Z,n),fe.initComponentsStorageApi("input",d,{get(h,f){return D.getValue(h,f)},set(h,f){D.setValue(h,f);}}),d},We=function(t,e,n,i,o,a){const r={type:"own",attributes:{},props:{},createLIElement:t,afterAddToUListCallBack:a};return Reflect.set(r.attributes,Ce,()=>false),r},W=function(t,e,n,i,o,a,r,l,c){const d={text:t,type:"switch",description:o,disabled:r,attributes:{},props:{},getValue(){return this.props[N].get(e,n)},callback(h,f){const u=!!f;if(R.success(`${u?"开启":"关闭"} ${t}`),typeof i=="function"&&i(h,u))return;this.props[N].set(e,u);},afterAddToUListCallBack:(...h)=>{a?.(...h);}};return Reflect.set(d.attributes,Y,e),Reflect.set(d.attributes,Z,n),fe.initComponentsStorageApi("switch",d,{get(h,f){return D.getValue(h,f)},set(h,f){D.setValue(h,f);}}),d},Je=function(t,e,n,i,o,a="",r,l){const c={text:t,type:"textarea",attributes:{},props:{},description:i,placeholder:a,disabled:r,getValue(){const h=this.props[N].get(e,n);return Array.isArray(h)?h.join(`
`):h},callback(d,h){this.props[N].set(e,h);}};return Reflect.set(c.attributes,Y,e),Reflect.set(c.attributes,Z,n),fe.initComponentsStorageApi("switch",c,{get(d,h){return D.getValue(d,h)},set(d,h){D.setValue(d,h);}}),c},fe={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new J.Dictionary),this.__storeApiFn}},getStorageApi(t){if(this.hasStorageApi(t))return this.$data.storeApiValue.get(t)},hasStorageApi(t){return this.$data.storeApiValue.has(t)},setStorageApi(t,e){this.$data.storeApiValue.set(t,e);},initComponentsStorageApi(t,e,n){let i;this.hasStorageApi(t)?i=this.getStorageApi(t):i=n,this.setComponentsStorageApiProperty(e,i);},setComponentsStorageApiProperty(t,e){Reflect.set(t.props,N,e);}},ie=function(t,e,n,i,o,a,r){const l={text:t,type:"select",description:a,attributes:{},props:{},getValue(){return this.props[N].get(e,n)},callback(c){if(c==null)return;const d=c.value;if(R.info(`选择：${c.text}`),typeof o=="function"&&o(c))return;this.props[N].set(e,d),typeof r=="function"&&r(c);},data:i};return Reflect.set(l.attributes,Y,e),Reflect.set(l.attributes,Z,n),fe.initComponentsStorageApi("select",l,{get(c,d){return D.getValue(c,d)},set(c,d){D.setValue(c,d);}}),l},De={beforeEdit(t,e){const n=L.cookieManagerApiName;return n==="cookieStore"?typeof t.expires=="number"&&(t.expirationDate=t.expires):(n==="GM_cookie"||n==="GM.cookie")&&e&&typeof t.expirationDate=="number"&&(t.expirationDate=t.expirationDate*1e3),t},afterEdit(t){const e=L.cookieManagerApiName;return e==="document.cookie"?t.domain="":e==="cookieStore"?typeof t.expirationDate=="number"&&(t.expires=t.expirationDate):(e==="GM_cookie"||e==="GM.cookie")&&typeof t.expirationDate=="number"&&(t.expirationDate=Math.floor(t.expirationDate/1e3)),t}},re=(t,e,n,i)=>({text:t,type:"input",props:{},attributes:{},description:"",getValue(){return e()},callback(a,r){n(r);},placeholder:"",disabled:!!i}),Ye=(t,e,n,i)=>({text:t,type:"textarea",props:{},attributes:{},description:"",placeholder:"",getValue(){return e()},disabled:i,callback:function(a,r){n(r);}}),we=(t,e,n,i,o)=>({text:t,type:"select",description:"",attributes:{},props:{},getValue(){return n()},callback(r){const l=r.value;i(l);},data:typeof e=="function"?e():e,disabled:false,width:"100%"}),ke={init(){},showView(t,e){let n=!!t,i={name:"",value:"",domain:window.location.hostname,path:"/",secure:false,session:false,hostOnly:false,httpOnly:false,sameSite:"lax",expirationDate:Date.now()+3600*24*30*1e3},o=_.assign({},i,true);_.assign(o,t??{},true),o=De.beforeEdit(o,n);const r=S.confirm({title:{text:n?"编辑Cookie":"添加Cookie",position:"center"},content:{text:"",html:true},drag:true,btn:{position:"center",ok:{text:n?"编辑":"添加",async callback(g){const C=ke.validCookieInfo(o);if(!C.status){typeof C.msg=="string"&&w.error(C.msg);return}if(o.value=encodeURIComponent(o.value),o=De.afterEdit(o),n){const k=await L.updateCookie(o);k?w.error(k.toString()):(w.success("修改成功"),g.close());}else {const k=await L.addCookie(o);k?w.error(k.toString()):(w.success("添加成功"),g.close());}typeof e=="function"&&e(o);}},cancel:{text:"取消"}},mask:{enable:true},width:O.settingMiddle.width,height:"auto",style:`
      ${S.config.cssText.panelCSS}

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
      `}).$shadowRoot.querySelector(".pops-confirm-content"),l=S.config.PanelHandlerComponents(),c=l.createSectionContainerItem_input(re("name",()=>o.name,g=>o.name=g,n)).$el,d=l.createSectionContainerItem_textarea(Ye("value",()=>o.value,g=>o.value=g)).$el,h=l.createSectionContainerItem_input(re("domain",()=>o.domain,g=>o.domain=g)).$el,f=l.createSectionContainerItem_input(re("path",()=>o.path,g=>o.path=g)).$el;let u;if(o.session)u=l.createSectionContainerItem_input(re("expires",()=>"会话",()=>{},true)).$el;else {const g=We(()=>{const C=s.createElement("li",{innerHTML:`
							<div class="pops-panel-item-left-text">
								<p class="pops-panel-item-left-main-text">expires</p>
							</div>
							<div class="pops-panel-item-right-wrapper">
								<input type="datetime-local" id="cookie-item-property-expires">
							</div>
						`}),k=C.querySelector("#cookie-item-property-expires");return k.valueAsNumber=o.expirationDate,s.on(k,["change","input","propertychange"],V=>{s.preventEvent(V),o.expirationDate=k.valueAsNumber;}),C});u=l.createSectionContainerItem_own(g).$el;}const m=l.createSectionContainerItem_select(we("httpOnly",[{text:"true",value:true},{text:"false",value:false}],()=>o.httpOnly,g=>o.httpOnly=g)).$el,p=l.createSectionContainerItem_select(we("secure",[{text:"true",value:true},{text:"false",value:false}],()=>o.secure,g=>o.secure=g)).$el;let b=[{text:"no_restriction",value:"no_restriction"},{text:"lax",value:"lax"},{text:"strict",value:"strict"},{text:"unspecified",value:"unspecified"}];L.cookieManagerApiName==="cookieStore"&&(b=[{text:"lax",value:"lax"},{text:"strict",value:"strict"},{text:"none",value:"none"}]);const y=l.createSectionContainerItem_select(we("sameSite",b,()=>o.sameSite,g=>o.sameSite=g)).$el;s.append(r,[c,d]),L.cookieManagerApiName==="GM_cookie"||L.cookieManagerApiName==="GM.cookie"?s.append(r,[h,f,u,m,p,y]):L.cookieManagerApiName==="cookieStore"&&s.append(r,[h,f,u,y]);},validCookieInfo(t){return t.name==null||t.name==""?{status:false,msg:"name不能为空"}:t.domain==null||t.domain==""?{status:false,msg:"domain不能为空"}:t.path==null||t.path==""?{status:false,msg:"path不能为空"}:{status:true}}};class Ze{option;constructor(e){this.option=e;}async showView(){const e=S.confirm({title:{text:this.option.title,position:"center"},content:{text:`
        <form class="rule-form-container" onsubmit="return false">
            <ul class="rule-form-ulist"></ul>
            <input type="submit" style="display: none;" />
        </form>
        `,html:true},btn:_.assign({ok:{callback:async()=>{await a();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
      ${S.config.cssText.panelCSS}
      
      .rule-form-container {
          
      }
      .rule-form-container li{
          display: flex;
          align-items: center;
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
      `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),n=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");const i=e.$shadowRoot.querySelector(".rule-form-ulist"),o=await this.option.getView(await this.option.data());s.append(i,o);const a=async()=>{(await this.option.onsubmit(n,await this.option.data())).success&&(e.close(),typeof this.option.dialogCloseCallBack=="function"&&await this.option.dialogCloseCallBack(true));};return e}}class Qe{option;constructor(e){this.option=e;}async showView(e){const n=S.confirm({title:{text:this.option.title,position:"center"},content:{text:`
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
      `,btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async()=>{this.showEditView(false,await this.option.getAddData(),n.$shadowRoot);}},close:{enable:true,callback(){n.close();}},cancel:{enable:false},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:()=>{const l=S.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async()=>{if(R.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){w.error("清理失败");return}else w.success("清理成功");await this.updateDeleteAllBtnText(n.$shadowRoot),this.clearContent(n.$shadowRoot),l.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh"}),{$searchContainer:i,$externalSelect:o,$ruleValueSelect:a,$searchInput:r}=this.parseViewElement(n.$shadowRoot);if(this.option.bottomControls?.filter?.enable){let l=null,c=null;Array.isArray(this.option.bottomControls?.filter?.option)&&s.append(o,this.option.bottomControls?.filter?.option.map(f=>{const u=s.createElement("option",{innerText:f.name});return Reflect.set(u,"data-value",f),u})),Array.isArray(this.option.bottomControls?.filter?.inputOption)&&s.append(a,this.option.bottomControls?.filter?.inputOption.map(f=>{const u=s.createElement("option",{innerText:f.name});return Reflect.set(u,"data-value",f),u})),s.on(o,"change",async()=>{const f=o[o.selectedIndex],u=Reflect.get(f,"data-value");typeof u?.selectedCallBack=="function"&&u.selectedCallBack(u),l=u,await h(false);}),s.on(a,"change",async()=>{const f=a[a.selectedIndex],u=Reflect.get(f,"data-value");typeof u?.selectedCallBack=="function"&&u.selectedCallBack(u),c=u,await h(false);}),s.onInput(r,_.debounce(async()=>{await h(false);}));const d=()=>{const f=o[o.selectedIndex];l=Reflect.get(f,"data-value");const u=a[a.selectedIndex];c=Reflect.get(u,"data-value");},h=async f=>{this.clearContent(n.$shadowRoot),f&&d();const u=await this.option.data(),m=[],p=s.val(r);for(let b=0;b<u.length;b++){const y=u[b];if(typeof e=="function"){const g=await e(y);if(typeof g=="boolean"&&!g)continue}if(l){const g=await l?.filterCallBack?.(y);if(typeof g=="boolean"&&!g)continue}if(c){let g=true;if(p===""?g=true:g=false,g||(g=await c?.filterCallBack?.(y,p)),!g)continue}m.push(y);}await this.appendRuleItemElement(n.$shadowRoot,m);};if(typeof e=="object"&&e!=null){let f;typeof e.external=="number"?f=e.external:f=Array.from(o.options).findIndex(m=>Reflect.get(m,"data-value").value===e.external),f!==-1&&(o.selectedIndex=f);let u;typeof e.rule=="number"?u=e.rule:u=Array.from(a.options).findIndex(m=>Reflect.get(m,"data-value").value===e.rule),u!==-1&&(a.selectedIndex=u);}await h(true);}else s.hide(i,false);}showEditView(e,n,i,o,a,r){let l=async d=>{if(d){if(typeof r=="function"){let h=await this.option.getData(n);r(h);}}else if(e||await this.option.deleteData(n),typeof a=="function"){let h=await this.option.getData(n);a(h);}};new Ze({title:e?"编辑":"添加",data:()=>n,dialogCloseCallBack:l,getView:async d=>await this.option.itemControls.edit.getView(d,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async d=>{d.close(),await l(false);}},close:{callback:async d=>{d.close(),await l(false);}}},onsubmit:async(d,h)=>{let f=await this.option.itemControls.edit.onsubmit(d,e,h);return f.success?e?(w.success("修改成功"),i&&await this.updateRuleItemElement(f.data,o,i)):i&&await this.appendRuleItemElement(i,f.data):e&&R.error("修改失败"),f},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(e){const n=e.querySelector(".rule-view-container"),i=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other"),o=e.querySelector(".rule-view-search-container"),a=o.querySelector(".pops-panel-select .select-rule-status"),r=o.querySelector(".pops-panel-select .select-rule-value"),l=o.querySelector(".pops-panel-input input");return {$container:n,$deleteBtn:i,$searchContainer:o,$externalSelect:a,$ruleValueSelect:r,$searchInput:l}}parseRuleItemElement(e){const n=e.querySelector(".rule-controls-enable"),i=n.querySelector(".pops-panel-switch"),o=n.querySelector(".pops-panel-switch__input"),a=n.querySelector(".pops-panel-switch__core"),r=e.querySelector(".rule-controls-edit"),l=e.querySelector(".rule-controls-delete");return {$enable:n,$enableSwitch:i,$enableSwitchInput:o,$enableSwitchCore:a,$edit:r,$delete:l,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,n){const i=await this.option.getDataItemName(e),o=s.createElement("div",{className:"rule-item",innerHTML:`
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
					${S.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${S.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(o,"data-rule",e);const a="pops-panel-switch-is-checked",{$enable:r,$enableSwitch:l,$enableSwitchCore:c,$enableSwitchInput:d,$delete:h,$edit:f}=this.parseRuleItemElement(o);return this.option.itemControls.enable.enable?(s.on(c,"click",async()=>{let u=false;l.classList.contains(a)?(l.classList.remove(a),u=false):(l.classList.add(a),u=true),d.checked=u,await this.option.itemControls.enable.callback(e,u);}),await this.option.itemControls.enable.getEnable(e)&&l.classList.add(a)):r.remove(),this.option.itemControls.edit.enable?s.on(f,"click",u=>{s.preventEvent(u),this.showEditView(true,e,n,o,m=>{e=null,e=m;});}):f.remove(),this.option.itemControls.delete.enable?s.on(h,"click",u=>{s.preventEvent(u);const m=S.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async()=>{R.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(w.success("成功删除该数据"),o.remove(),await this.updateDeleteAllBtnText(n),m.close()):w.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):h.remove(),o}async appendRuleItemElement(e,n){const{$container:i}=this.parseViewElement(e),o=[],a=Array.isArray(n)?n:[n];for(let r=0;r<a.length;r++){const l=a[r],c=await this.createRuleItemElement(l,e);o.push(c);}return s.append(i,o),await this.updateDeleteAllBtnText(e),o}async updateRuleContaienrElement(e){this.clearContent(e);const n=await this.option.data();await this.appendRuleItemElement(e,n),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,n,i){const o=await this.createRuleItemElement(e,i);n.after(o),n.remove();}clearContent(e){const{$container:n}=this.parseViewElement(e);s.html(n,"");}setDeleteBtnText(e,n,i=false){const{$deleteBtn:o}=this.parseViewElement(e);i?s.html(o,n):s.text(o,n);}async updateDeleteAllBtnText(e){let n=await this.option.data();this.setDeleteBtnText(e,`清空所有(${n.length})`);}}const H={$key:{STORAGE_KEY:"cookie-rule"},$data:{matchedRuleList:[]},init(){this.$data.matchedRuleList.length=0,this.$data.matchedRuleList=this.getMatchedRuleList(),this.$data.matchedRuleList.length&&_e.add({key:"matched-cookie-rule-list",text:`${window.location.hostname} ${this.$data.matchedRuleList.length}条规则`,isStoreValue:false,autoReload:false,showText(t){return t},callback(){console.log(H.$data.matchedRuleList),alert(`以下是命中的规则名：
`+H.$data.matchedRuleList.map(t=>t.name).join(`
`));}});},getMatchedRuleList(t=window.location.href){const e=this.getData(),n=[];return e.forEach(i=>{if(!i.enable)return;let o=window.location.href,a=i.data.url;if(i.data.enableRegExpToMatchUrl){if(!new RegExp(a,"i").test(o))return}else if(!o.includes(a))return;n.push(i);}),n},showView(){let t=S.config.PanelHandlerComponents();function e(o,a){return {get(r,l){return Reflect.get(o,r)??l},set(r,l){Reflect.set(o,r,l);}}}const n=this.getMatchedRuleList();new Qe({title:"Cookie规则",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:o=>o.name,updateData:o=>this.updateData(o),deleteData:o=>this.deleteData(o),getData:o=>this.getData().find(l=>l.uuid===o.uuid)??o,itemControls:{enable:{enable:true,getEnable(o){return o.enable},callback:(o,a)=>{o.enable=a,this.updateData(o);}},edit:{enable:true,getView:(o,a)=>{const r=document.createDocumentFragment(),l=this.getTemplateData();a||(o=l);const c=W("启用","enable",l.enable);Reflect.set(c.props,N,e(o));const d=t.createSectionContainerItem_switch(c).$el,h=ye("规则名称","name","",l.name,void 0,"必填");Reflect.set(h.props,N,e(o));const f=t.createSectionContainerItem_input(h).$el,u=ie("Cookie管理Api","execApiName",l.data.execApiName,[{text:"（当前）"+L.cookieManagerApiName,value:"use-global"},...$e.map(T=>({text:T,value:T}))],void 0,"操作Cookie的Api函数");Reflect.set(u.props,N,e(o.data));const m=t.createSectionContainerItem_select(u).$el,p=ye("网址","url",l.data.url,"用于执行该规则的网址",void 0,"必填");Reflect.set(p.props,N,e(o.data));const b=t.createSectionContainerItem_input(p).$el,y=W("启用正则匹配网址","enableRegExpToMatchUrl",l.data.enableRegExpToMatchUrl);Reflect.set(y.props,N,e(o.data));const g=t.createSectionContainerItem_switch(y).$el,C=ye("Cookie名称","cookieName",l.data.cookieName,"用于匹配执行操作的Cookie名",void 0,"必填");Reflect.set(C.props,N,e(o.data));const k=t.createSectionContainerItem_input(C).$el,V=W("启用正则匹配Cookie名称","enableRegExpToMatchCookieName",l.data.enableRegExpToMatchCookieName);Reflect.set(V.props,N,e(o.data));const x=t.createSectionContainerItem_switch(V).$el,v=ie("操作模式","operationMode",l.data.operationMode,[{value:"delete",text:"删除Cookie"},{value:"extended",text:"自动延长Cookie有效期30天"},{value:"extended-90",text:"自动延长Cookie有效期90天"},{value:"extended-180",text:"自动延长Cookie有效期180天"},{value:"extended-360",text:"自动延长Cookie有效期360天"}]);Reflect.set(v.props,N,e(o.data));const E=t.createSectionContainerItem_select(v).$el,A=Je("备注","remark",l.data.remark);Reflect.set(A.props,N,e(o.data));const $=t.createSectionContainerItem_textarea(A).$el;return r.append(d,f,m,b,g,k,x,E,$),r},onsubmit:(o,a,r)=>{const l=o.querySelectorAll(".rule-form-ulist > li"),c=this.getTemplateData();a&&(c.uuid=r.uuid);try{return l.forEach(d=>{const h=Reflect.get(d,t.$data.nodeStoreConfigKey),f=Reflect.get(h,"attributes"),u=Reflect.get(d,N),m=Reflect.get(f,Y),p=Reflect.get(f,Z),b=u.get(m,p);Reflect.has(c,m)?Reflect.set(c,m,b):Reflect.has(c.data,m)?Reflect.set(c.data,m,b):R.error(`${m}不在数据中`);}),c.name.trim()===""?(w.error("规则名称不能为空"),{success:!1,data:c}):c.data.url.trim()===""?(w.error("网址不能为空"),{success:!1,data:c}):c.data.cookieName.trim()===""?(w.error("Cookie名称不能为空"),{success:!1,data:c}):a?{success:this.updateData(c),data:c}:{success:this.addData(c),data:c}}catch(d){return R.error(d),{success:false,data:c}}finally{this.init();}},style:`
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
          `},delete:{enable:true,deleteCallBack:o=>this.deleteData(o)}},bottomControls:{filter:{enable:true,option:[{name:"启用",value:"enable",filterCallBack(o){return o.enable}},{name:"未启用",value:"notEnable",filterCallBack(o){return !o.enable}},{name:"当前网站执行",value:"currentSite",filterCallBack(o){return n.some(a=>a.uuid===o.uuid)}}],inputOption:[{name:"规则名称",value:"url",filterCallBack(o,a){return !!o.name.match(a)}},{name:"网址",value:"url",filterCallBack(o,a){return !!o.data.url.match(a)}},{name:"Cookie名称",value:"cookieName",filterCallBack(o,a){return !!o.data.cookieName.match(a)}},{name:"备注",value:"remark",filterCallBack(o,a){return !!o.data.remark.match(a)}}]}}}).showView();},getTemplateData(){return {uuid:_.generateUUID(),enable:true,name:"",data:{url:"",execApiName:"use-global",enableRegExpToMatchUrl:false,cookieName:"",enableRegExpToMatchCookieName:false,operationMode:"delete",remark:""}}},getData(){return oe(this.$key.STORAGE_KEY,[])},setData(t){ne(this.$key.STORAGE_KEY,t);},addData(t){const e=this.getData();return e.findIndex(i=>i.uuid==t.uuid)===-1?(e.push(t),ne(this.$key.STORAGE_KEY,e),true):false},updateData(t){const e=this.getData(),n=e.findIndex(o=>o.uuid==t.uuid);let i=false;return n!==-1&&(i=true,e[n]=t),this.setData(e),i},deleteData(t){const e=this.getData(),n=e.findIndex(o=>o.uuid==t.uuid);let i=false;return n!==-1&&(i=true,e.splice(n,1)),this.setData(e),i},clearData(){se(this.$key.STORAGE_KEY);},exportRule(t="rule.json"){const e=this.getData(),n=new Blob([JSON.stringify(e,null,4)]),i=window.URL.createObjectURL(n),o=s.createElement("a");o.href=i,o.download=t,o.click(),setTimeout(()=>{window.URL.revokeObjectURL(i);},1500);},importRule(){const t=S.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
                    <div class="import-mode" data-mode="local">本地导入</div>
                    <div class="import-mode" data-mode="network">网络导入</div>
                `,html:true},width:O.info.width,height:O.info.height,style:`
                .import-mode{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),e=t.$shadowRoot.querySelector(".import-mode[data-mode='local']"),n=t.$shadowRoot.querySelector(".import-mode[data-mode='network']");s.on(e,"click",i=>{s.preventEvent(i),t.close();const o=s.createElement("input",{type:"file",accept:".json"});s.on(o,["propertychange","input"],()=>{if(!o.files?.length)return;const a=o.files[0],r=new FileReader;r.onload=()=>{const l=_.toJSON(r.result);if(!Array.isArray(l)){R.error("不是正确的规则文件",l),w.error("不是正确的规则文件");return}this.setData(l),w.success(`成功导入 ${l.length}条规则`);},r.readAsText(a,"UTF-8");}),o.click();}),s.on(n,"click",i=>{s.preventEvent(i),t.close(),S.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"url",focus:true},btn:{ok:{callback:async o=>{const a=o.text;if(_.isNull(a)){w.error("请填入完整的url");return}const r=await de.get(a);if(!r.status)return;const l=_.toJSON(r.data.responseText);if(!Array.isArray(l)){R.error("不是正确的规则文件",r,l),w.error("不是正确的规则文件");return}this.setData(l),o.close(),w.success(`成功导入 ${l.length}条规则`);}}},width:O.info.width,height:"auto"});});}},ve={$data:{cookieList:[]},init(){this.registerMenu();},async showView(){const t=S.alert({title:{text:"Cookie编辑器",html:false,position:"center"},content:{text:`
        <div class="cookie-wrapper">
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
            <div class="cookie-list-wrapper">
            </div>
        </div>`,html:true},btn:{ok:{enable:false}},mask:{enable:true},drag:true,width:O.setting.width,height:O.setting.height,style:`
      ${S.config.cssText.panelCSS}
      .cookie-wrapper{
          display: flex;
          flex-direction: column;
          padding: 10px;
          gap: 10px;
      }
      .cookie-control-wrapper{
          display: flex;
          flex-wrap: wrap;
          padding: 0px 10px;
          gap: 5px;
          --button-margin-left: 0px;
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
          align-items: center;
      }
      .cookie-item-group-left{
          width: 100px;
          min-width: 100px;
          max-width: 100px;
          text-transform: capitalize
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
      `}),e=t.$shadowRoot.querySelector(".cookie-search-inner input"),n=t.$shadowRoot.querySelector(".cookie-search-setting"),i=t.$shadowRoot.querySelector(".cookie-control-refresh"),o=t.$shadowRoot.querySelector(".cookie-control-add"),a=t.$shadowRoot.querySelector(".cookie-control-export"),r=t.$shadowRoot.querySelector(".cookie-control-import"),l=t.$shadowRoot.querySelector(".cookie-control-clear-all"),c=t.$shadowRoot.querySelector(".cookie-control-rule-manager"),d=t.$shadowRoot.querySelector(".cookie-setting"),h=t.$shadowRoot.querySelector(".cookie-list-wrapper"),f=p=>{const b=s.createElement("div",{className:"cookie-item",innerHTML:`
                `,"data-cookie-info":p}),y=[{leftText:"name",rightText:p.name},{leftText:"value",rightText:D.getValue("decode-cookie-value")?decodeURIComponent(p.value):encodeURIComponent(p.value)}];L.cookieManagerApiName==="GM_cookie"||L.cookieManagerApiName==="GM.cookie"?(p=p,y.push({leftText:"domain",rightText:p.domain},{leftText:"path",rightText:p.path},{leftText:"session",rightText:JSON.stringify(p.session)},{leftText:"expires",rightText:p.session?"会话":p.expirationDate?new Date(p.expirationDate*1e3).toISOString():"未知"},{leftText:"httpOnly",rightText:JSON.stringify(p.httpOnly)},{leftText:"hostOnly",rightText:JSON.stringify(p.hostOnly)},{leftText:"secure",rightText:JSON.stringify(p.secure)},{leftText:"sameSite",rightText:p.sameSite})):L.cookieManagerApiName==="cookieStore"&&(p=p,y.push({leftText:"domain",rightText:p.domain},{leftText:"path",rightText:p.path},{leftText:"expires",rightText:p.expires?new Date(p.expires).toISOString():"会话"},{leftText:"secure",rightText:JSON.stringify(p.secure)},{leftText:"sameSite",rightText:p.sameSite})),y.forEach(x=>{const v=s.createElement("div",{className:"cookie-item-group",innerHTML:`
                        <div class="cookie-item-group-left">
                            <p>${x.leftText}</p>
                        </div>
                        <div class="cookie-item-group-right">
                            <p>${x.rightText}</p>
                        </div>
                    `});s.append(b,v);});const g=s.createElement("div",{className:"cookie-item-group cookie-item-group-control",innerHTML:`
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
              ${S.config.iconSVG.delete}
          </div>
        </div>`}),C=g.querySelector(".cookie-item-group-control-copy"),k=g.querySelector(".cookie-item-group-control-edit"),V=g.querySelector(".cookie-item-group-control-delete");return s.on(C,"click",x=>{s.preventEvent(x);const v=p.value;_.copy(v).then(E=>{E?w.success("复制成功"):w.error("复制失败");});}),s.on(k,"click",x=>{s.preventEvent(x),ke.showView(p,v=>{const E=f(v);s.after(b,E),b.parentElement?.removeChild(b);});}),s.on(V,"click",x=>{s.preventEvent(x),confirm("确定删除该Cookie？")&&L.deleteCookie(p).then(E=>{E?(R.error(E),w.error("删除失败")):(w.success("删除成功"),b.parentElement?.removeChild(b));});}),s.append(b,[g]),b},u=async p=>{const b=await L.queryAllCookie();s.empty(h);const y=document.createDocumentFragment(),g=D.getValue("exclude-session-cookie");b.forEach(C=>{if(g&&(C.session||L.cookieManagerApiName==="cookieStore"&&C.expires==null)||typeof p=="function"&&!p(C))return;const k=f(C);y.appendChild(k);}),this.$data.cookieList=b,h.appendChild(y);};s.on(e,["input","propertychange"],_.debounce(async p=>{const b=s.val(e),y=b.trim()==="",g=D.getValue("search-config-use-regexp");await u(k=>y?true:g?!!k.name.match(new RegExp(b)):k.name.includes(b)),p.from==="refreshButton"&&w.success("刷新成功");})),s.onKeyboard(e,"keypress",(p,b,y)=>{p==="Enter"&&y.length===0&&m();}),s.on(n,"click",p=>{s.preventEvent(p);const y=S.alert({title:{text:"搜索配置",position:"center"},content:{text:"",html:true},btn:{ok:{enable:false}},drag:true,mask:{clickEvent:{toClose:true}},width:O.info.width,height:O.info.height,style:`
        ${S.config.cssText.panelCSS}

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
        `}).$shadowRoot.querySelector(".pops-alert-content"),C=S.config.PanelHandlerComponents().createSectionContainerItem_switch(W("启用正则表达式","search-config-use-regexp",false,void 0,"使用正则表达式搜索Cookie名称",()=>{m();})).$el;s.append(y,C);}),s.on(i,"click",p=>{s.preventEvent(p),m("refreshButton");}),s.on(o,"click",p=>{s.preventEvent(p),ke.showView(void 0,b=>{m();});}),s.on(a,"click",async p=>{s.preventEvent(p),te.showExportDialog();}),s.on(r,"click",async p=>{s.preventEvent(p),te.showImportDialog();}),s.on(l,"click",async p=>{if(s.preventEvent(p),!window.confirm("确定清除全部Cookie？"))return;const y=await L.deleteAllCookie();y.error?w.warning(`清除成功：${y.success} 失败：${y.error}`):w.success("清除成功"),m();}),s.on(c,"click",p=>{s.preventEvent(p),H.showView();}),s.on(d,"click",p=>{s.preventEvent(p);const y=S.alert({title:{text:"设置",position:"center"},content:{text:"",html:true},btn:{ok:{enable:false}},drag:true,mask:{clickEvent:{toClose:true}},width:O.settingMiddle.width,height:O.settingMiddle.height,style:`
        ${S.config.cssText.panelCSS}

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
        }`}).$shadowRoot.querySelector(".pops-alert-content"),g=S.config.PanelHandlerComponents(),C=g.createSectionContainerItem_select(ie("CookieManager Api","cookie-manager-api","document.cookie",$e.map(x=>({text:x,value:x})),void 0,"操作Cookie的Api函数",()=>{m();})).$el,k=g.createSectionContainerItem_switch(W("解码Cookie值","decode-cookie-value",false,()=>{m();},"对Cookie值进行解码")).$el,V=g.createSectionContainerItem_switch(W("排除Session Cookie","exclude-session-cookie",false,()=>{m();},"过滤掉浏览器会话Cookie")).$el;s.append(y,[C,k,V]);});const m=p=>{s.emit(e,"input",{from:p});};m();},registerMenu(){_e.add({key:"cookie_manager_view",text:"⚙ Cookie管理",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{this.showView();}});}},Xe={init(){this.execController(),s.onReady(()=>{this.execController();});},async execController(){for(let t=0;t<H.$data.matchedRuleList.length;t++){const e=H.$data.matchedRuleList[t],n=e.data.operationMode;R.success(`执行规则：${e.name}`);let i=e.data.execApiName;i==="use-global"&&(i=void 0);const o=new Se(i),a=await o.queryAllCookie();for(let r=0;r<a.length;r++){let l=a[r];const c=l.name,d=e.data.cookieName;let h=false;if(e.data.enableRegExpToMatchCookieName?new RegExp(d,"i").test(c)&&(h=true):c.includes(d)&&(h=true),h){if(n==="delete")o.deleteCookie(l);else if(n.startsWith("extended")){let f=Date.now(),u=720*60*60*1e3,m=u*3,p=u*6,b=u*12,y=u;n==="extended-90"?y=m:n==="extended-180"?y=p:n==="extended-360"&&(y=b);let g=false;if(o.cookieManagerApiName==="document.cookie")l.expirationDate=f+y,g=true;else if(o.cookieManagerApiName==="cookieStore"){let C=l.expires;typeof C=="number"&&C-f<y&&(l.expires=C+y,g=true);}else if(o.cookieManagerApiName==="GM_cookie"||o.cookieManagerApiName==="GM.cookie"){let C=l.expirationDate;typeof C=="number"&&C*1e3-f<y&&(l.expirationDate=C+y/1e3,g=true);}else R.error("未知的cookieManagerApiName",o.cookieManagerApiName);g&&await o.updateCookie(l);}}}}}},et={id:"view-rule",title:"规则",headerTitle:"Cookie操作规则",views:[{type:"container",text:"",views:[xe("自定义规则","操作Cookie的规则","管理",void 0,false,false,"default",()=>{H.showView();})]},{type:"container",text:"",views:[xe("数据导入","导入自定义规则数据","导入",void 0,false,false,"primary",()=>{H.importRule();}),xe("数据导出","导出自定义规则数据","导出",void 0,false,false,"primary",()=>{H.exportRule("CookieManagerRule.json");})]}]},tt={id:"view-general",title:"通用",views:[{text:"Toast配置",type:"container",views:[ie("Toast位置",B.qmsg_config_position.key,B.qmsg_config_position.defaultValue,[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],t=>{R.info("设置当前Qmsg弹出位置"+t.text);},"Toast显示在页面九宫格的位置"),ie("最多显示的数量",B.qmsg_config_maxnums.key,B.qmsg_config_maxnums.defaultValue,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),W("逆序弹出",B.qmsg_config_showreverse.key,B.qmsg_config_showreverse.defaultValue,void 0,"修改Toast弹出的顺序")]}]};pe.addContentConfig([tt,et]);D.init();ve.init();H.init();Xe.init();

})(Qmsg, DOMUtils, pops, Utils, CryptoJS);