// ==UserScript==
// @name         【移动端】bilibili优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.6.6.23
// @author       WhiteSevs
// @description  bilibili(哔哩哔哩)优化，免登录等
// @license      GPL-3.0-only
// @icon         https://i0.hdslb.com/bfs/static/jinkela/long/images/512.png
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://m.bilibili.com/*
// @match        *://live.bilibili.com/*
// @require      https://update.greasyfork.org/scripts/494167/1376186/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/456485/1384984/pops.js
// @require      https://cdn.jsdelivr.net/npm/qmsg@1.1.0/dist/index.umd.js
// @require      https://cdn.jsdelivr.net/npm/@whitesev/utils@1.4.0/dist/index.umd.js
// @require      https://cdn.jsdelivr.net/npm/@whitesev/domutils@1.1.1/dist/index.umd.js
// @connect      *
// @connect      m.bilibili.com
// @connect      www.bilibili.com
// @connect      api.bilibili.com
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

(function (g, J, W) {
	'use strict';

	var A=typeof GM_getValue<"u"?GM_getValue:void 0,M=typeof GM_info<"u"?GM_info:void 0,F=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,E=typeof GM_setValue<"u"?GM_setValue:void 0,K=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Y=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,f=typeof unsafeWindow<"u"?unsafeWindow:void 0,H=window;const Q="【移动端】bilibili优化",l=J.noConflict(),h=W.noConflict(),X=H.pops||f.pops,n=new l.Log(M,f.console||H.console);var L;const D=((L=M==null?void 0:M.script)==null?void 0:L.name)||Q,z=!1;n.config({debug:z,logMaxCount:2e4,autoClearConsole:!0,tag:!0});g.config({position:"bottom",html:!0,maxNums:5,autoClose:!0,showClose:!1,showReverse:!0});const Z=new l.GM_Menu({GM_getValue:A,GM_setValue:E,GM_registerMenuCommand:F,GM_unregisterMenuCommand:K}),O=new l.Httpx(Y);O.config({logDetails:z,onabort(){g.warning("请求取消");},ontimeout(){g.error("请求超时");},onerror(t){g.error("请求异常"),n.error(["httpx-onerror 请求异常",t]);}});const N={Object:{defineProperty:f.Object.defineProperty},Function:{apply:f.Function.prototype.apply,call:f.Function.prototype.call},Element:{appendChild:f.Element.prototype.appendChild},setTimeout:f.setTimeout},C=l.addStyle,$="GM_Panel",U="data-key",I="data-default-value",u=function(t,i,e,r,o){let a={text:t,type:"switch",description:o,attributes:{},getValue(){return !!c.getValue(i,e)},callback(p,d){n.success(`${d?"开启":"关闭"} ${t}`),c.setValue(i,!!d);},afterAddToUListCallBack:void 0};return a.attributes&&(a.attributes[U]=i,a.attributes[I]=!!e),a},j={id:"panel-common",title:"通用",forms:[{text:"功能",type:"forms",forms:[u("监听路由-重载所有功能","bili-listenRouterChange",!0,void 0,"用于处理页面跳转(本页)时功能不生效问题"),u("修复点击UP主正确进入空间","bili-repairEnterUserHome",!0,void 0,"可以修复点击UP主进入个人空间但是跳转404的问题"),u("新标签页打开","bili-go-to-url-blank",!1,void 0,"通过开启【覆盖点击事件】相关的设置，通过新标签页打开链接")]},{text:"变量设置",type:"forms",forms:[u("isLogin","bili-setLogin",!0,void 0,"$store.state.common.noCallApp=true<br>$store.state.common.userInfo.isLogin=true<br>$store.state.loginInfo.isLogin=true"),u("isClient","bili-setIsClient",!0,void 0,"$store.state.video.isClient=true<br>$store.state.opus.isClient=true<br>$store.state.playlist.isClient=true<br>$store.state.ver.bili=true<br>$store.state.ver.biliVer=2333"),u("tinyApp","bili-setTinyApp",!0,void 0,"$store.state.common.tinyApp=true")]},{text:"劫持/拦截",type:"forms",forms:[u("覆盖.launch-app-btn openApp","bili-overrideLaunchAppBtn_Vue_openApp",!0,void 0,"覆盖.launch-app-btn元素上的openApp函数，可阻止点击唤醒/下载App"),u("劫持setTimeout-autoOpenApp","bili-hookSetTimeout_autoOpenApp",!0,void 0,"阻止自动调用App")]}]},_={isVideo(){return window.location.pathname.startsWith("/video/")},isBangumi(){return window.location.pathname.startsWith("/bangumi/")},isSearch(){return window.location.pathname.startsWith("/search")},isLive(){return window.location.hostname==="live.bilibili.com"},isOpus(){return window.location.pathname.startsWith("/opus")},isTopicDetail(){return window.location.pathname.startsWith("/topic-detail")},isDynamic(){return window.location.pathname.startsWith("/dynamic")},isHead(){return window.location.pathname==="/"||window.location.pathname.startsWith("/channel")}},tt={id:"panel-video",title:"视频",isDefault(){return _.isVideo()},forms:[{text:"功能",type:"forms",forms:[u("修复视频底部区域高度","bili-video-repairVideoBottomAreaHeight",!0,void 0,"添加margin-top"),u("自动点击【继续在网页观看】","bili-video-autoClickContinueToWatchOnTheWebpage",!0,void 0,"可避免弹窗出现且自动点击后播放视频"),u("美化显示","bili-video-beautify",!0,void 0,"调整底部推荐视频卡片样式类似哔哩哔哩App"),u("手势返回关闭评论区","bili-video-gestureReturnToCloseCommentArea",!0,void 0,"当浏览器手势触发浏览器回退页面时，关闭评论区"),u("initPlayer","bili-video-initPlayer",!0,void 0,"自动执行初始化播放器"),u("强制本页刷新跳转","bili-video-forceThisPageToRefreshAndRedirect",!1,void 0,"用于解决跳转播放视频时，播放当前视频会有上一个播放视频的声音的情况")]},{text:"变量设置",type:"forms",forms:[u("playBtnNoOpenApp","bili-video-setVideoPlayer",!0,void 0,"playBtnNoOpenApp=true<br>playBtnOpenApp=false<br>coverOpenApp=false"),u("解锁充电限制","bili-video-unlockUpower",!1,void 0,"is_upower_exclusive=true<br>is_upower_play=false<br>is_upower_preview=false")]},{text:"覆盖点击事件",type:"forms",forms:[u("相关视频","bili-video-cover-bottomRecommendVideo",!0,void 0,"点击下面的相关视频可正确跳转至该视频"),u("选集","bili-video-cover-seasonNew",!0,void 0,"点击下面的选集列表内的视频可正确跳转至该视频")]},{text:"劫持/拦截",type:"forms",forms:[u("阻止调用App","bili-video-hook-callApp",!0,void 0,"处理函数: PlayerAgent")]}]},et={id:"panel-bangumi",title:"番剧",isDefault(){return _.isBangumi()},forms:[{text:"变量设置",type:"forms",forms:[u("pay","bili-bangumi-setPay",!0,void 0,"$store.state.userStat.pay=1<br>$store.state.mediaInfo.user_status.pay=1")]},{text:"覆盖点击事件",type:"forms",forms:[u("【选集】","bili-bangumi-cover-clicl-event-chooseEp",!0,void 0,"让【选集】的视频列表可点击跳转"),u("【其它】","bili-bangumi-cover-clicl-event-other",!0,void 0,"让【PV&其他】、【预告】、【主题曲】、【香境剧场】等的视频列表可点击跳转"),u("【更多推荐】","bili-bangumi-cover-clicl-event-recommend",!0,void 0,"让【更多推荐】的视频列表可点击跳转")]},{text:"劫持/拦截",type:"forms",forms:[u("阻止调用App","bili-bangumi-hook-callApp",!0,void 0,"")]}]},it={id:"panel-search",title:"搜索",isDefault(){return _.isSearch()},forms:[]},rt={id:"panel-live",title:"直播",isDefault(){return _.isLive()},forms:[{text:"屏蔽",type:"forms",forms:[u("【屏蔽】聊天室","bili-live-block-chatRoom",!1,void 0,"直接不显示底部的聊天室"),u("【屏蔽】xxx进入直播间","bili-live-block-brush-prompt",!1,void 0,"直接不显示底部的xxx进入直播间"),u("【屏蔽】控制面板","bili-live-block-control-panel",!1,void 0,"屏蔽底部的发个弹幕、送礼")]},{text:"劫持/拦截",type:"forms",forms:[u("阻止open-app-btn元素点击事件触发","bili-live-prevent-openAppBtn",!0,void 0,"开启后可不跳转至唤醒App页面")]}]},nt={id:"panel-opus",title:"专栏",isDefault(){return _.isOpus()},forms:[{text:"功能",type:"forms",forms:[u("自动展开阅读全文","bili-opus-automaticallyExpandToReadFullText",!0,void 0,"屏蔽【展开阅读全文】按钮并自动处理全文高度")]},{text:"覆盖点击事件",type:"forms",forms:[u("话题","bili-opus-cover-topicJump",!0,void 0,"点击话题正确跳转"),u("header用户","bili-opus-cover-header",!0,void 0,"点击内容上的发布本动态的用户正确跳转个人空间")]}]},ot={id:"panel-dynamic",title:"动态",isDefault(){return _.isDynamic()},forms:[{text:"覆盖点击事件",type:"forms",forms:[u("话题","bili-dynamic-cover-topicJump",!0,void 0,"点击话题正确跳转"),u("header用户","bili-dynamic-cover-header",!0,void 0,"点击内容上的发布本动态的用户正确跳转个人空间"),u("@用户","bili-dynamic-cover-atJump",!0,void 0,"点击@用户正确跳转个人空间"),u("引用","bili-dynamic-cover-referenceJump",!0,void 0,"点击引用的视频|用户正确跳转")]}]},at={id:"panel-topic-detail",title:"话题",isDefault(){return _.isTopicDetail()},forms:[]},lt={id:"panel-head",title:"首页",forms:[{text:"功能",type:"forms",forms:[u("美化显示","bili-head-beautify",!0,void 0,"调整瀑布流视频卡片样式类似哔哩哔哩App"),u("补充推荐视频信息","bili-head-supplementaryVideoStreamingInformation",!0,void 0,"给视频添加UP主名，当前视频总时长信息")]}]},s={getVue(t){return t==null?void 0:t.__vue__},waitVuePropToSet(t,i){function e(){let r=null;return typeof t=="string"?r=document.querySelector(t):typeof t=="function"?r=t():t instanceof HTMLElement&&(r=t),r}i.forEach(r=>{typeof r.msg=="string"&&n.info(r.msg);function o(){let a=e();if(a==null)return !1;let p=s.getVue(a);return p==null?!1:!!r.check(p)}l.waitVueByInterval(()=>e(),o,250,1e4).then(a=>{if(!a)return;let p=e(),d=s.getVue(p);d!=null&&r.set(d);});});},goToUrl(t){let i=document.querySelector("#app");if(i==null){g.error("跳转Url: 获取根元素#app失败"),n.error("跳转Url: 获取根元素#app失败："+t);return}let e=s.getVue(i);if(e==null){n.error("获取#app的vue属性失败"),g.error("获取#app的vue属性失败");return}let r=e.$router,o=c.getValue("bili-go-to-url-blank");if(n.info("即将跳转URL："+t),o)window.open(t,"_blank");else {if(t.startsWith("http")||t.startsWith("//")){t.startsWith("//")&&(t=window.location.protocol+t);let a=new URL(t);if(a.origin===window.location.origin)t=a.pathname+a.search+a.hash;else {n.info("不同域名，直接本页打开，不用Router："+t),window.location.href=t;return}}n.info("$router push跳转Url："+t),r.push(t);}},goToLogin(t=""){window.open(`https://passport.bilibili.com/h5-app/passport/login?gourl=${encodeURIComponent(t)}`);},parseDuration(t){if(typeof t!="number"&&(t=parseInt(t)),isNaN(t))return t.toString();function i(e){return e<10?`0${e}`:e}return t<60?`0:${i(t)}`:t>=60&&t<3600?`${Math.floor(t/60)}:${i(t%60)}`:`${Math.floor(t/3600)}:${i(Math.floor(t/60)%60)}:${i(t%60)}`},hookGestureReturnByVueRouter(t){function i(){n.success("触发popstate事件"),r(!0);}function e(){n.success("监听地址改变"),t.vueObj.$router.history.push(t.hash),h.on(window,"popstate",i);}async function r(o=!1){if(h.off(window,"popstate",i),!t.callback(o))for(;;)if(t.vueObj.$router.history.current.hash===t.hash)n.info("后退！"),t.vueObj.$router.back(),await l.sleep(250);else return}return e(),{resumeBack:r}},loadScript(t){let i=document.createElement("script");return i.src=t,document.head.appendChild(i),new Promise(e=>{i.onload=function(){n.success("script标签加载完毕："+t),setTimeout(()=>{e(!0);},100);};})},addBlockCSS(...t){let i=[];t.length!==0&&(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""||(t.forEach(e=>{Array.isArray(e)?i=i.concat(e):i.push(e);}),C(`${i.join(`,
`)}{display: none !important;}`)));}},c={$data:{data:new l.Dictionary,oneSuccessExecMenu:new l.Dictionary,onceExec:new l.Dictionary,scriptName:D,key:$,attributeKeyName:U,attributeDefaultValueName:I},$listener:{listenData:new l.Dictionary},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},initExtensionsMenu(){f.top===f.self&&Z.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:!1,isStoreValue:!1,showText(t){return t},callback:()=>{this.showPanel();}},{key:"go_to_login",text:"🛠 前往登录",autoReload:!1,isStoreValue:!1,showText(t){return t},callback(){s.goToLogin(window.location.href);}}]);},initPanelDefaultValue(){let t=this;function i(r){if(!r.attributes)return;let o=r.attributes[U],a=r.attributes[I];if(o==null){n.warn(["请先配置键",r]);return}t.$data.data.has(o)&&n.warn("请检查该key(已存在): "+o),t.$data.data.set(o,a);}let e=this.getPanelContentConfig();for(let r=0;r<e.length;r++){let o=e[r];if(!o.forms)continue;let a=o.forms;for(let p=0;p<a.length;p++){let d=a[p];if(d.forms){let y=d.forms;for(let b=0;b<y.length;b++)i(y[b]);}else i(d);}}},setValue(t,i){let e=A($,{}),r=e[t];e[t]=i,E($,e),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,r,i);},getValue(t,i){let r=A($,{})[t];return r??(this.$data.data.has(t)?this.$data.data.get(t):i)},deleteValue(t){let i=A($,{}),e=i[t];Reflect.deleteProperty(i,t),E($,i),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,e,void 0);},addValueChangeListener(t,i){let e=Math.random();return this.$listener.listenData.set(t,{id:e,key:t,callback:i}),e},removeValueChangeListener(t){let i=null;for(const[e,r]of this.$listener.listenData.entries())if(r.id===t){i=e;break}this.$listener.listenData.delete(i);},hasKey(t){let i=A($,{});return t in i},execMenu(t,i){if(typeof t!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(t)){n.warn(`${t} 键不存在`);return}let e=c.getValue(t);e&&i(e);},execMenuOnce(t,i){if(typeof t!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(t)){n.warn(`${t} 键不存在`);return}let e=c.getValue(t);if(e){if(this.$data.oneSuccessExecMenu.has(t))return;i(e),this.$data.oneSuccessExecMenu.set(t,1);}},onceExec(t,i){if(typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(t)||(i(),this.$data.onceExec.set(t,1));},showPanel(){X.panel({title:{text:`${D}-设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:this.isMobile(),width:this.getWidth(),height:this.getHeight(),drag:!0,only:!0});},isMobile(){return window.outerWidth<550},getWidth(){return window.outerWidth<550?"92dvw":"550px"},getHeight(){return window.outerHeight>450?"80dvh":"450px"},getPanelContentConfig(){return [j,lt,tt,nt,ot,et,at,it,rt]}},st=`/* 主页 */\r
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
`,R={$isHook:{windowPlayerAgent:!1,hookWebpackJsonp_openApp:!1,overRideLaunchAppBtn_Vue_openApp:!1},$data:{setTimeout:[]},windowWebPack(t="webpackJsonp",i,e){let r;N.Object.defineProperty(f,t,{get(){return r},set(o){n.success("成功劫持webpack，当前webpack名："+t),r=o;const a=r.push;r.push=function(...p){let d=p[0][0];return (i==d||Array.isArray(i)&&Array.isArray(d)&&JSON.stringify(i)===JSON.stringify(d))&&Object.keys(p[0][1]).forEach(y=>{let b=p[0][1][y];p[0][1][y]=function(...v){let k=b.call(this,...v);return v[0]=e(v[0]),k};}),a.call(this,...p)};}});},windowPlayerAgent(){if(this.$isHook.windowPlayerAgent)return;this.$isHook.windowPlayerAgent=!0;let t;N.Object.defineProperty(f,"PlayerAgent",{get(){return new Proxy({},{get(i,e){return e==="openApp"?function(...r){let o=r[0];if(n.info(["调用PlayerAgent.openApp",o]),o.event==="fullScreen"){let a=document.querySelector(".mplayer-btn-widescreen");a?a.click():n.warn("主动再次点击全屏按钮失败，原因：未获取到.mplayer-btn-widescreen元素");}}:t[e]}})},set(i){t=i;}});},setTimeout(t){if(this.$data.setTimeout.push(t),this.$data.setTimeout.length>1){n.info("window.setTimeout hook新增劫持判断参数："+t);return}f.setTimeout=function(...i){let e=i[0].toString();if(e.match(t)){n.success(["劫持setTimeout的函数",e]);return}return N.setTimeout.apply(this,i)};},overRideLaunchAppBtn_Vue_openApp(){if(this.$isHook.overRideLaunchAppBtn_Vue_openApp)return;this.$isHook.overRideLaunchAppBtn_Vue_openApp=!0;function t(i){typeof i.openApp!="function"||i.openApp.toString().includes("阻止唤醒App")||(i.openApp=function(...r){n.success(["openApp：阻止唤醒App",r]);});}l.mutationObserver(document,{config:{subtree:!0,childList:!0,attributes:!0},callback(){document.querySelectorAll(".launch-app-btn").forEach(i=>{let e=s.getVue(i);e&&(t(e),e.$children&&e.$children.length&&e.$children.forEach(r=>{t(r);}));});}});}},ct={init(){c.execMenuOnce("bili-video-hook-callApp",()=>{n.info("hook window.PlayerAgent"),R.windowPlayerAgent();});}},B={getUserSpaceUrl(t){return `https://m.bilibili.com/space/${t}`},getUserSpaceDynamicUrl(t){return `https://m.bilibili.com/dynamic/${t}`},getUserSpaceOpusUrl(t){return `https://m.bilibili.com/opus/${t}`},getVideoUrl(t){return `https://m.bilibili.com/video/${t}`}},m={className:{bangumi:"#app.main-container",dynamic:"#app .m-dynamic",opus:"#app .m-opus",search:"#app .m-search","topic-detail":"#app .topic-detail",video:"#app .video",head:"#app .m-head"}},ut=`#app .video {\r
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
`,pt={$data:{isInitPlayer:!1,isUnlockUpower:!1},init(){c.execMenu("bili-video-initPlayer",()=>{this.initPlayer();}),c.execMenu("bili-video-setVideoPlayer",()=>{this.setVideoPlayer();}),c.execMenu("bili-video-unlockUpower",()=>{this.unlockUpower();});},initPlayer(){if(this.$data.isInitPlayer)return;this.$data.isInitPlayer=!0;let t=this;l.waitNode("#bilibiliPlayer",3e3).then(async i=>{if(!i){t.$data.isInitPlayer=!1;return}await l.sleep(300),s.waitVuePropToSet(".m-video-player",[{msg:"等待设置参数 fullScreenCallApp",check(e){return typeof(e==null?void 0:e.fullScreenCallApp)=="boolean"},set(e){e.fullScreenCallApp=!1,n.success("成功设置参数 fullScreenCallApp=false");}},{msg:"等待设置参数 gameMode",check(e){return typeof(e==null?void 0:e.gameMode)=="boolean"},set(e){e.gameMode=!0,n.success("成功设置参数 gameMode=true");}},{msg:"等待获取函数 initPlayer()",check(e){return typeof(e==null?void 0:e.initPlayer)=="function"},set(e){t.$data.isInitPlayer=!1;function r(){let o,a,p=1,d=!1,y=new l.LockFunction(async()=>{var v,k,w,x;if(document.querySelector("#bilibiliPlayer video")){d=!0,(v=f==null?void 0:f.player)==null||v.off("restart_call_app"),(k=f==null?void 0:f.player)==null||k.off("force_call_app_show"),n.success("<video>标签已成功初始化");return}f.BPlayerMobile==null&&(n.error("未加载player播放器，主动引入script标签"),await s.loadScript("https://s1.hdslb.com/bfs/static/player/main/html5/mplayer.js?v=2862592")),e.initPlayer(!0),n.success("第 "+p+" 次未检测到视频，调用初始化视频函数 initPlayer()"),await l.sleep(300),(w=f==null?void 0:f.player)==null||w.off("restart_call_app"),(x=f==null?void 0:f.player)==null||x.off("force_call_app_show"),p++;});o=setInterval(async()=>{await y.run(),d&&(clearTimeout(a),clearInterval(o));},600),a=setTimeout(()=>{n.warn("检测视频超时3s，取消检测"),clearInterval(o);},3e3);}r();}}]);});},unlockUpower(){s.waitVuePropToSet(m.className.video,[{msg:"设置属性 __vue__.info.is_upower_exclusive",check(t){var i;return typeof((i=t==null?void 0:t.info)==null?void 0:i.is_upower_exclusive)=="boolean"},set(t){t.info.is_upower_exclusive=!1,n.success("成功设置属性  __vue__.info.is_upower_exclusive=false");}},{msg:"设置属性 __vue__.info.is_upower_play",check(t){var i;return typeof((i=t==null?void 0:t.info)==null?void 0:i.is_upower_play)=="boolean"},set(t){t.info.is_upower_play=!1,n.success("成功设置属性  __vue__.info.is_upower_play=false");}},{msg:"设置属性 __vue__.info.is_upower_preview",check(t){var i;return typeof((i=t==null?void 0:t.info)==null?void 0:i.is_upower_preview)=="boolean"},set(t){t.info.is_upower_preview=!1,n.success("成功设置属性  __vue__.info.is_upower_preview=false");}}]);},setVideoPlayer(){s.waitVuePropToSet(m.className.video+" .m-video-player",[{msg:"设置参数 playBtnNoOpenApp",check(t){return typeof t.playBtnNoOpenApp=="boolean"},set(t){t.playBtnNoOpenApp=!0,n.success("成功设置参数 playBtnNoOpenApp=true");}},{msg:"设置参数 playBtnOpenApp",check(t){return typeof t.playBtnOpenApp=="boolean"},set(t){t.playBtnOpenApp=!1,n.success("成功设置参数 playBtnOpenApp=false");}},{msg:"设置参数 coverOpenApp",check(t){return typeof t.coverOpenApp=="boolean"},set(t){t.coverOpenApp=!1,n.success("成功设置参数 coverOpenApp=false");}}]);}},dt={$data:{isAddBeautifyCSS:!1},init(){ct.init(),pt.init(),c.execMenuOnce("bili-video-repairVideoBottomAreaHeight",()=>{this.repairVideoBottomAreaHeight();}),c.execMenuOnce("bili-video-autoClickContinueToWatchOnTheWebpage",()=>{this.autoClickContinueToWatchOnTheWebpage();}),c.execMenu("bili-video-beautify",()=>{this.beautify();}),c.execMenuOnce("bili-video-cover-bottomRecommendVideo",()=>{this.coverBottomRecommendVideo();}),c.execMenuOnce("bili-video-gestureReturnToCloseCommentArea",()=>{this.gestureReturnToCloseCommentArea();}),c.execMenuOnce("bili-video-cover-seasonNew",()=>{this.coverSeasonNew();});},beautify(){n.info("美化"),this.$data.isAddBeautifyCSS||(this.$data.isAddBeautifyCSS=!0,C(ut)),l.waitNode(m.className.video+" .bottom-tab .list-view .card-box",1e4).then(t=>{if(!t){n.error("$cardBox is null");return}function i(o){var y,b;let a=o.querySelector(".title"),p=o.querySelector(".count .left"),d=s.getVue(o);if(a&&p&&!o.querySelector(".gm-right-container")){let v=document.createElement("div"),k=(b=(y=d==null?void 0:d.info)==null?void 0:y.owner)==null?void 0:b.name;v.className="gm-up-name",v.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${k}</span>
						`;let w=document.createElement("div"),x=document.createElement("div");w.className="gm-right-container",x.className="gm-right-bottom",h.after(a,w),w.appendChild(a),w.appendChild(x),x.appendChild(v),x.appendChild(p);}}function e(o){var y,b,v;let a=o.querySelector(".title"),p=o.querySelector(".count"),d=s.getVue(o);if(a&&p&&!o.querySelector(".gm-right-container")){let k=(y=d==null?void 0:d.info)==null?void 0:y.duration,w=document.createElement("div");w.className="duration",w.innerText=s.parseDuration(k);let x=p.cloneNode(!0);x.className="left";let P=document.createElement("div"),q=(v=(b=d==null?void 0:d.info)==null?void 0:b.owner)==null?void 0:v.name;p.appendChild(w),P.className="gm-up-name",P.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${q}</span>
						`;let S=document.createElement("div"),T=document.createElement("div");S.className="gm-right-container",T.className="gm-right-bottom",h.after(a,S),S.appendChild(a),S.appendChild(T),T.appendChild(P),T.appendChild(x);}}let r=new l.LockFunction(()=>{document.querySelectorAll(m.className.video+" .bottom-tab .list-view .card-box .v-card-toapp").forEach(o=>{i(o);}),document.querySelectorAll(m.className.video+" .bottom-tab .list-view .card-box>a.v-card").forEach(o=>{e(o);});},25);l.mutationObserver(document.querySelector(m.className.video),{config:{subtree:!0,childList:!0},callback(){setTimeout(()=>{r.run();},0);}});});},repairVideoBottomAreaHeight(){n.info("修复视频底部区域高度"),C(`
		${m.className.video} {
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
			${m.className.video}{
				.m-video-info-new{
					margin-top: 72vmin;
				}
			}
		}
		`);},autoClickContinueToWatchOnTheWebpage(){h.on(document,"click",m.className.video+" .main-info .btn",function(){n.info("触发点击【立即播放】，自动等待弹窗出现"),l.waitNode(".to-see",1e4).then(t=>{if(!t){n.error("弹窗按钮【继续在网页观看】10秒内未出现，取消等待");return}n.success("自动点击 继续在网页观看"),t.click();});});},coverBottomRecommendVideo(){n.info("覆盖 相关视频 点击事件"),h.on(document,"click",m.className.video+" .list-view .card-box .launch-app-btn",function(t){let i=t.target,e=s.getVue(i);if(!e){g.error("获取相关视频的__vue__失败");return}let r=e.bvid;if(l.isNull(r))if(e.$children&&e.$children[0]&&l.isNotNull(e.$children[0].bvid))r=e.$children[0].bvid;else {g.error("获取相关视频的bvid失败");return}n.info("相关视频的bvid: "+r),s.goToUrl(B.getVideoUrl(r)),l.preventEvent(t);},{capture:!0});},coverSeasonNew(){n.info("覆盖 选集视频列表 点击事件");function t(i){let e=i.target,r=s.getVue(e);if(!r){g.error("获取选集视频的目标视频的__vue__失败");return}let o=r.bvid;if(l.isNull(o)){g.error("获取相关视频的bvid失败");return}n.info("相关视频的bvid: "+o),s.goToUrl(B.getVideoUrl(o)),l.preventEvent(i);}h.on(document,"click",m.className.video+" .m-video-season-new .video-card .launch-app-btn",t,{capture:!0}),h.on(document,"click",m.className.video+" .m-video-season-panel .season-video-item .launch-app-btn",t,{capture:!0});},gestureReturnToCloseCommentArea(){n.info("手势返回关闭评论区，全局监听document点击.sub-reply-preview"),l.waitNode("#app").then(t=>{l.waitVueByInterval(t,()=>{var e,r;let i=s.getVue(t);return i==null?!1:typeof((r=(e=i==null?void 0:i.$router)==null?void 0:e.options)==null?void 0:r.scrollBehavior)!=null},250,1e4).then(i=>{let e=s.getVue(t);if(!e){n.error("获取#app的vue属性失败");return}let r=e.$router.options.scrollBehavior;e.$router.options.scrollBehavior=function(o,a,p){return o.hash==="#/seeCommentReply"?(n.info("当前操作为打开评论区，scrollBehavior返回null"),null):o.hash===""&&a.hash==="#/seeCommentReply"?(n.info("当前操作为关闭评论区，scrollBehavior返回null"),null):r.call(this,...arguments)};});}),h.on(document,"click",".sub-reply-preview",function(t){let i=document.querySelector("#app"),e=s.getVue(i);if(!e){n.error("获取#app元素失败");return}let r=s.hookGestureReturnByVueRouter({vueObj:e,hash:"#/seeCommentReply",callback(o){if(!o)return !1;let a=document.querySelector(".dialog-close-icon");return a?a.click():n.error("评论区关闭失败，原因：元素dialog-close-icon获取失败"),!0}});l.waitNode(".dialog-close-icon").then(o=>{h.on(o,"click",function(){r.resumeBack(!1);},{capture:!0,once:!0});});});}},mt={init(){c.execMenu("bili-bangumi-setPay",()=>{this.setPay();});},setPay(){s.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.userStat.pay",check(t){var i,e,r;return typeof typeof((r=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.userStat)==null?void 0:r.pay)=="number"},set(t){n.success("成功设置参数 $store.state.userStat.pay=1"),t.$store.state.userStat.pay=1;}},{msg:"设置参数 $store.state.mediaInfo.user_status.pay",check(t){var i,e,r,o;return typeof((o=(r=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.mediaInfo)==null?void 0:r.user_status)==null?void 0:o.pay)=="number"},set(t){n.success("成功设置参数 $store.state.mediaInfo.user_status.pay=1"),t.$store.state.mediaInfo.user_status.pay=1;}}]);}},V={getUrl(t){if(t!=null)return t.getAttribute("universallink")},jumpToUrl(t){let e=t.target.querySelector("bili-open-app");if(e){let r=V.getUrl(e);r?s.goToUrl(r):(g.error("获取bili-open-app的Url失败"),n.error("获取bili-open-app的Url失败"));}else g.error("未获取到<bili-open-app>元素"),n.error("未获取到<bili-open-app>元素");}},ft={init(){mt.init(),c.execMenuOnce("bili-bangumi-hook-callApp",()=>{this.hookCallApp();}),c.execMenu("bili-bangumi-cover-clicl-event-chooseEp",()=>{this.setChooseEpClickEvent();}),c.execMenu("bili-bangumi-cover-clicl-event-other",()=>{this.setClickOtherVideo();}),c.execMenu("bili-bangumi-cover-clicl-event-recommend",()=>{this.setRecommendClickEvent();});},hookCallApp(){let t=f.setTimeout;f.setTimeout=function(...i){if(i[0].toString().includes("autoOpenApp")){n.success(["阻止唤醒App",i]);return}return t.apply(this,i)};},setPay(){s.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.userStat.pay",check(t){var i,e,r;return typeof typeof((r=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.userStat)==null?void 0:r.pay)=="number"},set(t){n.success("成功设置参数 $store.state.userStat.pay=1"),t.$store.state.userStat.pay=1;}},{msg:"设置参数 $store.state.mediaInfo.user_status.pay",check(t){var i,e,r,o;return typeof((o=(r=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.mediaInfo)==null?void 0:r.user_status)==null?void 0:o.pay)=="number"},set(t){n.success("成功设置参数 $store.state.mediaInfo.user_status.pay=1"),t.$store.state.mediaInfo.user_status.pay=1;}}]);},setChooseEpClickEvent(){l.waitNode(m.className.bangumi+" .ep-list-pre-wrapper ul.ep-list-pre-container").then(t=>{n.info("覆盖【选集】的点击事件"),h.on(t,"click","li.episode-item",function(i){l.preventEvent(i),V.jumpToUrl(i);},{capture:!0});}),l.waitNode(m.className.bangumi+" .ep-list-pre-wrapper ul.season-list-wrapper").then(t=>{n.info("覆盖【xx季】的点击事件"),h.on(t,"click","li",function(i){l.preventEvent(i),V.jumpToUrl(i);},{capture:!0});}),l.waitNode(m.className.bangumi+" .ep-list-pre-header").then(t=>{n.info("覆盖【选集】右上角的【全xx话】Arrow的点击事件"),h.on(t,"click",function(i){l.preventEvent(i);},{capture:!0});});},setClickOtherVideo(){l.waitNode(m.className.bangumi+" .section-preview-wrapper ul.ep-list-pre-container").then(t=>{n.info("覆盖【PV&其他】、【预告】、【主题曲】的点击事件"),h.on(t,"click","li.section-preview-item",function(i){l.preventEvent(i),V.jumpToUrl(i);},{capture:!0});}),l.waitNode(m.className.bangumi+" .section-preview-header").then(t=>{n.info("覆盖【PV&其他】、【预告】、【主题曲】右上角的Arrow的点击事件"),h.on(t,"click",function(i){l.preventEvent(i);},{capture:!0});});},setRecommendClickEvent(){l.waitNode(m.className.bangumi+" .recom-wrapper ul.recom-list").then(t=>{n.info("覆盖【更多推荐】番剧的点击事件"),h.on(t,"click","li.recom-item-v2",function(i){l.preventEvent(i),V.jumpToUrl(i);},{capture:!0});});}},ht={init(){c.execMenuOnce("bili-live-prevent-openAppBtn",()=>{this.preventOpenAppBtn();}),c.execMenuOnce("bili-live-block-chatRoom",()=>{this.blockChatRoom();}),c.execMenuOnce("bili-live-block-brush-prompt",()=>{this.blockBrushPrompt();}),c.execMenuOnce("bili-live-block-control-panel",()=>{this.blockControlPanel();});},preventOpenAppBtn(){l.waitNode("body").then(t=>{n.info("阻止.open-app-btn元素触发点击事件"),h.on(t,"click",".open-app-btn",function(i){l.preventEvent(i);},{capture:!0}),h.on(t,"click","#web-player-controller-wrap-el",function(i){l.preventEvent(i);},{capture:!0});});},blockChatRoom(){n.info("屏蔽聊天室"),s.addBlockCSS("#chat-items");},blockBrushPrompt(){n.info("屏蔽xxx进入直播间"),s.addBlockCSS("#brush-prompt");},blockControlPanel(){n.info("屏蔽底部工具栏"),s.addBlockCSS(".control-panel");}},gt={init(){c.execMenuOnce("bili-opus-cover-topicJump",()=>{this.coverTopicJump();}),c.execMenuOnce("bili-opus-automaticallyExpandToReadFullText",()=>{this.automaticallyExpandToReadFullText();}),c.execMenuOnce("bili-opus-cover-header",()=>{this.coverHeaderJump();});},coverTopicJump(){n.info("覆盖话题跳转点击事件"),h.on(document,"click",m.className.opus+" .launch-app-btn.opus-module-topic",function(t){var a;let i=t.target,e=s.getVue(i);if(!e){g.error("获取话题的__vue__失败");return}let r=(a=e==null?void 0:e.$props)==null?void 0:a.data,o=r==null?void 0:r.jump_url;if(l.isNull(o)){g.error("获取话题的jump_url失败");return}n.info(["话题的跳转信息: ",r]),s.goToUrl(o);},{capture:!0});},automaticallyExpandToReadFullText(){n.info("自动展开阅读全文"),s.addBlockCSS(m.className.opus+" .opus-read-more"),C(`
		${m.className.opus} .opus-module-content{
			overflow: unset !important;
    		max-height: unset !important;
		}
		`);},coverHeaderJump(){n.info("覆盖header点击事件"),h.on(document,"click",m.className.opus+" .opus-module-author",function(t){var o;l.preventEvent(t);let i=t.target,e=s.getVue(i);if(!e){g.error("获取vue属性失败");return}let r=(o=e==null?void 0:e.data)==null?void 0:o.mid;if(!r){g.error("获取mid失败");return}s.goToUrl(B.getUserSpaceUrl(r));},{capture:!0});}},vt={init(){c.execMenuOnce("bili-dynamic-cover-topicJump",()=>{this.coverTopicJump();}),c.execMenuOnce("bili-dynamic-cover-atJump",()=>{this.coverAtJump();}),c.execMenuOnce("bili-dynamic-cover-referenceJump",()=>{this.coverReferenceJump();}),c.execMenuOnce("bili-dynamic-cover-header",()=>{this.coverHeaderJump();});},coverHeaderJump(){n.info("覆盖header点击事件"),h.on(document,"click",m.className.dynamic+" .launch-app-btn .dyn-header",function(t){l.preventEvent(t);let i=t.target,e=s.getVue(i);if(!e){g.error("获取vue属性失败");return}let r=e.url;if(!r){g.error("获取url失败");return}s.goToUrl(r);},{capture:!0});},coverTopicJump(){n.info("覆盖话题跳转点击事件"),h.on(document,"click",m.className.dynamic+" .launch-app-btn .bili-dyn-topic",function(t){var a;l.preventEvent(t);let i=t.target,e=s.getVue(i);if(!e){g.error("获取vue属性失败");return}let r=(a=e==null?void 0:e.$props)==null?void 0:a.data,o=r==null?void 0:r.jump_url;if(l.isNull(o)){g.error("获取jump_url失败");return}n.info(["话题的跳转信息: ",r]),s.goToUrl(o);},{capture:!0});},coverAtJump(){n.info("覆盖@ 跳转"),h.on(document,"click",m.className.dynamic+" .at",function(t){var r,o;l.preventEvent(t);let i=t.target,e=i.getAttribute("data-oid")||((o=(r=s.getVue(i))==null?void 0:r.$props)==null?void 0:o.rid);if(l.isNull(e)){g.error("获取data-oid或rid失败");return}n.info("用户的oid: "+e),s.goToUrl(B.getUserSpaceDynamicUrl(e));},{capture:!0});},coverReferenceJump(){n.info("覆盖引用的点击事件"),h.on(document,"click",m.className.dynamic+" .dyn-content .reference .dyn-orig-author",function(t){l.preventEvent(t);let e=t.target.getAttribute("data-url");if(!e){g.error("获取data-url失败");return}s.goToUrl(e);},{capture:!0}),h.on(document,"click",m.className.dynamic+" .dyn-content .reference .dyn-archive",function(t){var o;l.preventEvent(t);let i=t.target,e=s.getVue(i);if(!e){g.error("获取vue属性失败");return}let r=(o=e==null?void 0:e.data)==null?void 0:o.jump_url;if(l.isNull(r)){g.error("获取jump_url失败");return}s.goToUrl(r);},{capture:!0});}},yt={init(){c.execMenuOnce("bili-head-supplementaryVideoStreamingInformation",()=>{this.addVideoListUPInfo();});},addVideoListUPInfo(){n.info("添加视频列表UP主信息"),C(`
        ${m.className.head}{
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
        `),l.waitNode(m.className.head+" .video-list .card-box").then(()=>{let t=new l.LockFunction(()=>{document.querySelectorAll(m.className.head+" .video-list .card-box .v-card").forEach(i=>{var a,p,d,y,b;let e=s.getVue(i),r=((p=(a=e==null?void 0:e.info)==null?void 0:a.author)==null?void 0:p.name)||((y=(d=e==null?void 0:e.info)==null?void 0:d.owner)==null?void 0:y.name),o=(b=e==null?void 0:e.info)==null?void 0:b.duration;if(r&&!i.querySelector(".gm-up-info")){let v=document.createElement("div");v.innerHTML=`
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
                                    </div>`,v.className="gm-up-info",i.appendChild(v);}if(o){let v=i.querySelector(".count");if(v&&!v.querySelector(".gm-video-duration")){let k=typeof o=="string"?o:s.parseDuration(o),w=document.createElement("span");w.className="gm-video-duration",w.innerHTML=k,v.appendChild(w);}}});},25);l.mutationObserver(document.body,{config:{subtree:!0,childList:!0,attributes:!0},callback(){t.run();}});});}},bt={init(){c.execMenu("bili-setLogin",()=>{this.setLogin();}),c.execMenu("bili-setIsClient",()=>{this.setIsClient();}),c.execMenu("bili-setTinyApp",()=>{this.setTinyApp();});},setLogin(){let t=new l.GM_Cookie,i=t.get("DedeUserID");i!=null?n.info(["Cookie DedeUserID已存在：",i.value]):t.set({name:"DedeUserID",value:"2333"},e=>{e?n.error(e):n.success("Cookie成功设置DedeUserID=>2333");}),s.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.noCallApp",check(e){var r,o,a;return typeof((a=(o=(r=e==null?void 0:e.$store)==null?void 0:r.state)==null?void 0:o.common)==null?void 0:a.noCallApp)=="boolean"},set(e){n.success("成功设置参数 $store.state.common.noCallApp=true"),e.$store.state.common.noCallApp=!0;}},{msg:"设置参数 $store.state.common.userInfo.isLogin",check(e){var r,o,a,p;return typeof((p=(a=(o=(r=e==null?void 0:e.$store)==null?void 0:r.state)==null?void 0:o.common)==null?void 0:a.userInfo)==null?void 0:p.isLogin)=="boolean"},set(e){n.success("成功设置参数 $store.state.common.userInfo.isLogin=true"),e.$store.state.common.userInfo.isLogin=!0;}},{msg:"设置参数 $store.state.loginInfo.isLogin",check(e){var r,o,a;return typeof((a=(o=(r=e==null?void 0:e.$store)==null?void 0:r.state)==null?void 0:o.loginInfo)==null?void 0:a.isLogin)=="boolean"},set(e){n.success("成功设置参数 $store.state.loginInfo.isLogin=true"),e.$store.state.loginInfo.isLogin=!0;}}]);},setIsClient(){s.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.video.isClient",check(t){var i,e,r;return typeof typeof((r=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.video)==null?void 0:r.isClient)=="boolean"},set(t){n.success("成功设置参数 $store.state.video.isClient=true"),t.$store.state.video.isClient=!0;}},{msg:"设置参数 $store.state.opus.isClient=true",check(t){var i,e,r;return typeof((r=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.opus)==null?void 0:r.isClient)=="boolean"},set(t){n.success("成功设置参数 $store.state.opus.isClient"),t.$store.state.opus.isClient=!0;}},{msg:"设置参数 $store.state.playlist.isClient",check(t){var i,e,r;return typeof((r=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.playlist)==null?void 0:r.isClient)=="boolean"},set(t){n.success("成功设置参数 $store.state.playlist.isClient=true"),t.$store.state.playlist.isClient=!0;}},{msg:"设置参数 $store.state.ver.bili",check(t){var i,e,r;return typeof((r=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.ver)==null?void 0:r.bili)=="boolean"},set(t){n.success("成功设置参数 $store.state.ver.bili=true"),t.$store.state.ver.bili=!0;}},{msg:"设置参数 $store.state.ver.biliVer",check(t){var i,e,r;return typeof((r=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.ver)==null?void 0:r.biliVer)=="number"},set(t){n.success("成功设置参数 $store.state.ver.biliVer=2333333"),t.$store.state.ver.biliVer=2333333;}}]);},setTinyApp(){s.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.tinyApp",check(t){var i,e,r;return typeof((r=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.common)==null?void 0:r.tinyApp)=="boolean"},set(t){t.$store.state.common.tinyApp=!0,n.success("成功设置参数 $store.state.common.tinyApp=true");}}]);}},G={init(){bt.init(),this.listenRouterChange(),c.execMenuOnce("bili-hookSetTimeout_autoOpenApp",()=>{n.info("hook  window.setTimeout autoOpenApp"),R.setTimeout("autoOpenApp");}),c.execMenuOnce("bili-overrideLaunchAppBtn_Vue_openApp",()=>{n.info("覆盖元素.launch-app-btn上的openApp"),R.overRideLaunchAppBtn_Vue_openApp();}),c.execMenuOnce("bili-head-beautify",()=>{n.info("添加美化CSS"),C(st);}),_.isVideo()?(n.info("Router: 视频稿件"),dt.init()):_.isOpus()?(n.info("Router: 专栏稿件"),gt.init()):_.isDynamic()?(n.info("Router: 动态"),vt.init()):_.isBangumi()?(n.info("Router: 番剧"),ft.init()):_.isSearch()?n.info("Router: 搜索"):_.isLive()?(n.info("Router: 直播"),ht.init()):_.isTopicDetail()?n.info("Router: 话题"):_.isHead()?(n.info("Router: 首页之类的"),yt.init()):n.error("该Router暂未适配，可能是首页之类："+window.location.href);},listenRouterChange(){l.waitNode("#app").then(t=>{let i=function(e){var r;return typeof((r=e==null?void 0:e.$router)==null?void 0:r.afterEach)=="function"};l.waitVueByInterval(t,i).then(e=>{let r=s.getVue(t);r!=null&&i(r)&&(n.success("成功设置监听路由变化"),t.__vue__.$router.beforeEach((o,a,p)=>{if(n.info(["路由变化 => 更新前",{to:o,from:a}]),o.name==="space"){window.location.href=o.fullPath;return}if(o.fullPath.startsWith("/video")&&a.fullPath.startsWith("/video")&&c.getValue("bili-video-forceThisPageToRefreshAndRedirect")){window.location.href=o.fullPath;return}p();}),t.__vue__.$router.afterEach((o,a)=>{if(n.info(["路由变化 => 更新后",{to:o,from:a}]),o.hash==="#/seeCommentReply"||a.hash==="#/seeCommentReply"){n.info("该路由变化判定为#/seeCommentReply，不重载");return}c.execMenu("bili-listenRouterChange",()=>{G.init();});}));});});}};c.init();G.init();

})(Qmsg, Utils, DOMUtils);