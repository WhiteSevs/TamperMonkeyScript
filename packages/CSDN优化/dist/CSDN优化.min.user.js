// ==UserScript==
// @name         CSDN优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.7.5
// @author       WhiteSevs
// @description  支持手机端和PC端，屏蔽广告，优化浏览体验，自动跳转拦截的URL
// @license      GPL-3.0-only
// @icon         https://www.csdn.net/favicon.ico
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.csdn.net/*
// @require      https://update.greasyfork.org/scripts/494167/1376186/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/456485/1398647/pops.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.1.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@1.5.9/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.1.2/dist/index.umd.js
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

(function (C, Y, A) {
  'use strict';

  var P=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,M=typeof GM_getValue<"u"?GM_getValue:void 0,_=typeof GM_info<"u"?GM_info:void 0,Z=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,R=typeof GM_setValue<"u"?GM_setValue:void 0,Q=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,J=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,m=typeof unsafeWindow<"u"?unsafeWindow:void 0,H=window;const X="CSDN优化",c=A.noConflict(),w=Y.noConflict(),L=H.pops||m.pops,o=new c.Log(_,m.console||H.console);var I;const E=((I=_==null?void 0:_.script)==null?void 0:I.name)||X,U=!1;o.config({debug:U,logMaxCount:1e3,autoClearConsole:!0,tag:!0});C.config(Object.defineProperties({html:!0,autoClose:!0,showClose:!1},{position:{get(){return i.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return i.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return i.getValue("qmsg-config-showreverse",!0)}},zIndex:{get(){let e=A.getMaxZIndex(),t=L.config.Utils.getPopsMaxZIndex(e).zIndex;return A.getMaxValue(e,t)+100}}}));const q=new c.GM_Menu({GM_getValue:M,GM_setValue:R,GM_registerMenuCommand:Z,GM_unregisterMenuCommand:Q}),j=new c.Httpx(J);j.interceptors.response.use(void 0,e=>(o.error(["拦截器-请求错误",e]),e.type==="onabort"?C.warning("请求取消"):e.type==="onerror"?C.error("请求异常"):e.type==="ontimeout"?C.error("请求超时"):C.error("其它错误"),e));j.config({logDetails:U});m.Object.defineProperty,m.Function.prototype.apply,m.Function.prototype.call,m.Element.prototype.appendChild,m.setTimeout;const u=c.addStyle,v="GM_Panel",T="data-key",B="data-default-value",f={isHuaWeiCloudBlog(){return !!/huaweicloud.csdn.net/i.test(window.location.origin)},isBlog(){return !!/blog.csdn.net/i.test(window.location.origin)},isWenKu(){return !!/wenku.csdn.net/i.test(window.location.origin)},isLink(){return window.location.hostname==="link.csdn.net"},isSo(){return window.location.hostname==="so.csdn.net"},isSoCKnow(){return this.isSo()&&(window.location.pathname.startsWith("/chat")||window.location.pathname.startsWith("/so/ai"))},isDownload(){return window.location.hostname==="download.csdn.net"}},V=function(e,t,n,a,l,d,h,p){let b={text:e,type:"slider",description:p,attributes:{},getValue(){return i.getValue(t,n)},getToolTipContent(g){return typeof h=="function"?h(g):`${g}`},callback(g,S){typeof d=="function"&&d(g,S)||i.setValue(t,S);},min:a,max:l};return b.attributes&&(b.attributes[T]=t,b.attributes[B]=n),b},r=function(e,t,n,a,l){let d={text:e,type:"switch",description:l,attributes:{},getValue(){return !!i.getValue(t,n)},callback(h,p){o.success(`${p?"开启":"关闭"} ${e}`),!(typeof a=="function"&&a(h,p))&&i.setValue(t,!!p);},afterAddToUListCallBack:void 0};return d.attributes&&(d.attributes[T]=t,d.attributes[B]=!!n),d},ee={id:"panel-blog",title:"博客",isDefault(){return f.isBlog()},forms:[{text:"屏蔽",type:"forms",forms:[r("【屏蔽】登录弹窗","csdn-blog-shieldLoginDialog",!0),r("【屏蔽】左侧博客信息","csdn-blog-shieldLeftBlogContainerAside",!1),r("【屏蔽】右侧目录信息","csdn-blog-shieldRightDirectoryInformation",!1),r("【屏蔽】顶部工具栏","csdn-blog-shieldTopToolbar",!1),r("【屏蔽】底部的悬浮工具栏","csdn-blog-shieldBottomFloatingToolbar",!1)]},{text:"右侧悬浮工具栏",type:"forms",forms:[r("启用","csdn-blog-rightToolbarEnable",!0,void 0,"创作中心，隐藏/显示侧栏，新手引导，客服、举报..."),r("【添加按钮】前往评论","csdn-blog-addGotoRecommandButton",!0,void 0,"在悬浮工具栏最后面添加"),V("right偏移","csdn-blog-rightToolbarRightOffset",90,0,document.documentElement.clientWidth,(e,t)=>{let n=document.querySelector(".csdn-side-toolbar");w.css(n,{right:t+"px"});},e=>`当前：${e}px，默认：90px`),V("top偏移","csdn-blog-rightToolbarTopOffset",140,0,document.documentElement.clientHeight,(e,t)=>{let n=document.querySelector(".csdn-side-toolbar");w.css(n,{top:t+"px"});},e=>`当前：${e}px，默认：90px`),r("【屏蔽】创作中心","csdn-blog-rightToolbarCreativeCenter",!1),r("【屏蔽】显示/隐藏侧栏","csdn-blog-rightToolbarShowOrSidebar",!1),r("【屏蔽】新手引导","csdn-blog-rightToolbarBeginnerGuidance",!1),r("【屏蔽】客服","csdn-blog-rightToolbarCustomerService",!1),r("【屏蔽】举报","csdn-blog-rightToolbarReport",!1),r("【屏蔽】返回顶部","csdn-blog-rightToolbarBackToTop",!1)]},{text:"内容",type:"forms",forms:[r("【屏蔽】底部xx技能树","csdn-blog-shieldBottomSkillTree",!1),r("【屏蔽】选中文字悬浮栏","csdn-blog-shieldArticleSearchTip",!1,void 0,"选中文字弹出的，例如：搜索、评论、笔记"),r("点击代码块自动展开","csdn-blog-clickPreCodeAutomatically",!0,void 0,"当鼠标点击代码块区域时，将自动展开内容"),r("自动展开代码块","csdn-blog-autoExpandCodeContent",!0,void 0,"懒人操作，免手动点击展开"),r("自动展开内容","csdn-blog-autoExpandContent",!0,void 0,"懒人操作，免手动点击展开"),r("全文居中","csdn-blog-articleCenter",!0,function(e,t){t&&alert("为了更好的呈现效果，请开启功能：【屏蔽】左侧博客信息、【屏蔽】右侧目录信息");},"自动屏蔽左侧和右侧的信息，且将文章居中"),r("允许选择内容","csdn-blog-allowSelectContent",!0,void 0)]},{text:"评论",type:"forms",forms:[r("屏蔽","csdn-blog-blockComment",!1,void 0,"屏蔽评论"),r("优化评论的位置","csdn-blog-restoreComments",!0)]},{text:"底部文章",type:"forms",forms:[r("屏蔽","csdn-blog-shieldBottomRecommendArticle",!1,void 0,"屏蔽底部文章"),r("标识CSDN下载","csdn-blog-identityCSDNDownload",!0,void 0,"使用红框标识"),r("移除资源下载的文章","csdn-blog-removeResourceDownloadArticle",!1,void 0,"移除download.csdn.net、www.iteye.com、edu.csdn.net的文章链接")]},{text:"劫持/拦截",type:"forms",forms:[r("拦截-复制的小尾巴","csdn-blog-removeClipboardHijacking",!0),r("劫持-禁止复制","csdn-blog-unBlockCopy",!0,void 0,"允许点击复制按钮进行复制")]}]},te={id:"panel-link",title:"链接",isDefault(){return f.isLink()},forms:[{text:"功能",type:"forms",forms:[r("重定向链接","csdn-link-jumpRedirect",!0,void 0,"自动跳转至被拦截的Url链接")]}]},ne={id:"panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return f.isHuaWeiCloudBlog()},forms:[{text:"功能",type:"forms",forms:[r("自动展开全文","csdn-hua-wei-cloud-autoExpandContent",!0)]},{text:"屏蔽",type:"forms",forms:[r("【屏蔽】云开发者任务挑战活动","csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",!0),r("【屏蔽】左侧悬浮按钮","csdn-hua-wei-cloud-shieldLeftFloatingButton",!1,function(e,t){t&&alert("开启后将屏蔽【当前阅读量】、【点赞按钮】、【评论按钮】、【分享按钮】");}),r("【屏蔽】右侧栏","csdn-hua-wei-cloud-blockRightColumn",!1,function(e,t){t&&alert("开启后将屏蔽【相关产品】-【活动日历】-【运营活动】-【热门标签】");}),r("【屏蔽】底部推荐内容","csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",!1),r("【屏蔽】底部更多推荐","csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",!1)]}]},oe={id:"panel-wenku",title:"资源",isDefault(){return f.isLink()},forms:[{text:"屏蔽",type:"forms",forms:[r("【屏蔽】资源推荐","csdn-wenku-shieldResourceRecommend",!1),r("【屏蔽】右侧用户信息","csdn-wenku-shieldRightUserInfo",!1),r("【屏蔽】右侧悬浮工具栏","csdn-wenku-shieldRightToolBar",!1)]}]},ie={id:"panel-so",title:"搜索",isDefault(){return f.isSo()},forms:[{text:"C知道-功能",type:"forms",forms:[r("去除水印","csdn-so-cknow-removeMaskCover",!0)]}]},re={id:"m-panel-blog",title:"博客",isDefault(){return f.isBlog()},forms:[{text:"屏蔽",type:"forms",forms:[r("【屏蔽】广告","m-csdn-blog-removeAds",!0,void 0,"包括：登录弹窗、打开APP、ios版本提示等"),r("【屏蔽】顶部Toolbar","m-csdn-blog-shieldTopToolbar",!1)]},{text:"内容",type:"forms",forms:[r("允许选中文字","m-csdn-blog-allowSelectText",!0,void 0,"设置user-select: text;"),r("自动展开","m-csdn-blog-autoExpandContent",!0,void 0,"包括内容、代码块"),r("不限制代码块的最大高度","m-csdn-blog-notLimitCodePreMaxHeight",!1,void 0,"让代码块的高度直接被撑开")]},{text:"评论",type:"forms",forms:[r("屏蔽","m-csdn-blog-blockComment",!1,void 0,"屏蔽评论区"),r("不限制评论区的最大高度","m-csdn-blog-notLimitCommentMaxHeight",!0,void 0,"让评论区高度直接被撑开")]},{text:"底部文章",type:"forms",forms:[r("屏蔽","m-csdn-blog-blockBottomArticle",!1,void 0,"屏蔽底部文章"),r("移除资源下载的文章","m-csdn-blog-removeResourceArticle",!1,void 0,"移除download.csdn.net、www.iteye.com、edu.csdn.net的文章链接"),r("重构","m-csdn-blog-refactoringRecommendation",!0,void 0,"样式统一化"),r("新标签页打开","m-csdn-blog-openNewTab",!0,void 0,"点击文章，新标签页打开")]},{text:"劫持/拦截",type:"forms",forms:[r("劫持-禁止复制","m-csdn-blog-unBlockCopy",!0,void 0,"允许点击复制按钮进行复制")]}]},le={id:"m-panel-link",title:"链接",isDefault(){return f.isLink()},forms:[{text:"功能",type:"forms",forms:[r("重定向链接","m-csdn-link-jumpRedirect",!0,void 0,"自动跳转至被拦截的Url链接")]}]},ae={id:"panel-so",title:"搜索",isDefault(){return f.isSo()},forms:[{text:"C知道-功能",type:"forms",forms:[r("去除水印","m-csdn-so-cknow-removeMaskCover",!0)]}]},se={id:"m-panel-wenku",title:"文库",isDefault(){return f.isWenKu()},forms:[{text:"屏蔽",type:"forms",forms:[r("【屏蔽】底部工具栏","m-csdn-wenku-shieldBottomToolbar",!1)]}]},de={id:"m-panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return f.isHuaWeiCloudBlog()},forms:[{text:"功能",type:"forms",forms:[r("自动展开全文","m-csdn-hua-wei-cloud-autoExpandContent",!0)]}]},ce={id:"m-panel-download",title:"资源",isDefault(){return f.isDownload()},forms:[{text:"功能",type:"forms",forms:[r("自动展开资源介绍","m-csdn-download-automaticallyExpandResourceIntroduction",!0,void 0,"屏蔽资源介绍【展开全部】按钮并展开资源介绍")]},{text:"屏蔽",type:"forms",forms:[r("【屏蔽】广告","m-csdn-download-removeAds",!0,void 0,"包括：登录弹窗、会员降价等")]}]},D=function(e,t,n,a,l,d){let h=[];typeof a=="function"?h=a():h=a;let p={text:e,type:"select",description:d,attributes:{},getValue(){return i.getValue(t,n)},callback(b,g,S){i.setValue(t,g),typeof l=="function"&&l(b,g,S);},data:h};return p.attributes&&(p.attributes[T]=t,p.attributes[B]=n),p},ue={id:"component-common",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[D("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,n)=>{o.info("设置当前Qmsg弹出位置"+n);},"Toast显示在页面九宫格的位置"),D("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),r("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]},me={id:"component-common",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[D("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,n)=>{o.info("设置当前Qmsg弹出位置"+n);},"Toast显示在页面九宫格的位置"),D("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),r("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]},x={data:null,oneSuccessExecMenu:null,onceExec:null,listenData:null},i={$data:{get data(){return x.data==null&&(x.data=new c.Dictionary),x.data},get oneSuccessExecMenu(){return x.oneSuccessExecMenu==null&&(x.oneSuccessExecMenu=new c.Dictionary),x.oneSuccessExecMenu},get onceExec(){return x.onceExec==null&&(x.onceExec=new c.Dictionary),x.onceExec},get scriptName(){return E},key:v,attributeKeyName:T,attributeDefaultValueName:B},$listener:{get listenData(){return x.listenData==null&&(x.listenData=new c.Dictionary),x.listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},initExtensionsMenu(){m.top===m.self&&q.add([{key:"show_pops_panel_setting",text:"⚙ PC端设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPanel();}},{key:"m_show_pops_panel_setting",text:"⚙ 移动端端设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showMPanel();}},{key:"gotoCSDNCKnow",text:"⚙ 前往C知道",isStoreValue:!1,autoReload:!1,showText(e){return e},callback(){window.open("https://so.csdn.net/chat","_blank");}}]);},initPanelDefaultValue(){let e=this;function t(l){if(!l.attributes)return;let d=l.attributes[T],h=l.attributes[B];if(d==null){o.warn(["请先配置键",l]);return}e.$data.data.has(d)&&o.warn("请检查该key(已存在): "+d),e.$data.data.set(d,h);}function n(l){for(let d=0;d<l.length;d++){let h=l[d];t(h);let p=h.forms;p&&Array.isArray(p)&&n(p);}}let a=this.getPanelContentConfig().concat(this.getMPanelContentConfig());for(let l=0;l<a.length;l++){let d=a[l];if(!d.forms)continue;let h=d.forms;h&&Array.isArray(h)&&n(h);}},setValue(e,t){let n=M(v,{}),a=n[e];n[e]=t,R(v,n),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,a,t);},hasKey(e){let t=M(v,{});return e in t},getValue(e,t){let a=M(v,{})[e];return a??(this.$data.data.has(e)?this.$data.data.get(e):t)},deleteValue(e){let t=M(v,{}),n=t[e];Reflect.deleteProperty(t,e),R(v,t),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,n,void 0);},addValueChangeListener(e,t){let n=Math.random();return this.$listener.listenData.set(e,{id:n,key:e,callback:t}),n},removeValueChangeListener(e){let t=null;for(const[n,a]of this.$listener.listenData.entries())if(a.id===e){t=n;break}typeof t=="string"?this.$listener.listenData.delete(t):console.warn("没有找到对应的监听器");},execMenu(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){o.warn(`${e} 键不存在`);return}let n=i.getValue(e);n&&t(n);},execMenuOnce(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){o.warn(`${e} 键不存在`);return}let n=i.getValue(e);if(n){if(this.$data.oneSuccessExecMenu.has(e))return;t(n),this.$data.oneSuccessExecMenu.set(e,1);}},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(t(),this.$data.onceExec.set(e,1));},showPanel(){L.panel({title:{text:`${E}-PC端设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:this.isMobile(),width:this.getWidth(),height:this.getHeight(),drag:!0,only:!0});},showMPanel(){L.panel({title:{text:`${E}-移动端设置`,position:"center",html:!1,style:""},content:this.getMPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:this.isMobile(),width:this.getWidth(),height:this.getHeight(),drag:!0,only:!0});},isMobile(){return window.outerWidth<550},getWidth(){return window.outerWidth<800?"92dvw":"800px"},getHeight(){return window.outerHeight>450?"80dvh":"450px"},getPanelContentConfig(){return [ue,ee,te,ne,oe,ie]},getMPanelContentConfig(){return [me,re,le,de,se,ae,ce]}},he=`/* 底部免费抽xxx奖品广告 */\r
