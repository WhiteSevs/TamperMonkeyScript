// ==UserScript==
// @name         小红书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.7.16
// @author       WhiteSevs
// @description  屏蔽登录弹窗、屏蔽广告、优化评论浏览、优化图片浏览、允许复制、禁止唤醒App、禁止唤醒弹窗、修复正确跳转等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAx9JREFUWEfNl09MU0EQxn/beFTDDRI41FAMcNGbBw62oPEGid6UULxg1EhEEzExgdBEEzRqlKDxZCHgDZJ6U8TWAyaQGIsHMQLSA0S8VYQT2NXp9tnX0vKnpi2TNH1vd3bmm5lv9+0o0kQ73SXsc7QCx1EcjU9rnOl6O3pXRNAqCjqCIsB6LKQioYh9rbK/6MMnWojFHgElO3KwWyUBBD1q9q3fWvoPgHY1dIHu2a3N3PRVt5ob98naOABdVd+K5nluxnJc5dBe9TU4qHS128lvRzDnOufoH4iyETukihJ9EnSH0i5PAFRj7oH8z0r9UmlXw0fQZrsVWhQRKcFCEepvQo0DcNXrQgeechDtbQAVpbCyBiurqUmqqYSD+2FyOnPyZE50ln7A4vKWCc5egvIyCA3DzV4YeZ00UlEGQ/eN88670HsjOTczZ8bbvXCiDqbC8HkeBkahuhLE5sBICqDdAzh9yjh1n4OlZZgdTxqcDEPfIAw9SI1aMjg1DVrDpe5tAIRewOJ36LyXzIAgv+IFz1ljXN5FJAOjrwwIcd583YwfO2L0JHvW2qqGjKXYnAExJkYfDyYBaGWibmyDGhe0t/z9bikDSMQO4NZlEO5YJTggfHCBf8SUIo0TqQCEPB8C0Ddg6m5xQIj4xAcXu+DLPASHjY5/1BDUDkAyWF6amXjCkcYLW5Sg1gWBZ3C7H6Y+mWdJ48y35LiQ0HvGGLHzIFsJLAJLSSQzssYmmzMg0TVfM9vMqqMYkcwIejEiv59rhliy3URP2H6n3/zXJsbsO+ipz+huCUCQSb2E3eJQRNL+ZsIQS/a1ALQIKDtCxu0i4EUs8GPvk7YEXFPbNrvAmj5ZJ3dB49wSYbTlUIgqANJFzoFfq4aE8izBiC0h49iEmctagszUyevoHvgYFf1zXEwA6PBeuJLVXwUe5pVp2Yyr2HmVaMUW8tYNZXWuI6xrT6IxcbeiHYVtTCT62ZDf1pp5ekB1FaYU2qfmgvGLQWpzKi0adOfxlhxF0ZGxObUiT7RqbjRNoJ0oVZIzINMNy5Eehtg7NvCrSChqz/IfgUZkW/BhLsQAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://www.xiaohongshu.com/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.7.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.5.11/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.2.5/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.3.8/dist/index.umd.js
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

