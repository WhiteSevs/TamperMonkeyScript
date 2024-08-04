// ==UserScript==
// @name         【移动端】bilibili优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.8.4
// @author       WhiteSevs
// @description  移动端专用，免登录（但登录后可以看更多评论）、阻止跳转App、App端推荐视频流、解锁视频画质(番剧解锁需配合其它插件)、美化显示、去广告等
// @license      GPL-3.0-only
// @icon         https://i0.hdslb.com/bfs/static/jinkela/long/images/512.png
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://m.bilibili.com/*
// @match        *://live.bilibili.com/*
// @match        *://www.bilibili.com/read/*
// @require      https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/497907/1413262/QRCodeJS.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.1.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.3.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.5.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/md5@2.3.0/dist/md5.min.js
// @connect      *
// @connect      m.bilibili.com
// @connect      www.bilibili.com
// @connect      api.bilibili.com
// @connect      app.bilibili.com
// @connect      passport.bilibili.com
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

(a=>{function e(n){if(typeof n!="string")throw new TypeError("cssText must be a string");let p=document.createElement("style");return p.setAttribute("type","text/css"),p.innerHTML=n,document.head?document.head.appendChild(p):document.body?document.body.appendChild(p):document.documentElement.childNodes.length===0?document.documentElement.appendChild(p):document.documentElement.insertBefore(p,document.documentElement.childNodes[0]),p}if(typeof GM_addStyle=="function"){GM_addStyle(a);return}e(a)})(' @charset "UTF-8";.m-video2-awaken-btn,.openapp-dialog,.m-head .launch-app-btn.m-nav-openapp,.m-head .launch-app-btn.home-float-openapp,.m-home .launch-app-btn.home-float-openapp,.m-space .launch-app-btn.m-space-float-openapp,.m-space .launch-app-btn.m-nav-openapp{display:none!important}#app .video .launch-app-btn.m-video-main-launchapp:has([class^=m-video2-awaken]),#app .video .launch-app-btn.m-nav-openapp,#app .video .mplayer-widescreen-callapp,#app .video .launch-app-btn.m-float-openapp,#app .video .m-video-season-panel .launch-app-btn .open-app{display:none!important}#app.LIVE .open-app-btn.bili-btn-warp,#app .m-dynamic .launch-app-btn.m-nav-openapp,#app .m-dynamic .dynamic-float-openapp.dynamic-float-btn,#app .m-opus .float-openapp.opus-float-btn,#app .m-opus .v-switcher .launch-app-btn.list-more,#app .m-opus .opus-nav .launch-app-btn.m-nav-openapp,#app .topic-detail .launch-app-btn.m-nav-openapp,#app .topic-detail .launch-app-btn.m-topic-float-openapp{display:none!important}#app.main-container bili-open-app.btn-download{display:none!important}#app .read-app-main bili-open-app{display:none!important}html{--bili-color: #fb7299;--bili-color-rgb: 251, 114, 153} ');

