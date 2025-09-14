// ==UserScript==
// @name         CSDN优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.9.14
// @author       WhiteSevs
// @description  支持PC和手机端、屏蔽广告、优化浏览体验、重定向拦截的Url、自动展开全文、自动展开代码块、全文居中、允许复制内容、去除复制内容的小尾巴、自定义屏蔽元素等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.csdn.net/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.8.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.6.6/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.4.5/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.4.0/dist/index.umd.js
// @connect      blog.csdn.net
// @connect      mp-action.csdn.net
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

(function (S, L, F, ae) {
	'use strict';

	var ce=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,xe=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,de=typeof GM_getValue<"u"?GM_getValue:void 0,Y=typeof GM_info<"u"?GM_info:void 0,De=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,ue=typeof GM_setValue<"u"?GM_setValue:void 0,Ee=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Ve=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,v=typeof unsafeWindow<"u"?unsafeWindow:void 0,$e=window;const g={waitRemove(...e){e.forEach(t=>{typeof t=="string"&&u.waitNodeList(t).then(n=>{n.forEach(o=>o.remove());});});},createBlockCSSNode(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),L.createElement("style",{type:"text/css",innerHTML:`${t.join(`,
`)}{display: none !important;}`})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),w(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){let t=typeof xe=="function"?xe(e.keyName):null;typeof t=="string"&&t?w(t):g.loadStyleLink(e.url);},async loadStyleLink(e){let t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=e,L.ready(()=>{document.head.appendChild(t);});},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(n=>{t.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.match(/^http(s|):\/\//i)?e:e.startsWith("//")?(e.startsWith("///")||(e=window.location.protocol+e),e):(e.startsWith("/")||(e+="/"),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;let t=new URL(e);return t.protocol="https:",t.toString()},lockScroll(...e){let t=document.createElement("style");t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...e||[]);return n.forEach(o=>{o.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(t),{recovery(){n.forEach(o=>{o.classList.remove("pops-overflow-hidden-important");}),t.remove();}}},async getClipboardText(){function e(o){navigator.clipboard.readText().then(l=>{o(l);}).catch(l=>{r.error("读取剪贴板内容失败👉",l),o("");});}function t(o){navigator.permissions.query({name:"clipboard-read"}).then(l=>{e(o);}).catch(l=>{r.error("申请剪贴板权限失败，尝试直接读取👉",l.message??l.name??l.stack),e(o);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(o=>{if(!n()){o("");return}document.hasFocus()?t(o):window.addEventListener("focus",()=>{t(o);},{once:true});})},escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(e,t,n=5e3){let o,l=n-t,a=t,c=async f=>{let p=await e(f);if(typeof p=="boolean"&&!p||f){u.workerClearTimeout(o);return}if(a+=t,a>l){c(true);return}o=u.workerSetTimeout(()=>{c(false);},t);};c(false);},findParentNode(e,t,n){if(n){let o=L.closest(e,n);if(o)return o.querySelector(t)}else return L.matches(e,t)?e:L.closest(e,t)}},K={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},u=F.noConflict(),b=L.noConflict(),Q=ae,r=new u.Log(Y,v.console||$e.console);let be=Y?.script?.name||void 0;ae.config.Utils.AnyTouch();const ve=false;r.config({debug:ve,logMaxCount:1e3,autoClearConsole:true,tag:true});S.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(e){const t=e.getSetting().type;if(t==="loading")return  false;const n=e.getSetting().content;return t==="warning"?r.warn(n):t==="error"?r.error(n):r.info(n),true},get position(){return i.getValue(K.qmsg_config_position.key,K.qmsg_config_position.defaultValue)},get maxNums(){return i.getValue(K.qmsg_config_maxnums.key,K.qmsg_config_maxnums.defaultValue)},get showReverse(){return i.getValue(K.qmsg_config_showreverse.key,K.qmsg_config_showreverse.defaultValue)},get zIndex(){let e=F.getMaxZIndex(),t=ae.config.InstanceUtils.getPopsMaxZIndex().zIndex;return F.getMaxValue(e,t)+100}});Q.GlobalConfig.setGlobalConfig({zIndex:()=>{let e=F.getMaxZIndex(void 0,void 0,n=>{if(n?.classList?.contains("qmsg-shadow-container")||n?.closest("qmsg")&&n.getRootNode()instanceof ShadowRoot)return  false}),t=ae.config.InstanceUtils.getPopsMaxZIndex().zIndex;return F.getMaxValue(e,t)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const Se=new u.GM_Menu({GM_getValue:de,GM_setValue:ue,GM_registerMenuCommand:De,GM_unregisterMenuCommand:Ee}),z=new u.Httpx({xmlHttpRequest:Ve,logDetails:ve});z.interceptors.request.use(e=>e);z.interceptors.response.use(void 0,e=>(r.error("拦截器-请求错误",e),e.type==="onabort"?S.warning("请求取消",{consoleLogContent:true}):e.type==="onerror"?S.error("请求异常",{consoleLogContent:true}):e.type==="ontimeout"?S.error("请求超时",{consoleLogContent:true}):S.error("其它错误",{consoleLogContent:true}),e));v.Object.defineProperty,v.Function.prototype.apply,v.Function.prototype.call,v.Element.prototype.appendChild,v.setTimeout;const w=u.addStyle.bind(u),_e=L.selector.bind(L),Le=L.selectorAll.bind(L);new u.GM_Cookie;const Me="GM_Panel",Ie="data-init",te="data-key",ne="data-default-value",Oe="data-init-more-value",P="data-storage-api",Z={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},X={setting:{get width(){return Z.width<550?"88vw":Z.width<700?"550px":"700px"},get height(){return Z.height<450?"70vh":Z.height<550?"450px":"550px"}},settingMiddle:{get width(){return Z.width<350?"88vw":"350px"}}};class Ne{storageKey;listenerData;constructor(t){if(typeof t=="string"){let n=t.trim();if(n=="")throw new Error("key参数不能为空字符串");this.storageKey=n;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new F.Dictionary;}getLocalValue(){let t=de(this.storageKey);return t==null&&(t={},this.setLocalValue(t)),t}setLocalValue(t){ue(this.storageKey,t);}set(t,n){let o=this.get(t),l=this.getLocalValue();Reflect.set(l,t,n),this.setLocalValue(l),this.triggerValueChangeListener(t,o,n);}get(t,n){let o=this.getLocalValue();return Reflect.get(o,t)??n}getAll(){return this.getLocalValue()}delete(t){let n=this.get(t),o=this.getLocalValue();Reflect.deleteProperty(o,t),this.setLocalValue(o),this.triggerValueChangeListener(t,n,void 0);}has(t){let n=this.getLocalValue();return Reflect.has(n,t)}keys(){let t=this.getLocalValue();return Reflect.ownKeys(t)}values(){let t=this.getLocalValue();return Reflect.ownKeys(t).map(n=>Reflect.get(t,n))}clear(){ce(this.storageKey);}addValueChangeListener(t,n){let o=Math.random(),l=this.listenerData.get(t)||[];return l.push({id:o,key:t,callback:n}),this.listenerData.set(t,l),o}removeValueChangeListener(t){let n=false;for(const[o,l]of this.listenerData.entries()){for(let a=0;a<l.length;a++){const c=l[a];(typeof t=="string"&&c.key===t||typeof t=="number"&&c.id===t)&&(l.splice(a,1),a--,n=true);}this.listenerData.set(o,l);}return n}triggerValueChangeListener(t,n,o){if(!this.listenerData.has(t))return;let l=this.listenerData.get(t);for(let a=0;a<l.length;a++){const c=l[a];if(typeof c.callback=="function"){let f=this.get(t),p,m;typeof n<"u"&&arguments.length>=2?m=n:m=f,typeof o<"u"&&arguments.length>2?p=o:p=f,c.callback(t,m,p);}}}}const q=new Ne(Me),G={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new u.Dictionary),this.__contentConfig}},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]},getDefaultBottomContentConfig(){return [{id:"script-version",title:`版本：${Y?.script?.version||"未知"}`,isBottom:true,forms:[],clickFirstCallback(e,t,n){let o=Y?.script?.supportURL||Y?.script?.namespace;return typeof o=="string"&&u.isNotNull(o)&&window.open(o,"_blank"),false}}]}},pe={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{i.showPanel(G.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){i.isTopWindow()&&Se.add(this.$data.menuOption);},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e);},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(t=>{let n=this.$data.menuOption.findIndex(o=>o.key===t.key);n!==-1&&(this.$data.menuOption[n]=t);});},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1);}},i={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new u.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new u.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new u.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new u.Dictionary),this.__onceExecData},get scriptName(){return be},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e;},key:Me,attributeKeyName:te,attributeDefaultValueName:ne},init(){this.initContentDefaultValue(),pe.init();},isTopWindow(){return v.top===v.self},initContentDefaultValue(){const e=o=>{if(!o.attributes||o.type==="button"||o.type==="forms"||o.type==="deepMenu")return;let l=o.attributes[Ie];if(typeof l=="function"){let p=l();if(typeof p=="boolean"&&!p)return}let a=new Map,c=o.attributes[te];if(c!=null){const p=o.attributes[ne];a.set(c,p);}let f=o.attributes[Oe];if(typeof f=="object"&&f&&Object.keys(f).forEach(p=>{a.set(p,f[p]);}),!a.size){r.warn(["请先配置键",o]);return}if(o.type==="switch"){let p=typeof o.disabled=="function"?o.disabled():o.disabled;typeof p=="boolean"&&p&&this.$data.contentConfigInitDisabledKeys.push(...a.keys());}for(const[p,m]of a.entries())this.setDefaultValue(p,m);},t=o=>{for(let l=0;l<o.length;l++){let a=o[l];e(a);let c=a.forms;c&&Array.isArray(c)&&t(c);}},n=[...G.getAllContentConfig()];for(let o=0;o<n.length;o++){let l=n[o];if(!l.forms)continue;const a=l.forms;a&&Array.isArray(a)&&t(a);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&r.warn("请检查该key(已存在): "+e),this.$data.contentConfigInitDefaultValue.set(e,t);},setValue(e,t){q.set(e,t);},getValue(e,t){let n=q.get(e);return n??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){q.delete(e);},hasKey(e){return q.has(e)},addValueChangeListener(e,t){return q.addValueChangeListener(e,(o,l,a)=>{t(e,a,l);})},removeValueChangeListener(e){q.removeValueChangeListener(e);},triggerMenuValueChange(e,t,n){q.triggerValueChangeListener(e,n,t);},exec(e,t,n,o=true){const l=this;let a;typeof e=="string"||Array.isArray(e)?a=()=>e:a=e;let c=false,f=a(),p=[];Array.isArray(f)?(c=true,p=f):p.push(f);let m=p.find(x=>!this.$data.contentConfigInitDefaultValue.has(x));if(m){r.warn(`${m} 键不存在`);return}let d=JSON.stringify(p);if(o&&this.$data.onceExecMenuData.has(d))return this.$data.onceExecMenuData.get(d);let h=[],C=[],E=(x,M)=>{let A=[];Array.isArray(M)||(M=[M]),M.forEach(B=>{if(B!=null&&B instanceof HTMLStyleElement){A.push(B);return}}),h=h.concat(A);},I=x=>this.getValue(x),V=()=>{for(let x=0;x<h.length;x++)h[x].remove(),h.splice(x,1),x--;},H=()=>{let x=false;return typeof n=="function"?x=n(p):x=p.every(M=>I(M)),x},O=x=>{let M=H(),A=[];if(M){let B=p.map(y=>this.getValue(y)),k=t({value:c?B:B[0],addStyleElement:(...y)=>E(true,...y)});Array.isArray(k)||(k=[k]),k.forEach(y=>{if(y!=null&&y instanceof HTMLStyleElement){A.push(y);return}});}V(),h=[...A];};o&&p.forEach(x=>{let M=this.addValueChangeListener(x,(A,B,k)=>{O();});C.push(M);}),O();let D={reload(){O();},clear(){this.clearStoreStyleElements(),this.removeValueChangeListener(),o&&l.$data.onceExecMenuData.delete(d);},clearStoreStyleElements:()=>V(),removeValueChangeListener:()=>{C.forEach(x=>{this.removeValueChangeListener(x);});}};return this.$data.onceExecMenuData.set(d,D),D},execMenu(e,t,n=false,o=false){return this.exec(e,l=>t(l),l=>l.every(c=>{let f=!!this.getValue(c);return i.$data.contentConfigInitDisabledKeys.includes(c)&&(f=false,r.warn(`.execMenu${o?"Once":""} ${c} 被禁用`)),n&&(f=!f),f}),o)},execMenuOnce(e,t,n=false,o=false){const l=this.execMenu(e,t,n,true);if(o&&l){const a=()=>{l.reload();};this.removeUrlChangeWithExecMenuOnceListener(e),this.addUrlChangeWithExecMenuOnceListener(e,a);const c=l.clear;l.clear=()=>{c(),this.removeUrlChangeWithExecMenuOnceListener(e);};}return l},deleteExecMenuOnce(e){return e=this.transformKey(e),this.$data.onceExecMenuData.delete(e),this.$data.urlChangeReloadMenuExecOnce.delete(e),q.removeValueChangeListener(e)},onceExec(e,t){if(e=this.transformKey(e),typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(e)||(t(),this.$data.onceExecData.set(e,1));},deleteOnceExec(e){e=this.transformKey(e),this.$data.onceExecData.delete(e);},addUrlChangeWithExecMenuOnceListener(e,t){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.set(e,t);},removeUrlChangeWithExecMenuOnceListener(e){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.delete(e);},triggerUrlChangeWithExecMenuOnceEvent(e){this.$data.urlChangeReloadMenuExecOnce.forEach((t,n)=>{t(e);});},showPanel(e,t=`${be}-设置`,n=false,o=false){this.$data.$panel=null,this.$data.panelContent=[];let l=e.findIndex(c=>(typeof c.isBottom=="function"?c.isBottom():!!c.isBottom)&&c.id==="script-version")!==-1;!n&&!l&&e.push(...G.getDefaultBottomContentConfig());let a=Q.panel({title:{text:t,position:"center",html:false,style:""},content:e,btn:{close:{enable:true,callback:(c,f)=>{c.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(c,f)=>{c(),this.$data.$panel=null;}},width:X.setting.width,height:X.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=a,this.$data.panelContent=e,o||this.registerConfigSearch({$panel:a,content:e});},registerConfigSearch(e){const{$panel:t,content:n}=e;let o=async(d,h)=>{if(d==null)return;let C=await h(d);return C&&typeof C.isFind=="boolean"&&C.isFind?C.data:await o(C.data,h)},l=(d,h)=>{const C=new IntersectionObserver(E=>{E.forEach(I=>{I.isIntersecting&&(h?.(),C.disconnect());});},{root:null,threshold:1});C.observe(d),d.scrollIntoView({behavior:"smooth",block:"center"});},a=d=>{const h="pops-flashing";b.animationend(d,()=>{d.classList.remove(h);}),d.classList.add(h);},c=(d,h)=>{u.preventEvent(d);let C=Q.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:X.settingMiddle.width,height:"auto",drag:true,style:`
					${Q.config.cssText.panelCSS}

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
				`});C.$shadowRoot.querySelector(".search-wrapper");let E=C.$shadowRoot.querySelector(".search-config-text"),I=C.$shadowRoot.querySelector(".search-result-wrapper");E.focus();let V=()=>{b.empty(I);},H=D=>{const x=u.queryProperty(D,A=>A?.next?{isFind:false,data:A.next}:{isFind:true,data:A});let M=b.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${x.matchedData?.path}</div>
							<div class="search-result-item-description">${x.matchedData?.description??""}</div>
						`});return b.on(M,"click",A=>{let k=t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[D.index];if(!k){S.error(`左侧项下标${D.index}不存在`);return}k.scrollIntoView({behavior:"smooth",block:"center"}),k.click(),o(D.next,async y=>{if(y?.next){let _=await u.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(R=>{const $=Reflect.get(R,"__formConfig__");return typeof $=="object"&&$!=null&&$.text===y.name}),2500);if(_)_.click();else return S.error("未找到对应的二级菜单"),{isFind:true,data:y};return {isFind:false,data:y.next}}else {let _=await u.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(R=>Reflect.get(R,"__formConfig__")===y.matchedData?.formConfig),2500);if(_){l(_);let R=_.closest(".pops-panel-forms-fold[data-fold-enable]");R&&(R.querySelector(".pops-panel-forms-fold-container").click(),await u.sleep(500)),l(_,()=>{a(_);});}else S.error("未找到对应的菜单项");return {isFind:true,data:y}}});}),M},O=D=>{const x=new RegExp(D,"i"),M=[],A=(k,y)=>{for(let _=0;_<k.length;_++){const R=k[_];let $=R.forms;if($&&Array.isArray($)){const J=u.deepClone(y);if(R.type==="deepMenu"){const oe=u.queryProperty(J,W=>W?.next?{isFind:false,data:W.next}:{isFind:true,data:W});oe.next={name:R.text};}A($,J);}else {let J=Reflect.get(R,"text"),oe=Reflect.get(R,"description");const W=[J,oe];let fe=W.findIndex(j=>{if(typeof j=="string")return j.match(x)});if(fe!==-1){const j=u.deepClone(y),he=u.queryProperty(j,N=>N?.next?{isFind:false,data:N.next}:{isFind:true,data:N});he.next={name:J,matchedData:{path:"",formConfig:R,matchedText:W[fe],description:oe}};const ge=[];u.queryProperty(j,N=>{const se=N?.name;return typeof se=="string"&&se.trim()!==""&&ge.push(se),N?.next?{isFind:false,data:N.next}:{isFind:true,data:N}});const Ae=ge.join(g.escapeHtml(" - "));he.next.matchedData.path=Ae,M.push(j);}}}};for(let k=0;k<n.length;k++){const y=n[k];if(!y.forms||y.isBottom&&y.id==="script-version")continue;const _=y.forms;if(_&&Array.isArray(_)){let R=y.title;typeof R=="function"&&(R=R()),A(_,{index:k,name:R});}}let B=document.createDocumentFragment();for(const k of M){let y=H(k);B.appendChild(y);}V(),I.append(B);};b.on(E,"input",u.debounce(D=>{u.preventEvent(D);let x=b.val(E).trim();if(x===""){V();return}O(x);},200));},f=null,p=false,m;b.on(t.$shadowRoot,"dblclick","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",c),b.on(t.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(d,h)=>{clearTimeout(m),m=void 0,p&&f===h?(p=false,f=null,c(d)):(m=setTimeout(()=>{p=false;},200),p=true,f=h);},{capture:true}),t.$shadowRoot.appendChild(b.createElement("style",{type:"text/css",textContent:`
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
				`}));},transformKey(e){if(Array.isArray(e)){const t=e.sort();return JSON.stringify(t)}else return e}},T={isHuaWeiCloudBlog(){return !!/huaweicloud.csdn.net/i.test(window.location.origin)},isBlog(){return !!/blog.csdn.net/i.test(window.location.origin)},isBlogArticle(){return this.isBlog()&&window.location.pathname.includes("/article/details/")},isWenKu(){return !!/wenku.csdn.net/i.test(window.location.origin)},isLink(){return window.location.hostname==="link.csdn.net"},isSo(){return window.location.hostname==="so.csdn.net"},isSoCKnow(){return this.isSo()&&(window.location.pathname.startsWith("/chat")||window.location.pathname.startsWith("/so/ai"))},isDownload(){return window.location.hostname==="download.csdn.net"}},qe=`/* 底部免费抽xxx奖品广告 */\r
div.siderbar-box,\r
/* 华为开发者联盟加入社区 */\r
div.user-desc.user-desc-fix {\r
  display: none !important;\r
}\r
`,ke={init(){w(qe),i.execMenuOnce("csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",()=>this.shieldCloudDeveloperTaskChallengeEvent()),i.execMenuOnce("csdn-hua-wei-cloud-autoExpandContent",()=>this.autoExpandContent()),i.execMenuOnce("csdn-hua-wei-cloud-shieldLeftFloatingButton",()=>this.shieldLeftFloatingButton()),i.execMenuOnce("csdn-hua-wei-cloud-blockRightColumn",()=>this.blockRightColumn()),i.execMenuOnce("csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",()=>this.blockRecommendedContentAtTheBottom()),i.execMenuOnce("csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",()=>this.shieldTheBottomForMoreRecommendations());},autoExpandContent(){return r.info("自动展开全文"),[g.addBlockCSS("div.article-show-more"),w(`
			/* 自动展开全文 */
			.main-content .user-article{
				height: auto !important;
				overflow: auto !important;
			}
			`)]},shieldCloudDeveloperTaskChallengeEvent(){return r.info("屏蔽云开发者任务挑战活动"),g.addBlockCSS(".luck-draw-modal-warp")},shieldLeftFloatingButton(){return r.info("屏蔽左侧悬浮按钮，包括当前阅读量、点赞按钮、评论按钮、分享按钮"),g.addBlockCSS("div.toolbar-wrapper.article-interact-bar")},blockRightColumn(){return r.info("屏蔽右侧栏，包括相关产品-活动日历-运营活动-热门标签"),g.addBlockCSS("div.page-home-right.dp-aside-right")},blockRecommendedContentAtTheBottom(){return r.info("屏蔽底部推荐内容"),g.addBlockCSS("div.recommend-card-box")},shieldTheBottomForMoreRecommendations(){return r.info("屏蔽底部更多推荐"),g.addBlockCSS("div.more-article")}},Ue=`#mainBox main {\r
	width: inherit !important;\r
}\r
/* 当文章向下滚动时，触发左侧信息悬浮 */\r
aside.blog_container_aside[style*="position: fixed;"] {\r
	display: none !important;\r
}\r
\r
@media (min-width: 1320px) and (max-width: 1380px) {\r
	.nodata .container {\r
		width: 900px !important;\r
	}\r
\r
	.nodata .container main {\r
		width: 900px;\r
	}\r
\r
	.nodata .container main #pcCommentBox pre > ol.hljs-ln {\r
		width: 490px !important;\r
	}\r
\r
	.nodata .container main .articleConDownSource {\r
		width: 500px;\r
	}\r
}\r
\r
@media screen and (max-width: 1320px) {\r
	.nodata .container {\r
		width: 760px !important;\r
	}\r
\r
	.nodata .container main {\r
		width: 760px;\r
	}\r
\r
	.nodata .container main #pcCommentBox pre > ol.hljs-ln {\r
		width: 490px !important;\r
	}\r
\r
	.nodata .container main .toolbox-list .tool-reward {\r
		display: none;\r
	}\r
\r
	.nodata .container main .more-toolbox-new .toolbox-left .profile-box .profile-name {\r
		max-width: 128px;\r
	}\r
\r
	.nodata .container main .articleConDownSource {\r
		width: 420px;\r
	}\r
}\r
\r
@media screen and (min-width: 1380px) {\r
	.nodata .container {\r
		width: 1010px !important;\r
	}\r
\r
	.nodata .container main {\r
		width: 1010px;\r
	}\r
\r
	.nodata .container main #pcCommentBox pre > ol.hljs-ln {\r
		width: 490px !important;\r
	}\r
\r
	.nodata .container main .articleConDownSource {\r
		width: 560px;\r
	}\r
}\r
\r
@media (min-width: 1550px) and (max-width: 1700px) {\r
	.nodata .container {\r
		width: 820px !important;\r
	}\r
\r
	.nodata .container main {\r
		width: 820px;\r
	}\r
\r
	.nodata .container main #pcCommentBox pre > ol.hljs-ln {\r
		width: 690px !important;\r
	}\r
\r
	.nodata .container main .articleConDownSource {\r
		width: 500px;\r
	}\r
}\r
\r
@media screen and (min-width: 1700px) {\r
	.nodata .container {\r
		width: 1010px !important;\r
	}\r
\r
	.nodata .container main {\r
		width: 1010px;\r
	}\r
\r
	.nodata .container main #pcCommentBox pre > ol.hljs-ln {\r
		width: 690px !important;\r
	}\r
\r
	.nodata .container main .articleConDownSource {\r
		width: 560px;\r
	}\r
}\r
`,Fe={init(){i.exec("csdn-blog-rightToolbarEnable",()=>this.shieldRightToolbar(),e=>!i.getValue(e[0]),true),i.execMenuOnce("csdn-blog-rightToolbarCreativeCenter",()=>this.shieldCreativeCenter()),i.execMenuOnce("csdn-blog-rightToolbarShowOrSidebar",()=>this.shieldShowOrSidebar()),i.execMenuOnce("csdn-blog-rightToolbarBeginnerGuidance",()=>this.shieldBeginnerGuidance()),i.execMenuOnce("csdn-blog-rightToolbarCustomerService",()=>this.shieldCustomerService()),i.execMenuOnce("csdn-blog-rightToolbarReport",()=>this.shieldReport()),i.execMenuOnce("csdn-blog-rightToolbarBackToTop",()=>this.shieldBackToTop()),this.initRightToolbarOffset(),b.ready(()=>{i.execMenuOnce("csdn-blog-addGotoRecommandButton",()=>{this.addGotoRecommandButton();});});},addGotoRecommandButton(){r.info("【添加】前往评论按钮，在返回顶部的上面");let e=document.createElement("a");e.className="option-box",e.setAttribute("data-type","gorecommand"),e.innerHTML=`
		<img src="https://g.csdnimg.cn/side-toolbar/3.6/images/customer.png" alt="" srcset="">
		<span class="show-txt" style="opacity:100;">前往<br>评论</span>
		`,e.addEventListener("click",function(){let t=document.querySelector("#toolBarBox");if(!t||!t.getClientRects().length){let c=_e("#pcCommentBox");if(c&&c.getClientRects().length)t=c;else {r.error("评论区处于隐藏状态");return}}r.info("滚动到评论");let n=t.getBoundingClientRect().top+window.scrollY,o=document.querySelector("#csdn-toolbar"),l=window.getComputedStyle(o),a=o.clientHeight-parseFloat(l.paddingTop)-parseFloat(l.paddingBottom);window.scrollTo({top:n-a-8,left:0,behavior:"smooth"});}),u.waitNode(".csdn-side-toolbar").then(()=>{let t=document.querySelector(".csdn-side-toolbar a:nth-last-child(2)");t.parentElement.insertBefore(e,t.nextSibling);});},initRightToolbarOffset(){r.info("初始化右侧工具栏的偏移（top、right）"),w(`
        .csdn-side-toolbar{
          left: unset !important;
        }
        `),u.waitNode(".csdn-side-toolbar").then(e=>{b.css(e,{top:parseInt(i.getValue("csdn-blog-rightToolbarTopOffset"))+"px",right:parseInt(i.getValue("csdn-blog-rightToolbarRightOffset"))+"px"});});},shieldRightToolbar(){return r.info("屏蔽右侧工具栏"),g.addBlockCSS("div.csdn-side-toolbar")},shieldCreativeCenter(){return r.info("【屏蔽】创作中心"),g.addBlockCSS(".csdn-side-toolbar .sidetool-writeguide-box")},shieldShowOrSidebar(){return r.info("【屏蔽】显示/隐藏侧栏"),g.addBlockCSS(".csdn-side-toolbar a.sidecolumn")},shieldBeginnerGuidance(){return r.info("【屏蔽】新手引导"),g.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="guide"]')},shieldCustomerService(){return r.info("【屏蔽】客服"),g.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="cs"]')},shieldReport(){return r.info("【屏蔽】举报"),g.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="report"]')},shieldBackToTop(){return r.info("【屏蔽】返回顶部"),g.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="gotop"]')}},Pe={init(){Fe.init(),i.execMenuOnce("csdn-blog-articleCenter",()=>this.articleCenter()),i.execMenuOnce("csdn-blog-shieldLoginDialog",()=>this.shieldLoginDialog()),i.execMenuOnce("csdn-blog-autoExpandContent",()=>this.autoExpandContent()),i.execMenuOnce("csdn-blog-autoExpandCodeContent",()=>this.autoExpandCodeContent()),i.exec("csdn-blog-blockComment",()=>this.blockComment(),e=>!i.getValue(e[0]),true),i.exec("csdn-blog-bottomRecommendArticleEnable",()=>this.shieldBottomRecommendArticle(),e=>!i.getValue(e[0]),true),i.execMenuOnce("csdn-blog-shieldBottomSkillTree",()=>this.shieldBottomSkillTree()),i.execMenuOnce("csdn-blog-shieldBottomFloatingToolbar",()=>this.shieldBottomFloatingToolbar()),i.execMenuOnce("csdn-blog-shieldLeftBlogContainerAside",()=>this.shieldLeftBlogContainerAside()),i.execMenuOnce("csdn-blog-shieldRightDirectoryInformation",()=>this.shieldRightDirectoryInformation()),i.execMenuOnce("csdn-blog-shieldArticleSearchTip",()=>this.shieldArticleSearchTip()),i.execMenuOnce("csdn-blog-allowSelectContent",()=>this.allowSelectContent()),b.ready(()=>{i.execMenuOnce("csdn-blog-identityCSDNDownload",()=>{this.identityCSDNDownload();}),i.execMenuOnce("csdn-blog-clickPreCodeAutomatically",()=>{this.clickPreCodeAutomatically();}),i.execMenuOnce("csdn-blog-restoreComments",()=>{this.restoreComments();});});},clickPreCodeAutomatically(){r.info("点击代码块自动展开"),document.addEventListener("click",function(e){let t=e.target;t.localName==="pre"&&(t.style.setProperty("height","auto"),t.querySelector(".hide-preCode-box")?.remove());});},restoreComments(){r.info("恢复评论到正确位置-第一条评论"),u.waitNode(".first-recommend-box").then(e=>{let t=document.querySelector(".recommend-box.insert-baidu-box.recommend-box-style");t.insertBefore(e,t.firstChild);}),r.info("恢复评论到正确位置-第二条评论"),u.waitNode(".second-recommend-box").then(e=>{let t=document.querySelector(".recommend-box.insert-baidu-box.recommend-box-style");t.insertBefore(e,t.firstChild);});},identityCSDNDownload(){r.info("标识CSDN下载的链接"),document.querySelectorAll(".recommend-item-box[data-url*='https://download.csdn.net/']").forEach(e=>{i.getValue("csdn-blog-removeResourceDownloadArticle")?e.remove():e.querySelector(".content-box").style.setProperty("border","2px solid red");});},articleCenter(){r.info("全文居中");let e=[w(Ue)];return i.getValue("csdn-blog-shieldRightDirectoryInformation")&&e.push(w(`
				#mainBox {
					margin-right: 0px;
				}`)),i.getValue("csdn-blog-shieldLeftBlogContainerAside")&&e.push(w(`
				#mainBox {
					margin-left: 0px;
				}`)),e},shieldLoginDialog(){return r.info("屏蔽登录弹窗"),g.addBlockCSS(".passport-login-container")},autoExpandCodeContent(){return r.info("自动展开代码块"),[g.addBlockCSS("pre.set-code-hide .hide-preCode-box"),w(`
			pre.set-code-hide{
				height: auto !important;
			}
			/* 自动展开代码块 */
			.comment-list-box,
			main div.blog-content-box pre {
				max-height: none !important;
			}
        `)]},autoExpandContent(){return r.info("自动展开全文"),w(`
		/* 自动展开全文 */
		#article_content,
		.user-article.user-article-hide {
			height: auto !important;
			overflow: auto !important;
		}
        `)},blockComment(){return r.info("屏蔽评论区"),g.addBlockCSS("#pcCommentBox")},shieldBottomRecommendArticle(){return r.info("屏蔽底部推荐文章"),g.addBlockCSS("main > div.recommend-box")},shieldBottomSkillTree(){return r.info("屏蔽底部xx技能树"),g.addBlockCSS("#treeSkill")},shieldBottomFloatingToolbar(){return r.info("屏蔽底部悬浮工具栏"),g.addBlockCSS("#toolBarBox")},shieldLeftBlogContainerAside(){return r.info("【屏蔽】左侧博客信息"),g.addBlockCSS("aside.blog_container_aside")},shieldRightDirectoryInformation(){return r.info("【屏蔽】右侧目录信息"),g.addBlockCSS("#rightAsideConcision","#rightAside")},shieldArticleSearchTip(){return r.info("屏蔽文章内的选中搜索悬浮提示"),g.addBlockCSS("#articleSearchTip")},allowSelectContent(){return r.info("允许选择内容"),w(`
		#content_views,
		#content_views pre,
		#content_views pre code {
			user-select: text !important;
		}
		`)}},Ge=`#chatgpt-article-detail\r
  > div.layout-center\r
  > div.main\r
  > div.article-box\r
  > div.cont.first-show.forbid {\r
  max-height: unset !important;\r
  height: auto !important;\r
  overflow: auto !important;\r
}\r
\r
.forbid {\r
  user-select: text !important;\r
}\r
`,He=`/* wenku顶部横幅 */\r
#app > div > div.main.pb-32 > div > div.top-bar,\r
/* 底部展开全文 */\r
#chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid > div.open {\r
  display: none !important;\r
}`,We={init(){w(Ge),w(He),i.execMenuOnce("csdn-wenku-shieldResourceRecommend",()=>this.shieldResourceRecommend()),i.execMenuOnce("csdn-wenku-shieldRightUserInfo",()=>this.shieldRightUserInfo()),i.execMenuOnce("csdn-wenku-shieldRightToolBar",()=>this.shieldRightToolBar());},shieldResourceRecommend(){return r.info("【屏蔽】资源推荐"),g.addBlockCSS("#recommend")},shieldRightUserInfo(){return r.info("【屏蔽】右侧用户信息"),g.addBlockCSS(".layout-right")},shieldRightToolBar(){return r.info("【屏蔽】右侧悬浮工具栏"),g.addBlockCSS(".csdn-side-toolbar")}},Te={init(){i.execMenuOnce("csdn-link-jumpRedirect",()=>{this.jumpRedirect();});},jumpRedirect(){try{let e=new URLSearchParams(window.location.search);const t="target";if(e.has(t)){let n=e.get(t),o=decodeURIComponent(n);r.success(`跳转链接：${o}`),window.location.href=o;}else r.error("解析跳转的链接失败，原因：搜索参数中没有target参数");}catch(e){S.error("跳转链接失败："+e.message);}}},je=`.ecommend-item-box.recommend-recommend-box,\r
.login-mark,\r
.opt-box.text-center,\r
.leftPop,\r
#csdn-shop-window,\r
.toolbar-advert,\r
.hide-article-box,\r
.user-desc.user-desc-fix,\r
.recommend-card-box,\r
.more-article,\r
.article-show-more,\r
#csdn-toolbar-profile-nologin,\r
.guide-rr-first,\r
#recommend-item-box-tow,\r
/* 发文章得原力分图片提示 */\r
div.csdn-toolbar-creative-mp,\r
/* 阅读终点，创作起航，您可以撰写心得或摘录文章要点写篇博文。 */\r
#toolBarBox div.write-guide-buttom-box,\r
/* 觉得还不错? 一键收藏 */\r
ul.toolbox-list div.tool-active-list,\r
/* 右边按钮组的最上面的创作话题 */\r
div.csdn-side-toolbar .activity-swiper-box,\r
.sidetool-writeguide-box .tip-box,\r
/* 右下角的登录提示 */\r
.passport-login-tip-container,\r
/* 全屏双十一红包 */\r
.csdn-reapck-select,\r
/* 侧栏的618会员开通 */\r
.csdn-side-toolbar  .sidecolumn-vip,\r
/* 右边推荐的推广广告 */\r
#recommendAdBox {\r
	display: none !important;\r
}\r
`,Ke=`/*.blog_container_aside,\r
#nav {\r
	margin-left: -45px;\r
}\r
.recommend-right.align-items-stretch.clearfix,\r
.dl_right_fixed {\r
	margin-left: 45px;\r
}*/\r
`,Be={init(){this.addCSS(),i.execMenuOnce("csdn-blog-shieldTopToolbar",()=>this.shieldTopToolbar()),b.ready(()=>{i.execMenuOnce("csdn-blog-removeClipboardHijacking",()=>{this.removeClipboardHijacking();}),i.execMenuOnce("csdn-blog-unBlockCopy",()=>{this.unBlockCopy();});});},addCSS(){return r.info("添加屏蔽CSS和功能CSS"),[w(je),w(Ke)]},removeClipboardHijacking(){r.info("去除剪贴板劫持");let e=document.querySelector(".article-copyright");e&&e.remove(),v.articleType&&(v.articleType=0),v.csdn&&v.csdn.copyright&&v.csdn.copyright.textData&&(v.csdn.copyright.textData=""),v.csdn&&v.csdn.copyright&&v.csdn.copyright.htmlData&&(v.csdn.copyright.htmlData="");},unBlockCopy(){r.info("取消禁止复制"),b.on(document,"click",".hljs-button",function(t,n){u.preventEvent(t);let o=n,l=o.closest(".hljs")||o.closest("pre"),a=o.parentElement,c=l?.querySelector("code")||a.querySelector("code")||a,f=c.innerText;r.info("点击复制按钮复制内容："+(f.length>8?f.substring(0,8)+"...":f),c),u.setClip(f),o.setAttribute("data-title","复制成功");},{capture:true});let e=new u.LockFunction(function(t){let n=t.target;if(n.localName!=="pre")return;let o=n.querySelector(".hljs-button");o&&o.setAttribute("data-title","复制");});b.on(document,["mouseenter","mouseleave"],function(t){e.run(t);},{capture:true}),u.waitNode("#content_views").then(t=>{v.$&&v.$("#content_views")?.unbind("copy"),b.on(t,"copy",function(n){u.preventEvent(n);let l=v.getSelection()?.toString();return r.info("Ctrl+C复制内容："+(l.length>8?l.substring(0,8)+"...":l)),u.setClip(l),false},{capture:true});}),u.waitNode(".hljs-button").then(()=>{setTimeout(()=>{Le(".hljs-button").forEach(t=>{t.removeAttribute("onclick"),t.removeAttribute("data-report-click"),t.setAttribute("data-title","复制");});},250);});},shieldTopToolbar(){return r.info("屏蔽顶部Toolbar"),g.addBlockCSS("#toolbarBox","#csdn-toolbar")}},Ce={init(){T.isLink()?(r.info("Router: 中转链接"),Te.init()):T.isHuaWeiCloudBlog()?(r.info("Router: 华为云联盟"),ke.init()):T.isBlog()?(r.info("Router: 博客"),Be.init(),T.isBlogArticle()&&(r.info("Router: 帖子"),Pe.init())):T.isWenKu()?(r.info("Router: 文库"),We.init()):r.error("暂未适配，请反馈开发者："+globalThis.location.href);}},ze={init(){i.execMenuOnce("m-csdn-link-jumpRedirect",()=>{Te.jumpRedirect();});}},Je=`/* 右下角的 免费赢华为平板xxxx */\r
.org-main-content .siderbar-box {\r
  display: none !important;\r
}\r
`,Ze={init(){w(Je),i.execMenuOnce("m-csdn-hua-wei-cloud-autoExpandContent",()=>ke.autoExpandContent()),i.execMenuOnce("m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",()=>this.blockBottomJoinTheCommunity());},blockBottomJoinTheCommunity(){return r.info("【屏蔽】底部加入社区"),g.addBlockCSS(".user-desc")}},re={isSuccessResponse(e){return e==null?false:(typeof e=="string"&&(e=u.toJSON(e)),e?.code===200)}},ie={async folderListWithCheck(e){let t=await z.get("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/folderListWithCheck",{data:{url:e},fetch:true,allowInterceptConfig:false,headers:{"User-Agent":u.getRandomPCUA()}});r.info(t);let n=u.toJSON(t.data.responseText);if(!t.status||!re.isSuccessResponse(t.data.responseText)){r.error("获取收藏夹信息失败，请求异常"),typeof n.msg=="string"?S.error(n.msg):S.error("获取收藏夹信息失败");return}return n.data.result},async addFavoriteInFolds(e){let t=await z.post("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/addFavoriteInFolds",{fetch:true,data:e,headers:{"Content-Type":"application/json","User-Agent":u.getRandomPCUA()},allowInterceptConfig:false});if(r.info(t),!t.status||!re.isSuccessResponse(t.data.responseText)){r.error("添加收藏失败，请求异常",t),S.error("添加收藏失败，请求异常");return}return  true},async checkFavoriteByUrl(e){debugger;let t=await z.get("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/checkFavoriteByUrl",{data:{url:e},fetch:true,allowInterceptConfig:false,headers:{"User-Agent":u.getRandomPCUA()}});if(r.info(t),!t.status||!re.isSuccessResponse(t.data.responseText)){r.error("检查收藏夹状态失败，请求异常"),S.error("检查收藏夹状态失败，请求异常");return}return u.toJSON(t.data.responseText).data},async createFolder(e){let t=await z.post("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/createFolder",{data:e,fetch:true,headers:{Accept:"application/json, text/javascript, */*; q=0.01","Content-Type":"application/json","User-Agent":u.getRandomPCUA()},allowInterceptConfig:false});if(r.info(t),!t.status||!re.isSuccessResponse(t.data.responseText)){S.error("创建收藏夹失败");return}return u.toJSON(t.data.responseText).data}},Ye={init(){i.exec("m-csdn-blog-shieldTopToolbar",()=>this.shieldTopToolbar(),e=>!i.getValue(e[0]),true),i.execMenuOnce("m-csdn-blog-notLimitCodePreMaxHeight",()=>this.notLimitCodePreMaxHeight()),i.execMenuOnce("m-csdn-blog-notLimitCommentMaxHeight",()=>this.notLimitCommentMaxHeight()),i.execMenuOnce("m-csdn-blog-allowSelectText",()=>this.allowSelectText()),i.execMenuOnce("m-csdn-blog-autoExpandContent",()=>this.autoExpandContent()),i.exec("m-csdn-blog-bottomArticleEnable",()=>this.blockBottomArticle(),e=>!i.getValue(e[0]),true),i.exec("m-csdn-blog-comment-enable",()=>this.blockComment(),e=>!i.getValue(e[0]),true),i.exec("m-csdn-blog-bottom-toolbar-enable",()=>this.blockBottomToolBar(),e=>!i.getValue(e[0]),true),i.execMenuOnce("m-csdn-blog-bottom-toolbar-always-bottom",()=>this.bottomToolBarAlwaysShow()),b.ready(()=>{i.execMenuOnce("m-csdn-blog-removeAds",()=>this.removeAds()),i.execMenuOnce("m-csdn-blog-refactoringRecommendation",()=>{this.refactoringRecommendation();}),i.execMenuOnce("m-csdn-blog-unBlockCopy",()=>{Be.unBlockCopy();}),i.execMenuOnce("m-csdn-blog-bottom-toolbar-optimizationCollectButton",()=>{this.optimizationCollectButton();});});},shieldTopToolbar(){return r.info("屏蔽顶部Toolbar"),[g.addBlockCSS("#csdn-toolbar"),w(`
			/* 内容顶部要归位 */
			body #main,
			.margin_sides{
			  margin-top: unset !important;
			  padding-top: unset !important;
			}
			#article .article_title{
			  margin-top: .32rem !important;
			  padding-top: unset !important;
			}
			`)]},refactoringRecommendation(){function e(){document.querySelectorAll(".container-fluid").forEach(n=>{let o="",l="",a="",c="",f=false,p=false;if(n.hasAttribute("data-url")){if(o=n.getAttribute("data-url"),l=n.querySelector(".recommend_title div.left")?.innerHTML,!n.querySelector(".text"))return;a=n.querySelector(".text")?.innerHTML,n.querySelectorAll(".recommend-img").length&&n.querySelectorAll(".recommend-img").forEach(d=>{c+=d.innerHTML;});}else o=n.querySelector("a[data-type]").getAttribute("href"),l=n.querySelector(".recommend_title div.left").innerHTML,a=n.querySelector(".text").innerHTML;var m=new URL(o);m.host==="download.csdn.net"||m.host==="www.iteye.com"&&m.pathname.match(/^\/resource/gi)?(f=true,l='<div class="component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>'+l):m.origin.match(/edu.csdn.net/gi)&&(p=true,l='<div class="component-box"><a class="csdn-edu-title" href="javascript:;">CSDN学院</a></div>'+l),n.setAttribute("class","GM-csdn-dl"),n.setAttribute("data-url",o),n.innerHTML=`<div class="GM-csdn-title"><div class="left">${l}</div></div><div class="GM-csdn-content">${a}</div><div class="GM-csdn-img">${c}</div>`,n.addEventListener("click",function(){i.getValue("m-csdn-blog-openNewTab")?window.open(o,"_blank"):window.location.href=o;}),(f||p)&&i.getValue("m-csdn-blog-removeResourceArticle")&&n.remove();});}let t=new u.LockFunction(e,50);u.waitNode("#recommend").then(n=>{r.info("重构底部推荐"),t.run(),u.mutationObserver(n,{callback:()=>{t.run();},config:{childList:true,subtree:true,attributes:true}});});},blockBottomArticle(){return r.info("屏蔽底部文章"),g.addBlockCSS("#recommend")},blockComment(){return r.info("屏蔽评论"),g.addBlockCSS("#comment")},removeAds(){return r.info("去除广告"),[g.waitRemove(".passport-login-container"),g.waitRemove(".btn_open_app_prompt_box.detail-open-removed"),g.waitRemove(".add-firstAd"),g.waitRemove("div.feed-Sign-weixin"),g.waitRemove("div.ios-shadowbox")]},notLimitCodePreMaxHeight(){return r.info("不限制代码块最大高度"),w(`
        pre{
            max-height: unset !important;
        }
        `)},notLimitCommentMaxHeight(){return r.info("不限制评论区最大高度"),w(`
        #comment{
          max-height: none !important;
        }
      `)},allowSelectText(){return r.info("允许选择文字"),w(`
        #content_views,
        #content_views pre,
        #content_views pre code{
            webkit-touch-callout: text !important;
            -webkit-user-select: text !important;
            -khtml-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
            user-select: text !important;
        }
        `)},autoExpandContent(){return r.info("自动展开内容"),w(`
        #content_views pre.set-code-hide,
        .article_content{
          height: 100% !important;
          overflow: auto !important;
        }
        `)},blockBottomToolBar(){return r.info("屏蔽底部工具栏"),g.addBlockCSS("#operate")},bottomToolBarAlwaysShow(){return r.info("底部工具栏常驻"),w(`
			/* 底部工具栏 */
			#operate {
				bottom: 0 !important;
			}
			`)},optimizationCollectButton(){r.info("优化收藏按钮"),u.waitNode("#operate .collect-btn",1e4).then(e=>{e&&b.on(e,"click",async t=>{u.preventEvent(t);let n=e.querySelector(".collect"),o=e.querySelector(".uncollect"),l=await ie.folderListWithCheck(window.location.origin+window.location.pathname);if(!l)return;let a=[];l.forEach(m=>{m.IsFavorite&&a.push(m.ID);});let c=m=>{let d=m.ID,h=b.createElement("li",{className:"csdn-collection-item",innerHTML:`
									<div class="csdn-collection-item_left">
										<div class="csdn-collection-item_title">
											<span class="title-m">${m.Name}</span>
										</div>
										<span class="csdn-collection-item_ext">
											<span class="csdn-collection-item_length">${m.FavoriteNum}条内容</span>
											<span class="dot">・</span>
											<span class="csdn-collection-controls">${m.IsPrivate?"私密":"公开"}</span>
										</span>
									</div>
									<span class="collect-btn">${m.IsFavorite?"已收藏":"收藏"}</span>
								`},{"data-is-collect":m.IsFavorite});h.querySelector(".title-m");let C=h.querySelector(".csdn-collection-item_length");h.querySelector(".csdn-collection-controls");let E=h.querySelector(".collect-btn");return b.on(E,"click",async I=>{let V=v.articleDetailUrl;V==null&&(V=window.location.origin+window.location.pathname);let H=v.articleId;if(H==null){r.error("获取文章ID失败"),S.error("获取文章ID失败");return}let O=v.username;if(O==null){r.error("获取文章作者失败"),S.error("获取文章作者失败");return}let D=v.articleTitle;if(D==null&&(D=document.title.replace(/-CSDN博客$/,"")),D==null){r.error("获取文章标题失败"),S.error("获取文章标题失败");return}let x=v.articleDesc;if(x==null){let B=_e("meta[name='description']");B&&(x=B.getAttribute("content"));}if(x==null){r.error("获取文章描述失败"),S.error("获取文章描述失败");return}let M=[...a],A=S.loading("处理中...");try{let B=await ie.checkFavoriteByUrl(V);if(B==null)return;r.info(d,B);let k=!B[d];if(k?(r.info("添加收藏"),M.push(d)):(r.info("取消收藏"),M.splice(M.indexOf(d),1)),!await ie.addFavoriteInFolds({author:O,url:V,source:"blog",sourceId:H,title:D,description:x,fromType:"PC",username:m.Username,folderIdList:M}))return;let _=await ie.checkFavoriteByUrl(V);if(_==null)return;r.info(d,_),h.setAttribute("data-is-collect",(!!_[d]).toString()),k?_[d]?(r.success("收藏成功"),S.success("收藏成功"),b.text(E,"已收藏"),a.includes(d)||a.push(d),m.FavoriteNum++):(r.error("收藏失败",_,d),S.error("收藏失败")):_[d]?(r.error("取消收藏失败",_,d),S.error("取消收藏失败")):(r.success("取消收藏成功"),S.success("取消收藏成功"),b.text(E,"收藏"),a.includes(d)&&a.splice(a.indexOf(d),1),m.FavoriteNum--),b.text(C,`${m.FavoriteNum}条内容`),Object.values(_).find($=>$)?(b.show(n,!1),b.hide(o,!1)):(b.show(o,!1),b.hide(n,!1)),A.close();}catch(B){r.error(B);}finally{A.close();}}),h},p=Q.alert({title:{text:"添加收藏夹",position:"center"},content:{text:`
									<ul class="csdn-collection-items"></ul>
								`,html:true},btn:{ok:{enable:false}},width:X.setting.width,height:X.setting.height,drag:true,mask:{enable:true},style:`
								.csdn-collection-items{
									--font-size: 16px;
								}
								.csdn-collection-items{
									font-size: var(--font-size);
									font-weight: 400;
									padding: 0 20px 0;
									margin: 24px 0;
									overflow: auto;
									-ms-scroll-chaining: none;
									overscroll-behavior: contain;
								}
								.csdn-collection-item{
									width: 100%;
    								height: 62px;
									line-height: normal;
									position: relative;
									padding: 8px 12px;
									cursor: pointer;
									display: -webkit-box;
									display: -ms-flexbox;
									display: flex;
									-webkit-box-align: center;
									-ms-flex-align: center;
									align-items: center;
									-webkit-box-pack: justify;
									-ms-flex-pack: justify;
									justify-content: space-between;
									border-bottom: 1px solid #f0f0f5;
								}
								.csdn-collection-item_left{
									line-height: normal;
									flex: 1;
									overflow: hidden;
								}
								.csdn-collection-item_title{
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
									width: 100%;
								}
								.csdn-collection-item_ext{
									font-weight: 400;
									color: #999aaa;
									line-height: 17px;
									margin-top: 8px;
									font-size: .8em;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
									width: 100%;
									display: inline-flex;
									align-items: center;
								}
								.collect-btn{
									color: #555666;
									font-size: var(--font-size);
									width: 64px;
									height: 30px;
									line-height: 30px;
									border-radius: 20px;
									text-align: center;
									-webkit-transition: all .2s;
									transition: all .2s;
									border: 1px solid #ccccd8;
								}
								.csdn-collection-item[data-is-collect="true"] .collect-btn{
									color: #999aaa;
									background: rgba(232, 232, 237, .3);
									border: 1px solid #e8e8ed;
								}
								/* .csdn-collection-item:hover{
									background: #f5f6f7;
								}
								.csdn-collection-item:hover .collect-btn{
									border: 1px solid #555666;
								} */
							`}).$shadowRoot.querySelector(".csdn-collection-items");l.forEach(m=>{let d=c(m);p.appendChild(d);});},{capture:true});});}},Qe=`/* 右下角的买一年送3个月的广告图标 */\r
.blind_box {\r
  display: none !important;\r
}\r
`,Xe={init(){w(Qe),i.execMenuOnce("m-csdn-wenku-shieldBottomToolbar",()=>this.shieldBottomToolbar());},shieldBottomToolbar(){return r.info("【屏蔽】底部工具栏"),g.addBlockCSS(".page-container > div.btn")}},et=`/* 右下角悬浮图标 买1年送3个月 */\r
.page-container .blind_box,\r
/* 底部工具栏右边的 开会员按钮（低至xx元/次） */\r
.page-container .btn .ml-12,\r
/* 登录弹窗 */\r
.passport-login-container,\r
/* 通用广告className匹配 */\r
.ads {\r
	display: none !important;\r
}\r
`,tt={init(){i.execMenuOnce("m-csdn-download-removeAds",()=>w(et)),i.execMenuOnce("m-csdn-download-automaticallyExpandResourceIntroduction",()=>this.automaticallyExpandResourceIntroduction());},automaticallyExpandResourceIntroduction(){return r.info("自动展开资源介绍"),[g.addBlockCSS("label.unfold-font"),w(`
			.resource-desc{
				max-height: unset !important;
				overflow: unset !important;
			}
			`)]}},nt=`.view_comment_box,\r
.weixin-shadowbox.wap-shadowbox,\r
.feed-Sign-span,\r
.user-desc.user-desc-fix,\r
.comment_read_more_box,\r
#content_views pre.set-code-hide .hide-preCode-box,\r
/* 登录弹窗 */\r
.passport-login-container,\r
.hljs-button[data-title='登录后复制'],\r
.article-show-more,\r
#treeSkill,\r
div.btn_open_app_prompt_div,\r
div.readall_box,\r
div.aside-header-fixed,\r
div.feed-Sign-weixin,\r
div.ios-shadowbox,\r
/* 底部评论工具栏的抢沙发图片 */\r
.comment-sofa-flag {\r
	display: none !important;\r
}\r
`,ot=`#mainBox {\r
  width: auto;\r
}\r
.user-desc.user-desc-fix {\r
  height: auto !important;\r
  overflow: auto !important;\r
}\r
.component-box .praise {\r
  background: #ff5722;\r
  border-radius: 5px;\r
  padding: 0px 8px;\r
  height: auto;\r
}\r
.component-box .praise,\r
.component-box .share {\r
  color: #fff;\r
}\r
.component-box a {\r
  display: inline-block;\r
  font-size: xx-small;\r
}\r
.component-box {\r
  display: inline;\r
  margin: 0;\r
  position: relative;\r
  white-space: nowrap;\r
}\r
.csdn-edu-title {\r
  background: #4d6de1;\r
  border-radius: 5px;\r
  padding: 0px 8px;\r
  height: auto;\r
  color: #fff !important;\r
}\r
\r
.GM-csdn-dl {\r
  padding: 0.24rem 0.32rem;\r
  width: 100%;\r
  justify-content: space-between;\r
  -webkit-box-pack: justify;\r
  border-bottom: 1px solid #f5f6f7 !important;\r
}\r
.GM-csdn-title {\r
  font-size: 0.3rem;\r
  color: #222226;\r
  letter-spacing: 0;\r
  line-height: 0.44rem;\r
  font-weight: 600;\r
  /*max-height: .88rem;*/\r
  word-break: break-all;\r
  overflow: hidden;\r
  display: -webkit-box;\r
  -webkit-box-orient: vertical;\r
  -webkit-line-clamp: 2;\r
}\r
.GM-csdn-title a {\r
  word-break: break-all;\r
  color: #222226;\r
  font-weight: 600;\r
}\r
.GM-csdn-title em,\r
.GM-csdn-content em {\r
  font-style: normal;\r
  color: #fc5531;\r
}\r
.GM-csdn-content {\r
  /*max-width: 5.58rem;*/\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  display: -webkit-box;\r
  -webkit-line-clamp: 1;\r
  -webkit-box-orient: vertical;\r
  color: #555666;\r
  font-size: 0.24rem;\r
  line-height: 0.34rem;\r
  max-height: 0.34rem;\r
  word-break: break-all;\r
  -webkit-box-flex: 1;\r
  -ms-flex: 1;\r
  flex: 1;\r
  margin-top: 0.16rem;\r
}\r
.GM-csdn-img img {\r
  width: 2.18rem;\r
  height: 1.58rem;\r
  /*margin-left: .16rem*/\r
}\r
`,rt={init(){this.addCSS();},addCSS(){return [w(nt),w(ot)]}},we={init(){T.isLink()?(r.info("Router: 中转链接"),ze.init()):T.isHuaWeiCloudBlog()?(r.info("Router: 华为云联盟"),Ze.init()):T.isBlog()?(r.info("Router: 博客"),rt.init(),T.isBlogArticle()&&(r.info("Router: 文章"),Ye.init())):T.isWenKu()?(r.info("Router: 文库"),Xe.init()):T.isDownload()?(r.info("Router: 资源下载"),tt.init()):r.error("暂未适配，请反馈开发者："+globalThis.location.href);}},me={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new F.Dictionary),this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t);},initComponentsStorageApi(e,t,n){let o;this.hasStorageApi(e)?o=this.getStorageApi(e):o=n,this.setComponentsStorageApiProperty(t,o);},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,P,t);}},s=function(e,t,n,o,l,a,c,f){let p={text:e,type:"switch",description:l,disabled:c,attributes:{},props:{},getValue(){return this.props[P].get(t,n)},callback(m,d){let h=!!d;if(r.success(`${h?"开启":"关闭"} ${e}`),typeof o=="function"&&o(m,h))return;this.props[P].set(t,h);},afterAddToUListCallBack:a};return Reflect.set(p.attributes,te,t),Reflect.set(p.attributes,ne,n),me.initComponentsStorageApi("switch",p,{get(m,d){return i.getValue(m,d)},set(m,d){i.setValue(m,d);}}),p},le=function(e,t,n,o,l,a,c){let f=[];typeof o=="function"?f=o():f=o;let p={text:e,type:"select",description:a,attributes:{},props:{},getValue(){return this.props[P].get(t,n)},callback(m,d,h){let C=d;if(r.info(`选择：${h}`),typeof l=="function"&&l(m,C,h))return;this.props[P].set(t,C);},data:f};return Reflect.set(p.attributes,te,t),Reflect.set(p.attributes,ne,n),me.initComponentsStorageApi("select",p,{get(m,d){return i.getValue(m,d)},set(m,d){i.setValue(m,d);}}),p},it={id:"component-common",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[le("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,n)=>{r.info("设置当前Qmsg弹出位置"+n);},"Toast显示在页面九宫格的位置"),le("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),s("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},ye=function(e,t,n,o,l,a,c,f,p,m){let d={text:e,type:"slider",description:f,attributes:{},props:{},getValue(){return this.props[P].get(t,n)},getToolTipContent(h){return typeof c=="function"?c(h):`${h}`},callback(h,C){if(typeof a=="function"&&a(h,C))return;this.props[P].set(t,C);},min:o,max:l,step:p};return Reflect.set(d.attributes,te,t),Reflect.set(d.attributes,ne,n),me.initComponentsStorageApi("slider",d,{get(h,C){return i.getValue(h,C)},set(h,C){i.setValue(h,C);}}),d},lt={id:"panel-blog",title:"博客",isDefault(){return T.isBlog()},forms:[{type:"forms",text:"",forms:[{type:"deepMenu",text:"文章",forms:[{type:"forms",text:"",forms:[{text:"布局屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[s("【屏蔽】登录弹窗","csdn-blog-shieldLoginDialog",true),s("【屏蔽】左侧博客信息","csdn-blog-shieldLeftBlogContainerAside",false),s("【屏蔽】右侧目录信息","csdn-blog-shieldRightDirectoryInformation",false),s("【屏蔽】底部的悬浮工具栏","csdn-blog-shieldBottomFloatingToolbar",false)]}]},{text:"右侧悬浮工具栏",type:"deepMenu",forms:[{text:"功能",type:"forms",forms:[s("启用","csdn-blog-rightToolbarEnable",true,void 0,"创作中心，隐藏/显示侧栏，新手引导，客服、举报..."),s("【添加按钮】前往评论","csdn-blog-addGotoRecommandButton",true,void 0,"在悬浮工具栏最后面添加"),ye("right偏移","csdn-blog-rightToolbarRightOffset",90,0,document.documentElement.clientWidth,(e,t)=>{let n=document.querySelector(".csdn-side-toolbar");b.css(n,{right:t+"px"});},e=>`当前：${e}px，默认：90px`),ye("top偏移","csdn-blog-rightToolbarTopOffset",140,0,document.documentElement.clientHeight,(e,t)=>{let n=document.querySelector(".csdn-side-toolbar");b.css(n,{top:t+"px"});},e=>`当前：${e}px，默认：90px`)]},{text:"屏蔽",type:"forms",forms:[s("【屏蔽】创作中心","csdn-blog-rightToolbarCreativeCenter",false),s("【屏蔽】显示/隐藏侧栏","csdn-blog-rightToolbarShowOrSidebar",false),s("【屏蔽】新手引导","csdn-blog-rightToolbarBeginnerGuidance",false),s("【屏蔽】客服","csdn-blog-rightToolbarCustomerService",false),s("【屏蔽】举报","csdn-blog-rightToolbarReport",false),s("【屏蔽】返回顶部","csdn-blog-rightToolbarBackToTop",false)]}]},{text:"内容",type:"deepMenu",forms:[{text:"功能",type:"forms",forms:[s("点击代码块自动展开","csdn-blog-clickPreCodeAutomatically",true,void 0,"当鼠标点击代码块区域时，将自动展开内容"),s("自动展开代码块","csdn-blog-autoExpandCodeContent",true,void 0,"懒人操作，免手动点击展开"),s("自动展开内容","csdn-blog-autoExpandContent",true,void 0,"懒人操作，免手动点击展开"),s("全文居中","csdn-blog-articleCenter",true,function(e,t){t&&alert("为了更好的呈现效果，请开启功能：【屏蔽】左侧博客信息、【屏蔽】右侧目录信息");},"自动屏蔽左侧和右侧的信息，且将文章居中"),s("允许选择内容","csdn-blog-allowSelectContent",true,void 0)]},{text:"屏蔽",type:"forms",forms:[s("【屏蔽】底部xx技能树","csdn-blog-shieldBottomSkillTree",false),s("【屏蔽】选中文字悬浮栏","csdn-blog-shieldArticleSearchTip",false,void 0,"选中文字弹出的，例如：搜索、评论、笔记")]}]},{text:"评论区",type:"deepMenu",forms:[{text:"",type:"forms",forms:[s("启用","csdn-blog-blockComment",true,void 0,"关闭是屏蔽评论区"),s("优化评论区的位置","csdn-blog-restoreComments",true)]}]},{text:"底部文章",type:"deepMenu",forms:[{text:"",type:"forms",forms:[s("启用","csdn-blog-bottomRecommendArticleEnable",true,void 0,"关闭是屏蔽底部文章"),s("标识CSDN下载","csdn-blog-identityCSDNDownload",true,void 0,"使用红框标识"),s("移除资源下载的文章","csdn-blog-removeResourceDownloadArticle",false,void 0,"download.csdn.net<br>www.iteye.com<br>edu.csdn.net")]}]}]}]}]},{text:"",type:"forms",forms:[{text:"全局布局屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[s("【屏蔽】顶部工具栏","csdn-blog-shieldTopToolbar",false)]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[s("拦截-复制的小尾巴","csdn-blog-removeClipboardHijacking",true),s("劫持-禁止复制","csdn-blog-unBlockCopy",true,void 0,"允许点击复制按钮进行复制")]}]}]}]},at={id:"panel-link",title:"链接",isDefault(){return T.isLink()},forms:[{text:"功能",type:"forms",forms:[s("重定向链接","csdn-link-jumpRedirect",true,void 0,"自动跳转至被拦截的Url链接")]}]},st={id:"panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return T.isHuaWeiCloudBlog()},forms:[{text:"功能",type:"forms",forms:[s("自动展开全文","csdn-hua-wei-cloud-autoExpandContent",true)]},{text:"屏蔽",type:"forms",forms:[s("【屏蔽】云开发者任务挑战活动","csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",true),s("【屏蔽】左侧悬浮按钮","csdn-hua-wei-cloud-shieldLeftFloatingButton",false,function(e,t){t&&alert("开启后将屏蔽【当前阅读量】、【点赞按钮】、【评论按钮】、【分享按钮】");}),s("【屏蔽】右侧栏","csdn-hua-wei-cloud-blockRightColumn",false,function(e,t){t&&alert("开启后将屏蔽【相关产品】-【活动日历】-【运营活动】-【热门标签】");}),s("【屏蔽】底部推荐内容","csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",false),s("【屏蔽】底部更多推荐","csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",false)]}]},ct={id:"panel-wenku",title:"资源",isDefault(){return T.isLink()},forms:[{text:"屏蔽",type:"forms",forms:[s("【屏蔽】资源推荐","csdn-wenku-shieldResourceRecommend",false),s("【屏蔽】右侧用户信息","csdn-wenku-shieldRightUserInfo",false),s("【屏蔽】右侧悬浮工具栏","csdn-wenku-shieldRightToolBar",false)]}]},dt={id:"panel-so",title:"搜索",isDefault(){return T.isSo()},forms:[{text:"C知道-功能",type:"forms",forms:[s("去除水印","csdn-so-cknow-removeMaskCover",true)]}]},ut={id:"component-common",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[le("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,n)=>{r.info("设置当前Qmsg弹出位置"+n);},"Toast显示在页面九宫格的位置"),le("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),s("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},pt={id:"m-panel-blog",title:"博客",isDefault(){return T.isBlog()},forms:[{type:"forms",text:"",forms:[{type:"deepMenu",text:"文章",forms:[{text:"",type:"forms",forms:[{type:"deepMenu",text:"顶部工具栏",forms:[{type:"forms",text:"",forms:[s("启用","m-csdn-blog-shieldTopToolbar",false,void 0,"关闭是屏蔽顶部工具栏")]}]},{text:"内容",type:"deepMenu",forms:[{text:"",type:"forms",forms:[s("允许选中文字","m-csdn-blog-allowSelectText",true,void 0,"设置user-select: text;"),s("自动展开","m-csdn-blog-autoExpandContent",true,void 0,"包括内容、代码块"),s("不限制代码块的最大高度","m-csdn-blog-notLimitCodePreMaxHeight",false,void 0,"让代码块的高度直接被撑开")]}]},{text:"评论",type:"deepMenu",forms:[{text:"",type:"forms",forms:[s("启用","m-csdn-blog-comment-enable",true,void 0,"关闭是屏蔽评论区"),s("不限制评论区的最大高度","m-csdn-blog-notLimitCommentMaxHeight",true,void 0,"让评论区高度直接被撑开")]}]},{text:"底部文章",type:"deepMenu",forms:[{text:"",type:"forms",forms:[s("启用","m-csdn-blog-bottomArticleEnable",true,void 0,"关闭是屏蔽底部文章"),s("移除资源下载","m-csdn-blog-removeResourceArticle",false,void 0,"download.csdn.net<br>www.iteye.com<br>edu.csdn.net"),s("重构","m-csdn-blog-refactoringRecommendation",true,void 0,"文章的样式统一"),s("新标签页打开","m-csdn-blog-openNewTab",true,void 0,"新标签页打开文章")]}]},{type:"deepMenu",text:"底部工具栏",forms:[{type:"forms",text:"",forms:[s("启用","m-csdn-blog-bottom-toolbar-enable",false,void 0,"关闭是屏蔽底部工具栏"),s("常驻底部","m-csdn-blog-bottom-toolbar-always-bottom",false,void 0,"开启后底部工具栏不随下滑滚动而隐藏"),s("优化收藏按钮","m-csdn-blog-bottom-toolbar-optimizationCollectButton",false,void 0,"可以自行选择收藏夹")]}]}]}]}]},{type:"forms",text:"",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[s("【屏蔽】广告","m-csdn-blog-removeAds",true,void 0,"包括：登录弹窗、打开APP、ios版本提示等"),s("允许复制","m-csdn-blog-unBlockCopy",true,void 0,"允许点击复制按钮进行复制")]}]}]}]},mt={id:"m-panel-link",title:"链接",isDefault(){return T.isLink()},forms:[{text:"功能",type:"forms",forms:[s("重定向链接","m-csdn-link-jumpRedirect",true,void 0,"自动跳转至被拦截的Url链接")]}]},ft={id:"m-panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return T.isHuaWeiCloudBlog()},forms:[{text:"功能",type:"forms",forms:[s("自动展开全文","m-csdn-hua-wei-cloud-autoExpandContent",true)]},{text:"屏蔽",type:"forms",forms:[s("【屏蔽】底部加入社区","m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",true)]}]},ht={id:"m-panel-wenku",title:"文库",isDefault(){return T.isWenKu()},forms:[{text:"屏蔽",type:"forms",forms:[s("【屏蔽】底部工具栏","m-csdn-wenku-shieldBottomToolbar",false)]}]},gt={id:"panel-so",title:"搜索",isDefault(){return T.isSo()},forms:[{text:"C知道-功能",type:"forms",forms:[s("去除水印","m-csdn-so-cknow-removeMaskCover",true)]}]},xt={id:"m-panel-download",title:"资源",isDefault(){return T.isDownload()},forms:[{text:"功能",type:"forms",forms:[s("自动展开资源介绍","m-csdn-download-automaticallyExpandResourceIntroduction",true,void 0,"屏蔽资源介绍【展开全部】按钮并展开资源介绍")]},{text:"屏蔽",type:"forms",forms:[s("【屏蔽】广告","m-csdn-download-removeAds",true,void 0,"包括：登录弹窗、会员降价等")]}]};pe.deleteMenuOption(0);pe.addMenuOption([{key:"show_pops_panel_setting",text:"⚙ PC端设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{i.showPanel(G.getConfig(0));}},{key:"m_show_pops_panel_setting",text:"⚙ 移动端端设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{i.showPanel(G.getConfig(1));}},{key:"gotoCSDNCKnow",text:"⚙ 前往C知道",isStoreValue:false,autoReload:false,showText(e){return e},callback(){window.open("https://so.csdn.net/chat","_blank");}}]);G.addContentConfig([it,lt,at,st,ct,dt]);G.addContentConfig([ut,pt,mt,ft,ht,gt,xt]);i.init();let Re=u.isPhone(),ee="change_env_set",U=de(ee);Se.add({key:ee,text:`⚙ 自动: ${Re?"移动端":"PC端"}`,autoReload:false,isStoreValue:false,showText(e){return U==null?e:e+` 手动: ${U==1?"移动端":U==2?"PC端":"未知"}`},callback:()=>{let e=[0,1,2],t=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!t)return;let n=parseInt(t);if(isNaN(n)){S.error("输入的不是规范的数字");return}if(!e.includes(n)){S.error("输入的值必须是0或1或2");return}n==0?ce(ee):ue(ee,n);}});U!=null?(r.info(`手动判定为${U===1?"移动端":"PC端"}`),U==1?we.init():U==2?Ce.init():(S.error("意外，手动判定的值不在范围内"),ce(ee))):Re?(r.info("自动判定为移动端"),we.init()):(r.info("自动判定为PC端"),Ce.init());

})(Qmsg, DOMUtils, Utils, pops);