// ==UserScript==
// @name         小红书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.9.14
// @author       WhiteSevs
// @description  屏蔽登录弹窗、屏蔽广告、优化评论浏览、优化图片浏览、允许复制、禁止唤醒App、禁止唤醒弹窗、修复正确跳转等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAx9JREFUWEfNl09MU0EQxn/beFTDDRI41FAMcNGbBw62oPEGid6UULxg1EhEEzExgdBEEzRqlKDxZCHgDZJ6U8TWAyaQGIsHMQLSA0S8VYQT2NXp9tnX0vKnpi2TNH1vd3bmm5lv9+0o0kQ73SXsc7QCx1EcjU9rnOl6O3pXRNAqCjqCIsB6LKQioYh9rbK/6MMnWojFHgElO3KwWyUBBD1q9q3fWvoPgHY1dIHu2a3N3PRVt5ob98naOABdVd+K5nluxnJc5dBe9TU4qHS128lvRzDnOufoH4iyETukihJ9EnSH0i5PAFRj7oH8z0r9UmlXw0fQZrsVWhQRKcFCEepvQo0DcNXrQgeechDtbQAVpbCyBiurqUmqqYSD+2FyOnPyZE50ln7A4vKWCc5egvIyCA3DzV4YeZ00UlEGQ/eN88670HsjOTczZ8bbvXCiDqbC8HkeBkahuhLE5sBICqDdAzh9yjh1n4OlZZgdTxqcDEPfIAw9SI1aMjg1DVrDpe5tAIRewOJ36LyXzIAgv+IFz1ljXN5FJAOjrwwIcd583YwfO2L0JHvW2qqGjKXYnAExJkYfDyYBaGWibmyDGhe0t/z9bikDSMQO4NZlEO5YJTggfHCBf8SUIo0TqQCEPB8C0Ddg6m5xQIj4xAcXu+DLPASHjY5/1BDUDkAyWF6amXjCkcYLW5Sg1gWBZ3C7H6Y+mWdJ48y35LiQ0HvGGLHzIFsJLAJLSSQzssYmmzMg0TVfM9vMqqMYkcwIejEiv59rhliy3URP2H6n3/zXJsbsO+ipz+huCUCQSb2E3eJQRNL+ZsIQS/a1ALQIKDtCxu0i4EUs8GPvk7YEXFPbNrvAmj5ZJ3dB49wSYbTlUIgqANJFzoFfq4aE8izBiC0h49iEmctagszUyevoHvgYFf1zXEwA6PBeuJLVXwUe5pVp2Yyr2HmVaMUW8tYNZXWuI6xrT6IxcbeiHYVtTCT62ZDf1pp5ekB1FaYU2qfmgvGLQWpzKi0adOfxlhxF0ZGxObUiT7RqbjRNoJ0oVZIzINMNy5Eehtg7NvCrSChqz/IfgUZkW/BhLsQAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://www.xiaohongshu.com/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.8.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.6.6/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.4.5/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.4.0/dist/index.umd.js
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

