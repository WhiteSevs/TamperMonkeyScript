// ==UserScript==
// @name         m3u8内容过滤器
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.8.27
// @author       WhiteSevs
// @description  自定义规则对网页中的m3u8的请求内容进行过滤
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.7.5/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.6.5/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.3.6/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.4.0/dist/index.umd.js
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

(function (b, M, q, ee) {
    'use strict';

    var we=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,pe=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,ie=typeof GM_getValue<"u"?GM_getValue:void 0,z=typeof GM_info<"u"?GM_info:void 0,$e=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,Y=typeof GM_setValue<"u"?GM_setValue:void 0,Ve=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,ke=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,L=typeof unsafeWindow<"u"?unsafeWindow:void 0,Se=window;const ye="GM_Panel",De="data-init",O="data-key",B="data-default-value",Re="data-init-more-value",k="data-storage-api",j={setting:{get width(){return window.innerWidth<550?"88vw":window.innerWidth<700?"550px":"700px"},get height(){return window.innerHeight<450?"70vh":window.innerHeight<550?"450px":"550px"}},settingMiddle:{get width(){return window.innerWidth<350?"88vw":"350px"}},info:{get width(){return window.innerWidth<350?"88vw":"350px"},get height(){return window.innerHeight<250?"88vh":"250px"}}};class Ie{storageKey;listenerData;constructor(e){if(typeof e=="string"){let a=e.trim();if(a=="")throw new Error("key参数不能为空字符串");this.storageKey=a;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new q.Dictionary;}getLocalValue(){let e=ie(this.storageKey);return e==null&&(e={},this.setLocalValue(e)),e}setLocalValue(e){Y(this.storageKey,e);}set(e,a){let n=this.get(e),i=this.getLocalValue();Reflect.set(i,e,a),this.setLocalValue(i),this.triggerValueChangeListener(e,n,a);}get(e,a){let n=this.getLocalValue();return Reflect.get(n,e)??a}getAll(){return this.getLocalValue()}delete(e){let a=this.get(e),n=this.getLocalValue();Reflect.deleteProperty(n,e),this.setLocalValue(n),this.triggerValueChangeListener(e,a,void 0);}has(e){let a=this.getLocalValue();return Reflect.has(a,e)}keys(){let e=this.getLocalValue();return Reflect.ownKeys(e)}values(){let e=this.getLocalValue();return Reflect.ownKeys(e).map(a=>Reflect.get(e,a))}clear(){we(this.storageKey);}addValueChangeListener(e,a){let n=Math.random(),i=this.listenerData.get(e)||[];return i.push({id:n,key:e,callback:a}),this.listenerData.set(e,i),n}removeValueChangeListener(e){let a=false;for(const[n,i]of this.listenerData.entries()){for(let o=0;o<i.length;o++){const s=i[o];(typeof e=="string"&&s.key===e||typeof e=="number"&&s.id===e)&&(i.splice(o,1),o--,a=true);}this.listenerData.set(n,i);}return a}triggerValueChangeListener(e,a,n){if(!this.listenerData.has(e))return;let i=this.listenerData.get(e);for(let o=0;o<i.length;o++){const s=i[o];if(typeof s.callback=="function"){let r=this.get(e),l,c;typeof a<"u"&&arguments.length>=2?c=a:c=r,typeof n<"u"&&arguments.length>2?l=n:l=r,s.callback(e,c,l);}}}}const T=new Ie(ye),be={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{D.showPanel(Q.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){D.isTopWindow()&&J.add(this.$data.menuOption);},addMenuOption(t){Array.isArray(t)||(t=[t]),this.$data.menuOption.push(...t);},updateMenuOption(t){Array.isArray(t)||(t=[t]),t.forEach(e=>{let a=this.$data.menuOption.findIndex(n=>n.key===e.key);a!==-1&&(this.$data.menuOption[a]=e);});},getMenuOption(t=0){return this.$data.menuOption[t]},deleteMenuOption(t=0){this.$data.menuOption.splice(t,1);}},re={waitRemove(...t){t.forEach(e=>{typeof e=="string"&&f.waitNodeList(e).then(a=>{a.forEach(n=>n.remove());});});},addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(a=>{Array.isArray(a)?e=e.concat(a):e.push(a);}),he(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){let e=typeof pe=="function"?pe(t.keyName):null;typeof e=="string"&&e?he(e):re.loadStyleLink(t.url);},async loadStyleLink(t){let e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=t,M.ready(()=>{document.head.appendChild(e);});},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(a=>{e.onload=()=>{a(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.match(/^http(s|):\/\//i)?t:t.startsWith("//")?(t.startsWith("///")||(t=window.location.protocol+t),t):(t.startsWith("/")||(t+="/"),t=window.location.origin+t,t)},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;let e=new URL(t);return e.protocol="https:",e.toString()},lockScroll(...t){let e=document.createElement("style");e.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let a=[document.documentElement,document.body].concat(...t||[]);return a.forEach(n=>{n.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(e),{recovery(){a.forEach(n=>{n.classList.remove("pops-overflow-hidden-important");}),e.remove();}}},async getClipboardText(){function t(n){navigator.clipboard.readText().then(i=>{n(i);}).catch(i=>{x.error("读取剪贴板内容失败👉",i),n("");});}function e(n){navigator.permissions.query({name:"clipboard-read"}).then(i=>{t(n);}).catch(i=>{x.error("申请剪贴板权限失败，尝试直接读取👉",i.message??i.name??i.stack),t(n);});}function a(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(n=>{if(!a()){n("");return}document.hasFocus()?e(n):window.addEventListener("focus",()=>{e(n);},{once:true});})},escapeHtml(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(t,e,a=5e3){let n,i=a-e,o=e,s=async r=>{let l=await t(r);if(typeof l=="boolean"&&!l||r){f.workerClearTimeout(n);return}if(o+=e,o>i){s(true);return}n=f.workerSetTimeout(()=>{s(false);},e);};s(false);},findParentNode(t,e,a){if(a){let n=M.closest(t,a);if(n)return n.querySelector(e)}else return M.matches(t,e)?t:M.closest(t,e)}},D={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new f.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new f.Dictionary),this.__onceExecMenuData},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new f.Dictionary),this.__onceExecData},get scriptName(){return fe},get panelConfig(){return this.__panelConfig},set panelConfig(t){this.__panelConfig=t;},key:ye,attributeKeyName:O,attributeDefaultValueName:B},init(){this.initContentDefaultValue(),be.init();},isTopWindow(){return L.top===L.self},initContentDefaultValue(){const t=n=>{if(!n.attributes||n.type==="button"||n.type==="forms"||n.type==="deepMenu")return;let i=new Map,o=n.attributes[O];if(o!=null){const l=n.attributes[B];i.set(o,l);}let s=n.attributes[Re];if(typeof s=="object"&&s&&Object.keys(s).forEach(l=>{i.set(l,s[l]);}),!i.size){x.warn(["请先配置键",n]);return}let r=n.attributes[De];if(typeof r=="function"){let l=r();if(typeof l=="boolean"&&!l)return}if(n.type==="switch"){let l=typeof n.disabled=="function"?n.disabled():n.disabled;typeof l=="boolean"&&l&&this.$data.contentConfigInitDisabledKeys.push(...i.keys());}for(const[l,c]of i.entries())this.setDefaultValue(l,c);},e=n=>{for(let i=0;i<n.length;i++){let o=n[i];t(o);let s=o.forms;s&&Array.isArray(s)&&e(s);}},a=[...Q.getAllContentConfig()];for(let n=0;n<a.length;n++){let i=a[n];if(!i.forms)continue;const o=i.forms;o&&Array.isArray(o)&&e(o);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(t,e){this.$data.contentConfigInitDefaultValue.has(t)&&x.warn("请检查该key(已存在): "+t),this.$data.contentConfigInitDefaultValue.set(t,e);},setValue(t,e){T.set(t,e);},getValue(t,e){let a=T.get(t);return a??(this.$data.contentConfigInitDefaultValue.has(t)?this.$data.contentConfigInitDefaultValue.get(t):e)},deleteValue(t){T.delete(t);},hasKey(t){return T.has(t)},addValueChangeListener(t,e){return T.addValueChangeListener(t,(n,i,o)=>{e(t,o,i);})},removeValueChangeListener(t){T.removeValueChangeListener(t);},triggerMenuValueChange(t,e,a){T.triggerValueChangeListener(t,a,e);},exec(t,e,a,n=true){const i=this;let o;typeof t=="string"||Array.isArray(t)?o=()=>t:o=t;let s=false,r=o(),l=[];Array.isArray(r)?(s=true,l=r):l.push(r);let c=l.find(g=>!this.$data.contentConfigInitDefaultValue.has(g));if(c){x.warn(`${c} 键不存在`);return}let u=JSON.stringify(l);if(n){if(this.$data.onceExecMenuData.has(u))return;this.$data.onceExecMenuData.set(u,1);}let d=[],p=[],h=(g,_)=>{let R=[];Array.isArray(_)||(_=[_]),_.forEach(I=>{if(I!=null&&I instanceof HTMLStyleElement){R.push(I);return}}),d=d.concat(R);},w=g=>this.getValue(g),$=()=>{for(let g=0;g<d.length;g++)d[g].remove(),d.splice(g,1),g--;},P=()=>{let g=false;return typeof a=="function"?g=a(l):g=l.every(_=>w(_)),g},U=g=>{let _=P(),R=[];if(_){let I=l.map(y=>this.getValue(y)),C=e({value:s?I:I[0],addStyleElement:(...y)=>h(true,...y)});Array.isArray(C)||(C=[C]),C.forEach(y=>{if(y!=null&&y instanceof HTMLStyleElement){R.push(y);return}});}$(),d=[...R];};return n&&l.forEach(g=>{let _=this.addValueChangeListener(g,(R,I,C)=>{U();});p.push(_);}),U(),{clear(){this.clearStoreStyleElements(),this.removeValueChangeListener(),n&&i.$data.onceExecMenuData.delete(u);},clearStoreStyleElements:()=>$(),removeValueChangeListener:()=>{p.forEach(g=>{this.removeValueChangeListener(g);});}}},execMenu(t,e,a=false,n=false){return this.exec(t,i=>e(i),i=>i.every(s=>{let r=!!this.getValue(s);return D.$data.contentConfigInitDisabledKeys.includes(s)&&(r=false,x.warn(`.execMenu${n?"Once":""} ${s} 被禁用`)),a&&(r=!r),r}),n)},execMenuOnce(t,e,a=false){return this.execMenu(t,e,a,true)},deleteExecMenuOnce(t){return this.$data.onceExecMenuData.delete(t),T.removeValueChangeListener(t)},onceExec(t,e){if(t=this.transformKey(t),typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(t)||(e(),this.$data.onceExecData.set(t,1));},deleteOnceExec(t){t=this.transformKey(t),this.$data.onceExecData.delete(t);},showPanel(t,e=`${fe}-设置`,a=false,n=false){this.$data.$panel=null,this.$data.panelContent=[];let i=t.findIndex(s=>(typeof s.isBottom=="function"?s.isBottom():!!s.isBottom)&&s.id==="script-version")!==-1;!a&&!i&&t.push(...Q.getDefaultBottomContentConfig());let o=S.panel({title:{text:e,position:"center",html:false,style:""},content:t,btn:{close:{enable:true,callback:(s,r)=>{s.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(s,r)=>{s(),this.$data.$panel=null;}},width:j.setting.width,height:j.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=o,this.$data.panelContent=t,n||this.registerConfigSearch({$panel:o,content:t});},registerConfigSearch(t){const{$panel:e,content:a}=t;let n=async(u,d)=>{if(u==null)return;let p=await d(u);return p&&typeof p.isFind=="boolean"&&p.isFind?p.data:await n(p.data,d)},i=(u,d)=>{const p=new IntersectionObserver(h=>{h.forEach(w=>{w.isIntersecting&&(d?.(),p.disconnect());});},{root:null,threshold:1});p.observe(u),u.scrollIntoView({behavior:"smooth",block:"center"});},o=u=>{const d="pops-flashing";m.animationend(u,()=>{u.classList.remove(d);}),u.classList.add(d);},s=(u,d)=>{f.preventEvent(u);let p=S.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:j.settingMiddle.width,height:"auto",drag:true,style:`
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
						font-size: 0.8rem;
						color: #6c6c6c;
					}
					${t.searchDialogStyle??""}
				`});p.$shadowRoot.querySelector(".search-wrapper");let h=p.$shadowRoot.querySelector(".search-config-text"),w=p.$shadowRoot.querySelector(".search-result-wrapper");h.focus();let $=()=>{m.empty(w);},P=A=>{const g=f.queryProperty(A,R=>R?.next?{isFind:false,data:R.next}:{isFind:true,data:R});let _=m.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${g.matchedData?.path}</div>
							<div class="search-result-item-description">${g.matchedData?.description??""}</div>
						`});return m.on(_,"click",R=>{let C=e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[A.index];if(!C){b.error(`左侧项下标${A.index}不存在`);return}C.scrollIntoView({behavior:"smooth",block:"center"}),C.click(),n(A.next,async y=>{if(y?.next){let V=await f.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(v=>{const E=Reflect.get(v,"__formConfig__");return typeof E=="object"&&E!=null&&E.text===y.name}),2500);if(V)V.click();else return b.error("未找到对应的二级菜单"),{isFind:true,data:y};return {isFind:false,data:y.next}}else {let V=await f.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(v=>Reflect.get(v,"__formConfig__")===y.matchedData?.formConfig),2500);if(V){i(V);let v=V.closest(".pops-panel-forms-fold[data-fold-enable]");v&&(v.querySelector(".pops-panel-forms-fold-container").click(),await f.sleep(500)),i(V,()=>{o(V);});}else b.error("未找到对应的菜单项");return {isFind:true,data:y}}});}),_},U=A=>{const g=new RegExp(A,"i"),_=[],R=(C,y)=>{for(let V=0;V<C.length;V++){const v=C[V];let E=v.forms;if(E&&Array.isArray(E)){const K=f.deepClone(y);if(v.type==="deepMenu"){const Z=f.queryProperty(K,G=>G?.next?{isFind:false,data:G.next}:{isFind:true,data:G});Z.next={name:v.text};}R(E,K);}else {let K=Reflect.get(v,"text"),Z=Reflect.get(v,"description");const G=[K,Z];let ue=G.findIndex(N=>{if(typeof N=="string")return N.match(g)});if(ue!==-1){const N=f.deepClone(y),ce=f.queryProperty(N,F=>F?.next?{isFind:false,data:F.next}:{isFind:true,data:F});ce.next={name:K,matchedData:{path:"",formConfig:v,matchedText:G[ue],description:Z}};const de=[];f.queryProperty(N,F=>{const ne=F?.name;return typeof ne=="string"&&ne.trim()!==""&&de.push(ne),F?.next?{isFind:false,data:F.next}:{isFind:true,data:F}});const ve=de.join(re.escapeHtml(" - "));ce.next.matchedData.path=ve,_.push(N);}}}};for(let C=0;C<a.length;C++){const y=a[C];if(!y.forms||y.isBottom&&y.id==="script-version")continue;const V=y.forms;if(V&&Array.isArray(V)){let v=y.title;typeof v=="function"&&(v=v()),R(V,{index:C,name:v});}}let I=document.createDocumentFragment();for(const C of _){let y=P(C);I.appendChild(y);}$(),w.append(I);};m.on(h,"input",f.debounce(A=>{f.preventEvent(A);let g=m.val(h).trim();if(g===""){$();return}U(g);},200));},r=null,l=false,c;m.on(e.$shadowRoot,"dblclick","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",s),m.on(e.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(u,d)=>{clearTimeout(c),c=void 0,l&&r===d?(l=false,r=null,s(u)):(c=setTimeout(()=>{l=false;},200),l=true,r=d);},{capture:true}),e.$shadowRoot.appendChild(m.createElement("style",{type:"text/css",textContent:`
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
				`}));},transformKey(t){if(Array.isArray(t)){const e=t.sort();return JSON.stringify(e)}else return t}},H={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},f=q.noConflict(),m=M.noConflict(),S=ee,x=new f.Log(z,L.console||Se.console);let fe=z?.script?.name||void 0;ee.config.Utils.AnyTouch();const Ce=false;x.config({debug:Ce,logMaxCount:1e3,autoClearConsole:true,tag:true});b.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(t){const e=t.getSetting().type;if(e==="loading")return  false;const a=t.getSetting().content;return e==="warning"?x.warn(a):e==="error"?x.error(a):x.info(a),true},get position(){return D.getValue(H.qmsg_config_position.key,H.qmsg_config_position.defaultValue)},get maxNums(){return D.getValue(H.qmsg_config_maxnums.key,H.qmsg_config_maxnums.defaultValue)},get showReverse(){return D.getValue(H.qmsg_config_showreverse.key,H.qmsg_config_showreverse.defaultValue)},get zIndex(){let t=q.getMaxZIndex(),e=ee.config.InstanceUtils.getPopsMaxZIndex().zIndex;return q.getMaxValue(t,e)+100}});S.GlobalConfig.setGlobalConfig({zIndex:()=>{let t=q.getMaxZIndex(void 0,void 0,a=>{if(a?.classList?.contains("qmsg-shadow-container")||a?.closest("qmsg")&&a.getRootNode()instanceof ShadowRoot)return  false}),e=ee.config.InstanceUtils.getPopsMaxZIndex().zIndex;return q.getMaxValue(t,e)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const J=new f.GM_Menu({GM_getValue:ie,GM_setValue:Y,GM_registerMenuCommand:$e,GM_unregisterMenuCommand:Ve}),oe=new f.Httpx({xmlHttpRequest:ke,logDetails:Ce});oe.interceptors.request.use(t=>t);oe.interceptors.response.use(void 0,t=>(x.error("拦截器-请求错误",t),t.type==="onabort"?b.warning("请求取消",{consoleLogContent:true}):t.type==="onerror"?b.error("请求异常",{consoleLogContent:true}):t.type==="ontimeout"?b.error("请求超时",{consoleLogContent:true}):b.error("其它错误",{consoleLogContent:true}),t));L.Object.defineProperty,L.Function.prototype.apply,L.Function.prototype.call,L.Element.prototype.appendChild,L.setTimeout;const he=f.addStyle.bind(f);M.selector.bind(M);M.selectorAll.bind(M);new f.GM_Cookie;const Q={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new f.Dictionary),this.__contentConfig}},addContentConfig(t){Array.isArray(t)||(t=[t]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,t);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(t=0){return this.$data.contentConfig.get(t)??[]},getDefaultBottomContentConfig(){return [{id:"script-version",title:`版本：${z?.script?.version||"未知"}`,isBottom:true,forms:[],clickFirstCallback(t,e,a){let n=z?.script?.supportURL||z?.script?.namespace;return typeof n=="string"&&f.isNotNull(n)&&window.open(n,"_blank"),false}}]}},Ae={get ajaxHooker(){return this.__ajaxHooker==null&&(this.__ajaxHooker=f.ajaxHooker()),this.__ajaxHooker},hook(){this.ajaxHooker.hook(t=>{let e=re.fixUrl(t.url);try{if(!new URL(e).pathname.endsWith(".m3u8"))return;t.response=i=>{let o=i.responseText;if(o.trim()===""||!o.includes("#EXT-X-ENDLIST"))return;let s=se.runRule(o);i.responseText=s;};}catch(a){x.error("m3u8过滤器 hook network出错",a);}});},unhook(){this.ajaxHooker.unhook();}},te={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new q.Dictionary),this.__storeApiFn}},getStorageApi(t){if(this.hasStorageApi(t))return this.$data.storeApiValue.get(t)},hasStorageApi(t){return this.$data.storeApiValue.has(t)},setStorageApi(t,e){this.$data.storeApiValue.set(t,e);},initComponentsStorageApi(t,e,a){let n;this.hasStorageApi(t)?n=this.getStorageApi(t):n=a,this.setComponentsStorageApiProperty(e,n);},setComponentsStorageApiProperty(t,e){Reflect.set(t.props,k,e);}},me=function(t,e,a,n,i,o="",s,r,l,c){let u={text:t,type:"input",isNumber:false,isPassword:false,attributes:{},props:{},description:n,afterAddToUListCallBack:l,getValue(){return this.props[k].get(e,a)},callback(d,p,h){this.props[k].set(e,p);},placeholder:o};return Reflect.set(u.attributes,O,e),Reflect.set(u.attributes,B,a),te.initComponentsStorageApi("input",u,{get(d,p){return D.getValue(d,p)},set(d,p){D.setValue(d,p);}}),u},W=function(t,e,a,n,i,o,s,r){let l={text:t,type:"switch",description:i,disabled:s,attributes:{},props:{},getValue(){return this.props[k].get(e,a)},callback(c,u){let d=!!u;x.success(`${d?"开启":"关闭"} ${t}`),this.props[k].set(e,d);},afterAddToUListCallBack:o};return Reflect.set(l.attributes,O,e),Reflect.set(l.attributes,B,a),te.initComponentsStorageApi("switch",l,{get(c,u){return D.getValue(c,u)},set(c,u){D.setValue(c,u);}}),l};class Ee{option;constructor(e){this.option=e;}async showView(){let e=S.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist"></ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:true},btn:f.assign({ok:{callback:async()=>{await o();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
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
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),a=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");let n=e.$shadowRoot.querySelector(".rule-form-ulist"),i=await this.option.getView(await this.option.data());n.appendChild(i);const o=async()=>{(await this.option.onsubmit(a,await this.option.data())).success&&(e.close(),await this.option.dialogCloseCallBack(true));};}}class Me{option;constructor(e){this.option=e;}showView(){let e=S.alert({title:{text:this.option.title,position:"center"},content:{text:`
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
            `}),a=e.$shadowRoot.querySelector(".filter-container"),n=document.createDocumentFragment();this.option.filterOption.forEach(i=>{let o=m.createElement("button",{innerText:i.name},{type:"button"}),s=async()=>{(await this.option.getAllRuleInfo()).forEach(async l=>{await i.filterCallBack(l.data)?m.show(l.$el,false):m.hide(l.$el,false);}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),e.close();};m.on(o,"click",async r=>{f.preventEvent(r),!(typeof i.callback=="function"&&!await i.callback(r,s))&&await s();}),n.appendChild(o);}),a.appendChild(n);}}class Fe{option;constructor(e){this.option=e;}async showView(e){let a=S.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:true},btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async o=>{this.showEditView(false,await this.option.getAddData(),a.$shadowRoot);}},close:{enable:true,callback(o){a.close();}},cancel:{enable:this.option?.bottomControls?.filter?.enable||false,type:"default",text:"过滤",callback:(o,s)=>{typeof this.option?.bottomControls?.filter?.callback=="function"&&this.option.bottomControls.filter.callback();let r=()=>Array.from(a.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),l=s.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");m.text(l).includes("取消")?(r().forEach(c=>{m.show(c,false);}),m.text(l,"过滤")):new Me({title:this.option.bottomControls?.filter?.title??"过滤规则",filterOption:this.option.bottomControls?.filter?.option||[],execFilterCallBack(){m.text(l,"取消过滤");},getAllRuleInfo:()=>r().map(u=>({data:this.parseRuleItemElement(u).data,$el:u}))}).showView();}},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:o=>{let s=S.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async r=>{if(x.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){b.error("清理失败");return}else b.success("清理成功");await this.updateDeleteAllBtnText(a.$shadowRoot),this.clearContent(a.$shadowRoot),s.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
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
            `}),n=await this.option.data(),i=false;for(let o=0;o<n.length;o++){let s=n[o],r=await this.appendRuleItemElement(a.$shadowRoot,s);(typeof e=="function"?e(s):true)||(i=true,r.forEach(c=>{m.hide(c,false);}));}if(i){let o=a.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");m.text(o,"取消过滤");}}showEditView(e,a,n,i,o,s){let r=async c=>{if(c){if(typeof s=="function"){let u=await this.option.getData(a);s(u);}}else if(e||await this.option.deleteData(a),typeof o=="function"){let u=await this.option.getData(a);o(u);}};new Ee({title:e?"编辑":"添加",data:()=>a,dialogCloseCallBack:r,getView:async c=>await this.option.itemControls.edit.getView(c,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async(c,u)=>{c.close(),await r(false);}},close:{callback:async(c,u)=>{c.close(),await r(false);}}},onsubmit:async(c,u)=>{let d=await this.option.itemControls.edit.onsubmit(c,e,u);return d.success?e?(b.success("修改成功"),n&&await this.updateRuleItemElement(d.data,i,n)):n&&await this.appendRuleItemElement(n,d.data):e&&x.error("修改失败"),d},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(e){let a=e.querySelector(".rule-view-container"),n=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:a,$deleteBtn:n}}parseRuleItemElement(e){let a=e.querySelector(".rule-controls-enable"),n=a.querySelector(".pops-panel-switch"),i=a.querySelector(".pops-panel-switch__input"),o=a.querySelector(".pops-panel-switch__core"),s=e.querySelector(".rule-controls-edit"),r=e.querySelector(".rule-controls-delete");return {$enable:a,$enableSwitch:n,$enableSwitchInput:i,$enableSwitchCore:o,$edit:s,$delete:r,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,a){let n=await this.option.getDataItemName(e),i=m.createElement("div",{className:"rule-item",innerHTML:`
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
			`});Reflect.set(i,"data-rule",e);let o="pops-panel-switch-is-checked";const{$enable:s,$enableSwitch:r,$enableSwitchCore:l,$enableSwitchInput:c,$delete:u,$edit:d}=this.parseRuleItemElement(i);return this.option.itemControls.enable.enable?(m.on(l,"click",async p=>{let h=false;r.classList.contains(o)?(r.classList.remove(o),h=false):(r.classList.add(o),h=true),c.checked=h,await this.option.itemControls.enable.callback(e,h);}),await this.option.itemControls.enable.getEnable(e)&&r.classList.add(o)):s.remove(),this.option.itemControls.edit.enable?m.on(d,"click",p=>{f.preventEvent(p),this.showEditView(true,e,a,i,h=>{e=null,e=h;});}):d.remove(),this.option.itemControls.delete.enable?m.on(u,"click",p=>{f.preventEvent(p);let h=S.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async w=>{x.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(b.success("成功删除该数据"),i.remove(),await this.updateDeleteAllBtnText(a),h.close()):b.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):u.remove(),i}async appendRuleItemElement(e,a){let{$container:n}=this.parseViewElement(e),i=[],o=Array.isArray(a)?a:[a];for(let s=0;s<o.length;s++){let r=o[s],l=await this.createRuleItemElement(r,e);n.appendChild(l),i.push(l);}return await this.updateDeleteAllBtnText(e),i}async updateRuleContaienrElement(e){this.clearContent(e);const{$container:a}=this.parseViewElement(e);let n=await this.option.data();await this.appendRuleItemElement(e,n),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,a,n){let i=await this.createRuleItemElement(e,n);a.after(i),a.remove();}clearContent(e){const{$container:a}=this.parseViewElement(e);m.html(a,"");}setDeleteBtnText(e,a,n=false){const{$deleteBtn:i}=this.parseViewElement(e);n?m.html(i,a):m.text(i,a);}async updateDeleteAllBtnText(e){let a=await this.option.data();this.setDeleteBtnText(e,`清空所有(${a.length})`);}}const ae={duration2Text(t){const e=Math.floor(t/3600),a=Math.floor(t%3600/60),n=parseInt((t%60).toString());return [e.toString().padStart(2,"0"),a.toString().padStart(2,"0"),n.toString().padStart(2,"0")].join(":")},similar(t,e){if(!t||!e)return 0;var a=t.length>e.length?t.length:e.length,n=t.length,i=e.length,o=[],s=function(h,w,$){return h<w?h<$?h:$:w<$?w:$},r,l,c,u,d;if(n===0)return i;if(i===0)return n;for(r=0;r<=n;r++)o[r]=[],o[r][0]=r;for(l=0;l<=i;l++)o[0][l]=l;for(r=1;r<=n;r++)for(c=t.charAt(r-1),l=1;l<=i;l++)u=e.charAt(l-1),c===u?d=0:d=1,o[r][l]=s(o[r-1][l]+1,o[r][l-1]+1,o[r-1][l-1]+d);return 1-o[n][i]/a}},_e={updateISMatchedRuleMenu(){let t={key:"matched-rule-count",text:`🔧 当前页面执行规则数量： ${se.$data.matchedRule.length}`,autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{}};J.update(t);},updateIsFilterAdsDurationInfoMenu(t){let e={key:"is-filter-segment-duration",text:`🍵 已过滤时长：${t}s`,autoReload:false,isStoreValue:false,showText(a){return a},callback:()=>{}};J.update(e);}},le={parse_EXTINF(t,e,a){let n=Number(t.replace(/(^#EXTINF:\s*|,)/g,"")),i=a,o=a+n;return {filePath:e.trim(),startDuration:i,endDuration:o,duration:n}}},ge=t=>{X.$data.isFilterDuration+=t.duration,_e.updateIsFilterAdsDurationInfoMenu(X.$data.isFilterDuration);},X={$data:{isFilterDuration:0},filterAdsWithFilePathLength(t,e={handlerFilePath(a){return a}}){let a=t.split(`
`),n=new f.Dictionary,i=0;for(let s=0;s<a.length;s++){const r=a[s].trim();if(!r.startsWith("#EXTINF:"))continue;let{duration:l,startDuration:c,endDuration:u,filePath:d}=le.parse_EXTINF(r,a[s+1],i);if(e&&typeof e.handlerFilePath=="function"){let w=e.handlerFilePath(d);typeof w=="string"&&(d=w);}i+=l;let p=d.length.toString(),h=n.get(p)||[];h.push({filePath:d,startDuration:c,endDuration:u,duration:l,index:s}),n.set(p,h),s++;}let o=[];if(n.forEach((s,r)=>{o.push({filePathLength:r,segmentsInfoList:s});}),o=f.sortListByProperty(o,s=>s.segmentsInfoList.length,true),o.splice(0,1),o.length){let s=[];o.forEach(l=>{l.segmentsInfoList.forEach(c=>{s.push({index:c.index,data:c});});});let r=0;for(let l=0;l<a.length;l++){let c=s.findIndex(u=>u.index===l+r);if(c!=-1){let u=s[c];x.info(`通杀1：过滤广告片段 ==> 索引：${l+r} 文件名：${u.data.filePath} 开始：${ae.duration2Text(u.data.startDuration)} 持续时长：${u.data.duration}s`),a.splice(l,2),l-=2,s.splice(c,1),r=r+2;}}}return o.forEach(s=>{s.segmentsInfoList.forEach(r=>{ge(r);});}),{m3u8Text:a.join(`
`),filterInfo:o}},filterAdsWithFilePathSimilar(t,e={similarCompareValue:.35,includePercent:.5,handlerFilePath(a){return a}}){let a=t.split(`
`),n=[],i=0;for(let r=0;r<a.length;r++){const l=a[r].trim();if(!l.startsWith("#EXTINF:"))continue;let{duration:c,startDuration:u,endDuration:d,filePath:p}=le.parse_EXTINF(l,a[r+1],i);if(e&&typeof e.handlerFilePath=="function"){let h=e.handlerFilePath(p);typeof h=="string"&&(p=h);}i+=c,n.push({filePath:p,startDuration:u,endDuration:d,duration:c,index:r}),r++;}let o=[],s=0;for(let r=0;r<n.length;r++){const l=n[r];let c=true,u=0,d=n;for(let p=0;p<d.length;p++){const h=d[p];if(ae.similar(l.filePath,h.filePath)>=e.similarCompareValue&&u++,u/d.length>e.includePercent){c=false;break}}c&&(o.push(l),x.info(`通杀2：过滤广告片段 ==> 索引：${l.index} 文件名：${l.filePath} 开始：${ae.duration2Text(l.startDuration)} 持续时长：${l.duration}s`),a.splice(l.index-s,2),s+=2);}return o.forEach(r=>{ge(r);}),{m3u8Text:a.join(`
`),filterInfo:o}}},Te=function(t,e,a,n,i,o="",s,r){let l={text:t,type:"textarea",attributes:{},props:{},description:n,placeholder:o,disabled:s,getValue(){let u=this.props[k].get(e,a);return Array.isArray(u)?u.join(`
`):u},callback(c,u){this.props[k].set(e,u);}};return Reflect.set(l.attributes,O,e),Reflect.set(l.attributes,B,a),te.initComponentsStorageApi("switch",l,{get(c,u){return D.getValue(c,u)},set(c,u){D.setValue(c,u);}}),l},se={$key:{STORAGE_KEY:"m3u8-rule"},$data:{matchedRule:[]},init(){let t=this.getData();this.registerMenu(t);for(let e=0;e<t.length;e++)try{const a=t[e];a.enable&&window.location.href.match(new RegExp(a.data.url))&&this.$data.matchedRule.push(a);}catch(a){x.error("m3u8过滤器 ==> 规则初始化出错",a);}this.$data.matchedRule.length&&(x.info("m3u8过滤器 ==> 当前网站执行的规则：",this.$data.matchedRule),Ae.hook(),_e.updateISMatchedRuleMenu());},registerMenu(t){J.update([{key:"m3u8-rule",text:`⚙ 自定义规则（${t.length}条）`,autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showView();}},{key:"m3u8-export-rule",text:"⚙ 规则导出",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.exportRule("m3u8-filter-rule.json");}},{key:"m3u8-import-rule",text:"⚙ 规则导入",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.importRule();}}]);},getTemplateData(){return {uuid:f.generateUUID(),enable:true,name:"",data:{url:"",commonFilterAdsSegmentsFilePathLength:true,commonFilterAdsSegmentsFilePathSimilar:false,ownFilterCode:""}}},showView(){let t=S.config.PanelHandlerComponents();function e(n){return {get(i,o){return n[i]??o},set(i,o){n[i]=o;}}}new Fe({title:"m3u8自定义规则",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:n=>n.name,updateData:n=>this.updateData(n),deleteData:n=>this.deleteData(n),getData:n=>this.getData().find(s=>s.uuid===n.uuid)??n,itemControls:{enable:{enable:true,getEnable(n){return n.enable},callback:(n,i)=>{n.enable=i,this.updateData(n);}},edit:{enable:true,getView:(n,i)=>{let o=document.createDocumentFragment();i||(n=this.getTemplateData());let s=W("启用","enable",true);Reflect.set(s.props,k,e(n));let r=t.createSectionContainerItem_switch(s),l=me("规则名称","name","","",void 0,"必填");Reflect.set(l.props,k,e(n));let c=t.createSectionContainerItem_input(l),u=me("匹配网址","url","","",void 0,"必填，可正则，注意转义");Reflect.set(u.props,k,e(n.data));let d=t.createSectionContainerItem_input(u),p=W("广告通杀1","commonFilterAdsSegmentsFilePathLength",true,void 0,"使用文件名称长度比较");Reflect.set(p.props,k,e(n.data));let h=t.createSectionContainerItem_switch(p),w=W("广告通杀2","commonFilterAdsSegmentsFilePathSimilar",false,void 0,"使用文件名称相似度比较");Reflect.set(w.props,k,e(n.data));let $=t.createSectionContainerItem_switch(w),P=Te("自定义过滤js","ownFilterCode","","",void 0,`参数：
    [m3u8Text]：需要处理的m3u8字符串
返回：[String]

例如：
m3u8Text = m3u8Text.replace('','');
return m3u8Text;
`);Reflect.set(P.props,k,e(n.data));let U=t.createSectionContainerItem_textarea(P);return o.appendChild(r),o.appendChild(c),o.appendChild(d),o.appendChild(h),o.appendChild($),o.appendChild(U),o},onsubmit:(n,i,o)=>{let s=n.querySelectorAll(".rule-form-ulist > li"),r=this.getTemplateData();return i&&(r.uuid=o.uuid),s.forEach(l=>{let c=Reflect.get(l,"__formConfig__"),u=Reflect.get(c,"attributes"),d=Reflect.get(l,k),p=Reflect.get(u,O),h=Reflect.get(u,B),w=d.get(p,h);Reflect.has(r,p)?Reflect.set(r,p,w):Reflect.has(r.data,p)?Reflect.set(r.data,p,w):x.error(`${p}不在数据中`);}),r.name.trim()===""?(b.error("规则名称不能为空"),{success:false,data:r}):r.data.url.trim()===""?(b.error("匹配网址不能为空"),{success:false,data:r}):i?{success:this.updateData(r),data:r}:{success:this.addData(r),data:r}},style:`
                        li[data-key="ownFilterCode"]{
                            gap: 30px;
                        }
                        li[data-key="ownFilterCode"] .pops-panel-textarea{
                            flex: 1;
                        }
                        li[data-key="ownFilterCode"] .pops-panel-textarea textarea{
                            height: 300px;
                        }
                    `},delete:{enable:true,deleteCallBack:n=>this.deleteData(n)}},bottomControls:{filter:{enable:true,option:[{name:"过滤【启用】",filterCallBack(n){return n.enable}},{name:"过滤【未启用】",filterCallBack(n){return !n.enable}},{name:"过滤【当前网址运行的规则】",filterCallBack(n){try{return !!window.location.href.match(new RegExp(n.data.url))}catch{return  false}}}]}}}).showView();},runRule(t){let e=t;for(let a=0;a<this.$data.matchedRule.length;a++)try{const i=this.$data.matchedRule[a].data;if(i.commonFilterAdsSegmentsFilePathLength){const{filterInfo:o,m3u8Text:s}=X.filterAdsWithFilePathLength(e);e=s;}if(i.commonFilterAdsSegmentsFilePathSimilar){const{filterInfo:o,m3u8Text:s}=X.filterAdsWithFilePathSimilar(e);e=s;}if(i.ownFilterCode.trim()!==""){let s=new Function("m3u8Text","M3U8Filter","M3U8Parser",i.ownFilterCode)(e,X,le);typeof s=="string"?e=s:x.error("m3u8过滤器 ==> 自定义过滤js代码执行结果不是字符串",s);}break}catch(n){x.error("m3u8过滤器 ==> 执行m3u8文本过滤时出现异常",n);}return e},getData(){return ie(this.$key.STORAGE_KEY,[])},setData(t){Y(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(n=>n.uuid==t.uuid)===-1?(e.push(t),Y(this.$key.STORAGE_KEY,e),true):false},updateData(t){let e=this.getData(),a=e.findIndex(i=>i.uuid==t.uuid),n=false;return a!==-1&&(n=true,e[a]=t),this.setData(e),n},deleteData(t){let e=this.getData(),a=e.findIndex(i=>i.uuid==t.uuid),n=false;return a!==-1&&(n=true,e.splice(a,1)),this.setData(e),n},clearData(){we(this.$key.STORAGE_KEY);},exportRule(t="rule.json"){let e=this.getData(),a=new Blob([JSON.stringify(e,null,4)]),n=window.URL.createObjectURL(a),i=m.createElement("a");i.href=n,i.download=t,i.click(),setTimeout(()=>{window.URL.revokeObjectURL(n);},1500);},importRule(t){let e=S.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(r,l){r.close();}}},mask:{enable:true},drag:true,width:j.info.width,height:j.info.height,style:`
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),a=e.$shadowRoot.querySelector(".btn-control[data-mode='local']"),n=e.$shadowRoot.querySelector(".btn-control[data-mode='network']"),i=e.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),o=r=>{let l=this.getData(),c=[];for(let u=0;u<r.length;u++){const d=r[u];l.findIndex(h=>h.uuid===d.uuid)!==-1||c.push(d);}l=l.concat(c),this.setData(l),b.success(`共 ${r.length} 条规则，新增 ${c.length} 条`),t?.();},s=r=>new Promise(l=>{let c=f.toJSON(r);if(!Array.isArray(c)){x.error(c),b.error("导入失败，格式不符合（不是数组）",{consoleLogContent:true}),l(false);return}if(!c.length){b.error("导入失败，解析出的数据为空",{consoleLogContent:true}),l(false);return}o(c),l(true);});m.on(a,"click",r=>{f.preventEvent(r),e.close();let l=m.createElement("input",{type:"file",accept:".json"});m.on(l,["propertychange","input"],c=>{if(!l.files?.length)return;let u=l.files[0],d=new FileReader;d.onload=()=>{s(d.result);},d.readAsText(u,"UTF-8");}),l.click();}),m.on(n,"click",r=>{f.preventEvent(r),e.close();let l=S.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(d,p){d.close();}},ok:{text:"导入",callback:async(d,p)=>{let h=d.text;if(f.isNull(h)){b.error("请填入完整的url");return}let w=b.loading("正在获取配置..."),$=await oe.get(h,{allowInterceptConfig:false});if(w.close(),!$.status){x.error($),b.error("获取配置失败",{consoleLogContent:true});return}await s($.data.responseText)&&d.close();}},cancel:{enable:false}},mask:{enable:true},drag:true,width:j.info.width,height:"auto"}),c=l.$shadowRoot.querySelector("input"),u=l.$shadowRoot.querySelector(".pops-prompt-btn-ok");m.on(c,["input","propertychange"],d=>{m.val(c)===""?m.attr(u,"disabled","true"):m.removeAttr(u,"disabled");}),m.listenKeyboard(c,"keydown",(d,p,h)=>{d==="Enter"&&h.length===0&&m.val(c)!==""&&f.dispatchEvent(u,"click");}),f.dispatchEvent(c,"input");}),m.on(i,"click",async r=>{f.preventEvent(r),e.close();let l=await f.getClipboardInfo();if(l.error!=null){b.error(l.error.toString());return}if(l.content.trim()===""){b.warning("获取到的剪贴板内容为空");return}await s(l.content);});}},xe=function(t,e,a,n,i,o,s){let r=[];typeof n=="function"?r=n():r=n;let l={text:t,type:"select",description:o,attributes:{},props:{},getValue(){return this.props[k].get(e,a)},callback(c,u,d){let p=u;if(x.info(`选择：${d}`),typeof i=="function"&&i(c,p,d))return;this.props[k].set(e,p);},data:r};return Reflect.set(l.attributes,O,e),Reflect.set(l.attributes,B,a),te.initComponentsStorageApi("select",l,{get(c,u){return D.getValue(c,u)},set(c,u){D.setValue(c,u);}}),l},Le={id:"component-common",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[xe("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(t,e,a)=>{x.info("设置当前Qmsg弹出位置"+a);},"Toast显示在页面九宫格的位置"),xe("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),W("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]},{text:"Cookie配置",type:"forms",forms:[W("启用","httpx-use-cookie-enable",false,void 0,"启用后，将根据下面的配置进行添加cookie"),W("使用document.cookie","httpx-use-document-cookie",false,void 0,"自动根据请求的域名来设置对应的cookie")]}]};Q.addContentConfig([Le]);be.deleteMenuOption();D.init();se.init();

})(Qmsg, DOMUtils, Utils, pops);