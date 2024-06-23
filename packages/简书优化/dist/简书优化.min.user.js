// ==UserScript==
// @name         简书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.6.23.19
// @author       WhiteSevs
// @description  支持手机端和PC端，屏蔽广告，优化浏览体验，自动跳转拦截的URL
// @license      GPL-3.0-only
// @icon         https://www.jianshu.com/favicon.ico
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.jianshu.com/*
// @match        *://*.jianshu.io/*
// @require      https://update.greasyfork.org/scripts/494167/1376186/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/456485/1398647/pops.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.1.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@1.5.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.1.2/dist/index.umd.js
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

(function (f, k, R) {
        'use strict';

        var p=typeof GM_addStyle<"u"?GM_addStyle:void 0,J=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,M=typeof GM_getValue<"u"?GM_getValue:void 0,_=typeof GM_info<"u"?GM_info:void 0,F=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,S=typeof GM_setValue<"u"?GM_setValue:void 0,H=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,B=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,h=typeof unsafeWindow<"u"?unsafeWindow:void 0,j=window;const q="简书优化",l=R.noConflict();k.noConflict();const A=j.pops||h.pops,i=new l.Log(_,h.console||j.console);var G;const T=((G=_==null?void 0:_.script)==null?void 0:G.name)||q,I=!1;i.config({debug:I,logMaxCount:1e3,autoClearConsole:!0,tag:!0});f.config(Object.defineProperties({html:!0,autoClose:!0,showClose:!1},{position:{get(){return a.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return a.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return a.getValue("qmsg-config-showreverse",!0)}},zIndex:{get(){let e=R.getMaxZIndex(10),t=A.config.Utils.getPopsMaxZIndex(10).zIndex;return R.getMaxValue(e,t)}}}));const $=new l.GM_Menu({GM_getValue:M,GM_setValue:S,GM_registerMenuCommand:F,GM_unregisterMenuCommand:H}),U=new l.Httpx(B);U.interceptors.response.use(void 0,e=>(i.error(["拦截器-请求错误",e]),e.type==="onabort"?f.warning("请求取消"):e.type==="onerror"?f.error("请求异常"):e.type==="ontimeout"?f.error("请求超时"):f.error("其它错误"),e));U.config({logDetails:I});h.Object.defineProperty,h.Function.prototype.apply,h.Function.prototype.call,h.Element.prototype.appendChild,h.setTimeout;const g="GM_Panel",y="data-key",E="data-default-value",r=function(e,t,n,o,s){let d={text:e,type:"switch",description:s,attributes:{},getValue(){return !!a.getValue(t,n)},callback(m,c){i.success(`${c?"开启":"关闭"} ${e}`),a.setValue(t,!!c);},afterAddToUListCallBack:void 0};return d.attributes&&(d.attributes[y]=t,d.attributes[E]=!!n),d},W={id:"jianshu-panel-config-pc",title:"桌面端",forms:[{text:"屏蔽",type:"forms",forms:[r("【屏蔽】底部推荐阅读","JianShuShieldRecommendedReading",!1),r("【屏蔽】评论区","JianShuShieldUserComments",!1),r("【屏蔽】相关文章","JianShuShieldRelatedArticles",!1),r("【屏蔽】客户端弹窗","jianshu-shieldClientDialog",!0,void 0,"弹出的【扫码安装简书客户端 畅享全文阅读体验】"),r("【屏蔽】顶部导航栏","jianshu-shieldTopNav",!1),r("【屏蔽】底部工具栏","jianshu-shieldBottomToolbar",!1,void 0,"屏蔽掉底部悬浮的评论输入框、评论、点赞...")]},{text:"功能",type:"forms",forms:[r("全文居中","JianShuArticleCenter",!0),r("自动展开全文","JianShuAutoExpandFullText",!0),r("重定向链接","JianShuAutoJumpRedirect_PC",!0,void 0,"自动跳转简书拦截的Url链接")]},{text:"劫持/拦截",type:"forms",forms:[r("拦截-剪贴板","JianShuRemoveClipboardHijacking",!0,void 0,"去除禁止复制")]}]},O={id:"jianshu-panel-config-mobile",title:"移动端",forms:[{text:"屏蔽",type:"forms",forms:[r("【屏蔽】底部推荐阅读","JianShuremoveFooterRecommendRead",!1),r("【屏蔽】评论区","JianShuShieldUserCommentsMobile",!1)]},{text:"功能",type:"forms",forms:[r("自动展开全文","JianShuAutoExpandFullText_Mobile",!0),r("重定向链接","JianShuAutoJumpRedirect_Mobile",!0,void 0,"自动跳转简书拦截的Url链接")]},{text:"劫持/拦截",type:"forms",forms:[r("拦截-剪贴板","JianShuRemoveClipboardHijacking_Mobile",!0,void 0,"去除禁止复制"),r("劫持-唤醒/跳转App","JianShuHijackSchemeScriptLabel_Mobile",!0,void 0,"去除简书唤醒调用App")]}]},P=function(e,t,n,o,s,d){let m=[];typeof o=="function"?m=o():m=o;let c={text:e,type:"select",description:d,attributes:{},getValue(){return a.getValue(t,n)},callback(b,x,L){a.setValue(t,x),typeof s=="function"&&s(b,x,L);},data:m};return c.attributes&&(c.attributes[y]=t,c.attributes[E]=n),c},z={id:"jianshu-panel-common",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[P("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,n)=>{i.info("设置当前Qmsg弹出位置"+n);},"Toast显示在页面九宫格的位置"),P("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),r("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]},u={data:null,oneSuccessExecMenu:null,onceExec:null,listenData:null},a={$data:{get data(){return u.data==null&&(u.data=new l.Dictionary),u.data},get oneSuccessExecMenu(){return u.oneSuccessExecMenu==null&&(u.oneSuccessExecMenu=new l.Dictionary),u.oneSuccessExecMenu},get onceExec(){return u.onceExec==null&&(u.onceExec=new l.Dictionary),u.onceExec},get scriptName(){return T},key:g,attributeKeyName:y,attributeDefaultValueName:E},$listener:{get listenData(){return u.listenData==null&&(u.listenData=new l.Dictionary),u.listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},initExtensionsMenu(){h.top===h.self&&$.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPanel();}}]);},initPanelDefaultValue(){let e=this;function t(o){if(!o.attributes)return;let s=o.attributes[y],d=o.attributes[E];if(s==null){i.warn(["请先配置键",o]);return}e.$data.data.has(s)&&i.warn("请检查该key(已存在): "+s),e.$data.data.set(s,d);}let n=this.getPanelContentConfig();for(let o=0;o<n.length;o++){let s=n[o];if(!s.forms)continue;let d=s.forms;for(let m=0;m<d.length;m++){let c=d[m];if(c.forms){let b=c.forms;for(let x=0;x<b.length;x++)t(b[x]);}else t(c);}}},setValue(e,t){let n=M(g,{}),o=n[e];n[e]=t,S(g,n),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,o,t);},getValue(e,t){let o=M(g,{})[e];return o??(this.$data.data.has(e)?this.$data.data.get(e):t)},deleteValue(e){let t=M(g,{}),n=t[e];Reflect.deleteProperty(t,e),S(g,t),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,n,void 0);},addValueChangeListener(e,t){let n=Math.random();return this.$listener.listenData.set(e,{id:n,key:e,callback:t}),n},removeValueChangeListener(e){let t=null;for(const[n,o]of this.$listener.listenData.entries())if(o.id===e){t=n;break}typeof t=="string"?this.$listener.listenData.delete(t):console.warn("没有找到对应的监听器");},hasKey(e){let t=M(g,{});return e in t},execMenu(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){i.warn(`${e} 键不存在`);return}let n=a.getValue(e);n&&t(n);},execMenuOnce(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){i.warn(`${e} 键不存在`);return}let n=a.getValue(e);if(n){if(this.$data.oneSuccessExecMenu.has(e))return;t(n),this.$data.oneSuccessExecMenu.set(e,1);}},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(t(),this.$data.onceExec.set(e,1));},showPanel(){A.panel({title:{text:`${T}-设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:this.isMobile(),width:this.getWidth(),height:this.getHeight(),drag:!0,only:!0});},isMobile(){return window.outerWidth<550},getWidth(){return window.outerWidth<550?"92dvw":"550px"},getHeight(){return window.outerHeight>450?"80dvh":"450px"},getPanelContentConfig(){return [z,W,O]}},K=`.download-app-guidance,\r
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
`,Z={isGoWild(){return window.location.pathname==="/go-wild"}},V=function(e=""){l.waitNodeList(e).then(t=>{t.forEach(n=>n.remove());});},w={init(){this.addCSS(),a.execMenu("JianShuAutoJumpRedirect_PC",()=>{this.jumpRedirect();}),a.execMenu("JianShuRemoveClipboardHijacking",()=>{this.removeClipboardHijacking();}),a.execMenu("JianShuAutoExpandFullText",()=>{this.autoExpandFullText();}),a.execMenu("JianShuArticleCenter",()=>{this.articleCenter();}),a.execMenu("JianShuShieldRelatedArticles",()=>{this.shieldRelatedArticles();}),a.execMenu("jianshu-shieldClientDialog",()=>{this.shieldClientDialog();}),a.execMenu("JianShuShieldUserComments",()=>{this.shieldUserComments();}),a.execMenu("JianShuShieldRecommendedReading",()=>{this.shieldRecommendedReading();}),a.execMenu("jianshu-shieldTopNav",()=>{this.shieldTopNav();}),a.execMenu("jianshu-shieldBottomToolbar",()=>{this.shieldBottomToolbar();});},addCSS(){i.info("添加屏蔽CSS"),p(K);},articleCenter(){i.info("全文居中"),p(`
        div[role=main] aside,
        div._3Pnjry{
          display: none !important;
        }
        div._gp-ck{
          width: 100% !important;
        }`),V("div[role=main] aside"),V("div._3Pnjry"),l.waitNodeList("div._gp-ck").then(e=>{e.forEach(t=>{t.style.width="100%";});});},removeClipboardHijacking(){i.info("去除剪贴板劫持");const e=t=>{t.stopPropagation();};window.addEventListener("copy",e,!0),document.addEventListener("copy",e,!0);},autoExpandFullText(){l.waitNode('div#homepage div[class*="dialog-"]').then(e=>{e.style.visibility="hidden",i.info("自动展开全文"),l.mutationObserver(e,{callback:t=>{t.length!=0&&t.forEach(n=>{var o;n.target.style.display!="none"&&(i.success("自动展开全文-自动点击"),(o=document.querySelector('div#homepage div[class*="dialog-"] .cancel'))==null||o.click());});},config:{childList:!1,attributes:!0,characterData:!0,subtree:!0}});});},jumpRedirect(){if(Z.isGoWild()){i.success("去除简书拦截其它网址的url并自动跳转"),window.stop();let e=window.location.href.replace(window.location.origin+"/","");e=decodeURIComponent(e);let t=e.replace(/^go-wild\?ac=2&url=/gi,"").replace(/^https:\/\/link.zhihu.com\/\?target\=/gi,"");window.location.href=t;}},shieldRelatedArticles(){i.info("屏蔽相关文章"),p(`
        div[role="main"] > div > section:nth-child(2){
          display: none !important;
        }
        `);},shieldClientDialog(){i.info("【屏蔽】客户端弹窗"),p(`
        div:has(>div[class*="-mask"]:not([class*="-mask-hidden"]) + div[tabindex="-1"][role="dialog"]){
            display: none !important;
        }`),l.waitNode('div[class*="-mask"]:not([class*="-mask-hidden"]) + div[tabindex="-1"][role="dialog"]').then(e=>{i.success("弹窗出现"),l.waitPropertyByInterval(e,()=>{var n,o,s,d;let t=l.getReactObj(e);return (d=(s=(o=(n=t==null?void 0:t.reactInternalInstance)==null?void 0:n.return)==null?void 0:o.return)==null?void 0:s.memoizedProps)==null?void 0:d.onClose},250,1e4).then(()=>{l.getReactObj(e).reactInternalInstance.return.return.memoizedProps.onClose(new Event("click")),i.success("调用函数关闭弹窗");});});},shieldUserComments(){i.info("屏蔽评论区"),p(`
        div#note-page-comment{
          display: none !important;
        }
        `);},shieldRecommendedReading(){i.info("屏蔽底部推荐阅读"),p(`
        div[role="main"] > div > section:last-child{
          display: none !important;
        }
        `);},shieldTopNav(){i.info("【屏蔽】顶部导航栏"),p(`
        header{
          display: none !important;
        }
        `);},shieldBottomToolbar(){i.info("【屏蔽】底部工具栏"),p(`
        footer{
          display: none !important;
        }
        `);}},D={init(){this.addCSS(),a.execMenu("JianShuAutoJumpRedirect_Mobile",()=>{w.jumpRedirect();}),a.execMenu("JianShuHijackSchemeScriptLabel_Mobile",()=>{this.handlePrototype();}),a.execMenu("JianShuRemoveClipboardHijacking_Mobile",()=>{w.removeClipboardHijacking();}),a.execMenu("JianShuAutoExpandFullText_Mobile",()=>{w.autoExpandFullText();}),a.execMenu("JianShuremoveFooterRecommendRead",()=>{this.removeFooterRecommendRead();}),a.execMenu("JianShuShieldUserCommentsMobile",()=>{this.shieldUserComments();});},addCSS(){w.addCSS();},removeFooterRecommendRead(){i.info("屏蔽底部推荐阅读"),p(`
        #recommended-notes{
          display: none !important;
        }`);},handlePrototype(){i.info("处理原型添加script标签");let e=Node.prototype.appendChild;h.Node.prototype.appendChild=function(t){let n=["img"];return t.src&&!t.src.includes("jianshu.io")&&!n.includes(t.localName)?(i.success(["禁止添加的元素",t]),null):e.call(this,t)};},shieldUserComments(){i.info("屏蔽评论区"),p(`
        #comment-main{
          display: none !important;
        }
        `);}};a.init();let N=l.isPhone(),C="change_env_set",v=M(C);$.add({key:C,text:`⚙ 自动: ${N?"移动端":"PC端"}`,autoReload:!1,isStoreValue:!1,showText(e){return v==null?e:e+` 手动: ${v==1?"移动端":v==2?"PC端":"未知"}`},callback:()=>{let e=[0,1,2],t=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!t)return;let n=parseInt(t);if(isNaN(n)){f.error("输入的不是规范的数字");return}if(!e.includes(n)){f.error("输入的值必须是0或1或2");return}n==0?J(C):S(C,n);}});v!=null?(i.info(`手动判定为${v===1?"移动端":"PC端"}`),v==1?D.init():v==2?w.init():(f.error("意外，手动判定的值不在范围内"),J(C))):N?(i.info("自动判定为移动端"),D.init()):(i.info("自动判定为PC端"),w.init());

})(Qmsg, DOMUtils, Utils);