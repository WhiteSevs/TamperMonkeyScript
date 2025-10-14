// ==UserScript==
// @name         CookieManager
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.10.14
// @author       WhiteSevs
// @description  简单而强大的Cookie编辑器，允许您快速创建、编辑和删除Cookie
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA/NJREFUeF7tWm1u4jAQjVHusfR3jMQNlp5ky0l2e5K2Jym9ARLO79JzEMgyKF5FqeN5YzuwQPoHqRl/zPObN5NxVHbnf+rO/c9GAEYG3DkCYwjcOQFGETxbCGitF1mWLeq6/qGUmtZ1PW1+t0qpN2PMn0uwcTAA5vP5tKqqp8bhJ8C5R2PMCrBLajIIAFprOs3fkp0eGfFaluVSMiaFbVIAQhy3Tlw1AA3dXyjGQ0/lagFoxO091PGrZkAq5wmEq2NASuevDgCB889HXVjleb6tqmraaASbHeq6ptpgm+f5cr1eb2PDyzdenAUawfsENuXM60VRvBydQ+oCWmJljHkE1go2EQOgtSbB86q9L54FAJIubMuyfAj2DhgoAmA2m1FlR+nO+6eUWm42m9c+IwREO9YYI9ojt7fuc9HkRVF8Uv0OLPLsq+0F82T/DQDCKs8bu1rrGgDxZELh5LKdTCYfPpah88MMkGy6WdwpghL6A054mQaMx/oBaOy3F2xS2ZtNg/SsqqqocrnrUAqRhBggTF0I8MlsYjUCAiCA/skc5CYaHACO/rZq42oDzpHQ55RyXWNRgWQZ0Ef/xvFlu4sjzBShPkPjXPtzDQwGIM/zB1edzjEG2n06I7aUZgFwpS3u1dVX6LSyg83zv8DiKgSWeABczkSUut82ZJun0h4iggaSJhEGuKq20FLXWRylaKm5ABkMAN/Efb0CbjNDCSiXJlkGeOL5GwuYk/TG4xDiyYFOrGEB8NXuVtCoe0M3Pb445jbDVZs0/rRhpegX7T4nEUFJB8erTX3iyTVJulkHFU4uW6EMEN/y9KFgGdPuFQAC2HuK3JtlKgCIbtF9f8ebom12euncV3DRfFxzlkvXEAM4eiL5OMbGp+Lc3rgMAAHQIM02QmOcZMb23hr7AEDoLwEgeRgIAOstuny1A0J/GACOagJnxKYu4UTiH6E/DAAZpipUQvsHRGlqhDb1Bm3Jd8ME9wrZQsgeGbFgt9u9h765nbN/gJ6+iAGxLDhX/wCNfXuwMANoAFC0OGOcU2TJRQkjImzp2x0vAsCCIA0F7lS4ig5RTu5do28OMQAtJiA3xHbd0P4B4ru1CfrKLAgAqR6E9A8knmdZFuS8WAS7mxI2MaT9AxSDYOejAZBqgqR/wHmPtr25eYJDoD1xbI3AbbL7PFTwXOskAaAljPQBxWBt7r6yWApg2z4ZAO2Kkb4RTtnmHsLxoEJIgjSFxX6/XxwOh5+Cj6L+LdF6Z/gY8kvy5AxwgdQG46S8nc/lm/9RY5U+j/uixid6uSk5lEE1IHYjlxp/FgZcyjlk3REABKVbthkZcMuni/g2MgBB6ZZt/gJwetZfo7objAAAAABJRU5ErkJggg==
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.9.3/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.7.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.5.4/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.5.0/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@886625af68455365e426018ecb55419dd4ea6f30/lib/CryptoJS/index.js
// @connect      *
// @grant        GM.cookie
// @grant        GM_cookie
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

