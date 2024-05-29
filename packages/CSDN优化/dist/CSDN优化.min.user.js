// ==UserScript==
// @name         CSDN优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.5.29
// @author       WhiteSevs
// @description  支持手机端和PC端，屏蔽广告，优化浏览体验，自动跳转拦截的URL
// @license      GPL-3.0-only
// @icon         https://www.csdn.net/favicon.ico
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.csdn.net/*
// @require      https://update.greasyfork.org/scripts/494167/1376186/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/456485/1384463/pops.js
// @require      https://cdn.jsdelivr.net/npm/qmsg@1.1.0/dist/index.umd.js
// @require      https://cdn.jsdelivr.net/npm/@whitesev/utils@1.2.1/dist/index.umd.js
// @require      https://cdn.jsdelivr.net/npm/@whitesev/domutils@1.1.0/dist/index.umd.js
// @grant        GM_addStyle
// @grant        GM_deleteValue
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (w, F, O) {
  'use strict';

  var a=typeof GM_addStyle<"u"?GM_addStyle:void 0,V=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,C=typeof GM_getValue<"u"?GM_getValue:void 0,T=typeof GM_info<"u"?GM_info:void 0,K=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,k=typeof GM_setValue<"u"?GM_setValue:void 0,z=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Y=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,u=typeof unsafeWindow<"u"?unsafeWindow:void 0,$=window;const Q="CSDN优化",d=O.noConflict(),v=F.noConflict(),E=$.pops||u.pops,o=new d.Log(T,u.console||$.console);var N;const R=((N=T==null?void 0:T.script)==null?void 0:N.name)||Q,P=!1;o.config({debug:P,logMaxCount:2e4,autoClearConsole:!0,tag:!0});w.config({position:"bottom",html:!0,maxNums:5,autoClose:!0,showClose:!1,showReverse:!0});const H=new d.GM_Menu({GM_getValue:C,GM_setValue:k,GM_registerMenuCommand:K,GM_unregisterMenuCommand:z}),J=new d.Httpx(Y);J.config({logDetails:P,onabort(){w.warning("请求取消");},ontimeout(){w.error("请求超时");},onerror(e){w.error("请求异常"),o.error(["httpx-onerror 请求异常",e]);}});u.Object.defineProperty,u.Function.prototype.apply,u.Function.prototype.call,u.Element.prototype.appendChild,u.setTimeout;const b="GM_Panel",B="data-key",_="data-default-value",m={isHuaWeiCloudBlog(){return !!/huaweicloud.csdn.net/i.test(window.location.origin)},isBlog(){return !!/blog.csdn.net/i.test(window.location.origin)},isWenKu(){return !!/wenku.csdn.net/i.test(window.location.origin)},isLink(){return window.location.hostname==="link.csdn.net"},isSo(){return window.location.hostname==="so.csdn.net"},isSoCKnow(){return this.isSo()&&(window.location.pathname.startsWith("/chat")||window.location.pathname.startsWith("/so/ai"))}},L=function(e,t,n,l,s,c,f,p){let g={text:e,type:"slider",description:p,attributes:{},getValue(){return i.getValue(t,n)},getToolTipContent(h){return typeof f=="function"?f(h):`${h}`},callback(h,y){typeof c=="function"&&c(h,y)||i.setValue(t,y);},min:l,max:s};return g.attributes&&(g.attributes[B]=t,g.attributes[_]=n),g},r=function(e,t,n,l,s){let c={text:e,type:"switch",description:s,attributes:{},getValue(){return !!i.getValue(t,n)},callback(f,p){o.success(`${p?"开启":"关闭"} ${e}`),!(typeof l=="function"&&l(f,p))&&i.setValue(t,!!p);},afterAddToUListCallBack:void 0};return c.attributes&&(c.attributes[B]=t,c.attributes[_]=!!n),c},X={id:"panel-blog",title:"博客",isDefault(){return m.isBlog()},forms:[{text:"屏蔽",type:"forms",forms:[r("【屏蔽】登录弹窗","csdn-blog-shieldLoginDialog",!0),r("【屏蔽】左侧博客信息","csdn-blog-shieldLeftBlogContainerAside",!1),r("【屏蔽】右侧目录信息","csdn-blog-shieldRightDirectoryInformation",!1),r("【屏蔽】顶部工具栏","csdn-blog-shieldTopToolbar",!1),r("【屏蔽】底部的悬浮工具栏","csdn-blog-shieldBottomFloatingToolbar",!1)]},{text:"右侧悬浮工具栏",type:"forms",forms:[r("启用","csdn-blog-rightToolbarEnable",!0,void 0,"创作中心，隐藏/显示侧栏，新手引导，客服、举报..."),r("【添加按钮】前往评论","csdn-blog-addGotoRecommandButton",!0,void 0,"在悬浮工具栏最后面添加"),L("right偏移","csdn-blog-rightToolbarRightOffset",90,0,document.documentElement.clientWidth,(e,t)=>{let n=document.querySelector(".csdn-side-toolbar");v.css(n,{right:t+"px"});},e=>`当前：${e}px，默认：90px`),L("top偏移","csdn-blog-rightToolbarTopOffset",140,0,document.documentElement.clientHeight,(e,t)=>{let n=document.querySelector(".csdn-side-toolbar");v.css(n,{top:t+"px"});},e=>`当前：${e}px，默认：90px`),r("【屏蔽】创作中心","csdn-blog-rightToolbarCreativeCenter",!1),r("【屏蔽】显示/隐藏侧栏","csdn-blog-rightToolbarShowOrSidebar",!1),r("【屏蔽】新手引导","csdn-blog-rightToolbarBeginnerGuidance",!1),r("【屏蔽】客服","csdn-blog-rightToolbarCustomerService",!1),r("【屏蔽】举报","csdn-blog-rightToolbarReport",!1),r("【屏蔽】返回顶部","csdn-blog-rightToolbarBackToTop",!1)]},{text:"内容",type:"forms",forms:[r("【屏蔽】底部xx技能树","csdn-blog-shieldBottomSkillTree",!1),r("【屏蔽】选中文字悬浮栏","csdn-blog-shieldArticleSearchTip",!1,void 0,"选中文字弹出的，例如：搜索、评论、笔记"),r("自动展开内容块","csdn-blog-autoExpandContent",!1),r("全文居中","csdn-blog-articleCenter",!0,function(e,t){t&&alert("为了更好的呈现效果，请开启功能：【屏蔽】左侧博客信息、【屏蔽】右侧目录信息");})]},{text:"评论",type:"forms",forms:[r("屏蔽","csdn-blog-blockComment",!1,void 0,"屏蔽评论"),r("优化评论的位置","csdn-blog-restoreComments",!0)]},{text:"底部文章",type:"forms",forms:[r("屏蔽","csdn-blog-shieldBottomRecommendArticle",!1,void 0,"屏蔽底部文章"),r("标识CSDN下载","csdn-blog-identityCSDNDownload",!0,void 0,"使用红框标识"),r("移除资源下载的文章","csdn-blog-removeResourceDownloadArticle",!1,void 0,"移除download.csdn.net、www.iteye.com、edu.csdn.net的文章链接")]},{text:"劫持/拦截",type:"forms",forms:[r("拦截-复制的小尾巴","csdn-blog-removeClipboardHijacking",!0),r("劫持-禁止复制","csdn-blog-unBlockCopy",!0,void 0,"允许点击复制按钮进行复制")]}]},Z={id:"panel-link",title:"链接",isDefault(){return m.isLink()},forms:[{text:"功能",type:"forms",forms:[r("重定向链接","csdn-link-jumpRedirect",!0,void 0,"自动跳转至被拦截的Url链接")]}]},ee={id:"panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return m.isHuaWeiCloudBlog()},forms:[{text:"功能",type:"forms",forms:[r("自动展开全文","csdn-hua-wei-cloud-autoExpandContent",!0)]},{text:"屏蔽",type:"forms",forms:[r("【屏蔽】云开发者任务挑战活动","csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",!0),r("【屏蔽】左侧悬浮按钮","csdn-hua-wei-cloud-shieldLeftFloatingButton",!1,function(e,t){t&&alert("开启后将屏蔽【当前阅读量】、【点赞按钮】、【评论按钮】、【分享按钮】");}),r("【屏蔽】右侧栏","csdn-hua-wei-cloud-blockRightColumn",!1,function(e,t){t&&alert("开启后将屏蔽【相关产品】-【活动日历】-【运营活动】-【热门标签】");}),r("【屏蔽】底部推荐内容","csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",!1),r("【屏蔽】底部更多推荐","csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",!1)]}]},te={id:"panel-wenku",title:"资源",isDefault(){return m.isLink()},forms:[{text:"屏蔽",type:"forms",forms:[r("【屏蔽】资源推荐","csdn-wenku-shieldResourceRecommend",!1),r("【屏蔽】右侧用户信息","csdn-wenku-shieldRightUserInfo",!1),r("【屏蔽】右侧悬浮工具栏","csdn-wenku-shieldRightToolBar",!1)]}]},ne={id:"panel-so",title:"搜索",isDefault(){return m.isSo()},forms:[{text:"C知道-功能",type:"forms",forms:[r("去除水印","csdn-so-cknow-removeMaskCover",!0)]}]},oe={id:"m-panel-blog",title:"博客",isDefault(){return m.isBlog()},forms:[{text:"屏蔽",type:"forms",forms:[r("【屏蔽】广告","m-csdn-blog-removeAds",!0,void 0,"包括：登录弹窗、打开APP、ios版本提示等"),r("【屏蔽】顶部Toolbar","m-csdn-blog-shieldTopToolbar",!1)]},{text:"内容",type:"forms",forms:[r("允许选中文字","m-csdn-blog-allowSelectText",!0,void 0,"设置user-select: text;"),r("自动展开","m-csdn-blog-autoExpandContent",!0,void 0,"包括内容、代码块"),r("不限制代码块的最大高度","m-csdn-blog-notLimitCodePreMaxHeight",!1,void 0,"让代码块的高度直接被撑开")]},{text:"评论",type:"forms",forms:[r("屏蔽","m-csdn-blog-blockComment",!1,void 0,"屏蔽评论区"),r("不限制评论区的最大高度","m-csdn-blog-notLimitCommentMaxHeight",!0,void 0,"让评论区高度直接被撑开")]},{text:"底部文章",type:"forms",forms:[r("屏蔽","m-csdn-blog-blockBottomArticle",!1,void 0,"屏蔽底部文章"),r("移除资源下载的文章","m-csdn-blog-removeResourceArticle",!1,void 0,"移除download.csdn.net、www.iteye.com、edu.csdn.net的文章链接"),r("重构","m-csdn-blog-refactoringRecommendation",!0,void 0,"样式统一化"),r("新标签页打开","m-csdn-blog-openNewTab",!0,void 0,"点击文章，新标签页打开")]},{text:"劫持/拦截",type:"forms",forms:[r("劫持-禁止复制","m-csdn-blog-unBlockCopy",!0,void 0,"允许点击复制按钮进行复制")]}]},ie={id:"m-panel-link",title:"链接",isDefault(){return m.isLink()},forms:[{text:"功能",type:"forms",forms:[r("重定向链接","m-csdn-link-jumpRedirect",!0,void 0,"自动跳转至被拦截的Url链接")]}]},re={id:"panel-so",title:"搜索",isDefault(){return m.isSo()},forms:[{text:"C知道-功能",type:"forms",forms:[r("去除水印","m-csdn-so-cknow-removeMaskCover",!0)]}]},ae={id:"m-panel-wenku",title:"资源",isDefault(){return m.isWenKu()},forms:[{text:"屏蔽",type:"forms",forms:[r("【屏蔽】底部工具栏","m-csdn-wenku-shieldBottomToolbar",!1)]}]},le={id:"m-panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return m.isHuaWeiCloudBlog()},forms:[{text:"功能",type:"forms",forms:[r("自动展开全文","m-csdn-hua-wei-cloud-autoExpandContent",!0)]}]},i={$data:{data:new d.Dictionary,oneSuccessExecMenu:new d.Dictionary,onceExec:new d.Dictionary,scriptName:R,key:b,attributeKeyName:B,attributeDefaultValueName:_},$listener:{listenData:new d.Dictionary},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},initExtensionsMenu(){u.top===u.self&&H.add([{key:"show_pops_panel_setting",text:"⚙ PC端设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPanel();}},{key:"m_show_pops_panel_setting",text:"⚙ 移动端端设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showMPanel();}},{key:"gotoCSDNCKnow",text:"⚙ 前往C知道",isStoreValue:!1,autoReload:!1,showText(e){return e},callback(){window.open("https://so.csdn.net/chat","_blank");}}]);},initPanelDefaultValue(){let e=this;function t(l){if(!l.attributes)return;let s=l.attributes[B],c=l.attributes[_];if(s==null){o.warn(["请先配置键",l]);return}e.$data.data.has(s)&&o.warn("请检查该key(已存在): "+s),e.$data.data.set(s,c);}let n=this.getPanelContentConfig().concat(this.getMPanelContentConfig());for(let l=0;l<n.length;l++){let s=n[l];if(!s.forms)continue;let c=s.forms;for(let f=0;f<c.length;f++){let p=c[f];if(p.forms){let g=p.forms;for(let h=0;h<g.length;h++)t(g[h]);}else t(p);}}},setValue(e,t){let n=C(b,{}),l=n[e];n[e]=t,k(b,n),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,l,t);},hasValue(e){let t=C(b,{});return e in t},getValue(e,t){let l=C(b,{})[e];return l??(this.$data.data.has(e)?this.$data.data.get(e):t)},deleteValue(e){let t=C(b,{}),n=t[e];Reflect.deleteProperty(t,e),k(b,t),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,n,void 0);},addValueChangeListener(e,t){let n=Math.random();return this.$listener.listenData.set(e,{id:n,key:e,callback:t}),n},removeValueChangeListener(e){let t=null;for(const[n,l]of this.$listener.listenData.entries())if(l.id===e){t=n;break}typeof t=="string"?this.$listener.listenData.delete(t):console.warn("没有找到对应的监听器");},execMenu(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!i.hasValue(e)){o.warn(`${e} 键不存在`);return}let n=i.getValue(e);n&&t(n);},execMenuOnce(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!i.hasValue(e)){o.warn(`${e} 键不存在`);return}let n=i.getValue(e);if(n){if(this.$data.oneSuccessExecMenu.has(e))return;t(n),this.$data.oneSuccessExecMenu.set(e,1);}},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(t(),this.$data.onceExec.set(e,1));},showPanel(){E.panel({title:{text:`${R}-PC端设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:this.isMobile(),width:this.getWidth(),height:this.getHeight(),drag:!0,only:!0});},showMPanel(){E.panel({title:{text:`${R}-移动端设置`,position:"center",html:!1,style:""},content:this.getMPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:this.isMobile(),width:this.getWidth(),height:this.getHeight(),drag:!0,only:!0});},isMobile(){return window.outerWidth<550},getWidth(){return window.outerWidth<800?"92dvw":"800px"},getHeight(){return window.outerHeight>450?"80dvh":"450px"},getPanelContentConfig(){return [X,Z,ee,te,ne]},getMPanelContentConfig(){return [oe,ie,le,ae,re]}},se=`/* 底部免费抽xxx奖品广告 */\r
