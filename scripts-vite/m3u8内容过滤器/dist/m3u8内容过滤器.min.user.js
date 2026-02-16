// ==UserScript==
// @name         m3u8内容过滤器
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.2.16
// @author       WhiteSevs
// @description  自定义规则对网页中的m3u8的请求内容进行过滤
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.9.12/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.9.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@3.2.1/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.6.2/dist/index.umd.min.js
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

(function (w, U, re, j) {
    'use strict';

    var ae=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,ye=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,ee=typeof GM_getValue<"u"?GM_getValue:void 0,J=typeof GM_info<"u"?GM_info:void 0,ne=typeof GM_listValues<"u"?GM_listValues:void 0,Se=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,te=typeof GM_setValue<"u"?GM_setValue:void 0,we=typeof GM_setValues<"u"?GM_setValues:void 0,Re=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Ee=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,L=typeof unsafeWindow<"u"?unsafeWindow:void 0,Ie=window;const Z={waitRemove(...t){t.forEach(e=>{typeof e=="string"&&U.waitNodeList(e).then(n=>{n.forEach(a=>a.remove());});});},createBlockCSSNode(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),U.createElement("style",{type:"text/css",innerHTML:`${e.join(`,
`)}{display: none !important;}`})},addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),be(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){const e=typeof ye=="function"?ye(t.keyName):null;return typeof e=="string"&&e?be(e):Z.loadStyleLink(t.url)},async loadStyleLink(t){let e=document.createElement("link");return e.rel="stylesheet",e.type="text/css",e.href=t,new Promise(n=>{U.onReady(()=>{document.head.appendChild(e),n(e);});})},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(n=>{e.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.startsWith("data:")||t.match(/^http(s|):\/\//i)?t:t.startsWith("//")?(t.startsWith("///")||(t=window.location.protocol+t),t):(t.startsWith("/")||(t+="/"),t=window.location.origin+t,t)},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;try{let e=new URL(t);return e.protocol="https:",e.toString()}catch{return t}},lockScroll(...t){let e=document.createElement("style");e.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...t||[]);return n.forEach(a=>{a.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(e),{recovery(){n.forEach(a=>{a.classList.remove("pops-overflow-hidden-important");}),e.remove();}}},async getClipboardText(){function t(a){navigator.clipboard.readText().then(o=>{a(o);}).catch(o=>{C.error("读取剪贴板内容失败👉",o),a("");});}function e(a){navigator.permissions.query({name:"clipboard-read"}).then(o=>{t(a);}).catch(o=>{C.error("申请剪贴板权限失败，尝试直接读取👉",o.message??o.name??o.stack),t(a);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(a=>{if(!n()){a("");return}document.hasFocus()?e(a):window.addEventListener("focus",()=>{e(a);},{once:true});})},escapeHtml(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(t,e,n=5e3){let a,o=n-e,r=e,s=async i=>{const l=await t(i);if(typeof l=="boolean"&&l||i){b.workerClearTimeout(a);return}if(r+=e,r>o){s(true);return}a=b.workerSetTimeout(()=>{s(false);},e);};s(false);},findParentNode(t,e,n){if(n){let a=U.closest(t,n);if(a)return a.querySelector(e)}else return U.matches(t,e)?t:U.closest(t,e)},toStr(t){const e="__undefined__placeholder__replaced__str__";return JSON.stringify(t,(a,o)=>o===void 0?e:o,2).replace(new RegExp(`"${e}"`,"g"),"undefined")}},oe="GM_Panel",De="data-init",W="data-key",H="data-default-value",Ae="data-init-more-value",Me="data-plugin-search-config",F="data-storage-api",$e={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{P.showPanel(le.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){P.isTopWindow()&&ie.add(this.$data.menuOption);},addMenuOption(t){Array.isArray(t)||(t=[t]),this.$data.menuOption.push(...t);},updateMenuOption(t){Array.isArray(t)||(t=[t]),t.forEach(e=>{let n=this.$data.menuOption.findIndex(a=>a.key===e.key);n!==-1&&(this.$data.menuOption[n]=e);});},getMenuOption(t=0){return this.$data.menuOption[t]},deleteMenuOption(t=0){this.$data.menuOption.splice(t,1);}};class Te{storageKey;listenerData;constructor(e){if(typeof e=="string"){const n=e.trim();if(n=="")throw new Error("key参数不能为空字符串");this.storageKey=n;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new j.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this);}getLocalValue(){let e=ee(this.storageKey);return e==null&&(e={},this.setLocalValue(e)),e}setLocalValue(e){te(this.storageKey,e);}set(e,n){const a=this.get(e),o=this.getLocalValue();Reflect.set(o,e,n),this.setLocalValue(o),this.emitValueChangeListener(e,n,a);}get(e,n){const a=this.getLocalValue();return Reflect.get(a,e)??n}getAll(){return this.getLocalValue()}delete(e){const n=this.get(e),a=this.getLocalValue();Reflect.deleteProperty(a,e),this.setLocalValue(a),this.emitValueChangeListener(e,void 0,n);}has(e){const n=this.getLocalValue();return Reflect.has(n,e)}keys(){const e=this.getLocalValue();return Reflect.ownKeys(e)}values(){const e=this.getLocalValue();return Reflect.ownKeys(e).map(n=>Reflect.get(e,n))}clear(){ae(this.storageKey);}addValueChangeListener(e,n){const a=Math.random(),o=this.listenerData.get(e)||[];return o.push({id:a,key:e,callback:n}),this.listenerData.set(e,o),a}removeValueChangeListener(e){let n=false;for(const[a,o]of this.listenerData.entries()){for(let r=0;r<o.length;r++){const s=o[r];(typeof e=="string"&&s.key===e||typeof e=="number"&&s.id===e)&&(o.splice(r,1),r--,n=true);}this.listenerData.set(a,o);}return n}async emitValueChangeListener(...e){const[n,a,o]=e;if(!this.listenerData.has(n))return;const r=this.listenerData.get(n);for(let s=0;s<r.length;s++){const i=r[s];if(typeof i.callback=="function"){let l,c;e.length===1||(e.length===2?l=a:e.length===3&&(l=a,c=o)),await i.callback(n,l,c);}}}}const N=new Te(oe),K={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},G={setting:{get width(){return K.width<550?"88vw":K.width<700?"550px":"700px"},get height(){return K.height<450?"70vh":K.height<550?"450px":"550px"}},settingMiddle:{get width(){return K.width<350?"88vw":"350px"}},info:{get width(){return K.width<350?"88vw":"350px"},get height(){return K.height<250?"88vh":"250px"}}},P={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new b.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new b.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new b.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new b.Dictionary),this.__onceExecData},get scriptName(){return pe},get panelConfig(){return this.__panelConfig},set panelConfig(t){this.__panelConfig=t;},key:oe,attributeKeyName:W,attributeDefaultValueName:H},init(){this.initContentDefaultValue(),$e.init();},isTopWindow(){return L.top===L.self},initContentDefaultValue(){const t=a=>{if(!a.attributes||a.type==="button"||a.type==="container"||a.type==="deepMenu")return;const o=a.attributes;let r=o[De];if(typeof r=="function"){let c=r();if(typeof c=="boolean"&&!c)return}let s=new Map,i=o[W];if(i!=null){const c=o[H];s.set(i,c);}let l=o[Ae];if(typeof l=="object"&&l&&Object.keys(l).forEach(c=>{const p=l[c];s.set(c,p);}),!s.size){C.warn("请先配置键",a);return}if(a.type==="switch"){let c=typeof a.disabled=="function"?a.disabled():a.disabled;typeof c=="boolean"&&c&&this.$data.contentConfigInitDisabledKeys.push(...s.keys());}for(const[c,p]of s.entries())this.setDefaultValue(c,p);},e=a=>{for(let o=0;o<a.length;o++){let r=a[o];t(r);let s=r.views;s&&Array.isArray(s)&&e(s);}},n=[...le.getAllContentConfig()];for(let a=0;a<n.length;a++){let o=n[a];if(!o.views)continue;const r=o.views;r&&Array.isArray(r)&&e(r);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(t,e){this.$data.contentConfigInitDefaultValue.has(t)&&C.warn("请检查该key(已存在): "+t),this.$data.contentConfigInitDefaultValue.set(t,e);},getDefaultValue(t){return this.$data.contentConfigInitDefaultValue.get(t)},setValue(t,e){N.set(t,e);},getValue(t,e){const n=N.get(t);return n??(this.$data.contentConfigInitDefaultValue.has(t)?this.$data.contentConfigInitDefaultValue.get(t):e)},deleteValue(t){N.delete(t);},hasKey(t){return N.has(t)},addValueChangeListener(t,e,n){const a=N.addValueChangeListener(t,e);if(n?.immediate||n?.immediateAll){const o=this.getValue(t);n?.immediate?e(t,o,o):n?.immediateAll&&P.emitMenuValueChange(t,o,o);}return a},removeValueChangeListener(t){N.removeValueChangeListener(t);},emitMenuValueChange(t,e,n){N.emitValueChangeListener(t,e,n);},async exec(t,e,n,a=true){const o=this;let r;typeof t=="string"||Array.isArray(t)?r=()=>t:r=t;let s=false;const i=r();let l=[];Array.isArray(i)?(s=true,l=i):l.push(i);const c=l.find(m=>!this.$data.contentConfigInitDefaultValue.has(m));if(c){C.warn(`${c} 键不存在`);return}const p=JSON.stringify(l);if(a&&this.$data.onceExecMenuData.has(p))return this.$data.onceExecMenuData.get(p);let u=[];const d=[];let f=[];const g=(m,x)=>{let M=[],R=[],v=[];if(Array.isArray(x))v=v.concat(x);else {const y=E=>{if(typeof E=="object"&&E!=null)if(E instanceof Element)v.push(E);else {const{$css:D,destory:O}=E;D!=null&&(Array.isArray(D)?v=v.concat(D):v.push(D)),typeof O=="function"&&v.push(O);}else v.push(E);};if(x!=null&&Array.isArray(x))for(const E of x)y(E);else y(x);}const I=y=>{if(y!=null){if(y instanceof Element){M.push(y);return}if(typeof y=="function"){R.push(y);return}}};for(const y of v){const E=I(y);if(typeof E=="boolean"&&!E)break;if(Array.isArray(y))for(const D of y){const O=I(D);if(typeof O=="boolean"&&!O)break}}V(),k(),m&&(u=u.concat(M),f=f.concat(R));},$=m=>!!this.getValue(m),V=()=>{for(let m=0;m<u.length;m++)u[m]?.remove(),u.splice(m,1),m--;},k=()=>{for(let m=0;m<f.length;m++){const x=f[m];x(),f.splice(m,1),m--;}},T=()=>{let m=false;return typeof n=="function"?m=n(l):m=l.every(x=>$(x)),m},_=async m=>{const x=T();let M=[];if(x){const R=l.map(v=>this.getValue(v));M=await e({key:l,value:s?R:R[0],addStoreValue:(...v)=>g(x,v)});}g(x,M);};a&&l.forEach(m=>{const x=this.addValueChangeListener(m,(M,R,v)=>_());d.push(x);}),await _();const S={reload(){this.clearStoreStyleElements(),this.destory(),_();},clear(){this.clearStoreStyleElements(),this.destory(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreStyleElements:()=>V(),destory(){return k()},removeValueChangeListener:()=>{d.forEach(m=>{this.removeValueChangeListener(m);});},clearOnceExecMenuData(){a&&o.$data.onceExecMenuData.delete(p);}};return this.$data.onceExecMenuData.set(p,S),S},async execMenu(t,e,n=false,a=false){return await this.exec(t,async o=>await e(o),o=>o.every(s=>{let i=!!this.getValue(s);return P.$data.contentConfigInitDisabledKeys.includes(s)&&(i=false,C.warn(`.execMenu${a?"Once":""} ${s} 被禁用`)),n&&(i=!i),i}),a)},async execMenuOnce(t,e,n=false,a=false){const o=await this.execMenu(t,e,n,true);if(a&&o){const r=()=>{o.reload();};this.removeUrlChangeWithExecMenuOnceListener(t),this.addUrlChangeWithExecMenuOnceListener(t,r);}return o},deleteExecMenuOnce(t){return t=this.transformKey(t),this.$data.onceExecMenuData.delete(t),this.$data.urlChangeReloadMenuExecOnce.delete(t),N.removeValueChangeListener(t)},onceExec(t,e){if(t=this.transformKey(t),typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(t)||(e(),this.$data.onceExecData.set(t,1));},deleteOnceExec(t){t=this.transformKey(t),this.$data.onceExecData.delete(t);},addUrlChangeWithExecMenuOnceListener(t,e){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.set(t,e);},removeUrlChangeWithExecMenuOnceListener(t){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.delete(t);},hasUrlChangeWithExecMenuOnceListener(t){return t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.has(t)},async emitUrlChangeWithExecMenuOnceEvent(t){const e=this.$data.urlChangeReloadMenuExecOnce.values();for(const n of e)await n(t);},showPanel(t,e=`${pe}-设置`,n=false,a=false){this.$data.$panel=null,this.$data.panelContent=[];const o=t.findIndex(s=>(typeof s.isBottom=="function"?s.isBottom():!!s.isBottom)&&s.id==="script-version")!==-1;!n&&!o&&t.push(...le.getDefaultBottomContentConfig());const r=A.panel({title:{text:e,position:"center",html:false,style:""},content:t,btn:{close:{enable:true,callback:(s,i)=>{s.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(s,i)=>{s(),this.$data.$panel=null;}},width:G.setting.width,height:G.setting.height,drag:true,only:true,style:`
        .pops-switch-shortcut-wrapper{
          margin-right: 5px;
          display: inline-flex;
        }
        .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
          cursor: pointer;
        }
        `,...this.$data.panelConfig});this.$data.$panel=r,this.$data.panelContent=t,a||this.registerConfigSearch({$panel:r,content:t});},registerConfigSearch(t){const{$panel:e,content:n}=t,a=async(d,f)=>{if(d==null)return;const g=await f(d);return g&&typeof g.isFind=="boolean"&&g.isFind?g.data:await a(g.data,f)},o=(d,f)=>{const g=new IntersectionObserver($=>{$.forEach(V=>{V.isIntersecting&&(f?.(),g.disconnect());});},{root:null,threshold:1});g.observe(d),d.scrollIntoView({behavior:"smooth",block:"center"});},r=d=>{const f="pops-flashing";h.onAnimationend(d,()=>{d.classList.remove(f);}),d.classList.add(f);},s=d=>{if(d.type==="dblclick"&&u)return;h.preventEvent(d),l=null;const f=A.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:G.settingMiddle.width,height:"auto",drag:true,style:`
					${A.config.cssText.panelCSS}

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
				`});f.$shadowRoot.querySelector(".search-wrapper");const g=f.$shadowRoot.querySelector(".search-config-text"),$=f.$shadowRoot.querySelector(".search-result-wrapper");g.focus();const V=()=>{h.empty($);},k=_=>{const S=b.queryProperty(_,M=>M?.next?{isFind:false,data:M.next}:{isFind:true,data:M}),m=h.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${S.matchedData?.path}</div>
							<div class="search-result-item-description">${S.matchedData?.description??""}</div>
						`}),x=A.config.PanelHandlerComponents();return h.on(m,"click",M=>{const v=e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[_.index];if(!v){w.error(`左侧项下标${_.index}不存在`);return}v.scrollIntoView({behavior:"smooth",block:"center"}),v.click(),a(_.next,async I=>{if(I?.next){const y=await h.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(E=>{const D=Reflect.get(E,x.$data.nodeStoreConfigKey);return typeof D=="object"&&D!=null&&D.text===I.name}),2500);if(y)y.click();else return w.error("未找到对应的二级菜单"),{isFind:true,data:I};return {isFind:false,data:I.next}}else {const y=await h.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(E=>Reflect.get(E,x.$data.nodeStoreConfigKey)===I.matchedData?.formConfig),2500);if(y){o(y);const E=y.closest(".pops-panel-forms-fold[data-fold-enable]");E&&(E.querySelector(".pops-panel-forms-fold-container").click(),await b.sleep(500)),o(y,()=>{r(y);});}else w.error("未找到对应的菜单项");return {isFind:true,data:I}}});}),m},T=_=>{const S=new RegExp(_,"i"),m=[],x=(R,v)=>{for(let I=0;I<R.length;I++){const y=R[I],E=y.views;if(E&&Array.isArray(E)){const D=b.deepClone(v);if(y.type==="deepMenu"){const O=b.queryProperty(D,z=>z?.next?{isFind:false,data:z.next}:{isFind:true,data:z});O.next={name:y.text};}x(E,D);}else {let D,O;if(y.type==="own"){const q=Reflect.get(y.attributes||{},Me);q&&(typeof q.text=="string"&&(D=q.text),typeof q.desc=="string"&&(O=q.desc));}else D=y.text,O=Reflect.get(y,"description");const z=[D,O],me=z.findIndex(q=>{if(typeof q=="string")return q.match(S)});if(me!==-1){const q=b.deepClone(v),ge=b.queryProperty(q,B=>B?.next?{isFind:false,data:B.next}:{isFind:true,data:B});ge.next={name:D,matchedData:{path:"",formConfig:y,matchedText:z[me],description:O}};const xe=[];b.queryProperty(q,B=>{const ue=B?.name;return typeof ue=="string"&&ue.trim()!==""&&xe.push(ue),B?.next?{isFind:false,data:B.next}:{isFind:true,data:B}});const Ve=xe.join(Z.escapeHtml(" - "));ge.next.matchedData.path=Ve,m.push(q);}}}};for(let R=0;R<n.length;R++){const v=n[R];if(!v.views||v.isBottom&&v.id==="script-version")continue;const I=v.views;if(I&&Array.isArray(I)){let y=v.title;typeof y=="function"&&(y=y()),x(I,{index:R,name:y});}}const M=document.createDocumentFragment();for(const R of m){let v=k(R);M.appendChild(v);}V(),$.append(M);};h.on(g,"input",b.debounce(_=>{h.preventEvent(_);let S=h.val(g).trim();if(S===""){V();return}T(S);},200));};e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(d=>{h.on(d,"dblclick",s);});let l=null,c=false,p,u=false;h.on(e.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(d,f)=>{u=true,clearTimeout(p),p=void 0,c&&l===f?(c=false,l=null,s(d)):(p=setTimeout(()=>{c=false;},200),c=true,l=f);},{capture:true}),e.$shadowRoot.appendChild(h.createElement("style",{type:"text/css",textContent:`
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
				`}));},transformKey(t){if(Array.isArray(t)){const e=t.sort();return JSON.stringify(e)}else return t},getDynamicValue(t,e){const n=this;let a=false,o=e;const r=this.addValueChangeListener(t,(s,i)=>{o=i;});return {get value(){return a||(a=true,o=n.getValue(t,e)),o},destory(){n.removeValueChangeListener(r);}}}},X={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},b=j.noConflict(),h=U.noConflict(),A=re,C=new b.Log(J,L.console||Ie.console),pe=J?.script?.name||void 0,Le=re.config.Utils.AnyTouch(),Fe=false;C.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});w.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(t){const e=t.setting.type;if(e==="loading")return  false;const n=t.setting.content;return e==="warning"?C.warn(n):e==="error"?C.error(n):C.info(n),false},get position(){return P.getValue(X.qmsg_config_position.key,X.qmsg_config_position.defaultValue)},get maxNums(){return P.getValue(X.qmsg_config_maxnums.key,X.qmsg_config_maxnums.defaultValue)},get showReverse(){return P.getValue(X.qmsg_config_showreverse.key,X.qmsg_config_showreverse.defaultValue)},get zIndex(){let t=j.getMaxZIndex(),e=re.config.InstanceUtils.getPopsMaxZIndex().zIndex;return j.getMaxValue(t,e)+100}});A.GlobalConfig.setGlobalConfig({zIndex:()=>{const t=j.getMaxZIndex(void 0,void 0,n=>{if(n?.classList?.contains("qmsg-shadow-container")||n?.closest("qmsg")&&n.getRootNode()instanceof ShadowRoot)return  false}),e=re.config.InstanceUtils.getPopsMaxZIndex().zIndex;return j.getMaxValue(t,e)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const ie=new b.GM_Menu({GM_getValue:ee,GM_setValue:te,GM_registerMenuCommand:Se,GM_unregisterMenuCommand:Re}),se=new b.Httpx({xmlHttpRequest:Ee,logDetails:Fe});se.interceptors.request.use(t=>t);se.interceptors.response.use(void 0,t=>(C.error("拦截器-请求错误",t),t.type==="onabort"?w.warning("请求取消",{consoleLogContent:true}):t.type==="onerror"?w.error("请求异常",{consoleLogContent:true}):t.type==="ontimeout"?w.error("请求超时",{consoleLogContent:true}):w.error("其它错误",{consoleLogContent:true}),t));L.Object.defineProperty,L.Object.keys,L.Object.values,L.Function.prototype.apply,L.Function.prototype.call,L.Element.prototype.appendChild,L.setTimeout.bind(L),L.clearTimeout.bind(L),L.setInterval.bind(L),L.clearInterval.bind(L);const be=h.addStyle.bind(h);U.selector.bind(U);U.selectorAll.bind(U);new b.GM_Cookie;const le={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new b.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(t){Array.isArray(t)||(t=[t]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,t);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(t=0){return this.$data.contentConfig.get(t)??[]},getDefaultBottomContentConfig(){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let t=false,e;const n=(r,s)=>{typeof s!="string"&&(s=Z.toStr(s));const i=new Blob([s]),l=globalThis.URL.createObjectURL(i);h.createElement("a",{href:l,download:r}).click(),b.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(l);},500);},a=()=>{const r=u=>{const d=A.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="local">本地导入</div>
            <div class="btn-control" data-mode="network">网络导入</div>
            <div class="btn-control" data-mode="clipboard">剪贴板导入</div>`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(T,_){T.close();}}},drag:true,mask:{enable:true},width:G.info.width,height:G.info.height,style:`
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
          }`}),f=d.$shadowRoot.querySelector(".btn-control[data-mode='local']"),g=d.$shadowRoot.querySelector(".btn-control[data-mode='network']"),$=d.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),V=async T=>{confirm("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）")&&(typeof ne=="function"?typeof ae=="function"?(ne().forEach(m=>{ae(m);}),w.success("已清空脚本存储的配置")):w.error("不支持GM_deleteValue函数，无法执行删除脚本配置"):w.error("不支持GM_listValues函数，无法清空脚本存储的配置")),typeof we=="function"?we(T):Object.keys(T).forEach(m=>{const x=T[m];te(m,x);}),w.success("配置导入完毕");},k=T=>new Promise(async _=>{const S=b.toJSON(T);Object.keys(S).length===0?w.warning("解析为空配置，不导入"):await V(S),_(true);});h.on(f,"click",T=>{h.preventEvent(T),d.close();const _=h.createElement("input",{type:"file",accept:".json"});h.on(_,["propertychange","input"],S=>{if(!_.files?.length)return;const m=_.files[0],x=new FileReader;x.onload=()=>{k(x.result);},x.readAsText(m,"UTF-8");}),_.click();}),h.on(g,"click",T=>{h.preventEvent(T),d.close();const _=A.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(x,M){x.close();}},ok:{text:"导入",callback:async(x,M)=>{const R=x.text;if(b.isNull(R)){w.error("请填入完整的url");return}const v=w.loading("正在获取配置..."),I=await se.get(R,{allowInterceptConfig:false});if(v.close(),!I.status){C.error(I),w.error("获取配置失败",{consoleLogContent:true});return}await k(I.data.responseText)&&x.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:G.info.width,height:"auto"}),S=_.$shadowRoot.querySelector("input"),m=_.$shadowRoot.querySelector(".pops-prompt-btn-ok");h.on(S,["input","propertychange"],x=>{h.val(S)===""?h.attr(m,"disabled","true"):h.removeAttr(m,"disabled");}),h.onKeyboard(S,"keydown",(x,M,R)=>{x==="Enter"&&R.length===0&&h.val(S)!==""&&h.emit(m,"click");}),h.emit(S,"input");}),h.on($,"click",async T=>{h.preventEvent(T),d.close();let _=await Z.getClipboardText();if(_.trim()===""){w.warning("获取到的剪贴板内容为空");return}await k(_);});},s=(u=`${pe}_panel-setting-${b.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,d)=>{const f=A.alert({title:{text:"请选择导出方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="export-to-file">导出至文件</div>
            <div class="btn-control" data-mode="export-to-clipboard">导出至剪贴板</div>
            `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(V,k){V.close();}}},drag:true,mask:{enable:true},width:G.info.width,height:G.info.height,style:`
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
          }`}),g=f.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),$=f.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");h.on(g,"click",V=>{h.preventEvent(V);try{n(u,d),f.close();}catch(k){w.error(k.toString(),{consoleLogContent:true});}}),h.on($,"click",async V=>{await b.copy(d)?(w.success("复制成功"),f.close()):w.error("复制失败");});},l=A.confirm({title:{text:"配置",position:"center"},content:{text:`
            <textarea name="config-value" id="config" readonly></textarea>
          `,html:true},btn:{ok:{enable:true,type:"primary",text:"导入",callback(u,d){r();}},cancel:{enable:true,text:"导出",callback(u,d){s(void 0,p);}}},width:K.width<450?"90vw":"450px",height:"auto",style:`
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
        `}).$shadowRoot.querySelector("textarea"),c={};if(typeof ne=="function")ne().forEach(d=>{const f=ee(d);Reflect.set(c,d,f);});else {w.warning("不支持函数GM_listValues，仅导出菜单配置");const u=ee(oe);Reflect.set(c,oe,u);}const p=Z.toStr(c);l.value=p;},o=()=>{let r=J?.script?.supportURL||J?.script?.namespace;typeof r=="string"&&b.isNotNull(r)&&window.open(r,"_blank");};return [{id:"script-version",title:`版本：${J?.script?.version||"未知"}`,isBottom:true,views:[],clickFirstCallback(){return  false},afterRender(r){new Le(r.$asideLiElement).on("tap",function(i){clearTimeout(e),e=void 0,t?(t=false,a()):(e=setTimeout(()=>{t=false,o();},200),t=true);});}}]},setDefaultBottomContentConfig(t){this.$data.__defaultBottomContentConfig=t;}},Pe={get ajaxHooker(){return this.__ajaxHooker==null&&(this.__ajaxHooker=b.ajaxHooker()),this.__ajaxHooker},hook(){this.ajaxHooker.hook(t=>{let e=Z.fixUrl(t.url);try{if(!new URL(e).pathname.endsWith(".m3u8"))return;t.response=o=>{let r=o.responseText;if(r.trim()===""||!r.includes("#EXT-X-ENDLIST"))return;let s=he.runRule(r);o.responseText=s;};}catch(n){C.error("m3u8过滤器 hook network出错",n);}});},unhook(){this.ajaxHooker.unhook();}},ve=function(t,e,n,a,o,r,s){const i={text:t,type:"select",description:r,attributes:{},props:{},getValue(){return this.props[F].get(e,n)},callback(l){if(l==null)return;const c=l.value;if(C.info(`选择：${l.text}`),typeof o=="function"&&o(l))return;this.props[F].set(e,c);},data:a};return Reflect.set(i.attributes,W,e),Reflect.set(i.attributes,H,n),ce.initComponentsStorageApi("select",i,{get(l,c){return P.getValue(l,c)},set(l,c){P.setValue(l,c);}}),i},Y=function(t,e,n,a,o,r,s,i,l){const c={text:t,type:"switch",description:o,disabled:s,attributes:{},props:{},getValue(){return this.props[F].get(e,n)},callback(p,u){const d=!!u;C.success(`${d?"开启":"关闭"} ${t}`),this.props[F].set(e,d);},afterAddToUListCallBack:(...p)=>{}};return Reflect.set(c.attributes,W,e),Reflect.set(c.attributes,H,n),ce.initComponentsStorageApi("switch",c,{get(p,u){return P.getValue(p,u)},set(p,u){P.setValue(p,u);}}),c},Oe=function(t,e,n,a,o,r="",s,i){const l={text:t,type:"textarea",attributes:{},props:{},description:a,placeholder:r,disabled:s,getValue(){const p=this.props[F].get(e,n);return Array.isArray(p)?p.join(`
`):p},callback(c,p){this.props[F].set(e,p);}};return Reflect.set(l.attributes,W,e),Reflect.set(l.attributes,H,n),ce.initComponentsStorageApi("switch",l,{get(c,p){return P.getValue(c,p)},set(c,p){P.setValue(c,p);}}),l},ce={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new j.Dictionary),this.__storeApiFn}},getStorageApi(t){if(this.hasStorageApi(t))return this.$data.storeApiValue.get(t)},hasStorageApi(t){return this.$data.storeApiValue.has(t)},setStorageApi(t,e){this.$data.storeApiValue.set(t,e);},initComponentsStorageApi(t,e,n){let a;this.hasStorageApi(t)?a=this.getStorageApi(t):a=n,this.setComponentsStorageApiProperty(e,a);},setComponentsStorageApiProperty(t,e){Reflect.set(t.props,F,e);}},Ce=function(t,e,n,a,o,r="",s="text",i,l){const c={text:t,type:"input",inputType:s,attributes:{},props:{},description:a,placeholder:r,afterAddToUListCallBack:i,getValue(){return this.props[F].get(e,n)},callback(p,u){p.target.validity.valid,this.props[F].set(e,u);}};return Reflect.set(c.attributes,W,e),Reflect.set(c.attributes,H,n),ce.initComponentsStorageApi("input",c,{get(p,u){return P.getValue(p,u)},set(p,u){P.setValue(p,u);}}),c};class qe{option;constructor(e){this.option=e;}async showView(){const e=A.confirm({title:{text:this.option.title,position:"center"},content:{text:`
        <form class="rule-form-container" onsubmit="return false">
            <ul class="rule-form-ulist"></ul>
            <input type="submit" style="display: none;" />
        </form>
        `,html:true},btn:b.assign({ok:{callback:async()=>{await r();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
      ${A.config.cssText.panelCSS}
      
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
      `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),n=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");const a=e.$shadowRoot.querySelector(".rule-form-ulist"),o=await this.option.getView(await this.option.data());h.append(a,o);const r=async()=>{(await this.option.onsubmit(n,await this.option.data())).success&&(e.close(),typeof this.option.dialogCloseCallBack=="function"&&await this.option.dialogCloseCallBack(true));};return e}}class Ue{option;constructor(e){this.option=e;}async showView(e){const n=A.confirm({title:{text:this.option.title,position:"center"},content:{text:`
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
      ${A.config.cssText.panelCSS}

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
      `,btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async i=>{this.showEditView(false,await this.option.getAddData(),n.$shadowRoot);}},close:{enable:true,callback(i){n.close();}},cancel:{enable:false},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:i=>{let l=A.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async c=>{if(C.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){w.error("清理失败");return}else w.success("清理成功");await this.updateDeleteAllBtnText(n.$shadowRoot),this.clearContent(n.$shadowRoot),l.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh"}),{$searchContainer:a,$externalSelect:o,$ruleValueSelect:r,$searchInput:s}=this.parseViewElement(n.$shadowRoot);if(this.option.bottomControls?.filter?.enable){let i=null,l=null;Array.isArray(this.option.bottomControls?.filter?.option)&&h.append(o,this.option.bottomControls?.filter?.option.map(u=>{const d=h.createElement("option",{innerText:u.name});return Reflect.set(d,"data-value",u),d})),Array.isArray(this.option.bottomControls?.filter?.inputOption)&&h.append(r,this.option.bottomControls?.filter?.inputOption.map(u=>{const d=h.createElement("option",{innerText:u.name});return Reflect.set(d,"data-value",u),d})),h.on(o,"change",async u=>{const d=o[o.selectedIndex],f=Reflect.get(d,"data-value");typeof f?.selectedCallBack=="function"&&f.selectedCallBack(f),i=f,await p(false);}),h.on(r,"change",async u=>{const d=r[r.selectedIndex],f=Reflect.get(d,"data-value");typeof f?.selectedCallBack=="function"&&f.selectedCallBack(f),l=f,await p(false);}),h.onInput(s,b.debounce(async()=>{await p(false);}));const c=()=>{const u=o[o.selectedIndex];i=Reflect.get(u,"data-value");const d=r[r.selectedIndex];l=Reflect.get(d,"data-value");},p=async u=>{this.clearContent(n.$shadowRoot),u&&c();const d=await this.option.data(),f=[],g=h.val(s);for(let $=0;$<d.length;$++){const V=d[$];if(typeof e=="function"){const k=await e(V);if(typeof k=="boolean"&&!k)continue}if(i){const k=await i?.filterCallBack?.(V);if(typeof k=="boolean"&&!k)continue}if(l){let k=true;if(g===""?k=true:k=false,k||(k=await l?.filterCallBack?.(V,g)),!k)continue}f.push(V);}await this.appendRuleItemElement(n.$shadowRoot,f);};if(typeof e=="object"&&e!=null){let u;typeof e.external=="number"?u=e.external:u=Array.from(o.options).findIndex(f=>Reflect.get(f,"data-value").value===e.external),u!==-1&&(o.selectedIndex=u);let d;typeof e.rule=="number"?d=e.rule:d=Array.from(r.options).findIndex(f=>Reflect.get(f,"data-value").value===e.rule),d!==-1&&(r.selectedIndex=d);}await p(true);}else h.hide(a,false);}showEditView(e,n,a,o,r,s){let i=async c=>{if(c){if(typeof s=="function"){let p=await this.option.getData(n);s(p);}}else if(e||await this.option.deleteData(n),typeof r=="function"){let p=await this.option.getData(n);r(p);}};new qe({title:e?"编辑":"添加",data:()=>n,dialogCloseCallBack:i,getView:async c=>await this.option.itemControls.edit.getView(c,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async(c,p)=>{c.close(),await i(false);}},close:{callback:async(c,p)=>{c.close(),await i(false);}}},onsubmit:async(c,p)=>{let u=await this.option.itemControls.edit.onsubmit(c,e,p);return u.success?e?(w.success("修改成功"),a&&await this.updateRuleItemElement(u.data,o,a)):a&&await this.appendRuleItemElement(a,u.data):e&&C.error("修改失败"),u},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(e){const n=e.querySelector(".rule-view-container"),a=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other"),o=e.querySelector(".rule-view-search-container"),r=o.querySelector(".pops-panel-select .select-rule-status"),s=o.querySelector(".pops-panel-select .select-rule-value"),i=o.querySelector(".pops-panel-input input");return {$container:n,$deleteBtn:a,$searchContainer:o,$externalSelect:r,$ruleValueSelect:s,$searchInput:i}}parseRuleItemElement(e){const n=e.querySelector(".rule-controls-enable"),a=n.querySelector(".pops-panel-switch"),o=n.querySelector(".pops-panel-switch__input"),r=n.querySelector(".pops-panel-switch__core"),s=e.querySelector(".rule-controls-edit"),i=e.querySelector(".rule-controls-delete");return {$enable:n,$enableSwitch:a,$enableSwitchInput:o,$enableSwitchCore:r,$edit:s,$delete:i,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,n){const a=await this.option.getDataItemName(e),o=h.createElement("div",{className:"rule-item",innerHTML:`
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
					${A.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${A.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(o,"data-rule",e);const r="pops-panel-switch-is-checked",{$enable:s,$enableSwitch:i,$enableSwitchCore:l,$enableSwitchInput:c,$delete:p,$edit:u}=this.parseRuleItemElement(o);return this.option.itemControls.enable.enable?(h.on(l,"click",async d=>{let f=false;i.classList.contains(r)?(i.classList.remove(r),f=false):(i.classList.add(r),f=true),c.checked=f,await this.option.itemControls.enable.callback(e,f);}),await this.option.itemControls.enable.getEnable(e)&&i.classList.add(r)):s.remove(),this.option.itemControls.edit.enable?h.on(u,"click",d=>{h.preventEvent(d),this.showEditView(true,e,n,o,f=>{e=null,e=f;});}):u.remove(),this.option.itemControls.delete.enable?h.on(p,"click",d=>{h.preventEvent(d);const f=A.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async g=>{C.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(w.success("成功删除该数据"),o.remove(),await this.updateDeleteAllBtnText(n),f.close()):w.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):p.remove(),o}async appendRuleItemElement(e,n){const{$container:a}=this.parseViewElement(e),o=[],r=Array.isArray(n)?n:[n];for(let s=0;s<r.length;s++){const i=r[s],l=await this.createRuleItemElement(i,e);o.push(l);}return h.append(a,o),await this.updateDeleteAllBtnText(e),o}async updateRuleContaienrElement(e){this.clearContent(e);const{$container:n}=this.parseViewElement(e),a=await this.option.data();await this.appendRuleItemElement(e,a),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,n,a){const o=await this.createRuleItemElement(e,a);n.after(o),n.remove();}clearContent(e){const{$container:n}=this.parseViewElement(e);h.html(n,"");}setDeleteBtnText(e,n,a=false){const{$deleteBtn:o}=this.parseViewElement(e);a?h.html(o,n):h.text(o,n);}async updateDeleteAllBtnText(e){let n=await this.option.data();this.setDeleteBtnText(e,`清空所有(${n.length})`);}}const de={duration2Text(t){const e=Math.floor(t/3600),n=Math.floor(t%3600/60),a=parseInt((t%60).toString());return [e.toString().padStart(2,"0"),n.toString().padStart(2,"0"),a.toString().padStart(2,"0")].join(":")},similar(t,e){if(!t||!e)return 0;var n=t.length>e.length?t.length:e.length,a=t.length,o=e.length,r=[],s=function(f,g,$){return f<g?f<$?f:$:g<$?g:$},i,l,c,p,u;if(a===0)return o;if(o===0)return a;for(i=0;i<=a;i++)r[i]=[],r[i][0]=i;for(l=0;l<=o;l++)r[0][l]=l;for(i=1;i<=a;i++)for(c=t.charAt(i-1),l=1;l<=o;l++)p=e.charAt(l-1),c===p?u=0:u=1,r[i][l]=s(r[i-1][l]+1,r[i][l-1]+1,r[i-1][l-1]+u);return 1-r[a][o]/n}},ke={updateISMatchedRuleMenu(){let t={key:"matched-rule-count",text:`🔧 当前页面执行规则数量： ${he.$data.matchedRule.length}`,autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{}};ie.update(t);},updateIsFilterAdsDurationInfoMenu(t){let e={key:"is-filter-segment-duration",text:`🍵 已过滤时长：${t}s`,autoReload:false,isStoreValue:false,showText(n){return n},callback:()=>{}};ie.update(e);}},fe={parse_EXTINF(t,e,n){let a=Number(t.replace(/(^#EXTINF:\s*|,)/g,"")),o=n,r=n+a;return {filePath:e.trim(),startDuration:o,endDuration:r,duration:a}}},_e=t=>{Q.$data.isFilterDuration+=t.duration,ke.updateIsFilterAdsDurationInfoMenu(Q.$data.isFilterDuration);},Q={$data:{isFilterDuration:0},filterAdsWithFilePathLength(t,e={handlerFilePath(n){return n}}){let n=t.split(`
`),a=new b.Dictionary,o=0;for(let s=0;s<n.length;s++){const i=n[s].trim();if(!i.startsWith("#EXTINF:"))continue;let{duration:l,startDuration:c,endDuration:p,filePath:u}=fe.parse_EXTINF(i,n[s+1],o);if(e&&typeof e.handlerFilePath=="function"){let g=e.handlerFilePath(u);typeof g=="string"&&(u=g);}o+=l;let d=u.length.toString(),f=a.get(d)||[];f.push({filePath:u,startDuration:c,endDuration:p,duration:l,index:s}),a.set(d,f),s++;}let r=[];if(a.forEach((s,i)=>{r.push({filePathLength:i,segmentsInfoList:s});}),r=b.sortListByProperty(r,s=>s.segmentsInfoList.length,true),r.splice(0,1),r.length){let s=[];r.forEach(l=>{l.segmentsInfoList.forEach(c=>{s.push({index:c.index,data:c});});});let i=0;for(let l=0;l<n.length;l++){let c=s.findIndex(p=>p.index===l+i);if(c!=-1){let p=s[c];C.info(`通杀1：过滤广告片段 ==> 索引：${l+i} 文件名：${p.data.filePath} 开始：${de.duration2Text(p.data.startDuration)} 持续时长：${p.data.duration}s`),n.splice(l,2),l-=2,s.splice(c,1),i=i+2;}}}return r.forEach(s=>{s.segmentsInfoList.forEach(i=>{_e(i);});}),{m3u8Text:n.join(`
`),filterInfo:r}},filterAdsWithFilePathSimilar(t,e={similarCompareValue:.35,includePercent:.5,handlerFilePath(n){return n}}){let n=t.split(`
`),a=[],o=0;for(let i=0;i<n.length;i++){const l=n[i].trim();if(!l.startsWith("#EXTINF:"))continue;let{duration:c,startDuration:p,endDuration:u,filePath:d}=fe.parse_EXTINF(l,n[i+1],o);if(e&&typeof e.handlerFilePath=="function"){let f=e.handlerFilePath(d);typeof f=="string"&&(d=f);}o+=c,a.push({filePath:d,startDuration:p,endDuration:u,duration:c,index:i}),i++;}let r=[],s=0;for(let i=0;i<a.length;i++){const l=a[i];let c=true,p=0,u=a;for(let d=0;d<u.length;d++){const f=u[d];if(de.similar(l.filePath,f.filePath)>=e.similarCompareValue&&p++,p/u.length>e.includePercent){c=false;break}}c&&(r.push(l),C.info(`通杀2：过滤广告片段 ==> 索引：${l.index} 文件名：${l.filePath} 开始：${de.duration2Text(l.startDuration)} 持续时长：${l.duration}s`),n.splice(l.index-s,2),s+=2);}return r.forEach(i=>{_e(i);}),{m3u8Text:n.join(`
`),filterInfo:r}}},he={$key:{STORAGE_KEY:"m3u8-rule"},$data:{matchedRule:[]},init(){let t=this.getData();this.registerMenu(t);for(let e=0;e<t.length;e++)try{const n=t[e];n.enable&&window.location.href.match(new RegExp(n.data.url))&&this.$data.matchedRule.push(n);}catch(n){C.error("m3u8过滤器 ==> 规则初始化出错",n);}this.$data.matchedRule.length&&(C.info("m3u8过滤器 ==> 当前网站执行的规则：",this.$data.matchedRule),Pe.hook(),ke.updateISMatchedRuleMenu());},registerMenu(t){ie.update([{key:"m3u8-rule",text:`⚙ 自定义规则（${t.length}条）`,autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showView();}},{key:"m3u8-export-rule",text:"⚙ 规则导出",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.exportRule("m3u8-filter-rule.json");}},{key:"m3u8-import-rule",text:"⚙ 规则导入",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.importRule();}}]);},getTemplateData(){return {uuid:b.generateUUID(),enable:true,name:"",data:{url:"",commonFilterAdsSegmentsFilePathLength:true,commonFilterAdsSegmentsFilePathSimilar:false,ownFilterCode:""}}},showView(){let t=A.config.PanelHandlerComponents();function e(a){return {get(o,r){return a[o]??r},set(o,r){a[o]=r;}}}new Ue({title:"m3u8自定义规则",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:a=>a.name,updateData:a=>this.updateData(a),deleteData:a=>this.deleteData(a),getData:a=>this.getData().find(s=>s.uuid===a.uuid)??a,itemControls:{enable:{enable:true,getEnable(a){return a.enable},callback:(a,o)=>{a.enable=o,this.updateData(a);}},edit:{enable:true,getView:(a,o)=>{let r=document.createDocumentFragment();o||(a=this.getTemplateData());let s=Y("启用","enable",true);Reflect.set(s.props,F,e(a));let i=t.createSectionContainerItem_switch(s).$el,l=Ce("规则名称","name","","",void 0,"必填");Reflect.set(l.props,F,e(a));let c=t.createSectionContainerItem_input(l).$el,p=Ce("匹配网址","url","","",void 0,"必填，可正则，注意转义");Reflect.set(p.props,F,e(a.data));let u=t.createSectionContainerItem_input(p).$el,d=Y("广告通杀1","commonFilterAdsSegmentsFilePathLength",true,void 0,"使用文件名称长度比较");Reflect.set(d.props,F,e(a.data));let f=t.createSectionContainerItem_switch(d).$el,g=Y("广告通杀2","commonFilterAdsSegmentsFilePathSimilar",false,void 0,"使用文件名称相似度比较");Reflect.set(g.props,F,e(a.data));let $=t.createSectionContainerItem_switch(g).$el,V=Oe("自定义过滤js","ownFilterCode","","",void 0,`参数：
    [m3u8Text]：需要处理的m3u8字符串
返回：[String]

例如：
m3u8Text = m3u8Text.replace('','');
return m3u8Text;
`);Reflect.set(V.props,F,e(a.data));let k=t.createSectionContainerItem_textarea(V).$el;return r.appendChild(i),r.appendChild(c),r.appendChild(u),r.appendChild(f),r.appendChild($),r.appendChild(k),r},onsubmit:(a,o,r)=>{let s=a.querySelectorAll(".rule-form-ulist > li"),i=this.getTemplateData();return o&&(i.uuid=r.uuid),s.forEach(l=>{let c=Reflect.get(l,t.$data.nodeStoreConfigKey),p=Reflect.get(c,"attributes"),u=Reflect.get(l,F),d=Reflect.get(p,W),f=Reflect.get(p,H),g=u.get(d,f);Reflect.has(i,d)?Reflect.set(i,d,g):Reflect.has(i.data,d)?Reflect.set(i.data,d,g):C.error(`${d}不在数据中`);}),i.name.trim()===""?(w.error("规则名称不能为空"),{success:false,data:i}):i.data.url.trim()===""?(w.error("匹配网址不能为空"),{success:false,data:i}):o?{success:this.updateData(i),data:i}:{success:this.addData(i),data:i}},style:`
                        li[data-key="ownFilterCode"]{
                            gap: 30px;
                        }
                        li[data-key="ownFilterCode"] .pops-panel-textarea{
                            flex: 1;
                        }
                        li[data-key="ownFilterCode"] .pops-panel-textarea textarea{
                            height: 300px;
                        }
                    `},delete:{enable:true,deleteCallBack:a=>this.deleteData(a)}},bottomControls:{filter:{enable:true,option:[{name:"启用",value:"enable",filterCallBack(a){return a.enable}},{name:"未启用",value:"notEnable",filterCallBack(a){return !a.enable}},{name:"当前网址运行的规则",value:"currentUrl",filterCallBack(a){try{return !!window.location.href.match(new RegExp(a.data.url))}catch{return  false}}}],inputOption:[{name:"规则名称",value:"name",filterCallBack(a,o){return !!a.name.match(o)}},{name:"网址",value:"url",filterCallBack(a,o){return !!a.data.url.match(o)}}]}}}).showView();},runRule(t){let e=t;for(let n=0;n<this.$data.matchedRule.length;n++)try{const o=this.$data.matchedRule[n].data;if(o.commonFilterAdsSegmentsFilePathLength){const{filterInfo:r,m3u8Text:s}=Q.filterAdsWithFilePathLength(e);e=s;}if(o.commonFilterAdsSegmentsFilePathSimilar){const{filterInfo:r,m3u8Text:s}=Q.filterAdsWithFilePathSimilar(e);e=s;}if(o.ownFilterCode.trim()!==""){let s=new Function("m3u8Text","M3U8Filter","M3U8Parser",o.ownFilterCode)(e,Q,fe);typeof s=="string"?e=s:C.error("m3u8过滤器 ==> 自定义过滤js代码执行结果不是字符串",s);}break}catch(a){C.error("m3u8过滤器 ==> 执行m3u8文本过滤时出现异常",a);}return e},getData(){return ee(this.$key.STORAGE_KEY,[])},setData(t){te(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(a=>a.uuid==t.uuid)===-1?(e.push(t),te(this.$key.STORAGE_KEY,e),true):false},updateData(t){let e=this.getData(),n=e.findIndex(o=>o.uuid==t.uuid),a=false;return n!==-1&&(a=true,e[n]=t),this.setData(e),a},deleteData(t){let e=this.getData(),n=e.findIndex(o=>o.uuid==t.uuid),a=false;return n!==-1&&(a=true,e.splice(n,1)),this.setData(e),a},clearData(){ae(this.$key.STORAGE_KEY);},exportRule(t="rule.json"){let e=this.getData(),n=new Blob([JSON.stringify(e,null,4)]),a=window.URL.createObjectURL(n),o=h.createElement("a");o.href=a,o.download=t,o.click(),setTimeout(()=>{window.URL.revokeObjectURL(a);},1500);},importRule(t){let e=A.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(i,l){i.close();}}},mask:{enable:true},drag:true,width:G.info.width,height:G.info.height,style:`
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),n=e.$shadowRoot.querySelector(".btn-control[data-mode='local']"),a=e.$shadowRoot.querySelector(".btn-control[data-mode='network']"),o=e.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),r=i=>{let l=this.getData(),c=[];for(let p=0;p<i.length;p++){const u=i[p];l.findIndex(f=>f.uuid===u.uuid)!==-1||c.push(u);}l=l.concat(c),this.setData(l),w.success(`共 ${i.length} 条规则，新增 ${c.length} 条`),t?.();},s=i=>new Promise(l=>{let c=b.toJSON(i);if(!Array.isArray(c)){C.error(c),w.error("导入失败，格式不符合（不是数组）",{consoleLogContent:true}),l(false);return}if(!c.length){w.error("导入失败，解析出的数据为空",{consoleLogContent:true}),l(false);return}r(c),l(true);});h.on(n,"click",i=>{h.preventEvent(i),e.close();let l=h.createElement("input",{type:"file",accept:".json"});h.on(l,["propertychange","input"],c=>{if(!l.files?.length)return;let p=l.files[0],u=new FileReader;u.onload=()=>{s(u.result);},u.readAsText(p,"UTF-8");}),l.click();}),h.on(a,"click",i=>{h.preventEvent(i),e.close();let l=A.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(u,d){u.close();}},ok:{text:"导入",callback:async(u,d)=>{let f=u.text;if(b.isNull(f)){w.error("请填入完整的url");return}let g=w.loading("正在获取配置..."),$=await se.get(f,{allowInterceptConfig:false});if(g.close(),!$.status){C.error($),w.error("获取配置失败",{consoleLogContent:true});return}await s($.data.responseText)&&u.close();}},cancel:{enable:false}},mask:{enable:true},drag:true,width:G.info.width,height:"auto"}),c=l.$shadowRoot.querySelector("input"),p=l.$shadowRoot.querySelector(".pops-prompt-btn-ok");h.on(c,["input","propertychange"],u=>{h.val(c)===""?h.attr(p,"disabled","true"):h.removeAttr(p,"disabled");}),h.onKeyboard(c,"keydown",(u,d,f)=>{u==="Enter"&&f.length===0&&h.val(c)!==""&&h.emit(p,"click");}),h.emit(c,"input");}),h.on(o,"click",async i=>{h.preventEvent(i),e.close();let l=await b.getClipboardInfo();if(l.error!=null){w.error(l.error.toString());return}if(l.content.trim()===""){w.warning("获取到的剪贴板内容为空");return}await s(l.content);});}},Ge={id:"component-common",title:"通用",views:[{text:"Toast配置",type:"container",views:[ve("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],t=>{C.info("设置当前Qmsg弹出位置"+t.text);},"Toast显示在页面九宫格的位置"),ve("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),Y("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]},{text:"Cookie配置",type:"container",views:[Y("启用","httpx-use-cookie-enable",false,void 0,"启用后，将根据下面的配置进行添加cookie"),Y("使用document.cookie","httpx-use-document-cookie",false,void 0,"自动根据请求的域名来设置对应的cookie")]}]};le.addContentConfig([Ge]);$e.deleteMenuOption();P.init();he.init();

})(Qmsg, DOMUtils, pops, Utils);