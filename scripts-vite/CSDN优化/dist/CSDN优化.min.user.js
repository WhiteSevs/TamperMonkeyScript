// ==UserScript==
// @name         CSDN优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.11.6
// @author       WhiteSevs
// @description  支持PC和手机端、屏蔽广告、优化浏览体验、重定向拦截的Url、自动展开全文、自动展开代码块、全文居中、允许复制内容、去除复制内容的小尾巴、自定义屏蔽元素等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.csdn.net/*
// @require      https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.4.7/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.4.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.8.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.5/dist/index.umd.js
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

(function (S, Y, L, P) {
	'use strict';

	var H=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,_=typeof GM_getValue<"u"?GM_getValue:void 0,D=typeof GM_info<"u"?GM_info:void 0,J=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,E=typeof GM_setValue<"u"?GM_setValue:void 0,Z=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Q=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,x=typeof unsafeWindow<"u"?unsafeWindow:void 0,X=window;const ee="CSDN优化",p=L.noConflict(),v=Y.noConflict(),$=P,o=new p.Log(D,x.console||X.console);var G;const O=((G=D==null?void 0:D.script)==null?void 0:G.name)||ee,U=!1;o.config({debug:U,logMaxCount:1e3,autoClearConsole:!0,tag:!0});S.config(Object.defineProperties({html:!0,autoClose:!0,showClose:!1},{position:{get(){return r.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return r.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return r.getValue("qmsg-config-showreverse",!0)}},zIndex:{get(){let e=L.getMaxZIndex(),t=P.config.InstanceUtils.getPopsMaxZIndex(e).zIndex;return L.getMaxValue(e,t)+100}}}));const j=new p.GM_Menu({GM_getValue:_,GM_setValue:E,GM_registerMenuCommand:J,GM_unregisterMenuCommand:Z}),q=new p.Httpx(Q);q.interceptors.response.use(void 0,e=>(o.error(["拦截器-请求错误",e]),e.type==="onabort"?S.warning("请求取消"):e.type==="onerror"?S.error("请求异常"):e.type==="ontimeout"?S.error("请求超时"):S.error("其它错误"),e));q.config({logDetails:U});x.Object.defineProperty,x.Function.prototype.apply,x.Function.prototype.call,x.Element.prototype.appendChild,x.setTimeout;const g=p.addStyle.bind(p),te=document.querySelector.bind(document);document.querySelectorAll.bind(document);const y="GM_Panel",ne="data-init",B="data-key",k="data-default-value",oe="data-init-more-value",b={isHuaWeiCloudBlog(){return !!/huaweicloud.csdn.net/i.test(window.location.origin)},isBlog(){return !!/blog.csdn.net/i.test(window.location.origin)},isWenKu(){return !!/wenku.csdn.net/i.test(window.location.origin)},isLink(){return window.location.hostname==="link.csdn.net"},isSo(){return window.location.hostname==="so.csdn.net"},isSoCKnow(){return this.isSo()&&(window.location.pathname.startsWith("/chat")||window.location.pathname.startsWith("/so/ai"))},isDownload(){return window.location.hostname==="download.csdn.net"}},V=function(e,t,n,l,a,s,c,u,C){let m={text:e,type:"slider",description:u,attributes:{},getValue(){return r.getValue(t,n)},getToolTipContent(f){return typeof c=="function"?c(f):`${f}`},callback(f,h){typeof s=="function"&&s(f,h)||r.setValue(t,h);},min:l,max:a,step:C};return m.attributes&&(m.attributes[B]=t,m.attributes[k]=n),m},i=function(e,t,n,l,a){let s={text:e,type:"switch",description:a,attributes:{},getValue(){return !!r.getValue(t,n)},callback(c,u){o.success(`${u?"开启":"关闭"} ${e}`),!(typeof l=="function"&&l(c,u))&&r.setValue(t,!!u);},afterAddToUListCallBack:void 0};return s.attributes&&(s.attributes[B]=t,s.attributes[k]=!!n),s},re={id:"panel-blog",title:"博客",isDefault(){return b.isBlog()},forms:[{text:"",type:"forms",forms:[{text:"全局屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[i("【屏蔽】登录弹窗","csdn-blog-shieldLoginDialog",!0),i("【屏蔽】左侧博客信息","csdn-blog-shieldLeftBlogContainerAside",!1),i("【屏蔽】右侧目录信息","csdn-blog-shieldRightDirectoryInformation",!1),i("【屏蔽】顶部工具栏","csdn-blog-shieldTopToolbar",!1),i("【屏蔽】底部的悬浮工具栏","csdn-blog-shieldBottomFloatingToolbar",!1)]}]},{text:"右侧悬浮工具栏",type:"deepMenu",forms:[{text:"功能",type:"forms",forms:[i("启用","csdn-blog-rightToolbarEnable",!0,void 0,"创作中心，隐藏/显示侧栏，新手引导，客服、举报..."),i("【添加按钮】前往评论","csdn-blog-addGotoRecommandButton",!0,void 0,"在悬浮工具栏最后面添加"),V("right偏移","csdn-blog-rightToolbarRightOffset",90,0,document.documentElement.clientWidth,(e,t)=>{let n=document.querySelector(".csdn-side-toolbar");v.css(n,{right:t+"px"});},e=>`当前：${e}px，默认：90px`),V("top偏移","csdn-blog-rightToolbarTopOffset",140,0,document.documentElement.clientHeight,(e,t)=>{let n=document.querySelector(".csdn-side-toolbar");v.css(n,{top:t+"px"});},e=>`当前：${e}px，默认：90px`)]},{text:"屏蔽",type:"forms",forms:[i("【屏蔽】创作中心","csdn-blog-rightToolbarCreativeCenter",!1),i("【屏蔽】显示/隐藏侧栏","csdn-blog-rightToolbarShowOrSidebar",!1),i("【屏蔽】新手引导","csdn-blog-rightToolbarBeginnerGuidance",!1),i("【屏蔽】客服","csdn-blog-rightToolbarCustomerService",!1),i("【屏蔽】举报","csdn-blog-rightToolbarReport",!1),i("【屏蔽】返回顶部","csdn-blog-rightToolbarBackToTop",!1)]}]},{text:"内容",type:"deepMenu",forms:[{text:"功能",type:"forms",forms:[i("点击代码块自动展开","csdn-blog-clickPreCodeAutomatically",!0,void 0,"当鼠标点击代码块区域时，将自动展开内容"),i("自动展开代码块","csdn-blog-autoExpandCodeContent",!0,void 0,"懒人操作，免手动点击展开"),i("自动展开内容","csdn-blog-autoExpandContent",!0,void 0,"懒人操作，免手动点击展开"),i("全文居中","csdn-blog-articleCenter",!0,function(e,t){t&&alert("为了更好的呈现效果，请开启功能：【屏蔽】左侧博客信息、【屏蔽】右侧目录信息");},"自动屏蔽左侧和右侧的信息，且将文章居中"),i("允许选择内容","csdn-blog-allowSelectContent",!0,void 0)]},{text:"屏蔽",type:"forms",forms:[i("【屏蔽】底部xx技能树","csdn-blog-shieldBottomSkillTree",!1),i("【屏蔽】选中文字悬浮栏","csdn-blog-shieldArticleSearchTip",!1,void 0,"选中文字弹出的，例如：搜索、评论、笔记")]}]},{text:"评论区",type:"deepMenu",forms:[{text:"",type:"forms",forms:[i("启用","csdn-blog-blockComment",!0,void 0,"关闭是屏蔽评论区"),i("优化评论区的位置","csdn-blog-restoreComments",!0)]}]},{text:"底部文章",type:"deepMenu",forms:[{text:"",type:"forms",forms:[i("启用","csdn-blog-bottomRecommendArticleEnable",!0,void 0,"关闭是屏蔽底部文章"),i("标识CSDN下载","csdn-blog-identityCSDNDownload",!0,void 0,"使用红框标识"),i("移除资源下载的文章","csdn-blog-removeResourceDownloadArticle",!1,void 0,"download.csdn.net<br>www.iteye.com<br>edu.csdn.net")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[i("拦截-复制的小尾巴","csdn-blog-removeClipboardHijacking",!0),i("劫持-禁止复制","csdn-blog-unBlockCopy",!0,void 0,"允许点击复制按钮进行复制")]}]}]}]},ie={id:"panel-link",title:"链接",isDefault(){return b.isLink()},forms:[{text:"功能",type:"forms",forms:[i("重定向链接","csdn-link-jumpRedirect",!0,void 0,"自动跳转至被拦截的Url链接")]}]},le={id:"panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return b.isHuaWeiCloudBlog()},forms:[{text:"功能",type:"forms",forms:[i("自动展开全文","csdn-hua-wei-cloud-autoExpandContent",!0)]},{text:"屏蔽",type:"forms",forms:[i("【屏蔽】云开发者任务挑战活动","csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",!0),i("【屏蔽】左侧悬浮按钮","csdn-hua-wei-cloud-shieldLeftFloatingButton",!1,function(e,t){t&&alert("开启后将屏蔽【当前阅读量】、【点赞按钮】、【评论按钮】、【分享按钮】");}),i("【屏蔽】右侧栏","csdn-hua-wei-cloud-blockRightColumn",!1,function(e,t){t&&alert("开启后将屏蔽【相关产品】-【活动日历】-【运营活动】-【热门标签】");}),i("【屏蔽】底部推荐内容","csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",!1),i("【屏蔽】底部更多推荐","csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",!1)]}]},ae={id:"panel-wenku",title:"资源",isDefault(){return b.isLink()},forms:[{text:"屏蔽",type:"forms",forms:[i("【屏蔽】资源推荐","csdn-wenku-shieldResourceRecommend",!1),i("【屏蔽】右侧用户信息","csdn-wenku-shieldRightUserInfo",!1),i("【屏蔽】右侧悬浮工具栏","csdn-wenku-shieldRightToolBar",!1)]}]},se={id:"panel-so",title:"搜索",isDefault(){return b.isSo()},forms:[{text:"C知道-功能",type:"forms",forms:[i("去除水印","csdn-so-cknow-removeMaskCover",!0)]}]},de={id:"m-panel-blog",title:"博客",isDefault(){return b.isBlog()},forms:[{type:"forms",text:"",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[i("【屏蔽】广告","m-csdn-blog-removeAds",!0,void 0,"包括：登录弹窗、打开APP、ios版本提示等"),i("允许复制","m-csdn-blog-unBlockCopy",!0,void 0,"允许点击复制按钮进行复制")]}]}]},{text:"",type:"forms",forms:[{type:"deepMenu",text:"顶部工具栏",forms:[{type:"forms",text:"",forms:[i("启用","m-csdn-blog-shieldTopToolbar",!1,void 0,"关闭是屏蔽顶部工具栏")]}]},{text:"内容",type:"deepMenu",forms:[{text:"",type:"forms",forms:[i("允许选中文字","m-csdn-blog-allowSelectText",!0,void 0,"设置user-select: text;"),i("自动展开","m-csdn-blog-autoExpandContent",!0,void 0,"包括内容、代码块"),i("不限制代码块的最大高度","m-csdn-blog-notLimitCodePreMaxHeight",!1,void 0,"让代码块的高度直接被撑开")]}]},{text:"评论",type:"deepMenu",forms:[{text:"",type:"forms",forms:[i("启用","m-csdn-blog-comment-enable",!0,void 0,"关闭是屏蔽评论区"),i("不限制评论区的最大高度","m-csdn-blog-notLimitCommentMaxHeight",!0,void 0,"让评论区高度直接被撑开")]}]},{text:"底部文章",type:"deepMenu",forms:[{text:"",type:"forms",forms:[i("启用","m-csdn-blog-bottomArticleEnable",!0,void 0,"关闭是屏蔽底部文章"),i("移除资源下载","m-csdn-blog-removeResourceArticle",!1,void 0,"download.csdn.net<br>www.iteye.com<br>edu.csdn.net"),i("重构","m-csdn-blog-refactoringRecommendation",!0,void 0,"文章的样式统一"),i("新标签页打开","m-csdn-blog-openNewTab",!0,void 0,"新标签页打开文章")]}]},{type:"deepMenu",text:"底部工具栏",forms:[{type:"forms",text:"",forms:[i("启用","m-csdn-blog-bottom-toolbar-enable",!1,void 0,"关闭是屏蔽底部工具栏"),i("常驻底部","m-csdn-blog-bottom-toolbar-always-bottom",!1,void 0,"开启后底部工具栏不随下滑滚动而隐藏")]}]}]}]},ce={id:"m-panel-link",title:"链接",isDefault(){return b.isLink()},forms:[{text:"功能",type:"forms",forms:[i("重定向链接","m-csdn-link-jumpRedirect",!0,void 0,"自动跳转至被拦截的Url链接")]}]},ue={id:"panel-so",title:"搜索",isDefault(){return b.isSo()},forms:[{text:"C知道-功能",type:"forms",forms:[i("去除水印","m-csdn-so-cknow-removeMaskCover",!0)]}]},me={id:"m-panel-wenku",title:"文库",isDefault(){return b.isWenKu()},forms:[{text:"屏蔽",type:"forms",forms:[i("【屏蔽】底部工具栏","m-csdn-wenku-shieldBottomToolbar",!1)]}]},fe={id:"m-panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return b.isHuaWeiCloudBlog()},forms:[{text:"功能",type:"forms",forms:[i("自动展开全文","m-csdn-hua-wei-cloud-autoExpandContent",!0)]},{text:"屏蔽",type:"forms",forms:[i("【屏蔽】底部加入社区","m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",!0)]}]},he={id:"m-panel-download",title:"资源",isDefault(){return b.isDownload()},forms:[{text:"功能",type:"forms",forms:[i("自动展开资源介绍","m-csdn-download-automaticallyExpandResourceIntroduction",!0,void 0,"屏蔽资源介绍【展开全部】按钮并展开资源介绍")]},{text:"屏蔽",type:"forms",forms:[i("【屏蔽】广告","m-csdn-download-removeAds",!0,void 0,"包括：登录弹窗、会员降价等")]}]},A=function(e,t,n,l,a,s){let c=[];typeof l=="function"?c=l():c=l;let u={text:e,type:"select",description:s,attributes:{},getValue(){return r.getValue(t,n)},callback(C,m,f){r.setValue(t,m),typeof a=="function"&&a(C,m,f);},data:c};return u.attributes&&(u.attributes[B]=t,u.attributes[k]=n),u},pe={id:"component-common",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[A("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,n)=>{o.info("设置当前Qmsg弹出位置"+n);},"Toast显示在页面九宫格的位置"),A("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),i("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]},ge={id:"component-common",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[A("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,n)=>{o.info("设置当前Qmsg弹出位置"+n);},"Toast显示在页面九宫格的位置"),A("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),i("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]},R={setting:{width:window.innerWidth<550?"88vw":"550px",height:window.innerHeight<450?"70vh":"450px"},settingBig:{width:window.innerWidth<800?"92vw":"800px",height:window.innerHeight<600?"80vh":"600px"},info:{width:("350px"),height:("250px")}},r={$data:{__data:null,__oneSuccessExecMenu:null,__onceExec:null,__listenData:null,get data(){return r.$data.__data==null&&(r.$data.__data=new p.Dictionary),r.$data.__data},get oneSuccessExecMenu(){return r.$data.__oneSuccessExecMenu==null&&(r.$data.__oneSuccessExecMenu=new p.Dictionary),r.$data.__oneSuccessExecMenu},get onceExec(){return r.$data.__onceExec==null&&(r.$data.__onceExec=new p.Dictionary),r.$data.__onceExec},get scriptName(){return O},key:y,attributeKeyName:B,attributeDefaultValueName:k},$listener:{get listenData(){return r.$data.__listenData==null&&(r.$data.__listenData=new p.Dictionary),r.$data.__listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},initExtensionsMenu(){x.top===x.self&&j.add([{key:"show_pops_panel_setting",text:"⚙ PC端设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPanel();}},{key:"m_show_pops_panel_setting",text:"⚙ 移动端端设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showMPanel();}},{key:"gotoCSDNCKnow",text:"⚙ 前往C知道",isStoreValue:!1,autoReload:!1,showText(e){return e},callback(){window.open("https://so.csdn.net/chat","_blank");}}]);},initPanelDefaultValue(){let e=this;function t(a){if(!a.attributes)return;let s={},c=a.attributes[B];c!=null&&(s[c]=a.attributes[k]);let u=a.attributes[ne];if(typeof u=="function"){let f=u();if(typeof f=="boolean"&&!f)return}let C=a.attributes[oe];C&&typeof C=="object"&&Object.assign(s,C);let m=Object.keys(s);if(!m.length){o.warn(["请先配置键",a]);return}m.forEach(f=>{let h=s[f];e.$data.data.has(f)&&o.warn("请检查该key(已存在): "+f),e.$data.data.set(f,h);});}function n(a){for(let s=0;s<a.length;s++){let c=a[s];t(c);let u=c.forms;u&&Array.isArray(u)&&n(u);}}let l=this.getPanelContentConfig().concat(this.getMPanelContentConfig());for(let a=0;a<l.length;a++){let s=l[a];if(!s.forms)continue;let c=s.forms;c&&Array.isArray(c)&&n(c);}},setValue(e,t){let n=_(y,{}),l=n[e];n[e]=t,E(y,n),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,l,t);},getValue(e,t){let l=_(y,{})[e];return l??(this.$data.data.has(e)?this.$data.data.get(e):t)},deleteValue(e){let t=_(y,{}),n=t[e];Reflect.deleteProperty(t,e),E(y,t),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,n,void 0);},addValueChangeListener(e,t,n){let l=Math.random();return this.$listener.listenData.set(e,{id:l,key:e,callback:t}),n&&n.immediate&&t(e,this.getValue(e),this.getValue(e)),l},removeValueChangeListener(e){let t=null;for(const[n,l]of this.$listener.listenData.entries())if(l.id===e){t=n;break}typeof t=="string"?this.$listener.listenData.delete(t):console.warn("没有找到对应的监听器");},triggerMenuValueChange(e,t,n){if(this.$listener.listenData.has(e)){let l=this.$listener.listenData.get(e);if(typeof l.callback=="function"){let a=this.getValue(e),s=a,c=a;typeof t<"u"&&arguments.length>1&&(s=t),typeof n<"u"&&arguments.length>2&&(c=n),l.callback(e,c,s);}}},hasKey(e){let t=_(y,{});return e in t},execMenu(e,t,n=!1){if(!(typeof e=="string"||typeof e=="object"&&Array.isArray(e)))throw new TypeError("key 必须是字符串或者字符串数组");let l=[];typeof e=="object"&&Array.isArray(e)?l=[...e]:l.push(e);let a;for(let s=0;s<l.length;s++){const c=l[s];if(!this.$data.data.has(c)){o.warn(`${e} 键不存在`);return}let u=r.getValue(c);if(n&&(u=!u),!u)break;a=u;}a&&t(a);},execMenuOnce(e,t,n,l){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){o.warn(`${e} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(e))return;this.$data.oneSuccessExecMenu.set(e,1);let a=()=>{let m=r.getValue(e);return typeof n=="function"?n(e,m):m},s=[],c=m=>{let f=a(),h=[];if(m instanceof HTMLStyleElement?h=[m]:Array.isArray(m)&&(h=[...m.filter(w=>w!=null&&w instanceof HTMLStyleElement)]),f)s=s.concat(h);else for(let w=0;w<h.length;w++)h[w].remove(),h.splice(w,1),w--;},u=m=>{let f=[];if(m){let h=t(m,c);h instanceof HTMLStyleElement?f=[h]:Array.isArray(h)&&(f=[...h.filter(w=>w!=null&&w instanceof HTMLStyleElement)]);}for(let h=0;h<s.length;h++)s[h].remove(),s.splice(h,1),h--;s=[...f];};this.addValueChangeListener(e,(m,f,h)=>{let w=h;typeof l=="function"&&(w=l(m,h,f)),u(w);});let C=a();C&&u(C);},execInheritMenuOnce(e,t,n,l){let a=this;const s=(c,u)=>{let C=a.getValue(c),m=a.getValue(u);if(typeof l=="function"){let f=l(C,m);if(f!==void 0)return f}return C};this.execMenuOnce(e,n,()=>s(e,t),()=>s(e,t)),this.execMenuOnce(t,()=>{},()=>!1,()=>(this.triggerMenuValueChange(e),!1));},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(t(),this.$data.onceExec.set(e,1));},showPanel(){$.panel({title:{text:`${O}-PC端设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},width:R.setting.width,height:R.setting.height,drag:!0,only:!0});},showMPanel(){$.panel({title:{text:`${O}-移动端设置`,position:"center",html:!1,style:""},content:this.getMPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},width:R.setting.width,height:R.setting.height,drag:!0,only:!0});},isMobile(){return window.innerWidth<550},getWidth(){return window.innerWidth<550?"92vw":"550px"},getHeight(){return window.innerHeight>450?"80vh":"450px"},getPanelContentConfig(){return [pe,re,ie,le,ae,se]},getMPanelContentConfig(){return [ge,de,ce,fe,me,ue,he]}},xe=`/* 底部免费抽xxx奖品广告 */\r
div.siderbar-box,\r
/* 华为开发者联盟加入社区 */\r
div.user-desc.user-desc-fix {\r
  display: none !important;\r
}\r
`,d={waitRemove(...e){e.forEach(t=>{p.waitNodeList(t).then(n=>{n.forEach(l=>l.remove());});});},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),g(`${t.join(`,
`)}{display: none !important;}`)}},W={init(){g(xe),r.execMenuOnce("csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",()=>this.shieldCloudDeveloperTaskChallengeEvent()),r.execMenuOnce("csdn-hua-wei-cloud-autoExpandContent",()=>this.autoExpandContent()),r.execMenuOnce("csdn-hua-wei-cloud-shieldLeftFloatingButton",()=>this.shieldLeftFloatingButton()),r.execMenuOnce("csdn-hua-wei-cloud-blockRightColumn",()=>this.blockRightColumn()),r.execMenuOnce("csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",()=>this.blockRecommendedContentAtTheBottom()),r.execMenuOnce("csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",()=>this.shieldTheBottomForMoreRecommendations());},autoExpandContent(){return o.info("自动展开全文"),[d.addBlockCSS("div.article-show-more"),g(`
			/* 自动展开全文 */
			.main-content .user-article{
				height: auto !important;
				overflow: auto !important;
			}
			`)]},shieldCloudDeveloperTaskChallengeEvent(){return o.info("屏蔽云开发者任务挑战活动"),d.addBlockCSS(".luck-draw-modal-warp")},shieldLeftFloatingButton(){return o.info("屏蔽左侧悬浮按钮，包括当前阅读量、点赞按钮、评论按钮、分享按钮"),d.addBlockCSS("div.toolbar-wrapper.article-interact-bar")},blockRightColumn(){return o.info("屏蔽右侧栏，包括相关产品-活动日历-运营活动-热门标签"),d.addBlockCSS("div.page-home-right.dp-aside-right")},blockRecommendedContentAtTheBottom(){return o.info("屏蔽底部推荐内容"),d.addBlockCSS("div.recommend-card-box")},shieldTheBottomForMoreRecommendations(){return o.info("屏蔽底部更多推荐"),d.addBlockCSS("div.more-article")}},be=`.ecommend-item-box.recommend-recommend-box,\r
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
`,we=`/*.blog_container_aside,\r
#nav {\r
	margin-left: -45px;\r
}\r
.recommend-right.align-items-stretch.clearfix,\r
.dl_right_fixed {\r
	margin-left: 45px;\r
}*/\r
`,Ce=`#mainBox main {\r
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
`,Se={init(){r.execMenuOnce("csdn-blog-rightToolbarEnable",()=>this.shieldRightToolbar(),(e,t)=>!t,(e,t)=>!t),r.execMenuOnce("csdn-blog-rightToolbarCreativeCenter",()=>this.shieldCreativeCenter()),r.execMenuOnce("csdn-blog-rightToolbarShowOrSidebar",()=>this.shieldShowOrSidebar()),r.execMenuOnce("csdn-blog-rightToolbarBeginnerGuidance",()=>this.shieldBeginnerGuidance()),r.execMenuOnce("csdn-blog-rightToolbarCustomerService",()=>this.shieldCustomerService()),r.execMenuOnce("csdn-blog-rightToolbarReport",()=>this.shieldReport()),r.execMenuOnce("csdn-blog-rightToolbarBackToTop",()=>this.shieldBackToTop()),this.initRightToolbarOffset(),v.ready(()=>{r.execMenuOnce("csdn-blog-addGotoRecommandButton",()=>{this.addGotoRecommandButton();});});},addGotoRecommandButton(){o.info("【添加】前往评论按钮，在返回顶部的上面");let e=document.createElement("a");e.className="option-box",e.setAttribute("data-type","gorecommand"),e.innerHTML='<span class="show-txt" style="display:flex;opacity:100;">前往<br>评论</span>',e.addEventListener("click",function(){let t=document.querySelector("#toolBarBox");if(!t||!t.getClientRects().length){let c=te("#pcCommentBox");if(c&&c.getClientRects().length)t=c;else {o.error("评论区处于隐藏状态");return}}o.info("滚动到评论");let n=t.getBoundingClientRect().top+window.scrollY,l=document.querySelector("#csdn-toolbar"),a=window.getComputedStyle(l),s=l.clientHeight-parseFloat(a.paddingTop)-parseFloat(a.paddingBottom);window.scrollTo({top:n-s-8,left:0,behavior:"smooth"});}),p.waitNode(".csdn-side-toolbar").then(()=>{let t=document.querySelector(".csdn-side-toolbar a:nth-last-child(2)");t.parentElement.insertBefore(e,t.nextSibling);});},initRightToolbarOffset(){o.info("初始化右侧工具栏的偏移（top、right）"),g(`
        .csdn-side-toolbar{
          left: unset !important;
        }
        `),p.waitNode(".csdn-side-toolbar").then(e=>{v.css(e,{top:parseInt(r.getValue("csdn-blog-rightToolbarTopOffset"))+"px",right:parseInt(r.getValue("csdn-blog-rightToolbarRightOffset"))+"px"});});},shieldRightToolbar(){return o.info("屏蔽右侧工具栏"),d.addBlockCSS("div.csdn-side-toolbar")},shieldCreativeCenter(){return o.info("【屏蔽】创作中心"),d.addBlockCSS(".csdn-side-toolbar .sidetool-writeguide-box")},shieldShowOrSidebar(){return o.info("【屏蔽】显示/隐藏侧栏"),d.addBlockCSS(".csdn-side-toolbar a.sidecolumn")},shieldBeginnerGuidance(){return o.info("【屏蔽】新手引导"),d.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="guide"]')},shieldCustomerService(){return o.info("【屏蔽】客服"),d.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="cs"]')},shieldReport(){return o.info("【屏蔽】举报"),d.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="report"]')},shieldBackToTop(){return o.info("【屏蔽】返回顶部"),d.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="gotop"]')}},F={init(){this.addCSS(),Se.init(),r.execMenuOnce("csdn-blog-articleCenter",()=>this.articleCenter()),r.execMenuOnce("csdn-blog-shieldLoginDialog",()=>this.shieldLoginDialog()),r.execMenuOnce("csdn-blog-autoExpandContent",()=>this.autoExpandContent()),r.execMenuOnce("csdn-blog-autoExpandCodeContent",()=>this.autoExpandCodeContent()),r.execMenuOnce("csdn-blog-blockComment",()=>this.blockComment(),(e,t)=>!t,(e,t)=>!t),r.execMenuOnce("csdn-blog-bottomRecommendArticleEnable",()=>this.shieldBottomRecommendArticle(),(e,t)=>!t,(e,t)=>!t),r.execMenuOnce("csdn-blog-shieldBottomSkillTree",()=>this.shieldBottomSkillTree()),r.execMenuOnce("csdn-blog-shieldBottomFloatingToolbar",()=>this.shieldBottomFloatingToolbar()),r.execMenuOnce("csdn-blog-shieldLeftBlogContainerAside",()=>this.shieldLeftBlogContainerAside()),r.execMenuOnce("csdn-blog-shieldRightDirectoryInformation",()=>this.shieldRightDirectoryInformation()),r.execMenuOnce("csdn-blog-shieldTopToolbar",()=>this.shieldTopToolbar()),r.execMenuOnce("csdn-blog-shieldArticleSearchTip",()=>this.shieldArticleSearchTip()),r.execMenuOnce("csdn-blog-allowSelectContent",()=>this.allowSelectContent()),v.ready(()=>{r.execMenuOnce("csdn-blog-removeClipboardHijacking",()=>{this.removeClipboardHijacking();}),r.execMenuOnce("csdn-blog-unBlockCopy",()=>{this.unBlockCopy();}),r.execMenuOnce("csdn-blog-identityCSDNDownload",()=>{this.identityCSDNDownload();}),r.execMenuOnce("csdn-blog-clickPreCodeAutomatically",()=>{this.clickPreCodeAutomatically();}),r.execMenuOnce("csdn-blog-restoreComments",()=>{this.restoreComments();});});},addCSS(){return o.info("添加屏蔽CSS和功能CSS"),[g(be),g(we)]},removeClipboardHijacking(){o.info("去除剪贴板劫持");let e=document.querySelector(".article-copyright");e&&e.remove(),x.articleType&&(x.articleType=0),x.csdn&&x.csdn.copyright&&x.csdn.copyright.textData&&(x.csdn.copyright.textData=""),x.csdn&&x.csdn.copyright&&x.csdn.copyright.htmlData&&(x.csdn.copyright.htmlData="");},unBlockCopy(){o.info("取消禁止复制"),v.on(document,"click",function(t){let n=t.target,l=n.parentElement;if(!n.classList.contains("hljs-button"))return;p.preventEvent(t);let a=(l.innerText||l.textContent||"").toString();o.info("点击复制按钮复制内容："+(a.length>8?a.substring(0,8)+"...":a)),p.setClip(a),n.setAttribute("data-title","复制成功");},{capture:!0});let e=new p.LockFunction(function(t){let n=t.target;if(n.localName!=="pre")return;let l=n.querySelector(".hljs-button");l&&l.setAttribute("data-title","复制");});v.on(document,["mouseenter","mouseleave"],function(t){e.run(t);},{capture:!0}),p.waitNode("#content_views").then(t=>{var n;x.$&&((n=x.$("#content_views"))==null||n.unbind("copy")),v.on(t,"copy",function(l){p.preventEvent(l);let a=x.getSelection(),s=a==null?void 0:a.toString();return o.info("Ctrl+C复制内容："+(s.length>8?s.substring(0,8)+"...":s)),p.setClip(s),!1},{capture:!0});}),p.waitNode(".hljs-button").then(()=>{setTimeout(()=>{document.querySelectorAll(".hljs-button").forEach(t=>{t.removeAttribute("onclick"),t.removeAttribute("data-report-click"),t.setAttribute("data-title","复制");});},250);});},clickPreCodeAutomatically(){o.info("点击代码块自动展开"),document.addEventListener("click",function(e){var n;let t=e.target;t.localName==="pre"&&(t.style.setProperty("height","auto"),(n=t.querySelector(".hide-preCode-box"))==null||n.remove());});},restoreComments(){o.info("恢复评论到正确位置-第一条评论"),p.waitNode(".first-recommend-box").then(e=>{let t=document.querySelector(".recommend-box.insert-baidu-box.recommend-box-style");t.insertBefore(e,t.firstChild);}),o.info("恢复评论到正确位置-第二条评论"),p.waitNode(".second-recommend-box").then(e=>{let t=document.querySelector(".recommend-box.insert-baidu-box.recommend-box-style");t.insertBefore(e,t.firstChild);});},identityCSDNDownload(){o.info("标识CSDN下载的链接"),document.querySelectorAll(".recommend-item-box[data-url*='https://download.csdn.net/']").forEach(e=>{r.getValue("csdn-blog-removeResourceDownloadArticle")?e.remove():e.querySelector(".content-box").style.setProperty("border","2px solid red");});},articleCenter(){return o.info("全文居中"),g(Ce)},shieldLoginDialog(){return o.info("屏蔽登录弹窗"),d.addBlockCSS(".passport-login-container")},autoExpandCodeContent(){return o.info("自动展开代码块"),[d.addBlockCSS("pre.set-code-hide .hide-preCode-box"),g(`
			pre.set-code-hide{
				height: auto !important;
			}
			/* 自动展开代码块 */
			.comment-list-box,
			main div.blog-content-box pre {
				max-height: none !important;
			}
        `)]},autoExpandContent(){return o.info("自动展开全文"),g(`
		/* 自动展开全文 */
		#article_content,
		.user-article.user-article-hide {
			height: auto !important;
			overflow: auto !important;
		}
        `)},blockComment(){return o.info("屏蔽评论区"),d.addBlockCSS("#pcCommentBox")},shieldBottomRecommendArticle(){return o.info("屏蔽底部推荐文章"),d.addBlockCSS("main > div.recommend-box")},shieldBottomSkillTree(){return o.info("屏蔽底部xx技能树"),d.addBlockCSS("#treeSkill")},shieldBottomFloatingToolbar(){return o.info("屏蔽底部悬浮工具栏"),d.addBlockCSS("#toolBarBox")},shieldLeftBlogContainerAside(){return o.info("【屏蔽】左侧博客信息"),d.addBlockCSS("aside.blog_container_aside")},shieldRightDirectoryInformation(){return o.info("【屏蔽】右侧目录信息"),d.addBlockCSS("#rightAsideConcision","#rightAside")},shieldTopToolbar(){return o.info("屏蔽顶部Toolbar"),d.addBlockCSS("#toolbarBox")},shieldArticleSearchTip(){return o.info("屏蔽文章内的选中搜索悬浮提示"),d.addBlockCSS("#articleSearchTip")},allowSelectContent(){return o.info("允许选择内容"),g(`
		#content_views,
		#content_views pre,
		#content_views pre code {
			user-select: text !important;
		}
		`)}},ve=`#chatgpt-article-detail\r
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
`,ye=`/* wenku顶部横幅 */\r
#app > div > div.main.pb-32 > div > div.top-bar,\r
/* 底部展开全文 */\r
#chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid > div.open {\r
  display: none !important;\r
}`,Me={init(){g(ve),g(ye),r.execMenuOnce("csdn-wenku-shieldResourceRecommend",()=>this.shieldResourceRecommend()),r.execMenuOnce("csdn-wenku-shieldRightUserInfo",()=>this.shieldRightUserInfo()),r.execMenuOnce("csdn-wenku-shieldRightToolBar",()=>this.shieldRightToolBar());},shieldResourceRecommend(){return o.info("【屏蔽】资源推荐"),d.addBlockCSS("#recommend")},shieldRightUserInfo(){return o.info("【屏蔽】右侧用户信息"),d.addBlockCSS(".layout-right")},shieldRightToolBar(){return o.info("【屏蔽】右侧悬浮工具栏"),d.addBlockCSS(".csdn-side-toolbar")}},K={init(){r.execMenuOnce("csdn-link-jumpRedirect",()=>{this.jumpRedirect();});},jumpRedirect(){try{let e=new URLSearchParams(window.location.search);const t="target";if(e.has(t)){let n=e.get(t),l=decodeURIComponent(n);o.success(`跳转链接：${l}`),window.location.href=l;}else o.error("解析跳转的链接失败，原因：搜索参数中没有target参数");}catch(e){S.error("跳转链接失败："+e.message);}}},I={init(){b.isLink()?(o.info("Router: 中转链接"),K.init()):b.isHuaWeiCloudBlog()?(o.info("Router: 华为云联盟"),W.init()):b.isBlog()?(o.info("Router: 博客"),F.init()):b.isWenKu()?(o.info("Router: 文库"),Me.init()):o.error("暂未适配，请反馈开发者："+globalThis.location.href);}},_e={init(){r.execMenuOnce("m-csdn-link-jumpRedirect",()=>{K.jumpRedirect();});}},Te=`/* 右下角的 免费赢华为平板xxxx */\r
.org-main-content .siderbar-box {\r
  display: none !important;\r
}\r
`,Be={init(){g(Te),r.execMenuOnce("m-csdn-hua-wei-cloud-autoExpandContent",()=>W.autoExpandContent()),r.execMenuOnce("m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",()=>this.blockBottomJoinTheCommunity());},blockBottomJoinTheCommunity(){return o.info("【屏蔽】底部加入社区"),d.addBlockCSS(".user-desc")}},ke=`.view_comment_box,\r
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
`,Re=`#mainBox {\r
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
`,De={init(){this.addCSS(),r.execMenuOnce("m-csdn-blog-shieldTopToolbar",()=>this.shieldTopToolbar(),(e,t)=>!t,(e,t)=>!t),r.execMenuOnce("m-csdn-blog-notLimitCodePreMaxHeight",()=>this.notLimitCodePreMaxHeight()),r.execMenuOnce("m-csdn-blog-notLimitCommentMaxHeight",()=>this.notLimitCommentMaxHeight()),r.execMenuOnce("m-csdn-blog-allowSelectText",()=>this.allowSelectText()),r.execMenuOnce("m-csdn-blog-autoExpandContent",()=>this.autoExpandContent()),r.execMenuOnce("m-csdn-blog-bottomArticleEnable",()=>this.blockBottomArticle(),(e,t)=>!t,(e,t)=>!t),r.execMenuOnce("m-csdn-blog-comment-enable",()=>this.blockComment(),(e,t)=>!t,(e,t)=>!t),r.execMenuOnce("m-csdn-blog-bottom-toolbar-enable",()=>this.blockBottomToolBar(),(e,t)=>!t,(e,t)=>!t),r.execMenuOnce("m-csdn-blog-bottom-toolbar-always-bottom",()=>this.bottomToolBarAlwaysShow()),v.ready(()=>{r.execMenuOnce("m-csdn-blog-removeAds",()=>this.removeAds()),r.execMenuOnce("m-csdn-blog-refactoringRecommendation",()=>{this.refactoringRecommendation();}),r.execMenuOnce("m-csdn-blog-unBlockCopy",()=>{F.unBlockCopy();});});},addCSS(){g(ke),g(Re);},shieldTopToolbar(){return o.info("屏蔽顶部Toolbar"),[d.addBlockCSS("#csdn-toolbar"),g(`
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
			`)]},refactoringRecommendation(){function e(){o.info("重构底部推荐"),document.querySelectorAll(".container-fluid").forEach(n=>{var f,h;let l="",a="",s="",c="",u=!1,C=!1;if(n.hasAttribute("data-url")){if(l=n.getAttribute("data-url"),a=(f=n.querySelector(".recommend_title div.left"))==null?void 0:f.innerHTML,!n.querySelector(".text"))return;s=(h=n.querySelector(".text"))==null?void 0:h.innerHTML,n.querySelectorAll(".recommend-img").length&&n.querySelectorAll(".recommend-img").forEach(w=>{c+=w.innerHTML;});}else o.info("节点上无data-url"),l=n.querySelector("a[data-type]").getAttribute("href"),a=n.querySelector(".recommend_title div.left").innerHTML,s=n.querySelector(".text").innerHTML;var m=new URL(l);m.host==="download.csdn.net"||m.host==="www.iteye.com"&&m.pathname.match(/^\/resource/gi)?(o.info("该链接为csdn资源下载"),u=!0,a='<div class="component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>'+a):m.origin.match(/edu.csdn.net/gi)&&(C=!0,o.info("该链接为csdn学院下载"),a='<div class="component-box"><a class="csdn-edu-title" href="javascript:;">CSDN学院</a></div>'+a),n.setAttribute("class","GM-csdn-dl"),n.setAttribute("data-url",l),n.innerHTML=`<div class="GM-csdn-title"><div class="left">${a}</div></div><div class="GM-csdn-content">${s}</div><div class="GM-csdn-img">${c}</div>`,n.addEventListener("click",function(){r.getValue("m-csdn-blog-openNewTab")?window.open(l,"_blank"):window.location.href=l;}),(u||C)&&r.getValue("m-csdn-blog-removeResourceArticle")&&n.remove();});}let t=new p.LockFunction(e,50);p.waitNode("#recommend").then(n=>{o.info("重构底部推荐"),t.run(),p.mutationObserver(n,{callback:()=>{t.run();},config:{childList:!0,subtree:!0,attributes:!0}});});},blockBottomArticle(){return o.info("屏蔽底部文章"),d.addBlockCSS("#recommend")},blockComment(){return o.info("屏蔽评论"),d.addBlockCSS("#comment")},removeAds(){o.info("去除广告"),d.waitRemove(".passport-login-container"),d.waitRemove(".btn_open_app_prompt_box.detail-open-removed"),d.waitRemove(".add-firstAd"),d.waitRemove("div.feed-Sign-weixin"),d.waitRemove("div.ios-shadowbox");},notLimitCodePreMaxHeight(){return o.info("不限制代码块最大高度"),g(`
        pre{
            max-height: unset !important;
        }
        `)},notLimitCommentMaxHeight(){return o.info("不限制评论区最大高度"),g(`
        #comment{
          max-height: none !important;
        }
      `)},allowSelectText(){return o.info("允许选择文字"),g(`
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
        `)},autoExpandContent(){return o.info("自动展开内容"),g(`
        #content_views pre.set-code-hide,
        .article_content{
          height: 100% !important;
          overflow: auto !important;
        }
        `)},blockBottomToolBar(){return o.info("屏蔽底部工具栏"),d.addBlockCSS("#operate")},bottomToolBarAlwaysShow(){return o.info("底部工具栏常驻"),g(`
			/* 底部工具栏 */
			#operate {
				bottom: 0 !important;
			}
			`)}},Ee=`/* 右下角的买一年送3个月的广告图标 */\r
