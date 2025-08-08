// ==UserScript==
// @name         CSDN优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.8.8
// @author       WhiteSevs
// @description  支持PC和手机端、屏蔽广告、优化浏览体验、重定向拦截的Url、自动展开全文、自动展开代码块、全文居中、允许复制内容、去除复制内容的小尾巴、自定义屏蔽元素等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.csdn.net/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.7.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.5.11/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.3.0/dist/index.umd.js
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

(function (w, U, L, Q) {
	'use strict';

	var X=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,ie=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,ee=typeof GM_getValue<"u"?GM_getValue:void 0,P=typeof GM_info<"u"?GM_info:void 0,Ce=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,te=typeof GM_setValue<"u"?GM_setValue:void 0,we=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,ye=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,x=typeof unsafeWindow<"u"?unsafeWindow:void 0,ve=window;const p={waitRemove(...e){e.forEach(t=>{typeof t=="string"&&f.waitNodeList(t).then(n=>{n.forEach(r=>r.remove());});});},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),b(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){let t=typeof ie=="function"?ie(e.keyName):null;typeof t=="string"&&t?b(t):p.loadStyleLink(e.url);},async loadStyleLink(e){let t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=e,U.ready(()=>{document.head.appendChild(t);});},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(n=>{t.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.match(/^http(s|):\/\//i)?e:e.startsWith("//")?(e.startsWith("///")||(e=window.location.protocol+e),e):(e.startsWith("/")||(e+="/"),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;let t=new URL(e);return t.protocol="https:",t.toString()},lockScroll(...e){let t=document.createElement("style");t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...e||[]);return n.forEach(r=>{r.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(t),{recovery(){n.forEach(r=>{r.classList.remove("pops-overflow-hidden-important");}),t.remove();}}},async getClipboardText(){function e(r){navigator.clipboard.readText().then(l=>{r(l);}).catch(l=>{o.error("读取剪贴板内容失败👉",l),r("");});}function t(r){navigator.permissions.query({name:"clipboard-read"}).then(l=>{e(r);}).catch(l=>{o.error("申请剪贴板权限失败，尝试直接读取👉",l.message??l.name??l.stack),e(r);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(r=>{if(!n()){r("");return}document.hasFocus()?t(r):window.addEventListener("focus",()=>{t(r);},{once:true});})},escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(e,t,n=5e3){let r,l=n-t,a=t,c=async h=>{let d=await e(h);if(typeof d=="boolean"&&!d||h){f.workerClearTimeout(r);return}if(a+=t,a>l){c(true);return}r=f.workerSetTimeout(()=>{c(false);},t);};c(false);}},$={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},f=L.noConflict(),v=U.noConflict(),ne=Q,o=new f.Log(P,x.console||ve.console);let le=P?.script?.name||void 0;Q.config.Utils.AnyTouch();const de=false;o.config({debug:de,logMaxCount:1e3,autoClearConsole:true,tag:true});w.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(e){const t=e.getSetting().type;if(t==="loading")return  false;const n=e.getSetting().content;return t==="warning"?o.warn(n):t==="error"?o.error(n):o.info(n),true},get position(){return i.getValue($.qmsg_config_position.key,$.qmsg_config_position.defaultValue)},get maxNums(){return i.getValue($.qmsg_config_maxnums.key,$.qmsg_config_maxnums.defaultValue)},get showReverse(){return i.getValue($.qmsg_config_showreverse.key,$.qmsg_config_showreverse.defaultValue)},get zIndex(){let e=L.getMaxZIndex(),t=Q.config.InstanceUtils.getPopsMaxZIndex().zIndex;return L.getMaxValue(e,t)+100}});ne.GlobalConfig.setGlobalConfig({zIndex:()=>{let e=L.getMaxZIndex(void 0,void 0,n=>{if(n?.classList?.contains("qmsg-shadow-container")||n?.closest("qmsg")&&n.getRootNode()instanceof ShadowRoot)return  false}),t=Q.config.InstanceUtils.getPopsMaxZIndex().zIndex;return L.getMaxValue(e,t)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const ue=new f.GM_Menu({GM_getValue:ee,GM_setValue:te,GM_registerMenuCommand:Ce,GM_unregisterMenuCommand:we}),N=new f.Httpx({xmlHttpRequest:ye,logDetails:de});N.interceptors.request.use(e=>e);N.interceptors.response.use(void 0,e=>(o.error("拦截器-请求错误",e),e.type==="onabort"?w.warning("请求取消",{consoleLogContent:true}):e.type==="onerror"?w.error("请求异常",{consoleLogContent:true}):e.type==="ontimeout"?w.error("请求超时",{consoleLogContent:true}):w.error("其它错误",{consoleLogContent:true}),e));x.Object.defineProperty,x.Function.prototype.apply,x.Function.prototype.call,x.Element.prototype.appendChild,x.setTimeout;const b=f.addStyle.bind(f),me=U.selector.bind(U),Se=U.selectorAll.bind(U);new f.GM_Cookie;const pe="GM_Panel",ke="data-init",H="data-key",j="data-default-value",_e="data-init-more-value",I="data-storage-api",Z={setting:{get width(){return window.innerWidth<550?"88vw":window.innerWidth<700?"550px":"700px"},get height(){return window.innerHeight<450?"70vh":window.innerHeight<550?"450px":"550px"}}};class Me{storageKey;listenerData;constructor(t){if(typeof t=="string"){let n=t.trim();if(n=="")throw new Error("key参数不能为空字符串");this.storageKey=n;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new L.Dictionary;}getLocalValue(){let t=ee(this.storageKey);return t==null&&(t={},this.setLocalValue(t)),t}setLocalValue(t){te(this.storageKey,t);}set(t,n){let r=this.get(t),l=this.getLocalValue();Reflect.set(l,t,n),this.setLocalValue(l),this.triggerValueChangeListener(t,r,n);}get(t,n){let r=this.getLocalValue();return Reflect.get(r,t)??n}getAll(){return this.getLocalValue()}delete(t){let n=this.get(t),r=this.getLocalValue();Reflect.deleteProperty(r,t),this.setLocalValue(r),this.triggerValueChangeListener(t,n,void 0);}has(t){let n=this.getLocalValue();return Reflect.has(n,t)}keys(){let t=this.getLocalValue();return Reflect.ownKeys(t)}values(){let t=this.getLocalValue();return Reflect.ownKeys(t).map(n=>Reflect.get(t,n))}clear(){X(this.storageKey);}addValueChangeListener(t,n){let r=Math.random(),l=this.listenerData.get(t)||[];return l.push({id:r,key:t,callback:n}),this.listenerData.set(t,l),r}removeValueChangeListener(t){let n=false;for(const[r,l]of this.listenerData.entries()){for(let a=0;a<l.length;a++){const c=l[a];(typeof t=="string"&&c.key===t||typeof t=="number"&&c.id===t)&&(l.splice(a,1),a--,n=true);}this.listenerData.set(r,l);}return n}triggerValueChangeListener(t,n,r){if(!this.listenerData.has(t))return;let l=this.listenerData.get(t);for(let a=0;a<l.length;a++){const c=l[a];if(typeof c.callback=="function"){let h=this.get(t),d,u;typeof n<"u"&&arguments.length>=2?u=n:u=h,typeof r<"u"&&arguments.length>2?d=r:d=h,c.callback(t,u,d);}}}}const V=new Me(pe),O={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new f.Dictionary),this.__contentConfig}},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]},getDefaultBottomContentConfig(){return [{id:"script-version",title:`版本：${P?.script?.version||"未知"}`,isBottom:true,forms:[],clickFirstCallback(e,t,n){let r=P?.script?.supportURL||P?.script?.namespace;return typeof r=="string"&&f.isNotNull(r)&&window.open(r,"_blank"),false}}]}},oe={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{i.showPanel(O.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){i.isTopWindow()&&ue.add(this.$data.menuOption);},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e);},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(t=>{let n=this.$data.menuOption.findIndex(r=>r.key===t.key);n!==-1&&(this.$data.menuOption[n]=t);});},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1);}},i={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__onceExecData:null,__panelConfig:{},$panel:null,get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new f.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new f.Dictionary),this.__onceExecMenuData},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new f.Dictionary),this.__onceExecData},get scriptName(){return le},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e;},key:pe,attributeKeyName:H,attributeDefaultValueName:j},init(){this.initContentDefaultValue(),oe.init();},isTopWindow(){return x.top===x.self},initContentDefaultValue(){const e=r=>{if(!r.attributes||r.type==="button"||r.type==="forms"||r.type==="deepMenu")return;let l=new Map,a=r.attributes[H];if(a!=null){const d=r.attributes[j];l.set(a,d);}let c=r.attributes[_e];if(typeof c=="object"&&c&&Object.keys(c).forEach(d=>{l.set(d,c[d]);}),!l.size){o.warn(["请先配置键",r]);return}let h=r.attributes[ke];if(typeof h=="function"){let d=h();if(typeof d=="boolean"&&!d)return}if(r.type==="switch"){let d=typeof r.disabled=="function"?r.disabled():r.disabled;typeof d=="boolean"&&d&&this.$data.contentConfigInitDisabledKeys.push(...l.keys());}for(const[d,u]of l.entries())this.setDefaultValue(d,u);},t=r=>{for(let l=0;l<r.length;l++){let a=r[l];e(a);let c=a.forms;c&&Array.isArray(c)&&t(c);}},n=[...O.getAllContentConfig()];for(let r=0;r<n.length;r++){let l=n[r];if(!l.forms)continue;const a=l.forms;a&&Array.isArray(a)&&t(a);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&o.warn("请检查该key(已存在): "+e),this.$data.contentConfigInitDefaultValue.set(e,t);},setValue(e,t){V.set(e,t);},getValue(e,t){let n=V.get(e);return n??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){V.delete(e);},hasKey(e){return V.has(e)},addValueChangeListener(e,t){return V.addValueChangeListener(e,(r,l,a)=>{t(e,a,l);})},removeValueChangeListener(e){V.removeValueChangeListener(e);},triggerMenuValueChange(e,t,n){V.triggerValueChangeListener(e,n,t);},deleteExecMenuOnce(e){return this.$data.onceExecMenuData.delete(e),V.removeValueChangeListener(e)},deleteOnceExec(e){this.$data.onceExecData.delete(e);},exec(e,t,n,r=true){const l=this;let a;typeof e=="string"||Array.isArray(e)?a=()=>e:a=e;let c=false,h=a(),d=[];Array.isArray(h)?(c=true,d=h):d.push(h);let u=d.find(C=>!this.$data.contentConfigInitDefaultValue.has(C));if(u){o.warn(`${u} 键不存在`);return}let m=JSON.stringify(d);if(r){if(this.$data.onceExecMenuData.has(m))return;this.$data.onceExecMenuData.set(m,1);}let g=[],_=[],T=(C,S)=>{let M=[];Array.isArray(S)||(S=[S]),S.forEach(k=>{if(k!=null&&k instanceof HTMLStyleElement){M.push(k);return}}),g=g.concat(M);},W=C=>this.getValue(C),B=()=>{for(let C=0;C<g.length;C++)g[C].remove(),g.splice(C,1),C--;},K=()=>{let C=false;return typeof n=="function"?C=n(d):C=d.every(S=>W(S)),C},q=C=>{let S=K(),M=[];if(S){let k=d.map(A=>this.getValue(A)),R=t({value:c?k:k[0],addStyleElement:(...A)=>T(true,...A)});Array.isArray(R)||(R=[R]),R.forEach(A=>{if(A!=null&&A instanceof HTMLStyleElement){M.push(A);return}});}B(),g=[...M];};return r&&d.forEach(C=>{let S=this.addValueChangeListener(C,(M,k,R)=>{q();});_.push(S);}),q(),{clear(){this.clearStoreStyleElements(),this.removeValueChangeListener(),r&&l.$data.onceExecMenuData.delete(m);},clearStoreStyleElements:()=>B(),removeValueChangeListener:()=>{_.forEach(C=>{this.removeValueChangeListener(C);});}}},execMenu(e,t,n=false,r=false){return this.exec(e,l=>t(l),l=>l.every(c=>{let h=!!this.getValue(c);return i.$data.contentConfigInitDisabledKeys.includes(c)&&(h=false,o.warn(`.execMenu${r?"Once":""} ${c} 被禁用`)),n&&(h=!h),h}),r)},execMenuOnce(e,t,n=false){return this.execMenu(e,t,n,true)},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(e)||(t(),this.$data.onceExecData.set(e,1));},showPanel(e,t=`${le}-设置`,n=false){let r=e.findIndex(a=>(typeof a.isBottom=="function"?a.isBottom():!!a.isBottom)&&a.id==="script-version")!==-1;!n&&!r&&e.push(...O.getDefaultBottomContentConfig());let l=ne.panel({title:{text:t,position:"center",html:false,style:""},content:e,btn:{close:{enable:true,callback:(a,c)=>{a.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(a,c)=>{a(),this.$data.$panel=null;}},width:Z.setting.width,height:Z.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=l;}},y={isHuaWeiCloudBlog(){return !!/huaweicloud.csdn.net/i.test(window.location.origin)},isBlog(){return !!/blog.csdn.net/i.test(window.location.origin)},isBlogArticle(){return this.isBlog()&&window.location.pathname.includes("/article/details/")},isWenKu(){return !!/wenku.csdn.net/i.test(window.location.origin)},isLink(){return window.location.hostname==="link.csdn.net"},isSo(){return window.location.hostname==="so.csdn.net"},isSoCKnow(){return this.isSo()&&(window.location.pathname.startsWith("/chat")||window.location.pathname.startsWith("/so/ai"))},isDownload(){return window.location.hostname==="download.csdn.net"}},Te=`/* 底部免费抽xxx奖品广告 */\r
div.siderbar-box,\r
/* 华为开发者联盟加入社区 */\r
div.user-desc.user-desc-fix {\r
  display: none !important;\r
}\r
`,fe={init(){b(Te),i.execMenuOnce("csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",()=>this.shieldCloudDeveloperTaskChallengeEvent()),i.execMenuOnce("csdn-hua-wei-cloud-autoExpandContent",()=>this.autoExpandContent()),i.execMenuOnce("csdn-hua-wei-cloud-shieldLeftFloatingButton",()=>this.shieldLeftFloatingButton()),i.execMenuOnce("csdn-hua-wei-cloud-blockRightColumn",()=>this.blockRightColumn()),i.execMenuOnce("csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",()=>this.blockRecommendedContentAtTheBottom()),i.execMenuOnce("csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",()=>this.shieldTheBottomForMoreRecommendations());},autoExpandContent(){return o.info("自动展开全文"),[p.addBlockCSS("div.article-show-more"),b(`
			/* 自动展开全文 */
			.main-content .user-article{
				height: auto !important;
				overflow: auto !important;
			}
			`)]},shieldCloudDeveloperTaskChallengeEvent(){return o.info("屏蔽云开发者任务挑战活动"),p.addBlockCSS(".luck-draw-modal-warp")},shieldLeftFloatingButton(){return o.info("屏蔽左侧悬浮按钮，包括当前阅读量、点赞按钮、评论按钮、分享按钮"),p.addBlockCSS("div.toolbar-wrapper.article-interact-bar")},blockRightColumn(){return o.info("屏蔽右侧栏，包括相关产品-活动日历-运营活动-热门标签"),p.addBlockCSS("div.page-home-right.dp-aside-right")},blockRecommendedContentAtTheBottom(){return o.info("屏蔽底部推荐内容"),p.addBlockCSS("div.recommend-card-box")},shieldTheBottomForMoreRecommendations(){return o.info("屏蔽底部更多推荐"),p.addBlockCSS("div.more-article")}},Be=`#mainBox main {\r
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
	.nodata\r
		.container\r
		main\r
		.more-toolbox-new\r
		.toolbox-left\r
		.profile-box\r
		.profile-name {\r
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
`,Re={init(){i.exec("csdn-blog-rightToolbarEnable",()=>this.shieldRightToolbar(),e=>!i.getValue(e[0]),true),i.execMenuOnce("csdn-blog-rightToolbarCreativeCenter",()=>this.shieldCreativeCenter()),i.execMenuOnce("csdn-blog-rightToolbarShowOrSidebar",()=>this.shieldShowOrSidebar()),i.execMenuOnce("csdn-blog-rightToolbarBeginnerGuidance",()=>this.shieldBeginnerGuidance()),i.execMenuOnce("csdn-blog-rightToolbarCustomerService",()=>this.shieldCustomerService()),i.execMenuOnce("csdn-blog-rightToolbarReport",()=>this.shieldReport()),i.execMenuOnce("csdn-blog-rightToolbarBackToTop",()=>this.shieldBackToTop()),this.initRightToolbarOffset(),v.ready(()=>{i.execMenuOnce("csdn-blog-addGotoRecommandButton",()=>{this.addGotoRecommandButton();});});},addGotoRecommandButton(){o.info("【添加】前往评论按钮，在返回顶部的上面");let e=document.createElement("a");e.className="option-box",e.setAttribute("data-type","gorecommand"),e.innerHTML=`
		<img src="https://g.csdnimg.cn/side-toolbar/3.6/images/customer.png" alt="" srcset="">
		<span class="show-txt" style="opacity:100;">前往<br>评论</span>
		`,e.addEventListener("click",function(){let t=document.querySelector("#toolBarBox");if(!t||!t.getClientRects().length){let c=me("#pcCommentBox");if(c&&c.getClientRects().length)t=c;else {o.error("评论区处于隐藏状态");return}}o.info("滚动到评论");let n=t.getBoundingClientRect().top+window.scrollY,r=document.querySelector("#csdn-toolbar"),l=window.getComputedStyle(r),a=r.clientHeight-parseFloat(l.paddingTop)-parseFloat(l.paddingBottom);window.scrollTo({top:n-a-8,left:0,behavior:"smooth"});}),f.waitNode(".csdn-side-toolbar").then(()=>{let t=document.querySelector(".csdn-side-toolbar a:nth-last-child(2)");t.parentElement.insertBefore(e,t.nextSibling);});},initRightToolbarOffset(){o.info("初始化右侧工具栏的偏移（top、right）"),b(`
        .csdn-side-toolbar{
          left: unset !important;
        }
        `),f.waitNode(".csdn-side-toolbar").then(e=>{v.css(e,{top:parseInt(i.getValue("csdn-blog-rightToolbarTopOffset"))+"px",right:parseInt(i.getValue("csdn-blog-rightToolbarRightOffset"))+"px"});});},shieldRightToolbar(){return o.info("屏蔽右侧工具栏"),p.addBlockCSS("div.csdn-side-toolbar")},shieldCreativeCenter(){return o.info("【屏蔽】创作中心"),p.addBlockCSS(".csdn-side-toolbar .sidetool-writeguide-box")},shieldShowOrSidebar(){return o.info("【屏蔽】显示/隐藏侧栏"),p.addBlockCSS(".csdn-side-toolbar a.sidecolumn")},shieldBeginnerGuidance(){return o.info("【屏蔽】新手引导"),p.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="guide"]')},shieldCustomerService(){return o.info("【屏蔽】客服"),p.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="cs"]')},shieldReport(){return o.info("【屏蔽】举报"),p.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="report"]')},shieldBackToTop(){return o.info("【屏蔽】返回顶部"),p.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="gotop"]')}},Ae={init(){Re.init(),i.execMenuOnce("csdn-blog-articleCenter",()=>this.articleCenter()),i.execMenuOnce("csdn-blog-shieldLoginDialog",()=>this.shieldLoginDialog()),i.execMenuOnce("csdn-blog-autoExpandContent",()=>this.autoExpandContent()),i.execMenuOnce("csdn-blog-autoExpandCodeContent",()=>this.autoExpandCodeContent()),i.exec("csdn-blog-blockComment",()=>this.blockComment(),e=>!i.getValue(e[0]),true),i.exec("csdn-blog-bottomRecommendArticleEnable",()=>this.shieldBottomRecommendArticle(),e=>!i.getValue(e[0]),true),i.execMenuOnce("csdn-blog-shieldBottomSkillTree",()=>this.shieldBottomSkillTree()),i.execMenuOnce("csdn-blog-shieldBottomFloatingToolbar",()=>this.shieldBottomFloatingToolbar()),i.execMenuOnce("csdn-blog-shieldLeftBlogContainerAside",()=>this.shieldLeftBlogContainerAside()),i.execMenuOnce("csdn-blog-shieldRightDirectoryInformation",()=>this.shieldRightDirectoryInformation()),i.execMenuOnce("csdn-blog-shieldArticleSearchTip",()=>this.shieldArticleSearchTip()),i.execMenuOnce("csdn-blog-allowSelectContent",()=>this.allowSelectContent()),v.ready(()=>{i.execMenuOnce("csdn-blog-identityCSDNDownload",()=>{this.identityCSDNDownload();}),i.execMenuOnce("csdn-blog-clickPreCodeAutomatically",()=>{this.clickPreCodeAutomatically();}),i.execMenuOnce("csdn-blog-restoreComments",()=>{this.restoreComments();});});},clickPreCodeAutomatically(){o.info("点击代码块自动展开"),document.addEventListener("click",function(e){let t=e.target;t.localName==="pre"&&(t.style.setProperty("height","auto"),t.querySelector(".hide-preCode-box")?.remove());});},restoreComments(){o.info("恢复评论到正确位置-第一条评论"),f.waitNode(".first-recommend-box").then(e=>{let t=document.querySelector(".recommend-box.insert-baidu-box.recommend-box-style");t.insertBefore(e,t.firstChild);}),o.info("恢复评论到正确位置-第二条评论"),f.waitNode(".second-recommend-box").then(e=>{let t=document.querySelector(".recommend-box.insert-baidu-box.recommend-box-style");t.insertBefore(e,t.firstChild);});},identityCSDNDownload(){o.info("标识CSDN下载的链接"),document.querySelectorAll(".recommend-item-box[data-url*='https://download.csdn.net/']").forEach(e=>{i.getValue("csdn-blog-removeResourceDownloadArticle")?e.remove():e.querySelector(".content-box").style.setProperty("border","2px solid red");});},articleCenter(){return o.info("全文居中"),b(Be)},shieldLoginDialog(){return o.info("屏蔽登录弹窗"),p.addBlockCSS(".passport-login-container")},autoExpandCodeContent(){return o.info("自动展开代码块"),[p.addBlockCSS("pre.set-code-hide .hide-preCode-box"),b(`
			pre.set-code-hide{
				height: auto !important;
			}
			/* 自动展开代码块 */
			.comment-list-box,
			main div.blog-content-box pre {
				max-height: none !important;
			}
        `)]},autoExpandContent(){return o.info("自动展开全文"),b(`
		/* 自动展开全文 */
		#article_content,
		.user-article.user-article-hide {
			height: auto !important;
			overflow: auto !important;
		}
        `)},blockComment(){return o.info("屏蔽评论区"),p.addBlockCSS("#pcCommentBox")},shieldBottomRecommendArticle(){return o.info("屏蔽底部推荐文章"),p.addBlockCSS("main > div.recommend-box")},shieldBottomSkillTree(){return o.info("屏蔽底部xx技能树"),p.addBlockCSS("#treeSkill")},shieldBottomFloatingToolbar(){return o.info("屏蔽底部悬浮工具栏"),p.addBlockCSS("#toolBarBox")},shieldLeftBlogContainerAside(){return o.info("【屏蔽】左侧博客信息"),p.addBlockCSS("aside.blog_container_aside")},shieldRightDirectoryInformation(){return o.info("【屏蔽】右侧目录信息"),p.addBlockCSS("#rightAsideConcision","#rightAside")},shieldArticleSearchTip(){return o.info("屏蔽文章内的选中搜索悬浮提示"),p.addBlockCSS("#articleSearchTip")},allowSelectContent(){return o.info("允许选择内容"),b(`
		#content_views,
		#content_views pre,
		#content_views pre code {
			user-select: text !important;
		}
		`)}},De=`#chatgpt-article-detail\r
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
`,Ve=`/* wenku顶部横幅 */\r
#app > div > div.main.pb-32 > div > div.top-bar,\r
/* 底部展开全文 */\r
#chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid > div.open {\r
  display: none !important;\r
}`,Ee={init(){b(De),b(Ve),i.execMenuOnce("csdn-wenku-shieldResourceRecommend",()=>this.shieldResourceRecommend()),i.execMenuOnce("csdn-wenku-shieldRightUserInfo",()=>this.shieldRightUserInfo()),i.execMenuOnce("csdn-wenku-shieldRightToolBar",()=>this.shieldRightToolBar());},shieldResourceRecommend(){return o.info("【屏蔽】资源推荐"),p.addBlockCSS("#recommend")},shieldRightUserInfo(){return o.info("【屏蔽】右侧用户信息"),p.addBlockCSS(".layout-right")},shieldRightToolBar(){return o.info("【屏蔽】右侧悬浮工具栏"),p.addBlockCSS(".csdn-side-toolbar")}},he={init(){i.execMenuOnce("csdn-link-jumpRedirect",()=>{this.jumpRedirect();});},jumpRedirect(){try{let e=new URLSearchParams(window.location.search);const t="target";if(e.has(t)){let n=e.get(t),r=decodeURIComponent(n);o.success(`跳转链接：${r}`),window.location.href=r;}else o.error("解析跳转的链接失败，原因：搜索参数中没有target参数");}catch(e){w.error("跳转链接失败："+e.message);}}},Le=`.ecommend-item-box.recommend-recommend-box,\r
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
.csdn-side-toolbar  .sidecolumn-vip {\r
	display: none !important;\r
}\r
`,Ie=`/*.blog_container_aside,\r
#nav {\r
	margin-left: -45px;\r
}\r
.recommend-right.align-items-stretch.clearfix,\r
.dl_right_fixed {\r
	margin-left: 45px;\r
}*/\r
`,ge={init(){this.addCSS(),i.execMenuOnce("csdn-blog-shieldTopToolbar",()=>this.shieldTopToolbar()),v.ready(()=>{i.execMenuOnce("csdn-blog-removeClipboardHijacking",()=>{this.removeClipboardHijacking();}),i.execMenuOnce("csdn-blog-unBlockCopy",()=>{this.unBlockCopy();});});},addCSS(){return o.info("添加屏蔽CSS和功能CSS"),[b(Le),b(Ie)]},removeClipboardHijacking(){o.info("去除剪贴板劫持");let e=document.querySelector(".article-copyright");e&&e.remove(),x.articleType&&(x.articleType=0),x.csdn&&x.csdn.copyright&&x.csdn.copyright.textData&&(x.csdn.copyright.textData=""),x.csdn&&x.csdn.copyright&&x.csdn.copyright.htmlData&&(x.csdn.copyright.htmlData="");},unBlockCopy(){o.info("取消禁止复制"),v.on(document,"click",".hljs-button",function(t,n){f.preventEvent(t);let r=n,l=r.closest(".hljs"),a=r.parentElement,c=l?.querySelector("code")||a.querySelector("code")||a,h=c.innerText;o.info("点击复制按钮复制内容："+(h.length>8?h.substring(0,8)+"...":h),c),f.setClip(h),r.setAttribute("data-title","复制成功");},{capture:true});let e=new f.LockFunction(function(t){let n=t.target;if(n.localName!=="pre")return;let r=n.querySelector(".hljs-button");r&&r.setAttribute("data-title","复制");});v.on(document,["mouseenter","mouseleave"],function(t){e.run(t);},{capture:true}),f.waitNode("#content_views").then(t=>{x.$&&x.$("#content_views")?.unbind("copy"),v.on(t,"copy",function(n){f.preventEvent(n);let l=x.getSelection()?.toString();return o.info("Ctrl+C复制内容："+(l.length>8?l.substring(0,8)+"...":l)),f.setClip(l),false},{capture:true});}),f.waitNode(".hljs-button").then(()=>{setTimeout(()=>{Se(".hljs-button").forEach(t=>{t.removeAttribute("onclick"),t.removeAttribute("data-report-click"),t.setAttribute("data-title","复制");});},250);});},shieldTopToolbar(){return o.info("屏蔽顶部Toolbar"),p.addBlockCSS("#toolbarBox","#csdn-toolbar")}},ae={init(){y.isLink()?(o.info("Router: 中转链接"),he.init()):y.isHuaWeiCloudBlog()?(o.info("Router: 华为云联盟"),fe.init()):y.isBlog()?(o.info("Router: 博客"),ge.init(),y.isBlogArticle()&&(o.info("Router: 帖子"),Ae.init())):y.isWenKu()?(o.info("Router: 文库"),Ee.init()):o.error("暂未适配，请反馈开发者："+globalThis.location.href);}},Oe={init(){i.execMenuOnce("m-csdn-link-jumpRedirect",()=>{he.jumpRedirect();});}},$e=`/* 右下角的 免费赢华为平板xxxx */\r
.org-main-content .siderbar-box {\r
  display: none !important;\r
}\r
`,Ne={init(){b($e),i.execMenuOnce("m-csdn-hua-wei-cloud-autoExpandContent",()=>fe.autoExpandContent()),i.execMenuOnce("m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",()=>this.blockBottomJoinTheCommunity());},blockBottomJoinTheCommunity(){return o.info("【屏蔽】底部加入社区"),p.addBlockCSS(".user-desc")}},z={isSuccessResponse(e){return e==null?false:(typeof e=="string"&&(e=f.toJSON(e)),e?.code===200)}},J={async folderListWithCheck(e){let t=await N.get("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/folderListWithCheck",{data:{url:e},fetch:true,allowInterceptConfig:false,headers:{"User-Agent":f.getRandomPCUA()}});o.info(t);let n=f.toJSON(t.data.responseText);if(!t.status||!z.isSuccessResponse(t.data.responseText)){o.error("获取收藏夹信息失败，请求异常"),typeof n.msg=="string"?w.error(n.msg):w.error("获取收藏夹信息失败");return}return n.data.result},async addFavoriteInFolds(e){let t=await N.post("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/addFavoriteInFolds",{fetch:true,data:e,headers:{"Content-Type":"application/json","User-Agent":f.getRandomPCUA()},allowInterceptConfig:false});if(o.info(t),!t.status||!z.isSuccessResponse(t.data.responseText)){o.error("添加收藏失败，请求异常",t),w.error("添加收藏失败，请求异常");return}return  true},async checkFavoriteByUrl(e){debugger;let t=await N.get("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/checkFavoriteByUrl",{data:{url:e},fetch:true,allowInterceptConfig:false,headers:{"User-Agent":f.getRandomPCUA()}});if(o.info(t),!t.status||!z.isSuccessResponse(t.data.responseText)){o.error("检查收藏夹状态失败，请求异常"),w.error("检查收藏夹状态失败，请求异常");return}return f.toJSON(t.data.responseText).data},async createFolder(e){let t=await N.post("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/createFolder",{data:e,fetch:true,headers:{Accept:"application/json, text/javascript, */*; q=0.01","Content-Type":"application/json","User-Agent":f.getRandomPCUA()},allowInterceptConfig:false});if(o.info(t),!t.status||!z.isSuccessResponse(t.data.responseText)){w.error("创建收藏夹失败");return}return f.toJSON(t.data.responseText).data}},Ue={init(){i.exec("m-csdn-blog-shieldTopToolbar",()=>this.shieldTopToolbar(),e=>!i.getValue(e[0]),true),i.execMenuOnce("m-csdn-blog-notLimitCodePreMaxHeight",()=>this.notLimitCodePreMaxHeight()),i.execMenuOnce("m-csdn-blog-notLimitCommentMaxHeight",()=>this.notLimitCommentMaxHeight()),i.execMenuOnce("m-csdn-blog-allowSelectText",()=>this.allowSelectText()),i.execMenuOnce("m-csdn-blog-autoExpandContent",()=>this.autoExpandContent()),i.exec("m-csdn-blog-bottomArticleEnable",()=>this.blockBottomArticle(),e=>!i.getValue(e[0]),true),i.exec("m-csdn-blog-comment-enable",()=>this.blockComment(),e=>!i.getValue(e[0]),true),i.exec("m-csdn-blog-bottom-toolbar-enable",()=>this.blockBottomToolBar(),e=>!i.getValue(e[0]),true),i.execMenuOnce("m-csdn-blog-bottom-toolbar-always-bottom",()=>this.bottomToolBarAlwaysShow()),v.ready(()=>{i.execMenuOnce("m-csdn-blog-removeAds",()=>this.removeAds()),i.execMenuOnce("m-csdn-blog-refactoringRecommendation",()=>{this.refactoringRecommendation();}),i.execMenuOnce("m-csdn-blog-unBlockCopy",()=>{ge.unBlockCopy();}),i.execMenuOnce("m-csdn-blog-bottom-toolbar-optimizationCollectButton",()=>{this.optimizationCollectButton();});});},shieldTopToolbar(){return o.info("屏蔽顶部Toolbar"),[p.addBlockCSS("#csdn-toolbar"),b(`
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
			`)]},refactoringRecommendation(){function e(){document.querySelectorAll(".container-fluid").forEach(n=>{let r="",l="",a="",c="",h=false,d=false;if(n.hasAttribute("data-url")){if(r=n.getAttribute("data-url"),l=n.querySelector(".recommend_title div.left")?.innerHTML,!n.querySelector(".text"))return;a=n.querySelector(".text")?.innerHTML,n.querySelectorAll(".recommend-img").length&&n.querySelectorAll(".recommend-img").forEach(m=>{c+=m.innerHTML;});}else r=n.querySelector("a[data-type]").getAttribute("href"),l=n.querySelector(".recommend_title div.left").innerHTML,a=n.querySelector(".text").innerHTML;var u=new URL(r);u.host==="download.csdn.net"||u.host==="www.iteye.com"&&u.pathname.match(/^\/resource/gi)?(h=true,l='<div class="component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>'+l):u.origin.match(/edu.csdn.net/gi)&&(d=true,l='<div class="component-box"><a class="csdn-edu-title" href="javascript:;">CSDN学院</a></div>'+l),n.setAttribute("class","GM-csdn-dl"),n.setAttribute("data-url",r),n.innerHTML=`<div class="GM-csdn-title"><div class="left">${l}</div></div><div class="GM-csdn-content">${a}</div><div class="GM-csdn-img">${c}</div>`,n.addEventListener("click",function(){i.getValue("m-csdn-blog-openNewTab")?window.open(r,"_blank"):window.location.href=r;}),(h||d)&&i.getValue("m-csdn-blog-removeResourceArticle")&&n.remove();});}let t=new f.LockFunction(e,50);f.waitNode("#recommend").then(n=>{o.info("重构底部推荐"),t.run(),f.mutationObserver(n,{callback:()=>{t.run();},config:{childList:true,subtree:true,attributes:true}});});},blockBottomArticle(){return o.info("屏蔽底部文章"),p.addBlockCSS("#recommend")},blockComment(){return o.info("屏蔽评论"),p.addBlockCSS("#comment")},removeAds(){return o.info("去除广告"),[p.waitRemove(".passport-login-container"),p.waitRemove(".btn_open_app_prompt_box.detail-open-removed"),p.waitRemove(".add-firstAd"),p.waitRemove("div.feed-Sign-weixin"),p.waitRemove("div.ios-shadowbox")]},notLimitCodePreMaxHeight(){return o.info("不限制代码块最大高度"),b(`
        pre{
            max-height: unset !important;
        }
        `)},notLimitCommentMaxHeight(){return o.info("不限制评论区最大高度"),b(`
        #comment{
          max-height: none !important;
        }
      `)},allowSelectText(){return o.info("允许选择文字"),b(`
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
        `)},autoExpandContent(){return o.info("自动展开内容"),b(`
        #content_views pre.set-code-hide,
        .article_content{
          height: 100% !important;
          overflow: auto !important;
        }
        `)},blockBottomToolBar(){return o.info("屏蔽底部工具栏"),p.addBlockCSS("#operate")},bottomToolBarAlwaysShow(){return o.info("底部工具栏常驻"),b(`
			/* 底部工具栏 */
			#operate {
				bottom: 0 !important;
			}
			`)},optimizationCollectButton(){o.info("优化收藏按钮"),f.waitNode("#operate .collect-btn",1e4).then(e=>{e&&v.on(e,"click",async t=>{f.preventEvent(t);let n=e.querySelector(".collect"),r=e.querySelector(".uncollect"),l=await J.folderListWithCheck(window.location.origin+window.location.pathname);if(!l)return;let a=[];l.forEach(u=>{u.IsFavorite&&a.push(u.ID);});let c=u=>{let m=u.ID,g=v.createElement("li",{className:"csdn-collection-item",innerHTML:`
									<div class="csdn-collection-item_left">
										<div class="csdn-collection-item_title">
											<span class="title-m">${u.Name}</span>
										</div>
										<span class="csdn-collection-item_ext">
											<span class="csdn-collection-item_length">${u.FavoriteNum}条内容</span>
											<span class="dot">・</span>
											<span class="csdn-collection-controls">${u.IsPrivate?"私密":"公开"}</span>
										</span>
									</div>
									<span class="collect-btn">${u.IsFavorite?"已收藏":"收藏"}</span>
								`},{"data-is-collect":u.IsFavorite});g.querySelector(".title-m");let _=g.querySelector(".csdn-collection-item_length");g.querySelector(".csdn-collection-controls");let T=g.querySelector(".collect-btn");return v.on(T,"click",async W=>{let B=x.articleDetailUrl;B==null&&(B=window.location.origin+window.location.pathname);let K=x.articleId;if(K==null){o.error("获取文章ID失败"),w.error("获取文章ID失败");return}let q=x.username;if(q==null){o.error("获取文章作者失败"),w.error("获取文章作者失败");return}let G=x.articleTitle;if(G==null&&(G=document.title.replace(/-CSDN博客$/,"")),G==null){o.error("获取文章标题失败"),w.error("获取文章标题失败");return}let C=x.articleDesc;if(C==null){let k=me("meta[name='description']");k&&(C=k.getAttribute("content"));}if(C==null){o.error("获取文章描述失败"),w.error("获取文章描述失败");return}let S=[...a],M=w.loading("处理中...");try{let k=await J.checkFavoriteByUrl(B);if(k==null)return;o.info(m,k);let R=!k[m];if(R?(o.info("添加收藏"),S.push(m)):(o.info("取消收藏"),S.splice(S.indexOf(m),1)),!await J.addFavoriteInFolds({author:q,url:B,source:"blog",sourceId:K,title:G,description:C,fromType:"PC",username:u.Username,folderIdList:S}))return;let D=await J.checkFavoriteByUrl(B);if(D==null)return;o.info(m,D),g.setAttribute("data-is-collect",(!!D[m]).toString()),R?D[m]?(o.success("收藏成功"),w.success("收藏成功"),v.text(T,"已收藏"),a.includes(m)||a.push(m),u.FavoriteNum++):(o.error("收藏失败",D,m),w.error("收藏失败")):D[m]?(o.error("取消收藏失败",D,m),w.error("取消收藏失败")):(o.success("取消收藏成功"),w.success("取消收藏成功"),v.text(T,"收藏"),a.includes(m)&&a.splice(a.indexOf(m),1),u.FavoriteNum--),v.text(_,`${u.FavoriteNum}条内容`),Object.values(D).find(be=>be)?(v.show(n,!1),v.hide(r,!1)):(v.show(r,!1),v.hide(n,!1)),M.close();}catch(k){o.error(k);}finally{M.close();}}),g},d=ne.alert({title:{text:"添加收藏夹",position:"center"},content:{text:`
									<ul class="csdn-collection-items"></ul>
								`,html:true},btn:{ok:{enable:false}},width:Z.setting.width,height:Z.setting.height,drag:true,mask:{enable:true},style:`
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
							`}).$shadowRoot.querySelector(".csdn-collection-items");l.forEach(u=>{let m=c(u);d.appendChild(m);});},{capture:true});});}},qe=`/* 右下角的买一年送3个月的广告图标 */\r
.blind_box {\r
  display: none !important;\r
}\r
`,Ge={init(){b(qe),i.execMenuOnce("m-csdn-wenku-shieldBottomToolbar",()=>this.shieldBottomToolbar());},shieldBottomToolbar(){return o.info("【屏蔽】底部工具栏"),p.addBlockCSS(".page-container > div.btn")}},Pe=`/* 右下角悬浮图标 买1年送3个月 */\r
.page-container .blind_box,\r
/* 底部工具栏右边的 开会员按钮（低至xx元/次） */\r
.page-container .btn .ml-12,\r
/* 登录弹窗 */\r
.passport-login-container,\r
/* 通用广告className匹配 */\r
.ads {\r
	display: none !important;\r
}\r
`,Fe={init(){i.execMenuOnce("m-csdn-download-removeAds",()=>b(Pe)),i.execMenuOnce("m-csdn-download-automaticallyExpandResourceIntroduction",()=>this.automaticallyExpandResourceIntroduction());},automaticallyExpandResourceIntroduction(){return o.info("自动展开资源介绍"),[p.addBlockCSS("label.unfold-font"),b(`
			.resource-desc{
				max-height: unset !important;
				overflow: unset !important;
			}
			`)]}},He=`.view_comment_box,\r
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
`,je=`#mainBox {\r
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
`,We={init(){this.addCSS();},addCSS(){return [b(He),b(je)]}},se={init(){y.isLink()?(o.info("Router: 中转链接"),Oe.init()):y.isHuaWeiCloudBlog()?(o.info("Router: 华为云联盟"),Ne.init()):y.isBlog()?(o.info("Router: 博客"),We.init(),y.isBlogArticle()&&(o.info("Router: 文章"),Ue.init())):y.isWenKu()?(o.info("Router: 文库"),Ge.init()):y.isDownload()?(o.info("Router: 资源下载"),Fe.init()):o.error("暂未适配，请反馈开发者："+globalThis.location.href);}},re={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new L.Dictionary),this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t);},initComponentsStorageApi(e,t,n){let r;this.hasStorageApi(e)?r=this.getStorageApi(e):r=n,this.setComponentsStorageApiProperty(t,r);},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,I,t);}},s=function(e,t,n,r,l,a,c,h){let d={text:e,type:"switch",description:l,disabled:c,attributes:{},props:{},getValue(){return this.props[I].get(t,n)},callback(u,m){let g=!!m;if(o.success(`${g?"开启":"关闭"} ${e}`),typeof r=="function"&&r(u,g))return;this.props[I].set(t,g);},afterAddToUListCallBack:a};return Reflect.set(d.attributes,H,t),Reflect.set(d.attributes,j,n),re.initComponentsStorageApi("switch",d,{get(u,m){return i.getValue(u,m)},set(u,m){i.setValue(u,m);}}),d},Y=function(e,t,n,r,l,a,c){let h=[];typeof r=="function"?h=r():h=r;let d={text:e,type:"select",description:a,attributes:{},props:{},getValue(){return this.props[I].get(t,n)},callback(u,m,g){let _=m;if(o.info(`选择：${g}`),typeof l=="function"&&l(u,_,g))return;this.props[I].set(t,_);},data:h};return Reflect.set(d.attributes,H,t),Reflect.set(d.attributes,j,n),re.initComponentsStorageApi("select",d,{get(u,m){return i.getValue(u,m)},set(u,m){i.setValue(u,m);}}),d},Ke={id:"component-common",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[Y("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,n)=>{o.info("设置当前Qmsg弹出位置"+n);},"Toast显示在页面九宫格的位置"),Y("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),s("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},ce=function(e,t,n,r,l,a,c,h,d,u){let m={text:e,type:"slider",description:h,attributes:{},props:{},getValue(){return this.props[I].get(t,n)},getToolTipContent(g){return typeof c=="function"?c(g):`${g}`},callback(g,_){if(typeof a=="function"&&a(g,_))return;this.props[I].set(t,_);},min:r,max:l,step:d};return Reflect.set(m.attributes,H,t),Reflect.set(m.attributes,j,n),re.initComponentsStorageApi("slider",m,{get(g,_){return i.getValue(g,_)},set(g,_){i.setValue(g,_);}}),m},ze={id:"panel-blog",title:"博客",isDefault(){return y.isBlog()},forms:[{type:"forms",text:"",forms:[{type:"deepMenu",text:"文章",forms:[{type:"forms",text:"",forms:[{text:"布局屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[s("【屏蔽】登录弹窗","csdn-blog-shieldLoginDialog",true),s("【屏蔽】左侧博客信息","csdn-blog-shieldLeftBlogContainerAside",false),s("【屏蔽】右侧目录信息","csdn-blog-shieldRightDirectoryInformation",false),s("【屏蔽】底部的悬浮工具栏","csdn-blog-shieldBottomFloatingToolbar",false)]}]},{text:"右侧悬浮工具栏",type:"deepMenu",forms:[{text:"功能",type:"forms",forms:[s("启用","csdn-blog-rightToolbarEnable",true,void 0,"创作中心，隐藏/显示侧栏，新手引导，客服、举报..."),s("【添加按钮】前往评论","csdn-blog-addGotoRecommandButton",true,void 0,"在悬浮工具栏最后面添加"),ce("right偏移","csdn-blog-rightToolbarRightOffset",90,0,document.documentElement.clientWidth,(e,t)=>{let n=document.querySelector(".csdn-side-toolbar");v.css(n,{right:t+"px"});},e=>`当前：${e}px，默认：90px`),ce("top偏移","csdn-blog-rightToolbarTopOffset",140,0,document.documentElement.clientHeight,(e,t)=>{let n=document.querySelector(".csdn-side-toolbar");v.css(n,{top:t+"px"});},e=>`当前：${e}px，默认：90px`)]},{text:"屏蔽",type:"forms",forms:[s("【屏蔽】创作中心","csdn-blog-rightToolbarCreativeCenter",false),s("【屏蔽】显示/隐藏侧栏","csdn-blog-rightToolbarShowOrSidebar",false),s("【屏蔽】新手引导","csdn-blog-rightToolbarBeginnerGuidance",false),s("【屏蔽】客服","csdn-blog-rightToolbarCustomerService",false),s("【屏蔽】举报","csdn-blog-rightToolbarReport",false),s("【屏蔽】返回顶部","csdn-blog-rightToolbarBackToTop",false)]}]},{text:"内容",type:"deepMenu",forms:[{text:"功能",type:"forms",forms:[s("点击代码块自动展开","csdn-blog-clickPreCodeAutomatically",true,void 0,"当鼠标点击代码块区域时，将自动展开内容"),s("自动展开代码块","csdn-blog-autoExpandCodeContent",true,void 0,"懒人操作，免手动点击展开"),s("自动展开内容","csdn-blog-autoExpandContent",true,void 0,"懒人操作，免手动点击展开"),s("全文居中","csdn-blog-articleCenter",true,function(e,t){t&&alert("为了更好的呈现效果，请开启功能：【屏蔽】左侧博客信息、【屏蔽】右侧目录信息");},"自动屏蔽左侧和右侧的信息，且将文章居中"),s("允许选择内容","csdn-blog-allowSelectContent",true,void 0)]},{text:"屏蔽",type:"forms",forms:[s("【屏蔽】底部xx技能树","csdn-blog-shieldBottomSkillTree",false),s("【屏蔽】选中文字悬浮栏","csdn-blog-shieldArticleSearchTip",false,void 0,"选中文字弹出的，例如：搜索、评论、笔记")]}]},{text:"评论区",type:"deepMenu",forms:[{text:"",type:"forms",forms:[s("启用","csdn-blog-blockComment",true,void 0,"关闭是屏蔽评论区"),s("优化评论区的位置","csdn-blog-restoreComments",true)]}]},{text:"底部文章",type:"deepMenu",forms:[{text:"",type:"forms",forms:[s("启用","csdn-blog-bottomRecommendArticleEnable",true,void 0,"关闭是屏蔽底部文章"),s("标识CSDN下载","csdn-blog-identityCSDNDownload",true,void 0,"使用红框标识"),s("移除资源下载的文章","csdn-blog-removeResourceDownloadArticle",false,void 0,"download.csdn.net<br>www.iteye.com<br>edu.csdn.net")]}]}]}]}]},{text:"",type:"forms",forms:[{text:"全局布局屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[s("【屏蔽】顶部工具栏","csdn-blog-shieldTopToolbar",false)]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[s("拦截-复制的小尾巴","csdn-blog-removeClipboardHijacking",true),s("劫持-禁止复制","csdn-blog-unBlockCopy",true,void 0,"允许点击复制按钮进行复制")]}]}]}]},Je={id:"panel-link",title:"链接",isDefault(){return y.isLink()},forms:[{text:"功能",type:"forms",forms:[s("重定向链接","csdn-link-jumpRedirect",true,void 0,"自动跳转至被拦截的Url链接")]}]},Ze={id:"panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return y.isHuaWeiCloudBlog()},forms:[{text:"功能",type:"forms",forms:[s("自动展开全文","csdn-hua-wei-cloud-autoExpandContent",true)]},{text:"屏蔽",type:"forms",forms:[s("【屏蔽】云开发者任务挑战活动","csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",true),s("【屏蔽】左侧悬浮按钮","csdn-hua-wei-cloud-shieldLeftFloatingButton",false,function(e,t){t&&alert("开启后将屏蔽【当前阅读量】、【点赞按钮】、【评论按钮】、【分享按钮】");}),s("【屏蔽】右侧栏","csdn-hua-wei-cloud-blockRightColumn",false,function(e,t){t&&alert("开启后将屏蔽【相关产品】-【活动日历】-【运营活动】-【热门标签】");}),s("【屏蔽】底部推荐内容","csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",false),s("【屏蔽】底部更多推荐","csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",false)]}]},Ye={id:"panel-wenku",title:"资源",isDefault(){return y.isLink()},forms:[{text:"屏蔽",type:"forms",forms:[s("【屏蔽】资源推荐","csdn-wenku-shieldResourceRecommend",false),s("【屏蔽】右侧用户信息","csdn-wenku-shieldRightUserInfo",false),s("【屏蔽】右侧悬浮工具栏","csdn-wenku-shieldRightToolBar",false)]}]},Qe={id:"panel-so",title:"搜索",isDefault(){return y.isSo()},forms:[{text:"C知道-功能",type:"forms",forms:[s("去除水印","csdn-so-cknow-removeMaskCover",true)]}]},Xe={id:"component-common",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[Y("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,n)=>{o.info("设置当前Qmsg弹出位置"+n);},"Toast显示在页面九宫格的位置"),Y("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),s("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},et={id:"m-panel-blog",title:"博客",isDefault(){return y.isBlog()},forms:[{type:"forms",text:"",forms:[{type:"deepMenu",text:"文章",forms:[{text:"",type:"forms",forms:[{type:"deepMenu",text:"顶部工具栏",forms:[{type:"forms",text:"",forms:[s("启用","m-csdn-blog-shieldTopToolbar",false,void 0,"关闭是屏蔽顶部工具栏")]}]},{text:"内容",type:"deepMenu",forms:[{text:"",type:"forms",forms:[s("允许选中文字","m-csdn-blog-allowSelectText",true,void 0,"设置user-select: text;"),s("自动展开","m-csdn-blog-autoExpandContent",true,void 0,"包括内容、代码块"),s("不限制代码块的最大高度","m-csdn-blog-notLimitCodePreMaxHeight",false,void 0,"让代码块的高度直接被撑开")]}]},{text:"评论",type:"deepMenu",forms:[{text:"",type:"forms",forms:[s("启用","m-csdn-blog-comment-enable",true,void 0,"关闭是屏蔽评论区"),s("不限制评论区的最大高度","m-csdn-blog-notLimitCommentMaxHeight",true,void 0,"让评论区高度直接被撑开")]}]},{text:"底部文章",type:"deepMenu",forms:[{text:"",type:"forms",forms:[s("启用","m-csdn-blog-bottomArticleEnable",true,void 0,"关闭是屏蔽底部文章"),s("移除资源下载","m-csdn-blog-removeResourceArticle",false,void 0,"download.csdn.net<br>www.iteye.com<br>edu.csdn.net"),s("重构","m-csdn-blog-refactoringRecommendation",true,void 0,"文章的样式统一"),s("新标签页打开","m-csdn-blog-openNewTab",true,void 0,"新标签页打开文章")]}]},{type:"deepMenu",text:"底部工具栏",forms:[{type:"forms",text:"",forms:[s("启用","m-csdn-blog-bottom-toolbar-enable",false,void 0,"关闭是屏蔽底部工具栏"),s("常驻底部","m-csdn-blog-bottom-toolbar-always-bottom",false,void 0,"开启后底部工具栏不随下滑滚动而隐藏"),s("优化收藏按钮","m-csdn-blog-bottom-toolbar-optimizationCollectButton",false,void 0,"可以自行选择收藏夹")]}]}]}]}]},{type:"forms",text:"",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[s("【屏蔽】广告","m-csdn-blog-removeAds",true,void 0,"包括：登录弹窗、打开APP、ios版本提示等"),s("允许复制","m-csdn-blog-unBlockCopy",true,void 0,"允许点击复制按钮进行复制")]}]}]}]},tt={id:"m-panel-link",title:"链接",isDefault(){return y.isLink()},forms:[{text:"功能",type:"forms",forms:[s("重定向链接","m-csdn-link-jumpRedirect",true,void 0,"自动跳转至被拦截的Url链接")]}]},nt={id:"m-panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return y.isHuaWeiCloudBlog()},forms:[{text:"功能",type:"forms",forms:[s("自动展开全文","m-csdn-hua-wei-cloud-autoExpandContent",true)]},{text:"屏蔽",type:"forms",forms:[s("【屏蔽】底部加入社区","m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",true)]}]},ot={id:"m-panel-wenku",title:"文库",isDefault(){return y.isWenKu()},forms:[{text:"屏蔽",type:"forms",forms:[s("【屏蔽】底部工具栏","m-csdn-wenku-shieldBottomToolbar",false)]}]},rt={id:"panel-so",title:"搜索",isDefault(){return y.isSo()},forms:[{text:"C知道-功能",type:"forms",forms:[s("去除水印","m-csdn-so-cknow-removeMaskCover",true)]}]},it={id:"m-panel-download",title:"资源",isDefault(){return y.isDownload()},forms:[{text:"功能",type:"forms",forms:[s("自动展开资源介绍","m-csdn-download-automaticallyExpandResourceIntroduction",true,void 0,"屏蔽资源介绍【展开全部】按钮并展开资源介绍")]},{text:"屏蔽",type:"forms",forms:[s("【屏蔽】广告","m-csdn-download-removeAds",true,void 0,"包括：登录弹窗、会员降价等")]}]};oe.deleteMenuOption(0);oe.addMenuOption([{key:"show_pops_panel_setting",text:"⚙ PC端设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{i.showPanel(O.getConfig(0));}},{key:"m_show_pops_panel_setting",text:"⚙ 移动端端设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{i.showPanel(O.getConfig(1));}},{key:"gotoCSDNCKnow",text:"⚙ 前往C知道",isStoreValue:false,autoReload:false,showText(e){return e},callback(){window.open("https://so.csdn.net/chat","_blank");}}]);O.addContentConfig([Ke,ze,Je,Ze,Ye,Qe]);O.addContentConfig([Xe,et,tt,nt,ot,rt,it]);i.init();let xe=f.isPhone(),F="change_env_set",E=ee(F);ue.add({key:F,text:`⚙ 自动: ${xe?"移动端":"PC端"}`,autoReload:false,isStoreValue:false,showText(e){return E==null?e:e+` 手动: ${E==1?"移动端":E==2?"PC端":"未知"}`},callback:()=>{let e=[0,1,2],t=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!t)return;let n=parseInt(t);if(isNaN(n)){w.error("输入的不是规范的数字");return}if(!e.includes(n)){w.error("输入的值必须是0或1或2");return}n==0?X(F):te(F,n);}});E!=null?(o.info(`手动判定为${E===1?"移动端":"PC端"}`),E==1?se.init():E==2?ae.init():(w.error("意外，手动判定的值不在范围内"),X(F))):xe?(o.info("自动判定为移动端"),se.init()):(o.info("自动判定为PC端"),ae.init());

})(Qmsg, DOMUtils, Utils, pops);