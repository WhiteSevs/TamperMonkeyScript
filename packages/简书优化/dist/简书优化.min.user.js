// ==UserScript==
// @name         简书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.6.15
// @author       WhiteSevs
// @description  支持手机端和PC端，屏蔽广告，优化浏览体验，自动跳转拦截的URL
// @license      GPL-3.0-only
// @icon         https://www.jianshu.com/favicon.ico
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.jianshu.com/*
// @match        *://*.jianshu.io/*
// @require      https://update.greasyfork.org/scripts/494167/1376186/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/456485/1384984/pops.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.1.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@1.4.4/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.1.1/dist/index.umd.js
// @grant        GM_addStyle
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

(function (m, I, $) {
        'use strict';

        var u=typeof GM_addStyle<"u"?GM_addStyle:void 0,V=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,g=typeof GM_getValue<"u"?GM_getValue:void 0,x=typeof GM_info<"u"?GM_info:void 0,U=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,C=typeof GM_setValue<"u"?GM_setValue:void 0,N=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,L=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,c=typeof unsafeWindow<"u"?unsafeWindow:void 0,G=window;const k="简书优化",r=$.noConflict();I.noConflict();const J=G.pops||c.pops,i=new r.Log(x,c.console||G.console);var T;const R=((T=x==null?void 0:x.script)==null?void 0:T.name)||k,D=!1;i.config({debug:D,logMaxCount:2e4,autoClearConsole:!0,tag:!0});m.config(Object.defineProperty({position:"bottom",html:!0,maxNums:5,autoClose:!0,showClose:!1,showReverse:!0,zIndex:r.getMaxZIndex(10)},"zIndex",{get(){let e=r.getMaxZIndex(10),t=J.config.Utils.getPopsMaxZIndex(10).zIndex;return r.getMaxValue(e,t)}}));const j=new r.GM_Menu({GM_getValue:g,GM_setValue:C,GM_registerMenuCommand:U,GM_unregisterMenuCommand:N}),F=new r.Httpx(L);F.config({logDetails:D,onabort(){m.warning("请求取消");},ontimeout(){m.error("请求超时");},onerror(e){m.error("请求异常"),i.error(["httpx-onerror 请求异常",e]);}});c.Object.defineProperty,c.Function.prototype.apply,c.Function.prototype.call,c.Element.prototype.appendChild,c.setTimeout;const h="GM_Panel",b="data-key",S="data-default-value",l=function(e,t,n,o,s){let d={text:e,type:"switch",description:s,attributes:{},getValue(){return !!a.getValue(t,n)},callback(w,f){i.success(`${f?"开启":"关闭"} ${e}`),a.setValue(t,!!f);},afterAddToUListCallBack:void 0};return d.attributes&&(d.attributes[b]=t,d.attributes[S]=!!n),d},H={id:"jianshu-panel-config-pc",title:"桌面端",forms:[{text:"屏蔽",type:"forms",forms:[l("【屏蔽】底部推荐阅读","JianShuShieldRecommendedReading",!1),l("【屏蔽】评论区","JianShuShieldUserComments",!1),l("【屏蔽】相关文章","JianShuShieldRelatedArticles",!1),l("【屏蔽】客户端弹窗","jianshu-shieldClientDialog",!0,void 0,"弹出的【扫码安装简书客户端 畅享全文阅读体验】"),l("【屏蔽】顶部导航栏","jianshu-shieldTopNav",!1),l("【屏蔽】底部工具栏","jianshu-shieldBottomToolbar",!1,void 0,"屏蔽掉底部悬浮的评论输入框、评论、点赞...")]},{text:"功能",type:"forms",forms:[l("全文居中","JianShuArticleCenter",!0),l("自动展开全文","JianShuAutoExpandFullText",!0),l("重定向链接","JianShuAutoJumpRedirect_PC",!0,void 0,"自动跳转简书拦截的Url链接")]},{text:"劫持/拦截",type:"forms",forms:[l("拦截-剪贴板","JianShuRemoveClipboardHijacking",!0,void 0,"去除禁止复制")]}]},B={id:"jianshu-panel-config-mobile",title:"移动端",forms:[{text:"屏蔽",type:"forms",forms:[l("【屏蔽】底部推荐阅读","JianShuremoveFooterRecommendRead",!1),l("【屏蔽】评论区","JianShuShieldUserCommentsMobile",!1)]},{text:"功能",type:"forms",forms:[l("自动展开全文","JianShuAutoExpandFullText_Mobile",!0),l("重定向链接","JianShuAutoJumpRedirect_Mobile",!0,void 0,"自动跳转简书拦截的Url链接")]},{text:"劫持/拦截",type:"forms",forms:[l("拦截-剪贴板","JianShuRemoveClipboardHijacking_Mobile",!0,void 0,"去除禁止复制"),l("劫持-唤醒/跳转App","JianShuHijackSchemeScriptLabel_Mobile",!0,void 0,"去除简书唤醒调用App")]}]},a={$data:{data:new r.Dictionary,oneSuccessExecMenu:new r.Dictionary,onceExec:new r.Dictionary,scriptName:R,key:h,attributeKeyName:b,attributeDefaultValueName:S},$listener:{listenData:new r.Dictionary},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},initExtensionsMenu(){c.top===c.self&&j.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPanel();}}]);},initPanelDefaultValue(){let e=this;function t(o){if(!o.attributes)return;let s=o.attributes[b],d=o.attributes[S];if(s==null){i.warn(["请先配置键",o]);return}e.$data.data.has(s)&&i.warn("请检查该key(已存在): "+s),e.$data.data.set(s,d);}let n=this.getPanelContentConfig();for(let o=0;o<n.length;o++){let s=n[o];if(!s.forms)continue;let d=s.forms;for(let w=0;w<d.length;w++){let f=d[w];if(f.forms){let y=f.forms;for(let _=0;_<y.length;_++)t(y[_]);}else t(f);}}},setValue(e,t){let n=g(h,{}),o=n[e];n[e]=t,C(h,n),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,o,t);},getValue(e,t){let o=g(h,{})[e];return o??(this.$data.data.has(e)?this.$data.data.get(e):t)},deleteValue(e){let t=g(h,{}),n=t[e];Reflect.deleteProperty(t,e),C(h,t),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,n,void 0);},addValueChangeListener(e,t){let n=Math.random();return this.$listener.listenData.set(e,{id:n,key:e,callback:t}),n},removeValueChangeListener(e){let t=null;for(const[n,o]of this.$listener.listenData.entries())if(o.id===e){t=n;break}typeof t=="string"?this.$listener.listenData.delete(t):console.warn("没有找到对应的监听器");},hasKey(e){let t=g(h,{});return e in t},execMenu(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){i.warn(`${e} 键不存在`);return}let n=a.getValue(e);n&&t(n);},execMenuOnce(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){i.warn(`${e} 键不存在`);return}let n=a.getValue(e);if(n){if(this.$data.oneSuccessExecMenu.has(e))return;t(n),this.$data.oneSuccessExecMenu.set(e,1);}},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(t(),this.$data.onceExec.set(e,1));},showPanel(){J.panel({title:{text:`${R}-设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:this.isMobile(),width:this.getWidth(),height:this.getHeight(),drag:!0,only:!0});},isMobile(){return window.outerWidth<550},getWidth(){return window.outerWidth<550?"92dvw":"550px"},getHeight(){return window.outerHeight>450?"80dvh":"450px"},getPanelContentConfig(){return [H,B]}},W=`.download-app-guidance,\r
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
`,O={isGoWild(){return window.location.pathname==="/go-wild"}},E=function(e=""){r.waitNodeList(e).then(t=>{t.forEach(n=>n.remove());});},v={init(){this.addCSS(),a.execMenu("JianShuAutoJumpRedirect_PC",()=>{this.jumpRedirect();}),a.execMenu("JianShuRemoveClipboardHijacking",()=>{this.removeClipboardHijacking();}),a.execMenu("JianShuAutoExpandFullText",()=>{this.autoExpandFullText();}),a.execMenu("JianShuArticleCenter",()=>{this.articleCenter();}),a.execMenu("JianShuShieldRelatedArticles",()=>{this.shieldRelatedArticles();}),a.execMenu("jianshu-shieldClientDialog",()=>{this.shieldClientDialog();}),a.execMenu("JianShuShieldUserComments",()=>{this.shieldUserComments();}),a.execMenu("JianShuShieldRecommendedReading",()=>{this.shieldRecommendedReading();}),a.execMenu("jianshu-shieldTopNav",()=>{this.shieldTopNav();}),a.execMenu("jianshu-shieldBottomToolbar",()=>{this.shieldBottomToolbar();});},addCSS(){i.info("添加屏蔽CSS"),u(W);},articleCenter(){i.info("全文居中"),u(`
        div[role=main] aside,
        div._3Pnjry{
          display: none !important;
        }
        div._gp-ck{
          width: 100% !important;
        }`),E("div[role=main] aside"),E("div._3Pnjry"),r.waitNodeList("div._gp-ck").then(e=>{e.forEach(t=>{t.style.width="100%";});});},removeClipboardHijacking(){i.info("去除剪贴板劫持");const e=t=>{t.stopPropagation();};window.addEventListener("copy",e,!0),document.addEventListener("copy",e,!0);},autoExpandFullText(){r.waitNode('div#homepage div[class*="dialog-"]').then(e=>{e.style.visibility="hidden",i.info("自动展开全文"),r.mutationObserver(e,{callback:t=>{t.length!=0&&t.forEach(n=>{var o;n.target.style.display!="none"&&(i.success("自动展开全文-自动点击"),(o=document.querySelector('div#homepage div[class*="dialog-"] .cancel'))==null||o.click());});},config:{childList:!1,attributes:!0,characterData:!0,subtree:!0}});});},jumpRedirect(){if(O.isGoWild()){i.success("去除简书拦截其它网址的url并自动跳转"),window.stop();let e=window.location.href.replace(window.location.origin+"/","");e=decodeURIComponent(e);let t=e.replace(/^go-wild\?ac=2&url=/gi,"").replace(/^https:\/\/link.zhihu.com\/\?target\=/gi,"");window.location.href=t;}},shieldRelatedArticles(){i.info("屏蔽相关文章"),u(`
        div[role="main"] > div > section:nth-child(2){
          display: none !important;
        }
        `);},shieldClientDialog(){i.info("【屏蔽】客户端弹窗"),u(`
        div:has(>div[class*="-mask"]:not([class*="-mask-hidden"]) + div[tabindex="-1"][role="dialog"]){
            display: none !important;
        }`),r.waitNode('div[class*="-mask"]:not([class*="-mask-hidden"]) + div[tabindex="-1"][role="dialog"]').then(e=>{i.success("弹窗出现"),r.waitPropertyByInterval(e,()=>{var n,o,s,d;let t=r.getReactObj(e);return (d=(s=(o=(n=t==null?void 0:t.reactInternalInstance)==null?void 0:n.return)==null?void 0:o.return)==null?void 0:s.memoizedProps)==null?void 0:d.onClose},250,1e4).then(()=>{r.getReactObj(e).reactInternalInstance.return.return.memoizedProps.onClose(new Event("click")),i.success("调用函数关闭弹窗");});});},shieldUserComments(){i.info("屏蔽评论区"),u(`
        div#note-page-comment{
          display: none !important;
        }
        `);},shieldRecommendedReading(){i.info("屏蔽底部推荐阅读"),u(`
        div[role="main"] > div > section:last-child{
          display: none !important;
        }
        `);},shieldTopNav(){i.info("【屏蔽】顶部导航栏"),u(`
        header{
          display: none !important;
        }
        `);},shieldBottomToolbar(){i.info("【屏蔽】底部工具栏"),u(`
        footer{
          display: none !important;
        }
        `);}},P={init(){this.addCSS(),a.execMenu("JianShuAutoJumpRedirect_Mobile",()=>{v.jumpRedirect();}),a.execMenu("JianShuHijackSchemeScriptLabel_Mobile",()=>{this.handlePrototype();}),a.execMenu("JianShuRemoveClipboardHijacking_Mobile",()=>{v.removeClipboardHijacking();}),a.execMenu("JianShuAutoExpandFullText_Mobile",()=>{v.autoExpandFullText();}),a.execMenu("JianShuremoveFooterRecommendRead",()=>{this.removeFooterRecommendRead();}),a.execMenu("JianShuShieldUserCommentsMobile",()=>{this.shieldUserComments();});},addCSS(){v.addCSS();},removeFooterRecommendRead(){i.info("屏蔽底部推荐阅读"),u(`
        #recommended-notes{
          display: none !important;
        }`);},handlePrototype(){i.info("处理原型添加script标签");let e=Node.prototype.appendChild;c.Node.prototype.appendChild=function(t){let n=["img"];return t.src&&!t.src.includes("jianshu.io")&&!n.includes(t.localName)?(i.success(["禁止添加的元素",t]),null):e.call(this,t)};},shieldUserComments(){i.info("屏蔽评论区"),u(`
        #comment-main{
          display: none !important;
        }
        `);}};a.init();let A=r.isPhone(),M="change_env_set",p=g(M);j.add({key:M,text:`⚙ 自动: ${A?"移动端":"PC端"}`,autoReload:!1,isStoreValue:!1,showText(e){return p==null?e:e+` 手动: ${p==1?"移动端":p==2?"PC端":"未知"}`},callback:()=>{let e=[0,1,2],t=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!t)return;let n=parseInt(t);if(isNaN(n)){m.error("输入的不是规范的数字");return}if(!e.includes(n)){m.error("输入的值必须是0或1或2");return}n==0?V(M):C(M,n);}});p!=null?(i.info(`手动判定为${p===1?"移动端":"PC端"}`),p==1?P.init():p==2?v.init():(m.error("意外，手动判定的值不在范围内"),V(M))):A?(i.info("自动判定为移动端"),P.init()):(i.info("自动判定为PC端"),v.init());

})(Qmsg, DOMUtils, Utils);