.blind_box {\r
  display: none !important;\r
}\r
`,Ae={init(){g(Ee),r.execMenu("m-csdn-wenku-shieldBottomToolbar",()=>{this.shieldBottomToolbar();});},shieldBottomToolbar(){o.info("【屏蔽】底部工具栏"),d.addBlockCSS(".page-container > div.btn");}},Oe=`/* 右下角悬浮图标 买1年送3个月 */\r
.page-container .blind_box,\r
/* 底部工具栏右边的 开会员按钮（低至xx元/次） */\r
.page-container .btn .ml-12,\r
/* 登录弹窗 */\r
.passport-login-container,\r
/* 通用广告className匹配 */\r
.ads {\r
	display: none !important;\r
}\r
`,Le={init(){r.execMenuOnce("m-csdn-download-removeAds",()=>g(Oe)),r.execMenuOnce("m-csdn-download-automaticallyExpandResourceIntroduction",()=>this.automaticallyExpandResourceIntroduction());},automaticallyExpandResourceIntroduction(){return o.info("自动展开资源介绍"),[d.addBlockCSS("label.unfold-font"),g(`
			.resource-desc{
				max-height: unset !important;
				overflow: unset !important;
			}
			`)]}},N={init(){b.isLink()?(o.info("Router: 中转链接"),_e.init()):b.isHuaWeiCloudBlog()?(o.info("Router: 华为云联盟"),Be.init()):b.isBlog()?(o.info("Router: 博客"),De.init()):b.isWenKu()?(o.info("Router: 文库"),Ae.init()):b.isDownload()?(o.info("Router: 资源下载"),Le.init()):o.error("暂未适配，请反馈开发者："+globalThis.location.href);}};r.init();let z=p.isPhone(),T="change_env_set",M=_(T);j.add({key:T,text:`⚙ 自动: ${z?"移动端":"PC端"}`,autoReload:!1,isStoreValue:!1,showText(e){return M==null?e:e+` 手动: ${M==1?"移动端":M==2?"PC端":"未知"}`},callback:()=>{let e=[0,1,2],t=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!t)return;let n=parseInt(t);if(isNaN(n)){S.error("输入的不是规范的数字");return}if(!e.includes(n)){S.error("输入的值必须是0或1或2");return}n==0?H(T):E(T,n);}});M!=null?(o.info(`手动判定为${M===1?"移动端":"PC端"}`),M==1?N.init():M==2?I.init():(S.error("意外，手动判定的值不在范围内"),H(T))):z?(o.info("自动判定为移动端"),N.init()):(o.info("自动判定为PC端"),I.init());

})(Qmsg, DOMUtils, Utils, pops);