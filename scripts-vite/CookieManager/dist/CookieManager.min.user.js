// ==UserScript==
// @name         CookieManager
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.12.19
// @author       WhiteSevs
// @description  简单而强大的Cookie编辑器，允许您快速创建、编辑和删除Cookie
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA/NJREFUeF7tWm1u4jAQjVHusfR3jMQNlp5ky0l2e5K2Jym9ARLO79JzEMgyKF5FqeN5YzuwQPoHqRl/zPObN5NxVHbnf+rO/c9GAEYG3DkCYwjcOQFGETxbCGitF1mWLeq6/qGUmtZ1PW1+t0qpN2PMn0uwcTAA5vP5tKqqp8bhJ8C5R2PMCrBLajIIAFprOs3fkp0eGfFaluVSMiaFbVIAQhy3Tlw1AA3dXyjGQ0/lagFoxO091PGrZkAq5wmEq2NASuevDgCB889HXVjleb6tqmraaASbHeq6ptpgm+f5cr1eb2PDyzdenAUawfsENuXM60VRvBydQ+oCWmJljHkE1go2EQOgtSbB86q9L54FAJIubMuyfAj2DhgoAmA2m1FlR+nO+6eUWm42m9c+IwREO9YYI9ojt7fuc9HkRVF8Uv0OLPLsq+0F82T/DQDCKs8bu1rrGgDxZELh5LKdTCYfPpah88MMkGy6WdwpghL6A054mQaMx/oBaOy3F2xS2ZtNg/SsqqqocrnrUAqRhBggTF0I8MlsYjUCAiCA/skc5CYaHACO/rZq42oDzpHQ55RyXWNRgWQZ0Ef/xvFlu4sjzBShPkPjXPtzDQwGIM/zB1edzjEG2n06I7aUZgFwpS3u1dVX6LSyg83zv8DiKgSWeABczkSUut82ZJun0h4iggaSJhEGuKq20FLXWRylaKm5ABkMAN/Efb0CbjNDCSiXJlkGeOL5GwuYk/TG4xDiyYFOrGEB8NXuVtCoe0M3Pb445jbDVZs0/rRhpegX7T4nEUFJB8erTX3iyTVJulkHFU4uW6EMEN/y9KFgGdPuFQAC2HuK3JtlKgCIbtF9f8ebom12euncV3DRfFxzlkvXEAM4eiL5OMbGp+Lc3rgMAAHQIM02QmOcZMb23hr7AEDoLwEgeRgIAOstuny1A0J/GACOagJnxKYu4UTiH6E/DAAZpipUQvsHRGlqhDb1Bm3Jd8ME9wrZQsgeGbFgt9u9h765nbN/gJ6+iAGxLDhX/wCNfXuwMANoAFC0OGOcU2TJRQkjImzp2x0vAsCCIA0F7lS4ig5RTu5do28OMQAtJiA3xHbd0P4B4ru1CfrKLAgAqR6E9A8knmdZFuS8WAS7mxI2MaT9AxSDYOejAZBqgqR/wHmPtr25eYJDoD1xbI3AbbL7PFTwXOskAaAljPQBxWBt7r6yWApg2z4ZAO2Kkb4RTtnmHsLxoEJIgjSFxX6/XxwOh5+Cj6L+LdF6Z/gY8kvy5AxwgdQG46S8nc/lm/9RY5U+j/uixid6uSk5lEE1IHYjlxp/FgZcyjlk3REABKVbthkZcMuni/g2MgBB6ZZt/gJwetZfo7objAAAAABJRU5ErkJggg==
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.9.10/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.8.0/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@3.1.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.6.1/dist/index.umd.min.js
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

