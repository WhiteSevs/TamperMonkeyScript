// ==UserScript==
// @name         【移动端】bilibili优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.6.23.19
// @author       WhiteSevs
// @description  bilibili(哔哩哔哩)优化，免登录等
// @license      GPL-3.0-only
// @icon         https://i0.hdslb.com/bfs/static/jinkela/long/images/512.png
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://m.bilibili.com/*
// @match        *://live.bilibili.com/*
// @match        *://www.bilibili.com/read/*
// @require      https://update.greasyfork.org/scripts/494167/1376186/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/456485/1398647/pops.js
// @require      https://update.greasyfork.org/scripts/497907/1394170/QRCodeJS.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.1.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@1.5.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.1.2/dist/index.umd.js
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

(a=>{function e(n){if(typeof n!="string")throw new TypeError("cssText must be a string");let p=document.createElement("style");return p.setAttribute("type","text/css"),p.innerHTML=n,document.head?document.head.appendChild(p):document.body?document.body.appendChild(p):document.documentElement.childNodes.length===0?document.documentElement.appendChild(p):document.documentElement.insertBefore(p,document.documentElement.childNodes[0]),p}if(typeof GM_addStyle=="function"){GM_addStyle(a);return}e(a)})(" .m-video2-awaken-btn,.openapp-dialog,.m-head .launch-app-btn.m-nav-openapp,.m-head .launch-app-btn.home-float-openapp,.m-home .launch-app-btn.home-float-openapp,.m-space .launch-app-btn.m-space-float-openapp,.m-space .launch-app-btn.m-nav-openapp{display:none!important}#app .video .launch-app-btn.m-video-main-launchapp:has([class^=m-video2-awaken]),#app .video .launch-app-btn.m-nav-openapp,#app .video .mplayer-widescreen-callapp,#app .video .launch-app-btn.m-float-openapp,#app .video .m-video-season-panel .launch-app-btn .open-app{display:none!important}#app.LIVE .open-app-btn.bili-btn-warp,#app .m-dynamic .launch-app-btn.m-nav-openapp,#app .m-dynamic .dynamic-float-openapp.dynamic-float-btn,#app .m-opus .float-openapp.opus-float-btn,#app .m-opus .v-switcher .launch-app-btn.list-more,#app .m-opus .opus-nav .launch-app-btn.m-nav-openapp,#app .topic-detail .launch-app-btn.m-nav-openapp,#app .topic-detail .launch-app-btn.m-topic-float-openapp{display:none!important}#app.main-container bili-open-app.btn-download{display:none!important}#app .read-app-main bili-open-app{display:none!important} ");

