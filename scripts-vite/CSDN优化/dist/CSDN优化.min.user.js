// ==UserScript==
// @name         CSDN优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.6.13
// @author       WhiteSevs
// @description  支持PC和手机端、屏蔽广告、优化浏览体验、重定向拦截的Url、自动展开全文、自动展开代码块、全文居中、允许复制内容、去除复制内容的小尾巴、自定义屏蔽元素等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.csdn.net/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.6.9/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.5.10/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.1.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.3.8/dist/index.umd.js
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

(function (C, ue, L, Z) {
	'use strict';

	var ye=Object.defineProperty;var ve=(e,t,n)=>t in e?ye(e,t,{enumerable:true,configurable:true,writable:true,value:n}):e[t]=n;var Y=(e,t,n)=>ve(e,typeof t!="symbol"?t+"":t,n);var X=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,le=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,ee=typeof GM_getValue<"u"?GM_getValue:void 0,K=typeof GM_info<"u"?GM_info:void 0,Se=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,te=typeof GM_setValue<"u"?GM_setValue:void 0,_e=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,ke=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,x=typeof unsafeWindow<"u"?unsafeWindow:void 0,Me=window;const m={waitRemove(...e){e.forEach(t=>{typeof t=="string"&&p.waitNodeList(t).then(n=>{n.forEach(o=>o.remove());});});},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),b(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){let t=typeof le=="function"?le(e.keyName):null;typeof t=="string"&&t?b(t):m.loadStyleLink(e.url);},async loadStyleLink(e){let t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=e,ue.ready(()=>{document.head.appendChild(t);});},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(n=>{t.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.match(/^http(s|):\/\//i)||(e.startsWith("/")||(e+="/"),e=window.location.origin+e),e},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;let t=new URL(e);return t.protocol="https:",t.toString()},lockScroll(...e){let t=document.createElement("style");t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...e||[]);return n.forEach(o=>{o.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(t),{recovery(){n.forEach(o=>{o.classList.remove("pops-overflow-hidden-important");}),t.remove();}}},async getClipboardText(){function e(o){navigator.clipboard.readText().then(l=>{o(l);}).catch(l=>{r.error("读取剪贴板内容失败👉",l),o("");});}function t(o){navigator.permissions.query({name:"clipboard-read"}).then(l=>{e(o);}).catch(l=>{r.error("申请剪贴板权限失败，尝试直接读取👉",l.message??l.name??l.stack),e(o);});}function n(){var o,l;return !(typeof((o=navigator==null?void 0:navigator.clipboard)==null?void 0:o.readText)!="function"||typeof((l=navigator==null?void 0:navigator.permissions)==null?void 0:l.query)!="function")}return new Promise(o=>{if(!n()){o("");return}document.hasFocus()?t(o):window.addEventListener("focus",()=>{t(o);},{once:true});})},escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")}},I={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},p=L.noConflict(),v=ue.noConflict(),ne=Z,r=new p.Log(K,x.console||Me.console);var de;let Q=((de=K==null?void 0:K.script)==null?void 0:de.name)||void 0;Z.config.Utils.AnyTouch();const me=false;r.config({debug:me,logMaxCount:1e3,autoClearConsole:true,tag:true});C.config(Object.defineProperties({html:true,autoClose:true,showClose:false},{position:{get(){return i.getValue(I.qmsg_config_position.key,I.qmsg_config_position.defaultValue)}},maxNums:{get(){return i.getValue(I.qmsg_config_maxnums.key,I.qmsg_config_maxnums.defaultValue)}},showReverse:{get(){return i.getValue(I.qmsg_config_showreverse.key,I.qmsg_config_showreverse.defaultValue)}},zIndex:{get(){let e=L.getMaxZIndex(),t=Z.config.InstanceUtils.getPopsMaxZIndex().zIndex;return L.getMaxValue(e,t)+100}}}));ne.GlobalConfig.setGlobalConfig({zIndex:()=>{let e=L.getMaxZIndex(void 0,void 0,n=>{var o;if((o=n==null?void 0:n.classList)!=null&&o.contains("qmsg-shadow-container")||n!=null&&n.closest("qmsg")&&n.getRootNode()instanceof ShadowRoot)return  false}),t=Z.config.InstanceUtils.getPopsMaxZIndex().zIndex;return L.getMaxValue(e,t)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}}});const pe=new p.GM_Menu({GM_getValue:ee,GM_setValue:te,GM_registerMenuCommand:Se,GM_unregisterMenuCommand:_e}),$=new p.Httpx({xmlHttpRequest:ke,logDetails:me});$.interceptors.request.use(e=>e);$.interceptors.response.use(void 0,e=>(r.error("拦截器-请求错误",e),e.type==="onabort"?C.warning("请求取消",{consoleLogContent:true}):e.type==="onerror"?C.error("请求异常",{consoleLogContent:true}):e.type==="ontimeout"?C.error("请求超时",{consoleLogContent:true}):C.error("其它错误",{consoleLogContent:true}),e));x.Object.defineProperty,x.Function.prototype.apply,x.Function.prototype.call,x.Element.prototype.appendChild,x.setTimeout;const b=p.addStyle.bind(p),fe=document.querySelector.bind(document),Te=document.querySelectorAll.bind(document);new p.GM_Cookie;const he="GM_Panel",Be="data-init",F="data-key",G="data-default-value",Re="data-init-more-value",O="data-storage-api",z={setting:{get width(){return window.innerWidth<550?"88vw":window.innerWidth<700?"550px":"700px"},get height(){return window.innerHeight<450?"70vh":window.innerHeight<550?"450px":"550px"}}};class De{constructor(t){Y(this,"storageKey");Y(this,"listenerData");if(typeof t=="string"){let n=t.trim();if(n=="")throw new Error("key参数不能为空字符串");this.storageKey=n;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new L.Dictionary;}getLocalValue(){let t=ee(this.storageKey);return t==null&&(t={},this.setLocalValue(t)),t}setLocalValue(t){te(this.storageKey,t);}set(t,n){let o=this.get(t),l=this.getLocalValue();Reflect.set(l,t,n),this.setLocalValue(l),this.triggerValueChangeListener(t,o,n);}get(t,n){let o=this.getLocalValue();return Reflect.get(o,t)??n}getAll(){return this.getLocalValue()}delete(t){let n=this.get(t),o=this.getLocalValue();Reflect.deleteProperty(o,t),this.setLocalValue(o),this.triggerValueChangeListener(t,n,void 0);}has(t){let n=this.getLocalValue();return Reflect.has(n,t)}keys(){let t=this.getLocalValue();return Reflect.ownKeys(t)}values(){let t=this.getLocalValue();return Reflect.ownKeys(t).map(n=>Reflect.get(t,n))}clear(){X(this.storageKey);}addValueChangeListener(t,n){let o=Math.random(),l=this.listenerData.get(t)||[];return l.push({id:o,key:t,callback:n}),this.listenerData.set(t,l),o}removeValueChangeListener(t){let n=false;for(const[o,l]of this.listenerData.entries()){for(let s=0;s<l.length;s++){const d=l[s];(typeof t=="string"&&d.key===t||typeof t=="number"&&d.id===t)&&(l.splice(s,1),s--,n=true);}this.listenerData.set(o,l);}return n}triggerValueChangeListener(t,n,o){if(!this.listenerData.has(t))return;let l=this.listenerData.get(t);for(let s=0;s<l.length;s++){const d=l[s];if(typeof d.callback=="function"){let h=this.get(t),f,c;typeof n<"u"&&arguments.length>=2?c=n:c=h,typeof o<"u"&&arguments.length>2?f=o:f=h,d.callback(t,c,f);}}}}const D=new De(he),N={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new p.Dictionary),this.__contentConfig}},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]}},oe={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{i.showPanel(N.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){i.isTopWindow()&&pe.add(this.$data.menuOption);},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e);},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(t=>{let n=this.$data.menuOption.findIndex(o=>o.key===t.key);n!==-1&&(this.$data.menuOption[n]=t);});},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1);}},i={$data:{__configDefaultValueData:null,__onceExecMenuData:null,__onceExecData:null,__panelConfig:{},$panel:null,get configDefaultValueData(){return this.__configDefaultValueData==null&&(this.__configDefaultValueData=new p.Dictionary),this.__configDefaultValueData},get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new p.Dictionary),this.__onceExecMenuData},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new p.Dictionary),this.__onceExecData},get scriptName(){return Q},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e;},key:he,attributeKeyName:F,attributeDefaultValueName:G},init(){this.initContentDefaultValue(),oe.init();},isTopWindow(){return x.top===x.self},initContentDefaultValue(){const e=o=>{if(!o.attributes||o.type==="button"||o.type==="forms"||o.type==="deepMenu")return;let l={},s=o.attributes[F];s!=null&&(l[s]=o.attributes[G]);let d=o.attributes[Be];if(typeof d=="function"){let c=d();if(typeof c=="boolean"&&!c)return}let h=o.attributes[Re];h&&typeof h=="object"&&Object.assign(l,h);let f=Object.keys(l);if(!f.length){r.warn(["请先配置键",o]);return}f.forEach(c=>{let u=l[c];this.setDefaultValue(c,u);});},t=o=>{for(let l=0;l<o.length;l++){let s=o[l];e(s);let d=s.forms;d&&Array.isArray(d)&&t(d);}},n=[...N.getAllContentConfig()];for(let o=0;o<n.length;o++){let l=n[o];if(!l.forms)continue;const s=l.forms;s&&Array.isArray(s)&&t(s);}},setDefaultValue(e,t){this.$data.configDefaultValueData.has(e)&&r.warn("请检查该key(已存在): "+e),this.$data.configDefaultValueData.set(e,t);},setValue(e,t){D.set(e,t);},getValue(e,t){let n=D.get(e);return n??(this.$data.configDefaultValueData.has(e)?this.$data.configDefaultValueData.get(e):t)},deleteValue(e){D.delete(e);},hasKey(e){return D.has(e)},addValueChangeListener(e,t){return D.addValueChangeListener(e,(o,l,s)=>{t(e,s,l);})},removeValueChangeListener(e){D.removeValueChangeListener(e);},triggerMenuValueChange(e,t,n){D.triggerValueChangeListener(e,n,t);},deleteExecMenuOnce(e){return this.$data.onceExecMenuData.delete(e),D.removeValueChangeListener(e)},deleteOnceExec(e){this.$data.onceExecData.delete(e);},exec(e,t,n,o=true){const l=this;let s;typeof e=="string"||Array.isArray(e)?s=()=>e:s=e;let d=false,h=s(),f=[];Array.isArray(h)?(d=true,f=h):f.push(h);let c=f.find(w=>!this.$data.configDefaultValueData.has(w));if(c){r.warn(`${c} 键不存在`);return}let u=JSON.stringify(f);if(o){if(this.$data.onceExecMenuData.has(u))return;this.$data.onceExecMenuData.set(u,1);}let g=[],M=[],A=(w,S)=>{let k=[];S instanceof HTMLStyleElement?k=[S]:Array.isArray(S)&&(k=[...S.filter(_=>_!=null&&_ instanceof HTMLStyleElement)]),g=g.concat(k);},ie=w=>this.getValue(w),T=()=>{for(let w=0;w<g.length;w++)g[w].remove(),g.splice(w,1),w--;},H=()=>{let w=false;return typeof n=="function"?w=n(f):w=f.every(S=>ie(S)),w},U=w=>{let S=H(),k=[];if(S){let _=f.map(V=>this.getValue(V)),B=t({addStyleElement:(...V)=>A(true,...V),value:d?_:_[0]});B instanceof HTMLStyleElement?k.push(B):Array.isArray(B)&&k.push(...B.filter(V=>V!=null&&V instanceof HTMLStyleElement));}T(),g=[...k];};return o&&f.forEach(w=>{let S=this.addValueChangeListener(w,(k,_,B)=>{U();});M.push(S);}),U(),{clear(){this.clearStoreStyleElements(),this.removeValueChangeListener(),o&&l.$data.onceExecMenuData.delete(u);},clearStoreStyleElements:()=>T(),removeValueChangeListener:()=>{M.forEach(w=>{this.removeValueChangeListener(w);});}}},execMenu(e,t,n=false){return this.exec(e,o=>t(o),o=>o.every(s=>{let d=!!this.getValue(s);return n&&(d=!d),d}),false)},execMenuOnce(e,t){return this.exec(e,t,n=>n.every(l=>!!this.getValue(l)),true)},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(e)||(t(),this.$data.onceExecData.set(e,1));},showPanel(e,t=`${Q}-设置`){let n=ne.panel({title:{text:`${Q}-设置`,position:"center",html:false,style:""},content:e,btn:{close:{enable:true,callback:(o,l)=>{o.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(o,l)=>{o(),this.$data.$panel=null;}},width:z.setting.width,height:z.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=n;}},y={isHuaWeiCloudBlog(){return !!/huaweicloud.csdn.net/i.test(window.location.origin)},isBlog(){return !!/blog.csdn.net/i.test(window.location.origin)},isBlogArticle(){return this.isBlog()&&window.location.pathname.includes("/article/details/")},isWenKu(){return !!/wenku.csdn.net/i.test(window.location.origin)},isLink(){return window.location.hostname==="link.csdn.net"},isSo(){return window.location.hostname==="so.csdn.net"},isSoCKnow(){return this.isSo()&&(window.location.pathname.startsWith("/chat")||window.location.pathname.startsWith("/so/ai"))},isDownload(){return window.location.hostname==="download.csdn.net"}},Ae=`/* 底部免费抽xxx奖品广告 */\r
div.siderbar-box,\r
/* 华为开发者联盟加入社区 */\r
div.user-desc.user-desc-fix {\r
  display: none !important;\r
}\r
`,ge={init(){b(Ae),i.execMenuOnce("csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",()=>this.shieldCloudDeveloperTaskChallengeEvent()),i.execMenuOnce("csdn-hua-wei-cloud-autoExpandContent",()=>this.autoExpandContent()),i.execMenuOnce("csdn-hua-wei-cloud-shieldLeftFloatingButton",()=>this.shieldLeftFloatingButton()),i.execMenuOnce("csdn-hua-wei-cloud-blockRightColumn",()=>this.blockRightColumn()),i.execMenuOnce("csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",()=>this.blockRecommendedContentAtTheBottom()),i.execMenuOnce("csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",()=>this.shieldTheBottomForMoreRecommendations());},autoExpandContent(){return r.info("自动展开全文"),[m.addBlockCSS("div.article-show-more"),b(`
			/* 自动展开全文 */
			.main-content .user-article{
				height: auto !important;
				overflow: auto !important;
			}
			`)]},shieldCloudDeveloperTaskChallengeEvent(){return r.info("屏蔽云开发者任务挑战活动"),m.addBlockCSS(".luck-draw-modal-warp")},shieldLeftFloatingButton(){return r.info("屏蔽左侧悬浮按钮，包括当前阅读量、点赞按钮、评论按钮、分享按钮"),m.addBlockCSS("div.toolbar-wrapper.article-interact-bar")},blockRightColumn(){return r.info("屏蔽右侧栏，包括相关产品-活动日历-运营活动-热门标签"),m.addBlockCSS("div.page-home-right.dp-aside-right")},blockRecommendedContentAtTheBottom(){return r.info("屏蔽底部推荐内容"),m.addBlockCSS("div.recommend-card-box")},shieldTheBottomForMoreRecommendations(){return r.info("屏蔽底部更多推荐"),m.addBlockCSS("div.more-article")}},Ve=`#mainBox main {\r
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
`,Ee={init(){i.exec("csdn-blog-rightToolbarEnable",()=>this.shieldRightToolbar(),e=>!i.getValue(e[0]),true),i.execMenuOnce("csdn-blog-rightToolbarCreativeCenter",()=>this.shieldCreativeCenter()),i.execMenuOnce("csdn-blog-rightToolbarShowOrSidebar",()=>this.shieldShowOrSidebar()),i.execMenuOnce("csdn-blog-rightToolbarBeginnerGuidance",()=>this.shieldBeginnerGuidance()),i.execMenuOnce("csdn-blog-rightToolbarCustomerService",()=>this.shieldCustomerService()),i.execMenuOnce("csdn-blog-rightToolbarReport",()=>this.shieldReport()),i.execMenuOnce("csdn-blog-rightToolbarBackToTop",()=>this.shieldBackToTop()),this.initRightToolbarOffset(),v.ready(()=>{i.execMenuOnce("csdn-blog-addGotoRecommandButton",()=>{this.addGotoRecommandButton();});});},addGotoRecommandButton(){r.info("【添加】前往评论按钮，在返回顶部的上面");let e=document.createElement("a");e.className="option-box",e.setAttribute("data-type","gorecommand"),e.innerHTML=`
		<img src="https://g.csdnimg.cn/side-toolbar/3.6/images/customer.png" alt="" srcset="">
		<span class="show-txt" style="opacity:100;">前往<br>评论</span>
		`,e.addEventListener("click",function(){let t=document.querySelector("#toolBarBox");if(!t||!t.getClientRects().length){let d=fe("#pcCommentBox");if(d&&d.getClientRects().length)t=d;else {r.error("评论区处于隐藏状态");return}}r.info("滚动到评论");let n=t.getBoundingClientRect().top+window.scrollY,o=document.querySelector("#csdn-toolbar"),l=window.getComputedStyle(o),s=o.clientHeight-parseFloat(l.paddingTop)-parseFloat(l.paddingBottom);window.scrollTo({top:n-s-8,left:0,behavior:"smooth"});}),p.waitNode(".csdn-side-toolbar").then(()=>{let t=document.querySelector(".csdn-side-toolbar a:nth-last-child(2)");t.parentElement.insertBefore(e,t.nextSibling);});},initRightToolbarOffset(){r.info("初始化右侧工具栏的偏移（top、right）"),b(`
        .csdn-side-toolbar{
          left: unset !important;
        }
        `),p.waitNode(".csdn-side-toolbar").then(e=>{v.css(e,{top:parseInt(i.getValue("csdn-blog-rightToolbarTopOffset"))+"px",right:parseInt(i.getValue("csdn-blog-rightToolbarRightOffset"))+"px"});});},shieldRightToolbar(){return r.info("屏蔽右侧工具栏"),m.addBlockCSS("div.csdn-side-toolbar")},shieldCreativeCenter(){return r.info("【屏蔽】创作中心"),m.addBlockCSS(".csdn-side-toolbar .sidetool-writeguide-box")},shieldShowOrSidebar(){return r.info("【屏蔽】显示/隐藏侧栏"),m.addBlockCSS(".csdn-side-toolbar a.sidecolumn")},shieldBeginnerGuidance(){return r.info("【屏蔽】新手引导"),m.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="guide"]')},shieldCustomerService(){return r.info("【屏蔽】客服"),m.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="cs"]')},shieldReport(){return r.info("【屏蔽】举报"),m.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="report"]')},shieldBackToTop(){return r.info("【屏蔽】返回顶部"),m.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="gotop"]')}},Le={init(){Ee.init(),i.execMenuOnce("csdn-blog-articleCenter",()=>this.articleCenter()),i.execMenuOnce("csdn-blog-shieldLoginDialog",()=>this.shieldLoginDialog()),i.execMenuOnce("csdn-blog-autoExpandContent",()=>this.autoExpandContent()),i.execMenuOnce("csdn-blog-autoExpandCodeContent",()=>this.autoExpandCodeContent()),i.exec("csdn-blog-blockComment",()=>this.blockComment(),e=>!i.getValue(e[0]),true),i.exec("csdn-blog-bottomRecommendArticleEnable",()=>this.shieldBottomRecommendArticle(),e=>!i.getValue(e[0]),true),i.execMenuOnce("csdn-blog-shieldBottomSkillTree",()=>this.shieldBottomSkillTree()),i.execMenuOnce("csdn-blog-shieldBottomFloatingToolbar",()=>this.shieldBottomFloatingToolbar()),i.execMenuOnce("csdn-blog-shieldLeftBlogContainerAside",()=>this.shieldLeftBlogContainerAside()),i.execMenuOnce("csdn-blog-shieldRightDirectoryInformation",()=>this.shieldRightDirectoryInformation()),i.execMenuOnce("csdn-blog-shieldArticleSearchTip",()=>this.shieldArticleSearchTip()),i.execMenuOnce("csdn-blog-allowSelectContent",()=>this.allowSelectContent()),v.ready(()=>{i.execMenuOnce("csdn-blog-identityCSDNDownload",()=>{this.identityCSDNDownload();}),i.execMenuOnce("csdn-blog-clickPreCodeAutomatically",()=>{this.clickPreCodeAutomatically();}),i.execMenuOnce("csdn-blog-restoreComments",()=>{this.restoreComments();});});},clickPreCodeAutomatically(){r.info("点击代码块自动展开"),document.addEventListener("click",function(e){var n;let t=e.target;t.localName==="pre"&&(t.style.setProperty("height","auto"),(n=t.querySelector(".hide-preCode-box"))==null||n.remove());});},restoreComments(){r.info("恢复评论到正确位置-第一条评论"),p.waitNode(".first-recommend-box").then(e=>{let t=document.querySelector(".recommend-box.insert-baidu-box.recommend-box-style");t.insertBefore(e,t.firstChild);}),r.info("恢复评论到正确位置-第二条评论"),p.waitNode(".second-recommend-box").then(e=>{let t=document.querySelector(".recommend-box.insert-baidu-box.recommend-box-style");t.insertBefore(e,t.firstChild);});},identityCSDNDownload(){r.info("标识CSDN下载的链接"),document.querySelectorAll(".recommend-item-box[data-url*='https://download.csdn.net/']").forEach(e=>{i.getValue("csdn-blog-removeResourceDownloadArticle")?e.remove():e.querySelector(".content-box").style.setProperty("border","2px solid red");});},articleCenter(){return r.info("全文居中"),b(Ve)},shieldLoginDialog(){return r.info("屏蔽登录弹窗"),m.addBlockCSS(".passport-login-container")},autoExpandCodeContent(){return r.info("自动展开代码块"),[m.addBlockCSS("pre.set-code-hide .hide-preCode-box"),b(`
			pre.set-code-hide{
				height: auto !important;
			}
			/* 自动展开代码块 */
			.comment-list-box,
			main div.blog-content-box pre {
				max-height: none !important;
			}
        `)]},autoExpandContent(){return r.info("自动展开全文"),b(`
		/* 自动展开全文 */
		#article_content,
		.user-article.user-article-hide {
			height: auto !important;
			overflow: auto !important;
		}
        `)},blockComment(){return r.info("屏蔽评论区"),m.addBlockCSS("#pcCommentBox")},shieldBottomRecommendArticle(){return r.info("屏蔽底部推荐文章"),m.addBlockCSS("main > div.recommend-box")},shieldBottomSkillTree(){return r.info("屏蔽底部xx技能树"),m.addBlockCSS("#treeSkill")},shieldBottomFloatingToolbar(){return r.info("屏蔽底部悬浮工具栏"),m.addBlockCSS("#toolBarBox")},shieldLeftBlogContainerAside(){return r.info("【屏蔽】左侧博客信息"),m.addBlockCSS("aside.blog_container_aside")},shieldRightDirectoryInformation(){return r.info("【屏蔽】右侧目录信息"),m.addBlockCSS("#rightAsideConcision","#rightAside")},shieldArticleSearchTip(){return r.info("屏蔽文章内的选中搜索悬浮提示"),m.addBlockCSS("#articleSearchTip")},allowSelectContent(){return r.info("允许选择内容"),b(`
		#content_views,
		#content_views pre,
		#content_views pre code {
			user-select: text !important;
		}
		`)}},Oe=`#chatgpt-article-detail\r
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
`,Ie=`/* wenku顶部横幅 */\r
#app > div > div.main.pb-32 > div > div.top-bar,\r
/* 底部展开全文 */\r
#chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid > div.open {\r
  display: none !important;\r
}`,$e={init(){b(Oe),b(Ie),i.execMenuOnce("csdn-wenku-shieldResourceRecommend",()=>this.shieldResourceRecommend()),i.execMenuOnce("csdn-wenku-shieldRightUserInfo",()=>this.shieldRightUserInfo()),i.execMenuOnce("csdn-wenku-shieldRightToolBar",()=>this.shieldRightToolBar());},shieldResourceRecommend(){return r.info("【屏蔽】资源推荐"),m.addBlockCSS("#recommend")},shieldRightUserInfo(){return r.info("【屏蔽】右侧用户信息"),m.addBlockCSS(".layout-right")},shieldRightToolBar(){return r.info("【屏蔽】右侧悬浮工具栏"),m.addBlockCSS(".csdn-side-toolbar")}},xe={init(){i.execMenuOnce("csdn-link-jumpRedirect",()=>{this.jumpRedirect();});},jumpRedirect(){try{let e=new URLSearchParams(window.location.search);const t="target";if(e.has(t)){let n=e.get(t),o=decodeURIComponent(n);r.success(`跳转链接：${o}`),window.location.href=o;}else r.error("解析跳转的链接失败，原因：搜索参数中没有target参数");}catch(e){C.error("跳转链接失败："+e.message);}}},Ne=`.ecommend-item-box.recommend-recommend-box,\r
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
`,Ue=`/*.blog_container_aside,\r
#nav {\r
	margin-left: -45px;\r
}\r
.recommend-right.align-items-stretch.clearfix,\r
.dl_right_fixed {\r
	margin-left: 45px;\r
}*/\r
`,be={init(){this.addCSS(),i.execMenuOnce("csdn-blog-shieldTopToolbar",()=>this.shieldTopToolbar()),v.ready(()=>{i.execMenuOnce("csdn-blog-removeClipboardHijacking",()=>{this.removeClipboardHijacking();}),i.execMenuOnce("csdn-blog-unBlockCopy",()=>{this.unBlockCopy();});});},addCSS(){return r.info("添加屏蔽CSS和功能CSS"),[b(Ne),b(Ue)]},removeClipboardHijacking(){r.info("去除剪贴板劫持");let e=document.querySelector(".article-copyright");e&&e.remove(),x.articleType&&(x.articleType=0),x.csdn&&x.csdn.copyright&&x.csdn.copyright.textData&&(x.csdn.copyright.textData=""),x.csdn&&x.csdn.copyright&&x.csdn.copyright.htmlData&&(x.csdn.copyright.htmlData="");},unBlockCopy(){r.info("取消禁止复制"),v.on(document,"click",function(t){let n=t.target,o=n.parentElement;if(!n.classList.contains("hljs-button"))return;let l=o.querySelector("code");l=l||o,p.preventEvent(t);let s=l.innerText;r.info("点击复制按钮复制内容："+(s.length>8?s.substring(0,8)+"...":s)),p.setClip(s),n.setAttribute("data-title","复制成功");},{capture:true});let e=new p.LockFunction(function(t){let n=t.target;if(n.localName!=="pre")return;let o=n.querySelector(".hljs-button");o&&o.setAttribute("data-title","复制");});v.on(document,["mouseenter","mouseleave"],function(t){e.run(t);},{capture:true}),p.waitNode("#content_views").then(t=>{var n;x.$&&((n=x.$("#content_views"))==null||n.unbind("copy")),v.on(t,"copy",function(o){p.preventEvent(o);let l=x.getSelection(),s=l==null?void 0:l.toString();return r.info("Ctrl+C复制内容："+(s.length>8?s.substring(0,8)+"...":s)),p.setClip(s),false},{capture:true});}),p.waitNode(".hljs-button").then(()=>{setTimeout(()=>{Te(".hljs-button").forEach(t=>{t.removeAttribute("onclick"),t.removeAttribute("data-report-click"),t.setAttribute("data-title","复制");});},250);});},shieldTopToolbar(){return r.info("屏蔽顶部Toolbar"),m.addBlockCSS("#toolbarBox","#csdn-toolbar")}},ae={init(){y.isLink()?(r.info("Router: 中转链接"),xe.init()):y.isHuaWeiCloudBlog()?(r.info("Router: 华为云联盟"),ge.init()):y.isBlog()?(r.info("Router: 博客"),be.init(),y.isBlogArticle()&&(r.info("Router: 帖子"),Le.init())):y.isWenKu()?(r.info("Router: 文库"),$e.init()):r.error("暂未适配，请反馈开发者："+globalThis.location.href);}},qe={init(){i.execMenuOnce("m-csdn-link-jumpRedirect",()=>{xe.jumpRedirect();});}},Pe=`/* 右下角的 免费赢华为平板xxxx */\r
.org-main-content .siderbar-box {\r
  display: none !important;\r
}\r
`,Fe={init(){b(Pe),i.execMenuOnce("m-csdn-hua-wei-cloud-autoExpandContent",()=>ge.autoExpandContent()),i.execMenuOnce("m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",()=>this.blockBottomJoinTheCommunity());},blockBottomJoinTheCommunity(){return r.info("【屏蔽】底部加入社区"),m.addBlockCSS(".user-desc")}},j={isSuccessResponse(e){return e==null?false:(typeof e=="string"&&(e=p.toJSON(e)),(e==null?void 0:e.code)===200)}},W={async folderListWithCheck(e){let t=await $.get("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/folderListWithCheck",{data:{url:e},fetch:true,allowInterceptConfig:false,headers:{"User-Agent":p.getRandomPCUA()}});r.info(t);let n=p.toJSON(t.data.responseText);if(!t.status||!j.isSuccessResponse(t.data.responseText)){r.error("获取收藏夹信息失败，请求异常"),typeof n.msg=="string"?C.error(n.msg):C.error("获取收藏夹信息失败");return}return n.data.result},async addFavoriteInFolds(e){let t=await $.post("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/addFavoriteInFolds",{fetch:true,data:e,headers:{"Content-Type":"application/json","User-Agent":p.getRandomPCUA()},allowInterceptConfig:false});if(r.info(t),!t.status||!j.isSuccessResponse(t.data.responseText)){r.error("添加收藏失败，请求异常",t),C.error("添加收藏失败，请求异常");return}return  true},async checkFavoriteByUrl(e){debugger;let t=await $.get("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/checkFavoriteByUrl",{data:{url:e},fetch:true,allowInterceptConfig:false,headers:{"User-Agent":p.getRandomPCUA()}});if(r.info(t),!t.status||!j.isSuccessResponse(t.data.responseText)){r.error("检查收藏夹状态失败，请求异常"),C.error("检查收藏夹状态失败，请求异常");return}return p.toJSON(t.data.responseText).data},async createFolder(e){let t=await $.post("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/createFolder",{data:e,fetch:true,headers:{Accept:"application/json, text/javascript, */*; q=0.01","Content-Type":"application/json","User-Agent":p.getRandomPCUA()},allowInterceptConfig:false});if(r.info(t),!t.status||!j.isSuccessResponse(t.data.responseText)){C.error("创建收藏夹失败");return}return p.toJSON(t.data.responseText).data}},Ge={init(){i.exec("m-csdn-blog-shieldTopToolbar",()=>this.shieldTopToolbar(),e=>!i.getValue(e[0]),true),i.execMenuOnce("m-csdn-blog-notLimitCodePreMaxHeight",()=>this.notLimitCodePreMaxHeight()),i.execMenuOnce("m-csdn-blog-notLimitCommentMaxHeight",()=>this.notLimitCommentMaxHeight()),i.execMenuOnce("m-csdn-blog-allowSelectText",()=>this.allowSelectText()),i.execMenuOnce("m-csdn-blog-autoExpandContent",()=>this.autoExpandContent()),i.exec("m-csdn-blog-bottomArticleEnable",()=>this.blockBottomArticle(),e=>!i.getValue(e[0]),true),i.exec("m-csdn-blog-comment-enable",()=>this.blockComment(),e=>!i.getValue(e[0]),true),i.exec("m-csdn-blog-bottom-toolbar-enable",()=>this.blockBottomToolBar(),e=>!i.getValue(e[0]),true),i.execMenuOnce("m-csdn-blog-bottom-toolbar-always-bottom",()=>this.bottomToolBarAlwaysShow()),v.ready(()=>{i.execMenuOnce("m-csdn-blog-removeAds",()=>this.removeAds()),i.execMenuOnce("m-csdn-blog-refactoringRecommendation",()=>{this.refactoringRecommendation();}),i.execMenuOnce("m-csdn-blog-unBlockCopy",()=>{be.unBlockCopy();}),i.execMenuOnce("m-csdn-blog-bottom-toolbar-optimizationCollectButton",()=>{this.optimizationCollectButton();});});},shieldTopToolbar(){return r.info("屏蔽顶部Toolbar"),[m.addBlockCSS("#csdn-toolbar"),b(`
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
			`)]},refactoringRecommendation(){function e(){document.querySelectorAll(".container-fluid").forEach(n=>{var u,g;let o="",l="",s="",d="",h=false,f=false;if(n.hasAttribute("data-url")){if(o=n.getAttribute("data-url"),l=(u=n.querySelector(".recommend_title div.left"))==null?void 0:u.innerHTML,!n.querySelector(".text"))return;s=(g=n.querySelector(".text"))==null?void 0:g.innerHTML,n.querySelectorAll(".recommend-img").length&&n.querySelectorAll(".recommend-img").forEach(M=>{d+=M.innerHTML;});}else o=n.querySelector("a[data-type]").getAttribute("href"),l=n.querySelector(".recommend_title div.left").innerHTML,s=n.querySelector(".text").innerHTML;var c=new URL(o);c.host==="download.csdn.net"||c.host==="www.iteye.com"&&c.pathname.match(/^\/resource/gi)?(h=true,l='<div class="component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>'+l):c.origin.match(/edu.csdn.net/gi)&&(f=true,l='<div class="component-box"><a class="csdn-edu-title" href="javascript:;">CSDN学院</a></div>'+l),n.setAttribute("class","GM-csdn-dl"),n.setAttribute("data-url",o),n.innerHTML=`<div class="GM-csdn-title"><div class="left">${l}</div></div><div class="GM-csdn-content">${s}</div><div class="GM-csdn-img">${d}</div>`,n.addEventListener("click",function(){i.getValue("m-csdn-blog-openNewTab")?window.open(o,"_blank"):window.location.href=o;}),(h||f)&&i.getValue("m-csdn-blog-removeResourceArticle")&&n.remove();});}let t=new p.LockFunction(e,50);p.waitNode("#recommend").then(n=>{r.info("重构底部推荐"),t.run(),p.mutationObserver(n,{callback:()=>{t.run();},config:{childList:true,subtree:true,attributes:true}});});},blockBottomArticle(){return r.info("屏蔽底部文章"),m.addBlockCSS("#recommend")},blockComment(){return r.info("屏蔽评论"),m.addBlockCSS("#comment")},removeAds(){return r.info("去除广告"),[m.waitRemove(".passport-login-container"),m.waitRemove(".btn_open_app_prompt_box.detail-open-removed"),m.waitRemove(".add-firstAd"),m.waitRemove("div.feed-Sign-weixin"),m.waitRemove("div.ios-shadowbox")]},notLimitCodePreMaxHeight(){return r.info("不限制代码块最大高度"),b(`
        pre{
            max-height: unset !important;
        }
        `)},notLimitCommentMaxHeight(){return r.info("不限制评论区最大高度"),b(`
        #comment{
          max-height: none !important;
        }
      `)},allowSelectText(){return r.info("允许选择文字"),b(`
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
        `)},autoExpandContent(){return r.info("自动展开内容"),b(`
        #content_views pre.set-code-hide,
        .article_content{
          height: 100% !important;
          overflow: auto !important;
        }
        `)},blockBottomToolBar(){return r.info("屏蔽底部工具栏"),m.addBlockCSS("#operate")},bottomToolBarAlwaysShow(){return r.info("底部工具栏常驻"),b(`
			/* 底部工具栏 */
			#operate {
				bottom: 0 !important;
			}
			`)},optimizationCollectButton(){r.info("优化收藏按钮"),p.waitNode("#operate .collect-btn",1e4).then(e=>{e&&v.on(e,"click",async t=>{p.preventEvent(t);let n=e.querySelector(".collect"),o=e.querySelector(".uncollect"),l=await W.folderListWithCheck(window.location.origin+window.location.pathname);if(!l)return;let s=[];l.forEach(c=>{c.IsFavorite&&s.push(c.ID);});let d=c=>{let u=c.ID,g=v.createElement("li",{className:"csdn-collection-item",innerHTML:`
									<div class="csdn-collection-item_left">
										<div class="csdn-collection-item_title">
											<span class="title-m">${c.Name}</span>
										</div>
										<span class="csdn-collection-item_ext">
											<span class="csdn-collection-item_length">${c.FavoriteNum}条内容</span>
											<span class="dot">・</span>
											<span class="csdn-collection-controls">${c.IsPrivate?"私密":"公开"}</span>
										</span>
									</div>
									<span class="collect-btn">${c.IsFavorite?"已收藏":"收藏"}</span>
								`},{"data-is-collect":c.IsFavorite});g.querySelector(".title-m");let M=g.querySelector(".csdn-collection-item_length");g.querySelector(".csdn-collection-controls");let A=g.querySelector(".collect-btn");return v.on(A,"click",async ie=>{let T=x.articleDetailUrl;T==null&&(T=window.location.origin+window.location.pathname);let H=x.articleId;if(H==null){r.error("获取文章ID失败"),C.error("获取文章ID失败");return}let U=x.username;if(U==null){r.error("获取文章作者失败"),C.error("获取文章作者失败");return}let q=x.articleTitle;if(q==null&&(q=document.title.replace(/-CSDN博客$/,"")),q==null){r.error("获取文章标题失败"),C.error("获取文章标题失败");return}let w=x.articleDesc;if(w==null){let _=fe("meta[name='description']");_&&(w=_.getAttribute("content"));}if(w==null){r.error("获取文章描述失败"),C.error("获取文章描述失败");return}let S=[...s],k=C.loading("处理中...");try{let _=await W.checkFavoriteByUrl(T);if(_==null)return;r.info(u,_);let B=!_[u];if(B?(r.info("添加收藏"),S.push(u)):(r.info("取消收藏"),S.splice(S.indexOf(u),1)),!await W.addFavoriteInFolds({author:U,url:T,source:"blog",sourceId:H,title:q,description:w,fromType:"PC",username:c.Username,folderIdList:S}))return;let R=await W.checkFavoriteByUrl(T);if(R==null)return;r.info(u,R),g.setAttribute("data-is-collect",(!!R[u]).toString()),B?R[u]?(r.success("收藏成功"),C.success("收藏成功"),v.text(A,"已收藏"),s.includes(u)||s.push(u),c.FavoriteNum++):(r.error("收藏失败",R,u),C.error("收藏失败")):R[u]?(r.error("取消收藏失败",R,u),C.error("取消收藏失败")):(r.success("取消收藏成功"),C.success("取消收藏成功"),v.text(A,"收藏"),s.includes(u)&&s.splice(s.indexOf(u),1),c.FavoriteNum--),v.text(M,`${c.FavoriteNum}条内容`),Object.values(R).find(Ce=>Ce)?(v.show(n,!1),v.hide(o,!1)):(v.show(o,!1),v.hide(n,!1)),k.close();}catch(_){r.error(_);}finally{k.close();}}),g},f=ne.alert({title:{text:"添加收藏夹",position:"center"},content:{text:`
									<ul class="csdn-collection-items"></ul>
								`,html:true},btn:{ok:{enable:false}},width:z.setting.width,height:z.setting.height,drag:true,mask:{enable:true},style:`
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
							`}).$shadowRoot.querySelector(".csdn-collection-items");l.forEach(c=>{let u=d(c);f.appendChild(u);});},{capture:true});});}},He=`/* 右下角的买一年送3个月的广告图标 */\r
.blind_box {\r
  display: none !important;\r
}\r
`,je={init(){b(He),i.execMenuOnce("m-csdn-wenku-shieldBottomToolbar",()=>this.shieldBottomToolbar());},shieldBottomToolbar(){return r.info("【屏蔽】底部工具栏"),m.addBlockCSS(".page-container > div.btn")}},We=`/* 右下角悬浮图标 买1年送3个月 */\r
.page-container .blind_box,\r
/* 底部工具栏右边的 开会员按钮（低至xx元/次） */\r
.page-container .btn .ml-12,\r
/* 登录弹窗 */\r
.passport-login-container,\r
/* 通用广告className匹配 */\r
.ads {\r
	display: none !important;\r
}\r
`,Ke={init(){i.execMenuOnce("m-csdn-download-removeAds",()=>b(We)),i.execMenuOnce("m-csdn-download-automaticallyExpandResourceIntroduction",()=>this.automaticallyExpandResourceIntroduction());},automaticallyExpandResourceIntroduction(){return r.info("自动展开资源介绍"),[m.addBlockCSS("label.unfold-font"),b(`
			.resource-desc{
				max-height: unset !important;
				overflow: unset !important;
			}
			`)]}},ze=`.view_comment_box,\r
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
`,Je=`#mainBox {\r
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
`,Ze={init(){this.addCSS();},addCSS(){return [b(ze),b(Je)]}},se={init(){y.isLink()?(r.info("Router: 中转链接"),qe.init()):y.isHuaWeiCloudBlog()?(r.info("Router: 华为云联盟"),Fe.init()):y.isBlog()?(r.info("Router: 博客"),Ze.init(),y.isBlogArticle()&&(r.info("Router: 文章"),Ge.init())):y.isWenKu()?(r.info("Router: 文库"),je.init()):y.isDownload()?(r.info("Router: 资源下载"),Ke.init()):r.error("暂未适配，请反馈开发者："+globalThis.location.href);}},re={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new L.Dictionary),this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t);},initComponentsStorageApi(e,t,n){let o;this.hasStorageApi(e)?o=this.getStorageApi(e):o=n,this.setComponentsStorageApiProperty(t,o);},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,O,t);}},a=function(e,t,n,o,l,s){let d={text:e,type:"switch",description:l,attributes:{},props:{},getValue(){return !!this.props[O].get(t,n)},callback(h,f){let c=!!f;if(r.success(`${c?"开启":"关闭"} ${e}`),typeof o=="function"&&o(h,c))return;this.props[O].set(t,c);},afterAddToUListCallBack:s};return Reflect.set(d.attributes,F,t),Reflect.set(d.attributes,G,n),re.initComponentsStorageApi("switch",d,{get(h,f){return i.getValue(h,f)},set(h,f){i.setValue(h,f);}}),d},J=function(e,t,n,o,l,s){let d=[];typeof o=="function"?d=o():d=o;let h={text:e,type:"select",description:s,attributes:{},props:{},getValue(){return this.props[O].get(t,n)},callback(f,c,u){let g=c;if(r.info(`选择：${u}`),typeof l=="function"&&l(f,g,u))return;this.props[O].set(t,g);},data:d};return Reflect.set(h.attributes,F,t),Reflect.set(h.attributes,G,n),re.initComponentsStorageApi("select",h,{get(f,c){return i.getValue(f,c)},set(f,c){i.setValue(f,c);}}),h},Ye={id:"component-common",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[J("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,n)=>{r.info("设置当前Qmsg弹出位置"+n);},"Toast显示在页面九宫格的位置"),J("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),a("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},ce=function(e,t,n,o,l,s,d,h,f){let c={text:e,type:"slider",description:h,attributes:{},props:{},getValue(){return this.props[O].get(t,n)},getToolTipContent(u){return typeof d=="function"?d(u):`${u}`},callback(u,g){if(typeof s=="function"&&s(u,g))return;this.props[O].set(t,g);},min:o,max:l,step:f};return Reflect.set(c.attributes,F,t),Reflect.set(c.attributes,G,n),re.initComponentsStorageApi("slider",c,{get(u,g){return i.getValue(u,g)},set(u,g){i.setValue(u,g);}}),c},Qe={id:"panel-blog",title:"博客",isDefault(){return y.isBlog()},forms:[{type:"forms",text:"",forms:[{type:"deepMenu",text:"文章",forms:[{type:"forms",text:"",forms:[{text:"布局屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[a("【屏蔽】登录弹窗","csdn-blog-shieldLoginDialog",true),a("【屏蔽】左侧博客信息","csdn-blog-shieldLeftBlogContainerAside",false),a("【屏蔽】右侧目录信息","csdn-blog-shieldRightDirectoryInformation",false),a("【屏蔽】底部的悬浮工具栏","csdn-blog-shieldBottomFloatingToolbar",false)]}]},{text:"右侧悬浮工具栏",type:"deepMenu",forms:[{text:"功能",type:"forms",forms:[a("启用","csdn-blog-rightToolbarEnable",true,void 0,"创作中心，隐藏/显示侧栏，新手引导，客服、举报..."),a("【添加按钮】前往评论","csdn-blog-addGotoRecommandButton",true,void 0,"在悬浮工具栏最后面添加"),ce("right偏移","csdn-blog-rightToolbarRightOffset",90,0,document.documentElement.clientWidth,(e,t)=>{let n=document.querySelector(".csdn-side-toolbar");v.css(n,{right:t+"px"});},e=>`当前：${e}px，默认：90px`),ce("top偏移","csdn-blog-rightToolbarTopOffset",140,0,document.documentElement.clientHeight,(e,t)=>{let n=document.querySelector(".csdn-side-toolbar");v.css(n,{top:t+"px"});},e=>`当前：${e}px，默认：90px`)]},{text:"屏蔽",type:"forms",forms:[a("【屏蔽】创作中心","csdn-blog-rightToolbarCreativeCenter",false),a("【屏蔽】显示/隐藏侧栏","csdn-blog-rightToolbarShowOrSidebar",false),a("【屏蔽】新手引导","csdn-blog-rightToolbarBeginnerGuidance",false),a("【屏蔽】客服","csdn-blog-rightToolbarCustomerService",false),a("【屏蔽】举报","csdn-blog-rightToolbarReport",false),a("【屏蔽】返回顶部","csdn-blog-rightToolbarBackToTop",false)]}]},{text:"内容",type:"deepMenu",forms:[{text:"功能",type:"forms",forms:[a("点击代码块自动展开","csdn-blog-clickPreCodeAutomatically",true,void 0,"当鼠标点击代码块区域时，将自动展开内容"),a("自动展开代码块","csdn-blog-autoExpandCodeContent",true,void 0,"懒人操作，免手动点击展开"),a("自动展开内容","csdn-blog-autoExpandContent",true,void 0,"懒人操作，免手动点击展开"),a("全文居中","csdn-blog-articleCenter",true,function(e,t){t&&alert("为了更好的呈现效果，请开启功能：【屏蔽】左侧博客信息、【屏蔽】右侧目录信息");},"自动屏蔽左侧和右侧的信息，且将文章居中"),a("允许选择内容","csdn-blog-allowSelectContent",true,void 0)]},{text:"屏蔽",type:"forms",forms:[a("【屏蔽】底部xx技能树","csdn-blog-shieldBottomSkillTree",false),a("【屏蔽】选中文字悬浮栏","csdn-blog-shieldArticleSearchTip",false,void 0,"选中文字弹出的，例如：搜索、评论、笔记")]}]},{text:"评论区",type:"deepMenu",forms:[{text:"",type:"forms",forms:[a("启用","csdn-blog-blockComment",true,void 0,"关闭是屏蔽评论区"),a("优化评论区的位置","csdn-blog-restoreComments",true)]}]},{text:"底部文章",type:"deepMenu",forms:[{text:"",type:"forms",forms:[a("启用","csdn-blog-bottomRecommendArticleEnable",true,void 0,"关闭是屏蔽底部文章"),a("标识CSDN下载","csdn-blog-identityCSDNDownload",true,void 0,"使用红框标识"),a("移除资源下载的文章","csdn-blog-removeResourceDownloadArticle",false,void 0,"download.csdn.net<br>www.iteye.com<br>edu.csdn.net")]}]}]}]}]},{text:"",type:"forms",forms:[{text:"全局布局屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[a("【屏蔽】顶部工具栏","csdn-blog-shieldTopToolbar",false)]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[a("拦截-复制的小尾巴","csdn-blog-removeClipboardHijacking",true),a("劫持-禁止复制","csdn-blog-unBlockCopy",true,void 0,"允许点击复制按钮进行复制")]}]}]}]},Xe={id:"panel-link",title:"链接",isDefault(){return y.isLink()},forms:[{text:"功能",type:"forms",forms:[a("重定向链接","csdn-link-jumpRedirect",true,void 0,"自动跳转至被拦截的Url链接")]}]},et={id:"panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return y.isHuaWeiCloudBlog()},forms:[{text:"功能",type:"forms",forms:[a("自动展开全文","csdn-hua-wei-cloud-autoExpandContent",true)]},{text:"屏蔽",type:"forms",forms:[a("【屏蔽】云开发者任务挑战活动","csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",true),a("【屏蔽】左侧悬浮按钮","csdn-hua-wei-cloud-shieldLeftFloatingButton",false,function(e,t){t&&alert("开启后将屏蔽【当前阅读量】、【点赞按钮】、【评论按钮】、【分享按钮】");}),a("【屏蔽】右侧栏","csdn-hua-wei-cloud-blockRightColumn",false,function(e,t){t&&alert("开启后将屏蔽【相关产品】-【活动日历】-【运营活动】-【热门标签】");}),a("【屏蔽】底部推荐内容","csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",false),a("【屏蔽】底部更多推荐","csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",false)]}]},tt={id:"panel-wenku",title:"资源",isDefault(){return y.isLink()},forms:[{text:"屏蔽",type:"forms",forms:[a("【屏蔽】资源推荐","csdn-wenku-shieldResourceRecommend",false),a("【屏蔽】右侧用户信息","csdn-wenku-shieldRightUserInfo",false),a("【屏蔽】右侧悬浮工具栏","csdn-wenku-shieldRightToolBar",false)]}]},nt={id:"panel-so",title:"搜索",isDefault(){return y.isSo()},forms:[{text:"C知道-功能",type:"forms",forms:[a("去除水印","csdn-so-cknow-removeMaskCover",true)]}]},ot={id:"component-common",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[J("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,n)=>{r.info("设置当前Qmsg弹出位置"+n);},"Toast显示在页面九宫格的位置"),J("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),a("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},rt={id:"m-panel-blog",title:"博客",isDefault(){return y.isBlog()},forms:[{type:"forms",text:"",forms:[{type:"deepMenu",text:"文章",forms:[{text:"",type:"forms",forms:[{type:"deepMenu",text:"顶部工具栏",forms:[{type:"forms",text:"",forms:[a("启用","m-csdn-blog-shieldTopToolbar",false,void 0,"关闭是屏蔽顶部工具栏")]}]},{text:"内容",type:"deepMenu",forms:[{text:"",type:"forms",forms:[a("允许选中文字","m-csdn-blog-allowSelectText",true,void 0,"设置user-select: text;"),a("自动展开","m-csdn-blog-autoExpandContent",true,void 0,"包括内容、代码块"),a("不限制代码块的最大高度","m-csdn-blog-notLimitCodePreMaxHeight",false,void 0,"让代码块的高度直接被撑开")]}]},{text:"评论",type:"deepMenu",forms:[{text:"",type:"forms",forms:[a("启用","m-csdn-blog-comment-enable",true,void 0,"关闭是屏蔽评论区"),a("不限制评论区的最大高度","m-csdn-blog-notLimitCommentMaxHeight",true,void 0,"让评论区高度直接被撑开")]}]},{text:"底部文章",type:"deepMenu",forms:[{text:"",type:"forms",forms:[a("启用","m-csdn-blog-bottomArticleEnable",true,void 0,"关闭是屏蔽底部文章"),a("移除资源下载","m-csdn-blog-removeResourceArticle",false,void 0,"download.csdn.net<br>www.iteye.com<br>edu.csdn.net"),a("重构","m-csdn-blog-refactoringRecommendation",true,void 0,"文章的样式统一"),a("新标签页打开","m-csdn-blog-openNewTab",true,void 0,"新标签页打开文章")]}]},{type:"deepMenu",text:"底部工具栏",forms:[{type:"forms",text:"",forms:[a("启用","m-csdn-blog-bottom-toolbar-enable",false,void 0,"关闭是屏蔽底部工具栏"),a("常驻底部","m-csdn-blog-bottom-toolbar-always-bottom",false,void 0,"开启后底部工具栏不随下滑滚动而隐藏"),a("优化收藏按钮","m-csdn-blog-bottom-toolbar-optimizationCollectButton",false,void 0,"可以自行选择收藏夹")]}]}]}]}]},{type:"forms",text:"",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[a("【屏蔽】广告","m-csdn-blog-removeAds",true,void 0,"包括：登录弹窗、打开APP、ios版本提示等"),a("允许复制","m-csdn-blog-unBlockCopy",true,void 0,"允许点击复制按钮进行复制")]}]}]}]},it={id:"m-panel-link",title:"链接",isDefault(){return y.isLink()},forms:[{text:"功能",type:"forms",forms:[a("重定向链接","m-csdn-link-jumpRedirect",true,void 0,"自动跳转至被拦截的Url链接")]}]},lt={id:"m-panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return y.isHuaWeiCloudBlog()},forms:[{text:"功能",type:"forms",forms:[a("自动展开全文","m-csdn-hua-wei-cloud-autoExpandContent",true)]},{text:"屏蔽",type:"forms",forms:[a("【屏蔽】底部加入社区","m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",true)]}]},at={id:"m-panel-wenku",title:"文库",isDefault(){return y.isWenKu()},forms:[{text:"屏蔽",type:"forms",forms:[a("【屏蔽】底部工具栏","m-csdn-wenku-shieldBottomToolbar",false)]}]},st={id:"panel-so",title:"搜索",isDefault(){return y.isSo()},forms:[{text:"C知道-功能",type:"forms",forms:[a("去除水印","m-csdn-so-cknow-removeMaskCover",true)]}]},ct={id:"m-panel-download",title:"资源",isDefault(){return y.isDownload()},forms:[{text:"功能",type:"forms",forms:[a("自动展开资源介绍","m-csdn-download-automaticallyExpandResourceIntroduction",true,void 0,"屏蔽资源介绍【展开全部】按钮并展开资源介绍")]},{text:"屏蔽",type:"forms",forms:[a("【屏蔽】广告","m-csdn-download-removeAds",true,void 0,"包括：登录弹窗、会员降价等")]}]};oe.deleteMenuOption(0);oe.addMenuOption([{key:"show_pops_panel_setting",text:"⚙ PC端设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{i.showPanel(N.getConfig(0));}},{key:"m_show_pops_panel_setting",text:"⚙ 移动端端设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{i.showPanel(N.getConfig(1));}},{key:"gotoCSDNCKnow",text:"⚙ 前往C知道",isStoreValue:false,autoReload:false,showText(e){return e},callback(){window.open("https://so.csdn.net/chat","_blank");}}]);N.addContentConfig([Ye,Qe,Xe,et,tt,nt]);N.addContentConfig([ot,rt,it,lt,at,st,ct]);i.init();let we=p.isPhone(),P="change_env_set",E=ee(P);pe.add({key:P,text:`⚙ 自动: ${we?"移动端":"PC端"}`,autoReload:false,isStoreValue:false,showText(e){return E==null?e:e+` 手动: ${E==1?"移动端":E==2?"PC端":"未知"}`},callback:()=>{let e=[0,1,2],t=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!t)return;let n=parseInt(t);if(isNaN(n)){C.error("输入的不是规范的数字");return}if(!e.includes(n)){C.error("输入的值必须是0或1或2");return}n==0?X(P):te(P,n);}});E!=null?(r.info(`手动判定为${E===1?"移动端":"PC端"}`),E==1?se.init():E==2?ae.init():(C.error("意外，手动判定的值不在范围内"),X(P))):we?(r.info("自动判定为移动端"),se.init()):(r.info("自动判定为PC端"),ae.init());

})(Qmsg, DOMUtils, Utils, pops);