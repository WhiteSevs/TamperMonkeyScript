// ==UserScript==
// @name         简书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.7.24
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

(function (g, B, V, j) {
	'use strict';

	var $=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,P=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,S=typeof GM_getValue<"u"?GM_getValue:void 0,_=typeof GM_info<"u"?GM_info:void 0,F=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,b=typeof GM_setValue<"u"?GM_setValue:void 0,H=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,O=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,m=typeof unsafeWindow<"u"?unsafeWindow:void 0,q=window;const W="简书优化",d=V.noConflict(),z=B.noConflict(),i=new d.Log(_,m.console||q.console);var J;const A=((J=_==null?void 0:_.script)==null?void 0:J.name)||W,U=!1;i.config({debug:U,logMaxCount:1e3,autoClearConsole:!0,tag:!0});g.config(Object.defineProperties({html:!0,autoClose:!0,showClose:!1},{position:{get(){return o.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return o.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return o.getValue("qmsg-config-showreverse",!0)}},zIndex:{get(){let e=V.getMaxZIndex(),t=j.config.InstanceUtils.getPopsMaxZIndex(e).zIndex;return V.getMaxValue(e,t)+100}}}));const I=new d.GM_Menu({GM_getValue:S,GM_setValue:b,GM_registerMenuCommand:F,GM_unregisterMenuCommand:H}),L=new d.Httpx(O);L.interceptors.response.use(void 0,e=>(i.error(["拦截器-请求错误",e]),e.type==="onabort"?g.warning("请求取消"):e.type==="onerror"?g.error("请求异常"):e.type==="ontimeout"?g.error("请求超时"):g.error("其它错误"),e));L.config({logDetails:U});m.Object.defineProperty,m.Function.prototype.apply,m.Function.prototype.call,m.Element.prototype.appendChild,m.setTimeout;const E=d.addStyle.bind(d),x="GM_Panel",R="data-key",T="data-default-value",u=function(e,t,n,l,r){let a={text:e,type:"switch",description:r,attributes:{},getValue(){return !!o.getValue(t,n)},callback(s,c){i.success(`${c?"开启":"关闭"} ${e}`),o.setValue(t,!!c);},afterAddToUListCallBack:void 0};return a.attributes&&(a.attributes[R]=t,a.attributes[T]=!!n),a},K={id:"jianshu-panel-config-pc",title:"桌面端",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[u("全文居中","JianShuArticleCenter",!0),u("自动展开全文","JianShuAutoExpandFullText",!0),u("重定向链接","JianShuAutoJumpRedirect_PC",!0,void 0,"自动跳转简书拦截的Url链接")]}]},{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[u("【屏蔽】底部推荐阅读","JianShuShieldRecommendedReading",!1),u("【屏蔽】评论区","JianShuShieldUserComments",!1),u("【屏蔽】相关文章","JianShuShieldRelatedArticles",!1),u("【屏蔽】客户端弹窗","jianshu-shieldClientDialog",!0,void 0,"弹出的【扫码安装简书客户端 畅享全文阅读体验】"),u("【屏蔽】顶部导航栏","jianshu-shieldTopNav",!1),u("【屏蔽】底部工具栏","jianshu-shieldBottomToolbar",!1,void 0,"屏蔽掉底部悬浮的评论输入框、评论、点赞...")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[u("拦截-剪贴板","JianShuRemoveClipboardHijacking",!0,void 0,"去除禁止复制")]}]}]}]},Z={id:"jianshu-panel-config-mobile",title:"移动端",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[u("自动展开全文","JianShuAutoExpandFullText_Mobile",!0),u("重定向链接","JianShuAutoJumpRedirect_Mobile",!0,void 0,"自动跳转简书拦截的Url链接")]}]},{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[u("【屏蔽】底部推荐阅读","JianShuremoveFooterRecommendRead",!1),u("【屏蔽】评论区","JianShuShieldUserCommentsMobile",!1)]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[u("拦截-剪贴板","JianShuRemoveClipboardHijacking_Mobile",!0,void 0,"去除禁止复制"),u("劫持-唤醒/跳转App","JianShuHijackSchemeScriptLabel_Mobile",!0,void 0,"去除简书唤醒调用App")]}]}]}]},D=function(e,t,n,l,r,a){let s=[];typeof l=="function"?s=l():s=l;let c={text:e,type:"select",description:a,attributes:{},getValue(){return o.getValue(t,n)},callback(v,f,w){o.setValue(t,f),typeof r=="function"&&r(v,f,w);},data:s};return c.attributes&&(c.attributes[R]=t,c.attributes[T]=n),c},Y={id:"jianshu-panel-common",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[D("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,n)=>{i.info("设置当前Qmsg弹出位置"+n);},"Toast显示在页面九宫格的位置"),D("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),u("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]},h={data:null,oneSuccessExecMenu:null,onceExec:null,listenData:null},o={$data:{get data(){return h.data==null&&(h.data=new d.Dictionary),h.data},get oneSuccessExecMenu(){return h.oneSuccessExecMenu==null&&(h.oneSuccessExecMenu=new d.Dictionary),h.oneSuccessExecMenu},get onceExec(){return h.onceExec==null&&(h.onceExec=new d.Dictionary),h.onceExec},get scriptName(){return A},key:x,attributeKeyName:R,attributeDefaultValueName:T},$listener:{get listenData(){return h.listenData==null&&(h.listenData=new d.Dictionary),h.listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},initExtensionsMenu(){m.top===m.self&&I.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPanel();}}]);},initPanelDefaultValue(){let e=this;function t(r){if(!r.attributes)return;let a=r.attributes[R],s=r.attributes[T];if(a==null){i.warn(["请先配置键",r]);return}e.$data.data.has(a)&&i.warn("请检查该key(已存在): "+a),e.$data.data.set(a,s);}function n(r){for(let a=0;a<r.length;a++){let s=r[a];t(s);let c=s.forms;c&&Array.isArray(c)&&n(c);}}let l=this.getPanelContentConfig();for(let r=0;r<l.length;r++){let a=l[r];if(!a.forms)continue;let s=a.forms;s&&Array.isArray(s)&&n(s);}},setValue(e,t){let n=S(x,{}),l=n[e];n[e]=t,b(x,n),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,l,t);},getValue(e,t){let l=S(x,{})[e];return l??(this.$data.data.has(e)?this.$data.data.get(e):t)},deleteValue(e){let t=S(x,{}),n=t[e];Reflect.deleteProperty(t,e),b(x,t),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,n,void 0);},addValueChangeListener(e,t){let n=Math.random();return this.$listener.listenData.set(e,{id:n,key:e,callback:t}),n},removeValueChangeListener(e){let t=null;for(const[n,l]of this.$listener.listenData.entries())if(l.id===e){t=n;break}typeof t=="string"?this.$listener.listenData.delete(t):console.warn("没有找到对应的监听器");},hasKey(e){let t=S(x,{});return e in t},execMenu(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){i.warn(`${e} 键不存在`);return}let n=o.getValue(e);n&&t(n);},execMenuOnce(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){i.warn(`${e} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(e))return;this.$data.oneSuccessExecMenu.set(e,1);let n=[],l=s=>{let c=o.getValue(e);r(c,s);},r=(s,c)=>{let v=[];if(s){let f=c??t(s,l);f instanceof HTMLStyleElement?v=[f]:Array.isArray(f)&&(v=[...f.filter(w=>w!=null&&w instanceof HTMLStyleElement)]);}for(let f=0;f<n.length;f++)n[f].remove(),n.splice(f,1),f--;n=[...v];};this.addValueChangeListener(e,(s,c,v)=>{r(v);});let a=o.getValue(e);a&&r(a);},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(t(),this.$data.onceExec.set(e,1));},showPanel(){j.panel({title:{text:`${A}-设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:this.isMobile(),width:this.getWidth(),height:this.getHeight(),drag:!0,only:!0});},isMobile(){return window.outerWidth<550},getWidth(){return window.outerWidth<550?"92vw":"550px"},getHeight(){return window.outerHeight>450?"80vh":"450px"},getPanelContentConfig(){return [Y,K,Z]}},Q=`.download-app-guidance,\r
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
`,X={isGoWild(){return window.location.pathname==="/go-wild"}},p={addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),E(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){let t=typeof P=="function"?P(e.keyName):"";typeof t=="string"&&t?E(t):p.addLinkNode(e.url);},async addLinkNode(e){let t=document.createElement("link");return t.rel="stylesheet",t.type="text/css",t.href=e,z.ready(()=>{document.head.appendChild(t);}),t},fixUrl(e){return e=e.trim(),e.match(/^http(s|):\/\//i)||(e.startsWith("/")||(e+="/"),e=window.location.origin+e),e}},G=function(e=""){d.waitNodeList(e).then(t=>{t.forEach(n=>n.remove());});},C={init(){this.addCSS(),o.execMenu("JianShuAutoJumpRedirect_PC",()=>{this.jumpRedirect();}),o.execMenu("JianShuRemoveClipboardHijacking",()=>{this.removeClipboardHijacking();}),o.execMenu("JianShuAutoExpandFullText",()=>{this.autoExpandFullText();}),o.execMenu("JianShuArticleCenter",()=>this.articleCenter()),o.execMenu("JianShuShieldRelatedArticles",()=>this.shieldRelatedArticles()),o.execMenu("jianshu-shieldClientDialog",()=>{this.shieldClientDialog();}),o.execMenuOnce("JianShuShieldUserComments",()=>this.shieldUserComments()),o.execMenuOnce("JianShuShieldRecommendedReading",()=>this.shieldRecommendedReading()),o.execMenuOnce("jianshu-shieldTopNav",()=>this.shieldTopNav()),o.execMenuOnce("jianshu-shieldBottomToolbar",()=>this.shieldBottomToolbar());},addCSS(){return i.info("添加屏蔽CSS"),E(Q)},articleCenter(){i.info("全文居中");let e=[];return e.push(p.addBlockCSS("div[role=main] aside","div._3Pnjry"),E(`
			div[role=main] aside,
			div._3Pnjry{
				display: none !important;
			}
			div._gp-ck{
				width: 100% !important;
			}`)),G("div[role=main] aside"),G("div._3Pnjry"),d.waitNodeList("div._gp-ck").then(t=>{t.forEach(n=>{n.style.width="100%";});}),e},removeClipboardHijacking(){i.info("去除剪贴板劫持");const e=t=>{t.stopPropagation();};window.addEventListener("copy",e,!0),document.addEventListener("copy",e,!0);},autoExpandFullText(){d.waitNode('div#homepage div[class*="dialog-"]').then(e=>{e.style.visibility="hidden",i.info("自动展开全文"),d.mutationObserver(e,{callback:t=>{t.length!=0&&t.forEach(n=>{var l;n.target.style.display!="none"&&(i.success("自动展开全文-自动点击"),(l=document.querySelector('div#homepage div[class*="dialog-"] .cancel'))==null||l.click());});},config:{childList:!1,attributes:!0,characterData:!0,subtree:!0}});});},jumpRedirect(){if(X.isGoWild()){i.success("去除简书拦截其它网址的url并自动跳转"),window.stop();let e=window.location.href.replace(window.location.origin+"/","");e=decodeURIComponent(e);let t=e.replace(/^go-wild\?ac=2&url=/gi,"").replace(/^https:\/\/link.zhihu.com\/\?target\=/gi,"");window.location.href=t;}},shieldRelatedArticles(){return i.info("屏蔽相关文章"),p.addBlockCSS('div[role="main"] > div > section:nth-child(2)')},shieldClientDialog(){i.info("【屏蔽】客户端弹窗"),p.addBlockCSS('div:has(>div[class*="-mask"]:not([class*="-mask-hidden"]) + div[tabindex="-1"][role="dialog"])'),d.waitNode('div[class*="-mask"]:not([class*="-mask-hidden"]) + div[tabindex="-1"][role="dialog"]').then(e=>{i.success("弹窗出现"),d.waitPropertyByInterval(e,()=>{var n,l,r,a;let t=d.getReactObj(e);return (a=(r=(l=(n=t==null?void 0:t.reactInternalInstance)==null?void 0:n.return)==null?void 0:l.return)==null?void 0:r.memoizedProps)==null?void 0:a.onClose},250,1e4).then(()=>{d.getReactObj(e).reactInternalInstance.return.return.memoizedProps.onClose(new Event("click")),i.success("调用函数关闭弹窗");});});},shieldUserComments(){return i.info("屏蔽评论区"),p.addBlockCSS("div#note-page-comment")},shieldRecommendedReading(){return i.info("屏蔽底部推荐阅读"),p.addBlockCSS('div[role="main"] > div > section:last-child')},shieldTopNav(){return i.info("【屏蔽】顶部导航栏"),p.addBlockCSS("header")},shieldBottomToolbar(){return i.info("【屏蔽】底部工具栏"),p.addBlockCSS("footer")}},k={init(){this.addCSS(),o.execMenu("JianShuAutoJumpRedirect_Mobile",()=>{C.jumpRedirect();}),o.execMenu("JianShuHijackSchemeScriptLabel_Mobile",()=>{this.handlePrototype();}),o.execMenu("JianShuRemoveClipboardHijacking_Mobile",()=>{C.removeClipboardHijacking();}),o.execMenu("JianShuAutoExpandFullText_Mobile",()=>{C.autoExpandFullText();}),o.execMenuOnce("JianShuremoveFooterRecommendRead",()=>this.removeFooterRecommendRead()),o.execMenu("JianShuShieldUserCommentsMobile",()=>this.shieldUserComments());},addCSS(){C.addCSS();},removeFooterRecommendRead(){return i.info("屏蔽底部推荐阅读"),p.addBlockCSS("#recommended-notes")},handlePrototype(){i.info("处理原型添加script标签");let e=Node.prototype.appendChild;m.Node.prototype.appendChild=function(t){let n=["img"];return t.src&&!t.src.includes("jianshu.io")&&!n.includes(t.localName)?(i.success(["禁止添加的元素",t]),null):e.call(this,t)};},shieldUserComments(){return i.info("屏蔽评论区"),p.addBlockCSS("#comment-main")}};o.init();let N=d.isPhone(),y="change_env_set",M=S(y);I.add({key:y,text:`⚙ 自动: ${N?"移动端":"PC端"}`,autoReload:!1,isStoreValue:!1,showText(e){return M==null?e:e+` 手动: ${M==1?"移动端":M==2?"PC端":"未知"}`},callback:()=>{let e=[0,1,2],t=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!t)return;let n=parseInt(t);if(isNaN(n)){g.error("输入的不是规范的数字");return}if(!e.includes(n)){g.error("输入的值必须是0或1或2");return}n==0?$(y):b(y,n);}});M!=null?(i.info(`手动判定为${M===1?"移动端":"PC端"}`),M==1?k.init():M==2?C.init():(g.error("意外，手动判定的值不在范围内"),$(y))):N?(i.info("自动判定为移动端"),k.init()):(i.info("自动判定为PC端"),C.init());

})(Qmsg, DOMUtils, Utils, pops);