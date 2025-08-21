// ==UserScript==
// @name         CookieManager
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.8.21
// @author       WhiteSevs
// @description  简单而强大的Cookie编辑器，允许您快速创建、编辑和删除Cookie
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA/NJREFUeF7tWm1u4jAQjVHusfR3jMQNlp5ky0l2e5K2Jym9ARLO79JzEMgyKF5FqeN5YzuwQPoHqRl/zPObN5NxVHbnf+rO/c9GAEYG3DkCYwjcOQFGETxbCGitF1mWLeq6/qGUmtZ1PW1+t0qpN2PMn0uwcTAA5vP5tKqqp8bhJ8C5R2PMCrBLajIIAFprOs3fkp0eGfFaluVSMiaFbVIAQhy3Tlw1AA3dXyjGQ0/lagFoxO091PGrZkAq5wmEq2NASuevDgCB889HXVjleb6tqmraaASbHeq6ptpgm+f5cr1eb2PDyzdenAUawfsENuXM60VRvBydQ+oCWmJljHkE1go2EQOgtSbB86q9L54FAJIubMuyfAj2DhgoAmA2m1FlR+nO+6eUWm42m9c+IwREO9YYI9ojt7fuc9HkRVF8Uv0OLPLsq+0F82T/DQDCKs8bu1rrGgDxZELh5LKdTCYfPpah88MMkGy6WdwpghL6A054mQaMx/oBaOy3F2xS2ZtNg/SsqqqocrnrUAqRhBggTF0I8MlsYjUCAiCA/skc5CYaHACO/rZq42oDzpHQ55RyXWNRgWQZ0Ef/xvFlu4sjzBShPkPjXPtzDQwGIM/zB1edzjEG2n06I7aUZgFwpS3u1dVX6LSyg83zv8DiKgSWeABczkSUut82ZJun0h4iggaSJhEGuKq20FLXWRylaKm5ABkMAN/Efb0CbjNDCSiXJlkGeOL5GwuYk/TG4xDiyYFOrGEB8NXuVtCoe0M3Pb445jbDVZs0/rRhpegX7T4nEUFJB8erTX3iyTVJulkHFU4uW6EMEN/y9KFgGdPuFQAC2HuK3JtlKgCIbtF9f8ebom12euncV3DRfFxzlkvXEAM4eiL5OMbGp+Lc3rgMAAHQIM02QmOcZMb23hr7AEDoLwEgeRgIAOstuny1A0J/GACOagJnxKYu4UTiH6E/DAAZpipUQvsHRGlqhDb1Bm3Jd8ME9wrZQsgeGbFgt9u9h765nbN/gJ6+iAGxLDhX/wCNfXuwMANoAFC0OGOcU2TJRQkjImzp2x0vAsCCIA0F7lS4ig5RTu5do28OMQAtJiA3xHbd0P4B4ru1CfrKLAgAqR6E9A8knmdZFuS8WAS7mxI2MaT9AxSDYOejAZBqgqR/wHmPtr25eYJDoD1xbI3AbbL7PFTwXOskAaAljPQBxWBt7r6yWApg2z4ZAO2Kkb4RTtnmHsLxoEJIgjSFxX6/XxwOh5+Cj6L+LdF6Z/gY8kvy5AxwgdQG46S8nc/lm/9RY5U+j/uixid6uSk5lEE1IHYjlxp/FgZcyjlk3REABKVbthkZcMuni/g2MgBB6ZZt/gJwetZfo7objAAAAABJRU5ErkJggg==
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.7.4/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.6.3/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.3.5/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.4.0/dist/index.umd.js
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

