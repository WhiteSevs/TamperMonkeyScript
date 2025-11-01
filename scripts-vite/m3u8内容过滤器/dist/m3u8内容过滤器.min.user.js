// ==UserScript==
// @name         m3u8内容过滤器
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.11.1
// @author       WhiteSevs
// @description  自定义规则对网页中的m3u8的请求内容进行过滤
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.9.6/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.7.4/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.6.1/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.6.0/dist/index.umd.min.js
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

(function (y, T, j, re) {
    'use strict';

    var ae=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,ye=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,ee=typeof GM_getValue<"u"?GM_getValue:void 0,J=typeof GM_info<"u"?GM_info:void 0,ne=typeof GM_listValues<"u"?GM_listValues:void 0,Se=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,te=typeof GM_setValue<"u"?GM_setValue:void 0,be=typeof GM_setValues<"u"?GM_setValues:void 0,Re=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Ee=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,B=typeof unsafeWindow<"u"?unsafeWindow:void 0,De=window;const oe="GM_Panel",Ie="data-init",K="data-key",W="data-default-value",Ae="data-init-more-value",Me="data-plugin-search-config",I="data-storage-api",G={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},P={setting:{get width(){return G.width<550?"88vw":G.width<700?"550px":"700px"},get height(){return G.height<450?"70vh":G.height<550?"450px":"550px"}},settingMiddle:{get width(){return G.width<350?"88vw":"350px"}},info:{get width(){return G.width<350?"88vw":"350px"},get height(){return G.height<250?"88vh":"250px"}}};class Fe{storageKey;listenerData;constructor(e){if(typeof e=="string"){const n=e.trim();if(n=="")throw new Error("key参数不能为空字符串");this.storageKey=n;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new j.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.triggerValueChangeListener=this.triggerValueChangeListener.bind(this);}getLocalValue(){let e=ee(this.storageKey);return e==null&&(e={},this.setLocalValue(e)),e}setLocalValue(e){te(this.storageKey,e);}set(e,n){const a=this.get(e),o=this.getLocalValue();Reflect.set(o,e,n),this.setLocalValue(o),this.triggerValueChangeListener(e,a,n);}get(e,n){const a=this.getLocalValue();return Reflect.get(a,e)??n}getAll(){return this.getLocalValue()}delete(e){const n=this.get(e),a=this.getLocalValue();Reflect.deleteProperty(a,e),this.setLocalValue(a),this.triggerValueChangeListener(e,n,void 0);}has(e){const n=this.getLocalValue();return Reflect.has(n,e)}keys(){const e=this.getLocalValue();return Reflect.ownKeys(e)}values(){const e=this.getLocalValue();return Reflect.ownKeys(e).map(n=>Reflect.get(e,n))}clear(){ae(this.storageKey);}addValueChangeListener(e,n){const a=Math.random(),o=this.listenerData.get(e)||[];return o.push({id:a,key:e,callback:n}),this.listenerData.set(e,o),a}removeValueChangeListener(e){let n=false;for(const[a,o]of this.listenerData.entries()){for(let s=0;s<o.length;s++){const r=o[s];(typeof e=="string"&&r.key===e||typeof e=="number"&&r.id===e)&&(o.splice(s,1),s--,n=true);}this.listenerData.set(a,o);}return n}async triggerValueChangeListener(...e){const[n,a,o]=e;if(!this.listenerData.has(n))return;let s=this.listenerData.get(n);for(let r=0;r<s.length;r++){const l=s[r];if(typeof l.callback=="function"){let i=this.get(n),c,u;typeof a<"u"&&e.length>=2?u=a:u=i,typeof o<"u"&&e.length>2?c=o:c=i,await l.callback(n,u,c);}}}}const U=new Fe(oe),$e={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{A.showPanel(le.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){A.isTopWindow()&&ie.add(this.$data.menuOption);},addMenuOption(t){Array.isArray(t)||(t=[t]),this.$data.menuOption.push(...t);},updateMenuOption(t){Array.isArray(t)||(t=[t]),t.forEach(e=>{let n=this.$data.menuOption.findIndex(a=>a.key===e.key);n!==-1&&(this.$data.menuOption[n]=e);});},getMenuOption(t=0){return this.$data.menuOption[t]},deleteMenuOption(t=0){this.$data.menuOption.splice(t,1);}},Z={waitRemove(...t){t.forEach(e=>{typeof e=="string"&&T.waitNodeList(e).then(n=>{n.forEach(a=>a.remove());});});},createBlockCSSNode(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),T.createElement("style",{type:"text/css",innerHTML:`${e.join(`,
`)}{display: none !important;}`})},addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),we(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){const e=typeof ye=="function"?ye(t.keyName):null;return typeof e=="string"&&e?we(e):Z.loadStyleLink(t.url)},async loadStyleLink(t){let e=document.createElement("link");return e.rel="stylesheet",e.type="text/css",e.href=t,new Promise(n=>{T.ready(()=>{document.head.appendChild(e),n(e);});})},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(n=>{e.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.startsWith("data:")||t.match(/^http(s|):\/\//i)?t:t.startsWith("//")?(t.startsWith("///")||(t=window.location.protocol+t),t):(t.startsWith("/")||(t+="/"),t=window.location.origin+t,t)},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;try{let e=new URL(t);return e.protocol="https:",e.toString()}catch{return t}},lockScroll(...t){let e=document.createElement("style");e.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...t||[]);return n.forEach(a=>{a.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(e),{recovery(){n.forEach(a=>{a.classList.remove("pops-overflow-hidden-important");}),e.remove();}}},async getClipboardText(){function t(a){navigator.clipboard.readText().then(o=>{a(o);}).catch(o=>{_.error("读取剪贴板内容失败👉",o),a("");});}function e(a){navigator.permissions.query({name:"clipboard-read"}).then(o=>{t(a);}).catch(o=>{_.error("申请剪贴板权限失败，尝试直接读取👉",o.message??o.name??o.stack),t(a);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(a=>{if(!n()){a("");return}document.hasFocus()?e(a):window.addEventListener("focus",()=>{e(a);},{once:true});})},escapeHtml(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(t,e,n=5e3){let a,o=n-e,s=e,r=async l=>{let i=await t(l);if(typeof i=="boolean"&&!i||l){w.workerClearTimeout(a);return}if(s+=e,s>o){r(true);return}a=w.workerSetTimeout(()=>{r(false);},e);};r(false);},findParentNode(t,e,n){if(n){let a=T.closest(t,n);if(a)return a.querySelector(e)}else return T.matches(t,e)?t:T.closest(t,e)},toStr(t){const e="__undefined__placeholder__replaced__str__";return JSON.stringify(t,(a,o)=>o===void 0?e:o,2).replace(new RegExp(`"${e}"`,"g"),"undefined")}},A={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new w.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new w.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new w.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new w.Dictionary),this.__onceExecData},get scriptName(){return pe},get panelConfig(){return this.__panelConfig},set panelConfig(t){this.__panelConfig=t;},key:oe,attributeKeyName:K,attributeDefaultValueName:W},init(){this.initContentDefaultValue(),$e.init();},isTopWindow(){return B.top===B.self},initContentDefaultValue(){const t=a=>{if(!a.attributes||a.type==="button"||a.type==="forms"||a.type==="deepMenu")return;const o=a.attributes;let s=o[Ie];if(typeof s=="function"){let c=s();if(typeof c=="boolean"&&!c)return}let r=new Map,l=o[K];if(l!=null){const c=o[W];r.set(l,c);}let i=o[Ae];if(typeof i=="object"&&i&&Object.keys(i).forEach(c=>{const u=i[c];r.set(c,u);}),!r.size){_.warn(["请先配置键",a]);return}if(a.type==="switch"){let c=typeof a.disabled=="function"?a.disabled():a.disabled;typeof c=="boolean"&&c&&this.$data.contentConfigInitDisabledKeys.push(...r.keys());}for(const[c,u]of r.entries())this.setDefaultValue(c,u);},e=a=>{for(let o=0;o<a.length;o++){let s=a[o];t(s);let r=s.forms;r&&Array.isArray(r)&&e(r);}},n=[...le.getAllContentConfig()];for(let a=0;a<n.length;a++){let o=n[a];if(!o.forms)continue;const s=o.forms;s&&Array.isArray(s)&&e(s);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(t,e){this.$data.contentConfigInitDefaultValue.has(t)&&_.warn("请检查该key(已存在): "+t),this.$data.contentConfigInitDefaultValue.set(t,e);},getDefaultValue(t){return this.$data.contentConfigInitDefaultValue.get(t)},setValue(t,e){U.set(t,e);},getValue(t,e){const n=U.get(t);return n??(this.$data.contentConfigInitDefaultValue.has(t)?this.$data.contentConfigInitDefaultValue.get(t):e)},deleteValue(t){U.delete(t);},hasKey(t){return U.has(t)},addValueChangeListener(t,e){return U.addValueChangeListener(t,(a,o,s)=>{e(t,s,o);})},removeValueChangeListener(t){U.removeValueChangeListener(t);},triggerMenuValueChange(t,e,n){U.triggerValueChangeListener(t,n,e);},async exec(t,e,n,a=true){const o=this;let s;typeof t=="string"||Array.isArray(t)?s=()=>t:s=t;let r=false;const l=s();let i=[];Array.isArray(l)?(r=true,i=l):i.push(l);const c=i.find(g=>!this.$data.contentConfigInitDefaultValue.has(g));if(c){_.warn(`${c} 键不存在`);return}const u=JSON.stringify(i);if(a&&this.$data.onceExecMenuData.has(u))return this.$data.onceExecMenuData.get(u);let d=[];const p=[];let h=[];const m=(g,x)=>{let F=[],V=[],b=[];if(Array.isArray(x))b=b.concat(x);else if(typeof x=="object"&&x!=null)if(x instanceof Element)b.push(x);else {const{$css:C,destory:$}=x;C!=null&&(Array.isArray(C)?b=b.concat(C):b.push(C)),typeof $=="function"&&b.push($);}else b.push(x);for(const C of b)if(C!=null){if(C instanceof Element){F.push(C);continue}if(typeof C=="function"){h.push(C);continue}}g?(d=d.concat(F),h=h.concat(V)):(E(),M());},S=g=>!!this.getValue(g),E=()=>{for(let g=0;g<d.length;g++)d[g]?.remove(),d.splice(g,1),g--;},M=()=>{for(let g=0;g<h.length;g++){const x=h[g];x(),h.splice(g,1),g--;}},D=()=>{let g=false;return typeof n=="function"?g=n(i):g=i.every(x=>S(x)),g},v=async g=>{if(D()){const F=i.map(b=>this.getValue(b)),V=await e({value:r?F:F[0],addStoreValue:(...b)=>m(true,b)});m(true,V);}else m(false,[]);};a&&i.forEach(g=>{const x=this.addValueChangeListener(g,(F,V,b)=>v());p.push(x);}),await v();const k={reload(){this.clearStoreStyleElements(),this.destory(),v();},clear(){this.clearStoreStyleElements(),this.destory(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreStyleElements:()=>E(),destory(){return M()},removeValueChangeListener:()=>{p.forEach(g=>{this.removeValueChangeListener(g);});},clearOnceExecMenuData(){a&&o.$data.onceExecMenuData.delete(u);}};return this.$data.onceExecMenuData.set(u,k),k},async execMenu(t,e,n=false,a=false){return await this.exec(t,async o=>await e(o),o=>o.every(r=>{let l=!!this.getValue(r);return A.$data.contentConfigInitDisabledKeys.includes(r)&&(l=false,_.warn(`.execMenu${a?"Once":""} ${r} 被禁用`)),n&&(l=!l),l}),a)},async execMenuOnce(t,e,n=false,a=false){const o=await this.execMenu(t,e,n,true);if(a&&o){const s=()=>{o.reload();};this.removeUrlChangeWithExecMenuOnceListener(t),this.addUrlChangeWithExecMenuOnceListener(t,s);}return o},deleteExecMenuOnce(t){return t=this.transformKey(t),this.$data.onceExecMenuData.delete(t),this.$data.urlChangeReloadMenuExecOnce.delete(t),U.removeValueChangeListener(t)},onceExec(t,e){if(t=this.transformKey(t),typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(t)||(e(),this.$data.onceExecData.set(t,1));},deleteOnceExec(t){t=this.transformKey(t),this.$data.onceExecData.delete(t);},addUrlChangeWithExecMenuOnceListener(t,e){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.set(t,e);},removeUrlChangeWithExecMenuOnceListener(t){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.delete(t);},hasUrlChangeWithExecMenuOnceListener(t){return t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.has(t)},async triggerUrlChangeWithExecMenuOnceEvent(t){const e=this.$data.urlChangeReloadMenuExecOnce.values();for(const n of e)await n(t);},showPanel(t,e=`${pe}-设置`,n=false,a=false){this.$data.$panel=null,this.$data.panelContent=[];let o=t.findIndex(r=>(typeof r.isBottom=="function"?r.isBottom():!!r.isBottom)&&r.id==="script-version")!==-1;!n&&!o&&t.push(...le.getDefaultBottomContentConfig());let s=R.panel({title:{text:e,position:"center",html:false,style:""},content:t,btn:{close:{enable:true,callback:(r,l)=>{r.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(r,l)=>{r(),this.$data.$panel=null;}},width:P.setting.width,height:P.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=s,this.$data.panelContent=t,a||this.registerConfigSearch({$panel:s,content:t});},registerConfigSearch(t){const{$panel:e,content:n}=t,a=async(p,h)=>{if(p==null)return;const m=await h(p);return m&&typeof m.isFind=="boolean"&&m.isFind?m.data:await a(m.data,h)},o=(p,h)=>{const m=new IntersectionObserver(S=>{S.forEach(E=>{E.isIntersecting&&(h?.(),m.disconnect());});},{root:null,threshold:1});m.observe(p),p.scrollIntoView({behavior:"smooth",block:"center"});},s=p=>{const h="pops-flashing";f.animationend(p,()=>{p.classList.remove(h);}),p.classList.add(h);},r=p=>{if(p.type==="dblclick"&&d)return;f.preventEvent(p),i=null;const h=R.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:P.settingMiddle.width,height:"auto",drag:true,style:`
					${R.config.cssText.panelCSS}

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
				`});h.$shadowRoot.querySelector(".search-wrapper");const m=h.$shadowRoot.querySelector(".search-config-text"),S=h.$shadowRoot.querySelector(".search-result-wrapper");m.focus();const E=()=>{f.empty(S);},M=v=>{const k=w.queryProperty(v,x=>x?.next?{isFind:false,data:x.next}:{isFind:true,data:x}),g=f.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${k.matchedData?.path}</div>
							<div class="search-result-item-description">${k.matchedData?.description??""}</div>
						`});return f.on(g,"click",x=>{const V=e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[v.index];if(!V){y.error(`左侧项下标${v.index}不存在`);return}V.scrollIntoView({behavior:"smooth",block:"center"}),V.click(),a(v.next,async b=>{if(b?.next){const C=await f.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find($=>{const O=Reflect.get($,"__formConfig__");return typeof O=="object"&&O!=null&&O.text===b.name}),2500);if(C)C.click();else return y.error("未找到对应的二级菜单"),{isFind:true,data:b};return {isFind:false,data:b.next}}else {const C=await f.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find($=>Reflect.get($,"__formConfig__")===b.matchedData?.formConfig),2500);if(C){o(C);const $=C.closest(".pops-panel-forms-fold[data-fold-enable]");$&&($.querySelector(".pops-panel-forms-fold-container").click(),await w.sleep(500)),o(C,()=>{s(C);});}else y.error("未找到对应的菜单项");return {isFind:true,data:b}}});}),g},D=v=>{const k=new RegExp(v,"i"),g=[],x=(V,b)=>{for(let C=0;C<V.length;C++){const $=V[C],O=$.forms;if(O&&Array.isArray(O)){const N=w.deepClone(b);if($.type==="deepMenu"){const H=w.queryProperty(N,z=>z?.next?{isFind:false,data:z.next}:{isFind:true,data:z});H.next={name:$.text};}x(O,N);}else {let N,H;if($.type==="own"){const L=Reflect.get($.attributes||{},Me);L&&(typeof L.text=="string"&&(N=L.text),typeof L.desc=="string"&&(H=L.desc));}else N=Reflect.get($,"text"),H=Reflect.get($,"description");const z=[N,H],ge=z.findIndex(L=>{if(typeof L=="string")return L.match(k)});if(ge!==-1){const L=w.deepClone(b),me=w.queryProperty(L,q=>q?.next?{isFind:false,data:q.next}:{isFind:true,data:q});me.next={name:N,matchedData:{path:"",formConfig:$,matchedText:z[ge],description:H}};const xe=[];w.queryProperty(L,q=>{const ue=q?.name;return typeof ue=="string"&&ue.trim()!==""&&xe.push(ue),q?.next?{isFind:false,data:q.next}:{isFind:true,data:q}});const Ve=xe.join(Z.escapeHtml(" - "));me.next.matchedData.path=Ve,g.push(L);}}}};for(let V=0;V<n.length;V++){const b=n[V];if(!b.forms||b.isBottom&&b.id==="script-version")continue;const C=b.forms;if(C&&Array.isArray(C)){let $=b.title;typeof $=="function"&&($=$()),x(C,{index:V,name:$});}}const F=document.createDocumentFragment();for(const V of g){let b=M(V);F.appendChild(b);}E(),S.append(F);};f.on(m,"input",w.debounce(v=>{f.preventEvent(v);let k=f.val(m).trim();if(k===""){E();return}D(k);},200));};e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(p=>{f.on(p,"dblclick",r);});let i=null,c=false,u,d=false;f.on(e.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(p,h)=>{d=true,clearTimeout(u),u=void 0,c&&i===h?(c=false,i=null,r(p)):(u=setTimeout(()=>{c=false;},200),c=true,i=h);},{capture:true}),e.$shadowRoot.appendChild(f.createElement("style",{type:"text/css",textContent:`
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
				`}));},transformKey(t){if(Array.isArray(t)){const e=t.sort();return JSON.stringify(e)}else return t}},X={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},w=j.noConflict(),f=T.noConflict(),R=re,_=new w.Log(J,B.console||De.console),pe=J?.script?.name||void 0,Le=re.config.Utils.AnyTouch(),Te=false;_.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});y.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(t){const e=t.setting.type;if(e==="loading")return  false;const n=t.setting.content;return e==="warning"?_.warn(n):e==="error"?_.error(n):_.info(n),true},get position(){return A.getValue(X.qmsg_config_position.key,X.qmsg_config_position.defaultValue)},get maxNums(){return A.getValue(X.qmsg_config_maxnums.key,X.qmsg_config_maxnums.defaultValue)},get showReverse(){return A.getValue(X.qmsg_config_showreverse.key,X.qmsg_config_showreverse.defaultValue)},get zIndex(){let t=j.getMaxZIndex(),e=re.config.InstanceUtils.getPopsMaxZIndex().zIndex;return j.getMaxValue(t,e)+100}});R.GlobalConfig.setGlobalConfig({zIndex:()=>{const t=j.getMaxZIndex(void 0,void 0,n=>{if(n?.classList?.contains("qmsg-shadow-container")||n?.closest("qmsg")&&n.getRootNode()instanceof ShadowRoot)return  false}),e=re.config.InstanceUtils.getPopsMaxZIndex().zIndex;return j.getMaxValue(t,e)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const ie=new w.GM_Menu({GM_getValue:ee,GM_setValue:te,GM_registerMenuCommand:Se,GM_unregisterMenuCommand:Re}),se=new w.Httpx({xmlHttpRequest:Ee,logDetails:Te});se.interceptors.request.use(t=>t);se.interceptors.response.use(void 0,t=>(_.error("拦截器-请求错误",t),t.type==="onabort"?y.warning("请求取消",{consoleLogContent:true}):t.type==="onerror"?y.error("请求异常",{consoleLogContent:true}):t.type==="ontimeout"?y.error("请求超时",{consoleLogContent:true}):y.error("其它错误",{consoleLogContent:true}),t));B.Object.defineProperty,B.Function.prototype.apply,B.Function.prototype.call,B.Element.prototype.appendChild,B.setTimeout;const we=f.addStyle.bind(f);T.selector.bind(T);T.selectorAll.bind(T);new w.GM_Cookie;const le={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new w.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(t){Array.isArray(t)||(t=[t]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,t);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(t=0){return this.$data.contentConfig.get(t)??[]},getDefaultBottomContentConfig(){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let t=false,e;const n=(s,r)=>{typeof r!="string"&&(r=Z.toStr(r));const l=new Blob([r]),i=globalThis.URL.createObjectURL(l);f.createElement("a",{href:i,download:s}).click(),w.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(i);},500);},a=()=>{const s=d=>{const p=R.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="local">本地导入</div>
            <div class="btn-control" data-mode="network">网络导入</div>
            <div class="btn-control" data-mode="clipboard">剪贴板导入</div>`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(D,v){D.close();}}},drag:true,mask:{enable:true},width:P.info.width,height:P.info.height,style:`
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
          }`}),h=p.$shadowRoot.querySelector(".btn-control[data-mode='local']"),m=p.$shadowRoot.querySelector(".btn-control[data-mode='network']"),S=p.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),E=async D=>{confirm("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）")&&(typeof ne=="function"?typeof ae=="function"?(ne().forEach(g=>{ae(g);}),y.success("已清空脚本存储的配置")):y.error("不支持GM_deleteValue函数，无法执行删除脚本配置"):y.error("不支持GM_listValues函数，无法清空脚本存储的配置")),typeof be=="function"?be(D):Object.keys(D).forEach(g=>{const x=D[g];te(g,x);}),y.success("配置导入完毕");},M=D=>new Promise(async v=>{const k=w.toJSON(D);Object.keys(k).length===0?y.warning("解析为空配置，不导入"):await E(k),v(true);});f.on(h,"click",D=>{f.preventEvent(D),p.close();const v=f.createElement("input",{type:"file",accept:".json"});f.on(v,["propertychange","input"],k=>{if(!v.files?.length)return;const g=v.files[0],x=new FileReader;x.onload=()=>{M(x.result);},x.readAsText(g,"UTF-8");}),v.click();}),f.on(m,"click",D=>{f.preventEvent(D),p.close();const v=R.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(x,F){x.close();}},ok:{text:"导入",callback:async(x,F)=>{const V=x.text;if(w.isNull(V)){y.error("请填入完整的url");return}const b=y.loading("正在获取配置..."),C=await se.get(V,{allowInterceptConfig:false});if(b.close(),!C.status){_.error(C),y.error("获取配置失败",{consoleLogContent:true});return}await M(C.data.responseText)&&x.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:P.info.width,height:"auto"}),k=v.$shadowRoot.querySelector("input"),g=v.$shadowRoot.querySelector(".pops-prompt-btn-ok");f.on(k,["input","propertychange"],x=>{f.val(k)===""?f.attr(g,"disabled","true"):f.removeAttr(g,"disabled");}),f.listenKeyboard(k,"keydown",(x,F,V)=>{x==="Enter"&&V.length===0&&f.val(k)!==""&&f.trigger(g,"click");}),f.trigger(k,"input");}),f.on(S,"click",async D=>{f.preventEvent(D),p.close();let v=await Z.getClipboardText();if(v.trim()===""){y.warning("获取到的剪贴板内容为空");return}await M(v);});},r=(d=`${pe}_panel-setting-${w.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,p)=>{const h=R.alert({title:{text:"请选择导出方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="export-to-file">导出至文件</div>
            <div class="btn-control" data-mode="export-to-clipboard">导出至剪贴板</div>
            `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(E,M){E.close();}}},drag:true,mask:{enable:true},width:P.info.width,height:P.info.height,style:`
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
          }`}),m=h.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),S=h.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");f.on(m,"click",E=>{f.preventEvent(E);try{n(d,p),h.close();}catch(M){y.error(M.toString(),{consoleLogContent:true});}}),f.on(S,"click",async E=>{await w.copy(p)?(y.success("复制成功"),h.close()):y.error("复制失败");});},i=R.confirm({title:{text:"配置",position:"center"},content:{text:`
            <textarea name="config-value" id="config" readonly></textarea>
          `,html:true},btn:{ok:{enable:true,type:"primary",text:"导入",callback(d,p){s();}},cancel:{enable:true,text:"导出",callback(d,p){r(void 0,u);}}},width:G.width<450?"90vw":"450px",height:"auto",style:`
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
        `}).$shadowRoot.querySelector("textarea"),c={};if(typeof ne=="function")ne().forEach(p=>{const h=ee(p);Reflect.set(c,p,h);});else {y.warning("不支持函数GM_listValues，仅导出菜单配置");const d=ee(oe);Reflect.set(c,oe,d);}const u=Z.toStr(c);i.value=u;},o=()=>{let s=J?.script?.supportURL||J?.script?.namespace;typeof s=="string"&&w.isNotNull(s)&&window.open(s,"_blank");};return [{id:"script-version",title:`版本：${J?.script?.version||"未知"}`,isBottom:true,forms:[],clickFirstCallback(){return  false},afterRender(s){new Le(s.$asideLiElement).on("tap",function(l){clearTimeout(e),e=void 0,t?(t=false,a()):(e=setTimeout(()=>{t=false,o();},200),t=true);});}}]},setDefaultBottomContentConfig(t){this.$data.__defaultBottomContentConfig=t;}},Pe={get ajaxHooker(){return this.__ajaxHooker==null&&(this.__ajaxHooker=w.ajaxHooker()),this.__ajaxHooker},hook(){this.ajaxHooker.hook(t=>{let e=Z.fixUrl(t.url);try{if(!new URL(e).pathname.endsWith(".m3u8"))return;t.response=o=>{let s=o.responseText;if(s.trim()===""||!s.includes("#EXT-X-ENDLIST"))return;let r=he.runRule(s);o.responseText=r;};}catch(n){_.error("m3u8过滤器 hook network出错",n);}});},unhook(){this.ajaxHooker.unhook();}},ce={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new j.Dictionary),this.__storeApiFn}},getStorageApi(t){if(this.hasStorageApi(t))return this.$data.storeApiValue.get(t)},hasStorageApi(t){return this.$data.storeApiValue.has(t)},setStorageApi(t,e){this.$data.storeApiValue.set(t,e);},initComponentsStorageApi(t,e,n){let a;this.hasStorageApi(t)?a=this.getStorageApi(t):a=n,this.setComponentsStorageApiProperty(e,a);},setComponentsStorageApiProperty(t,e){Reflect.set(t.props,I,e);}},Ce=function(t,e,n,a,o,s="",r,l,i,c){const u={text:t,type:"input",isNumber:false,isPassword:false,attributes:{},props:{},description:a,afterAddToUListCallBack:i,getValue(){return this.props[I].get(e,n)},callback(d,p,h){this.props[I].set(e,p);},placeholder:s};return Reflect.set(u.attributes,K,e),Reflect.set(u.attributes,W,n),ce.initComponentsStorageApi("input",u,{get(d,p){return A.getValue(d,p)},set(d,p){A.setValue(d,p);}}),u},Y=function(t,e,n,a,o,s,r,l){const i={text:t,type:"switch",description:o,disabled:r,attributes:{},props:{},getValue(){return this.props[I].get(e,n)},callback(c,u){const d=!!u;_.success(`${d?"开启":"关闭"} ${t}`),this.props[I].set(e,d);},afterAddToUListCallBack:s};return Reflect.set(i.attributes,K,e),Reflect.set(i.attributes,W,n),ce.initComponentsStorageApi("switch",i,{get(c,u){return A.getValue(c,u)},set(c,u){A.setValue(c,u);}}),i};class Oe{option;constructor(e){this.option=e;}async showView(){let e=R.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist"></ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:true},btn:w.assign({ok:{callback:async()=>{await s();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
                ${R.config.cssText.panelCSS}
                
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
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),n=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");let a=e.$shadowRoot.querySelector(".rule-form-ulist"),o=await this.option.getView(await this.option.data());a.appendChild(o);const s=async()=>{(await this.option.onsubmit(n,await this.option.data())).success&&(e.close(),await this.option.dialogCloseCallBack(true));};}}class qe{option;$data={isFilteredData:[]};constructor(e){this.option=e;}showView(){let e=R.alert({title:{text:this.option.title,position:"center"},content:{text:`
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
            `}),n=e.$shadowRoot.querySelector(".filter-container"),a=document.createDocumentFragment();this.option.filterOption.forEach(o=>{let s=f.createElement("button",{innerText:o.name},{type:"button"}),r=async()=>{this.$data.isFilteredData=[],(await this.option.getAllRuleInfo()).forEach(async i=>{await o.filterCallBack(i.data)?f.show(i.$el,false):(f.hide(i.$el,false),this.$data.isFilteredData.push(i.data));}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),e.close();};f.on(s,"click",async l=>{f.preventEvent(l),!(typeof o.callback=="function"&&!await o.callback(l,r))&&await r();}),a.appendChild(s);}),n.appendChild(a);}getFilteredData(){return this.$data.isFilteredData}}class Ue{option;constructor(e){this.option=e;}async showView(e){let n=R.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:true},btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async r=>{this.showEditView(false,await this.option.getAddData(),n.$shadowRoot);}},close:{enable:true,callback(r){n.close();}},cancel:{enable:this.option?.bottomControls?.filter?.enable||false,type:"default",text:"过滤",callback:async(r,l)=>{if(typeof this.option?.bottomControls?.filter?.callback=="function"){let u=await this.option.bottomControls.filter.callback();if(typeof u=="boolean"&&!u)return}let i=()=>Array.from(n.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),c=l.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");if(f.text(c).includes("取消")){let u=await this.option?.bottomControls?.filter?.cancelFilterCallback?.({$button:c,getAllRuleElement:i});if(typeof u=="boolean"&&!u)return;i().forEach(d=>{f.show(d,false);}),f.text(c,"过滤");}else {let u=new qe({title:this.option.bottomControls?.filter?.title??"过滤规则",filterOption:this.option.bottomControls?.filter?.option||[],execFilterCallBack:async()=>{f.text(c,"取消过滤"),await this.option.bottomControls?.filter?.execFilterCallBack?.();const d=u.getFilteredData();d.length&&f.text(c,`取消过滤(${d.length})`);},getAllRuleInfo:()=>i().map(d=>({data:this.parseRuleItemElement(d).data,$el:d}))});u.showView();}}},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:r=>{let l=R.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async i=>{if(_.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){y.error("清理失败");return}else y.success("清理成功");await this.updateDeleteAllBtnText(n.$shadowRoot),this.clearContent(n.$shadowRoot),l.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
            ${R.config.cssText.panelCSS}
            
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
            `}),a=await this.option.data(),o=false,s=0;for(let r=0;r<a.length;r++){let l=a[r],i=await this.appendRuleItemElement(n.$shadowRoot,l),c=true;typeof e=="function"?c=e(l):typeof e=="number"&&!isNaN(e)&&(c=await this.option.bottomControls?.filter?.option[e]?.filterCallBack(l)??c),c||(o=true,f.hide(i,false),s++);}if(o){let r=n.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");f.text(r,`取消过滤${s?`(${s})`:""}`);}}showEditView(e,n,a,o,s,r){let l=async c=>{if(c){if(typeof r=="function"){let u=await this.option.getData(n);r(u);}}else if(e||await this.option.deleteData(n),typeof s=="function"){let u=await this.option.getData(n);s(u);}};new Oe({title:e?"编辑":"添加",data:()=>n,dialogCloseCallBack:l,getView:async c=>await this.option.itemControls.edit.getView(c,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async(c,u)=>{c.close(),await l(false);}},close:{callback:async(c,u)=>{c.close(),await l(false);}}},onsubmit:async(c,u)=>{let d=await this.option.itemControls.edit.onsubmit(c,e,u);return d.success?e?(y.success("修改成功"),a&&await this.updateRuleItemElement(d.data,o,a)):a&&await this.appendRuleItemElement(a,d.data):e&&_.error("修改失败"),d},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(e){let n=e.querySelector(".rule-view-container"),a=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:n,$deleteBtn:a}}parseRuleItemElement(e){let n=e.querySelector(".rule-controls-enable"),a=n.querySelector(".pops-panel-switch"),o=n.querySelector(".pops-panel-switch__input"),s=n.querySelector(".pops-panel-switch__core"),r=e.querySelector(".rule-controls-edit"),l=e.querySelector(".rule-controls-delete");return {$enable:n,$enableSwitch:a,$enableSwitchInput:o,$enableSwitchCore:s,$edit:r,$delete:l,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,n){let a=await this.option.getDataItemName(e),o=f.createElement("div",{className:"rule-item",innerHTML:`
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
					${R.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${R.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(o,"data-rule",e);let s="pops-panel-switch-is-checked";const{$enable:r,$enableSwitch:l,$enableSwitchCore:i,$enableSwitchInput:c,$delete:u,$edit:d}=this.parseRuleItemElement(o);return this.option.itemControls.enable.enable?(f.on(i,"click",async p=>{let h=false;l.classList.contains(s)?(l.classList.remove(s),h=false):(l.classList.add(s),h=true),c.checked=h,await this.option.itemControls.enable.callback(e,h);}),await this.option.itemControls.enable.getEnable(e)&&l.classList.add(s)):r.remove(),this.option.itemControls.edit.enable?f.on(d,"click",p=>{f.preventEvent(p),this.showEditView(true,e,n,o,h=>{e=null,e=h;});}):d.remove(),this.option.itemControls.delete.enable?f.on(u,"click",p=>{f.preventEvent(p);let h=R.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async m=>{_.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(y.success("成功删除该数据"),o.remove(),await this.updateDeleteAllBtnText(n),h.close()):y.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):u.remove(),o}async appendRuleItemElement(e,n){let{$container:a}=this.parseViewElement(e),o=[],s=Array.isArray(n)?n:[n];for(let r=0;r<s.length;r++){let l=s[r],i=await this.createRuleItemElement(l,e);a.appendChild(i),o.push(i);}return await this.updateDeleteAllBtnText(e),o}async updateRuleContaienrElement(e){this.clearContent(e);const{$container:n}=this.parseViewElement(e);let a=await this.option.data();await this.appendRuleItemElement(e,a),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,n,a){let o=await this.createRuleItemElement(e,a);n.after(o),n.remove();}clearContent(e){const{$container:n}=this.parseViewElement(e);f.html(n,"");}setDeleteBtnText(e,n,a=false){const{$deleteBtn:o}=this.parseViewElement(e);a?f.html(o,n):f.text(o,n);}async updateDeleteAllBtnText(e){let n=await this.option.data();this.setDeleteBtnText(e,`清空所有(${n.length})`);}}const de={duration2Text(t){const e=Math.floor(t/3600),n=Math.floor(t%3600/60),a=parseInt((t%60).toString());return [e.toString().padStart(2,"0"),n.toString().padStart(2,"0"),a.toString().padStart(2,"0")].join(":")},similar(t,e){if(!t||!e)return 0;var n=t.length>e.length?t.length:e.length,a=t.length,o=e.length,s=[],r=function(h,m,S){return h<m?h<S?h:S:m<S?m:S},l,i,c,u,d;if(a===0)return o;if(o===0)return a;for(l=0;l<=a;l++)s[l]=[],s[l][0]=l;for(i=0;i<=o;i++)s[0][i]=i;for(l=1;l<=a;l++)for(c=t.charAt(l-1),i=1;i<=o;i++)u=e.charAt(i-1),c===u?d=0:d=1,s[l][i]=r(s[l-1][i]+1,s[l][i-1]+1,s[l-1][i-1]+d);return 1-s[a][o]/n}},ke={updateISMatchedRuleMenu(){let t={key:"matched-rule-count",text:`🔧 当前页面执行规则数量： ${he.$data.matchedRule.length}`,autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{}};ie.update(t);},updateIsFilterAdsDurationInfoMenu(t){let e={key:"is-filter-segment-duration",text:`🍵 已过滤时长：${t}s`,autoReload:false,isStoreValue:false,showText(n){return n},callback:()=>{}};ie.update(e);}},fe={parse_EXTINF(t,e,n){let a=Number(t.replace(/(^#EXTINF:\s*|,)/g,"")),o=n,s=n+a;return {filePath:e.trim(),startDuration:o,endDuration:s,duration:a}}},_e=t=>{Q.$data.isFilterDuration+=t.duration,ke.updateIsFilterAdsDurationInfoMenu(Q.$data.isFilterDuration);},Q={$data:{isFilterDuration:0},filterAdsWithFilePathLength(t,e={handlerFilePath(n){return n}}){let n=t.split(`
`),a=new w.Dictionary,o=0;for(let r=0;r<n.length;r++){const l=n[r].trim();if(!l.startsWith("#EXTINF:"))continue;let{duration:i,startDuration:c,endDuration:u,filePath:d}=fe.parse_EXTINF(l,n[r+1],o);if(e&&typeof e.handlerFilePath=="function"){let m=e.handlerFilePath(d);typeof m=="string"&&(d=m);}o+=i;let p=d.length.toString(),h=a.get(p)||[];h.push({filePath:d,startDuration:c,endDuration:u,duration:i,index:r}),a.set(p,h),r++;}let s=[];if(a.forEach((r,l)=>{s.push({filePathLength:l,segmentsInfoList:r});}),s=w.sortListByProperty(s,r=>r.segmentsInfoList.length,true),s.splice(0,1),s.length){let r=[];s.forEach(i=>{i.segmentsInfoList.forEach(c=>{r.push({index:c.index,data:c});});});let l=0;for(let i=0;i<n.length;i++){let c=r.findIndex(u=>u.index===i+l);if(c!=-1){let u=r[c];_.info(`通杀1：过滤广告片段 ==> 索引：${i+l} 文件名：${u.data.filePath} 开始：${de.duration2Text(u.data.startDuration)} 持续时长：${u.data.duration}s`),n.splice(i,2),i-=2,r.splice(c,1),l=l+2;}}}return s.forEach(r=>{r.segmentsInfoList.forEach(l=>{_e(l);});}),{m3u8Text:n.join(`
`),filterInfo:s}},filterAdsWithFilePathSimilar(t,e={similarCompareValue:.35,includePercent:.5,handlerFilePath(n){return n}}){let n=t.split(`
`),a=[],o=0;for(let l=0;l<n.length;l++){const i=n[l].trim();if(!i.startsWith("#EXTINF:"))continue;let{duration:c,startDuration:u,endDuration:d,filePath:p}=fe.parse_EXTINF(i,n[l+1],o);if(e&&typeof e.handlerFilePath=="function"){let h=e.handlerFilePath(p);typeof h=="string"&&(p=h);}o+=c,a.push({filePath:p,startDuration:u,endDuration:d,duration:c,index:l}),l++;}let s=[],r=0;for(let l=0;l<a.length;l++){const i=a[l];let c=true,u=0,d=a;for(let p=0;p<d.length;p++){const h=d[p];if(de.similar(i.filePath,h.filePath)>=e.similarCompareValue&&u++,u/d.length>e.includePercent){c=false;break}}c&&(s.push(i),_.info(`通杀2：过滤广告片段 ==> 索引：${i.index} 文件名：${i.filePath} 开始：${de.duration2Text(i.startDuration)} 持续时长：${i.duration}s`),n.splice(i.index-r,2),r+=2);}return s.forEach(l=>{_e(l);}),{m3u8Text:n.join(`
`),filterInfo:s}}},Ge=function(t,e,n,a,o,s="",r,l){const i={text:t,type:"textarea",attributes:{},props:{},description:a,placeholder:s,disabled:r,getValue(){const u=this.props[I].get(e,n);return Array.isArray(u)?u.join(`
`):u},callback(c,u){this.props[I].set(e,u);}};return Reflect.set(i.attributes,K,e),Reflect.set(i.attributes,W,n),ce.initComponentsStorageApi("switch",i,{get(c,u){return A.getValue(c,u)},set(c,u){A.setValue(c,u);}}),i},he={$key:{STORAGE_KEY:"m3u8-rule"},$data:{matchedRule:[]},init(){let t=this.getData();this.registerMenu(t);for(let e=0;e<t.length;e++)try{const n=t[e];n.enable&&window.location.href.match(new RegExp(n.data.url))&&this.$data.matchedRule.push(n);}catch(n){_.error("m3u8过滤器 ==> 规则初始化出错",n);}this.$data.matchedRule.length&&(_.info("m3u8过滤器 ==> 当前网站执行的规则：",this.$data.matchedRule),Pe.hook(),ke.updateISMatchedRuleMenu());},registerMenu(t){ie.update([{key:"m3u8-rule",text:`⚙ 自定义规则（${t.length}条）`,autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showView();}},{key:"m3u8-export-rule",text:"⚙ 规则导出",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.exportRule("m3u8-filter-rule.json");}},{key:"m3u8-import-rule",text:"⚙ 规则导入",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.importRule();}}]);},getTemplateData(){return {uuid:w.generateUUID(),enable:true,name:"",data:{url:"",commonFilterAdsSegmentsFilePathLength:true,commonFilterAdsSegmentsFilePathSimilar:false,ownFilterCode:""}}},showView(){let t=R.config.PanelHandlerComponents();function e(a){return {get(o,s){return a[o]??s},set(o,s){a[o]=s;}}}new Ue({title:"m3u8自定义规则",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:a=>a.name,updateData:a=>this.updateData(a),deleteData:a=>this.deleteData(a),getData:a=>this.getData().find(r=>r.uuid===a.uuid)??a,itemControls:{enable:{enable:true,getEnable(a){return a.enable},callback:(a,o)=>{a.enable=o,this.updateData(a);}},edit:{enable:true,getView:(a,o)=>{let s=document.createDocumentFragment();o||(a=this.getTemplateData());let r=Y("启用","enable",true);Reflect.set(r.props,I,e(a));let l=t.createSectionContainerItem_switch(r),i=Ce("规则名称","name","","",void 0,"必填");Reflect.set(i.props,I,e(a));let c=t.createSectionContainerItem_input(i),u=Ce("匹配网址","url","","",void 0,"必填，可正则，注意转义");Reflect.set(u.props,I,e(a.data));let d=t.createSectionContainerItem_input(u),p=Y("广告通杀1","commonFilterAdsSegmentsFilePathLength",true,void 0,"使用文件名称长度比较");Reflect.set(p.props,I,e(a.data));let h=t.createSectionContainerItem_switch(p),m=Y("广告通杀2","commonFilterAdsSegmentsFilePathSimilar",false,void 0,"使用文件名称相似度比较");Reflect.set(m.props,I,e(a.data));let S=t.createSectionContainerItem_switch(m),E=Ge("自定义过滤js","ownFilterCode","","",void 0,`参数：
    [m3u8Text]：需要处理的m3u8字符串
返回：[String]

例如：
m3u8Text = m3u8Text.replace('','');
return m3u8Text;
`);Reflect.set(E.props,I,e(a.data));let M=t.createSectionContainerItem_textarea(E);return s.appendChild(l),s.appendChild(c),s.appendChild(d),s.appendChild(h),s.appendChild(S),s.appendChild(M),s},onsubmit:(a,o,s)=>{let r=a.querySelectorAll(".rule-form-ulist > li"),l=this.getTemplateData();return o&&(l.uuid=s.uuid),r.forEach(i=>{let c=Reflect.get(i,"__formConfig__"),u=Reflect.get(c,"attributes"),d=Reflect.get(i,I),p=Reflect.get(u,K),h=Reflect.get(u,W),m=d.get(p,h);Reflect.has(l,p)?Reflect.set(l,p,m):Reflect.has(l.data,p)?Reflect.set(l.data,p,m):_.error(`${p}不在数据中`);}),l.name.trim()===""?(y.error("规则名称不能为空"),{success:false,data:l}):l.data.url.trim()===""?(y.error("匹配网址不能为空"),{success:false,data:l}):o?{success:this.updateData(l),data:l}:{success:this.addData(l),data:l}},style:`
                        li[data-key="ownFilterCode"]{
                            gap: 30px;
                        }
                        li[data-key="ownFilterCode"] .pops-panel-textarea{
                            flex: 1;
                        }
                        li[data-key="ownFilterCode"] .pops-panel-textarea textarea{
                            height: 300px;
                        }
                    `},delete:{enable:true,deleteCallBack:a=>this.deleteData(a)}},bottomControls:{filter:{enable:true,option:[{name:"过滤【启用】",filterCallBack(a){return a.enable}},{name:"过滤【未启用】",filterCallBack(a){return !a.enable}},{name:"过滤【当前网址运行的规则】",filterCallBack(a){try{return !!window.location.href.match(new RegExp(a.data.url))}catch{return  false}}}]}}}).showView();},runRule(t){let e=t;for(let n=0;n<this.$data.matchedRule.length;n++)try{const o=this.$data.matchedRule[n].data;if(o.commonFilterAdsSegmentsFilePathLength){const{filterInfo:s,m3u8Text:r}=Q.filterAdsWithFilePathLength(e);e=r;}if(o.commonFilterAdsSegmentsFilePathSimilar){const{filterInfo:s,m3u8Text:r}=Q.filterAdsWithFilePathSimilar(e);e=r;}if(o.ownFilterCode.trim()!==""){let r=new Function("m3u8Text","M3U8Filter","M3U8Parser",o.ownFilterCode)(e,Q,fe);typeof r=="string"?e=r:_.error("m3u8过滤器 ==> 自定义过滤js代码执行结果不是字符串",r);}break}catch(a){_.error("m3u8过滤器 ==> 执行m3u8文本过滤时出现异常",a);}return e},getData(){return ee(this.$key.STORAGE_KEY,[])},setData(t){te(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(a=>a.uuid==t.uuid)===-1?(e.push(t),te(this.$key.STORAGE_KEY,e),true):false},updateData(t){let e=this.getData(),n=e.findIndex(o=>o.uuid==t.uuid),a=false;return n!==-1&&(a=true,e[n]=t),this.setData(e),a},deleteData(t){let e=this.getData(),n=e.findIndex(o=>o.uuid==t.uuid),a=false;return n!==-1&&(a=true,e.splice(n,1)),this.setData(e),a},clearData(){ae(this.$key.STORAGE_KEY);},exportRule(t="rule.json"){let e=this.getData(),n=new Blob([JSON.stringify(e,null,4)]),a=window.URL.createObjectURL(n),o=f.createElement("a");o.href=a,o.download=t,o.click(),setTimeout(()=>{window.URL.revokeObjectURL(a);},1500);},importRule(t){let e=R.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(l,i){l.close();}}},mask:{enable:true},drag:true,width:P.info.width,height:P.info.height,style:`
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),n=e.$shadowRoot.querySelector(".btn-control[data-mode='local']"),a=e.$shadowRoot.querySelector(".btn-control[data-mode='network']"),o=e.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),s=l=>{let i=this.getData(),c=[];for(let u=0;u<l.length;u++){const d=l[u];i.findIndex(h=>h.uuid===d.uuid)!==-1||c.push(d);}i=i.concat(c),this.setData(i),y.success(`共 ${l.length} 条规则，新增 ${c.length} 条`),t?.();},r=l=>new Promise(i=>{let c=w.toJSON(l);if(!Array.isArray(c)){_.error(c),y.error("导入失败，格式不符合（不是数组）",{consoleLogContent:true}),i(false);return}if(!c.length){y.error("导入失败，解析出的数据为空",{consoleLogContent:true}),i(false);return}s(c),i(true);});f.on(n,"click",l=>{f.preventEvent(l),e.close();let i=f.createElement("input",{type:"file",accept:".json"});f.on(i,["propertychange","input"],c=>{if(!i.files?.length)return;let u=i.files[0],d=new FileReader;d.onload=()=>{r(d.result);},d.readAsText(u,"UTF-8");}),i.click();}),f.on(a,"click",l=>{f.preventEvent(l),e.close();let i=R.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(d,p){d.close();}},ok:{text:"导入",callback:async(d,p)=>{let h=d.text;if(w.isNull(h)){y.error("请填入完整的url");return}let m=y.loading("正在获取配置..."),S=await se.get(h,{allowInterceptConfig:false});if(m.close(),!S.status){_.error(S),y.error("获取配置失败",{consoleLogContent:true});return}await r(S.data.responseText)&&d.close();}},cancel:{enable:false}},mask:{enable:true},drag:true,width:P.info.width,height:"auto"}),c=i.$shadowRoot.querySelector("input"),u=i.$shadowRoot.querySelector(".pops-prompt-btn-ok");f.on(c,["input","propertychange"],d=>{f.val(c)===""?f.attr(u,"disabled","true"):f.removeAttr(u,"disabled");}),f.listenKeyboard(c,"keydown",(d,p,h)=>{d==="Enter"&&h.length===0&&f.val(c)!==""&&f.trigger(u,"click");}),f.trigger(c,"input");}),f.on(o,"click",async l=>{f.preventEvent(l),e.close();let i=await w.getClipboardInfo();if(i.error!=null){y.error(i.error.toString());return}if(i.content.trim()===""){y.warning("获取到的剪贴板内容为空");return}await r(i.content);});}},ve=function(t,e,n,a,o,s,r){let l=[];typeof a=="function"?l=a():l=a;const i={text:t,type:"select",description:s,attributes:{},props:{},getValue(){return this.props[I].get(e,n)},callback(c,u,d){const p=u;if(_.info(`选择：${d}`),typeof o=="function"&&o(c,p,d))return;this.props[I].set(e,p);},data:l};return Reflect.set(i.attributes,K,e),Reflect.set(i.attributes,W,n),ce.initComponentsStorageApi("select",i,{get(c,u){return A.getValue(c,u)},set(c,u){A.setValue(c,u);}}),i},Be={id:"component-common",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[ve("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(t,e,n)=>{_.info("设置当前Qmsg弹出位置"+n);},"Toast显示在页面九宫格的位置"),ve("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),Y("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]},{text:"Cookie配置",type:"forms",forms:[Y("启用","httpx-use-cookie-enable",false,void 0,"启用后，将根据下面的配置进行添加cookie"),Y("使用document.cookie","httpx-use-document-cookie",false,void 0,"自动根据请求的域名来设置对应的cookie")]}]};le.addContentConfig([Be]);$e.deleteMenuOption();A.init();he.init();

})(Qmsg, DOMUtils, Utils, pops);