// ==UserScript==
// @name         m3u8内容过滤器
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.3.1
// @author       WhiteSevs
// @description  自定义规则对网页中的m3u8的请求内容进行过滤
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.11.3/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.9.5/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@3.3.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.0/dist/index.umd.min.js
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

(function (y, U, re, W) {
    'use strict';

    var ae=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,ye=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,ee=typeof GM_getValue<"u"?GM_getValue:void 0,J=typeof GM_info<"u"?GM_info:void 0,ne=typeof GM_listValues<"u"?GM_listValues:void 0,Se=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,te=typeof GM_setValue<"u"?GM_setValue:void 0,we=typeof GM_setValues<"u"?GM_setValues:void 0,Re=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Ee=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,M=typeof unsafeWindow<"u"?unsafeWindow:void 0,Ie=window;const j={waitRemove(...t){t.forEach(e=>{typeof e=="string"&&U.waitNodeList(e).then(n=>{n.forEach(a=>a.remove());});});},createBlockCSSNode(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),U.createElement("style",{type:"text/css",innerHTML:`${e.join(`,
`)}{display: none !important;}`})},addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),be(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){const e=typeof ye=="function"?ye(t.keyName):null;return typeof e=="string"&&e?be(e):j.loadStyleLink(t.url)},async loadStyleLink(t){let e=document.createElement("link");return e.rel="stylesheet",e.type="text/css",e.href=t,new Promise(n=>{U.onReady(()=>{document.head.appendChild(e),n(e);});})},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(n=>{e.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.startsWith("data:")||t.match(/^http(s|):\/\//i)?t:t.startsWith("//")?(t.startsWith("///")||(t=window.location.protocol+t),t):(t.startsWith("/")||(t+="/"),t=window.location.origin+t,t)},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;try{let e=new URL(t);return e.protocol="https:",e.toString()}catch{return t}},lockScroll(...t){let e=document.createElement("style");e.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...t||[]);return n.forEach(a=>{a.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(e),{recovery(){n.forEach(a=>{a.classList.remove("pops-overflow-hidden-important");}),e.remove();}}},async getClipboardText(){function t(a){navigator.clipboard.readText().then(o=>{a(o);}).catch(o=>{C.error("读取剪贴板内容失败👉",o),a("");});}function e(a){navigator.permissions.query({name:"clipboard-read"}).then(()=>{t(a);}).catch(o=>{C.error("申请剪贴板权限失败，尝试直接读取👉",o.message??o.name??o.stack),t(a);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(a=>{if(!n()){a("");return}document.hasFocus()?e(a):window.addEventListener("focus",()=>{e(a);},{once:true});})},escapeHtml(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(t,e,n=5e3){let a,o=n-e,i=e,s=async l=>{const r=await t(l);if(typeof r=="boolean"&&r||l){v.workerClearTimeout(a);return}if(i+=e,i>o){s(true);return}a=v.workerSetTimeout(()=>{s(false);},e);};s(false);},findParentNode(t,e,n){if(n){let a=U.closest(t,n);if(a)return a.querySelector(e)}else return U.matches(t,e)?t:U.closest(t,e)},toStr(t){const e="__undefined__placeholder__replaced__str__";return JSON.stringify(t,(a,o)=>o===void 0?e:o,2).replace(new RegExp(`"${e}"`,"g"),"undefined")},isVerticalScreen(){return !globalThis.screen.orientation.type.includes("landscape")},isMobileDevice(t=768){return this.isVerticalScreen()?globalThis.innerWidth<t:globalThis.innerHeight<t},isTopWindow(){const t=typeof M=="object"&&M!=null?M:window;return t.top===t.self}},oe="GM_Panel",De="data-init",H="data-key",z="data-default-value",Ae="data-init-more-value",Me="data-plugin-search-config",L="data-storage-api",$e={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{F.showPanel(le.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){j.isTopWindow()&&ie.add(this.$data.menuOption);},addMenuOption(t){Array.isArray(t)||(t=[t]),this.$data.menuOption.push(...t);},updateMenuOption(t){Array.isArray(t)||(t=[t]),t.forEach(e=>{let n=this.$data.menuOption.findIndex(a=>a.key===e.key);n!==-1&&(this.$data.menuOption[n]=e);});},getMenuOption(t=0){return this.$data.menuOption[t]},deleteMenuOption(t=0){this.$data.menuOption.splice(t,1);}};class Te{storageKey;listenerData;constructor(e){if(typeof e=="string"){const n=e.trim();if(n=="")throw new Error("key参数不能为空字符串");this.storageKey=n;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new W.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this);}getLocalValue(){let e=ee(this.storageKey);return e==null&&(e={},this.setLocalValue(e)),e}setLocalValue(e){te(this.storageKey,e);}set(e,n){const a=this.get(e),o=this.getLocalValue();Reflect.set(o,e,n),this.setLocalValue(o),this.emitValueChangeListener(e,n,a);}get(e,n){const a=this.getLocalValue();return Reflect.get(a,e)??n}getAll(){return this.getLocalValue()}delete(e){const n=this.get(e),a=this.getLocalValue();Reflect.deleteProperty(a,e),this.setLocalValue(a),this.emitValueChangeListener(e,void 0,n);}has(e){const n=this.getLocalValue();return Reflect.has(n,e)}keys(){const e=this.getLocalValue();return Reflect.ownKeys(e)}values(){const e=this.getLocalValue();return Reflect.ownKeys(e).map(n=>Reflect.get(e,n))}clear(){ae(this.storageKey);}addValueChangeListener(e,n){const a=Math.random(),o=this.listenerData.get(e)||[];return o.push({id:a,key:e,callback:n}),this.listenerData.set(e,o),a}removeValueChangeListener(e){let n=false;for(const[a,o]of this.listenerData.entries()){for(let i=0;i<o.length;i++){const s=o[i];(typeof e=="string"&&s.key===e||typeof e=="number"&&s.id===e)&&(o.splice(i,1),i--,n=true);}this.listenerData.set(a,o);}return n}async emitValueChangeListener(...e){const[n,a,o]=e;if(!this.listenerData.has(n))return;const i=this.listenerData.get(n);for(let s=0;s<i.length;s++){const l=i[s];if(typeof l.callback=="function"){let r,c;e.length===1||(e.length===2?r=a:e.length===3&&(r=a,c=o)),await l.callback(n,r,c);}}}}const N=new Te(oe),K={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},G={setting:{get width(){return K.width<550?"88vw":K.width<700?"550px":"700px"},get height(){return K.height<450?"70vh":K.height<550?"450px":"550px"}},settingMiddle:{get width(){return K.width<350?"88vw":"350px"}},info:{get width(){return K.width<350?"88vw":"350px"},get height(){return K.height<250?"88vh":"250px"}}},F={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new v.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new v.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new v.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new v.Dictionary),this.__onceExecData},get scriptName(){return pe},get panelConfig(){return this.__panelConfig},set panelConfig(t){this.__panelConfig=t;},key:oe,attributeKeyName:H,attributeDefaultValueName:z},init(){this.initContentDefaultValue(),$e.init();},initContentDefaultValue(){const t=a=>{if(!a.attributes||a.type==="button"||a.type==="container"||a.type==="deepMenu")return;const o=a.attributes;let i=o[De];if(typeof i=="function"){let c=i();if(typeof c=="boolean"&&!c)return}let s=new Map,l=o[H];if(l!=null){const c=o[z];s.set(l,c);}let r=o[Ae];if(typeof r=="object"&&r&&Object.keys(r).forEach(c=>{const p=r[c];s.set(c,p);}),!s.size){C.warn("请先配置键",a);return}if(a.type==="switch"){let c=typeof a.disabled=="function"?a.disabled():a.disabled;typeof c=="boolean"&&c&&this.$data.contentConfigInitDisabledKeys.push(...s.keys());}for(const[c,p]of s.entries())this.setDefaultValue(c,p);},e=a=>{for(let o=0;o<a.length;o++){let i=a[o];t(i);let s=i.views;s&&Array.isArray(s)&&e(s);}},n=[...le.getAllContentConfig()];for(let a=0;a<n.length;a++){let o=n[a];if(!o.views)continue;const i=o.views;i&&Array.isArray(i)&&e(i);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(t,e){this.$data.contentConfigInitDefaultValue.has(t)&&C.warn("该key已存在，初始化默认值失败: "+t),this.$data.contentConfigInitDefaultValue.set(t,e);},getDefaultValue(t){return this.$data.contentConfigInitDefaultValue.get(t)},setValue(t,e){N.set(t,e);},getValue(t,e){const n=N.get(t);return n??(this.$data.contentConfigInitDefaultValue.has(t)?this.$data.contentConfigInitDefaultValue.get(t):e)},deleteValue(t){N.delete(t);},hasKey(t){return N.has(t)},addValueChangeListener(t,e,n){const a=N.addValueChangeListener(t,e);if(n?.immediate||n?.immediateAll){const o=this.getValue(t);n?.immediate?e(t,o,o):n?.immediateAll&&F.emitMenuValueChange(t,o,o);}return a},removeValueChangeListener(t){N.removeValueChangeListener(t);},emitMenuValueChange(t,e,n){N.emitValueChangeListener(t,e,n);},async exec(t,e,n,a=true){const o=this;let i;typeof t=="string"||Array.isArray(t)?i=()=>t:i=t;let s=false;const l=i();let r=[];Array.isArray(l)?(s=true,r=l):r.push(l);const c=r.find(m=>!this.$data.contentConfigInitDefaultValue.has(m));if(c){C.warn(`${c} 键不存在`);return}const p=JSON.stringify(r);if(a&&this.$data.onceExecMenuData.has(p))return this.$data.onceExecMenuData.get(p);let d=[];const u=[];let h=[];const g=(m,x)=>{let A=[],k=[],w=[];if(Array.isArray(x))w=w.concat(x);else {const b=I=>{if(typeof I=="object"&&I!=null)if(I instanceof Element)w.push(I);else {const{$css:P,destory:O}=I;P!=null&&(Array.isArray(P)?w=w.concat(P):w.push(P)),typeof O=="function"&&w.push(O);}else w.push(I);};if(x!=null&&Array.isArray(x))for(const I of x)b(I);else b(x);}const E=b=>{if(b!=null){if(b instanceof Element){A.push(b);return}if(typeof b=="function"){k.push(b);return}}};for(const b of w){const I=E(b);if(typeof I=="boolean"&&!I)break;if(Array.isArray(b))for(const P of b){const O=E(P);if(typeof O=="boolean"&&!O)break}}S(),$(),m&&(d=d.concat(A),h=h.concat(k));},V=m=>!!this.getValue(m),S=()=>{for(let m=0;m<d.length;m++)d[m]?.remove(),d.splice(m,1),m--;},$=()=>{for(let m=0;m<h.length;m++){const x=h[m];x(),h.splice(m,1),m--;}},T=()=>{let m=false;return typeof n=="function"?m=n(r):m=r.every(x=>V(x)),m},_=async m=>{const x=T();let A=[];if(x){const k=r.map(w=>this.getValue(w));A=await e({key:r,triggerKey:m?.key,value:s?k:k[0],addStoreValue:(...w)=>g(x,w)});}g(x,A);};a&&r.forEach(m=>{const x=this.addValueChangeListener(m,(A,k,w)=>_({key:A}));u.push(x);}),await _();const R={reload(){this.clearStoreStyleElements(),this.destory(),_();},clear(){this.clearStoreStyleElements(),this.destory(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreStyleElements:()=>S(),destory(){return $()},removeValueChangeListener:()=>{u.forEach(m=>{this.removeValueChangeListener(m);});},clearOnceExecMenuData(){a&&o.$data.onceExecMenuData.delete(p);}};return this.$data.onceExecMenuData.set(p,R),R},async execMenu(t,e,n=false,a=false){return await this.exec(t,async o=>await e(o),o=>o.every(s=>{let l=!!this.getValue(s);return F.$data.contentConfigInitDisabledKeys.includes(s)&&(l=false,C.warn(`.execMenu${a?"Once":""} ${s} 被禁用`)),n&&(l=!l),l}),a)},async execMenuOnce(t,e,n=false,a=false){const o=await this.execMenu(t,e,n,true);if(a&&o){const i=()=>{o.reload();};this.removeUrlChangeWithExecMenuOnceListener(t),this.addUrlChangeWithExecMenuOnceListener(t,i);}return o},deleteExecMenuOnce(t){return t=this.transformKey(t),this.$data.onceExecMenuData.delete(t),this.$data.urlChangeReloadMenuExecOnce.delete(t),N.removeValueChangeListener(t)},onceExec(t,e){if(t=this.transformKey(t),typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(t)||(e(),this.$data.onceExecData.set(t,1));},deleteOnceExec(t){t=this.transformKey(t),this.$data.onceExecData.delete(t);},addUrlChangeWithExecMenuOnceListener(t,e){return t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.set(t,e),{off:()=>this.removeUrlChangeWithExecMenuOnceListener(t)}},removeUrlChangeWithExecMenuOnceListener(t){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.delete(t);},hasUrlChangeWithExecMenuOnceListener(t){return t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.has(t)},async emitUrlChangeWithExecMenuOnceEvent(t){const e=this.$data.urlChangeReloadMenuExecOnce.values();for(const n of e)await n(t);},showPanel(t,e=`${pe}-设置`,n=false,a=false){this.$data.$panel=null,this.$data.panelContent=[];const o=t.findIndex(s=>(typeof s.isBottom=="function"?s.isBottom():!!s.isBottom)&&s.id==="script-version")!==-1;!n&&!o&&t.push(...le.getDefaultBottomContentConfig());const i=D.panel({title:{text:e,position:"center",html:false,style:""},content:t,btn:{close:{enable:true,callback:s=>{s.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:s=>{s(),this.$data.$panel=null;}},width:G.setting.width,height:G.setting.height,drag:true,only:true,style:`
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,...this.$data.panelConfig});this.$data.$panel=i,this.$data.panelContent=t,a||this.registerConfigSearch({$panel:i,content:t});},registerConfigSearch(t){const{$panel:e,content:n}=t,a=async(u,h)=>{if(u==null)return;const g=await h(u);return g&&typeof g.isFind=="boolean"&&g.isFind?g.data:await a(g.data,h)},o=(u,h)=>{const g=new IntersectionObserver(V=>{V.forEach(S=>{S.isIntersecting&&(h?.(),g.disconnect());});},{root:null,threshold:1});g.observe(u),u.scrollIntoView({behavior:"smooth",block:"center"});},i=u=>{const h="pops-flashing";f.onAnimationend(u,()=>{u.classList.remove(h);}),u.classList.add(h);},s=u=>{if(u.type==="dblclick"&&d)return;f.preventEvent(u);const h=D.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:G.settingMiddle.width,height:"auto",drag:true,style:`
					${D.config.cssText.panelCSS}

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
				`});h.$shadowRoot.querySelector(".search-wrapper");const g=h.$shadowRoot.querySelector(".search-config-text"),V=h.$shadowRoot.querySelector(".search-result-wrapper");g.focus();const S=()=>{f.empty(V);},$=_=>{const R=v.queryProperty(_,A=>A?.next?{isFind:false,data:A.next}:{isFind:true,data:A}),m=f.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${R.matchedData?.path}</div>
							<div class="search-result-item-description">${R.matchedData?.description??""}</div>
						`}),x=D.config.PanelHandlerComponents();return f.on(m,"click",()=>{const k=e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[_.index];if(!k){y.error(`左侧项下标${_.index}不存在`);return}k.scrollIntoView({behavior:"smooth",block:"center"}),k.click(),a(_.next,async w=>{if(w?.next){const E=await f.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(b=>{const I=Reflect.get(b,x.$data.nodeStoreConfigKey);return typeof I=="object"&&I!=null&&I.text===w.name}),2500);if(E)E.click();else return y.error("未找到对应的二级菜单"),{isFind:true,data:w};return {isFind:false,data:w.next}}else {const E=await f.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(b=>Reflect.get(b,x.$data.nodeStoreConfigKey)===w.matchedData?.formConfig),2500);if(E){o(E);const b=E.closest(".pops-panel-forms-fold[data-fold-enable]");b&&(b.querySelector(".pops-panel-forms-fold-container").click(),await v.sleep(500)),o(E,()=>{i(E);});}else y.error("未找到对应的菜单项");return {isFind:true,data:w}}});}),m},T=_=>{const R=new RegExp(_,"i"),m=[],x=(k,w)=>{for(let E=0;E<k.length;E++){const b=k[E],I=b.views;if(I&&Array.isArray(I)){const P=v.deepClone(w);if(b.type==="deepMenu"){const O=v.queryProperty(P,X=>X?.next?{isFind:false,data:X.next}:{isFind:true,data:X});O.next={name:b.text};}x(I,P);}else {let P,O;if(b.type==="own"){const q=Reflect.get(b.attributes||{},Me);q&&(typeof q.text=="string"&&(P=q.text),typeof q.desc=="string"&&(O=q.desc));}else P=b.text,O=Reflect.get(b,"description");const X=[P,O],me=X.findIndex(q=>{if(typeof q=="string")return q.match(R)});if(me!==-1){const q=v.deepClone(w),ge=v.queryProperty(q,B=>B?.next?{isFind:false,data:B.next}:{isFind:true,data:B});ge.next={name:P,matchedData:{path:"",formConfig:b,matchedText:X[me],description:O}};const xe=[];v.queryProperty(q,B=>{const ue=B?.name;return typeof ue=="string"&&ue.trim()!==""&&xe.push(ue),B?.next?{isFind:false,data:B.next}:{isFind:true,data:B}});const ke=xe.join(j.escapeHtml(" - "));ge.next.matchedData.path=ke,m.push(q);}}}};for(let k=0;k<n.length;k++){const w=n[k];if(!w.views||w.isBottom&&w.id==="script-version")continue;const E=w.views;if(E&&Array.isArray(E)){let b=w.title;typeof b=="function"&&(b=b()),x(E,{index:k,name:b});}}const A=document.createDocumentFragment();for(const k of m){let w=$(k);A.appendChild(w);}S(),V.append(A);};f.on(g,"input",v.debounce(_=>{f.preventEvent(_);let R=f.val(g).trim();if(R===""){S();return}T(R);},200));};e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(u=>{f.on(u,"dblclick",s);});let r=new WeakMap,c=false,p,d=false;f.on(e.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(u,h)=>{d=true,clearTimeout(p),p=void 0,c&&r.has(h)?(c=false,r.delete(h),s(u)):(p=setTimeout(()=>{c=false;},200),c=true,r.set(h,u));},{capture:true}),e.$shadowRoot.appendChild(f.createElement("style",{type:"text/css",textContent:`
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
    		`}));},transformKey(t){if(Array.isArray(t)){const e=t.sort();return JSON.stringify(e)}else return t},getDynamicValue(t,e){const n=this;let a=false,o=e;const i=this.addValueChangeListener(t,(s,l)=>{o=l;});return {get value(){return a||(a=true,o=n.getValue(t,e)),o},destory(){n.removeValueChangeListener(i);}}}},Z={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},v=W.noConflict(),f=U.noConflict(),D=re,C=new v.Log(J,M.console||Ie.console),pe=J?.script?.name||void 0,Le=re.config.Utils.AnyTouch(),Fe=false;C.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});y.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(t){const e=t.setting.type;if(e==="loading")return  false;const n=t.setting.content;return e==="warning"?C.warn(n):e==="error"?C.error(n):C.info(n),false},get position(){return F.getValue(Z.qmsg_config_position.key,Z.qmsg_config_position.defaultValue)},get maxNums(){return F.getValue(Z.qmsg_config_maxnums.key,Z.qmsg_config_maxnums.defaultValue)},get showReverse(){return F.getValue(Z.qmsg_config_showreverse.key,Z.qmsg_config_showreverse.defaultValue)},get zIndex(){let t=W.getMaxZIndex(),e=re.config.InstanceUtils.getPopsMaxZIndex().zIndex;return W.getMaxValue(t,e)+100}});D.GlobalConfig.setGlobalConfig({zIndex:()=>{const t=W.getMaxZIndex(void 0,void 0,n=>{if(n?.classList?.contains("qmsg-shadow-container")||n?.closest("qmsg")&&n.getRootNode()instanceof ShadowRoot)return  false}),e=re.config.InstanceUtils.getPopsMaxZIndex().zIndex;return W.getMaxValue(t,e)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const ie=new v.GM_Menu({GM_getValue:ee,GM_setValue:te,GM_registerMenuCommand:Se,GM_unregisterMenuCommand:Re}),se=new v.Httpx({xmlHttpRequest:Ee,logDetails:Fe});se.interceptors.request.use(t=>t);se.interceptors.response.use(void 0,t=>(C.error("拦截器-请求错误",t),t.type==="onabort"?y.warning("请求取消",{consoleLogContent:true}):t.type==="onerror"?y.error("请求异常",{consoleLogContent:true}):t.type==="ontimeout"?y.error("请求超时",{consoleLogContent:true}):y.error("其它错误",{consoleLogContent:true}),t));M.Object.defineProperty,M.Object.keys,M.Object.values,M.Function.prototype.apply,M.Function.prototype.call,M.Element.prototype.appendChild,M.setTimeout.bind(M),M.clearTimeout.bind(M),M.setInterval.bind(M),M.clearInterval.bind(M);const be=f.addStyle.bind(f);U.selector.bind(U);U.selectorAll.bind(U);new v.GM_Cookie;const le={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new v.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(t){Array.isArray(t)||(t=[t]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,t);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(t=0){return this.$data.contentConfig.get(t)??[]},getDefaultBottomContentConfig(){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let t=false,e;const n=(i,s)=>{typeof s!="string"&&(s=j.toStr(s));const l=new Blob([s]),r=globalThis.URL.createObjectURL(l);f.createElement("a",{href:r,download:i}).click(),v.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(r);},500);},a=()=>{const i=d=>{const u=D.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
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
          }`}),h=u.$shadowRoot.querySelector(".btn-control[data-mode='local']"),g=u.$shadowRoot.querySelector(".btn-control[data-mode='network']"),V=u.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),S=async T=>{confirm("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）")&&(typeof ne=="function"?typeof ae=="function"?(ne().forEach(m=>{ae(m);}),y.success("已清空脚本存储的配置")):y.error("不支持GM_deleteValue函数，无法执行删除脚本配置"):y.error("不支持GM_listValues函数，无法清空脚本存储的配置")),typeof we=="function"?we(T):Object.keys(T).forEach(m=>{const x=T[m];te(m,x);}),y.success("配置导入完毕");},$=T=>new Promise(async _=>{const R=v.toJSON(T);Object.keys(R).length===0?y.warning("解析为空配置，不导入"):await S(R),_(true);});f.on(h,"click",T=>{f.preventEvent(T),u.close();const _=f.createElement("input",{type:"file",accept:".json"});f.on(_,["propertychange","input"],R=>{if(!_.files?.length)return;const m=_.files[0],x=new FileReader;x.onload=()=>{$(x.result);},x.readAsText(m,"UTF-8");}),_.click();}),f.on(g,"click",T=>{f.preventEvent(T),u.close();const _=D.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(x,A){x.close();}},ok:{text:"导入",callback:async(x,A)=>{const k=x.text;if(v.isNull(k)){y.error("请填入完整的url");return}const w=y.loading("正在获取配置..."),E=await se.get(k,{allowInterceptConfig:false});if(w.close(),!E.status){C.error(E),y.error("获取配置失败",{consoleLogContent:true});return}await $(E.data.responseText)&&x.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:G.info.width,height:"auto"}),R=_.$shadowRoot.querySelector("input"),m=_.$shadowRoot.querySelector(".pops-prompt-btn-ok");f.on(R,["input","propertychange"],x=>{f.val(R)===""?f.attr(m,"disabled","true"):f.removeAttr(m,"disabled");}),f.onKeyboard(R,"keydown",(x,A,k)=>{x==="Enter"&&k.length===0&&f.val(R)!==""&&f.emit(m,"click");}),f.emit(R,"input");}),f.on(V,"click",async T=>{f.preventEvent(T),u.close();let _=await j.getClipboardText();if(_.trim()===""){y.warning("获取到的剪贴板内容为空");return}await $(_);});},s=(d=`${pe}_panel-setting-${v.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,u)=>{const h=D.alert({title:{text:"请选择导出方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="export-to-file">导出至文件</div>
            <div class="btn-control" data-mode="export-to-clipboard">导出至剪贴板</div>
            `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(S,$){S.close();}}},drag:true,mask:{enable:true},width:G.info.width,height:G.info.height,style:`
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
          }`}),g=h.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),V=h.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");f.on(g,"click",S=>{f.preventEvent(S);try{n(d,u),h.close();}catch($){y.error($.toString(),{consoleLogContent:true});}}),f.on(V,"click",async S=>{await v.copy(u)?(y.success("复制成功"),h.close()):y.error("复制失败");});},r=D.confirm({title:{text:"配置",position:"center"},content:{text:`
            <textarea name="config-value" id="config" readonly></textarea>
          `,html:true},btn:{ok:{enable:true,type:"primary",text:"导入",callback(d,u){i();}},cancel:{enable:true,text:"导出",callback(d,u){s(void 0,p);}}},width:K.width<450?"90vw":"450px",height:"auto",style:`
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
        `}).$shadowRoot.querySelector("textarea"),c={};if(typeof ne=="function")ne().forEach(u=>{const h=ee(u);Reflect.set(c,u,h);});else {y.warning("不支持函数GM_listValues，仅导出菜单配置");const d=ee(oe);Reflect.set(c,oe,d);}const p=j.toStr(c);r.value=p;},o=()=>{let i=J?.script?.supportURL||J?.script?.namespace;typeof i=="string"&&v.isNotNull(i)&&window.open(i,"_blank");};return [{id:"script-version",title:`版本：${J?.script?.version||"未知"}`,isBottom:true,views:[],clickFirstCallback(){return  false},afterRender(i){new Le(i.$asideLiElement).on("tap",function(l){clearTimeout(e),e=void 0,t?(t=false,a()):(e=setTimeout(()=>{t=false,o();},200),t=true);});}}]},setDefaultBottomContentConfig(t){this.$data.__defaultBottomContentConfig=t;}},Pe={get ajaxHooker(){return this.__ajaxHooker==null&&(this.__ajaxHooker=v.ajaxHooker()),this.__ajaxHooker},hook(){this.ajaxHooker.hook(t=>{let e=j.fixUrl(t.url);try{if(!new URL(e).pathname.endsWith(".m3u8"))return;t.response=o=>{let i=o.responseText;if(i.trim()===""||!i.includes("#EXT-X-ENDLIST"))return;let s=he.runRule(i);o.responseText=s;};}catch(n){C.error("m3u8过滤器 hook network出错",n);}});},unhook(){this.ajaxHooker.unhook();}},ve=function(t,e,n,a,o,i,s){const l={text:t,type:"select",description:i,attributes:{},props:{},getValue(){return this.props[L].get(e,n)},callback(r){if(r==null)return;const c=r.value;if(C.info(`选择：${r.text}`),typeof o=="function"&&o(r))return;this.props[L].set(e,c);},data:a};return Reflect.set(l.attributes,H,e),Reflect.set(l.attributes,z,n),ce.initComponentsStorageApi("select",l,{get(r,c){return F.getValue(r,c)},set(r,c){F.setValue(r,c);}}),l},Y=function(t,e,n,a,o,i,s,l,r){const c={text:t,type:"switch",description:o,disabled:s,attributes:{},props:{},getValue(){return this.props[L].get(e,n)},callback(p,d){const u=!!d;C.success(`${u?"开启":"关闭"} ${t}`),this.props[L].set(e,u);},afterAddToUListCallBack:(...p)=>{}};return Reflect.set(c.attributes,H,e),Reflect.set(c.attributes,z,n),ce.initComponentsStorageApi("switch",c,{get(p,d){return F.getValue(p,d)},set(p,d){F.setValue(p,d);}}),c},Oe=function(t,e,n,a,o,i="",s,l){const r={text:t,type:"textarea",attributes:{},props:{},description:a,placeholder:i,disabled:s,getValue(){const p=this.props[L].get(e,n);return Array.isArray(p)?p.join(`