(function (x, ke, B, ie, Le) {
  'use strict';

  var he=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,ge=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,oe=typeof GM_getValue<"u"?GM_getValue:void 0,K=typeof GM_info<"u"?GM_info:void 0,Te=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,le=typeof GM_setValue<"u"?GM_setValue:void 0,De=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Ne=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,v=typeof unsafeWindow<"u"?unsafeWindow:void 0,Be=window;const Fe=`/* 用户主页 */\r
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
`,ue={isArticle(){return globalThis.location.pathname.startsWith("/discovery/item/")||globalThis.location.pathname.startsWith("/explore/")},isUserHome(){return globalThis.location.pathname.startsWith("/user/profile/")},isHome(){return globalThis.location.href==="https://www.xiaohongshu.com/"||globalThis.location.href==="https://www.xiaohongshu.com"},isSearch(){return globalThis.location.pathname.startsWith("/search_result/")}},Ce="GM_Panel",Ve="data-init",D="data-key",N="data-default-value",Oe="data-init-more-value",S="data-storage-api",H={setting:{get width(){return window.innerWidth<550?"88vw":window.innerWidth<700?"550px":"700px"},get height(){return window.innerHeight<450?"70vh":window.innerHeight<550?"450px":"550px"}},info:{get width(){return "350px"},get height(){return "250px"}}};class He{storageKey;listenerData;constructor(e){if(typeof e=="string"){let n=e.trim();if(n=="")throw new Error("key参数不能为空字符串");this.storageKey=n;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new B.Dictionary;}getLocalValue(){let e=oe(this.storageKey);return e==null&&(e={},this.setLocalValue(e)),e}setLocalValue(e){le(this.storageKey,e);}set(e,n){let i=this.get(e),o=this.getLocalValue();Reflect.set(o,e,n),this.setLocalValue(o),this.triggerValueChangeListener(e,i,n);}get(e,n){let i=this.getLocalValue();return Reflect.get(i,e)??n}getAll(){return this.getLocalValue()}delete(e){let n=this.get(e),i=this.getLocalValue();Reflect.deleteProperty(i,e),this.setLocalValue(i),this.triggerValueChangeListener(e,n,void 0);}has(e){let n=this.getLocalValue();return Reflect.has(n,e)}keys(){let e=this.getLocalValue();return Reflect.ownKeys(e)}values(){let e=this.getLocalValue();return Reflect.ownKeys(e).map(n=>Reflect.get(e,n))}clear(){he(this.storageKey);}addValueChangeListener(e,n){let i=Math.random(),o=this.listenerData.get(e)||[];return o.push({id:i,key:e,callback:n}),this.listenerData.set(e,o),i}removeValueChangeListener(e){let n=false;for(const[i,o]of this.listenerData.entries()){for(let l=0;l<o.length;l++){const c=o[l];(typeof e=="string"&&c.key===e||typeof e=="number"&&c.id===e)&&(o.splice(l,1),l--,n=true);}this.listenerData.set(i,o);}return n}triggerValueChangeListener(e,n,i){if(!this.listenerData.has(e))return;let o=this.listenerData.get(e);for(let l=0;l<o.length;l++){const c=o[l];if(typeof c.callback=="function"){let s=this.get(e),r,a;typeof n<"u"&&arguments.length>=2?a=n:a=s,typeof i<"u"&&arguments.length>2?r=i:r=s,c.callback(e,a,r);}}}}const F=new He(Ce),q={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new m.Dictionary),this.__contentConfig}},addContentConfig(t){Array.isArray(t)||(t=[t]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,t);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(t=0){return this.$data.contentConfig.get(t)??[]},getDefaultBottomContentConfig(){return [{id:"script-version",title:`版本：${K?.script?.version||"未知"}`,isBottom:true,forms:[],clickFirstCallback(t,e,n){let i=K?.script?.supportURL||K?.script?.namespace;return typeof i=="string"&&m.isNotNull(i)&&window.open(i,"_blank"),false}}]}},re={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{g.showPanel(q.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){g.isTopWindow()&&Se.add(this.$data.menuOption);},addMenuOption(t){Array.isArray(t)||(t=[t]),this.$data.menuOption.push(...t);},updateMenuOption(t){Array.isArray(t)||(t=[t]),t.forEach(e=>{let n=this.$data.menuOption.findIndex(i=>i.key===e.key);n!==-1&&(this.$data.menuOption[n]=e);});},getMenuOption(t=0){return this.$data.menuOption[t]},deleteMenuOption(t=0){this.$data.menuOption.splice(t,1);}},g={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__onceExecData:null,__panelConfig:{},$panel:null,get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new m.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new m.Dictionary),this.__onceExecMenuData},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new m.Dictionary),this.__onceExecData},get scriptName(){return pe},get panelConfig(){return this.__panelConfig},set panelConfig(t){this.__panelConfig=t;},key:Ce,attributeKeyName:D,attributeDefaultValueName:N},init(){this.initContentDefaultValue(),re.init();},isTopWindow(){return v.top===v.self},initContentDefaultValue(){const t=i=>{if(!i.attributes||i.type==="button"||i.type==="forms"||i.type==="deepMenu")return;let o=new Map,l=i.attributes[D];if(l!=null){const r=i.attributes[N];o.set(l,r);}let c=i.attributes[Oe];if(typeof c=="object"&&c&&Object.keys(c).forEach(r=>{o.set(r,c[r]);}),!o.size){p.warn(["请先配置键",i]);return}let s=i.attributes[Ve];if(typeof s=="function"){let r=s();if(typeof r=="boolean"&&!r)return}if(i.type==="switch"){let r=typeof i.disabled=="function"?i.disabled():i.disabled;typeof r=="boolean"&&r&&this.$data.contentConfigInitDisabledKeys.push(...o.keys());}for(const[r,a]of o.entries())this.setDefaultValue(r,a);},e=i=>{for(let o=0;o<i.length;o++){let l=i[o];t(l);let c=l.forms;c&&Array.isArray(c)&&e(c);}},n=[...q.getAllContentConfig()];for(let i=0;i<n.length;i++){let o=n[i];if(!o.forms)continue;const l=o.forms;l&&Array.isArray(l)&&e(l);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(t,e){this.$data.contentConfigInitDefaultValue.has(t)&&p.warn("请检查该key(已存在): "+t),this.$data.contentConfigInitDefaultValue.set(t,e);},setValue(t,e){F.set(t,e);},getValue(t,e){let n=F.get(t);return n??(this.$data.contentConfigInitDefaultValue.has(t)?this.$data.contentConfigInitDefaultValue.get(t):e)},deleteValue(t){F.delete(t);},hasKey(t){return F.has(t)},addValueChangeListener(t,e){return F.addValueChangeListener(t,(i,o,l)=>{e(t,l,o);})},removeValueChangeListener(t){F.removeValueChangeListener(t);},triggerMenuValueChange(t,e,n){F.triggerValueChangeListener(t,n,e);},deleteExecMenuOnce(t){return this.$data.onceExecMenuData.delete(t),F.removeValueChangeListener(t)},deleteOnceExec(t){this.$data.onceExecData.delete(t);},exec(t,e,n,i=true){const o=this;let l;typeof t=="string"||Array.isArray(t)?l=()=>t:l=t;let c=false,s=l(),r=[];Array.isArray(s)?(c=true,r=s):r.push(s);let a=r.find(_=>!this.$data.contentConfigInitDefaultValue.has(_));if(a){p.warn(`${a} 键不存在`);return}let u=JSON.stringify(r);if(i){if(this.$data.onceExecMenuData.has(u))return;this.$data.onceExecMenuData.set(u,1);}let d=[],f=[],b=(_,A)=>{let L=[];Array.isArray(A)||(A=[A]),A.forEach(V=>{if(V!=null&&V instanceof HTMLStyleElement){L.push(V);return}}),d=d.concat(L);},y=_=>this.getValue(_),w=()=>{for(let _=0;_<d.length;_++)d[_].remove(),d.splice(_,1),_--;},k=()=>{let _=false;return typeof n=="function"?_=n(r):_=r.every(A=>y(A)),_},$=_=>{let A=k(),L=[];if(A){let V=r.map(I=>this.getValue(I)),R=e({value:c?V:V[0],addStyleElement:(...I)=>b(true,...I)});Array.isArray(R)||(R=[R]),R.forEach(I=>{if(I!=null&&I instanceof HTMLStyleElement){L.push(I);return}});}w(),d=[...L];};return i&&r.forEach(_=>{let A=this.addValueChangeListener(_,(L,V,R)=>{$();});f.push(A);}),$(),{clear(){this.clearStoreStyleElements(),this.removeValueChangeListener(),i&&o.$data.onceExecMenuData.delete(u);},clearStoreStyleElements:()=>w(),removeValueChangeListener:()=>{f.forEach(_=>{this.removeValueChangeListener(_);});}}},execMenu(t,e,n=false,i=false){return this.exec(t,o=>e(o),o=>o.every(c=>{let s=!!this.getValue(c);return g.$data.contentConfigInitDisabledKeys.includes(c)&&(s=false,p.warn(`.execMenu${i?"Once":""} ${c} 被禁用`)),n&&(s=!s),s}),i)},execMenuOnce(t,e,n=false){return this.execMenu(t,e,n,true)},onceExec(t,e){if(typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(t)||(e(),this.$data.onceExecData.set(t,1));},showPanel(t,e=`${pe}-设置`,n=false){let i=t.findIndex(l=>(typeof l.isBottom=="function"?l.isBottom():!!l.isBottom)&&l.id==="script-version")!==-1;!n&&!i&&t.push(...q.getDefaultBottomContentConfig());let o=E.panel({title:{text:e,position:"center",html:false,style:""},content:t,btn:{close:{enable:true,callback:(l,c)=>{l.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(l,c)=>{l(),this.$data.$panel=null;}},width:H.setting.width,height:H.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=o;}},T={waitRemove(...t){t.forEach(e=>{typeof e=="string"&&m.waitNodeList(e).then(n=>{n.forEach(i=>i.remove());});});},addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),M(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){let e=typeof ge=="function"?ge(t.keyName):null;typeof e=="string"&&e?M(e):T.loadStyleLink(t.url);},async loadStyleLink(t){let e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=t,ke.ready(()=>{document.head.appendChild(e);});},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(n=>{e.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.match(/^http(s|):\/\//i)?t:t.startsWith("//")?(t.startsWith("///")||(t=window.location.protocol+t),t):(t.startsWith("/")||(t+="/"),t=window.location.origin+t,t)},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;let e=new URL(t);return e.protocol="https:",e.toString()},lockScroll(...t){let e=document.createElement("style");e.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...t||[]);return n.forEach(i=>{i.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(e),{recovery(){n.forEach(i=>{i.classList.remove("pops-overflow-hidden-important");}),e.remove();}}},async getClipboardText(){function t(i){navigator.clipboard.readText().then(o=>{i(o);}).catch(o=>{p.error("读取剪贴板内容失败👉",o),i("");});}function e(i){navigator.permissions.query({name:"clipboard-read"}).then(o=>{t(i);}).catch(o=>{p.error("申请剪贴板权限失败，尝试直接读取👉",o.message??o.name??o.stack),t(i);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(i=>{if(!n()){i("");return}document.hasFocus()?e(i):window.addEventListener("focus",()=>{e(i);},{once:true});})},escapeHtml(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")}},Pe={Viewer:{keyName:"ViewerCSS",url:"https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"}},U={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},m=B.noConflict(),h=ke.noConflict(),E=ie,p=new m.Log(K,v.console||Be.console);let pe=K?.script?.name||void 0;ie.config.Utils.AnyTouch();const Ae=false;p.config({debug:Ae,logMaxCount:1e3,autoClearConsole:true,tag:true});x.config(Object.defineProperties({html:true,autoClose:true,showClose:false},{position:{get(){return g.getValue(U.qmsg_config_position.key,U.qmsg_config_position.defaultValue)}},maxNums:{get(){return g.getValue(U.qmsg_config_maxnums.key,U.qmsg_config_maxnums.defaultValue)}},showReverse:{get(){return g.getValue(U.qmsg_config_showreverse.key,U.qmsg_config_showreverse.defaultValue)}},zIndex:{get(){let t=B.getMaxZIndex(),e=ie.config.InstanceUtils.getPopsMaxZIndex().zIndex;return B.getMaxValue(t,e)+100}}}));E.GlobalConfig.setGlobalConfig({zIndex:()=>{let t=B.getMaxZIndex(void 0,void 0,n=>{if(n?.classList?.contains("qmsg-shadow-container")||n?.closest("qmsg")&&n.getRootNode()instanceof ShadowRoot)return  false}),e=ie.config.InstanceUtils.getPopsMaxZIndex().zIndex;return B.getMaxValue(t,e)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}}});const Se=new m.GM_Menu({GM_getValue:oe,GM_setValue:le,GM_registerMenuCommand:Te,GM_unregisterMenuCommand:De}),j=new m.Httpx({xmlHttpRequest:Ne,logDetails:Ae});j.interceptors.request.use(t=>t);j.interceptors.response.use(void 0,t=>(p.error("拦截器-请求错误",t),t.type==="onabort"?x.warning("请求取消",{consoleLogContent:true}):t.type==="onerror"?x.error("请求异常",{consoleLogContent:true}):t.type==="ontimeout"?x.error("请求超时",{consoleLogContent:true}):x.error("其它错误",{consoleLogContent:true}),t));v.Object.defineProperty,v.Function.prototype.apply,v.Function.prototype.call,v.Element.prototype.appendChild,v.setTimeout;const M=m.addStyle.bind(m);document.querySelector.bind(document);const Ue=document.querySelectorAll.bind(document);new m.GM_Cookie;const $e=pe||"小红书优化",je=Le,be="https://edith.xiaohongshu.com",ye={async getPageInfo(t,e="",n="",i="",o="jpg,webp"){const l="/api/sns/web/v2/comment/page",c={note_id:t,cursor:e,top_comment_id:i,image_formats:o,xsec_token:n},s=l+"?"+m.toSearchParamsStr(c);let r=await j.get(`${be}${s}`,{headers:{Accept:"application/json, text/plain, */*","User-Agent":m.getRandomPCUA(),Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"}});if(!r.status)return;let a=m.toJSON(r.data.responseText);if(p.info(["获取页信息",a]),a.code===0||a.success)return a.data;if(a.code===-101)return;x.error(a.msg);},async getLzlPageInfo(t="",e="",n=10,i="",o="jpg,webp,avif",l=""){const c="/api/sns/web/v2/comment/sub/page";let s={note_id:t,root_comment_id:e,num:n,cursor:i,image_formats:o,top_comment_id:l};c+""+m.toSearchParamsStr(s);let r=`${be}${c}?${m.toSearchParamsStr(s)}`,a=await j.get(r,{headers:{Accept:"application/json, text/plain, */*","User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Host:"edith.xiaohongshu.com",Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"},onerror(){}});if(!a.status){a.data.status===406&&m.isNotNull(a.data.responseText)?m.toJSON(a.data.responseText).code==-1?x.error("获取楼中楼信息失败，验证x-s、x-t、x-s-common失败"):x.error("获取楼中楼信息失败"):x.error("请求异常"),p.error(["获取楼中楼信息失败",a]);return}let u=m.toJSON(a.data.responseText);if(p.info(["获取楼中楼页信息",u]),u.code===0||u.success)return u.data;x.error(u.msg);},async getSearchRecommend(t){let e=await j.get(`https://edith.xiaohongshu.com/api/sns/web/v1/search/recommend?keyword=${t}`,{fetch:true});if(!e.status)return;let n=m.toJSON(e.data.responseText);if(n.success||n.code===1e3)return n.data.sug_items}},xe={$data:{document_addEventListener:[],element_addEventListener:[],setTimeout:[],setInterval:[],function_apply:[],function_call:[],defineProperty:[]},document_addEventListener(t){if(this.$data.document_addEventListener.push(t),p.info("document.addEventListener hook新增劫持判断回调"),this.$data.document_addEventListener.length>1)return;const e=this;let n=new WeakMap;const i=v.document.addEventListener,o=v.document.removeEventListener;v.document.addEventListener=function(...l){let c=this,s=l[0],r=l[1],a=l[2];for(let u=0;u<e.$data.document_addEventListener.length;u++){const d=e.$data.document_addEventListener[u],f=Reflect.apply(d,this,[c,s,r,a]);if(typeof f=="function"){l[1]=f,n.set(r,{eventName:s,fn:f,options:a});break}else if(typeof f=="boolean"&&!f)return}return Reflect.apply(i,this,l)},v.document.removeEventListener=function(...l){let c=l[0],s=l[1],r=l[2];if(n.has(s)){const{eventName:a,fn:u,options:d}=n.get(s);let f=false;c===a&&(typeof r=="boolean"&&r===d||typeof r=="object"&&typeof d=="object"&&r.capture===d.capture||r==r)&&(f=true),f&&(l[1]=u);}return Reflect.apply(o,this,l)};},element_addEventListener(t){if(this.$data.element_addEventListener.push(t),p.info("Element.prototype.addEventListener hook新增劫持判断回调"),this.$data.element_addEventListener.length>1)return;const e=this;let n=new WeakMap;const i=v.Element.prototype.addEventListener,o=v.Element.prototype.removeEventListener;v.Element.prototype.addEventListener=function(...l){let c=this,s=l[0],r=l[1],a=l[2];for(let u=0;u<e.$data.element_addEventListener.length;u++){const d=e.$data.element_addEventListener[u],f=Reflect.apply(d,this,[c,s,r,a]);if(typeof f=="function"){l[1]=f,n.set(r,{eventName:s,fn:f,options:a});break}else if(typeof f=="boolean"&&!f)return}return Reflect.apply(i,this,l)},v.Element.prototype.removeEventListener=function(...l){let c=l[0],s=l[1],r=l[2];if(n.has(s)){const{eventName:a,fn:u,options:d}=n.get(s);let f=false;a===c&&(typeof r=="boolean"&&r===d||typeof r=="object"&&typeof d=="object"&&r.capture===d.capture||r==d)&&(f=true),f&&(l[1]=u);}return Reflect.apply(o,this,l)};},setTimeout(t){if(this.$data.setTimeout.push(t),p.info("window.setTimeout hook新增劫持"),this.$data.setTimeout.length>1)return;const e=this;let n=v.setTimeout;v.setTimeout=function(...i){let o=i[0],l=i[1];for(let c=0;c<e.$data.setTimeout.length;c++){const s=e.$data.setTimeout[c],r=s(o,l);if(typeof r=="boolean"&&!r)return}return Reflect.apply(n,this,i)};},setInterval(t){if(this.$data.setInterval.push(t),p.info("window.setInterval hook新增劫持"),this.$data.setInterval.length>1)return;const e=this;let n=v.setInterval;v.setInterval=function(...i){let o=i[0],l=i[1];for(let c=0;c<e.$data.setInterval.length;c++){const s=e.$data.setInterval[c],r=s(o,l);if(typeof r=="boolean"&&!r)return}return Reflect.apply(n,this,i)};},function_apply(t){if(this.$data.function_apply.push(t),p.info("Function.prototype.apply hook新增劫持"),this.$data.function_apply.length>1)return;const e=this;let n=v.Function.prototype.apply;v.Function.prototype.apply=function(...i){let o=i[0],l=i[1],c=this;for(let r=0;r<e.$data.function_apply.length;r++){let a=e.$data.function_apply[r];if(typeof a.paramsHandler=="function"){let u=a.paramsHandler(c,o,l);if(u!=null){if(u.args&&(i[0]=u.args.thisArg,i[1]=u.args.argArray,c=u.args.fn),u.preventDefault)return "result"in u?u.result:void 0;break}}}let s=n.call(c,...i);for(let r=0;r<e.$data.function_apply.length;r++){let a=e.$data.function_apply[r];typeof a.returnsHandler=="function"&&(s=a.returnsHandler(c,i[0],i[1],s).result);}return s};},function_call(t){if(this.$data.function_call.push(t),p.info("Function.prototype.call hook新增劫持"),this.$data.function_call.length>1)return;const e=this;let n=v.Function.prototype.call;v.Function.prototype.call=function(...i){let o=i[0],l=i.slice(1),c=this;for(let r=0;r<e.$data.function_call.length;r++){let a=e.$data.function_call[r];if(typeof a.paramsHandler=="function"){let u=a.paramsHandler(c,o,l);if(u!=null){if(u.args&&(i[0]=u.args.thisArg,i.splice(1,l.length,...u.args.argArray),c=u.args.fn),u.preventDefault)return "result"in u?u.result:void 0;break}}}let s=n.apply(c,i);for(let r=0;r<e.$data.function_call.length;r++){let a=e.$data.function_call[r];typeof a.returnsHandler=="function"&&(s=a.returnsHandler(c,i[0],i[1],s).result);}return s};},defineProperty(t){if(this.$data.defineProperty.push(t),p.info("Object.defineProperty hook新增劫持"),this.$data.defineProperty.length>1)return;const e=this;let n=v.Object.defineProperty;v.Object.defineProperty=function(...i){let o=i[0],l=i[1],c=i[2];for(let s=0;s<e.$data.defineProperty.length;s++){const r=e.$data.defineProperty[s],a=r(o,l,c);if(a!=null){i[0]=a.target,i[1]=a.key,i[2]=a.attributes;break}}return Reflect.apply(n,this,i)};},window_webpack(t="webpackJsonp",e,n){let i;v.Object.defineProperty(v,t,{get(){return i},set(o){p.success("成功劫持webpack，当前webpack名："+t),i=o;const l=i.push;i.push=function(...c){let s=c[0][0];return (e==s||Array.isArray(e)&&Array.isArray(s)&&JSON.stringify(e)===JSON.stringify(s))&&Object.keys(c[0][1]).forEach(r=>{let a=c[0][1][r];c[0][1][r]=function(...u){let d=a.call(this,...u);return u[0]=n(u[0]),d};}),Reflect.apply(l,this,c)};}});}},de={webpackChunkranchi(){let t;Object.defineProperty(v,"webpackChunkranchi",{get(){return t},set(n){t=n;const i=t.push;t.push=function(...o){return o[0][0],typeof o[0][1]=="object"&&Object.keys(o[0][1]).forEach((l,c)=>{if(typeof o[0][1][l]=="function"&&o[0][1][l].toString().startsWith("function(e,n,t){t.d(n,{Z:function(){return y}});")&&o[0][1][l].toString().includes("jumpToApp")&&g.getValue("little-red-book-hijack-webpack-scheme")){let s=o[0][1][l];o[0][1][l]=function(...r){p.success(["成功劫持scheme唤醒",r]);let a=r[2].d;return r[2].d=function(...u){if(u.length===2&&typeof u[1]?.Z=="function"){let d=u[1].Z;d.toString()==="function(){return y}"&&(u[1].Z=function(...f){let b=d.call(this,...f);return typeof b=="function"&&b.toString().includes("jumpToApp")?function(){return {jumpToApp(y){if(p.success(["拦截唤醒",y]),y.deeplink?.startsWith("xhsdiscover://user/")){let w=y.deeplink.replace(/^xhsdiscover:\/\/user\//,""),k=window.location.origin+`/user/profile/${w}`;window.open(k,"_blank");}}}}:b});}return a.call(this,...u)},s.call(this,...r)};}}),i.call(this,...o)};}});},hookVue(){const t=v.Object.assign;let e=false;v.Object.assign=function(...n){if(n.length==2&&n[1]?.render!==void 0&&!e){let i=n[1];const o=i.render;let l=false;i.render=function(...c){return l||(c[5]._.appContext.mixins.push({mounted(){this.$el.__Ivue__=this;}}),l=true),o.call(this,...c)},e=true;}return Reflect.apply(t,this,n)};},setTimeout(){xe.setTimeout(t=>{let e=t.toString();if(e==="function(){r()}"||e==="function(){u()}")return p.success(["成功劫持setTimeout唤醒",t]),false});},call(){xe.function_call({paramsHandler(t,e,n){if(t.toString(),n[0]?.label===0&&Array.isArray(n[0]?.ops)&&Array.isArray(n[0]?.trys)&&typeof n[0]?.sent=="function")return p.success(["成功劫持call唤醒",t,e,n]),{args:{fn:t,thisArg:e,argArray:[]}};if(typeof e=="string"&&e.startsWith("https://oia.xiaohongshu.com/oia"))return p.success(["成功劫持call跳转下载页面",t,e,n]),{preventDefault:true}}});}},Q={allowCopy(){return p.info("允许复制"),M(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `)},blockBottomSearchFind(){return p.info("屏蔽底部搜索发现"),T.addBlockCSS(".hotlist-container",".safe-area-bottom.margin-placeholder")},blockBottomToorBar(){return p.info("屏蔽底部工具栏"),T.addBlockCSS(".engage-bar-container")},blockAuthorHotNote(){return p.info("屏蔽视频笔记的作者热门笔记"),T.addBlockCSS(".user-notes-box.user-notes-clo-layout-container")},blockHotRecommendNote(){return p.info("屏蔽视频笔记的热门推荐"),T.addBlockCSS("#new-note-view-container .recommend-box")}},qe={optimizeVideoNoteDesc(){return p.info("优化视频笔记的描述（可滚动）"),M(`
    .author-box .author-desc-wrapper .author-desc{
      max-height: 70px !important;
      overflow: auto !important;
    }
    /* 展开按钮 */
    .author-box .author-desc-wrapper .author-desc .author-desc-trigger{
      display: none !important;
    }`)}},We=`/* 底部的App内打开 */\r
.bottom-button-box,\r
/* 顶部的打开看看 */\r
.nav-bar-box {\r
  display: none !important;\r
}\r
`,fe={init(){M(We),(g.getValue("little-red-book-hijack-webpack-mask")||g.getValue("little-red-book-hijack-webpack-scheme"))&&(p.info("劫持webpack"),de.setTimeout(),de.call()),g.execMenuOnce("little-red-book-shieldBottomSearchFind",()=>Q.blockBottomSearchFind()),g.execMenuOnce("little-red-book-shieldBottomToorBar",()=>Q.blockBottomToorBar()),g.execMenuOnce("little-red-book-optimizeImageBrowsing",()=>{fe.optimizeImageBrowsing();}),g.execMenuOnce("little-red-book-optimizeVideoNoteDesc",()=>qe.optimizeVideoNoteDesc()),g.execMenuOnce("little-red-book-shieldAuthorHotNote",()=>Q.blockAuthorHotNote()),g.execMenuOnce("little-red-book-shieldHotRecommendNote",()=>Q.blockHotRecommendNote()),h.ready(function(){g.execMenu("little-red-book-optimizeCommentBrowsing",()=>{fe.optimizeCommentBrowsing();});});},optimizeCommentBrowsing(){p.info("优化评论浏览");const t={QmsgLoading:void 0,scrollFunc:void 0,noteId:"",xsec_token:"",noteData:{},commentData:{},emojiMap:{},emojiNameList:[],currentCursor:void 0,commentContainer:void 0,init(){this.emojiMap=m.toJSON(v.localStorage.getItem("redmoji"))?.redmojiMap||{},this.emojiNameList=Object.keys(this.emojiMap),this.scrollFunc=new m.LockFunction(this.scrollEvent,this);const e=v.__INITIAL_STATE__,n=e.noteData??e.data.noteData;t.noteData=n.data.noteData,t.commentData=n.data.commentData,t.noteId=t.noteData.noteId,t.xsec_token=e.noteData.routeQuery.xsec_token,p.info(["笔记数据",t.noteData]),p.info(["评论数据",t.commentData]);},getCommentHTML(e){return `
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
            `},getCommentElement(e){let n=e.content,i=e.create_time||parseInt(e.time),o=e.id,l=e.ip_location||e.ipLocation,c=e.sub_comment_has_more,s=parseInt(e.sub_comment_count)||0,r=e.sub_comment_cursor,a=e.sub_comments||e.subComments,u=(e.user_info||e.user).image,d=(e.user_info||e.user).nickname,f=e?.user_info?.user_id||e?.user?.userId;n=t.converContent(n);let b=h.createElement("div",{className:"little-red-book-comments-item",innerHTML:`
					<div class="little-red-book-comments-parent">
					${t.getCommentHTML({user_id:f,user_avatar:u,user_nickname:d,content:n,create_time:i,ip_location:l})}
					</div>
					`});if(c&&Array.isArray(a)&&(a.forEach(y=>{let w=h.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:t.getCommentHTML({user_id:y.user_info.user_id,user_avatar:y.user_info.image,user_nickname:y.user_info.nickname,content:t.converContent(y.content),create_time:y.create_time,ip_location:y.ip_location})});b.appendChild(w);}),s!==a.length)){let y=s-a.length,w=r,k=h.createElement("div",{className:"little-red-book-comments-reply-show-more",innerText:`展开 ${y} 条回复`});async function $(){let O=x.loading("加载中，请稍后..."),_=await ye.getLzlPageInfo(t.noteId,o,10,w,void 0);O.close(),_&&(w=_.cursor,y=y-_.comments.length,k.innerText=`展开 ${y} 条回复`,_.comments.forEach(A=>{let L=h.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:t.getCommentHTML({user_id:A.user_info.user_id,user_avatar:A.user_info.image,user_nickname:A.user_info.nickname,content:t.converContent(A.content),create_time:A.create_time,ip_location:A.ip_location})});h.before(k,L);}),_.has_more||(h.off(k,"click",void 0,$,{capture:true}),k.remove()));}h.on(k,"click",void 0,$,{capture:true}),b.appendChild(k);}return b},converContent(e){return t.emojiNameList.forEach(n=>{e.includes(n)&&(e=e.replaceAll(n,`<img class="little-red-book-note-content-emoji" crossorigin="anonymous" src="${t.emojiMap[n]}">`));}),e},async scrollEvent(){if(!m.isNearBottom(window.innerHeight/3))return;this.QmsgLoading==null&&(this.QmsgLoading=x.loading("加载中，请稍后..."));let e=await ye.getPageInfo(t.noteId,t.currentCursor,t.xsec_token);if(this.QmsgLoading&&(this.QmsgLoading.close(),this.QmsgLoading=void 0),!!e&&(t.currentCursor=e.cursor,e.comments.forEach(n=>{let i=t.getCommentElement(n);t.commentContainer.appendChild(i);}),!e.has_more)){x.info("已加载全部评论"),t.removeScrollEventListener();return}},addSrollEventListener(){p.success("添加滚动监听事件"),h.on(document,"scroll",void 0,t.scrollFunc.run,{capture:true,once:false,passive:true});},removeScrollEventListener(){p.success("移除滚动监听事件"),h.off(document,"scroll",void 0,t.scrollFunc.run,{capture:true});}};m.waitNode(".narmal-note-container").then(async()=>{p.info("优化评论浏览-笔记元素出现");let e=document.querySelector(".note-view-container"),n=h.createElement("div",{className:"little-red-book-comments-container",innerHTML:`
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
          `});t.commentContainer=n,t.init();let i=h.createElement("div",{className:"little-red-book-comments-total",innerHTML:`共 ${t.commentData.commentCount??t.noteData.comments} 条评论`});n.appendChild(i),t.commentData&&t.commentData.comments&&(p.info("从固定的评论中加载"),t.commentData.comments.forEach(o=>{let l=t.getCommentElement(o);n.appendChild(l);})),h.append(e,n);});},optimizeImageBrowsing(){p.info("优化图片浏览"),T.setGMResourceCSS(Pe.Viewer);function t(e=[],n=0){let i="";e.forEach(c=>{i+=`<li><img data-src="${c}" loading="lazy"></li>`;});let o=h.createElement("ul",{innerHTML:i}),l=new je(o,{inline:false,url:"data-src",zIndex:m.getMaxZIndex()+100,hidden:()=>{l.destroy();}});n=n<0?0:n,l.view(n),l.zoomTo(1),l.show();}h.on(document,"click",".note-image-box",function(e){let n=e.target,i=n.querySelector("img"),o=[],l=[];n.closest(".onix-carousel-item")?l=Array.from(n.closest(".onix-carousel-item").parentElement.querySelectorAll("img")):l=[i];let c=l.findIndex(s=>s==i);l.forEach(s=>{let r=s.getAttribute("src")||s.getAttribute("data-src")||s.getAttribute("alt");r&&o.push(r);}),p.success(["点击浏览图片👉",o[c]]),t(o,c);});}},Re={init(){h.ready(()=>{g.execMenuOnce("little-red-book-repariClick",()=>{Re.repariClick();});});},repariClick(){p.info("修复正确的点击跳转"),h.on(document,"click",void 0,function(t){let e=t.target;if(p.info(["点击的按钮元素",e]),e?.className?.includes("follow-btn"))p.success("点击-关注按钮");else if(e?.closest("button.reds-button.message-btn"))p.success("点击-私信按钮");else if(e?.closest("div.reds-tab-item"))p.success("点击-笔记/收藏按钮");else if(e?.closest("section.reds-note-card")){p.success("点击-笔记卡片");let n=e?.closest("section.reds-note-card");n.getAttribute("id")||m.toJSON(n.getAttribute("impression"))?.noteTarget?.value?.noteId?window.open(`https://www.xiaohongshu.com/discovery/item/${e?.closest("section.reds-note-card")?.getAttribute("id")}`,"_blank"):x.error("获取笔记note_id失败");}return m.preventEvent(t),false},{capture:true});}},me={init(){g.execMenuOnce("little-red-book-shieldAd",()=>(p.info("注入默认屏蔽CSS"),M(Fe))),g.execMenuOnce("little-red-book-allowCopy",()=>me.allowCopy()),ue.isArticle()?fe.init():ue.isUserHome()&&Re.init();},allowCopy(){return p.info("允许复制文字"),M(`
        *{
            -webkit-user-select: unset !important;
            user-select: unset !important;
        }
        `)}},Ge="",ze={init(){g.execMenuOnce("pc-xhs-shieldAd",()=>M(Ge)),g.execMenuOnce("pc-xhs-shield-select-text-search-position",()=>this.blockSelectTextVisibleSearchPosition()),g.execMenuOnce("pc-xhs-shield-topToolbar",()=>this.blockTopToolbar()),h.ready(()=>{g.execMenuOnce("pc-xhs-shield-login-dialog",()=>{this.blockLoginContainer();});});},blockLoginContainer(){p.info("添加屏蔽登录弹窗CSS，监听登录弹窗出现"),T.addBlockCSS(".login-container"),m.mutationObserver(document.body,{config:{subtree:true,childList:true},callback:()=>{let t=document.querySelector(".login-container .icon-btn-wrapper");t&&(t.click(),p.success("登录弹窗出现，关闭"));}});},blockSelectTextVisibleSearchPosition(){return p.info("屏蔽选择文字弹出的搜索提示"),T.addBlockCSS(".search-position")},blockTopToolbar(){return p.info("【屏蔽】顶部工具栏"),[T.addBlockCSS("#headerContainer",".header-container"),M(`
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
			`)]}},Ke={getSearchUrl(t){return `https://www.xiaohongshu.com/search_result?keyword=${t}&source=web_explore_feed`}},Y={getVue(t){if(t!=null)return t.__vue__||t.__Ivue__||t.__IVue__},getVue3(t){if(t!=null)return t.__vueParentComponent},waitVuePropToSet(t,e){Array.isArray(e)||(e=[e]);function n(){let i=null;return typeof t=="string"?i=h.selector(t):typeof t=="function"?i=t():t instanceof HTMLElement&&(i=t),i}e.forEach(i=>{typeof i.msg=="string"&&p.info(i.msg);function o(){let l=n();if(l==null)return {status:false,isTimeout:true,inst:null,$el:l};let c=Y.getVue(l);if(c==null)return {status:false,isTimeout:false,inst:null,$el:l};let s=i.check(c,l);return s=!!s,{status:s,isTimeout:false,inst:c,$el:l}}m.waitVueByInterval(()=>n(),()=>o().status,250,1e4).then(l=>{let c=o();if(c.status){let s=c.inst;i.set(s,c.$el);}else typeof i.failWait=="function"&&i.failWait(c.isTimeout);});});},watchVuePropChange(t,e,n,i,o){let l=m.assign({immediate:true,deep:false},i||{});return new Promise(c=>{Y.waitVuePropToSet(t,{check(s){return typeof s?.$watch=="function"},set(s){let r=null;typeof e=="function"?r=s.$watch(()=>e(s),(a,u)=>{n(s,a,u);},l):r=s.$watch(e,(a,u)=>{n(s,a,u);},l),c(r);},failWait:o});})},goToUrl(t,e,n=false){if(t==null){x.error("跳转Url: $vueNode为空"),p.error("跳转Url: $vueNode为空："+e);return}let i=Y.getVue(t);if(i==null){x.error("获取vue属性失败",{consoleLogContent:true});return}let o=i.$router,l=true;if(p.info("即将跳转URL："+e),n&&(l=false),l)window.open(e,"_blank");else {if(e.startsWith("http")||e.startsWith("//")){e.startsWith("//")&&(e=window.location.protocol+e);let c=new URL(e);if(c.origin===window.location.origin)e=c.pathname+c.search+c.hash;else {p.info("不同域名，直接本页打开，不用Router："+e),window.location.href=e;return}}p.info("$router push跳转Url："+e),o.push(e);}},hookGestureReturnByVueRouter(t){function e(){p.success("触发popstate事件"),i(true);}function n(){p.success("监听地址改变"),t.vueInst.$router.history.push(t.hash),h.on(v,"popstate",e);}async function i(o=false){if(h.off(v,"popstate",e),!t.callback(o))for(;;)if(t.vueInst.$router.history.current.hash===t.hash)p.info("后退！"),t.vueInst.$router.back(),await m.sleep(250);else return}return n(),{resumeBack:i}}},we={init(){(g.getValue("pc-xhs-search-open-blank-btn")||g.getValue("pc-xhs-search-open-blank-keyboard-enter"))&&this.optimizationSearch(),g.execMenuOnce("pc-xhs-article-fullWidth",()=>this.fullWidth());},optimizationSearch(){function t(e,n=true){{let i=document.querySelector("#search-input");if(i){let o=i.value,l=Ke.getSearchUrl(o);p.info("搜索内容: "+o),window.open(l,n?"_blank":"_self");}else x.error("未找到搜索的输入框");}}m.waitNode("#search-input").then(e=>{e.placeholder="搜索小红书",g.execMenu("pc-xhs-search-open-blank-keyboard-enter",()=>{h.listenKeyboard(e,"keydown",(n,i,o,l)=>{n==="Enter"&&!o.length&&(p.info("按下回车键"),m.preventEvent(l),e.blur(),t());});});}),m.waitNode("#search-input + .input-button .search-icon").then(e=>{g.execMenu("pc-xhs-search-open-blank-btn",()=>{h.on(e,"click",n=>{m.preventEvent(n),p.info("点击搜索按钮"),t();},{capture:true});});});},fullWidth(){p.info("笔记宽屏");let t=g.getValue("pc-xhs-article-fullWidth-widthSize",90);return M(`
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
		`)},transformPublishTime(){p.info("转换笔记发布时间");let t=new m.LockFunction(()=>{Ue(".note-content:not([data-edit-date])").forEach(e=>{let n=Y.getVue(e);if(!n)return;let i=n?._?.props?.note;if(i==null)return;let o=i.time,l=i.lastUpdateTime,c=i.ipLocation;if(typeof o=="number"){let s=[];s.push(`发布：${m.formatTime(o)}`),typeof l=="number"&&s.push(`修改：${m.formatTime(l)}`),typeof c=="string"&&m.isNotNull(c)&&s.push(c);let r=e.querySelector(".date");h.html(r,s.join("<br>")),e.setAttribute("data-edit-date","");}});});m.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{t.run();}});}},W={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new B.Dictionary),this.__storeApiFn}},getStorageApi(t){if(this.hasStorageApi(t))return this.$data.storeApiValue.get(t)},hasStorageApi(t){return this.$data.storeApiValue.has(t)},setStorageApi(t,e){this.$data.storeApiValue.set(t,e);},initComponentsStorageApi(t,e,n){let i;this.hasStorageApi(t)?i=this.getStorageApi(t):i=n,this.setComponentsStorageApiProperty(e,i);},setComponentsStorageApiProperty(t,e){Reflect.set(t.props,S,e);}},Xe=function(t,e,n,i,o,l="",c,s,r){let a={text:t,type:"input",isNumber:false,isPassword:false,attributes:{},props:{},description:i,afterAddToUListCallBack:r,getValue(){return this.props[S].get(e,n)},callback(u,d,f){this.props[S].set(e,d);},placeholder:l};return Reflect.set(a.attributes,D,e),Reflect.set(a.attributes,N,n),W.initComponentsStorageApi("input",a,{get(u,d){return g.getValue(u,d)},set(u,d){g.setValue(u,d);}}),a},C=function(t,e,n,i,o,l,c){let s={text:t,type:"switch",description:o,disabled:c,attributes:{},props:{},getValue(){return this.props[S].get(e,n)},callback(r,a){let u=!!a;p.success(`${u?"开启":"关闭"} ${t}`),this.props[S].set(e,u);},afterAddToUListCallBack:l};return Reflect.set(s.attributes,D,e),Reflect.set(s.attributes,N,n),W.initComponentsStorageApi("switch",s,{get(r,a){return g.getValue(r,a)},set(r,a){g.setValue(r,a);}}),s},ve=function(t,e,n,i,o,l,c="请至少选择一个选项",s){let r=[];typeof i=="function"?r=i():r=i;let a={text:t,type:"select-multiple",description:l,placeholder:c,attributes:{},props:{},getValue(){return this.props[S].get(e,n)},selectConfirmDialogDetails:s,callback(u){let d=this.props[S],f=[];u.forEach(b=>{f.push(b.value);}),p.info("多选-选择：",f),d.set(e,f);},data:r};return Reflect.set(a.attributes,D,e),Reflect.set(a.attributes,N,n),W.initComponentsStorageApi("select-multiple",a,{get(u,d){return g.getValue(u,d)},set(u,d){g.setValue(u,d);}}),a},_e=function(t,e,n,i,o,l="",c){let s={text:t,type:"textarea",attributes:{},props:{},description:i,placeholder:l,disabled:c,getValue(){let a=this.props[S].get(e,n);return Array.isArray(a)?a.join(`
`):a},callback(r,a){this.props[S].set(e,a);}};return Reflect.set(s.attributes,D,e),Reflect.set(s.attributes,N,n),W.initComponentsStorageApi("switch",s,{get(r,a){return g.getValue(r,a)},set(r,a){g.setValue(r,a);}}),s};class Ze{option;constructor(e){this.option=e;}getAllRule(){return oe(this.option.STORAGE_API_KEY,[])}setAllRule(e){le(this.option.STORAGE_API_KEY,e);}clearAllRule(){this.setAllRule([]);}getRule(e){let n=this.getAllRule(),i=n.findIndex(o=>o.uuid===e);if(i!==-1)return n[i]}setRule(e){let n=this.getAllRule(),i=n.findIndex(l=>l.uuid===e.uuid),o=false;return i!==-1&&(n[i]=e,this.setAllRule(n),o=true),o}addRule(e){let n=this.getAllRule(),i=n.findIndex(l=>l.uuid===e.uuid),o=false;return i!==-1||(n.push(e),this.setAllRule(n),o=true),o}updateRule(e){let n=this.getAllRule(),i=n.findIndex(o=>o.uuid===e.uuid);i!==-1?n[i]=e:n.push(e),this.setAllRule(n);}deleteRule(e){let n=this.getAllRule(),i=typeof e=="string"?e:e.uuid,o=n.findIndex(l=>l.uuid===i);return o!==-1?(n.splice(o,1),this.setAllRule(n),true):false}importRules(e){let n=E.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(r,a){r.close();}}},mask:{enable:true},drag:true,width:H.info.width,height:H.info.height,style:`
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),i=n.$shadowRoot.querySelector(".btn-control[data-mode='local']"),o=n.$shadowRoot.querySelector(".btn-control[data-mode='network']"),l=n.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),c=async r=>{let a=this.getAllRule(),u=[],d=[],f=false;for(let y=0;y<r.length;y++){const w=r[y];let k=a.findIndex($=>$.uuid===w.uuid);k!==-1?d.push({index:k,data:w}):u.push(w);}if(d.length&&await new Promise(w=>{E.alert({title:{text:"覆盖规则",position:"center"},content:{text:`存在相同的uuid的规则 ${d.length}条，是否进行覆盖？`,html:true},btn:{close:{callback(k,$){k.close(),w(false);}},ok:{text:"覆盖",callback(k,$){k.close(),w(true);}}},width:H.info.width,height:H.info.height,mask:{enable:true},drag:true});})){for(const w of d)a[w.index]=w.data;f=true;}u.length&&(a=a.concat(u)),this.setAllRule(a);let b=`共 ${r.length} 条规则，新增 ${u.length} 条，覆盖 ${f?d.length:0} 条`;x.success(b),e?.();},s=r=>new Promise(async a=>{let u=m.toJSON(r);if(!Array.isArray(u)){p.error(u),x.error("导入失败，格式不符合（不是数组）",{consoleLogContent:true}),a(false);return}if(!u.length){x.error("导入失败，解析出的数据为空",{consoleLogContent:true}),a(false);return}await c(u),a(true);});h.on(i,"click",r=>{m.preventEvent(r),n.close();let a=h.createElement("input",{type:"file",accept:".json"});h.on(a,["propertychange","input"],u=>{if(!a.files?.length)return;let d=a.files[0],f=new FileReader;f.onload=()=>{s(f.result);},f.readAsText(d,"UTF-8");}),a.click();}),h.on(o,"click",r=>{m.preventEvent(r),n.close();let a=E.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(f,b){f.close();}},ok:{text:"导入",callback:async(f,b)=>{let y=f.text;if(m.isNull(y)){x.error("请填入完整的url");return}let w=x.loading("正在获取配置..."),k=await j.get(y,{allowInterceptConfig:false});if(w.close(),!k.status){p.error(k),x.error("获取配置失败",{consoleLogContent:true});return}await s(k.data.responseText)&&f.close();}},cancel:{enable:false}},mask:{enable:true},drag:true,width:H.info.width,height:"auto"}),u=a.$shadowRoot.querySelector("input"),d=a.$shadowRoot.querySelector(".pops-prompt-btn-ok");h.on(u,["input","propertychange"],f=>{h.val(u)===""?h.attr(d,"disabled","true"):h.removeAttr(d,"disabled");}),h.listenKeyboard(u,"keydown",(f,b,y)=>{f==="Enter"&&y.length===0&&h.val(u)!==""&&m.dispatchEvent(d,"click");}),m.dispatchEvent(u,"input");}),h.on(l,"click",async r=>{m.preventEvent(r),n.close();let a=await m.getClipboardInfo();if(a.error!=null){x.error(a.error.toString());return}if(a.content.trim()===""){x.warning("获取到的剪贴板内容为空");return}await s(a.content);});}exportRules(e="rule.json"){let n=this.getAllRule(),i=new Blob([JSON.stringify(n,null,4)]),o=globalThis.URL.createObjectURL(i),l=document.createElement("a");l.href=o,l.download=e,l.click(),setTimeout(()=>{globalThis.URL.revokeObjectURL(o);},1500);}}class Je{option;constructor(e){this.option=e;}async showView(){let e=E.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist"></ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:true},btn:m.assign({ok:{callback:async()=>{await l();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
                ${E.config.cssText.panelCSS}
                
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
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),n=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");let i=e.$shadowRoot.querySelector(".rule-form-ulist"),o=await this.option.getView(await this.option.data());i.appendChild(o);const l=async()=>{(await this.option.onsubmit(n,await this.option.data())).success&&(e.close(),await this.option.dialogCloseCallBack(true));};}}class Qe{option;constructor(e){this.option=e;}showView(){let e=E.alert({title:{text:this.option.title,position:"center"},content:{text:`
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
            `}),n=e.$shadowRoot.querySelector(".filter-container"),i=document.createDocumentFragment();this.option.filterOption.forEach(o=>{let l=document.createElement("button");l.innerText=o.name;let c=async()=>{(await this.option.getAllRuleInfo()).forEach(async r=>{await o.filterCallBack(r.data)?h.show(r.$el,false):h.hide(r.$el,false);}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),e.close();};h.on(l,"click",async s=>{m.preventEvent(s),!(typeof o.callback=="function"&&!await o.callback(s,c))&&await c();}),i.appendChild(l);}),n.appendChild(i);}}class Ye{option;constructor(e){this.option=e;}async showView(e){let n=E.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:true},btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async l=>{this.showEditView(false,await this.option.getAddData(),n.$shadowRoot);}},close:{enable:true,callback(l){n.close();}},cancel:{enable:this.option?.bottomControls?.filter?.enable||false,type:"default",text:"过滤",callback:(l,c)=>{typeof this.option?.bottomControls?.filter?.callback=="function"&&this.option.bottomControls.filter.callback();let s=()=>Array.from(n.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),r=c.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");h.text(r).includes("取消")?(s().forEach(a=>{h.show(a,false);}),h.text(r,"过滤")):new Qe({title:this.option.bottomControls?.filter?.title??"过滤规则",filterOption:this.option.bottomControls?.filter?.option||[],execFilterCallBack(){h.text(r,"取消过滤");},getAllRuleInfo:()=>s().map(u=>({data:this.parseRuleItemElement(u).data,$el:u}))}).showView();}},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:l=>{let c=E.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async s=>{if(p.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){x.error("清理失败");return}else x.success("清理成功");await this.updateDeleteAllBtnText(n.$shadowRoot),this.clearContent(n.$shadowRoot),c.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
            ${E.config.cssText.panelCSS}
            
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
            `}),i=await this.option.data(),o=false;for(let l=0;l<i.length;l++){let c=i[l],s=await this.appendRuleItemElement(n.$shadowRoot,c);(typeof e=="function"?e(c):true)||(o=true,s.forEach(a=>{h.hide(a,false);}));}if(o){let l=n.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");h.text(l,"取消过滤");}}showEditView(e,n,i,o,l,c){let s=async a=>{if(a){if(typeof c=="function"){let u=await this.option.getData(n);c(u);}}else if(e||await this.option.deleteData(n),typeof l=="function"){let u=await this.option.getData(n);l(u);}};new Je({title:e?"编辑":"添加",data:()=>n,dialogCloseCallBack:s,getView:async a=>await this.option.itemControls.edit.getView(a,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async(a,u)=>{a.close(),await s(false);}},close:{callback:async(a,u)=>{a.close(),await s(false);}}},onsubmit:async(a,u)=>{let d=await this.option.itemControls.edit.onsubmit(a,e,u);return d.success?e?(x.success("修改成功"),i&&await this.updateRuleItemElement(d.data,o,i)):i&&await this.appendRuleItemElement(i,d.data):e&&p.error("修改失败"),d},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(e){let n=e.querySelector(".rule-view-container"),i=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:n,$deleteBtn:i}}parseRuleItemElement(e){let n=e.querySelector(".rule-controls-enable"),i=n.querySelector(".pops-panel-switch"),o=n.querySelector(".pops-panel-switch__input"),l=n.querySelector(".pops-panel-switch__core"),c=e.querySelector(".rule-controls-edit"),s=e.querySelector(".rule-controls-delete");return {$enable:n,$enableSwitch:i,$enableSwitchInput:o,$enableSwitchCore:l,$edit:c,$delete:s,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,n){let i=await this.option.getDataItemName(e),o=h.createElement("div",{className:"rule-item",innerHTML:`
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
					${E.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${E.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(o,"data-rule",e);let l="pops-panel-switch-is-checked";const{$enable:c,$enableSwitch:s,$enableSwitchCore:r,$enableSwitchInput:a,$delete:u,$edit:d}=this.parseRuleItemElement(o);return this.option.itemControls.enable.enable?(h.on(r,"click",async f=>{let b=false;s.classList.contains(l)?(s.classList.remove(l),b=false):(s.classList.add(l),b=true),a.checked=b,await this.option.itemControls.enable.callback(e,b);}),await this.option.itemControls.enable.getEnable(e)&&s.classList.add(l)):c.remove(),this.option.itemControls.edit.enable?h.on(d,"click",f=>{m.preventEvent(f),this.showEditView(true,e,n,o,b=>{e=null,e=b;});}):d.remove(),this.option.itemControls.delete.enable?h.on(u,"click",f=>{m.preventEvent(f);let b=E.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async y=>{p.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(x.success("成功删除该数据"),o.remove(),await this.updateDeleteAllBtnText(n),b.close()):x.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):u.remove(),o}async appendRuleItemElement(e,n){let{$container:i}=this.parseViewElement(e),o=[],l=Array.isArray(n)?n:[n];for(let c=0;c<l.length;c++){let s=l[c],r=await this.createRuleItemElement(s,e);i.appendChild(r),o.push(r);}return await this.updateDeleteAllBtnText(e),o}async updateRuleContaienrElement(e){this.clearContent(e);const{$container:n}=this.parseViewElement(e);let i=await this.option.data();await this.appendRuleItemElement(e,i),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,n,i){let o=await this.createRuleItemElement(e,i);n.after(o),n.remove();}clearContent(e){const{$container:n}=this.parseViewElement(e);h.html(n,"");}setDeleteBtnText(e,n,i=false){const{$deleteBtn:o}=this.parseViewElement(e);i?h.html(o,n):h.text(o,n);}async updateDeleteAllBtnText(e){let n=await this.option.data();this.setDeleteBtnText(e,`清空所有(${n.length})`);}}const et={__ajaxHooker:null,get ajaxHooker(){return this.__ajaxHooker==null&&(this.__ajaxHooker=m.ajaxHooker()),this.__ajaxHooker}};class tt{parseInfoDictData(e,n=false){let i=e?.note_card,o=e.id,l=i.display_title,c=!!i?.interact_info?.liked,s=0,r=e?.note_card?.interact_info?.liked_count;typeof r=="string"&&(s=parseInt(r),isNaN(s)&&(s=0));let a=i?.user?.nick_name||i?.user?.nickname,u=i?.user?.user_id,d=i?.type==="video",f=i?.video?.capa?.duration||0;return {articleId:o,display_title:l,isLike:c,liked_count:s,nick_name:a,user_id:u,isVideo:d,videoDuration:f}}checkFilterWithRule(e){if(e.infoValue==null||e.ruleValue==null)return  false;if(typeof e.infoValue=="string"){if(e.infoValue.match(e.ruleValue))return  true}else if(typeof e.infoValue=="object"){if(Array.isArray(e.infoValue)&&e.infoValue.find(i=>typeof i=="string"&&e.ruleValue!=null?!!i.match(e.ruleValue):false))return  true}else if(typeof e.infoValue=="number"){if(typeof e.ruleValue=="string"){let n=e.ruleValue.trim(),i=n.match(/(\d+)/);if(!i)return p.warn("过滤器-解析比较大小的数字失败: ",e),false;let o=Number(i[1]);if(n.startsWith(">")){if(n.startsWith(">=")){if(e.infoValue>=o)return  true}else if(e.infoValue>o)return  true}else if(n.startsWith("<")){if(n.startsWith("<=")){if(e.infoValue<=o)return  true}else if(e.infoValue<o)return  true}else if(n.startsWith("=")){if(e.infoValue===o)return  true}else return p.warn("视频过滤器-未经允许的比较符号: ",e),false}}else if(typeof e.infoValue=="boolean"&&typeof e.ruleValue=="string"){let n=e.ruleValue.trim();return e.infoValue.toString()===n}return  false}checkInfoIsFilter(e,n){let i=this.parseInfoDictData(n),o=false,l=null;e:for(let c=0;c<e.length;c++){const s=e[c],r=Array.isArray(s.data.ruleName)?s.data.ruleName:[s.data.ruleName];for(let a=0;a<r.length;a++){const u=r[a];if(!Reflect.has(i,u))continue;let d=u,f=i[d],b={infoKey:d,infoValue:f,ruleKey:s.data.ruleName,ruleValue:s.data.ruleValue};if(o=this.checkFilterWithRule(b),o)if(Array.isArray(s.dynamicData)&&s.dynamicData.length){let y=[];for(let w=0;w<s.dynamicData.length;w++){const k=s.dynamicData[w];let $=k.ruleName,O=i[$],_={infoKey:$,infoValue:O,ruleKey:k.ruleName,ruleValue:k.ruleValue};y.push(_);let A=this.checkFilterWithRule(_);if(o=o&&A,!o)break}o&&p.success([`视频过滤器-多组 ==> ${s.name}`,i,b,y,n,s]);}else p.success([`视频过滤器 ==> ${s.name}`,i,b,n,s]);if(o){l=s;break e}}}return {isFilter:o,matchedFilterOption:l,transformInfo:i,info:n}}removeArticle(...e){if(e.length===1){let n=e[0];n!=null&&n instanceof Element&&n.remove();}else if(e.length===2){let n=e[0],i=e[1];if(typeof i=="number"){let o=n[i];o!=null&&o instanceof Element&&o.remove(),n.splice(i,1);}}}}const ee={$key:{ENABLE_KEY:"shieldVideo-exec-network-enable"},$data:{isFilterAwemeInfoList:new B.Dictionary,articleInfoMap:new B.Dictionary,__videoFilterRuleStorage:null,get videoFilterRuleStorage(){return this.__videoFilterRuleStorage==null&&(this.__videoFilterRuleStorage=new Ze({STORAGE_API_KEY:"xhs-article-filter-rule"})),this.__videoFilterRuleStorage},get isReverse(){return g.getValue("xhs-article-filter-only-show-filtered-video")}},init(){this.execFilter();},execFilter(){g.execMenuOnce(this.$key.ENABLE_KEY,async()=>{p.info("执行笔记过滤器");let t=new tt,e=o=>{if(this.$data.isReverse&&(o.isFilter=!o.isFilter,typeof o.transformInfo.articleId=="string"&&o.matchedFilterOption)){let l=this.$data.isFilterAwemeInfoList.get(o.transformInfo.articleId)||[];l.push(o.matchedFilterOption),this.$data.isFilterAwemeInfoList.set(o.transformInfo.articleId,l);}typeof o.transformInfo.articleId=="string"&&this.$data.articleInfoMap.set(o.transformInfo.articleId,{articleInfo:o.info,transformArticleInfo:o.transformInfo});},n=o=>{if(!g.getValue(this.$key.ENABLE_KEY))return [];let l=this.$data.videoFilterRuleStorage.getAllRule();if(!l.length)return [];let c=Array.isArray(o)?o:[o];return l.filter(r=>r.enable&&(r.data.scope.includes("all")||Array.from(c).findIndex(a=>r.data.scope.includes(a))!==-1))},i=(o,l)=>{l.response=c=>{let s=n(o);if(!s.length)return;let r=m.toJSON(c.responseText),a=r?.data?.items;if(Array.isArray(a)){for(let u=0;u<a.length;u++){let d=a[u]||{},f=t.checkInfoIsFilter(s,d);e(f),f.isFilter&&t.removeArticle(a,u--);}c.responseText=JSON.stringify(r);}};};et.ajaxHooker.hook(o=>{let l=T.fixUrl(o.url);new URL(l).pathname.startsWith("/api/sns/web/v1/homefeed")&&i("xhr-explore",o);});});},getTemplateData(){return {uuid:m.generateUUID(),enable:true,name:"",data:{scope:[],ruleName:"display_title",ruleValue:"",remarks:""},dynamicData:[]}},showView(){this.getRuleViewInstance().showView();},getRuleViewInstance(){const t=this;let e=E.config.PanelHandlerComponents();function n(o){return {get(l,c){return o[l]??c},set(l,c){o[l]=c;}}}return new Ye({title:"笔记过滤器",data:()=>this.$data.videoFilterRuleStorage.getAllRule(),getAddData:()=>this.getTemplateData(),getDataItemName:o=>o.name,updateData:o=>this.$data.videoFilterRuleStorage.setRule(o),deleteData:o=>this.$data.videoFilterRuleStorage.deleteRule(o),getData:o=>this.$data.videoFilterRuleStorage.getAllRule().find(s=>s.uuid===o.uuid)??o,itemControls:{enable:{enable:true,getEnable(o){return o.enable},callback:(o,l)=>{o.enable=l,this.$data.videoFilterRuleStorage.setRule(o);}},edit:{enable:true,getView:(o,l)=>{let c=document.createDocumentFragment();l||(o=this.getTemplateData());let s=C("启用","enable",true);Reflect.set(s.props,S,n(o));let r=e.createSectionContainerItem_switch(s),a=Xe("规则名称","name","","",void 0,"必填");Reflect.set(a.props,S,n(o));let u=e.createSectionContainerItem_input(a),d=ve("作用域","scope",[],[{text:"所有",value:"all"},{text:"发现",value:"xhr-explore"}].map(V=>({...V,value:V.value})),void 0,"选择需要在xxx上生效的作用域");Reflect.set(d.props,S,n(o.data));let f=e.createSectionContainerItem_select_multiple_new(d),b=["display_title","isLike","liked_count","nick_name","user_id","isVideo","videoDuration"],y=V=>{let R=Array.isArray(V.ruleName)?V.ruleName:[V.ruleName],I=ve("属性名","ruleName",R,b.map(z=>({text:z,value:z})),void 0,"选择需要的属性名 ");Reflect.set(I.props,S,n(V));let G=e.createSectionContainerItem_select_multiple_new(I),Z=_e("属性值","ruleValue","","如果是字符串，可正则，注意转义");Reflect.set(Z.props,S,n(V));let ae=e.createSectionContainerItem_textarea(Z),J=_e("备注","remarks","","");Reflect.set(J.props,S,n(V));let se=e.createSectionContainerItem_textarea(J);return {$ruleName:G,$ruleValue:ae,$remarks:se}},w=h.createElement("div",{className:"rule-form-ulist-dynamic",innerHTML:`
							<div class="rule-form-ulist-dynamic__inner">

							</div>
							<div class="pops-panel-button pops-panel-button-no-icon">
								<button class="pops-panel-button_inner" type="default">
									<i class="pops-bottom-icon" is-loading="false"></i>
									<span class="pops-panel-button-text">添加额外属性</span>
								</button>
							</div>
							`}),k=w.querySelector(".rule-form-ulist-dynamic__inner"),$=w.querySelector(".pops-panel-button"),O=(V={ruleName:[],ruleValue:"",remarks:""})=>{let R=h.createElement("div",{className:"rule-form-ulist-dynamic__inner-container",innerHTML:`
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
								`}),I=R.querySelector(".dynamic-control-delete");h.on(I,"click",se=>{if(m.preventEvent(se),R.remove(),Array.isArray(o.dynamicData)){let z=o.dynamicData.findIndex(Me=>Me==V);z!==-1&&o.dynamicData.splice(z,1);}});let G=R.querySelector(".dynamic-forms"),{$ruleName:Z,$ruleValue:ae,$remarks:J}=y(V);G.appendChild(Z),G.appendChild(ae),G.appendChild(J),k.appendChild(R);};if(h.on($,"click",V=>{m.preventEvent(V),O();}),Array.isArray(o.dynamicData))for(let V=0;V<o.dynamicData.length;V++){const R=o.dynamicData[V];O(R);}let{$ruleName:_,$ruleValue:A,$remarks:L}=y(o.data);return c.append(r,u,f,_,A,L,w),c},onsubmit:(o,l,c)=>{let s=o.querySelectorAll(".rule-form-ulist > li"),r=this.getTemplateData();return l&&(r.uuid=c.uuid),s.forEach(a=>{let u=Reflect.get(a,"__formConfig__");if(!u)return;let d=Reflect.get(u,"attributes");if(!d)return;let f=Reflect.get(a,S),b=Reflect.get(d,D),y=Reflect.get(d,N),w=f.get(b,y);Reflect.has(r,b)?Reflect.set(r,b,w):Reflect.has(r.data,b)?Reflect.set(r.data,b,w):p.error(`${b}不在数据中`);}),o.querySelectorAll(".rule-form-ulist-dynamic__inner-container").forEach(a=>{let u={};a.querySelectorAll(".dynamic-forms > li").forEach(d=>{let f=Reflect.get(d,"__formConfig__");if(!f)return;let b=Reflect.get(f,"attributes");if(!b)return;let y=Reflect.get(d,S),w=Reflect.get(b,D),k=Reflect.get(b,N),$=y.get(w,k);Reflect.set(u,w,$);}),r.dynamicData.push(u);}),r.name.trim()===""?(x.error("规则名称不能为空"),{success:false,data:r}):r.data.scope.length===0?(x.error("请选择作用域"),{success:false,data:r}):r.data.ruleName.length===0?(x.error("请选择属性名"),{success:false,data:r}):r.data.ruleValue.trim()===""?(x.error("属性值不能为空"),{success:false,data:r}):l?{success:t.$data.videoFilterRuleStorage.setRule(r),data:r}:{success:t.$data.videoFilterRuleStorage.addRule(r),data:r}},style:`
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
                    `,width:()=>window.innerWidth>700?"700px":"88vw"},delete:{enable:true,deleteCallBack:o=>t.$data.videoFilterRuleStorage.deleteRule(o)}},bottomControls:{filter:{enable:true,option:[{name:"过滤-已启用",filterCallBack(o){return o.enable}},{name:"过滤-未启用",filterCallBack(o){return !o.enable}}]},clear:{enable:true,callback:()=>{t.$data.videoFilterRuleStorage.clearAllRule();}}}})}},te={init(){ee.init(),g.execMenuOnce("pc-xhs-hook-vue",()=>{de.hookVue();}),g.execMenuOnce("pc-xhs-allowCopy",()=>{te.allowPCCopy();}),g.execMenuOnce("pc-xhs-open-blank-article",()=>{te.openBlankArticle();}),ze.init(),g.execMenuOnce("pc-xhs-article-showPubsliushTime",()=>{we.transformPublishTime();}),ue.isArticle()&&(p.info("Router: 笔记页面"),we.init());},allowPCCopy(){p.success("允许复制文字"),h.on(v,"copy",void 0,function(t){m.preventEvent(t);let e=v.getSelection();return e?m.setClip(e.toString()):p.error("未选中任何内容"),false},{capture:true});},openBlankArticle(){p.success("新标签页打开文章"),h.on(document,"click",".feeds-container .note-item",function(t){m.preventEvent(t);let i=t.target.querySelector("a.cover[href]")?.href;if(i){p.info("跳转文章: "+i);let o=new URL(i);o.pathname=o.pathname.replace(/^\/user\/profile\/[a-z0-9A-Z]+\//i,"/discovery/item/"),i=o.toString(),window.open(i,"_blank");}else x.error("未找到文章链接");},{capture:true});}},ne=function(t,e,n,i,o,l){let c=[];typeof i=="function"?c=i():c=i;let s={text:t,type:"select",description:l,attributes:{},props:{},getValue(){return this.props[S].get(e,n)},callback(r,a,u){let d=a;if(p.info(`选择：${u}`),typeof o=="function"&&o(r,d,u))return;this.props[S].set(e,d);},data:c};return Reflect.set(s.attributes,D,e),Reflect.set(s.attributes,N,n),W.initComponentsStorageApi("select",s,{get(r,a){return g.getValue(r,a)},set(r,a){g.setValue(r,a);}}),s},ce=function(t,e,n,i,o,l,c,s,r,a){let u={text:t,type:"button",attributes:{},props:{},description:e,buttonIcon:i,buttonIsRightIcon:o,buttonIconIsLoading:l,buttonType:c,buttonText:n,callback(d){typeof s=="function"&&s(d);},afterAddToUListCallBack:r};return Reflect.set(u.attributes,Ve,()=>{u.disable=false;}),u},nt={id:"xhs-panel-config-common",title:"通用",forms:[{type:"forms",text:"",forms:[{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[ne("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(t,e,n)=>{p.info("设置当前Qmsg弹出位置"+n);},"Toast显示在页面九宫格的位置"),ne("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),C("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("允许复制","pc-xhs-allowCopy",true,void 0,"可以选择文字并复制"),C("新标签页打开文章","pc-xhs-open-blank-article",false,void 0,"点击文章不会在本页展开，会打开新标签页")]}]},{text:"搜索",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("新标签页打开-搜索按钮","pc-xhs-search-open-blank-btn",false,void 0,"点击右边的搜索按钮直接新标签页打开搜索内容"),C("新标签页打开-回车键","pc-xhs-search-open-blank-keyboard-enter",false,void 0,"按下回车键直接新标签页打开搜索内容")]}]},{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("【屏蔽】广告","pc-xhs-shieldAd",true,void 0,"屏蔽元素"),C("【屏蔽】登录弹窗","pc-xhs-shield-login-dialog",true,void 0,"屏蔽会自动弹出的登录弹窗"),C("【屏蔽】选择文字弹出的搜索提示","pc-xhs-shield-select-text-search-position",false,void 0,"屏蔽元素"),C("【屏蔽】顶部工具栏","pc-xhs-shield-topToolbar",false,void 0,"屏蔽元素")]}]},{type:"deepMenu",text:"笔记过滤器",forms:[{text:'<a href="https://greasyfork.org/zh-CN/scripts/483960-%E5%B0%8F%E7%BA%A2%E4%B9%A6%E4%BC%98%E5%8C%96#:~:text=%E5%B1%8F%E8%94%BD%E8%A7%84%E5%88%99" target="_blank">点击查看规则</a>',type:"forms",forms:[C("启用","shieldVideo-exec-network-enable",true,void 0,"开启后以下功能才会生效"),C("仅显示被过滤的笔记","xhs-article-filter-only-show-filtered-video",false,void 0,"只会显示过滤规则命中的笔记"),ce("笔记过滤规则","可过滤笔记","自定义",void 0,false,false,"primary",()=>{ee.showView();})]},{type:"forms",text:"",forms:[ce("数据导入","导入自定义规则数据","导入",void 0,false,false,"primary",()=>{ee.$data.videoFilterRuleStorage.importRules();}),ce("数据导出","导出自定义规则数据","导出",void 0,false,false,"primary",()=>{ee.$data.videoFilterRuleStorage.exportRules($e+"-视频过滤规则.json");})]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("劫持Vue","pc-xhs-hook-vue",true,void 0,"恢复__vue__属性")]}]}]}]},it=function(t,e,n,i,o,l,c,s,r){let a={text:t,type:"slider",description:s,attributes:{},props:{},getValue(){return this.props[S].get(e,n)},getToolTipContent(u){return typeof c=="function"?c(u):`${u}`},callback(u,d){if(typeof l=="function"&&l(u,d))return;this.props[S].set(e,d);},min:i,max:o,step:r};return Reflect.set(a.attributes,D,e),Reflect.set(a.attributes,N,n),W.initComponentsStorageApi("slider",a,{get(u,d){return g.getValue(u,d)},set(u,d){g.setValue(u,d);}}),a},ot={id:"xhs-panel-config-article",title:"笔记",forms:[{type:"forms",text:"功能",forms:[C("显示发布、修改的绝对时间","pc-xhs-article-showPubsliushTime",false,void 0,"注：需要开启<code>通用</code>-<code>劫持/拦截</code>-<code>劫持Vue</code>")]},{text:"笔记宽屏",type:"forms",forms:[C("启用","pc-xhs-article-fullWidth",false,void 0,`让笔记占据宽屏，当页面可视宽度>=960px时才会触发该功能，当前页面可视宽度: ${window.innerWidth}px`),it("占据范围","pc-xhs-article-fullWidth-widthSize",90,30,100,(t,e)=>{let n=document.querySelector("#noteContainer");if(!n){p.error("未找到笔记容器");return}n.style.width=`${e}vw`;},t=>`${t}%，默认：90%`,"调整笔记页面占据的页面范围")]}]},lt={id:"little-red-book-panel-config-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[ne("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(t,e,n)=>{p.info("设置当前Qmsg弹出位置"+n);},"Toast显示在页面九宫格的位置"),ne("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),C("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"forms",forms:[{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("【屏蔽】广告","little-red-book-shieldAd",true,void 0,"如：App内打开"),C("【屏蔽】底部搜索发现","little-red-book-shieldBottomSearchFind",true,void 0,"建议开启"),C("【屏蔽】底部工具栏","little-red-book-shieldBottomToorBar",true,void 0,"建议开启")]}]}]}]},rt={id:"little-red-book-panel-config-home",title:"主页",forms:[{text:"",type:"forms",forms:[{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("劫持点击事件","little-red-book-repariClick",true,void 0,"可阻止点击跳转至下载页面")]}]}]}]},at={id:"little-red-book-panel-config-note",title:"笔记",forms:[{text:"",type:"forms",forms:[{text:"视频笔记",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("优化视频描述","little-red-book-optimizeVideoNoteDesc",true,void 0,"让视频描述可以滚动显示更多"),C("【屏蔽】作者热门笔记","little-red-book-shieldAuthorHotNote",true,void 0,"建议开启"),C("【屏蔽】热门推荐","little-red-book-shieldHotRecommendNote",true,void 0,"建议开启")]}]}]},{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("优化评论浏览","little-red-book-optimizeCommentBrowsing",true,void 0,"目前仅可加载部分评论"),C("优化图片浏览","little-red-book-optimizeImageBrowsing",true,void 0,"更方便的浏览图片"),C("允许复制","little-red-book-allowCopy",true,void 0,"可以复制笔记的内容")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("劫持webpack-弹窗","little-red-book-hijack-webpack-mask",true,void 0,"如：打开App弹窗、登录弹窗"),C("劫持webpack-唤醒App","little-red-book-hijack-webpack-scheme",true,void 0,"禁止跳转商店小红书详情页/小红书")]}]}]}]};M(`
.qmsg svg.animate-turn {
    fill: none;
}
`);q.addContentConfig([nt,ot]);q.addContentConfig([lt,rt,at]);const Ee=re.getMenuOption();Ee.text="⚙ PC-设置";re.updateMenuOption(Ee);re.addMenuOption({key:"show_mobile_setting",text:"⚙ 移动端-设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{g.showPanel(q.getConfig(1),`${$e}-移动端设置`);}});g.init();let Ie=m.isPhone(),X="change_env_set",P=oe(X);Se.add({key:X,text:`⚙ 自动: ${Ie?"移动端":"PC端"}`,autoReload:false,isStoreValue:false,showText(t){return P==null?t:t+` 手动: ${P==1?"移动端":P==2?"PC端":"未知"}`},callback:()=>{let t=[0,1,2],e=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!e)return;let n=parseInt(e);if(isNaN(n)){x.error("输入的不是规范的数字");return}if(!t.includes(n)){x.error("输入的值必须是0或1或2");return}n==0?he(X):le(X,n);}});P!=null?(p.info(`手动判定为${P===1?"移动端":"PC端"}`),P==1?me.init():P==2?te.init():(x.error("意外，手动判定的值不在范围内"),he(X))):Ie?(p.info("自动判定为移动端"),me.init()):(p.info("自动判定为PC端"),te.init());

})(Qmsg, DOMUtils, Utils, pops, Viewer);