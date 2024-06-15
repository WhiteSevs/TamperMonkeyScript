// ==UserScript==
// @name         【移动端】bilibili优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.6.15.13
// @author       WhiteSevs
// @description  bilibili(哔哩哔哩)优化，免登录等
// @license      GPL-3.0-only
// @icon         https://i0.hdslb.com/bfs/static/jinkela/long/images/512.png
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://m.bilibili.com/*
// @match        *://live.bilibili.com/*
// @require      https://update.greasyfork.org/scripts/494167/1376186/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/456485/1384984/pops.js
// @require      https://update.greasyfork.org/scripts/497907/1394170/QRCodeJS.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.1.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@1.4.3/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.1.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/md5@2.3.0/dist/md5.min.js
// @connect      *
// @connect      m.bilibili.com
// @connect      www.bilibili.com
// @connect      api.bilibili.com
// @connect      app.bilibili.com
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

(a=>{function e(n){if(typeof n!="string")throw new TypeError("cssText must be a string");let p=document.createElement("style");return p.setAttribute("type","text/css"),p.innerHTML=n,document.head?document.head.appendChild(p):document.body?document.body.appendChild(p):document.documentElement.childNodes.length===0?document.documentElement.appendChild(p):document.documentElement.insertBefore(p,document.documentElement.childNodes[0]),p}if(typeof GM_addStyle=="function"){GM_addStyle(a);return}e(a)})(" .m-video2-awaken-btn,.openapp-dialog,.m-head .launch-app-btn.m-nav-openapp,.m-head .launch-app-btn.home-float-openapp,.m-home .launch-app-btn.home-float-openapp,.m-space .launch-app-btn.m-space-float-openapp,.m-space .launch-app-btn.m-nav-openapp{display:none!important}#app .video .launch-app-btn.m-video-main-launchapp:has([class^=m-video2-awaken]),#app .video .launch-app-btn.m-nav-openapp,#app .video .mplayer-widescreen-callapp,#app .video .launch-app-btn.m-float-openapp,#app .video .m-video-season-panel .launch-app-btn .open-app{display:none!important}#app.LIVE .open-app-btn.bili-btn-warp,#app .m-dynamic .launch-app-btn.m-nav-openapp,#app .m-dynamic .dynamic-float-openapp.dynamic-float-btn,#app .m-opus .float-openapp.opus-float-btn,#app .m-opus .v-switcher .launch-app-btn.list-more,#app .m-opus .opus-nav .launch-app-btn.m-nav-openapp,#app .topic-detail .launch-app-btn.m-nav-openapp,#app .topic-detail .launch-app-btn.m-topic-float-openapp{display:none!important}#app.main-container bili-open-app.btn-download{display:none!important} ");

