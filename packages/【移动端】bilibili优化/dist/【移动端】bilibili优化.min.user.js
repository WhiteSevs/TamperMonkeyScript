// ==UserScript==
// @name         【移动端】bilibili优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.6.3.23
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
// @require      https://cdn.jsdelivr.net/npm/@whitesev/utils@1.3.5/dist/index.umd.js
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

(a=>{function e(n){if(typeof n!="string")throw new TypeError("cssText must be a string");let p=document.createElement("style");return p.setAttribute("type","text/css"),p.innerHTML=n,document.head?document.head.appendChild(p):document.body?document.body.appendChild(p):document.documentElement.childNodes.length===0?document.documentElement.appendChild(p):document.documentElement.insertBefore(p,document.documentElement.childNodes[0]),p}if(typeof GM_addStyle=="function"){GM_addStyle(a);return}e(a)})(" .m-video2-awaken-btn,.m-head .launch-app-btn.m-nav-openapp,.m-head .launch-app-btn.home-float-openapp,.m-home .launch-app-btn.home-float-openapp,.m-space .launch-app-btn.m-space-float-openapp,.m-space .launch-app-btn.m-nav-openapp{display:none!important}#app .video .openapp-dialog,#app .video .launch-app-btn.m-video-main-launchapp:has([class^=m-video2-awaken]),#app .video .launch-app-btn.m-nav-openapp,#app .video .mplayer-widescreen-callapp,#app .video .launch-app-btn.m-float-openapp{display:none!important}#app.LIVE .open-app-btn.bili-btn-warp,#app .m-dynamic .launch-app-btn.m-nav-openapp,#app .m-dynamic .dynamic-float-openapp.dynamic-float-btn,#app .m-opus .float-openapp.opus-float-btn,#app .m-opus .v-switcher .launch-app-btn.list-more,#app .m-opus .opus-nav .launch-app-btn.m-nav-openapp,#app .topic-detail .launch-app-btn.m-nav-openapp,#app .topic-detail .launch-app-btn.m-topic-float-openapp{display:none!important}#app.main-container bili-open-app.btn-download{display:none!important} ");