div.siderbar-box,\r
/* 华为开发者联盟加入社区 */\r
div.user-desc.user-desc-fix {\r
  display: none !important;\r
}\r
`,s={waitForElementToRemove(e=""){c.waitNodeList(e).then(t=>{t.forEach(n=>n.remove());});},addBlockCSS(...e){let t=[];e.length!==0&&(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""||(e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),u(`${t.join(`,
`)}{display: none !important;}`)));}},W={init(){u(he),i.execMenu("csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",()=>{this.shieldCloudDeveloperTaskChallengeEvent();}),i.execMenu("csdn-hua-wei-cloud-autoExpandContent",()=>{this.autoExpandContent();}),i.execMenu("csdn-hua-wei-cloud-shieldLeftFloatingButton",()=>{this.shieldLeftFloatingButton();}),i.execMenu("csdn-hua-wei-cloud-blockRightColumn",()=>{this.blockRightColumn();}),i.execMenu("csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",()=>{this.blockRecommendedContentAtTheBottom();}),i.execMenu("csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",()=>{this.shieldTheBottomForMoreRecommendations();});},autoExpandContent(){o.info("自动展开全文"),s.addBlockCSS("div.article-show-more"),u(`
        /* 自动展开全文 */
        .main-content .user-article{
            height: auto !important;
            overflow: auto !important;
        }
        `);},shieldCloudDeveloperTaskChallengeEvent(){new c.GM_Cookie().set({name:"show_join_group_index",value:1}),o.info("设置Cookie 屏蔽云开发者任务挑战活动");},shieldLeftFloatingButton(){o.info("屏蔽左侧悬浮按钮，包括当前阅读量、点赞按钮、评论按钮、分享按钮"),s.addBlockCSS("div.toolbar-wrapper.article-interact-bar");},blockRightColumn(){o.info("屏蔽右侧栏，包括相关产品-活动日历-运营活动-热门标签"),s.addBlockCSS("div.page-home-right.dp-aside-right");},blockRecommendedContentAtTheBottom(){o.info("屏蔽底部推荐内容"),s.addBlockCSS("div.recommend-card-box");},shieldTheBottomForMoreRecommendations(){o.info("屏蔽底部更多推荐"),s.addBlockCSS("div.more-article");}},fe=`.ecommend-item-box.recommend-recommend-box,\r
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
`,pe=`/*.blog_container_aside,\r
#nav {\r
	margin-left: -45px;\r
}\r
.recommend-right.align-items-stretch.clearfix,\r
.dl_right_fixed {\r
	margin-left: 45px;\r
}*/\r
`,ge=`#mainBox main {\r
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
`,xe={init(){i.getValue("csdn-blog-rightToolbarEnable")||this.shieldRightToolbar(),i.execMenuOnce("csdn-blog-rightToolbarCreativeCenter",()=>{this.shieldCreativeCenter();}),i.execMenuOnce("csdn-blog-rightToolbarShowOrSidebar",()=>{this.shieldShowOrSidebar();}),i.execMenuOnce("csdn-blog-rightToolbarBeginnerGuidance",()=>{this.shieldBeginnerGuidance();}),i.execMenuOnce("csdn-blog-rightToolbarCustomerService",()=>{this.shieldCustomerService();}),i.execMenuOnce("csdn-blog-rightToolbarReport",()=>{this.shieldReport();}),i.execMenuOnce("csdn-blog-rightToolbarBackToTop",()=>{this.shieldBackToTop();}),this.initRightToolbarOffset(),w.ready(()=>{i.execMenu("csdn-blog-addGotoRecommandButton",()=>{this.addGotoRecommandButton();});});},shieldRightToolbar(){o.info("屏蔽右侧工具栏"),s.addBlockCSS("div.csdn-side-toolbar");},addGotoRecommandButton(){o.info("【添加】前往评论按钮，在返回顶部的上面");let e=document.createElement("a");e.className="option-box",e.setAttribute("data-type","gorecommand"),e.innerHTML='<span class="show-txt" style="display:flex;opacity:100;">前往<br>评论</span>',e.addEventListener("click",function(){let t=document.querySelector("#toolBarBox");if(!t.getClientRects().length){o.error("评论区处于隐藏状态");return}o.info("滚动到评论");let n=t.getBoundingClientRect().top+window.scrollY,a=document.querySelector("#csdn-toolbar"),l=window.getComputedStyle(a),d=a.clientHeight-parseFloat(l.paddingTop)-parseFloat(l.paddingBottom);window.scrollTo({top:n-d-8,left:0,behavior:"smooth"});}),c.waitNode(".csdn-side-toolbar").then(()=>{let t=document.querySelector(".csdn-side-toolbar a:nth-last-child(2)");t.parentElement.insertBefore(e,t.nextSibling);});},initRightToolbarOffset(){o.info("初始化右侧工具栏的偏移（top、right）"),u(`
        .csdn-side-toolbar{
          left: unset !important;
        }
        `),c.waitNode(".csdn-side-toolbar").then(e=>{w.css(e,{top:parseInt(i.getValue("csdn-blog-rightToolbarTopOffset"))+"px",right:parseInt(i.getValue("csdn-blog-rightToolbarRightOffset"))+"px"});});},shieldCreativeCenter(){o.info("【屏蔽】创作中心"),s.addBlockCSS(".csdn-side-toolbar .sidetool-writeguide-box");},shieldShowOrSidebar(){o.info("【屏蔽】显示/隐藏侧栏"),s.addBlockCSS(".csdn-side-toolbar a.sidecolumn");},shieldBeginnerGuidance(){o.info("【屏蔽】新手引导"),s.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="guide"]');},shieldCustomerService(){o.info("【屏蔽】客服"),s.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="cs"]');},shieldReport(){o.info("【屏蔽】举报"),s.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="report"]');},shieldBackToTop(){o.info("【屏蔽】返回顶部"),s.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="gotop"]');}},F={init(){this.addCSS(),xe.init(),i.execMenu("csdn-blog-articleCenter",()=>{this.articleCenter();}),i.execMenu("csdn-blog-shieldLoginDialog",()=>{this.shieldLoginDialog();}),i.execMenu("csdn-blog-autoExpandContent",()=>{this.autoExpandContent();}),i.execMenu("csdn-blog-autoExpandCodeContent",()=>{this.autoExpandCodeContent();}),i.execMenu("csdn-blog-blockComment",()=>{this.blockComment();}),i.execMenu("csdn-blog-shieldBottomRecommendArticle",()=>{this.shieldBottomRecommendArticle();}),i.execMenu("csdn-blog-shieldBottomSkillTree",()=>{this.shieldBottomSkillTree();}),i.execMenu("csdn-blog-shieldBottomFloatingToolbar",()=>{this.shieldBottomFloatingToolbar();}),i.execMenu("csdn-blog-shieldLeftBlogContainerAside",()=>{this.shieldLeftBlogContainerAside();}),i.execMenu("csdn-blog-shieldRightDirectoryInformation",()=>{this.shieldRightDirectoryInformation();}),i.execMenu("csdn-blog-shieldTopToolbar",()=>{this.shieldTopToolbar();}),i.execMenu("csdn-blog-shieldArticleSearchTip",()=>{this.shieldArticleSearchTip();}),i.execMenu("csdn-blog-allowSelectContent",()=>{this.allowSelectContent();}),w.ready(()=>{i.execMenu("csdn-blog-removeClipboardHijacking",()=>{this.removeClipboardHijacking();}),i.execMenuOnce("csdn-blog-unBlockCopy",()=>{this.unBlockCopy();}),i.execMenu("csdn-blog-identityCSDNDownload",()=>{this.identityCSDNDownload();}),i.execMenuOnce("csdn-blog-clickPreCodeAutomatically",()=>{this.clickPreCodeAutomatically();}),i.execMenu("csdn-blog-restoreComments",()=>{this.restoreComments();});});},addCSS(){o.info("添加屏蔽CSS和功能CSS"),u(fe),u(pe);},removeClipboardHijacking(){var e;o.info("去除剪贴板劫持"),(e=document.querySelector(".article-copyright"))==null||e.remove(),m.articleType&&(m.articleType=0),m.csdn&&m.csdn.copyright&&m.csdn.copyright.textData&&(m.csdn.copyright.textData=""),m.csdn&&m.csdn.copyright&&m.csdn.copyright.htmlData&&(m.csdn.copyright.htmlData="");},unBlockCopy(){o.info("取消禁止复制"),w.on(document,"click",function(t){let n=t.target,a=n.parentElement;if(!n.classList.contains("hljs-button"))return;c.preventEvent(t);let l=(a.innerText||a.textContent||"").toString();o.info("点击复制按钮复制内容："+(l.length>8?l.substring(0,8)+"...":l)),c.setClip(l),n.setAttribute("data-title","复制成功");},{capture:!0});let e=new c.LockFunction(function(t){let n=t.target;if(n.localName!=="pre")return;let a=n.querySelector(".hljs-button");a&&a.setAttribute("data-title","复制");});w.on(document,["mouseenter","mouseleave"],function(t){e.run(t);},{capture:!0}),c.waitNode("#content_views").then(t=>{var n;m.$&&((n=m.$("#content_views"))==null||n.unbind("copy")),w.on(t,"copy",function(a){c.preventEvent(a);let l=m.getSelection(),d=l==null?void 0:l.toString();return o.info("Ctrl+C复制内容："+(d.length>8?d.substring(0,8)+"...":d)),c.setClip(d),!1},{capture:!0});}),c.waitNode(".hljs-button").then(()=>{setTimeout(()=>{document.querySelectorAll(".hljs-button").forEach(t=>{t.removeAttribute("onclick"),t.removeAttribute("data-report-click"),t.setAttribute("data-title","复制");});},250);});},clickPreCodeAutomatically(){o.info("点击代码块自动展开"),document.addEventListener("click",function(e){var n;let t=e.target;t.localName==="pre"&&(t.style.setProperty("height","auto"),(n=t.querySelector(".hide-preCode-box"))==null||n.remove());});},restoreComments(){o.info("恢复评论到正确位置-第一条评论"),c.waitNode(".first-recommend-box").then(e=>{let t=document.querySelector(".recommend-box.insert-baidu-box.recommend-box-style");t.insertBefore(e,t.firstChild);}),o.info("恢复评论到正确位置-第二条评论"),c.waitNode(".second-recommend-box").then(e=>{let t=document.querySelector(".recommend-box.insert-baidu-box.recommend-box-style");t.insertBefore(e,t.firstChild);});},identityCSDNDownload(){o.info("标识CSDN下载的链接"),document.querySelectorAll(".recommend-item-box[data-url*='https://download.csdn.net/']").forEach(e=>{i.getValue("csdn-blog-removeResourceDownloadArticle")?e.remove():e.querySelector(".content-box").style.setProperty("border","2px solid red");});},articleCenter(){o.info("全文居中"),u(ge);},shieldLoginDialog(){o.info("屏蔽登录弹窗"),s.addBlockCSS(".passport-login-container");},autoExpandCodeContent(){o.info("自动展开代码块"),s.addBlockCSS("pre.set-code-hide .hide-preCode-box"),u(`
		pre.set-code-hide{
			height: auto !important;
		}
		/* 自动展开代码块 */
		.comment-list-box,
		main div.blog-content-box pre {
			max-height: none !important;
		}
        `);},autoExpandContent(){o.info("自动展开全文"),u(`
		/* 自动展开全文 */
		#article_content,
		.user-article.user-article-hide {
			height: auto !important;
			overflow: auto !important;
		}
        `);},blockComment(){o.info("屏蔽评论区"),s.addBlockCSS("#pcCommentBox");},shieldBottomRecommendArticle(){o.info("屏蔽底部推荐文章"),s.addBlockCSS("main > div.recommend-box");},shieldBottomSkillTree(){o.info("屏蔽底部xx技能树"),s.addBlockCSS("#treeSkill");},shieldBottomFloatingToolbar(){o.info("屏蔽底部悬浮工具栏"),s.addBlockCSS("#toolBarBox");},shieldLeftBlogContainerAside(){o.info("【屏蔽】左侧博客信息"),s.addBlockCSS("aside.blog_container_aside");},shieldRightDirectoryInformation(){o.info("【屏蔽】右侧目录信息"),s.addBlockCSS("#rightAsideConcision","#rightAside");},shieldTopToolbar(){o.info("屏蔽顶部Toolbar"),s.addBlockCSS("#toolbarBox");},shieldArticleSearchTip(){o.info("屏蔽文章内的选中搜索悬浮提示"),s.addBlockCSS("#articleSearchTip");},allowSelectContent(){o.info("允许选择内容"),u(`
		#content_views,
		#content_views pre,
		#content_views pre code {
			user-select: text !important;
		}
		`);}},be=`#chatgpt-article-detail\r
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
`,we=`/* wenku顶部横幅 */\r
#app > div > div.main.pb-32 > div > div.top-bar,\r
/* 底部展开全文 */\r
#chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid > div.open {\r
  display: none !important;\r
}`,Ce={init(){u(be),u(we),i.execMenu("csdn-wenku-shieldResourceRecommend",()=>{this.shieldResourceRecommend();}),i.execMenu("csdn-wenku-shieldRightUserInfo",()=>{this.shieldRightUserInfo();}),i.execMenu("csdn-wenku-shieldRightToolBar",()=>{this.shieldRightToolBar();});},shieldResourceRecommend(){o.info("【屏蔽】资源推荐"),s.addBlockCSS("#recommend");},shieldRightUserInfo(){o.info("【屏蔽】右侧用户信息"),s.addBlockCSS(".layout-right");},shieldRightToolBar(){o.info("【屏蔽】右侧悬浮工具栏"),s.addBlockCSS(".csdn-side-toolbar");}},O={init(){i.execMenu("csdn-link-jumpRedirect",()=>{this.jumpRedirect();});},jumpRedirect(){if(window.location.hostname==="link.csdn.net"&&window.location.search.startsWith("?target")){window.stop();let e=window.location.search.replace(/^\?target=/gi,"");e=decodeURIComponent(e);let t=e;o.success(`跳转链接 ${t}`),window.location.href=t;}}},G={init(){f.isLink()?(o.info("Router: 中转链接"),O.init()):f.isHuaWeiCloudBlog()?(o.info("Router: 华为云联盟"),W.init()):f.isBlog()?(o.info("Router: 博客"),F.init()):f.isWenKu()?(o.info("Router: 文库"),Ce.init()):o.error("暂未适配，请反馈开发者："+globalThis.location.href);}},Se={init(){i.execMenu("m-csdn-link-jumpRedirect",()=>{O.jumpRedirect();});}},ve=`/* 右下角的 免费赢华为平板xxxx */\r
.org-main-content .siderbar-box {\r
  display: none !important;\r
}\r
`,ye={init(){u(ve),i.execMenu("m-csdn-hua-wei-cloud-autoExpandContent",()=>{W.autoExpandContent();});}},Me=`#operate,.feed-Sign-span,\r
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
`,ke=`#mainBox {\r
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
`,Te={init(){this.addCSS(),i.execMenu("m-csdn-blog-shieldTopToolbar",()=>{this.shieldTopToolbar();}),i.execMenu("m-csdn-blog-notLimitCodePreMaxHeight",()=>{this.notLimitCodePreMaxHeight();}),i.execMenu("m-csdn-blog-notLimitCommentMaxHeight",()=>{this.notLimitCommentMaxHeight();}),i.execMenu("m-csdn-blog-allowSelectText",()=>{this.allowSelectText();}),i.execMenu("m-csdn-blog-autoExpandContent",()=>{this.autoExpandContent();}),i.execMenu("m-csdn-blog-blockBottomArticle",()=>{this.blockBottomArticle();}),i.execMenu("m-csdn-blog-blockComment",()=>{this.blockComment();}),w.ready(()=>{i.execMenu("m-csdn-blog-removeAds",()=>{this.removeAds();}),i.execMenu("m-csdn-blog-refactoringRecommendation",()=>{this.refactoringRecommendation();}),i.execMenu("m-csdn-blog-unBlockCopy",()=>{F.unBlockCopy();});});},addCSS(){u(Me),u(ke);},shieldTopToolbar(){o.info("屏蔽顶部Toolbar"),s.addBlockCSS("#csdn-toolbar"),u(`
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
        `);},refactoringRecommendation(){function e(){o.info("重构底部推荐"),document.querySelectorAll(".container-fluid").forEach(n=>{var S,N;let a="",l="",d="",h="",p=!1,b=!1;if(n.hasAttribute("data-url")){if(a=n.getAttribute("data-url"),l=(S=n.querySelector(".recommend_title div.left"))==null?void 0:S.innerHTML,!n.querySelector(".text"))return;d=(N=n.querySelector(".text"))==null?void 0:N.innerHTML,n.querySelectorAll(".recommend-img").length&&n.querySelectorAll(".recommend-img").forEach(z=>{h+=z.innerHTML;});}else o.info("节点上无data-url"),a=n.querySelector("a[data-type]").getAttribute("href"),l=n.querySelector(".recommend_title div.left").innerHTML,d=n.querySelector(".text").innerHTML;var g=new URL(a);g.host==="download.csdn.net"||g.host==="www.iteye.com"&&g.pathname.match(/^\/resource/gi)?(o.info("该链接为csdn资源下载"),p=!0,l='<div class="component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>'+l):g.origin.match(/edu.csdn.net/gi)&&(b=!0,o.info("该链接为csdn学院下载"),l='<div class="component-box"><a class="csdn-edu-title" href="javascript:;">CSDN学院</a></div>'+l),n.setAttribute("class","GM-csdn-dl"),n.setAttribute("data-url",a),n.innerHTML=`<div class="GM-csdn-title"><div class="left">${l}</div></div><div class="GM-csdn-content">${d}</div><div class="GM-csdn-img">${h}</div>`,n.addEventListener("click",function(){i.getValue("m-csdn-blog-openNewTab")?window.open(a,"_blank"):window.location.href=a;}),(p||b)&&i.getValue("m-csdn-blog-removeResourceArticle")&&n.remove();});}let t=new c.LockFunction(e,50);c.waitNode("#recommend").then(n=>{o.info("重构底部推荐"),t.run(),c.mutationObserver(n,{callback:()=>{t.run();},config:{childList:!0,subtree:!0,attributes:!0}});});},blockBottomArticle(){o.info("屏蔽底部文章"),s.addBlockCSS("#recommend");},blockComment(){o.info("屏蔽评论"),s.addBlockCSS("#comment");},removeAds(){o.info("去除广告"),s.waitForElementToRemove(".passport-login-container"),s.waitForElementToRemove(".btn_open_app_prompt_box.detail-open-removed"),s.waitForElementToRemove(".add-firstAd"),s.waitForElementToRemove("div.feed-Sign-weixin"),s.waitForElementToRemove("div.ios-shadowbox");},notLimitCodePreMaxHeight(){o.info("不限制代码块最大高度"),u(`
        pre{
            max-height: unset !important;
        }
        `);},notLimitCommentMaxHeight(){o.info("不限制评论区最大高度"),u(`
        #comment{
          max-height: none !important;
        }
      `);},allowSelectText(){o.info("允许选择文字"),u(`
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
        `);},autoExpandContent(){o.info("自动展开内容"),u(`
        #content_views pre.set-code-hide,
        .article_content{
          height: 100% !important;
          overflow: auto !important;
        }
        `);}},Be=`/* 右下角的买一年送3个月的广告图标 */\r