(function (h, et, it, rt) {
	'use strict';

	var S=typeof GM_getValue<"u"?GM_getValue:void 0,B=typeof GM_info<"u"?GM_info:void 0,nt=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,E=typeof GM_setValue<"u"?GM_setValue:void 0,ot=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,at=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,b=typeof unsafeWindow<"u"?unsafeWindow:void 0,H=window;const st="【移动端】bilibili优化",s=et.noConflict(),m=it.noConflict(),D=H.pops||b.pops,G=H.QRCode||b.QRCode,n=new s.Log(B,b.console||H.console);var O;const J=((O=B==null?void 0:B.script)==null?void 0:O.name)||st,lt=new s.GM_Cookie,Y=!1;n.config({debug:Y,logMaxCount:1e3,autoClearConsole:!0,tag:!0});h.config({position:"bottom",html:!0,maxNums:5,autoClose:!0,showClose:!1,showReverse:!0});const ct=new s.GM_Menu({GM_getValue:S,GM_setValue:E,GM_registerMenuCommand:nt,GM_unregisterMenuCommand:ot}),P=new s.Httpx(at);P.config({logDetails:Y,onabort(){h.warning("请求取消");},ontimeout(){h.error("请求超时");},onerror(t){h.error("请求异常"),n.error(["httpx-onerror 请求异常",t]);}});const L={Object:{defineProperty:b.Object.defineProperty},Function:{apply:b.Function.prototype.apply,call:b.Function.prototype.call},Element:{appendChild:b.Element.prototype.appendChild},setTimeout:b.setTimeout},A=s.addStyle,$="GM_Panel",N="data-key",R="data-default-value",d=function(t,i,e,r,o){let a={text:t,type:"switch",description:o,attributes:{},getValue(){return !!p.getValue(i,e)},callback(l,u){n.success(`${u?"开启":"关闭"} ${t}`),p.setValue(i,!!u);},afterAddToUListCallBack:void 0};return a.attributes&&(a.attributes[N]=i,a.attributes[R]=!!e),a},pt={id:"panel-common",title:"通用",forms:[{text:"功能",type:"forms",forms:[d("监听路由-重载所有功能","bili-listenRouterChange",!0,void 0,"用于处理页面跳转(本页)时功能不生效问题"),d("修复点击UP主正确进入空间","bili-repairEnterUserHome",!0,void 0,"可以修复点击UP主进入个人空间但是跳转404的问题"),d("新标签页打开","bili-go-to-url-blank",!1,void 0,"通过开启【覆盖点击事件】相关的设置，通过新标签页打开链接")]},{text:"变量设置",type:"forms",forms:[d("isLogin","bili-setLogin",!0,void 0,"$store.state.common.noCallApp=true<br>$store.state.common.userInfo.isLogin=true<br>$store.state.loginInfo.isLogin=true"),d("isClient","bili-setIsClient",!0,void 0,"$store.state.video.isClient=true<br>$store.state.opus.isClient=true<br>$store.state.playlist.isClient=true<br>$store.state.ver.bili=true<br>$store.state.ver.biliVer=2333"),d("tinyApp","bili-setTinyApp",!0,void 0,"$store.state.common.tinyApp=true")]},{text:"劫持/拦截",type:"forms",forms:[d("覆盖.launch-app-btn openApp","bili-overrideLaunchAppBtn_Vue_openApp",!0,void 0,"覆盖.launch-app-btn元素上的openApp函数，可阻止点击唤醒/下载App"),d("劫持setTimeout-autoOpenApp","bili-hookSetTimeout_autoOpenApp",!0,void 0,"阻止自动调用App")]}]},x={isVideo(){return window.location.pathname.startsWith("/video/")},isBangumi(){return window.location.pathname.startsWith("/bangumi/")},isSearch(){return window.location.pathname.startsWith("/search")},isLive(){return window.location.hostname==="live.bilibili.com"},isOpus(){return window.location.pathname.startsWith("/opus")},isTopicDetail(){return window.location.pathname.startsWith("/topic-detail")},isDynamic(){return window.location.pathname.startsWith("/dynamic")},isHead(){return window.location.pathname==="/"||window.location.pathname.startsWith("/channel")}},ut={id:"panel-video",title:"视频",isDefault(){return x.isVideo()},forms:[{text:"功能",type:"forms",forms:[d("修复视频底部区域高度","bili-video-repairVideoBottomAreaHeight",!0,void 0,"添加margin-top"),d("自动点击【继续在网页观看】","bili-video-autoClickContinueToWatchOnTheWebpage",!0,void 0,"可避免弹窗出现且自动点击后播放视频"),d("美化显示","bili-video-beautify",!0,void 0,"调整底部推荐视频卡片样式类似哔哩哔哩App"),d("手势返回关闭评论区","bili-video-gestureReturnToCloseCommentArea",!0,void 0,"当浏览器手势触发浏览器回退页面时，关闭评论区"),d("initPlayer","bili-video-initPlayer",!0,void 0,"自动执行初始化播放器"),d("强制本页刷新跳转","bili-video-forceThisPageToRefreshAndRedirect",!1,void 0,"用于解决跳转播放视频时，播放当前视频会有上一个播放视频的声音的情况")]},{text:"变量设置",type:"forms",forms:[d("playBtnNoOpenApp","bili-video-setVideoPlayer",!0,void 0,"playBtnNoOpenApp=true<br>playBtnOpenApp=false<br>coverOpenApp=false"),d("解锁充电限制","bili-video-unlockUpower",!1,void 0,"is_upower_exclusive=true<br>is_upower_play=false<br>is_upower_preview=false")]},{text:"覆盖点击事件",type:"forms",forms:[d("相关视频","bili-video-cover-bottomRecommendVideo",!0,void 0,"点击下面的相关视频可正确跳转至该视频"),d("选集","bili-video-cover-seasonNew",!0,void 0,"点击下面的选集列表内的视频可正确跳转至该视频")]},{text:"劫持/拦截",type:"forms",forms:[d("阻止调用App","bili-video-hook-callApp",!0,void 0,"处理函数: PlayerAgent")]}]},dt={id:"panel-bangumi",title:"番剧",isDefault(){return x.isBangumi()},forms:[{text:"变量设置",type:"forms",forms:[d("pay","bili-bangumi-setPay",!0,void 0,"$store.state.userStat.pay=1<br>$store.state.mediaInfo.user_status.pay=1")]},{text:"覆盖点击事件",type:"forms",forms:[d("【选集】","bili-bangumi-cover-clicl-event-chooseEp",!0,void 0,"让【选集】的视频列表可点击跳转"),d("【其它】","bili-bangumi-cover-clicl-event-other",!0,void 0,"让【PV&其他】、【预告】、【主题曲】、【香境剧场】等的视频列表可点击跳转"),d("【更多推荐】","bili-bangumi-cover-clicl-event-recommend",!0,void 0,"让【更多推荐】的视频列表可点击跳转")]},{text:"劫持/拦截",type:"forms",forms:[d("阻止调用App","bili-bangumi-hook-callApp",!0,void 0,"")]}]},mt={id:"panel-search",title:"搜索",isDefault(){return x.isSearch()},forms:[]},ft={id:"panel-live",title:"直播",isDefault(){return x.isLive()},forms:[{text:"屏蔽",type:"forms",forms:[d("【屏蔽】聊天室","bili-live-block-chatRoom",!1,void 0,"直接不显示底部的聊天室"),d("【屏蔽】xxx进入直播间","bili-live-block-brush-prompt",!1,void 0,"直接不显示底部的xxx进入直播间"),d("【屏蔽】控制面板","bili-live-block-control-panel",!1,void 0,"屏蔽底部的发个弹幕、送礼")]},{text:"劫持/拦截",type:"forms",forms:[d("阻止open-app-btn元素点击事件触发","bili-live-prevent-openAppBtn",!0,void 0,"开启后可不跳转至唤醒App页面")]}]},ht={id:"panel-opus",title:"专栏",isDefault(){return x.isOpus()},forms:[{text:"功能",type:"forms",forms:[d("自动展开阅读全文","bili-opus-automaticallyExpandToReadFullText",!0,void 0,"屏蔽【展开阅读全文】按钮并自动处理全文高度")]},{text:"覆盖点击事件",type:"forms",forms:[d("话题","bili-opus-cover-topicJump",!0,void 0,"点击话题正确跳转"),d("header用户","bili-opus-cover-header",!0,void 0,"点击内容上的发布本动态的用户正确跳转个人空间")]}]},gt={id:"panel-dynamic",title:"动态",isDefault(){return x.isDynamic()},forms:[{text:"覆盖点击事件",type:"forms",forms:[d("话题","bili-dynamic-cover-topicJump",!0,void 0,"点击话题正确跳转"),d("header用户","bili-dynamic-cover-header",!0,void 0,"点击内容上的发布本动态的用户正确跳转个人空间"),d("@用户","bili-dynamic-cover-atJump",!0,void 0,"点击@用户正确跳转个人空间"),d("引用","bili-dynamic-cover-referenceJump",!0,void 0,"点击引用的视频|用户正确跳转")]}]},vt={id:"panel-topic-detail",title:"话题",isDefault(){return x.isTopicDetail()},forms:[]},C={appkey:"4409e2ce8ffd12b8",appsec:"59b43e04ad6965f34319062b478f83dd"};function W(t,i,e){t.appkey=i;const r=new URLSearchParams(t);return r.sort(),rt(r.toString()+e)}const c={getVue(t){return t==null?void 0:t.__vue__},waitVuePropToSet(t,i){function e(){let r=null;return typeof t=="string"?r=document.querySelector(t):typeof t=="function"?r=t():t instanceof HTMLElement&&(r=t),r}i.forEach(r=>{typeof r.msg=="string"&&n.info(r.msg);function o(){let a=e();if(a==null)return !1;let l=c.getVue(a);return l==null?!1:!!r.check(l)}s.waitVueByInterval(()=>e(),o,250,1e4).then(a=>{if(!a)return;let l=e(),u=c.getVue(l);u!=null&&r.set(u);});});},goToUrl(t,i=!1){let e=document.querySelector("#app");if(e==null){h.error("跳转Url: 获取根元素#app失败"),n.error("跳转Url: 获取根元素#app失败："+t);return}let r=c.getVue(e);if(r==null){n.error("获取#app的vue属性失败"),h.error("获取#app的vue属性失败");return}let o=r.$router,a=p.getValue("bili-go-to-url-blank");if(n.info("即将跳转URL："+t),i&&(a=!1),a)window.open(t,"_blank");else {if(t.startsWith("http")||t.startsWith("//")){t.startsWith("//")&&(t=window.location.protocol+t);let l=new URL(t);if(l.origin===window.location.origin)t=l.pathname+l.search+l.hash;else {n.info("不同域名，直接本页打开，不用Router："+t),window.location.href=t;return}}n.info("$router push跳转Url："+t),o.push(t);}},goToLogin(t=""){window.open(`https://passport.bilibili.com/h5-app/passport/login?gourl=${encodeURIComponent(t)}`);},parseDuration(t){if(typeof t!="number"&&(t=parseInt(t)),isNaN(t))return t.toString();function i(e){return e<10?`0${e}`:e}return t<60?`0:${i(t)}`:t>=60&&t<3600?`${Math.floor(t/60)}:${i(t%60)}`:`${Math.floor(t/3600)}:${i(Math.floor(t/60)%60)}:${i(t%60)}`},hookGestureReturnByVueRouter(t){function i(){n.success("触发popstate事件"),r(!0);}function e(){n.success("监听地址改变"),t.vueObj.$router.history.push(t.hash),m.on(window,"popstate",i);}async function r(o=!1){if(m.off(window,"popstate",i),!t.callback(o))for(;;)if(t.vueObj.$router.history.current.hash===t.hash)n.info("后退！"),t.vueObj.$router.back(),await s.sleep(250);else return}return e(),{resumeBack:r}},loadScript(t){let i=document.createElement("script");return i.src=t,document.head.appendChild(i),new Promise(e=>{i.onload=function(){n.success("script标签加载完毕："+t),setTimeout(()=>{e(!0);},100);};})},addBlockCSS(...t){let i=[];t.length!==0&&(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""||(t.forEach(e=>{Array.isArray(e)?i=i.concat(e):i.push(e);}),A(`${i.join(`,
`)}{display: none !important;}`)));}};function Z(t){return (t==null?void 0:t.code)===0&&((t==null?void 0:t.message)==="0"||(t==null?void 0:t.message)==="success")}const F={async getQrCodeInfo(){var a;let t="https://passport.bilibili.com/x/passport-tv-login/qrcode/auth_code",i={appkey:C.appkey,local_id:"0",csrf:((a=lt.get("bili_jct"))==null?void 0:a.value)||"",ts:"0"},e=W(i,C.appkey,C.appsec),r=await P.post(t,{data:s.toSearchParamsStr({...i,sign:e}),headers:{"Content-Type":"application/x-www-form-urlencoded"},responseType:"json",fetch:!0});if(n.info(r),!r.status)return;let o=s.toJSON(r.data.responseText);if(o.code!==0){h.error(o.message);return}return o.data},async poll(t){let i="https://passport.bilibili.com/x/passport-tv-login/qrcode/poll",e={appkey:C.appkey,auth_code:t,local_id:"0",ts:"0"},r=W(e,C.appkey,C.appsec),o=await P.post(i,{data:s.toSearchParamsStr({...e,sign:r}),headers:{"Content-Type":"application/x-www-form-urlencoded"},responseType:"json",fetch:!0});if(!o.status)return {success:!1,message:"网络错误",action:void 0};const a=s.toJSON(o.data.responseText),l={0:"成功","-3":"API校验密匙错误","-400":"请求错误","-404":"啥都木有",86038:"二维码已失效",86039:"二维码尚未确认",86090:"二维码已扫码未确认"};if(!Z(a)){const y=a.code.toString(),g=a.message||l[y]||"未知错误";return y==="86038"?{success:!1,message:g,action:"refresh"}:y==="86039"||y==="86090"?{success:!1,message:g,action:"wait"}:{success:!1,message:g,action:void 0}}const u=a.data.access_token,v=Date.now()+a.data.expires_in*1e3;return {success:!0,message:"获取成功",accessKey:u,accessKeyExpireAt:v}}},q={async init(){h.info("正在申请二维码...");let t=await this.getQRCodeInfo();t&&this.confirmScanQrcode(t);},getQRCodeInfo:async function(){n.info("正在申请二维码...");let t=await F.getQrCodeInfo();return n.info(["获取到二维码信息",t]),t},async confirmScanQrcode(t){let i=D.alert({title:{text:"请扫描二维码登录",position:"center",html:!1,style:""},content:{text:'<div id="bili-qrcode-canvas"></div>',html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(a){o=!0,a.close();}}},mask:{enable:!0,clickEvent:{toClose:!1,toHide:!1}},only:!0,width:"310px",height:"365px",drag:!0,dragLimit:!0,style:`
            #bili-qrcode-canvas{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
            }
            `}),e=i.$shadowRoot.querySelector("#bili-qrcode-canvas"),r=new G(e,{text:t.url,width:300,height:300,colorDark:"#000000",colorLight:"#ffffff",correctLevel:G.CorrectLevel.H}),o=!1;for(;;){if(o){n.error("用户关闭扫码登录弹窗、取消扫码登录");break}n.info("正在等待扫码登录...");let a=await F.poll(t.auth_code);if(a!=null&&a.success){this.setAccessTokenInfo({access_token:a.accessKey,expireAt:a.accessKeyExpireAt}),n.info(["扫码登录成功",a]),n.success("扫码登录成功"),h.success("扫码登录成功");break}else if((a==null?void 0:a.action)==="refresh"){n.info("刷新二维码"),h.info("刷新二维码");let l=await this.getQRCodeInfo();l&&(r.clear(),r.makeCode(l.url));}else if(a.action==="wait")a.message==="二维码已扫码未确认"&&(n.info("已扫码，等待确认..."),D.loading({parent:e,content:{text:"已扫码，等待确认"},mask:{enable:!0}}));else {n.error(a.message),h.error(a.message);break}await s.sleep(1500);}i.close();},setAccessTokenInfo(t){E("bili-accessTokenInfo",t);},getAccessTokenInfo(){let t=S("bili-accessTokenInfo");return t&&t.expireAt>Date.now()?t:null}},bt=function(t,i,e,r,o,a="",l,u){let v={text:t,type:"input",isNumber:!!l,isPassword:!!u,attributes:{},description:r,getValue(){return p.getValue(i,e)},callback(y,g){p.setValue(i,g);},placeholder:a};return v.attributes&&(v.attributes[N]=i,v.attributes[R]=e),v};var X;const yt={id:"panel-head",title:"首页",forms:[{text:"功能",type:"forms",forms:[d("美化显示","bili-head-beautify",!0,void 0,"调整瀑布流视频卡片样式类似哔哩哔哩App"),d("补充推荐视频信息","bili-head-supplementaryVideoStreamingInformation",!0,void 0,"给视频添加UP主名，当前视频总时长信息")]},{text:"推荐",type:"forms",forms:[d("启用","bili-head-recommend-enable",!1,void 0,"添加【推荐】标签，数据来源为App端(如果填入了access_token的话)"),d("显示【图文】","bili-head-recommend-push-graphic",!0,void 0,"加载App端推送的【图文】卡片"),bt("access_token","bili-head-recommend-access_token",((X=q.getAccessTokenInfo())==null?void 0:X.access_token)||"","填入access_token，即可获取推荐视频数据",void 0,void 0,!1,!0)]}]},p={$data:{data:new s.Dictionary,oneSuccessExecMenu:new s.Dictionary,onceExec:new s.Dictionary,scriptName:J,key:$,attributeKeyName:N,attributeDefaultValueName:R},$listener:{listenData:new s.Dictionary},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},initExtensionsMenu(){b.top===b.self&&ct.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:!1,isStoreValue:!1,showText(t){return t},callback:()=>{this.showPanel();}},{key:"go_to_login",text:"🛠 前往登录",autoReload:!1,isStoreValue:!1,showText(t){return t},callback(){c.goToLogin();}},{key:"go_to_login_to_parse_access_key",text:"🛠 登录并解析access_key",autoReload:!1,isStoreValue:!1,showText(t){return t},callback(){q.init();}}]);},initPanelDefaultValue(){let t=this;function i(r){if(!r.attributes)return;let o=r.attributes[N],a=r.attributes[R];if(o==null){n.warn(["请先配置键",r]);return}t.$data.data.has(o)&&n.warn("请检查该key(已存在): "+o),t.$data.data.set(o,a);}let e=this.getPanelContentConfig();for(let r=0;r<e.length;r++){let o=e[r];if(!o.forms)continue;let a=o.forms;for(let l=0;l<a.length;l++){let u=a[l];if(u.forms){let v=u.forms;for(let y=0;y<v.length;y++)i(v[y]);}else i(u);}}},setValue(t,i){let e=S($,{}),r=e[t];e[t]=i,E($,e),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,r,i);},getValue(t,i){let r=S($,{})[t];return r??(this.$data.data.has(t)?this.$data.data.get(t):i)},deleteValue(t){let i=S($,{}),e=i[t];Reflect.deleteProperty(i,t),E($,i),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,e,void 0);},addValueChangeListener(t,i){let e=Math.random();return this.$listener.listenData.set(t,{id:e,key:t,callback:i}),e},removeValueChangeListener(t){let i=null;for(const[e,r]of this.$listener.listenData.entries())if(r.id===t){i=e;break}this.$listener.listenData.delete(i);},hasKey(t){let i=S($,{});return t in i},execMenu(t,i){if(typeof t!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(t)){n.warn(`${t} 键不存在`);return}let e=p.getValue(t);e&&i(e);},execMenuOnce(t,i){if(typeof t!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(t)){n.warn(`${t} 键不存在`);return}let e=p.getValue(t);if(e){if(this.$data.oneSuccessExecMenu.has(t))return;i(e),this.$data.oneSuccessExecMenu.set(t,1);}},onceExec(t,i){if(typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(t)||(i(),this.$data.onceExec.set(t,1));},showPanel(){D.panel({title:{text:`${J}-设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:this.isMobile(),width:this.getWidth(),height:this.getHeight(),drag:!0,only:!0});},isMobile(){return window.outerWidth<550},getWidth(){return window.outerWidth<550?"92dvw":"550px"},getHeight(){return window.outerHeight>450?"80dvh":"450px"},getPanelContentConfig(){return [pt,yt,ut,ht,gt,dt,vt,mt,ft]}},wt=`/* 主页 */\r
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
`,z={$isHook:{windowPlayerAgent:!1,hookWebpackJsonp_openApp:!1,overRideLaunchAppBtn_Vue_openApp:!1},$data:{setTimeout:[]},windowWebPack(t="webpackJsonp",i,e){let r;L.Object.defineProperty(b,t,{get(){return r},set(o){n.success("成功劫持webpack，当前webpack名："+t),r=o;const a=r.push;r.push=function(...l){let u=l[0][0];return (i==u||Array.isArray(i)&&Array.isArray(u)&&JSON.stringify(i)===JSON.stringify(u))&&Object.keys(l[0][1]).forEach(v=>{let y=l[0][1][v];l[0][1][v]=function(...g){let _=y.call(this,...g);return g[0]=e(g[0]),_};}),a.call(this,...l)};}});},windowPlayerAgent(){if(this.$isHook.windowPlayerAgent)return;this.$isHook.windowPlayerAgent=!0;let t;L.Object.defineProperty(b,"PlayerAgent",{get(){return new Proxy({},{get(i,e){return e==="openApp"?function(...r){let o=r[0];if(n.info(["调用PlayerAgent.openApp",o]),o.event==="fullScreen"){let a=document.querySelector(".mplayer-btn-widescreen");a?a.click():n.warn("主动再次点击全屏按钮失败，原因：未获取到.mplayer-btn-widescreen元素");}}:t[e]}})},set(i){t=i;}});},setTimeout(t){if(this.$data.setTimeout.push(t),this.$data.setTimeout.length>1){n.info("window.setTimeout hook新增劫持判断参数："+t);return}b.setTimeout=function(...i){let e=i[0].toString();if(e.match(t)){n.success(["劫持setTimeout的函数",e]);return}return L.setTimeout.apply(this,i)};},overRideLaunchAppBtn_Vue_openApp(){if(this.$isHook.overRideLaunchAppBtn_Vue_openApp)return;this.$isHook.overRideLaunchAppBtn_Vue_openApp=!0;function t(i){typeof i.openApp!="function"||i.openApp.toString().includes("阻止唤醒App")||(i.openApp=function(...r){n.success(["openApp：阻止唤醒App",r]);});}s.mutationObserver(document,{config:{subtree:!0,childList:!0,attributes:!0},callback(){document.querySelectorAll(".launch-app-btn").forEach(i=>{let e=c.getVue(i);e&&(t(e),e.$children&&e.$children.length&&e.$children.forEach(r=>{t(r);}));});}});}},xt={init(){p.execMenuOnce("bili-video-hook-callApp",()=>{n.info("hook window.PlayerAgent"),z.windowPlayerAgent();});}},I={getUserSpaceUrl(t){return `https://m.bilibili.com/space/${t}`},getUserSpaceDynamicUrl(t){return `https://m.bilibili.com/dynamic/${t}`},getUserSpaceOpusUrl(t){return `https://m.bilibili.com/opus/${t}`},getVideoUrl(t){return `https://m.bilibili.com/video/${t}`}},f={className:{bangumi:"#app.main-container",dynamic:"#app .m-dynamic",opus:"#app .m-opus",search:"#app .m-search","topic-detail":"#app .topic-detail",video:"#app .video",head:"#app .m-head"}},_t=`#app .video {\r
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
`,kt={$data:{isInitPlayer:!1,isUnlockUpower:!1},init(){p.execMenu("bili-video-initPlayer",()=>{this.initPlayer();}),p.execMenu("bili-video-setVideoPlayer",()=>{this.setVideoPlayer();}),p.execMenu("bili-video-unlockUpower",()=>{this.unlockUpower();});},initPlayer(){if(this.$data.isInitPlayer)return;this.$data.isInitPlayer=!0;let t=this;s.waitNode("#bilibiliPlayer",3e3).then(async i=>{if(!i){t.$data.isInitPlayer=!1;return}await s.sleep(300),c.waitVuePropToSet(".m-video-player",[{msg:"等待设置参数 fullScreenCallApp",check(e){return typeof(e==null?void 0:e.fullScreenCallApp)=="boolean"},set(e){e.fullScreenCallApp=!1,n.success("成功设置参数 fullScreenCallApp=false");}},{msg:"等待设置参数 gameMode",check(e){return typeof(e==null?void 0:e.gameMode)=="boolean"},set(e){e.gameMode=!0,n.success("成功设置参数 gameMode=true");}},{msg:"等待获取函数 initPlayer()",check(e){return typeof(e==null?void 0:e.initPlayer)=="function"},set(e){t.$data.isInitPlayer=!1;function r(){let o,a,l=1,u=!1,v=new s.LockFunction(async()=>{var g,_,w,k;if(document.querySelector("#bilibiliPlayer video")){u=!0,(g=b==null?void 0:b.player)==null||g.off("restart_call_app"),(_=b==null?void 0:b.player)==null||_.off("force_call_app_show"),n.success("<video>标签已成功初始化");return}b.BPlayerMobile==null&&(n.error("未加载player播放器，主动引入script标签"),await c.loadScript("https://s1.hdslb.com/bfs/static/player/main/html5/mplayer.js?v=2862592")),e.initPlayer(!0),n.success("第 "+l+" 次未检测到视频，调用初始化视频函数 initPlayer()"),await s.sleep(300),(w=b==null?void 0:b.player)==null||w.off("restart_call_app"),(k=b==null?void 0:b.player)==null||k.off("force_call_app_show"),l++;});o=setInterval(async()=>{await v.run(),u&&(clearTimeout(a),clearInterval(o));},600),a=setTimeout(()=>{n.warn("检测视频超时3s，取消检测"),clearInterval(o);},3e3);}r();}}]);});},unlockUpower(){c.waitVuePropToSet(f.className.video,[{msg:"设置属性 __vue__.info.is_upower_exclusive",check(t){var i;return typeof((i=t==null?void 0:t.info)==null?void 0:i.is_upower_exclusive)=="boolean"},set(t){t.info.is_upower_exclusive=!1,n.success("成功设置属性  __vue__.info.is_upower_exclusive=false");}},{msg:"设置属性 __vue__.info.is_upower_play",check(t){var i;return typeof((i=t==null?void 0:t.info)==null?void 0:i.is_upower_play)=="boolean"},set(t){t.info.is_upower_play=!1,n.success("成功设置属性  __vue__.info.is_upower_play=false");}},{msg:"设置属性 __vue__.info.is_upower_preview",check(t){var i;return typeof((i=t==null?void 0:t.info)==null?void 0:i.is_upower_preview)=="boolean"},set(t){t.info.is_upower_preview=!1,n.success("成功设置属性  __vue__.info.is_upower_preview=false");}}]);},setVideoPlayer(){c.waitVuePropToSet(f.className.video+" .m-video-player",[{msg:"设置参数 playBtnNoOpenApp",check(t){return typeof t.playBtnNoOpenApp=="boolean"},set(t){t.playBtnNoOpenApp=!0,n.success("成功设置参数 playBtnNoOpenApp=true");}},{msg:"设置参数 playBtnOpenApp",check(t){return typeof t.playBtnOpenApp=="boolean"},set(t){t.playBtnOpenApp=!1,n.success("成功设置参数 playBtnOpenApp=false");}},{msg:"设置参数 coverOpenApp",check(t){return typeof t.coverOpenApp=="boolean"},set(t){t.coverOpenApp=!1,n.success("成功设置参数 coverOpenApp=false");}}]);}},$t={$data:{isAddBeautifyCSS:!1},init(){xt.init(),kt.init(),p.execMenuOnce("bili-video-repairVideoBottomAreaHeight",()=>{this.repairVideoBottomAreaHeight();}),p.execMenuOnce("bili-video-autoClickContinueToWatchOnTheWebpage",()=>{this.autoClickContinueToWatchOnTheWebpage();}),p.execMenu("bili-video-beautify",()=>{this.beautify();}),p.execMenuOnce("bili-video-cover-bottomRecommendVideo",()=>{this.coverBottomRecommendVideo();}),p.execMenuOnce("bili-video-gestureReturnToCloseCommentArea",()=>{this.gestureReturnToCloseCommentArea();}),p.execMenuOnce("bili-video-cover-seasonNew",()=>{this.coverSeasonNew();});},beautify(){n.info("美化"),this.$data.isAddBeautifyCSS||(this.$data.isAddBeautifyCSS=!0,A(_t)),s.waitNode(f.className.video+" .bottom-tab .list-view .card-box",1e4).then(t=>{if(!t){n.error("$cardBox is null");return}function i(o){var v,y;let a=o.querySelector(".title"),l=o.querySelector(".count .left"),u=c.getVue(o);if(a&&l&&!o.querySelector(".gm-right-container")){let g=document.createElement("div"),_=(y=(v=u==null?void 0:u.info)==null?void 0:v.owner)==null?void 0:y.name;g.className="gm-up-name",g.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${_}</span>
						`;let w=document.createElement("div"),k=document.createElement("div");w.className="gm-right-container",k.className="gm-right-bottom",m.after(a,w),w.appendChild(a),w.appendChild(k),k.appendChild(g),k.appendChild(l);}}function e(o){var v,y,g;let a=o.querySelector(".title"),l=o.querySelector(".count"),u=c.getVue(o);if(a&&l&&!o.querySelector(".gm-right-container")){let _=(v=u==null?void 0:u.info)==null?void 0:v.duration,w=document.createElement("div");w.className="duration",w.innerText=c.parseDuration(_);let k=l.cloneNode(!0);k.className="left";let U=document.createElement("div"),tt=(g=(y=u==null?void 0:u.info)==null?void 0:y.owner)==null?void 0:g.name;l.appendChild(w),U.className="gm-up-name",U.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${tt}</span>
						`;let T=document.createElement("div"),M=document.createElement("div");T.className="gm-right-container",M.className="gm-right-bottom",m.after(a,T),T.appendChild(a),T.appendChild(M),M.appendChild(U),M.appendChild(k);}}let r=new s.LockFunction(()=>{document.querySelectorAll(f.className.video+" .bottom-tab .list-view .card-box .v-card-toapp").forEach(o=>{i(o);}),document.querySelectorAll(f.className.video+" .bottom-tab .list-view .card-box>a.v-card").forEach(o=>{e(o);});},25);s.mutationObserver(document.querySelector(f.className.video),{config:{subtree:!0,childList:!0},callback(){setTimeout(()=>{r.run();},0);}});});},repairVideoBottomAreaHeight(){n.info("修复视频底部区域高度"),A(`
		${f.className.video} {
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
			${f.className.video}{
				.m-video-info-new{
					margin-top: 72vmin;
				}
			}
		}
		`);},autoClickContinueToWatchOnTheWebpage(){m.on(document,"click",f.className.video+" .main-info .btn",function(){n.info("触发点击【立即播放】，自动等待弹窗出现"),s.waitNode(".to-see",1e4).then(t=>{if(!t){n.error("弹窗按钮【继续在网页观看】10秒内未出现，取消等待");return}n.success("自动点击 继续在网页观看"),t.click();});});},coverBottomRecommendVideo(){n.info("覆盖 相关视频 点击事件"),m.on(document,"click",f.className.video+" .list-view .card-box .launch-app-btn",function(t){let i=t.target,e=c.getVue(i);if(!e){h.error("获取相关视频的__vue__失败");return}let r=e.bvid;if(s.isNull(r))if(e.$children&&e.$children[0]&&s.isNotNull(e.$children[0].bvid))r=e.$children[0].bvid;else {h.error("获取相关视频的bvid失败");return}n.info("相关视频的bvid: "+r),c.goToUrl(I.getVideoUrl(r)),s.preventEvent(t);},{capture:!0});},coverSeasonNew(){n.info("覆盖 选集视频列表 点击事件");function t(i){let e=i.target,r=c.getVue(e);if(!r){h.error("获取选集视频的目标视频的__vue__失败");return}let o=r.bvid;if(s.isNull(o)){h.error("获取相关视频的bvid失败");return}n.info("相关视频的bvid: "+o),c.goToUrl(I.getVideoUrl(o)),s.preventEvent(i);}m.on(document,"click",f.className.video+" .m-video-season-new .video-card .launch-app-btn",t,{capture:!0}),m.on(document,"click",f.className.video+" .m-video-season-panel .season-video-item .launch-app-btn",t,{capture:!0});},gestureReturnToCloseCommentArea(){n.info("手势返回关闭评论区，全局监听document点击.sub-reply-preview"),s.waitNode("#app").then(t=>{s.waitVueByInterval(t,()=>{var e,r;let i=c.getVue(t);return i==null?!1:typeof((r=(e=i==null?void 0:i.$router)==null?void 0:e.options)==null?void 0:r.scrollBehavior)!=null},250,1e4).then(i=>{let e=c.getVue(t);if(!e){n.error("获取#app的vue属性失败");return}let r=e.$router.options.scrollBehavior;e.$router.options.scrollBehavior=function(o,a,l){return o.hash==="#/seeCommentReply"?(n.info("当前操作为打开评论区，scrollBehavior返回null"),null):o.hash===""&&a.hash==="#/seeCommentReply"?(n.info("当前操作为关闭评论区，scrollBehavior返回null"),null):r.call(this,...arguments)};});}),m.on(document,"click",".sub-reply-preview",function(t){let i=document.querySelector("#app"),e=c.getVue(i);if(!e){n.error("获取#app元素失败");return}let r=c.hookGestureReturnByVueRouter({vueObj:e,hash:"#/seeCommentReply",callback(o){if(!o)return !1;let a=document.querySelector(".dialog-close-icon");return a?a.click():n.error("评论区关闭失败，原因：元素dialog-close-icon获取失败"),!0}});s.waitNode(".dialog-close-icon").then(o=>{m.on(o,"click",function(){r.resumeBack(!1);},{capture:!0,once:!0});});});}},Ct={init(){p.execMenu("bili-bangumi-setPay",()=>{this.setPay();});},setPay(){c.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.userStat.pay",check(t){var i,e,r;return typeof typeof((r=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.userStat)==null?void 0:r.pay)=="number"},set(t){n.success("成功设置参数 $store.state.userStat.pay=1"),t.$store.state.userStat.pay=1;}},{msg:"设置参数 $store.state.mediaInfo.user_status.pay",check(t){var i,e,r,o;return typeof((o=(r=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.mediaInfo)==null?void 0:r.user_status)==null?void 0:o.pay)=="number"},set(t){n.success("成功设置参数 $store.state.mediaInfo.user_status.pay=1"),t.$store.state.mediaInfo.user_status.pay=1;}}]);}},V={getUrl(t){if(t!=null)return t.getAttribute("universallink")},jumpToUrl(t){let e=t.target.querySelector("bili-open-app");if(e){let r=V.getUrl(e);r?c.goToUrl(r):(h.error("获取bili-open-app的Url失败"),n.error("获取bili-open-app的Url失败"));}else h.error("未获取到<bili-open-app>元素"),n.error("未获取到<bili-open-app>元素");}},At={init(){Ct.init(),p.execMenuOnce("bili-bangumi-hook-callApp",()=>{this.hookCallApp();}),p.execMenu("bili-bangumi-cover-clicl-event-chooseEp",()=>{this.setChooseEpClickEvent();}),p.execMenu("bili-bangumi-cover-clicl-event-other",()=>{this.setClickOtherVideo();}),p.execMenu("bili-bangumi-cover-clicl-event-recommend",()=>{this.setRecommendClickEvent();});},hookCallApp(){let t=b.setTimeout;b.setTimeout=function(...i){if(i[0].toString().includes("autoOpenApp")){n.success(["阻止唤醒App",i]);return}return t.apply(this,i)};},setPay(){c.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.userStat.pay",check(t){var i,e,r;return typeof typeof((r=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.userStat)==null?void 0:r.pay)=="number"},set(t){n.success("成功设置参数 $store.state.userStat.pay=1"),t.$store.state.userStat.pay=1;}},{msg:"设置参数 $store.state.mediaInfo.user_status.pay",check(t){var i,e,r,o;return typeof((o=(r=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.mediaInfo)==null?void 0:r.user_status)==null?void 0:o.pay)=="number"},set(t){n.success("成功设置参数 $store.state.mediaInfo.user_status.pay=1"),t.$store.state.mediaInfo.user_status.pay=1;}}]);},setChooseEpClickEvent(){s.waitNode(f.className.bangumi+" .ep-list-pre-wrapper ul.ep-list-pre-container").then(t=>{n.info("覆盖【选集】的点击事件"),m.on(t,"click","li.episode-item",function(i){s.preventEvent(i),V.jumpToUrl(i);},{capture:!0});}),s.waitNode(f.className.bangumi+" .ep-list-pre-wrapper ul.season-list-wrapper").then(t=>{n.info("覆盖【xx季】的点击事件"),m.on(t,"click","li",function(i){s.preventEvent(i),V.jumpToUrl(i);},{capture:!0});}),s.waitNode(f.className.bangumi+" .ep-list-pre-header").then(t=>{n.info("覆盖【选集】右上角的【全xx话】Arrow的点击事件"),m.on(t,"click",function(i){s.preventEvent(i);},{capture:!0});});},setClickOtherVideo(){s.waitNode(f.className.bangumi+" .section-preview-wrapper ul.ep-list-pre-container").then(t=>{n.info("覆盖【PV&其他】、【预告】、【主题曲】的点击事件"),m.on(t,"click","li.section-preview-item",function(i){s.preventEvent(i),V.jumpToUrl(i);},{capture:!0});}),s.waitNode(f.className.bangumi+" .section-preview-header").then(t=>{n.info("覆盖【PV&其他】、【预告】、【主题曲】右上角的Arrow的点击事件"),m.on(t,"click",function(i){s.preventEvent(i);},{capture:!0});});},setRecommendClickEvent(){s.waitNode(f.className.bangumi+" .recom-wrapper ul.recom-list").then(t=>{n.info("覆盖【更多推荐】番剧的点击事件"),m.on(t,"click","li.recom-item-v2",function(i){s.preventEvent(i),V.jumpToUrl(i);},{capture:!0});});}},St={init(){p.execMenuOnce("bili-live-prevent-openAppBtn",()=>{this.preventOpenAppBtn();}),p.execMenuOnce("bili-live-block-chatRoom",()=>{this.blockChatRoom();}),p.execMenuOnce("bili-live-block-brush-prompt",()=>{this.blockBrushPrompt();}),p.execMenuOnce("bili-live-block-control-panel",()=>{this.blockControlPanel();});},preventOpenAppBtn(){s.waitNode("body").then(t=>{n.info("阻止.open-app-btn元素触发点击事件"),m.on(t,"click",".open-app-btn",function(i){s.preventEvent(i);},{capture:!0}),m.on(t,"click","#web-player-controller-wrap-el",function(i){s.preventEvent(i);},{capture:!0});});},blockChatRoom(){n.info("屏蔽聊天室"),c.addBlockCSS("#chat-items");},blockBrushPrompt(){n.info("屏蔽xxx进入直播间"),c.addBlockCSS("#brush-prompt");},blockControlPanel(){n.info("屏蔽底部工具栏"),c.addBlockCSS(".control-panel");}},Vt={init(){p.execMenuOnce("bili-opus-cover-topicJump",()=>{this.coverTopicJump();}),p.execMenuOnce("bili-opus-automaticallyExpandToReadFullText",()=>{this.automaticallyExpandToReadFullText();}),p.execMenuOnce("bili-opus-cover-header",()=>{this.coverHeaderJump();});},coverTopicJump(){n.info("覆盖话题跳转点击事件"),m.on(document,"click",f.className.opus+" .launch-app-btn.opus-module-topic",function(t){var a;let i=t.target,e=c.getVue(i);if(!e){h.error("获取话题的__vue__失败");return}let r=(a=e==null?void 0:e.$props)==null?void 0:a.data,o=r==null?void 0:r.jump_url;if(s.isNull(o)){h.error("获取话题的jump_url失败");return}n.info(["话题的跳转信息: ",r]),c.goToUrl(o);},{capture:!0});},automaticallyExpandToReadFullText(){n.info("自动展开阅读全文"),c.addBlockCSS(f.className.opus+" .opus-read-more"),A(`
		${f.className.opus} .opus-module-content{
			overflow: unset !important;
    		max-height: unset !important;
		}
		`);},coverHeaderJump(){n.info("覆盖header点击事件"),m.on(document,"click",f.className.opus+" .opus-module-author",function(t){var o;s.preventEvent(t);let i=t.target,e=c.getVue(i);if(!e){h.error("获取vue属性失败");return}let r=(o=e==null?void 0:e.data)==null?void 0:o.mid;if(!r){h.error("获取mid失败");return}c.goToUrl(I.getUserSpaceUrl(r));},{capture:!0});}},Tt={init(){p.execMenuOnce("bili-dynamic-cover-topicJump",()=>{this.coverTopicJump();}),p.execMenuOnce("bili-dynamic-cover-atJump",()=>{this.coverAtJump();}),p.execMenuOnce("bili-dynamic-cover-referenceJump",()=>{this.coverReferenceJump();}),p.execMenuOnce("bili-dynamic-cover-header",()=>{this.coverHeaderJump();});},coverHeaderJump(){n.info("覆盖header点击事件"),m.on(document,"click",f.className.dynamic+" .launch-app-btn .dyn-header",function(t){s.preventEvent(t);let i=t.target,e=c.getVue(i);if(!e){h.error("获取vue属性失败");return}let r=e.url;if(!r){h.error("获取url失败");return}c.goToUrl(r);},{capture:!0});},coverTopicJump(){n.info("覆盖话题跳转点击事件"),m.on(document,"click",f.className.dynamic+" .launch-app-btn .bili-dyn-topic",function(t){var a;s.preventEvent(t);let i=t.target,e=c.getVue(i);if(!e){h.error("获取vue属性失败");return}let r=(a=e==null?void 0:e.$props)==null?void 0:a.data,o=r==null?void 0:r.jump_url;if(s.isNull(o)){h.error("获取jump_url失败");return}n.info(["话题的跳转信息: ",r]),c.goToUrl(o);},{capture:!0});},coverAtJump(){n.info("覆盖@ 跳转"),m.on(document,"click",f.className.dynamic+" .at",function(t){var r,o;s.preventEvent(t);let i=t.target,e=i.getAttribute("data-oid")||((o=(r=c.getVue(i))==null?void 0:r.$props)==null?void 0:o.rid);if(s.isNull(e)){h.error("获取data-oid或rid失败");return}n.info("用户的oid: "+e),c.goToUrl(I.getUserSpaceDynamicUrl(e));},{capture:!0});},coverReferenceJump(){n.info("覆盖引用的点击事件"),m.on(document,"click",f.className.dynamic+" .dyn-content .reference .dyn-orig-author",function(t){s.preventEvent(t);let e=t.target.getAttribute("data-url");if(!e){h.error("获取data-url失败");return}c.goToUrl(e);},{capture:!0}),m.on(document,"click",f.className.dynamic+" .dyn-content .reference .dyn-archive",function(t){var o;s.preventEvent(t);let i=t.target,e=c.getVue(i);if(!e){h.error("获取vue属性失败");return}let r=(o=e==null?void 0:e.data)==null?void 0:o.jump_url;if(s.isNull(r)){h.error("获取jump_url失败");return}c.goToUrl(r);},{capture:!0});}},Mt=`#app .m-head .m-recommend-view {\r
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
`;var Bt=23442827791579n,Et=1n<<51n,Q=58n,Pt="FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf";function Nt(t){const i=["B","V","1","0","0","0","0","0","0","0","0","0"];let e=i.length-1,r=(Et|BigInt(t))^Bt;for(;r>0;)i[e]=Pt[Number(r%BigInt(Q))],r=r/Q,e-=1;return [i[3],i[9]]=[i[9],i[3]],[i[4],i[7]]=[i[7],i[4]],i.join("")}const K=t=>(t.startsWith("http://")&&(t=t.replace(/^http/,"https")),t),Rt={$flag:{isInitCSS:!1,isLoadingNextPage:!1},$data:{intersectionObserver:null},$ele:{$listView:null,$videoListBox:null,$videoList:null,$cardBox:null,$listViewShim:null},$cardGoto:{av:"av",picture:"picture"},init(){this.setCSS(),m.ready(()=>{this.addRecommendTag();});},setCSS(){this.$flag.isInitCSS||(this.$flag.isInitCSS=!0,A(Mt));},reset(){n.info("重置状态"),this.$flag.isLoadingNextPage=!1,this.removeScrollEvent(),Object.keys(this.$ele).forEach(t=>{this.$ele[t]=null;});},addRecommendTag(){if(document.querySelector(".channel-menu a.recommend-tag"))return;let t=document.querySelector(".channel-menu .v-switcher");if(!t){n.error("添加推荐标签失败，原因：.channel-menu .v-switcher不存在");return}let i=m.createElement("a",{className:"v-switcher__header__tabs__item recommend-tag",innerHTML:"<span>推荐</span>"},{href:"javascript:;"}),e=m.createElement("div",{className:"m-recommend-view",innerHTML:`
            <div class="list-view">
                <div class="video-list-box">
                    <div class="video-list">
                        <div class="card-box">

                        </div>
                    </div>
                </div>
                <div class="list-view__shim" style="z-index:-1;user-select:none;pointer-events:none;background:transparent;left:0;bottom:0;width:100%;height:200px;"></div>
            </div>
            `});this.$ele.$listView=e.querySelector(".list-view"),this.$ele.$videoListBox=e.querySelector(".video-list-box"),this.$ele.$videoList=e.querySelector(".video-list"),this.$ele.$cardBox=e.querySelector(".card-box"),this.$ele.$listViewShim=e.querySelector(".list-view__shim");let r=document.querySelector("#app .m-head");r&&r.appendChild(e),m.on(i,"click",o=>{s.preventEvent(o),i.classList.add("is-avtive"),this.recommendClickEvent();}),m.on(t,"click",()=>{i.classList.remove("is-avtive");},{capture:!0}),m.on(this.$ele.$cardBox,"click",".v-card",o=>{s.preventEvent(o);let a=o.target;window.open(a.href,"_blank");}),m.before(t,i),this.setScrollEvent(),window.location.hash==="#/recommend/"&&i.click();},async recommendClickEvent(){c.goToUrl("#/recommend/",!0);},setScrollEvent(){n.success("监听滚动: IntersectionObserver"),this.$data.intersectionObserver=new IntersectionObserver(async t=>{!this.$flag.isLoadingNextPage&&t[0].isIntersecting&&(this.$flag.isLoadingNextPage=!0,await this.scrollEvent(),this.$flag.isLoadingNextPage=!1);},{threshold:0}),this.$data.intersectionObserver.observe(this.$ele.$listViewShim);},removeScrollEvent(){var t;(t=this.$data.intersectionObserver)==null||t.disconnect(),this.$data.intersectionObserver=null;},async scrollEvent(){let t=await this.getRecommendVideoInfo();if(!t)return;n.success(["获取推荐视频信息",t]);let i=document.createDocumentFragment(),e=p.getValue("bili-head-recommend-push-graphic");t.forEach(r=>{let o=null;if(r.goto===this.$cardGoto.av)o=this.getRecommendItemAVElement(r);else if(e&&r.goto===this.$cardGoto.picture)o=this.getRecommendItemPictureElement(r);else {n.error(["该goto暂未适配",r]);return}i.appendChild(o);}),this.$ele.$cardBox.appendChild(i);},async getRecommendVideoInfo(){var o;let t={appkey:C.appkey,access_key:((o=q.getAccessTokenInfo())==null?void 0:o.access_token)||""},e=await P.get("https://app.bilibili.com/x/v2/feed/index"+"?"+s.toSearchParamsStr(t),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(!e.status)return;let r=s.toJSON(e.data.responseText);if(!Z(r)){h.error(r.message);return}return r.data.items},getRecommendItemPictureElement(t){let i=t.goto,e=t.param,r="/opus/"+e,o=t.args.up_name,a=t.title,l=K(t.cover),u=t.cover_left_text_1,v=m.createElement("a",{className:"v-card",href:r,innerHTML:`
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
                        ${o}
                    </div>
                    <div class="gm-video-handle">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path fill="#2E2F30" d="M512 256a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z m0 341.333333a85.333333 85.333333 0 1 1 0-170.666666 85.333333 85.333333 0 0 1 0 170.666666z m0 341.333334a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z">
                            </path>
                        </svg>
                    </div>
                </div>
                `},{"data-param":e,"data-title":a,"data-goto":i});return v["data-picture"]=t,v},getRecommendItemAVElement(t){var w;let i=t.goto,e=((w=t==null?void 0:t.player_args)==null?void 0:w.aid)||t.args.aid,o="/video/"+Nt(e),a=t.args.up_name,l=t.title,u=K(t.cover),v=t.cover_left_text_1,y=t.cover_left_text_2,g=t.cover_right_text,_=m.createElement("a",{className:"v-card",href:o,innerHTML:`
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
                            ${v}
                        </span>
                        <span>
                            <i class="iconfont icon_shipin_danmushu"></i>
                            ${y}
                        </span>
                        <span class="gm-video-duration">${g}</span>
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
                `},{"data-aid":e,"data-title":l,"data-goto":i});return _["data-video"]=t,_}},It={init(){p.execMenuOnce("bili-head-supplementaryVideoStreamingInformation",()=>{this.addVideoListUPInfo();}),p.execMenu("bili-head-recommend-enable",()=>{Rt.init();});},addVideoListUPInfo(){n.info("添加视频列表UP主信息"),A(`
        ${f.className.head}{
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
        `),s.waitNode(f.className.head+" .video-list .card-box").then(()=>{let t=new s.LockFunction(()=>{document.querySelectorAll(f.className.head+" .video-list .card-box .v-card").forEach(i=>{var a,l,u,v,y;let e=c.getVue(i),r=((l=(a=e==null?void 0:e.info)==null?void 0:a.author)==null?void 0:l.name)||((v=(u=e==null?void 0:e.info)==null?void 0:u.owner)==null?void 0:v.name),o=(y=e==null?void 0:e.info)==null?void 0:y.duration;if(r&&!i.querySelector(".gm-up-info")){let g=document.createElement("div");g.innerHTML=`
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
                                    </div>`,g.className="gm-up-info",i.appendChild(g);}if(o){let g=i.querySelector(".count");if(g&&!g.querySelector(".gm-video-duration")){let _=typeof o=="string"?o:c.parseDuration(o),w=document.createElement("span");w.className="gm-video-duration",w.innerHTML=_,g.appendChild(w);}}});},25);s.mutationObserver(document.body,{config:{subtree:!0,childList:!0,attributes:!0},callback(){t.run();}});});}},Ut={init(){p.execMenu("bili-setLogin",()=>{this.setLogin();}),p.execMenu("bili-setIsClient",()=>{this.setIsClient();}),p.execMenu("bili-setTinyApp",()=>{this.setTinyApp();});},setLogin(){let t=new s.GM_Cookie,i=t.get("DedeUserID");i!=null?n.info(["Cookie DedeUserID已存在：",i.value]):t.set({name:"DedeUserID",value:"2333"},e=>{e?n.error(e):n.success("Cookie成功设置DedeUserID=>2333");}),c.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.noCallApp",check(e){var r,o,a;return typeof((a=(o=(r=e==null?void 0:e.$store)==null?void 0:r.state)==null?void 0:o.common)==null?void 0:a.noCallApp)=="boolean"},set(e){n.success("成功设置参数 $store.state.common.noCallApp=true"),e.$store.state.common.noCallApp=!0;}},{msg:"设置参数 $store.state.common.userInfo.isLogin",check(e){var r,o,a,l;return typeof((l=(a=(o=(r=e==null?void 0:e.$store)==null?void 0:r.state)==null?void 0:o.common)==null?void 0:a.userInfo)==null?void 0:l.isLogin)=="boolean"},set(e){n.success("成功设置参数 $store.state.common.userInfo.isLogin=true"),e.$store.state.common.userInfo.isLogin=!0;}},{msg:"设置参数 $store.state.loginInfo.isLogin",check(e){var r,o,a;return typeof((a=(o=(r=e==null?void 0:e.$store)==null?void 0:r.state)==null?void 0:o.loginInfo)==null?void 0:a.isLogin)=="boolean"},set(e){n.success("成功设置参数 $store.state.loginInfo.isLogin=true"),e.$store.state.loginInfo.isLogin=!0;}}]);},setIsClient(){c.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.video.isClient",check(t){var i,e,r;return typeof typeof((r=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.video)==null?void 0:r.isClient)=="boolean"},set(t){n.success("成功设置参数 $store.state.video.isClient=true"),t.$store.state.video.isClient=!0;}},{msg:"设置参数 $store.state.opus.isClient=true",check(t){var i,e,r;return typeof((r=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.opus)==null?void 0:r.isClient)=="boolean"},set(t){n.success("成功设置参数 $store.state.opus.isClient"),t.$store.state.opus.isClient=!0;}},{msg:"设置参数 $store.state.playlist.isClient",check(t){var i,e,r;return typeof((r=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.playlist)==null?void 0:r.isClient)=="boolean"},set(t){n.success("成功设置参数 $store.state.playlist.isClient=true"),t.$store.state.playlist.isClient=!0;}},{msg:"设置参数 $store.state.ver.bili",check(t){var i,e,r;return typeof((r=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.ver)==null?void 0:r.bili)=="boolean"},set(t){n.success("成功设置参数 $store.state.ver.bili=true"),t.$store.state.ver.bili=!0;}},{msg:"设置参数 $store.state.ver.biliVer",check(t){var i,e,r;return typeof((r=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.ver)==null?void 0:r.biliVer)=="number"},set(t){n.success("成功设置参数 $store.state.ver.biliVer=2333333"),t.$store.state.ver.biliVer=2333333;}}]);},setTinyApp(){c.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.tinyApp",check(t){var i,e,r;return typeof((r=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.common)==null?void 0:r.tinyApp)=="boolean"},set(t){t.$store.state.common.tinyApp=!0,n.success("成功设置参数 $store.state.common.tinyApp=true");}}]);}},j={init(){Ut.init(),p.onceExec("listenRouterChange",()=>{this.listenRouterChange();}),p.execMenuOnce("bili-hookSetTimeout_autoOpenApp",()=>{n.info("hook  window.setTimeout autoOpenApp"),z.setTimeout("autoOpenApp");}),p.execMenuOnce("bili-overrideLaunchAppBtn_Vue_openApp",()=>{n.info("覆盖元素.launch-app-btn上的openApp"),z.overRideLaunchAppBtn_Vue_openApp();}),p.execMenuOnce("bili-head-beautify",()=>{n.info("添加美化CSS"),A(wt);}),x.isVideo()?(n.info("Router: 视频稿件"),$t.init()):x.isOpus()?(n.info("Router: 专栏稿件"),Vt.init()):x.isDynamic()?(n.info("Router: 动态"),Tt.init()):x.isBangumi()?(n.info("Router: 番剧"),At.init()):x.isSearch()?n.info("Router: 搜索"):x.isLive()?(n.info("Router: 直播"),St.init()):x.isTopicDetail()?n.info("Router: 话题"):x.isHead()?(n.info("Router: 首页之类的"),It.init()):n.error("该Router暂未适配，可能是首页之类："+window.location.href);},listenRouterChange(){s.waitNode("#app").then(t=>{let i=function(e){var r;return typeof((r=e==null?void 0:e.$router)==null?void 0:r.afterEach)=="function"};s.waitVueByInterval(t,i).then(e=>{let r=c.getVue(t);r!=null&&i(r)&&(n.success("成功设置监听路由变化"),t.__vue__.$router.beforeEach((o,a,l)=>{if(n.info(["路由变化 => 更新前",{to:o,from:a}]),o.name==="space"){window.location.href=o.fullPath;return}if(o.fullPath.startsWith("/video")&&a.fullPath.startsWith("/video")&&p.getValue("bili-video-forceThisPageToRefreshAndRedirect")){window.location.href=o.fullPath;return}l();}),t.__vue__.$router.afterEach((o,a)=>{if(n.info(["路由变化 => 更新后",{to:o,from:a}]),o.hash==="#/seeCommentReply"||a.hash==="#/seeCommentReply"){n.info("该路由变化判定为#/seeCommentReply，不重载");return}p.execMenu("bili-listenRouterChange",()=>{j.init();});}));});});}};p.init();j.init();

})(Qmsg, Utils, DOMUtils, MD5);