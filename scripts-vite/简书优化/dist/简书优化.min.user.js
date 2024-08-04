// ==UserScript==
// @name         简书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.8.4
// @author       WhiteSevs
// @description  支持手机端和PC端、屏蔽广告、优化浏览体验、重定向链接、全文居中、自动展开全文、允许复制文字、劫持唤醒/跳转App、自定义屏蔽元素等
// @license      GPL-3.0-only
// @icon         https://www.jianshu.com/favicon.ico
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.jianshu.com/*
// @match        *://*.jianshu.io/*
// @require      https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.1.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.3.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.5.0/dist/index.umd.js
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

(function (x, H, $, J) {
	'use strict';

	var L=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,A=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,C=typeof GM_getValue<"u"?GM_getValue:void 0,y=typeof GM_info<"u"?GM_info:void 0,O=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,E=typeof GM_setValue<"u"?GM_setValue:void 0,F=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,W=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,v=typeof unsafeWindow<"u"?unsafeWindow:void 0,q=window;const z="简书优化",h=$.noConflict(),K=H.noConflict(),l=new h.Log(y,v.console||q.console);var G;const P=((G=y==null?void 0:y.script)==null?void 0:G.name)||z,U=!1;l.config({debug:U,logMaxCount:1e3,autoClearConsole:!0,tag:!0});x.config(Object.defineProperties({html:!0,autoClose:!0,showClose:!1},{position:{get(){return i.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return i.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return i.getValue("qmsg-config-showreverse",!0)}},zIndex:{get(){let e=$.getMaxZIndex(),t=J.config.InstanceUtils.getPopsMaxZIndex(e).zIndex;return $.getMaxValue(e,t)+100}}}));const N=new h.GM_Menu({GM_getValue:C,GM_setValue:E,GM_registerMenuCommand:O,GM_unregisterMenuCommand:F}),k=new h.Httpx(W);k.interceptors.response.use(void 0,e=>(l.error(["拦截器-请求错误",e]),e.type==="onabort"?x.warning("请求取消"):e.type==="onerror"?x.error("请求异常"):e.type==="ontimeout"?x.error("请求超时"):x.error("其它错误"),e));k.config({logDetails:U});v.Object.defineProperty,v.Function.prototype.apply,v.Function.prototype.call,v.Element.prototype.appendChild,v.setTimeout;const T=h.addStyle.bind(h),M="GM_Panel",Z="data-init",R="data-key",V="data-default-value",Y="data-init-more-value",p=function(e,t,n,o,r){let a={text:e,type:"switch",description:r,attributes:{},getValue(){return !!i.getValue(t,n)},callback(d,f){l.success(`${f?"开启":"关闭"} ${e}`),i.setValue(t,!!f);},afterAddToUListCallBack:void 0};return a.attributes&&(a.attributes[R]=t,a.attributes[V]=!!n),a},Q={id:"jianshu-panel-config-pc",title:"桌面端",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[p("全文居中","JianShuArticleCenter",!0),p("自动展开全文","JianShuAutoExpandFullText",!0),p("重定向链接","JianShuAutoJumpRedirect_PC",!0,void 0,"自动跳转简书拦截的Url链接")]}]},{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[p("【屏蔽】底部推荐阅读","JianShuShieldRecommendedReading",!1),p("【屏蔽】评论区","JianShuShieldUserComments",!1),p("【屏蔽】相关文章","JianShuShieldRelatedArticles",!1),p("【屏蔽】客户端弹窗","jianshu-shieldClientDialog",!0,void 0,"弹出的【扫码安装简书客户端 畅享全文阅读体验】"),p("【屏蔽】顶部导航栏","jianshu-shieldTopNav",!1),p("【屏蔽】底部工具栏","jianshu-shieldBottomToolbar",!1,void 0,"屏蔽掉底部悬浮的评论输入框、评论、点赞...")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[p("拦截-剪贴板","JianShuRemoveClipboardHijacking",!0,void 0,"去除禁止复制")]}]}]}]},X={id:"jianshu-panel-config-mobile",title:"移动端",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[p("自动展开全文","JianShuAutoExpandFullText_Mobile",!0),p("重定向链接","JianShuAutoJumpRedirect_Mobile",!0,void 0,"自动跳转简书拦截的Url链接")]}]},{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[p("【屏蔽】底部推荐阅读","JianShuremoveFooterRecommendRead",!1),p("【屏蔽】评论区","JianShuShieldUserCommentsMobile",!1)]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[p("拦截-剪贴板","JianShuRemoveClipboardHijacking_Mobile",!0,void 0,"去除禁止复制"),p("劫持-唤醒/跳转App","JianShuHijackSchemeScriptLabel_Mobile",!0,void 0,"去除简书唤醒调用App")]}]}]}]},D=function(e,t,n,o,r,a){let d=[];typeof o=="function"?d=o():d=o;let f={text:e,type:"select",description:a,attributes:{},getValue(){return i.getValue(t,n)},callback(g,u,c){i.setValue(t,u),typeof r=="function"&&r(g,u,c);},data:d};return f.attributes&&(f.attributes[R]=t,f.attributes[V]=n),f},ee={id:"jianshu-panel-common",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[D("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,n)=>{l.info("设置当前Qmsg弹出位置"+n);},"Toast显示在页面九宫格的位置"),D("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),p("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]},i={$data:{__data:null,__oneSuccessExecMenu:null,__onceExec:null,__listenData:null,get data(){return i.$data.__data==null&&(i.$data.__data=new h.Dictionary),i.$data.__data},get oneSuccessExecMenu(){return i.$data.__oneSuccessExecMenu==null&&(i.$data.__oneSuccessExecMenu=new h.Dictionary),i.$data.__oneSuccessExecMenu},get onceExec(){return i.$data.__onceExec==null&&(i.$data.__onceExec=new h.Dictionary),i.$data.__onceExec},get scriptName(){return P},key:M,attributeKeyName:R,attributeDefaultValueName:V},$listener:{get listenData(){return i.$data.__listenData==null&&(i.$data.__listenData=new h.Dictionary),i.$data.__listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},isTopWindow(){return v.top===v.self},initExtensionsMenu(){this.isTopWindow()&&N.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPanel();}}]);},initPanelDefaultValue(){let e=this;function t(r){if(!r.attributes)return;let a={},d=r.attributes[R];d!=null&&(a[d]=r.attributes[V]);let f=r.attributes[Z];if(typeof f=="function"){let c=f();if(typeof c=="boolean"&&!c)return}let g=r.attributes[Y];g&&typeof g=="object"&&Object.assign(a,g);let u=Object.keys(a);if(!u.length){l.warn(["请先配置键",r]);return}u.forEach(c=>{let s=a[c];e.$data.data.has(c)&&l.warn("请检查该key(已存在): "+c),e.$data.data.set(c,s);});}function n(r){for(let a=0;a<r.length;a++){let d=r[a];t(d);let f=d.forms;f&&Array.isArray(f)&&n(f);}}let o=this.getPanelContentConfig();for(let r=0;r<o.length;r++){let a=o[r];if(!a.forms)continue;let d=a.forms;d&&Array.isArray(d)&&n(d);}},setValue(e,t){let n=C(M,{}),o=n[e];n[e]=t,E(M,n),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,o,t);},getValue(e,t){let o=C(M,{})[e];return o??(this.$data.data.has(e)?this.$data.data.get(e):t)},deleteValue(e){let t=C(M,{}),n=t[e];Reflect.deleteProperty(t,e),E(M,t),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,n,void 0);},addValueChangeListener(e,t){let n=Math.random();return this.$listener.listenData.set(e,{id:n,key:e,callback:t}),n},removeValueChangeListener(e){let t=null;for(const[n,o]of this.$listener.listenData.entries())if(o.id===e){t=n;break}typeof t=="string"?this.$listener.listenData.delete(t):console.warn("没有找到对应的监听器");},triggerMenuValueChange(e,t,n){if(this.$listener.listenData.has(e)){let o=this.$listener.listenData.get(e);if(typeof o.callback=="function"){let r=this.getValue(e),a=r,d=r;typeof t<"u"&&arguments.length>1&&(a=t),typeof n<"u"&&arguments.length>2&&(d=n),o.callback(e,d,a);}}},hasKey(e){let t=C(M,{});return e in t},execMenu(e,t,n=!1){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){l.warn(`${e} 键不存在`);return}let o=i.getValue(e);n&&(o=!o),o&&t(o);},execMenuOnce(e,t,n,o){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){l.warn(`${e} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(e))return;this.$data.oneSuccessExecMenu.set(e,1);let r=()=>{let u=i.getValue(e);return typeof n=="function"?n(e,u):u},a=[],d=u=>{let c=r(),s=[];if(u instanceof HTMLStyleElement?s=[u]:Array.isArray(u)&&(s=[...u.filter(m=>m!=null&&m instanceof HTMLStyleElement)]),c)a=a.concat(s);else for(let m=0;m<s.length;m++)s[m].remove(),s.splice(m,1),m--;},f=u=>{let c=[];if(u){let s=t(u,d);s instanceof HTMLStyleElement?c=[s]:Array.isArray(s)&&(c=[...s.filter(m=>m!=null&&m instanceof HTMLStyleElement)]);}for(let s=0;s<a.length;s++)a[s].remove(),a.splice(s,1),s--;a=[...c];};this.addValueChangeListener(e,(u,c,s)=>{let m=s;typeof o=="function"&&(m=o(u,s,c)),f(m);});let g=r();g&&f(g);},execInheritMenuOnce(e,t,n,o){let r=this;const a=(d,f)=>{let g=r.getValue(d),u=r.getValue(f);if(typeof o=="function"){let c=o(g,u);if(c!==void 0)return c}return g};this.execMenuOnce(e,n,()=>a(e,t),()=>a(e,t)),this.execMenuOnce(t,()=>{},()=>!1,()=>(this.triggerMenuValueChange(e),!1));},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(t(),this.$data.onceExec.set(e,1));},showPanel(){J.panel({title:{text:`${P}-设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:this.isMobile(),width:this.getWidth(),height:this.getHeight(),drag:!0,only:!0});},isMobile(){return window.innerWidth<550},getWidth(){return window.innerWidth<550?"92vw":"550px"},getHeight(){return window.innerHeight>450?"80vh":"450px"},getPanelContentConfig(){return [ee,Q,X]}},te=`.download-app-guidance,\r
.call-app-btn,\r
.collapse-tips,\r
.note-graceful-button,\r
.app-open,\r
.header-wrap,\r
.recommend-wrap.recommend-ad,\r
.call-app-Ad-bottom,\r
#recommended-notes p.top-title span.more,\r
#homepage .modal,\r
button.index_call-app-btn,\r
span.note__flow__download,\r
.download-guide,\r
#footer,\r
.comment-open-app-btn-wrap,\r
.nav.navbar-nav + div,\r
.self-flow-ad,\r
#free-reward-panel,\r
div[id*='AdFive'],\r
#index-aside-download-qrbox,\r
.baidu-app-download-2eIkf_1,\r
/* 底部的"小礼物走一走，来简书关注我"、赞赏支持和更多精彩内容，就在简书APP */\r
div[role="main"] > div > section:first-child > div:nth-last-child(2),\r
/* 它的内部是script标签，可能影响部分评论之间的高度问题 */\r
div.adad_container ,\r
/* 顶部导航栏的【下载App】 */\r
#__next nav a[href*="navbar-app"] {\r
	display: none !important;\r
}\r
body.reader-day-mode.normal-size {\r
	overflow: auto !important;\r
}\r
.collapse-free-content {\r
	height: auto !important;\r
}\r
.copyright {\r
	color: #000 !important;\r
}\r
#note-show .content .show-content-free .collapse-free-content:after {\r
	background-image: none !important;\r
}\r
footer > div > div {\r
	justify-content: center;\r
}\r
/* 修复底部最后编辑于：。。。在某些套壳浏览器上的错位问题 */\r
#note-show .content .show-content-free .note-meta-time {\r
	margin-top: 0px !important;\r
}\r
`,ne={isGoWild(){return window.location.pathname==="/go-wild"}},_={addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),T(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){let t=typeof A=="function"?A(e.keyName):"";typeof t=="string"&&t?T(t):_.addLinkNode(e.url);},async addLinkNode(e){let t=document.createElement("link");return t.rel="stylesheet",t.type="text/css",t.href=e,K.ready(()=>{document.head.appendChild(t);}),t},fixUrl(e){return e=e.trim(),e.match(/^http(s|):\/\//i)||(e.startsWith("/")||(e+="/"),e=window.location.origin+e),e}},I=function(e=""){h.waitNodeList(e).then(t=>{t.forEach(n=>n.remove());});},w={init(){this.addCSS(),i.execMenu("JianShuAutoJumpRedirect_PC",()=>{this.jumpRedirect();}),i.execMenu("JianShuRemoveClipboardHijacking",()=>{this.removeClipboardHijacking();}),i.execMenu("JianShuAutoExpandFullText",()=>{this.autoExpandFullText();}),i.execMenu("JianShuArticleCenter",()=>this.articleCenter()),i.execMenu("JianShuShieldRelatedArticles",()=>this.shieldRelatedArticles()),i.execMenu("jianshu-shieldClientDialog",()=>{this.shieldClientDialog();}),i.execMenuOnce("JianShuShieldUserComments",()=>this.shieldUserComments()),i.execMenuOnce("JianShuShieldRecommendedReading",()=>this.shieldRecommendedReading()),i.execMenuOnce("jianshu-shieldTopNav",()=>this.shieldTopNav()),i.execMenuOnce("jianshu-shieldBottomToolbar",()=>this.shieldBottomToolbar());},addCSS(){return l.info("添加屏蔽CSS"),T(te)},articleCenter(){l.info("全文居中");let e=[];return e.push(_.addBlockCSS("div[role=main] aside","div._3Pnjry"),T(`
			div[role=main] aside,
			div._3Pnjry{
				display: none !important;
			}
			div._gp-ck{
				width: 100% !important;
			}`)),I("div[role=main] aside"),I("div._3Pnjry"),h.waitNodeList("div._gp-ck").then(t=>{t.forEach(n=>{n.style.width="100%";});}),e},removeClipboardHijacking(){l.info("去除剪贴板劫持");const e=t=>{t.stopPropagation();};window.addEventListener("copy",e,!0),document.addEventListener("copy",e,!0);},autoExpandFullText(){h.waitNode('div#homepage div[class*="dialog-"]').then(e=>{e.style.visibility="hidden",l.info("自动展开全文"),h.mutationObserver(e,{callback:t=>{t.length!=0&&t.forEach(n=>{var o;n.target.style.display!="none"&&(l.success("自动展开全文-自动点击"),(o=document.querySelector('div#homepage div[class*="dialog-"] .cancel'))==null||o.click());});},config:{childList:!1,attributes:!0,characterData:!0,subtree:!0}});});},jumpRedirect(){if(ne.isGoWild()){l.success("去除简书拦截其它网址的url并自动跳转"),window.stop();let e=window.location.href.replace(window.location.origin+"/","");e=decodeURIComponent(e);let t=e.replace(/^go-wild\?ac=2&url=/gi,"").replace(/^https:\/\/link.zhihu.com\/\?target\=/gi,"");window.location.href=t;}},shieldRelatedArticles(){return l.info("屏蔽相关文章"),_.addBlockCSS('div[role="main"] > div > section:nth-child(2)')},shieldClientDialog(){l.info("【屏蔽】客户端弹窗"),_.addBlockCSS('div:has(>div[class*="-mask"]:not([class*="-mask-hidden"]) + div[tabindex="-1"][role="dialog"])'),h.waitNode('div[class*="-mask"]:not([class*="-mask-hidden"]) + div[tabindex="-1"][role="dialog"]').then(e=>{l.success("弹窗出现"),h.waitPropertyByInterval(e,()=>{var n,o,r,a;let t=h.getReactObj(e);return (a=(r=(o=(n=t==null?void 0:t.reactInternalInstance)==null?void 0:n.return)==null?void 0:o.return)==null?void 0:r.memoizedProps)==null?void 0:a.onClose},250,1e4).then(()=>{h.getReactObj(e).reactInternalInstance.return.return.memoizedProps.onClose(new Event("click")),l.success("调用函数关闭弹窗");});});},shieldUserComments(){return l.info("屏蔽评论区"),_.addBlockCSS("div#note-page-comment")},shieldRecommendedReading(){return l.info("屏蔽底部推荐阅读"),_.addBlockCSS('div[role="main"] > div > section:last-child')},shieldTopNav(){return l.info("【屏蔽】顶部导航栏"),_.addBlockCSS("header")},shieldBottomToolbar(){return l.info("【屏蔽】底部工具栏"),_.addBlockCSS("footer")}},j={init(){this.addCSS(),i.execMenu("JianShuAutoJumpRedirect_Mobile",()=>{w.jumpRedirect();}),i.execMenu("JianShuHijackSchemeScriptLabel_Mobile",()=>{this.handlePrototype();}),i.execMenu("JianShuRemoveClipboardHijacking_Mobile",()=>{w.removeClipboardHijacking();}),i.execMenu("JianShuAutoExpandFullText_Mobile",()=>{w.autoExpandFullText();}),i.execMenuOnce("JianShuremoveFooterRecommendRead",()=>this.removeFooterRecommendRead()),i.execMenu("JianShuShieldUserCommentsMobile",()=>this.shieldUserComments());},addCSS(){w.addCSS();},removeFooterRecommendRead(){return l.info("屏蔽底部推荐阅读"),_.addBlockCSS("#recommended-notes")},handlePrototype(){l.info("处理原型添加script标签");let e=Node.prototype.appendChild;v.Node.prototype.appendChild=function(t){let n=["img"];return t.src&&!t.src.includes("jianshu.io")&&!n.includes(t.localName)?(l.success(["禁止添加的元素",t]),null):e.call(this,t)};},shieldUserComments(){return l.info("屏蔽评论区"),_.addBlockCSS("#comment-main")}};i.init();let B=h.isPhone(),b="change_env_set",S=C(b);N.add({key:b,text:`⚙ 自动: ${B?"移动端":"PC端"}`,autoReload:!1,isStoreValue:!1,showText(e){return S==null?e:e+` 手动: ${S==1?"移动端":S==2?"PC端":"未知"}`},callback:()=>{let e=[0,1,2],t=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!t)return;let n=parseInt(t);if(isNaN(n)){x.error("输入的不是规范的数字");return}if(!e.includes(n)){x.error("输入的值必须是0或1或2");return}n==0?L(b):E(b,n);}});S!=null?(l.info(`手动判定为${S===1?"移动端":"PC端"}`),S==1?j.init():S==2?w.init():(x.error("意外，手动判定的值不在范围内"),L(b))):B?(l.info("自动判定为移动端"),j.init()):(l.info("自动判定为PC端"),w.init());

})(Qmsg, DOMUtils, Utils, pops);