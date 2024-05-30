// ==UserScript==
// @name         小红书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.5.30
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
// @require      https://cdn.jsdelivr.net/npm/@whitesev/utils@1.3.0/dist/index.umd.js
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

(function (f, re, le) {
  'use strict';

  var x=typeof GM_addStyle<"u"?GM_addStyle:void 0,Z=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,S=typeof GM_getValue<"u"?GM_getValue:void 0,D=typeof GM_info<"u"?GM_info:void 0,se=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,I=typeof GM_setValue<"u"?GM_setValue:void 0,ae=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,ce=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,g=typeof unsafeWindow<"u"?unsafeWindow:void 0,X=window;const ue="小红书优化",s=re.noConflict(),m=le.noConflict(),q=X.pops||g.pops,de=X.Viewer||g.Viewer,n=new s.Log(D,g.console||X.console);var J;const j=((J=D==null?void 0:D.script)==null?void 0:J.name)||ue,Y=!1;n.config({debug:Y,logMaxCount:2e4,autoClearConsole:!0,tag:!0});f.config({position:"bottom",html:!0,maxNums:5,autoClose:!0,showClose:!1,showReverse:!0});const ee=new s.GM_Menu({GM_getValue:S,GM_setValue:I,GM_registerMenuCommand:se,GM_unregisterMenuCommand:ae}),H=new s.Httpx(ce);H.config({logDetails:Y,onabort(){f.warning("请求取消");},ontimeout(){f.error("请求超时");},onerror(t){f.error("请求异常"),n.error(["httpx-onerror 请求异常",t]);}});g.Object.defineProperty,g.Function.prototype.apply,g.Function.prototype.call,g.Element.prototype.appendChild,g.setTimeout;const v="GM_Panel",U="data-key",G="data-default-value",p=function(t,e,o,r,l){let i={text:t,type:"switch",description:l,attributes:{},getValue(){return !!c.getValue(e,o)},callback(u,a){n.success(`${a?"开启":"关闭"} ${t}`),c.setValue(e,!!a);},afterAddToUListCallBack:void 0};return i.attributes&&(i.attributes[U]=e,i.attributes[G]=!!o),i},me={id:"little-red-book-panel-config-shield",title:"屏蔽",forms:[{text:"功能",type:"forms",forms:[p("【屏蔽】广告","little-red-book-shieldAd",!0,void 0,"如：App内打开"),p("【屏蔽】底部搜索发现","little-red-book-shieldBottomSearchFind",!0,void 0,"建议开启"),p("【屏蔽】底部工具栏","little-red-book-shieldBottomToorBar",!0,void 0,"建议开启")]}]},pe={id:"little-red-book-panel-config-home",title:"主页",forms:[{text:"劫持/拦截",type:"forms",forms:[p("劫持点击事件","little-red-book-repariClick",!0,void 0,"可阻止点击跳转至下载页面")]}]},he={id:"little-red-book-panel-config-note",title:"笔记",forms:[{text:"功能",type:"forms",forms:[p("优化评论浏览","little-red-book-optimizeCommentBrowsing",!0,void 0,"加载评论，未登录最多查看1页评论(注：楼中楼评论已失效，api无法获取楼中楼评论，需要请求头X-T、X-S、X-B3-Traceid)"),p("优化图片浏览","little-red-book-optimizeImageBrowsing",!0,void 0,"更方便的浏览图片"),p("允许复制","little-red-book-allowCopy",!0,void 0,"可以复制笔记的内容")]},{text:"视频笔记",type:"forms",forms:[p("优化视频描述","little-red-book-optimizeVideoNoteDesc",!0,void 0,"让视频描述可以滚动显示更多"),p("【屏蔽】作者热门笔记","little-red-book-shieldAuthorHotNote",!0,void 0,"建议开启"),p("【屏蔽】热门推荐","little-red-book-shieldHotRecommendNote",!0,void 0,"建议开启")]},{text:"劫持/拦截",type:"forms",forms:[p("劫持webpack-弹窗","little-red-book-hijack-webpack-mask",!0,void 0,"如：打开App弹窗、登录弹窗"),p("劫持webpack-唤醒App","little-red-book-hijack-webpack-scheme",!0,void 0,"禁止跳转商店小红书详情页/小红书")]}]},fe={id:"little-red-book-panel-config-other",title:"其它",forms:[{text:"劫持/拦截",type:"forms",forms:[p("劫持Vue","little-red-book-hijack-vue",!1,void 0,"恢复__vue__属性")]}]},ge={id:"xhs-panel-config-common",title:"通用",forms:[{text:"功能",type:"forms",forms:[p("允许复制","pc-xhs-allowCopy",!0,void 0,"可以选择文字并复制"),p("新标签页打开文章","pc-xhs-open-blank-article",!1,void 0,"点击文章不会在本页展开，会打开新标签页")]},{text:"搜索",type:"forms",forms:[p("新标签页打开-搜索按钮","pc-xhs-search-open-blank-btn",!1,void 0,"点击右边的搜索按钮直接新标签页打开搜索内容"),p("新标签页打开-回车键","pc-xhs-search-open-blank-keyboard-enter",!1,void 0,"按下回车键直接新标签页打开搜索内容")]},{text:"劫持/拦截",type:"forms",forms:[p("劫持Vue","pc-xhs-hook-vue",!1,void 0,"恢复__vue__属性")]}]},be={id:"xhs-panel-config-shield",title:"屏蔽",forms:[{text:"功能",type:"forms",forms:[p("【屏蔽】广告","pc-xhs-shieldAd",!0,void 0,"屏蔽屏蔽屏蔽屏蔽"),p("【屏蔽】登录弹窗","pc-xhs-shield-login-dialog",!0,void 0,"屏蔽自动跳出的需要登录的弹窗"),p("【屏蔽】选择文字弹出的搜索提示","pc-xhs-shield-select-text-search-position",!1,void 0,"屏蔽选择文字弹出的搜索提示")]}]},c={$data:{data:new s.Dictionary,oneSuccessExecMenu:new s.Dictionary,onceExec:new s.Dictionary,scriptName:j,key:v,attributeKeyName:U,attributeDefaultValueName:G},$listener:{listenData:new s.Dictionary},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},initExtensionsMenu(){g.top===g.self&&ee.add([{key:"show_pops_panel_setting",text:"⚙ 移动端-设置",autoReload:!1,isStoreValue:!1,showText(t){return t},callback:()=>{this.showPanel();}},{key:"show_pops_panel_setting",text:"⚙ PC-设置",autoReload:!1,isStoreValue:!1,showText(t){return t},callback:()=>{this.showPCPanel();}}]);},initPanelDefaultValue(){let t=this;function e(r){if(!r.attributes)return;let l=r.attributes[U],i=r.attributes[G];if(l==null){n.warn(["请先配置键",r]);return}t.$data.data.has(l)&&n.warn("请检查该key(已存在): "+l),t.$data.data.set(l,i);}let o=this.getPanelContentConfig().concat(this.getPCPanelContentConfig());for(let r=0;r<o.length;r++){let l=o[r];if(!l.forms)continue;let i=l.forms;for(let u=0;u<i.length;u++){let a=i[u];if(a.forms){let d=a.forms;for(let h=0;h<d.length;h++)e(d[h]);}else e(a);}}},setValue(t,e){let o=S(v,{}),r=o[t];o[t]=e,I(v,o),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,r,e);},getValue(t,e){let r=S(v,{})[t];return r??(this.$data.data.has(t)?this.$data.data.get(t):e)},deleteValue(t){let e=S(v,{}),o=e[t];Reflect.deleteProperty(e,t),I(v,e),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,o,void 0);},addValueChangeListener(t,e){let o=Math.random();return this.$listener.listenData.set(t,{id:o,key:t,callback:e}),o},removeValueChangeListener(t){let e=null;for(const[o,r]of this.$listener.listenData.entries())if(r.id===t){e=o;break}typeof e=="string"?this.$listener.listenData.delete(e):console.warn("没有找到对应的监听器");},hasKey(t){let e=S(v,{});return t in e},execMenu(t,e){if(typeof t!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(t)){n.warn(`${t} 键不存在`);return}let o=c.getValue(t);o&&e(o);},execMenuOnce(t,e){if(typeof t!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(t)){n.warn(`${t} 键不存在`);return}let o=c.getValue(t);if(o){if(this.$data.oneSuccessExecMenu.has(t))return;e(o),this.$data.oneSuccessExecMenu.set(t,1);}},onceExec(t,e){if(typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(t)||(e(),this.$data.onceExec.set(t,1));},showPanel(){let{isMobile:t,UIWidth:e,UIHeight:o}=this.getEnvInfo();q.panel({title:{text:`${j}-设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:t,width:e,height:o,drag:!0,only:!0});},showPCPanel(){let{isMobile:t,UIWidth:e,UIHeight:o}=this.getEnvInfo();q.panel({title:{text:`${j}-设置`,position:"center",html:!1,style:""},content:this.getPCPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:t,width:e,height:o,drag:!0,only:!0});},getEnvInfo(){let t=!1,e="92dvw",o="80dvh";return window.outerWidth<550&&(t=!0),{isMobile:t,UIWidth:e,UIHeight:o}},getPanelContentConfig(){return [me,pe,he,fe]},getPCPanelContentConfig(){return [ge,be]}},F={webpackChunkranchi(){let t;Object.defineProperty(g,"webpackChunkranchi",{get(){return t},set(o){t=o;const r=t.push;t.push=function(...l){return l[0][0],typeof l[0][1]=="object"&&Object.keys(l[0][1]).forEach((i,u)=>{if(typeof l[0][1][i]=="function"&&l[0][1][i].toString().includes("是否打开小红书App?")&&c.getValue("little-red-book-hijack-webpack-mask"))n.success(["成功劫持各种弹窗/遮罩层："+i]),l[0][1][i]=function(){};else if(typeof l[0][1][i]=="function"&&l[0][1][i].toString().startsWith("function(e,n,t){t.d(n,{Z:function(){return y}});")&&l[0][1][i].toString().includes("jumpToApp")&&c.getValue("little-red-book-hijack-webpack-scheme")){let a=l[0][1][i];l[0][1][i]=function(...d){n.success(["成功劫持scheme唤醒",d]);let h=d[2].d;d[2].d=function(...b){var E;if(b.length===2&&typeof((E=b[1])==null?void 0:E.Z)=="function"){let $=b[1].Z;$.toString()==="function(){return y}"&&(b[1].Z=function(...T){let y=$.call(this,...T);return typeof y=="function"&&y.toString().includes("jumpToApp")?function(){return {jumpToApp(C){var w;if(n.success(["拦截唤醒",C]),(w=C.deeplink)!=null&&w.startsWith("xhsdiscover://user/")){let _=`https://www.xiaohongshu.com/user/profile/${C.deeplink.replace(/^xhsdiscover:\/\/user\//,"")}`;window.open(_,"_blank");}}}}:y});}h.call(this,...b);},a.call(this,...d);};}}),r.call(this,...l)};}});},webPackVue(){let t=g.Function.prototype.apply,e=!1;g.Function.prototype.apply=function(...o){var l,i,u,a,d,h;const r=t.call(this,...o);if(!e&&o.length===2&&((l=o[0])!=null&&l.addRoute)&&((i=o[0])!=null&&i.currentRoute)&&((u=o[0])!=null&&u.getRoutes)&&((a=o[0])!=null&&a.hasRoute)&&((d=o[0])!=null&&d.install)&&((h=o[0])!=null&&h.removeRoute)){e=!0;let b=o[1][0];n.success(["成功劫持vue，version版本：",b.version]),b.mixin({mounted:function(){this.$el.__Ivue__=this;}});}return r};}},we=`/* 底部的App内打开 */\r
.bottom-button-box,\r
/* 顶部的打开看看 */\r
.nav-bar-box,\r
/* 首页-顶部的打开看看 */\r
.launch-app-container {\r
  display: none !important;\r
}\r
`,K={isNotePage(){return globalThis.location.pathname.startsWith("/discovery/item/")},isUserHomePage(){return globalThis.location.pathname.startsWith("/user/profile/")},isHomePage(){return globalThis.location.href==="https://www.xiaohongshu.com/"||globalThis.location.href==="https://www.xiaohongshu.com"},isSearchPage(){return globalThis.location.pathname.startsWith("/search_result/")}},Q="https://edith.xiaohongshu.com",B={async getPageInfo(t,e="",o="",r="jpg,webp"){const l="/api/sns/web/v2/comment/page",i={note_id:t,cursor:e,top_comment_id:o,image_formats:r},u=l+"?"+s.toSearchParamsStr(i);let a=await H.get(`${Q}${u}`,{headers:{Accept:"application/json, text/plain, */*","User-Agent":s.getRandomPCUA(),Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"}});if(!a.status)return;let d=s.toJSON(a.data.responseText);if(n.info(["获取页信息",d]),d.code===0||d.success)return d.data;if(d.code===-101)return;f.error(d.msg);},async getLzlPageInfo(t="",e="",o=10,r="",l="jpg,webp,avif",i=""){const u="/api/sns/web/v2/comment/sub/page";let a={note_id:t,root_comment_id:e,num:o,cursor:r,image_formats:l,top_comment_id:i};u+""+s.toSearchParamsStr(a);let d=`${Q}${u}?${s.toSearchParamsStr(a)}`,h=await H.get(d,{headers:{Accept:"application/json, text/plain, */*","User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Host:"edith.xiaohongshu.com",Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"},onerror(){}});if(!h.status){h.data.status===406&&s.isNotNull(h.data.responseText)?s.toJSON(h.data.responseText).code==-1?f.error("获取楼中楼信息失败，验证x-s、x-t、x-s-common失败"):f.error("获取楼中楼信息失败"):f.error("请求异常"),n.error(["获取楼中楼信息失败",h]);return}let b=s.toJSON(h.data.responseText);if(n.info(["获取楼中楼页信息",b]),b.code===0||b.success)return b.data;f.error(b.msg);},async getSearchRecommend(t){let e=await H.get(`https://edith.xiaohongshu.com/api/sns/web/v1/search/recommend?keyword=${t}`,{fetch:!0});if(!e.status)return;let o=s.toJSON(e.data.responseText);if(o.success||o.code===1e3)return o.data.sug_items}},L={allowCopy(){n.info("允许复制"),x(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `);},shieldBottomSearchFind(){n.info("屏蔽底部搜索发现"),x(`
        .hotlist-container,
        /* 一大块空白区域 */
        .safe-area-bottom.margin-placeholder{
            display: none !important;
        }
        `);},shieldBottomToorBar(){n.info("屏蔽底部工具栏"),x(`
        .engage-bar-container{
            display: none !important;
        }`);},shieldAuthorHotNote(){n.info("屏蔽视频笔记的作者热门笔记"),x(`
        .user-notes-box.user-notes-clo-layout-container{
            display: none !important;
        }`);},shieldHotRecommendNote(){n.info("屏蔽视频笔记的热门推荐"),x(`
        #new-note-view-container .recommend-box{
            display: none !important;
        }`);}},xe={init(){},optimizeVideoNoteDesc(){n.info("优化视频笔记的描述（可滚动）"),x(`
    .author-box .author-desc-wrapper .author-desc{
      max-height: 70px !important;
      overflow: auto !important;
    }
    /* 展开按钮 */
    .author-box .author-desc-wrapper .author-desc .author-desc-trigger{
      display: none !important;
    }`);}},R={init(){(c.getValue("little-red-book-hijack-webpack-mask")||c.getValue("little-red-book-hijack-webpack-scheme"))&&(n.info("劫持webpack"),F.webpackChunkranchi()),c.execMenu("little-red-book-shieldBottomSearchFind",()=>{L.shieldBottomSearchFind();}),c.execMenu("little-red-book-shieldBottomToorBar",()=>{L.shieldBottomToorBar();}),c.execMenu("little-red-book-optimizeImageBrowsing",()=>{R.optimizeImageBrowsing();}),c.execMenu("little-red-book-optimizeVideoNoteDesc",()=>{xe.optimizeVideoNoteDesc();}),c.execMenu("little-red-book-shieldAuthorHotNote",()=>{L.shieldAuthorHotNote();}),c.execMenu("little-red-book-shieldHotRecommendNote",()=>{L.shieldHotRecommendNote();}),m.ready(function(){c.execMenu("little-red-book-optimizeCommentBrowsing",()=>{R.optimizeCommentBrowsing();});});},optimizeCommentBrowsing(){n.info("优化评论浏览");const t={QmsgLoading:void 0,scrollFunc:void 0,noteData:{},commentData:{},emojiMap:{},emojiNameList:[],currentCursor:void 0,commentContainer:void 0,init(){var e;this.emojiMap=((e=s.toJSON(g.localStorage.getItem("redmoji")))==null?void 0:e.redmojiMap)||{},this.emojiNameList=Object.keys(this.emojiMap),this.scrollFunc=new s.LockFunction(this.scrollEvent,this),t.noteData=g.__INITIAL_STATE__.noteData.data.noteData,t.commentData=g.__INITIAL_STATE__.noteData.data.commentData,n.info(["笔记数据",t.noteData]),n.info(["评论数据",t.commentData]);},getCommentHTML(e){return `
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
                            <span class="little-red-book-comments-create-time">${s.formatTime(e.create_time)}</span>
                            <span class="little-red-book-comments-location">${e.ip_location}</span>
                        </div>
                    </div>
                </div>
              </div>
            `},getCommentElement(e){var y,C;let o=e.content,r=e.create_time||parseInt(e.time),l=e.id,i=e.ip_location||e.ipLocation,u=e.sub_comment_has_more,a=parseInt(e.sub_comment_count)||0,d=e.sub_comment_cursor,h=e.sub_comments||e.subComments,b=(e.user_info||e.user).image,E=(e.user_info||e.user).nickname,$=((y=e==null?void 0:e.user_info)==null?void 0:y.user_id)||((C=e==null?void 0:e.user)==null?void 0:C.userId);o=t.converContent(o);let T=m.createElement("div",{className:"little-red-book-comments-item",innerHTML:`
            <div class="little-red-book-comments-parent">
              ${t.getCommentHTML({user_id:$,user_avatar:b,user_nickname:E,content:o,create_time:r,ip_location:i})}
            </div>
              `});if(u&&Array.isArray(h)&&(h.forEach(w=>{let A=m.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:t.getCommentHTML({user_id:w.user_info.user_id,user_avatar:w.user_info.image,user_nickname:w.user_info.nickname,content:t.converContent(w.content),create_time:w.create_time,ip_location:w.ip_location})});T.appendChild(A);}),a!==h.length)){let w=a-h.length,A=d,_=m.createElement("div",{className:"little-red-book-comments-reply-show-more",innerText:`展开 ${w} 条回复`});async function W(){let ne=f.loading("加载中，请稍后..."),P=await B.getLzlPageInfo(t.noteData.id,l,10,A,void 0);ne.close(),P&&(A=P.cursor,w=w-P.comments.length,_.innerText=`展开 ${w} 条回复`,P.comments.forEach(M=>{let ie=m.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:t.getCommentHTML({user_id:M.user_info.user_id,user_avatar:M.user_info.image,user_nickname:M.user_info.nickname,content:t.converContent(M.content),create_time:M.create_time,ip_location:M.ip_location})});m.before(_,ie);}),P.has_more||(m.off(_,"click",void 0,W,{capture:!0}),_.remove()));}m.on(_,"click",void 0,W,{capture:!0}),T.appendChild(_);}return T},converContent(e){return t.emojiNameList.forEach(o=>{e.includes(o)&&(e=e.replaceAll(o,`<img class="little-red-book-note-content-emoji" crossorigin="anonymous" src="${t.emojiMap[o]}">`));}),e},async scrollEvent(){if(!s.isNearBottom(window.innerHeight/3))return;this.QmsgLoading==null&&(this.QmsgLoading=f.loading("加载中，请稍后..."));let e=await B.getPageInfo(t.noteData.id,t.currentCursor);if(this.QmsgLoading&&(this.QmsgLoading.close(),this.QmsgLoading=void 0),!!e&&(t.currentCursor=e.cursor,e.comments.forEach(o=>{let r=t.getCommentElement(o);t.commentContainer.appendChild(r);}),!e.has_more)){f.info("已加载全部评论"),t.removeScrollEventListener();return}},addSrollEventListener(){n.success("添加滚动监听事件"),m.on(document,"scroll",void 0,t.scrollFunc.run,{capture:!0,once:!1,passive:!0});},removeScrollEventListener(){n.success("移除滚动监听事件"),m.off(document,"scroll",void 0,t.scrollFunc.run,{capture:!0});}};s.waitNode(".narmal-note-container").then(async()=>{n.info("优化评论浏览-笔记元素出现");let e=document.querySelector(".note-view-container"),o=f.loading("获取评论中，请稍后..."),r=m.createElement("div",{className:"little-red-book-comments-container",innerHTML:`
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
          `});t.commentContainer=r,t.init();let l=m.createElement("div",{className:"little-red-book-comments-total",innerHTML:`共 ${t.noteData.comments} 条评论`});r.appendChild(l);let i=await B.getPageInfo(t.noteData.id);await s.sleep(800),i?(t.currentCursor=i.cursor,i.comments.forEach(u=>{let a=t.getCommentElement(u);r.appendChild(a);}),i.has_more&&t.addSrollEventListener()):t.commentData&&t.commentData.comments&&(n.info("从固定的评论中加载"),t.commentData.comments.forEach(u=>{let a=t.getCommentElement(u);r.appendChild(a);})),o.close(),m.append(e,r);});},optimizeImageBrowsing(){n.info("优化图片浏览");function t(e=[],o=0){let r="";e.forEach(u=>{r+=`<li><img data-src="${u}" loading="lazy"></li>`;});let l=m.createElement("ul",{innerHTML:r}),i=new de(l,{inline:!1,url:"data-src",zIndex:s.getMaxZIndex()+100,hidden:()=>{i.destroy();}});o=o<0?0:o,i.view(o),i.zoomTo(1),i.show();}m.on(document,"click",".note-image-box",function(e){let o=e.target,r=o.querySelector("img"),l=[],i=[];o.closest(".onix-carousel-item")?i=Array.from(o.closest(".onix-carousel-item").parentElement.querySelectorAll("img")):i=[r];let u=i.findIndex(a=>a==r);i.forEach(a=>{let d=a.getAttribute("src")||a.getAttribute("data-src")||a.getAttribute("alt");d&&l.push(d);}),n.success(["点击浏览图片👉",l[u]]),t(l,u);});}},te={init(){m.ready(()=>{c.execMenu("little-red-book-repariClick",()=>{te.repariClick();});});},repariClick(){n.info("修复正确的点击跳转"),m.on(document,"click",void 0,function(t){var o,r,l,i,u;let e=t.target;if(n.info(["点击的按钮元素",e]),(o=e==null?void 0:e.className)!=null&&o.includes("follow-btn"))n.success("点击-关注按钮");else if(e!=null&&e.closest("button.reds-button.message-btn"))n.success("点击-私信按钮");else if(e!=null&&e.closest("div.reds-tab-item"))n.success("点击-笔记/收藏按钮");else if(e!=null&&e.closest("section.reds-note-card")){n.success("点击-笔记卡片");let a=e==null?void 0:e.closest("section.reds-note-card");a.getAttribute("id")||((i=(l=(r=s.toJSON(a.getAttribute("impression")))==null?void 0:r.noteTarget)==null?void 0:l.value)==null?void 0:i.noteId)?window.open(`https://www.xiaohongshu.com/discovery/item/${(u=e==null?void 0:e.closest("section.reds-note-card"))==null?void 0:u.getAttribute("id")}`,"_blank"):f.error("获取笔记note_id失败");}return s.preventEvent(t),!1},{capture:!0});}},z={init(){c.execMenu("little-red-book-hijack-vue",()=>{n.info("劫持页面的Vue"),F.webPackVue();}),c.execMenu("little-red-book-shieldAd",()=>{n.info("注入默认屏蔽CSS"),x(we);}),c.execMenu("little-red-book-allowCopy",()=>{z.allowCopy();}),K.isNotePage()?R.init():K.isUserHomePage()&&te.init();},allowCopy(){n.info("允许复制文字"),x(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `);}},_e="",O={init(){c.execMenu("pc-xhs-shieldAd",()=>{x(_e);}),c.execMenu("pc-xhs-shield-select-text-search-position",()=>{O.shieldSelectTextVisibleSearchPosition();}),m.ready(()=>{c.execMenu("pc-xhs-shield-login-dialog",()=>{O.shieldLoginContainer();});});},shieldLoginContainer(){n.success("添加屏蔽登录弹窗CSS，监听登录弹窗出现"),x(`
        /* 登录弹窗 */
        .login-container{
            display: none !important;
        }
        `),s.mutationObserver(document.body,{config:{subtree:!0,childList:!0},callback:()=>{let t=document.querySelector(".login-container .icon-btn-wrapper");t&&(t.click(),n.success("登录弹窗出现，关闭"));}});},shieldSelectTextVisibleSearchPosition(){n.success("屏蔽选择文字弹出的搜索提示"),x(`
        .search-position{
            display: none !important;
        }
        `);}},ve={getSearchUrl(t){return `https://www.xiaohongshu.com/search_result?keyword=${t}&source=web_explore_feed`}},ke={init(){(c.getValue("pc-xhs-search-open-blank-btn")||c.getValue("pc-xhs-search-open-blank-keyboard-enter"))&&this.optimizationSearch();},optimizationSearch(){function t(e,o=!0){{let r=document.querySelector("#search-input");if(r){let l=r.value,i=ve.getSearchUrl(l);n.info("搜索内容: "+l),window.open(i,o?"_blank":"_self");}else f.error("未找到搜索的输入框");}}s.waitNode("#search-input").then(e=>{e.placeholder="搜索小红书",c.execMenu("pc-xhs-search-open-blank-keyboard-enter",()=>{s.listenKeyboard(e,"keydown",(o,r,l,i)=>{o==="Enter"&&!l.length&&(n.info("按下回车键"),s.preventEvent(i),e.blur(),t());});});}),s.waitNode("#search-input + .input-button .search-icon").then(e=>{c.execMenu("pc-xhs-search-open-blank-btn",()=>{m.on(e,"click",o=>{s.preventEvent(o),n.info("点击搜索按钮"),t();},{capture:!0});});});}},N={init(){c.execMenu("pc-xhs-hook-vue",()=>{F.webPackVue();}),c.execMenu("pc-xhs-allowCopy",()=>{N.allowPCCopy();}),c.execMenu("pc-xhs-open-blank-article",()=>{N.openBlankArticle();}),O.init(),ke.init();},allowPCCopy(){n.success("允许复制文字"),m.on(g,"copy",void 0,function(t){s.preventEvent(t);let e=g.getSelection();return e?s.setClip(e.toString()):n.error("未选中任何内容"),!1},{capture:!0});},openBlankArticle(){n.success("新标签页打开文章"),m.on(document,"click",".feeds-container .note-item",function(t){s.preventEvent(t);let o=t.target.querySelector("a[href]");o&&o.href?(n.info("跳转文章: "+o.href),window.open(o.href,"_blank")):f.error("未找到文章链接");},{capture:!0});}};x(`
.qmsg svg.animate-turn {
    fill: none;
}
`);c.init();let oe=s.isPhone(),V="change_env_set",k=S(V);ee.add({key:V,text:`⚙ 自动: ${oe?"移动端":"PC端"}`,autoReload:!1,isStoreValue:!1,showText(t){return k==null?t:t+` 手动: ${k==1?"移动端":k==2?"PC端":"未知"}`},callback:()=>{let t=[0,1,2],e=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!e)return;let o=parseInt(e);if(isNaN(o)){f.error("输入的不是规范的数字");return}if(!t.includes(o)){f.error("输入的值必须是0或1或2");return}o==0?Z(V):I(V,o);}});k!=null?(n.info(`手动判定为${k===1?"移动端":"PC端"}`),k==1?z.init():k==2?N.init():(f.error("意外，手动判定的值不在范围内"),Z(V))):oe?(n.info("自动判定为移动端"),z.init()):(n.info("自动判定为PC端"),N.init());

})(Qmsg, Utils, DOMUtils);