// ==UserScript==
// @name         简书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.7.18
// @author       WhiteSevs
// @description  支持手机端和PC端、屏蔽广告、优化浏览体验、重定向链接、全文居中、自动展开全文、允许复制文字、劫持唤醒/跳转App、自定义屏蔽元素等
// @license      GPL-3.0-only
// @icon         https://www.jianshu.com/favicon.ico
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.jianshu.com/*
// @match        *://*.jianshu.io/*
// @require      https://update.greasyfork.org/scripts/494167/1376186/CoverUMD.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@1.7.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.1.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.2.4/dist/index.umd.js
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

(function (g, N, T, J) {
        'use strict';

        var h=typeof GM_addStyle<"u"?GM_addStyle:void 0,j=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,w=typeof GM_getValue<"u"?GM_getValue:void 0,b=typeof GM_info<"u"?GM_info:void 0,k=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,S=typeof GM_setValue<"u"?GM_setValue:void 0,F=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,H=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,m=typeof unsafeWindow<"u"?unsafeWindow:void 0,B=window;const q="简书优化",c=T.noConflict();N.noConflict();const i=new c.Log(b,m.console||B.console);var G;const V=((G=b==null?void 0:b.script)==null?void 0:G.name)||q,$=!1;i.config({debug:$,logMaxCount:1e3,autoClearConsole:!0,tag:!0});g.config(Object.defineProperties({html:!0,autoClose:!0,showClose:!1},{position:{get(){return o.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return o.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return o.getValue("qmsg-config-showreverse",!0)}},zIndex:{get(){let e=T.getMaxZIndex(),t=J.config.InstanceUtils.getPopsMaxZIndex(e).zIndex;return T.getMaxValue(e,t)+100}}}));const I=new c.GM_Menu({GM_getValue:w,GM_setValue:S,GM_registerMenuCommand:k,GM_unregisterMenuCommand:F}),U=new c.Httpx(H);U.interceptors.response.use(void 0,e=>(i.error(["拦截器-请求错误",e]),e.type==="onabort"?g.warning("请求取消"):e.type==="onerror"?g.error("请求异常"):e.type==="ontimeout"?g.error("请求超时"):g.error("其它错误"),e));U.config({logDetails:$});m.Object.defineProperty,m.Function.prototype.apply,m.Function.prototype.call,m.Element.prototype.appendChild,m.setTimeout;const x="GM_Panel",E="data-key",R="data-default-value",d=function(e,t,n,l,r){let a={text:e,type:"switch",description:r,attributes:{},getValue(){return !!o.getValue(t,n)},callback(s,u){i.success(`${u?"开启":"关闭"} ${e}`),o.setValue(t,!!u);},afterAddToUListCallBack:void 0};return a.attributes&&(a.attributes[E]=t,a.attributes[R]=!!n),a},W={id:"jianshu-panel-config-pc",title:"桌面端",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[d("全文居中","JianShuArticleCenter",!0),d("自动展开全文","JianShuAutoExpandFullText",!0),d("重定向链接","JianShuAutoJumpRedirect_PC",!0,void 0,"自动跳转简书拦截的Url链接")]}]},{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[d("【屏蔽】底部推荐阅读","JianShuShieldRecommendedReading",!1),d("【屏蔽】评论区","JianShuShieldUserComments",!1),d("【屏蔽】相关文章","JianShuShieldRelatedArticles",!1),d("【屏蔽】客户端弹窗","jianshu-shieldClientDialog",!0,void 0,"弹出的【扫码安装简书客户端 畅享全文阅读体验】"),d("【屏蔽】顶部导航栏","jianshu-shieldTopNav",!1),d("【屏蔽】底部工具栏","jianshu-shieldBottomToolbar",!1,void 0,"屏蔽掉底部悬浮的评论输入框、评论、点赞...")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[d("拦截-剪贴板","JianShuRemoveClipboardHijacking",!0,void 0,"去除禁止复制")]}]}]}]},O={id:"jianshu-panel-config-mobile",title:"移动端",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[d("自动展开全文","JianShuAutoExpandFullText_Mobile",!0),d("重定向链接","JianShuAutoJumpRedirect_Mobile",!0,void 0,"自动跳转简书拦截的Url链接")]}]},{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[d("【屏蔽】底部推荐阅读","JianShuremoveFooterRecommendRead",!1),d("【屏蔽】评论区","JianShuShieldUserCommentsMobile",!1)]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[d("拦截-剪贴板","JianShuRemoveClipboardHijacking_Mobile",!0,void 0,"去除禁止复制"),d("劫持-唤醒/跳转App","JianShuHijackSchemeScriptLabel_Mobile",!0,void 0,"去除简书唤醒调用App")]}]}]}]},P=function(e,t,n,l,r,a){let s=[];typeof l=="function"?s=l():s=l;let u={text:e,type:"select",description:a,attributes:{},getValue(){return o.getValue(t,n)},callback(v,p,y){o.setValue(t,p),typeof r=="function"&&r(v,p,y);},data:s};return u.attributes&&(u.attributes[E]=t,u.attributes[R]=n),u},z={id:"jianshu-panel-common",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[P("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,n)=>{i.info("设置当前Qmsg弹出位置"+n);},"Toast显示在页面九宫格的位置"),P("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),d("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]},f={data:null,oneSuccessExecMenu:null,onceExec:null,listenData:null},o={$data:{get data(){return f.data==null&&(f.data=new c.Dictionary),f.data},get oneSuccessExecMenu(){return f.oneSuccessExecMenu==null&&(f.oneSuccessExecMenu=new c.Dictionary),f.oneSuccessExecMenu},get onceExec(){return f.onceExec==null&&(f.onceExec=new c.Dictionary),f.onceExec},get scriptName(){return V},key:x,attributeKeyName:E,attributeDefaultValueName:R},$listener:{get listenData(){return f.listenData==null&&(f.listenData=new c.Dictionary),f.listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},initExtensionsMenu(){m.top===m.self&&I.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPanel();}}]);},initPanelDefaultValue(){let e=this;function t(r){if(!r.attributes)return;let a=r.attributes[E],s=r.attributes[R];if(a==null){i.warn(["请先配置键",r]);return}e.$data.data.has(a)&&i.warn("请检查该key(已存在): "+a),e.$data.data.set(a,s);}function n(r){for(let a=0;a<r.length;a++){let s=r[a];t(s);let u=s.forms;u&&Array.isArray(u)&&n(u);}}let l=this.getPanelContentConfig();for(let r=0;r<l.length;r++){let a=l[r];if(!a.forms)continue;let s=a.forms;s&&Array.isArray(s)&&n(s);}},setValue(e,t){let n=w(x,{}),l=n[e];n[e]=t,S(x,n),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,l,t);},getValue(e,t){let l=w(x,{})[e];return l??(this.$data.data.has(e)?this.$data.data.get(e):t)},deleteValue(e){let t=w(x,{}),n=t[e];Reflect.deleteProperty(t,e),S(x,t),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,n,void 0);},addValueChangeListener(e,t){let n=Math.random();return this.$listener.listenData.set(e,{id:n,key:e,callback:t}),n},removeValueChangeListener(e){let t=null;for(const[n,l]of this.$listener.listenData.entries())if(l.id===e){t=n;break}typeof t=="string"?this.$listener.listenData.delete(t):console.warn("没有找到对应的监听器");},hasKey(e){let t=w(x,{});return e in t},execMenu(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){i.warn(`${e} 键不存在`);return}let n=o.getValue(e);n&&t(n);},execMenuOnce(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){i.warn(`${e} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(e))return;this.$data.oneSuccessExecMenu.set(e,1);let n=[],l=s=>{let u=o.getValue(e);r(u,s);},r=(s,u)=>{let v=[];if(s){let p=u??t(s,l);p instanceof HTMLStyleElement?v=[p]:Array.isArray(p)&&(v=[...p.filter(y=>y!=null&&y instanceof HTMLStyleElement)]);}for(let p=0;p<n.length;p++)n[p].remove(),n.splice(p,1),p--;n=[...v];};this.addValueChangeListener(e,(s,u,v)=>{r(v);});let a=o.getValue(e);a&&r(a);},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(t(),this.$data.onceExec.set(e,1));},showPanel(){J.panel({title:{text:`${V}-设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:this.isMobile(),width:this.getWidth(),height:this.getHeight(),drag:!0,only:!0});},isMobile(){return window.outerWidth<550},getWidth(){return window.outerWidth<550?"92dvw":"550px"},getHeight(){return window.outerHeight>450?"80dvh":"450px"},getPanelContentConfig(){return [z,W,O]}},K=`.download-app-guidance,\r
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
`,Z={isGoWild(){return window.location.pathname==="/go-wild"}},D=function(e=""){c.waitNodeList(e).then(t=>{t.forEach(n=>n.remove());});},_={init(){this.addCSS(),o.execMenu("JianShuAutoJumpRedirect_PC",()=>{this.jumpRedirect();}),o.execMenu("JianShuRemoveClipboardHijacking",()=>{this.removeClipboardHijacking();}),o.execMenu("JianShuAutoExpandFullText",()=>{this.autoExpandFullText();}),o.execMenu("JianShuArticleCenter",()=>{this.articleCenter();}),o.execMenu("JianShuShieldRelatedArticles",()=>{this.shieldRelatedArticles();}),o.execMenu("jianshu-shieldClientDialog",()=>{this.shieldClientDialog();}),o.execMenu("JianShuShieldUserComments",()=>{this.shieldUserComments();}),o.execMenu("JianShuShieldRecommendedReading",()=>{this.shieldRecommendedReading();}),o.execMenu("jianshu-shieldTopNav",()=>{this.shieldTopNav();}),o.execMenu("jianshu-shieldBottomToolbar",()=>{this.shieldBottomToolbar();});},addCSS(){i.info("添加屏蔽CSS"),h(K);},articleCenter(){i.info("全文居中"),h(`
        div[role=main] aside,
        div._3Pnjry{
          display: none !important;
        }
        div._gp-ck{
          width: 100% !important;
        }`),D("div[role=main] aside"),D("div._3Pnjry"),c.waitNodeList("div._gp-ck").then(e=>{e.forEach(t=>{t.style.width="100%";});});},removeClipboardHijacking(){i.info("去除剪贴板劫持");const e=t=>{t.stopPropagation();};window.addEventListener("copy",e,!0),document.addEventListener("copy",e,!0);},autoExpandFullText(){c.waitNode('div#homepage div[class*="dialog-"]').then(e=>{e.style.visibility="hidden",i.info("自动展开全文"),c.mutationObserver(e,{callback:t=>{t.length!=0&&t.forEach(n=>{var l;n.target.style.display!="none"&&(i.success("自动展开全文-自动点击"),(l=document.querySelector('div#homepage div[class*="dialog-"] .cancel'))==null||l.click());});},config:{childList:!1,attributes:!0,characterData:!0,subtree:!0}});});},jumpRedirect(){if(Z.isGoWild()){i.success("去除简书拦截其它网址的url并自动跳转"),window.stop();let e=window.location.href.replace(window.location.origin+"/","");e=decodeURIComponent(e);let t=e.replace(/^go-wild\?ac=2&url=/gi,"").replace(/^https:\/\/link.zhihu.com\/\?target\=/gi,"");window.location.href=t;}},shieldRelatedArticles(){i.info("屏蔽相关文章"),h(`
        div[role="main"] > div > section:nth-child(2){
          display: none !important;
        }
        `);},shieldClientDialog(){i.info("【屏蔽】客户端弹窗"),h(`
        div:has(>div[class*="-mask"]:not([class*="-mask-hidden"]) + div[tabindex="-1"][role="dialog"]){
            display: none !important;
        }`),c.waitNode('div[class*="-mask"]:not([class*="-mask-hidden"]) + div[tabindex="-1"][role="dialog"]').then(e=>{i.success("弹窗出现"),c.waitPropertyByInterval(e,()=>{var n,l,r,a;let t=c.getReactObj(e);return (a=(r=(l=(n=t==null?void 0:t.reactInternalInstance)==null?void 0:n.return)==null?void 0:l.return)==null?void 0:r.memoizedProps)==null?void 0:a.onClose},250,1e4).then(()=>{c.getReactObj(e).reactInternalInstance.return.return.memoizedProps.onClose(new Event("click")),i.success("调用函数关闭弹窗");});});},shieldUserComments(){i.info("屏蔽评论区"),h(`
        div#note-page-comment{
          display: none !important;
        }
        `);},shieldRecommendedReading(){i.info("屏蔽底部推荐阅读"),h(`
        div[role="main"] > div > section:last-child{
          display: none !important;
        }
        `);},shieldTopNav(){i.info("【屏蔽】顶部导航栏"),h(`
        header{
          display: none !important;
        }
        `);},shieldBottomToolbar(){i.info("【屏蔽】底部工具栏"),h(`
        footer{
          display: none !important;
        }
        `);}},A={init(){this.addCSS(),o.execMenu("JianShuAutoJumpRedirect_Mobile",()=>{_.jumpRedirect();}),o.execMenu("JianShuHijackSchemeScriptLabel_Mobile",()=>{this.handlePrototype();}),o.execMenu("JianShuRemoveClipboardHijacking_Mobile",()=>{_.removeClipboardHijacking();}),o.execMenu("JianShuAutoExpandFullText_Mobile",()=>{_.autoExpandFullText();}),o.execMenu("JianShuremoveFooterRecommendRead",()=>{this.removeFooterRecommendRead();}),o.execMenu("JianShuShieldUserCommentsMobile",()=>{this.shieldUserComments();});},addCSS(){_.addCSS();},removeFooterRecommendRead(){i.info("屏蔽底部推荐阅读"),h(`
        #recommended-notes{
          display: none !important;
        }`);},handlePrototype(){i.info("处理原型添加script标签");let e=Node.prototype.appendChild;m.Node.prototype.appendChild=function(t){let n=["img"];return t.src&&!t.src.includes("jianshu.io")&&!n.includes(t.localName)?(i.success(["禁止添加的元素",t]),null):e.call(this,t)};},shieldUserComments(){i.info("屏蔽评论区"),h(`
        #comment-main{
          display: none !important;
        }
        `);}};o.init();let L=c.isPhone(),C="change_env_set",M=w(C);I.add({key:C,text:`⚙ 自动: ${L?"移动端":"PC端"}`,autoReload:!1,isStoreValue:!1,showText(e){return M==null?e:e+` 手动: ${M==1?"移动端":M==2?"PC端":"未知"}`},callback:()=>{let e=[0,1,2],t=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!t)return;let n=parseInt(t);if(isNaN(n)){g.error("输入的不是规范的数字");return}if(!e.includes(n)){g.error("输入的值必须是0或1或2");return}n==0?j(C):S(C,n);}});M!=null?(i.info(`手动判定为${M===1?"移动端":"PC端"}`),M==1?A.init():M==2?_.init():(g.error("意外，手动判定的值不在范围内"),j(C))):L?(i.info("自动判定为移动端"),A.init()):(i.info("自动判定为PC端"),_.init());

})(Qmsg, DOMUtils, Utils, pops);