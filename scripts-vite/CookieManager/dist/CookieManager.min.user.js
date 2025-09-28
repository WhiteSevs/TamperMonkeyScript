// ==UserScript==
// @name         CookieManager
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.9.28
// @author       WhiteSevs
// @description  简单而强大的Cookie编辑器，允许您快速创建、编辑和删除Cookie
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA/NJREFUeF7tWm1u4jAQjVHusfR3jMQNlp5ky0l2e5K2Jym9ARLO79JzEMgyKF5FqeN5YzuwQPoHqRl/zPObN5NxVHbnf+rO/c9GAEYG3DkCYwjcOQFGETxbCGitF1mWLeq6/qGUmtZ1PW1+t0qpN2PMn0uwcTAA5vP5tKqqp8bhJ8C5R2PMCrBLajIIAFprOs3fkp0eGfFaluVSMiaFbVIAQhy3Tlw1AA3dXyjGQ0/lagFoxO091PGrZkAq5wmEq2NASuevDgCB889HXVjleb6tqmraaASbHeq6ptpgm+f5cr1eb2PDyzdenAUawfsENuXM60VRvBydQ+oCWmJljHkE1go2EQOgtSbB86q9L54FAJIubMuyfAj2DhgoAmA2m1FlR+nO+6eUWm42m9c+IwREO9YYI9ojt7fuc9HkRVF8Uv0OLPLsq+0F82T/DQDCKs8bu1rrGgDxZELh5LKdTCYfPpah88MMkGy6WdwpghL6A054mQaMx/oBaOy3F2xS2ZtNg/SsqqqocrnrUAqRhBggTF0I8MlsYjUCAiCA/skc5CYaHACO/rZq42oDzpHQ55RyXWNRgWQZ0Ef/xvFlu4sjzBShPkPjXPtzDQwGIM/zB1edzjEG2n06I7aUZgFwpS3u1dVX6LSyg83zv8DiKgSWeABczkSUut82ZJun0h4iggaSJhEGuKq20FLXWRylaKm5ABkMAN/Efb0CbjNDCSiXJlkGeOL5GwuYk/TG4xDiyYFOrGEB8NXuVtCoe0M3Pb445jbDVZs0/rRhpegX7T4nEUFJB8erTX3iyTVJulkHFU4uW6EMEN/y9KFgGdPuFQAC2HuK3JtlKgCIbtF9f8ebom12euncV3DRfFxzlkvXEAM4eiL5OMbGp+Lc3rgMAAHQIM02QmOcZMb23hr7AEDoLwEgeRgIAOstuny1A0J/GACOagJnxKYu4UTiH6E/DAAZpipUQvsHRGlqhDb1Bm3Jd8ME9wrZQsgeGbFgt9u9h765nbN/gJ6+iAGxLDhX/wCNfXuwMANoAFC0OGOcU2TJRQkjImzp2x0vAsCCIA0F7lS4ig5RTu5do28OMQAtJiA3xHbd0P4B4ru1CfrKLAgAqR6E9A8knmdZFuS8WAS7mxI2MaT9AxSDYOejAZBqgqR/wHmPtr25eYJDoD1xbI3AbbL7PFTwXOskAaAljPQBxWBt7r6yWApg2z4ZAO2Kkb4RTtnmHsLxoEJIgjSFxX6/XxwOh5+Cj6L+LdF6Z/gY8kvy5AxwgdQG46S8nc/lm/9RY5U+j/uixid6uSk5lEE1IHYjlxp/FgZcyjlk3REABKVbthkZcMuni/g2MgBB6ZZt/gJwetZfo7objAAAAABJRU5ErkJggg==
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.9.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.7.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.5.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.5.0/dist/index.umd.js
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

