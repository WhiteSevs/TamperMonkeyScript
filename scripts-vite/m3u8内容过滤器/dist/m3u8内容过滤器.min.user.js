// ==UserScript==
// @name         m3u8内容过滤器
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.12.26
// @author       WhiteSevs
// @description  自定义规则对网页中的m3u8的请求内容进行过滤
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.9.10/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.8.7/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@3.1.2/dist/index.umd.min.js
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

(function (x, O, re, K) {
    'use strict';

    var ae=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,we=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,ee=typeof GM_getValue<"u"?GM_getValue:void 0,J=typeof GM_info<"u"?GM_info:void 0,ne=typeof GM_listValues<"u"?GM_listValues:void 0,Se=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,te=typeof GM_setValue<"u"?GM_setValue:void 0,ye=typeof GM_setValues<"u"?GM_setValues:void 0,Re=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Ee=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,N=typeof unsafeWindow<"u"?unsafeWindow:void 0,De=window;const Z={waitRemove(...t){t.forEach(e=>{typeof e=="string"&&O.waitNodeList(e).then(n=>{n.forEach(a=>a.remove());});});},createBlockCSSNode(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),O.createElement("style",{type:"text/css",innerHTML:`${e.join(`,
`)}{display: none !important;}`})},addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),be(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){const e=typeof we=="function"?we(t.keyName):null;return typeof e=="string"&&e?be(e):Z.loadStyleLink(t.url)},async loadStyleLink(t){let e=document.createElement("link");return e.rel="stylesheet",e.type="text/css",e.href=t,new Promise(n=>{O.onReady(()=>{document.head.appendChild(e),n(e);});})},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(n=>{e.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.startsWith("data:")||t.match(/^http(s|):\/\//i)?t:t.startsWith("//")?(t.startsWith("///")||(t=window.location.protocol+t),t):(t.startsWith("/")||(t+="/"),t=window.location.origin+t,t)},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;try{let e=new URL(t);return e.protocol="https:",e.toString()}catch{return t}},lockScroll(...t){let e=document.createElement("style");e.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...t||[]);return n.forEach(a=>{a.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(e),{recovery(){n.forEach(a=>{a.classList.remove("pops-overflow-hidden-important");}),e.remove();}}},async getClipboardText(){function t(a){navigator.clipboard.readText().then(o=>{a(o);}).catch(o=>{v.error("读取剪贴板内容失败👉",o),a("");});}function e(a){navigator.permissions.query({name:"clipboard-read"}).then(o=>{t(a);}).catch(o=>{v.error("申请剪贴板权限失败，尝试直接读取👉",o.message??o.name??o.stack),t(a);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(a=>{if(!n()){a("");return}document.hasFocus()?e(a):window.addEventListener("focus",()=>{e(a);},{once:true});})},escapeHtml(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(t,e,n=5e3){let a,o=n-e,s=e,r=async l=>{let i=await t(l);if(typeof i=="boolean"&&!i||l){y.workerClearTimeout(a);return}if(s+=e,s>o){r(true);return}a=y.workerSetTimeout(()=>{r(false);},e);};r(false);},findParentNode(t,e,n){if(n){let a=O.closest(t,n);if(a)return a.querySelector(e)}else return O.matches(t,e)?t:O.closest(t,e)},toStr(t){const e="__undefined__placeholder__replaced__str__";return JSON.stringify(t,(a,o)=>o===void 0?e:o,2).replace(new RegExp(`"${e}"`,"g"),"undefined")}},oe="GM_Panel",Ae="data-init",W="data-key",j="data-default-value",Ie="data-init-more-value",Me="data-plugin-search-config",M="data-storage-api",$e={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{L.showPanel(le.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){L.isTopWindow()&&ie.add(this.$data.menuOption);},addMenuOption(t){Array.isArray(t)||(t=[t]),this.$data.menuOption.push(...t);},updateMenuOption(t){Array.isArray(t)||(t=[t]),t.forEach(e=>{let n=this.$data.menuOption.findIndex(a=>a.key===e.key);n!==-1&&(this.$data.menuOption[n]=e);});},getMenuOption(t=0){return this.$data.menuOption[t]},deleteMenuOption(t=0){this.$data.menuOption.splice(t,1);}};class Fe{storageKey;listenerData;constructor(e){if(typeof e=="string"){const n=e.trim();if(n=="")throw new Error("key参数不能为空字符串");this.storageKey=n;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new K.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this);}getLocalValue(){let e=ee(this.storageKey);return e==null&&(e={},this.setLocalValue(e)),e}setLocalValue(e){te(this.storageKey,e);}set(e,n){const a=this.get(e),o=this.getLocalValue();Reflect.set(o,e,n),this.setLocalValue(o),this.emitValueChangeListener(e,n,a);}get(e,n){const a=this.getLocalValue();return Reflect.get(a,e)??n}getAll(){return this.getLocalValue()}delete(e){const n=this.get(e),a=this.getLocalValue();Reflect.deleteProperty(a,e),this.setLocalValue(a),this.emitValueChangeListener(e,void 0,n);}has(e){const n=this.getLocalValue();return Reflect.has(n,e)}keys(){const e=this.getLocalValue();return Reflect.ownKeys(e)}values(){const e=this.getLocalValue();return Reflect.ownKeys(e).map(n=>Reflect.get(e,n))}clear(){ae(this.storageKey);}addValueChangeListener(e,n){const a=Math.random(),o=this.listenerData.get(e)||[];return o.push({id:a,key:e,callback:n}),this.listenerData.set(e,o),a}removeValueChangeListener(e){let n=false;for(const[a,o]of this.listenerData.entries()){for(let s=0;s<o.length;s++){const r=o[s];(typeof e=="string"&&r.key===e||typeof e=="number"&&r.id===e)&&(o.splice(s,1),s--,n=true);}this.listenerData.set(a,o);}return n}async emitValueChangeListener(...e){const[n,a,o]=e;if(!this.listenerData.has(n))return;let s=this.listenerData.get(n);for(let r=0;r<s.length;r++){const l=s[r];if(typeof l.callback=="function"){let i=this.get(n),c,u;typeof o<"u"&&e.length>=2?u=o:u=i,typeof a<"u"&&e.length>2?c=a:c=i,await l.callback(n,c,u);}}}}const G=new Fe(oe),B={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},q={setting:{get width(){return B.width<550?"88vw":B.width<700?"550px":"700px"},get height(){return B.height<450?"70vh":B.height<550?"450px":"550px"}},settingMiddle:{get width(){return B.width<350?"88vw":"350px"}},info:{get width(){return B.width<350?"88vw":"350px"},get height(){return B.height<250?"88vh":"250px"}}},L={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new y.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new y.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new y.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new y.Dictionary),this.__onceExecData},get scriptName(){return pe},get panelConfig(){return this.__panelConfig},set panelConfig(t){this.__panelConfig=t;},key:oe,attributeKeyName:W,attributeDefaultValueName:j},init(){this.initContentDefaultValue(),$e.init();},isTopWindow(){return N.top===N.self},initContentDefaultValue(){const t=a=>{if(!a.attributes||a.type==="button"||a.type==="container"||a.type==="deepMenu")return;const o=a.attributes;let s=o[Ae];if(typeof s=="function"){let c=s();if(typeof c=="boolean"&&!c)return}let r=new Map,l=o[W];if(l!=null){const c=o[j];r.set(l,c);}let i=o[Ie];if(typeof i=="object"&&i&&Object.keys(i).forEach(c=>{const u=i[c];r.set(c,u);}),!r.size){v.warn(["请先配置键",a]);return}if(a.type==="switch"){let c=typeof a.disabled=="function"?a.disabled():a.disabled;typeof c=="boolean"&&c&&this.$data.contentConfigInitDisabledKeys.push(...r.keys());}for(const[c,u]of r.entries())this.setDefaultValue(c,u);},e=a=>{for(let o=0;o<a.length;o++){let s=a[o];t(s);let r=s.views;r&&Array.isArray(r)&&e(r);}},n=[...le.getAllContentConfig()];for(let a=0;a<n.length;a++){let o=n[a];if(!o.views)continue;const s=o.views;s&&Array.isArray(s)&&e(s);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(t,e){this.$data.contentConfigInitDefaultValue.has(t)&&v.warn("请检查该key(已存在): "+t),this.$data.contentConfigInitDefaultValue.set(t,e);},getDefaultValue(t){return this.$data.contentConfigInitDefaultValue.get(t)},setValue(t,e){G.set(t,e);},getValue(t,e){const n=G.get(t);return n??(this.$data.contentConfigInitDefaultValue.has(t)?this.$data.contentConfigInitDefaultValue.get(t):e)},deleteValue(t){G.delete(t);},hasKey(t){return G.has(t)},addValueChangeListener(t,e){return G.addValueChangeListener(t,e)},removeValueChangeListener(t){G.removeValueChangeListener(t);},emitMenuValueChange(t,e,n){G.emitValueChangeListener(t,e,n);},async exec(t,e,n,a=true){const o=this;let s;typeof t=="string"||Array.isArray(t)?s=()=>t:s=t;let r=false;const l=s();let i=[];Array.isArray(l)?(r=true,i=l):i.push(l);const c=i.find(g=>!this.$data.contentConfigInitDefaultValue.has(g));if(c){v.warn(`${c} 键不存在`);return}const u=JSON.stringify(i);if(a&&this.$data.onceExecMenuData.has(u))return this.$data.onceExecMenuData.get(u);let d=[];const h=[];let f=[];const m=(g,w)=>{let D=[],R=[],b=[];if(Array.isArray(w))b=b.concat(w);else {const $=C=>{if(typeof C=="object"&&C!=null)if(C instanceof Element)b.push(C);else {const{$css:F,destory:I}=C;F!=null&&(Array.isArray(F)?b=b.concat(F):b.push(F)),typeof I=="function"&&b.push(I);}else b.push(C);};if(w!=null&&Array.isArray(w))for(const C of w)$(C);else $(w);}for(const $ of b)if($!=null){if($ instanceof Element){D.push($);continue}if(typeof $=="function"){f.push($);continue}}g?(d=d.concat(D),f=f.concat(R)):(E(),T());},V=g=>!!this.getValue(g),E=()=>{for(let g=0;g<d.length;g++)d[g]?.remove(),d.splice(g,1),g--;},T=()=>{for(let g=0;g<f.length;g++){const w=f[g];w(),f.splice(g,1),g--;}},A=()=>{let g=false;return typeof n=="function"?g=n(i):g=i.every(w=>V(w)),g},_=async g=>{if(A()){const D=i.map(b=>this.getValue(b)),R=await e({value:r?D:D[0],addStoreValue:(...b)=>m(true,b)});m(true,R);}else m(false,[]);};a&&i.forEach(g=>{const w=this.addValueChangeListener(g,(D,R,b)=>_());h.push(w);}),await _();const k={reload(){this.clearStoreStyleElements(),this.destory(),_();},clear(){this.clearStoreStyleElements(),this.destory(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreStyleElements:()=>E(),destory(){return T()},removeValueChangeListener:()=>{h.forEach(g=>{this.removeValueChangeListener(g);});},clearOnceExecMenuData(){a&&o.$data.onceExecMenuData.delete(u);}};return this.$data.onceExecMenuData.set(u,k),k},async execMenu(t,e,n=false,a=false){return await this.exec(t,async o=>await e(o),o=>o.every(r=>{let l=!!this.getValue(r);return L.$data.contentConfigInitDisabledKeys.includes(r)&&(l=false,v.warn(`.execMenu${a?"Once":""} ${r} 被禁用`)),n&&(l=!l),l}),a)},async execMenuOnce(t,e,n=false,a=false){const o=await this.execMenu(t,e,n,true);if(a&&o){const s=()=>{o.reload();};this.removeUrlChangeWithExecMenuOnceListener(t),this.addUrlChangeWithExecMenuOnceListener(t,s);}return o},deleteExecMenuOnce(t){return t=this.transformKey(t),this.$data.onceExecMenuData.delete(t),this.$data.urlChangeReloadMenuExecOnce.delete(t),G.removeValueChangeListener(t)},onceExec(t,e){if(t=this.transformKey(t),typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(t)||(e(),this.$data.onceExecData.set(t,1));},deleteOnceExec(t){t=this.transformKey(t),this.$data.onceExecData.delete(t);},addUrlChangeWithExecMenuOnceListener(t,e){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.set(t,e);},removeUrlChangeWithExecMenuOnceListener(t){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.delete(t);},hasUrlChangeWithExecMenuOnceListener(t){return t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.has(t)},async emitUrlChangeWithExecMenuOnceEvent(t){const e=this.$data.urlChangeReloadMenuExecOnce.values();for(const n of e)await n(t);},showPanel(t,e=`${pe}-设置`,n=false,a=false){this.$data.$panel=null,this.$data.panelContent=[];let o=t.findIndex(r=>(typeof r.isBottom=="function"?r.isBottom():!!r.isBottom)&&r.id==="script-version")!==-1;!n&&!o&&t.push(...le.getDefaultBottomContentConfig());let s=S.panel({title:{text:e,position:"center",html:false,style:""},content:t,btn:{close:{enable:true,callback:(r,l)=>{r.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(r,l)=>{r(),this.$data.$panel=null;}},width:q.setting.width,height:q.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=s,this.$data.panelContent=t,a||this.registerConfigSearch({$panel:s,content:t});},registerConfigSearch(t){const{$panel:e,content:n}=t,a=async(h,f)=>{if(h==null)return;const m=await f(h);return m&&typeof m.isFind=="boolean"&&m.isFind?m.data:await a(m.data,f)},o=(h,f)=>{const m=new IntersectionObserver(V=>{V.forEach(E=>{E.isIntersecting&&(f?.(),m.disconnect());});},{root:null,threshold:1});m.observe(h),h.scrollIntoView({behavior:"smooth",block:"center"});},s=h=>{const f="pops-flashing";p.onAnimationend(h,()=>{h.classList.remove(f);}),h.classList.add(f);},r=h=>{if(h.type==="dblclick"&&d)return;p.preventEvent(h),i=null;const f=S.alert({title:{text:"搜索配置",position:"center"},content:{text:`
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
				`});f.$shadowRoot.querySelector(".search-wrapper");const m=f.$shadowRoot.querySelector(".search-config-text"),V=f.$shadowRoot.querySelector(".search-result-wrapper");m.focus();const E=()=>{p.empty(V);},T=_=>{const k=y.queryProperty(_,D=>D?.next?{isFind:false,data:D.next}:{isFind:true,data:D}),g=p.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${k.matchedData?.path}</div>
							<div class="search-result-item-description">${k.matchedData?.description??""}</div>
						`}),w=S.config.PanelHandlerComponents();return p.on(g,"click",D=>{const b=e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[_.index];if(!b){x.error(`左侧项下标${_.index}不存在`);return}b.scrollIntoView({behavior:"smooth",block:"center"}),b.click(),a(_.next,async $=>{if($?.next){const C=await p.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(F=>{const I=Reflect.get(F,w.$data.nodeStoreConfigKey);return typeof I=="object"&&I!=null&&I.text===$.name}),2500);if(C)C.click();else return x.error("未找到对应的二级菜单"),{isFind:true,data:$};return {isFind:false,data:$.next}}else {const C=await p.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(F=>Reflect.get(F,w.$data.nodeStoreConfigKey)===$.matchedData?.formConfig),2500);if(C){o(C);const F=C.closest(".pops-panel-forms-fold[data-fold-enable]");F&&(F.querySelector(".pops-panel-forms-fold-container").click(),await y.sleep(500)),o(C,()=>{s(C);});}else x.error("未找到对应的菜单项");return {isFind:true,data:$}}});}),g},A=_=>{const k=new RegExp(_,"i"),g=[],w=(R,b)=>{for(let $=0;$<R.length;$++){const C=R[$],F=C.views;if(F&&Array.isArray(F)){const I=y.deepClone(b);if(C.type==="deepMenu"){const H=y.queryProperty(I,z=>z?.next?{isFind:false,data:z.next}:{isFind:true,data:z});H.next={name:C.text};}w(F,I);}else {let I,H;if(C.type==="own"){const P=Reflect.get(C.attributes||{},Me);P&&(typeof P.text=="string"&&(I=P.text),typeof P.desc=="string"&&(H=P.desc));}else I=C.text,H=Reflect.get(C,"description");const z=[I,H],ge=z.findIndex(P=>{if(typeof P=="string")return P.match(k)});if(ge!==-1){const P=y.deepClone(b),me=y.queryProperty(P,U=>U?.next?{isFind:false,data:U.next}:{isFind:true,data:U});me.next={name:I,matchedData:{path:"",formConfig:C,matchedText:z[ge],description:H}};const xe=[];y.queryProperty(P,U=>{const ue=U?.name;return typeof ue=="string"&&ue.trim()!==""&&xe.push(ue),U?.next?{isFind:false,data:U.next}:{isFind:true,data:U}});const Ve=xe.join(Z.escapeHtml(" - "));me.next.matchedData.path=Ve,g.push(P);}}}};for(let R=0;R<n.length;R++){const b=n[R];if(!b.views||b.isBottom&&b.id==="script-version")continue;const $=b.views;if($&&Array.isArray($)){let C=b.title;typeof C=="function"&&(C=C()),w($,{index:R,name:C});}}const D=document.createDocumentFragment();for(const R of g){let b=T(R);D.appendChild(b);}E(),V.append(D);};p.on(m,"input",y.debounce(_=>{p.preventEvent(_);let k=p.val(m).trim();if(k===""){E();return}A(k);},200));};e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(h=>{p.on(h,"dblclick",r);});let i=null,c=false,u,d=false;p.on(e.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(h,f)=>{d=true,clearTimeout(u),u=void 0,c&&i===f?(c=false,i=null,r(h)):(u=setTimeout(()=>{c=false;},200),c=true,i=f);},{capture:true}),e.$shadowRoot.appendChild(p.createElement("style",{type:"text/css",textContent:`
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
				`}));},transformKey(t){if(Array.isArray(t)){const e=t.sort();return JSON.stringify(e)}else return t}},X={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},y=K.noConflict(),p=O.noConflict(),S=re,v=new y.Log(J,N.console||De.console),pe=J?.script?.name||void 0,Le=re.config.Utils.AnyTouch(),Te=false;v.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});x.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(t){const e=t.setting.type;if(e==="loading")return  false;const n=t.setting.content;return e==="warning"?v.warn(n):e==="error"?v.error(n):v.info(n),true},get position(){return L.getValue(X.qmsg_config_position.key,X.qmsg_config_position.defaultValue)},get maxNums(){return L.getValue(X.qmsg_config_maxnums.key,X.qmsg_config_maxnums.defaultValue)},get showReverse(){return L.getValue(X.qmsg_config_showreverse.key,X.qmsg_config_showreverse.defaultValue)},get zIndex(){let t=K.getMaxZIndex(),e=re.config.InstanceUtils.getPopsMaxZIndex().zIndex;return K.getMaxValue(t,e)+100}});S.GlobalConfig.setGlobalConfig({zIndex:()=>{const t=K.getMaxZIndex(void 0,void 0,n=>{if(n?.classList?.contains("qmsg-shadow-container")||n?.closest("qmsg")&&n.getRootNode()instanceof ShadowRoot)return  false}),e=re.config.InstanceUtils.getPopsMaxZIndex().zIndex;return K.getMaxValue(t,e)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const ie=new y.GM_Menu({GM_getValue:ee,GM_setValue:te,GM_registerMenuCommand:Se,GM_unregisterMenuCommand:Re}),se=new y.Httpx({xmlHttpRequest:Ee,logDetails:Te});se.interceptors.request.use(t=>t);se.interceptors.response.use(void 0,t=>(v.error("拦截器-请求错误",t),t.type==="onabort"?x.warning("请求取消",{consoleLogContent:true}):t.type==="onerror"?x.error("请求异常",{consoleLogContent:true}):t.type==="ontimeout"?x.error("请求超时",{consoleLogContent:true}):x.error("其它错误",{consoleLogContent:true}),t));N.Object.defineProperty,N.Function.prototype.apply,N.Function.prototype.call,N.Element.prototype.appendChild,N.setTimeout;const be=p.addStyle.bind(p);O.selector.bind(O);O.selectorAll.bind(O);new y.GM_Cookie;const le={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new y.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(t){Array.isArray(t)||(t=[t]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,t);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(t=0){return this.$data.contentConfig.get(t)??[]},getDefaultBottomContentConfig(){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let t=false,e;const n=(s,r)=>{typeof r!="string"&&(r=Z.toStr(r));const l=new Blob([r]),i=globalThis.URL.createObjectURL(l);p.createElement("a",{href:i,download:s}).click(),y.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(i);},500);},a=()=>{const s=d=>{const h=S.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="local">本地导入</div>
            <div class="btn-control" data-mode="network">网络导入</div>
            <div class="btn-control" data-mode="clipboard">剪贴板导入</div>`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(A,_){A.close();}}},drag:true,mask:{enable:true},width:q.info.width,height:q.info.height,style:`
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
          }`}),f=h.$shadowRoot.querySelector(".btn-control[data-mode='local']"),m=h.$shadowRoot.querySelector(".btn-control[data-mode='network']"),V=h.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),E=async A=>{confirm("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）")&&(typeof ne=="function"?typeof ae=="function"?(ne().forEach(g=>{ae(g);}),x.success("已清空脚本存储的配置")):x.error("不支持GM_deleteValue函数，无法执行删除脚本配置"):x.error("不支持GM_listValues函数，无法清空脚本存储的配置")),typeof ye=="function"?ye(A):Object.keys(A).forEach(g=>{const w=A[g];te(g,w);}),x.success("配置导入完毕");},T=A=>new Promise(async _=>{const k=y.toJSON(A);Object.keys(k).length===0?x.warning("解析为空配置，不导入"):await E(k),_(true);});p.on(f,"click",A=>{p.preventEvent(A),h.close();const _=p.createElement("input",{type:"file",accept:".json"});p.on(_,["propertychange","input"],k=>{if(!_.files?.length)return;const g=_.files[0],w=new FileReader;w.onload=()=>{T(w.result);},w.readAsText(g,"UTF-8");}),_.click();}),p.on(m,"click",A=>{p.preventEvent(A),h.close();const _=S.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(w,D){w.close();}},ok:{text:"导入",callback:async(w,D)=>{const R=w.text;if(y.isNull(R)){x.error("请填入完整的url");return}const b=x.loading("正在获取配置..."),$=await se.get(R,{allowInterceptConfig:false});if(b.close(),!$.status){v.error($),x.error("获取配置失败",{consoleLogContent:true});return}await T($.data.responseText)&&w.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:q.info.width,height:"auto"}),k=_.$shadowRoot.querySelector("input"),g=_.$shadowRoot.querySelector(".pops-prompt-btn-ok");p.on(k,["input","propertychange"],w=>{p.val(k)===""?p.attr(g,"disabled","true"):p.removeAttr(g,"disabled");}),p.onKeyboard(k,"keydown",(w,D,R)=>{w==="Enter"&&R.length===0&&p.val(k)!==""&&p.emit(g,"click");}),p.emit(k,"input");}),p.on(V,"click",async A=>{p.preventEvent(A),h.close();let _=await Z.getClipboardText();if(_.trim()===""){x.warning("获取到的剪贴板内容为空");return}await T(_);});},r=(d=`${pe}_panel-setting-${y.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,h)=>{const f=S.alert({title:{text:"请选择导出方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="export-to-file">导出至文件</div>
            <div class="btn-control" data-mode="export-to-clipboard">导出至剪贴板</div>
            `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(E,T){E.close();}}},drag:true,mask:{enable:true},width:q.info.width,height:q.info.height,style:`
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
          }`}),m=f.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),V=f.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");p.on(m,"click",E=>{p.preventEvent(E);try{n(d,h),f.close();}catch(T){x.error(T.toString(),{consoleLogContent:true});}}),p.on(V,"click",async E=>{await y.copy(h)?(x.success("复制成功"),f.close()):x.error("复制失败");});},i=S.confirm({title:{text:"配置",position:"center"},content:{text:`
            <textarea name="config-value" id="config" readonly></textarea>
          `,html:true},btn:{ok:{enable:true,type:"primary",text:"导入",callback(d,h){s();}},cancel:{enable:true,text:"导出",callback(d,h){r(void 0,u);}}},width:B.width<450?"90vw":"450px",height:"auto",style:`
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
        `}).$shadowRoot.querySelector("textarea"),c={};if(typeof ne=="function")ne().forEach(h=>{const f=ee(h);Reflect.set(c,h,f);});else {x.warning("不支持函数GM_listValues，仅导出菜单配置");const d=ee(oe);Reflect.set(c,oe,d);}const u=Z.toStr(c);i.value=u;},o=()=>{let s=J?.script?.supportURL||J?.script?.namespace;typeof s=="string"&&y.isNotNull(s)&&window.open(s,"_blank");};return [{id:"script-version",title:`版本：${J?.script?.version||"未知"}`,isBottom:true,views:[],clickFirstCallback(){return  false},afterRender(s){new Le(s.$asideLiElement).on("tap",function(l){clearTimeout(e),e=void 0,t?(t=false,a()):(e=setTimeout(()=>{t=false,o();},200),t=true);});}}]},setDefaultBottomContentConfig(t){this.$data.__defaultBottomContentConfig=t;}},Pe={get ajaxHooker(){return this.__ajaxHooker==null&&(this.__ajaxHooker=y.ajaxHooker()),this.__ajaxHooker},hook(){this.ajaxHooker.hook(t=>{let e=Z.fixUrl(t.url);try{if(!new URL(e).pathname.endsWith(".m3u8"))return;t.response=o=>{let s=o.responseText;if(s.trim()===""||!s.includes("#EXT-X-ENDLIST"))return;let r=fe.runRule(s);o.responseText=r;};}catch(n){v.error("m3u8过滤器 hook network出错",n);}});},unhook(){this.ajaxHooker.unhook();}},Ce=function(t,e,n,a,o,s,r){const l={text:t,type:"select",description:s,attributes:{},props:{},getValue(){return this.props[M].get(e,n)},callback(i){if(i==null)return;const c=i.value;if(v.info(`选择：${i.text}`),typeof o=="function"&&o(i))return;this.props[M].set(e,c);},data:a};return Reflect.set(l.attributes,W,e),Reflect.set(l.attributes,j,n),ce.initComponentsStorageApi("select",l,{get(i,c){return L.getValue(i,c)},set(i,c){L.setValue(i,c);}}),l},Y=function(t,e,n,a,o,s,r,l){const i={text:t,type:"switch",description:o,disabled:r,attributes:{},props:{},getValue(){return this.props[M].get(e,n)},callback(c,u){const d=!!u;v.success(`${d?"开启":"关闭"} ${t}`),this.props[M].set(e,d);},afterAddToUListCallBack:s};return Reflect.set(i.attributes,W,e),Reflect.set(i.attributes,j,n),ce.initComponentsStorageApi("switch",i,{get(c,u){return L.getValue(c,u)},set(c,u){L.setValue(c,u);}}),i},Oe=function(t,e,n,a,o,s="",r,l){const i={text:t,type:"textarea",attributes:{},props:{},description:a,placeholder:s,disabled:r,getValue(){const u=this.props[M].get(e,n);return Array.isArray(u)?u.join(`
`):u},callback(c,u){this.props[M].set(e,u);}};return Reflect.set(i.attributes,W,e),Reflect.set(i.attributes,j,n),ce.initComponentsStorageApi("switch",i,{get(c,u){return L.getValue(c,u)},set(c,u){L.setValue(c,u);}}),i},ce={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new K.Dictionary),this.__storeApiFn}},getStorageApi(t){if(this.hasStorageApi(t))return this.$data.storeApiValue.get(t)},hasStorageApi(t){return this.$data.storeApiValue.has(t)},setStorageApi(t,e){this.$data.storeApiValue.set(t,e);},initComponentsStorageApi(t,e,n){let a;this.hasStorageApi(t)?a=this.getStorageApi(t):a=n,this.setComponentsStorageApiProperty(e,a);},setComponentsStorageApiProperty(t,e){Reflect.set(t.props,M,e);}},ve=function(t,e,n,a,o,s="",r="text",l,i){const c={text:t,type:"input",inputType:r,attributes:{},props:{},description:a,placeholder:s,afterAddToUListCallBack:l,getValue(){return this.props[M].get(e,n)},callback(u,d){u.target.validity.valid,this.props[M].set(e,d);}};return Reflect.set(c.attributes,W,e),Reflect.set(c.attributes,j,n),ce.initComponentsStorageApi("input",c,{get(u,d){return L.getValue(u,d)},set(u,d){L.setValue(u,d);}}),c};class qe{option;constructor(e){this.option=e;}async showView(){let e=S.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist"></ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:true},btn:y.assign({ok:{callback:async()=>{await s();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
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
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),n=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");let a=e.$shadowRoot.querySelector(".rule-form-ulist"),o=await this.option.getView(await this.option.data());a.appendChild(o);const s=async()=>{(await this.option.onsubmit(n,await this.option.data())).success&&(e.close(),await this.option.dialogCloseCallBack(true));};}}class Ue{option;$data={isFilteredData:[]};constructor(e){this.option=e;}showView(){let e=S.alert({title:{text:this.option.title,position:"center"},content:{text:`
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
            `}),n=e.$shadowRoot.querySelector(".filter-container"),a=document.createDocumentFragment();this.option.filterOption.forEach(o=>{let s=p.createElement("button",{innerText:o.name},{type:"button"}),r=async()=>{this.$data.isFilteredData=[],(await this.option.getAllRuleInfo()).forEach(async i=>{await o.filterCallBack(i.data)?p.show(i.$el,false):(p.hide(i.$el,false),this.$data.isFilteredData.push(i.data));}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),e.close();};p.on(s,"click",async l=>{p.preventEvent(l),!(typeof o.callback=="function"&&!await o.callback(l,r))&&await r();}),a.appendChild(s);}),n.appendChild(a);}getFilteredData(){return this.$data.isFilteredData}}class Ge{option;constructor(e){this.option=e;}async showView(e){let n=S.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:true},btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async r=>{this.showEditView(false,await this.option.getAddData(),n.$shadowRoot);}},close:{enable:true,callback(r){n.close();}},cancel:{enable:this.option?.bottomControls?.filter?.enable||false,type:"default",text:"过滤",callback:async(r,l)=>{if(typeof this.option?.bottomControls?.filter?.callback=="function"){let u=await this.option.bottomControls.filter.callback();if(typeof u=="boolean"&&!u)return}let i=()=>Array.from(n.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),c=l.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");if(p.text(c).includes("取消")){let u=await this.option?.bottomControls?.filter?.cancelFilterCallback?.({$button:c,getAllRuleElement:i});if(typeof u=="boolean"&&!u)return;i().forEach(d=>{p.show(d,false);}),p.text(c,"过滤");}else {let u=new Ue({title:this.option.bottomControls?.filter?.title??"过滤规则",filterOption:this.option.bottomControls?.filter?.option||[],execFilterCallBack:async()=>{p.text(c,"取消过滤"),await this.option.bottomControls?.filter?.execFilterCallBack?.();const d=u.getFilteredData();d.length&&p.text(c,`取消过滤(${d.length})`);},getAllRuleInfo:()=>i().map(d=>({data:this.parseRuleItemElement(d).data,$el:d}))});u.showView();}}},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:r=>{let l=S.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async i=>{if(v.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){x.error("清理失败");return}else x.success("清理成功");await this.updateDeleteAllBtnText(n.$shadowRoot),this.clearContent(n.$shadowRoot),l.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
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
            `}),a=await this.option.data(),o=false,s=0;for(let r=0;r<a.length;r++){let l=a[r],i=await this.appendRuleItemElement(n.$shadowRoot,l),c=true;typeof e=="function"?c=e(l):typeof e=="number"&&!isNaN(e)&&(c=await this.option.bottomControls?.filter?.option[e]?.filterCallBack(l)??c),c||(o=true,p.hide(i,false),s++);}if(o){let r=n.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");p.text(r,`取消过滤${s?`(${s})`:""}`);}}showEditView(e,n,a,o,s,r){let l=async c=>{if(c){if(typeof r=="function"){let u=await this.option.getData(n);r(u);}}else if(e||await this.option.deleteData(n),typeof s=="function"){let u=await this.option.getData(n);s(u);}};new qe({title:e?"编辑":"添加",data:()=>n,dialogCloseCallBack:l,getView:async c=>await this.option.itemControls.edit.getView(c,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async(c,u)=>{c.close(),await l(false);}},close:{callback:async(c,u)=>{c.close(),await l(false);}}},onsubmit:async(c,u)=>{let d=await this.option.itemControls.edit.onsubmit(c,e,u);return d.success?e?(x.success("修改成功"),a&&await this.updateRuleItemElement(d.data,o,a)):a&&await this.appendRuleItemElement(a,d.data):e&&v.error("修改失败"),d},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(e){let n=e.querySelector(".rule-view-container"),a=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:n,$deleteBtn:a}}parseRuleItemElement(e){let n=e.querySelector(".rule-controls-enable"),a=n.querySelector(".pops-panel-switch"),o=n.querySelector(".pops-panel-switch__input"),s=n.querySelector(".pops-panel-switch__core"),r=e.querySelector(".rule-controls-edit"),l=e.querySelector(".rule-controls-delete");return {$enable:n,$enableSwitch:a,$enableSwitchInput:o,$enableSwitchCore:s,$edit:r,$delete:l,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,n){let a=await this.option.getDataItemName(e),o=p.createElement("div",{className:"rule-item",innerHTML:`
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
					${S.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${S.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(o,"data-rule",e);let s="pops-panel-switch-is-checked";const{$enable:r,$enableSwitch:l,$enableSwitchCore:i,$enableSwitchInput:c,$delete:u,$edit:d}=this.parseRuleItemElement(o);return this.option.itemControls.enable.enable?(p.on(i,"click",async h=>{let f=false;l.classList.contains(s)?(l.classList.remove(s),f=false):(l.classList.add(s),f=true),c.checked=f,await this.option.itemControls.enable.callback(e,f);}),await this.option.itemControls.enable.getEnable(e)&&l.classList.add(s)):r.remove(),this.option.itemControls.edit.enable?p.on(d,"click",h=>{p.preventEvent(h),this.showEditView(true,e,n,o,f=>{e=null,e=f;});}):d.remove(),this.option.itemControls.delete.enable?p.on(u,"click",h=>{p.preventEvent(h);let f=S.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async m=>{v.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(x.success("成功删除该数据"),o.remove(),await this.updateDeleteAllBtnText(n),f.close()):x.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):u.remove(),o}async appendRuleItemElement(e,n){let{$container:a}=this.parseViewElement(e),o=[],s=Array.isArray(n)?n:[n];for(let r=0;r<s.length;r++){let l=s[r],i=await this.createRuleItemElement(l,e);a.appendChild(i),o.push(i);}return await this.updateDeleteAllBtnText(e),o}async updateRuleContaienrElement(e){this.clearContent(e);const{$container:n}=this.parseViewElement(e);let a=await this.option.data();await this.appendRuleItemElement(e,a),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,n,a){let o=await this.createRuleItemElement(e,a);n.after(o),n.remove();}clearContent(e){const{$container:n}=this.parseViewElement(e);p.html(n,"");}setDeleteBtnText(e,n,a=false){const{$deleteBtn:o}=this.parseViewElement(e);a?p.html(o,n):p.text(o,n);}async updateDeleteAllBtnText(e){let n=await this.option.data();this.setDeleteBtnText(e,`清空所有(${n.length})`);}}const de={duration2Text(t){const e=Math.floor(t/3600),n=Math.floor(t%3600/60),a=parseInt((t%60).toString());return [e.toString().padStart(2,"0"),n.toString().padStart(2,"0"),a.toString().padStart(2,"0")].join(":")},similar(t,e){if(!t||!e)return 0;var n=t.length>e.length?t.length:e.length,a=t.length,o=e.length,s=[],r=function(f,m,V){return f<m?f<V?f:V:m<V?m:V},l,i,c,u,d;if(a===0)return o;if(o===0)return a;for(l=0;l<=a;l++)s[l]=[],s[l][0]=l;for(i=0;i<=o;i++)s[0][i]=i;for(l=1;l<=a;l++)for(c=t.charAt(l-1),i=1;i<=o;i++)u=e.charAt(i-1),c===u?d=0:d=1,s[l][i]=r(s[l-1][i]+1,s[l][i-1]+1,s[l-1][i-1]+d);return 1-s[a][o]/n}},ke={updateISMatchedRuleMenu(){let t={key:"matched-rule-count",text:`🔧 当前页面执行规则数量： ${fe.$data.matchedRule.length}`,autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{}};ie.update(t);},updateIsFilterAdsDurationInfoMenu(t){let e={key:"is-filter-segment-duration",text:`🍵 已过滤时长：${t}s`,autoReload:false,isStoreValue:false,showText(n){return n},callback:()=>{}};ie.update(e);}},he={parse_EXTINF(t,e,n){let a=Number(t.replace(/(^#EXTINF:\s*|,)/g,"")),o=n,s=n+a;return {filePath:e.trim(),startDuration:o,endDuration:s,duration:a}}},_e=t=>{Q.$data.isFilterDuration+=t.duration,ke.updateIsFilterAdsDurationInfoMenu(Q.$data.isFilterDuration);},Q={$data:{isFilterDuration:0},filterAdsWithFilePathLength(t,e={handlerFilePath(n){return n}}){let n=t.split(`
`),a=new y.Dictionary,o=0;for(let r=0;r<n.length;r++){const l=n[r].trim();if(!l.startsWith("#EXTINF:"))continue;let{duration:i,startDuration:c,endDuration:u,filePath:d}=he.parse_EXTINF(l,n[r+1],o);if(e&&typeof e.handlerFilePath=="function"){let m=e.handlerFilePath(d);typeof m=="string"&&(d=m);}o+=i;let h=d.length.toString(),f=a.get(h)||[];f.push({filePath:d,startDuration:c,endDuration:u,duration:i,index:r}),a.set(h,f),r++;}let s=[];if(a.forEach((r,l)=>{s.push({filePathLength:l,segmentsInfoList:r});}),s=y.sortListByProperty(s,r=>r.segmentsInfoList.length,true),s.splice(0,1),s.length){let r=[];s.forEach(i=>{i.segmentsInfoList.forEach(c=>{r.push({index:c.index,data:c});});});let l=0;for(let i=0;i<n.length;i++){let c=r.findIndex(u=>u.index===i+l);if(c!=-1){let u=r[c];v.info(`通杀1：过滤广告片段 ==> 索引：${i+l} 文件名：${u.data.filePath} 开始：${de.duration2Text(u.data.startDuration)} 持续时长：${u.data.duration}s`),n.splice(i,2),i-=2,r.splice(c,1),l=l+2;}}}return s.forEach(r=>{r.segmentsInfoList.forEach(l=>{_e(l);});}),{m3u8Text:n.join(`
`),filterInfo:s}},filterAdsWithFilePathSimilar(t,e={similarCompareValue:.35,includePercent:.5,handlerFilePath(n){return n}}){let n=t.split(`
`),a=[],o=0;for(let l=0;l<n.length;l++){const i=n[l].trim();if(!i.startsWith("#EXTINF:"))continue;let{duration:c,startDuration:u,endDuration:d,filePath:h}=he.parse_EXTINF(i,n[l+1],o);if(e&&typeof e.handlerFilePath=="function"){let f=e.handlerFilePath(h);typeof f=="string"&&(h=f);}o+=c,a.push({filePath:h,startDuration:u,endDuration:d,duration:c,index:l}),l++;}let s=[],r=0;for(let l=0;l<a.length;l++){const i=a[l];let c=true,u=0,d=a;for(let h=0;h<d.length;h++){const f=d[h];if(de.similar(i.filePath,f.filePath)>=e.similarCompareValue&&u++,u/d.length>e.includePercent){c=false;break}}c&&(s.push(i),v.info(`通杀2：过滤广告片段 ==> 索引：${i.index} 文件名：${i.filePath} 开始：${de.duration2Text(i.startDuration)} 持续时长：${i.duration}s`),n.splice(i.index-r,2),r+=2);}return s.forEach(l=>{_e(l);}),{m3u8Text:n.join(`
`),filterInfo:s}}},fe={$key:{STORAGE_KEY:"m3u8-rule"},$data:{matchedRule:[]},init(){let t=this.getData();this.registerMenu(t);for(let e=0;e<t.length;e++)try{const n=t[e];n.enable&&window.location.href.match(new RegExp(n.data.url))&&this.$data.matchedRule.push(n);}catch(n){v.error("m3u8过滤器 ==> 规则初始化出错",n);}this.$data.matchedRule.length&&(v.info("m3u8过滤器 ==> 当前网站执行的规则：",this.$data.matchedRule),Pe.hook(),ke.updateISMatchedRuleMenu());},registerMenu(t){ie.update([{key:"m3u8-rule",text:`⚙ 自定义规则（${t.length}条）`,autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showView();}},{key:"m3u8-export-rule",text:"⚙ 规则导出",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.exportRule("m3u8-filter-rule.json");}},{key:"m3u8-import-rule",text:"⚙ 规则导入",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.importRule();}}]);},getTemplateData(){return {uuid:y.generateUUID(),enable:true,name:"",data:{url:"",commonFilterAdsSegmentsFilePathLength:true,commonFilterAdsSegmentsFilePathSimilar:false,ownFilterCode:""}}},showView(){let t=S.config.PanelHandlerComponents();function e(a){return {get(o,s){return a[o]??s},set(o,s){a[o]=s;}}}new Ge({title:"m3u8自定义规则",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:a=>a.name,updateData:a=>this.updateData(a),deleteData:a=>this.deleteData(a),getData:a=>this.getData().find(r=>r.uuid===a.uuid)??a,itemControls:{enable:{enable:true,getEnable(a){return a.enable},callback:(a,o)=>{a.enable=o,this.updateData(a);}},edit:{enable:true,getView:(a,o)=>{let s=document.createDocumentFragment();o||(a=this.getTemplateData());let r=Y("启用","enable",true);Reflect.set(r.props,M,e(a));let l=t.createSectionContainerItem_switch(r).$el,i=ve("规则名称","name","","",void 0,"必填");Reflect.set(i.props,M,e(a));let c=t.createSectionContainerItem_input(i).$el,u=ve("匹配网址","url","","",void 0,"必填，可正则，注意转义");Reflect.set(u.props,M,e(a.data));let d=t.createSectionContainerItem_input(u).$el,h=Y("广告通杀1","commonFilterAdsSegmentsFilePathLength",true,void 0,"使用文件名称长度比较");Reflect.set(h.props,M,e(a.data));let f=t.createSectionContainerItem_switch(h).$el,m=Y("广告通杀2","commonFilterAdsSegmentsFilePathSimilar",false,void 0,"使用文件名称相似度比较");Reflect.set(m.props,M,e(a.data));let V=t.createSectionContainerItem_switch(m).$el,E=Oe("自定义过滤js","ownFilterCode","","",void 0,`参数：
    [m3u8Text]：需要处理的m3u8字符串
返回：[String]

例如：
m3u8Text = m3u8Text.replace('','');
return m3u8Text;
`);Reflect.set(E.props,M,e(a.data));let T=t.createSectionContainerItem_textarea(E).$el;return s.appendChild(l),s.appendChild(c),s.appendChild(d),s.appendChild(f),s.appendChild(V),s.appendChild(T),s},onsubmit:(a,o,s)=>{let r=a.querySelectorAll(".rule-form-ulist > li"),l=this.getTemplateData();return o&&(l.uuid=s.uuid),r.forEach(i=>{let c=Reflect.get(i,t.$data.nodeStoreConfigKey),u=Reflect.get(c,"attributes"),d=Reflect.get(i,M),h=Reflect.get(u,W),f=Reflect.get(u,j),m=d.get(h,f);Reflect.has(l,h)?Reflect.set(l,h,m):Reflect.has(l.data,h)?Reflect.set(l.data,h,m):v.error(`${h}不在数据中`);}),l.name.trim()===""?(x.error("规则名称不能为空"),{success:false,data:l}):l.data.url.trim()===""?(x.error("匹配网址不能为空"),{success:false,data:l}):o?{success:this.updateData(l),data:l}:{success:this.addData(l),data:l}},style:`
                        li[data-key="ownFilterCode"]{
                            gap: 30px;
                        }
                        li[data-key="ownFilterCode"] .pops-panel-textarea{
                            flex: 1;
                        }
                        li[data-key="ownFilterCode"] .pops-panel-textarea textarea{
                            height: 300px;
                        }
                    `},delete:{enable:true,deleteCallBack:a=>this.deleteData(a)}},bottomControls:{filter:{enable:true,option:[{name:"过滤【启用】",filterCallBack(a){return a.enable}},{name:"过滤【未启用】",filterCallBack(a){return !a.enable}},{name:"过滤【当前网址运行的规则】",filterCallBack(a){try{return !!window.location.href.match(new RegExp(a.data.url))}catch{return  false}}}]}}}).showView();},runRule(t){let e=t;for(let n=0;n<this.$data.matchedRule.length;n++)try{const o=this.$data.matchedRule[n].data;if(o.commonFilterAdsSegmentsFilePathLength){const{filterInfo:s,m3u8Text:r}=Q.filterAdsWithFilePathLength(e);e=r;}if(o.commonFilterAdsSegmentsFilePathSimilar){const{filterInfo:s,m3u8Text:r}=Q.filterAdsWithFilePathSimilar(e);e=r;}if(o.ownFilterCode.trim()!==""){let r=new Function("m3u8Text","M3U8Filter","M3U8Parser",o.ownFilterCode)(e,Q,he);typeof r=="string"?e=r:v.error("m3u8过滤器 ==> 自定义过滤js代码执行结果不是字符串",r);}break}catch(a){v.error("m3u8过滤器 ==> 执行m3u8文本过滤时出现异常",a);}return e},getData(){return ee(this.$key.STORAGE_KEY,[])},setData(t){te(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(a=>a.uuid==t.uuid)===-1?(e.push(t),te(this.$key.STORAGE_KEY,e),true):false},updateData(t){let e=this.getData(),n=e.findIndex(o=>o.uuid==t.uuid),a=false;return n!==-1&&(a=true,e[n]=t),this.setData(e),a},deleteData(t){let e=this.getData(),n=e.findIndex(o=>o.uuid==t.uuid),a=false;return n!==-1&&(a=true,e.splice(n,1)),this.setData(e),a},clearData(){ae(this.$key.STORAGE_KEY);},exportRule(t="rule.json"){let e=this.getData(),n=new Blob([JSON.stringify(e,null,4)]),a=window.URL.createObjectURL(n),o=p.createElement("a");o.href=a,o.download=t,o.click(),setTimeout(()=>{window.URL.revokeObjectURL(a);},1500);},importRule(t){let e=S.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(l,i){l.close();}}},mask:{enable:true},drag:true,width:q.info.width,height:q.info.height,style:`
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),n=e.$shadowRoot.querySelector(".btn-control[data-mode='local']"),a=e.$shadowRoot.querySelector(".btn-control[data-mode='network']"),o=e.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),s=l=>{let i=this.getData(),c=[];for(let u=0;u<l.length;u++){const d=l[u];i.findIndex(f=>f.uuid===d.uuid)!==-1||c.push(d);}i=i.concat(c),this.setData(i),x.success(`共 ${l.length} 条规则，新增 ${c.length} 条`),t?.();},r=l=>new Promise(i=>{let c=y.toJSON(l);if(!Array.isArray(c)){v.error(c),x.error("导入失败，格式不符合（不是数组）",{consoleLogContent:true}),i(false);return}if(!c.length){x.error("导入失败，解析出的数据为空",{consoleLogContent:true}),i(false);return}s(c),i(true);});p.on(n,"click",l=>{p.preventEvent(l),e.close();let i=p.createElement("input",{type:"file",accept:".json"});p.on(i,["propertychange","input"],c=>{if(!i.files?.length)return;let u=i.files[0],d=new FileReader;d.onload=()=>{r(d.result);},d.readAsText(u,"UTF-8");}),i.click();}),p.on(a,"click",l=>{p.preventEvent(l),e.close();let i=S.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(d,h){d.close();}},ok:{text:"导入",callback:async(d,h)=>{let f=d.text;if(y.isNull(f)){x.error("请填入完整的url");return}let m=x.loading("正在获取配置..."),V=await se.get(f,{allowInterceptConfig:false});if(m.close(),!V.status){v.error(V),x.error("获取配置失败",{consoleLogContent:true});return}await r(V.data.responseText)&&d.close();}},cancel:{enable:false}},mask:{enable:true},drag:true,width:q.info.width,height:"auto"}),c=i.$shadowRoot.querySelector("input"),u=i.$shadowRoot.querySelector(".pops-prompt-btn-ok");p.on(c,["input","propertychange"],d=>{p.val(c)===""?p.attr(u,"disabled","true"):p.removeAttr(u,"disabled");}),p.onKeyboard(c,"keydown",(d,h,f)=>{d==="Enter"&&f.length===0&&p.val(c)!==""&&p.emit(u,"click");}),p.emit(c,"input");}),p.on(o,"click",async l=>{p.preventEvent(l),e.close();let i=await y.getClipboardInfo();if(i.error!=null){x.error(i.error.toString());return}if(i.content.trim()===""){x.warning("获取到的剪贴板内容为空");return}await r(i.content);});}},Be={id:"component-common",title:"通用",views:[{text:"Toast配置",type:"container",views:[Ce("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],t=>{v.info("设置当前Qmsg弹出位置"+t.text);},"Toast显示在页面九宫格的位置"),Ce("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),Y("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]},{text:"Cookie配置",type:"container",views:[Y("启用","httpx-use-cookie-enable",false,void 0,"启用后，将根据下面的配置进行添加cookie"),Y("使用document.cookie","httpx-use-document-cookie",false,void 0,"自动根据请求的域名来设置对应的cookie")]}]};le.addContentConfig([Be]);$e.deleteMenuOption();L.init();fe.init();

})(Qmsg, DOMUtils, pops, Utils);