div.siderbar-box,\r
/* 华为开发者联盟加入社区 */\r
div.user-desc.user-desc-fix {\r
  display: none !important;\r
}\r
`,I={init(){a(se),i.execMenu("csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",()=>{this.shieldCloudDeveloperTaskChallengeEvent();}),i.execMenu("csdn-hua-wei-cloud-autoExpandContent",()=>{this.autoExpandContent();}),i.execMenu("csdn-hua-wei-cloud-shieldLeftFloatingButton",()=>{this.shieldLeftFloatingButton();}),i.execMenu("csdn-hua-wei-cloud-blockRightColumn",()=>{this.blockRightColumn();}),i.execMenu("csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",()=>{this.blockRecommendedContentAtTheBottom();}),i.execMenu("csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",()=>{this.shieldTheBottomForMoreRecommendations();});},autoExpandContent(){o.success("自动展开全文"),a(`
        /* 自动展开全文 */
        .main-content .user-article{
            height: auto !important;
            overflow: auto !important;
        }
        /* 点击阅读全文 */
        div.article-show-more {
            display: none !important;
        }
        `);},shieldCloudDeveloperTaskChallengeEvent(){new d.GM_Cookie().set({name:"show_join_group_index",value:1}),o.success("屏蔽云开发者任务挑战活动");},shieldLeftFloatingButton(){o.success("屏蔽左侧悬浮按钮，包括当前阅读量、点赞按钮、评论按钮、分享按钮"),a(`
        div.toolbar-wrapper.article-interact-bar{
          display: none !important;
        }`);},blockRightColumn(){o.success("屏蔽右侧栏，包括相关产品-活动日历-运营活动-热门标签"),a(`
        div.page-home-right.dp-aside-right{
          display: none !important;
        }
        `);},blockRecommendedContentAtTheBottom(){o.success("屏蔽底部推荐内容"),a(`
        div.recommend-card-box{
          display: none !important;
        }`);},shieldTheBottomForMoreRecommendations(){o.success("屏蔽底部更多推荐"),a(`
        div.more-article{
          display: none !important;
        }`);}},de=`.ecommend-item-box.recommend-recommend-box,\r
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
.passport-login-tip-container {\r
  display: none !important;\r
}\r
\r
\r
`,ce=`/* 自动展开代码块 */\r
.comment-list-box,\r
main div.blog-content-box pre {\r
  max-height: none !important;\r
}\r
/* 自动展开全文 */\r
#article_content,\r
.user-article.user-article-hide {\r
  height: auto !important;\r
  overflow: auto !important;\r
}\r
.blog_container_aside,\r
#nav {\r
  margin-left: -45px;\r
}\r
.recommend-right.align-items-stretch.clearfix,\r
.dl_right_fixed {\r
  margin-left: 45px;\r
}\r
#content_views,\r
#content_views pre,\r
#content_views pre code {\r
  user-select: text !important;\r
}\r
\r
/* 屏蔽向下滚动时左边的容器 */\r
aside.blog_container_aside {\r
  display: none !important;\r
}\r
`,ue=`#mainBox main {\r
  width: inherit !important;\r
}\r
\r
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
`,me={init(){i.getValue("csdn-blog-rightToolbarEnable")||this.shieldRightToolbar(),i.execMenuOnce("csdn-blog-rightToolbarCreativeCenter",()=>{this.shieldCreativeCenter();}),i.execMenuOnce("csdn-blog-rightToolbarShowOrSidebar",()=>{this.shieldShowOrSidebar();}),i.execMenuOnce("csdn-blog-rightToolbarBeginnerGuidance",()=>{this.shieldBeginnerGuidance();}),i.execMenuOnce("csdn-blog-rightToolbarCustomerService",()=>{this.shieldCustomerService();}),i.execMenuOnce("csdn-blog-rightToolbarReport",()=>{this.shieldReport();}),i.execMenuOnce("csdn-blog-rightToolbarBackToTop",()=>{this.shieldBackToTop();}),this.initRightToolbarOffset(),v.ready(()=>{i.execMenu("csdn-blog-addGotoRecommandButton",()=>{this.addGotoRecommandButton();});});},shieldRightToolbar(){o.info("屏蔽右侧工具栏"),a("div.csdn-side-toolbar{display: none !important;}");},addGotoRecommandButton(){o.info("【添加】前往评论按钮，在返回顶部的上面");let e=document.createElement("a");e.className="option-box",e.setAttribute("data-type","gorecommand"),e.innerHTML='<span class="show-txt" style="display:flex;opacity:100;">前往<br>评论</span>',e.addEventListener("click",function(){let t=document.querySelector("#toolBarBox");if(!t.getClientRects().length){o.error("评论区处于隐藏状态");return}o.info("滚动到评论");let n=t.getBoundingClientRect().top+window.scrollY,l=document.querySelector("#csdn-toolbar"),s=window.getComputedStyle(l),c=l.clientHeight-parseFloat(s.paddingTop)-parseFloat(s.paddingBottom);window.scrollTo({top:n-c-8,left:0,behavior:"smooth"});}),d.waitNode(".csdn-side-toolbar").then(()=>{let t=document.querySelector(".csdn-side-toolbar a:nth-last-child(2)");t.parentElement.insertBefore(e,t.nextSibling);});},initRightToolbarOffset(){o.info("初始化右侧工具栏的偏移（top、right）"),a(`
        .csdn-side-toolbar{
          left: unset !important;
        }
        `),d.waitNode(".csdn-side-toolbar").then(e=>{v.css(e,{top:parseInt(i.getValue("csdn-blog-rightToolbarTopOffset"))+"px",right:parseInt(i.getValue("csdn-blog-rightToolbarRightOffset"))+"px"});});},shieldCreativeCenter(){o.info("【屏蔽】创作中心"),a(".csdn-side-toolbar .sidetool-writeguide-box{display:none !important}");},shieldShowOrSidebar(){o.info("【屏蔽】显示/隐藏侧栏"),a(".csdn-side-toolbar a.sidecolumn{display:none !important}");},shieldBeginnerGuidance(){o.info("【屏蔽】新手引导"),a('.csdn-side-toolbar a.option-box[data-type="guide"]{display:none !important}');},shieldCustomerService(){o.info("【屏蔽】客服"),a('.csdn-side-toolbar a.option-box[data-type="cs"]{display:none !important}');},shieldReport(){o.info("【屏蔽】举报"),a('.csdn-side-toolbar a.option-box[data-type="report"]{display:none !important}');},shieldBackToTop(){o.info("【屏蔽】返回顶部"),a('.csdn-side-toolbar a.option-box[data-type="gotop"]{display:none !important}');}},W={init(){this.addCSS(),me.init(),i.execMenu("csdn-blog-articleCenter",()=>{this.articleCenter();}),i.execMenu("csdn-blog-shieldLoginDialog",()=>{this.shieldLoginDialog();}),i.execMenu("m-csdn-blog-autoExpandContent",()=>{this.autoExpandContent(),this.clickPreCodeAutomatically();}),i.execMenu("csdn-blog-blockComment",()=>{this.blockComment();}),i.execMenu("csdn-blog-shieldBottomRecommendArticle",()=>{this.shieldBottomRecommendArticle();}),i.execMenu("csdn-blog-shieldBottomSkillTree",()=>{this.shieldBottomSkillTree();}),i.execMenu("csdn-blog-shieldBottomFloatingToolbar",()=>{this.shieldBottomFloatingToolbar();}),i.execMenu("csdn-blog-shieldLeftBlogContainerAside",()=>{this.shieldLeftBlogContainerAside();}),i.execMenu("csdn-blog-shieldRightDirectoryInformation",()=>{this.shieldRightDirectoryInformation();}),i.execMenu("csdn-blog-shieldTopToolbar",()=>{this.shieldTopToolbar();}),i.execMenu("csdn-blog-shieldArticleSearchTip",()=>{this.shieldArticleSearchTip();}),v.ready(()=>{i.execMenu("ccsdn-blog-removeClipboardHijacking",()=>{this.removeClipboardHijacking();}),i.execMenu("csdn-blog-unBlockCopy",()=>{this.unBlockCopy();}),i.execMenu("csdn-blog-identityCSDNDownload",()=>{this.identityCSDNDownload();}),i.execMenu("csdn_pc_clickPreCodeAutomatically",()=>{this.clickPreCodeAutomatically();}),i.execMenu("csdn-blog-restoreComments",()=>{this.restoreComments();});});},addCSS(){o.info("添加屏蔽CSS和功能CSS"),a(de),a(ce);},removeClipboardHijacking(){var e;o.info("去除剪贴板劫持"),(e=document.querySelector(".article-copyright"))==null||e.remove(),u.articleType&&(u.articleType=0),u.csdn&&u.csdn.copyright&&u.csdn.copyright.textData&&(u.csdn.copyright.textData=""),u.csdn&&u.csdn.copyright&&u.csdn.copyright.htmlData&&(u.csdn.copyright.htmlData="");},unBlockCopy(){o.info("取消禁止复制"),document.addEventListener("click",function(t){let n=t.target,l=n.parentElement;if(!n.classList.contains("hljs-button"))return;d.preventEvent(t);let s=l.innerText||l.textContent;d.setClip(s),n.setAttribute("data-title","复制成功");},{capture:!0});let e=new d.LockFunction(function(t){var l;let n=t.target;n.localName==="pre"&&((l=n.querySelector(".hljs-button"))==null||l.setAttribute("data-title","复制"));});document.addEventListener("mouseenter",function(t){e.run(t);},{capture:!0}),document.addEventListener("mouseleave",function(t){e.run(t);},{capture:!0}),d.waitNode("#content_views").then(t=>{var n;(n=u.$("#content_views"))==null||n.unbind("copy"),t.addEventListener("copy",function(l){var c;d.preventEvent(l);let s=(c=u.getSelection())==null?void 0:c.toString();return d.setClip(s),!1});}),d.waitNode(".hljs-button").then(()=>{setTimeout(()=>{document.querySelectorAll(".hljs-button").forEach(t=>{t.removeAttribute("onclick"),t.removeAttribute("data-report-click"),t.setAttribute("data-title","复制");});},250);});},clickPreCodeAutomatically(){o.info("点击代码块自动展开"),document.addEventListener("click",function(e){var n;let t=e.target;t.localName==="pre"&&(t.style.setProperty("height","auto"),(n=t.querySelector(".hide-preCode-box"))==null||n.remove());});},restoreComments(){o.info("恢复评论到正确位置-第一条评论"),d.waitNode(".first-recommend-box").then(e=>{let t=document.querySelector(".recommend-box.insert-baidu-box.recommend-box-style");t.insertBefore(e,t.firstChild);}),o.info("恢复评论到正确位置-第二条评论"),d.waitNode(".second-recommend-box").then(e=>{let t=document.querySelector(".recommend-box.insert-baidu-box.recommend-box-style");t.insertBefore(e,t.firstChild);});},identityCSDNDownload(){o.info("标识CSDN下载的链接"),document.querySelectorAll(".recommend-item-box[data-url*='https://download.csdn.net/']").forEach(e=>{i.getValue("csdn-blog-removeResourceDownloadArticle")?e.remove():e.querySelector(".content-box").style.setProperty("border","2px solid red");});},articleCenter(){o.info("全文居中"),a(ue);},shieldLoginDialog(){o.info("屏蔽登录弹窗"),a(".passport-login-container{display: none !important;}");},autoExpandContent(){o.info("自动展开内容块"),a(`
          pre.set-code-hide{height: auto !important;}
          pre.set-code-hide .hide-preCode-box{display: none !important;}
        `);},blockComment(){o.info("屏蔽评论区"),a("#pcCommentBox{display: none !important;}");},shieldBottomRecommendArticle(){o.info("屏蔽底部推荐文章"),a("main > div.recommend-box {display: none !important;}");},shieldBottomSkillTree(){a("#treeSkill{display: none !important;}");},shieldBottomFloatingToolbar(){o.info("屏蔽底部悬浮工具栏"),a("#toolBarBox{display: none !important;}");},shieldLeftBlogContainerAside(){o.success("【屏蔽】左侧博客信息"),a("aside.blog_container_aside{display: none !important;}");},shieldRightDirectoryInformation(){o.success("【屏蔽】右侧目录信息"),a(`
        #rightAsideConcision,
        #rightAside{
          display: none !important;
        }
        `);},shieldTopToolbar(){a("#toolbarBox{display: none !important;}");},shieldArticleSearchTip(){a("#articleSearchTip{display: none !important;}");}},he=`#chatgpt-article-detail\r
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
`,pe=`/* wenku顶部横幅 */\r
#app > div > div.main.pb-32 > div > div.top-bar,\r
/* 底部展开全文 */\r
#chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid > div.open {\r
  display: none !important;\r
}`,fe={init(){a(he),a(pe),i.execMenu("csdn-wenku-shieldResourceRecommend",()=>{this.shieldResourceRecommend();}),i.execMenu("csdn-wenku-shieldRightUserInfo",()=>{this.shieldRightUserInfo();}),i.execMenu("csdn-wenku-shieldRightToolBar",()=>{this.shieldRightToolBar();});},shieldResourceRecommend(){a("#recommend{display:none !important;}");},shieldRightUserInfo(){a(".layout-right{display:none !important;}");},shieldRightToolBar(){a(".csdn-side-toolbar {display:none !important;}");}},U={init(){i.execMenu("csdn-link-jumpRedirect",()=>{this.jumpRedirect();});},jumpRedirect(){if(window.location.hostname==="link.csdn.net"&&window.location.search.startsWith("?target")){window.stop();let e=window.location.search.replace(/^\?target=/gi,"");e=decodeURIComponent(e);let t=e;o.success(`跳转链接 ${t}`),window.location.href=t;}}},A={init(){m.isLink()?(o.info("Router: 中转链接"),U.init()):m.isHuaWeiCloudBlog()?(o.info("Router: 华为云联盟"),I.init()):m.isBlog()?(o.info("Router: 博客"),W.init()):m.isWenKu()?(o.info("Router: 文库"),fe.init()):o.error("暂未适配，请反馈开发者："+globalThis.location.href);}},ge={init(){i.execMenu("m-csdn-link-jumpRedirect",()=>{U.jumpRedirect();});}},be=`/* 右下角的 免费赢华为平板xxxx */\r
.org-main-content .siderbar-box {\r
  display: none !important;\r
}\r
`,xe={init(){a(be),i.execMenu("m-csdn-hua-wei-cloud-autoExpandContent",()=>{I.autoExpandContent();});}},we=`#operate,.feed-Sign-span,\r
.view_comment_box,\r
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
div.ios-shadowbox {\r
  display: none !important;\r
}\r
`,Ce=`#mainBox {\r
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
`;function S(e=""){d.waitNodeList(e).then(()=>{document.querySelectorAll(e).forEach(t=>{t.remove();});});}const ve={init(){this.addCSS(),i.execMenu("m-csdn-blog-shieldTopToolbar",()=>{this.shieldTopToolbar();}),i.execMenu("m-csdn-blog-notLimitCodePreMaxHeight",()=>{this.notLimitCodePreMaxHeight();}),i.execMenu("m-csdn-blog-notLimitCommentMaxHeight",()=>{this.notLimitCommentMaxHeight();}),i.execMenu("m-csdn-blog-allowSelectText",()=>{this.allowSelectText();}),i.execMenu("m-csdn-blog-autoExpandContent",()=>{this.autoExpandContent();}),i.execMenu("m-csdn-blog-blockBottomArticle",()=>{this.blockBottomArticle();}),i.execMenu("m-csdn-blog-blockComment",()=>{this.blockComment();}),v.ready(()=>{i.execMenu("m-csdn-blog-removeAds",()=>{this.removeAds();}),i.execMenu("m-csdn-blog-refactoringRecommendation",()=>{this.refactoringRecommendation();}),i.execMenu("m-csdn-blog-unBlockCopy",()=>{W.unBlockCopy();});});},addCSS(){a(we),a(Ce);},shieldTopToolbar(){o.success("屏蔽顶部Toolbar"),a(`
        #csdn-toolbar{
          display: none !important;
        }
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
        `);},refactoringRecommendation(){function e(){o.success("重构底部推荐"),document.querySelectorAll(".container-fluid").forEach(n=>{var y,D;let l="",s="",c="",f="",p=!1,g=!1;if(n.hasAttribute("data-url")){if(l=n.getAttribute("data-url"),s=(y=n.querySelector(".recommend_title div.left"))==null?void 0:y.innerHTML,!n.querySelector(".text"))return;c=(D=n.querySelector(".text"))==null?void 0:D.innerHTML,n.querySelectorAll(".recommend-img").length&&n.querySelectorAll(".recommend-img").forEach(q=>{f+=q.innerHTML;});}else o.info("节点上无data-url"),l=n.querySelector("a[data-type]").getAttribute("href"),s=n.querySelector(".recommend_title div.left").innerHTML,c=n.querySelector(".text").innerHTML;var h=new URL(l);h.host==="download.csdn.net"||h.host==="www.iteye.com"&&h.pathname.match(/^\/resource/gi)?(o.info("该链接为csdn资源下载"),p=!0,s='<div class="component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>'+s):h.origin.match(/edu.csdn.net/gi)&&(g=!0,o.info("该链接为csdn学院下载"),s='<div class="component-box"><a class="csdn-edu-title" href="javascript:;">CSDN学院</a></div>'+s),n.setAttribute("class","GM-csdn-dl"),n.setAttribute("data-url",l),n.innerHTML=`<div class="GM-csdn-title"><div class="left">${s}</div></div><div class="GM-csdn-content">${c}</div><div class="GM-csdn-img">${f}</div>`,n.addEventListener("click",function(){i.getValue("m-csdn-blog-openNewTab")?window.open(l,"_blank"):window.location.href=l;}),(p||g)&&i.getValue("m-csdn-blog-removeResourceArticle")&&n.remove();});}let t=new d.LockFunction(e,50);d.waitNode("#recommend").then(n=>{o.success("重构底部推荐"),t.run(),d.mutationObserver(n,{callback:()=>{t.run();},config:{childList:!0,subtree:!0,attributes:!0}});});},blockBottomArticle(){o.success("屏蔽底部文章"),a("#recommend{display:none !important;}");},blockComment(){o.success("屏蔽评论"),a("#comment{display:none !important;}");},removeAds(){o.info("去除广告"),S(".passport-login-container"),S(".btn_open_app_prompt_box.detail-open-removed"),S(".add-firstAd"),S("div.feed-Sign-weixin"),S("div.ios-shadowbox");},notLimitCodePreMaxHeight(){o.success("不限制代码块最大高度"),a(`
        pre{
            max-height: unset !important;
        }
        `);},notLimitCommentMaxHeight(){o.success("不限制评论区最大高度"),a(`
        #comment{
          max-height: none !important;
        }
      `);},allowSelectText(){o.success("允许选择文字"),a(`
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
        `);},autoExpandContent(){o.success("自动展开内容"),a(`
        #content_views pre.set-code-hide,
        .article_content{
          height: 100% !important;
          overflow: auto !important;
        }
        `);}},ye=`/* 右下角的买一年送3个月的广告图标 */\r
