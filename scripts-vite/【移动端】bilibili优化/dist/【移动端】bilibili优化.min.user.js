// ==UserScript==
// @name         【移动端】bilibili优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.10.1
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
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.3/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.3.3/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.3.3/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.7.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/md5@2.3.0/dist/md5.min.js
// @require      https://fastly.jsdelivr.net/npm/flv.js@1.6.2/dist/flv.js
// @require      https://fastly.jsdelivr.net/npm/artplayer-plugin-danmuku@5.1.4/dist/artplayer-plugin-danmuku.js
// @require      https://fastly.jsdelivr.net/npm/artplayer@5.1.7/dist/artplayer.js
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

(a=>{if(typeof GM_addStyle=="function"){GM_addStyle(a);return}function n(e){let p=document.createElement("style");return p.innerHTML=e,document.head?document.head.appendChild(p):document.documentElement.appendChild(p),p}n(a)})(' @charset "UTF-8";.m-video2-awaken-btn,.openapp-dialog,.m-head .launch-app-btn.m-nav-openapp,.m-head .launch-app-btn.home-float-openapp,.m-home .launch-app-btn.home-float-openapp,.m-space .launch-app-btn.m-space-float-openapp,.m-space .launch-app-btn.m-nav-openapp{display:none!important}#app .video .launch-app-btn.m-video-main-launchapp:has([class^=m-video2-awaken]),#app .video .launch-app-btn.m-nav-openapp,#app .video .mplayer-widescreen-callapp,#app .video .launch-app-btn.m-float-openapp,#app .video .m-video-season-panel .launch-app-btn .open-app{display:none!important}#app.LIVE .open-app-btn.bili-btn-warp,#app .m-dynamic .launch-app-btn.m-nav-openapp,#app .m-dynamic .dynamic-float-openapp.dynamic-float-btn,#app .m-opus .float-openapp.opus-float-btn,#app .m-opus .v-switcher .launch-app-btn.list-more,#app .m-opus .opus-nav .launch-app-btn.m-nav-openapp,#app .topic-detail .launch-app-btn.m-nav-openapp,#app .topic-detail .launch-app-btn.m-topic-float-openapp{display:none!important}#app.main-container bili-open-app.btn-download{display:none!important}#app .read-app-main bili-open-app{display:none!important}html{--bili-color: #fb7299;--bili-color-rgb: 251, 114, 153} ');

