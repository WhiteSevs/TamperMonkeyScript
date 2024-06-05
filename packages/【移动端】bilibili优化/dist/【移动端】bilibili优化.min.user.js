// ==UserScript==
// @name         【移动端】bilibili优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.6.6.0
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
// @require      https://cdn.jsdelivr.net/npm/@whitesev/utils@1.3.9/dist/index.umd.js
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

(a=>{function e(n){if(typeof n!="string")throw new TypeError("cssText must be a string");let p=document.createElement("style");return p.setAttribute("type","text/css"),p.innerHTML=n,document.head?document.head.appendChild(p):document.body?document.body.appendChild(p):document.documentElement.childNodes.length===0?document.documentElement.appendChild(p):document.documentElement.insertBefore(p,document.documentElement.childNodes[0]),p}if(typeof GM_addStyle=="function"){GM_addStyle(a);return}e(a)})(" .m-video2-awaken-btn,.m-head .launch-app-btn.m-nav-openapp,.m-head .launch-app-btn.home-float-openapp,.m-home .launch-app-btn.home-float-openapp,.m-space .launch-app-btn.m-space-float-openapp,.m-space .launch-app-btn.m-nav-openapp{display:none!important}#app .video .openapp-dialog,#app .video .launch-app-btn.m-video-main-launchapp:has([class^=m-video2-awaken]),#app .video .launch-app-btn.m-nav-openapp,#app .video .mplayer-widescreen-callapp,#app .video .launch-app-btn.m-float-openapp,#app .video .m-video-season-panel .launch-app-btn .open-app{display:none!important}#app.LIVE .open-app-btn.bili-btn-warp,#app .m-dynamic .launch-app-btn.m-nav-openapp,#app .m-dynamic .dynamic-float-openapp.dynamic-float-btn,#app .m-opus .float-openapp.opus-float-btn,#app .m-opus .v-switcher .launch-app-btn.list-more,#app .m-opus .opus-nav .launch-app-btn.m-nav-openapp,#app .topic-detail .launch-app-btn.m-nav-openapp,#app .topic-detail .launch-app-btn.m-topic-float-openapp{display:none!important}#app.main-container bili-open-app.btn-download{display:none!important} ");