(function (x, F, ue, W, me) {
	'use strict';

	var ge=typeof GM<"u"?GM:void 0,Ie=typeof GM_cookie<"u"?GM_cookie:void 0,se=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,Ee=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,oe=typeof GM_getValue<"u"?GM_getValue:void 0,X=typeof GM_info<"u"?GM_info:void 0,ae=typeof GM_listValues<"u"?GM_listValues:void 0,Oe=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,ie=typeof GM_setValue<"u"?GM_setValue:void 0,Ae=typeof GM_setValues<"u"?GM_setValues:void 0,Ge=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Ue=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,z=typeof unsafeWindow<"u"?unsafeWindow:void 0,Fe=window;const ee={waitRemove(...t){t.forEach(e=>{typeof e=="string"&&F.waitNodeList(e).then(i=>{i.forEach(n=>n.remove());});});},createBlockCSSNode(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(i=>{Array.isArray(i)?e=e.concat(i):e.push(i);}),F.createElement("style",{type:"text/css",innerHTML:`${e.join(`,
`)}{display: none !important;}`})},addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(i=>{Array.isArray(i)?e=e.concat(i):e.push(i);}),Te(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){const e=typeof Ee=="function"?Ee(t.keyName):null;return typeof e=="string"&&e?Te(e):ee.loadStyleLink(t.url)},async loadStyleLink(t){let e=document.createElement("link");return e.rel="stylesheet",e.type="text/css",e.href=t,new Promise(i=>{F.onReady(()=>{document.head.appendChild(e),i(e);});})},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(i=>{e.onload=()=>{i(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.startsWith("data:")||t.match(/^http(s|):\/\//i)?t:t.startsWith("//")?(t.startsWith("///")||(t=window.location.protocol+t),t):(t.startsWith("/")||(t+="/"),t=window.location.origin+t,t)},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;try{let e=new URL(t);return e.protocol="https:",e.toString()}catch{return t}},lockScroll(...t){let e=document.createElement("style");e.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let i=[document.documentElement,document.body].concat(...t||[]);return i.forEach(n=>{n.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(e),{recovery(){i.forEach(n=>{n.classList.remove("pops-overflow-hidden-important");}),e.remove();}}},async getClipboardText(){function t(n){navigator.clipboard.readText().then(o=>{n(o);}).catch(o=>{R.error("读取剪贴板内容失败👉",o),n("");});}function e(n){navigator.permissions.query({name:"clipboard-read"}).then(o=>{t(n);}).catch(o=>{R.error("申请剪贴板权限失败，尝试直接读取👉",o.message??o.name??o.stack),t(n);});}function i(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(n=>{if(!i()){n("");return}document.hasFocus()?e(n):window.addEventListener("focus",()=>{e(n);},{once:true});})},escapeHtml(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(t,e,i=5e3){let n,o=i-e,l=e,a=async r=>{let c=await t(r);if(typeof c=="boolean"&&!c||r){$.workerClearTimeout(n);return}if(l+=e,l>o){a(true);return}n=$.workerSetTimeout(()=>{a(false);},e);};a(false);},findParentNode(t,e,i){if(i){let n=F.closest(t,i);if(n)return n.querySelector(e)}else return F.matches(t,e)?t:F.closest(t,e)},toStr(t){const e="__undefined__placeholder__replaced__str__";return JSON.stringify(t,(n,o)=>o===void 0?e:o,2).replace(new RegExp(`"${e}"`,"g"),"undefined")}},ce="GM_Panel",Ce="data-init",J="data-key",Y="data-default-value",Pe="data-init-more-value",ze="data-plugin-search-config",q="data-storage-api",Be={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{D.showPanel(pe.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){D.isTopWindow()&&_e.add(this.$data.menuOption);},addMenuOption(t){Array.isArray(t)||(t=[t]),this.$data.menuOption.push(...t);},updateMenuOption(t){Array.isArray(t)||(t=[t]),t.forEach(e=>{let i=this.$data.menuOption.findIndex(n=>n.key===e.key);i!==-1&&(this.$data.menuOption[i]=e);});},getMenuOption(t=0){return this.$data.menuOption[t]},deleteMenuOption(t=0){this.$data.menuOption.splice(t,1);}};class He{storageKey;listenerData;constructor(e){if(typeof e=="string"){const i=e.trim();if(i=="")throw new Error("key参数不能为空字符串");this.storageKey=i;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new W.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this);}getLocalValue(){let e=oe(this.storageKey);return e==null&&(e={},this.setLocalValue(e)),e}setLocalValue(e){ie(this.storageKey,e);}set(e,i){const n=this.get(e),o=this.getLocalValue();Reflect.set(o,e,i),this.setLocalValue(o),this.emitValueChangeListener(e,n,i);}get(e,i){const n=this.getLocalValue();return Reflect.get(n,e)??i}getAll(){return this.getLocalValue()}delete(e){const i=this.get(e),n=this.getLocalValue();Reflect.deleteProperty(n,e),this.setLocalValue(n),this.emitValueChangeListener(e,i,void 0);}has(e){const i=this.getLocalValue();return Reflect.has(i,e)}keys(){const e=this.getLocalValue();return Reflect.ownKeys(e)}values(){const e=this.getLocalValue();return Reflect.ownKeys(e).map(i=>Reflect.get(e,i))}clear(){se(this.storageKey);}addValueChangeListener(e,i){const n=Math.random(),o=this.listenerData.get(e)||[];return o.push({id:n,key:e,callback:i}),this.listenerData.set(e,o),n}removeValueChangeListener(e){let i=false;for(const[n,o]of this.listenerData.entries()){for(let l=0;l<o.length;l++){const a=o[l];(typeof e=="string"&&a.key===e||typeof e=="number"&&a.id===e)&&(o.splice(l,1),l--,i=true);}this.listenerData.set(n,o);}return i}async emitValueChangeListener(...e){const[i,n,o]=e;if(!this.listenerData.has(i))return;let l=this.listenerData.get(i);for(let a=0;a<l.length;a++){const r=l[a];if(typeof r.callback=="function"){let c=this.get(i),p,u;typeof n<"u"&&e.length>=2?u=n:u=c,typeof o<"u"&&e.length>2?p=o:p=c,await r.callback(i,u,p);}}}}const K=new He(ce),P={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},N={setting:{get width(){return P.width<550?"88vw":P.width<700?"550px":"700px"},get height(){return P.height<450?"70vh":P.height<550?"450px":"550px"}},settingMiddle:{get width(){return P.width<350?"88vw":"350px"},get height(){return P.height<450?"88vh":"450px"}},info:{get width(){return P.width<350?"88vw":"350px"},get height(){return P.height<250?"88vh":"250px"}}},D={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new $.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new $.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new $.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new $.Dictionary),this.__onceExecData},get scriptName(){return be},get panelConfig(){return this.__panelConfig},set panelConfig(t){this.__panelConfig=t;},key:ce,attributeKeyName:J,attributeDefaultValueName:Y},init(){this.initContentDefaultValue(),Be.init();},isTopWindow(){return z.top===z.self},initContentDefaultValue(){const t=n=>{if(!n.attributes||n.type==="button"||n.type==="container"||n.type==="deepMenu")return;const o=n.attributes;let l=o[Ce];if(typeof l=="function"){let p=l();if(typeof p=="boolean"&&!p)return}let a=new Map,r=o[J];if(r!=null){const p=o[Y];a.set(r,p);}let c=o[Pe];if(typeof c=="object"&&c&&Object.keys(c).forEach(p=>{const u=c[p];a.set(p,u);}),!a.size){R.warn(["请先配置键",n]);return}if(n.type==="switch"){let p=typeof n.disabled=="function"?n.disabled():n.disabled;typeof p=="boolean"&&p&&this.$data.contentConfigInitDisabledKeys.push(...a.keys());}for(const[p,u]of a.entries())this.setDefaultValue(p,u);},e=n=>{for(let o=0;o<n.length;o++){let l=n[o];t(l);let a=l.views;a&&Array.isArray(a)&&e(a);}},i=[...pe.getAllContentConfig()];for(let n=0;n<i.length;n++){let o=i[n];if(!o.views)continue;const l=o.views;l&&Array.isArray(l)&&e(l);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(t,e){this.$data.contentConfigInitDefaultValue.has(t)&&R.warn("请检查该key(已存在): "+t),this.$data.contentConfigInitDefaultValue.set(t,e);},getDefaultValue(t){return this.$data.contentConfigInitDefaultValue.get(t)},setValue(t,e){K.set(t,e);},getValue(t,e){const i=K.get(t);return i??(this.$data.contentConfigInitDefaultValue.has(t)?this.$data.contentConfigInitDefaultValue.get(t):e)},deleteValue(t){K.delete(t);},hasKey(t){return K.has(t)},addValueChangeListener(t,e){return K.addValueChangeListener(t,(n,o,l)=>{e(t,l,o);})},removeValueChangeListener(t){K.removeValueChangeListener(t);},emitMenuValueChange(t,e,i){K.emitValueChangeListener(t,i,e);},async exec(t,e,i,n=true){const o=this;let l;typeof t=="string"||Array.isArray(t)?l=()=>t:l=t;let a=false;const r=l();let c=[];Array.isArray(r)?(a=true,c=r):c.push(r);const p=c.find(g=>!this.$data.contentConfigInitDefaultValue.has(g));if(p){R.warn(`${p} 键不存在`);return}const u=JSON.stringify(c);if(n&&this.$data.onceExecMenuData.has(u))return this.$data.onceExecMenuData.get(u);let f=[];const m=[];let h=[];const d=(g,v)=>{let A=[],T=[],M=[];if(Array.isArray(v))M=M.concat(v);else {const E=V=>{if(typeof V=="object"&&V!=null)if(V instanceof Element)M.push(V);else {const{$css:O,destory:I}=V;O!=null&&(Array.isArray(O)?M=M.concat(O):M.push(O)),typeof I=="function"&&M.push(I);}else M.push(V);};if(v!=null&&Array.isArray(v))for(const V of v)E(V);else E(v);}for(const E of M)if(E!=null){if(E instanceof Element){A.push(E);continue}if(typeof E=="function"){h.push(E);continue}}g?(f=f.concat(A),h=h.concat(T)):(b(),y());},w=g=>!!this.getValue(g),b=()=>{for(let g=0;g<f.length;g++)f[g]?.remove(),f.splice(g,1),g--;},y=()=>{for(let g=0;g<h.length;g++){const v=h[g];v(),h.splice(g,1),g--;}},k=()=>{let g=false;return typeof i=="function"?g=i(c):g=c.every(v=>w(v)),g},C=async g=>{if(k()){const A=c.map(M=>this.getValue(M)),T=await e({value:a?A:A[0],addStoreValue:(...M)=>d(true,M)});d(true,T);}else d(false,[]);};n&&c.forEach(g=>{const v=this.addValueChangeListener(g,(A,T,M)=>C());m.push(v);}),await C();const _={reload(){this.clearStoreStyleElements(),this.destory(),C();},clear(){this.clearStoreStyleElements(),this.destory(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreStyleElements:()=>b(),destory(){return y()},removeValueChangeListener:()=>{m.forEach(g=>{this.removeValueChangeListener(g);});},clearOnceExecMenuData(){n&&o.$data.onceExecMenuData.delete(u);}};return this.$data.onceExecMenuData.set(u,_),_},async execMenu(t,e,i=false,n=false){return await this.exec(t,async o=>await e(o),o=>o.every(a=>{let r=!!this.getValue(a);return D.$data.contentConfigInitDisabledKeys.includes(a)&&(r=false,R.warn(`.execMenu${n?"Once":""} ${a} 被禁用`)),i&&(r=!r),r}),n)},async execMenuOnce(t,e,i=false,n=false){const o=await this.execMenu(t,e,i,true);if(n&&o){const l=()=>{o.reload();};this.removeUrlChangeWithExecMenuOnceListener(t),this.addUrlChangeWithExecMenuOnceListener(t,l);}return o},deleteExecMenuOnce(t){return t=this.transformKey(t),this.$data.onceExecMenuData.delete(t),this.$data.urlChangeReloadMenuExecOnce.delete(t),K.removeValueChangeListener(t)},onceExec(t,e){if(t=this.transformKey(t),typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(t)||(e(),this.$data.onceExecData.set(t,1));},deleteOnceExec(t){t=this.transformKey(t),this.$data.onceExecData.delete(t);},addUrlChangeWithExecMenuOnceListener(t,e){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.set(t,e);},removeUrlChangeWithExecMenuOnceListener(t){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.delete(t);},hasUrlChangeWithExecMenuOnceListener(t){return t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.has(t)},async emitUrlChangeWithExecMenuOnceEvent(t){const e=this.$data.urlChangeReloadMenuExecOnce.values();for(const i of e)await i(t);},showPanel(t,e=`${be}-设置`,i=false,n=false){this.$data.$panel=null,this.$data.panelContent=[];let o=t.findIndex(a=>(typeof a.isBottom=="function"?a.isBottom():!!a.isBottom)&&a.id==="script-version")!==-1;!i&&!o&&t.push(...pe.getDefaultBottomContentConfig());let l=S.panel({title:{text:e,position:"center",html:false,style:""},content:t,btn:{close:{enable:true,callback:(a,r)=>{a.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(a,r)=>{a(),this.$data.$panel=null;}},width:N.setting.width,height:N.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=l,this.$data.panelContent=t,n||this.registerConfigSearch({$panel:l,content:t});},registerConfigSearch(t){const{$panel:e,content:i}=t,n=async(m,h)=>{if(m==null)return;const d=await h(m);return d&&typeof d.isFind=="boolean"&&d.isFind?d.data:await n(d.data,h)},o=(m,h)=>{const d=new IntersectionObserver(w=>{w.forEach(b=>{b.isIntersecting&&(h?.(),d.disconnect());});},{root:null,threshold:1});d.observe(m),m.scrollIntoView({behavior:"smooth",block:"center"});},l=m=>{const h="pops-flashing";s.onAnimationend(m,()=>{m.classList.remove(h);}),m.classList.add(h);},a=m=>{if(m.type==="dblclick"&&f)return;s.preventEvent(m),c=null;const h=S.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:N.settingMiddle.width,height:"auto",drag:true,style:`
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
				`});h.$shadowRoot.querySelector(".search-wrapper");const d=h.$shadowRoot.querySelector(".search-config-text"),w=h.$shadowRoot.querySelector(".search-result-wrapper");d.focus();const b=()=>{s.empty(w);},y=C=>{const _=$.queryProperty(C,A=>A?.next?{isFind:false,data:A.next}:{isFind:true,data:A}),g=s.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${_.matchedData?.path}</div>
							<div class="search-result-item-description">${_.matchedData?.description??""}</div>
						`}),v=S.config.PanelHandlerComponents();return s.on(g,"click",A=>{const M=e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[C.index];if(!M){x.error(`左侧项下标${C.index}不存在`);return}M.scrollIntoView({behavior:"smooth",block:"center"}),M.click(),n(C.next,async E=>{if(E?.next){const V=await s.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(O=>{const I=Reflect.get(O,v.$data.nodeStoreConfigKey);return typeof I=="object"&&I!=null&&I.text===E.name}),2500);if(V)V.click();else return x.error("未找到对应的二级菜单"),{isFind:true,data:E};return {isFind:false,data:E.next}}else {const V=await s.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(O=>Reflect.get(O,v.$data.nodeStoreConfigKey)===E.matchedData?.formConfig),2500);if(V){o(V);const O=V.closest(".pops-panel-forms-fold[data-fold-enable]");O&&(O.querySelector(".pops-panel-forms-fold-container").click(),await $.sleep(500)),o(V,()=>{l(V);});}else x.error("未找到对应的菜单项");return {isFind:true,data:E}}});}),g},k=C=>{const _=new RegExp(C,"i"),g=[],v=(T,M)=>{for(let E=0;E<T.length;E++){const V=T[E],O=V.views;if(O&&Array.isArray(O)){const I=$.deepClone(M);if(V.type==="deepMenu"){const Z=$.queryProperty(I,Q=>Q?.next?{isFind:false,data:Q.next}:{isFind:true,data:Q});Z.next={name:V.text};}v(O,I);}else {let I,Z;if(V.type==="own"){const G=Reflect.get(V.attributes||{},ze);G&&(typeof G.text=="string"&&(I=G.text),typeof G.desc=="string"&&(Z=G.desc));}else I=V.text,Z=Reflect.get(V,"description");const Q=[I,Z],Me=Q.findIndex(G=>{if(typeof G=="string")return G.match(_)});if(Me!==-1){const G=$.deepClone(M),Re=$.queryProperty(G,H=>H?.next?{isFind:false,data:H.next}:{isFind:true,data:H});Re.next={name:I,matchedData:{path:"",formConfig:V,matchedText:Q[Me],description:Z}};const Ve=[];$.queryProperty(G,H=>{const he=H?.name;return typeof he=="string"&&he.trim()!==""&&Ve.push(he),H?.next?{isFind:false,data:H.next}:{isFind:true,data:H}});const Ne=Ve.join(ee.escapeHtml(" - "));Re.next.matchedData.path=Ne,g.push(G);}}}};for(let T=0;T<i.length;T++){const M=i[T];if(!M.views||M.isBottom&&M.id==="script-version")continue;const E=M.views;if(E&&Array.isArray(E)){let V=M.title;typeof V=="function"&&(V=V()),v(E,{index:T,name:V});}}const A=document.createDocumentFragment();for(const T of g){let M=y(T);A.appendChild(M);}b(),w.append(A);};s.on(d,"input",$.debounce(C=>{s.preventEvent(C);let _=s.val(d).trim();if(_===""){b();return}k(_);},200));};e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(m=>{s.on(m,"dblclick",a);});let c=null,p=false,u,f=false;s.on(e.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(m,h)=>{f=true,clearTimeout(u),u=void 0,p&&c===h?(p=false,c=null,a(m)):(u=setTimeout(()=>{p=false;},200),p=true,c=h);},{capture:true}),e.$shadowRoot.appendChild(s.createElement("style",{type:"text/css",textContent:`
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
				`}));},transformKey(t){if(Array.isArray(t)){const e=t.sort();return JSON.stringify(e)}else return t}},U={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},$=W.noConflict(),s=F.noConflict(),S=ue,R=new $.Log(X,z.console||Fe.console),be=X?.script?.name||void 0,Ke=ue.config.Utils.AnyTouch(),je=false;R.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});x.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(t){const e=t.setting.type;if(e==="loading")return  false;const i=t.setting.content;return e==="warning"?R.warn(i):e==="error"?R.error(i):R.info(i),true},get position(){return D.getValue(U.qmsg_config_position.key,U.qmsg_config_position.defaultValue)},get maxNums(){return D.getValue(U.qmsg_config_maxnums.key,U.qmsg_config_maxnums.defaultValue)},get showReverse(){return D.getValue(U.qmsg_config_showreverse.key,U.qmsg_config_showreverse.defaultValue)},get zIndex(){let t=W.getMaxZIndex(),e=ue.config.InstanceUtils.getPopsMaxZIndex().zIndex;return W.getMaxValue(t,e)+100}});S.GlobalConfig.setGlobalConfig({zIndex:()=>{const t=W.getMaxZIndex(void 0,void 0,i=>{if(i?.classList?.contains("qmsg-shadow-container")||i?.closest("qmsg")&&i.getRootNode()instanceof ShadowRoot)return  false}),e=ue.config.InstanceUtils.getPopsMaxZIndex().zIndex;return W.getMaxValue(t,e)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const _e=new $.GM_Menu({GM_getValue:oe,GM_setValue:ie,GM_registerMenuCommand:Oe,GM_unregisterMenuCommand:Ge}),de=new $.Httpx({xmlHttpRequest:Ue,logDetails:je});de.interceptors.request.use(t=>t);de.interceptors.response.use(void 0,t=>(R.error("拦截器-请求错误",t),t.type==="onabort"?x.warning("请求取消",{consoleLogContent:true}):t.type==="onerror"?x.error("请求异常",{consoleLogContent:true}):t.type==="ontimeout"?x.error("请求超时",{consoleLogContent:true}):x.error("其它错误",{consoleLogContent:true}),t));z.Object.defineProperty,z.Function.prototype.apply,z.Function.prototype.call,z.Element.prototype.appendChild,z.setTimeout;const Te=s.addStyle.bind(s);F.selector.bind(F);F.selectorAll.bind(F);const Le=new $.GM_Cookie,pe={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new $.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(t){Array.isArray(t)||(t=[t]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,t);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(t=0){return this.$data.contentConfig.get(t)??[]},getDefaultBottomContentConfig(){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let t=false,e;const i=(l,a)=>{typeof a!="string"&&(a=ee.toStr(a));const r=new Blob([a]),c=globalThis.URL.createObjectURL(r);s.createElement("a",{href:c,download:l}).click(),$.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(c);},500);},n=()=>{const l=f=>{const m=S.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="local">本地导入</div>
            <div class="btn-control" data-mode="network">网络导入</div>
            <div class="btn-control" data-mode="clipboard">剪贴板导入</div>`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(k,C){k.close();}}},drag:true,mask:{enable:true},width:N.info.width,height:N.info.height,style:`
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
          }`}),h=m.$shadowRoot.querySelector(".btn-control[data-mode='local']"),d=m.$shadowRoot.querySelector(".btn-control[data-mode='network']"),w=m.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),b=async k=>{confirm("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）")&&(typeof ae=="function"?typeof se=="function"?(ae().forEach(g=>{se(g);}),x.success("已清空脚本存储的配置")):x.error("不支持GM_deleteValue函数，无法执行删除脚本配置"):x.error("不支持GM_listValues函数，无法清空脚本存储的配置")),typeof Ae=="function"?Ae(k):Object.keys(k).forEach(g=>{const v=k[g];ie(g,v);}),x.success("配置导入完毕");},y=k=>new Promise(async C=>{const _=$.toJSON(k);Object.keys(_).length===0?x.warning("解析为空配置，不导入"):await b(_),C(true);});s.on(h,"click",k=>{s.preventEvent(k),m.close();const C=s.createElement("input",{type:"file",accept:".json"});s.on(C,["propertychange","input"],_=>{if(!C.files?.length)return;const g=C.files[0],v=new FileReader;v.onload=()=>{y(v.result);},v.readAsText(g,"UTF-8");}),C.click();}),s.on(d,"click",k=>{s.preventEvent(k),m.close();const C=S.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(v,A){v.close();}},ok:{text:"导入",callback:async(v,A)=>{const T=v.text;if($.isNull(T)){x.error("请填入完整的url");return}const M=x.loading("正在获取配置..."),E=await de.get(T,{allowInterceptConfig:false});if(M.close(),!E.status){R.error(E),x.error("获取配置失败",{consoleLogContent:true});return}await y(E.data.responseText)&&v.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:N.info.width,height:"auto"}),_=C.$shadowRoot.querySelector("input"),g=C.$shadowRoot.querySelector(".pops-prompt-btn-ok");s.on(_,["input","propertychange"],v=>{s.val(_)===""?s.attr(g,"disabled","true"):s.removeAttr(g,"disabled");}),s.onKeyboard(_,"keydown",(v,A,T)=>{v==="Enter"&&T.length===0&&s.val(_)!==""&&s.emit(g,"click");}),s.emit(_,"input");}),s.on(w,"click",async k=>{s.preventEvent(k),m.close();let C=await ee.getClipboardText();if(C.trim()===""){x.warning("获取到的剪贴板内容为空");return}await y(C);});},a=(f=`${be}_panel-setting-${$.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,m)=>{const h=S.alert({title:{text:"请选择导出方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="export-to-file">导出至文件</div>
            <div class="btn-control" data-mode="export-to-clipboard">导出至剪贴板</div>
            `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(b,y){b.close();}}},drag:true,mask:{enable:true},width:N.info.width,height:N.info.height,style:`
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
          }`}),d=h.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),w=h.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");s.on(d,"click",b=>{s.preventEvent(b);try{i(f,m),h.close();}catch(y){x.error(y.toString(),{consoleLogContent:true});}}),s.on(w,"click",async b=>{await $.copy(m)?(x.success("复制成功"),h.close()):x.error("复制失败");});},c=S.confirm({title:{text:"配置",position:"center"},content:{text:`
            <textarea name="config-value" id="config" readonly></textarea>
          `,html:true},btn:{ok:{enable:true,type:"primary",text:"导入",callback(f,m){l();}},cancel:{enable:true,text:"导出",callback(f,m){a(void 0,u);}}},width:P.width<450?"90vw":"450px",height:"auto",style:`
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
        `}).$shadowRoot.querySelector("textarea"),p={};if(typeof ae=="function")ae().forEach(m=>{const h=oe(m);Reflect.set(p,m,h);});else {x.warning("不支持函数GM_listValues，仅导出菜单配置");const f=oe(ce);Reflect.set(p,ce,f);}const u=ee.toStr(p);c.value=u;},o=()=>{let l=X?.script?.supportURL||X?.script?.namespace;typeof l=="string"&&$.isNotNull(l)&&window.open(l,"_blank");};return [{id:"script-version",title:`版本：${X?.script?.version||"未知"}`,isBottom:true,views:[],clickFirstCallback(){return  false},afterRender(l){new Ke(l.$asideLiElement).on("tap",function(r){clearTimeout(e),e=void 0,t?(t=false,n()):(e=setTimeout(()=>{t=false,o();},200),t=true);});}}]},setDefaultBottomContentConfig(t){this.$data.__defaultBottomContentConfig=t;}};let qe=t=>{(typeof t=="object"&&t!=null||typeof t=="function")&&Object.keys(t).forEach(e=>{typeof t[e]=="function"&&(t[e]=t[e].bind(t));});};const le=Ie;qe(le);qe(Le);const $e=["document.cookie","cookieStore","GM_cookie","GM.cookie"];class Se{__apiName;constructor(e){if(typeof e=="string"&&!$e.includes(e))throw new Error(`未知的apiName：${e}`);this.__apiName=e;}get cookieManagerApiName(){let e=D.getValue("cookie-manager-api","document.cookie");return this.__apiName||e}get cookieManager(){if(this.cookieManagerApiName==="GM_cookie")return {list(e,i){le.list(e,n=>{i(n);});},set(e,i){le.set(e,n=>{i(n);});},delete(e,i){le.delete(e,n=>{i(n);});}};if(this.cookieManagerApiName==="GM.cookie")return {list(e,i){ge.cookie.list().then(n=>{i(n);});},set(e,i){ge.cookie.set(e).then(n=>{i(n??null);}).catch(n=>{i(n);});},delete(e,i){ge.cookie.delete(e).then(n=>{i(n??null);}).catch(n=>{i(n);});}};if(this.cookieManagerApiName==="cookieStore"){let e=z.cookieStore;return {list(i,n){e.getAll().then(o=>{n(o);}).catch(o=>{R.error(o),x.error(o.toString());});},set(i,n){e.set(i).then(()=>{n();}).catch(o=>{n(o);});},delete(i,n){e.delete(i).then(o=>{n();}).catch(o=>{n(o);});}}}else return Le}queryAllCookie(){return new Promise((e,i)=>{try{this.cookieManager.list({},n=>{let o=n||[];o=o.sort((l,a)=>l.name.localeCompare(a.name)),e(o);});}catch(n){R.error(n),x.error(n.toString()),i(n);}})}deleteAllCookie(){return new Promise((e,i)=>{try{this.cookieManager.list({},async n=>{const o=n||[],l={success:0,error:0};for(let a=0;a<o.length;a++){const r=o[a];await new Promise(p=>{this.deleteCookie(r).then(u=>{p(u);});})?l.error++:l.success++;}e(l);});}catch(n){R.error(n),x.error(n.toString()),i(n);}})}addCookie(e){return new Promise((i,n)=>{try{Reflect.deleteProperty(e,"hostOnly"),this.cookieManager.set(e,o=>{i(o);});}catch(o){R.error(o),x.error(o.toString()),n(o);}})}deleteCookie(e){return new Promise((i,n)=>{try{this.cookieManager.delete(e,o=>{i(o);});}catch(o){R.error(o),x.error(o.toString()),n(o);}})}updateCookie(e){return new Promise(async(i,n)=>{let o;try{if(this.cookieManagerApiName==="document.cookie"||this.cookieManagerApiName==="cookieStore"){let a=await this.deleteCookie(e);if(a)throw new TypeError(a.toString())}let l=await this.addCookie(e);if(l)throw new TypeError(l.toString())}catch(l){o=l;}finally{i(o);}})}}const L=new Se,xe=function(t,e,i,n,o,l,a,r,c,p){const u={text:t,type:"button",attributes:{},props:{},description:e,buttonIcon:n,buttonIsRightIcon:o,buttonIconIsLoading:l,buttonType:a,buttonText:i,callback(f){typeof r=="function"&&r(f);},afterAddToUListCallBack:c};return Reflect.set(u.attributes,Ce,()=>{u.disable=false;}),u},ye=function(t,e,i,n,o,l="",a="text",r,c){const p={text:t,type:"input",inputType:a,attributes:{},props:{},description:n,placeholder:l,afterAddToUListCallBack:r,getValue(){return this.props[q].get(e,i)},callback(u,f){u.target.validity.valid,this.props[q].set(e,f);}};return Reflect.set(p.attributes,J,e),Reflect.set(p.attributes,Y,i),fe.initComponentsStorageApi("input",p,{get(u,f){return D.getValue(u,f)},set(u,f){D.setValue(u,f);}}),p},We=function(t,e,i,n,o,l){const a={type:"own",attributes:{},props:{},createLIElement:t,afterAddToUListCallBack:l};return Reflect.set(a.attributes,Ce,()=>false),a},ne=function(t,e,i,n,o,l,a){const r={text:t,type:"select",description:l,attributes:{},props:{},getValue(){return this.props[q].get(e,i)},callback(c){if(c==null)return;const p=c.value;if(R.info(`选择：${c.text}`),typeof o=="function"&&o(c))return;this.props[q].set(e,p),typeof a=="function"&&a(c);},data:n};return Reflect.set(r.attributes,J,e),Reflect.set(r.attributes,Y,i),fe.initComponentsStorageApi("select",r,{get(c,p){return D.getValue(c,p)},set(c,p){D.setValue(c,p);}}),r},Je=function(t,e,i,n,o,l="",a,r){const c={text:t,type:"textarea",attributes:{},props:{},description:n,placeholder:l,disabled:a,getValue(){const u=this.props[q].get(e,i);return Array.isArray(u)?u.join(`
`):u},callback(p,u){this.props[q].set(e,u);}};return Reflect.set(c.attributes,J,e),Reflect.set(c.attributes,Y,i),fe.initComponentsStorageApi("switch",c,{get(p,u){return D.getValue(p,u)},set(p,u){D.setValue(p,u);}}),c},fe={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new W.Dictionary),this.__storeApiFn}},getStorageApi(t){if(this.hasStorageApi(t))return this.$data.storeApiValue.get(t)},hasStorageApi(t){return this.$data.storeApiValue.has(t)},setStorageApi(t,e){this.$data.storeApiValue.set(t,e);},initComponentsStorageApi(t,e,i){let n;this.hasStorageApi(t)?n=this.getStorageApi(t):n=i,this.setComponentsStorageApiProperty(e,n);},setComponentsStorageApiProperty(t,e){Reflect.set(t.props,q,e);}},j=function(t,e,i,n,o,l,a,r){const c={text:t,type:"switch",description:o,disabled:a,attributes:{},props:{},getValue(){return this.props[q].get(e,i)},callback(p,u){const f=!!u;if(R.success(`${f?"开启":"关闭"} ${t}`),typeof n=="function"&&n(p,f))return;this.props[q].set(e,f);},afterAddToUListCallBack:l};return Reflect.set(c.attributes,J,e),Reflect.set(c.attributes,Y,i),fe.initComponentsStorageApi("switch",c,{get(p,u){return D.getValue(p,u)},set(p,u){D.setValue(p,u);}}),c},De={beforeEdit(t,e){const i=L.cookieManagerApiName;return i==="cookieStore"?typeof t.expires=="number"&&(t.expirationDate=t.expires):(i==="GM_cookie"||i==="GM.cookie")&&e&&typeof t.expirationDate=="number"&&(t.expirationDate=t.expirationDate*1e3),t},afterEdit(t){const e=L.cookieManagerApiName;return e==="document.cookie"?t.domain="":e==="cookieStore"?typeof t.expirationDate=="number"&&(t.expires=t.expirationDate):(e==="GM_cookie"||e==="GM.cookie")&&typeof t.expirationDate=="number"&&(t.expirationDate=Math.floor(t.expirationDate/1e3)),t}};let re=(t,e,i,n)=>({text:t,type:"input",props:{},attributes:{},description:"",getValue(){return e()},callback(l,a){i(a);},placeholder:"",disabled:!!n}),Ye=(t,e,i,n)=>({text:t,type:"textarea",props:{},attributes:{},description:"",placeholder:"",getValue(){return e()},disabled:n,callback:function(l,a){i(a);}}),we=(t,e,i,n,o)=>({text:t,type:"select",description:"",attributes:{},props:{},getValue(){return i()},callback(a){const r=a.value;n(r);},data:typeof e=="function"?e():e,disabled:false});const ke={init(){},showView(t,e){let i=!!t,n={name:"",value:"",domain:window.location.hostname,path:"/",secure:false,session:false,hostOnly:false,httpOnly:false,sameSite:"lax",expirationDate:Date.now()+3600*24*30*1e3},o=$.assign({},n,true);$.assign(o,t??{},true),o=De.beforeEdit(o,i);const a=S.confirm({title:{text:i?"编辑Cookie":"添加Cookie",position:"center"},content:{text:"",html:true},drag:true,btn:{position:"center",ok:{text:i?"编辑":"添加",async callback(y,k){if(ke.validCookieInfo(o)){if(o.value=encodeURIComponent(o.value),o=De.afterEdit(o),i){let _=await L.updateCookie(o);_?x.error(_.toString()):(x.success("修改成功"),y.close());}else {let _=await L.addCookie(o);_?x.error(_.toString()):(x.success("添加成功"),y.close());}typeof e=="function"&&e(o);}}},cancel:{text:"取消"}},mask:{enable:true},width:N.settingMiddle.width,height:"auto",style:`
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
				#cookie-item-property-expires{
					border: 1px solid rgb(184, 184, 184, var(--pops-bd-opacity));
					border-radius: 4px;
					background-color: #ffffff;
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
            `}).$shadowRoot.querySelector(".pops-confirm-content"),r=S.config.PanelHandlerComponents(),c=r.createSectionContainerItem_input(re("name",()=>o.name,y=>o.name=y,i)).$el,p=r.createSectionContainerItem_textarea(Ye("value",()=>o.value,y=>o.value=y)).$el,u=r.createSectionContainerItem_input(re("domain",()=>o.domain,y=>o.domain=y)).$el,f=r.createSectionContainerItem_input(re("path",()=>o.path,y=>o.path=y)).$el;let m;if(o.session)m=r.createSectionContainerItem_input(re("expires",()=>"会话",y=>{},true)).$el;else {const y=We(()=>{const k=s.createElement("li",{innerHTML:`
							<div class="pops-panel-item-left-text">
								<p class="pops-panel-item-left-main-text">expires</p>
							</div>
							<div class="pops-panel-item-right-wrapper">
								<input type="datetime-local" id="cookie-item-property-expires">
							</div>
						`}),C=k.querySelector("#cookie-item-property-expires");return C.valueAsNumber=o.expirationDate,s.on(C,["change","input","propertychange"],_=>{s.preventEvent(_),o.expirationDate=C.valueAsNumber;}),k});m=r.createSectionContainerItem_own(y).$el;}const h=r.createSectionContainerItem_select(we("httpOnly",[{text:"true",value:true},{text:"false",value:false}],()=>o.httpOnly,y=>o.httpOnly=y)).$el,d=r.createSectionContainerItem_select(we("secure",[{text:"true",value:true},{text:"false",value:false}],()=>o.secure,y=>o.secure=y)).$el;let w=[{text:"no_restriction",value:"no_restriction"},{text:"lax",value:"lax"},{text:"strict",value:"strict"},{text:"unspecified",value:"unspecified"}];L.cookieManagerApiName==="cookieStore"&&(w=[{text:"lax",value:"lax"},{text:"strict",value:"strict"},{text:"none",value:"none"}]);const b=r.createSectionContainerItem_select(we("sameSite",w,()=>o.sameSite,y=>o.sameSite=y)).$el;s.append(a,[c,p]),L.cookieManagerApiName==="GM_cookie"||L.cookieManagerApiName==="GM.cookie"?s.append(a,[u,f,m,h,d,b]):L.cookieManagerApiName==="cookieStore"&&s.append(a,[u,f,m,b]);},validCookieInfo(t){return t.name==null||t.name==""?(x.error("name不能为空"),false):t.domain==null||t.domain==""?(x.error("domain不能为空"),false):t.path==null||t.path==""?(x.error("path不能为空"),false):true}};class Ze{option;constructor(e){this.option=e;}async showView(){let e=S.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist"></ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:true},btn:$.assign({ok:{callback:async()=>{await l();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
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
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),i=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");let n=e.$shadowRoot.querySelector(".rule-form-ulist"),o=await this.option.getView(await this.option.data());n.appendChild(o);const l=async()=>{(await this.option.onsubmit(i,await this.option.data())).success&&(e.close(),await this.option.dialogCloseCallBack(true));};}}class Qe{option;$data={isFilteredData:[]};constructor(e){this.option=e;}showView(){let e=S.alert({title:{text:this.option.title,position:"center"},content:{text:`
                <div class="filter-container"></div>
                `},btn:{ok:{text:"关闭",type:"default"}},drag:true,mask:{enable:true},width:window.innerWidth>500?"350px":"80vw",height:window.innerHeight>500?"300px":"70vh",style:`
            .filter-container{
                height: 100%;
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            .filter-container button{
                text-wrap: wrap;
                padding: 8px;
                height: auto;
                text-align: left;
            }
            `}),i=e.$shadowRoot.querySelector(".filter-container"),n=document.createDocumentFragment();this.option.filterOption.forEach(o=>{let l=s.createElement("button",{innerText:o.name},{type:"button"}),a=async()=>{this.$data.isFilteredData=[],(await this.option.getAllRuleInfo()).forEach(async c=>{await o.filterCallBack(c.data)?s.show(c.$el,false):(s.hide(c.$el,false),this.$data.isFilteredData.push(c.data));}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),e.close();};s.on(l,"click",async r=>{s.preventEvent(r),!(typeof o.callback=="function"&&!await o.callback(r,a))&&await a();}),n.appendChild(l);}),i.appendChild(n);}getFilteredData(){return this.$data.isFilteredData}}class Xe{option;constructor(e){this.option=e;}async showView(e){let i=S.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:true},btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async a=>{this.showEditView(false,await this.option.getAddData(),i.$shadowRoot);}},close:{enable:true,callback(a){i.close();}},cancel:{enable:this.option?.bottomControls?.filter?.enable||false,type:"default",text:"过滤",callback:async(a,r)=>{if(typeof this.option?.bottomControls?.filter?.callback=="function"){let u=await this.option.bottomControls.filter.callback();if(typeof u=="boolean"&&!u)return}let c=()=>Array.from(i.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),p=r.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");if(s.text(p).includes("取消")){let u=await this.option?.bottomControls?.filter?.cancelFilterCallback?.({$button:p,getAllRuleElement:c});if(typeof u=="boolean"&&!u)return;c().forEach(f=>{s.show(f,false);}),s.text(p,"过滤");}else {let u=new Qe({title:this.option.bottomControls?.filter?.title??"过滤规则",filterOption:this.option.bottomControls?.filter?.option||[],execFilterCallBack:async()=>{s.text(p,"取消过滤"),await this.option.bottomControls?.filter?.execFilterCallBack?.();const f=u.getFilteredData();f.length&&s.text(p,`取消过滤(${f.length})`);},getAllRuleInfo:()=>c().map(f=>({data:this.parseRuleItemElement(f).data,$el:f}))});u.showView();}}},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:a=>{let r=S.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async c=>{if(R.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){x.error("清理失败");return}else x.success("清理成功");await this.updateDeleteAllBtnText(i.$shadowRoot),this.clearContent(i.$shadowRoot),r.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
            ${S.config.cssText.panelCSS}
            
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
            `}),n=await this.option.data(),o=false,l=0;for(let a=0;a<n.length;a++){let r=n[a],c=await this.appendRuleItemElement(i.$shadowRoot,r),p=true;typeof e=="function"?p=e(r):typeof e=="number"&&!isNaN(e)&&(p=await this.option.bottomControls?.filter?.option[e]?.filterCallBack(r)??p),p||(o=true,s.hide(c,false),l++);}if(o){let a=i.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");s.text(a,`取消过滤${l?`(${l})`:""}`);}}showEditView(e,i,n,o,l,a){let r=async p=>{if(p){if(typeof a=="function"){let u=await this.option.getData(i);a(u);}}else if(e||await this.option.deleteData(i),typeof l=="function"){let u=await this.option.getData(i);l(u);}};new Ze({title:e?"编辑":"添加",data:()=>i,dialogCloseCallBack:r,getView:async p=>await this.option.itemControls.edit.getView(p,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async(p,u)=>{p.close(),await r(false);}},close:{callback:async(p,u)=>{p.close(),await r(false);}}},onsubmit:async(p,u)=>{let f=await this.option.itemControls.edit.onsubmit(p,e,u);return f.success?e?(x.success("修改成功"),n&&await this.updateRuleItemElement(f.data,o,n)):n&&await this.appendRuleItemElement(n,f.data):e&&R.error("修改失败"),f},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(e){let i=e.querySelector(".rule-view-container"),n=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:i,$deleteBtn:n}}parseRuleItemElement(e){let i=e.querySelector(".rule-controls-enable"),n=i.querySelector(".pops-panel-switch"),o=i.querySelector(".pops-panel-switch__input"),l=i.querySelector(".pops-panel-switch__core"),a=e.querySelector(".rule-controls-edit"),r=e.querySelector(".rule-controls-delete");return {$enable:i,$enableSwitch:n,$enableSwitchInput:o,$enableSwitchCore:l,$edit:a,$delete:r,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,i){let n=await this.option.getDataItemName(e),o=s.createElement("div",{className:"rule-item",innerHTML:`
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
			`});Reflect.set(o,"data-rule",e);let l="pops-panel-switch-is-checked";const{$enable:a,$enableSwitch:r,$enableSwitchCore:c,$enableSwitchInput:p,$delete:u,$edit:f}=this.parseRuleItemElement(o);return this.option.itemControls.enable.enable?(s.on(c,"click",async m=>{let h=false;r.classList.contains(l)?(r.classList.remove(l),h=false):(r.classList.add(l),h=true),p.checked=h,await this.option.itemControls.enable.callback(e,h);}),await this.option.itemControls.enable.getEnable(e)&&r.classList.add(l)):a.remove(),this.option.itemControls.edit.enable?s.on(f,"click",m=>{s.preventEvent(m),this.showEditView(true,e,i,o,h=>{e=null,e=h;});}):f.remove(),this.option.itemControls.delete.enable?s.on(u,"click",m=>{s.preventEvent(m);let h=S.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async d=>{R.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(x.success("成功删除该数据"),o.remove(),await this.updateDeleteAllBtnText(i),h.close()):x.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):u.remove(),o}async appendRuleItemElement(e,i){let{$container:n}=this.parseViewElement(e),o=[],l=Array.isArray(i)?i:[i];for(let a=0;a<l.length;a++){let r=l[a],c=await this.createRuleItemElement(r,e);n.appendChild(c),o.push(c);}return await this.updateDeleteAllBtnText(e),o}async updateRuleContaienrElement(e){this.clearContent(e);const{$container:i}=this.parseViewElement(e);let n=await this.option.data();await this.appendRuleItemElement(e,n),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,i,n){let o=await this.createRuleItemElement(e,n);i.after(o),i.remove();}clearContent(e){const{$container:i}=this.parseViewElement(e);s.html(i,"");}setDeleteBtnText(e,i,n=false){const{$deleteBtn:o}=this.parseViewElement(e);n?s.html(o,i):s.text(o,i);}async updateDeleteAllBtnText(e){let i=await this.option.data();this.setDeleteBtnText(e,`清空所有(${i.length})`);}}const B={$key:{STORAGE_KEY:"cookie-rule"},$data:{matchedRuleList:[]},init(){this.$data.matchedRuleList.length=0,this.$data.matchedRuleList=this.getMatchedRuleList(),this.$data.matchedRuleList.length&&_e.add({key:"matched-cookie-rule-list",text:`${window.location.hostname} ${this.$data.matchedRuleList.length}条规则`,isStoreValue:false,autoReload:false,showText(t,e){return t},callback(t){console.log(B.$data.matchedRuleList),alert(`以下是命中的规则名：
`+B.$data.matchedRuleList.map(e=>e.name).join(`
`));}});},getMatchedRuleList(t=window.location.href){const e=this.getData(),i=[];return e.forEach(n=>{if(!n.enable)return;let o=window.location.href,l=n.data.url;if(n.data.enableRegExpToMatchUrl){if(!new RegExp(l,"i").test(o))return}else if(!o.includes(l))return;i.push(n);}),i},showView(){let t=S.config.PanelHandlerComponents();function e(o,l){return {get(a,r){return Reflect.get(o,a)??r},set(a,r){Reflect.set(o,a,r);}}}const i=this.getMatchedRuleList();new Xe({title:"Cookie规则",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:o=>o.name,updateData:o=>this.updateData(o),deleteData:o=>this.deleteData(o),getData:o=>this.getData().find(r=>r.uuid===o.uuid)??o,itemControls:{enable:{enable:true,getEnable(o){return o.enable},callback:(o,l)=>{o.enable=l,this.updateData(o);}},edit:{enable:true,getView:(o,l)=>{let a=document.createDocumentFragment(),r=this.getTemplateData();l||(o=r);let c=j("启用","enable",r.enable);Reflect.set(c.props,q,e(o));let p=t.createSectionContainerItem_switch(c).$el,u=ye("规则名称","name","",r.name,void 0,"必填");Reflect.set(u.props,q,e(o));let f=t.createSectionContainerItem_input(u).$el,m=ne("Cookie管理Api","execApiName",r.data.execApiName,[{text:"（当前）"+L.cookieManagerApiName,value:"use-global"},...$e.map(E=>({text:E,value:E}))],void 0,"操作Cookie的Api函数");Reflect.set(m.props,q,e(o.data));let h=t.createSectionContainerItem_select(m).$el,d=ye("网址","url",r.data.url,"用于执行该规则的网址",void 0,"必填");Reflect.set(d.props,q,e(o.data));let w=t.createSectionContainerItem_input(d).$el,b=j("启用正则匹配网址","enableRegExpToMatchUrl",r.data.enableRegExpToMatchUrl);Reflect.set(b.props,q,e(o.data));let y=t.createSectionContainerItem_switch(b).$el,k=ye("Cookie名称","cookieName",r.data.cookieName,"用于匹配执行操作的Cookie名",void 0,"必填");Reflect.set(k.props,q,e(o.data));let C=t.createSectionContainerItem_input(k).$el,_=j("启用正则匹配Cookie名称","enableRegExpToMatchCookieName",r.data.enableRegExpToMatchCookieName);Reflect.set(_.props,q,e(o.data));let g=t.createSectionContainerItem_switch(_).$el,v=ne("操作模式","operationMode",r.data.operationMode,[{value:"delete",text:"删除Cookie"},{value:"extended",text:"自动延长Cookie有效期30天"},{value:"extended-90",text:"自动延长Cookie有效期90天"},{value:"extended-180",text:"自动延长Cookie有效期180天"},{value:"extended-360",text:"自动延长Cookie有效期360天"}]);Reflect.set(v.props,q,e(o.data));let A=t.createSectionContainerItem_select(v).$el,T=Je("备注","remark",r.data.remark);Reflect.set(T.props,q,e(o.data));let M=t.createSectionContainerItem_textarea(T).$el;return a.append(p,f,h,w,y,C,g,A,M),a},onsubmit:(o,l,a)=>{let r=o.querySelectorAll(".rule-form-ulist > li"),c=this.getTemplateData();l&&(c.uuid=a.uuid);try{return r.forEach(p=>{let u=Reflect.get(p,t.$data.nodeStoreConfigKey),f=Reflect.get(u,"attributes"),m=Reflect.get(p,q),h=Reflect.get(f,J),d=Reflect.get(f,Y),w=m.get(h,d);Reflect.has(c,h)?Reflect.set(c,h,w):Reflect.has(c.data,h)?Reflect.set(c.data,h,w):R.error(`${h}不在数据中`);}),c.name.trim()===""?(x.error("规则名称不能为空"),{success:!1,data:c}):c.data.url.trim()===""?(x.error("网址不能为空"),{success:!1,data:c}):c.data.cookieName.trim()===""?(x.error("Cookie名称不能为空"),{success:!1,data:c}):l?{success:this.updateData(c),data:c}:{success:this.addData(c),data:c}}catch(p){return R.error(p),{success:false,data:c}}finally{this.init();}},style:`
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
                    `},delete:{enable:true,deleteCallBack:o=>this.deleteData(o)}},bottomControls:{filter:{enable:true,option:[{name:"过滤-已启用",filterCallBack(o){return o.enable}},{name:"过滤-未启用",filterCallBack(o){return !o.enable}},{name:"过滤-当前网站执行",filterCallBack(o){return i.some(l=>l.uuid===o.uuid)}}]}}}).showView();},getTemplateData(){return {uuid:$.generateUUID(),enable:true,name:"",data:{url:"",execApiName:"use-global",enableRegExpToMatchUrl:false,cookieName:"",enableRegExpToMatchCookieName:false,operationMode:"delete",remark:""}}},getData(){return oe(this.$key.STORAGE_KEY,[])},setData(t){ie(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(n=>n.uuid==t.uuid)===-1?(e.push(t),ie(this.$key.STORAGE_KEY,e),true):false},updateData(t){let e=this.getData(),i=e.findIndex(o=>o.uuid==t.uuid),n=false;return i!==-1&&(n=true,e[i]=t),this.setData(e),n},deleteData(t){let e=this.getData(),i=e.findIndex(o=>o.uuid==t.uuid),n=false;return i!==-1&&(n=true,e.splice(i,1)),this.setData(e),n},clearData(){se(this.$key.STORAGE_KEY);},exportRule(t="rule.json"){let e=this.getData(),i=new Blob([JSON.stringify(e,null,4)]),n=window.URL.createObjectURL(i),o=s.createElement("a");o.href=n,o.download=t,o.click(),setTimeout(()=>{window.URL.revokeObjectURL(n);},1500);},importRule(){let t=S.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
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
            `}),e=t.$shadowRoot.querySelector(".import-mode[data-mode='local']"),i=t.$shadowRoot.querySelector(".import-mode[data-mode='network']");s.on(e,"click",n=>{s.preventEvent(n),t.close();let o=s.createElement("input",{type:"file",accept:".json"});s.on(o,["propertychange","input"],l=>{if(!o.files?.length)return;let a=o.files[0],r=new FileReader;r.onload=()=>{let c=$.toJSON(r.result);if(!Array.isArray(c)){R.error("不是正确的规则文件",c),x.error("不是正确的规则文件");return}this.setData(c),x.success(`成功导入 ${c.length}条规则`);},r.readAsText(a,"UTF-8");}),o.click();}),s.on(i,"click",n=>{s.preventEvent(n),t.close(),S.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"url",focus:true},btn:{ok:{callback:async(o,l)=>{let a=o.text;if($.isNull(a)){x.error("请填入完整的url");return}let r=await de.get(a);if(!r.status)return;let c=$.toJSON(r.data.responseText);if(!Array.isArray(c)){R.error("不是正确的规则文件",r,c),x.error("不是正确的规则文件");return}this.setData(c),o.close(),x.success(`成功导入 ${c.length}条规则`);}}},width:N.info.width,height:"auto"});});}},te={encrypt(t,e){return me.AES.encrypt(t,e).toString()},decrypt(t,e){return me.AES.decrypt(t,e).toString(me.enc.Utf8)},formatCookie(t,e,i){let n="";if(e==="header_string")n=t.map(o=>{let l=o.value;return `${o.name}=${l}; `}).join("");else if(e==="json")n=JSON.stringify({api:L.cookieManagerApiName,hostname:window.location.hostname,data:t},null,2);else throw new Error("不支持的格式化类型："+e);return i&&(n=this.encrypt(n,i)),n},showExportDialog(){let t=S.confirm({title:{text:"导出 Cookie",position:"center"},content:{text:`
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
					`,html:true},width:window.innerWidth<400?"88vw":"400px",height:"auto",btn:{merge:true,position:"space-between",ok:{text:"导出",async callback(r,c){let p=ve.$data.cookieList;if(p.length===0){x.warning("Cookie为空");return}let u=te.formatCookie(p,a.exportType,a.encodePwd);const f=new Blob([u],{type:"text/plain"}),m=URL.createObjectURL(f);s.createElement("a",{download:`${window.location.hostname}_${a.exportType}_${L.cookieManagerApiName}_${Date.now()}.txt`,href:m,target:"_blank"}).click(),setTimeout(()=>{URL.revokeObjectURL(m);},500),r.close();}},other:{enable:true,text:"导出至剪贴板",type:"xiaomi-primary",async callback(r,c){let p=ve.$data.cookieList;if(p.length===0){x.warning("Cookie为空");return}let u=te.formatCookie(p,a.exportType,a.encodePwd);await $.copy(u)?x.success("复制成功"):x.error("复制失败"),r.close();}}},style:`
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
						background-color: #f9fafb;
						padding: 0.625rem;
						margin: 0.65rem 0px;
						font-size: 12px;
						color: #111827;
					}
					.cookir-format-encode-pwd-container p{
    					color: #6b7280;
						font-size: 12px;
					}
				`}),e=t.$shadowRoot.querySelector(".export-example-code-text-container pre"),i=t.$shadowRoot.querySelector("#cookie-format-header_string"),n=t.$shadowRoot.querySelector("#cookie-format-json"),o=t.$shadowRoot.querySelector("#encode-pwd");const l={key:"cookie-backup-export-dialog-config",getConfig(){return D.getValue(this.key,{exportType:"header_string",encodePwd:""})},saveConfig(){let r="header_string";n.checked&&(r="json"),D.setValue(this.key,{exportType:r,encodePwd:s.val(o)}),a=this.getConfig();}};let a=l.getConfig();s.on(i,"input",()=>{const r=[{name:"_ga",value:"GA1.2.123456789.987654321",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false},{name:"PHPSESSID",value:"28f2d88ee9322cfd2e4f1e",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false},{name:"csrftoken",value:"abcdef123456",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false},{name:"logged_in",value:"true",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false}];let c=this.formatCookie(r,"header_string");s.text(e,c),l.saveConfig();}),s.on(n,"input",()=>{const r=[{name:"sessionId",value:"abc123xyz456",domain:".example.com",path:"/",secure:true,httpOnly:true,sameSite:"lax",expirationDate:1713543600,hostOnly:false,session:false}];let c=this.formatCookie(r,"json");s.text(e,c),l.saveConfig();}),s.on(o,["input","propertychange"],()=>{l.saveConfig();}),a.exportType==="header_string"?i.click():a.exportType==="json"&&n.click(),s.val(o,a.encodePwd);},showImportDialog(){let t=S.confirm({title:{text:"导入 Cookie",position:"center"},content:{text:`
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
					`,html:true},width:window.innerWidth<400?"88vw":"400px",height:"auto",btn:{ok:{text:"导入",async callback(f,m){try{const h=u.decodePwd;let d=u.value;h.trim()===""||(d=te.decrypt(d,h));const w=$.toJSON(d);if(Array.isArray(w)){R.info(`使用${L.cookieManagerApiName}导入cookie数据`);for(const b of w)await L.updateCookie(b);}else if(typeof w=="object"&&Object.keys(w).length&&Array.isArray(w.data)){const b=new Se(w.api);R.info(`使用${b.cookieManagerApiName}导入cookie数据`);for(const y of w.data)await b.updateCookie(y);}else if(typeof w=="object"&&!Object.keys(w).length){let b=new $.GM_Cookie;R.info(`使用${L.cookieManagerApiName}导入cookie数据`);let y=b.parseCookie(d);for(const k of y)await L.updateCookie({name:k.key,value:k.value,domain:window.location.hostname,path:"/",sameSite:"unspecified",secure:!1,session:!1,hostOnly:!0,httpOnly:!1});}else {R.error(d,w),x.error("cookie格式不符合");return}f.close();}catch(h){x.error(h.toString());}}}},style:`
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
						background-color: rgb(249 250 251 / 1);
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
				`}),e="",i=t.$shadowRoot.querySelector("#import-cookie-import_from_text"),n=t.$shadowRoot.querySelector("#import-cookie-import_from_file");t.$shadowRoot.querySelector(".import-cookie-value-container");let o=t.$shadowRoot.querySelector(".import-cookie-value-text"),l=o.querySelector("textarea"),a=t.$shadowRoot.querySelector(".import-cookie-value-file"),r=a.querySelector("input"),c=t.$shadowRoot.querySelector("#decode-pwd");const p={key:"cookie-backup-import-dialog-config",getConfig(){let f=D.getValue(this.key,{importType:"import_from_text",decodePwd:"",value:""});return f.importType==="import_from_text"?f.value=l.value:f.importType==="import_from_file"&&(f.value=e),f},saveConfig(){let f="import_from_text";n.checked&&(f="import_from_file"),D.setValue(this.key,{importType:f,decodePwd:s.val(c)}),u=this.getConfig();}};let u=p.getConfig();s.on(i,"input",()=>{p.saveConfig(),r.value="",e="",s.hide(a,false),s.show(o,false);}),s.on(n,"input",()=>{p.saveConfig(),l.value="",s.hide(o,false),s.show(a,false);}),s.on(l,["input","propertychange"],$.debounce(()=>{p.saveConfig();})),s.on(r,["change","input"],f=>{const m=r.files?.[0];if(m){const h=new FileReader;h.onload=function(d){const w=d.target.result;typeof w=="string"&&(e=w,p.saveConfig());},h.readAsText(m);}}),s.on(c,["input","propertychange"],async f=>{p.saveConfig();}),u.importType==="import_from_text"?i.click():u.importType==="import_from_file"&&n.click(),s.val(c,u.decodePwd);}},ve={$data:{cookieList:[]},init(){this.registerMenu();},async showView(){const t=S.alert({title:{text:"Cookie编辑器",html:false,position:"center"},content:{text:`
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
                    </div>
                `,html:true},btn:{ok:{enable:false}},mask:{enable:true},drag:true,width:N.setting.width,height:N.setting.height,style:`
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
            `}),e=t.$shadowRoot.querySelector(".cookie-search-inner input"),i=t.$shadowRoot.querySelector(".cookie-search-setting"),n=t.$shadowRoot.querySelector(".cookie-control-refresh"),o=t.$shadowRoot.querySelector(".cookie-control-add"),l=t.$shadowRoot.querySelector(".cookie-control-export"),a=t.$shadowRoot.querySelector(".cookie-control-import"),r=t.$shadowRoot.querySelector(".cookie-control-clear-all"),c=t.$shadowRoot.querySelector(".cookie-control-rule-manager"),p=t.$shadowRoot.querySelector(".cookie-setting"),u=t.$shadowRoot.querySelector(".cookie-list-wrapper");let f=d=>{const w=s.createElement("div",{className:"cookie-item",innerHTML:`
                `,"data-cookie-info":d}),b=[{leftText:"name",rightText:d.name},{leftText:"value",rightText:D.getValue("decode-cookie-value")?decodeURIComponent(d.value):encodeURIComponent(d.value)}];L.cookieManagerApiName==="GM_cookie"||L.cookieManagerApiName==="GM.cookie"?(d=d,b.push({leftText:"domain",rightText:d.domain},{leftText:"path",rightText:d.path},{leftText:"session",rightText:JSON.stringify(d.session)},{leftText:"expires",rightText:d.session?"会话":d.expirationDate?new Date(d.expirationDate*1e3).toISOString():"未知"},{leftText:"httpOnly",rightText:JSON.stringify(d.httpOnly)},{leftText:"hostOnly",rightText:JSON.stringify(d.hostOnly)},{leftText:"secure",rightText:JSON.stringify(d.secure)},{leftText:"sameSite",rightText:d.sameSite})):L.cookieManagerApiName==="cookieStore"&&(d=d,b.push({leftText:"domain",rightText:d.domain},{leftText:"path",rightText:d.path},{leftText:"expires",rightText:d.expires?new Date(d.expires).toISOString():"会话"},{leftText:"secure",rightText:JSON.stringify(d.secure)},{leftText:"sameSite",rightText:d.sameSite})),b.forEach(g=>{const v=s.createElement("div",{className:"cookie-item-group",innerHTML:`
                        <div class="cookie-item-group-left">
                            <p>${g.leftText}</p>
                        </div>
                        <div class="cookie-item-group-right">
                            <p>${g.rightText}</p>
                        </div>
                    `});s.append(w,v);});let y=s.createElement("div",{className:"cookie-item-group cookie-item-group-control",innerHTML:`
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
                    </div>
                `}),k=y.querySelector(".cookie-item-group-control-copy"),C=y.querySelector(".cookie-item-group-control-edit"),_=y.querySelector(".cookie-item-group-control-delete");return s.on(k,"click",g=>{s.preventEvent(g);let v=d.value;$.copy(v).then(A=>{A?x.success("复制成功"):x.error("复制失败");});}),s.on(C,"click",g=>{s.preventEvent(g),ke.showView(d,v=>{let A=f(v);s.after(w,A),w.parentElement?.removeChild(w);});}),s.on(_,"click",g=>{s.preventEvent(g),confirm("确定删除该Cookie？")&&L.deleteCookie(d).then(A=>{A?(R.error(A),x.error("删除失败")):(x.success("删除成功"),w.parentElement?.removeChild(w));});}),s.append(w,[y]),w},m=async d=>{let w=await L.queryAllCookie();s.empty(u);let b=document.createDocumentFragment(),y=D.getValue("exclude-session-cookie");w.forEach(k=>{if(y&&(k.session||L.cookieManagerApiName==="cookieStore"&&k.expires==null)||typeof d=="function"&&!d(k))return;const C=f(k);b.appendChild(C);}),this.$data.cookieList=w,u.appendChild(b);};s.on(e,["input","propertychange"],$.debounce(d=>{let w=s.val(e),b=w.trim()==="",y=D.getValue("search-config-use-regexp");m(k=>b?true:y?!!k.name.match(new RegExp(w)):k.name.includes(w));})),s.onKeyboard(e,"keypress",(d,w,b)=>{d==="Enter"&&b.length===0&&h();}),s.on(i,"click",d=>{s.preventEvent(d);let b=S.alert({title:{text:"搜索配置",position:"center"},content:{text:"",html:true},btn:{ok:{enable:false}},drag:true,mask:{clickEvent:{toClose:true}},width:N.info.width,height:N.info.height,style:`
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
                `}).$shadowRoot.querySelector(".pops-alert-content"),k=S.config.PanelHandlerComponents().createSectionContainerItem_switch(j("启用正则表达式","search-config-use-regexp",false,void 0,"使用正则表达式搜索Cookie名称",()=>{h();})).$el;s.append(b,k);}),s.on(n,"click",d=>{s.preventEvent(d),h();}),s.on(o,"click",d=>{s.preventEvent(d),ke.showView(void 0,w=>{h();});}),s.on(l,"click",async d=>{s.preventEvent(d),te.showExportDialog();}),s.on(a,"click",async d=>{s.preventEvent(d),te.showImportDialog();}),s.on(r,"click",async d=>{if(s.preventEvent(d),!window.confirm("确定清除全部Cookie？"))return;const b=await L.deleteAllCookie();b.error?x.warning(`清除成功：${b.success} 失败：${b.error}`):x.success("清除成功"),h();}),s.on(c,"click",d=>{s.preventEvent(d),B.showView();}),s.on(p,"click",d=>{s.preventEvent(d);let b=S.alert({title:{text:"设置",position:"center"},content:{text:"",html:true},btn:{ok:{enable:false}},drag:true,mask:{clickEvent:{toClose:true}},width:N.settingMiddle.width,height:N.settingMiddle.height,style:`
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
                `}).$shadowRoot.querySelector(".pops-alert-content"),y=S.config.PanelHandlerComponents(),k=y.createSectionContainerItem_select(ne("CookieManager Api","cookie-manager-api","document.cookie",$e.map(g=>({text:g,value:g})),void 0,"操作Cookie的Api函数",g=>{h();})).$el,C=y.createSectionContainerItem_switch(j("解码Cookie值","decode-cookie-value",false,()=>{h();},"对Cookie值进行解码")).$el,_=y.createSectionContainerItem_switch(j("排除Session Cookie","exclude-session-cookie",false,()=>{h();},"过滤掉浏览器会话Cookie")).$el;s.append(b,[k,C,_]);});let h=()=>{s.emit(e,"input");};h();},registerMenu(){const t=this;_e.add({key:"cookie_manager_view",text:"⚙ Cookie管理",autoReload:false,isStoreValue:false,showText(e,i){return e},callback(e){t.showView();}});}},et={init(){this.execController(),s.onReady(()=>{this.execController();});},async execController(){for(let t=0;t<B.$data.matchedRuleList.length;t++){const e=B.$data.matchedRuleList[t],i=e.data.operationMode;R.success(`执行规则：${e.name}`);let n=e.data.execApiName;n==="use-global"&&(n=void 0);const o=new Se(n),l=await o.queryAllCookie();for(let a=0;a<l.length;a++){let r=l[a];const c=r.name,p=e.data.cookieName;let u=false;if(e.data.enableRegExpToMatchCookieName?new RegExp(p,"i").test(c)&&(u=true):c.includes(p)&&(u=true),u){if(i==="delete")o.deleteCookie(r);else if(i.startsWith("extended")){let f=Date.now(),m=720*60*60*1e3,h=m*3,d=m*6,w=m*12,b=m;i==="extended-90"?b=h:i==="extended-180"?b=d:i==="extended-360"&&(b=w);let y=false;if(o.cookieManagerApiName==="document.cookie")r.expirationDate=f+b,y=true;else if(o.cookieManagerApiName==="cookieStore"){let k=r.expires;typeof k=="number"&&k-f<b&&(r.expires=k+b,y=true);}else if(o.cookieManagerApiName==="GM_cookie"||o.cookieManagerApiName==="GM.cookie"){let k=r.expirationDate;typeof k=="number"&&k*1e3-f<b&&(r.expirationDate=k+b/1e3,y=true);}else R.error("未知的cookieManagerApiName",o.cookieManagerApiName);y&&await o.updateCookie(r);}}}}}},tt={id:"view-rule",title:"规则",headerTitle:"Cookie操作规则",views:[{type:"container",text:"",views:[xe("自定义规则","操作Cookie的规则","管理",void 0,false,false,"default",()=>{B.showView();})]},{type:"container",text:"",views:[xe("数据导入","导入自定义规则数据","导入",void 0,false,false,"primary",()=>{B.importRule();}),xe("数据导出","导出自定义规则数据","导出",void 0,false,false,"primary",()=>{B.exportRule("CookieManagerRule.json");})]}]},ot={id:"view-general",title:"通用",views:[{text:"Toast配置",type:"container",views:[ne("Toast位置",U.qmsg_config_position.key,U.qmsg_config_position.defaultValue,[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],t=>{R.info("设置当前Qmsg弹出位置"+t.text);},"Toast显示在页面九宫格的位置"),ne("最多显示的数量",U.qmsg_config_maxnums.key,U.qmsg_config_maxnums.defaultValue,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),j("逆序弹出",U.qmsg_config_showreverse.key,U.qmsg_config_showreverse.defaultValue,void 0,"修改Toast弹出的顺序")]}]};pe.addContentConfig([ot,tt]);D.init();ve.init();B.init();et.init();

})(Qmsg, DOMUtils, pops, Utils, CryptoJS);