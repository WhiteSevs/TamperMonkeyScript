// ==UserScript==
// @name         小红书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.7.7.19
// @author       WhiteSevs
// @description  屏蔽登录弹窗、屏蔽广告、优化评论浏览、优化图片浏览、允许复制、禁止唤醒App、禁止唤醒弹窗、修复正确跳转等
// @license      GPL-3.0-only
// @icon         https://fe-video-qc.xhscdn.com/fe-platform/ed8fe781ce9e16c1bfac2cd962f0721edabe2e49.ico
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://www.xiaohongshu.com/*
// @require      https://update.greasyfork.org/scripts/494167/1376186/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/449471/1360565/Viewer.js
// @require      https://update.greasyfork.org/scripts/456485/1406779/pops.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.1.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@1.5.9/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.1.2/dist/index.umd.js
// @connect      edith.xiaohongshu.com
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

(function (g, W, le) {
  'use strict';

  var v=typeof GM_addStyle<"u"?GM_addStyle:void 0,ee=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,T=typeof GM_getValue<"u"?GM_getValue:void 0,U=typeof GM_info<"u"?GM_info:void 0,ae=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,j=typeof GM_setValue<"u"?GM_setValue:void 0,ce=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,ue=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,x=typeof unsafeWindow<"u"?unsafeWindow:void 0,F=window;const de="小红书优化",u=W.noConflict(),h=le.noConflict(),q=F.pops||x.pops,me=F.Viewer||x.Viewer,i=new u.Log(U,x.console||F.console);var Y;const z=((Y=U==null?void 0:U.script)==null?void 0:Y.name)||de,te=!1;i.config({debug:te,logMaxCount:1e3,autoClearConsole:!0,tag:!0});g.config(Object.defineProperties({html:!0,autoClose:!0,showClose:!1},{position:{get(){return a.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return a.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return a.getValue("qmsg-config-showreverse",!0)}},zIndex:{get(){let e=W.getMaxZIndex(),t=q.config.Utils.getPopsMaxZIndex(e).zIndex;return W.getMaxValue(e,t)+100}}}));const oe=new u.GM_Menu({GM_getValue:T,GM_setValue:j,GM_registerMenuCommand:ae,GM_unregisterMenuCommand:ce}),$=new u.Httpx(ue);$.interceptors.response.use(void 0,e=>(i.error(["拦截器-请求错误",e]),e.type==="onabort"?g.warning("请求取消"):e.type==="onerror"?g.error("请求异常"):e.type==="ontimeout"?g.error("请求超时"):g.error("其它错误"),e));$.config({logDetails:te});x.Object.defineProperty,x.Function.prototype.apply,x.Function.prototype.call,x.Element.prototype.appendChild,x.setTimeout;const y="GM_Panel",D="data-key",H="data-default-value",m=function(e,t,o,s,r){let n={text:e,type:"switch",description:r,attributes:{},getValue(){return !!a.getValue(t,o)},callback(c,l){i.success(`${l?"开启":"关闭"} ${e}`),a.setValue(t,!!l);},afterAddToUListCallBack:void 0};return n.attributes&&(n.attributes[D]=t,n.attributes[H]=!!o),n},pe={id:"little-red-book-panel-config-home",title:"主页",forms:[{text:"",type:"forms",forms:[{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("劫持点击事件","little-red-book-repariClick",!0,void 0,"可阻止点击跳转至下载页面")]}]}]}]},fe={id:"little-red-book-panel-config-note",title:"笔记",forms:[{text:"",type:"forms",forms:[{text:"视频笔记",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("优化视频描述","little-red-book-optimizeVideoNoteDesc",!0,void 0,"让视频描述可以滚动显示更多"),m("【屏蔽】作者热门笔记","little-red-book-shieldAuthorHotNote",!0,void 0,"建议开启"),m("【屏蔽】热门推荐","little-red-book-shieldHotRecommendNote",!0,void 0,"建议开启")]}]}]},{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("优化评论浏览","little-red-book-optimizeCommentBrowsing",!0,void 0,"加载评论，未登录最多查看1页评论(注：楼中楼评论已失效，api无法获取楼中楼评论，需要请求头X-T、X-S、X-B3-Traceid)"),m("优化图片浏览","little-red-book-optimizeImageBrowsing",!0,void 0,"更方便的浏览图片"),m("允许复制","little-red-book-allowCopy",!0,void 0,"可以复制笔记的内容")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("劫持webpack-弹窗","little-red-book-hijack-webpack-mask",!0,void 0,"如：打开App弹窗、登录弹窗"),m("劫持webpack-唤醒App","little-red-book-hijack-webpack-scheme",!0,void 0,"禁止跳转商店小红书详情页/小红书")]}]}]}]},B=function(e,t,o,s,r,n){let c=[];typeof s=="function"?c=s():c=s;let l={text:e,type:"select",description:n,attributes:{},getValue(){return a.getValue(t,o)},callback(d,p,f){a.setValue(t,p),typeof r=="function"&&r(d,p,f);},data:c};return l.attributes&&(l.attributes[D]=t,l.attributes[H]=o),l},he={id:"xhs-panel-config-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("允许复制","pc-xhs-allowCopy",!0,void 0,"可以选择文字并复制"),m("新标签页打开文章","pc-xhs-open-blank-article",!1,void 0,"点击文章不会在本页展开，会打开新标签页")]}]},{text:"搜索",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("新标签页打开-搜索按钮","pc-xhs-search-open-blank-btn",!1,void 0,"点击右边的搜索按钮直接新标签页打开搜索内容"),m("新标签页打开-回车键","pc-xhs-search-open-blank-keyboard-enter",!1,void 0,"按下回车键直接新标签页打开搜索内容")]}]},{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("【屏蔽】广告","pc-xhs-shieldAd",!0,void 0,"屏蔽元素"),m("【屏蔽】登录弹窗","pc-xhs-shield-login-dialog",!0,void 0,"屏蔽会自动弹出的登录弹窗"),m("【屏蔽】选择文字弹出的搜索提示","pc-xhs-shield-select-text-search-position",!1,void 0,"屏蔽元素"),m("【屏蔽】顶部工具栏","pc-xhs-shield-topToolbar",!1,void 0,"屏蔽元素")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("劫持Vue","pc-xhs-hook-vue",!1,void 0,"恢复__vue__属性")]}]},{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[B("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,o)=>{i.info("设置当前Qmsg弹出位置"+o);},"Toast显示在页面九宫格的位置"),B("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),m("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]}]}]},ge=function(e,t,o,s,r,n,c,l){let d={text:e,type:"slider",description:l,attributes:{},getValue(){return a.getValue(t,o)},getToolTipContent(p){return typeof c=="function"?c(p):`${p}`},callback(p,f){typeof n=="function"&&n(p,f)||a.setValue(t,f);},min:s,max:r};return d.attributes&&(d.attributes[D]=t,d.attributes[H]=o),d},xe={id:"xhs-panel-config-article",title:"笔记",forms:[{text:"",type:"forms",forms:[{text:"笔记宽屏",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("启用","pc-xhs-article-fullWidth",!1,void 0,`让笔记占据宽屏，当页面可视宽度>=960px时才会触发该功能，当前页面可视宽度: ${window.innerWidth}px`),ge("占据范围","pc-xhs-article-fullWidth-widthSize",90,30,100,(e,t)=>{let o=document.querySelector("#noteContainer");if(!o){i.error("未找到笔记容器");return}o.style.width=`${t}dvw`;},e=>`${e}%，默认：90%`,"调整笔记页面占据的页面范围")]}]}]}]},be={id:"little-red-book-panel-config-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[B("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,o)=>{i.info("设置当前Qmsg弹出位置"+o);},"Toast显示在页面九宫格的位置"),B("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),m("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"forms",forms:[{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("【屏蔽】广告","little-red-book-shieldAd",!0,void 0,"如：App内打开"),m("【屏蔽】底部搜索发现","little-red-book-shieldBottomSearchFind",!0,void 0,"建议开启"),m("【屏蔽】底部工具栏","little-red-book-shieldBottomToorBar",!0,void 0,"建议开启")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("劫持Vue","little-red-book-hijack-vue",!1,void 0,"恢复__vue__属性")]}]}]}]},w={data:null,oneSuccessExecMenu:null,onceExec:null,listenData:null},a={$data:{get data(){return w.data==null&&(w.data=new u.Dictionary),w.data},get oneSuccessExecMenu(){return w.oneSuccessExecMenu==null&&(w.oneSuccessExecMenu=new u.Dictionary),w.oneSuccessExecMenu},get onceExec(){return w.onceExec==null&&(w.onceExec=new u.Dictionary),w.onceExec},get scriptName(){return z},key:y,attributeKeyName:D,attributeDefaultValueName:H},$listener:{get listenData(){return w.listenData==null&&(w.listenData=new u.Dictionary),w.listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},initExtensionsMenu(){x.top===x.self&&oe.add([{key:"show_pops_panel_setting",text:"⚙ 移动端-设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPanel();}},{key:"show_pops_panel_setting",text:"⚙ PC-设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPCPanel();}}]);},initPanelDefaultValue(){let e=this;function t(r){if(!r.attributes)return;let n=r.attributes[D],c=r.attributes[H];if(n==null){i.warn(["请先配置键",r]);return}e.$data.data.has(n)&&i.warn("请检查该key(已存在): "+n),e.$data.data.set(n,c);}function o(r){for(let n=0;n<r.length;n++){let c=r[n];t(c);let l=c.forms;l&&Array.isArray(l)&&o(l);}}let s=this.getPanelContentConfig().concat(this.getPCPanelContentConfig());for(let r=0;r<s.length;r++){let n=s[r];if(!n.forms)continue;let c=n.forms;c&&Array.isArray(c)&&o(c);}},setValue(e,t){let o=T(y,{}),s=o[e];o[e]=t,j(y,o),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,s,t);},getValue(e,t){let s=T(y,{})[e];return s??(this.$data.data.has(e)?this.$data.data.get(e):t)},deleteValue(e){let t=T(y,{}),o=t[e];Reflect.deleteProperty(t,e),j(y,t),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,o,void 0);},addValueChangeListener(e,t){let o=Math.random();return this.$listener.listenData.set(e,{id:o,key:e,callback:t}),o},removeValueChangeListener(e){let t=null;for(const[o,s]of this.$listener.listenData.entries())if(s.id===e){t=o;break}typeof t=="string"?this.$listener.listenData.delete(t):console.warn("没有找到对应的监听器");},hasKey(e){let t=T(y,{});return e in t},execMenu(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){i.warn(`${e} 键不存在`);return}let o=a.getValue(e);o&&t(o);},execMenuOnce(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){i.warn(`${e} 键不存在`);return}let o=a.getValue(e);if(o){if(this.$data.oneSuccessExecMenu.has(e))return;t(o),this.$data.oneSuccessExecMenu.set(e,1);}},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(t(),this.$data.onceExec.set(e,1));},showPanel(){let{UIWidth:e,UIHeight:t}=this.getUISizeInfo();q.panel({title:{text:`${z}-移动端设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},width:e,height:t,drag:!0,only:!0});},showPCPanel(){let{UIWidth:e,UIHeight:t}=this.getUISizeInfo();q.panel({title:{text:`${z}-设置`,position:"center",html:!1,style:""},content:this.getPCPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},width:e,height:t,drag:!0,only:!0});},getUISizeInfo(){let e="92dvw",t="80dvh";return window.outerWidth>800&&(e="650px"),window.outerHeight>600&&(t="500px"),{UIWidth:e,UIHeight:t}},getPanelContentConfig(){return [be,pe,fe]},getPCPanelContentConfig(){return [he,xe]}},Q={webpackChunkranchi(){let e;Object.defineProperty(x,"webpackChunkranchi",{get(){return e},set(o){e=o;const s=e.push;e.push=function(...r){return r[0][0],typeof r[0][1]=="object"&&Object.keys(r[0][1]).forEach((n,c)=>{if(typeof r[0][1][n]=="function"&&r[0][1][n].toString().includes("是否打开小红书App?")&&a.getValue("little-red-book-hijack-webpack-mask"))i.success(["成功劫持各种弹窗/遮罩层："+n]),r[0][1][n]=function(){};else if(typeof r[0][1][n]=="function"&&r[0][1][n].toString().startsWith("function(e,n,t){t.d(n,{Z:function(){return y}});")&&r[0][1][n].toString().includes("jumpToApp")&&a.getValue("little-red-book-hijack-webpack-scheme")){let l=r[0][1][n];r[0][1][n]=function(...d){i.success(["成功劫持scheme唤醒",d]);let p=d[2].d;d[2].d=function(...f){var E;if(f.length===2&&typeof((E=f[1])==null?void 0:E.Z)=="function"){let L=f[1].Z;L.toString()==="function(){return y}"&&(f[1].Z=function(...V){let M=L.call(this,...V);return typeof M=="function"&&M.toString().includes("jumpToApp")?function(){return {jumpToApp(C){var b;if(i.success(["拦截唤醒",C]),(b=C.deeplink)!=null&&b.startsWith("xhsdiscover://user/")){let _=`https://www.xiaohongshu.com/user/profile/${C.deeplink.replace(/^xhsdiscover:\/\/user\//,"")}`;window.open(_,"_blank");}}}}:M});}p.call(this,...f);},l.call(this,...d);};}}),s.call(this,...r)};}});},webPackVue(){let e=x.Function.prototype.apply,t=!1;x.Function.prototype.apply=function(...o){var r,n,c,l,d,p;const s=e.call(this,...o);if(!t&&o.length===2&&((r=o[0])!=null&&r.addRoute)&&((n=o[0])!=null&&n.currentRoute)&&((c=o[0])!=null&&c.getRoutes)&&((l=o[0])!=null&&l.hasRoute)&&((d=o[0])!=null&&d.install)&&((p=o[0])!=null&&p.removeRoute)){t=!0;let f=o[1][0];i.success(["成功劫持vue，version版本：",f.version]),f.mixin({mounted:function(){this.$el.__Ivue__=this;}});}return s};}},ve=`/* 底部的App内打开 */\r
.bottom-button-box,\r
/* 顶部的打开看看 */\r
.nav-bar-box,\r
/* 首页-顶部的打开看看 */\r
.launch-app-container {\r
  display: none !important;\r
}\r
`,K={isNotePage(){return globalThis.location.pathname.startsWith("/discovery/item/")},isUserHomePage(){return globalThis.location.pathname.startsWith("/user/profile/")},isHomePage(){return globalThis.location.href==="https://www.xiaohongshu.com/"||globalThis.location.href==="https://www.xiaohongshu.com"},isSearchPage(){return globalThis.location.pathname.startsWith("/search_result/")}},J="https://edith.xiaohongshu.com",R={async getPageInfo(e,t="",o="",s="jpg,webp"){const r="/api/sns/web/v2/comment/page",n={note_id:e,cursor:t,top_comment_id:o,image_formats:s},c=r+"?"+u.toSearchParamsStr(n);let l=await $.get(`${J}${c}`,{headers:{Accept:"application/json, text/plain, */*","User-Agent":u.getRandomPCUA(),Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"}});if(!l.status)return;let d=u.toJSON(l.data.responseText);if(i.info(["获取页信息",d]),d.code===0||d.success)return d.data;if(d.code===-101)return;g.error(d.msg);},async getLzlPageInfo(e="",t="",o=10,s="",r="jpg,webp,avif",n=""){const c="/api/sns/web/v2/comment/sub/page";let l={note_id:e,root_comment_id:t,num:o,cursor:s,image_formats:r,top_comment_id:n};c+""+u.toSearchParamsStr(l);let d=`${J}${c}?${u.toSearchParamsStr(l)}`,p=await $.get(d,{headers:{Accept:"application/json, text/plain, */*","User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Host:"edith.xiaohongshu.com",Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"},onerror(){}});if(!p.status){p.data.status===406&&u.isNotNull(p.data.responseText)?u.toJSON(p.data.responseText).code==-1?g.error("获取楼中楼信息失败，验证x-s、x-t、x-s-common失败"):g.error("获取楼中楼信息失败"):g.error("请求异常"),i.error(["获取楼中楼信息失败",p]);return}let f=u.toJSON(p.data.responseText);if(i.info(["获取楼中楼页信息",f]),f.code===0||f.success)return f.data;g.error(f.msg);},async getSearchRecommend(e){let t=await $.get(`https://edith.xiaohongshu.com/api/sns/web/v1/search/recommend?keyword=${e}`,{fetch:!0});if(!t.status)return;let o=u.toJSON(t.data.responseText);if(o.success||o.code===1e3)return o.data.sug_items}},N={allowCopy(){i.info("允许复制"),v(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `);},shieldBottomSearchFind(){i.info("屏蔽底部搜索发现"),v(`
        .hotlist-container,
        /* 一大块空白区域 */
        .safe-area-bottom.margin-placeholder{
            display: none !important;
        }
        `);},shieldBottomToorBar(){i.info("屏蔽底部工具栏"),v(`
        .engage-bar-container{
            display: none !important;
        }`);},shieldAuthorHotNote(){i.info("屏蔽视频笔记的作者热门笔记"),v(`
        .user-notes-box.user-notes-clo-layout-container{
            display: none !important;
        }`);},shieldHotRecommendNote(){i.info("屏蔽视频笔记的热门推荐"),v(`
        #new-note-view-container .recommend-box{
            display: none !important;
        }`);}},we={init(){},optimizeVideoNoteDesc(){i.info("优化视频笔记的描述（可滚动）"),v(`
    .author-box .author-desc-wrapper .author-desc{
      max-height: 70px !important;
      overflow: auto !important;
    }
    /* 展开按钮 */
    .author-box .author-desc-wrapper .author-desc .author-desc-trigger{
      display: none !important;
    }`);}},O={init(){(a.getValue("little-red-book-hijack-webpack-mask")||a.getValue("little-red-book-hijack-webpack-scheme"))&&(i.info("劫持webpack"),Q.webpackChunkranchi()),a.execMenu("little-red-book-shieldBottomSearchFind",()=>{N.shieldBottomSearchFind();}),a.execMenu("little-red-book-shieldBottomToorBar",()=>{N.shieldBottomToorBar();}),a.execMenu("little-red-book-optimizeImageBrowsing",()=>{O.optimizeImageBrowsing();}),a.execMenu("little-red-book-optimizeVideoNoteDesc",()=>{we.optimizeVideoNoteDesc();}),a.execMenu("little-red-book-shieldAuthorHotNote",()=>{N.shieldAuthorHotNote();}),a.execMenu("little-red-book-shieldHotRecommendNote",()=>{N.shieldHotRecommendNote();}),h.ready(function(){a.execMenu("little-red-book-optimizeCommentBrowsing",()=>{O.optimizeCommentBrowsing();});});},optimizeCommentBrowsing(){i.info("优化评论浏览");const e={QmsgLoading:void 0,scrollFunc:void 0,noteData:{},commentData:{},emojiMap:{},emojiNameList:[],currentCursor:void 0,commentContainer:void 0,init(){var t;this.emojiMap=((t=u.toJSON(x.localStorage.getItem("redmoji")))==null?void 0:t.redmojiMap)||{},this.emojiNameList=Object.keys(this.emojiMap),this.scrollFunc=new u.LockFunction(this.scrollEvent,this),e.noteData=x.__INITIAL_STATE__.noteData.data.noteData,e.commentData=x.__INITIAL_STATE__.noteData.data.commentData,i.info(["笔记数据",e.noteData]),i.info(["评论数据",e.commentData]);},getCommentHTML(t){return `
            <div class="little-red-book-comments-avatar">
                    <a target="_blank" href="/user/profile/${t.user_id}">
                        <img src="${t.user_avatar}" crossorigin="anonymous">
                    </a>
              </div>
              <div class="little-red-book-comments-content-wrapper">
                <div class="little-red-book-comments-author-wrapper">
                    <div class="little-red-book-comments-author">
                        <a href="/user/profile/${t.user_id}" class="little-red-book-comments-author-name" target="_blank">
                            ${t.user_nickname}
                        </a>
                    </div>
                    <div class="little-red-book-comments-content">
                        ${t.content}
                    </div>
                    <div class="little-red-book-comments-info">
                        <div class="little-red-book-comments-info-date">
                            <span class="little-red-book-comments-create-time">${u.formatTime(t.create_time)}</span>
                            <span class="little-red-book-comments-location">${t.ip_location}</span>
                        </div>
                    </div>
                </div>
              </div>
            `},getCommentElement(t){var M,C;let o=t.content,s=t.create_time||parseInt(t.time),r=t.id,n=t.ip_location||t.ipLocation,c=t.sub_comment_has_more,l=parseInt(t.sub_comment_count)||0,d=t.sub_comment_cursor,p=t.sub_comments||t.subComments,f=(t.user_info||t.user).image,E=(t.user_info||t.user).nickname,L=((M=t==null?void 0:t.user_info)==null?void 0:M.user_id)||((C=t==null?void 0:t.user)==null?void 0:C.userId);o=e.converContent(o);let V=h.createElement("div",{className:"little-red-book-comments-item",innerHTML:`
            <div class="little-red-book-comments-parent">
              ${e.getCommentHTML({user_id:L,user_avatar:f,user_nickname:E,content:o,create_time:s,ip_location:n})}
            </div>
              `});if(c&&Array.isArray(p)&&(p.forEach(b=>{let A=h.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:e.getCommentHTML({user_id:b.user_info.user_id,user_avatar:b.user_info.image,user_nickname:b.user_info.nickname,content:e.converContent(b.content),create_time:b.create_time,ip_location:b.ip_location})});V.appendChild(A);}),l!==p.length)){let b=l-p.length,A=d,_=h.createElement("div",{className:"little-red-book-comments-reply-show-more",innerText:`展开 ${b} 条回复`});async function Z(){let re=g.loading("加载中，请稍后..."),P=await R.getLzlPageInfo(e.noteData.id,r,10,A,void 0);re.close(),P&&(A=P.cursor,b=b-P.comments.length,_.innerText=`展开 ${b} 条回复`,P.comments.forEach(S=>{let se=h.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:e.getCommentHTML({user_id:S.user_info.user_id,user_avatar:S.user_info.image,user_nickname:S.user_info.nickname,content:e.converContent(S.content),create_time:S.create_time,ip_location:S.ip_location})});h.before(_,se);}),P.has_more||(h.off(_,"click",void 0,Z,{capture:!0}),_.remove()));}h.on(_,"click",void 0,Z,{capture:!0}),V.appendChild(_);}return V},converContent(t){return e.emojiNameList.forEach(o=>{t.includes(o)&&(t=t.replaceAll(o,`<img class="little-red-book-note-content-emoji" crossorigin="anonymous" src="${e.emojiMap[o]}">`));}),t},async scrollEvent(){if(!u.isNearBottom(window.innerHeight/3))return;this.QmsgLoading==null&&(this.QmsgLoading=g.loading("加载中，请稍后..."));let t=await R.getPageInfo(e.noteData.id,e.currentCursor);if(this.QmsgLoading&&(this.QmsgLoading.close(),this.QmsgLoading=void 0),!!t&&(e.currentCursor=t.cursor,t.comments.forEach(o=>{let s=e.getCommentElement(o);e.commentContainer.appendChild(s);}),!t.has_more)){g.info("已加载全部评论"),e.removeScrollEventListener();return}},addSrollEventListener(){i.success("添加滚动监听事件"),h.on(document,"scroll",void 0,e.scrollFunc.run,{capture:!0,once:!1,passive:!0});},removeScrollEventListener(){i.success("移除滚动监听事件"),h.off(document,"scroll",void 0,e.scrollFunc.run,{capture:!0});}};u.waitNode(".narmal-note-container").then(async()=>{i.info("优化评论浏览-笔记元素出现");let t=document.querySelector(".note-view-container"),o=g.loading("获取评论中，请稍后..."),s=h.createElement("div",{className:"little-red-book-comments-container",innerHTML:`
                <style>
                    .little-red-book-comments-parent {
                        position: relative;
                        display: flex;
                        padding: 8px;
                        width: 100%;
                    }
                    
                    .little-red-book-comments-reply-container {
                        position: relative;
                        display: flex;
                        padding: 8px;
                        width: 100%;
                        padding-left: 52px;
                    }
                    .little-red-book-comments-container {
                        background: #fff;
                        position: relative;
                        padding: 8px 8px;
                    }
                    
                    .little-red-book-comments-item {
                        position: relative;
                    }
                    
                    .little-red-book-comments-avatar {
                        flex: 0 0 auto;
                    }
                    
                    .little-red-book-comments-avatar img {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        border-radius: 100%;
                        border: 1px solid rgba(0,0,0,0.08);
                        object-fit: cover;
                        width: 40px;
                        height: 40px;
                    }
                    .little-red-book-comments-content-wrapper {
                        margin-left: 12px;
                        display: flex;
                        flex-direction: column;
                        font-size: 14px;
                        flex-grow: 1;
                    }
                    
                    .little-red-book-comments-author {display: flex;justify-content: space-between;align-items: center;}
                    
                    a.little-red-book-comments-author-name {
                        line-height: 18px;
                        color: rgba(51,51,51,0.6);
                    }
                    
                    .little-red-book-comments-content {
                        margin-top: 4px;
                        line-height: 140%;
                        color: #333;
                    }
                    
                    .little-red-book-comments-info {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        font-size: 12px;
                        line-height: 16px;
                        color: rgba(51,51,51,0.6);
                    }
                    
                    .little-red-book-comments-info-date {
                        margin: 8px 0;
                    }
                    
                    span.little-red-book-comments-location {
                        margin-left: 4px;
                        line-height: 120%;
                    }
                    img.little-red-book-note-content-emoji {
                        margin: 0 1px;
                        height: 16px;
                        transform: translateY(2px);
                        position: relative;
                    }
                    .little-red-book-comments-reply-container .little-red-book-comments-avatar img {
                        width: 24px;
                        height: 24px;
                    }
                    .little-red-book-comments-total{
                        font-size: 14px;
                        color: rgba(51,51,51,0.6);
                        margin-left: 8px;
                        margin-bottom: 12px;
                    }
                    .little-red-book-comments-reply-show-more {
                    padding-left: calc(52px + 24px + 12px);
                    height: 32px;
                    line-height: 32px;
                    color: #13386c;
                    cursor: pointer;
                    font-weight: 500;
                    font-size: 14px;
                    }
                </style>
          `});e.commentContainer=s,e.init();let r=h.createElement("div",{className:"little-red-book-comments-total",innerHTML:`共 ${e.noteData.comments} 条评论`});s.appendChild(r);let n=await R.getPageInfo(e.noteData.id);await u.sleep(800),n?(e.currentCursor=n.cursor,n.comments.forEach(c=>{let l=e.getCommentElement(c);s.appendChild(l);}),n.has_more&&e.addSrollEventListener()):e.commentData&&e.commentData.comments&&(i.info("从固定的评论中加载"),e.commentData.comments.forEach(c=>{let l=e.getCommentElement(c);s.appendChild(l);})),o.close(),h.append(t,s);});},optimizeImageBrowsing(){i.info("优化图片浏览");function e(t=[],o=0){let s="";t.forEach(c=>{s+=`<li><img data-src="${c}" loading="lazy"></li>`;});let r=h.createElement("ul",{innerHTML:s}),n=new me(r,{inline:!1,url:"data-src",zIndex:u.getMaxZIndex()+100,hidden:()=>{n.destroy();}});o=o<0?0:o,n.view(o),n.zoomTo(1),n.show();}h.on(document,"click",".note-image-box",function(t){let o=t.target,s=o.querySelector("img"),r=[],n=[];o.closest(".onix-carousel-item")?n=Array.from(o.closest(".onix-carousel-item").parentElement.querySelectorAll("img")):n=[s];let c=n.findIndex(l=>l==s);n.forEach(l=>{let d=l.getAttribute("src")||l.getAttribute("data-src")||l.getAttribute("alt");d&&r.push(d);}),i.success(["点击浏览图片👉",r[c]]),e(r,c);});}},ne={init(){h.ready(()=>{a.execMenu("little-red-book-repariClick",()=>{ne.repariClick();});});},repariClick(){i.info("修复正确的点击跳转"),h.on(document,"click",void 0,function(e){var o,s,r,n,c;let t=e.target;if(i.info(["点击的按钮元素",t]),(o=t==null?void 0:t.className)!=null&&o.includes("follow-btn"))i.success("点击-关注按钮");else if(t!=null&&t.closest("button.reds-button.message-btn"))i.success("点击-私信按钮");else if(t!=null&&t.closest("div.reds-tab-item"))i.success("点击-笔记/收藏按钮");else if(t!=null&&t.closest("section.reds-note-card")){i.success("点击-笔记卡片");let l=t==null?void 0:t.closest("section.reds-note-card");l.getAttribute("id")||((n=(r=(s=u.toJSON(l.getAttribute("impression")))==null?void 0:s.noteTarget)==null?void 0:r.value)==null?void 0:n.noteId)?window.open(`https://www.xiaohongshu.com/discovery/item/${(c=t==null?void 0:t.closest("section.reds-note-card"))==null?void 0:c.getAttribute("id")}`,"_blank"):g.error("获取笔记note_id失败");}return u.preventEvent(e),!1},{capture:!0});}},X={init(){a.execMenu("little-red-book-hijack-vue",()=>{i.info("劫持页面的Vue"),Q.webPackVue();}),a.execMenu("little-red-book-shieldAd",()=>{i.info("注入默认屏蔽CSS"),v(ve);}),a.execMenu("little-red-book-allowCopy",()=>{X.allowCopy();}),K.isNotePage()?O.init():K.isUserHomePage()&&ne.init();},allowCopy(){i.info("允许复制文字"),v(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `);}},_e="",ye={init(){a.execMenu("pc-xhs-shieldAd",()=>{v(_e);}),a.execMenu("pc-xhs-shield-select-text-search-position",()=>{this.shieldSelectTextVisibleSearchPosition();}),a.execMenu("pc-xhs-shield-topToolbar",()=>{this.shieldTopToolbar();}),h.ready(()=>{a.execMenu("pc-xhs-shield-login-dialog",()=>{this.shieldLoginContainer();});});},shieldLoginContainer(){i.info("添加屏蔽登录弹窗CSS，监听登录弹窗出现"),v(`
        /* 登录弹窗 */
        .login-container{
            display: none !important;
        }
        `),u.mutationObserver(document.body,{config:{subtree:!0,childList:!0},callback:()=>{let e=document.querySelector(".login-container .icon-btn-wrapper");e&&(e.click(),i.success("登录弹窗出现，关闭"));}});},shieldSelectTextVisibleSearchPosition(){i.info("屏蔽选择文字弹出的搜索提示"),v(`
        .search-position{
            display: none !important;
        }
        `);},shieldTopToolbar(){i.info("【屏蔽】顶部工具栏"),v(`
        #headerContainer{
            display: none !important;
        }
        /* 主内容去除padding */
        #mfContainer{
            padding-top: 0 !important;
        }
        .outer-link-container{
            margin-top: 0 !important;
            height: 100dvh !important;
            padding: 30px 0;
        }
        #noteContainer{
            height: 100%;
        }
        `);}},ke={getSearchUrl(e){return `https://www.xiaohongshu.com/search_result?keyword=${e}&source=web_explore_feed`}},Me={init(){(a.getValue("pc-xhs-search-open-blank-btn")||a.getValue("pc-xhs-search-open-blank-keyboard-enter"))&&this.optimizationSearch(),a.execMenu("pc-xhs-article-fullWidth",()=>{this.fullWidth();});},optimizationSearch(){function e(t,o=!0){{let s=document.querySelector("#search-input");if(s){let r=s.value,n=ke.getSearchUrl(r);i.info("搜索内容: "+r),window.open(n,o?"_blank":"_self");}else g.error("未找到搜索的输入框");}}u.waitNode("#search-input").then(t=>{t.placeholder="搜索小红书",a.execMenu("pc-xhs-search-open-blank-keyboard-enter",()=>{u.listenKeyboard(t,"keydown",(o,s,r,n)=>{o==="Enter"&&!r.length&&(i.info("按下回车键"),u.preventEvent(n),t.blur(),e());});});}),u.waitNode("#search-input + .input-button .search-icon").then(t=>{a.execMenu("pc-xhs-search-open-blank-btn",()=>{h.on(t,"click",o=>{u.preventEvent(o),i.info("点击搜索按钮"),e();},{capture:!0});});});},fullWidth(){i.info("笔记宽屏");let e=a.getValue("pc-xhs-article-fullWidth-widthSize",90);v(`
		.main-container .main-content{
			padding-left: 0 !important;
		}
		.outer-link-container{
			width: 100dvw !important;
		}
		/* 隐藏左侧工具栏 */
		.main-container .side-bar{
			display: none !important;
		}
		#noteContainer{
			width: ${e}dvw;
		}
		`);}},G={init(){a.execMenu("pc-xhs-hook-vue",()=>{Q.webPackVue();}),a.execMenu("pc-xhs-allowCopy",()=>{G.allowPCCopy();}),a.execMenu("pc-xhs-open-blank-article",()=>{G.openBlankArticle();}),ye.init(),Me.init();},allowPCCopy(){i.success("允许复制文字"),h.on(x,"copy",void 0,function(e){u.preventEvent(e);let t=x.getSelection();return t?u.setClip(t.toString()):i.error("未选中任何内容"),!1},{capture:!0});},openBlankArticle(){i.success("新标签页打开文章"),h.on(document,"click",".feeds-container .note-item",function(e){u.preventEvent(e);let o=e.target.querySelector("a[href]");o&&o.href?(i.info("跳转文章: "+o.href),window.open(o.href,"_blank")):g.error("未找到文章链接");},{capture:!0});}};v(`
.qmsg svg.animate-turn {
    fill: none;
}
`);a.init();let ie=u.isPhone(),I="change_env_set",k=T(I);oe.add({key:I,text:`⚙ 自动: ${ie?"移动端":"PC端"}`,autoReload:!1,isStoreValue:!1,showText(e){return k==null?e:e+` 手动: ${k==1?"移动端":k==2?"PC端":"未知"}`},callback:()=>{let e=[0,1,2],t=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!t)return;let o=parseInt(t);if(isNaN(o)){g.error("输入的不是规范的数字");return}if(!e.includes(o)){g.error("输入的值必须是0或1或2");return}o==0?ee(I):j(I,o);}});k!=null?(i.info(`手动判定为${k===1?"移动端":"PC端"}`),k==1?X.init():k==2?G.init():(g.error("意外，手动判定的值不在范围内"),ee(I))):ie?(i.info("自动判定为移动端"),X.init()):(i.info("自动判定为PC端"),G.init());

})(Qmsg, Utils, DOMUtils);