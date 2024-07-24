// ==UserScript==
// @name         CSDN优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.7.24
// @author       WhiteSevs
// @description  支持PC和手机端、屏蔽广告、优化浏览体验、重定向拦截的Url、自动展开全文、自动展开代码块、全文居中、允许复制内容、去除复制内容的小尾巴、自定义屏蔽元素等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.csdn.net/*
// @require      https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.1.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.3.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.5.0/dist/index.umd.js
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

(function (S, J, O, I) {
	'use strict';

	var P=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,T=typeof GM_getValue<"u"?GM_getValue:void 0,R=typeof GM_info<"u"?GM_info:void 0,Y=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,D=typeof GM_setValue<"u"?GM_setValue:void 0,Z=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Q=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,f=typeof unsafeWindow<"u"?unsafeWindow:void 0,X=window;const ee="CSDN优化",u=O.noConflict(),C=J.noConflict(),L=I,n=new u.Log(R,f.console||X.console);var G;const A=((G=R==null?void 0:R.script)==null?void 0:G.name)||ee,H=!1;n.config({debug:H,logMaxCount:1e3,autoClearConsole:!0,tag:!0});S.config(Object.defineProperties({html:!0,autoClose:!0,showClose:!1},{position:{get(){return r.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return r.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return r.getValue("qmsg-config-showreverse",!0)}},zIndex:{get(){let e=O.getMaxZIndex(),t=I.config.InstanceUtils.getPopsMaxZIndex(e).zIndex;return O.getMaxValue(e,t)+100}}}));const U=new u.GM_Menu({GM_getValue:T,GM_setValue:D,GM_registerMenuCommand:Y,GM_unregisterMenuCommand:Z}),q=new u.Httpx(Q);q.interceptors.response.use(void 0,e=>(n.error(["拦截器-请求错误",e]),e.type==="onabort"?S.warning("请求取消"):e.type==="onerror"?S.error("请求异常"):e.type==="ontimeout"?S.error("请求超时"):S.error("其它错误"),e));q.config({logDetails:H});f.Object.defineProperty,f.Function.prototype.apply,f.Function.prototype.call,f.Element.prototype.appendChild,f.setTimeout;const h=u.addStyle.bind(u),v="GM_Panel",B="data-key",_="data-default-value",g={isHuaWeiCloudBlog(){return !!/huaweicloud.csdn.net/i.test(window.location.origin)},isBlog(){return !!/blog.csdn.net/i.test(window.location.origin)},isWenKu(){return !!/wenku.csdn.net/i.test(window.location.origin)},isLink(){return window.location.hostname==="link.csdn.net"},isSo(){return window.location.hostname==="so.csdn.net"},isSoCKnow(){return this.isSo()&&(window.location.pathname.startsWith("/chat")||window.location.pathname.startsWith("/so/ai"))},isDownload(){return window.location.hostname==="download.csdn.net"}},N=function(e,t,o,l,a,d,c,m){let b={text:e,type:"slider",description:m,attributes:{},getValue(){return r.getValue(t,o)},getToolTipContent(p){return typeof c=="function"?c(p):`${p}`},callback(p,x){typeof d=="function"&&d(p,x)||r.setValue(t,x);},min:l,max:a};return b.attributes&&(b.attributes[B]=t,b.attributes[_]=o),b},i=function(e,t,o,l,a){let d={text:e,type:"switch",description:a,attributes:{},getValue(){return !!r.getValue(t,o)},callback(c,m){n.success(`${m?"开启":"关闭"} ${e}`),!(typeof l=="function"&&l(c,m))&&r.setValue(t,!!m);},afterAddToUListCallBack:void 0};return d.attributes&&(d.attributes[B]=t,d.attributes[_]=!!o),d},te={id:"panel-blog",title:"博客",isDefault(){return g.isBlog()},forms:[{text:"",type:"forms",forms:[{text:"全局屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[i("【屏蔽】登录弹窗","csdn-blog-shieldLoginDialog",!0),i("【屏蔽】左侧博客信息","csdn-blog-shieldLeftBlogContainerAside",!1),i("【屏蔽】右侧目录信息","csdn-blog-shieldRightDirectoryInformation",!1),i("【屏蔽】顶部工具栏","csdn-blog-shieldTopToolbar",!1),i("【屏蔽】底部的悬浮工具栏","csdn-blog-shieldBottomFloatingToolbar",!1)]}]},{text:"右侧悬浮工具栏",type:"deepMenu",forms:[{text:"功能",type:"forms",forms:[i("启用","csdn-blog-rightToolbarEnable",!0,void 0,"创作中心，隐藏/显示侧栏，新手引导，客服、举报..."),i("【添加按钮】前往评论","csdn-blog-addGotoRecommandButton",!0,void 0,"在悬浮工具栏最后面添加"),N("right偏移","csdn-blog-rightToolbarRightOffset",90,0,document.documentElement.clientWidth,(e,t)=>{let o=document.querySelector(".csdn-side-toolbar");C.css(o,{right:t+"px"});},e=>`当前：${e}px，默认：90px`),N("top偏移","csdn-blog-rightToolbarTopOffset",140,0,document.documentElement.clientHeight,(e,t)=>{let o=document.querySelector(".csdn-side-toolbar");C.css(o,{top:t+"px"});},e=>`当前：${e}px，默认：90px`)]},{text:"屏蔽",type:"forms",forms:[i("【屏蔽】创作中心","csdn-blog-rightToolbarCreativeCenter",!1),i("【屏蔽】显示/隐藏侧栏","csdn-blog-rightToolbarShowOrSidebar",!1),i("【屏蔽】新手引导","csdn-blog-rightToolbarBeginnerGuidance",!1),i("【屏蔽】客服","csdn-blog-rightToolbarCustomerService",!1),i("【屏蔽】举报","csdn-blog-rightToolbarReport",!1),i("【屏蔽】返回顶部","csdn-blog-rightToolbarBackToTop",!1)]}]},{text:"内容",type:"deepMenu",forms:[{text:"功能",type:"forms",forms:[i("点击代码块自动展开","csdn-blog-clickPreCodeAutomatically",!0,void 0,"当鼠标点击代码块区域时，将自动展开内容"),i("自动展开代码块","csdn-blog-autoExpandCodeContent",!0,void 0,"懒人操作，免手动点击展开"),i("自动展开内容","csdn-blog-autoExpandContent",!0,void 0,"懒人操作，免手动点击展开"),i("全文居中","csdn-blog-articleCenter",!0,function(e,t){t&&alert("为了更好的呈现效果，请开启功能：【屏蔽】左侧博客信息、【屏蔽】右侧目录信息");},"自动屏蔽左侧和右侧的信息，且将文章居中"),i("允许选择内容","csdn-blog-allowSelectContent",!0,void 0)]},{text:"屏蔽",type:"forms",forms:[i("【屏蔽】底部xx技能树","csdn-blog-shieldBottomSkillTree",!1),i("【屏蔽】选中文字悬浮栏","csdn-blog-shieldArticleSearchTip",!1,void 0,"选中文字弹出的，例如：搜索、评论、笔记")]}]},{text:"评论区",type:"deepMenu",forms:[{text:"",type:"forms",forms:[i("启用","csdn-blog-blockComment",!0,void 0,"关闭是屏蔽评论区"),i("优化评论区的位置","csdn-blog-restoreComments",!0)]}]},{text:"底部文章",type:"deepMenu",forms:[{text:"",type:"forms",forms:[i("启用","csdn-blog-bottomRecommendArticleEnable",!0,void 0,"关闭是屏蔽底部文章"),i("标识CSDN下载","csdn-blog-identityCSDNDownload",!0,void 0,"使用红框标识"),i("移除资源下载的文章","csdn-blog-removeResourceDownloadArticle",!1,void 0,"移除download.csdn.net、www.iteye.com、edu.csdn.net的文章链接")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[i("拦截-复制的小尾巴","csdn-blog-removeClipboardHijacking",!0),i("劫持-禁止复制","csdn-blog-unBlockCopy",!0,void 0,"允许点击复制按钮进行复制")]}]}]}]},ne={id:"panel-link",title:"链接",isDefault(){return g.isLink()},forms:[{text:"功能",type:"forms",forms:[i("重定向链接","csdn-link-jumpRedirect",!0,void 0,"自动跳转至被拦截的Url链接")]}]},oe={id:"panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return g.isHuaWeiCloudBlog()},forms:[{text:"功能",type:"forms",forms:[i("自动展开全文","csdn-hua-wei-cloud-autoExpandContent",!0)]},{text:"屏蔽",type:"forms",forms:[i("【屏蔽】云开发者任务挑战活动","csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",!0),i("【屏蔽】左侧悬浮按钮","csdn-hua-wei-cloud-shieldLeftFloatingButton",!1,function(e,t){t&&alert("开启后将屏蔽【当前阅读量】、【点赞按钮】、【评论按钮】、【分享按钮】");}),i("【屏蔽】右侧栏","csdn-hua-wei-cloud-blockRightColumn",!1,function(e,t){t&&alert("开启后将屏蔽【相关产品】-【活动日历】-【运营活动】-【热门标签】");}),i("【屏蔽】底部推荐内容","csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",!1),i("【屏蔽】底部更多推荐","csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",!1)]}]},re={id:"panel-wenku",title:"资源",isDefault(){return g.isLink()},forms:[{text:"屏蔽",type:"forms",forms:[i("【屏蔽】资源推荐","csdn-wenku-shieldResourceRecommend",!1),i("【屏蔽】右侧用户信息","csdn-wenku-shieldRightUserInfo",!1),i("【屏蔽】右侧悬浮工具栏","csdn-wenku-shieldRightToolBar",!1)]}]},ie={id:"panel-so",title:"搜索",isDefault(){return g.isSo()},forms:[{text:"C知道-功能",type:"forms",forms:[i("去除水印","csdn-so-cknow-removeMaskCover",!0)]}]},le={id:"m-panel-blog",title:"博客",isDefault(){return g.isBlog()},forms:[{text:"",type:"forms",forms:[{text:"全局屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[i("【屏蔽】广告","m-csdn-blog-removeAds",!0,void 0,"包括：登录弹窗、打开APP、ios版本提示等"),i("【屏蔽】顶部Toolbar","m-csdn-blog-shieldTopToolbar",!1)]}]},{text:"内容",type:"deepMenu",forms:[{text:"",type:"forms",forms:[i("允许选中文字","m-csdn-blog-allowSelectText",!0,void 0,"设置user-select: text;"),i("自动展开","m-csdn-blog-autoExpandContent",!0,void 0,"包括内容、代码块"),i("不限制代码块的最大高度","m-csdn-blog-notLimitCodePreMaxHeight",!1,void 0,"让代码块的高度直接被撑开")]}]},{text:"评论",type:"deepMenu",forms:[{text:"",type:"forms",forms:[i("启用","m-csdn-blog-comment-enable",!0,void 0,"关闭是屏蔽评论区"),i("不限制评论区的最大高度","m-csdn-blog-notLimitCommentMaxHeight",!0,void 0,"让评论区高度直接被撑开")]}]},{text:"底部文章",type:"deepMenu",forms:[{text:"",type:"forms",forms:[i("启用","m-csdn-blog-bottomArticleEnable",!0,void 0,"关闭是屏蔽底部文章"),i("移除资源下载","m-csdn-blog-removeResourceArticle",!1,void 0,"移除download.csdn.net、www.iteye.com、edu.csdn.net的文章链接"),i("重构","m-csdn-blog-refactoringRecommendation",!0,void 0,"文章的样式统一"),i("新标签页打开","m-csdn-blog-openNewTab",!0,void 0,"新标签页打开文章")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[i("劫持-禁止复制","m-csdn-blog-unBlockCopy",!0,void 0,"允许点击复制按钮进行复制")]}]}]}]},ae={id:"m-panel-link",title:"链接",isDefault(){return g.isLink()},forms:[{text:"功能",type:"forms",forms:[i("重定向链接","m-csdn-link-jumpRedirect",!0,void 0,"自动跳转至被拦截的Url链接")]}]},se={id:"panel-so",title:"搜索",isDefault(){return g.isSo()},forms:[{text:"C知道-功能",type:"forms",forms:[i("去除水印","m-csdn-so-cknow-removeMaskCover",!0)]}]},de={id:"m-panel-wenku",title:"文库",isDefault(){return g.isWenKu()},forms:[{text:"屏蔽",type:"forms",forms:[i("【屏蔽】底部工具栏","m-csdn-wenku-shieldBottomToolbar",!1)]}]},ce={id:"m-panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return g.isHuaWeiCloudBlog()},forms:[{text:"功能",type:"forms",forms:[i("自动展开全文","m-csdn-hua-wei-cloud-autoExpandContent",!0)]},{text:"屏蔽",type:"forms",forms:[i("【屏蔽】底部加入社区","m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",!0)]}]},ue={id:"m-panel-download",title:"资源",isDefault(){return g.isDownload()},forms:[{text:"功能",type:"forms",forms:[i("自动展开资源介绍","m-csdn-download-automaticallyExpandResourceIntroduction",!0,void 0,"屏蔽资源介绍【展开全部】按钮并展开资源介绍")]},{text:"屏蔽",type:"forms",forms:[i("【屏蔽】广告","m-csdn-download-removeAds",!0,void 0,"包括：登录弹窗、会员降价等")]}]},E=function(e,t,o,l,a,d){let c=[];typeof l=="function"?c=l():c=l;let m={text:e,type:"select",description:d,attributes:{},getValue(){return r.getValue(t,o)},callback(b,p,x){r.setValue(t,p),typeof a=="function"&&a(b,p,x);},data:c};return m.attributes&&(m.attributes[B]=t,m.attributes[_]=o),m},me={id:"component-common",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[E("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,o)=>{n.info("设置当前Qmsg弹出位置"+o);},"Toast显示在页面九宫格的位置"),E("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),i("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]},he={id:"component-common",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[E("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,o)=>{n.info("设置当前Qmsg弹出位置"+o);},"Toast显示在页面九宫格的位置"),E("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),i("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]},w={data:null,oneSuccessExecMenu:null,onceExec:null,listenData:null},r={$data:{get data(){return w.data==null&&(w.data=new u.Dictionary),w.data},get oneSuccessExecMenu(){return w.oneSuccessExecMenu==null&&(w.oneSuccessExecMenu=new u.Dictionary),w.oneSuccessExecMenu},get onceExec(){return w.onceExec==null&&(w.onceExec=new u.Dictionary),w.onceExec},get scriptName(){return A},key:v,attributeKeyName:B,attributeDefaultValueName:_},$listener:{get listenData(){return w.listenData==null&&(w.listenData=new u.Dictionary),w.listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},initExtensionsMenu(){f.top===f.self&&U.add([{key:"show_pops_panel_setting",text:"⚙ PC端设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPanel();}},{key:"m_show_pops_panel_setting",text:"⚙ 移动端端设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showMPanel();}},{key:"gotoCSDNCKnow",text:"⚙ 前往C知道",isStoreValue:!1,autoReload:!1,showText(e){return e},callback(){window.open("https://so.csdn.net/chat","_blank");}}]);},initPanelDefaultValue(){let e=this;function t(a){if(!a.attributes)return;let d=a.attributes[B],c=a.attributes[_];if(d==null){n.warn(["请先配置键",a]);return}e.$data.data.has(d)&&n.warn("请检查该key(已存在): "+d),e.$data.data.set(d,c);}function o(a){for(let d=0;d<a.length;d++){let c=a[d];t(c);let m=c.forms;m&&Array.isArray(m)&&o(m);}}let l=this.getPanelContentConfig().concat(this.getMPanelContentConfig());for(let a=0;a<l.length;a++){let d=l[a];if(!d.forms)continue;let c=d.forms;c&&Array.isArray(c)&&o(c);}},setValue(e,t){let o=T(v,{}),l=o[e];o[e]=t,D(v,o),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,l,t);},hasKey(e){let t=T(v,{});return e in t},getValue(e,t){let l=T(v,{})[e];return l??(this.$data.data.has(e)?this.$data.data.get(e):t)},deleteValue(e){let t=T(v,{}),o=t[e];Reflect.deleteProperty(t,e),D(v,t),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,o,void 0);},addValueChangeListener(e,t){let o=Math.random();return this.$listener.listenData.set(e,{id:o,key:e,callback:t}),o},removeValueChangeListener(e){let t=null;for(const[o,l]of this.$listener.listenData.entries())if(l.id===e){t=o;break}typeof t=="string"?this.$listener.listenData.delete(t):console.warn("没有找到对应的监听器");},execMenu(e,t,o=!1){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){n.warn(`${e} 键不存在`);return}let l=r.getValue(e);o&&(l=!l),l&&t(l);},execMenuOnce(e,t,o=!1){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){n.warn(`${e} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(e))return;this.$data.oneSuccessExecMenu.set(e,1);let l=[],a=m=>{let b=r.getValue(e);d(b,m);},d=(m,b)=>{let p=[];if(m){let x=b??t(m,a);x instanceof HTMLStyleElement?p=[x]:Array.isArray(x)&&(p=[...x.filter(M=>M!=null&&M instanceof HTMLStyleElement)]);}for(let x=0;x<l.length;x++)l[x].remove(),l.splice(x,1),x--;l=[...p];};this.addValueChangeListener(e,(m,b,p)=>{o&&(p=!p),d(p);});let c=r.getValue(e);o&&(c=!c),c&&d(c);},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(t(),this.$data.onceExec.set(e,1));},showPanel(){L.panel({title:{text:`${A}-PC端设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:this.isMobile(),width:this.getWidth(),height:this.getHeight(),drag:!0,only:!0});},showMPanel(){L.panel({title:{text:`${A}-移动端设置`,position:"center",html:!1,style:""},content:this.getMPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:this.isMobile(),width:this.getWidth(),height:this.getHeight(),drag:!0,only:!0});},isMobile(){return window.outerWidth<550},getWidth(){return window.outerWidth<800?"92vw":"800px"},getHeight(){return window.outerHeight>450?"80vh":"450px"},getPanelContentConfig(){return [me,te,ne,oe,re,ie]},getMPanelContentConfig(){return [he,le,ae,ce,de,se,ue]}},fe=`/* 底部免费抽xxx奖品广告 */\r
div.siderbar-box,\r
/* 华为开发者联盟加入社区 */\r
div.user-desc.user-desc-fix {\r
  display: none !important;\r
}\r
`,s={waitForElementToRemove(e=""){u.waitNodeList(e).then(t=>{t.forEach(o=>o.remove());});},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(o=>{Array.isArray(o)?t=t.concat(o):t.push(o);}),h(`${t.join(`,
`)}{display: none !important;}`)}},W={init(){h(fe),r.execMenuOnce("csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",()=>this.shieldCloudDeveloperTaskChallengeEvent()),r.execMenuOnce("csdn-hua-wei-cloud-autoExpandContent",()=>this.autoExpandContent()),r.execMenuOnce("csdn-hua-wei-cloud-shieldLeftFloatingButton",()=>this.shieldLeftFloatingButton()),r.execMenuOnce("csdn-hua-wei-cloud-blockRightColumn",()=>this.blockRightColumn()),r.execMenuOnce("csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",()=>this.blockRecommendedContentAtTheBottom()),r.execMenuOnce("csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",()=>this.shieldTheBottomForMoreRecommendations());},autoExpandContent(){return n.info("自动展开全文"),[s.addBlockCSS("div.article-show-more"),h(`
			/* 自动展开全文 */
			.main-content .user-article{
				height: auto !important;
				overflow: auto !important;
			}
			`)]},shieldCloudDeveloperTaskChallengeEvent(){return n.info("屏蔽云开发者任务挑战活动"),s.addBlockCSS(".luck-draw-modal-warp")},shieldLeftFloatingButton(){return n.info("屏蔽左侧悬浮按钮，包括当前阅读量、点赞按钮、评论按钮、分享按钮"),s.addBlockCSS("div.toolbar-wrapper.article-interact-bar")},blockRightColumn(){return n.info("屏蔽右侧栏，包括相关产品-活动日历-运营活动-热门标签"),s.addBlockCSS("div.page-home-right.dp-aside-right")},blockRecommendedContentAtTheBottom(){return n.info("屏蔽底部推荐内容"),s.addBlockCSS("div.recommend-card-box")},shieldTheBottomForMoreRecommendations(){return n.info("屏蔽底部更多推荐"),s.addBlockCSS("div.more-article")}},pe=`.ecommend-item-box.recommend-recommend-box,\r
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
`,ge=`/*.blog_container_aside,\r
#nav {\r
	margin-left: -45px;\r
}\r
.recommend-right.align-items-stretch.clearfix,\r
.dl_right_fixed {\r
	margin-left: 45px;\r
}*/\r
`,xe=`#mainBox main {\r
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
`,be={init(){r.execMenuOnce("csdn-blog-rightToolbarEnable",()=>this.shieldRightToolbar(),!0),r.execMenuOnce("csdn-blog-rightToolbarCreativeCenter",()=>this.shieldCreativeCenter()),r.execMenuOnce("csdn-blog-rightToolbarShowOrSidebar",()=>this.shieldShowOrSidebar()),r.execMenuOnce("csdn-blog-rightToolbarBeginnerGuidance",()=>this.shieldBeginnerGuidance()),r.execMenuOnce("csdn-blog-rightToolbarCustomerService",()=>this.shieldCustomerService()),r.execMenuOnce("csdn-blog-rightToolbarReport",()=>this.shieldReport()),r.execMenuOnce("csdn-blog-rightToolbarBackToTop",()=>this.shieldBackToTop()),this.initRightToolbarOffset(),C.ready(()=>{r.execMenuOnce("csdn-blog-addGotoRecommandButton",()=>{this.addGotoRecommandButton();});});},addGotoRecommandButton(){n.info("【添加】前往评论按钮，在返回顶部的上面");let e=document.createElement("a");e.className="option-box",e.setAttribute("data-type","gorecommand"),e.innerHTML='<span class="show-txt" style="display:flex;opacity:100;">前往<br>评论</span>',e.addEventListener("click",function(){let t=document.querySelector("#toolBarBox");if(!t.getClientRects().length){n.error("评论区处于隐藏状态");return}n.info("滚动到评论");let o=t.getBoundingClientRect().top+window.scrollY,l=document.querySelector("#csdn-toolbar"),a=window.getComputedStyle(l),d=l.clientHeight-parseFloat(a.paddingTop)-parseFloat(a.paddingBottom);window.scrollTo({top:o-d-8,left:0,behavior:"smooth"});}),u.waitNode(".csdn-side-toolbar").then(()=>{let t=document.querySelector(".csdn-side-toolbar a:nth-last-child(2)");t.parentElement.insertBefore(e,t.nextSibling);});},initRightToolbarOffset(){n.info("初始化右侧工具栏的偏移（top、right）"),h(`
        .csdn-side-toolbar{
          left: unset !important;
        }
        `),u.waitNode(".csdn-side-toolbar").then(e=>{C.css(e,{top:parseInt(r.getValue("csdn-blog-rightToolbarTopOffset"))+"px",right:parseInt(r.getValue("csdn-blog-rightToolbarRightOffset"))+"px"});});},shieldRightToolbar(){return n.info("屏蔽右侧工具栏"),s.addBlockCSS("div.csdn-side-toolbar")},shieldCreativeCenter(){return n.info("【屏蔽】创作中心"),s.addBlockCSS(".csdn-side-toolbar .sidetool-writeguide-box")},shieldShowOrSidebar(){return n.info("【屏蔽】显示/隐藏侧栏"),s.addBlockCSS(".csdn-side-toolbar a.sidecolumn")},shieldBeginnerGuidance(){return n.info("【屏蔽】新手引导"),s.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="guide"]')},shieldCustomerService(){return n.info("【屏蔽】客服"),s.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="cs"]')},shieldReport(){return n.info("【屏蔽】举报"),s.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="report"]')},shieldBackToTop(){return n.info("【屏蔽】返回顶部"),s.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="gotop"]')}},j={init(){this.addCSS(),be.init(),r.execMenuOnce("csdn-blog-articleCenter",()=>this.articleCenter()),r.execMenuOnce("csdn-blog-shieldLoginDialog",()=>this.shieldLoginDialog()),r.execMenuOnce("csdn-blog-autoExpandContent",()=>this.autoExpandContent()),r.execMenuOnce("csdn-blog-autoExpandCodeContent",()=>this.autoExpandCodeContent()),r.execMenuOnce("csdn-blog-blockComment",()=>this.blockComment(),!0),r.execMenuOnce("csdn-blog-bottomRecommendArticleEnable",()=>this.shieldBottomRecommendArticle(),!0),r.execMenuOnce("csdn-blog-shieldBottomSkillTree",()=>this.shieldBottomSkillTree()),r.execMenuOnce("csdn-blog-shieldBottomFloatingToolbar",()=>this.shieldBottomFloatingToolbar()),r.execMenuOnce("csdn-blog-shieldLeftBlogContainerAside",()=>this.shieldLeftBlogContainerAside()),r.execMenuOnce("csdn-blog-shieldRightDirectoryInformation",()=>this.shieldRightDirectoryInformation()),r.execMenuOnce("csdn-blog-shieldTopToolbar",()=>this.shieldTopToolbar()),r.execMenuOnce("csdn-blog-shieldArticleSearchTip",()=>this.shieldArticleSearchTip()),r.execMenuOnce("csdn-blog-allowSelectContent",()=>this.allowSelectContent()),C.ready(()=>{r.execMenuOnce("csdn-blog-removeClipboardHijacking",()=>{this.removeClipboardHijacking();}),r.execMenuOnce("csdn-blog-unBlockCopy",()=>{this.unBlockCopy();}),r.execMenuOnce("csdn-blog-identityCSDNDownload",()=>{this.identityCSDNDownload();}),r.execMenuOnce("csdn-blog-clickPreCodeAutomatically",()=>{this.clickPreCodeAutomatically();}),r.execMenuOnce("csdn-blog-restoreComments",()=>{this.restoreComments();});});},addCSS(){return n.info("添加屏蔽CSS和功能CSS"),[h(pe),h(ge)]},removeClipboardHijacking(){n.info("去除剪贴板劫持");let e=document.querySelector(".article-copyright");e&&e.remove(),f.articleType&&(f.articleType=0),f.csdn&&f.csdn.copyright&&f.csdn.copyright.textData&&(f.csdn.copyright.textData=""),f.csdn&&f.csdn.copyright&&f.csdn.copyright.htmlData&&(f.csdn.copyright.htmlData="");},unBlockCopy(){n.info("取消禁止复制"),C.on(document,"click",function(t){let o=t.target,l=o.parentElement;if(!o.classList.contains("hljs-button"))return;u.preventEvent(t);let a=(l.innerText||l.textContent||"").toString();n.info("点击复制按钮复制内容："+(a.length>8?a.substring(0,8)+"...":a)),u.setClip(a),o.setAttribute("data-title","复制成功");},{capture:!0});let e=new u.LockFunction(function(t){let o=t.target;if(o.localName!=="pre")return;let l=o.querySelector(".hljs-button");l&&l.setAttribute("data-title","复制");});C.on(document,["mouseenter","mouseleave"],function(t){e.run(t);},{capture:!0}),u.waitNode("#content_views").then(t=>{var o;f.$&&((o=f.$("#content_views"))==null||o.unbind("copy")),C.on(t,"copy",function(l){u.preventEvent(l);let a=f.getSelection(),d=a==null?void 0:a.toString();return n.info("Ctrl+C复制内容："+(d.length>8?d.substring(0,8)+"...":d)),u.setClip(d),!1},{capture:!0});}),u.waitNode(".hljs-button").then(()=>{setTimeout(()=>{document.querySelectorAll(".hljs-button").forEach(t=>{t.removeAttribute("onclick"),t.removeAttribute("data-report-click"),t.setAttribute("data-title","复制");});},250);});},clickPreCodeAutomatically(){n.info("点击代码块自动展开"),document.addEventListener("click",function(e){var o;let t=e.target;t.localName==="pre"&&(t.style.setProperty("height","auto"),(o=t.querySelector(".hide-preCode-box"))==null||o.remove());});},restoreComments(){n.info("恢复评论到正确位置-第一条评论"),u.waitNode(".first-recommend-box").then(e=>{let t=document.querySelector(".recommend-box.insert-baidu-box.recommend-box-style");t.insertBefore(e,t.firstChild);}),n.info("恢复评论到正确位置-第二条评论"),u.waitNode(".second-recommend-box").then(e=>{let t=document.querySelector(".recommend-box.insert-baidu-box.recommend-box-style");t.insertBefore(e,t.firstChild);});},identityCSDNDownload(){n.info("标识CSDN下载的链接"),document.querySelectorAll(".recommend-item-box[data-url*='https://download.csdn.net/']").forEach(e=>{r.getValue("csdn-blog-removeResourceDownloadArticle")?e.remove():e.querySelector(".content-box").style.setProperty("border","2px solid red");});},articleCenter(){return n.info("全文居中"),h(xe)},shieldLoginDialog(){return n.info("屏蔽登录弹窗"),s.addBlockCSS(".passport-login-container")},autoExpandCodeContent(){return n.info("自动展开代码块"),[s.addBlockCSS("pre.set-code-hide .hide-preCode-box"),h(`
			pre.set-code-hide{
				height: auto !important;
			}
			/* 自动展开代码块 */
			.comment-list-box,
			main div.blog-content-box pre {
				max-height: none !important;
			}
        `)]},autoExpandContent(){return n.info("自动展开全文"),h(`
		/* 自动展开全文 */
		#article_content,
		.user-article.user-article-hide {
			height: auto !important;
			overflow: auto !important;
		}
        `)},blockComment(){return n.info("屏蔽评论区"),s.addBlockCSS("#pcCommentBox")},shieldBottomRecommendArticle(){return n.info("屏蔽底部推荐文章"),s.addBlockCSS("main > div.recommend-box")},shieldBottomSkillTree(){return n.info("屏蔽底部xx技能树"),s.addBlockCSS("#treeSkill")},shieldBottomFloatingToolbar(){return n.info("屏蔽底部悬浮工具栏"),s.addBlockCSS("#toolBarBox")},shieldLeftBlogContainerAside(){return n.info("【屏蔽】左侧博客信息"),s.addBlockCSS("aside.blog_container_aside")},shieldRightDirectoryInformation(){return n.info("【屏蔽】右侧目录信息"),s.addBlockCSS("#rightAsideConcision","#rightAside")},shieldTopToolbar(){return n.info("屏蔽顶部Toolbar"),s.addBlockCSS("#toolbarBox")},shieldArticleSearchTip(){return n.info("屏蔽文章内的选中搜索悬浮提示"),s.addBlockCSS("#articleSearchTip")},allowSelectContent(){return n.info("允许选择内容"),h(`
		#content_views,
		#content_views pre,
		#content_views pre code {
			user-select: text !important;
		}
		`)}},we=`#chatgpt-article-detail\r
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
`,Ce=`/* wenku顶部横幅 */\r
#app > div > div.main.pb-32 > div > div.top-bar,\r
/* 底部展开全文 */\r
#chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid > div.open {\r
  display: none !important;\r
}`,Se={init(){h(we),h(Ce),r.execMenuOnce("csdn-wenku-shieldResourceRecommend",()=>this.shieldResourceRecommend()),r.execMenuOnce("csdn-wenku-shieldRightUserInfo",()=>this.shieldRightUserInfo()),r.execMenuOnce("csdn-wenku-shieldRightToolBar",()=>this.shieldRightToolBar());},shieldResourceRecommend(){return n.info("【屏蔽】资源推荐"),s.addBlockCSS("#recommend")},shieldRightUserInfo(){return n.info("【屏蔽】右侧用户信息"),s.addBlockCSS(".layout-right")},shieldRightToolBar(){return n.info("【屏蔽】右侧悬浮工具栏"),s.addBlockCSS(".csdn-side-toolbar")}},F={init(){r.execMenuOnce("csdn-link-jumpRedirect",()=>{this.jumpRedirect();});},jumpRedirect(){if(window.location.hostname==="link.csdn.net"&&window.location.search.startsWith("?target")){window.stop();let e=window.location.search.replace(/^\?target=/gi,"");e=decodeURIComponent(e);let t=e;n.success(`跳转链接 ${t}`),window.location.href=t;}}},V={init(){g.isLink()?(n.info("Router: 中转链接"),F.init()):g.isHuaWeiCloudBlog()?(n.info("Router: 华为云联盟"),W.init()):g.isBlog()?(n.info("Router: 博客"),j.init()):g.isWenKu()?(n.info("Router: 文库"),Se.init()):n.error("暂未适配，请反馈开发者："+globalThis.location.href);}},ve={init(){r.execMenuOnce("m-csdn-link-jumpRedirect",()=>{F.jumpRedirect();});}},ye=`/* 右下角的 免费赢华为平板xxxx */\r
.org-main-content .siderbar-box {\r
  display: none !important;\r
}\r
`,Me={init(){h(ye),r.execMenuOnce("m-csdn-hua-wei-cloud-autoExpandContent",()=>W.autoExpandContent()),r.execMenuOnce("m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",()=>this.blockBottomJoinTheCommunity());},blockBottomJoinTheCommunity(){return n.info("【屏蔽】底部加入社区"),s.addBlockCSS(".user-desc")}},Te=`#operate,.feed-Sign-span,\r
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
`,Be={init(){this.addCSS(),r.execMenuOnce("m-csdn-blog-shieldTopToolbar",()=>this.shieldTopToolbar()),r.execMenuOnce("m-csdn-blog-notLimitCodePreMaxHeight",()=>this.notLimitCodePreMaxHeight()),r.execMenuOnce("m-csdn-blog-notLimitCommentMaxHeight",()=>this.notLimitCommentMaxHeight()),r.execMenuOnce("m-csdn-blog-allowSelectText",()=>this.allowSelectText()),r.execMenuOnce("m-csdn-blog-autoExpandContent",()=>this.autoExpandContent()),r.execMenuOnce("m-csdn-blog-bottomArticleEnable",()=>this.blockBottomArticle(),!0),r.execMenuOnce("m-csdn-blog-comment-enable",()=>this.blockComment(),!0),C.ready(()=>{r.execMenuOnce("m-csdn-blog-removeAds",()=>this.removeAds()),r.execMenuOnce("m-csdn-blog-refactoringRecommendation",()=>{this.refactoringRecommendation();}),r.execMenuOnce("m-csdn-blog-unBlockCopy",()=>{j.unBlockCopy();});});},addCSS(){h(Te),h(ke);},shieldTopToolbar(){return n.info("屏蔽顶部Toolbar"),[s.addBlockCSS("#csdn-toolbar"),h(`
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
			`)]},refactoringRecommendation(){function e(){n.info("重构底部推荐"),document.querySelectorAll(".container-fluid").forEach(o=>{var x,M;let l="",a="",d="",c="",m=!1,b=!1;if(o.hasAttribute("data-url")){if(l=o.getAttribute("data-url"),a=(x=o.querySelector(".recommend_title div.left"))==null?void 0:x.innerHTML,!o.querySelector(".text"))return;d=(M=o.querySelector(".text"))==null?void 0:M.innerHTML,o.querySelectorAll(".recommend-img").length&&o.querySelectorAll(".recommend-img").forEach(z=>{c+=z.innerHTML;});}else n.info("节点上无data-url"),l=o.querySelector("a[data-type]").getAttribute("href"),a=o.querySelector(".recommend_title div.left").innerHTML,d=o.querySelector(".text").innerHTML;var p=new URL(l);p.host==="download.csdn.net"||p.host==="www.iteye.com"&&p.pathname.match(/^\/resource/gi)?(n.info("该链接为csdn资源下载"),m=!0,a='<div class="component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>'+a):p.origin.match(/edu.csdn.net/gi)&&(b=!0,n.info("该链接为csdn学院下载"),a='<div class="component-box"><a class="csdn-edu-title" href="javascript:;">CSDN学院</a></div>'+a),o.setAttribute("class","GM-csdn-dl"),o.setAttribute("data-url",l),o.innerHTML=`<div class="GM-csdn-title"><div class="left">${a}</div></div><div class="GM-csdn-content">${d}</div><div class="GM-csdn-img">${c}</div>`,o.addEventListener("click",function(){r.getValue("m-csdn-blog-openNewTab")?window.open(l,"_blank"):window.location.href=l;}),(m||b)&&r.getValue("m-csdn-blog-removeResourceArticle")&&o.remove();});}let t=new u.LockFunction(e,50);u.waitNode("#recommend").then(o=>{n.info("重构底部推荐"),t.run(),u.mutationObserver(o,{callback:()=>{t.run();},config:{childList:!0,subtree:!0,attributes:!0}});});},blockBottomArticle(){return n.info("屏蔽底部文章"),s.addBlockCSS("#recommend")},blockComment(){return n.info("屏蔽评论"),s.addBlockCSS("#comment")},removeAds(){n.info("去除广告"),s.waitForElementToRemove(".passport-login-container"),s.waitForElementToRemove(".btn_open_app_prompt_box.detail-open-removed"),s.waitForElementToRemove(".add-firstAd"),s.waitForElementToRemove("div.feed-Sign-weixin"),s.waitForElementToRemove("div.ios-shadowbox");},notLimitCodePreMaxHeight(){return n.info("不限制代码块最大高度"),h(`
        pre{
            max-height: unset !important;
        }
        `)},notLimitCommentMaxHeight(){return n.info("不限制评论区最大高度"),h(`
        #comment{
          max-height: none !important;
        }
      `)},allowSelectText(){return n.info("允许选择文字"),h(`
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
        `)},autoExpandContent(){return n.info("自动展开内容"),h(`
        #content_views pre.set-code-hide,
        .article_content{
          height: 100% !important;
          overflow: auto !important;
        }
        `)}},_e=`/* 右下角的买一年送3个月的广告图标 */\r
.blind_box {\r
  display: none !important;\r
}\r
`,Re={init(){h(_e),r.execMenu("m-csdn-wenku-shieldBottomToolbar",()=>{this.shieldBottomToolbar();});},shieldBottomToolbar(){n.info("【屏蔽】底部工具栏"),s.addBlockCSS(".page-container > div.btn");}},De=`/* 右下角悬浮图标 买1年送3个月 */\r
.page-container .blind_box,\r
/* 底部工具栏右边的 开会员按钮（低至xx元/次） */\r
.page-container .btn .ml-12,\r
/* 登录弹窗 */\r
.passport-login-container,\r
/* 通用广告className匹配 */\r
.ads {\r
	display: none !important;\r
}\r
`,Ee={init(){r.execMenuOnce("m-csdn-download-removeAds",()=>h(De)),r.execMenuOnce("m-csdn-download-automaticallyExpandResourceIntroduction",()=>this.automaticallyExpandResourceIntroduction());},automaticallyExpandResourceIntroduction(){return n.info("自动展开资源介绍"),[s.addBlockCSS("label.unfold-font"),h(`
			.resource-desc{
				max-height: unset !important;
				overflow: unset !important;
			}
			`)]}},$={init(){g.isLink()?(n.info("Router: 中转链接"),ve.init()):g.isHuaWeiCloudBlog()?(n.info("Router: 华为云联盟"),Me.init()):g.isBlog()?(n.info("Router: 博客"),Be.init()):g.isWenKu()?(n.info("Router: 文库"),Re.init()):g.isDownload()?(n.info("Router: 资源下载"),Ee.init()):n.error("暂未适配，请反馈开发者："+globalThis.location.href);}};r.init();let K=u.isPhone(),k="change_env_set",y=T(k);U.add({key:k,text:`⚙ 自动: ${K?"移动端":"PC端"}`,autoReload:!1,isStoreValue:!1,showText(e){return y==null?e:e+` 手动: ${y==1?"移动端":y==2?"PC端":"未知"}`},callback:()=>{let e=[0,1,2],t=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!t)return;let o=parseInt(t);if(isNaN(o)){S.error("输入的不是规范的数字");return}if(!e.includes(o)){S.error("输入的值必须是0或1或2");return}o==0?P(k):D(k,o);}});y!=null?(n.info(`手动判定为${y===1?"移动端":"PC端"}`),y==1?$.init():y==2?V.init():(S.error("意外，手动判定的值不在范围内"),P(k))):K?(n.info("自动判定为移动端"),$.init()):(n.info("自动判定为PC端"),V.init());

})(Qmsg, DOMUtils, Utils, pops);