`):p},callback(c,p){this.props[L].set(e,p);}};return Reflect.set(r.attributes,H,e),Reflect.set(r.attributes,z,n),ce.initComponentsStorageApi("switch",r,{get(c,p){return F.getValue(c,p)},set(c,p){F.setValue(c,p);}}),r},ce={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new W.Dictionary),this.__storeApiFn}},getStorageApi(t){if(this.hasStorageApi(t))return this.$data.storeApiValue.get(t)},hasStorageApi(t){return this.$data.storeApiValue.has(t)},setStorageApi(t,e){this.$data.storeApiValue.set(t,e);},initComponentsStorageApi(t,e,n){let a;this.hasStorageApi(t)?a=this.getStorageApi(t):a=n,this.setComponentsStorageApiProperty(e,a);},setComponentsStorageApiProperty(t,e){Reflect.set(t.props,L,e);}},Ce=function(t,e,n,a,o,i="",s="text",l,r){const c={text:t,type:"input",inputType:s,attributes:{},props:{},description:a,placeholder:i,afterAddToUListCallBack:l,getValue(){return this.props[L].get(e,n)},callback(p,d){p.target.validity.valid,this.props[L].set(e,d);}};return Reflect.set(c.attributes,H,e),Reflect.set(c.attributes,z,n),ce.initComponentsStorageApi("input",c,{get(p,d){return F.getValue(p,d)},set(p,d){F.setValue(p,d);}}),c};class qe{option;constructor(e){this.option=e;}async showView(){const e=D.confirm({title:{text:this.option.title,position:"center"},content:{text:`
        <form class="rule-form-container" onsubmit="return false">
            <ul class="rule-form-ulist"></ul>
            <input type="submit" style="display: none;" />
        </form>
        `,html:true},btn:v.assign({ok:{callback:async()=>{await i();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
      ${D.config.cssText.panelCSS}
      
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
      `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),n=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");const a=e.$shadowRoot.querySelector(".rule-form-ulist"),o=await this.option.getView(await this.option.data());f.append(a,o);const i=async()=>{(await this.option.onsubmit(n,await this.option.data())).success&&(e.close(),typeof this.option.dialogCloseCallBack=="function"&&await this.option.dialogCloseCallBack(true));};return e}}class Ue{option;constructor(e){this.option=e;}async showView(e){const n=D.confirm({title:{text:this.option.title,position:"center"},content:{text:`
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
      ${D.config.cssText.panelCSS}

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
      `,btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async()=>{this.showEditView(false,await this.option.getAddData(),n.$shadowRoot);}},close:{enable:true,callback(){n.close();}},cancel:{enable:false},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:()=>{const l=D.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async()=>{if(C.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){y.error("清理失败");return}else y.success("清理成功");await this.updateDeleteAllBtnText(n.$shadowRoot),this.clearContent(n.$shadowRoot),l.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh"}),{$searchContainer:a,$externalSelect:o,$ruleValueSelect:i,$searchInput:s}=this.parseViewElement(n.$shadowRoot);if(this.option.bottomControls?.filter?.enable){let l=null,r=null;Array.isArray(this.option.bottomControls?.filter?.option)&&f.append(o,this.option.bottomControls?.filter?.option.map(d=>{const u=f.createElement("option",{innerText:d.name});return Reflect.set(u,"data-value",d),u})),Array.isArray(this.option.bottomControls?.filter?.inputOption)&&f.append(i,this.option.bottomControls?.filter?.inputOption.map(d=>{const u=f.createElement("option",{innerText:d.name});return Reflect.set(u,"data-value",d),u})),f.on(o,"change",async()=>{const d=o[o.selectedIndex],u=Reflect.get(d,"data-value");typeof u?.selectedCallBack=="function"&&u.selectedCallBack(u),l=u,await p(false);}),f.on(i,"change",async()=>{const d=i[i.selectedIndex],u=Reflect.get(d,"data-value");typeof u?.selectedCallBack=="function"&&u.selectedCallBack(u),r=u,await p(false);}),f.onInput(s,v.debounce(async()=>{await p(false);}));const c=()=>{const d=o[o.selectedIndex];l=Reflect.get(d,"data-value");const u=i[i.selectedIndex];r=Reflect.get(u,"data-value");},p=async d=>{this.clearContent(n.$shadowRoot),d&&c();const u=await this.option.data(),h=[],g=f.val(s);for(let V=0;V<u.length;V++){const S=u[V];if(typeof e=="function"){const $=await e(S);if(typeof $=="boolean"&&!$)continue}if(l){const $=await l?.filterCallBack?.(S);if(typeof $=="boolean"&&!$)continue}if(r){let $=true;if(g===""?$=true:$=false,$||($=await r?.filterCallBack?.(S,g)),!$)continue}h.push(S);}await this.appendRuleItemElement(n.$shadowRoot,h);};if(typeof e=="object"&&e!=null){let d;typeof e.external=="number"?d=e.external:d=Array.from(o.options).findIndex(h=>Reflect.get(h,"data-value").value===e.external),d!==-1&&(o.selectedIndex=d);let u;typeof e.rule=="number"?u=e.rule:u=Array.from(i.options).findIndex(h=>Reflect.get(h,"data-value").value===e.rule),u!==-1&&(i.selectedIndex=u);}await p(true);}else f.hide(a,false);}showEditView(e,n,a,o,i,s){let l=async c=>{if(c){if(typeof s=="function"){let p=await this.option.getData(n);s(p);}}else if(e||await this.option.deleteData(n),typeof i=="function"){let p=await this.option.getData(n);i(p);}};new qe({title:e?"编辑":"添加",data:()=>n,dialogCloseCallBack:l,getView:async c=>await this.option.itemControls.edit.getView(c,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async c=>{c.close(),await l(false);}},close:{callback:async c=>{c.close(),await l(false);}}},onsubmit:async(c,p)=>{let d=await this.option.itemControls.edit.onsubmit(c,e,p);return d.success?e?(y.success("修改成功"),a&&await this.updateRuleItemElement(d.data,o,a)):a&&await this.appendRuleItemElement(a,d.data):e&&C.error("修改失败"),d},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(e){const n=e.querySelector(".rule-view-container"),a=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other"),o=e.querySelector(".rule-view-search-container"),i=o.querySelector(".pops-panel-select .select-rule-status"),s=o.querySelector(".pops-panel-select .select-rule-value"),l=o.querySelector(".pops-panel-input input");return {$container:n,$deleteBtn:a,$searchContainer:o,$externalSelect:i,$ruleValueSelect:s,$searchInput:l}}parseRuleItemElement(e){const n=e.querySelector(".rule-controls-enable"),a=n.querySelector(".pops-panel-switch"),o=n.querySelector(".pops-panel-switch__input"),i=n.querySelector(".pops-panel-switch__core"),s=e.querySelector(".rule-controls-edit"),l=e.querySelector(".rule-controls-delete");return {$enable:n,$enableSwitch:a,$enableSwitchInput:o,$enableSwitchCore:i,$edit:s,$delete:l,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,n){const a=await this.option.getDataItemName(e),o=f.createElement("div",{className:"rule-item",innerHTML:`
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
					${D.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${D.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(o,"data-rule",e);const i="pops-panel-switch-is-checked",{$enable:s,$enableSwitch:l,$enableSwitchCore:r,$enableSwitchInput:c,$delete:p,$edit:d}=this.parseRuleItemElement(o);return this.option.itemControls.enable.enable?(f.on(r,"click",async()=>{let u=false;l.classList.contains(i)?(l.classList.remove(i),u=false):(l.classList.add(i),u=true),c.checked=u,await this.option.itemControls.enable.callback(e,u);}),await this.option.itemControls.enable.getEnable(e)&&l.classList.add(i)):s.remove(),this.option.itemControls.edit.enable?f.on(d,"click",u=>{f.preventEvent(u),this.showEditView(true,e,n,o,h=>{e=null,e=h;});}):d.remove(),this.option.itemControls.delete.enable?f.on(p,"click",u=>{f.preventEvent(u);const h=D.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async()=>{C.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(y.success("成功删除该数据"),o.remove(),await this.updateDeleteAllBtnText(n),h.close()):y.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):p.remove(),o}async appendRuleItemElement(e,n){const{$container:a}=this.parseViewElement(e),o=[],i=Array.isArray(n)?n:[n];for(let s=0;s<i.length;s++){const l=i[s],r=await this.createRuleItemElement(l,e);o.push(r);}return f.append(a,o),await this.updateDeleteAllBtnText(e),o}async updateRuleContaienrElement(e){this.clearContent(e);const n=await this.option.data();await this.appendRuleItemElement(e,n),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,n,a){const o=await this.createRuleItemElement(e,a);n.after(o),n.remove();}clearContent(e){const{$container:n}=this.parseViewElement(e);f.html(n,"");}setDeleteBtnText(e,n,a=false){const{$deleteBtn:o}=this.parseViewElement(e);a?f.html(o,n):f.text(o,n);}async updateDeleteAllBtnText(e){let n=await this.option.data();this.setDeleteBtnText(e,`清空所有(${n.length})`);}}const de={duration2Text(t){const e=Math.floor(t/3600),n=Math.floor(t%3600/60),a=parseInt((t%60).toString());return [e.toString().padStart(2,"0"),n.toString().padStart(2,"0"),a.toString().padStart(2,"0")].join(":")},similar(t,e){if(!t||!e)return 0;var n=t.length>e.length?t.length:e.length,a=t.length,o=e.length,i=[],s=function(h,g,V){return h<g?h<V?h:V:g<V?g:V},l,r,c,p,d;if(a===0)return o;if(o===0)return a;for(l=0;l<=a;l++)i[l]=[],i[l][0]=l;for(r=0;r<=o;r++)i[0][r]=r;for(l=1;l<=a;l++)for(c=t.charAt(l-1),r=1;r<=o;r++)p=e.charAt(r-1),c===p?d=0:d=1,i[l][r]=s(i[l-1][r]+1,i[l][r-1]+1,i[l-1][r-1]+d);return 1-i[a][o]/n}},Ve={updateISMatchedRuleMenu(){let t={key:"matched-rule-count",text:`🔧 当前页面执行规则数量： ${he.$data.matchedRule.length}`,autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{}};ie.update(t);},updateIsFilterAdsDurationInfoMenu(t){let e={key:"is-filter-segment-duration",text:`🍵 已过滤时长：${t}s`,autoReload:false,isStoreValue:false,showText(n){return n},callback:()=>{}};ie.update(e);}},fe={parse_EXTINF(t,e,n){let a=Number(t.replace(/(^#EXTINF:\s*|,)/g,"")),o=n,i=n+a;return {filePath:e.trim(),startDuration:o,endDuration:i,duration:a}}},_e=t=>{Q.$data.isFilterDuration+=t.duration,Ve.updateIsFilterAdsDurationInfoMenu(Q.$data.isFilterDuration);},Q={$data:{isFilterDuration:0},filterAdsWithFilePathLength(t,e={handlerFilePath(n){return n}}){let n=t.split(`
`),a=new v.Dictionary,o=0;for(let s=0;s<n.length;s++){const l=n[s].trim();if(!l.startsWith("#EXTINF:"))continue;let{duration:r,startDuration:c,endDuration:p,filePath:d}=fe.parse_EXTINF(l,n[s+1],o);if(e&&typeof e.handlerFilePath=="function"){let g=e.handlerFilePath(d);typeof g=="string"&&(d=g);}o+=r;let u=d.length.toString(),h=a.get(u)||[];h.push({filePath:d,startDuration:c,endDuration:p,duration:r,index:s}),a.set(u,h),s++;}let i=[];if(a.forEach((s,l)=>{i.push({filePathLength:l,segmentsInfoList:s});}),i=v.sortListByProperty(i,s=>s.segmentsInfoList.length,true),i.splice(0,1),i.length){let s=[];i.forEach(r=>{r.segmentsInfoList.forEach(c=>{s.push({index:c.index,data:c});});});let l=0;for(let r=0;r<n.length;r++){let c=s.findIndex(p=>p.index===r+l);if(c!=-1){let p=s[c];C.info(`通杀1：过滤广告片段 ==> 索引：${r+l} 文件名：${p.data.filePath} 开始：${de.duration2Text(p.data.startDuration)} 持续时长：${p.data.duration}s`),n.splice(r,2),r-=2,s.splice(c,1),l=l+2;}}}return i.forEach(s=>{s.segmentsInfoList.forEach(l=>{_e(l);});}),{m3u8Text:n.join(`
`),filterInfo:i}},filterAdsWithFilePathSimilar(t,e={similarCompareValue:.35,includePercent:.5,handlerFilePath(n){return n}}){let n=t.split(`
`),a=[],o=0;for(let l=0;l<n.length;l++){const r=n[l].trim();if(!r.startsWith("#EXTINF:"))continue;let{duration:c,startDuration:p,endDuration:d,filePath:u}=fe.parse_EXTINF(r,n[l+1],o);if(e&&typeof e.handlerFilePath=="function"){let h=e.handlerFilePath(u);typeof h=="string"&&(u=h);}o+=c,a.push({filePath:u,startDuration:p,endDuration:d,duration:c,index:l}),l++;}let i=[],s=0;for(let l=0;l<a.length;l++){const r=a[l];let c=true,p=0,d=a;for(let u=0;u<d.length;u++){const h=d[u];if(de.similar(r.filePath,h.filePath)>=e.similarCompareValue&&p++,p/d.length>e.includePercent){c=false;break}}c&&(i.push(r),C.info(`通杀2：过滤广告片段 ==> 索引：${r.index} 文件名：${r.filePath} 开始：${de.duration2Text(r.startDuration)} 持续时长：${r.duration}s`),n.splice(r.index-s,2),s+=2);}return i.forEach(l=>{_e(l);}),{m3u8Text:n.join(`
`),filterInfo:i}}},he={$key:{STORAGE_KEY:"m3u8-rule"},$data:{matchedRule:[]},init(){let t=this.getData();this.registerMenu(t);for(let e=0;e<t.length;e++)try{const n=t[e];n.enable&&window.location.href.match(new RegExp(n.data.url))&&this.$data.matchedRule.push(n);}catch(n){C.error("m3u8过滤器 ==> 规则初始化出错",n);}this.$data.matchedRule.length&&(C.info("m3u8过滤器 ==> 当前网站执行的规则：",this.$data.matchedRule),Pe.hook(),Ve.updateISMatchedRuleMenu());},registerMenu(t){ie.update([{key:"m3u8-rule",text:`⚙ 自定义规则（${t.length}条）`,autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showView();}},{key:"m3u8-export-rule",text:"⚙ 规则导出",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.exportRule("m3u8-filter-rule.json");}},{key:"m3u8-import-rule",text:"⚙ 规则导入",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.importRule();}}]);},getTemplateData(){return {uuid:v.generateUUID(),enable:true,name:"",data:{url:"",commonFilterAdsSegmentsFilePathLength:true,commonFilterAdsSegmentsFilePathSimilar:false,ownFilterCode:""}}},showView(){let t=D.config.PanelHandlerComponents();function e(a){return {get(o,i){return a[o]??i},set(o,i){a[o]=i;}}}new Ue({title:"m3u8自定义规则",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:a=>a.name,updateData:a=>this.updateData(a),deleteData:a=>this.deleteData(a),getData:a=>this.getData().find(s=>s.uuid===a.uuid)??a,itemControls:{enable:{enable:true,getEnable(a){return a.enable},callback:(a,o)=>{a.enable=o,this.updateData(a);}},edit:{enable:true,getView:(a,o)=>{let i=document.createDocumentFragment();o||(a=this.getTemplateData());let s=Y("启用","enable",true);Reflect.set(s.props,L,e(a));let l=t.createSectionContainerItem_switch(s).$el,r=Ce("规则名称","name","","",void 0,"必填");Reflect.set(r.props,L,e(a));let c=t.createSectionContainerItem_input(r).$el,p=Ce("匹配网址","url","","",void 0,"必填，可正则，注意转义");Reflect.set(p.props,L,e(a.data));let d=t.createSectionContainerItem_input(p).$el,u=Y("广告通杀1","commonFilterAdsSegmentsFilePathLength",true,void 0,"使用文件名称长度比较");Reflect.set(u.props,L,e(a.data));let h=t.createSectionContainerItem_switch(u).$el,g=Y("广告通杀2","commonFilterAdsSegmentsFilePathSimilar",false,void 0,"使用文件名称相似度比较");Reflect.set(g.props,L,e(a.data));let V=t.createSectionContainerItem_switch(g).$el,S=Oe("自定义过滤js","ownFilterCode","","",void 0,`参数：
    [m3u8Text]：需要处理的m3u8字符串
返回：[String]

例如：
m3u8Text = m3u8Text.replace('','');
return m3u8Text;
`);Reflect.set(S.props,L,e(a.data));let $=t.createSectionContainerItem_textarea(S).$el;return i.appendChild(l),i.appendChild(c),i.appendChild(d),i.appendChild(h),i.appendChild(V),i.appendChild($),i},onsubmit:(a,o,i)=>{let s=a.querySelectorAll(".rule-form-ulist > li"),l=this.getTemplateData();return o&&(l.uuid=i.uuid),s.forEach(r=>{let c=Reflect.get(r,t.$data.nodeStoreConfigKey),p=Reflect.get(c,"attributes"),d=Reflect.get(r,L),u=Reflect.get(p,H),h=Reflect.get(p,z),g=d.get(u,h);Reflect.has(l,u)?Reflect.set(l,u,g):Reflect.has(l.data,u)?Reflect.set(l.data,u,g):C.error(`${u}不在数据中`);}),l.name.trim()===""?(y.error("规则名称不能为空"),{success:false,data:l}):l.data.url.trim()===""?(y.error("匹配网址不能为空"),{success:false,data:l}):o?{success:this.updateData(l),data:l}:{success:this.addData(l),data:l}},style:`
                        li[data-key="ownFilterCode"]{
                            gap: 30px;
                        }
                        li[data-key="ownFilterCode"] .pops-panel-textarea{
                            flex: 1;
                        }
                        li[data-key="ownFilterCode"] .pops-panel-textarea textarea{
                            height: 300px;
                        }
                    `},delete:{enable:true,deleteCallBack:a=>this.deleteData(a)}},bottomControls:{filter:{enable:true,option:[{name:"启用",value:"enable",filterCallBack(a){return a.enable}},{name:"未启用",value:"notEnable",filterCallBack(a){return !a.enable}},{name:"当前网址运行的规则",value:"currentUrl",filterCallBack(a){try{return !!window.location.href.match(new RegExp(a.data.url))}catch{return  false}}}],inputOption:[{name:"规则名称",value:"name",filterCallBack(a,o){return !!a.name.match(o)}},{name:"网址",value:"url",filterCallBack(a,o){return !!a.data.url.match(o)}}]}}}).showView();},runRule(t){let e=t;for(let n=0;n<this.$data.matchedRule.length;n++)try{const o=this.$data.matchedRule[n].data;if(o.commonFilterAdsSegmentsFilePathLength){const{filterInfo:i,m3u8Text:s}=Q.filterAdsWithFilePathLength(e);e=s;}if(o.commonFilterAdsSegmentsFilePathSimilar){const{filterInfo:i,m3u8Text:s}=Q.filterAdsWithFilePathSimilar(e);e=s;}if(o.ownFilterCode.trim()!==""){let s=new Function("m3u8Text","M3U8Filter","M3U8Parser",o.ownFilterCode)(e,Q,fe);typeof s=="string"?e=s:C.error("m3u8过滤器 ==> 自定义过滤js代码执行结果不是字符串",s);}break}catch(a){C.error("m3u8过滤器 ==> 执行m3u8文本过滤时出现异常",a);}return e},getData(){return ee(this.$key.STORAGE_KEY,[])},setData(t){te(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(a=>a.uuid==t.uuid)===-1?(e.push(t),te(this.$key.STORAGE_KEY,e),true):false},updateData(t){let e=this.getData(),n=e.findIndex(o=>o.uuid==t.uuid),a=false;return n!==-1&&(a=true,e[n]=t),this.setData(e),a},deleteData(t){let e=this.getData(),n=e.findIndex(o=>o.uuid==t.uuid),a=false;return n!==-1&&(a=true,e.splice(n,1)),this.setData(e),a},clearData(){ae(this.$key.STORAGE_KEY);},exportRule(t="rule.json"){let e=this.getData(),n=new Blob([JSON.stringify(e,null,4)]),a=window.URL.createObjectURL(n),o=f.createElement("a");o.href=a,o.download=t,o.click(),setTimeout(()=>{window.URL.revokeObjectURL(a);},1500);},importRule(t){let e=D.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(l,r){l.close();}}},mask:{enable:true},drag:true,width:G.info.width,height:G.info.height,style:`
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),n=e.$shadowRoot.querySelector(".btn-control[data-mode='local']"),a=e.$shadowRoot.querySelector(".btn-control[data-mode='network']"),o=e.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),i=l=>{let r=this.getData(),c=[];for(let p=0;p<l.length;p++){const d=l[p];r.findIndex(h=>h.uuid===d.uuid)!==-1||c.push(d);}r=r.concat(c),this.setData(r),y.success(`共 ${l.length} 条规则，新增 ${c.length} 条`),t?.();},s=l=>new Promise(r=>{let c=v.toJSON(l);if(!Array.isArray(c)){C.error(c),y.error("导入失败，格式不符合（不是数组）",{consoleLogContent:true}),r(false);return}if(!c.length){y.error("导入失败，解析出的数据为空",{consoleLogContent:true}),r(false);return}i(c),r(true);});f.on(n,"click",l=>{f.preventEvent(l),e.close();let r=f.createElement("input",{type:"file",accept:".json"});f.on(r,["propertychange","input"],c=>{if(!r.files?.length)return;let p=r.files[0],d=new FileReader;d.onload=()=>{s(d.result);},d.readAsText(p,"UTF-8");}),r.click();}),f.on(a,"click",l=>{f.preventEvent(l),e.close();let r=D.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(d,u){d.close();}},ok:{text:"导入",callback:async(d,u)=>{let h=d.text;if(v.isNull(h)){y.error("请填入完整的url");return}let g=y.loading("正在获取配置..."),V=await se.get(h,{allowInterceptConfig:false});if(g.close(),!V.status){C.error(V),y.error("获取配置失败",{consoleLogContent:true});return}await s(V.data.responseText)&&d.close();}},cancel:{enable:false}},mask:{enable:true},drag:true,width:G.info.width,height:"auto"}),c=r.$shadowRoot.querySelector("input"),p=r.$shadowRoot.querySelector(".pops-prompt-btn-ok");f.on(c,["input","propertychange"],d=>{f.val(c)===""?f.attr(p,"disabled","true"):f.removeAttr(p,"disabled");}),f.onKeyboard(c,"keydown",(d,u,h)=>{d==="Enter"&&h.length===0&&f.val(c)!==""&&f.emit(p,"click");}),f.emit(c,"input");}),f.on(o,"click",async l=>{f.preventEvent(l),e.close();let r=await v.getClipboardInfo();if(r.error!=null){y.error(r.error.toString());return}if(r.content.trim()===""){y.warning("获取到的剪贴板内容为空");return}await s(r.content);});}},Ge={id:"component-common",title:"通用",views:[{text:"Toast配置",type:"container",views:[ve("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],t=>{C.info("设置当前Qmsg弹出位置"+t.text);},"Toast显示在页面九宫格的位置"),ve("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),Y("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]},{text:"Cookie配置",type:"container",views:[Y("启用","httpx-use-cookie-enable",false,void 0,"启用后，将根据下面的配置进行添加cookie"),Y("使用document.cookie","httpx-use-document-cookie",false,void 0,"自动根据请求的域名来设置对应的cookie")]}]};le.addContentConfig([Ge]);$e.deleteMenuOption();F.init();he.init();

})(Qmsg, DOMUtils, pops, Utils);