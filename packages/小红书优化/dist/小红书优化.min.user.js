// ==UserScript==
// @name         小红书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.6.23
// @author       WhiteSevs
// @description  屏蔽登录弹窗、屏蔽广告、优化评论浏览、优化图片浏览、允许复制、禁止唤醒App、禁止唤醒弹窗、修复正确跳转等
// @license      GPL-3.0-only
// @icon         https://fe-video-qc.xhscdn.com/fe-platform/ed8fe781ce9e16c1bfac2cd962f0721edabe2e49.ico
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://www.xiaohongshu.com/*
// @require      https://update.greasyfork.org/scripts/494167/1376186/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/449471/1360565/Viewer.js
// @require      https://update.greasyfork.org/scripts/456485/1398647/pops.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.1.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@1.5.8/dist/index.umd.js
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

(function (g, W, se) {
  'use strict';

  var v=typeof GM_addStyle<"u"?GM_addStyle:void 0,ee=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,T=typeof GM_getValue<"u"?GM_getValue:void 0,U=typeof GM_info<"u"?GM_info:void 0,ae=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,j=typeof GM_setValue<"u"?GM_setValue:void 0,ce=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,ue=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,x=typeof unsafeWindow<"u"?unsafeWindow:void 0,F=window;const de="小红书优化",c=W.noConflict(),f=se.noConflict(),q=F.pops||x.pops,me=F.Viewer||x.Viewer,n=new c.Log(U,x.console||F.console);var Y;const z=((Y=U==null?void 0:U.script)==null?void 0:Y.name)||de,te=!1;n.config({debug:te,logMaxCount:1e3,autoClearConsole:!0,tag:!0});g.config(Object.defineProperties({html:!0,autoClose:!0,showClose:!1},{position:{get(){return a.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return a.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return a.getValue("qmsg-config-showreverse",!0)}},zIndex:{get(){let e=W.getMaxZIndex(10),t=q.config.Utils.getPopsMaxZIndex(10).zIndex;return W.getMaxValue(e,t)}}}));const oe=new c.GM_Menu({GM_getValue:T,GM_setValue:j,GM_registerMenuCommand:ae,GM_unregisterMenuCommand:ce}),$=new c.Httpx(ue);$.interceptors.response.use(void 0,e=>(n.error(["拦截器-请求错误",e]),e.type==="onabort"?g.warning("请求取消"):e.type==="onerror"?g.error("请求异常"):e.type==="ontimeout"?g.error("请求超时"):g.error("其它错误"),e));$.config({logDetails:te});x.Object.defineProperty,x.Function.prototype.apply,x.Function.prototype.call,x.Element.prototype.appendChild,x.setTimeout;const k="GM_Panel",D="data-key",L="data-default-value",p=function(e,t,o,r,l){let i={text:e,type:"switch",description:l,attributes:{},getValue(){return !!a.getValue(t,o)},callback(u,s){n.success(`${s?"开启":"关闭"} ${e}`),a.setValue(t,!!s);},afterAddToUListCallBack:void 0};return i.attributes&&(i.attributes[D]=t,i.attributes[L]=!!o),i},pe={id:"little-red-book-panel-config-shield",title:"屏蔽",forms:[{text:"功能",type:"forms",forms:[p("【屏蔽】广告","little-red-book-shieldAd",!0,void 0,"如：App内打开"),p("【屏蔽】底部搜索发现","little-red-book-shieldBottomSearchFind",!0,void 0,"建议开启"),p("【屏蔽】底部工具栏","little-red-book-shieldBottomToorBar",!0,void 0,"建议开启")]}]},he={id:"little-red-book-panel-config-home",title:"主页",forms:[{text:"劫持/拦截",type:"forms",forms:[p("劫持点击事件","little-red-book-repariClick",!0,void 0,"可阻止点击跳转至下载页面")]}]},fe={id:"little-red-book-panel-config-note",title:"笔记",forms:[{text:"功能",type:"forms",forms:[p("优化评论浏览","little-red-book-optimizeCommentBrowsing",!0,void 0,"加载评论，未登录最多查看1页评论(注：楼中楼评论已失效，api无法获取楼中楼评论，需要请求头X-T、X-S、X-B3-Traceid)"),p("优化图片浏览","little-red-book-optimizeImageBrowsing",!0,void 0,"更方便的浏览图片"),p("允许复制","little-red-book-allowCopy",!0,void 0,"可以复制笔记的内容")]},{text:"视频笔记",type:"forms",forms:[p("优化视频描述","little-red-book-optimizeVideoNoteDesc",!0,void 0,"让视频描述可以滚动显示更多"),p("【屏蔽】作者热门笔记","little-red-book-shieldAuthorHotNote",!0,void 0,"建议开启"),p("【屏蔽】热门推荐","little-red-book-shieldHotRecommendNote",!0,void 0,"建议开启")]},{text:"劫持/拦截",type:"forms",forms:[p("劫持webpack-弹窗","little-red-book-hijack-webpack-mask",!0,void 0,"如：打开App弹窗、登录弹窗"),p("劫持webpack-唤醒App","little-red-book-hijack-webpack-scheme",!0,void 0,"禁止跳转商店小红书详情页/小红书")]}]},ge={id:"little-red-book-panel-config-other",title:"其它",forms:[{text:"劫持/拦截",type:"forms",forms:[p("劫持Vue","little-red-book-hijack-vue",!1,void 0,"恢复__vue__属性")]}]},B=function(e,t,o,r,l,i){let u=[];typeof r=="function"?u=r():u=r;let s={text:e,type:"select",description:i,attributes:{},getValue(){return a.getValue(t,o)},callback(d,m,h){a.setValue(t,m),typeof l=="function"&&l(d,m,h);},data:u};return s.attributes&&(s.attributes[D]=t,s.attributes[L]=o),s},xe={id:"xhs-panel-config-common",title:"通用",forms:[{text:"功能",type:"forms",forms:[p("允许复制","pc-xhs-allowCopy",!0,void 0,"可以选择文字并复制"),p("新标签页打开文章","pc-xhs-open-blank-article",!1,void 0,"点击文章不会在本页展开，会打开新标签页")]},{text:"搜索",type:"forms",forms:[p("新标签页打开-搜索按钮","pc-xhs-search-open-blank-btn",!1,void 0,"点击右边的搜索按钮直接新标签页打开搜索内容"),p("新标签页打开-回车键","pc-xhs-search-open-blank-keyboard-enter",!1,void 0,"按下回车键直接新标签页打开搜索内容")]},{text:"劫持/拦截",type:"forms",forms:[p("劫持Vue","pc-xhs-hook-vue",!1,void 0,"恢复__vue__属性")]},{text:"Toast配置",type:"forms",forms:[B("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,o)=>{n.info("设置当前Qmsg弹出位置"+o);},"Toast显示在页面九宫格的位置"),B("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),p("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]},be={id:"xhs-panel-config-shield",title:"屏蔽",forms:[{text:"功能",type:"forms",forms:[p("【屏蔽】广告","pc-xhs-shieldAd",!0,void 0,"屏蔽元素"),p("【屏蔽】登录弹窗","pc-xhs-shield-login-dialog",!0,void 0,"屏蔽会自动弹出的登录弹窗"),p("【屏蔽】选择文字弹出的搜索提示","pc-xhs-shield-select-text-search-position",!1,void 0,"屏蔽元素"),p("【屏蔽】顶部工具栏","pc-xhs-shield-topToolbar",!1,void 0,"屏蔽元素")]}]},ve=function(e,t,o,r,l,i,u,s){let d={text:e,type:"slider",description:s,attributes:{},getValue(){return a.getValue(t,o)},getToolTipContent(m){return typeof u=="function"?u(m):`${m}`},callback(m,h){typeof i=="function"&&i(m,h)||a.setValue(t,h);},min:r,max:l};return d.attributes&&(d.attributes[D]=t,d.attributes[L]=o),d},we={id:"xhs-panel-config-article",title:"笔记",forms:[{text:"笔记宽屏",type:"forms",forms:[p("启用","pc-xhs-article-fullWidth",!1,void 0,`让笔记占据宽屏，当页面可视宽度>=960px时才会触发该功能，当前页面可视宽度: ${window.innerWidth}px`),ve("占据范围","pc-xhs-article-fullWidth-widthSize",90,30,100,(e,t)=>{let o=document.querySelector("#noteContainer");if(!o){n.error("未找到笔记容器");return}o.style.width=`${t}dvw`;},e=>`${e}%，默认：90%`,"调整笔记页面占据的页面范围")]}]},_e={id:"little-red-book-panel-config-common",title:"通用",forms:[{text:"Toast配置",type:"forms",forms:[B("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,o)=>{n.info("设置当前Qmsg弹出位置"+o);},"Toast显示在页面九宫格的位置"),B("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),p("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]},w={data:null,oneSuccessExecMenu:null,onceExec:null,listenData:null},a={$data:{get data(){return w.data==null&&(w.data=new c.Dictionary),w.data},get oneSuccessExecMenu(){return w.oneSuccessExecMenu==null&&(w.oneSuccessExecMenu=new c.Dictionary),w.oneSuccessExecMenu},get onceExec(){return w.onceExec==null&&(w.onceExec=new c.Dictionary),w.onceExec},get scriptName(){return z},key:k,attributeKeyName:D,attributeDefaultValueName:L},$listener:{get listenData(){return w.listenData==null&&(w.listenData=new c.Dictionary),w.listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},initExtensionsMenu(){x.top===x.self&&oe.add([{key:"show_pops_panel_setting",text:"⚙ 移动端-设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPanel();}},{key:"show_pops_panel_setting",text:"⚙ PC-设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPCPanel();}}]);},initPanelDefaultValue(){let e=this;function t(r){if(!r.attributes)return;let l=r.attributes[D],i=r.attributes[L];if(l==null){n.warn(["请先配置键",r]);return}e.$data.data.has(l)&&n.warn("请检查该key(已存在): "+l),e.$data.data.set(l,i);}let o=this.getPanelContentConfig().concat(this.getPCPanelContentConfig());for(let r=0;r<o.length;r++){let l=o[r];if(!l.forms)continue;let i=l.forms;for(let u=0;u<i.length;u++){let s=i[u];if(s.forms){let d=s.forms;for(let m=0;m<d.length;m++)t(d[m]);}else t(s);}}},setValue(e,t){let o=T(k,{}),r=o[e];o[e]=t,j(k,o),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,r,t);},getValue(e,t){let r=T(k,{})[e];return r??(this.$data.data.has(e)?this.$data.data.get(e):t)},deleteValue(e){let t=T(k,{}),o=t[e];Reflect.deleteProperty(t,e),j(k,t),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,o,void 0);},addValueChangeListener(e,t){let o=Math.random();return this.$listener.listenData.set(e,{id:o,key:e,callback:t}),o},removeValueChangeListener(e){let t=null;for(const[o,r]of this.$listener.listenData.entries())if(r.id===e){t=o;break}typeof t=="string"?this.$listener.listenData.delete(t):console.warn("没有找到对应的监听器");},hasKey(e){let t=T(k,{});return e in t},execMenu(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){n.warn(`${e} 键不存在`);return}let o=a.getValue(e);o&&t(o);},execMenuOnce(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){n.warn(`${e} 键不存在`);return}let o=a.getValue(e);if(o){if(this.$data.oneSuccessExecMenu.has(e))return;t(o),this.$data.oneSuccessExecMenu.set(e,1);}},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(t(),this.$data.onceExec.set(e,1));},showPanel(){let{UIWidth:e,UIHeight:t}=this.getUISizeInfo();q.panel({title:{text:`${z}-设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},width:e,height:t,drag:!0,only:!0});},showPCPanel(){let{UIWidth:e,UIHeight:t}=this.getUISizeInfo();q.panel({title:{text:`${z}-设置`,position:"center",html:!1,style:""},content:this.getPCPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},width:e,height:t,drag:!0,only:!0});},getUISizeInfo(){let e="92dvw",t="80dvh";return window.outerWidth>800&&(e="650px"),window.outerHeight>600&&(t="500px"),{UIWidth:e,UIHeight:t}},getPanelContentConfig(){return [_e,pe,he,fe,ge]},getPCPanelContentConfig(){return [xe,we,be]}},Q={webpackChunkranchi(){let e;Object.defineProperty(x,"webpackChunkranchi",{get(){return e},set(o){e=o;const r=e.push;e.push=function(...l){return l[0][0],typeof l[0][1]=="object"&&Object.keys(l[0][1]).forEach((i,u)=>{if(typeof l[0][1][i]=="function"&&l[0][1][i].toString().includes("是否打开小红书App?")&&a.getValue("little-red-book-hijack-webpack-mask"))n.success(["成功劫持各种弹窗/遮罩层："+i]),l[0][1][i]=function(){};else if(typeof l[0][1][i]=="function"&&l[0][1][i].toString().startsWith("function(e,n,t){t.d(n,{Z:function(){return y}});")&&l[0][1][i].toString().includes("jumpToApp")&&a.getValue("little-red-book-hijack-webpack-scheme")){let s=l[0][1][i];l[0][1][i]=function(...d){n.success(["成功劫持scheme唤醒",d]);let m=d[2].d;d[2].d=function(...h){var E;if(h.length===2&&typeof((E=h[1])==null?void 0:E.Z)=="function"){let H=h[1].Z;H.toString()==="function(){return y}"&&(h[1].Z=function(...V){let C=H.call(this,...V);return typeof C=="function"&&C.toString().includes("jumpToApp")?function(){return {jumpToApp(M){var b;if(n.success(["拦截唤醒",M]),(b=M.deeplink)!=null&&b.startsWith("xhsdiscover://user/")){let _=`https://www.xiaohongshu.com/user/profile/${M.deeplink.replace(/^xhsdiscover:\/\/user\//,"")}`;window.open(_,"_blank");}}}}:C});}m.call(this,...h);},s.call(this,...d);};}}),r.call(this,...l)};}});},webPackVue(){let e=x.Function.prototype.apply,t=!1;x.Function.prototype.apply=function(...o){var l,i,u,s,d,m;const r=e.call(this,...o);if(!t&&o.length===2&&((l=o[0])!=null&&l.addRoute)&&((i=o[0])!=null&&i.currentRoute)&&((u=o[0])!=null&&u.getRoutes)&&((s=o[0])!=null&&s.hasRoute)&&((d=o[0])!=null&&d.install)&&((m=o[0])!=null&&m.removeRoute)){t=!0;let h=o[1][0];n.success(["成功劫持vue，version版本：",h.version]),h.mixin({mounted:function(){this.$el.__Ivue__=this;}});}return r};}},ke=`/* 底部的App内打开 */\r
.bottom-button-box,\r
/* 顶部的打开看看 */\r
.nav-bar-box,\r
/* 首页-顶部的打开看看 */\r
.launch-app-container {\r
  display: none !important;\r
}\r
`,K={isNotePage(){return globalThis.location.pathname.startsWith("/discovery/item/")},isUserHomePage(){return globalThis.location.pathname.startsWith("/user/profile/")},isHomePage(){return globalThis.location.href==="https://www.xiaohongshu.com/"||globalThis.location.href==="https://www.xiaohongshu.com"},isSearchPage(){return globalThis.location.pathname.startsWith("/search_result/")}},J="https://edith.xiaohongshu.com",R={async getPageInfo(e,t="",o="",r="jpg,webp"){const l="/api/sns/web/v2/comment/page",i={note_id:e,cursor:t,top_comment_id:o,image_formats:r},u=l+"?"+c.toSearchParamsStr(i);let s=await $.get(`${J}${u}`,{headers:{Accept:"application/json, text/plain, */*","User-Agent":c.getRandomPCUA(),Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"}});if(!s.status)return;let d=c.toJSON(s.data.responseText);if(n.info(["获取页信息",d]),d.code===0||d.success)return d.data;if(d.code===-101)return;g.error(d.msg);},async getLzlPageInfo(e="",t="",o=10,r="",l="jpg,webp,avif",i=""){const u="/api/sns/web/v2/comment/sub/page";let s={note_id:e,root_comment_id:t,num:o,cursor:r,image_formats:l,top_comment_id:i};u+""+c.toSearchParamsStr(s);let d=`${J}${u}?${c.toSearchParamsStr(s)}`,m=await $.get(d,{headers:{Accept:"application/json, text/plain, */*","User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Host:"edith.xiaohongshu.com",Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"},onerror(){}});if(!m.status){m.data.status===406&&c.isNotNull(m.data.responseText)?c.toJSON(m.data.responseText).code==-1?g.error("获取楼中楼信息失败，验证x-s、x-t、x-s-common失败"):g.error("获取楼中楼信息失败"):g.error("请求异常"),n.error(["获取楼中楼信息失败",m]);return}let h=c.toJSON(m.data.responseText);if(n.info(["获取楼中楼页信息",h]),h.code===0||h.success)return h.data;g.error(h.msg);},async getSearchRecommend(e){let t=await $.get(`https://edith.xiaohongshu.com/api/sns/web/v1/search/recommend?keyword=${e}`,{fetch:!0});if(!t.status)return;let o=c.toJSON(t.data.responseText);if(o.success||o.code===1e3)return o.data.sug_items}},N={allowCopy(){n.info("允许复制"),v(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `);},shieldBottomSearchFind(){n.info("屏蔽底部搜索发现"),v(`
        .hotlist-container,
        /* 一大块空白区域 */
        .safe-area-bottom.margin-placeholder{
            display: none !important;
        }
        `);},shieldBottomToorBar(){n.info("屏蔽底部工具栏"),v(`
        .engage-bar-container{
            display: none !important;
        }`);},shieldAuthorHotNote(){n.info("屏蔽视频笔记的作者热门笔记"),v(`
        .user-notes-box.user-notes-clo-layout-container{
            display: none !important;
        }`);},shieldHotRecommendNote(){n.info("屏蔽视频笔记的热门推荐"),v(`
        #new-note-view-container .recommend-box{
            display: none !important;
        }`);}},ye={init(){},optimizeVideoNoteDesc(){n.info("优化视频笔记的描述（可滚动）"),v(`
    .author-box .author-desc-wrapper .author-desc{
      max-height: 70px !important;
      overflow: auto !important;
    }
    /* 展开按钮 */
    .author-box .author-desc-wrapper .author-desc .author-desc-trigger{
      display: none !important;
    }`);}},O={init(){(a.getValue("little-red-book-hijack-webpack-mask")||a.getValue("little-red-book-hijack-webpack-scheme"))&&(n.info("劫持webpack"),Q.webpackChunkranchi()),a.execMenu("little-red-book-shieldBottomSearchFind",()=>{N.shieldBottomSearchFind();}),a.execMenu("little-red-book-shieldBottomToorBar",()=>{N.shieldBottomToorBar();}),a.execMenu("little-red-book-optimizeImageBrowsing",()=>{O.optimizeImageBrowsing();}),a.execMenu("little-red-book-optimizeVideoNoteDesc",()=>{ye.optimizeVideoNoteDesc();}),a.execMenu("little-red-book-shieldAuthorHotNote",()=>{N.shieldAuthorHotNote();}),a.execMenu("little-red-book-shieldHotRecommendNote",()=>{N.shieldHotRecommendNote();}),f.ready(function(){a.execMenu("little-red-book-optimizeCommentBrowsing",()=>{O.optimizeCommentBrowsing();});});},optimizeCommentBrowsing(){n.info("优化评论浏览");const e={QmsgLoading:void 0,scrollFunc:void 0,noteData:{},commentData:{},emojiMap:{},emojiNameList:[],currentCursor:void 0,commentContainer:void 0,init(){var t;this.emojiMap=((t=c.toJSON(x.localStorage.getItem("redmoji")))==null?void 0:t.redmojiMap)||{},this.emojiNameList=Object.keys(this.emojiMap),this.scrollFunc=new c.LockFunction(this.scrollEvent,this),e.noteData=x.__INITIAL_STATE__.noteData.data.noteData,e.commentData=x.__INITIAL_STATE__.noteData.data.commentData,n.info(["笔记数据",e.noteData]),n.info(["评论数据",e.commentData]);},getCommentHTML(t){return `
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
                            <span class="little-red-book-comments-create-time">${c.formatTime(t.create_time)}</span>
                            <span class="little-red-book-comments-location">${t.ip_location}</span>
                        </div>
                    </div>
                </div>
              </div>
            `},getCommentElement(t){var C,M;let o=t.content,r=t.create_time||parseInt(t.time),l=t.id,i=t.ip_location||t.ipLocation,u=t.sub_comment_has_more,s=parseInt(t.sub_comment_count)||0,d=t.sub_comment_cursor,m=t.sub_comments||t.subComments,h=(t.user_info||t.user).image,E=(t.user_info||t.user).nickname,H=((C=t==null?void 0:t.user_info)==null?void 0:C.user_id)||((M=t==null?void 0:t.user)==null?void 0:M.userId);o=e.converContent(o);let V=f.createElement("div",{className:"little-red-book-comments-item",innerHTML:`
            <div class="little-red-book-comments-parent">
              ${e.getCommentHTML({user_id:H,user_avatar:h,user_nickname:E,content:o,create_time:r,ip_location:i})}
            </div>
              `});if(u&&Array.isArray(m)&&(m.forEach(b=>{let I=f.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:e.getCommentHTML({user_id:b.user_info.user_id,user_avatar:b.user_info.image,user_nickname:b.user_info.nickname,content:e.converContent(b.content),create_time:b.create_time,ip_location:b.ip_location})});V.appendChild(I);}),s!==m.length)){let b=s-m.length,I=d,_=f.createElement("div",{className:"little-red-book-comments-reply-show-more",innerText:`展开 ${b} 条回复`});async function Z(){let re=g.loading("加载中，请稍后..."),P=await R.getLzlPageInfo(e.noteData.id,l,10,I,void 0);re.close(),P&&(I=P.cursor,b=b-P.comments.length,_.innerText=`展开 ${b} 条回复`,P.comments.forEach(S=>{let le=f.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:e.getCommentHTML({user_id:S.user_info.user_id,user_avatar:S.user_info.image,user_nickname:S.user_info.nickname,content:e.converContent(S.content),create_time:S.create_time,ip_location:S.ip_location})});f.before(_,le);}),P.has_more||(f.off(_,"click",void 0,Z,{capture:!0}),_.remove()));}f.on(_,"click",void 0,Z,{capture:!0}),V.appendChild(_);}return V},converContent(t){return e.emojiNameList.forEach(o=>{t.includes(o)&&(t=t.replaceAll(o,`<img class="little-red-book-note-content-emoji" crossorigin="anonymous" src="${e.emojiMap[o]}">`));}),t},async scrollEvent(){if(!c.isNearBottom(window.innerHeight/3))return;this.QmsgLoading==null&&(this.QmsgLoading=g.loading("加载中，请稍后..."));let t=await R.getPageInfo(e.noteData.id,e.currentCursor);if(this.QmsgLoading&&(this.QmsgLoading.close(),this.QmsgLoading=void 0),!!t&&(e.currentCursor=t.cursor,t.comments.forEach(o=>{let r=e.getCommentElement(o);e.commentContainer.appendChild(r);}),!t.has_more)){g.info("已加载全部评论"),e.removeScrollEventListener();return}},addSrollEventListener(){n.success("添加滚动监听事件"),f.on(document,"scroll",void 0,e.scrollFunc.run,{capture:!0,once:!1,passive:!0});},removeScrollEventListener(){n.success("移除滚动监听事件"),f.off(document,"scroll",void 0,e.scrollFunc.run,{capture:!0});}};c.waitNode(".narmal-note-container").then(async()=>{n.info("优化评论浏览-笔记元素出现");let t=document.querySelector(".note-view-container"),o=g.loading("获取评论中，请稍后..."),r=f.createElement("div",{className:"little-red-book-comments-container",innerHTML:`
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
          `});e.commentContainer=r,e.init();let l=f.createElement("div",{className:"little-red-book-comments-total",innerHTML:`共 ${e.noteData.comments} 条评论`});r.appendChild(l);let i=await R.getPageInfo(e.noteData.id);await c.sleep(800),i?(e.currentCursor=i.cursor,i.comments.forEach(u=>{let s=e.getCommentElement(u);r.appendChild(s);}),i.has_more&&e.addSrollEventListener()):e.commentData&&e.commentData.comments&&(n.info("从固定的评论中加载"),e.commentData.comments.forEach(u=>{let s=e.getCommentElement(u);r.appendChild(s);})),o.close(),f.append(t,r);});},optimizeImageBrowsing(){n.info("优化图片浏览");function e(t=[],o=0){let r="";t.forEach(u=>{r+=`<li><img data-src="${u}" loading="lazy"></li>`;});let l=f.createElement("ul",{innerHTML:r}),i=new me(l,{inline:!1,url:"data-src",zIndex:c.getMaxZIndex()+100,hidden:()=>{i.destroy();}});o=o<0?0:o,i.view(o),i.zoomTo(1),i.show();}f.on(document,"click",".note-image-box",function(t){let o=t.target,r=o.querySelector("img"),l=[],i=[];o.closest(".onix-carousel-item")?i=Array.from(o.closest(".onix-carousel-item").parentElement.querySelectorAll("img")):i=[r];let u=i.findIndex(s=>s==r);i.forEach(s=>{let d=s.getAttribute("src")||s.getAttribute("data-src")||s.getAttribute("alt");d&&l.push(d);}),n.success(["点击浏览图片👉",l[u]]),e(l,u);});}},ne={init(){f.ready(()=>{a.execMenu("little-red-book-repariClick",()=>{ne.repariClick();});});},repariClick(){n.info("修复正确的点击跳转"),f.on(document,"click",void 0,function(e){var o,r,l,i,u;let t=e.target;if(n.info(["点击的按钮元素",t]),(o=t==null?void 0:t.className)!=null&&o.includes("follow-btn"))n.success("点击-关注按钮");else if(t!=null&&t.closest("button.reds-button.message-btn"))n.success("点击-私信按钮");else if(t!=null&&t.closest("div.reds-tab-item"))n.success("点击-笔记/收藏按钮");else if(t!=null&&t.closest("section.reds-note-card")){n.success("点击-笔记卡片");let s=t==null?void 0:t.closest("section.reds-note-card");s.getAttribute("id")||((i=(l=(r=c.toJSON(s.getAttribute("impression")))==null?void 0:r.noteTarget)==null?void 0:l.value)==null?void 0:i.noteId)?window.open(`https://www.xiaohongshu.com/discovery/item/${(u=t==null?void 0:t.closest("section.reds-note-card"))==null?void 0:u.getAttribute("id")}`,"_blank"):g.error("获取笔记note_id失败");}return c.preventEvent(e),!1},{capture:!0});}},X={init(){a.execMenu("little-red-book-hijack-vue",()=>{n.info("劫持页面的Vue"),Q.webPackVue();}),a.execMenu("little-red-book-shieldAd",()=>{n.info("注入默认屏蔽CSS"),v(ke);}),a.execMenu("little-red-book-allowCopy",()=>{X.allowCopy();}),K.isNotePage()?O.init():K.isUserHomePage()&&ne.init();},allowCopy(){n.info("允许复制文字"),v(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `);}},Ce="",Me={init(){a.execMenu("pc-xhs-shieldAd",()=>{v(Ce);}),a.execMenu("pc-xhs-shield-select-text-search-position",()=>{this.shieldSelectTextVisibleSearchPosition();}),a.execMenu("pc-xhs-shield-topToolbar",()=>{this.shieldTopToolbar();}),f.ready(()=>{a.execMenu("pc-xhs-shield-login-dialog",()=>{this.shieldLoginContainer();});});},shieldLoginContainer(){n.info("添加屏蔽登录弹窗CSS，监听登录弹窗出现"),v(`
        /* 登录弹窗 */
        .login-container{
            display: none !important;
        }
        `),c.mutationObserver(document.body,{config:{subtree:!0,childList:!0},callback:()=>{let e=document.querySelector(".login-container .icon-btn-wrapper");e&&(e.click(),n.success("登录弹窗出现，关闭"));}});},shieldSelectTextVisibleSearchPosition(){n.info("屏蔽选择文字弹出的搜索提示"),v(`
        .search-position{
            display: none !important;
        }
        `);},shieldTopToolbar(){n.info("【屏蔽】顶部工具栏"),v(`
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
        `);}},Se={getSearchUrl(e){return `https://www.xiaohongshu.com/search_result?keyword=${e}&source=web_explore_feed`}},Te={init(){(a.getValue("pc-xhs-search-open-blank-btn")||a.getValue("pc-xhs-search-open-blank-keyboard-enter"))&&this.optimizationSearch(),a.execMenu("pc-xhs-article-fullWidth",()=>{this.fullWidth();});},optimizationSearch(){function e(t,o=!0){{let r=document.querySelector("#search-input");if(r){let l=r.value,i=Se.getSearchUrl(l);n.info("搜索内容: "+l),window.open(i,o?"_blank":"_self");}else g.error("未找到搜索的输入框");}}c.waitNode("#search-input").then(t=>{t.placeholder="搜索小红书",a.execMenu("pc-xhs-search-open-blank-keyboard-enter",()=>{c.listenKeyboard(t,"keydown",(o,r,l,i)=>{o==="Enter"&&!l.length&&(n.info("按下回车键"),c.preventEvent(i),t.blur(),e());});});}),c.waitNode("#search-input + .input-button .search-icon").then(t=>{a.execMenu("pc-xhs-search-open-blank-btn",()=>{f.on(t,"click",o=>{c.preventEvent(o),n.info("点击搜索按钮"),e();},{capture:!0});});});},fullWidth(){n.info("笔记宽屏");let e=a.getValue("pc-xhs-article-fullWidth-widthSize",90);v(`
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
		`);}},G={init(){a.execMenu("pc-xhs-hook-vue",()=>{Q.webPackVue();}),a.execMenu("pc-xhs-allowCopy",()=>{G.allowPCCopy();}),a.execMenu("pc-xhs-open-blank-article",()=>{G.openBlankArticle();}),Me.init(),Te.init();},allowPCCopy(){n.success("允许复制文字"),f.on(x,"copy",void 0,function(e){c.preventEvent(e);let t=x.getSelection();return t?c.setClip(t.toString()):n.error("未选中任何内容"),!1},{capture:!0});},openBlankArticle(){n.success("新标签页打开文章"),f.on(document,"click",".feeds-container .note-item",function(e){c.preventEvent(e);let o=e.target.querySelector("a[href]");o&&o.href?(n.info("跳转文章: "+o.href),window.open(o.href,"_blank")):g.error("未找到文章链接");},{capture:!0});}};v(`
.qmsg svg.animate-turn {
    fill: none;
}
`);a.init();let ie=c.isPhone(),A="change_env_set",y=T(A);oe.add({key:A,text:`⚙ 自动: ${ie?"移动端":"PC端"}`,autoReload:!1,isStoreValue:!1,showText(e){return y==null?e:e+` 手动: ${y==1?"移动端":y==2?"PC端":"未知"}`},callback:()=>{let e=[0,1,2],t=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!t)return;let o=parseInt(t);if(isNaN(o)){g.error("输入的不是规范的数字");return}if(!e.includes(o)){g.error("输入的值必须是0或1或2");return}o==0?ee(A):j(A,o);}});y!=null?(n.info(`手动判定为${y===1?"移动端":"PC端"}`),y==1?X.init():y==2?G.init():(g.error("意外，手动判定的值不在范围内"),ee(A))):ie?(n.info("自动判定为移动端"),X.init()):(n.info("自动判定为PC端"),G.init());

})(Qmsg, Utils, DOMUtils);