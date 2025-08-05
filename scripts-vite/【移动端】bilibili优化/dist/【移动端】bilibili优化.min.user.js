// ==UserScript==
// @name         【移动端】bilibili优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.8.5
// @author       WhiteSevs
// @description  阻止跳转App、App端推荐视频流、解锁视频画质(番剧解锁需配合其它插件)、美化显示、去广告等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAACjBJREFUeF7tnX+MHGUZx7/PbFsr3O3eNWBTaQu1RhNQEv7CBKNtQsBQTRDSJiYabNBaerP2bmcL8pcHiZH2du6u7Fx/SCmESGLQSP+QQk0aMAElMTGmsURQCQSLqcG7222ttb2dR8a700u7e/u+8850d2ae/Xee55nn+T6ffWd29p33Jcgn0wpQpquX4iEAZBwCAUAAyLgCGS9fRgABIOMKZLx8GQEEgIwrkPHyZQQQADKuQMbLlxFAAMi4Ahkvv+MjwJQ9MpyDtQ6gtT7xn5n9U/3eruE09qUba+0oALXi6DEw39Gk2Uct4l291fIbaQDhTLFyo880AuCuS+sh4GTecz7TqTo7BkDddv/AwE2tCg+EIeItSYcgaD4zPbdYrSD6ZaFaurMTEHQEgGAotGB9v13BSYdAqflzIvjwH+nEpa8jAEwX3SeI8a12AATHkwqBTvPn6nwm7zn3qWgSpU1HAKjboy8zeINqIUmDQLf5swDQK3mvtFFVk6jsOgKAzggwX2hSIAjT/MyNAKr3AM3umLv5xjBs84M6M3UPEBRcs90Xmv0saje0detIYNJ8AEcLnrOpXe1xHO/IJSAoxESwboMgybV0DIC0QJDk5s/de8QxsKjHTLKASc59wc21erPiskyikEnMuVn/OnoJWJhQkgRNUq7tvrRdA0BS7gnS1PyuuAe4lNBuFribc2v3TW91vKtGgPkku1HobswpbNMX+nUlAN12OUhr87vyEtBtN4Zpbv4VAWDadjdbwGYG1oOxAoQVAPJRDF8pjFEHYxKESYDfAvBMwSu/GGedsVwCzu4cv7nhN7YRcA8zVsVZQNpjM/AeAUdyudyhnr2DJ6KuN1IApgYq1xORbQE2A8ujTjbL8Qg47wMeM3v9E+V3o9IiMgBqtvt1ABUAK6NKTuI0VeA0QI8WvNK+KPSJBIBaccQGW9UoEpIYagoQ4XC+6tyvZt3ayhiAsP/rmyYu/v+dR3a8UHVuN9HCCICa7R4D0Gxev0lO4qungFfwnKKey/+tQwNQH3APMOE7YU8sftEpYDKdLBQAZ+zR7T54f3QlSCRTBSzQA71e6YBuHG0A/r5juGe51fv6om+66GYh9sYKBNPkzvtnPvexfcNndYJpAzBtV75HoB/qnGShbfBgwwL9Jax/mv2YeS0InwhbI4Mf7vPKj+n4awEwue2xgrVs6UkCrtM5CYDXCNiTW2L99urxob9p+mbKfGpwrC/n+zfCpx/ovDwTiMTAKTQufLZv/8NTqqJpAVArjmwCW79QDT6bFD/U55X36PiI7awCZ4rumM8Y1NGDgS19nvNTVR8tAOq2u5uBB1WD+8Tl/mrZVbUXu8sVCP5MI+A5VW0I9KO8V1L+daYFQG2g8kcQfVolGSYc6qs631axFZvFFajZbvCU1VbU6e2C56xXtFVfLJqHn1pe/2DyX6qBeam1vm9s6G1Ve7FrrcC5He6aCxbeIKBHRaf8NSs+SsNbz6vYKo8A/xwcWzUz47+vErSTrzop5pc4s7rt/oqBL6gkvmSJ9XHVm21lAOaWOTmpkgATtvdVnYMqtmKjpoDODaFFfJPqyirKANTtsdsY/qsq6frwN/Z7u15RsRUbNQWm7MrdFuh5FWuC9fm8N/Samq2KFYApe2SDBetlFXMBQEUlPZu49FceAeJKQE+G7FrHpb8AkBCmBICENCquNAWAuJRNSFwBICGNiitNASAuZRMSN9MAnCs+vnrG//caEE31XtU4RXseOtONfftH8fH8MlxY7fvce7GR++s1B0qnosozkwAEj58bDT7IzF9ZKKTJHLioGnJpnLrtlhkIFoRe8KHfUM7amt87+KbpeTMHwFTRvcVi/K6VcAw82ec5SsvNmorfzn/adg8R0HKOvj9jres/MPROuziLHc8UAO9vG77q6mU9JwBq87cmf6nglYOp6R371OzKnQC9tGgCjF/nr12zkYa3XAibaKYAmNrhftOy8FQ7sYjxdH7C2drOLs7jdXv0IIO3tTsHgx/o88ras3bn42YKAOW1hBnvFCacde3Ej/N4zXb/BOCTCuf4ccFzvqFg19QkUwDorCZe8Bzlx9lhxV/Mr2a7rBLXdDVwAaCFygLA5cLo/Bur/O2Ji8BmfZUR4HJV4tJfAFAZvxexkUtAE3F0hiAZAdQIlBFA7gFimZEllwC1L2BLK7kEyCVAfgZeyoDcA1z+rZDnABpDrfwMlJ+ByvsKyoOgFD4Imrbd3aT0FjL9vuCVbtEYXCI3rdmjrwN8a/vAvK/glQfa2zW3yNTPwGnbvZeAn7UTyyKM91adoXZ2cR6vD4xWmNhpew72v1aY2PWTtnYtDDIFQKBB3XafZ+DuxQS7OEOro5x2FaY5Su9MMp4tTDjBSqqhP5kDYO5t5GBOQKtt1Yc/vP4/ElrRCB3b7IR6LJfL3dezd/C0ySkzB8C8WHV79H6Av8zABoDeJMarZPmHVd9+NRFdx/eD7aPXfWQpl32mDQCvBXCMQMfzXulJnTitbDMLQBTipSGGAJCGLhrUIAAYiJcGVwEgDV00qEEAMBAvDa4CQBq6aFCDAGAgXhpcBYA0dNGgBgHAQLw0uAoAaeiiQQ0CgIF4aXAVANLQRYMaBAAD8dLg2nEAdJaKBWNTYcI5mgbhu6UGHQBiWSpWaeLD/9TiUsErj3WLeGnIo1Z0vwvGXpVaYlksWme5+A/3FHoi7zltF01QKUZsZhXQmSkdy3LxOhtGENGJRo6+2D8+NC0NNFegPuB+ignKC03FsmFEUIbOljEE+nneK91rXr5EmLYr+wm0XVGJeLaMmR2GNDeNAn+13ysfUUxczJooUCuO2mBW3pk93k2jQmwb5/vY2r/PeVq6q6/AtF15kEC7dTxj3TYu7MaRwWpePuHoxXMzL117uDtX+dQROU7bszvHV/qNxq1z2/PdpnOu2DeODJIx3To2eElSp6gs2TLzDSDcELbm2LeODRKTzaPDtidevyu2eXRQhmwfH28zw0S/YtvHzydXH3APMEF5i9IwRYmPmgImi2crLxHTLJWa7Qbr9N6hlqZYxaSAV/CcYtjYRgAEJ63Z7gsA7gqbgPgZKEA4Xqg6txtEUN87eLGT1IojNthSflhhkrD4zipAhMP5qtNyiXpVnYxHgPkT1Ww3eP25AmCl6snFLpQCpwF6tOCV9oXyvsQpMgCCuFMDleuJyLYAm4HlUSQoMea+8cB5H/CY2eufKL8blS6RAjCf1Nmd4zc3/MY2Au5hxqqoks1iHAbeI+BILpc71LN38ETUGsQCwMIkp213swVsZmA9GCtAWAEgH3UhKYlXB2MShEmA3wLwTMErvxhnbbEDEGfyEttcAQHAXMNERxAAEt0+8+QFAHMNEx1BAEh0+8yTFwDMNUx0BAEg0e0zT14AMNcw0REEgES3zzx5AcBcw0RHEAAS3T7z5AUAcw0THUEASHT7zJMXAMw1THQEASDR7TNPXgAw1zDREf4DSPKG2yZqlokAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://m.bilibili.com/*
// @match        *://live.bilibili.com/*
// @match        *://www.bilibili.com/read/*
// @match        *://www.bilibili.com/h5/comment/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/QRCode/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.7.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.5.11/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.2.9/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.4.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.js
// @require      https://fastly.jsdelivr.net/npm/md5@2.3.0/dist/md5.min.js
// @require      https://fastly.jsdelivr.net/npm/flv.js@1.6.2/dist/flv.js
// @require      https://fastly.jsdelivr.net/npm/artplayer@5.2.3/dist/artplayer.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/ArtPlayer@aca6fb3795ea03b9614cd32613e2588e60470524/packages/artplayer-plugin-danmuku/dist/artplayer-plugin-danmuku.js
// @resource     ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.css
// @connect      *
// @connect      m.bilibili.com
// @connect      www.bilibili.com
// @connect      api.bilibili.com
// @connect      app.bilibili.com
// @connect      passport.bilibili.com
// @connect      hdslb.com
// @connect      aisubtitle.hdslb.com
// @grant        GM_addStyle
// @grant        GM_deleteValue
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(a=>{function e(n){if(typeof n!="string")throw new TypeError("cssText must be a string");let p=document.createElement("style");return p.setAttribute("type","text/css"),p.innerHTML=n,document.head?document.head.appendChild(p):document.body?document.body.appendChild(p):document.documentElement.childNodes.length===0?document.documentElement.appendChild(p):document.documentElement.insertBefore(p,document.documentElement.childNodes[0]),p}if(typeof GM_addStyle=="function"){GM_addStyle(a);return}e(a)})(' @charset "UTF-8";.m-video2-awaken-btn,.openapp-dialog{display:none!important}.m-head .launch-app-btn.m-nav-openapp,.m-head .launch-app-btn.home-float-openapp,.m-head m-open-app{display:none!important}.m-home .launch-app-btn.home-float-openapp{display:none!important}.m-space .launch-app-btn.m-space-float-openapp,.m-space .launch-app-btn.m-nav-openapp,.m-space m-open-app:has(>.m-fixed-openapp){display:none!important}#app .video .launch-app-btn.m-video-main-launchapp:has([class^=m-video2-awaken]),#app .video .launch-app-btn.m-nav-openapp,#app .video .mplayer-widescreen-callapp,#app .video .launch-app-btn.m-float-openapp,#app .video .m-video-season-panel .launch-app-btn .open-app{display:none!important}#app.LIVE .open-app-btn.bili-btn-warp{display:none!important}#app .m-dynamic .launch-app-btn.m-nav-openapp,#app .m-dynamic .dynamic-float-openapp.dynamic-float-btn,#app .m-dynamic m-open-app:has(>.m-fixed-openapp){display:none!important}#app .m-opus .float-openapp.opus-float-btn,#app .m-opus .v-switcher .launch-app-btn.list-more,#app .m-opus .opus-nav .launch-app-btn.m-nav-openapp,#app .m-opus .m-navbar .m-nav-openapp,#app .m-opus m-open-app.m-open-app.fixed-openapp{display:none!important}#app .topic-detail .launch-app-btn.m-nav-openapp,#app .topic-detail .launch-app-btn.m-topic-float-openapp{display:none!important}#app.main-container bili-open-app.btn-download{display:none!important}#__next m-open-app[class^=TopBar_download],#__next m-open-app:has([class^=GoApp]){display:none!important}#__next m-open-app[class^=MainButton_btnWrap]{visibility:hidden!important}#app .read-app-main bili-open-app{display:none!important}#app .playlist>.open-app-wp{display:none!important}#app .playlist>.open-app-wp+div{padding-top:56.25%}html{--bili-color: #fb7299;--bili-color-rgb: 251, 114, 153} ');

(function (w, Le, pe, Ke, Dt, at, kt, lr, Ze) {
	'use strict';

	const ur=`@charset "UTF-8";\r
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
`,j={isVideo(){return window.location.pathname.startsWith("/video/")},isBangumi(){return window.location.pathname.startsWith("/bangumi/")},isSearch(){return window.location.pathname.startsWith("/search")},isSearchResult(){let e=new URLSearchParams(window.location.search);return this.isSearch()&&e.has("keyword")},isLive(){return window.location.hostname==="live.bilibili.com"},isOpus(){return window.location.pathname.startsWith("/opus")},isTopicDetail(){return window.location.pathname.startsWith("/topic-detail")},isDynamic(){return window.location.pathname.startsWith("/dynamic")},isHead(){return window.location.pathname==="/"||window.location.pathname.startsWith("/channel")},isSpace(){return window.location.pathname.startsWith("/space")},isPlayList(){return window.location.pathname.startsWith("/playlist")}},sr={isPC(){return window.location.hostname==="www.bilibili.com"},isReadMobile(){return this.isPC()&&window.location.pathname.startsWith("/read/mobile")}};var Ft=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,ut=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,Ne=typeof GM_getValue<"u"?GM_getValue:void 0,Me=typeof GM_info<"u"?GM_info:void 0,cr=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,Ve=typeof GM_setValue<"u"?GM_setValue:void 0,pr=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,dr=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,K=typeof unsafeWindow<"u"?unsafeWindow:void 0,_t=window;const $t="GM_Panel",St="data-init",we="data-key",Ae="data-default-value",mr="data-init-more-value",H="data-storage-api",De={setting:{get width(){return window.innerWidth<550?"88vw":window.innerWidth<700?"550px":"700px"},get height(){return window.innerHeight<450?"70vh":window.innerHeight<550?"450px":"550px"}},info:{get width(){return window.innerWidth<350?"88vw":"350px"},get height(){return window.innerHeight<250?"88vh":"250px"}}};class hr{storageKey;listenerData;constructor(t){if(typeof t=="string"){let r=t.trim();if(r=="")throw new Error("key参数不能为空字符串");this.storageKey=r;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new pe.Dictionary;}getLocalValue(){let t=Ne(this.storageKey);return t==null&&(t={},this.setLocalValue(t)),t}setLocalValue(t){Ve(this.storageKey,t);}set(t,r){let n=this.get(t),i=this.getLocalValue();Reflect.set(i,t,r),this.setLocalValue(i),this.triggerValueChangeListener(t,n,r);}get(t,r){let n=this.getLocalValue();return Reflect.get(n,t)??r}getAll(){return this.getLocalValue()}delete(t){let r=this.get(t),n=this.getLocalValue();Reflect.deleteProperty(n,t),this.setLocalValue(n),this.triggerValueChangeListener(t,r,void 0);}has(t){let r=this.getLocalValue();return Reflect.has(r,t)}keys(){let t=this.getLocalValue();return Reflect.ownKeys(t)}values(){let t=this.getLocalValue();return Reflect.ownKeys(t).map(r=>Reflect.get(t,r))}clear(){Ft(this.storageKey);}addValueChangeListener(t,r){let n=Math.random(),i=this.listenerData.get(t)||[];return i.push({id:n,key:t,callback:r}),this.listenerData.set(t,i),n}removeValueChangeListener(t){let r=false;for(const[n,i]of this.listenerData.entries()){for(let a=0;a<i.length;a++){const o=i[a];(typeof t=="string"&&o.key===t||typeof t=="number"&&o.id===t)&&(i.splice(a,1),a--,r=true);}this.listenerData.set(n,i);}return r}triggerValueChangeListener(t,r,n){if(!this.listenerData.has(t))return;let i=this.listenerData.get(t);for(let a=0;a<i.length;a++){const o=i[a];if(typeof o.callback=="function"){let l=this.get(t),s,c;typeof r<"u"&&arguments.length>=2?c=r:c=l,typeof n<"u"&&arguments.length>2?s=n:s=l,o.callback(t,c,s);}}}}const he=new hr($t),Je={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new d.Dictionary),this.__contentConfig}},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]},getDefaultBottomContentConfig(){return [{id:"script-version",title:`版本：${Me?.script?.version||"未知"}`,isBottom:true,forms:[],clickFirstCallback(e,t,r){let n=Me?.script?.supportURL||Me?.script?.namespace;return typeof n=="string"&&d.isNotNull(n)&&window.open(n,"_blank"),false}}]}},Tt={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{f.showPanel(Je.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){f.isTopWindow()&&gr.add(this.$data.menuOption);},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e);},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(t=>{let r=this.$data.menuOption.findIndex(n=>n.key===t.key);r!==-1&&(this.$data.menuOption[r]=t);});},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1);}},f={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__onceExecData:null,__panelConfig:{},$panel:null,get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new d.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new d.Dictionary),this.__onceExecMenuData},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new d.Dictionary),this.__onceExecData},get scriptName(){return st},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e;},key:$t,attributeKeyName:we,attributeDefaultValueName:Ae},init(){this.initContentDefaultValue(),Tt.init();},isTopWindow(){return K.top===K.self},initContentDefaultValue(){const e=n=>{if(!n.attributes||n.type==="button"||n.type==="forms"||n.type==="deepMenu")return;let i=new Map,a=n.attributes[we];if(a!=null){const s=n.attributes[Ae];i.set(a,s);}let o=n.attributes[mr];if(typeof o=="object"&&o&&Object.keys(o).forEach(s=>{i.set(s,o[s]);}),!i.size){u.warn(["请先配置键",n]);return}let l=n.attributes[St];if(typeof l=="function"){let s=l();if(typeof s=="boolean"&&!s)return}if(n.type==="switch"){let s=typeof n.disabled=="function"?n.disabled():n.disabled;typeof s=="boolean"&&s&&this.$data.contentConfigInitDisabledKeys.push(...i.keys());}for(const[s,c]of i.entries())this.setDefaultValue(s,c);},t=n=>{for(let i=0;i<n.length;i++){let a=n[i];e(a);let o=a.forms;o&&Array.isArray(o)&&t(o);}},r=[...Je.getAllContentConfig()];for(let n=0;n<r.length;n++){let i=r[n];if(!i.forms)continue;const a=i.forms;a&&Array.isArray(a)&&t(a);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&u.warn("请检查该key(已存在): "+e),this.$data.contentConfigInitDefaultValue.set(e,t);},setValue(e,t){he.set(e,t);},getValue(e,t){let r=he.get(e);return r??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){he.delete(e);},hasKey(e){return he.has(e)},addValueChangeListener(e,t){return he.addValueChangeListener(e,(n,i,a)=>{t(e,a,i);})},removeValueChangeListener(e){he.removeValueChangeListener(e);},triggerMenuValueChange(e,t,r){he.triggerValueChangeListener(e,r,t);},deleteExecMenuOnce(e){return this.$data.onceExecMenuData.delete(e),he.removeValueChangeListener(e)},deleteOnceExec(e){this.$data.onceExecData.delete(e);},exec(e,t,r,n=true){const i=this;let a;typeof e=="string"||Array.isArray(e)?a=()=>e:a=e;let o=false,l=a(),s=[];Array.isArray(l)?(o=true,s=l):s.push(l);let c=s.find(D=>!this.$data.contentConfigInitDefaultValue.has(D));if(c){u.warn(`${c} 键不存在`);return}let p=JSON.stringify(s);if(n){if(this.$data.onceExecMenuData.has(p))return;this.$data.onceExecMenuData.set(p,1);}let h=[],y=[],C=(D,N)=>{let X=[];Array.isArray(N)||(N=[N]),N.forEach(J=>{if(J!=null&&J instanceof HTMLStyleElement){X.push(J);return}}),h=h.concat(X);},$=D=>this.getValue(D),L=()=>{for(let D=0;D<h.length;D++)h[D].remove(),h.splice(D,1),D--;},I=()=>{let D=false;return typeof r=="function"?D=r(s):D=s.every(N=>$(N)),D},k=D=>{let N=I(),X=[];if(N){let J=s.map(oe=>this.getValue(oe)),ee=t({value:o?J:J[0],addStyleElement:(...oe)=>C(true,...oe)});Array.isArray(ee)||(ee=[ee]),ee.forEach(oe=>{if(oe!=null&&oe instanceof HTMLStyleElement){X.push(oe);return}});}L(),h=[...X];};return n&&s.forEach(D=>{let N=this.addValueChangeListener(D,(X,J,ee)=>{k();});y.push(N);}),k(),{clear(){this.clearStoreStyleElements(),this.removeValueChangeListener(),n&&i.$data.onceExecMenuData.delete(p);},clearStoreStyleElements:()=>L(),removeValueChangeListener:()=>{y.forEach(D=>{this.removeValueChangeListener(D);});}}},execMenu(e,t,r=false,n=false){return this.exec(e,i=>t(i),i=>i.every(o=>{let l=!!this.getValue(o);return f.$data.contentConfigInitDisabledKeys.includes(o)&&(l=false,u.warn(`.execMenu${n?"Once":""} ${o} 被禁用`)),r&&(l=!l),l}),n)},execMenuOnce(e,t,r=false){return this.execMenu(e,t,r,true)},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(e)||(t(),this.$data.onceExecData.set(e,1));},showPanel(e,t=`${st}-设置`,r=false){let n=e.findIndex(a=>(typeof a.isBottom=="function"?a.isBottom():!!a.isBottom)&&a.id==="script-version")!==-1;!r&&!n&&e.push(...Je.getDefaultBottomContentConfig());let i=W.panel({title:{text:t,position:"center",html:false,style:""},content:e,btn:{close:{enable:true,callback:(a,o)=>{a.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(a,o)=>{a(),this.$data.$panel=null;}},width:De.setting.width,height:De.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=i;}},xe={waitRemove(...e){e.forEach(t=>{typeof t=="string"&&d.waitNodeList(t).then(r=>{r.forEach(n=>n.remove());});});},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(r=>{Array.isArray(r)?t=t.concat(r):t.push(r);}),R(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){let t=typeof ut=="function"?ut(e.keyName):null;typeof t=="string"&&t?R(t):xe.loadStyleLink(e.url);},async loadStyleLink(e){let t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=e,Le.ready(()=>{document.head.appendChild(t);});},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(r=>{t.onload=()=>{r(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.match(/^http(s|):\/\//i)?e:e.startsWith("//")?(e.startsWith("///")||(e=window.location.protocol+e),e):(e.startsWith("/")||(e+="/"),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;let t=new URL(e);return t.protocol="https:",t.toString()},lockScroll(...e){let t=document.createElement("style");t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let r=[document.documentElement,document.body].concat(...e||[]);return r.forEach(n=>{n.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(t),{recovery(){r.forEach(n=>{n.classList.remove("pops-overflow-hidden-important");}),t.remove();}}},async getClipboardText(){function e(n){navigator.clipboard.readText().then(i=>{n(i);}).catch(i=>{u.error("读取剪贴板内容失败👉",i),n("");});}function t(n){navigator.permissions.query({name:"clipboard-read"}).then(i=>{e(n);}).catch(i=>{u.error("申请剪贴板权限失败，尝试直接读取👉",i.message??i.name??i.stack),e(n);});}function r(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(n=>{if(!r()){n("");return}document.hasFocus()?t(n):window.addEventListener("focus",()=>{t(n);},{once:true});})},escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(e,t,r=5e3){let n,i=r-t,a=t,o=async l=>{let s=await e(l);if(typeof s=="boolean"&&!s||l){d.workerClearTimeout(n);return}if(a+=t,a>i){o(true);return}n=d.workerSetTimeout(()=>{o(false);},t);};o(false);}},fr={Viewer:{keyName:"ViewerCSS",url:"https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"}},Se={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},d=pe.noConflict(),m=Le.noConflict(),W=Ke,u=new d.Log(Me,K.console||_t.console);let st=Me?.script?.name||void 0;Ke.config.Utils.AnyTouch();const It=false;u.config({debug:It,logMaxCount:1e3,autoClearConsole:true,tag:true});w.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(e){const t=e.getSetting().type;if(t==="loading")return  false;const r=e.getSetting().content;return t==="warning"?u.warn(r):t==="error"?u.error(r):u.info(r),true},get position(){return f.getValue(Se.qmsg_config_position.key,Se.qmsg_config_position.defaultValue)},get maxNums(){return f.getValue(Se.qmsg_config_maxnums.key,Se.qmsg_config_maxnums.defaultValue)},get showReverse(){return f.getValue(Se.qmsg_config_showreverse.key,Se.qmsg_config_showreverse.defaultValue)},get zIndex(){let e=pe.getMaxZIndex(),t=Ke.config.InstanceUtils.getPopsMaxZIndex().zIndex;return pe.getMaxValue(e,t)+100}});W.GlobalConfig.setGlobalConfig({zIndex:()=>{let e=pe.getMaxZIndex(void 0,void 0,r=>{if(r?.classList?.contains("qmsg-shadow-container")||r?.closest("qmsg")&&r.getRootNode()instanceof ShadowRoot)return  false}),t=Ke.config.InstanceUtils.getPopsMaxZIndex().zIndex;return pe.getMaxValue(e,t)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const gr=new d.GM_Menu({GM_getValue:Ne,GM_setValue:Ve,GM_registerMenuCommand:cr,GM_unregisterMenuCommand:pr}),q=new d.Httpx({xmlHttpRequest:dr,logDetails:It});q.interceptors.request.use(e=>e);q.interceptors.response.use(void 0,e=>(u.error("拦截器-请求错误",e),e.type==="onabort"?w.warning("请求取消",{consoleLogContent:true}):e.type==="onerror"?w.error("请求异常",{consoleLogContent:true}):e.type==="ontimeout"?w.error("请求超时",{consoleLogContent:true}):w.error("其它错误",{consoleLogContent:true}),e));const ct={Object:{defineProperty:K.Object.defineProperty},Function:{apply:K.Function.prototype.apply,call:K.Function.prototype.call},Element:{appendChild:K.Element.prototype.appendChild},setTimeout:K.setTimeout},R=d.addStyle.bind(d),Q=Le.selector.bind(Le),le=Le.selectorAll.bind(Le),Lt=new d.GM_Cookie,pt=_t.QRCode||K.QRCode,_={getVue(e){if(e!=null)return e.__vue__||e.__Ivue__||e.__IVue__},getVue3(e){if(e!=null)return e.__vueParentComponent},waitVuePropToSet(e,t){Array.isArray(t)||(t=[t]);function r(){let n=null;return typeof e=="string"?n=m.selector(e):typeof e=="function"?n=e():e instanceof HTMLElement&&(n=e),n}t.forEach(n=>{typeof n.msg=="string"&&u.info(n.msg);function i(){let a=r();if(a==null)return {status:false,isTimeout:true,inst:null,$el:a};let o=_.getVue(a);if(o==null)return {status:false,isTimeout:false,inst:null,$el:a};let l=n.check(o,a);return l=!!l,{status:l,isTimeout:false,inst:o,$el:a}}d.waitVueByInterval(()=>r(),()=>i().status,250,1e4).then(a=>{let o=i();if(o.status){let l=o.inst;n.set(l,o.$el);}else typeof n.failWait=="function"&&n.failWait(o.isTimeout);});});},watchVuePropChange(e,t,r,n,i){let a=d.assign({immediate:true,deep:false},n||{});return new Promise(o=>{_.waitVuePropToSet(e,{check(l){return typeof l?.$watch=="function"},set(l){let s=null;typeof t=="function"?s=l.$watch(()=>t(l),(c,p)=>{r(l,c,p);},a):s=l.$watch(t,(c,p)=>{r(l,c,p);},a),o(s);},failWait:i});})},goToUrl(e,t,r=false){if(e==null){w.error("跳转Url: $vueNode为空"),u.error("跳转Url: $vueNode为空："+t);return}let n=_.getVue(e);if(n==null){w.error("获取vue属性失败",{consoleLogContent:true});return}let i=n.$router,a=true;if(u.info("即将跳转URL："+t),r&&(a=false),a)window.open(t,"_blank");else {if(t.startsWith("http")||t.startsWith("//")){t.startsWith("//")&&(t=window.location.protocol+t);let o=new URL(t);if(o.origin===window.location.origin)t=o.pathname+o.search+o.hash;else {u.info("不同域名，直接本页打开，不用Router："+t),window.location.href=t;return}}u.info("$router push跳转Url："+t),i.push(t);}},hookGestureReturnByVueRouter(e){function t(){u.success("触发popstate事件"),n(true);}function r(){u.success("监听地址改变"),e.vueInst.$router.history.push(e.hash),m.on(K,"popstate",t);}async function n(i=false){if(m.off(K,"popstate",t),!e.callback(i))for(;;)if(e.vueInst.$router.history.current.hash===e.hash)u.info("后退！"),e.vueInst.$router.back(),await d.sleep(250);else return}return r(),{resumeBack:n}}},M={goToUrl(e,t=false){let r=f.getValue("bili-go-to-url-blank");if(u.info("即将跳转URL："+e),t&&(r=false),r)window.open(e,"_blank");else {if(e.startsWith("http")||e.startsWith("//")){e.startsWith("//")&&(e=window.location.protocol+e);let o=new URL(e);if(o.origin===window.location.origin)e=o.pathname+o.search+o.hash;else {u.info("不同域名，直接本页打开，不用Router："+e),window.location.href=e;return}}u.info("$router push跳转Url："+e);let n=Q("#app");if(n==null){if(!t){window.location.href=e;return}w.error("跳转Url: 获取根元素#app失败"),u.error("跳转Url: 获取根元素#app失败："+e);return}let i=_.getVue(n);if(i==null){if(!t){window.location.href=e;return}u.error("获取#app的vue属性失败"),w.error("获取#app的vue属性失败");return}i.$router.push(e);}},goToLogin(e=""){window.open(`https://passport.bilibili.com/h5-app/passport/login?gourl=${encodeURIComponent(e)}`);},parseDuration(e){if(typeof e!="number"&&(e=parseInt(e)),isNaN(e))return e.toString();function t(r){return r<10?`0${r}`:r}return e<60?`0:${t(e)}`:e>=60&&e<3600?`${Math.floor(e/60)}:${t(e%60)}`:`${Math.floor(e/3600)}:${t(Math.floor(e/60)%60)}:${t(e%60)}`},parseCount(e){let t=e.toString();if(e>1e4){let r=(e/1e4).toFixed(2).slice(0,-1);r.endsWith(".0")&&(r=r.slice(0,-2)),t=`${r}万`;}else if(e>1e4*1e4){let r=(e/1e8).toFixed(2).slice(0,-1);r.endsWith(".0")&&(r=r.slice(0,-2)),t=`${r}亿`;}return t},hookGestureReturnByVueRouter(e){function t(){u.success("触发popstate事件"),n(true);}function r(){u.success("监听地址改变"),e.vueObj.$router.history.push(e.hash),m.on(window,"popstate",t);}async function n(i=false){if(m.off(window,"popstate",t),!e.callback(i))for(;;)if(e.vueObj.$router.history.current.hash===e.hash)u.info("后退！"),e.vueObj.$router.back(),await d.sleep(250);else return}return r(),{resumeBack:n}},initialScale(){u.info("设置<meta>的viewport固定缩放倍率为1并移除页面原有的<meta>"),m.ready(()=>{let e=m.createElement("meta",{},{name:"viewport",content:"width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover"});m.remove("meta[name='viewport']"),d.waitNode("head").then(()=>{document.head.appendChild(e);});});}},Ce={getUserSpaceUrl(e){return `https://m.bilibili.com/space/${e}`},getUserSpaceDynamicUrl(e){return `https://m.bilibili.com/dynamic/${e}`},getUserSpaceOpusUrl(e){return `https://m.bilibili.com/opus/${e}`},getVideoUrl(e){return `https://m.bilibili.com/video/${e}`}},v={className:{bangumi:"#app.main-container",bangumi_new:"body > #__next",dynamic:"#app .m-dynamic",opus:"#app .m-opus",video:"#app .video",mVideo:"#app .m-video",head:"#app .m-head",playlist:"#app .playlist",space:"#app .m-space"},theme:"#FB7299"},dt={className:{read:{mobile:"#app .read-app-main"}}},Vt=`.artplayer-container {\r
	position: absolute;\r
	width: 100%;\r
	height: 100%;\r
	top: 0;\r
	left: 0;\r
	overflow: hidden;\r
}`,ot=`/* 设置播放器基础宽高 */\r
#artplayer {\r
	width: 100%;\r
	height: 100%;\r
}\r
/* 通用隐藏class */\r
.art-video-player .art-common-hide {\r
	display: none !important;\r
}\r
/* 设置播放器基础宽高 */\r
.art-video-player {\r
	width: 100% !important;\r
}\r
/* 播放时隐藏进度条 */\r
.art-hide-cursor .art-progress {\r
	display: none !important;\r
}\r
/* 不知道为什么背景模糊了 */\r
.art-video-player.art-backdrop .art-settings {\r
	backdrop-filter: unset !important;\r
}\r
/* 底部的设置菜单当前选中的提示文字设置文字溢出省略号 */\r
.art-settings .art-setting-item .art-setting-item-right-tooltip {\r
	max-width: 100px;\r
	text-overflow: ellipsis;\r
	white-space: nowrap;\r
	overflow: hidden;\r
}\r
\r
/* 竖屏 宽度小于400px */\r
@media (orientation: portrait) and (max-width: 400px) {\r
	/* 修正小屏下宽度溢出 */\r
	.art-controls .art-control {\r
		max-width: 60px;\r
		white-space: pre-wrap;\r
	}\r
}\r
\r
/* 竖屏 宽度小于550px */\r
@media (orientation: portrait) and (max-width: 550px) {\r
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
.art-lock .art-layer-top-wrap {\r
	/* 启用了锁定功能，隐藏底部控制栏，所以这个也同步 */\r
	display: none !important;\r
}\r
.art-layer-top-wrap {\r
	--layer-top-wrap-follow-text-font-size: 0.8em;\r
	--layer-top-wrap-follow-icon-size: 1em;\r
	width: 100%;\r
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
	background: linear-gradient(to bottom, #000, transparent);\r
	padding: 10px calc(var(--art-padding));\r
	z-index: 60;\r
}\r
.art-player-top-wrap {\r
	width: 100%;\r
}\r
.art-player-top-wrap .art-player-top-title-text {\r
	white-space: nowrap;\r
	text-overflow: ellipsis;\r
	overflow: hidden;\r
	max-width: 100%;\r
}\r
/* 面板隐藏时，顶部toolbar也隐藏 */\r
.art-hide-cursor .art-layer-top-wrap {\r
	transform: translateY(-60px);\r
}\r
/*.art-layer-top-wrap .art-player-top-wrap {\r
}\r
.art-layer-top-wrap .art-player-top-title-text {\r
}*/\r
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
\r
/* 插件-锁定 */\r
.art-video-player .art-layers .art-layer.art-layer-lock {\r
	/* 放在右边 */\r
	right: 0;\r
	left: calc(100% - 20px - var(--art-lock-size) - var(--art-lock-left-size));\r
}\r
/* 插件-锁定 */\r
`,Xe={mergeAidOrBvidSearchParamsData(e,t){if("aid"in t&&t.aid!=null)Reflect.set(e,"aid",t.aid);else if("bvid"in t&&t.bvid!=null)Reflect.set(e,"bvid",t.bvid);else throw new TypeError("avid or bvid must give one")}},ze={web_host:"api.bilibili.com"},ue={isWebApiSuccess(e){return e?.code===0&&(e?.message==="0"||e?.message==="success")},isAreaLimit(e){let t={6002003:"抱歉您所在地区不可观看！"},r=false;return Object.keys(t).forEach(n=>{let i=t[n];(e.code.toString()===n.toString()||e.message.includes(i))&&(r=true);}),r}},tt={"240P 极速":6,"360P 流畅":16,"480P 清晰":32,"720P 高清":64,"720P60 高帧率":74,"1080P 高清":80,"1080P+ 高码率":112,"1080P60 高帧率":116,"4K 超清":120,"HDR 真彩色":125,杜比视界:126,"8K 超高清":127},br={};Object.keys(tt).forEach(e=>{let t=Reflect.get(tt,e);Reflect.set(br,t,e);});const Ye={async nav(e=true){let t=await q.get("https://api.bilibili.com/x/web-interface/nav?web_location=333.401",{fetch:true,responseType:"json",allowInterceptConfig:false});if(!t.status){u.error(t),w.error("获取导航栏用户信息失败，请求异常",{consoleLogContent:true});return}let r=d.toJSON(t.data.responseText);if(e&&!ue.isWebApiSuccess(r)){u.error(["获取导航栏用户信息失败：",r]),w.error("获取导航栏用户信息失败",{consoleLogContent:true});return}return r.data},async space(e,t=""){let r=await q.get("https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/space",{data:{host_mid:e,offset:t},fetch:true});if(!r.status)return;let n=d.toJSON(r.data.responseText);if(ue.isWebApiSuccess(n))return n.data},async following(e,t=1,r=50){let n=await q.get("https://api.bilibili.com/x/relation/followings",{data:{vmid:e,ps:r,pn:t},fetch:true});if(!n.status)return;let i=d.toJSON(n.data.responseText);return ue.isWebApiSuccess(i)?i.data:i.message}},Mt={$data:{isLogin:new Promise(()=>false)},$flag:{isSetQueryLoginStatus:false,isQueryLoginStatus:false},init(){this.setLoginStatus();},setLoginStatus(){if(this.$flag.isSetQueryLoginStatus)return;this.$flag.isSetQueryLoginStatus=true;let e=false;this.$data.isLogin=new Promise(async t=>{if(!this.$flag.isQueryLoginStatus){this.$flag.isQueryLoginStatus=true;let r=await Ye.nav(false);r&&r.isLogin&&(e=true);}t(e);});}},rt={async playUrl(e,t){let r={cid:e.cid,qn:e.qn??tt["1080P60 高帧率"],high_quality:e.high_quality??1,fnval:e.fnval??1,fnver:e.fnver??0,fourk:e.fourk??1,try_look:await Mt.$data.isLogin?0:1,platform:e.setPlatformHTML5?"html5":"pc"};Xe.mergeAidOrBvidSearchParamsData(r,e),typeof t=="object"&&t!==null&&Object.assign(r,t);let n=await q.get("https://api.bilibili.com/x/player/playurl?"+d.toSearchParamsStr(r),{responseType:"json",fetch:true});if(!n.status)return;let i=d.toJSON(n.data.responseText);if(i.code===0)return i.data},async onlineTotal(e){let t={cid:e.cid};Xe.mergeAidOrBvidSearchParamsData(t,e);let r=await q.get(`https://${ze.web_host}/x/player/online/total?${d.toSearchParamsStr(t)}`,{responseType:"json",fetch:true});if(!r.status)return;let n=d.toJSON(r.data.responseText);return ue.isWebApiSuccess(n)||u.error(`获取在线观看人数失败: ${JSON.stringify(n)}`),n.data},async like(e){let t={like:e.like,csrf:Lt.get("bili_jct")?.value||""};Xe.mergeAidOrBvidSearchParamsData(t,e);let r=await q.get("https://api.bilibili.com/x/web-interface/archive/like?"+d.toSearchParamsStr(t),{fetch:true});if(!r.status)return  false;let n=d.toJSON(r.data.responseText);const i=n.code;return i===0?true:(i===-101?w.error("账号未登录"):i===-111?w.error("csrf校验失败"):i===-400?w.error("请求错误"):i===-403?w.error("账号异常"):i===10003?w.error("不存在该稿件"):i===65004?w.error("取消点赞失败"):i===65006?w.warning("重复点赞"):w.error("未知错误："+n.message),false)}},fe={ios:{appkey:"27eb53fc9058f8c3",appsec:"c2ed53a74eeefe3cf99fbd01d8c9c375",mobi_app:"ipnone"}};function mt(e,t,r){e.appkey=t;const n=new URLSearchParams(e);return n.sort(),Dt(n.toString()+r)}const ht={async getQrCodeInfo(){let e="https://passport.bilibili.com/x/passport-tv-login/qrcode/auth_code",t={appkey:fe.ios.appkey,local_id:"0",ts:"0",mobi_app:fe.ios.mobi_app,csrf:Lt.get("bili_jct")?.value||""},r=mt(t,fe.ios.appkey,fe.ios.appsec),n=await q.post(e,{data:d.toSearchParamsStr({...t,sign:r}),headers:{"Content-Type":"application/x-www-form-urlencoded"},responseType:"json",fetch:true});if(u.info(n),!n.status)return;let i=d.toJSON(n.data.responseText);if(i.code!==0){w.error(i.message);return}return i.data},async poll(e){let t="https://passport.bilibili.com/x/passport-tv-login/qrcode/poll",r={appkey:fe.ios.appkey,auth_code:e,local_id:"0",ts:"0"},n=mt(r,fe.ios.appkey,fe.ios.appsec),i=await q.post(t,{data:d.toSearchParamsStr({...r,sign:n}),headers:{"Content-Type":"application/x-www-form-urlencoded"},responseType:"json",fetch:true});if(!i.status)return {success:false,message:"网络错误",action:void 0};const a=d.toJSON(i.data.responseText);u.info(a);const o={0:"成功","-3":"API校验密匙错误","-400":"请求错误","-404":"啥都木有",86038:"二维码已失效",86039:"二维码尚未确认",86090:"二维码已扫码未确认"};if(!ue.isWebApiSuccess(a)){const c=a.code.toString(),p=a.message||o[c]||"未知错误";return c==="86038"?{success:false,message:p,action:"refresh"}:c==="86039"||c==="86090"?{success:false,message:p,action:"wait"}:{success:false,message:p,action:void 0}}const l=a.data.access_token,s=Date.now()+a.data.expires_in*1e3;return {success:true,message:"获取成功",accessKey:l,accessKeyExpireAt:s}}},ke={async init(){w.info("正在申请二维码...");let e=await this.getQRCodeInfo();e&&this.confirmScanQrcode(e);},getQRCodeInfo:async function(){u.info("正在申请二维码...");let e=await ht.getQrCodeInfo();return u.info("获取到二维码信息",e),e},async confirmScanQrcode(e){let t=W.alert({title:{text:"请扫描二维码登录",position:"center",html:false,style:""},content:{text:'<div id="bili-qrcode-canvas"></div>',html:true},btn:{ok:{enable:false},close:{enable:true,callback(a){i=true,a.close();}}},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},only:true,width:"310px",height:"365px",drag:true,dragLimit:true,style:`
            #bili-qrcode-canvas{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
            }
            `}),r=t.$shadowRoot.querySelector("#bili-qrcode-canvas"),n=new pt(r,{text:e.url,width:300,height:300,colorDark:"#000000",colorLight:"#ffffff",correctLevel:pt.CorrectLevel.H}),i=false;for(;;){if(i){u.error("用户关闭扫码登录弹窗、取消扫码登录");break}u.info("正在等待扫码登录...");let a=await ht.poll(e.auth_code);if(a?.success){this.setAccessTokenInfo({access_token:a.accessKey,expireAt:a.accessKeyExpireAt}),u.info("扫码登录成功",a),w.success("扫码登录成功");break}else if(a?.action==="refresh"){u.info("刷新二维码"),w.info("刷新二维码");let o=await this.getQRCodeInfo();o&&(n.clear(),n.makeCode(o.url));}else if(a.action==="wait")a.message==="二维码已扫码未确认"&&(u.info("已扫码，等待确认..."),W.loading({parent:r,content:{text:"已扫码，等待确认"},mask:{enable:true}}));else {u.error(a.message),w.error(a.message);break}await d.sleep(1500);}t.close();},generateExpireAt(e=6){return new Date().getTime()+1e3*60*60*24*30*e},setAccessTokenInfo(e){Ve("bili-accessTokenInfo",e);},getAccessTokenInfo(){let e=Ne("bili-accessTokenInfo");return e&&e.expireAt>Date.now()?e:null},getAccessToken(){return this.getAccessTokenInfo()?.access_token||""}},nt={getBangumiProxyHost(){let e=[{name:"中国大陆",area:"",host:f.getValue("bili-bangumi-proxyApiServer-default","").trim()||ze.web_host}];if(!f.getValue("bili-bangumi-unlockAreaLimit"))return e;let t=f.getValue("bili-bangumi-proxyApiServer-hk");d.isNotNull(t)&&e.push({name:"香港",area:"hk",host:t});let r=f.getValue("bili-bangumi-proxyApiServer-tw");d.isNotNull(r)&&e.push({name:"台湾",area:"tw",host:r});let n=f.getValue("bili-bangumi-proxyApiServer-tha-or-sea");return d.isNotNull(n)&&e.push({name:"泰国/东南亚",area:"th",host:n}),e},getSearchProxyHost(){let e=this.getBangumiProxyHost(),t=[],r=f.getValue("bili-search-proxyApiServer-hk");if(d.isNotNull(r))t.push({name:"香港",area:"hk",host:r});else {let a=e.find(o=>o.area==="hk");a&&t.push(a);}let n=f.getValue("bili-search-proxyApiServer-tw");if(d.isNotNull(n))t.push({name:"台湾",area:"tw",host:n});else {let a=e.find(o=>o.area==="tw");a&&t.push(a);}let i=f.getValue("bili-search-proxyApiServer-tha-or-sea");return d.isNotNull(i)?t.push({name:"泰国/东南亚",area:"th",host:i}):e.find(o=>o.area==="th")&&t.push,t},getBangumiProxySearchParam(e={}){return {from_client:"BROWSER",drm_tech_type:2,module:"bangumi",area:e?.area||"",access_key:ke.getAccessToken()}}},U={findBetterCDN(...e){let t=[];e.forEach(n=>{Array.isArray(n)?t=t.concat(n.filter(i=>typeof i=="string")):typeof n=="string"&&t.push(n);});let r=t.find(n=>{if(new URL(n).host.startsWith("upos"))return n});return r||t[0]},replaceVideoCDN(e,t=false){let r=t?f.getValue("bili-video-uposServerSelect-audio"):f.getValue("bili-video-uposServerSelect"),n=t?f.getValue("bili-video-uposServerSelect-audio-own"):f.getValue("bili-video-uposServerSelect-own");return n=(n??"").trim(),this.replaceVideoCDNHost(e,r,n)},replaceBangumiVideoCDN(e,t=false){let r=t?f.getValue("bili-bangumi-uposServerSelect-audio"):f.getValue("bili-bangumi-uposServerSelect"),n=t?f.getValue("bili-bangumi-uposServerSelect-audio-own"):f.getValue("bili-bangumi-uposServerSelect-own");return n=(n??"").trim(),this.replaceVideoCDNHost(e,r,n)},replaceVideoCDNHost(e,t,r){try{let n=new URL(e),i=n.host;if(d.isNotNull(r))return n.host=r,u.info(`原Host为：${i}，替换CDN为自定义：${r}`),n.toString();let a=this.getUposCDNServerList().find(l=>l.host===t);if(d.isNull(a)||d.isNull(a.host))return e;let o=a.host;return n.host=o,u.info(`原Host为：${i}，替换CDN为：${JSON.stringify(a)}`),n.toString()}catch(n){return u.error("视频upos替换失败",n),e}},getUposCDNServerList(){const e={上海:["cn-sh-ct-01-13.bilivideo.com","cn-sh-ct-01-24.bilivideo.com","cn-sh-ct-01-36.bilivideo.com","cn-sh-fx-01-04.bilivideo.com","cn-sh-office-bcache-01.bilivideo.com"],北京:["cn-bj-cc-03-14.bilivideo.com","cn-bj-cc-03-17.bilivideo.com","cn-bj-fx-01-01.bilivideo.com","cn-bj-fx-01-04.bilivideo.com","cn-bj-fx-01-05.bilivideo.com","cn-bj-se-01-05.bilivideo.com"],南京:["cn-jsnj-fx-02-05.bilivideo.com","cn-jsnj-fx-02-07.bilivideo.com","cn-jsnj-fx-02-10.bilivideo.com"],呼市:["cn-nmghhht-cm-01-11.bilivideo.com","cn-nmghhht-cu-01-01.bilivideo.com","cn-nmghhht-cu-01-08.bilivideo.com","cn-nmghhht-cu-01-09.bilivideo.com","cn-nmghhht-cu-01-12.bilivideo.com","cn-nmghhht-cu-01-15.bilivideo.com"],哈市:["cn-hljheb-cm-01-01.bilivideo.com","cn-hljheb-cm-01-03.bilivideo.com","cn-hljheb-ct-01-02.bilivideo.com","cn-hljheb-ct-01-03.bilivideo.com","cn-hljheb-ct-01-04.bilivideo.com","cn-hljheb-ct-01-07.bilivideo.com"],外建:["c0--cn-gotcha01.bilivideo.com","d0--cn-gotcha09.bilivideo.com","d1--cn-gotcha101.bilivideo.com","d1--cn-gotcha102.bilivideo.com","d1--cn-gotcha204-1.bilivideo.com","d1--cn-gotcha204-2.bilivideo.com","d1--cn-gotcha204-3.bilivideo.com","d1--cn-gotcha204-4.bilivideo.com","d1--cn-gotcha207.bilivideo.com","d1--cn-gotcha211.bilivideo.com","d1--cn-gotcha308.bilivideo.com","d1--ov-gotcha01.bilivideo.com","d1--ov-gotcha03.bilivideo.com","d1--ov-gotcha207.bilivideo.com","d1--ov-gotcha208.bilivideo.com","d1--ov-gotcha209.bilivideo.com","d1--ov-gotcha210.bilivideo.com","d1--p1--cn-gotcha04.bilivideo.com","d1--tf-gotcha04.bilivideo.com"],天津:["cn-tj-cm-02-01.bilivideo.com","cn-tj-cm-02-02.bilivideo.com","cn-tj-cm-02-04.bilivideo.com","cn-tj-cm-02-05.bilivideo.com","cn-tj-cm-02-06.bilivideo.com","cn-tj-cm-02-07.bilivideo.com","cn-tj-cu-01-02.bilivideo.com","cn-tj-cu-01-03.bilivideo.com","cn-tj-cu-01-04.bilivideo.com","cn-tj-cu-01-06.bilivideo.com","cn-tj-cu-01-07.bilivideo.com","cn-tj-cu-01-09.bilivideo.com","cn-tj-cu-01-10.bilivideo.com","cn-tj-cu-01-11.bilivideo.com","cn-tj-cu-01-12.bilivideo.com","cn-tj-cu-01-13.bilivideo.com"],广州:["cn-gdgz-cm-01-02.bilivideo.com","cn-gdgz-cm-01-10.bilivideo.com","cn-gdgz-fx-01-01.bilivideo.com","cn-gdgz-fx-01-02.bilivideo.com","cn-gdgz-fx-01-03.bilivideo.com","cn-gdgz-fx-01-04.bilivideo.com","cn-gdgz-fx-01-06.bilivideo.com","cn-gdgz-fx-01-08.bilivideo.com","cn-gdgz-fx-01-09.bilivideo.com","cn-gdgz-fx-01-10.bilivideo.com","cn-gdgz-gd-01-01.bilivideo.com"],成都:["cn-sccd-cm-03-01.bilivideo.com","cn-sccd-cm-03-02.bilivideo.com","cn-sccd-cm-03-05.bilivideo.com","cn-sccd-ct-01-02.bilivideo.com","cn-sccd-ct-01-08.bilivideo.com","cn-sccd-ct-01-10.bilivideo.com","cn-sccd-ct-01-17.bilivideo.com","cn-sccd-ct-01-18.bilivideo.com","cn-sccd-ct-01-19.bilivideo.com","cn-sccd-ct-01-20.bilivideo.com","cn-sccd-ct-01-21.bilivideo.com","cn-sccd-ct-01-22.bilivideo.com","cn-sccd-ct-01-23.bilivideo.com","cn-sccd-ct-01-24.bilivideo.com","cn-sccd-ct-01-25.bilivideo.com","cn-sccd-ct-01-26.bilivideo.com","cn-sccd-ct-01-27.bilivideo.com","cn-sccd-ct-01-29.bilivideo.com","cn-sccd-cu-01-02.bilivideo.com","cn-sccd-cu-01-03.bilivideo.com","cn-sccd-cu-01-04.bilivideo.com","cn-sccd-cu-01-05.bilivideo.com","cn-sccd-cu-01-06.bilivideo.com","cn-sccd-cu-01-07.bilivideo.com","cn-sccd-cu-01-09.bilivideo.com","cn-sccd-fx-01-01.bilivideo.com","cn-sccd-fx-01-06.bilivideo.com"],新疆:["cn-xj-cm-02-01.bilivideo.com","cn-xj-cm-02-04.bilivideo.com","cn-xj-cm-02-06.bilivideo.com","cn-xj-ct-01-01.bilivideo.com","cn-xj-ct-01-02.bilivideo.com","cn-xj-ct-01-03.bilivideo.com","cn-xj-ct-01-04.bilivideo.com","cn-xj-ct-01-05.bilivideo.com","cn-xj-ct-02-02.bilivideo.com"],杭州:["cn-zjhz-cm-01-01.bilivideo.com","cn-zjhz-cm-01-04.bilivideo.com","cn-zjhz-cm-01-07.bilivideo.com","cn-zjhz-cm-01-12.bilivideo.com","cn-zjhz-cm-01-17.bilivideo.com","cn-zjhz-cu-01-01.bilivideo.com","cn-zjhz-cu-01-02.bilivideo.com","cn-zjhz-cu-01-05.bilivideo.com","cn-zjhz-cu-v-02.bilivideo.com"],武汉:["cn-hbwh-cm-01-01.bilivideo.com","cn-hbwh-cm-01-02.bilivideo.com","cn-hbwh-cm-01-04.bilivideo.com","cn-hbwh-cm-01-05.bilivideo.com","cn-hbwh-cm-01-06.bilivideo.com","cn-hbwh-cm-01-08.bilivideo.com","cn-hbwh-cm-01-09.bilivideo.com","cn-hbwh-cm-01-10.bilivideo.com","cn-hbwh-cm-01-12.bilivideo.com","cn-hbwh-cm-01-17.bilivideo.com","cn-hbwh-cm-01-18.bilivideo.com","cn-hbwh-cm-01-19.bilivideo.com","cn-hbwh-fx-01-02.bilivideo.com","cn-hbwh-fx-01-12.bilivideo.com"],沈阳:["cn-lnsy-cm-01-01.bilivideo.com","cn-lnsy-cm-01-03.bilivideo.com","cn-lnsy-cm-01-04.bilivideo.com","cn-lnsy-cm-01-05.bilivideo.com","cn-lnsy-cm-01-06.bilivideo.com","cn-lnsy-cu-01-03.bilivideo.com","cn-lnsy-cu-01-04.bilivideo.com","cn-lnsy-cu-01-06.bilivideo.com"],泉州:["cn-fjqz-cm-01-01.bilivideo.com","cn-fjqz-cm-01-02.bilivideo.com","cn-fjqz-cm-01-03.bilivideo.com","cn-fjqz-cm-01-04.bilivideo.com","cn-fjqz-cm-01-05.bilivideo.com","cn-fjqz-cm-01-06.bilivideo.com","cn-fjqz-cm-01-08.bilivideo.com","cn-fjqz-cmcc-live-01.bilivideo.com"],深圳:["upos-sz-dynqn.bilivideo.com","upos-sz-estgcos.bilivideo.com","upos-sz-estghw.bilivideo.com","upos-sz-estgoss.bilivideo.com","upos-sz-estgoss02.bilivideo.com","upos-sz-mirror08c.bilivideo.com","upos-sz-mirror08ct.bilivideo.com","upos-sz-mirror08h.bilivideo.com","upos-sz-mirrorali.bilivideo.com","upos-sz-mirroralib.bilivideo.com","upos-sz-mirroralio1.bilivideo.com","upos-sz-mirrorali02.bilivideo.com","upos-sz-mirroralibstar1.bilivideo.com","upos-sz-mirroraliov.bilivideo.com","upos-sz-mirrorbd.bilivideo.com","upos-sz-mirrorcf1ov.bilivideo.com","upos-sz-mirrorcos.bilivideo.com","upos-sz-mirrorcosb.bilivideo.com","upos-sz-mirrorcoso1.bilivideo.com","upos-sz-mirrorcosdisp.bilivideo.com","upos-sz-mirrorctos.bilivideo.com","upos-sz-mirrorhw.bilivideo.com","upos-sz-mirrorhwb.bilivideo.com","upos-sz-mirrorhwo1.bilivideo.com","upos-sz-mirrorhwdisp.bilivideo.com","upos-sz-originbstar.bilivideo.com","upos-sz-origincosv.bilivideo.com"],西安:["cn-sxxa-cm-01-01.bilivideo.com","cn-sxxa-cm-01-02.bilivideo.com","cn-sxxa-cm-01-04.bilivideo.com","cn-sxxa-cm-01-09.bilivideo.com","cn-sxxa-cm-01-12.bilivideo.com","cn-sxxa-ct-03-02.bilivideo.com","cn-sxxa-ct-03-03.bilivideo.com","cn-sxxa-ct-03-04.bilivideo.com","cn-sxxa-cu-02-01.bilivideo.com","cn-sxxa-cu-02-02.bilivideo.com"],郑州:["cn-hnzz-cm-01-01.bilivideo.com","cn-hnzz-cm-01-02.bilivideo.com","cn-hnzz-cm-01-03.bilivideo.com","cn-hnzz-cm-01-04.bilivideo.com","cn-hnzz-cm-01-05.bilivideo.com","cn-hnzz-cm-01-06.bilivideo.com","cn-hnzz-cm-01-09.bilivideo.com","cn-hnzz-cm-01-11.bilivideo.com","cn-hnzz-fx-01-01.bilivideo.com","cn-hnzz-fx-01-08.bilivideo.com"],香港:["cn-hk-eq-01-03.bilivideo.com","cn-hk-eq-01-09.bilivideo.com","cn-hk-eq-01-10.bilivideo.com","cn-hk-eq-01-12.bilivideo.com","cn-hk-eq-01-13.bilivideo.com","cn-hk-eq-01-14.bilivideo.com","cn-hk-eq-bcache-13.bilivideo.com","cn-hk-eq-bcache-16.bilivideo.com"],海外:["upos-hz-mirrorakam.akamaized.net","upos-sz-mirroraliov.bilivideo.com","upos-sz-mirrorcosov.bilivideo.com","upos-sz-mirrorhwov.bilivideo.com","cn-hk-eq-bcache-01.bilivideo.com"],"海外（东南亚）":["upos-sz-mirroralibstar1.bilivideo.com","upos-sz-mirrorcosbstar1.bilivideo.com","upos-sz-mirrorhwbstar1.bilivideo.com","upos-bstar1-mirrorakam.akamaized.net"],其它:["upos-tf-all-hw.bilivideo.com","upos-tf-all-tx.bilivideo.com"]},t=[{name:"不替换",host:""}];return Object.keys(e).map(r=>{e[r].forEach(i=>{t.push({name:`${r} - ${i.trim().replace(/\.bilivideo\.com$/gi,"")}`,host:i});});}),t}},Rt={30216:"64K",30232:"132K",30280:"192K",30250:"杜比全景声",30251:"Hi-Res无损"};class zt{$data={KEY:"art-player-danmaku-option",localArtDanmakuOption:{}};constructor(t){this.$data.KEY=t;const r=this.getDefaultDanmakuOption();this.$data.localArtDanmakuOption=d.assign(r,Ne(this.$data.KEY,{}));}getDefaultDanmakuOption(){return {speed:5,margin:[10,"75%"],opacity:1,modes:[0,1,2],fontSize:18,antiOverlap:false,synchronousPlayback:true,visible:true}}getLocalArtDanmakuOption(){return this.$data.localArtDanmakuOption}onConfigChange(t){t.on("artplayerPluginDanmuku:config",r=>{Object.keys(this.$data.localArtDanmakuOption).forEach(n=>{if(Reflect.has(r,n)){let i=Reflect.get(r,n);Reflect.set(this.$data.localArtDanmakuOption,n,i);}}),Ve(this.$data.KEY,this.$data.localArtDanmakuOption);});}}const ge="[artplayer-plugin-m4sAudioSupport]：",He="setting-bilibili-m4sAudio",te={$flag:{isIntervaling:false},intervalHandler(e,t=2,r=900){if(te.$flag.isIntervaling)return;te.$flag.isIntervaling=true;let n=0,i,a=()=>{if(n>t){te.$flag.isIntervaling=false,clearInterval(i);return}if(typeof e=="function")try{e();}catch(o){console.error(ge,o);}n++;};a(),t>1?i=setInterval(a,r):te.$flag.isIntervaling=false;}},g={$key:{plugin_KEY:"plugin-bilibili-m4sAudio"},$data:{art:null,audio:new Audio,latestSyncTime:0,reconnectConfig:{maxCount:5,delayTime:1e3},reconnectInfo:{url:"",count:0},option:null},userEvent:{onRestart:void 0},events:{play:()=>{g.handler.play(),g.handler.syncVolume(),g.handler.syncMuted(),te.intervalHandler(()=>{g.handler.syncTime();},1);},seek:e=>{te.intervalHandler(()=>{g.handler.syncTime(),g.handler.syncPlayState();});},pause:()=>{te.intervalHandler(()=>{g.handler.syncTime();},1),g.handler.pause();},restart:e=>{if(typeof g.userEvent.onRestart=="function"){let t=g.userEvent.onRestart(e);g.handler.playUrl(t);}te.intervalHandler(()=>{g.handler.syncTime();},1),g.handler.syncPlayState();},muted:e=>{g.handler.syncVolume(),g.handler.syncMuted();},destroy:()=>{g.handler.pause();},error:(e,t)=>{g.handler.pause();},resize:()=>{te.intervalHandler(()=>{g.handler.syncTime();});},fullscreen:()=>{te.intervalHandler(()=>{g.handler.syncTime();});},"video:ended":()=>{g.handler.pause();},"video:ratechange":()=>{g.handler.syncPlayBackRate();},"video:waiting":()=>{g.handler.pause();},"video:playing":()=>{te.intervalHandler(()=>{g.handler.syncTime();},1),g.handler.play();},"video:pause":()=>{g.handler.pause(),te.intervalHandler(()=>{g.handler.syncTime();},1);},"video:volumechange":()=>{g.handler.syncVolume(),g.handler.syncMuted(),g.handler.syncPlayState();},"video:timeupdate":()=>{let e=g.$data.art.currentTime;Math.abs(e-g.$data.latestSyncTime)>=3&&(g.$data.latestSyncTime=e,te.intervalHandler(()=>{g.handler.syncTime(.777);},1));}},audioEvents:{loadedmetadata:e=>{g.$data.art.emit("m4sAudio:loadedmetadata",e),console.log(ge+"Audio预加载完成"),g.$data.reconnectInfo.count=0,g.$data.reconnectInfo.url="",g.$data.latestSyncTime=0,g.handler.syncPlayState(),g.handler.syncPlayBackRate(),g.handler.syncVolume(),g.handler.syncMuted(),te.intervalHandler(()=>{g.handler.syncTime();});},canplaythrough:e=>{g.$data.art.emit("m4sAudio:canplaythrough",e),console.log(ge+"浏览器估计该音频可以在不停止内容缓冲的情况下播放媒体直到结束"),te.intervalHandler(()=>{g.handler.syncTime();});},error:e=>{g.$data.art.emit("m4sAudio:error",e),console.error(ge+"Audio加载失败",e),d.isNull(g.$data.reconnectInfo.url)&&(g.$data.reconnectInfo.url=g.$data.audio.src),g.$data.reconnectInfo.count<g.$data.reconnectConfig.maxCount?(console.log(ge+`Audio第${g.$data.reconnectInfo.count+1}次尝试重新连接`),g.$data.art.notice.show=`Audio第${g.$data.reconnectInfo.count+1}次尝试重新连接`,g.$data.reconnectInfo.count++,setTimeout(()=>{g.handler.playUrl(""),g.handler.playUrl(g.$data.reconnectInfo.url),g.$data.audio.load();},g.$data.reconnectConfig.delayTime)):(console.error(ge+"Audio已超出重连次数"),g.$data.art.notice.show="Audio已超出重连次数，请尝试切换源");}},handler:{playUrl(e){typeof e=="string"&&(g.$data.audio.src=e,g.unbindAudio(),d.isNotNull(e)&&g.bindAudio(),g.$data.art.emit("m4sAudio:restart",e),g.handler.syncTime(),g.handler.syncPlayState());},play(){g.$data.audio.paused&&(g.$data.audio.play(),g.$data.art.emit("m4sAudio:play"));},pause(){g.$data.audio.paused||(g.$data.audio.pause(),g.$data.art.emit("m4sAudio:pause"));},syncPlayState(){g.$data.art.playing?this.play():this.pause(),g.$data.art.emit("m4sAudio:syncPlayState");},syncTime(e=.1){let t=g.$data.art.currentTime,r=g.$data.audio.currentTime;Math.abs(t-r)>=Math.abs(e)&&(g.$data.audio.currentTime=t,this.syncVolume(),this.syncMuted(),g.$data.art.emit("m4sAudio:syncTime"));},syncVolume(){g.$data.audio.volume=g.$data.art.volume,g.$data.art.emit("m4sAudio:syncVolume");},syncMuted(){let e=g.$data.art.muted;g.$data.audio.muted=e,g.$data.art.emit("m4sAudio:syncMuted");},syncPlayBackRate(){let e=g.$data.art.playbackRate,t=g.$data.audio.playbackRate;e!==t&&(g.$data.audio.playbackRate=e,g.$data.art.emit("m4sAudio:syncPlayBackRate"));}},update(e){this.unbind(),this.unbindAudio(),this.$data.option=null,this.$data.option=e.audioList,this.$data.latestSyncTime=0;const t=this;if(e.audioList?.length){e.audioList.sort((c,p)=>p.bandwidth-c.bandwidth);let r=e.audioList[0];const n=`artplayer-m4s-audio-${e.from}`,i=this.$data.art.storage.get(n);let a={index:0,html:r.soundQualityCodeText,url:r.url};if(i){const c=e.audioList.findIndex(p=>p.soundQualityCode===i.soundQualityCode);if(c!==-1){const p=e.audioList[c];a.index=c,a.url=p.url,a.html=p.soundQualityCodeText;}else console.warn(ge+"没有找到上次选的音频代码，使用当前默认第一个音频");}let o=e.audioList.map((c,p)=>({default:p===a.index,html:c.soundQualityCodeText,url:c.url,soundQualityCode:c.soundQualityCode,soundQualityCodeText:c.soundQualityCodeText,codecs:c.codecs,mimeType:c.mimeType,bandwidth:c.bandwidth,size:c.size}));const l={name:He,width:200,html:"音频",tooltip:a.html,icon:`
				<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
					<path d="M123.5 438.5h131.3v310.7H123.5zM769.2 438.5h131.3v310.7H769.2z"></path>
					<path d="M859.8 398.8h-48.3c-7.9 0-15.4 1.6-22.5 3.9v-32.4c0-125.2-101.9-227.1-227.1-227.1h-99.7c-125.2 0-227.1 101.9-227.1 227.1v32.4c-7.1-2.3-14.6-3.9-22.5-3.9h-48.3c-40.9 0-74.2 33.3-74.2 74.2v243c0 40.9 33.3 74.2 74.2 74.2h48.3c40.9 0 74.2-33.3 74.2-74.2V370.3c0-96.7 78.7-175.4 175.4-175.4h99.7c96.7 0 175.4 78.7 175.4 175.4V716c0 40.9 33.3 74.2 74.2 74.2h48.3c40.9 0 74.2-33.3 74.2-74.2V473c-0.1-40.9-33.3-74.2-74.2-74.2zM235.1 716c0 12.4-10.1 22.5-22.5 22.5h-48.3c-12.4 0-22.5-10.1-22.5-22.5V473c0-12.4 10.1-22.5 22.5-22.5h48.3c12.4 0 22.5 10.1 22.5 22.5v243z m647.2 0c0 12.4-10.1 22.5-22.5 22.5h-48.3c-12.4 0-22.5-10.1-22.5-22.5V473c0-12.4 10.1-22.5 22.5-22.5h48.3c12.4 0 22.5 10.1 22.5 22.5v243z"></path>
					<path d="M531.3 652.3c-1.7 0-3.3-0.1-5-0.4-10.2-1.7-18.7-8.3-22.7-17.8l-41.1-95.4-37 43.8c-8.1 9.6-19.9 15.1-32.5 15.1h-71.9V546h67.6l56.6-67.1c6.8-8.1 17-12 27.5-10.4 10.4 1.5 19.1 8.2 23.3 17.9l41.6 96.7 21.9-24c8-8.8 19.5-13.9 31.4-13.9h102.4v51.7H595l-41.6 45.7c-5.6 6.2-13.7 9.7-22.1 9.7z"></path>
				</svg>
				`,selector:o,onSelect:function(c){let p=c;return console.log(ge+"切换音频",p),t.handler.playUrl(p.url),t.$data.art.storage.set(n,{soundQualityCode:p.soundQualityCode}),c.html}};g.$data.art.setting.find(He)?g.$data.art.setting.update(l):g.$data.art.setting.add(l),u.info("加载m4s的音频：",a),g.handler.playUrl(a.url),this.bind(),this.bindAudio();}else g.handler.playUrl(""),g.$data.art.setting.option.find(n=>n.name===He)&&g.$data.art.setting.remove(He);},bind(){Object.keys(this.events).forEach(e=>{this.$data.art.on(e,this.events[e]);});},bindAudio(){Object.keys(this.audioEvents).forEach(e=>{this.$data.audio.addEventListener(e,this.audioEvents[e],{once:true});});},unbind(){Object.keys(this.events).forEach(e=>{this.$data.art.off(e,this.events[e]);});},unbindAudio(){Object.keys(this.audioEvents).forEach(e=>{this.$data.audio.removeEventListener(e,this.audioEvents[e]);});}},Nt=e=>t=>(g.$data.art=t,typeof e.onRestart=="function"&&(g.userEvent.onRestart=e.onRestart),g.update({from:e.from,audioList:e.audioList}),{name:g.$key.plugin_KEY,update(...r){g.update(...r),g.handler.syncVolume(),g.handler.syncMuted(),g.handler.syncTime();},getAudio(){return g.$data.audio},getCurrentPlayConfig(){return g.$data.option.find(r=>r.url===g.$data.audio.src)}}),lt=g.$key.plugin_KEY,vr={events:{control:e=>{e&&V.updateOnlineTotal({showOnlineTotal:V.$data.option.showOnlineTotal,onlineInfoParams:V.$data.option.onlineInfoParams});}},bind(){Object.keys(this.events).forEach(e=>{V.art.on(e,this.events[e]);});},unbind(){Object.keys(this.events).forEach(e=>{V.art.off(e,this.events[e]);});}},V={art:null,$el:{$topWrap:null,$topTitle:null,$topTitleText:null,$topTitleFollow:null,$topTitleFollowText:null,$topRight:null,$topRightFollow:null},$data:{isInit:false,__option:{},option:{}},$key:{plugin_KEY:"plugin-bilibili-topToolBar"},init(e){this.art.layers.add({name:"top-wrap",html:`
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
            `,mounted:async function(t){V.$el.$topWrap=t,V.$el.$topTitle=t.querySelector(".art-player-top-title"),V.$el.$topTitleText=t.querySelector(".art-player-top-title-text"),V.$el.$topTitleFollow=t.querySelector(".art-player-top-follow"),V.$el.$topTitleFollowText=t.querySelector(".art-player-top-follow-text"),V.$el.$topRight=t.querySelector(".art-player-top-right"),V.$el.$topRightFollow=t.querySelector(".art-player-top-right-follow"),V.update(e),vr.bind();}});},update(e){this.$data.isInit||(this.$data.isInit=true,Object.defineProperties(this.$data.option,{showWrap:{set(t){V.$data.__option.showWrap=t;},get(){return V.$data.__option.showWrap}},showTitle:{set(t){V.$data.__option.showTitle=t;},get(){return V.$data.__option.showTitle}},title:{set(t){V.$data.__option.title=t,typeof t=="string"&&(V.$el.$topTitleText.innerText=t);},get(){return V.$data.__option.title}},showOnlineTotal:{set(t){V.$data.__option.showOnlineTotal=t;},get(){return V.$data.__option.showOnlineTotal}},onlineInfoParams:{set(t){V.$data.__option.onlineInfoParams=t,V.updateOnlineTotal({showOnlineTotal:this.showOnlineTotal,onlineInfoParams:t});},get(){return V.$data.__option.onlineInfoParams}},showRight:{set(t){V.$data.__option.showRight=t;},get(){return V.$data.__option.showRight}},showRightFollow:{set(t){V.$data.__option.showRightFollow=t;},get(){return V.$data.__option.showRightFollow}}})),Object.assign(this.$data.option,e);},async updateOnlineTotal(e){if(!e.showOnlineTotal)return;let t=await rt.onlineTotal({aid:e.onlineInfoParams.aid,bvid:e.onlineInfoParams.bvid,cid:e.onlineInfoParams.cid});t&&(V.$el.$topTitleFollowText.innerText=`${t.total||t.count||0}人正在看`);}},Ot=e=>t=>(V.art=t,V.init(e),{name:V.$key.plugin_KEY,update(r){V.update(r);}}),Pt=V.$key.plugin_KEY,jt={S:"万与丑专业丛东丝丢两严丧个丬丰临为丽举么义乌乐乔习乡书买乱争于亏云亘亚产亩亲亵亸亿仅从仑仓仪们价众优伙会伛伞伟传伤伥伦伧伪伫体余佣佥侠侣侥侦侧侨侩侪侬俣俦俨俩俪俭债倾偬偻偾偿傥傧储傩儿兑兖党兰关兴兹养兽冁内冈册写军农冢冯冲决况冻净凄凉凌减凑凛几凤凫凭凯击凼凿刍划刘则刚创删别刬刭刽刿剀剂剐剑剥剧劝办务劢动励劲劳势勋勐勚匀匦匮区医华协单卖卢卤卧卫却卺厂厅历厉压厌厍厕厢厣厦厨厩厮县参叆叇双发变叙叠叶号叹叽吁后吓吕吗吣吨听启吴呒呓呕呖呗员呙呛呜咏咔咙咛咝咤咴咸哌响哑哒哓哔哕哗哙哜哝哟唛唝唠唡唢唣唤唿啧啬啭啮啰啴啸喷喽喾嗫呵嗳嘘嘤嘱噜噼嚣嚯团园囱围囵国图圆圣圹场坂坏块坚坛坜坝坞坟坠垄垅垆垒垦垧垩垫垭垯垱垲垴埘埙埚埝埯堑堕塆墙壮声壳壶壸处备复够头夸夹夺奁奂奋奖奥妆妇妈妩妪妫姗姜娄娅娆娇娈娱娲娴婳婴婵婶媪嫒嫔嫱嬷孙学孪宁宝实宠审宪宫宽宾寝对寻导寿将尔尘尧尴尸尽层屃屉届属屡屦屿岁岂岖岗岘岙岚岛岭岳岽岿峃峄峡峣峤峥峦崂崃崄崭嵘嵚嵛嵝嵴巅巩巯币帅师帏帐帘帜带帧帮帱帻帼幂幞干并广庄庆庐庑库应庙庞废庼廪开异弃张弥弪弯弹强归当录彟彦彻径徕御忆忏忧忾怀态怂怃怄怅怆怜总怼怿恋恳恶恸恹恺恻恼恽悦悫悬悭悯惊惧惨惩惫惬惭惮惯愍愠愤愦愿慑慭憷懑懒懔戆戋戏戗战戬户扎扑扦执扩扪扫扬扰抚抛抟抠抡抢护报担拟拢拣拥拦拧拨择挂挚挛挜挝挞挟挠挡挢挣挤挥挦捞损捡换捣据捻掳掴掷掸掺掼揸揽揿搀搁搂搅携摄摅摆摇摈摊撄撑撵撷撸撺擞攒敌敛数斋斓斗斩断无旧时旷旸昙昼昽显晋晒晓晔晕晖暂暧札术朴机杀杂权条来杨杩杰极构枞枢枣枥枧枨枪枫枭柜柠柽栀栅标栈栉栊栋栌栎栏树栖样栾桊桠桡桢档桤桥桦桧桨桩梦梼梾检棂椁椟椠椤椭楼榄榇榈榉槚槛槟槠横樯樱橥橱橹橼檐檩欢欤欧歼殁殇残殒殓殚殡殴毁毂毕毙毡毵氇气氢氩氲汇汉污汤汹沓沟没沣沤沥沦沧沨沩沪沵泞泪泶泷泸泺泻泼泽泾洁洒洼浃浅浆浇浈浉浊测浍济浏浐浑浒浓浔浕涂涌涛涝涞涟涠涡涢涣涤润涧涨涩淀渊渌渍渎渐渑渔渖渗温游湾湿溃溅溆溇滗滚滞滟滠满滢滤滥滦滨滩滪漤潆潇潋潍潜潴澜濑濒灏灭灯灵灾灿炀炉炖炜炝点炼炽烁烂烃烛烟烦烧烨烩烫烬热焕焖焘煅煳熘爱爷牍牦牵牺犊犟状犷犸犹狈狍狝狞独狭狮狯狰狱狲猃猎猕猡猪猫猬献獭玑玙玚玛玮环现玱玺珉珏珐珑珰珲琎琏琐琼瑶瑷璇璎瓒瓮瓯电画畅畲畴疖疗疟疠疡疬疮疯疱疴痈痉痒痖痨痪痫痴瘅瘆瘗瘘瘪瘫瘾瘿癞癣癫癯皑皱皲盏盐监盖盗盘眍眦眬着睁睐睑瞒瞩矫矶矾矿砀码砖砗砚砜砺砻砾础硁硅硕硖硗硙硚确硷碍碛碜碱碹磙礼祎祢祯祷祸禀禄禅离秃秆种积称秽秾稆税稣稳穑穷窃窍窑窜窝窥窦窭竖竞笃笋笔笕笺笼笾筑筚筛筜筝筹签简箓箦箧箨箩箪箫篑篓篮篱簖籁籴类籼粜粝粤粪粮糁糇紧絷纟纠纡红纣纤纥约级纨纩纪纫纬纭纮纯纰纱纲纳纴纵纶纷纸纹纺纻纼纽纾线绀绁绂练组绅细织终绉绊绋绌绍绎经绐绑绒结绔绕绖绗绘给绚绛络绝绞统绠绡绢绣绤绥绦继绨绩绪绫绬续绮绯绰绱绲绳维绵绶绷绸绹绺绻综绽绾绿缀缁缂缃缄缅缆缇缈缉缊缋缌缍缎缏缐缑缒缓缔缕编缗缘缙缚缛缜缝缞缟缠缡缢缣缤缥缦缧缨缩缪缫缬缭缮缯缰缱缲缳缴缵罂网罗罚罢罴羁羟羡翘翙翚耢耧耸耻聂聋职聍联聩聪肃肠肤肷肾肿胀胁胆胜胧胨胪胫胶脉脍脏脐脑脓脔脚脱脶脸腊腌腘腭腻腼腽腾膑臜舆舣舰舱舻艰艳艹艺节芈芗芜芦苁苇苈苋苌苍苎苏苘苹茎茏茑茔茕茧荆荐荙荚荛荜荞荟荠荡荣荤荥荦荧荨荩荪荫荬荭荮药莅莜莱莲莳莴莶获莸莹莺莼萚萝萤营萦萧萨葱蒇蒉蒋蒌蓝蓟蓠蓣蓥蓦蔷蔹蔺蔼蕲蕴薮藁藓虏虑虚虫虬虮虽虾虿蚀蚁蚂蚕蚝蚬蛊蛎蛏蛮蛰蛱蛲蛳蛴蜕蜗蜡蝇蝈蝉蝎蝼蝾螀螨蟏衅衔补衬衮袄袅袆袜袭袯装裆裈裢裣裤裥褛褴襁襕见观觃规觅视觇览觉觊觋觌觍觎觏觐觑觞触觯詟誉誊讠计订讣认讥讦讧讨让讪讫训议讯记讱讲讳讴讵讶讷许讹论讻讼讽设访诀证诂诃评诅识诇诈诉诊诋诌词诎诏诐译诒诓诔试诖诗诘诙诚诛诜话诞诟诠诡询诣诤该详诧诨诩诪诫诬语诮误诰诱诲诳说诵诶请诸诹诺读诼诽课诿谀谁谂调谄谅谆谇谈谊谋谌谍谎谏谐谑谒谓谔谕谖谗谘谙谚谛谜谝谞谟谠谡谢谣谤谥谦谧谨谩谪谫谬谭谮谯谰谱谲谳谴谵谶谷豮贝贞负贠贡财责贤败账货质贩贪贫贬购贮贯贰贱贲贳贴贵贶贷贸费贺贻贼贽贾贿赀赁赂赃资赅赆赇赈赉赊赋赌赍赎赏赐赑赒赓赔赕赖赗赘赙赚赛赜赝赞赟赠赡赢赣赪赵赶趋趱趸跃跄跖跞践跶跷跸跹跻踊踌踪踬踯蹑蹒蹰蹿躏躜躯车轧轨轩轪轫转轭轮软轰轱轲轳轴轵轶轷轸轹轺轻轼载轾轿辀辁辂较辄辅辆辇辈辉辊辋辌辍辎辏辐辑辒输辔辕辖辗辘辙辚辞辩辫边辽达迁过迈运还这进远违连迟迩迳迹适选逊递逦逻遗遥邓邝邬邮邹邺邻郁郄郏郐郑郓郦郧郸酝酦酱酽酾酿释里鉅鉴銮錾钆钇针钉钊钋钌钍钎钏钐钑钒钓钔钕钖钗钘钙钚钛钝钞钟钠钡钢钣钤钥钦钧钨钩钪钫钬钭钮钯钰钱钲钳钴钵钶钷钸钹钺钻钼钽钾钿铀铁铂铃铄铅铆铈铉铊铋铍铎铏铐铑铒铕铗铘铙铚铛铜铝铞铟铠铡铢铣铤铥铦铧铨铪铫铬铭铮铯铰铱铲铳铴铵银铷铸铹铺铻铼铽链铿销锁锂锃锄锅锆锇锈锉锊锋锌锍锎锏锐锑锒锓锔锕锖锗错锚锜锞锟锠锡锢锣锤锥锦锨锩锫锬锭键锯锰锱锲锳锴锵锶锷锸锹锺锻锼锽锾锿镀镁镂镃镆镇镈镉镊镌镍镎镏镐镑镒镕镖镗镙镚镛镜镝镞镟镠镡镢镣镤镥镦镧镨镩镪镫镬镭镮镯镰镱镲镳镴镶长门闩闪闫闬闭问闯闰闱闲闳间闵闶闷闸闹闺闻闼闽闾闿阀阁阂阃阄阅阆阇阈阉阊阋阌阍阎阏阐阑阒阓阔阕阖阗阘阙阚阛队阳阴阵阶际陆陇陈陉陕陧陨险随隐隶隽难雏雠雳雾霁霉霭靓静靥鞑鞒鞯鞴韦韧韨韩韪韫韬韵页顶顷顸项顺须顼顽顾顿颀颁颂颃预颅领颇颈颉颊颋颌颍颎颏颐频颒颓颔颕颖颗题颙颚颛颜额颞颟颠颡颢颣颤颥颦颧风飏飐飑飒飓飔飕飖飗飘飙飚飞飨餍饤饥饦饧饨饩饪饫饬饭饮饯饰饱饲饳饴饵饶饷饸饹饺饻饼饽饾饿馀馁馂馃馄馅馆馇馈馉馊馋馌馍馎馏馐馑馒馓馔馕马驭驮驯驰驱驲驳驴驵驶驷驸驹驺驻驼驽驾驿骀骁骂骃骄骅骆骇骈骉骊骋验骍骎骏骐骑骒骓骔骕骖骗骘骙骚骛骜骝骞骟骠骡骢骣骤骥骦骧髅髋髌鬓魇魉鱼鱽鱾鱿鲀鲁鲂鲄鲅鲆鲇鲈鲉鲊鲋鲌鲍鲎鲏鲐鲑鲒鲓鲔鲕鲖鲗鲘鲙鲚鲛鲜鲝鲞鲟鲠鲡鲢鲣鲤鲥鲦鲧鲨鲩鲪鲫鲬鲭鲮鲯鲰鲱鲲鲳鲴鲵鲶鲷鲸鲹鲺鲻鲼鲽鲾鲿鳀鳁鳂鳃鳄鳅鳆鳇鳈鳉鳊鳋鳌鳍鳎鳏鳐鳑鳒鳓鳔鳕鳖鳗鳘鳙鳛鳜鳝鳞鳟鳠鳡鳢鳣鸟鸠鸡鸢鸣鸤鸥鸦鸧鸨鸩鸪鸫鸬鸭鸮鸯鸰鸱鸲鸳鸴鸵鸶鸷鸸鸹鸺鸻鸼鸽鸾鸿鹀鹁鹂鹃鹄鹅鹆鹇鹈鹉鹊鹋鹌鹍鹎鹏鹐鹑鹒鹓鹔鹕鹖鹗鹘鹚鹛鹜鹝鹞鹟鹠鹡鹢鹣鹤鹥鹦鹧鹨鹩鹪鹫鹬鹭鹯鹰鹱鹲鹳鹴鹾麦麸黄黉黡黩黪黾鼋鼌鼍鼗鼹齄齐齑齿龀龁龂龃龄龅龆龇龈龉龊龋龌龙龚龛龟志制咨只里系范松没尝尝闹面准钟别闲乾尽脏拼冲里",T:"萬與醜專業叢東絲丟兩嚴喪個丬豐臨爲麗舉麼義烏樂喬習鄉書買亂爭於虧雲亙亞產畝親褻嚲億僅從侖倉儀們價衆優夥會傴傘偉傳傷倀倫傖僞佇體餘傭僉俠侶僥偵側僑儈儕儂俁儔儼倆儷儉債傾傯僂僨償儻儐儲儺兒兌兗黨蘭關興茲養獸囅內岡冊寫軍農冢馮沖決況凍淨淒涼凌減湊凜幾鳳鳧憑凱擊凼鑿芻劃劉則剛創刪別剗剄劊劌剴劑剮劍剝劇勸辦務勱動勵勁勞勢勳勐勩勻匭匱區醫華協單賣盧滷臥衛卻巹廠廳歷厲壓厭厙廁廂厴廈廚廄廝縣參靉靆雙發變敘疊葉號嘆嘰籲後嚇呂嗎唚噸聽啓吳嘸囈嘔嚦唄員咼嗆嗚詠咔嚨嚀噝吒咴鹹哌響啞噠嘵嗶噦譁噲嚌噥喲嘜嗊嘮啢嗩唣喚唿嘖嗇囀齧囉嘽嘯噴嘍嚳囁呵噯噓嚶囑嚕噼囂嚯團園囪圍圇國圖圓聖壙場阪壞塊堅壇壢壩塢墳墜壟壠壚壘墾垧堊墊埡墶壋塏堖塒壎堝埝垵塹墮壪牆壯聲殼壺壼處備復夠頭誇夾奪奩奐奮獎奧妝婦媽嫵嫗嬀姍姜婁婭嬈嬌孌娛媧嫺嫿嬰嬋嬸媼嬡嬪嬙嬤孫學孿寧寶實寵審憲宮寬賓寢對尋導壽將爾塵堯尷屍盡層屓屜屆屬屢屨嶼歲豈嶇崗峴嶴嵐島嶺嶽崬巋嶨嶧峽嶢嶠崢巒嶗崍嶮嶄嶸嶔嵛嶁嵴巔鞏巰幣帥師幃帳簾幟帶幀幫幬幘幗冪襆幹並廣莊慶廬廡庫應廟龐廢廎廩開異棄張彌弳彎彈強歸當錄彠彥徹徑徠御憶懺憂愾懷態慫憮慪悵愴憐總懟懌戀懇惡慟懨愷惻惱惲悅愨懸慳憫驚懼慘懲憊愜慚憚慣愍慍憤憒願懾憖憷懣懶懍戇戔戲戧戰戩戶扎撲扦執擴捫掃揚擾撫拋摶摳掄搶護報擔擬攏揀擁攔擰撥擇掛摯攣掗撾撻挾撓擋撟掙擠揮撏撈損撿換搗據捻擄摑擲撣摻摜揸攬撳攙擱摟攪攜攝攄擺搖擯攤攖撐攆擷擼攛擻攢敵斂數齋斕鬥斬斷無舊時曠暘曇晝曨顯晉曬曉曄暈暉暫曖札術樸機殺雜權條來楊榪傑極構樅樞棗櫪梘棖槍楓梟櫃檸檉梔柵標棧櫛櫳棟櫨櫟欄樹棲樣欒桊椏橈楨檔榿橋樺檜槳樁夢檮棶檢櫺槨櫝槧欏橢樓欖櫬櫚櫸檟檻檳櫧橫檣櫻櫫櫥櫓櫞檐檁歡歟歐殲歿殤殘殞殮殫殯毆毀轂畢斃氈毿氌氣氫氬氳匯漢污湯洶沓溝沒灃漚瀝淪滄渢潙滬沵濘淚澩瀧瀘濼瀉潑澤涇潔灑窪浹淺漿澆湞溮濁測澮濟瀏滻渾滸濃潯濜塗涌濤澇淶漣潿渦溳渙滌潤澗漲澀澱淵淥漬瀆漸澠漁瀋滲溫遊灣溼潰濺漵漊潷滾滯灩灄滿瀅濾濫灤濱灘澦漤瀠瀟瀲濰潛瀦瀾瀨瀕灝滅燈靈災燦煬爐燉煒熗點煉熾爍爛烴燭煙煩燒燁燴燙燼熱煥燜燾煅煳熘愛爺牘犛牽犧犢犟狀獷獁猶狽狍獮獰獨狹獅獪猙獄猻獫獵獼玀豬貓蝟獻獺璣璵瑒瑪瑋環現瑲璽珉珏琺瓏璫琿璡璉瑣瓊瑤璦璇瓔瓚甕甌電畫暢畲疇癤療瘧癘瘍癧瘡瘋皰痾癰痙癢瘂癆瘓癇癡癉瘮瘞瘻癟癱癮癭癩癬癲癯皚皺皸盞鹽監蓋盜盤瞘眥矓着睜睞瞼瞞矚矯磯礬礦碭碼磚硨硯碸礪礱礫礎硜硅碩硤磽磑礄確礆礙磧磣鹼碹磙禮禕禰禎禱禍稟祿禪離禿稈種積稱穢穠穭稅穌穩穡窮竊竅窯竄窩窺竇窶豎競篤筍筆筧箋籠籩築篳篩簹箏籌籤簡籙簀篋籜籮簞簫簣簍籃籬籪籟糴類秈糶糲粵糞糧糝餱緊縶糹糾紆紅紂纖紇約級紈纊紀紉緯紜紘純紕紗綱納紝縱綸紛紙紋紡紵紖紐紓線紺紲紱練組紳細織終縐絆紼絀紹繹經紿綁絨結絝繞絰絎繪給絢絳絡絕絞統綆綃絹繡綌綏絛繼綈績緒綾緓續綺緋綽鞝緄繩維綿綬繃綢綯綹綣綜綻綰綠綴緇緙緗緘緬纜緹緲緝縕繢緦綞緞緶線緱縋緩締縷編緡緣縉縛縟縝縫縗縞纏縭縊縑繽縹縵縲纓縮繆繅纈繚繕繒繮繾繰繯繳纘罌網羅罰罷羆羈羥羨翹翽翬耮耬聳恥聶聾職聹聯聵聰肅腸膚肷腎腫脹脅膽勝朧腖臚脛膠脈膾髒臍腦膿臠腳脫腡臉臘醃膕齶膩靦膃騰臏臢輿艤艦艙艫艱豔艹藝節羋薌蕪蘆蓯葦藶莧萇蒼苧蘇檾蘋莖蘢蔦塋煢繭荊薦薘莢蕘蓽蕎薈薺蕩榮葷滎犖熒蕁藎蓀蔭蕒葒葤藥蒞莜萊蓮蒔萵薟獲蕕瑩鶯蓴蘀蘿螢營縈蕭薩蔥蕆蕢蔣蔞藍薊蘺蕷鎣驀薔蘞藺藹蘄蘊藪藁蘚虜慮虛蟲虯蟣雖蝦蠆蝕蟻螞蠶蠔蜆蠱蠣蟶蠻蟄蛺蟯螄蠐蛻蝸蠟蠅蟈蟬蠍螻蠑螿蟎蠨釁銜補襯袞襖嫋褘襪襲襏裝襠褌褳襝褲襉褸襤襁襴見觀覎規覓視覘覽覺覬覡覿覥覦覯覲覷觴觸觶讋譽謄訁計訂訃認譏訐訌討讓訕訖訓議訊記訒講諱謳詎訝訥許訛論訩訟諷設訪訣證詁訶評詛識詗詐訴診詆謅詞詘詔詖譯詒誆誄試詿詩詰詼誠誅詵話誕詬詮詭詢詣諍該詳詫諢詡譸誡誣語誚誤誥誘誨誑說誦誒請諸諏諾讀諑誹課諉諛誰諗調諂諒諄誶談誼謀諶諜謊諫諧謔謁謂諤諭諼讒諮諳諺諦謎諞諝謨讜謖謝謠謗諡謙謐謹謾謫譾謬譚譖譙讕譜譎讞譴譫讖谷豶貝貞負貟貢財責賢敗賬貨質販貪貧貶購貯貫貳賤賁貰貼貴貺貸貿費賀貽賊贄賈賄貲賃賂贓資賅贐賕賑賚賒賦賭齎贖賞賜贔賙賡賠賧賴賵贅賻賺賽賾贗贊贇贈贍贏贛赬趙趕趨趲躉躍蹌跖躒踐躂蹺蹕躚躋踊躊蹤躓躑躡蹣躕躥躪躦軀車軋軌軒軑軔轉軛輪軟轟軲軻轤軸軹軼軤軫轢軺輕軾載輊轎輈輇輅較輒輔輛輦輩輝輥輞輬輟輜輳輻輯轀輸轡轅轄輾轆轍轔辭辯辮邊遼達遷過邁運還這進遠違連遲邇逕跡適選遜遞邐邏遺遙鄧鄺鄔郵鄒鄴鄰鬱郄郟鄶鄭鄆酈鄖鄲醞醱醬釅釃釀釋裏鉅鑑鑾鏨釓釔針釘釗釙釕釷釺釧釤鈒釩釣鍆釹鍚釵鈃鈣鈈鈦鈍鈔鍾鈉鋇鋼鈑鈐鑰欽鈞鎢鉤鈧鈁鈥鈄鈕鈀鈺錢鉦鉗鈷鉢鈳鉕鈽鈸鉞鑽鉬鉭鉀鈿鈾鐵鉑鈴鑠鉛鉚鈰鉉鉈鉍鈹鐸鉶銬銠鉺銪鋏鋣鐃銍鐺銅鋁銱銦鎧鍘銖銑鋌銩銛鏵銓鉿銚鉻銘錚銫鉸銥鏟銃鐋銨銀銣鑄鐒鋪鋙錸鋱鏈鏗銷鎖鋰鋥鋤鍋鋯鋨鏽銼鋝鋒鋅鋶鐦鐗銳銻鋃鋟鋦錒錆鍺錯錨錡錁錕錩錫錮鑼錘錐錦杴錈錇錟錠鍵鋸錳錙鍥鍈鍇鏘鍶鍔鍤鍬鍾鍛鎪鍠鍰鎄鍍鎂鏤鎡鏌鎮鎛鎘鑷鐫鎳鎿鎦鎬鎊鎰鎔鏢鏜鏍鏰鏞鏡鏑鏃鏇鏐鐔钁鐐鏷鑥鐓鑭鐠鑹鏹鐙鑊鐳鐶鐲鐮鐿鑔鑣鑞鑲長門閂閃閆閈閉問闖閏闈閒閎間閔閌悶閘鬧閨聞闥閩閭闓閥閣閡閫鬮閱閬闍閾閹閶鬩閿閽閻閼闡闌闃闠闊闋闔闐闒闕闞闤隊陽陰陣階際陸隴陳陘陝隉隕險隨隱隸雋難雛讎靂霧霽黴靄靚靜靨韃鞽韉鞴韋韌韍韓韙韞韜韻頁頂頃頇項順須頊頑顧頓頎頒頌頏預顱領頗頸頡頰頲頜潁熲頦頤頻頮頹頷頴穎顆題顒顎顓顏額顳顢顛顙顥纇顫顬顰顴風颺颭颮颯颶颸颼颻飀飄飆飈飛饗饜飣飢飥餳飩餼飪飫飭飯飲餞飾飽飼飿飴餌饒餉餄餎餃餏餅餑餖餓餘餒餕餜餛餡館餷饋餶餿饞饁饃餺餾饈饉饅饊饌饢馬馭馱馴馳驅馹駁驢駔駛駟駙駒騶駐駝駑駕驛駘驍罵駰驕驊駱駭駢驫驪騁驗騂駸駿騏騎騍騅騌驌驂騙騭騤騷騖驁騮騫騸驃騾驄驏驟驥驦驤髏髖髕鬢魘魎魚魛魢魷魨魯魴魺鮁鮃鮎鱸鮋鮓鮒鮊鮑鱟鮍鮐鮭鮚鮳鮪鮞鮦鰂鮜鱠鱭鮫鮮鮺鯗鱘鯁鱺鰱鰹鯉鰣鰷鯀鯊鯇鮶鯽鯒鯖鯪鯕鯫鯡鯤鯧鯝鯢鮎鯛鯨鰺鯴鯔鱝鰈鰏鱨鯷鰮鰃鰓鱷鰍鰒鰉鰁鱂鯿鰠鰲鰭鰨鰥鰩鰟鰜鰳鰾鱈鱉鰻鰵鱅鰼鱖鱔鱗鱒鱯鱤鱧鱣鳥鳩雞鳶鳴鳲鷗鴉鶬鴇鴆鴣鶇鸕鴨鴞鴦鴒鴟鴝鴛鷽鴕鷥鷙鴯鴰鵂鴴鵃鴿鸞鴻鵐鵓鸝鵑鵠鵝鵒鷳鵜鵡鵲鶓鵪鵾鵯鵬鵮鶉鶊鵷鷫鶘鶡鶚鶻鶿鶥鶩鷊鷂鶲鶹鶺鷁鶼鶴鷖鸚鷓鷚鷯鷦鷲鷸鷺鸇鷹鸌鸏鸛鸘鹺麥麩黃黌黶黷黲黽黿鼂鼉鞀鼴齇齊齏齒齔齕齗齟齡齙齠齜齦齬齪齲齷龍龔龕龜志制諮只裏系範鬆沒嚐嚐鬧面準鍾別閒乾盡髒拼衝裡"},ft=jt.S,gt=jt.T,Ue=(e,t)=>{let r,n,i,a,o="",l;for(t?(r=ft,n=gt):(r=gt,n=ft),i=0;i<e.length;i++){a=e.charAt(i);const s=e.charCodeAt(i);if(!(s>13312&&s<40899||s>63744&&s<64106)){o+=a;continue}l=r.indexOf(a),l!==-1?o+=n.charAt(l):o+=a;}return o},yr={s2t:(e,t)=>{if(t){for(let r=0;r<t.length;r++)e.includes(t[r].src)&&(e=e.replaceAll(t[r].src,t[r].des));return Ue(e,true)}else return Ue(e,true)},t2s:(e,t)=>{if(t){for(let r=0;r<t.length;r++)e.includes(t[r].src)&&(e=e.replaceAll(t[r].src,t[r].des));return Ue(e,false)}else return Ue(e,false)}},se="[artplayer-plugin-bilibiliCCSubTitle]：",Ht={src:"臟妳為傢蔔餵眾係姊託迴蹟儘封啟",des:"脏你为家卜喂众系姐托回迹尽对启",more_src:["乾脆","随著","相信著","奇蹟","拚命","採取","製造"],more_des:["干脆","随着","相信着","奇迹","拼命","采取","制造"],_custom_str:[],generteCustomStr(){for(let e=0;e<this.src.length;e++)this._custom_str.push({src:this.src[e],des:this.des[e]});for(let e=0;e<this.more_src.length;e++)this._custom_str.push({src:this.more_src[e],des:this.more_des[e]});},getCustomStr(){return this._custom_str}},qe={reset(){this.unbind();},bind(){ce.art.on("video:timeupdate",this.event,this);},unbind(){ce.clearSubTitle(),ce.art.off("video:timeupdate",this.event);},event(){let e=ce.art.currentTime,t=Y.allSubTitleInfo[Y.currentSelectIndex]?.data;if(!t)return;let r=t.find(i=>i.to>=e&&i.from<=e),n=Array.from(ce.$el.$subtitle.querySelectorAll(".art-subtitle-line"));for(let i=0;i<n.length;i++){const a=n[i],{from:o,to:l}=Reflect.get(a,"data-subtitle-line-info");if(l<=e||o>=e)a.remove();else if(r&&r.from===o&&r.to===l)return}if(r){let i=document.createElement("div");i.className="art-subtitle-line",Reflect.set(i,"data-subtitle-line-info",r),i.setAttribute("data-group","0"),i.innerHTML=r.content,ce.$el.$subtitle.appendChild(i);}}},Y={allSubTitleInfo:[],currentSelectIndex:-1,reset(){this.allSubTitleInfo=[],this.currentSelectIndex=-1;}},ce={art:null,$key:{plugin_KEY:"plugin-bilibili-cc-subtitle"},$el:{$subtitle:null},async update(e){const t=this,r=`artplayer-bili-cc-subtitle-${e.from}`,n={config:{NAME:"setting-bilibili-cc-subtitle"},getDefaultSettingOption:()=>({name:n.config.NAME,width:200,html:"字幕",tooltip:"",icon:`
					<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 48 48">
						<path d="M0 0h48v48H0z" fill="none"/>
						<path fill="#ffffff" d="M40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM8 24h8v4H8v-4zm20 12H8v-4h20v4zm12 0h-8v-4h8v4zm0-8H20v-4h20v4z"/>
					</svg>
					`,selector:[],onSelect:function(p){let h=p;return t.art.storage.set(r,{lan:h.subTitle_lan}),qe.unbind(),Y.currentSelectIndex=h.subTitle_index,h.subTitle_index!==-1&&qe.bind(),p.html}}),getSettingOption:()=>{const p=n.getDefaultSettingOption(),h=n.getDefaultSettingSelector();return p.selector.push(h),p.tooltip=h.html,p},getDefaultSettingSelector:()=>({default:true,html:"无",subTitle_lan:"",subTitle_index:0,subTitle_data:[]}),addSetting(p){let h=this.getSettingOption();if(p&&p.length){h.selector.push(...p);let C={index:0,html:h.selector[0].html};const $=t.art.storage.get(r);if($){const L=h.selector.findIndex(I=>I.subTitle_lan===$.lan);if(L!==-1){const I=h.selector[L];console.log(se+"选择字幕："+I.html),C.index=L,C.html=I.html;}else console.warn(se+"没有找到上次选的字幕，使用当前默认无");}for(let L=0;L<h.selector.length;L++)h.selector[L].default=L===C.index;h.tooltip=C.html,Y.currentSelectIndex=C.index;}this.isAddSetting()?(console.log(se+"更新字幕菜单",p??[]),t.art.setting.update(h)):t.art.setting.add(h);},isAddSetting(){return t.art.setting.find(this.config.NAME)!=null}};Y.reset(),qe.reset();const i=n.getDefaultSettingSelector();Y.currentSelectIndex=0,Y.allSubTitleInfo.push({name:i.html,lan:i.subTitle_lan,data:i.subTitle_data}),n.addSetting();const a=[];this.$el.$subtitle=this.art.template.$subtitle;const o={cid:e.cid};if(e.ep_id&&Reflect.set(o,"ep_id",e.ep_id),e.aid)Reflect.set(o,"aid",e.aid);else if(e.bvid)Reflect.set(o,"bvid",e.bvid);else throw new TypeError("avid or bvid must give one");const l=await q.get(`https://${ze.web_host}/x/player/v2?${d.toSearchParamsStr(o)}`,{fetch:true,allowInterceptConfig:false,responseType:"json",headers:{Host:"www.bilibili.com",Referer:"https://www.bilibili.com"}});if(!l.status){console.error(se+"网络异常，获取视频的字幕信息失败",l);return}console.log(se+"视频的字幕信息",l);const s=d.toJSON(l.data.responseText);if(!ue.isWebApiSuccess(s)){console.error(se+"获取视频的字幕信息失败",s);return}let c=s.data.subtitle.subtitles;if(!c.length){console.warn(se+"获取字幕链接列表为空",s);return}for(let p=0;p<c.length;p++){const h=c[p];if(console.log(se+"请求字幕链接信息："+h.subtitle_url),d.isNull(h.subtitle_url))continue;const y=await q.get(h.subtitle_url,{responseType:"json",allowInterceptConfig:false,headers:{Referer:"https://www.bilibili.com","User-Agent":d.getRandomPCUA()}});if(y.status){console.log(se+"成功获取字幕信息");const $=d.toJSON(y.data.responseText).body;let L=Y.allSubTitleInfo.length,I={name:h.lan_doc,lan:h.lan,data:$};Y.allSubTitleInfo.push(I),a.push({html:h.lan_doc,subTitle_index:L,subTitle_lan:h.lan,subTitle_data:$});}else console.error(se+"请求字幕链接信息失败",y);}if(f.getValue("bili-bangumi-generateSimpleChineseSubtitle")){let p=Y.allSubTitleInfo.find(h=>h.lan==="zh-Hant"||h.name.includes("繁体"));if(p){let h=[];p.data.forEach($=>{const{content:L,...I}=$,k=yr.t2s(L,Ht.getCustomStr());h.push({content:k,...I});});let y="简体（自动生成）",C=Y.allSubTitleInfo.length;Y.allSubTitleInfo.push({name:y,lan:"zh-CN-auto",data:h}),a.push({html:y,subTitle_index:C,subTitle_lan:"zh-CN-auto",subTitle_data:h});}}console.log(se+"加载视频CC字幕信息",Y.allSubTitleInfo),Y.allSubTitleInfo[Y.currentSelectIndex].data==null||Y.allSubTitleInfo[Y.currentSelectIndex].data.length==0||qe.bind(),n.addSetting(a);},clearSubTitle(){this.$el.$subtitle&&(this.$el.$subtitle.innerHTML="");},updateArtPlayer(e){this.art=e;}};function Ut(e){return t=>(Ht.generteCustomStr(),ce.updateArtPlayer(t),ce.update(e),{name:ce.$key.plugin_KEY,update(r){ce.update(r);}})}const qt=ce.$key.plugin_KEY,Gt="[artplayer-plugin-epChoose]：",Qt=(e,t)=>t==null||t==""?e:isNaN(Number(t))?t.toString():`第${t}话 ${e}`,xr=e=>{let t="",r=e.EP_LIST.map((n,i)=>(n.isDefault&&(t=n.title),{html:n.title,default:n.isDefault,index:i,callback:n.onSelect}));return {name:me.$key.SETTING_KEY,icon:'<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2295" width="24" height="24"><path d="M983.745542 312.673133a510.516437 510.516437 0 0 0-109.673817-162.745211A510.516437 510.516437 0 0 0 511.999823 0.000353 510.516437 510.516437 0 0 0 149.927922 149.927922 510.516437 510.516437 0 0 0 0.000353 511.999823a510.516437 510.516437 0 0 0 149.927569 362.071902A510.516437 510.516437 0 0 0 511.999823 1023.999294a510.516437 510.516437 0 0 0 362.071902-149.927569A510.516437 510.516437 0 0 0 1023.999294 511.999823c0-69.137584-13.488538-136.121238-40.253752-199.32669z m-62.852348 372.029408a443.779955 443.779955 0 0 1-95.05535 140.994061 441.908508 441.908508 0 0 1-313.73209 129.941935c-59.886283 0-118.042361-11.758333-172.667407-34.851274a443.779955 443.779955 0 0 1-141.029372-95.090661 441.908508 441.908508 0 0 1-129.941934-313.696779c0-59.886283 11.758333-118.042361 34.851274-172.667407a443.779955 443.779955 0 0 1 95.09066-141.029371 441.908508 441.908508 0 0 1 313.696779-129.941935c59.886283 0 118.077671 11.758333 172.667408 34.851274a443.779955 443.779955 0 0 1 141.064682 95.090661 441.908508 441.908508 0 0 1 129.941934 313.696778c0 59.886283-11.793643 118.042361-34.851274 172.667408zM388.413744 706.206519l317.792775-211.86185-317.792775-211.861849v423.723699z" p-id="2296"></path></svg>',html:"选集",selector:r,tooltip:t,onSelect:function(n){return typeof n.callback=="function"&&n.callback(n,n.index),n.html},mounted(n,i){n.setAttribute("data-plugin",me.$key.SETTING_KEY);},playNext(){let n=this.selector.findIndex(i=>i.default);n!==-1&&n+1<this.selector.length-1?(n+=1,this.onSelect(this.selector[n])):console.warn(Gt+"当前播放列表已无下一集");}}},Ge={$event:{"video:ended":()=>{console.log(Gt+"自动连播启用，播放下一集"),me.$data.art.setting.find(me.$key.SETTING_KEY).playNext();}},bind(e){Object.keys(this.$event).forEach(t=>{e.on(t,this.$event[t]);});},unbind(e){Object.keys(this.$event).forEach(t=>{e.off(t,this.$event[t]);});}},me={$flag:{isInitCSS:false},$key:{SETTING_KEY:"setting-ep-choose",PLUGIN_KEY:"plugin-ep-choose"},$data:{art:null},resetEnv(){Object.keys(this.$data).forEach(e=>{Reflect.set(this.$data,e,null);});},init(e,t){this.resetEnv(),this.$data.art=e,Ge.unbind(e),t.automaticBroadcast&&Ge.bind(e),this.$flag.isInitCSS||(this.$flag.isInitCSS=true,R(`
			.art-setting-panel[data-plugin="${me.$key.SETTING_KEY}"] .art-setting-item .art-setting-item-left-text{
				max-width: 210px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			`)),this.update(t);},update(e){if(Ge.unbind(this.$data.art),e.EP_LIST==null||e.EP_LIST.length===0)return;let t=xr(e);this.$data.art.setting.find(this.$key.SETTING_KEY)?this.$data.art.setting.update(t):this.$data.art.setting.add(t),e.automaticBroadcast&&Ge.bind(this.$data.art);}},Wt=e=>t=>(me.init(t,e),{name:me.$key.PLUGIN_KEY,update(r){me.update(r);}}),Jt=me.$key.PLUGIN_KEY,Cr={loading:'<img src="data:image/gif;base64,R0lGODlhWgBaALMOAHR0dAICAnd3dwEBAXh4eAMDAwkJCQ0NDQsLCxwcHA4ODggICHl5eQAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiYWE1ODg5ZS1jN2RmLTRmZmUtYjkzOS0wMmVkMTZhNmNjZDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0I2ODI2NjA1NzhGMTFFNkEyMEVDNzhEOUY1RkQxRjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0I2ODI2NUY1NzhGMTFFNkEyMEVDNzhEOUY1RkQxRjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjljYjgzNjY2LWYxYWUtNGMyZi1hMGEwLThhODJmYjIxM2U0MyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmU1NDE3YzFmLTllODAtMTE3OS04NjdiLWUyN2Y3M2VkMTZkOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAkKAA4ALAAAAABaAFoAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsz3Ta3HW+3bjuV7wbg/H7BYXEYu7YGCaVjuDr6Hwqjy2qEzphNlTaIZfi/ZqY2zHZW0KL1RVGeRS2wiXD+ad+x8jZHXx9GX9MO2GDG3mGGG52iX5ojUFVRWWXmJmam1IknJ+goXoioqWmnHSnqquUpDxVsLGys7S1tk6Uj4dIt72+v7K5IcKQF8R7r1asPC7HHs7L0Z3Ogclr0tES1BzH2NiLSMPWUcnAsd7gTboaxLnm77e527vq2uMm8FXy98/j8z77woFoxw9Fp2pI/mUgKBDMQXrp3iATqNBeD3rMIBaqN9BfwWsZ/7kBmpTwo0aLHIF4kchupIWAKftRLHgpDYeND7skq2jMY0NyjlgqwnlRZ8mfCDlCqyO0A1E7MJueBBrTnc0RG1lGXbfQZ0w8sFLEAhmRK0khKJtWConv6lZXaKlKNWpmyk6TJxVqoWvw7iu49fQyLOrJWitx4QTzQhnX4sTAeLsmjuyO8cWcLScjFan5K9kkl9KapSuG50vDlFtlkjtaNGvEkDeDXIlprsrOts+WjkzVUZmrkmN7zsu7dzkiK3OTRl78NO7WQenK7vkc9u7pt9UJrZz0+vDMwpVPGGuBPOfwrbO/8SbNu3j1oNkvc5/+s3T5oraYhn8f/6e1zfFHQZY+BPbiWkdIFajgLMs9ZgoX+1nmn0upYOfchPK95iCG+L034HHpAAAAh6V4OOAsQYh4hAAC3EJAMO3VV55WmLBYiwAv+pKiirzoE+CGDbAoZFu4eCGiiOdYCBgPQrK4wiVHXlDJk0w4mUUZAGgAXApNDtmMkVn+0KWVLhxppojFsHBmlGm26eabcMYp55x01mnnnXjSEAEAIfkECQoADgAsAAAAAFoAWgAABP/QyUmrvTjrzbv/YCiOZGmeaKqubOu+cCxbTT3fX23jfKbXDEZvSPk1gkSiMShM8pZMZ1HngjalEiPLip1qUdZr12Hcmbhj73eETlMY5QbpxxS7JfCyqH2v5NccfH1+cR6CgxVxchqHiIR6GGGOG38/kXRIkxyVR2SKn6CFbKGkpaangDmoq6ytdh2tsbKhmaqzpHW5uru8lbWGOr3Cw8TFvJghmMbLUVvBrxvImmq/sM+Jt9mWE9K2R2La4VRZ1yDdnuLaTefWQFfp4kjsgeXo38z4xMjz0fXK+QB37asHzB03gkqu8WPkD+GQgQbNNYxIY1zBRf0MLvQx8duFVBn/zXDU6DBkrXllqo3cdokkxYsnEaZUudJiRZceJVI8N5NmTZsHcfpcGXOnpBCcRJITCo2h0afuhlISFdTjxpY57RW91/QDJ3AKSzrNyi5XCl/vwr5sB6RqtToZPZhdalXs2LRrvXwEqgEuXXl2ia4Ty7Jq1qX0mO4pt7DbTDWJ6+aNnKkx48duu2oVchVrZcKXqW6+yzmw58GTR4eie/im5NZsP6emhUsqRNiUUeO2F4cJqGanRycLvfs3kqSmb0sNLnxvzyvIlyvXzPyqMD9oqU9fHLEzLwy7TJZOTfovdRF+y3d2ThZeNsDkBRt272r87vLz6Z+Kst71L/2x8GcapHsqBWTgMOZxB9uBDIbXnDcAAricaxFKeB42FUY4IYbpHJCAAgYYsEABoQRgYgA6nIiicaNw9VUQ/zCoIhMz6tKfBcco84MAAjTIQI0/npjjfZtspQiPKdTogJI4AgcGKDwKoIKQKprok5MpCFBGlEgmWSWTPPBoBJctBCkklmFyKaULZgYwVxJqwnDmhtN4hWadJtyJ55589unnn4AGKuigG0QAACH5BAkKAA4ALAAAAABaAFoAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsW009319t43ym1wxGb0j5NYJEojEoTPKWTOfzF5VOfi1o0yoxNlTaLdf7PXmr3CvZpE1bGORyKOx+x+Udev0CX3vaexhBcRyAgRmDXhp6U3ghfVQ+VEhDd5aXmJmajjmbnp+gOiShpKWWlCCmqqtHYn86TLGys7S1tre3kyKTuL2+v7mwrnnChxi6c8VqrFnKqc4OrNJ4yM9AYtPSy627xaLZzNHQr9fiNsC22ULVneWR6PC/k+zk3PQk8bHz48Tu/ErC7hXy9q9SwIKLCJZbgaVeooXW7CHsImpgww37ILaTqLGIIotG/zAe7NiPI7cKd1BJ8nMh48mISNidUomIUMuRLzfGdJYyloeHsG5eEyjSH8Qzsx5Byklx6MRjCl/y8olPFg2cNEvu7Jg0BVWPTkmC3MrUZ8VlYLAOG7sO4cWmnEa4zMrWHFOwJ5egmLu2qEm6dvMS1bkUcEKjd+FWOYNyh9bCfQ//7csr8Fm7hAevnAx14Z1thvECDd2Zs1DBmkgrhtwNMWBFS2ZGFs06mevIsnvOBl0bZluxcJEKWfqUt+bSZEP3nDBa9erjp5PvBtrKFS2HvQnbVW2LDxq20K+6BqeqeWuT5Mtnxx48/SdZ4RtDJO4+tb7i4nPm2/+L9/ms/AVYi3Z/tiVmTHx41Vefc/IpuOBupzmYHoMJZoPAAQ5SWEEtwkCGDgHBXOMhEwhuSEuHU+FCAIi48JIiJN/ttVxaQBjCXIxmKPKVjHHgiGOOYUAYERQGlbhRZUNc98KLSXT1woDGtLBjlFRWaeWVWGap5ZZcdumlChEAACH5BAkKAA4ALAAAAABaAFoAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsW009319t43ym1wxGbzj5AYXEoTGITOKWTOfzx2xKHb8W1Ho1NlTba8X7PW25YnJ55I2KLQw1mxp8Y+LyHL1uv6vXGmd9GkF5gXuDHIVkPoiJHYtGF4JEf5aXmJmZJZqdnp+GIaCjpJloHKWpqlCiOlWvsLGys7S1THStR7a7vL2xuCDAj5Oup4dHwxjCHsvJRcW5DXxYqzouzajQ1NXc1hLYG8Dd4zvgx9JI5ONC5o3I2+i+sOSR6NF8e/L6tXTtytr+POyr0k+bnncBbxR8d9AevGkpsjArlnAMQIPEdmTzthFdRQri/zA+k9SBUTiKIjviE/kHojuS/458HOlwCc02Ll9KzOgx5UmGVL6pefUBjxee9XL+dPiQ3Rk3RY3upJnU2MtpuPJBFSEViEWZPs9hNQhLhVSIC5lOBErWDccSZal2tRqTqbmpQgFB2prV1b0mdzHCBKlRrFOGJQ0GRjw4r966dWY2lQvZCivKhic3HIuYMGObjtUiPSx6KWevoz3vdHSVtNLWqo0JGwovnmnXdGkI9smo09bKmteqBafqd2rJyxYP7Vost+PIYYFjvsBcF5kqiZEh3925wq3mSGQJh949881UEmJtxh2Mu7pU5EubD/1+VPzX0unX10R0e2fw+nDTX5l0qXk30IG0xOacgtThtxeCaBGoW3nO+LffhRTWheF+Dk64IYcLqjZOACQGUEABJA6g4orVdNjgPDoAIKNWENYDwA8y/pIhITA2cCNONRIUI44A2MLCj17IyIIRSCp5h4sgIBmjjAAsqYaTPTBJZZUrXInlEFt+CQYZVDoRZgwzTunMCmGWuWYLW74p55x01mnnnXjmqecNEQAAIfkEBQoADgAsAAAAAFoAWgAABP/QyUmrvTjrzbv/YCiOZGmeaKqubOu+cCzP9Nrcdb7duO5XvBuD8fsFhcSi7jhMKh3BF7P5lBxb02HVelUdG9Qtt3vKiinfRjnYdJ6h31LW/XYw0qJvuE65x0FmfBdpah1zghh+ZBmHiIl4jIGOGYo8kTx7NYSbnJ2en5t5oKOkpaEhpqmqo1ofq6+wenQ7mG22t7i5uru8TWyzGr+9w8TFub+AtZODyq7NY7AwyM5IaLHXURPTHttw2NjW1dRgSd/m5NCt3M3Cxm3nrd0c0+3u9rr0z4bs+iP37/zErRMnz0hAdOPi9TNIcGGwg+qY9dg38WFDgRQRFtSWLWNFiRr/HV4KiTGcSCCEMOQrSesiQpO1gIH8Y1IhS4skX0KLKfNCpUXeckacB9FNmjYhhhytWe4kSJsvZWUC4evZSp1EXaqb09MDLo5au1pgks5JOxZIy6pNJmTtBFuXUCCbgkqZPKSWUH4UVU1Y3b4nO4IFY2JuzL/oNroNOpRtYqcq7QbWRzZcRi2KcWJ2ygZmIWiXiWQeufnm4M8pFz8VDXk1466lVI+VbFoz69o7SzXW+xh3ZMC+g07ZNHU2cKyhX3f4aYtQcd6lkWftLd1nrtzVmSpHHH03pbRv/bak7t228HOvuot1jR6ber7U2696z72p/Pm3s5N28q9/se2OReTffYC7AJjQemeMZpx8MSjI230Q6rdghPeV9xuF8lmYyC48kcMLhhJuiIsw9RDo3IitOQbJBsawwQMAANxymA2cwEjjFzZapyFiL8Lo4404iojFET4WCSSRPgRRJABSEJKjDksyGUOUP/pg5AxUPrnMllx26eWXYIYp5phkjhkBADs=">',state:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 80" width="100" height="100"><defs><path id="pid-64-svgo-a" d="M0 0h80v80H0z"/><path d="M52.546 8.014a3.998 3.998 0 014.222 3.077c.104.446.093.808.039 1.138a2.74 2.74 0 01-.312.881c-.073.132-.16.254-.246.376l-.257.366-.521.73c-.7.969-1.415 1.926-2.154 2.866l-.015.02a240.945 240.945 0 015.986.341l1.643.123.822.066.41.034.206.018.103.008.115.012c1.266.116 2.516.45 3.677.975a11.663 11.663 0 013.166 2.114c.931.87 1.719 1.895 2.321 3.022a11.595 11.595 0 011.224 3.613c.03.157.046.316.068.474l.015.119.013.112.022.206.085.822.159 1.646c.1 1.098.19 2.198.27 3.298.315 4.4.463 8.829.36 13.255a166.489 166.489 0 01-.843 13.213c-.012.127-.034.297-.053.454a7.589 7.589 0 01-.072.475l-.04.237-.05.236a11.762 11.762 0 01-.74 2.287 11.755 11.755 0 01-5.118 5.57 11.705 11.705 0 01-3.623 1.263c-.158.024-.316.052-.475.072l-.477.053-.821.071-1.644.134c-1.096.086-2.192.16-3.288.23a260.08 260.08 0 01-6.578.325c-8.772.324-17.546.22-26.313-.302a242.458 242.458 0 01-3.287-.22l-1.643-.129-.822-.069-.41-.035-.206-.018c-.068-.006-.133-.01-.218-.02a11.566 11.566 0 01-3.7-.992 11.732 11.732 0 01-5.497-5.178 11.73 11.73 0 01-1.215-3.627c-.024-.158-.051-.316-.067-.475l-.026-.238-.013-.119-.01-.103-.07-.823-.132-1.648a190.637 190.637 0 01-.22-3.298c-.256-4.399-.358-8.817-.258-13.233.099-4.412.372-8.811.788-13.197a11.65 11.65 0 013.039-6.835 11.585 11.585 0 016.572-3.563c.157-.023.312-.051.47-.07l.47-.05.82-.07 1.643-.13a228.493 228.493 0 016.647-.405l-.041-.05a88.145 88.145 0 01-2.154-2.867l-.52-.73-.258-.366c-.086-.122-.173-.244-.246-.376a2.74 2.74 0 01-.312-.881 2.808 2.808 0 01.04-1.138 3.998 3.998 0 014.22-3.077 2.8 2.8 0 011.093.313c.294.155.538.347.742.568.102.11.19.23.28.35l.27.359.532.72a88.059 88.059 0 012.06 2.936 73.036 73.036 0 011.929 3.03c.187.313.373.628.556.945 2.724-.047 5.447-.056 8.17-.038.748.006 1.496.015 2.244.026.18-.313.364-.624.549-.934a73.281 73.281 0 011.93-3.03 88.737 88.737 0 012.059-2.935l.533-.72.268-.359c.09-.12.179-.24.281-.35a2.8 2.8 0 011.834-.881zM30.13 34.631a4 4 0 00-.418 1.42 91.157 91.157 0 00-.446 9.128c0 2.828.121 5.656.364 8.483l.11 1.212a4 4 0 005.858 3.143c2.82-1.498 5.55-3.033 8.193-4.606a177.41 177.41 0 005.896-3.666l1.434-.942a4 4 0 00.047-6.632 137.703 137.703 0 00-7.377-4.708 146.88 146.88 0 00-6.879-3.849l-1.4-.725a4 4 0 00-5.382 1.742z" id="pid-64-svgo-d"/><filter x="-15.4%" y="-16.3%" width="130.9%" height="132.5%" filterUnits="objectBoundingBox" id="pid-64-svgo-c"><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feOffset in="SourceAlpha" result="shadowOffsetOuter2"/><feGaussianBlur stdDeviation="3.5" in="shadowOffsetOuter2" result="shadowBlurOuter2"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowBlurOuter2" result="shadowMatrixOuter2"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="shadowMatrixOuter2"/></feMerge></filter></defs><g fill="none" fill-rule="evenodd" opacity=".8"><mask id="pid-64-svgo-b" fill="#fff"><use xlink:href="#pid-64-svgo-a"/></mask><g mask="url(#pid-64-svgo-b)"><use fill="#000" filter="url(#pid-64-svgo-c)" xlink:href="#pid-64-svgo-d"/><use fill="#FFF" xlink:href="#pid-64-svgo-d"/></g></g></svg>',indicator:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="16" height="16">
        <path d="M16.118 3.667h.382a3.667 3.667 0 013.667 3.667v7.333a3.667 3.667 0 01-3.667 3.667h-11a3.667 3.667 0 01-3.667-3.667V7.333A3.667 3.667 0 015.5 3.666h.382L4.95 2.053a1.1 1.1 0 011.906-1.1l1.567 2.714h5.156L15.146.953a1.101 1.101 0 011.906 1.1l-.934 1.614z" fill="#333"></path>
        <path d="M5.561 5.194h10.878a2.2 2.2 0 012.2 2.2v7.211a2.2 2.2 0 01-2.2 2.2H5.561a2.2 2.2 0 01-2.2-2.2V7.394a2.2 2.2 0 012.2-2.2z" fill="#fff"></path>
        <path d="M6.967 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1zM15.033 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1z" fill="#333"></path>
    </svg>
        `,fullscreenWebOn:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="28" height="28" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_172"><rect width="88" height="88" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_172)"><g transform="matrix(1,0,0,1,44,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-14,-20 C-14,-20 -26,-20 -26,-20 C-27.049999237060547,-20 -27.920000076293945,-19.18000030517578 -27.989999771118164,-18.149999618530273 C-27.989999771118164,-18.149999618530273 -28,-18 -28,-18 C-28,-18 -28,-6 -28,-6 C-28,-4.949999809265137 -27.18000030517578,-4.079999923706055 -26.149999618530273,-4.010000228881836 C-26.149999618530273,-4.010000228881836 -26,-4 -26,-4 C-26,-4 -22,-4 -22,-4 C-20.950000762939453,-4 -20.079999923706055,-4.820000171661377 -20.010000228881836,-5.849999904632568 C-20.010000228881836,-5.849999904632568 -20,-6 -20,-6 C-20,-6 -20,-12 -20,-12 C-20,-12 -14,-12 -14,-12 C-12.949999809265137,-12 -12.079999923706055,-12.819999694824219 -12.010000228881836,-13.850000381469727 C-12.010000228881836,-13.850000381469727 -12,-14 -12,-14 C-12,-14 -12,-18 -12,-18 C-12,-19.049999237060547 -12.819999694824219,-19.920000076293945 -13.850000381469727,-19.989999771118164 C-13.850000381469727,-19.989999771118164 -14,-20 -14,-20z M26,-20 C26,-20 14,-20 14,-20 C12.949999809265137,-20 12.079999923706055,-19.18000030517578 12.010000228881836,-18.149999618530273 C12.010000228881836,-18.149999618530273 12,-18 12,-18 C12,-18 12,-14 12,-14 C12,-12.949999809265137 12.819999694824219,-12.079999923706055 13.850000381469727,-12.010000228881836 C13.850000381469727,-12.010000228881836 14,-12 14,-12 C14,-12 20,-12 20,-12 C20,-12 20,-6 20,-6 C20,-4.949999809265137 20.81999969482422,-4.079999923706055 21.850000381469727,-4.010000228881836 C21.850000381469727,-4.010000228881836 22,-4 22,-4 C22,-4 26,-4 26,-4 C27.049999237060547,-4 27.920000076293945,-4.820000171661377 27.989999771118164,-5.849999904632568 C27.989999771118164,-5.849999904632568 28,-6 28,-6 C28,-6 28,-18 28,-18 C28,-19.049999237060547 27.18000030517578,-19.920000076293945 26.149999618530273,-19.989999771118164 C26.149999618530273,-19.989999771118164 26,-20 26,-20z M-22,4 C-22,4 -26,4 -26,4 C-27.049999237060547,4 -27.920000076293945,4.820000171661377 -27.989999771118164,5.849999904632568 C-27.989999771118164,5.849999904632568 -28,6 -28,6 C-28,6 -28,18 -28,18 C-28,19.049999237060547 -27.18000030517578,19.920000076293945 -26.149999618530273,19.989999771118164 C-26.149999618530273,19.989999771118164 -26,20 -26,20 C-26,20 -14,20 -14,20 C-12.949999809265137,20 -12.079999923706055,19.18000030517578 -12.010000228881836,18.149999618530273 C-12.010000228881836,18.149999618530273 -12,18 -12,18 C-12,18 -12,14 -12,14 C-12,12.949999809265137 -12.819999694824219,12.079999923706055 -13.850000381469727,12.010000228881836 C-13.850000381469727,12.010000228881836 -14,12 -14,12 C-14,12 -20,12 -20,12 C-20,12 -20,6 -20,6 C-20,4.949999809265137 -20.81999969482422,4.079999923706055 -21.850000381469727,4.010000228881836 C-21.850000381469727,4.010000228881836 -22,4 -22,4z M26,4 C26,4 22,4 22,4 C20.950000762939453,4 20.079999923706055,4.820000171661377 20.010000228881836,5.849999904632568 C20.010000228881836,5.849999904632568 20,6 20,6 C20,6 20,12 20,12 C20,12 14,12 14,12 C12.949999809265137,12 12.079999923706055,12.819999694824219 12.010000228881836,13.850000381469727 C12.010000228881836,13.850000381469727 12,14 12,14 C12,14 12,18 12,18 C12,19.049999237060547 12.819999694824219,19.920000076293945 13.850000381469727,19.989999771118164 C13.850000381469727,19.989999771118164 14,20 14,20 C14,20 26,20 26,20 C27.049999237060547,20 27.920000076293945,19.18000030517578 27.989999771118164,18.149999618530273 C27.989999771118164,18.149999618530273 28,18 28,18 C28,18 28,6 28,6 C28,4.949999809265137 27.18000030517578,4.079999923706055 26.149999618530273,4.010000228881836 C26.149999618530273,4.010000228881836 26,4 26,4z M28,-28 C32.41999816894531,-28 36,-24.420000076293945 36,-20 C36,-20 36,20 36,20 C36,24.420000076293945 32.41999816894531,28 28,28 C28,28 -28,28 -28,28 C-32.41999816894531,28 -36,24.420000076293945 -36,20 C-36,20 -36,-20 -36,-20 C-36,-24.420000076293945 -32.41999816894531,-28 -28,-28 C-28,-28 28,-28 28,-28z"></path></g></g></g></svg>',fullscreenWebOff:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="28" height="28" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_177"><rect width="88" height="88" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_177)"><g transform="matrix(1,0,0,1,44,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-14,-20 C-14,-20 -18,-20 -18,-20 C-19.049999237060547,-20 -19.920000076293945,-19.18000030517578 -19.989999771118164,-18.149999618530273 C-19.989999771118164,-18.149999618530273 -20,-18 -20,-18 C-20,-18 -20,-12 -20,-12 C-20,-12 -26,-12 -26,-12 C-27.049999237060547,-12 -27.920000076293945,-11.180000305175781 -27.989999771118164,-10.149999618530273 C-27.989999771118164,-10.149999618530273 -28,-10 -28,-10 C-28,-10 -28,-6 -28,-6 C-28,-4.949999809265137 -27.18000030517578,-4.079999923706055 -26.149999618530273,-4.010000228881836 C-26.149999618530273,-4.010000228881836 -26,-4 -26,-4 C-26,-4 -14,-4 -14,-4 C-12.949999809265137,-4 -12.079999923706055,-4.820000171661377 -12.010000228881836,-5.849999904632568 C-12.010000228881836,-5.849999904632568 -12,-6 -12,-6 C-12,-6 -12,-18 -12,-18 C-12,-19.049999237060547 -12.819999694824219,-19.920000076293945 -13.850000381469727,-19.989999771118164 C-13.850000381469727,-19.989999771118164 -14,-20 -14,-20z M18,-20 C18,-20 14,-20 14,-20 C12.949999809265137,-20 12.079999923706055,-19.18000030517578 12.010000228881836,-18.149999618530273 C12.010000228881836,-18.149999618530273 12,-18 12,-18 C12,-18 12,-6 12,-6 C12,-4.949999809265137 12.819999694824219,-4.079999923706055 13.850000381469727,-4.010000228881836 C13.850000381469727,-4.010000228881836 14,-4 14,-4 C14,-4 26,-4 26,-4 C27.049999237060547,-4 27.920000076293945,-4.820000171661377 27.989999771118164,-5.849999904632568 C27.989999771118164,-5.849999904632568 28,-6 28,-6 C28,-6 28,-10 28,-10 C28,-11.050000190734863 27.18000030517578,-11.920000076293945 26.149999618530273,-11.989999771118164 C26.149999618530273,-11.989999771118164 26,-12 26,-12 C26,-12 20,-12 20,-12 C20,-12 20,-18 20,-18 C20,-19.049999237060547 19.18000030517578,-19.920000076293945 18.149999618530273,-19.989999771118164 C18.149999618530273,-19.989999771118164 18,-20 18,-20z M-14,4 C-14,4 -26,4 -26,4 C-27.049999237060547,4 -27.920000076293945,4.820000171661377 -27.989999771118164,5.849999904632568 C-27.989999771118164,5.849999904632568 -28,6 -28,6 C-28,6 -28,10 -28,10 C-28,11.050000190734863 -27.18000030517578,11.920000076293945 -26.149999618530273,11.989999771118164 C-26.149999618530273,11.989999771118164 -26,12 -26,12 C-26,12 -20,12 -20,12 C-20,12 -20,18 -20,18 C-20,19.049999237060547 -19.18000030517578,19.920000076293945 -18.149999618530273,19.989999771118164 C-18.149999618530273,19.989999771118164 -18,20 -18,20 C-18,20 -14,20 -14,20 C-12.949999809265137,20 -12.079999923706055,19.18000030517578 -12.010000228881836,18.149999618530273 C-12.010000228881836,18.149999618530273 -12,18 -12,18 C-12,18 -12,6 -12,6 C-12,4.949999809265137 -12.819999694824219,4.079999923706055 -13.850000381469727,4.010000228881836 C-13.850000381469727,4.010000228881836 -14,4 -14,4z M26,4 C26,4 14,4 14,4 C12.949999809265137,4 12.079999923706055,4.820000171661377 12.010000228881836,5.849999904632568 C12.010000228881836,5.849999904632568 12,6 12,6 C12,6 12,18 12,18 C12,19.049999237060547 12.819999694824219,19.920000076293945 13.850000381469727,19.989999771118164 C13.850000381469727,19.989999771118164 14,20 14,20 C14,20 18,20 18,20 C19.049999237060547,20 19.920000076293945,19.18000030517578 19.989999771118164,18.149999618530273 C19.989999771118164,18.149999618530273 20,18 20,18 C20,18 20,12 20,12 C20,12 26,12 26,12 C27.049999237060547,12 27.920000076293945,11.180000305175781 27.989999771118164,10.149999618530273 C27.989999771118164,10.149999618530273 28,10 28,10 C28,10 28,6 28,6 C28,4.949999809265137 27.18000030517578,4.079999923706055 26.149999618530273,4.010000228881836 C26.149999618530273,4.010000228881836 26,4 26,4z M28,-28 C32.41999816894531,-28 36,-24.420000076293945 36,-20 C36,-20 36,20 36,20 C36,24.420000076293945 32.41999816894531,28 28,28 C28,28 -28,28 -28,28 C-32.41999816894531,28 -36,24.420000076293945 -36,20 C-36,20 -36,-20 -36,-20 C-36,-24.420000076293945 -32.41999816894531,-28 -28,-28 C-28,-28 28,-28 28,-28z"></path></g></g></g></svg>'},Yt=()=>({container:"",url:"",volume:1,isLive:false,muted:false,autoplay:false,pip:false,autoMini:false,screenshot:false,setting:true,loop:false,flip:true,playbackRate:true,autoSize:false,aspectRatio:false,fullscreen:true,fullscreenWeb:true,subtitleOffset:true,miniProgressBar:true,mutex:false,backdrop:true,playsInline:false,autoPlayback:true,airplay:true,lock:true,fastForward:true,theme:v.theme,lang:navigator.language.toLowerCase(),moreVideoAttr:{crossOrigin:"anonymous"},icons:Cr}),Ie="[artplayer-plugin-quality]：",Fe="artplayer-plugin-quality",Ee={AVC:7,HEVC:12,AV1:13};class wr{art;from;$key={SETTING_KEY:"video-playback-codeid"};constructor(t,r){this.art=t,this.from=r,this.updateSetting();}updateSetting(t){let r=this.getSetting();if(Array.isArray(t?.acceptCodeIdList)){for(let i=0;i<r.selector.length;i++){const a=r.selector[i];t.acceptCodeIdList.findIndex(l=>l.toString()===a.value.toString())===-1&&(r.selector.splice(i,1),i--);}if(!r.selector.find(i=>i.default)&&r.selector.length)if(typeof t?.defaultCodeId=="number"){let i=r.selector.findIndex(a=>a.value===t.defaultCodeId);i!==-1?(r.selector[i].default=true,r.tooltip=r.selector[i].html):(r.selector[0].default=true,r.tooltip=r.selector[0].html);}else r.selector[0].default=true,r.tooltip=r.selector[0].html;}this.art.setting.find(this.$key.SETTING_KEY)?this.art.setting.update(r):this.art.setting.add(r);}getSetting(){const t=this;let r=this.getUserChooseVideoCodingCode(),n=[{html:"AV1",value:Ee.AV1},{html:"HEVC",value:Ee.HEVC},{html:"AVC",value:Ee.AVC}].map(o=>Object.assign(o,{default:o.value===r}));n.find(o=>o.default)||(n=n.map((o,l)=>(o.default=l===0,o)),console.warn(Ie+"没有找到用户选择对应的画质编码，将使用排序第一个的画质："+n[0].html));let a=n.find(o=>o.default);return {name:this.$key.SETTING_KEY,html:"播放策略",tooltip:a.html,icon:'<svg t="1727413004405" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3183" width="24" height="24"><path d="M170.666667 256h682.666666c23.466667 0 42.666667 19.2 42.666667 42.666667v170.666666h85.333333V256c0-46.933333-38.4-85.333333-85.333333-85.333333H128c-46.933333 0-85.333333 38.4-85.333333 85.333333v512c0 46.933333 38.4 85.333333 85.333333 85.333333h384v-85.333333H170.666667c-23.466667 0-42.666667-19.2-42.666667-42.666667V298.666667c0-23.466667 19.2-42.666667 42.666667-42.666667z" p-id="3184"></path><path d="M640 512L384 341.333333v341.333334zM968.96 786.346667c1.28-12.373333 1.706667-24.746667 0.426667-36.693334l45.653333-36.266666c4.266667-3.413333 5.12-8.96 2.56-13.653334l-43.946667-76.373333c-2.56-4.693333-8.106667-6.4-13.226666-4.693333l-54.613334 21.333333a146.773333 146.773333 0 0 0-32-17.92l-8.533333-58.026667a10.624 10.624 0 0 0-10.666667-9.386666h-88.32c-5.12 0-9.813333 3.84-10.666666 8.96l-8.533334 58.026666c-11.093333 4.693333-21.76 11.093333-31.573333 17.92l-54.613333-21.333333c-5.12-2.133333-10.666667 0-13.226667 4.693333l-43.946667 76.373334c-2.56 4.693333-1.706667 10.24 2.56 13.653333l45.653334 36.693333c-1.28 12.373333-1.706667 24.746667-0.426667 36.693334l-45.653333 36.266666c-4.266667 3.413333-5.12 8.96-2.56 13.653334l43.946666 76.373333c2.56 4.693333 8.106667 6.4 13.226667 4.693333l54.186667-21.333333c9.813333 7.253333 20.48 13.226667 32 17.92l8.533333 58.026667c0.853333 5.12 5.12 8.96 10.666667 8.96h88.32c5.12 0 9.813333-3.84 10.666666-8.96l8.533334-58.026667c11.093333-4.693333 21.76-11.093333 31.573333-17.92l54.613333 21.333333c5.12 2.133333 10.666667 0 13.226667-4.693333l43.946667-76.373333c2.56-4.693333 1.706667-10.24-2.56-13.653334l-45.226667-36.266666zM810.666667 832c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64z" p-id="3185"></path></svg>',selector:n,onSelect:function(o){let l=o.value;return t.setCurrentVideoCodingCode(l),t.onSettingSelect(l),o.html}}}onSettingSelect(t){}get storageVideoCodingKey(){return `bili-${this.from}-artplayer-videoCodingCode`}setCurrentVideoCodingCode(t){this.art.storage.set(this.storageVideoCodingKey,t);}getUserChooseVideoCodingCode(){let t=this.art.storage.get(this.storageVideoCodingKey)||Ee.AV1;return Object.values(Ee).includes(t)||(console.error(Ie+"意外情况，选择的编码格式不是允许的编码，将强制使用默认(av1)，防止过滤掉的视频链接为空："+t),t=Ee.AV1),t}}class Ar extends wr{$data={qualityOption:null,qualityOptionList:[],qualityCodeIdList:[],currentQualityCodecId:Ee.AV1,currentSelectQualityInfo:null,currentQualityOption:null};constructor(t,r){super(t,r);}setCurrentQualityOption(t=null){this.$data.currentQualityOption=null,this.$data.currentQualityOption=t;}getStorageKey(t){return `artplayer-quality-${t}`}update(t){if(this.$data.qualityOption=null,this.$data.qualityOption=t,this.$data.qualityOptionList=[],this.$data.qualityCodeIdList=[],this.$data.currentSelectQualityInfo=null,this.$data.currentQualityCodecId=void 0,this.setCurrentQualityOption(),t.qualityList.length){let r=this.getQualityInfo();this.addControls(),super.updateSetting({acceptCodeIdList:this.$data.qualityCodeIdList,defaultCodeId:this.$data.currentQualityCodecId}),this.art.url=r.url;}else this.removeControls();}getControlsOption(){const t=this;let r=this.$data.qualityOptionList.map((i,a)=>({default:a===this.$data.currentSelectQualityInfo?.index,html:i.html,url:i.url,quality:i.quality,frameRate:i.frameRate,mimeType:i.mimeType,codecid:i.codecid,codecs:i.codecs,bandwidth:i.bandwidth}));return {name:Fe,index:10,position:"right",html:this.$data.currentSelectQualityInfo.html,selector:r,onSelect:function(i){let a=i;return console.log(Ie+"切换画质",a),t.art.switchQuality(a.url),t.art.storage.set(t.getStorageKey(t.$data.qualityOption.from),{quality:a.quality}),t.setCurrentQualityOption({html:a.html,url:a.url,quality:a.quality,frameRate:a.frameRate,mimeType:a.mimeType,codecid:a.codecid,codecs:a.codecs,bandwidth:a.bandwidth}),i.html}}}addControls(){if(this.isAddControls())this.updateQualityControls();else {let t=this.getControlsOption();this.art.controls.add(t);}}getQualityInfo(){let t=this.getUserChooseVideoCodingCode(),r=this.$data.qualityOption.qualityList.filter(s=>s.codecid===t);r.sort((s,c)=>c.quality-s.quality);const n={};for(let s=0;s<this.$data.qualityOption.qualityList.length;s++){const c=this.$data.qualityOption.qualityList[s],p=n[c.codecid]||[];p.push(c),n[c.codecid]=p;}r.length===0&&(r=Object.values(n)[0],this.$data.currentQualityCodecId=r[0].codecid,console.warn(Ie+"该画质："+t+"不存在，将使用第一个画质",r)),this.$data.qualityOptionList=[],this.$data.qualityOptionList=r,this.$data.qualityCodeIdList=Object.keys(n);let i=r[0];const a=this.getStorageKey(this.$data.qualityOption.from),o=this.art.storage.get(a);let l={index:0,html:i?.html,url:i?.url};if(this.setCurrentQualityOption(r[0]),o){const s=r.findIndex(c=>c.quality===o.quality);if(s!==-1){const c=r[s];l.index=s,l.url=c.url,l.html=c.html,this.setCurrentQualityOption(c);}else console.warn(Ie+"没有找到上次选的画质，使用当前默认第一个画质");}return this.$data.currentSelectQualityInfo=null,this.$data.currentSelectQualityInfo=l,l}updateQualityControls(){let t=this.getControlsOption();console.log(Ie+"更新画质切换面板信息",this.$data.qualityOptionList,this.$data.currentQualityOption),this.art.controls.update(t);}removeControls(){this.isAddControls()&&this.art.controls.remove(Fe);}isAddControls(){return Reflect.has(this.art.controls,Fe)}onSettingSelect(t){this.getQualityInfo(),this.updateQualityControls(),this.updateSetting({acceptCodeIdList:this.$data.qualityCodeIdList,defaultCodeId:this.$data.currentQualityCodecId}),this.$data.currentSelectQualityInfo&&(this.art.url=this.$data.currentSelectQualityInfo.url);}}const Kt=e=>t=>{let r=new Ar(t,e.from);return r.update(e),{name:Fe,update(n){r.update(n);},getCurrentQualityOption(){return r.$data.currentQualityOption}}},Qe={$data:{art:null},$key:{plugin_KEY:"artplayer-plugin-toast"},$flag:{isInitCSS:false},$config:{originToast:"art-layer-auto-playback",hideClassName:"art-toast-hide-opacity",prefix:"mplayer-toast-gm"},$el:{get $originPlayer(){return document.querySelector(".art-video-player .art-layers")}},toast(e){typeof e=="string"&&(e={text:e}),this.initCSS();let t=e.parent??this.$el.$originPlayer;if(!t)throw new TypeError("toast parent is null");this.mutationMPlayerOriginToast(t);let r=m.createElement("div",{"data-from":"gm"});if(m.addClass(r,this.$config.prefix),e.showCloseBtn){let o=m.createElement("div",{className:this.$config.prefix+"-close",innerHTML:`
                    <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="m571.733 512 268.8-268.8c17.067-17.067 17.067-42.667 0-59.733-17.066-17.067-42.666-17.067-59.733 0L512 452.267l-268.8-268.8c-17.067-17.067-42.667-17.067-59.733 0-17.067 17.066-17.067 42.666 0 59.733l268.8 268.8-268.8 268.8c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.534 19.2 12.8 29.866 12.8s21.334-4.266 29.867-12.8l268.8-268.8 268.8 268.8c8.533 8.534 19.2 12.8 29.867 12.8s21.333-4.266 29.866-12.8c17.067-17.066 17.067-42.666 0-59.733L571.733 512z"></path></svg>
                `});r.appendChild(o),m.on(o,"click",l=>{d.preventEvent(l),this.closeToast(r);},{capture:true});}let n=m.createElement("span",{className:this.$config.prefix+"-text",innerText:e.text});if(r.appendChild(n),typeof e.timeText=="string"&&e.timeText.trim()!=""){let o=m.createElement("span",{className:this.$config.prefix+"-time",innerText:e.timeText});r.appendChild(o);}if(typeof e.jumpText=="string"&&e.jumpText.trim()!=""){let o=m.createElement("span",{className:this.$config.prefix+"-jump",innerText:e.jumpText});r.appendChild(o),m.on(o,"click",l=>{typeof e.jumpClickCallback=="function"&&(d.preventEvent(l),e.jumpClickCallback(l));},{capture:true});}this.setTransitionendEvent(r,e);let i=typeof e.timeout=="number"&&!isNaN(e.timeout)?e.timeout:3500;t.appendChild(r);let a=setTimeout(()=>{this.closeToast(r);},i);return {$toast:r,timeoutId:a,close:()=>{clearTimeout(a),this.closeToast(r);}}},initCSS(){this.$flag.isInitCSS||(this.$flag.isInitCSS=true,R(`
		.${this.$config.prefix}.mplayer-show {
			opacity: 1;
			visibility: visible;
			z-index: 40;
		}

		.mplayer-toast, .${this.$config.prefix} {
			-webkit-transition-property: opacity, bottom;
			transition-property: opacity, bottom;
		}

		.${this.$config.prefix} {
            backdrop-filter: saturate(180%) blur(20px);
            background-color: #000000bf !important;
			border-radius: var(--art-border-radius);
			/* bottom: 48px; */
            bottom: calc( calc( var(--art-control-height) + var(--art-bottom-gap) ) * 1 + 10px);
			opacity: 1;
			overflow: hidden;
			padding: 10px;
            gap: 10px;
            line-height: 1;
			position: absolute;
			text-align: center;
			-webkit-transition: opacity .3s;
			transition: opacity .3s;
            left: var(--art-padding);
            display: flex;
            align-items: center;
			pointer-events: auto;
		}
        .art-video-player.art-backdrop .${this.$config.prefix}{
            backdrop-filter: saturate(180%) blur(20px);
            background-color: #000000bf !important;
        }

		.${this.$config.prefix}-close {
            cursor: pointer;
            justify-content: center;
            align-items: center;
            display: flex;
		}
		.${this.$config.prefix}-close svg{
            fill: var(--art-theme);
            width: 15px;
            height: 15px;
        }

		.${this.$config.prefix}-jump {
            color: var(--art-theme);
            cursor: pointer;
		}
		`),R(`
        .${this.$config.hideClassName}{
            opacity: 0;
            visibility: hidden;
        }
        `));},mutationMPlayerOriginToast(e){let t=this.$el.$originPlayer;t&&(t.hasAttribute("data-mutation")||(u.success("添加观察器，动态更新toast的位置"),t.setAttribute("data-mutation","gm"),d.mutationObserver(t,{config:{subtree:true,childList:true},immediate:true,callback:()=>{this.updatePageToastBottom();}})));},updatePageToastBottom(){let e=Array.from(document.querySelectorAll(`.${this.$config.prefix}`)).concat(Array.from(document.querySelectorAll(".".concat(this.$config.originToast))));e.length&&(e.length-1,e.forEach((t,r)=>{t.setAttribute("data-transition","move"),t.style.bottom=`calc( calc( var(--art-control-height) + var(--art-bottom-gap) ) * ${r+1} + 10px)`;}));},closeToast(e){e.classList.add(this.$config.hideClassName);},getTransitionendEventNameList(){return ["webkitTransitionEnd","mozTransitionEnd","MSTransitionEnd","otransitionend","transitionend"]},setTransitionendEvent(e,t){let r=this,n=this.getTransitionendEventNameList();m.on(e,n,function(i){let a=e.getAttribute("data-transition");if(e.classList.contains(r.$config.hideClassName)){typeof t=="object"&&typeof t?.closeCallback=="function"&&t.closeCallback(),e.remove();return}if(a==="move"){e.removeAttribute("data-transition");return}},{capture:true});}},Zt=e=>t=>(Qe.$data.art=t,{name:Qe.$key.plugin_KEY,toast(...r){return Qe.toast(...r)}}),Er=Qe.$key.plugin_KEY;class Br{art;option;$key={plugin_KEY:"artplayer-plugin-videoStatistics",setting_name:"video-statistics"};$data={intervalId:void 0};constructor(t,r){this.art=t,this.option=r,this.addSetting();}addSetting(){this.art.setting.add({name:this.$key.setting_name,icon:"",html:"视频统计信息",mounted:t=>{let r=t.querySelector(".art-setting-item-left-icon");r.innerHTML=`
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M512.50142 958.397886c-119.320573 0-231.499491-46.465265-315.871087-130.837884C112.258737 743.188406 65.792449 631.010511 65.792449 511.688915c0-119.319549 46.466288-231.499491 130.837884-315.871087C281.002952 111.445208 393.180847 64.979944 512.50142 64.979944s231.499491 46.465265 315.871087 130.837884c84.372619 84.372619 130.837884 196.551538 130.837884 315.871087 0 119.321596-46.465265 231.499491-130.837884 315.871087C744.000911 911.932622 631.821993 958.397886 512.50142 958.397886zM512.50142 105.962334c-223.718271 0-405.726581 182.00831-405.726581 405.726581s182.00831 405.726581 405.726581 405.726581c223.718271 0 405.727605-182.00831 405.727605-405.726581S736.220714 105.962334 512.50142 105.962334z"></path>
                    <path d="M510.150886 775.953647c-18.107403 0-32.745798-14.678304-32.745798-32.785707L477.405087 452.191846c0-18.108426 14.638395-32.785707 32.745798-32.785707 18.107403 0 32.745798 14.678304 32.745798 32.785707l0 290.976094C542.896684 761.275343 528.258289 775.953647 510.150886 775.953647z"></path>
                    <path d="M511.357364 296.458969m-45.080731 0a44.054 44.054 0 1 0 90.161463 0 44.054 44.054 0 1 0-90.161463 0Z"></path>
                </svg>
                `.trim(),this.art.proxy(t,"click",n=>{n.stopPropagation(),n.stopImmediatePropagation(),n.preventDefault(),this.art.setting.show=false,this.isRegisterLayer()?this.updateLayer():this.showLayer(true);},{capture:true});}});}getLayerOption(){let t,r,n,i={key:"Resolution:",value:`${this.art.video.videoWidth} x ${this.art.video.videoHeight}`},a,o,l,s=this.art.plugins[Fe];if(s){let h=s.getCurrentQualityOption();h&&(t={key:"Mime Type:",value:`${h.mimeType}`},h.codecs.trim()!==""&&(t.value+=`;codecs="${h.codecs}"`),h.frameRate.trim()!==""&&(i.value+="@"+h.frameRate),h.bandwidth&&(a={key:"Video DataRate:",value:(h.bandwidth/1024).toFixed(0)+"Kbps"}));}let c=this.art.plugins[lt];if(c){let h=c.getCurrentPlayConfig();h&&(r={key:"Audio Host:",value:new URL(h.url).host},n={key:"Audio Time:",value:c.getAudio().currentTime.toString()},t&&(t.value.trim()!==""&&(t.value+=", "),t.value+=`${h.mimeType}`,h.codecs.trim()!==""&&(t.value+=`;codecs="${h.codecs}"`)),o={key:"Audio DataRate:",value:(h.bandwidth/1024).toFixed(0)+"Kbps"},l={key:"Audio Duration:",value:c.getAudio().duration.toString()});}let p=[t,{key:"Player Type",value:"ArtPlayer@"+at.version},i,a,o,{key:"Video Host:",value:new URL(this.art.url).host},r,{key:"Video Time:",value:this.art.currentTime.toString()},n,{key:"Video Duration:",value:this.art.duration.toString()},l];return p.push(...this?.option?.data||[]),{name:this.$key.setting_name,html:`
            <div class="art-player-video-statistics">
                <style>
					.art-layer-video-statistics{
						height: fit-content;
					}
                    .art-player-video-statistics{
                        left: var(--art-padding);
                        top: var(--art-padding);
                        z-index: 100;
                        border-radius: var(--art-border-radius);
                        background-color: var(--art-widget-background);
                        padding: 10px;
                        font-size: 12px;
                        position: relative;
                        display: flex;
                        flex-direction: column;
                    }
                    .art-player-video-statistics-container-title{
                        text-align: center;
                        position: relative;
                        font-size: 16px;
                        line-height: 30px;
                    }
                    .art-player-video-statistics-close{
                        position: absolute;
                        top: 0;
                        right: 0;
                    }
                    .art-player-video-statistics-close svg{
                        width: 18px;
                        height: 18px;
                    }
                    .art-player-video-statistics-panel{
                        flex-direction: column;
                        gap: 5px;
                        display: flex;
                    }
                    .art-player-video-statistics-panel-item{
                        align-items: center;
                        gap: 10px;
                        display: flex;
                    }
                    .art-player-video-statistics-panel-item .art-player-video-statistics-panel-title{
                        text-align: right;
                        width: 100px;
                        font-size: 12px;
                        font-weight: 500;
                        color: #fff;
                    }
                    .art-player-video-statistics-panel-item .art-player-video-statistics-panel-content{
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        user-select: all;
                        width: 250px;
                        overflow: hidden;
                        color: #999;
                        font-size: 12px;
                        font-weight: 400;
                    }
                    @media (orientation: landscape) {
                        .art-player-video-statistics-panel-item .art-player-video-statistics-panel-content{
                            width: 70vw;
                        }
                    }
					@media (orientation: portrait){
						.art-player-video-statistics{
							width: calc(100% - var(--art-padding));
							right: var(--art-padding);
						}
					}
                </style>
                <div class="art-player-video-statistics-container-title">
                    统计信息
                    <div class="art-player-video-statistics-close">
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" viewBox="0 0 16 16">
                            <path d="m8 6.939 3.182-3.182a.75.75 0 1 1 1.061 1.061L9.061 8l3.182 3.182a.75.75 0 1 1-1.061 1.061L8 9.061l-3.182 3.182a.75.75 0 1 1-1.061-1.061L6.939 8 3.757 4.818a.75.75 0 1 1 1.061-1.061L8 6.939z"></path>
                        </svg>
                    </div>
                </div>
                <div class="art-player-video-statistics-panel">
                    ${p.filter(h=>h!=null).map(h=>`
                        <div class="art-player-video-statistics-panel-item">
                            <div class="art-player-video-statistics-panel-title">${h.key}</div>
                            <div class="art-player-video-statistics-panel-content">${h.value}</div>
                        </div>
                        `).join(`
`)}
                </div>
            </div>
            `,mounted:async h=>{let y=h.querySelector(".art-player-video-statistics-close svg");this.art.proxy(y,"click",C=>{C.stopPropagation(),C.stopImmediatePropagation(),C.preventDefault(),this.closeLayer();});}}}isRegisterLayer(){return this.$key.setting_name in this.art.layers}showLayer(t){clearInterval(this.$data.intervalId);let r=this.getLayerOption();this.art.layers.add(r),t&&(this.unbindUpdateLayerEvent(),this.bindUpdateLayerEvent());}updateLayer(){let t=this.getLayerOption();this.art.layers.update(t);}bindUpdateLayerEvent(){this.art.on("play",this.updateLayerEvent_interval,this),this.art.on("restart",this.updateLayerEvent_once,this),this.art.on("m4sAudio:loadedmetadata",this.updateLayerEvent_once,this),this.art.on("pause",this.updateLayerEvent_clear_interval,this),this.art.on("video:ended",this.updateLayerEvent_clear_interval,this),this.art.playing&&this.updateLayerEvent_interval();}unbindUpdateLayerEvent(){this.art.off("play",this.updateLayerEvent_interval),this.art.off("restart",this.updateLayerEvent_once),this.art.off("m4sAudio:loadedmetadata",this.updateLayerEvent_once),this.art.off("pause",this.updateLayerEvent_clear_interval),this.art.off("video:ended",this.updateLayerEvent_clear_interval);}updateLayerEvent_interval(){clearInterval(this.$data.intervalId),this.$data.intervalId=setInterval(()=>{this.updateLayer();},1500);}updateLayerEvent_once(){this.updateLayer();}updateLayerEvent_clear_interval(){clearInterval(this.$data.intervalId);}closeLayer(){clearInterval(this.$data.intervalId),this.art.layers.remove(this.$key.setting_name),this.unbindUpdateLayerEvent();}update(t){this.option=t;}}const Xt=e=>t=>{let r=new Br(t,e);return {name:r.$key.plugin_KEY,update(n){r.update(n);}}},er=()=>({heatmap:false,color:"#FFFFFF",mode:0,mount:void 0,width:800,points:[],filter:e=>e.text.length<=100,beforeVisible:()=>true,emitter:false,maxLength:50,lockTime:3,theme:d.isThemeDark()?"dark":"light"}),bt=e=>{let t=e.epList||[];if(t.length===1){let r=t[0];return r.pages.map(n=>({isDefault:n.cid===e.cid,title:n.part,aid:e.aid,bvid:e.bvid,cid:n.cid,onSelect(i,a){r.cid=n.cid,it.updateArtPlayerVideoInfo({aid:e.aid,bvid:e.bvid,cid:n.cid,pic:n.first_frame||"",title:n.part,epList:e.epList||[]},true);}}))}else return t.map(r=>({isDefault:r.aid===e.aid&&r.cid===e.cid,title:Qt(r.title),aid:r.aid,bvid:r.bvid,cid:r.cid,onSelect(n,i){it.updateArtPlayerVideoInfo({aid:r.aid,bvid:r.bvid,cid:r.cid,pic:r.arc.pic,title:r.title,epList:e.epList||[]},true);}}))},Be={$data:{art:null,currentOption:null},resetEnv(e){e&&Reflect.set(this.$data,"art",null),Reflect.set(this.$data,"currentOption",null);},async init(e){this.resetEnv(true),this.$data.currentOption=e;const t="artplayer-video-danmaku-option",r=new zt(t),n=r.getLocalArtDanmakuOption(),i={...Yt(),container:e.container,poster:e.poster,settings:[],plugins:[Zt(),Kt({from:"video",qualityList:e.quality})]};return i.type="mp4",f.getValue("artplayer-plugin-video-danmaku-enable")&&i.plugins.push(kt({...er(),danmuku:e.danmukuUrl,speed:n.speed,margin:n.margin,opacity:n.opacity,modes:n.modes,fontSize:n.fontSize,antiOverlap:n.antiOverlap,synchronousPlayback:n.synchronousPlayback,visible:n.visible,beforeEmit(a){return new Promise(o=>{console.log(a),setTimeout(()=>{o(true);},1e3);})}})),f.getValue("artplayer-plugin-video-m4sAudioSupport-enable")&&i.plugins.push(Nt({from:"video",audioList:e.audioList||[]})),f.getValue("artplayer-plugin-video-epChoose-enable")&&i.plugins.push(Wt({EP_LIST:bt(e),automaticBroadcast:true})),f.getValue("artplayer-plugin-video-cc-subtitle-enable")&&i.plugins.push(Ut({from:"video",cid:e.cid,aid:e.aid,bvid:e.bvid})),f.getValue("artplayer-plugin-video-toptoolbar-enable")&&i.plugins.push(Ot({onlineInfoParams:{aid:e.aid,cid:e.cid,bvid:e.bvid},title:e.videoTitle,showWrap:true,showTitle:true,showOnlineTotal:true})),f.getValue("artplayer-plugin-video-statistics-enable")&&i.plugins.push(Xt({data:[]})),f.getValue("bili-video-playerAutoPlayVideo")&&(i.muted=true,i.autoplay=true),this.$data.art=new at(i),r.onConfigChange(this.$data.art),this.$data.art},async update(e,t){this.resetEnv(false),this.$data.currentOption=t,u.info("更新新的播放信息",t),e.pause(),u.info("暂停视频"),e.currentTime=0,u.info("重置播放进度"),this.updatePluginInfo(e,t),e.play(),u.info("播放");},updatePluginInfo(e,t){if(e.plugins[Fe].update({from:"video",qualityList:t.quality}),u.info("更新画质",t.quality),f.getValue("artplayer-plugin-video-danmaku-enable")&&(e.plugins.artplayerPluginDanmuku.config({danmuku:t.danmukuUrl}),e.plugins.artplayerPluginDanmuku.load(),u.info("更新弹幕姬",t.danmukuUrl)),f.getValue("artplayer-plugin-video-m4sAudioSupport-enable")&&(e.plugins[lt].update({from:"video",audioList:t.audioList||[]}),u.info("更新音频",t.audioList)),f.getValue("artplayer-plugin-video-epChoose-enable")&&(e.plugins[Jt].update({EP_LIST:bt(t),automaticBroadcast:true}),u.info("更新选集信息",t.epList)),f.getValue("artplayer-plugin-video-cc-subtitle-enable")){let n=e.plugins[qt];const i={from:"video",aid:t.aid,bvid:t.bvid,cid:t.cid};n.update(i),u.info("更新字幕",i);}if(f.getValue("artplayer-plugin-video-toptoolbar-enable")){let n=e.plugins[Pt];const i={showRight:true,showRightFollow:true,showWrap:true,showTitle:true,showOnlineTotal:true,title:t.videoTitle,onlineInfoParams:{aid:t.aid,cid:t.cid,bvid:t.bvid}};n.update(i),u.info("更新顶部标题",i);}}};function Dr(e){let t=[];return e.video.forEach(r=>{if(!e.accept_quality.includes(r.id))return;let n=e.support_formats.find(o=>o.quality===r.id),i=U.findBetterCDN(r.base_url,r.baseUrl,r.backup_url,r.backupUrl);i=U.replaceVideoCDN(i);let a=n?.new_description;t.push({name:a,url:i,type:r.mimeType||r.mime_type,id:r.id,quality:r.id,vip:false,codecid:r.codecid,codecs:r.codecs,frameRate:r.frameRate||r.frame_rate,bandwidth:r.bandwidth});}),t}const tr=async e=>{const t=[];let r=[];if(f.getValue("bili-video-playType","mp4")==="mp4"){const a=await rt.playUrl({bvid:e.bvid,cid:e.cid,fnval:1,fnver:0,fourk:1,high_quality:1,qn:127,setPlatformHTML5:true});if(u.info(["视频播放地址信息：",a]),!a)return;let o=a.durl[0],l=a.support_formats.find(p=>p.quality===a.quality),s=U.findBetterCDN(o.url,o.url||o.backup_url?.[0]),c=l?.new_description;r.push({name:c,url:s,type:"audio/mp4",id:a.quality,codecid:a.video_codecid,quality:a.quality,vip:false,codecs:"",frameRate:"",bandwidth:0});}else {const a=await rt.playUrl({bvid:e.bvid,cid:e.cid,fnval:3088,fnver:0,fourk:1,high_quality:1,qn:127,setPlatformHTML5:false});if(u.info(["视频播放地址信息：",a]),!a)return;a.dash.audio.forEach(o=>{let l=U.findBetterCDN(o.baseUrl,o.base_url,o.baseUrl,o.backup_url);l=U.replaceVideoCDN(l,true),t.push({url:l,id:o.id,text:Rt[o.id]||"",codecs:o.codecs,mimeType:o.mimeType,bandwidth:o.bandwidth,size:0});}),t.sort((o,l)=>l.id-o.id),u.info("ArtPlayer: 获取的音频信息",t),r=[...Dr({accept_quality:a.accept_quality,support_formats:a.support_formats,video:a.dash.video})],u.info("ArtPlayer: 获取的视频画质信息",r);}const n=r.map((a,o)=>({quality:a.quality,html:a.name,url:a.url,codecid:a.codecid,codecs:a.codecs,frameRate:a.frameRate,mimeType:a.type,bandwidth:a.bandwidth})),i={container:null,epList:e.epList,audioUrl:null,url:"",poster:e.pic,aid:e.aid,bvid:e.bvid,cid:e.cid,videoTitle:e.title,danmukuUrl:`https://api.bilibili.com/x/v1/dm/list.so?oid=${e.cid}`,quality:n};return i.url=r?.[0]?.url,t.length&&(i.audioList=t.map((a,o)=>({isDefault:o===0,url:a.url,soundQualityCode:a.id,soundQualityCodeText:a.text,codecs:a.codecs,mimeType:a.mimeType,bandwidth:a.bandwidth,size:a.size}))),i},it={$data:{art:null},init(){f.execMenu("bili-video-enableArtPlayer",()=>{this.coverVideoPlayer();});},coverVideoPlayer(){if(Q("#artplayer"))u.warn("已使用ArtPlayer覆盖原播放器，更新播放信息");else {R(`
            /* 隐藏原本的播放器 */
			${v.className.video} .m-video-player .player-container,
			${v.className.mVideo} .m-video-player .player-container{
				display: none !important;
			}
			
			${ot}
			
			${Vt}

			`);let e=f.getValue("bili-video-artplayer-controlsPadding-left-right",0);e!=0&&R(`
				@media (orientation: landscape) {
					.art-video-player .art-layers .art-layer-top-wrap,
					/* 底部 */
					.art-video-player .art-bottom{
						padding-left: ${e}px !important;
						padding-right: ${e}px !important;
					}
					
					/* 锁定图标 */
					.art-video-player  .art-layer-lock{
						--art-lock-left-size: ${e}px;
					}
				}
				`);}this.updateArtPlayerVideoInfo();},updateArtPlayerVideoInfo(e,t){let r=this,n=()=>Q(v.className.video+" .m-video-player")||Q(v.className.mVideo+" .m-video-player");_.waitVuePropToSet(n,{msg:"等待m-video-player加载完成",check(i){return !t&&Be.$data.currentOption!=null?(Be.$data.art.pause(),typeof i?.info?.aid=="number"&&Be.$data.currentOption.aid!==i.info.aid&&typeof i?.info?.bvid=="string"&&typeof i?.info?.cid=="number"):typeof i?.info?.aid=="number"&&typeof i?.info?.bvid=="string"&&typeof i?.info?.cid=="number"},async set(i){const a=n();let{aid:o,bvid:l,cid:s,pic:c,title:p}=i;o=o||i.info.aid,l=l||i.info.bvid,s=s||i.info.cid,c=c||i.info.pic,p=p||i.info.title;let h=[];const y=Q(".m-video-season-new"),C=Q(".m-video-part-new");if(y&&_.getVue(y)){let k=_.getVue(y)?.videoList;Array.isArray(k)&&(h=k);}else if(C&&_.getVue(C)){let I=_.getVue(C),k=I?.info,S=I?.p,D=I?.pages||I?.info?.pages;Array.isArray(D)&&h.push({season_id:0,section_id:0,id:0,aid:o||k.aid,bvid:l||k.bvid,cid:s||k.cid,title:p||k.title,attribute:0,arc:{aid:o||k.aid,videos:k?.videos,type_id:0,type_name:"",copyright:k?.copyright,pic:k?.pic,title:k?.title,pubdate:k?.pubdate,ctime:k?.ctime,desc:k?.desc,state:k?.state,duration:k?.duration,rights:k?.rights,author:k?.owner,stat:k?.stat,dynamic:k?.dynamic,dimension:k?.dimension,desc_v2:k?.desc_v2,is_chargeable_season:k?.is_chargeable_season,is_blooper:k?.is_blooper,enable_vt:k?.enable_vt,vt_display:k?.vt_display},page:k?.pages?.[S],pages:k?.pages});}e==null&&(e={aid:o,bvid:l,cid:s,pic:c,title:p,epList:h}),u.info(`视频播放信息 => aid：${o} bvid：${l} cid：${s}`);const $=await tr(e);if($==null)return;let L=Q("#artplayer");if(!L){const I=m.createElement("div",{className:"artplayer-container",innerHTML:`
								<div id="artplayer"></div>
							`});L=I.querySelector("#artplayer"),m.append(a,I);}if($.container=L,r.$data.art==null){let I=await Be.init($);if(I)r.$data.art=I;else return;r.$data.art.volume=1,r.$data.art.once("ready",()=>{f.execMenu("bili-video-playerAutoPlayVideoFullScreen",async()=>{u.info("自动进入全屏"),r.$data.art.fullscreen=true,r.$data.art.once("fullscreenError",()=>{u.warn("未成功进入全屏，需要用户交互操作，使用网页全屏代替"),r.$data.art.fullscreenWeb=true;});});});}else {const I=Q(".artplayer-container");I&&!I.contains(r.$data.art.template.$container)&&(u.warn("artplayer-container的artplayer被移除了，重新添加元素"),m.empty(I),m.append(I,r.$data.art.template.$container)),await Be.update(r.$data.art,$);}a.style.paddingTop="";}});}},kr=async e=>{async function t(r){const n=await Ye.nav(false);if(!n)return;const{img_url:i,sub_url:a}=n.wbi_img,o=i.slice(i.lastIndexOf("/")+1,i.lastIndexOf(".")),l=a.slice(a.lastIndexOf("/")+1,a.lastIndexOf(".")),s=o+l,p=[46,47,18,2,53,8,23,32,15,50,10,31,58,3,45,35,27,43,5,49,33,9,42,19,29,28,14,39,12,38,41,13,37,48,7,16,24,55,40,61,26,17,0,1,60,51,30,4,22,25,54,21,56,59,6,63,57,62,11,36,20,34,44,52].map(C=>s[C]).join("").slice(0,32),h=Object.keys(r).sort().map(C=>{const $=r[C].toString().replace(/[!'()*]/g,"");return `${encodeURIComponent(C)}=${encodeURIComponent($)}`}).join("&"),y=Dt(h+p);return h+"&w_rid="+y}return await t(e)};function Fr(e){const t=23442827791579n,r=2251799813685247n,n=58n,a=["B","V",1,"","","","","","","","",""].length,o="FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf".split(""),l=[0,1,2,9,7,5,6,4,8,3,10,11];let s=0n;for(let c=3;c<a;c++)s=s*n+BigInt(o.indexOf(e[l[c]]));return `${s&r^t}`}const _r=function(){const e=typeof K>"u"?window:K,t=/https:\/\/m\.bilibili\.com\/video\/.*/,r=/https:\/\/m.bilibili.com\/dynamic\/\d+/,n=/https:\/\/m.bilibili.com\/opus\/\d+/;let i,a,o,l;const s={LATEST:0,HOT:2};let c,p="",h;return r.test(e.location.href)&&O(),P(),{init:y};async function y(b){i=a=o=void 0,h={},c=s.HOT,C(b),l=b.querySelector(".reply-list"),await new Promise(A=>{const B=setInterval(async()=>{if(t.test(e.location.href)){const E=e.location.pathname.replace("/video/","").replace("/","");E.startsWith("av")&&(i=E.slice(2)),E.startsWith("BV")&&(i=Fr(E)),o=1;}else r.test(e.location.href)?(i=e.dynamicDetail?.oid,o=e.dynamicDetail?.commentType):n.test(e.location.href)&&(i=e?.__INITIAL_STATE__?.opus?.detail?.basic?.comment_id_str,o=e?.__INITIAL_STATE__?.opus?.detail?.basic?.comment_type);i&&o&&(clearInterval(B),A());},200);}),await $(b),await L(b);}function C(b){b.innerHTML=`
        <div class="comment-container">
          <div class="reply-header">
            <div class="reply-navigation">
              <ul class="nav-bar">
                <li class="nav-title">
                  <span class="nav-title-text">评论</span>
                  <span class="total-reply">-</span>
                </li>
                <li class="nav-sort hot">
                  <div class="hot-sort">最热</div>
                  <div class="part-symbol"></div>
                  <div class="time-sort">最新</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="reply-warp">
            <div class="reply-list"></div>
          </div>  
        </div>
      `;}async function $(b){const A=b.querySelector(".comment-container .reply-header .nav-sort"),B=A.querySelector(".hot-sort"),E=A.querySelector(".time-sort");A.classList.add("hot"),A.classList.remove("time"),B.addEventListener("click",F=>{F.stopPropagation(),F.preventDefault(),c!==s.HOT&&(c=s.HOT,A.classList.add("hot"),A.classList.remove("time"),b.scrollTo(0,0),L(b));}),E.addEventListener("click",F=>{F.stopPropagation(),F.preventDefault(),c!==s.LATEST&&(c=s.LATEST,A.classList.add("time"),A.classList.remove("hot"),b.scrollTo(0,0),L(b));});}async function L(b){const{data:A,code:B}=await I();if(a=A.upper.mid,l.innerHTML="",h={},document.querySelector(".comment-container .reply-warp .no-more-replies-info")?.remove(),document.querySelector(".comment-container .reply-warp .anchor-for-loading")?.remove(),B!==0){const T=B===12061?"UP主已关闭评论区":"无法从API获取评论数据";l.innerHTML=`<p style="padding: 100px 0; text-align: center; color: #999;">${T}</p>`;return}const E=b.querySelector(".comment-container .reply-header .total-reply"),F=parseInt(A?.cursor?.all_count)||0;if(E.textContent=F,A?.cursor?.name?.includes("精选")){const T=b.querySelector(".comment-container .reply-header .nav-sort");T.innerHTML='<div class="selected-sort">精选评论</div>';}if(A.top_replies&&A.top_replies.length!==0){const T=A.top_replies[0];k(T,true);}for(const T of A.replies)k(T);if(A.replies.length===0||A.cursor.is_end){const T=document.createElement("p");T.classList.add("no-more-replies-info"),T.style="padding-bottom: 100px; text-align: center; color: #999;",T.textContent="没有更多评论",document.querySelector(".comment-container .reply-warp").appendChild(T);return}ne();}async function I(){const b={pagination_str:JSON.stringify({offset:p||""}),oid:i,type:o,wts:parseInt(Date.now()/1e3),plat:1,web_location:1315875};c===s.HOT?(b.mode=3,p||(b.seek_rpid="")):c===s.LATEST&&(b.mode=2);const A=await q.get(`https://api.bilibili.com/x/v2/reply/wbi/main?${await kr(b)}`,{fetch:true}),B=d.toJSON(A.data.responseText);return p=B.data.cursor?.pagination_reply?.next_offset||"",B}function k(b,A){if(h[b.rpid_str])return;const B=document.createElement("div");B.classList.add("reply-item"),B.innerHTML=`
        <div class="root-reply-container">
          <a class="root-reply-avatar" href="https://space.bilibili.com/${b.mid}" target="_blank" data-user-id="${b.mid}" data-root-reply-id="${b.rpid}">
            <div class="avatar">
              <div class="bili-avatar">
                <img class="bili-avatar-img bili-avatar-face bili-avatar-img-radius" data-src="${b.member.avatar}" alt="" src="${b.member.avatar}">
                <span class="bili-avatar-icon bili-avatar-right-icon bili-avatar-size-40"></span>
              </div>
            </div>
          </a>
          <div class="content-warp">
            <div class="user-info">
              <a class="user-name" href="https://space.bilibili.com/${b.mid}" target="_blank" data-user-id="${b.mid}" data-root-reply-id="${b.rpid}" style="color: ${b.member.vip.nickname_color?b.member.vip.nickname_color:"#61666d"}">${b.member.uname}</a>
              <span style="height: 14px; padding: 0 2px; margin-right: 4px; display: flex; align-items: center; font-size: 10px; color: white; border-radius: 2px; background-color: ${D(b.member.level_info.current_level)};">LV${b.member.level_info.current_level}</span>
              ${a===b.mid?'<i class="svg-icon up-web up-icon" style="width: 20px; height: 24px; transform: scale(1.03);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="4" width="24" height="16" rx="2" fill="#FF6699"></rect><path d="M5.7 8.36V12.79C5.7 13.72 5.96 14.43 6.49 14.93C6.99 15.4 7.72 15.64 8.67 15.64C9.61 15.64 10.34 15.4 10.86 14.92C11.38 14.43 11.64 13.72 11.64 12.79V8.36H10.47V12.81C10.47 13.43 10.32 13.88 10.04 14.18C9.75 14.47 9.29 14.62 8.67 14.62C8.04 14.62 7.58 14.47 7.3 14.18C7.01 13.88 6.87 13.43 6.87 12.81V8.36H5.7ZM13.0438 8.36V15.5H14.2138V12.76H15.9838C17.7238 12.76 18.5938 12.02 18.5938 10.55C18.5938 9.09 17.7238 8.36 16.0038 8.36H13.0438ZM14.2138 9.36H15.9138C16.4238 9.36 16.8038 9.45 17.0438 9.64C17.2838 9.82 17.4138 10.12 17.4138 10.55C17.4138 10.98 17.2938 11.29 17.0538 11.48C16.8138 11.66 16.4338 11.76 15.9138 11.76H14.2138V9.36Z" fill="white"></path></svg></i>':""}
            </div>
            <div class="root-reply">
              <span class="reply-content-container root-reply" style="padding-bottom: 8px;">
                <span class="reply-content">${A?'<span class="top-icon" style="top: -1px;">置顶</span>':""}${b.content.pictures?'<div class="note-prefix" style="transform: translateY(-1px);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="#BBBBBB"><path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25Zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25ZM3.5 6.25a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Zm.75 2.25h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5Z"></path></svg><div style="margin-left: 3px;">笔记</div></div>':""}${N(b.content)}</span>
              </span>
              ${b.content.pictures?`
                <div class="image-exhibition" style="margin-top: 0; margin-bottom: 8px;">
                  <div class="preview-image-container" style="display: flex; width: 300px;">
                    ${X(b.content.pictures)}
                  </div>
                </div>
                `:""}
              <div class="reply-info">
                <span class="reply-time" style="margin-right: 20px;">${S(b.ctime)}</span>
                <span class="reply-like">
                  <i class="svg-icon like use-color like-icon" style="width: 16px; height: 16px;"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3323" width="200" height="200"><path d="M594.176 151.168a34.048 34.048 0 0 0-29.184 10.816c-11.264 13.184-15.872 24.064-21.504 40.064l-1.92 5.632c-5.632 16.128-12.8 36.864-27.648 63.232-25.408 44.928-50.304 74.432-86.208 97.024-23.04 14.528-43.648 26.368-65.024 32.576v419.648a4569.408 4569.408 0 0 0 339.072-4.672c38.72-2.048 72-21.12 88.96-52.032 21.504-39.36 47.168-95.744 63.552-163.008a782.72 782.72 0 0 0 22.528-163.008c0.448-16.832-13.44-32.256-35.328-32.256h-197.312a32 32 0 0 1-28.608-46.336l0.192-0.32 0.64-1.344 2.56-5.504c2.112-4.8 5.12-11.776 8.32-20.16 6.592-17.088 13.568-39.04 16.768-60.416 4.992-33.344 3.776-60.16-9.344-84.992-14.08-26.688-30.016-33.728-40.512-34.944zM691.84 341.12h149.568c52.736 0 100.864 40.192 99.328 98.048a845.888 845.888 0 0 1-24.32 176.384 742.336 742.336 0 0 1-69.632 178.56c-29.184 53.44-84.48 82.304-141.76 85.248-55.68 2.88-138.304 5.952-235.712 5.952-96 0-183.552-3.008-244.672-5.76-66.432-3.136-123.392-51.392-131.008-119.872a1380.672 1380.672 0 0 1-0.768-296.704c7.68-72.768 70.4-121.792 140.032-121.792h97.728c13.76 0 28.16-5.504 62.976-27.456 24.064-15.104 42.432-35.2 64.512-74.24 11.904-21.184 17.408-36.928 22.912-52.8l2.048-5.888c6.656-18.88 14.4-38.4 33.28-60.416a97.984 97.984 0 0 1 85.12-32.768c35.264 4.096 67.776 26.88 89.792 68.608 22.208 42.176 21.888 84.864 16 124.352a342.464 342.464 0 0 1-15.424 60.544z m-393.216 477.248V405.184H232.96c-40.448 0-72.448 27.712-76.352 64.512a1318.912 1318.912 0 0 0 0.64 282.88c3.904 34.752 32.96 61.248 70.4 62.976 20.8 0.96 44.8 1.92 71.04 2.816z" p-id="3324" fill="#9499a0"></path></svg></i>
                  <span>${b.like}</span>
                </span>
              </div>
              <div class="reply-tag-list">
                ${b.card_label?b.card_label.reduce((G,Z)=>G+`<span class="reply-tag-item ${Z.text_content==="热评"?"reply-tag-hot":""} ${Z.text_content==="UP主觉得很赞"?"reply-tag-liked":""}" style="font-size: 12px; background-color: ${Z.label_color_day}; color: ${Z.text_color_day};">${Z.text_content}</span>`,""):""}
              </div>
            </div>
          </div>
        </div>
        <div class="sub-reply-container">
          <div class="sub-reply-list">
            ${J(b.replies)}
            ${b.rcount>b.replies.length?`
              <div class="view-more" style="padding-left: 8px; font-size: 13px; color: #9499A0;">
                <div class="view-more-default">
                  <span>共${b.rcount}条回复, </span>
                  <span class="view-more-btn" style="cursor: pointer;">点击查看</span>
                </div>
              </div>
              `:""}
          </div>
        </div>
      `,l.appendChild(B),h[b.rpid_str]=true;const E=B.querySelector(".preview-image-container");E&&new lr(E,{title:false,toolbar:false,tooltip:false,keyboard:false});const F=B.querySelector(".sub-reply-list"),T=B.querySelector(".view-more-btn");T&&T.addEventListener("click",()=>ee(b.rpid,F,b.rcount,1));}function S(b){const A=new Date(b*1e3),B=A.getFullYear(),E=(A.getMonth()+1).toString().padStart(2,"0"),F=A.getDate().toString().padStart(2,"0"),T=A.getHours().toString().padStart(2,"0"),G=A.getMinutes().toString().padStart(2,"0");return `${B}-${E}-${F} ${T}:${G}`}function D(b){return {0:"#C0C0C0",1:"#BBBBBB",2:"#8BD29B",3:"#7BCDEF",4:"#FEBB8B",5:"#EE672A",6:"#F04C49"}[b]}function N(b){let A=b.message;const B=["https://www.bilibili.com/video/av","https://b23.tv/mall-"];if(b.vote&&b.vote.deleted===false){const E=`<a class="jump-link normal" href="${b.vote.url}" target="_blank" noopener noreferrer>${b.vote.title}</a>`;B.push(E),A=A.replace(`{vote:${b.vote.id}}`,E);}if(b.emote)for(const[E,F]of Object.entries(b.emote)){const T=`<img class="emoji-${["","small","large"][F.meta.size]}" src="${F.url}" alt="${E}">`;B.push(T),A=A.replaceAll(E,T);}if(A=A.replaceAll(/(\d{1,2}[:：]){1,2}\d{1,2}/g,E=>{if(E=E.replaceAll("：",":"),!t.test(e.location.href))return E;const F=E.split(":");if(F.some(Z=>parseInt(Z)>=60))return E;let T;if(F.length===2?T=parseInt(F[0])*60+parseInt(F[1]):F.length===3&&(T=parseInt(F[0])*3600+parseInt(F[1])*60+parseInt(F[2])),Number.isNaN(T))return E;const G=`<a class="jump-link video-time" onclick="(async () => {
          // jump to exact time
          const videoElement = document.querySelector('video.gsl-video');
          videoElement.currentTime = ${T};
  
          // close comment module
          document.querySelector('.close-comment-module-btn').click();
  
          // scroll to top
          window.scrollTo(0, 0);
  
          // play video if it is paused
          if (videoElement.paused) videoElement.play();
        })()">${E}</a>`;return B.push(G),G}),b.at_name_to_mid)for(const[E,F]of Object.entries(b.at_name_to_mid)){const T=`<a class="jump-link user" data-user-id="${F}" href="https://space.bilibili.com/${F}" target="_blank" noopener noreferrer>@${E}</a>`;B.push(T),A=A.replaceAll(`@${E}`,T);}if(Object.keys(b.jump_url).length){const E=[].concat(Object.entries(b.jump_url).filter(F=>F[0].startsWith("https://")),Object.entries(b.jump_url).filter(F=>!F[0].startsWith("https://")));for(const[F,T]of E){const G=F.startsWith("BV")||/^av\d+$/.test(F)?`https://www.bilibili.com/video/${F}`:T.pc_url||F;if(G.includes("search.bilibili.com")&&B.join("").includes(F))continue;const Z=`<img class="icon normal" src="${T.prefix_icon}" style="${T.extra&&T.extra.is_word_search&&"width: 12px;"}"><a class="jump-link normal" href="${G}" target="_blank" noopener noreferrer>${T.title}</a>`;B.push(Z),A=A.replaceAll(F,Z);}}return A}function X(b){let A="width: 84px; height: 84px;";b.length===1&&(A="max-width: 260px; max-height: 180px;"),b.length===2&&(A="width: 128px; height: 128px;");let B="";for(const E of b)B+=`<div class="image-item-wrap" style="margin-top: 4px; margin-right: 4px; cursor: zoom-in;"><img src="${E.img_src}" style="border-radius: 4px; ${A}"></div>`;return B}function J(b){if(!(b instanceof Array))return "";let A="";for(const B of b)A+=`
          <div class="sub-reply-item">
            <div class="sub-user-info">
              <a class="sub-reply-avatar" href="https://space.bilibili.com/${B.mid}" target="_blank" data-user-id="${B.mid}" data-root-reply-id="${B.rpid}">
                <div class="avatar">
                  <div class="bili-avatar">
                    <img class="bili-avatar-img bili-avatar-face bili-avatar-img-radius" data-src="${B.member.avatar}" alt="" src="${B.member.avatar}">
                    <span class="bili-avatar-icon bili-avatar-right-icon  bili-avatar-size-24"></span>
                  </div>
                </div>
              </a>
              <a class="sub-user-name" href="https://space.bilibili.com/${B.mid}" target="_blank" data-user-id="${B.mid}" data-root-reply-id="${B.rpid}" style="color: ${B.member.vip.nickname_color?B.member.vip.nickname_color:"#61666d"}">${B.member.uname}</a>
              <span style="height: 14px; padding: 0 2px; margin-right: 4px; display: flex; align-items: center; font-size: 10px; color: white; border-radius: 2px; background-color: ${D(B.member.level_info.current_level)};">LV${B.member.level_info.current_level}</span>
              ${a===B.mid?'<i class="svg-icon up-web up-icon" style="width: 20px; height: 24px; transform: scale(1.03);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="4" width="24" height="16" rx="2" fill="#FF6699"></rect><path d="M5.7 8.36V12.79C5.7 13.72 5.96 14.43 6.49 14.93C6.99 15.4 7.72 15.64 8.67 15.64C9.61 15.64 10.34 15.4 10.86 14.92C11.38 14.43 11.64 13.72 11.64 12.79V8.36H10.47V12.81C10.47 13.43 10.32 13.88 10.04 14.18C9.75 14.47 9.29 14.62 8.67 14.62C8.04 14.62 7.58 14.47 7.3 14.18C7.01 13.88 6.87 13.43 6.87 12.81V8.36H5.7ZM13.0438 8.36V15.5H14.2138V12.76H15.9838C17.7238 12.76 18.5938 12.02 18.5938 10.55C18.5938 9.09 17.7238 8.36 16.0038 8.36H13.0438ZM14.2138 9.36H15.9138C16.4238 9.36 16.8038 9.45 17.0438 9.64C17.2838 9.82 17.4138 10.12 17.4138 10.55C17.4138 10.98 17.2938 11.29 17.0538 11.48C16.8138 11.66 16.4338 11.76 15.9138 11.76H14.2138V9.36Z" fill="white"></path></svg></i>':""}
            </div>
            <span class="reply-content-container sub-reply-content">
              <span class="reply-content">${N(B.content)}</span>
            </span>
            <div class="sub-reply-info" style="margin: 4px 0;">
              <span class="sub-reply-time" style="margin-right: 20px;">${S(B.ctime)}</span>
              <span class="sub-reply-like">
                <i class="svg-icon like use-color sub-like-icon" style="width: 16px; height: 16px;"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3323" width="200" height="200"><path d="M594.176 151.168a34.048 34.048 0 0 0-29.184 10.816c-11.264 13.184-15.872 24.064-21.504 40.064l-1.92 5.632c-5.632 16.128-12.8 36.864-27.648 63.232-25.408 44.928-50.304 74.432-86.208 97.024-23.04 14.528-43.648 26.368-65.024 32.576v419.648a4569.408 4569.408 0 0 0 339.072-4.672c38.72-2.048 72-21.12 88.96-52.032 21.504-39.36 47.168-95.744 63.552-163.008a782.72 782.72 0 0 0 22.528-163.008c0.448-16.832-13.44-32.256-35.328-32.256h-197.312a32 32 0 0 1-28.608-46.336l0.192-0.32 0.64-1.344 2.56-5.504c2.112-4.8 5.12-11.776 8.32-20.16 6.592-17.088 13.568-39.04 16.768-60.416 4.992-33.344 3.776-60.16-9.344-84.992-14.08-26.688-30.016-33.728-40.512-34.944zM691.84 341.12h149.568c52.736 0 100.864 40.192 99.328 98.048a845.888 845.888 0 0 1-24.32 176.384 742.336 742.336 0 0 1-69.632 178.56c-29.184 53.44-84.48 82.304-141.76 85.248-55.68 2.88-138.304 5.952-235.712 5.952-96 0-183.552-3.008-244.672-5.76-66.432-3.136-123.392-51.392-131.008-119.872a1380.672 1380.672 0 0 1-0.768-296.704c7.68-72.768 70.4-121.792 140.032-121.792h97.728c13.76 0 28.16-5.504 62.976-27.456 24.064-15.104 42.432-35.2 64.512-74.24 11.904-21.184 17.408-36.928 22.912-52.8l2.048-5.888c6.656-18.88 14.4-38.4 33.28-60.416a97.984 97.984 0 0 1 85.12-32.768c35.264 4.096 67.776 26.88 89.792 68.608 22.208 42.176 21.888 84.864 16 124.352a342.464 342.464 0 0 1-15.424 60.544z m-393.216 477.248V405.184H232.96c-40.448 0-72.448 27.712-76.352 64.512a1318.912 1318.912 0 0 0 0.64 282.88c3.904 34.752 32.96 61.248 70.4 62.976 20.8 0.96 44.8 1.92 71.04 2.816z" p-id="3324" fill="#9499a0"></path></svg></i>
                <span>${B.like}</span>
              </span>
            </div>
          </div>
        `;return A}async function ee(b,A,B,E){const F={oid:i,type:o,root:b,ps:10,pn:E,web_location:333.788},T=await q.get(`https://api.bilibili.com/x/v2/reply/reply?${pe.toSearchParamsStr(F)}`,{allowInterceptConfig:false,fetch:true});if(!T.status){log.error(T),w.error("请求异常，获取评论的回复失败");return}const G=d.toJSON(T.data.responseText);if(G===-352){w.error("请登录后再进行操作"),console.error("you should login first",T);return}const Z=G.data;A.innerHTML=J(Z.replies),oe(b,A,B,E),A.parentElement.parentElement.scrollIntoView({behavior:"instant"}),e.scrollTo(0,document.documentElement.scrollTop-60);}function oe(b,A,B,E){if(B<=10)return;const F=Math.ceil(B/10),T=document.createElement("div");T.classList.add("view-more"),T.innerHTML=`
        <div class="view-more-pagination">
          <span class="pagination-page-count">共${F}页</span>
          ${E!==1?'<span class="pagination-btn pagination-to-prev-btn">上一页</span>':""}
          ${(()=>{const G=[E-4,E-3,E-2,E-1].filter(ie=>ie>=1),Z=[E+1,E+2,E+3,E+4].filter(ie=>ie<=F),$e=[].concat(G,E,Z);let Pe;E<=3?Pe=$e.slice(0,5):E>=F-3?Pe=$e.reverse().slice(0,5).reverse():Pe=$e.slice($e.indexOf(E)-2,$e.indexOf(E)+3);let de=JSON.parse(JSON.stringify(Pe));if(!de.includes(1)){let ie=[1];de.at(0)!==2&&(ie=[1,"..."]),de=[].concat(ie,de);}if(!de.includes(F)){let ie=[F];de.at(-1)!==F-1&&(ie=["...",F]),de=[].concat(de,ie);}return de.reduce((ie,je)=>je==="..."?ie+'<span class="pagination-page-dot">...</span>':je===E?ie+`<span class="pagination-page-number current-page">${je}</span>`:ie+`<span class="pagination-page-number">${je}</span>`,"")})()}
          ${E!==F?'<span class="pagination-btn pagination-to-next-btn">下一页</span>':""}
        </div>
      `,T.querySelector(".pagination-to-prev-btn")?.addEventListener("click",()=>ee(b,A,B,E-1)),T.querySelector(".pagination-to-next-btn")?.addEventListener("click",()=>ee(b,A,B,E+1)),T.querySelectorAll(".pagination-page-number:not(.current-page)")?.forEach(G=>{const Z=parseInt(G.textContent);G.addEventListener("click",()=>ee(b,A,B,Z));}),A.appendChild(T);}function ne(){const b=document.createElement("div");b.classList.add("anchor-for-loading"),b.textContent="正在加载...",b.style="text-align: center; color: #61666d; transform: translateY(-50px);",document.querySelector(".comment-container .reply-warp").appendChild(b);const A=new IntersectionObserver(async B=>{if(!B[0].isIntersecting)return;const{data:E}=await I();if(!E.replies||E.replies.length===0){b.textContent="所有评论已加载完毕",A.disconnect();return}for(const F of E.replies)k(F);});A.observe(b);}function O(){const b=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(){const A=arguments[1];if(typeof A=="string"&&A.includes("reply/wbi/main")){const{searchParams:B}=new URL(`${A.startsWith("//")?"https:":""}${A}`);e.dynamicDetail={oid:B.get("oid"),commentType:B.get("type")};}return b.apply(this,arguments)};}async function P(){await new Promise(T=>{const G=setInterval(()=>{document&&document.createElement&&document.head&&document.head.appendChild&&(clearInterval(G),T());},100);});const b=document.createElement("style");b.textContent=`
        .reply-header {
          padding: 12px;
          border-bottom: 1px solid #f1f2f3;
        }
  
        .reply-navigation {
          margin-bottom: 0 !important;
        }
  
        .reply-navigation .nav-bar .nav-title {
          font-size: 1rem !important;
        }
      `,document.head.appendChild(b);const A=document.createElement("style");A.textContent=`
        .reply-list {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }
  
        .reply-item {
          padding: 12px !important;
          font-size: 1rem !important;
          border-bottom: 1px solid #f4f5f7;
        }
  
        .reply-item .root-reply-container {
          padding: 0 !important;
          display: flex;
        }
  
        .reply-item .root-reply-container .root-reply-avatar {
          position: relative !important;
          width: initial !important;
        }
  
        .reply-item .root-reply-container .content-warp {
          margin-left: 12px;
        }
  
        .reply-item .root-reply-container .content-warp .user-info,
        .reply-item .root-reply-container .content-warp .root-reply .reply-content {
          font-size: 14px !important;
        }
  
        .reply-item .root-reply-container .content-warp .root-reply .reply-content-container {
          width: calc(100vw - 88px) !important;
        }
  
        .reply-item .root-reply-container .content-warp .root-reply .reply-content .note-prefix {
          margin-right: 4px !important;
        }
  
        .reply-item .sub-reply-container {
          padding-left: 44px !important;
        }
  
        .reply-item .sub-reply-container .sub-reply-list .sub-reply-item {
          width: calc(100% - 24px);
        }
  
        .reply-item .sub-reply-container .sub-reply-list .sub-reply-item .sub-user-info {
          margin-right: 0 !important;
        }
  
        .reply-item .sub-reply-container .sub-reply-list .sub-reply-item .sub-user-info .sub-user-name,
        .reply-item .sub-reply-container .sub-reply-list .sub-reply-item .reply-content {
          font-size: 14px !important;
        }
  
        .reply-info .reply-time,
        .reply-info .reply-like,
        .sub-reply-info .sub-reply-time,
        .sub-reply-info .sub-reply-like {
          margin-right: 12px !important;
        }
      `,document.head.appendChild(A);const B=document.createElement("style");B.textContent=`
        .reply-item .root-reply-avatar .avatar .bili-avatar {
          width: 40px;
          height: 40px;
        }
  
        .sub-reply-item .sub-reply-avatar .avatar .bili-avatar {
          width: 24px;
          height: 24px;
        }
      `,document.head.appendChild(B);const E=document.createElement("style");E.textContent=`
        .sub-reply-container .view-more-btn:hover {
          color: #00AEEC;
        }
  
        .view-more {
          padding-left: 8px;
          color: #222;
          font-size: 13px;
          user-select: none;
        }
  
        .pagination-page-count {
          margin-right: 4px !important;
        }
  
        .pagination-page-dot,
        .pagination-page-number {
          margin: 0 4px;
        }
  
        .pagination-btn,
        .pagination-page-number {
          cursor: pointer;
        }
  
        .current-page,
        .pagination-btn:hover,
        .pagination-page-number:hover {
          color: #00AEEC;
        }
      `,(document.head||document.documentElement).appendChild(E);const F=document.createElement("style");F.textContent=`
        :root {
          --text1: #18191C;
          --text3: #9499A0;
          --brand_blue: #00AEEC;
          --brand_pink: #FF6699;
          --bg2: #F6F7F8;
        }
  
        .jump-link {
          color: #008DDA;
        }
      `,(document.head||document.documentElement).appendChild(F);}}(),$r=`:root {\r
	--v_xs: 5px;\r
	--v_xsx: 4px;\r
	--v_xxs: 6px;\r
	--v_sm: 10px;\r
	--v_smx: 8px;\r
	--v_xsm: 12px;\r
	--v_md: 15px;\r
	--v_mdx: 14px;\r
	--v_xmd: 16px;\r
	--v_lg: 20px;\r
	--v_lgx: 18px;\r
	--v_xlg: 22px;\r
	--v_xl: 25px;\r
	--v_xlx: 24px;\r
	--v_xxl: 26px;\r
	--v_fs_1: 24px;\r
	--v_fs_2: 18px;\r
	--v_fs_3: 16px;\r
	--v_fs_4: 14px;\r
	--v_fs_5: 13px;\r
	--v_fs_6: 12px;\r
	--v_lh_xs: 1;\r
	--v_lh_sm: 1.25;\r
	--v_lh_md: 1.5;\r
	--v_lh_lg: 1.75;\r
	--v_lh_xl: 2;\r
	--v_height_xs: 16px;\r
	--v_height_sm: 24px;\r
	--v_height_md: 32px;\r
	--v_height_lg: 40px;\r
	--v_height_xl: 48px;\r
	--v_radius: 6px;\r
	--v_radius_sm: 4px;\r
	--v_radius_md: 8px;\r
	--v_radius_lg: 10px;\r
	--v_brand_pink: var(--brand_pink, #ff6699);\r
	--v_brand_pink_thin: var(--brand_pink_thin, #ffecf1);\r
	--v_brand_blue: var(--brand_blue, #00aeec);\r
	--v_brand_blue_thin: var(--brand_blue_thin, #dff6fd);\r
	--v_stress_red: var(--stress_red, #f85a54);\r
	--v_stress_red_thin: var(--stress_red_thin, #feecea);\r
	--v_success_green: var(--success_green, #2ac864);\r
	--v_success_green_thin: var(--success_green_thin, #e4f8ea);\r
	--v_operate_orange: var(--operate_orange, #ff7f24);\r
	--v_operate_orange_thin: var(--operate_orange_thin, #fff0e3);\r
	--v_pay_yellow: var(--pay_yellow, #ffb027);\r
	--v_pay_yellow_thin: var(--pay_yellow_thin, #fff6e4);\r
	--v_bg1: var(--bg1, #ffffff);\r
	--v_bg2: var(--bg2, #f6f7f8);\r
	--v_bg3: var(--bg3, #f1f2f3);\r
	--v_bg1_float: var(--bg1_float, #ffffff);\r
	--v_bg2_float: var(--bg2_float, #f1f2f3);\r
	--v_text_white: var(--text_white, #ffffff);\r
	--v_text1: var(--text1, #18191c);\r
	--v_text2: var(--text2, #61666d);\r
	--v_text3: var(--text3, #9499a0);\r
	--v_text4: var(--text4, #c9ccd0);\r
	--v_text_link: var(--text_link, #008ac5);\r
	--v_text_notice: var(--text_notice, #e58900);\r
	--v_line_light: var(--line_light, #f1f2f3);\r
	--v_line_regular: var(--line_regular, #e3e5e7);\r
	--v_line_bold: var(--line_bold, #c9ccd0);\r
	--v_graph_white: var(--graph_white, #ffffff);\r
	--v_graph_bg_thin: var(--graph_bg_thin, #f6f7f8);\r
	--v_graph_bg_regular: var(--graph_bg_regular, #f1f2f3);\r
	--v_graph_bg_thick: var(--graph_bg_thick, #e3e5e7);\r
	--v_graph_weak: var(--graph_weak, #c9ccd0);\r
	--v_graph_medium: var(--graph_medium, #9499a0);\r
	--v_graph_icon: var(--graph_icon, #61666d);\r
	--v_shadow: var(--shadow, #000000);\r
	--v_brand_pink_hover: var(--brand_pink_hover, #ff8cb0);\r
	--v_brand_pink_active: var(--brand_pink_active, #e84b85);\r
	--v_brand_pink_disabled: var(--brand_pink_disabled, #ffb3ca);\r
	--v_brand_blue_hover: var(--brand_blue_hover, #40c5f1);\r
	--v_brand_blue_active: var(--brand_blue_active, #008ac5);\r
	--v_brand_blue_disabled: var(--brand_blue_disabled, #80daf6);\r
	--v_stress_red_hover: var(--stress_red_hover, #fa857f);\r
	--v_stress_red_active: var(--stress_red_active, #e23d3d);\r
	--v_stress_red_disabled: var(--stress_red_disabled, #fcafaa);\r
	--v_text_hover: var(--text_hover, #797f87);\r
	--v_text_active: var(--text_active, #61666d);\r
	--v_text_disabled: var(--text_disabled, #c9ccd0);\r
	--v_line_border: var(--line_border, #c9ccd0);\r
	--v_line_bolder_hover: var(--line_bolder_hover, #e3e5e7);\r
	--v_line_bolder_active: var(--line_bolder_active, #aeb3b9);\r
	--v_line_bolder_disabled: var(--line_bolder_disabled, #f1f2f3);\r
}\r
\r
@font-face {\r
	font-family: fanscard;\r
	src: url(//s1.hdslb.com/bfs/static/jinkela/mall-h5/asserts/fansCard.ttf);\r
}\r
\r
.svg-icon {\r
	display: inline-flex;\r
	justify-content: center;\r
	align-items: center;\r
}\r
\r
.svg-icon svg {\r
	width: 100%;\r
	height: 100%;\r
}\r
\r
.svg-icon.use-color svg path {\r
	fill: currentColor;\r
	color: inherit;\r
}\r
\r
.top-vote-card {\r
	background-color: var(--graph_bg_thin);\r
	display: flex;\r
	justify-content: space-between;\r
	align-items: center;\r
	height: 80px;\r
	width: 100%;\r
	margin-bottom: 24px;\r
	padding: 12px 16px 12px 10px;\r
	border-radius: 6px;\r
}\r
\r
.top-vote-card__multi {\r
	cursor: pointer;\r
}\r
\r
.top-vote-card__multi:hover .vote-result-text {\r
	color: var(--brand_blue);\r
	transition: 0.2s;\r
}\r
\r
.top-vote-card-left {\r
	width: 40%;\r
	max-width: calc(40% - 30px);\r
	margin-right: 20px;\r
	word-wrap: break-word;\r
	font-size: 13px;\r
	line-height: 18px;\r
	color: var(--text1);\r
}\r
\r
.top-vote-card-left__title {\r
	display: flex;\r
	align-items: center;\r
}\r
\r
.top-vote-card-left__title svg {\r
	margin-right: 2px;\r
	flex: none;\r
}\r
\r
.top-vote-card-left__title span {\r
	display: -webkit-box;\r
	float: none;\r
	height: 18px;\r
	overflow: hidden;\r
	text-overflow: ellipsis;\r
	word-break: break-word;\r
	-webkit-box-orient: vertical;\r
	-webkit-line-clamp: 1;\r
}\r
\r
.top-vote-card-left__join {\r
	height: 17px;\r
	display: flex;\r
	align-items: center;\r
	margin-top: 4px;\r
	font-size: 12px;\r
	color: var(--text3);\r
}\r
\r
.top-vote-card-left__join .vote-icon {\r
	height: 12px;\r
}\r
\r
.top-vote-card-left__join span {\r
	display: flex;\r
	align-items: center;\r
}\r
\r
.top-vote-card-right {\r
	width: 60%;\r
	font-size: var(--2fde2a28);\r
	line-height: 17px;\r
	display: flex;\r
	--option-height: 40px;\r
	--option-radius: 6px;\r
}\r
\r
.top-vote-card-right .vote-text__not-vote {\r
	opacity: 0.9;\r
}\r
\r
.top-vote-card-right .vote-text__not-vote .vui_ellipsis {\r
	font-weight: 400 !important;\r
}\r
\r
.top-vote-card-right .vote-text :first-child {\r
	font-weight: 500;\r
}\r
\r
.top-vote-card-right .vote-icon {\r
	flex: none;\r
}\r
\r
.top-vote-card-right .left-vote-option {\r
	position: relative;\r
	display: flex;\r
	min-width: 120px;\r
	align-items: center;\r
	justify-content: space-between;\r
	background-color: rgba(255, 102, 153, var(--212267a6));\r
	height: var(--option-height);\r
	width: var(--38c5ebb3);\r
	padding-left: 10px;\r
	border-radius: var(--option-radius) 0 0 var(--option-radius);\r
	cursor: pointer;\r
	margin-right: 30px;\r
	color: var(--332a347e);\r
	transition: width ease-out 0.2s;\r
}\r
\r
.top-vote-card-right .left-vote-option .skew-vote-option {\r
	position: absolute;\r
	right: -20px;\r
	top: 0;\r
}\r
\r
.top-vote-card-right .left-vote-option .skew-vote-option__fill {\r
	left: -8px;\r
	background-color: #f69;\r
	transform: skew(21deg);\r
	border-top-right-radius: calc(var(--option-radius) - 2px);\r
	border-bottom-right-radius: var(--option-radius);\r
}\r
\r
.top-vote-card-right .skew-vote-option {\r
	height: 40px;\r
	width: 20px;\r
	overflow: hidden;\r
	opacity: var(--212267a6);\r
	pointer-events: none;\r
}\r
\r
.top-vote-card-right .skew-vote-option__fill {\r
	pointer-events: all;\r
	position: absolute;\r
	top: 0;\r
	width: 100%;\r
	height: 100%;\r
}\r
\r
.top-vote-card-right .right-vote-option {\r
	position: relative;\r
	display: flex;\r
	min-width: 120px;\r
	align-items: center;\r
	flex-direction: row-reverse;\r
	justify-content: space-between;\r
	background-color: rgba(0, 174, 236, var(--212267a6));\r
	height: var(--option-height);\r
	width: var(--4b2970aa);\r
	padding-right: 10px;\r
	border-radius: 0 var(--option-radius) var(--option-radius) 0;\r
	cursor: pointer;\r
	color: var(--1e587827);\r
	transition: width ease-out 0.2s;\r
}\r
\r
.top-vote-card-right .right-vote-option .skew-vote-option {\r
	position: absolute;\r
	left: -20px;\r
	top: 0;\r
}\r
\r
.top-vote-card-right .right-vote-option .skew-vote-option__fill {\r
	left: 8px;\r
	background-color: #00aeec;\r
	transform: skew(21deg);\r
	border-top-left-radius: var(--option-radius);\r
	border-bottom-left-radius: calc(var(--option-radius) - 2px);\r
}\r
\r
.top-vote-card-right .right-vote-option .vote-text {\r
	text-align: right;\r
}\r
\r
.top-vote-card-right .had_voted {\r
	cursor: unset;\r
}\r
\r
.reply-header .reply-notice {\r
	display: flex;\r
	align-items: center;\r
	position: relative;\r
	min-height: 40px;\r
	padding: 4px 10px;\r
	margin-bottom: 16px;\r
	font-size: 13px;\r
	border-radius: 2px;\r
	color: var(--Ye5_u);\r
	cursor: pointer;\r
}\r
\r
.reply-header .reply-notice:after {\r
	content: "";\r
	position: absolute;\r
	width: 100%;\r
	height: 100%;\r
	top: 0;\r
	left: 0;\r
	background-color: var(--Ye5_u);\r
	opacity: 0.2;\r
}\r
\r
.reply-header .reply-notice .notice-icon {\r
	width: 16px;\r
	height: 16px;\r
	margin-right: 5px;\r
}\r
\r
.reply-header .reply-notice .notice-content {\r
	flex: 1;\r
	padding: 0 5px;\r
	vertical-align: top;\r
	word-wrap: break-word;\r
	word-break: break-all;\r
}\r
\r
.reply-header .reply-notice .notice-close-icon {\r
	position: relative;\r
	z-index: 1;\r
	width: 10px;\r
	height: 10px;\r
	margin-left: 5px;\r
}\r
\r
.reply-header .reply-navigation {\r
	margin-bottom: 22px;\r
}\r
\r
.reply-header .reply-navigation .nav-bar {\r
	display: flex;\r
	align-items: center;\r
	list-style: none;\r
	margin: 0;\r
	padding: 0;\r
}\r
\r
.reply-header .reply-navigation .nav-bar .nav-title {\r
	display: flex;\r
	align-items: center;\r
}\r
\r
@media screen and (max-width: 1681px) {\r
	.reply-header .reply-navigation .nav-bar .nav-title {\r
		font-size: 20px;\r
	}\r
}\r
\r
@media screen and (min-width: 1681px) {\r
	.reply-header .reply-navigation .nav-bar .nav-title {\r
		font-size: 24px;\r
	}\r
}\r
\r
.reply-header .reply-navigation .nav-bar .nav-title .nav-title-text {\r
	color: var(--text1);\r
	font-family: PingFang SC, HarmonyOS_Medium, Helvetica Neue, Microsoft YaHei,\r
		sans-serif;\r
	font-weight: 500;\r
}\r
\r
@media (-webkit-max-device-pixel-ratio: 1) {\r
	.reply-header .reply-navigation .nav-bar .nav-title .nav-title-text {\r
		font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,\r
			Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;\r
	}\r
}\r
\r
.reply-header .reply-navigation .nav-bar .nav-title .total-reply {\r
	margin: 0 36px 0 6px;\r
	font-weight: 400;\r
	color: var(--text3);\r
}\r
\r
@media screen and (max-width: 1681px) {\r
	.reply-header .reply-navigation .nav-bar .nav-title .total-reply {\r
		font-size: 13px;\r
	}\r
}\r
\r
@media screen and (min-width: 1681px) {\r
	.reply-header .reply-navigation .nav-bar .nav-title .total-reply {\r
		font-size: 14px;\r
	}\r
}\r
\r
.reply-header .reply-navigation .nav-bar .nav-select-reply {\r
	font-family: PingFang SC, HarmonyOS_Medium, Helvetica Neue, Microsoft YaHei,\r
		sans-serif;\r
	font-weight: 500;\r
	color: var(--text1);\r
}\r
\r
@media screen and (max-width: 1681px) {\r
	.reply-header .reply-navigation .nav-bar .nav-select-reply {\r
		font-size: 13px;\r
	}\r
}\r
\r
@media screen and (min-width: 1681px) {\r
	.reply-header .reply-navigation .nav-bar .nav-select-reply {\r
		font-size: 16px;\r
	}\r
}\r
\r
@media (-webkit-max-device-pixel-ratio: 1) {\r
	.reply-header .reply-navigation .nav-bar .nav-select-reply {\r
		font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,\r
			Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;\r
	}\r
}\r
\r
.reply-header .reply-navigation .nav-bar .nav-sort {\r
	display: flex;\r
	align-items: center;\r
	color: var(--text3);\r
}\r
\r
@media screen and (max-width: 1681px) {\r
	.reply-header .reply-navigation .nav-bar .nav-sort {\r
		font-size: 13px;\r
	}\r
}\r
\r
@media screen and (min-width: 1681px) {\r
	.reply-header .reply-navigation .nav-bar .nav-sort {\r
		font-size: 16px;\r
	}\r
}\r
\r
.reply-header .reply-navigation .nav-bar .nav-sort .part-symbol {\r
	height: 11px;\r
	margin: 0 12px;\r
	border-left: solid 1px;\r
}\r
\r
.reply-header .reply-navigation .nav-bar .nav-sort .hot-sort {\r
	cursor: pointer;\r
}\r
\r
.reply-header .reply-navigation .nav-bar .nav-sort .hot-sort:hover {\r
	color: var(--brand_blue);\r
}\r
\r
.reply-header .reply-navigation .nav-bar .nav-sort .time-sort {\r
	cursor: pointer;\r
}\r
\r
.reply-header .reply-navigation .nav-bar .nav-sort .time-sort:hover {\r
	color: var(--brand_blue);\r
}\r
\r
.reply-header .reply-navigation .nav-bar .nav-sort.hot .hot-sort,\r
.reply-header .reply-navigation .nav-bar .nav-sort.time .time-sort {\r
	color: var(--text1);\r
}\r
\r
.reply-header .reply-navigation .nav-operation-warp {\r
	position: absolute;\r
	right: 0;\r
}\r
\r
/*\r
   * @bilibili/userAvatar\r
   * version: 1.2.0-beta.2. Powered by main-frontend\r
   * 用户头像公共组件.\r
   * author: wuxiuran\r
   */\r
.bili-avatar {\r
	display: block;\r
	position: relative;\r
	background-image: url(data:image/gif;base64,R0lGODlhtAC0AOYAALzEy+To7rG6wb/Hzd/k6rK7wsPK0bvDybO8w9/j6dDW3NHX3eHl6+Hm7LnByLa+xeDl6+Lm7M/V27vDyt7j6dHX3r/Gzb/HzsLJ0LS9xLW+xbe/xtLY3s/V3OPn7dne5NXb4eDk67jAx7S8w+Dk6rrCybW9xMXM08TL0sLK0Nrf5cXM0tjd48zS2bO7wsrR17W+xLfAx8fO1La/xsbN07K7wbzEytzh573FzNLX3uLn7cDHzsbN1NPZ377Gzb7FzNbc4sjP1dfd49bb4tvg5svR2LfAxsnQ1s7U293h6Nbb4dTa4MrQ19fc4t3i6L7GzMnP1s7U2tXa4M3T2sDIz97i6N7i6dje5MjO1dfc473Ey8HJz9vg57jBx8jP1tPY38PL0cfO1dne5dXa4ePn7sHIz8vS2Nrf5tDW3djd5M3T2cDIztTZ4L3Fy7rCyMTL0czT2bC5wOXp7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OTQ4QTFCMzg4NDAxMUU1OTA2NUJGQjgwNzVFMDQ2NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OTQ4QTFCNDg4NDAxMUU1OTA2NUJGQjgwNzVFMDQ2NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5NDhBMUIxODg0MDExRTU5MDY1QkZCODA3NUUwNDY1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5NDhBMUIyODg0MDExRTU5MDY1QkZCODA3NUUwNDY1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAAAAAAAsAAAAALQAtAAAB/+AcoKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19sA6SCtTCakBCyuKOLmXKAGOOAhLiDkFoQzCOA9YEDyE5SHCBx9KhdhhMc6EBhMJeXDQMY6GjKIgXCgZR0jIQR4msDRxJRQBHyzjoHwpR0LODRI9keDI0kAAnoI8rMgJoyYnlTkBUEA6KMDSmTsxhTjIEsBAqlWvlowR9BIBCzmf9ANLyCrTrJP/SAzI+WMtW5EncmpIUwkCTpZaqtw9FIBGzgxlIRHgWvLH1MGIDLN8ACRSArQsfRCAnCgAj5wmsjwigbnkk80hA6hezbr1ajkeMoCu7Lq1HIM5C9yQU7v363EQFhxBMeGA8ePIkx+fMEFAzjgFmCtHPuHBcwEAik/fbnwCCiZfQHKzcoLk8/Po06tfr95BC7vWAkgQwb6+/fv4ETqocC2EgfwABihgRzToQM1ZJT0AwIIMNujggxBGKOGEFFYIgHkWYQCBNA0A0BEASOzmDAMS2NBRCh5AE4AMFiGAhIHSeIAEAhYdAQ0HFmkwxDVDmPBQAU2MiCECSiDiAQkhMBAC/wFMNunkk1ASkMCUUzJJAgQMMNDAllxyGUEEXTaQ5ZhjQmDmmRCEcOVRhyhBI0I2RNCMGRZ5cUgO5RWAQAYuCCBADYDW4OeghBZqqJ8FuLAnDBo84OijkDqqwaQwwGDCpRlkOsKmCHTaqQsjAIDFAocEYVEHzDCA4QMkFNIAGAgdcMEAtM5K6621XqDrrrz2uiuuFgQr7LDEFmsBrsjiWgJCYIg3CAnW6ZeiMgtYBEUhEfwQhwEqsFkMGSxw9IOchHjxIwjKBICBRS4R8pkZzHgWhwyFCGHRCcoQMIJFZxAyRBz4NhMADgIUOYgKFjnAQDJLOIeQboTQUAB8y3wgAP8PhHBRwEMCwEUMiw+Z8BhvJVChogMHeEuBbA+NkQysDxmxsCARbPBCNDs8QK4cDBhhUQvJrJHwtHJAAAMS0byQwYZJYRgHxsjM9VAJ3kJgAqrQoAFDCFUdYBEKyUiN0ASENCCCBNF0IIKzcpj4kAFhWwQAIRE4gDY0EjiwsxwePpRC3A+1Qbfd0eS9N2PbAo7QAIPf/YzhhBCFENxRW/T3IHU77gzkg6RgEeXHiB0HBmWfnXYMbK/7tuKjl72B5s10sMHMgqg+OeukD9LA62nPTojtiVf+0A+EMPAA7Mx08ADTgjxhOetzDwLBA1g/04EGzPP9vPBjEwKBBtU7o8D/1oS4jdDloVtE9iAhZBC+JVkg0YS3kQzhgAMoRBEkJgpk0OogMvEb61I2CH29LxJWWMIKROAcAUzACpIIgLYsIoITAGFvkVAAAlAjiADejnseIQQBEHDARlBAAT5gWUemIIkXPKcLGEhD9hyhABdwUA4eDF76HrI+QRCgAAqARADYYACHHUZEjvDAstAzAx54TBEKmBghcgg6Y4iuh3L4YRAbEQEFuGE96HoEA2awHgHIgAg0lCIAP8c6G4gQiIw4wwvIyJ5+QUIB9SkACpCYiCjCx3w6tKJFtCBCEnZmDGUwono20AP6OSIIG2NPAbAwskNo8IbOWx0I10AIEoyg/4RyIMJf2DMDNcwQEiowQCTXU4AjYHAQl/wdG0GIPjmQwH2HCIHT0jMCJtDOElWAwi7RgwNEKGAENwReFYshutz50JCGAJl6HuCFG2YiAl/oW3oQYMwNylKTO0SIM7MIzUL8Jz0bkIE1O8GCLfjoPA/oZjJnGc7WFdAFWyxEtZ4zAhpwwJGhSIAEnrDKjpDKkgWYJzgF+ZBxavEQHlhJRzSAAja80hQkmIIBNGCRGfySEH785gfrWcuHHuIDGajBBnBwAhb8DxYk+MAKLBCFdcJSjbWjJ0PPR4gEwBERViDCR4GhgBrAR5msq6JP8yk+AcDHcwtlpk6XGg0FOJUQUP8d6U4DmYAaMLUZVq3kObUq1YeAbRAJEMBXNUGCV3pgnR94YibCSoixBrKsCDmrINK6VkwoQQNlKAQRJpCBdgmCAQdAgFM6QddBoECneI2DXm+jVk98Jg5hFMRVCDkIF8YBeXMVQCUfG1ViiC5ggqBAZTvhhBhARAWCqMIq0QAbKDgHAVz4RGMFQVqymtYiNCCEavuKiRu41gUGKMIXNyCTAuxgiSOojG5FS4i8lHYYoqMXWn/qiSrkUABSaMASEaKF3ILCqvC5rG+xaxEsuA60mtABHKhQgi2EkQFH2IIBFABQTsiObWGA7G8fYiPMmQ4aamMbFATM3ofcDHOEw5v/3gjBBAYLQ3RFaFzhJjyIIlg4GBgmhA4i/DgOC8LD172wRZggYhJvzsRyqHCKQWyRFdDtwNZbGyHEctcBI8Rk0oMBKJOhABNwbRBUsAgYkiHR7klPA/AlMgyyl0PUGgN4VMOcEYAGDRTorCrjjUMQkmFdhMgMzFB7hhayfFifPYS2yEAxQhCQhB13gWipykBwB3GDNyFkf8cgQkFhO4h/9eAZLYiDwQSBsIfQORkNcJphBUGDDHxlGSoowJ4HYa+H7GAZnkWInegGAA0k5hhKGIEDYDQIUz2Ey8kQgwse8gBrRmBdFzDDAna9gBzkoALADrawh01sYP8a2LxOtrKX/83sZVfA19CuQAucN4E6i5CjCMlAJZGxBYuM2RALoEF1NDADGAigAHrylLo95YJ2o/vd8NbTCDLQqA1sIAYiEEEM9o3vfOvbCPYO+Axm8KhJaQABg0K3AEzwBgngWRAVESAzmrBKBGS2EAFIEwNIQAEKJOBJVAq5yBPQ8ZJ73EpYytKWyKSllbM8S2gKgcxJbnIKHNkQIPBzAQjNjN7GwQQXnwYI3omQazmjCl1oURRYXVU/xyFO0ACCCscmgUszowEc2IIiMSKNBSgSIRuwkNjHTvayN2iYIwj6MxZA9AG5/e3TVDs0WBBmuNv97k+3ozUIwARs4/3vAZpBC4ZaDf8CtMACdDzPuQvwdcBfx0/rEQEAWnBKbYRgCUsAgRSkMIYxLKAHIGjCFVRABC6ogAUg4IADII+QMHDg9bCHfQf29ZARKCD2uLdrHBDQgyawIK4fEAIQNL+EHoB+CJrvwReykAC2xaMHX/80Ij5QEmsbIgJ1j0MYJvFweARglLVfyCHk/JCDGuILLKmBXNkyhII+xOiGACRCrFwV8GeIMyKd6EsHsbKS4ACgQNB4D8NzSBEAZEAGqiEHNzBrOREFhrAELJEBFKMu57FMBcgmrpYTNsB0cpCBHQEXmXYeBYBGkNEAbvYcFxcAXsMSDlhd6WFjkNED6eEDGeN0FgFkguD/BO7HEo82GKKTE+o3CPvEEg7gLdKEHt/GFn2mHnpVZiXRgwQwdeehATYVEommHgIAQSNxHksgCKGmHiwEFgGQdOsRXCH4HPAyPfXRBRwYEiBQH9oWBeixAwEwBffBH1Thc+rxArqXIFZAH/bxA/1lDyFgg+mhARuAHgJgLvchAKdGED7xd9FyHxZ4D23gePmBAIIREkQggJioHmrwEl/4ifXBZvcQAMNEilj4iPOQBZ6oiuixfQRxhLBISs4nDx6QiLV4HxxwD1Kwi/gRWPbghMDIStYnD7tTjPcBa/KgBMp4HxPQfe7AY8+IhdIVDw3gWtVYH/TnDlmwjfaxAVWogg60CI7pkQPxQAbZZ47nUWDvcAWvyI7+N4jocIXyqB4FIH7tEADadI/p8WDtsIT+qB7R6A5IMJBltH7lkFUIiR7uqA7f05DqAQDSWA7/IpHpsXPsUI4YyRJhmA4S1JHpgYPo4AS0J5LPIQI3dw5v2BHnFo/+WAOTZg4yhpLnYX6xEAgAOw==);\r
	-webkit-background-size: cover;\r
	background-size: cover;\r
	border-radius: 50%;\r
	margin: 0;\r
	padding: 0;\r
}\r
\r
.bili-avatar * {\r
	margin: 0;\r
	padding: 0;\r
}\r
\r
.bili-avatar-face {\r
	position: absolute;\r
	top: 50%;\r
	left: 50%;\r
	-webkit-transform: translate(-50%, -50%);\r
	-moz-transform: translate(-50%, -50%);\r
	-ms-transform: translate(-50%, -50%);\r
	-o-transform: translate(-50%, -50%);\r
	transform: translate(-50%, -50%);\r
	width: 100%;\r
	height: 100%;\r
}\r
\r
.bili-avatar-pendent-dom {\r
	height: 176.48%;\r
	width: 176.48%;\r
	position: absolute;\r
	top: -38.33%;\r
	left: -38.33%;\r
	overflow: hidden;\r
}\r
\r
.bili-avatar-pendent-dom img {\r
	height: 100%;\r
	min-width: 100%;\r
	-webkit-user-select: none;\r
	-moz-user-select: none;\r
	-ms-user-select: none;\r
	user-select: none;\r
}\r
\r
.bili-avatar-img {\r
	border: none;\r
	display: block;\r
	-o-object-fit: cover;\r
	object-fit: cover;\r
	image-rendering: -webkit-optimize-contrast;\r
}\r
\r
.bili-avatar-img-radius {\r
	border-radius: 50%;\r
}\r
\r
.bili-avatar-img[src=""],\r
.bili-avatar-img:not([src]) {\r
	opacity: 0;\r
}\r
\r
.bili-avatar-img.bili-avatar-img-error {\r
	display: none;\r
}\r
\r
.bili-avatar-right-icon {\r
	width: 27.5%;\r
	height: 27.5%;\r
	position: absolute;\r
	right: 0;\r
	bottom: -1px;\r
	-webkit-background-size: cover;\r
	background-size: cover;\r
	image-rendering: -webkit-optimize-contrast;\r
}\r
\r
.bili-avatar-nft-icon {\r
	position: absolute;\r
	width: 27.5%;\r
	height: 27.5%;\r
	right: -webkit-calc(27.5% - 1px);\r
	right: -moz-calc(27.5% - 1px);\r
	right: calc(27.5% - 1px);\r
	bottom: -1px;\r
	-webkit-background-size: cover;\r
	background-size: cover;\r
	image-rendering: -webkit-optimize-contrast;\r
}\r
\r
@-webkit-keyframes bili-avatar {\r
	0% {\r
		-webkit-transform: translate3d(0, 0, 0);\r
		transform: translateZ(0);\r
	}\r
\r
	to {\r
		-webkit-transform: translate3d(-97.5%, 0, 0);\r
		transform: translate3d(-97.5%, 0, 0);\r
	}\r
}\r
\r
@-moz-keyframes bili-avatar {\r
	0% {\r
		-moz-transform: translate3d(0, 0, 0);\r
		transform: translateZ(0);\r
	}\r
\r
	to {\r
		-moz-transform: translate3d(-97.5%, 0, 0);\r
		transform: translate3d(-97.5%, 0, 0);\r
	}\r
}\r
\r
@keyframes bili-avatar {\r
	0% {\r
		-webkit-transform: translate3d(0, 0, 0);\r
		-moz-transform: translate3d(0, 0, 0);\r
		transform: translateZ(0);\r
	}\r
\r
	to {\r
		-webkit-transform: translate3d(-97.5%, 0, 0);\r
		-moz-transform: translate3d(-97.5%, 0, 0);\r
		transform: translate3d(-97.5%, 0, 0);\r
	}\r
}\r
\r
.bili-avatar .bili-avatar-size-80 {\r
	width: 22px;\r
	height: 22px;\r
	bottom: -1px;\r
}\r
\r
.bili-avatar .bili-avatar-size-60,\r
.bili-avatar .bili-avatar-size-50,\r
.bili-avatar .bili-avatar-size-48 {\r
	width: 18px;\r
	height: 18px;\r
	bottom: -1px;\r
}\r
\r
.bili-avatar .bili-avatar-size-40,\r
.bili-avatar .bili-avatar-size-36 {\r
	width: 14px;\r
	height: 14px;\r
	bottom: -1px;\r
}\r
\r
.bili-avatar .bili-avatar-size-30,\r
.bili-avatar .bili-avatar-size-24 {\r
	width: 12px;\r
	height: 12px;\r
	bottom: -1px;\r
}\r
\r
.bili-avatar .bili-avatar-size-nft-80 {\r
	width: 22px;\r
	height: 22px;\r
	bottom: -1px;\r
	right: -webkit-calc(22px - 1px);\r
	right: -moz-calc(22px - 1px);\r
	right: 21px;\r
}\r
\r
.bili-avatar .bili-avatar-size-nft-60,\r
.bili-avatar .bili-avatar-size-nft-50,\r
.bili-avatar .bili-avatar-size-nft-48 {\r
	width: 18px;\r
	height: 18px;\r
	bottom: -1px;\r
	right: -webkit-calc(18px - 1px);\r
	right: -moz-calc(18px - 1px);\r
	right: 17px;\r
}\r
\r
.bili-avatar .bili-avatar-size-nft-40,\r
.bili-avatar .bili-avatar-size-nft-36 {\r
	width: 14px;\r
	height: 14px;\r
	bottom: -1px;\r
	right: -webkit-calc(14px - 1px);\r
	right: -moz-calc(14px - 1px);\r
	right: 13px;\r
}\r
\r
.bili-avatar .bili-avatar-size-nft-30,\r
.bili-avatar .bili-avatar-size-nft-24 {\r
	width: 12px;\r
	height: 12px;\r
	bottom: -1px;\r
	right: -webkit-calc(12px - 1px);\r
	right: -moz-calc(12px - 1px);\r
	right: 11px;\r
}\r
\r
.reply-image {\r
	width: var(--3414c33c);\r
	height: var(--822197ea);\r
}\r
\r
.reply-image.b-img {\r
	background-color: inherit;\r
}\r
\r
.reply-image.b-img img {\r
	width: 100%;\r
	height: 100%;\r
}\r
\r
.opacity-enter-active,\r
.opacity-leave-active {\r
	transition: opacity 0.15s ease;\r
}\r
\r
.opacity-enter-from,\r
.opacity-leave-to {\r
	opacity: 0;\r
}\r
\r
.reply-box {\r
	display: flex;\r
	flex-direction: column;\r
}\r
\r
.reply-box .box-normal {\r
	display: flex;\r
	z-index: 2;\r
}\r
\r
.reply-box .box-normal .reply-box-avatar {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	width: 80px;\r
	height: 48px;\r
}\r
\r
.reply-box .box-normal .reply-box-warp {\r
	position: relative;\r
	flex: 1;\r
	transition: 0.2s;\r
	border: 1px solid var(--line_regular);\r
	border-radius: 6px;\r
	background-color: var(--bg3);\r
	overflow-x: hidden;\r
}\r
\r
.reply-box .box-normal .reply-box-warp.focus-within,\r
.reply-box .box-normal .reply-box-warp:hover {\r
	border-color: var(--line_regular);\r
	background-color: var(--bg1);\r
}\r
\r
.reply-box .box-normal .reply-box-warp .textarea-wrap {\r
	padding: 8px 0;\r
	display: flex;\r
	flex-direction: column;\r
	width: 100%;\r
	border-radius: 6px;\r
	cursor: text;\r
	overflow: hidden;\r
}\r
\r
.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info {\r
	margin-left: 10px;\r
	margin-bottom: 4px;\r
	height: 20px;\r
	font-size: 12px;\r
	line-height: 17px;\r
	display: flex;\r
	align-items: center;\r
}\r
\r
.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info__tag {\r
	flex: none;\r
	padding: 2px 6px;\r
	border-radius: 2px;\r
	margin-right: 4px;\r
}\r
\r
.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info__tag--pink {\r
	background-color: var(--Pi1);\r
	color: var(--Pi5);\r
}\r
\r
.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info__tag--blue {\r
	background-color: var(--brand_blue_thin);\r
	color: var(--brand_blue);\r
}\r
\r
.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info__tag--gary {\r
	background-color: var(--graph_bg_regular);\r
	color: var(--text3);\r
}\r
\r
.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info__text {\r
	max-width: calc(100% - 68px);\r
	color: var(--text2);\r
}\r
\r
.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info__close {\r
	flex: none;\r
	margin-left: 4px;\r
	cursor: pointer;\r
}\r
\r
.reply-box .box-normal .reply-box-warp .reply-input {\r
	padding: 0 8px;\r
	width: 100%;\r
	height: 100%;\r
	border: 1px solid var(--Ga1);\r
	border-radius: 6px;\r
	background-color: var(--bg3);\r
	font-family: inherit;\r
	line-height: 20px;\r
	color: var(--text1);\r
	resize: none;\r
	outline: none;\r
	overflow-y: scroll;\r
	overflow-x: hidden;\r
}\r
\r
.reply-box .box-normal .reply-box-warp .reply-input.focus,\r
.reply-box .box-normal .reply-box-warp .reply-input:hover {\r
	background-color: var(--bg1);\r
	border-color: var(--graph_weak);\r
}\r
\r
.reply-box .box-normal .reply-box-warp .reply-box-textarea {\r
	padding: 0 8px;\r
	width: 100%;\r
	height: 32px;\r
	border: none;\r
	border-radius: 6px;\r
	background-color: transparent;\r
	font-family: inherit;\r
	font-size: 14px;\r
	line-height: 32px;\r
	color: var(--text1);\r
	resize: none;\r
	outline: none;\r
}\r
\r
.reply-box .box-normal .reply-box-warp .reply-box-textarea::placeholder {\r
	color: var(--text3);\r
}\r
\r
.reply-box .box-normal .reply-box-warp .image-content-wrap {\r
	background: transparent;\r
}\r
\r
.reply-box .box-expand {\r
	display: flex;\r
	justify-content: space-between;\r
	align-items: center;\r
	margin-left: 80px;\r
	margin-top: 10px;\r
	z-index: 1;\r
	height: 32px;\r
	transition: all 0.2s ease-in-out;\r
}\r
\r
.reply-box .box-expand.hide {\r
	margin-top: 0;\r
	height: 0;\r
	overflow: hidden;\r
	transition: all 0.2s ease-in-out;\r
}\r
\r
.reply-box .box-expand .box-left {\r
	display: flex;\r
	align-items: center;\r
}\r
\r
.reply-box .box-expand .reply-box-emoji {\r
	width: 32px;\r
	height: 26px;\r
	margin-right: 6px;\r
	position: relative;\r
}\r
\r
.reply-box .box-expand .reply-box-emoji .emoji-btn {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	width: 100%;\r
	height: 100%;\r
	border: 1px solid var(--line_regular);\r
	border-radius: 4px;\r
	color: var(--text3);\r
	cursor: pointer;\r
}\r
\r
.reply-box .box-expand .at-btn {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	position: relative;\r
	width: 32px;\r
	height: 26px;\r
	margin-right: 6px;\r
	border: 1px solid var(--line_regular);\r
	border-radius: 4px;\r
	color: var(--text3);\r
	cursor: pointer;\r
}\r
\r
.reply-box .box-expand .image-btn {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	position: relative;\r
	width: 32px;\r
	height: 26px;\r
	border: 1px solid var(--line_regular);\r
	border-radius: 4px;\r
	color: var(--text3);\r
	cursor: pointer;\r
}\r
\r
.reply-box .box-expand .image-btn.disabled {\r
	opacity: 0.4;\r
}\r
\r
.reply-box .box-expand .image-btn .image-upload-input {\r
	appearance: none;\r
	position: absolute;\r
	top: 0;\r
	left: 0;\r
	width: 100%;\r
	height: 100%;\r
	opacity: 0;\r
	font-size: 0;\r
	user-select: auto;\r
	cursor: pointer;\r
}\r
\r
.reply-box .box-expand .forward-to-dynamic {\r
	display: flex;\r
	align-items: center;\r
	margin-left: 16px;\r
	font-size: 12px;\r
	color: var(--text3);\r
}\r
\r
.reply-box .box-expand .forward-to-dynamic .forward-input,\r
.reply-box .box-expand .forward-to-dynamic .forward-label {\r
	cursor: pointer;\r
}\r
\r
.reply-box .box-expand .reply-box-send {\r
	float: right;\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	position: relative;\r
	width: 70px;\r
	height: 32px;\r
	border-radius: 6px;\r
	cursor: pointer;\r
}\r
\r
.reply-box .box-expand .reply-box-send .send-text {\r
	position: absolute;\r
	z-index: 1;\r
	font-size: 16px;\r
	color: var(--text_white);\r
}\r
\r
.reply-box .box-expand .reply-box-send:after {\r
	content: "";\r
	position: absolute;\r
	opacity: 0.5;\r
	width: 100%;\r
	height: 100%;\r
	border-radius: 4px;\r
	background-color: var(--brand_blue);\r
}\r
\r
.reply-box .box-expand .reply-box-send:hover:after {\r
	opacity: 1;\r
}\r
\r
.reply-box.box-active\r
	.box-normal\r
	.reply-box-warp\r
	.reply-box-textarea.send-active {\r
	line-height: normal;\r
}\r
\r
.reply-box.box-active .reply-box-send.send-active:after {\r
	opacity: 1;\r
}\r
\r
.reply-box.disabled .box-normal .reply-box-warp .disable-mask {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	position: absolute;\r
	top: 0;\r
	left: 0;\r
	z-index: 1;\r
	width: 100%;\r
	height: 100%;\r
	border-radius: 6px;\r
	font-size: 12px;\r
	color: var(--text3);\r
	background-color: var(--bg3);\r
}\r
\r
.reply-box.disabled .box-normal .reply-box-warp .disable-mask .no-login-mask {\r
	display: flex;\r
	align-items: center;\r
	justify-content: center;\r
	width: 100%;\r
	height: 100%;\r
	cursor: pointer;\r
}\r
\r
.reply-box.disabled\r
	.box-normal\r
	.reply-box-warp\r
	.disable-mask\r
	.no-login-mask\r
	.login-btn {\r
	padding: 4px 9px;\r
	margin: 0 3px;\r
	border-radius: 4px;\r
	color: var(--text_white);\r
	background-color: var(--brand_blue);\r
}\r
\r
.reply-box.disabled\r
	.box-normal\r
	.reply-box-warp\r
	.disable-mask\r
	.no-login-mask\r
	.login-btn:hover {\r
	background-color: var(--Lb4);\r
	cursor: pointer;\r
}\r
\r
.reply-box.disabled .reply-box-send .send-text {\r
	color: var(--text3);\r
}\r
\r
.reply-box.disabled .reply-box-send:after {\r
	opacity: 1;\r
	background-color: var(--bg3);\r
}\r
\r
.reply-box.fixed-box {\r
	position: relative;\r
	z-index: 2;\r
	padding: 15px 0;\r
	border-top: 0.5px solid var(--graph_bg_thick);\r
	background-color: var(--bg1);\r
}\r
\r
.reply-content-container.fold .reply-content {\r
	display: -webkit-box;\r
	-webkit-box-orient: vertical;\r
	-webkit-line-clamp: 4;\r
}\r
\r
.reply-content-container .reply-content {\r
	color: var(--text1);\r
	overflow: hidden;\r
	word-wrap: break-word;\r
	word-break: break-word;\r
	white-space: pre-wrap;\r
	line-height: 24px;\r
	vertical-align: baseline;\r
}\r
\r
.reply-content-container .reply-content .note-prefix {\r
	display: inline-flex;\r
	align-items: center;\r
	justify-content: center;\r
	padding: 1px 4px;\r
	border-radius: 4px;\r
	margin-right: 8px;\r
	font-size: 12px;\r
	color: var(--text3);\r
	line-height: 20px;\r
	vertical-align: bottom;\r
	background-color: var(--bg2);\r
}\r
\r
.reply-content-container .reply-content .note-prefix .note-icon {\r
	width: 16px;\r
	height: 16px;\r
}\r
\r
.reply-content-container .reply-content .top-icon {\r
	top: -2px;\r
	display: inline-flex;\r
	justify-content: center;\r
	align-items: center;\r
	position: relative;\r
	width: 30px;\r
	height: 18px;\r
	border: 1px solid var(--brand_pink);\r
	border-radius: 3px;\r
	margin-right: 5px;\r
	font-size: 12px;\r
	color: var(--brand_pink);\r
}\r
\r
.reply-content-container .reply-content .emoji-small {\r
	vertical-align: text-bottom;\r
}\r
\r
@media screen and (max-width: 1681px) {\r
	.reply-content-container .reply-content .emoji-small {\r
		width: 20px;\r
		height: 20px;\r
	}\r
}\r
\r
@media screen and (min-width: 1681px) {\r
	.reply-content-container .reply-content .emoji-small {\r
		width: 22px;\r
		height: 22px;\r
	}\r
}\r
\r
.reply-content-container .reply-content .emoji-large {\r
	width: 50px;\r
	height: 50px;\r
	vertical-align: text-bottom;\r
}\r
\r
.reply-content-container .reply-content .icon {\r
	width: 20px;\r
	height: 20px;\r
	vertical-align: text-top;\r
}\r
\r
@media screen and (max-width: 1681px) {\r
	.reply-content-container .reply-content .icon {\r
		line-height: 24px;\r
	}\r
}\r
\r
@media screen and (min-width: 1681px) {\r
	.reply-content-container .reply-content .icon {\r
		line-height: 26px;\r
	}\r
}\r
\r
.reply-content-container .reply-content .icon.search-word {\r
	width: 12px;\r
	display: inline-block;\r
	background-size: contain;\r
	background-repeat: no-repeat;\r
}\r
\r
.reply-content-container .reply-content .jump-link {\r
	vertical-align: baseline;\r
}\r
\r
@media screen and (max-width: 1681px) {\r
	.reply-content-container .reply-content .jump-link {\r
		line-height: 24px;\r
	}\r
}\r
\r
@media screen and (min-width: 1681px) {\r
	.reply-content-container .reply-content .jump-link {\r
		line-height: 26px;\r
	}\r
}\r
\r
.reply-content-container .expand-content {\r
	color: var(--text_link);\r
	cursor: pointer;\r
	margin-left: 4px;\r
}\r
\r
.reply-content-container .expand-content:hover {\r
	color: var(--brand_blue);\r
}\r
\r
.sub-reply-item {\r
	position: relative;\r
	padding: 8px 0 8px 42px;\r
	border-radius: 4px;\r
}\r
\r
@media screen and (max-width: 1681px) {\r
	.sub-reply-item {\r
		font-size: 15px;\r
		line-height: 24px;\r
	}\r
}\r
\r
@media screen and (min-width: 1681px) {\r
	.sub-reply-item {\r
		font-size: 16px;\r
		line-height: 26px;\r
	}\r
}\r
\r
.sub-reply-item.show-reply {\r
	background-color: #dff6fb;\r
	animation-name: enterAnimation-jumpReply-1f8a4018;\r
	animation-duration: 2s;\r
	animation-delay: 3s;\r
	animation-fill-mode: forwards;\r
}\r
\r
.sub-reply-item .sub-user-info {\r
	display: inline-flex;\r
	align-items: center;\r
	margin-right: 9px;\r
	line-height: 24px;\r
	vertical-align: baseline;\r
	white-space: nowrap;\r
}\r
\r
.sub-reply-item .sub-user-info .sub-reply-avatar {\r
	position: absolute;\r
	left: 8px;\r
	cursor: pointer;\r
}\r
\r
.sub-reply-item .sub-user-info .sub-user-name {\r
	font-family: PingFang SC, HarmonyOS_Medium, Helvetica Neue, Microsoft YaHei,\r
		sans-serif;\r
	font-weight: 500;\r
	margin-right: 5px;\r
	color: var(--3bab3096);\r
	cursor: pointer;\r
}\r
\r
@media screen and (max-width: 1681px) {\r
	.sub-reply-item .sub-user-info .sub-user-name {\r
		font-size: 13px;\r
		line-height: 24px;\r
	}\r
}\r
\r
@media screen and (min-width: 1681px) {\r
	.sub-reply-item .sub-user-info .sub-user-name {\r
		font-size: 14px;\r
		line-height: 26px;\r
	}\r
}\r
\r
@media (-webkit-max-device-pixel-ratio: 1) {\r
	.sub-reply-item .sub-user-info .sub-user-name {\r
		font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,\r
			Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;\r
	}\r
}\r
\r
.sub-reply-item .sub-user-info .sub-user-level {\r
	cursor: pointer;\r
}\r
\r
.sub-reply-item .sub-user-info .sub-up-icon {\r
	cursor: default;\r
}\r
\r
.sub-reply-item .sub-reply-info {\r
	display: flex;\r
	align-items: center;\r
	position: relative;\r
	margin-top: 2px;\r
	font-size: 13px;\r
	color: var(--text3);\r
}\r
\r
.sub-reply-item .sub-reply-info .sub-reply-time {\r
	margin-right: var(--7530c1e4);\r
}\r
\r
.sub-reply-item .sub-reply-info .sub-reply-location {\r
	margin-right: 20px;\r
}\r
\r
.sub-reply-item .sub-reply-info .sub-reply-like {\r
	display: flex;\r
	align-items: center;\r
	margin-right: 19px;\r
	cursor: pointer;\r
}\r
\r
.sub-reply-item .sub-reply-info .sub-reply-like .sub-like-icon {\r
	margin-right: 5px;\r
	color: #9499a0;\r
}\r
\r
.sub-reply-item .sub-reply-info .sub-reply-like .sub-like-icon:hover,\r
.sub-reply-item .sub-reply-info .sub-reply-like .sub-like-icon.liked {\r
	color: #00aeec;\r
}\r
\r
.sub-reply-item .sub-reply-info .sub-reply-dislike {\r
	display: flex;\r
	align-items: center;\r
	margin-right: 19px;\r
}\r
\r
.sub-reply-item .sub-reply-info .sub-reply-dislike .sub-dislike-icon {\r
	color: #9499a0;\r
	cursor: pointer;\r
}\r
\r
.sub-reply-item .sub-reply-info .sub-reply-dislike .sub-dislike-icon:hover,\r
.sub-reply-item .sub-reply-info .sub-reply-dislike .sub-dislike-icon.disliked {\r
	color: #00aeec;\r
}\r
\r
.sub-reply-item .sub-reply-info .sub-reply-btn {\r
	cursor: pointer;\r
}\r
\r
.sub-reply-item .sub-reply-info .sub-reply-btn:hover {\r
	color: var(--brand_blue);\r
}\r
\r
.sub-reply-item .sub-reply-info .sub-reply-operation-warp {\r
	position: absolute;\r
	right: 40px;\r
	opacity: 0;\r
}\r
\r
.sub-reply-item:hover .sub-reply-info .sub-reply-operation-warp {\r
	opacity: 1;\r
}\r
\r
@keyframes enterAnimation-jumpReply-1f8a4018 {\r
	0% {\r
		background-color: #dff6fb;\r
	}\r
\r
	to {\r
		background-color: #dff6fb00;\r
	}\r
}\r
\r
.sub-reply-list .view-more {\r
	padding-left: 8px;\r
	font-size: 13px;\r
	color: var(--text3);\r
}\r
\r
.sub-reply-list .view-more .view-more-default .view-more-btn {\r
	cursor: pointer;\r
}\r
\r
.sub-reply-list .view-more .view-more-default .view-more-btn:hover {\r
	color: var(--brand_blue);\r
}\r
\r
.sub-reply-list .view-more .view-more-pagination {\r
	color: var(--text1);\r
}\r
\r
.sub-reply-list .view-more .view-more-pagination .pagination-page-count {\r
	margin-right: 10px;\r
}\r
\r
.sub-reply-list .view-more .view-more-pagination .pagination-btn {\r
	margin: 0 4 0 14px;\r
	cursor: pointer;\r
}\r
\r
.sub-reply-list .view-more .view-more-pagination .pagination-btn:hover {\r
	color: var(--brand_blue);\r
}\r
\r
.sub-reply-list .view-more .view-more-pagination .pagination-page-number {\r
	margin: 0 4px;\r
	cursor: pointer;\r
}\r
\r
.sub-reply-list .view-more .view-more-pagination .pagination-page-number:hover,\r
.sub-reply-list\r
	.view-more\r
	.view-more-pagination\r
	.pagination-page-number.current-page {\r
	color: var(--brand_blue);\r
}\r
\r
.sub-reply-list .view-more .view-more-pagination .pagination-page-dot {\r
	margin: 0 4px;\r
	cursor: default;\r
}\r
\r
.image-exhibition {\r
	margin-top: 8px;\r
	user-select: none;\r
}\r
\r
.image-exhibition .preview-image-container {\r
	max-width: var(--dacbf126);\r
	display: flex;\r
	flex-wrap: wrap;\r
	row-gap: var(--77b1c8ee);\r
	column-gap: var(--0c349aa2);\r
}\r
\r
.image-exhibition .preview-image-container .image-item-wrap {\r
	display: flex;\r
	justify-content: center;\r
	position: relative;\r
	border-radius: var(--7fefecd2);\r
	overflow: hidden;\r
	cursor: zoom-in;\r
}\r
\r
.image-exhibition .preview-image-container .image-item-wrap.vertical {\r
	flex-direction: column;\r
}\r
\r
.image-exhibition .preview-image-container .image-item-wrap.extra-long {\r
	justify-content: start;\r
}\r
\r
.image-exhibition .preview-image-container .image-item-wrap .more-image {\r
	display: flex;\r
	align-items: center;\r
	justify-content: center;\r
	position: absolute;\r
	right: 4px;\r
	bottom: 4px;\r
	height: 20px;\r
	padding: 0 6px;\r
	border-radius: 4px;\r
	font-size: 13px;\r
	color: var(--text_white);\r
	font-weight: 500;\r
	line-height: 18px;\r
	background: rgba(0, 0, 0, 0.7);\r
}\r
\r
.image-exhibition\r
	.preview-image-container\r
	.client-image-item-warp:nth-child(3n + 1) {\r
	border-bottom-right-radius: 0;\r
	border-top-right-radius: 0;\r
}\r
\r
.image-exhibition\r
	.preview-image-container\r
	.client-image-item-warp:nth-child(3n + 2) {\r
	border-radius: 0;\r
}\r
\r
.image-exhibition\r
	.preview-image-container\r
	.client-image-item-warp:nth-child(3n + 3) {\r
	border-bottom-left-radius: 0;\r
	border-top-left-radius: 0;\r
}\r
\r
.image-exhibition\r
	.preview-image-container\r
	.client-image-item-warp:nth-last-child(1) {\r
	border-bottom-right-radius: var(--7fefecd2);\r
	border-top-right-radius: var(--7fefecd2);\r
}\r
\r
.image-exhibition\r
	.preview-image-container\r
	.expand-image-item-warp:nth-child(1) {\r
	border-radius: var(--7fefecd2) 0 0 0;\r
}\r
\r
.image-exhibition\r
	.preview-image-container\r
	.expand-image-item-warp:nth-child(3) {\r
	border-radius: 0 var(--7fefecd2) 0 0;\r
}\r
\r
.image-exhibition\r
	.preview-image-container\r
	.expand-image-item-warp:nth-child(7) {\r
	border-radius: 0 0 0 var(--7fefecd2);\r
}\r
\r
.image-exhibition\r
	.preview-image-container\r
	.expand-image-item-warp:nth-child(9) {\r
	border-radius: 0 0 var(--7fefecd2) 0;\r
}\r
\r
.image-exhibition\r
	.preview-image-container\r
	.expand-image-item-warp:nth-child(3n + 2) {\r
	border-radius: 0;\r
}\r
\r
.image-exhibition\r
	.preview-image-container\r
	.expand-image-item-warp.expand-image-two-rows:nth-child(4) {\r
	border-radius: 0 0 0 var(--7fefecd2);\r
}\r
\r
.image-exhibition\r
	.preview-image-container\r
	.expand-image-item-warp.expand-image-two-rows:nth-child(6) {\r
	border-radius: 0 0 var(--7fefecd2) 0;\r
}\r
\r
.reply-user-sailing {\r
	height: 48px;\r
}\r
\r
.vote-warp {\r
	display: flex;\r
	width: 100%;\r
	height: 80px;\r
	border: 0.5px solid var(--graph_bg_thick);\r
	border-radius: 4px;\r
	margin: 10px 0;\r
}\r
\r
.vote-warp .vote-icon-warp {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	flex-basis: 80px;\r
	flex-shrink: 0;\r
	border-top-left-radius: 4px;\r
	border-bottom-left-radius: 4px;\r
	background-color: var(--brand_blue_thin);\r
}\r
\r
.vote-warp .vote-icon-warp .vote-icon {\r
	width: 40px;\r
	height: 40px;\r
}\r
\r
.vote-warp .vote-container {\r
	display: flex;\r
	align-items: center;\r
	flex: 1;\r
	border-top-right-radius: 4px;\r
	border-bottom-right-radius: 4px;\r
	background-color: var(--bg1);\r
}\r
\r
.vote-warp .vote-container .vote-text-warp {\r
	flex: 1;\r
	padding-left: 15px;\r
}\r
\r
.vote-warp .vote-container .vote-text-warp .vote-title {\r
	font-size: 14px;\r
	color: var(--text1);\r
}\r
\r
.vote-warp .vote-container .vote-text-warp .vote-desc {\r
	margin-top: 10px;\r
	font-size: 12px;\r
	color: var(--text3);\r
}\r
\r
.vote-warp .vote-container .vote-btn-warp {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	flex-basis: 90px;\r
	flex-shrink: 0;\r
}\r
\r
.vote-warp .vote-container .vote-btn-warp .vote-btn {\r
	width: 54px;\r
	height: 28px;\r
	border-radius: 4px;\r
	font-size: 13px;\r
	text-align: center;\r
	line-height: 28px;\r
	color: var(--text_white);\r
	background-color: var(--brand_blue);\r
	cursor: pointer;\r
}\r
\r
.vote-warp .vote-container .vote-btn-warp .vote-btn:hover {\r
	background-color: var(--Lb4);\r
}\r
\r
.vote-dialog {\r
	max-height: 100vh;\r
	overflow-y: auto;\r
}\r
\r
.vote-dialog::-webkit-scrollbar {\r
	width: 4px;\r
	border-radius: 4px;\r
	background-color: transparent;\r
}\r
\r
.vote-dialog::-webkit-scrollbar-thumb {\r
	border-radius: 4px;\r
	background-color: var(--graph_bg_thick);\r
	transition: 0.3s ease-in-out;\r
}\r
\r
.vote-dialog::-webkit-scrollbar-track {\r
	border-radius: 4px;\r
	background-color: transparent;\r
}\r
\r
.vote-dialog .vote-iframe-warp {\r
	height: 600px;\r
	padding-top: 10px;\r
	border-top: 0.5px solid var(--graph_weak);\r
}\r
\r
.vote-dialog .vote-iframe-warp .vote-iframe {\r
	width: 100%;\r
	height: 100%;\r
}\r
\r
.reply-item {\r
	position: relative;\r
}\r
\r
.reply-item .login-limit-mask {\r
	display: none;\r
	position: absolute;\r
	top: 0;\r
	right: 0;\r
	width: 100%;\r
	height: 100%;\r
	z-index: 10;\r
	pointer-events: none;\r
}\r
\r
.reply-item .login-limit-mask .mask-top {\r
	height: 80%;\r
	background: linear-gradient(\r
		180deg,\r
		rgba(255, 255, 255, 0) 0%,\r
		var(--bg1) 100%\r
	);\r
}\r
\r
.reply-item .login-limit-mask .mask-bottom {\r
	height: 20%;\r
	background: var(--bg1);\r
}\r
\r
.reply-item.login-limit-reply-end .login-limit-mask {\r
	display: block;\r
}\r
\r
.reply-item .root-reply-container {\r
	padding: 22px 0 0 80px;\r
}\r
\r
.reply-item .root-reply-container.show-reply {\r
	animation-name: enterAnimation-jumpReply-7041f671;\r
	animation-duration: 5s;\r
	animation-fill-mode: forwards;\r
}\r
\r
.reply-item .root-reply-container .root-reply-avatar {\r
	display: flex;\r
	justify-content: center;\r
	position: absolute;\r
	left: 0;\r
	width: 80px;\r
	cursor: pointer;\r
}\r
\r
.reply-item .root-reply-container .content-warp {\r
	flex: 1;\r
	position: relative;\r
}\r
\r
.reply-item .root-reply-container .content-warp .reply-decorate {\r
	position: absolute;\r
	top: 0;\r
	right: 0;\r
	user-select: none;\r
	transform: translateY(-15px);\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.reply-decorate\r
	.easter-egg-label {\r
	width: 82px;\r
	height: 36px;\r
	transform: translateY(6px);\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.reply-decorate\r
	.easter-egg-label\r
	img {\r
	width: 100%;\r
	height: 100%;\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.reply-decorate\r
	.selected-reply\r
	.selected-reply-icon {\r
	width: var(--213e47ca);\r
	height: var(--268890ba);\r
}\r
\r
.reply-item .root-reply-container .content-warp .reply-decorate .user-sailing {\r
	display: flex;\r
	align-items: center;\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.reply-decorate\r
	.user-sailing\r
	.user-sailing-img {\r
	height: 48px;\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.reply-decorate\r
	.user-sailing\r
	.user-sailing-text {\r
	position: absolute;\r
	right: 0;\r
	font-size: 13px;\r
	color: var(--2bd55d12);\r
	line-height: 16px;\r
	word-break: keep-all;\r
	transform: scale(0.7);\r
	transform-origin: center center;\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.reply-decorate\r
	.user-sailing\r
	.user-sailing-text\r
	.sailing-text {\r
	font-family: fanscard;\r
}\r
\r
.reply-item .root-reply-container .content-warp .user-info {\r
	display: flex;\r
	align-items: center;\r
	margin-bottom: 4px;\r
}\r
\r
@media screen and (max-width: 1681px) {\r
	.reply-item .root-reply-container .content-warp .user-info {\r
		font-size: 13px;\r
	}\r
}\r
\r
@media screen and (min-width: 1681px) {\r
	.reply-item .root-reply-container .content-warp .user-info {\r
		font-size: 14px;\r
	}\r
}\r
\r
.reply-item .root-reply-container .content-warp .user-info .user-name {\r
	font-family: PingFang SC, HarmonyOS_Medium, Helvetica Neue, Microsoft YaHei,\r
		sans-serif;\r
	font-weight: 500;\r
	margin-right: 5px;\r
	color: var(--dc735352);\r
	cursor: pointer;\r
}\r
\r
@media (-webkit-max-device-pixel-ratio: 1) {\r
	.reply-item .root-reply-container .content-warp .user-info .user-name {\r
		font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,\r
			Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;\r
	}\r
}\r
\r
.reply-item .root-reply-container .content-warp .user-info .user-level {\r
	cursor: pointer;\r
}\r
\r
.reply-item .root-reply-container .content-warp .user-info .up-icon {\r
	cursor: default;\r
}\r
\r
.reply-item .root-reply-container .content-warp .user-info .contractor-box {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	position: relative;\r
	width: var(--697d5c46);\r
	height: 12px;\r
	padding: 2px;\r
	border-radius: 2px;\r
	background-color: var(--brand_pink_thin);\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.user-info\r
	.contractor-box.originalFan {\r
	border: 0.5px solid var(--brand_pink);\r
	background-color: transparent;\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.user-info\r
	.contractor-box\r
	.contractor-text {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	font-size: 16px;\r
	transform-origin: center center;\r
	transform: scale(0.5);\r
	position: absolute;\r
	color: var(--brand_pink);\r
	white-space: nowrap;\r
}\r
\r
.reply-item .root-reply-container .content-warp .user-info .fan-badge {\r
	display: flex;\r
	align-items: center;\r
	height: 14px;\r
	padding-left: 5px;\r
	border: 0.5px solid var(--3d3b5a1e);\r
	border-radius: 10px;\r
	margin-left: 5px;\r
	background-image: var(--35269ce2);\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.user-info\r
	.fan-badge\r
	.badge-icon-wrap {\r
	display: flex;\r
	align-items: center;\r
	position: relative;\r
	width: var(--1f5204fd);\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.user-info\r
	.fan-badge\r
	.badge-icon-wrap\r
	.badge-frist-icon {\r
	position: absolute;\r
	left: -8px;\r
	width: 20px;\r
	height: 20px;\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.user-info\r
	.fan-badge\r
	.badge-icon-wrap\r
	.badge-second-icon {\r
	position: absolute;\r
	right: 0;\r
	width: 8px;\r
	height: 11px;\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.user-info\r
	.fan-badge\r
	.badge-name-wrap {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	position: relative;\r
	width: var(--4f9eed68);\r
	height: 100%;\r
	margin-right: 4px;\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.user-info\r
	.fan-badge\r
	.badge-name-wrap\r
	.badge-name {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	font-size: 18px;\r
	transform-origin: center center;\r
	transform: scale(0.5);\r
	position: absolute;\r
	top: 50%;\r
	left: 50%;\r
	color: var(--57e6be72);\r
	font-weight: 500;\r
	white-space: nowrap;\r
	transform: scale(0.5) translate(-50%, -50%);\r
	transform-origin: 0 0;\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.user-info\r
	.fan-badge\r
	.badge-level-wrap {\r
	display: flex;\r
	align-items: center;\r
	justify-content: center;\r
	position: relative;\r
	width: 11.5px;\r
	height: 11.5px;\r
	border-radius: 50%;\r
	margin-right: 0.5px;\r
	background-color: var(--59f85baa);\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.user-info\r
	.fan-badge\r
	.badge-level-wrap\r
	.badge-level {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	font-size: 14px;\r
	transform-origin: center center;\r
	transform: scale(0.5);\r
	position: absolute;\r
	top: 52%;\r
	left: 50%;\r
	font-family: Reeji-CloudHuPo-GBK;\r
	color: var(--103312b6);\r
	font-weight: 500;\r
	white-space: nowrap;\r
	line-height: 1;\r
	transform: scale(0.5) translate(-50%, -43%);\r
	transform-origin: 0 0;\r
}\r
\r
.reply-item .root-reply-container .content-warp .vote-info {\r
	margin-bottom: 4px;\r
	height: 20px;\r
	font-size: 12px;\r
	line-height: 17px;\r
	display: flex;\r
	align-items: center;\r
}\r
\r
.reply-item .root-reply-container .content-warp .vote-info__tag {\r
	padding: 2px 6px;\r
	border-radius: 2px;\r
	margin-right: 4px;\r
	flex: none;\r
}\r
\r
.reply-item .root-reply-container .content-warp .vote-info__tag--pink {\r
	background-color: var(--Pi1);\r
	color: var(--Pi5);\r
}\r
\r
.reply-item .root-reply-container .content-warp .vote-info__tag--blue {\r
	background-color: var(--brand_blue_thin);\r
	color: var(--brand_blue);\r
}\r
\r
.reply-item .root-reply-container .content-warp .vote-info__tag--gray {\r
	background-color: var(--graph_bg_regular);\r
	color: var(--text3);\r
}\r
\r
.reply-item .root-reply-container .content-warp .vote-info__text {\r
	color: var(--Ga7_u);\r
}\r
\r
.reply-item .root-reply-container .content-warp .root-reply {\r
	position: relative;\r
	padding: 2px 0;\r
}\r
\r
@media screen and (max-width: 1681px) {\r
	.reply-item .root-reply-container .content-warp .root-reply {\r
		font-size: 15px;\r
		line-height: 24px;\r
	}\r
}\r
\r
@media screen and (min-width: 1681px) {\r
	.reply-item .root-reply-container .content-warp .root-reply {\r
		font-size: 16px;\r
		line-height: 26px;\r
	}\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.root-reply\r
	.reply-content-container {\r
	display: block;\r
	overflow: hidden;\r
	width: 100%;\r
}\r
\r
.reply-item .root-reply-container .content-warp .root-reply .reply-info {\r
	display: flex;\r
	align-items: center;\r
	position: relative;\r
	margin-top: 2px;\r
	font-size: 13px;\r
	color: var(--text3);\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.root-reply\r
	.reply-info\r
	.reply-time {\r
	margin-right: var(--472bae2d);\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.root-reply\r
	.reply-info\r
	.reply-location {\r
	margin-right: 20px;\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.root-reply\r
	.reply-info\r
	.reply-like {\r
	display: flex;\r
	align-items: center;\r
	margin-right: 19px;\r
	cursor: pointer;\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.root-reply\r
	.reply-info\r
	.reply-like\r
	.like-icon {\r
	margin-right: 5px;\r
	color: #9499a0;\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.root-reply\r
	.reply-info\r
	.reply-like\r
	.like-icon:hover,\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.root-reply\r
	.reply-info\r
	.reply-like\r
	.like-icon.liked {\r
	color: #00aeec;\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.root-reply\r
	.reply-info\r
	.reply-dislike {\r
	display: flex;\r
	align-items: center;\r
	margin-right: 19px;\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.root-reply\r
	.reply-info\r
	.reply-dislike\r
	.dislike-icon {\r
	color: #9499a0;\r
	cursor: pointer;\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.root-reply\r
	.reply-info\r
	.reply-dislike\r
	.dislike-icon:hover,\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.root-reply\r
	.reply-info\r
	.reply-dislike\r
	.dislike-icon.disliked {\r
	color: #00aeec;\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.root-reply\r
	.reply-info\r
	.reply-btn {\r
	cursor: pointer;\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.root-reply\r
	.reply-info\r
	.reply-btn:hover {\r
	color: var(--brand_blue);\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.root-reply\r
	.reply-info\r
	.reply-operation-warp {\r
	position: absolute;\r
	right: 20px;\r
	display: none;\r
}\r
\r
.reply-item .root-reply-container .content-warp .root-reply .reply-tag-list {\r
	display: flex;\r
	align-items: center;\r
	margin-top: 6px;\r
	font-size: 12px;\r
	line-height: 17px;\r
}\r
\r
.reply-item\r
	.root-reply-container\r
	.content-warp\r
	.root-reply\r
	.reply-tag-list\r
	.reply-tag-item {\r
	padding: 2px 6px;\r
	border-radius: 2px;\r
	margin-right: 10px;\r
}\r
\r
.reply-item\r
	.root-reply-container:hover\r
	.content-warp\r
	.root-reply\r
	.reply-info\r
	.reply-operation-warp {\r
	display: block;\r
}\r
\r
.reply-item .sub-reply-container {\r
	padding-left: 72px;\r
}\r
\r
.reply-item .reply-box-container {\r
	padding: 25px 0 10px 80px;\r
}\r
\r
.reply-item .bottom-line {\r
	margin-left: 80px;\r
	border-bottom: 1px solid var(--graph_bg_thick);\r
	margin-top: 14px;\r
}\r
\r
.reply-item .reply-dynamic-card {\r
	position: absolute;\r
	z-index: 10;\r
	top: 30px;\r
	left: 400px;\r
}\r
\r
@keyframes enterAnimation-jumpReply-7041f671 {\r
	0% {\r
		background-color: #dff6fb;\r
	}\r
\r
	to {\r
		background-color: #dff6fb00;\r
	}\r
}\r
\r
.reply-list {\r
	margin-top: 14px;\r
	padding-bottom: 100px;\r
}\r
\r
.reply-list .reply-end-mark {\r
	height: 100px;\r
}\r
\r
.reply-list .reply-end,\r
.reply-list .reply-loading,\r
.reply-list .view-all-reply {\r
	margin-top: 20px;\r
	font-size: 13px;\r
	color: var(--text3);\r
	text-align: center;\r
}\r
\r
.reply-list .view-all-reply:hover {\r
	color: var(--brand_blue);\r
	cursor: pointer;\r
}\r
\r
.reply-list .login-prompt {\r
	display: flex;\r
	align-items: center;\r
	justify-content: center;\r
	width: calc(100% - 80px);\r
	height: 50px;\r
	margin: 16px 0 0 auto;\r
	border-radius: 6px;\r
	font-size: 14px;\r
	color: var(--brand_blue);\r
	background-color: var(--brand_blue_thin);\r
	transition: 0.2s;\r
	cursor: pointer;\r
}\r
\r
.reply-list .login-prompt:hover {\r
	background-color: var(--Lb2);\r
}\r
\r
.user-card {\r
	position: absolute;\r
	top: var(--555c4a14);\r
	left: var(--8468e010);\r
	z-index: 10;\r
	width: 366px;\r
	border: 0.5px solid var(--graph_weak);\r
	border-radius: 8px;\r
	background-color: var(--bg1);\r
	box-shadow: 0 0 30px #0000001a;\r
}\r
\r
.user-card .card-bg {\r
	width: 100%;\r
	height: 85px;\r
	border-radius: 8px 8px 0 0;\r
	overflow: hidden;\r
	background-image: var(--71924242);\r
	background-size: cover;\r
	background-repeat: no-repeat;\r
	background-position: center;\r
}\r
\r
.user-card .user-card-avatar {\r
	display: flex;\r
	justify-content: center;\r
	position: absolute;\r
	width: 70px;\r
	margin-top: 10px;\r
	cursor: pointer;\r
}\r
\r
.user-card .card-content {\r
	display: flex;\r
	flex-direction: column;\r
	padding: 12px 20px 16px 70px;\r
}\r
\r
.user-card .card-content .card-user-info {\r
	display: flex;\r
	align-items: center;\r
	color: var(--text1);\r
	margin-bottom: 10px;\r
}\r
\r
.user-card .card-content .card-user-info .card-user-name {\r
	max-width: 160px;\r
	margin-right: 5px;\r
	font-size: 16px;\r
	font-weight: 600;\r
	overflow: hidden;\r
	white-space: nowrap;\r
	text-overflow: ellipsis;\r
	color: var(--text1);\r
	color: var(--7ba58c95);\r
	text-decoration: none;\r
}\r
\r
.user-card .card-content .card-user-info .card-user-sex {\r
	width: 16px;\r
	height: 16px;\r
	margin-right: 5px;\r
}\r
\r
.user-card .card-content .card-user-info .card-user-level {\r
	margin-right: 5px;\r
	cursor: pointer;\r
}\r
\r
.user-card .card-content .card-user-info .card-user-vip {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	width: var(--7a718880);\r
	height: 16px;\r
	padding: 1px 4px;\r
	border-radius: 2px;\r
	color: var(--612d8511);\r
	background-color: var(--29ab308e);\r
	cursor: default;\r
}\r
\r
.user-card .card-content .card-user-info .card-user-vip .card-vip-text {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	font-size: 20px;\r
	transform-origin: center center;\r
	transform: scale(0.5);\r
	white-space: nowrap;\r
	font-style: normal;\r
}\r
\r
.user-card .card-content .card-social-info {\r
	display: flex;\r
	align-items: center;\r
	font-size: 12px;\r
	color: var(--text1);\r
}\r
\r
.user-card .card-content .card-social-info .card-user-attention,\r
.user-card .card-content .card-social-info .card-user-fans,\r
.user-card .card-content .card-social-info .card-user-like {\r
	margin-right: 18px;\r
	color: inherit;\r
	text-decoration: none;\r
}\r
\r
.user-card\r
	.card-content\r
	.card-social-info\r
	.card-user-attention\r
	.social-info-title,\r
.user-card .card-content .card-social-info .card-user-fans .social-info-title,\r
.user-card .card-content .card-social-info .card-user-like .social-info-title {\r
	margin-left: 3px;\r
	color: var(--text3);\r
}\r
\r
.user-card .card-content .card-verify-info {\r
	padding-top: 10px;\r
	font-size: 12px;\r
	color: var(--text3);\r
}\r
\r
.user-card .card-content .card-verify-info .card-verify-icon {\r
	vertical-align: text-bottom;\r
	margin-right: 3px;\r
}\r
\r
.user-card .card-content .card-sign {\r
	padding-top: 8px;\r
	font-size: 12px;\r
	color: var(--text3);\r
	word-break: break-all;\r
}\r
\r
.user-card .card-content .card-btn-warp {\r
	display: flex;\r
	margin-top: 16px;\r
	font-size: 14px;\r
}\r
\r
.user-card .card-content .card-btn-warp .card-attention-btn {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	width: 100px;\r
	height: 30px;\r
	border-radius: 4px;\r
	margin-right: 8px;\r
	color: var(--text_white);\r
	background-color: var(--brand_blue);\r
	transition: 0.4s;\r
	cursor: pointer;\r
}\r
\r
.user-card\r
	.card-content\r
	.card-btn-warp\r
	.card-attention-btn\r
	.cancel-attention-text {\r
	display: none;\r
	position: absolute;\r
}\r
\r
.user-card .card-content .card-btn-warp .card-attention-btn.attention {\r
	color: var(--text2);\r
	background-color: var(--bg3);\r
}\r
\r
.user-card\r
	.card-content\r
	.card-btn-warp\r
	.card-attention-btn.attention:hover\r
	.attention-text {\r
	display: none;\r
}\r
\r
.user-card\r
	.card-content\r
	.card-btn-warp\r
	.card-attention-btn.attention:hover\r
	.cancel-attention-text {\r
	display: inline;\r
}\r
\r
.user-card .card-content .card-btn-warp .card-message-btn {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	width: 100px;\r
	height: 30px;\r
	border: 1px solid var(--graph_weak);\r
	border-radius: 4px;\r
	color: var(--text2);\r
	cursor: pointer;\r
}\r
\r
.user-card .card-content .card-btn-warp .card-message-btn:hover {\r
	border-color: var(--brand_blue);\r
	color: var(--brand_blue);\r
}\r
\r
.dynamic-card {\r
	display: flex;\r
	flex-direction: column;\r
	position: absolute;\r
	z-index: 10;\r
	top: var(--7b058890);\r
	left: 400px;\r
	width: 710px;\r
	height: 550px;\r
	border-radius: 6px;\r
	background-color: var(--bg1);\r
	box-shadow: 0 0 25px #00000026;\r
}\r
\r
.dynamic-card .card-header {\r
	display: flex;\r
	align-items: center;\r
	flex-basis: 50px;\r
	padding: 0 10px;\r
	border-bottom: 0.5px solid var(--line_light);\r
}\r
\r
.dynamic-card .card-header .card-title {\r
	flex: 1;\r
	text-align: center;\r
	font-size: 16px;\r
	color: var(--text1);\r
}\r
\r
.dynamic-card .card-header .close-card {\r
	display: flex;\r
	align-items: center;\r
	justify-content: center;\r
	width: 30px;\r
	height: 30px;\r
	border-radius: 6px;\r
	color: var(--text2);\r
	transition: 0.2s;\r
	cursor: pointer;\r
}\r
\r
.dynamic-card .card-header .close-card:hover {\r
	background-color: var(--bg3);\r
}\r
\r
.dynamic-card .card-content {\r
	flex: 1;\r
}\r
\r
.dynamic-card .card-content::-webkit-scrollbar {\r
	width: 4px;\r
	border-radius: 4px;\r
	background-color: transparent;\r
}\r
\r
.dynamic-card .card-content::-webkit-scrollbar-thumb {\r
	border-radius: 4px;\r
	background-color: var(--graph_bg_thick);\r
	transition: 0.3s ease-in-out;\r
}\r
\r
.dynamic-card .card-content::-webkit-scrollbar-track {\r
	border-radius: 4px;\r
	background-color: transparent;\r
}\r
\r
.dynamic-card .card-content .dynamic-card-iframe {\r
	width: 100%;\r
	height: 100%;\r
}\r
\r
.reply-view-image {\r
	position: fixed;\r
	z-index: 999999;\r
	top: 0;\r
	left: 0;\r
	width: 100%;\r
	height: 100%;\r
	background: rgba(24, 25, 28, 0.85);\r
	transform: scale(1);\r
	user-select: none;\r
	cursor: default;\r
	-webkit-user-select: none;\r
	-moz-user-select: none;\r
	-ms-user-select: none;\r
	-webkit-user-drag: none;\r
}\r
\r
.reply-view-image,\r
.reply-view-image * {\r
	box-sizing: border-box;\r
}\r
\r
.reply-view-image .operation-btn .operation-btn-icon {\r
	display: flex;\r
	align-items: center;\r
	justify-content: center;\r
	position: absolute;\r
	z-index: 2;\r
	width: 42px;\r
	height: 42px;\r
	border-radius: 50%;\r
	color: var(--text_white);\r
	background: rgba(0, 0, 0, 0.58);\r
	transition: 0.2s;\r
	cursor: pointer;\r
}\r
\r
.reply-view-image .operation-btn .operation-btn-icon:hover {\r
	color: var(--brand_pink);\r
}\r
\r
.reply-view-image .operation-btn .operation-btn-icon.close-container {\r
	top: 16px;\r
	right: 16px;\r
}\r
\r
.reply-view-image .operation-btn .operation-btn-icon.last-image {\r
	top: 50%;\r
	left: 16px;\r
	transform: translateY(-50%);\r
}\r
\r
.reply-view-image .operation-btn .operation-btn-icon.next-image {\r
	top: 50%;\r
	right: 16px;\r
	transform: translateY(-50%);\r
}\r
\r
.reply-view-image .show-image-wrap {\r
	display: flex;\r
	align-items: center;\r
	justify-content: center;\r
	position: absolute;\r
	width: 100%;\r
	height: 100%;\r
	max-height: 100%;\r
	padding: 0 100px;\r
	overflow: auto;\r
}\r
\r
.reply-view-image .show-image-wrap .loading-svga {\r
	position: absolute;\r
	top: 50%;\r
	left: 50%;\r
	transform: translate(-50%, -50%);\r
	width: 42px;\r
	height: 42px;\r
}\r
\r
.reply-view-image .show-image-wrap.vertical {\r
	flex-direction: column;\r
	justify-content: var(--c186e874);\r
}\r
\r
.reply-view-image .show-image-wrap .image-content {\r
	width: calc(100vw - 200px);\r
	max-width: var(--34114ac9);\r
	-webkit-user-drag: none;\r
}\r
\r
.reply-view-image .preview-list {\r
	display: flex;\r
	align-items: center;\r
	position: absolute;\r
	left: 50%;\r
	bottom: 30px;\r
	z-index: 2;\r
	padding: 6px 10px;\r
	border-radius: 8px;\r
	background: rgba(24, 25, 28, 0.8);\r
	backdrop-filter: blur(20px);\r
	transform: translate(-50%);\r
}\r
\r
.reply-view-image .preview-list .preview-item-box {\r
	padding: 1px;\r
	border: 2px solid transparent;\r
	border-radius: 8px;\r
	transition: 0.3s;\r
	cursor: pointer;\r
}\r
\r
.reply-view-image .preview-list .preview-item-box.active {\r
	border-color: var(--brand_pink);\r
}\r
\r
.reply-view-image .preview-list .preview-item-box .preview-item-wrap {\r
	display: flex;\r
	justify-content: center;\r
	overflow: hidden;\r
	width: 100%;\r
	height: 100%;\r
	border-radius: 6px;\r
}\r
\r
.reply-view-image .preview-list .preview-item-box .preview-item-wrap.vertical {\r
	flex-direction: column;\r
}\r
\r
.reply-view-image\r
	.preview-list\r
	.preview-item-box\r
	.preview-item-wrap.extra-long {\r
	justify-content: start;\r
}\r
\r
.reply-view-image\r
	.preview-list\r
	.preview-item-box\r
	.preview-item-wrap\r
	.item-content {\r
	-webkit-user-drag: none;\r
}\r
\r
.reply-view-image--transition-enter-active,\r
.reply-view-image--transition-leave-active {\r
	transition: all 0.3s ease;\r
}\r
\r
.reply-view-image--transition-enter-from,\r
.reply-view-image--transition-leave-to {\r
	transform: scale(0.4);\r
	opacity: 0;\r
}\r
\r
.reply-warp {\r
	position: relative;\r
}\r
\r
.reply-warp .fixed-reply-box {\r
	position: fixed;\r
	bottom: 0;\r
	left: var(--3e88ddc5);\r
	z-index: 10;\r
	width: var(--d9a0b070);\r
}\r
\r
.reply-warp .fixed-reply-box .reply-box-shadow {\r
	position: absolute;\r
	top: -10px;\r
	z-index: 1;\r
	width: 100%;\r
	height: 36px;\r
	border-radius: 50%;\r
	background-color: #00000014;\r
	filter: blur(10px);\r
}\r
\r
.reply-warp .fixed-reply-box--transition-enter-active,\r
.reply-warp .fixed-reply-box--transition-leave-active {\r
	transition: opacity 0.5s ease;\r
}\r
\r
.reply-warp .fixed-reply-box--transition-enter-from,\r
.reply-warp .fixed-reply-box--transition-leave-to {\r
	opacity: 0;\r
}\r
\r
.bili-comment.browser-pc {\r
	background-color: var(--bg1);\r
}\r
\r
.bili-comment.browser-pc * {\r
	font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,\r
		sans-serif;\r
	font-weight: 400;\r
	box-sizing: border-box;\r
	-webkit-font-smoothing: antialiased;\r
}\r
\r
@media (-webkit-max-device-pixel-ratio: 1) {\r
	.bili-comment.browser-pc * {\r
		font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,\r
			Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;\r
	}\r
}\r
\r
.bili-comment.browser-pc * ul {\r
	padding: 0;\r
	margin: 0;\r
	list-style: none;\r
}\r
\r
.bili-comment.browser-pc * a {\r
	text-decoration: none;\r
	background-color: transparent;\r
	color: var(--text_link);\r
	cursor: pointer;\r
}\r
\r
.bili-comment.browser-pc * a:hover {\r
	color: var(--Lb4);\r
}\r
\r
.bili-comment.browser-pc * i {\r
	font-style: normal;\r
}\r
\r
.bili-comment.browser-pc * p {\r
	margin: 0;\r
	padding: 0;\r
}\r
\r
.bili-comment.browser-pc .comment-container {\r
	animation-name: enterAnimation-commentContainer;\r
	animation-duration: 1s;\r
	animation-fill-mode: forwards;\r
}\r
\r
.reply-operation-client {\r
	display: inline-flex;\r
	position: relative;\r
}\r
\r
.reply-operation-client .operation-icon {\r
	border-radius: 4px;\r
	cursor: pointer;\r
}\r
\r
.reply-operation-client .operation-icon:hover {\r
	background-color: var(--graph_bg_thick);\r
}\r
\r
.reply-operation-client .operation-list {\r
	display: flex;\r
	flex-direction: column;\r
	position: absolute;\r
	top: 10px;\r
	right: 0;\r
	z-index: 10;\r
	width: 180px;\r
	padding: 12px 0;\r
	border-radius: 6px;\r
	font-size: 14px;\r
	color: var(--text2);\r
	background-color: var(--bg1_float);\r
	box-shadow: 0 0 5px #0003;\r
}\r
\r
.reply-operation-client .operation-list .operation-option {\r
	display: flex;\r
	align-items: center;\r
	height: 40px;\r
	padding: 0 15px;\r
	cursor: pointer;\r
}\r
\r
.reply-operation-client .operation-list .operation-option:hover {\r
	background-color: var(--graph_bg_thick);\r
}\r
\r
.reply-operation-client .operation-list .delete-reply-modal {\r
	position: absolute;\r
	top: 0;\r
	left: 50%;\r
	width: auto;\r
	padding: 10px 20px;\r
	border: 1px solid var(--graph_bg_thick);\r
	border-radius: 8px;\r
	margin-bottom: 100px;\r
	font-size: 12px;\r
	line-height: 12px;\r
	text-align: center;\r
	white-space: nowrap;\r
	background-color: var(--bg1);\r
	box-shadow: 0 0 5px #0003;\r
	transform: translate(-50%, -100%);\r
}\r
\r
.reply-operation-client .operation-list .delete-reply-modal .delete-reply-btn {\r
	display: flex;\r
	justify-content: center;\r
}\r
\r
.reply-operation-client\r
	.operation-list\r
	.delete-reply-modal\r
	.delete-reply-btn\r
	.comfirm-delete {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	width: 40px;\r
	height: 20px;\r
	border-radius: 4px;\r
	margin-right: 20px;\r
	color: var(--text_white);\r
	background-color: var(--brand_blue);\r
}\r
\r
.reply-operation-client\r
	.operation-list\r
	.delete-reply-modal\r
	.delete-reply-btn\r
	.comfirm-delete:hover {\r
	background-color: var(--Lb4);\r
}\r
\r
.reply-operation-client\r
	.operation-list\r
	.delete-reply-modal\r
	.delete-reply-btn\r
	.cancel-delete {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	width: 40px;\r
	height: 20px;\r
}\r
\r
.reply-operation-client\r
	.operation-list\r
	.delete-reply-modal\r
	.delete-reply-btn\r
	.cancel-delete:hover {\r
	color: var(--brand_blue);\r
}\r
\r
.select-reply-dialog-client .select-dialog-content {\r
	text-align: left;\r
}\r
\r
.select-reply-dialog-client .cancel-select-reply {\r
	width: 130px;\r
	margin-right: 20px;\r
}\r
\r
.select-reply-dialog-client .comfirm-select-reply {\r
	width: 130px;\r
}\r
\r
.close-reply-dialog-client .close-reply-dialog-content {\r
	text-align: left;\r
}\r
\r
.close-reply-dialog-client .cancel-close-reply {\r
	width: 130px;\r
	margin-right: 20px;\r
}\r
\r
.close-reply-dialog-client .comfirm-close-reply {\r
	width: 130px;\r
}\r
\r
.close-danmaku-dialog-client .close-danmaku-dialog-content {\r
	text-align: left;\r
}\r
\r
.close-danmaku-dialog-client .cancel-close-danmaku {\r
	width: 130px;\r
	margin-right: 20px;\r
}\r
\r
.close-danmaku-dialog-client .comfirm-close-danmaku {\r
	width: 130px;\r
}\r
\r
.blacklist-dialog-client .blacklist-dialog-content {\r
	text-align: center;\r
}\r
\r
.blacklist-dialog-client .comfirm-pull-blacklist {\r
	margin-right: 20px;\r
}\r
\r
.reply-header-client .reply-notice {\r
	display: flex;\r
	align-items: center;\r
	position: relative;\r
	height: 40px;\r
	padding: 11px 14px;\r
	margin-bottom: 10px;\r
	font-size: 12px;\r
	border-radius: 2px;\r
	color: var(--text_notice);\r
	background-color: var(--Or0);\r
	cursor: pointer;\r
}\r
\r
.reply-header-client .reply-notice .notice-content {\r
	flex: 1;\r
	position: relative;\r
	padding: 0 5px;\r
	line-height: 18px;\r
	vertical-align: top;\r
	word-wrap: break-word;\r
	word-break: break-all;\r
	white-space: nowrap;\r
	overflow: hidden;\r
	text-overflow: ellipsis;\r
	transition: 2s;\r
}\r
\r
.reply-header-client .reply-navigation {\r
	margin: 12px 0;\r
}\r
\r
.reply-header-client .reply-navigation .nav-bar {\r
	display: flex;\r
	align-items: center;\r
	position: relative;\r
	list-style: none;\r
	margin: 0;\r
	padding: 0;\r
}\r
\r
.reply-header-client .reply-navigation .nav-bar .nav-select-reply {\r
	font-size: 12px;\r
	color: var(--text1);\r
}\r
\r
.reply-header-client .reply-navigation .nav-bar .nav-sort {\r
	display: flex;\r
	align-items: center;\r
	font-size: 12px;\r
	color: var(--text3);\r
}\r
\r
.reply-header-client .reply-navigation .nav-bar .nav-sort .part-symbol {\r
	height: 10px;\r
	margin: 0 8px;\r
	border-left: solid 1px;\r
}\r
\r
.reply-header-client .reply-navigation .nav-bar .nav-sort .hot-sort {\r
	cursor: pointer;\r
}\r
\r
.reply-header-client .reply-navigation .nav-bar .nav-sort .hot-sort:hover {\r
	color: var(--brand_blue);\r
}\r
\r
.reply-header-client .reply-navigation .nav-bar .nav-sort .time-sort {\r
	cursor: pointer;\r
}\r
\r
.reply-header-client .reply-navigation .nav-bar .nav-sort .time-sort:hover {\r
	color: var(--brand_blue);\r
}\r
\r
.reply-header-client .reply-navigation .nav-bar .nav-sort.hot .hot-sort,\r
.reply-header-client .reply-navigation .nav-bar .nav-sort.time .time-sort {\r
	color: var(--text1);\r
}\r
\r
.reply-header-client .reply-navigation .nav-operation-warp {\r
	position: absolute;\r
	right: 0;\r
}\r
\r
.reply-box-client {\r
	display: flex;\r
	flex-direction: column;\r
}\r
\r
.reply-box-client .reply-box-warp {\r
	position: relative;\r
	flex: 1;\r
}\r
\r
.reply-box-client .reply-box-warp .reply-box-textarea {\r
	width: 100%;\r
	height: 32px;\r
	padding: 5px 12px;\r
	border: 1px solid transparent;\r
	border-radius: 6px;\r
	line-height: 20px;\r
	color: var(--text1);\r
	background-color: var(--bg2);\r
	resize: none;\r
	outline: none;\r
	transition: 0.2s;\r
}\r
\r
.reply-box-client .reply-box-warp .reply-box-textarea::placeholder {\r
	color: var(--text4);\r
}\r
\r
.reply-box-client .reply-box-warp .reply-box-textarea.focus,\r
.reply-box-client .reply-box-warp .reply-box-textarea:hover {\r
	border-color: var(--brand_pink);\r
}\r
\r
.reply-box-client .box-operation-warp {\r
	display: flex;\r
	align-items: center;\r
	margin-top: 10px;\r
	height: 32px;\r
}\r
\r
.reply-box-client .box-operation-warp .reply-box-emoji {\r
	position: relative;\r
	margin-right: auto;\r
}\r
\r
.reply-box-client .box-operation-warp .reply-box-emoji .box-emoji-icon {\r
	cursor: pointer;\r
}\r
\r
.reply-box-client .box-operation-warp .reply-box-send {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	position: relative;\r
	width: 70px;\r
	height: 100%;\r
	border-radius: 4px;\r
	cursor: pointer;\r
}\r
\r
.reply-box-client .box-operation-warp .reply-box-send .send-text {\r
	position: absolute;\r
	z-index: 1;\r
	color: var(--text_white);\r
}\r
\r
.reply-box-client .box-operation-warp .reply-box-send:after {\r
	content: "";\r
	position: absolute;\r
	opacity: 0.5;\r
	width: 100%;\r
	height: 100%;\r
	border-radius: 4px;\r
	background-color: var(--brand_pink);\r
}\r
\r
.reply-box-client .box-operation-warp .reply-box-send:hover:after {\r
	opacity: 1;\r
}\r
\r
.reply-box-client.box-active .reply-box-warp .reply-box-textarea {\r
	height: 60px;\r
}\r
\r
.reply-box-client.box-active .reply-box-send.send-active:after {\r
	opacity: 1;\r
}\r
\r
.reply-box-client.disabled .reply-box-warp .disable-mask {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	position: absolute;\r
	top: 0;\r
	left: 0;\r
	z-index: 1;\r
	width: 100%;\r
	height: 100%;\r
	border-radius: 6px;\r
	font-size: 12px;\r
	color: var(--text3);\r
	background-color: var(--bg3);\r
}\r
\r
.reply-box-client.disabled .reply-box-warp .disable-mask .no-login-mask {\r
	cursor: pointer;\r
}\r
\r
.reply-box-client.disabled .box-operation-warp .reply-box-send {\r
	cursor: not-allowed;\r
}\r
\r
.reply-box-client.disabled .box-operation-warp .reply-box-send .send-text {\r
	color: var(--text3);\r
}\r
\r
.reply-box-client.disabled .box-operation-warp .reply-box-send:after {\r
	opacity: 1;\r
	background-color: var(--bg3);\r
}\r
\r
.note-prefix {\r
	vertical-align: -3px;\r
	display: inline-flex;\r
	align-items: center;\r
	justify-content: center;\r
	padding: 0 3px;\r
	line-height: 19px;\r
	border-radius: 4px;\r
	margin-right: 6px;\r
	font-size: 12px;\r
	color: var(--text3);\r
	background-color: var(--bg2);\r
}\r
\r
.note-prefix .note-icon {\r
	width: 16px;\r
	height: 16px;\r
}\r
\r
.reply-content-client {\r
	color: var(--text1);\r
	overflow: hidden;\r
	word-wrap: break-word;\r
	word-break: break-word;\r
	white-space: pre-wrap;\r
	vertical-align: baseline;\r
	transition: 0.2s;\r
}\r
\r
.reply-content-client.root {\r
	line-height: 25px;\r
}\r
\r
.reply-content-client.need-view-more {\r
	display: -webkit-box;\r
	-webkit-box-orient: vertical;\r
	overflow: hidden;\r
}\r
\r
.reply-content-client.sub {\r
	line-height: 20px;\r
}\r
\r
.reply-content-client .top-icon {\r
	display: inline-flex;\r
	justify-content: center;\r
	align-items: center;\r
	position: relative;\r
	width: 30px;\r
	height: 18px;\r
	border: 1px solid var(--brand_pink);\r
	border-radius: 3px;\r
	margin-right: 5px;\r
	font-size: 12px;\r
	color: var(--brand_pink);\r
	vertical-align: 1px;\r
}\r
\r
.reply-content-client .emoji-small {\r
	width: 20px;\r
	height: 20px;\r
	vertical-align: text-bottom;\r
}\r
\r
.reply-content-client .emoji-large {\r
	width: 36px;\r
	height: 36px;\r
	vertical-align: text-bottom;\r
}\r
\r
.reply-content-client .jump-link {\r
	vertical-align: baseline;\r
}\r
\r
.reply-content-client .icon {\r
	width: 20px;\r
	height: 20px;\r
	vertical-align: text-top;\r
}\r
\r
.reply-content-client .icon.vote {\r
	width: 16px;\r
	height: 16px;\r
	margin-right: 3px;\r
	vertical-align: text-bottom;\r
}\r
\r
.reply-content-client .icon.search-word {\r
	width: 12px;\r
	display: inline-block;\r
	background-size: contain;\r
	background-repeat: no-repeat;\r
}\r
\r
.view-more-reply {\r
	font-size: 12px;\r
	color: var(--text_link);\r
	line-height: 17px;\r
	cursor: pointer;\r
}\r
\r
.view-more-reply:hover {\r
	color: var(--Lb4);\r
}\r
\r
.sub-reply-item-client {\r
	display: -webkit-box;\r
	-webkit-box-orient: vertical;\r
	-webkit-line-clamp: 2;\r
	position: relative;\r
	max-height: 42px;\r
	padding: 3px 0;\r
	font-size: 14px;\r
	overflow: hidden;\r
}\r
\r
.sub-reply-item-client .sub-user-info {\r
	display: inline-flex;\r
	align-items: center;\r
	color: var(--text2);\r
	line-height: 20px;\r
	vertical-align: baseline;\r
	white-space: nowrap;\r
}\r
\r
.sub-reply-item-client .sub-user-info .sub-user-name {\r
	margin-right: 5px;\r
	font-size: 14px;\r
	cursor: pointer;\r
}\r
\r
.sub-reply-item-client .sub-user-info .sub-up-icon {\r
	margin-right: 4px;\r
	cursor: default;\r
}\r
\r
.sub-reply-list-client {\r
	border-radius: 4px;\r
	padding: 7px 10px;\r
	margin-top: 12px;\r
	background-color: var(--bg2_float);\r
}\r
\r
.sub-reply-list-client .view-more {\r
	margin-top: 4px;\r
	cursor: pointer;\r
}\r
\r
.sub-reply-list-client .view-more .view-more-text {\r
	font-size: 12px;\r
	color: var(--text_link);\r
}\r
\r
.sub-reply-list-client .view-more .view-more-text:hover {\r
	color: var(--Lb4);\r
}\r
\r
.content-warp--blacklist .reply-content {\r
	display: inline-flex;\r
	align-items: center;\r
	padding: 4px;\r
	border-radius: 4px;\r
	color: var(--text1);\r
	background-color: var(--bg2_float);\r
}\r
\r
.content-warp--blacklist .reply-content .ban-icon {\r
	margin-right: 4px;\r
}\r
\r
.content-warp--blacklist .reply-header {\r
	display: flex;\r
	align-items: center;\r
	margin-bottom: 8px;\r
}\r
\r
.content-warp--blacklist .reply-header .root-reply-avatar {\r
	display: flex;\r
	justify-content: center;\r
	position: absolute;\r
	left: 0;\r
	cursor: pointer;\r
}\r
\r
.content-warp--blacklist .reply-header .root-reply-avatar .blacklist-avatar {\r
	width: 30px;\r
	height: 30px;\r
}\r
\r
.content-warp--blacklist .reply-header .reply-info .balcklist-name {\r
	color: var(--text1);\r
}\r
\r
.reply-item-client {\r
	position: relative;\r
	padding: 10px 0 14px 42px;\r
	border-bottom: 1px solid var(--line_light);\r
}\r
\r
.reply-item-client .content-warp {\r
	flex: 1;\r
	position: relative;\r
}\r
\r
.reply-item-client .content-warp .reply-header {\r
	display: flex;\r
	align-items: center;\r
	margin-bottom: 8px;\r
}\r
\r
.reply-item-client .content-warp .reply-header .root-reply-avatar {\r
	display: flex;\r
	justify-content: center;\r
	position: absolute;\r
	left: -42px;\r
	cursor: pointer;\r
}\r
\r
.reply-item-client .content-warp .reply-header .reply-info {\r
	display: flex;\r
	flex-direction: column;\r
}\r
\r
.reply-item-client .content-warp .reply-header .reply-info .user-info {\r
	display: flex;\r
	align-items: center;\r
	font-size: 13px;\r
	color: var(--text2);\r
}\r
\r
.reply-item-client\r
	.content-warp\r
	.reply-header\r
	.reply-info\r
	.user-info\r
	.user-name {\r
	margin-right: 5px;\r
	color: var(--be794234);\r
	cursor: pointer;\r
}\r
\r
.reply-item-client\r
	.content-warp\r
	.reply-header\r
	.reply-info\r
	.user-info\r
	.user-level {\r
	margin-right: 5px;\r
	cursor: pointer;\r
}\r
\r
.reply-item-client .content-warp .reply-header .reply-info .user-info .up-icon {\r
	cursor: default;\r
}\r
\r
.reply-item-client .content-warp .reply-header .reply-info .reply-time {\r
	font-size: 12px;\r
	color: var(--text3);\r
}\r
\r
.reply-item-client .content-warp .root-reply {\r
	position: relative;\r
	font-size: 15px;\r
	line-height: 25px;\r
	transition: 0.2s;\r
}\r
\r
.reply-item-client .content-warp .root-reply .reply-operation-warp {\r
	display: flex;\r
	align-items: center;\r
	position: relative;\r
	margin-top: 12px;\r
	font-size: 13px;\r
	color: var(--text3);\r
	line-height: 16px;\r
}\r
\r
.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-like {\r
	display: flex;\r
	align-items: center;\r
	margin-right: 19px;\r
	cursor: pointer;\r
}\r
\r
.reply-item-client\r
	.content-warp\r
	.root-reply\r
	.reply-operation-warp\r
	.reply-like\r
	.like-icon {\r
	margin-right: 5px;\r
	color: var(--text3);\r
}\r
\r
.reply-item-client\r
	.content-warp\r
	.root-reply\r
	.reply-operation-warp\r
	.reply-like\r
	.like-icon:hover,\r
.reply-item-client\r
	.content-warp\r
	.root-reply\r
	.reply-operation-warp\r
	.reply-like\r
	.like-icon.liked {\r
	color: var(--brand_pink);\r
}\r
\r
.reply-item-client\r
	.content-warp\r
	.root-reply\r
	.reply-operation-warp\r
	.reply-dislike {\r
	display: flex;\r
	align-items: center;\r
	margin-right: 19px;\r
}\r
\r
.reply-item-client\r
	.content-warp\r
	.root-reply\r
	.reply-operation-warp\r
	.reply-dislike\r
	.dislike-icon {\r
	color: var(--text3);\r
	cursor: pointer;\r
}\r
\r
.reply-item-client\r
	.content-warp\r
	.root-reply\r
	.reply-operation-warp\r
	.reply-dislike\r
	.dislike-icon:hover,\r
.reply-item-client\r
	.content-warp\r
	.root-reply\r
	.reply-operation-warp\r
	.reply-dislike\r
	.dislike-icon.disliked {\r
	color: var(--brand_pink);\r
}\r
\r
.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-icon {\r
	color: var(--text3);\r
	cursor: pointer;\r
}\r
\r
.reply-item-client\r
	.content-warp\r
	.root-reply\r
	.reply-operation-warp\r
	.reply-icon:hover {\r
	color: var(--brand_pink);\r
}\r
\r
.reply-item-client\r
	.content-warp\r
	.root-reply\r
	.reply-operation-warp\r
	.more-operation {\r
	display: none;\r
	position: absolute;\r
	right: 20px;\r
}\r
\r
.reply-item-client .content-warp .reply-item-box {\r
	margin-top: 12px;\r
}\r
\r
.reply-item-client .content-warp .reply-tag-list {\r
	display: flex;\r
	align-items: center;\r
	margin-top: 12px;\r
	font-size: 12px;\r
	line-height: 14px;\r
}\r
\r
.reply-item-client .content-warp .reply-tag-list .reply-tag-item {\r
	padding: 5px 6px;\r
	border-radius: 2px;\r
	margin-right: 10px;\r
	color: var(--text2);\r
	background-color: var(--bg2_float);\r
}\r
\r
.reply-item-client:hover\r
	.content-warp\r
	.root-reply\r
	.reply-operation-warp\r
	.more-operation {\r
	display: block;\r
}\r
\r
.reply-list {\r
	position: relative;\r
	margin-top: 14px;\r
	padding-bottom: 100px;\r
}\r
\r
.reply-list .reply-empty {\r
	margin-top: 100px;\r
	text-align: center;\r
	font-size: 14px;\r
	color: var(--text3);\r
}\r
\r
.reply-list .reply-end-mark {\r
	height: 100px;\r
}\r
\r
.reply-list .reply-end,\r
.reply-list .reply-loading {\r
	margin-top: 20px;\r
	font-size: 13px;\r
	color: var(--text3);\r
	text-align: center;\r
}\r
\r
.fixed-reply-box {\r
	bottom: 0;\r
	z-index: 20;\r
	width: 100%;\r
}\r
\r
.fixed-reply-box .reply-box-wrap {\r
	background-color: var(--bg1);\r
	padding: 14px 0;\r
	border-top: 1px solid var(--line_light);\r
}\r
\r
.fixed-reply-box .reply-box-shadow {\r
	position: absolute;\r
	top: -10px;\r
	z-index: -1;\r
	height: 36px;\r
	border-radius: 50%;\r
	background-color: #00000014;\r
	filter: blur(10px);\r
	width: calc(100% - 72px);\r
	left: 50%;\r
	transform: translate(-50%);\r
}\r
\r
.reply-detail {\r
	flex: 1;\r
}\r
\r
.reply-detail .reply-header {\r
	display: flex;\r
	align-items: center;\r
	position: sticky;\r
	z-index: 9;\r
	top: 0;\r
	left: 0;\r
	height: 46px;\r
	border-bottom: 1px solid var(--line_light);\r
	margin-bottom: 14px;\r
	background-color: var(--bg1);\r
}\r
\r
.reply-detail .reply-header .return-icon {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	width: 32px;\r
	height: 32px;\r
	border-radius: 4px;\r
	margin-right: 4px;\r
	color: var(--text1);\r
	cursor: pointer;\r
}\r
\r
.reply-detail .reply-header .return-icon:hover {\r
	background-color: var(--graph_bg_thick);\r
}\r
\r
.reply-detail .reply-header .reply-title {\r
	font-size: 16px;\r
	font-weight: 600;\r
	color: var(--text1);\r
}\r
\r
.dialog-reply {\r
	flex: 1;\r
}\r
\r
.dialog-reply .reply-header {\r
	display: flex;\r
	align-items: center;\r
	position: sticky;\r
	z-index: 9;\r
	top: 0;\r
	left: 0;\r
	height: 46px;\r
	border-bottom: 1px solid var(--line_light);\r
	margin-bottom: 14px;\r
	background-color: var(--bg1);\r
}\r
\r
.dialog-reply .reply-header .return-icon {\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	width: 32px;\r
	height: 32px;\r
	border-radius: 4px;\r
	margin-right: 4px;\r
	color: var(--text1);\r
	cursor: pointer;\r
}\r
\r
.dialog-reply .reply-header .return-icon:hover {\r
	background-color: var(--graph_bg_thick);\r
}\r
\r
.dialog-reply .reply-header .reply-title {\r
	font-size: 16px;\r
	font-weight: 600;\r
	color: var(--text1);\r
}\r
\r
.bili-comment.client {\r
	background-color: var(--bg1);\r
}\r
\r
.bili-comment.client * {\r
	box-sizing: border-box;\r
	font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,\r
		sans-serif;\r
	-webkit-font-smoothing: antialiased;\r
}\r
\r
.bili-comment.client * ul {\r
	list-style: none;\r
}\r
\r
.bili-comment.client * a {\r
	text-decoration: none;\r
	background-color: transparent;\r
	color: var(--text_link);\r
	cursor: pointer;\r
}\r
\r
.bili-comment.client * a:hover {\r
	color: var(--Lb4);\r
}\r
\r
.bili-comment.client * i {\r
	font-style: normal;\r
}\r
`;class Sr{isBacking=false;config;constructor(t){this.config=t,this.enterGestureBackMode=this.enterGestureBackMode.bind(this),this.quitGestureBackMode=this.quitGestureBackMode.bind(this),this.popStateEvent=this.popStateEvent.bind(this),(typeof this.config.backDelayTime!="number"||isNaN(this.config.backDelayTime))&&(this.config.backDelayTime=150),this.config.win==null&&(this.config.win=self);}popStateEvent(t){pe.preventEvent(t),!this.isBacking&&this.quitGestureBackMode(true);}enterGestureBackMode(){u.success("进入手势模式");let t=this.config.hash;t.startsWith("#")||(t.startsWith("/")||(t="/"+t),t="#"+t),this.config.useUrl&&(t=this.config.win.location.origin+this.config.win.location.pathname+this.config.win.location.search+t),this.config.win.history.pushState({},"",t),u.success("监听popstate事件"),m.on(this.config.win,"popstate",this.popStateEvent,{capture:true});}async quitGestureBackMode(t=false){this.isBacking=true,u.success("退出手势模式"),typeof this.config.beforeHistoryBackCallBack=="function"&&this.config.beforeHistoryBackCallBack(t);let r=Date.now()+1e3*5;for(;;){if(Date.now()>r){u.error("未知情况，history.back()失败，无法退出手势模式");break}if(this.config.win.location.hash.endsWith(this.config.hash))u.info("history.back()"),this.config.win.history.back(),await pe.sleep(this.config.backDelayTime||150);else break}u.success("移除popstate事件"),m.off(this.config.win,"popstate",this.popStateEvent,{capture:true}),this.isBacking=false,typeof this.config.afterHistoryBackCallBack=="function"&&this.config.afterHistoryBackCallBack(t);}}const Tr={$data:{isAddBeautifyCSS:false,isInitCommentModule:false,isInitDescModule:false},init(){it.init(),f.execMenuOnce("bili-video-cover-bottomRecommendVideo",()=>{this.coverBottomRecommendVideo();}),f.execMenuOnce("bili-video-cover-UpWrapper",()=>{this.coverUpWrapper();}),f.execMenuOnce("bili-video-cover-seasonNew",()=>{this.coverSeasonNew();}),m.ready(()=>{f.execMenu("bili-video-addCommentModule",()=>{this.addCommentModule();}),f.execMenu("bili-video-addDescModule",()=>{this.addDescModule();});});},beautify(){u.info("美化显示"),this.$data.isAddBeautifyCSS||(this.$data.isAddBeautifyCSS=true,R(`
				@charset "UTF-8";
				${v.className.video} .video-list .card-box {
					--left-card-width: 33%;
					--right-child-padding: 1.333vmin;
					/* 开启了bili-video-beautify */
				}
				${v.className.video} .video-list .card-box .v-card-toapp {
					width: 100%;
					border-bottom: 1px solid #b5b5b5;
					padding-left: 0;
					padding-right: 0;
				}
				${v.className.video} .video-list .card-box .v-card-toapp > a {
					display: flex;
					flex-wrap: nowrap;
					gap: var(--right-child-padding);
				}
				${v.className.video} .video-list .card-box .v-card-toapp > a .card {
					width: var(--left-card-width);
					height: 80px;
					flex: 0 auto;
				}
				${v.className.video} .video-list .card-box .v-card-toapp > a .card .count {
					background: transparent;
				}
				${v.className.video} .video-list .card-box .v-card-toapp > a .card .count .left {
					display: list-item;
				}
				${v.className.video} .video-list .card-box .v-card-toapp > a .card .count .left span.item {
					display: none;
				}
				${v.className.video} .video-list .card-box .v-card-toapp > a .card .count .duration {
					background: rgba(0, 0, 0, 0.4);
					border-radius: 0.6vmin;
					padding: 0px 0.5vmin;
					right: 1vmin;
					bottom: 1vmin;
				}
				${v.className.video} .video-list .card-box .v-card-toapp > a .title {
					/*flex: 1;*/
					/*padding: var(--right-child-padding);*/
					padding-top: 0;
					margin-top: 0;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}
				${v.className.video} .video-list .card-box .gm-right-container {
					display: flex;
					flex-direction: column;
					width: calc(100% - var(--left-card-width));
					justify-content: space-between;
				}
				${v.className.video} .video-list .card-box .gm-right-container > * {
					padding: var(--right-child-padding);
					padding-bottom: 0;
				}
				${v.className.video} .video-list .card-box .gm-right-container .left {
					gap: 1rem;
				}
				${v.className.video} .video-list .card-box .gm-right-container .left span {
					display: flex;
					align-items: safe center;
					gap: 1vmin;
				}
				${v.className.video} .video-list .card-box .gm-right-container .gm-up-name,
				${v.className.video} .video-list .card-box .gm-right-container .left {
					color: #999;
					font-size: 3vmin;
					transform-origin: left;
					display: flex;
					/*align-items: safe center;*/
					align-items: safe flex-end;
				}
				${v.className.video} .video-list .card-box .gm-right-container .gm-up-name svg {
					width: 3vmin;
					height: 3vmin;
				}
				${v.className.video} .video-list .card-box .gm-right-container .gm-up-name-text {
					margin-left: 1vmin;
				}
				${v.className.video} .video-list .card-box .gm-right-container .num {
					margin-right: 4vmin;
				}
				${v.className.video} .video-list .card-box > a.v-card {
					width: 100%;
					border-bottom: 1px solid #b5b5b5;
					padding-left: 0;
					padding-right: 0;
					display: flex;
					flex-wrap: nowrap;
				}
				${v.className.video} .video-list .card-box > a.v-card .card {
					width: var(--left-card-width);
					height: 100%;
					flex: 0 auto;
				}
				${v.className.video} .video-list .card-box > a.v-card .card .count {
					background: transparent;
				}
				${v.className.video} .video-list .card-box > a.v-card .card .count span {
					display: none;
				}
				${v.className.video} .video-list .card-box > a.v-card .card .count .duration {
					background-color: rgba(0, 0, 0, 0.3);
					border-radius: 4px;
					color: #fff;
					font-size: 12px;
					height: 16px;
					line-height: 16px;
					margin-left: auto;
					padding-left: 4px;
					padding-right: 4px;
				}
				${v.className.video} .video-list .card-box > a.v-card .title {
					flex: 1;
					/*padding: var(--right-child-padding);*/
					padding-top: 0;
					margin-top: 0;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}

			`)),d.waitNode(v.className.video+" .bottom-tab .list-view .card-box",1e4).then(e=>{if(!e){u.error("$cardBox is null");return}function t(a){let o=a.querySelector(".title"),l=a.querySelector(".count .left"),s=!!a.querySelector(".gm-right-container"),c=_.getVue(a);if(o&&l&&c&&!s){let p=c?.info?.owner?.name;if(p==null){u.error("美化显示-handleVCardToApp：获取up主名字失败");return}a.querySelector(".count");let h=o.cloneNode(true),y=l.cloneNode(true);m.hide(o);let C=a.querySelector(".open-app.weakened");C&&m.hide(C);let $=document.createElement("div");$.className="gm-up-name",$.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${p}</span>
						`;let L=document.createElement("div"),I=document.createElement("div");L.className="gm-right-container",I.className="gm-right-bottom",m.after(o,L),L.appendChild(h),L.appendChild(I),I.appendChild($),I.appendChild(y);}}function r(a){let o=a.querySelector(".title"),l=a.querySelector(".count"),s=!!a.querySelector(".gm-right-container"),c=_.getVue(a);if(o&&l&&c&&!s){let p=c?.info?.duration;if(p==null){u.error("美化显示-handleVCard：获取视频时长失败");return}let h=c?.info?.owner?.name;if(h==null){u.error("美化显示-handleVCard：获取up主名字失败");return}let y=o.cloneNode(true),C=l.cloneNode(true);m.hide(o);let $=document.createElement("div");$.className="duration",$.innerText=M.parseDuration(p),C.className="left";let L=document.createElement("div");l.appendChild($),L.className="gm-up-name",L.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${h}</span>
						`;let I=document.createElement("div"),k=document.createElement("div");I.className="gm-right-container",k.className="gm-right-bottom",m.after(o,I),I.appendChild(y),I.appendChild(k),k.appendChild(L),k.appendChild(C);}}let n=new d.LockFunction(()=>{let a=document.querySelectorAll(v.className.video+" .bottom-tab .list-view .card-box .v-card-toapp"),o=document.querySelectorAll(v.className.video+" .bottom-tab .list-view .card-box>a.v-card");a.forEach(l=>{t(l);}),o.forEach(l=>{r(l);});},25),i=document.querySelector(v.className.video);i?d.mutationObserver(i,{config:{subtree:true,attributes:true,childList:true},callback(){n.run();}}):u.error("未找到视频根节点");});},repairVideoBottomAreaHeight(){return u.info("修复视频底部区域高度"),R(`
		${v.className.video},
		${v.className.mVideo} {
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
			${v.className.video},
			${v.className.mVideo}{
				.m-video-info-new{
					margin-top: 72vmin;
				}
			}
		}
		`)},coverUpWrapper(){u.info("修复up主信息区域的点击事件"),m.on(document,"click",[v.className.video+" .bottom-wrapper .up-wrapper",v.className.mVideo+" .bottom-wrapper .up-wrapper"],function(e){let r=e.target.closest(".bottom-wrapper");if(!r){u.error("获取元素.bottom-wrapper失败");return}let n=_.getVue(r);if(!n){u.error("获取元素.bottom-wrapper的vue实例失败");return}let i=n?.upInfo?.card?.mid;typeof i=="string"?M.goToUrl(Ce.getUserSpaceUrl(i)):w.error("获取mid失败");},{capture:true});},coverBottomRecommendVideo(){u.info("覆盖 相关视频 点击事件"),m.on(document,"click",[v.className.video+" .list-view .card-box .launch-app-btn",v.className.mVideo+" .list-view .card-box .launch-app-btn"],function(e){let t=e.target,r=_.getVue(t);if(!r){w.error("获取相关视频的__vue__失败");return}let n=r.bvid;if(d.isNull(n))if(r.$children&&r.$children[0]&&d.isNotNull(r.$children[0].bvid))n=r.$children[0].bvid;else {w.error("获取相关视频的bvid失败");return}u.info("相关视频的bvid: "+n),M.goToUrl(Ce.getVideoUrl(n)),d.preventEvent(e);},{capture:true});},coverSeasonNew(){u.info("覆盖 选集视频列表 点击事件");function e(t){let r=t.target,n=_.getVue(r);if(!n){w.error("获取选集视频的目标视频的__vue__失败");return}let i=n.bvid;if(d.isNull(i)){w.error("获取相关视频的bvid失败");return}u.info("相关视频的bvid: "+i),M.goToUrl(Ce.getVideoUrl(i)),d.preventEvent(t);}m.on(document,"click",[v.className.video+" .m-video-season-new .video-card .launch-app-btn",v.className.mVideo+" .m-video-season-new .video-card .launch-app-btn"],e,{capture:true}),m.on(document,"click",[v.className.video+" .m-video-season-panel .season-video-item .launch-app-btn",v.className.mVideo+" .m-video-season-panel .season-video-item .launch-app-btn"],e,{capture:true});},repairLinkJump(){u.info("修复链接跳转");let e=new d.LockFunction(()=>{["a.member-link:not([href])[data-url]","a.jump-link:not([href])[data-url]"].forEach(t=>{le(t).forEach(r=>{r.href=r.getAttribute("data-url");});});});d.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{e.run();}});},gestureReturnToCloseCommentArea(){u.info("手势返回关闭评论区，全局监听document点击.sub-reply-preview"),d.waitNode("#app").then(e=>{d.waitVueByInterval(e,()=>{let t=_.getVue(e);return t==null?false:typeof t?.$router?.options?.scrollBehavior!=null},250,1e4).then(t=>{let r=_.getVue(e);if(!r){u.error("获取#app的vue属性失败");return}let n=r.$router.options.scrollBehavior;r.$router.options.scrollBehavior=function(i,a,o){return i.hash==="#/seeCommentReply"?(u.info("当前操作为打开评论区，scrollBehavior返回null"),null):i.hash===""&&a.hash==="#/seeCommentReply"?(u.info("当前操作为关闭评论区，scrollBehavior返回null"),null):n.call(this,...arguments)};});}),m.on(document,"click",".sub-reply-preview",function(e){let t=document.querySelector("#app"),r=_.getVue(t);if(!r){u.error("获取#app元素失败");return}let n=M.hookGestureReturnByVueRouter({vueObj:r,hash:"#/seeCommentReply",callback(i){if(!i)return  false;let a=document.querySelector(".dialog-close-icon");return a?a.click():u.error("评论区关闭失败，原因：元素dialog-close-icon获取失败"),true}});d.waitNode(".dialog-close-icon").then(i=>{m.on(i,"click",function(){n.resumeBack(false);},{capture:true,once:true});});});},enterVideoFullScreen(){d.waitNode(".mplayer-btn-widescreen",5e3).then(e=>{if(!e){u.error("获取全屏按钮失败"),w.error("获取全屏按钮失败");return}if(e.closest(".mplayer-wide")){u.warn("当前的全屏按钮是【退出全屏】，不点击");return}u.info("进入全屏"),e.click();});},optimizationScroll(){let e=null,t=null,r=null,n=null,i=null,a=0,o=0;function l(s){return !document.contains(s)}m.on(document,"scroll",s=>{if(l(t)){if(t=document.querySelector(".m-video-player"),l(t))return;if(a==0){const y=t.getBoundingClientRect();a=y.height,o=y.top,u.info(`视频区域的最大高度为 ${a}px`),u.info(`视频区域的最大top为 ${o}px`);}}if(l(r)&&(r=document.querySelector(".m-video-info-new"),l(r))||l(e)&&(e=document.querySelector(".m-navbar"),l(e))||l(n)&&(n=document.querySelector(".bottom-tab"),l(n))||l(i)&&(i=document.querySelector(".bottom-tab .v-affix"),l(i)))return;let c=r.getBoundingClientRect().top;c>=0?c<=a?t.style.paddingTop=c+"px":t.style.paddingTop="":t.style.paddingTop="0px";let p=m.height(e);n.getBoundingClientRect().top<p?i.hasAttribute("data-is-fixed")||(i.style.cssText=`position: fixed;left: 0px;top: ${p}px;z-index: 10000;width: 100%;`,i.setAttribute("data-is-fixed","true")):(i.style.cssText="",i.removeAttribute("data-is-fixed"));},{passive:true});},disableSwipeTab(){u.info("禁止滑动切换tab"),_.waitVuePropToSet(".m-video-bottom-tab",{msg:"等待tab的vue属性touchstart、touchmove、touchend事件，_bindEvents函数",check(e){return e?.slider?.el instanceof HTMLElement&&typeof e?.slider?.events?.touchstart=="function"&&typeof e?.slider?.events?.touchmove=="function"&&typeof e?.slider?.events?.touchend=="function"&&typeof e?.slider?._bindEvents=="function"},set(e){let t=e.slider.el;t.removeEventListener("touchstart",e.slider.events.touchstart),t.removeEventListener("touchmove",e.slider.events.touchmove),t.removeEventListener("touchend",e.slider.events.touchend),e.slider._bindEvents=()=>{},u.success("成功禁用滑动，清除touchstart、touchmove、touchend事件，覆盖_bindEvents函数");}});},addCommentModule(){u.info("新增评论模块"),this.$data.isInitCommentModule||(this.$data.isInitCommentModule=true,xe.setGMResourceCSS(fr.Viewer),R($r),R(`
				.comment-container{
					position: relative;
				}
				.comment-container .reply-header{
					position: sticky;
					top: 0;
					z-index: 999;
					left: 0;
					right: 0;
					background: #fff;
				}
				#comment-module-wrapper{
					position: fixed;
					top: 0;
					left: 0;
					z-index: 2000;
					display: none;
					width: 100vw;
					height: 100vh;
					background-color: #fff;
					overflow-x: hidden;
				}
				.close-comment-module-btn{
					position: fixed;
					right: 20px;
					bottom: 20px;
					z-index: 2001;
					display: none;
					justify-content: center;
					align-items: center;
					width: 40px;
					height: 40px;
					color: #fff;
					border-radius: 100%;
					background-color: var(--bili-color);
				}
			`),R(`
				.comment-module-show-btn{
					display: flex;
					justify-content: center;
					align-items: center;
					margin: 0 12px 20px 12px;
					height: 40px;
					color: #fff;
					border-radius: 4px;
					background-color: var(--bili-color);
				}
			`)),d.waitNode(".m-video-info",1e4).then(e=>{if(!e){u.error("获取视频信息元素失败");return}m.remove(".comment-module-show-btn"),m.remove(".close-comment-module-btn"),m.remove("#comment-module-wrapper");const t="comment-module";let r=new Sr({hash:t,useUrl:true,beforeHistoryBackCallBack(o){let l=Q(".viewer-button.viewer-close");l&&l.click(),o&&i.click();}}),n=m.createElement("div",{className:"comment-module-show-btn",innerHTML:"查看评论"}),i=m.createElement("span",{className:"close-comment-module-btn",innerHTML:"×"});m.on(n,"click",o=>{d.preventEvent(o),m.css(a,{display:"block"}),m.css(i,{display:"flex"}),r.enterGestureBackMode();}),m.on(i,"click",o=>{d.preventEvent(o),m.css(a,{display:""}),m.css(i,{display:""}),r.quitGestureBackMode(false);}),m.append(e,n);let a=m.createElement("div",{id:"comment-module-wrapper"});m.append(document.body,a),m.after(a,i),_r.init(a);});},addDescModule(){u.info("新增简介模块"),this.$data.isInitDescModule||(this.$data.isInitDescModule=true,R(`
				${v.className.mVideo} .m-video-info .bottom-wrapper{
					flex-direction: column;
					align-items: flex-start;
					height: auto;
				}
			`),R(`
				.video-desc-wrapper {
					color: #9499A0;
					font-size: 14px;
					width: 100%;

					.video-desc-text {
						margin: 10px 0px;
						white-space: pre-wrap;
					}
	
					.video-view-info-wrapper {
						display: flex;
						align-items: center;
						justify-content: flex-start;
						gap: 10px;
						margin: 5px 0px;
	
						.video-info-icon{
							display: flex;
							align-items: center;
							gap: 2px;
						}
						.video-info-text{
							display: flex;
							align-items: center;
							line-height: 1rem;
						}
					}
					.video-desc-controls-wrapper{
						margin: 10px 0px;
						display: flex;
						justify-content: space-around;
						align-items: center;
	
						.video-info-icon {
							display: flex;
							flex-direction: column;
							align-items: center;
							gap: 2px;
						}
					}
				}
	
			`)),m.remove(v.className.mVideo+"  .m-video-info .video-desc-wrapper"),_.waitVuePropToSet(v.className.mVideo+"  .m-video-info .bottom-wrapper",{check(e){return typeof e?.info?.bvid=="string"},set(e,t){let r=e.info,n=e.upInfo;n.follower,n.archive_count;let i=r.stat.view,a=r.stat.danmaku;r.ctime;let o=r.bvid,l=r.desc,s=r.stat.like,c=r.stat.coin,p=r.stat.favorite,h=r.stat.share,y=m.createElement("div",{className:"video-desc-wrapper",innerHTML:`
							<div class="video-view-info-wrapper">
								<div class="video-info-icon">
									<svg
										class="stats-item__icon"
										style="width: 16px; height: 16px"
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										viewBox="0 0 16 16"
										width="16"
										height="16">
										<path
											d="M8 3.3320333333333334C6.321186666666667 3.3320333333333334 4.855333333333333 3.4174399999999996 3.820593333333333 3.5013466666666666C3.1014733333333333 3.5596599999999996 2.5440733333333334 4.109013333333333 2.48 4.821693333333333C2.4040466666666664 5.666533333333334 2.333333333333333 6.780666666666666 2.333333333333333 7.998666666666666C2.333333333333333 9.216733333333334 2.4040466666666664 10.330866666666665 2.48 11.175699999999999C2.5440733333333334 11.888366666666666 3.1014733333333333 12.437733333333334 3.820593333333333 12.496066666666666C4.855333333333333 12.579933333333333 6.321186666666667 12.665333333333333 8 12.665333333333333C9.678999999999998 12.665333333333333 11.144933333333334 12.579933333333333 12.179733333333333 12.496033333333333C12.898733333333332 12.4377 13.456 11.888533333333331 13.520066666666667 11.176033333333333C13.595999999999998 10.331533333333333 13.666666666666666 9.217633333333332 13.666666666666666 7.998666666666666C13.666666666666666 6.779766666666667 13.595999999999998 5.665846666666667 13.520066666666667 4.821366666666666C13.456 4.108866666666666 12.898733333333332 3.55968 12.179733333333333 3.5013666666666663C11.144933333333334 3.417453333333333 9.678999999999998 3.3320333333333334 8 3.3320333333333334zM3.7397666666666667 2.50462C4.794879999999999 2.41906 6.288386666666666 2.3320333333333334 8 2.3320333333333334C9.7118 2.3320333333333334 11.2054 2.4190733333333334 12.260533333333331 2.5046399999999998C13.458733333333331 2.6018133333333333 14.407866666666665 3.5285199999999994 14.516066666666667 4.73182C14.593933333333332 5.597933333333334 14.666666666666666 6.7427 14.666666666666666 7.998666666666666C14.666666666666666 9.2547 14.593933333333332 10.399466666666665 14.516066666666667 11.2656C14.407866666666665 12.468866666666665 13.458733333333331 13.395566666666667 12.260533333333331 13.492766666666665C11.2054 13.578333333333333 9.7118 13.665333333333333 8 13.665333333333333C6.288386666666666 13.665333333333333 4.794879999999999 13.578333333333333 3.7397666666666667 13.492799999999999C2.541373333333333 13.395599999999998 1.5922066666666668 12.468633333333333 1.4840200000000001 11.265266666666665C1.4061199999999998 10.3988 1.3333333333333333 9.253866666666667 1.3333333333333333 7.998666666666666C1.3333333333333333 6.743533333333333 1.4061199999999998 5.598579999999999 1.4840200000000001 4.732153333333333C1.5922066666666668 3.5287466666666667 2.541373333333333 2.601793333333333 3.7397666666666667 2.50462z"
											fill="currentColor"></path>
										<path
											d="M9.8092 7.3125C10.338433333333333 7.618066666666666 10.338433333333333 8.382 9.809166666666666 8.687533333333333L7.690799999999999 9.910599999999999C7.161566666666666 10.216133333333332 6.5 9.8342 6.500006666666666 9.223066666666666L6.500006666666666 6.776999999999999C6.500006666666666 6.165873333333334 7.161566666666666 5.783913333333333 7.690799999999999 6.089479999999999L9.8092 7.3125z"
											fill="currentColor"></path>
									</svg>
									<span class="video-info-text" data-value="${i}">${M.parseCount(i)}</span>
								</div>
								<div class="video-info-icon">
									<svg
										class="stats-item__icon"
										style="width: 16px; height: 16px"
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										viewBox="0 0 16 16"
										width="16"
										height="16">
										<path
											d="M8 3.3320333333333334C6.321186666666667 3.3320333333333334 4.855333333333333 3.4174399999999996 3.820593333333333 3.5013466666666666C3.1014733333333333 3.5596599999999996 2.5440733333333334 4.109013333333333 2.48 4.821693333333333C2.4040466666666664 5.666533333333334 2.333333333333333 6.780666666666666 2.333333333333333 7.998666666666666C2.333333333333333 9.216733333333334 2.4040466666666664 10.330866666666665 2.48 11.175699999999999C2.5440733333333334 11.888366666666666 3.1014733333333333 12.437733333333334 3.820593333333333 12.496066666666666C4.855333333333333 12.579933333333333 6.321186666666667 12.665333333333333 8 12.665333333333333C9.678999999999998 12.665333333333333 11.144933333333334 12.579933333333333 12.179733333333333 12.496033333333333C12.898733333333332 12.4377 13.456 11.888533333333331 13.520066666666667 11.176033333333333C13.595999999999998 10.331533333333333 13.666666666666666 9.217633333333332 13.666666666666666 7.998666666666666C13.666666666666666 6.779766666666667 13.595999999999998 5.665846666666667 13.520066666666667 4.821366666666666C13.456 4.108866666666666 12.898733333333332 3.55968 12.179733333333333 3.5013666666666663C11.144933333333334 3.417453333333333 9.678999999999998 3.3320333333333334 8 3.3320333333333334zM3.7397666666666667 2.50462C4.794879999999999 2.41906 6.288386666666666 2.3320333333333334 8 2.3320333333333334C9.7118 2.3320333333333334 11.2054 2.4190733333333334 12.260533333333331 2.5046399999999998C13.458733333333331 2.6018133333333333 14.407866666666665 3.5285199999999994 14.516066666666667 4.73182C14.593933333333332 5.597933333333334 14.666666666666666 6.7427 14.666666666666666 7.998666666666666C14.666666666666666 9.2547 14.593933333333332 10.399466666666665 14.516066666666667 11.2656C14.407866666666665 12.468866666666665 13.458733333333331 13.395566666666667 12.260533333333331 13.492766666666665C11.2054 13.578333333333333 9.7118 13.665333333333333 8 13.665333333333333C6.288386666666666 13.665333333333333 4.794879999999999 13.578333333333333 3.7397666666666667 13.492799999999999C2.541373333333333 13.395599999999998 1.5922066666666668 12.468633333333333 1.4840200000000001 11.265266666666665C1.4061199999999998 10.3988 1.3333333333333333 9.253866666666667 1.3333333333333333 7.998666666666666C1.3333333333333333 6.743533333333333 1.4061199999999998 5.598579999999999 1.4840200000000001 4.732153333333333C1.5922066666666668 3.5287466666666667 2.541373333333333 2.601793333333333 3.7397666666666667 2.50462z"
											fill="currentColor"></path>
										<path
											d="M10.583333333333332 7.166666666666666L6.583333333333333 7.166666666666666C6.307193333333332 7.166666666666666 6.083333333333333 6.942799999999999 6.083333333333333 6.666666666666666C6.083333333333333 6.390526666666666 6.307193333333332 6.166666666666666 6.583333333333333 6.166666666666666L10.583333333333332 6.166666666666666C10.859466666666666 6.166666666666666 11.083333333333332 6.390526666666666 11.083333333333332 6.666666666666666C11.083333333333332 6.942799999999999 10.859466666666666 7.166666666666666 10.583333333333332 7.166666666666666z"
											fill="currentColor"></path>
										<path
											d="M11.583333333333332 9.833333333333332L7.583333333333333 9.833333333333332C7.3072 9.833333333333332 7.083333333333333 9.609466666666666 7.083333333333333 9.333333333333332C7.083333333333333 9.0572 7.3072 8.833333333333332 7.583333333333333 8.833333333333332L11.583333333333332 8.833333333333332C11.859466666666666 8.833333333333332 12.083333333333332 9.0572 12.083333333333332 9.333333333333332C12.083333333333332 9.609466666666666 11.859466666666666 9.833333333333332 11.583333333333332 9.833333333333332z"
											fill="currentColor"></path>
										<path
											d="M5.25 6.666666666666666C5.25 6.942799999999999 5.02614 7.166666666666666 4.75 7.166666666666666L4.416666666666666 7.166666666666666C4.140526666666666 7.166666666666666 3.9166666666666665 6.942799999999999 3.9166666666666665 6.666666666666666C3.9166666666666665 6.390526666666666 4.140526666666666 6.166666666666666 4.416666666666666 6.166666666666666L4.75 6.166666666666666C5.02614 6.166666666666666 5.25 6.390526666666666 5.25 6.666666666666666z"
											fill="currentColor"></path>
										<path
											d="M6.25 9.333333333333332C6.25 9.609466666666666 6.02614 9.833333333333332 5.75 9.833333333333332L5.416666666666666 9.833333333333332C5.140526666666666 9.833333333333332 4.916666666666666 9.609466666666666 4.916666666666666 9.333333333333332C4.916666666666666 9.0572 5.140526666666666 8.833333333333332 5.416666666666666 8.833333333333332L5.75 8.833333333333332C6.02614 8.833333333333332 6.25 9.0572 6.25 9.333333333333332z"
											fill="currentColor"></path>
									</svg>
									<span class="video-info-text" data-value="${a}">${M.parseCount(a)}</span>
								</div>
								<span class="video-info-text">${d.formatTime(r.ctime*1e3,"yyyy年MM月dd日 HH:mm:ss")}</span>
							</div>
							<div class="video-bvid">${o}</div>
							<div class="video-desc-text">${l}</div>
							<div class="video-desc-controls-wrapper">
								<div class="video-info-icon">
									<svg
										width="24"
										height="24"
										viewBox="0 0 36 36"
										xmlns="http://www.w3.org/2000/svg"
										class="video-like-icon video-toolbar-item-icon">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M9.77234 30.8573V11.7471H7.54573C5.50932 11.7471 3.85742 13.3931 3.85742 15.425V27.1794C3.85742 29.2112 5.50932 30.8573 7.54573 30.8573H9.77234ZM11.9902 30.8573V11.7054C14.9897 10.627 16.6942 7.8853 17.1055 3.33591C17.2666 1.55463 18.9633 0.814421 20.5803 1.59505C22.1847 2.36964 23.243 4.32583 23.243 6.93947C23.243 8.50265 23.0478 10.1054 22.6582 11.7471H29.7324C31.7739 11.7471 33.4289 13.402 33.4289 15.4435C33.4289 15.7416 33.3928 16.0386 33.3215 16.328L30.9883 25.7957C30.2558 28.7683 27.5894 30.8573 24.528 30.8573H11.9911H11.9902Z"
											fill="currentColor"></path>
									</svg>
									<span data-value="${s}">${M.parseCount(s)}</span>
								</div>
								<div class="video-info-icon">
									<svg
										width="24"
										height="24"
										viewBox="0 0 28 28"
										xmlns="http://www.w3.org/2000/svg"
										class="video-coin-icon video-toolbar-item-icon">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M14.045 25.5454C7.69377 25.5454 2.54504 20.3967 2.54504 14.0454C2.54504 7.69413 7.69377 2.54541 14.045 2.54541C20.3963 2.54541 25.545 7.69413 25.545 14.0454C25.545 17.0954 24.3334 20.0205 22.1768 22.1771C20.0201 24.3338 17.095 25.5454 14.045 25.5454ZM9.66202 6.81624H18.2761C18.825 6.81624 19.27 7.22183 19.27 7.72216C19.27 8.22248 18.825 8.62807 18.2761 8.62807H14.95V10.2903C17.989 10.4444 20.3766 12.9487 20.3855 15.9916V17.1995C20.3854 17.6997 19.9799 18.1052 19.4796 18.1052C18.9793 18.1052 18.5738 17.6997 18.5737 17.1995V15.9916C18.5667 13.9478 16.9882 12.2535 14.95 12.1022V20.5574C14.95 21.0577 14.5444 21.4633 14.0441 21.4633C13.5437 21.4633 13.1382 21.0577 13.1382 20.5574V12.1022C11.1 12.2535 9.52148 13.9478 9.51448 15.9916V17.1995C9.5144 17.6997 9.10883 18.1052 8.60856 18.1052C8.1083 18.1052 7.70273 17.6997 7.70265 17.1995V15.9916C7.71158 12.9487 10.0992 10.4444 13.1382 10.2903V8.62807H9.66202C9.11309 8.62807 8.66809 8.22248 8.66809 7.72216C8.66809 7.22183 9.11309 6.81624 9.66202 6.81624Z"
											fill="currentColor"></path>
									</svg>
									<span data-value="${c}">${M.parseCount(c)}</span>
								</div>
								<div class="video-info-icon">
									<svg
										width="24"
										height="24"
										viewBox="0 0 28 28"
										xmlns="http://www.w3.org/2000/svg"
										class="video-fav-icon video-toolbar-item-icon">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M19.8071 9.26152C18.7438 9.09915 17.7624 8.36846 17.3534 7.39421L15.4723 3.4972C14.8998 2.1982 13.1004 2.1982 12.4461 3.4972L10.6468 7.39421C10.1561 8.36846 9.25639 9.09915 8.19315 9.26152L3.94016 9.91102C2.63155 10.0734 2.05904 11.6972 3.04049 12.6714L6.23023 15.9189C6.96632 16.6496 7.29348 17.705 7.1299 18.7605L6.39381 23.307C6.14844 24.6872 7.62063 25.6614 8.84745 25.0119L12.4461 23.0634C13.4276 22.4951 14.6544 22.4951 15.6359 23.0634L19.2345 25.0119C20.4614 25.6614 21.8518 24.6872 21.6882 23.307L20.8703 18.7605C20.7051 17.705 21.0339 16.6496 21.77 15.9189L24.9597 12.6714C25.9412 11.6972 25.3687 10.0734 24.06 9.91102L19.8071 9.26152Z"
											fill="currentColor"></path>
									</svg>
									<span data-value="${p}">${M.parseCount(p)}</span>
								</div>
								<div class="video-info-icon">
									<svg
										width="24"
										height="24"
										viewBox="0 0 28 28"
										xmlns="http://www.w3.org/2000/svg"
										class="video-share-icon video-toolbar-item-icon">
										<path
											d="M12.6058 10.3326V5.44359C12.6058 4.64632 13.2718 4 14.0934 4C14.4423 4 14.78 4.11895 15.0476 4.33606L25.3847 12.7221C26.112 13.3121 26.2087 14.3626 25.6007 15.0684C25.5352 15.1443 25.463 15.2144 25.3847 15.2779L15.0476 23.6639C14.4173 24.1753 13.4791 24.094 12.9521 23.4823C12.7283 23.2226 12.6058 22.8949 12.6058 22.5564V18.053C7.59502 18.053 5.37116 19.9116 2.57197 23.5251C2.47607 23.6489 2.00031 23.7769 2.00031 23.2122C2.00031 16.2165 3.90102 10.3326 12.6058 10.3326Z"
											fill="currentColor"></path>
									</svg>
									<span data-value="${h}">${M.parseCount(h)}</span>
								</div>
							</div>
						`});t.appendChild(y);}});}},Ir=`.artplayer-container {\r
	width: 100vw;\r
	height: 35vh;\r
}`,be={getUrl(e){if(e!=null)return e.getAttribute("universallink")},jumpToUrl(e){let t=e.target,r=t.querySelector("bili-open-app")||t.querySelector("m-open-app");if(r){let n=be.getUrl(r);n?M.goToUrl(n):(w.error("获取bili-open-app的Url失败"),u.error("获取bili-open-app的Url失败"));}else w.error("未获取到<bili-open-app>元素"),u.error("未获取到<bili-open-app>元素");}},Re={filteringSensitiveSearchParamData(e){const t=d.assign({},e,true);return Reflect.deleteProperty(t,"access_key"),Reflect.deleteProperty(t,"access_token"),t},failToast(e){u.error(e),alert(JSON.stringify(e,null,4));}},vt={async getPlayUrl(e){let t={avid:"",cid:"",ep_id:"",qn:127,fnver:0,fnval:3088,fourk:1};t=d.assign(t,e);let r=nt.getBangumiProxyHost();u.info("番剧播放地址请求数据");let n=[],i;const a="/pgc/player/web/playurl";u.info(`请求路径：${a}`);for(let o=0;o<r.length;o++){const l=r[o],s=l.host,c={};s!==ze.web_host&&(d.assign(c,nt.getBangumiProxySearchParam({area:l.area}),true),u.info(`代理服务器数据: ${JSON.stringify(l)}`),u.info(`代理服务器请求参数：${JSON.stringify(Re.filteringSensitiveSearchParamData(c))}`));let p=`https://${s}${a}?${d.toSearchParamsStr(t)}&${d.toSearchParamsStr(c)}`,h=await q.get(p,{responseType:"json",fetch:false,allowInterceptConfig:false,headers:{Referer:"https://www.bilibili.com/"}});if(!h.status){u.error(`代理服务器：${s} 请求失败`);continue}let y=d.toJSON(h.data.responseText);if(y.result,!ue.isWebApiSuccess(y)||ue.isAreaLimit(y)){u.error(`请求失败，当前代理服务器：${s} ${JSON.stringify(y)}`),n.push(y);continue}i=y.result;break}return i==null&&Re.failToast(n),i},async getPlayUrlHTML5(e){let t={avid:"",cid:"",ep_id:"",bsource:""};t=d.assign(t,e),u.info("（原版api）番剧播放地址请求数据");let n=`https://${ze.web_host}/pgc/player/web/playurl/html5?${d.toSearchParamsStr(t)}`,i=await q.get(n,{responseType:"json",fetch:true,headers:{Host:"www.bilibili.com",Referer:"https://www.bilibili.com"}});if(!i.status)return;let a=d.toJSON(i.data.responseText);if(!ue.isWebApiSuccess(a)){Re.failToast(a);return}return a.result}},Lr="[artplayer-plugin-airborneHelper]：",z={$data:{tipJumpToastTimeoutId:void 0,tipJumpToastInfo:void 0,successJumpToastInfo:void 0},$event:{"video:timeupdate":()=>{if(z.$data.tipJumpToastTimeoutId!=null||!ae.$data.art.playing)return;const e=5;let t=ae.$data.art.currentTime,r=ae.$data.option.clip_info_list.findIndex(n=>{let i=n.start;return i===0?t<=1:t>=i-e&&t<i});if(r!==-1){let n=function(){clearTimeout(z.$data.tipJumpToastTimeoutId),z.$data.tipJumpToastTimeoutId=void 0,z.$data.tipJumpToastInfo?.close(),z.$data.tipJumpToastInfo=void 0,ae.$data.option.clip_info_list.splice(r,1);},i=ae.$data.option.clip_info_list[r],a=ae.$data.art.plugins[Er],o=(i.start-t)*1e3;z.$data.tipJumpToastTimeoutId=setTimeout(()=>{ae.$data.art.currentTime=i.end,z.$data.tipJumpToastTimeoutId=void 0,z.$data.successJumpToastInfo&&(z.$data.successJumpToastInfo.close(),z.$data.successJumpToastInfo=void 0),z.$data.successJumpToastInfo=a.toast({text:"空降成功~o(*≧▽≦)ツ┏━┓",closeCallback(){z.$data.successJumpToastInfo=void 0;}});},o),z.$data.tipJumpToastInfo&&(z.$data.tipJumpToastInfo.close(),z.$data.tipJumpToastInfo=void 0),z.$data.tipJumpToastInfo=a.toast({text:typeof i.toastText=="string"?i.toastText:"站稳扶好，准备起飞~",timeout:o<2e3?2e3:o,showCloseBtn:false,jumpText:typeof i.toastText=="string"?"不跳过":"坠机",jumpClickCallback:()=>{n();}}),setTimeout(()=>{z.$data.tipJumpToastInfo&&(z.$data.tipJumpToastInfo.close(),z.$data.tipJumpToastInfo=void 0);},(e+3)*1e3);}}},bind(){Object.keys(this.$event).forEach(e=>{ae.$data.art.on(e,this.$event[e]);});},unbind(){Object.keys(this.$event).forEach(e=>{ae.$data.art.off(e,this.$event[e]);}),clearTimeout(z.$data.tipJumpToastTimeoutId),z.$data.tipJumpToastTimeoutId=void 0,z.$data.successJumpToastInfo&&(z.$data.successJumpToastInfo.close(),z.$data.successJumpToastInfo=void 0),z.$data.tipJumpToastInfo&&(z.$data.tipJumpToastInfo.close(),z.$data.tipJumpToastInfo=void 0);}},ae={$key:{plugin_KEY:"plugin-airborne-helper"},$data:{art:null,option:null},init(e,t){this.$data.art=e,this.update(t);},update(e){this.$data.option=e,console.log(Lr+"更新配置",e),z.unbind(),e.clip_info_list.length&&z.bind();}},Vr=e=>t=>(ae.init(t,e),{name:ae.$key.plugin_KEY,update(r){ae.update(r);}}),Mr=ae.$key.plugin_KEY,yt="[flvjs]：",xt=e=>e.epList.map(t=>({isDefault:t.ep_id===e.ep_id&&t.aid===e.aid&&t.cid===e.cid,title:Qt(t.long_title,t.title),aid:t.aid,bvid:t.bvid,cid:t.cid,ep_id:t.ep_id,onSelect(r,n){rr.updateArtPlayerVideoInfo(t,e.epList);}})),ve={$data:{art:null,flv:null,currentOption:null,from:"bangumi"},resetEnv(e){e&&(Reflect.set(this.$data,"art",null),Reflect.set(this.$data,"flv",null)),Reflect.set(this.$data,"currentOption",null);},flvPlayer(){if(this.$data.currentOption==null){console.error(yt+"获取当前配置为空");return}let e=this.$data.currentOption.flvInfo;(this.$data.flv!=null||e==null)&&(this.$data.flv?.detachMediaElement(),this.$data.flv?.destroy());let t=this.$data.currentOption;console.log(yt+"加载视频",e),e.length>1?this.$data.flv=Ze.createPlayer({type:"flv",filesize:t.flvTotalSize,duration:t.flvTotalDuration,segments:e.map(r=>({url:r.url,duration:r.duration,filesize:r.size}))},{stashInitialSize:1024*100}):this.$data.flv=Ze.createPlayer({type:"flv",url:e[0].url},{stashInitialSize:1024*100}),this.$data.flv.attachMediaElement(this.$data.art.video),this.$data.flv.load();},async init(e){this.resetEnv(true),this.$data.currentOption=e;const t="artplayer-bangumi-danmaku-option",r=new zt(t),n=r.getLocalArtDanmakuOption(),i={...Yt(),container:e.container,settings:[],plugins:[Zt(),Kt({from:ve.$data.from,qualityList:e.quality})]};if(e.isFlv){if(i.quality=[],i.type="flv",e.flvInfo.length===0){Re.failToast("视频播放地址为空，无法播放！");return}i.url=e.flvInfo[0].url,i.customType={flv:(a,o,l)=>{if(!Ze.isSupported()){l.notice.show="Unsupported playback format: flv";return}this.flvPlayer();}};}else i.type="mp4";return f.getValue("artplayer-plugin-bangumi-danmaku-enable")&&i.plugins.push(kt({...er(),danmuku:e.danmukuUrl,speed:n.speed,margin:n.margin,opacity:n.opacity,modes:n.modes,fontSize:n.fontSize,antiOverlap:n.antiOverlap,synchronousPlayback:n.synchronousPlayback,visible:n.visible,beforeEmit(a){return new Promise(o=>{console.log(a),setTimeout(()=>{o(true);},1e3);})}})),f.getValue("artplayer-plugin-bangumi-m4sAudioSupport-enable")&&i.plugins.push(Nt({from:ve.$data.from,audioList:e.audioList||[]})),f.getValue("artplayer-plugin-bangumi-epChoose-enable")&&i.plugins.push(Wt({EP_LIST:xt(e),automaticBroadcast:true})),f.getValue("artplayer-plugin-bangumi-cc-subtitle-enable")&&i.plugins.push(Ut({from:ve.$data.from,cid:e.cid,aid:e.aid,bvid:e.bvid,ep_id:e.ep_id})),f.getValue("artplayer-plugin-bangumi-toptoolbar-enable")&&i.plugins.push(Ot({onlineInfoParams:{aid:e.aid,cid:e.cid,bvid:e.bvid},title:e.videoTitle,showWrap:true,showTitle:true,showOnlineTotal:true})),f.getValue("artplayer-plugin-bangumi-airborneHelper-enable")&&i.plugins.push(Vr({clip_info_list:e.clip_info_list})),f.getValue("artplayer-plugin-bangumi-statistics-enable")&&i.plugins.push(Xt({data:[]})),this.$data.art=new at(i),r.onConfigChange(this.$data.art),this.$data.art},async update(e,t){this.resetEnv(false),this.$data.currentOption=t,u.info("更新新的播放信息",t),e.pause(),u.info("暂停视频"),e.currentTime=0,u.info("重置播放进度"),this.updatePluginInfo(e,t),e.play(),u.info("播放");},updatePluginInfo(e,t){if(e.plugins[Fe].update({from:ve.$data.from,qualityList:t.quality}),u.info("更新画质",t.quality),f.getValue("artplayer-plugin-bangumi-danmaku-enable")&&(e.plugins.artplayerPluginDanmuku.config({danmuku:t.danmukuUrl}),e.plugins.artplayerPluginDanmuku.load(),u.info("更新弹幕姬",t.danmukuUrl)),f.getValue("artplayer-plugin-bangumi-m4sAudioSupport-enable")&&(e.plugins[lt].update({from:ve.$data.from,audioList:t.audioList||[]}),u.info("更新音频",t.audioList)),f.getValue("artplayer-plugin-bangumi-epChoose-enable")&&(e.plugins[Jt].update({EP_LIST:xt(t),automaticBroadcast:true}),u.info("更新选集信息",t.epList)),f.getValue("artplayer-plugin-bangumi-cc-subtitle-enable")){let n=e.plugins[qt];const i={from:ve.$data.from,cid:t.cid,aid:t.aid,ep_id:t.ep_id};n.update(i),u.info("更新字幕",i);}if(f.getValue("artplayer-plugin-bangumi-toptoolbar-enable")){let n=e.plugins[Pt];const i={showRight:true,showRightFollow:true,showWrap:true,showTitle:true,showOnlineTotal:true,title:t.videoTitle,onlineInfoParams:{aid:t.aid,cid:t.cid,bvid:t.bvid}};n.update(i),u.info("更新顶部标题",i);}f.getValue("artplayer-plugin-bangumi-airborneHelper-enable")&&(e.plugins[Mr].update({clip_info_list:t.clip_info_list}),u.info("更新空降助手信息",t.clip_info_list));}},Rr={async waitReactPropsToSet(e,t,r){Array.isArray(t)||(t=[t]),Array.isArray(r)||(r=[r]);function n(){let i=null;return typeof e=="string"?i=m.selector(e):typeof e=="function"?i=e():e instanceof HTMLElement&&(i=e),i}typeof e=="string"&&!await d.waitNode(e,1e4)||r.forEach(i=>{typeof i.msg=="string"&&u.info(i.msg);function a(){let o=n();if(o==null)return {status:false,isTimeout:true,inst:null,$el:o};let l=d.getReactObj(o);if(l==null)return {status:false,isTimeout:false,inst:null,$el:o};let s=Array.from(t).findIndex(h=>{let y=l[h];if(!y)return  false;let C=i.check(y,o);return C=!!C,C}),c=t[s],p=l[c];return {status:s!==-1,isTimeout:false,inst:p,$el:o}}d.waitPropertyByInterval(()=>n(),()=>a().status,250,1e4).then(()=>{let o=a();if(o.status){let l=o.inst;i.set(l,o.$el);}else typeof i.failWait=="function"&&i.failWait(o.isTimeout);});});}};function Ct(e){let t=[];return e.video.forEach(r=>{if(!e.accept_quality.includes(r.id))return;let n=e.support_formats.find(o=>o.quality===r.id),i=U.findBetterCDN(r.base_url,r.baseUrl,r.backup_url,r.backupUrl);i=U.replaceBangumiVideoCDN(i);let a=n?.new_description;t.push({name:a,url:i,type:r.mimeType,id:r.id,size:r.size,quality:r.id,vip:!!n?.need_vip,bandwidth:r.bandwidth,frameRate:r.frameRate,codecid:r.codecid,codecs:r.codecs});}),t}const zr=(e,t)=>`第${e}话 ${t}`,wt=(e,t)=>{let r=[];if(e?.dash?.video?.length){let n=e;r=[...Ct({accept_quality:n.accept_quality,support_formats:n.support_formats,video:n.dash.video})],r.length===0&&n.dash.video.length!==0&&(u.warn(`当前选择的视频编码id为: ${t}，但是过滤出的视频没有一个符合的，所以直接放弃使用自定义选择视频编码`),r=[...Ct({accept_quality:n.accept_quality,support_formats:n.support_formats,video:n.dash.video})]);}else {let n=e;n.durls.length===0&&n.durl!=null&&n.durls.push({quality:n.quality,durl:n.durl}),n.durls.forEach(i=>{if(!n.accept_quality.includes(i.quality)||!i.durl.length)return;let a=i.durl[0],o=e.support_formats.find(c=>c.quality===i.quality),l=U.findBetterCDN(a.url,a.backup_url),s=o?.new_description;r.push({name:s,url:l,type:"audio/mp4",id:i.quality,size:a.size,quality:i.quality,vip:!!o?.need_vip,bandwidth:0,frameRate:"",codecid:0,codecs:""});});}return r},Nr=async(e,t)=>{const{aid:r,bvid:n,cid:i,ep_id:a,title:o,long_title:l}=e;u.info(`解析番剧信息 aid:${r} cid:${i} ep_id:${a}`);const s=zr(o,l),c=[];let p=[],h=[],y=false,C=[],$=0,L=0;if(f.getValue("bili-bangumi-unlockAreaLimit")){const S=await vt.getPlayUrl({avid:r,cid:i,ep_id:a});if(!S)return;if(Array.isArray(S?.clip_info_list)?h=S.clip_info_list:Array.isArray(S?.clip_info)&&(h=S.clip_info),S.type.toLowerCase()==="flv")y=true,S.durl.forEach(D=>{let N=U.findBetterCDN(D.url,D.backup_url);N=U.replaceBangumiVideoCDN(N),$+=D.length,L+=D.size,C.push({order:D.order,url:N,duration:D.length,length:D.length,size:D.size});});else if(S.type.toLowerCase()==="dash"||S.type.toLowerCase()==="mp4")(S?.dash?.audio||[]).forEach(D=>{let N=U.findBetterCDN(D.baseUrl,D.base_url,D.baseUrl,D.backup_url);N=U.replaceBangumiVideoCDN(N),c.push({url:N,id:D.id,size:D.size,text:Rt[D.id]||"",bandwidth:D.bandwidth,codecs:D.codecs,mimeType:D.mimeType||D.mime_type});}),u.info("ArtPlayer: 获取的音频信息",c),p=p.concat(wt(S)),u.info("ArtPlayer: 获取的视频画质信息",p);else {Re.failToast("暂未适配的视频格式："+S.format);return}}else {const S=await vt.getPlayUrlHTML5({avid:r,cid:i,ep_id:a});if(!S)return;Array.isArray(S?.clip_info_list)?h=S.clip_info_list:Array.isArray(S?.clip_info)&&(h=S.clip_info),p=p.concat(wt(S));}const I=p.map((S,D)=>({html:S.name,url:S.url,quality:S.quality,mimeType:S.type,codecid:S.codecid,codecs:S.codecs,frameRate:S.frameRate,bandwidth:S.bandwidth})),k={container:null,epList:t,cid:i,aid:r,bvid:n,ep_id:a,videoTitle:s,danmukuUrl:`https://api.bilibili.com/x/v1/dm/list.so?oid=${i}`,quality:I,clip_info_list:h,isFlv:y,flvInfo:C,flvTotalDuration:$,flvTotalSize:L};return k.url=p?.[0]?.url,c.length&&(k.audioList=c.map((S,D)=>({isDefault:D===0,url:S.url,soundQualityCode:S.id,soundQualityCodeText:S.text,bandwidth:S.bandwidth,codecs:S.codecs,mimeType:S.mimeType,size:S.size}))),k},rr={$data:{art:null},updateArtPlayerVideoInfo(e,t){const r=this;Rr.waitReactPropsToSet(v.className.bangumi_new+' [class^="Player_container"]',"reactFiber",{check(n){return typeof n?.return?.memoizedState?.queue?.lastRenderedState?.[0]?.epInfo?.bvid=="string"},async set(n){let i=n?.return?.memoizedState?.queue?.lastRenderedState?.[0]?.epInfo;const a=Q("#bilibiliPlayer");if(e==null&&(e=i),t==null){t=[];let s=Q(v.className.bangumi_new+' [class^="EpisodeList_episodeListWrap"]');if(s){let p=d.getReactObj(s)?.reactFiber?.return?.memoizedState?.memoizedState?.[0]?.episodes;Array.isArray(p)&&(t=p);}}const o=await Nr(e,t);if(o==null)return;let l=Q("#artplayer");if(!l){const s=m.createElement("div",{className:"artplayer-container",innerHTML:`
									<div id="artplayer"></div>
									`});l=s.querySelector("#artplayer"),m.after(a,s);}if(o.container=l,r.$data.art==null){let s=await ve.init(o);if(s)r.$data.art=s;else return;r.$data.art.volume=1;}else ve.update(r.$data.art,o);}});}},Or={$data:{art:null},init(){f.execMenuOnce("bili-bangumi-initialScale",()=>{M.initialScale();}),f.execMenuOnce("bili-bangumi-hook-callApp",()=>{this.hookCallApp();}),f.execMenu("bili-bangumi-cover-clicl-event-chooseEp",()=>{this.setChooseEpClickEvent();}),f.execMenu("bili-bangumi-cover-clicl-event-other",()=>{this.setClickOtherVideo();}),f.execMenu("bili-bangumi-cover-clicl-event-recommend",()=>{this.setRecommendClickEvent();}),this.coverVideoPlayer();},hookCallApp(){let e=K.setTimeout;K.setTimeout=function(...t){if(t[0].toString().includes("autoOpenApp")){u.success("阻止唤醒App",t);return}return Reflect.apply(e,this,t)};},setChooseEpClickEvent(){d.waitNode(v.className.bangumi+" .ep-list-pre-wrapper ul.ep-list-pre-container").then(e=>{u.info("覆盖【选集】的点击事件"),m.on(e,"click","li.episode-item",function(t){d.preventEvent(t),be.jumpToUrl(t);},{capture:true});}),d.waitNode(v.className.bangumi+" .ep-list-pre-wrapper ul.season-list-wrapper").then(e=>{u.info("覆盖【xx季】的点击事件"),m.on(e,"click","li",function(t){d.preventEvent(t),be.jumpToUrl(t);},{capture:true});}),d.waitNode(v.className.bangumi+" .ep-list-pre-header").then(e=>{u.info("覆盖【选集】右上角的【全xx话】Arrow的点击事件"),m.on(e,"click",function(t){d.preventEvent(t);},{capture:true});}),m.on(document,"click",[v.className.bangumi_new+' [class^="EpisodeList_episodeListWrap"] m-open-app[universallink]',v.className.bangumi_new+' [class^="SeasonList_container"] m-open-app[universallink]'],(e,t)=>{let r=be.getUrl(t);if(!r){w.error("获取跳转链接失败");return}M.goToUrl(r);},{capture:true});},setClickOtherVideo(){d.waitNode(v.className.bangumi+" .section-preview-wrapper ul.ep-list-pre-container").then(e=>{u.info("覆盖【PV&其他】、【预告】、【主题曲】的点击事件"),m.on(e,"click","li.section-preview-item",function(t){d.preventEvent(t),be.jumpToUrl(t);},{capture:true});}),d.waitNode(v.className.bangumi+" .section-preview-header").then(e=>{u.info("覆盖【PV&其他】、【预告】、【主题曲】右上角的Arrow的点击事件"),m.on(e,"click",function(t){d.preventEvent(t);},{capture:true});}),m.on(document,"click",v.className.bangumi_new+' [class^="SectionPanel_container"] m-open-app[universallink]',(e,t)=>{let r=be.getUrl(t);if(!r){w.error("获取跳转链接失败");return}M.goToUrl(r);},{capture:true});},setRecommendClickEvent(){d.waitNode(v.className.bangumi+" .recom-wrapper ul.recom-list").then(e=>{u.info("覆盖【更多推荐】番剧的点击事件"),m.on(e,"click","li.recom-item-v2",function(t){d.preventEvent(t),be.jumpToUrl(t);},{capture:true});}),m.on(document,"click",v.className.bangumi_new+' [class^="Footer_container"] m-open-app[universallink]',(e,t)=>{let r=be.getUrl(t);if(!r){w.error("获取跳转链接失败");return}M.goToUrl(r);},{capture:true});},coverVideoPlayer(){if(document.querySelector("#artplayer"))u.warn("已存在播放器，更新播放信息");else {R(`
			.player-wrapper,
			.open-app-bar,
			${v.className.bangumi_new} [class^="Player_videoWrap"] > div:not(.artplayer-container){
				display: none !important;
			}
			
			${ot}
			
			${Ir}
			
			.artplayer-container{
				height: -webkit-fill-available;
				height: 100%;
			}
			`);let e=f.getValue("bili-bangumi-artplayer-controlsPadding-left-right",0);e!=0&&R(`
				@media (orientation: landscape) {
					.art-video-player .art-layers .art-layer-top-wrap,
					/* 底部 */
					.art-video-player .art-bottom{
						padding-left: ${e}px !important;
						padding-right: ${e}px !important;
					}
					
					/* 锁定图标 */
					.art-video-player  .art-layer-lock{
						--art-lock-left-size: ${e}px;
					}
				}
				`);}rr.updateArtPlayerVideoInfo();}},nr={async getSearchInputPlaceholder(){let e=await q.get("https://api.bilibili.com/x/web-interface/wbi/search/default",{fetch:true,headers:{accept:"application/json, text/plain, */*","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","cache-control":"no-cache",pragma:"no-cache","sec-ch-ua":'""',"sec-ch-ua-mobile":"?1","sec-ch-ua-platform":'""',"sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-site"},allowInterceptConfig:false});if(!e.status)return;let t=d.toJSON(e.data.responseText);if(ue.isWebApiSuccess(t))return t.data},async getBangumiSearchResult(e){let t={search_type:"media_bangumi",keyword:e.keyword,from_client:"BROWSER",drm_tech_type:"2",module:"bangumi",area:e.area.toLowerCase(),access_key:ke.getAccessToken()},r=`https://${e.host}/x/web-interface/search/type?${d.toSearchParamsStr(t)}`,n=await q.get(r,{fetch:false,headers:{"User-Agent":d.getRandomAndroidUA()}});if(!n.status)return;let i=d.toJSON(n.data.responseText);return ue.isWebApiSuccess(i)?{isSuccess:true,data:i.data.result}:(u.error(`请求失败，当前代理服务器信息：${JSON.stringify(e.host)}`),u.error(`请求失败，当前请求的响应信息：${JSON.stringify(i)}`),{isSuccess:false,data:i})}},Pr=`#app .m-search {\r
	--card-img-width: 90px;\r
	--card-img-height: calc(var(--card-img-width) * 1.33);\r
	--card-desc-color: #808080;\r
	--card-desc-size: 0.8em;\r
	--card-badge-item-size: 0.7em;\r
	--card-badge-item-padding: 0.1em 0.2em;\r
	--card-badge-item-border-radius: 3px;\r
	--card-ep-item-border-radius: 4px;\r
	--card-ep-item-padding-top-bottom: 13px;\r
	--card-ep-item-padding-left-right: 13px;\r
	--card-ep-item-badge-padding: 2px;\r
}\r
.gm-result-panel {\r
	padding-top: 23.46667vmin;\r
	background: #f4f4f4;\r
}\r
.gm-card-cover {\r
	position: relative;\r
}\r
.gm-card-cover img {\r
	width: var(--card-img-width);\r
	height: var(--card-img-height);\r
	border-radius: 8px;\r
}\r
.gm-card-container {\r
	display: flex;\r
	gap: 15px;\r
}\r
\r
.gm-card-box {\r
	padding: 0px 10px;\r
}\r
\r
.gm-card-item em {\r
	color: var(--bili-color);\r
	font-style: unset;\r
}\r
\r
.gm-card-title {\r
	font-family: 微软雅黑;\r
	font-size: 1em;\r
}\r
\r
.gm-card-display-info,\r
.gm-card-styles,\r
span.gm-card-media_score-user_count {\r
	font-size: var(--card-desc-size);\r
	color: var(--card-desc-color);\r
}\r
\r
.gm-card-info-container {\r
	display: flex;\r
	flex-direction: column;\r
	gap: 3px;\r
	justify-content: flex-start;\r
}\r
.gm-card-info {\r
	display: flex;\r
	flex-direction: column;\r
	justify-content: space-between;\r
}\r
span.gm-card-media_score-score {\r
	color: #f77c2e;\r
	font-size: 1.2em;\r
	font-weight: bold;\r
}\r
\r
.gm-card-media_score {\r
	display: flex;\r
	align-items: flex-end;\r
	gap: 0.5em;\r
}\r
.gm-card-item {\r
	padding: 1.6vmin;\r
	background: #fff;\r
	margin: 10px 0px;\r
	border-radius: 6px;\r
	display: flex;\r
	flex-direction: column;\r
	gap: 15px;\r
	overflow: hidden;\r
}\r
.gm-card-badges {\r
	background: var(--bili-color);\r
	color: #fff;\r
	padding: 3px;\r
	font-size: 12px;\r
	border-radius: 3px;\r
	white-space: nowrap;\r
	position: absolute;\r
	top: 5px;\r
	right: 5px;\r
}\r
.gm-card-badge-info-item {\r
	font-size: var(--card-badge-item-size);\r
	padding: var(--card-badge-item-padding);\r
	border-radius: var(--card-badge-item-border-radius);\r
}\r
.gm-card-eps {\r
	display: flex;\r
	overflow: auto;\r
	gap: 10px;\r
}\r
\r
.gm-card-ep-conatiner {\r
	text-align: center;\r
	white-space: nowrap;\r
	padding: var(--card-ep-item-padding-top-bottom)\r
		var(--card-ep-item-padding-left-right);\r
	background: #edeff3;\r
	border-radius: var(--card-ep-item-border-radius);\r
	font-size: 14px;\r
	position: relative;\r
}\r
\r
.gm-card-ep-badges-container {\r
	position: absolute;\r
	top: 0;\r
	right: 0;\r
	font-size: calc(\r
		var(--card-ep-item-padding-top-bottom) - var(--card-ep-item-badge-padding)\r
	);\r
}\r
\r
.gm-card-ep-badge-top-right {\r
	border-top-right-radius: var(--card-ep-item-border-radius);\r
	border-bottom-left-radius: var(--card-ep-item-border-radius);\r
	padding: var(--card-ep-item-badge-padding);\r
}\r
.gm-card-ep-info-container {\r
	min-width: 30px;\r
}\r
`,ir={$flag_css:{enableOtherAreaSearchBangumi:false},init(){R(Pr),m.ready(()=>{f.execMenu("bili-search-enableOtherAreaSearchBangumi",()=>{this.enableOtherAreaSearchBangumi();});});},enableOtherAreaSearchBangumi(){this.$flag_css.enableOtherAreaSearchBangumi||(this.$flag_css.enableOtherAreaSearchBangumi=true,R(`
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
				color: var(--bili-color);
				border-bottom: 0.53333vmin solid var(--bili-color);
			}
			`)),d.waitNode(".m-search-result .tabs:not(:has(.gm-tab-item))").then(e=>{nt.getSearchProxyHost().forEach(n=>{let i=m.createElement("a",{className:"tab-item gm-tab-item",innerHTML:`番剧（${n.name}）`},{"data-area":n.area,"data-host":n.host});e.appendChild(i);});const r=n=>{e.querySelectorAll(".tab-item").forEach(i=>n!=i&&i.classList.remove("on")),n.classList.add("on");};m.on(e,"click",".tab-item",async n=>{let i=n.target;r(i);let a=document.querySelector(".result-panel"),o=document.querySelector(".gm-result-panel");if(o&&(o.remove(),m.show(a)),!i.classList.contains("gm-tab-item"))return;let l=i.dataset.area,s=i.dataset.host,c=document.querySelector(".m-search-result"),p=_.getVue(c);p.switchTab(233),m.hide(a);let h=p.keyword,y=w.loading("搜索中，请稍后..."),C=await nr.getBangumiSearchResult({keyword:h,area:l,host:s});if(y.close(),!C)return;if(!C.isSuccess){alert(JSON.stringify(C.data,null,2));return}let $=C.data;u.info("搜索结果：",$);let L=m.createElement("div",{className:"gm-result-panel",innerHTML:`
						<div class="gm-list-view">
							<div class="gm-video-list-box">
								<div class="gm-video-list">
									<div class="gm-card-box"></div>
								</div>
							</div>
						</div>
					`}),I=L.querySelector(".gm-card-box");$.forEach(k=>{I.appendChild(this.createSearchResultVideoItem(k));}),c.appendChild(L);});});},createSearchResultVideoItem(e){let t=m.createElement("div",{className:"gm-card-item",innerHTML:`
				<div class="gm-card-container">
					<div class="gm-card-cover">
						<div class="gm-card-badges">${e.season_type_name}</div>
						<img src="${e.cover}" alt="封面">
					</div>
					<div class="gm-card-info">
						<div class="gm-card-info-container">
							<div class="gm-card-title">${e.title}</div>
							<div class="gm-card-display-info">
							</div>
							<div class="gm-card-styles">${e.styles||Reflect.get(e,"style")||Reflect.get(e,"styles_v2")||""}</div>
						</div>
						<div class="gm-card-media_score">
							
						</div>
					</div>
					<div class="gm-card-ferture">
					</div>
				</div>
				<div class="gm-card-eps">
					
				</div>
				`},{"data-url":e.url,"data-type":e.type,"data-media_id":e.media_id,"data-pgc_season_id":e.pgc_season_id,"data-is_follow":e.is_follow,"data-is_selection":e.is_selection});Reflect.set(t,"data-option",e),m.on(t,"click",s=>{d.preventEvent(s),window.open(e.url,"_blank");});let r=t.querySelector(".gm-card-display-info"),n=[];Array.isArray(e?.display_info)&&(n=n.concat(e.display_info)),Array.isArray(e?.badges)&&(n=n.concat(e.badges)),n=d.uniqueArray(n,s=>s.text),n.forEach(s=>{let c=m.createElement("span",{className:"gm-card-badge-info-item",innerText:s.text});typeof s.border_color=="string"&&(c.style.border=`1px solid ${s.border_color}`,c.style.color=s.border_color),m.append(r,c);}),e.pubtime&&m.append(r,`
				<span>${d.formatTime(e.pubtime*1e3,"yyyy")}</span>
				`);let i=e.areas||Reflect.get(e,"area");i&&(r.children.length&&m.append(r,`
					<span> | </span>
				`),m.append(r,`
					<span>${i}</span>
				`));let a=t.querySelector(".gm-card-media_score");e.media_score&&e.media_score.user_count&&m.append(a,`
				<span class="gm-card-media_score-score">${e.media_score?.score||0}分</span>
				<span class="gm-card-media_score-user_count">${e.media_score?.user_count||0}人参与</span>
				`);let o=t.querySelector(".gm-card-eps");return [...e.eps||[],...Reflect.get(e,"episodes_new")||[]].filter(s=>d.isNotNull(s)).forEach(s=>{let c=s.title||s.long_title,p=s.url||Reflect.get(s,"uri"),h=m.createElement("div",{className:"gm-card-ep-conatiner",innerHTML:`
				<div class="gm-card-ep-badges-container">
					
				</div>
				<div class="gm-card-ep-info-container">
					${c}
				</div>`},{"data-id":s.id,"data-url":p,"data-title":c,"data-long_title":s.long_title}),y=h.querySelector(".gm-card-ep-badges-container");if(h.querySelector(".gm-card-ep-info-container"),Array.isArray(s.badges)&&s.badges.length){let C=s.badges[0],$=m.createElement("span",{className:"gm-card-ep-badge-top-right",innerText:C.text});typeof C.bg_color=="string"&&($.style.backgroundColor=C.bg_color),typeof C.text_color=="string"&&($.style.color=C.text_color),m.append(y,$);}m.on(h,"click",C=>{d.preventEvent(C),window.open(p,"_blank");}),o.appendChild(h);}),t},searchBangumi(){}},jr={$flag:{mutationSearchResult:false},init(){this.mutationSearchResult();},mutationSearchResult(){this.$flag.mutationSearchResult||(this.$flag.mutationSearchResult=true,R(`
        .bangumi-list{
            padding: 0 10px;
        }
        `),d.mutationObserver(document,{config:{subtree:true,childList:true},callback:d.debounce(()=>{document.querySelectorAll(".m-search-bangumi-item").forEach(e=>{let t=_.getVue(e);if(!t)return;let r=t.info;if(!r)return;let n=ir.createSearchResultVideoItem(r);m.after(e,n),e.remove();});})}));}},Hr={init(){f.execMenuOnce("bili-search-vue-prop-noCallApp",()=>{this.noCallApp();}),f.execMenuOnce("bili-search-vue-prop-openAppDialog",()=>{this.openAppDialog();});},noCallApp(){let e=new d.LockFunction(()=>{le(".video-list .card-box > div:not([data-gm-inject-no-call-app])").forEach(t=>{let r=_.getVue(t);r&&typeof r.noCallApp=="boolean"&&(Object.defineProperty(r,"noCallApp",{value:true,writable:false,enumerable:true,configurable:true}),t.setAttribute("data-gm-inject-no-call-app","true"));});});d.mutationObserver(document,{config:{subtree:true,childList:true},callback(){e.run();}});},openAppDialog(){let e=new d.LockFunction(()=>{le(".video-list .card-box > div:not([data-gm-inject-openAppDialog])").forEach(t=>{let r=_.getVue(t);r&&typeof r.openAppDialog=="boolean"&&(Object.defineProperty(r,"openAppDialog",{value:false,writable:false,enumerable:true,configurable:true}),t.setAttribute("data-gm-inject-openAppDialog","true"));});});d.mutationObserver(document,{config:{subtree:true,childList:true},callback(){e.run();}});}},Ur={init(){j.isSearchResult()&&ir.init(),Hr.init(),f.execMenuOnce("bili-search-cover-cancel",()=>{this.coverCancel();}),f.execMenu("bili-search-beautifySearchResult",()=>{jr.init();}),f.execMenuOnce("bili-search-cover-card-result-click-event",()=>{this.coverCardResultClickEvent();}),m.ready(()=>{f.execMenu("bili-search-inputAutoFocus",()=>{this.inputAutoFocus();});});},coverCancel(){u.info("覆盖【取消】按钮的点击事件"),m.on(document,"click","a.cancel",e=>{u.info("点击取消按钮"),d.preventEvent(e),window.history.back();},{capture:true});},inputAutoFocus(){if(new URLSearchParams(window.location.search).has("keyword")){u.warn("当前在搜索结果页面，不执行输入框自动获取焦点");return}u.info("输入框自动获取焦点"),d.waitNode('.m-search .m-search-search-bar input[type="search"]',1e4).then(t=>{if(!t){u.error("获取输入框失败");return}t.focus();});},coverCardResultClickEvent(){u.info("覆盖搜索结果点击事件"),m.on(document,"click",".video-list .card-box > div",(e,t)=>{let r=t,n=_.getVue(r);if(!n)return;let i=n.cardClick;typeof i=="function"&&(d.preventEvent(e),i(e));},{capture:true});}},qr={init(){f.execMenuOnce("bili-live-block-chatRoom",()=>this.blockChatRoom()),f.execMenuOnce("bili-live-block-brush-prompt",()=>this.blockBrushPrompt()),f.execMenuOnce("bili-live-block-control-panel",()=>this.blockControlPanel());},blockChatRoom(){return u.info("屏蔽聊天室"),xe.addBlockCSS("#chat-items")},blockBrushPrompt(){return u.info("屏蔽xxx进入直播间"),xe.addBlockCSS("#brush-prompt")},blockControlPanel(){return u.info("屏蔽底部工具栏"),xe.addBlockCSS(".control-panel")}},Gr={init(){qr.init(),f.execMenuOnce("bili-live-prevent-openAppBtn",()=>{this.preventOpenAppBtn();});},preventOpenAppBtn(){d.waitNode("body").then(e=>{u.info("阻止.open-app-btn元素触发点击事件"),m.on(e,"click",".open-app-btn",function(t){d.preventEvent(t);},{capture:true}),m.on(e,"click","#web-player-controller-wrap-el",function(t){d.preventEvent(t);},{capture:true});});}},At={$data:{dispatchCallBackList:[]},init(){f.execMenu("bili-opus-variable-autoOpenApp",()=>{this.autoOpenApp();}),f.execMenu("bili-opus-variable-go404",()=>{this.go404();}),f.execMenu("bili-opus-variable-handleFallback",()=>{this.dispatch((e,t)=>{if(typeof t=="string"&&t==="opus/handleFallback"&&![1,2].includes(e.fallback.type))return u.success("禁止调用handleFallback函数前往404"),typeof e?.showComment=="boolean"&&e.showComment&&typeof e?.initFullComment=="function"&&e.initFullComment(),false});});},isLimit(){u.info("等待 观察并覆盖变量isLimit"),_.watchVuePropChange(v.className.opus,e=>e.isLimit,e=>{e.isLimit=false,u.success("观察者：覆盖变量isLimit=false");});},autoOpenApp(){_.waitVuePropToSet(v.className.opus,{msg:"等待 覆盖函数autoOpenApp",check(e){return typeof e?.autoOpenApp=="function"},set(e){u.success("成功 覆盖函数autoOpenApp"),e.autoOpenApp=function(){u.success("禁止调用autoOpenApp函数");};}});},go404(){_.waitVuePropToSet(v.className.opus,{msg:"等待 覆盖函数go404",check(e){return typeof e?.go404=="function"},set(e){u.success("成功 覆盖函数go404"),e.go404=function(){u.success("禁止调用go404函数");};}});},fallback(){_.waitVuePropToSet(v.className.opus,{msg:"等待 覆盖对象fallback",check(e){return typeof e?.fallback?.type=="number"},set(e){u.success("成功 覆盖对象fallback"),e.$watch(()=>e?.fallback,()=>{e.fallback=null,u.success("覆盖对象fallback");},{deep:true,immediate:true});}});},dispatch(e){let t=e.toString();for(let n=0;n<this.$data.dispatchCallBackList.length;n++)if(this.$data.dispatchCallBackList[n].toString()===t)return;if(u.info("添加dispatch回调判断"),this.$data.dispatchCallBackList.push(e),this.$data.dispatchCallBackList.length>1)return;const r=this;_.waitVuePropToSet(v.className.opus,{msg:"等待 覆盖函数dispatch",check(n){return typeof n?.$store?.dispatch=="function"},set(n){u.success("成功 覆盖函数dispatch");let i=n.$store.dispatch;n.$store.dispatch=function(...a){let o=a[0];for(let l=0;l<r.$data.dispatchCallBackList.length;l++){const s=r.$data.dispatchCallBackList[l];if(typeof s=="function"){let c=s(n,o);if(typeof c=="boolean"&&!c)return}}return Reflect.apply(i,this,a)};}});}},Qr={init(){At.init(),f.execMenuOnce("bili-opus-cover-topicJump",()=>{this.coverTopicJump();}),f.execMenuOnce("bili-opus-automaticallyExpandToReadFullText",()=>(At.isLimit(),this.automaticallyExpandToReadFullText())),f.execMenuOnce("bili-opus-cover-header",()=>{this.coverHeaderJump();});},coverTopicJump(){u.info("覆盖话题跳转点击事件"),m.on(document,"click",v.className.opus+" .launch-app-btn.opus-module-topic",function(e){let t=e.target,r=_.getVue(t);if(!r){w.error("获取话题的__vue__失败");return}let n=r?.$props?.data,i=n?.jump_url;if(d.isNull(i)){w.error("获取话题的jump_url失败");return}u.info("话题的跳转信息: ",n),M.goToUrl(i);},{capture:true});},automaticallyExpandToReadFullText(){return u.info("自动展开阅读全文"),[xe.addBlockCSS(v.className.opus+" .opus-read-more"),R(`
			${v.className.opus} .opus-module-content{
				overflow: unset !important;
				max-height: unset !important;
			}
			`)]},coverHeaderJump(){u.info("覆盖header点击事件"),m.on(document,"click",v.className.opus+" .opus-module-author",function(e){d.preventEvent(e);let t=e.target,r=_.getVue(t);if(!r){w.error("获取vue属性失败");return}let n=r?.data?.mid;if(!n){w.error("获取mid失败");return}M.goToUrl(Ce.getUserSpaceUrl(n));},{capture:true});}},Wr={init(){f.execMenuOnce("bili-dynamic-cover-topicJump",()=>{this.coverTopicJump();}),f.execMenuOnce("bili-dynamic-cover-atJump",()=>{this.coverAtJump();}),f.execMenuOnce("bili-dynamic-cover-referenceJump",()=>{this.coverReferenceJump();}),f.execMenuOnce("bili-dynamic-cover-header",()=>{this.coverHeaderJump();});},coverHeaderJump(){u.info("覆盖header点击事件"),m.on(document,"click",v.className.dynamic+" .launch-app-btn .dyn-header",function(e){d.preventEvent(e);let t=e.target,r=_.getVue(t);if(!r){w.error("获取vue属性失败");return}let n=r.url;if(!n){w.error("获取url失败");return}M.goToUrl(n);},{capture:true});},coverTopicJump(){u.info("覆盖话题跳转点击事件"),m.on(document,"click",v.className.dynamic+" .launch-app-btn .bili-dyn-topic",function(e){d.preventEvent(e);let t=e.target,r=_.getVue(t);if(!r){w.error("获取vue属性失败");return}let n=r?.$props?.data,i=n?.jump_url;if(d.isNull(i)){w.error("获取jump_url失败");return}u.info("话题的跳转信息: ",n),M.goToUrl(i);},{capture:true});},coverAtJump(){u.info("覆盖@ 跳转"),m.on(document,"click",v.className.dynamic+" .at",function(e){d.preventEvent(e);let t=e.target,r=t.getAttribute("data-oid")||_.getVue(t)?.$props?.rid;if(d.isNull(r)){w.error("获取data-oid或rid失败");return}u.info("用户的oid: "+r),M.goToUrl(Ce.getUserSpaceDynamicUrl(r));},{capture:true});},coverReferenceJump(){u.info("覆盖引用的点击事件"),m.on(document,"click",v.className.dynamic+" .dyn-content .reference .dyn-orig-author",function(e){d.preventEvent(e);let r=e.target.getAttribute("data-url");if(!r){w.error("获取data-url失败");return}M.goToUrl(r);},{capture:true}),m.on(document,"click",v.className.dynamic+" .dyn-content .reference .dyn-archive",function(e){d.preventEvent(e);let t=e.target,r=_.getVue(t);if(!r){w.error("获取vue属性失败");return}let n=r?.data?.jump_url;if(d.isNull(n)){w.error("获取jump_url失败");return}M.goToUrl(n);},{capture:true});}},Te={$isHook:{windowPlayerAgent:false,hookWebpackJsonp_openApp:false,overRideLaunchAppBtn_Vue_openApp:false,overRideBiliOpenApp:false,overRideWxTaghandleClick:false},$data:{setTimeout:[]},windowWebPack(e="webpackJsonp",t,r){let n;ct.Object.defineProperty(K,e,{get(){return n},set(i){u.success("成功劫持webpack，当前webpack名："+e),n=i;const a=n.push;n.push=function(...o){let l=o[0][0];return (t==l||Array.isArray(t)&&Array.isArray(l)&&JSON.stringify(t)===JSON.stringify(l))&&Object.keys(o[0][1]).forEach(s=>{let c=o[0][1][s];o[0][1][s]=function(...p){let h=c.call(this,...p);return p[0]=r(p[0]),h};}),a.call(this,...o)};}});},setTimeout(e){if(this.$data.setTimeout.push(e),this.$data.setTimeout.length>1){u.info("window.setTimeout hook新增劫持判断参数："+e);return}K.setTimeout=function(...t){let r=t[0].toString();if(r.match(e)){u.success("劫持setTimeout的函数",r);return}return ct.setTimeout.apply(this,t)};},overRideLaunchAppBtn_Vue_openApp(){if(this.$isHook.overRideLaunchAppBtn_Vue_openApp)return;this.$isHook.overRideLaunchAppBtn_Vue_openApp=true;function e(t){typeof t.openApp!="function"||t.openApp.toString().includes("阻止唤醒App")||(t.openApp=function(...n){u.success("openApp：阻止唤醒App",n);});}d.mutationObserver(document,{config:{subtree:true,childList:true,attributes:true},immediate:true,callback(){document.querySelectorAll(".launch-app-btn").forEach(t=>{let r=_.getVue(t);r&&(e(r),r.$children&&r.$children.length&&r.$children.forEach(n=>{e(n);}));});}});},overRideBiliOpenApp(){this.$isHook.overRideBiliOpenApp||(this.$isHook.overRideBiliOpenApp=true,d.mutationObserver(document,{config:{subtree:true,childList:true,attributes:true},immediate:true,callback(){[...Array.from(le("bili-open-app")),...Array.from(le("m-open-app"))].forEach(e=>{if(e.hasAttribute("data-inject-opener-open"))return;let t=Reflect.get(e,"opener");if(t==null)return;typeof t?.open=="function"&&(Reflect.set(t,"open",n=>{u.success(`拦截bili-open-app.open跳转: ${JSON.stringify(n)}`),typeof n?.universalLink=="string"&&M.goToUrl(n.universalLink);}),e.setAttribute("data-inject-opener-open","true"));});}}));},overRideWxTaghandleClick(){this.$isHook.overRideWxTaghandleClick||(this.$isHook.overRideWxTaghandleClick=true,d.mutationObserver(document,{config:{subtree:true,childList:true,attributes:true},immediate:true,callback(){[...Array.from(le(".wx-tag"))].forEach(e=>{if(e.hasAttribute("data-inject-vueins-handle-click"))return;let t=_.getVue(e);t&&(typeof t?.handleClick=="function"&&(t.handleClick=function(){typeof t.goToVideo=="function"?t.goToVideo():w.error(".wx-tag不存在goToVideo函数",{consoleLogContent:true});},e.setAttribute("data-inject-vueins-handle-click","true")),Array.isArray(t?.$children)&&t.$children.length&&typeof t.$children[0].handleClick=="function"&&(t.$children[0].handleClick=t.handleClick));});}}));}},Jr=`#app .m-head .m-recommend-view {\r
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
	color: var(--bili-color) !important;\r
}\r
#app\r
	.m-head\r
	.suspension\r
	.channel-menu:has(.recommend-tag.is-avtive)\r
	a.recommend-tag\r
	span:after {\r
	content: " ";\r
	position: relative;\r
	background: var(--bili-color);\r
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
	border: 1px solid var(--bili-color);\r
	color: var(--bili-color);\r
	border-radius: 2px;\r
	margin-right: 4px;\r
	font-size: 2vmin;\r
}\r
\r
#app\r
	.m-head\r
	.m-recommend-view\r
	.list-view\r
	.video-list-box\r
	.video-list\r
	.card-box\r
	.v-card\r
	.count\r
	> span {\r
	display: flex;\r
	align-items: center;\r
	gap: 1.33333vmin;\r
}\r
`;var Yr=23442827791579n,Kr=1n<<51n,Et=58n,Zr="FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf";function Xr(e){const t=["B","V","1","0","0","0","0","0","0","0","0","0"];let r=t.length-1,n=(Kr|BigInt(e))^Yr;for(;n>0;)t[r]=Zr[Number(n%BigInt(Et))],n=n/Et,r-=1;return [t[3],t[9]]=[t[9],t[3]],[t[4],t[7]]=[t[7],t[4]],t.join("")}const Bt=e=>(e.startsWith("http://")&&(e=e.replace(/^http/,"https")),e),en={$flag:{isInitCSS:false,isLoadingNextPage:false},$data:{intersectionObserver:null,loadNums:0},$ele:{$listView:null,$videoListBox:null,$videoList:null,$cardBox:null,$listViewShim:null},$cardGoto:{av:"av",picture:"picture"},init(){this.setCSS(),m.ready(()=>{this.addRecommendTag();});},setCSS(){this.$flag.isInitCSS||(this.$flag.isInitCSS=true,R(Jr));},reset(){u.info("重置状态"),this.$flag.isLoadingNextPage=false,this.removeScrollEvent(),Object.keys(this.$ele).forEach(e=>{this.$ele[e]=null;});},addRecommendTag(){if(document.querySelector(".channel-menu a.recommend-tag"))return;let e=document.querySelector(".channel-menu .v-switcher");if(!e){u.error("添加推荐标签失败，原因：.channel-menu .v-switcher不存在"),w.error("添加推荐标签失败，原因：.channel-menu .v-switcher不存在");return}let t=m.createElement("a",{className:"v-switcher__header__tabs__item recommend-tag",innerHTML:"<span>推荐</span>"},{href:"javascript:;"}),r=m.createElement("div",{className:"m-recommend-view",innerHTML:`
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
            `});this.$ele.$listView=r.querySelector(".list-view"),this.$ele.$videoListBox=r.querySelector(".video-list-box"),this.$ele.$videoList=r.querySelector(".video-list"),this.$ele.$cardBox=r.querySelector(".card-box"),this.$ele.$listViewShim=r.querySelector(".list-view__shim"),this.$ele.$listViewShim.style.cssText="z-index:-1;user-select:none;pointer-events:none;background:transparent;left:0;bottom:0;width:100%;height:200px;";let n=document.querySelector("#app .m-head");n&&n.appendChild(r),m.on(t,"click",i=>{d.preventEvent(i),t.classList.add("is-avtive"),this.recommendClickEvent();}),m.on(e,"click",()=>{t.classList.remove("is-avtive");},{capture:true}),m.on(this.$ele.$cardBox,"click",".v-card",i=>{d.preventEvent(i);let a=i.target;window.open(a.href,"_blank");}),m.before(e,t),this.setScrollEvent(),window.location.hash==="#/recommend/"&&(u.info("当前hash为推荐视频，出动触发"),t.click());},async recommendClickEvent(){M.goToUrl("#/recommend/",true);},setScrollEvent(){u.success("推荐视频监听滚动: IntersectionObserver"),this.$data.intersectionObserver=new IntersectionObserver(async e=>{if(!this.$flag.isLoadingNextPage&&e[0].isIntersecting){this.$flag.isLoadingNextPage=true;let t=await this.scrollEvent();this.$flag.isLoadingNextPage=false,this.$data.loadNums<=1&&t?(m.hide(this.$ele.$listViewShim,false),await d.sleep(500),m.show(this.$ele.$listViewShim,false)):m.show(this.$ele.$listViewShim,false);}},{threshold:0,rootMargin:"0px 0px 0px 0px"}),this.$data.intersectionObserver.observe(this.$ele.$listViewShim);},removeScrollEvent(){this.$data.intersectionObserver?.disconnect(),this.$data.intersectionObserver=null;},async scrollEvent(){let e=await this.getRecommendVideoInfo();if(!e)return  false;u.success("获取推荐视频信息",e);let t=document.createDocumentFragment(),r=f.getValue("bili-head-recommend-push-graphic");return e.forEach(n=>{let i=null;if(n.goto===this.$cardGoto.av)i=this.getRecommendItemAVElement(n);else if(n.goto===this.$cardGoto.picture)if(r)i=this.getRecommendItemPictureElement(n);else return;else {u.error("该goto暂未适配",n);return}t.appendChild(i);}),this.$ele.$cardBox.appendChild(t),this.$data.loadNums++,true},async getRecommendVideoInfo(){let e={appkey:fe.ios.appkey,access_key:ke.getAccessTokenInfo()?.access_token||""},r=await q.get("https://app.bilibili.com/x/v2/feed/index"+"?"+d.toSearchParamsStr(e),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(!r.status)return;let n=d.toJSON(r.data.responseText);if(!ue.isWebApiSuccess(n)){w.error(n.message);return}return n.data.items},getRecommendItemPictureElement(e){let t=e.goto,r=e.param,n="/opus/"+r,i=e.args.up_name,a=e.title,o=Bt(e.cover),l=e.cover_left_text_1,s=m.createElement("a",{className:"v-card",href:n,innerHTML:`
                <div class="card">
                    <div class="bfs-img-wrap">
                        <div class="bfs-img b-img">
                            <picture class="b-img__inner">
                                <source type="image/webp" srcset="${o}">
                                <img src="${o}" alt="${a}">
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
                        ${i}
                    </div>
                    <div class="gm-video-handle">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path fill="#2E2F30" d="M512 256a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z m0 341.333333a85.333333 85.333333 0 1 1 0-170.666666 85.333333 85.333333 0 0 1 0 170.666666z m0 341.333334a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z">
                            </path>
                        </svg>
                    </div>
                </div>
                `},{"data-param":r,"data-title":a,"data-goto":t});return s["data-picture"]=e,s},getRecommendItemAVElement(e){let t=e.goto,r=e?.player_args?.aid||e.args.aid,i="/video/"+Xr(r),a=e.args.up_name,o=e.title,l=Bt(e.cover),s=e.cover_left_text_1,c=e.cover_left_text_2,p=e.cover_right_text,h=m.createElement("a",{className:"v-card",href:i,innerHTML:`
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
                            <i class="iconfont icon_shipin_bofangshu">
								<svg class="stats-item__icon" style="width: 16px; height: 16px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" width="16" height="16"><path d="M8 3.3320333333333334C6.321186666666667 3.3320333333333334 4.855333333333333 3.4174399999999996 3.820593333333333 3.5013466666666666C3.1014733333333333 3.5596599999999996 2.5440733333333334 4.109013333333333 2.48 4.821693333333333C2.4040466666666664 5.666533333333334 2.333333333333333 6.780666666666666 2.333333333333333 7.998666666666666C2.333333333333333 9.216733333333334 2.4040466666666664 10.330866666666665 2.48 11.175699999999999C2.5440733333333334 11.888366666666666 3.1014733333333333 12.437733333333334 3.820593333333333 12.496066666666666C4.855333333333333 12.579933333333333 6.321186666666667 12.665333333333333 8 12.665333333333333C9.678999999999998 12.665333333333333 11.144933333333334 12.579933333333333 12.179733333333333 12.496033333333333C12.898733333333332 12.4377 13.456 11.888533333333331 13.520066666666667 11.176033333333333C13.595999999999998 10.331533333333333 13.666666666666666 9.217633333333332 13.666666666666666 7.998666666666666C13.666666666666666 6.779766666666667 13.595999999999998 5.665846666666667 13.520066666666667 4.821366666666666C13.456 4.108866666666666 12.898733333333332 3.55968 12.179733333333333 3.5013666666666663C11.144933333333334 3.417453333333333 9.678999999999998 3.3320333333333334 8 3.3320333333333334zM3.7397666666666667 2.50462C4.794879999999999 2.41906 6.288386666666666 2.3320333333333334 8 2.3320333333333334C9.7118 2.3320333333333334 11.2054 2.4190733333333334 12.260533333333331 2.5046399999999998C13.458733333333331 2.6018133333333333 14.407866666666665 3.5285199999999994 14.516066666666667 4.73182C14.593933333333332 5.597933333333334 14.666666666666666 6.7427 14.666666666666666 7.998666666666666C14.666666666666666 9.2547 14.593933333333332 10.399466666666665 14.516066666666667 11.2656C14.407866666666665 12.468866666666665 13.458733333333331 13.395566666666667 12.260533333333331 13.492766666666665C11.2054 13.578333333333333 9.7118 13.665333333333333 8 13.665333333333333C6.288386666666666 13.665333333333333 4.794879999999999 13.578333333333333 3.7397666666666667 13.492799999999999C2.541373333333333 13.395599999999998 1.5922066666666668 12.468633333333333 1.4840200000000001 11.265266666666665C1.4061199999999998 10.3988 1.3333333333333333 9.253866666666667 1.3333333333333333 7.998666666666666C1.3333333333333333 6.743533333333333 1.4061199999999998 5.598579999999999 1.4840200000000001 4.732153333333333C1.5922066666666668 3.5287466666666667 2.541373333333333 2.601793333333333 3.7397666666666667 2.50462z" fill="currentColor"></path><path d="M9.8092 7.3125C10.338433333333333 7.618066666666666 10.338433333333333 8.382 9.809166666666666 8.687533333333333L7.690799999999999 9.910599999999999C7.161566666666666 10.216133333333332 6.5 9.8342 6.500006666666666 9.223066666666666L6.500006666666666 6.776999999999999C6.500006666666666 6.165873333333334 7.161566666666666 5.783913333333333 7.690799999999999 6.089479999999999L9.8092 7.3125z" fill="currentColor"></path></svg>
							</i>
                            ${s}
                        </span>
                        <span>
                            <i class="iconfont icon_shipin_danmushu">
								<svg class="stats-item__icon" style="width: 16px; height: 16px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" width="16" height="16"><path d="M8 3.3320333333333334C6.321186666666667 3.3320333333333334 4.855333333333333 3.4174399999999996 3.820593333333333 3.5013466666666666C3.1014733333333333 3.5596599999999996 2.5440733333333334 4.109013333333333 2.48 4.821693333333333C2.4040466666666664 5.666533333333334 2.333333333333333 6.780666666666666 2.333333333333333 7.998666666666666C2.333333333333333 9.216733333333334 2.4040466666666664 10.330866666666665 2.48 11.175699999999999C2.5440733333333334 11.888366666666666 3.1014733333333333 12.437733333333334 3.820593333333333 12.496066666666666C4.855333333333333 12.579933333333333 6.321186666666667 12.665333333333333 8 12.665333333333333C9.678999999999998 12.665333333333333 11.144933333333334 12.579933333333333 12.179733333333333 12.496033333333333C12.898733333333332 12.4377 13.456 11.888533333333331 13.520066666666667 11.176033333333333C13.595999999999998 10.331533333333333 13.666666666666666 9.217633333333332 13.666666666666666 7.998666666666666C13.666666666666666 6.779766666666667 13.595999999999998 5.665846666666667 13.520066666666667 4.821366666666666C13.456 4.108866666666666 12.898733333333332 3.55968 12.179733333333333 3.5013666666666663C11.144933333333334 3.417453333333333 9.678999999999998 3.3320333333333334 8 3.3320333333333334zM3.7397666666666667 2.50462C4.794879999999999 2.41906 6.288386666666666 2.3320333333333334 8 2.3320333333333334C9.7118 2.3320333333333334 11.2054 2.4190733333333334 12.260533333333331 2.5046399999999998C13.458733333333331 2.6018133333333333 14.407866666666665 3.5285199999999994 14.516066666666667 4.73182C14.593933333333332 5.597933333333334 14.666666666666666 6.7427 14.666666666666666 7.998666666666666C14.666666666666666 9.2547 14.593933333333332 10.399466666666665 14.516066666666667 11.2656C14.407866666666665 12.468866666666665 13.458733333333331 13.395566666666667 12.260533333333331 13.492766666666665C11.2054 13.578333333333333 9.7118 13.665333333333333 8 13.665333333333333C6.288386666666666 13.665333333333333 4.794879999999999 13.578333333333333 3.7397666666666667 13.492799999999999C2.541373333333333 13.395599999999998 1.5922066666666668 12.468633333333333 1.4840200000000001 11.265266666666665C1.4061199999999998 10.3988 1.3333333333333333 9.253866666666667 1.3333333333333333 7.998666666666666C1.3333333333333333 6.743533333333333 1.4061199999999998 5.598579999999999 1.4840200000000001 4.732153333333333C1.5922066666666668 3.5287466666666667 2.541373333333333 2.601793333333333 3.7397666666666667 2.50462z" fill="currentColor"></path><path d="M10.583333333333332 7.166666666666666L6.583333333333333 7.166666666666666C6.307193333333332 7.166666666666666 6.083333333333333 6.942799999999999 6.083333333333333 6.666666666666666C6.083333333333333 6.390526666666666 6.307193333333332 6.166666666666666 6.583333333333333 6.166666666666666L10.583333333333332 6.166666666666666C10.859466666666666 6.166666666666666 11.083333333333332 6.390526666666666 11.083333333333332 6.666666666666666C11.083333333333332 6.942799999999999 10.859466666666666 7.166666666666666 10.583333333333332 7.166666666666666z" fill="currentColor"></path><path d="M11.583333333333332 9.833333333333332L7.583333333333333 9.833333333333332C7.3072 9.833333333333332 7.083333333333333 9.609466666666666 7.083333333333333 9.333333333333332C7.083333333333333 9.0572 7.3072 8.833333333333332 7.583333333333333 8.833333333333332L11.583333333333332 8.833333333333332C11.859466666666666 8.833333333333332 12.083333333333332 9.0572 12.083333333333332 9.333333333333332C12.083333333333332 9.609466666666666 11.859466666666666 9.833333333333332 11.583333333333332 9.833333333333332z" fill="currentColor"></path><path d="M5.25 6.666666666666666C5.25 6.942799999999999 5.02614 7.166666666666666 4.75 7.166666666666666L4.416666666666666 7.166666666666666C4.140526666666666 7.166666666666666 3.9166666666666665 6.942799999999999 3.9166666666666665 6.666666666666666C3.9166666666666665 6.390526666666666 4.140526666666666 6.166666666666666 4.416666666666666 6.166666666666666L4.75 6.166666666666666C5.02614 6.166666666666666 5.25 6.390526666666666 5.25 6.666666666666666z" fill="currentColor"></path><path d="M6.25 9.333333333333332C6.25 9.609466666666666 6.02614 9.833333333333332 5.75 9.833333333333332L5.416666666666666 9.833333333333332C5.140526666666666 9.833333333333332 4.916666666666666 9.609466666666666 4.916666666666666 9.333333333333332C4.916666666666666 9.0572 5.140526666666666 8.833333333333332 5.416666666666666 8.833333333333332L5.75 8.833333333333332C6.02614 8.833333333333332 6.25 9.0572 6.25 9.333333333333332z" fill="currentColor"></path></svg>
							</i>
                            ${c}
                        </span>
                        <span class="gm-video-duration">${p}</span>
                    </div>
                </div>
                <p class="title">${o}</p>
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
                `},{"data-aid":r,"data-title":o,"data-goto":t});return h["data-video"]=e,h}},tn={$flag:{isInit_reconfigurationTinyAppSettingButton:false,isInit_beautifyTopNavBar_css:false},init(){f.execMenuOnce("bili-head-supplementaryVideoStreamingInformation",()=>{this.addVideoListUPInfo();}),f.execMenu("bili-head-recommend-enable",()=>{en.init();});},addVideoListUPInfo(){u.info("添加视频列表UP主信息"),R(`
		${v.className.head} .video-list .card-box .gm-up-info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: var(--pd-width);
		}
		${v.className.head} .video-list .card-box .gm-up-info .gm-up-name {
			display: flex;
			align-items: center;
			font-size: 3vmin;
			color: #999A9E;
		}
		${v.className.head} .video-list .card-box .gm-up-info .gm-up-name svg {
			margin-right: calc(var(--pd-width) / 2);
			width: 3vmin;
			height: 3vmin;
		}
		${v.className.head} .gm-video-duration{
			margin: 0 auto;
		}
        `),d.waitNode(v.className.head+" .video-list .card-box").then(()=>{let e=new d.LockFunction(()=>{document.querySelectorAll(v.className.head+" .video-list .card-box .v-card").forEach(t=>{let r=_.getVue(t),n=r?.info?.author?.name||r?.info?.owner?.name,i=r?.info?.duration;if(n&&!t.querySelector(".gm-up-info")){let a=document.createElement("div");a.innerHTML=`
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
                                    </div>`,a.className="gm-up-info",t.appendChild(a);}if(i){let a=t.querySelector(".count");if(a&&!a.querySelector(".gm-video-duration")){let o=typeof i=="string"?i:M.parseDuration(i),l=document.createElement("span");l.className="gm-video-duration",l.innerHTML=o,a.appendChild(l);}}});},25);d.mutationObserver(document.body,{config:{subtree:true,childList:true,attributes:true},callback(){e.run();}});});},async reconfigurationTinyAppSettingButton(){u.info("重构tinyApp右上角的设置按钮图标"),this.$flag.isInit_reconfigurationTinyAppSettingButton||(this.$flag.isInit_reconfigurationTinyAppSettingButton=true,R(`

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
			`));let e=await d.waitNode(".nav-bar .icon-config",1e4);if(!e){u.error("未找到设置按钮图标，无法重构");return}e.outerHTML=`
		<div class="gm-face">
			<div class="gm-face-avatar">
				<img src="http://i0.hdslb.com/bfs/face/member/noface.jpg">
			</div>
		</div>
		`;let t=false,r=null,n=document.querySelector(".gm-face"),i=n.querySelector("img");_.waitVuePropToSet("#app",[{check(a){return typeof a?.$store?.state?.common?.userInfo?.isLogin=="boolean"},set(a){let o=a?.$store?.state?.common?.userInfo;if(t=o?.isLogin,t){if(r=o?.mid,r==null){u.warn("当前是脚本设置的isLogin但其实未登录账号"),t=false;return}o?.uname,i.src=o?.face||i.src;}else u.warn("经检测，Bilibili尚未登录账号");}}]),m.on(n,"click",a=>{if(d.preventEvent(a),t)if(r!=null){let o=Ce.getUserSpaceUrl(r);M.goToUrl(o,false);}else w.error("获取用户id失败");else M.goToLogin(window.location.href);});},beautifyTopNavBar(){u.info("美化顶部navbar"),this.$flag.isInit_beautifyTopNavBar_css||(this.$flag.isInit_beautifyTopNavBar_css=true,R(`
			/* 隐藏logo */
			.${v.className.head} .m-navbar .logo,
			/* 隐藏原有的搜索图标 */
			.${v.className.head} .m-navbar .icon-search{
				display: none !important;
			}
			/* 设置右侧的宽度撑开、逆反 */
			.${v.className.head} .m-navbar .right{
				width: 100%;
				display: flex;
				flex-direction: row-reverse;
				justify-content: flex-end;
			}
			/* 头像 */
			.${v.className.head} .m-navbar .gm-face{
				flex: 0 auto;
				margin-top: 1.86667vmin;
			}
			/* 新的输入框 */
			.${v.className.head} .m-navbar .gm-input-area{
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
			.${v.className.head} .m-navbar .gm-input-area .ic_search_tab{
				color: #a0a0a0;
				vertical-align: middle;
				font-size: 4.33333vmin;
			}
			/* 输入框内容 */
			.${v.className.head} .m-navbar .gm-input-area input[type="search"]{
				font-size: 3.46667vmin;
				color: #505050;
				border: none;
				background: transparent;
				width: 61.33333vmin;
				user-select: none !important;!i;!;
				padding-left: 2.122vmin;
				pointer-events: none;
			}
			/* 调整首页顶部搜索框的样式 */
			.${v.className.head} .m-navbar .right .search {
				border: 1px solid #ccc;
				width: 100% !important;
				height: auto !important;
				border-radius: 1rem;
				display: flex;
				align-items: center;
				padding: 2px 6px;
			}
			`)),d.waitNode(".m-head .m-navbar .icon-search",1e4).then(async e=>{if(!e||e.parentElement.querySelector(".gm-input-area"))return;let t=m.createElement("div",{className:"gm-input-area",innerHTML:`
						<i class="iconfont ic_search_tab"></i>
						<input type="search" placeholder="" readonly="" disabled="">
					`}),r=t.querySelector("input");m.on(t,"click",i=>{d.preventEvent(i),M.goToUrl("/search",true);}),m.after(e,t);let n=await nr.getSearchInputPlaceholder();n!=null&&(u.info("热点信息：",n),r.placeholder=n.show_name||n.name);});}},rn={init(){this.removeAds(),f.onceExec("bili-pc-read-mobile-autoExpand",()=>this.autoExpand());},removeAds(){xe.addBlockCSS("body>.h5-download-bar");},autoExpand(){return u.info("自动展开"),[R(`
			${dt.className.read.mobile} .limit{
				overflow: unset !important;
				max-height: unset !important;
			}`),xe.addBlockCSS(dt.className.read.mobile+" .read-more")]}},nn={init(){f.execMenuOnce("bili-space-repairRealJump",()=>{this.repairRealJump();}),f.execMenuOnce("bili-space-coverDynamicStateCardVideo",()=>{this.coverDynamicStateCardVideo();});},repairRealJump(){let e=new d.LockFunction(()=>{le(v.className.space+" .wx-tag.open-app-wrapper").forEach(t=>{let r=_.getVue(t);typeof r?.disabled=="boolean"&&(r.disabled=false);});});d.mutationObserver(document,{config:{subtree:true,childList:true},immediate:true,callback:()=>{e.run();}});},coverDynamicStateCardVideo(){u.info("覆盖动态视频的点击事件"),m.on(document,"click",".card-content .main .wings",e=>{let r=e.target.closest(".card");if(!r){w.error("未找到对应的.card元素");return}let n=_.getVue(r);if(!n){w.error("未找到对应的vue实例");return}let i=n?.shareData?.default?.url;if(!i){w.error("未找到对应的url");return}M.goToUrl(i);},{capture:true});}},an={init(){f.execMenu("bili-noCallApp",()=>{this.noCallApp();}),f.execMenu("bili-setLogin",()=>{this.setLogin();}),f.execMenu("bili-setIsClient",()=>{this.setIsClient();});},noCallApp(){_.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.noCallApp",check(e){return typeof e?.$store?.state?.common?.noCallApp=="boolean"},set(e){u.success("成功设置参数 $store.state.common.noCallApp=true"),e.$store.state.common.noCallApp=true;}}]);},setLogin(){let e=new d.GM_Cookie,t=e.get("DedeUserID");t!=null?u.info("Cookie DedeUserID已存在：",t.value):e.set({name:"DedeUserID",value:"2333"},r=>{r?u.error(r):u.success("Cookie成功设置DedeUserID=>2333");}),_.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.userInfo.isLogin",check(r){return typeof r?.$store?.state?.common?.userInfo?.isLogin=="boolean"},set(r){u.success("成功设置参数 $store.state.common.userInfo.isLogin=true"),r.$store.state.common.userInfo.isLogin=true;}},{msg:"设置参数 $store.state.loginInfo.isLogin",check(r){return typeof r?.$store?.state?.loginInfo?.isLogin=="boolean"},set(r){u.success("成功设置参数 $store.state.loginInfo.isLogin=true"),r.$store.state.loginInfo.isLogin=true;}}]);},setIsClient(){_.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.video.isClient",check(e){return typeof typeof e?.$store?.state?.video?.isClient=="boolean"},set(e){u.success("成功设置参数 $store.state.video.isClient=true"),e.$store.state.video.isClient=true;}},{msg:"设置参数 $store.state.opus.isClient=true",check(e){return typeof e?.$store?.state?.opus?.isClient=="boolean"},set(e){u.success("成功设置参数 $store.state.opus.isClient"),e.$store.state.opus.isClient=true;}},{msg:"设置参数 $store.state.playlist.isClient",check(e){return typeof e?.$store?.state?.playlist?.isClient=="boolean"},set(e){u.success("成功设置参数 $store.state.playlist.isClient=true"),e.$store.state.playlist.isClient=true;}},{msg:"设置参数 $store.state.ver.bili",check(e){return typeof e?.$store?.state?.ver?.bili=="boolean"},set(e){u.success("成功设置参数 $store.state.ver.bili=true"),e.$store.state.ver.bili=true;}},{msg:"设置参数 $store.state.ver.biliVer",check(e){return typeof e?.$store?.state?.ver?.biliVer=="number"},set(e){u.success("成功设置参数 $store.state.ver.biliVer=2333333"),e.$store.state.ver.biliVer=2333333;}}]);},setTinyApp(){_.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.tinyApp",check(e){return typeof e?.$store?.state?.common?.tinyApp=="boolean"},set(e){e.$store.state.common.tinyApp=true,u.success("成功设置参数 $store.state.common.tinyApp=true"),f.onceExec("bili-tinyApp-init-css",()=>{R(`
							.tiny-app .reply-input,.tiny-app .reply-item .info .name .right,.tiny-app .reply-item .info .toolbar,.tiny-app .sub-reply-input {
								display: block;
							}
						`);});}}]);}},Oe={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new pe.Dictionary),this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t);},initComponentsStorageApi(e,t,r){let n;this.hasStorageApi(e)?n=this.getStorageApi(e):n=r,this.setComponentsStorageApiProperty(t,n);},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,H,t);}},re=function(e,t,r,n,i,a="",o,l,s,c){let p={text:e,type:"input",isNumber:!!o,isPassword:!!l,attributes:{},props:{},description:n,afterAddToUListCallBack:s,getValue(){return this.props[H].get(t,r)},callback(h,y,C){if(typeof i=="function"&&i(h,y,C))return;this.props[H].set(t,y);},placeholder:a};return Reflect.set(p.attributes,we,t),Reflect.set(p.attributes,Ae,r),Oe.initComponentsStorageApi("input",p,{get(h,y){return f.getValue(h,y)},set(h,y){f.setValue(h,y);}}),p},x=function(e,t,r,n,i,a,o,l){let s={text:e,type:"switch",description:i,disabled:o,attributes:{},props:{},getValue(){return this.props[H].get(t,r)},callback(c,p){let h=!!p;u.success(`${h?"开启":"关闭"} ${e}`),this.props[H].set(t,h);},afterAddToUListCallBack:a};return Reflect.set(s.attributes,we,t),Reflect.set(s.attributes,Ae,r),Oe.initComponentsStorageApi("switch",s,{get(c,p){return f.getValue(c,p)},set(c,p){f.setValue(c,p);}}),s},We=function(e,t,r,n,i,a="",o,l){let s={text:e,type:"textarea",attributes:{},props:{},description:n,placeholder:a,disabled:o,getValue(){let p=this.props[H].get(t,r);return Array.isArray(p)?p.join(`
`):p},callback(c,p){this.props[H].set(t,p);}};return Reflect.set(s.attributes,we,t),Reflect.set(s.attributes,Ae,r),Oe.initComponentsStorageApi("switch",s,{get(c,p){return f.getValue(c,p)},set(c,p){f.setValue(c,p);}}),s};class on{option;constructor(t){this.option=t;}async showView(){let t=W.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist"></ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:true},btn:d.assign({ok:{callback:async()=>{await a();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
                ${W.config.cssText.panelCSS}
                
                .rule-form-container {
                    
                }
                .rule-form-container li{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 5px 20px;
                    gap: 10px;
                }
				.rule-form-ulist-dynamic{
					--button-margin-top: 0px;
					--button-margin-right: 0px;
					--button-margin-bottom: 0px;
					--button-margin-left: 0px;
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					padding: 5px 0px 5px 20px;
				}
				.rule-form-ulist-dynamic__inner{
					width: 100%;
				}
				.rule-form-ulist-dynamic__inner-container{
					display: flex;
					align-items: center;
				}
				.dynamic-forms{
					width: 100%;
				}
                .pops-panel-item-left-main-text{
                    max-width: 150px;
                }
                .pops-panel-item-right-text{
                    padding-left: 30px;
                }
                .pops-panel-item-right-text,
                .pops-panel-item-right-main-text{
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
				.pops-panel-item-left-desc-text{
					line-height: normal;
					margin-top: 6px;
					font-size: 0.8em;
					color: rgb(108, 108, 108);
				}

                ${this.option?.style??""}
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),r=t.$shadowRoot.querySelector(".rule-form-container");t.$shadowRoot.querySelector("input[type=submit]");let n=t.$shadowRoot.querySelector(".rule-form-ulist"),i=await this.option.getView(await this.option.data());n.appendChild(i);const a=async()=>{(await this.option.onsubmit(r,await this.option.data())).success&&(t.close(),await this.option.dialogCloseCallBack(true));};}}class ln{option;constructor(t){this.option=t;}showView(){let t=W.alert({title:{text:this.option.title,position:"center"},content:{text:`
                <div class="filter-container"></div>
                `},btn:{ok:{text:"关闭",type:"default"}},drag:true,mask:{enable:true},width:window.innerWidth>500?"350px":"80vw",height:window.innerHeight>500?"300px":"70vh",style:`
            .filter-container{
                height: 100%;
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            .filter-container button{
                text-wrap: wrap;
                padding: 8px;
                height: auto;
                text-align: left;
            }
            `}),r=t.$shadowRoot.querySelector(".filter-container"),n=document.createDocumentFragment();this.option.filterOption.forEach(i=>{let a=m.createElement("button",{innerText:i.name},{type:"button"}),o=async()=>{(await this.option.getAllRuleInfo()).forEach(async s=>{await i.filterCallBack(s.data)?m.show(s.$el,false):m.hide(s.$el,false);}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),t.close();};m.on(a,"click",async l=>{d.preventEvent(l),!(typeof i.callback=="function"&&!await i.callback(l,o))&&await o();}),n.appendChild(a);}),r.appendChild(n);}}class un{option;constructor(t){this.option=t;}async showView(t){let r=W.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:true},btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async a=>{this.showEditView(false,await this.option.getAddData(),r.$shadowRoot);}},close:{enable:true,callback(a){r.close();}},cancel:{enable:this.option?.bottomControls?.filter?.enable||false,type:"default",text:"过滤",callback:(a,o)=>{typeof this.option?.bottomControls?.filter?.callback=="function"&&this.option.bottomControls.filter.callback();let l=()=>Array.from(r.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),s=o.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");m.text(s).includes("取消")?(l().forEach(c=>{m.show(c,false);}),m.text(s,"过滤")):new ln({title:this.option.bottomControls?.filter?.title??"过滤规则",filterOption:this.option.bottomControls?.filter?.option||[],execFilterCallBack(){m.text(s,"取消过滤");},getAllRuleInfo:()=>l().map(p=>({data:this.parseRuleItemElement(p).data,$el:p}))}).showView();}},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:a=>{let o=W.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async l=>{if(u.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){w.error("清理失败");return}else w.success("清理成功");await this.updateDeleteAllBtnText(r.$shadowRoot),this.clearContent(r.$shadowRoot),o.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
            ${W.config.cssText.panelCSS}
            
            .rule-item{
                display: flex;
                align-items: center;
                line-height: normal;
                font-size: 16px;
                padding: 4px 8px;
                gap: 8px;
            }
            .rule-name{
                flex: 1;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .rule-controls{
                display: flex;
                align-items: center;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                gap: 8px;
                padding: 0px;
            }
            .rule-controls-enable{
                
            }
            .rule-controls-edit{
                
            }
            .rule-controls-delete{
                
            }
            .rule-controls-edit,
            .rule-controls-delete{
                width: 16px;
                height: 16px;
                cursor: pointer;
            }
            `}),n=await this.option.data(),i=false;for(let a=0;a<n.length;a++){let o=n[a],l=await this.appendRuleItemElement(r.$shadowRoot,o);(typeof t=="function"?t(o):true)||(i=true,l.forEach(c=>{m.hide(c,false);}));}if(i){let a=r.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");m.text(a,"取消过滤");}}showEditView(t,r,n,i,a,o){let l=async c=>{if(c){if(typeof o=="function"){let p=await this.option.getData(r);o(p);}}else if(t||await this.option.deleteData(r),typeof a=="function"){let p=await this.option.getData(r);a(p);}};new on({title:t?"编辑":"添加",data:()=>r,dialogCloseCallBack:l,getView:async c=>await this.option.itemControls.edit.getView(c,t),btn:{ok:{enable:true,text:t?"修改":"添加"},cancel:{callback:async(c,p)=>{c.close(),await l(false);}},close:{callback:async(c,p)=>{c.close(),await l(false);}}},onsubmit:async(c,p)=>{let h=await this.option.itemControls.edit.onsubmit(c,t,p);return h.success?t?(w.success("修改成功"),n&&await this.updateRuleItemElement(h.data,i,n)):n&&await this.appendRuleItemElement(n,h.data):t&&u.error("修改失败"),h},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(t){let r=t.querySelector(".rule-view-container"),n=t.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:r,$deleteBtn:n}}parseRuleItemElement(t){let r=t.querySelector(".rule-controls-enable"),n=r.querySelector(".pops-panel-switch"),i=r.querySelector(".pops-panel-switch__input"),a=r.querySelector(".pops-panel-switch__core"),o=t.querySelector(".rule-controls-edit"),l=t.querySelector(".rule-controls-delete");return {$enable:r,$enableSwitch:n,$enableSwitchInput:i,$enableSwitchCore:a,$edit:o,$delete:l,data:Reflect.get(t,"data-rule")}}async createRuleItemElement(t,r){let n=await this.option.getDataItemName(t),i=m.createElement("div",{className:"rule-item",innerHTML:`
			<div class="rule-name">${n}</div>
			<div class="rule-controls">
				<div class="rule-controls-enable">
					<div class="pops-panel-switch">
						<input class="pops-panel-switch__input" type="checkbox">
						<span class="pops-panel-switch__core">
							<div class="pops-panel-switch__action">
							</div>
						</span>
					</div>
				</div>
				<div class="rule-controls-edit">
					${W.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${W.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(i,"data-rule",t);let a="pops-panel-switch-is-checked";const{$enable:o,$enableSwitch:l,$enableSwitchCore:s,$enableSwitchInput:c,$delete:p,$edit:h}=this.parseRuleItemElement(i);return this.option.itemControls.enable.enable?(m.on(s,"click",async y=>{let C=false;l.classList.contains(a)?(l.classList.remove(a),C=false):(l.classList.add(a),C=true),c.checked=C,await this.option.itemControls.enable.callback(t,C);}),await this.option.itemControls.enable.getEnable(t)&&l.classList.add(a)):o.remove(),this.option.itemControls.edit.enable?m.on(h,"click",y=>{d.preventEvent(y),this.showEditView(true,t,r,i,C=>{t=null,t=C;});}):h.remove(),this.option.itemControls.delete.enable?m.on(p,"click",y=>{d.preventEvent(y);let C=W.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async $=>{u.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(t)?(w.success("成功删除该数据"),i.remove(),await this.updateDeleteAllBtnText(r),C.close()):w.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):p.remove(),i}async appendRuleItemElement(t,r){let{$container:n}=this.parseViewElement(t),i=[],a=Array.isArray(r)?r:[r];for(let o=0;o<a.length;o++){let l=a[o],s=await this.createRuleItemElement(l,t);n.appendChild(s),i.push(s);}return await this.updateDeleteAllBtnText(t),i}async updateRuleContaienrElement(t){this.clearContent(t);const{$container:r}=this.parseViewElement(t);let n=await this.option.data();await this.appendRuleItemElement(t,n),await this.updateDeleteAllBtnText(t);}async updateRuleItemElement(t,r,n){let i=await this.createRuleItemElement(t,n);r.after(i),r.remove();}clearContent(t){const{$container:r}=this.parseViewElement(t);m.html(r,"");}setDeleteBtnText(t,r,n=false){const{$deleteBtn:i}=this.parseViewElement(t);n?m.html(i,r):m.text(i,r);}async updateDeleteAllBtnText(t){let r=await this.option.data();this.setDeleteBtnText(t,`清空所有(${r.length})`);}}const ye={$data:{whiteList:[],ruleData:[]},$key:{STORAGE_KEY:"bili-componentDetection-rule"},init(){this.$data.whiteList=[],this.$data.ruleData=[],this.getData().forEach(t=>{t.enable&&this.$data.ruleData.push(t);});},showView(){let e=W.config.PanelHandlerComponents();function t(n,i){return {get(a,o){return n[a]??o},set(a,o){n[a]=o;}}}new un({title:"成分检测",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:n=>n.name,updateData:n=>this.updateData(n),deleteData:n=>this.deleteData(n),getData:n=>this.getData().find(o=>o.uuid===n.uuid)??n,itemControls:{enable:{enable:true,getEnable(n){return n.enable},callback:(n,i)=>{n.enable=i,this.updateData(n);}},edit:{enable:true,getView:(n,i)=>{let a=document.createDocumentFragment(),o=this.getTemplateData();i||(n=o);let l=x("启用","enable",o.enable);Reflect.set(l.props,H,t(n));let s=e.createSectionContainerItem_switch(l),c=re("规则名称","name","",o.name,void 0,"必填");Reflect.set(c.props,H,t(n));let p=e.createSectionContainerItem_input(c),h=x("是否显示标签名称","isShowDisplayName",o.data.isShowDisplayName);Reflect.set(h.props,H,t(n.data));let y=e.createSectionContainerItem_switch(h),C=re("标签名称","displayName",o.data.displayName,"例如：原神");Reflect.set(C.props,H,t(n.data));let $=e.createSectionContainerItem_input(C),L=x("是否显示标签图标","isShowDisplayIcon",o.data.isShowDisplayIcon);Reflect.set(L.props,H,t(n.data));let I=e.createSectionContainerItem_switch(L),k=re("标签图标","displayIcon",o.data.displayIcon,"Url或base64");Reflect.set(k.props,H,t(n.data));let S=e.createSectionContainerItem_input(k),D=We("关键词","keywords","","用于匹配标题、简介、转发内容的关键词",void 0,"多个关键词换行");Reflect.set(D.props,H,{get(ne,O){let P=n.data[ne]??O;return typeof P=="string"?P.split(`
`):P},set(ne,O){typeof O=="string"&&(O=O.split(`
`)),n.data[ne]=O;}});let N=e.createSectionContainerItem_textarea(D),X=We("关注的用户","followings","","用户id",void 0,"多个用户id换行");Reflect.set(X.props,H,{get(ne,O){let P=n.data[ne]??O;return typeof P=="string"?P.split(`
`).map(b=>Number(b)).filter(b=>!isNaN(b)):P},set(ne,O){typeof O=="string"&&(O=O.split(`
`).map(P=>Number(P)).filter(P=>!isNaN(P))),n.data[ne]=O;}});let J=e.createSectionContainerItem_textarea(X),ee=We("黑名单","blacklist","","",void 0,"多个用户id换行");Reflect.set(ee.props,H,{get(ne,O){let P=n.data[ne]??O;return typeof P=="string"?P.split(`
`).map(b=>Number(b)).filter(b=>!isNaN(b)):P},set(ne,O){typeof O=="string"&&(O=O.split(`
`).map(P=>Number(P)).filter(P=>!isNaN(P))),n.data[ne]=O;}});let oe=e.createSectionContainerItem_textarea(ee);return a.append(s,p,y,$,I,S,N,J,oe),a},onsubmit:(n,i,a)=>{let o=n.querySelectorAll(".rule-form-ulist > li"),l=this.getTemplateData();i&&(l.uuid=a.uuid);try{return o.forEach(s=>{let c=Reflect.get(s,"__formConfig__"),p=Reflect.get(c,"attributes"),h=Reflect.get(s,H),y=Reflect.get(p,we),C=Reflect.get(p,Ae),$=h.get(y,C);Reflect.has(l,y)?Reflect.set(l,y,$):Reflect.has(l.data,y)?Reflect.set(l.data,y,$):u.error(`${y}不在数据中`);}),l.name.trim()===""?(w.error("规则名称不能为空"),{success:!1,data:l}):i?{success:this.updateData(l),data:l}:{success:this.addData(l),data:l}}catch(s){return u.error(s),{success:false,data:l}}finally{this.init();}},style:`
                    .pops-panel-textarea textarea{
                        height: 150px;
                    }
					.pops-panel-item-left-desc-text{
						line-height: normal;
						margin-top: 6px;
						font-size: 0.8em;
						color: rgb(108, 108, 108);
						max-width: 100px;
					}
                    `},delete:{enable:true,deleteCallBack:n=>this.deleteData(n)}}}).showView();},getTemplateData(){return {uuid:d.generateUUID(),enable:true,name:"",data:{isShowDisplayIcon:true,displayIcon:"",isShowDisplayName:true,displayName:"",keywords:[],blacklist:[],followings:[]}}},getData(){return Ne(this.$key.STORAGE_KEY,[])},setData(e){Ve(this.$key.STORAGE_KEY,e);},addData(e){let t=this.getData();return t.findIndex(n=>n.uuid==e.uuid)===-1?(t.push(e),Ve(this.$key.STORAGE_KEY,t),true):false},updateData(e){let t=this.getData(),r=t.findIndex(i=>i.uuid==e.uuid),n=false;return r!==-1&&(n=true,t[r]=e),this.setData(t),n},deleteData(e){let t=this.getData(),r=t.findIndex(i=>i.uuid==e.uuid),n=false;return r!==-1&&(n=true,t.splice(r,1)),this.setData(t),n},clearData(){Ft(this.$key.STORAGE_KEY);},exportRule(e="rule.json"){let t=this.getData(),r=new Blob([JSON.stringify(t,null,4)]),n=window.URL.createObjectURL(r),i=document.createElement("a");i.href=n,i.download=e,i.click(),setTimeout(()=>{window.URL.revokeObjectURL(n);},1500);},importRule(){let e=W.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
                    <div class="import-mode" data-mode="local">本地导入</div>
                    <div class="import-mode" data-mode="network">网络导入</div>
                `,html:true},width:De.info.width,height:De.info.height,style:`
                .import-mode{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),t=e.$shadowRoot.querySelector(".import-mode[data-mode='local']"),r=e.$shadowRoot.querySelector(".import-mode[data-mode='network']");m.on(t,"click",n=>{d.preventEvent(n),e.close();let i=m.createElement("input",{type:"file",accept:".json"});m.on(i,["propertychange","input"],a=>{if(!i.files?.length)return;let o=i.files[0],l=new FileReader;l.onload=()=>{let s=d.toJSON(l.result);if(!Array.isArray(s)){u.error("不是正确的规则文件",s),w.error("不是正确的规则文件");return}this.setData(s),w.success(`成功导入 ${s.length}条规则`);},l.readAsText(o,"UTF-8");}),i.click();}),m.on(r,"click",n=>{d.preventEvent(n),e.close(),W.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"url",focus:true},btn:{ok:{callback:async(i,a)=>{let o=i.text;if(d.isNull(o)){w.error("请填入完整的url");return}let l=await q.get(o);if(!l.status)return;let s=d.toJSON(l.data.responseText);if(!Array.isArray(s)){u.error("不是正确的规则文件",l,s),w.error("不是正确的规则文件");return}this.setData(s),i.close(),w.success(`成功导入 ${s.length}条规则`);}}},width:De.info.width,height:"auto"});});}},sn={$data:{searchIcon:`
            <svg viewBox="0 0 24 24" fill="none">
                <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        `},init(){ye.init(),R(`
            .composition-checkable,
			.composition-checked{
                display: inline-flex;
                vertical-align: middle;
            }
			/* 查询按钮 */
			.composition-checkable .composition-badge-control {
				display: inline-flex;
				justify-content: center;
				align-items: center;
				width: fit-content;
				background: #574AB830;
				border-radius: 8px;
				margin: 0 6px 0 6px;
				font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif;
			}

			.composition-checkable .composition-name-control {
				color: #7367F0;
				padding: 2px 8px;
                font-size: 0.8rem;
                display: flex;
                align-items: center;
                height: 20px;
                line-height: normal;
			}
            
			.composition-checkable .composition-name-control svg {
				vertical-align: middle;
                width: 1em;
                height: 1em;
			}
			/* ↑查询按钮 */

			/* 标签按钮 */
			.composition-checked .composition-badge {
				display: inline-flex;
 				justify-content: center;
 				align-items: center;
				width: fit-content;
 				background: #574AB825;
 				border-radius: 10px;
 				margin: 0 6px 0 6px;
 				font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif;
				font-weight: normal;
				cursor: pointer;
			}

			.composition-checked .composition-name {
				color: #574AB8;
				padding: 2px 8px;
                font-size: 0.8rem;
			}

			.composition-checked .composition-icon {
				color: #574AB8 !important;
				background: transparent !important;
				border-radius: 50% !important;
				width: 1.44rem !important;
				height: 1.44rem !important;
				border: 2px solid #574AB880 !important;
				margin: -6px;
				display: flex !important;
				justify-content: center !important;
				align-items: center !important;
				font-size: 1rem !important;
			}
			.composition-checked .composition-badge > *:first-child{
				margin-left: 6px;
			}
			.composition-checked .composition-badge > *:last-child{
				margin-right: 6px;
			}
			.composition-checked .composition-badge .composition-icon,
			.composition-checked .composition-badge .composition-name{
				margin: 0;
			}
        `),m.ready(()=>{let e=new d.LockFunction(async()=>{le(".reply-item:not([data-is-inject-search-label])").forEach(t=>{t.setAttribute("data-is-inject-search-label","");let r=t.querySelector(".info .floor-time")||t.querySelector(".content-warp .user-info"),{$container:n,$compositionNameControl:i}=this.createSearchButton(()=>{let a=t.querySelector(".user-name[data-user-id]");if(!a)throw new TypeError("获取用户名元素失败");let o=a.getAttribute("data-user-id");if(o==null)throw new TypeError("获取mid失败");return o});m.after(r,n);}),[...Array.from(le(".reply-item .member-link[data-url]:not([data-is-inject-search-label])")),...Array.from(le(".reply-item .jump-link.user[data-user-id]:not([data-is-inject-search-label])")),...Array.from(le(".reply-item .sub-user-name[data-user-id]:not([data-is-inject-search-label])"))].forEach(t=>{t.setAttribute("data-is-inject-search-label","");let{$container:r,$compositionNameControl:n}=this.createSearchButton(()=>{let a=t.getAttribute("href").match(/space.bilibili.com\/([\d]+)/i)?.[1];if(a==null)throw new TypeError("获取mid失败");return a});m.after(t,r);}),le(".m-space-info .base:not([data-is-inject-search-label])").forEach(t=>{t.setAttribute("data-is-inject-search-label","");let r=t.closest(".m-space-info"),{$container:n}=this.createSearchButton(()=>{let i=_.getVue(r);if(!i)throw new TypeError("获取vue属性失败");let a=i.info.mid;if(a==null)throw new TypeError("获取mid失败");return a});m.after(t,n);});});d.mutationObserver(document,{config:{subtree:true,childList:true},immediate:true,callback:()=>{e.run();}});});},async queryUserInfo(e){let t=1,r=[];for(;;){u.info(`正在获取用户的关注：${e} ==> 第${t}页`);let l=await Ye.following(e,t);if(!l){u.error("获取关注列表失败");break}if(typeof l=="string"){u.error("获取关注列表失败，原因："+l);break}if(!l.list.length||(r=r.concat(l.list),l.list.length===l.total&&t===1))break;t++,d.sleep(250);}let n="",i=1,a=[];for(;;){u.info(`正在获取用户的空间动态：${e} ==> 偏移：${n}`);let l=await Ye.space(e,n);if(!l){u.error("获取用户空间动态数据失败");break}if(typeof l=="string"){u.error("获取用户空间动态数据失败，原因："+l);break}if(n===l.offset&&n!=""||(n=l.offset,a=a.concat(l.items),!l.has_more))break;if(i++,i>5){u.info("最多请求5页空间动态的数据");break}d.sleep(250);}let o={following:[],space:[]};return r.forEach(l=>{o.following.push({name:l.uname,mid:l.mid,sign:l.sign});}),a.forEach(l=>{if(l.orig==null){let s={title:l.modules.module_dynamic.major?.archive?.title,desc:l.modules.module_dynamic.major?.archive?.desc||l.modules.module_dynamic.desc?.text,pub_ts:l.modules.module_author.pub_ts*1e3,id_str:l.id_str};o.space.push({contentInfo:s});}else {let s={title:null,desc:l.modules.module_dynamic.desc?.text,pub_ts:l.modules.module_author.pub_ts*1e3,id_str:l.id_str},c={mid:l.orig.modules.module_author.mid,name:l.orig.modules.module_author.name,title:l.orig.modules.module_dynamic?.major?.archive?.title||null,desc:l.orig.modules.module_dynamic.desc?.text??l.orig.modules.module_dynamic?.major?.archive?.desc,pub_ts:l.orig.modules.module_author.pub_ts*1e3,id_str:l.orig.id_str};typeof c.desc=="string"&&Array.isArray(l.orig.modules.module_dynamic?.desc?.rich_text_nodes)&&l.orig.modules.module_dynamic.desc.rich_text_nodes.forEach(p=>{p.type==="RICH_TEXT_NODE_TYPE_AT"&&(c.desc=c.desc?.replace(p.text,""));}),o.space.push({contentInfo:s,forwardInfo:c});}}),o},createSearchButton(e){let t=m.createElement("div",{className:"composition-checkable",innerHTML:`
                <div class="composition-badge-control">
                    <span class="composition-name-control">
                        ${this.$data.searchIcon}
                    </span>
                </div>
            `}),r=t.querySelector(".composition-name-control");return m.on(t,"click",async n=>{if(d.preventEvent(n),t.hasAttribute("data-is-searching")){u.error("正在搜索中，请稍后再试");return}t.setAttribute("data-is-searching",""),m.html(r,"...");try{if(ye.$data.ruleData.length===0){w.warning("未配置规则，请在设置中进行添加"),m.html(r,this.$data.searchIcon);return}let i=e();this.clearLabel(t);let a=await this.queryUserInfo(i);this.handleShowLabel(i,a,t),m.html(r,this.$data.searchIcon);}catch(i){u.error(i),w.error(i.message,{timeout:3500}),m.html(r,"重试");}finally{t.removeAttribute("data-is-searching");}}),{$container:t,$compositionNameControl:r}},createLabel(e){let t=m.createElement("div",{className:"composition-checked",innerHTML:`
				<div class="composition-badge">
				</div>
			`}),r=t.querySelector(".composition-badge");if(e.rule.data.isShowDisplayName){let n=m.createElement("span",{className:"composition-name",innerHTML:e.rule.data.displayName});m.append(r,n);}if(e.rule.data.isShowDisplayIcon){let n=null;e.rule.data.displayIcon.startsWith("http")?n=m.createElement("img",{className:"composition-icon",src:e.rule.data.displayIcon},{referrer:"no-referrer",referrerPolicy:"no-referrer"}):n=m.createElement("span",{className:"composition-icon",innerHTML:e.rule.data.displayIcon}),m.append(r,n);}return m.on(r,"click",n=>{d.preventEvent(n),W.alert({title:{text:"识别信息",html:false,position:"center"},content:{text:`
						${e.matchedInfoList.map(i=>{let a=m.createElement("div",{className:"reason-container",innerHTML:`
										<div class="reason-text"><span>原因：</span>${i.reason}</div>
										<div class="reason-text"><span>匹配：</span>${typeof i.reasonLink=="string"?`
											<a href="${i.reasonLink}" target="_blank">${i.reasonText}</a>
										`:i.reasonText}</div>
									`});if(typeof i.reasonTime=="number"){let o=m.createElement("div",{className:"reason-text",innerHTML:`
										<span>时间：</span>${d.formatTime(i.reasonTime)}
										`});m.append(a,o);}return a.outerHTML}).join(`
`)}
					`,html:true},btn:{ok:{enable:false}},mask:{enable:true,clickEvent:{toClose:true}},width:De.setting.width,height:De.setting.height,style:`
					.reason-container{
						color: #7367F0;
						margin: 10px 10px;
					}
				`});}),t},clearLabel(e){for(;;){let t=m.prev(e);if(!t)break;if(t?.classList?.contains("composition-checked"))t.remove();else break}},handleShowLabel(e,t,r){if(ye.$data.ruleData.length===0){w.warning("未配置规则，请在设置中进行添加");return}if(e=e.toString(),ye.$data.whiteList.includes(e))return;let n=[],i=(a,o)=>{let l=n.find(s=>s.rule===a);l?l.matchedInfoList.push(o):n.push({rule:a,matchedInfoList:[o]});};ye.$data.ruleData.forEach(a=>{if(Array.isArray(a.data.blacklist)&&a.data.blacklist.find(o=>o.toString()===e)){i(a,{reason:"黑名单用户",reasonText:e,reasonLink:Ce.getUserSpaceUrl(e),reasonTime:null});return}if(Array.isArray(a.data.followings)){let o="关注列表",l="";a.data.followings.some(c=>{let p=t.following.some(h=>h.mid.toString()===c.toString());return p&&(l=c.toString()),p})&&i(a,{reason:o,reasonText:l,reasonLink:Ce.getUserSpaceUrl(l),reasonTime:null});}Array.isArray(a.data.keywords)&&a.data.keywords.forEach(o=>{for(let l=0;l<t.space.length;l++){const s=t.space[l];let c="",p=o,h=`/opus/${s.contentInfo.id_str}`,y=s.contentInfo.pub_ts;s.forwardInfo==null?typeof s.contentInfo.desc=="string"&&s.contentInfo.desc.match(o)?c="投稿视频简介":typeof s.contentInfo.title=="string"&&s.contentInfo.title.match(o)&&(c="投稿视频标题"):typeof s.contentInfo.desc=="string"&&s.contentInfo.desc.match(o)?c="空间动态转发":typeof s.forwardInfo?.title=="string"&&s.forwardInfo.title.match(o)?c="空间动态视频标题":typeof s.forwardInfo?.desc=="string"&&s.forwardInfo.desc.match(o)&&(c="空间动态视频简介"),c!==""&&i(a,{reason:c,reasonText:p,reasonLink:h,reasonTime:y});}});}),d.sortListByProperty(n,a=>a.matchedInfoList.length,true),n.forEach(a=>{let o=this.createLabel(a);m.before(r,o);});}},cn={$flag:{isWatchVideoChange:false},$data:{art:null},init(){},updateArtPlayerVideoInfo(e,t){const r=this;_.waitVuePropToSet(v.className.playlist+" .playlist-player",{msg:"等待覆盖playlist播放器",check(n){return typeof n?.aid=="number"&&typeof n?.cid=="number"&&typeof n?.bvid=="string"},async set(n){Q(".playlist-player .player-container")?.remove();let i=Q(v.className.playlist+" .playlist-player"),a=Q(v.className.playlist),o=_.getVue(a),{aid:l,cid:s,bvid:c}=n,{title:p,cover:h}=o.video;u.info(`视频播放信息 => aid：${l} bvid：${c} cid：${s}`),e==null&&(e={aid:l,bvid:c,cid:s,pic:h,title:p});const y=await tr(e);if(y==null)return;let C=Q("#artplayer");if(!C){const $=m.createElement("div",{className:"artplayer-container",innerHTML:`
								<div id="artplayer"></div>
							`});C=$.querySelector("#artplayer"),m.append(i,$);}if(y.container=C,r.$data.art==null){let $=await Be.init(y);if($)r.$data.art=$;else return;r.$data.art.volume=1,r.$data.art.once("ready",()=>{f.execMenu("bili-video-playerAutoPlayVideoFullScreen",async()=>{u.info("自动进入全屏"),r.$data.art.fullscreen=true,r.$data.art.once("fullscreenError",()=>{u.warn("未成功进入全屏，需要用户交互操作，使用网页全屏代替"),r.$data.art.fullscreenWeb=true;});});}),r.$data.art.on("video:ended",()=>{u.info("视频播放结束，自动下一集");let L=Q(v.className.playlist+" .control-panel");if(!L){u.error("未找到播放列表，无法自动播放下一集");return}if(_.getVue(L)==null){u.error("未找到播放列表的Vue实例，无法自动播放下一集");return}let{playMode:k,mediaList:S,videoIndex:D}=n.$store.state.playlist;if(D>=S.length-1)u.info("播放列表已播放完毕");else {let N=Q(`.video-card[index="${D}"]`),X=_.getVue(N),J=X.p;if(J>=X.video.page){let ee=Q(`.video-card[index="${D+1}"]`);_.getVue(ee).changeVideo(),u.info(`当前播放列表共：${S.length-1}个，即将播放下一个视频，第${D+2}个`);}else J++,X.changeVideo(J),u.info(`当前播放列表共：${S.length-1}个，即将播放第${D+2}-${J}`);}});}else await Be.update(r.$data.art,y);}}),_.waitVuePropToSet(v.className.playlist+" .playlist-player",{msg:"等待监听playlist播放列表改变",check(n){return typeof n.$watch=="function"},set(n){r.$flag.isWatchVideoChange||(r.$flag.isWatchVideoChange=true,n.$watch("cid",(i,a)=>{u.info("切换播放视频"),r.updateArtPlayerVideoInfo();}));}});}},pn={init(){this.coverVideoPlayer();},coverVideoPlayer(){document.querySelector("#artplayer")?u.warn("已存在播放器，更新播放信息"):R(`
			#app .playlist .playlist-player .player-container{
				display: none !important;
			}
			
			${ot}
			
			${Vt}
			
			`),cn.updateArtPlayerVideoInfo();}},ar={init(){Mt.init(),an.init(),f.execMenuOnce("bili-allowCopy",()=>R(`
				.v-drawer{
					-webkit-user-select: unset !important;
					-moz-user-select: unset !important;
					user-select: unset !important;
				}
			`)),f.onceExec("listenRouterChange",()=>{this.listenRouterChange();}),f.execMenuOnce("bili-hookSetTimeout_autoOpenApp",()=>{u.info("hook  window.setTimeout autoOpenApp"),Te.setTimeout("autoOpenApp"),Te.setTimeout("bilibili://"),Te.setTimeout("void 0 !== y && document[y]");}),f.execMenuOnce("bili-overrideLaunchAppBtn_Vue_openApp",()=>{u.info("覆盖元素.launch-app-btn上的openApp"),Te.overRideLaunchAppBtn_Vue_openApp();}),f.execMenuOnce("bili-cover-bili-open-app-open",()=>{u.info("覆盖元素bili-open-app上的opener.open"),Te.overRideBiliOpenApp();}),f.execMenuOnce("bili-cover-wx-tag-handleClick",()=>{u.info("覆盖元素.wx-tag的handleClick函数"),Te.overRideWxTaghandleClick();}),f.execMenuOnce("bili-head-beautify",()=>(u.info("添加美化CSS"),R(ur))),f.execMenuOnce("bili-componentDetection",()=>{sn.init();}),j.isVideo()?(u.info("Router: 视频稿件"),Tr.init()):j.isOpus()?(u.info("Router: 专栏稿件"),Qr.init()):sr.isReadMobile()?(u.info("PC-Router: 专栏稿件"),rn.init()):j.isDynamic()?(u.info("Router: 动态"),Wr.init()):j.isBangumi()?(u.info("Router: 番剧"),Or.init()):j.isSearch()?(u.info("Router: 搜索"),Ur.init()):j.isLive()?(u.info("Router: 直播"),Gr.init()):j.isTopicDetail()?u.info("Router: 话题"):j.isHead()?(u.info("Router: 首页之类的"),tn.init()):j.isSpace()?(u.info("Router: 个人空间"),nn.init()):j.isPlayList()?(u.info("Router: 播放列表"),pn.init()):u.error("该Router暂未适配，可能是首页之类："+window.location.href),m.ready(()=>{});},listenRouterChange(){_.waitVuePropToSet("#app",{msg:"监听路由变化",check:e=>typeof e?.$router?.afterEach=="function",set:e=>{u.success("成功设置监听路由变化"),e.$router.beforeHooks.splice(0,0,(t,r,n)=>{if(u.info("路由变化 => 更新前",{to:t,from:r}),t.hash==="#/seeCommentReply"||r.hash==="#/seeCommentReply"){u.info("该路由变化判定为#/seeCommentReply"),n();return}if(f.getValue("bili-repairVueRouter404")&&t.name==="space"){u.info("修复空间跳转404"),window.location.href=t.fullPath;return}if(t.fullPath.startsWith("/video")){if(r.fullPath.startsWith("/video")&&f.getValue("bili-video-forceThisPageToRefreshAndRedirect")){u.info("强制本页刷新"),window.location.href=t.fullPath;return}else if(j.isHead()&&f.getValue("bili-head-openVideoInNewTab")){u.info("当前是首页，新标签页打开"),window.open(t.fullPath,"_blank");return}}else if(t.fullPath.startsWith("/bangumi")){if(r.fullPath.startsWith("/bangumi")){u.info("番剧 => 番剧"),window.location.href=t.fullPath;return}else if(j.isHead()&&f.getValue("bili-head-openVideoInNewTab")){u.info("首页 => 番剧"),window.open(t.fullPath,"_blank");return}}n();}),e.$router.afterHooks.splice(0,0,(t,r)=>{if(u.info("路由变化 => 更新后",{to:t,from:r}),t.hash==="#/seeCommentReply"||r.hash==="#/seeCommentReply"){u.info("该路由变化判定为#/seeCommentReply，不重载");return}f.execMenu("bili-listenRouterChange",()=>{ar.init();});});}});}},_e=function(e,t,r,n,i,a,o){let l=[];typeof n=="function"?l=n():l=n;let s={text:e,type:"select",description:a,attributes:{},props:{},getValue(){return this.props[H].get(t,r)},callback(c,p,h){let y=p;if(u.info(`选择：${h}`),typeof i=="function"&&i(c,y,h))return;this.props[H].set(t,y);},data:l};return Reflect.set(s.attributes,we,t),Reflect.set(s.attributes,Ae,r),Oe.initComponentsStorageApi("select",s,{get(c,p){return f.getValue(c,p)},set(c,p){f.setValue(c,p);}}),s},et=function(e,t,r,n,i,a,o,l,s,c){let p={text:e,type:"button",attributes:{},props:{},description:t,buttonIcon:n,buttonIsRightIcon:i,buttonIconIsLoading:a,buttonType:o,buttonText:r,callback(h){typeof l=="function"&&l(h);},afterAddToUListCallBack:s};return Reflect.set(p.attributes,St,()=>{p.disable=false;}),p},dn={id:"panel-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[x("监听路由-重载所有功能","bili-listenRouterChange",true,void 0,"用于处理页面跳转(本页)时功能不生效问题"),x("修复VueRouter跳转404问题","bili-repairVueRouter404",true,void 0,"例如：点击UP主正确进入空间"),x("新标签页打开","bili-go-to-url-blank",false,void 0,"通过开启【覆盖点击事件】相关的设置，通过新标签页打开链接"),x("允许复制","bili-allowCopy",true,void 0,"一般用于处理楼层的回复弹窗内无法选中复制问题")]}]},{text:"变量设置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[x("noCallApp","bili-noCallApp",true,void 0,"$store.state.common.noCallApp=true"),x("isLogin","bili-setLogin",true,void 0,["$store.state.common.userInfo.isLogin=true","$store.state.loginInfo.isLogin=true"].join("<br>")),x("isClient","bili-setIsClient",true,void 0,["$store.state.video.isClient=true","$store.state.opus.isClient=true","$store.state.playlist.isClient=true","$store.state.ver.bili=true","$store.state.ver.biliVer=2333"].join("<br>"))]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[x("覆盖.launch-app-btn openApp","bili-overrideLaunchAppBtn_Vue_openApp",true,void 0,"覆盖.launch-app-btn元素上的openApp函数，可阻止点击唤醒/下载App"),x("覆盖bili-open-app opener.open","bili-cover-bili-open-app-open",true,void 0,"覆盖bili-open-app/m-open-app元素上的opener.open函数，可阻止点击唤醒/下载App，如果存在有效链接，会自动跳转"),x("覆盖.wx-tag的handleClick","bili-cover-wx-tag-handleClick",true,void 0,"覆盖.wx-tag元素上的点击事件，让它直接打开视频"),x("劫持setTimeout-autoOpenApp","bili-hookSetTimeout_autoOpenApp",true,void 0,"阻止自动调用App")]}]},{type:"deepMenu",text:"成分检测",forms:[{type:"forms",text:"",forms:[x("启用","bili-componentDetection",true,void 0,"启用后可检测用户的成分信息"),et("自定义规则","检测用户成分的规则","管理",void 0,false,false,"primary",()=>{ye.showView();})]},{type:"forms",text:"",forms:[et("数据导入","导入自定义规则数据","导入",void 0,false,false,"primary",()=>{ye.importRule();}),et("数据导出","导出自定义规则数据","导出",void 0,false,false,"primary",()=>{ye.exportRule("成分检测.json");})]}]}]},{text:"",type:"forms",forms:[{text:"数据配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[re("access_token","bili-head-recommend-access_token",ke.getAccessToken(),"填入access_token，可用于获取推荐视频数据、番剧搜索、番剧播放等",(e,t,r)=>{ke.setAccessTokenInfo({access_token:t,expireAt:ke.generateExpireAt()});},void 0,false,true)]}]},{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[_e("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,r)=>{u.info("设置当前Qmsg弹出位置"+r);},"Toast显示在页面九宫格的位置"),_e("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),x("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},{text:"Cookie配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[x("启用","httpx-use-cookie-enable",false,void 0,"启用后，将根据下面的配置进行添加cookie"),x("使用document.cookie","httpx-use-document-cookie",false,void 0,"自动根据请求的域名来获取对应的cookie"),We("bilibili.com","httpx-cookie-bilibili.com","",void 0,void 0,"Cookie格式：xxx=xxxx;xxx=xxxx")]}]}]}]},mn={id:"panel-head",title:"首页",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[x("美化显示","bili-head-beautify",true,void 0,"调整瀑布流视频卡片样式类似哔哩哔哩App"),x("美化顶部NavBar","bili-beautifyTopNavBar",true,void 0,"类似哔哩哔哩App的样式"),x("补充推荐视频信息","bili-head-supplementaryVideoStreamingInformation",true,void 0,"给视频添加UP主名，当前视频总时长信息"),x("新标签页打开","bili-head-openVideoInNewTab",false,void 0,"包括视频、番剧")]}]},{text:"推荐视频",type:"deepMenu",forms:[{text:"",type:"forms",forms:[x("启用","bili-head-recommend-enable",true,void 0,"添加【推荐】标签，数据来源为App端(如果填入了access_token的话)"),x("显示【图文】","bili-head-recommend-push-graphic",true,void 0,"加载App端推送的【图文】卡片")]}]}]}]},or=function(e,t,r,n,i,a,o,l,s,c){let p={text:e,type:"slider",description:l,attributes:{},props:{},getValue(){return this.props[H].get(t,r)},getToolTipContent(h){return typeof o=="function"?o(h):`${h}`},callback(h,y){this.props[H].set(t,y);},min:n,max:i,step:s};return Reflect.set(p.attributes,we,t),Reflect.set(p.attributes,Ae,r),Oe.initComponentsStorageApi("slider",p,{get(h,y){return f.getValue(h,y)},set(h,y){f.setValue(h,y);}}),p},hn={id:"panel-video",title:"视频",isDefault(){return j.isVideo()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[x("强制本页刷新跳转","bili-video-forceThisPageToRefreshAndRedirect",false,void 0,"用于处理内存泄露问题"),x("新增评论模块","bili-video-addCommentModule",true,void 0,"用于查看当前视频的评论"),x("新增简介模块","bili-video-addDescModule",true,void 0,"用于查看当前视频的播放量、简介、一键三连等信息")]}]},{text:"ArtPlayer播放器",type:"deepMenu",forms:[{text:"功能",type:"forms",forms:[x("启用","bili-video-enableArtPlayer",true,void 0,"使用artplayer代替页面的播放器"),_e("播放的视频类型","bili-video-playType","mp4",[{text:"mp4",value:"mp4"},{text:"dash",value:"dash"}],void 0,"当选择dash时会有画质更高的选项"),x("自动播放视频","bili-video-playerAutoPlayVideo",false,void 0,""),x("自动进入全屏","bili-video-playerAutoPlayVideoFullScreen",false,void 0,"")]},{text:"控件设置",type:"forms",forms:[or("controls左右边距","bili-video-artplayer-controlsPadding-left-right",0,0,50,void 0,e=>e+"px","可用于全屏横屏适配屏幕",1)]},{text:"插件",type:"forms",forms:[x("弹幕","artplayer-plugin-video-danmaku-enable",true,void 0,"哔哩哔哩 (゜-゜)つロ 干杯~"),x("Dash Audio Support","artplayer-plugin-video-m4sAudioSupport-enable",true,void 0,"视频类型为dash时，该插件可支持播放音频"),x("选集","artplayer-plugin-video-epChoose-enable",true,void 0,"当视频播放完毕后会自动连播"),x("CC字幕","artplayer-plugin-video-cc-subtitle-enable",true,void 0,"字幕支持插件，如果存在繁体字幕，则自动生成简体字幕"),x("顶部工具栏","artplayer-plugin-video-toptoolbar-enable",true,void 0,"显示视频标题和当前观看人数"),x("视频统计信息","artplayer-plugin-video-statistics-enable",true,void 0,"用于显示当前视频信息的弹窗")]},{text:"加速CDN设置（dash）",type:"forms",forms:[_e("视频-UPOS服务器设置","bili-video-uposServerSelect",U.getUposCDNServerList()[0].host,U.getUposCDNServerList().map(e=>({text:e.name,value:e.host})),void 0,"设置视频流的服务器，可加快视频加载速度"),re("视频-自定义UPOS服务器","bili-video-uposServerSelect-own","","",void 0,"请输入upos服务器的域名"),_e("音频-UPOS服务器设置","bili-video-uposServerSelect-audio",U.getUposCDNServerList()[0].host,U.getUposCDNServerList().map(e=>({text:e.name,value:e.host})),void 0,"设置音频的服务器，可加快音频加载速度"),re("音频-自定义UPOS服务器","bili-video-uposServerSelect-audio-own","","",void 0,"请输入upos服务器的域名")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[x("UP主信息","bili-video-cover-UpWrapper",true,void 0,"点击UP主头像/名称可跳转至UP主空间"),x("相关视频","bili-video-cover-bottomRecommendVideo",true,void 0,"点击下面的相关视频可正确跳转至该视频"),x("选集","bili-video-cover-seasonNew",true,void 0,"点击下面的选集列表内的视频可正确跳转至该视频")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[x("阻止调用App","bili-video-hook-callApp",true,void 0,"处理函数: PlayerAgent")]}]}]}]},fn={id:"panel-opus",title:"专栏",isDefault(){return j.isOpus()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[x("自动展开阅读全文","bili-opus-automaticallyExpandToReadFullText",true,void 0,"屏蔽【展开阅读全文】按钮并自动处理全文高度")]}]},{text:"变量设置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[x("autoOpenApp","bili-opus-variable-autoOpenApp",true,void 0,"autoOpenApp函数置空"),x("go404","bili-opus-variable-go404",true,void 0,"go404函数置空，可禁止前往404页面"),x("handleFallback","bili-opus-variable-handleFallback",true,void 0,"禁止前往404页面")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[x("话题","bili-opus-cover-topicJump",true,void 0,"点击话题正确跳转"),x("header用户","bili-opus-cover-header",true,void 0,"点击内容上的发布本动态的用户正确跳转个人空间")]}]}]}]},gn={id:"panel-dynamic",title:"动态",isDefault(){return j.isDynamic()},forms:[{text:"",type:"forms",forms:[{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[x("话题","bili-dynamic-cover-topicJump",true,void 0,"点击话题正确跳转"),x("header用户","bili-dynamic-cover-header",true,void 0,"点击内容上的发布本动态的用户正确跳转个人空间"),x("@用户","bili-dynamic-cover-atJump",true,void 0,"点击@用户正确跳转个人空间"),x("引用","bili-dynamic-cover-referenceJump",true,void 0,"点击引用的视频|用户正确跳转")]}]}]}]},bn={id:"panel-bangumi",title:"番剧",isDefault(){return j.isBangumi()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[x("固定缩放倍率","bili-bangumi-initialScale",true,void 0,"")]}]},{text:"ArtPlayer播放器",type:"deepMenu",forms:[{text:"控件设置",type:"forms",forms:[or("controls左右边距","bili-bangumi-artplayer-controlsPadding-left-right",0,0,50,void 0,e=>e+"px","可用于全屏横屏适配屏幕",1)]},{text:"插件",type:"forms",forms:[x("弹幕","artplayer-plugin-bangumi-danmaku-enable",true,void 0,"哔哩哔哩 (゜-゜)つロ 干杯~"),x("Dash Audio Support","artplayer-plugin-bangumi-m4sAudioSupport-enable",true,void 0,"视频类型为dash时，该插件可支持播放音频"),x("选集","artplayer-plugin-bangumi-epChoose-enable",true,void 0,"当视频播放完毕后会自动连播"),x("CC字幕","artplayer-plugin-bangumi-cc-subtitle-enable",true,void 0,"字幕支持插件，如果存在繁体字幕，则自动生成简体字幕"),x("顶部工具栏","artplayer-plugin-bangumi-toptoolbar-enable",true,void 0,"显示视频标题和当前观看人数"),x("空降助手","artplayer-plugin-bangumi-airborneHelper-enable",true,void 0,"如果获取到的信息中存在空降信息，如跳过片头片尾，那么会自动跳过"),x("视频统计信息","artplayer-plugin-bangumi-statistics-enable",true,void 0,"用于显示当前视频信息的弹窗")]},{text:"解除区域限制",type:"forms",forms:[x("解锁番剧限制","bili-bangumi-unlockAreaLimit",false,void 0,"使用户可以观看区域外版权番剧"),x("生成简中字幕","bili-bangumi-generateSimpleChineseSubtitle",true,void 0,"根据繁体字幕自动生成简体中文字幕")]},{text:"加速CDN设置（dash）",type:"forms",forms:[_e("视频-UPOS服务器设置","bili-bangumi-uposServerSelect",U.getUposCDNServerList()[0].host,U.getUposCDNServerList().map(e=>({text:e.name,value:e.host})),void 0,"设置视频流的服务器，可加快视频加载速度"),re("视频-自定义UPOS服务器","bili-bangumi-uposServerSelect-own","","",void 0,"请输入upos服务器的域名"),_e("音频-UPOS服务器设置","bili-bangumi-uposServerSelect-audio",U.getUposCDNServerList()[0].host,U.getUposCDNServerList().map(e=>({text:e.name,value:e.host})),void 0,"设置音频的服务器，可加快音频加载速度"),re("音频-自定义UPOS服务器","bili-bangumi-uposServerSelect-audio-own","","",void 0,"请输入upos服务器的域名")]},{text:"<a href='https://github.com/yujincheng08/BiliRoaming/wiki/%E5%85%AC%E5%85%B1%E8%A7%A3%E6%9E%90%E6%9C%8D%E5%8A%A1%E5%99%A8' target='_blank'>解析服务器</a>",type:"forms",forms:[re("中国大陆","bili-bangumi-proxyApiServer-default","","用于请求播放地址的代理",void 0,"bilibili优化.example.com"),re("香港","bili-bangumi-proxyApiServer-hk","","用于请求播放地址的代理",void 0,"bilibili优化.example.com"),re("台湾","bili-bangumi-proxyApiServer-tw","","用于请求播放地址的代理",void 0,"bilibili优化.example.com"),re("泰国/东南亚","bili-bangumi-proxyApiServer-tha-or-sea","","用于请求播放地址的代理",void 0,"bilibili优化.example.com")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[x("【选集】","bili-bangumi-cover-clicl-event-chooseEp",true,void 0,"让【选集】的视频列表可点击跳转"),x("【其它】","bili-bangumi-cover-clicl-event-other",true,void 0,"让【PV&其他】、【预告】、【主题曲】、【香境剧场】等的视频列表可点击跳转"),x("【更多推荐】","bili-bangumi-cover-clicl-event-recommend",true,void 0,"让【更多推荐】的视频列表可点击跳转")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[x("阻止调用App","bili-bangumi-hook-callApp",true,void 0,"")]}]}]}]},vn={id:"panel-search",title:"搜索",isDefault(){return j.isSearch()},forms:[{type:"forms",text:"",forms:[{type:"deepMenu",text:"功能",forms:[{type:"forms",text:"",forms:[x("搜索框自动获取焦点","bili-search-inputAutoFocus",true,void 0,""),x("美化搜索结果","bili-search-beautifySearchResult",true,void 0,"重构搜索结果的样式"),x("开启其它地区番剧搜索","bili-search-enableOtherAreaSearchBangumi",false,void 0,"在搜索页面添加其它地区番剧搜索结果，需要解析服务器支持")]},{text:"<a href='https://github.com/yujincheng08/BiliRoaming/wiki/%E5%85%AC%E5%85%B1%E8%A7%A3%E6%9E%90%E6%9C%8D%E5%8A%A1%E5%99%A8' target='_blank'>搜索服务器</a>",type:"forms",forms:[re("香港","bili-search-proxyApiServer-hk","","用于搜索番剧结果的代理",void 0,"bilibili优化.example.com"),re("台湾","bili-search-proxyApiServer-tw","","用于搜索番剧结果的代理",void 0,"bilibili优化.example.com"),re("泰国/东南亚","bili-search-proxyApiServer-tha-or-sea","","用于搜索番剧结果的代理",void 0,"bilibili优化.example.com")]}]},{type:"deepMenu",text:"覆盖点击事件",forms:[{type:"forms",text:"",forms:[x("取消","bili-search-cover-cancel",false,void 0,"点击取消按钮回退至上一页"),x("搜索结果","bili-search-cover-card-result-click-event",true,void 0,"修复点击搜索结果不跳转视频的问题")]}]},{text:"变量设置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[x("noCallApp","bili-search-vue-prop-noCallApp",true,void 0,"noCallApp = true"),x("openAppDialog","bili-search-vue-prop-openAppDialog",true,void 0,"openAppDialog = false")]}]}]}]},yn={id:"panel-space",title:"个人空间",isDefault(){return j.isSpace()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[x("修复正确跳转","bili-space-repairRealJump",true,void 0,"修复视频|动态的正确跳转，避免跳转404")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[x("动态视频","bili-space-coverDynamicStateCardVideo",true,void 0,"点击发布动态的视频可正常跳转至该视频")]}]}]}]},xn={id:"panel-live",title:"直播",isDefault(){return j.isLive()},forms:[{text:"",type:"forms",forms:[{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[x("【屏蔽】聊天室","bili-live-block-chatRoom",false,void 0,"直接不显示底部的聊天室"),x("【屏蔽】xxx进入直播间","bili-live-block-brush-prompt",false,void 0,"直接不显示底部的xxx进入直播间"),x("【屏蔽】控制面板","bili-live-block-control-panel",false,void 0,"屏蔽底部的发个弹幕、送礼")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[x("阻止open-app-btn元素点击事件触发","bili-live-prevent-openAppBtn",true,void 0,"开启后可不跳转至唤醒App页面")]}]}]}]},Cn={id:"panel-topic-detail",title:"话题",isDefault(){return j.isTopicDetail()},forms:[]};Je.addContentConfig([dn,mn,hn,fn,gn,bn,Cn,vn,yn,xn]);Tt.addMenuOption([{key:"go_to_login",text:"🛠 前往登录",autoReload:false,isStoreValue:false,showText(e){return e},callback(){M.goToLogin();}},{key:"go_to_login_to_parse_access_key",text:"🛠 扫码并解析access_key",autoReload:false,isStoreValue:false,showText(e){return e},callback(){ke.init();}}]);f.init();ar.init();W.config.cssText.index+=`
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
.pops button[type="primary"],
.pops button[type="primary"]:active ,
.pops button[type="primary"]:hover{
    --button-color: #ffffff;
    --button-bd-color: var(--bili-color);
    --button-bg-color: var(--bili-color);
}
`;

})(Qmsg, DOMUtils, Utils, pops, MD5, Artplayer, artplayerPluginDanmuku, Viewer, MD5);