.blind_box {\r
  display: none !important;\r
}\r
`,Se={init(){a(ye),i.execMenu("m-csdn-wenku-shieldBottomToolbar",()=>{this.shieldBottomToolbar();});},shieldBottomToolbar(){a(`
        .page-container > div.btn{
            display: none !important;
        }
        `);}},G={init(){m.isLink()?(o.info("Router: 中转链接"),ge.init()):m.isHuaWeiCloudBlog()?(o.info("Router: 华为云联盟"),xe.init()):m.isBlog()?(o.info("Router: 博客"),ve.init()):m.isWenKu()?(o.info("Router: 文库"),Se.init()):o.error("暂未适配，请反馈开发者："+globalThis.location.href);}};i.init();let j=d.isPhone(),M="change_env_set",x=C(M);H.add({key:M,text:`⚙ 自动: ${j?"移动端":"PC端"}`,autoReload:!1,isStoreValue:!1,showText(e){return x==null?e:e+` 手动: ${x==1?"移动端":x==2?"PC端":"未知"}`},callback:()=>{let e=[0,1,2],t=window.prompt(`请输入当前脚本环境判定
1. 自动判断: 0
2. 移动端: 1
3. PC端: 2`,"0");if(!t)return;let n=parseInt(t);if(isNaN(n)){w.error("输入的不是规范的数字");return}if(!e.includes(n)){w.error("输入的值必须是0或1或2");return}n==0?V(M):k(M,n);}});x!=null?(o.info(`手动判定为${x===1?"移动端":"PC端"}`),x==1?G.init():x==2?A.init():(w.error("意外，手动判定的值不在范围内"),V(M))):j?(o.info("自动判定为移动端"),G.init()):(o.info("自动判定为PC端"),A.init());

})(Qmsg, DOMUtils, Utils);