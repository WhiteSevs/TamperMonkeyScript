// ==UserScript==
// @name         【移动端】bilibili优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.7.27
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

(a=>{function e(n){if(typeof n!="string")throw new TypeError("cssText must be a string");let p=document.createElement("style");return p.setAttribute("type","text/css"),p.innerHTML=n,document.head?document.head.appendChild(p):document.body?document.body.appendChild(p):document.documentElement.childNodes.length===0?document.documentElement.appendChild(p):document.documentElement.insertBefore(p,document.documentElement.childNodes[0]),p}if(typeof GM_addStyle=="function"){GM_addStyle(a);return}e(a)})(' @charset "UTF-8";.m-video2-awaken-btn,.openapp-dialog,.m-head .launch-app-btn.m-nav-openapp,.m-head .launch-app-btn.home-float-openapp,.m-home .launch-app-btn.home-float-openapp,.m-space .launch-app-btn.m-space-float-openapp,.m-space .launch-app-btn.m-nav-openapp{display:none!important}#app .video .launch-app-btn.m-video-main-launchapp:has([class^=m-video2-awaken]),#app .video .launch-app-btn.m-nav-openapp,#app .video .mplayer-widescreen-callapp,#app .video .launch-app-btn.m-float-openapp,#app .video .m-video-season-panel .launch-app-btn .open-app{display:none!important}#app.LIVE .open-app-btn.bili-btn-warp,#app .m-dynamic .launch-app-btn.m-nav-openapp,#app .m-dynamic .dynamic-float-openapp.dynamic-float-btn,#app .m-opus .float-openapp.opus-float-btn,#app .m-opus .v-switcher .launch-app-btn.list-more,#app .m-opus .opus-nav .launch-app-btn.m-nav-openapp,#app .topic-detail .launch-app-btn.m-nav-openapp,#app .topic-detail .launch-app-btn.m-topic-float-openapp{display:none!important}#app.main-container bili-open-app.btn-download{display:none!important}#app .read-app-main bili-open-app{display:none!important} ');

