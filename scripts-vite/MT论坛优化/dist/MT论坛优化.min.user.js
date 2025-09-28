// ==UserScript==
// @name         MT论坛优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.9.28
// @author       WhiteSevs
// @description  MT论坛效果增强，如自动签到、自动展开帖子、用户状态查看、美化导航、动态头像上传、最新发表、评论过滤器等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://bbs.binmt.cc/*
// @exclude      /^http(s|)://bbs.binmt.cc/uc_server.*$/
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.9.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.7.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.5.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.5.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.js
// @require      https://fastly.jsdelivr.net/npm/@highlightjs/cdn-assets@11.11.1/highlight.min.js
// @resource     HljsCSS    https://fastly.jsdelivr.net/npm/highlight.js@11.11.1/styles/github-dark.min.css
// @resource     ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.css
// @connect      *
// @grant        GM.cookie
// @grant        GM_addStyle
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

(function (x, _, q, ie, ce, Oe) {
  'use strict';

  const d=new Set;const Ve = async t=>{d.has(t)||(d.add(t),(a=>{function r(n){if(typeof GM_addStyle=="function")return GM_addStyle(n);let e=document.createElement("style");if(e.setAttribute("type","text/css"),e.setAttribute("data-type","gm-css"),globalThis.trustedTypes){const l=globalThis.trustedTypes.createPolicy("safe-innerHTML",{createHTML:i=>i});e.innerHTML=l.createHTML(n);}else e.innerHTML=n;return (document.head||document.documentElement).appendChild(e),e}r(a);})(t));};

  var Ae=typeof GM<"u"?GM:void 0,we=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,Ce=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,re=typeof GM_getValue<"u"?GM_getValue:void 0,ne=typeof GM_info<"u"?GM_info:void 0,_e=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,j=typeof GM_setValue<"u"?GM_setValue:void 0,Ue=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Be=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,F=typeof unsafeWindow<"u"?unsafeWindow:void 0,Fe=window;const oe={waitRemove(...e){e.forEach(t=>{typeof t=="string"&&_.waitNodeList(t).then(a=>{a.forEach(n=>n.remove());});});},createBlockCSSNode(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(a=>{Array.isArray(a)?t=t.concat(a):t.push(a);}),_.createElement("style",{type:"text/css",innerHTML:`${t.join(`,
`)}{display: none !important;}`})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(a=>{Array.isArray(a)?t=t.concat(a):t.push(a);}),Q(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){let t=typeof Ce=="function"?Ce(e.keyName):null;typeof t=="string"&&t?Q(t):oe.loadStyleLink(e.url);},async loadStyleLink(e){let t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=e,_.ready(()=>{document.head.appendChild(t);});},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(a=>{t.onload=()=>{a(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.startsWith("data:")||e.match(/^http(s|):\/\//i)?e:e.startsWith("//")?(e.startsWith("///")||(e=window.location.protocol+e),e):(e.startsWith("/")||(e+="/"),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;try{let t=new URL(e);return t.protocol="https:",t.toString()}catch{return e}},lockScroll(...e){let t=document.createElement("style");t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let a=[document.documentElement,document.body].concat(...e||[]);return a.forEach(n=>{n.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(t),{recovery(){a.forEach(n=>{n.classList.remove("pops-overflow-hidden-important");}),t.remove();}}},async getClipboardText(){function e(n){navigator.clipboard.readText().then(i=>{n(i);}).catch(i=>{f.error("读取剪贴板内容失败👉",i),n("");});}function t(n){navigator.permissions.query({name:"clipboard-read"}).then(i=>{e(n);}).catch(i=>{f.error("申请剪贴板权限失败，尝试直接读取👉",i.message??i.name??i.stack),e(n);});}function a(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(n=>{if(!a()){n("");return}document.hasFocus()?t(n):window.addEventListener("focus",()=>{t(n);},{once:true});})},escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(e,t,a=5e3){let n,i=a-t,r=t,o=async l=>{let s=await e(l);if(typeof s=="boolean"&&!s||l){p.workerClearTimeout(n);return}if(r+=t,r>i){o(true);return}n=p.workerSetTimeout(()=>{o(false);},t);};o(false);},findParentNode(e,t,a){if(a){let n=_.closest(e,a);if(n)return n.querySelector(t)}else return _.matches(e,t)?e:_.closest(e,t)}},Re={Viewer:{keyName:"ViewerCSS",url:"https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"},Hljs:{keyName:"HljsCSS",url:"https://fastly.jsdelivr.net/npm/highlight.js@latest/styles/github-dark.min.css"}},ee={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},p=q.noConflict(),u=_.noConflict(),I=ie,f=new p.Log(ne,F.console||Fe.console);let Se=ne?.script?.name||void 0;ie.config.Utils.AnyTouch();const qe=false;f.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});x.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(e){const t=e.getSetting().type;if(t==="loading")return  false;const a=e.getSetting().content;return t==="warning"?f.warn(a):t==="error"?f.error(a):f.info(a),true},get position(){return A.getValue(ee.qmsg_config_position.key,ee.qmsg_config_position.defaultValue)},get maxNums(){return A.getValue(ee.qmsg_config_maxnums.key,ee.qmsg_config_maxnums.defaultValue)},get showReverse(){return A.getValue(ee.qmsg_config_showreverse.key,ee.qmsg_config_showreverse.defaultValue)},get zIndex(){let e=q.getMaxZIndex(),t=ie.config.InstanceUtils.getPopsMaxZIndex().zIndex;return q.getMaxValue(e,t)+100}});I.GlobalConfig.setGlobalConfig({zIndex:()=>{let e=q.getMaxZIndex(void 0,void 0,a=>{if(a?.classList?.contains("qmsg-shadow-container")||a?.closest("qmsg")&&a.getRootNode()instanceof ShadowRoot)return  false}),t=ie.config.InstanceUtils.getPopsMaxZIndex().zIndex;return q.getMaxValue(e,t)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const le=new p.GM_Menu({GM_getValue:re,GM_setValue:j,GM_registerMenuCommand:_e,GM_unregisterMenuCommand:Ue}),B=new p.Httpx({xmlHttpRequest:Be,logDetails:qe});B.interceptors.request.use(e=>e);B.interceptors.response.use(void 0,e=>(f.error("拦截器-请求错误",e),e.type==="onabort"?x.warning("请求取消",{consoleLogContent:true}):e.type==="onerror"?x.error("请求异常",{consoleLogContent:true}):e.type==="ontimeout"?x.error("请求超时",{consoleLogContent:true}):x.error("其它错误",{consoleLogContent:true}),e));F.Object.defineProperty,F.Function.prototype.apply,F.Function.prototype.call,F.Element.prototype.appendChild,F.setTimeout;const Q=u.addStyle.bind(u),$=_.selector.bind(_),P=_.selectorAll.bind(_);new p.GM_Cookie;const Te="GM_Panel",xe="data-init",Y="data-key",Z="data-default-value",Ne="data-init-more-value",R="data-storage-api",W={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},G={setting:{get width(){return W.width<550?"88vw":W.width<700?"550px":"700px"},get height(){return W.height<450?"70vh":W.height<550?"450px":"550px"}},settingMiddle:{get width(){return W.width<350?"88vw":"350px"}},settingBig:{get width(){return W.width<800?"92vw":"800px"},get height(){return W.height<600?"80vh":"600px"}}};class Pe{storageKey;listenerData;constructor(t){if(typeof t=="string"){let a=t.trim();if(a=="")throw new Error("key参数不能为空字符串");this.storageKey=a;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new q.Dictionary;}getLocalValue(){let t=re(this.storageKey);return t==null&&(t={},this.setLocalValue(t)),t}setLocalValue(t){j(this.storageKey,t);}set(t,a){let n=this.get(t),i=this.getLocalValue();Reflect.set(i,t,a),this.setLocalValue(i),this.triggerValueChangeListener(t,n,a);}get(t,a){let n=this.getLocalValue();return Reflect.get(n,t)??a}getAll(){return this.getLocalValue()}delete(t){let a=this.get(t),n=this.getLocalValue();Reflect.deleteProperty(n,t),this.setLocalValue(n),this.triggerValueChangeListener(t,a,void 0);}has(t){let a=this.getLocalValue();return Reflect.has(a,t)}keys(){let t=this.getLocalValue();return Reflect.ownKeys(t)}values(){let t=this.getLocalValue();return Reflect.ownKeys(t).map(a=>Reflect.get(t,a))}clear(){we(this.storageKey);}addValueChangeListener(t,a){let n=Math.random(),i=this.listenerData.get(t)||[];return i.push({id:n,key:t,callback:a}),this.listenerData.set(t,i),n}removeValueChangeListener(t){let a=false;for(const[n,i]of this.listenerData.entries()){for(let r=0;r<i.length;r++){const o=i[r];(typeof t=="string"&&o.key===t||typeof t=="number"&&o.id===t)&&(i.splice(r,1),r--,a=true);}this.listenerData.set(n,i);}return a}triggerValueChangeListener(t,a,n){if(!this.listenerData.has(t))return;let i=this.listenerData.get(t);for(let r=0;r<i.length;r++){const o=i[r];if(typeof o.callback=="function"){let l=this.get(t),s,c;typeof a<"u"&&arguments.length>=2?c=a:c=l,typeof n<"u"&&arguments.length>2?s=n:s=l,o.callback(t,c,s);}}}}const z=new Pe(Te),de={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new p.Dictionary),this.__contentConfig}},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]},getDefaultBottomContentConfig(){return [{id:"script-version",title:`版本：${ne?.script?.version||"未知"}`,isBottom:true,forms:[],clickFirstCallback(e,t,a){let n=ne?.script?.supportURL||ne?.script?.namespace;return typeof n=="string"&&p.isNotNull(n)&&window.open(n,"_blank"),false}}]}},$e={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{A.showPanel(de.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){A.isTopWindow()&&le.add(this.$data.menuOption);},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e);},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(t=>{let a=this.$data.menuOption.findIndex(n=>n.key===t.key);a!==-1&&(this.$data.menuOption[a]=t);});},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1);}},A={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new p.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new p.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new p.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new p.Dictionary),this.__onceExecData},get scriptName(){return Se},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e;},key:Te,attributeKeyName:Y,attributeDefaultValueName:Z},init(){this.initContentDefaultValue(),$e.init();},isTopWindow(){return F.top===F.self},initContentDefaultValue(){const e=n=>{if(!n.attributes||n.type==="button"||n.type==="forms"||n.type==="deepMenu")return;let i=n.attributes[xe];if(typeof i=="function"){let s=i();if(typeof s=="boolean"&&!s)return}let r=new Map,o=n.attributes[Y];if(o!=null){const s=n.attributes[Z];r.set(o,s);}let l=n.attributes[Ne];if(typeof l=="object"&&l&&Object.keys(l).forEach(s=>{r.set(s,l[s]);}),!r.size){f.warn(["请先配置键",n]);return}if(n.type==="switch"){let s=typeof n.disabled=="function"?n.disabled():n.disabled;typeof s=="boolean"&&s&&this.$data.contentConfigInitDisabledKeys.push(...r.keys());}for(const[s,c]of r.entries())this.setDefaultValue(s,c);},t=n=>{for(let i=0;i<n.length;i++){let r=n[i];e(r);let o=r.forms;o&&Array.isArray(o)&&t(o);}},a=[...de.getAllContentConfig()];for(let n=0;n<a.length;n++){let i=a[n];if(!i.forms)continue;const r=i.forms;r&&Array.isArray(r)&&t(r);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&f.warn("请检查该key(已存在): "+e),this.$data.contentConfigInitDefaultValue.set(e,t);},getDefaultValue(e){return this.$data.contentConfigInitDefaultValue.get(e)},setValue(e,t){z.set(e,t);},getValue(e,t){let a=z.get(e);return a??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){z.delete(e);},hasKey(e){return z.has(e)},addValueChangeListener(e,t){return z.addValueChangeListener(e,(n,i,r)=>{t(e,r,i);})},removeValueChangeListener(e){z.removeValueChangeListener(e);},triggerMenuValueChange(e,t,a){z.triggerValueChangeListener(e,a,t);},exec(e,t,a,n=true){const i=this;let r;typeof e=="string"||Array.isArray(e)?r=()=>e:r=e;let o=false,l=r(),s=[];Array.isArray(l)?(o=true,s=l):s.push(l);let c=s.find(C=>!this.$data.contentConfigInitDefaultValue.has(C));if(c){f.warn(`${c} 键不存在`);return}let d=JSON.stringify(s);if(n&&this.$data.onceExecMenuData.has(d))return this.$data.onceExecMenuData.get(d);let m=[],h=[],v=(C,k)=>{let D=[];Array.isArray(k)||(k=[k]),k.forEach(U=>{if(U!=null&&U instanceof HTMLStyleElement){D.push(U);return}}),m=m.concat(D);},w=C=>this.getValue(C),g=()=>{for(let C=0;C<m.length;C++)m[C].remove(),m.splice(C,1),C--;},b=()=>{let C=false;return typeof a=="function"?C=a(s):C=s.every(k=>w(k)),C},S=C=>{let k=b(),D=[];if(k){let U=s.map(E=>this.getValue(E)),T=t({value:o?U:U[0],addStyleElement:(...E)=>v(true,...E)});Array.isArray(T)||(T=[T]),T.forEach(E=>{if(E!=null&&E instanceof HTMLStyleElement){D.push(E);return}});}g(),m=[...D];};n&&s.forEach(C=>{let k=this.addValueChangeListener(C,(D,U,T)=>{S();});h.push(k);}),S();let y={reload(){S();},clear(){this.clearStoreStyleElements(),this.removeValueChangeListener(),n&&i.$data.onceExecMenuData.delete(d);},clearStoreStyleElements:()=>g(),removeValueChangeListener:()=>{h.forEach(C=>{this.removeValueChangeListener(C);});}};return this.$data.onceExecMenuData.set(d,y),y},execMenu(e,t,a=false,n=false){return this.exec(e,i=>t(i),i=>i.every(o=>{let l=!!this.getValue(o);return A.$data.contentConfigInitDisabledKeys.includes(o)&&(l=false,f.warn(`.execMenu${n?"Once":""} ${o} 被禁用`)),a&&(l=!l),l}),n)},execMenuOnce(e,t,a=false,n=false){const i=this.execMenu(e,t,a,true);if(n&&i){const r=()=>{i.reload();};this.removeUrlChangeWithExecMenuOnceListener(e),this.addUrlChangeWithExecMenuOnceListener(e,r);const o=i.clear;i.clear=()=>{o(),this.removeUrlChangeWithExecMenuOnceListener(e);};}return i},deleteExecMenuOnce(e){return e=this.transformKey(e),this.$data.onceExecMenuData.delete(e),this.$data.urlChangeReloadMenuExecOnce.delete(e),z.removeValueChangeListener(e)},onceExec(e,t){if(e=this.transformKey(e),typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(e)||(t(),this.$data.onceExecData.set(e,1));},deleteOnceExec(e){e=this.transformKey(e),this.$data.onceExecData.delete(e);},addUrlChangeWithExecMenuOnceListener(e,t){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.set(e,t);},removeUrlChangeWithExecMenuOnceListener(e){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.delete(e);},triggerUrlChangeWithExecMenuOnceEvent(e){this.$data.urlChangeReloadMenuExecOnce.forEach((t,a)=>{t(e);});},showPanel(e,t=`${Se}-设置`,a=false,n=false){this.$data.$panel=null,this.$data.panelContent=[];let i=e.findIndex(o=>(typeof o.isBottom=="function"?o.isBottom():!!o.isBottom)&&o.id==="script-version")!==-1;!a&&!i&&e.push(...de.getDefaultBottomContentConfig());let r=I.panel({title:{text:t,position:"center",html:false,style:""},content:e,btn:{close:{enable:true,callback:(o,l)=>{o.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(o,l)=>{o(),this.$data.$panel=null;}},width:G.setting.width,height:G.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=r,this.$data.panelContent=e,n||this.registerConfigSearch({$panel:r,content:e});},registerConfigSearch(e){const{$panel:t,content:a}=e;let n=async(d,m)=>{if(d==null)return;let h=await m(d);return h&&typeof h.isFind=="boolean"&&h.isFind?h.data:await n(h.data,m)},i=(d,m)=>{const h=new IntersectionObserver(v=>{v.forEach(w=>{w.isIntersecting&&(m?.(),h.disconnect());});},{root:null,threshold:1});h.observe(d),d.scrollIntoView({behavior:"smooth",block:"center"});},r=d=>{const m="pops-flashing";u.animationend(d,()=>{d.classList.remove(m);}),d.classList.add(m);},o=(d,m)=>{u.preventEvent(d);let h=I.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:G.settingMiddle.width,height:"auto",drag:true,style:`
					${I.config.cssText.panelCSS}

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
					${e.searchDialogStyle??""}
				`});h.$shadowRoot.querySelector(".search-wrapper");let v=h.$shadowRoot.querySelector(".search-config-text"),w=h.$shadowRoot.querySelector(".search-result-wrapper");v.focus();let g=()=>{u.empty(w);},b=y=>{const C=p.queryProperty(y,D=>D?.next?{isFind:false,data:D.next}:{isFind:true,data:D});let k=u.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${C.matchedData?.path}</div>
							<div class="search-result-item-description">${C.matchedData?.description??""}</div>
						`});return u.on(k,"click",D=>{let T=t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[y.index];if(!T){x.error(`左侧项下标${y.index}不存在`);return}T.scrollIntoView({behavior:"smooth",block:"center"}),T.click(),n(y.next,async E=>{if(E?.next){let V=await u.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(L=>{const N=Reflect.get(L,"__formConfig__");return typeof N=="object"&&N!=null&&N.text===E.name}),2500);if(V)V.click();else return x.error("未找到对应的二级菜单"),{isFind:true,data:E};return {isFind:false,data:E.next}}else {let V=await u.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(L=>Reflect.get(L,"__formConfig__")===E.matchedData?.formConfig),2500);if(V){i(V);let L=V.closest(".pops-panel-forms-fold[data-fold-enable]");L&&(L.querySelector(".pops-panel-forms-fold-container").click(),await p.sleep(500)),i(V,()=>{r(V);});}else x.error("未找到对应的菜单项");return {isFind:true,data:E}}});}),k},S=y=>{const C=new RegExp(y,"i"),k=[],D=(T,E)=>{for(let V=0;V<T.length;V++){const L=T[V];let N=L.forms;if(N&&Array.isArray(N)){const te=p.deepClone(E);if(L.type==="deepMenu"){const se=p.queryProperty(te,X=>X?.next?{isFind:false,data:X.next}:{isFind:true,data:X});se.next={name:L.text};}D(N,te);}else {let te=Reflect.get(L,"text"),se=Reflect.get(L,"description");const X=[te,se];let be=X.findIndex(J=>{if(typeof J=="string")return J.match(C)});if(be!==-1){const J=p.deepClone(E),ye=p.queryProperty(J,H=>H?.next?{isFind:false,data:H.next}:{isFind:true,data:H});ye.next={name:te,matchedData:{path:"",formConfig:L,matchedText:X[be],description:se}};const ve=[];p.queryProperty(J,H=>{const fe=H?.name;return typeof fe=="string"&&fe.trim()!==""&&ve.push(fe),H?.next?{isFind:false,data:H.next}:{isFind:true,data:H}});const De=ve.join(oe.escapeHtml(" - "));ye.next.matchedData.path=De,k.push(J);}}}};for(let T=0;T<a.length;T++){const E=a[T];if(!E.forms||E.isBottom&&E.id==="script-version")continue;const V=E.forms;if(V&&Array.isArray(V)){let L=E.title;typeof L=="function"&&(L=L()),D(V,{index:T,name:L});}}let U=document.createDocumentFragment();for(const T of k){let E=b(T);U.appendChild(E);}g(),w.append(U);};u.on(v,"input",p.debounce(y=>{u.preventEvent(y);let C=u.val(v).trim();if(C===""){g();return}S(C);},200));},l=null,s=false,c;u.on(t.$shadowRoot,"dblclick","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",o),u.on(t.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(d,m)=>{clearTimeout(c),c=void 0,s&&l===m?(s=false,l=null,o(d)):(c=setTimeout(()=>{s=false;},200),s=true,l=m);},{capture:true}),t.$shadowRoot.appendChild(u.createElement("style",{type:"text/css",textContent:`
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
				`}));},transformKey(e){if(Array.isArray(e)){const t=e.sort();return JSON.stringify(t)}else return e}},He=()=>{const e="texttolink",t=/((https?:\/\/|www\.)[\x21-\x7e]+[\w\/]|(\w[\w._-]+\.(com|cn|org|net|info|tv|cc))(\/[\x21-\x7e]*[\w\/])?|ed2k:\/\/[\x21-\x7e]+\|\/|thunder:\/\/[\x21-\x7e]+=)/gi,a=function(w){let g=w.originalTarget??w.target,b;if(g!=null&&g.localName==="a"&&g.className.indexOf(e)!==-1&&(b=g.getAttribute("href"),typeof b=="string"&&b.indexOf("http")!==0&&b.indexOf("ed2k://")!==0&&b.indexOf("thunder://")!==0))return g.setAttribute("href","http://"+g)},n=function(w){if(typeof w!="object"||w==null)return;const g=w?.textContent,b=w?.parentNode;if(b!=null&&b?.className?.indexOf?.(e)===-1&&w.nodeName!=="#cdata-section"&&typeof g=="string"){const S=g.replace(t,`<a href="$1" target="_blank" class="${e}">$1</a>`);if(g.length!==S.length){const y=document.createElement("span");u.html(y,S);const C=y.querySelector("a"),k=C.href;return console.log(`识别: ${k}`),b.nodeName.toLowerCase()==="span"?b.replaceChild(C,w):b.replaceChild(y,w)}}},i="a svg canvas applet input button area pre embed frame frameset head iframe img option map meta noscript object script style textarea code".split(" "),r=`//text()[not(ancestor::${i.join(") and not(ancestor::")})]`,o=new RegExp(`^(${i.join("|")})$`,"i"),l=function(w,g){let b,S;if(g+1e4<w.snapshotLength){let y=b=g;for(S=g+1e4;g<=S?b<=S:b>=S;y=g<=S?++b:--b)n(w.snapshotItem(y));setTimeout(function(){return l(w,g+1e4)},15);}else {let y;for(y=b=g,S=w.snapshotLength;g<=S?b<=S:b>=S;y=g<=S?++b:--b)n(w.snapshotItem(y));}},s=function(w){const g=document.evaluate(r,w,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);return l(g,0)},c=function(w){for(const g=document.createTreeWalker(w,NodeFilter.SHOW_TEXT,{acceptNode:function(b){const S=b?.parentNode?.localName;return o.test(S)?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT}});g.nextNode();)n(g.currentNode);};let d=new p.LockFunction(w=>{for(const g of w)if(g.type==="childList"){const b=g.addedNodes;for(let S=0;S<b.length;S++){const y=b[S];c(y);}}});const m=function(){return s(document.body),p.mutationObserver(document.body,{config:{subtree:true,childList:true},callback:g=>{d.run(g);}})},h=function(w){const g=w.getAttribute("href");if(typeof g=="string"&&g.indexOf("http")!==0&&g.indexOf("ed2k://")!==0&&g.indexOf("thunder://")!==0)return w.setAttribute("href","http://"+g)},v=function(){const w=Array.from(document.getElementsByClassName(e));for(const g of w)h(g);};document.addEventListener("mouseover",a),setTimeout(v,1500),setTimeout(m,100);};oe.setGMResourceCSS(Re.Viewer);oe.setGMResourceCSS(Re.Hljs);I.GlobalConfig.setGlobalConfig({mask:{enable:true},drag:true});const pe={formhash:/formhash=([0-9a-zA-Z]+)/,uid:/uid(=|-)(\d+)/,fontSpecial:/<font.*?>|<\/font>|<strike>|<strong>|<i>|<u>|align=".*?"|<br>[\s]*<br>[\s]*<br>/g},O={getAvatar:(e,t="middle")=>`/uc_server/avatar.php?uid=${e}&size=${t}&ts=1`,getCurrentUID(){let e=F.discuz_uid;if(typeof e=="string")return e;let t=$('.sidenv_exit a[href*="uid-"]')||$('#comiis_key a[href*="uid-"]');if(t){let a=t.href.match(/uid=([0-9]+)/);if(a)return a[a.length-1]}},async getFormHash(){let e=Array.from((top||globalThis).document.querySelectorAll("input[name=formhash]"));for(let n=0;n<e.length;n++){let r=e[n].value;if(r)return r}let t=Array.from((top||globalThis).document.querySelectorAll('a[href*="formhash="]'));for(let n=0;n<t.length;n++){let r=t[n].href.match(pe.formhash);if(r){let o=r[r.length-1];if(o)return o}}let a=await B.get("/home.php?mod=spacecp",{fetch:true,allowInterceptConfig:false});if(a.status){let n=a.data.responseText,r=u.toElement(n,true,true).querySelector("input[name=formhash]");if(r){let o=r.value;if(p.isNotNull(o))return o}}else f.error("请求个人主页获取formhash失败",a);},envIsMobile(){return (F.STYLEID||window.STYLEID||typeof STYLEID<"u"&&STYLEID)==="3"},getThreadId:e=>{let t=e.match(/thread-([\d]+)-|&tid=([\d]+)/i);if(t){let a=t.filter(Boolean);return a[a.length-1]}},getForumId(e){let t=e.match(/&fid=([\d]+)/i);if(t)return t[t.length-1]},getPostId(e){let t=e.match(/&pid=([\d]+)/i);if(t)return t[t.length-1]},getRepquote(e){let t=e.match(/&repquote=([\d]+)/i);if(t)return t[t.length-1]}},ue={$key:{sign:"mt-sign-time"},init(){this.sign();},checkSignInfo(){let t=this.getSignInfo().find(a=>a.hostName===window.location.hostname);return t?p.formatTime(Date.now(),"yyyyMMdd")===p.formatTime(t.time,"yyyyMMdd"):false},setSignInfo(){let e={hostName:window.location.hostname,time:Date.now()},t=this.getSignInfo(),a=t.findIndex(n=>n.hostName===e.hostName);a!==-1&&t.splice(a,1),t.push(e),j(this.$key.sign,t);},getSignInfo(){let e=re(this.$key.sign,[]);return Array.isArray(e)?e:(this.clearSignInfo(),[])},getHostNameSignInfo(e=window.location.hostname){return this.getSignInfo().find(a=>a.hostName===e)},clearSignInfo(e){if(typeof e=="string"){let t=this.getSignInfo(),a=t.findIndex(n=>n.hostName===e);a!==-1&&t.splice(a,1),j(this.$key.sign,t);}else we(this.$key.sign);},checkLogin(){return O.envIsMobile()?!!$("a[href*='member.php?mod=logging&action=logout']"):!!$("#comiis_key")},async sign(){let e=await O.getFormHash();if(e==null){if($("#comiis_picshowbox")){f.info("当前为评论区的看图模式 ");return}f.error("自动签到：获取账号formhash失败"),this.clearSignInfo(window.location.hostname),x.error({content:"自动签到：获取账号formhash失败"});return}if(this.checkSignInfo()){f.info("今日已签到");return}let t=!!A.getValue("mt-auto-sign-useFetch"),a=p.getRandomPCUA(),n=()=>{this.setSignInfo();},i=()=>{this.clearSignInfo(window.location.hostname);},r=l=>{let c=ie.alert({title:{text:"未知签到内容",position:"center"},content:{text:"",html:false},width:"88vw",height:"300px"}).$shadowRoot.querySelector(".pops-alert-content");c.innerText=l;},o=[{checkPluginEnableUrl:"/plugin.php?id=k_misign:sign",async sign(){let l={operation:"qiandao",format:"button",formhash:e,inajax:1,ajaxtarget:"midaben_sign"},s=await B.get(`/k_misign-sign.html?${p.toSearchParamsStr(l)}`,{fetch:t,headers:{"User-Agent":a},allowInterceptConfig:false});if(!s.status){x.error("签到：网络异常，请求失败",{consoleLogContent:true});return}n(),f.info("签到信息：",s);let c=s.data.responseText,d=p.parseCDATA(c),m=u.toElement(`<div>${d}</div>`,true,false),h=u.text(m);if(h.includes("需要先登录")){x.error("签到：请先登录账号",{timeout:3e3,consoleLogContent:true}),i();return}else if(h.includes("请稍后再试")||h.includes("您已经被列入黑名单")||h.includes("绑定手机号后才可以签到")||h.includes("您所在用户组不允许使用")){x.error("签到："+h,{timeout:5e3});return}else if(h.includes("今日已签")||h.includes("今日已经签到")){x.info("签到："+h);return}else if(c.includes("您当前的访问请求当中含有非法字符，已经被系统拒绝")){x.error("签到: 您当前的访问请求当中含有非法字符，已经被系统拒绝",{timeout:6e3});return}else if(t&&"location"in p.toJSON(c)){x.success("签到: 签到成功");return}let v=m.querySelector(".con"),w=m.querySelector(".line");if(v&&w){let g=u.text(v).match(/([0-9]+)金币/),b=u.text(w).match(/([0-9]+)/),S=g[g.length-1],y=b[b.length-1];f.success(`金币${S}，排名${y}`),x.info(`
							<div style="display: flex;${O.envIsMobile()?"":"padding: 20px;"}">
								<div style="align-self: center;margin-right: 20px;">签到</div>
								<div>排名 ${y}<br>金币 ${S}</div>
							</div>`,{timeout:4e3,isHTML:true});return}r(c);}},{checkPluginEnableUrl:"/plugin.php?id=dsu_paulsign:sign",async sign(){let l={id:"dsu_paulsign:sign",operation:"qiandao",infloat:1,inajax:1},s=await B.post(`/plugin.php?${p.toSearchParamsStr(l)}`,{data:{formhash:e,qdxq:"kx",qdmode:3,todaysay:"",fastreply:0},processData:true,fetch:t,headers:{"User-Agent":a,"Content-Type":"application/x-www-form-urlencoded"},allowInterceptConfig:false});if(!s.status){x.error("签到：网络异常，请求失败",{consoleLogContent:true});return}n(),f.info("签到信息：",s);let c=s.data.responseText;if(c.includes("签到成功")){x.success("签到：签到成功");return}if(c.includes("今日已经签到")){x.info("签到：您今日已经签到，请明天再来！");return}r(c);}}];for(let l=0;l<o.length;l++){const s=o[l];let c=await B.get(s.checkPluginEnableUrl,{fetch:t,headers:{"User-Agent":p.getRandomPCUA()},allowInterceptConfig:false});if(!c.status){f.error("签到：检查签到插件是否启用的请求失败",c);continue}if(u.toElement(c.data.responseText,true,true).querySelector("#messagetext")||c.data.responseText.includes("插件不存在或已关闭")){f.error(`插件：${s.checkPluginEnableUrl} 未启用或不存在`);continue}await s.sign();break}}},ae={isKMiSign(){return window.location.pathname.startsWith("/k_misign-sign.html")},isPost(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/thread-")||window.location.pathname.startsWith("/forum.php")&&e.has("mod","viewthread")},isPage(){return !!window.location.pathname.match(/^\/page-([0-9]+).html/g)},isGuide(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/forum.php")&&e.has("mod","guide")},isPlate(){return !!window.location.pathname.match(/\/forum-[0-9]{1,2}-[0-9]{1,2}.html/g)},isSearch(){return window.location.pathname.startsWith("/search.php")},isSpace(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/home.php")&&e.has("mod","space")},isMySpace(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/home.php")&&e.has("mod","space")&&e.has("do","profile")&&e.has("mycenter")},isSpaceWithAt(){return window.location.pathname.startsWith("/space-uid-")},isForumList(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/forum.php")&&e.has("forumlist")},isMessage(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/home.php")&&e.has("mod","space")&&e.has("do","notice")},isMessageList(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/home.php")&&e.has("mod","space")&&e.has("do","pm")},isPointsMall(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/keke_integralmall-keke_integralmall.html")||window.location.pathname.startsWith("/plugin.php")&&e.has("id","keke_integralmal")},isPostPublish(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/forum.php")&&e.has("mod","post")},isPostPublish_voting(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/forum.php")&&e.has("special","1")||e.has("fid","42")},isPostPublish_edit(){const e=new URLSearchParams(window.location.search);return this.isPostPublish()&&e.has("action","edit")},isPostPublish_newthread(){const e=new URLSearchParams(window.location.search);return this.isPostPublish()&&e.has("action","newthread")},isPostPublish_reply(){const e=new URLSearchParams(window.location.search);return this.isPostPublish()&&e.has("action","reply")}},ze={init(){u.ready(()=>{A.execMenuOnce("mt-forum-post-quickCollentBtn",()=>{this.quickCollentBtn();}),A.execMenuOnce("mt-forum-post-quickReplyOptimization",()=>{this.quickReplyOptimization();});});},quickCollentBtn(){f.info("【快捷收藏】"),u.waitNode("#scrolltop",1e4).then(async e=>{if(!e)return;let t=await O.getFormHash(),a=O.getThreadId(window.location.href),n=`/home.php?${p.toSearchParamsStr({mod:"spacecp",ac:"favorite",type:"thread",id:a,formhash:t,infloat:"yes",handlekey:"k_favorite",inajax:1,ajaxtarget:"fwin_content_k_favorite"})}`,i=document.createElement("span");i.innerHTML=`
			<a href="${n}" 
				id="k_favorite"
				onclick="showWindow(this.id, this.href, 'get', 0);"
				onmouseover="this.title = $('favoritenumber').innerHTML + ' 人收藏'">
				<img src="https://s1.ax1x.com/2020/04/29/JTk3lD.gif"
						height="26" 
						width="26" 
						style="position:absolute;top:10px;left:11px">
			</a>
			`,u.prepend(e,i);});},quickReplyOptimization(){u.waitNode('#scrolltop a[title="快速回复"]',1e4).then(e=>{e&&(f.info("快捷回复优化"),u.on(e,"click",function(){F.showWindow("reply",e.href),f.info("等待弹窗出现"),u.waitNode("#moreconf",1e4).then(t=>{if(!t)return;f.success("弹出出现，添加按钮");let a=u.createElement("button",{innerText:"一键空格",type:"button",id:"insertspace2"},{style:"float: left;"});u.on(a,"click",n=>{u.preventEvent(n),u.val($("#postmessage"),u.val($("#postmessage"))+"           ");}),u.append(t,a);});}));});}},Qe=".pls .avatar img,.avtm img{border-radius:10%}.pls .avatar img{--avatar-size: 90px;width:var(--avatar-size);height:var(--avatar-size)}";Ve(Qe);const Me={$flag:{isSetHljsCSS:false},init(){ze.init(),A.execMenuOnce("mt-forum-post-autoExpandContent",()=>this.autoExpandContent()),A.execMenuOnce("mt-forum-post-repairImageWidth",()=>this.repairImageWidth()),A.execMenuOnce("mt-forum-post-hideBottomInfoBlock",()=>this.hideBottomInfoBlock()),u.ready(()=>{A.execMenu("mt-forum-post-removeFontStyle",()=>{this.removeFontStyle();}),A.execMenu("mt-forum-post-removeCommentFontStyle",()=>{this.removeCommentFontStyle();}),A.execMenuOnce("mt-forum-post-loadNextPageComment",()=>{this.loadNextPageComment();}),A.execMenuOnce("mt-forum-post-codeQuoteOptimization",()=>{this.codeQuoteOptimization();}),A.execMenuOnce("mt-forum-post-optimizationImagePreview",()=>{this.optimizationImagePreview();}),A.execMenuOnce("mt-forum-post-interceptionAttachment",()=>{this.setAttachmentsClickTip();}),A.execMenu("mt-forum-post-detectingUserOnlineStatus",()=>{this.detectingUserOnlineStatus();}),A.execMenu("mt-forum-post-showUserLevel",()=>{this.showUserLevel();});});},autoExpandContent(){return f.info("自动展开帖子内容"),[Q(`
				div.comiis_message.bg_f.view_one.b_b.cl.message>div.comiis_messages.comiis_aimg_show.cl{
					max-height:inherit!important;
					overflow-y:inherit!important;
					position:inherit!important
				}
        	`),oe.addBlockCSS(".comiis_lookfulltext_bg",".comiis_lookfulltext_key")]},repairImageWidth(){return f.info("修复图片宽度"),Q(`
        .comiis_messages img{
            max-width: 100% !important;
        }`)},removeFontStyle(){let e=document.querySelector(".comiis_a.comiis_message_table");e&&(f.info("移除帖子字体效果"),u.html(e,u.html(e).replace(pe.fontSpecial,"")));},removeCommentFontStyle(){f.info("移除评论区的字体效果");let e=P("font"),t=$(".comiis_postlist .comiis_postli")?.innerHTML||"";t!==""&&(e.forEach(a=>{t.includes(a.innerHTML)||(a.removeAttribute("color"),a.removeAttribute("style"),a.removeAttribute("size"));}),P(".comiis_message.message").forEach(a=>{if(t.includes(a.innerHTML)){a.innerHTML=a.innerHTML.replace(pe.fontSpecial,"");let n=a.nextElementSibling;n&&n.localName==="strike"&&(n.outerHTML=n.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));}})),P(".comiis_postli.comiis_list_readimgs.nfqsqi").forEach(a=>{let n=a.parentElement;n&&n.localName==="strike"&&(n.outerHTML=n.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));});},loadNextPageComment(){if(f.info("自动加载下一页评论"),document.title.includes("提示信息 - MT论坛"))return;if(P(".pgbtn").length==0){f.warn("没有找到下一页按钮");return}var e=async function(n){let i=await B.get(n,{fetch:true,allowInterceptConfig:false});if(!i.status){x.error("网络异常，请求下一页失败");return}var r=p.parseFromString(i.data.responseText),o=r.querySelector(".pgbtn a");return r.querySelector("#postlistreply")?.remove(),r.querySelector(".bm_h.comiis_snvbt")?.remove(),{url:o?o.getAttribute("href"):null,postlist:r.querySelector("#postlist"),pgbtn:r.querySelector(".pgbtn"),pgs:r.querySelector(".pgs.mtm")}},t=async function(){var n=$(".pgbtn a").getAttribute("href");if(n){let i=await e(n);i&&(i.postlist?.querySelector(".comiis_vrx")?.querySelector(".km1")&&(Object.keys(i).forEach(r=>{i[r]=null;}),f.warn("检测到请求的本页内容中存在【楼主】标识，判断为重复页请求")),(!i.url||i.url==n)&&(f.error("最后一页，取消监听"),u.off(document,["scroll","wheel"],a.run),u.remove(".pgbtn")),i.postlist&&u.append("#postlist",u.html(i.postlist)),i.pgbtn&&u.html(".pgbtn",u.html(i.pgbtn)),i.pgs&&u.html(".pgs.mtm",u.html(i.pgs)),Me.init());}else f.error("获取下一页元素失败");};let a=new p.LockFunction(async()=>{p.isNearBottom()&&await t();});u.on(document,["scroll","wheel"],a.run);},codeQuoteOptimization(){f.info("代码块优化");function e(a){var n=["add","and","cmp","cmpg","cmpl","const","div","double","float","goto","if","int","long","move","mul","neg","new","nop","not","or","rem","return","shl","shr","sput","sub","throw","ushr","xor"],i=["aget","aput","array","check","execute","fill","filled","goto/16","goto/32","iget","instance","invoke","iput","monitor","packed","sget","sparse"],r=["transient","constructor","abstract","final","synthetic","public","private","protected","static","bridge","system"];return {aliases:["smali"],contains:[{className:"string",begin:'"',end:'"',relevance:0},a.COMMENT("#","$",{relevance:0}),{className:"keyword",variants:[{begin:"\\s*\\.end\\s[a-zA-Z0-9]*"},{begin:"^[ ]*\\.[a-zA-Z]*",relevance:0},{begin:"\\s:[a-zA-Z_0-9]*",relevance:0},{begin:"\\s("+r.join("|")+")"}]},{className:"built_in",variants:[{begin:"\\s("+n.join("|")+")\\s"},{begin:"\\s("+n.join("|")+")((\\-|/)[a-zA-Z0-9]+)+\\s",relevance:10},{begin:"\\s("+i.join("|")+")((\\-|/)[a-zA-Z0-9]+)*\\s",relevance:10}]},{className:"class",begin:`L[^(;:
]*;`,relevance:0},{begin:"[vp][0-9]+"}]}}Q(`
			.hljs{text-align:left}
			.hljs ol{margin:0 0 0 10px;padding:10px 10px}
			.hljs li{padding-left:10px;list-style-type:decimal-leading-zero;font-family:Monaco,Consolas,'Lucida Console','Courier New',serif;font-size:12px;line-height:1.8em}
			.hljs li:hover{background:#2c313c}
			.hljs li::marker{unicode-bidi:isolate;font-variant-numeric:tabular-nums;text-transform:none;text-indent:0!important;text-align:start!important;text-align-last:start!important}
			.hljs em[onclick^=copycode]{color:#fff;background:#246fff;margin:5px 10px;border-radius:3px;padding:0 5px;cursor:pointer;height:32px;line-height:32px;display:inline-flex}
			.hljs .code-select-language{height:32px;line-height:32px;font-size:14px;border:1px solid #5c5c5c;border-radius:5px;text-align:center;outline:0}
		`),ce.registerLanguage("smali",e);let t=new p.LockFunction(()=>{function a(i,r="java"){i.oldValue||(i.oldValue=i.textContent),i.innerHTML=ce.highlight(i.oldValue,{language:r}).value.replace(/\\n$/gi,"");}document.querySelectorAll("em[onclick^=copycode]").forEach(i=>{if(i.nextElementSibling&&typeof i.nextElementSibling.className=="string"&&i.nextElementSibling.className=="code-select-language")return;let r=ce.highlightAuto(u.text(i.parentElement.querySelector("div[id^=code]"))).language,o=document.createElement("select"),l=ce.listLanguages().sort();l=l.concat("自动检测");let s="";l.forEach(c=>{c.startsWith("自动检测")?s+=`<option data-value="${r}" selected="selected">${c}(${r})</option>`:s+=`<option data-value="${c}">${c}</option>`;}),o.className="code-select-language",o.innerHTML=s,u.on(o,"change",()=>{let c=o.selectedOptions[0].getAttribute("data-value");f.info("切换代码块语言: ",c),u.parent(o).querySelectorAll("li").forEach(d=>{a(d,c);});}),u.preventEvent(o,"click"),u.preventEvent(i,"click"),i.insertAdjacentElement("afterend",o),u.trigger(o,"change");}),document.querySelectorAll(".blockcode").forEach(i=>i.className="hljs");},this,500);p.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{t.run();}});},optimizationImagePreview(){f.info("图片查看优化");let e=[{hostName:"avatar-bbs.mt2.cn",pathName:"*"},{hostName:"cdn-bbs.mt2.cn",pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"/uc_server/avatar.php"}];function t(i=[],r=0){let o="";i.forEach(c=>{o+=`<li><img data-src="${c}"></li>`;});let l=u.createElement("ul",{innerHTML:o}),s=new Oe(l,{inline:false,url:"data-src",zIndex:p.getMaxZIndex()+100,hidden:()=>{s.destroy();}});s.view(r),s.zoomTo(1),s.show();}function a(){P("#postlist .comiis_vrx:not([data-isHandlingViewIMG])").forEach(i=>{i.setAttribute("data-isHandlingViewIMG","true");let r=[];i.querySelectorAll("img").forEach(o=>{let l=o.getAttribute("file")||o.src;if(p.isNull(l))return;let s=new URL(l).hostname,c=new URL(l).pathname,d=o.parentElement;d.nodeName.toLowerCase()==="a"&&d.getAttribute("href")===l&&(d.setAttribute("href","javascript:;"),d.removeAttribute("target"));let m=false;for(let h of e)if(s.indexOf(h.hostName)!=-1&&c.match(h.pathName)){m=true;break}m||(r.push(l),o.removeAttribute("onclick"),o.setAttribute("onclick",""),u.on(o,"click",function(h){u.preventEvent(h),f.info("点击图片",o);let v=r.findIndex(w=>w==l);t(r,v);},{capture:true}));});});}let n=new p.LockFunction(()=>{a();});p.mutationObserver(document,{config:{subtree:true,childList:true},immediate:true,callback:()=>{n.run();}});},setAttachmentsClickTip(){f.info("附件点击提醒");function e(t){if(t.hasAttribute("href")){let a=t.hasAttribute("id")?t.id:t.parentElement.id,n=t.getAttribute("href"),i=t.innerText;if(document.querySelector(`#${a}_menu`).innerText.indexOf("金币")===-1)return;console.log("发现附件",t),console.log("该附件是金币附件，拦截！"),t.setAttribute("data-href",n),t.style.setProperty("cursor","pointer"),t.removeAttribute("href"),t.innerText="【已拦截】"+i,t.onclick=function(){I.confirm({title:{text:"提示",position:"center"},content:{text:`<br />确定花费2金币下载附件 <a style="color: #507daf !important;">${i}</a> ？<br /><br />`,html:true},btn:{ok:{callback:o=>{window.open(n,"_blank"),o.close();}}},width:"400px",height:"200px"});};}}p.mutationObserver(document.documentElement,{callback:()=>{document.querySelectorAll(".attnm a").forEach(t=>{e(t);}),document.querySelectorAll(".comiis_attach a").forEach(t=>{e(t);}),document.querySelectorAll("span[id*=attach_] a").forEach(t=>{e(t);});},immediate:true,config:{childList:true,subtree:true}});},async detectingUserOnlineStatus(){f.info("探测用户在线状态"),A.onceExec("mt-forum-post-detectingUserOnlineStatus",()=>{Q(`
				.gm-user-status-icon{
					border: 0 !important;
					float: right !important;
					display: block !important;
					width: 40px !important;
					height: 40px !important;
				}
			`);});function e(n){return u.createElement("img",{className:"gm-user-status-icon",smilied:n?"1353":"1384",loading:"lazy",src:n?"data:image/png;base64,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":"data:image/png;base64,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"})}function t(n,i){let r=e(i);u.prepend(n,r);}let a=Array.from(P(".pls.favatar:not([data-is-detectingUserOnlineStatus])"));for(let n=0;n<a.length;n++){const i=a[n];let r=i.querySelector(".comiis_o.cl a.kmfxx");if(!r){f.error("探测用户在线状态失败，未找到发消息按钮");return}i.setAttribute("data-is-detectingUserOnlineStatus","true");let o=r.href,l=await B.get(o,{fetch:true,allowInterceptConfig:false});if(!l.status){f.error("探测用户在线状态，中止网络请求探测"),t(i,true);return}let c=u.toElement(l.data.responseText,true,true).querySelector(".flb");if(c){let m=(u.text(c)?.trim()).endsWith("……[离线]");t(i,m);}else t(i,true);}},showUserLevel(){f.info("显示用户等级"),P(".pls.favatar:not([data-show-user-level])").forEach(e=>{e.setAttribute("data-show-user-level","true");let t="0级",a=e.querySelector(".tns tr"),n=e.querySelector("p em").innerText,i=document.createElement("td");switch(i.setAttribute("style","border-left: 1px solid #e3e3e3;"),n){case "幼儿园":case "初级工程师":t="1级";break;case "小学生":case "中级工程师":t="2级";break;case "初中生":case "高级工程师":t="3级";break;case "高中生":case "专家":t="4级";break;case "大学生":case "高级专家":t="5级";break;case "硕士生":case "资深专家":t="6级";break;case "博士生":case "实习版主":case "版主":case "审核员":case "研究员":t="7级";break;case "博士后":case "超级版主":case "网站编辑":case "高级研究员":case "荣誉开发者":t="8级";break;case "管理员":case "信息监察员":case "资深研究员":t="9级";break}i.innerHTML=`<p><a class="dj">${t}</a></p>Lv`,a.appendChild(i);});},hideBottomInfoBlock(){return f.info("隐藏底部信息块"),Q(`
			.pls .favatar>*:not([id^="userinfo"]+div){
				display: none;
			}
			.pls .favatar>div[id^="userinfo"],
			.pls .favatar>div.tns{
				display: block;
			}
			.t_f{
				min-height: 100px !important;
			}
		`)}},We={init(){u.ready(()=>{A.execMenuOnce("mt-guide-beautifyPage",()=>this.beautifyPage());});},beautifyPage(){f.info("页面美化"),Q(`
			.xst{font-size:15px}
			td.author_img{width:50px;padding:15px 0}
			td.author_img img{width:40px;height:40px;border-radius:50%}
			.list_author{margin-top:2px;color:#999;font-size:12px}
			.bankuai_tu_by a{color:#999!important}
			.bankuai_tu_by img{height:16px;margin:1px 1px 0 0;vertical-align:top}
			tbody a:hover{text-decoration:none;color:#3498db}
			.byg_th_align em+a{margin-right:5px}
		`),P(".bm_c table tbody").forEach(e=>{let t=e.querySelector("th.common"),a=u.html(t),n=t.querySelectorAll("a")[0].getAttribute("href"),i=null,o=e.querySelector("td.by>cite>a").getAttribute("href").match(/uid-(\d+)/)[1],l=`
			<td class="author_img">
				<a href="space-uid-${o}.html" c="1" mid="${i}">
					<img src="${O.getAvatar(o,"middle")}">
				</a>
			</td>
			<th colspan="3" class="new byg_th">
				<div class="byg_th_align">
					<em>[${e.querySelector("tr>td.by>a").outerHTML}]</em>
					${a}
				</div>
				<div class="list_author cl">
					<span class="z">作者:&nbsp;
						${e.querySelectorAll("td.by>cite>a")[0].innerHTML}
						${e.querySelectorAll("td.by>em>span")[0].innerHTML}
					</span>
					<span class="z pipe">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
					<span class="z">最后发表:&nbsp;
						${e.querySelectorAll("td.by>cite>a")[1].innerHTML}&nbsp;&nbsp;&nbsp;
						${e.querySelectorAll("td.by>em>a")[0].innerHTML}
					</span>
					<span class="y bankuai_tu_by">
						<a href="${n}">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACOUlEQVRYR+1X0XETMRDdtfRP0gFUgG9O+iZUAKmApAJMBZgKMBUQKohTQcy3dHOmApIOzL/lZTbc3eh0ki/kfMkww37Zlkbv7e7bJxnhiQOfGB/+HQJlWR45594AwAkAvAWAo6B6GwBYAsBKCHGVZRl/743eCjDwbrd7T0SzCGgKYIOIi8lk8qWPyF4C1lrO9OtfAIeEuArnSimuTDSSBIqiOCMiBh8ciPghz/NF7KAogUOC16CIeJ7n+UVIokPAGHOCiNeD044cQESvtdYrf6lDwFq7BoCXIxFYa62zJIFKdJdjgHtnnvqibFXAWss9ejcygW9KqbNGGz6YtZbH5tnIBDZKqeMUAQrBieiT1noemYwfQgj2CXDO8Zw3uqkVb4yZI+LH8EylVFP55kNZllPnXLlvszFmhYiveI8/20VRzIjoM/9ORN+11mzXd2Gt7SQlhMiyLGOxty+j2OZ6dKq74Kfnikul1GkFwhXge4JjI4R4wRacGuloBVJsq0N5dqehJRPRnywQec0P1hKvNZXwF5ME/BKPKMQrpdSddjotGMOCw0RCS275QNXnmxFH8VYIMfWv6I4V+4oeoQ0tF+y0wBsdX9WH4tFywKgG6h+rVrDyD3UpRcGTFfAqMfhuqJ00Vca9T7IhbwN2RCnlrHa8xyJwyy9jIlqGD4+DEOCsAGAupbzZbrfP/UOllOu+F3CMxN4WeMb0CxFnsTfd0BHp08CcAaSUi4dkdx9yvX9M7nPIkD3/CfwGBboJMIftEqkAAAAASUVORK5CYII=" />${e.querySelectorAll("td.num>a")[0].innerText}
						</a>&nbsp;
					</span>
					<span class="y bankuai_tu_by" style="margin-right: 20px">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACVElEQVRYR+1W3W3bQAwmTb83GzSdoDnr7rn2BukETSeoO0HtCdpO0GSCeoPYzzrhnA3sDZJ3yywYSIIk352sOIBRIHwTxCM/kh9/EM4seGb/8Abg/8mAc+4yz/NPAHANAFcAcNnizwYA1gCwIKKVUkq+O6UzA4XjHwBw02mtqXBLRPMuIFEAaZrOEFGcv1gQcZYkyTxkwAvAOXex2+3uEVFSfbIw83o4HE6UUo9tYwcAnHNXeZ7/9dS4/nYrtUbE5zozs/BBuPE+gnZDRAKiwY0GgCMif0LEaZIktz5HWZbdMPMvAHjn++/LRAOAtVZY/DEQxRMRjZVSohOUIoPLGAhjjCoNVACstYL8W5AsiF/bkadpOiYiHo1Gq/q7IhN/Ijh/a62n8v8ZgBhCxPvIg63Wuup7D0+kvp/r2bHWSq2DnGDmiTFmWQJYIqIMmZBUiEUhYHyjtf5QGujKKAAstdYTtNYKe4X1QUHE70mSSImi2SqjEr0sy6bM/DNmV/TPD6CI6jVK0OBJVwmYeWWMGR9LwkZ9CxIuaiTbEtF1HxISkRL9k9tQMihs7tOGzDw3xsyqNqwxNzaIHotReswgkpa+CBDwQWtd7ZiDUZznuUQTmoayTKZa6zuf8WIACfODzotpWi0l3zKSw0NARBcLMzeWESJKO7ePlDrOh7bzgxKU2rKUOjIRa2/fP6/zIIDSwmscJHXC+ZAde5IJY7/0DPuOiGYnnWR1h3Ib7vf7MTOXR2mbI3KkrBFxMRgMFr7r50UZ6Bl1b/XOEvS22PPBG4CzZ+AfrntRcuAjU2wAAAAASUVORK5CYII=" />${e.querySelectorAll("td.num>em")[0].innerText}
					</span>
				</div>
			</th>
			`;u.html(e,l);});}},me={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new q.Dictionary),this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t);},initComponentsStorageApi(e,t,a){let n;this.hasStorageApi(e)?n=this.getStorageApi(e):n=a,this.setComponentsStorageApiProperty(t,n);},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,R,t);}},he=function(e,t,a,n,i,r="",o,l,s,c){let d={text:e,type:"input",isNumber:!!o,isPassword:false,attributes:{},props:{},description:n,afterAddToUListCallBack:s,getValue(){return this.props[R].get(t,a)},callback(m,h,v){this.props[R].set(t,h);},placeholder:r};return Reflect.set(d.attributes,Y,t),Reflect.set(d.attributes,Z,a),me.initComponentsStorageApi("input",d,{get(m,h){return A.getValue(m,h)},set(m,h){A.setValue(m,h);}}),d},M=function(e,t,a,n,i,r,o,l){let s={text:e,type:"switch",description:i,disabled:o,attributes:{},props:{},getValue(){return this.props[R].get(t,a)},callback(c,d){let m=!!d;f.success(`${m?"开启":"关闭"} ${e}`),this.props[R].set(t,m);},afterAddToUListCallBack:r};return Reflect.set(s.attributes,Y,t),Reflect.set(s.attributes,Z,a),me.initComponentsStorageApi("switch",s,{get(c,d){return A.getValue(c,d)},set(c,d){A.setValue(c,d);}}),s},ge=function(e,t,a,n,i,r="",o,l){let s={text:e,type:"textarea",attributes:{},props:{},description:n,placeholder:r,disabled:o,getValue(){let d=this.props[R].get(t,a);return Array.isArray(d)?d.join(`
`):d},callback(c,d){this.props[R].set(t,d);}};return Reflect.set(s.attributes,Y,t),Reflect.set(s.attributes,Z,a),me.initComponentsStorageApi("switch",s,{get(c,d){return A.getValue(c,d)},set(c,d){A.setValue(c,d);}}),s};class Le{option;constructor(t){this.option=t;}async showView(){let t=I.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist"></ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:true},btn:p.assign({ok:{callback:async()=>{await r();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
                ${I.config.cssText.panelCSS}
                
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
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),a=t.$shadowRoot.querySelector(".rule-form-container");t.$shadowRoot.querySelector("input[type=submit]");let n=t.$shadowRoot.querySelector(".rule-form-ulist"),i=await this.option.getView(await this.option.data());n.appendChild(i);const r=async()=>{(await this.option.onsubmit(a,await this.option.data())).success&&(t.close(),await this.option.dialogCloseCallBack(true));};}}const Ke={$el:{isFilterElementHTML:[]},$key:{STORAGE_KEY:"mt-post-comment-filter-rule"},init(){if(this.registerMenu(),ae.isPost()){let e=this.getData();if(!e.enable)return;let t=new p.LockFunction(()=>{this.runFilter(e);});p.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{t.run();}});}},registerMenu(){le.add({key:"comment-filter",text:"⚙ 评论过滤器",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showView();}});},runFilter(e){let t=function(n){for(const i of e.userBlackList)if(i==n.userName||i==n.userUID)return f.success("评论过滤器：黑名单用户",n),true;return  false},a=function(n){for(const i of e.userWhiteList)if(i===n.userName||i===n.userUID)return f.success("评论过滤器：白名单用户",n),true;return  false};P(".comiis_vrx").forEach(n=>{if(n.querySelector(".plc .pti .authi .show"))return;let i=n.querySelector(".pls .authi a"),r={userName:i?.innerText||"",userUID:i?.href?.match(pe.uid)?.[2]?.trim()||"",content:n.querySelector(".plc td.t_f")?.innerText?.trim()||"",isAuthor:false};if(!a(r)){if(e.replyFlag&&n.querySelector(".quote")){let o=n.querySelector(".quote");this.$el.isFilterElementHTML.push(o.outerHTML),o.remove();}if(!(r.isAuthor&&!e.avatarFlag)){if(t(r)){this.$el.isFilterElementHTML.push(n.outerHTML),n.remove();return}if(!(typeof e.minLength=="number"&&e.minLength>r.content.length)&&!(typeof e.keywordLength=="number"&&e.keywordLength<r.content.length))for(const o of e.keywords){if(typeof o!="string")continue;let l=new RegExp(o);if(r.content.match(l)){console.log("评论过滤器：",r),this.$el.isFilterElementHTML.push(n.outerHTML),n.remove();return}}}}});},showView(){const e=this;function t(i){return {get(r,o){let l=e.getData(),s=Reflect.get(l,r,o);return (r==="keywords"||r==="userWhiteList"||r==="userBlackList")&&(s=s.join(`
`)),s},set(r,o){(r==="keywords"||r==="userWhiteList"||r==="userBlackList")&&(o=o.split(`
`).filter(l=>l.trim()!="")),Reflect.set(i,r,o),e.setData(i);}}}let a=I.config.PanelHandlerComponents();new Le({title:"评论过滤器",data:()=>this.getData(),getView:i=>{let r=document.createDocumentFragment(),o=M("启用","enable",true);Reflect.set(o.props,R,t(i));let l=a.createSectionContainerItem_switch(o),s=M("处理回复引用","replyFlag",false,void 0,"移除引用");Reflect.set(s.props,R,t(i));let c=a.createSectionContainerItem_switch(s),d=M("处理作者评论","avatarFlag",false);Reflect.set(d.props,R,t(i));let m=a.createSectionContainerItem_switch(d),h=M('处理从"搜索页面"或"我的帖子提醒页面"进入的网站',"viewthreadFlag",false);Reflect.set(h.props,R,t(i));let v=a.createSectionContainerItem_switch(h),w=he("匹配的评论内容长度最小值","minLength",5,"小于此长度的评论就算关键字匹配成功了也不会被排除",void 0,"",true);Reflect.set(w.props,R,t(i));let g=a.createSectionContainerItem_input(w),b=he("匹配的评论内容长度最大值","keywordLength",8,"大于此长度的评论就算关键字匹配成功了也不会被排除",void 0,"",true);Reflect.set(b.props,R,t(i));let S=a.createSectionContainerItem_input(b),y=ge("评论关键字","keywords","","多个评论关键字换行分割");Reflect.set(y.props,R,t(i));let C=a.createSectionContainerItem_textarea(y),k=ge("黑名单用户","userBlackList","","多个用户换行分割");Reflect.set(k.props,R,t(i));let D=a.createSectionContainerItem_textarea(k),U=ge("白名单用户","userWhiteList","","多个用户换行分割");Reflect.set(U.props,R,t(i));let T=a.createSectionContainerItem_textarea(U);return r.append(l,c,m,v,g,S,C,D,T),r},btn:{merge:true,position:"space-between",ok:{enable:false},cancel:{enable:true,text:"关闭"},other:{enable:true,text:`查看已过滤（${this.$el.isFilterElementHTML.length}）`,type:"primary",callback:(i,r)=>{I.alert({title:{text:"评论过滤器-已过滤",position:"center"},content:{text:`
                                ${Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(o=>o.outerHTML).join(`
`)}

                                ${this.$el.isFilterElementHTML.join(`
`)}
                                `,html:true},style:`
							.plhin{
								width: 100%;
							}
							td.plc .pi{
								height: auto;
							}
							`,width:"88vw",height:"80vh"});}}},dialogCloseCallBack(i){},onsubmit:(i,r)=>({success:true,data:r}),style:`
            .pops-panel-item-left-desc-text{
                line-height: normal;
                margin-top: 6px;
                font-size: 0.8em;
                color: rgb(108, 108, 108);
            }
            .pops-panel-item-left-main-text{
                max-width: unset;
            }
            .pops-panel-textarea textarea{
                height: 150px;
            }
            `}).showView();},getTemplateData(){return {enable:true,avatarFlag:false,replyFlag:false,viewthreadFlag:false,minLength:5,keywordLength:8,keywords:[],userBlackList:[],userWhiteList:[]}},getData(){return re(this.$key.STORAGE_KEY,this.getTemplateData())},setData(e){j(this.$key.STORAGE_KEY,e);}};class Ge{option;constructor(t){this.option=t;}showView(){let t=I.alert({title:{text:this.option.title,position:"center"},content:{text:`
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
            `}),a=t.$shadowRoot.querySelector(".filter-container"),n=document.createDocumentFragment();this.option.filterOption.forEach(i=>{let r=u.createElement("button",{innerText:i.name},{type:"button"}),o=async()=>{(await this.option.getAllRuleInfo()).forEach(async s=>{await i.filterCallBack(s.data)?u.show(s.$el,false):u.hide(s.$el,false);}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),t.close();};u.on(r,"click",async l=>{u.preventEvent(l),!(typeof i.callback=="function"&&!await i.callback(l,o))&&await o();}),n.appendChild(r);}),a.appendChild(n);}}class je{option;constructor(t){this.option=t;}async showView(t){let a=I.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:true},btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async r=>{this.showEditView(false,await this.option.getAddData(),a.$shadowRoot);}},close:{enable:true,callback(r){a.close();}},cancel:{enable:this.option?.bottomControls?.filter?.enable||false,type:"default",text:"过滤",callback:async(r,o)=>{if(typeof this.option?.bottomControls?.filter?.callback=="function"){let c=await this.option.bottomControls.filter.callback();if(typeof c=="boolean"&&!c)return}let l=()=>Array.from(a.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),s=o.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");if(u.text(s).includes("取消")){let c=await this.option?.bottomControls?.filter?.cancelFilterCallback?.({$button:s,getAllRuleElement:l});if(typeof c=="boolean"&&!c)return;l().forEach(d=>{u.show(d,false);}),u.text(s,"过滤");}else new Ge({title:this.option.bottomControls?.filter?.title??"过滤规则",filterOption:this.option.bottomControls?.filter?.option||[],execFilterCallBack:async()=>{u.text(s,"取消过滤"),await this.option.bottomControls?.filter?.execFilterCallBack?.();},getAllRuleInfo:()=>l().map(d=>({data:this.parseRuleItemElement(d).data,$el:d}))}).showView();}},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:r=>{let o=I.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async l=>{if(f.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){x.error("清理失败");return}else x.success("清理成功");await this.updateDeleteAllBtnText(a.$shadowRoot),this.clearContent(a.$shadowRoot),o.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
            ${I.config.cssText.panelCSS}
            
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
            `}),n=await this.option.data(),i=false;for(let r=0;r<n.length;r++){let o=n[r],l=await this.appendRuleItemElement(a.$shadowRoot,o),s=true;typeof t=="function"?s=t(o):typeof t=="number"&&!isNaN(t)&&(s=await this.option.bottomControls?.filter?.option[t]?.filterCallBack(o)??s),s||(i=true,u.hide(l,false));}if(i){let r=a.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");u.text(r,"取消过滤");}}showEditView(t,a,n,i,r,o){let l=async c=>{if(c){if(typeof o=="function"){let d=await this.option.getData(a);o(d);}}else if(t||await this.option.deleteData(a),typeof r=="function"){let d=await this.option.getData(a);r(d);}};new Le({title:t?"编辑":"添加",data:()=>a,dialogCloseCallBack:l,getView:async c=>await this.option.itemControls.edit.getView(c,t),btn:{ok:{enable:true,text:t?"修改":"添加"},cancel:{callback:async(c,d)=>{c.close(),await l(false);}},close:{callback:async(c,d)=>{c.close(),await l(false);}}},onsubmit:async(c,d)=>{let m=await this.option.itemControls.edit.onsubmit(c,t,d);return m.success?t?(x.success("修改成功"),n&&await this.updateRuleItemElement(m.data,i,n)):n&&await this.appendRuleItemElement(n,m.data):t&&f.error("修改失败"),m},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(t){let a=t.querySelector(".rule-view-container"),n=t.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:a,$deleteBtn:n}}parseRuleItemElement(t){let a=t.querySelector(".rule-controls-enable"),n=a.querySelector(".pops-panel-switch"),i=a.querySelector(".pops-panel-switch__input"),r=a.querySelector(".pops-panel-switch__core"),o=t.querySelector(".rule-controls-edit"),l=t.querySelector(".rule-controls-delete");return {$enable:a,$enableSwitch:n,$enableSwitchInput:i,$enableSwitchCore:r,$edit:o,$delete:l,data:Reflect.get(t,"data-rule")}}async createRuleItemElement(t,a){let n=await this.option.getDataItemName(t),i=u.createElement("div",{className:"rule-item",innerHTML:`
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
					${I.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${I.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(i,"data-rule",t);let r="pops-panel-switch-is-checked";const{$enable:o,$enableSwitch:l,$enableSwitchCore:s,$enableSwitchInput:c,$delete:d,$edit:m}=this.parseRuleItemElement(i);return this.option.itemControls.enable.enable?(u.on(s,"click",async h=>{let v=false;l.classList.contains(r)?(l.classList.remove(r),v=false):(l.classList.add(r),v=true),c.checked=v,await this.option.itemControls.enable.callback(t,v);}),await this.option.itemControls.enable.getEnable(t)&&l.classList.add(r)):o.remove(),this.option.itemControls.edit.enable?u.on(m,"click",h=>{u.preventEvent(h),this.showEditView(true,t,a,i,v=>{t=null,t=v;});}):m.remove(),this.option.itemControls.delete.enable?u.on(d,"click",h=>{u.preventEvent(h);let v=I.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async w=>{f.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(t)?(x.success("成功删除该数据"),i.remove(),await this.updateDeleteAllBtnText(a),v.close()):x.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):d.remove(),i}async appendRuleItemElement(t,a){let{$container:n}=this.parseViewElement(t),i=[],r=Array.isArray(a)?a:[a];for(let o=0;o<r.length;o++){let l=r[o],s=await this.createRuleItemElement(l,t);n.appendChild(s),i.push(s);}return await this.updateDeleteAllBtnText(t),i}async updateRuleContaienrElement(t){this.clearContent(t);const{$container:a}=this.parseViewElement(t);let n=await this.option.data();await this.appendRuleItemElement(t,n),await this.updateDeleteAllBtnText(t);}async updateRuleItemElement(t,a,n){let i=await this.createRuleItemElement(t,n);a.after(i),a.remove();}clearContent(t){const{$container:a}=this.parseViewElement(t);u.html(a,"");}setDeleteBtnText(t,a,n=false){const{$deleteBtn:i}=this.parseViewElement(t);n?u.html(i,a):u.text(i,a);}async updateDeleteAllBtnText(t){let a=await this.option.data();this.setDeleteBtnText(t,`清空所有(${a.length})`);}}const Ye={$key:{STORAGE_KEY:"mt-productListingReminder-rule"},init(){this.registerMenu(),this.runRule();},registerMenu(){le.add({key:"product-reminder",text:"⚙ 商品上架提醒",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showView();}});},async runRule(){async function e(){let n=await B.get("/keke_integralmall-keke_integralmall.html",{allowInterceptConfig:false,headers:{"User-Agent":p.getRandomAndroidUA()}});if(!n.status){x.error("【积分商城】获取数据失败");return}let i=[];return u.toElement(n.data.responseText,true,true).querySelectorAll(".task-list-wrapper li.col-xs-12").forEach(o=>{i.push({name:u.text(o.querySelector(".mall-info a > *:first-child"))||u.text(o.querySelector(".mall-info a")),price:u.text(o.querySelector(".mall-info span.discount-price i")),endTime:u.text(o.querySelector(".mall-info #time_hz span.time")),remainingQuantity:parseInt(o.querySelector(".mall-info .mall-count .count-r")?.innerText?.replace(/仅剩|件/gi,"")||"0")});}),i}if(ae.isPointsMall())return;let t=this.getData();if(!t.length)return;let a=await e();if(a){for(const n of a)for(const i of t)if(i.enable&&n.name.match(new RegExp(i.productName,"i"))&&!isNaN(n.remainingQuantity)&&n.remainingQuantity>0){f.success("成功匹配对应商品",i,n),I.confirm({title:{text:"积分商城提醒",position:"center"},content:{text:`<br />
                            您设置的商品已上架在积分商城中，当前售价 ${n.price}金币，仅剩${n.remainingQuantity}件，是否前往购买？
                            <a style="color: red !important;">(如需关闭提醒，请删除该关键字)</a>
                            <br />`,html:true},btn:{merge:true,position:"space-between",other:{enable:true,type:"danger",text:"删除提醒",callback:()=>{this.deleteData(i)?x.success("删除成功"):x.error("删除失败");}},ok:{text:"前往购买",callback:()=>{window.location.href=`${window.location.origin}/keke_integralmall-keke_integralmall.html`;}}},width:"300px",height:"300px"});return}}},getTemplateData(){return {uuid:p.generateUUID(),enable:true,name:"",productName:""}},showView(){let e=I.config.PanelHandlerComponents();function t(n){return {get(i,r){return n[i]??r},set(i,r){n[i]=r;}}}new je({title:"商品上架提醒",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:n=>n.name,updateData:n=>this.updateData(n),deleteData:n=>this.deleteData(n),getData:n=>this.getData().find(o=>o.uuid===n.uuid)??n,itemControls:{enable:{enable:true,getEnable(n){return n.enable},callback:(n,i)=>{n.enable=i,this.updateData(n);}},edit:{enable:true,getView:(n,i)=>{let r=document.createDocumentFragment();i||(n=this.getTemplateData());let o=M("启用","enable",true);Reflect.set(o.props,R,t(n));let l=e.createSectionContainerItem_switch(o),s=he("规则名称","name","","",void 0,"必填");Reflect.set(s.props,R,t(n));let c=e.createSectionContainerItem_input(s),d=he("商品名","productName","","",void 0,"可正则，需手动转义");Reflect.set(d.props,R,t(n));let m=e.createSectionContainerItem_input(d);return r.append(l,c,m),r},onsubmit:(n,i,r)=>{let o=n.querySelectorAll(".rule-form-ulist > li"),l=this.getTemplateData();return i&&(l.uuid=r.uuid),o.forEach(s=>{let c=Reflect.get(s,"__formConfig__"),d=Reflect.get(c,"attributes"),m=Reflect.get(s,R),h=Reflect.get(d,Y),v=Reflect.get(d,Z),w=m.get(h,v);Reflect.has(l,h)?Reflect.set(l,h,w):f.error(`${h}不在数据中`);}),l.name.trim()===""?(x.error("规则名称不能为空"),{success:false,data:l}):i?{success:this.updateData(l),data:l}:{success:this.addData(l),data:l}}},delete:{enable:true,deleteCallBack:n=>this.deleteData(n)}}}).showView();},getData(){return re(this.$key.STORAGE_KEY,[])},setData(e){j(this.$key.STORAGE_KEY,e);},addData(e){let t=this.getData();return t.findIndex(n=>n.uuid==e.uuid)===-1?(t.push(e),j(this.$key.STORAGE_KEY,t),true):false},updateData(e){let t=this.getData(),a=t.findIndex(i=>i.uuid==e.uuid),n=false;return a!==-1&&(n=true,t[a]=e),this.setData(t),n},deleteData(e){let t=this.getData(),a=t.findIndex(i=>i.uuid==e.uuid),n=false;return a!==-1&&(n=true,t.splice(a,1)),this.setData(t),n},clearData(){we(this.$key.STORAGE_KEY);}},Ze=`.pops-confirm-content {\r
  display: flex;\r
  flex-direction: column;\r
}\r
.blackhome-user-filter input {\r
  width: -moz-available;\r
  width: -webkit-fill-available;\r
  height: 30px;\r
  margin: 8px 20px;\r
  border: 0;\r
  border-bottom: 1px solid;\r
  text-overflow: ellipsis;\r
  overflow: hidden;\r
  white-space: nowrap;\r
}\r
.blackhome-user-filter input:focus-within {\r
  outline: none;\r
}\r
.blackhome-user-list {\r
  flex: 1;\r
  overflow-y: auto;\r
}\r
.blackhome-user-list .blackhome-user-item {\r
  margin: 15px 10px;\r
  padding: 10px;\r
  border-radius: 8px;\r
  box-shadow:\r
    0 0 0.6rem #c8d0e7,\r
    -0.2rem -0.2rem 0.5rem #fff;\r
}\r
.blackhome-user {\r
  display: flex;\r
}\r
.blackhome-user img {\r
  width: 45px;\r
  height: 45px;\r
  border-radius: 45px;\r
}\r
.blackhome-user-info {\r
  margin-left: 10px;\r
}\r
.blackhome-user-info p:nth-child(1) {\r
  margin-bottom: 5px;\r
}\r
.blackhome-user-info p:nth-child(2) {\r
  font-size: 14px;\r
}\r
.blackhome-user-action {\r
  display: flex;\r
  margin: 10px 0;\r
}\r
.blackhome-user-action p:nth-child(1),\r
.blackhome-user-action p:nth-child(2) {\r
  border: 1px solid red;\r
  color: red;\r
  border-radius: 4px;\r
  padding: 2px 4px;\r
  font-weight: 500;\r
  font-size: 14px;\r
  place-self: center;\r
}\r
.blackhome-user-action p:nth-child(2) {\r
  border: 1px solid #ff4b4b;\r
  color: #ff4b4b;\r
  margin-left: 8px;\r
}\r
.blackhome-user-uuid {\r
  border: 1px solid #ff7600;\r
  color: #ff7600;\r
  border-radius: 4px;\r
  padding: 2px 4px;\r
  font-weight: 500;\r
  font-size: 14px;\r
  width: fit-content;\r
  width: -moz-fit-content;\r
  margin: 10px 0;\r
}\r
.blackhome-operator {\r
  padding: 10px;\r
  background-color: #efefef;\r
  border-radius: 6px;\r
}\r
.blackhome-operator-user {\r
  display: flex;\r
}\r
.blackhome-operator-user img {\r
  width: 35px;\r
  height: 35px;\r
  border-radius: 35px;\r
}\r
.blackhome-operator-user p {\r
  align-self: center;\r
  margin-left: 10px;\r
}\r
.blackhome-operator-user-info {\r
  margin: 10px 0;\r
  font-weight: 500;\r
}\r
\r
@media screen and (min-width: 800px) {\r
  .blackhome-user-list {\r
    display: flex;\r
    flex-wrap: wrap;\r
  }\r
  .blackhome-user-list .blackhome-user-item {\r
    flex: 1 1 250px;\r
    max-width: calc(50% - 10px - 10px);\r
  }\r
}\r
`,Xe={$data:{cid:""},init(){this.registerMenu();},registerMenu(){le.add({key:"black-home",text:"⚙ 小黑屋",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showBlackHome();}});},async showBlackHome(){let e=x.loading("正在获取小黑屋名单中..."),t=await this.getBlackListInfo("");if(e.close(),!t)return;if(t.data.length===0){x.error("获取小黑屋名单为空");return}this.$data.cid=t.next_cid;let a=I.confirm({title:{text:"小黑屋名单",position:"center"},content:{text:`
                <div class="blackhome-user-filter">
                    <input placeholder="过滤用户名/操作人员/UID(可正则)">
                </div>
                <div class="blackhome-user-list"></div>
                `,html:true},btn:{ok:{text:"下一页",callback:async()=>{let l=x.loading("正在获取小黑屋名单中...");f.info("下一页的cid: ",this.$data.cid);let s=await this.getBlackListInfo(this.$data.cid);l.close(),s&&(this.$data.cid=s.next_cid,s.data.forEach(c=>{let d=this.createListViewItem(c);n.appendChild(d);}),s.data.length===0?x.error("获取小黑屋名单为空"):x.success(`成功获取 ${s.data.length}条数据`),u.trigger(i,"input"));}},cancel:{text:"关闭"}},width:G.settingBig.width,height:G.settingBig.height,style:Ze}),n=a.$shadowRoot.querySelector(".blackhome-user-list"),i=a.$shadowRoot.querySelector(".blackhome-user-filter input");t.data.forEach(l=>{let s=this.createListViewItem(l);n.appendChild(s);}),x.success(`成功获取 ${t.data.length}条数据`);let r=false;u.on(i,["input","propertychange"],p.debounce(()=>{let l=i.value.trim();if(!r){if(r=true,l==""){a.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(s=>{s.removeAttribute("style");}),r=false;return}a.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(s=>{s.getAttribute("data-name").match(new RegExp(l,"ig"))||s.getAttribute("data-uid").trim().match(new RegExp(l,"ig"))||s.getAttribute("data-operator").match(new RegExp(l,"ig"))?s.removeAttribute("style"):s.setAttribute("style","display:none;");}),r=false;}}));let o=await this.getBlackListInfo(this.$data.cid);o&&(this.$data.cid=o.next_cid);},async getBlackListInfo(e=""){let t={mod:"misc",action:"showdarkroom",cid:e,ajaxdata:"json"},a=await B.get(`/forum.php?${p.toSearchParamsStr(t)}`,{headers:{"User-Agent":p.getRandomPCUA()},responseType:"json"});if(!a.status)return;let n=p.toJSON(a.data.responseText),i=n.message.split("|"),r=i[i.length-1],o=p.parseObjectToArray(n.data),l=[],s=[];return o.forEach(c=>{let d=c.dateline.match(/([0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]*[0-9]{1,2}:[0-9]{1,2})/g);if(d==null){let m=parseInt((Date.now()/1e3).toString()),h=0,v=c.dateline.match(/([0-9]+|半)[\s\S]*秒前/),w=c.dateline.match(/([0-9]+|半)[\s\S]*分钟前/),g=c.dateline.match(/([0-9]+|半)[\s\S]*小时前/),b=c.dateline.match(/昨天[\s\S]*(\d{2}):(\d{2})/),S=c.dateline.match(/前天[\s\S]*(\d{2}):(\d{2})/),y=c.dateline.match(/([0-9]+|半)[\s\S]*天前/);if(v)v=v[v.length-1],v=v.replace(/半/g,.5),v=parseFloat(v),h=m-v;else if(w)w=w[w.length-1],w=w.replace(/半/g,.5),w=parseFloat(w),h=m-w*60;else if(g)g=g[g.length-1],g=g.replace(/半/g,.5),g=parseFloat(g),h=m-g*60*60;else if(b){let C=b[1],k=b[2];h=m-86400-parseInt(C)*3600-parseInt(k)*60;}else if(S){let C=S[1],k=S[2];h=m-86400*2-parseInt(C)*3600-parseInt(k)*60;}else y&&(y=y[y.length-1],y=y.replace(/半/g,.5),y=parseFloat(y),h=m-y*60*60*24);c.time=parseInt(h.toString())*1e3,l=l.concat(c);return}else d=d[0];c.time=p.formatToTimeStamp(d),l=l.concat(c);}),p.sortListByProperty(l,"time"),p.sortListByProperty(s,"time",false),l=l.concat(s),{next_cid:r,data:l}},createListViewItem(e){let t=u.createElement("div",{className:"blackhome-user-item",innerHTML:`
                <div class="blackhome-user-avatar">
                    <div class="blackhome-user">
                    <img src="${O.getAvatar(e.uid,"big")}" loading="lazy">
                    <div class="blackhome-user-info">
                        <p>${e.username}</p>
                        <p>${e.dateline}</p>
                    </div>
                    </div>
                    <div class="blackhome-user-action">
                    <p>${e.action}</p>
                    <p>到期: ${e.groupexpiry}</p>
                    </div>
                    <div class="blackhome-user-uuid">UID: ${e.uid}</div>
                    <div class="blackhome-operator">
                    <div class="blackhome-operator-user">
                        <img loading="lazy" src="${O.getAvatar(e.operatorid,"big")}">
                        <p>${e.operator}</p>
                    </div>
                    <div class="blackhome-operator-user-info">
                    ${e.reason}
                    </div>
                    </div>
                </div>
                `},{"data-name":e.username,"data-uid":e.uid,"data-operator":e.operator,"data-operator-uid":e.operatorid});return u.on(t,"click",".blackhome-user img",function(){window.open(`home.php?mod=space&uid=${e.uid}&do=profile`,"_blank");}),u.on(t,"click",".blackhome-operator-user img",function(){window.open(`home.php?mod=space&uid=${e.operatorid}&do=profile`,"_blank");}),t}},Je=`.pops-alert-content {\r
  display: flex;\r
  flex-direction: column;\r
}\r
.pops-alert-content > .online-user-info {\r
  text-align: center;\r
  padding: 0px 6px;\r
}\r
.online-user-filter input {\r
  width: -webkit-fill-available;\r
  width: -moz-available;\r
  height: 30px;\r
  margin: 8px 20px;\r
  border: 0;\r
  border-bottom: 1px solid;\r
}\r
.online-user-filter input:focus-within {\r
  outline: none;\r
}\r
.online-user-list {\r
  flex: 1;\r
  overflow-y: auto;\r
}\r
.online-user-list li {\r
  margin: 18px 0;\r
}\r
.online-user {\r
  display: flex;\r
  margin: 2px 20px;\r
  align-items: center;\r
}\r
.online-user img[data-avatar] {\r
  width: 45px;\r
  height: 45px;\r
  border-radius: 45px;\r
}\r
.online-user-list .online-user-info {\r
  margin: 2px 14px;\r
}\r
.online-user-list .online-user-info p[data-name] {\r
  margin-bottom: 4px;\r
}\r
.online-user-list .online-user-info span[data-sf] {\r
  border-radius: 4px;\r
  padding: 2px 4px;\r
  font-weight: 500;\r
  font-size: 14px;\r
}\r
.online-user-list .online-user-info span[data-uid] {\r
  border: 1px solid #ff7600;\r
  color: #ff7600;\r
  border-radius: 4px;\r
  padding: 2px 4px;\r
  font-weight: 500;\r
  font-size: 14px;\r
  width: fit-content;\r
  width: -moz-fit-content;\r
  margin: 10px 0;\r
}\r
.online-user-list .online-user-info span[data-sf="会员"] {\r
  color: #88b500;\r
  border: 1px solid #88b500;\r
}\r
.online-user-list .online-user-info span[data-sf="版主"] {\r
  color: #2db5e3;\r
  border: 1px solid #2db5e3;\r
}\r
.online-user-list .online-user-info span[data-sf="超级版主"] {\r
  color: #e89e38;\r
  border: 1px solid #e89e38;\r
}\r
.online-user-list .online-user-info span[data-sf="管理员"] {\r
  color: #ff5416;\r
  border: 1px solid #ff5416;\r
}\r
\r
@media screen and (min-width: 800px) {\r
  .online-user-list {\r
    display: flex;\r
    flex-wrap: wrap;\r
  }\r
  .online-user-list .online-item {\r
    flex: 1 1 250px;\r
  }\r
}\r
`,et={$data:{},init(){this.registerMenu();},registerMenu(){le.add({key:"online-user",text:"⚙ 在线用户",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showOnlineUser();}});},async showOnlineUser(){let e=x.loading("正在获取在线用户名单中..."),t=await this.getOnlineUserListInfo();if(e.close(),!t)return;let a=I.alert({title:{text:"在线用户",position:"center"},content:{text:`
                <div class="online-user-info">${t.totalOnline} 人在线 - ${t.onlineUser} 会员${t.invisibleUser==0?"":`(${t.invisibleUser}隐身)`} - ${t.noRegisterUser} 位游客</div>
                <div class="online-user-filter">
                    <input placeholder="过滤用户名/身份/UID(可正则)"></div>
                <div class="online-user-list"></div>
                `,html:true},btn:{ok:{text:"关闭",type:"default"}},width:G.settingBig.width,height:G.settingBig.height,style:Je}),n=a.$shadowRoot.querySelector(".online-user-list"),i=a.$shadowRoot.querySelector(".online-user-filter input");t.data.forEach(o=>{let l=this.createListViewItem(o);n.appendChild(l);}),x.success(`成功获取 ${t.data.length}条数据`);let r=false;_.on(i,["propertychange","input"],p.debounce(()=>{let o=i.value.trim();if(!r){if(r=true,o==""){a.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(l=>{l.removeAttribute("style");}),r=false;return}a.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(l=>{l.getAttribute("data-name").match(new RegExp(o,"ig"))||l.getAttribute("data-sf").match(new RegExp(o,"ig"))||l.getAttribute("data-uid").match(new RegExp(o,"ig"))?l.removeAttribute("style"):l.setAttribute("style","display:none;");}),r=false;}}));},async getOnlineUserListInfo(){let e={showoldetails:"yes"},t=await B.get(`/forum.php?${p.toSearchParamsStr(e)}`,{headers:{"User-Agent":p.getRandomPCUA()}});if(!t.status)return;let a=p.parseFromString(t.data.responseText,"text/html"),n={data:[],totalOnline:0,onlineUser:0,noRegisterUser:0,invisibleUser:0};a.querySelectorAll("#onlinelist ul li").forEach(o=>{let l=o.querySelector("a").getAttribute("href").match("uid-(.+?).html")[1],s=O.getAvatar(l,"middle"),c=o.querySelector("a").innerText,d="",m=o.querySelector("a").getAttribute("href"),h=o.querySelector("img").src;h.indexOf("online_member")!=-1?d="会员":h.indexOf("online_moderator")!=-1?d="版主":h.indexOf("online_supermod")!=-1?d="超级版主":h.indexOf("online_admin")!=-1?d="管理员":d="未知身份",n.data.push({uid:l,avatar:s,name:c,sf:d,space:m});});let r=a.querySelector("#online div.bm_h span.xs1").textContent;return n.totalOnline=p.parseInt(r.match(/([0-9]*)\s*人在线/i),0),n.onlineUser=p.parseInt(r.match(/([0-9]*)\s*会员/i),0),n.noRegisterUser=p.parseInt(r.match(/([0-9]*)\s*位游客/i),0),n.invisibleUser=p.parseInt(r.match(/([0-9]*)\s*隐身/i),0),n},createListViewItem(e){let t=_.createElement("div",{className:"online-item",innerHTML:`
                <div class="online-user">
                    <img data-avatar src="${e.avatar}" loading="lazy" class="online-user-avatar">
                    <div class="online-user-info">
                        <p data-name>${e.name}</p>
                        <span data-sf="${e.sf}">${e.sf}</span>
                        <span data-uid>UID: ${e.uid}</span>
                    </div>
                </div>
            `},{"data-name":e.name,"data-uid":e.uid,"data-sf":e.sf});return _.on(t,"click",".online-user-avatar",a=>{_.preventEvent(a),window.open(`home.php?mod=space&uid=${e.uid}&do=profile`,"_blank");}),t}},tt={$flag:{showUserUID_initCSS:false},init(){A.onceExec("mt-MTCommentFilter",()=>{Ke.init();}),ae.isPost()?(f.info("Router: 帖子"),Me.init()):ae.isGuide()?(f.info("Router: 导读"),We.init()):f.error("Router: 未适配的链接 ==> "+window.location.href),u.ready(()=>{A.onceExec("mt-MTProductListingReminder",()=>{Ye.init();}),A.onceExec("mt-blackHome",()=>{Xe.init();}),A.onceExec("mt-onlineUser",()=>{et.init();}),A.execMenuOnce("mt-addLatestPostBtn",()=>{this.addLatestPostBtn();}),A.execMenu("mt-auto-sign",()=>{ue.init();}),A.execMenu("mt-extend-cookie-expire",()=>{this.extendCookieExpire();}),ae.isPostPublish_edit()||A.execMenuOnce("mt-link-text-to-hyperlink",()=>{He();});});},addLatestPostBtn(){f.info("新增【最新发表】");let e=u.createElement("li",{id:"latest_publication",innerHTML:`
				<a href="/forum.php?mod=guide&view=newthread" hidefocus="true" title="最新发表">最新发表</a>
			`}),t=e.querySelector("a");u.append("#comiis_nv .wp.comiis_nvbox.cl ul",e),window.location.href.includes("/forum.php?mod=guide&view=newthread")&&(u.removeClass("#mn_forum_10","a"),u.css(t,"background",'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAADICAYAAAAk7PuyAAAAAXNSR0IArs4c6QAAAGFJREFUWEft1zESgCAQQ9HsVfb+d5RRlLHRVotHS5f5+YHKyymXiRAihKMISBDCNOInJHT39iTkcpkIYUcTCUKYkkKCEJBwTaY6cML5eiNGYiRGYrz9pqyDdbAOqxC/q8MApobR97qxnMwAAAAASUVORK5CYII=") repeat-x 50% -50px'));},async extendCookieExpire(){f.info("延长cookie有效期");let e=await Ae.cookie.list({}),t=["_auth","_saltkey","_client_created","_client_token"];e.forEach(async a=>{if(a.session)return;let n=a.expirationDate,i=Date.now()/1e3;if(n<i)return;let r=3600*24*30;n-i>r||!t.find(l=>a.name.endsWith(l))||Ae.cookie.set({name:a.name,value:a.value,expirationDate:a.expirationDate+r}).then(()=>{f.info(`延长Cookie +30天成功：${a.name}`);}).catch(()=>{f.error(`延长Cookie +30天失败：${a.name}`);});});}},ke=function(e,t,a,n,i,r,o){let l=[];typeof n=="function"?l=n():l=n;let s={text:e,type:"select",description:r,attributes:{},props:{},getValue(){return this.props[R].get(t,a)},callback(c,d,m){let h=d;if(f.info(`选择：${m}`),typeof i=="function"&&i(c,h,m))return;this.props[R].set(t,h);},data:l};return Reflect.set(s.attributes,Y,t),Reflect.set(s.attributes,Z,a),me.initComponentsStorageApi("select",s,{get(c,d){return A.getValue(c,d)},set(c,d){A.setValue(c,d);}}),s},Ee=function(e,t,a,n,i,r,o,l,s,c){let d={text:e,type:"button",attributes:{},props:{},description:t,buttonIcon:n,buttonIsRightIcon:i,buttonIconIsLoading:r,buttonType:o,buttonText:a,callback(m){typeof l=="function"&&l(m);},afterAddToUListCallBack:s};return Reflect.set(d.attributes,xe,()=>{d.disable=false;}),d},Ie=function(e,t,a,n){let i={type:"own",attributes:{},props:a,getLiElementCallBack:e,afterAddToUListCallBack:n};return Reflect.set(i.attributes,xe,()=>false),i},K={$upload:{small:false,middle:false,big:false},$data:{avatarInfo:{maxSize:2097152,small:{width:48,height:48},middle:{width:120,height:120},big:{width:200,height:250}}},$el:{$smallUpload:null,$middleUpload:null,$bigUpload:null,$smallStatus:null,$middleStatus:null,$bigStatus:null},$avatar:{get small(){return K.$el.$smallUpload.files[0]},get middle(){return K.$el.$middleUpload.files[0]},get big(){return K.$el.$bigUpload.files[0]}},init(){this.showView();},showView(){const e=this;let t=I.confirm({title:{text:"修改头像",position:"center"},content:{text:`
                <div class="avatar-container">
                    <p class="avatar-tip">1. 小头像（图片宽高限制最大尺寸：48×48）</p>
                    <p class="avatar-upload-status" data-type="small">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="small" data-maxwidth="48" data-maxheight="48" accept="image/*">
                </div>
                <div class="avatar-container">
                    <p class="avatar-tip">2. 中头像（图片宽高限制最大尺寸：120×120）</p>
                    <p class="avatar-upload-status" data-type="middle">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="middle" data-maxwidth="120" data-maxheight="120" accept="image/*">
                </div>
                <div class="avatar-container">
                    <p class="avatar-tip">3. 大头像（图片宽高限制最大尺寸：200×250）</p>
                    <p class="avatar-upload-status" data-type="big">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="big" data-maxwidth="200" data-maxheight="250" accept="image/*">
                </div>
                `,html:true},btn:{ok:{text:"上传",callback:async()=>{if(!e.$upload.small){x.error("请上传小头像");return}if(!e.$upload.middle){x.error("请上传中头像");return}if(!e.$upload.big){x.error("请上传大头像");return}let a=x.loading("正在处理数据中...");try{let n=await this.getUploadUrl();if(n==null)return;let i=await O.getFormHash();if(i==null){x.error("获取formhash失败");return}let r={big:{base64:await p.parseFileToBase64(this.$avatar.big)},middle:{base64:await p.parseFileToBase64(this.$avatar.middle)},small:{base64:await p.parseFileToBase64(this.$avatar.small)}};Object.keys(r).forEach(s=>{let c=r[s];c.base64=c.base64.substring(c.base64.indexOf(",")+1);});let o=new FormData;o.append("Filedata",this.$avatar.big||""),o.append("confirm","确定"),o.append("avatar1",r.big.base64),o.append("avatar2",r.middle.base64),o.append("avatar3",r.small.base64),o.append("formhash",i),f.info("头像的base64字符串",r);let l=await B.post(n,{data:o,processData:!1,headers:{Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9","User-Agent":p.getRandomPCUA(),Host:window.location.hostname,Origin:window.location.origin,Referer:`${window.location.origin}/home.php?mod=spacecp&ac=avatar`}});if(!l.status)return;l.data.responseText.indexOf("window.parent.postMessage('success','*')")!=-1?(t.close(),x.success("上传成功")):(f.error("上传失败",l),x.error(l.data.responseText,{timeout:6e3,isHTML:!1}));}catch(n){f.error(n);}finally{a.close();}}}},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
            .avatar-container{
                display: flex;
                width: -webkit-fill-available;
                width: -moz-available;
                margin: 6px 10px;
                flex-direction: column;
            }
            .avatar-tip{
                float: left;
                font-weight: bold;
            }
            .avatar-upload-status {
                padding: 0px;
                padding-left: 10px;
                font-weight: bold;
                width: -webkit-fill-available;
                text-align: left;
                font-size: small;
            }
            .avatar-upload-status[data-success="false"]{
                color: red;
            }
            .avatar-upload-status[data-success="true"]{
                color: green;
            }
            .avatar-upload {
                margin: 20px 0px;
            }
            `});this.$el.$smallUpload=t.$shadowRoot.querySelector(".avatar-upload[data-type='small']"),this.$el.$middleUpload=t.$shadowRoot.querySelector(".avatar-upload[data-type='middle']"),this.$el.$bigUpload=t.$shadowRoot.querySelector(".avatar-upload[data-type='big']"),this.$el.$smallStatus=t.$shadowRoot.querySelector(".avatar-upload-status[data-type='small']"),this.$el.$middleStatus=t.$shadowRoot.querySelector(".avatar-upload-status[data-type='middle']"),this.$el.$bigStatus=t.$shadowRoot.querySelector(".avatar-upload-status[data-type='big']"),this.setUploadChangeEvent(this.$el.$smallUpload,this.$el.$smallStatus,this.$data.avatarInfo.small,()=>{this.$upload.small=true;}),this.setUploadChangeEvent(this.$el.$middleUpload,this.$el.$middleStatus,this.$data.avatarInfo.middle,()=>{this.$upload.middle=true;}),this.setUploadChangeEvent(this.$el.$bigUpload,this.$el.$bigStatus,this.$data.avatarInfo.big,()=>{this.$upload.big=true;});},setUploadChangeEvent(e,t,a,n){u.on(e,"change",i=>{if(!e.files?.length)return;u.text(t,"🤡获取文件信息中..."),t.removeAttribute("data-success");let r=e.files[0],o=r.size,l=new Image,s=new FileReader;s.readAsDataURL(r),s.onload=function(c){l.src=c.target.result,l.onload=function(){if(l.width>a.width||l.height>a.height){e.value="",t.setAttribute("data-success","false"),u.text(t,`🤡校验失败 ==> 图片尺寸不符合，宽：${l.width} 高：${l.height}`);return}if(o>K.$data.avatarInfo.maxSize){e.value="",t.setAttribute("data-success","false"),u.text(t,`🤡校验失败 ==> 图片大小不符合：${o}byte，限制最大：${K.$data.avatarInfo.maxSize}byte`);return}t.setAttribute("data-success","true"),u.text(t,`🤣 通过 宽:${l.width} 高:${l.height} 大小(byte):${o}`),n();};};});},async getUploadUrl(){let e=await B.get("/home.php?mod=spacecp&ac=avatar",{headers:{"User-Agent":p.getRandomPCUA()}});if(!e.status)return;if(p.isNull(e.data.responseText)){x.error("动态头像：获取上传地址的内容失败");return}let t=e.data.responseText.match(/var[\s]*data[\s]*=[\s]*"(.+?)"/);if(t==null||t.length!=2){x.error("动态头像：获取变量data失败");return}let n=t[t.length-1].split(","),i=n.indexOf("stl_src");if(i===-1&&(i=n.indexOf("src")),i===-1){x.error("动态头像：获取上传地址失败");return}let r=n[i+1],o=new URL(r);return o.pathname=o.pathname.replace("/images/camera.swf","/index.php"),o.searchParams.delete("inajax"),o.searchParams.set("m","user"),o.searchParams.set("a","rectavatar"),o.searchParams.set("base64","yes"),r=o.toString(),f.info("上传地址："+r),r}},nt={id:"component-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[ke("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,a)=>{f.info("设置当前Qmsg弹出位置"+a);},"Toast显示在页面九宫格的位置"),ke("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),M("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[M("新增【最新发表】","mt-addLatestPostBtn",true,void 0,"便于快捷跳转"),M("文本转超链接","mt-link-text-to-hyperlink",true,void 0,"自动把符合超链接格式的文字转为超链接"),M("延长登录Cookie过期时间","mt-extend-cookie-expire",false,void 0,"减少频繁登录账号的问题")]}]},{type:"deepMenu",text:"自动签到",forms:[{text:"",type:"forms",forms:[M("启用","mt-auto-sign",true,void 0,"自动请求签到"),M("使用fetch请求","mt-auto-sign-useFetch",false,void 0,""),Ee("签到信息",`上次签到时间：${(()=>{let e=ue.getHostNameSignInfo(window.location.hostname);return e?q.formatTime(e.time):"尚未签到"})()}`,"清空信息",void 0,void 0,void 0,"primary",e=>{let a=e.composedPath()[0].closest("li").querySelector(".pops-panel-item-left-desc-text");I.confirm({title:{text:"提示 ",position:"center"},content:{text:"<p>是否清空脚本签到记录的时间?</p>",html:true},btn:{ok:{enable:true,callback:n=>{let i=window.location.hostname;ue.clearSignInfo(i),x.success("删除成功"),u.text(a,`上次签到时间：${(()=>{let r=ue.getHostNameSignInfo(i);return r?q.formatTime(r.time):"尚未签到"})()}`),n.close();}}},width:"300px",height:"200px"});})]}]},{text:"头像",type:"deepMenu",forms:[{text:"<a href='https://ezgif.com/resize' target='_blank'>Resize Image</a>",type:"forms",forms:[Ie(e=>{let t=u.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
											<p class="pops-panel-item-left-main-text">头像（有缓存）</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),a=u.createElement("div",{className:"pops-panel-avatar-img",innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${O.getCurrentUID()}&size=small"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${O.getCurrentUID()}&size=middle"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${O.getCurrentUID()}&size=big"
												class="avatar-img" data-size="big">
											`}),n=u.createElement("style",{innerHTML:`
											.avatar-img {
												width: 30px;
												height: 30px;
												border-radius: 50%;
												overflow: hidden;
											}
										`});return a.querySelector(".avatar-img[data-size='small']"),a.querySelector(".avatar-img[data-size='middle']"),a.querySelector(".avatar-img[data-size='big']"),e.appendChild(t),e.appendChild(a),e.appendChild(n),e}),Ie(e=>{let t=u.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
											<p class="pops-panel-item-left-main-text">头像</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),a=u.createElement("div",{className:"pops-panel-avatar-img",innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${O.getCurrentUID()}&size=small&ts=${Date.now()}"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${O.getCurrentUID()}&size=middle&ts=${Date.now()}"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${O.getCurrentUID()}&size=big&ts=${Date.now()}"
												class="avatar-img" data-size="big">
											`});return e.appendChild(t),e.appendChild(a),e}),Ee("修改头像",`可以上传gif图片，注意图片最大限制为${q.formatByteToSize(K.$data.avatarInfo.maxSize)}`,"上传",void 0,false,false,"primary",()=>{K.init();})]}]}]}]},at={id:"component-forum-post",title:"帖子",forms:[{type:"forms",text:"",forms:[{text:"功能",type:"deepMenu",forms:[{type:"forms",text:"",forms:[M("拦截附件","mt-forum-post-interceptionAttachment",true,void 0,"点击附件时弹出提示框进行确认是否下载附件"),M("图片查看优化","mt-forum-post-optimizationImagePreview",true,void 0,"使用Viewer查看图片"),M("自动加载下一页","mt-forum-post-loadNextPageComment",true,void 0,"无缝预览下一页"),M("代码块优化","mt-forum-post-codeQuoteOptimization",true,void 0,"自动检测代码块语言并设置关键字高亮")]}]},{type:"deepMenu",text:"用户信息块",forms:[{type:"forms",text:"",forms:[M("探测用户在线状态","mt-forum-post-detectingUserOnlineStatus",false,void 0,"获取用户在线状态并在用户信息处显示状态表情"),M("显示用户等级","mt-forum-post-showUserLevel",true,void 0,"在用户信息处显示当前用户的等级"),M("隐藏底部信息块","mt-forum-post-hideBottomInfoBlock",false,void 0,"包括金币、好评、信誉等信息")]}]},{type:"deepMenu",text:"右侧悬浮工具栏",forms:[{type:"forms",text:"",forms:[M("新增【快捷收藏】","mt-forum-post-quickCollentBtn",true,void 0,"在右侧悬浮工具栏添加【收藏】按钮，用于快捷收藏"),M("快捷回复优化","mt-forum-post-quickReplyOptimization",true,void 0,"为快捷回复弹窗底部区域添加【一键空格】按钮")]}]}]}]},it={id:"component-guide",title:"导读",forms:[{type:"forms",text:"",forms:[M("页面美化","mt-guide-beautifyPage",true,void 0,"美化样式")]}]};de.addContentConfig([nt,at,it]);A.init();tt.init();

})(Qmsg, DOMUtils, Utils, pops, hljs, Viewer);