(function (g, ye, it, Oe, rt, at, ot, he) {
	'use strict';

	var H=typeof GM_getValue<"u"?GM_getValue:void 0,Ce=typeof GM_info<"u"?GM_info:void 0,nt=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,K=typeof GM_setValue<"u"?GM_setValue:void 0,lt=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,st=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,$=typeof unsafeWindow<"u"?unsafeWindow:void 0,Ue=window;const ct={$data:{get enable(){return c.getValue("httpx-use-cookie-enable")},get useDocumentCookie(){return c.getValue("httpx-use-document-cookie")},cookieRule:[{key:"httpx-cookie-bilibili.com",hostname:/bilibili.com/g}]},fixCookieSplit(e){return s.isNotNull(e)&&!e.trim().endsWith(";")&&(e+=";"),e},concatCookie(e,t){return s.isNull(e)?t:(e=e.trim(),t=t.trim(),e=this.fixCookieSplit(e),t.startsWith(";")&&(t=t.substring(1)),e.concat(t))},handle(e){if(e.fetch||!this.$data.enable)return;let t="",u=e.url;u.startsWith("//")&&(u=window.location.protocol+u);let i=new URL(u);this.$data.useDocumentCookie&&i.hostname.endsWith(window.location.hostname.split(".").slice(-2).join("."))&&(t=this.concatCookie(t,document.cookie.trim()));for(let r=0;r<this.$data.cookieRule.length;r++){let a=this.$data.cookieRule[r];if(i.hostname.match(a.hostname)){let n=c.getValue(a.key);if(s.isNull(n))break;t=this.concatCookie(t,n);}}s.isNotNull(t)&&(e.headers&&e.headers.Cookie?e.headers.Cookie=this.concatCookie(e.headers.Cookie,t):e.headers.Cookie=t,o.info(["Httpx => 设置cookie:",e])),e.headers&&e.headers.Cookie!=null&&s.isNull(e.headers.Cookie)&&delete e.headers.Cookie;}},pt="【移动端】bilibili优化",s=ye.noConflict(),m=it.noConflict(),ce=Oe,De=Ue.QRCode||$.QRCode,o=new s.Log(Ce,$.console||Ue.console);var ze;const Fe=((ze=Ce==null?void 0:Ce.script)==null?void 0:ze.name)||pt,qe=new s.GM_Cookie,He=!1;o.config({debug:He,logMaxCount:1e3,autoClearConsole:!0,tag:!0});g.config(Object.defineProperties({html:!0,autoClose:!0,showClose:!1},{position:{get(){return c.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return c.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return c.getValue("qmsg-config-showreverse",!0)}},zIndex:{get(){let e=ye.getMaxZIndex(),t=Oe.config.InstanceUtils.getPopsMaxZIndex(e).zIndex;return ye.getMaxValue(e,t)+100}}}));const dt=new s.GM_Menu({GM_getValue:H,GM_setValue:K,GM_registerMenuCommand:nt,GM_unregisterMenuCommand:lt}),P=new s.Httpx(st);P.interceptors.request.use(e=>(ct.handle(e),e));P.interceptors.response.use(void 0,e=>(o.error(["拦截器-请求错误",e]),e.type==="onabort"?g.warning("请求取消"):e.type==="onerror"?g.error("请求异常"):e.type==="ontimeout"?g.error("请求超时"):g.error("其它错误"),e));P.config({logDetails:He});const fe={Object:{defineProperty:$.Object.defineProperty},Function:{apply:$.Function.prototype.apply,call:$.Function.prototype.call},Element:{appendChild:$.Element.prototype.appendChild},setTimeout:$.setTimeout},M=s.addStyle.bind(s),J="GM_Panel",Ie="data-init",ee="data-key",te="data-default-value",mt="data-init-more-value",h=function(e,t,u,i,r){let a={text:e,type:"switch",description:r,attributes:{},getValue(){return !!c.getValue(t,u)},callback(n,l){o.success(`${l?"开启":"关闭"} ${e}`),!(typeof i=="function"&&i(n,l))&&c.setValue(t,!!l);},afterAddToUListCallBack:void 0};return a.attributes&&(a.attributes[ee]=t,a.attributes[te]=!!u),a},Ct=function(e,t,u,i,r,a="",n){let l={text:e,type:"textarea",attributes:{},description:i,placeholder:a,disabled:n,getValue(){return c.getValue(t,u)},callback(p,d){c.setValue(t,d);}};return l.attributes&&(l.attributes[ee]=t,l.attributes[te]=u),l},ue=function(e,t,u,i,r,a){let n=[];typeof i=="function"?n=i():n=i;let l={text:e,type:"select",description:a,attributes:{},getValue(){return c.getValue(t,u)},callback(p,d,C){c.setValue(t,d),typeof r=="function"&&r(p,d,C);},data:n};return l.attributes&&(l.attributes[ee]=t,l.attributes[te]=u),l},Ae=function(e,t,u,i,r,a,n,l,p){let d={text:e,type:"slider",description:p,attributes:{},getValue(){return c.getValue(t,u)},getToolTipContent(C){return typeof l=="function"?l(C):`${C}`},callback(C,f){typeof n=="function"&&n(C,f)||c.setValue(t,f);},min:i,max:r,step:a};return d.attributes&&(d.attributes[ee]=t,d.attributes[te]=u),d},we=function(e,t,u,i){let r={attributes:{},type:"own",props:u,getLiElementCallBack:e,afterAddToUListCallBack:i};return r.attributes&&(r.attributes[Ie]=()=>(t&&Object.keys(t).forEach(a=>{let n=t[a];c.$data.data.has(a)&&o.warn("请检查该key(已存在): "+a),c.$data.data.set(a,n);}),!1)),r},q={$flag:{isInitCSS:!1},$data:{originToast:"mplayer-toast",showClassName:"mplayer-show",prefix:"mplayer-toast-gm"},$el:{get $mplayer(){return document.querySelector(".mplayer")}},toast(e){typeof e=="string"&&(e={text:e}),this.initCSS();let t=e.parent??this.$el.$mplayer;if(!t)throw new TypeError("toast parent is null");this.mutationMPlayerOriginToast(t);let u=m.createElement("div",{"data-from":"gm"});if(m.addClass(u,this.$data.prefix),m.addClass(u,this.$data.showClassName),e.showCloseBtn){let a=m.createElement("div",{className:this.$data.prefix+"-close",innerHTML:`
                    <span class="bp-svgicon">
                        <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.47 4.47a.75.75 0 011.06 0l5.541 5.54 5.54-5.54a.75.75 0 011.061 1.06l-5.54 5.541 5.54 5.54a.75.75 0 01.073.977l-.073.084a.75.75 0 01-1.06 0l-5.541-5.54-5.54 5.54a.75.75 0 01-1.061-1.06l5.54-5.541-5.54-5.54a.75.75 0 01-.073-.977z" fill="#FEFEFE" fill-rule="evenodd">
                            </path>
                        </svg>
                    </span>
                `});u.appendChild(a),m.on(a,"click",n=>{s.preventEvent(n),this.closeToast(u);});}let i=m.createElement("span",{className:this.$data.prefix+"-text",innerText:e.text});if(u.appendChild(i),typeof e.timeText=="string"&&e.timeText.trim()!=""){let a=m.createElement("span",{className:this.$data.prefix+"-time",innerText:e.timeText});u.appendChild(a);}if(typeof e.jumpText=="string"&&e.jumpText.trim()!=""){let a=m.createElement("span",{className:this.$data.prefix+"-jump",innerText:e.jumpText});u.appendChild(a),m.on(a,"click",n=>{typeof e.jumpClickCallback=="function"&&(s.preventEvent(n),e.jumpClickCallback(n));});}this.setTransitionendEvent(u);let r=typeof e.timeout=="number"&&!isNaN(e.timeout)?e.timeout:3500;return Array.from(document.querySelectorAll(".mplayer-toast")).forEach(a=>{var n;a.hasAttribute("data-is-set-transitionend")||(a.setAttribute("data-is-set-transitionend","true"),(n=a.textContent)!=null&&n.includes("记忆你上次看到")&&setTimeout(()=>{let l=a.querySelector(".mplayer-toast-close");l?l.click():a.remove();},3e3),this.setTransitionendEvent(a));}),t.appendChild(u),setTimeout(()=>{this.closeToast(u);},r),{$toast:u,close:()=>{this.closeToast(u);}}},initCSS(){this.$flag.isInitCSS||(this.$flag.isInitCSS=!0,M(`
		.${this.$data.prefix}.mplayer-show {
			opacity: 1;
			visibility: visible;
			z-index: 40;
		}

		.mplayer-toast, .${this.$data.prefix} {
			-webkit-transition-property: opacity, bottom;
			transition-property: opacity, bottom;
		}

		.${this.$data.prefix} {
			background-color: rgba(0, 0, 0, .8);
			border-radius: 4px;
			bottom: 48px;
			color: #fafafa;
			font-size: 12px;
			left: 8px;
			line-height: 24px;
			opacity: 0;
			overflow: hidden;
			padding: 6px 8px;
			position: absolute;
			text-align: center;
			-webkit-transition: opacity .3s;
			transition: opacity .3s;
			visibility: hidden;
			z-index: 4;
		}

		.${this.$data.prefix}-close {
			fill: #fff;
			float: left;
			height: 14px;
			margin-right: 4px;
			position: relative;
			top: 1px;
			width: 26px;
		}

		.${this.$data.prefix}-jump {
			color: #f25d8e;
			margin: 0 8px 0 16px;
			text-decoration: none;
		}

		`));},mutationMPlayerOriginToast(e){let t=this.$el.$mplayer;t&&(t.hasAttribute("data-mutation")||(o.success("添加观察器，动态更新toast的位置"),t.setAttribute("data-mutation","gm"),s.mutationObserver(t,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{this.updatePageToastBottom();}})));},updatePageToastBottom(){let e=Array.from(document.querySelectorAll(`.${this.$data.prefix}`)).concat(Array.from(document.querySelectorAll(".".concat(this.$data.originToast).concat(".").concat(this.$data.showClassName))));if(e.length){let t=e.length-1;const u=46;e.forEach((i,r)=>{let a=u+u*(t-r);i.setAttribute("data-transition","move"),i.style.bottom=a+"px";});}},closeToast(e){e.classList.remove(this.$data.showClassName);},getTransitionendEventNameList(){return ["webkitTransitionEnd","mozTransitionEnd","MSTransitionEnd","otransitionend","transitionend"]},setTransitionendEvent(e){let t=this,u=this.getTransitionendEventNameList();m.on(e,u,function(i){let r=e.getAttribute("data-transition");if(!e.classList.contains(t.$data.showClassName)){e.remove();return}if(r==="move"){e.removeAttribute("data-transition");return}},{capture:!0});}},S={isVideo(){return window.location.pathname.startsWith("/video/")},isBangumi(){return window.location.pathname.startsWith("/bangumi/")},isSearch(){return window.location.pathname.startsWith("/search")},isSearchResult(){let e=new URLSearchParams(window.location.search);return this.isSearch()&&e.has("keyword")},isLive(){return window.location.hostname==="live.bilibili.com"},isOpus(){return window.location.pathname.startsWith("/opus")},isTopicDetail(){return window.location.pathname.startsWith("/topic-detail")},isDynamic(){return window.location.pathname.startsWith("/dynamic")},isHead(){return window.location.pathname==="/"||window.location.pathname.startsWith("/channel")},isSpace(){return window.location.pathname.startsWith("/space")}},ht={isPC(){return window.location.hostname==="www.bilibili.com"},isReadMobile(){return this.isPC()&&window.location.pathname.startsWith("/read/mobile")}};let ge=null;const xe={get ajaxHooker(){return ge==null&&(o.info("启用ajaxHooker拦截网络"),ge=s.ajaxHooker()),ge}},j={"240P 极速":6,"360P 流畅":16,"480P 清晰":32,"720P 高清":64,"720P60 高帧率":74,"1080P 高清":80,"1080P+ 高码率":112,"1080P60 高帧率":116,"4K 超清":120,"HDR 真彩色":125,杜比视界:126,"8K 超高清":127},We={};Object.keys(j).forEach(e=>{Reflect.set(We,j[e],e);});const ft={$flag:{is_hook_video_playurl:!1,is_hook_bangumi_html5:!1},init(){S.isVideo()?c.execMenuOnce("bili-video-xhr-unlockQuality",()=>{this.hook_video_playurl();}):S.isBangumi();},hook_video_playurl(){this.$flag.is_hook_video_playurl||(this.$flag.is_hook_video_playurl=!0,xe.ajaxHooker.hook(e=>{if(e.url.includes("//api.bilibili.com/x/player/wbi/playurl")){e.url.startsWith("//")&&(e.url=window.location.protocol+e.url);let t=new URL(e.url);if(t.searchParams.set("platform","html5"),t.searchParams.set("qn",j["1080P60 高帧率"].toString()),t.searchParams.set("high_quality","1"),t.searchParams.set("fnver","0"),t.searchParams.set("fourk","1"),t.searchParams.has("__t")){t.searchParams.delete("__t");return}e.url=t.toString(),e.response=u=>{var n,l;let i=s.toJSON(u.responseText),r=(n=i==null?void 0:i.data)==null?void 0:n.quality,a=(l=i==null?void 0:i.data)==null?void 0:l.support_formats;if(o.info("当前解锁的quality值："+r),r&&y.initVideoQualityInfo(r),r&&a){let p=a.find(d=>d.quality==r);if(p){let d=p.new_description||p.display_desc;o.info("成功解锁画质 "+d),q.toast(`成功解锁画质 ${d}`);}}};}}));},hook_bangumi_html5(){this.$flag.is_hook_bangumi_html5||(this.$flag.is_hook_bangumi_html5=!0,xe.ajaxHooker.hook(e=>{if(e.url.includes("//api.bilibili.com/pgc/player/web/playurl/html5")){e.url.startsWith("//")&&(e.url=window.location.protocol+e.url);let t=new URL(e.url);t.pathname="/pgc/player/web/playurl",t.searchParams.delete("bsource"),t.searchParams.set("qn",j["1080P60 高帧率"].toString()),t.searchParams.set("fnval","1"),t.searchParams.set("fnver","0"),t.searchParams.set("fourk","1"),t.searchParams.set("from_client","BROWSER"),t.searchParams.set("drm_tech_type","2"),e.url=t.toString(),e.response=u=>{let r=s.toJSON(u.responseText).result;if(o.info("当前解锁的quality值："+r.quality),r.quality&&r.support_formats){let a=r.support_formats.find(n=>n.quality==r.quality);a&&o.info("当前已解锁的画质："+a.new_description||a.display_desc);}};}}));}},ve={mergeAndCheckSearchParamsData(e,t){if("aid"in t&&t.aid!=null)Reflect.set(e,"aid",t.aid);else if("bvid"in t&&t.bvid!=null)Reflect.set(e,"bvid",t.bvid);else throw new TypeError("avid or bvid must give one")}},pe={web_host:"api.bilibili.com"},Z={AVC:7,HEVC:12,AV1:13},I={isWebApiSuccess(e){return (e==null?void 0:e.code)===0&&((e==null?void 0:e.message)==="0"||(e==null?void 0:e.message)==="success")},isAreaLimit(e){let t={6002003:"抱歉您所在地区不可观看！"},u=!1;return Object.keys(t).forEach(i=>{let r=t[i];(e.code.toString()===i.toString()||e.message.includes(r))&&(u=!0);}),u}},Be={async playUrl(e,t){let u={cid:e.cid,qn:e.qn??j["1080P60 高帧率"],high_quality:e.high_quality??1,fnval:e.fnval??1,fnver:e.fnver??0,fourk:e.fourk??1};e.setPlatformHTML5&&Reflect.set(u,"platform","html5"),ve.mergeAndCheckSearchParamsData(u,e),typeof t=="object"&&Object.assign(u,t);let i=await P.get("https://api.bilibili.com/x/player/playurl?"+s.toSearchParamsStr(u),{responseType:"json",fetch:!0});if(!i.status)return;let r=s.toJSON(i.data.responseText);if(r.code===0)return r.data},async onlineTotal(e){let t={cid:e.cid};if(ve.mergeAndCheckSearchParamsData(t,e),"aid"in e)Reflect.set(t,"aid",e.aid);else if("bvid"in e)Reflect.set(t,"bvid",e.bvid);else throw new TypeError("avid or bvid must give one");let u=await P.get(`https://${pe.web_host}/x/player/online/total?${s.toSearchParamsStr(t)}`,{responseType:"json",fetch:!0});if(!u.status)return;let i=s.toJSON(u.data.responseText);return I.isWebApiSuccess(i)||o.error(`获取在线观看人数失败: ${JSON.stringify(i)}`),i.data},async like(e){var a;let t={like:e.like,csrf:((a=qe.get("bili_jct"))==null?void 0:a.value)||""};ve.mergeAndCheckSearchParamsData(t,e);let u=await P.get("https://api.bilibili.com/x/web-interface/archive/like?"+s.toSearchParamsStr(t),{fetch:!0});if(!u.status)return !1;let i=s.toJSON(u.data.responseText);const r=i.code;return r===0?!0:(r===-101?g.error("账号未登录"):r===-111?g.error("csrf校验失败"):r===-400?g.error("请求错误"):r===-403?g.error("账号异常"):r===10003?g.error("不存在该稿件"):r===65004?g.error("取消点赞失败"):r===65006?g.warning("重复点赞"):g.error("未知错误："+i.message),!1)}},D={getVue(e){return e==null?void 0:e.__vue__},waitVuePropToSet(e,t){if(!Array.isArray(t)){D.waitVuePropToSet(e,[t]);return}function u(){let i=null;return typeof e=="string"?i=document.querySelector(e):typeof e=="function"?i=e():e instanceof HTMLElement&&(i=e),i}t.forEach(i=>{typeof i.msg=="string"&&o.info(i.msg);function r(){let a=u();if(a==null)return !1;let n=D.getVue(a);return n==null?!1:!!i.check(n)}s.waitVueByInterval(()=>u(),r,250,1e4).then(a=>{if(!a)return;let n=u(),l=D.getVue(n);l!=null&&i.set(l);});});},goToUrl(e,t,u=!1){if(e==null){g.error("跳转Url: 获取根元素#app失败"),o.error("跳转Url: 获取根元素#app失败："+t);return}let i=D.getVue(e);if(i==null){o.error("获取vue属性失败"),g.error("获取vue属性失败");return}let r=i.$router,a=!0;if(o.info("即将跳转URL："+t),u&&(a=!1),a)window.open(t,"_blank");else {if(t.startsWith("http")||t.startsWith("//")){t.startsWith("//")&&(t=window.location.protocol+t);let n=new URL(t);if(n.origin===window.location.origin)t=n.pathname+n.search+n.hash;else {o.info("不同域名，直接本页打开，不用Router："+t),window.location.href=t;return}}o.info("$router push跳转Url："+t),r.push(t);}},hookGestureReturnByVueRouter(e){function t(){o.success("触发popstate事件"),i(!0);}function u(){o.success("监听地址改变"),e.vueInstance.$router.history.push(e.hash),m.on(window,"popstate",t);}async function i(r=!1){if(m.off(window,"popstate",t),!e.callback(r))for(;;)if(e.vueInstance.$router.history.current.hash===e.hash)o.info("后退！"),e.vueInstance.$router.back(),await s.sleep(250);else return}return u(),{resumeBack:i}}},ie={$isHook:{windowPlayerAgent:!1,hookWebpackJsonp_openApp:!1,overRideLaunchAppBtn_Vue_openApp:!1,overRideBiliOpenApp:!1},$data:{setTimeout:[]},windowWebPack(e="webpackJsonp",t,u){let i;fe.Object.defineProperty($,e,{get(){return i},set(r){o.success("成功劫持webpack，当前webpack名："+e),i=r;const a=i.push;i.push=function(...n){let l=n[0][0];return (t==l||Array.isArray(t)&&Array.isArray(l)&&JSON.stringify(t)===JSON.stringify(l))&&Object.keys(n[0][1]).forEach(p=>{let d=n[0][1][p];n[0][1][p]=function(...C){let f=d.call(this,...C);return C[0]=u(C[0]),f};}),a.call(this,...n)};}});},windowPlayerAgent(){if(this.$isHook.windowPlayerAgent)return;this.$isHook.windowPlayerAgent=!0;let e;fe.Object.defineProperty($,"PlayerAgent",{get(){return new Proxy({},{get(t,u){return u==="openApp"?function(...i){let r=i[0];if(o.info(["调用PlayerAgent.openApp",r]),r.event==="fullScreen"){let a=document.querySelector(".mplayer-btn-widescreen");a?a.click():o.warn("主动再次点击全屏按钮失败，原因：未获取到.mplayer-btn-widescreen元素");}}:e[u]}})},set(t){e=t;}});},setTimeout(e){if(this.$data.setTimeout.push(e),this.$data.setTimeout.length>1){o.info("window.setTimeout hook新增劫持判断参数："+e);return}$.setTimeout=function(...t){let u=t[0].toString();if(u.match(e)){o.success(["劫持setTimeout的函数",u]);return}return fe.setTimeout.apply(this,t)};},overRideLaunchAppBtn_Vue_openApp(){if(this.$isHook.overRideLaunchAppBtn_Vue_openApp)return;this.$isHook.overRideLaunchAppBtn_Vue_openApp=!0;function e(t){typeof t.openApp!="function"||t.openApp.toString().includes("阻止唤醒App")||(t.openApp=function(...i){o.success(["openApp：阻止唤醒App",i]);});}s.mutationObserver(document,{config:{subtree:!0,childList:!0,attributes:!0},callback(){document.querySelectorAll(".launch-app-btn").forEach(t=>{let u=D.getVue(t);u&&(e(u),u.$children&&u.$children.length&&u.$children.forEach(i=>{e(i);}));});}});},overRideBiliOpenApp(){this.$isHook.overRideBiliOpenApp||(this.$isHook.overRideBiliOpenApp=!0,s.mutationObserver(document,{config:{subtree:!0,childList:!0,attributes:!0},callback(){document.querySelectorAll("bili-open-app").forEach(e=>{if(e.hasAttribute("data-inject-opener-open"))return;let t=Reflect.get(e,"opener");if(t==null)return;typeof(t==null?void 0:t.open)=="function"&&(Reflect.set(t,"open",i=>{o.success(`拦截bili-open-app.open跳转: ${JSON.stringify(i)}`);}),e.setAttribute("data-inject-opener-open","true"));});}}));}},At={init(){c.execMenuOnce("bili-video-hook-callApp",()=>{o.info("hook window.PlayerAgent"),ie.windowPlayerAgent();});}},k={goToUrl(e,t=!1){let u=document.querySelector("#app");if(u==null){g.error("跳转Url: 获取根元素#app失败"),o.error("跳转Url: 获取根元素#app失败："+e);return}let i=D.getVue(u);if(i==null){o.error("获取#app的vue属性失败"),g.error("获取#app的vue属性失败");return}let r=i.$router,a=c.getValue("bili-go-to-url-blank");if(o.info("即将跳转URL："+e),t&&(a=!1),a)window.open(e,"_blank");else {if(e.startsWith("http")||e.startsWith("//")){e.startsWith("//")&&(e=window.location.protocol+e);let n=new URL(e);if(n.origin===window.location.origin)e=n.pathname+n.search+n.hash;else {o.info("不同域名，直接本页打开，不用Router："+e),window.location.href=e;return}}o.info("$router push跳转Url："+e),r.push(e);}},goToLogin(e=""){window.open(`https://passport.bilibili.com/h5-app/passport/login?gourl=${encodeURIComponent(e)}`);},parseDuration(e){if(typeof e!="number"&&(e=parseInt(e)),isNaN(e))return e.toString();function t(u){return u<10?`0${u}`:u}return e<60?`0:${t(e)}`:e>=60&&e<3600?`${Math.floor(e/60)}:${t(e%60)}`:`${Math.floor(e/3600)}:${t(Math.floor(e/60)%60)}:${t(e%60)}`},hookGestureReturnByVueRouter(e){function t(){o.success("触发popstate事件"),i(!0);}function u(){o.success("监听地址改变"),e.vueObj.$router.history.push(e.hash),m.on(window,"popstate",t);}async function i(r=!1){if(m.off(window,"popstate",t),!e.callback(r))for(;;)if(e.vueObj.$router.history.current.hash===e.hash)o.info("后退！"),e.vueObj.$router.back(),await s.sleep(250);else return}return u(),{resumeBack:i}},loadScript(e){let t=document.createElement("script");return t.src=e,document.head.appendChild(t),new Promise(u=>{t.onload=function(){o.success("script标签加载完毕："+e),setTimeout(()=>{u(!0);},100);};})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(u=>{Array.isArray(u)?t=t.concat(u):t.push(u);}),M(`${t.join(`,
`)}{display: none !important;}`)},initialScale(){o.info("设置<meta>的viewport固定缩放倍率为1并移除页面原有的<meta>"),m.ready(()=>{let e=m.createElement("meta",{},{name:"viewport",content:"width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover"});m.remove("meta[name='viewport']"),s.waitNode("head").then(()=>{document.head.appendChild(e);});});}},oe={getUserSpaceUrl(e){return `https://m.bilibili.com/space/${e}`},getUserSpaceDynamicUrl(e){return `https://m.bilibili.com/dynamic/${e}`},getUserSpaceOpusUrl(e){return `https://m.bilibili.com/opus/${e}`},getVideoUrl(e){return `https://m.bilibili.com/video/${e}`}},B={className:{bangumi:"#app.main-container",dynamic:"#app .m-dynamic",opus:"#app .m-opus",search:"#app .m-search","topic-detail":"#app .topic-detail",video:"#app .video",head:"#app .m-head"}},ke={className:{read:{mobile:"#app .read-app-main"}}},gt=`@charset "UTF-8";\r
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
#app .video .video-list .card-box .gm-right-container .gm-up-name svg{\r
	width: 3vmin;\r
	height: 3vmin;\r
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
`,Ge={$data:{isInitPlayer:!1,isUnlockUpower:!1},init(){c.execMenu("bili-video-initPlayer",()=>{this.initPlayer();}),c.execMenu("bili-video-setVideoPlayer",()=>{this.setVideoPlayer();}),c.execMenu("bili-video-unlockUpower",()=>{this.unlockUpower();});},initPlayer(){if(this.$data.isInitPlayer)return;this.$data.isInitPlayer=!0;let e=this;s.waitNode("#bilibiliPlayer",3e3).then(async t=>{if(!t){e.$data.isInitPlayer=!1;return}await s.sleep(300),D.waitVuePropToSet("."+"m-video-player",[{msg:"等待设置参数 fullScreenCallApp",check(i){return typeof(i==null?void 0:i.fullScreenCallApp)=="boolean"},set(i){i.fullScreenCallApp=!1,o.success("成功设置参数 fullScreenCallApp=false");}},{msg:"等待设置参数 gameMode",check(i){return typeof(i==null?void 0:i.gameMode)=="boolean"},set(i){i.gameMode=!0,o.success("成功设置参数 gameMode=true");}},{msg:"等待获取函数 initPlayer()",check(i){return typeof(i==null?void 0:i.initPlayer)=="function"},set(i){e.$data.isInitPlayer=!1;function r(){let a,n,l=1,p=!1,d=new s.LockFunction(async()=>{var A,v,w,L;let C=document.querySelector("#bilibiliPlayer video"),f=document.querySelector("#bilibiliPlayer img.mplayer-poster");if(C&&f&&f.src!==""){p=!0,(A=y.player)==null||A.off("restart_call_app"),(v=y.player)==null||v.off("force_call_app_show"),o.success("<video>标签和视频封面图已成功初始化"),await s.sleep(1e3),c.execMenu(["bili-coverQuality","bili-rememberUserChooseQuality"],()=>{ae.coverQuality(!0);}),y.init();return}$.BPlayerMobile==null&&(o.error("未加载player播放器，主动引入script标签"),await k.loadScript("https://s1.hdslb.com/bfs/static/player/main/html5/mplayer.js?v=2876316"),await s.sleep(300));try{i.initPlayer(!0);}catch(V){o.error(V);try{o.info("强制重载player播放器失败，使用普通调用"),i.initPlayer();}catch(N){o.error(N);}}o.success("第 "+l+" 次未检测到视频，调用初始化视频函数 initPlayer()"),await s.sleep(300),(w=y.player)==null||w.off("restart_call_app"),(L=y.player)==null||L.off("force_call_app_show"),l++;});a=setInterval(async()=>{await d.run(),p&&(clearTimeout(n),clearInterval(a));},600),n=setTimeout(()=>{o.warn("检测视频超时5s，取消检测"),clearInterval(a);},5e3);}r();}}]);});},unlockUpower(){D.waitVuePropToSet(B.className.video,[{msg:"设置属性 __vue__.info.is_upower_exclusive",check(e){var t;return typeof((t=e==null?void 0:e.info)==null?void 0:t.is_upower_exclusive)=="boolean"},set(e){e.info.is_upower_exclusive=!1,o.success("成功设置属性  __vue__.info.is_upower_exclusive=false");}},{msg:"设置属性 __vue__.info.is_upower_play",check(e){var t;return typeof((t=e==null?void 0:e.info)==null?void 0:t.is_upower_play)=="boolean"},set(e){e.info.is_upower_play=!1,o.success("成功设置属性  __vue__.info.is_upower_play=false");}},{msg:"设置属性 __vue__.info.is_upower_preview",check(e){var t;return typeof((t=e==null?void 0:e.info)==null?void 0:t.is_upower_preview)=="boolean"},set(e){e.info.is_upower_preview=!1,Ge.initPlayer(),o.success("成功设置属性  __vue__.info.is_upower_preview=false");}}]);},setVideoPlayer(){D.waitVuePropToSet(B.className.video+" .m-video-player",[{msg:"设置参数 playBtnNoOpenApp",check(e){return typeof e.playBtnNoOpenApp=="boolean"},set(e){e.playBtnNoOpenApp=!0,o.success("成功设置参数 playBtnNoOpenApp=true");}},{msg:"设置参数 playBtnOpenApp",check(e){return typeof e.playBtnOpenApp=="boolean"},set(e){e.playBtnOpenApp=!1,o.success("成功设置参数 playBtnOpenApp=false");}},{msg:"设置参数 coverOpenApp",check(e){return typeof e.coverOpenApp=="boolean"},set(e){e.coverOpenApp=!1,o.success("成功设置参数 coverOpenApp=false");}}]);}},je={$data:{isAddBeautifyCSS:!1},init(){At.init(),Ge.init(),c.execMenuOnce("bili-video-repairVideoBottomAreaHeight",()=>this.repairVideoBottomAreaHeight()),c.execMenuOnce("bili-video-autoClickContinueToWatchOnTheWebpage",()=>{this.autoClickContinueToWatchOnTheWebpage();}),c.execMenu("bili-video-beautify",()=>{this.beautify();}),c.execMenuOnce("bili-video-cover-bottomRecommendVideo",()=>{this.coverBottomRecommendVideo();}),c.execMenuOnce("bili-video-gestureReturnToCloseCommentArea",()=>{this.gestureReturnToCloseCommentArea();}),c.execMenuOnce("bili-video-cover-seasonNew",()=>{this.coverSeasonNew();}),m.ready(()=>{c.execMenuOnce("bili-video-optimizationScroll",()=>{this.optimizationScroll();}),c.execMenu("bili-video-disableSwipeTab",()=>{this.disableSwipeTab();});});},beautify(){o.info("美化显示"),this.$data.isAddBeautifyCSS||(this.$data.isAddBeautifyCSS=!0,M(gt)),s.waitNode(B.className.video+" .bottom-tab .list-view .card-box",1e4).then(e=>{if(!e){o.error("$cardBox is null");return}function t(a){var C,f;let n=a.querySelector(".title"),l=a.querySelector(".count .left"),p=!!a.querySelector(".gm-right-container"),d=D.getVue(a);if(n&&l&&d&&!p){let A=(f=(C=d==null?void 0:d.info)==null?void 0:C.owner)==null?void 0:f.name;if(A==null){o.error("美化显示-handleVCardToApp：获取up主名字失败");return}let v=a.querySelector(".count"),w=n.cloneNode(!0),L=l.cloneNode(!0);m.hide(n),v&&m.hide(v);let V=a.querySelector(".open-app.weakened");V&&m.hide(V);let N=document.createElement("div");N.className="gm-up-name",N.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${A}</span>
						`;let b=document.createElement("div"),_=document.createElement("div");b.className="gm-right-container",_.className="gm-right-bottom",m.after(n,b),b.appendChild(w),b.appendChild(_),_.appendChild(N),_.appendChild(L);}}function u(a){var C,f,A;let n=a.querySelector(".title"),l=a.querySelector(".count"),p=!!a.querySelector(".gm-right-container"),d=D.getVue(a);if(n&&l&&d&&!p){let v=(C=d==null?void 0:d.info)==null?void 0:C.duration;if(v==null){o.error("美化显示-handleVCard：获取视频时长失败");return}let w=(A=(f=d==null?void 0:d.info)==null?void 0:f.owner)==null?void 0:A.name;if(w==null){o.error("美化显示-handleVCard：获取up主名字失败");return}let L=n.cloneNode(!0),V=l.cloneNode(!0);m.hide(n);let N=document.createElement("div");N.className="duration",N.innerText=k.parseDuration(v),V.className="left";let b=document.createElement("div");l.appendChild(N),b.className="gm-up-name",b.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${w}</span>
						`;let _=document.createElement("div"),x=document.createElement("div");_.className="gm-right-container",x.className="gm-right-bottom",m.after(n,_),_.appendChild(L),_.appendChild(x),x.appendChild(b),x.appendChild(V);}}let i=new s.LockFunction(()=>{let a=document.querySelectorAll(B.className.video+" .bottom-tab .list-view .card-box .v-card-toapp"),n=document.querySelectorAll(B.className.video+" .bottom-tab .list-view .card-box>a.v-card");a.forEach(l=>{t(l);}),n.forEach(l=>{u(l);});},25),r=document.querySelector(B.className.video);r?s.mutationObserver(r,{config:{subtree:!0,attributes:!0,childList:!0},callback(){i.run();}}):o.error("未找到视频根节点");});},repairVideoBottomAreaHeight(){return o.info("修复视频底部区域高度"),M(`
		${B.className.video} {
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
			${B.className.video}{
				.m-video-info-new{
					margin-top: 72vmin;
				}
			}
		}
		`)},autoClickContinueToWatchOnTheWebpage(){m.on(document,"click",B.className.video+" .main-info .btn",function(){o.info("触发点击【立即播放】，自动等待弹窗出现"),s.waitNode(".to-see",1e4).then(e=>{if(!e){o.error("弹窗按钮【继续在网页观看】10秒内未出现，取消等待");return}o.success("自动点击 继续在网页观看"),e.click();});});},coverBottomRecommendVideo(){o.info("覆盖 相关视频 点击事件"),m.on(document,"click",B.className.video+" .list-view .card-box .launch-app-btn",function(e){let t=e.target,u=D.getVue(t);if(!u){g.error("获取相关视频的__vue__失败");return}let i=u.bvid;if(s.isNull(i))if(u.$children&&u.$children[0]&&s.isNotNull(u.$children[0].bvid))i=u.$children[0].bvid;else {g.error("获取相关视频的bvid失败");return}o.info("相关视频的bvid: "+i),k.goToUrl(oe.getVideoUrl(i)),s.preventEvent(e);},{capture:!0});},coverSeasonNew(){o.info("覆盖 选集视频列表 点击事件");function e(t){let u=t.target,i=D.getVue(u);if(!i){g.error("获取选集视频的目标视频的__vue__失败");return}let r=i.bvid;if(s.isNull(r)){g.error("获取相关视频的bvid失败");return}o.info("相关视频的bvid: "+r),k.goToUrl(oe.getVideoUrl(r)),s.preventEvent(t);}m.on(document,"click",B.className.video+" .m-video-season-new .video-card .launch-app-btn",e,{capture:!0}),m.on(document,"click",B.className.video+" .m-video-season-panel .season-video-item .launch-app-btn",e,{capture:!0});},gestureReturnToCloseCommentArea(){o.info("手势返回关闭评论区，全局监听document点击.sub-reply-preview"),s.waitNode("#app").then(e=>{s.waitVueByInterval(e,()=>{var u,i;let t=D.getVue(e);return t==null?!1:typeof((i=(u=t==null?void 0:t.$router)==null?void 0:u.options)==null?void 0:i.scrollBehavior)!=null},250,1e4).then(t=>{let u=D.getVue(e);if(!u){o.error("获取#app的vue属性失败");return}let i=u.$router.options.scrollBehavior;u.$router.options.scrollBehavior=function(r,a,n){return r.hash==="#/seeCommentReply"?(o.info("当前操作为打开评论区，scrollBehavior返回null"),null):r.hash===""&&a.hash==="#/seeCommentReply"?(o.info("当前操作为关闭评论区，scrollBehavior返回null"),null):i.call(this,...arguments)};});}),m.on(document,"click",".sub-reply-preview",function(e){let t=document.querySelector("#app"),u=D.getVue(t);if(!u){o.error("获取#app元素失败");return}let i=k.hookGestureReturnByVueRouter({vueObj:u,hash:"#/seeCommentReply",callback(r){if(!r)return !1;let a=document.querySelector(".dialog-close-icon");return a?a.click():o.error("评论区关闭失败，原因：元素dialog-close-icon获取失败"),!0}});s.waitNode(".dialog-close-icon").then(r=>{m.on(r,"click",function(){i.resumeBack(!1);},{capture:!0,once:!0});});});},enterVideoFullScreen(){s.waitNode(".mplayer-btn-widescreen",5e3).then(e=>{if(!e){o.error("获取全屏按钮失败"),g.error("获取全屏按钮失败");return}if(e.closest(".mplayer-wide")){o.warn("当前的全屏按钮是【退出全屏】，不点击");return}o.info("进入全屏"),e.click();});},optimizationScroll(){let e=null,t=null,u=null,i=null,r=null,a=0,n=0;function l(p){return !document.contains(p)}m.on(document,"scroll",p=>{if(l(t)){if(t=document.querySelector(".m-video-player"),l(t))return;if(a==0){const A=t.getBoundingClientRect();a=A.height,n=A.top,o.info(`视频区域的最大高度为 ${a}px`),o.info(`视频区域的最大top为 ${n}px`);}}if(l(u)&&(u=document.querySelector(".m-video-info-new"),l(u))||l(e)&&(e=document.querySelector(".m-navbar"),l(e))||l(i)&&(i=document.querySelector(".bottom-tab"),l(i))||l(r)&&(r=document.querySelector(".bottom-tab .v-affix"),l(r)))return;let d=u.getBoundingClientRect().top;d>=0?d<=a?t.style.paddingTop=d+"px":t.style.paddingTop="":t.style.paddingTop="0px";let C=m.height(e);i.getBoundingClientRect().top<C?r.hasAttribute("data-is-fixed")||(r.style.cssText=`position: fixed;left: 0px;top: ${C}px;z-index: 10000;width: 100%;`,r.setAttribute("data-is-fixed","true")):(r.style.cssText="",r.removeAttribute("data-is-fixed"));},{passive:!0});},disableSwipeTab(){o.info("禁止滑动切换tab"),D.waitVuePropToSet(".m-video-bottom-tab",{msg:"等待tab的vue属性touchstart、touchmove、touchend事件，_bindEvents函数",check(e){var t,u,i,r,a,n,l,p;return ((t=e==null?void 0:e.slider)==null?void 0:t.el)instanceof HTMLElement&&typeof((i=(u=e==null?void 0:e.slider)==null?void 0:u.events)==null?void 0:i.touchstart)=="function"&&typeof((a=(r=e==null?void 0:e.slider)==null?void 0:r.events)==null?void 0:a.touchmove)=="function"&&typeof((l=(n=e==null?void 0:e.slider)==null?void 0:n.events)==null?void 0:l.touchend)=="function"&&typeof((p=e==null?void 0:e.slider)==null?void 0:p._bindEvents)=="function"},set(e){let t=e.slider.el;t.removeEventListener("touchstart",e.slider.events.touchstart),t.removeEventListener("touchmove",e.slider.events.touchmove),t.removeEventListener("touchend",e.slider.events.touchend),e.slider._bindEvents=()=>{},o.success("成功禁用滑动，清除touchstart、touchmove、touchend事件，覆盖_bindEvents函数");}});}},ae={$flag:{isInitCSS:!1,isCoverMPlayer:!1},$el:{get $mplayerRight(){return document.querySelector(".mplayer-right")}},$mPlayerRight:{__activeClassName:"gf-mplayer-right-item-active",__itemClassName:"gf-mplayer-right-item",__showMPlayerRightClassName:"gf-mplayer-right-show",showMPlayerRight(e=50){if(e>0){setTimeout(()=>{this.showMPlayerRight(0);},50);return}ae.$el.$mplayerRight.classList.add(this.__showMPlayerRightClassName);},hideMPlayerRight(){ae.$el.$mplayerRight.classList.remove(this.__showMPlayerRightClassName);},clearMPlayerRight(){ae.$el.$mplayerRight.innerHTML="";},setActive(e){e.classList.add(this.__activeClassName);},switchActive(e){this.clearAllActive(),this.setActive(e);},isActive(e){return e.classList.contains(this.__activeClassName)},clearActive(e){e.classList.remove(this.__activeClassName);},clearAllActive(){ae.$el.$mplayerRight.querySelectorAll("."+this.__activeClassName).forEach(e=>e.classList.remove(this.__activeClassName));},createMPlayerItem(e){return m.createElement("div",{className:this.__itemClassName,innerHTML:e??""})}},init(){this.$flag.isInitCSS||(this.$flag.isInitCSS=!0,M(`
			.mplayer-right {
				--mplayer-right-w: 8em;
				--mplayer-right-deviation: var(--mplayer-right-w);
				background: #181212;
				width: var(--mplayer-right-w) !important;
				opacity: 0.9 !important;
				visibility: visible !important;
				color: #ffffff;
				-webkit-transform: translateX(8em) !important;
				transform: translateX(8em) !important;
				z-index: 1000;
				overflow-y: auto;
				display: block;
				align-content: center;
				position: absolute;
				transition: transform .4s;
				top: 0;
				bottom: 0;
				right: 0;
			}
			.gf-mplayer-right-show{
				-webkit-transform: translateX(0) !important;
				transform: translateX(0) !important;
			}
			.gf-mplayer-right-item{
				width: 100%;
				text-align: center;
				align-content: center;
				padding: 1em 0px;
			}
			.gf-mplayer-right-item-active {
				color: var(--bili-color);
			}
			`)),c.execMenuOnce("bili-coverSpeedBtn",()=>{this.coverMPlayer(),this.coverSpeedBtn();}),c.execMenuOnce("bili-coverQuality",()=>{this.coverMPlayer(),this.coverQuality();}),c.onceExec("bili-repairPlayerToastCloseBtn",()=>{this.repairPlayerToastCloseBtn();});},coverMPlayer(){this.$flag.isCoverMPlayer||(this.$flag.isCoverMPlayer=!0,m.on(document,"click",e=>{var u,i,r;let t=e.target;(u=this.$el)!=null&&u.$mplayerRight&&!((r=(i=this.$el)==null?void 0:i.$mplayerRight)!=null&&r.contains(t))&&this.$mPlayerRight.hideMPlayerRight();},{capture:!0}));},coverSpeedBtn(){m.on(document,"click",".mplayer-control-btn-speed",async e=>{s.preventEvent(e),o.info("点击【倍速】"),this.$mPlayerRight.hideMPlayerRight(),this.$mPlayerRight.clearMPlayerRight();let t=[{text:"5.0X",value:5},{text:"3.0X",value:3},{text:"2.0X",value:2},{text:"1.5X",value:1.5},{text:"1.25X",value:1.25},{text:"1.0X",value:1},{text:"0.75X",value:.75},{text:"0.5X",value:.5},{text:"0.25X",value:.25}],u=await y.getVideoPlayBackRate(),i;t.forEach(r=>{let a=this.$mPlayerRight.createMPlayerItem(r.text);u==r.value&&(i=a),m.on(a,"click",async n=>{s.preventEvent(n),await y.setVideoSpeed(r.value),this.$mPlayerRight.switchActive(a),this.$mPlayerRight.hideMPlayerRight();}),this.$el.$mplayerRight.appendChild(a);}),i&&(this.$mPlayerRight.switchActive(i),i.scrollIntoView({block:"center"})),this.$mPlayerRight.showMPlayerRight();},{capture:!0});},coverQuality(e){const t="userChooseVideoQuality";let u=async(r,a)=>{if(a&&this.$mPlayerRight.isActive(a)){o.info("该项已选中，无需重复点击");return}q.toast("切换中，请稍后");let n=await y.$player.playerPromise(),l=n.config.bvid,p=n.config.cid;if(!l){q.toast("获取bvid失败");return}let d=await Be.playUrl({bvid:l,cid:p,qn:r.quality,setPlatformHTML5:!0},{__t:Date.now()});if(!d){q.toast("获取视频信息失败"),o.error("获取视频信息失败");return}o.success(["切换清晰度-成功获取当前视频的具体信息",d]);let C=d.quality;if(!(d.durl&&Array.isArray(d.durl)&&d.durl.length>0)){o.error("请求的视频信息内没有视频地址url"),q.toast("请求的视频信息内没有视频地址url");return}if(C!=r.quality){o.error(`切换画质失败，请求到的画质和切换的画质不同，切换的: ${r.quality}，请求到的: ${C}`),q.toast("切换画质失败，画质不同");return}let f=d.durl[0].url;if(n.video&&n.video instanceof HTMLVideoElement){let A=await y.setVideoUrl(f);A.success?(o.success(`已成功切换至 ${r.text}`),y.$data.videoQuality.forEach(v=>{v.quality==r.quality?v.isActive=!0:v.isActive=!1;}),a&&this.$mPlayerRight.switchActive(a),q.toast(`已成功切换至 ${r.text}`),K(t,C),R.init()):(o.error("切换画质失败，未成功设置video的src"),q.toast("切换画质失败，"+A.msg));}else o.error("切换画质失败，未获取到video"),q.toast("切换画质失败，未获取到video");this.$mPlayerRight.hideMPlayerRight();},i=async r=>{o.info("点击【清晰度】"),this.$mPlayerRight.hideMPlayerRight(),this.$mPlayerRight.clearMPlayerRight();let a=[];if(y.$data.videoQuality.length)a=[...y.$data.videoQuality];else {let p=(await y.$player.playerPromise()).videoQuality;Object.keys(j).forEach(d=>{let C=j[d];a.push({text:d,quality:C,isActive:p==C});});}console.log("获取当前视频的清晰度: ",a),s.sortListByProperty(a,l=>l.quality);let n;a.forEach(l=>{let p=this.$mPlayerRight.createMPlayerItem(l.text);l.isActive&&(n=p),m.on(p,"click",async d=>{s.preventEvent(d),u(l,p);}),this.$el.$mplayerRight.appendChild(p);}),n?(this.$mPlayerRight.switchActive(n),n.scrollIntoView({block:"center"})):o.warn("意外情况，没有一个选中的清晰度"),this.$mPlayerRight.showMPlayerRight();};if(e){let r=H(t);r&&y.$data.videoQuality.findIndex(n=>n.quality==r&&!n.isActive)!=-1&&u({text:We[r],quality:r,isActive:!0});}else m.on(document,"click",".mplayer-control-btn-quality",async r=>{s.preventEvent(r),i();},{capture:!0});},repairPlayerToastCloseBtn(){m.on(document,"click",".mplayer-toast.mplayer-show .mplayer-toast-close",e=>{e.target.closest(".mplayer-show").classList.remove("mplayer-show");});}},y={get player(){return $.player},$player:{async playerPromise(){return await s.waitPropertyByInterval($,()=>{var t,u;return typeof y.player=="object"&&typeof((t=y.player)==null?void 0:t.playerPromise)=="object"&&((u=y.player)==null?void 0:u.playerPromise)!=null},250,1e4),await y.player.playerPromise},parseBiliH5PlayerToPlayer(e){let t=e.player,u=e.options,i={container:t.elem,config:u,danmaku:t.danmaku,video:t.video,videoQuality:u.qn,VideoInfo:{avid:u.aid,bvid:u.bvid,cid:u.cid,video_type:u.video_type}},r={playerPromise:new Promise(a=>{a(i);})};$.player=r;}},$data:{videoQuality:[],hookUnlockQuality:0},init(){this.$data.videoQuality=[],this.$data.hookUnlockQuality=0,this.setVideoSpeed(1),ae.init(),this.initPlayerVideoInfo(),c.execMenu("bili-video-playerAutoPlayVideo",()=>{this.autoPlay();}),c.execMenu("bili-video-playerAutoPlayVideoCheckMute",()=>{this.listenVideoMuteState();}),this.mutatuinCloseOriginToast(),setTimeout(()=>{R.init();},500);},initVideoQualityInfo(e){this.$data.hookUnlockQuality=e,this.$data.videoQuality.forEach(t=>{t.quality==e&&(t.isActive=!0);});},async listenVideoMuteState(){let t=(await this.$player.playerPromise()).video;const u="data-is-listen-mute";if(!(t instanceof HTMLVideoElement)){o.error("player.playerPromise中video不是HTMLVideoElement");return}if(t.hasAttribute(u))return;t.setAttribute(u,"true"),o.success("添加video的play事件监听，视频播放检测静音状态");function i(){let r=t.muted;if(t.muted){o.warn("当前静音状态，Qmsg提示让用户自行选择是否取消静音");let a=q.toast({text:"当前视频为静音状态",jumpText:"取消静音",timeout:8e3,showCloseBtn:!0,jumpClickCallback(n){var l;o.info(`设置静音状态：${!r}`),(l=y.player)==null||l.setMute(!r),a.close();}});}else o.info("当前视频非静音状态");}m.on(t,"play",async r=>{await s.sleep(500),i(),t.removeAttribute(u);},{once:!0}),i();},async setVideoSpeed(e){return new Promise(async(t,u)=>{try{let i=await this.$player.playerPromise();await s.waitPropertyByInterval(async()=>(i=await y.$player.playerPromise(),i),()=>typeof i.video!=null&&i.video instanceof HTMLVideoElement,250,1e4),i.video.playbackRate=e,o.success(`设置视频播放倍速: ${e}`);let r=await R.DanmakuCoreConfig();r.videoSpeed=e,o.success(`设置弹幕配置的视频播放倍速: ${e}`),t(!0);}catch(i){u(i);}})},async autoPlay(){return new Promise(async(e,t)=>{var u;try{let i=await this.$player.playerPromise();await s.sleep(500),o.success("player：自动播放视频"),(u=y.player)==null||u.play(),await s.sleep(500),c.execMenu("bili-video-playerAutoPlayVideoFullScreen",()=>{je.enterVideoFullScreen();});}catch(i){t(i);}})},async getVideoPlayBackRate(){return new Promise(async(e,t)=>{try{let u=await this.$player.playerPromise();await s.waitPropertyByInterval(async()=>(u=await y.$player.playerPromise(),u),()=>typeof u.video!=null&&u.video instanceof HTMLVideoElement,250,1e4),e(u.video.playbackRate);}catch(u){t(u);}})},async initPlayerVideoInfo(){let e=await this.$player.playerPromise(),t=e.config.bvid,u=e.config.cid;if(!t){o.error("获取bvid失败");return}let i=await Be.playUrl({bvid:t,cid:u});if(!i)return;o.success(["成功获取当前视频的具体信息",i]);let r=i.quality;if(i.durl==null||Array.isArray(i.durl)&&!i.durl.length){o.error("意外情况，获取到的视频地址信息是空的");return}i.durl[0].url;let a=i.support_formats;this.$data.videoQuality=a.map(n=>{if(n.quality<=j["720P 高清"])return {text:n.new_description,quality:n.quality,isActive:!1}}).filter(n=>n!=null),this.initVideoQualityInfo(r);},async setVideoUrl(e){try{let t=await P.head(e,{fetch:!0,fetchInit:{credentials:"same-origin"},allowInterceptConfig:!1});if(!t.status)return {success:!1,msg:"测试视频地址连接失败，状态码："+t.data.status};let u=await y.$player.playerPromise();if(u.video&&u.video instanceof HTMLVideoElement){let i=u.video.currentTime;u.video.src=e,u.video.currentTime=i,await s.sleep(500);try{u.video.play(),u.video.paused&&u.video.play();}catch(r){o.error(r);}return {success:!0,msg:"设置成功"}}else return {success:!1,msg:"不存在video元素"}}catch(t){return o.error(t),{success:!1,msg:t.toString()}}},mutatuinCloseOriginToast(){let e=s.mutationObserver(document.documentElement,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{document.querySelectorAll('.mplayer-toast:not([data-from="gm"])').forEach(t=>{var u;t.hasAttribute("data-is-delay-close")||(u=t.textContent)!=null&&u.includes("记忆你上次看到")&&(t.setAttribute("data-is-delay-close","true"),setTimeout(()=>{let i=t.querySelector(".mplayer-toast-close");i?i.click():t.remove();},3e3));});}});setTimeout(()=>{e.disconnect();},1e4);}},de={key:"bili-danmaku-filter",mode:{6:"从左往右",5:"顶部",4:"底部",1:"从右往左"},$player:{async danmakuArray(){var u,i;await s.waitPropertyByInterval($,()=>{var r;return typeof y.player=="object"&&typeof((r=y.player)==null?void 0:r.playerPromise)=="object"},250,1e4);let e=await y.$player.playerPromise();return await s.waitPropertyByInterval(async()=>{e=await y.$player.playerPromise();},()=>{var r,a,n,l,p,d;return typeof((a=(r=e==null?void 0:e.danmaku)==null?void 0:r.danmakuCore)==null?void 0:a.danmakuArray)=="object"&&((l=(n=e==null?void 0:e.danmaku)==null?void 0:n.danmakuCore)==null?void 0:l.danmakuArray)!=null&&Array.isArray((d=(p=e==null?void 0:e.danmaku)==null?void 0:p.danmakuCore)==null?void 0:d.danmakuArray)},250,1e4),(i=(u=e==null?void 0:e.danmaku)==null?void 0:u.danmakuCore)==null?void 0:i.danmakuArray},async danmakuFilter(){var u,i,r;await s.waitPropertyByInterval($,()=>{var a;return typeof y.player=="object"&&typeof((a=y.player)==null?void 0:a.playerPromise)=="object"},250,1e4);let e=await y.$player.playerPromise();return await s.waitPropertyByInterval(async()=>{e=await y.$player.playerPromise();},()=>{var a,n,l;return typeof((l=(n=(a=e==null?void 0:e.danmaku)==null?void 0:a.danmakuCore)==null?void 0:n.config)==null?void 0:l.danmakuFilter)=="function"},250,1e4),(r=(i=(u=e==null?void 0:e.danmaku)==null?void 0:u.danmakuCore)==null?void 0:i.config)==null?void 0:r.danmakuFilter}},$data:{danmakuArray:[]},$fn:{updateDanmakuArray:new s.LockFunction(async()=>{de.$data.danmakuArray=await de.$player.danmakuArray();},250)},async init(){let e=this.parseRule(),t=await this.$player.danmakuFilter(),u=this;if(typeof t=="function"){let i=await y.$player.playerPromise();await s.waitPropertyByInterval(async()=>{i=await y.$player.playerPromise();},()=>{var n,l,p;return typeof((p=(l=(n=i==null?void 0:i.danmaku)==null?void 0:n.danmakuCore)==null?void 0:l.config)==null?void 0:p.danmakuFilter)=="function"},250,1e4);let r=S.isBangumi(),a=function(n){let l=!1;return l=u.filter(n,e),r&&(l=!l),l};Reflect.set(i.danmaku.danmakuCore.config,"danmakuFilter",a),o.success("成功覆盖danmakuFilter");}},updateDanmakuArray(){this.$fn.updateDanmakuArray.run();},filter(e,t){this.updateDanmakuArray();let u=!1;if(u||c.getValue("bili-danmaku-filter-type-roll")&&(e.mode===1||e.mode===6)&&(u=!0),u||c.getValue("bili-danmaku-filter-type-top")&&(e.mode===5||e.mode===1||e.mode===6)&&(u=!0),u||c.getValue("bili-danmaku-filter-type-bottom")&&e.mode===4&&(u=!0),u||c.getValue("bili-danmaku-filter-type-colour")&&e.color!==16777215&&(u=!0),u||c.getValue("bili-danmaku-filter-type-repeat")&&this.$data.danmakuArray.findIndex((r,a)=>e.text===r.text&&e!=r)!=-1&&(u=!0),!u&&c.getValue("bili-danmaku-filter"))for(let i=0;i<t.length;i++){const r=t[i];if(typeof e.text=="string"&&e.text.match(r)){u=!0;break}}return u},parseRule(){let e=this.getValue(),t=[];return e.split(`
`).forEach(u=>{let i=u.trim(),r=new RegExp(s.parseStringToRegExpString(i),"ig");t.push(r);}),t},getValue(){return H(this.key,"")},setValue(e=""){K(this.key,e);}},R={fontFamily:[{text:"黑体",value:"SimHei, 'Microsoft JhengHei'"},{text:"宋体",value:"SimSun"},{text:"新宋体",value:"NSimSun"},{text:"仿宋",value:"FangSong"},{text:"微软雅黑",value:"'Microsoft YaHei'"},{text:"微软雅黑 Light",value:"'Microsoft Yahei UI Light'"},{text:"Noto Sans DemiLight",value:"'Noto Sans CJK SC DemiLight'"},{text:"'Noto Sans CJK SC Regular'",value:"'Noto Sans CJK SC Regular'"}],init(){de.init();let e=c.getValue("bili-danmaku-opacity"),t=c.getValue("bili-danmaku-area"),u=c.getValue("bili-danmaku-fontSize"),i=c.getValue("bili-danmaku-duration"),r=c.getValue("bili-danmaku-bold"),a=c.getValue("bili-danmaku-fullScreenSync"),n=c.getValue("bili-danmaku-speedSync"),l=c.getValue("bili-danmaku-fontFamily");c.execMenuOnce("bili-danmaku-container-top",p=>this.setContainerTop(p),void 0,void 0,()=>!0),this.setOpacity(e),this.setArea(t),this.setFontSize(u),this.setDuration(i),this.setBold(r),this.setFullScreenSync(a),this.setSpeedSync(n),this.setFontFamily(l);},async DanmakuCoreConfig(){let e=await y.$player.playerPromise();return await s.waitPropertyByInterval(async()=>(e=await y.$player.playerPromise(),e),()=>{var t,u,i,r;return typeof((u=(t=e==null?void 0:e.danmaku)==null?void 0:t.danmakuCore)==null?void 0:u.config)=="object"&&((r=(i=e==null?void 0:e.danmaku)==null?void 0:i.danmakuCore)==null?void 0:r.config)!=null},250,1e4),e.danmaku.danmakuCore.config},setContainerTop(e){let t=parseInt(e.toString());if(!isNaN(t))return o.success(`设置弹幕容器距离顶部的距离: ${e}`),M(`
		.mplayer-danmaku-container{
			top: ${t}px !important;
		}
		`)},setOpacity(e){this.DanmakuCoreConfig().then(t=>{"opacity"in t?(t.opacity=e,o.success(`设置-弹幕不透明度: ${e}`)):o.error("设置-弹幕不透明度失败, 不存在 opacity 属性");});},setArea(e){let t={25:"1/4屏",50:"半屏",75:"3/4屏",100:"全屏"};this.DanmakuCoreConfig().then(u=>{"danmakuArea"in u?(u.danmakuArea=e,o.success(`设置-显示区域: ${e} => ${t[e]}`)):o.error("设置-显示区域失败, 不存在 danmakuArea 属性");});},setFontSize(e){this.DanmakuCoreConfig().then(t=>{"fontSize"in t?(t.fontSize=e,o.success(`设置-字体大小: ${e}`)):o.error("设置-字体大小失败, 不存在 fontSize 属性");});},setDuration(e){this.DanmakuCoreConfig().then(t=>{"duration"in t?(t.duration=e,o.success(`设置-持续时间（弹幕速度）: ${e}`)):o.error("设置-持续时间（弹幕速度）失败, 不存在 duration 属性");});},setBold(e){this.DanmakuCoreConfig().then(t=>{"bold"in t?(t.bold=e,o.success(`设置-粗体: ${e}`)):o.error("设置-粗体失败, 不存在 bold 属性");});},setFullScreenSync(e){this.DanmakuCoreConfig().then(t=>{"fullScreenSync"in t?(t.fullScreenSync=e,o.success(`设置-弹幕随屏幕缩放: ${e}`)):o.error("设置-弹幕随屏幕缩放失败, 不存在 fullScreenSync 属性");});},setFontFamily(e){this.DanmakuCoreConfig().then(t=>{"fontFamily"in t?(t.fontFamily=e,o.success(`设置-弹幕字体: ${e}`)):o.error("设置-弹幕字体失败, 不存在 fontFamily 属性");});},setSpeedSync(e){this.DanmakuCoreConfig().then(async t=>{let u=await y.$player.playerPromise();await s.waitPropertyByInterval(async()=>(u=await y.$player.playerPromise(),u),()=>typeof u.video=="object"&&u.video!=null&&u.video instanceof HTMLVideoElement,250,1e4);let i=u.video.playbackRate;"videoSpeed"in t?(t.videoSpeed=i,o.success(`设置-当前视频播放倍速: ${i}`)):o.error("设置-弹幕速度同步播放倍数失败, 不存在 videoSpeed 属性"),"speedSync"in t?(t.speedSync=e,o.success(`设置-弹幕速度同步播放倍数: ${e}`)):o.error("设置-弹幕速度同步播放倍数失败, 不存在 speedSync 属性");});}},vt={id:"panel-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("监听路由-重载所有功能","bili-listenRouterChange",!0,void 0,"用于处理页面跳转(本页)时功能不生效问题"),h("修复VueRouter跳转404问题","bili-repairVueRouter404",!0,void 0,"例如：点击UP主正确进入空间"),h("新标签页打开","bili-go-to-url-blank",!1,void 0,"通过开启【覆盖点击事件】相关的设置，通过新标签页打开链接"),h("允许复制","bili-allowCopy",!0,void 0,"一般用于处理楼层的回复弹窗内无法选中复制问题")]}]},{type:"deepMenu",text:"播放器",forms:[{text:"功能",type:"forms",forms:[h("记住选择的清晰度","bili-rememberUserChooseQuality",!0,void 0,"需开启 - 修复【清晰度】按钮"),h("修复【倍速】按钮","bili-coverSpeedBtn",!0,void 0,"可以自行选择视频倍速"),h("修复【清晰度】按钮","bili-coverQuality",!0,void 0,"可查看当前视频的清晰度")]}]},{type:"deepMenu",text:"弹幕",forms:[{text:"弹幕设置",type:"forms",forms:[Ae("顶部距离","bili-danmaku-container-top",0,0,100,1,void 0,e=>`${e}px`,"设置弹幕容器距离顶部的距离"),Ae("不透明度","bili-danmaku-opacity",.75,.2,1,.01,(e,t)=>{R.setOpacity(t);},e=>`${parseInt((e*100).toString())}%`),ue("显示区域","bili-danmaku-area",25,[{text:"1/4屏",value:25},{text:"半屏",value:50},{text:"3/4屏",value:75},{text:"全屏",value:100}],(e,t,u)=>{R.setArea(t);}),Ae("字体大小","bili-danmaku-fontSize",.7,.2,2,.1,(e,t)=>{R.setFontSize(t);},e=>`${parseInt((e*100).toString())}%`),ue("弹幕速度","bili-danmaku-duration",6,[{text:"极慢",value:10},{text:"较慢",value:8},{text:"适中",value:6},{text:"较快",value:4},{text:"极快",value:2}],(e,t,u)=>{R.setDuration(t);}),h("弹幕随屏幕缩放","bili-danmaku-fullScreenSync",!1,(e,t)=>{R.setFullScreenSync(t);}),h("弹幕速度同步播放倍数","bili-danmaku-speedSync",!0,(e,t)=>{R.setSpeedSync(t);})]},{type:"forms",text:"",forms:[ue("弹幕字体","bili-danmaku-fontFamily",R.fontFamily.find(t=>t.text==="黑体").value,R.fontFamily,(e,t,u)=>{R.setFontFamily(t);}),h("粗体","bili-danmaku-bold",!0,(e,t)=>{R.setBold(t);})]},{text:"按类型屏蔽",type:"forms",forms:[we(e=>{let t=m.createElement("div",{className:"bpx-player-dm-setting-left-block-content",innerHTML:`
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
											`});return t.querySelectorAll(".bpx-player-block-filter-type").forEach(u=>{let i=u.querySelector(".bpx-player-block-filter-label"),r=u.getAttribute("data-key"),a=c.getValue(r);u.setAttribute("data-value",String(a)),m.on(u,"click",n=>{s.preventEvent(n);let l=c.getValue(r),p=!l;u.setAttribute("data-value",String(p)),o.success(`${i.innerText} ${p?"开启":"关闭"}`),c.setValue(r,p);});}),e.appendChild(t),e},{"bili-danmaku-filter-type-repeat":!1,"bili-danmaku-filter-type-roll":!1,"bili-danmaku-filter-type-top":!1,"bili-danmaku-filter-type-bottom":!1,"bili-danmaku-filter-type-colour":!1}),h("屏蔽词","bili-danmaku-filter",!1,void 0,"开启后可使用↓自定义的规则过滤弹幕"),we(e=>{let t=m.createElement("div",{className:"pops-panel-textarea",innerHTML:`
												<textarea placeholder="请输入规则，每行一个，可正则" style="height:200px;"></textarea>`},{style:"width: 100%;"}),u=t.querySelector("textarea");return u.value=de.getValue(),m.on(u,["input","propertychange"],void 0,s.debounce(function(i){de.setValue(u.value);},200)),e.appendChild(t),e})]}]},{text:"变量设置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("isLogin","bili-setLogin",!0,void 0,"$store.state.common.noCallApp=true<br>$store.state.common.userInfo.isLogin=true<br>$store.state.loginInfo.isLogin=true"),h("isClient","bili-setIsClient",!0,void 0,"$store.state.video.isClient=true<br>$store.state.opus.isClient=true<br>$store.state.playlist.isClient=true<br>$store.state.ver.bili=true<br>$store.state.ver.biliVer=2333"),h("tinyApp","bili-setTinyApp",!0,void 0,"$store.state.common.tinyApp=true")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("覆盖.launch-app-btn openApp","bili-overrideLaunchAppBtn_Vue_openApp",!0,void 0,"覆盖.launch-app-btn元素上的openApp函数，可阻止点击唤醒/下载App"),h("覆盖bili-open-app opener.open","bili-cover-bili-open-app-open",!0,void 0,"覆盖bili-open-app元素上的opener.open函数，可阻止点击唤醒/下载App"),h("劫持setTimeout-autoOpenApp","bili-hookSetTimeout_autoOpenApp",!0,void 0,"阻止自动调用App")]}]}]},{text:"",type:"forms",forms:[{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[ue("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,u)=>{o.info("设置当前Qmsg弹出位置"+u);},"Toast显示在页面九宫格的位置"),ue("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),h("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]},{text:"Cookie配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("启用","httpx-use-cookie-enable",!1,void 0,"启用后，将根据下面的配置进行添加cookie"),h("使用document.cookie","httpx-use-document-cookie",!1,void 0,"自动根据请求的域名来获取对应的cookie"),Ct("bilibili.com","httpx-cookie-bilibili.com","",void 0,void 0,"Cookie格式：xxx=xxxx;xxx=xxxx")]}]}]}]},yt={id:"panel-video",title:"视频",isDefault(){return S.isVideo()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("调整视频底部区域高度","bili-video-repairVideoBottomAreaHeight",!0,void 0,"添加margin-top"),h("自动点击【继续在网页观看】","bili-video-autoClickContinueToWatchOnTheWebpage",!0,void 0,"可避免弹窗出现且自动点击后播放视频"),h("美化底部推荐视频","bili-video-beautify",!0,void 0,"调整底部推荐视频卡片样式类似哔哩哔哩App"),h("手势返回关闭评论区","bili-video-gestureReturnToCloseCommentArea",!0,void 0,"当浏览器手势触发浏览器回退页面时，关闭评论区"),h("强制本页刷新跳转","bili-video-forceThisPageToRefreshAndRedirect",!1,void 0,"用于解决跳转播放视频时，播放当前视频会有上一个播放视频的声音的情况"),h("initPlayer","bili-video-initPlayer",!0,void 0,"自动执行初始化播放器"),h("检测是否静音","bili-video-playerAutoPlayVideoCheckMute",!1,void 0,"在播放视频时自动检测视频是否静音，有的话弹出Toast")]},{text:"自动播放视频",type:"forms",forms:[h("启用","bili-video-playerAutoPlayVideo",!1,void 0,"需开启【initPlayer】"),h("自动进入全屏","bili-video-playerAutoPlayVideoFullScreen",!1,void 0,"需开启【自动播放视频】")]},{type:"forms",text:"底部Tab",forms:[h("滚动固钉Tab","bili-video-optimizationScroll",!0,void 0,"向下滚动时，自动跳转视频区域大小且对Tab进行吸附处理"),h("禁止滑动切换Tab","bili-video-disableSwipeTab",!1,void 0,"禁止左右滑动切换Tab")]}]},{text:"变量设置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("playBtnNoOpenApp","bili-video-setVideoPlayer",!0,void 0,"playBtnNoOpenApp=true<br>playBtnOpenApp=false<br>coverOpenApp=false"),h("解锁充电限制","bili-video-unlockUpower",!1,void 0,"is_upower_exclusive=true<br>is_upower_play=false<br>is_upower_preview=false")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("相关视频","bili-video-cover-bottomRecommendVideo",!0,void 0,"点击下面的相关视频可正确跳转至该视频"),h("选集","bili-video-cover-seasonNew",!0,void 0,"点击下面的选集列表内的视频可正确跳转至该视频")]}]},{text:"网络拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("解锁清晰度","bili-video-xhr-unlockQuality",!0,void 0,"最高清晰度为720P")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("阻止调用App","bili-video-hook-callApp",!0,void 0,"处理函数: PlayerAgent")]}]}]}]},W={tv:{appkey:"4409e2ce8ffd12b8",appsec:"59b43e04ad6965f34319062b478f83dd",mobi_app:"android_tv_yst"},ios:{appkey:"27eb53fc9058f8c3",appsec:"c2ed53a74eeefe3cf99fbd01d8c9c375",mobi_app:"ipnone"}};function Se(e,t,u){e.appkey=t;const i=new URLSearchParams(e);return i.sort(),rt(i.toString()+u)}const _e={async getQrCodeInfo(){var n;let e="https://passport.bilibili.com/x/passport-tv-login/qrcode/auth_code",t={appkey:W.ios.appkey,local_id:"0",ts:"0",mobi_app:W.ios.mobi_app,csrf:((n=qe.get("bili_jct"))==null?void 0:n.value)||""},u=Se(t,W.ios.appkey,W.ios.appsec),i=await P.post(e,{data:s.toSearchParamsStr({...t,sign:u}),headers:{"Content-Type":"application/x-www-form-urlencoded"},responseType:"json",fetch:!0});if(o.info(i),!i.status)return;let r=s.toJSON(i.data.responseText);if(r.code!==0){g.error(r.message);return}return r.data},async poll(e){let t="https://passport.bilibili.com/x/passport-tv-login/qrcode/poll",u={appkey:W.ios.appkey,auth_code:e,local_id:"0",ts:"0"},i=Se(u,W.ios.appkey,W.ios.appsec),r=await P.post(t,{data:s.toSearchParamsStr({...u,sign:i}),headers:{"Content-Type":"application/x-www-form-urlencoded"},responseType:"json",fetch:!0});if(!r.status)return {success:!1,message:"网络错误",action:void 0};const a=s.toJSON(r.data.responseText);o.info(a);const n={0:"成功","-3":"API校验密匙错误","-400":"请求错误","-404":"啥都木有",86038:"二维码已失效",86039:"二维码尚未确认",86090:"二维码已扫码未确认"};if(!I.isWebApiSuccess(a)){const d=a.code.toString(),C=a.message||n[d]||"未知错误";return d==="86038"?{success:!1,message:C,action:"refresh"}:d==="86039"||d==="86090"?{success:!1,message:C,action:"wait"}:{success:!1,message:C,action:void 0}}const l=a.data.access_token,p=Date.now()+a.data.expires_in*1e3;return {success:!0,message:"获取成功",accessKey:l,accessKeyExpireAt:p}}},X={async init(){g.info("正在申请二维码...");let e=await this.getQRCodeInfo();e&&this.confirmScanQrcode(e);},getQRCodeInfo:async function(){o.info("正在申请二维码...");let e=await _e.getQrCodeInfo();return o.info(["获取到二维码信息",e]),e},async confirmScanQrcode(e){let t=ce.alert({title:{text:"请扫描二维码登录",position:"center",html:!1,style:""},content:{text:'<div id="bili-qrcode-canvas"></div>',html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(a){r=!0,a.close();}}},mask:{enable:!0,clickEvent:{toClose:!1,toHide:!1}},only:!0,width:"310px",height:"365px",drag:!0,dragLimit:!0,style:`
            #bili-qrcode-canvas{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
            }
            `}),u=t.$shadowRoot.querySelector("#bili-qrcode-canvas"),i=new De(u,{text:e.url,width:300,height:300,colorDark:"#000000",colorLight:"#ffffff",correctLevel:De.CorrectLevel.H}),r=!1;for(;;){if(r){o.error("用户关闭扫码登录弹窗、取消扫码登录");break}o.info("正在等待扫码登录...");let a=await _e.poll(e.auth_code);if(a!=null&&a.success){this.setAccessTokenInfo({access_token:a.accessKey,expireAt:a.accessKeyExpireAt}),o.info(["扫码登录成功",a]),o.success("扫码登录成功"),g.success("扫码登录成功");break}else if((a==null?void 0:a.action)==="refresh"){o.info("刷新二维码"),g.info("刷新二维码");let n=await this.getQRCodeInfo();n&&(i.clear(),i.makeCode(n.url));}else if(a.action==="wait")a.message==="二维码已扫码未确认"&&(o.info("已扫码，等待确认..."),ce.loading({parent:u,content:{text:"已扫码，等待确认"},mask:{enable:!0}}));else {o.error(a.message),g.error(a.message);break}await s.sleep(1500);}t.close();},generateExpireAt(e=6){return new Date().getTime()+1e3*60*60*24*30*e},setAccessTokenInfo(e){K("bili-accessTokenInfo",e);},getAccessTokenInfo(){let e=H("bili-accessTokenInfo");return e&&e.expireAt>Date.now()?e:null},getAccessToken(){var e;return ((e=this.getAccessTokenInfo())==null?void 0:e.access_token)||""}},be={getBangumiProxyHost(){let e=[{name:"中国大陆",area:"",host:c.getValue("bili-bangumi-proxyApiServer-default","").trim()||pe.web_host}];if(!c.getValue("bili-bangumi-unlockAreaLimit"))return e;let t=c.getValue("bili-bangumi-proxyApiServer-hk");s.isNotNull(t)&&e.push({name:"香港",area:"hk",host:t});let u=c.getValue("bili-bangumi-proxyApiServer-tw");s.isNotNull(u)&&e.push({name:"台湾",area:"tw",host:u});let i=c.getValue("bili-bangumi-proxyApiServer-tha-or-sea");return s.isNotNull(i)&&e.push({name:"泰国/东南亚",area:"th",host:i}),e},getSearchProxyHost(){let e=this.getBangumiProxyHost(),t=[],u=c.getValue("bili-search-proxyApiServer-hk");if(s.isNotNull(u))t.push({name:"香港",area:"hk",host:u});else {let a=e.find(n=>n.area==="hk");a&&t.push(a);}let i=c.getValue("bili-search-proxyApiServer-tw");if(s.isNotNull(i))t.push({name:"台湾",area:"tw",host:i});else {let a=e.find(n=>n.area==="tw");a&&t.push(a);}let r=c.getValue("bili-search-proxyApiServer-tha-or-sea");return s.isNotNull(r)?t.push({name:"泰国/东南亚",area:"th",host:r}):e.find(n=>n.area==="th")&&t.push,t},getBangumiProxySearchParam(e={}){return {from_client:"BROWSER",drm_tech_type:2,module:"bangumi",area:(e==null?void 0:e.area)||"",access_key:X.getAccessToken()}}},Y={findBetterCDN(...e){let t=[];e.forEach(i=>{Array.isArray(i)?t=t.concat(i.filter(r=>typeof r=="string")):typeof i=="string"&&t.push(i);});let u=t.find(i=>{if(new URL(i).host.startsWith("upos"))return i});return u||t[0]},replaceVideoCDN(e){try{let t=new URL(e),u=c.getValue("bili-bangumi-uposServerSelect"),i=this.getUposCDNServerList().find(n=>n.host===u);if(s.isNull(i))return e;let r=i.host,a=t.host;return a.includes("mirror")&&(o.info(`原Host为：${a}`),o.info(`替换CDN为：${JSON.stringify(i)}`),t.host=r),t.toString()}catch(t){return o.error(["视频upos替换失败",t]),o.error(t),e}},getUposCDNServerList(){return [{name:"不替换",host:""},{name:"ali（阿里云）",host:"upos-sz-mirrorali.bilivideo.com"},{name:"alib（阿里云）",host:"upos-sz-mirroralib.bilivideo.com"},{name:"alio1（阿里云）",host:"upos-sz-mirroralio1.bilivideo.com"},{name:"cos（腾讯云）",host:"upos-sz-mirrorcos.bilivideo.com"},{name:"cosb（腾讯云，VOD加速类型）",host:"upos-sz-mirrorcosb.bilivideo.com"},{name:"coso1（腾讯云）",host:"upos-sz-mirrorcoso1.bilivideo.com"},{name:"hw（华为云，融合CDN）",host:"upos-sz-mirrorhw.bilivideo.com"},{name:"hwb（华为云，融合CDN）",host:"upos-sz-mirrorhwb.bilivideo.com"},{name:"hwo1（华为云，融合CDN）",host:"upos-sz-mirrorhwo1.bilivideo.com"},{name:"08c（华为云，融合CDN）",host:"upos-sz-mirror08c.bilivideo.com"},{name:"08h（华为云，融合CDN）",host:"upos-sz-mirror08h.bilivideo.com"},{name:"08ct（华为云，融合CDN）",host:"upos-sz-mirror08ct.bilivideo.com"},{name:"tf_hw（华为云）",host:"upos-tf-all-hw.bilivideo.com"},{name:"tf_tx（腾讯云）",host:"upos-tf-all-tx.bilivideo.com"},{name:"akamai（Akamai海外）",host:"upos-hz-mirrorakam.akamaized.net"},{name:"aliov（阿里云海外）",host:"upos-sz-mirroraliov.bilivideo.com"},{name:"cosov（腾讯云海外）",host:"upos-sz-mirrorcosov.bilivideo.com"},{name:"hwov（华为云海外）",host:"upos-sz-mirrorhwov.bilivideo.com"},{name:"hk_bcache（Bilibili海外）",host:"cn-hk-eq-bcache-01.bilivideo.com"},{name:"alibstar1（阿里云海外-东南亚）",host:"upos-sz-mirroralibstar1.bilivideo.com"},{name:"cosbstar1（腾讯云海外-东南亚）",host:"upos-sz-mirrorcosbstar1.bilivideo.com"},{name:"hwbstar1（华为云海外-东南亚）",host:"upos-sz-mirrorhwbstar1.bilivideo.com"},{name:"akamai（Akamai海外-东南亚）",host:"upos-bstar1-mirrorakam.akamaized.net"}]}},G=function(e,t,u,i,r,a="",n,l){let p={text:e,type:"input",isNumber:!!n,isPassword:!!l,attributes:{},description:i,getValue(){return c.getValue(t,u)},callback(d,C){typeof r=="function"&&r(d,C)||c.setValue(t,C);},placeholder:a};return p.attributes&&(p.attributes[ee]=t,p.attributes[te]=u),p},bt={id:"panel-bangumi",title:"番剧",isDefault(){return S.isBangumi()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("固定缩放倍率","bili-bangumi-initialScale",!0,void 0,"")]}]},{text:"变量设置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("pay","bili-bangumi-setPay",!0,void 0,"$store.state.userStat.pay=1<br>$store.state.mediaInfo.user_status.pay=1")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("【选集】","bili-bangumi-cover-clicl-event-chooseEp",!0,void 0,"让【选集】的视频列表可点击跳转"),h("【其它】","bili-bangumi-cover-clicl-event-other",!0,void 0,"让【PV&其他】、【预告】、【主题曲】、【香境剧场】等的视频列表可点击跳转"),h("【更多推荐】","bili-bangumi-cover-clicl-event-recommend",!0,void 0,"让【更多推荐】的视频列表可点击跳转")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("阻止调用App","bili-bangumi-hook-callApp",!0,void 0,"")]}]},{text:"解除区域限制",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("解锁番剧限制","bili-bangumi-unlockAreaLimit",!1,void 0,"使用户可以观看区域外版权番剧"),h("生成简中字幕","bili-bangumi-generateSimpleChineseSubtitle",!1,void 0,"根据繁体字幕自动生成简体中文字幕")]},{text:"<a href='https://github.com/yujincheng08/BiliRoaming/wiki/%E5%85%AC%E5%85%B1%E8%A7%A3%E6%9E%90%E6%9C%8D%E5%8A%A1%E5%99%A8' target='_blank'>解析服务器</a>",type:"forms",forms:[G("中国大陆","bili-bangumi-proxyApiServer-default","","用于请求播放地址的代理",void 0,"bilibili优化.example.com"),G("香港","bili-bangumi-proxyApiServer-hk","","用于请求播放地址的代理",void 0,"bilibili优化.example.com"),G("台湾","bili-bangumi-proxyApiServer-tw","","用于请求播放地址的代理",void 0,"bilibili优化.example.com"),G("泰国/东南亚","bili-bangumi-proxyApiServer-tha-or-sea","","用于请求播放地址的代理",void 0,"bilibili优化.example.com")]},{text:"加速CDN设置",type:"forms",forms:[ue("UPOS服务器设置","bili-bangumi-uposServerSelect","",Y.getUposCDNServerList().map(e=>({text:e.name,value:e.host})),void 0,"设置解锁番剧的服务器，可加快视频加载速度")]}]}]}]},Et={id:"panel-search",title:"搜索",isDefault(){return S.isSearch()},forms:[{type:"forms",text:"",forms:[{type:"deepMenu",text:"功能",forms:[{type:"forms",text:"",forms:[h("搜索框自动获取焦点","bili-search-inputAutoFocus",!1,void 0,""),h("开启其它地区番剧搜索","bili-search-enableOtherAreaSearchBangumi",!1,void 0,"在搜索页面添加其它地区番剧搜索结果，需要解析服务器支持")]},{text:"<a href='https://github.com/yujincheng08/BiliRoaming/wiki/%E5%85%AC%E5%85%B1%E8%A7%A3%E6%9E%90%E6%9C%8D%E5%8A%A1%E5%99%A8' target='_blank'>搜索服务器</a>",type:"forms",forms:[G("香港","bili-search-proxyApiServer-hk","","用于搜索番剧结果的代理",void 0,"bilibili优化.example.com"),G("台湾","bili-search-proxyApiServer-tw","","用于搜索番剧结果的代理",void 0,"bilibili优化.example.com"),G("泰国/东南亚","bili-search-proxyApiServer-tha-or-sea","","用于搜索番剧结果的代理",void 0,"bilibili优化.example.com")]}]},{type:"deepMenu",text:"覆盖点击事件",forms:[{type:"forms",text:"",forms:[h("取消","bili-search-cover-cancel",!1,void 0,"点击取消按钮回退至上一页")]}]}]}]},Bt={id:"panel-live",title:"直播",isDefault(){return S.isLive()},forms:[{text:"",type:"forms",forms:[{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("【屏蔽】聊天室","bili-live-block-chatRoom",!1,void 0,"直接不显示底部的聊天室"),h("【屏蔽】xxx进入直播间","bili-live-block-brush-prompt",!1,void 0,"直接不显示底部的xxx进入直播间"),h("【屏蔽】控制面板","bili-live-block-control-panel",!1,void 0,"屏蔽底部的发个弹幕、送礼")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("阻止open-app-btn元素点击事件触发","bili-live-prevent-openAppBtn",!0,void 0,"开启后可不跳转至唤醒App页面")]}]}]}]},Dt={id:"panel-opus",title:"专栏",isDefault(){return S.isOpus()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("自动展开阅读全文","bili-opus-automaticallyExpandToReadFullText",!0,void 0,"屏蔽【展开阅读全文】按钮并自动处理全文高度")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("话题","bili-opus-cover-topicJump",!0,void 0,"点击话题正确跳转"),h("header用户","bili-opus-cover-header",!0,void 0,"点击内容上的发布本动态的用户正确跳转个人空间")]}]}]}]},Ft={id:"panel-dynamic",title:"动态",isDefault(){return S.isDynamic()},forms:[{text:"",type:"forms",forms:[{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("话题","bili-dynamic-cover-topicJump",!0,void 0,"点击话题正确跳转"),h("header用户","bili-dynamic-cover-header",!0,void 0,"点击内容上的发布本动态的用户正确跳转个人空间"),h("@用户","bili-dynamic-cover-atJump",!0,void 0,"点击@用户正确跳转个人空间"),h("引用","bili-dynamic-cover-referenceJump",!0,void 0,"点击引用的视频|用户正确跳转")]}]}]}]},wt={id:"panel-head",title:"首页",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("美化显示","bili-head-beautify",!0,void 0,"调整瀑布流视频卡片样式类似哔哩哔哩App"),h("美化顶部NavBar","bili-beautifyTopNavBar",!0,void 0,"类似哔哩哔哩App的样式"),h("补充推荐视频信息","bili-head-supplementaryVideoStreamingInformation",!0,void 0,"给视频添加UP主名，当前视频总时长信息")]}]},{text:"推荐视频",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("启用","bili-head-recommend-enable",!1,void 0,"添加【推荐】标签，数据来源为App端(如果填入了access_token的话)"),h("显示【图文】","bili-head-recommend-push-graphic",!0,void 0,"加载App端推送的【图文】卡片"),G("access_token","bili-head-recommend-access_token",X.getAccessToken(),"填入access_token，即可获取推荐视频数据",(e,t,u)=>{X.setAccessTokenInfo({access_token:t,expireAt:X.generateExpireAt()});},void 0,!1,!0)]}]}]}]},xt={id:"panel-space",title:"个人空间",isDefault(){return S.isSpace()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("修复正确跳转","bili-space-repairRealJump",!0,void 0,"修复视频|动态的正确跳转，避免跳转404")]}]}]}]},c={$data:{__data:null,__oneSuccessExecMenu:null,__onceExec:null,__listenData:null,get data(){return c.$data.__data==null&&(c.$data.__data=new s.Dictionary),c.$data.__data},get oneSuccessExecMenu(){return c.$data.__oneSuccessExecMenu==null&&(c.$data.__oneSuccessExecMenu=new s.Dictionary),c.$data.__oneSuccessExecMenu},get onceExec(){return c.$data.__onceExec==null&&(c.$data.__onceExec=new s.Dictionary),c.$data.__onceExec},get scriptName(){return Fe},key:J,attributeKeyName:ee,attributeDefaultValueName:te},$listener:{get listenData(){return c.$data.__listenData==null&&(c.$data.__listenData=new s.Dictionary),c.$data.__listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},isTopWindow(){return $.top===$.self},initExtensionsMenu(){this.isTopWindow()&&dt.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPanel();}},{key:"go_to_login",text:"🛠 前往登录",autoReload:!1,isStoreValue:!1,showText(e){return e},callback(){k.goToLogin();}},{key:"go_to_login_to_parse_access_key",text:"🛠 扫码并解析access_key",autoReload:!1,isStoreValue:!1,showText(e){return e},callback(){X.init();}}]);},initPanelDefaultValue(){let e=this;function t(r){if(!r.attributes)return;let a={},n=r.attributes[ee];n!=null&&(a[n]=r.attributes[te]);let l=r.attributes[Ie];if(typeof l=="function"){let C=l();if(typeof C=="boolean"&&!C)return}let p=r.attributes[mt];p&&typeof p=="object"&&Object.assign(a,p);let d=Object.keys(a);if(!d.length){o.warn(["请先配置键",r]);return}d.forEach(C=>{let f=a[C];e.$data.data.has(C)&&o.warn("请检查该key(已存在): "+C),e.$data.data.set(C,f);});}function u(r){for(let a=0;a<r.length;a++){let n=r[a];t(n);let l=n.forms;l&&Array.isArray(l)&&u(l);}}let i=this.getPanelContentConfig();for(let r=0;r<i.length;r++){let a=i[r];if(!a.forms)continue;let n=a.forms;n&&Array.isArray(n)&&u(n);}},setValue(e,t){let u=H(J,{}),i=u[e];u[e]=t,K(J,u),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,i,t);},getValue(e,t){let i=H(J,{})[e];return i??(this.$data.data.has(e)?this.$data.data.get(e):t)},deleteValue(e){let t=H(J,{}),u=t[e];Reflect.deleteProperty(t,e),K(J,t),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,u,void 0);},addValueChangeListener(e,t){let u=Math.random();return this.$listener.listenData.set(e,{id:u,key:e,callback:t}),u},removeValueChangeListener(e){let t=null;for(const[u,i]of this.$listener.listenData.entries())if(i.id===e){t=u;break}this.$listener.listenData.delete(t);},triggerMenuValueChange(e,t,u){if(this.$listener.listenData.has(e)){let i=this.$listener.listenData.get(e);if(typeof i.callback=="function"){let r=this.getValue(e),a=r,n=r;typeof t<"u"&&arguments.length>1&&(a=t),typeof u<"u"&&arguments.length>2&&(n=u),i.callback(e,n,a);}}},hasKey(e){let t=H(J,{});return e in t},execMenu(e,t,u=!1,i){if(!(typeof e=="string"||typeof e=="object"&&Array.isArray(e)))throw new TypeError("key 必须是字符串或者字符串数组");let r=[];typeof e=="object"&&Array.isArray(e)?r=[...e]:r.push(e);let a;for(let n=0;n<r.length;n++){const l=r[n];if(!this.$data.data.has(l)){o.warn(`${e} 键不存在`);return}let p=c.getValue(l);if(u&&(p=!p),typeof i=="function"){let d=i(l,p);typeof d=="boolean"&&(p=d);}if(!p)break;a=p;}a&&t(a);},execMenuOnce(e,t,u,i,r){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){o.warn(`${e} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(e))return;this.$data.oneSuccessExecMenu.set(e,1);let a=()=>{let f=c.getValue(e);return typeof u=="function"?u(e,f):f},n=[],l=f=>{let A=a(),v=[];if(f instanceof HTMLStyleElement?v=[f]:Array.isArray(f)&&(v=[...f.filter(w=>w!=null&&w instanceof HTMLStyleElement)]),A)n=n.concat(v);else for(let w=0;w<v.length;w++)v[w].remove(),v.splice(w,1),w--;},p=f=>typeof r=="function"?r(e,f):f,d=f=>{let A=[];if(p(f)){let v=t(f,l);v instanceof HTMLStyleElement?A=[v]:Array.isArray(v)&&(A=[...v.filter(w=>w!=null&&w instanceof HTMLStyleElement)]);}for(let v=0;v<n.length;v++)n[v].remove(),n.splice(v,1),v--;n=[...A];};this.addValueChangeListener(e,(f,A,v)=>{let w=v;typeof i=="function"&&(w=i(f,v,A)),d(w);});let C=a();C&&d(C);},execInheritMenuOnce(e,t,u,i){let r=this;const a=(n,l)=>{let p=r.getValue(n),d=r.getValue(l);if(typeof i=="function"){let C=i(p,d);if(C!=null)return C}return p};this.execMenuOnce(e,u,()=>a(e,t),()=>a(e,t)),this.execMenuOnce(t,()=>{},()=>!1,()=>(this.triggerMenuValueChange(e),!1));},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(t(),this.$data.onceExec.set(e,1));},showPanel(){ce.panel({title:{text:`${Fe}-设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:this.isMobile(),width:this.getWidth(),height:this.getHeight(),drag:!0,only:!0});},isMobile(){return window.innerWidth<550},getWidth(){return window.innerWidth<550?"92vw":"550px"},getHeight(){return window.innerHeight<550?"80vh":"450px"},getPanelContentConfig(){return [vt,wt,yt,Dt,Ft,bt,Et,xt,Bt]}},kt=`@charset "UTF-8";\r
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
`,St=`.artplayer-container {\r
	--bili-color: #f25d8e;\r
}\r
.artplayer-container {\r
	width: 100vw;\r
	height: 35vh;\r
}\r
#artplayer {\r
	width: 100%;\r
	height: 100%;\r
}\r
.art-video-player {\r
	width: 100% !important;\r
}\r
/* 播放时隐藏进度条 */\r
.art-hide-cursor .art-progress {\r
	display: none !important;\r
}\r
/* 大会员画质 */\r
.art-player-quality-badge-bigvip {\r
	border-radius: 8px;\r
	-webkit-box-sizing: border-box;\r
	box-sizing: border-box;\r
	display: block;\r
	padding: 2px 5px;\r
	background-color: var(--bili-color);\r
	color: #fff;\r
	margin-left: 16px;\r
}\r
/* 选中的清晰度中如果有大会员文字，隐藏 */\r
.art-selector-value .art-player-quality-badge-bigvip {\r
	display: none !important;\r
}\r
/* 不知道为什么背景模糊了 */\r
.art-video-player.art-backdrop .art-settings {\r
	backdrop-filter: unset !important;\r
}\r
/* 竖屏且宽度小于550px */\r
@media (max-width: 550px) and (orientation: portrait) {\r
	/* 隐藏 清晰度选择 */\r
	.art-control.art-control-quality,\r
	/* 隐藏 画质选择按钮 */\r
	.art-control.art-control-quality,\r
	/* 隐藏 弹幕设置按钮 */\r
	.artplayer-plugin-danmuku .apd-config ,\r
    /* 隐藏 弹幕输入框 */\r
	.artplayer-plugin-danmuku .apd-emitter {\r
		display: none !important;\r
	}\r
	/* 弹幕库靠右对齐 */\r
	.artplayer-plugin-danmuku {\r
		justify-content: right;\r
	}\r
}\r
/* 横屏 */\r
@media (orientation: landscape) {\r
	/* 限制弹幕输入框的最大宽度 */\r
	.artplayer-plugin-danmuku .apd-emitter {\r
		max-width: 260px;\r
	}\r
}\r
\r
/* 插件-在线观看人数  */\r
.art-layer-top-wrap {\r
	--layer-top-wrap-follow-text-font-size: 0.8em;\r
	--layer-top-wrap-follow-icon-size: 1em;\r
	position: absolute;\r
	top: 0px;\r
	right: 0px;\r
	color: #fff;\r
	display: -webkit-box;\r
	display: -ms-flexbox;\r
	display: flex;\r
	left: 0;\r
	-webkit-transition: all 0.2s ease-in-out;\r
	transition: all 0.2s ease-in-out;\r
	width: 100%;\r
	background: rgba(0, 0, 0, 0.8);\r
	padding: calc(var(--art-padding));\r
	z-index: 60;\r
}\r
.art-hide-cursor .art-layer-top-wrap {\r
	display: none;\r
}\r
.art-layer-top-wrap .art-player-top-wrap {\r
}\r
.art-layer-top-wrap .art-player-top-title-text {\r
}\r
/* 下面的当前在线观看人数 */\r
.art-layer-top-wrap .art-player-top-follow {\r
	margin-top: var(--art-padding);\r
	gap: var(--layer-top-wrap-follow-text-font-size);\r
	font-size: var(--layer-top-wrap-follow-text-font-size);\r
	display: flex;\r
	align-items: center;\r
	position: absolute;\r
}\r
.art-layer-top-wrap .art-player-top-follow .art-player-top-follow-icon {\r
	width: var(--layer-top-wrap-follow-icon-size);\r
	height: var(--layer-top-wrap-follow-icon-size);\r
}\r
.art-layer-top-wrap .art-player-top-follow-text {\r
	text-wrap: nowrap;\r
}\r
/* 插件-在线观看人数  */\r
`,ne={getUrl(e){if(e!=null)return e.getAttribute("universallink")},jumpToUrl(e){let u=e.target.querySelector("bili-open-app");if(u){let i=ne.getUrl(u);i?k.goToUrl(i):(g.error("获取bili-open-app的Url失败"),o.error("获取bili-open-app的Url失败"));}else g.error("未获取到<bili-open-app>元素"),o.error("未获取到<bili-open-app>元素");}},le={filteringSensitiveSearchParamData(e){const t=s.assign({},e,!0);return Reflect.deleteProperty(t,"access_key"),Reflect.deleteProperty(t,"access_token"),t},failToast(e){o.error(e),alert(JSON.stringify(e,null,4));}},$e={async getPlayUrl(e){let t={avid:"",cid:"",ep_id:"",qn:127,fnver:0,fnval:3088,fourk:1};t=s.assign(t,e);let u=be.getBangumiProxyHost();o.info("番剧播放地址请求数据");let i=[],r;const a="/pgc/player/web/playurl";o.info(`请求路径：${a}`);for(let n=0;n<u.length;n++){const l=u[n],p=l.host,d={};p!==pe.web_host&&(s.assign(d,be.getBangumiProxySearchParam({area:l.area}),!0),o.info(`代理服务器数据: ${JSON.stringify(l)}`),o.info(`代理服务器请求参数：${JSON.stringify(le.filteringSensitiveSearchParamData(d))}`));let C=`https://${p}${a}?${s.toSearchParamsStr(t)}&${s.toSearchParamsStr(d)}`,f=await P.get(C,{responseType:"json",fetch:!1,allowInterceptConfig:!1,headers:{Referer:"https://www.bilibili.com/"}});if(!f.status){o.error(`代理服务器：${p} 请求失败`);continue}let A=s.toJSON(f.data.responseText);if(A.result,!I.isWebApiSuccess(A)||I.isAreaLimit(A)){o.error(`请求失败，当前代理服务器：${p} ${JSON.stringify(A)}`),i.push(A);continue}r=A.result;break}return r==null&&le.failToast(i),r},async getPlayUrlHTML5(e){let t={avid:"",cid:"",ep_id:"",bsource:""};t=s.assign(t,e),o.info("（原版api）番剧播放地址请求数据");let i=`https://${pe.web_host}/pgc/player/web/playurl/html5?${s.toSearchParamsStr(t)}`,r=await P.get(i,{responseType:"json",fetch:!0,headers:{Host:"www.bilibili.com",Referer:"https://www.bilibili.com"}});if(!r.status)return;let a=s.toJSON(r.data.responseText);if(!I.isWebApiSuccess(a)){le.failToast(a);return}return a.result}},F={art:null,audio:new Audio,userEvent:{onRestart:void 0},events:{play:()=>{F.syncAudioProgress(),F.syncAudioVolumn(),F.audio.play(),F.syncAudioProgress();},seek:e=>{F.syncAudioProgress();},pause:()=>{F.audio.pause(),F.syncAudioProgress();},restart:e=>{if(typeof F.userEvent.onRestart=="function"){let t=F.userEvent.onRestart(e);typeof t=="string"&&(F.audio.src=t);}F.syncAudioProgress();},muted:e=>{F.audio.muted=e,F.syncAudioVolumn();},destroy:()=>{F.audio.pause();},error:(e,t)=>{F.audio.pause();},"video:ended":()=>{F.audio.pause(),F.syncAudioProgress();},"video:ratechange":()=>{F.audio.playbackRate=F.art.playbackRate;},"video:waiting":()=>{F.audio.pause(),F.syncAudioProgress();},"video:playing":()=>{F.syncAudioProgress(),F.audio.play(),F.syncAudioProgress();},"video:volumechange":()=>{F.syncAudioVolumn(),F.syncAudioProgress();}},update(e){this.unbind(),s.isNull(e)?this.audio.src="":(this.audio.src=e,this.bind());},syncAudioProgress(){this.audio.currentTime=this.art.currentTime;},syncAudioVolumn(){this.audio.volume=this.art.volume;},bind(){Object.keys(this.events).forEach(e=>{this.art.on(e,this.events[e]);});},unbind(){Object.keys(this.events).forEach(e=>{this.art.off(e,this.events[e]);});}},_t=e=>t=>(F.art=t,o.info("加载番剧音频："+e.url),typeof e.onRestart=="function"&&(F.userEvent.onRestart=e.onRestart),F.update(e.url),{name:"plugin-bilibili-m4sAudio",update(u){F.update(u),F.syncAudioVolumn(),F.syncAudioProgress();}}),Je={S:"万与丑专业丛东丝丢两严丧个丬丰临为丽举么义乌乐乔习乡书买乱争于亏云亘亚产亩亲亵亸亿仅从仑仓仪们价众优伙会伛伞伟传伤伥伦伧伪伫体余佣佥侠侣侥侦侧侨侩侪侬俣俦俨俩俪俭债倾偬偻偾偿傥傧储傩儿兑兖党兰关兴兹养兽冁内冈册写军农冢冯冲决况冻净凄凉凌减凑凛几凤凫凭凯击凼凿刍划刘则刚创删别刬刭刽刿剀剂剐剑剥剧劝办务劢动励劲劳势勋勐勚匀匦匮区医华协单卖卢卤卧卫却卺厂厅历厉压厌厍厕厢厣厦厨厩厮县参叆叇双发变叙叠叶号叹叽吁后吓吕吗吣吨听启吴呒呓呕呖呗员呙呛呜咏咔咙咛咝咤咴咸哌响哑哒哓哔哕哗哙哜哝哟唛唝唠唡唢唣唤唿啧啬啭啮啰啴啸喷喽喾嗫呵嗳嘘嘤嘱噜噼嚣嚯团园囱围囵国图圆圣圹场坂坏块坚坛坜坝坞坟坠垄垅垆垒垦垧垩垫垭垯垱垲垴埘埙埚埝埯堑堕塆墙壮声壳壶壸处备复够头夸夹夺奁奂奋奖奥妆妇妈妩妪妫姗姜娄娅娆娇娈娱娲娴婳婴婵婶媪嫒嫔嫱嬷孙学孪宁宝实宠审宪宫宽宾寝对寻导寿将尔尘尧尴尸尽层屃屉届属屡屦屿岁岂岖岗岘岙岚岛岭岳岽岿峃峄峡峣峤峥峦崂崃崄崭嵘嵚嵛嵝嵴巅巩巯币帅师帏帐帘帜带帧帮帱帻帼幂幞干并广庄庆庐庑库应庙庞废庼廪开异弃张弥弪弯弹强归当录彟彦彻径徕御忆忏忧忾怀态怂怃怄怅怆怜总怼怿恋恳恶恸恹恺恻恼恽悦悫悬悭悯惊惧惨惩惫惬惭惮惯愍愠愤愦愿慑慭憷懑懒懔戆戋戏戗战戬户扎扑扦执扩扪扫扬扰抚抛抟抠抡抢护报担拟拢拣拥拦拧拨择挂挚挛挜挝挞挟挠挡挢挣挤挥挦捞损捡换捣据捻掳掴掷掸掺掼揸揽揿搀搁搂搅携摄摅摆摇摈摊撄撑撵撷撸撺擞攒敌敛数斋斓斗斩断无旧时旷旸昙昼昽显晋晒晓晔晕晖暂暧札术朴机杀杂权条来杨杩杰极构枞枢枣枥枧枨枪枫枭柜柠柽栀栅标栈栉栊栋栌栎栏树栖样栾桊桠桡桢档桤桥桦桧桨桩梦梼梾检棂椁椟椠椤椭楼榄榇榈榉槚槛槟槠横樯樱橥橱橹橼檐檩欢欤欧歼殁殇残殒殓殚殡殴毁毂毕毙毡毵氇气氢氩氲汇汉污汤汹沓沟没沣沤沥沦沧沨沩沪沵泞泪泶泷泸泺泻泼泽泾洁洒洼浃浅浆浇浈浉浊测浍济浏浐浑浒浓浔浕涂涌涛涝涞涟涠涡涢涣涤润涧涨涩淀渊渌渍渎渐渑渔渖渗温游湾湿溃溅溆溇滗滚滞滟滠满滢滤滥滦滨滩滪漤潆潇潋潍潜潴澜濑濒灏灭灯灵灾灿炀炉炖炜炝点炼炽烁烂烃烛烟烦烧烨烩烫烬热焕焖焘煅煳熘爱爷牍牦牵牺犊犟状犷犸犹狈狍狝狞独狭狮狯狰狱狲猃猎猕猡猪猫猬献獭玑玙玚玛玮环现玱玺珉珏珐珑珰珲琎琏琐琼瑶瑷璇璎瓒瓮瓯电画畅畲畴疖疗疟疠疡疬疮疯疱疴痈痉痒痖痨痪痫痴瘅瘆瘗瘘瘪瘫瘾瘿癞癣癫癯皑皱皲盏盐监盖盗盘眍眦眬着睁睐睑瞒瞩矫矶矾矿砀码砖砗砚砜砺砻砾础硁硅硕硖硗硙硚确硷碍碛碜碱碹磙礼祎祢祯祷祸禀禄禅离秃秆种积称秽秾稆税稣稳穑穷窃窍窑窜窝窥窦窭竖竞笃笋笔笕笺笼笾筑筚筛筜筝筹签简箓箦箧箨箩箪箫篑篓篮篱簖籁籴类籼粜粝粤粪粮糁糇紧絷纟纠纡红纣纤纥约级纨纩纪纫纬纭纮纯纰纱纲纳纴纵纶纷纸纹纺纻纼纽纾线绀绁绂练组绅细织终绉绊绋绌绍绎经绐绑绒结绔绕绖绗绘给绚绛络绝绞统绠绡绢绣绤绥绦继绨绩绪绫绬续绮绯绰绱绲绳维绵绶绷绸绹绺绻综绽绾绿缀缁缂缃缄缅缆缇缈缉缊缋缌缍缎缏缐缑缒缓缔缕编缗缘缙缚缛缜缝缞缟缠缡缢缣缤缥缦缧缨缩缪缫缬缭缮缯缰缱缲缳缴缵罂网罗罚罢罴羁羟羡翘翙翚耢耧耸耻聂聋职聍联聩聪肃肠肤肷肾肿胀胁胆胜胧胨胪胫胶脉脍脏脐脑脓脔脚脱脶脸腊腌腘腭腻腼腽腾膑臜舆舣舰舱舻艰艳艹艺节芈芗芜芦苁苇苈苋苌苍苎苏苘苹茎茏茑茔茕茧荆荐荙荚荛荜荞荟荠荡荣荤荥荦荧荨荩荪荫荬荭荮药莅莜莱莲莳莴莶获莸莹莺莼萚萝萤营萦萧萨葱蒇蒉蒋蒌蓝蓟蓠蓣蓥蓦蔷蔹蔺蔼蕲蕴薮藁藓虏虑虚虫虬虮虽虾虿蚀蚁蚂蚕蚝蚬蛊蛎蛏蛮蛰蛱蛲蛳蛴蜕蜗蜡蝇蝈蝉蝎蝼蝾螀螨蟏衅衔补衬衮袄袅袆袜袭袯装裆裈裢裣裤裥褛褴襁襕见观觃规觅视觇览觉觊觋觌觍觎觏觐觑觞触觯詟誉誊讠计订讣认讥讦讧讨让讪讫训议讯记讱讲讳讴讵讶讷许讹论讻讼讽设访诀证诂诃评诅识诇诈诉诊诋诌词诎诏诐译诒诓诔试诖诗诘诙诚诛诜话诞诟诠诡询诣诤该详诧诨诩诪诫诬语诮误诰诱诲诳说诵诶请诸诹诺读诼诽课诿谀谁谂调谄谅谆谇谈谊谋谌谍谎谏谐谑谒谓谔谕谖谗谘谙谚谛谜谝谞谟谠谡谢谣谤谥谦谧谨谩谪谫谬谭谮谯谰谱谲谳谴谵谶谷豮贝贞负贠贡财责贤败账货质贩贪贫贬购贮贯贰贱贲贳贴贵贶贷贸费贺贻贼贽贾贿赀赁赂赃资赅赆赇赈赉赊赋赌赍赎赏赐赑赒赓赔赕赖赗赘赙赚赛赜赝赞赟赠赡赢赣赪赵赶趋趱趸跃跄跖跞践跶跷跸跹跻踊踌踪踬踯蹑蹒蹰蹿躏躜躯车轧轨轩轪轫转轭轮软轰轱轲轳轴轵轶轷轸轹轺轻轼载轾轿辀辁辂较辄辅辆辇辈辉辊辋辌辍辎辏辐辑辒输辔辕辖辗辘辙辚辞辩辫边辽达迁过迈运还这进远违连迟迩迳迹适选逊递逦逻遗遥邓邝邬邮邹邺邻郁郄郏郐郑郓郦郧郸酝酦酱酽酾酿释里鉅鉴銮錾钆钇针钉钊钋钌钍钎钏钐钑钒钓钔钕钖钗钘钙钚钛钝钞钟钠钡钢钣钤钥钦钧钨钩钪钫钬钭钮钯钰钱钲钳钴钵钶钷钸钹钺钻钼钽钾钿铀铁铂铃铄铅铆铈铉铊铋铍铎铏铐铑铒铕铗铘铙铚铛铜铝铞铟铠铡铢铣铤铥铦铧铨铪铫铬铭铮铯铰铱铲铳铴铵银铷铸铹铺铻铼铽链铿销锁锂锃锄锅锆锇锈锉锊锋锌锍锎锏锐锑锒锓锔锕锖锗错锚锜锞锟锠锡锢锣锤锥锦锨锩锫锬锭键锯锰锱锲锳锴锵锶锷锸锹锺锻锼锽锾锿镀镁镂镃镆镇镈镉镊镌镍镎镏镐镑镒镕镖镗镙镚镛镜镝镞镟镠镡镢镣镤镥镦镧镨镩镪镫镬镭镮镯镰镱镲镳镴镶长门闩闪闫闬闭问闯闰闱闲闳间闵闶闷闸闹闺闻闼闽闾闿阀阁阂阃阄阅阆阇阈阉阊阋阌阍阎阏阐阑阒阓阔阕阖阗阘阙阚阛队阳阴阵阶际陆陇陈陉陕陧陨险随隐隶隽难雏雠雳雾霁霉霭靓静靥鞑鞒鞯鞴韦韧韨韩韪韫韬韵页顶顷顸项顺须顼顽顾顿颀颁颂颃预颅领颇颈颉颊颋颌颍颎颏颐频颒颓颔颕颖颗题颙颚颛颜额颞颟颠颡颢颣颤颥颦颧风飏飐飑飒飓飔飕飖飗飘飙飚飞飨餍饤饥饦饧饨饩饪饫饬饭饮饯饰饱饲饳饴饵饶饷饸饹饺饻饼饽饾饿馀馁馂馃馄馅馆馇馈馉馊馋馌馍馎馏馐馑馒馓馔馕马驭驮驯驰驱驲驳驴驵驶驷驸驹驺驻驼驽驾驿骀骁骂骃骄骅骆骇骈骉骊骋验骍骎骏骐骑骒骓骔骕骖骗骘骙骚骛骜骝骞骟骠骡骢骣骤骥骦骧髅髋髌鬓魇魉鱼鱽鱾鱿鲀鲁鲂鲄鲅鲆鲇鲈鲉鲊鲋鲌鲍鲎鲏鲐鲑鲒鲓鲔鲕鲖鲗鲘鲙鲚鲛鲜鲝鲞鲟鲠鲡鲢鲣鲤鲥鲦鲧鲨鲩鲪鲫鲬鲭鲮鲯鲰鲱鲲鲳鲴鲵鲶鲷鲸鲹鲺鲻鲼鲽鲾鲿鳀鳁鳂鳃鳄鳅鳆鳇鳈鳉鳊鳋鳌鳍鳎鳏鳐鳑鳒鳓鳔鳕鳖鳗鳘鳙鳛鳜鳝鳞鳟鳠鳡鳢鳣鸟鸠鸡鸢鸣鸤鸥鸦鸧鸨鸩鸪鸫鸬鸭鸮鸯鸰鸱鸲鸳鸴鸵鸶鸷鸸鸹鸺鸻鸼鸽鸾鸿鹀鹁鹂鹃鹄鹅鹆鹇鹈鹉鹊鹋鹌鹍鹎鹏鹐鹑鹒鹓鹔鹕鹖鹗鹘鹚鹛鹜鹝鹞鹟鹠鹡鹢鹣鹤鹥鹦鹧鹨鹩鹪鹫鹬鹭鹯鹰鹱鹲鹳鹴鹾麦麸黄黉黡黩黪黾鼋鼌鼍鼗鼹齄齐齑齿龀龁龂龃龄龅龆龇龈龉龊龋龌龙龚龛龟志制咨只里系范松没尝尝闹面准钟别闲乾尽脏拼冲里",T:"萬與醜專業叢東絲丟兩嚴喪個丬豐臨爲麗舉麼義烏樂喬習鄉書買亂爭於虧雲亙亞產畝親褻嚲億僅從侖倉儀們價衆優夥會傴傘偉傳傷倀倫傖僞佇體餘傭僉俠侶僥偵側僑儈儕儂俁儔儼倆儷儉債傾傯僂僨償儻儐儲儺兒兌兗黨蘭關興茲養獸囅內岡冊寫軍農冢馮沖決況凍淨淒涼凌減湊凜幾鳳鳧憑凱擊凼鑿芻劃劉則剛創刪別剗剄劊劌剴劑剮劍剝劇勸辦務勱動勵勁勞勢勳勐勩勻匭匱區醫華協單賣盧滷臥衛卻巹廠廳歷厲壓厭厙廁廂厴廈廚廄廝縣參靉靆雙發變敘疊葉號嘆嘰籲後嚇呂嗎唚噸聽啓吳嘸囈嘔嚦唄員咼嗆嗚詠咔嚨嚀噝吒咴鹹哌響啞噠嘵嗶噦譁噲嚌噥喲嘜嗊嘮啢嗩唣喚唿嘖嗇囀齧囉嘽嘯噴嘍嚳囁呵噯噓嚶囑嚕噼囂嚯團園囪圍圇國圖圓聖壙場阪壞塊堅壇壢壩塢墳墜壟壠壚壘墾垧堊墊埡墶壋塏堖塒壎堝埝垵塹墮壪牆壯聲殼壺壼處備復夠頭誇夾奪奩奐奮獎奧妝婦媽嫵嫗嬀姍姜婁婭嬈嬌孌娛媧嫺嫿嬰嬋嬸媼嬡嬪嬙嬤孫學孿寧寶實寵審憲宮寬賓寢對尋導壽將爾塵堯尷屍盡層屓屜屆屬屢屨嶼歲豈嶇崗峴嶴嵐島嶺嶽崬巋嶨嶧峽嶢嶠崢巒嶗崍嶮嶄嶸嶔嵛嶁嵴巔鞏巰幣帥師幃帳簾幟帶幀幫幬幘幗冪襆幹並廣莊慶廬廡庫應廟龐廢廎廩開異棄張彌弳彎彈強歸當錄彠彥徹徑徠御憶懺憂愾懷態慫憮慪悵愴憐總懟懌戀懇惡慟懨愷惻惱惲悅愨懸慳憫驚懼慘懲憊愜慚憚慣愍慍憤憒願懾憖憷懣懶懍戇戔戲戧戰戩戶扎撲扦執擴捫掃揚擾撫拋摶摳掄搶護報擔擬攏揀擁攔擰撥擇掛摯攣掗撾撻挾撓擋撟掙擠揮撏撈損撿換搗據捻擄摑擲撣摻摜揸攬撳攙擱摟攪攜攝攄擺搖擯攤攖撐攆擷擼攛擻攢敵斂數齋斕鬥斬斷無舊時曠暘曇晝曨顯晉曬曉曄暈暉暫曖札術樸機殺雜權條來楊榪傑極構樅樞棗櫪梘棖槍楓梟櫃檸檉梔柵標棧櫛櫳棟櫨櫟欄樹棲樣欒桊椏橈楨檔榿橋樺檜槳樁夢檮棶檢櫺槨櫝槧欏橢樓欖櫬櫚櫸檟檻檳櫧橫檣櫻櫫櫥櫓櫞檐檁歡歟歐殲歿殤殘殞殮殫殯毆毀轂畢斃氈毿氌氣氫氬氳匯漢污湯洶沓溝沒灃漚瀝淪滄渢潙滬沵濘淚澩瀧瀘濼瀉潑澤涇潔灑窪浹淺漿澆湞溮濁測澮濟瀏滻渾滸濃潯濜塗涌濤澇淶漣潿渦溳渙滌潤澗漲澀澱淵淥漬瀆漸澠漁瀋滲溫遊灣溼潰濺漵漊潷滾滯灩灄滿瀅濾濫灤濱灘澦漤瀠瀟瀲濰潛瀦瀾瀨瀕灝滅燈靈災燦煬爐燉煒熗點煉熾爍爛烴燭煙煩燒燁燴燙燼熱煥燜燾煅煳熘愛爺牘犛牽犧犢犟狀獷獁猶狽狍獮獰獨狹獅獪猙獄猻獫獵獼玀豬貓蝟獻獺璣璵瑒瑪瑋環現瑲璽珉珏琺瓏璫琿璡璉瑣瓊瑤璦璇瓔瓚甕甌電畫暢畲疇癤療瘧癘瘍癧瘡瘋皰痾癰痙癢瘂癆瘓癇癡癉瘮瘞瘻癟癱癮癭癩癬癲癯皚皺皸盞鹽監蓋盜盤瞘眥矓着睜睞瞼瞞矚矯磯礬礦碭碼磚硨硯碸礪礱礫礎硜硅碩硤磽磑礄確礆礙磧磣鹼碹磙禮禕禰禎禱禍稟祿禪離禿稈種積稱穢穠穭稅穌穩穡窮竊竅窯竄窩窺竇窶豎競篤筍筆筧箋籠籩築篳篩簹箏籌籤簡籙簀篋籜籮簞簫簣簍籃籬籪籟糴類秈糶糲粵糞糧糝餱緊縶糹糾紆紅紂纖紇約級紈纊紀紉緯紜紘純紕紗綱納紝縱綸紛紙紋紡紵紖紐紓線紺紲紱練組紳細織終縐絆紼絀紹繹經紿綁絨結絝繞絰絎繪給絢絳絡絕絞統綆綃絹繡綌綏絛繼綈績緒綾緓續綺緋綽鞝緄繩維綿綬繃綢綯綹綣綜綻綰綠綴緇緙緗緘緬纜緹緲緝縕繢緦綞緞緶線緱縋緩締縷編緡緣縉縛縟縝縫縗縞纏縭縊縑繽縹縵縲纓縮繆繅纈繚繕繒繮繾繰繯繳纘罌網羅罰罷羆羈羥羨翹翽翬耮耬聳恥聶聾職聹聯聵聰肅腸膚肷腎腫脹脅膽勝朧腖臚脛膠脈膾髒臍腦膿臠腳脫腡臉臘醃膕齶膩靦膃騰臏臢輿艤艦艙艫艱豔艹藝節羋薌蕪蘆蓯葦藶莧萇蒼苧蘇檾蘋莖蘢蔦塋煢繭荊薦薘莢蕘蓽蕎薈薺蕩榮葷滎犖熒蕁藎蓀蔭蕒葒葤藥蒞莜萊蓮蒔萵薟獲蕕瑩鶯蓴蘀蘿螢營縈蕭薩蔥蕆蕢蔣蔞藍薊蘺蕷鎣驀薔蘞藺藹蘄蘊藪藁蘚虜慮虛蟲虯蟣雖蝦蠆蝕蟻螞蠶蠔蜆蠱蠣蟶蠻蟄蛺蟯螄蠐蛻蝸蠟蠅蟈蟬蠍螻蠑螿蟎蠨釁銜補襯袞襖嫋褘襪襲襏裝襠褌褳襝褲襉褸襤襁襴見觀覎規覓視覘覽覺覬覡覿覥覦覯覲覷觴觸觶讋譽謄訁計訂訃認譏訐訌討讓訕訖訓議訊記訒講諱謳詎訝訥許訛論訩訟諷設訪訣證詁訶評詛識詗詐訴診詆謅詞詘詔詖譯詒誆誄試詿詩詰詼誠誅詵話誕詬詮詭詢詣諍該詳詫諢詡譸誡誣語誚誤誥誘誨誑說誦誒請諸諏諾讀諑誹課諉諛誰諗調諂諒諄誶談誼謀諶諜謊諫諧謔謁謂諤諭諼讒諮諳諺諦謎諞諝謨讜謖謝謠謗諡謙謐謹謾謫譾謬譚譖譙讕譜譎讞譴譫讖谷豶貝貞負貟貢財責賢敗賬貨質販貪貧貶購貯貫貳賤賁貰貼貴貺貸貿費賀貽賊贄賈賄貲賃賂贓資賅贐賕賑賚賒賦賭齎贖賞賜贔賙賡賠賧賴賵贅賻賺賽賾贗贊贇贈贍贏贛赬趙趕趨趲躉躍蹌跖躒踐躂蹺蹕躚躋踊躊蹤躓躑躡蹣躕躥躪躦軀車軋軌軒軑軔轉軛輪軟轟軲軻轤軸軹軼軤軫轢軺輕軾載輊轎輈輇輅較輒輔輛輦輩輝輥輞輬輟輜輳輻輯轀輸轡轅轄輾轆轍轔辭辯辮邊遼達遷過邁運還這進遠違連遲邇逕跡適選遜遞邐邏遺遙鄧鄺鄔郵鄒鄴鄰鬱郄郟鄶鄭鄆酈鄖鄲醞醱醬釅釃釀釋裏鉅鑑鑾鏨釓釔針釘釗釙釕釷釺釧釤鈒釩釣鍆釹鍚釵鈃鈣鈈鈦鈍鈔鍾鈉鋇鋼鈑鈐鑰欽鈞鎢鉤鈧鈁鈥鈄鈕鈀鈺錢鉦鉗鈷鉢鈳鉕鈽鈸鉞鑽鉬鉭鉀鈿鈾鐵鉑鈴鑠鉛鉚鈰鉉鉈鉍鈹鐸鉶銬銠鉺銪鋏鋣鐃銍鐺銅鋁銱銦鎧鍘銖銑鋌銩銛鏵銓鉿銚鉻銘錚銫鉸銥鏟銃鐋銨銀銣鑄鐒鋪鋙錸鋱鏈鏗銷鎖鋰鋥鋤鍋鋯鋨鏽銼鋝鋒鋅鋶鐦鐗銳銻鋃鋟鋦錒錆鍺錯錨錡錁錕錩錫錮鑼錘錐錦杴錈錇錟錠鍵鋸錳錙鍥鍈鍇鏘鍶鍔鍤鍬鍾鍛鎪鍠鍰鎄鍍鎂鏤鎡鏌鎮鎛鎘鑷鐫鎳鎿鎦鎬鎊鎰鎔鏢鏜鏍鏰鏞鏡鏑鏃鏇鏐鐔钁鐐鏷鑥鐓鑭鐠鑹鏹鐙鑊鐳鐶鐲鐮鐿鑔鑣鑞鑲長門閂閃閆閈閉問闖閏闈閒閎間閔閌悶閘鬧閨聞闥閩閭闓閥閣閡閫鬮閱閬闍閾閹閶鬩閿閽閻閼闡闌闃闠闊闋闔闐闒闕闞闤隊陽陰陣階際陸隴陳陘陝隉隕險隨隱隸雋難雛讎靂霧霽黴靄靚靜靨韃鞽韉鞴韋韌韍韓韙韞韜韻頁頂頃頇項順須頊頑顧頓頎頒頌頏預顱領頗頸頡頰頲頜潁熲頦頤頻頮頹頷頴穎顆題顒顎顓顏額顳顢顛顙顥纇顫顬顰顴風颺颭颮颯颶颸颼颻飀飄飆飈飛饗饜飣飢飥餳飩餼飪飫飭飯飲餞飾飽飼飿飴餌饒餉餄餎餃餏餅餑餖餓餘餒餕餜餛餡館餷饋餶餿饞饁饃餺餾饈饉饅饊饌饢馬馭馱馴馳驅馹駁驢駔駛駟駙駒騶駐駝駑駕驛駘驍罵駰驕驊駱駭駢驫驪騁驗騂駸駿騏騎騍騅騌驌驂騙騭騤騷騖驁騮騫騸驃騾驄驏驟驥驦驤髏髖髕鬢魘魎魚魛魢魷魨魯魴魺鮁鮃鮎鱸鮋鮓鮒鮊鮑鱟鮍鮐鮭鮚鮳鮪鮞鮦鰂鮜鱠鱭鮫鮮鮺鯗鱘鯁鱺鰱鰹鯉鰣鰷鯀鯊鯇鮶鯽鯒鯖鯪鯕鯫鯡鯤鯧鯝鯢鮎鯛鯨鰺鯴鯔鱝鰈鰏鱨鯷鰮鰃鰓鱷鰍鰒鰉鰁鱂鯿鰠鰲鰭鰨鰥鰩鰟鰜鰳鰾鱈鱉鰻鰵鱅鰼鱖鱔鱗鱒鱯鱤鱧鱣鳥鳩雞鳶鳴鳲鷗鴉鶬鴇鴆鴣鶇鸕鴨鴞鴦鴒鴟鴝鴛鷽鴕鷥鷙鴯鴰鵂鴴鵃鴿鸞鴻鵐鵓鸝鵑鵠鵝鵒鷳鵜鵡鵲鶓鵪鵾鵯鵬鵮鶉鶊鵷鷫鶘鶡鶚鶻鶿鶥鶩鷊鷂鶲鶹鶺鷁鶼鶴鷖鸚鷓鷚鷯鷦鷲鷸鷺鸇鷹鸌鸏鸛鸘鹺麥麩黃黌黶黷黲黽黿鼂鼉鞀鼴齇齊齏齒齔齕齗齟齡齙齠齜齦齬齪齲齷龍龔龕龜志制諮只裏系範鬆沒嚐嚐鬧面準鍾別閒乾盡髒拼衝裡"},Te=Je.S,Me=Je.T,me=(e,t)=>{let u,i,r,a,n="",l;for(t?(u=Te,i=Me):(u=Me,i=Te),r=0;r<e.length;r++){a=e.charAt(r);const p=e.charCodeAt(r);if(!(p>13312&&p<40899||p>63744&&p<64106)){n+=a;continue}l=u.indexOf(a),l!==-1?n+=i.charAt(l):n+=a;}return n},$t={s2t:(e,t)=>{if(t){for(let u=0;u<t.length;u++)e.includes(t[u].src)&&(e=e.replaceAll(t[u].src,t[u].des));return me(e,!0)}else return me(e,!0)},t2s:(e,t)=>{if(t){for(let u=0;u<t.length;u++)e.includes(t[u].src)&&(e=e.replaceAll(t[u].src,t[u].des));return me(e,!1)}else return me(e,!1)}},Qe={src:"臟妳為傢蔔餵眾係姊託迴蹟儘封啟",des:"脏你为家卜喂众系姐托回迹尽对启",more_src:["乾脆","随著","相信著","奇蹟","拚命","採取","製造"],more_des:["干脆","随着","相信着","奇迹","拼命","采取","制造"],_custom_str:[],generteCustomStr(){for(let e=0;e<this.src.length;e++)this._custom_str.push({src:this.src[e],des:this.des[e]});for(let e=0;e<this.more_src.length;e++)this._custom_str.push({src:this.more_src[e],des:this.more_des[e]});},getCustomStr(){return this._custom_str}},re={reset(){this.unbind();},bind(){U.art.on("video:timeupdate",this.event.bind(this));},unbind(){U.clearSubTitle(),U.art.off("video:timeupdate",this.event);},event(){var r;let e=U.art.currentTime,t=(r=O.allSubTitleInfo[O.currentSelectIndex])==null?void 0:r.data;if(!t)return;let u=t.find(a=>a.to>=e&&a.from<=e),i=Array.from(U.$el.$subtitle.querySelectorAll(".art-subtitle-line"));for(let a=0;a<i.length;a++){const n=i[a],{from:l,to:p}=Reflect.get(n,"data-subtitle-line-info");if(p<=e||l>=e)n.remove();else if(u&&u.from===l&&u.to===p)return}if(u){let a=document.createElement("div");a.className="art-subtitle-line",Reflect.set(a,"data-subtitle-line-info",u),a.setAttribute("data-group","0"),a.innerHTML=u.content,U.$el.$subtitle.appendChild(a);}}},se={config:{NAME:"setting-bilibili-cc-subtitle"},reset(){U.art.setting.option.find(t=>t.name===this.config.NAME)&&U.art.setting.remove(this.config.NAME);},getDefaultSettingOption:()=>({name:se.config.NAME,width:200,html:"字幕",tooltip:se.getDefaultSelector().html,icon:'<img width="22" heigth="22" src="https://artplayer.org/assets/img/subtitle.svg">',selector:[],onSelect:function(e){return typeof e.callback=="function"&&e.callback(),e.html}}),getDefaultSelector:()=>({default:!0,html:"无",callback(){re.unbind();}})},O={allSubTitleInfo:[],currentSelectIndex:-1,reset(){this.allSubTitleInfo=[],this.currentSelectIndex=-1;}},U={art:null,$el:{$subtitle:null},async update(e){var n;O.reset(),se.reset(),re.reset();const t=se.getDefaultSettingOption(),u=se.getDefaultSelector();(n=t.selector)==null||n.push(u),this.art.setting.add(t),this.$el.$subtitle=this.art.template.$subtitle;const i=await P.get(`https://${pe.web_host}/x/player/v2?cid=${e.cid}&aid=${e.aid}&ep_id=${e.ep_id}`,{fetch:!0,allowInterceptConfig:!1,responseType:"json",headers:{Host:"www.bilibili.com",Referer:"https://www.bilibili.com"}});if(!i.status){console.error("[artplayer-plugin-bilibiliCCSubTitle]：获取视频信息失败",i);return}console.log("[artplayer-plugin-bilibiliCCSubTitle]：视频字幕信息",i);const r=s.toJSON(i.data.responseText);if(!I.isWebApiSuccess(r)){console.error("[artplayer-plugin-bilibiliCCSubTitle]：获取视频信息失败",r);return}let a=r.data.subtitle.subtitles;if(!a.length){console.warn("[artplayer-plugin-bilibiliCCSubTitle]：获取字幕链接列表为空",r);return}for(let l=0;l<a.length;l++){const p=a[l],d=await P.get(p.subtitle_url,{responseType:"json",allowInterceptConfig:!1,fetch:!1,headers:{"User-Agent":s.getRandomPCUA()}});if(d.status){const f=s.toJSON(d.data.responseText).body;let A=O.allSubTitleInfo.length;O.allSubTitleInfo.push({name:p.lan_doc,data:f,lan:p.lan}),t.selector.push({html:p.lan_doc,callback(){O.currentSelectIndex=A,re.unbind(),re.bind();}});}}c.execMenu("bili-bangumi-generateSimpleChineseSubtitle",()=>{let l=O.allSubTitleInfo.find(f=>f.lan==="zh-Hant"||f.name.includes("繁体"));if(!l)return;let p=[];l.data.forEach(f=>{const{content:A,...v}=f,w=$t.t2s(A,Qe.getCustomStr());p.push({content:w,...v});});let d="简体（自动生成）";O.allSubTitleInfo.push({name:d,lan:"zh-CN",data:p});let C=O.allSubTitleInfo.length-1;t.selector.push({html:d,callback(){O.currentSelectIndex=C,re.unbind(),re.bind();}});}),console.log("[artplayer-plugin-bilibiliCCSubTitle]：加载视频CC字幕信息",O.allSubTitleInfo),this.art.setting.update(t);},clearSubTitle(){this.$el.$subtitle&&(this.$el.$subtitle.innerHTML="");},updateArtPlayer(e){this.art=e;}};function Tt(e){return async t=>(Qe.generteCustomStr(),U.updateArtPlayer(t),U.update(e),{name:"plugin-bilibili-cc-subtitle",update(u){U.update(u);}})}const z={show(e){e.style.display="";},hide(e){e.style.display="none";}},Mt={events:{control:e=>{e&&E.updateOnlineTotal(E.option);}},bind(){Object.keys(this.events).forEach(e=>{E.art.on(e,this.events[e]);});},unbind(){Object.keys(this.events).forEach(e=>{E.art.off(e,this.events[e]);});}},E={art:null,$el:{$topWrap:null,$topTitle:null,$topTitleText:null,$topTitleFollow:null,$topTitleFollowText:null,$topRight:null,$topRightFollow:null},option:{},init(e){this.option=null,this.option=e,this.art.layers.add({name:"top-wrap",html:`
            <div class="art-player-top-wrap">
                <div class="art-player-top-title">
                    <!-- 番剧名，第xx集 -->
                    <div class="art-player-top-title-text"></div></div>
                <div class="art-player-top-follow">
                    <svg class="art-player-top-follow-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13306"><path d="M641.522424 590.30953c-29.470195-20.878516-61.574381-37.341466-95.630011-49.183166C617.699855 497.470075 661.783887 419.876859 661.783887 335.542102c0-132.611274-108.021226-240.529145-240.581334-240.529145-132.62867 0-240.545518 107.916848-240.545518 240.529145 0 45.162596 12.561084 89.143273 36.623106 127.426181 20.159132 32.190143 47.677882 59.195194 80.124875 78.789461-34.56933 11.740392-67.220984 28.493961-97.135294 49.663096-32.652677 23.136953-61.334927 51.117215-85.361133 83.051531-49.937342 66.587558-76.393901 145.737222-76.393901 228.959645 0 15.624862 12.561084 28.237111 28.066219 28.237111 15.607466 0 28.27088-12.612249 28.27088-28.237111 0-86.747713 33.850969-168.516018 95.252411-230.277664 61.266365-61.488423 142.486178-95.40693 228.532927-95.491865 2.806929 0.274246 5.749958 0 8.556886-0.685615l2.326998-0.445138c83.650165 1.678222 162.338319 35.528168 222.268246 95.544053 61.403488 61.675688 95.185896 143.478785 95.185896 230.311433 0 15.45397 12.629645 28.134781 28.16855 28.134781 15.538905 0 28.133757-12.681834 28.133757-28.134781 0-83.307358-26.355251-162.457022-76.393901-228.925876C702.958658 641.376603 674.174078 613.412714 641.522424 590.30953zM421.203576 519.768941c-101.550861 0-184.242188-82.588997-184.242188-184.225815 0-101.550861 82.692351-184.173626 184.242188-184.173626 101.483322 0 184.17465 82.622766 184.17465 184.173626C605.378226 437.178921 522.686898 519.768941 421.203576 519.768941z" p-id="13307"></path><path d="M932.277484 638.022205c-36.074613-52.05968-84.915995-91.249237-141.595902-113.821325 24.986067-17.661242 46.070268-41.141002 61.231573-68.505233 17.627473-31.642674 27.006074-67.820642 27.006074-104.699574 0-114.745371-88.956008-208.082152-198.10594-208.082152-15.607466 0-28.167526 12.595876-28.167526 28.134781s12.56006 28.082592 28.167526 28.082592c78.175477 0 141.700279 68.197218 141.700279 151.86478 0 83.804684-63.524802 151.932318-141.700279 151.932318-15.607466 0-28.167526 12.594853-28.167526 28.134781l0 0.171915c0 15.538905 12.56006 28.184923 28.167526 28.184923 140.569526 0 254.990508 121.899304 254.990508 271.76045 0 15.539928 12.664438 28.219715 28.203342 28.219715 15.504112 0 28.203342-12.68081 28.203342-28.219715C992.209458 761.28967 971.399503 694.427866 932.277484 638.022205z" p-id="13308"></path></svg>
                    <span class="art-player-top-follow-text"></span>
                </div>
                <!-- 右侧的图标 -->
                <div class="art-player-top-right">
                    <div class="art-player-top-right-follow"></div>
                </div>
            </div>
            `,mounted:async function(t){E.$el.$topWrap=t,E.$el.$topTitle=t.querySelector(".art-player-top-title"),E.$el.$topTitleText=t.querySelector(".art-player-top-title-text"),E.$el.$topTitleFollow=t.querySelector(".art-player-top-follow"),E.$el.$topTitleFollowText=t.querySelector(".art-player-top-follow-text"),E.$el.$topRight=t.querySelector(".art-player-top-right"),E.$el.$topRightFollow=t.querySelector(".art-player-top-right-follow"),z.hide(E.$el.$topTitleFollow),E.update(e),Mt.bind();}});},update(e){E.updateWrap(e),E.updateTitle(e),E.updateOnlineTotal(e),E.updateRight(e);},updateTitle(e){console.log(`[artplayer-plugin-TopToolBar]: 更新标题 ==> ${JSON.stringify(e)}`),typeof e.title=="string"&&(E.$el.$topTitleText.innerText=e.title),e.showTitle?z.show(E.$el.$topTitle):z.hide(E.$el.$topTitle);},async updateOnlineTotal(e){console.log(`[artplayer-plugin-TopToolBar]: 更新在线观看人数 ==> ${JSON.stringify(e)}`);let t=await Be.onlineTotal({aid:e.aid,bvid:e.bvid,cid:e.cid});t&&(E.$el.$topTitleFollowText.innerText=`${t.total||t.count||0}人正在看`,e.showOnlineTotal?z.show(E.$el.$topTitleFollow):z.hide(E.$el.$topTitleFollow),console.log(`[artplayer-plugin-TopToolBar]: 更新在线观看人数，请求的数据 ==> ${JSON.stringify(t)}`));},updateWrap(e){console.log(`[artplayer-plugin-TopToolBar]: 更新总视图 ==> ${JSON.stringify(e)}`),e.showWrap?z.show(this.$el.$topWrap):z.hide(this.$el.$topWrap);},updateRight(e){console.log(`[artplayer-plugin-TopToolBar]: 更新右侧视图 ==> ${JSON.stringify(e)}`),e.showRight?z.show(this.$el.$topRight):z.hide(this.$el.$topRight),e.showRightFollow?z.show(this.$el.$topRightFollow):z.hide(this.$el.$topRightFollow);}},Pt=e=>t=>(E.art=t,E.init(e),{name:"plugin-bilibili-topToolBar",update(u){E.update(u);},updateWrap(u){s.assign(E.option,u),E.updateWrap(u);},updateTitle(u){s.assign(E.option,u),E.updateTitle(u);},updateOnlineTotal(u){s.assign(E.option,u),E.updateOnlineTotal(u);},updateRight(u){s.assign(E.option,u),E.updateRight(u);}}),Vt={loading:'<img src="data:image/gif;base64,R0lGODlhWgBaALMOAHR0dAICAnd3dwEBAXh4eAMDAwkJCQ0NDQsLCxwcHA4ODggICHl5eQAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiYWE1ODg5ZS1jN2RmLTRmZmUtYjkzOS0wMmVkMTZhNmNjZDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0I2ODI2NjA1NzhGMTFFNkEyMEVDNzhEOUY1RkQxRjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0I2ODI2NUY1NzhGMTFFNkEyMEVDNzhEOUY1RkQxRjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjljYjgzNjY2LWYxYWUtNGMyZi1hMGEwLThhODJmYjIxM2U0MyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmU1NDE3YzFmLTllODAtMTE3OS04NjdiLWUyN2Y3M2VkMTZkOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAkKAA4ALAAAAABaAFoAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsz3Ta3HW+3bjuV7wbg/H7BYXEYu7YGCaVjuDr6Hwqjy2qEzphNlTaIZfi/ZqY2zHZW0KL1RVGeRS2wiXD+ad+x8jZHXx9GX9MO2GDG3mGGG52iX5ojUFVRWWXmJmam1IknJ+goXoioqWmnHSnqquUpDxVsLGys7S1tk6Uj4dIt72+v7K5IcKQF8R7r1asPC7HHs7L0Z3Ogclr0tES1BzH2NiLSMPWUcnAsd7gTboaxLnm77e527vq2uMm8FXy98/j8z77woFoxw9Fp2pI/mUgKBDMQXrp3iATqNBeD3rMIBaqN9BfwWsZ/7kBmpTwo0aLHIF4kchupIWAKftRLHgpDYeND7skq2jMY0NyjlgqwnlRZ8mfCDlCqyO0A1E7MJueBBrTnc0RG1lGXbfQZ0w8sFLEAhmRK0khKJtWConv6lZXaKlKNWpmyk6TJxVqoWvw7iu49fQyLOrJWitx4QTzQhnX4sTAeLsmjuyO8cWcLScjFan5K9kkl9KapSuG50vDlFtlkjtaNGvEkDeDXIlprsrOts+WjkzVUZmrkmN7zsu7dzkiK3OTRl78NO7WQenK7vkc9u7pt9UJrZz0+vDMwpVPGGuBPOfwrbO/8SbNu3j1oNkvc5/+s3T5oraYhn8f/6e1zfFHQZY+BPbiWkdIFajgLMs9ZgoX+1nmn0upYOfchPK95iCG+L034HHpAAAAh6V4OOAsQYh4hAAC3EJAMO3VV55WmLBYiwAv+pKiirzoE+CGDbAoZFu4eCGiiOdYCBgPQrK4wiVHXlDJk0w4mUUZAGgAXApNDtmMkVn+0KWVLhxppojFsHBmlGm26eabcMYp55x01mnnnXjSEAEAIfkECQoADgAsAAAAAFoAWgAABP/QyUmrvTjrzbv/YCiOZGmeaKqubOu+cCxbTT3fX23jfKbXDEZvSPk1gkSiMShM8pZMZ1HngjalEiPLip1qUdZr12Hcmbhj73eETlMY5QbpxxS7JfCyqH2v5NccfH1+cR6CgxVxchqHiIR6GGGOG38/kXRIkxyVR2SKn6CFbKGkpaangDmoq6ytdh2tsbKhmaqzpHW5uru8lbWGOr3Cw8TFvJghmMbLUVvBrxvImmq/sM+Jt9mWE9K2R2La4VRZ1yDdnuLaTefWQFfp4kjsgeXo38z4xMjz0fXK+QB37asHzB03gkqu8WPkD+GQgQbNNYxIY1zBRf0MLvQx8duFVBn/zXDU6DBkrXllqo3cdokkxYsnEaZUudJiRZceJVI8N5NmTZsHcfpcGXOnpBCcRJITCo2h0afuhlISFdTjxpY57RW91/QDJ3AKSzrNyi5XCl/vwr5sB6RqtToZPZhdalXs2LRrvXwEqgEuXXl2ia4Ty7Jq1qX0mO4pt7DbTDWJ6+aNnKkx48duu2oVchVrZcKXqW6+yzmw58GTR4eie/im5NZsP6emhUsqRNiUUeO2F4cJqGanRycLvfs3kqSmb0sNLnxvzyvIlyvXzPyqMD9oqU9fHLEzLwy7TJZOTfovdRF+y3d2ThZeNsDkBRt272r87vLz6Z+Kst71L/2x8GcapHsqBWTgMOZxB9uBDIbXnDcAAricaxFKeB42FUY4IYbpHJCAAgYYsEABoQRgYgA6nIiicaNw9VUQ/zCoIhMz6tKfBcco84MAAjTIQI0/npjjfZtspQiPKdTogJI4AgcGKDwKoIKQKprok5MpCFBGlEgmWSWTPPBoBJctBCkklmFyKaULZgYwVxJqwnDmhtN4hWadJtyJ55589unnn4AGKuigG0QAACH5BAkKAA4ALAAAAABaAFoAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsW009319t43ym1wxGb0j5NYJEojEoTPKWTOfzF5VOfi1o0yoxNlTaLdf7PXmr3CvZpE1bGORyKOx+x+Udev0CX3vaexhBcRyAgRmDXhp6U3ghfVQ+VEhDd5aXmJmajjmbnp+gOiShpKWWlCCmqqtHYn86TLGys7S1tre3kyKTuL2+v7mwrnnChxi6c8VqrFnKqc4OrNJ4yM9AYtPSy627xaLZzNHQr9fiNsC22ULVneWR6PC/k+zk3PQk8bHz48Tu/ErC7hXy9q9SwIKLCJZbgaVeooXW7CHsImpgww37ILaTqLGIIotG/zAe7NiPI7cKd1BJ8nMh48mISNidUomIUMuRLzfGdJYyloeHsG5eEyjSH8Qzsx5Byklx6MRjCl/y8olPFg2cNEvu7Jg0BVWPTkmC3MrUZ8VlYLAOG7sO4cWmnEa4zMrWHFOwJ5egmLu2qEm6dvMS1bkUcEKjd+FWOYNyh9bCfQ//7csr8Fm7hAevnAx14Z1thvECDd2Zs1DBmkgrhtwNMWBFS2ZGFs06mevIsnvOBl0bZluxcJEKWfqUt+bSZEP3nDBa9erjp5PvBtrKFS2HvQnbVW2LDxq20K+6BqeqeWuT5Mtnxx48/SdZ4RtDJO4+tb7i4nPm2/+L9/ms/AVYi3Z/tiVmTHx41Vefc/IpuOBupzmYHoMJZoPAAQ5SWEEtwkCGDgHBXOMhEwhuSEuHU+FCAIi48JIiJN/ttVxaQBjCXIxmKPKVjHHgiGOOYUAYERQGlbhRZUNc98KLSXT1woDGtLBjlFRWaeWVWGap5ZZcdumlChEAACH5BAkKAA4ALAAAAABaAFoAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsW009319t43ym1wxGbzj5AYXEoTGITOKWTOfzx2xKHb8W1Ho1NlTba8X7PW25YnJ55I2KLQw1mxp8Y+LyHL1uv6vXGmd9GkF5gXuDHIVkPoiJHYtGF4JEf5aXmJmZJZqdnp+GIaCjpJloHKWpqlCiOlWvsLGys7S1THStR7a7vL2xuCDAj5Oup4dHwxjCHsvJRcW5DXxYqzouzajQ1NXc1hLYG8Dd4zvgx9JI5ONC5o3I2+i+sOSR6NF8e/L6tXTtytr+POyr0k+bnncBbxR8d9AevGkpsjArlnAMQIPEdmTzthFdRQri/zA+k9SBUTiKIjviE/kHojuS/458HOlwCc02Ll9KzOgx5UmGVL6pefUBjxee9XL+dPiQ3Rk3RY3upJnU2MtpuPJBFSEViEWZPs9hNQhLhVSIC5lOBErWDccSZal2tRqTqbmpQgFB2prV1b0mdzHCBKlRrFOGJQ0GRjw4r966dWY2lQvZCivKhic3HIuYMGObjtUiPSx6KWevoz3vdHSVtNLWqo0JGwovnmnXdGkI9smo09bKmteqBafqd2rJyxYP7Vost+PIYYFjvsBcF5kqiZEh3925wq3mSGQJh949881UEmJtxh2Mu7pU5EubD/1+VPzX0unX10R0e2fw+nDTX5l0qXk30IG0xOacgtThtxeCaBGoW3nO+LffhRTWheF+Dk64IYcLqjZOACQGUEABJA6g4orVdNjgPDoAIKNWENYDwA8y/pIhITA2cCNONRIUI44A2MLCj17IyIIRSCp5h4sgIBmjjAAsqYaTPTBJZZUrXInlEFt+CQYZVDoRZgwzTunMCmGWuWYLW74p55x01mnnnXjmqecNEQAAIfkEBQoADgAsAAAAAFoAWgAABP/QyUmrvTjrzbv/YCiOZGmeaKqubOu+cCzP9Nrcdb7duO5XvBuD8fsFhcSi7jhMKh3BF7P5lBxb02HVelUdG9Qtt3vKiinfRjnYdJ6h31LW/XYw0qJvuE65x0FmfBdpah1zghh+ZBmHiIl4jIGOGYo8kTx7NYSbnJ2en5t5oKOkpaEhpqmqo1ofq6+wenQ7mG22t7i5uru8TWyzGr+9w8TFub+AtZODyq7NY7AwyM5IaLHXURPTHttw2NjW1dRgSd/m5NCt3M3Cxm3nrd0c0+3u9rr0z4bs+iP37/zErRMnz0hAdOPi9TNIcGGwg+qY9dg38WFDgRQRFtSWLWNFiRr/HV4KiTGcSCCEMOQrSesiQpO1gIH8Y1IhS4skX0KLKfNCpUXeckacB9FNmjYhhhytWe4kSJsvZWUC4evZSp1EXaqb09MDLo5au1pgks5JOxZIy6pNJmTtBFuXUCCbgkqZPKSWUH4UVU1Y3b4nO4IFY2JuzL/oNroNOpRtYqcq7QbWRzZcRi2KcWJ2ygZmIWiXiWQeufnm4M8pFz8VDXk1466lVI+VbFoz69o7SzXW+xh3ZMC+g07ZNHU2cKyhX3f4aYtQcd6lkWftLd1nrtzVmSpHHH03pbRv/bak7t228HOvuot1jR6ber7U2696z72p/Pm3s5N28q9/se2OReTffYC7AJjQemeMZpx8MSjI230Q6rdghPeV9xuF8lmYyC48kcMLhhJuiIsw9RDo3IitOQbJBsawwQMAANxymA2cwEjjFzZapyFiL8Lo4404iojFET4WCSSRPgRRJABSEJKjDksyGUOUP/pg5AxUPrnMllx26eWXYIYp5phkjhkBADs=">',state:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 80" width="100" height="100"><defs><path id="pid-64-svgo-a" d="M0 0h80v80H0z"/><path d="M52.546 8.014a3.998 3.998 0 014.222 3.077c.104.446.093.808.039 1.138a2.74 2.74 0 01-.312.881c-.073.132-.16.254-.246.376l-.257.366-.521.73c-.7.969-1.415 1.926-2.154 2.866l-.015.02a240.945 240.945 0 015.986.341l1.643.123.822.066.41.034.206.018.103.008.115.012c1.266.116 2.516.45 3.677.975a11.663 11.663 0 013.166 2.114c.931.87 1.719 1.895 2.321 3.022a11.595 11.595 0 011.224 3.613c.03.157.046.316.068.474l.015.119.013.112.022.206.085.822.159 1.646c.1 1.098.19 2.198.27 3.298.315 4.4.463 8.829.36 13.255a166.489 166.489 0 01-.843 13.213c-.012.127-.034.297-.053.454a7.589 7.589 0 01-.072.475l-.04.237-.05.236a11.762 11.762 0 01-.74 2.287 11.755 11.755 0 01-5.118 5.57 11.705 11.705 0 01-3.623 1.263c-.158.024-.316.052-.475.072l-.477.053-.821.071-1.644.134c-1.096.086-2.192.16-3.288.23a260.08 260.08 0 01-6.578.325c-8.772.324-17.546.22-26.313-.302a242.458 242.458 0 01-3.287-.22l-1.643-.129-.822-.069-.41-.035-.206-.018c-.068-.006-.133-.01-.218-.02a11.566 11.566 0 01-3.7-.992 11.732 11.732 0 01-5.497-5.178 11.73 11.73 0 01-1.215-3.627c-.024-.158-.051-.316-.067-.475l-.026-.238-.013-.119-.01-.103-.07-.823-.132-1.648a190.637 190.637 0 01-.22-3.298c-.256-4.399-.358-8.817-.258-13.233.099-4.412.372-8.811.788-13.197a11.65 11.65 0 013.039-6.835 11.585 11.585 0 016.572-3.563c.157-.023.312-.051.47-.07l.47-.05.82-.07 1.643-.13a228.493 228.493 0 016.647-.405l-.041-.05a88.145 88.145 0 01-2.154-2.867l-.52-.73-.258-.366c-.086-.122-.173-.244-.246-.376a2.74 2.74 0 01-.312-.881 2.808 2.808 0 01.04-1.138 3.998 3.998 0 014.22-3.077 2.8 2.8 0 011.093.313c.294.155.538.347.742.568.102.11.19.23.28.35l.27.359.532.72a88.059 88.059 0 012.06 2.936 73.036 73.036 0 011.929 3.03c.187.313.373.628.556.945 2.724-.047 5.447-.056 8.17-.038.748.006 1.496.015 2.244.026.18-.313.364-.624.549-.934a73.281 73.281 0 011.93-3.03 88.737 88.737 0 012.059-2.935l.533-.72.268-.359c.09-.12.179-.24.281-.35a2.8 2.8 0 011.834-.881zM30.13 34.631a4 4 0 00-.418 1.42 91.157 91.157 0 00-.446 9.128c0 2.828.121 5.656.364 8.483l.11 1.212a4 4 0 005.858 3.143c2.82-1.498 5.55-3.033 8.193-4.606a177.41 177.41 0 005.896-3.666l1.434-.942a4 4 0 00.047-6.632 137.703 137.703 0 00-7.377-4.708 146.88 146.88 0 00-6.879-3.849l-1.4-.725a4 4 0 00-5.382 1.742z" id="pid-64-svgo-d"/><filter x="-15.4%" y="-16.3%" width="130.9%" height="132.5%" filterUnits="objectBoundingBox" id="pid-64-svgo-c"><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feOffset in="SourceAlpha" result="shadowOffsetOuter2"/><feGaussianBlur stdDeviation="3.5" in="shadowOffsetOuter2" result="shadowBlurOuter2"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowBlurOuter2" result="shadowMatrixOuter2"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="shadowMatrixOuter2"/></feMerge></filter></defs><g fill="none" fill-rule="evenodd" opacity=".8"><mask id="pid-64-svgo-b" fill="#fff"><use xlink:href="#pid-64-svgo-a"/></mask><g mask="url(#pid-64-svgo-b)"><use fill="#000" filter="url(#pid-64-svgo-c)" xlink:href="#pid-64-svgo-d"/><use fill="#FFF" xlink:href="#pid-64-svgo-d"/></g></g></svg>',indicator:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="16" height="16">
        <path d="M16.118 3.667h.382a3.667 3.667 0 013.667 3.667v7.333a3.667 3.667 0 01-3.667 3.667h-11a3.667 3.667 0 01-3.667-3.667V7.333A3.667 3.667 0 015.5 3.666h.382L4.95 2.053a1.1 1.1 0 011.906-1.1l1.567 2.714h5.156L15.146.953a1.101 1.101 0 011.906 1.1l-.934 1.614z" fill="#333"></path>
        <path d="M5.561 5.194h10.878a2.2 2.2 0 012.2 2.2v7.211a2.2 2.2 0 01-2.2 2.2H5.561a2.2 2.2 0 01-2.2-2.2V7.394a2.2 2.2 0 012.2-2.2z" fill="#fff"></path>
        <path d="M6.967 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1zM15.033 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1z" fill="#333"></path>
    </svg>
        `,fullscreenWebOn:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="28" height="28" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_172"><rect width="88" height="88" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_172)"><g transform="matrix(1,0,0,1,44,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-14,-20 C-14,-20 -26,-20 -26,-20 C-27.049999237060547,-20 -27.920000076293945,-19.18000030517578 -27.989999771118164,-18.149999618530273 C-27.989999771118164,-18.149999618530273 -28,-18 -28,-18 C-28,-18 -28,-6 -28,-6 C-28,-4.949999809265137 -27.18000030517578,-4.079999923706055 -26.149999618530273,-4.010000228881836 C-26.149999618530273,-4.010000228881836 -26,-4 -26,-4 C-26,-4 -22,-4 -22,-4 C-20.950000762939453,-4 -20.079999923706055,-4.820000171661377 -20.010000228881836,-5.849999904632568 C-20.010000228881836,-5.849999904632568 -20,-6 -20,-6 C-20,-6 -20,-12 -20,-12 C-20,-12 -14,-12 -14,-12 C-12.949999809265137,-12 -12.079999923706055,-12.819999694824219 -12.010000228881836,-13.850000381469727 C-12.010000228881836,-13.850000381469727 -12,-14 -12,-14 C-12,-14 -12,-18 -12,-18 C-12,-19.049999237060547 -12.819999694824219,-19.920000076293945 -13.850000381469727,-19.989999771118164 C-13.850000381469727,-19.989999771118164 -14,-20 -14,-20z M26,-20 C26,-20 14,-20 14,-20 C12.949999809265137,-20 12.079999923706055,-19.18000030517578 12.010000228881836,-18.149999618530273 C12.010000228881836,-18.149999618530273 12,-18 12,-18 C12,-18 12,-14 12,-14 C12,-12.949999809265137 12.819999694824219,-12.079999923706055 13.850000381469727,-12.010000228881836 C13.850000381469727,-12.010000228881836 14,-12 14,-12 C14,-12 20,-12 20,-12 C20,-12 20,-6 20,-6 C20,-4.949999809265137 20.81999969482422,-4.079999923706055 21.850000381469727,-4.010000228881836 C21.850000381469727,-4.010000228881836 22,-4 22,-4 C22,-4 26,-4 26,-4 C27.049999237060547,-4 27.920000076293945,-4.820000171661377 27.989999771118164,-5.849999904632568 C27.989999771118164,-5.849999904632568 28,-6 28,-6 C28,-6 28,-18 28,-18 C28,-19.049999237060547 27.18000030517578,-19.920000076293945 26.149999618530273,-19.989999771118164 C26.149999618530273,-19.989999771118164 26,-20 26,-20z M-22,4 C-22,4 -26,4 -26,4 C-27.049999237060547,4 -27.920000076293945,4.820000171661377 -27.989999771118164,5.849999904632568 C-27.989999771118164,5.849999904632568 -28,6 -28,6 C-28,6 -28,18 -28,18 C-28,19.049999237060547 -27.18000030517578,19.920000076293945 -26.149999618530273,19.989999771118164 C-26.149999618530273,19.989999771118164 -26,20 -26,20 C-26,20 -14,20 -14,20 C-12.949999809265137,20 -12.079999923706055,19.18000030517578 -12.010000228881836,18.149999618530273 C-12.010000228881836,18.149999618530273 -12,18 -12,18 C-12,18 -12,14 -12,14 C-12,12.949999809265137 -12.819999694824219,12.079999923706055 -13.850000381469727,12.010000228881836 C-13.850000381469727,12.010000228881836 -14,12 -14,12 C-14,12 -20,12 -20,12 C-20,12 -20,6 -20,6 C-20,4.949999809265137 -20.81999969482422,4.079999923706055 -21.850000381469727,4.010000228881836 C-21.850000381469727,4.010000228881836 -22,4 -22,4z M26,4 C26,4 22,4 22,4 C20.950000762939453,4 20.079999923706055,4.820000171661377 20.010000228881836,5.849999904632568 C20.010000228881836,5.849999904632568 20,6 20,6 C20,6 20,12 20,12 C20,12 14,12 14,12 C12.949999809265137,12 12.079999923706055,12.819999694824219 12.010000228881836,13.850000381469727 C12.010000228881836,13.850000381469727 12,14 12,14 C12,14 12,18 12,18 C12,19.049999237060547 12.819999694824219,19.920000076293945 13.850000381469727,19.989999771118164 C13.850000381469727,19.989999771118164 14,20 14,20 C14,20 26,20 26,20 C27.049999237060547,20 27.920000076293945,19.18000030517578 27.989999771118164,18.149999618530273 C27.989999771118164,18.149999618530273 28,18 28,18 C28,18 28,6 28,6 C28,4.949999809265137 27.18000030517578,4.079999923706055 26.149999618530273,4.010000228881836 C26.149999618530273,4.010000228881836 26,4 26,4z M28,-28 C32.41999816894531,-28 36,-24.420000076293945 36,-20 C36,-20 36,20 36,20 C36,24.420000076293945 32.41999816894531,28 28,28 C28,28 -28,28 -28,28 C-32.41999816894531,28 -36,24.420000076293945 -36,20 C-36,20 -36,-20 -36,-20 C-36,-24.420000076293945 -32.41999816894531,-28 -28,-28 C-28,-28 28,-28 28,-28z"></path></g></g></g></svg>',fullscreenWebOff:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="28" height="28" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_177"><rect width="88" height="88" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_177)"><g transform="matrix(1,0,0,1,44,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-14,-20 C-14,-20 -18,-20 -18,-20 C-19.049999237060547,-20 -19.920000076293945,-19.18000030517578 -19.989999771118164,-18.149999618530273 C-19.989999771118164,-18.149999618530273 -20,-18 -20,-18 C-20,-18 -20,-12 -20,-12 C-20,-12 -26,-12 -26,-12 C-27.049999237060547,-12 -27.920000076293945,-11.180000305175781 -27.989999771118164,-10.149999618530273 C-27.989999771118164,-10.149999618530273 -28,-10 -28,-10 C-28,-10 -28,-6 -28,-6 C-28,-4.949999809265137 -27.18000030517578,-4.079999923706055 -26.149999618530273,-4.010000228881836 C-26.149999618530273,-4.010000228881836 -26,-4 -26,-4 C-26,-4 -14,-4 -14,-4 C-12.949999809265137,-4 -12.079999923706055,-4.820000171661377 -12.010000228881836,-5.849999904632568 C-12.010000228881836,-5.849999904632568 -12,-6 -12,-6 C-12,-6 -12,-18 -12,-18 C-12,-19.049999237060547 -12.819999694824219,-19.920000076293945 -13.850000381469727,-19.989999771118164 C-13.850000381469727,-19.989999771118164 -14,-20 -14,-20z M18,-20 C18,-20 14,-20 14,-20 C12.949999809265137,-20 12.079999923706055,-19.18000030517578 12.010000228881836,-18.149999618530273 C12.010000228881836,-18.149999618530273 12,-18 12,-18 C12,-18 12,-6 12,-6 C12,-4.949999809265137 12.819999694824219,-4.079999923706055 13.850000381469727,-4.010000228881836 C13.850000381469727,-4.010000228881836 14,-4 14,-4 C14,-4 26,-4 26,-4 C27.049999237060547,-4 27.920000076293945,-4.820000171661377 27.989999771118164,-5.849999904632568 C27.989999771118164,-5.849999904632568 28,-6 28,-6 C28,-6 28,-10 28,-10 C28,-11.050000190734863 27.18000030517578,-11.920000076293945 26.149999618530273,-11.989999771118164 C26.149999618530273,-11.989999771118164 26,-12 26,-12 C26,-12 20,-12 20,-12 C20,-12 20,-18 20,-18 C20,-19.049999237060547 19.18000030517578,-19.920000076293945 18.149999618530273,-19.989999771118164 C18.149999618530273,-19.989999771118164 18,-20 18,-20z M-14,4 C-14,4 -26,4 -26,4 C-27.049999237060547,4 -27.920000076293945,4.820000171661377 -27.989999771118164,5.849999904632568 C-27.989999771118164,5.849999904632568 -28,6 -28,6 C-28,6 -28,10 -28,10 C-28,11.050000190734863 -27.18000030517578,11.920000076293945 -26.149999618530273,11.989999771118164 C-26.149999618530273,11.989999771118164 -26,12 -26,12 C-26,12 -20,12 -20,12 C-20,12 -20,18 -20,18 C-20,19.049999237060547 -19.18000030517578,19.920000076293945 -18.149999618530273,19.989999771118164 C-18.149999618530273,19.989999771118164 -18,20 -18,20 C-18,20 -14,20 -14,20 C-12.949999809265137,20 -12.079999923706055,19.18000030517578 -12.010000228881836,18.149999618530273 C-12.010000228881836,18.149999618530273 -12,18 -12,18 C-12,18 -12,6 -12,6 C-12,4.949999809265137 -12.819999694824219,4.079999923706055 -13.850000381469727,4.010000228881836 C-13.850000381469727,4.010000228881836 -14,4 -14,4z M26,4 C26,4 14,4 14,4 C12.949999809265137,4 12.079999923706055,4.820000171661377 12.010000228881836,5.849999904632568 C12.010000228881836,5.849999904632568 12,6 12,6 C12,6 12,18 12,18 C12,19.049999237060547 12.819999694824219,19.920000076293945 13.850000381469727,19.989999771118164 C13.850000381469727,19.989999771118164 14,20 14,20 C14,20 18,20 18,20 C19.049999237060547,20 19.920000076293945,19.18000030517578 19.989999771118164,18.149999618530273 C19.989999771118164,18.149999618530273 20,18 20,18 C20,18 20,12 20,12 C20,12 26,12 26,12 C27.049999237060547,12 27.920000076293945,11.180000305175781 27.989999771118164,10.149999618530273 C27.989999771118164,10.149999618530273 28,10 28,10 C28,10 28,6 28,6 C28,4.949999809265137 27.18000030517578,4.079999923706055 26.149999618530273,4.010000228881836 C26.149999618530273,4.010000228881836 26,4 26,4z M28,-28 C32.41999816894531,-28 36,-24.420000076293945 36,-20 C36,-20 36,20 36,20 C36,24.420000076293945 32.41999816894531,28 28,28 C28,28 -28,28 -28,28 C-32.41999816894531,28 -36,24.420000076293945 -36,20 C-36,20 -36,-20 -36,-20 C-36,-24.420000076293945 -32.41999816894531,-28 -28,-28 C-28,-28 28,-28 28,-28z"></path></g></g></g></svg>'},Pe=e=>({name:"bili-video-choose-ep",icon:'<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2295" width="24" height="24"><path d="M983.745542 312.673133a510.516437 510.516437 0 0 0-109.673817-162.745211A510.516437 510.516437 0 0 0 511.999823 0.000353 510.516437 510.516437 0 0 0 149.927922 149.927922 510.516437 510.516437 0 0 0 0.000353 511.999823a510.516437 510.516437 0 0 0 149.927569 362.071902A510.516437 510.516437 0 0 0 511.999823 1023.999294a510.516437 510.516437 0 0 0 362.071902-149.927569A510.516437 510.516437 0 0 0 1023.999294 511.999823c0-69.137584-13.488538-136.121238-40.253752-199.32669z m-62.852348 372.029408a443.779955 443.779955 0 0 1-95.05535 140.994061 441.908508 441.908508 0 0 1-313.73209 129.941935c-59.886283 0-118.042361-11.758333-172.667407-34.851274a443.779955 443.779955 0 0 1-141.029372-95.090661 441.908508 441.908508 0 0 1-129.941934-313.696779c0-59.886283 11.758333-118.042361 34.851274-172.667407a443.779955 443.779955 0 0 1 95.09066-141.029371 441.908508 441.908508 0 0 1 313.696779-129.941935c59.886283 0 118.077671 11.758333 172.667408 34.851274a443.779955 443.779955 0 0 1 141.064682 95.090661 441.908508 441.908508 0 0 1 129.941934 313.696778c0 59.886283-11.793643 118.042361-34.851274 172.667408zM388.413744 706.206519l317.792775-211.86185-317.792775-211.861849v423.723699z" p-id="2296"></path></svg>',html:"选集",selector:e.epList.map(t=>({html:Ze(t.title,t.long_title),default:t.ep_id===e.ep_id&&t.aid===e.aid&&t.cid===e.cid,ep_info:t})),onSelect:function(t){let u=t.ep_info;return Ye.updateArtPlayerVideoInfo(u,e.epList),t.html}}),Ve={art:null,flv:null,currentOption:null,resetEnv(){this.art=null,this.flv=null,this.currentOption=null;},flvPlayer(){var u,i;if(this.currentOption==null){console.error("flv获取当前配置为空");return}let e=this.currentOption.flvInfo;(this.flv!=null||e==null)&&((u=this.flv)==null||u.detachMediaElement(),(i=this.flv)==null||i.destroy());let t=this.currentOption;console.log("加载视频",e),e.length>1?this.flv=he.createPlayer({type:"flv",filesize:t.flvTotalSize,duration:t.flvTotalDuration,segments:e.map(r=>({url:r.url,duration:r.duration,filesize:r.size}))},{stashInitialSize:1024*100}):this.flv=he.createPlayer({type:"flv",url:e[0].url},{stashInitialSize:1024*100}),this.flv.attachMediaElement(this.art.video),this.flv.load();},async init(e){this.resetEnv(),this.currentOption=e;const t="artplayer-bangumi-danmaku-option",u={speed:5,margin:[10,"75%"],opacity:1,modes:[0,1,2],fontSize:18,antiOverlap:!0,synchronousPlayback:!1,visible:!0},i=s.assign(u,H(t,{})),r={container:e.container,url:"",volume:1,isLive:!1,muted:!1,autoplay:!1,pip:!1,autoSize:!0,autoMini:!1,screenshot:!1,setting:!0,loop:!1,flip:!0,playbackRate:!0,aspectRatio:!0,fullscreen:!0,fullscreenWeb:!0,subtitleOffset:!0,miniProgressBar:!0,mutex:!0,backdrop:!0,playsInline:!0,autoPlayback:!0,airplay:!0,theme:"#23ade5",lang:navigator.language.toLowerCase(),moreVideoAttr:{crossOrigin:"anonymous"},settings:[{name:"video-playback-codeid",html:"播放策略",tooltip:"默认",icon:'<svg t="1727413004405" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3183" width="24" height="24"><path d="M170.666667 256h682.666666c23.466667 0 42.666667 19.2 42.666667 42.666667v170.666666h85.333333V256c0-46.933333-38.4-85.333333-85.333333-85.333333H128c-46.933333 0-85.333333 38.4-85.333333 85.333333v512c0 46.933333 38.4 85.333333 85.333333 85.333333h384v-85.333333H170.666667c-23.466667 0-42.666667-19.2-42.666667-42.666667V298.666667c0-23.466667 19.2-42.666667 42.666667-42.666667z" p-id="3184"></path><path d="M640 512L384 341.333333v341.333334zM968.96 786.346667c1.28-12.373333 1.706667-24.746667 0.426667-36.693334l45.653333-36.266666c4.266667-3.413333 5.12-8.96 2.56-13.653334l-43.946667-76.373333c-2.56-4.693333-8.106667-6.4-13.226666-4.693333l-54.613334 21.333333a146.773333 146.773333 0 0 0-32-17.92l-8.533333-58.026667a10.624 10.624 0 0 0-10.666667-9.386666h-88.32c-5.12 0-9.813333 3.84-10.666666 8.96l-8.533334 58.026666c-11.093333 4.693333-21.76 11.093333-31.573333 17.92l-54.613333-21.333333c-5.12-2.133333-10.666667 0-13.226667 4.693333l-43.946667 76.373334c-2.56 4.693333-1.706667 10.24 2.56 13.653333l45.653334 36.693333c-1.28 12.373333-1.706667 24.746667-0.426667 36.693334l-45.653333 36.266666c-4.266667 3.413333-5.12 8.96-2.56 13.653334l43.946666 76.373333c2.56 4.693333 8.106667 6.4 13.226667 4.693333l54.186667-21.333333c9.813333 7.253333 20.48 13.226667 32 17.92l8.533333 58.026667c0.853333 5.12 5.12 8.96 10.666667 8.96h88.32c5.12 0 9.813333-3.84 10.666666-8.96l8.533334-58.026667c11.093333-4.693333 21.76-11.093333 31.573333-17.92l54.613333 21.333333c5.12 2.133333 10.666667 0 13.226667-4.693333l43.946667-76.373333c2.56-4.693333 1.706667-10.24-2.56-13.653334l-45.226667-36.266666zM810.666667 832c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64z" p-id="3185"></path></svg>',selector:[{default:!0,html:"默认",value:Z.AV1},{html:"AV1",value:Z.AV1},{html:"HEVC",value:Z.HEVC},{html:"AVC",value:Z.AVC}],onSelect:function(a){return c.setValue("bili-bangumi-videoCodingCode",a.value),a.html}},Pe(e)],contextmenu:[],layers:[],quality:[...e.quality],highlight:[],controls:[],icons:Vt,plugins:[ot({danmuku:e.danmukuUrl,speed:i.speed,margin:i.margin,opacity:i.opacity,color:"#FFFFFF",mode:0,modes:i.modes,fontSize:i.fontSize,antiOverlap:i.antiOverlap,synchronousPlayback:i.synchronousPlayback,mount:void 0,heatmap:!0,width:800,points:[],filter:a=>a.text.length<=100,beforeVisible:()=>!0,visible:i.visible,emitter:!1,maxLength:50,lockTime:3,theme:s.isThemeDark()?"dark":"light",beforeEmit(a){return new Promise(n=>{console.log(a),setTimeout(()=>{n(!0);},1e3);})}}),_t({url:e.audioUrl}),Tt({cid:e.cid,aid:e.aid,ep_id:e.ep_id}),Pt({aid:e.aid,cid:e.cid,bvid:e.bvid,title:e.videoTitle,showWrap:!0,showTitle:!0,showOnlineTotal:!0})]};if(e.isFlv){if(r.quality=[],r.type="flv",e.flvInfo.length===0){le.failToast("视频播放地址为空，无法播放！");return}r.url=e.flvInfo[0].url,r.customType={flv:(a,n,l)=>{if(!he.isSupported()){l.notice.show="Unsupported playback format: flv";return}this.flvPlayer();}};}else r.type="mp4";if(typeof e.url=="string")r.url=e.url;else if(typeof e.url=="function"){let a=await e.url();r.url=a;}return this.art=new at(r),this.art.on("artplayerPluginDanmuku:config",a=>{Object.keys(i).forEach(n=>{if(Reflect.has(a,n)){let l=Reflect.get(a,n);Reflect.set(i,n,l);}}),K(t,i);}),this.art},async update(e,t){this.resetEnv(),this.currentOption=t;let u="";typeof t.url=="string"?u=t.url:typeof t.url=="function"&&(u=await t.url()),o.info(["更新新的播放信息",t]),e.pause(),o.info("暂停视频"),e.currentTime=0,o.info("重置播放进度"),e.url=u,o.info("更新视频地址"),e.quality=t.quality,o.info("更新画质地址"),e.plugins["plugin-bilibili-m4sAudio"].update(t.audioUrl),o.info(["更新音频",t.audioUrl]);const i={cid:t.cid,aid:t.aid,ep_id:t.ep_id};e.plugins["plugin-bilibili-cc-subtitle"].update(i),o.info(["更新字幕",i]);const r={aid:t.aid,cid:t.cid,bvid:t.bvid,title:t.videoTitle,showWrap:!0,showTitle:!0,showOnlineTotal:!0};e.plugins["plugin-bilibili-topToolBar"].update(r),o.info(["更新顶部标题",r]),e.setting.update(Pe(t)),o.info(["更新选集信息",t.epList]),e.play(),o.info("播放");}},Rt={getUserChooseVideoCodingCode(){let e=c.getValue("bili-bangumi-videoCodingCode",Z.AV1);return Object.values(Z).includes(e)||(o.error("意外情况，选择的编码格式不是允许的编码，将强制使用默认，防止过滤掉的视频链接为空："+e),e=Z.AV1),e}},Nt={30216:"64K",30232:"132K",30280:"192K",30250:"杜比全景声",30251:"Hi-Res无损"};function Lt(e){const t={};return e.forEach(i=>{(!t[i.id]||i.size>t[i.id].size)&&(t[i.id]=i);}),Object.values(t)}function Re(e,t){let u=[];return e.video.forEach(i=>{if(!e.accept_quality.includes(i.id)||t.codecid!=null&&i.codecid!==t.codecid)return;let r=e.support_formats.find(l=>l.quality===i.id),a=Y.findBetterCDN(i.base_url,i.baseUrl,i.backup_url,i.backupUrl);a=Y.replaceVideoCDN(a);let n=r==null?void 0:r.new_description;u.push({name:n,url:a,type:i.mimeType,id:i.id,size:i.size,quality:i.id,vip:!!(r!=null&&r.need_vip)});}),u}const Ze=(e,t)=>`第${e}话 ${t}`,zt=async(e,t)=>{var N;const{aid:u,bvid:i,cid:r,ep_id:a,title:n,long_title:l}=e;o.info(`解析番剧信息 aid:${u} cid:${r} ep_id:${a}`);const p=Ze(n,l),d=[];let C=[],f=!1,A=[],v=0,w=0;if(c.getValue("bili-bangumi-unlockAreaLimit")){const b=await $e.getPlayUrl({avid:u,cid:r,ep_id:a});if(!b)return;let _=Rt.getUserChooseVideoCodingCode();if(b.type.toLowerCase()==="flv")f=!0,b.durl.forEach(x=>{let T=Y.findBetterCDN(x.url,x.backup_url);T=Y.replaceVideoCDN(T),v+=x.length,w+=x.size,A.push({order:x.order,url:T,duration:x.length,length:x.length,size:x.size});});else if(b.type.toLowerCase()==="dash"||b.type.toLowerCase()==="mp4")b.dash.audio.forEach(x=>{let T=x.base_url||x.baseUrl;T=Y.replaceVideoCDN(T),d.push({url:T,id:x.id,size:x.size,text:Nt[x.id]||""});}),d.sort((x,T)=>T.id-x.id),o.info(["ArtPlayer: 获取的音频信息",d]),C=[...Re({accept_quality:b.accept_quality,support_formats:b.support_formats,video:b.dash.video},{codecid:_})],C.length===0&&b.dash.video.length!==0&&(o.warn(`当前选择的视频编码id为: ${_}，但是过滤出的视频没有一个符合的，所以直接放弃使用自定义选择视频编码`),C=[],C=[...Re({accept_quality:b.accept_quality,support_formats:b.support_formats,video:b.dash.video},{})]),C=Lt(C),C.sort((x,T)=>T.quality-x.quality),o.info(["ArtPlayer: 获取的视频画质信息",C]);else {le.failToast("暂未适配的视频格式："+b.format);return}}else {const b=await $e.getPlayUrlHTML5({avid:u,cid:r,ep_id:a});if(!b)return;b.durls.length===0&&b.durl!=null&&b.durls.push({quality:b.quality,durl:b.durl}),b.durls.forEach(_=>{if(!b.accept_quality.includes(_.quality)||!_.durl.length)return;let x=_.durl[0],T=b.support_formats.find(ut=>ut.quality===_.quality),et=Y.findBetterCDN(x.url,x.backup_url),tt=T==null?void 0:T.new_description;C.push({name:tt,url:et,type:"audio/mp4",id:_.quality,size:x.size,quality:_.quality,vip:!!(T!=null&&T.need_vip)});});}const L=C.map((b,_)=>({default:_===0,html:b.name,url:b.url})),V={container:null,epList:t,cid:r,aid:u,bvid:i,ep_id:a,videoTitle:p,danmukuUrl:`https://api.bilibili.com/x/v1/dm/list.so?oid=${r}`,quality:L,isFlv:f,flvInfo:A,flvTotalDuration:v,flvTotalSize:w};return V.url=(N=C==null?void 0:C[0])==null?void 0:N.url,d.length&&(V.audioUrl=d[0].url),V},Ye={updateArtPlayerVideoInfo(e,t){D.waitVuePropToSet(".player-wrapper",{msg:"等待player-wrapper加载完成",check(u){var i,r,a;return typeof((i=u==null?void 0:u.EP_INFO)==null?void 0:i.aid)=="number"&&typeof((r=u==null?void 0:u.EP_INFO)==null?void 0:r.cid)=="number"&&typeof((a=u==null?void 0:u.EP_INFO)==null?void 0:a.ep_id)=="number"},async set(u){const i=document.querySelector(".player-wrapper");e==null&&(e=u.EP_INFO),t==null&&(t=u.EP_LIST);const r=await zt(e,t);if(r==null)return;let a=document.querySelector("#artplayer");if(!a){const n=m.createElement("div",{className:"artplayer-container",innerHTML:`
						<div id="artplayer"></div>
						`});a=n.querySelector("#artplayer"),m.after(i,n);}if(r.container=a,Q.$data.art==null){let n=await Ve.init(r);if(n)Q.$data.art=n;else return;Reflect.set($,"art",Q.$data.art),Q.$data.art.on("restart",l=>{let p=r.quality.find(d=>d.url===l);p&&console.log("切换画质：",p);}),Q.$data.art.volume=1;}else Ve.update(Q.$data.art,r);}});}},Q={$data:{art:null},init(){c.execMenuOnce("bili-bangumi-initialScale",()=>{k.initialScale();}),c.execMenuOnce("bili-bangumi-hook-callApp",()=>{this.hookCallApp();}),c.execMenu("bili-bangumi-cover-clicl-event-chooseEp",()=>{this.setChooseEpClickEvent();}),c.execMenu("bili-bangumi-cover-clicl-event-other",()=>{this.setClickOtherVideo();}),c.execMenu("bili-bangumi-cover-clicl-event-recommend",()=>{this.setRecommendClickEvent();}),this.coverVideoPlayer();},hookCallApp(){let e=$.setTimeout;$.setTimeout=function(...t){if(t[0].toString().includes("autoOpenApp")){o.success(["阻止唤醒App",t]);return}return e.apply(this,t)};},setPay(){D.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.userStat.pay",check(e){var t,u,i;return typeof typeof((i=(u=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:u.userStat)==null?void 0:i.pay)=="number"},set(e){o.success("成功设置参数 $store.state.userStat.pay=1"),e.$store.state.userStat.pay=1;}},{msg:"设置参数 $store.state.mediaInfo.user_status.pay",check(e){var t,u,i,r;return typeof((r=(i=(u=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:u.mediaInfo)==null?void 0:i.user_status)==null?void 0:r.pay)=="number"},set(e){o.success("成功设置参数 $store.state.mediaInfo.user_status.pay=1"),e.$store.state.mediaInfo.user_status.pay=1;}}]);},setChooseEpClickEvent(){s.waitNode(B.className.bangumi+" .ep-list-pre-wrapper ul.ep-list-pre-container").then(e=>{o.info("覆盖【选集】的点击事件"),m.on(e,"click","li.episode-item",function(t){s.preventEvent(t),ne.jumpToUrl(t);},{capture:!0});}),s.waitNode(B.className.bangumi+" .ep-list-pre-wrapper ul.season-list-wrapper").then(e=>{o.info("覆盖【xx季】的点击事件"),m.on(e,"click","li",function(t){s.preventEvent(t),ne.jumpToUrl(t);},{capture:!0});}),s.waitNode(B.className.bangumi+" .ep-list-pre-header").then(e=>{o.info("覆盖【选集】右上角的【全xx话】Arrow的点击事件"),m.on(e,"click",function(t){s.preventEvent(t);},{capture:!0});});},setClickOtherVideo(){s.waitNode(B.className.bangumi+" .section-preview-wrapper ul.ep-list-pre-container").then(e=>{o.info("覆盖【PV&其他】、【预告】、【主题曲】的点击事件"),m.on(e,"click","li.section-preview-item",function(t){s.preventEvent(t),ne.jumpToUrl(t);},{capture:!0});}),s.waitNode(B.className.bangumi+" .section-preview-header").then(e=>{o.info("覆盖【PV&其他】、【预告】、【主题曲】右上角的Arrow的点击事件"),m.on(e,"click",function(t){s.preventEvent(t);},{capture:!0});});},setRecommendClickEvent(){s.waitNode(B.className.bangumi+" .recom-wrapper ul.recom-list").then(e=>{o.info("覆盖【更多推荐】番剧的点击事件"),m.on(e,"click","li.recom-item-v2",function(t){s.preventEvent(t),ne.jumpToUrl(t);},{capture:!0});});},coverVideoPlayer(){document.querySelector("#artplayer")?o.warn("已存在播放器，更新播放信息"):M(`
			.player-wrapper,
			.open-app-bar{
				display: none !important;
			}
			${St}
			`),Ye.updateArtPlayerVideoInfo();}},Xe={async getSearchInputPlaceholder(){let e=await P.get("https://api.bilibili.com/x/web-interface/wbi/search/default",{fetch:!0,headers:{accept:"application/json, text/plain, */*","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","cache-control":"no-cache",pragma:"no-cache","sec-ch-ua":'""',"sec-ch-ua-mobile":"?1","sec-ch-ua-platform":'""',"sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-site"},allowInterceptConfig:!1});if(!e.status)return;let t=s.toJSON(e.data.responseText);if(I.isWebApiSuccess(t))return t.data},async getBangumiSearchResult(e){let t={search_type:"media_bangumi",keyword:e.keyword,from_client:"BROWSER",drm_tech_type:"2",module:"bangumi",area:e.area.toLowerCase(),access_key:X.getAccessToken()},u=`https://${e.host}/x/web-interface/search/type?${s.toSearchParamsStr(t)}`,i=await P.get(u,{fetch:!1,headers:{"User-Agent":s.getRandomAndroidUA()}});if(!i.status)return;let r=s.toJSON(i.data.responseText);if(!I.isWebApiSuccess(r)){o.error(`请求失败，当前代理服务器信息：${JSON.stringify(e.host)}`),o.error(`请求失败，当前请求的响应信息：${JSON.stringify(r)}`);return}return r.data.result}},Ot={$flag_css:{enableOtherAreaSearchBangumi:!1},$data:{},init(){m.ready(()=>{c.execMenu("bili-search-enableOtherAreaSearchBangumi",()=>{this.enableOtherAreaSearchBangumi();});});},enableOtherAreaSearchBangumi(){this.$flag_css.enableOtherAreaSearchBangumi||(this.$flag_css.enableOtherAreaSearchBangumi=!0,M(`
			.m-search-result .tabs{
				overflow: auto;
				white-space: nowrap;
			}
			.m-search-result .tabs .tab-item{
				display: inline-block;
				height: 8vmin;
				line-height: 8vmin;
				color: #757575;
				font-size: 3.73333vmin;
				margin-top: 1.86667vmin;
				padding: 0 2.33vmin;
			}
			.m-search-result .tabs .tab-item:first-child{
				padding-left: 0;
			}
			.m-search-result .tabs .tab-item:last-child{
				padding-right: 0;
			}
			.m-search-result .tabs .tab-item.on{
				color: #fb7299;
				border-bottom: 0.53333vmin solid #fb7299;
			}
			`),M(`
			.gm-result-panel {
				padding-top: 23.46667vmin;
				background: #f4f4f4;
				--card-img-width: 100px;
				--card-img-height: calc(var(--card-img-width) * 1.2 );
				--card-desc-color: #808080;
				--card-desc-size: 0.8em;
			}
			.gm-card-cover{
			}
			.gm-card-cover img {
				width: var(--card-img-width);
				height: var(--card-img-height);
				border-radius: 8px;
			}
			.gm-card-container {
				display: flex;
				gap: 15px;
			}
	
			.gm-card-box {
				padding: 0px 10px;
			}
	
			.gm-card-item em {
				color: var(--bili-color);
				font-style: unset;
			}
	
			.gm-card-title {
				font-family: 微软雅黑;
				font-size: 1em;
			}
	
			.gm-card-pubtime,
			.gm-card-styles,
			span.gm-card-media_score-user_count {
				font-size: var(--card-desc-size);
				color: var(--card-desc-color);
			}
	
			.gm-card-info-container {
				display: flex;
				flex-direction: column;
				gap: 3px;
				justify-content: flex-start;
			}
			.gm-card-info {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}
			span.gm-card-media_score-score {
				color: #F77C2E;
				font-size: 1.2em;
				font-weight: bold;
			}
	
			.gm-card-media_score {
				display: flex;
				align-items: flex-end;
				gap: 0.5em;
			}
			.gm-card-item {
				padding: 1.6vmin;
				background: #fff;
				margin: 10px 0px;
				border-radius: 6px;
				display: flex;
				flex-direction: column;
				gap: 15px;
			}
			.gm-card-badges {
				background: var(--bili-color);
				color: #fff;
				padding: 3px;
				font-size: 12px;
				border-radius: 3px;
				white-space: nowrap;
				position: absolute;
				margin: 5px 0px 0px calc(var(--card-img-width) - 36px );
			}
			.gm-card-eps {
				display: flex;
				overflow: auto;
				gap: 10px;
			}
	
			.gm-card-eps-item {
				text-align: center;
				white-space: nowrap;
			}
	
			.gm-card-eps-item-info {
				min-width: 60px;
				height: 40px;
				background: #edeff3;
				padding: 10px;
				border-radius: 8px;
			}
			`)),s.waitNode(".m-search-result .tabs:not(:has(.gm-tab-item))").then(e=>{be.getSearchProxyHost().forEach(i=>{let r=m.createElement("a",{className:"tab-item gm-tab-item",innerHTML:`番剧（${i.name}）`},{"data-area":i.area,"data-host":i.host});e.appendChild(r);});const u=i=>{e.querySelectorAll(".tab-item").forEach(r=>i!=r&&r.classList.remove("on")),i.classList.add("on");};m.on(e,"click",".tab-item",async i=>{let r=i.target;u(r);let a=document.querySelector(".result-panel"),n=document.querySelector(".gm-result-panel");if(n&&(n.remove(),m.show(a)),!r.classList.contains("gm-tab-item"))return;let l=r.dataset.area,p=r.dataset.host,d=document.querySelector(".m-search-result"),C=D.getVue(d);C.switchTab(233),m.hide(a);let f=C.keyword,A=g.loading("搜索中，请稍后..."),v=await Xe.getBangumiSearchResult({keyword:f,area:l,host:p});if(A.close(),!v)return;o.info(["搜索结果：",v]);let w=m.createElement("div",{className:"gm-result-panel",innerHTML:`
					<div class="gm-list-view">
						<div class="gm-video-list-box">
							<div class="gm-video-list">
								<div class="gm-card-box"></div>
							</div>
						</div>
					</div>

					`}),L=w.querySelector(".gm-card-box");v.forEach(V=>{L.appendChild(this.createSearchResultVideoItem(V));}),d.appendChild(w);});});},createSearchResultVideoItem(e){var a,n;let t=m.createElement("div",{className:"gm-card-item",innerHTML:`
			<div class="gm-card-container">
				<div class="gm-card-cover">
					<img src="${e.cover}" alt="封面">
				</div>
				<div class="gm-card-badges">${e.season_type_name}</div>
				<div class="gm-card-info">
					<div class="gm-card-info-container">
						<div class="gm-card-title">${e.title}</div>
						<div class="gm-card-pubtime">
						</div>
						<div class="gm-card-styles">${e.styles||""}</div>
					</div>
					<div class="gm-card-media_score">
						
					</div>
				</div>
				<div class="gm-card-ferture">
				</div>
			</div>
			<div class="gm-card-eps">
				
			</div>
			`},{"data-url":e.url,"data-type":e.type,"data-media_id":e.media_id,"data-pgc_season_id":e.pgc_season_id,"data-is_follow":e.is_follow,"data-is_selection":e.is_selection});m.on(t,"click",l=>{s.preventEvent(l),window.open(e.url,"_blank");});let u=t.querySelector(".gm-card-pubtime");e.pubtime&&m.append(u,`
			<span>${s.formatTime(e.pubtime*1e3,"yyyy")}</span>
			`),e.areas&&(u.children.length&&m.append(u,`
					<span> | </span>
				`),m.append(u,`
					<span>${e.areas}</span>
				`));let i=t.querySelector(".gm-card-media_score");e.media_score&&e.media_score.user_count&&m.append(i,`
				<span class="gm-card-media_score-score">${((a=e.media_score)==null?void 0:a.score)||0}分</span>
				<span class="gm-card-media_score-user_count">${((n=e.media_score)==null?void 0:n.user_count)||0}人参与</span>
				`);let r=t.querySelector(".gm-card-eps");return Array.isArray(e.eps)&&e.eps.forEach(l=>{let p=m.createElement("div",{className:"gm-card-eps-item",innerHTML:`
					<div class="gm-card-eps-item-badges">
						
					</div>
					<div class="gm-card-eps-item-info">
						${l.title}
					</div>`},{"data-id":l.id,"data-url":l.url,"data-title":l.title,"data-long_title":l.long_title});m.on(p,"click",d=>{s.preventEvent(d),window.open(l.url,"_blank");}),r.appendChild(p);}),t},searchBangumi(){}},Ut={init(){S.isSearchResult()&&Ot.init(),c.execMenuOnce("bili-search-cover-cancel",()=>{this.coverCancel();}),m.ready(()=>{c.execMenu("bili-search-inputAutoFocus",()=>{this.inputAutoFocus();});});},coverCancel(){o.info("覆盖【取消】按钮的点击事件"),m.on(document,"click","a.cancel",e=>{o.info("点击取消按钮"),s.preventEvent(e),window.history.back();},{capture:!0});},inputAutoFocus(){if(new URLSearchParams(window.location.search).has("keyword")){o.warn("当前在搜索结果页面，不执行输入框自动获取焦点");return}o.info("输入框自动获取焦点"),s.waitNode('.m-search .m-search-search-bar input[type="search"]',1e4).then(t=>{if(!t){o.error("获取输入框失败");return}t.focus();});}},qt={init(){c.execMenuOnce("bili-live-block-chatRoom",()=>this.blockChatRoom()),c.execMenuOnce("bili-live-block-brush-prompt",()=>this.blockBrushPrompt()),c.execMenuOnce("bili-live-block-control-panel",()=>this.blockControlPanel());},blockChatRoom(){return o.info("屏蔽聊天室"),k.addBlockCSS("#chat-items")},blockBrushPrompt(){return o.info("屏蔽xxx进入直播间"),k.addBlockCSS("#brush-prompt")},blockControlPanel(){return o.info("屏蔽底部工具栏"),k.addBlockCSS(".control-panel")}},Ht={init(){qt.init(),c.execMenuOnce("bili-live-prevent-openAppBtn",()=>{this.preventOpenAppBtn();});},preventOpenAppBtn(){s.waitNode("body").then(e=>{o.info("阻止.open-app-btn元素触发点击事件"),m.on(e,"click",".open-app-btn",function(t){s.preventEvent(t);},{capture:!0}),m.on(e,"click","#web-player-controller-wrap-el",function(t){s.preventEvent(t);},{capture:!0});});}},It={init(){c.execMenuOnce("bili-opus-cover-topicJump",()=>{this.coverTopicJump();}),c.execMenuOnce("bili-opus-automaticallyExpandToReadFullText",()=>this.automaticallyExpandToReadFullText()),c.execMenuOnce("bili-opus-cover-header",()=>{this.coverHeaderJump();});},coverTopicJump(){o.info("覆盖话题跳转点击事件"),m.on(document,"click",B.className.opus+" .launch-app-btn.opus-module-topic",function(e){var a;let t=e.target,u=D.getVue(t);if(!u){g.error("获取话题的__vue__失败");return}let i=(a=u==null?void 0:u.$props)==null?void 0:a.data,r=i==null?void 0:i.jump_url;if(s.isNull(r)){g.error("获取话题的jump_url失败");return}o.info(["话题的跳转信息: ",i]),k.goToUrl(r);},{capture:!0});},automaticallyExpandToReadFullText(){return o.info("自动展开阅读全文"),[k.addBlockCSS(B.className.opus+" .opus-read-more"),M(`
			${B.className.opus} .opus-module-content{
				overflow: unset !important;
				max-height: unset !important;
			}
			`)]},coverHeaderJump(){o.info("覆盖header点击事件"),m.on(document,"click",B.className.opus+" .opus-module-author",function(e){var r;s.preventEvent(e);let t=e.target,u=D.getVue(t);if(!u){g.error("获取vue属性失败");return}let i=(r=u==null?void 0:u.data)==null?void 0:r.mid;if(!i){g.error("获取mid失败");return}k.goToUrl(oe.getUserSpaceUrl(i));},{capture:!0});}},Wt={init(){c.execMenuOnce("bili-dynamic-cover-topicJump",()=>{this.coverTopicJump();}),c.execMenuOnce("bili-dynamic-cover-atJump",()=>{this.coverAtJump();}),c.execMenuOnce("bili-dynamic-cover-referenceJump",()=>{this.coverReferenceJump();}),c.execMenuOnce("bili-dynamic-cover-header",()=>{this.coverHeaderJump();});},coverHeaderJump(){o.info("覆盖header点击事件"),m.on(document,"click",B.className.dynamic+" .launch-app-btn .dyn-header",function(e){s.preventEvent(e);let t=e.target,u=D.getVue(t);if(!u){g.error("获取vue属性失败");return}let i=u.url;if(!i){g.error("获取url失败");return}k.goToUrl(i);},{capture:!0});},coverTopicJump(){o.info("覆盖话题跳转点击事件"),m.on(document,"click",B.className.dynamic+" .launch-app-btn .bili-dyn-topic",function(e){var a;s.preventEvent(e);let t=e.target,u=D.getVue(t);if(!u){g.error("获取vue属性失败");return}let i=(a=u==null?void 0:u.$props)==null?void 0:a.data,r=i==null?void 0:i.jump_url;if(s.isNull(r)){g.error("获取jump_url失败");return}o.info(["话题的跳转信息: ",i]),k.goToUrl(r);},{capture:!0});},coverAtJump(){o.info("覆盖@ 跳转"),m.on(document,"click",B.className.dynamic+" .at",function(e){var i,r;s.preventEvent(e);let t=e.target,u=t.getAttribute("data-oid")||((r=(i=D.getVue(t))==null?void 0:i.$props)==null?void 0:r.rid);if(s.isNull(u)){g.error("获取data-oid或rid失败");return}o.info("用户的oid: "+u),k.goToUrl(oe.getUserSpaceDynamicUrl(u));},{capture:!0});},coverReferenceJump(){o.info("覆盖引用的点击事件"),m.on(document,"click",B.className.dynamic+" .dyn-content .reference .dyn-orig-author",function(e){s.preventEvent(e);let u=e.target.getAttribute("data-url");if(!u){g.error("获取data-url失败");return}k.goToUrl(u);},{capture:!0}),m.on(document,"click",B.className.dynamic+" .dyn-content .reference .dyn-archive",function(e){var r;s.preventEvent(e);let t=e.target,u=D.getVue(t);if(!u){g.error("获取vue属性失败");return}let i=(r=u==null?void 0:u.data)==null?void 0:r.jump_url;if(s.isNull(i)){g.error("获取jump_url失败");return}k.goToUrl(i);},{capture:!0});}},Gt=`#app .m-head .m-recommend-view {\r
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
`;var jt=23442827791579n,Jt=1n<<51n,Ne=58n,Qt="FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf";function Zt(e){const t=["B","V","1","0","0","0","0","0","0","0","0","0"];let u=t.length-1,i=(Jt|BigInt(e))^jt;for(;i>0;)t[u]=Qt[Number(i%BigInt(Ne))],i=i/Ne,u-=1;return [t[3],t[9]]=[t[9],t[3]],[t[4],t[7]]=[t[7],t[4]],t.join("")}const Le=e=>(e.startsWith("http://")&&(e=e.replace(/^http/,"https")),e),Yt={$flag:{isInitCSS:!1,isLoadingNextPage:!1},$data:{intersectionObserver:null},$ele:{$listView:null,$videoListBox:null,$videoList:null,$cardBox:null,$listViewShim:null},$cardGoto:{av:"av",picture:"picture"},init(){this.setCSS(),m.ready(()=>{this.addRecommendTag();});},setCSS(){this.$flag.isInitCSS||(this.$flag.isInitCSS=!0,M(Gt));},reset(){o.info("重置状态"),this.$flag.isLoadingNextPage=!1,this.removeScrollEvent(),Object.keys(this.$ele).forEach(e=>{this.$ele[e]=null;});},addRecommendTag(){if(document.querySelector(".channel-menu a.recommend-tag"))return;let e=document.querySelector(".channel-menu .v-switcher");if(!e){o.error("添加推荐标签失败，原因：.channel-menu .v-switcher不存在");return}let t=m.createElement("a",{className:"v-switcher__header__tabs__item recommend-tag",innerHTML:"<span>推荐</span>"},{href:"javascript:;"}),u=m.createElement("div",{className:"m-recommend-view",innerHTML:`
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
            `});this.$ele.$listView=u.querySelector(".list-view"),this.$ele.$videoListBox=u.querySelector(".video-list-box"),this.$ele.$videoList=u.querySelector(".video-list"),this.$ele.$cardBox=u.querySelector(".card-box"),this.$ele.$listViewShim=u.querySelector(".list-view__shim"),this.$ele.$listViewShim.style.cssText="z-index:-1;user-select:none;pointer-events:none;background:transparent;left:0;bottom:0;width:100%;height:200px;";let i=document.querySelector("#app .m-head");i&&i.appendChild(u),m.on(t,"click",r=>{s.preventEvent(r),t.classList.add("is-avtive"),this.recommendClickEvent();}),m.on(e,"click",()=>{t.classList.remove("is-avtive");},{capture:!0}),m.on(this.$ele.$cardBox,"click",".v-card",r=>{s.preventEvent(r);let a=r.target;window.open(a.href,"_blank");}),m.before(e,t),this.setScrollEvent(),window.location.hash==="#/recommend/"&&(o.info("当前hash为推荐视频，出动触发"),t.click());},async recommendClickEvent(){k.goToUrl("#/recommend/",!0);},setScrollEvent(){o.success("监听滚动: IntersectionObserver"),this.$data.intersectionObserver=new IntersectionObserver(async e=>{!this.$flag.isLoadingNextPage&&e[0].isIntersecting&&(this.$flag.isLoadingNextPage=!0,await this.scrollEvent(),this.$flag.isLoadingNextPage=!1);},{threshold:0}),this.$data.intersectionObserver.observe(this.$ele.$listViewShim);},removeScrollEvent(){var e;(e=this.$data.intersectionObserver)==null||e.disconnect(),this.$data.intersectionObserver=null;},async scrollEvent(){let e=await this.getRecommendVideoInfo();if(!e)return;o.success(["获取推荐视频信息",e]);let t=document.createDocumentFragment(),u=c.getValue("bili-head-recommend-push-graphic");e.forEach(i=>{let r=null;if(i.goto===this.$cardGoto.av)r=this.getRecommendItemAVElement(i);else if(u&&i.goto===this.$cardGoto.picture)r=this.getRecommendItemPictureElement(i);else {o.error(["该goto暂未适配",i]);return}t.appendChild(r);}),this.$ele.$cardBox.appendChild(t);},async getRecommendVideoInfo(){var r;let e={appkey:W.ios.appkey,access_key:((r=X.getAccessTokenInfo())==null?void 0:r.access_token)||""},u=await P.get("https://app.bilibili.com/x/v2/feed/index"+"?"+s.toSearchParamsStr(e),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(!u.status)return;let i=s.toJSON(u.data.responseText);if(!I.isWebApiSuccess(i)){g.error(i.message);return}return i.data.items},getRecommendItemPictureElement(e){let t=e.goto,u=e.param,i="/opus/"+u,r=e.args.up_name,a=e.title,n=Le(e.cover),l=e.cover_left_text_1,p=m.createElement("a",{className:"v-card",href:i,innerHTML:`
                <div class="card">
                    <div class="bfs-img-wrap">
                        <div class="bfs-img b-img">
                            <picture class="b-img__inner">
                                <source type="image/webp" srcset="${n}">
                                <img src="${n}" alt="${a}">
                            </picture>
                        </div>
                    </div>
                    <div class="count">
                        <span>
                            <i class="iconfont like2"></i>
                            ${l}
                        </span>
                    </div>
                </div>
                <p class="title">${a}</p>
                <div class="gm-up-info">
                    <div class="gm-up-name">
                        <p class="gm-picture-text">图文</p>
                        ${r}
                    </div>
                    <div class="gm-video-handle">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path fill="#2E2F30" d="M512 256a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z m0 341.333333a85.333333 85.333333 0 1 1 0-170.666666 85.333333 85.333333 0 0 1 0 170.666666z m0 341.333334a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z">
                            </path>
                        </svg>
                    </div>
                </div>
                `},{"data-param":u,"data-title":a,"data-goto":t});return p["data-picture"]=e,p},getRecommendItemAVElement(e){var A;let t=e.goto,u=((A=e==null?void 0:e.player_args)==null?void 0:A.aid)||e.args.aid,r="/video/"+Zt(u),a=e.args.up_name,n=e.title,l=Le(e.cover),p=e.cover_left_text_1,d=e.cover_left_text_2,C=e.cover_right_text,f=m.createElement("a",{className:"v-card",href:r,innerHTML:`
                <div class="card">
                    <div class="bfs-img-wrap">
                        <div class="bfs-img b-img">
                            <picture class="b-img__inner">
                                <source type="image/webp" srcset="${l}">
                                <img src="${l}" alt="${n}">
                            </picture>
                        </div>
                    </div>
                    <div class="count">
                        <span>
                            <i class="iconfont icon_shipin_bofangshu"></i>
                            ${p}
                        </span>
                        <span>
                            <i class="iconfont icon_shipin_danmushu"></i>
                            ${d}
                        </span>
                        <span class="gm-video-duration">${C}</span>
                    </div>
                </div>
                <p class="title">${n}</p>
                <div class="gm-up-info">
                    <div class="gm-up-name">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
                            </path>
                        </svg>
                        ${a}
                    </div>
                    <div class="gm-video-handle">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path fill="#2E2F30" d="M512 256a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z m0 341.333333a85.333333 85.333333 0 1 1 0-170.666666 85.333333 85.333333 0 0 1 0 170.666666z m0 341.333334a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z">
                            </path>
                        </svg>
                    </div>
                </div>
                `},{"data-aid":u,"data-title":n,"data-goto":t});return f["data-video"]=e,f}},Ee={$flag:{isInit_reconfigurationTinyAppSettingButton:!1,isInit_beautifyTopNavBar_css:!1},init(){c.execMenuOnce("bili-head-supplementaryVideoStreamingInformation",()=>{this.addVideoListUPInfo();}),c.execMenu("bili-head-recommend-enable",()=>{Yt.init();});},addVideoListUPInfo(){o.info("添加视频列表UP主信息"),M(`
		${B.className.head} .video-list .card-box .gm-up-info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: var(--pd-width);
		}
		${B.className.head} .video-list .card-box .gm-up-info .gm-up-name {
			display: flex;
			align-items: center;
			font-size: 3vmin;
			color: #999A9E;
		}
		${B.className.head} .video-list .card-box .gm-up-info .gm-up-name svg {
			margin-right: calc(var(--pd-width) / 2);
			width: 3vmin;
			height: 3vmin;
		}
		${B.className.head} .gm-video-duration{
			margin: 0 auto;
		}
        `),s.waitNode(B.className.head+" .video-list .card-box").then(()=>{let e=new s.LockFunction(()=>{document.querySelectorAll(B.className.head+" .video-list .card-box .v-card").forEach(t=>{var a,n,l,p,d;let u=D.getVue(t),i=((n=(a=u==null?void 0:u.info)==null?void 0:a.author)==null?void 0:n.name)||((p=(l=u==null?void 0:u.info)==null?void 0:l.owner)==null?void 0:p.name),r=(d=u==null?void 0:u.info)==null?void 0:d.duration;if(i&&!t.querySelector(".gm-up-info")){let C=document.createElement("div");C.innerHTML=`
                                    <div class="gm-up-name">
                                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                            <path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
                                            </path>
                                        </svg>
                                        ${i}
                                    </div>
                                    <div class="gm-video-handle">
                                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                            <path fill="#2E2F30" d="M512 256a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z m0 341.333333a85.333333 85.333333 0 1 1 0-170.666666 85.333333 85.333333 0 0 1 0 170.666666z m0 341.333334a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z">
                                            </path>
                                        </svg>
                                    </div>`,C.className="gm-up-info",t.appendChild(C);}if(r){let C=t.querySelector(".count");if(C&&!C.querySelector(".gm-video-duration")){let f=typeof r=="string"?r:k.parseDuration(r),A=document.createElement("span");A.className="gm-video-duration",A.innerHTML=f,C.appendChild(A);}}});},25);s.mutationObserver(document.body,{config:{subtree:!0,childList:!0,attributes:!0},callback(){e.run();}});});},async reconfigurationTinyAppSettingButton(){o.info("重构tinyApp右上角的设置按钮图标"),this.$flag.isInit_reconfigurationTinyAppSettingButton||(this.$flag.isInit_reconfigurationTinyAppSettingButton=!0,M(`
			.nav-bar .right{
				display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-align: center;
				-ms-flex-align: center;
				align-items: center;
			}
			.gm-face{
				width: 6.4vmin;
				height: 6.4vmin;
				display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-pack: center;
				-ms-flex-pack: center;
				justify-content: center;
				-webkit-box-align: center;
				-ms-flex-align: center;
				align-items: center;
				margin-right: 3.2vmin;
				border-radius: 3.2vmin;
				overflow: hidden;
			}
			.gm-face-avatar{
				width: 100%;
				height: 100%;
				overflow: hidden;
			}
			.gm-face-avatar img{
				width: 100%;
				height: 100%;
				-o-object-fit: cover;
				object-fit: cover;
			}
			`));let e=await s.waitNode(".nav-bar .icon-config",1e4);if(!e){o.error("未找到设置按钮图标，无法重构");return}e.outerHTML=`
		<div class="gm-face">
			<div class="gm-face-avatar">
				<img src="http://i0.hdslb.com/bfs/face/member/noface.jpg">
			</div>
		</div>
		`;let t=!1,u=null,i=document.querySelector(".gm-face"),r=i.querySelector("img");D.waitVuePropToSet("#app",[{check(a){var n,l,p,d;return typeof((d=(p=(l=(n=a==null?void 0:a.$store)==null?void 0:n.state)==null?void 0:l.common)==null?void 0:p.userInfo)==null?void 0:d.isLogin)=="boolean"},set(a){var l,p,d;let n=(d=(p=(l=a==null?void 0:a.$store)==null?void 0:l.state)==null?void 0:p.common)==null?void 0:d.userInfo;if(t=n==null?void 0:n.isLogin,t){if(u=n==null?void 0:n.mid,u==null){o.warn("当前是脚本设置的isLogin但其实未登录账号"),t=!1;return}n==null||n.uname,r.src=(n==null?void 0:n.face)||r.src;}else o.warn("经检测，Bilibili尚未登录账号");}}]),m.on(i,"click",a=>{if(s.preventEvent(a),t)if(u!=null){let n=oe.getUserSpaceUrl(u);k.goToUrl(n,!1);}else g.error("获取用户id失败");else k.goToLogin(window.location.href);});},beautifyTopNavBar(){o.info("美化顶部navbar"),this.$flag.isInit_beautifyTopNavBar_css||(this.$flag.isInit_beautifyTopNavBar_css=!0,M(`
			/* 隐藏logo */
			.m-head .m-navbar .logo,
			/* 隐藏原有的搜索图标 */
			.m-head .m-navbar .icon-search{
				display: none !important;
			}
			/* 设置右侧的宽度撑开、逆反 */
			.m-head .m-navbar .right{
				width: 100%;
				display: flex;
				flex-direction: row-reverse;
				justify-content: flex-end;
			}
			/* 头像 */
			.m-head .m-navbar .gm-face{
				flex: 0 auto;
				margin-top: 1.86667vmin;
			}
			/* 新的输入框 */
			.m-head .m-navbar .gm-input-area{
				flex: 1;
				margin-top: 1.86667vmin;
				height: 8vmin;
				line-height: 8vmin;
				padding: 0 3.2vmin;
				background: #f4f4f4;
				border-radius: 4.53333vmin;
				display: flex;
			}
			/* 输入框前面的搜索图标 */
			.m-head .m-navbar .gm-input-area .ic_search_tab{
				color: #a0a0a0;
				vertical-align: middle;
				font-size: 4.33333vmin;
			}
			/* 输入框内容 */
			.m-head .m-navbar .gm-input-area input[type="search"]{
				font-size: 3.46667vmin;
				color: #505050;
				border: none;
				background: transparent;
				width: 61.33333vmin;
				user-select: none !important;!i;!;
				padding-left: 2.122vmin;
				pointer-events: none;
			}
			`)),s.waitNode(".m-head .m-navbar .icon-search",1e4).then(async e=>{if(!e||e.parentElement.querySelector(".gm-input-area"))return;let t=m.createElement("div",{className:"gm-input-area",innerHTML:`
						<i class="iconfont ic_search_tab"></i>
						<input type="search" placeholder="" readonly="" disabled="">
					`}),u=t.querySelector("input");m.on(t,"click",r=>{s.preventEvent(r),k.goToUrl("/search",!0);}),m.after(e,t);let i=await Xe.getSearchInputPlaceholder();i!=null&&(o.info(["热点信息：",i]),u.placeholder=i.show_name||i.name);});}},Xt={init(){c.execMenu("bili-setLogin",()=>{this.setLogin();}),c.execMenu("bili-setIsClient",()=>{this.setIsClient();}),c.execMenu("bili-setTinyApp",()=>{this.setTinyApp(),m.ready(()=>{Ee.reconfigurationTinyAppSettingButton().then(()=>{c.execMenu("bili-beautifyTopNavBar",()=>{Ee.beautifyTopNavBar();});});});});},setLogin(){let e=new s.GM_Cookie,t=e.get("DedeUserID");t!=null?o.info(["Cookie DedeUserID已存在：",t.value]):e.set({name:"DedeUserID",value:"2333"},u=>{u?o.error(u):o.success("Cookie成功设置DedeUserID=>2333");}),D.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.noCallApp",check(u){var i,r,a;return typeof((a=(r=(i=u==null?void 0:u.$store)==null?void 0:i.state)==null?void 0:r.common)==null?void 0:a.noCallApp)=="boolean"},set(u){o.success("成功设置参数 $store.state.common.noCallApp=true"),u.$store.state.common.noCallApp=!0;}},{msg:"设置参数 $store.state.common.userInfo.isLogin",check(u){var i,r,a,n;return typeof((n=(a=(r=(i=u==null?void 0:u.$store)==null?void 0:i.state)==null?void 0:r.common)==null?void 0:a.userInfo)==null?void 0:n.isLogin)=="boolean"},set(u){o.success("成功设置参数 $store.state.common.userInfo.isLogin=true"),u.$store.state.common.userInfo.isLogin=!0;}},{msg:"设置参数 $store.state.loginInfo.isLogin",check(u){var i,r,a;return typeof((a=(r=(i=u==null?void 0:u.$store)==null?void 0:i.state)==null?void 0:r.loginInfo)==null?void 0:a.isLogin)=="boolean"},set(u){o.success("成功设置参数 $store.state.loginInfo.isLogin=true"),u.$store.state.loginInfo.isLogin=!0;}}]);},setIsClient(){D.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.video.isClient",check(e){var t,u,i;return typeof typeof((i=(u=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:u.video)==null?void 0:i.isClient)=="boolean"},set(e){o.success("成功设置参数 $store.state.video.isClient=true"),e.$store.state.video.isClient=!0;}},{msg:"设置参数 $store.state.opus.isClient=true",check(e){var t,u,i;return typeof((i=(u=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:u.opus)==null?void 0:i.isClient)=="boolean"},set(e){o.success("成功设置参数 $store.state.opus.isClient"),e.$store.state.opus.isClient=!0;}},{msg:"设置参数 $store.state.playlist.isClient",check(e){var t,u,i;return typeof((i=(u=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:u.playlist)==null?void 0:i.isClient)=="boolean"},set(e){o.success("成功设置参数 $store.state.playlist.isClient=true"),e.$store.state.playlist.isClient=!0;}},{msg:"设置参数 $store.state.ver.bili",check(e){var t,u,i;return typeof((i=(u=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:u.ver)==null?void 0:i.bili)=="boolean"},set(e){o.success("成功设置参数 $store.state.ver.bili=true"),e.$store.state.ver.bili=!0;}},{msg:"设置参数 $store.state.ver.biliVer",check(e){var t,u,i;return typeof((i=(u=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:u.ver)==null?void 0:i.biliVer)=="number"},set(e){o.success("成功设置参数 $store.state.ver.biliVer=2333333"),e.$store.state.ver.biliVer=2333333;}}]);},setTinyApp(){D.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.tinyApp",check(e){var t,u,i;return typeof((i=(u=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:u.common)==null?void 0:i.tinyApp)=="boolean"},set(e){e.$store.state.common.tinyApp=!0,o.success("成功设置参数 $store.state.common.tinyApp=true");}}]);}},Kt={init(){c.onceExec("bili-pc-read-mobile-autoExpand",()=>this.autoExpand());},autoExpand(){return o.info("自动展开"),[M(`
			${ke.className.read.mobile} .limit{
				overflow: unset !important;
				max-height: unset !important;
			}`),k.addBlockCSS(ke.className.read.mobile+" .read-more")]}},eu={init(){c.execMenuOnce("bili-space-repairRealJump",()=>{this.repairRealJump();});},repairRealJump(){m.on(document,"click",e=>{let t=e.target,u=t.closest(".main .forwardingCard")||t.matches(".main .forwardingCard")&&t;if(u){s.preventEvent(e);let i=u.getAttribute("id");o.info(`获取的动态id为：${i}`);let r=oe.getUserSpaceDynamicUrl(i);k.goToUrl(r);}},{capture:!0});}},Ke={init(){ft.init(),Xt.init(),c.execMenuOnce("bili-allowCopy",()=>M(`
				.v-drawer{
					-webkit-user-select: unset !important;
					-moz-user-select: unset !important;
					user-select: unset !important;
				}
			`)),c.onceExec("listenRouterChange",()=>{this.listenRouterChange();}),c.execMenuOnce("bili-hookSetTimeout_autoOpenApp",()=>{o.info("hook  window.setTimeout autoOpenApp"),ie.setTimeout("autoOpenApp"),ie.setTimeout("bilibili://"),ie.setTimeout("void 0 !== y && document[y]");}),c.execMenuOnce("bili-overrideLaunchAppBtn_Vue_openApp",()=>{o.info("覆盖元素.launch-app-btn上的openApp"),ie.overRideLaunchAppBtn_Vue_openApp();}),c.execMenuOnce("bili-cover-bili-open-app-open",()=>{o.info("覆盖元素bili-open-app上的opener.open"),ie.overRideBiliOpenApp();}),c.execMenuOnce("bili-head-beautify",()=>{o.info("添加美化CSS"),M(kt);}),S.isVideo()?(o.info("Router: 视频稿件"),je.init()):S.isOpus()?(o.info("Router: 专栏稿件"),It.init()):ht.isReadMobile()?(o.info("PC-Router: 专栏稿件"),Kt.init()):S.isDynamic()?(o.info("Router: 动态"),Wt.init()):S.isBangumi()?(o.info("Router: 番剧"),Q.init()):S.isSearch()?(o.info("Router: 搜索"),Ut.init()):S.isLive()?(o.info("Router: 直播"),Ht.init()):S.isTopicDetail()?o.info("Router: 话题"):S.isHead()?(o.info("Router: 首页之类的"),Ee.init()):S.isSpace()?(o.info("Router: 个人空间"),eu.init()):o.error("该Router暂未适配，可能是首页之类："+window.location.href),m.ready(()=>{if(S.isBangumi()){let e=!1;D.waitVuePropToSet(()=>document.querySelector(".player-wrapper"),[{msg:"等待获取.player-wrapper上的$0.__vue__.player.player.on_video_play",check(t){var u,i;return typeof((i=(u=t==null?void 0:t.player)==null?void 0:u.player)==null?void 0:i.on_video_play)=="function"},set(t){var r,a;o.success("成功覆盖.player-wrapper上的$0.__vue__.player.player.on_video_play");let u=(a=(r=t==null?void 0:t.player)==null?void 0:r.player)==null?void 0:a.on_video_play;u.prototype.isHook&&o.warn("函数on_video_play已被hook，取消覆盖");let i=function(n){return e||(e=!0,y.$player.parseBiliH5PlayerToPlayer(t.player),y.init()),u.apply(this,arguments)};i.prototype.isHook=!0,t.player.player.on_video_play=i;}}]);}else S.isVideo()&&y.init();});},listenRouterChange(){s.waitNode("#app").then(e=>{let t=function(u){var i;return typeof((i=u==null?void 0:u.$router)==null?void 0:i.afterEach)=="function"};s.waitVueByInterval(e,t).then(()=>{let u=D.getVue(e);u!=null&&t(u)&&(o.success("成功设置监听路由变化"),e.__vue__.$router.beforeEach((i,r,a)=>{if(o.info(["路由变化 => 更新前",{to:i,from:r}]),c.getValue("bili-repairVueRouter404")&&i.name==="space"){window.location.href=i.fullPath;return}if(i.fullPath.startsWith("/video")&&r.fullPath.startsWith("/video")&&c.getValue("bili-video-forceThisPageToRefreshAndRedirect")){window.location.href=i.fullPath;return}a();}),e.__vue__.$router.afterEach((i,r)=>{if(o.info(["路由变化 => 更新后",{to:i,from:r}]),i.hash==="#/seeCommentReply"||r.hash==="#/seeCommentReply"){o.info("该路由变化判定为#/seeCommentReply，不重载");return}c.execMenu("bili-listenRouterChange",()=>{Ke.init();});}));});});}};c.init();Ke.init();ce.config.cssText.index+=`
/* bilibili颜色 #FB7299 */
.pops{
    --bili-color: #FB7299;
    --bili-color-rgb: 251, 114, 153;
}
`;ce.config.cssText.panelCSS+=`

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

})(Qmsg, Utils, DOMUtils, pops, MD5, Artplayer, artplayerPluginDanmuku, MD5);