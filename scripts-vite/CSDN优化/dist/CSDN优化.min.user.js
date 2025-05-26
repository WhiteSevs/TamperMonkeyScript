// ==UserScript==
// @name         CSDN优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.5.26
// @author       WhiteSevs
// @description  支持PC和手机端、屏蔽广告、优化浏览体验、重定向拦截的Url、自动展开全文、自动展开代码块、全文居中、允许复制内容、去除复制内容的小尾巴、自定义屏蔽元素等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.csdn.net/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.6.6/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.5.4/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.0.7/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.3.2/dist/index.umd.js
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

(function (w, me, F, ne) {
	'use strict';

	var oe=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,Z=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,k=typeof GM_getValue<"u"?GM_getValue:void 0,G=typeof GM_info<"u"?GM_info:void 0,pe=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,j=typeof GM_setValue<"u"?GM_setValue:void 0,fe=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,he=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,x=typeof unsafeWindow<"u"?unsafeWindow:void 0,ge=window;const p={waitRemove(...e){e.forEach(t=>{f.waitNodeList(t).then(o=>{o.forEach(l=>l.remove());});});},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(o=>{Array.isArray(o)?t=t.concat(o):t.push(o);}),b(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){let t=typeof Z=="function"?Z(e.keyName):"";typeof t=="string"&&t?b(t):p.loadStyleLink(e.url);},async loadStyleLink(e){let t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=e,v.ready(()=>{document.head.appendChild(t);});},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(o=>{t.onload=()=>{o(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.match(/^http(s|):\/\//i)||(e.startsWith("/")||(e+="/"),e=window.location.origin+e),e},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;let t=new URL(e);return t.protocol="https:",t.toString()}},xe="CSDN优化",f=F.noConflict(),v=me.noConflict(),W=ne,n=new f.Log(G,x.console||ge.console);var te;const H=((te=G==null?void 0:G.script)==null?void 0:te.name)||xe,re=false;n.config({debug:re,logMaxCount:1e3,autoClearConsole:true,tag:true});w.config(Object.defineProperties({html:true,autoClose:true,showClose:false},{position:{get(){return r.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return r.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return r.getValue("qmsg-config-showreverse",true)}},zIndex:{get(){let e=F.getMaxZIndex(),t=ne.config.InstanceUtils.getPopsMaxZIndex().zIndex;return F.getMaxValue(e,t)+100}}}));const ie=new f.GM_Menu({GM_getValue:k,GM_setValue:j,GM_registerMenuCommand:pe,GM_unregisterMenuCommand:fe}),E=new f.Httpx({xmlHttpRequest:he,logDetails:re});E.interceptors.response.use(void 0,e=>(n.error("拦截器-请求错误",e),e.type==="onabort"?w.warning("请求取消"):e.type==="onerror"?w.error("请求异常"):e.type==="ontimeout"?w.error("请求超时"):w.error("其它错误"),e));x.Object.defineProperty,x.Function.prototype.apply,x.Function.prototype.call,x.Element.prototype.appendChild,x.setTimeout;const b=f.addStyle.bind(f),le=document.querySelector.bind(document),be=document.querySelectorAll.bind(document),T="GM_Panel",we="data-init",O="data-key",$="data-default-value",Ce="data-init-more-value",y="data-storage-api",C={isHuaWeiCloudBlog(){return !!/huaweicloud.csdn.net/i.test(window.location.origin)},isBlog(){return !!/blog.csdn.net/i.test(window.location.origin)},isBlogArticle(){return this.isBlog()&&window.location.pathname.includes("/article/details/")},isWenKu(){return !!/wenku.csdn.net/i.test(window.location.origin)},isLink(){return window.location.hostname==="link.csdn.net"},isSo(){return window.location.hostname==="so.csdn.net"},isSoCKnow(){return this.isSo()&&(window.location.pathname.startsWith("/chat")||window.location.pathname.startsWith("/so/ai"))},isDownload(){return window.location.hostname==="download.csdn.net"}},Q=function(e,t,o,l,s,a,m,h,g){let c={text:e,type:"slider",description:h,attributes:{},props:{},getValue(){return this.props[y].get(t,o)},getToolTipContent(d){return typeof m=="function"?m(d):`${d}`},callback(d,u){typeof a=="function"&&a(d,u)||this.props[y].set(t,u);},min:l,max:s,step:g};return Reflect.set(c.attributes,O,t),Reflect.set(c.attributes,$,o),Reflect.set(c.props,y,{get(d,u){return r.getValue(d,u)},set(d,u){r.setValue(d,u);}}),c},i=function(e,t,o,l,s,a){let m={text:e,type:"switch",description:s,attributes:{},props:{},getValue(){return !!this.props[y].get(t,o)},callback(h,g){let c=!!g;n.success(`${c?"开启":"关闭"} ${e}`),!(typeof l=="function"&&l(h,c))&&this.props[y].set(t,c);},afterAddToUListCallBack:a};return Reflect.set(m.attributes,O,t),Reflect.set(m.attributes,$,o),Reflect.set(m.props,y,{get(h,g){return r.getValue(h,g)},set(h,g){r.setValue(h,g);}}),m},ve={id:"panel-blog",title:"博客",isDefault(){return C.isBlog()},forms:[{type:"forms",text:"",forms:[{type:"deepMenu",text:"文章",forms:[{type:"forms",text:"",forms:[{text:"布局屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[i("【屏蔽】登录弹窗","csdn-blog-shieldLoginDialog",true),i("【屏蔽】左侧博客信息","csdn-blog-shieldLeftBlogContainerAside",false),i("【屏蔽】右侧目录信息","csdn-blog-shieldRightDirectoryInformation",false),i("【屏蔽】底部的悬浮工具栏","csdn-blog-shieldBottomFloatingToolbar",false)]}]},{text:"右侧悬浮工具栏",type:"deepMenu",forms:[{text:"功能",type:"forms",forms:[i("启用","csdn-blog-rightToolbarEnable",true,void 0,"创作中心，隐藏/显示侧栏，新手引导，客服、举报..."),i("【添加按钮】前往评论","csdn-blog-addGotoRecommandButton",true,void 0,"在悬浮工具栏最后面添加"),Q("right偏移","csdn-blog-rightToolbarRightOffset",90,0,document.documentElement.clientWidth,(e,t)=>{let o=document.querySelector(".csdn-side-toolbar");v.css(o,{right:t+"px"});},e=>`当前：${e}px，默认：90px`),Q("top偏移","csdn-blog-rightToolbarTopOffset",140,0,document.documentElement.clientHeight,(e,t)=>{let o=document.querySelector(".csdn-side-toolbar");v.css(o,{top:t+"px"});},e=>`当前：${e}px，默认：90px`)]},{text:"屏蔽",type:"forms",forms:[i("【屏蔽】创作中心","csdn-blog-rightToolbarCreativeCenter",false),i("【屏蔽】显示/隐藏侧栏","csdn-blog-rightToolbarShowOrSidebar",false),i("【屏蔽】新手引导","csdn-blog-rightToolbarBeginnerGuidance",false),i("【屏蔽】客服","csdn-blog-rightToolbarCustomerService",false),i("【屏蔽】举报","csdn-blog-rightToolbarReport",false),i("【屏蔽】返回顶部","csdn-blog-rightToolbarBackToTop",false)]}]},{text:"内容",type:"deepMenu",forms:[{text:"功能",type:"forms",forms:[i("点击代码块自动展开","csdn-blog-clickPreCodeAutomatically",true,void 0,"当鼠标点击代码块区域时，将自动展开内容"),i("自动展开代码块","csdn-blog-autoExpandCodeContent",true,void 0,"懒人操作，免手动点击展开"),i("自动展开内容","csdn-blog-autoExpandContent",true,void 0,"懒人操作，免手动点击展开"),i("全文居中","csdn-blog-articleCenter",true,function(e,t){t&&alert("为了更好的呈现效果，请开启功能：【屏蔽】左侧博客信息、【屏蔽】右侧目录信息");},"自动屏蔽左侧和右侧的信息，且将文章居中"),i("允许选择内容","csdn-blog-allowSelectContent",true,void 0)]},{text:"屏蔽",type:"forms",forms:[i("【屏蔽】底部xx技能树","csdn-blog-shieldBottomSkillTree",false),i("【屏蔽】选中文字悬浮栏","csdn-blog-shieldArticleSearchTip",false,void 0,"选中文字弹出的，例如：搜索、评论、笔记")]}]},{text:"评论区",type:"deepMenu",forms:[{text:"",type:"forms",forms:[i("启用","csdn-blog-blockComment",true,void 0,"关闭是屏蔽评论区"),i("优化评论区的位置","csdn-blog-restoreComments",true)]}]},{text:"底部文章",type:"deepMenu",forms:[{text:"",type:"forms",forms:[i("启用","csdn-blog-bottomRecommendArticleEnable",true,void 0,"关闭是屏蔽底部文章"),i("标识CSDN下载","csdn-blog-identityCSDNDownload",true,void 0,"使用红框标识"),i("移除资源下载的文章","csdn-blog-removeResourceDownloadArticle",false,void 0,"download.csdn.net<br>www.iteye.com<br>edu.csdn.net")]}]}]}]}]},{text:"",type:"forms",forms:[{text:"全局布局屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[i("【屏蔽】顶部工具栏","csdn-blog-shieldTopToolbar",false)]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[i("拦截-复制的小尾巴","csdn-blog-removeClipboardHijacking",true),i("劫持-禁止复制","csdn-blog-unBlockCopy",true,void 0,"允许点击复制按钮进行复制")]}]}]}]},Se={id:"panel-link",title:"链接",isDefault(){return C.isLink()},forms:[{text:"功能",type:"forms",forms:[i("重定向链接","csdn-link-jumpRedirect",true,void 0,"自动跳转至被拦截的Url链接")]}]},ye={id:"panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return C.isHuaWeiCloudBlog()},forms:[{text:"功能",type:"forms",forms:[i("自动展开全文","csdn-hua-wei-cloud-autoExpandContent",true)]},{text:"屏蔽",type:"forms",forms:[i("【屏蔽】云开发者任务挑战活动","csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",true),i("【屏蔽】左侧悬浮按钮","csdn-hua-wei-cloud-shieldLeftFloatingButton",false,function(e,t){t&&alert("开启后将屏蔽【当前阅读量】、【点赞按钮】、【评论按钮】、【分享按钮】");}),i("【屏蔽】右侧栏","csdn-hua-wei-cloud-blockRightColumn",false,function(e,t){t&&alert("开启后将屏蔽【相关产品】-【活动日历】-【运营活动】-【热门标签】");}),i("【屏蔽】底部推荐内容","csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",false),i("【屏蔽】底部更多推荐","csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",false)]}]},Me={id:"panel-wenku",title:"资源",isDefault(){return C.isLink()},forms:[{text:"屏蔽",type:"forms",forms:[i("【屏蔽】资源推荐","csdn-wenku-shieldResourceRecommend",false),i("【屏蔽】右侧用户信息","csdn-wenku-shieldRightUserInfo",false),i("【屏蔽】右侧悬浮工具栏","csdn-wenku-shieldRightToolBar",false)]}]},_e={id:"panel-so",title:"搜索",isDefault(){return C.isSo()},forms:[{text:"C知道-功能",type:"forms",forms:[i("去除水印","csdn-so-cknow-removeMaskCover",true)]}]},Te={id:"m-panel-blog",title:"博客",isDefault(){return C.isBlog()},forms:[{type:"forms",text:"",forms:[{type:"deepMenu",text:"文章",forms:[{text:"",type:"forms",forms:[{type:"deepMenu",text:"顶部工具栏",forms:[{type:"forms",text:"",forms:[i("启用","m-csdn-blog-shieldTopToolbar",false,void 0,"关闭是屏蔽顶部工具栏")]}]},{text:"内容",type:"deepMenu",forms:[{text:"",type:"forms",forms:[i("允许选中文字","m-csdn-blog-allowSelectText",true,void 0,"设置user-select: text;"),i("自动展开","m-csdn-blog-autoExpandContent",true,void 0,"包括内容、代码块"),i("不限制代码块的最大高度","m-csdn-blog-notLimitCodePreMaxHeight",false,void 0,"让代码块的高度直接被撑开")]}]},{text:"评论",type:"deepMenu",forms:[{text:"",type:"forms",forms:[i("启用","m-csdn-blog-comment-enable",true,void 0,"关闭是屏蔽评论区"),i("不限制评论区的最大高度","m-csdn-blog-notLimitCommentMaxHeight",true,void 0,"让评论区高度直接被撑开")]}]},{text:"底部文章",type:"deepMenu",forms:[{text:"",type:"forms",forms:[i("启用","m-csdn-blog-bottomArticleEnable",true,void 0,"关闭是屏蔽底部文章"),i("移除资源下载","m-csdn-blog-removeResourceArticle",false,void 0,"download.csdn.net<br>www.iteye.com<br>edu.csdn.net"),i("重构","m-csdn-blog-refactoringRecommendation",true,void 0,"文章的样式统一"),i("新标签页打开","m-csdn-blog-openNewTab",true,void 0,"新标签页打开文章")]}]},{type:"deepMenu",text:"底部工具栏",forms:[{type:"forms",text:"",forms:[i("启用","m-csdn-blog-bottom-toolbar-enable",false,void 0,"关闭是屏蔽底部工具栏"),i("常驻底部","m-csdn-blog-bottom-toolbar-always-bottom",false,void 0,"开启后底部工具栏不随下滑滚动而隐藏"),i("优化收藏按钮","m-csdn-blog-bottom-toolbar-optimizationCollectButton",false,void 0,"可以自行选择收藏夹")]}]}]}]}]},{type:"forms",text:"",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[i("【屏蔽】广告","m-csdn-blog-removeAds",true,void 0,"包括：登录弹窗、打开APP、ios版本提示等"),i("允许复制","m-csdn-blog-unBlockCopy",true,void 0,"允许点击复制按钮进行复制")]}]}]}]},Be={id:"m-panel-link",title:"链接",isDefault(){return C.isLink()},forms:[{text:"功能",type:"forms",forms:[i("重定向链接","m-csdn-link-jumpRedirect",true,void 0,"自动跳转至被拦截的Url链接")]}]},ke={id:"panel-so",title:"搜索",isDefault(){return C.isSo()},forms:[{text:"C知道-功能",type:"forms",forms:[i("去除水印","m-csdn-so-cknow-removeMaskCover",true)]}]},Re={id:"m-panel-wenku",title:"文库",isDefault(){return C.isWenKu()},forms:[{text:"屏蔽",type:"forms",forms:[i("【屏蔽】底部工具栏","m-csdn-wenku-shieldBottomToolbar",false)]}]},De={id:"m-panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return C.isHuaWeiCloudBlog()},forms:[{text:"功能",type:"forms",forms:[i("自动展开全文","m-csdn-hua-wei-cloud-autoExpandContent",true)]},{text:"屏蔽",type:"forms",forms:[i("【屏蔽】底部加入社区","m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",true)]}]},Ee={id:"m-panel-download",title:"资源",isDefault(){return C.isDownload()},forms:[{text:"功能",type:"forms",forms:[i("自动展开资源介绍","m-csdn-download-automaticallyExpandResourceIntroduction",true,void 0,"屏蔽资源介绍【展开全部】按钮并展开资源介绍")]},{text:"屏蔽",type:"forms",forms:[i("【屏蔽】广告","m-csdn-download-removeAds",true,void 0,"包括：登录弹窗、会员降价等")]}]},q=function(e,t,o,l,s,a){let m=[];typeof l=="function"?m=l():m=l;let h={text:e,type:"select",description:a,attributes:{},props:{},getValue(){return this.props[y].get(t,o)},callback(g,c,d){let u=c;n.info(`选择：${d}`),this.props[y].set(t,u),typeof s=="function"&&s(g,u,d);},data:m};return Reflect.set(h.attributes,O,t),Reflect.set(h.attributes,$,o),Reflect.set(h.props,y,{get(g,c){return r.getValue(g,c)},set(g,c){r.setValue(g,c);}}),h},Ae={id:"component-common",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[q("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,o)=>{n.info("设置当前Qmsg弹出位置"+o);},"Toast显示在页面九宫格的位置"),q("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),i("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},Oe={id:"component-common",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[q("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,o)=>{n.info("设置当前Qmsg弹出位置"+o);},"Toast显示在页面九宫格的位置"),q("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),i("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},R={setting:{get width(){return window.innerWidth<550?"88vw":"550px"},get height(){return window.innerHeight<450?"70vh":"450px"}}},r={$data:{__data:null,__oneSuccessExecMenu:null,__onceExec:null,__listenData:null,get data(){return r.$data.__data==null&&(r.$data.__data=new f.Dictionary),r.$data.__data},get oneSuccessExecMenu(){return r.$data.__oneSuccessExecMenu==null&&(r.$data.__oneSuccessExecMenu=new f.Dictionary),r.$data.__oneSuccessExecMenu},get onceExec(){return r.$data.__onceExec==null&&(r.$data.__onceExec=new f.Dictionary),r.$data.__onceExec},get scriptName(){return H},key:T,attributeKeyName:O,attributeDefaultValueName:$},$listener:{get listenData(){return r.$data.__listenData==null&&(r.$data.__listenData=new f.Dictionary),r.$data.__listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},initExtensionsMenu(){x.top===x.self&&ie.add([{key:"show_pops_panel_setting",text:"⚙ PC端设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showPanel();}},{key:"m_show_pops_panel_setting",text:"⚙ 移动端端设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showMPanel();}},{key:"gotoCSDNCKnow",text:"⚙ 前往C知道",isStoreValue:false,autoReload:false,showText(e){return e},callback(){window.open("https://so.csdn.net/chat","_blank");}}]);},initPanelDefaultValue(){let e=this;function t(s){if(!s.attributes)return;let a={},m=s.attributes[O];m!=null&&(a[m]=s.attributes[$]);let h=s.attributes[we];if(typeof h=="function"){let d=h();if(typeof d=="boolean"&&!d)return}let g=s.attributes[Ce];g&&typeof g=="object"&&Object.assign(a,g);let c=Object.keys(a);if(!c.length){n.warn(["请先配置键",s]);return}c.forEach(d=>{let u=a[d];e.$data.data.has(d)&&n.warn("请检查该key(已存在): "+d),e.$data.data.set(d,u);});}function o(s){for(let a=0;a<s.length;a++){let m=s[a];t(m);let h=m.forms;h&&Array.isArray(h)&&o(h);}}let l=this.getPanelContentConfig().concat(this.getMPanelContentConfig());for(let s=0;s<l.length;s++){let a=l[s];if(!a.forms)continue;let m=a.forms;m&&Array.isArray(m)&&o(m);}},setValue(e,t){let o=k(T,{}),l=o[e];o[e]=t,j(T,o),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,l,t);},getValue(e,t){let l=k(T,{})[e];return l??(this.$data.data.has(e)?this.$data.data.get(e):t)},deleteValue(e){let t=k(T,{}),o=t[e];Reflect.deleteProperty(t,e),j(T,t),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,o,void 0);},addValueChangeListener(e,t,o){let l=Math.random();return this.$listener.listenData.set(e,{id:l,key:e,callback:t}),o&&o.immediate&&t(e,this.getValue(e),this.getValue(e)),l},removeValueChangeListener(e){let t=null;for(const[o,l]of this.$listener.listenData.entries())if(l.id===e){t=o;break}typeof t=="string"?this.$listener.listenData.delete(t):console.warn("没有找到对应的监听器");},triggerMenuValueChange(e,t,o){if(this.$listener.listenData.has(e)){let l=this.$listener.listenData.get(e);if(typeof l.callback=="function"){let s=this.getValue(e),a=s,m=s;typeof t<"u"&&arguments.length>1&&(a=t),typeof o<"u"&&arguments.length>2&&(m=o),l.callback(e,m,a);}}},hasKey(e){let t=k(T,{});return e in t},execMenu(e,t,o=false){if(!(typeof e=="string"||typeof e=="object"&&Array.isArray(e)))throw new TypeError("key 必须是字符串或者字符串数组");let l=[];typeof e=="object"&&Array.isArray(e)?l=[...e]:l.push(e);let s;for(let a=0;a<l.length;a++){const m=l[a];if(!this.$data.data.has(m)){n.warn(`${e} 键不存在`);return}let h=r.getValue(m);if(o&&(h=!h),!h)break;s=h;}s&&t(s);},execMenuOnce(e,t,o,l){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){n.warn(`${e} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(e))return;this.$data.oneSuccessExecMenu.set(e,1);let s=()=>{let c=r.getValue(e);return typeof o=="function"?o(e,c):c},a=[],m=c=>{let d=s(),u=[];if(c instanceof HTMLStyleElement?u=[c]:Array.isArray(c)&&(u=[...c.filter(S=>S!=null&&S instanceof HTMLStyleElement)]),d)a=a.concat(u);else for(let S=0;S<u.length;S++)u[S].remove(),u.splice(S,1),S--;},h=c=>{let d=[];if(c){let u=t(c,m);u instanceof HTMLStyleElement?d=[u]:Array.isArray(u)&&(d=[...u.filter(S=>S!=null&&S instanceof HTMLStyleElement)]);}for(let u=0;u<a.length;u++)a[u].remove(),a.splice(u,1),u--;a=[...d];};this.addValueChangeListener(e,(c,d,u)=>{let S=u;typeof l=="function"&&(S=l(c,u,d)),h(S);});let g=s();g&&h(g);},execInheritMenuOnce(e,t,o,l){let s=this;const a=(m,h)=>{let g=s.getValue(m),c=s.getValue(h);if(typeof l=="function"){let d=l(g,c);if(d!==void 0)return d}return g};this.execMenuOnce(e,o,()=>a(e,t),()=>a(e,t)),this.execMenuOnce(t,()=>{},()=>false,()=>(this.triggerMenuValueChange(e),false));},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(t(),this.$data.onceExec.set(e,1));},showPanel(){W.panel({title:{text:`${H}-PC端设置`,position:"center",html:false,style:""},content:this.getPanelContentConfig(),mask:{enable:true,clickEvent:{toClose:true,toHide:false}},width:R.setting.width,height:R.setting.height,drag:true,only:true});},showMPanel(){W.panel({title:{text:`${H}-移动端设置`,position:"center",html:false,style:""},content:this.getMPanelContentConfig(),mask:{enable:true,clickEvent:{toClose:true,toHide:false}},width:R.setting.width,height:R.setting.height,drag:true,only:true});},getPanelContentConfig(){return [Ae,ve,Se,ye,Me,_e]},getMPanelContentConfig(){return [Oe,Te,Be,De,Re,ke,Ee]}},$e=`/* 底部免费抽xxx奖品广告 */\r
div.siderbar-box,\r
/* 华为开发者联盟加入社区 */\r
div.user-desc.user-desc-fix {\r
  display: none !important;\r
}\r
`,ae={init(){b($e),r.execMenuOnce("csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",()=>this.shieldCloudDeveloperTaskChallengeEvent()),r.execMenuOnce("csdn-hua-wei-cloud-autoExpandContent",()=>this.autoExpandContent()),r.execMenuOnce("csdn-hua-wei-cloud-shieldLeftFloatingButton",()=>this.shieldLeftFloatingButton()),r.execMenuOnce("csdn-hua-wei-cloud-blockRightColumn",()=>this.blockRightColumn()),r.execMenuOnce("csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",()=>this.blockRecommendedContentAtTheBottom()),r.execMenuOnce("csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",()=>this.shieldTheBottomForMoreRecommendations());},autoExpandContent(){return n.info("自动展开全文"),[p.addBlockCSS("div.article-show-more"),b(`
			/* 自动展开全文 */
			.main-content .user-article{
				height: auto !important;
				overflow: auto !important;
			}
			`)]},shieldCloudDeveloperTaskChallengeEvent(){return n.info("屏蔽云开发者任务挑战活动"),p.addBlockCSS(".luck-draw-modal-warp")},shieldLeftFloatingButton(){return n.info("屏蔽左侧悬浮按钮，包括当前阅读量、点赞按钮、评论按钮、分享按钮"),p.addBlockCSS("div.toolbar-wrapper.article-interact-bar")},blockRightColumn(){return n.info("屏蔽右侧栏，包括相关产品-活动日历-运营活动-热门标签"),p.addBlockCSS("div.page-home-right.dp-aside-right")},blockRecommendedContentAtTheBottom(){return n.info("屏蔽底部推荐内容"),p.addBlockCSS("div.recommend-card-box")},shieldTheBottomForMoreRecommendations(){return n.info("屏蔽底部更多推荐"),p.addBlockCSS("div.more-article")}},Ie=`#mainBox main {\r
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
`,Le={init(){r.execMenuOnce("csdn-blog-rightToolbarEnable",()=>this.shieldRightToolbar(),(e,t)=>!t,(e,t)=>!t),r.execMenuOnce("csdn-blog-rightToolbarCreativeCenter",()=>this.shieldCreativeCenter()),r.execMenuOnce("csdn-blog-rightToolbarShowOrSidebar",()=>this.shieldShowOrSidebar()),r.execMenuOnce("csdn-blog-rightToolbarBeginnerGuidance",()=>this.shieldBeginnerGuidance()),r.execMenuOnce("csdn-blog-rightToolbarCustomerService",()=>this.shieldCustomerService()),r.execMenuOnce("csdn-blog-rightToolbarReport",()=>this.shieldReport()),r.execMenuOnce("csdn-blog-rightToolbarBackToTop",()=>this.shieldBackToTop()),this.initRightToolbarOffset(),v.ready(()=>{r.execMenuOnce("csdn-blog-addGotoRecommandButton",()=>{this.addGotoRecommandButton();});});},addGotoRecommandButton(){n.info("【添加】前往评论按钮，在返回顶部的上面");let e=document.createElement("a");e.className="option-box",e.setAttribute("data-type","gorecommand"),e.innerHTML=`
		<img src="https://g.csdnimg.cn/side-toolbar/3.6/images/customer.png" alt="" srcset="">
		<span class="show-txt" style="opacity:100;">前往<br>评论</span>
		`,e.addEventListener("click",function(){let t=document.querySelector("#toolBarBox");if(!t||!t.getClientRects().length){let m=le("#pcCommentBox");if(m&&m.getClientRects().length)t=m;else {n.error("评论区处于隐藏状态");return}}n.info("滚动到评论");let o=t.getBoundingClientRect().top+window.scrollY,l=document.querySelector("#csdn-toolbar"),s=window.getComputedStyle(l),a=l.clientHeight-parseFloat(s.paddingTop)-parseFloat(s.paddingBottom);window.scrollTo({top:o-a-8,left:0,behavior:"smooth"});}),f.waitNode(".csdn-side-toolbar").then(()=>{let t=document.querySelector(".csdn-side-toolbar a:nth-last-child(2)");t.parentElement.insertBefore(e,t.nextSibling);});},initRightToolbarOffset(){n.info("初始化右侧工具栏的偏移（top、right）"),b(`
        .csdn-side-toolbar{
          left: unset !important;
        }
        `),f.waitNode(".csdn-side-toolbar").then(e=>{v.css(e,{top:parseInt(r.getValue("csdn-blog-rightToolbarTopOffset"))+"px",right:parseInt(r.getValue("csdn-blog-rightToolbarRightOffset"))+"px"});});},shieldRightToolbar(){return n.info("屏蔽右侧工具栏"),p.addBlockCSS("div.csdn-side-toolbar")},shieldCreativeCenter(){return n.info("【屏蔽】创作中心"),p.addBlockCSS(".csdn-side-toolbar .sidetool-writeguide-box")},shieldShowOrSidebar(){return n.info("【屏蔽】显示/隐藏侧栏"),p.addBlockCSS(".csdn-side-toolbar a.sidecolumn")},shieldBeginnerGuidance(){return n.info("【屏蔽】新手引导"),p.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="guide"]')},shieldCustomerService(){return n.info("【屏蔽】客服"),p.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="cs"]')},shieldReport(){return n.info("【屏蔽】举报"),p.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="report"]')},shieldBackToTop(){return n.info("【屏蔽】返回顶部"),p.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="gotop"]')}},Ne={init(){Le.init(),r.execMenuOnce("csdn-blog-articleCenter",()=>this.articleCenter()),r.execMenuOnce("csdn-blog-shieldLoginDialog",()=>this.shieldLoginDialog()),r.execMenuOnce("csdn-blog-autoExpandContent",()=>this.autoExpandContent()),r.execMenuOnce("csdn-blog-autoExpandCodeContent",()=>this.autoExpandCodeContent()),r.execMenuOnce("csdn-blog-blockComment",()=>this.blockComment(),(e,t)=>!t,(e,t)=>!t),r.execMenuOnce("csdn-blog-bottomRecommendArticleEnable",()=>this.shieldBottomRecommendArticle(),(e,t)=>!t,(e,t)=>!t),r.execMenuOnce("csdn-blog-shieldBottomSkillTree",()=>this.shieldBottomSkillTree()),r.execMenuOnce("csdn-blog-shieldBottomFloatingToolbar",()=>this.shieldBottomFloatingToolbar()),r.execMenuOnce("csdn-blog-shieldLeftBlogContainerAside",()=>this.shieldLeftBlogContainerAside()),r.execMenuOnce("csdn-blog-shieldRightDirectoryInformation",()=>this.shieldRightDirectoryInformation()),r.execMenuOnce("csdn-blog-shieldArticleSearchTip",()=>this.shieldArticleSearchTip()),r.execMenuOnce("csdn-blog-allowSelectContent",()=>this.allowSelectContent()),v.ready(()=>{r.execMenuOnce("csdn-blog-identityCSDNDownload",()=>{this.identityCSDNDownload();}),r.execMenuOnce("csdn-blog-clickPreCodeAutomatically",()=>{this.clickPreCodeAutomatically();}),r.execMenuOnce("csdn-blog-restoreComments",()=>{this.restoreComments();});});},clickPreCodeAutomatically(){n.info("点击代码块自动展开"),document.addEventListener("click",function(e){var o;let t=e.target;t.localName==="pre"&&(t.style.setProperty("height","auto"),(o=t.querySelector(".hide-preCode-box"))==null||o.remove());});},restoreComments(){n.info("恢复评论到正确位置-第一条评论"),f.waitNode(".first-recommend-box").then(e=>{let t=document.querySelector(".recommend-box.insert-baidu-box.recommend-box-style");t.insertBefore(e,t.firstChild);}),n.info("恢复评论到正确位置-第二条评论"),f.waitNode(".second-recommend-box").then(e=>{let t=document.querySelector(".recommend-box.insert-baidu-box.recommend-box-style");t.insertBefore(e,t.firstChild);});},identityCSDNDownload(){n.info("标识CSDN下载的链接"),document.querySelectorAll(".recommend-item-box[data-url*='https://download.csdn.net/']").forEach(e=>{r.getValue("csdn-blog-removeResourceDownloadArticle")?e.remove():e.querySelector(".content-box").style.setProperty("border","2px solid red");});},articleCenter(){return n.info("全文居中"),b(Ie)},shieldLoginDialog(){return n.info("屏蔽登录弹窗"),p.addBlockCSS(".passport-login-container")},autoExpandCodeContent(){return n.info("自动展开代码块"),[p.addBlockCSS("pre.set-code-hide .hide-preCode-box"),b(`
			pre.set-code-hide{
				height: auto !important;
			}
			/* 自动展开代码块 */
			.comment-list-box,
			main div.blog-content-box pre {
				max-height: none !important;
			}
        `)]},autoExpandContent(){return n.info("自动展开全文"),b(`
		/* 自动展开全文 */
		#article_content,
		.user-article.user-article-hide {
			height: auto !important;
			overflow: auto !important;
		}
        `)},blockComment(){return n.info("屏蔽评论区"),p.addBlockCSS("#pcCommentBox")},shieldBottomRecommendArticle(){return n.info("屏蔽底部推荐文章"),p.addBlockCSS("main > div.recommend-box")},shieldBottomSkillTree(){return n.info("屏蔽底部xx技能树"),p.addBlockCSS("#treeSkill")},shieldBottomFloatingToolbar(){return n.info("屏蔽底部悬浮工具栏"),p.addBlockCSS("#toolBarBox")},shieldLeftBlogContainerAside(){return n.info("【屏蔽】左侧博客信息"),p.addBlockCSS("aside.blog_container_aside")},shieldRightDirectoryInformation(){return n.info("【屏蔽】右侧目录信息"),p.addBlockCSS("#rightAsideConcision","#rightAside")},shieldArticleSearchTip(){return n.info("屏蔽文章内的选中搜索悬浮提示"),p.addBlockCSS("#articleSearchTip")},allowSelectContent(){return n.info("允许选择内容"),b(`
		#content_views,
		#content_views pre,
		#content_views pre code {
			user-select: text !important;
		}
		`)}},Ve=`#chatgpt-article-detail\r
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
`,Ue=`/* wenku顶部横幅 */\r
#app > div > div.main.pb-32 > div > div.top-bar,\r
/* 底部展开全文 */\r
#chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid > div.open {\r
  display: none !important;\r
}`,Pe={init(){b(Ve),b(Ue),r.execMenuOnce("csdn-wenku-shieldResourceRecommend",()=>this.shieldResourceRecommend()),r.execMenuOnce("csdn-wenku-shieldRightUserInfo",()=>this.shieldRightUserInfo()),r.execMenuOnce("csdn-wenku-shieldRightToolBar",()=>this.shieldRightToolBar());},shieldResourceRecommend(){return n.info("【屏蔽】资源推荐"),p.addBlockCSS("#recommend")},shieldRightUserInfo(){return n.info("【屏蔽】右侧用户信息"),p.addBlockCSS(".layout-right")},shieldRightToolBar(){return n.info("【屏蔽】右侧悬浮工具栏"),p.addBlockCSS(".csdn-side-toolbar")}},se={init(){r.execMenuOnce("csdn-link-jumpRedirect",()=>{this.jumpRedirect();});},jumpRedirect(){try{let e=new URLSearchParams(window.location.search);const t="target";if(e.has(t)){let o=e.get(t),l=decodeURIComponent(o);n.success(`跳转链接：${l}`),window.location.href=l;}else n.error("解析跳转的链接失败，原因：搜索参数中没有target参数");}catch(e){w.error("跳转链接失败："+e.message);}}},Ge=`.ecommend-item-box.recommend-recommend-box,\r
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
.csdn-reapck-select {\r
	display: none !important;\r
}\r
`,je=`/*.blog_container_aside,\r
#nav {\r
	margin-left: -45px;\r
}\r
.recommend-right.align-items-stretch.clearfix,\r
.dl_right_fixed {\r
	margin-left: 45px;\r
}*/\r
`,ce={init(){this.addCSS(),r.execMenuOnce("csdn-blog-shieldTopToolbar",()=>this.shieldTopToolbar()),v.ready(()=>{r.execMenuOnce("csdn-blog-removeClipboardHijacking",()=>{this.removeClipboardHijacking();}),r.execMenuOnce("csdn-blog-unBlockCopy",()=>{this.unBlockCopy();});});},addCSS(){return n.info("添加屏蔽CSS和功能CSS"),[b(Ge),b(je)]},removeClipboardHijacking(){n.info("去除剪贴板劫持");let e=document.querySelector(".article-copyright");e&&e.remove(),x.articleType&&(x.articleType=0),x.csdn&&x.csdn.copyright&&x.csdn.copyright.textData&&(x.csdn.copyright.textData=""),x.csdn&&x.csdn.copyright&&x.csdn.copyright.htmlData&&(x.csdn.copyright.htmlData="");},unBlockCopy(){n.info("取消禁止复制"),v.on(document,"click",function(t){let o=t.target,l=o.parentElement;if(!o.classList.contains("hljs-button"))return;let s=l.querySelector("code");s=s||l,f.preventEvent(t);let a=s.innerText;n.info("点击复制按钮复制内容："+(a.length>8?a.substring(0,8)+"...":a)),f.setClip(a),o.setAttribute("data-title","复制成功");},{capture:true});let e=new f.LockFunction(function(t){let o=t.target;if(o.localName!=="pre")return;let l=o.querySelector(".hljs-button");l&&l.setAttribute("data-title","复制");});v.on(document,["mouseenter","mouseleave"],function(t){e.run(t);},{capture:true}),f.waitNode("#content_views").then(t=>{var o;x.$&&((o=x.$("#content_views"))==null||o.unbind("copy")),v.on(t,"copy",function(l){f.preventEvent(l);let s=x.getSelection(),a=s==null?void 0:s.toString();return n.info("Ctrl+C复制内容："+(a.length>8?a.substring(0,8)+"...":a)),f.setClip(a),false},{capture:true});}),f.waitNode(".hljs-button").then(()=>{setTimeout(()=>{be(".hljs-button").forEach(t=>{t.removeAttribute("onclick"),t.removeAttribute("data-report-click"),t.setAttribute("data-title","复制");});},250);});},shieldTopToolbar(){return n.info("屏蔽顶部Toolbar"),p.addBlockCSS("#toolbarBox","#csdn-toolbar")}},X={init(){C.isLink()?(n.info("Router: 中转链接"),se.init()):C.isHuaWeiCloudBlog()?(n.info("Router: 华为云联盟"),ae.init()):C.isBlog()?(n.info("Router: 博客"),ce.init(),C.isBlogArticle()&&(n.info("Router: 帖子"),Ne.init())):C.isWenKu()?(n.info("Router: 文库"),Pe.init()):n.error("暂未适配，请反馈开发者："+globalThis.location.href);}},qe={init(){r.execMenuOnce("m-csdn-link-jumpRedirect",()=>{se.jumpRedirect();});}},He=`/* 右下角的 免费赢华为平板xxxx */\r
.org-main-content .siderbar-box {\r
  display: none !important;\r
}\r
`,Fe={init(){b(He),r.execMenuOnce("m-csdn-hua-wei-cloud-autoExpandContent",()=>ae.autoExpandContent()),r.execMenuOnce("m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",()=>this.blockBottomJoinTheCommunity());},blockBottomJoinTheCommunity(){return n.info("【屏蔽】底部加入社区"),p.addBlockCSS(".user-desc")}},U={isSuccessResponse(e){return e==null?false:(typeof e=="string"&&(e=f.toJSON(e)),(e==null?void 0:e.code)===200)}},P={async folderListWithCheck(e){let t=await E.get("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/folderListWithCheck",{data:{url:e},fetch:true,allowInterceptConfig:false,headers:{"User-Agent":f.getRandomPCUA()}});if(n.info(t),!t.status||!U.isSuccessResponse(t.data.responseText)){n.error("获取收藏夹信息失败，请求异常"),w.error("获取收藏夹信息失败");return}return f.toJSON(t.data.responseText).data.result},async addFavoriteInFolds(e){let t=await E.post("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/addFavoriteInFolds",{fetch:true,data:e,headers:{"Content-Type":"application/json","User-Agent":f.getRandomPCUA()},allowInterceptConfig:false});if(n.info(t),!t.status||!U.isSuccessResponse(t.data.responseText)){n.error("添加收藏失败，请求异常",t),w.error("添加收藏失败，请求异常");return}return  true},async checkFavoriteByUrl(e){debugger;let t=await E.get("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/checkFavoriteByUrl",{data:{url:e},fetch:true,allowInterceptConfig:false,headers:{"User-Agent":f.getRandomPCUA()}});if(n.info(t),!t.status||!U.isSuccessResponse(t.data.responseText)){n.error("检查收藏夹状态失败，请求异常"),w.error("检查收藏夹状态失败，请求异常");return}return f.toJSON(t.data.responseText).data},async createFolder(e){let t=await E.post("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/createFolder",{data:e,fetch:true,headers:{Accept:"application/json, text/javascript, */*; q=0.01","Content-Type":"application/json","User-Agent":f.getRandomPCUA()},allowInterceptConfig:false});if(n.info(t),!t.status||!U.isSuccessResponse(t.data.responseText)){w.error("创建收藏夹失败");return}return f.toJSON(t.data.responseText).data}},We={init(){r.execMenuOnce("m-csdn-blog-shieldTopToolbar",()=>this.shieldTopToolbar(),(e,t)=>!t,(e,t)=>!t),r.execMenuOnce("m-csdn-blog-notLimitCodePreMaxHeight",()=>this.notLimitCodePreMaxHeight()),r.execMenuOnce("m-csdn-blog-notLimitCommentMaxHeight",()=>this.notLimitCommentMaxHeight()),r.execMenuOnce("m-csdn-blog-allowSelectText",()=>this.allowSelectText()),r.execMenuOnce("m-csdn-blog-autoExpandContent",()=>this.autoExpandContent()),r.execMenuOnce("m-csdn-blog-bottomArticleEnable",()=>this.blockBottomArticle(),(e,t)=>!t,(e,t)=>!t),r.execMenuOnce("m-csdn-blog-comment-enable",()=>this.blockComment(),(e,t)=>!t,(e,t)=>!t),r.execMenuOnce("m-csdn-blog-bottom-toolbar-enable",()=>this.blockBottomToolBar(),(e,t)=>!t,(e,t)=>!t),r.execMenuOnce("m-csdn-blog-bottom-toolbar-always-bottom",()=>this.bottomToolBarAlwaysShow()),v.ready(()=>{r.execMenuOnce("m-csdn-blog-removeAds",()=>this.removeAds()),r.execMenuOnce("m-csdn-blog-refactoringRecommendation",()=>{this.refactoringRecommendation();}),r.execMenuOnce("m-csdn-blog-unBlockCopy",()=>{ce.unBlockCopy();}),r.execMenuOnce("m-csdn-blog-bottom-toolbar-optimizationCollectButton",()=>{this.optimizationCollectButton();});});},shieldTopToolbar(){return n.info("屏蔽顶部Toolbar"),[p.addBlockCSS("#csdn-toolbar"),b(`
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
			`)]},refactoringRecommendation(){function e(){document.querySelectorAll(".container-fluid").forEach(o=>{var d,u;let l="",s="",a="",m="",h=false,g=false;if(o.hasAttribute("data-url")){if(l=o.getAttribute("data-url"),s=(d=o.querySelector(".recommend_title div.left"))==null?void 0:d.innerHTML,!o.querySelector(".text"))return;a=(u=o.querySelector(".text"))==null?void 0:u.innerHTML,o.querySelectorAll(".recommend-img").length&&o.querySelectorAll(".recommend-img").forEach(S=>{m+=S.innerHTML;});}else l=o.querySelector("a[data-type]").getAttribute("href"),s=o.querySelector(".recommend_title div.left").innerHTML,a=o.querySelector(".text").innerHTML;var c=new URL(l);c.host==="download.csdn.net"||c.host==="www.iteye.com"&&c.pathname.match(/^\/resource/gi)?(h=true,s='<div class="component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>'+s):c.origin.match(/edu.csdn.net/gi)&&(g=true,s='<div class="component-box"><a class="csdn-edu-title" href="javascript:;">CSDN学院</a></div>'+s),o.setAttribute("class","GM-csdn-dl"),o.setAttribute("data-url",l),o.innerHTML=`<div class="GM-csdn-title"><div class="left">${s}</div></div><div class="GM-csdn-content">${a}</div><div class="GM-csdn-img">${m}</div>`,o.addEventListener("click",function(){r.getValue("m-csdn-blog-openNewTab")?window.open(l,"_blank"):window.location.href=l;}),(h||g)&&r.getValue("m-csdn-blog-removeResourceArticle")&&o.remove();});}let t=new f.LockFunction(e,50);f.waitNode("#recommend").then(o=>{n.info("重构底部推荐"),t.run(),f.mutationObserver(o,{callback:()=>{t.run();},config:{childList:true,subtree:true,attributes:true}});});},blockBottomArticle(){return n.info("屏蔽底部文章"),p.addBlockCSS("#recommend")},blockComment(){return n.info("屏蔽评论"),p.addBlockCSS("#comment")},removeAds(){return n.info("去除广告"),[p.waitRemove(".passport-login-container"),p.waitRemove(".btn_open_app_prompt_box.detail-open-removed"),p.waitRemove(".add-firstAd"),p.waitRemove("div.feed-Sign-weixin"),p.waitRemove("div.ios-shadowbox")]},notLimitCodePreMaxHeight(){return n.info("不限制代码块最大高度"),b(`
        pre{
            max-height: unset !important;
        }
        `)},notLimitCommentMaxHeight(){return n.info("不限制评论区最大高度"),b(`
        #comment{
          max-height: none !important;
        }
      `)},allowSelectText(){return n.info("允许选择文字"),b(`
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
        `)},autoExpandContent(){return n.info("自动展开内容"),b(`
        #content_views pre.set-code-hide,
        .article_content{
          height: 100% !important;
          overflow: auto !important;
        }
        `)},blockBottomToolBar(){return n.info("屏蔽底部工具栏"),p.addBlockCSS("#operate")},bottomToolBarAlwaysShow(){return n.info("底部工具栏常驻"),b(`
			/* 底部工具栏 */
			#operate {
				bottom: 0 !important;
			}
			`)},optimizationCollectButton(){n.info("优化收藏按钮"),f.waitNode("#operate .collect-btn",1e4).then(e=>{e&&v.on(e,"click",async t=>{f.preventEvent(t);let o=e.querySelector(".collect"),l=e.querySelector(".uncollect"),s=await P.folderListWithCheck(window.location.origin+window.location.pathname);if(!s)return;let a=[];s.forEach(c=>{c.IsFavorite&&a.push(c.ID);});let m=c=>{let d=c.ID,u=v.createElement("li",{className:"csdn-collection-item",innerHTML:`
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
								`},{"data-is-collect":c.IsFavorite});u.querySelector(".title-m");let S=u.querySelector(".csdn-collection-item_length");u.querySelector(".csdn-collection-controls");let I=u.querySelector(".collect-btn");return v.on(I,"click",async et=>{let D=x.articleDetailUrl;D==null&&(D=window.location.origin+window.location.pathname);let z=x.articleId;if(z==null){n.error("获取文章ID失败"),w.error("获取文章ID失败");return}let K=x.username;if(K==null){n.error("获取文章作者失败"),w.error("获取文章作者失败");return}let L=x.articleTitle;if(L==null&&(L=document.title.replace(/-CSDN博客$/,"")),L==null){n.error("获取文章标题失败"),w.error("获取文章标题失败");return}let N=x.articleDesc;if(N==null){let M=le("meta[name='description']");M&&(N=M.getAttribute("content"));}if(N==null){n.error("获取文章描述失败"),w.error("获取文章描述失败");return}let V=[...a],J=w.loading("处理中...");try{let M=await P.checkFavoriteByUrl(D);if(M==null)return;n.info(d,M);let Y=!M[d];if(Y?(n.info("添加收藏"),V.push(d)):(n.info("取消收藏"),V.splice(V.indexOf(d),1)),!await P.addFavoriteInFolds({author:K,url:D,source:"blog",sourceId:z,title:L,description:N,fromType:"PC",username:c.Username,folderIdList:V}))return;let _=await P.checkFavoriteByUrl(D);if(_==null)return;n.info(d,_),u.setAttribute("data-is-collect",(!!_[d]).toString()),Y?_[d]?(n.success("收藏成功"),w.success("收藏成功"),v.text(I,"已收藏"),a.includes(d)||a.push(d),c.FavoriteNum++):(n.error("收藏失败",_,d),w.error("收藏失败")):_[d]?(n.error("取消收藏失败",_,d),w.error("取消收藏失败")):(n.success("取消收藏成功"),w.success("取消收藏成功"),v.text(I,"收藏"),a.includes(d)&&a.splice(a.indexOf(d),1),c.FavoriteNum--),v.text(S,`${c.FavoriteNum}条内容`),Object.values(_).find(ue=>ue)?(v.show(o,!1),v.hide(l,!1)):(v.show(l,!1),v.hide(o,!1)),J.close();}catch(M){n.error(M);}finally{J.close();}}),u},g=W.alert({title:{text:"添加收藏夹",position:"center"},content:{text:`
									<ul class="csdn-collection-items"></ul>
								`,html:true},btn:{ok:{enable:false}},width:R.setting.width,height:R.setting.height,drag:true,mask:{enable:true},style:`
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
							`}).$shadowRoot.querySelector(".csdn-collection-items");s.forEach(c=>{let d=m(c);g.appendChild(d);});},{capture:true});});}},ze=`/* 右下角的买一年送3个月的广告图标 */\r
.blind_box {\r
  display: none !important;\r
}\r
`,Ke={init(){b(ze),r.execMenuOnce("m-csdn-wenku-shieldBottomToolbar",()=>this.shieldBottomToolbar());},shieldBottomToolbar(){return n.info("【屏蔽】底部工具栏"),p.addBlockCSS(".page-container > div.btn")}},Je=`/* 右下角悬浮图标 买1年送3个月 */\r
.page-container .blind_box,\r
/* 底部工具栏右边的 开会员按钮（低至xx元/次） */\r
.page-container .btn .ml-12,\r
/* 登录弹窗 */\r
.passport-login-container,\r
/* 通用广告className匹配 */\r
.ads {\r
	display: none !important;\r
}\r
`,Ye={init(){r.execMenuOnce("m-csdn-download-removeAds",()=>b(Je)),r.execMenuOnce("m-csdn-download-automaticallyExpandResourceIntroduction",()=>this.automaticallyExpandResourceIntroduction());},automaticallyExpandResourceIntroduction(){return n.info("自动展开资源介绍"),[p.addBlockCSS("label.unfold-font"),b(`
			.resource-desc{
				max-height: unset !important;
				overflow: unset !important;
			}
			`)]}},Ze=`.view_comment_box,\r
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
`,Qe=`#mainBox {\r
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
`,Xe={init(){this.addCSS();},addCSS(){return [b(Ze),b(Qe)]}},ee={init(){C.isLink()?(n.info("Router: 中转链接"),qe.init()):C.isHuaWeiCloudBlog()?(n.info("Router: 华为云联盟"),Fe.init()):C.isBlog()?(n.info("Router: 博客"),Xe.init(),C.isBlogArticle()&&(n.info("Router: 文章"),We.init())):C.isWenKu()?(n.info("Router: 文库"),Ke.init()):C.isDownload()?(n.info("Router: 资源下载"),Ye.init()):n.error("暂未适配，请反馈开发者："+globalThis.location.href);}};r.init();let de=f.isPhone(),A="change_env_set",B=k(A);ie.add({key:A,text:`⚙ 自动: ${de?"移动端":"PC端"}`,autoReload:false,isStoreValue:false,showText(e){return B==null?e:e+` 手动: ${B==1?"移动端":B==2?"PC端":"未知"}`},callback:()=>{let e=[0,1,2],t=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!t)return;let o=parseInt(t);if(isNaN(o)){w.error("输入的不是规范的数字");return}if(!e.includes(o)){w.error("输入的值必须是0或1或2");return}o==0?oe(A):j(A,o);}});B!=null?(n.info(`手动判定为${B===1?"移动端":"PC端"}`),B==1?ee.init():B==2?X.init():(w.error("意外，手动判定的值不在范围内"),oe(A))):de?(n.info("自动判定为移动端"),ee.init()):(n.info("自动判定为PC端"),X.init());

})(Qmsg, DOMUtils, Utils, pops);