(function (f, L, H) {
	'use strict';

	var $=typeof GM_getValue<"u"?GM_getValue:void 0,V=typeof GM_info<"u"?GM_info:void 0,G=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,_=typeof GM_setValue<"u"?GM_setValue:void 0,W=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,z=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,b=typeof unsafeWindow<"u"?unsafeWindow:void 0,P=window;const J="【移动端】bilibili优化",a=L.noConflict(),m=H.noConflict(),q=P.pops||b.pops,r=new a.Log(V,b.console||P.console);var U;const E=((U=V==null?void 0:V.script)==null?void 0:U.name)||J,R=!1;r.config({debug:R,logMaxCount:2e4,autoClearConsole:!0,tag:!0});f.config({position:"bottom",html:!0,maxNums:5,autoClose:!0,showClose:!1,showReverse:!0});const O=new a.GM_Menu({GM_getValue:$,GM_setValue:_,GM_registerMenuCommand:G,GM_unregisterMenuCommand:W}),F=new a.Httpx(z);F.config({logDetails:R,onabort(){f.warning("请求取消");},ontimeout(){f.error("请求超时");},onerror(e){f.error("请求异常"),r.error(["httpx-onerror 请求异常",e]);}});const B={Object:{defineProperty:b.Object.defineProperty},Function:{apply:b.Function.prototype.apply,call:b.Function.prototype.call},Element:{appendChild:b.Element.prototype.appendChild},setTimeout:b.setTimeout},C=a.addStyle,A="GM_Panel",T="data-key",S="data-default-value",u=function(e,t,i,n,o){let l={text:e,type:"switch",description:o,attributes:{},getValue(){return !!s.getValue(t,i)},callback(p,h){r.success(`${h?"开启":"关闭"} ${e}`),s.setValue(t,!!h);},afterAddToUListCallBack:void 0};return l.attributes&&(l.attributes[T]=t,l.attributes[S]=!!i),l},K={id:"panel-common",title:"通用",forms:[{text:"功能",type:"forms",forms:[u("监听路由改变","bili-listenRouterChange",!0,void 0,"用于处理页面跳转时功能不生效问题"),u("新标签页打开","bili-go-to-url-blank",!1,void 0,"通过开启【覆盖点击事件】相关的设置，通过新标签页打开链接")]},{text:"变量设置",type:"forms",forms:[u("isLogin","bili-setLogin",!0,void 0,"设置isLogin为true"),u("isClient","bili-setIsClient",!0,void 0,"设置isClient为true"),u("tinyApp","bili-setTinyApp",!0,void 0,"设置tinyApp为true")]},{text:"劫持/拦截",type:"forms",forms:[u("覆盖.launch-app-btn openApp","bili-overrideLaunchAppBtn_Vue_openApp",!0,void 0,"覆盖.launch-app-btn元素上的openApp函数，可阻止点击唤醒/下载App"),u("劫持setTimeout-autoOpenApp","bili-hookSetTimeout_autoOpenApp",!0,void 0,"阻止自动调用App")]}]},v={isVideo(){return window.location.pathname.startsWith("/video/")},isBangumi(){return window.location.pathname.startsWith("/bangumi/")},isSearch(){return window.location.pathname.startsWith("/search")},isLive(){return window.location.hostname==="live.bilibili.com"},isOpus(){return window.location.pathname.startsWith("/opus")},isTopicDetail(){return window.location.pathname.startsWith("/topic-detail")},isDynamic(){return window.location.pathname.startsWith("/dynamic")},isHead(){return window.location.pathname==="/"||window.location.pathname.startsWith("/channel")}},Y={id:"panel-video",title:"视频",isDefault(){return v.isVideo()},forms:[{text:"功能",type:"forms",forms:[u("修复视频底部区域高度","bili-video-repairVideoBottomAreaHeight",!0,void 0,"添加margin-top"),u("自动点击【继续在网页观看】","bili-video-autoClickContinueToWatchOnTheWebpage",!0,void 0,"可避免弹窗出现且自动点击后播放视频"),u("美化显示","bili-video-beautify",!0,void 0,"调整底部推荐视频卡片样式类似哔哩哔哩App"),u("手势返回关闭评论区","bili-video-gestureReturnToCloseCommentArea",!1,void 0,"当浏览器手势触发浏览器回退页面时，关闭评论区")]},{text:"变量设置",type:"forms",forms:[u("playBtnNoOpenApp","bili-video-setVideoPlayer",!0,void 0,"设置playBtnNoOpenApp为true,playBtnOpenApp为false,coverOpenApp为false")]},{text:"覆盖点击事件",type:"forms",forms:[u("相关视频","bili-video-cover-bottomRecommendVideo",!0,void 0,"点击下面的相关视频可正确跳转至该视频")]},{text:"劫持/拦截",type:"forms",forms:[u("阻止调用App","bili-video-hook-callApp",!0,void 0,"处理函数: PlayerAgent")]}]},Q={id:"panel-bangumi",title:"番剧",isDefault(){return v.isBangumi()},forms:[{text:"变量设置",type:"forms",forms:[u("pay","bili-bangumi-setPay",!0,void 0,"设置pay为1")]},{text:"覆盖点击事件",type:"forms",forms:[u("【选集】","bili-bangumi-cover-clicl-event-chooseEp",!0,void 0,"让【选集】的视频列表可点击跳转"),u("【其它】","bili-bangumi-cover-clicl-event-other",!0,void 0,"让【PV&其他】、【预告】、【主题曲】、【香境剧场】等的视频列表可点击跳转"),u("【更多推荐】","bili-bangumi-cover-clicl-event-recommend",!0,void 0,"让【更多推荐】的视频列表可点击跳转")]},{text:"劫持/拦截",type:"forms",forms:[u("阻止调用App","bili-bangumi-hook-callApp",!0,void 0,"")]}]},X={id:"panel-search",title:"搜索",isDefault(){return v.isSearch()},forms:[{text:"功能",type:"forms",forms:[u("修复点击UP主正确进入空间","bili-search-repair-enter-user-home",!0,void 0,"可以修复点击UP主进入个人空间但是是404问题")]}]},Z={id:"panel-live",title:"直播",isDefault(){return v.isLive()},forms:[{text:"屏蔽",type:"forms",forms:[u("【屏蔽】聊天室","bili-live-block-chatRoom",!1,void 0,"直接不显示底部的聊天室"),u("【屏蔽】xxx进入直播间","bili-live-block-brush-prompt",!1,void 0,"直接不显示底部的xxx进入直播间"),u("【屏蔽】控制面板","bili-live-block-control-panel",!1,void 0,"屏蔽底部的发个弹幕、送礼")]},{text:"劫持/拦截",type:"forms",forms:[u("阻止open-app-btn元素点击事件触发","bili-live-prevent-openAppBtn",!0,void 0,"开启后可不跳转至唤醒App页面")]}]},j={id:"panel-opus",title:"专栏",isDefault(){return v.isOpus()},forms:[{text:"覆盖点击事件",type:"forms",forms:[u("话题","bili-opus-cover-topicJump",!0,void 0,"点击话题正确跳转")]}]},tt={id:"panel-dynamic",title:"动态",isDefault(){return v.isDynamic()},forms:[{text:"覆盖点击事件",type:"forms",forms:[u("话题","bili-dynamic-cover-topicJump",!0,void 0,"点击话题正确跳转"),u("header用户","bili-dynamic-cover-header",!0,void 0,"点击内容上的发布本动态的用户正确跳转个人空间"),u("@用户","bili-dynamic-cover-atJump",!0,void 0,"点击@用户正确跳转个人空间"),u("引用","bili-dynamic-cover-referenceJump",!0,void 0,"点击引用的视频|用户正确跳转")]}]},et={id:"panel-topic-detail",title:"话题",isDefault(){return v.isTopicDetail()},forms:[]},it={id:"panel-head",title:"首页",forms:[{text:"功能",type:"forms",forms:[u("美化显示","bili-head-beautify",!0,void 0,"调整瀑布流视频卡片样式类似哔哩哔哩App"),u("补充推荐视频信息","bili-head-supplementaryVideoStreamingInformation",!0,void 0,"给视频添加UP主名，当前视频总时长信息")]}]},s={$data:{data:new a.Dictionary,oneSuccessExecMenu:new a.Dictionary,onceExec:new a.Dictionary,scriptName:E,key:A,attributeKeyName:T,attributeDefaultValueName:S},$listener:{listenData:new a.Dictionary},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},initExtensionsMenu(){b.top===b.self&&O.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPanel();}}]);},initPanelDefaultValue(){let e=this;function t(n){if(!n.attributes)return;let o=n.attributes[T],l=n.attributes[S];if(o==null){r.warn(["请先配置键",n]);return}e.$data.data.has(o)&&r.warn("请检查该key(已存在): "+o),e.$data.data.set(o,l);}let i=this.getPanelContentConfig();for(let n=0;n<i.length;n++){let o=i[n];if(!o.forms)continue;let l=o.forms;for(let p=0;p<l.length;p++){let h=l[p];if(h.forms){let y=h.forms;for(let w=0;w<y.length;w++)t(y[w]);}else t(h);}}},setValue(e,t){let i=$(A,{}),n=i[e];i[e]=t,_(A,i),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,n,t);},getValue(e,t){let n=$(A,{})[e];return n??(this.$data.data.has(e)?this.$data.data.get(e):t)},deleteValue(e){let t=$(A,{}),i=t[e];Reflect.deleteProperty(t,e),_(A,t),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,i,void 0);},addValueChangeListener(e,t){let i=Math.random();return this.$listener.listenData.set(e,{id:i,key:e,callback:t}),i},removeValueChangeListener(e){let t=null;for(const[i,n]of this.$listener.listenData.entries())if(n.id===e){t=i;break}this.$listener.listenData.delete(t);},hasKey(e){let t=$(A,{});return e in t},execMenu(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){r.warn(`${e} 键不存在`);return}let i=s.getValue(e);i&&t(i);},execMenuOnce(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){r.warn(`${e} 键不存在`);return}let i=s.getValue(e);if(i){if(this.$data.oneSuccessExecMenu.has(e))return;t(i),this.$data.oneSuccessExecMenu.set(e,1);}},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(t(),this.$data.onceExec.set(e,1));},showPanel(){q.panel({title:{text:`${E}-设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:this.isMobile(),width:this.getWidth(),height:this.getHeight(),drag:!0,only:!0});},isMobile(){return window.outerWidth<550},getWidth(){return window.outerWidth<550?"92dvw":"550px"},getHeight(){return window.outerHeight>450?"80dvh":"450px"},getPanelContentConfig(){return [K,it,Y,j,tt,Q,et,X,Z]}},nt=`/* 主页 */\r
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
`,c={getVue(e){return e==null?void 0:e.__vue__},waitVuePropToSet(e,t){t.forEach(i=>{typeof i.msg=="string"&&r.info(i.msg);function n(){let o=c.getVue(e);return o==null?!1:!!i.check(o)}a.waitVueByInterval(e,n,250,1e4).then(o=>{if(!o)return;let l=c.getVue(e);l!=null&&i.set(l);});});},goToUrl(e){let t=document.querySelector("#app");if(t==null){f.error("跳转Url: 获取根元素#app失败"),r.error("跳转Url: 获取根元素#app失败："+e);return}let i=c.getVue(t);if(i==null){r.error("获取#app的vue属性失败"),f.error("获取#app的vue属性失败");return}let n=i.$router,o=s.getValue("bili-go-to-url-blank");r.info("即将跳转URL："+e),o?window.open(e,"_blank"):e.startsWith("http")||e.startsWith("//")?window.location.href=e:n.push(e);},parseDuration(e){if(typeof e!="number"&&(e=parseInt(e)),isNaN(e))return e.toString();function t(i){return i<10?`0${i}`:i}return e<60?`0:${t(e)}`:e>=60&&e<3600?`${Math.floor(e/60)}:${t(e%60)}`:`${Math.floor(e/3600)}:${t(Math.floor(e/60)%60)}:${t(e%60)}`},hookGestureReturnByVueRouter(e){function t(){r.success("触发popstate事件"),n(!0);}function i(){r.success("监听地址改变"),e.vueObj.$router.history.push(e.hash),m.on(window,"popstate",t);}async function n(o=!1){if(m.off(window,"popstate",t),!e.callback(o))for(;;)if(e.vueObj.$router.history.current.hash===e.hash)r.info("后退！"),e.vueObj.$router.back(),await a.sleep(250);else return}return i(),{resumeBack:n}}},N={$isHook:{windowPlayerAgent:!1,hookWebpackJsonp_openApp:!1,overRideLaunchAppBtn_Vue_openApp:!1},$data:{setTimeout:[]},windowWebPack(e="webpackJsonp",t,i){let n;B.Object.defineProperty(b,e,{get(){return n},set(o){r.success("成功劫持webpack，当前webpack名："+e),n=o;const l=n.push;n.push=function(...p){let h=p[0][0];return (t==h||Array.isArray(t)&&Array.isArray(h)&&JSON.stringify(t)===JSON.stringify(h))&&Object.keys(p[0][1]).forEach(y=>{let w=p[0][1][y];p[0][1][y]=function(...g){let k=w.call(this,...g);return g[0]=i(g[0]),k};}),l.call(this,...p)};}});},windowPlayerAgent(){if(this.$isHook.windowPlayerAgent)return;this.$isHook.windowPlayerAgent=!0;let e;B.Object.defineProperty(b,"PlayerAgent",{get(){return new Proxy({},{get(t,i){return i==="openApp"?function(...n){let o=n[0];if(r.info(["调用PlayerAgent.openApp",o]),o.event==="fullScreen"){let l=document.querySelector(".mplayer-btn-widescreen");l?l.click():r.warn("主动再次点击全屏按钮失败，原因：未获取到.mplayer-btn-widescreen元素");}}:e[i]}})},set(t){e=t;}});},setTimeout(e){if(this.$data.setTimeout.push(e),this.$data.setTimeout.length>1){r.info("window.setTimeout hook新增劫持判断参数："+e);return}b.setTimeout=function(...t){let i=t[0].toString();if(i.match(e)){r.success(["劫持setTimeout的函数",i]);return}return B.setTimeout.apply(this,t)};},overRideLaunchAppBtn_Vue_openApp(){if(this.$isHook.overRideLaunchAppBtn_Vue_openApp)return;this.$isHook.overRideLaunchAppBtn_Vue_openApp=!0;function e(t){typeof t.openApp!="function"||t.openApp.toString().includes("阻止唤醒App")||(t.openApp=function(...n){r.success(["openApp：阻止唤醒App",n]);});}a.mutationObserver(document,{config:{subtree:!0,childList:!0,attributes:!0},callback(){document.querySelectorAll(".launch-app-btn").forEach(t=>{let i=c.getVue(t);i&&(e(i),i.$children&&i.$children.length&&i.$children.forEach(n=>{e(n);}));});}});}},rt={init(){s.execMenuOnce("bili-video-hook-callApp",()=>{r.info("hook window.PlayerAgent"),N.windowPlayerAgent();});}},D={getUserSpaceUrl(e){return `https://space.bilibili.com/${e}`},getUserSpaceDynamicUrl(e){return this.getUserSpaceUrl(e)+"/dynamic"},getVideoUrl(e){return `https://www.bilibili.com/video/${e}`}},d={className:{bangumi:"#app.main-container",dynamic:"#app .m-dynamic",opus:"#app .m-opus",search:"#app .m-search","topic-detail":"#app .topic-detail",video:"#app .video",head:"#app .m-head"}},ot=`#app .video {\r
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
\r
				/* 开启了bili-video-beautify */\r
				.gm-right-container {\r
					display: flex;\r
					flex-direction: column;\r
					width: calc(100% - var(--left-card-width));\r
					> * {\r
						padding: var(--right-child-padding);\r
					}\r
					.left {\r
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
					.num{\r
						margin-right: 4vmin;\r
					}\r
				}\r
			}\r
		}\r
	}\r
}\r
`,at={$data:{isAddBeautifyCSS:!1},init(){rt.init(),s.execMenu("bili-video-setVideoPlayer",()=>{this.setVideoPlayer();}),s.execMenuOnce("bili-video-repairVideoBottomAreaHeight",()=>{this.repairVideoBottomAreaHeight();}),s.execMenuOnce("bili-video-autoClickContinueToWatchOnTheWebpage",()=>{this.autoClickContinueToWatchOnTheWebpage();}),s.execMenu("bili-video-beautify",()=>{this.beautify();}),s.execMenuOnce("bili-video-cover-bottomRecommendVideo",()=>{this.coverBottomRecommendVideo();}),s.execMenuOnce("bili-video-gestureReturnToCloseCommentArea",()=>{this.gestureReturnToCloseCommentArea();});},beautify(){r.info("美化"),this.$data.isAddBeautifyCSS||(this.$data.isAddBeautifyCSS=!0,C(ot)),a.waitNode(d.className.video+" .bottom-tab .list-view .card-box",1e4).then(e=>{if(!e){r.error("$cardBox is null");return}let t=new a.LockFunction(()=>{document.querySelectorAll(d.className.video+" .bottom-tab .list-view .card-box .v-card-toapp").forEach(i=>{var p,h;let n=i.querySelector(".title"),o=i.querySelector(".count .left"),l=c.getVue(i);if(n&&o&&!i.querySelector(".gm-right-container")){let y=document.createElement("div"),w=(h=(p=l==null?void 0:l.info)==null?void 0:p.owner)==null?void 0:h.name;y.className="gm-up-name",y.innerHTML=`
								<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
									<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
									</path>
								</svg>
								<span class="gm-up-name-text">${w}</span>
								`;let g=document.createElement("div"),k=document.createElement("div");g.className="gm-right-container",k.className="gm-right-bottom",m.after(n,g),g.appendChild(n),g.appendChild(k),k.appendChild(y),k.appendChild(o);}});},25);a.mutationObserver(document.querySelector(d.className.video),{config:{subtree:!0,childList:!0},callback(){setTimeout(()=>{t.run();},0);}});});},setVideoPlayer(){a.waitNode(d.className.video+" .m-video-player").then(e=>{c.waitVuePropToSet(e,[{msg:"设置参数 playBtnNoOpenApp",check(t){return typeof t.playBtnNoOpenApp=="boolean"},set(t){t.playBtnNoOpenApp=!0,r.success("成功设置参数 playBtnNoOpenApp=true");}},{msg:"设置参数 playBtnOpenApp",check(t){return typeof t.playBtnOpenApp=="boolean"},set(t){t.playBtnOpenApp=!1,r.success("成功设置参数 playBtnOpenApp=false");}},{msg:"设置参数 coverOpenApp",check(t){return typeof t.coverOpenApp=="boolean"},set(t){t.coverOpenApp=!1,r.success("成功设置参数 coverOpenApp=false");}}]);});},repairVideoBottomAreaHeight(){r.info("修复视频底部区域高度"),C(`
		${d.className.video} {
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
			${d.className.video}{
				.m-video-info-new{
					margin-top: 72vmin;
				}
			}
		}
		`);},autoClickContinueToWatchOnTheWebpage(){m.on(document,"click",d.className.video+" .main-info .btn",function(){r.info("触发点击【立即播放】，自动等待弹窗出现"),a.waitNode(".to-see",1e4).then(e=>{if(!e){r.error("弹窗按钮【继续在网页观看】10秒内未出现，取消等待");return}r.success("自动点击 继续在网页观看"),e.click();});});},coverBottomRecommendVideo(){r.info("覆盖 相关视频 点击事件"),m.on(document,"click",d.className.video+" .list-view .card-box .launch-app-btn",function(e){let t=e.target,i=c.getVue(t);if(!i){f.error("获取相关视频的__vue__失败");return}let n=i.bvid;if(a.isNull(n))if(i.$children&&i.$children[0]&&a.isNotNull(i.$children[0].bvid))n=i.$children[0].bvid;else {f.error("获取相关视频的bvid失败");return}r.info("相关视频的bvid: "+n),c.goToUrl(D.getVideoUrl(n)),a.preventEvent(e);},{capture:!0});},gestureReturnToCloseCommentArea(){r.info("手势返回关闭评论区，全局监听document点击.sub-reply-preview"),a.waitNode("#app").then(e=>{a.waitVueByInterval(e,()=>{var i,n;let t=c.getVue(e);return t==null?!1:typeof((n=(i=t==null?void 0:t.$router)==null?void 0:i.options)==null?void 0:n.scrollBehavior)!=null},250,1e4).then(t=>{let i=c.getVue(e);if(!i){r.error("获取#app的vue属性失败");return}let n=i.$router.options.scrollBehavior;i.$router.options.scrollBehavior=function(o,l,p){return o.hash==="#/seeCommentReply"?(r.info("当前操作为打开评论区，scrollBehavior返回null"),null):o.hash===""&&l.hash==="#/seeCommentReply"?(r.info("当前操作为关闭评论区，scrollBehavior返回null"),null):n.call(this,...arguments)};});}),m.on(document,"click",".sub-reply-preview",function(e){let t=document.querySelector("#app"),i=c.getVue(t);if(!i){r.error("获取#app元素失败");return}let n=c.hookGestureReturnByVueRouter({vueObj:i,hash:"#/seeCommentReply",callback(o){if(!o)return !1;let l=document.querySelector(".dialog-close-icon");return l?l.click():r.error("评论区关闭失败，原因：元素dialog-close-icon获取失败"),!0}});a.waitNode(".dialog-close-icon").then(o=>{m.on(o,"click",function(){n.resumeBack(!1);},{capture:!0,once:!0});});});}},x={getUrl(e){if(e!=null)return e.getAttribute("universallink")},jumpToUrl(e){let i=e.target.querySelector("bili-open-app");if(i){let n=x.getUrl(i);n?c.goToUrl(n):(f.error("获取bili-open-app的Url失败"),r.error("获取bili-open-app的Url失败"));}else f.error("未获取到<bili-open-app>元素"),r.error("未获取到<bili-open-app>元素");}},lt={init(){s.execMenuOnce("bili-bangumi-hook-callApp",()=>{this.hookCallApp();}),s.execMenu("bili-bangumi-setPay",()=>{this.setPay();}),s.execMenu("bili-bangumi-cover-clicl-event-chooseEp",()=>{this.setChooseEpClickEvent();}),s.execMenu("bili-bangumi-cover-clicl-event-other",()=>{this.setClickOtherVideo();}),s.execMenu("bili-bangumi-cover-clicl-event-recommend",()=>{this.setRecommendClickEvent();});},hookCallApp(){let e=b.setTimeout;b.setTimeout=function(...t){if(t[0].toString().includes("autoOpenApp")){r.success(["阻止唤醒App",t]);return}return e.apply(this,t)};},setPay(){a.waitNode("#app").then(e=>{c.waitVuePropToSet(e,[{msg:"设置参数 $store.state.userStat.pay",check(t){var i,n,o;return typeof typeof((o=(n=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:n.userStat)==null?void 0:o.pay)=="number"},set(t){r.success("成功设置参数 $store.state.userStat.pay=1"),t.$store.state.userStat.pay=1;}},{msg:"设置参数 $store.state.mediaInfo.user_status.pay",check(t){var i,n,o,l;return typeof((l=(o=(n=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:n.mediaInfo)==null?void 0:o.user_status)==null?void 0:l.pay)=="number"},set(t){r.success("成功设置参数 $store.state.mediaInfo.user_status.pay=1"),t.$store.state.mediaInfo.user_status.pay=1;}}]);});},setChooseEpClickEvent(){a.waitNode(d.className.bangumi+" .ep-list-pre-wrapper ul.ep-list-pre-container").then(e=>{r.info("覆盖【选集】的点击事件"),m.on(e,"click","li.episode-item",function(t){a.preventEvent(t),x.jumpToUrl(t);},{capture:!0});}),a.waitNode(d.className.bangumi+" .ep-list-pre-wrapper ul.season-list-wrapper").then(e=>{r.info("覆盖【xx季】的点击事件"),m.on(e,"click","li",function(t){a.preventEvent(t),x.jumpToUrl(t);},{capture:!0});}),a.waitNode(d.className.bangumi+" .ep-list-pre-header").then(e=>{r.info("覆盖【选集】右上角的【全xx话】Arrow的点击事件"),m.on(e,"click",function(t){a.preventEvent(t);},{capture:!0});});},setClickOtherVideo(){a.waitNode(d.className.bangumi+" .section-preview-wrapper ul.ep-list-pre-container").then(e=>{r.info("覆盖【PV&其他】、【预告】、【主题曲】的点击事件"),m.on(e,"click","li.section-preview-item",function(t){a.preventEvent(t),x.jumpToUrl(t);},{capture:!0});}),a.waitNode(d.className.bangumi+" .section-preview-header").then(e=>{r.info("覆盖【PV&其他】、【预告】、【主题曲】右上角的Arrow的点击事件"),m.on(e,"click",function(t){a.preventEvent(t);},{capture:!0});});},setRecommendClickEvent(){a.waitNode(d.className.bangumi+" .recom-wrapper ul.recom-list").then(e=>{r.info("覆盖【更多推荐】番剧的点击事件"),m.on(e,"click","li.recom-item-v2",function(t){a.preventEvent(t),x.jumpToUrl(t);},{capture:!0});});}},st={init(){s.execMenuOnce("bili-search-repair-enter-user-home",()=>{this.repairEnterUserHome();});},repairEnterUserHome(){a.waitNode(d.className.search+" .result-panel").then(e=>{r.info("修复点击UP主正确进入空间"),m.on(e,"click","a.m-search-user-item[href]",function(t){a.preventEvent(t);let n=t.target.href;r.success("链接跳转: "+n),window.location.href=n;},{capture:!0});});}},ct={init(){s.execMenuOnce("bili-live-prevent-openAppBtn",()=>{this.preventOpenAppBtn();}),s.execMenuOnce("bili-live-block-chatRoom",()=>{this.blockChatRoom();}),s.execMenuOnce("bili-live-block-brush-prompt",()=>{this.blockBrushPrompt();}),s.execMenuOnce("bili-live-block-control-panel",()=>{this.blockControlPanel();});},preventOpenAppBtn(){a.waitNode("body").then(e=>{r.info("阻止.open-app-btn元素触发点击事件"),m.on(e,"click",".open-app-btn",function(t){a.preventEvent(t);},{capture:!0}),m.on(e,"click","#web-player-controller-wrap-el",function(t){a.preventEvent(t);},{capture:!0});});},blockChatRoom(){r.info("屏蔽聊天室"),C(`
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
        }`);}},ut={init(){s.execMenuOnce("bili-opus-cover-topicJump",()=>{this.coverTopicJump();});},coverTopicJump(){r.info("覆盖话题跳转点击事件"),m.on(document,"click",d.className.opus+" .launch-app-btn.opus-module-topic",function(e){var l;let t=e.target,i=c.getVue(t);if(!i){f.error("获取话题的__vue__失败");return}let n=(l=i==null?void 0:i.$props)==null?void 0:l.data,o=n==null?void 0:n.jump_url;if(a.isNull(o)){f.error("获取话题的jump_url失败");return}r.info(["话题的跳转信息: ",n]),c.goToUrl(o);},{capture:!0});}},pt={init(){s.execMenuOnce("bili-dynamic-cover-topicJump",()=>{this.coverTopicJump();}),s.execMenuOnce("bili-dynamic-cover-atJump",()=>{this.coverAtJump();}),s.execMenuOnce("bili-dynamic-cover-referenceJump",()=>{this.coverReferenceJump();}),s.execMenuOnce("bili-dynamic-cover-header",()=>{this.coverHeaderJump();});},coverHeaderJump(){r.info("覆盖header点击事件"),m.on(document,"click",d.className.dynamic+" .launch-app-btn .dyn-header",function(e){a.preventEvent(e);let t=e.target,i=c.getVue(t);if(!i){f.error("获取vue属性失败");return}let n=i.url;if(!n){f.error("获取url失败");return}c.goToUrl(n);},{capture:!0});},coverTopicJump(){r.info("覆盖话题跳转点击事件"),m.on(document,"click",d.className.dynamic+" .launch-app-btn .bili-dyn-topic",function(e){var l;a.preventEvent(e);let t=e.target,i=c.getVue(t);if(!i){f.error("获取vue属性失败");return}let n=(l=i==null?void 0:i.$props)==null?void 0:l.data,o=n==null?void 0:n.jump_url;if(a.isNull(o)){f.error("获取jump_url失败");return}r.info(["话题的跳转信息: ",n]),c.goToUrl(o);},{capture:!0});},coverAtJump(){r.info("覆盖@ 跳转"),m.on(document,"click",d.className.dynamic+" .at",function(e){var n,o;a.preventEvent(e);let t=e.target,i=t.getAttribute("data-oid")||((o=(n=c.getVue(t))==null?void 0:n.$props)==null?void 0:o.rid);if(a.isNull(i)){f.error("获取data-oid或rid失败");return}r.info("用户的oid: "+i),c.goToUrl(D.getUserSpaceDynamicUrl(i));},{capture:!0});},coverReferenceJump(){r.info("覆盖引用的点击事件"),m.on(document,"click",d.className.dynamic+" .dyn-content .reference .dyn-orig-author",function(e){a.preventEvent(e);let i=e.target.getAttribute("data-url");if(!i){f.error("获取data-url失败");return}c.goToUrl(i);},{capture:!0}),m.on(document,"click",d.className.dynamic+" .dyn-content .reference .dyn-archive",function(e){var o;a.preventEvent(e);let t=e.target,i=c.getVue(t);if(!i){f.error("获取vue属性失败");return}let n=(o=i==null?void 0:i.data)==null?void 0:o.jump_url;if(a.isNull(n)){f.error("获取jump_url失败");return}c.goToUrl(n);},{capture:!0});}},dt={init(){s.execMenuOnce("bili-head-supplementaryVideoStreamingInformation",()=>{this.addVideoListUPInfo();});},addVideoListUPInfo(){r.info("添加视频列表UP主信息"),C(`
        ${d.className.head}{
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
        `),a.waitNode(d.className.head+" .video-list .card-box").then(()=>{let e=new a.LockFunction(()=>{document.querySelectorAll(d.className.head+" .video-list .card-box .v-card").forEach(t=>{var l,p,h,y,w;let i=c.getVue(t),n=((p=(l=i==null?void 0:i.info)==null?void 0:l.author)==null?void 0:p.name)||((y=(h=i==null?void 0:i.info)==null?void 0:h.owner)==null?void 0:y.name),o=(w=i==null?void 0:i.info)==null?void 0:w.duration;if(n&&!t.querySelector(".gm-up-info")){let g=document.createElement("div");g.innerHTML=`
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
                                    </div>`,g.className="gm-up-info",t.appendChild(g);}if(o){let g=t.querySelector(".count");if(g&&!g.querySelector(".gm-video-duration")){let k=typeof o=="string"?o:c.parseDuration(o),M=document.createElement("span");M.className="gm-video-duration",M.innerHTML=k,g.appendChild(M);}}});},25);a.mutationObserver(document.body,{config:{subtree:!0,childList:!0,attributes:!0},callback(){e.run();}});});}},I={init(){s.execMenu("bili-setLogin",()=>{this.setLogin();}),s.execMenu("bili-setIsClient",()=>{this.setIsClient();}),s.execMenu("bili-setTinyApp",()=>{this.setTinyApp();}),s.execMenuOnce("bili-listenRouterChange",()=>{this.listenRouterChange();}),s.execMenuOnce("bili-hookSetTimeout_autoOpenApp",()=>{r.info("hook  window.setTimeout autoOpenApp"),N.setTimeout("autoOpenApp");}),s.execMenuOnce("bili-overrideLaunchAppBtn_Vue_openApp",()=>{r.info("覆盖元素.launch-app-btn上的openApp"),N.overRideLaunchAppBtn_Vue_openApp();}),s.execMenuOnce("bili-head-beautify",()=>{r.info("添加美化CSS"),C(nt);}),v.isVideo()?(r.info("Router: 视频稿件"),at.init()):v.isOpus()?(r.info("Router: 专栏稿件"),ut.init()):v.isDynamic()?(r.info("Router: 动态"),pt.init()):v.isBangumi()?(r.info("Router: 番剧"),lt.init()):v.isSearch()?(r.info("Router: 搜索"),st.init()):v.isLive()?(r.info("Router: 直播"),ct.init()):v.isTopicDetail()?r.info("Router: 话题"):v.isHead()?(r.info("Router: 首页之类的"),dt.init()):r.error("该Router暂未适配，可能是首页之类："+window.location.href);},setLogin(){let e=new a.GM_Cookie,t=e.get("DedeUserID");t!=null?r.info(["Cookie DedeUserID已存在：",t.value]):e.set({name:"DedeUserID",value:"2333"},i=>{i?r.error(i):r.success("Cookie成功设置DedeUserID=>2333");}),a.waitNode("#app").then(i=>{c.waitVuePropToSet(i,[{msg:"设置参数 $store.state.common.noCallApp",check(n){var o,l,p;return typeof((p=(l=(o=n==null?void 0:n.$store)==null?void 0:o.state)==null?void 0:l.common)==null?void 0:p.noCallApp)=="boolean"},set(n){r.success("成功设置参数 $store.state.common.noCallApp=true"),n.$store.state.common.noCallApp=!0;}},{msg:"设置参数 $store.state.common.userInfo.isLogin",check(n){var o,l,p,h;return typeof((h=(p=(l=(o=n==null?void 0:n.$store)==null?void 0:o.state)==null?void 0:l.common)==null?void 0:p.userInfo)==null?void 0:h.isLogin)=="boolean"},set(n){r.success("成功设置参数 $store.state.common.userInfo.isLogin=true"),n.$store.state.common.userInfo.isLogin=!0;}},{msg:"设置参数 $store.state.loginInfo.isLogin",check(n){var o,l,p;return typeof((p=(l=(o=n==null?void 0:n.$store)==null?void 0:o.state)==null?void 0:l.loginInfo)==null?void 0:p.isLogin)=="boolean"},set(n){r.success("成功设置参数 $store.state.loginInfo.isLogin=true"),n.$store.state.loginInfo.isLogin=!0;}}]);});},setIsClient(){a.waitNode("#app").then(e=>{c.waitVuePropToSet(e,[{msg:"设置参数 $store.state.video.isClient",check(t){var i,n,o;return typeof typeof((o=(n=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:n.video)==null?void 0:o.isClient)=="boolean"},set(t){r.success("成功设置参数 $store.state.video.isClient=true"),t.$store.state.video.isClient=!0;}},{msg:"设置参数 $store.state.opus.isClient=true",check(t){var i,n,o;return typeof((o=(n=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:n.opus)==null?void 0:o.isClient)=="boolean"},set(t){r.success("成功设置参数 $store.state.opus.isClient"),t.$store.state.opus.isClient=!0;}},{msg:"设置参数 $store.state.playlist.isClient",check(t){var i,n,o;return typeof((o=(n=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:n.playlist)==null?void 0:o.isClient)=="boolean"},set(t){r.success("成功设置参数 $store.state.playlist.isClient=true"),t.$store.state.playlist.isClient=!0;}},{msg:"设置参数 $store.state.ver.bili",check(t){var i,n,o;return typeof((o=(n=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:n.ver)==null?void 0:o.bili)=="boolean"},set(t){r.success("成功设置参数 $store.state.ver.bili=true"),t.$store.state.ver.bili=!0;}},{msg:"设置参数 $store.state.ver.biliVer",check(t){var i,n,o;return typeof((o=(n=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:n.ver)==null?void 0:o.biliVer)=="number"},set(t){r.success("成功设置参数 $store.state.ver.biliVer=2333333"),t.$store.state.ver.biliVer=2333333;}}]);});},setTinyApp(){a.waitNode("#app").then(e=>{r.info("设置tinyApp"),c.waitVuePropToSet(e,[{msg:"设置参数 $store.state.common.tinyApp",check(t){var i,n,o;return typeof((o=(n=(i=t==null?void 0:t.$store)==null?void 0:i.state)==null?void 0:n.common)==null?void 0:o.tinyApp)=="boolean"},set(t){t.$store.state.common.tinyApp=!0,r.success("成功设置参数 $store.state.common.tinyApp=true"),setTimeout(()=>{document.querySelector("#bilibiliPlayer video")&&a.waitNode(".m-video-player").then(n=>{c.waitVuePropToSet(n,[{msg:"等待获取函数 initPlayer()",check(o){return typeof(o==null?void 0:o.initPlayer)=="function"},set(o){o.initPlayer(),r.success("成功调用函数 initPlayer()");}}]);});},2e3);}}]);});},listenRouterChange(){a.waitNode("#app").then(e=>{let t=function(i){var n;return typeof((n=i==null?void 0:i.$router)==null?void 0:n.afterEach)=="function"};a.waitVueByInterval(e,t).then(i=>{let n=c.getVue(e);n!=null&&t(n)&&(r.success("成功设置监听路由变化"),e.__vue__.$router.afterEach((o,l)=>{if(r.info(["路由变化",[o,l]]),o.hash==="#/seeCommentReply"||l.hash==="#/seeCommentReply"){r.info("该路由变化判定为#/seeCommentReply，不重载");return}I.init();}));});});}};s.init();I.init();

})(Qmsg, Utils, DOMUtils);