.blind_box {\r
  display: none !important;\r
}\r
`,_e={init(){u(Be),i.execMenu("m-csdn-wenku-shieldBottomToolbar",()=>{this.shieldBottomToolbar();});},shieldBottomToolbar(){o.info("【屏蔽】底部工具栏"),s.addBlockCSS(".page-container > div.btn");}},Re=`/* 右下角悬浮图标 买1年送3个月 */\r
.page-container .blind_box,\r
/* 底部工具栏右边的 开会员按钮（低至xx元/次） */\r
.page-container .btn .ml-12,\r
/* 登录弹窗 */\r
.passport-login-container,\r
/* 通用广告className匹配 */\r
.ads {\r
	display: none !important;\r
}\r
`,De={init(){i.execMenu("m-csdn-download-removeAds",()=>{u(Re);}),i.execMenuOnce("m-csdn-download-automaticallyExpandResourceIntroduction",()=>{this.automaticallyExpandResourceIntroduction();});},automaticallyExpandResourceIntroduction(){o.info("自动展开资源介绍"),s.addBlockCSS("label.unfold-font"),u(`
		.resource-desc{
			max-height: unset !important;
    		overflow: unset !important;
		}
		`);}},$={init(){f.isLink()?(o.info("Router: 中转链接"),Se.init()):f.isHuaWeiCloudBlog()?(o.info("Router: 华为云联盟"),ye.init()):f.isBlog()?(o.info("Router: 博客"),Te.init()):f.isWenKu()?(o.info("Router: 文库"),_e.init()):f.isDownload()?(o.info("Router: 资源下载"),De.init()):o.error("暂未适配，请反馈开发者："+globalThis.location.href);}};i.init();let K=c.isPhone(),k="change_env_set",y=M(k);q.add({key:k,text:`⚙ 自动: ${K?"移动端":"PC端"}`,autoReload:!1,isStoreValue:!1,showText(e){return y==null?e:e+` 手动: ${y==1?"移动端":y==2?"PC端":"未知"}`},callback:()=>{let e=[0,1,2],t=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!t)return;let n=parseInt(t);if(isNaN(n)){C.error("输入的不是规范的数字");return}if(!e.includes(n)){C.error("输入的值必须是0或1或2");return}n==0?P(k):R(k,n);}});y!=null?(o.info(`手动判定为${y===1?"移动端":"PC端"}`),y==1?$.init():y==2?G.init():(C.error("意外，手动判定的值不在范围内"),P(k))):K?(o.info("自动判定为移动端"),$.init()):(o.info("自动判定为PC端"),G.init());

})(Qmsg, DOMUtils, Utils);