(function (b, H, j, ue, Pe) {
  'use strict';

  var ve=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,Ce=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,pe=typeof GM_getValue<"u"?GM_getValue:void 0,ne=typeof GM_info<"u"?GM_info:void 0,He=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,de=typeof GM_setValue<"u"?GM_setValue:void 0,Ue=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,qe=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,_=typeof unsafeWindow<"u"?unsafeWindow:void 0,je=window;const We=`/* 用户主页 */\r
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
`,ge={isArticle(){return globalThis.location.pathname.startsWith("/discovery/item/")||globalThis.location.pathname.startsWith("/explore/")},isUserHome(){return globalThis.location.pathname.startsWith("/user/profile/")},isHome(){return globalThis.location.href==="https://www.xiaohongshu.com/"||globalThis.location.href==="https://www.xiaohongshu.com"},isSearch(){return globalThis.location.pathname.startsWith("/search_result/")}},Me="GM_Panel",Ie="data-init",U="data-key",q="data-default-value",Ge="data-init-more-value",M="data-storage-api",X={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},z={setting:{get width(){return X.width<550?"88vw":X.width<700?"550px":"700px"},get height(){return X.height<450?"70vh":X.height<550?"450px":"550px"}},settingMiddle:{get width(){return X.width<350?"88vw":"350px"}},info:{get width(){return X.width<350?"88vw":"350px"},get height(){return X.height<250?"88vh":"250px"}}};class Ke{storageKey;listenerData;constructor(e){if(typeof e=="string"){let n=e.trim();if(n=="")throw new Error("key参数不能为空字符串");this.storageKey=n;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new j.Dictionary;}getLocalValue(){let e=pe(this.storageKey);return e==null&&(e={},this.setLocalValue(e)),e}setLocalValue(e){de(this.storageKey,e);}set(e,n){let i=this.get(e),o=this.getLocalValue();Reflect.set(o,e,n),this.setLocalValue(o),this.triggerValueChangeListener(e,i,n);}get(e,n){let i=this.getLocalValue();return Reflect.get(i,e)??n}getAll(){return this.getLocalValue()}delete(e){let n=this.get(e),i=this.getLocalValue();Reflect.deleteProperty(i,e),this.setLocalValue(i),this.triggerValueChangeListener(e,n,void 0);}has(e){let n=this.getLocalValue();return Reflect.has(n,e)}keys(){let e=this.getLocalValue();return Reflect.ownKeys(e)}values(){let e=this.getLocalValue();return Reflect.ownKeys(e).map(n=>Reflect.get(e,n))}clear(){ve(this.storageKey);}addValueChangeListener(e,n){let i=Math.random(),o=this.listenerData.get(e)||[];return o.push({id:i,key:e,callback:n}),this.listenerData.set(e,o),i}removeValueChangeListener(e){let n=false;for(const[i,o]of this.listenerData.entries()){for(let l=0;l<o.length;l++){const a=o[l];(typeof e=="string"&&a.key===e||typeof e=="number"&&a.id===e)&&(o.splice(l,1),l--,n=true);}this.listenerData.set(i,o);}return n}triggerValueChangeListener(e,n,i){if(!this.listenerData.has(e))return;let o=this.listenerData.get(e);for(let l=0;l<o.length;l++){const a=o[l];if(typeof a.callback=="function"){let s=this.get(e),r,u;typeof n<"u"&&arguments.length>=2?u=n:u=s,typeof i<"u"&&arguments.length>2?r=i:r=s,a.callback(e,u,r);}}}}const K=new Ke(Me),ee={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new m.Dictionary),this.__contentConfig}},addContentConfig(t){Array.isArray(t)||(t=[t]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,t);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(t=0){return this.$data.contentConfig.get(t)??[]},getDefaultBottomContentConfig(){return [{id:"script-version",title:`版本：${ne?.script?.version||"未知"}`,isBottom:true,forms:[],clickFirstCallback(t,e,n){let i=ne?.script?.supportURL||ne?.script?.namespace;return typeof i=="string"&&m.isNotNull(i)&&window.open(i,"_blank"),false}}]}},fe={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{y.showPanel(ee.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){y.isTopWindow()&&Te.add(this.$data.menuOption);},addMenuOption(t){Array.isArray(t)||(t=[t]),this.$data.menuOption.push(...t);},updateMenuOption(t){Array.isArray(t)||(t=[t]),t.forEach(e=>{let n=this.$data.menuOption.findIndex(i=>i.key===e.key);n!==-1&&(this.$data.menuOption[n]=e);});},getMenuOption(t=0){return this.$data.menuOption[t]},deleteMenuOption(t=0){this.$data.menuOption.splice(t,1);}},O={waitRemove(...t){t.forEach(e=>{typeof e=="string"&&m.waitNodeList(e).then(n=>{n.forEach(i=>i.remove());});});},createBlockCSSNode(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),H.createElement("style",{type:"text/css",innerHTML:`${e.join(`,
`)}{display: none !important;}`})},addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),B(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){let e=typeof Ce=="function"?Ce(t.keyName):null;typeof e=="string"&&e?B(e):O.loadStyleLink(t.url);},async loadStyleLink(t){let e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=t,H.ready(()=>{document.head.appendChild(e);});},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(n=>{e.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.match(/^http(s|):\/\//i)?t:t.startsWith("//")?(t.startsWith("///")||(t=window.location.protocol+t),t):(t.startsWith("/")||(t+="/"),t=window.location.origin+t,t)},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;let e=new URL(t);return e.protocol="https:",e.toString()},lockScroll(...t){let e=document.createElement("style");e.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...t||[]);return n.forEach(i=>{i.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(e),{recovery(){n.forEach(i=>{i.classList.remove("pops-overflow-hidden-important");}),e.remove();}}},async getClipboardText(){function t(i){navigator.clipboard.readText().then(o=>{i(o);}).catch(o=>{f.error("读取剪贴板内容失败👉",o),i("");});}function e(i){navigator.permissions.query({name:"clipboard-read"}).then(o=>{t(i);}).catch(o=>{f.error("申请剪贴板权限失败，尝试直接读取👉",o.message??o.name??o.stack),t(i);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(i=>{if(!n()){i("");return}document.hasFocus()?e(i):window.addEventListener("focus",()=>{e(i);},{once:true});})},escapeHtml(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(t,e,n=5e3){let i,o=n-e,l=e,a=async s=>{let r=await t(s);if(typeof r=="boolean"&&!r||s){m.workerClearTimeout(i);return}if(l+=e,l>o){a(true);return}i=m.workerSetTimeout(()=>{a(false);},e);};a(false);},findParentNode(t,e,n){if(n){let i=H.closest(t,n);if(i)return i.querySelector(e)}else return H.matches(t,e)?t:H.closest(t,e)}},y={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new m.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new m.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new m.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new m.Dictionary),this.__onceExecData},get scriptName(){return ye},get panelConfig(){return this.__panelConfig},set panelConfig(t){this.__panelConfig=t;},key:Me,attributeKeyName:U,attributeDefaultValueName:q},init(){this.initContentDefaultValue(),fe.init();},isTopWindow(){return _.top===_.self},initContentDefaultValue(){const t=i=>{if(!i.attributes||i.type==="button"||i.type==="forms"||i.type==="deepMenu")return;let o=i.attributes[Ie];if(typeof o=="function"){let r=o();if(typeof r=="boolean"&&!r)return}let l=new Map,a=i.attributes[U];if(a!=null){const r=i.attributes[q];l.set(a,r);}let s=i.attributes[Ge];if(typeof s=="object"&&s&&Object.keys(s).forEach(r=>{l.set(r,s[r]);}),!l.size){f.warn(["请先配置键",i]);return}if(i.type==="switch"){let r=typeof i.disabled=="function"?i.disabled():i.disabled;typeof r=="boolean"&&r&&this.$data.contentConfigInitDisabledKeys.push(...l.keys());}for(const[r,u]of l.entries())this.setDefaultValue(r,u);},e=i=>{for(let o=0;o<i.length;o++){let l=i[o];t(l);let a=l.forms;a&&Array.isArray(a)&&e(a);}},n=[...ee.getAllContentConfig()];for(let i=0;i<n.length;i++){let o=n[i];if(!o.forms)continue;const l=o.forms;l&&Array.isArray(l)&&e(l);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(t,e){this.$data.contentConfigInitDefaultValue.has(t)&&f.warn("请检查该key(已存在): "+t),this.$data.contentConfigInitDefaultValue.set(t,e);},setValue(t,e){K.set(t,e);},getValue(t,e){let n=K.get(t);return n??(this.$data.contentConfigInitDefaultValue.has(t)?this.$data.contentConfigInitDefaultValue.get(t):e)},deleteValue(t){K.delete(t);},hasKey(t){return K.has(t)},addValueChangeListener(t,e){return K.addValueChangeListener(t,(i,o,l)=>{e(t,l,o);})},removeValueChangeListener(t){K.removeValueChangeListener(t);},triggerMenuValueChange(t,e,n){K.triggerValueChangeListener(t,n,e);},exec(t,e,n,i=true){const o=this;let l;typeof t=="string"||Array.isArray(t)?l=()=>t:l=t;let a=false,s=l(),r=[];Array.isArray(s)?(a=true,r=s):r.push(s);let u=r.find(v=>!this.$data.contentConfigInitDefaultValue.has(v));if(u){f.warn(`${u} 键不存在`);return}let c=JSON.stringify(r);if(i&&this.$data.onceExecMenuData.has(c))return this.$data.onceExecMenuData.get(c);let p=[],d=[],g=(v,V)=>{let T=[];Array.isArray(V)||(V=[V]),V.forEach(C=>{if(C!=null&&C instanceof HTMLStyleElement){T.push(C);return}}),p=p.concat(T);},x=v=>this.getValue(v),w=()=>{for(let v=0;v<p.length;v++)p[v].remove(),p.splice(v,1),v--;},k=()=>{let v=false;return typeof n=="function"?v=n(r):v=r.every(V=>x(V)),v},I=v=>{let V=k(),T=[];if(V){let C=r.map($=>this.getValue($)),S=e({value:a?C:C[0],addStyleElement:(...$)=>g(true,...$)});Array.isArray(S)||(S=[S]),S.forEach($=>{if($!=null&&$ instanceof HTMLStyleElement){T.push($);return}});}w(),p=[...T];};i&&r.forEach(v=>{let V=this.addValueChangeListener(v,(T,C,S)=>{I();});d.push(V);}),I();let L={reload(){I();},clear(){this.clearStoreStyleElements(),this.removeValueChangeListener(),i&&o.$data.onceExecMenuData.delete(c);},clearStoreStyleElements:()=>w(),removeValueChangeListener:()=>{d.forEach(v=>{this.removeValueChangeListener(v);});}};return this.$data.onceExecMenuData.set(c,L),L},execMenu(t,e,n=false,i=false){return this.exec(t,o=>e(o),o=>o.every(a=>{let s=!!this.getValue(a);return y.$data.contentConfigInitDisabledKeys.includes(a)&&(s=false,f.warn(`.execMenu${i?"Once":""} ${a} 被禁用`)),n&&(s=!s),s}),i)},execMenuOnce(t,e,n=false,i=false){const o=this.execMenu(t,e,n,true);if(i&&o){const l=()=>{o.reload();};this.removeUrlChangeWithExecMenuOnceListener(t),this.addUrlChangeWithExecMenuOnceListener(t,l);const a=o.clear;o.clear=()=>{a(),this.removeUrlChangeWithExecMenuOnceListener(t);};}return o},deleteExecMenuOnce(t){return t=this.transformKey(t),this.$data.onceExecMenuData.delete(t),this.$data.urlChangeReloadMenuExecOnce.delete(t),K.removeValueChangeListener(t)},onceExec(t,e){if(t=this.transformKey(t),typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(t)||(e(),this.$data.onceExecData.set(t,1));},deleteOnceExec(t){t=this.transformKey(t),this.$data.onceExecData.delete(t);},addUrlChangeWithExecMenuOnceListener(t,e){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.set(t,e);},removeUrlChangeWithExecMenuOnceListener(t){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.delete(t);},triggerUrlChangeWithExecMenuOnceEvent(t){this.$data.urlChangeReloadMenuExecOnce.forEach((e,n)=>{e(t);});},showPanel(t,e=`${ye}-设置`,n=false,i=false){this.$data.$panel=null,this.$data.panelContent=[];let o=t.findIndex(a=>(typeof a.isBottom=="function"?a.isBottom():!!a.isBottom)&&a.id==="script-version")!==-1;!n&&!o&&t.push(...ee.getDefaultBottomContentConfig());let l=D.panel({title:{text:e,position:"center",html:false,style:""},content:t,btn:{close:{enable:true,callback:(a,s)=>{a.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(a,s)=>{a(),this.$data.$panel=null;}},width:z.setting.width,height:z.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=l,this.$data.panelContent=t,i||this.registerConfigSearch({$panel:l,content:t});},registerConfigSearch(t){const{$panel:e,content:n}=t;let i=async(c,p)=>{if(c==null)return;let d=await p(c);return d&&typeof d.isFind=="boolean"&&d.isFind?d.data:await i(d.data,p)},o=(c,p)=>{const d=new IntersectionObserver(g=>{g.forEach(x=>{x.isIntersecting&&(p?.(),d.disconnect());});},{root:null,threshold:1});d.observe(c),c.scrollIntoView({behavior:"smooth",block:"center"});},l=c=>{const p="pops-flashing";h.animationend(c,()=>{c.classList.remove(p);}),c.classList.add(p);},a=(c,p)=>{m.preventEvent(c);let d=D.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:z.settingMiddle.width,height:"auto",drag:true,style:`
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
				`});d.$shadowRoot.querySelector(".search-wrapper");let g=d.$shadowRoot.querySelector(".search-config-text"),x=d.$shadowRoot.querySelector(".search-result-wrapper");g.focus();let w=()=>{h.empty(x);},k=L=>{const v=m.queryProperty(L,T=>T?.next?{isFind:false,data:T.next}:{isFind:true,data:T});let V=h.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${v.matchedData?.path}</div>
							<div class="search-result-item-description">${v.matchedData?.description??""}</div>
						`});return h.on(V,"click",T=>{let S=e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[L.index];if(!S){b.error(`左侧项下标${L.index}不存在`);return}S.scrollIntoView({behavior:"smooth",block:"center"}),S.click(),i(L.next,async $=>{if($?.next){let E=await m.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(R=>{const N=Reflect.get(R,"__formConfig__");return typeof N=="object"&&N!=null&&N.text===$.name}),2500);if(E)E.click();else return b.error("未找到对应的二级菜单"),{isFind:true,data:$};return {isFind:false,data:$.next}}else {let E=await m.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(R=>Reflect.get(R,"__formConfig__")===$.matchedData?.formConfig),2500);if(E){o(E);let R=E.closest(".pops-panel-forms-fold[data-fold-enable]");R&&(R.querySelector(".pops-panel-forms-fold-container").click(),await m.sleep(500)),o(E,()=>{l(E);});}else b.error("未找到对应的菜单项");return {isFind:true,data:$}}});}),V},I=L=>{const v=new RegExp(L,"i"),V=[],T=(S,$)=>{for(let E=0;E<S.length;E++){const R=S[E];let N=R.forms;if(N&&Array.isArray(N)){const P=m.deepClone($);if(R.type==="deepMenu"){const W=m.queryProperty(P,F=>F?.next?{isFind:false,data:F.next}:{isFind:true,data:F});W.next={name:R.text};}T(N,P);}else {let P=Reflect.get(R,"text"),W=Reflect.get(R,"description");const F=[P,W];let oe=F.findIndex(Z=>{if(typeof Z=="string")return Z.match(v)});if(oe!==-1){const Z=m.deepClone($),_e=m.queryProperty(Z,G=>G?.next?{isFind:false,data:G.next}:{isFind:true,data:G});_e.next={name:P,matchedData:{path:"",formConfig:R,matchedText:F[oe],description:W}};const ke=[];m.queryProperty(Z,G=>{const me=G?.name;return typeof me=="string"&&me.trim()!==""&&ke.push(me),G?.next?{isFind:false,data:G.next}:{isFind:true,data:G}});const Be=ke.join(O.escapeHtml(" - "));_e.next.matchedData.path=Be,V.push(Z);}}}};for(let S=0;S<n.length;S++){const $=n[S];if(!$.forms||$.isBottom&&$.id==="script-version")continue;const E=$.forms;if(E&&Array.isArray(E)){let R=$.title;typeof R=="function"&&(R=R()),T(E,{index:S,name:R});}}let C=document.createDocumentFragment();for(const S of V){let $=k(S);C.appendChild($);}w(),x.append(C);};h.on(g,"input",m.debounce(L=>{m.preventEvent(L);let v=h.val(g).trim();if(v===""){w();return}I(v);},200));},s=null,r=false,u;h.on(e.$shadowRoot,"dblclick","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",a),h.on(e.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(c,p)=>{clearTimeout(u),u=void 0,r&&s===p?(r=false,s=null,a(c)):(u=setTimeout(()=>{r=false;},200),r=true,s=p);},{capture:true}),e.$shadowRoot.appendChild(h.createElement("style",{type:"text/css",textContent:`
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
				`}));},transformKey(t){if(Array.isArray(t)){const e=t.sort();return JSON.stringify(e)}else return t}},ze={Viewer:{keyName:"ViewerCSS",url:"https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"}},Q={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},m=j.noConflict(),h=H.noConflict(),D=ue,f=new m.Log(ne,_.console||je.console);let ye=ne?.script?.name||void 0;ue.config.Utils.AnyTouch();const Le=false;f.config({debug:Le,logMaxCount:1e3,autoClearConsole:true,tag:true});b.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(t){const e=t.getSetting().type;if(e==="loading")return  false;const n=t.getSetting().content;return e==="warning"?f.warn(n):e==="error"?f.error(n):f.info(n),true},get position(){return y.getValue(Q.qmsg_config_position.key,Q.qmsg_config_position.defaultValue)},get maxNums(){return y.getValue(Q.qmsg_config_maxnums.key,Q.qmsg_config_maxnums.defaultValue)},get showReverse(){return y.getValue(Q.qmsg_config_showreverse.key,Q.qmsg_config_showreverse.defaultValue)},get zIndex(){let t=j.getMaxZIndex(),e=ue.config.InstanceUtils.getPopsMaxZIndex().zIndex;return j.getMaxValue(t,e)+100}});D.GlobalConfig.setGlobalConfig({zIndex:()=>{let t=j.getMaxZIndex(void 0,void 0,n=>{if(n?.classList?.contains("qmsg-shadow-container")||n?.closest("qmsg")&&n.getRootNode()instanceof ShadowRoot)return  false}),e=ue.config.InstanceUtils.getPopsMaxZIndex().zIndex;return j.getMaxValue(t,e)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const Te=new m.GM_Menu({GM_getValue:pe,GM_setValue:de,GM_registerMenuCommand:He,GM_unregisterMenuCommand:Ue}),Y=new m.Httpx({xmlHttpRequest:qe,logDetails:Le});Y.interceptors.request.use(t=>t);Y.interceptors.response.use(void 0,t=>(f.error("拦截器-请求错误",t),t.type==="onabort"?b.warning("请求取消",{consoleLogContent:true}):t.type==="onerror"?b.error("请求异常",{consoleLogContent:true}):t.type==="ontimeout"?b.error("请求超时",{consoleLogContent:true}):b.error("其它错误",{consoleLogContent:true}),t));_.Object.defineProperty,_.Function.prototype.apply,_.Function.prototype.call,_.Element.prototype.appendChild,_.setTimeout;const B=m.addStyle.bind(m);H.selector.bind(H);const Xe=H.selectorAll.bind(H);new m.GM_Cookie;const De=ye||"小红书优化",Je=Pe,$e="https://edith.xiaohongshu.com",Ve={async getPageInfo(t,e="",n="",i="",o="jpg,webp"){const l="/api/sns/web/v2/comment/page",a={note_id:t,cursor:e,top_comment_id:i,image_formats:o,xsec_token:n},s=l+"?"+m.toSearchParamsStr(a);let r=await Y.get(`${$e}${s}`,{headers:{Accept:"application/json, text/plain, */*","User-Agent":m.getRandomPCUA(),Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"}});if(!r.status)return;let u=m.toJSON(r.data.responseText);if(f.info(["获取页信息",u]),u.code===0||u.success)return u.data;if(u.code===-101)return;b.error(u.msg);},async getLzlPageInfo(t="",e="",n=10,i="",o="jpg,webp,avif",l=""){const a="/api/sns/web/v2/comment/sub/page";let s={note_id:t,root_comment_id:e,num:n,cursor:i,image_formats:o,top_comment_id:l};a+""+m.toSearchParamsStr(s);let r=`${$e}${a}?${m.toSearchParamsStr(s)}`,u=await Y.get(r,{headers:{Accept:"application/json, text/plain, */*","User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Host:"edith.xiaohongshu.com",Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"},onerror(){}});if(!u.status){u.data.status===406&&m.isNotNull(u.data.responseText)?m.toJSON(u.data.responseText).code==-1?b.error("获取楼中楼信息失败，验证x-s、x-t、x-s-common失败"):b.error("获取楼中楼信息失败"):b.error("请求异常"),f.error(["获取楼中楼信息失败",u]);return}let c=m.toJSON(u.data.responseText);if(f.info(["获取楼中楼页信息",c]),c.code===0||c.success)return c.data;b.error(c.msg);},async getSearchRecommend(t){let e=await Y.get(`https://edith.xiaohongshu.com/api/sns/web/v1/search/recommend?keyword=${t}`,{fetch:true});if(!e.status)return;let n=m.toJSON(e.data.responseText);if(n.success||n.code===1e3)return n.data.sug_items}},Se={$data:{document_addEventListener:[],element_addEventListener:[],setTimeout:[],setInterval:[],function_apply:[],function_call:[],defineProperty:[]},document_addEventListener(t){if(this.$data.document_addEventListener.push(t),f.info("document.addEventListener hook新增劫持判断回调"),this.$data.document_addEventListener.length>1)return;const e=this;let n=new WeakMap;const i=_.document.addEventListener,o=_.document.removeEventListener;_.document.addEventListener=function(...l){let a=this,s=l[0],r=l[1],u=l[2];for(let c=0;c<e.$data.document_addEventListener.length;c++){const p=e.$data.document_addEventListener[c],d=Reflect.apply(p,this,[a,s,r,u]);if(typeof d=="function"){l[1]=d,n.set(r,{eventName:s,fn:d,options:u});break}else if(typeof d=="boolean"&&!d)return}return Reflect.apply(i,this,l)},_.document.removeEventListener=function(...l){let a=l[0],s=l[1],r=l[2];if(n.has(s)){const{eventName:u,fn:c,options:p}=n.get(s);let d=false;a===u&&(typeof r=="boolean"&&r===p||typeof r=="object"&&typeof p=="object"&&r.capture===p.capture||r==r)&&(d=true),d&&(l[1]=c);}return Reflect.apply(o,this,l)};},element_addEventListener(t){if(this.$data.element_addEventListener.push(t),f.info("Element.prototype.addEventListener hook新增劫持判断回调"),this.$data.element_addEventListener.length>1)return;const e=this;let n=new WeakMap;const i=_.Element.prototype.addEventListener,o=_.Element.prototype.removeEventListener;_.Element.prototype.addEventListener=function(...l){let a=this,s=l[0],r=l[1],u=l[2];for(let c=0;c<e.$data.element_addEventListener.length;c++){const p=e.$data.element_addEventListener[c],d=Reflect.apply(p,this,[a,s,r,u]);if(typeof d=="function"){l[1]=d,n.set(r,{eventName:s,fn:d,options:u});break}else if(typeof d=="boolean"&&!d)return}return Reflect.apply(i,this,l)},_.Element.prototype.removeEventListener=function(...l){let a=l[0],s=l[1],r=l[2];if(n.has(s)){const{eventName:u,fn:c,options:p}=n.get(s);let d=false;u===a&&(typeof r=="boolean"&&r===p||typeof r=="object"&&typeof p=="object"&&r.capture===p.capture||r==p)&&(d=true),d&&(l[1]=c);}return Reflect.apply(o,this,l)};},setTimeout(t){if(this.$data.setTimeout.push(t),f.info("window.setTimeout hook新增劫持"),this.$data.setTimeout.length>1)return;const e=this;let n=_.setTimeout;_.setTimeout=function(...i){let o=i[0],l=i[1];for(let a=0;a<e.$data.setTimeout.length;a++){const s=e.$data.setTimeout[a],r=s(o,l);if(typeof r=="boolean"&&!r)return}return Reflect.apply(n,this,i)};},setInterval(t){if(this.$data.setInterval.push(t),f.info("window.setInterval hook新增劫持"),this.$data.setInterval.length>1)return;const e=this;let n=_.setInterval;_.setInterval=function(...i){let o=i[0],l=i[1];for(let a=0;a<e.$data.setInterval.length;a++){const s=e.$data.setInterval[a],r=s(o,l);if(typeof r=="boolean"&&!r)return}return Reflect.apply(n,this,i)};},function_apply(t){if(this.$data.function_apply.push(t),f.info("Function.prototype.apply hook新增劫持"),this.$data.function_apply.length>1)return;const e=this;let n=_.Function.prototype.apply;_.Function.prototype.apply=function(...i){let o=i[0],l=i[1],a=this;for(let r=0;r<e.$data.function_apply.length;r++){let u=e.$data.function_apply[r];if(typeof u.paramsHandler=="function"){let c=u.paramsHandler(a,o,l);if(c!=null){if(c.args&&(i[0]=c.args.thisArg,i[1]=c.args.argArray,a=c.args.fn),c.preventDefault)return "result"in c?c.result:void 0;break}}}let s=n.call(a,...i);for(let r=0;r<e.$data.function_apply.length;r++){let u=e.$data.function_apply[r];typeof u.returnsHandler=="function"&&(s=u.returnsHandler(a,i[0],i[1],s).result);}return s};},function_call(t){if(this.$data.function_call.push(t),f.info("Function.prototype.call hook新增劫持"),this.$data.function_call.length>1)return;const e=this;let n=_.Function.prototype.call;_.Function.prototype.call=function(...i){let o=i[0],l=i.slice(1),a=this;for(let r=0;r<e.$data.function_call.length;r++){let u=e.$data.function_call[r];if(typeof u.paramsHandler=="function"){let c=u.paramsHandler(a,o,l);if(c!=null){if(c.args&&(i[0]=c.args.thisArg,i.splice(1,l.length,...c.args.argArray),a=c.args.fn),c.preventDefault)return "result"in c?c.result:void 0;break}}}let s=n.apply(a,i);for(let r=0;r<e.$data.function_call.length;r++){let u=e.$data.function_call[r];typeof u.returnsHandler=="function"&&(s=u.returnsHandler(a,i[0],i[1],s).result);}return s};},defineProperty(t){if(this.$data.defineProperty.push(t),f.info("Object.defineProperty hook新增劫持"),this.$data.defineProperty.length>1)return;const e=this;let n=_.Object.defineProperty;_.Object.defineProperty=function(...i){let o=i[0],l=i[1],a=i[2];for(let s=0;s<e.$data.defineProperty.length;s++){const r=e.$data.defineProperty[s],u=r(o,l,a);if(u!=null){i[0]=u.target,i[1]=u.key,i[2]=u.attributes;break}}return Reflect.apply(n,this,i)};},window_webpack(t="webpackJsonp",e,n){let i;_.Object.defineProperty(_,t,{get(){return i},set(o){f.success("成功劫持webpack，当前webpack名："+t),i=o;const l=i.push;i.push=function(...a){let s=a[0][0];return (e==s||Array.isArray(e)&&Array.isArray(s)&&JSON.stringify(e)===JSON.stringify(s))&&Object.keys(a[0][1]).forEach(r=>{let u=a[0][1][r];a[0][1][r]=function(...c){let p=u.call(this,...c);return c[0]=n(c[0]),p};}),Reflect.apply(l,this,a)};}});}},xe={webpackChunkranchi(){let t;Object.defineProperty(_,"webpackChunkranchi",{get(){return t},set(n){t=n;const i=t.push;t.push=function(...o){return o[0][0],typeof o[0][1]=="object"&&Object.keys(o[0][1]).forEach((l,a)=>{if(typeof o[0][1][l]=="function"&&o[0][1][l].toString().startsWith("function(e,n,t){t.d(n,{Z:function(){return y}});")&&o[0][1][l].toString().includes("jumpToApp")&&y.getValue("little-red-book-hijack-webpack-scheme")){let s=o[0][1][l];o[0][1][l]=function(...r){f.success(["成功劫持scheme唤醒",r]);let u=r[2].d;return r[2].d=function(...c){if(c.length===2&&typeof c[1]?.Z=="function"){let p=c[1].Z;p.toString()==="function(){return y}"&&(c[1].Z=function(...d){let g=p.call(this,...d);return typeof g=="function"&&g.toString().includes("jumpToApp")?function(){return {jumpToApp(x){if(f.success(["拦截唤醒",x]),x.deeplink?.startsWith("xhsdiscover://user/")){let w=x.deeplink.replace(/^xhsdiscover:\/\/user\//,""),k=window.location.origin+`/user/profile/${w}`;window.open(k,"_blank");}}}}:g});}return u.call(this,...c)},s.call(this,...r)};}}),i.call(this,...o)};}});},hookVue(){const t=_.Object.assign;let e=false;_.Object.assign=function(...n){if(n.length==2&&n[1]?.render!==void 0&&!e){let i=n[1];const o=i.render;let l=false;i.render=function(...a){return l||(a[5]._.appContext.mixins.push({mounted(){this.$el.__Ivue__=this;}}),l=true),o.call(this,...a)},e=true;}return Reflect.apply(t,this,n)};},setTimeout(){Se.setTimeout(t=>{let e=t.toString();if(e==="function(){r()}"||e==="function(){u()}")return f.success(["成功劫持setTimeout唤醒",t]),false});},call(){Se.function_call({paramsHandler(t,e,n){if(t.toString(),n[0]?.label===0&&Array.isArray(n[0]?.ops)&&Array.isArray(n[0]?.trys)&&typeof n[0]?.sent=="function")return f.success(["成功劫持call唤醒",t,e,n]),{args:{fn:t,thisArg:e,argArray:[]}};if(typeof e=="string"&&e.startsWith("https://oia.xiaohongshu.com/oia"))return f.success(["成功劫持call跳转下载页面",t,e,n]),{preventDefault:true}}});}},le={allowCopy(){return f.info("允许复制"),B(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `)},blockBottomSearchFind(){return f.info("屏蔽底部搜索发现"),O.addBlockCSS(".hotlist-container",".safe-area-bottom.margin-placeholder")},blockBottomToorBar(){return f.info("屏蔽底部工具栏"),O.addBlockCSS(".engage-bar-container")},blockAuthorHotNote(){return f.info("屏蔽视频笔记的作者热门笔记"),O.addBlockCSS(".user-notes-box.user-notes-clo-layout-container")},blockHotRecommendNote(){return f.info("屏蔽视频笔记的热门推荐"),O.addBlockCSS("#new-note-view-container .recommend-box")}},Ze={optimizeVideoNoteDesc(){return f.info("优化视频笔记的描述（可滚动）"),B(`
    .author-box .author-desc-wrapper .author-desc{
      max-height: 70px !important;
      overflow: auto !important;
    }
    /* 展开按钮 */
    .author-box .author-desc-wrapper .author-desc .author-desc-trigger{
      display: none !important;
    }`)}},Qe=`/* 底部的App内打开 */\r
.bottom-button-box,\r
/* 顶部的打开看看 */\r
.nav-bar-box {\r
  display: none !important;\r
}\r
`,be={init(){B(Qe),(y.getValue("little-red-book-hijack-webpack-mask")||y.getValue("little-red-book-hijack-webpack-scheme"))&&(f.info("劫持webpack"),xe.setTimeout(),xe.call()),y.execMenuOnce("little-red-book-shieldBottomSearchFind",()=>le.blockBottomSearchFind()),y.execMenuOnce("little-red-book-shieldBottomToorBar",()=>le.blockBottomToorBar()),y.execMenuOnce("little-red-book-optimizeImageBrowsing",()=>{be.optimizeImageBrowsing();}),y.execMenuOnce("little-red-book-optimizeVideoNoteDesc",()=>Ze.optimizeVideoNoteDesc()),y.execMenuOnce("little-red-book-shieldAuthorHotNote",()=>le.blockAuthorHotNote()),y.execMenuOnce("little-red-book-shieldHotRecommendNote",()=>le.blockHotRecommendNote()),h.ready(function(){y.execMenu("little-red-book-optimizeCommentBrowsing",()=>{be.optimizeCommentBrowsing();});});},optimizeCommentBrowsing(){f.info("优化评论浏览");const t={QmsgLoading:void 0,scrollFunc:void 0,noteId:"",xsec_token:"",noteData:{},commentData:{},emojiMap:{},emojiNameList:[],currentCursor:void 0,commentContainer:void 0,init(){this.emojiMap=m.toJSON(_.localStorage.getItem("redmoji"))?.redmojiMap||{},this.emojiNameList=Object.keys(this.emojiMap),this.scrollFunc=new m.LockFunction(this.scrollEvent,this);const e=_.__INITIAL_STATE__,n=e.noteData??e.data.noteData;t.noteData=n.data.noteData,t.commentData=n.data.commentData,t.noteId=t.noteData.noteId,t.xsec_token=e.noteData.routeQuery.xsec_token,f.info(["笔记数据",t.noteData]),f.info(["评论数据",t.commentData]);},getCommentHTML(e){return `
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
								<span class="little-red-book-comments-create-time">${m.formatTime(e.create_time)}</span>
								<span class="little-red-book-comments-location">${e.ip_location}</span>
							</div>
						</div>
					</div>
				</div>
            `},getCommentElement(e){let n=e.content,i=e.create_time||parseInt(e.time),o=e.id,l=e.ip_location||e.ipLocation,a=e.sub_comment_has_more,s=parseInt(e.sub_comment_count)||0,r=e.sub_comment_cursor,u=e.sub_comments||e.subComments,c=(e.user_info||e.user).image,p=(e.user_info||e.user).nickname,d=e?.user_info?.user_id||e?.user?.userId;n=t.converContent(n);let g=h.createElement("div",{className:"little-red-book-comments-item",innerHTML:`
					<div class="little-red-book-comments-parent">
					${t.getCommentHTML({user_id:d,user_avatar:c,user_nickname:p,content:n,create_time:i,ip_location:l})}
					</div>
					`});if(a&&Array.isArray(u)&&(u.forEach(x=>{let w=h.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:t.getCommentHTML({user_id:x.user_info.user_id,user_avatar:x.user_info.image,user_nickname:x.user_info.nickname,content:t.converContent(x.content),create_time:x.create_time,ip_location:x.ip_location})});g.appendChild(w);}),s!==u.length)){let x=s-u.length,w=r,k=h.createElement("div",{className:"little-red-book-comments-reply-show-more",innerText:`展开 ${x} 条回复`});async function I(){let L=b.loading("加载中，请稍后..."),v=await Ve.getLzlPageInfo(t.noteId,o,10,w,void 0);L.close(),v&&(w=v.cursor,x=x-v.comments.length,k.innerText=`展开 ${x} 条回复`,v.comments.forEach(V=>{let T=h.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:t.getCommentHTML({user_id:V.user_info.user_id,user_avatar:V.user_info.image,user_nickname:V.user_info.nickname,content:t.converContent(V.content),create_time:V.create_time,ip_location:V.ip_location})});h.before(k,T);}),v.has_more||(h.off(k,"click",void 0,I,{capture:true}),k.remove()));}h.on(k,"click",void 0,I,{capture:true}),g.appendChild(k);}return g},converContent(e){return t.emojiNameList.forEach(n=>{e.includes(n)&&(e=e.replaceAll(n,`<img class="little-red-book-note-content-emoji" crossorigin="anonymous" src="${t.emojiMap[n]}">`));}),e},async scrollEvent(){if(!m.isNearBottom(window.innerHeight/3))return;this.QmsgLoading==null&&(this.QmsgLoading=b.loading("加载中，请稍后..."));let e=await Ve.getPageInfo(t.noteId,t.currentCursor,t.xsec_token);if(this.QmsgLoading&&(this.QmsgLoading.close(),this.QmsgLoading=void 0),!!e&&(t.currentCursor=e.cursor,e.comments.forEach(n=>{let i=t.getCommentElement(n);t.commentContainer.appendChild(i);}),!e.has_more)){b.info("已加载全部评论"),t.removeScrollEventListener();return}},addSrollEventListener(){f.success("添加滚动监听事件"),h.on(document,"scroll",void 0,t.scrollFunc.run,{capture:true,once:false,passive:true});},removeScrollEventListener(){f.success("移除滚动监听事件"),h.off(document,"scroll",void 0,t.scrollFunc.run,{capture:true});}};m.waitNode(".narmal-note-container").then(async()=>{f.info("优化评论浏览-笔记元素出现");let e=document.querySelector(".note-view-container"),n=h.createElement("div",{className:"little-red-book-comments-container",innerHTML:`
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
          `});t.commentContainer=n,t.init();let i=h.createElement("div",{className:"little-red-book-comments-total",innerHTML:`共 ${t.commentData.commentCount??t.noteData.comments} 条评论`});n.appendChild(i),t.commentData&&t.commentData.comments&&(f.info("从固定的评论中加载"),t.commentData.comments.forEach(o=>{let l=t.getCommentElement(o);n.appendChild(l);})),h.append(e,n);});},optimizeImageBrowsing(){f.info("优化图片浏览"),O.setGMResourceCSS(ze.Viewer);function t(e=[],n=0){let i="";e.forEach(a=>{i+=`<li><img data-src="${a}" loading="lazy"></li>`;});let o=h.createElement("ul",{innerHTML:i}),l=new Je(o,{inline:false,url:"data-src",zIndex:m.getMaxZIndex()+100,hidden:()=>{l.destroy();}});n=n<0?0:n,l.view(n),l.zoomTo(1),l.show();}h.on(document,"click",".note-image-box",function(e){let n=e.target,i=n.querySelector("img"),o=[],l=[];n.closest(".onix-carousel-item")?l=Array.from(n.closest(".onix-carousel-item").parentElement.querySelectorAll("img")):l=[i];let a=l.findIndex(s=>s==i);l.forEach(s=>{let r=s.getAttribute("src")||s.getAttribute("data-src")||s.getAttribute("alt");r&&o.push(r);}),f.success(["点击浏览图片👉",o[a]]),t(o,a);});}},Ne={init(){h.ready(()=>{y.execMenuOnce("little-red-book-repariClick",()=>{Ne.repariClick();});});},repariClick(){f.info("修复正确的点击跳转"),h.on(document,"click",void 0,function(t){let e=t.target;if(f.info(["点击的按钮元素",e]),e?.className?.includes("follow-btn"))f.success("点击-关注按钮");else if(e?.closest("button.reds-button.message-btn"))f.success("点击-私信按钮");else if(e?.closest("div.reds-tab-item"))f.success("点击-笔记/收藏按钮");else if(e?.closest("section.reds-note-card")){f.success("点击-笔记卡片");let n=e?.closest("section.reds-note-card");n.getAttribute("id")||m.toJSON(n.getAttribute("impression"))?.noteTarget?.value?.noteId?window.open(`https://www.xiaohongshu.com/discovery/item/${e?.closest("section.reds-note-card")?.getAttribute("id")}`,"_blank"):b.error("获取笔记note_id失败");}return m.preventEvent(t),false},{capture:true});}},we={init(){y.execMenuOnce("little-red-book-shieldAd",()=>(f.info("注入默认屏蔽CSS"),B(We))),y.execMenuOnce("little-red-book-allowCopy",()=>we.allowCopy()),ge.isArticle()?be.init():ge.isUserHome()&&Ne.init();},allowCopy(){return f.info("允许复制文字"),B(`
        *{
            -webkit-user-select: unset !important;
            user-select: unset !important;
        }
        `)}},Ye="",et={init(){y.execMenuOnce("pc-xhs-shieldAd",()=>B(Ye)),y.execMenuOnce("pc-xhs-shield-select-text-search-position",()=>this.blockSelectTextVisibleSearchPosition()),y.execMenuOnce("pc-xhs-shield-topToolbar",()=>this.blockTopToolbar()),h.ready(()=>{y.execMenuOnce("pc-xhs-shield-login-dialog",()=>{this.blockLoginContainer();});});},blockLoginContainer(){f.info("添加屏蔽登录弹窗CSS，监听登录弹窗出现"),O.addBlockCSS(".login-container"),m.mutationObserver(document.body,{config:{subtree:true,childList:true},callback:()=>{let t=document.querySelector(".login-container .icon-btn-wrapper");t&&(t.click(),f.success("登录弹窗出现，关闭"));}});},blockSelectTextVisibleSearchPosition(){return f.info("屏蔽选择文字弹出的搜索提示"),O.addBlockCSS(".search-position")},blockTopToolbar(){return f.info("【屏蔽】顶部工具栏"),[O.addBlockCSS("#headerContainer",".header-container"),B(`
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
			`)]}},tt={getSearchUrl(t){return `https://www.xiaohongshu.com/search_result?keyword=${t}&source=web_explore_feed`}},re={getVue(t){if(t!=null)return t.__vue__||t.__Ivue__||t.__IVue__},getVue3(t){if(t!=null)return t.__vueParentComponent},waitVuePropToSet(t,e){Array.isArray(e)||(e=[e]);function n(){let i=null;return typeof t=="string"?i=h.selector(t):typeof t=="function"?i=t():t instanceof HTMLElement&&(i=t),i}e.forEach(i=>{typeof i.msg=="string"&&f.info(i.msg);function o(){let l=n();if(l==null)return {status:false,isTimeout:true,inst:null,$el:l};let a=re.getVue(l);if(a==null)return {status:false,isTimeout:false,inst:null,$el:l};let s=i.check(a,l);return s=!!s,{status:s,isTimeout:false,inst:a,$el:l}}m.waitVueByInterval(()=>n(),()=>o().status,250,1e4).then(l=>{let a=o();if(a.status){let s=a.inst;i.set(s,a.$el);}else typeof i.failWait=="function"&&i.failWait(a.isTimeout);});});},watchVuePropChange(t,e,n,i,o){let l=m.assign({immediate:true,deep:false},i||{});return new Promise(a=>{re.waitVuePropToSet(t,{check(s){return typeof s?.$watch=="function"},set(s){let r=null;typeof e=="function"?r=s.$watch(()=>e(s),(u,c)=>{n(s,u,c);},l):r=s.$watch(e,(u,c)=>{n(s,u,c);},l),a(r);},failWait:o});})},goToUrl(t,e,n=false){if(t==null){b.error("跳转Url: $vueNode为空"),f.error("跳转Url: $vueNode为空："+e);return}let i=re.getVue(t);if(i==null){b.error("获取vue属性失败",{consoleLogContent:true});return}let o=i.$router,l=true;if(f.info("即将跳转URL："+e),n&&(l=false),l)window.open(e,"_blank");else {if(e.startsWith("http")||e.startsWith("//")){e.startsWith("//")&&(e=window.location.protocol+e);let a=new URL(e);if(a.origin===window.location.origin)e=a.pathname+a.search+a.hash;else {f.info("不同域名，直接本页打开，不用Router："+e),window.location.href=e;return}}f.info("$router push跳转Url："+e),o.push(e);}},hookGestureReturnByVueRouter(t){function e(){f.success("触发popstate事件"),i(true);}function n(){f.success("监听地址改变"),t.vueInst.$router.history.push(t.hash),h.on(_,"popstate",e);}async function i(o=false){if(h.off(_,"popstate",e),!t.callback(o))for(;;)if(t.vueInst.$router.history.current.hash===t.hash)f.info("后退！"),t.vueInst.$router.back(),await m.sleep(250);else return}return n(),{resumeBack:i}}},Ae={init(){(y.getValue("pc-xhs-search-open-blank-btn")||y.getValue("pc-xhs-search-open-blank-keyboard-enter"))&&this.optimizationSearch(),y.execMenuOnce("pc-xhs-article-fullWidth",()=>this.fullWidth());},optimizationSearch(){function t(e,n=true){{let i=document.querySelector("#search-input");if(i){let o=i.value,l=tt.getSearchUrl(o);f.info("搜索内容: "+o),window.open(l,n?"_blank":"_self");}else b.error("未找到搜索的输入框");}}m.waitNode("#search-input").then(e=>{e.placeholder="搜索小红书",y.execMenu("pc-xhs-search-open-blank-keyboard-enter",()=>{h.listenKeyboard(e,"keydown",(n,i,o,l)=>{n==="Enter"&&!o.length&&(f.info("按下回车键"),m.preventEvent(l),e.blur(),t());});});}),m.waitNode("#search-input + .input-button .search-icon").then(e=>{y.execMenu("pc-xhs-search-open-blank-btn",()=>{h.on(e,"click",n=>{m.preventEvent(n),f.info("点击搜索按钮"),t();},{capture:true});});});},fullWidth(){f.info("笔记宽屏");let t=y.getValue("pc-xhs-article-fullWidth-widthSize",90);return B(`
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
		`)},transformPublishTime(){f.info("转换笔记发布时间");let t=new m.LockFunction(()=>{Xe(".note-content:not([data-edit-date])").forEach(e=>{let n=re.getVue(e);if(!n)return;let i=n?._?.props?.note;if(i==null)return;let o=i.time,l=i.lastUpdateTime,a=i.ipLocation;if(typeof o=="number"){let s=[];s.push(`发布：${m.formatTime(o)}`),typeof l=="number"&&s.push(`修改：${m.formatTime(l)}`),typeof a=="string"&&m.isNotNull(a)&&s.push(a);let r=e.querySelector(".date");h.html(r,s.join("<br>")),e.setAttribute("data-edit-date","");}});});m.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{t.run();}});}},te={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new j.Dictionary),this.__storeApiFn}},getStorageApi(t){if(this.hasStorageApi(t))return this.$data.storeApiValue.get(t)},hasStorageApi(t){return this.$data.storeApiValue.has(t)},setStorageApi(t,e){this.$data.storeApiValue.set(t,e);},initComponentsStorageApi(t,e,n){let i;this.hasStorageApi(t)?i=this.getStorageApi(t):i=n,this.setComponentsStorageApiProperty(e,i);},setComponentsStorageApiProperty(t,e){Reflect.set(t.props,M,e);}},nt=function(t,e,n,i,o,l="",a,s,r,u){let c={text:t,type:"input",isNumber:false,isPassword:false,attributes:{},props:{},description:i,afterAddToUListCallBack:r,getValue(){return this.props[M].get(e,n)},callback(p,d,g){this.props[M].set(e,d);},placeholder:l};return Reflect.set(c.attributes,U,e),Reflect.set(c.attributes,q,n),te.initComponentsStorageApi("input",c,{get(p,d){return y.getValue(p,d)},set(p,d){y.setValue(p,d);}}),c},A=function(t,e,n,i,o,l,a,s){let r={text:t,type:"switch",description:o,disabled:a,attributes:{},props:{},getValue(){return this.props[M].get(e,n)},callback(u,c){let p=!!c;f.success(`${p?"开启":"关闭"} ${t}`),this.props[M].set(e,p);},afterAddToUListCallBack:l};return Reflect.set(r.attributes,U,e),Reflect.set(r.attributes,q,n),te.initComponentsStorageApi("switch",r,{get(u,c){return y.getValue(u,c)},set(u,c){y.setValue(u,c);}}),r},Re=function(t,e,n,i,o,l,a="请至少选择一个选项",s,r){let u=[];typeof i=="function"?u=i():u=i;let c={text:t,type:"select-multiple",description:l,placeholder:a,attributes:{},props:{},getValue(){return this.props[M].get(e,n)},selectConfirmDialogDetails:s,callback(p){let d=this.props[M],g=[];p.forEach(x=>{g.push(x.value);}),f.info("多选-选择：",g),d.set(e,g);},data:u};return Reflect.set(c.attributes,U,e),Reflect.set(c.attributes,q,n),te.initComponentsStorageApi("select-multiple",c,{get(p,d){return y.getValue(p,d)},set(p,d){y.setValue(p,d);}}),c},Ee=function(t,e,n,i,o,l="",a,s){let r={text:t,type:"textarea",attributes:{},props:{},description:i,placeholder:l,disabled:a,getValue(){let c=this.props[M].get(e,n);return Array.isArray(c)?c.join(`
`):c},callback(u,c){this.props[M].set(e,c);}};return Reflect.set(r.attributes,U,e),Reflect.set(r.attributes,q,n),te.initComponentsStorageApi("switch",r,{get(u,c){return y.getValue(u,c)},set(u,c){y.setValue(u,c);}}),r};class it{option;constructor(e){this.option=e;}getAllRule(){return pe(this.option.STORAGE_API_KEY,[])}setAllRule(e){de(this.option.STORAGE_API_KEY,e);}clearAllRule(){this.setAllRule([]);}getRule(e){let n=this.getAllRule(),i=n.findIndex(o=>o.uuid===e);if(i!==-1)return n[i]}setRule(e){let n=this.getAllRule(),i=n.findIndex(l=>l.uuid===e.uuid),o=false;return i!==-1&&(n[i]=e,this.setAllRule(n),o=true),o}addRule(e){let n=this.getAllRule(),i=n.findIndex(l=>l.uuid===e.uuid),o=false;return i!==-1||(n.push(e),this.setAllRule(n),o=true),o}updateRule(e){let n=this.getAllRule(),i=n.findIndex(o=>o.uuid===e.uuid);i!==-1?n[i]=e:n.push(e),this.setAllRule(n);}deleteRule(e){let n=this.getAllRule(),i=typeof e=="string"?e:e.uuid,o=n.findIndex(l=>l.uuid===i);return o!==-1?(n.splice(o,1),this.setAllRule(n),true):false}importRules(e){let n=D.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(r,u){r.close();}}},mask:{enable:true},drag:true,width:z.info.width,height:z.info.height,style:`
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),i=n.$shadowRoot.querySelector(".btn-control[data-mode='local']"),o=n.$shadowRoot.querySelector(".btn-control[data-mode='network']"),l=n.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),a=async r=>{let u=this.getAllRule(),c=[],p=[],d=false;for(let x=0;x<r.length;x++){const w=r[x];let k=u.findIndex(I=>I.uuid===w.uuid);k!==-1?p.push({index:k,data:w}):c.push(w);}if(p.length&&await new Promise(w=>{D.alert({title:{text:"覆盖规则",position:"center"},content:{text:`存在相同的uuid的规则 ${p.length}条，是否进行覆盖？`,html:true},btn:{close:{callback(k,I){k.close(),w(false);}},ok:{text:"覆盖",callback(k,I){k.close(),w(true);}}},width:z.info.width,height:z.info.height,mask:{enable:true},drag:true});})){for(const w of p)u[w.index]=w.data;d=true;}c.length&&(u=u.concat(c)),this.setAllRule(u);let g=`共 ${r.length} 条规则，新增 ${c.length} 条，覆盖 ${d?p.length:0} 条`;b.success(g),e?.();},s=r=>new Promise(async u=>{let c=m.toJSON(r);if(!Array.isArray(c)){f.error(c),b.error("导入失败，格式不符合（不是数组）",{consoleLogContent:true}),u(false);return}if(!c.length){b.error("导入失败，解析出的数据为空",{consoleLogContent:true}),u(false);return}await a(c),u(true);});h.on(i,"click",r=>{m.preventEvent(r),n.close();let u=h.createElement("input",{type:"file",accept:".json"});h.on(u,["propertychange","input"],c=>{if(!u.files?.length)return;let p=u.files[0],d=new FileReader;d.onload=()=>{s(d.result);},d.readAsText(p,"UTF-8");}),u.click();}),h.on(o,"click",r=>{m.preventEvent(r),n.close();let u=D.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(d,g){d.close();}},ok:{text:"导入",callback:async(d,g)=>{let x=d.text;if(m.isNull(x)){b.error("请填入完整的url");return}let w=b.loading("正在获取配置..."),k=await Y.get(x,{allowInterceptConfig:false});if(w.close(),!k.status){f.error(k),b.error("获取配置失败",{consoleLogContent:true});return}await s(k.data.responseText)&&d.close();}},cancel:{enable:false}},mask:{enable:true},drag:true,width:z.info.width,height:"auto"}),c=u.$shadowRoot.querySelector("input"),p=u.$shadowRoot.querySelector(".pops-prompt-btn-ok");h.on(c,["input","propertychange"],d=>{h.val(c)===""?h.attr(p,"disabled","true"):h.removeAttr(p,"disabled");}),h.listenKeyboard(c,"keydown",(d,g,x)=>{d==="Enter"&&x.length===0&&h.val(c)!==""&&m.dispatchEvent(p,"click");}),m.dispatchEvent(c,"input");}),h.on(l,"click",async r=>{m.preventEvent(r),n.close();let u=await m.getClipboardInfo();if(u.error!=null){b.error(u.error.toString());return}if(u.content.trim()===""){b.warning("获取到的剪贴板内容为空");return}await s(u.content);});}exportRules(e="rule.json"){let n=this.getAllRule(),i=new Blob([JSON.stringify(n,null,4)]),o=globalThis.URL.createObjectURL(i),l=document.createElement("a");l.href=o,l.download=e,l.click(),setTimeout(()=>{globalThis.URL.revokeObjectURL(o);},1500);}}class ot{option;constructor(e){this.option=e;}async showView(){let e=D.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist"></ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:true},btn:m.assign({ok:{callback:async()=>{await l();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
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
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),n=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");let i=e.$shadowRoot.querySelector(".rule-form-ulist"),o=await this.option.getView(await this.option.data());i.appendChild(o);const l=async()=>{(await this.option.onsubmit(n,await this.option.data())).success&&(e.close(),await this.option.dialogCloseCallBack(true));};}}class lt{option;constructor(e){this.option=e;}showView(){let e=D.alert({title:{text:this.option.title,position:"center"},content:{text:`
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
            `}),n=e.$shadowRoot.querySelector(".filter-container"),i=document.createDocumentFragment();this.option.filterOption.forEach(o=>{let l=h.createElement("button",{innerText:o.name},{type:"button"}),a=async()=>{(await this.option.getAllRuleInfo()).forEach(async r=>{await o.filterCallBack(r.data)?h.show(r.$el,false):h.hide(r.$el,false);}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),e.close();};h.on(l,"click",async s=>{m.preventEvent(s),!(typeof o.callback=="function"&&!await o.callback(s,a))&&await a();}),i.appendChild(l);}),n.appendChild(i);}}class rt{option;constructor(e){this.option=e;}async showView(e){let n=D.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:true},btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async l=>{this.showEditView(false,await this.option.getAddData(),n.$shadowRoot);}},close:{enable:true,callback(l){n.close();}},cancel:{enable:this.option?.bottomControls?.filter?.enable||false,type:"default",text:"过滤",callback:async(l,a)=>{if(typeof this.option?.bottomControls?.filter?.callback=="function"){let u=await this.option.bottomControls.filter.callback();if(typeof u=="boolean"&&!u)return}let s=()=>Array.from(n.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),r=a.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");if(h.text(r).includes("取消")){let u=await this.option?.bottomControls?.filter?.cancelFilterCallback?.({$button:r,getAllRuleElement:s});if(typeof u=="boolean"&&!u)return;s().forEach(c=>{h.show(c,false);}),h.text(r,"过滤");}else new lt({title:this.option.bottomControls?.filter?.title??"过滤规则",filterOption:this.option.bottomControls?.filter?.option||[],execFilterCallBack:async()=>{h.text(r,"取消过滤"),await this.option.bottomControls?.filter?.execFilterCallBack?.();},getAllRuleInfo:()=>s().map(c=>({data:this.parseRuleItemElement(c).data,$el:c}))}).showView();}},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:l=>{let a=D.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async s=>{if(f.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){b.error("清理失败");return}else b.success("清理成功");await this.updateDeleteAllBtnText(n.$shadowRoot),this.clearContent(n.$shadowRoot),a.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
            ${D.config.cssText.panelCSS}
            
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
            `}),i=await this.option.data(),o=false;for(let l=0;l<i.length;l++){let a=i[l],s=await this.appendRuleItemElement(n.$shadowRoot,a),r=true;typeof e=="function"?r=e(a):typeof e=="number"&&!isNaN(e)&&(r=await this.option.bottomControls?.filter?.option[e]?.filterCallBack(a)??r),r||(o=true,h.hide(s,false));}if(o){let l=n.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");h.text(l,"取消过滤");}}showEditView(e,n,i,o,l,a){let s=async u=>{if(u){if(typeof a=="function"){let c=await this.option.getData(n);a(c);}}else if(e||await this.option.deleteData(n),typeof l=="function"){let c=await this.option.getData(n);l(c);}};new ot({title:e?"编辑":"添加",data:()=>n,dialogCloseCallBack:s,getView:async u=>await this.option.itemControls.edit.getView(u,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async(u,c)=>{u.close(),await s(false);}},close:{callback:async(u,c)=>{u.close(),await s(false);}}},onsubmit:async(u,c)=>{let p=await this.option.itemControls.edit.onsubmit(u,e,c);return p.success?e?(b.success("修改成功"),i&&await this.updateRuleItemElement(p.data,o,i)):i&&await this.appendRuleItemElement(i,p.data):e&&f.error("修改失败"),p},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(e){let n=e.querySelector(".rule-view-container"),i=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:n,$deleteBtn:i}}parseRuleItemElement(e){let n=e.querySelector(".rule-controls-enable"),i=n.querySelector(".pops-panel-switch"),o=n.querySelector(".pops-panel-switch__input"),l=n.querySelector(".pops-panel-switch__core"),a=e.querySelector(".rule-controls-edit"),s=e.querySelector(".rule-controls-delete");return {$enable:n,$enableSwitch:i,$enableSwitchInput:o,$enableSwitchCore:l,$edit:a,$delete:s,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,n){let i=await this.option.getDataItemName(e),o=h.createElement("div",{className:"rule-item",innerHTML:`
			<div class="rule-name">${i}</div>
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
			`});Reflect.set(o,"data-rule",e);let l="pops-panel-switch-is-checked";const{$enable:a,$enableSwitch:s,$enableSwitchCore:r,$enableSwitchInput:u,$delete:c,$edit:p}=this.parseRuleItemElement(o);return this.option.itemControls.enable.enable?(h.on(r,"click",async d=>{let g=false;s.classList.contains(l)?(s.classList.remove(l),g=false):(s.classList.add(l),g=true),u.checked=g,await this.option.itemControls.enable.callback(e,g);}),await this.option.itemControls.enable.getEnable(e)&&s.classList.add(l)):a.remove(),this.option.itemControls.edit.enable?h.on(p,"click",d=>{m.preventEvent(d),this.showEditView(true,e,n,o,g=>{e=null,e=g;});}):p.remove(),this.option.itemControls.delete.enable?h.on(c,"click",d=>{m.preventEvent(d);let g=D.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async x=>{f.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(b.success("成功删除该数据"),o.remove(),await this.updateDeleteAllBtnText(n),g.close()):b.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):c.remove(),o}async appendRuleItemElement(e,n){let{$container:i}=this.parseViewElement(e),o=[],l=Array.isArray(n)?n:[n];for(let a=0;a<l.length;a++){let s=l[a],r=await this.createRuleItemElement(s,e);i.appendChild(r),o.push(r);}return await this.updateDeleteAllBtnText(e),o}async updateRuleContaienrElement(e){this.clearContent(e);const{$container:n}=this.parseViewElement(e);let i=await this.option.data();await this.appendRuleItemElement(e,i),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,n,i){let o=await this.createRuleItemElement(e,i);n.after(o),n.remove();}clearContent(e){const{$container:n}=this.parseViewElement(e);h.html(n,"");}setDeleteBtnText(e,n,i=false){const{$deleteBtn:o}=this.parseViewElement(e);i?h.html(o,n):h.text(o,n);}async updateDeleteAllBtnText(e){let n=await this.option.data();this.setDeleteBtnText(e,`清空所有(${n.length})`);}}const at={__ajaxHooker:null,get ajaxHooker(){return this.__ajaxHooker==null&&(this.__ajaxHooker=m.ajaxHooker()),this.__ajaxHooker}};class st{parseInfoDictData(e,n=false){let i=e?.note_card,o=e.id,l=i.display_title,a=!!i?.interact_info?.liked,s=0,r=e?.note_card?.interact_info?.liked_count;typeof r=="string"&&(s=parseInt(r),isNaN(s)&&(s=0));let u=i?.user?.nick_name||i?.user?.nickname,c=i?.user?.user_id,p=i?.type==="video",d=i?.video?.capa?.duration||0;return {articleId:o,display_title:l,isLike:a,liked_count:s,nick_name:u,user_id:c,isVideo:p,videoDuration:d}}checkFilterWithRule(e){if(e.infoValue==null||e.ruleValue==null)return  false;if(typeof e.infoValue=="string"){if(e.infoValue.match(e.ruleValue))return  true}else if(typeof e.infoValue=="object"){if(Array.isArray(e.infoValue)&&e.infoValue.find(i=>typeof i=="string"&&e.ruleValue!=null?!!i.match(e.ruleValue):false))return  true}else if(typeof e.infoValue=="number"){if(typeof e.ruleValue=="string"){let n=e.ruleValue.trim(),i=n.match(/(\d+)/);if(!i)return f.warn("过滤器-解析比较大小的数字失败: ",e),false;let o=Number(i[1]);if(n.startsWith(">")){if(n.startsWith(">=")){if(e.infoValue>=o)return  true}else if(e.infoValue>o)return  true}else if(n.startsWith("<")){if(n.startsWith("<=")){if(e.infoValue<=o)return  true}else if(e.infoValue<o)return  true}else if(n.startsWith("=")){if(e.infoValue===o)return  true}else return f.warn("视频过滤器-未经允许的比较符号: ",e),false}}else if(typeof e.infoValue=="boolean"&&typeof e.ruleValue=="string"){let n=e.ruleValue.trim();return e.infoValue.toString()===n}return  false}checkInfoIsFilter(e,n){let i=this.parseInfoDictData(n),o=false,l=null;e:for(let a=0;a<e.length;a++){const s=e[a],r=Array.isArray(s.data.ruleName)?s.data.ruleName:[s.data.ruleName];for(let u=0;u<r.length;u++){const c=r[u];if(!Reflect.has(i,c))continue;let p=c,d=i[p],g={infoKey:p,infoValue:d,ruleKey:s.data.ruleName,ruleValue:s.data.ruleValue};if(o=this.checkFilterWithRule(g),o)if(Array.isArray(s.dynamicData)&&s.dynamicData.length){let x=[];for(let w=0;w<s.dynamicData.length;w++){const k=s.dynamicData[w];let I=k.ruleName,L=i[I],v={infoKey:I,infoValue:L,ruleKey:k.ruleName,ruleValue:k.ruleValue};x.push(v);let V=this.checkFilterWithRule(v);if(o=o&&V,!o)break}o&&f.success([`视频过滤器-多组 ==> ${s.name}`,i,g,x,n,s]);}else f.success([`视频过滤器 ==> ${s.name}`,i,g,n,s]);if(o){l=s;break e}}}return {isFilter:o,matchedFilterOption:l,transformInfo:i,info:n}}removeArticle(...e){if(e.length===1){let n=e[0];n!=null&&n instanceof Element&&n.remove();}else if(e.length===2){let n=e[0],i=e[1];if(typeof i=="number"){let o=n[i];o!=null&&o instanceof Element&&o.remove(),n.splice(i,1);}}}}const ae={$key:{ENABLE_KEY:"shieldVideo-exec-network-enable"},$data:{isFilterAwemeInfoList:new j.Dictionary,articleInfoMap:new j.Dictionary,__videoFilterRuleStorage:null,get videoFilterRuleStorage(){return this.__videoFilterRuleStorage==null&&(this.__videoFilterRuleStorage=new it({STORAGE_API_KEY:"xhs-article-filter-rule"})),this.__videoFilterRuleStorage},get isReverse(){return y.getValue("xhs-article-filter-only-show-filtered-video")}},init(){this.execFilter();},execFilter(){y.execMenuOnce(this.$key.ENABLE_KEY,async()=>{f.info("执行笔记过滤器");let t=new st,e=o=>{if(this.$data.isReverse&&(o.isFilter=!o.isFilter,typeof o.transformInfo.articleId=="string"&&o.matchedFilterOption)){let l=this.$data.isFilterAwemeInfoList.get(o.transformInfo.articleId)||[];l.push(o.matchedFilterOption),this.$data.isFilterAwemeInfoList.set(o.transformInfo.articleId,l);}typeof o.transformInfo.articleId=="string"&&this.$data.articleInfoMap.set(o.transformInfo.articleId,{articleInfo:o.info,transformArticleInfo:o.transformInfo});},n=o=>{if(!y.getValue(this.$key.ENABLE_KEY))return [];let l=this.$data.videoFilterRuleStorage.getAllRule();if(!l.length)return [];let a=Array.isArray(o)?o:[o];return l.filter(r=>r.enable&&(r.data.scope.includes("all")||Array.from(a).findIndex(u=>r.data.scope.includes(u))!==-1))},i=(o,l)=>{l.response=a=>{let s=n(o);if(!s.length)return;let r=m.toJSON(a.responseText),u=r?.data?.items;if(Array.isArray(u)){for(let c=0;c<u.length;c++){let p=u[c]||{},d=t.checkInfoIsFilter(s,p);e(d),d.isFilter&&t.removeArticle(u,c--);}a.responseText=JSON.stringify(r);}};};at.ajaxHooker.hook(o=>{let l=O.fixUrl(o.url);new URL(l).pathname.startsWith("/api/sns/web/v1/homefeed")&&i("xhr-explore",o);});});},getTemplateData(){return {uuid:m.generateUUID(),enable:true,name:"",data:{scope:[],ruleName:"display_title",ruleValue:"",remarks:""},dynamicData:[]}},showView(){this.getRuleViewInstance().showView();},getRuleViewInstance(){const t=this;let e=D.config.PanelHandlerComponents();function n(o){return {get(l,a){return o[l]??a},set(l,a){o[l]=a;}}}return new rt({title:"笔记过滤器",data:()=>this.$data.videoFilterRuleStorage.getAllRule(),getAddData:()=>this.getTemplateData(),getDataItemName:o=>o.name,updateData:o=>this.$data.videoFilterRuleStorage.setRule(o),deleteData:o=>this.$data.videoFilterRuleStorage.deleteRule(o),getData:o=>this.$data.videoFilterRuleStorage.getAllRule().find(s=>s.uuid===o.uuid)??o,itemControls:{enable:{enable:true,getEnable(o){return o.enable},callback:(o,l)=>{o.enable=l,this.$data.videoFilterRuleStorage.setRule(o);}},edit:{enable:true,getView:(o,l)=>{let a=document.createDocumentFragment();l||(o=this.getTemplateData());let s=A("启用","enable",true);Reflect.set(s.props,M,n(o));let r=e.createSectionContainerItem_switch(s),u=nt("规则名称","name","","",void 0,"必填");Reflect.set(u.props,M,n(o));let c=e.createSectionContainerItem_input(u),p=Re("作用域","scope",[],[{text:"所有",value:"all"},{text:"发现",value:"xhr-explore"}].map(C=>({...C,value:C.value})),void 0,"选择需要在xxx上生效的作用域");Reflect.set(p.props,M,n(o.data));let d=e.createSectionContainerItem_select_multiple_new(p),g=["display_title","isLike","liked_count","nick_name","user_id","isVideo","videoDuration"],x=C=>{let S=Array.isArray(C.ruleName)?C.ruleName:[C.ruleName],$=Re("属性名","ruleName",S,g.map(F=>({text:F,value:F})),void 0,"选择需要的属性名 ");Reflect.set($.props,M,n(C));let E=e.createSectionContainerItem_select_multiple_new($),R=Ee("属性值","ruleValue","","如果是字符串，可正则，注意转义");Reflect.set(R.props,M,n(C));let N=e.createSectionContainerItem_textarea(R),P=Ee("备注","remarks","","");Reflect.set(P.props,M,n(C));let W=e.createSectionContainerItem_textarea(P);return {$ruleName:E,$ruleValue:N,$remarks:W}},w=h.createElement("div",{className:"rule-form-ulist-dynamic",innerHTML:`
							<div class="rule-form-ulist-dynamic__inner">

							</div>
							<div class="pops-panel-button pops-panel-button-no-icon">
								<button class="pops-panel-button_inner" type="default">
									<i class="pops-bottom-icon" is-loading="false"></i>
									<span class="pops-panel-button-text">添加额外属性</span>
								</button>
							</div>
							`}),k=w.querySelector(".rule-form-ulist-dynamic__inner"),I=w.querySelector(".pops-panel-button"),L=(C={ruleName:[],ruleValue:"",remarks:""})=>{let S=h.createElement("div",{className:"rule-form-ulist-dynamic__inner-container",innerHTML:`
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
								`}),$=S.querySelector(".dynamic-control-delete");h.on($,"click",W=>{if(m.preventEvent(W),S.remove(),Array.isArray(o.dynamicData)){let F=o.dynamicData.findIndex(oe=>oe==C);F!==-1&&o.dynamicData.splice(F,1);}});let E=S.querySelector(".dynamic-forms"),{$ruleName:R,$ruleValue:N,$remarks:P}=x(C);E.appendChild(R),E.appendChild(N),E.appendChild(P),k.appendChild(S);};if(h.on(I,"click",C=>{m.preventEvent(C),L();}),Array.isArray(o.dynamicData))for(let C=0;C<o.dynamicData.length;C++){const S=o.dynamicData[C];L(S);}let{$ruleName:v,$ruleValue:V,$remarks:T}=x(o.data);return a.append(r,c,d,v,V,T,w),a},onsubmit:(o,l,a)=>{let s=o.querySelectorAll(".rule-form-ulist > li"),r=this.getTemplateData();return l&&(r.uuid=a.uuid),s.forEach(u=>{let c=Reflect.get(u,"__formConfig__");if(!c)return;let p=Reflect.get(c,"attributes");if(!p)return;let d=Reflect.get(u,M),g=Reflect.get(p,U),x=Reflect.get(p,q),w=d.get(g,x);Reflect.has(r,g)?Reflect.set(r,g,w):Reflect.has(r.data,g)?Reflect.set(r.data,g,w):f.error(`${g}不在数据中`);}),o.querySelectorAll(".rule-form-ulist-dynamic__inner-container").forEach(u=>{let c={};u.querySelectorAll(".dynamic-forms > li").forEach(p=>{let d=Reflect.get(p,"__formConfig__");if(!d)return;let g=Reflect.get(d,"attributes");if(!g)return;let x=Reflect.get(p,M),w=Reflect.get(g,U),k=Reflect.get(g,q),I=x.get(w,k);Reflect.set(c,w,I);}),r.dynamicData.push(c);}),r.name.trim()===""?(b.error("规则名称不能为空"),{success:false,data:r}):r.data.scope.length===0?(b.error("请选择作用域"),{success:false,data:r}):r.data.ruleName.length===0?(b.error("请选择属性名"),{success:false,data:r}):r.data.ruleValue.trim()===""?(b.error("属性值不能为空"),{success:false,data:r}):l?{success:t.$data.videoFilterRuleStorage.setRule(r),data:r}:{success:t.$data.videoFilterRuleStorage.addRule(r),data:r}},style:`
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
                    `,width:()=>window.innerWidth>700?"700px":"88vw"},delete:{enable:true,deleteCallBack:o=>t.$data.videoFilterRuleStorage.deleteRule(o)}},bottomControls:{filter:{enable:true,option:[{name:"过滤-已启用",filterCallBack(o){return o.enable}},{name:"过滤-未启用",filterCallBack(o){return !o.enable}}]},clear:{enable:true,callback:()=>{t.$data.videoFilterRuleStorage.clearAllRule();}}}})}},se={init(){ae.init(),y.execMenuOnce("pc-xhs-hook-vue",()=>{xe.hookVue();}),y.execMenuOnce("pc-xhs-allowCopy",()=>{se.allowPCCopy();}),y.execMenuOnce("pc-xhs-open-blank-article",()=>{se.openBlankArticle();}),et.init(),y.execMenuOnce("pc-xhs-article-showPubsliushTime",()=>{Ae.transformPublishTime();}),ge.isArticle()&&(f.info("Router: 笔记页面"),Ae.init());},allowPCCopy(){f.success("允许复制文字"),h.on(_,"copy",void 0,function(t){m.preventEvent(t);let e=_.getSelection();return e?m.setClip(e.toString()):f.error("未选中任何内容"),false},{capture:true});},openBlankArticle(){f.success("新标签页打开文章"),h.on(document,"click",".feeds-container .note-item",function(t){m.preventEvent(t);let i=t.target.querySelector("a.cover[href]")?.href;if(i){f.info("跳转文章: "+i);let o=new URL(i);o.pathname=o.pathname.replace(/^\/user\/profile\/[a-z0-9A-Z]+\//i,"/discovery/item/"),i=o.toString(),window.open(i,"_blank");}else b.error("未找到文章链接");},{capture:true});}},ce=function(t,e,n,i,o,l,a){let s=[];typeof i=="function"?s=i():s=i;let r={text:t,type:"select",description:l,attributes:{},props:{},getValue(){return this.props[M].get(e,n)},callback(u,c,p){let d=c;if(f.info(`选择：${p}`),typeof o=="function"&&o(u,d,p))return;this.props[M].set(e,d);},data:s};return Reflect.set(r.attributes,U,e),Reflect.set(r.attributes,q,n),te.initComponentsStorageApi("select",r,{get(u,c){return y.getValue(u,c)},set(u,c){y.setValue(u,c);}}),r},he=function(t,e,n,i,o,l,a,s,r,u){let c={text:t,type:"button",attributes:{},props:{},description:e,buttonIcon:i,buttonIsRightIcon:o,buttonIconIsLoading:l,buttonType:a,buttonText:n,callback(p){typeof s=="function"&&s(p);},afterAddToUListCallBack:r};return Reflect.set(c.attributes,Ie,()=>{c.disable=false;}),c},ct={id:"xhs-panel-config-common",title:"通用",forms:[{type:"forms",text:"",forms:[{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[ce("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(t,e,n)=>{f.info("设置当前Qmsg弹出位置"+n);},"Toast显示在页面九宫格的位置"),ce("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),A("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[A("允许复制","pc-xhs-allowCopy",true,void 0,"可以选择文字并复制"),A("新标签页打开文章","pc-xhs-open-blank-article",false,void 0,"点击文章不会在本页展开，会打开新标签页")]}]},{text:"搜索",type:"deepMenu",forms:[{text:"",type:"forms",forms:[A("新标签页打开-搜索按钮","pc-xhs-search-open-blank-btn",false,void 0,"点击右边的搜索按钮直接新标签页打开搜索内容"),A("新标签页打开-回车键","pc-xhs-search-open-blank-keyboard-enter",false,void 0,"按下回车键直接新标签页打开搜索内容")]}]},{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[A("【屏蔽】广告","pc-xhs-shieldAd",true,void 0,"屏蔽元素"),A("【屏蔽】登录弹窗","pc-xhs-shield-login-dialog",true,void 0,"屏蔽会自动弹出的登录弹窗"),A("【屏蔽】选择文字弹出的搜索提示","pc-xhs-shield-select-text-search-position",false,void 0,"屏蔽元素"),A("【屏蔽】顶部工具栏","pc-xhs-shield-topToolbar",false,void 0,"屏蔽元素")]}]},{type:"deepMenu",text:"笔记过滤器",forms:[{text:'<a href="https://greasyfork.org/zh-CN/scripts/483960-%E5%B0%8F%E7%BA%A2%E4%B9%A6%E4%BC%98%E5%8C%96#:~:text=%E5%B1%8F%E8%94%BD%E8%A7%84%E5%88%99" target="_blank">点击查看规则</a>',type:"forms",forms:[A("启用","shieldVideo-exec-network-enable",true,void 0,"开启后以下功能才会生效"),A("仅显示被过滤的笔记","xhs-article-filter-only-show-filtered-video",false,void 0,"只会显示过滤规则命中的笔记"),he("笔记过滤规则","可过滤笔记","自定义",void 0,false,false,"primary",()=>{ae.showView();})]},{type:"forms",text:"",forms:[he("数据导入","导入自定义规则数据","导入",void 0,false,false,"primary",()=>{ae.$data.videoFilterRuleStorage.importRules();}),he("数据导出","导出自定义规则数据","导出",void 0,false,false,"primary",()=>{ae.$data.videoFilterRuleStorage.exportRules(De+"-视频过滤规则.json");})]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[A("劫持Vue","pc-xhs-hook-vue",true,void 0,"恢复__vue__属性")]}]}]}]},ut=function(t,e,n,i,o,l,a,s,r,u){let c={text:t,type:"slider",description:s,attributes:{},props:{},getValue(){return this.props[M].get(e,n)},getToolTipContent(p){return typeof a=="function"?a(p):`${p}`},callback(p,d){if(typeof l=="function"&&l(p,d))return;this.props[M].set(e,d);},min:i,max:o,step:r};return Reflect.set(c.attributes,U,e),Reflect.set(c.attributes,q,n),te.initComponentsStorageApi("slider",c,{get(p,d){return y.getValue(p,d)},set(p,d){y.setValue(p,d);}}),c},pt={id:"xhs-panel-config-article",title:"笔记",forms:[{type:"forms",text:"功能",forms:[A("显示发布、修改的绝对时间","pc-xhs-article-showPubsliushTime",false,void 0,"注：需要开启<code>通用</code>-<code>劫持/拦截</code>-<code>劫持Vue</code>")]},{text:"笔记宽屏",type:"forms",forms:[A("启用","pc-xhs-article-fullWidth",false,void 0,`让笔记占据宽屏，当页面可视宽度>=960px时才会触发该功能，当前页面可视宽度: ${window.innerWidth}px`),ut("占据范围","pc-xhs-article-fullWidth-widthSize",90,30,100,(t,e)=>{let n=document.querySelector("#noteContainer");if(!n){f.error("未找到笔记容器");return}n.style.width=`${e}vw`;},t=>`${t}%，默认：90%`,"调整笔记页面占据的页面范围")]}]},dt={id:"little-red-book-panel-config-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[ce("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(t,e,n)=>{f.info("设置当前Qmsg弹出位置"+n);},"Toast显示在页面九宫格的位置"),ce("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),A("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"forms",forms:[{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[A("【屏蔽】广告","little-red-book-shieldAd",true,void 0,"如：App内打开"),A("【屏蔽】底部搜索发现","little-red-book-shieldBottomSearchFind",true,void 0,"建议开启"),A("【屏蔽】底部工具栏","little-red-book-shieldBottomToorBar",true,void 0,"建议开启")]}]}]}]},ft={id:"little-red-book-panel-config-home",title:"主页",forms:[{text:"",type:"forms",forms:[{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[A("劫持点击事件","little-red-book-repariClick",true,void 0,"可阻止点击跳转至下载页面")]}]}]}]},mt={id:"little-red-book-panel-config-note",title:"笔记",forms:[{text:"",type:"forms",forms:[{text:"视频笔记",type:"deepMenu",forms:[{text:"",type:"forms",forms:[A("优化视频描述","little-red-book-optimizeVideoNoteDesc",true,void 0,"让视频描述可以滚动显示更多"),A("【屏蔽】作者热门笔记","little-red-book-shieldAuthorHotNote",true,void 0,"建议开启"),A("【屏蔽】热门推荐","little-red-book-shieldHotRecommendNote",true,void 0,"建议开启")]}]}]},{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[A("优化评论浏览","little-red-book-optimizeCommentBrowsing",true,void 0,"目前仅可加载部分评论"),A("优化图片浏览","little-red-book-optimizeImageBrowsing",true,void 0,"更方便的浏览图片"),A("允许复制","little-red-book-allowCopy",true,void 0,"可以复制笔记的内容")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[A("劫持webpack-弹窗","little-red-book-hijack-webpack-mask",true,void 0,"如：打开App弹窗、登录弹窗"),A("劫持webpack-唤醒App","little-red-book-hijack-webpack-scheme",true,void 0,"禁止跳转商店小红书详情页/小红书")]}]}]}]};B(`
.qmsg svg.animate-turn {
    fill: none;
}
`);ee.addContentConfig([ct,pt]);ee.addContentConfig([dt,ft,mt]);const Fe=fe.getMenuOption();Fe.text="⚙ PC-设置";fe.updateMenuOption(Fe);fe.addMenuOption({key:"show_mobile_setting",text:"⚙ 移动端-设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{y.showPanel(ee.getConfig(1),`${De}-移动端设置`);}});y.init();let Oe=m.isPhone(),ie="change_env_set",J=pe(ie);Te.add({key:ie,text:`⚙ 自动: ${Oe?"移动端":"PC端"}`,autoReload:false,isStoreValue:false,showText(t){return J==null?t:t+` 手动: ${J==1?"移动端":J==2?"PC端":"未知"}`},callback:()=>{let t=[0,1,2],e=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!e)return;let n=parseInt(e);if(isNaN(n)){b.error("输入的不是规范的数字");return}if(!t.includes(n)){b.error("输入的值必须是0或1或2");return}n==0?ve(ie):de(ie,n);}});J!=null?(f.info(`手动判定为${J===1?"移动端":"PC端"}`),J==1?we.init():J==2?se.init():(b.error("意外，手动判定的值不在范围内"),ve(ie))):Oe?(f.info("自动判定为移动端"),we.init()):(f.info("自动判定为PC端"),se.init());

})(Qmsg, DOMUtils, Utils, pops, Viewer);