(function (h, q, J) {
	'use strict';

	var A=typeof GM_getValue<"u"?GM_getValue:void 0,T=typeof GM_info<"u"?GM_info:void 0,F=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,N=typeof GM_setValue<"u"?GM_setValue:void 0,K=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Y=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,w=typeof unsafeWindow<"u"?unsafeWindow:void 0,H=window;const Q="【移动端】bilibili优化",l=q.noConflict(),f=J.noConflict(),X=H.pops||w.pops,r=new l.Log(T,w.console||H.console);var L;const D=((L=T==null?void 0:T.script)==null?void 0:L.name)||Q,z=!1;r.config({debug:z,logMaxCount:2e4,autoClearConsole:!0,tag:!0});h.config({position:"bottom",html:!0,maxNums:5,autoClose:!0,showClose:!1,showReverse:!0});const Z=new l.GM_Menu({GM_getValue:A,GM_setValue:N,GM_registerMenuCommand:F,GM_unregisterMenuCommand:K}),O=new l.Httpx(Y);O.config({logDetails:z,onabort(){h.warning("请求取消");},ontimeout(){h.error("请求超时");},onerror(t){h.error("请求异常"),r.error(["httpx-onerror 请求异常",t]);}});const P={Object:{defineProperty:w.Object.defineProperty},Function:{apply:w.Function.prototype.apply,call:w.Function.prototype.call},Element:{appendChild:w.Element.prototype.appendChild},setTimeout:w.setTimeout},C=l.addStyle,x="GM_Panel",U="data-key",E="data-default-value",p=function(t,i,e,n,o){let a={text:t,type:"switch",description:o,attributes:{},getValue(){return !!c.getValue(i,e)},callback(u,d){r.success(`${d?"开启":"关闭"} ${t}`),c.setValue(i,!!d);},afterAddToUListCallBack:void 0};return a.attributes&&(a.attributes[U]=i,a.attributes[E]=!!e),a},j={id:"panel-common",title:"通用",forms:[{text:"功能",type:"forms",forms:[p("监听路由-重载所有功能","bili-listenRouterChange",!0,void 0,"用于处理页面跳转(本页)时功能不生效问题"),p("修复点击UP主正确进入空间","bili-repairEnterUserHome",!0,void 0,"可以修复点击UP主进入个人空间但是跳转404的问题"),p("新标签页打开","bili-go-to-url-blank",!1,void 0,"通过开启【覆盖点击事件】相关的设置，通过新标签页打开链接")]},{text:"变量设置",type:"forms",forms:[p("isLogin","bili-setLogin",!0,void 0,"$store.state.common.noCallApp=true<br>$store.state.common.userInfo.isLogin=true<br>$store.state.loginInfo.isLogin=true"),p("isClient","bili-setIsClient",!0,void 0,"$store.state.video.isClient=true<br>$store.state.opus.isClient=true<br>$store.state.playlist.isClient=true<br>$store.state.ver.bili=true<br>$store.state.ver.biliVer=2333"),p("tinyApp","bili-setTinyApp",!0,void 0,"$store.state.common.tinyApp=true")]},{text:"劫持/拦截",type:"forms",forms:[p("覆盖.launch-app-btn openApp","bili-overrideLaunchAppBtn_Vue_openApp",!0,void 0,"覆盖.launch-app-btn元素上的openApp函数，可阻止点击唤醒/下载App"),p("劫持setTimeout-autoOpenApp","bili-hookSetTimeout_autoOpenApp",!0,void 0,"阻止自动调用App")]}]},b={isVideo(){return window.location.pathname.startsWith("/video/")},isBangumi(){return window.location.pathname.startsWith("/bangumi/")},isSearch(){return window.location.pathname.startsWith("/search")},isLive(){return window.location.hostname==="live.bilibili.com"},isOpus(){return window.location.pathname.startsWith("/opus")},isTopicDetail(){return window.location.pathname.startsWith("/topic-detail")},isDynamic(){return window.location.pathname.startsWith("/dynamic")},isHead(){return window.location.pathname==="/"||window.location.pathname.startsWith("/channel")}},tt={id:"panel-video",title:"视频",isDefault(){return b.isVideo()},forms:[{text:"功能",type:"forms",forms:[p("修复视频底部区域高度","bili-video-repairVideoBottomAreaHeight",!0,void 0,"添加margin-top"),p("自动点击【继续在网页观看】","bili-video-autoClickContinueToWatchOnTheWebpage",!0,void 0,"可避免弹窗出现且自动点击后播放视频"),p("美化显示","bili-video-beautify",!0,void 0,"调整底部推荐视频卡片样式类似哔哩哔哩App"),p("手势返回关闭评论区","bili-video-gestureReturnToCloseCommentArea",!0,void 0,"当浏览器手势触发浏览器回退页面时，关闭评论区"),p("initPlayer","bili-video-initPlayer",!0,void 0,"自动执行初始化播放器")]},{text:"变量设置",type:"forms",forms:[p("playBtnNoOpenApp","bili-video-setVideoPlayer",!0,void 0,"playBtnNoOpenApp=true<br>playBtnOpenApp=false<br>coverOpenApp=false"),p("解锁充电限制","bili-video-unlockUpower",!1,void 0,"is_upower_exclusive=true<br>is_upower_play=false<br>is_upower_preview=false")]},{text:"覆盖点击事件",type:"forms",forms:[p("相关视频","bili-video-cover-bottomRecommendVideo",!0,void 0,"点击下面的相关视频可正确跳转至该视频"),p("选集","bili-video-cover-seasonNew",!0,void 0,"点击下面的选集列表内的视频可正确跳转至该视频")]},{text:"劫持/拦截",type:"forms",forms:[p("阻止调用App","bili-video-hook-callApp",!0,void 0,"处理函数: PlayerAgent")]}]},et={id:"panel-bangumi",title:"番剧",isDefault(){return b.isBangumi()},forms:[{text:"变量设置",type:"forms",forms:[p("pay","bili-bangumi-setPay",!0,void 0,"$store.state.userStat.pay=1<br>$store.state.mediaInfo.user_status.pay=1")]},{text:"覆盖点击事件",type:"forms",forms:[p("【选集】","bili-bangumi-cover-clicl-event-chooseEp",!0,void 0,"让【选集】的视频列表可点击跳转"),p("【其它】","bili-bangumi-cover-clicl-event-other",!0,void 0,"让【PV&其他】、【预告】、【主题曲】、【香境剧场】等的视频列表可点击跳转"),p("【更多推荐】","bili-bangumi-cover-clicl-event-recommend",!0,void 0,"让【更多推荐】的视频列表可点击跳转")]},{text:"劫持/拦截",type:"forms",forms:[p("阻止调用App","bili-bangumi-hook-callApp",!0,void 0,"")]}]},it={id:"panel-search",title:"搜索",isDefault(){return b.isSearch()},forms:[]},nt={id:"panel-live",title:"直播",isDefault(){return b.isLive()},forms:[{text:"屏蔽",type:"forms",forms:[p("【屏蔽】聊天室","bili-live-block-chatRoom",!1,void 0,"直接不显示底部的聊天室"),p("【屏蔽】xxx进入直播间","bili-live-block-brush-prompt",!1,void 0,"直接不显示底部的xxx进入直播间"),p("【屏蔽】控制面板","bili-live-block-control-panel",!1,void 0,"屏蔽底部的发个弹幕、送礼")]},{text:"劫持/拦截",type:"forms",forms:[p("阻止open-app-btn元素点击事件触发","bili-live-prevent-openAppBtn",!0,void 0,"开启后可不跳转至唤醒App页面")]}]},rt={id:"panel-opus",title:"专栏",isDefault(){return b.isOpus()},forms:[{text:"覆盖点击事件",type:"forms",forms:[p("话题","bili-opus-cover-topicJump",!0,void 0,"点击话题正确跳转")]}]},ot={id:"panel-dynamic",title:"动态",isDefault(){return b.isDynamic()},forms:[{text:"覆盖点击事件",type:"forms",forms:[p("话题","bili-dynamic-cover-topicJump",!0,void 0,"点击话题正确跳转"),p("header用户","bili-dynamic-cover-header",!0,void 0,"点击内容上的发布本动态的用户正确跳转个人空间"),p("@用户","bili-dynamic-cover-atJump",!0,void 0,"点击@用户正确跳转个人空间"),p("引用","bili-dynamic-cover-referenceJump",!0,void 0,"点击引用的视频|用户正确跳转")]}]},at={id:"panel-topic-detail",title:"话题",isDefault(){return b.isTopicDetail()},forms:[]},lt={id:"panel-head",title:"首页",forms:[{text:"功能",type:"forms",forms:[p("美化显示","bili-head-beautify",!0,void 0,"调整瀑布流视频卡片样式类似哔哩哔哩App"),p("补充推荐视频信息","bili-head-supplementaryVideoStreamingInformation",!0,void 0,"给视频添加UP主名，当前视频总时长信息")]}]},s={getVue(t){return t==null?void 0:t.__vue__},waitVuePropToSet(t,i){function e(){let n=null;return typeof t=="string"?n=document.querySelector(t):typeof t=="function"?n=t():t instanceof HTMLElement&&(n=t),n}i.forEach(n=>{typeof n.msg=="string"&&r.info(n.msg);function o(){let a=e();if(a==null)return !1;let u=s.getVue(a);return u==null?!1:!!n.check(u)}l.waitVueByInterval(()=>e(),o,250,1e4).then(a=>{if(!a)return;let u=e(),d=s.getVue(u);d!=null&&n.set(d);});});},goToUrl(t){let i=document.querySelector("#app");if(i==null){h.error("跳转Url: 获取根元素#app失败"),r.error("跳转Url: 获取根元素#app失败："+t);return}let e=s.getVue(i);if(e==null){r.error("获取#app的vue属性失败"),h.error("获取#app的vue属性失败");return}let n=e.$router,o=c.getValue("bili-go-to-url-blank");if(r.info("即将跳转URL："+t),o)window.open(t,"_blank");else {if(t.startsWith("http")||t.startsWith("//")){let a=new URL(t);t=a.pathname+a.search+a.hash;}r.info("$router push跳转Url："+t),n.push(t);}},goToLogin(t=""){window.open(`https://passport.bilibili.com/h5-app/passport/login?gourl=${encodeURIComponent(t)}`);},parseDuration(t){if(typeof t!="number"&&(t=parseInt(t)),isNaN(t))return t.toString();function i(e){return e<10?`0${e}`:e}return t<60?`0:${i(t)}`:t>=60&&t<3600?`${Math.floor(t/60)}:${i(t%60)}`:`${Math.floor(t/3600)}:${i(Math.floor(t/60)%60)}:${i(t%60)}`},hookGestureReturnByVueRouter(t){function i(){r.success("触发popstate事件"),n(!0);}function e(){r.success("监听地址改变"),t.vueObj.$router.history.push(t.hash),f.on(window,"popstate",i);}async function n(o=!1){if(f.off(window,"popstate",i),!t.callback(o))for(;;)if(t.vueObj.$router.history.current.hash===t.hash)r.info("后退！"),t.vueObj.$router.back(),await l.sleep(250);else return}return e(),{resumeBack:n}},loadScript(t){let i=document.createElement("script");return i.src=t,document.head.appendChild(i),new Promise(e=>{i.onload=function(){r.success("script标签加载完毕："+t),setTimeout(()=>{e(!0);},100);};})}},c={$data:{data:new l.Dictionary,oneSuccessExecMenu:new l.Dictionary,onceExec:new l.Dictionary,scriptName:D,key:x,attributeKeyName:U,attributeDefaultValueName:E},$listener:{listenData:new l.Dictionary},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},initExtensionsMenu(){w.top===w.self&&Z.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:!1,isStoreValue:!1,showText(t){return t},callback:()=>{this.showPanel();}},{key:"go_to_login",text:"🛠 前往登录",autoReload:!1,isStoreValue:!1,showText(t){return t},callback(){s.goToLogin(window.location.href);}}]);},initPanelDefaultValue(){let t=this;function i(n){if(!n.attributes)return;let o=n.attributes[U],a=n.attributes[E];if(o==null){r.warn(["请先配置键",n]);return}t.$data.data.has(o)&&r.warn("请检查该key(已存在): "+o),t.$data.data.set(o,a);}let e=this.getPanelContentConfig();for(let n=0;n<e.length;n++){let o=e[n];if(!o.forms)continue;let a=o.forms;for(let u=0;u<a.length;u++){let d=a[u];if(d.forms){let v=d.forms;for(let y=0;y<v.length;y++)i(v[y]);}else i(d);}}},setValue(t,i){let e=A(x,{}),n=e[t];e[t]=i,N(x,e),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,n,i);},getValue(t,i){let n=A(x,{})[t];return n??(this.$data.data.has(t)?this.$data.data.get(t):i)},deleteValue(t){let i=A(x,{}),e=i[t];Reflect.deleteProperty(i,t),N(x,i),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,e,void 0);},addValueChangeListener(t,i){let e=Math.random();return this.$listener.listenData.set(t,{id:e,key:t,callback:i}),e},removeValueChangeListener(t){let i=null;for(const[e,n]of this.$listener.listenData.entries())if(n.id===t){i=e;break}this.$listener.listenData.delete(i);},hasKey(t){let i=A(x,{});return t in i},execMenu(t,i){if(typeof t!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(t)){r.warn(`${t} 键不存在`);return}let e=c.getValue(t);e&&i(e);},execMenuOnce(t,i){if(typeof t!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(t)){r.warn(`${t} 键不存在`);return}let e=c.getValue(t);if(e){if(this.$data.oneSuccessExecMenu.has(t))return;i(e),this.$data.oneSuccessExecMenu.set(t,1);}},onceExec(t,i){if(typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(t)||(i(),this.$data.onceExec.set(t,1));},showPanel(){X.panel({title:{text:`${D}-设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:this.isMobile(),width:this.getWidth(),height:this.getHeight(),drag:!0,only:!0});},isMobile(){return window.outerWidth<550},getWidth(){return window.outerWidth<550?"92dvw":"550px"},getHeight(){return window.outerHeight>450?"80dvh":"450px"},getPanelContentConfig(){return [j,lt,tt,rt,ot,et,at,it,nt]}},st=`/* 主页 */\r
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
`,I={$isHook:{windowPlayerAgent:!1,hookWebpackJsonp_openApp:!1,overRideLaunchAppBtn_Vue_openApp:!1},$data:{setTimeout:[]},windowWebPack(t="webpackJsonp",i,e){let n;P.Object.defineProperty(w,t,{get(){return n},set(o){r.success("成功劫持webpack，当前webpack名："+t),n=o;const a=n.push;n.push=function(...u){let d=u[0][0];return (i==d||Array.isArray(i)&&Array.isArray(d)&&JSON.stringify(i)===JSON.stringify(d))&&Object.keys(u[0][1]).forEach(v=>{let y=u[0][1][v];u[0][1][v]=function(...g){let $=y.call(this,...g);return g[0]=e(g[0]),$};}),a.call(this,...u)};}});},windowPlayerAgent(){if(this.$isHook.windowPlayerAgent)return;this.$isHook.windowPlayerAgent=!0;let t;P.Object.defineProperty(w,"PlayerAgent",{get(){return new Proxy({},{get(i,e){return e==="openApp"?function(...n){let o=n[0];if(r.info(["调用PlayerAgent.openApp",o]),o.event==="fullScreen"){let a=document.querySelector(".mplayer-btn-widescreen");a?a.click():r.warn("主动再次点击全屏按钮失败，原因：未获取到.mplayer-btn-widescreen元素");}}:t[e]}})},set(i){t=i;}});},setTimeout(t){if(this.$data.setTimeout.push(t),this.$data.setTimeout.length>1){r.info("window.setTimeout hook新增劫持判断参数："+t);return}w.setTimeout=function(...i){let e=i[0].toString();if(e.match(t)){r.success(["劫持setTimeout的函数",e]);return}return P.setTimeout.apply(this,i)};},overRideLaunchAppBtn_Vue_openApp(){if(this.$isHook.overRideLaunchAppBtn_Vue_openApp)return;this.$isHook.overRideLaunchAppBtn_Vue_openApp=!0;function t(i){typeof i.openApp!="function"||i.openApp.toString().includes("阻止唤醒App")||(i.openApp=function(...n){r.success(["openApp：阻止唤醒App",n]);});}l.mutationObserver(document,{config:{subtree:!0,childList:!0,attributes:!0},callback(){document.querySelectorAll(".launch-app-btn").forEach(i=>{let e=s.getVue(i);e&&(t(e),e.$children&&e.$children.length&&e.$children.forEach(n=>{t(n);}));});}});}},ct={init(){c.execMenuOnce("bili-video-hook-callApp",()=>{r.info("hook window.PlayerAgent"),I.windowPlayerAgent();});}},R={getUserSpaceUrl(t){return `https://space.bilibili.com/${t}`},getUserSpaceDynamicUrl(t){return this.getUserSpaceUrl(t)+"/dynamic"},getVideoUrl(t){return `https://www.bilibili.com/video/${t}`}},m={className:{bangumi:"#app.main-container",dynamic:"#app .m-dynamic",opus:"#app .m-opus",search:"#app .m-search","topic-detail":"#app .topic-detail",video:"#app .video",head:"#app .m-head"}},ut=`#app .video {\r
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
`,pt={$data:{isInitPlayer:!1,isUnlockUpower:!1},init(){c.execMenu("bili-video-initPlayer",()=>{this.initPlayer();}),c.execMenu("bili-video-setVideoPlayer",()=>{this.setVideoPlayer();}),c.execMenu("bili-video-unlockUpower",()=>{this.unlockUpower();});},initPlayer(){if(this.$data.isInitPlayer)return;this.$data.isInitPlayer=!0;let t=this;l.waitNode("#bilibiliPlayer",3e3).then(async i=>{if(!i){t.$data.isInitPlayer=!1;return}await l.sleep(300),s.waitVuePropToSet(".m-video-player",[{msg:"等待获取函数 initPlayer()",check(e){return typeof(e==null?void 0:e.initPlayer)=="function"},set(e){t.$data.isInitPlayer=!1;function n(){let o,a,u=1,d=!1,v=new l.LockFunction(async()=>{if(document.querySelector("#bilibiliPlayer video")){d=!0,r.success("<video>标签已成功初始化");return}w.BPlayerMobile==null&&(r.error("未加载player播放器，主动引入script标签"),await s.loadScript("https://s1.hdslb.com/bfs/static/player/main/html5/mplayer.js?v=2862592")),e.initPlayer(),r.success("第 "+u+" 次未检测到视频，调用初始化视频函数 initPlayer()"),await l.sleep(300),u++;});o=setInterval(async()=>{await v.run(),d&&(clearTimeout(a),clearInterval(o));},600),a=setTimeout(()=>{r.warn("检测视频超时3s，取消检测"),clearInterval(o);},3e3);}n();}}]);});},unlockUpower(){s.waitVuePropToSet(m.className.video,[{msg:"设置属性 __vue__.info.is_upower_exclusive",check(t){var i,e;return console.log(typeof((i=t==null?void 0:t.info)==null?void 0:i.is_upower_exclusive)),typeof((e=t==null?void 0:t.info)==null?void 0:e.is_upower_exclusive)=="boolean"},set(t){t.info.is_upower_exclusive=!1,r.success("成功设置属性  __vue__.info.is_upower_exclusive=false");}},{msg:"设置属性 __vue__.info.is_upower_play",check(t){var i;return typeof((i=t==null?void 0:t.info)==null?void 0:i.is_upower_play)=="boolean"},set(t){t.info.is_upower_play=!1,r.success("成功设置属性  __vue__.info.is_upower_play=false");}},{msg:"设置属性 __vue__.info.is_upower_preview",check(t){var i;return typeof((i=t==null?void 0:t.info)==null?void 0:i.is_upower_preview)=="boolean"},set(t){t.info.is_upower_preview=!1,r.success("成功设置属性  __vue__.info.is_upower_preview=false");}}]);},setVideoPlayer(){s.waitVuePropToSet(m.className.video+" .m-video-player",[{msg:"设置参数 playBtnNoOpenApp",check(t){return typeof t.playBtnNoOpenApp=="boolean"},set(t){t.playBtnNoOpenApp=!0,r.success("成功设置参数 playBtnNoOpenApp=true");}},{msg:"设置参数 playBtnOpenApp",check(t){return typeof t.playBtnOpenApp=="boolean"},set(t){t.playBtnOpenApp=!1,r.success("成功设置参数 playBtnOpenApp=false");}},{msg:"设置参数 coverOpenApp",check(t){return typeof t.coverOpenApp=="boolean"},set(t){t.coverOpenApp=!1,r.success("成功设置参数 coverOpenApp=false");}}]);}},dt={$data:{isAddBeautifyCSS:!1},init(){ct.init(),pt.init(),c.execMenuOnce("bili-video-repairVideoBottomAreaHeight",()=>{this.repairVideoBottomAreaHeight();}),c.execMenuOnce("bili-video-autoClickContinueToWatchOnTheWebpage",()=>{this.autoClickContinueToWatchOnTheWebpage();}),c.execMenu("bili-video-beautify",()=>{this.beautify();}),c.execMenuOnce("bili-video-cover-bottomRecommendVideo",()=>{this.coverBottomRecommendVideo();}),c.execMenuOnce("bili-video-gestureReturnToCloseCommentArea",()=>{this.gestureReturnToCloseCommentArea();}),c.execMenuOnce("bili-video-cover-seasonNew",()=>{this.coverSeasonNew();});},beautify(){r.info("美化"),this.$data.isAddBeautifyCSS||(this.$data.isAddBeautifyCSS=!0,C(ut)),l.waitNode(m.className.video+" .bottom-tab .list-view .card-box",1e4).then(t=>{if(!t){r.error("$cardBox is null");return}function i(o){var v,y;let a=o.querySelector(".title"),u=o.querySelector(".count .left"),d=s.getVue(o);if(a&&u&&!o.querySelector(".gm-right-container")){let g=document.createElement("div"),$=(y=(v=d==null?void 0:d.info)==null?void 0:v.owner)==null?void 0:y.name;g.className="gm-up-name",g.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${$}</span>
						`;let _=document.createElement("div"),k=document.createElement("div");_.className="gm-right-container",k.className="gm-right-bottom",f.after(a,_),_.appendChild(a),_.appendChild(k),k.appendChild(g),k.appendChild(u);}}function e(o){var v,y,g;let a=o.querySelector(".title"),u=o.querySelector(".count"),d=s.getVue(o);if(a&&u&&!o.querySelector(".gm-right-container")){let $=(v=d==null?void 0:d.info)==null?void 0:v.duration,_=document.createElement("div");_.className="duration",_.innerText=s.parseDuration($);let k=u.cloneNode(!0);k.className="left";let B=document.createElement("div"),W=(g=(y=d==null?void 0:d.info)==null?void 0:y.owner)==null?void 0:g.name;u.appendChild(_),B.className="gm-up-name",B.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${W}</span>
						`;let M=document.createElement("div"),S=document.createElement("div");M.className="gm-right-container",S.className="gm-right-bottom",f.after(a,M),M.appendChild(a),M.appendChild(S),S.appendChild(B),S.appendChild(k);}}let n=new l.LockFunction(()=>{document.querySelectorAll(m.className.video+" .bottom-tab .list-view .card-box .v-card-toapp").forEach(o=>{i(o);}),document.querySelectorAll(m.className.video+" .bottom-tab .list-view .card-box>a.v-card").forEach(o=>{e(o);});},25);l.mutationObserver(document.querySelector(m.className.video),{config:{subtree:!0,childList:!0},callback(){setTimeout(()=>{n.run();},0);}});});},repairVideoBottomAreaHeight(){r.info("修复视频底部区域高度"),C(`
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
		`);},autoClickContinueToWatchOnTheWebpage(){f.on(document,"click",m.className.video+" .main-info .btn",function(){r.info("触发点击【立即播放】，自动等待弹窗出现"),l.waitNode(".to-see",1e4).then(t=>{if(!t){r.error("弹窗按钮【继续在网页观看】10秒内未出现，取消等待");return}r.success("自动点击 继续在网页观看"),t.click();});});},coverBottomRecommendVideo(){r.info("覆盖 相关视频 点击事件"),f.on(document,"click",m.className.video+" .list-view .card-box .launch-app-btn",function(t){let i=t.target,e=s.getVue(i);if(!e){h.error("获取相关视频的__vue__失败");return}let n=e.bvid;if(l.isNull(n))if(e.$children&&e.$children[0]&&l.isNotNull(e.$children[0].bvid))n=e.$children[0].bvid;else {h.error("获取相关视频的bvid失败");return}r.info("相关视频的bvid: "+n),s.goToUrl(R.getVideoUrl(n)),l.preventEvent(t);},{capture:!0});},coverSeasonNew(){r.info("覆盖 选集视频列表 点击事件");function t(i){let e=i.target,n=s.getVue(e);if(!n){h.error("获取选集视频的目标视频的__vue__失败");return}let o=n.bvid;if(l.isNull(o)){h.error("获取相关视频的bvid失败");return}r.info("相关视频的bvid: "+o),s.goToUrl(R.getVideoUrl(o)),l.preventEvent(i);}f.on(document,"click",m.className.video+" .m-video-season-new .video-card .launch-app-btn",t,{capture:!0}),f.on(document,"click",m.className.video+" .m-video-season-panel .season-video-item .launch-app-btn",t,{capture:!0});},gestureReturnToCloseCommentArea(){r.info("手势返回关闭评论区，全局监听document点击.sub-reply-preview"),l.waitNode("#app").then(t=>{l.waitVueByInterval(t,()=>{var e,n;let i=s.getVue(t);return i==null?!1:typeof((n=(e=i==null?void 0:i.$router)==null?void 0:e.options)==null?void 0:n.scrollBehavior)!=null},250,1e4).then(i=>{let e=s.getVue(t);if(!e){r.error("获取#app的vue属性失败");return}let n=e.$router.options.scrollBehavior;e.$router.options.scrollBehavior=function(o,a,u){return o.hash==="#/seeCommentReply"?(r.info("当前操作为打开评论区，scrollBehavior返回null"),null):o.hash===""&&a.hash==="#/seeCommentReply"?(r.info("当前操作为关闭评论区，scrollBehavior返回null"),null):n.call(this,...arguments)};});}),f.on(document,"click",".sub-reply-preview",function(t){let i=document.querySelector("#app"),e=s.getVue(i);if(!e){r.error("获取#app元素失败");return}let n=s.hookGestureReturnByVueRouter({vueObj:e,hash:"#/seeCommentReply",callback(o){if(!o)return !1;let a=document.querySelector(".dialog-close-icon");return a?a.click():r.error("评论区关闭失败，原因：元素dialog-close-icon获取失败"),!0}});l.waitNode(".dialog-close-icon").then(o=>{f.on(o,"click",function(){n.resumeBack(!1);},{capture:!0,once:!0});});});}},mt={init(){c.execMenu("bili-bangumi-setPay",()=>{this.setPay();});},setPay(){s.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.userStat.pay",check(t){var i,e,n;return typeof typeof((n=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.userStat)==null?void 0:n.pay)=="number"},set(t){r.success("成功设置参数 $store.state.userStat.pay=1"),t.$store.state.userStat.pay=1;}},{msg:"设置参数 $store.state.mediaInfo.user_status.pay",check(t){var i,e,n,o;return typeof((o=(n=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.mediaInfo)==null?void 0:n.user_status)==null?void 0:o.pay)=="number"},set(t){r.success("成功设置参数 $store.state.mediaInfo.user_status.pay=1"),t.$store.state.mediaInfo.user_status.pay=1;}}]);}},V={getUrl(t){if(t!=null)return t.getAttribute("universallink")},jumpToUrl(t){let e=t.target.querySelector("bili-open-app");if(e){let n=V.getUrl(e);n?s.goToUrl(n):(h.error("获取bili-open-app的Url失败"),r.error("获取bili-open-app的Url失败"));}else h.error("未获取到<bili-open-app>元素"),r.error("未获取到<bili-open-app>元素");}},ft={init(){mt.init(),c.execMenuOnce("bili-bangumi-hook-callApp",()=>{this.hookCallApp();}),c.execMenu("bili-bangumi-cover-clicl-event-chooseEp",()=>{this.setChooseEpClickEvent();}),c.execMenu("bili-bangumi-cover-clicl-event-other",()=>{this.setClickOtherVideo();}),c.execMenu("bili-bangumi-cover-clicl-event-recommend",()=>{this.setRecommendClickEvent();});},hookCallApp(){let t=w.setTimeout;w.setTimeout=function(...i){if(i[0].toString().includes("autoOpenApp")){r.success(["阻止唤醒App",i]);return}return t.apply(this,i)};},setPay(){s.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.userStat.pay",check(t){var i,e,n;return typeof typeof((n=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.userStat)==null?void 0:n.pay)=="number"},set(t){r.success("成功设置参数 $store.state.userStat.pay=1"),t.$store.state.userStat.pay=1;}},{msg:"设置参数 $store.state.mediaInfo.user_status.pay",check(t){var i,e,n,o;return typeof((o=(n=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.mediaInfo)==null?void 0:n.user_status)==null?void 0:o.pay)=="number"},set(t){r.success("成功设置参数 $store.state.mediaInfo.user_status.pay=1"),t.$store.state.mediaInfo.user_status.pay=1;}}]);},setChooseEpClickEvent(){l.waitNode(m.className.bangumi+" .ep-list-pre-wrapper ul.ep-list-pre-container").then(t=>{r.info("覆盖【选集】的点击事件"),f.on(t,"click","li.episode-item",function(i){l.preventEvent(i),V.jumpToUrl(i);},{capture:!0});}),l.waitNode(m.className.bangumi+" .ep-list-pre-wrapper ul.season-list-wrapper").then(t=>{r.info("覆盖【xx季】的点击事件"),f.on(t,"click","li",function(i){l.preventEvent(i),V.jumpToUrl(i);},{capture:!0});}),l.waitNode(m.className.bangumi+" .ep-list-pre-header").then(t=>{r.info("覆盖【选集】右上角的【全xx话】Arrow的点击事件"),f.on(t,"click",function(i){l.preventEvent(i);},{capture:!0});});},setClickOtherVideo(){l.waitNode(m.className.bangumi+" .section-preview-wrapper ul.ep-list-pre-container").then(t=>{r.info("覆盖【PV&其他】、【预告】、【主题曲】的点击事件"),f.on(t,"click","li.section-preview-item",function(i){l.preventEvent(i),V.jumpToUrl(i);},{capture:!0});}),l.waitNode(m.className.bangumi+" .section-preview-header").then(t=>{r.info("覆盖【PV&其他】、【预告】、【主题曲】右上角的Arrow的点击事件"),f.on(t,"click",function(i){l.preventEvent(i);},{capture:!0});});},setRecommendClickEvent(){l.waitNode(m.className.bangumi+" .recom-wrapper ul.recom-list").then(t=>{r.info("覆盖【更多推荐】番剧的点击事件"),f.on(t,"click","li.recom-item-v2",function(i){l.preventEvent(i),V.jumpToUrl(i);},{capture:!0});});}},ht={init(){c.execMenuOnce("bili-live-prevent-openAppBtn",()=>{this.preventOpenAppBtn();}),c.execMenuOnce("bili-live-block-chatRoom",()=>{this.blockChatRoom();}),c.execMenuOnce("bili-live-block-brush-prompt",()=>{this.blockBrushPrompt();}),c.execMenuOnce("bili-live-block-control-panel",()=>{this.blockControlPanel();});},preventOpenAppBtn(){l.waitNode("body").then(t=>{r.info("阻止.open-app-btn元素触发点击事件"),f.on(t,"click",".open-app-btn",function(i){l.preventEvent(i);},{capture:!0}),f.on(t,"click","#web-player-controller-wrap-el",function(i){l.preventEvent(i);},{capture:!0});});},blockChatRoom(){r.info("屏蔽聊天室"),C(`
        #chat-items{
            display: none !important;
        }
        `);},blockBrushPrompt(){r.info("屏蔽xxx进入直播间"),C(`
        #brush-prompt{
            display: none !important;
        }
        `);},blockControlPanel(){r.info("屏蔽底部工具栏"),C(`
        .control-panel{
            display: none !important;
        }`);}},gt={init(){c.execMenuOnce("bili-opus-cover-topicJump",()=>{this.coverTopicJump();});},coverTopicJump(){r.info("覆盖话题跳转点击事件"),f.on(document,"click",m.className.opus+" .launch-app-btn.opus-module-topic",function(t){var a;let i=t.target,e=s.getVue(i);if(!e){h.error("获取话题的__vue__失败");return}let n=(a=e==null?void 0:e.$props)==null?void 0:a.data,o=n==null?void 0:n.jump_url;if(l.isNull(o)){h.error("获取话题的jump_url失败");return}r.info(["话题的跳转信息: ",n]),s.goToUrl(o);},{capture:!0});}},vt={init(){c.execMenuOnce("bili-dynamic-cover-topicJump",()=>{this.coverTopicJump();}),c.execMenuOnce("bili-dynamic-cover-atJump",()=>{this.coverAtJump();}),c.execMenuOnce("bili-dynamic-cover-referenceJump",()=>{this.coverReferenceJump();}),c.execMenuOnce("bili-dynamic-cover-header",()=>{this.coverHeaderJump();});},coverHeaderJump(){r.info("覆盖header点击事件"),f.on(document,"click",m.className.dynamic+" .launch-app-btn .dyn-header",function(t){l.preventEvent(t);let i=t.target,e=s.getVue(i);if(!e){h.error("获取vue属性失败");return}let n=e.url;if(!n){h.error("获取url失败");return}s.goToUrl(n);},{capture:!0});},coverTopicJump(){r.info("覆盖话题跳转点击事件"),f.on(document,"click",m.className.dynamic+" .launch-app-btn .bili-dyn-topic",function(t){var a;l.preventEvent(t);let i=t.target,e=s.getVue(i);if(!e){h.error("获取vue属性失败");return}let n=(a=e==null?void 0:e.$props)==null?void 0:a.data,o=n==null?void 0:n.jump_url;if(l.isNull(o)){h.error("获取jump_url失败");return}r.info(["话题的跳转信息: ",n]),s.goToUrl(o);},{capture:!0});},coverAtJump(){r.info("覆盖@ 跳转"),f.on(document,"click",m.className.dynamic+" .at",function(t){var n,o;l.preventEvent(t);let i=t.target,e=i.getAttribute("data-oid")||((o=(n=s.getVue(i))==null?void 0:n.$props)==null?void 0:o.rid);if(l.isNull(e)){h.error("获取data-oid或rid失败");return}r.info("用户的oid: "+e),s.goToUrl(R.getUserSpaceDynamicUrl(e));},{capture:!0});},coverReferenceJump(){r.info("覆盖引用的点击事件"),f.on(document,"click",m.className.dynamic+" .dyn-content .reference .dyn-orig-author",function(t){l.preventEvent(t);let e=t.target.getAttribute("data-url");if(!e){h.error("获取data-url失败");return}s.goToUrl(e);},{capture:!0}),f.on(document,"click",m.className.dynamic+" .dyn-content .reference .dyn-archive",function(t){var o;l.preventEvent(t);let i=t.target,e=s.getVue(i);if(!e){h.error("获取vue属性失败");return}let n=(o=e==null?void 0:e.data)==null?void 0:o.jump_url;if(l.isNull(n)){h.error("获取jump_url失败");return}s.goToUrl(n);},{capture:!0});}},yt={init(){c.execMenuOnce("bili-head-supplementaryVideoStreamingInformation",()=>{this.addVideoListUPInfo();});},addVideoListUPInfo(){r.info("添加视频列表UP主信息"),C(`
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
        `),l.waitNode(m.className.head+" .video-list .card-box").then(()=>{let t=new l.LockFunction(()=>{document.querySelectorAll(m.className.head+" .video-list .card-box .v-card").forEach(i=>{var a,u,d,v,y;let e=s.getVue(i),n=((u=(a=e==null?void 0:e.info)==null?void 0:a.author)==null?void 0:u.name)||((v=(d=e==null?void 0:e.info)==null?void 0:d.owner)==null?void 0:v.name),o=(y=e==null?void 0:e.info)==null?void 0:y.duration;if(n&&!i.querySelector(".gm-up-info")){let g=document.createElement("div");g.innerHTML=`
                                    <div class="gm-up-name">
                                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                            <path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
                                            </path>
                                        </svg>
                                        ${n}
                                    </div>
                                    <div class="gm-video-handle">
                                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                            <path fill="#2E2F30" d="M512 256a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z m0 341.333333a85.333333 85.333333 0 1 1 0-170.666666 85.333333 85.333333 0 0 1 0 170.666666z m0 341.333334a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z">
                                            </path>
                                        </svg>
                                    </div>`,g.className="gm-up-info",i.appendChild(g);}if(o){let g=i.querySelector(".count");if(g&&!g.querySelector(".gm-video-duration")){let $=typeof o=="string"?o:s.parseDuration(o),_=document.createElement("span");_.className="gm-video-duration",_.innerHTML=$,g.appendChild(_);}}});},25);l.mutationObserver(document.body,{config:{subtree:!0,childList:!0,attributes:!0},callback(){t.run();}});});}},bt={init(){c.execMenu("bili-setLogin",()=>{this.setLogin();}),c.execMenu("bili-setIsClient",()=>{this.setIsClient();}),c.execMenu("bili-setTinyApp",()=>{this.setTinyApp();});},setLogin(){let t=new l.GM_Cookie,i=t.get("DedeUserID");i!=null?r.info(["Cookie DedeUserID已存在：",i.value]):t.set({name:"DedeUserID",value:"2333"},e=>{e?r.error(e):r.success("Cookie成功设置DedeUserID=>2333");}),s.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.noCallApp",check(e){var n,o,a;return typeof((a=(o=(n=e==null?void 0:e.$store)==null?void 0:n.state)==null?void 0:o.common)==null?void 0:a.noCallApp)=="boolean"},set(e){r.success("成功设置参数 $store.state.common.noCallApp=true"),e.$store.state.common.noCallApp=!0;}},{msg:"设置参数 $store.state.common.userInfo.isLogin",check(e){var n,o,a,u;return typeof((u=(a=(o=(n=e==null?void 0:e.$store)==null?void 0:n.state)==null?void 0:o.common)==null?void 0:a.userInfo)==null?void 0:u.isLogin)=="boolean"},set(e){r.success("成功设置参数 $store.state.common.userInfo.isLogin=true"),e.$store.state.common.userInfo.isLogin=!0;}},{msg:"设置参数 $store.state.loginInfo.isLogin",check(e){var n,o,a;return typeof((a=(o=(n=e==null?void 0:e.$store)==null?void 0:n.state)==null?void 0:o.loginInfo)==null?void 0:a.isLogin)=="boolean"},set(e){r.success("成功设置参数 $store.state.loginInfo.isLogin=true"),e.$store.state.loginInfo.isLogin=!0;}}]);},setIsClient(){s.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.video.isClient",check(t){var i,e,n;return typeof typeof((n=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.video)==null?void 0:n.isClient)=="boolean"},set(t){r.success("成功设置参数 $store.state.video.isClient=true"),t.$store.state.video.isClient=!0;}},{msg:"设置参数 $store.state.opus.isClient=true",check(t){var i,e,n;return typeof((n=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.opus)==null?void 0:n.isClient)=="boolean"},set(t){r.success("成功设置参数 $store.state.opus.isClient"),t.$store.state.opus.isClient=!0;}},{msg:"设置参数 $store.state.playlist.isClient",check(t){var i,e,n;return typeof((n=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.playlist)==null?void 0:n.isClient)=="boolean"},set(t){r.success("成功设置参数 $store.state.playlist.isClient=true"),t.$store.state.playlist.isClient=!0;}},{msg:"设置参数 $store.state.ver.bili",check(t){var i,e,n;return typeof((n=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.ver)==null?void 0:n.bili)=="boolean"},set(t){r.success("成功设置参数 $store.state.ver.bili=true"),t.$store.state.ver.bili=!0;}},{msg:"设置参数 $store.state.ver.biliVer",check(t){var i,e,n;return typeof((n=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.ver)==null?void 0:n.biliVer)=="number"},set(t){r.success("成功设置参数 $store.state.ver.biliVer=2333333"),t.$store.state.ver.biliVer=2333333;}}]);},setTinyApp(){s.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.tinyApp",check(t){var i,e,n;return typeof((n=(e=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:e.common)==null?void 0:n.tinyApp)=="boolean"},set(t){t.$store.state.common.tinyApp=!0,r.success("成功设置参数 $store.state.common.tinyApp=true");}}]);}},G={init(){bt.init(),this.listenRouterChange(),c.execMenuOnce("bili-hookSetTimeout_autoOpenApp",()=>{r.info("hook  window.setTimeout autoOpenApp"),I.setTimeout("autoOpenApp");}),c.execMenuOnce("bili-overrideLaunchAppBtn_Vue_openApp",()=>{r.info("覆盖元素.launch-app-btn上的openApp"),I.overRideLaunchAppBtn_Vue_openApp();}),c.execMenuOnce("bili-head-beautify",()=>{r.info("添加美化CSS"),C(st);}),b.isVideo()?(r.info("Router: 视频稿件"),dt.init()):b.isOpus()?(r.info("Router: 专栏稿件"),gt.init()):b.isDynamic()?(r.info("Router: 动态"),vt.init()):b.isBangumi()?(r.info("Router: 番剧"),ft.init()):b.isSearch()?r.info("Router: 搜索"):b.isLive()?(r.info("Router: 直播"),ht.init()):b.isTopicDetail()?r.info("Router: 话题"):b.isHead()?(r.info("Router: 首页之类的"),yt.init()):r.error("该Router暂未适配，可能是首页之类："+window.location.href);},listenRouterChange(){l.waitNode("#app").then(t=>{let i=function(e){var n;return typeof((n=e==null?void 0:e.$router)==null?void 0:n.afterEach)=="function"};l.waitVueByInterval(t,i).then(e=>{let n=s.getVue(t);n!=null&&i(n)&&(r.success("成功设置监听路由变化"),t.__vue__.$router.beforeEach((o,a,u)=>{if(r.info(["路由变化 => 更新前",{to:o,from:a}]),o.name==="space"){window.location.href=o.fullPath;return}u();}),t.__vue__.$router.afterEach((o,a)=>{if(r.info(["路由变化 => 更新后",{to:o,from:a}]),o.hash==="#/seeCommentReply"||a.hash==="#/seeCommentReply"){r.info("该路由变化判定为#/seeCommentReply，不重载");return}c.execMenu("bili-listenRouterChange",()=>{G.init();});}));});});}};c.init();G.init();

})(Qmsg, Utils, DOMUtils);