(function (w, I, H, ne, se) {
	'use strict';

	var ce=typeof GM<"u"?GM:void 0,Le=typeof GM_cookie<"u"?GM_cookie:void 0,Me=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,Ce=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,me=typeof GM_getValue<"u"?GM_getValue:void 0,Z=typeof GM_info<"u"?GM_info:void 0,qe=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,ie=typeof GM_setValue<"u"?GM_setValue:void 0,Ne=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Ie=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,G=typeof unsafeWindow<"u"?unsafeWindow:void 0,Oe=window;const Re="GM_Panel",Ee="data-init",j="data-key",K="data-default-value",Ge="data-init-more-value",T="data-storage-api",F={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},q={setting:{get width(){return F.width<550?"88vw":F.width<700?"550px":"700px"},get height(){return F.height<450?"70vh":F.height<550?"450px":"550px"}},settingMiddle:{get width(){return F.width<350?"88vw":"350px"},get height(){return F.height<450?"88vh":"450px"}},info:{get width(){return F.width<350?"88vw":"350px"},get height(){return F.height<250?"88vh":"250px"}}};class Ue{storageKey;listenerData;constructor(e){if(typeof e=="string"){let i=e.trim();if(i=="")throw new Error("key参数不能为空字符串");this.storageKey=i;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new H.Dictionary;}getLocalValue(){let e=me(this.storageKey);return e==null&&(e={},this.setLocalValue(e)),e}setLocalValue(e){ie(this.storageKey,e);}set(e,i){let a=this.get(e),o=this.getLocalValue();Reflect.set(o,e,i),this.setLocalValue(o),this.triggerValueChangeListener(e,a,i);}get(e,i){let a=this.getLocalValue();return Reflect.get(a,e)??i}getAll(){return this.getLocalValue()}delete(e){let i=this.get(e),a=this.getLocalValue();Reflect.deleteProperty(a,e),this.setLocalValue(a),this.triggerValueChangeListener(e,i,void 0);}has(e){let i=this.getLocalValue();return Reflect.has(i,e)}keys(){let e=this.getLocalValue();return Reflect.ownKeys(e)}values(){let e=this.getLocalValue();return Reflect.ownKeys(e).map(i=>Reflect.get(e,i))}clear(){Me(this.storageKey);}addValueChangeListener(e,i){let a=Math.random(),o=this.listenerData.get(e)||[];return o.push({id:a,key:e,callback:i}),this.listenerData.set(e,o),a}removeValueChangeListener(e){let i=false;for(const[a,o]of this.listenerData.entries()){for(let l=0;l<o.length;l++){const r=o[l];(typeof e=="string"&&r.key===e||typeof e=="number"&&r.id===e)&&(o.splice(l,1),l--,i=true);}this.listenerData.set(a,o);}return i}triggerValueChangeListener(e,i,a){if(!this.listenerData.has(e))return;let o=this.listenerData.get(e);for(let l=0;l<o.length;l++){const r=o[l];if(typeof r.callback=="function"){let n=this.get(e),s,u;typeof i<"u"&&arguments.length>=2?u=i:u=n,typeof a<"u"&&arguments.length>2?s=a:s=n,r.callback(e,u,s);}}}}const z=new Ue(Re),Pe={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{E.showPanel(ae.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){E.isTopWindow()&&ge.add(this.$data.menuOption);},addMenuOption(t){Array.isArray(t)||(t=[t]),this.$data.menuOption.push(...t);},updateMenuOption(t){Array.isArray(t)||(t=[t]),t.forEach(e=>{let i=this.$data.menuOption.findIndex(a=>a.key===e.key);i!==-1&&(this.$data.menuOption[i]=e);});},getMenuOption(t=0){return this.$data.menuOption[t]},deleteMenuOption(t=0){this.$data.menuOption.splice(t,1);}},Ve={waitRemove(...t){t.forEach(e=>{typeof e=="string"&&I.waitNodeList(e).then(i=>{i.forEach(a=>a.remove());});});},createBlockCSSNode(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(i=>{Array.isArray(i)?e=e.concat(i):e.push(i);}),I.createElement("style",{type:"text/css",innerHTML:`${e.join(`,
`)}{display: none !important;}`})},addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(i=>{Array.isArray(i)?e=e.concat(i):e.push(i);}),$e(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){let e=typeof Ce=="function"?Ce(t.keyName):null;typeof e=="string"&&e?$e(e):Ve.loadStyleLink(t.url);},async loadStyleLink(t){let e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=t,I.ready(()=>{document.head.appendChild(e);});},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(i=>{e.onload=()=>{i(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.startsWith("data:")||t.match(/^http(s|):\/\//i)?t:t.startsWith("//")?(t.startsWith("///")||(t=window.location.protocol+t),t):(t.startsWith("/")||(t+="/"),t=window.location.origin+t,t)},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;try{let e=new URL(t);return e.protocol="https:",e.toString()}catch{return t}},lockScroll(...t){let e=document.createElement("style");e.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let i=[document.documentElement,document.body].concat(...t||[]);return i.forEach(a=>{a.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(e),{recovery(){i.forEach(a=>{a.classList.remove("pops-overflow-hidden-important");}),e.remove();}}},async getClipboardText(){function t(a){navigator.clipboard.readText().then(o=>{a(o);}).catch(o=>{_.error("读取剪贴板内容失败👉",o),a("");});}function e(a){navigator.permissions.query({name:"clipboard-read"}).then(o=>{t(a);}).catch(o=>{_.error("申请剪贴板权限失败，尝试直接读取👉",o.message??o.name??o.stack),t(a);});}function i(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(a=>{if(!i()){a("");return}document.hasFocus()?e(a):window.addEventListener("focus",()=>{e(a);},{once:true});})},escapeHtml(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(t,e,i=5e3){let a,o=i-e,l=e,r=async n=>{let s=await t(n);if(typeof s=="boolean"&&!s||n){C.workerClearTimeout(a);return}if(l+=e,l>o){r(true);return}a=C.workerSetTimeout(()=>{r(false);},e);};r(false);},findParentNode(t,e,i){if(i){let a=I.closest(t,i);if(a)return a.querySelector(e)}else return I.matches(t,e)?t:I.closest(t,e)}},E={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new C.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new C.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new C.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new C.Dictionary),this.__onceExecData},get scriptName(){return _e},get panelConfig(){return this.__panelConfig},set panelConfig(t){this.__panelConfig=t;},key:Re,attributeKeyName:j,attributeDefaultValueName:K},init(){this.initContentDefaultValue(),Pe.init();},isTopWindow(){return G.top===G.self},initContentDefaultValue(){const t=a=>{if(!a.attributes||a.type==="button"||a.type==="forms"||a.type==="deepMenu")return;let o=a.attributes[Ee];if(typeof o=="function"){let s=o();if(typeof s=="boolean"&&!s)return}let l=new Map,r=a.attributes[j];if(r!=null){const s=a.attributes[K];l.set(r,s);}let n=a.attributes[Ge];if(typeof n=="object"&&n&&Object.keys(n).forEach(s=>{l.set(s,n[s]);}),!l.size){_.warn(["请先配置键",a]);return}if(a.type==="switch"){let s=typeof a.disabled=="function"?a.disabled():a.disabled;typeof s=="boolean"&&s&&this.$data.contentConfigInitDisabledKeys.push(...l.keys());}for(const[s,u]of l.entries())this.setDefaultValue(s,u);},e=a=>{for(let o=0;o<a.length;o++){let l=a[o];t(l);let r=l.forms;r&&Array.isArray(r)&&e(r);}},i=[...ae.getAllContentConfig()];for(let a=0;a<i.length;a++){let o=i[a];if(!o.forms)continue;const l=o.forms;l&&Array.isArray(l)&&e(l);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(t,e){this.$data.contentConfigInitDefaultValue.has(t)&&_.warn("请检查该key(已存在): "+t),this.$data.contentConfigInitDefaultValue.set(t,e);},getDefaultValue(t){return this.$data.contentConfigInitDefaultValue.get(t)},setValue(t,e){z.set(t,e);},getValue(t,e){let i=z.get(t);return i??(this.$data.contentConfigInitDefaultValue.has(t)?this.$data.contentConfigInitDefaultValue.get(t):e)},deleteValue(t){z.delete(t);},hasKey(t){return z.has(t)},addValueChangeListener(t,e){return z.addValueChangeListener(t,(a,o,l)=>{e(t,l,o);})},removeValueChangeListener(t){z.removeValueChangeListener(t);},triggerMenuValueChange(t,e,i){z.triggerValueChangeListener(t,i,e);},exec(t,e,i,a=true){const o=this;let l;typeof t=="string"||Array.isArray(t)?l=()=>t:l=t;let r=false,n=l(),s=[];Array.isArray(n)?(r=true,s=n):s.push(n);let u=s.find(v=>!this.$data.contentConfigInitDefaultValue.has(v));if(u){_.warn(`${u} 键不存在`);return}let p=JSON.stringify(s);if(a&&this.$data.onceExecMenuData.has(p))return this.$data.onceExecMenuData.get(p);let f=[],h=[],m=(v,b)=>{let S=[];Array.isArray(b)||(b=[b]),b.forEach(A=>{if(A!=null&&A instanceof HTMLStyleElement){S.push(A);return}}),f=f.concat(S);},d=v=>this.getValue(v),g=()=>{for(let v=0;v<f.length;v++)f[v].remove(),f.splice(v,1),v--;},y=()=>{let v=false;return typeof i=="function"?v=i(s):v=s.every(b=>d(b)),v},x=v=>{let b=y(),S=[];if(b){let A=s.map(R=>this.getValue(R)),M=e({value:r?A:A[0],addStyleElement:(...R)=>m(true,...R)});Array.isArray(M)||(M=[M]),M.forEach(R=>{if(R!=null&&R instanceof HTMLStyleElement){S.push(R);return}});}g(),f=[...S];};a&&s.forEach(v=>{let b=this.addValueChangeListener(v,(S,A,M)=>{x();});h.push(b);}),x();let k={reload(){x();},clear(){this.clearStoreStyleElements(),this.removeValueChangeListener(),a&&o.$data.onceExecMenuData.delete(p);},clearStoreStyleElements:()=>g(),removeValueChangeListener:()=>{h.forEach(v=>{this.removeValueChangeListener(v);});}};return this.$data.onceExecMenuData.set(p,k),k},execMenu(t,e,i=false,a=false){return this.exec(t,o=>e(o),o=>o.every(r=>{let n=!!this.getValue(r);return E.$data.contentConfigInitDisabledKeys.includes(r)&&(n=false,_.warn(`.execMenu${a?"Once":""} ${r} 被禁用`)),i&&(n=!n),n}),a)},execMenuOnce(t,e,i=false,a=false){const o=this.execMenu(t,e,i,true);if(a&&o){const l=()=>{o.reload();};this.removeUrlChangeWithExecMenuOnceListener(t),this.addUrlChangeWithExecMenuOnceListener(t,l);const r=o.clear;o.clear=()=>{r(),this.removeUrlChangeWithExecMenuOnceListener(t);};}return o},deleteExecMenuOnce(t){return t=this.transformKey(t),this.$data.onceExecMenuData.delete(t),this.$data.urlChangeReloadMenuExecOnce.delete(t),z.removeValueChangeListener(t)},onceExec(t,e){if(t=this.transformKey(t),typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(t)||(e(),this.$data.onceExecData.set(t,1));},deleteOnceExec(t){t=this.transformKey(t),this.$data.onceExecData.delete(t);},addUrlChangeWithExecMenuOnceListener(t,e){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.set(t,e);},removeUrlChangeWithExecMenuOnceListener(t){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.delete(t);},triggerUrlChangeWithExecMenuOnceEvent(t){this.$data.urlChangeReloadMenuExecOnce.forEach((e,i)=>{e(t);});},showPanel(t,e=`${_e}-设置`,i=false,a=false){this.$data.$panel=null,this.$data.panelContent=[];let o=t.findIndex(r=>(typeof r.isBottom=="function"?r.isBottom():!!r.isBottom)&&r.id==="script-version")!==-1;!i&&!o&&t.push(...ae.getDefaultBottomContentConfig());let l=$.panel({title:{text:e,position:"center",html:false,style:""},content:t,btn:{close:{enable:true,callback:(r,n)=>{r.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(r,n)=>{r(),this.$data.$panel=null;}},width:q.setting.width,height:q.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=l,this.$data.panelContent=t,a||this.registerConfigSearch({$panel:l,content:t});},registerConfigSearch(t){const{$panel:e,content:i}=t;let a=async(p,f)=>{if(p==null)return;let h=await f(p);return h&&typeof h.isFind=="boolean"&&h.isFind?h.data:await a(h.data,f)},o=(p,f)=>{const h=new IntersectionObserver(m=>{m.forEach(d=>{d.isIntersecting&&(f?.(),h.disconnect());});},{root:null,threshold:1});h.observe(p),p.scrollIntoView({behavior:"smooth",block:"center"});},l=p=>{const f="pops-flashing";c.animationend(p,()=>{p.classList.remove(f);}),p.classList.add(f);},r=(p,f)=>{c.preventEvent(p);let h=$.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:q.settingMiddle.width,height:"auto",drag:true,style:`
					${$.config.cssText.panelCSS}

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
				`});h.$shadowRoot.querySelector(".search-wrapper");let m=h.$shadowRoot.querySelector(".search-config-text"),d=h.$shadowRoot.querySelector(".search-result-wrapper");m.focus();let g=()=>{c.empty(d);},y=k=>{const v=C.queryProperty(k,S=>S?.next?{isFind:false,data:S.next}:{isFind:true,data:S});let b=c.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${v.matchedData?.path}</div>
							<div class="search-result-item-description">${v.matchedData?.description??""}</div>
						`});return c.on(b,"click",S=>{let M=e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[k.index];if(!M){w.error(`左侧项下标${k.index}不存在`);return}M.scrollIntoView({behavior:"smooth",block:"center"}),M.click(),a(k.next,async R=>{if(R?.next){let L=await c.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(D=>{const O=Reflect.get(D,"__formConfig__");return typeof O=="object"&&O!=null&&O.text===R.name}),2500);if(L)L.click();else return w.error("未找到对应的二级菜单"),{isFind:true,data:R};return {isFind:false,data:R.next}}else {let L=await c.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(D=>Reflect.get(D,"__formConfig__")===R.matchedData?.formConfig),2500);if(L){o(L);let D=L.closest(".pops-panel-forms-fold[data-fold-enable]");D&&(D.querySelector(".pops-panel-forms-fold-container").click(),await C.sleep(500)),o(L,()=>{l(L);});}else w.error("未找到对应的菜单项");return {isFind:true,data:R}}});}),b},x=k=>{const v=new RegExp(k,"i"),b=[],S=(M,R)=>{for(let L=0;L<M.length;L++){const D=M[L];let O=D.forms;if(O&&Array.isArray(O)){const Y=C.deepClone(R);if(D.type==="deepMenu"){const ee=C.queryProperty(Y,W=>W?.next?{isFind:false,data:W.next}:{isFind:true,data:W});ee.next={name:D.text};}S(O,Y);}else {let Y=Reflect.get(D,"text"),ee=Reflect.get(D,"description");const W=[Y,ee];let ke=W.findIndex(J=>{if(typeof J=="string")return J.match(v)});if(ke!==-1){const J=C.deepClone(R),ve=C.queryProperty(J,P=>P?.next?{isFind:false,data:P.next}:{isFind:true,data:P});ve.next={name:Y,matchedData:{path:"",formConfig:D,matchedText:W[ke],description:ee}};const be=[];C.queryProperty(J,P=>{const le=P?.name;return typeof le=="string"&&le.trim()!==""&&be.push(le),P?.next?{isFind:false,data:P.next}:{isFind:true,data:P}});const Te=be.join(Ve.escapeHtml(" - "));ve.next.matchedData.path=Te,b.push(J);}}}};for(let M=0;M<i.length;M++){const R=i[M];if(!R.forms||R.isBottom&&R.id==="script-version")continue;const L=R.forms;if(L&&Array.isArray(L)){let D=R.title;typeof D=="function"&&(D=D()),S(L,{index:M,name:D});}}let A=document.createDocumentFragment();for(const M of b){let R=y(M);A.appendChild(R);}g(),d.append(A);};c.on(m,"input",C.debounce(k=>{c.preventEvent(k);let v=c.val(m).trim();if(v===""){g();return}x(v);},200));},n=null,s=false,u;c.on(e.$shadowRoot,"dblclick","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",r),c.on(e.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(p,f)=>{clearTimeout(u),u=void 0,s&&n===f?(s=false,n=null,r(p)):(u=setTimeout(()=>{s=false;},200),s=true,n=f);},{capture:true}),e.$shadowRoot.appendChild(c.createElement("style",{type:"text/css",textContent:`
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
				`}));},transformKey(t){if(Array.isArray(t)){const e=t.sort();return JSON.stringify(e)}else return t}},N={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},C=H.noConflict(),c=I.noConflict(),$=ne,_=new C.Log(Z,G.console||Oe.console);let _e=Z?.script?.name||void 0;ne.config.Utils.AnyTouch();const Fe=false;_.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});w.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(t){const e=t.getSetting().type;if(e==="loading")return  false;const i=t.getSetting().content;return e==="warning"?_.warn(i):e==="error"?_.error(i):_.info(i),true},get position(){return E.getValue(N.qmsg_config_position.key,N.qmsg_config_position.defaultValue)},get maxNums(){return E.getValue(N.qmsg_config_maxnums.key,N.qmsg_config_maxnums.defaultValue)},get showReverse(){return E.getValue(N.qmsg_config_showreverse.key,N.qmsg_config_showreverse.defaultValue)},get zIndex(){let t=H.getMaxZIndex(),e=ne.config.InstanceUtils.getPopsMaxZIndex().zIndex;return H.getMaxValue(t,e)+100}});$.GlobalConfig.setGlobalConfig({zIndex:()=>{let t=H.getMaxZIndex(void 0,void 0,i=>{if(i?.classList?.contains("qmsg-shadow-container")||i?.closest("qmsg")&&i.getRootNode()instanceof ShadowRoot)return  false}),e=ne.config.InstanceUtils.getPopsMaxZIndex().zIndex;return H.getMaxValue(t,e)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const ge=new C.GM_Menu({GM_getValue:me,GM_setValue:ie,GM_registerMenuCommand:qe,GM_unregisterMenuCommand:Ne}),xe=new C.Httpx({xmlHttpRequest:Ie,logDetails:Fe});xe.interceptors.request.use(t=>t);xe.interceptors.response.use(void 0,t=>(_.error("拦截器-请求错误",t),t.type==="onabort"?w.warning("请求取消",{consoleLogContent:true}):t.type==="onerror"?w.error("请求异常",{consoleLogContent:true}):t.type==="ontimeout"?w.error("请求超时",{consoleLogContent:true}):w.error("其它错误",{consoleLogContent:true}),t));G.Object.defineProperty,G.Function.prototype.apply,G.Function.prototype.call,G.Element.prototype.appendChild,G.setTimeout;const $e=c.addStyle.bind(c);I.selector.bind(I);I.selectorAll.bind(I);const Ae=new C.GM_Cookie,ae={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new C.Dictionary),this.__contentConfig}},addContentConfig(t){Array.isArray(t)||(t=[t]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,t);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(t=0){return this.$data.contentConfig.get(t)??[]},getDefaultBottomContentConfig(){return [{id:"script-version",title:`版本：${Z?.script?.version||"未知"}`,isBottom:true,forms:[],clickFirstCallback(t,e,i){let a=Z?.script?.supportURL||Z?.script?.namespace;return typeof a=="string"&&C.isNotNull(a)&&window.open(a,"_blank"),false}}]}};let De=t=>{(typeof t=="object"&&t!=null||typeof t=="function")&&Object.keys(t).forEach(e=>{typeof t[e]=="function"&&(t[e]=t[e].bind(t));});};const oe=Le;De(oe);De(Ae);const we=["document.cookie","cookieStore","GM_cookie","GM.cookie"];class ye{__apiName;constructor(e){if(typeof e=="string"&&!we.includes(e))throw new Error(`未知的apiName：${e}`);this.__apiName=e;}get cookieManagerApiName(){let e=E.getValue("cookie-manager-api","document.cookie");return this.__apiName||e}get cookieManager(){if(this.cookieManagerApiName==="GM_cookie")return {list(e,i){oe.list(e,a=>{i(a);});},set(e,i){oe.set(e,a=>{i(a);});},delete(e,i){oe.delete(e,a=>{i(a);});}};if(this.cookieManagerApiName==="GM.cookie")return {list(e,i){ce.cookie.list().then(a=>{i(a);});},set(e,i){ce.cookie.set(e).then(a=>{i(a??null);}).catch(a=>{i(a);});},delete(e,i){ce.cookie.delete(e).then(a=>{i(a??null);}).catch(a=>{i(a);});}};if(this.cookieManagerApiName==="cookieStore"){let e=G.cookieStore;return {list(i,a){e.getAll().then(o=>{a(o);}).catch(o=>{_.error(o),w.error(o.toString());});},set(i,a){e.set(i).then(()=>{a();}).catch(o=>{a(o);});},delete(i,a){e.delete(i).then(o=>{a();}).catch(o=>{a(o);});}}}else return Ae}queryAllCookie(){return new Promise((e,i)=>{try{this.cookieManager.list({},a=>{let o=a||[];o=o.sort((l,r)=>l.name.localeCompare(r.name)),e(o);});}catch(a){_.error(a),w.error(a.toString()),i(a);}})}deleteAllCookie(){return new Promise((e,i)=>{try{this.cookieManager.list({},async a=>{const o=a||[],l={success:0,error:0};for(let r=0;r<o.length;r++){const n=o[r];await new Promise(u=>{this.deleteCookie(n).then(p=>{u(p);});})?l.error++:l.success++;}e(l);});}catch(a){_.error(a),w.error(a.toString()),i(a);}})}addCookie(e){return new Promise((i,a)=>{try{Reflect.deleteProperty(e,"hostOnly"),this.cookieManager.set(e,o=>{i(o);});}catch(o){_.error(o),w.error(o.toString()),a(o);}})}deleteCookie(e){return new Promise((i,a)=>{try{this.cookieManager.delete(e,o=>{i(o);});}catch(o){_.error(o),w.error(o.toString()),a(o);}})}updateCookie(e){return new Promise(async(i,a)=>{let o;try{if(this.cookieManagerApiName==="document.cookie"||this.cookieManagerApiName==="cookieStore"){let r=await this.deleteCookie(e);if(r)throw new TypeError(r.toString())}let l=await this.addCookie(e);if(l)throw new TypeError(l.toString())}catch(l){o=l;}finally{i(o);}})}}const V=new ye,re={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new H.Dictionary),this.__storeApiFn}},getStorageApi(t){if(this.hasStorageApi(t))return this.$data.storeApiValue.get(t)},hasStorageApi(t){return this.$data.storeApiValue.has(t)},setStorageApi(t,e){this.$data.storeApiValue.set(t,e);},initComponentsStorageApi(t,e,i){let a;this.hasStorageApi(t)?a=this.getStorageApi(t):a=i,this.setComponentsStorageApiProperty(e,a);},setComponentsStorageApiProperty(t,e){Reflect.set(t.props,T,e);}},B=function(t,e,i,a,o,l,r,n){let s={text:t,type:"switch",description:o,disabled:r,attributes:{},props:{},getValue(){return this.props[T].get(e,i)},callback(u,p){let f=!!p;if(_.success(`${f?"开启":"关闭"} ${t}`),typeof a=="function"&&a(u,f))return;this.props[T].set(e,f);},afterAddToUListCallBack:l};return Reflect.set(s.attributes,j,e),Reflect.set(s.attributes,K,i),re.initComponentsStorageApi("switch",s,{get(u,p){return E.getValue(u,p)},set(u,p){E.setValue(u,p);}}),s},Se={beforeEdit(t,e){const i=V.cookieManagerApiName;return i==="cookieStore"?typeof t.expires=="number"&&(t.expirationDate=t.expires):(i==="GM_cookie"||i==="GM.cookie")&&e&&typeof t.expirationDate=="number"&&(t.expirationDate=t.expirationDate*1e3),t},afterEdit(t){const e=V.cookieManagerApiName;return e==="document.cookie"?t.domain="":e==="cookieStore"?typeof t.expirationDate=="number"&&(t.expires=t.expirationDate):(e==="GM_cookie"||e==="GM.cookie")&&typeof t.expirationDate=="number"&&(t.expirationDate=Math.floor(t.expirationDate/1e3)),t}};let te=(t,e,i,a)=>({text:t,type:"input",isNumber:false,isPassword:false,props:{},attributes:{},description:"",getValue(){return e()},callback(l,r){i(r);},placeholder:"",disabled:!!a}),ze=(t,e,i,a)=>({text:t,type:"textarea",props:{},attributes:{},description:"",placeholder:"",getValue(){return e()},disabled:a,callback:function(l,r){i(r);}}),pe=(t,e,i,a,o)=>({text:t,type:"select",description:"",attributes:{},props:{},getValue(){return i()},callback(r,n,s){a(n);},data:typeof e=="function"?e():e,disabled:false});const fe={init(){},showView(t,e){let i=!!t,a={name:"",value:"",domain:window.location.hostname,path:"/",secure:false,session:false,hostOnly:false,httpOnly:false,sameSite:"lax",expirationDate:Date.now()+3600*24*30*1e3},o=C.assign({},a,true);C.assign(o,t??{},true),o=Se.beforeEdit(o,i);let r=$.confirm({title:{text:i?"编辑Cookie":"添加Cookie",position:"center"},content:{text:"",html:true},drag:true,btn:{position:"center",ok:{text:i?"编辑":"添加",async callback(x,k){if(fe.validCookieInfo(o)){if(o.value=encodeURIComponent(o.value),o=Se.afterEdit(o),i){let b=await V.updateCookie(o);b?w.error(b.toString()):(w.success("修改成功"),x.close());}else {let b=await V.addCookie(o);b?w.error(b.toString()):(w.success("添加成功"),x.close());}typeof e=="function"&&e(o);}}},cancel:{text:"取消"}},mask:{enable:true},width:q.settingMiddle.width,height:"auto",style:`
                ${$.config.cssText.panelCSS}

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
            `}).$shadowRoot.querySelector(".pops-confirm-content"),n=$.config.PanelHandlerComponents(),s=n.createSectionContainerItem_input(te("name",()=>o.name,x=>o.name=x,i)),u=n.createSectionContainerItem_textarea(ze("value",()=>o.value,x=>o.value=x)),p=n.createSectionContainerItem_input(te("domain",()=>o.domain,x=>o.domain=x)),f=n.createSectionContainerItem_input(te("path",()=>o.path,x=>o.path=x)),h;o.session?h=n.createSectionContainerItem_input(te("expires",()=>"会话",x=>{},true)):h=n.createSectionContainerItem_own({type:"own",getLiElementCallBack:function(x){let k=c.createElement("li",{innerHTML:`
							<div class="pops-panel-item-left-text">
								<p class="pops-panel-item-left-main-text">expires</p>
							</div>
							<div class="pops-panel-item-right-wrapper">
								<input type="datetime-local" id="cookie-item-property-expires">
							</div>
						`}),v=k.querySelector("#cookie-item-property-expires");return v.valueAsNumber=o.expirationDate,c.on(v,["change","input","propertychange"],b=>{c.preventEvent(b),o.expirationDate=v.valueAsNumber;}),k}});let m=n.createSectionContainerItem_select(pe("httpOnly",[{text:"true",value:true},{text:"false",value:false}],()=>o.httpOnly,x=>o.httpOnly=x)),d=n.createSectionContainerItem_select(pe("secure",[{text:"true",value:true},{text:"false",value:false}],()=>o.secure,x=>o.secure=x)),g=[{text:"no_restriction",value:"no_restriction"},{text:"lax",value:"lax"},{text:"strict",value:"strict"},{text:"unspecified",value:"unspecified"}];V.cookieManagerApiName==="cookieStore"&&(g=[{text:"lax",value:"lax"},{text:"strict",value:"strict"},{text:"none",value:"none"}]);let y=n.createSectionContainerItem_select(pe("sameSite",g,()=>o.sameSite,x=>o.sameSite=x));c.append(r,[s,u]),V.cookieManagerApiName==="GM_cookie"||V.cookieManagerApiName==="GM.cookie"?c.append(r,[p,f,h,m,d,y]):V.cookieManagerApiName==="cookieStore"&&c.append(r,[p,f,h,y]);},validCookieInfo(t){return t.name==null||t.name==""?(w.error("name不能为空"),false):t.domain==null||t.domain==""?(w.error("domain不能为空"),false):t.path==null||t.path==""?(w.error("path不能为空"),false):true}},X=function(t,e,i,a,o,l,r){let n=[];typeof a=="function"?n=a():n=a;let s={text:t,type:"select",description:l,attributes:{},props:{},getValue(){return this.props[T].get(e,i)},callback(u,p,f){let h=p;if(_.info(`选择：${f}`),typeof o=="function"&&o(u,h,f))return;this.props[T].set(e,h),typeof r=="function"&&r(u,h,f);},data:n};return Reflect.set(s.attributes,j,e),Reflect.set(s.attributes,K,i),re.initComponentsStorageApi("select",s,{get(u,p){return E.getValue(u,p)},set(u,p){E.setValue(u,p);}}),s},ue=function(t,e,i,a,o,l="",r,n,s,u){let p={text:t,type:"input",isNumber:false,isPassword:false,attributes:{},props:{},description:a,afterAddToUListCallBack:s,getValue(){return this.props[T].get(e,i)},callback(f,h,m){this.props[T].set(e,h);},placeholder:l};return Reflect.set(p.attributes,j,e),Reflect.set(p.attributes,K,i),re.initComponentsStorageApi("input",p,{get(f,h){return E.getValue(f,h)},set(f,h){E.setValue(f,h);}}),p},Be=function(t,e,i,a,o,l="",r,n){let s={text:t,type:"textarea",attributes:{},props:{},description:a,placeholder:l,disabled:r,getValue(){let p=this.props[T].get(e,i);return Array.isArray(p)?p.join(`
`):p},callback(u,p){this.props[T].set(e,p);}};return Reflect.set(s.attributes,j,e),Reflect.set(s.attributes,K,i),re.initComponentsStorageApi("switch",s,{get(u,p){return E.getValue(u,p)},set(u,p){E.setValue(u,p);}}),s};class He{option;constructor(e){this.option=e;}async showView(){let e=$.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist"></ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:true},btn:C.assign({ok:{callback:async()=>{await l();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
                ${$.config.cssText.panelCSS}
                
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
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),i=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");let a=e.$shadowRoot.querySelector(".rule-form-ulist"),o=await this.option.getView(await this.option.data());a.appendChild(o);const l=async()=>{(await this.option.onsubmit(i,await this.option.data())).success&&(e.close(),await this.option.dialogCloseCallBack(true));};}}class je{option;constructor(e){this.option=e;}showView(){let e=$.alert({title:{text:this.option.title,position:"center"},content:{text:`
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
            `}),i=e.$shadowRoot.querySelector(".filter-container"),a=document.createDocumentFragment();this.option.filterOption.forEach(o=>{let l=c.createElement("button",{innerText:o.name},{type:"button"}),r=async()=>{(await this.option.getAllRuleInfo()).forEach(async s=>{await o.filterCallBack(s.data)?c.show(s.$el,false):c.hide(s.$el,false);}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),e.close();};c.on(l,"click",async n=>{c.preventEvent(n),!(typeof o.callback=="function"&&!await o.callback(n,r))&&await r();}),a.appendChild(l);}),i.appendChild(a);}}class Ke{option;constructor(e){this.option=e;}async showView(e){let i=$.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:true},btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async l=>{this.showEditView(false,await this.option.getAddData(),i.$shadowRoot);}},close:{enable:true,callback(l){i.close();}},cancel:{enable:this.option?.bottomControls?.filter?.enable||false,type:"default",text:"过滤",callback:async(l,r)=>{if(typeof this.option?.bottomControls?.filter?.callback=="function"){let u=await this.option.bottomControls.filter.callback();if(typeof u=="boolean"&&!u)return}let n=()=>Array.from(i.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),s=r.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");if(c.text(s).includes("取消")){let u=await this.option?.bottomControls?.filter?.cancelFilterCallback?.({$button:s,getAllRuleElement:n});if(typeof u=="boolean"&&!u)return;n().forEach(p=>{c.show(p,false);}),c.text(s,"过滤");}else new je({title:this.option.bottomControls?.filter?.title??"过滤规则",filterOption:this.option.bottomControls?.filter?.option||[],execFilterCallBack:async()=>{c.text(s,"取消过滤"),await this.option.bottomControls?.filter?.execFilterCallBack?.();},getAllRuleInfo:()=>n().map(p=>({data:this.parseRuleItemElement(p).data,$el:p}))}).showView();}},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:l=>{let r=$.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async n=>{if(_.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){w.error("清理失败");return}else w.success("清理成功");await this.updateDeleteAllBtnText(i.$shadowRoot),this.clearContent(i.$shadowRoot),r.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
            ${$.config.cssText.panelCSS}
            
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
            `}),a=await this.option.data(),o=false;for(let l=0;l<a.length;l++){let r=a[l],n=await this.appendRuleItemElement(i.$shadowRoot,r),s=true;typeof e=="function"?s=e(r):typeof e=="number"&&!isNaN(e)&&(s=await this.option.bottomControls?.filter?.option[e]?.filterCallBack(r)??s),s||(o=true,c.hide(n,false));}if(o){let l=i.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");c.text(l,"取消过滤");}}showEditView(e,i,a,o,l,r){let n=async u=>{if(u){if(typeof r=="function"){let p=await this.option.getData(i);r(p);}}else if(e||await this.option.deleteData(i),typeof l=="function"){let p=await this.option.getData(i);l(p);}};new He({title:e?"编辑":"添加",data:()=>i,dialogCloseCallBack:n,getView:async u=>await this.option.itemControls.edit.getView(u,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async(u,p)=>{u.close(),await n(false);}},close:{callback:async(u,p)=>{u.close(),await n(false);}}},onsubmit:async(u,p)=>{let f=await this.option.itemControls.edit.onsubmit(u,e,p);return f.success?e?(w.success("修改成功"),a&&await this.updateRuleItemElement(f.data,o,a)):a&&await this.appendRuleItemElement(a,f.data):e&&_.error("修改失败"),f},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(e){let i=e.querySelector(".rule-view-container"),a=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:i,$deleteBtn:a}}parseRuleItemElement(e){let i=e.querySelector(".rule-controls-enable"),a=i.querySelector(".pops-panel-switch"),o=i.querySelector(".pops-panel-switch__input"),l=i.querySelector(".pops-panel-switch__core"),r=e.querySelector(".rule-controls-edit"),n=e.querySelector(".rule-controls-delete");return {$enable:i,$enableSwitch:a,$enableSwitchInput:o,$enableSwitchCore:l,$edit:r,$delete:n,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,i){let a=await this.option.getDataItemName(e),o=c.createElement("div",{className:"rule-item",innerHTML:`
			<div class="rule-name">${a}</div>
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
					${$.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${$.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(o,"data-rule",e);let l="pops-panel-switch-is-checked";const{$enable:r,$enableSwitch:n,$enableSwitchCore:s,$enableSwitchInput:u,$delete:p,$edit:f}=this.parseRuleItemElement(o);return this.option.itemControls.enable.enable?(c.on(s,"click",async h=>{let m=false;n.classList.contains(l)?(n.classList.remove(l),m=false):(n.classList.add(l),m=true),u.checked=m,await this.option.itemControls.enable.callback(e,m);}),await this.option.itemControls.enable.getEnable(e)&&n.classList.add(l)):r.remove(),this.option.itemControls.edit.enable?c.on(f,"click",h=>{c.preventEvent(h),this.showEditView(true,e,i,o,m=>{e=null,e=m;});}):f.remove(),this.option.itemControls.delete.enable?c.on(p,"click",h=>{c.preventEvent(h);let m=$.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async d=>{_.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(w.success("成功删除该数据"),o.remove(),await this.updateDeleteAllBtnText(i),m.close()):w.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):p.remove(),o}async appendRuleItemElement(e,i){let{$container:a}=this.parseViewElement(e),o=[],l=Array.isArray(i)?i:[i];for(let r=0;r<l.length;r++){let n=l[r],s=await this.createRuleItemElement(n,e);a.appendChild(s),o.push(s);}return await this.updateDeleteAllBtnText(e),o}async updateRuleContaienrElement(e){this.clearContent(e);const{$container:i}=this.parseViewElement(e);let a=await this.option.data();await this.appendRuleItemElement(e,a),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,i,a){let o=await this.createRuleItemElement(e,a);i.after(o),i.remove();}clearContent(e){const{$container:i}=this.parseViewElement(e);c.html(i,"");}setDeleteBtnText(e,i,a=false){const{$deleteBtn:o}=this.parseViewElement(e);a?c.html(o,i):c.text(o,i);}async updateDeleteAllBtnText(e){let i=await this.option.data();this.setDeleteBtnText(e,`清空所有(${i.length})`);}}const U={$key:{STORAGE_KEY:"cookie-rule"},$data:{matchedRuleList:[]},init(){this.$data.matchedRuleList=[],this.$data.matchedRuleList=this.getMatchedRuleList(),this.$data.matchedRuleList.length&&ge.add({key:"matched-cookie-rule-list",text:`${window.location.hostname} ${this.$data.matchedRuleList.length}条规则`,isStoreValue:false,autoReload:false,showText(t,e){return t},callback(t){console.log(U.$data.matchedRuleList),alert(`以下是命中的规则名：
`+U.$data.matchedRuleList.map(e=>e.name).join(`
`));}});},getMatchedRuleList(t=window.location.href){let e=this.getData(),i=[];return e.forEach(a=>{if(!a.enable)return;let o=window.location.href,l=a.data.url;if(a.data.enableRegExpToMatchUrl){if(!new RegExp(l,"i").test(o))return}else if(!o.includes(l))return;i.push(a);}),i},showView(){let t=$.config.PanelHandlerComponents();function e(o,l){return {get(r,n){return Reflect.get(o,r)??n},set(r,n){Reflect.set(o,r,n);}}}const i=this.getMatchedRuleList();new Ke({title:"Cookie规则",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:o=>o.name,updateData:o=>this.updateData(o),deleteData:o=>this.deleteData(o),getData:o=>this.getData().find(n=>n.uuid===o.uuid)??o,itemControls:{enable:{enable:true,getEnable(o){return o.enable},callback:(o,l)=>{o.enable=l,this.updateData(o);}},edit:{enable:true,getView:(o,l)=>{let r=document.createDocumentFragment(),n=this.getTemplateData();l||(o=n);let s=B("启用","enable",n.enable);Reflect.set(s.props,T,e(o));let u=t.createSectionContainerItem_switch(s),p=ue("规则名称","name","",n.name,void 0,"必填");Reflect.set(p.props,T,e(o));let f=t.createSectionContainerItem_input(p),h=X("Cookie管理Api","execApiName",n.data.execApiName,[{text:"（当前）"+V.cookieManagerApiName,value:"use-global"},...we.map(D=>({text:D,value:D}))],void 0,"操作Cookie的Api函数");Reflect.set(h.props,T,e(o.data));let m=t.createSectionContainerItem_select(h),d=ue("网址","url",n.data.url,"用于执行该规则的网址",void 0,"必填");Reflect.set(d.props,T,e(o.data));let g=t.createSectionContainerItem_input(d),y=B("启用正则匹配网址","enableRegExpToMatchUrl",n.data.enableRegExpToMatchUrl);Reflect.set(y.props,T,e(o.data));let x=t.createSectionContainerItem_switch(y),k=ue("Cookie名称","cookieName",n.data.cookieName,"用于匹配执行操作的Cookie名",void 0,"必填");Reflect.set(k.props,T,e(o.data));let v=t.createSectionContainerItem_input(k),b=B("启用正则匹配Cookie名称","enableRegExpToMatchCookieName",n.data.enableRegExpToMatchCookieName);Reflect.set(b.props,T,e(o.data));let S=t.createSectionContainerItem_switch(b),A=X("操作模式","operationMode",n.data.operationMode,[{value:"delete",text:"删除Cookie"},{value:"extended",text:"自动延长Cookie有效期30天"},{value:"extended-90",text:"自动延长Cookie有效期90天"},{value:"extended-180",text:"自动延长Cookie有效期180天"},{value:"extended-360",text:"自动延长Cookie有效期360天"}]);Reflect.set(A.props,T,e(o.data));let M=t.createSectionContainerItem_select(A),R=Be("备注","remark",n.data.remark);Reflect.set(R.props,T,e(o.data));let L=t.createSectionContainerItem_textarea(R);return r.append(u,f,m,g,x,v,S,M,L),r},onsubmit:(o,l,r)=>{let n=o.querySelectorAll(".rule-form-ulist > li"),s=this.getTemplateData();l&&(s.uuid=r.uuid);try{return n.forEach(u=>{let p=Reflect.get(u,"__formConfig__"),f=Reflect.get(p,"attributes"),h=Reflect.get(u,T),m=Reflect.get(f,j),d=Reflect.get(f,K),g=h.get(m,d);Reflect.has(s,m)?Reflect.set(s,m,g):Reflect.has(s.data,m)?Reflect.set(s.data,m,g):_.error(`${m}不在数据中`);}),s.name.trim()===""?(w.error("规则名称不能为空"),{success:!1,data:s}):s.data.url.trim()===""?(w.error("网址不能为空"),{success:!1,data:s}):s.data.cookieName.trim()===""?(w.error("Cookie名称不能为空"),{success:!1,data:s}):l?{success:this.updateData(s),data:s}:{success:this.addData(s),data:s}}catch(u){return _.error(u),{success:false,data:s}}finally{this.init();}},style:`
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
                    `},delete:{enable:true,deleteCallBack:o=>this.deleteData(o)}},bottomControls:{filter:{enable:true,option:[{name:"过滤-已启用",filterCallBack(o){return o.enable}},{name:"过滤-未启用",filterCallBack(o){return !o.enable}},{name:"过滤-当前网站执行",filterCallBack(o){return i.some(l=>l.uuid===o.uuid)}}]}}}).showView();},getTemplateData(){return {uuid:C.generateUUID(),enable:true,name:"",data:{url:"",execApiName:"use-global",enableRegExpToMatchUrl:false,cookieName:"",enableRegExpToMatchCookieName:false,operationMode:"delete",remark:""}}},getData(){return me(this.$key.STORAGE_KEY,[])},setData(t){ie(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(a=>a.uuid==t.uuid)===-1?(e.push(t),ie(this.$key.STORAGE_KEY,e),true):false},updateData(t){let e=this.getData(),i=e.findIndex(o=>o.uuid==t.uuid),a=false;return i!==-1&&(a=true,e[i]=t),this.setData(e),a},deleteData(t){let e=this.getData(),i=e.findIndex(o=>o.uuid==t.uuid),a=false;return i!==-1&&(a=true,e.splice(i,1)),this.setData(e),a},clearData(){Me(this.$key.STORAGE_KEY);},exportRule(t="rule.json"){let e=this.getData(),i=new Blob([JSON.stringify(e,null,4)]),a=window.URL.createObjectURL(i),o=c.createElement("a");o.href=a,o.download=t,o.click(),setTimeout(()=>{window.URL.revokeObjectURL(a);},1500);},importRule(){let t=$.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
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
            `}),e=t.$shadowRoot.querySelector(".import-mode[data-mode='local']"),i=t.$shadowRoot.querySelector(".import-mode[data-mode='network']");c.on(e,"click",a=>{c.preventEvent(a),t.close();let o=c.createElement("input",{type:"file",accept:".json"});c.on(o,["propertychange","input"],l=>{if(!o.files?.length)return;let r=o.files[0],n=new FileReader;n.onload=()=>{let s=C.toJSON(n.result);if(!Array.isArray(s)){_.error("不是正确的规则文件",s),w.error("不是正确的规则文件");return}this.setData(s),w.success(`成功导入 ${s.length}条规则`);},n.readAsText(r,"UTF-8");}),o.click();}),c.on(i,"click",a=>{c.preventEvent(a),t.close(),$.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"url",focus:true},btn:{ok:{callback:async(o,l)=>{let r=o.text;if(C.isNull(r)){w.error("请填入完整的url");return}let n=await xe.get(r);if(!n.status)return;let s=C.toJSON(n.data.responseText);if(!Array.isArray(s)){_.error("不是正确的规则文件",n,s),w.error("不是正确的规则文件");return}this.setData(s),o.close(),w.success(`成功导入 ${s.length}条规则`);}}},width:q.info.width,height:"auto"});});}},Q={encrypt(t,e){return se.AES.encrypt(t,e).toString()},decrypt(t,e){return se.AES.decrypt(t,e).toString(se.enc.Utf8)},formatCookie(t,e,i){let a="";if(e==="header_string")a=t.map(o=>{let l=o.value;return `${o.name}=${l}; `}).join("");else if(e==="json")a=JSON.stringify({api:V.cookieManagerApiName,hostname:window.location.hostname,data:t},null,2);else throw new Error("不支持的格式化类型："+e);return i&&(a=this.encrypt(a,i)),a},showExportDialog(){let t=$.confirm({title:{text:"导出 Cookie",position:"center"},content:{text:`
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
					`,html:true},width:window.innerWidth<400?"88vw":"400px",height:"auto",btn:{merge:true,position:"space-between",ok:{text:"导出",async callback(n,s){let u=he.$data.cookieList;if(u.length===0){w.warning("Cookie为空");return}let p=Q.formatCookie(u,r.exportType,r.encodePwd);const f=new Blob([p],{type:"text/plain"}),h=URL.createObjectURL(f);c.createElement("a",{download:`${window.location.hostname}_${r.exportType}_${V.cookieManagerApiName}_${Date.now()}.txt`,href:h,target:"_blank"}).click(),setTimeout(()=>{URL.revokeObjectURL(h);},500),n.close();}},other:{enable:true,text:"导出至剪贴板",type:"xiaomi-primary",async callback(n,s){let u=he.$data.cookieList;if(u.length===0){w.warning("Cookie为空");return}let p=Q.formatCookie(u,r.exportType,r.encodePwd);await C.copy(p)?w.success("复制成功"):w.error("复制失败"),n.close();}}},style:`
					${$.config.cssText.panelCSS}

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
				`}),e=t.$shadowRoot.querySelector(".export-example-code-text-container pre"),i=t.$shadowRoot.querySelector("#cookie-format-header_string"),a=t.$shadowRoot.querySelector("#cookie-format-json"),o=t.$shadowRoot.querySelector("#encode-pwd");const l={key:"cookie-backup-export-dialog-config",getConfig(){return E.getValue(this.key,{exportType:"header_string",encodePwd:""})},saveConfig(){let n="header_string";a.checked&&(n="json"),E.setValue(this.key,{exportType:n,encodePwd:c.val(o)}),r=this.getConfig();}};let r=l.getConfig();c.on(i,"input",()=>{const n=[{name:"_ga",value:"GA1.2.123456789.987654321",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false},{name:"PHPSESSID",value:"28f2d88ee9322cfd2e4f1e",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false},{name:"csrftoken",value:"abcdef123456",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false},{name:"logged_in",value:"true",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false}];let s=this.formatCookie(n,"header_string");c.text(e,s),l.saveConfig();}),c.on(a,"input",()=>{const n=[{name:"sessionId",value:"abc123xyz456",domain:".example.com",path:"/",secure:true,httpOnly:true,sameSite:"lax",expirationDate:1713543600,hostOnly:false,session:false}];let s=this.formatCookie(n,"json");c.text(e,s),l.saveConfig();}),c.on(o,["input","propertychange"],()=>{l.saveConfig();}),r.exportType==="header_string"?i.click():r.exportType==="json"&&a.click(),c.val(o,r.encodePwd);},showImportDialog(){let t=$.confirm({title:{text:"导入 Cookie",position:"center"},content:{text:`
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
					`,html:true},width:window.innerWidth<400?"88vw":"400px",height:"auto",btn:{ok:{text:"导入",async callback(f,h){try{const m=p.decodePwd;let d=p.value;m.trim()===""||(d=Q.decrypt(d,m));const g=C.toJSON(d);if(Array.isArray(g)){_.info(`使用${V.cookieManagerApiName}导入cookie数据`);for(const y of g)await V.updateCookie(y);}else if(typeof g=="object"&&Object.keys(g).length&&Array.isArray(g.data)){const y=new ye(g.api);_.info(`使用${y.cookieManagerApiName}导入cookie数据`);for(const x of g.data)await y.updateCookie(x);}else if(typeof g=="object"&&!Object.keys(g).length){let y=new C.GM_Cookie;_.info(`使用${V.cookieManagerApiName}导入cookie数据`);let x=y.parseCookie(d);for(const k of x)await V.updateCookie({name:k.key,value:k.value,domain:window.location.hostname,path:"/",sameSite:"unspecified",secure:!1,session:!1,hostOnly:!0,httpOnly:!1});}else {_.error(d,g),w.error("cookie格式不符合");return}f.close();}catch(m){w.error(m.toString());}}}},style:`
					${$.config.cssText.panelCSS}

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
				`}),e="",i=t.$shadowRoot.querySelector("#import-cookie-import_from_text"),a=t.$shadowRoot.querySelector("#import-cookie-import_from_file");t.$shadowRoot.querySelector(".import-cookie-value-container");let o=t.$shadowRoot.querySelector(".import-cookie-value-text"),l=o.querySelector("textarea"),r=t.$shadowRoot.querySelector(".import-cookie-value-file"),n=r.querySelector("input"),s=t.$shadowRoot.querySelector("#decode-pwd");const u={key:"cookie-backup-import-dialog-config",getConfig(){let f=E.getValue(this.key,{importType:"import_from_text",decodePwd:"",value:""});return f.importType==="import_from_text"?f.value=l.value:f.importType==="import_from_file"&&(f.value=e),f},saveConfig(){let f="import_from_text";a.checked&&(f="import_from_file"),E.setValue(this.key,{importType:f,decodePwd:c.val(s)}),p=this.getConfig();}};let p=u.getConfig();c.on(i,"input",()=>{u.saveConfig(),n.value="",e="",c.hide(r,false),c.show(o,false);}),c.on(a,"input",()=>{u.saveConfig(),l.value="",c.hide(o,false),c.show(r,false);}),c.on(l,["input","propertychange"],C.debounce(()=>{u.saveConfig();})),c.on(n,["change","input"],f=>{const h=n.files?.[0];if(h){const m=new FileReader;m.onload=function(d){const g=d.target.result;typeof g=="string"&&(e=g,u.saveConfig());},m.readAsText(h);}}),c.on(s,["input","propertychange"],async f=>{u.saveConfig();}),p.importType==="import_from_text"?i.click():p.importType==="import_from_file"&&a.click(),c.val(s,p.decodePwd);}},he={$data:{cookieList:[]},init(){this.registerMenu();},async showView(){const t=$.alert({title:{text:"Cookie编辑器",html:false,position:"center"},content:{text:`
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
                ${$.config.cssText.panelCSS}
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
            `}),e=t.$shadowRoot.querySelector(".cookie-search-inner input"),i=t.$shadowRoot.querySelector(".cookie-search-setting"),a=t.$shadowRoot.querySelector(".cookie-control-refresh"),o=t.$shadowRoot.querySelector(".cookie-control-add"),l=t.$shadowRoot.querySelector(".cookie-control-export"),r=t.$shadowRoot.querySelector(".cookie-control-import"),n=t.$shadowRoot.querySelector(".cookie-control-clear-all"),s=t.$shadowRoot.querySelector(".cookie-control-rule-manager"),u=t.$shadowRoot.querySelector(".cookie-setting"),p=t.$shadowRoot.querySelector(".cookie-list-wrapper");let f=d=>{const g=c.createElement("div",{className:"cookie-item",innerHTML:`
                `,"data-cookie-info":d}),y=[{leftText:"name",rightText:d.name},{leftText:"value",rightText:E.getValue("decode-cookie-value")?decodeURIComponent(d.value):encodeURIComponent(d.value)}];V.cookieManagerApiName==="GM_cookie"||V.cookieManagerApiName==="GM.cookie"?(d=d,y.push({leftText:"domain",rightText:d.domain},{leftText:"path",rightText:d.path},{leftText:"session",rightText:JSON.stringify(d.session)},{leftText:"expires",rightText:d.session?"会话":d.expirationDate?new Date(d.expirationDate*1e3).toISOString():"未知"},{leftText:"httpOnly",rightText:JSON.stringify(d.httpOnly)},{leftText:"hostOnly",rightText:JSON.stringify(d.hostOnly)},{leftText:"secure",rightText:JSON.stringify(d.secure)},{leftText:"sameSite",rightText:d.sameSite})):V.cookieManagerApiName==="cookieStore"&&(d=d,y.push({leftText:"domain",rightText:d.domain},{leftText:"path",rightText:d.path},{leftText:"expires",rightText:d.expires?new Date(d.expires).toISOString():"会话"},{leftText:"secure",rightText:JSON.stringify(d.secure)},{leftText:"sameSite",rightText:d.sameSite})),y.forEach(S=>{const A=c.createElement("div",{className:"cookie-item-group",innerHTML:`
                        <div class="cookie-item-group-left">
                            <p>${S.leftText}</p>
                        </div>
                        <div class="cookie-item-group-right">
                            <p>${S.rightText}</p>
                        </div>
                    `});c.append(g,A);});let x=c.createElement("div",{className:"cookie-item-group cookie-item-group-control",innerHTML:`
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
                            ${$.config.iconSVG.delete}
                        </div>
                    </div>
                `}),k=x.querySelector(".cookie-item-group-control-copy"),v=x.querySelector(".cookie-item-group-control-edit"),b=x.querySelector(".cookie-item-group-control-delete");return c.on(k,"click",S=>{c.preventEvent(S);let A=d.value;C.copy(A).then(M=>{M?w.success("复制成功"):w.error("复制失败");});}),c.on(v,"click",S=>{c.preventEvent(S),fe.showView(d,A=>{let M=f(A);c.after(g,M),g.parentElement?.removeChild(g);});}),c.on(b,"click",S=>{c.preventEvent(S),confirm("确定删除该Cookie？")&&V.deleteCookie(d).then(M=>{M?(_.error(M),w.error("删除失败")):(w.success("删除成功"),g.parentElement?.removeChild(g));});}),c.append(g,[x]),g},h=async d=>{let g=await V.queryAllCookie();c.empty(p);let y=document.createDocumentFragment(),x=E.getValue("exclude-session-cookie");g.forEach(k=>{if(x&&(k.session||V.cookieManagerApiName==="cookieStore"&&k.expires==null)||typeof d=="function"&&!d(k))return;const v=f(k);y.appendChild(v);}),this.$data.cookieList=g,p.appendChild(y);};c.on(e,["input","propertychange"],C.debounce(d=>{let g=c.val(e),y=g.trim()==="",x=E.getValue("search-config-use-regexp");h(k=>y?true:x?!!k.name.match(new RegExp(g)):k.name.includes(g));})),c.listenKeyboard(e,"keypress",(d,g,y)=>{d==="Enter"&&y.length===0&&m();}),c.on(i,"click",d=>{c.preventEvent(d);let y=$.alert({title:{text:"搜索配置",position:"center"},content:{text:"",html:true},btn:{ok:{enable:false}},drag:true,mask:{clickEvent:{toClose:true}},width:q.info.width,height:q.info.height,style:`
                    ${$.config.cssText.panelCSS}

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
                `}).$shadowRoot.querySelector(".pops-alert-content"),k=$.config.PanelHandlerComponents().createSectionContainerItem_switch(B("启用正则表达式","search-config-use-regexp",false,void 0,"使用正则表达式搜索Cookie名称",()=>{m();}));c.append(y,k);}),c.on(a,"click",d=>{c.preventEvent(d),m();}),c.on(o,"click",d=>{c.preventEvent(d),fe.showView(void 0,g=>{m();});}),c.on(l,"click",async d=>{c.preventEvent(d),Q.showExportDialog();}),c.on(r,"click",async d=>{c.preventEvent(d),Q.showImportDialog();}),c.on(n,"click",async d=>{if(c.preventEvent(d),!window.confirm("确定清除全部Cookie？"))return;const y=await V.deleteAllCookie();y.error?w.warning(`清除成功：${y.success} 失败：${y.error}`):w.success("清除成功"),m();}),c.on(s,"click",d=>{c.preventEvent(d),U.showView();}),c.on(u,"click",d=>{c.preventEvent(d);let y=$.alert({title:{text:"设置",position:"center"},content:{text:"",html:true},btn:{ok:{enable:false}},drag:true,mask:{clickEvent:{toClose:true}},width:q.settingMiddle.width,height:q.settingMiddle.height,style:`
                    ${$.config.cssText.panelCSS}

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
                `}).$shadowRoot.querySelector(".pops-alert-content"),x=$.config.PanelHandlerComponents(),k=x.createSectionContainerItem_select(X("CookieManager Api","cookie-manager-api","document.cookie",we.map(S=>({text:S,value:S})),void 0,"操作Cookie的Api函数",S=>{m();})),v=x.createSectionContainerItem_switch(B("解码Cookie值","decode-cookie-value",false,()=>{m();},"对Cookie值进行解码")),b=x.createSectionContainerItem_switch(B("排除Session Cookie","exclude-session-cookie",false,()=>{m();},"过滤掉浏览器会话Cookie"));c.append(y,[k,v,b]);});let m=()=>{c.trigger(e,"input");};m();},registerMenu(){const t=this;ge.add({key:"cookie_manager_view",text:"⚙ Cookie管理",autoReload:false,isStoreValue:false,showText(e,i){return e},callback(e){t.showView();}});}},We={init(){this.execController(),c.ready(()=>{this.execController();});},async execController(){for(let t=0;t<U.$data.matchedRuleList.length;t++){const e=U.$data.matchedRuleList[t],i=e.data.operationMode;_.success(`执行规则：${e.name}`);let a=e.data.execApiName;a==="use-global"&&(a=void 0);const o=new ye(a),l=await o.queryAllCookie();for(let r=0;r<l.length;r++){let n=l[r];const s=n.name,u=e.data.cookieName;let p=false;if(e.data.enableRegExpToMatchCookieName?new RegExp(u,"i").test(s)&&(p=true):s.includes(u)&&(p=true),p){if(i==="delete")o.deleteCookie(n);else if(i.startsWith("extended")){let f=Date.now(),h=720*60*60*1e3,m=h*3,d=h*6,g=h*12,y=h;i==="extended-90"?y=m:i==="extended-180"?y=d:i==="extended-360"&&(y=g);let x=false;if(o.cookieManagerApiName==="document.cookie")n.expirationDate=f+y,x=true;else if(o.cookieManagerApiName==="cookieStore"){let k=n.expires;typeof k=="number"&&k-f<y&&(n.expires=k+y,x=true);}else if(o.cookieManagerApiName==="GM_cookie"||o.cookieManagerApiName==="GM.cookie"){let k=n.expirationDate;typeof k=="number"&&k*1e3-f<y&&(n.expirationDate=k+y/1e3,x=true);}else _.error("未知的cookieManagerApiName",o.cookieManagerApiName);x&&await o.updateCookie(n);}}}}}},de=function(t,e,i,a,o,l,r,n,s,u){let p={text:t,type:"button",attributes:{},props:{},description:e,buttonIcon:a,buttonIsRightIcon:o,buttonIconIsLoading:l,buttonType:r,buttonText:i,callback(f){typeof n=="function"&&n(f);},afterAddToUListCallBack:s};return Reflect.set(p.attributes,Ee,()=>{p.disable=false;}),p},Je={id:"view-rule",title:"规则",headerTitle:"Cookie操作规则",forms:[{type:"forms",text:"",forms:[de("自定义规则","操作Cookie的规则","管理",void 0,false,false,"default",()=>{U.showView();})]},{type:"forms",text:"",forms:[de("数据导入","导入自定义规则数据","导入",void 0,false,false,"primary",()=>{U.importRule();}),de("数据导出","导出自定义规则数据","导出",void 0,false,false,"primary",()=>{U.exportRule("CookieManagerRule.json");})]}]},Ye={id:"view-general",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[X("Toast位置",N.qmsg_config_position.key,N.qmsg_config_position.defaultValue,[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(t,e,i)=>{_.info("设置当前Qmsg弹出位置"+i);},"Toast显示在页面九宫格的位置"),X("最多显示的数量",N.qmsg_config_maxnums.key,N.qmsg_config_maxnums.defaultValue,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),B("逆序弹出",N.qmsg_config_showreverse.key,N.qmsg_config_showreverse.defaultValue,void 0,"修改Toast弹出的顺序")]}]};ae.addContentConfig([Ye,Je]);E.init();he.init();U.init();We.init();

})(Qmsg, DOMUtils, Utils, pops, CryptoJS);