(function (g, W, st, lt) {
	'use strict';

	var V=typeof GM_getValue<"u"?GM_getValue:void 0,I=typeof GM_info<"u"?GM_info:void 0,ct=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,L=typeof GM_setValue<"u"?GM_setValue:void 0,ut=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,pt=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,y=typeof unsafeWindow<"u"?unsafeWindow:void 0,J=window;const dt={$data:{get enable(){return c.getValue("httpx-use-cookie-enable")},get useDocumentCookie(){return c.getValue("httpx-use-document-cookie")},cookieRule:[{key:"httpx-cookie-bilibili.com",hostname:/bilibili.com/g}]},fixCookieSplit(t){return s.isNotNull(t)&&!t.trim().endsWith(";")&&(t+=";"),t},concatCookie(t,e){return s.isNull(t)?e:(t=t.trim(),e=e.trim(),t=this.fixCookieSplit(t),e.startsWith(";")&&(e=e.substring(1)),t.concat(e))},handle(t){if(t.fetch||!this.$data.enable)return;let e="",i=t.url;i.startsWith("//")&&(i=window.location.protocol+i);let r=new URL(i);this.$data.useDocumentCookie&&r.hostname.endsWith(window.location.hostname.split(".").slice(-2).join("."))&&(e=this.concatCookie(e,document.cookie.trim()));for(let n=0;n<this.$data.cookieRule.length;n++){let a=this.$data.cookieRule[n];if(r.hostname.match(a.hostname)){let l=c.getValue(a.key);if(s.isNull(l))break;e=this.concatCookie(e,l);}}s.isNotNull(e)&&(t.headers&&t.headers.Cookie?t.headers.Cookie=this.concatCookie(t.headers.Cookie,e):t.headers.Cookie=e,o.info(["Httpx => 设置cookie:",t])),t.headers&&t.headers.Cookie!=null&&s.isNull(t.headers.Cookie)&&delete t.headers.Cookie;}},mt="【移动端】bilibili优化",s=W.noConflict(),m=st.noConflict(),D=J.pops||y.pops,F=J.QRCode||y.QRCode,o=new s.Log(I,y.console||J.console);var it;const Q=((it=I==null?void 0:I.script)==null?void 0:it.name)||mt,ft=new s.GM_Cookie,rt=!1;o.config({debug:rt,logMaxCount:1e3,autoClearConsole:!0,tag:!0});g.config(Object.defineProperties({html:!0,autoClose:!0,showClose:!1},{position:{get(){return c.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return c.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return c.getValue("qmsg-config-showreverse",!0)}},zIndex:{get(){let t=W.getMaxZIndex(10),e=D.config.Utils.getPopsMaxZIndex(10).zIndex;return W.getMaxValue(t,e)}}}));const ht=new s.GM_Menu({GM_getValue:V,GM_setValue:L,GM_registerMenuCommand:ct,GM_unregisterMenuCommand:ut}),T=new s.Httpx(pt);T.interceptors.request.use(t=>(dt.handle(t),t));T.interceptors.response.use(void 0,t=>(o.error(["拦截器-请求错误",t]),t.type==="onabort"?g.warning("请求取消"):t.type==="onerror"?g.error("请求异常"):t.type==="ontimeout"?g.error("请求超时"):g.error("其它错误"),t));T.config({logDetails:rt});const z={Object:{defineProperty:y.Object.defineProperty},Function:{apply:y.Function.prototype.apply,call:y.Function.prototype.call},Element:{appendChild:y.Element.prototype.appendChild},setTimeout:y.setTimeout},C=s.addStyle,S="GM_Panel",P="data-key",M="data-default-value",d=function(t,e,i,r,n){let a={text:t,type:"switch",description:n,attributes:{},getValue(){return !!c.getValue(e,i)},callback(l,u){o.success(`${u?"开启":"关闭"} ${t}`),c.setValue(e,!!u);},afterAddToUListCallBack:void 0};return a.attributes&&(a.attributes[P]=e,a.attributes[M]=!!i),a},gt=function(t,e,i,r,n,a="",l){let u={text:t,type:"textarea",attributes:{},description:r,placeholder:a,disabled:l,getValue(){return c.getValue(e,i)},callback(f,v){c.setValue(e,v);}};return u.attributes&&(u.attributes[P]=e,u.attributes[M]=i),u},K=function(t,e,i,r,n,a){let l=[];typeof r=="function"?l=r():l=r;let u={text:t,type:"select",description:a,attributes:{},getValue(){return c.getValue(e,i)},callback(f,v,h){c.setValue(e,v),typeof n=="function"&&n(f,v,h);},data:l};return u.attributes&&(u.attributes[P]=e,u.attributes[M]=i),u},vt={id:"panel-common",title:"通用",forms:[{text:"功能",type:"forms",forms:[d("监听路由-重载所有功能","bili-listenRouterChange",!0,void 0,"用于处理页面跳转(本页)时功能不生效问题"),d("修复点击UP主正确进入空间","bili-repairEnterUserHome",!0,void 0,"可以修复点击UP主进入个人空间但是跳转404的问题"),d("新标签页打开","bili-go-to-url-blank",!1,void 0,"通过开启【覆盖点击事件】相关的设置，通过新标签页打开链接")]},{text:"变量设置",type:"forms",forms:[d("isLogin","bili-setLogin",!0,void 0,"$store.state.common.noCallApp=true<br>$store.state.common.userInfo.isLogin=true<br>$store.state.loginInfo.isLogin=true"),d("isClient","bili-setIsClient",!0,void 0,"$store.state.video.isClient=true<br>$store.state.opus.isClient=true<br>$store.state.playlist.isClient=true<br>$store.state.ver.bili=true<br>$store.state.ver.biliVer=2333"),d("tinyApp","bili-setTinyApp",!0,void 0,"$store.state.common.tinyApp=true")]},{text:"劫持/拦截",type:"forms",forms:[d("覆盖.launch-app-btn openApp","bili-overrideLaunchAppBtn_Vue_openApp",!0,void 0,"覆盖.launch-app-btn元素上的openApp函数，可阻止点击唤醒/下载App"),d("劫持setTimeout-autoOpenApp","bili-hookSetTimeout_autoOpenApp",!0,void 0,"阻止自动调用App")]},{text:"Toast配置",type:"forms",forms:[K("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(t,e,i)=>{o.info("设置当前Qmsg弹出位置"+i);},"Toast显示在页面九宫格的位置"),K("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),d("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]},{text:"Cookie配置",type:"forms",forms:[d("启用","httpx-use-cookie-enable",!1,void 0,"启用后，将根据下面的配置进行添加cookie"),d("使用document.cookie","httpx-use-document-cookie",!1,void 0,"自动根据请求的域名来获取对应的cookie"),gt("bilibili.com","httpx-cookie-bilibili.com","",void 0,void 0,"Cookie格式：xxx=xxxx;xxx=xxxx")]}]},x={isVideo(){return window.location.pathname.startsWith("/video/")},isBangumi(){return window.location.pathname.startsWith("/bangumi/")},isSearch(){return window.location.pathname.startsWith("/search")},isLive(){return window.location.hostname==="live.bilibili.com"},isOpus(){return window.location.pathname.startsWith("/opus")},isTopicDetail(){return window.location.pathname.startsWith("/topic-detail")},isDynamic(){return window.location.pathname.startsWith("/dynamic")},isHead(){return window.location.pathname==="/"||window.location.pathname.startsWith("/channel")}},bt={isPC(){return window.location.hostname==="www.bilibili.com"},isReadMobile(){return this.isPC()&&window.location.pathname.startsWith("/read/mobile")}},yt={id:"panel-video",title:"视频",isDefault(){return x.isVideo()},forms:[{text:"功能",type:"forms",forms:[d("修复视频底部区域高度","bili-video-repairVideoBottomAreaHeight",!0,void 0,"添加margin-top"),d("自动点击【继续在网页观看】","bili-video-autoClickContinueToWatchOnTheWebpage",!0,void 0,"可避免弹窗出现且自动点击后播放视频"),d("美化显示","bili-video-beautify",!0,void 0,"调整底部推荐视频卡片样式类似哔哩哔哩App"),d("手势返回关闭评论区","bili-video-gestureReturnToCloseCommentArea",!0,void 0,"当浏览器手势触发浏览器回退页面时，关闭评论区"),d("initPlayer","bili-video-initPlayer",!0,void 0,"自动执行初始化播放器"),d("强制本页刷新跳转","bili-video-forceThisPageToRefreshAndRedirect",!1,void 0,"用于解决跳转播放视频时，播放当前视频会有上一个播放视频的声音的情况")]},{text:"变量设置",type:"forms",forms:[d("playBtnNoOpenApp","bili-video-setVideoPlayer",!0,void 0,"playBtnNoOpenApp=true<br>playBtnOpenApp=false<br>coverOpenApp=false"),d("解锁充电限制","bili-video-unlockUpower",!1,void 0,"is_upower_exclusive=true<br>is_upower_play=false<br>is_upower_preview=false")]},{text:"覆盖点击事件",type:"forms",forms:[d("相关视频","bili-video-cover-bottomRecommendVideo",!0,void 0,"点击下面的相关视频可正确跳转至该视频"),d("选集","bili-video-cover-seasonNew",!0,void 0,"点击下面的选集列表内的视频可正确跳转至该视频")]},{text:"网络拦截",type:"forms",forms:[d("解锁清晰度","bili-video-xhr-unlockQuality",!0,void 0,"最高清晰度为720P")]},{text:"劫持/拦截",type:"forms",forms:[d("阻止调用App","bili-video-hook-callApp",!0,void 0,"处理函数: PlayerAgent")]}]},wt={id:"panel-bangumi",title:"番剧",isDefault(){return x.isBangumi()},forms:[{text:"变量设置",type:"forms",forms:[d("pay","bili-bangumi-setPay",!0,void 0,"$store.state.userStat.pay=1<br>$store.state.mediaInfo.user_status.pay=1")]},{text:"覆盖点击事件",type:"forms",forms:[d("【选集】","bili-bangumi-cover-clicl-event-chooseEp",!0,void 0,"让【选集】的视频列表可点击跳转"),d("【其它】","bili-bangumi-cover-clicl-event-other",!0,void 0,"让【PV&其他】、【预告】、【主题曲】、【香境剧场】等的视频列表可点击跳转"),d("【更多推荐】","bili-bangumi-cover-clicl-event-recommend",!0,void 0,"让【更多推荐】的视频列表可点击跳转")]},{text:"网络拦截",type:"forms",forms:[d("解锁清晰度","bili-bangumi-xhr-unlockQuality",!0,void 0,"最高清晰度为720P")]},{text:"劫持/拦截",type:"forms",forms:[d("阻止调用App","bili-bangumi-hook-callApp",!0,void 0,"")]}]},xt={id:"panel-search",title:"搜索",isDefault(){return x.isSearch()},forms:[]},kt={id:"panel-live",title:"直播",isDefault(){return x.isLive()},forms:[{text:"屏蔽",type:"forms",forms:[d("【屏蔽】聊天室","bili-live-block-chatRoom",!1,void 0,"直接不显示底部的聊天室"),d("【屏蔽】xxx进入直播间","bili-live-block-brush-prompt",!1,void 0,"直接不显示底部的xxx进入直播间"),d("【屏蔽】控制面板","bili-live-block-control-panel",!1,void 0,"屏蔽底部的发个弹幕、送礼")]},{text:"劫持/拦截",type:"forms",forms:[d("阻止open-app-btn元素点击事件触发","bili-live-prevent-openAppBtn",!0,void 0,"开启后可不跳转至唤醒App页面")]}]},_t={id:"panel-opus",title:"专栏",isDefault(){return x.isOpus()},forms:[{text:"功能",type:"forms",forms:[d("自动展开阅读全文","bili-opus-automaticallyExpandToReadFullText",!0,void 0,"屏蔽【展开阅读全文】按钮并自动处理全文高度")]},{text:"覆盖点击事件",type:"forms",forms:[d("话题","bili-opus-cover-topicJump",!0,void 0,"点击话题正确跳转"),d("header用户","bili-opus-cover-header",!0,void 0,"点击内容上的发布本动态的用户正确跳转个人空间")]}]},$t={id:"panel-dynamic",title:"动态",isDefault(){return x.isDynamic()},forms:[{text:"覆盖点击事件",type:"forms",forms:[d("话题","bili-dynamic-cover-topicJump",!0,void 0,"点击话题正确跳转"),d("header用户","bili-dynamic-cover-header",!0,void 0,"点击内容上的发布本动态的用户正确跳转个人空间"),d("@用户","bili-dynamic-cover-atJump",!0,void 0,"点击@用户正确跳转个人空间"),d("引用","bili-dynamic-cover-referenceJump",!0,void 0,"点击引用的视频|用户正确跳转")]}]},Ct={id:"panel-topic-detail",title:"话题",isDefault(){return x.isTopicDetail()},forms:[]},A={appkey:"4409e2ce8ffd12b8",appsec:"59b43e04ad6965f34319062b478f83dd"};function O(t,e,i){t.appkey=e;const r=new URLSearchParams(t);return r.sort(),lt(r.toString()+i)}const p={getVue(t){return t==null?void 0:t.__vue__},waitVuePropToSet(t,e){function i(){let r=null;return typeof t=="string"?r=document.querySelector(t):typeof t=="function"?r=t():t instanceof HTMLElement&&(r=t),r}e.forEach(r=>{typeof r.msg=="string"&&o.info(r.msg);function n(){let a=i();if(a==null)return !1;let l=p.getVue(a);return l==null?!1:!!r.check(l)}s.waitVueByInterval(()=>i(),n,250,1e4).then(a=>{if(!a)return;let l=i(),u=p.getVue(l);u!=null&&r.set(u);});});},goToUrl(t,e=!1){let i=document.querySelector("#app");if(i==null){g.error("跳转Url: 获取根元素#app失败"),o.error("跳转Url: 获取根元素#app失败："+t);return}let r=p.getVue(i);if(r==null){o.error("获取#app的vue属性失败"),g.error("获取#app的vue属性失败");return}let n=r.$router,a=c.getValue("bili-go-to-url-blank");if(o.info("即将跳转URL："+t),e&&(a=!1),a)window.open(t,"_blank");else {if(t.startsWith("http")||t.startsWith("//")){t.startsWith("//")&&(t=window.location.protocol+t);let l=new URL(t);if(l.origin===window.location.origin)t=l.pathname+l.search+l.hash;else {o.info("不同域名，直接本页打开，不用Router："+t),window.location.href=t;return}}o.info("$router push跳转Url："+t),n.push(t);}},goToLogin(t=""){window.open(`https://passport.bilibili.com/h5-app/passport/login?gourl=${encodeURIComponent(t)}`);},parseDuration(t){if(typeof t!="number"&&(t=parseInt(t)),isNaN(t))return t.toString();function e(i){return i<10?`0${i}`:i}return t<60?`0:${e(t)}`:t>=60&&t<3600?`${Math.floor(t/60)}:${e(t%60)}`:`${Math.floor(t/3600)}:${e(Math.floor(t/60)%60)}:${e(t%60)}`},hookGestureReturnByVueRouter(t){function e(){o.success("触发popstate事件"),r(!0);}function i(){o.success("监听地址改变"),t.vueObj.$router.history.push(t.hash),m.on(window,"popstate",e);}async function r(n=!1){if(m.off(window,"popstate",e),!t.callback(n))for(;;)if(t.vueObj.$router.history.current.hash===t.hash)o.info("后退！"),t.vueObj.$router.back(),await s.sleep(250);else return}return i(),{resumeBack:r}},loadScript(t){let e=document.createElement("script");return e.src=t,document.head.appendChild(e),new Promise(i=>{e.onload=function(){o.success("script标签加载完毕："+t),setTimeout(()=>{i(!0);},100);};})},addBlockCSS(...t){let e=[];t.length!==0&&(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""||(t.forEach(i=>{Array.isArray(i)?e=e.concat(i):e.push(i);}),C(`${e.join(`,
`)}{display: none !important;}`)));}};function nt(t){return (t==null?void 0:t.code)===0&&((t==null?void 0:t.message)==="0"||(t==null?void 0:t.message)==="success")}const Z={async getQrCodeInfo(){var a;let t="https://passport.bilibili.com/x/passport-tv-login/qrcode/auth_code",e={appkey:A.appkey,local_id:"0",csrf:((a=ft.get("bili_jct"))==null?void 0:a.value)||"",ts:"0"},i=O(e,A.appkey,A.appsec),r=await T.post(t,{data:s.toSearchParamsStr({...e,sign:i}),headers:{"Content-Type":"application/x-www-form-urlencoded"},responseType:"json",fetch:!0});if(o.info(r),!r.status)return;let n=s.toJSON(r.data.responseText);if(n.code!==0){g.error(n.message);return}return n.data},async poll(t){let e="https://passport.bilibili.com/x/passport-tv-login/qrcode/poll",i={appkey:A.appkey,auth_code:t,local_id:"0",ts:"0"},r=O(i,A.appkey,A.appsec),n=await T.post(e,{data:s.toSearchParamsStr({...i,sign:r}),headers:{"Content-Type":"application/x-www-form-urlencoded"},responseType:"json",fetch:!0});if(!n.status)return {success:!1,message:"网络错误",action:void 0};const a=s.toJSON(n.data.responseText),l={0:"成功","-3":"API校验密匙错误","-400":"请求错误","-404":"啥都木有",86038:"二维码已失效",86039:"二维码尚未确认",86090:"二维码已扫码未确认"};if(!nt(a)){const v=a.code.toString(),h=a.message||l[v]||"未知错误";return v==="86038"?{success:!1,message:h,action:"refresh"}:v==="86039"||v==="86090"?{success:!1,message:h,action:"wait"}:{success:!1,message:h,action:void 0}}const u=a.data.access_token,f=Date.now()+a.data.expires_in*1e3;return {success:!0,message:"获取成功",accessKey:u,accessKeyExpireAt:f}}},E={async init(){g.info("正在申请二维码...");let t=await this.getQRCodeInfo();t&&this.confirmScanQrcode(t);},getQRCodeInfo:async function(){o.info("正在申请二维码...");let t=await Z.getQrCodeInfo();return o.info(["获取到二维码信息",t]),t},async confirmScanQrcode(t){let e=D.alert({title:{text:"请扫描二维码登录",position:"center",html:!1,style:""},content:{text:'<div id="bili-qrcode-canvas"></div>',html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(a){n=!0,a.close();}}},mask:{enable:!0,clickEvent:{toClose:!1,toHide:!1}},only:!0,width:"310px",height:"365px",drag:!0,dragLimit:!0,style:`
            #bili-qrcode-canvas{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
            }
            `}),i=e.$shadowRoot.querySelector("#bili-qrcode-canvas"),r=new F(i,{text:t.url,width:300,height:300,colorDark:"#000000",colorLight:"#ffffff",correctLevel:F.CorrectLevel.H}),n=!1;for(;;){if(n){o.error("用户关闭扫码登录弹窗、取消扫码登录");break}o.info("正在等待扫码登录...");let a=await Z.poll(t.auth_code);if(a!=null&&a.success){this.setAccessTokenInfo({access_token:a.accessKey,expireAt:a.accessKeyExpireAt}),o.info(["扫码登录成功",a]),o.success("扫码登录成功"),g.success("扫码登录成功");break}else if((a==null?void 0:a.action)==="refresh"){o.info("刷新二维码"),g.info("刷新二维码");let l=await this.getQRCodeInfo();l&&(r.clear(),r.makeCode(l.url));}else if(a.action==="wait")a.message==="二维码已扫码未确认"&&(o.info("已扫码，等待确认..."),D.loading({parent:i,content:{text:"已扫码，等待确认"},mask:{enable:!0}}));else {o.error(a.message),g.error(a.message);break}await s.sleep(1500);}e.close();},generateExpireAt(t=6){return new Date().getTime()+1e3*60*60*24*30*t},setAccessTokenInfo(t){L("bili-accessTokenInfo",t);},getAccessTokenInfo(){let t=V("bili-accessTokenInfo");return t&&t.expireAt>Date.now()?t:null},getAccessToken(){var t;return ((t=this.getAccessTokenInfo())==null?void 0:t.access_token)||""}},St=function(t,e,i,r,n,a="",l,u){let f={text:t,type:"input",isNumber:!!l,isPassword:!!u,attributes:{},description:r,getValue(){return c.getValue(e,i)},callback(v,h){typeof n=="function"&&n(v,h)||c.setValue(e,h);},placeholder:a};return f.attributes&&(f.attributes[P]=e,f.attributes[M]=i),f},At={id:"panel-head",title:"首页",forms:[{text:"功能",type:"forms",forms:[d("美化显示","bili-head-beautify",!0,void 0,"调整瀑布流视频卡片样式类似哔哩哔哩App"),d("补充推荐视频信息","bili-head-supplementaryVideoStreamingInformation",!0,void 0,"给视频添加UP主名，当前视频总时长信息")]},{text:"推荐",type:"forms",forms:[d("启用","bili-head-recommend-enable",!1,void 0,"添加【推荐】标签，数据来源为App端(如果填入了access_token的话)"),d("显示【图文】","bili-head-recommend-push-graphic",!0,void 0,"加载App端推送的【图文】卡片"),St("access_token","bili-head-recommend-access_token",E.getAccessToken(),"填入access_token，即可获取推荐视频数据",(t,e,i)=>{E.setAccessTokenInfo({access_token:e,expireAt:E.generateExpireAt()});},void 0,!1,!0)]}]},_={data:null,oneSuccessExecMenu:null,onceExec:null,listenData:null},c={$data:{get data(){return _.data==null&&(_.data=new s.Dictionary),_.data},get oneSuccessExecMenu(){return _.oneSuccessExecMenu==null&&(_.oneSuccessExecMenu=new s.Dictionary),_.oneSuccessExecMenu},get onceExec(){return _.onceExec==null&&(_.onceExec=new s.Dictionary),_.onceExec},get scriptName(){return Q},key:S,attributeKeyName:P,attributeDefaultValueName:M},$listener:{get listenData(){return _.listenData==null&&(_.listenData=new s.Dictionary),_.listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},initExtensionsMenu(){y.top===y.self&&ht.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:!1,isStoreValue:!1,showText(t){return t},callback:()=>{this.showPanel();}},{key:"go_to_login",text:"🛠 前往登录",autoReload:!1,isStoreValue:!1,showText(t){return t},callback(){p.goToLogin();}},{key:"go_to_login_to_parse_access_key",text:"🛠 扫码并解析access_key",autoReload:!1,isStoreValue:!1,showText(t){return t},callback(){E.init();}}]);},initPanelDefaultValue(){let t=this;function e(r){if(!r.attributes)return;let n=r.attributes[P],a=r.attributes[M];if(n==null){o.warn(["请先配置键",r]);return}t.$data.data.has(n)&&o.warn("请检查该key(已存在): "+n),t.$data.data.set(n,a);}let i=this.getPanelContentConfig();for(let r=0;r<i.length;r++){let n=i[r];if(!n.forms)continue;let a=n.forms;for(let l=0;l<a.length;l++){let u=a[l];if(u.forms){let f=u.forms;for(let v=0;v<f.length;v++)e(f[v]);}else e(u);}}},setValue(t,e){let i=V(S,{}),r=i[t];i[t]=e,L(S,i),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,r,e);},getValue(t,e){let r=V(S,{})[t];return r??(this.$data.data.has(t)?this.$data.data.get(t):e)},deleteValue(t){let e=V(S,{}),i=e[t];Reflect.deleteProperty(e,t),L(S,e),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,i,void 0);},addValueChangeListener(t,e){let i=Math.random();return this.$listener.listenData.set(t,{id:i,key:t,callback:e}),i},removeValueChangeListener(t){let e=null;for(const[i,r]of this.$listener.listenData.entries())if(r.id===t){e=i;break}this.$listener.listenData.delete(e);},hasKey(t){let e=V(S,{});return t in e},execMenu(t,e){if(typeof t!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(t)){o.warn(`${t} 键不存在`);return}let i=c.getValue(t);i&&e(i);},execMenuOnce(t,e){if(typeof t!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(t)){o.warn(`${t} 键不存在`);return}let i=c.getValue(t);if(i){if(this.$data.oneSuccessExecMenu.has(t))return;e(i),this.$data.oneSuccessExecMenu.set(t,1);}},onceExec(t,e){if(typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(t)||(e(),this.$data.onceExec.set(t,1));},showPanel(){D.panel({title:{text:`${Q}-设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:this.isMobile(),width:this.getWidth(),height:this.getHeight(),drag:!0,only:!0});},isMobile(){return window.outerWidth<550},getWidth(){return window.outerWidth<550?"92dvw":"550px"},getHeight(){return window.outerHeight>450?"80dvh":"450px"},getPanelContentConfig(){return [vt,At,yt,_t,$t,wt,Ct,xt,kt]}},Vt=`/* 主页 */\r
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
\r
	background-color: var(--bg-color);\r
	.m-home {\r
		background-color: var(--bg-color);\r
	}\r
	/* 美化视频卡片 */\r
	.video-list .card-box {\r
		.v-card {\r
			background-color: var(--bg-rever-color);\r
			padding: 0px;\r
			margin: 0px;\r
			width: calc(50% - var(--pd-width) / 2);\r
			border-radius: var(--bd-circle);\r
			margin-top: var(--pd-width);\r
			display: grid;\r
\r
			/* 视频封面区域 */\r
			.card {\r
				background: var(--bg-rever-color);\r
				border-radius: unset;\r
				border-top-left-radius: var(--bd-circle);\r
				border-top-right-radius: var(--bd-circle);\r
				height: var(--card-height);\r
\r
				.count {\r
					display: flex;\r
					justify-content: safe flex-start;\r
					padding-right: 0;\r
\r
					.iconfont {\r
						font-size: var(--icon-text-font-size);\r
					}\r
\r
					> span {\r
						font-size: var(--icon-text-font-size);\r
						margin-right: var(--icon-font-margin-right);\r
					}\r
				}\r
			}\r
			/* 视频标题区域 */\r
			.title {\r
				padding: 0;\r
				margin: var(--pd-width);\r
				font-size: var(--title-font-size);\r
			}\r
		}\r
		/* 两列 => 左边的 */\r
		.v-card:nth-child(2n-1) {\r
			/*background-color: red;*/\r
			margin-right: calc(var(--pd-width) / 2);\r
		}\r
		/* 两列 => 右边的 */\r
		.v-card:nth-child(2n) {\r
			/*background-color: rebeccapurple;*/\r
			margin-left: calc(var(--pd-width) / 2);\r
		}\r
	}\r
}\r
`,U={$isHook:{windowPlayerAgent:!1,hookWebpackJsonp_openApp:!1,overRideLaunchAppBtn_Vue_openApp:!1},$data:{setTimeout:[]},windowWebPack(t="webpackJsonp",e,i){let r;z.Object.defineProperty(y,t,{get(){return r},set(n){o.success("成功劫持webpack，当前webpack名："+t),r=n;const a=r.push;r.push=function(...l){let u=l[0][0];return (e==u||Array.isArray(e)&&Array.isArray(u)&&JSON.stringify(e)===JSON.stringify(u))&&Object.keys(l[0][1]).forEach(f=>{let v=l[0][1][f];l[0][1][f]=function(...h){let k=v.call(this,...h);return h[0]=i(h[0]),k};}),a.call(this,...l)};}});},windowPlayerAgent(){if(this.$isHook.windowPlayerAgent)return;this.$isHook.windowPlayerAgent=!0;let t;z.Object.defineProperty(y,"PlayerAgent",{get(){return new Proxy({},{get(e,i){return i==="openApp"?function(...r){let n=r[0];if(o.info(["调用PlayerAgent.openApp",n]),n.event==="fullScreen"){let a=document.querySelector(".mplayer-btn-widescreen");a?a.click():o.warn("主动再次点击全屏按钮失败，原因：未获取到.mplayer-btn-widescreen元素");}}:t[i]}})},set(e){t=e;}});},setTimeout(t){if(this.$data.setTimeout.push(t),this.$data.setTimeout.length>1){o.info("window.setTimeout hook新增劫持判断参数："+t);return}y.setTimeout=function(...e){let i=e[0].toString();if(i.match(t)){o.success(["劫持setTimeout的函数",i]);return}return z.setTimeout.apply(this,e)};},overRideLaunchAppBtn_Vue_openApp(){if(this.$isHook.overRideLaunchAppBtn_Vue_openApp)return;this.$isHook.overRideLaunchAppBtn_Vue_openApp=!0;function t(e){typeof e.openApp!="function"||e.openApp.toString().includes("阻止唤醒App")||(e.openApp=function(...r){o.success(["openApp：阻止唤醒App",r]);});}s.mutationObserver(document,{config:{subtree:!0,childList:!0,attributes:!0},callback(){document.querySelectorAll(".launch-app-btn").forEach(e=>{let i=p.getVue(e);i&&(t(i),i.$children&&i.$children.length&&i.$children.forEach(r=>{t(r);}));});}});}},Tt={init(){c.execMenuOnce("bili-video-hook-callApp",()=>{o.info("hook window.PlayerAgent"),U.windowPlayerAgent();});}},H={getUserSpaceUrl(t){return `https://m.bilibili.com/space/${t}`},getUserSpaceDynamicUrl(t){return `https://m.bilibili.com/dynamic/${t}`},getUserSpaceOpusUrl(t){return `https://m.bilibili.com/opus/${t}`},getVideoUrl(t){return `https://m.bilibili.com/video/${t}`}},b={className:{bangumi:"#app.main-container",dynamic:"#app .m-dynamic",opus:"#app .m-opus",search:"#app .m-search","topic-detail":"#app .topic-detail",video:"#app .video",head:"#app .m-head"}},X={className:{read:{mobile:"#app .read-app-main"}}},Pt=`#app .video {\r
	/* 下面的推荐视频卡片 */\r
	.video-list .card-box {\r
		--left-card-width: 33%;\r
		--right-child-padding: 1.333vmin;\r
		.v-card-toapp {\r
			width: 100%;\r
			border-bottom: 1px solid #b5b5b5;\r
			padding-left: 0;\r
			padding-right: 0;\r
\r
			> a {\r
				display: flex;\r
				flex-wrap: nowrap;\r
				.card {\r
					width: var(--left-card-width);\r
					height: 80px;\r
					flex: 0 auto;\r
					.count {\r
						background: transparent;\r
						.left {\r
							display: list-item;\r
							span.item {\r
								display: none;\r
							}\r
						}\r
\r
						.duration {\r
							background: rgba(0, 0, 0, 0.4);\r
							border-radius: 0.6vmin;\r
							padding: 0px 0.5vmin;\r
							right: 1vmin;\r
							bottom: 1vmin;\r
						}\r
					}\r
				}\r
\r
				.title {\r
					flex: 1;\r
					padding: var(--right-child-padding);\r
					margin-top: 0;\r
				}\r
			}\r
		}\r
\r
		/* 开启了bili-video-beautify */\r
		.gm-right-container {\r
			display: flex;\r
			flex-direction: column;\r
			width: calc(100% - var(--left-card-width));\r
			> * {\r
				padding: var(--right-child-padding);\r
			}\r
			.gm-up-name,\r
			.left {\r
				color: #999;\r
				font-size: 3vmin;\r
				transform-origin: left;\r
				display: flex;\r
				align-items: safe center;\r
			}\r
			.gm-up-name-text {\r
				margin-left: 1vmin;\r
			}\r
			.num {\r
				margin-right: 4vmin;\r
			}\r
		}\r
\r
		> a.v-card {\r
			width: 100%;\r
			border-bottom: 1px solid #b5b5b5;\r
			padding-left: 0;\r
			padding-right: 0;\r
			display: flex;\r
			flex-wrap: nowrap;\r
			.card {\r
				width: var(--left-card-width);\r
				height: 100%;\r
				flex: 0 auto;\r
				.count {\r
					background: transparent;\r
					span {\r
						display: none;\r
					}\r
					.duration {\r
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
				}\r
			}\r
\r
			.title {\r
				flex: 1;\r
				padding: var(--right-child-padding);\r
				margin-top: 0;\r
			}\r
		}\r
	}\r
}\r
`,Mt={$data:{isInitPlayer:!1,isUnlockUpower:!1},init(){c.execMenu("bili-video-initPlayer",()=>{this.initPlayer();}),c.execMenu("bili-video-setVideoPlayer",()=>{this.setVideoPlayer();}),c.execMenu("bili-video-unlockUpower",()=>{this.unlockUpower();});},initPlayer(){if(this.$data.isInitPlayer)return;this.$data.isInitPlayer=!0;let t=this;s.waitNode("#bilibiliPlayer",3e3).then(async e=>{if(!e){t.$data.isInitPlayer=!1;return}await s.sleep(300),p.waitVuePropToSet(".m-video-player",[{msg:"等待设置参数 fullScreenCallApp",check(i){return typeof(i==null?void 0:i.fullScreenCallApp)=="boolean"},set(i){i.fullScreenCallApp=!1,o.success("成功设置参数 fullScreenCallApp=false");}},{msg:"等待设置参数 gameMode",check(i){return typeof(i==null?void 0:i.gameMode)=="boolean"},set(i){i.gameMode=!0,o.success("成功设置参数 gameMode=true");}},{msg:"等待获取函数 initPlayer()",check(i){return typeof(i==null?void 0:i.initPlayer)=="function"},set(i){t.$data.isInitPlayer=!1;function r(){let n,a,l=1,u=!1,f=new s.LockFunction(async()=>{var h,k,w,$;if(document.querySelector("#bilibiliPlayer video")){u=!0,(h=y==null?void 0:y.player)==null||h.off("restart_call_app"),(k=y==null?void 0:y.player)==null||k.off("force_call_app_show"),o.success("<video>标签已成功初始化");return}y.BPlayerMobile==null&&(o.error("未加载player播放器，主动引入script标签"),await p.loadScript("https://s1.hdslb.com/bfs/static/player/main/html5/mplayer.js?v=2862592")),i.initPlayer(!0),o.success("第 "+l+" 次未检测到视频，调用初始化视频函数 initPlayer()"),await s.sleep(300),(w=y==null?void 0:y.player)==null||w.off("restart_call_app"),($=y==null?void 0:y.player)==null||$.off("force_call_app_show"),l++;});n=setInterval(async()=>{await f.run(),u&&(clearTimeout(a),clearInterval(n));},600),a=setTimeout(()=>{o.warn("检测视频超时3s，取消检测"),clearInterval(n);},3e3);}r();}}]);});},unlockUpower(){p.waitVuePropToSet(b.className.video,[{msg:"设置属性 __vue__.info.is_upower_exclusive",check(t){var e;return typeof((e=t==null?void 0:t.info)==null?void 0:e.is_upower_exclusive)=="boolean"},set(t){t.info.is_upower_exclusive=!1,o.success("成功设置属性  __vue__.info.is_upower_exclusive=false");}},{msg:"设置属性 __vue__.info.is_upower_play",check(t){var e;return typeof((e=t==null?void 0:t.info)==null?void 0:e.is_upower_play)=="boolean"},set(t){t.info.is_upower_play=!1,o.success("成功设置属性  __vue__.info.is_upower_play=false");}},{msg:"设置属性 __vue__.info.is_upower_preview",check(t){var e;return typeof((e=t==null?void 0:t.info)==null?void 0:e.is_upower_preview)=="boolean"},set(t){t.info.is_upower_preview=!1,o.success("成功设置属性  __vue__.info.is_upower_preview=false");}}]);},setVideoPlayer(){p.waitVuePropToSet(b.className.video+" .m-video-player",[{msg:"设置参数 playBtnNoOpenApp",check(t){return typeof t.playBtnNoOpenApp=="boolean"},set(t){t.playBtnNoOpenApp=!0,o.success("成功设置参数 playBtnNoOpenApp=true");}},{msg:"设置参数 playBtnOpenApp",check(t){return typeof t.playBtnOpenApp=="boolean"},set(t){t.playBtnOpenApp=!1,o.success("成功设置参数 playBtnOpenApp=false");}},{msg:"设置参数 coverOpenApp",check(t){return typeof t.coverOpenApp=="boolean"},set(t){t.coverOpenApp=!1,o.success("成功设置参数 coverOpenApp=false");}}]);}},Bt={$data:{isAddBeautifyCSS:!1},init(){Tt.init(),Mt.init(),c.execMenuOnce("bili-video-repairVideoBottomAreaHeight",()=>{this.repairVideoBottomAreaHeight();}),c.execMenuOnce("bili-video-autoClickContinueToWatchOnTheWebpage",()=>{this.autoClickContinueToWatchOnTheWebpage();}),c.execMenu("bili-video-beautify",()=>{this.beautify();}),c.execMenuOnce("bili-video-cover-bottomRecommendVideo",()=>{this.coverBottomRecommendVideo();}),c.execMenuOnce("bili-video-gestureReturnToCloseCommentArea",()=>{this.gestureReturnToCloseCommentArea();}),c.execMenuOnce("bili-video-cover-seasonNew",()=>{this.coverSeasonNew();});},beautify(){o.info("美化"),this.$data.isAddBeautifyCSS||(this.$data.isAddBeautifyCSS=!0,C(Pt)),s.waitNode(b.className.video+" .bottom-tab .list-view .card-box",1e4).then(t=>{if(!t){o.error("$cardBox is null");return}function e(n){var f,v;let a=n.querySelector(".title"),l=n.querySelector(".count .left"),u=p.getVue(n);if(a&&l&&!n.querySelector(".gm-right-container")){let h=document.createElement("div"),k=(v=(f=u==null?void 0:u.info)==null?void 0:f.owner)==null?void 0:v.name;h.className="gm-up-name",h.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${k}</span>
						`;let w=document.createElement("div"),$=document.createElement("div");w.className="gm-right-container",$.className="gm-right-bottom",m.after(a,w),w.appendChild(a),w.appendChild($),$.appendChild(h),$.appendChild(l);}}function i(n){var f,v,h;let a=n.querySelector(".title"),l=n.querySelector(".count"),u=p.getVue(n);if(a&&l&&!n.querySelector(".gm-right-container")){let k=(f=u==null?void 0:u.info)==null?void 0:f.duration,w=document.createElement("div");w.className="duration",w.innerText=p.parseDuration(k);let $=l.cloneNode(!0);$.className="left";let q=document.createElement("div"),at=(h=(v=u==null?void 0:u.info)==null?void 0:v.owner)==null?void 0:h.name;l.appendChild(w),q.className="gm-up-name",q.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${at}</span>
						`;let N=document.createElement("div"),R=document.createElement("div");N.className="gm-right-container",R.className="gm-right-bottom",m.after(a,N),N.appendChild(a),N.appendChild(R),R.appendChild(q),R.appendChild($);}}let r=new s.LockFunction(()=>{document.querySelectorAll(b.className.video+" .bottom-tab .list-view .card-box .v-card-toapp").forEach(n=>{e(n);}),document.querySelectorAll(b.className.video+" .bottom-tab .list-view .card-box>a.v-card").forEach(n=>{i(n);});},25);s.mutationObserver(document.querySelector(b.className.video),{config:{subtree:!0,childList:!0},callback(){setTimeout(()=>{r.run();},0);}});});},repairVideoBottomAreaHeight(){o.info("修复视频底部区域高度"),C(`
		${b.className.video} {
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
			${b.className.video}{
				.m-video-info-new{
					margin-top: 72vmin;
				}
			}
		}
		`);},autoClickContinueToWatchOnTheWebpage(){m.on(document,"click",b.className.video+" .main-info .btn",function(){o.info("触发点击【立即播放】，自动等待弹窗出现"),s.waitNode(".to-see",1e4).then(t=>{if(!t){o.error("弹窗按钮【继续在网页观看】10秒内未出现，取消等待");return}o.success("自动点击 继续在网页观看"),t.click();});});},coverBottomRecommendVideo(){o.info("覆盖 相关视频 点击事件"),m.on(document,"click",b.className.video+" .list-view .card-box .launch-app-btn",function(t){let e=t.target,i=p.getVue(e);if(!i){g.error("获取相关视频的__vue__失败");return}let r=i.bvid;if(s.isNull(r))if(i.$children&&i.$children[0]&&s.isNotNull(i.$children[0].bvid))r=i.$children[0].bvid;else {g.error("获取相关视频的bvid失败");return}o.info("相关视频的bvid: "+r),p.goToUrl(H.getVideoUrl(r)),s.preventEvent(t);},{capture:!0});},coverSeasonNew(){o.info("覆盖 选集视频列表 点击事件");function t(e){let i=e.target,r=p.getVue(i);if(!r){g.error("获取选集视频的目标视频的__vue__失败");return}let n=r.bvid;if(s.isNull(n)){g.error("获取相关视频的bvid失败");return}o.info("相关视频的bvid: "+n),p.goToUrl(H.getVideoUrl(n)),s.preventEvent(e);}m.on(document,"click",b.className.video+" .m-video-season-new .video-card .launch-app-btn",t,{capture:!0}),m.on(document,"click",b.className.video+" .m-video-season-panel .season-video-item .launch-app-btn",t,{capture:!0});},gestureReturnToCloseCommentArea(){o.info("手势返回关闭评论区，全局监听document点击.sub-reply-preview"),s.waitNode("#app").then(t=>{s.waitVueByInterval(t,()=>{var i,r;let e=p.getVue(t);return e==null?!1:typeof((r=(i=e==null?void 0:e.$router)==null?void 0:i.options)==null?void 0:r.scrollBehavior)!=null},250,1e4).then(e=>{let i=p.getVue(t);if(!i){o.error("获取#app的vue属性失败");return}let r=i.$router.options.scrollBehavior;i.$router.options.scrollBehavior=function(n,a,l){return n.hash==="#/seeCommentReply"?(o.info("当前操作为打开评论区，scrollBehavior返回null"),null):n.hash===""&&a.hash==="#/seeCommentReply"?(o.info("当前操作为关闭评论区，scrollBehavior返回null"),null):r.call(this,...arguments)};});}),m.on(document,"click",".sub-reply-preview",function(t){let e=document.querySelector("#app"),i=p.getVue(e);if(!i){o.error("获取#app元素失败");return}let r=p.hookGestureReturnByVueRouter({vueObj:i,hash:"#/seeCommentReply",callback(n){if(!n)return !1;let a=document.querySelector(".dialog-close-icon");return a?a.click():o.error("评论区关闭失败，原因：元素dialog-close-icon获取失败"),!0}});s.waitNode(".dialog-close-icon").then(n=>{m.on(n,"click",function(){r.resumeBack(!1);},{capture:!0,once:!0});});});}},Et={init(){c.execMenu("bili-bangumi-setPay",()=>{this.setPay();});},setPay(){p.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.userStat.pay",check(t){var e,i,r;return typeof typeof((r=(i=(e=t==null?void 0:t.$store)==null?void 0:e.state)==null?void 0:i.userStat)==null?void 0:r.pay)=="number"},set(t){o.success("成功设置参数 $store.state.userStat.pay=1"),t.$store.state.userStat.pay=1;}},{msg:"设置参数 $store.state.mediaInfo.user_status.pay",check(t){var e,i,r,n;return typeof((n=(r=(i=(e=t==null?void 0:t.$store)==null?void 0:e.state)==null?void 0:i.mediaInfo)==null?void 0:r.user_status)==null?void 0:n.pay)=="number"},set(t){o.success("成功设置参数 $store.state.mediaInfo.user_status.pay=1"),t.$store.state.mediaInfo.user_status.pay=1;}}]);}},B={getUrl(t){if(t!=null)return t.getAttribute("universallink")},jumpToUrl(t){let i=t.target.querySelector("bili-open-app");if(i){let r=B.getUrl(i);r?p.goToUrl(r):(g.error("获取bili-open-app的Url失败"),o.error("获取bili-open-app的Url失败"));}else g.error("未获取到<bili-open-app>元素"),o.error("未获取到<bili-open-app>元素");}},Nt={init(){Et.init(),c.execMenuOnce("bili-bangumi-hook-callApp",()=>{this.hookCallApp();}),c.execMenu("bili-bangumi-cover-clicl-event-chooseEp",()=>{this.setChooseEpClickEvent();}),c.execMenu("bili-bangumi-cover-clicl-event-other",()=>{this.setClickOtherVideo();}),c.execMenu("bili-bangumi-cover-clicl-event-recommend",()=>{this.setRecommendClickEvent();});},hookCallApp(){let t=y.setTimeout;y.setTimeout=function(...e){if(e[0].toString().includes("autoOpenApp")){o.success(["阻止唤醒App",e]);return}return t.apply(this,e)};},setPay(){p.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.userStat.pay",check(t){var e,i,r;return typeof typeof((r=(i=(e=t==null?void 0:t.$store)==null?void 0:e.state)==null?void 0:i.userStat)==null?void 0:r.pay)=="number"},set(t){o.success("成功设置参数 $store.state.userStat.pay=1"),t.$store.state.userStat.pay=1;}},{msg:"设置参数 $store.state.mediaInfo.user_status.pay",check(t){var e,i,r,n;return typeof((n=(r=(i=(e=t==null?void 0:t.$store)==null?void 0:e.state)==null?void 0:i.mediaInfo)==null?void 0:r.user_status)==null?void 0:n.pay)=="number"},set(t){o.success("成功设置参数 $store.state.mediaInfo.user_status.pay=1"),t.$store.state.mediaInfo.user_status.pay=1;}}]);},setChooseEpClickEvent(){s.waitNode(b.className.bangumi+" .ep-list-pre-wrapper ul.ep-list-pre-container").then(t=>{o.info("覆盖【选集】的点击事件"),m.on(t,"click","li.episode-item",function(e){s.preventEvent(e),B.jumpToUrl(e);},{capture:!0});}),s.waitNode(b.className.bangumi+" .ep-list-pre-wrapper ul.season-list-wrapper").then(t=>{o.info("覆盖【xx季】的点击事件"),m.on(t,"click","li",function(e){s.preventEvent(e),B.jumpToUrl(e);},{capture:!0});}),s.waitNode(b.className.bangumi+" .ep-list-pre-header").then(t=>{o.info("覆盖【选集】右上角的【全xx话】Arrow的点击事件"),m.on(t,"click",function(e){s.preventEvent(e);},{capture:!0});});},setClickOtherVideo(){s.waitNode(b.className.bangumi+" .section-preview-wrapper ul.ep-list-pre-container").then(t=>{o.info("覆盖【PV&其他】、【预告】、【主题曲】的点击事件"),m.on(t,"click","li.section-preview-item",function(e){s.preventEvent(e),B.jumpToUrl(e);},{capture:!0});}),s.waitNode(b.className.bangumi+" .section-preview-header").then(t=>{o.info("覆盖【PV&其他】、【预告】、【主题曲】右上角的Arrow的点击事件"),m.on(t,"click",function(e){s.preventEvent(e);},{capture:!0});});},setRecommendClickEvent(){s.waitNode(b.className.bangumi+" .recom-wrapper ul.recom-list").then(t=>{o.info("覆盖【更多推荐】番剧的点击事件"),m.on(t,"click","li.recom-item-v2",function(e){s.preventEvent(e),B.jumpToUrl(e);},{capture:!0});});}},Rt={init(){c.execMenuOnce("bili-live-prevent-openAppBtn",()=>{this.preventOpenAppBtn();}),c.execMenuOnce("bili-live-block-chatRoom",()=>{this.blockChatRoom();}),c.execMenuOnce("bili-live-block-brush-prompt",()=>{this.blockBrushPrompt();}),c.execMenuOnce("bili-live-block-control-panel",()=>{this.blockControlPanel();});},preventOpenAppBtn(){s.waitNode("body").then(t=>{o.info("阻止.open-app-btn元素触发点击事件"),m.on(t,"click",".open-app-btn",function(e){s.preventEvent(e);},{capture:!0}),m.on(t,"click","#web-player-controller-wrap-el",function(e){s.preventEvent(e);},{capture:!0});});},blockChatRoom(){o.info("屏蔽聊天室"),p.addBlockCSS("#chat-items");},blockBrushPrompt(){o.info("屏蔽xxx进入直播间"),p.addBlockCSS("#brush-prompt");},blockControlPanel(){o.info("屏蔽底部工具栏"),p.addBlockCSS(".control-panel");}},It={init(){c.execMenuOnce("bili-opus-cover-topicJump",()=>{this.coverTopicJump();}),c.execMenuOnce("bili-opus-automaticallyExpandToReadFullText",()=>{this.automaticallyExpandToReadFullText();}),c.execMenuOnce("bili-opus-cover-header",()=>{this.coverHeaderJump();});},coverTopicJump(){o.info("覆盖话题跳转点击事件"),m.on(document,"click",b.className.opus+" .launch-app-btn.opus-module-topic",function(t){var a;let e=t.target,i=p.getVue(e);if(!i){g.error("获取话题的__vue__失败");return}let r=(a=i==null?void 0:i.$props)==null?void 0:a.data,n=r==null?void 0:r.jump_url;if(s.isNull(n)){g.error("获取话题的jump_url失败");return}o.info(["话题的跳转信息: ",r]),p.goToUrl(n);},{capture:!0});},automaticallyExpandToReadFullText(){o.info("自动展开阅读全文"),p.addBlockCSS(b.className.opus+" .opus-read-more"),C(`
		${b.className.opus} .opus-module-content{
			overflow: unset !important;
    		max-height: unset !important;
		}
		`);},coverHeaderJump(){o.info("覆盖header点击事件"),m.on(document,"click",b.className.opus+" .opus-module-author",function(t){var n;s.preventEvent(t);let e=t.target,i=p.getVue(e);if(!i){g.error("获取vue属性失败");return}let r=(n=i==null?void 0:i.data)==null?void 0:n.mid;if(!r){g.error("获取mid失败");return}p.goToUrl(H.getUserSpaceUrl(r));},{capture:!0});}},Ut={init(){c.execMenuOnce("bili-dynamic-cover-topicJump",()=>{this.coverTopicJump();}),c.execMenuOnce("bili-dynamic-cover-atJump",()=>{this.coverAtJump();}),c.execMenuOnce("bili-dynamic-cover-referenceJump",()=>{this.coverReferenceJump();}),c.execMenuOnce("bili-dynamic-cover-header",()=>{this.coverHeaderJump();});},coverHeaderJump(){o.info("覆盖header点击事件"),m.on(document,"click",b.className.dynamic+" .launch-app-btn .dyn-header",function(t){s.preventEvent(t);let e=t.target,i=p.getVue(e);if(!i){g.error("获取vue属性失败");return}let r=i.url;if(!r){g.error("获取url失败");return}p.goToUrl(r);},{capture:!0});},coverTopicJump(){o.info("覆盖话题跳转点击事件"),m.on(document,"click",b.className.dynamic+" .launch-app-btn .bili-dyn-topic",function(t){var a;s.preventEvent(t);let e=t.target,i=p.getVue(e);if(!i){g.error("获取vue属性失败");return}let r=(a=i==null?void 0:i.$props)==null?void 0:a.data,n=r==null?void 0:r.jump_url;if(s.isNull(n)){g.error("获取jump_url失败");return}o.info(["话题的跳转信息: ",r]),p.goToUrl(n);},{capture:!0});},coverAtJump(){o.info("覆盖@ 跳转"),m.on(document,"click",b.className.dynamic+" .at",function(t){var r,n;s.preventEvent(t);let e=t.target,i=e.getAttribute("data-oid")||((n=(r=p.getVue(e))==null?void 0:r.$props)==null?void 0:n.rid);if(s.isNull(i)){g.error("获取data-oid或rid失败");return}o.info("用户的oid: "+i),p.goToUrl(H.getUserSpaceDynamicUrl(i));},{capture:!0});},coverReferenceJump(){o.info("覆盖引用的点击事件"),m.on(document,"click",b.className.dynamic+" .dyn-content .reference .dyn-orig-author",function(t){s.preventEvent(t);let i=t.target.getAttribute("data-url");if(!i){g.error("获取data-url失败");return}p.goToUrl(i);},{capture:!0}),m.on(document,"click",b.className.dynamic+" .dyn-content .reference .dyn-archive",function(t){var n;s.preventEvent(t);let e=t.target,i=p.getVue(e);if(!i){g.error("获取vue属性失败");return}let r=(n=i==null?void 0:i.data)==null?void 0:n.jump_url;if(s.isNull(r)){g.error("获取jump_url失败");return}p.goToUrl(r);},{capture:!0});}},Lt=`#app .m-head .m-recommend-view {\r
	display: none;\r
}\r
#app .m-head .suspension .channel-menu:has(.recommend-tag.is-avtive) {\r
	.v-switcher__header__anchor {\r
		display: none !important;\r
	}\r
	a.v-switcher__header__tabs__item {\r
		color: #505050 !important;\r
	}\r
	a.recommend-tag {\r
		color: #fb7299 !important;\r
	}\r
	a.recommend-tag span:after {\r
		content: " ";\r
		position: relative;\r
		background: #fb7299;\r
		width: 30.4375px;\r
		height: 0.53333vmin;\r
		display: block;\r
		bottom: 3px;\r
	}\r
}\r
#app .m-head:has(.recommend-tag.is-avtive) {\r
	.suspension + div {\r
		display: none;\r
	}\r
	.m-recommend-view {\r
		display: unset;\r
	}\r
}\r
\r
#app .m-head .m-recommend-view {\r
	background-color: #f0f1f3;\r
	.list-view {\r
		.video-list-box {\r
			.video-list {\r
				padding: 0 1.33333vmin;\r
				margin-bottom: 5.33333vmin;\r
				.card-box {\r
					display: -webkit-box;\r
					display: -ms-flexbox;\r
					display: flex;\r
					-ms-flex-wrap: wrap;\r
					flex-wrap: wrap;\r
					.v-card {\r
						.card {\r
							position: relative;\r
							.bfs-img-wrap {\r
								position: absolute;\r
								top: 0;\r
								left: 0;\r
								width: 100%;\r
								height: 100%;\r
								overflow: hidden;\r
								.bfs-img.b-img {\r
									position: relative;\r
									width: 100%;\r
									height: 100%;\r
									overflow: hidden;\r
									background: transparent;\r
									picture.b-img__inner {\r
										display: block;\r
										width: 100%;\r
										height: 100%;\r
										img {\r
											width: 100%;\r
											height: 100%;\r
											-o-object-fit: cover;\r
											object-fit: cover;\r
										}\r
									}\r
								}\r
							}\r
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
								background: linear-gradient(\r
									0deg,\r
									rgba(0, 0, 0, 0.85),\r
									transparent\r
								);\r
							}\r
						}\r
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
						.gm-up-info {\r
							.gm-up-name {\r
								.gm-picture-text {\r
									padding: 1px 4px;\r
									border: 1px solid #fb7299;\r
									color: #fb7299;\r
									border-radius: 2px;\r
									margin-right: 4px;\r
									font-size: 2.0vmin;\r
								}\r
							}\r
						}\r
					}\r
				}\r
			}\r
		}\r
	}\r
}\r
`;var Dt=23442827791579n,Ht=1n<<51n,Y=58n,qt="FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf";function zt(t){const e=["B","V","1","0","0","0","0","0","0","0","0","0"];let i=e.length-1,r=(Ht|BigInt(t))^Dt;for(;r>0;)e[i]=qt[Number(r%BigInt(Y))],r=r/Y,i-=1;return [e[3],e[9]]=[e[9],e[3]],[e[4],e[7]]=[e[7],e[4]],e.join("")}const j=t=>(t.startsWith("http://")&&(t=t.replace(/^http/,"https")),t),Gt={$flag:{isInitCSS:!1,isLoadingNextPage:!1},$data:{intersectionObserver:null},$ele:{$listView:null,$videoListBox:null,$videoList:null,$cardBox:null,$listViewShim:null},$cardGoto:{av:"av",picture:"picture"},init(){this.setCSS(),m.ready(()=>{this.addRecommendTag();});},setCSS(){this.$flag.isInitCSS||(this.$flag.isInitCSS=!0,C(Lt));},reset(){o.info("重置状态"),this.$flag.isLoadingNextPage=!1,this.removeScrollEvent(),Object.keys(this.$ele).forEach(t=>{this.$ele[t]=null;});},addRecommendTag(){if(document.querySelector(".channel-menu a.recommend-tag"))return;let t=document.querySelector(".channel-menu .v-switcher");if(!t){o.error("添加推荐标签失败，原因：.channel-menu .v-switcher不存在");return}let e=m.createElement("a",{className:"v-switcher__header__tabs__item recommend-tag",innerHTML:"<span>推荐</span>"},{href:"javascript:;"}),i=m.createElement("div",{className:"m-recommend-view",innerHTML:`
            <div class="list-view">
                <div class="video-list-box">
                    <div class="video-list">
                        <div class="card-box">

                        </div>
                    </div>
                </div>
                <div class="list-view__shim" style="z-index:-1;user-select:none;pointer-events:none;background:transparent;left:0;bottom:0;width:100%;height:200px;"></div>
            </div>
            `});this.$ele.$listView=i.querySelector(".list-view"),this.$ele.$videoListBox=i.querySelector(".video-list-box"),this.$ele.$videoList=i.querySelector(".video-list"),this.$ele.$cardBox=i.querySelector(".card-box"),this.$ele.$listViewShim=i.querySelector(".list-view__shim");let r=document.querySelector("#app .m-head");r&&r.appendChild(i),m.on(e,"click",n=>{s.preventEvent(n),e.classList.add("is-avtive"),this.recommendClickEvent();}),m.on(t,"click",()=>{e.classList.remove("is-avtive");},{capture:!0}),m.on(this.$ele.$cardBox,"click",".v-card",n=>{s.preventEvent(n);let a=n.target;window.open(a.href,"_blank");}),m.before(t,e),this.setScrollEvent(),window.location.hash==="#/recommend/"&&e.click();},async recommendClickEvent(){p.goToUrl("#/recommend/",!0);},setScrollEvent(){o.success("监听滚动: IntersectionObserver"),this.$data.intersectionObserver=new IntersectionObserver(async t=>{!this.$flag.isLoadingNextPage&&t[0].isIntersecting&&(this.$flag.isLoadingNextPage=!0,await this.scrollEvent(),this.$flag.isLoadingNextPage=!1);},{threshold:0}),this.$data.intersectionObserver.observe(this.$ele.$listViewShim);},removeScrollEvent(){var t;(t=this.$data.intersectionObserver)==null||t.disconnect(),this.$data.intersectionObserver=null;},async scrollEvent(){let t=await this.getRecommendVideoInfo();if(!t)return;o.success(["获取推荐视频信息",t]);let e=document.createDocumentFragment(),i=c.getValue("bili-head-recommend-push-graphic");t.forEach(r=>{let n=null;if(r.goto===this.$cardGoto.av)n=this.getRecommendItemAVElement(r);else if(i&&r.goto===this.$cardGoto.picture)n=this.getRecommendItemPictureElement(r);else {o.error(["该goto暂未适配",r]);return}e.appendChild(n);}),this.$ele.$cardBox.appendChild(e);},async getRecommendVideoInfo(){var n;let t={appkey:A.appkey,access_key:((n=E.getAccessTokenInfo())==null?void 0:n.access_token)||""},i=await T.get("https://app.bilibili.com/x/v2/feed/index"+"?"+s.toSearchParamsStr(t),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(!i.status)return;let r=s.toJSON(i.data.responseText);if(!nt(r)){g.error(r.message);return}return r.data.items},getRecommendItemPictureElement(t){let e=t.goto,i=t.param,r="/opus/"+i,n=t.args.up_name,a=t.title,l=j(t.cover),u=t.cover_left_text_1,f=m.createElement("a",{className:"v-card",href:r,innerHTML:`
                <div class="card">
                    <div class="bfs-img-wrap">
                        <div class="bfs-img b-img">
                            <picture class="b-img__inner">
                                <source type="image/webp" srcset="${l}">
                                <img src="${l}" alt="${a}">
                            </picture>
                        </div>
                    </div>
                    <div class="count">
                        <span>
                            <i class="iconfont like2"></i>
                            ${u}
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
                `},{"data-param":i,"data-title":a,"data-goto":e});return f["data-picture"]=t,f},getRecommendItemAVElement(t){var w;let e=t.goto,i=((w=t==null?void 0:t.player_args)==null?void 0:w.aid)||t.args.aid,n="/video/"+zt(i),a=t.args.up_name,l=t.title,u=j(t.cover),f=t.cover_left_text_1,v=t.cover_left_text_2,h=t.cover_right_text,k=m.createElement("a",{className:"v-card",href:n,innerHTML:`
                <div class="card">
                    <div class="bfs-img-wrap">
                        <div class="bfs-img b-img">
                            <picture class="b-img__inner">
                                <source type="image/webp" srcset="${u}">
                                <img src="${u}" alt="${l}">
                            </picture>
                        </div>
                    </div>
                    <div class="count">
                        <span>
                            <i class="iconfont icon_shipin_bofangshu"></i>
                            ${f}
                        </span>
                        <span>
                            <i class="iconfont icon_shipin_danmushu"></i>
                            ${v}
                        </span>
                        <span class="gm-video-duration">${h}</span>
                    </div>
                </div>
                <p class="title">${l}</p>
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
                `},{"data-aid":i,"data-title":l,"data-goto":e});return k["data-video"]=t,k}},Wt={init(){c.execMenuOnce("bili-head-supplementaryVideoStreamingInformation",()=>{this.addVideoListUPInfo();}),c.execMenu("bili-head-recommend-enable",()=>{Gt.init();});},addVideoListUPInfo(){o.info("添加视频列表UP主信息"),C(`
        ${b.className.head}{
            .video-list .card-box{
                .gm-up-info{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: var(--pd-width);

                    .gm-up-name{
                        display: flex;
                        align-items: center;
                        font-size: 2.4vmin;
                        color: #999A9E;
    
                        svg{
                            margin-right: calc(var(--pd-width) / 2);
                        }
                    }
                }
            }
            .gm-video-duration{
                margin: 0 auto;
            }
        }
        `),s.waitNode(b.className.head+" .video-list .card-box").then(()=>{let t=new s.LockFunction(()=>{document.querySelectorAll(b.className.head+" .video-list .card-box .v-card").forEach(e=>{var a,l,u,f,v;let i=p.getVue(e),r=((l=(a=i==null?void 0:i.info)==null?void 0:a.author)==null?void 0:l.name)||((f=(u=i==null?void 0:i.info)==null?void 0:u.owner)==null?void 0:f.name),n=(v=i==null?void 0:i.info)==null?void 0:v.duration;if(r&&!e.querySelector(".gm-up-info")){let h=document.createElement("div");h.innerHTML=`
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
                                    </div>`,h.className="gm-up-info",e.appendChild(h);}if(n){let h=e.querySelector(".count");if(h&&!h.querySelector(".gm-video-duration")){let k=typeof n=="string"?n:p.parseDuration(n),w=document.createElement("span");w.className="gm-video-duration",w.innerHTML=k,h.appendChild(w);}}});},25);s.mutationObserver(document.body,{config:{subtree:!0,childList:!0,attributes:!0},callback(){t.run();}});});}},Jt={init(){c.execMenu("bili-setLogin",()=>{this.setLogin();}),c.execMenu("bili-setIsClient",()=>{this.setIsClient();}),c.execMenu("bili-setTinyApp",()=>{this.setTinyApp();});},setLogin(){let t=new s.GM_Cookie,e=t.get("DedeUserID");e!=null?o.info(["Cookie DedeUserID已存在：",e.value]):t.set({name:"DedeUserID",value:"2333"},i=>{i?o.error(i):o.success("Cookie成功设置DedeUserID=>2333");}),p.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.noCallApp",check(i){var r,n,a;return typeof((a=(n=(r=i==null?void 0:i.$store)==null?void 0:r.state)==null?void 0:n.common)==null?void 0:a.noCallApp)=="boolean"},set(i){o.success("成功设置参数 $store.state.common.noCallApp=true"),i.$store.state.common.noCallApp=!0;}},{msg:"设置参数 $store.state.common.userInfo.isLogin",check(i){var r,n,a,l;return typeof((l=(a=(n=(r=i==null?void 0:i.$store)==null?void 0:r.state)==null?void 0:n.common)==null?void 0:a.userInfo)==null?void 0:l.isLogin)=="boolean"},set(i){o.success("成功设置参数 $store.state.common.userInfo.isLogin=true"),i.$store.state.common.userInfo.isLogin=!0;}},{msg:"设置参数 $store.state.loginInfo.isLogin",check(i){var r,n,a;return typeof((a=(n=(r=i==null?void 0:i.$store)==null?void 0:r.state)==null?void 0:n.loginInfo)==null?void 0:a.isLogin)=="boolean"},set(i){o.success("成功设置参数 $store.state.loginInfo.isLogin=true"),i.$store.state.loginInfo.isLogin=!0;}}]);},setIsClient(){p.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.video.isClient",check(t){var e,i,r;return typeof typeof((r=(i=(e=t==null?void 0:t.$store)==null?void 0:e.state)==null?void 0:i.video)==null?void 0:r.isClient)=="boolean"},set(t){o.success("成功设置参数 $store.state.video.isClient=true"),t.$store.state.video.isClient=!0;}},{msg:"设置参数 $store.state.opus.isClient=true",check(t){var e,i,r;return typeof((r=(i=(e=t==null?void 0:t.$store)==null?void 0:e.state)==null?void 0:i.opus)==null?void 0:r.isClient)=="boolean"},set(t){o.success("成功设置参数 $store.state.opus.isClient"),t.$store.state.opus.isClient=!0;}},{msg:"设置参数 $store.state.playlist.isClient",check(t){var e,i,r;return typeof((r=(i=(e=t==null?void 0:t.$store)==null?void 0:e.state)==null?void 0:i.playlist)==null?void 0:r.isClient)=="boolean"},set(t){o.success("成功设置参数 $store.state.playlist.isClient=true"),t.$store.state.playlist.isClient=!0;}},{msg:"设置参数 $store.state.ver.bili",check(t){var e,i,r;return typeof((r=(i=(e=t==null?void 0:t.$store)==null?void 0:e.state)==null?void 0:i.ver)==null?void 0:r.bili)=="boolean"},set(t){o.success("成功设置参数 $store.state.ver.bili=true"),t.$store.state.ver.bili=!0;}},{msg:"设置参数 $store.state.ver.biliVer",check(t){var e,i,r;return typeof((r=(i=(e=t==null?void 0:t.$store)==null?void 0:e.state)==null?void 0:i.ver)==null?void 0:r.biliVer)=="number"},set(t){o.success("成功设置参数 $store.state.ver.biliVer=2333333"),t.$store.state.ver.biliVer=2333333;}}]);},setTinyApp(){p.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.tinyApp",check(t){var e,i,r;return typeof((r=(i=(e=t==null?void 0:t.$store)==null?void 0:e.state)==null?void 0:i.common)==null?void 0:r.tinyApp)=="boolean"},set(t){t.$store.state.common.tinyApp=!0,o.success("成功设置参数 $store.state.common.tinyApp=true");}}]);}},Ft={init(){c.onceExec("bili-pc-read-mobile-autoExpand",()=>{this.autoExpand();});},autoExpand(){o.info("自动展开"),C(`
        ${X.className.read.mobile} .limit{
            overflow: unset !important;
            max-height: unset !important;
        }`),p.addBlockCSS(X.className.read.mobile+" .read-more");}};let G=null;const tt={get ajaxHooker(){return G==null&&(o.info("启用ajaxHooker拦截网络"),G=s.ajaxHooker()),G}},et={"240P 极速":6,"360P 流畅":16,"480P 清晰":32,"720P 高清":64,"720P60 高帧率":74,"1080P 高清":80,"1080P+ 高码率":112,"1080P60 高帧率":116,"4K 超清":120,"HDR 真彩色":125,杜比视界:126,"8K 超高清":127},Qt={$flag:{is_hook_video_playurl:!1,is_hook_bangumi_html5:!1},init(){c.execMenuOnce("bili-video-xhr-unlockQuality",()=>{this.hook_video_playurl();}),c.execMenuOnce("bili-bangumi-xhr-unlockQuality",()=>{this.hook_bangumi_html5();});},hook_video_playurl(){this.$flag.is_hook_video_playurl||(this.$flag.is_hook_video_playurl=!0,tt.ajaxHooker.hook(t=>{if(t.url.includes("//api.bilibili.com/x/player/wbi/playurl")||t.url.includes("//api.bilibili.com/x/player/playurl")){t.url.startsWith("//")&&(t.url=window.location.protocol+t.url);let e=new URL(t.url);e.searchParams.set("platform","html5"),e.searchParams.set("qn",et["1080P60 高帧率"].toString()),e.searchParams.set("high_quality","1"),e.searchParams.set("fnver","0"),e.searchParams.set("fourk","1"),t.url=e.toString(),t.response=i=>{let r=s.toJSON(i.responseText);if(o.info("当前解锁的quality值："+r.data.quality),r.data.quality&&r.data.support_formats){let n=r.data.support_formats.find(a=>a.quality==r.data.quality);n&&o.info("当前已解锁的画质："+n.new_description||n.display_desc);}};}}));},hook_bangumi_html5(){this.$flag.is_hook_bangumi_html5||(this.$flag.is_hook_bangumi_html5=!0,tt.ajaxHooker.hook(t=>{if(t.url.includes("//api.bilibili.com/pgc/player/web/playurl/html5")){t.url.startsWith("//")&&(t.url=window.location.protocol+t.url);let e=new URL(t.url);e.pathname="/pgc/player/web/playurl",e.searchParams.delete("bsource"),e.searchParams.set("qn",et["1080P60 高帧率"].toString()),e.searchParams.set("fnval","1"),e.searchParams.set("fnver","0"),e.searchParams.set("fourk","1"),e.searchParams.set("from_client","BROWSER"),e.searchParams.set("drm_tech_type","2"),t.url=e.toString(),t.response=i=>{let n=s.toJSON(i.responseText).result;if(o.info("当前解锁的quality值："+n.quality),n.quality&&n.support_formats){let a=n.support_formats.find(l=>l.quality==n.quality);a&&o.info("当前已解锁的画质："+a.new_description||a.display_desc);}};}}));}},ot={init(){Qt.init(),Jt.init(),c.onceExec("listenRouterChange",()=>{this.listenRouterChange();}),c.execMenuOnce("bili-hookSetTimeout_autoOpenApp",()=>{o.info("hook  window.setTimeout autoOpenApp"),U.setTimeout("autoOpenApp"),U.setTimeout("bilibili://");}),c.execMenuOnce("bili-overrideLaunchAppBtn_Vue_openApp",()=>{o.info("覆盖元素.launch-app-btn上的openApp"),U.overRideLaunchAppBtn_Vue_openApp();}),c.execMenuOnce("bili-head-beautify",()=>{o.info("添加美化CSS"),C(Vt);}),x.isVideo()?(o.info("Router: 视频稿件"),Bt.init()):x.isOpus()?(o.info("Router: 专栏稿件"),It.init()):bt.isReadMobile()?(o.info("PC-Router: 专栏稿件"),Ft.init()):x.isDynamic()?(o.info("Router: 动态"),Ut.init()):x.isBangumi()?(o.info("Router: 番剧"),Nt.init()):x.isSearch()?o.info("Router: 搜索"):x.isLive()?(o.info("Router: 直播"),Rt.init()):x.isTopicDetail()?o.info("Router: 话题"):x.isHead()?(o.info("Router: 首页之类的"),Wt.init()):o.error("该Router暂未适配，可能是首页之类："+window.location.href);},listenRouterChange(){s.waitNode("#app").then(t=>{let e=function(i){var r;return typeof((r=i==null?void 0:i.$router)==null?void 0:r.afterEach)=="function"};s.waitVueByInterval(t,e).then(i=>{let r=p.getVue(t);r!=null&&e(r)&&(o.success("成功设置监听路由变化"),t.__vue__.$router.beforeEach((n,a,l)=>{if(o.info(["路由变化 => 更新前",{to:n,from:a}]),n.name==="space"){window.location.href=n.fullPath;return}if(n.fullPath.startsWith("/video")&&a.fullPath.startsWith("/video")&&c.getValue("bili-video-forceThisPageToRefreshAndRedirect")){window.location.href=n.fullPath;return}l();}),t.__vue__.$router.afterEach((n,a)=>{if(o.info(["路由变化 => 更新后",{to:n,from:a}]),n.hash==="#/seeCommentReply"||a.hash==="#/seeCommentReply"){o.info("该路由变化判定为#/seeCommentReply，不重载");return}c.execMenu("bili-listenRouterChange",()=>{ot.init();});}));});});}};c.init();ot.init();

})(Qmsg, Utils, DOMUtils, MD5);