// ==UserScript==
// @name         MT论坛优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.10.14
// @author       WhiteSevs
// @description  MT论坛效果增强，如自动签到、自动展开帖子、用户状态查看、美化导航、动态头像上传、最新发表、评论过滤器等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://bbs.binmt.cc/*
// @exclude      /^http(s|)://bbs.binmt.cc/uc_server.*$/
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.9.3/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.7.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.5.4/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.5.0/dist/index.umd.min.js
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

(function (x, U, q, ie, ce, _e) {
  'use strict';

  const d=new Set;const Ve = async t=>{d.has(t)||(d.add(t),(a=>{function r(n){if(typeof GM_addStyle=="function")return GM_addStyle(n);let e=document.createElement("style");if(e.setAttribute("type","text/css"),e.setAttribute("data-type","gm-css"),globalThis.trustedTypes){const l=globalThis.trustedTypes.createPolicy("safe-innerHTML",{createHTML:i=>i});e.innerHTML=l.createHTML(n);}else e.innerHTML=n;return (document.head||document.documentElement).appendChild(e),e}r(a);})(t));};

  var Ae=typeof GM<"u"?GM:void 0,we=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,Ce=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,re=typeof GM_getValue<"u"?GM_getValue:void 0,ne=typeof GM_info<"u"?GM_info:void 0,Oe=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,G=typeof GM_setValue<"u"?GM_setValue:void 0,Be=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Ue=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,N=typeof unsafeWindow<"u"?unsafeWindow:void 0,Fe=window;const oe={waitRemove(...e){e.forEach(t=>{typeof t=="string"&&U.waitNodeList(t).then(n=>{n.forEach(a=>a.remove());});});},createBlockCSSNode(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),U.createElement("style",{type:"text/css",innerHTML:`${t.join(`,
`)}{display: none !important;}`})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),Q(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){const t=typeof Ce=="function"?Ce(e.keyName):null;return typeof t=="string"&&t?Q(t):oe.loadStyleLink(e.url)},async loadStyleLink(e){let t=document.createElement("link");return t.rel="stylesheet",t.type="text/css",t.href=e,new Promise(n=>{U.ready(()=>{document.head.appendChild(t),n(t);});})},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(n=>{t.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.startsWith("data:")||e.match(/^http(s|):\/\//i)?e:e.startsWith("//")?(e.startsWith("///")||(e=window.location.protocol+e),e):(e.startsWith("/")||(e+="/"),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;try{let t=new URL(e);return t.protocol="https:",t.toString()}catch{return e}},lockScroll(...e){let t=document.createElement("style");t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...e||[]);return n.forEach(a=>{a.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(t),{recovery(){n.forEach(a=>{a.classList.remove("pops-overflow-hidden-important");}),t.remove();}}},async getClipboardText(){function e(a){navigator.clipboard.readText().then(i=>{a(i);}).catch(i=>{f.error("读取剪贴板内容失败👉",i),a("");});}function t(a){navigator.permissions.query({name:"clipboard-read"}).then(i=>{e(a);}).catch(i=>{f.error("申请剪贴板权限失败，尝试直接读取👉",i.message??i.name??i.stack),e(a);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(a=>{if(!n()){a("");return}document.hasFocus()?t(a):window.addEventListener("focus",()=>{t(a);},{once:true});})},escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(e,t,n=5e3){let a,i=n-t,r=t,o=async s=>{let l=await e(s);if(typeof l=="boolean"&&!l||s){h.workerClearTimeout(a);return}if(r+=t,r>i){o(true);return}a=h.workerSetTimeout(()=>{o(false);},t);};o(false);},findParentNode(e,t,n){if(n){let a=U.closest(e,n);if(a)return a.querySelector(t)}else return U.matches(e,t)?e:U.closest(e,t)}},Re={Viewer:{keyName:"ViewerCSS",url:"https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"},Hljs:{keyName:"HljsCSS",url:"https://fastly.jsdelivr.net/npm/highlight.js@latest/styles/github-dark.min.css"}},ee={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},h=q.noConflict(),u=U.noConflict(),I=ie,f=new h.Log(ne,N.console||Fe.console);let ke=ne?.script?.name||void 0;ie.config.Utils.AnyTouch();const $e=false;f.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});x.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(e){const t=e.getSetting().type;if(t==="loading")return  false;const n=e.getSetting().content;return t==="warning"?f.warn(n):t==="error"?f.error(n):f.info(n),true},get position(){return A.getValue(ee.qmsg_config_position.key,ee.qmsg_config_position.defaultValue)},get maxNums(){return A.getValue(ee.qmsg_config_maxnums.key,ee.qmsg_config_maxnums.defaultValue)},get showReverse(){return A.getValue(ee.qmsg_config_showreverse.key,ee.qmsg_config_showreverse.defaultValue)},get zIndex(){let e=q.getMaxZIndex(),t=ie.config.InstanceUtils.getPopsMaxZIndex().zIndex;return q.getMaxValue(e,t)+100}});I.GlobalConfig.setGlobalConfig({zIndex:()=>{let e=q.getMaxZIndex(void 0,void 0,n=>{if(n?.classList?.contains("qmsg-shadow-container")||n?.closest("qmsg")&&n.getRootNode()instanceof ShadowRoot)return  false}),t=ie.config.InstanceUtils.getPopsMaxZIndex().zIndex;return q.getMaxValue(e,t)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const se=new h.GM_Menu({GM_getValue:re,GM_setValue:G,GM_registerMenuCommand:Oe,GM_unregisterMenuCommand:Be}),F=new h.Httpx({xmlHttpRequest:Ue,logDetails:$e});F.interceptors.request.use(e=>e);F.interceptors.response.use(void 0,e=>(f.error("拦截器-请求错误",e),e.type==="onabort"?x.warning("请求取消",{consoleLogContent:true}):e.type==="onerror"?x.error("请求异常",{consoleLogContent:true}):e.type==="ontimeout"?x.error("请求超时",{consoleLogContent:true}):x.error("其它错误",{consoleLogContent:true}),e));N.Object.defineProperty,N.Function.prototype.apply,N.Function.prototype.call,N.Element.prototype.appendChild,N.setTimeout;const Q=u.addStyle.bind(u),P=U.selector.bind(U),B=U.selectorAll.bind(U);new h.GM_Cookie;const Me="GM_Panel",xe="data-init",Z="data-key",Y="data-default-value",Ne="data-init-more-value",L="data-storage-api",W={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},K={setting:{get width(){return W.width<550?"88vw":W.width<700?"550px":"700px"},get height(){return W.height<450?"70vh":W.height<550?"450px":"550px"}},settingMiddle:{get width(){return W.width<350?"88vw":"350px"}},settingBig:{get width(){return W.width<800?"92vw":"800px"},get height(){return W.height<600?"80vh":"600px"}}};class Pe{storageKey;listenerData;constructor(t){if(typeof t=="string"){const n=t.trim();if(n=="")throw new Error("key参数不能为空字符串");this.storageKey=n;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new q.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.triggerValueChangeListener=this.triggerValueChangeListener.bind(this);}getLocalValue(){let t=re(this.storageKey);return t==null&&(t={},this.setLocalValue(t)),t}setLocalValue(t){G(this.storageKey,t);}set(t,n){const a=this.get(t),i=this.getLocalValue();Reflect.set(i,t,n),this.setLocalValue(i),this.triggerValueChangeListener(t,a,n);}get(t,n){const a=this.getLocalValue();return Reflect.get(a,t)??n}getAll(){return this.getLocalValue()}delete(t){const n=this.get(t),a=this.getLocalValue();Reflect.deleteProperty(a,t),this.setLocalValue(a),this.triggerValueChangeListener(t,n,void 0);}has(t){const n=this.getLocalValue();return Reflect.has(n,t)}keys(){const t=this.getLocalValue();return Reflect.ownKeys(t)}values(){const t=this.getLocalValue();return Reflect.ownKeys(t).map(n=>Reflect.get(t,n))}clear(){we(this.storageKey);}addValueChangeListener(t,n){const a=Math.random(),i=this.listenerData.get(t)||[];return i.push({id:a,key:t,callback:n}),this.listenerData.set(t,i),a}removeValueChangeListener(t){let n=false;for(const[a,i]of this.listenerData.entries()){for(let r=0;r<i.length;r++){const o=i[r];(typeof t=="string"&&o.key===t||typeof t=="number"&&o.id===t)&&(i.splice(r,1),r--,n=true);}this.listenerData.set(a,i);}return n}async triggerValueChangeListener(...t){const[n,a,i]=t;if(!this.listenerData.has(n))return;let r=this.listenerData.get(n);for(let o=0;o<r.length;o++){const s=r[o];if(typeof s.callback=="function"){let l=this.get(n),c,d;typeof a<"u"&&t.length>=2?d=a:d=l,typeof i<"u"&&t.length>2?c=i:c=l,await s.callback(n,d,c);}}}}const z=new Pe(Me),de={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new h.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]},getDefaultBottomContentConfig(){return this.$data.__defaultBottomContentConfig.length?this.$data.__defaultBottomContentConfig:[{id:"script-version",title:`版本：${ne?.script?.version||"未知"}`,isBottom:true,forms:[],clickFirstCallback(e,t,n){let a=ne?.script?.supportURL||ne?.script?.namespace;return typeof a=="string"&&h.isNotNull(a)&&window.open(a,"_blank"),false}}]},setDefaultBottomContentConfig(e){this.$data.__defaultBottomContentConfig=e;}},qe={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{A.showPanel(de.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){A.isTopWindow()&&se.add(this.$data.menuOption);},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e);},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(t=>{let n=this.$data.menuOption.findIndex(a=>a.key===t.key);n!==-1&&(this.$data.menuOption[n]=t);});},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1);}},A={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new h.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new h.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new h.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new h.Dictionary),this.__onceExecData},get scriptName(){return ke},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e;},key:Me,attributeKeyName:Z,attributeDefaultValueName:Y},init(){this.initContentDefaultValue(),qe.init();},isTopWindow(){return N.top===N.self},initContentDefaultValue(){const e=a=>{if(!a.attributes||a.type==="button"||a.type==="forms"||a.type==="deepMenu")return;const i=a.attributes;let r=i[xe];if(typeof r=="function"){let c=r();if(typeof c=="boolean"&&!c)return}let o=new Map,s=i[Z];if(s!=null){const c=i[Y];o.set(s,c);}let l=i[Ne];if(typeof l=="object"&&l&&Object.keys(l).forEach(c=>{o.set(c,l[c]);}),!o.size){f.warn(["请先配置键",a]);return}if(a.type==="switch"){let c=typeof a.disabled=="function"?a.disabled():a.disabled;typeof c=="boolean"&&c&&this.$data.contentConfigInitDisabledKeys.push(...o.keys());}for(const[c,d]of o.entries())this.setDefaultValue(c,d);},t=a=>{for(let i=0;i<a.length;i++){let r=a[i];e(r);let o=r.forms;o&&Array.isArray(o)&&t(o);}},n=[...de.getAllContentConfig()];for(let a=0;a<n.length;a++){let i=n[a];if(!i.forms)continue;const r=i.forms;r&&Array.isArray(r)&&t(r);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&f.warn("请检查该key(已存在): "+e),this.$data.contentConfigInitDefaultValue.set(e,t);},getDefaultValue(e){return this.$data.contentConfigInitDefaultValue.get(e)},setValue(e,t){z.set(e,t);},getValue(e,t){let n=z.get(e);return n??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){z.delete(e);},hasKey(e){return z.has(e)},addValueChangeListener(e,t){return z.addValueChangeListener(e,(a,i,r)=>{t(e,r,i);})},removeValueChangeListener(e){z.removeValueChangeListener(e);},triggerMenuValueChange(e,t,n){z.triggerValueChangeListener(e,n,t);},exec(e,t,n,a=true){const i=this;let r;typeof e=="string"||Array.isArray(e)?r=()=>e:r=e;let o=false;const s=r();let l=[];Array.isArray(s)?(o=true,l=s):l.push(s);const c=l.find(C=>!this.$data.contentConfigInitDefaultValue.has(C));if(c){f.warn(`${c} 键不存在`);return}const d=JSON.stringify(l);if(a&&this.$data.onceExecMenuData.has(d))return this.$data.onceExecMenuData.get(d);let p=[];const m=[];let b=[];const w=(C,R)=>{let M=[],T=[],S=[];if(Array.isArray(R))S=S.concat(R);else if(typeof R=="object"&&R!=null){const{$css:E,destory:$}=R;E!=null&&(Array.isArray(E)?S=S.concat(E):S.push(E)),typeof $=="function"&&S.push($);}else S.push(R);for(const E of S)if(E!=null){if(E instanceof Element){M.push(E);continue}if(typeof E=="function"){b.push(E);continue}}C?(p=p.concat(M),b=b.concat(T)):(y(),k());},g=C=>this.getValue(C),y=()=>{for(let C=0;C<p.length;C++)p[C]?.remove(),p.splice(C,1),C--;},k=()=>{for(let C=0;C<b.length;C++){const R=b[C];R(),b.splice(C,1),C--;}},v=()=>{let C=false;return typeof n=="function"?C=n(l):C=l.every(R=>g(R)),C},V=C=>{if(v()){const M=l.map(S=>this.getValue(S)),T=t({value:o?M:M[0],addStoreValue:(...S)=>w(true,S)});w(true,T);}else w(false,[]);};a&&l.forEach(C=>{const R=this.addValueChangeListener(C,(M,T,S)=>V());m.push(R);}),V();const _={reload(){V();},clear(){this.clearStoreStyleElements(),this.destory(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreStyleElements:()=>y(),destory(){return k()},removeValueChangeListener:()=>{m.forEach(C=>{this.removeValueChangeListener(C);});},clearOnceExecMenuData(){a&&i.$data.onceExecMenuData.delete(d);}};return this.$data.onceExecMenuData.set(d,_),_},execMenu(e,t,n=false,a=false){return this.exec(e,i=>t(i),i=>i.every(o=>{let s=!!this.getValue(o);return A.$data.contentConfigInitDisabledKeys.includes(o)&&(s=false,f.warn(`.execMenu${a?"Once":""} ${o} 被禁用`)),n&&(s=!s),s}),a)},execMenuOnce(e,t,n=false,a=false){const i=this.execMenu(e,t,n,true);if(a&&i){const r=()=>{i.reload();};this.removeUrlChangeWithExecMenuOnceListener(e),this.addUrlChangeWithExecMenuOnceListener(e,r);const o=i.clear;i.clear=()=>{o(),this.removeUrlChangeWithExecMenuOnceListener(e);};}return i},deleteExecMenuOnce(e){return e=this.transformKey(e),this.$data.onceExecMenuData.delete(e),this.$data.urlChangeReloadMenuExecOnce.delete(e),z.removeValueChangeListener(e)},onceExec(e,t){if(e=this.transformKey(e),typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(e)||(t(),this.$data.onceExecData.set(e,1));},deleteOnceExec(e){e=this.transformKey(e),this.$data.onceExecData.delete(e);},addUrlChangeWithExecMenuOnceListener(e,t){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.set(e,t);},removeUrlChangeWithExecMenuOnceListener(e){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.delete(e);},triggerUrlChangeWithExecMenuOnceEvent(e){this.$data.urlChangeReloadMenuExecOnce.forEach((t,n)=>{t(e);});},showPanel(e,t=`${ke}-设置`,n=false,a=false){this.$data.$panel=null,this.$data.panelContent=[];let i=e.findIndex(o=>(typeof o.isBottom=="function"?o.isBottom():!!o.isBottom)&&o.id==="script-version")!==-1;!n&&!i&&e.push(...de.getDefaultBottomContentConfig());let r=I.panel({title:{text:t,position:"center",html:false,style:""},content:e,btn:{close:{enable:true,callback:(o,s)=>{o.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(o,s)=>{o(),this.$data.$panel=null;}},width:K.setting.width,height:K.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=r,this.$data.panelContent=e,a||this.registerConfigSearch({$panel:r,content:e});},registerConfigSearch(e){const{$panel:t,content:n}=e;let a=async(d,p)=>{if(d==null)return;let m=await p(d);return m&&typeof m.isFind=="boolean"&&m.isFind?m.data:await a(m.data,p)},i=(d,p)=>{const m=new IntersectionObserver(b=>{b.forEach(w=>{w.isIntersecting&&(p?.(),m.disconnect());});},{root:null,threshold:1});m.observe(d),d.scrollIntoView({behavior:"smooth",block:"center"});},r=d=>{const p="pops-flashing";u.animationend(d,()=>{d.classList.remove(p);}),d.classList.add(p);},o=(d,p)=>{u.preventEvent(d);let m=I.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:K.settingMiddle.width,height:"auto",drag:true,style:`
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
				`});m.$shadowRoot.querySelector(".search-wrapper");let b=m.$shadowRoot.querySelector(".search-config-text"),w=m.$shadowRoot.querySelector(".search-result-wrapper");b.focus();let g=()=>{u.empty(w);},y=v=>{const V=h.queryProperty(v,C=>C?.next?{isFind:false,data:C.next}:{isFind:true,data:C});let _=u.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${V.matchedData?.path}</div>
							<div class="search-result-item-description">${V.matchedData?.description??""}</div>
						`});return u.on(_,"click",C=>{let M=t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[v.index];if(!M){x.error(`左侧项下标${v.index}不存在`);return}M.scrollIntoView({behavior:"smooth",block:"center"}),M.click(),a(v.next,async T=>{if(T?.next){let S=await u.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(E=>{const $=Reflect.get(E,"__formConfig__");return typeof $=="object"&&$!=null&&$.text===T.name}),2500);if(S)S.click();else return x.error("未找到对应的二级菜单"),{isFind:true,data:T};return {isFind:false,data:T.next}}else {let S=await u.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(E=>Reflect.get(E,"__formConfig__")===T.matchedData?.formConfig),2500);if(S){i(S);let E=S.closest(".pops-panel-forms-fold[data-fold-enable]");E&&(E.querySelector(".pops-panel-forms-fold-container").click(),await h.sleep(500)),i(S,()=>{r(S);});}else x.error("未找到对应的菜单项");return {isFind:true,data:T}}});}),_},k=v=>{const V=new RegExp(v,"i"),_=[],C=(M,T)=>{for(let S=0;S<M.length;S++){const E=M[S];let $=E.forms;if($&&Array.isArray($)){const te=h.deepClone(T);if(E.type==="deepMenu"){const le=h.queryProperty(te,X=>X?.next?{isFind:false,data:X.next}:{isFind:true,data:X});le.next={name:E.text};}C($,te);}else {let te=Reflect.get(E,"text"),le=Reflect.get(E,"description");const X=[te,le];let be=X.findIndex(J=>{if(typeof J=="string")return J.match(V)});if(be!==-1){const J=h.deepClone(T),ye=h.queryProperty(J,H=>H?.next?{isFind:false,data:H.next}:{isFind:true,data:H});ye.next={name:te,matchedData:{path:"",formConfig:E,matchedText:X[be],description:le}};const ve=[];h.queryProperty(J,H=>{const fe=H?.name;return typeof fe=="string"&&fe.trim()!==""&&ve.push(fe),H?.next?{isFind:false,data:H.next}:{isFind:true,data:H}});const De=ve.join(oe.escapeHtml(" - "));ye.next.matchedData.path=De,_.push(J);}}}};for(let M=0;M<n.length;M++){const T=n[M];if(!T.forms||T.isBottom&&T.id==="script-version")continue;const S=T.forms;if(S&&Array.isArray(S)){let E=T.title;typeof E=="function"&&(E=E()),C(S,{index:M,name:E});}}let R=document.createDocumentFragment();for(const M of _){let T=y(M);R.appendChild(T);}g(),w.append(R);};u.on(b,"input",h.debounce(v=>{u.preventEvent(v);let V=u.val(b).trim();if(V===""){g();return}k(V);},200));},s=null,l=false,c;u.on(t.$shadowRoot,"dblclick","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",o),u.on(t.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(d,p)=>{clearTimeout(c),c=void 0,l&&s===p?(l=false,s=null,o(d)):(c=setTimeout(()=>{l=false;},200),l=true,s=p);},{capture:true}),t.$shadowRoot.appendChild(u.createElement("style",{type:"text/css",textContent:`
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
				`}));},transformKey(e){if(Array.isArray(e)){const t=e.sort();return JSON.stringify(t)}else return e}},He=()=>{const e="texttolink",t=/((https?:\/\/|www\.)[\x21-\x7e]+[\w\/]|(\w[\w._-]+\.(com|cn|org|net|info|tv|cc))(\/[\x21-\x7e]*[\w\/])?|ed2k:\/\/[\x21-\x7e]+\|\/|thunder:\/\/[\x21-\x7e]+=)/gi,n=function(w){let g=w.originalTarget??w.target,y;if(g!=null&&g.localName==="a"&&g.className.indexOf(e)!==-1&&(y=g.getAttribute("href"),typeof y=="string"&&y.indexOf("http")!==0&&y.indexOf("ed2k://")!==0&&y.indexOf("thunder://")!==0))return g.setAttribute("href","http://"+g)},a=function(w){if(typeof w!="object"||w==null)return;const g=w?.textContent,y=w?.parentNode;if(y!=null&&y?.className?.indexOf?.(e)===-1&&w.nodeName!=="#cdata-section"&&typeof g=="string"){const k=g.replace(t,`<a href="$1" target="_blank" class="${e}">$1</a>`);if(g.length!==k.length){const v=document.createElement("span");u.html(v,k);const V=v.querySelector("a"),_=V.href;return console.log(`识别: ${_}`),y.nodeName.toLowerCase()==="span"?y.replaceChild(V,w):y.replaceChild(v,w)}}},i="a svg canvas applet input button area pre embed frame frameset head iframe img option map meta noscript object script style textarea code".split(" "),r=`//text()[not(ancestor::${i.join(") and not(ancestor::")})]`,o=new RegExp(`^(${i.join("|")})$`,"i"),s=function(w,g){let y,k;if(g+1e4<w.snapshotLength){let v=y=g;for(k=g+1e4;g<=k?y<=k:y>=k;v=g<=k?++y:--y)a(w.snapshotItem(v));setTimeout(function(){return s(w,g+1e4)},15);}else {let v;for(v=y=g,k=w.snapshotLength;g<=k?y<=k:y>=k;v=g<=k?++y:--y)a(w.snapshotItem(v));}},l=function(w){const g=document.evaluate(r,w,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);return s(g,0)},c=function(w){for(const g=document.createTreeWalker(w,NodeFilter.SHOW_TEXT,{acceptNode:function(y){const k=y?.parentNode?.localName;return o.test(k)?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT}});g.nextNode();)a(g.currentNode);};let d=new h.LockFunction(w=>{for(const g of w)if(g.type==="childList"){const y=g.addedNodes;for(let k=0;k<y.length;k++){const v=y[k];c(v);}}});const p=function(){return l(document.body),h.mutationObserver(document.body,{config:{subtree:true,childList:true},callback:g=>{d.run(g);}})},m=function(w){const g=w.getAttribute("href");if(typeof g=="string"&&g.indexOf("http")!==0&&g.indexOf("ed2k://")!==0&&g.indexOf("thunder://")!==0)return w.setAttribute("href","http://"+g)},b=function(){const w=Array.from(document.getElementsByClassName(e));for(const g of w)m(g);};document.addEventListener("mouseover",n),setTimeout(b,1500),setTimeout(p,100);};oe.setGMResourceCSS(Re.Viewer);oe.setGMResourceCSS(Re.Hljs);I.GlobalConfig.setGlobalConfig({mask:{enable:true},drag:true});const pe={formhash:/formhash=([0-9a-zA-Z]+)/,uid:/uid(=|-)(\d+)/,fontSpecial:/<font.*?>|<\/font>|<strike>|<strong>|<i>|<u>|align=".*?"|<br>[\s]*<br>[\s]*<br>/g},O={getAvatar:(e,t="middle")=>`/uc_server/avatar.php?uid=${e}&size=${t}&ts=1`,getCurrentUID(){let e=N.discuz_uid;if(typeof e=="string")return e;let t=P('.sidenv_exit a[href*="uid-"]')||P('#comiis_key a[href*="uid-"]');if(t){let n=t.href.match(/uid=([0-9]+)/);if(n)return n[n.length-1]}},async getFormHash(){let e=Array.from((top||globalThis).document.querySelectorAll("input[name=formhash]"));for(let a=0;a<e.length;a++){let r=e[a].value;if(r)return r}let t=Array.from((top||globalThis).document.querySelectorAll('a[href*="formhash="]'));for(let a=0;a<t.length;a++){let r=t[a].href.match(pe.formhash);if(r){let o=r[r.length-1];if(o)return o}}let n=await F.get("/home.php?mod=spacecp",{fetch:true,allowInterceptConfig:false});if(n.status){let a=n.data.responseText,r=u.toElement(a,true,true).querySelector("input[name=formhash]");if(r){let o=r.value;if(h.isNotNull(o))return o}}else f.error("请求个人主页获取formhash失败",n);},envIsMobile(){return (N.STYLEID||window.STYLEID||typeof STYLEID<"u"&&STYLEID)==="3"},getThreadId:e=>{let t=e.match(/thread-([\d]+)-|&tid=([\d]+)/i);if(t){let n=t.filter(Boolean);return n[n.length-1]}},getForumId(e){let t=e.match(/&fid=([\d]+)/i);if(t)return t[t.length-1]},getPostId(e){let t=e.match(/&pid=([\d]+)/i);if(t)return t[t.length-1]},getRepquote(e){let t=e.match(/&repquote=([\d]+)/i);if(t)return t[t.length-1]}},ue={$key:{sign:"mt-sign-time"},init(){this.sign();},checkSignInfo(){let t=this.getSignInfo().find(n=>n.hostName===window.location.hostname);return t?h.formatTime(Date.now(),"yyyyMMdd")===h.formatTime(t.time,"yyyyMMdd"):false},setSignInfo(){let e={hostName:window.location.hostname,time:Date.now()},t=this.getSignInfo(),n=t.findIndex(a=>a.hostName===e.hostName);n!==-1&&t.splice(n,1),t.push(e),G(this.$key.sign,t);},getSignInfo(){let e=re(this.$key.sign,[]);return Array.isArray(e)?e:(this.clearSignInfo(),[])},getHostNameSignInfo(e=window.location.hostname){return this.getSignInfo().find(n=>n.hostName===e)},clearSignInfo(e){if(typeof e=="string"){let t=this.getSignInfo(),n=t.findIndex(a=>a.hostName===e);n!==-1&&t.splice(n,1),G(this.$key.sign,t);}else we(this.$key.sign);},checkLogin(){return O.envIsMobile()?!!P("a[href*='member.php?mod=logging&action=logout']"):!!P("#comiis_key")},async sign(){let e=await O.getFormHash();if(e==null){if(P("#comiis_picshowbox")){f.info("当前为评论区的看图模式 ");return}f.error("自动签到：获取账号formhash失败"),this.clearSignInfo(window.location.hostname),x.error({content:"自动签到：获取账号formhash失败"});return}if(this.checkSignInfo()){f.info("今日已签到");return}let t=!!A.getValue("mt-auto-sign-useFetch"),n=h.getRandomPCUA(),a=()=>{this.setSignInfo();},i=()=>{this.clearSignInfo(window.location.hostname);},r=s=>{let c=ie.alert({title:{text:"未知签到内容",position:"center"},content:{text:"",html:false},width:"88vw",height:"300px"}).$shadowRoot.querySelector(".pops-alert-content");c.innerText=s;},o=[{checkPluginEnableUrl:"/plugin.php?id=k_misign:sign",async sign(){let s={operation:"qiandao",format:"button",formhash:e,inajax:1,ajaxtarget:"midaben_sign"},l=await F.get(`/k_misign-sign.html?${h.toSearchParamsStr(s)}`,{fetch:t,headers:{"User-Agent":n},allowInterceptConfig:false});if(!l.status){x.error("签到：网络异常，请求失败",{consoleLogContent:true});return}a(),f.info("签到信息：",l);let c=l.data.responseText,d=h.parseCDATA(c),p=u.toElement(`<div>${d}</div>`,true,false),m=u.text(p);if(m.includes("需要先登录")){x.error("签到：请先登录账号",{timeout:3e3,consoleLogContent:true}),i();return}else if(m.includes("请稍后再试")||m.includes("您已经被列入黑名单")||m.includes("绑定手机号后才可以签到")||m.includes("您所在用户组不允许使用")){x.error("签到："+m,{timeout:5e3});return}else if(m.includes("今日已签")||m.includes("今日已经签到")){x.info("签到："+m);return}else if(c.includes("您当前的访问请求当中含有非法字符，已经被系统拒绝")){x.error("签到: 您当前的访问请求当中含有非法字符，已经被系统拒绝",{timeout:6e3});return}else if(t&&"location"in h.toJSON(c)){x.success("签到: 签到成功");return}let b=p.querySelector(".con"),w=p.querySelector(".line");if(b&&w){let g=u.text(b).match(/([0-9]+)金币/),y=u.text(w).match(/([0-9]+)/),k=g[g.length-1],v=y[y.length-1];f.success(`金币${k}，排名${v}`),x.info(`
							<div style="display: flex;${O.envIsMobile()?"":"padding: 20px;"}">
								<div style="align-self: center;margin-right: 20px;">签到</div>
								<div>排名 ${v}<br>金币 ${k}</div>
							</div>`,{timeout:4e3,isHTML:true});return}r(c);}},{checkPluginEnableUrl:"/plugin.php?id=dsu_paulsign:sign",async sign(){let s={id:"dsu_paulsign:sign",operation:"qiandao",infloat:1,inajax:1},l=await F.post(`/plugin.php?${h.toSearchParamsStr(s)}`,{data:{formhash:e,qdxq:"kx",qdmode:3,todaysay:"",fastreply:0},processData:true,fetch:t,headers:{"User-Agent":n,"Content-Type":"application/x-www-form-urlencoded"},allowInterceptConfig:false});if(!l.status){x.error("签到：网络异常，请求失败",{consoleLogContent:true});return}a(),f.info("签到信息：",l);let c=l.data.responseText;if(c.includes("签到成功")){x.success("签到：签到成功");return}if(c.includes("今日已经签到")){x.info("签到：您今日已经签到，请明天再来！");return}r(c);}}];for(let s=0;s<o.length;s++){const l=o[s];let c=await F.get(l.checkPluginEnableUrl,{fetch:t,headers:{"User-Agent":h.getRandomPCUA()},allowInterceptConfig:false});if(!c.status){f.error("签到：检查签到插件是否启用的请求失败",c);continue}if(u.toElement(c.data.responseText,true,true).querySelector("#messagetext")||c.data.responseText.includes("插件不存在或已关闭")){f.error(`插件：${l.checkPluginEnableUrl} 未启用或不存在`);continue}await l.sign();break}}},ae={isKMiSign(){return window.location.pathname.startsWith("/k_misign-sign.html")},isPost(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/thread-")||window.location.pathname.startsWith("/forum.php")&&e.has("mod","viewthread")},isPage(){return !!window.location.pathname.match(/^\/page-([0-9]+).html/g)},isGuide(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/forum.php")&&e.has("mod","guide")},isPlate(){return !!window.location.pathname.match(/\/forum-[0-9]{1,2}-[0-9]{1,2}.html/g)},isSearch(){return window.location.pathname.startsWith("/search.php")},isSpace(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/home.php")&&e.has("mod","space")},isMySpace(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/home.php")&&e.has("mod","space")&&e.has("do","profile")&&e.has("mycenter")},isSpaceWithAt(){return window.location.pathname.startsWith("/space-uid-")},isForumList(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/forum.php")&&e.has("forumlist")},isMessage(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/home.php")&&e.has("mod","space")&&e.has("do","notice")},isMessageList(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/home.php")&&e.has("mod","space")&&e.has("do","pm")},isPointsMall(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/keke_integralmall-keke_integralmall.html")||window.location.pathname.startsWith("/plugin.php")&&e.has("id","keke_integralmal")},isPostPublish(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/forum.php")&&e.has("mod","post")},isPostPublish_voting(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/forum.php")&&e.has("special","1")||e.has("fid","42")},isPostPublish_edit(){const e=new URLSearchParams(window.location.search);return this.isPostPublish()&&e.has("action","edit")},isPostPublish_newthread(){const e=new URLSearchParams(window.location.search);return this.isPostPublish()&&e.has("action","newthread")},isPostPublish_reply(){const e=new URLSearchParams(window.location.search);return this.isPostPublish()&&e.has("action","reply")}},ze={init(){u.ready(()=>{A.execMenuOnce("mt-forum-post-quickCollentBtn",()=>{this.quickCollentBtn();}),A.execMenuOnce("mt-forum-post-quickReplyOptimization",()=>{this.quickReplyOptimization();});});},quickCollentBtn(){f.info("【快捷收藏】"),u.waitNode("#scrolltop",1e4).then(async e=>{if(!e)return;let t=await O.getFormHash(),n=O.getThreadId(window.location.href),a=`/home.php?${h.toSearchParamsStr({mod:"spacecp",ac:"favorite",type:"thread",id:n,formhash:t,infloat:"yes",handlekey:"k_favorite",inajax:1,ajaxtarget:"fwin_content_k_favorite"})}`,i=u.createElement("span",{innerHTML:`
        <a href="${a}" 
          id="k_favorite"
          onclick="showWindow(this.id, this.href, 'get', 0);"
          onmouseover="this.title = $('favoritenumber').innerHTML + ' 人收藏'">
          <img src="https://s1.ax1x.com/2020/04/29/JTk3lD.gif"
              height="26" 
              width="26" 
              style="position:absolute;top:10px;left:11px">
        </a>
        `});u.prepend(e,i);});},quickReplyOptimization(){u.waitNode('#scrolltop a[title="快速回复"]',1e4).then(e=>{e&&(f.info("快捷回复优化"),u.on(e,"click",function(){N.showWindow("reply",e.href),f.info("等待弹窗出现"),u.waitNode("#moreconf",1e4).then(t=>{if(!t)return;f.success("弹出出现，添加按钮");let n=u.createElement("button",{innerText:"一键空格",type:"button",id:"insertspace2"},{style:"float: left;"});u.on(n,"click",a=>{u.preventEvent(a),u.val(P("#postmessage"),u.val(P("#postmessage"))+"           ");}),u.append(t,n);});}));});}},Qe=".pls .avatar img,.avtm img{border-radius:10%}.pls .avatar img{--avatar-size: 90px;width:var(--avatar-size);height:var(--avatar-size)}";Ve(Qe);const Te={$flag:{isSetHljsCSS:false},init(){ze.init(),A.execMenuOnce("mt-forum-post-autoExpandContent",()=>this.autoExpandContent()),A.execMenuOnce("mt-forum-post-repairImageWidth",()=>this.repairImageWidth()),A.execMenuOnce("mt-forum-post-hideBottomInfoBlock",()=>this.hideBottomInfoBlock()),u.ready(()=>{A.execMenu("mt-forum-post-removeFontStyle",()=>{this.removeFontStyle();}),A.execMenu("mt-forum-post-removeCommentFontStyle",()=>{this.removeCommentFontStyle();}),A.execMenuOnce("mt-forum-post-loadNextPageComment",()=>this.loadNextPageComment()),A.execMenuOnce("mt-forum-post-codeQuoteOptimization",()=>this.codeQuoteOptimization()),A.execMenuOnce("mt-forum-post-optimizationImagePreview",()=>this.optimizationImagePreview()),A.execMenuOnce("mt-forum-post-interceptionAttachment",()=>this.setAttachmentsClickTip()),A.execMenu("mt-forum-post-detectingUserOnlineStatus",()=>{this.detectingUserOnlineStatus();}),A.execMenu("mt-forum-post-showUserLevel",()=>{this.showUserLevel();});});},autoExpandContent(){return f.info("自动展开帖子内容"),[Q(`
				div.comiis_message.bg_f.view_one.b_b.cl.message>div.comiis_messages.comiis_aimg_show.cl{
					max-height:inherit!important;
					overflow-y:inherit!important;
					position:inherit!important
				}
        	`),oe.addBlockCSS(".comiis_lookfulltext_bg",".comiis_lookfulltext_key")]},repairImageWidth(){return f.info("修复图片宽度"),Q(`
        .comiis_messages img{
            max-width: 100% !important;
        }`)},removeFontStyle(){let e=P(".comiis_a.comiis_message_table");e&&(f.info("移除帖子字体效果"),u.html(e,u.html(e).replace(pe.fontSpecial,"")));},removeCommentFontStyle(){f.info("移除评论区的字体效果");let e=B("font"),t=u.html(P(".comiis_postlist .comiis_postli"))||"";t!==""&&(e.forEach(n=>{t.includes(n.innerHTML)||(n.removeAttribute("color"),n.removeAttribute("style"),n.removeAttribute("size"));}),B(".comiis_message.message").forEach(n=>{if(t.includes(n.innerHTML)){u.html(n,u.html(n).replace(pe.fontSpecial,""));let a=u.next(n);a&&a.localName==="strike"&&(a.outerHTML=a.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));}})),B(".comiis_postli.comiis_list_readimgs.nfqsqi").forEach(n=>{let a=n.parentElement;a&&a.localName==="strike"&&(a.outerHTML=a.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));});},loadNextPageComment(){if(f.info("自动加载下一页评论"),document.title.includes("提示信息 - MT论坛"))return;if(B(".pgbtn").length==0){f.warn("没有找到下一页按钮");return}const e=async function(i){let r=await F.get(i,{fetch:true,allowInterceptConfig:false});if(!r.status){x.error("网络异常，请求下一页失败");return}const o=h.parseFromString(r.data.responseText),s=o.querySelector(".pgbtn a");return o.querySelector("#postlistreply")?.remove(),o.querySelector(".bm_h.comiis_snvbt")?.remove(),{url:s?s.getAttribute("href"):null,postlist:o.querySelector("#postlist"),pgbtn:o.querySelector(".pgbtn"),pgs:o.querySelector(".pgs.mtm")}},t=async function(){const i=P(".pgbtn a").getAttribute("href");if(i){let r=await e(i);r&&(r.postlist?.querySelector(".comiis_vrx")?.querySelector(".km1")&&(Object.keys(r).forEach(o=>{r[o]=null;}),f.warn("检测到请求的本页内容中存在【楼主】标识，判断为重复页请求")),(!r.url||r.url==i)&&(f.error("最后一页，取消监听"),u.off(document,["scroll","wheel"],n.run),u.remove(".pgbtn")),r.postlist&&u.append("#postlist",u.html(r.postlist)),r.pgbtn&&u.html(".pgbtn",u.html(r.pgbtn)),r.pgs&&u.html(".pgs.mtm",u.html(r.pgs)),Te.init());}else f.error("获取下一页元素失败");};let n=new h.LockFunction(async()=>{h.isNearBottom()&&await t();});const a=u.on(document,["scroll","wheel"],n.run);return [()=>{a.off();}]},codeQuoteOptimization(){f.info("代码块优化");function e(a){const i=["add","and","cmp","cmpg","cmpl","const","div","double","float","goto","if","int","long","move","mul","neg","new","nop","not","or","rem","return","shl","shr","sput","sub","throw","ushr","xor"],r=["aget","aput","array","check","execute","fill","filled","goto/16","goto/32","iget","instance","invoke","iput","monitor","packed","sget","sparse"],o=["transient","constructor","abstract","final","synthetic","public","private","protected","static","bridge","system","interface","enum","annotation","volatile","native","strictfp","synchronized"],s=["void","boolean","byte","short","char","int","long","float","double","boolean\\[","byte\\[","short\\[","char\\[","int\\[","long\\[","float\\[","double\\["];return {aliases:["smali"],keywords:{keyword:o.join(" "),built_in:i.concat(r).join(" "),type:s.join(" ")},contains:[{className:"string",begin:'"',end:'"',relevance:0,contains:[a.BACKSLASH_ESCAPE,{className:"char.escape",begin:/\\[nrtbf]/,relevance:0}]},{className:"string",begin:"'",end:"'",relevance:0},a.COMMENT("#","$",{relevance:0}),{className:"keyword",variants:[{begin:"\\s*\\.end\\s[a-zA-Z0-9]*"},{begin:"^[ ]*\\.[a-zA-Z]*",relevance:0},{begin:"\\s:[a-zA-Z_0-9]*",relevance:0},{begin:"\\s("+o.join("|")+")"}]},{className:"built_in",variants:[{begin:"\\s("+i.join("|")+")\\s"},{begin:"\\s("+i.join("|")+")((\\-|/)[a-zA-Z0-9]+)+\\s",relevance:10},{begin:"\\s("+r.join("|")+")((\\-|/)[a-zA-Z0-9]+)*\\s",relevance:10}]},{className:"class",begin:`L[^(;:
]*;`,relevance:0},{className:"function",begin:"\\s*[a-zA-Z_<][a-zA-Z0-9_<>]*\\s*\\(",end:"\\s*\\)",excludeBegin:true,excludeEnd:true,relevance:0,contains:[{className:"params",begin:"\\S",endsWithParent:true,relevance:0}]},{className:"variable",begin:"[vp][0-9]+",relevance:0},{className:"number",variants:[{begin:"\\b-?0[xX][0-9a-fA-F]+[lL]?"},{begin:"\\b-?0[0-7]+[lL]?"},{begin:"\\b-?[0-9]+[lLfF]?"}],relevance:0},{className:"property",begin:"\\s*[a-zA-Z_<][a-zA-Z0-9_<>]*\\s*->\\s*[a-zA-Z_<][a-zA-Z0-9_<>]*",relevance:0}]}}ce.registerLanguage("smali",e);let t=new h.LockFunction(()=>{function a(r,o="java"){r.oldValue||(r.oldValue=r.textContent),u.html(r,ce.highlight(r.oldValue,{language:o}).value.replace(/\\n$/gi,""));}B("em[onclick^=copycode]").forEach(r=>{if(r.nextElementSibling&&typeof r.nextElementSibling.className=="string"&&r.nextElementSibling.className=="code-select-language")return;const o=u.text(r.parentElement.querySelector("div[id^=code]"));let s=ce.highlightAuto(o).language;o.trim().startsWith("invoke-")&&(s="smali"),s&&!["bash","css","javascript","json","java","kotlin","python","smali","typescript"].includes(s)&&(s="plaintext");const l=u.createElement("select",{className:"code-select-language"});let c=ce.listLanguages().sort();c=c.concat("自动检测");let d="";c.forEach(p=>{p.startsWith("自动检测")?d+=`<option data-value="${s}" selected="selected">${p}(${s})</option>`:d+=`<option data-value="${p}">${p}</option>`;}),u.html(l,d),u.on(l,"change",()=>{let p=l.selectedOptions[0].getAttribute("data-value");f.info("切换代码块语言: ",p),u.parent(l).querySelectorAll("li").forEach(m=>{a(m,p);});}),u.preventEvent(l,"click"),u.preventEvent(r,"click"),r.insertAdjacentElement("afterend",l),u.trigger(l,"change");}),B(".blockcode").forEach(r=>r.className="hljs");},this,500);const n=h.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{t.run();}});return [Q(`
			.hljs{text-align:left}
			.hljs ol{margin:0 0 0 10px;padding:10px 10px}
			.hljs li{padding-left:10px;list-style-type:decimal-leading-zero;font-family:Monaco,Consolas,'Lucida Console','Courier New',serif;font-size:12px;line-height:1.8em}
			.hljs li:hover{background:#2c313c}
			.hljs li::marker{unicode-bidi:isolate;font-variant-numeric:tabular-nums;text-transform:none;text-indent:0!important;text-align:start!important;text-align-last:start!important}
			.hljs em[onclick^=copycode]{color:#fff;background:#246fff;margin:5px 10px;border-radius:3px;padding:0 5px;cursor:pointer;height:32px;line-height:32px;display:inline-flex}
			.hljs .code-select-language{height:32px;line-height:32px;font-size:14px;border:1px solid #5c5c5c;border-radius:5px;text-align:center;outline:0}
		`),()=>{n.disconnect();}]},optimizationImagePreview(){f.info("图片查看优化");const e=[{hostName:"avatar-bbs.mt2.cn",pathName:"*"},{hostName:"cdn-bbs.mt2.cn",pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"/uc_server/avatar.php"}];function t(r=[],o=0){let s="";r.forEach(d=>{s+=`<li><img data-src="${d}"></li>`;});let l=u.createElement("ul",{innerHTML:s}),c=new _e(l,{inline:false,url:"data-src",zIndex:h.getMaxZIndex()+100,hidden:()=>{c.destroy();}});c.view(o),c.zoomTo(1),c.show();}function n(){B("#postlist .comiis_vrx:not([data-isHandlingViewIMG])").forEach(r=>{r.setAttribute("data-isHandlingViewIMG","true");let o=[];r.querySelectorAll("img").forEach(s=>{let l=s.getAttribute("file")||s.src;if(h.isNull(l))return;let c=new URL(l).hostname,d=new URL(l).pathname,p=s.parentElement;p.nodeName.toLowerCase()==="a"&&p.getAttribute("href")===l&&(p.setAttribute("href","javascript:;"),p.removeAttribute("target"));let m=false;for(let b of e)if(c.indexOf(b.hostName)!=-1&&d.match(b.pathName)){m=true;break}m||(o.push(l),s.removeAttribute("onclick"),s.setAttribute("onclick",""),u.on(s,"click",function(b){u.preventEvent(b),f.info("点击图片",s);let w=o.findIndex(g=>g==l);t(o,w);},{capture:true}));});});}let a=new h.LockFunction(()=>{n();});const i=h.mutationObserver(document,{config:{subtree:true,childList:true},immediate:true,callback:()=>{a.run();}});return [()=>{i.disconnect();}]},setAttachmentsClickTip(){f.info("附件点击提醒");function e(n){if(n.hasAttribute("href")){let a=n.hasAttribute("id")?n.id:n.parentElement.id,i=n.getAttribute("href"),r=n.innerText;if(P(`#${a}_menu`).innerText.indexOf("金币")===-1)return;console.log("发现附件",n),console.log("该附件是金币附件，拦截！"),n.setAttribute("data-href",i),n.style.setProperty("cursor","pointer"),n.removeAttribute("href"),n.innerText="【已拦截】"+r,n.onclick=function(){I.confirm({title:{text:"提示",position:"center"},content:{text:`<br />确定花费2金币下载附件 <a style="color: #507daf !important;">${r}</a> ？<br /><br />`,html:true},btn:{ok:{callback:s=>{window.open(i,"_blank"),s.close();}}},width:"400px",height:"200px"});};}}const t=h.mutationObserver(document.documentElement,{callback:()=>{B(".attnm a").forEach(n=>{e(n);}),B(".comiis_attach a").forEach(n=>{e(n);}),B("span[id*=attach_] a").forEach(n=>{e(n);});},immediate:true,config:{childList:true,subtree:true}});return [()=>{t.disconnect();}]},async detectingUserOnlineStatus(){f.info("探测用户在线状态"),A.onceExec("mt-forum-post-detectingUserOnlineStatus",()=>{Q(`
				.gm-user-status-icon{
					border: 0 !important;
					float: right !important;
					display: block !important;
					width: 40px !important;
					height: 40px !important;
				}
			`);});function e(a){return u.createElement("img",{className:"gm-user-status-icon",smilied:a?"1353":"1384",loading:"lazy",src:a?"data:image/png;base64,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":"data:image/png;base64,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"})}function t(a,i){let r=e(i);u.prepend(a,r);}let n=Array.from(B(".pls.favatar:not([data-is-detectingUserOnlineStatus])"));for(let a=0;a<n.length;a++){const i=n[a];let r=i.querySelector(".comiis_o.cl a.kmfxx");if(!r){f.error("探测用户在线状态失败，未找到发消息按钮");return}i.setAttribute("data-is-detectingUserOnlineStatus","true");let o=r.href,s=await F.get(o,{fetch:true,allowInterceptConfig:false});if(!s.status){f.error("探测用户在线状态，中止网络请求探测"),t(i,true);return}let c=u.toElement(s.data.responseText,true,true).querySelector(".flb");if(c){let p=(u.text(c)?.trim()).endsWith("……[离线]");t(i,p);}else t(i,true);}},showUserLevel(){f.info("显示用户等级"),B(".pls.favatar:not([data-show-user-level])").forEach(e=>{e.setAttribute("data-show-user-level","true");let t="0级",n=e.querySelector(".tns tr"),a=e.querySelector("p em").innerText,i=document.createElement("td");switch(i.setAttribute("style","border-left: 1px solid #e3e3e3;"),a){case "幼儿园":case "初级工程师":t="1级";break;case "小学生":case "中级工程师":t="2级";break;case "初中生":case "高级工程师":t="3级";break;case "高中生":case "专家":t="4级";break;case "大学生":case "高级专家":t="5级";break;case "硕士生":case "资深专家":t="6级";break;case "博士生":case "实习版主":case "版主":case "审核员":case "研究员":t="7级";break;case "博士后":case "超级版主":case "网站编辑":case "高级研究员":case "荣誉开发者":t="8级";break;case "管理员":case "信息监察员":case "资深研究员":t="9级";break}u.html(i,`<p><a class="dj">${t}</a></p>Lv`),n.appendChild(i);});},hideBottomInfoBlock(){return f.info("隐藏底部信息块"),Q(`
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
		`)}},We={init(){u.ready(()=>{A.execMenuOnce("mt-guide-beautifyPage",()=>{this.beautifyPage();});});},beautifyPage(){f.info("页面美化"),Q(`
		.xst{font-size:15px}
		td.author_img{width:50px;padding:15px 0}
		td.author_img img{width:40px;height:40px;border-radius:50%}
		.list_author{margin-top:2px;color:#999;font-size:12px}
		.bankuai_tu_by a{color:#999!important}
		.bankuai_tu_by img{height:16px;margin:1px 1px 0 0;vertical-align:top}
		tbody a:hover{text-decoration:none;color:#3498db}
		.byg_th_align em+a{margin-right:5px}
	`),B(".bm_c table tbody").forEach(e=>{let t=e.querySelector("th.common"),n=u.html(t),a=t.querySelectorAll("a")[0].getAttribute("href"),i=null,o=e.querySelector("td.by>cite>a").getAttribute("href").match(/uid-(\d+)/)[1],s=`
			<td class="author_img">
				<a href="space-uid-${o}.html" c="1" mid="${i}">
					<img src="${O.getAvatar(o,"middle")}">
				</a>
			</td>
			<th colspan="3" class="new byg_th">
				<div class="byg_th_align">
					<em>[${e.querySelector("tr>td.by>a").outerHTML}]</em>
					${n}
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
						<a href="${a}">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACOUlEQVRYR+1X0XETMRDdtfRP0gFUgG9O+iZUAKmApAJMBZgKMBUQKohTQcy3dHOmApIOzL/lZTbc3eh0ki/kfMkww37Zlkbv7e7bJxnhiQOfGB/+HQJlWR45594AwAkAvAWAo6B6GwBYAsBKCHGVZRl/743eCjDwbrd7T0SzCGgKYIOIi8lk8qWPyF4C1lrO9OtfAIeEuArnSimuTDSSBIqiOCMiBh8ciPghz/NF7KAogUOC16CIeJ7n+UVIokPAGHOCiNeD044cQESvtdYrf6lDwFq7BoCXIxFYa62zJIFKdJdjgHtnnvqibFXAWss9ejcygW9KqbNGGz6YtZbH5tnIBDZKqeMUAQrBieiT1noemYwfQgj2CXDO8Zw3uqkVb4yZI+LH8EylVFP55kNZllPnXLlvszFmhYiveI8/20VRzIjoM/9ORN+11mzXd2Gt7SQlhMiyLGOxty+j2OZ6dKq74Kfnikul1GkFwhXge4JjI4R4wRacGuloBVJsq0N5dqehJRPRnywQec0P1hKvNZXwF5ME/BKPKMQrpdSddjotGMOCw0RCS275QNXnmxFH8VYIMfWv6I4V+4oeoQ0tF+y0wBsdX9WH4tFywKgG6h+rVrDyD3UpRcGTFfAqMfhuqJ00Vca9T7IhbwN2RCnlrHa8xyJwyy9jIlqGD4+DEOCsAGAupbzZbrfP/UOllOu+F3CMxN4WeMb0CxFnsTfd0BHp08CcAaSUi4dkdx9yvX9M7nPIkD3/CfwGBboJMIftEqkAAAAASUVORK5CYII=" />${e.querySelectorAll("td.num>a")[0].innerText}
						</a>&nbsp;
					</span>
					<span class="y bankuai_tu_by" style="margin-right: 20px">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACVElEQVRYR+1W3W3bQAwmTb83GzSdoDnr7rn2BukETSeoO0HtCdpO0GSCeoPYzzrhnA3sDZJ3yywYSIIk352sOIBRIHwTxCM/kh9/EM4seGb/8Abg/8mAc+4yz/NPAHANAFcAcNnizwYA1gCwIKKVUkq+O6UzA4XjHwBw02mtqXBLRPMuIFEAaZrOEFGcv1gQcZYkyTxkwAvAOXex2+3uEVFSfbIw83o4HE6UUo9tYwcAnHNXeZ7/9dS4/nYrtUbE5zozs/BBuPE+gnZDRAKiwY0GgCMif0LEaZIktz5HWZbdMPMvAHjn++/LRAOAtVZY/DEQxRMRjZVSohOUIoPLGAhjjCoNVACstYL8W5AsiF/bkadpOiYiHo1Gq/q7IhN/Ijh/a62n8v8ZgBhCxPvIg63Wuup7D0+kvp/r2bHWSq2DnGDmiTFmWQJYIqIMmZBUiEUhYHyjtf5QGujKKAAstdYTtNYKe4X1QUHE70mSSImi2SqjEr0sy6bM/DNmV/TPD6CI6jVK0OBJVwmYeWWMGR9LwkZ9CxIuaiTbEtF1HxISkRL9k9tQMihs7tOGzDw3xsyqNqwxNzaIHotReswgkpa+CBDwQWtd7ZiDUZznuUQTmoayTKZa6zuf8WIACfODzotpWi0l3zKSw0NARBcLMzeWESJKO7ePlDrOh7bzgxKU2rKUOjIRa2/fP6/zIIDSwmscJHXC+ZAde5IJY7/0DPuOiGYnnWR1h3Ib7vf7MTOXR2mbI3KkrBFxMRgMFr7r50UZ6Bl1b/XOEvS22PPBG4CzZ+AfrntRcuAjU2wAAAAASUVORK5CYII=" />${e.querySelectorAll("td.num>em")[0].innerText}
					</span>
				</div>
			</th>
			`;u.html(e,s);});}},me={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new q.Dictionary),this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t);},initComponentsStorageApi(e,t,n){let a;this.hasStorageApi(e)?a=this.getStorageApi(e):a=n,this.setComponentsStorageApiProperty(t,a);},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,L,t);}},he=function(e,t,n,a,i,r="",o,s,l,c){let d={text:e,type:"input",isNumber:!!o,isPassword:false,attributes:{},props:{},description:a,afterAddToUListCallBack:l,getValue(){return this.props[L].get(t,n)},callback(p,m,b){this.props[L].set(t,m);},placeholder:r};return Reflect.set(d.attributes,Z,t),Reflect.set(d.attributes,Y,n),me.initComponentsStorageApi("input",d,{get(p,m){return A.getValue(p,m)},set(p,m){A.setValue(p,m);}}),d},D=function(e,t,n,a,i,r,o,s){let l={text:e,type:"switch",description:i,disabled:o,attributes:{},props:{},getValue(){return this.props[L].get(t,n)},callback(c,d){let p=!!d;f.success(`${p?"开启":"关闭"} ${e}`),this.props[L].set(t,p);},afterAddToUListCallBack:r};return Reflect.set(l.attributes,Z,t),Reflect.set(l.attributes,Y,n),me.initComponentsStorageApi("switch",l,{get(c,d){return A.getValue(c,d)},set(c,d){A.setValue(c,d);}}),l},ge=function(e,t,n,a,i,r="",o,s){let l={text:e,type:"textarea",attributes:{},props:{},description:a,placeholder:r,disabled:o,getValue(){let d=this.props[L].get(t,n);return Array.isArray(d)?d.join(`
`):d},callback(c,d){this.props[L].set(t,d);}};return Reflect.set(l.attributes,Z,t),Reflect.set(l.attributes,Y,n),me.initComponentsStorageApi("switch",l,{get(c,d){return A.getValue(c,d)},set(c,d){A.setValue(c,d);}}),l};class Le{option;constructor(t){this.option=t;}async showView(){let t=I.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist"></ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:true},btn:h.assign({ok:{callback:async()=>{await r();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
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
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),n=t.$shadowRoot.querySelector(".rule-form-container");t.$shadowRoot.querySelector("input[type=submit]");let a=t.$shadowRoot.querySelector(".rule-form-ulist"),i=await this.option.getView(await this.option.data());a.appendChild(i);const r=async()=>{(await this.option.onsubmit(n,await this.option.data())).success&&(t.close(),await this.option.dialogCloseCallBack(true));};}}const je={$el:{isFilterElementHTML:[]},$key:{STORAGE_KEY:"mt-post-comment-filter-rule"},init(){if(this.registerMenu(),ae.isPost()){let e=this.getData();if(!e.enable)return;let t=new h.LockFunction(()=>{this.runFilter(e);});h.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{t.run();}});}},registerMenu(){se.add({key:"comment-filter",text:"⚙ 评论过滤器",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showView();}});},runFilter(e){let t=function(a){for(const i of e.userBlackList)if(i==a.userName||i==a.userUID)return f.success("评论过滤器：黑名单用户",a),true;return  false},n=function(a){for(const i of e.userWhiteList)if(i===a.userName||i===a.userUID)return f.success("评论过滤器：白名单用户",a),true;return  false};B(".comiis_vrx").forEach(a=>{if(a.querySelector(".plc .pti .authi .show"))return;let i=a.querySelector(".pls .authi a"),r={userName:i?.innerText||"",userUID:i?.href?.match(pe.uid)?.[2]?.trim()||"",content:a.querySelector(".plc td.t_f")?.innerText?.trim()||"",isAuthor:false};if(!n(r)){if(e.replyFlag&&a.querySelector(".quote")){let o=a.querySelector(".quote");this.$el.isFilterElementHTML.push(o.outerHTML),o.remove();}if(!(r.isAuthor&&!e.avatarFlag)){if(t(r)){this.$el.isFilterElementHTML.push(a.outerHTML),a.remove();return}if(!(typeof e.minLength=="number"&&e.minLength>r.content.length)&&!(typeof e.keywordLength=="number"&&e.keywordLength<r.content.length))for(const o of e.keywords){if(typeof o!="string")continue;let s=new RegExp(o);if(r.content.match(s)){console.log("评论过滤器：",r),this.$el.isFilterElementHTML.push(a.outerHTML),a.remove();return}}}}});},showView(){const e=this;function t(i){return {get(r,o){let s=e.getData(),l=Reflect.get(s,r,o);return (r==="keywords"||r==="userWhiteList"||r==="userBlackList")&&(l=l.join(`
`)),l},set(r,o){(r==="keywords"||r==="userWhiteList"||r==="userBlackList")&&(o=o.split(`
`).filter(s=>s.trim()!="")),Reflect.set(i,r,o),e.setData(i);}}}let n=I.config.PanelHandlerComponents();new Le({title:"评论过滤器",data:()=>this.getData(),getView:i=>{let r=document.createDocumentFragment(),o=D("启用","enable",true);Reflect.set(o.props,L,t(i));let s=n.createSectionContainerItem_switch(o),l=D("处理回复引用","replyFlag",false,void 0,"移除引用");Reflect.set(l.props,L,t(i));let c=n.createSectionContainerItem_switch(l),d=D("处理作者评论","avatarFlag",false);Reflect.set(d.props,L,t(i));let p=n.createSectionContainerItem_switch(d),m=D('处理从"搜索页面"或"我的帖子提醒页面"进入的网站',"viewthreadFlag",false);Reflect.set(m.props,L,t(i));let b=n.createSectionContainerItem_switch(m),w=he("匹配的评论内容长度最小值","minLength",5,"小于此长度的评论就算关键字匹配成功了也不会被排除",void 0,"",true);Reflect.set(w.props,L,t(i));let g=n.createSectionContainerItem_input(w),y=he("匹配的评论内容长度最大值","keywordLength",8,"大于此长度的评论就算关键字匹配成功了也不会被排除",void 0,"",true);Reflect.set(y.props,L,t(i));let k=n.createSectionContainerItem_input(y),v=ge("评论关键字","keywords","","多个评论关键字换行分割");Reflect.set(v.props,L,t(i));let V=n.createSectionContainerItem_textarea(v),_=ge("黑名单用户","userBlackList","","多个用户换行分割");Reflect.set(_.props,L,t(i));let C=n.createSectionContainerItem_textarea(_),R=ge("白名单用户","userWhiteList","","多个用户换行分割");Reflect.set(R.props,L,t(i));let M=n.createSectionContainerItem_textarea(R);return r.append(s,c,p,b,g,k,V,C,M),r},btn:{merge:true,position:"space-between",ok:{enable:false},cancel:{enable:true,text:"关闭"},other:{enable:true,text:`查看已过滤（${this.$el.isFilterElementHTML.length}）`,type:"primary",callback:(i,r)=>{I.alert({title:{text:"评论过滤器-已过滤",position:"center"},content:{text:`
                                ${Array.from(B('link[rel="stylesheet"]')).map(o=>o.outerHTML).join(`
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
            `}).showView();},getTemplateData(){return {enable:true,avatarFlag:false,replyFlag:false,viewthreadFlag:false,minLength:5,keywordLength:8,keywords:[],userBlackList:[],userWhiteList:[]}},getData(){return re(this.$key.STORAGE_KEY,this.getTemplateData())},setData(e){G(this.$key.STORAGE_KEY,e);}};class Ke{option;$data={isFilteredData:[]};constructor(t){this.option=t;}showView(){let t=I.alert({title:{text:this.option.title,position:"center"},content:{text:`
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
            `}),n=t.$shadowRoot.querySelector(".filter-container"),a=document.createDocumentFragment();this.option.filterOption.forEach(i=>{let r=u.createElement("button",{innerText:i.name},{type:"button"}),o=async()=>{this.$data.isFilteredData=[],(await this.option.getAllRuleInfo()).forEach(async l=>{await i.filterCallBack(l.data)?u.show(l.$el,false):(u.hide(l.$el,false),this.$data.isFilteredData.push(l.data));}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),t.close();};u.on(r,"click",async s=>{u.preventEvent(s),!(typeof i.callback=="function"&&!await i.callback(s,o))&&await o();}),a.appendChild(r);}),n.appendChild(a);}getFilteredData(){return this.$data.isFilteredData}}class Ge{option;constructor(t){this.option=t;}async showView(t){let n=I.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:true},btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async o=>{this.showEditView(false,await this.option.getAddData(),n.$shadowRoot);}},close:{enable:true,callback(o){n.close();}},cancel:{enable:this.option?.bottomControls?.filter?.enable||false,type:"default",text:"过滤",callback:async(o,s)=>{if(typeof this.option?.bottomControls?.filter?.callback=="function"){let d=await this.option.bottomControls.filter.callback();if(typeof d=="boolean"&&!d)return}let l=()=>Array.from(n.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),c=s.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");if(u.text(c).includes("取消")){let d=await this.option?.bottomControls?.filter?.cancelFilterCallback?.({$button:c,getAllRuleElement:l});if(typeof d=="boolean"&&!d)return;l().forEach(p=>{u.show(p,false);}),u.text(c,"过滤");}else {let d=new Ke({title:this.option.bottomControls?.filter?.title??"过滤规则",filterOption:this.option.bottomControls?.filter?.option||[],execFilterCallBack:async()=>{u.text(c,"取消过滤"),await this.option.bottomControls?.filter?.execFilterCallBack?.();const p=d.getFilteredData();p.length&&u.text(c,`取消过滤(${p.length})`);},getAllRuleInfo:()=>l().map(p=>({data:this.parseRuleItemElement(p).data,$el:p}))});d.showView();}}},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:o=>{let s=I.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async l=>{if(f.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){x.error("清理失败");return}else x.success("清理成功");await this.updateDeleteAllBtnText(n.$shadowRoot),this.clearContent(n.$shadowRoot),s.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
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
            `}),a=await this.option.data(),i=false,r=0;for(let o=0;o<a.length;o++){let s=a[o],l=await this.appendRuleItemElement(n.$shadowRoot,s),c=true;typeof t=="function"?c=t(s):typeof t=="number"&&!isNaN(t)&&(c=await this.option.bottomControls?.filter?.option[t]?.filterCallBack(s)??c),c||(i=true,u.hide(l,false),r++);}if(i){let o=n.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");u.text(o,`取消过滤${r?`(${r})`:""}`);}}showEditView(t,n,a,i,r,o){let s=async c=>{if(c){if(typeof o=="function"){let d=await this.option.getData(n);o(d);}}else if(t||await this.option.deleteData(n),typeof r=="function"){let d=await this.option.getData(n);r(d);}};new Le({title:t?"编辑":"添加",data:()=>n,dialogCloseCallBack:s,getView:async c=>await this.option.itemControls.edit.getView(c,t),btn:{ok:{enable:true,text:t?"修改":"添加"},cancel:{callback:async(c,d)=>{c.close(),await s(false);}},close:{callback:async(c,d)=>{c.close(),await s(false);}}},onsubmit:async(c,d)=>{let p=await this.option.itemControls.edit.onsubmit(c,t,d);return p.success?t?(x.success("修改成功"),a&&await this.updateRuleItemElement(p.data,i,a)):a&&await this.appendRuleItemElement(a,p.data):t&&f.error("修改失败"),p},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(t){let n=t.querySelector(".rule-view-container"),a=t.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:n,$deleteBtn:a}}parseRuleItemElement(t){let n=t.querySelector(".rule-controls-enable"),a=n.querySelector(".pops-panel-switch"),i=n.querySelector(".pops-panel-switch__input"),r=n.querySelector(".pops-panel-switch__core"),o=t.querySelector(".rule-controls-edit"),s=t.querySelector(".rule-controls-delete");return {$enable:n,$enableSwitch:a,$enableSwitchInput:i,$enableSwitchCore:r,$edit:o,$delete:s,data:Reflect.get(t,"data-rule")}}async createRuleItemElement(t,n){let a=await this.option.getDataItemName(t),i=u.createElement("div",{className:"rule-item",innerHTML:`
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
					${I.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${I.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(i,"data-rule",t);let r="pops-panel-switch-is-checked";const{$enable:o,$enableSwitch:s,$enableSwitchCore:l,$enableSwitchInput:c,$delete:d,$edit:p}=this.parseRuleItemElement(i);return this.option.itemControls.enable.enable?(u.on(l,"click",async m=>{let b=false;s.classList.contains(r)?(s.classList.remove(r),b=false):(s.classList.add(r),b=true),c.checked=b,await this.option.itemControls.enable.callback(t,b);}),await this.option.itemControls.enable.getEnable(t)&&s.classList.add(r)):o.remove(),this.option.itemControls.edit.enable?u.on(p,"click",m=>{u.preventEvent(m),this.showEditView(true,t,n,i,b=>{t=null,t=b;});}):p.remove(),this.option.itemControls.delete.enable?u.on(d,"click",m=>{u.preventEvent(m);let b=I.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async w=>{f.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(t)?(x.success("成功删除该数据"),i.remove(),await this.updateDeleteAllBtnText(n),b.close()):x.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):d.remove(),i}async appendRuleItemElement(t,n){let{$container:a}=this.parseViewElement(t),i=[],r=Array.isArray(n)?n:[n];for(let o=0;o<r.length;o++){let s=r[o],l=await this.createRuleItemElement(s,t);a.appendChild(l),i.push(l);}return await this.updateDeleteAllBtnText(t),i}async updateRuleContaienrElement(t){this.clearContent(t);const{$container:n}=this.parseViewElement(t);let a=await this.option.data();await this.appendRuleItemElement(t,a),await this.updateDeleteAllBtnText(t);}async updateRuleItemElement(t,n,a){let i=await this.createRuleItemElement(t,a);n.after(i),n.remove();}clearContent(t){const{$container:n}=this.parseViewElement(t);u.html(n,"");}setDeleteBtnText(t,n,a=false){const{$deleteBtn:i}=this.parseViewElement(t);a?u.html(i,n):u.text(i,n);}async updateDeleteAllBtnText(t){let n=await this.option.data();this.setDeleteBtnText(t,`清空所有(${n.length})`);}}const Ze={$key:{STORAGE_KEY:"mt-productListingReminder-rule"},init(){this.registerMenu(),this.runRule();},registerMenu(){se.add({key:"product-reminder",text:"⚙ 商品上架提醒",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showView();}});},async runRule(){async function e(){let a=await F.get("/keke_integralmall-keke_integralmall.html",{allowInterceptConfig:false,headers:{"User-Agent":h.getRandomAndroidUA()}});if(!a.status){x.error("【积分商城】获取数据失败");return}let i=[];return u.toElement(a.data.responseText,true,true).querySelectorAll(".task-list-wrapper li.col-xs-12").forEach(o=>{i.push({name:u.text(o.querySelector(".mall-info a > *:first-child"))||u.text(o.querySelector(".mall-info a")),price:u.text(o.querySelector(".mall-info span.discount-price i")),endTime:u.text(o.querySelector(".mall-info #time_hz span.time")),remainingQuantity:parseInt(o.querySelector(".mall-info .mall-count .count-r")?.innerText?.replace(/仅剩|件/gi,"")||"0")});}),i}if(ae.isPointsMall())return;let t=this.getData();if(!t.length)return;let n=await e();if(n){for(const a of n)for(const i of t)if(i.enable&&a.name.match(new RegExp(i.productName,"i"))&&!isNaN(a.remainingQuantity)&&a.remainingQuantity>0){f.success("成功匹配对应商品",i,a),I.confirm({title:{text:"积分商城提醒",position:"center"},content:{text:`<br />
                            您设置的商品已上架在积分商城中，当前售价 ${a.price}金币，仅剩${a.remainingQuantity}件，是否前往购买？
                            <a style="color: red !important;">(如需关闭提醒，请删除该关键字)</a>
                            <br />`,html:true},btn:{merge:true,position:"space-between",other:{enable:true,type:"danger",text:"删除提醒",callback:()=>{this.deleteData(i)?x.success("删除成功"):x.error("删除失败");}},ok:{text:"前往购买",callback:()=>{window.location.href=`${window.location.origin}/keke_integralmall-keke_integralmall.html`;}}},width:"300px",height:"300px"});return}}},getTemplateData(){return {uuid:h.generateUUID(),enable:true,name:"",productName:""}},showView(){let e=I.config.PanelHandlerComponents();function t(a){return {get(i,r){return a[i]??r},set(i,r){a[i]=r;}}}new Ge({title:"商品上架提醒",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:a=>a.name,updateData:a=>this.updateData(a),deleteData:a=>this.deleteData(a),getData:a=>this.getData().find(o=>o.uuid===a.uuid)??a,itemControls:{enable:{enable:true,getEnable(a){return a.enable},callback:(a,i)=>{a.enable=i,this.updateData(a);}},edit:{enable:true,getView:(a,i)=>{let r=document.createDocumentFragment();i||(a=this.getTemplateData());let o=D("启用","enable",true);Reflect.set(o.props,L,t(a));let s=e.createSectionContainerItem_switch(o),l=he("规则名称","name","","",void 0,"必填");Reflect.set(l.props,L,t(a));let c=e.createSectionContainerItem_input(l),d=he("商品名","productName","","",void 0,"可正则，需手动转义");Reflect.set(d.props,L,t(a));let p=e.createSectionContainerItem_input(d);return r.append(s,c,p),r},onsubmit:(a,i,r)=>{let o=a.querySelectorAll(".rule-form-ulist > li"),s=this.getTemplateData();return i&&(s.uuid=r.uuid),o.forEach(l=>{let c=Reflect.get(l,"__formConfig__"),d=Reflect.get(c,"attributes"),p=Reflect.get(l,L),m=Reflect.get(d,Z),b=Reflect.get(d,Y),w=p.get(m,b);Reflect.has(s,m)?Reflect.set(s,m,w):f.error(`${m}不在数据中`);}),s.name.trim()===""?(x.error("规则名称不能为空"),{success:false,data:s}):i?{success:this.updateData(s),data:s}:{success:this.addData(s),data:s}}},delete:{enable:true,deleteCallBack:a=>this.deleteData(a)}}}).showView();},getData(){return re(this.$key.STORAGE_KEY,[])},setData(e){G(this.$key.STORAGE_KEY,e);},addData(e){let t=this.getData();return t.findIndex(a=>a.uuid==e.uuid)===-1?(t.push(e),G(this.$key.STORAGE_KEY,t),true):false},updateData(e){let t=this.getData(),n=t.findIndex(i=>i.uuid==e.uuid),a=false;return n!==-1&&(a=true,t[n]=e),this.setData(t),a},deleteData(e){let t=this.getData(),n=t.findIndex(i=>i.uuid==e.uuid),a=false;return n!==-1&&(a=true,t.splice(n,1)),this.setData(t),a},clearData(){we(this.$key.STORAGE_KEY);}},Ye=`.pops-confirm-content {\r
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
`,Xe={$data:{cid:""},init(){this.registerMenu();},registerMenu(){se.add({key:"black-home",text:"⚙ 小黑屋",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showBlackHome();}});},async showBlackHome(){let e=x.loading("正在获取小黑屋名单中..."),t=await this.getBlackListInfo("");if(e.close(),!t)return;if(t.data.length===0){x.error("获取小黑屋名单为空");return}this.$data.cid=t.next_cid;let n=I.confirm({title:{text:"小黑屋名单",position:"center"},content:{text:`
                <div class="blackhome-user-filter">
                    <input placeholder="过滤用户名/操作人员/UID(可正则)">
                </div>
                <div class="blackhome-user-list"></div>
                `,html:true},btn:{ok:{text:"下一页",callback:async()=>{let s=x.loading("正在获取小黑屋名单中...");f.info("下一页的cid: ",this.$data.cid);let l=await this.getBlackListInfo(this.$data.cid);s.close(),l&&(this.$data.cid=l.next_cid,l.data.forEach(c=>{let d=this.createListViewItem(c);a.appendChild(d);}),l.data.length===0?x.error("获取小黑屋名单为空"):x.success(`成功获取 ${l.data.length}条数据`),u.trigger(i,"input"));}},cancel:{text:"关闭"}},width:K.settingBig.width,height:K.settingBig.height,style:Ye}),a=n.$shadowRoot.querySelector(".blackhome-user-list"),i=n.$shadowRoot.querySelector(".blackhome-user-filter input");t.data.forEach(s=>{let l=this.createListViewItem(s);a.appendChild(l);}),x.success(`成功获取 ${t.data.length}条数据`);let r=false;u.on(i,["input","propertychange"],h.debounce(()=>{let s=i.value.trim();if(!r){if(r=true,s==""){n.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(l=>{l.removeAttribute("style");}),r=false;return}n.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(l=>{l.getAttribute("data-name").match(new RegExp(s,"ig"))||l.getAttribute("data-uid").trim().match(new RegExp(s,"ig"))||l.getAttribute("data-operator").match(new RegExp(s,"ig"))?l.removeAttribute("style"):l.setAttribute("style","display:none;");}),r=false;}}));let o=await this.getBlackListInfo(this.$data.cid);o&&(this.$data.cid=o.next_cid);},async getBlackListInfo(e=""){let t={mod:"misc",action:"showdarkroom",cid:e,ajaxdata:"json"},n=await F.get(`/forum.php?${h.toSearchParamsStr(t)}`,{headers:{"User-Agent":h.getRandomPCUA()},responseType:"json"});if(!n.status)return;let a=h.toJSON(n.data.responseText),i=a.message.split("|"),r=i[i.length-1],o=h.parseObjectToArray(a.data),s=[],l=[];return o.forEach(c=>{let d=c.dateline.match(/([0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]*[0-9]{1,2}:[0-9]{1,2})/g);if(d==null){let p=parseInt((Date.now()/1e3).toString()),m=0,b=c.dateline.match(/([0-9]+|半)[\s\S]*秒前/),w=c.dateline.match(/([0-9]+|半)[\s\S]*分钟前/),g=c.dateline.match(/([0-9]+|半)[\s\S]*小时前/),y=c.dateline.match(/昨天[\s\S]*(\d{2}):(\d{2})/),k=c.dateline.match(/前天[\s\S]*(\d{2}):(\d{2})/),v=c.dateline.match(/([0-9]+|半)[\s\S]*天前/);if(b)b=b[b.length-1],b=b.replace(/半/g,.5),b=parseFloat(b),m=p-b;else if(w)w=w[w.length-1],w=w.replace(/半/g,.5),w=parseFloat(w),m=p-w*60;else if(g)g=g[g.length-1],g=g.replace(/半/g,.5),g=parseFloat(g),m=p-g*60*60;else if(y){let V=y[1],_=y[2];m=p-86400-parseInt(V)*3600-parseInt(_)*60;}else if(k){let V=k[1],_=k[2];m=p-86400*2-parseInt(V)*3600-parseInt(_)*60;}else v&&(v=v[v.length-1],v=v.replace(/半/g,.5),v=parseFloat(v),m=p-v*60*60*24);c.time=parseInt(m.toString())*1e3,s=s.concat(c);return}else d=d[0];c.time=h.formatToTimeStamp(d),s=s.concat(c);}),h.sortListByProperty(s,"time"),h.sortListByProperty(l,"time",false),s=s.concat(l),{next_cid:r,data:s}},createListViewItem(e){let t=u.createElement("div",{className:"blackhome-user-item",innerHTML:`
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
`,et={$data:{},init(){this.registerMenu();},registerMenu(){se.add({key:"online-user",text:"⚙ 在线用户",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showOnlineUser();}});},async showOnlineUser(){let e=x.loading("正在获取在线用户名单中..."),t=await this.getOnlineUserListInfo();if(e.close(),!t)return;let n=I.alert({title:{text:"在线用户",position:"center"},content:{text:`
                <div class="online-user-info">${t.totalOnline} 人在线 - ${t.onlineUser} 会员${t.invisibleUser==0?"":`(${t.invisibleUser}隐身)`} - ${t.noRegisterUser} 位游客</div>
                <div class="online-user-filter">
                    <input placeholder="过滤用户名/身份/UID(可正则)"></div>
                <div class="online-user-list"></div>
                `,html:true},btn:{ok:{text:"关闭",type:"default"}},width:K.settingBig.width,height:K.settingBig.height,style:Je}),a=n.$shadowRoot.querySelector(".online-user-list"),i=n.$shadowRoot.querySelector(".online-user-filter input");t.data.forEach(o=>{let s=this.createListViewItem(o);a.appendChild(s);}),x.success(`成功获取 ${t.data.length}条数据`);let r=false;U.on(i,["propertychange","input"],h.debounce(()=>{let o=i.value.trim();if(!r){if(r=true,o==""){n.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(s=>{s.removeAttribute("style");}),r=false;return}n.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(s=>{s.getAttribute("data-name").match(new RegExp(o,"ig"))||s.getAttribute("data-sf").match(new RegExp(o,"ig"))||s.getAttribute("data-uid").match(new RegExp(o,"ig"))?s.removeAttribute("style"):s.setAttribute("style","display:none;");}),r=false;}}));},async getOnlineUserListInfo(){let e={showoldetails:"yes"},t=await F.get(`/forum.php?${h.toSearchParamsStr(e)}`,{headers:{"User-Agent":h.getRandomPCUA()}});if(!t.status)return;let n=h.parseFromString(t.data.responseText,"text/html"),a={data:[],totalOnline:0,onlineUser:0,noRegisterUser:0,invisibleUser:0};n.querySelectorAll("#onlinelist ul li").forEach(o=>{let s=o.querySelector("a").getAttribute("href").match("uid-(.+?).html")[1],l=O.getAvatar(s,"middle"),c=o.querySelector("a").innerText,d="",p=o.querySelector("a").getAttribute("href"),m=o.querySelector("img").src;m.indexOf("online_member")!=-1?d="会员":m.indexOf("online_moderator")!=-1?d="版主":m.indexOf("online_supermod")!=-1?d="超级版主":m.indexOf("online_admin")!=-1?d="管理员":d="未知身份",a.data.push({uid:s,avatar:l,name:c,sf:d,space:p});});let r=n.querySelector("#online div.bm_h span.xs1").textContent;return a.totalOnline=h.parseInt(r.match(/([0-9]*)\s*人在线/i),0),a.onlineUser=h.parseInt(r.match(/([0-9]*)\s*会员/i),0),a.noRegisterUser=h.parseInt(r.match(/([0-9]*)\s*位游客/i),0),a.invisibleUser=h.parseInt(r.match(/([0-9]*)\s*隐身/i),0),a},createListViewItem(e){let t=U.createElement("div",{className:"online-item",innerHTML:`
                <div class="online-user">
                    <img data-avatar src="${e.avatar}" loading="lazy" class="online-user-avatar">
                    <div class="online-user-info">
                        <p data-name>${e.name}</p>
                        <span data-sf="${e.sf}">${e.sf}</span>
                        <span data-uid>UID: ${e.uid}</span>
                    </div>
                </div>
            `},{"data-name":e.name,"data-uid":e.uid,"data-sf":e.sf});return U.on(t,"click",".online-user-avatar",n=>{U.preventEvent(n),window.open(`home.php?mod=space&uid=${e.uid}&do=profile`,"_blank");}),t}},tt={$flag:{showUserUID_initCSS:false},init(){A.onceExec("mt-MTCommentFilter",()=>{je.init();}),ae.isPost()?(f.info("Router: 帖子"),Te.init()):ae.isGuide()?(f.info("Router: 导读"),We.init()):f.error("Router: 未适配的链接 ==> "+window.location.href),u.ready(()=>{A.onceExec("mt-MTProductListingReminder",()=>{Ze.init();}),A.onceExec("mt-blackHome",()=>{Xe.init();}),A.onceExec("mt-onlineUser",()=>{et.init();}),A.execMenuOnce("mt-addLatestPostBtn",()=>this.addLatestPostBtn()),A.execMenu("mt-auto-sign",()=>{ue.init();}),A.execMenu("mt-extend-cookie-expire",()=>{this.extendCookieExpire();}),ae.isPostPublish_edit()||A.execMenuOnce("mt-link-text-to-hyperlink",()=>He());});},addLatestPostBtn(){f.info("新增【最新发表】");const e=u.createElement("li",{id:"latest_publication",innerHTML:`
				<a href="/forum.php?mod=guide&view=newthread" hidefocus="true" title="最新发表">最新发表</a>
			`}),t=e.querySelector("a");return u.append("#comiis_nv .wp.comiis_nvbox.cl ul",e),window.location.href.includes("/forum.php?mod=guide&view=newthread")&&(u.removeClass("#mn_forum_10","a"),u.css(t,"background",'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAADICAYAAAAk7PuyAAAAAXNSR0IArs4c6QAAAGFJREFUWEft1zESgCAQQ9HsVfb+d5RRlLHRVotHS5f5+YHKyymXiRAihKMISBDCNOInJHT39iTkcpkIYUcTCUKYkkKCEJBwTaY6cML5eiNGYiRGYrz9pqyDdbAOqxC/q8MApobR97qxnMwAAAAASUVORK5CYII=") repeat-x 50% -50px')),[e]},async extendCookieExpire(){f.info("延长cookie有效期");let e=await Ae.cookie.list({}),t=["_auth","_saltkey","_client_created","_client_token"];e.forEach(async n=>{if(n.session)return;let a=n.expirationDate,i=Date.now()/1e3;if(a<i)return;let r=3600*24*30;a-i>r||!t.find(s=>n.name.endsWith(s))||Ae.cookie.set({name:n.name,value:n.value,expirationDate:n.expirationDate+r}).then(()=>{f.info(`延长Cookie +30天成功：${n.name}`);}).catch(()=>{f.error(`延长Cookie +30天失败：${n.name}`);});});}},Se=function(e,t,n,a,i,r,o){let s=[];typeof a=="function"?s=a():s=a;let l={text:e,type:"select",description:r,attributes:{},props:{},getValue(){return this.props[L].get(t,n)},callback(c,d,p){let m=d;if(f.info(`选择：${p}`),typeof i=="function"&&i(c,m,p))return;this.props[L].set(t,m);},data:s};return Reflect.set(l.attributes,Z,t),Reflect.set(l.attributes,Y,n),me.initComponentsStorageApi("select",l,{get(c,d){return A.getValue(c,d)},set(c,d){A.setValue(c,d);}}),l},Ee=function(e,t,n,a,i,r,o,s,l,c){let d={text:e,type:"button",attributes:{},props:{},description:t,buttonIcon:a,buttonIsRightIcon:i,buttonIconIsLoading:r,buttonType:o,buttonText:n,callback(p){typeof s=="function"&&s(p);},afterAddToUListCallBack:l};return Reflect.set(d.attributes,xe,()=>{d.disable=false;}),d},Ie=function(e,t,n,a){let i={type:"own",attributes:{},props:n,getLiElementCallBack:e,afterAddToUListCallBack:a};return Reflect.set(i.attributes,xe,()=>false),i},j={$upload:{small:false,middle:false,big:false},$data:{avatarInfo:{maxSize:2097152,small:{width:48,height:48},middle:{width:120,height:120},big:{width:200,height:250}}},$el:{$smallUpload:null,$middleUpload:null,$bigUpload:null,$smallStatus:null,$middleStatus:null,$bigStatus:null},$avatar:{get small(){return j.$el.$smallUpload.files[0]},get middle(){return j.$el.$middleUpload.files[0]},get big(){return j.$el.$bigUpload.files[0]}},init(){this.showView();},showView(){const e=this;let t=I.confirm({title:{text:"修改头像",position:"center"},content:{text:`
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
                `,html:true},btn:{ok:{text:"上传",callback:async()=>{if(!e.$upload.small){x.error("请上传小头像");return}if(!e.$upload.middle){x.error("请上传中头像");return}if(!e.$upload.big){x.error("请上传大头像");return}let n=x.loading("正在处理数据中...");try{let a=await this.getUploadUrl();if(a==null)return;let i=await O.getFormHash();if(i==null){x.error("获取formhash失败");return}let r={big:{base64:await h.parseFileToBase64(this.$avatar.big)},middle:{base64:await h.parseFileToBase64(this.$avatar.middle)},small:{base64:await h.parseFileToBase64(this.$avatar.small)}};Object.keys(r).forEach(l=>{let c=r[l];c.base64=c.base64.substring(c.base64.indexOf(",")+1);});let o=new FormData;o.append("Filedata",this.$avatar.big||""),o.append("confirm","确定"),o.append("avatar1",r.big.base64),o.append("avatar2",r.middle.base64),o.append("avatar3",r.small.base64),o.append("formhash",i),f.info("头像的base64字符串",r);let s=await F.post(a,{data:o,processData:!1,headers:{Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9","User-Agent":h.getRandomPCUA(),Host:window.location.hostname,Origin:window.location.origin,Referer:`${window.location.origin}/home.php?mod=spacecp&ac=avatar`}});if(!s.status)return;s.data.responseText.indexOf("window.parent.postMessage('success','*')")!=-1?(t.close(),x.success("上传成功")):(f.error("上传失败",s),x.error(s.data.responseText,{timeout:6e3,isHTML:!1}));}catch(a){f.error(a);}finally{n.close();}}}},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
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
            `});this.$el.$smallUpload=t.$shadowRoot.querySelector(".avatar-upload[data-type='small']"),this.$el.$middleUpload=t.$shadowRoot.querySelector(".avatar-upload[data-type='middle']"),this.$el.$bigUpload=t.$shadowRoot.querySelector(".avatar-upload[data-type='big']"),this.$el.$smallStatus=t.$shadowRoot.querySelector(".avatar-upload-status[data-type='small']"),this.$el.$middleStatus=t.$shadowRoot.querySelector(".avatar-upload-status[data-type='middle']"),this.$el.$bigStatus=t.$shadowRoot.querySelector(".avatar-upload-status[data-type='big']"),this.setUploadChangeEvent(this.$el.$smallUpload,this.$el.$smallStatus,this.$data.avatarInfo.small,()=>{this.$upload.small=true;}),this.setUploadChangeEvent(this.$el.$middleUpload,this.$el.$middleStatus,this.$data.avatarInfo.middle,()=>{this.$upload.middle=true;}),this.setUploadChangeEvent(this.$el.$bigUpload,this.$el.$bigStatus,this.$data.avatarInfo.big,()=>{this.$upload.big=true;});},setUploadChangeEvent(e,t,n,a){u.on(e,"change",i=>{if(!e.files?.length)return;u.text(t,"🤡获取文件信息中..."),t.removeAttribute("data-success");let r=e.files[0],o=r.size,s=new Image,l=new FileReader;l.readAsDataURL(r),l.onload=function(c){s.src=c.target.result,s.onload=function(){if(s.width>n.width||s.height>n.height){e.value="",t.setAttribute("data-success","false"),u.text(t,`🤡校验失败 ==> 图片尺寸不符合，宽：${s.width} 高：${s.height}`);return}if(o>j.$data.avatarInfo.maxSize){e.value="",t.setAttribute("data-success","false"),u.text(t,`🤡校验失败 ==> 图片大小不符合：${o}byte，限制最大：${j.$data.avatarInfo.maxSize}byte`);return}t.setAttribute("data-success","true"),u.text(t,`🤣 通过 宽:${s.width} 高:${s.height} 大小(byte):${o}`),a();};};});},async getUploadUrl(){let e=await F.get("/home.php?mod=spacecp&ac=avatar",{headers:{"User-Agent":h.getRandomPCUA()}});if(!e.status)return;if(h.isNull(e.data.responseText)){x.error("动态头像：获取上传地址的内容失败");return}let t=e.data.responseText.match(/var[\s]*data[\s]*=[\s]*"(.+?)"/);if(t==null||t.length!=2){x.error("动态头像：获取变量data失败");return}let a=t[t.length-1].split(","),i=a.indexOf("stl_src");if(i===-1&&(i=a.indexOf("src")),i===-1){x.error("动态头像：获取上传地址失败");return}let r=a[i+1],o=new URL(r);return o.pathname=o.pathname.replace("/images/camera.swf","/index.php"),o.searchParams.delete("inajax"),o.searchParams.set("m","user"),o.searchParams.set("a","rectavatar"),o.searchParams.set("base64","yes"),r=o.toString(),f.info("上传地址："+r),r}},nt={id:"component-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[Se("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,n)=>{f.info("设置当前Qmsg弹出位置"+n);},"Toast显示在页面九宫格的位置"),Se("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),D("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[D("新增【最新发表】","mt-addLatestPostBtn",true,void 0,"便于快捷跳转"),D("文本转超链接","mt-link-text-to-hyperlink",true,void 0,"自动把符合超链接格式的文字转为超链接"),D("延长登录Cookie过期时间","mt-extend-cookie-expire",false,void 0,"减少频繁登录账号的问题")]}]},{type:"deepMenu",text:"自动签到",forms:[{text:"",type:"forms",forms:[D("启用","mt-auto-sign",true,void 0,"自动请求签到"),D("使用fetch请求","mt-auto-sign-useFetch",false,void 0,""),Ee("签到信息",`上次签到时间：${(()=>{let e=ue.getHostNameSignInfo(window.location.hostname);return e?q.formatTime(e.time):"尚未签到"})()}`,"清空信息",void 0,void 0,void 0,"primary",e=>{let n=e.composedPath()[0].closest("li").querySelector(".pops-panel-item-left-desc-text");I.confirm({title:{text:"提示 ",position:"center"},content:{text:"<p>是否清空脚本签到记录的时间?</p>",html:true},btn:{ok:{enable:true,callback:a=>{let i=window.location.hostname;ue.clearSignInfo(i),x.success("删除成功"),u.text(n,`上次签到时间：${(()=>{let r=ue.getHostNameSignInfo(i);return r?q.formatTime(r.time):"尚未签到"})()}`),a.close();}}},width:"300px",height:"200px"});})]}]},{text:"头像",type:"deepMenu",forms:[{text:"<a href='https://ezgif.com/resize' target='_blank'>Resize Image</a>",type:"forms",forms:[Ie(e=>{let t=u.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
											<p class="pops-panel-item-left-main-text">头像（有缓存）</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),n=u.createElement("div",{className:"pops-panel-avatar-img",innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${O.getCurrentUID()}&size=small"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${O.getCurrentUID()}&size=middle"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${O.getCurrentUID()}&size=big"
												class="avatar-img" data-size="big">
											`}),a=u.createElement("style",{innerHTML:`
											.avatar-img {
												width: 30px;
												height: 30px;
												border-radius: 50%;
												overflow: hidden;
											}
										`});return n.querySelector(".avatar-img[data-size='small']"),n.querySelector(".avatar-img[data-size='middle']"),n.querySelector(".avatar-img[data-size='big']"),e.appendChild(t),e.appendChild(n),e.appendChild(a),e}),Ie(e=>{let t=u.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
											<p class="pops-panel-item-left-main-text">头像</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),n=u.createElement("div",{className:"pops-panel-avatar-img",innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${O.getCurrentUID()}&size=small&ts=${Date.now()}"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${O.getCurrentUID()}&size=middle&ts=${Date.now()}"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${O.getCurrentUID()}&size=big&ts=${Date.now()}"
												class="avatar-img" data-size="big">
											`});return e.appendChild(t),e.appendChild(n),e}),Ee("修改头像",`可以上传gif图片，注意图片最大限制为${q.formatByteToSize(j.$data.avatarInfo.maxSize)}`,"上传",void 0,false,false,"primary",()=>{j.init();})]}]}]}]},at={id:"component-forum-post",title:"帖子",forms:[{type:"forms",text:"",forms:[{text:"功能",type:"deepMenu",forms:[{type:"forms",text:"",forms:[D("拦截附件","mt-forum-post-interceptionAttachment",true,void 0,"点击附件时弹出提示框进行确认是否下载附件"),D("图片查看优化","mt-forum-post-optimizationImagePreview",true,void 0,"使用Viewer查看图片"),D("自动加载下一页","mt-forum-post-loadNextPageComment",true,void 0,"无缝预览下一页"),D("代码块优化","mt-forum-post-codeQuoteOptimization",true,void 0,"自动检测代码块语言并设置关键字高亮")]}]},{type:"deepMenu",text:"用户信息块",forms:[{type:"forms",text:"",forms:[D("探测用户在线状态","mt-forum-post-detectingUserOnlineStatus",false,void 0,"获取用户在线状态并在用户信息处显示状态表情"),D("显示用户等级","mt-forum-post-showUserLevel",true,void 0,"在用户信息处显示当前用户的等级"),D("隐藏底部信息块","mt-forum-post-hideBottomInfoBlock",false,void 0,"包括金币、好评、信誉等信息")]}]},{type:"deepMenu",text:"右侧悬浮工具栏",forms:[{type:"forms",text:"",forms:[D("新增【快捷收藏】","mt-forum-post-quickCollentBtn",true,void 0,"在右侧悬浮工具栏添加【收藏】按钮，用于快捷收藏"),D("快捷回复优化","mt-forum-post-quickReplyOptimization",true,void 0,"为快捷回复弹窗底部区域添加【一键空格】按钮")]}]}]}]},it={id:"component-guide",title:"导读",forms:[{type:"forms",text:"",forms:[D("页面美化","mt-guide-beautifyPage",true,void 0,"美化样式")]}]};de.addContentConfig([nt,at,it]);A.init();tt.init();

})(Qmsg, DOMUtils, Utils, pops, hljs, Viewer);