(function (y, O, B, ae, le) {
	'use strict';

	var se=typeof GM<"u"?GM:void 0,Le=typeof GM_cookie<"u"?GM_cookie:void 0,Se=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,be=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,me=typeof GM_getValue<"u"?GM_getValue:void 0,Y=typeof GM_info<"u"?GM_info:void 0,qe=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,oe=typeof GM_setValue<"u"?GM_setValue:void 0,Ne=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Ie=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,G=typeof unsafeWindow<"u"?unsafeWindow:void 0,Ge=window;const Me="GM_Panel",Re="data-init",H="data-key",j="data-default-value",Oe="data-init-more-value",T="data-storage-api",q={setting:{get width(){return window.innerWidth<550?"88vw":window.innerWidth<700?"550px":"700px"},get height(){return window.innerHeight<450?"70vh":window.innerHeight<550?"450px":"550px"}},settingMiddle:{get width(){return window.innerWidth<350?"88vw":"350px"},get height(){return window.innerHeight<450?"88vh":"450px"}},info:{get width(){return window.innerWidth<350?"88vw":"350px"},get height(){return window.innerHeight<250?"88vh":"250px"}}};class Pe{storageKey;listenerData;constructor(e){if(typeof e=="string"){let i=e.trim();if(i=="")throw new Error("key参数不能为空字符串");this.storageKey=i;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new B.Dictionary;}getLocalValue(){let e=me(this.storageKey);return e==null&&(e={},this.setLocalValue(e)),e}setLocalValue(e){oe(this.storageKey,e);}set(e,i){let a=this.get(e),o=this.getLocalValue();Reflect.set(o,e,i),this.setLocalValue(o),this.triggerValueChangeListener(e,a,i);}get(e,i){let a=this.getLocalValue();return Reflect.get(a,e)??i}getAll(){return this.getLocalValue()}delete(e){let i=this.get(e),a=this.getLocalValue();Reflect.deleteProperty(a,e),this.setLocalValue(a),this.triggerValueChangeListener(e,i,void 0);}has(e){let i=this.getLocalValue();return Reflect.has(i,e)}keys(){let e=this.getLocalValue();return Reflect.ownKeys(e)}values(){let e=this.getLocalValue();return Reflect.ownKeys(e).map(i=>Reflect.get(e,i))}clear(){Se(this.storageKey);}addValueChangeListener(e,i){let a=Math.random(),o=this.listenerData.get(e)||[];return o.push({id:a,key:e,callback:i}),this.listenerData.set(e,o),a}removeValueChangeListener(e){let i=false;for(const[a,o]of this.listenerData.entries()){for(let l=0;l<o.length;l++){const r=o[l];(typeof e=="string"&&r.key===e||typeof e=="number"&&r.id===e)&&(o.splice(l,1),l--,i=true);}this.listenerData.set(a,o);}return i}triggerValueChangeListener(e,i,a){if(!this.listenerData.has(e))return;let o=this.listenerData.get(e);for(let l=0;l<o.length;l++){const r=o[l];if(typeof r.callback=="function"){let n=this.get(e),s,p;typeof i<"u"&&arguments.length>=2?p=i:p=n,typeof a<"u"&&arguments.length>2?s=a:s=n,r.callback(e,p,s);}}}}const z=new Pe(Me),Ue={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{V.showPanel(ie.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){V.isTopWindow()&&he.add(this.$data.menuOption);},addMenuOption(t){Array.isArray(t)||(t=[t]),this.$data.menuOption.push(...t);},updateMenuOption(t){Array.isArray(t)||(t=[t]),t.forEach(e=>{let i=this.$data.menuOption.findIndex(a=>a.key===e.key);i!==-1&&(this.$data.menuOption[i]=e);});},getMenuOption(t=0){return this.$data.menuOption[t]},deleteMenuOption(t=0){this.$data.menuOption.splice(t,1);}},Ve={waitRemove(...t){t.forEach(e=>{typeof e=="string"&&m.waitNodeList(e).then(i=>{i.forEach(a=>a.remove());});});},addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(i=>{Array.isArray(i)?e=e.concat(i):e.push(i);}),_e(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){let e=typeof be=="function"?be(t.keyName):null;typeof e=="string"&&e?_e(e):Ve.loadStyleLink(t.url);},async loadStyleLink(t){let e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=t,O.ready(()=>{document.head.appendChild(e);});},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(i=>{e.onload=()=>{i(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.match(/^http(s|):\/\//i)?t:t.startsWith("//")?(t.startsWith("///")||(t=window.location.protocol+t),t):(t.startsWith("/")||(t+="/"),t=window.location.origin+t,t)},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;let e=new URL(t);return e.protocol="https:",e.toString()},lockScroll(...t){let e=document.createElement("style");e.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let i=[document.documentElement,document.body].concat(...t||[]);return i.forEach(a=>{a.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(e),{recovery(){i.forEach(a=>{a.classList.remove("pops-overflow-hidden-important");}),e.remove();}}},async getClipboardText(){function t(a){navigator.clipboard.readText().then(o=>{a(o);}).catch(o=>{_.error("读取剪贴板内容失败👉",o),a("");});}function e(a){navigator.permissions.query({name:"clipboard-read"}).then(o=>{t(a);}).catch(o=>{_.error("申请剪贴板权限失败，尝试直接读取👉",o.message??o.name??o.stack),t(a);});}function i(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(a=>{if(!i()){a("");return}document.hasFocus()?e(a):window.addEventListener("focus",()=>{e(a);},{once:true});})},escapeHtml(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(t,e,i=5e3){let a,o=i-e,l=e,r=async n=>{let s=await t(n);if(typeof s=="boolean"&&!s||n){m.workerClearTimeout(a);return}if(l+=e,l>o){r(true);return}a=m.workerSetTimeout(()=>{r(false);},e);};r(false);},findParentNode(t,e,i){if(i){let a=O.closest(t,i);if(a)return a.querySelector(e)}else return O.matches(t,e)?t:O.closest(t,e)}},V={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new m.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new m.Dictionary),this.__onceExecMenuData},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new m.Dictionary),this.__onceExecData},get scriptName(){return Ce},get panelConfig(){return this.__panelConfig},set panelConfig(t){this.__panelConfig=t;},key:Me,attributeKeyName:H,attributeDefaultValueName:j},init(){this.initContentDefaultValue(),Ue.init();},isTopWindow(){return G.top===G.self},initContentDefaultValue(){const t=a=>{if(!a.attributes||a.type==="button"||a.type==="forms"||a.type==="deepMenu")return;let o=new Map,l=a.attributes[H];if(l!=null){const s=a.attributes[j];o.set(l,s);}let r=a.attributes[Oe];if(typeof r=="object"&&r&&Object.keys(r).forEach(s=>{o.set(s,r[s]);}),!o.size){_.warn(["请先配置键",a]);return}let n=a.attributes[Re];if(typeof n=="function"){let s=n();if(typeof s=="boolean"&&!s)return}if(a.type==="switch"){let s=typeof a.disabled=="function"?a.disabled():a.disabled;typeof s=="boolean"&&s&&this.$data.contentConfigInitDisabledKeys.push(...o.keys());}for(const[s,p]of o.entries())this.setDefaultValue(s,p);},e=a=>{for(let o=0;o<a.length;o++){let l=a[o];t(l);let r=l.forms;r&&Array.isArray(r)&&e(r);}},i=[...ie.getAllContentConfig()];for(let a=0;a<i.length;a++){let o=i[a];if(!o.forms)continue;const l=o.forms;l&&Array.isArray(l)&&e(l);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(t,e){this.$data.contentConfigInitDefaultValue.has(t)&&_.warn("请检查该key(已存在): "+t),this.$data.contentConfigInitDefaultValue.set(t,e);},setValue(t,e){z.set(t,e);},getValue(t,e){let i=z.get(t);return i??(this.$data.contentConfigInitDefaultValue.has(t)?this.$data.contentConfigInitDefaultValue.get(t):e)},deleteValue(t){z.delete(t);},hasKey(t){return z.has(t)},addValueChangeListener(t,e){return z.addValueChangeListener(t,(a,o,l)=>{e(t,l,o);})},removeValueChangeListener(t){z.removeValueChangeListener(t);},triggerMenuValueChange(t,e,i){z.triggerValueChangeListener(t,i,e);},exec(t,e,i,a=true){const o=this;let l;typeof t=="string"||Array.isArray(t)?l=()=>t:l=t;let r=false,n=l(),s=[];Array.isArray(n)?(r=true,s=n):s.push(n);let p=s.find(b=>!this.$data.contentConfigInitDefaultValue.has(b));if(p){_.warn(`${p} 键不存在`);return}let c=JSON.stringify(s);if(a){if(this.$data.onceExecMenuData.has(c))return;this.$data.onceExecMenuData.set(c,1);}let f=[],h=[],g=(b,C)=>{let S=[];Array.isArray(C)||(C=[C]),C.forEach(A=>{if(A!=null&&A instanceof HTMLStyleElement){S.push(A);return}}),f=f.concat(S);},d=b=>this.getValue(b),x=()=>{for(let b=0;b<f.length;b++)f[b].remove(),f.splice(b,1),b--;},k=()=>{let b=false;return typeof i=="function"?b=i(s):b=s.every(C=>d(C)),b},w=b=>{let C=k(),S=[];if(C){let A=s.map(R=>this.getValue(R)),M=e({value:r?A:A[0],addStyleElement:(...R)=>g(true,...R)});Array.isArray(M)||(M=[M]),M.forEach(R=>{if(R!=null&&R instanceof HTMLStyleElement){S.push(R);return}});}x(),f=[...S];};return a&&s.forEach(b=>{let C=this.addValueChangeListener(b,(S,A,M)=>{w();});h.push(C);}),w(),{clear(){this.clearStoreStyleElements(),this.removeValueChangeListener(),a&&o.$data.onceExecMenuData.delete(c);},clearStoreStyleElements:()=>x(),removeValueChangeListener:()=>{h.forEach(b=>{this.removeValueChangeListener(b);});}}},execMenu(t,e,i=false,a=false){return this.exec(t,o=>e(o),o=>o.every(r=>{let n=!!this.getValue(r);return V.$data.contentConfigInitDisabledKeys.includes(r)&&(n=false,_.warn(`.execMenu${a?"Once":""} ${r} 被禁用`)),i&&(n=!n),n}),a)},execMenuOnce(t,e,i=false){return this.execMenu(t,e,i,true)},deleteExecMenuOnce(t){return this.$data.onceExecMenuData.delete(t),z.removeValueChangeListener(t)},onceExec(t,e){if(t=this.transformKey(t),typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(t)||(e(),this.$data.onceExecData.set(t,1));},deleteOnceExec(t){t=this.transformKey(t),this.$data.onceExecData.delete(t);},showPanel(t,e=`${Ce}-设置`,i=false,a=false){this.$data.$panel=null,this.$data.panelContent=[];let o=t.findIndex(r=>(typeof r.isBottom=="function"?r.isBottom():!!r.isBottom)&&r.id==="script-version")!==-1;!i&&!o&&t.push(...ie.getDefaultBottomContentConfig());let l=$.panel({title:{text:e,position:"center",html:false,style:""},content:t,btn:{close:{enable:true,callback:(r,n)=>{r.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(r,n)=>{r(),this.$data.$panel=null;}},width:q.setting.width,height:q.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=l,this.$data.panelContent=t,a||this.registerConfigSearch({$panel:l,content:t});},registerConfigSearch(t){const{$panel:e,content:i}=t;let a=async(c,f)=>{if(c==null)return;let h=await f(c);return h&&typeof h.isFind=="boolean"&&h.isFind?h.data:await a(h.data,f)},o=(c,f)=>{const h=new IntersectionObserver(g=>{g.forEach(d=>{d.isIntersecting&&(f?.(),h.disconnect());});},{root:null,threshold:1});h.observe(c),c.scrollIntoView({behavior:"smooth",block:"center"});},l=c=>{const f="pops-flashing";u.animationend(c,()=>{c.classList.remove(f);}),c.classList.add(f);},r=(c,f)=>{m.preventEvent(c);let h=$.alert({title:{text:"搜索配置",position:"center"},content:{text:`
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
						font-size: 0.8rem;
						color: #6c6c6c;
					}
					${t.searchDialogStyle??""}
				`});h.$shadowRoot.querySelector(".search-wrapper");let g=h.$shadowRoot.querySelector(".search-config-text"),d=h.$shadowRoot.querySelector(".search-result-wrapper");g.focus();let x=()=>{u.empty(d);},k=v=>{const b=m.queryProperty(v,S=>S?.next?{isFind:false,data:S.next}:{isFind:true,data:S});let C=u.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${b.matchedData?.path}</div>
							<div class="search-result-item-description">${b.matchedData?.description??""}</div>
						`});return u.on(C,"click",S=>{let M=e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[v.index];if(!M){y.error(`左侧项下标${v.index}不存在`);return}M.scrollIntoView({behavior:"smooth",block:"center"}),M.click(),a(v.next,async R=>{if(R?.next){let L=await m.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(D=>{const I=Reflect.get(D,"__formConfig__");return typeof I=="object"&&I!=null&&I.text===R.name}),2500);if(L)L.click();else return y.error("未找到对应的二级菜单"),{isFind:true,data:R};return {isFind:false,data:R.next}}else {let L=await m.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(D=>Reflect.get(D,"__formConfig__")===R.matchedData?.formConfig),2500);if(L){o(L);let D=L.closest(".pops-panel-forms-fold[data-fold-enable]");D&&(D.querySelector(".pops-panel-forms-fold-container").click(),await m.sleep(500)),o(L,()=>{l(L);});}else y.error("未找到对应的菜单项");return {isFind:true,data:R}}});}),C},w=v=>{const b=new RegExp(v,"i"),C=[],S=(M,R)=>{for(let L=0;L<M.length;L++){const D=M[L];let I=D.forms;if(I&&Array.isArray(I)){const J=m.deepClone(R);if(D.type==="deepMenu"){const X=m.queryProperty(J,K=>K?.next?{isFind:false,data:K.next}:{isFind:true,data:K});X.next={name:D.text};}S(I,J);}else {let J=Reflect.get(D,"text"),X=Reflect.get(D,"description");const K=[J,X];let ye=K.findIndex(W=>{if(typeof W=="string")return W.match(b)});if(ye!==-1){const W=m.deepClone(R),ke=m.queryProperty(W,U=>U?.next?{isFind:false,data:U.next}:{isFind:true,data:U});ke.next={name:J,matchedData:{path:"",formConfig:D,matchedText:K[ye],description:X}};const ve=[];m.queryProperty(W,U=>{const re=U?.name;return typeof re=="string"&&re.trim()!==""&&ve.push(re),U?.next?{isFind:false,data:U.next}:{isFind:true,data:U}});const Te=ve.join(Ve.escapeHtml(" - "));ke.next.matchedData.path=Te,C.push(W);}}}};for(let M=0;M<i.length;M++){const R=i[M];if(!R.forms||R.isBottom&&R.id==="script-version")continue;const L=R.forms;if(L&&Array.isArray(L)){let D=R.title;typeof D=="function"&&(D=D()),S(L,{index:M,name:D});}}let A=document.createDocumentFragment();for(const M of C){let R=k(M);A.appendChild(R);}x(),d.append(A);};u.on(g,"input",m.debounce(v=>{m.preventEvent(v);let b=u.val(g).trim();if(b===""){x();return}w(b);},200));},n=null,s=false,p;u.on(e.$shadowRoot,"dblclick","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",r),u.on(e.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(c,f)=>{clearTimeout(p),p=void 0,s&&n===f?(s=false,r(c)):(p=setTimeout(()=>{s=false;},200),n=f,s=true);},{capture:true}),e.$shadowRoot.appendChild(u.createElement("style",{type:"text/css",textContent:`
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
				`}));},transformKey(t){if(Array.isArray(t)){const e=t.sort();return JSON.stringify(e)}else return t}},N={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},m=B.noConflict(),u=O.noConflict(),$=ae,_=new m.Log(Y,G.console||Ge.console);let Ce=Y?.script?.name||void 0;ae.config.Utils.AnyTouch();const Ee=false;_.config({debug:Ee,logMaxCount:1e3,autoClearConsole:true,tag:true});y.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(t){const e=t.getSetting().type;if(e==="loading")return  false;const i=t.getSetting().content;return e==="warning"?_.warn(i):e==="error"?_.error(i):_.info(i),true},get position(){return V.getValue(N.qmsg_config_position.key,N.qmsg_config_position.defaultValue)},get maxNums(){return V.getValue(N.qmsg_config_maxnums.key,N.qmsg_config_maxnums.defaultValue)},get showReverse(){return V.getValue(N.qmsg_config_showreverse.key,N.qmsg_config_showreverse.defaultValue)},get zIndex(){let t=B.getMaxZIndex(),e=ae.config.InstanceUtils.getPopsMaxZIndex().zIndex;return B.getMaxValue(t,e)+100}});$.GlobalConfig.setGlobalConfig({zIndex:()=>{let t=B.getMaxZIndex(void 0,void 0,i=>{if(i?.classList?.contains("qmsg-shadow-container")||i?.closest("qmsg")&&i.getRootNode()instanceof ShadowRoot)return  false}),e=ae.config.InstanceUtils.getPopsMaxZIndex().zIndex;return B.getMaxValue(t,e)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const he=new m.GM_Menu({GM_getValue:me,GM_setValue:oe,GM_registerMenuCommand:qe,GM_unregisterMenuCommand:Ne}),ge=new m.Httpx({xmlHttpRequest:Ie,logDetails:Ee});ge.interceptors.request.use(t=>t);ge.interceptors.response.use(void 0,t=>(_.error("拦截器-请求错误",t),t.type==="onabort"?y.warning("请求取消",{consoleLogContent:true}):t.type==="onerror"?y.error("请求异常",{consoleLogContent:true}):t.type==="ontimeout"?y.error("请求超时",{consoleLogContent:true}):y.error("其它错误",{consoleLogContent:true}),t));G.Object.defineProperty,G.Function.prototype.apply,G.Function.prototype.call,G.Element.prototype.appendChild,G.setTimeout;const _e=m.addStyle.bind(m);O.selector.bind(O);O.selectorAll.bind(O);const Ae=new m.GM_Cookie,ie={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new m.Dictionary),this.__contentConfig}},addContentConfig(t){Array.isArray(t)||(t=[t]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,t);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(t=0){return this.$data.contentConfig.get(t)??[]},getDefaultBottomContentConfig(){return [{id:"script-version",title:`版本：${Y?.script?.version||"未知"}`,isBottom:true,forms:[],clickFirstCallback(t,e,i){let a=Y?.script?.supportURL||Y?.script?.namespace;return typeof a=="string"&&m.isNotNull(a)&&window.open(a,"_blank"),false}}]}};let De=t=>{(typeof t=="object"&&t!=null||typeof t=="function")&&Object.keys(t).forEach(e=>{typeof t[e]=="function"&&(t[e]=t[e].bind(t));});};const te=Le;De(te);De(Ae);const xe=["document.cookie","cookieStore","GM_cookie","GM.cookie"];class we{__apiName;constructor(e){if(typeof e=="string"&&!xe.includes(e))throw new Error(`未知的apiName：${e}`);this.__apiName=e;}get cookieManagerApiName(){let e=V.getValue("cookie-manager-api","document.cookie");return this.__apiName||e}get cookieManager(){if(this.cookieManagerApiName==="GM_cookie")return {list(e,i){te.list(e,a=>{i(a);});},set(e,i){te.set(e,a=>{i(a);});},delete(e,i){te.delete(e,a=>{i(a);});}};if(this.cookieManagerApiName==="GM.cookie")return {list(e,i){se.cookie.list().then(a=>{i(a);});},set(e,i){se.cookie.set(e).then(a=>{i(a??null);}).catch(a=>{i(a);});},delete(e,i){se.cookie.delete(e).then(a=>{i(a??null);}).catch(a=>{i(a);});}};if(this.cookieManagerApiName==="cookieStore"){let e=G.cookieStore;return {list(i,a){e.getAll().then(o=>{a(o);}).catch(o=>{_.error(o),y.error(o.toString());});},set(i,a){e.set(i).then(()=>{a();}).catch(o=>{a(o);});},delete(i,a){e.delete(i).then(o=>{a();}).catch(o=>{a(o);});}}}else return Ae}queryAllCookie(){return new Promise((e,i)=>{try{this.cookieManager.list({},a=>{let o=a||[];o=o.sort((l,r)=>l.name.localeCompare(r.name)),e(o);});}catch(a){_.error(a),y.error(a.toString()),i(a);}})}deleteAllCookie(){return new Promise((e,i)=>{try{this.cookieManager.list({},async a=>{const o=a||[],l={success:0,error:0};for(let r=0;r<o.length;r++){const n=o[r];await new Promise(p=>{this.deleteCookie(n).then(c=>{p(c);});})?l.error++:l.success++;}e(l);});}catch(a){_.error(a),y.error(a.toString()),i(a);}})}addCookie(e){return new Promise((i,a)=>{try{Reflect.deleteProperty(e,"hostOnly"),this.cookieManager.set(e,o=>{i(o);});}catch(o){_.error(o),y.error(o.toString()),a(o);}})}deleteCookie(e){return new Promise((i,a)=>{try{this.cookieManager.delete(e,o=>{i(o);});}catch(o){_.error(o),y.error(o.toString()),a(o);}})}updateCookie(e){return new Promise(async(i,a)=>{let o;try{if(this.cookieManagerApiName==="document.cookie"||this.cookieManagerApiName==="cookieStore"){let r=await this.deleteCookie(e);if(r)throw new TypeError(r.toString())}let l=await this.addCookie(e);if(l)throw new TypeError(l.toString())}catch(l){o=l;}finally{i(o);}})}}const E=new we,ne={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new B.Dictionary),this.__storeApiFn}},getStorageApi(t){if(this.hasStorageApi(t))return this.$data.storeApiValue.get(t)},hasStorageApi(t){return this.$data.storeApiValue.has(t)},setStorageApi(t,e){this.$data.storeApiValue.set(t,e);},initComponentsStorageApi(t,e,i){let a;this.hasStorageApi(t)?a=this.getStorageApi(t):a=i,this.setComponentsStorageApiProperty(e,a);},setComponentsStorageApiProperty(t,e){Reflect.set(t.props,T,e);}},F=function(t,e,i,a,o,l,r,n){let s={text:t,type:"switch",description:o,disabled:r,attributes:{},props:{},getValue(){return this.props[T].get(e,i)},callback(p,c){let f=!!c;if(_.success(`${f?"开启":"关闭"} ${t}`),typeof a=="function"&&a(p,f))return;this.props[T].set(e,f);},afterAddToUListCallBack:l};return Reflect.set(s.attributes,H,e),Reflect.set(s.attributes,j,i),ne.initComponentsStorageApi("switch",s,{get(p,c){return V.getValue(p,c)},set(p,c){V.setValue(p,c);}}),s},$e={beforeEdit(t,e){const i=E.cookieManagerApiName;return i==="cookieStore"?typeof t.expires=="number"&&(t.expirationDate=t.expires):(i==="GM_cookie"||i==="GM.cookie")&&e&&typeof t.expirationDate=="number"&&(t.expirationDate=t.expirationDate*1e3),t},afterEdit(t){const e=E.cookieManagerApiName;return e==="document.cookie"?t.domain="":e==="cookieStore"?typeof t.expirationDate=="number"&&(t.expires=t.expirationDate):(e==="GM_cookie"||e==="GM.cookie")&&typeof t.expirationDate=="number"&&(t.expirationDate=Math.floor(t.expirationDate/1e3)),t}};let ee=(t,e,i,a)=>({text:t,type:"input",isNumber:false,isPassword:false,props:{},attributes:{},description:"",getValue(){return e()},callback(l,r){i(r);},placeholder:"",disabled:!!a}),ze=(t,e,i,a)=>({text:t,type:"textarea",props:{},attributes:{},description:"",placeholder:"",getValue(){return e()},disabled:a,callback:function(l,r){i(r);}}),ce=(t,e,i,a,o)=>({text:t,type:"select",description:"",attributes:{},props:{},getValue(){return i()},callback(r,n,s){a(n);},data:typeof e=="function"?e():e,disabled:false});const de={init(){},showView(t,e){let i=!!t,a={name:"",value:"",domain:window.location.hostname,path:"/",secure:false,session:false,hostOnly:false,httpOnly:false,sameSite:"lax",expirationDate:Date.now()+3600*24*30*1e3},o=m.assign({},a,true);m.assign(o,t??{},true),o=$e.beforeEdit(o,i);let r=$.confirm({title:{text:i?"编辑Cookie":"添加Cookie",position:"center"},content:{text:"",html:true},drag:true,btn:{position:"center",ok:{text:i?"编辑":"添加",async callback(w,v){if(de.validCookieInfo(o)){if(o.value=encodeURIComponent(o.value),o=$e.afterEdit(o),i){let C=await E.updateCookie(o);C?y.error(C.toString()):(y.success("修改成功"),w.close());}else {let C=await E.addCookie(o);C?y.error(C.toString()):(y.success("添加成功"),w.close());}typeof e=="function"&&e(o);}}},cancel:{text:"取消"}},mask:{enable:true},width:q.settingMiddle.width,height:"auto",style:`
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
            `}).$shadowRoot.querySelector(".pops-confirm-content"),n=$.config.PanelHandlerComponents(),s=n.createSectionContainerItem_input(ee("name",()=>o.name,w=>o.name=w,i)),p=n.createSectionContainerItem_textarea(ze("value",()=>o.value,w=>o.value=w)),c=n.createSectionContainerItem_input(ee("domain",()=>o.domain,w=>o.domain=w)),f=n.createSectionContainerItem_input(ee("path",()=>o.path,w=>o.path=w)),h;o.session?h=n.createSectionContainerItem_input(ee("expires",()=>"会话",w=>{},true)):h=n.createSectionContainerItem_own({type:"own",getLiElementCallBack:function(w){let v=u.createElement("li",{innerHTML:`
							<div class="pops-panel-item-left-text">
								<p class="pops-panel-item-left-main-text">expires</p>
							</div>
							<div class="pops-panel-item-right-wrapper">
								<input type="datetime-local" id="cookie-item-property-expires">
							</div>
						`}),b=v.querySelector("#cookie-item-property-expires");return b.valueAsNumber=o.expirationDate,u.on(b,["change","input","propertychange"],C=>{m.preventEvent(C),o.expirationDate=b.valueAsNumber;}),v}});let g=n.createSectionContainerItem_select(ce("httpOnly",[{text:"true",value:true},{text:"false",value:false}],()=>o.httpOnly,w=>o.httpOnly=w)),d=n.createSectionContainerItem_select(ce("secure",[{text:"true",value:true},{text:"false",value:false}],()=>o.secure,w=>o.secure=w)),x=[{text:"no_restriction",value:"no_restriction"},{text:"lax",value:"lax"},{text:"strict",value:"strict"},{text:"unspecified",value:"unspecified"}];E.cookieManagerApiName==="cookieStore"&&(x=[{text:"lax",value:"lax"},{text:"strict",value:"strict"},{text:"none",value:"none"}]);let k=n.createSectionContainerItem_select(ce("sameSite",x,()=>o.sameSite,w=>o.sameSite=w));u.append(r,[s,p]),E.cookieManagerApiName==="GM_cookie"||E.cookieManagerApiName==="GM.cookie"?u.append(r,[c,f,h,g,d,k]):E.cookieManagerApiName==="cookieStore"&&u.append(r,[c,f,h,k]);},validCookieInfo(t){return t.name==null||t.name==""?(y.error("name不能为空"),false):t.domain==null||t.domain==""?(y.error("domain不能为空"),false):t.path==null||t.path==""?(y.error("path不能为空"),false):true}},Q=function(t,e,i,a,o,l,r){let n=[];typeof a=="function"?n=a():n=a;let s={text:t,type:"select",description:l,attributes:{},props:{},getValue(){return this.props[T].get(e,i)},callback(p,c,f){let h=c;if(_.info(`选择：${f}`),typeof o=="function"&&o(p,h,f))return;this.props[T].set(e,h),typeof r=="function"&&r(p,h,f);},data:n};return Reflect.set(s.attributes,H,e),Reflect.set(s.attributes,j,i),ne.initComponentsStorageApi("select",s,{get(p,c){return V.getValue(p,c)},set(p,c){V.setValue(p,c);}}),s},pe=function(t,e,i,a,o,l="",r,n,s,p){let c={text:t,type:"input",isNumber:false,isPassword:false,attributes:{},props:{},description:a,afterAddToUListCallBack:s,getValue(){return this.props[T].get(e,i)},callback(f,h,g){this.props[T].set(e,h);},placeholder:l};return Reflect.set(c.attributes,H,e),Reflect.set(c.attributes,j,i),ne.initComponentsStorageApi("input",c,{get(f,h){return V.getValue(f,h)},set(f,h){V.setValue(f,h);}}),c},Fe=function(t,e,i,a,o,l="",r,n){let s={text:t,type:"textarea",attributes:{},props:{},description:a,placeholder:l,disabled:r,getValue(){let c=this.props[T].get(e,i);return Array.isArray(c)?c.join(`
`):c},callback(p,c){this.props[T].set(e,c);}};return Reflect.set(s.attributes,H,e),Reflect.set(s.attributes,j,i),ne.initComponentsStorageApi("switch",s,{get(p,c){return V.getValue(p,c)},set(p,c){V.setValue(p,c);}}),s};class Be{option;constructor(e){this.option=e;}async showView(){let e=$.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist"></ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:true},btn:m.assign({ok:{callback:async()=>{await l();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
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
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),i=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");let a=e.$shadowRoot.querySelector(".rule-form-ulist"),o=await this.option.getView(await this.option.data());a.appendChild(o);const l=async()=>{(await this.option.onsubmit(i,await this.option.data())).success&&(e.close(),await this.option.dialogCloseCallBack(true));};}}class He{option;constructor(e){this.option=e;}showView(){let e=$.alert({title:{text:this.option.title,position:"center"},content:{text:`
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
            `}),i=e.$shadowRoot.querySelector(".filter-container"),a=document.createDocumentFragment();this.option.filterOption.forEach(o=>{let l=u.createElement("button",{innerText:o.name},{type:"button"}),r=async()=>{(await this.option.getAllRuleInfo()).forEach(async s=>{await o.filterCallBack(s.data)?u.show(s.$el,false):u.hide(s.$el,false);}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),e.close();};u.on(l,"click",async n=>{m.preventEvent(n),!(typeof o.callback=="function"&&!await o.callback(n,r))&&await r();}),a.appendChild(l);}),i.appendChild(a);}}class je{option;constructor(e){this.option=e;}async showView(e){let i=$.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:true},btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async l=>{this.showEditView(false,await this.option.getAddData(),i.$shadowRoot);}},close:{enable:true,callback(l){i.close();}},cancel:{enable:this.option?.bottomControls?.filter?.enable||false,type:"default",text:"过滤",callback:(l,r)=>{typeof this.option?.bottomControls?.filter?.callback=="function"&&this.option.bottomControls.filter.callback();let n=()=>Array.from(i.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),s=r.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");u.text(s).includes("取消")?(n().forEach(p=>{u.show(p,false);}),u.text(s,"过滤")):new He({title:this.option.bottomControls?.filter?.title??"过滤规则",filterOption:this.option.bottomControls?.filter?.option||[],execFilterCallBack(){u.text(s,"取消过滤");},getAllRuleInfo:()=>n().map(c=>({data:this.parseRuleItemElement(c).data,$el:c}))}).showView();}},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:l=>{let r=$.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async n=>{if(_.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){y.error("清理失败");return}else y.success("清理成功");await this.updateDeleteAllBtnText(i.$shadowRoot),this.clearContent(i.$shadowRoot),r.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
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
            `}),a=await this.option.data(),o=false;for(let l=0;l<a.length;l++){let r=a[l],n=await this.appendRuleItemElement(i.$shadowRoot,r);(typeof e=="function"?e(r):true)||(o=true,n.forEach(p=>{u.hide(p,false);}));}if(o){let l=i.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");u.text(l,"取消过滤");}}showEditView(e,i,a,o,l,r){let n=async p=>{if(p){if(typeof r=="function"){let c=await this.option.getData(i);r(c);}}else if(e||await this.option.deleteData(i),typeof l=="function"){let c=await this.option.getData(i);l(c);}};new Be({title:e?"编辑":"添加",data:()=>i,dialogCloseCallBack:n,getView:async p=>await this.option.itemControls.edit.getView(p,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async(p,c)=>{p.close(),await n(false);}},close:{callback:async(p,c)=>{p.close(),await n(false);}}},onsubmit:async(p,c)=>{let f=await this.option.itemControls.edit.onsubmit(p,e,c);return f.success?e?(y.success("修改成功"),a&&await this.updateRuleItemElement(f.data,o,a)):a&&await this.appendRuleItemElement(a,f.data):e&&_.error("修改失败"),f},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(e){let i=e.querySelector(".rule-view-container"),a=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:i,$deleteBtn:a}}parseRuleItemElement(e){let i=e.querySelector(".rule-controls-enable"),a=i.querySelector(".pops-panel-switch"),o=i.querySelector(".pops-panel-switch__input"),l=i.querySelector(".pops-panel-switch__core"),r=e.querySelector(".rule-controls-edit"),n=e.querySelector(".rule-controls-delete");return {$enable:i,$enableSwitch:a,$enableSwitchInput:o,$enableSwitchCore:l,$edit:r,$delete:n,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,i){let a=await this.option.getDataItemName(e),o=u.createElement("div",{className:"rule-item",innerHTML:`
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
			`});Reflect.set(o,"data-rule",e);let l="pops-panel-switch-is-checked";const{$enable:r,$enableSwitch:n,$enableSwitchCore:s,$enableSwitchInput:p,$delete:c,$edit:f}=this.parseRuleItemElement(o);return this.option.itemControls.enable.enable?(u.on(s,"click",async h=>{let g=false;n.classList.contains(l)?(n.classList.remove(l),g=false):(n.classList.add(l),g=true),p.checked=g,await this.option.itemControls.enable.callback(e,g);}),await this.option.itemControls.enable.getEnable(e)&&n.classList.add(l)):r.remove(),this.option.itemControls.edit.enable?u.on(f,"click",h=>{m.preventEvent(h),this.showEditView(true,e,i,o,g=>{e=null,e=g;});}):f.remove(),this.option.itemControls.delete.enable?u.on(c,"click",h=>{m.preventEvent(h);let g=$.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async d=>{_.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(y.success("成功删除该数据"),o.remove(),await this.updateDeleteAllBtnText(i),g.close()):y.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):c.remove(),o}async appendRuleItemElement(e,i){let{$container:a}=this.parseViewElement(e),o=[],l=Array.isArray(i)?i:[i];for(let r=0;r<l.length;r++){let n=l[r],s=await this.createRuleItemElement(n,e);a.appendChild(s),o.push(s);}return await this.updateDeleteAllBtnText(e),o}async updateRuleContaienrElement(e){this.clearContent(e);const{$container:i}=this.parseViewElement(e);let a=await this.option.data();await this.appendRuleItemElement(e,a),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,i,a){let o=await this.createRuleItemElement(e,a);i.after(o),i.remove();}clearContent(e){const{$container:i}=this.parseViewElement(e);u.html(i,"");}setDeleteBtnText(e,i,a=false){const{$deleteBtn:o}=this.parseViewElement(e);a?u.html(o,i):u.text(o,i);}async updateDeleteAllBtnText(e){let i=await this.option.data();this.setDeleteBtnText(e,`清空所有(${i.length})`);}}const P={$key:{STORAGE_KEY:"cookie-rule"},$data:{matchedRuleList:[]},init(){this.$data.matchedRuleList=[],this.$data.matchedRuleList=this.getMatchedRuleList(),this.$data.matchedRuleList.length&&he.add({key:"matched-cookie-rule-list",text:`${window.location.hostname} ${this.$data.matchedRuleList.length}条规则`,isStoreValue:false,autoReload:false,showText(t,e){return t},callback(t){console.log(P.$data.matchedRuleList),alert(`以下是命中的规则名：
`+P.$data.matchedRuleList.map(e=>e.name).join(`
`));}});},getMatchedRuleList(t=window.location.href){let e=this.getData(),i=[];return e.forEach(a=>{if(!a.enable)return;let o=window.location.href,l=a.data.url;if(a.data.enableRegExpToMatchUrl){if(!new RegExp(l,"i").test(o))return}else if(!o.includes(l))return;i.push(a);}),i},showView(){let t=$.config.PanelHandlerComponents();function e(o,l){return {get(r,n){return Reflect.get(o,r)??n},set(r,n){Reflect.set(o,r,n);}}}const i=this.getMatchedRuleList();new je({title:"Cookie规则",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:o=>o.name,updateData:o=>this.updateData(o),deleteData:o=>this.deleteData(o),getData:o=>this.getData().find(n=>n.uuid===o.uuid)??o,itemControls:{enable:{enable:true,getEnable(o){return o.enable},callback:(o,l)=>{o.enable=l,this.updateData(o);}},edit:{enable:true,getView:(o,l)=>{let r=document.createDocumentFragment(),n=this.getTemplateData();l||(o=n);let s=F("启用","enable",n.enable);Reflect.set(s.props,T,e(o));let p=t.createSectionContainerItem_switch(s),c=pe("规则名称","name","",n.name,void 0,"必填");Reflect.set(c.props,T,e(o));let f=t.createSectionContainerItem_input(c),h=Q("Cookie管理Api","execApiName",n.data.execApiName,[{text:"（当前）"+E.cookieManagerApiName,value:"use-global"},...xe.map(D=>({text:D,value:D}))],void 0,"操作Cookie的Api函数");Reflect.set(h.props,T,e(o.data));let g=t.createSectionContainerItem_select(h),d=pe("网址","url",n.data.url,"用于执行该规则的网址",void 0,"必填");Reflect.set(d.props,T,e(o.data));let x=t.createSectionContainerItem_input(d),k=F("启用正则匹配网址","enableRegExpToMatchUrl",n.data.enableRegExpToMatchUrl);Reflect.set(k.props,T,e(o.data));let w=t.createSectionContainerItem_switch(k),v=pe("Cookie名称","cookieName",n.data.cookieName,"用于匹配执行操作的Cookie名",void 0,"必填");Reflect.set(v.props,T,e(o.data));let b=t.createSectionContainerItem_input(v),C=F("启用正则匹配Cookie名称","enableRegExpToMatchCookieName",n.data.enableRegExpToMatchCookieName);Reflect.set(C.props,T,e(o.data));let S=t.createSectionContainerItem_switch(C),A=Q("操作模式","operationMode",n.data.operationMode,[{value:"delete",text:"删除Cookie"},{value:"extended",text:"自动延长Cookie有效期30天"},{value:"extended-90",text:"自动延长Cookie有效期90天"},{value:"extended-180",text:"自动延长Cookie有效期180天"},{value:"extended-360",text:"自动延长Cookie有效期360天"}]);Reflect.set(A.props,T,e(o.data));let M=t.createSectionContainerItem_select(A),R=Fe("备注","remark",n.data.remark);Reflect.set(R.props,T,e(o.data));let L=t.createSectionContainerItem_textarea(R);return r.append(p,f,g,x,w,b,S,M,L),r},onsubmit:(o,l,r)=>{let n=o.querySelectorAll(".rule-form-ulist > li"),s=this.getTemplateData();l&&(s.uuid=r.uuid);try{return n.forEach(p=>{let c=Reflect.get(p,"__formConfig__"),f=Reflect.get(c,"attributes"),h=Reflect.get(p,T),g=Reflect.get(f,H),d=Reflect.get(f,j),x=h.get(g,d);Reflect.has(s,g)?Reflect.set(s,g,x):Reflect.has(s.data,g)?Reflect.set(s.data,g,x):_.error(`${g}不在数据中`);}),s.name.trim()===""?(y.error("规则名称不能为空"),{success:!1,data:s}):s.data.url.trim()===""?(y.error("网址不能为空"),{success:!1,data:s}):s.data.cookieName.trim()===""?(y.error("Cookie名称不能为空"),{success:!1,data:s}):l?{success:this.updateData(s),data:s}:{success:this.addData(s),data:s}}catch(p){return _.error(p),{success:false,data:s}}finally{this.init();}},style:`
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
                    `},delete:{enable:true,deleteCallBack:o=>this.deleteData(o)}},bottomControls:{filter:{enable:true,option:[{name:"过滤-已启用",filterCallBack(o){return o.enable}},{name:"过滤-未启用",filterCallBack(o){return !o.enable}},{name:"过滤-当前网站执行",filterCallBack(o){return i.some(l=>l.uuid===o.uuid)}}]}}}).showView();},getTemplateData(){return {uuid:m.generateUUID(),enable:true,name:"",data:{url:"",execApiName:"use-global",enableRegExpToMatchUrl:false,cookieName:"",enableRegExpToMatchCookieName:false,operationMode:"delete",remark:""}}},getData(){return me(this.$key.STORAGE_KEY,[])},setData(t){oe(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(a=>a.uuid==t.uuid)===-1?(e.push(t),oe(this.$key.STORAGE_KEY,e),true):false},updateData(t){let e=this.getData(),i=e.findIndex(o=>o.uuid==t.uuid),a=false;return i!==-1&&(a=true,e[i]=t),this.setData(e),a},deleteData(t){let e=this.getData(),i=e.findIndex(o=>o.uuid==t.uuid),a=false;return i!==-1&&(a=true,e.splice(i,1)),this.setData(e),a},clearData(){Se(this.$key.STORAGE_KEY);},exportRule(t="rule.json"){let e=this.getData(),i=new Blob([JSON.stringify(e,null,4)]),a=window.URL.createObjectURL(i),o=u.createElement("a");o.href=a,o.download=t,o.click(),setTimeout(()=>{window.URL.revokeObjectURL(a);},1500);},importRule(){let t=$.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
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
            `}),e=t.$shadowRoot.querySelector(".import-mode[data-mode='local']"),i=t.$shadowRoot.querySelector(".import-mode[data-mode='network']");u.on(e,"click",a=>{m.preventEvent(a),t.close();let o=u.createElement("input",{type:"file",accept:".json"});u.on(o,["propertychange","input"],l=>{if(!o.files?.length)return;let r=o.files[0],n=new FileReader;n.onload=()=>{let s=m.toJSON(n.result);if(!Array.isArray(s)){_.error("不是正确的规则文件",s),y.error("不是正确的规则文件");return}this.setData(s),y.success(`成功导入 ${s.length}条规则`);},n.readAsText(r,"UTF-8");}),o.click();}),u.on(i,"click",a=>{m.preventEvent(a),t.close(),$.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"url",focus:true},btn:{ok:{callback:async(o,l)=>{let r=o.text;if(m.isNull(r)){y.error("请填入完整的url");return}let n=await ge.get(r);if(!n.status)return;let s=m.toJSON(n.data.responseText);if(!Array.isArray(s)){_.error("不是正确的规则文件",n,s),y.error("不是正确的规则文件");return}this.setData(s),o.close(),y.success(`成功导入 ${s.length}条规则`);}}},width:q.info.width,height:"auto"});});}},Z={encrypt(t,e){return le.AES.encrypt(t,e).toString()},decrypt(t,e){return le.AES.decrypt(t,e).toString(le.enc.Utf8)},formatCookie(t,e,i){let a="";if(e==="header_string")a=t.map(o=>{let l=o.value;return `${o.name}=${l}; `}).join("");else if(e==="json")a=JSON.stringify({api:E.cookieManagerApiName,hostname:window.location.hostname,data:t},null,2);else throw new Error("不支持的格式化类型："+e);return i&&(a=this.encrypt(a,i)),a},showExportDialog(){let t=$.confirm({title:{text:"导出 Cookie",position:"center"},content:{text:`
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
					`,html:true},width:window.innerWidth<400?"88vw":"400px",height:"auto",btn:{merge:true,position:"space-between",ok:{text:"导出",async callback(n,s){let p=fe.$data.cookieList;if(p.length===0){y.warning("Cookie为空");return}let c=Z.formatCookie(p,r.exportType,r.encodePwd);const f=new Blob([c],{type:"text/plain"}),h=URL.createObjectURL(f);u.createElement("a",{download:`${window.location.hostname}_${r.exportType}_${E.cookieManagerApiName}_${Date.now()}.txt`,href:h,target:"_blank"}).click(),setTimeout(()=>{URL.revokeObjectURL(h);},500),n.close();}},other:{enable:true,text:"导出至剪贴板",type:"xiaomi-primary",async callback(n,s){let p=fe.$data.cookieList;if(p.length===0){y.warning("Cookie为空");return}let c=Z.formatCookie(p,r.exportType,r.encodePwd);await m.setClip(c)?y.success("复制成功"):y.error("复制失败"),n.close();}}},style:`
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
				`}),e=t.$shadowRoot.querySelector(".export-example-code-text-container pre"),i=t.$shadowRoot.querySelector("#cookie-format-header_string"),a=t.$shadowRoot.querySelector("#cookie-format-json"),o=t.$shadowRoot.querySelector("#encode-pwd");const l={key:"cookie-backup-export-dialog-config",getConfig(){return V.getValue(this.key,{exportType:"header_string",encodePwd:""})},saveConfig(){let n="header_string";a.checked&&(n="json"),V.setValue(this.key,{exportType:n,encodePwd:u.val(o)}),r=this.getConfig();}};let r=l.getConfig();u.on(i,"input",()=>{const n=[{name:"_ga",value:"GA1.2.123456789.987654321",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false},{name:"PHPSESSID",value:"28f2d88ee9322cfd2e4f1e",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false},{name:"csrftoken",value:"abcdef123456",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false},{name:"logged_in",value:"true",domain:window.location.hostname,expires:Date.now()+2592e6,partitioned:false,path:"/",sameSite:"unspecified",secure:false}];let s=this.formatCookie(n,"header_string");u.text(e,s),l.saveConfig();}),u.on(a,"input",()=>{const n=[{name:"sessionId",value:"abc123xyz456",domain:".example.com",path:"/",secure:true,httpOnly:true,sameSite:"lax",expirationDate:1713543600,hostOnly:false,session:false}];let s=this.formatCookie(n,"json");u.text(e,s),l.saveConfig();}),u.on(o,["input","propertychange"],()=>{l.saveConfig();}),r.exportType==="header_string"?i.click():r.exportType==="json"&&a.click(),u.val(o,r.encodePwd);},showImportDialog(){let t=$.confirm({title:{text:"导入 Cookie",position:"center"},content:{text:`
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
					`,html:true},width:window.innerWidth<400?"88vw":"400px",height:"auto",btn:{ok:{text:"导入",async callback(f,h){try{const g=c.decodePwd;let d=c.value;g.trim()===""||(d=Z.decrypt(d,g));const x=m.toJSON(d);if(Array.isArray(x)){_.info(`使用${E.cookieManagerApiName}导入cookie数据`);for(const k of x)await E.updateCookie(k);}else if(typeof x=="object"&&Object.keys(x).length&&Array.isArray(x.data)){const k=new we(x.api);_.info(`使用${k.cookieManagerApiName}导入cookie数据`);for(const w of x.data)await k.updateCookie(w);}else if(typeof x=="object"&&!Object.keys(x).length){let k=new m.GM_Cookie;_.info(`使用${E.cookieManagerApiName}导入cookie数据`);let w=k.parseCookie(d);for(const v of w)await E.updateCookie({name:v.key,value:v.value,domain:window.location.hostname,path:"/",sameSite:"unspecified",secure:!1,session:!1,hostOnly:!0,httpOnly:!1});}else {_.error(d,x),y.error("cookie格式不符合");return}f.close();}catch(g){y.error(g.toString());}}}},style:`
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
				`}),e="",i=t.$shadowRoot.querySelector("#import-cookie-import_from_text"),a=t.$shadowRoot.querySelector("#import-cookie-import_from_file");t.$shadowRoot.querySelector(".import-cookie-value-container");let o=t.$shadowRoot.querySelector(".import-cookie-value-text"),l=o.querySelector("textarea"),r=t.$shadowRoot.querySelector(".import-cookie-value-file"),n=r.querySelector("input"),s=t.$shadowRoot.querySelector("#decode-pwd");const p={key:"cookie-backup-import-dialog-config",getConfig(){let f=V.getValue(this.key,{importType:"import_from_text",decodePwd:"",value:""});return f.importType==="import_from_text"?f.value=l.value:f.importType==="import_from_file"&&(f.value=e),f},saveConfig(){let f="import_from_text";a.checked&&(f="import_from_file"),V.setValue(this.key,{importType:f,decodePwd:u.val(s)}),c=this.getConfig();}};let c=p.getConfig();u.on(i,"input",()=>{p.saveConfig(),n.value="",e="",u.hide(r,false),u.show(o,false);}),u.on(a,"input",()=>{p.saveConfig(),l.value="",u.hide(o,false),u.show(r,false);}),u.on(l,["input","propertychange"],m.debounce(()=>{p.saveConfig();})),u.on(n,["change","input"],f=>{const h=n.files?.[0];if(h){const g=new FileReader;g.onload=function(d){const x=d.target.result;typeof x=="string"&&(e=x,p.saveConfig());},g.readAsText(h);}}),u.on(s,["input","propertychange"],async f=>{p.saveConfig();}),c.importType==="import_from_text"?i.click():c.importType==="import_from_file"&&a.click(),u.val(s,c.decodePwd);}},fe={$data:{cookieList:[]},init(){this.registerMenu();},async showView(){const t=$.alert({title:{text:"Cookie编辑器",html:false,position:"center"},content:{text:`
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
            `}),e=t.$shadowRoot.querySelector(".cookie-search-inner input"),i=t.$shadowRoot.querySelector(".cookie-search-setting"),a=t.$shadowRoot.querySelector(".cookie-control-refresh"),o=t.$shadowRoot.querySelector(".cookie-control-add"),l=t.$shadowRoot.querySelector(".cookie-control-export"),r=t.$shadowRoot.querySelector(".cookie-control-import"),n=t.$shadowRoot.querySelector(".cookie-control-clear-all"),s=t.$shadowRoot.querySelector(".cookie-control-rule-manager"),p=t.$shadowRoot.querySelector(".cookie-setting"),c=t.$shadowRoot.querySelector(".cookie-list-wrapper");let f=d=>{const x=u.createElement("div",{className:"cookie-item",innerHTML:`
                `,"data-cookie-info":d}),k=[{leftText:"name",rightText:d.name},{leftText:"value",rightText:V.getValue("decode-cookie-value")?decodeURIComponent(d.value):encodeURIComponent(d.value)}];E.cookieManagerApiName==="GM_cookie"||E.cookieManagerApiName==="GM.cookie"?(d=d,k.push({leftText:"domain",rightText:d.domain},{leftText:"path",rightText:d.path},{leftText:"session",rightText:JSON.stringify(d.session)},{leftText:"expires",rightText:d.session?"会话":d.expirationDate?new Date(d.expirationDate*1e3).toISOString():"未知"},{leftText:"httpOnly",rightText:JSON.stringify(d.httpOnly)},{leftText:"hostOnly",rightText:JSON.stringify(d.hostOnly)},{leftText:"secure",rightText:JSON.stringify(d.secure)},{leftText:"sameSite",rightText:d.sameSite})):E.cookieManagerApiName==="cookieStore"&&(d=d,k.push({leftText:"domain",rightText:d.domain},{leftText:"path",rightText:d.path},{leftText:"expires",rightText:d.expires?new Date(d.expires).toISOString():"会话"},{leftText:"secure",rightText:JSON.stringify(d.secure)},{leftText:"sameSite",rightText:d.sameSite})),k.forEach(S=>{const A=u.createElement("div",{className:"cookie-item-group",innerHTML:`
                        <div class="cookie-item-group-left">
                            <p>${S.leftText}</p>
                        </div>
                        <div class="cookie-item-group-right">
                            <p>${S.rightText}</p>
                        </div>
                    `});u.append(x,A);});let w=u.createElement("div",{className:"cookie-item-group cookie-item-group-control",innerHTML:`
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
                `}),v=w.querySelector(".cookie-item-group-control-copy"),b=w.querySelector(".cookie-item-group-control-edit"),C=w.querySelector(".cookie-item-group-control-delete");return u.on(v,"click",S=>{m.preventEvent(S);let A=d.value;m.setClip(A).then(M=>{M?y.success("复制成功"):y.error("复制失败");});}),u.on(b,"click",S=>{m.preventEvent(S),de.showView(d,A=>{let M=f(A);u.after(x,M),x.parentElement?.removeChild(x);});}),u.on(C,"click",S=>{m.preventEvent(S),confirm("确定删除该Cookie？")&&E.deleteCookie(d).then(M=>{M?(_.error(M),y.error("删除失败")):(y.success("删除成功"),x.parentElement?.removeChild(x));});}),u.append(x,[w]),x},h=async d=>{let x=await E.queryAllCookie();u.empty(c);let k=document.createDocumentFragment(),w=V.getValue("exclude-session-cookie");x.forEach(v=>{if(w&&(v.session||E.cookieManagerApiName==="cookieStore"&&v.expires==null)||typeof d=="function"&&!d(v))return;const b=f(v);k.appendChild(b);}),this.$data.cookieList=x,c.appendChild(k);};u.on(e,["input","propertychange"],m.debounce(d=>{let x=u.val(e),k=x.trim()==="",w=V.getValue("search-config-use-regexp");h(v=>k?true:w?!!v.name.match(new RegExp(x)):v.name.includes(x));})),u.listenKeyboard(e,"keypress",(d,x,k)=>{d==="Enter"&&k.length===0&&g();}),u.on(i,"click",d=>{m.preventEvent(d);let k=$.alert({title:{text:"搜索配置",position:"center"},content:{text:"",html:true},btn:{ok:{enable:false}},drag:true,mask:{clickEvent:{toClose:true}},width:q.info.width,height:q.info.height,style:`
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
                `}).$shadowRoot.querySelector(".pops-alert-content"),v=$.config.PanelHandlerComponents().createSectionContainerItem_switch(F("启用正则表达式","search-config-use-regexp",false,void 0,"使用正则表达式搜索Cookie名称",()=>{g();}));u.append(k,v);}),u.on(a,"click",d=>{m.preventEvent(d),g();}),u.on(o,"click",d=>{m.preventEvent(d),de.showView(void 0,x=>{g();});}),u.on(l,"click",async d=>{m.preventEvent(d),Z.showExportDialog();}),u.on(r,"click",async d=>{m.preventEvent(d),Z.showImportDialog();}),u.on(n,"click",async d=>{if(m.preventEvent(d),!window.confirm("确定清除全部Cookie？"))return;const k=await E.deleteAllCookie();k.error?y.warning(`清除成功：${k.success} 失败：${k.error}`):y.success("清除成功"),g();}),u.on(s,"click",d=>{m.preventEvent(d),P.showView();}),u.on(p,"click",d=>{m.preventEvent(d);let k=$.alert({title:{text:"设置",position:"center"},content:{text:"",html:true},btn:{ok:{enable:false}},drag:true,mask:{clickEvent:{toClose:true}},width:q.settingMiddle.width,height:q.settingMiddle.height,style:`
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
                `}).$shadowRoot.querySelector(".pops-alert-content"),w=$.config.PanelHandlerComponents(),v=w.createSectionContainerItem_select(Q("CookieManager Api","cookie-manager-api","document.cookie",xe.map(S=>({text:S,value:S})),void 0,"操作Cookie的Api函数",S=>{g();})),b=w.createSectionContainerItem_switch(F("解码Cookie值","decode-cookie-value",false,()=>{g();},"对Cookie值进行解码")),C=w.createSectionContainerItem_switch(F("排除Session Cookie","exclude-session-cookie",false,()=>{g();},"过滤掉浏览器会话Cookie"));u.append(k,[v,b,C]);});let g=()=>{u.trigger(e,"input");};g();},registerMenu(){const t=this;he.add({key:"cookie_manager_view",text:"⚙ Cookie管理",autoReload:false,isStoreValue:false,showText(e,i){return e},callback(e){t.showView();}});}},Ke={init(){this.execController(),u.ready(()=>{this.execController();});},async execController(){for(let t=0;t<P.$data.matchedRuleList.length;t++){const e=P.$data.matchedRuleList[t],i=e.data.operationMode;_.success(`执行规则：${e.name}`);let a=e.data.execApiName;a==="use-global"&&(a=void 0);const o=new we(a),l=await o.queryAllCookie();for(let r=0;r<l.length;r++){let n=l[r];const s=n.name,p=e.data.cookieName;let c=false;if(e.data.enableRegExpToMatchCookieName?new RegExp(p,"i").test(s)&&(c=true):s.includes(p)&&(c=true),c){if(i==="delete")o.deleteCookie(n);else if(i.startsWith("extended")){let f=Date.now(),h=720*60*60*1e3,g=h*3,d=h*6,x=h*12,k=h;i==="extended-90"?k=g:i==="extended-180"?k=d:i==="extended-360"&&(k=x);let w=false;if(o.cookieManagerApiName==="document.cookie")n.expirationDate=f+k,w=true;else if(o.cookieManagerApiName==="cookieStore"){let v=n.expires;typeof v=="number"&&v-f<k&&(n.expires=v+k,w=true);}else if(o.cookieManagerApiName==="GM_cookie"||o.cookieManagerApiName==="GM.cookie"){let v=n.expirationDate;typeof v=="number"&&v*1e3-f<k&&(n.expirationDate=v+k/1e3,w=true);}else _.error("未知的cookieManagerApiName",o.cookieManagerApiName);w&&await o.updateCookie(n);}}}}}},ue=function(t,e,i,a,o,l,r,n,s,p){let c={text:t,type:"button",attributes:{},props:{},description:e,buttonIcon:a,buttonIsRightIcon:o,buttonIconIsLoading:l,buttonType:r,buttonText:i,callback(f){typeof n=="function"&&n(f);},afterAddToUListCallBack:s};return Reflect.set(c.attributes,Re,()=>{c.disable=false;}),c},We={id:"view-rule",title:"规则",headerTitle:"Cookie操作规则",forms:[{type:"forms",text:"",forms:[ue("自定义规则","操作Cookie的规则","管理",void 0,false,false,"default",()=>{P.showView();})]},{type:"forms",text:"",forms:[ue("数据导入","导入自定义规则数据","导入",void 0,false,false,"primary",()=>{P.importRule();}),ue("数据导出","导出自定义规则数据","导出",void 0,false,false,"primary",()=>{P.exportRule("CookieManagerRule.json");})]}]},Je={id:"view-general",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[Q("Toast位置",N.qmsg_config_position.key,N.qmsg_config_position.defaultValue,[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(t,e,i)=>{_.info("设置当前Qmsg弹出位置"+i);},"Toast显示在页面九宫格的位置"),Q("最多显示的数量",N.qmsg_config_maxnums.key,N.qmsg_config_maxnums.defaultValue,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),F("逆序弹出",N.qmsg_config_showreverse.key,N.qmsg_config_showreverse.defaultValue,void 0,"修改Toast弹出的顺序")]}]};ie.addContentConfig([Je,We]);V.init();fe.init();P.init();Ke.init();

})(Qmsg, DOMUtils, Utils, pops, CryptoJS);