(function (y, ee, ye, de, be) {
	'use strict';

	var L=typeof GM_getValue<"u"?GM_getValue:void 0,Z=typeof GM_info<"u"?GM_info:void 0,Ce=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,q=typeof GM_setValue<"u"?GM_setValue:void 0,xe=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,we=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,x=typeof unsafeWindow<"u"?unsafeWindow:void 0,me=window;const ke={$data:{get enable(){return c.getValue("httpx-use-cookie-enable")},get useDocumentCookie(){return c.getValue("httpx-use-document-cookie")},cookieRule:[{key:"httpx-cookie-bilibili.com",hostname:/bilibili.com/g}]},fixCookieSplit(e){return s.isNotNull(e)&&!e.trim().endsWith(";")&&(e+=";"),e},concatCookie(e,t){return s.isNull(e)?t:(e=e.trim(),t=t.trim(),e=this.fixCookieSplit(e),t.startsWith(";")&&(t=t.substring(1)),e.concat(t))},handle(e){if(e.fetch||!this.$data.enable)return;let t="",i=e.url;i.startsWith("//")&&(i=window.location.protocol+i);let r=new URL(i);this.$data.useDocumentCookie&&r.hostname.endsWith(window.location.hostname.split(".").slice(-2).join("."))&&(t=this.concatCookie(t,document.cookie.trim()));for(let a=0;a<this.$data.cookieRule.length;a++){let o=this.$data.cookieRule[a];if(r.hostname.match(o.hostname)){let l=c.getValue(o.key);if(s.isNull(l))break;t=this.concatCookie(t,l);}}s.isNotNull(t)&&(e.headers&&e.headers.Cookie?e.headers.Cookie=this.concatCookie(e.headers.Cookie,t):e.headers.Cookie=t,n.info(["Httpx => 设置cookie:",e])),e.headers&&e.headers.Cookie!=null&&s.isNull(e.headers.Cookie)&&delete e.headers.Cookie;}},$e="【移动端】bilibili优化",s=ee.noConflict(),f=ye.noConflict(),W=de,te=me.QRCode||x.QRCode,n=new s.Log(Z,x.console||me.console);var ue;const ie=((ue=Z==null?void 0:Z.script)==null?void 0:ue.name)||$e,_e=new s.GM_Cookie,fe=!1;n.config({debug:fe,logMaxCount:1e3,autoClearConsole:!0,tag:!0});y.config(Object.defineProperties({html:!0,autoClose:!0,showClose:!1},{position:{get(){return c.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return c.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return c.getValue("qmsg-config-showreverse",!0)}},zIndex:{get(){let e=ee.getMaxZIndex(),t=de.config.InstanceUtils.getPopsMaxZIndex(e).zIndex;return ee.getMaxValue(e,t)+100}}}));const Se=new s.GM_Menu({GM_getValue:L,GM_setValue:q,GM_registerMenuCommand:Ce,GM_unregisterMenuCommand:xe}),N=new s.Httpx(we);N.interceptors.request.use(e=>(ke.handle(e),e));N.interceptors.response.use(void 0,e=>(n.error(["拦截器-请求错误",e]),e.type==="onabort"?y.warning("请求取消"):e.type==="onerror"?y.error("请求异常"):e.type==="ontimeout"?y.error("请求超时"):y.error("其它错误"),e));N.config({logDetails:fe});const Y={Object:{defineProperty:x.Object.defineProperty},Function:{apply:x.Function.prototype.apply,call:x.Function.prototype.call},Element:{appendChild:x.Element.prototype.appendChild},setTimeout:x.setTimeout},S=s.addStyle.bind(s),B="GM_Panel",he="data-init",E="data-key",I="data-default-value",Me="data-init-more-value",d=function(e,t,i,r,a){let o={text:e,type:"switch",description:a,attributes:{},getValue(){return !!c.getValue(t,i)},callback(l,p){n.success(`${p?"开启":"关闭"} ${e}`),!(typeof r=="function"&&r(l,p))&&c.setValue(t,!!p);},afterAddToUListCallBack:void 0};return o.attributes&&(o.attributes[E]=t,o.attributes[I]=!!i),o},Ve=function(e,t,i,r,a,o="",l){let p={text:e,type:"textarea",attributes:{},description:r,placeholder:o,disabled:l,getValue(){return c.getValue(t,i)},callback(m,u){c.setValue(t,u);}};return p.attributes&&(p.attributes[E]=t,p.attributes[I]=i),p},U=function(e,t,i,r,a,o){let l=[];typeof r=="function"?l=r():l=r;let p={text:e,type:"select",description:o,attributes:{},getValue(){return c.getValue(t,i)},callback(m,u,v){c.setValue(t,u),typeof a=="function"&&a(m,u,v);},data:l};return p.attributes&&(p.attributes[E]=t,p.attributes[I]=i),p},re=function(e,t,i,r,a,o,l,p,m){let u={text:e,type:"slider",description:m,attributes:{},getValue(){return c.getValue(t,i)},getToolTipContent(v){return typeof p=="function"?p(v):`${v}`},callback(v,C){typeof l=="function"&&l(v,C)||c.setValue(t,C);},min:r,max:a,step:o};return u.attributes&&(u.attributes[E]=t,u.attributes[I]=i),u};let j=null;const ae={get ajaxHooker(){return j==null&&(n.info("启用ajaxHooker拦截网络"),j=s.ajaxHooker()),j}},X={"240P 极速":6,"360P 流畅":16,"480P 清晰":32,"720P 高清":64,"720P60 高帧率":74,"1080P 高清":80,"1080P+ 高码率":112,"1080P60 高帧率":116,"4K 超清":120,"HDR 真彩色":125,杜比视界:126,"8K 超高清":127},Ae={$flag:{is_hook_video_playurl:!1,is_hook_bangumi_html5:!1},init(){c.execMenuOnce("bili-video-xhr-unlockQuality",()=>{this.hook_video_playurl();}),c.execMenuOnce("bili-bangumi-xhr-unlockQuality",()=>{this.hook_bangumi_html5();});},hook_video_playurl(){this.$flag.is_hook_video_playurl||(this.$flag.is_hook_video_playurl=!0,ae.ajaxHooker.hook(e=>{if(e.url.includes("//api.bilibili.com/x/player/wbi/playurl")||e.url.includes("//api.bilibili.com/x/player/playurl")){e.url.startsWith("//")&&(e.url=window.location.protocol+e.url);let t=new URL(e.url);t.searchParams.set("platform","html5"),t.searchParams.set("qn",X["1080P60 高帧率"].toString()),t.searchParams.set("high_quality","1"),t.searchParams.set("fnver","0"),t.searchParams.set("fourk","1"),e.url=t.toString(),e.response=i=>{let r=s.toJSON(i.responseText);if(n.info("当前解锁的quality值："+r.data.quality),r.data.quality&&r.data.support_formats){let a=r.data.support_formats.find(o=>o.quality==r.data.quality);a&&n.info("当前已解锁的画质："+a.new_description||a.display_desc);}};}}));},hook_bangumi_html5(){this.$flag.is_hook_bangumi_html5||(this.$flag.is_hook_bangumi_html5=!0,ae.ajaxHooker.hook(e=>{if(e.url.includes("//api.bilibili.com/pgc/player/web/playurl/html5")){e.url.startsWith("//")&&(e.url=window.location.protocol+e.url);let t=new URL(e.url);t.pathname="/pgc/player/web/playurl",t.searchParams.delete("bsource"),t.searchParams.set("qn",X["1080P60 高帧率"].toString()),t.searchParams.set("fnval","1"),t.searchParams.set("fnver","0"),t.searchParams.set("fourk","1"),t.searchParams.set("from_client","BROWSER"),t.searchParams.set("drm_tech_type","2"),e.url=t.toString(),e.response=i=>{let a=s.toJSON(i.responseText).result;if(n.info("当前解锁的quality值："+a.quality),a.quality&&a.support_formats){let o=a.support_formats.find(l=>l.quality==a.quality);o&&n.info("当前已解锁的画质："+o.new_description||o.display_desc);}};}}));}},D={$flag:{isInitCSS:!1,isCoverMPlayer:!1},$el:{get $mplayerRight(){return document.querySelector(".mplayer-right")}},$mPlayerRight:{showMPlayerRight(){D.$el.$mplayerRight.style.cssText="--mplayer-right-transform: -var(--mplayer-right-w);";},hideMPlayerRight(){D.$el.$mplayerRight.style.cssText="";},clearMPlayerRight(){D.$el.$mplayerRight.innerHTML="";},setActive(e){e.classList.add("gf-mplayer-right-item-active");},clearActive(e){e.classList.remove("gf-mplayer-right-item-active");},clearAllActive(){D.$el.$mplayerRight.querySelectorAll(".gf-mplayer-right-item-active").forEach(e=>e.classList.remove("gf-mplayer-right-item-active"));},createMPlayerItem(e){return f.createElement("div",{className:"gf-mplayer-right-item",innerHTML:e??""})}},init(){this.$flag.isInitCSS||(this.$flag.isInitCSS=!0,S(`
			.mplayer-right {
				--mplayer-right-w: 8em;
				--mplayer-right-transform: var(--mplayer-right-w);
				background: #181212;
				width: var(--mplayer-right-w);
				opacity: 0.9 !important;
				visibility: visible !important;
				color: #ffffff;
				-webkit-transform: translateX(var(--mplayer-right-transform)) !important;
				transform: translateX(var(--mplayer-right-transform)) !important;
				z-index: 1000;
				overflow-y: auto;
				display: block;
				align-content: center;
			}
			.gf-mplayer-right-item{
				width: 100%;
				text-align: center;
				align-content: center;
				padding: 2em 0px;
			}
			.gf-mplayer-right-item-active {
				color: var(--bili-color);
			}
			`)),c.execMenuOnce("bili-coverSpeedBtn",()=>{this.coverMPlayer(),this.coverSpeedBtn();}),c.execMenuOnce("bili-coverQuality",()=>{this.coverMPlayer(),this.coverQuality();});},coverMPlayer(){this.$flag.isCoverMPlayer||(this.$flag.isCoverMPlayer=!0,f.on(document,"click",e=>{var i,r,a;let t=e.target;(i=this.$el)!=null&&i.$mplayerRight&&!((a=(r=this.$el)==null?void 0:r.$mplayerRight)!=null&&a.contains(t))&&this.$mPlayerRight.hideMPlayerRight();},{capture:!0}));},coverSpeedBtn(){f.on(document,"click",".mplayer-control-btn-speed",async e=>{s.preventEvent(e),n.info("点击【倍速】"),this.$mPlayerRight.hideMPlayerRight(),this.$mPlayerRight.clearMPlayerRight();let t=[{text:"5.0X",value:5},{text:"3.0X",value:3},{text:"2.0X",value:2},{text:"1.5X",value:1.5},{text:"1.25X",value:1.25},{text:"1.0X",value:1},{text:"0.75X",value:.75},{text:"0.5X",value:.5},{text:"0.25X",value:.25}],i=await b.getVideoPlayBackRate();t.forEach(r=>{let a=this.$mPlayerRight.createMPlayerItem(r.text);i==r.value&&this.$mPlayerRight.setActive(a),f.on(a,"click",async o=>{s.preventEvent(o),await b.setVideoSpeed(r.value),this.$mPlayerRight.clearAllActive(),this.$mPlayerRight.setActive(a),this.$mPlayerRight.hideMPlayerRight();}),this.$el.$mplayerRight.appendChild(a);}),this.$mPlayerRight.showMPlayerRight();},{capture:!0});},coverQuality(){f.on(document,"click",".mplayer-control-btn-quality",async e=>{s.preventEvent(e),n.info("点击【清晰度】"),this.$mPlayerRight.hideMPlayerRight(),this.$mPlayerRight.clearMPlayerRight();let i=(await b.$player.playerPromise()).videoQuality,r={};Object.keys(X).forEach(l=>{let p=X[l];r[p]=l;});let a=r[i],o=this.$mPlayerRight.createMPlayerItem(a);this.$mPlayerRight.setActive(o),this.$el.$mplayerRight.appendChild(o),this.$mPlayerRight.showMPlayerRight();},{capture:!0});}},b={get player(){return x.player},$player:{async playerPromise(){return await s.waitPropertyByInterval(x,()=>{var t,i;return typeof b.player=="object"&&typeof((t=b.player)==null?void 0:t.playerPromise)=="object"&&((i=b.player)==null?void 0:i.playerPromise)!=null},250,1e4),await b.player.playerPromise},parseBiliH5PlayerToPlayer(e){let t=e.player,i=e.options,r={container:t.elem,config:i,danmaku:t.danmaku,video:t.video,videoQuality:i.qn,VideoInfo:{avid:i.aid,bvid:i.bvid,cid:i.cid,video_type:i.video_type}},a={playerPromise:new Promise(o=>{o(r);})};x.player=a;}},init(){$.init();let e=c.getValue("bili-video-speed");this.setVideoSpeed(e),D.init();},async setVideoSpeed(e){return new Promise(async(t,i)=>{try{let r=await this.$player.playerPromise();await s.waitPropertyByInterval(async()=>(r=await b.$player.playerPromise(),r),()=>typeof r.video!=null&&r.video instanceof HTMLVideoElement,250,1e4),r.video.playbackRate=e,n.success(`设置视频播放倍速: ${e}`);let a=await $.DanmakuCoreConfig();a.videoSpeed=e,n.success(`设置弹幕配置的视频播放倍速: ${e}`),t(!0);}catch(r){i(r);}})},async getVideoPlayBackRate(){return new Promise(async(e,t)=>{try{let i=await this.$player.playerPromise();await s.waitPropertyByInterval(async()=>(i=await b.$player.playerPromise(),i),()=>typeof i.video!=null&&i.video instanceof HTMLVideoElement,250,1e4),e(i.video.playbackRate);}catch(i){t(i);}})}},w={isVideo(){return window.location.pathname.startsWith("/video/")},isBangumi(){return window.location.pathname.startsWith("/bangumi/")},isSearch(){return window.location.pathname.startsWith("/search")},isLive(){return window.location.hostname==="live.bilibili.com"},isOpus(){return window.location.pathname.startsWith("/opus")},isTopicDetail(){return window.location.pathname.startsWith("/topic-detail")},isDynamic(){return window.location.pathname.startsWith("/dynamic")},isHead(){return window.location.pathname==="/"||window.location.pathname.startsWith("/channel")},isSpace(){return window.location.pathname.startsWith("/space")}},Pe={isPC(){return window.location.hostname==="www.bilibili.com"},isReadMobile(){return this.isPC()&&window.location.pathname.startsWith("/read/mobile")}},J={key:"bili-danmaku-filter",mode:{6:"从左往右",5:"顶部",4:"底部",1:"从右往左"},$player:{async danmakuArray(){var i,r;await s.waitPropertyByInterval(x,()=>{var a;return typeof b.player=="object"&&typeof((a=b.player)==null?void 0:a.playerPromise)=="object"},250,1e4);let e=await b.$player.playerPromise();return await s.waitPropertyByInterval(async()=>{e=await b.$player.playerPromise();},()=>{var a,o,l,p,m,u;return typeof((o=(a=e==null?void 0:e.danmaku)==null?void 0:a.danmakuCore)==null?void 0:o.danmakuArray)=="object"&&((p=(l=e==null?void 0:e.danmaku)==null?void 0:l.danmakuCore)==null?void 0:p.danmakuArray)!=null&&Array.isArray((u=(m=e==null?void 0:e.danmaku)==null?void 0:m.danmakuCore)==null?void 0:u.danmakuArray)},250,1e4),(r=(i=e==null?void 0:e.danmaku)==null?void 0:i.danmakuCore)==null?void 0:r.danmakuArray},async danmakuFilter(){var i,r,a;await s.waitPropertyByInterval(x,()=>{var o;return typeof b.player=="object"&&typeof((o=b.player)==null?void 0:o.playerPromise)=="object"},250,1e4);let e=await b.$player.playerPromise();return await s.waitPropertyByInterval(async()=>{e=await b.$player.playerPromise();},()=>{var o,l,p;return typeof((p=(l=(o=e==null?void 0:e.danmaku)==null?void 0:o.danmakuCore)==null?void 0:l.config)==null?void 0:p.danmakuFilter)=="function"},250,1e4),(a=(r=(i=e==null?void 0:e.danmaku)==null?void 0:i.danmakuCore)==null?void 0:r.config)==null?void 0:a.danmakuFilter}},$data:{danmakuArray:[]},$fn:{updateDanmakuArray:new s.LockFunction(async()=>{J.$data.danmakuArray=await J.$player.danmakuArray();},250)},async init(){let e=this.parseRule(),t=await this.$player.danmakuFilter(),i=this;if(typeof t=="function"){let r=await b.$player.playerPromise();await s.waitPropertyByInterval(async()=>{r=await b.$player.playerPromise();},()=>{var l,p,m;return typeof((m=(p=(l=r==null?void 0:r.danmaku)==null?void 0:l.danmakuCore)==null?void 0:p.config)==null?void 0:m.danmakuFilter)=="function"},250,1e4);let a=w.isBangumi(),o=function(l){let p=!1;return p=i.filter(l,e),a&&(p=!p),p};r.danmaku.danmakuCore.config.danmakuFilter=o,n.success("成功覆盖danmakuFilter");}},updateDanmakuArray(){this.$fn.updateDanmakuArray.run();},filter(e,t){this.updateDanmakuArray();let i=!1;if(i||c.getValue("bili-danmaku-filter-type-roll")&&(e.mode===1||e.mode===6)&&(i=!0),i||c.getValue("bili-danmaku-filter-type-top")&&(e.mode===5||e.mode===1||e.mode===6)&&(i=!0),i||c.getValue("bili-danmaku-filter-type-bottom")&&e.mode===4&&(i=!0),i||c.getValue("bili-danmaku-filter-type-colour")&&e.color!==16777215&&(i=!0),!i&&c.getValue("bili-danmaku-filter-type-repeat")){let r=this.$data.danmakuArray.findIndex((a,o)=>e.text===a.text&&e!=a);r!=-1&&(i=!0,console.log("重复："+r));}if(!i&&c.getValue("bili-danmaku-filter"))for(let r=0;r<t.length;r++){const a=t[r];if(typeof e.text=="string"&&e.text.match(a)){i=!0;break}}return i},parseRule(){let e=this.getValue(),t=[];return e.split(`
`).forEach(i=>{let r=i.trim(),a=new RegExp(s.parseStringToRegExpString(r),"ig");t.push(a);}),t},getValue(){return L(this.key,"")},setValue(e=""){q(this.key,e);}},$={fontFamily:[{text:"黑体",value:"SimHei, 'Microsoft JhengHei'"},{text:"宋体",value:"SimSun"},{text:"新宋体",value:"NSimSun"},{text:"仿宋",value:"FangSong"},{text:"微软雅黑",value:"'Microsoft YaHei'"},{text:"微软雅黑 Light",value:"'Microsoft Yahei UI Light'"},{text:"Noto Sans DemiLight",value:"'Noto Sans CJK SC DemiLight'"},{text:"'Noto Sans CJK SC Regular'",value:"'Noto Sans CJK SC Regular'"}],init(){J.init();let e=c.getValue("bili-danmaku-opacity"),t=c.getValue("bili-danmaku-area"),i=c.getValue("bili-danmaku-fontSize"),r=c.getValue("bili-danmaku-duration"),a=c.getValue("bili-danmaku-bold"),o=c.getValue("bili-danmaku-fullScreenSync"),l=c.getValue("bili-danmaku-speedSync"),p=c.getValue("bili-danmaku-fontFamily");this.setOpacity(e),this.setArea(t),this.setFontSize(i),this.setDuration(r),this.setBold(a),this.setFullScreenSync(o),this.setSpeedSync(l),this.setFontFamily(p);},async DanmakuCoreConfig(){let e=await b.$player.playerPromise();return await s.waitPropertyByInterval(async()=>(e=await b.$player.playerPromise(),e),()=>{var t,i,r,a;return typeof((i=(t=e==null?void 0:e.danmaku)==null?void 0:t.danmakuCore)==null?void 0:i.config)=="object"&&((a=(r=e==null?void 0:e.danmaku)==null?void 0:r.danmakuCore)==null?void 0:a.config)!=null},250,1e4),e.danmaku.danmakuCore.config},setOpacity(e){this.DanmakuCoreConfig().then(t=>{"opacity"in t?(t.opacity=e,n.success(`设置-弹幕不透明度: ${e}`)):n.error("设置-弹幕不透明度失败, 不存在 opacity 属性");});},setArea(e){let t={25:"1/4屏",50:"半屏",75:"3/4屏",100:"全屏"};this.DanmakuCoreConfig().then(i=>{"danmakuArea"in i?(i.danmakuArea=e,n.success(`设置-显示区域: ${e} => ${t[e]}`)):n.error("设置-显示区域失败, 不存在 danmakuArea 属性");});},setFontSize(e){this.DanmakuCoreConfig().then(t=>{"fontSize"in t?(t.fontSize=e,n.success(`设置-字体大小: ${e}`)):n.error("设置-字体大小失败, 不存在 fontSize 属性");});},setDuration(e){this.DanmakuCoreConfig().then(t=>{"duration"in t?(t.duration=e,n.success(`设置-持续时间（弹幕速度）: ${e}`)):n.error("设置-持续时间（弹幕速度）失败, 不存在 duration 属性");});},setBold(e){this.DanmakuCoreConfig().then(t=>{"bold"in t?(t.bold=e,n.success(`设置-粗体: ${e}`)):n.error("设置-粗体失败, 不存在 bold 属性");});},setFullScreenSync(e){this.DanmakuCoreConfig().then(t=>{"fullScreenSync"in t?(t.fullScreenSync=e,n.success(`设置-弹幕随屏幕缩放: ${e}`)):n.error("设置-弹幕随屏幕缩放失败, 不存在 fullScreenSync 属性");});},setFontFamily(e){this.DanmakuCoreConfig().then(t=>{"fontFamily"in t?(t.fontFamily=e,n.success(`设置-弹幕字体: ${e}`)):n.error("设置-弹幕字体失败, 不存在 fontFamily 属性");});},setSpeedSync(e){this.DanmakuCoreConfig().then(async t=>{let i=await b.$player.playerPromise();await s.waitPropertyByInterval(async()=>(i=await b.$player.playerPromise(),i),()=>typeof i.video=="object"&&i.video!=null&&i.video instanceof HTMLVideoElement,250,1e4);let r=i.video.playbackRate;"videoSpeed"in t?(t.videoSpeed=r,n.success(`设置-当前视频播放倍速: ${r}`)):n.error("设置-弹幕速度同步播放倍数失败, 不存在 videoSpeed 属性"),"speedSync"in t?(t.speedSync=e,n.success(`设置-弹幕速度同步播放倍数: ${e}`)):n.error("设置-弹幕速度同步播放倍数失败, 不存在 speedSync 属性");});}},ne=function(e,t,i,r){let a={attributes:{},type:"own",props:i,getLiElementCallBack:e,afterAddToUListCallBack:r};return a.attributes&&(a.attributes[he]=()=>(t&&Object.keys(t).forEach(o=>{let l=t[o];c.$data.data.has(o)&&n.warn("请检查该key(已存在): "+o),c.$data.data.set(o,l);}),!1)),a},Te={id:"panel-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[d("监听路由-重载所有功能","bili-listenRouterChange",!0,void 0,"用于处理页面跳转(本页)时功能不生效问题"),d("修复VueRouter跳转404问题","bili-repairVueRouter404",!0,void 0,"例如：点击UP主正确进入空间"),d("新标签页打开","bili-go-to-url-blank",!1,void 0,"通过开启【覆盖点击事件】相关的设置，通过新标签页打开链接"),d("允许复制","bili-allowCopy",!0,void 0,"一般用于处理楼层的回复弹窗内无法选中复制问题"),d("修复【倍速】按钮","bili-coverSpeedBtn",!0,void 0,"可以自行选择视频倍速"),d("修复【清晰度】按钮","bili-coverQuality",!0,void 0,"可查看当前视频的清晰度")]}]},{type:"deepMenu",text:"弹幕",forms:[{text:"弹幕设置",type:"forms",forms:[re("不透明度","bili-danmaku-opacity",.75,.2,1,.01,(e,t)=>{$.setOpacity(t);},e=>`${parseInt((e*100).toString())}%`),U("显示区域","bili-danmaku-area",25,[{text:"1/4屏",value:25},{text:"半屏",value:50},{text:"3/4屏",value:75},{text:"全屏",value:100}],(e,t,i)=>{$.setArea(t);}),re("字体大小","bili-danmaku-fontSize",.7,.2,2,.1,(e,t)=>{$.setFontSize(t);},e=>`${parseInt((e*100).toString())}%`),U("弹幕速度","bili-danmaku-duration",6,[{text:"极慢",value:10},{text:"较慢",value:8},{text:"适中",value:6},{text:"较快",value:4},{text:"极快",value:2}],(e,t,i)=>{$.setDuration(t);}),d("弹幕随屏幕缩放","bili-danmaku-fullScreenSync",!1,(e,t)=>{$.setFullScreenSync(t);}),d("弹幕速度同步播放倍数","bili-danmaku-speedSync",!0,(e,t)=>{$.setSpeedSync(t);})]},{type:"forms",text:"",forms:[U("弹幕字体","bili-danmaku-fontFamily",$.fontFamily.find(t=>t.text==="黑体").value,$.fontFamily,(e,t,i)=>{$.setFontFamily(t);}),d("粗体","bili-danmaku-bold",!0,(e,t)=>{$.setBold(t);})]},{text:"按类型屏蔽",type:"forms",forms:[ne(e=>{let t=f.createElement("div",{className:"bpx-player-dm-setting-left-block-content",innerHTML:`
											<style>
												.bpx-player-dm-setting-left-block-content{
													display: flex;
													gap: 20px;
													overflow-x: auto;
													align-items: center;
													flex-wrap: wrap;
													text-wrap: nowrap;
												}
												.bpx-player-block-filter-type{
													display: flex;
													flex-direction: column;
													max-width: unset !important;
													margin-left: 0px !important;
													text-align: center !important;
												}
												.bpx-player-block-filter-image{

												}
												..bpx-player-block-filter-image svg{
													enable-background: new 0 0 28 28;
												}
												.bpx-player-block-filter-label{

												}

												/* 图标状态 */
												.bpx-player-block-filter-type .bpx-player-block-filter-image-enable{
													display: none;
													fill: var(--bili-color, #00a1d6);
													color: var(--bili-color, #00a1d6);
												}
												.bpx-player-block-filter-type[data-value="true"] .bpx-player-block-filter-label{
													color: var(--bili-color, #00a1d6);
												}
												.bpx-player-block-filter-type[data-value="true"] .bpx-player-block-filter-image{
													display: none;
												}
												.bpx-player-block-filter-type[data-value="true"] .bpx-player-block-filter-image-enable{
													display: unset;
												}
											</style>
											<div class="bpx-player-block-filter-type bpx-player-block-repeat" data-key="bili-danmaku-filter-type-repeat" data-type="repeat">
												<span class="bpx-player-block-filter-image">
													<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" viewBox="0 0 28 28">
													<path d="M23 3L5 3C4.86899 3 4.74037 3.00716 4.61 3.02C4.47963 3.03284 4.34849 3.05444 4.22 3.08C4.09151 3.10556 3.96537 3.13197 3.84 3.17C3.71464 3.20803 3.59103 3.24987 3.47 3.3C3.34897 3.35013 3.22554 3.40825 3.11 3.47C2.99447 3.53176 2.88893 3.59722 2.78 3.67C2.67107 3.74279 2.56127 3.82689 2.46 3.91C2.35873 3.99311 2.26263 4.07737 2.17 4.17C2.07737 4.26263 1.99311 4.35873 1.91 4.46C1.82689 4.56127 1.74279 4.67107 1.67 4.78C1.59722 4.88893 1.53175 4.99447 1.47 5.11C1.40824 5.22554 1.35013 5.34897 1.3 5.47C1.24987 5.59103 1.20803 5.71464 1.17 5.84C1.13197 5.96537 1.10556 6.09151 1.08 6.22C1.05444 6.34849 1.03284 6.47963 1.02 6.61C1.00716 6.74037 1 6.86899 1 7L1 21C1 21.131 1.00716 21.2596 1.02 21.39C1.03284 21.5203 1.05444 21.6515 1.08 21.78C1.10556 21.9085 1.13197 22.0347 1.17 22.16C1.20803 22.2854 1.24987 22.409 1.3 22.53C1.35013 22.6511 1.40825 22.7745 1.47 22.89C1.53176 23.0055 1.59722 23.1111 1.67 23.22C1.74279 23.3289 1.82689 23.4387 1.91 23.54C1.99311 23.6413 2.07737 23.7374 2.17 23.83C2.26263 23.9227 2.35873 24.0069 2.46 24.09C2.56127 24.1731 2.67107 24.2572 2.78 24.33C2.88893 24.4027 2.99447 24.4682 3.11 24.53C3.22554 24.5917 3.34897 24.6499 3.47 24.7C3.59103 24.7501 3.71464 24.7919 3.84 24.83C3.96537 24.868 4.09151 24.8945 4.22 24.92C4.34849 24.9456 4.47963 24.9672 4.61 24.98C4.74037 24.9929 4.86899 25 5 25L23 25C23.131 25 23.2596 24.9929 23.39 24.98C23.5203 24.9672 23.6515 24.9456 23.78 24.92C23.9085 24.8945 24.0347 24.868 24.16 24.83C24.2854 24.7919 24.409 24.7501 24.53 24.7C24.6511 24.6499 24.7745 24.5917 24.89 24.53C25.0055 24.4682 25.1111 24.4027 25.22 24.33C25.3289 24.2572 25.4387 24.1731 25.54 24.09C25.6413 24.0069 25.7374 23.9227 25.83 23.83C25.9227 23.7374 26.0069 23.6413 26.09 23.54C26.1731 23.4387 26.2572 23.3289 26.33 23.22C26.4028 23.1111 26.4683 23.0055 26.53 22.89C26.5917 22.7745 26.6499 22.6511 26.7 22.53C26.7501 22.409 26.7919 22.2854 26.83 22.16C26.868 22.0347 26.8945 21.9085 26.92 21.78C26.9456 21.6515 26.9672 21.5203 26.98 21.39C26.9929 21.2596 27 21.131 27 21L27 7C27 6.86899 26.9929 6.74037 26.98 6.61C26.9672 6.47963 26.9456 6.34849 26.92 6.22C26.8945 6.09151 26.868 5.96537 26.83 5.84C26.7919 5.71464 26.7501 5.59103 26.7 5.47C26.6499 5.34897 26.5917 5.22554 26.53 5.11C26.4683 4.99447 26.4028 4.88893 26.33 4.78C26.2572 4.67107 26.1731 4.56127 26.09 4.46C26.0069 4.35873 25.9227 4.26263 25.83 4.17C25.7374 4.07737 25.6413 3.99311 25.54 3.91C25.4387 3.82689 25.3289 3.74278 25.22 3.67C25.1111 3.59722 25.0055 3.53176 24.89 3.47C24.7745 3.40825 24.6511 3.35013 24.53 3.3C24.409 3.24987 24.2854 3.20803 24.16 3.17C24.0347 3.13197 23.9085 3.10556 23.78 3.08C23.6515 3.05444 23.5203 3.03284 23.39 3.02C23.2596 3.00716 23.131 3 23 3ZM13 11L19 11C19.0657 11 19.1356 11.0072 19.2 11.02C19.2644 11.0328 19.3193 11.0549 19.38 11.08C19.4407 11.1051 19.5054 11.1335 19.56 11.17C19.6146 11.2065 19.6636 11.2436 19.71 11.29C19.7564 11.3364 19.7935 11.3854 19.83 11.44C19.8665 11.4946 19.8949 11.5593 19.92 11.62C19.9451 11.6807 19.9672 11.7356 19.98 11.8C19.9928 11.8644 20 11.9343 20 12C20 12.0657 19.9928 12.1356 19.98 12.2C19.9672 12.2644 19.9451 12.3193 19.92 12.38C19.8949 12.4407 19.8665 12.5054 19.83 12.56C19.7935 12.6146 19.7564 12.6636 19.71 12.71C19.6636 12.7564 19.6146 12.7935 19.56 12.83C19.5054 12.8665 19.4407 12.8949 19.38 12.92C19.3193 12.9451 19.2644 12.9672 19.2 12.98C19.1356 12.9928 19.0657 13 19 13L13 13C12.9343 13 12.8644 12.9928 12.8 12.98C12.7356 12.9672 12.6807 12.9451 12.62 12.92C12.5593 12.8949 12.4946 12.8665 12.44 12.83C12.3854 12.7935 12.3364 12.7564 12.29 12.71C12.2435 12.6636 12.2065 12.6146 12.17 12.56C12.1335 12.5054 12.1051 12.4407 12.08 12.38C12.0549 12.3193 12.0328 12.2644 12.02 12.2C12.0072 12.1356 12 12.0657 12 12C12 11.9343 12.0072 11.8644 12.02 11.8C12.0328 11.7356 12.0549 11.6807 12.08 11.62C12.1051 11.5593 12.1335 11.4946 12.17 11.44C12.2065 11.3854 12.2435 11.3364 12.29 11.29C12.3364 11.2436 12.3854 11.2065 12.44 11.17C12.4946 11.1335 12.5593 11.1051 12.62 11.08C12.6807 11.0549 12.7356 11.0328 12.8 11.02C12.8644 11.0072 12.9343 11 13 11ZM9 13L7 13L7 11L9 11L9 13ZM9 17L7 17L7 15L9 15L9 17ZM19 17L13 17C12.9343 17 12.8644 16.9928 12.8 16.98C12.7356 16.9672 12.6807 16.9451 12.62 16.92C12.5593 16.8949 12.4946 16.8665 12.44 16.83C12.3854 16.7935 12.3364 16.7564 12.29 16.71C12.2435 16.6636 12.2065 16.6146 12.17 16.56C12.1335 16.5054 12.1051 16.4407 12.08 16.38C12.0549 16.3193 12.0328 16.2644 12.02 16.2C12.0072 16.1356 12 16.0657 12 16C12 15.9343 12.0072 15.8644 12.02 15.8C12.0328 15.7356 12.0549 15.6807 12.08 15.62C12.1051 15.5593 12.1335 15.4946 12.17 15.44C12.2065 15.3854 12.2435 15.3364 12.29 15.29C12.3364 15.2435 12.3854 15.2065 12.44 15.17C12.4946 15.1335 12.5593 15.1051 12.62 15.08C12.6807 15.0549 12.7356 15.0328 12.8 15.02C12.8644 15.0072 12.9343 15 13 15L19 15C19.0657 15 19.1356 15.0072 19.2 15.02C19.2644 15.0328 19.3193 15.0549 19.38 15.08C19.4407 15.1051 19.5054 15.1335 19.56 15.17C19.6146 15.2065 19.6636 15.2435 19.71 15.29C19.7564 15.3364 19.7935 15.3854 19.83 15.44C19.8665 15.4946 19.8949 15.5593 19.92 15.62C19.9451 15.6807 19.9672 15.7356 19.98 15.8C19.9928 15.8644 20 15.9343 20 16C20 16.0657 19.9928 16.1356 19.98 16.2C19.9672 16.2644 19.9451 16.3193 19.92 16.38C19.8949 16.4407 19.8665 16.5054 19.83 16.56C19.7935 16.6146 19.7564 16.6636 19.71 16.71C19.6636 16.7564 19.6146 16.7935 19.56 16.83C19.5054 16.8665 19.4407 16.8949 19.38 16.92C19.3193 16.9451 19.2644 16.9672 19.2 16.98C19.1356 16.9928 19.0657 17 19 17Z"></path>
													</svg>
												</span>
												<span class="bpx-player-block-filter-image-enable">
													<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" viewBox="0 0 28 28">
														<g clip-path="url(#clip-path-UVHcF64rhIOX1dnvvwfXL)">
															<path d="M23 15C24.487 15 25.866 15.469 27 16.26L27 7C27 6.86899 26.9929 6.74037 26.98 6.61C26.9672 6.47963 26.9456 6.34849 26.92 6.22C26.8945 6.09151 26.868 5.96537 26.83 5.84C26.7919 5.71464 26.7501 5.59103 26.7 5.47C26.6499 5.34897 26.5917 5.22554 26.53 5.11C26.4683 4.99447 26.4028 4.88893 26.33 4.78C26.2572 4.67107 26.1731 4.56127 26.09 4.46C26.0069 4.35873 25.9227 4.26263 25.83 4.17C25.7374 4.07737 25.6413 3.99311 25.54 3.91C25.4387 3.82689 25.3289 3.74278 25.22 3.67C25.1111 3.59722 25.0055 3.53176 24.89 3.47C24.7745 3.40825 24.6511 3.35013 24.53 3.3C24.409 3.24987 24.2854 3.20803 24.16 3.17C24.0347 3.13197 23.9085 3.10556 23.78 3.08C23.6515 3.05444 23.5203 3.03284 23.39 3.02C23.2596 3.00716 23.131 3 23 3L5 3C4.86899 3 4.74037 3.00716 4.61 3.02C4.47963 3.03284 4.34849 3.05444 4.22 3.08C4.09151 3.10556 3.96537 3.13197 3.84 3.17C3.71464 3.20803 3.59103 3.24987 3.47 3.3C3.34897 3.35013 3.22554 3.40825 3.11 3.47C2.99447 3.53176 2.88893 3.59722 2.78 3.67C2.67107 3.74279 2.56127 3.82689 2.46 3.91C2.35873 3.99311 2.26263 4.07737 2.17 4.17C2.07737 4.26263 1.99311 4.35873 1.91 4.46C1.82689 4.56127 1.74279 4.67107 1.67 4.78C1.59722 4.88893 1.53175 4.99447 1.47 5.11C1.40824 5.22554 1.35013 5.34897 1.3 5.47C1.24987 5.59103 1.20803 5.71464 1.17 5.84C1.13197 5.96537 1.10556 6.09151 1.08 6.22C1.05444 6.34849 1.03284 6.47963 1.02 6.61C1.00716 6.74037 1 6.86899 1 7L1 21C1 21.131 1.00716 21.2596 1.02 21.39C1.03284 21.5203 1.05444 21.6515 1.08 21.78C1.10556 21.9085 1.13197 22.0347 1.17 22.16C1.20803 22.2854 1.24987 22.409 1.3 22.53C1.35013 22.6511 1.40825 22.7745 1.47 22.89C1.53176 23.0055 1.59722 23.1111 1.67 23.22C1.74279 23.3289 1.82689 23.4387 1.91 23.54C1.99311 23.6413 2.07737 23.7374 2.17 23.83C2.26263 23.9227 2.35873 24.0069 2.46 24.09C2.56127 24.1731 2.67107 24.2572 2.78 24.33C2.88893 24.4027 2.99447 24.4682 3.11 24.53C3.22554 24.5917 3.34897 24.6499 3.47 24.7C3.59103 24.7501 3.71464 24.7919 3.84 24.83C3.96537 24.868 4.09151 24.8945 4.22 24.92C4.34849 24.9456 4.47963 24.9672 4.61 24.98C4.74037 24.9929 4.86899 25 5 25L16.67 25C16.6071 24.8673 16.5545 24.7364 16.5 24.6C16.4455 24.4636 16.3958 24.3196 16.35 24.18C16.3042 24.0404 16.2569 23.9021 16.22 23.76C16.1831 23.6178 16.1579 23.4742 16.13 23.33C16.1021 23.1857 16.0788 23.0457 16.06 22.9C16.0413 22.7543 16.01 22.6066 16.01 22.46C16.01 22.3134 16 22.1669 16 22.02C16 21.8731 16.01 21.7266 16.01 21.58C16.01 21.4333 16.0319 21.2857 16.05 21.14C16.0681 20.9942 16.0927 20.8443 16.12 20.7C16.1472 20.5557 16.1837 20.4124 16.22 20.27C16.2563 20.1277 16.2949 19.9898 16.34 19.85C16.3851 19.7102 16.4362 19.5667 16.49 19.43C16.5439 19.2933 16.5977 19.163 16.66 19.03C16.7223 18.897 16.7895 18.7689 16.86 18.64C16.9306 18.5111 17.0015 18.3841 17.08 18.26C17.1585 18.1359 17.2439 18.0089 17.33 17.89C17.4162 17.771 17.5065 17.6533 17.6 17.54C17.6935 17.4267 17.7895 17.3172 17.89 17.21C17.9904 17.1029 18.093 17.0007 18.2 16.9C18.3069 16.7993 18.4169 16.7038 18.53 16.61C18.6431 16.5163 18.7612 16.4264 18.88 16.34C18.9988 16.2535 19.1161 16.1688 19.24 16.09C19.364 16.0112 19.4913 15.9409 19.62 15.87C19.7487 15.7992 19.8771 15.7327 20.01 15.67C20.1429 15.6074 20.2835 15.5441 20.42 15.49C20.5565 15.4359 20.6903 15.3854 20.83 15.34C20.9697 15.2945 21.1177 15.2565 21.26 15.22C21.4023 15.1834 21.5457 15.1475 21.69 15.12C21.8343 15.0925 21.9743 15.0784 22.12 15.06C22.2657 15.0416 22.4134 15.01 22.56 15.01C22.7067 15.01 22.8531 15 23 15ZM13 11L19 11C19.0657 11 19.1356 11.0072 19.2 11.02C19.2644 11.0328 19.3193 11.0549 19.38 11.08C19.4407 11.1051 19.5054 11.1335 19.56 11.17C19.6146 11.2065 19.6636 11.2436 19.71 11.29C19.7564 11.3364 19.7935 11.3854 19.83 11.44C19.8665 11.4946 19.8949 11.5593 19.92 11.62C19.9451 11.6807 19.9672 11.7356 19.98 11.8C19.9928 11.8644 20 11.9343 20 12C20 12.0657 19.9928 12.1356 19.98 12.2C19.9672 12.2644 19.9451 12.3193 19.92 12.38C19.8949 12.4407 19.8665 12.5054 19.83 12.56C19.7935 12.6146 19.7564 12.6636 19.71 12.71C19.6636 12.7564 19.6146 12.7935 19.56 12.83C19.5054 12.8665 19.4407 12.8949 19.38 12.92C19.3193 12.9451 19.2644 12.9672 19.2 12.98C19.1356 12.9928 19.0657 13 19 13L13 13C12.9343 13 12.8644 12.9928 12.8 12.98C12.7356 12.9672 12.6807 12.9451 12.62 12.92C12.5593 12.8949 12.4946 12.8665 12.44 12.83C12.3854 12.7935 12.3364 12.7564 12.29 12.71C12.2435 12.6636 12.2065 12.6146 12.17 12.56C12.1335 12.5054 12.1051 12.4407 12.08 12.38C12.0549 12.3193 12.0328 12.2644 12.02 12.2C12.0072 12.1356 12 12.0657 12 12C12 11.9343 12.0072 11.8644 12.02 11.8C12.0328 11.7356 12.0549 11.6807 12.08 11.62C12.1051 11.5593 12.1335 11.4946 12.17 11.44C12.2065 11.3854 12.2435 11.3364 12.29 11.29C12.3364 11.2436 12.3854 11.2065 12.44 11.17C12.4946 11.1335 12.5593 11.1051 12.62 11.08C12.6807 11.0549 12.7356 11.0328 12.8 11.02C12.8644 11.0072 12.9343 11 13 11ZM9 13L7 13L7 11L9 11L9 13ZM9 17L7 17L7 15L9 15L9 17ZM12 16C12 15.9343 12.0072 15.8644 12.02 15.8C12.0328 15.7356 12.0549 15.6807 12.08 15.62C12.1051 15.5593 12.1335 15.4946 12.17 15.44C12.2065 15.3854 12.2435 15.3364 12.29 15.29C12.3364 15.2435 12.3854 15.2065 12.44 15.17C12.4946 15.1335 12.5593 15.1051 12.62 15.08C12.6807 15.0549 12.7356 15.0328 12.8 15.02C12.8644 15.0072 12.9343 15 13 15L17 15C17.0657 15 17.1356 15.0072 17.2 15.02C17.2644 15.0328 17.3193 15.0549 17.38 15.08C17.4407 15.1051 17.5054 15.1335 17.56 15.17C17.6146 15.2065 17.6636 15.2435 17.71 15.29C17.7564 15.3364 17.7935 15.3854 17.83 15.44C17.8665 15.4946 17.8949 15.5593 17.92 15.62C17.9451 15.6807 17.9672 15.7356 17.98 15.8C17.9928 15.8644 18 15.9343 18 16C18 16.0657 17.9928 16.1356 17.98 16.2C17.9672 16.2644 17.9451 16.3193 17.92 16.38C17.8949 16.4407 17.8665 16.5054 17.83 16.56C17.7935 16.6146 17.7564 16.6636 17.71 16.71C17.6636 16.7564 17.6146 16.7935 17.56 16.83C17.5054 16.8665 17.4407 16.8949 17.38 16.92C17.3193 16.9451 17.2644 16.9672 17.2 16.98C17.1356 16.9928 17.0657 17 17 17L13 17C12.9343 17 12.8644 16.9928 12.8 16.98C12.7356 16.9672 12.6807 16.9451 12.62 16.92C12.5593 16.8949 12.4946 16.8665 12.44 16.83C12.3854 16.7935 12.3364 16.7564 12.29 16.71C12.2435 16.6636 12.2065 16.6146 12.17 16.56C12.1335 16.5054 12.1051 16.4407 12.08 16.38C12.0549 16.3193 12.0328 16.2644 12.02 16.2C12.0072 16.1356 12 16.0657 12 16Z">
															</path>
															<path d="M26.6292 18.2151C26.5713 18.1572 26.5121 18.1007 26.4514 18.0458C26.3907 17.9908 26.3288 17.9374 26.2655 17.8854C26.2022 17.8335 26.1377 17.7831 26.072 17.7343C26.0062 17.6856 25.9393 17.6385 25.8712 17.593C25.8032 17.5475 25.734 17.5037 25.6638 17.4616C25.5936 17.4195 25.5224 17.3792 25.4502 17.3407C25.378 17.302 25.3049 17.2652 25.2309 17.2302C25.1569 17.1952 25.082 17.1621 25.0064 17.1308C24.9308 17.0994 24.8544 17.0699 24.7773 17.0423C24.7003 17.0148 24.6226 16.9891 24.5442 16.9654C24.4658 16.9416 24.3869 16.9197 24.3076 16.8999C24.2281 16.88 24.1483 16.8621 24.068 16.846C23.9877 16.8301 23.9071 16.8161 23.8261 16.8041C23.7451 16.7921 23.6639 16.7821 23.5825 16.774C23.501 16.766 23.4193 16.76 23.3375 16.756C23.2558 16.752 23.174 16.75 23.0921 16.75C23.0103 16.75 22.9285 16.752 22.8467 16.756C22.765 16.76 22.6833 16.766 22.6018 16.774C22.5204 16.7821 22.4392 16.7921 22.3582 16.8041C22.2772 16.8161 22.1965 16.8301 22.1163 16.846C22.036 16.8621 21.9561 16.88 21.8767 16.8999C21.7973 16.9197 21.7185 16.9416 21.6401 16.9654C21.5617 16.9891 21.484 17.0148 21.407 17.0423C21.3299 17.0699 21.2535 17.0994 21.1779 17.1308C21.1022 17.1621 21.0274 17.1952 20.9535 17.2302C20.8794 17.2652 20.8063 17.302 20.7341 17.3407C20.6619 17.3792 20.5907 17.4195 20.5205 17.4616C20.4503 17.5037 20.3811 17.5475 20.3131 17.593C20.245 17.6385 20.1781 17.6856 20.1123 17.7343C20.0465 17.7831 19.982 17.8335 19.9188 17.8854C19.8555 17.9374 19.7935 17.9908 19.7328 18.0458C19.6722 18.1007 19.613 18.1572 19.5551 18.2151C19.4972 18.273 19.4407 18.3322 19.3858 18.3928C19.3308 18.4535 19.2774 18.5155 19.2254 18.5788C19.1735 18.642 19.1231 18.7065 19.0743 18.7723C19.0256 18.8381 18.9785 18.905 18.933 18.9731C18.8875 19.0411 18.8437 19.1103 18.8016 19.1805C18.7595 19.2507 18.7192 19.3219 18.6807 19.3941C18.642 19.4663 18.6052 19.5394 18.5702 19.6135C18.5352 19.6874 18.5021 19.7622 18.4708 19.8379C18.4394 19.9135 18.4099 19.9899 18.3823 20.067C18.3548 20.144 18.3291 20.2217 18.3054 20.3001C18.2816 20.3785 18.2597 20.4573 18.2399 20.5367C18.22 20.6161 18.2021 20.696 18.186 20.7763C18.1701 20.8565 18.1561 20.9372 18.1441 21.0182C18.1321 21.0992 18.1221 21.1804 18.114 21.2618C18.106 21.3433 18.1 21.425 18.096 21.5067C18.092 21.5885 18.09 21.6703 18.09 21.7521C18.09 21.834 18.092 21.9158 18.096 21.9975C18.1 22.0793 18.106 22.161 18.114 22.2425C18.1221 22.3239 18.1321 22.4051 18.1441 22.4861C18.1561 22.5671 18.1701 22.6477 18.186 22.728C18.2021 22.8083 18.22 22.8881 18.2399 22.9676C18.2597 23.047 18.2816 23.1259 18.3054 23.2042C18.3291 23.2826 18.3548 23.3603 18.3823 23.4373C18.4099 23.5144 18.4394 23.5908 18.4708 23.6664C18.5021 23.742 18.5352 23.8169 18.5702 23.8909C18.6052 23.9649 18.642 24.038 18.6807 24.1102C18.7192 24.1824 18.7595 24.2536 18.8016 24.3238C18.8437 24.394 18.8875 24.4632 18.933 24.5312C18.9785 24.5993 19.0256 24.6662 19.0743 24.732C19.1231 24.7977 19.1735 24.8622 19.2254 24.9255C19.2774 24.9888 19.3308 25.0507 19.3858 25.1114C19.4407 25.1721 19.4972 25.2313 19.5551 25.2892C19.6129 25.3475 19.6721 25.4044 19.7326 25.4598C19.7932 25.5152 19.8551 25.569 19.9184 25.6214C19.9816 25.6737 20.0461 25.7245 20.1119 25.7736C20.1776 25.8228 20.2445 25.8703 20.3126 25.9162C20.3807 25.9621 20.4499 26.0063 20.5201 26.0488C20.5904 26.0912 20.6617 26.1319 20.7339 26.1708C20.8062 26.2098 20.8794 26.247 20.9535 26.2824C21.0275 26.3177 21.1024 26.3512 21.1782 26.3829C21.2539 26.4145 21.3304 26.4443 21.4076 26.4723C21.4848 26.5001 21.5627 26.5261 21.6412 26.5502C21.7197 26.5743 21.7987 26.5964 21.8783 26.6165C21.9579 26.6367 22.0379 26.6549 22.1183 26.6711C22.1988 26.6874 22.2796 26.7017 22.3608 26.714C22.442 26.7262 22.5234 26.7365 22.6051 26.7447C22.6868 26.7529 22.7686 26.7592 22.8506 26.7634C22.9326 26.7676 23.0146 26.7698 23.0967 26.77C23.1788 26.7702 23.2609 26.7684 23.3429 26.7645C23.4249 26.7606 23.5068 26.7548 23.5885 26.7469C23.6702 26.739 23.7516 26.7291 23.8329 26.7172C23.9141 26.7053 23.995 26.6914 24.0755 26.6755C24.156 26.6597 24.2362 26.6418 24.3159 26.6219C24.3955 26.6021 24.4746 26.5803 24.5532 26.5566C24.6318 26.5329 24.7098 26.5073 24.7871 26.4797C24.8645 26.4521 24.9411 26.4227 25.0169 26.3913C25.0928 26.36 25.1679 26.3269 25.2421 26.2918C25.3164 26.2568 25.3898 26.2199 25.4622 26.1813C25.5346 26.1427 25.6061 26.1023 25.6765 26.0601C25.7469 26.0179 25.8163 25.9741 25.8846 25.9285C25.9529 25.883 26.02 25.8357 26.086 25.7868C26.1519 25.738 26.2166 25.6875 26.2801 25.6355C26.3436 25.5834 26.4057 25.5298 26.4665 25.4747C26.5274 25.4196 26.5868 25.363 26.6449 25.3049C26.703 25.2468 26.7596 25.1874 26.8147 25.1265C26.8698 25.0657 26.9234 25.0036 26.9755 24.9401C27.0275 24.8766 27.078 24.8119 27.1268 24.746C27.1757 24.68 27.223 24.6129 27.2685 24.5446C27.3141 24.4763 27.3579 24.4069 27.4002 24.3365C27.4423 24.2661 27.4827 24.1946 27.5213 24.1222C27.5599 24.0498 27.5968 23.9764 27.6318 23.9021C27.6669 23.8279 27.7 23.7528 27.7313 23.6769C27.7627 23.6011 27.7921 23.5245 27.8197 23.4471C27.8473 23.3698 27.8729 23.2918 27.8966 23.2132C27.9203 23.1346 27.9421 23.0555 27.9619 22.9759C27.9818 22.8962 27.9997 22.8161 28.0155 22.7356C28.0314 22.655 28.0453 22.5741 28.0572 22.4929C28.0691 22.4116 28.079 22.3302 28.0869 22.2485C28.0948 22.1668 28.1006 22.0849 28.1045 22.0029C28.1084 21.9209 28.1102 21.8388 28.11 21.7567C28.1098 21.6746 28.1076 21.5926 28.1034 21.5106C28.0992 21.4286 28.0929 21.3468 28.0847 21.2651C28.0765 21.1834 28.0662 21.102 28.054 21.0208C28.0417 20.9396 28.0274 20.8588 28.0111 20.7783C27.9949 20.6979 27.9767 20.6179 27.9565 20.5383C27.9364 20.4587 27.9143 20.3797 27.8902 20.3012C27.8661 20.2227 27.8401 20.1448 27.8123 20.0676C27.7843 19.9904 27.7545 19.9139 27.7229 19.8382C27.6912 19.7624 27.6577 19.6875 27.6224 19.6135C27.587 19.5394 27.5498 19.4662 27.5108 19.3939C27.4719 19.3217 27.4312 19.2504 27.3888 19.1801C27.3463 19.1099 27.3021 19.0407 27.2562 18.9726C27.2103 18.9045 27.1628 18.8376 27.1136 18.7719C27.0645 18.7061 27.0137 18.6416 26.9614 18.5784C26.909 18.5151 26.8552 18.4532 26.7998 18.3926C26.7444 18.3321 26.6875 18.2729 26.6292 18.2151ZM20.9697 23.8746C20.8606 23.7655 20.7605 23.6488 20.6694 23.5242C20.5782 23.3997 20.4972 23.2689 20.4262 23.132C20.3553 22.9949 20.2954 22.8532 20.2463 22.707C20.1972 22.5607 20.1596 22.4116 20.1334 22.2596C20.1073 22.1075 20.0931 21.9543 20.0906 21.8001C20.0881 21.6458 20.0975 21.4922 20.1187 21.3394C20.1399 21.1866 20.1727 21.0363 20.2171 20.8886C20.2615 20.7408 20.3169 20.5973 20.3834 20.4581L24.3862 24.4609C24.247 24.5274 24.1035 24.5828 23.9557 24.6272C23.808 24.6716 23.6577 24.7044 23.5049 24.7256C23.3521 24.7468 23.1985 24.7562 23.0442 24.7537C22.8899 24.7512 22.7368 24.7369 22.5847 24.7109C22.4327 24.6847 22.2836 24.6471 22.1373 24.598C21.991 24.5489 21.8494 24.4889 21.7123 24.418C21.5753 24.3471 21.4446 24.266 21.32 24.1749C21.1955 24.0838 21.0787 23.9837 20.9697 23.8746ZM25.8009 23.0472L21.7981 19.0444C21.9373 18.9781 22.0807 18.9229 22.2285 18.8788C22.3762 18.8345 22.5265 18.8019 22.6793 18.7808C22.832 18.7598 22.9855 18.7506 23.1397 18.7532C23.2938 18.7557 23.4469 18.7701 23.5989 18.7963C23.7508 18.8225 23.8998 18.8601 24.046 18.9092C24.1922 18.9583 24.3337 19.0183 24.4707 19.0892C24.6076 19.1602 24.7382 19.2412 24.8626 19.3323C24.9871 19.4233 25.1038 19.5233 25.2129 19.6324C25.3219 19.7414 25.422 19.8582 25.513 19.9826C25.6041 20.107 25.6851 20.2377 25.756 20.3746C25.8269 20.5116 25.887 20.6531 25.9361 20.7993C25.9852 20.9454 26.0228 21.0945 26.049 21.2464C26.0752 21.3984 26.0896 21.5515 26.0921 21.7056C26.0947 21.8598 26.0855 22.0133 26.0645 22.166C26.0434 22.3188 26.0107 22.4691 25.9665 22.6168C25.9224 22.7646 25.8672 22.908 25.8009 23.0472Z">
															</path>
														</g>
													</svg>
												</span>
												<span class="bpx-player-block-filter-label">重复</span>
											</div>
											<div class="bpx-player-block-filter-type bpx-player-block-roll" data-key="bili-danmaku-filter-type-roll" data-type="roll">
												<span class="bpx-player-block-filter-image">
													<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" viewBox="0 0 28 28">
														<path d="M23 3H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zM11 9h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2zm-3 2H6V9h2v2zm4 4h-2v-2h2v2zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z"></path>
													</svg>
												</span>
												<span class="bpx-player-block-filter-image-enable">
													<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" style="enable-background:new 0 0 28 28" viewBox="0 0 28 28">
														<path d="M23 15c1.487 0 2.866.464 4 1.255V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h11.674A7 7 0 0 1 23 15zM11 9h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2zm-3 2H6V9h2v2zm4 4h-2v-2h2v2zm2-1a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2h-1a1 1 0 0 1-1-1z"></path>
														<path d="M26.536 18.464a5 5 0 0 0-7.071 0 5 5 0 0 0 0 7.071 5 5 0 1 0 7.071-7.071zm-5.657 5.657a3 3 0 0 1-.586-3.415l4.001 4.001a3 3 0 0 1-3.415-.586zm4.829-.827-4.001-4.001a3.002 3.002 0 0 1 4.001 4.001z"></path>
													</svg>
												</span>
												<span class="bpx-player-block-filter-label">滚动</span>
											</div>
											<div class="bpx-player-block-filter-type bpx-player-block-top" data-key="bili-danmaku-filter-type-top" data-type="top">
												<span class="bpx-player-block-filter-image">
													<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" viewBox="0 0 28 28">
														<path d="M23 3H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zM9 9H7V7h2v2zm4 0h-2V7h2v2zm4 0h-2V7h2v2zm4 0h-2V7h2v2z"></path>
													</svg>
												</span>
												<span class="bpx-player-block-filter-image-enable">
													<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" style="enable-background:new 0 0 28 28" viewBox="0 0 28 28">
														<path d="M23 15c1.487 0 2.866.464 4 1.255V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h11.674A7 7 0 0 1 23 15zm-4-8h2v2h-2V7zM9 9H7V7h2v2zm4 0h-2V7h2v2zm2-2h2v2h-2V7z"></path>
														<path d="M26.536 18.464a5 5 0 0 0-7.071 0 5 5 0 0 0 0 7.071 5 5 0 1 0 7.071-7.071zm-5.657 5.657a3 3 0 0 1-.586-3.415l4.001 4.001a3 3 0 0 1-3.415-.586zm4.829-.827-4.001-4.001a3.002 3.002 0 0 1 4.001 4.001z"></path>
													</svg>
												</span>
												<span class="bpx-player-block-filter-label">顶部</span>
											</div>
											<div class="bpx-player-block-filter-type bpx-player-block-bottom" data-key="bili-danmaku-filter-type-bottom" data-type="bottom">
												<span class="bpx-player-block-filter-image">
													<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" viewBox="0 0 28 28">
														<path d="M23 3H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zM9 21H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"></path>
													</svg>
												</span>
												<span class="bpx-player-block-filter-image-enable">
													<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" style="enable-background:new 0 0 28 28" viewBox="0 0 28 28">
														<path d="M23 15c1.487 0 2.866.464 4 1.255V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h11.674A7 7 0 0 1 23 15zM9 21H7v-2h2v2zm4 0h-2v-2h2v2z"></path>
														<path d="M26.536 18.464a5 5 0 0 0-7.071 0 5 5 0 0 0 0 7.071 5 5 0 1 0 7.071-7.071zm-5.657 5.657a3 3 0 0 1-.586-3.415l4.001 4.001a3 3 0 0 1-3.415-.586zm4.829-.827-4.001-4.001a3.002 3.002 0 0 1 4.001 4.001z"></path>
													</svg>
												</span>
												<span class="bpx-player-block-filter-label">底部</span>
											</div>
											<div class="bpx-player-block-filter-type bpx-player-block-colour" data-key="bili-danmaku-filter-type-colour" data-type="colour">
												<span class="bpx-player-block-filter-image">
													<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" viewBox="0 0 28 28">
														<path d="M17.365 11.118c0-.612-.535-1.147-1.147-1.147s-1.147.535-1.147 1.147c0 .611.535 1.147 1.147 1.147s1.147-.536 1.147-1.147zM12.93 9.665c-.764 0-1.376.611-1.376 1.3 0 .689.612 1.301 1.376 1.301s1.376-.612 1.376-1.301-.612-1.3-1.376-1.3zM9.794 11.883c-.764 0-1.376.612-1.376 1.3 0 .689.612 1.3 1.376 1.3s1.376-.611 1.376-1.3c.001-.688-.611-1.3-1.376-1.3zM10.023 15.171c-.612 0-1.147.536-1.147 1.148 0 .611.535 1.146 1.147 1.146s1.147-.535 1.147-1.146c.001-.612-.535-1.148-1.147-1.148zM17.823 12.953c-.611 0-1.147.535-1.147 1.147s.536 1.147 1.147 1.147c.612 0 1.148-.535 1.148-1.147s-.536-1.147-1.148-1.147z"></path>
														<path d="M23.177 3H4.824C2.683 3 1 4.833 1 7.167v13.665C1 23.167 2.683 25 4.824 25h18.353C25.318 25 27 23.167 27 20.833V7.167C27 4.833 25.318 3 23.177 3zm-3.442 13.624c-1.987.612-4.129-.154-5.046.764-.918.918 1.529 1.606 0 2.219-1.988.84-7.341-.535-8.182-4.053-.841-3.441 2.905-6.5 5.888-7.035 2.906-.535 6.041.841 8.181 2.982 2.065 2.141.765 4.74-.841 5.123z"></path>
													</svg>
												</span>
												<span class="bpx-player-block-filter-image-enable">
													<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" style="enable-background:new 0 0 28 28" viewBox="0 0 28 28">
														<path d="M17.823 15.247c.612 0 1.148-.535 1.148-1.147s-.536-1.147-1.148-1.147c-.611 0-1.147.535-1.147 1.147s.536 1.147 1.147 1.147zM17.365 11.118c0-.612-.535-1.147-1.147-1.147s-1.147.535-1.147 1.147c0 .611.535 1.147 1.147 1.147s1.147-.536 1.147-1.147z"></path>
														<path d="M18.235 16.872c-1.483.086-2.859-.172-3.546.516-.918.918 1.529 1.606 0 2.219-1.988.84-7.341-.535-8.182-4.053-.841-3.441 2.905-6.5 5.888-7.035 2.906-.535 6.041.841 8.181 2.982 1.208 1.253 1.265 2.663.782 3.694A6.938 6.938 0 0 1 23 15c1.487 0 2.866.464 4 1.255V7.167C27 4.833 25.318 3 23.177 3H4.824C2.683 3 1 4.833 1 7.167v13.665C1 23.167 2.683 25 4.824 25h11.85A6.97 6.97 0 0 1 16 22c0-2.025.86-3.85 2.235-5.128z"></path><path d="M8.876 16.319c0 .611.535 1.146 1.147 1.146s1.147-.535 1.147-1.146c0-.612-.535-1.148-1.147-1.148s-1.147.536-1.147 1.148zM9.794 11.883c-.764 0-1.376.612-1.376 1.3 0 .689.612 1.3 1.376 1.3s1.376-.611 1.376-1.3c.001-.688-.611-1.3-1.376-1.3zM11.553 10.965c0 .689.612 1.301 1.376 1.301s1.376-.612 1.376-1.301-.612-1.3-1.376-1.3-1.376.611-1.376 1.3zM26.536 18.464a5 5 0 0 0-7.071 0 5 5 0 0 0 0 7.071 5 5 0 1 0 7.071-7.071zm-5.657 5.657a3 3 0 0 1-.586-3.415l4.001 4.001a3 3 0 0 1-3.415-.586zm4.829-.827-4.001-4.001a3.002 3.002 0 0 1 4.001 4.001z"></path>
													</svg>
												</span>
												<span class="bpx-player-block-filter-label">彩色</span>
											</div>
											<!-- <div class="bpx-player-block-filter-type bpx-player-block-senior" data-key="bili-danmaku-filter-type-senior" data-type="senior">
												<span class="bpx-player-block-filter-image">
													<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" viewBox="0 0 28 28">
														<path d="M23 3H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zM7.849 11.669l.447-.828.492.782.894.184-.536.736.134.966-.85-.321-.804.414.045-.967L7 11.946l.849-.277zm3.352 7.101-1.43-.506L8.43 19v-1.565L7.357 16.33l1.43-.506.67-1.381.894 1.289 1.475.23-.894 1.289.269 1.519zm7.95-3.9-2.816-.69-2.458 1.565-.223-2.946-2.145-1.933 2.637-1.151L15.263 7l1.877 2.255 2.86.23-1.52 2.531.671 2.854z"></path>
													</svg>
												</span>
												<span class="bpx-player-block-filter-image">
													<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" style="enable-background:new 0 0 28 28" viewBox="0 0 28 28">
														<path d="M23 15c1.487 0 2.866.464 4 1.255V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h11.674A7 7 0 0 1 23 15zM7.849 11.669l.447-.828.492.782.894.184-.536.736.134.966-.85-.321-.804.414.045-.967L7 11.946l.849-.277zm3.352 7.101-1.43-.506L8.43 19v-1.565L7.357 16.33l1.43-.506.67-1.381.894 1.289 1.475.23-.894 1.289.269 1.519zm2.453-5.971-2.145-1.933 2.637-1.151L15.263 7l1.877 2.255 2.86.23-1.52 2.531.67 2.854-2.816-.69-2.458 1.565-.222-2.946z"></path>
														<path d="M26.536 18.464a5 5 0 0 0-7.071 0 5 5 0 0 0 0 7.071 5 5 0 1 0 7.071-7.071zm-5.657 5.657a3 3 0 0 1-.586-3.415l4.001 4.001a3 3 0 0 1-3.415-.586zm4.829-.827-4.001-4.001a3.002 3.002 0 0 1 4.001 4.001z"></path>
													</svg>
												</span>
												<span class="bpx-player-block-filter-label">高级</span>
											</div>	 -->
											`});return t.querySelectorAll(".bpx-player-block-filter-type").forEach(i=>{let r=i.querySelector(".bpx-player-block-filter-label"),a=i.getAttribute("data-key"),o=c.getValue(a);i.setAttribute("data-value",String(o)),f.on(i,"click",l=>{s.preventEvent(l);let p=c.getValue(a),m=!p;i.setAttribute("data-value",String(m)),n.success(`${r.innerText} ${m?"开启":"关闭"}`),c.setValue(a,m);});}),e.appendChild(t),e},{"bili-danmaku-filter-type-repeat":!1,"bili-danmaku-filter-type-roll":!1,"bili-danmaku-filter-type-top":!1,"bili-danmaku-filter-type-bottom":!1,"bili-danmaku-filter-type-colour":!1}),d("屏蔽词","bili-danmaku-filter",!1,void 0,"开启后可使用↓自定义的规则过滤弹幕"),ne(e=>{let t=f.createElement("div",{className:"pops-panel-textarea",innerHTML:`
												<textarea placeholder="请输入规则，每行一个，可正则" style="height:200px;"></textarea>`},{style:"width: 100%;"}),i=t.querySelector("textarea");return i.value=J.getValue(),f.on(i,["input","propertychange"],void 0,s.debounce(function(r){J.setValue(i.value);},200)),e.appendChild(t),e})]}]},{text:"变量设置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[d("isLogin","bili-setLogin",!0,void 0,"$store.state.common.noCallApp=true<br>$store.state.common.userInfo.isLogin=true<br>$store.state.loginInfo.isLogin=true"),d("isClient","bili-setIsClient",!0,void 0,"$store.state.video.isClient=true<br>$store.state.opus.isClient=true<br>$store.state.playlist.isClient=true<br>$store.state.ver.bili=true<br>$store.state.ver.biliVer=2333"),d("tinyApp","bili-setTinyApp",!0,void 0,"$store.state.common.tinyApp=true")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[d("覆盖.launch-app-btn openApp","bili-overrideLaunchAppBtn_Vue_openApp",!0,void 0,"覆盖.launch-app-btn元素上的openApp函数，可阻止点击唤醒/下载App"),d("劫持setTimeout-autoOpenApp","bili-hookSetTimeout_autoOpenApp",!0,void 0,"阻止自动调用App")]}]}]},{text:"",type:"forms",forms:[{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[U("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,i)=>{n.info("设置当前Qmsg弹出位置"+i);},"Toast显示在页面九宫格的位置"),U("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),d("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]},{text:"Cookie配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[d("启用","httpx-use-cookie-enable",!1,void 0,"启用后，将根据下面的配置进行添加cookie"),d("使用document.cookie","httpx-use-document-cookie",!1,void 0,"自动根据请求的域名来获取对应的cookie"),Ve("bilibili.com","httpx-cookie-bilibili.com","",void 0,void 0,"Cookie格式：xxx=xxxx;xxx=xxxx")]}]}]}]},Be={id:"panel-video",title:"视频",isDefault(){return w.isVideo()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[d("修复视频底部区域高度","bili-video-repairVideoBottomAreaHeight",!0,void 0,"添加margin-top"),d("自动点击【继续在网页观看】","bili-video-autoClickContinueToWatchOnTheWebpage",!0,void 0,"可避免弹窗出现且自动点击后播放视频"),d("美化显示","bili-video-beautify",!0,void 0,"调整底部推荐视频卡片样式类似哔哩哔哩App"),d("手势返回关闭评论区","bili-video-gestureReturnToCloseCommentArea",!0,void 0,"当浏览器手势触发浏览器回退页面时，关闭评论区"),d("initPlayer","bili-video-initPlayer",!0,void 0,"自动执行初始化播放器"),d("强制本页刷新跳转","bili-video-forceThisPageToRefreshAndRedirect",!1,void 0,"用于解决跳转播放视频时，播放当前视频会有上一个播放视频的声音的情况")]}]},{text:"变量设置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[d("playBtnNoOpenApp","bili-video-setVideoPlayer",!0,void 0,"playBtnNoOpenApp=true<br>playBtnOpenApp=false<br>coverOpenApp=false"),d("解锁充电限制","bili-video-unlockUpower",!1,void 0,"is_upower_exclusive=true<br>is_upower_play=false<br>is_upower_preview=false")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[d("相关视频","bili-video-cover-bottomRecommendVideo",!0,void 0,"点击下面的相关视频可正确跳转至该视频"),d("选集","bili-video-cover-seasonNew",!0,void 0,"点击下面的选集列表内的视频可正确跳转至该视频")]}]},{text:"网络拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[d("解锁清晰度","bili-video-xhr-unlockQuality",!0,void 0,"最高清晰度为720P")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[d("阻止调用App","bili-video-hook-callApp",!0,void 0,"处理函数: PlayerAgent")]}]}]}]},Re={id:"panel-bangumi",title:"番剧",isDefault(){return w.isBangumi()},forms:[{text:"",type:"forms",forms:[{text:"变量设置",type:"deepMenu",forms:[{text:"变量设置",type:"forms",forms:[d("pay","bili-bangumi-setPay",!0,void 0,"$store.state.userStat.pay=1<br>$store.state.mediaInfo.user_status.pay=1")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[d("【选集】","bili-bangumi-cover-clicl-event-chooseEp",!0,void 0,"让【选集】的视频列表可点击跳转"),d("【其它】","bili-bangumi-cover-clicl-event-other",!0,void 0,"让【PV&其他】、【预告】、【主题曲】、【香境剧场】等的视频列表可点击跳转"),d("【更多推荐】","bili-bangumi-cover-clicl-event-recommend",!0,void 0,"让【更多推荐】的视频列表可点击跳转")]}]},{text:"网络拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[d("解锁清晰度","bili-bangumi-xhr-unlockQuality",!0,void 0,"最高清晰度为720P")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[d("阻止调用App","bili-bangumi-hook-callApp",!0,void 0,"")]}]}]}]},Le={id:"panel-search",title:"搜索",isDefault(){return w.isSearch()},forms:[{type:"forms",text:"",forms:[{type:"deepMenu",text:"覆盖点击事件",forms:[{type:"forms",text:"",forms:[d("取消","bili-search-cover-cancel",!1,void 0,"点击取消按钮回退至上一页")]}]}]}]},Ee={id:"panel-live",title:"直播",isDefault(){return w.isLive()},forms:[{text:"",type:"forms",forms:[{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[d("【屏蔽】聊天室","bili-live-block-chatRoom",!1,void 0,"直接不显示底部的聊天室"),d("【屏蔽】xxx进入直播间","bili-live-block-brush-prompt",!1,void 0,"直接不显示底部的xxx进入直播间"),d("【屏蔽】控制面板","bili-live-block-control-panel",!1,void 0,"屏蔽底部的发个弹幕、送礼")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[d("阻止open-app-btn元素点击事件触发","bili-live-prevent-openAppBtn",!0,void 0,"开启后可不跳转至唤醒App页面")]}]}]}]},Ie={id:"panel-opus",title:"专栏",isDefault(){return w.isOpus()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[d("自动展开阅读全文","bili-opus-automaticallyExpandToReadFullText",!0,void 0,"屏蔽【展开阅读全文】按钮并自动处理全文高度")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[d("话题","bili-opus-cover-topicJump",!0,void 0,"点击话题正确跳转"),d("header用户","bili-opus-cover-header",!0,void 0,"点击内容上的发布本动态的用户正确跳转个人空间")]}]}]}]},Ne={id:"panel-dynamic",title:"动态",isDefault(){return w.isDynamic()},forms:[{text:"",type:"forms",forms:[{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[d("话题","bili-dynamic-cover-topicJump",!0,void 0,"点击话题正确跳转"),d("header用户","bili-dynamic-cover-header",!0,void 0,"点击内容上的发布本动态的用户正确跳转个人空间"),d("@用户","bili-dynamic-cover-atJump",!0,void 0,"点击@用户正确跳转个人空间"),d("引用","bili-dynamic-cover-referenceJump",!0,void 0,"点击引用的视频|用户正确跳转")]}]}]}]},R={appkey:"4409e2ce8ffd12b8",appsec:"59b43e04ad6965f34319062b478f83dd"};function oe(e,t,i){e.appkey=t;const r=new URLSearchParams(e);return r.sort(),be(r.toString()+i)}const h={getVue(e){return e==null?void 0:e.__vue__},waitVuePropToSet(e,t){function i(){let r=null;return typeof e=="string"?r=document.querySelector(e):typeof e=="function"?r=e():e instanceof HTMLElement&&(r=e),r}t.forEach(r=>{typeof r.msg=="string"&&n.info(r.msg);function a(){let o=i();if(o==null)return !1;let l=h.getVue(o);return l==null?!1:!!r.check(l)}s.waitVueByInterval(()=>i(),a,250,1e4).then(o=>{if(!o)return;let l=i(),p=h.getVue(l);p!=null&&r.set(p);});});},goToUrl(e,t=!1){let i=document.querySelector("#app");if(i==null){y.error("跳转Url: 获取根元素#app失败"),n.error("跳转Url: 获取根元素#app失败："+e);return}let r=h.getVue(i);if(r==null){n.error("获取#app的vue属性失败"),y.error("获取#app的vue属性失败");return}let a=r.$router,o=c.getValue("bili-go-to-url-blank");if(n.info("即将跳转URL："+e),t&&(o=!1),o)window.open(e,"_blank");else {if(e.startsWith("http")||e.startsWith("//")){e.startsWith("//")&&(e=window.location.protocol+e);let l=new URL(e);if(l.origin===window.location.origin)e=l.pathname+l.search+l.hash;else {n.info("不同域名，直接本页打开，不用Router："+e),window.location.href=e;return}}n.info("$router push跳转Url："+e),a.push(e);}},goToLogin(e=""){window.open(`https://passport.bilibili.com/h5-app/passport/login?gourl=${encodeURIComponent(e)}`);},parseDuration(e){if(typeof e!="number"&&(e=parseInt(e)),isNaN(e))return e.toString();function t(i){return i<10?`0${i}`:i}return e<60?`0:${t(e)}`:e>=60&&e<3600?`${Math.floor(e/60)}:${t(e%60)}`:`${Math.floor(e/3600)}:${t(Math.floor(e/60)%60)}:${t(e%60)}`},hookGestureReturnByVueRouter(e){function t(){n.success("触发popstate事件"),r(!0);}function i(){n.success("监听地址改变"),e.vueObj.$router.history.push(e.hash),f.on(window,"popstate",t);}async function r(a=!1){if(f.off(window,"popstate",t),!e.callback(a))for(;;)if(e.vueObj.$router.history.current.hash===e.hash)n.info("后退！"),e.vueObj.$router.back(),await s.sleep(250);else return}return i(),{resumeBack:r}},loadScript(e){let t=document.createElement("script");return t.src=e,document.head.appendChild(t),new Promise(i=>{t.onload=function(){n.success("script标签加载完毕："+e),setTimeout(()=>{i(!0);},100);};})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(i=>{Array.isArray(i)?t=t.concat(i):t.push(i);}),S(`${t.join(`,
`)}{display: none !important;}`)}};function ve(e){return (e==null?void 0:e.code)===0&&((e==null?void 0:e.message)==="0"||(e==null?void 0:e.message)==="success")}const le={async getQrCodeInfo(){var o;let e="https://passport.bilibili.com/x/passport-tv-login/qrcode/auth_code",t={appkey:R.appkey,local_id:"0",csrf:((o=_e.get("bili_jct"))==null?void 0:o.value)||"",ts:"0"},i=oe(t,R.appkey,R.appsec),r=await N.post(e,{data:s.toSearchParamsStr({...t,sign:i}),headers:{"Content-Type":"application/x-www-form-urlencoded"},responseType:"json",fetch:!0});if(n.info(r),!r.status)return;let a=s.toJSON(r.data.responseText);if(a.code!==0){y.error(a.message);return}return a.data},async poll(e){let t="https://passport.bilibili.com/x/passport-tv-login/qrcode/poll",i={appkey:R.appkey,auth_code:e,local_id:"0",ts:"0"},r=oe(i,R.appkey,R.appsec),a=await N.post(t,{data:s.toSearchParamsStr({...i,sign:r}),headers:{"Content-Type":"application/x-www-form-urlencoded"},responseType:"json",fetch:!0});if(!a.status)return {success:!1,message:"网络错误",action:void 0};const o=s.toJSON(a.data.responseText),l={0:"成功","-3":"API校验密匙错误","-400":"请求错误","-404":"啥都木有",86038:"二维码已失效",86039:"二维码尚未确认",86090:"二维码已扫码未确认"};if(!ve(o)){const u=o.code.toString(),v=o.message||l[u]||"未知错误";return u==="86038"?{success:!1,message:v,action:"refresh"}:u==="86039"||u==="86090"?{success:!1,message:v,action:"wait"}:{success:!1,message:v,action:void 0}}const p=o.data.access_token,m=Date.now()+o.data.expires_in*1e3;return {success:!0,message:"获取成功",accessKey:p,accessKeyExpireAt:m}}},F={async init(){y.info("正在申请二维码...");let e=await this.getQRCodeInfo();e&&this.confirmScanQrcode(e);},getQRCodeInfo:async function(){n.info("正在申请二维码...");let e=await le.getQrCodeInfo();return n.info(["获取到二维码信息",e]),e},async confirmScanQrcode(e){let t=W.alert({title:{text:"请扫描二维码登录",position:"center",html:!1,style:""},content:{text:'<div id="bili-qrcode-canvas"></div>',html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(o){a=!0,o.close();}}},mask:{enable:!0,clickEvent:{toClose:!1,toHide:!1}},only:!0,width:"310px",height:"365px",drag:!0,dragLimit:!0,style:`
            #bili-qrcode-canvas{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
            }
            `}),i=t.$shadowRoot.querySelector("#bili-qrcode-canvas"),r=new te(i,{text:e.url,width:300,height:300,colorDark:"#000000",colorLight:"#ffffff",correctLevel:te.CorrectLevel.H}),a=!1;for(;;){if(a){n.error("用户关闭扫码登录弹窗、取消扫码登录");break}n.info("正在等待扫码登录...");let o=await le.poll(e.auth_code);if(o!=null&&o.success){this.setAccessTokenInfo({access_token:o.accessKey,expireAt:o.accessKeyExpireAt}),n.info(["扫码登录成功",o]),n.success("扫码登录成功"),y.success("扫码登录成功");break}else if((o==null?void 0:o.action)==="refresh"){n.info("刷新二维码"),y.info("刷新二维码");let l=await this.getQRCodeInfo();l&&(r.clear(),r.makeCode(l.url));}else if(o.action==="wait")o.message==="二维码已扫码未确认"&&(n.info("已扫码，等待确认..."),W.loading({parent:i,content:{text:"已扫码，等待确认"},mask:{enable:!0}}));else {n.error(o.message),y.error(o.message);break}await s.sleep(1500);}t.close();},generateExpireAt(e=6){return new Date().getTime()+1e3*60*60*24*30*e},setAccessTokenInfo(e){q("bili-accessTokenInfo",e);},getAccessTokenInfo(){let e=L("bili-accessTokenInfo");return e&&e.expireAt>Date.now()?e:null},getAccessToken(){var e;return ((e=this.getAccessTokenInfo())==null?void 0:e.access_token)||""}},ze=function(e,t,i,r,a,o="",l,p){let m={text:e,type:"input",isNumber:!!l,isPassword:!!p,attributes:{},description:r,getValue(){return c.getValue(t,i)},callback(u,v){typeof a=="function"&&a(u,v)||c.setValue(t,v);},placeholder:o};return m.attributes&&(m.attributes[E]=t,m.attributes[I]=i),m},Ue={id:"panel-head",title:"首页",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[d("美化显示","bili-head-beautify",!0,void 0,"调整瀑布流视频卡片样式类似哔哩哔哩App"),d("补充推荐视频信息","bili-head-supplementaryVideoStreamingInformation",!0,void 0,"给视频添加UP主名，当前视频总时长信息")]}]},{text:"推荐视频",type:"deepMenu",forms:[{text:"",type:"forms",forms:[d("启用","bili-head-recommend-enable",!1,void 0,"添加【推荐】标签，数据来源为App端(如果填入了access_token的话)"),d("显示【图文】","bili-head-recommend-push-graphic",!0,void 0,"加载App端推送的【图文】卡片"),ze("access_token","bili-head-recommend-access_token",F.getAccessToken(),"填入access_token，即可获取推荐视频数据",(e,t,i)=>{F.setAccessTokenInfo({access_token:t,expireAt:F.generateExpireAt()});},void 0,!1,!0)]}]}]}]},De={id:"panel-space",title:"个人空间",isDefault(){return w.isSpace()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[d("修复正确跳转","bili-space-repairRealJump",!0,void 0,"修复视频|动态的正确跳转，避免跳转404")]}]}]}]},_={data:null,oneSuccessExecMenu:null,onceExec:null,listenData:null},c={$data:{get data(){return _.data==null&&(_.data=new s.Dictionary),_.data},get oneSuccessExecMenu(){return _.oneSuccessExecMenu==null&&(_.oneSuccessExecMenu=new s.Dictionary),_.oneSuccessExecMenu},get onceExec(){return _.onceExec==null&&(_.onceExec=new s.Dictionary),_.onceExec},get scriptName(){return ie},key:B,attributeKeyName:E,attributeDefaultValueName:I},$listener:{get listenData(){return _.listenData==null&&(_.listenData=new s.Dictionary),_.listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},initExtensionsMenu(){x.top===x.self&&Se.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPanel();}},{key:"go_to_login",text:"🛠 前往登录",autoReload:!1,isStoreValue:!1,showText(e){return e},callback(){h.goToLogin();}},{key:"go_to_login_to_parse_access_key",text:"🛠 扫码并解析access_key",autoReload:!1,isStoreValue:!1,showText(e){return e},callback(){F.init();}}]);},initPanelDefaultValue(){let e=this;function t(a){if(!a.attributes)return;let o={},l=a.attributes[E];l!=null&&(o[l]=a.attributes[I]);let p=a.attributes[he];if(typeof p=="function"){let v=p();if(typeof v=="boolean"&&!v)return}let m=a.attributes[Me];m&&typeof m=="object"&&Object.assign(o,m);let u=Object.keys(o);if(!u.length){n.warn(["请先配置键",a]);return}u.forEach(v=>{let C=o[v];e.$data.data.has(v)&&n.warn("请检查该key(已存在): "+v),e.$data.data.set(v,C);});}function i(a){for(let o=0;o<a.length;o++){let l=a[o];t(l);let p=l.forms;p&&Array.isArray(p)&&i(p);}}let r=this.getPanelContentConfig();for(let a=0;a<r.length;a++){let o=r[a];if(!o.forms)continue;let l=o.forms;l&&Array.isArray(l)&&i(l);}},setValue(e,t){let i=L(B,{}),r=i[e];i[e]=t,q(B,i),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,r,t);},getValue(e,t){let r=L(B,{})[e];return r??(this.$data.data.has(e)?this.$data.data.get(e):t)},deleteValue(e){let t=L(B,{}),i=t[e];Reflect.deleteProperty(t,e),q(B,t),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,i,void 0);},addValueChangeListener(e,t){let i=Math.random();return this.$listener.listenData.set(e,{id:i,key:e,callback:t}),i},removeValueChangeListener(e){let t=null;for(const[i,r]of this.$listener.listenData.entries())if(r.id===e){t=i;break}this.$listener.listenData.delete(t);},hasKey(e){let t=L(B,{});return e in t},execMenu(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){n.warn(`${e} 键不存在`);return}let i=c.getValue(e);i&&t(i);},execMenuOnce(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){n.warn(`${e} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(e))return;this.$data.oneSuccessExecMenu.set(e,1);let i=[],r=l=>{let p=c.getValue(e);a(p,l);},a=(l,p)=>{let m=[];if(l){let u=p??t(l,r);u instanceof HTMLStyleElement?m=[u]:Array.isArray(u)&&(m=[...u.filter(v=>v!=null&&v instanceof HTMLStyleElement)]);}for(let u=0;u<i.length;u++)i[u].remove(),i.splice(u,1),u--;i=[...m];};this.addValueChangeListener(e,(l,p,m)=>{a(m);});let o=c.getValue(e);o&&a(o);},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(t(),this.$data.onceExec.set(e,1));},showPanel(){W.panel({title:{text:`${ie}-设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:this.isMobile(),width:this.getWidth(),height:this.getHeight(),drag:!0,only:!0});},isMobile(){return window.outerWidth<550},getWidth(){return window.outerWidth<550?"92vw":"550px"},getHeight(){return window.outerHeight>450?"80vh":"450px"},getPanelContentConfig(){return [Te,Ue,Be,Ie,Ne,Re,Le,De,Ee]}},He=`@charset "UTF-8";\r
/* 主页 */\r
#app .m-head {\r
	--bg-color: #f0f1f3;\r
	--bg-rever-color: #ffffff;\r
	--pd-width: 1.3333vmin;\r
	--bd-circle: 1.3333vmin;\r
	--card-height: 30vmin;\r
	--icon-font-size: 3.2vmin;\r
	--icon-text-font-size: 2.6vmin;\r
	--icon-font-margin-right: 3vmin;\r
	--title-font-size: 2.8vmin;\r
	background-color: var(--bg-color);\r
}\r
#app .m-head .m-home {\r
	background-color: var(--bg-color);\r
}\r
/* 美化视频卡片 */\r
#app .m-head .video-list .card-box .v-card {\r
	background-color: var(--bg-rever-color);\r
	padding: 0px;\r
	margin: 0px;\r
	width: calc(50% - var(--pd-width) / 2);\r
	border-radius: var(--bd-circle);\r
	margin-top: var(--pd-width);\r
	display: grid;\r
	/* 视频封面区域 */\r
}\r
#app .m-head .video-list .card-box .v-card .card {\r
	background: var(--bg-rever-color);\r
	border-radius: unset;\r
	border-top-left-radius: var(--bd-circle);\r
	border-top-right-radius: var(--bd-circle);\r
	height: var(--card-height);\r
}\r
#app .m-head .video-list .card-box .v-card .card .count {\r
	display: flex;\r
	justify-content: safe flex-start;\r
	padding-right: 0;\r
}\r
#app .m-head .video-list .card-box .v-card .card .count .iconfont {\r
	font-size: var(--icon-text-font-size);\r
}\r
#app .m-head .video-list .card-box .v-card .card .count > span {\r
	font-size: var(--icon-text-font-size);\r
	margin-right: var(--icon-font-margin-right);\r
}\r
/* 视频标题区域 */\r
#app .m-head .video-list .card-box .v-card .title {\r
	padding: 0;\r
	margin: var(--pd-width);\r
	font-size: var(--title-font-size);\r
}\r
/* 两列 => 左边的 */\r
#app .m-head .video-list .card-box .v-card:nth-child(2n-1) {\r
	/*background-color: red;*/\r
	margin-right: calc(var(--pd-width) / 2);\r
}\r
/* 两列 => 右边的 */\r
#app .m-head .video-list .card-box .v-card:nth-child(2n) {\r
	/*background-color: rebeccapurple;*/\r
	margin-left: calc(var(--pd-width) / 2);\r
}\r
`,O={$isHook:{windowPlayerAgent:!1,hookWebpackJsonp_openApp:!1,overRideLaunchAppBtn_Vue_openApp:!1},$data:{setTimeout:[]},windowWebPack(e="webpackJsonp",t,i){let r;Y.Object.defineProperty(x,e,{get(){return r},set(a){n.success("成功劫持webpack，当前webpack名："+e),r=a;const o=r.push;r.push=function(...l){let p=l[0][0];return (t==p||Array.isArray(t)&&Array.isArray(p)&&JSON.stringify(t)===JSON.stringify(p))&&Object.keys(l[0][1]).forEach(m=>{let u=l[0][1][m];l[0][1][m]=function(...v){let C=u.call(this,...v);return v[0]=i(v[0]),C};}),o.call(this,...l)};}});},windowPlayerAgent(){if(this.$isHook.windowPlayerAgent)return;this.$isHook.windowPlayerAgent=!0;let e;Y.Object.defineProperty(x,"PlayerAgent",{get(){return new Proxy({},{get(t,i){return i==="openApp"?function(...r){let a=r[0];if(n.info(["调用PlayerAgent.openApp",a]),a.event==="fullScreen"){let o=document.querySelector(".mplayer-btn-widescreen");o?o.click():n.warn("主动再次点击全屏按钮失败，原因：未获取到.mplayer-btn-widescreen元素");}}:e[i]}})},set(t){e=t;}});},setTimeout(e){if(this.$data.setTimeout.push(e),this.$data.setTimeout.length>1){n.info("window.setTimeout hook新增劫持判断参数："+e);return}x.setTimeout=function(...t){let i=t[0].toString();if(i.match(e)){n.success(["劫持setTimeout的函数",i]);return}return Y.setTimeout.apply(this,t)};},overRideLaunchAppBtn_Vue_openApp(){if(this.$isHook.overRideLaunchAppBtn_Vue_openApp)return;this.$isHook.overRideLaunchAppBtn_Vue_openApp=!0;function e(t){typeof t.openApp!="function"||t.openApp.toString().includes("阻止唤醒App")||(t.openApp=function(...r){n.success(["openApp：阻止唤醒App",r]);});}s.mutationObserver(document,{config:{subtree:!0,childList:!0,attributes:!0},callback(){document.querySelectorAll(".launch-app-btn").forEach(t=>{let i=h.getVue(t);i&&(e(i),i.$children&&i.$children.length&&i.$children.forEach(r=>{e(r);}));});}});}},Fe={init(){c.execMenuOnce("bili-video-hook-callApp",()=>{n.info("hook window.PlayerAgent"),O.windowPlayerAgent();});}},G={getUserSpaceUrl(e){return `https://m.bilibili.com/space/${e}`},getUserSpaceDynamicUrl(e){return `https://m.bilibili.com/dynamic/${e}`},getUserSpaceOpusUrl(e){return `https://m.bilibili.com/opus/${e}`},getVideoUrl(e){return `https://m.bilibili.com/video/${e}`}},g={className:{bangumi:"#app.main-container",dynamic:"#app .m-dynamic",opus:"#app .m-opus",search:"#app .m-search","topic-detail":"#app .topic-detail",video:"#app .video",head:"#app .m-head"}},se={className:{read:{mobile:"#app .read-app-main"}}},qe=`@charset "UTF-8";\r
#app .video {\r
	/* 下面的推荐视频卡片 */\r
}\r
#app .video .video-list .card-box {\r
	--left-card-width: 33%;\r
	--right-child-padding: 1.333vmin;\r
	/* 开启了bili-video-beautify */\r
}\r
#app .video .video-list .card-box .v-card-toapp {\r
	width: 100%;\r
	border-bottom: 1px solid #b5b5b5;\r
	padding-left: 0;\r
	padding-right: 0;\r
}\r
#app .video .video-list .card-box .v-card-toapp > a {\r
	display: flex;\r
	flex-wrap: nowrap;\r
	gap: var(--right-child-padding);\r
}\r
#app .video .video-list .card-box .v-card-toapp > a .card {\r
	width: var(--left-card-width);\r
	height: 80px;\r
	flex: 0 auto;\r
}\r
#app .video .video-list .card-box .v-card-toapp > a .card .count {\r
	background: transparent;\r
}\r
#app .video .video-list .card-box .v-card-toapp > a .card .count .left {\r
	display: list-item;\r
}\r
#app\r
	.video\r
	.video-list\r
	.card-box\r
	.v-card-toapp\r
	> a\r
	.card\r
	.count\r
	.left\r
	span.item {\r
	display: none;\r
}\r
#app .video .video-list .card-box .v-card-toapp > a .card .count .duration {\r
	background: rgba(0, 0, 0, 0.4);\r
	border-radius: 0.6vmin;\r
	padding: 0px 0.5vmin;\r
	right: 1vmin;\r
	bottom: 1vmin;\r
}\r
#app .video .video-list .card-box .v-card-toapp > a .title {\r
	flex: 1;\r
	/*padding: var(--right-child-padding);*/\r
	padding-top: 0;\r
	margin-top: 0;\r
	display: -webkit-box;\r
	-webkit-line-clamp: 2;\r
	-webkit-box-orient: vertical;\r
	overflow: hidden;\r
}\r
#app .video .video-list .card-box .gm-right-container {\r
	display: flex;\r
	flex-direction: column;\r
	width: calc(100% - var(--left-card-width));\r
}\r
#app .video .video-list .card-box .gm-right-container > * {\r
	padding: var(--right-child-padding);\r
	padding-bottom: 0;\r
}\r
#app .video .video-list .card-box .gm-right-container .left {\r
	gap: 1rem;\r
}\r
#app .video .video-list .card-box .gm-right-container .left span {\r
	display: flex;\r
	align-items: safe center;\r
	gap: 1vmin;\r
}\r
#app .video .video-list .card-box .gm-right-container .gm-up-name,\r
#app .video .video-list .card-box .gm-right-container .left {\r
	color: #999;\r
	font-size: 3vmin;\r
	transform-origin: left;\r
	display: flex;\r
	/*align-items: safe center;*/\r
	align-items: safe flex-end;\r
}\r
#app .video .video-list .card-box .gm-right-container .gm-up-name-text {\r
	margin-left: 1vmin;\r
}\r
#app .video .video-list .card-box .gm-right-container .num {\r
	margin-right: 4vmin;\r
}\r
#app .video .video-list .card-box > a.v-card {\r
	width: 100%;\r
	border-bottom: 1px solid #b5b5b5;\r
	padding-left: 0;\r
	padding-right: 0;\r
	display: flex;\r
	flex-wrap: nowrap;\r
}\r
#app .video .video-list .card-box > a.v-card .card {\r
	width: var(--left-card-width);\r
	height: 100%;\r
	flex: 0 auto;\r
}\r
#app .video .video-list .card-box > a.v-card .card .count {\r
	background: transparent;\r
}\r
#app .video .video-list .card-box > a.v-card .card .count span {\r
	display: none;\r
}\r
#app .video .video-list .card-box > a.v-card .card .count .duration {\r
	background-color: rgba(0, 0, 0, 0.3);\r
	border-radius: 4px;\r
	color: #fff;\r
	font-size: 12px;\r
	height: 16px;\r
	line-height: 16px;\r
	margin-left: auto;\r
	padding-left: 4px;\r
	padding-right: 4px;\r
}\r
#app .video .video-list .card-box > a.v-card .title {\r
	flex: 1;\r
	/*padding: var(--right-child-padding);*/\r
	padding-top: 0;\r
	margin-top: 0;\r
	display: -webkit-box;\r
	-webkit-line-clamp: 2;\r
	-webkit-box-orient: vertical;\r
	overflow: hidden;\r
}\r
`,We={$data:{isInitPlayer:!1,isUnlockUpower:!1},init(){c.execMenu("bili-video-initPlayer",()=>{this.initPlayer();}),c.execMenu("bili-video-setVideoPlayer",()=>{this.setVideoPlayer();}),c.execMenu("bili-video-unlockUpower",()=>{this.unlockUpower();});},initPlayer(){if(this.$data.isInitPlayer)return;this.$data.isInitPlayer=!0;let e=this;s.waitNode("#bilibiliPlayer",3e3).then(async t=>{if(!t){e.$data.isInitPlayer=!1;return}await s.sleep(300),h.waitVuePropToSet(".m-video-player",[{msg:"等待设置参数 fullScreenCallApp",check(i){return typeof(i==null?void 0:i.fullScreenCallApp)=="boolean"},set(i){i.fullScreenCallApp=!1,n.success("成功设置参数 fullScreenCallApp=false");}},{msg:"等待设置参数 gameMode",check(i){return typeof(i==null?void 0:i.gameMode)=="boolean"},set(i){i.gameMode=!0,n.success("成功设置参数 gameMode=true");}},{msg:"等待获取函数 initPlayer()",check(i){return typeof(i==null?void 0:i.initPlayer)=="function"},set(i){e.$data.isInitPlayer=!1;function r(){let a,o,l=1,p=!1,m=new s.LockFunction(async()=>{var C,k,V,P;let u=document.querySelector("#bilibiliPlayer video"),v=document.querySelector("#bilibiliPlayer img.mplayer-poster");if(u&&v&&v.src!==""){p=!0,(C=b.player)==null||C.off("restart_call_app"),(k=b.player)==null||k.off("force_call_app_show"),n.success("<video>标签和视频封面图已成功初始化"),await s.sleep(1e3),$.init();return}x.BPlayerMobile==null&&(n.error("未加载player播放器，主动引入script标签"),await h.loadScript("https://s1.hdslb.com/bfs/static/player/main/html5/mplayer.js?v=2862592")),i.initPlayer(!0),n.success("第 "+l+" 次未检测到视频，调用初始化视频函数 initPlayer()"),await s.sleep(300),(V=b.player)==null||V.off("restart_call_app"),(P=b.player)==null||P.off("force_call_app_show"),l++;});a=setInterval(async()=>{await m.run(),p&&(clearTimeout(o),clearInterval(a));},600),o=setTimeout(()=>{n.warn("检测视频超时3s，取消检测"),clearInterval(a);},3e3);}r();}}]);});},unlockUpower(){h.waitVuePropToSet(g.className.video,[{msg:"设置属性 __vue__.info.is_upower_exclusive",check(e){var t;return typeof((t=e==null?void 0:e.info)==null?void 0:t.is_upower_exclusive)=="boolean"},set(e){e.info.is_upower_exclusive=!1,n.success("成功设置属性  __vue__.info.is_upower_exclusive=false");}},{msg:"设置属性 __vue__.info.is_upower_play",check(e){var t;return typeof((t=e==null?void 0:e.info)==null?void 0:t.is_upower_play)=="boolean"},set(e){e.info.is_upower_play=!1,n.success("成功设置属性  __vue__.info.is_upower_play=false");}},{msg:"设置属性 __vue__.info.is_upower_preview",check(e){var t;return typeof((t=e==null?void 0:e.info)==null?void 0:t.is_upower_preview)=="boolean"},set(e){e.info.is_upower_preview=!1,n.success("成功设置属性  __vue__.info.is_upower_preview=false");}}]);},setVideoPlayer(){h.waitVuePropToSet(g.className.video+" .m-video-player",[{msg:"设置参数 playBtnNoOpenApp",check(e){return typeof e.playBtnNoOpenApp=="boolean"},set(e){e.playBtnNoOpenApp=!0,n.success("成功设置参数 playBtnNoOpenApp=true");}},{msg:"设置参数 playBtnOpenApp",check(e){return typeof e.playBtnOpenApp=="boolean"},set(e){e.playBtnOpenApp=!1,n.success("成功设置参数 playBtnOpenApp=false");}},{msg:"设置参数 coverOpenApp",check(e){return typeof e.coverOpenApp=="boolean"},set(e){e.coverOpenApp=!1,n.success("成功设置参数 coverOpenApp=false");}}]);}},Je={$data:{isAddBeautifyCSS:!1},init(){Fe.init(),We.init(),c.execMenuOnce("bili-video-repairVideoBottomAreaHeight",()=>this.repairVideoBottomAreaHeight()),c.execMenuOnce("bili-video-autoClickContinueToWatchOnTheWebpage",()=>{this.autoClickContinueToWatchOnTheWebpage();}),c.execMenu("bili-video-beautify",()=>{this.beautify();}),c.execMenuOnce("bili-video-cover-bottomRecommendVideo",()=>{this.coverBottomRecommendVideo();}),c.execMenuOnce("bili-video-gestureReturnToCloseCommentArea",()=>{this.gestureReturnToCloseCommentArea();}),c.execMenuOnce("bili-video-cover-seasonNew",()=>{this.coverSeasonNew();});},beautify(){n.info("美化显示"),this.$data.isAddBeautifyCSS||(this.$data.isAddBeautifyCSS=!0,S(qe)),s.waitNode(g.className.video+" .bottom-tab .list-view .card-box",1e4).then(e=>{if(!e){n.error("$cardBox is null");return}function t(o){var v,C;let l=o.querySelector(".title"),p=o.querySelector(".count .left"),m=!!o.querySelector(".gm-right-container"),u=h.getVue(o);if(l&&p&&u&&!m){let k=(C=(v=u==null?void 0:u.info)==null?void 0:v.owner)==null?void 0:C.name;if(k==null){n.error("美化显示-handleVCardToApp：获取up主名字失败");return}let V=o.querySelector(".count"),P=l.cloneNode(!0),K=p.cloneNode(!0);f.hide(l),V&&f.hide(V);let z=o.querySelector(".open-app.weakened");z&&f.hide(z);let T=document.createElement("div");T.className="gm-up-name",T.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${k}</span>
						`;let A=document.createElement("div"),M=document.createElement("div");A.className="gm-right-container",M.className="gm-right-bottom",f.after(l,A),A.appendChild(P),A.appendChild(M),M.appendChild(T),M.appendChild(K);}}function i(o){var v,C,k;let l=o.querySelector(".title"),p=o.querySelector(".count"),m=!!o.querySelector(".gm-right-container"),u=h.getVue(o);if(l&&p&&u&&!m){let V=(v=u==null?void 0:u.info)==null?void 0:v.duration;if(V==null){n.error("美化显示-handleVCard：获取视频时长失败");return}let P=(k=(C=u==null?void 0:u.info)==null?void 0:C.owner)==null?void 0:k.name;if(P==null){n.error("美化显示-handleVCard：获取up主名字失败");return}let K=l.cloneNode(!0),z=p.cloneNode(!0);f.hide(l);let T=document.createElement("div");T.className="duration",T.innerText=h.parseDuration(V),z.className="left";let A=document.createElement("div");p.appendChild(T),A.className="gm-up-name",A.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${P}</span>
						`;let M=document.createElement("div"),Q=document.createElement("div");M.className="gm-right-container",Q.className="gm-right-bottom",f.after(l,M),M.appendChild(K),M.appendChild(Q),Q.appendChild(A),Q.appendChild(z);}}let r=new s.LockFunction(()=>{let o=document.querySelectorAll(g.className.video+" .bottom-tab .list-view .card-box .v-card-toapp"),l=document.querySelectorAll(g.className.video+" .bottom-tab .list-view .card-box>a.v-card");o.forEach(p=>{t(p);}),l.forEach(p=>{i(p);});},25),a=document.querySelector(g.className.video);a?s.mutationObserver(a,{config:{subtree:!0,attributes:!0,childList:!0},callback(){r.run();}}):n.error("未找到视频根节点");});},repairVideoBottomAreaHeight(){return n.info("修复视频底部区域高度"),S(`
		${g.className.video} {
			/* 修复视频区域底部的高度 */
			.natural-module .fixed-module-margin {
				margin-top: 55.13333vmin;
			}
			/* 点击播放视频后的 */
			.m-video-new:has(> div > .m-video-player) {
				margin-top: 75vmin;
			}
			/* 未播放视频状态下的 */
			.m-video-new:has(> div[style*="display:none"] > .m-video-player) {
				margin-top: unset;
			}
		}
		html.tiny-app{
			${g.className.video}{
				.m-video-info-new{
					margin-top: 72vmin;
				}
			}
		}
		`)},autoClickContinueToWatchOnTheWebpage(){f.on(document,"click",g.className.video+" .main-info .btn",function(){n.info("触发点击【立即播放】，自动等待弹窗出现"),s.waitNode(".to-see",1e4).then(e=>{if(!e){n.error("弹窗按钮【继续在网页观看】10秒内未出现，取消等待");return}n.success("自动点击 继续在网页观看"),e.click();});});},coverBottomRecommendVideo(){n.info("覆盖 相关视频 点击事件"),f.on(document,"click",g.className.video+" .list-view .card-box .launch-app-btn",function(e){let t=e.target,i=h.getVue(t);if(!i){y.error("获取相关视频的__vue__失败");return}let r=i.bvid;if(s.isNull(r))if(i.$children&&i.$children[0]&&s.isNotNull(i.$children[0].bvid))r=i.$children[0].bvid;else {y.error("获取相关视频的bvid失败");return}n.info("相关视频的bvid: "+r),h.goToUrl(G.getVideoUrl(r)),s.preventEvent(e);},{capture:!0});},coverSeasonNew(){n.info("覆盖 选集视频列表 点击事件");function e(t){let i=t.target,r=h.getVue(i);if(!r){y.error("获取选集视频的目标视频的__vue__失败");return}let a=r.bvid;if(s.isNull(a)){y.error("获取相关视频的bvid失败");return}n.info("相关视频的bvid: "+a),h.goToUrl(G.getVideoUrl(a)),s.preventEvent(t);}f.on(document,"click",g.className.video+" .m-video-season-new .video-card .launch-app-btn",e,{capture:!0}),f.on(document,"click",g.className.video+" .m-video-season-panel .season-video-item .launch-app-btn",e,{capture:!0});},gestureReturnToCloseCommentArea(){n.info("手势返回关闭评论区，全局监听document点击.sub-reply-preview"),s.waitNode("#app").then(e=>{s.waitVueByInterval(e,()=>{var i,r;let t=h.getVue(e);return t==null?!1:typeof((r=(i=t==null?void 0:t.$router)==null?void 0:i.options)==null?void 0:r.scrollBehavior)!=null},250,1e4).then(t=>{let i=h.getVue(e);if(!i){n.error("获取#app的vue属性失败");return}let r=i.$router.options.scrollBehavior;i.$router.options.scrollBehavior=function(a,o,l){return a.hash==="#/seeCommentReply"?(n.info("当前操作为打开评论区，scrollBehavior返回null"),null):a.hash===""&&o.hash==="#/seeCommentReply"?(n.info("当前操作为关闭评论区，scrollBehavior返回null"),null):r.call(this,...arguments)};});}),f.on(document,"click",".sub-reply-preview",function(e){let t=document.querySelector("#app"),i=h.getVue(t);if(!i){n.error("获取#app元素失败");return}let r=h.hookGestureReturnByVueRouter({vueObj:i,hash:"#/seeCommentReply",callback(a){if(!a)return !1;let o=document.querySelector(".dialog-close-icon");return o?o.click():n.error("评论区关闭失败，原因：元素dialog-close-icon获取失败"),!0}});s.waitNode(".dialog-close-icon").then(a=>{f.on(a,"click",function(){r.resumeBack(!1);},{capture:!0,once:!0});});});}},Ge={init(){c.execMenu("bili-bangumi-setPay",()=>{this.setPay();});},setPay(){h.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.userStat.pay",check(e){var t,i,r;return typeof typeof((r=(i=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:i.userStat)==null?void 0:r.pay)=="number"},set(e){n.success("成功设置参数 $store.state.userStat.pay=1"),e.$store.state.userStat.pay=1;}},{msg:"设置参数 $store.state.mediaInfo.user_status.pay",check(e){var t,i,r,a;return typeof((a=(r=(i=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:i.mediaInfo)==null?void 0:r.user_status)==null?void 0:a.pay)=="number"},set(e){n.success("成功设置参数 $store.state.mediaInfo.user_status.pay=1"),e.$store.state.mediaInfo.user_status.pay=1;}}]);}},H={getUrl(e){if(e!=null)return e.getAttribute("universallink")},jumpToUrl(e){let i=e.target.querySelector("bili-open-app");if(i){let r=H.getUrl(i);r?h.goToUrl(r):(y.error("获取bili-open-app的Url失败"),n.error("获取bili-open-app的Url失败"));}else y.error("未获取到<bili-open-app>元素"),n.error("未获取到<bili-open-app>元素");}},Qe={init(){Ge.init(),c.execMenuOnce("bili-bangumi-hook-callApp",()=>{this.hookCallApp();}),c.execMenu("bili-bangumi-cover-clicl-event-chooseEp",()=>{this.setChooseEpClickEvent();}),c.execMenu("bili-bangumi-cover-clicl-event-other",()=>{this.setClickOtherVideo();}),c.execMenu("bili-bangumi-cover-clicl-event-recommend",()=>{this.setRecommendClickEvent();});},hookCallApp(){let e=x.setTimeout;x.setTimeout=function(...t){if(t[0].toString().includes("autoOpenApp")){n.success(["阻止唤醒App",t]);return}return e.apply(this,t)};},setPay(){h.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.userStat.pay",check(e){var t,i,r;return typeof typeof((r=(i=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:i.userStat)==null?void 0:r.pay)=="number"},set(e){n.success("成功设置参数 $store.state.userStat.pay=1"),e.$store.state.userStat.pay=1;}},{msg:"设置参数 $store.state.mediaInfo.user_status.pay",check(e){var t,i,r,a;return typeof((a=(r=(i=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:i.mediaInfo)==null?void 0:r.user_status)==null?void 0:a.pay)=="number"},set(e){n.success("成功设置参数 $store.state.mediaInfo.user_status.pay=1"),e.$store.state.mediaInfo.user_status.pay=1;}}]);},setChooseEpClickEvent(){s.waitNode(g.className.bangumi+" .ep-list-pre-wrapper ul.ep-list-pre-container").then(e=>{n.info("覆盖【选集】的点击事件"),f.on(e,"click","li.episode-item",function(t){s.preventEvent(t),H.jumpToUrl(t);},{capture:!0});}),s.waitNode(g.className.bangumi+" .ep-list-pre-wrapper ul.season-list-wrapper").then(e=>{n.info("覆盖【xx季】的点击事件"),f.on(e,"click","li",function(t){s.preventEvent(t),H.jumpToUrl(t);},{capture:!0});}),s.waitNode(g.className.bangumi+" .ep-list-pre-header").then(e=>{n.info("覆盖【选集】右上角的【全xx话】Arrow的点击事件"),f.on(e,"click",function(t){s.preventEvent(t);},{capture:!0});});},setClickOtherVideo(){s.waitNode(g.className.bangumi+" .section-preview-wrapper ul.ep-list-pre-container").then(e=>{n.info("覆盖【PV&其他】、【预告】、【主题曲】的点击事件"),f.on(e,"click","li.section-preview-item",function(t){s.preventEvent(t),H.jumpToUrl(t);},{capture:!0});}),s.waitNode(g.className.bangumi+" .section-preview-header").then(e=>{n.info("覆盖【PV&其他】、【预告】、【主题曲】右上角的Arrow的点击事件"),f.on(e,"click",function(t){s.preventEvent(t);},{capture:!0});});},setRecommendClickEvent(){s.waitNode(g.className.bangumi+" .recom-wrapper ul.recom-list").then(e=>{n.info("覆盖【更多推荐】番剧的点击事件"),f.on(e,"click","li.recom-item-v2",function(t){s.preventEvent(t),H.jumpToUrl(t);},{capture:!0});});}},Ze={init(){c.execMenuOnce("bili-search-cover-cancel",()=>{this.coverCancel();});},coverCancel(){n.info("覆盖【取消】按钮的点击事件"),f.on(document,"click","a.cancel",e=>{n.info("点击取消按钮"),s.preventEvent(e),window.history.back();},{capture:!0});}},Oe={init(){c.execMenuOnce("bili-live-block-chatRoom",()=>this.blockChatRoom()),c.execMenuOnce("bili-live-block-brush-prompt",()=>this.blockBrushPrompt()),c.execMenuOnce("bili-live-block-control-panel",()=>this.blockControlPanel());},blockChatRoom(){return n.info("屏蔽聊天室"),h.addBlockCSS("#chat-items")},blockBrushPrompt(){return n.info("屏蔽xxx进入直播间"),h.addBlockCSS("#brush-prompt")},blockControlPanel(){return n.info("屏蔽底部工具栏"),h.addBlockCSS(".control-panel")}},Xe={init(){Oe.init(),c.execMenuOnce("bili-live-prevent-openAppBtn",()=>{this.preventOpenAppBtn();});},preventOpenAppBtn(){s.waitNode("body").then(e=>{n.info("阻止.open-app-btn元素触发点击事件"),f.on(e,"click",".open-app-btn",function(t){s.preventEvent(t);},{capture:!0}),f.on(e,"click","#web-player-controller-wrap-el",function(t){s.preventEvent(t);},{capture:!0});});}},Ke={init(){c.execMenuOnce("bili-opus-cover-topicJump",()=>{this.coverTopicJump();}),c.execMenuOnce("bili-opus-automaticallyExpandToReadFullText",()=>this.automaticallyExpandToReadFullText()),c.execMenuOnce("bili-opus-cover-header",()=>{this.coverHeaderJump();});},coverTopicJump(){n.info("覆盖话题跳转点击事件"),f.on(document,"click",g.className.opus+" .launch-app-btn.opus-module-topic",function(e){var o;let t=e.target,i=h.getVue(t);if(!i){y.error("获取话题的__vue__失败");return}let r=(o=i==null?void 0:i.$props)==null?void 0:o.data,a=r==null?void 0:r.jump_url;if(s.isNull(a)){y.error("获取话题的jump_url失败");return}n.info(["话题的跳转信息: ",r]),h.goToUrl(a);},{capture:!0});},automaticallyExpandToReadFullText(){return n.info("自动展开阅读全文"),[h.addBlockCSS(g.className.opus+" .opus-read-more"),S(`
			${g.className.opus} .opus-module-content{
				overflow: unset !important;
				max-height: unset !important;
			}
			`)]},coverHeaderJump(){n.info("覆盖header点击事件"),f.on(document,"click",g.className.opus+" .opus-module-author",function(e){var a;s.preventEvent(e);let t=e.target,i=h.getVue(t);if(!i){y.error("获取vue属性失败");return}let r=(a=i==null?void 0:i.data)==null?void 0:a.mid;if(!r){y.error("获取mid失败");return}h.goToUrl(G.getUserSpaceUrl(r));},{capture:!0});}},Ye={init(){c.execMenuOnce("bili-dynamic-cover-topicJump",()=>{this.coverTopicJump();}),c.execMenuOnce("bili-dynamic-cover-atJump",()=>{this.coverAtJump();}),c.execMenuOnce("bili-dynamic-cover-referenceJump",()=>{this.coverReferenceJump();}),c.execMenuOnce("bili-dynamic-cover-header",()=>{this.coverHeaderJump();});},coverHeaderJump(){n.info("覆盖header点击事件"),f.on(document,"click",g.className.dynamic+" .launch-app-btn .dyn-header",function(e){s.preventEvent(e);let t=e.target,i=h.getVue(t);if(!i){y.error("获取vue属性失败");return}let r=i.url;if(!r){y.error("获取url失败");return}h.goToUrl(r);},{capture:!0});},coverTopicJump(){n.info("覆盖话题跳转点击事件"),f.on(document,"click",g.className.dynamic+" .launch-app-btn .bili-dyn-topic",function(e){var o;s.preventEvent(e);let t=e.target,i=h.getVue(t);if(!i){y.error("获取vue属性失败");return}let r=(o=i==null?void 0:i.$props)==null?void 0:o.data,a=r==null?void 0:r.jump_url;if(s.isNull(a)){y.error("获取jump_url失败");return}n.info(["话题的跳转信息: ",r]),h.goToUrl(a);},{capture:!0});},coverAtJump(){n.info("覆盖@ 跳转"),f.on(document,"click",g.className.dynamic+" .at",function(e){var r,a;s.preventEvent(e);let t=e.target,i=t.getAttribute("data-oid")||((a=(r=h.getVue(t))==null?void 0:r.$props)==null?void 0:a.rid);if(s.isNull(i)){y.error("获取data-oid或rid失败");return}n.info("用户的oid: "+i),h.goToUrl(G.getUserSpaceDynamicUrl(i));},{capture:!0});},coverReferenceJump(){n.info("覆盖引用的点击事件"),f.on(document,"click",g.className.dynamic+" .dyn-content .reference .dyn-orig-author",function(e){s.preventEvent(e);let i=e.target.getAttribute("data-url");if(!i){y.error("获取data-url失败");return}h.goToUrl(i);},{capture:!0}),f.on(document,"click",g.className.dynamic+" .dyn-content .reference .dyn-archive",function(e){var a;s.preventEvent(e);let t=e.target,i=h.getVue(t);if(!i){y.error("获取vue属性失败");return}let r=(a=i==null?void 0:i.data)==null?void 0:a.jump_url;if(s.isNull(r)){y.error("获取jump_url失败");return}h.goToUrl(r);},{capture:!0});}},je=`#app .m-head .m-recommend-view {\r
	display: none;\r
}\r
\r
#app\r
	.m-head\r
	.suspension\r
	.channel-menu:has(.recommend-tag.is-avtive)\r
	.v-switcher__header__anchor {\r
	display: none !important;\r
}\r
#app\r
	.m-head\r
	.suspension\r
	.channel-menu:has(.recommend-tag.is-avtive)\r
	a.v-switcher__header__tabs__item {\r
	color: #505050 !important;\r
}\r
#app\r
	.m-head\r
	.suspension\r
	.channel-menu:has(.recommend-tag.is-avtive)\r
	a.recommend-tag {\r
	color: #fb7299 !important;\r
}\r
#app\r
	.m-head\r
	.suspension\r
	.channel-menu:has(.recommend-tag.is-avtive)\r
	a.recommend-tag\r
	span:after {\r
	content: " ";\r
	position: relative;\r
	background: #fb7299;\r
	width: 30.4375px;\r
	height: 0.53333vmin;\r
	display: block;\r
	bottom: 3px;\r
}\r
\r
#app .m-head:has(.recommend-tag.is-avtive) .suspension + div {\r
	display: none;\r
}\r
#app .m-head:has(.recommend-tag.is-avtive) .m-recommend-view {\r
	display: unset;\r
}\r
\r
#app .m-head .m-recommend-view {\r
	background-color: #f0f1f3;\r
}\r
#app .m-head .m-recommend-view .list-view .video-list-box .video-list {\r
	padding: 0 1.33333vmin;\r
	margin-bottom: 5.33333vmin;\r
}\r
#app\r
	.m-head\r
	.m-recommend-view\r
	.list-view\r
	.video-list-box\r
	.video-list\r
	.card-box {\r
	display: -webkit-box;\r
	display: -ms-flexbox;\r
	display: flex;\r
	-ms-flex-wrap: wrap;\r
	flex-wrap: wrap;\r
}\r
#app\r
	.m-head\r
	.m-recommend-view\r
	.list-view\r
	.video-list-box\r
	.video-list\r
	.card-box\r
	.v-card\r
	.card {\r
	position: relative;\r
}\r
#app\r
	.m-head\r
	.m-recommend-view\r
	.list-view\r
	.video-list-box\r
	.video-list\r
	.card-box\r
	.v-card\r
	.card\r
	.bfs-img-wrap {\r
	position: absolute;\r
	top: 0;\r
	left: 0;\r
	width: 100%;\r
	height: 100%;\r
	overflow: hidden;\r
}\r
#app\r
	.m-head\r
	.m-recommend-view\r
	.list-view\r
	.video-list-box\r
	.video-list\r
	.card-box\r
	.v-card\r
	.card\r
	.bfs-img-wrap\r
	.bfs-img.b-img {\r
	position: relative;\r
	width: 100%;\r
	height: 100%;\r
	overflow: hidden;\r
	background: transparent;\r
}\r
#app\r
	.m-head\r
	.m-recommend-view\r
	.list-view\r
	.video-list-box\r
	.video-list\r
	.card-box\r
	.v-card\r
	.card\r
	.bfs-img-wrap\r
	.bfs-img.b-img\r
	picture.b-img__inner {\r
	display: block;\r
	width: 100%;\r
	height: 100%;\r
}\r
#app\r
	.m-head\r
	.m-recommend-view\r
	.list-view\r
	.video-list-box\r
	.video-list\r
	.card-box\r
	.v-card\r
	.card\r
	.bfs-img-wrap\r
	.bfs-img.b-img\r
	picture.b-img__inner\r
	img {\r
	width: 100%;\r
	height: 100%;\r
	-o-object-fit: cover;\r
	object-fit: cover;\r
}\r
#app\r
	.m-head\r
	.m-recommend-view\r
	.list-view\r
	.video-list-box\r
	.video-list\r
	.card-box\r
	.v-card\r
	.card\r
	.count {\r
	position: absolute;\r
	bottom: 0;\r
	left: 0;\r
	width: 100%;\r
	font-size: 3.2vmin;\r
	padding: 1.33333vmin 1.6vmin;\r
	display: -webkit-box;\r
	display: -ms-flexbox;\r
	display: flex;\r
	-webkit-box-pack: justify;\r
	-ms-flex-pack: justify;\r
	justify-content: space-between;\r
	color: #fff;\r
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), transparent);\r
}\r
#app\r
	.m-head\r
	.m-recommend-view\r
	.list-view\r
	.video-list-box\r
	.video-list\r
	.card-box\r
	.v-card\r
	.title {\r
	font-size: 3.2vmin;\r
	color: #212121;\r
	margin-top: 1.6vmin;\r
	overflow: hidden;\r
	text-overflow: ellipsis;\r
	display: -webkit-box;\r
	-webkit-line-clamp: 2;\r
	-webkit-box-orient: vertical;\r
}\r
#app\r
	.m-head\r
	.m-recommend-view\r
	.list-view\r
	.video-list-box\r
	.video-list\r
	.card-box\r
	.v-card\r
	.gm-up-info\r
	.gm-up-name\r
	.gm-picture-text {\r
	padding: 1px 4px;\r
	border: 1px solid #fb7299;\r
	color: #fb7299;\r
	border-radius: 2px;\r
	margin-right: 4px;\r
	font-size: 2vmin;\r
}\r
`;var et=23442827791579n,tt=1n<<51n,ce=58n,it="FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf";function rt(e){const t=["B","V","1","0","0","0","0","0","0","0","0","0"];let i=t.length-1,r=(tt|BigInt(e))^et;for(;r>0;)t[i]=it[Number(r%BigInt(ce))],r=r/ce,i-=1;return [t[3],t[9]]=[t[9],t[3]],[t[4],t[7]]=[t[7],t[4]],t.join("")}const pe=e=>(e.startsWith("http://")&&(e=e.replace(/^http/,"https")),e),at={$flag:{isInitCSS:!1,isLoadingNextPage:!1},$data:{intersectionObserver:null},$ele:{$listView:null,$videoListBox:null,$videoList:null,$cardBox:null,$listViewShim:null},$cardGoto:{av:"av",picture:"picture"},init(){this.setCSS(),f.ready(()=>{this.addRecommendTag();});},setCSS(){this.$flag.isInitCSS||(this.$flag.isInitCSS=!0,S(je));},reset(){n.info("重置状态"),this.$flag.isLoadingNextPage=!1,this.removeScrollEvent(),Object.keys(this.$ele).forEach(e=>{this.$ele[e]=null;});},addRecommendTag(){if(document.querySelector(".channel-menu a.recommend-tag"))return;let e=document.querySelector(".channel-menu .v-switcher");if(!e){n.error("添加推荐标签失败，原因：.channel-menu .v-switcher不存在");return}let t=f.createElement("a",{className:"v-switcher__header__tabs__item recommend-tag",innerHTML:"<span>推荐</span>"},{href:"javascript:;"}),i=f.createElement("div",{className:"m-recommend-view",innerHTML:`
            <div class="list-view">
                <div class="video-list-box">
                    <div class="video-list">
                        <div class="card-box">

                        </div>
                    </div>
                </div>
                <div class="list-view__shim">

				</div>
            </div>
            `});this.$ele.$listView=i.querySelector(".list-view"),this.$ele.$videoListBox=i.querySelector(".video-list-box"),this.$ele.$videoList=i.querySelector(".video-list"),this.$ele.$cardBox=i.querySelector(".card-box"),this.$ele.$listViewShim=i.querySelector(".list-view__shim"),this.$ele.$listViewShim.style.cssText="z-index:-1;user-select:none;pointer-events:none;background:transparent;left:0;bottom:0;width:100%;height:200px;";let r=document.querySelector("#app .m-head");r&&r.appendChild(i),f.on(t,"click",a=>{s.preventEvent(a),t.classList.add("is-avtive"),this.recommendClickEvent();}),f.on(e,"click",()=>{t.classList.remove("is-avtive");},{capture:!0}),f.on(this.$ele.$cardBox,"click",".v-card",a=>{s.preventEvent(a);let o=a.target;window.open(o.href,"_blank");}),f.before(e,t),this.setScrollEvent(),window.location.hash==="#/recommend/"&&(n.info("当前hash为推荐视频，出动触发"),t.click());},async recommendClickEvent(){h.goToUrl("#/recommend/",!0);},setScrollEvent(){n.success("监听滚动: IntersectionObserver"),this.$data.intersectionObserver=new IntersectionObserver(async e=>{!this.$flag.isLoadingNextPage&&e[0].isIntersecting&&(this.$flag.isLoadingNextPage=!0,await this.scrollEvent(),this.$flag.isLoadingNextPage=!1);},{threshold:0}),this.$data.intersectionObserver.observe(this.$ele.$listViewShim);},removeScrollEvent(){var e;(e=this.$data.intersectionObserver)==null||e.disconnect(),this.$data.intersectionObserver=null;},async scrollEvent(){let e=await this.getRecommendVideoInfo();if(!e)return;n.success(["获取推荐视频信息",e]);let t=document.createDocumentFragment(),i=c.getValue("bili-head-recommend-push-graphic");e.forEach(r=>{let a=null;if(r.goto===this.$cardGoto.av)a=this.getRecommendItemAVElement(r);else if(i&&r.goto===this.$cardGoto.picture)a=this.getRecommendItemPictureElement(r);else {n.error(["该goto暂未适配",r]);return}t.appendChild(a);}),this.$ele.$cardBox.appendChild(t);},async getRecommendVideoInfo(){var a;let e={appkey:R.appkey,access_key:((a=F.getAccessTokenInfo())==null?void 0:a.access_token)||""},i=await N.get("https://app.bilibili.com/x/v2/feed/index"+"?"+s.toSearchParamsStr(e),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(!i.status)return;let r=s.toJSON(i.data.responseText);if(!ve(r)){y.error(r.message);return}return r.data.items},getRecommendItemPictureElement(e){let t=e.goto,i=e.param,r="/opus/"+i,a=e.args.up_name,o=e.title,l=pe(e.cover),p=e.cover_left_text_1,m=f.createElement("a",{className:"v-card",href:r,innerHTML:`
                <div class="card">
                    <div class="bfs-img-wrap">
                        <div class="bfs-img b-img">
                            <picture class="b-img__inner">
                                <source type="image/webp" srcset="${l}">
                                <img src="${l}" alt="${o}">
                            </picture>
                        </div>
                    </div>
                    <div class="count">
                        <span>
                            <i class="iconfont like2"></i>
                            ${p}
                        </span>
                    </div>
                </div>
                <p class="title">${o}</p>
                <div class="gm-up-info">
                    <div class="gm-up-name">
                        <p class="gm-picture-text">图文</p>
                        ${a}
                    </div>
                    <div class="gm-video-handle">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path fill="#2E2F30" d="M512 256a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z m0 341.333333a85.333333 85.333333 0 1 1 0-170.666666 85.333333 85.333333 0 0 1 0 170.666666z m0 341.333334a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z">
                            </path>
                        </svg>
                    </div>
                </div>
                `},{"data-param":i,"data-title":o,"data-goto":t});return m["data-picture"]=e,m},getRecommendItemAVElement(e){var k;let t=e.goto,i=((k=e==null?void 0:e.player_args)==null?void 0:k.aid)||e.args.aid,a="/video/"+rt(i),o=e.args.up_name,l=e.title,p=pe(e.cover),m=e.cover_left_text_1,u=e.cover_left_text_2,v=e.cover_right_text,C=f.createElement("a",{className:"v-card",href:a,innerHTML:`
                <div class="card">
                    <div class="bfs-img-wrap">
                        <div class="bfs-img b-img">
                            <picture class="b-img__inner">
                                <source type="image/webp" srcset="${p}">
                                <img src="${p}" alt="${l}">
                            </picture>
                        </div>
                    </div>
                    <div class="count">
                        <span>
                            <i class="iconfont icon_shipin_bofangshu"></i>
                            ${m}
                        </span>
                        <span>
                            <i class="iconfont icon_shipin_danmushu"></i>
                            ${u}
                        </span>
                        <span class="gm-video-duration">${v}</span>
                    </div>
                </div>
                <p class="title">${l}</p>
                <div class="gm-up-info">
                    <div class="gm-up-name">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
                            </path>
                        </svg>
                        ${o}
                    </div>
                    <div class="gm-video-handle">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path fill="#2E2F30" d="M512 256a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z m0 341.333333a85.333333 85.333333 0 1 1 0-170.666666 85.333333 85.333333 0 0 1 0 170.666666z m0 341.333334a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z">
                            </path>
                        </svg>
                    </div>
                </div>
                `},{"data-aid":i,"data-title":l,"data-goto":t});return C["data-video"]=e,C}},nt={init(){c.execMenuOnce("bili-head-supplementaryVideoStreamingInformation",()=>{this.addVideoListUPInfo();}),c.execMenu("bili-head-recommend-enable",()=>{at.init();});},addVideoListUPInfo(){n.info("添加视频列表UP主信息"),S(`
		${g.className.head} .video-list .card-box .gm-up-info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: var(--pd-width);
		}
		${g.className.head} .video-list .card-box .gm-up-info .gm-up-name {
			display: flex;
			align-items: center;
			font-size: 2.4vmin;
			color: #999A9E;
		}
		${g.className.head} .video-list .card-box .gm-up-info .gm-up-name svg {
			margin-right: calc(var(--pd-width) / 2);
		}
		${g.className.head} .gm-video-duration{
			margin: 0 auto;
		}
        `),s.waitNode(g.className.head+" .video-list .card-box").then(()=>{let e=new s.LockFunction(()=>{document.querySelectorAll(g.className.head+" .video-list .card-box .v-card").forEach(t=>{var o,l,p,m,u;let i=h.getVue(t),r=((l=(o=i==null?void 0:i.info)==null?void 0:o.author)==null?void 0:l.name)||((m=(p=i==null?void 0:i.info)==null?void 0:p.owner)==null?void 0:m.name),a=(u=i==null?void 0:i.info)==null?void 0:u.duration;if(r&&!t.querySelector(".gm-up-info")){let v=document.createElement("div");v.innerHTML=`
                                    <div class="gm-up-name">
                                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                            <path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
                                            </path>
                                        </svg>
                                        ${r}
                                    </div>
                                    <div class="gm-video-handle">
                                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                            <path fill="#2E2F30" d="M512 256a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z m0 341.333333a85.333333 85.333333 0 1 1 0-170.666666 85.333333 85.333333 0 0 1 0 170.666666z m0 341.333334a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z">
                                            </path>
                                        </svg>
                                    </div>`,v.className="gm-up-info",t.appendChild(v);}if(a){let v=t.querySelector(".count");if(v&&!v.querySelector(".gm-video-duration")){let C=typeof a=="string"?a:h.parseDuration(a),k=document.createElement("span");k.className="gm-video-duration",k.innerHTML=C,v.appendChild(k);}}});},25);s.mutationObserver(document.body,{config:{subtree:!0,childList:!0,attributes:!0},callback(){e.run();}});});}},ot={init(){c.execMenu("bili-setLogin",()=>{this.setLogin();}),c.execMenu("bili-setIsClient",()=>{this.setIsClient();}),c.execMenu("bili-setTinyApp",()=>{this.setTinyApp();});},setLogin(){let e=new s.GM_Cookie,t=e.get("DedeUserID");t!=null?n.info(["Cookie DedeUserID已存在：",t.value]):e.set({name:"DedeUserID",value:"2333"},i=>{i?n.error(i):n.success("Cookie成功设置DedeUserID=>2333");}),h.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.noCallApp",check(i){var r,a,o;return typeof((o=(a=(r=i==null?void 0:i.$store)==null?void 0:r.state)==null?void 0:a.common)==null?void 0:o.noCallApp)=="boolean"},set(i){n.success("成功设置参数 $store.state.common.noCallApp=true"),i.$store.state.common.noCallApp=!0;}},{msg:"设置参数 $store.state.common.userInfo.isLogin",check(i){var r,a,o,l;return typeof((l=(o=(a=(r=i==null?void 0:i.$store)==null?void 0:r.state)==null?void 0:a.common)==null?void 0:o.userInfo)==null?void 0:l.isLogin)=="boolean"},set(i){n.success("成功设置参数 $store.state.common.userInfo.isLogin=true"),i.$store.state.common.userInfo.isLogin=!0;}},{msg:"设置参数 $store.state.loginInfo.isLogin",check(i){var r,a,o;return typeof((o=(a=(r=i==null?void 0:i.$store)==null?void 0:r.state)==null?void 0:a.loginInfo)==null?void 0:o.isLogin)=="boolean"},set(i){n.success("成功设置参数 $store.state.loginInfo.isLogin=true"),i.$store.state.loginInfo.isLogin=!0;}}]);},setIsClient(){h.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.video.isClient",check(e){var t,i,r;return typeof typeof((r=(i=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:i.video)==null?void 0:r.isClient)=="boolean"},set(e){n.success("成功设置参数 $store.state.video.isClient=true"),e.$store.state.video.isClient=!0;}},{msg:"设置参数 $store.state.opus.isClient=true",check(e){var t,i,r;return typeof((r=(i=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:i.opus)==null?void 0:r.isClient)=="boolean"},set(e){n.success("成功设置参数 $store.state.opus.isClient"),e.$store.state.opus.isClient=!0;}},{msg:"设置参数 $store.state.playlist.isClient",check(e){var t,i,r;return typeof((r=(i=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:i.playlist)==null?void 0:r.isClient)=="boolean"},set(e){n.success("成功设置参数 $store.state.playlist.isClient=true"),e.$store.state.playlist.isClient=!0;}},{msg:"设置参数 $store.state.ver.bili",check(e){var t,i,r;return typeof((r=(i=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:i.ver)==null?void 0:r.bili)=="boolean"},set(e){n.success("成功设置参数 $store.state.ver.bili=true"),e.$store.state.ver.bili=!0;}},{msg:"设置参数 $store.state.ver.biliVer",check(e){var t,i,r;return typeof((r=(i=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:i.ver)==null?void 0:r.biliVer)=="number"},set(e){n.success("成功设置参数 $store.state.ver.biliVer=2333333"),e.$store.state.ver.biliVer=2333333;}}]);},setTinyApp(){h.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.tinyApp",check(e){var t,i,r;return typeof((r=(i=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:i.common)==null?void 0:r.tinyApp)=="boolean"},set(e){e.$store.state.common.tinyApp=!0,n.success("成功设置参数 $store.state.common.tinyApp=true");}}]);}},lt={init(){c.onceExec("bili-pc-read-mobile-autoExpand",()=>this.autoExpand());},autoExpand(){return n.info("自动展开"),[S(`
			${se.className.read.mobile} .limit{
				overflow: unset !important;
				max-height: unset !important;
			}`),h.addBlockCSS(se.className.read.mobile+" .read-more")]}},st={init(){c.execMenuOnce("bili-space-repairRealJump",()=>{this.repairRealJump();});},repairRealJump(){f.on(document,"click",e=>{let t=e.target,i=t.closest(".main .forwardingCard")||t.matches(".main .forwardingCard")&&t;if(i){s.preventEvent(e);let r=i.getAttribute("id");n.info(`获取的动态id为：${r}`);let a=G.getUserSpaceDynamicUrl(r);h.goToUrl(a);}},{capture:!0});}},ge={init(){Ae.init(),ot.init(),c.execMenuOnce("bili-allowCopy",()=>S(`
				.v-drawer{
					-webkit-user-select: unset !important;
					-moz-user-select: unset !important;
					user-select: unset !important;
				}
			`)),c.onceExec("listenRouterChange",()=>{this.listenRouterChange();}),c.execMenuOnce("bili-hookSetTimeout_autoOpenApp",()=>{n.info("hook  window.setTimeout autoOpenApp"),O.setTimeout("autoOpenApp"),O.setTimeout("bilibili://");}),c.execMenuOnce("bili-overrideLaunchAppBtn_Vue_openApp",()=>{n.info("覆盖元素.launch-app-btn上的openApp"),O.overRideLaunchAppBtn_Vue_openApp();}),c.execMenuOnce("bili-head-beautify",()=>{n.info("添加美化CSS"),S(He);}),w.isVideo()?(n.info("Router: 视频稿件"),Je.init()):w.isOpus()?(n.info("Router: 专栏稿件"),Ke.init()):Pe.isReadMobile()?(n.info("PC-Router: 专栏稿件"),lt.init()):w.isDynamic()?(n.info("Router: 动态"),Ye.init()):w.isBangumi()?(n.info("Router: 番剧"),Qe.init()):w.isSearch()?(n.info("Router: 搜索"),Ze.init()):w.isLive()?(n.info("Router: 直播"),Xe.init()):w.isTopicDetail()?n.info("Router: 话题"):w.isHead()?(n.info("Router: 首页之类的"),nt.init()):w.isSpace()?(n.info("Router: 个人空间"),st.init()):n.error("该Router暂未适配，可能是首页之类："+window.location.href),f.ready(()=>{if(w.isBangumi()){let e=!1;h.waitVuePropToSet(()=>document.querySelector(".player-wrapper"),[{msg:"等待获取.player-wrapper上的$0.__vue__.player.player.on_video_play",check(t){var i,r;return typeof((r=(i=t==null?void 0:t.player)==null?void 0:i.player)==null?void 0:r.on_video_play)=="function"},set(t){var a,o;n.success("成功覆盖.player-wrapper上的$0.__vue__.player.player.on_video_play");let i=(o=(a=t==null?void 0:t.player)==null?void 0:a.player)==null?void 0:o.on_video_play;i.prototype.isHook&&n.warn("函数on_video_play已被hook，取消覆盖");let r=function(l){return e||(e=!0,b.$player.parseBiliH5PlayerToPlayer(t.player),b.init()),i.apply(this,arguments)};r.prototype.isHook=!0,t.player.player.on_video_play=r;}}]);}else w.isVideo()&&b.init();});},listenRouterChange(){s.waitNode("#app").then(e=>{let t=function(i){var r;return typeof((r=i==null?void 0:i.$router)==null?void 0:r.afterEach)=="function"};s.waitVueByInterval(e,t).then(()=>{let i=h.getVue(e);i!=null&&t(i)&&(n.success("成功设置监听路由变化"),e.__vue__.$router.beforeEach((r,a,o)=>{if(n.info(["路由变化 => 更新前",{to:r,from:a}]),c.getValue("bili-repairVueRouter404")&&r.name==="space"){window.location.href=r.fullPath;return}if(r.fullPath.startsWith("/video")&&a.fullPath.startsWith("/video")&&c.getValue("bili-video-forceThisPageToRefreshAndRedirect")){window.location.href=r.fullPath;return}o();}),e.__vue__.$router.afterEach((r,a)=>{if(n.info(["路由变化 => 更新后",{to:r,from:a}]),r.hash==="#/seeCommentReply"||a.hash==="#/seeCommentReply"){n.info("该路由变化判定为#/seeCommentReply，不重载");return}c.execMenu("bili-listenRouterChange",()=>{ge.init();});}));});});}};c.init();ge.init();W.config.cssText.index+=`
/* bilibili颜色 #FB7299 */
.pops{
    --bili-color: #FB7299;
    --bili-color-rgb: 251, 114, 153;
}
`;W.config.cssText.panelCSS+=`

.pops-slider{
    --pops-slider-main-bg-color: var(--bili-color);
    --pops-slider-color-primary: var(--bili-color);
}
aside.pops-panel-aside .pops-is-visited, aside.pops-panel-aside ul li:hover{
    color: rgb(var(--bili-color-rgb));
    background: rgba(var(--bili-color-rgb), 0.1);
}
/* switch的 */
.pops-panel-switch.pops-panel-switch-is-checked span.pops-panel-switch__core{
    border-color: rgb(var(--bili-color-rgb),var(--pops-bd-opacity));
    background-color: rgb(var(--bili-color-rgb),var(--pops-bg-opacity));
}
`;

})(Qmsg, Utils, DOMUtils, pops, MD5);