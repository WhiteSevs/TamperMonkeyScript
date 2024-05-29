// ==UserScript==
// @name         小红书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.5.29
// @author       WhiteSevs
// @description  屏蔽登录弹窗、屏蔽广告、优化评论浏览、优化图片浏览、允许复制、禁止唤醒App、禁止唤醒弹窗、修复正确跳转等
// @license      GPL-3.0-only
// @icon         https://fe-video-qc.xhscdn.com/fe-platform/ed8fe781ce9e16c1bfac2cd962f0721edabe2e49.ico
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://www.xiaohongshu.com/*
// @require      https://update.greasyfork.org/scripts/494167/1376186/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/449471/1360565/Viewer.js
// @require      https://update.greasyfork.org/scripts/456485/1384984/pops.js
// @require      https://cdn.jsdelivr.net/npm/qmsg@1.1.0/dist/index.umd.js
// @require      https://cdn.jsdelivr.net/npm/@whitesev/utils@1.2.1/dist/index.umd.js
// @require      https://cdn.jsdelivr.net/npm/@whitesev/domutils@1.1.0/dist/index.umd.js
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

(function (f, ie, re) {
  'use strict';

  var w=typeof GM_addStyle<"u"?GM_addStyle:void 0,Z=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,S=typeof GM_getValue<"u"?GM_getValue:void 0,H=typeof GM_info<"u"?GM_info:void 0,le=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,D=typeof GM_setValue<"u"?GM_setValue:void 0,se=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,ae=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,h=typeof unsafeWindow<"u"?unsafeWindow:void 0,O=window;const ce="小红书优化",a=ie.noConflict(),m=re.noConflict(),q=O.pops||h.pops,ue=O.Viewer||h.Viewer,i=new a.Log(H,h.console||O.console);var K;const j=((K=H==null?void 0:H.script)==null?void 0:K.name)||ce,J=!1;i.config({debug:J,logMaxCount:2e4,autoClearConsole:!0,tag:!0});f.config({position:"bottom",html:!0,maxNums:5,autoClose:!0,showClose:!1,showReverse:!0});const Y=new a.GM_Menu({GM_getValue:S,GM_setValue:D,GM_registerMenuCommand:le,GM_unregisterMenuCommand:se}),I=new a.Httpx(ae);I.config({logDetails:J,onabort(){f.warning("请求取消");},ontimeout(){f.error("请求超时");},onerror(t){f.error("请求异常"),i.error(["httpx-onerror 请求异常",t]);}});h.Object.defineProperty,h.Function.prototype.apply,h.Function.prototype.call,h.Element.prototype.appendChild,h.setTimeout;const v="GM_Panel",B="data-key",G="data-default-value",p=function(t,e,o,r,l){let n={text:t,type:"switch",description:l,attributes:{},getValue(){return !!s.getValue(e,o)},callback(c,u){i.success(`${u?"开启":"关闭"} ${t}`),s.setValue(e,!!u);},afterAddToUListCallBack:void 0};return n.attributes&&(n.attributes[B]=e,n.attributes[G]=!!o),n},de={id:"little-red-book-panel-config-shield",title:"屏蔽",forms:[{text:"功能",type:"forms",forms:[p("【屏蔽】广告","little-red-book-shieldAd",!0,void 0,"如：App内打开"),p("【屏蔽】底部搜索发现","little-red-book-shieldBottomSearchFind",!0,void 0,"建议开启"),p("【屏蔽】底部工具栏","little-red-book-shieldBottomToorBar",!0,void 0,"建议开启")]}]},me={id:"little-red-book-panel-config-home",title:"主页",forms:[{text:"劫持/拦截",type:"forms",forms:[p("劫持点击事件","little-red-book-repariClick",!0,void 0,"可阻止点击跳转至下载页面")]}]},pe={id:"little-red-book-panel-config-note",title:"笔记",forms:[{text:"功能",type:"forms",forms:[p("优化评论浏览","little-red-book-optimizeCommentBrowsing",!0,void 0,"加载评论，未登录最多查看1页评论(注：楼中楼评论已失效，api无法获取楼中楼评论，需要请求头X-T、X-S、X-B3-Traceid)"),p("优化图片浏览","little-red-book-optimizeImageBrowsing",!0,void 0,"更方便的浏览图片"),p("允许复制","little-red-book-allowCopy",!0,void 0,"可以复制笔记的内容")]},{text:"视频笔记",type:"forms",forms:[p("优化视频描述","little-red-book-optimizeVideoNoteDesc",!0,void 0,"让视频描述可以滚动显示更多"),p("【屏蔽】作者热门笔记","little-red-book-shieldAuthorHotNote",!0,void 0,"建议开启"),p("【屏蔽】热门推荐","little-red-book-shieldHotRecommendNote",!0,void 0,"建议开启")]},{text:"劫持/拦截",type:"forms",forms:[p("劫持webpack-弹窗","little-red-book-hijack-webpack-mask",!0,void 0,"如：打开App弹窗、登录弹窗"),p("劫持webpack-唤醒App","little-red-book-hijack-webpack-scheme",!0,void 0,"禁止跳转商店小红书详情页/小红书")]}]},he={id:"little-red-book-panel-config-other",title:"其它",forms:[{text:"劫持/拦截",type:"forms",forms:[p("劫持Vue","little-red-book-hijack-vue",!1,void 0,"恢复__vue__属性")]}]},fe={id:"xhs-panel-config-common",title:"通用",forms:[{text:"功能",type:"forms",forms:[p("允许复制","pc-xhs-allowCopy",!0,void 0,"可以选择文字并复制"),p("新标签页打开文章","pc-xhs-open-blank-article",!1,void 0,"点击文章不会在本页展开，会打开新标签页")]},{text:"搜索",type:"forms",forms:[p("新标签页打开-搜索按钮","pc-xhs-search-open-blank-btn",!1,void 0,"点击右边的搜索按钮直接新标签页打开搜索内容"),p("新标签页打开-回车键","pc-xhs-search-open-blank-keyboard-enter",!1,void 0,"按下回车键直接新标签页打开搜索内容")]},{text:"劫持/拦截",type:"forms",forms:[p("劫持Vue","pc-xhs-hook-vue",!1,void 0,"恢复__vue__属性")]}]},ge={id:"xhs-panel-config-shield",title:"屏蔽",forms:[{text:"功能",type:"forms",forms:[p("【屏蔽】广告","pc-xhs-shieldAd",!0,void 0,"屏蔽屏蔽屏蔽屏蔽"),p("【屏蔽】登录弹窗","pc-xhs-shield-login-dialog",!0,void 0,"屏蔽自动跳出的需要登录的弹窗"),p("【屏蔽】选择文字弹出的搜索提示","pc-xhs-shield-select-text-search-position",!1,void 0,"屏蔽选择文字弹出的搜索提示")]}]},s={$data:{data:new a.Dictionary,oneSuccessExecMenu:new a.Dictionary,onceExec:new a.Dictionary,scriptName:j,key:v,attributeKeyName:B,attributeDefaultValueName:G},$listener:{listenData:new a.Dictionary},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},initExtensionsMenu(){h.top===h.self&&Y.add([{key:"show_pops_panel_setting",text:"⚙ 移动端-设置",autoReload:!1,isStoreValue:!1,showText(t){return t},callback:()=>{this.showPanel();}},{key:"show_pops_panel_setting",text:"⚙ PC-设置",autoReload:!1,isStoreValue:!1,showText(t){return t},callback:()=>{this.showPCPanel();}}]);},initPanelDefaultValue(){let t=this;function e(r){if(!r.attributes)return;let l=r.attributes[B],n=r.attributes[G];if(l==null){i.warn(["请先配置键",r]);return}t.$data.data.has(l)&&i.warn("请检查该key(已存在): "+l),t.$data.data.set(l,n);}let o=this.getPanelContentConfig().concat(this.getPCPanelContentConfig());for(let r=0;r<o.length;r++){let l=o[r];if(!l.forms)continue;let n=l.forms;for(let c=0;c<n.length;c++){let u=n[c];if(u.forms){let d=u.forms;for(let b=0;b<d.length;b++)e(d[b]);}else e(u);}}},setValue(t,e){let o=S(v,{}),r=o[t];o[t]=e,D(v,o),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,r,e);},getValue(t,e){let r=S(v,{})[t];return r??(this.$data.data.has(t)?this.$data.data.get(t):e)},deleteValue(t){let e=S(v,{}),o=e[t];Reflect.deleteProperty(e,t),D(v,e),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,o,void 0);},addValueChangeListener(t,e){let o=Math.random();return this.$listener.listenData.set(t,{id:o,key:t,callback:e}),o},removeValueChangeListener(t){let e=null;for(const[o,r]of this.$listener.listenData.entries())if(r.id===t){e=o;break}typeof e=="string"?this.$listener.listenData.delete(e):console.warn("没有找到对应的监听器");},hasValue(t){let e=S(v,{});return t in e},execMenu(t,e){if(typeof t!="string")throw new TypeError("key 必须是字符串");if(!s.hasValue(t)){i.warn(`${t} 键不存在`);return}let o=s.getValue(t);o&&e(o);},execMenuOnce(t,e){if(typeof t!="string")throw new TypeError("key 必须是字符串");if(!s.hasValue(t)){i.warn(`${t} 键不存在`);return}let o=s.getValue(t);if(o){if(this.$data.oneSuccessExecMenu.has(t))return;e(o),this.$data.oneSuccessExecMenu.set(t,1);}},onceExec(t,e){if(typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(t)||(e(),this.$data.onceExec.set(t,1));},showPanel(){let{isMobile:t,UIWidth:e,UIHeight:o}=this.getEnvInfo();q.panel({title:{text:`${j}-设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:t,width:e,height:o,drag:!0,only:!0});},showPCPanel(){let{isMobile:t,UIWidth:e,UIHeight:o}=this.getEnvInfo();q.panel({title:{text:`${j}-设置`,position:"center",html:!1,style:""},content:this.getPCPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:t,width:e,height:o,drag:!0,only:!0});},getEnvInfo(){let t=!1,e="92dvw",o="80dvh";return window.outerWidth<550&&(t=!0),{isMobile:t,UIWidth:e,UIHeight:o}},getPanelContentConfig(){return [de,me,pe,he]},getPCPanelContentConfig(){return [fe,ge]}},X={webpackChunkranchi(){let t;Object.defineProperty(h,"webpackChunkranchi",{get(){return t},set(o){t=o;const r=t.push;t.push=function(...l){return l[0][0],typeof l[0][1]=="object"&&Object.keys(l[0][1]).forEach((n,c)=>{if(typeof l[0][1][n]=="function"&&l[0][1][n].toString().includes("是否打开小红书App?")&&s.getValue("little-red-book-hijack-webpack-mask"))i.success(["成功劫持各种弹窗/遮罩层："+n]),l[0][1][n]=function(){};else if(typeof l[0][1][n]=="function"&&l[0][1][n].toString().startsWith("function(e,n,t){t.d(n,{Z:function(){return y}});")&&l[0][1][n].toString().includes("jumpToApp")&&s.getValue("little-red-book-hijack-webpack-scheme")){let u=l[0][1][n];l[0][1][n]=function(...d){i.success(["成功劫持scheme唤醒",d]);let b=d[2].d;d[2].d=function(..._){var A;if(_.length===2&&typeof((A=_[1])==null?void 0:A.Z)=="function"){let P=_[1].Z;P.toString()==="function(){return y}"&&(_[1].Z=function(...E){let C=P.call(this,...E);return typeof C=="function"&&C.toString().includes("jumpToApp")?function(){return {jumpToApp(y){var g;if(i.success(["拦截唤醒",y]),(g=y.deeplink)!=null&&g.startsWith("xhsdiscover://user/")){let x=`https://www.xiaohongshu.com/user/profile/${y.deeplink.replace(/^xhsdiscover:\/\/user\//,"")}`;window.open(x,"_blank");}}}}:C});}b.call(this,..._);},u.call(this,...d);};}}),r.call(this,...l)};}});},webPackVue(){let t=h.Function.prototype.apply,e=!1;h.Function.prototype.apply=function(...o){var l,n,c,u,d,b;const r=t.call(this,...o);if(!e&&o.length===2&&((l=o[0])!=null&&l.addRoute)&&((n=o[0])!=null&&n.currentRoute)&&((c=o[0])!=null&&c.getRoutes)&&((u=o[0])!=null&&u.hasRoute)&&((d=o[0])!=null&&d.install)&&((b=o[0])!=null&&b.removeRoute)){e=!0;let _=o[1][0];i.success(["成功劫持vue，version版本：",_.version]),_.mixin({mounted:function(){this.$el.__Ivue__=this;}});}return r};}},be=`/* 底部的App内打开 */\r
.bottom-button-box,\r
/* 顶部的打开看看 */\r
.nav-bar-box,\r
/* 首页-顶部的打开看看 */\r
.launch-app-container {\r
  display: none !important;\r
}\r
`,Q={isNotePage(){return globalThis.location.pathname.startsWith("/discovery/item/")},isUserHomePage(){return globalThis.location.pathname.startsWith("/user/profile/")},isHomePage(){return globalThis.location.href==="https://www.xiaohongshu.com/"||globalThis.location.href==="https://www.xiaohongshu.com"},isSearchPage(){return globalThis.location.pathname.startsWith("/search_result/")}};new a.GM_Cookie;const U={async getPageInfo(t,e="",o="",r="jpg,webp"){const l=`/api/sns/web/v2/comment/page?note_id=${t}&cursor=${e}&top_comment_id=${o}&image_formats=${r}`;let n=await I.get(`https://edith.xiaohongshu.com${l}`,{headers:{Accept:"application/json, text/plain, */*","User-Agent":a.getRandomPCUA(),Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"}});if(!n.status)return;let c=a.toJSON(n.data.responseText);if(i.info(["获取页信息",c]),c.code===0||c.success)return c.data;if(c.code===-101)return;f.error(c.msg);},async getLzlPageInfo(t="",e="",o=10,r="",l="jpg,webp,avif",n=""){const c=`/api/sns/web/v2/comment/sub/page?note_id=${t}&root_comment_id=${e}&num=${o}&cursor=${r}&image_formats=${l}&top_comment_id=${n}`;let u=await I.get(`https://edith.xiaohongshu.com${c}`,{headers:{Accept:"application/json, text/plain, */*","User-Agent":a.getRandomPCUA(),Host:"edith.xiaohongshu.com",Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"}});if(!u.status)return;let d=a.toJSON(u.data.responseText);if(i.info(["获取楼中楼页信息",d]),d.code===0||d.success)return d.data;f.error(d.msg);},async getSearchRecommend(t){let e=await I.get(`https://edith.xiaohongshu.com/api/sns/web/v1/search/recommend?keyword=${t}`,{fetch:!0});if(!e.status)return;let o=a.toJSON(e.data.responseText);if(o.success||o.code===1e3)return o.data.sug_items}},L={allowCopy(){i.info("允许复制"),w(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `);},shieldBottomSearchFind(){i.info("屏蔽底部搜索发现"),w(`
        .hotlist-container,
        /* 一大块空白区域 */
        .safe-area-bottom.margin-placeholder{
            display: none !important;
        }
        `);},shieldBottomToorBar(){i.info("屏蔽底部工具栏"),w(`
        .engage-bar-container{
            display: none !important;
        }`);},shieldAuthorHotNote(){i.info("屏蔽视频笔记的作者热门笔记"),w(`
        .user-notes-box.user-notes-clo-layout-container{
            display: none !important;
        }`);},shieldHotRecommendNote(){i.info("屏蔽视频笔记的热门推荐"),w(`
        #new-note-view-container .recommend-box{
            display: none !important;
        }`);}},we={init(){},optimizeVideoNoteDesc(){i.info("优化视频笔记的描述（可滚动）"),w(`
    .author-box .author-desc-wrapper .author-desc{
      max-height: 70px !important;
      overflow: auto !important;
    }
    /* 展开按钮 */
    .author-box .author-desc-wrapper .author-desc .author-desc-trigger{
      display: none !important;
    }`);}},R={init(){(s.getValue("little-red-book-hijack-webpack-mask")||s.getValue("little-red-book-hijack-webpack-scheme"))&&(i.info("劫持webpack"),X.webpackChunkranchi()),s.execMenu("little-red-book-shieldBottomSearchFind",()=>{L.shieldBottomSearchFind();}),s.execMenu("little-red-book-shieldBottomToorBar",()=>{L.shieldBottomToorBar();}),s.execMenu("little-red-book-optimizeImageBrowsing",()=>{R.optimizeImageBrowsing();}),s.execMenu("little-red-book-optimizeVideoNoteDesc",()=>{we.optimizeVideoNoteDesc();}),s.execMenu("little-red-book-shieldAuthorHotNote",()=>{L.shieldAuthorHotNote();}),s.execMenu("little-red-book-shieldHotRecommendNote",()=>{L.shieldHotRecommendNote();}),m.ready(function(){s.execMenu("little-red-book-optimizeCommentBrowsing",()=>{R.optimizeCommentBrowsing();});});},optimizeCommentBrowsing(){i.info("优化评论浏览");const t={QmsgLoading:void 0,scrollFunc:void 0,noteData:{},commentData:{},emojiMap:{},emojiNameList:[],currentCursor:void 0,commentContainer:void 0,init(){var e;this.emojiMap=((e=a.toJSON(h.localStorage.getItem("redmoji")))==null?void 0:e.redmojiMap)||{},this.emojiNameList=Object.keys(this.emojiMap),this.scrollFunc=new a.LockFunction(this.scrollEvent,this),t.noteData=h.__INITIAL_STATE__.noteData.data.noteData,t.commentData=h.__INITIAL_STATE__.noteData.data.commentData,i.info(["笔记数据",t.noteData]),i.info(["评论数据",t.commentData]);},getCommentHTML(e){return `
            <div class="little-red-book-comments-avatar">
                    <a target="_blank" href="/user/profile/${e.user_id}">
                        <img src="${e.user_avatar}" crossorigin="anonymous">
                    </a>
              </div>
              <div class="little-red-book-comments-content-wrapper">
                <div class="little-red-book-comments-author-wrapper">
                    <div class="little-red-book-comments-author">
                        <a href="/user/profile/${e.user_id}" class="little-red-book-comments-author-name" target="_blank">
                            ${e.user_nickname}
                        </a>
                    </div>
                    <div class="little-red-book-comments-content">
                        ${e.content}
                    </div>
                    <div class="little-red-book-comments-info">
                        <div class="little-red-book-comments-info-date">
                            <span class="little-red-book-comments-create-time">${a.formatTime(e.create_time)}</span>
                            <span class="little-red-book-comments-location">${e.ip_location}</span>
                        </div>
                    </div>
                </div>
              </div>
            `},getCommentElement(e){var C,y;let o=e.content,r=e.create_time||parseInt(e.time),l=e.id,n=e.ip_location||e.ipLocation,c=e.sub_comment_has_more,u=parseInt(e.sub_comment_count)||0,d=e.sub_comment_cursor,b=e.sub_comments||e.subComments,_=(e.user_info||e.user).image,A=(e.user_info||e.user).nickname,P=((C=e==null?void 0:e.user_info)==null?void 0:C.user_id)||((y=e==null?void 0:e.user)==null?void 0:y.userId);o=t.converContent(o);let E=m.createElement("div",{className:"little-red-book-comments-item",innerHTML:`
            <div class="little-red-book-comments-parent">
              ${t.getCommentHTML({user_id:P,user_avatar:_,user_nickname:A,content:o,create_time:r,ip_location:n})}
            </div>
              `});if(c&&Array.isArray(b)&&(b.forEach(g=>{let T=m.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:t.getCommentHTML({user_id:g.user_info.user_id,user_avatar:g.user_info.image,user_nickname:g.user_info.nickname,content:t.converContent(g.content),create_time:g.create_time,ip_location:g.ip_location})});E.appendChild(T);}),u!==b.length)){let g=u-b.length,T=d,x=m.createElement("div",{className:"little-red-book-comments-reply-show-more",innerText:`展开 ${g} 条回复`});async function W(){let oe=f.loading("加载中，请稍后..."),V=await U.getLzlPageInfo(t.noteData.id,l,10,T,void 0);oe.close(),V&&(T=V.cursor,g=g-V.comments.length,x.innerText=`展开 ${g} 条回复`,V.comments.forEach(M=>{let ne=m.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:t.getCommentHTML({user_id:M.user_info.user_id,user_avatar:M.user_info.image,user_nickname:M.user_info.nickname,content:t.converContent(M.content),create_time:M.create_time,ip_location:M.ip_location})});m.before(x,ne);}),V.has_more||(m.off(x,"click",void 0,W,{capture:!0}),x.remove()));}m.on(x,"click",void 0,W,{capture:!0}),E.appendChild(x);}return E},converContent(e){return t.emojiNameList.forEach(o=>{e.includes(o)&&(e=e.replaceAll(o,`<img class="little-red-book-note-content-emoji" crossorigin="anonymous" src="${t.emojiMap[o]}">`));}),e},async scrollEvent(){if(!a.isNearBottom(window.innerHeight/3))return;this.QmsgLoading==null&&(this.QmsgLoading=f.loading("加载中，请稍后..."));let e=await U.getPageInfo(t.noteData.id,t.currentCursor);if(this.QmsgLoading&&(this.QmsgLoading.close(),this.QmsgLoading=void 0),!!e&&(t.currentCursor=e.cursor,e.comments.forEach(o=>{let r=t.getCommentElement(o);t.commentContainer.appendChild(r);}),!e.has_more)){f.info("已加载全部评论"),t.removeScrollEventListener();return}},addSrollEventListener(){i.success("添加滚动监听事件"),m.on(document,"scroll",void 0,t.scrollFunc.run,{capture:!0,once:!1,passive:!0});},removeScrollEventListener(){i.success("移除滚动监听事件"),m.off(document,"scroll",void 0,t.scrollFunc.run,{capture:!0});}};a.waitNode(".narmal-note-container").then(async()=>{i.info("优化评论浏览-笔记元素出现");let e=document.querySelector(".note-view-container"),o=f.loading("获取评论中，请稍后..."),r=m.createElement("div",{className:"little-red-book-comments-container",innerHTML:`
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
          `});t.commentContainer=r,t.init();let l=m.createElement("div",{className:"little-red-book-comments-total",innerHTML:`共 ${t.noteData.comments} 条评论`});r.appendChild(l);let n=await U.getPageInfo(t.noteData.id);await a.sleep(800),n?(t.currentCursor=n.cursor,n.comments.forEach(c=>{let u=t.getCommentElement(c);r.appendChild(u);}),n.has_more&&t.addSrollEventListener()):t.commentData&&t.commentData.comments&&(i.info("从固定的评论中加载"),t.commentData.comments.forEach(c=>{let u=t.getCommentElement(c);r.appendChild(u);})),o.close(),m.append(e,r);});},optimizeImageBrowsing(){i.info("优化图片浏览");function t(e=[],o=0){let r="";e.forEach(c=>{r+=`<li><img data-src="${c}" loading="lazy"></li>`;});let l=m.createElement("ul",{innerHTML:r}),n=new ue(l,{inline:!1,url:"data-src",zIndex:a.getMaxZIndex()+100,hidden:()=>{n.destroy();}});o=o<0?0:o,n.view(o),n.zoomTo(1),n.show();}m.on(document,"click",".note-image-box",function(e){let o=e.target,r=o.querySelector("img"),l=[],n=[];o.closest(".onix-carousel-item")?n=Array.from(o.closest(".onix-carousel-item").parentElement.querySelectorAll("img")):n=[r];let c=n.findIndex(u=>u==r);n.forEach(u=>{let d=u.getAttribute("src")||u.getAttribute("data-src")||u.getAttribute("alt");d&&l.push(d);}),i.success(["点击浏览图片👉",l[c]]),t(l,c);});}},ee={init(){m.ready(()=>{s.execMenu("little-red-book-repariClick",()=>{ee.repariClick();});});},repariClick(){i.info("修复正确的点击跳转"),m.on(document,"click",void 0,function(t){var o,r,l,n,c;let e=t.target;if(i.info(["点击的按钮元素",e]),(o=e==null?void 0:e.className)!=null&&o.includes("follow-btn"))i.success("点击-关注按钮");else if(e!=null&&e.closest("button.reds-button.message-btn"))i.success("点击-私信按钮");else if(e!=null&&e.closest("div.reds-tab-item"))i.success("点击-笔记/收藏按钮");else if(e!=null&&e.closest("section.reds-note-card")){i.success("点击-笔记卡片");let u=e==null?void 0:e.closest("section.reds-note-card");u.getAttribute("id")||((n=(l=(r=a.toJSON(u.getAttribute("impression")))==null?void 0:r.noteTarget)==null?void 0:l.value)==null?void 0:n.noteId)?window.open(`https://www.xiaohongshu.com/discovery/item/${(c=e==null?void 0:e.closest("section.reds-note-card"))==null?void 0:c.getAttribute("id")}`,"_blank"):f.error("获取笔记note_id失败");}return a.preventEvent(t),!1},{capture:!0});}},z={init(){s.execMenu("little-red-book-hijack-vue",()=>{i.info("劫持页面的Vue"),X.webPackVue();}),s.execMenu("little-red-book-shieldAd",()=>{i.info("注入默认屏蔽CSS"),w(be);}),s.execMenu("little-red-book-allowCopy",()=>{z.allowCopy();}),Q.isNotePage()?R.init():Q.isUserHomePage()&&ee.init();},allowCopy(){i.info("允许复制文字"),w(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `);}},_e="",F={init(){s.execMenu("pc-xhs-shieldAd",()=>{w(_e);}),s.execMenu("pc-xhs-shield-select-text-search-position",()=>{F.shieldSelectTextVisibleSearchPosition();}),m.ready(()=>{s.execMenu("pc-xhs-shield-login-dialog",()=>{F.shieldLoginContainer();});});},shieldLoginContainer(){i.success("添加屏蔽登录弹窗CSS，监听登录弹窗出现"),w(`
        /* 登录弹窗 */
        .login-container{
            display: none !important;
        }
        `),a.mutationObserver(document.body,{config:{subtree:!0,childList:!0},callback:()=>{let t=document.querySelector(".login-container .icon-btn-wrapper");t&&(t.click(),i.success("登录弹窗出现，关闭"));}});},shieldSelectTextVisibleSearchPosition(){i.success("屏蔽选择文字弹出的搜索提示"),w(`
        .search-position{
            display: none !important;
        }
        `);}},xe={getSearchUrl(t){return `https://www.xiaohongshu.com/search_result?keyword=${t}&source=web_explore_feed`}},ve={init(){(s.getValue("pc-xhs-search-open-blank-btn")||s.getValue("pc-xhs-search-open-blank-keyboard-enter"))&&this.optimizationSearch();},optimizationSearch(){function t(e,o=!0){{let r=document.querySelector("#search-input");if(r){let l=r.value,n=xe.getSearchUrl(l);i.info("搜索内容: "+l),window.open(n,o?"_blank":"_self");}else f.error("未找到搜索的输入框");}}a.waitNode("#search-input").then(e=>{e.placeholder="搜索小红书",s.execMenu("pc-xhs-search-open-blank-keyboard-enter",()=>{a.listenKeyboard(e,"keydown",(o,r,l,n)=>{o==="Enter"&&!l.length&&(i.info("按下回车键"),a.preventEvent(n),e.blur(),t());});});}),a.waitNode("#search-input + .input-button .search-icon").then(e=>{s.execMenu("pc-xhs-search-open-blank-btn",()=>{m.on(e,"click",o=>{a.preventEvent(o),i.info("点击搜索按钮"),t();},{capture:!0});});});}},N={init(){s.execMenu("pc-xhs-hook-vue",()=>{X.webPackVue();}),s.execMenu("pc-xhs-allowCopy",()=>{N.allowPCCopy();}),s.execMenu("pc-xhs-open-blank-article",()=>{N.openBlankArticle();}),F.init(),ve.init();},allowPCCopy(){i.success("允许复制文字"),m.on(h,"copy",void 0,function(t){a.preventEvent(t);let e=h.getSelection();return e?a.setClip(e.toString()):i.error("未选中任何内容"),!1},{capture:!0});},openBlankArticle(){i.success("新标签页打开文章"),m.on(document,"click",".feeds-container .note-item",function(t){a.preventEvent(t);let o=t.target.querySelector("a[href]");o&&o.href?(i.info("跳转文章: "+o.href),window.open(o.href,"_blank")):f.error("未找到文章链接");},{capture:!0});}};w(`
.qmsg svg.animate-turn {
    fill: none;
}
`);s.init();let te=a.isPhone(),$="change_env_set",k=S($);Y.add({key:$,text:`⚙ 自动: ${te?"移动端":"PC端"}`,autoReload:!1,isStoreValue:!1,showText(t){return k==null?t:t+` 手动: ${k==1?"移动端":k==2?"PC端":"未知"}`},callback:()=>{let t=[0,1,2],e=window.prompt(`请输入当前脚本环境判定
1. 自动判断: 0
2. 移动端: 1
3. PC端: 2`,"0");if(!e)return;let o=parseInt(e);if(isNaN(o)){f.error("输入的不是规范的数字");return}if(!t.includes(o)){f.error("输入的值必须是0或1或2");return}o==0?Z($):D($,o);}});k!=null?(i.info(`手动判定为${k===1?"移动端":"PC端"}`),k==1?z.init():k==2?N.init():(f.error("意外，手动判定的值不在范围内"),Z($))):te?(i.info("自动判定为移动端"),z.init()):(i.info("自动判定为PC端"),N.init());

})(Qmsg, Utils, DOMUtils);