// ==UserScript==
// @name         小红书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.10.18
// @author       WhiteSevs
// @description  屏蔽登录弹窗、屏蔽广告、优化评论浏览、优化图片浏览、允许复制、禁止唤醒App、禁止唤醒弹窗、修复正确跳转等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAx9JREFUWEfNl09MU0EQxn/beFTDDRI41FAMcNGbBw62oPEGid6UULxg1EhEEzExgdBEEzRqlKDxZCHgDZJ6U8TWAyaQGIsHMQLSA0S8VYQT2NXp9tnX0vKnpi2TNH1vd3bmm5lv9+0o0kQ73SXsc7QCx1EcjU9rnOl6O3pXRNAqCjqCIsB6LKQioYh9rbK/6MMnWojFHgElO3KwWyUBBD1q9q3fWvoPgHY1dIHu2a3N3PRVt5ob98naOABdVd+K5nluxnJc5dBe9TU4qHS128lvRzDnOufoH4iyETukihJ9EnSH0i5PAFRj7oH8z0r9UmlXw0fQZrsVWhQRKcFCEepvQo0DcNXrQgeechDtbQAVpbCyBiurqUmqqYSD+2FyOnPyZE50ln7A4vKWCc5egvIyCA3DzV4YeZ00UlEGQ/eN88670HsjOTczZ8bbvXCiDqbC8HkeBkahuhLE5sBICqDdAzh9yjh1n4OlZZgdTxqcDEPfIAw9SI1aMjg1DVrDpe5tAIRewOJ36LyXzIAgv+IFz1ljXN5FJAOjrwwIcd583YwfO2L0JHvW2qqGjKXYnAExJkYfDyYBaGWibmyDGhe0t/z9bikDSMQO4NZlEO5YJTggfHCBf8SUIo0TqQCEPB8C0Ddg6m5xQIj4xAcXu+DLPASHjY5/1BDUDkAyWF6amXjCkcYLW5Sg1gWBZ3C7H6Y+mWdJ48y35LiQ0HvGGLHzIFsJLAJLSSQzssYmmzMg0TVfM9vMqqMYkcwIejEiv59rhliy3URP2H6n3/zXJsbsO+ipz+huCUCQSb2E3eJQRNL+ZsIQS/a1ALQIKDtCxu0i4EUs8GPvk7YEXFPbNrvAmj5ZJ3dB49wSYbTlUIgqANJFzoFfq4aE8izBiC0h49iEmctagszUyevoHvgYFf1zXEwA6PBeuJLVXwUe5pVp2Yyr2HmVaMUW8tYNZXWuI6xrT6IxcbeiHYVtTCT62ZDf1pp5ekB1FaYU2qfmgvGLQWpzKi0adOfxlhxF0ZGxObUiT7RqbjRNoJ0oVZIzINMNy5Eehtg7NvCrSChqz/IfgUZkW/BhLsQAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://www.xiaohongshu.com/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.9.4/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.7.4/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.5.5/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.5.0/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.js
// @resource     ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.css
// @connect      edith.xiaohongshu.com
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