(function (k, O, H, ae, se) {
	'use strict';

	var ce=typeof GM<"u"?GM:void 0,Le=typeof GM_cookie<"u"?GM_cookie:void 0,Me=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,Ce=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,me=typeof GM_getValue<"u"?GM_getValue:void 0,Z=typeof GM_info<"u"?GM_info:void 0,qe=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,ie=typeof GM_setValue<"u"?GM_setValue:void 0,Ne=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Ie=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,G=typeof unsafeWindow<"u"?unsafeWindow:void 0,Oe=window;const Ve="GM_Panel",Re="data-init",j="data-key",K="data-default-value",Ge="data-init-more-value",L="data-storage-api",P={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},q={setting:{get width(){return P.width<550?"88vw":P.width<700?"550px":"700px"},get height(){return P.height<450?"70vh":P.height<550?"450px":"550px"}},settingMiddle:{get width(){return P.width<350?"88vw":"350px"},get height(){return P.height<450?"88vh":"450px"}},info:{get width(){return P.width<350?"88vw":"350px"},get height(){return P.height<250?"88vh":"250px"}}};class Fe{storageKey;listenerData;constructor(e){if(typeof e=="string"){const i=e.trim();if(i=="")throw new Error("key参数不能为空字符串");this.storageKey=i;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new H.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.triggerValueChangeListener=this.triggerValueChangeListener.bind(this);}getLocalValue(){let e=me(this.storageKey);return e==null&&(e={},this.setLocalValue(e)),e}setLocalValue(e){ie(this.storageKey,e);}set(e,i){const n=this.get(e),o=this.getLocalValue();Reflect.set(o,e,i),this.setLocalValue(o),this.triggerValueChangeListener(e,n,i);}get(e,i){const n=this.getLocalValue();return Reflect.get(n,e)??i}getAll(){return this.getLocalValue()}delete(e){const i=this.get(e),n=this.getLocalValue();Reflect.deleteProperty(n,e),this.setLocalValue(n),this.triggerValueChangeListener(e,i,void 0);}has(e){const i=this.getLocalValue();return Reflect.has(i,e)}keys(){const e=this.getLocalValue();return Reflect.ownKeys(e)}values(){const e=this.getLocalValue();return Reflect.ownKeys(e).map(i=>Reflect.get(e,i))}clear(){Me(this.storageKey);}addValueChangeListener(e,i){const n=Math.random(),o=this.listenerData.get(e)||[];return o.push({id:n,key:e,callback:i}),this.listenerData.set(e,o),n}removeValueChangeListener(e){let i=false;for(const[n,o]of this.listenerData.entries()){for(let l=0;l<o.length;l++){const a=o[l];(typeof e=="string"&&a.key===e||typeof e=="number"&&a.id===e)&&(o.splice(l,1),l--,i=true);}this.listenerData.set(n,o);}return i}async triggerValueChangeListener(...e){const[i,n,o]=e;if(!this.listenerData.has(i))return;let l=this.listenerData.get(i);for(let a=0;a<l.length;a++){const r=l[a];if(typeof r.callback=="function"){let s=this.get(i),u,c;typeof n<"u"&&e.length>=2?c=n:c=s,typeof o<"u"&&e.length>2?u=o:u=s,await r.callback(i,c,u);}}}}const z=new Fe(Ve),Ue={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{D.showPanel(ne.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){D.isTopWindow()&&ge.add(this.$data.menuOption);},addMenuOption(t){Array.isArray(t)||(t=[t]),this.$data.menuOption.push(...t);},updateMenuOption(t){Array.isArray(t)||(t=[t]),t.forEach(e=>{let i=this.$data.menuOption.findIndex(n=>n.key===e.key);i!==-1&&(this.$data.menuOption[i]=e);});},getMenuOption(t=0){return this.$data.menuOption[t]},deleteMenuOption(t=0){this.$data.menuOption.splice(t,1);}},Ee={waitRemove(...t){t.forEach(e=>{typeof e=="string"&&O.waitNodeList(e).then(i=>{i.forEach(n=>n.remove());});});},createBlockCSSNode(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(i=>{Array.isArray(i)?e=e.concat(i):e.push(i);}),O.createElement("style",{type:"text/css",innerHTML:`${e.join(`,
`)}{display: none !important;}`})},addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(i=>{Array.isArray(i)?e=e.concat(i):e.push(i);}),$e(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){const e=typeof Ce=="function"?Ce(t.keyName):null;return typeof e=="string"&&e?$e(e):Ee.loadStyleLink(t.url)},async loadStyleLink(t){let e=document.createElement("link");return e.rel="stylesheet",e.type="text/css",e.href=t,new Promise(i=>{O.ready(()=>{document.head.appendChild(e),i(e);});})},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(i=>{e.onload=()=>{i(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.startsWith("data:")||t.match(/^http(s|):\/\//i)?t:t.startsWith("//")?(t.startsWith("///")||(t=window.location.protocol+t),t):(t.startsWith("/")||(t+="/"),t=window.location.origin+t,t)},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;try{let e=new URL(t);return e.protocol="https:",e.toString()}catch{return t}},lockScroll(...t){let e=document.createElement("style");e.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let i=[document.documentElement,document.body].concat(...t||[]);return i.forEach(n=>{n.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(e),{recovery(){i.forEach(n=>{n.classList.remove("pops-overflow-hidden-important");}),e.remove();}}},async getClipboardText(){function t(n){navigator.clipboard.readText().then(o=>{n(o);}).catch(o=>{C.error("读取剪贴板内容失败👉",o),n("");});}function e(n){navigator.permissions.query({name:"clipboard-read"}).then(o=>{t(n);}).catch(o=>{C.error("申请剪贴板权限失败，尝试直接读取👉",o.message??o.name??o.stack),t(n);});}function i(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(n=>{if(!i()){n("");return}document.hasFocus()?e(n):window.addEventListener("focus",()=>{e(n);},{once:true});})},escapeHtml(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(t,e,i=5e3){let n,o=i-e,l=e,a=async r=>{let s=await t(r);if(typeof s=="boolean"&&!s||r){v.workerClearTimeout(n);return}if(l+=e,l>o){a(true);return}n=v.workerSetTimeout(()=>{a(false);},e);};a(false);},findParentNode(t,e,i){if(i){let n=O.closest(t,i);if(n)return n.querySelector(e)}else return O.matches(t,e)?t:O.closest(t,e)}},D={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new v.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new v.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new v.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new v.Dictionary),this.__onceExecData},get scriptName(){return _e},get panelConfig(){return this.__panelConfig},set panelConfig(t){this.__panelConfig=t;},key:Ve,attributeKeyName:j,attributeDefaultValueName:K},init(){this.initContentDefaultValue(),Ue.init();},isTopWindow(){return G.top===G.self},initContentDefaultValue(){const t=n=>{if(!n.attributes||n.type==="button"||n.type==="forms"||n.type==="deepMenu")return;const o=n.attributes;let l=o[Re];if(typeof l=="function"){let u=l();if(typeof u=="boolean"&&!u)return}let a=new Map,r=o[j];if(r!=null){const u=o[K];a.set(r,u);}let s=o[Ge];if(typeof s=="object"&&s&&Object.keys(s).forEach(u=>{a.set(u,s[u]);}),!a.size){C.warn(["请先配置键",n]);return}if(n.type==="switch"){let u=typeof n.disabled=="function"?n.disabled():n.disabled;typeof u=="boolean"&&u&&this.$data.contentConfigInitDisabledKeys.push(...a.keys());}for(const[u,c]of a.entries())this.setDefaultValue(u,c);},e=n=>{for(let o=0;o<n.length;o++){let l=n[o];t(l);let a=l.forms;a&&Array.isArray(a)&&e(a);}},i=[...ne.getAllContentConfig()];for(let n=0;n<i.length;n++){let o=i[n];if(!o.forms)continue;const l=o.forms;l&&Array.isArray(l)&&e(l);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(t,e){this.$data.contentConfigInitDefaultValue.has(t)&&C.warn("请检查该key(已存在): "+t),this.$data.contentConfigInitDefaultValue.set(t,e);},getDefaultValue(t){return this.$data.contentConfigInitDefaultValue.get(t)},setValue(t,e){z.set(t,e);},getValue(t,e){let i=z.get(t);return i??(this.$data.contentConfigInitDefaultValue.has(t)?this.$data.contentConfigInitDefaultValue.get(t):e)},deleteValue(t){z.delete(t);},hasKey(t){return z.has(t)},addValueChangeListener(t,e){return z.addValueChangeListener(t,(n,o,l)=>{e(t,l,o);})},removeValueChangeListener(t){z.removeValueChangeListener(t);},triggerMenuValueChange(t,e,i){z.triggerValueChangeListener(t,i,e);},exec(t,e,i,n=true){const o=this;let l;typeof t=="string"||Array.isArray(t)?l=()=>t:l=t;let a=false;const r=l();let s=[];Array.isArray(r)?(a=true,s=r):s.push(r);const u=s.find(x=>!this.$data.contentConfigInitDefaultValue.has(x));if(u){C.warn(`${u} 键不存在`);return}const c=JSON.stringify(s);if(n&&this.$data.onceExecMenuData.has(c))return this.$data.onceExecMenuData.get(c);let d=[];const m=[];let h=[];const f=(x,M)=>{let V=[],R=[],_=[];if(Array.isArray(M))_=_.concat(M);else if(typeof M=="object"&&M!=null){const{$css:$,destory:N}=M;$!=null&&(Array.isArray($)?_=_.concat($):_.push($)),typeof N=="function"&&_.push(N);}else _.push(M);for(const $ of _)if($!=null){if($ instanceof Element){V.push($);continue}if(typeof $=="function"){h.push($);continue}}x?(d=d.concat(V),h=h.concat(R)):(y(),w());},g=x=>this.getValue(x),y=()=>{for(let x=0;x<d.length;x++)d[x]?.remove(),d.splice(x,1),x--;},w=()=>{for(let x=0;x<h.length;x++){const M=h[x];M(),h.splice(x,1),x--;}},b=()=>{let x=false;return typeof i=="function"?x=i(s):x=s.every(M=>g(M)),x},E=x=>{if(b()){const V=s.map(_=>this.getValue(_)),R=e({value:a?V:V[0],addStoreValue:(..._)=>f(true,_)});f(true,R);}else f(false,[]);};n&&s.forEach(x=>{const M=this.addValueChangeListener(x,(V,R,_)=>E());m.push(M);}),E();const A={reload(){E();},clear(){this.clearStoreStyleElements(),this.destory(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreStyleElements:()=>y(),destory(){return w()},removeValueChangeListener:()=>{m.forEach(x=>{this.removeValueChangeListener(x);});},clearOnceExecMenuData(){n&&o.$data.onceExecMenuData.delete(c);}};return this.$data.onceExecMenuData.set(c,A),A},execMenu(t,e,i=false,n=false){return this.exec(t,o=>e(o),o=>o.every(a=>{let r=!!this.getValue(a);return D.$data.contentConfigInitDisabledKeys.includes(a)&&(r=false,C.warn(`.execMenu${n?"Once":""} ${a} 被禁用`)),i&&(r=!r),r}),n)},execMenuOnce(t,e,i=false,n=false){const o=this.execMenu(t,e,i,true);if(n&&o){const l=()=>{o.reload();};this.removeUrlChangeWithExecMenuOnceListener(t),this.addUrlChangeWithExecMenuOnceListener(t,l);const a=o.clear;o.clear=()=>{a(),this.removeUrlChangeWithExecMenuOnceListener(t);};}return o},deleteExecMenuOnce(t){return t=this.transformKey(t),this.$data.onceExecMenuData.delete(t),this.$data.urlChangeReloadMenuExecOnce.delete(t),z.removeValueChangeListener(t)},onceExec(t,e){if(t=this.transformKey(t),typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(t)||(e(),this.$data.onceExecData.set(t,1));},deleteOnceExec(t){t=this.transformKey(t),this.$data.onceExecData.delete(t);},addUrlChangeWithExecMenuOnceListener(t,e){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.set(t,e);},removeUrlChangeWithExecMenuOnceListener(t){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.delete(t);},triggerUrlChangeWithExecMenuOnceEvent(t){this.$data.urlChangeReloadMenuExecOnce.forEach((e,i)=>{e(t);});},showPanel(t,e=`${_e}-设置`,i=false,n=false){this.$data.$panel=null,this.$data.panelContent=[];let o=t.findIndex(a=>(typeof a.isBottom=="function"?a.isBottom():!!a.isBottom)&&a.id==="script-version")!==-1;!i&&!o&&t.push(...ne.getDefaultBottomContentConfig());let l=S.panel({title:{text:e,position:"center",html:false,style:""},content:t,btn:{close:{enable:true,callback:(a,r)=>{a.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(a,r)=>{a(),this.$data.$panel=null;}},width:q.setting.width,height:q.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=l,this.$data.panelContent=t,n||this.registerConfigSearch({$panel:l,content:t});},registerConfigSearch(t){const{$panel:e,content:i}=t;let n=async(c,d)=>{if(c==null)return;let m=await d(c);return m&&typeof m.isFind=="boolean"&&m.isFind?m.data:await n(m.data,d)},o=(c,d)=>{const m=new IntersectionObserver(h=>{h.forEach(f=>{f.isIntersecting&&(d?.(),m.disconnect());});},{root:null,threshold:1});m.observe(c),c.scrollIntoView({behavior:"smooth",block:"center"});},l=c=>{const d="pops-flashing";p.animationend(c,()=>{c.classList.remove(d);}),c.classList.add(d);},a=(c,d)=>{p.preventEvent(c);let m=S.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:q.settingMiddle.width,height:"auto",drag:true,style:`
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
				`});m.$shadowRoot.querySelector(".search-wrapper");let h=m.$shadowRoot.querySelector(".search-config-text"),f=m.$shadowRoot.querySelector(".search-result-wrapper");h.focus();let g=()=>{p.empty(f);},y=b=>{const E=v.queryProperty(b,x=>x?.next?{isFind:false,data:x.next}:{isFind:true,data:x});let A=p.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${E.matchedData?.path}</div>
							<div class="search-result-item-description">${E.matchedData?.description??""}</div>
						`});return p.on(A,"click",x=>{let V=e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[b.index];if(!V){k.error(`左侧项下标${b.index}不存在`);return}V.scrollIntoView({behavior:"smooth",block:"center"}),V.click(),n(b.next,async R=>{if(R?.next){let _=await p.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find($=>{const N=Reflect.get($,"__formConfig__");return typeof N=="object"&&N!=null&&N.text===R.name}),2500);if(_)_.click();else return k.error("未找到对应的二级菜单"),{isFind:true,data:R};return {isFind:false,data:R.next}}else {let _=await p.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find($=>Reflect.get($,"__formConfig__")===R.matchedData?.formConfig),2500);if(_){o(_);let $=_.closest(".pops-panel-forms-fold[data-fold-enable]");$&&($.querySelector(".pops-panel-forms-fold-container").click(),await v.sleep(500)),o(_,()=>{l(_);});}else k.error("未找到对应的菜单项");return {isFind:true,data:R}}});}),A},w=b=>{const E=new RegExp(b,"i"),A=[],x=(V,R)=>{for(let _=0;_<V.length;_++){const $=V[_];let N=$.forms;if(N&&Array.isArray(N)){const Y=v.deepClone(R);if($.type==="deepMenu"){const ee=v.queryProperty(Y,W=>W?.next?{isFind:false,data:W.next}:{isFind:true,data:W});ee.next={name:$.text};}x(N,Y);}else {let Y=Reflect.get($,"text"),ee=Reflect.get($,"description");const W=[Y,ee];let ke=W.findIndex(J=>{if(typeof J=="string")return J.match(E)});if(ke!==-1){const J=v.deepClone(R),be=v.queryProperty(J,U=>U?.next?{isFind:false,data:U.next}:{isFind:true,data:U});be.next={name:Y,matchedData:{path:"",formConfig:$,matchedText:W[ke],description:ee}};const ve=[];v.queryProperty(J,U=>{const le=U?.name;return typeof le=="string"&&le.trim()!==""&&ve.push(le),U?.next?{isFind:false,data:U.next}:{isFind:true,data:U}});const Te=ve.join(Ee.escapeHtml(" - "));be.next.matchedData.path=Te,A.push(J);}}}};for(let V=0;V<i.length;V++){const R=i[V];if(!R.forms||R.isBottom&&R.id==="script-version")continue;const _=R.forms;if(_&&Array.isArray(_)){let $=R.title;typeof $=="function"&&($=$()),x(_,{index:V,name:$});}}let M=document.createDocumentFragment();for(const V of A){let R=y(V);M.appendChild(R);}g(),f.append(M);};p.on(h,"input",v.debounce(b=>{p.preventEvent(b);let E=p.val(h).trim();if(E===""){g();return}w(E);},200));},r=null,s=false,u;p.on(e.$shadowRoot,"dblclick","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",a),p.on(e.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(c,d)=>{clearTimeout(u),u=void 0,s&&r===d?(s=false,r=null,a(c)):(u=setTimeout(()=>{s=false;},200),s=true,r=d);},{capture:true}),e.$shadowRoot.appendChild(p.createElement("style",{type:"text/css",textContent:`
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
				`}));},transformKey(t){if(Array.isArray(t)){const e=t.sort();return JSON.stringify(e)}else return t}},I={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},v=H.noConflict(),p=O.noConflict(),S=ae,C=new v.Log(Z,G.console||Oe.console);let _e=Z?.script?.name||void 0;ae.config.Utils.AnyTouch();const Pe=false;C.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});k.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(t){const e=t.getSetting().type;if(e==="loading")return  false;const i=t.getSetting().content;return e==="warning"?C.warn(i):e==="error"?C.error(i):C.info(i),true},get position(){return D.getValue(I.qmsg_config_position.key,I.qmsg_config_position.defaultValue)},get maxNums(){return D.getValue(I.qmsg_config_maxnums.key,I.qmsg_config_maxnums.defaultValue)},get showReverse(){return D.getValue(I.qmsg_config_showreverse.key,I.qmsg_config_showreverse.defaultValue)},get zIndex(){let t=H.getMaxZIndex(),e=ae.config.InstanceUtils.getPopsMaxZIndex().zIndex;return H.getMaxValue(t,e)+100}});S.GlobalConfig.setGlobalConfig({zIndex:()=>{let t=H.getMaxZIndex(void 0,void 0,i=>{if(i?.classList?.contains("qmsg-shadow-container")||i?.closest("qmsg")&&i.getRootNode()instanceof ShadowRoot)return  false}),e=ae.config.InstanceUtils.getPopsMaxZIndex().zIndex;return H.getMaxValue(t,e)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const ge=new v.GM_Menu({GM_getValue:me,GM_setValue:ie,GM_registerMenuCommand:qe,GM_unregisterMenuCommand:Ne}),xe=new v.Httpx({xmlHttpRequest:Ie,logDetails:Pe});xe.interceptors.request.use(t=>t);xe.interceptors.response.use(void 0,t=>(C.error("拦截器-请求错误",t),t.type==="onabort"?k.warning("请求取消",{consoleLogContent:true}):t.type==="onerror"?k.error("请求异常",{consoleLogContent:true}):t.type==="ontimeout"?k.error("请求超时",{consoleLogContent:true}):k.error("其它错误",{consoleLogContent:true}),t));G.Object.defineProperty,G.Function.prototype.apply,G.Function.prototype.call,G.Element.prototype.appendChild,G.setTimeout;const $e=p.addStyle.bind(p);O.selector.bind(O);O.selectorAll.bind(O);const Ae=new v.GM_Cookie,ne={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new v.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(t){Array.isArray(t)||(t=[t]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,t);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(t=0){return this.$data.contentConfig.get(t)??[]},getDefaultBottomContentConfig(){return this.$data.__defaultBottomContentConfig.length?this.$data.__defaultBottomContentConfig:[{id:"script-version",title:`版本：${Z?.script?.version||"未知"}`,isBottom:true,forms:[],clickFirstCallback(t,e,i){let n=Z?.script?.supportURL||Z?.script?.namespace;return typeof n=="string"&&v.isNotNull(n)&&window.open(n,"_blank"),false}}]},setDefaultBottomContentConfig(t){this.$data.__defaultBottomContentConfig=t;}};let De=t=>{(typeof t=="object"&&t!=null||typeof t=="function")&&Object.keys(t).forEach(e=>{typeof t[e]=="function"&&(t[e]=t[e].bind(t));});};const oe=Le;De(oe);De(Ae);const we=["document.cookie","cookieStore","GM_cookie","GM.cookie"];class ye{__apiName;constructor(e){if(typeof e=="string"&&!we.includes(e))throw new Error(`未知的apiName：${e}`);this.__apiName=e;}get cookieManagerApiName(){let e=D.getValue("cookie-manager-api","document.cookie");return this.__apiName||e}get cookieManager(){if(this.cookieManagerApiName==="GM_cookie")return {list(e,i){oe.list(e,n=>{i(n);});},set(e,i){oe.set(e,n=>{i(n);});},delete(e,i){oe.delete(e,n=>{i(n);});}};if(this.cookieManagerApiName==="GM.cookie")return {list(e,i){ce.cookie.list().then(n=>{i(n);});},set(e,i){ce.cookie.set(e).then(n=>{i(n??null);}).catch(n=>{i(n);});},delete(e,i){ce.cookie.delete(e).then(n=>{i(n??null);}).catch(n=>{i(n);});}};if(this.cookieManagerApiName==="cookieStore"){let e=G.cookieStore;return {list(i,n){e.getAll().then(o=>{n(o);}).catch(o=>{C.error(o),k.error(o.toString());});},set(i,n){e.set(i).then(()=>{n();}).catch(o=>{n(o);});},delete(i,n){e.delete(i).then(o=>{n();}).catch(o=>{n(o);});}}}else return Ae}queryAllCookie(){return new Promise((e,i)=>{try{this.cookieManager.list({},n=>{let o=n||[];o=o.sort((l,a)=>l.name.localeCompare(a.name)),e(o);});}catch(n){C.error(n),k.error(n.toString()),i(n);}})}deleteAllCookie(){return new Promise((e,i)=>{try{this.cookieManager.list({},async n=>{const o=n||[],l={success:0,error:0};for(let a=0;a<o.length;a++){const r=o[a];await new Promise(u=>{this.deleteCookie(r).then(c=>{u(c);});})?l.error++:l.success++;}e(l);});}catch(n){C.error(n),k.error(n.toString()),i(n);}})}addCookie(e){return new Promise((i,n)=>{try{Reflect.deleteProperty(e,"hostOnly"),this.cookieManager.set(e,o=>{i(o);});}catch(o){C.error(o),k.error(o.toString()),n(o);}})}deleteCookie(e){return new Promise((i,n)=>{try{this.cookieManager.delete(e,o=>{i(o);});}catch(o){C.error(o),k.error(o.toString()),n(o);}})}updateCookie(e){return new Promise(async(i,n)=>{let o;try{if(this.cookieManagerApiName==="document.cookie"||this.cookieManagerApiName==="cookieStore"){let a=await this.deleteCookie(e);if(a)throw new TypeError(a.toString())}let l=await this.addCookie(e);if(l)throw new TypeError(l.toString())}catch(l){o=l;}finally{i(o);}})}}const T=new ye,re={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new H.Dictionary),this.__storeApiFn}},getStorageApi(t){if(this.hasStorageApi(t))return this.$data.storeApiValue.get(t)},hasStorageApi(t){return this.$data.storeApiValue.has(t)},setStorageApi(t,e){this.$data.storeApiValue.set(t,e);},initComponentsStorageApi(t,e,i){let n;this.hasStorageApi(t)?n=this.getStorageApi(t):n=i,this.setComponentsStorageApiProperty(e,n);},setComponentsStorageApiProperty(t,e){Reflect.set(t.props,L,e);}},B=function(t,e,i,n,o,l,a,r){let s={text:t,type:"switch",description:o,disabled:a,attributes:{},props:{},getValue(){return this.props[L].get(e,i)},callback(u,c){let d=!!c;if(C.success(`${d?"开启":"关闭"} ${t}`),typeof n=="function"&&n(u,d))return;this.props[L].set(e,d);},afterAddToUListCallBack:l};return Reflect.set(s.attributes,j,e),Reflect.set(s.attributes,K,i),re.initComponentsStorageApi("switch",s,{get(u,c){return D.getValue(u,c)},set(u,c){D.setValue(u,c);}}),s},Se={beforeEdit(t,e){const i=T.cookieManagerApiName;return i==="cookieStore"?typeof t.expires=="number"&&(t.expirationDate=t.expires):(i==="GM_cookie"||i==="GM.cookie")&&e&&typeof t.expirationDate=="number"&&(t.expirationDate=t.expirationDate*1e3),t},afterEdit(t){const e=T.cookieManagerApiName;return e==="document.cookie"?t.domain="":e==="cookieStore"?typeof t.expirationDate=="number"&&(t.expires=t.expirationDate):(e==="GM_cookie"||e==="GM.cookie")&&typeof t.expirationDate=="number"&&(t.expirationDate=Math.floor(t.expirationDate/1e3)),t}};let te=(t,e,i,n)=>({text:t,type:"input",isNumber:false,isPassword:false,props:{},attributes:{},description:"",getValue(){return e()},callback(l,a){i(a);},placeholder:"",disabled:!!n}),ze=(t,e,i,n)=>({text:t,type:"textarea",props:{},attributes:{},description:"",placeholder:"",getValue(){return e()},disabled:n,callback:function(l,a){i(a);}}),pe=(t,e,i,n,o)=>({text:t,type:"select",description:"",attributes:{},props:{},getValue(){return i()},callback(a,r,s){n(r);},data:typeof e=="function"?e():e,disabled:false});const fe={init(){},showView(t,e){let i=!!t,n={name:"",value:"",domain:window.location.hostname,path:"/",secure:false,session:false,hostOnly:false,httpOnly:false,sameSite:"lax",expirationDate:Date.now()+3600*24*30*1e3},o=v.assign({},n,true);v.assign(o,t??{},true),o=Se.beforeEdit(o,i);let a=S.confirm({title:{text:i?"编辑Cookie":"添加Cookie",position:"center"},content:{text:"",html:true},drag:true,btn:{position:"center",ok:{text:i?"编辑":"添加",async callback(w,b){if(fe.validCookieInfo(o)){if(o.value=encodeURIComponent(o.value),o=Se.afterEdit(o),i){let A=await T.updateCookie(o);A?k.error(A.toString()):(k.success("修改成功"),w.close());}else {let A=await T.addCookie(o);A?k.error(A.toString()):(k.success("添加成功"),w.close());}typeof e=="function"&&e(o);}}},cancel:{text:"取消"}},mask:{enable:true},width:q.settingMiddle.width,height:"auto",style:`
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
            `}).$shadowRoot.querySelector(".pops-confirm-content"),r=S.config.PanelHandlerComponents(),s=r.createSectionContainerItem_input(te("name",()=>o.name,w=>o.name=w,i)),u=r.createSectionContainerItem_textarea(ze("value",()=>o.value,w=>o.value=w)),c=r.createSectionContainerItem_input(te("domain",()=>o.domain,w=>o.domain=w)),d=r.createSectionContainerItem_input(te("path",()=>o.path,w=>o.path=w)),m;o.session?m=r.createSectionContainerItem_input(te("expires",()=>"会话",w=>{},true)):m=r.createSectionContainerItem_own({type:"own",getLiElementCallBack:function(w){let b=p.createElement("li",{innerHTML:`
							<div class="pops-panel-item-left-text">
								<p class="pops-panel-item-left-main-text">expires</p>
							</div>
							<div class="pops-panel-item-right-wrapper">
								<input type="datetime-local" id="cookie-item-property-expires">
							</div>
						`}),E=b.querySelector("#cookie-item-property-expires");return E.valueAsNumber=o.expirationDate,p.on(E,["change","input","propertychange"],A=>{p.preventEvent(A),o.expirationDate=E.valueAsNumber;}),b}});let h=r.createSectionContainerItem_select(pe("httpOnly",[{text:"true",value:true},{text:"false",value:false}],()=>o.httpOnly,w=>o.httpOnly=w)),f=r.createSectionContainerItem_select(pe("secure",[{text:"true",value:true},{text:"false",value:false}],()=>o.secure,w=>o.secure=w)),g=[{text:"no_restriction",value:"no_restriction"},{text:"lax",value:"lax"},{text:"strict",value:"strict"},{text:"unspecified",value:"unspecified"}];T.cookieManagerApiName==="cookieStore"&&(g=[{text:"lax",value:"lax"},{text:"strict",value:"strict"},{text:"none",value:"none"}]);let y=r.createSectionContainerItem_select(pe("sameSite",g,()=>o.sameSite,w=>o.sameSite=w));p.append(a,[s,u]),T.cookieManagerApiName==="GM_cookie"||T.cookieManagerApiName==="GM.cookie"?p.append(a,[c,d,m,h,f,y]):T.cookieManagerApiName==="cookieStore"&&p.append(a,[c,d,m,y]);},validCookieInfo(t){return t.name==null||t.name==""?(k.error("name不能为空"),false):t.domain==null||t.domain==""?(k.error("domain不能为空"),false):t.path==null||t.path==""?(k.error("path不能为空"),false):true}},X=function(t,e,i,n,o,l,a){let r=[];typeof n=="function"?r=n():r=n;let s={text:t,type:"select",description:l,attributes:{},props:{},getValue(){return this.props[L].get(e,i)},callback(u,c,d){let m=c;if(C.info(`选择：${d}`),typeof o=="function"&&o(u,m,d))return;this.props[L].set(e,m),typeof a=="function"&&a(u,m,d);},data:r};return Reflect.set(s.attributes,j,e),Reflect.set(s.attributes,K,i),re.initComponentsStorageApi("select",s,{get(u,c){return D.getValue(u,c)},set(u,c){D.setValue(u,c);}}),s},ue=function(t,e,i,n,o,l="",a,r,s,u){let c={text:t,type:"input",isNumber:false,isPassword:false,attributes:{},props:{},description:n,afterAddToUListCallBack:s,getValue(){return this.props[L].get(e,i)},callback(d,m,h){this.props[L].set(e,m);},placeholder:l};return Reflect.set(c.attributes,j,e),Reflect.set(c.attributes,K,i),re.initComponentsStorageApi("input",c,{get(d,m){return D.getValue(d,m)},set(d,m){D.setValue(d,m);}}),c},Be=function(t,e,i,n,o,l="",a,r){let s={text:t,type:"textarea",attributes:{},props:{},description:n,placeholder:l,disabled:a,getValue(){let c=this.props[L].get(e,i);return Array.isArray(c)?c.join(`
`):c},callback(u,c){this.props[L].set(e,c);}};return Reflect.set(s.attributes,j,e),Reflect.set(s.attributes,K,i),re.initComponentsStorageApi("switch",s,{get(u,c){return D.getValue(u,c)},set(u,c){D.setValue(u,c);}}),s};class He{option;constructor(e){this.option=e;}async showView(){let e=S.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist"></ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:true},btn:v.assign({ok:{callback:async()=>{await l();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
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
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),i=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");let n=e.$shadowRoot.querySelector(".rule-form-ulist"),o=await this.option.getView(await this.option.data());n.appendChild(o);const l=async()=>{(await this.option.onsubmit(i,await this.option.data())).success&&(e.close(),await this.option.dialogCloseCallBack(true));};}}class je{option;$data={isFilteredData:[]};constructor(e){this.option=e;}showView(){let e=S.alert({title:{text:this.option.title,position:"center"},content:{text:`
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
            `}),i=e.$shadowRoot.querySelector(".filter-container"),n=document.createDocumentFragment();this.option.filterOption.forEach(o=>{let l=p.createElement("button",{innerText:o.name},{type:"button"}),a=async()=>{this.$data.isFilteredData=[],(await this.option.getAllRuleInfo()).forEach(async s=>{await o.filterCallBack(s.data)?p.show(s.$el,false):(p.hide(s.$el,false),this.$data.isFilteredData.push(s.data));}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),e.close();};p.on(l,"click",async r=>{p.preventEvent(r),!(typeof o.callback=="function"&&!await o.callback(r,a))&&await a();}),n.appendChild(l);}),i.appendChild(n);}getFilteredData(){return this.$data.isFilteredData}}class Ke{option;constructor(e){this.option=e;}async showView(e){let i=S.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:true},btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async a=>{this.showEditView(false,await this.option.getAddData(),i.$shadowRoot);}},close:{enable:true,callback(a){i.close();}},cancel:{enable:this.option?.bottomControls?.filter?.enable||false,type:"default",text:"过滤",callback:async(a,r)=>{if(typeof this.option?.bottomControls?.filter?.callback=="function"){let c=await this.option.bottomControls.filter.callback();if(typeof c=="boolean"&&!c)return}let s=()=>Array.from(i.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),u=r.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");if(p.text(u).includes("取消")){let c=await this.option?.bottomControls?.filter?.cancelFilterCallback?.({$button:u,getAllRuleElement:s});if(typeof c=="boolean"&&!c)return;s().forEach(d=>{p.show(d,false);}),p.text(u,"过滤");}else {let c=new je({title:this.option.bottomControls?.filter?.title??"过滤规则",filterOption:this.option.bottomControls?.filter?.option||[],execFilterCallBack:async()=>{p.text(u,"取消过滤"),await this.option.bottomControls?.filter?.execFilterCallBack?.();const d=c.getFilteredData();d.length&&p.text(u,`取消过滤(${d.length})`);},getAllRuleInfo:()=>s().map(d=>({data:this.parseRuleItemElement(d).data,$el:d}))});c.showView();}}},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:a=>{let r=S.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async s=>{if(C.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){k.error("清理失败");return}else k.success("清理成功");await this.updateDeleteAllBtnText(i.$shadowRoot),this.clearContent(i.$shadowRoot),r.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
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
            `}),n=await this.option.data(),o=false,l=0;for(let a=0;a<n.length;a++){let r=n[a],s=await this.appendRuleItemElement(i.$shadowRoot,r),u=true;typeof e=="function"?u=e(r):typeof e=="number"&&!isNaN(e)&&(u=await this.option.bottomControls?.filter?.option[e]?.filterCallBack(r)??u),u||(o=true,p.hide(s,false),l++);}if(o){let a=i.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");p.text(a,`取消过滤${l?`(${l})`:""}`);}}showEditView(e,i,n,o,l,a){let r=async u=>{if(u){if(typeof a=="function"){let c=await this.option.getData(i);a(c);}}else if(e||await this.option.deleteData(i),typeof l=="function"){let c=await this.option.getData(i);l(c);}};new He({title:e?"编辑":"添加",data:()=>i,dialogCloseCallBack:r,getView:async u=>await this.option.itemControls.edit.getView(u,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async(u,c)=>{u.close(),await r(false);}},close:{callback:async(u,c)=>{u.close(),await r(false);}}},onsubmit:async(u,c)=>{let d=await this.option.itemControls.edit.onsubmit(u,e,c);return d.success?e?(k.success("修改成功"),n&&await this.updateRuleItemElement(d.data,o,n)):n&&await this.appendRuleItemElement(n,d.data):e&&C.error("修改失败"),d},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(e){let i=e.querySelector(".rule-view-container"),n=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:i,$deleteBtn:n}}parseRuleItemElement(e){let i=e.querySelector(".rule-controls-enable"),n=i.querySelector(".pops-panel-switch"),o=i.querySelector(".pops-panel-switch__input"),l=i.querySelector(".pops-panel-switch__core"),a=e.querySelector(".rule-controls-edit"),r=e.querySelector(".rule-controls-delete");return {$enable:i,$enableSwitch:n,$enableSwitchInput:o,$enableSwitchCore:l,$edit:a,$delete:r,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,i){let n=await this.option.getDataItemName(e),o=p.createElement("div",{className:"rule-item",innerHTML:`
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
			`});Reflect.set(o,"data-rule",e);let l="pops-panel-switch-is-checked";const{$enable:a,$enableSwitch:r,$enableSwitchCore:s,$enableSwitchInput:u,$delete:c,$edit:d}=this.parseRuleItemElement(o);return this.option.itemControls.enable.enable?(p.on(s,"click",async m=>{let h=false;r.classList.contains(l)?(r.classList.remove(l),h=false):(r.classList.add(l),h=true),u.checked=h,await this.option.itemControls.enable.callback(e,h);}),await this.option.itemControls.enable.getEnable(e)&&r.classList.add(l)):a.remove(),this.option.itemControls.edit.enable?p.on(d,"click",m=>{p.preventEvent(m),this.showEditView(true,e,i,o,h=>{e=null,e=h;});}):d.remove(),this.option.itemControls.delete.enable?p.on(c,"click",m=>{p.preventEvent(m);let h=S.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async f=>{C.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(k.success("成功删除该数据"),o.remove(),await this.updateDeleteAllBtnText(i),h.close()):k.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):c.remove(),o}async appendRuleItemElement(e,i){let{$container:n}=this.parseViewElement(e),o=[],l=Array.isArray(i)?i:[i];for(let a=0;a<l.length;a++){let r=l[a],s=await this.createRuleItemElement(r,e);n.appendChild(s),o.push(s);}return await this.updateDeleteAllBtnText(e),o}async updateRuleContaienrElement(e){this.clearContent(e);const{$container:i}=this.parseViewElement(e);let n=await this.option.data();await this.appendRuleItemElement(e,n),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,i,n){let o=await this.createRuleItemElement(e,n);i.after(o),i.remove();}clearContent(e){const{$container:i}=this.parseViewElement(e);p.html(i,"");}setDeleteBtnText(e,i,n=false){const{$deleteBtn:o}=this.parseViewElement(e);n?p.html(o,i):p.text(o,i);}async updateDeleteAllBtnText(e){let i=await this.option.data();this.setDeleteBtnText(e,`清空所有(${i.length})`);}}const F={$key:{STORAGE_KEY:"cookie-rule"},$data:{matchedRuleList:[]},init(){this.$data.matchedRuleList.length=0,this.$data.matchedRuleList=this.getMatchedRuleList(),this.$data.matchedRuleList.length&&ge.add({key:"matched-cookie-rule-list",text:`${window.location.hostname} ${this.$data.matchedRuleList.length}条规则`,isStoreValue:false,autoReload:false,showText(t,e){return t},callback(t){console.log(F.$data.matchedRuleList),alert(`以下是命中的规则名：
`+F.$data.matchedRuleList.map(e=>e.name).join(`
`));}});},getMatchedRuleList(t=window.location.href){const e=this.getData(),i=[];return e.forEach(n=>{if(!n.enable)return;let o=window.location.href,l=n.data.url;if(n.data.enableRegExpToMatchUrl){if(!new RegExp(l,"i").test(o))return}else if(!o.includes(l))return;i.push(n);}),i},showView(){let t=S.config.PanelHandlerComponents();function e(o,l){return {get(a,r){return Reflect.get(o,a)??r},set(a,r){Reflect.set(o,a,r);}}}const i=this.getMatchedRuleList();new Ke({title:"Cookie规则",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:o=>o.name,updateData:o=>this.updateData(o),deleteData:o=>this.deleteData(o),getData:o=>this.getData().find(r=>r.uuid===o.uuid)??o,itemControls:{enable:{enable:true,getEnable(o){return o.enable},callback:(o,l)=>{o.enable=l,this.updateData(o);}},edit:{enable:true,getView:(o,l)=>{let a=document.createDocumentFragment(),r=this.getTemplateData();l||(o=r);let s=B("启用","enable",r.enable);Reflect.set(s.props,L,e(o));let u=t.createSectionContainerItem_switch(s),c=ue("规则名称","name","",r.name,void 0,"必填");Reflect.set(c.props,L,e(o));let d=t.createSectionContainerItem_input(c),m=X("Cookie管理Api","execApiName",r.data.execApiName,[{text:"（当前）"+T.cookieManagerApiName,value:"use-global"},...we.map($=>({text:$,value:$}))],void 0,"操作Cookie的Api函数");Reflect.set(m.props,L,e(o.data));let h=t.createSectionContainerItem_select(m),f=ue("网址","url",r.data.url,"用于执行该规则的网址",void 0,"必填");Reflect.set(f.props,L,e(o.data));let g=t.createSectionContainerItem_input(f),y=B("启用正则匹配网址","enableRegExpToMatchUrl",r.data.enableRegExpToMatchUrl);Reflect.set(y.props,L,e(o.data));let w=t.createSectionContainerItem_switch(y),b=ue("Cookie名称","cookieName",r.data.cookieName,"用于匹配执行操作的Cookie名",void 0,"必填");Reflect.set(b.props,L,e(o.data));let E=t.createSectionContainerItem_input(b),A=B("启用正则匹配Cookie名称","enableRegExpToMatchCookieName",r.data.enableRegExpToMatchCookieName);Reflect.set(A.props,L,e(o.data));let x=t.createSectionContainerItem_switch(A),M=X("操作模式","operationMode",r.data.operationMode,[{value:"delete",text:"删除Cookie"},{value:"extended",text:"自动延长Cookie有效期30天"},{value:"extended-90",text:"自动延长Cookie有效期90天"},{value:"extended-180",text:"自动延长Cookie有效期180天"},{value:"extended-360",text:"自动延长Cookie有效期360天"}]);Reflect.set(M.props,L,e(o.data));let V=t.createSectionContainerItem_select(M),R=Be("备注","remark",r.data.remark);Reflect.set(R.props,L,e(o.data));let _=t.createSectionContainerItem_textarea(R);return a.append(u,d,h,g,w,E,x,V,_),a},onsubmit:(o,l,a)=>{let r=o.querySelectorAll(".rule-form-ulist > li"),s=this.getTemplateData();l&&(s.uuid=a.uuid);try{return r.forEach(u=>{let c=Reflect.get(u,"__formConfig__"),d=Reflect.get(c,"attributes"),m=Reflect.get(u,L),h=Reflect.get(d,j),f=Reflect.get(d,K),g=m.get(h,f);Reflect.has(s,h)?Reflect.set(s,h,g):Reflect.has(s.data,h)?Reflect.set(s.data,h,g):C.error(`${h}不在数据中`);}),s.name.trim()===""?(k.error("规则名称不能为空"),{success:!1,data:s}):s.data.url.trim()===""?(k.error("网址不能为空"),{success:!1,data:s}):s.data.cookieName.trim()===""?(k.error("Cookie名称不能为空"),{success:!1,data:s}):l?{success:this.updateData(s),data:s}:{success:this.addData(s),data:s}}catch(u){return C.error(u),{success:false,data:s}}finally{this.init();}},style:`
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
                    `},delete:{enable:true,deleteCallBack:o=>this.deleteData(o)}},bottomControls:{filter:{enable:true,option:[{name:"过滤-已启用",filterCallBack(o){return o.enable}},{name:"过滤-未启用",filterCallBack(o){return !o.enable}},{name:"过滤-当前网站执行",filterCallBack(o){return i.some(l=>l.uuid===o.uuid)}}]}}}).showView();},getTemplateData(){return {uuid:v.generateUUID(),enable:true,name:"",data:{url:"",execApiName:"use-global",enableRegExpToMatchUrl:false,cookieName:"",enableRegExpToMatchCookieName:false,operationMode:"delete",remark:""}}},getData(){return me(this.$key.STORAGE_KEY,[])},setData(t){ie(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(n=>n.uuid==t.uuid)===-1?(e.push(t),ie(this.$key.STORAGE_KEY,e),true):false},updateData(t){let e=this.getData(),i=e.findIndex(o=>o.uuid==t.uuid),n=false;return i!==-1&&(n=true,e[i]=t),this.setData(e),n},deleteData(t){let e=this.getData(),i=e.findIndex(o=>o.uuid==t.uuid),n=false;return i!==-1&&(n=true,e.splice(i,1)),this.setData(e),n},clearData(){Me(this.$key.STORAGE_KEY);},exportRule(t="rule.json"){let e=this.getData(),i=new Blob([JSON.stringify(e,null,4)]),n=window.URL.createObjectURL(i),o=p.createElement("a");o.href=n,o.download=t,o.click(),setTimeout(()=>{window.URL.revokeObjectURL(n);},1500);},importRule(){let t=S.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
                    <div class="import-mode" data-mode="local">本地导入</div>
                    <div class="import-mode" data-mode="network">网络导入</div>
                `,html:true},width:q.info.width,height:q.info.height,style:`
                .import-mode{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),e=t.$shadowRoot.querySelector(".import-mode[data-mode='local']"),i=t.$shadowRoot.querySelector(".import-mode[data-mode='network']");p.on(e,"click",n=>{p.preventEvent(n),t.close();let o=p.createElement("input",{type:"file",accept:".json"});p.on(o,["propertychange","input"],l=>{if(!o.files?.length)return;let a=o.files[0],r=new FileReader;r.onload=()=>{let s=v.toJSON(r.result);if(!Array.isArray(s)){C.error("不是正确的规则文件",s),k.error("不是正确的规则文件");return}this.setData(s),k.success(`成功导入 ${s.length}条规则`);},r.readAsText(a,"UTF-8");}),o.click();}),p.on(i,"click",n=>{p.preventEvent(n),t.close(),S.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"url",focus:true},btn:{ok:{callback:async(o,l)=>{let a=o.text;if(v.isNull(a)){k.error("请填入完整的url");return}let r=await xe.get(a);if(!r.status)return;let s=v.toJSON(r.data.responseText);if(!Array.isArray(s)){C.error("不是正确的规则文件",r,s),k.error("不是正确的规则文件");return}this.setData(s),o.close(),k.success(`成功导入 ${s.length}条规则`);}}},width:q.info.width,height:"auto"});});}},Q={encrypt(t,e){return se.AES.encrypt(t,e).toString()},decrypt(t,e){return se.AES.decrypt(t,e).toString(se.enc.Utf8)},formatCookie(t,e,i){let n="";if(e==="header_string")n=t.map(o=>{let l=o.value;return `${o.name}=${l}; `}).join("");else if(e==="json")n=JSON.stringify({api:T.cookieManagerApiName,hostname:window.location.hostname,data:t},null,2);else throw new Error("不支持的格式化类型："+e);return i&&(n=this.encrypt(n,i)),n},showExportDialog(){let t=S.confirm({title:{text:"导出 Cookie",position:"center"},content:{text:`
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
					`,html:true},width:window.innerWidth<400?"88vw":"400px",height:"auto",btn:{merge:true,position:"space-between",ok:{text:"导出",async callback(r,s){let u=he.$data.cookieList;if(u.length===0){k.warning("Cookie为空");return}let c=Q.formatCookie(u,a.exportType,a.encodePwd);const d=new Blob([c],{type:"text/plain"}),m=URL.createObjectURL(d);p.createElement("a",{download:`${window.location.hostname}_${a.exportType}_${T.cookieManagerApiName}_${Date.now()}.txt`,href:m,target:"_blank"}).click(),setTimeout(()=>{URL.revokeObjectURL(m);},500),r.close();}},other:{enable:true,text:"导出至剪贴板",type:"xiaomi-primary",async callback(r,s){let u=he.$data.cookieList;if(u.length===0){k.warning("Cookie为空");return}let c=Q.formatCookie(u,a.exportType,a.encodePwd);await v.copy(c)?k.success("复制成功"):k.error("复制失败"),r.close();}}},style:`
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
				`}),e=t.$shadowRoot.querySelector(".export-example-code-text-container pre"),i=t.$shadowRoot.querySelector("#cookie-format-header_string"),n=t.$shadowRoot.querySelector("#cookie-format-json"),o=t.$shadowRoot.querySelector("#encode-pwd");const l={key:"cookie-backup-export-dialog-config",getConfig(){return D.getValue(this.key,{exportType:"header_string",encodePwd:""})},saveConfig(){let r="header_string";n.checked&&(r="json"),D.setValue(this.key,{exportType:r,encodePwd:p.val(o)}),a=this.getConfig();}};let a=l.getConfig();p.on(i,"input",()=>{const r=[{name:"_ga",value:"GA1.2.123456789.987654321",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false},{name:"PHPSESSID",value:"28f2d88ee9322cfd2e4f1e",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false},{name:"csrftoken",value:"abcdef123456",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false},{name:"logged_in",value:"true",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false}];let s=this.formatCookie(r,"header_string");p.text(e,s),l.saveConfig();}),p.on(n,"input",()=>{const r=[{name:"sessionId",value:"abc123xyz456",domain:".example.com",path:"/",secure:true,httpOnly:true,sameSite:"lax",expirationDate:1713543600,hostOnly:false,session:false}];let s=this.formatCookie(r,"json");p.text(e,s),l.saveConfig();}),p.on(o,["input","propertychange"],()=>{l.saveConfig();}),a.exportType==="header_string"?i.click():a.exportType==="json"&&n.click(),p.val(o,a.encodePwd);},showImportDialog(){let t=S.confirm({title:{text:"导入 Cookie",position:"center"},content:{text:`
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
					`,html:true},width:window.innerWidth<400?"88vw":"400px",height:"auto",btn:{ok:{text:"导入",async callback(d,m){try{const h=c.decodePwd;let f=c.value;h.trim()===""||(f=Q.decrypt(f,h));const g=v.toJSON(f);if(Array.isArray(g)){C.info(`使用${T.cookieManagerApiName}导入cookie数据`);for(const y of g)await T.updateCookie(y);}else if(typeof g=="object"&&Object.keys(g).length&&Array.isArray(g.data)){const y=new ye(g.api);C.info(`使用${y.cookieManagerApiName}导入cookie数据`);for(const w of g.data)await y.updateCookie(w);}else if(typeof g=="object"&&!Object.keys(g).length){let y=new v.GM_Cookie;C.info(`使用${T.cookieManagerApiName}导入cookie数据`);let w=y.parseCookie(f);for(const b of w)await T.updateCookie({name:b.key,value:b.value,domain:window.location.hostname,path:"/",sameSite:"unspecified",secure:!1,session:!1,hostOnly:!0,httpOnly:!1});}else {C.error(f,g),k.error("cookie格式不符合");return}d.close();}catch(h){k.error(h.toString());}}}},style:`
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
				`}),e="",i=t.$shadowRoot.querySelector("#import-cookie-import_from_text"),n=t.$shadowRoot.querySelector("#import-cookie-import_from_file");t.$shadowRoot.querySelector(".import-cookie-value-container");let o=t.$shadowRoot.querySelector(".import-cookie-value-text"),l=o.querySelector("textarea"),a=t.$shadowRoot.querySelector(".import-cookie-value-file"),r=a.querySelector("input"),s=t.$shadowRoot.querySelector("#decode-pwd");const u={key:"cookie-backup-import-dialog-config",getConfig(){let d=D.getValue(this.key,{importType:"import_from_text",decodePwd:"",value:""});return d.importType==="import_from_text"?d.value=l.value:d.importType==="import_from_file"&&(d.value=e),d},saveConfig(){let d="import_from_text";n.checked&&(d="import_from_file"),D.setValue(this.key,{importType:d,decodePwd:p.val(s)}),c=this.getConfig();}};let c=u.getConfig();p.on(i,"input",()=>{u.saveConfig(),r.value="",e="",p.hide(a,false),p.show(o,false);}),p.on(n,"input",()=>{u.saveConfig(),l.value="",p.hide(o,false),p.show(a,false);}),p.on(l,["input","propertychange"],v.debounce(()=>{u.saveConfig();})),p.on(r,["change","input"],d=>{const m=r.files?.[0];if(m){const h=new FileReader;h.onload=function(f){const g=f.target.result;typeof g=="string"&&(e=g,u.saveConfig());},h.readAsText(m);}}),p.on(s,["input","propertychange"],async d=>{u.saveConfig();}),c.importType==="import_from_text"?i.click():c.importType==="import_from_file"&&n.click(),p.val(s,c.decodePwd);}},he={$data:{cookieList:[]},init(){this.registerMenu();},async showView(){const t=S.alert({title:{text:"Cookie编辑器",html:false,position:"center"},content:{text:`
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
                `,html:true},btn:{ok:{enable:false}},mask:{enable:true},drag:true,width:q.setting.width,height:q.setting.height,style:`
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
            `}),e=t.$shadowRoot.querySelector(".cookie-search-inner input"),i=t.$shadowRoot.querySelector(".cookie-search-setting"),n=t.$shadowRoot.querySelector(".cookie-control-refresh"),o=t.$shadowRoot.querySelector(".cookie-control-add"),l=t.$shadowRoot.querySelector(".cookie-control-export"),a=t.$shadowRoot.querySelector(".cookie-control-import"),r=t.$shadowRoot.querySelector(".cookie-control-clear-all"),s=t.$shadowRoot.querySelector(".cookie-control-rule-manager"),u=t.$shadowRoot.querySelector(".cookie-setting"),c=t.$shadowRoot.querySelector(".cookie-list-wrapper");let d=f=>{const g=p.createElement("div",{className:"cookie-item",innerHTML:`
                `,"data-cookie-info":f}),y=[{leftText:"name",rightText:f.name},{leftText:"value",rightText:D.getValue("decode-cookie-value")?decodeURIComponent(f.value):encodeURIComponent(f.value)}];T.cookieManagerApiName==="GM_cookie"||T.cookieManagerApiName==="GM.cookie"?(f=f,y.push({leftText:"domain",rightText:f.domain},{leftText:"path",rightText:f.path},{leftText:"session",rightText:JSON.stringify(f.session)},{leftText:"expires",rightText:f.session?"会话":f.expirationDate?new Date(f.expirationDate*1e3).toISOString():"未知"},{leftText:"httpOnly",rightText:JSON.stringify(f.httpOnly)},{leftText:"hostOnly",rightText:JSON.stringify(f.hostOnly)},{leftText:"secure",rightText:JSON.stringify(f.secure)},{leftText:"sameSite",rightText:f.sameSite})):T.cookieManagerApiName==="cookieStore"&&(f=f,y.push({leftText:"domain",rightText:f.domain},{leftText:"path",rightText:f.path},{leftText:"expires",rightText:f.expires?new Date(f.expires).toISOString():"会话"},{leftText:"secure",rightText:JSON.stringify(f.secure)},{leftText:"sameSite",rightText:f.sameSite})),y.forEach(x=>{const M=p.createElement("div",{className:"cookie-item-group",innerHTML:`
                        <div class="cookie-item-group-left">
                            <p>${x.leftText}</p>
                        </div>
                        <div class="cookie-item-group-right">
                            <p>${x.rightText}</p>
                        </div>
                    `});p.append(g,M);});let w=p.createElement("div",{className:"cookie-item-group cookie-item-group-control",innerHTML:`
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
                `}),b=w.querySelector(".cookie-item-group-control-copy"),E=w.querySelector(".cookie-item-group-control-edit"),A=w.querySelector(".cookie-item-group-control-delete");return p.on(b,"click",x=>{p.preventEvent(x);let M=f.value;v.copy(M).then(V=>{V?k.success("复制成功"):k.error("复制失败");});}),p.on(E,"click",x=>{p.preventEvent(x),fe.showView(f,M=>{let V=d(M);p.after(g,V),g.parentElement?.removeChild(g);});}),p.on(A,"click",x=>{p.preventEvent(x),confirm("确定删除该Cookie？")&&T.deleteCookie(f).then(V=>{V?(C.error(V),k.error("删除失败")):(k.success("删除成功"),g.parentElement?.removeChild(g));});}),p.append(g,[w]),g},m=async f=>{let g=await T.queryAllCookie();p.empty(c);let y=document.createDocumentFragment(),w=D.getValue("exclude-session-cookie");g.forEach(b=>{if(w&&(b.session||T.cookieManagerApiName==="cookieStore"&&b.expires==null)||typeof f=="function"&&!f(b))return;const E=d(b);y.appendChild(E);}),this.$data.cookieList=g,c.appendChild(y);};p.on(e,["input","propertychange"],v.debounce(f=>{let g=p.val(e),y=g.trim()==="",w=D.getValue("search-config-use-regexp");m(b=>y?true:w?!!b.name.match(new RegExp(g)):b.name.includes(g));})),p.listenKeyboard(e,"keypress",(f,g,y)=>{f==="Enter"&&y.length===0&&h();}),p.on(i,"click",f=>{p.preventEvent(f);let y=S.alert({title:{text:"搜索配置",position:"center"},content:{text:"",html:true},btn:{ok:{enable:false}},drag:true,mask:{clickEvent:{toClose:true}},width:q.info.width,height:q.info.height,style:`
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
                `}).$shadowRoot.querySelector(".pops-alert-content"),b=S.config.PanelHandlerComponents().createSectionContainerItem_switch(B("启用正则表达式","search-config-use-regexp",false,void 0,"使用正则表达式搜索Cookie名称",()=>{h();}));p.append(y,b);}),p.on(n,"click",f=>{p.preventEvent(f),h();}),p.on(o,"click",f=>{p.preventEvent(f),fe.showView(void 0,g=>{h();});}),p.on(l,"click",async f=>{p.preventEvent(f),Q.showExportDialog();}),p.on(a,"click",async f=>{p.preventEvent(f),Q.showImportDialog();}),p.on(r,"click",async f=>{if(p.preventEvent(f),!window.confirm("确定清除全部Cookie？"))return;const y=await T.deleteAllCookie();y.error?k.warning(`清除成功：${y.success} 失败：${y.error}`):k.success("清除成功"),h();}),p.on(s,"click",f=>{p.preventEvent(f),F.showView();}),p.on(u,"click",f=>{p.preventEvent(f);let y=S.alert({title:{text:"设置",position:"center"},content:{text:"",html:true},btn:{ok:{enable:false}},drag:true,mask:{clickEvent:{toClose:true}},width:q.settingMiddle.width,height:q.settingMiddle.height,style:`
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
                `}).$shadowRoot.querySelector(".pops-alert-content"),w=S.config.PanelHandlerComponents(),b=w.createSectionContainerItem_select(X("CookieManager Api","cookie-manager-api","document.cookie",we.map(x=>({text:x,value:x})),void 0,"操作Cookie的Api函数",x=>{h();})),E=w.createSectionContainerItem_switch(B("解码Cookie值","decode-cookie-value",false,()=>{h();},"对Cookie值进行解码")),A=w.createSectionContainerItem_switch(B("排除Session Cookie","exclude-session-cookie",false,()=>{h();},"过滤掉浏览器会话Cookie"));p.append(y,[b,E,A]);});let h=()=>{p.trigger(e,"input");};h();},registerMenu(){const t=this;ge.add({key:"cookie_manager_view",text:"⚙ Cookie管理",autoReload:false,isStoreValue:false,showText(e,i){return e},callback(e){t.showView();}});}},We={init(){this.execController(),p.ready(()=>{this.execController();});},async execController(){for(let t=0;t<F.$data.matchedRuleList.length;t++){const e=F.$data.matchedRuleList[t],i=e.data.operationMode;C.success(`执行规则：${e.name}`);let n=e.data.execApiName;n==="use-global"&&(n=void 0);const o=new ye(n),l=await o.queryAllCookie();for(let a=0;a<l.length;a++){let r=l[a];const s=r.name,u=e.data.cookieName;let c=false;if(e.data.enableRegExpToMatchCookieName?new RegExp(u,"i").test(s)&&(c=true):s.includes(u)&&(c=true),c){if(i==="delete")o.deleteCookie(r);else if(i.startsWith("extended")){let d=Date.now(),m=720*60*60*1e3,h=m*3,f=m*6,g=m*12,y=m;i==="extended-90"?y=h:i==="extended-180"?y=f:i==="extended-360"&&(y=g);let w=false;if(o.cookieManagerApiName==="document.cookie")r.expirationDate=d+y,w=true;else if(o.cookieManagerApiName==="cookieStore"){let b=r.expires;typeof b=="number"&&b-d<y&&(r.expires=b+y,w=true);}else if(o.cookieManagerApiName==="GM_cookie"||o.cookieManagerApiName==="GM.cookie"){let b=r.expirationDate;typeof b=="number"&&b*1e3-d<y&&(r.expirationDate=b+y/1e3,w=true);}else C.error("未知的cookieManagerApiName",o.cookieManagerApiName);w&&await o.updateCookie(r);}}}}}},de=function(t,e,i,n,o,l,a,r,s,u){let c={text:t,type:"button",attributes:{},props:{},description:e,buttonIcon:n,buttonIsRightIcon:o,buttonIconIsLoading:l,buttonType:a,buttonText:i,callback(d){typeof r=="function"&&r(d);},afterAddToUListCallBack:s};return Reflect.set(c.attributes,Re,()=>{c.disable=false;}),c},Je={id:"view-rule",title:"规则",headerTitle:"Cookie操作规则",forms:[{type:"forms",text:"",forms:[de("自定义规则","操作Cookie的规则","管理",void 0,false,false,"default",()=>{F.showView();})]},{type:"forms",text:"",forms:[de("数据导入","导入自定义规则数据","导入",void 0,false,false,"primary",()=>{F.importRule();}),de("数据导出","导出自定义规则数据","导出",void 0,false,false,"primary",()=>{F.exportRule("CookieManagerRule.json");})]}]},Ye={id:"view-general",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[X("Toast位置",I.qmsg_config_position.key,I.qmsg_config_position.defaultValue,[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(t,e,i)=>{C.info("设置当前Qmsg弹出位置"+i);},"Toast显示在页面九宫格的位置"),X("最多显示的数量",I.qmsg_config_maxnums.key,I.qmsg_config_maxnums.defaultValue,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),B("逆序弹出",I.qmsg_config_showreverse.key,I.qmsg_config_showreverse.defaultValue,void 0,"修改Toast弹出的顺序")]}]};ne.addContentConfig([Ye,Je]);D.init();he.init();F.init();We.init();

})(Qmsg, DOMUtils, Utils, pops, CryptoJS);