(function (b, Q, ue, ae, de) {
	'use strict';

	var E=typeof GM_getValue<"u"?GM_getValue:void 0,H=typeof GM_info<"u"?GM_info:void 0,me=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,z=typeof GM_setValue<"u"?GM_setValue:void 0,fe=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,he=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,y=typeof unsafeWindow<"u"?unsafeWindow:void 0,se=window;const ve={$data:{get enable(){return c.getValue("httpx-use-cookie-enable")},get useDocumentCookie(){return c.getValue("httpx-use-document-cookie")},cookieRule:[{key:"httpx-cookie-bilibili.com",hostname:/bilibili.com/g}]},fixCookieSplit(e){return l.isNotNull(e)&&!e.trim().endsWith(";")&&(e+=";"),e},concatCookie(e,t){return l.isNull(e)?t:(e=e.trim(),t=t.trim(),e=this.fixCookieSplit(e),t.startsWith(";")&&(t=t.substring(1)),e.concat(t))},handle(e){if(e.fetch||!this.$data.enable)return;let t="",i=e.url;i.startsWith("//")&&(i=window.location.protocol+i);let r=new URL(i);this.$data.useDocumentCookie&&r.hostname.endsWith(window.location.hostname.split(".").slice(-2).join("."))&&(t=this.concatCookie(t,document.cookie.trim()));for(let n=0;n<this.$data.cookieRule.length;n++){let a=this.$data.cookieRule[n];if(r.hostname.match(a.hostname)){let s=c.getValue(a.key);if(l.isNull(s))break;t=this.concatCookie(t,s);}}l.isNotNull(t)&&(e.headers&&e.headers.Cookie?e.headers.Cookie=this.concatCookie(e.headers.Cookie,t):e.headers.Cookie=t,o.info(["Httpx => 设置cookie:",e])),e.headers&&e.headers.Cookie!=null&&l.isNull(e.headers.Cookie)&&delete e.headers.Cookie;}},ge="【移动端】bilibili优化",l=Q.noConflict(),f=ue.noConflict(),K=ae,O=se.QRCode||y.QRCode,o=new l.Log(H,y.console||se.console);var oe;const Z=((oe=H==null?void 0:H.script)==null?void 0:oe.name)||ge,be=new l.GM_Cookie,le=!1;o.config({debug:le,logMaxCount:1e3,autoClearConsole:!0,tag:!0});b.config(Object.defineProperties({html:!0,autoClose:!0,showClose:!1},{position:{get(){return c.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return c.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return c.getValue("qmsg-config-showreverse",!0)}},zIndex:{get(){let e=Q.getMaxZIndex(),t=ae.config.InstanceUtils.getPopsMaxZIndex(e).zIndex;return Q.getMaxValue(e,t)+100}}}));const ye=new l.GM_Menu({GM_getValue:E,GM_setValue:z,GM_registerMenuCommand:me,GM_unregisterMenuCommand:fe}),N=new l.Httpx(he);N.interceptors.request.use(e=>(ve.handle(e),e));N.interceptors.response.use(void 0,e=>(o.error(["拦截器-请求错误",e]),e.type==="onabort"?b.warning("请求取消"):e.type==="onerror"?b.error("请求异常"):e.type==="ontimeout"?b.error("请求超时"):b.error("其它错误"),e));N.config({logDetails:le});const J={Object:{defineProperty:y.Object.defineProperty},Function:{apply:y.Function.prototype.apply,call:y.Function.prototype.call},Element:{appendChild:y.Element.prototype.appendChild},setTimeout:y.setTimeout},A=l.addStyle.bind(l),T="GM_Panel",R="data-key",I="data-default-value",m=function(e,t,i,r,n){let a={text:e,type:"switch",description:n,attributes:{},getValue(){return !!c.getValue(t,i)},callback(s,p){o.success(`${p?"开启":"关闭"} ${e}`),c.setValue(t,!!p);},afterAddToUListCallBack:void 0};return a.attributes&&(a.attributes[R]=t,a.attributes[I]=!!i),a},xe=function(e,t,i,r,n,a="",s){let p={text:e,type:"textarea",attributes:{},description:r,placeholder:a,disabled:s,getValue(){return c.getValue(t,i)},callback(v,d){c.setValue(t,d);}};return p.attributes&&(p.attributes[R]=t,p.attributes[I]=i),p},X=function(e,t,i,r,n,a){let s=[];typeof r=="function"?s=r():s=r;let p={text:e,type:"select",description:a,attributes:{},getValue(){return c.getValue(t,i)},callback(v,d,h){c.setValue(t,d),typeof n=="function"&&n(v,d,h);},data:s};return p.attributes&&(p.attributes[R]=t,p.attributes[I]=i),p},we={id:"panel-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("监听路由-重载所有功能","bili-listenRouterChange",!0,void 0,"用于处理页面跳转(本页)时功能不生效问题"),m("修复点击UP主正确进入空间","bili-repairEnterUserHome",!0,void 0,"可以修复点击UP主进入个人空间但是跳转404的问题"),m("新标签页打开","bili-go-to-url-blank",!1,void 0,"通过开启【覆盖点击事件】相关的设置，通过新标签页打开链接")]}]},{text:"变量设置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("isLogin","bili-setLogin",!0,void 0,"$store.state.common.noCallApp=true<br>$store.state.common.userInfo.isLogin=true<br>$store.state.loginInfo.isLogin=true"),m("isClient","bili-setIsClient",!0,void 0,"$store.state.video.isClient=true<br>$store.state.opus.isClient=true<br>$store.state.playlist.isClient=true<br>$store.state.ver.bili=true<br>$store.state.ver.biliVer=2333"),m("tinyApp","bili-setTinyApp",!0,void 0,"$store.state.common.tinyApp=true")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("覆盖.launch-app-btn openApp","bili-overrideLaunchAppBtn_Vue_openApp",!0,void 0,"覆盖.launch-app-btn元素上的openApp函数，可阻止点击唤醒/下载App"),m("劫持setTimeout-autoOpenApp","bili-hookSetTimeout_autoOpenApp",!0,void 0,"阻止自动调用App")]}]}]},{text:"",type:"forms",forms:[{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[X("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,i)=>{o.info("设置当前Qmsg弹出位置"+i);},"Toast显示在页面九宫格的位置"),X("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),m("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]},{text:"Cookie配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("启用","httpx-use-cookie-enable",!1,void 0,"启用后，将根据下面的配置进行添加cookie"),m("使用document.cookie","httpx-use-document-cookie",!1,void 0,"自动根据请求的域名来获取对应的cookie"),xe("bilibili.com","httpx-cookie-bilibili.com","",void 0,void 0,"Cookie格式：xxx=xxxx;xxx=xxxx")]}]}]}]},k={isVideo(){return window.location.pathname.startsWith("/video/")},isBangumi(){return window.location.pathname.startsWith("/bangumi/")},isSearch(){return window.location.pathname.startsWith("/search")},isLive(){return window.location.hostname==="live.bilibili.com"},isOpus(){return window.location.pathname.startsWith("/opus")},isTopicDetail(){return window.location.pathname.startsWith("/topic-detail")},isDynamic(){return window.location.pathname.startsWith("/dynamic")},isHead(){return window.location.pathname==="/"||window.location.pathname.startsWith("/channel")}},ke={isPC(){return window.location.hostname==="www.bilibili.com"},isReadMobile(){return this.isPC()&&window.location.pathname.startsWith("/read/mobile")}},_e={id:"panel-video",title:"视频",isDefault(){return k.isVideo()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("修复视频底部区域高度","bili-video-repairVideoBottomAreaHeight",!0,void 0,"添加margin-top"),m("自动点击【继续在网页观看】","bili-video-autoClickContinueToWatchOnTheWebpage",!0,void 0,"可避免弹窗出现且自动点击后播放视频"),m("美化显示","bili-video-beautify",!0,void 0,"调整底部推荐视频卡片样式类似哔哩哔哩App"),m("手势返回关闭评论区","bili-video-gestureReturnToCloseCommentArea",!0,void 0,"当浏览器手势触发浏览器回退页面时，关闭评论区"),m("initPlayer","bili-video-initPlayer",!0,void 0,"自动执行初始化播放器"),m("强制本页刷新跳转","bili-video-forceThisPageToRefreshAndRedirect",!1,void 0,"用于解决跳转播放视频时，播放当前视频会有上一个播放视频的声音的情况")]}]},{text:"变量设置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("playBtnNoOpenApp","bili-video-setVideoPlayer",!0,void 0,"playBtnNoOpenApp=true<br>playBtnOpenApp=false<br>coverOpenApp=false"),m("解锁充电限制","bili-video-unlockUpower",!1,void 0,"is_upower_exclusive=true<br>is_upower_play=false<br>is_upower_preview=false")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("相关视频","bili-video-cover-bottomRecommendVideo",!0,void 0,"点击下面的相关视频可正确跳转至该视频"),m("选集","bili-video-cover-seasonNew",!0,void 0,"点击下面的选集列表内的视频可正确跳转至该视频")]}]},{text:"网络拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("解锁清晰度","bili-video-xhr-unlockQuality",!0,void 0,"最高清晰度为720P")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("阻止调用App","bili-video-hook-callApp",!0,void 0,"处理函数: PlayerAgent")]}]}]}]},$e={id:"panel-bangumi",title:"番剧",isDefault(){return k.isBangumi()},forms:[{text:"",type:"forms",forms:[{text:"变量设置",type:"deepMenu",forms:[{text:"变量设置",type:"forms",forms:[m("pay","bili-bangumi-setPay",!0,void 0,"$store.state.userStat.pay=1<br>$store.state.mediaInfo.user_status.pay=1")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("【选集】","bili-bangumi-cover-clicl-event-chooseEp",!0,void 0,"让【选集】的视频列表可点击跳转"),m("【其它】","bili-bangumi-cover-clicl-event-other",!0,void 0,"让【PV&其他】、【预告】、【主题曲】、【香境剧场】等的视频列表可点击跳转"),m("【更多推荐】","bili-bangumi-cover-clicl-event-recommend",!0,void 0,"让【更多推荐】的视频列表可点击跳转")]}]},{text:"网络拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("解锁清晰度","bili-bangumi-xhr-unlockQuality",!0,void 0,"最高清晰度为720P")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("阻止调用App","bili-bangumi-hook-callApp",!0,void 0,"")]}]}]}]},Ce={id:"panel-search",title:"搜索",isDefault(){return k.isSearch()},forms:[]},Se={id:"panel-live",title:"直播",isDefault(){return k.isLive()},forms:[{text:"",type:"forms",forms:[{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("【屏蔽】聊天室","bili-live-block-chatRoom",!1,void 0,"直接不显示底部的聊天室"),m("【屏蔽】xxx进入直播间","bili-live-block-brush-prompt",!1,void 0,"直接不显示底部的xxx进入直播间"),m("【屏蔽】控制面板","bili-live-block-control-panel",!1,void 0,"屏蔽底部的发个弹幕、送礼")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("阻止open-app-btn元素点击事件触发","bili-live-prevent-openAppBtn",!0,void 0,"开启后可不跳转至唤醒App页面")]}]}]}]},Ae={id:"panel-opus",title:"专栏",isDefault(){return k.isOpus()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("自动展开阅读全文","bili-opus-automaticallyExpandToReadFullText",!0,void 0,"屏蔽【展开阅读全文】按钮并自动处理全文高度")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("话题","bili-opus-cover-topicJump",!0,void 0,"点击话题正确跳转"),m("header用户","bili-opus-cover-header",!0,void 0,"点击内容上的发布本动态的用户正确跳转个人空间")]}]}]}]},Ve={id:"panel-dynamic",title:"动态",isDefault(){return k.isDynamic()},forms:[{text:"",type:"forms",forms:[{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("话题","bili-dynamic-cover-topicJump",!0,void 0,"点击话题正确跳转"),m("header用户","bili-dynamic-cover-header",!0,void 0,"点击内容上的发布本动态的用户正确跳转个人空间"),m("@用户","bili-dynamic-cover-atJump",!0,void 0,"点击@用户正确跳转个人空间"),m("引用","bili-dynamic-cover-referenceJump",!0,void 0,"点击引用的视频|用户正确跳转")]}]}]}]},Me={id:"panel-topic-detail",title:"话题",isDefault(){return k.isTopicDetail()},forms:[]},P={appkey:"4409e2ce8ffd12b8",appsec:"59b43e04ad6965f34319062b478f83dd"};function Y(e,t,i){e.appkey=t;const r=new URLSearchParams(e);return r.sort(),de(r.toString()+i)}const u={getVue(e){return e==null?void 0:e.__vue__},waitVuePropToSet(e,t){function i(){let r=null;return typeof e=="string"?r=document.querySelector(e):typeof e=="function"?r=e():e instanceof HTMLElement&&(r=e),r}t.forEach(r=>{typeof r.msg=="string"&&o.info(r.msg);function n(){let a=i();if(a==null)return !1;let s=u.getVue(a);return s==null?!1:!!r.check(s)}l.waitVueByInterval(()=>i(),n,250,1e4).then(a=>{if(!a)return;let s=i(),p=u.getVue(s);p!=null&&r.set(p);});});},goToUrl(e,t=!1){let i=document.querySelector("#app");if(i==null){b.error("跳转Url: 获取根元素#app失败"),o.error("跳转Url: 获取根元素#app失败："+e);return}let r=u.getVue(i);if(r==null){o.error("获取#app的vue属性失败"),b.error("获取#app的vue属性失败");return}let n=r.$router,a=c.getValue("bili-go-to-url-blank");if(o.info("即将跳转URL："+e),t&&(a=!1),a)window.open(e,"_blank");else {if(e.startsWith("http")||e.startsWith("//")){e.startsWith("//")&&(e=window.location.protocol+e);let s=new URL(e);if(s.origin===window.location.origin)e=s.pathname+s.search+s.hash;else {o.info("不同域名，直接本页打开，不用Router："+e),window.location.href=e;return}}o.info("$router push跳转Url："+e),n.push(e);}},goToLogin(e=""){window.open(`https://passport.bilibili.com/h5-app/passport/login?gourl=${encodeURIComponent(e)}`);},parseDuration(e){if(typeof e!="number"&&(e=parseInt(e)),isNaN(e))return e.toString();function t(i){return i<10?`0${i}`:i}return e<60?`0:${t(e)}`:e>=60&&e<3600?`${Math.floor(e/60)}:${t(e%60)}`:`${Math.floor(e/3600)}:${t(Math.floor(e/60)%60)}:${t(e%60)}`},hookGestureReturnByVueRouter(e){function t(){o.success("触发popstate事件"),r(!0);}function i(){o.success("监听地址改变"),e.vueObj.$router.history.push(e.hash),f.on(window,"popstate",t);}async function r(n=!1){if(f.off(window,"popstate",t),!e.callback(n))for(;;)if(e.vueObj.$router.history.current.hash===e.hash)o.info("后退！"),e.vueObj.$router.back(),await l.sleep(250);else return}return i(),{resumeBack:r}},loadScript(e){let t=document.createElement("script");return t.src=e,document.head.appendChild(t),new Promise(i=>{t.onload=function(){o.success("script标签加载完毕："+e),setTimeout(()=>{i(!0);},100);};})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(i=>{Array.isArray(i)?t=t.concat(i):t.push(i);}),A(`${t.join(`,
`)}{display: none !important;}`)}};function ce(e){return (e==null?void 0:e.code)===0&&((e==null?void 0:e.message)==="0"||(e==null?void 0:e.message)==="success")}const j={async getQrCodeInfo(){var a;let e="https://passport.bilibili.com/x/passport-tv-login/qrcode/auth_code",t={appkey:P.appkey,local_id:"0",csrf:((a=be.get("bili_jct"))==null?void 0:a.value)||"",ts:"0"},i=Y(t,P.appkey,P.appsec),r=await N.post(e,{data:l.toSearchParamsStr({...t,sign:i}),headers:{"Content-Type":"application/x-www-form-urlencoded"},responseType:"json",fetch:!0});if(o.info(r),!r.status)return;let n=l.toJSON(r.data.responseText);if(n.code!==0){b.error(n.message);return}return n.data},async poll(e){let t="https://passport.bilibili.com/x/passport-tv-login/qrcode/poll",i={appkey:P.appkey,auth_code:e,local_id:"0",ts:"0"},r=Y(i,P.appkey,P.appsec),n=await N.post(t,{data:l.toSearchParamsStr({...i,sign:r}),headers:{"Content-Type":"application/x-www-form-urlencoded"},responseType:"json",fetch:!0});if(!n.status)return {success:!1,message:"网络错误",action:void 0};const a=l.toJSON(n.data.responseText),s={0:"成功","-3":"API校验密匙错误","-400":"请求错误","-404":"啥都木有",86038:"二维码已失效",86039:"二维码尚未确认",86090:"二维码已扫码未确认"};if(!ce(a)){const d=a.code.toString(),h=a.message||s[d]||"未知错误";return d==="86038"?{success:!1,message:h,action:"refresh"}:d==="86039"||d==="86090"?{success:!1,message:h,action:"wait"}:{success:!1,message:h,action:void 0}}const p=a.data.access_token,v=Date.now()+a.data.expires_in*1e3;return {success:!0,message:"获取成功",accessKey:p,accessKeyExpireAt:v}}},L={async init(){b.info("正在申请二维码...");let e=await this.getQRCodeInfo();e&&this.confirmScanQrcode(e);},getQRCodeInfo:async function(){o.info("正在申请二维码...");let e=await j.getQrCodeInfo();return o.info(["获取到二维码信息",e]),e},async confirmScanQrcode(e){let t=K.alert({title:{text:"请扫描二维码登录",position:"center",html:!1,style:""},content:{text:'<div id="bili-qrcode-canvas"></div>',html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(a){n=!0,a.close();}}},mask:{enable:!0,clickEvent:{toClose:!1,toHide:!1}},only:!0,width:"310px",height:"365px",drag:!0,dragLimit:!0,style:`
            #bili-qrcode-canvas{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
            }
            `}),i=t.$shadowRoot.querySelector("#bili-qrcode-canvas"),r=new O(i,{text:e.url,width:300,height:300,colorDark:"#000000",colorLight:"#ffffff",correctLevel:O.CorrectLevel.H}),n=!1;for(;;){if(n){o.error("用户关闭扫码登录弹窗、取消扫码登录");break}o.info("正在等待扫码登录...");let a=await j.poll(e.auth_code);if(a!=null&&a.success){this.setAccessTokenInfo({access_token:a.accessKey,expireAt:a.accessKeyExpireAt}),o.info(["扫码登录成功",a]),o.success("扫码登录成功"),b.success("扫码登录成功");break}else if((a==null?void 0:a.action)==="refresh"){o.info("刷新二维码"),b.info("刷新二维码");let s=await this.getQRCodeInfo();s&&(r.clear(),r.makeCode(s.url));}else if(a.action==="wait")a.message==="二维码已扫码未确认"&&(o.info("已扫码，等待确认..."),K.loading({parent:i,content:{text:"已扫码，等待确认"},mask:{enable:!0}}));else {o.error(a.message),b.error(a.message);break}await l.sleep(1500);}t.close();},generateExpireAt(e=6){return new Date().getTime()+1e3*60*60*24*30*e},setAccessTokenInfo(e){z("bili-accessTokenInfo",e);},getAccessTokenInfo(){let e=E("bili-accessTokenInfo");return e&&e.expireAt>Date.now()?e:null},getAccessToken(){var e;return ((e=this.getAccessTokenInfo())==null?void 0:e.access_token)||""}},Te=function(e,t,i,r,n,a="",s,p){let v={text:e,type:"input",isNumber:!!s,isPassword:!!p,attributes:{},description:r,getValue(){return c.getValue(t,i)},callback(d,h){typeof n=="function"&&n(d,h)||c.setValue(t,h);},placeholder:a};return v.attributes&&(v.attributes[R]=t,v.attributes[I]=i),v},Pe={id:"panel-head",title:"首页",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("美化显示","bili-head-beautify",!0,void 0,"调整瀑布流视频卡片样式类似哔哩哔哩App"),m("补充推荐视频信息","bili-head-supplementaryVideoStreamingInformation",!0,void 0,"给视频添加UP主名，当前视频总时长信息")]}]},{text:"推荐视频",type:"deepMenu",forms:[{text:"",type:"forms",forms:[m("启用","bili-head-recommend-enable",!1,void 0,"添加【推荐】标签，数据来源为App端(如果填入了access_token的话)"),m("显示【图文】","bili-head-recommend-push-graphic",!0,void 0,"加载App端推送的【图文】卡片"),Te("access_token","bili-head-recommend-access_token",L.getAccessToken(),"填入access_token，即可获取推荐视频数据",(e,t,i)=>{L.setAccessTokenInfo({access_token:t,expireAt:L.generateExpireAt()});},void 0,!1,!0)]}]}]}]},_={data:null,oneSuccessExecMenu:null,onceExec:null,listenData:null},c={$data:{get data(){return _.data==null&&(_.data=new l.Dictionary),_.data},get oneSuccessExecMenu(){return _.oneSuccessExecMenu==null&&(_.oneSuccessExecMenu=new l.Dictionary),_.oneSuccessExecMenu},get onceExec(){return _.onceExec==null&&(_.onceExec=new l.Dictionary),_.onceExec},get scriptName(){return Z},key:T,attributeKeyName:R,attributeDefaultValueName:I},$listener:{get listenData(){return _.listenData==null&&(_.listenData=new l.Dictionary),_.listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},initExtensionsMenu(){y.top===y.self&&ye.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPanel();}},{key:"go_to_login",text:"🛠 前往登录",autoReload:!1,isStoreValue:!1,showText(e){return e},callback(){u.goToLogin();}},{key:"go_to_login_to_parse_access_key",text:"🛠 扫码并解析access_key",autoReload:!1,isStoreValue:!1,showText(e){return e},callback(){L.init();}}]);},initPanelDefaultValue(){let e=this;function t(n){if(!n.attributes)return;let a=n.attributes[R],s=n.attributes[I];if(a==null){o.warn(["请先配置键",n]);return}e.$data.data.has(a)&&o.warn("请检查该key(已存在): "+a),e.$data.data.set(a,s);}function i(n){for(let a=0;a<n.length;a++){let s=n[a];t(s);let p=s.forms;p&&Array.isArray(p)&&i(p);}}let r=this.getPanelContentConfig();for(let n=0;n<r.length;n++){let a=r[n];if(!a.forms)continue;let s=a.forms;s&&Array.isArray(s)&&i(s);}},setValue(e,t){let i=E(T,{}),r=i[e];i[e]=t,z(T,i),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,r,t);},getValue(e,t){let r=E(T,{})[e];return r??(this.$data.data.has(e)?this.$data.data.get(e):t)},deleteValue(e){let t=E(T,{}),i=t[e];Reflect.deleteProperty(t,e),z(T,t),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,i,void 0);},addValueChangeListener(e,t){let i=Math.random();return this.$listener.listenData.set(e,{id:i,key:e,callback:t}),i},removeValueChangeListener(e){let t=null;for(const[i,r]of this.$listener.listenData.entries())if(r.id===e){t=i;break}this.$listener.listenData.delete(t);},hasKey(e){let t=E(T,{});return e in t},execMenu(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){o.warn(`${e} 键不存在`);return}let i=c.getValue(e);i&&t(i);},execMenuOnce(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){o.warn(`${e} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(e))return;this.$data.oneSuccessExecMenu.set(e,1);let i=[],r=s=>{let p=c.getValue(e);n(p,s);},n=(s,p)=>{let v=[];if(s){let d=p??t(s,r);d instanceof HTMLStyleElement?v=[d]:Array.isArray(d)&&(v=[...d.filter(h=>h!=null&&h instanceof HTMLStyleElement)]);}for(let d=0;d<i.length;d++)i[d].remove(),i.splice(d,1),d--;i=[...v];};this.addValueChangeListener(e,(s,p,v)=>{n(v);});let a=c.getValue(e);a&&n(a);},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(t(),this.$data.onceExec.set(e,1));},showPanel(){K.panel({title:{text:`${Z}-设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:this.isMobile(),width:this.getWidth(),height:this.getHeight(),drag:!0,only:!0});},isMobile(){return window.outerWidth<550},getWidth(){return window.outerWidth<550?"92vw":"550px"},getHeight(){return window.outerHeight>450?"80vh":"450px"},getPanelContentConfig(){return [we,Pe,_e,Ae,Ve,$e,Me,Ce,Se]}},Be=`@charset "UTF-8";\r
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
`,q={$isHook:{windowPlayerAgent:!1,hookWebpackJsonp_openApp:!1,overRideLaunchAppBtn_Vue_openApp:!1},$data:{setTimeout:[]},windowWebPack(e="webpackJsonp",t,i){let r;J.Object.defineProperty(y,e,{get(){return r},set(n){o.success("成功劫持webpack，当前webpack名："+e),r=n;const a=r.push;r.push=function(...s){let p=s[0][0];return (t==p||Array.isArray(t)&&Array.isArray(p)&&JSON.stringify(t)===JSON.stringify(p))&&Object.keys(s[0][1]).forEach(v=>{let d=s[0][1][v];s[0][1][v]=function(...h){let x=d.call(this,...h);return h[0]=i(h[0]),x};}),a.call(this,...s)};}});},windowPlayerAgent(){if(this.$isHook.windowPlayerAgent)return;this.$isHook.windowPlayerAgent=!0;let e;J.Object.defineProperty(y,"PlayerAgent",{get(){return new Proxy({},{get(t,i){return i==="openApp"?function(...r){let n=r[0];if(o.info(["调用PlayerAgent.openApp",n]),n.event==="fullScreen"){let a=document.querySelector(".mplayer-btn-widescreen");a?a.click():o.warn("主动再次点击全屏按钮失败，原因：未获取到.mplayer-btn-widescreen元素");}}:e[i]}})},set(t){e=t;}});},setTimeout(e){if(this.$data.setTimeout.push(e),this.$data.setTimeout.length>1){o.info("window.setTimeout hook新增劫持判断参数："+e);return}y.setTimeout=function(...t){let i=t[0].toString();if(i.match(e)){o.success(["劫持setTimeout的函数",i]);return}return J.setTimeout.apply(this,t)};},overRideLaunchAppBtn_Vue_openApp(){if(this.$isHook.overRideLaunchAppBtn_Vue_openApp)return;this.$isHook.overRideLaunchAppBtn_Vue_openApp=!0;function e(t){typeof t.openApp!="function"||t.openApp.toString().includes("阻止唤醒App")||(t.openApp=function(...r){o.success(["openApp：阻止唤醒App",r]);});}l.mutationObserver(document,{config:{subtree:!0,childList:!0,attributes:!0},callback(){document.querySelectorAll(".launch-app-btn").forEach(t=>{let i=u.getVue(t);i&&(e(i),i.$children&&i.$children.length&&i.$children.forEach(r=>{e(r);}));});}});}},Ee={init(){c.execMenuOnce("bili-video-hook-callApp",()=>{o.info("hook window.PlayerAgent"),q.windowPlayerAgent();});}},G={getUserSpaceUrl(e){return `https://m.bilibili.com/space/${e}`},getUserSpaceDynamicUrl(e){return `https://m.bilibili.com/dynamic/${e}`},getUserSpaceOpusUrl(e){return `https://m.bilibili.com/opus/${e}`},getVideoUrl(e){return `https://m.bilibili.com/video/${e}`}},g={className:{bangumi:"#app.main-container",dynamic:"#app .m-dynamic",opus:"#app .m-opus",search:"#app .m-search","topic-detail":"#app .topic-detail",video:"#app .video",head:"#app .m-head"}},ee={className:{read:{mobile:"#app .read-app-main"}}},Ne=`@charset "UTF-8";\r
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
#app .video .video-list .card-box .gm-right-container .gm-up-name,\r
#app .video .video-list .card-box .gm-right-container .left {\r
	color: #999;\r
	font-size: 3vmin;\r
	transform-origin: left;\r
	display: flex;\r
	align-items: safe center;\r
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
	margin-top: 0;\r
	display: -webkit-box;\r
	-webkit-line-clamp: 2;\r
	-webkit-box-orient: vertical;\r
	overflow: hidden;\r
}\r
`,Re={$data:{isInitPlayer:!1,isUnlockUpower:!1},init(){c.execMenu("bili-video-initPlayer",()=>{this.initPlayer();}),c.execMenu("bili-video-setVideoPlayer",()=>{this.setVideoPlayer();}),c.execMenu("bili-video-unlockUpower",()=>{this.unlockUpower();});},initPlayer(){if(this.$data.isInitPlayer)return;this.$data.isInitPlayer=!0;let e=this;l.waitNode("#bilibiliPlayer",3e3).then(async t=>{if(!t){e.$data.isInitPlayer=!1;return}await l.sleep(300),u.waitVuePropToSet(".m-video-player",[{msg:"等待设置参数 fullScreenCallApp",check(i){return typeof(i==null?void 0:i.fullScreenCallApp)=="boolean"},set(i){i.fullScreenCallApp=!1,o.success("成功设置参数 fullScreenCallApp=false");}},{msg:"等待设置参数 gameMode",check(i){return typeof(i==null?void 0:i.gameMode)=="boolean"},set(i){i.gameMode=!0,o.success("成功设置参数 gameMode=true");}},{msg:"等待获取函数 initPlayer()",check(i){return typeof(i==null?void 0:i.initPlayer)=="function"},set(i){e.$data.isInitPlayer=!1;function r(){let n,a,s=1,p=!1,v=new l.LockFunction(async()=>{var x,w,C,V;let d=document.querySelector("#bilibiliPlayer video"),h=document.querySelector("#bilibiliPlayer img.mplayer-poster");if(d&&h&&h.src!==""){p=!0,(x=y==null?void 0:y.player)==null||x.off("restart_call_app"),(w=y==null?void 0:y.player)==null||w.off("force_call_app_show"),o.success("<video>标签和视频封面图已成功初始化");return}y.BPlayerMobile==null&&(o.error("未加载player播放器，主动引入script标签"),await u.loadScript("https://s1.hdslb.com/bfs/static/player/main/html5/mplayer.js?v=2862592")),i.initPlayer(!0),o.success("第 "+s+" 次未检测到视频，调用初始化视频函数 initPlayer()"),await l.sleep(300),(C=y==null?void 0:y.player)==null||C.off("restart_call_app"),(V=y==null?void 0:y.player)==null||V.off("force_call_app_show"),s++;});n=setInterval(async()=>{await v.run(),p&&(clearTimeout(a),clearInterval(n));},600),a=setTimeout(()=>{o.warn("检测视频超时3s，取消检测"),clearInterval(n);},3e3);}r();}}]);});},unlockUpower(){u.waitVuePropToSet(g.className.video,[{msg:"设置属性 __vue__.info.is_upower_exclusive",check(e){var t;return typeof((t=e==null?void 0:e.info)==null?void 0:t.is_upower_exclusive)=="boolean"},set(e){e.info.is_upower_exclusive=!1,o.success("成功设置属性  __vue__.info.is_upower_exclusive=false");}},{msg:"设置属性 __vue__.info.is_upower_play",check(e){var t;return typeof((t=e==null?void 0:e.info)==null?void 0:t.is_upower_play)=="boolean"},set(e){e.info.is_upower_play=!1,o.success("成功设置属性  __vue__.info.is_upower_play=false");}},{msg:"设置属性 __vue__.info.is_upower_preview",check(e){var t;return typeof((t=e==null?void 0:e.info)==null?void 0:t.is_upower_preview)=="boolean"},set(e){e.info.is_upower_preview=!1,o.success("成功设置属性  __vue__.info.is_upower_preview=false");}}]);},setVideoPlayer(){u.waitVuePropToSet(g.className.video+" .m-video-player",[{msg:"设置参数 playBtnNoOpenApp",check(e){return typeof e.playBtnNoOpenApp=="boolean"},set(e){e.playBtnNoOpenApp=!0,o.success("成功设置参数 playBtnNoOpenApp=true");}},{msg:"设置参数 playBtnOpenApp",check(e){return typeof e.playBtnOpenApp=="boolean"},set(e){e.playBtnOpenApp=!1,o.success("成功设置参数 playBtnOpenApp=false");}},{msg:"设置参数 coverOpenApp",check(e){return typeof e.coverOpenApp=="boolean"},set(e){e.coverOpenApp=!1,o.success("成功设置参数 coverOpenApp=false");}}]);}},Ie={$data:{isAddBeautifyCSS:!1},init(){Ee.init(),Re.init(),c.execMenuOnce("bili-video-repairVideoBottomAreaHeight",()=>this.repairVideoBottomAreaHeight()),c.execMenuOnce("bili-video-autoClickContinueToWatchOnTheWebpage",()=>{this.autoClickContinueToWatchOnTheWebpage();}),c.execMenu("bili-video-beautify",()=>{this.beautify();}),c.execMenuOnce("bili-video-cover-bottomRecommendVideo",()=>{this.coverBottomRecommendVideo();}),c.execMenuOnce("bili-video-gestureReturnToCloseCommentArea",()=>{this.gestureReturnToCloseCommentArea();}),c.execMenuOnce("bili-video-cover-seasonNew",()=>{this.coverSeasonNew();});},beautify(){o.info("美化显示"),this.$data.isAddBeautifyCSS||(this.$data.isAddBeautifyCSS=!0,A(Ne)),l.waitNode(g.className.video+" .bottom-tab .list-view .card-box",1e4).then(e=>{if(!e){o.error("$cardBox is null");return}function t(a){var h,x;let s=a.querySelector(".title"),p=a.querySelector(".count .left"),v=!!a.querySelector(".gm-right-container"),d=u.getVue(a);if(s&&p&&d&&!v){let w=(x=(h=d==null?void 0:d.info)==null?void 0:h.owner)==null?void 0:x.name;if(w==null){o.error("美化显示-handleVCardToApp：获取up主名字失败");return}let C=a.querySelector(".count"),V=s.cloneNode(!0),W=p.cloneNode(!0);f.hide(s),C&&f.hide(C);let B=a.querySelector(".open-app.weakened");B&&f.hide(B);let M=document.createElement("div");M.className="gm-up-name",M.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${w}</span>
						`;let S=document.createElement("div"),$=document.createElement("div");S.className="gm-right-container",$.className="gm-right-bottom",f.after(s,S),S.appendChild(V),S.appendChild($),$.appendChild(M),$.appendChild(W);}}function i(a){var h,x,w;let s=a.querySelector(".title"),p=a.querySelector(".count"),v=!!a.querySelector(".gm-right-container"),d=u.getVue(a);if(s&&p&&d&&!v){let C=(h=d==null?void 0:d.info)==null?void 0:h.duration;if(C==null){o.error("美化显示-handleVCard：获取视频时长失败");return}let V=(w=(x=d==null?void 0:d.info)==null?void 0:x.owner)==null?void 0:w.name;if(V==null){o.error("美化显示-handleVCard：获取up主名字失败");return}let W=s.cloneNode(!0),B=p.cloneNode(!0);f.hide(s),f.hide(p);let M=document.createElement("div");M.className="duration",M.innerText=u.parseDuration(C),B.className="left";let S=document.createElement("div");B.appendChild(M),S.className="gm-up-name",S.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${V}</span>
						`;let $=document.createElement("div"),D=document.createElement("div");$.className="gm-right-container",D.className="gm-right-bottom",f.after(s,$),$.appendChild(W),$.appendChild(D),D.appendChild(S),D.appendChild(B);}}let r=new l.LockFunction(()=>{let a=document.querySelectorAll(g.className.video+" .bottom-tab .list-view .card-box .v-card-toapp"),s=document.querySelectorAll(g.className.video+" .bottom-tab .list-view .card-box>a.v-card");a.forEach(p=>{t(p);}),s.forEach(p=>{i(p);});},25),n=document.querySelector(g.className.video);n?l.mutationObserver(n,{config:{subtree:!0,attributes:!0,childList:!0},callback(){r.run();}}):o.error("未找到视频根节点");});},repairVideoBottomAreaHeight(){return o.info("修复视频底部区域高度"),A(`
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
		`)},autoClickContinueToWatchOnTheWebpage(){f.on(document,"click",g.className.video+" .main-info .btn",function(){o.info("触发点击【立即播放】，自动等待弹窗出现"),l.waitNode(".to-see",1e4).then(e=>{if(!e){o.error("弹窗按钮【继续在网页观看】10秒内未出现，取消等待");return}o.success("自动点击 继续在网页观看"),e.click();});});},coverBottomRecommendVideo(){o.info("覆盖 相关视频 点击事件"),f.on(document,"click",g.className.video+" .list-view .card-box .launch-app-btn",function(e){let t=e.target,i=u.getVue(t);if(!i){b.error("获取相关视频的__vue__失败");return}let r=i.bvid;if(l.isNull(r))if(i.$children&&i.$children[0]&&l.isNotNull(i.$children[0].bvid))r=i.$children[0].bvid;else {b.error("获取相关视频的bvid失败");return}o.info("相关视频的bvid: "+r),u.goToUrl(G.getVideoUrl(r)),l.preventEvent(e);},{capture:!0});},coverSeasonNew(){o.info("覆盖 选集视频列表 点击事件");function e(t){let i=t.target,r=u.getVue(i);if(!r){b.error("获取选集视频的目标视频的__vue__失败");return}let n=r.bvid;if(l.isNull(n)){b.error("获取相关视频的bvid失败");return}o.info("相关视频的bvid: "+n),u.goToUrl(G.getVideoUrl(n)),l.preventEvent(t);}f.on(document,"click",g.className.video+" .m-video-season-new .video-card .launch-app-btn",e,{capture:!0}),f.on(document,"click",g.className.video+" .m-video-season-panel .season-video-item .launch-app-btn",e,{capture:!0});},gestureReturnToCloseCommentArea(){o.info("手势返回关闭评论区，全局监听document点击.sub-reply-preview"),l.waitNode("#app").then(e=>{l.waitVueByInterval(e,()=>{var i,r;let t=u.getVue(e);return t==null?!1:typeof((r=(i=t==null?void 0:t.$router)==null?void 0:i.options)==null?void 0:r.scrollBehavior)!=null},250,1e4).then(t=>{let i=u.getVue(e);if(!i){o.error("获取#app的vue属性失败");return}let r=i.$router.options.scrollBehavior;i.$router.options.scrollBehavior=function(n,a,s){return n.hash==="#/seeCommentReply"?(o.info("当前操作为打开评论区，scrollBehavior返回null"),null):n.hash===""&&a.hash==="#/seeCommentReply"?(o.info("当前操作为关闭评论区，scrollBehavior返回null"),null):r.call(this,...arguments)};});}),f.on(document,"click",".sub-reply-preview",function(e){let t=document.querySelector("#app"),i=u.getVue(t);if(!i){o.error("获取#app元素失败");return}let r=u.hookGestureReturnByVueRouter({vueObj:i,hash:"#/seeCommentReply",callback(n){if(!n)return !1;let a=document.querySelector(".dialog-close-icon");return a?a.click():o.error("评论区关闭失败，原因：元素dialog-close-icon获取失败"),!0}});l.waitNode(".dialog-close-icon").then(n=>{f.on(n,"click",function(){r.resumeBack(!1);},{capture:!0,once:!0});});});}},Ue={init(){c.execMenu("bili-bangumi-setPay",()=>{this.setPay();});},setPay(){u.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.userStat.pay",check(e){var t,i,r;return typeof typeof((r=(i=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:i.userStat)==null?void 0:r.pay)=="number"},set(e){o.success("成功设置参数 $store.state.userStat.pay=1"),e.$store.state.userStat.pay=1;}},{msg:"设置参数 $store.state.mediaInfo.user_status.pay",check(e){var t,i,r,n;return typeof((n=(r=(i=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:i.mediaInfo)==null?void 0:r.user_status)==null?void 0:n.pay)=="number"},set(e){o.success("成功设置参数 $store.state.mediaInfo.user_status.pay=1"),e.$store.state.mediaInfo.user_status.pay=1;}}]);}},U={getUrl(e){if(e!=null)return e.getAttribute("universallink")},jumpToUrl(e){let i=e.target.querySelector("bili-open-app");if(i){let r=U.getUrl(i);r?u.goToUrl(r):(b.error("获取bili-open-app的Url失败"),o.error("获取bili-open-app的Url失败"));}else b.error("未获取到<bili-open-app>元素"),o.error("未获取到<bili-open-app>元素");}},Le={init(){Ue.init(),c.execMenuOnce("bili-bangumi-hook-callApp",()=>{this.hookCallApp();}),c.execMenu("bili-bangumi-cover-clicl-event-chooseEp",()=>{this.setChooseEpClickEvent();}),c.execMenu("bili-bangumi-cover-clicl-event-other",()=>{this.setClickOtherVideo();}),c.execMenu("bili-bangumi-cover-clicl-event-recommend",()=>{this.setRecommendClickEvent();});},hookCallApp(){let e=y.setTimeout;y.setTimeout=function(...t){if(t[0].toString().includes("autoOpenApp")){o.success(["阻止唤醒App",t]);return}return e.apply(this,t)};},setPay(){u.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.userStat.pay",check(e){var t,i,r;return typeof typeof((r=(i=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:i.userStat)==null?void 0:r.pay)=="number"},set(e){o.success("成功设置参数 $store.state.userStat.pay=1"),e.$store.state.userStat.pay=1;}},{msg:"设置参数 $store.state.mediaInfo.user_status.pay",check(e){var t,i,r,n;return typeof((n=(r=(i=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:i.mediaInfo)==null?void 0:r.user_status)==null?void 0:n.pay)=="number"},set(e){o.success("成功设置参数 $store.state.mediaInfo.user_status.pay=1"),e.$store.state.mediaInfo.user_status.pay=1;}}]);},setChooseEpClickEvent(){l.waitNode(g.className.bangumi+" .ep-list-pre-wrapper ul.ep-list-pre-container").then(e=>{o.info("覆盖【选集】的点击事件"),f.on(e,"click","li.episode-item",function(t){l.preventEvent(t),U.jumpToUrl(t);},{capture:!0});}),l.waitNode(g.className.bangumi+" .ep-list-pre-wrapper ul.season-list-wrapper").then(e=>{o.info("覆盖【xx季】的点击事件"),f.on(e,"click","li",function(t){l.preventEvent(t),U.jumpToUrl(t);},{capture:!0});}),l.waitNode(g.className.bangumi+" .ep-list-pre-header").then(e=>{o.info("覆盖【选集】右上角的【全xx话】Arrow的点击事件"),f.on(e,"click",function(t){l.preventEvent(t);},{capture:!0});});},setClickOtherVideo(){l.waitNode(g.className.bangumi+" .section-preview-wrapper ul.ep-list-pre-container").then(e=>{o.info("覆盖【PV&其他】、【预告】、【主题曲】的点击事件"),f.on(e,"click","li.section-preview-item",function(t){l.preventEvent(t),U.jumpToUrl(t);},{capture:!0});}),l.waitNode(g.className.bangumi+" .section-preview-header").then(e=>{o.info("覆盖【PV&其他】、【预告】、【主题曲】右上角的Arrow的点击事件"),f.on(e,"click",function(t){l.preventEvent(t);},{capture:!0});});},setRecommendClickEvent(){l.waitNode(g.className.bangumi+" .recom-wrapper ul.recom-list").then(e=>{o.info("覆盖【更多推荐】番剧的点击事件"),f.on(e,"click","li.recom-item-v2",function(t){l.preventEvent(t),U.jumpToUrl(t);},{capture:!0});});}},De={init(){c.execMenuOnce("bili-live-block-chatRoom",()=>this.blockChatRoom()),c.execMenuOnce("bili-live-block-brush-prompt",()=>this.blockBrushPrompt()),c.execMenuOnce("bili-live-block-control-panel",()=>this.blockControlPanel());},blockChatRoom(){return o.info("屏蔽聊天室"),u.addBlockCSS("#chat-items")},blockBrushPrompt(){return o.info("屏蔽xxx进入直播间"),u.addBlockCSS("#brush-prompt")},blockControlPanel(){return o.info("屏蔽底部工具栏"),u.addBlockCSS(".control-panel")}},He={init(){De.init(),c.execMenuOnce("bili-live-prevent-openAppBtn",()=>{this.preventOpenAppBtn();});},preventOpenAppBtn(){l.waitNode("body").then(e=>{o.info("阻止.open-app-btn元素触发点击事件"),f.on(e,"click",".open-app-btn",function(t){l.preventEvent(t);},{capture:!0}),f.on(e,"click","#web-player-controller-wrap-el",function(t){l.preventEvent(t);},{capture:!0});});}},qe={init(){c.execMenuOnce("bili-opus-cover-topicJump",()=>{this.coverTopicJump();}),c.execMenuOnce("bili-opus-automaticallyExpandToReadFullText",()=>this.automaticallyExpandToReadFullText()),c.execMenuOnce("bili-opus-cover-header",()=>{this.coverHeaderJump();});},coverTopicJump(){o.info("覆盖话题跳转点击事件"),f.on(document,"click",g.className.opus+" .launch-app-btn.opus-module-topic",function(e){var a;let t=e.target,i=u.getVue(t);if(!i){b.error("获取话题的__vue__失败");return}let r=(a=i==null?void 0:i.$props)==null?void 0:a.data,n=r==null?void 0:r.jump_url;if(l.isNull(n)){b.error("获取话题的jump_url失败");return}o.info(["话题的跳转信息: ",r]),u.goToUrl(n);},{capture:!0});},automaticallyExpandToReadFullText(){return o.info("自动展开阅读全文"),[u.addBlockCSS(g.className.opus+" .opus-read-more"),A(`
			${g.className.opus} .opus-module-content{
				overflow: unset !important;
				max-height: unset !important;
			}
			`)]},coverHeaderJump(){o.info("覆盖header点击事件"),f.on(document,"click",g.className.opus+" .opus-module-author",function(e){var n;l.preventEvent(e);let t=e.target,i=u.getVue(t);if(!i){b.error("获取vue属性失败");return}let r=(n=i==null?void 0:i.data)==null?void 0:n.mid;if(!r){b.error("获取mid失败");return}u.goToUrl(G.getUserSpaceUrl(r));},{capture:!0});}},ze={init(){c.execMenuOnce("bili-dynamic-cover-topicJump",()=>{this.coverTopicJump();}),c.execMenuOnce("bili-dynamic-cover-atJump",()=>{this.coverAtJump();}),c.execMenuOnce("bili-dynamic-cover-referenceJump",()=>{this.coverReferenceJump();}),c.execMenuOnce("bili-dynamic-cover-header",()=>{this.coverHeaderJump();});},coverHeaderJump(){o.info("覆盖header点击事件"),f.on(document,"click",g.className.dynamic+" .launch-app-btn .dyn-header",function(e){l.preventEvent(e);let t=e.target,i=u.getVue(t);if(!i){b.error("获取vue属性失败");return}let r=i.url;if(!r){b.error("获取url失败");return}u.goToUrl(r);},{capture:!0});},coverTopicJump(){o.info("覆盖话题跳转点击事件"),f.on(document,"click",g.className.dynamic+" .launch-app-btn .bili-dyn-topic",function(e){var a;l.preventEvent(e);let t=e.target,i=u.getVue(t);if(!i){b.error("获取vue属性失败");return}let r=(a=i==null?void 0:i.$props)==null?void 0:a.data,n=r==null?void 0:r.jump_url;if(l.isNull(n)){b.error("获取jump_url失败");return}o.info(["话题的跳转信息: ",r]),u.goToUrl(n);},{capture:!0});},coverAtJump(){o.info("覆盖@ 跳转"),f.on(document,"click",g.className.dynamic+" .at",function(e){var r,n;l.preventEvent(e);let t=e.target,i=t.getAttribute("data-oid")||((n=(r=u.getVue(t))==null?void 0:r.$props)==null?void 0:n.rid);if(l.isNull(i)){b.error("获取data-oid或rid失败");return}o.info("用户的oid: "+i),u.goToUrl(G.getUserSpaceDynamicUrl(i));},{capture:!0});},coverReferenceJump(){o.info("覆盖引用的点击事件"),f.on(document,"click",g.className.dynamic+" .dyn-content .reference .dyn-orig-author",function(e){l.preventEvent(e);let i=e.target.getAttribute("data-url");if(!i){b.error("获取data-url失败");return}u.goToUrl(i);},{capture:!0}),f.on(document,"click",g.className.dynamic+" .dyn-content .reference .dyn-archive",function(e){var n;l.preventEvent(e);let t=e.target,i=u.getVue(t);if(!i){b.error("获取vue属性失败");return}let r=(n=i==null?void 0:i.data)==null?void 0:n.jump_url;if(l.isNull(r)){b.error("获取jump_url失败");return}u.goToUrl(r);},{capture:!0});}},Ge=`#app .m-head .m-recommend-view {\r
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
`;var We=23442827791579n,Je=1n<<51n,te=58n,Fe="FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf";function Qe(e){const t=["B","V","1","0","0","0","0","0","0","0","0","0"];let i=t.length-1,r=(Je|BigInt(e))^We;for(;r>0;)t[i]=Fe[Number(r%BigInt(te))],r=r/te,i-=1;return [t[3],t[9]]=[t[9],t[3]],[t[4],t[7]]=[t[7],t[4]],t.join("")}const ie=e=>(e.startsWith("http://")&&(e=e.replace(/^http/,"https")),e),Ke={$flag:{isInitCSS:!1,isLoadingNextPage:!1},$data:{intersectionObserver:null},$ele:{$listView:null,$videoListBox:null,$videoList:null,$cardBox:null,$listViewShim:null},$cardGoto:{av:"av",picture:"picture"},init(){this.setCSS(),f.ready(()=>{this.addRecommendTag();});},setCSS(){this.$flag.isInitCSS||(this.$flag.isInitCSS=!0,A(Ge));},reset(){o.info("重置状态"),this.$flag.isLoadingNextPage=!1,this.removeScrollEvent(),Object.keys(this.$ele).forEach(e=>{this.$ele[e]=null;});},addRecommendTag(){if(document.querySelector(".channel-menu a.recommend-tag"))return;let e=document.querySelector(".channel-menu .v-switcher");if(!e){o.error("添加推荐标签失败，原因：.channel-menu .v-switcher不存在");return}let t=f.createElement("a",{className:"v-switcher__header__tabs__item recommend-tag",innerHTML:"<span>推荐</span>"},{href:"javascript:;"}),i=f.createElement("div",{className:"m-recommend-view",innerHTML:`
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
            `});this.$ele.$listView=i.querySelector(".list-view"),this.$ele.$videoListBox=i.querySelector(".video-list-box"),this.$ele.$videoList=i.querySelector(".video-list"),this.$ele.$cardBox=i.querySelector(".card-box"),this.$ele.$listViewShim=i.querySelector(".list-view__shim"),this.$ele.$listViewShim.style.cssText="z-index:-1;user-select:none;pointer-events:none;background:transparent;left:0;bottom:0;width:100%;height:200px;";let r=document.querySelector("#app .m-head");r&&r.appendChild(i),f.on(t,"click",n=>{l.preventEvent(n),t.classList.add("is-avtive"),this.recommendClickEvent();}),f.on(e,"click",()=>{t.classList.remove("is-avtive");},{capture:!0}),f.on(this.$ele.$cardBox,"click",".v-card",n=>{l.preventEvent(n);let a=n.target;window.open(a.href,"_blank");}),f.before(e,t),this.setScrollEvent(),window.location.hash==="#/recommend/"&&(o.info("当前hash为推荐视频，出动触发"),t.click());},async recommendClickEvent(){u.goToUrl("#/recommend/",!0);},setScrollEvent(){o.success("监听滚动: IntersectionObserver"),this.$data.intersectionObserver=new IntersectionObserver(async e=>{!this.$flag.isLoadingNextPage&&e[0].isIntersecting&&(this.$flag.isLoadingNextPage=!0,await this.scrollEvent(),this.$flag.isLoadingNextPage=!1);},{threshold:0}),this.$data.intersectionObserver.observe(this.$ele.$listViewShim);},removeScrollEvent(){var e;(e=this.$data.intersectionObserver)==null||e.disconnect(),this.$data.intersectionObserver=null;},async scrollEvent(){let e=await this.getRecommendVideoInfo();if(!e)return;o.success(["获取推荐视频信息",e]);let t=document.createDocumentFragment(),i=c.getValue("bili-head-recommend-push-graphic");e.forEach(r=>{let n=null;if(r.goto===this.$cardGoto.av)n=this.getRecommendItemAVElement(r);else if(i&&r.goto===this.$cardGoto.picture)n=this.getRecommendItemPictureElement(r);else {o.error(["该goto暂未适配",r]);return}t.appendChild(n);}),this.$ele.$cardBox.appendChild(t);},async getRecommendVideoInfo(){var n;let e={appkey:P.appkey,access_key:((n=L.getAccessTokenInfo())==null?void 0:n.access_token)||""},i=await N.get("https://app.bilibili.com/x/v2/feed/index"+"?"+l.toSearchParamsStr(e),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(!i.status)return;let r=l.toJSON(i.data.responseText);if(!ce(r)){b.error(r.message);return}return r.data.items},getRecommendItemPictureElement(e){let t=e.goto,i=e.param,r="/opus/"+i,n=e.args.up_name,a=e.title,s=ie(e.cover),p=e.cover_left_text_1,v=f.createElement("a",{className:"v-card",href:r,innerHTML:`
                <div class="card">
                    <div class="bfs-img-wrap">
                        <div class="bfs-img b-img">
                            <picture class="b-img__inner">
                                <source type="image/webp" srcset="${s}">
                                <img src="${s}" alt="${a}">
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
                <p class="title">${a}</p>
                <div class="gm-up-info">
                    <div class="gm-up-name">
                        <p class="gm-picture-text">图文</p>
                        ${n}
                    </div>
                    <div class="gm-video-handle">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path fill="#2E2F30" d="M512 256a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z m0 341.333333a85.333333 85.333333 0 1 1 0-170.666666 85.333333 85.333333 0 0 1 0 170.666666z m0 341.333334a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z">
                            </path>
                        </svg>
                    </div>
                </div>
                `},{"data-param":i,"data-title":a,"data-goto":t});return v["data-picture"]=e,v},getRecommendItemAVElement(e){var w;let t=e.goto,i=((w=e==null?void 0:e.player_args)==null?void 0:w.aid)||e.args.aid,n="/video/"+Qe(i),a=e.args.up_name,s=e.title,p=ie(e.cover),v=e.cover_left_text_1,d=e.cover_left_text_2,h=e.cover_right_text,x=f.createElement("a",{className:"v-card",href:n,innerHTML:`
                <div class="card">
                    <div class="bfs-img-wrap">
                        <div class="bfs-img b-img">
                            <picture class="b-img__inner">
                                <source type="image/webp" srcset="${p}">
                                <img src="${p}" alt="${s}">
                            </picture>
                        </div>
                    </div>
                    <div class="count">
                        <span>
                            <i class="iconfont icon_shipin_bofangshu"></i>
                            ${v}
                        </span>
                        <span>
                            <i class="iconfont icon_shipin_danmushu"></i>
                            ${d}
                        </span>
                        <span class="gm-video-duration">${h}</span>
                    </div>
                </div>
                <p class="title">${s}</p>
                <div class="gm-up-info">
                    <div class="gm-up-name">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
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
                `},{"data-aid":i,"data-title":s,"data-goto":t});return x["data-video"]=e,x}},Oe={init(){c.execMenuOnce("bili-head-supplementaryVideoStreamingInformation",()=>{this.addVideoListUPInfo();}),c.execMenu("bili-head-recommend-enable",()=>{Ke.init();});},addVideoListUPInfo(){o.info("添加视频列表UP主信息"),A(`
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
        `),l.waitNode(g.className.head+" .video-list .card-box").then(()=>{let e=new l.LockFunction(()=>{document.querySelectorAll(g.className.head+" .video-list .card-box .v-card").forEach(t=>{var a,s,p,v,d;let i=u.getVue(t),r=((s=(a=i==null?void 0:i.info)==null?void 0:a.author)==null?void 0:s.name)||((v=(p=i==null?void 0:i.info)==null?void 0:p.owner)==null?void 0:v.name),n=(d=i==null?void 0:i.info)==null?void 0:d.duration;if(r&&!t.querySelector(".gm-up-info")){let h=document.createElement("div");h.innerHTML=`
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
                                    </div>`,h.className="gm-up-info",t.appendChild(h);}if(n){let h=t.querySelector(".count");if(h&&!h.querySelector(".gm-video-duration")){let x=typeof n=="string"?n:u.parseDuration(n),w=document.createElement("span");w.className="gm-video-duration",w.innerHTML=x,h.appendChild(w);}}});},25);l.mutationObserver(document.body,{config:{subtree:!0,childList:!0,attributes:!0},callback(){e.run();}});});}},Ze={init(){c.execMenu("bili-setLogin",()=>{this.setLogin();}),c.execMenu("bili-setIsClient",()=>{this.setIsClient();}),c.execMenu("bili-setTinyApp",()=>{this.setTinyApp();});},setLogin(){let e=new l.GM_Cookie,t=e.get("DedeUserID");t!=null?o.info(["Cookie DedeUserID已存在：",t.value]):e.set({name:"DedeUserID",value:"2333"},i=>{i?o.error(i):o.success("Cookie成功设置DedeUserID=>2333");}),u.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.noCallApp",check(i){var r,n,a;return typeof((a=(n=(r=i==null?void 0:i.$store)==null?void 0:r.state)==null?void 0:n.common)==null?void 0:a.noCallApp)=="boolean"},set(i){o.success("成功设置参数 $store.state.common.noCallApp=true"),i.$store.state.common.noCallApp=!0;}},{msg:"设置参数 $store.state.common.userInfo.isLogin",check(i){var r,n,a,s;return typeof((s=(a=(n=(r=i==null?void 0:i.$store)==null?void 0:r.state)==null?void 0:n.common)==null?void 0:a.userInfo)==null?void 0:s.isLogin)=="boolean"},set(i){o.success("成功设置参数 $store.state.common.userInfo.isLogin=true"),i.$store.state.common.userInfo.isLogin=!0;}},{msg:"设置参数 $store.state.loginInfo.isLogin",check(i){var r,n,a;return typeof((a=(n=(r=i==null?void 0:i.$store)==null?void 0:r.state)==null?void 0:n.loginInfo)==null?void 0:a.isLogin)=="boolean"},set(i){o.success("成功设置参数 $store.state.loginInfo.isLogin=true"),i.$store.state.loginInfo.isLogin=!0;}}]);},setIsClient(){u.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.video.isClient",check(e){var t,i,r;return typeof typeof((r=(i=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:i.video)==null?void 0:r.isClient)=="boolean"},set(e){o.success("成功设置参数 $store.state.video.isClient=true"),e.$store.state.video.isClient=!0;}},{msg:"设置参数 $store.state.opus.isClient=true",check(e){var t,i,r;return typeof((r=(i=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:i.opus)==null?void 0:r.isClient)=="boolean"},set(e){o.success("成功设置参数 $store.state.opus.isClient"),e.$store.state.opus.isClient=!0;}},{msg:"设置参数 $store.state.playlist.isClient",check(e){var t,i,r;return typeof((r=(i=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:i.playlist)==null?void 0:r.isClient)=="boolean"},set(e){o.success("成功设置参数 $store.state.playlist.isClient=true"),e.$store.state.playlist.isClient=!0;}},{msg:"设置参数 $store.state.ver.bili",check(e){var t,i,r;return typeof((r=(i=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:i.ver)==null?void 0:r.bili)=="boolean"},set(e){o.success("成功设置参数 $store.state.ver.bili=true"),e.$store.state.ver.bili=!0;}},{msg:"设置参数 $store.state.ver.biliVer",check(e){var t,i,r;return typeof((r=(i=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:i.ver)==null?void 0:r.biliVer)=="number"},set(e){o.success("成功设置参数 $store.state.ver.biliVer=2333333"),e.$store.state.ver.biliVer=2333333;}}]);},setTinyApp(){u.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.tinyApp",check(e){var t,i,r;return typeof((r=(i=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:i.common)==null?void 0:r.tinyApp)=="boolean"},set(e){e.$store.state.common.tinyApp=!0,o.success("成功设置参数 $store.state.common.tinyApp=true");}}]);}},Xe={init(){c.onceExec("bili-pc-read-mobile-autoExpand",()=>this.autoExpand());},autoExpand(){return o.info("自动展开"),[A(`
			${ee.className.read.mobile} .limit{
				overflow: unset !important;
				max-height: unset !important;
			}`),u.addBlockCSS(ee.className.read.mobile+" .read-more")]}};let F=null;const re={get ajaxHooker(){return F==null&&(o.info("启用ajaxHooker拦截网络"),F=l.ajaxHooker()),F}},ne={"240P 极速":6,"360P 流畅":16,"480P 清晰":32,"720P 高清":64,"720P60 高帧率":74,"1080P 高清":80,"1080P+ 高码率":112,"1080P60 高帧率":116,"4K 超清":120,"HDR 真彩色":125,杜比视界:126,"8K 超高清":127},Ye={$flag:{is_hook_video_playurl:!1,is_hook_bangumi_html5:!1},init(){c.execMenuOnce("bili-video-xhr-unlockQuality",()=>{this.hook_video_playurl();}),c.execMenuOnce("bili-bangumi-xhr-unlockQuality",()=>{this.hook_bangumi_html5();});},hook_video_playurl(){this.$flag.is_hook_video_playurl||(this.$flag.is_hook_video_playurl=!0,re.ajaxHooker.hook(e=>{if(e.url.includes("//api.bilibili.com/x/player/wbi/playurl")||e.url.includes("//api.bilibili.com/x/player/playurl")){e.url.startsWith("//")&&(e.url=window.location.protocol+e.url);let t=new URL(e.url);t.searchParams.set("platform","html5"),t.searchParams.set("qn",ne["1080P60 高帧率"].toString()),t.searchParams.set("high_quality","1"),t.searchParams.set("fnver","0"),t.searchParams.set("fourk","1"),e.url=t.toString(),e.response=i=>{let r=l.toJSON(i.responseText);if(o.info("当前解锁的quality值："+r.data.quality),r.data.quality&&r.data.support_formats){let n=r.data.support_formats.find(a=>a.quality==r.data.quality);n&&o.info("当前已解锁的画质："+n.new_description||n.display_desc);}};}}));},hook_bangumi_html5(){this.$flag.is_hook_bangumi_html5||(this.$flag.is_hook_bangumi_html5=!0,re.ajaxHooker.hook(e=>{if(e.url.includes("//api.bilibili.com/pgc/player/web/playurl/html5")){e.url.startsWith("//")&&(e.url=window.location.protocol+e.url);let t=new URL(e.url);t.pathname="/pgc/player/web/playurl",t.searchParams.delete("bsource"),t.searchParams.set("qn",ne["1080P60 高帧率"].toString()),t.searchParams.set("fnval","1"),t.searchParams.set("fnver","0"),t.searchParams.set("fourk","1"),t.searchParams.set("from_client","BROWSER"),t.searchParams.set("drm_tech_type","2"),e.url=t.toString(),e.response=i=>{let n=l.toJSON(i.responseText).result;if(o.info("当前解锁的quality值："+n.quality),n.quality&&n.support_formats){let a=n.support_formats.find(s=>s.quality==n.quality);a&&o.info("当前已解锁的画质："+a.new_description||a.display_desc);}};}}));}},pe={init(){Ye.init(),Ze.init(),c.onceExec("listenRouterChange",()=>{this.listenRouterChange();}),c.execMenuOnce("bili-hookSetTimeout_autoOpenApp",()=>{o.info("hook  window.setTimeout autoOpenApp"),q.setTimeout("autoOpenApp"),q.setTimeout("bilibili://");}),c.execMenuOnce("bili-overrideLaunchAppBtn_Vue_openApp",()=>{o.info("覆盖元素.launch-app-btn上的openApp"),q.overRideLaunchAppBtn_Vue_openApp();}),c.execMenuOnce("bili-head-beautify",()=>{o.info("添加美化CSS"),A(Be);}),k.isVideo()?(o.info("Router: 视频稿件"),Ie.init()):k.isOpus()?(o.info("Router: 专栏稿件"),qe.init()):ke.isReadMobile()?(o.info("PC-Router: 专栏稿件"),Xe.init()):k.isDynamic()?(o.info("Router: 动态"),ze.init()):k.isBangumi()?(o.info("Router: 番剧"),Le.init()):k.isSearch()?o.info("Router: 搜索"):k.isLive()?(o.info("Router: 直播"),He.init()):k.isTopicDetail()?o.info("Router: 话题"):k.isHead()?(o.info("Router: 首页之类的"),Oe.init()):o.error("该Router暂未适配，可能是首页之类："+window.location.href);},listenRouterChange(){l.waitNode("#app").then(e=>{let t=function(i){var r;return typeof((r=i==null?void 0:i.$router)==null?void 0:r.afterEach)=="function"};l.waitVueByInterval(e,t).then(i=>{let r=u.getVue(e);r!=null&&t(r)&&(o.success("成功设置监听路由变化"),e.__vue__.$router.beforeEach((n,a,s)=>{if(o.info(["路由变化 => 更新前",{to:n,from:a}]),n.name==="space"){window.location.href=n.fullPath;return}if(n.fullPath.startsWith("/video")&&a.fullPath.startsWith("/video")&&c.getValue("bili-video-forceThisPageToRefreshAndRedirect")){window.location.href=n.fullPath;return}s();}),e.__vue__.$router.afterEach((n,a)=>{if(o.info(["路由变化 => 更新后",{to:n,from:a}]),n.hash==="#/seeCommentReply"||a.hash==="#/seeCommentReply"){o.info("该路由变化判定为#/seeCommentReply，不重载");return}c.execMenu("bili-listenRouterChange",()=>{pe.init();});}));});});}};c.init();pe.init();

})(Qmsg, Utils, DOMUtils, pops, MD5);