(function (x, O, j, ue, Pe) {
  'use strict';

  var _e=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,$e=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,pe=typeof GM_getValue<"u"?GM_getValue:void 0,ne=typeof GM_info<"u"?GM_info:void 0,He=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,de=typeof GM_setValue<"u"?GM_setValue:void 0,Ue=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,qe=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,k=typeof unsafeWindow<"u"?unsafeWindow:void 0,je=window;const We=`/* 用户主页 */\r
/* 底部的-App内打开 */\r
.launch-app-container.bottom-bar,\r
/* 顶部的-打开看看 */\r
.main-container > .scroll-view-container > .launch-app-container:first-child,\r
/* 底部的-打开小红书看更多精彩内容 */\r
.bottom-launch-app-tip.show-bottom-bar,\r
/* 首页-顶部横幅 */\r
#app .launch-app-container,\r
/* 笔记-顶部横幅 */\r
.note-view-container .nav-bar-box-expand ,\r
.note-view-container .nav-bar-box-expand+.placeholder-expand,\r
/* 404页面 顶部的打开看看 */\r
.not-found-container .nav-bar-box-expand:has(.share-info-box):has(.launch-btn),\r
/* 404页面 底部的-App内打开 */\r
.not-found-container #fmp {\r
  display: none !important;\r
}\r
`,ye={isArticle(){return globalThis.location.pathname.startsWith("/discovery/item/")||globalThis.location.pathname.startsWith("/explore/")},isUserHome(){return globalThis.location.pathname.startsWith("/user/profile/")},isHome(){return globalThis.location.href==="https://www.xiaohongshu.com/"||globalThis.location.href==="https://www.xiaohongshu.com"},isSearch(){return globalThis.location.pathname.startsWith("/search_result/")}},Me="GM_Panel",Le="data-init",U="data-key",q="data-default-value",Ge="data-init-more-value",I="data-storage-api",X={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},z={setting:{get width(){return X.width<550?"88vw":X.width<700?"550px":"700px"},get height(){return X.height<450?"70vh":X.height<550?"450px":"550px"}},settingMiddle:{get width(){return X.width<350?"88vw":"350px"}},info:{get width(){return X.width<350?"88vw":"350px"},get height(){return X.height<250?"88vh":"250px"}}};class Ke{storageKey;listenerData;constructor(e){if(typeof e=="string"){const n=e.trim();if(n=="")throw new Error("key参数不能为空字符串");this.storageKey=n;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new j.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.triggerValueChangeListener=this.triggerValueChangeListener.bind(this);}getLocalValue(){let e=pe(this.storageKey);return e==null&&(e={},this.setLocalValue(e)),e}setLocalValue(e){de(this.storageKey,e);}set(e,n){const o=this.get(e),i=this.getLocalValue();Reflect.set(i,e,n),this.setLocalValue(i),this.triggerValueChangeListener(e,o,n);}get(e,n){const o=this.getLocalValue();return Reflect.get(o,e)??n}getAll(){return this.getLocalValue()}delete(e){const n=this.get(e),o=this.getLocalValue();Reflect.deleteProperty(o,e),this.setLocalValue(o),this.triggerValueChangeListener(e,n,void 0);}has(e){const n=this.getLocalValue();return Reflect.has(n,e)}keys(){const e=this.getLocalValue();return Reflect.ownKeys(e)}values(){const e=this.getLocalValue();return Reflect.ownKeys(e).map(n=>Reflect.get(e,n))}clear(){_e(this.storageKey);}addValueChangeListener(e,n){const o=Math.random(),i=this.listenerData.get(e)||[];return i.push({id:o,key:e,callback:n}),this.listenerData.set(e,i),o}removeValueChangeListener(e){let n=false;for(const[o,i]of this.listenerData.entries()){for(let r=0;r<i.length;r++){const s=i[r];(typeof e=="string"&&s.key===e||typeof e=="number"&&s.id===e)&&(i.splice(r,1),r--,n=true);}this.listenerData.set(o,i);}return n}async triggerValueChangeListener(...e){const[n,o,i]=e;if(!this.listenerData.has(n))return;let r=this.listenerData.get(n);for(let s=0;s<r.length;s++){const u=r[s];if(typeof u.callback=="function"){let l=this.get(n),a,c;typeof o<"u"&&e.length>=2?c=o:c=l,typeof i<"u"&&e.length>2?a=i:a=l,await u.callback(n,c,a);}}}}const K=new Ke(Me),ee={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new y.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(t){Array.isArray(t)||(t=[t]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,t);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(t=0){return this.$data.contentConfig.get(t)??[]},getDefaultBottomContentConfig(){return this.$data.__defaultBottomContentConfig.length?this.$data.__defaultBottomContentConfig:[{id:"script-version",title:`版本：${ne?.script?.version||"未知"}`,isBottom:true,forms:[],clickFirstCallback(t,e,n){let o=ne?.script?.supportURL||ne?.script?.namespace;return typeof o=="string"&&y.isNotNull(o)&&window.open(o,"_blank"),false}}]},setDefaultBottomContentConfig(t){this.$data.__defaultBottomContentConfig=t;}},fe={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{g.showPanel(ee.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){g.isTopWindow()&&De.add(this.$data.menuOption);},addMenuOption(t){Array.isArray(t)||(t=[t]),this.$data.menuOption.push(...t);},updateMenuOption(t){Array.isArray(t)||(t=[t]),t.forEach(e=>{let n=this.$data.menuOption.findIndex(o=>o.key===e.key);n!==-1&&(this.$data.menuOption[n]=e);});},getMenuOption(t=0){return this.$data.menuOption[t]},deleteMenuOption(t=0){this.$data.menuOption.splice(t,1);}},B={waitRemove(...t){t.forEach(e=>{typeof e=="string"&&O.waitNodeList(e).then(n=>{n.forEach(o=>o.remove());});});},createBlockCSSNode(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),O.createElement("style",{type:"text/css",innerHTML:`${e.join(`,
`)}{display: none !important;}`})},addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),P(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){const e=typeof $e=="function"?$e(t.keyName):null;return typeof e=="string"&&e?P(e):B.loadStyleLink(t.url)},async loadStyleLink(t){let e=document.createElement("link");return e.rel="stylesheet",e.type="text/css",e.href=t,new Promise(n=>{O.ready(()=>{document.head.appendChild(e),n(e);});})},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(n=>{e.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.startsWith("data:")||t.match(/^http(s|):\/\//i)?t:t.startsWith("//")?(t.startsWith("///")||(t=window.location.protocol+t),t):(t.startsWith("/")||(t+="/"),t=window.location.origin+t,t)},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;try{let e=new URL(t);return e.protocol="https:",e.toString()}catch{return t}},lockScroll(...t){let e=document.createElement("style");e.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...t||[]);return n.forEach(o=>{o.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(e),{recovery(){n.forEach(o=>{o.classList.remove("pops-overflow-hidden-important");}),e.remove();}}},async getClipboardText(){function t(o){navigator.clipboard.readText().then(i=>{o(i);}).catch(i=>{h.error("读取剪贴板内容失败👉",i),o("");});}function e(o){navigator.permissions.query({name:"clipboard-read"}).then(i=>{t(o);}).catch(i=>{h.error("申请剪贴板权限失败，尝试直接读取👉",i.message??i.name??i.stack),t(o);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(o=>{if(!n()){o("");return}document.hasFocus()?e(o):window.addEventListener("focus",()=>{e(o);},{once:true});})},escapeHtml(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(t,e,n=5e3){let o,i=n-e,r=e,s=async u=>{let l=await t(u);if(typeof l=="boolean"&&!l||u){y.workerClearTimeout(o);return}if(r+=e,r>i){s(true);return}o=y.workerSetTimeout(()=>{s(false);},e);};s(false);},findParentNode(t,e,n){if(n){let o=O.closest(t,n);if(o)return o.querySelector(e)}else return O.matches(t,e)?t:O.closest(t,e)}},g={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new y.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new y.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new y.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new y.Dictionary),this.__onceExecData},get scriptName(){return be},get panelConfig(){return this.__panelConfig},set panelConfig(t){this.__panelConfig=t;},key:Me,attributeKeyName:U,attributeDefaultValueName:q},init(){this.initContentDefaultValue(),fe.init();},isTopWindow(){return k.top===k.self},initContentDefaultValue(){const t=o=>{if(!o.attributes||o.type==="button"||o.type==="forms"||o.type==="deepMenu")return;const i=o.attributes;let r=i[Le];if(typeof r=="function"){let a=r();if(typeof a=="boolean"&&!a)return}let s=new Map,u=i[U];if(u!=null){const a=i[q];s.set(u,a);}let l=i[Ge];if(typeof l=="object"&&l&&Object.keys(l).forEach(a=>{s.set(a,l[a]);}),!s.size){h.warn(["请先配置键",o]);return}if(o.type==="switch"){let a=typeof o.disabled=="function"?o.disabled():o.disabled;typeof a=="boolean"&&a&&this.$data.contentConfigInitDisabledKeys.push(...s.keys());}for(const[a,c]of s.entries())this.setDefaultValue(a,c);},e=o=>{for(let i=0;i<o.length;i++){let r=o[i];t(r);let s=r.forms;s&&Array.isArray(s)&&e(s);}},n=[...ee.getAllContentConfig()];for(let o=0;o<n.length;o++){let i=n[o];if(!i.forms)continue;const r=i.forms;r&&Array.isArray(r)&&e(r);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(t,e){this.$data.contentConfigInitDefaultValue.has(t)&&h.warn("请检查该key(已存在): "+t),this.$data.contentConfigInitDefaultValue.set(t,e);},getDefaultValue(t){return this.$data.contentConfigInitDefaultValue.get(t)},setValue(t,e){K.set(t,e);},getValue(t,e){const n=K.get(t);return n??(this.$data.contentConfigInitDefaultValue.has(t)?this.$data.contentConfigInitDefaultValue.get(t):e)},deleteValue(t){K.delete(t);},hasKey(t){return K.has(t)},addValueChangeListener(t,e){return K.addValueChangeListener(t,(o,i,r)=>{e(t,r,i);})},removeValueChangeListener(t){K.removeValueChangeListener(t);},triggerMenuValueChange(t,e,n){K.triggerValueChangeListener(t,n,e);},async exec(t,e,n,o=true){const i=this;let r;typeof t=="string"||Array.isArray(t)?r=()=>t:r=t;let s=false;const u=r();let l=[];Array.isArray(u)?(s=true,l=u):l.push(u);const a=l.find(_=>!this.$data.contentConfigInitDefaultValue.has(_));if(a){h.warn(`${a} 键不存在`);return}const c=JSON.stringify(l);if(o&&this.$data.onceExecMenuData.has(c))return this.$data.onceExecMenuData.get(c);let p=[];const d=[];let m=[];const b=(_,w)=>{let S=[],R=[],C=[];if(Array.isArray(w))C=C.concat(w);else if(typeof w=="object"&&w!=null)if(w instanceof Element)C.push(w);else {const{$css:$,destory:N}=w;$!=null&&(Array.isArray($)?C=C.concat($):C.push($)),typeof N=="function"&&C.push(N);}else C.push(w);for(const $ of C)if($!=null){if($ instanceof Element){S.push($);continue}if(typeof $=="function"){m.push($);continue}}_?(p=p.concat(S),m=m.concat(R)):(V(),M());},v=_=>this.getValue(_),V=()=>{for(let _=0;_<p.length;_++)p[_]?.remove(),p.splice(_,1),_--;},M=()=>{for(let _=0;_<m.length;_++){const w=m[_];w(),m.splice(_,1),_--;}},D=()=>{let _=false;return typeof n=="function"?_=n(l):_=l.every(w=>v(w)),_},E=async _=>{if(D()){const S=l.map(C=>this.getValue(C)),R=await e({value:s?S:S[0],addStoreValue:(...C)=>b(true,C)});b(true,R);}else b(false,[]);};o&&l.forEach(_=>{const w=this.addValueChangeListener(_,(S,R,C)=>E());d.push(w);}),await E();const L={reload(){this.clearStoreStyleElements(),this.destory(),E();},clear(){this.clearStoreStyleElements(),this.destory(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreStyleElements:()=>V(),destory(){return M()},removeValueChangeListener:()=>{d.forEach(_=>{this.removeValueChangeListener(_);});},clearOnceExecMenuData(){o&&i.$data.onceExecMenuData.delete(c);}};return this.$data.onceExecMenuData.set(c,L),L},async execMenu(t,e,n=false,o=false){return await this.exec(t,async i=>await e(i),i=>i.every(s=>{let u=!!this.getValue(s);return g.$data.contentConfigInitDisabledKeys.includes(s)&&(u=false,h.warn(`.execMenu${o?"Once":""} ${s} 被禁用`)),n&&(u=!u),u}),o)},async execMenuOnce(t,e,n=false,o=false){const i=await this.execMenu(t,e,n,true);if(o&&i){const r=()=>{i.reload();};this.removeUrlChangeWithExecMenuOnceListener(t),this.addUrlChangeWithExecMenuOnceListener(t,r);}return i},deleteExecMenuOnce(t){return t=this.transformKey(t),this.$data.onceExecMenuData.delete(t),this.$data.urlChangeReloadMenuExecOnce.delete(t),K.removeValueChangeListener(t)},onceExec(t,e){if(t=this.transformKey(t),typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(t)||(e(),this.$data.onceExecData.set(t,1));},deleteOnceExec(t){t=this.transformKey(t),this.$data.onceExecData.delete(t);},addUrlChangeWithExecMenuOnceListener(t,e){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.set(t,e);},removeUrlChangeWithExecMenuOnceListener(t){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.delete(t);},hasUrlChangeWithExecMenuOnceListener(t){return t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.has(t)},async triggerUrlChangeWithExecMenuOnceEvent(t){const e=this.$data.urlChangeReloadMenuExecOnce.values();for(const n of e)await n(t);},showPanel(t,e=`${be}-设置`,n=false,o=false){this.$data.$panel=null,this.$data.panelContent=[];let i=t.findIndex(s=>(typeof s.isBottom=="function"?s.isBottom():!!s.isBottom)&&s.id==="script-version")!==-1;!n&&!i&&t.push(...ee.getDefaultBottomContentConfig());let r=T.panel({title:{text:e,position:"center",html:false,style:""},content:t,btn:{close:{enable:true,callback:(s,u)=>{s.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(s,u)=>{s(),this.$data.$panel=null;}},width:z.setting.width,height:z.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=r,this.$data.panelContent=t,o||this.registerConfigSearch({$panel:r,content:t});},registerConfigSearch(t){const{$panel:e,content:n}=t;let o=async(c,p)=>{if(c==null)return;let d=await p(c);return d&&typeof d.isFind=="boolean"&&d.isFind?d.data:await o(d.data,p)},i=(c,p)=>{const d=new IntersectionObserver(m=>{m.forEach(b=>{b.isIntersecting&&(p?.(),d.disconnect());});},{root:null,threshold:1});d.observe(c),c.scrollIntoView({behavior:"smooth",block:"center"});},r=c=>{const p="pops-flashing";f.animationend(c,()=>{c.classList.remove(p);}),c.classList.add(p);},s=(c,p)=>{f.preventEvent(c);let d=T.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:z.settingMiddle.width,height:"auto",drag:true,style:`
					${T.config.cssText.panelCSS}

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
				`});d.$shadowRoot.querySelector(".search-wrapper");let m=d.$shadowRoot.querySelector(".search-config-text"),b=d.$shadowRoot.querySelector(".search-result-wrapper");m.focus();let v=()=>{f.empty(b);},V=D=>{const E=y.queryProperty(D,_=>_?.next?{isFind:false,data:_.next}:{isFind:true,data:_});let L=f.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${E.matchedData?.path}</div>
							<div class="search-result-item-description">${E.matchedData?.description??""}</div>
						`});return f.on(L,"click",_=>{let S=e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[D.index];if(!S){x.error(`左侧项下标${D.index}不存在`);return}S.scrollIntoView({behavior:"smooth",block:"center"}),S.click(),o(D.next,async R=>{if(R?.next){let C=await f.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find($=>{const N=Reflect.get($,"__formConfig__");return typeof N=="object"&&N!=null&&N.text===R.name}),2500);if(C)C.click();else return x.error("未找到对应的二级菜单"),{isFind:true,data:R};return {isFind:false,data:R.next}}else {let C=await f.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find($=>Reflect.get($,"__formConfig__")===R.matchedData?.formConfig),2500);if(C){i(C);let $=C.closest(".pops-panel-forms-fold[data-fold-enable]");$&&($.querySelector(".pops-panel-forms-fold-container").click(),await y.sleep(500)),i(C,()=>{r(C);});}else x.error("未找到对应的菜单项");return {isFind:true,data:R}}});}),L},M=D=>{const E=new RegExp(D,"i"),L=[],_=(S,R)=>{for(let C=0;C<S.length;C++){const $=S[C];let N=$.forms;if(N&&Array.isArray(N)){const H=y.deepClone(R);if($.type==="deepMenu"){const W=y.queryProperty(H,F=>F?.next?{isFind:false,data:F.next}:{isFind:true,data:F});W.next={name:$.text};}_(N,H);}else {let H=Reflect.get($,"text"),W=Reflect.get($,"description");const F=[H,W];let ie=F.findIndex(Z=>{if(typeof Z=="string")return Z.match(E)});if(ie!==-1){const Z=y.deepClone(R),ke=y.queryProperty(Z,G=>G?.next?{isFind:false,data:G.next}:{isFind:true,data:G});ke.next={name:H,matchedData:{path:"",formConfig:$,matchedText:F[ie],description:W}};const Ce=[];y.queryProperty(Z,G=>{const me=G?.name;return typeof me=="string"&&me.trim()!==""&&Ce.push(me),G?.next?{isFind:false,data:G.next}:{isFind:true,data:G}});const Be=Ce.join(B.escapeHtml(" - "));ke.next.matchedData.path=Be,L.push(Z);}}}};for(let S=0;S<n.length;S++){const R=n[S];if(!R.forms||R.isBottom&&R.id==="script-version")continue;const C=R.forms;if(C&&Array.isArray(C)){let $=R.title;typeof $=="function"&&($=$()),_(C,{index:S,name:$});}}let w=document.createDocumentFragment();for(const S of L){let R=V(S);w.appendChild(R);}v(),b.append(w);};f.on(m,"input",y.debounce(D=>{f.preventEvent(D);let E=f.val(m).trim();if(E===""){v();return}M(E);},200));},u=null,l=false,a;f.on(e.$shadowRoot,"dblclick","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",s),f.on(e.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(c,p)=>{clearTimeout(a),a=void 0,l&&u===p?(l=false,u=null,s(c)):(a=setTimeout(()=>{l=false;},200),l=true,u=p);},{capture:true}),e.$shadowRoot.appendChild(f.createElement("style",{type:"text/css",textContent:`
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
				`}));},transformKey(t){if(Array.isArray(t)){const e=t.sort();return JSON.stringify(e)}else return t}},ze={Viewer:{keyName:"ViewerCSS",url:"https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"}},Q={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},y=j.noConflict(),f=O.noConflict(),T=ue,h=new y.Log(ne,k.console||je.console);let be=ne?.script?.name||void 0;ue.config.Utils.AnyTouch();const Xe=false;h.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});x.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(t){const e=t.getSetting().type;if(e==="loading")return  false;const n=t.getSetting().content;return e==="warning"?h.warn(n):e==="error"?h.error(n):h.info(n),true},get position(){return g.getValue(Q.qmsg_config_position.key,Q.qmsg_config_position.defaultValue)},get maxNums(){return g.getValue(Q.qmsg_config_maxnums.key,Q.qmsg_config_maxnums.defaultValue)},get showReverse(){return g.getValue(Q.qmsg_config_showreverse.key,Q.qmsg_config_showreverse.defaultValue)},get zIndex(){let t=j.getMaxZIndex(),e=ue.config.InstanceUtils.getPopsMaxZIndex().zIndex;return j.getMaxValue(t,e)+100}});T.GlobalConfig.setGlobalConfig({zIndex:()=>{let t=j.getMaxZIndex(void 0,void 0,n=>{if(n?.classList?.contains("qmsg-shadow-container")||n?.closest("qmsg")&&n.getRootNode()instanceof ShadowRoot)return  false}),e=ue.config.InstanceUtils.getPopsMaxZIndex().zIndex;return j.getMaxValue(t,e)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const De=new y.GM_Menu({GM_getValue:pe,GM_setValue:de,GM_registerMenuCommand:He,GM_unregisterMenuCommand:Ue}),Y=new y.Httpx({xmlHttpRequest:qe,logDetails:Xe});Y.interceptors.request.use(t=>t);Y.interceptors.response.use(void 0,t=>(h.error("拦截器-请求错误",t),t.type==="onabort"?x.warning("请求取消",{consoleLogContent:true}):t.type==="onerror"?x.error("请求异常",{consoleLogContent:true}):t.type==="ontimeout"?x.error("请求超时",{consoleLogContent:true}):x.error("其它错误",{consoleLogContent:true}),t));k.Object.defineProperty,k.Function.prototype.apply,k.Function.prototype.call,k.Element.prototype.appendChild,k.setTimeout;const P=f.addStyle.bind(f),he=O.selector.bind(O),Je=O.selectorAll.bind(O);new y.GM_Cookie;const Te=be||"小红书优化",Ze=Pe,Ve="https://edith.xiaohongshu.com",Se={async getPageInfo(t,e="",n="",o="",i="jpg,webp"){const r="/api/sns/web/v2/comment/page",s={note_id:t,cursor:e,top_comment_id:o,image_formats:i,xsec_token:n},u=r+"?"+y.toSearchParamsStr(s);let l=await Y.get(`${Ve}${u}`,{headers:{Accept:"application/json, text/plain, */*","User-Agent":y.getRandomPCUA(),Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"}});if(!l.status)return;let a=y.toJSON(l.data.responseText);if(h.info(["获取页信息",a]),a.code===0||a.success)return a.data;if(a.code===-101)return;x.error(a.msg);},async getLzlPageInfo(t="",e="",n=10,o="",i="jpg,webp,avif",r=""){const s="/api/sns/web/v2/comment/sub/page";let u={note_id:t,root_comment_id:e,num:n,cursor:o,image_formats:i,top_comment_id:r};s+""+y.toSearchParamsStr(u);let l=`${Ve}${s}?${y.toSearchParamsStr(u)}`,a=await Y.get(l,{headers:{Accept:"application/json, text/plain, */*","User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Host:"edith.xiaohongshu.com",Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"},onerror(){}});if(!a.status){a.data.status===406&&y.isNotNull(a.data.responseText)?y.toJSON(a.data.responseText).code==-1?x.error("获取楼中楼信息失败，验证x-s、x-t、x-s-common失败"):x.error("获取楼中楼信息失败"):x.error("请求异常"),h.error(["获取楼中楼信息失败",a]);return}let c=y.toJSON(a.data.responseText);if(h.info(["获取楼中楼页信息",c]),c.code===0||c.success)return c.data;x.error(c.msg);},async getSearchRecommend(t){let e=await Y.get(`https://edith.xiaohongshu.com/api/sns/web/v1/search/recommend?keyword=${t}`,{fetch:true});if(!e.status)return;let n=y.toJSON(e.data.responseText);if(n.success||n.code===1e3)return n.data.sug_items}},Ae={$data:{document_addEventListener:[],element_addEventListener:[],setTimeout:[],setInterval:[],function_apply:[],function_call:[],defineProperty:[]},document_addEventListener(t){if(this.$data.document_addEventListener.push(t),h.info("document.addEventListener hook新增劫持判断回调"),this.$data.document_addEventListener.length>1)return;const e=this,n=new WeakMap,o=k.document.addEventListener,i=k.document.removeEventListener;k.document.addEventListener=function(...r){const s=this,u=r[0],l=r[1],a=r[2];for(let c=0;c<e.$data.document_addEventListener.length;c++){const p=e.$data.document_addEventListener[c],d=Reflect.apply(p,this,[s,u,l,a]);if(typeof d=="function"){r[1]=d,n.set(l,{eventName:u,fn:d,options:a});break}else if(typeof d=="boolean"&&!d)return}return Reflect.apply(o,this,r)},k.document.removeEventListener=function(...r){const s=r[0],u=r[1],l=r[2];if(n.has(u)){const{eventName:a,fn:c,options:p}=n.get(u);let d=false;s===a&&(typeof l=="boolean"&&l===p||typeof l=="object"&&typeof p=="object"&&l.capture===p.capture||l==l)&&(d=true),d&&(r[1]=c);}return Reflect.apply(i,this,r)};},element_addEventListener(t){if(this.$data.element_addEventListener.push(t),h.info("Element.prototype.addEventListener hook新增劫持判断回调"),this.$data.element_addEventListener.length>1)return;const e=this,n=new WeakMap,o=k.Element.prototype.addEventListener,i=k.Element.prototype.removeEventListener;k.Element.prototype.addEventListener=function(...r){const s=this,u=r[0],l=r[1],a=r[2];for(let c=0;c<e.$data.element_addEventListener.length;c++){const p=e.$data.element_addEventListener[c],d=Reflect.apply(p,this,[s,u,l,a]);if(typeof d=="function"){r[1]=d,n.set(l,{eventName:u,fn:d,options:a});break}else if(typeof d=="boolean"&&!d)return}return Reflect.apply(o,this,r)},k.Element.prototype.removeEventListener=function(...r){const s=r[0],u=r[1],l=r[2];if(n.has(u)){const{eventName:a,fn:c,options:p}=n.get(u);let d=false;a===s&&(typeof l=="boolean"&&l===p||typeof l=="object"&&typeof p=="object"&&l.capture===p.capture||l==p)&&(d=true),d&&(r[1]=c);}return Reflect.apply(i,this,r)};},setTimeout(t){if(this.$data.setTimeout.push(t),h.info("window.setTimeout hook新增劫持"),this.$data.setTimeout.length>1)return;const e=this,n=k.setTimeout;k.setTimeout=function(...o){const i=o[0],r=o[1];for(let s=0;s<e.$data.setTimeout.length;s++){const u=e.$data.setTimeout[s],l=u(i,r);if(typeof l=="boolean"&&!l)return;if(typeof l=="function"){o[0]=l;break}}return Reflect.apply(n,this,o)};},setInterval(t){if(this.$data.setInterval.push(t),h.info("window.setInterval hook新增劫持"),this.$data.setInterval.length>1)return;const e=this,n=k.setInterval;k.setInterval=function(...o){const i=o[0],r=o[1];for(let s=0;s<e.$data.setInterval.length;s++){const u=e.$data.setInterval[s],l=u(i,r);if(typeof l=="boolean"&&!l)return;if(typeof l=="function"){o[0]=l;break}}return Reflect.apply(n,this,o)};},function_apply(t){if(this.$data.function_apply.push(t),h.info("Function.prototype.apply hook新增劫持"),this.$data.function_apply.length>1)return;const e=this,n=k.Function.prototype.apply;k.Function.prototype.apply=function(...o){const i=o[0],r=o[1];let s=this;for(let l=0;l<e.$data.function_apply.length;l++){const a=e.$data.function_apply[l];if(typeof a.paramsHandler=="function"){const c=a.paramsHandler(s,i,r);if(c!=null){if(c.args&&(o[0]=c.args.thisArg,o[1]=c.args.argArray,s=c.args.fn),c.preventDefault)return "result"in c?c.result:void 0;break}}}let u=n.call(s,...o);for(let l=0;l<e.$data.function_apply.length;l++){const a=e.$data.function_apply[l];typeof a.returnsHandler=="function"&&(u=a.returnsHandler(s,o[0],o[1],u).result);}return u};},function_call(t){if(this.$data.function_call.push(t),h.info("Function.prototype.call hook新增劫持"),this.$data.function_call.length>1)return;const e=this,n=k.Function.prototype.call;k.Function.prototype.call=function(...o){const i=o[0],r=o.slice(1);let s=this;for(let l=0;l<e.$data.function_call.length;l++){const a=e.$data.function_call[l];if(typeof a.paramsHandler=="function"){const c=a.paramsHandler(s,i,r);if(c!=null){if(c.args&&(o[0]=c.args.thisArg,o.splice(1,r.length,...c.args.argArray),s=c.args.fn),c.preventDefault)return "result"in c?c.result:void 0;break}}}let u=n.apply(s,o);for(let l=0;l<e.$data.function_call.length;l++){const a=e.$data.function_call[l];typeof a.returnsHandler=="function"&&(u=a.returnsHandler(s,o[0],o[1],u).result);}return u};},defineProperty(t){if(this.$data.defineProperty.push(t),h.info("Object.defineProperty hook新增劫持"),this.$data.defineProperty.length>1)return;const e=this,n=k.Object.defineProperty;k.Object.defineProperty=function(...o){const i=o[0],r=o[1],s=o[2];for(let u=0;u<e.$data.defineProperty.length;u++){const l=e.$data.defineProperty[u],a=l(i,r,s);if(a!=null){o[0]=a.target,o[1]=a.key,o[2]=a.attributes;break}}return Reflect.apply(n,this,o)};},window_webpack(t="webpackJsonp",e,n){let o;k.Object.defineProperty(k,t,{get(){return o},set(i){h.success("成功劫持webpack，当前webpack名："+t),o=i;const r=o.push;o.push=function(...s){let u=s[0][0];return (e==u||Array.isArray(e)&&Array.isArray(u)&&JSON.stringify(e)===JSON.stringify(u))&&Object.keys(s[0][1]).forEach(l=>{let a=s[0][1][l];s[0][1][l]=function(...c){let p=a.call(this,...c);return c[0]=n(c[0]),p};}),Reflect.apply(r,this,s)};}});}},xe={webpackChunkranchi(){let t;Object.defineProperty(k,"webpackChunkranchi",{get(){return t},set(n){t=n;const o=t.push;t.push=function(...i){return i[0][0],typeof i[0][1]=="object"&&Object.keys(i[0][1]).forEach((r,s)=>{if(typeof i[0][1][r]=="function"&&i[0][1][r].toString().startsWith("function(e,n,t){t.d(n,{Z:function(){return y}});")&&i[0][1][r].toString().includes("jumpToApp")&&g.getValue("little-red-book-hijack-webpack-scheme")){let u=i[0][1][r];i[0][1][r]=function(...l){h.success(["成功劫持scheme唤醒",l]);let a=l[2].d;return l[2].d=function(...c){if(c.length===2&&typeof c[1]?.Z=="function"){let p=c[1].Z;p.toString()==="function(){return y}"&&(c[1].Z=function(...d){let m=p.call(this,...d);return typeof m=="function"&&m.toString().includes("jumpToApp")?function(){return {jumpToApp(b){if(h.success(["拦截唤醒",b]),b.deeplink?.startsWith("xhsdiscover://user/")){let v=b.deeplink.replace(/^xhsdiscover:\/\/user\//,""),V=window.location.origin+`/user/profile/${v}`;window.open(V,"_blank");}}}}:m});}return a.call(this,...c)},u.call(this,...l)};}}),o.call(this,...i)};}});},hookVue(){const t=k.Object.assign;let e=false;k.Object.assign=function(...n){if(n.length==2&&n[1]?.render!==void 0&&!e){let o=n[1];const i=o.render;let r=false;o.render=function(...s){return r||(s[5]._.appContext.mixins.push({mounted(){this.$el.__Ivue__=this;}}),r=true),i.call(this,...s)},e=true;}return Reflect.apply(t,this,n)};},setTimeout(){Ae.setTimeout(t=>{let e=t.toString();if(e==="function(){r()}"||e==="function(){u()}")return h.success(["成功劫持setTimeout唤醒",t]),false});},call(){Ae.function_call({paramsHandler(t,e,n){if(t.toString(),n[0]?.label===0&&Array.isArray(n[0]?.ops)&&Array.isArray(n[0]?.trys)&&typeof n[0]?.sent=="function")return h.success(["成功劫持call唤醒",t,e,n]),{args:{fn:t,thisArg:e,argArray:[]}};if(typeof e=="string"&&e.startsWith("https://oia.xiaohongshu.com/oia"))return h.success(["成功劫持call跳转下载页面",t,e,n]),{preventDefault:true}}});}},re={allowCopy(){return h.info("允许复制"),P(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `)},blockBottomSearchFind(){return h.info("屏蔽底部搜索发现"),B.addBlockCSS(".hotlist-container",".safe-area-bottom.margin-placeholder")},blockBottomToorBar(){return h.info("屏蔽底部工具栏"),B.addBlockCSS(".engage-bar-container")},blockAuthorHotNote(){return h.info("屏蔽视频笔记的作者热门笔记"),B.addBlockCSS(".user-notes-box.user-notes-clo-layout-container")},blockHotRecommendNote(){return h.info("屏蔽视频笔记的热门推荐"),B.addBlockCSS("#new-note-view-container .recommend-box")}},Qe={optimizeVideoNoteDesc(){return h.info("优化视频笔记的描述（可滚动）"),P(`
    .author-box .author-desc-wrapper .author-desc{
      max-height: 70px !important;
      overflow: auto !important;
    }
    /* 展开按钮 */
    .author-box .author-desc-wrapper .author-desc .author-desc-trigger{
      display: none !important;
    }`)}},Ye=`/* 底部的App内打开 */\r
.bottom-button-box,\r
/* 顶部的打开看看 */\r
.nav-bar-box {\r
  display: none !important;\r
}\r
`,we={init(){P(Ye),(g.getValue("little-red-book-hijack-webpack-mask")||g.getValue("little-red-book-hijack-webpack-scheme"))&&(h.info("劫持webpack"),xe.setTimeout(),xe.call()),g.execMenuOnce("little-red-book-shieldBottomSearchFind",()=>re.blockBottomSearchFind()),g.execMenuOnce("little-red-book-shieldBottomToorBar",()=>re.blockBottomToorBar()),g.execMenuOnce("little-red-book-optimizeImageBrowsing",()=>we.optimizeImageBrowsing()),g.execMenuOnce("little-red-book-optimizeVideoNoteDesc",()=>Qe.optimizeVideoNoteDesc()),g.execMenuOnce("little-red-book-shieldAuthorHotNote",()=>re.blockAuthorHotNote()),g.execMenuOnce("little-red-book-shieldHotRecommendNote",()=>re.blockHotRecommendNote()),f.ready(function(){g.execMenu("little-red-book-optimizeCommentBrowsing",()=>{we.optimizeCommentBrowsing();});});},optimizeCommentBrowsing(){h.info("优化评论浏览");const t={QmsgLoading:void 0,scrollFunc:void 0,noteId:"",xsec_token:"",noteData:{},commentData:{},emojiMap:{},emojiNameList:[],currentCursor:void 0,commentContainer:void 0,init(){this.emojiMap=y.toJSON(k.localStorage.getItem("redmoji"))?.redmojiMap||{},this.emojiNameList=Object.keys(this.emojiMap),this.scrollFunc=new y.LockFunction(this.scrollEvent,this);const e=k.__INITIAL_STATE__,n=e.noteData??e.data.noteData;t.noteData=n.data.noteData,t.commentData=n.data.commentData,t.noteId=t.noteData.noteId,t.xsec_token=e.noteData.routeQuery.xsec_token,h.info(["笔记数据",t.noteData]),h.info(["评论数据",t.commentData]);},getCommentHTML(e){return `
				<div class="little-red-book-comments-avatar">
						<a target="_blank" href="/user/profile/${e.user_id}">
							<img src="${e.user_avatar}" crossorigin="anonymous">
						</a>
				</div>
				<div class="little-red-book-comments-content-wrapper">
					<div class="little-red-book-comments-author-wrapper">
						<div class="little-red-book-comments-author">
							<a href="/user/profile/${e.user_id}" class="little-red-book-comments-author-name" target="_blank">
								${e.user_nickname}
							</a>
						</div>
						<div class="little-red-book-comments-content">
							${e.content}
						</div>
						<div class="little-red-book-comments-info">
							<div class="little-red-book-comments-info-date">
								<span class="little-red-book-comments-create-time">${y.formatTime(e.create_time)}</span>
								<span class="little-red-book-comments-location">${e.ip_location}</span>
							</div>
						</div>
					</div>
				</div>
            `},getCommentElement(e){let n=e.content,o=e.create_time||parseInt(e.time),i=e.id,r=e.ip_location||e.ipLocation,s=e.sub_comment_has_more,u=parseInt(e.sub_comment_count)||0,l=e.sub_comment_cursor,a=e.sub_comments||e.subComments,c=(e.user_info||e.user).image,p=(e.user_info||e.user).nickname,d=e?.user_info?.user_id||e?.user?.userId;n=t.converContent(n);let m=f.createElement("div",{className:"little-red-book-comments-item",innerHTML:`
					<div class="little-red-book-comments-parent">
					${t.getCommentHTML({user_id:d,user_avatar:c,user_nickname:p,content:n,create_time:o,ip_location:r})}
					</div>
					`});if(s&&Array.isArray(a)&&(a.forEach(b=>{let v=f.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:t.getCommentHTML({user_id:b.user_info.user_id,user_avatar:b.user_info.image,user_nickname:b.user_info.nickname,content:t.converContent(b.content),create_time:b.create_time,ip_location:b.ip_location})});m.appendChild(v);}),u!==a.length)){let b=u-a.length,v=l,V=f.createElement("div",{className:"little-red-book-comments-reply-show-more",innerText:`展开 ${b} 条回复`});async function M(){let D=x.loading("加载中，请稍后..."),E=await Se.getLzlPageInfo(t.noteId,i,10,v,void 0);D.close(),E&&(v=E.cursor,b=b-E.comments.length,V.innerText=`展开 ${b} 条回复`,E.comments.forEach(L=>{let _=f.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:t.getCommentHTML({user_id:L.user_info.user_id,user_avatar:L.user_info.image,user_nickname:L.user_info.nickname,content:t.converContent(L.content),create_time:L.create_time,ip_location:L.ip_location})});f.before(V,_);}),E.has_more||(f.off(V,"click",void 0,M,{capture:true}),V.remove()));}f.on(V,"click",void 0,M,{capture:true}),m.appendChild(V);}return m},converContent(e){return t.emojiNameList.forEach(n=>{e.includes(n)&&(e=e.replaceAll(n,`<img class="little-red-book-note-content-emoji" crossorigin="anonymous" src="${t.emojiMap[n]}">`));}),e},async scrollEvent(){if(!y.isNearBottom(window.innerHeight/3))return;this.QmsgLoading==null&&(this.QmsgLoading=x.loading("加载中，请稍后..."));let e=await Se.getPageInfo(t.noteId,t.currentCursor,t.xsec_token);if(this.QmsgLoading&&(this.QmsgLoading.close(),this.QmsgLoading=void 0),!!e&&(t.currentCursor=e.cursor,e.comments.forEach(n=>{let o=t.getCommentElement(n);t.commentContainer.appendChild(o);}),!e.has_more)){x.info("已加载全部评论"),t.removeScrollEventListener();return}},addSrollEventListener(){h.success("添加滚动监听事件"),f.on(document,"scroll",void 0,t.scrollFunc.run,{capture:true,once:false,passive:true});},removeScrollEventListener(){h.success("移除滚动监听事件"),f.off(document,"scroll",void 0,t.scrollFunc.run,{capture:true});}};f.waitNode(".narmal-note-container").then(async()=>{h.info("优化评论浏览-笔记元素出现");let e=he(".note-view-container"),n=f.createElement("div",{className:"little-red-book-comments-container",innerHTML:`
          <style>
              .little-red-book-comments-parent {
                  position: relative;
                  display: flex;
                  padding: 8px;
                  width: 100%;
              }
              
              .little-red-book-comments-reply-container {
                  position: relative;
                  display: flex;
                  padding: 8px;
                  width: 100%;
                  padding-left: 52px;
              }
              .little-red-book-comments-container {
                  background: #fff;
                  position: relative;
                  padding: 8px 8px;
              }
              
              .little-red-book-comments-item {
                  position: relative;
              }
              
              .little-red-book-comments-avatar {
                  flex: 0 0 auto;
              }
              
              .little-red-book-comments-avatar img {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;
                  border-radius: 100%;
                  border: 1px solid rgba(0,0,0,0.08);
                  object-fit: cover;
                  width: 40px;
                  height: 40px;
              }
              .little-red-book-comments-content-wrapper {
                  margin-left: 12px;
                  display: flex;
                  flex-direction: column;
                  font-size: 14px;
                  flex-grow: 1;
              }
              
              .little-red-book-comments-author {display: flex;justify-content: space-between;align-items: center;}
              
              a.little-red-book-comments-author-name {
                  line-height: 18px;
                  color: rgba(51,51,51,0.6);
              }
              
              .little-red-book-comments-content {
                  margin-top: 4px;
                  line-height: 140%;
                  color: #333;
              }
              
              .little-red-book-comments-info {
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  font-size: 12px;
                  line-height: 16px;
                  color: rgba(51,51,51,0.6);
              }
              
              .little-red-book-comments-info-date {
                  margin: 8px 0;
              }
              
              span.little-red-book-comments-location {
                  margin-left: 4px;
                  line-height: 120%;
              }
              img.little-red-book-note-content-emoji {
                  margin: 0 1px;
                  height: 16px;
                  transform: translateY(2px);
                  position: relative;
              }
              .little-red-book-comments-reply-container .little-red-book-comments-avatar img {
                  width: 24px;
                  height: 24px;
              }
              .little-red-book-comments-total{
                  font-size: 14px;
                  color: rgba(51,51,51,0.6);
                  margin-left: 8px;
                  margin-bottom: 12px;
              }
              .little-red-book-comments-reply-show-more {
              padding-left: calc(52px + 24px + 12px);
              height: 32px;
              line-height: 32px;
              color: #13386c;
              cursor: pointer;
              font-weight: 500;
              font-size: 14px;
              }
          </style>
        `});t.commentContainer=n,t.init();let o=f.createElement("div",{className:"little-red-book-comments-total",innerHTML:`共 ${t.commentData.commentCount??t.noteData.comments} 条评论`});n.appendChild(o),t.commentData&&t.commentData.comments&&(h.info("从固定的评论中加载"),t.commentData.comments.forEach(i=>{let r=t.getCommentElement(i);n.appendChild(r);})),f.append(e,n);});},optimizeImageBrowsing(){h.info("优化图片浏览");function t(n=[],o=0){let i="";n.forEach(u=>{i+=`<li><img data-src="${u}" loading="lazy"></li>`;});let r=f.createElement("ul",{innerHTML:i}),s=new Ze(r,{inline:false,url:"data-src",zIndex:y.getMaxZIndex()+100,hidden:()=>{s.destroy();}});o=o<0?0:o,s.view(o),s.zoomTo(1),s.show();}const e=(n,o)=>{let i=o.querySelector("img"),r=[],s=[];o.closest(".onix-carousel-item")?s=Array.from(o.closest(".onix-carousel-item").parentElement.querySelectorAll("img")):s=[i];let u=s.findIndex(l=>l==i);s.forEach(l=>{let a=l.getAttribute("src")||l.getAttribute("data-src")||l.getAttribute("alt");a&&r.push(a);}),h.success(["点击浏览图片👉",r[u]]),t(r,u);};return f.on(document,"click",".note-image-box",e),[B.setGMResourceCSS(ze.Viewer),()=>{f.off(document,"click",".note-image-box",e);}]}},Ne={init(){f.ready(()=>{g.execMenuOnce("little-red-book-repariClick",()=>Ne.repariClick());});},repariClick(){h.info("修复正确的点击跳转");const t=e=>{let n=e.target;if(h.info(["点击的按钮元素",n]),n?.className?.includes("follow-btn"))h.success("点击-关注按钮");else if(n?.closest("button.reds-button.message-btn"))h.success("点击-私信按钮");else if(n?.closest("div.reds-tab-item"))h.success("点击-笔记/收藏按钮");else if(n?.closest("section.reds-note-card")){h.success("点击-笔记卡片");let o=n?.closest("section.reds-note-card");o.getAttribute("id")||y.toJSON(o.getAttribute("impression"))?.noteTarget?.value?.noteId?window.open(`https://www.xiaohongshu.com/discovery/item/${n?.closest("section.reds-note-card")?.getAttribute("id")}`,"_blank"):x.error("获取笔记note_id失败");}return f.preventEvent(e),false};return f.on(document,"click",t,{capture:true}),[()=>{f.off(document,"click",t,{capture:true});}]}},ve={init(){g.execMenuOnce("little-red-book-shieldAd",()=>(h.info("注入默认屏蔽CSS"),P(We))),g.execMenuOnce("little-red-book-allowCopy",()=>ve.allowCopy()),ye.isArticle()?we.init():ye.isUserHome()&&Ne.init();},allowCopy(){return h.info("允许复制文字"),P(`
        *{
            -webkit-user-select: unset !important;
            user-select: unset !important;
        }
        `)}},et="",tt={init(){g.execMenuOnce("pc-xhs-shieldAd",()=>P(et)),g.execMenuOnce("pc-xhs-shield-select-text-search-position",()=>this.blockSelectTextVisibleSearchPosition()),g.execMenuOnce("pc-xhs-shield-topToolbar",()=>this.blockTopToolbar()),f.ready(()=>{g.execMenuOnce("pc-xhs-shield-login-dialog",()=>this.blockLoginContainer());});},blockLoginContainer(){h.info("添加屏蔽登录弹窗CSS，监听登录弹窗出现");const t=y.mutationObserver(document.body,{config:{subtree:true,childList:true},immediate:true,callback:()=>{let e=he(".login-container .icon-btn-wrapper");e&&(e.click(),h.success("登录弹窗出现，自动点击关闭按钮"));}});return [B.addBlockCSS(".login-container"),()=>{t?.disconnect();}]},blockSelectTextVisibleSearchPosition(){return h.info("屏蔽选择文字弹出的搜索提示"),B.addBlockCSS(".search-position")},blockTopToolbar(){return h.info("【屏蔽】顶部工具栏"),[B.addBlockCSS("#headerContainer",".header-container"),P(`
			/* 主内容去除padding */
			#mfContainer{
				padding-top: 0 !important;
			}
			.outer-link-container{
				margin-top: 0 !important;
				height: 100vh !important;
				padding: 30px 0;
			}
			#noteContainer{
				height: 100%;
			}
			`)]}},nt={getSearchUrl(t){return `https://www.xiaohongshu.com/search_result?keyword=${t}&source=web_explore_feed`}},le={getVue(t){if(t!=null)return t.__vue__||t.__Ivue__||t.__IVue__},getVue3(t){if(t!=null)return t.__vueParentComponent},waitVuePropToSet(t,e){Array.isArray(e)||(e=[e]);function n(){let o=null;return typeof t=="string"?o=f.selector(t):typeof t=="function"?o=t():t instanceof HTMLElement&&(o=t),o}e.forEach(o=>{typeof o.msg=="string"&&h.info(o.msg);function i(){let r=n();if(r==null)return {status:false,isTimeout:true,inst:null,$el:r};let s=le.getVue(r);if(s==null)return {status:false,isTimeout:false,inst:null,$el:r};let u=o.check(s,r);return u=!!u,{status:u,isTimeout:false,inst:s,$el:r}}y.waitVueByInterval(()=>n(),()=>i().status,250,1e4).then(r=>{let s=i();if(s.status){let u=s.inst;o.set(u,s.$el);}else typeof o.failWait=="function"&&o.failWait(s.isTimeout);});});},watchVuePropChange(t,e,n,o,i){let r=y.assign({immediate:true,deep:false},o||{});return new Promise(s=>{le.waitVuePropToSet(t,{check(u){return typeof u?.$watch=="function"},set(u){let l=null;typeof e=="function"?l=u.$watch(()=>e(u),(a,c)=>{n(u,a,c);},r):l=u.$watch(e,(a,c)=>{n(u,a,c);},r),s(l);},failWait:i});})},goToUrl(t,e,n=false){if(t==null){x.error("跳转Url: $vueNode为空"),h.error("跳转Url: $vueNode为空："+e);return}let o=le.getVue(t);if(o==null){x.error("获取vue属性失败",{consoleLogContent:true});return}let i=o.$router,r=true;if(h.info("即将跳转URL："+e),n&&(r=false),r)window.open(e,"_blank");else {if(e.startsWith("http")||e.startsWith("//")){e.startsWith("//")&&(e=window.location.protocol+e);let s=new URL(e);if(s.origin===window.location.origin)e=s.pathname+s.search+s.hash;else {h.info("不同域名，直接本页打开，不用Router："+e),window.location.href=e;return}}h.info("$router push跳转Url："+e),i.push(e);}},hookGestureReturnByVueRouter(t){function e(){h.success("触发popstate事件"),o(true);}function n(){h.success("监听地址改变"),t.vueInst.$router.history.push(t.hash),f.on(k,"popstate",e);}async function o(i=false){if(f.off(k,"popstate",e),!t.callback(i))for(;;)if(t.vueInst.$router.history.current.hash===t.hash)h.info("后退！"),t.vueInst.$router.back(),await y.sleep(250);else return}return n(),{resumeBack:o}}},Re={init(){(g.getValue("pc-xhs-search-open-blank-btn")||g.getValue("pc-xhs-search-open-blank-keyboard-enter"))&&this.optimizationSearch(),g.exec(["pc-xhs-search-open-blank-btn","pc-xhs-search-open-blank-keyboard-enter"],()=>this.optimizationSearch(),t=>t.some(n=>{let o=!!g.getValue(n);return g.$data.contentConfigInitDisabledKeys.includes(n)&&(o=false,h.warn(`.exec ${n} 被禁用`)),o})),g.execMenuOnce("pc-xhs-article-fullWidth",()=>this.fullWidth());},optimizationSearch(){function t(e,n=true){{let o=he("#search-input");if(o){let i=o.value,r=nt.getSearchUrl(i);h.info("搜索内容: "+i),window.open(r,n?"_blank":"_self");}else x.error("未找到搜索的输入框");}}f.waitNode("#search-input").then(e=>{e.placeholder="搜索小红书",g.execMenu("pc-xhs-search-open-blank-keyboard-enter",()=>{f.listenKeyboard(e,"keydown",(n,o,i,r)=>{n==="Enter"&&!i.length&&(h.info("按下回车键"),f.preventEvent(r),e.blur(),t());});});}),f.waitNode("#search-input + .input-button .search-icon").then(e=>{g.execMenu("pc-xhs-search-open-blank-btn",()=>{f.on(e,"click",n=>{f.preventEvent(n),h.info("点击搜索按钮"),t();},{capture:true});});});},fullWidth(){h.info("笔记宽屏");let t=g.getValue("pc-xhs-article-fullWidth-widthSize",90);return P(`
		.main-container .main-content{
			padding-left: 0 !important;
		}
		.outer-link-container{
			width: 100% !important;
		}
		/* 隐藏左侧工具栏 */
		.main-container .side-bar{
			display: none !important;
		}
		#noteContainer{
			width: ${t}vw;
		}
		`)},transformPublishTime(){h.info("转换笔记发布时间");let t=new y.LockFunction(()=>{Je(".note-content:not([data-edit-date])").forEach(n=>{let o=le.getVue(n);if(!o)return;let i=o?._?.props?.note;if(i==null)return;let r=i.time,s=i.lastUpdateTime,u=i.ipLocation;if(typeof r=="number"){let l=[];l.push(`发布：${y.formatTime(r)}`),typeof s=="number"&&l.push(`修改：${y.formatTime(s)}`),typeof u=="string"&&y.isNotNull(u)&&l.push(u);let a=n.querySelector(".date");f.html(a,l.join("<br>")),n.setAttribute("data-edit-date","");}});});const e=y.mutationObserver(document,{config:{subtree:true,childList:true},immediate:true,callback:()=>{t.run();}});return [()=>{e?.disconnect();}]}},te={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new j.Dictionary),this.__storeApiFn}},getStorageApi(t){if(this.hasStorageApi(t))return this.$data.storeApiValue.get(t)},hasStorageApi(t){return this.$data.storeApiValue.has(t)},setStorageApi(t,e){this.$data.storeApiValue.set(t,e);},initComponentsStorageApi(t,e,n){let o;this.hasStorageApi(t)?o=this.getStorageApi(t):o=n,this.setComponentsStorageApiProperty(e,o);},setComponentsStorageApiProperty(t,e){Reflect.set(t.props,I,e);}},ot=function(t,e,n,o,i,r="",s,u,l,a){let c={text:t,type:"input",isNumber:false,isPassword:false,attributes:{},props:{},description:o,afterAddToUListCallBack:l,getValue(){return this.props[I].get(e,n)},callback(p,d,m){this.props[I].set(e,d);},placeholder:r};return Reflect.set(c.attributes,U,e),Reflect.set(c.attributes,q,n),te.initComponentsStorageApi("input",c,{get(p,d){return g.getValue(p,d)},set(p,d){g.setValue(p,d);}}),c},A=function(t,e,n,o,i,r,s,u){let l={text:t,type:"switch",description:i,disabled:s,attributes:{},props:{},getValue(){return this.props[I].get(e,n)},callback(a,c){let p=!!c;h.success(`${p?"开启":"关闭"} ${t}`),this.props[I].set(e,p);},afterAddToUListCallBack:r};return Reflect.set(l.attributes,U,e),Reflect.set(l.attributes,q,n),te.initComponentsStorageApi("switch",l,{get(a,c){return g.getValue(a,c)},set(a,c){g.setValue(a,c);}}),l},Ee=function(t,e,n,o,i,r,s="请至少选择一个选项",u,l){let a=[];typeof o=="function"?a=o():a=o;let c={text:t,type:"select-multiple",description:r,placeholder:s,attributes:{},props:{},getValue(){return this.props[I].get(e,n)},selectConfirmDialogDetails:u,callback(p){let d=this.props[I],m=[];p.forEach(b=>{m.push(b.value);}),h.info("多选-选择：",m),d.set(e,m);},data:a};return Reflect.set(c.attributes,U,e),Reflect.set(c.attributes,q,n),te.initComponentsStorageApi("select-multiple",c,{get(p,d){return g.getValue(p,d)},set(p,d){g.setValue(p,d);}}),c},Ie=function(t,e,n,o,i,r="",s,u){let l={text:t,type:"textarea",attributes:{},props:{},description:o,placeholder:r,disabled:s,getValue(){let c=this.props[I].get(e,n);return Array.isArray(c)?c.join(`
`):c},callback(a,c){this.props[I].set(e,c);}};return Reflect.set(l.attributes,U,e),Reflect.set(l.attributes,q,n),te.initComponentsStorageApi("switch",l,{get(a,c){return g.getValue(a,c)},set(a,c){g.setValue(a,c);}}),l};class it{option;constructor(e){this.option=e;}getAllRule(){return pe(this.option.STORAGE_API_KEY,[])}setAllRule(e){de(this.option.STORAGE_API_KEY,e);}clearAllRule(){this.setAllRule([]);}getRule(e){const n=this.getAllRule(),o=n.findIndex(i=>i.uuid===e);if(o!==-1)return n[o]}setRule(e){const n=this.getAllRule(),o=n.findIndex(r=>r.uuid===e.uuid);let i=false;return o!==-1&&(n[o]=e,this.setAllRule(n),i=true),i}addRule(e){const n=this.getAllRule(),o=n.findIndex(r=>r.uuid===e.uuid);let i=false;return o!==-1||(n.push(e),this.setAllRule(n),i=true),i}updateRule(e){const n=this.getAllRule(),o=n.findIndex(i=>i.uuid===e.uuid);o!==-1?n[o]=e:n.push(e),this.setAllRule(n);}deleteRule(e){const n=this.getAllRule(),o=typeof e=="string"?e:e.uuid,i=n.findIndex(r=>r.uuid===o);return i!==-1?(n.splice(i,1),this.setAllRule(n),true):false}importRules(e){const n=T.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(l,a){l.close();}}},mask:{enable:true},drag:true,width:z.info.width,height:z.info.height,style:`
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),o=n.$shadowRoot.querySelector(".btn-control[data-mode='local']"),i=n.$shadowRoot.querySelector(".btn-control[data-mode='network']"),r=n.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),s=async l=>{let a=this.getAllRule();const c=[],p=[];let d=false;for(let b=0;b<l.length;b++){const v=l[b],V=a.findIndex(M=>M.uuid===v.uuid);V!==-1?p.push({index:V,data:v}):c.push(v);}if(p.length&&await new Promise(v=>{T.alert({title:{text:"覆盖规则",position:"center"},content:{text:`存在相同的uuid的规则 ${p.length}条，是否进行覆盖？`,html:true},btn:{close:{callback(V,M){V.close(),v(false);}},ok:{text:"覆盖",callback(V,M){V.close(),v(true);}}},width:z.info.width,height:z.info.height,mask:{enable:true},drag:true});})){for(const v of p)a[v.index]=v.data;d=true;}c.length&&(a=a.concat(c)),this.setAllRule(a);const m=`共 ${l.length} 条规则，新增 ${c.length} 条，覆盖 ${d?p.length:0} 条`;x.success(m),e?.();},u=l=>new Promise(async a=>{const c=y.toJSON(l);if(!Array.isArray(c)){h.error(c),x.error("导入失败，格式不符合（不是数组）",{consoleLogContent:true}),a(false);return}if(!c.length){x.error("导入失败，解析出的数据为空",{consoleLogContent:true}),a(false);return}await s(c),a(true);});f.on(o,"click",l=>{f.preventEvent(l),n.close();const a=f.createElement("input",{type:"file",accept:".json"});f.on(a,["propertychange","input"],c=>{if(!a.files?.length)return;const p=a.files[0],d=new FileReader;d.onload=()=>{u(d.result);},d.readAsText(p,"UTF-8");}),a.click();}),f.on(i,"click",l=>{f.preventEvent(l),n.close();const a=T.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(d,m){d.close();}},ok:{text:"导入",callback:async(d,m)=>{const b=d.text;if(y.isNull(b)){x.error("请填入完整的url");return}const v=x.loading("正在获取配置..."),V=await Y.get(b,{allowInterceptConfig:false});if(v.close(),!V.status){h.error(V),x.error("获取配置失败",{consoleLogContent:true});return}await u(V.data.responseText)&&d.close();}},cancel:{enable:false}},mask:{enable:true},drag:true,width:z.info.width,height:"auto"}),c=a.$shadowRoot.querySelector("input"),p=a.$shadowRoot.querySelector(".pops-prompt-btn-ok");f.on(c,["input","propertychange"],d=>{f.val(c)===""?f.attr(p,"disabled","true"):f.removeAttr(p,"disabled");}),f.listenKeyboard(c,"keydown",(d,m,b)=>{d==="Enter"&&b.length===0&&f.val(c)!==""&&f.trigger(p,"click");}),f.trigger(c,"input");}),f.on(r,"click",async l=>{f.preventEvent(l),n.close();const a=await y.getClipboardInfo();if(a.error!=null){x.error(a.error.toString());return}if(a.content.trim()===""){x.warning("获取到的剪贴板内容为空");return}await u(a.content);});}exportRules(e="rule.json"){const n=this.getAllRule(),o=new Blob([JSON.stringify(n,null,4)]),i=globalThis.URL.createObjectURL(o),r=document.createElement("a");r.href=i,r.download=e,r.click(),setTimeout(()=>{globalThis.URL.revokeObjectURL(i);},1500);}}class rt{option;constructor(e){this.option=e;}async showView(){let e=T.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist"></ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:true},btn:y.assign({ok:{callback:async()=>{await r();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
                ${T.config.cssText.panelCSS}
                
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
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),n=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");let o=e.$shadowRoot.querySelector(".rule-form-ulist"),i=await this.option.getView(await this.option.data());o.appendChild(i);const r=async()=>{(await this.option.onsubmit(n,await this.option.data())).success&&(e.close(),await this.option.dialogCloseCallBack(true));};}}class lt{option;$data={isFilteredData:[]};constructor(e){this.option=e;}showView(){let e=T.alert({title:{text:this.option.title,position:"center"},content:{text:`
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
            `}),n=e.$shadowRoot.querySelector(".filter-container"),o=document.createDocumentFragment();this.option.filterOption.forEach(i=>{let r=f.createElement("button",{innerText:i.name},{type:"button"}),s=async()=>{this.$data.isFilteredData=[],(await this.option.getAllRuleInfo()).forEach(async l=>{await i.filterCallBack(l.data)?f.show(l.$el,false):(f.hide(l.$el,false),this.$data.isFilteredData.push(l.data));}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),e.close();};f.on(r,"click",async u=>{f.preventEvent(u),!(typeof i.callback=="function"&&!await i.callback(u,s))&&await s();}),o.appendChild(r);}),n.appendChild(o);}getFilteredData(){return this.$data.isFilteredData}}class at{option;constructor(e){this.option=e;}async showView(e){let n=T.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:true},btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async s=>{this.showEditView(false,await this.option.getAddData(),n.$shadowRoot);}},close:{enable:true,callback(s){n.close();}},cancel:{enable:this.option?.bottomControls?.filter?.enable||false,type:"default",text:"过滤",callback:async(s,u)=>{if(typeof this.option?.bottomControls?.filter?.callback=="function"){let c=await this.option.bottomControls.filter.callback();if(typeof c=="boolean"&&!c)return}let l=()=>Array.from(n.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),a=u.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");if(f.text(a).includes("取消")){let c=await this.option?.bottomControls?.filter?.cancelFilterCallback?.({$button:a,getAllRuleElement:l});if(typeof c=="boolean"&&!c)return;l().forEach(p=>{f.show(p,false);}),f.text(a,"过滤");}else {let c=new lt({title:this.option.bottomControls?.filter?.title??"过滤规则",filterOption:this.option.bottomControls?.filter?.option||[],execFilterCallBack:async()=>{f.text(a,"取消过滤"),await this.option.bottomControls?.filter?.execFilterCallBack?.();const p=c.getFilteredData();p.length&&f.text(a,`取消过滤(${p.length})`);},getAllRuleInfo:()=>l().map(p=>({data:this.parseRuleItemElement(p).data,$el:p}))});c.showView();}}},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:s=>{let u=T.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async l=>{if(h.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){x.error("清理失败");return}else x.success("清理成功");await this.updateDeleteAllBtnText(n.$shadowRoot),this.clearContent(n.$shadowRoot),u.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
            ${T.config.cssText.panelCSS}
            
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
            `}),o=await this.option.data(),i=false,r=0;for(let s=0;s<o.length;s++){let u=o[s],l=await this.appendRuleItemElement(n.$shadowRoot,u),a=true;typeof e=="function"?a=e(u):typeof e=="number"&&!isNaN(e)&&(a=await this.option.bottomControls?.filter?.option[e]?.filterCallBack(u)??a),a||(i=true,f.hide(l,false),r++);}if(i){let s=n.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");f.text(s,`取消过滤${r?`(${r})`:""}`);}}showEditView(e,n,o,i,r,s){let u=async a=>{if(a){if(typeof s=="function"){let c=await this.option.getData(n);s(c);}}else if(e||await this.option.deleteData(n),typeof r=="function"){let c=await this.option.getData(n);r(c);}};new rt({title:e?"编辑":"添加",data:()=>n,dialogCloseCallBack:u,getView:async a=>await this.option.itemControls.edit.getView(a,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async(a,c)=>{a.close(),await u(false);}},close:{callback:async(a,c)=>{a.close(),await u(false);}}},onsubmit:async(a,c)=>{let p=await this.option.itemControls.edit.onsubmit(a,e,c);return p.success?e?(x.success("修改成功"),o&&await this.updateRuleItemElement(p.data,i,o)):o&&await this.appendRuleItemElement(o,p.data):e&&h.error("修改失败"),p},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(e){let n=e.querySelector(".rule-view-container"),o=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:n,$deleteBtn:o}}parseRuleItemElement(e){let n=e.querySelector(".rule-controls-enable"),o=n.querySelector(".pops-panel-switch"),i=n.querySelector(".pops-panel-switch__input"),r=n.querySelector(".pops-panel-switch__core"),s=e.querySelector(".rule-controls-edit"),u=e.querySelector(".rule-controls-delete");return {$enable:n,$enableSwitch:o,$enableSwitchInput:i,$enableSwitchCore:r,$edit:s,$delete:u,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,n){let o=await this.option.getDataItemName(e),i=f.createElement("div",{className:"rule-item",innerHTML:`
			<div class="rule-name">${o}</div>
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
					${T.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${T.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(i,"data-rule",e);let r="pops-panel-switch-is-checked";const{$enable:s,$enableSwitch:u,$enableSwitchCore:l,$enableSwitchInput:a,$delete:c,$edit:p}=this.parseRuleItemElement(i);return this.option.itemControls.enable.enable?(f.on(l,"click",async d=>{let m=false;u.classList.contains(r)?(u.classList.remove(r),m=false):(u.classList.add(r),m=true),a.checked=m,await this.option.itemControls.enable.callback(e,m);}),await this.option.itemControls.enable.getEnable(e)&&u.classList.add(r)):s.remove(),this.option.itemControls.edit.enable?f.on(p,"click",d=>{f.preventEvent(d),this.showEditView(true,e,n,i,m=>{e=null,e=m;});}):p.remove(),this.option.itemControls.delete.enable?f.on(c,"click",d=>{f.preventEvent(d);let m=T.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async b=>{h.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(x.success("成功删除该数据"),i.remove(),await this.updateDeleteAllBtnText(n),m.close()):x.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):c.remove(),i}async appendRuleItemElement(e,n){let{$container:o}=this.parseViewElement(e),i=[],r=Array.isArray(n)?n:[n];for(let s=0;s<r.length;s++){let u=r[s],l=await this.createRuleItemElement(u,e);o.appendChild(l),i.push(l);}return await this.updateDeleteAllBtnText(e),i}async updateRuleContaienrElement(e){this.clearContent(e);const{$container:n}=this.parseViewElement(e);let o=await this.option.data();await this.appendRuleItemElement(e,o),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,n,o){let i=await this.createRuleItemElement(e,o);n.after(i),n.remove();}clearContent(e){const{$container:n}=this.parseViewElement(e);f.html(n,"");}setDeleteBtnText(e,n,o=false){const{$deleteBtn:i}=this.parseViewElement(e);o?f.html(i,n):f.text(i,n);}async updateDeleteAllBtnText(e){let n=await this.option.data();this.setDeleteBtnText(e,`清空所有(${n.length})`);}}const st={__ajaxHooker:null,get ajaxHooker(){return this.__ajaxHooker==null&&(this.__ajaxHooker=y.ajaxHooker()),this.__ajaxHooker}};class ct{parseInfoDictData(e,n=false){let o=e?.note_card,i=e.id,r=o.display_title,s=!!o?.interact_info?.liked,u=0,l=e?.note_card?.interact_info?.liked_count;typeof l=="string"&&(u=parseInt(l),isNaN(u)&&(u=0));let a=o?.user?.nick_name||o?.user?.nickname,c=o?.user?.user_id,p=o?.type==="video",d=o?.video?.capa?.duration||0;return {articleId:i,display_title:r,isLike:s,liked_count:u,nick_name:a,user_id:c,isVideo:p,videoDuration:d}}checkFilterWithRule(e){if(e.infoValue==null||e.ruleValue==null)return  false;if(typeof e.infoValue=="string"){if(e.infoValue.match(e.ruleValue))return  true}else if(typeof e.infoValue=="object"){if(Array.isArray(e.infoValue)&&e.infoValue.find(o=>typeof o=="string"&&e.ruleValue!=null?!!o.match(e.ruleValue):false))return  true}else if(typeof e.infoValue=="number"){if(typeof e.ruleValue=="string"){let n=e.ruleValue.trim(),o=n.match(/(\d+)/);if(!o)return h.warn("过滤器-解析比较大小的数字失败: ",e),false;let i=Number(o[1]);if(n.startsWith(">")){if(n.startsWith(">=")){if(e.infoValue>=i)return  true}else if(e.infoValue>i)return  true}else if(n.startsWith("<")){if(n.startsWith("<=")){if(e.infoValue<=i)return  true}else if(e.infoValue<i)return  true}else if(n.startsWith("=")){if(e.infoValue===i)return  true}else return h.warn("视频过滤器-未经允许的比较符号: ",e),false}}else if(typeof e.infoValue=="boolean"&&typeof e.ruleValue=="string"){let n=e.ruleValue.trim();return e.infoValue.toString()===n}return  false}checkInfoIsFilter(e,n){let o=this.parseInfoDictData(n),i=false,r=null;e:for(let s=0;s<e.length;s++){const u=e[s],l=Array.isArray(u.data.ruleName)?u.data.ruleName:[u.data.ruleName];for(let a=0;a<l.length;a++){const c=l[a];if(!Reflect.has(o,c))continue;let p=c,d=o[p],m={infoKey:p,infoValue:d,ruleKey:u.data.ruleName,ruleValue:u.data.ruleValue};if(i=this.checkFilterWithRule(m),i)if(Array.isArray(u.dynamicData)&&u.dynamicData.length){let b=[];for(let v=0;v<u.dynamicData.length;v++){const V=u.dynamicData[v];let M=V.ruleName,D=o[M],E={infoKey:M,infoValue:D,ruleKey:V.ruleName,ruleValue:V.ruleValue};b.push(E);let L=this.checkFilterWithRule(E);if(i=i&&L,!i)break}i&&h.success([`视频过滤器-多组 ==> ${u.name}`,o,m,b,n,u]);}else h.success([`视频过滤器 ==> ${u.name}`,o,m,n,u]);if(i){r=u;break e}}}return {isFilter:i,matchedFilterOption:r,transformInfo:o,info:n}}removeArticle(...e){if(e.length===1){let n=e[0];n!=null&&n instanceof Element&&n.remove();}else if(e.length===2){let n=e[0],o=e[1];if(typeof o=="number"){let i=n[o];i!=null&&i instanceof Element&&i.remove(),n.splice(o,1);}}}}const ae={$key:{ENABLE_KEY:"shieldVideo-exec-network-enable"},$data:{isFilterAwemeInfoList:new j.Dictionary,articleInfoMap:new j.Dictionary,__videoFilterRuleStorage:null,get videoFilterRuleStorage(){return this.__videoFilterRuleStorage==null&&(this.__videoFilterRuleStorage=new it({STORAGE_API_KEY:"xhs-article-filter-rule"})),this.__videoFilterRuleStorage},get isReverse(){return g.getValue("xhs-article-filter-only-show-filtered-video")}},init(){this.execFilter();},execFilter(){g.execMenuOnce(this.$key.ENABLE_KEY,async()=>{h.info("执行笔记过滤器");let t=new ct,e=i=>{if(this.$data.isReverse&&(i.isFilter=!i.isFilter,typeof i.transformInfo.articleId=="string"&&i.matchedFilterOption)){let r=this.$data.isFilterAwemeInfoList.get(i.transformInfo.articleId)||[];r.push(i.matchedFilterOption),this.$data.isFilterAwemeInfoList.set(i.transformInfo.articleId,r);}typeof i.transformInfo.articleId=="string"&&this.$data.articleInfoMap.set(i.transformInfo.articleId,{articleInfo:i.info,transformArticleInfo:i.transformInfo});},n=i=>{if(!g.getValue(this.$key.ENABLE_KEY))return [];let r=this.$data.videoFilterRuleStorage.getAllRule();if(!r.length)return [];let s=Array.isArray(i)?i:[i];return r.filter(l=>l.enable&&(l.data.scope.includes("all")||Array.from(s).findIndex(a=>l.data.scope.includes(a))!==-1))},o=(i,r)=>{r.response=s=>{let u=n(i);if(!u.length)return;let l=y.toJSON(s.responseText),a=l?.data?.items;if(Array.isArray(a)){for(let c=0;c<a.length;c++){let p=a[c]||{},d=t.checkInfoIsFilter(u,p);e(d),d.isFilter&&t.removeArticle(a,c--);}s.responseText=JSON.stringify(l);}};};st.ajaxHooker.hook(i=>{let r=B.fixUrl(i.url);new URL(r).pathname.startsWith("/api/sns/web/v1/homefeed")&&o("xhr-explore",i);});});},getTemplateData(){return {uuid:y.generateUUID(),enable:true,name:"",data:{scope:[],ruleName:"display_title",ruleValue:"",remarks:""},dynamicData:[]}},showView(){this.getRuleViewInstance().showView();},getRuleViewInstance(){const t=this;let e=T.config.PanelHandlerComponents();function n(i){return {get(r,s){return i[r]??s},set(r,s){i[r]=s;}}}return new at({title:"笔记过滤器",data:()=>this.$data.videoFilterRuleStorage.getAllRule(),getAddData:()=>this.getTemplateData(),getDataItemName:i=>i.name,updateData:i=>this.$data.videoFilterRuleStorage.setRule(i),deleteData:i=>this.$data.videoFilterRuleStorage.deleteRule(i),getData:i=>this.$data.videoFilterRuleStorage.getAllRule().find(u=>u.uuid===i.uuid)??i,itemControls:{enable:{enable:true,getEnable(i){return i.enable},callback:(i,r)=>{i.enable=r,this.$data.videoFilterRuleStorage.setRule(i);}},edit:{enable:true,getView:(i,r)=>{let s=document.createDocumentFragment();r||(i=this.getTemplateData());let u=A("启用","enable",true);Reflect.set(u.props,I,n(i));let l=e.createSectionContainerItem_switch(u),a=ot("规则名称","name","","",void 0,"必填");Reflect.set(a.props,I,n(i));let c=e.createSectionContainerItem_input(a),p=Ee("作用域","scope",[],[{text:"所有",value:"all"},{text:"发现",value:"xhr-explore"}].map(w=>({...w,value:w.value})),void 0,"选择需要在xxx上生效的作用域");Reflect.set(p.props,I,n(i.data));let d=e.createSectionContainerItem_select_multiple_new(p),m=["display_title","isLike","liked_count","nick_name","user_id","isVideo","videoDuration"],b=w=>{let S=Array.isArray(w.ruleName)?w.ruleName:[w.ruleName],R=Ee("属性名","ruleName",S,m.map(F=>({text:F,value:F})),void 0,"选择需要的属性名 ");Reflect.set(R.props,I,n(w));let C=e.createSectionContainerItem_select_multiple_new(R),$=Ie("属性值","ruleValue","","如果是字符串，可正则，注意转义");Reflect.set($.props,I,n(w));let N=e.createSectionContainerItem_textarea($),H=Ie("备注","remarks","","");Reflect.set(H.props,I,n(w));let W=e.createSectionContainerItem_textarea(H);return {$ruleName:C,$ruleValue:N,$remarks:W}},v=f.createElement("div",{className:"rule-form-ulist-dynamic",innerHTML:`
							<div class="rule-form-ulist-dynamic__inner">

							</div>
							<div class="pops-panel-button pops-panel-button-no-icon">
								<button class="pops-panel-button_inner" type="default">
									<i class="pops-bottom-icon" is-loading="false"></i>
									<span class="pops-panel-button-text">添加额外属性</span>
								</button>
							</div>
							`}),V=v.querySelector(".rule-form-ulist-dynamic__inner"),M=v.querySelector(".pops-panel-button"),D=(w={ruleName:[],ruleValue:"",remarks:""})=>{let S=f.createElement("div",{className:"rule-form-ulist-dynamic__inner-container",innerHTML:`
									<div class="dynamic-control-delete">
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="danger">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">×</span>
											</button>
										</div>
									</div>
									<ul class="dynamic-forms">

									</ul>
								`}),R=S.querySelector(".dynamic-control-delete");f.on(R,"click",W=>{if(f.preventEvent(W),S.remove(),Array.isArray(i.dynamicData)){let F=i.dynamicData.findIndex(ie=>ie==w);F!==-1&&i.dynamicData.splice(F,1);}});let C=S.querySelector(".dynamic-forms"),{$ruleName:$,$ruleValue:N,$remarks:H}=b(w);C.appendChild($),C.appendChild(N),C.appendChild(H),V.appendChild(S);};if(f.on(M,"click",w=>{f.preventEvent(w),D();}),Array.isArray(i.dynamicData))for(let w=0;w<i.dynamicData.length;w++){const S=i.dynamicData[w];D(S);}let{$ruleName:E,$ruleValue:L,$remarks:_}=b(i.data);return s.append(l,c,d,E,L,_,v),s},onsubmit:(i,r,s)=>{let u=i.querySelectorAll(".rule-form-ulist > li"),l=this.getTemplateData();return r&&(l.uuid=s.uuid),u.forEach(a=>{let c=Reflect.get(a,"__formConfig__");if(!c)return;let p=Reflect.get(c,"attributes");if(!p)return;let d=Reflect.get(a,I),m=Reflect.get(p,U),b=Reflect.get(p,q),v=d.get(m,b);Reflect.has(l,m)?Reflect.set(l,m,v):Reflect.has(l.data,m)?Reflect.set(l.data,m,v):h.error(`${m}不在数据中`);}),i.querySelectorAll(".rule-form-ulist-dynamic__inner-container").forEach(a=>{let c={};a.querySelectorAll(".dynamic-forms > li").forEach(p=>{let d=Reflect.get(p,"__formConfig__");if(!d)return;let m=Reflect.get(d,"attributes");if(!m)return;let b=Reflect.get(p,I),v=Reflect.get(m,U),V=Reflect.get(m,q),M=b.get(v,V);Reflect.set(c,v,M);}),l.dynamicData.push(c);}),l.name.trim()===""?(x.error("规则名称不能为空"),{success:false,data:l}):l.data.scope.length===0?(x.error("请选择作用域"),{success:false,data:l}):l.data.ruleName.length===0?(x.error("请选择属性名"),{success:false,data:l}):l.data.ruleValue.trim()===""?(x.error("属性值不能为空"),{success:false,data:l}):r?{success:t.$data.videoFilterRuleStorage.setRule(l),data:l}:{success:t.$data.videoFilterRuleStorage.addRule(l),data:l}},style:`
                    .pops-panel-textarea textarea{
                        height: 150px;
                    }
					.pops-panel-item-left-desc-text{
						line-height: normal;
						margin-top: 6px;
						font-size: 0.8em;
						color: rgb(108, 108, 108);
					}
					.rule-form-ulist-dynamic{
						--button-margin-top: 0px;
						--button-margin-right: 0px;
						--button-margin-bottom: 0px;
						--button-margin-left: 0px;
						display: flex;
						flex-direction: column;
						align-items: flex-start;
						padding: 5px 20px;
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
					.pops-panel-textarea textarea{
						height: 60px;
						min-height: 60px;
						width: 250px;
						max-width: 400px;
						min-width: 250px;
						resize: auto;
						transition: unset;
					}
                    `,width:()=>window.innerWidth>700?"700px":"88vw"},delete:{enable:true,deleteCallBack:i=>t.$data.videoFilterRuleStorage.deleteRule(i)}},bottomControls:{filter:{enable:true,option:[{name:"过滤-已启用",filterCallBack(i){return i.enable}},{name:"过滤-未启用",filterCallBack(i){return !i.enable}}]},clear:{enable:true,callback:()=>{t.$data.videoFilterRuleStorage.clearAllRule();}}}})}},se={init(){ae.init(),g.execMenuOnce("pc-xhs-hook-vue",()=>{xe.hookVue();}),g.execMenuOnce("pc-xhs-allowCopy",()=>se.allowPCCopy()),g.execMenuOnce("pc-xhs-open-blank-article",()=>se.openBlankArticle()),tt.init(),g.execMenuOnce("pc-xhs-article-showPubsliushTime",()=>Re.transformPublishTime()),ye.isArticle()&&(h.info("Router: 笔记页面"),Re.init());},allowPCCopy(){h.success("允许复制文字");const t=e=>{f.preventEvent(e);let n=k.getSelection();return n?y.copy(n.toString()):h.error("未选中任何内容"),false};return f.on(k,"copy",t,{capture:true}),{destory(){f.off(k,"copy",t,{capture:true});}}},openBlankArticle(){h.success("新标签页打开文章");let t=(e,n)=>{if(!g.getValue("pc-xhs-open-blank-article"))return;f.preventEvent(e);let i=n.querySelector("a.cover[href]")?.href;if(i){h.info("跳转文章: "+i);let r=new URL(i);r.pathname=r.pathname.replace(/^\/user\/profile\/[a-z0-9A-Z]+\//i,"/discovery/item/"),i=r.toString(),window.open(i,"_blank");}else x.error("未找到文章链接");};return f.on(document,"click",".feeds-container .note-item",t,{capture:true}),{destory(){f.off(document,"click",".feeds-container .note-item",t,{capture:true});}}}},ce=function(t,e,n,o,i,r,s){let u=[];typeof o=="function"?u=o():u=o;let l={text:t,type:"select",description:r,attributes:{},props:{},getValue(){return this.props[I].get(e,n)},callback(a,c,p){let d=c;if(h.info(`选择：${p}`),typeof i=="function"&&i(a,d,p))return;this.props[I].set(e,d);},data:u};return Reflect.set(l.attributes,U,e),Reflect.set(l.attributes,q,n),te.initComponentsStorageApi("select",l,{get(a,c){return g.getValue(a,c)},set(a,c){g.setValue(a,c);}}),l},ge=function(t,e,n,o,i,r,s,u,l,a){let c={text:t,type:"button",attributes:{},props:{},description:e,buttonIcon:o,buttonIsRightIcon:i,buttonIconIsLoading:r,buttonType:s,buttonText:n,callback(p){typeof u=="function"&&u(p);},afterAddToUListCallBack:l};return Reflect.set(c.attributes,Le,()=>{c.disable=false;}),c},ut={id:"xhs-panel-config-common",title:"通用",forms:[{type:"forms",text:"",forms:[{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[ce("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(t,e,n)=>{h.info("设置当前Qmsg弹出位置"+n);},"Toast显示在页面九宫格的位置"),ce("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),A("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[A("允许复制","pc-xhs-allowCopy",true,void 0,"可以选择文字并复制"),A("新标签页打开文章","pc-xhs-open-blank-article",false,void 0,"点击文章不会在本页展开，会打开新标签页")]}]},{text:"搜索",type:"deepMenu",forms:[{text:"",type:"forms",forms:[A("新标签页打开-搜索按钮","pc-xhs-search-open-blank-btn",false,void 0,"点击右边的搜索按钮直接新标签页打开搜索内容"),A("新标签页打开-回车键","pc-xhs-search-open-blank-keyboard-enter",false,void 0,"按下回车键直接新标签页打开搜索内容")]}]},{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[A("【屏蔽】广告","pc-xhs-shieldAd",true,void 0,"屏蔽元素"),A("【屏蔽】登录弹窗","pc-xhs-shield-login-dialog",true,void 0,"屏蔽会自动弹出的登录弹窗"),A("【屏蔽】选择文字弹出的搜索提示","pc-xhs-shield-select-text-search-position",false,void 0,"屏蔽元素"),A("【屏蔽】顶部工具栏","pc-xhs-shield-topToolbar",false,void 0,"屏蔽元素")]}]},{type:"deepMenu",text:"笔记过滤器",forms:[{text:'<a href="https://greasyfork.org/zh-CN/scripts/483960-%E5%B0%8F%E7%BA%A2%E4%B9%A6%E4%BC%98%E5%8C%96#:~:text=%E5%B1%8F%E8%94%BD%E8%A7%84%E5%88%99" target="_blank">点击查看规则</a>',type:"forms",forms:[A("启用","shieldVideo-exec-network-enable",true,void 0,"开启后以下功能才会生效"),A("仅显示被过滤的笔记","xhs-article-filter-only-show-filtered-video",false,void 0,"只会显示过滤规则命中的笔记"),ge("笔记过滤规则","可过滤笔记","自定义",void 0,false,false,"primary",()=>{ae.showView();})]},{type:"forms",text:"",forms:[ge("数据导入","导入自定义规则数据","导入",void 0,false,false,"primary",()=>{ae.$data.videoFilterRuleStorage.importRules();}),ge("数据导出","导出自定义规则数据","导出",void 0,false,false,"primary",()=>{ae.$data.videoFilterRuleStorage.exportRules(Te+"-视频过滤规则.json");})]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[A("劫持Vue","pc-xhs-hook-vue",true,void 0,"恢复__vue__属性")]}]}]}]},pt=function(t,e,n,o,i,r,s,u,l,a){let c={text:t,type:"slider",description:u,attributes:{},props:{},getValue(){return this.props[I].get(e,n)},getToolTipContent(p){return typeof s=="function"?s(p):`${p}`},callback(p,d){if(typeof r=="function"&&r(p,d))return;this.props[I].set(e,d);},min:o,max:i,step:l};return Reflect.set(c.attributes,U,e),Reflect.set(c.attributes,q,n),te.initComponentsStorageApi("slider",c,{get(p,d){return g.getValue(p,d)},set(p,d){g.setValue(p,d);}}),c},dt={id:"xhs-panel-config-article",title:"笔记",forms:[{type:"forms",text:"功能",forms:[A("显示发布、修改的绝对时间","pc-xhs-article-showPubsliushTime",false,void 0,"注：需要开启<code>通用</code>-<code>劫持/拦截</code>-<code>劫持Vue</code>")]},{text:"笔记宽屏",type:"forms",forms:[A("启用","pc-xhs-article-fullWidth",false,void 0,`让笔记占据宽屏，当页面可视宽度>=960px时才会触发该功能，当前页面可视宽度: ${window.innerWidth}px`),pt("占据范围","pc-xhs-article-fullWidth-widthSize",90,30,100,(t,e)=>{let n=he("#noteContainer");if(!n){h.error("未找到笔记容器");return}n.style.width=`${e}vw`;},t=>`${t}%，默认：90%`,"调整笔记页面占据的页面范围")]}]},ft={id:"little-red-book-panel-config-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[ce("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(t,e,n)=>{h.info("设置当前Qmsg弹出位置"+n);},"Toast显示在页面九宫格的位置"),ce("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),A("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"forms",forms:[{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[A("【屏蔽】广告","little-red-book-shieldAd",true,void 0,"如：App内打开"),A("【屏蔽】底部搜索发现","little-red-book-shieldBottomSearchFind",true,void 0,"建议开启"),A("【屏蔽】底部工具栏","little-red-book-shieldBottomToorBar",true,void 0,"建议开启")]}]}]}]},ht={id:"little-red-book-panel-config-home",title:"主页",forms:[{text:"",type:"forms",forms:[{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[A("劫持点击事件","little-red-book-repariClick",true,void 0,"可阻止点击跳转至下载页面")]}]}]}]},mt={id:"little-red-book-panel-config-note",title:"笔记",forms:[{text:"",type:"forms",forms:[{text:"视频笔记",type:"deepMenu",forms:[{text:"",type:"forms",forms:[A("优化视频描述","little-red-book-optimizeVideoNoteDesc",true,void 0,"让视频描述可以滚动显示更多"),A("【屏蔽】作者热门笔记","little-red-book-shieldAuthorHotNote",true,void 0,"建议开启"),A("【屏蔽】热门推荐","little-red-book-shieldHotRecommendNote",true,void 0,"建议开启")]}]}]},{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[A("优化评论浏览","little-red-book-optimizeCommentBrowsing",true,void 0,"目前仅可加载部分评论"),A("优化图片浏览","little-red-book-optimizeImageBrowsing",true,void 0,"更方便的浏览图片"),A("允许复制","little-red-book-allowCopy",true,void 0,"可以复制笔记的内容")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[A("劫持webpack-弹窗","little-red-book-hijack-webpack-mask",true,void 0,"如：打开App弹窗、登录弹窗"),A("劫持webpack-唤醒App","little-red-book-hijack-webpack-scheme",true,void 0,"禁止跳转商店小红书详情页/小红书")]}]}]}]};P(`
.qmsg svg.animate-turn {
    fill: none;
}
`);ee.addContentConfig([ut,dt]);ee.addContentConfig([ft,ht,mt]);const Fe=fe.getMenuOption();Fe.text="⚙ PC-设置";fe.updateMenuOption(Fe);fe.addMenuOption({key:"show_mobile_setting",text:"⚙ 移动端-设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{g.showPanel(ee.getConfig(1),`${Te}-移动端设置`);}});g.init();let Oe=y.isPhone(),oe="change_env_set",J=pe(oe);De.add({key:oe,text:`⚙ 自动: ${Oe?"移动端":"PC端"}`,autoReload:false,isStoreValue:false,showText(t){return J==null?t:t+` 手动: ${J==1?"移动端":J==2?"PC端":"未知"}`},callback:()=>{let t=[0,1,2],e=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!e)return;let n=parseInt(e);if(isNaN(n)){x.error("输入的不是规范的数字");return}if(!t.includes(n)){x.error("输入的值必须是0或1或2");return}n==0?_e(oe):de(oe,n);}});J!=null?(h.info(`手动判定为${J===1?"移动端":"PC端"}`),J==1?ve.init():J==2?se.init():(x.error("意外，手动判定的值不在范围内"),_e(oe))):Oe?(h.info("自动判定为移动端"),ve.init()):(h.info("自动判定为PC端"),se.init());

})(Qmsg, DOMUtils, Utils, pops, Viewer);