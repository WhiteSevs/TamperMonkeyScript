// ==UserScript==
// @name         【移动端】bilibili优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.3.15
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
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.11.11/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.9.11/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.3/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.0/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.js
// @require      https://fastly.jsdelivr.net/npm/md5@2.3.0/dist/md5.min.js
// @require      https://fastly.jsdelivr.net/npm/flv.js@1.6.2/dist/flv.js
// @require      https://fastly.jsdelivr.net/npm/artplayer@5.4.0/dist/artplayer.js
// @require      https://fastly.jsdelivr.net/npm/artplayer-plugin-danmuku@5.3.0/dist/artplayer-plugin-danmuku.js
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
// @grant        GM_addValueChangeListener
// @grant        GM_deleteValue
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_listValues
// @grant        GM_registerMenuCommand
// @grant        GM_removeValueChangeListener
// @grant        GM_setValue
// @grant        GM_setValues
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (le, st, et, w, Mt, vn, ct, Rt, nt) {
  'use strict';

  const d=new Set;const Vt = async t=>{d.has(t)||(d.add(t),(a=>{function r(n){if(typeof GM_addStyle=="function")return GM_addStyle(n);const e=document.createElement("style");if(e.setAttribute("type","text/css"),e.setAttribute("data-type","gm-css"),globalThis.trustedTypes){const c=globalThis.trustedTypes.createPolicy("safe-innerHTML",{createHTML:i=>i});e.innerHTML=c.createHTML(n);}else e.innerHTML=n;return (document.head||document.documentElement).appendChild(e),e}r(a);})(t));};

  const bn='@charset "UTF-8";.m-video2-awaken-btn,.openapp-dialog{display:none!important}.m-head .launch-app-btn.m-nav-openapp,.m-head .launch-app-btn.home-float-openapp,.m-head m-open-app{display:none!important}.m-home .launch-app-btn.home-float-openapp{display:none!important}.m-space .launch-app-btn.m-space-float-openapp,.m-space .launch-app-btn.m-nav-openapp,.m-space m-open-app:has(>.m-fixed-openapp){display:none!important}#app .video .launch-app-btn.m-video-main-launchapp:has([class^=m-video2-awaken]),#app .video .launch-app-btn.m-nav-openapp,#app .video .mplayer-widescreen-callapp,#app .video .launch-app-btn.m-float-openapp,#app .video .m-video-season-panel .launch-app-btn .open-app{display:none!important}#app.LIVE .open-app-btn.bili-btn-warp{display:none!important}#app .m-dynamic .launch-app-btn.m-nav-openapp,#app .m-dynamic .dynamic-float-openapp.dynamic-float-btn,#app .m-dynamic m-open-app:has(>.m-fixed-openapp){display:none!important}#app .m-opus .float-openapp.opus-float-btn,#app .m-opus .v-switcher .launch-app-btn.list-more,#app .m-opus .opus-nav .launch-app-btn.m-nav-openapp,#app .m-opus .m-navbar .m-nav-openapp,#app .m-opus m-open-app.m-open-app.fixed-openapp,#app .m-opus_wp .m-open-app.opus-float-btn{display:none!important}#app .topic-detail .launch-app-btn.m-nav-openapp,#app .topic-detail .launch-app-btn.m-topic-float-openapp{display:none!important}#app.main-container bili-open-app.btn-download{display:none!important}#__next m-open-app[class^=TopBar_download],#__next m-open-app:has([class^=GoApp]){display:none!important}#__next m-open-app[class^=MainButton_btnWrap]{visibility:hidden!important}#app .read-app-main bili-open-app{display:none!important}#app .playlist>.open-app-wp{display:none!important}#app .playlist>.open-app-wp+div{padding-top:56.25%}';Vt(bn);const yn="html{--bili-color: #fb7299;--bili-color-rgb: 251, 114, 153}";Vt(yn);const xn=`@charset "UTF-8";
/* 主页 */
#app .m-head {
  --bg-color: #f0f1f3;
  --bg-rever-color: #ffffff;
  --pd-width: 1.3333vmin;
  --bd-circle: 1.3333vmin;
  --card-height: 30vmin;
  --icon-font-size: 3.2vmin;
  --icon-text-font-size: 2.6vmin;
  --icon-font-margin-right: 3vmin;
  --title-font-size: 2.8vmin;
  background-color: var(--bg-color);
}
#app .m-head .m-home {
  background-color: var(--bg-color);
}
/* 美化视频卡片 */
#app .m-head .video-list .card-box .v-card {
  background-color: var(--bg-rever-color);
  padding: 0px;
  margin: 0px;
  width: calc(50% - var(--pd-width) / 2);
  border-radius: var(--bd-circle);
  margin-top: var(--pd-width);
  display: grid;
  /* 视频封面区域 */
}
#app .m-head .video-list .card-box .v-card .card {
  background: var(--bg-rever-color);
  border-radius: unset;
  border-top-left-radius: var(--bd-circle);
  border-top-right-radius: var(--bd-circle);
  height: var(--card-height);
}
#app .m-head .video-list .card-box .v-card .card .count {
  display: flex;
  justify-content: safe flex-start;
  padding-right: 0;
}
#app .m-head .video-list .card-box .v-card .card .count .iconfont {
  font-size: var(--icon-text-font-size);
}
#app .m-head .video-list .card-box .v-card .card .count > span {
  font-size: var(--icon-text-font-size);
  margin-right: var(--icon-font-margin-right);
}
/* 视频标题区域 */
#app .m-head .video-list .card-box .v-card .title {
  padding: 0;
  margin: var(--pd-width);
  font-size: var(--title-font-size);
}
/* 两列 => 左边的 */
#app .m-head .video-list .card-box .v-card:nth-child(2n-1) {
  /*background-color: red;*/
  margin-right: calc(var(--pd-width) / 2);
}
/* 两列 => 右边的 */
#app .m-head .video-list .card-box .v-card:nth-child(2n) {
  /*background-color: rebeccapurple;*/
  margin-left: calc(var(--pd-width) / 2);
}
`,H={isVideo(){return window.location.pathname.startsWith("/video/")},isBangumi(){return window.location.pathname.startsWith("/bangumi/")},isSearch(){return window.location.pathname.startsWith("/search")},isSearchResult(){let e=new URLSearchParams(window.location.search);return this.isSearch()&&e.has("keyword")},isLive(){return window.location.hostname==="live.bilibili.com"},isOpus(){return window.location.pathname.startsWith("/opus")},isTopicDetail(){return window.location.pathname.startsWith("/topic-detail")},isDynamic(){return window.location.pathname.startsWith("/dynamic")},isHead(){return window.location.pathname==="/"||window.location.pathname.startsWith("/channel")},isSpace(){return window.location.pathname.startsWith("/space")},isPlayList(){return window.location.pathname.startsWith("/playlist")}},wn={isPC(){return window.location.hostname==="www.bilibili.com"},isReadMobile(){return this.isPC()&&window.location.pathname.startsWith("/read/mobile")}},x={className:{bangumi:"#app.main-container",bangumi_new:"body > #__next",dynamic:"#app .m-dynamic",opus:"#app .m-opus",video:"#app .video",mVideo:"#app .m-video",head:"#app .m-head",playlist:"#app .playlist",space:"#app .m-space"},theme:"#FB7299"},gt={className:{read:{mobile:"#app .read-app-main"}}};var Cn=typeof GM_addValueChangeListener<"u"?GM_addValueChangeListener:void 0,Qe=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,vt=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,Fe=typeof GM_getValue<"u"?GM_getValue:void 0,Me=typeof GM_info<"u"?GM_info:void 0,Oe=typeof GM_listValues<"u"?GM_listValues:void 0,An=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,En=typeof GM_removeValueChangeListener<"u"?GM_removeValueChangeListener:void 0,$e=typeof GM_setValue<"u"?GM_setValue:void 0,bt=typeof GM_setValues<"u"?GM_setValues:void 0,Bn=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Dn=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,P=typeof unsafeWindow<"u"?unsafeWindow:void 0,Nt=window;const kn={Viewer:{keyName:"ViewerCSS",url:"https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"}},te={waitRemove(...e){e.forEach(t=>{typeof t=="string"&&le.waitNodeList(t).then(n=>{n.forEach(i=>i.remove());});});},createBlockCSSNode(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),le.createElement("style",{type:"text/css",innerHTML:`${t.join(`,
`)}{display: none !important;}`})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),M(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){const t=typeof vt=="function"?vt(e.keyName):null;return typeof t=="string"&&t?M(t):te.loadStyleLink(e.url)},async loadStyleLink(e){let t=document.createElement("link");return t.rel="stylesheet",t.type="text/css",t.href=e,new Promise(n=>{le.onReady(()=>{document.head.appendChild(t),n(t);});})},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(n=>{t.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.startsWith("data:")||e.match(/^http(s|):\/\//i)?e:e.startsWith("//")?(e.startsWith("///")||(e=window.location.protocol+e),e):(e.startsWith("/")||(e+="/"),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;try{let t=new URL(e);return t.protocol="https:",t.toString()}catch{return e}},lockScroll(...e){let t=document.createElement("style");t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...e||[]);return n.forEach(i=>{i.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(t),{recovery(){n.forEach(i=>{i.classList.remove("pops-overflow-hidden-important");}),t.remove();}}},async getClipboardText(){function e(i){navigator.clipboard.readText().then(a=>{i(a);}).catch(a=>{s.error("读取剪贴板内容失败👉",a),i("");});}function t(i){navigator.permissions.query({name:"clipboard-read"}).then(()=>{e(i);}).catch(a=>{s.error("申请剪贴板权限失败，尝试直接读取👉",a.message??a.name??a.stack),e(i);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(i=>{if(!n()){i("");return}document.hasFocus()?t(i):window.addEventListener("focus",()=>{t(i);},{once:true});})},escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(e,t,n=5e3){let i,a=n-t,r=t,o=async l=>{const c=await e(l);if(typeof c=="boolean"&&c||l){f.workerClearTimeout(i);return}if(r+=t,r>a){o(true);return}i=f.workerSetTimeout(()=>{o(false);},t);};o(false);},findParentNode(e,t,n){if(n){let i=le.closest(e,n);if(i)return i.querySelector(t)}else return le.matches(e,t)?e:le.closest(e,t)},toStr(e,t=2){const n="__undefined__placeholder__replaced__str__"+performance.now();return JSON.stringify(e,(a,r)=>r===void 0?n:r,t).replace(new RegExp(`"${n}"`,"g"),"undefined")},isVerticalScreen(){return !globalThis.screen.orientation.type.includes("landscape")},isMobileDevice(e=768){return this.isVerticalScreen()?globalThis.innerWidth<e:globalThis.innerHeight<e},isTopWindow(){const e=typeof P=="object"&&P!=null?P:window;return e.top===e.self}},Je="GM_Panel",zt="data-init",pe="data-key",de="data-default-value",_n="data-init-more-value",Fn="data-plugin-search-config",G="data-storage-api",ge={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},ie={setting:{get width(){return ge.width<550?"88vw":ge.width<700?"550px":"700px"},get height(){return ge.height<450?"70vh":ge.height<550?"450px":"550px"}},settingMiddle:{get width(){return ge.width<350?"88vw":"350px"}},info:{get width(){return ge.width<350?"88vw":"350px"},get height(){return ge.height<250?"88vh":"250px"}}},Ye={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new f.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]},getDefaultBottomContentConfig(){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let e=false,t;const n=(r,o)=>{typeof o!="string"&&(o=te.toStr(o));const l=new Blob([o]),c=globalThis.URL.createObjectURL(l);u.createElement("a",{href:c,download:r}).click(),f.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(c);},500);},i=()=>{const r=m=>{const h=U.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="local">本地导入</div>
            <div class="btn-control" data-mode="network">网络导入</div>
            <div class="btn-control" data-mode="clipboard">剪贴板导入</div>`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(E,y){E.close();}}},drag:true,mask:{enable:true},width:ie.info.width,height:ie.info.height,style:`
          .btn-control{
              display: inline-block;
              margin: 10px;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 5px;
              cursor: pointer;
          }
          .btn-control:hover{
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
          }`}),v=h.$shadowRoot.querySelector(".btn-control[data-mode='local']"),C=h.$shadowRoot.querySelector(".btn-control[data-mode='network']"),F=h.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),_=async E=>{confirm("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）")&&(typeof Oe=="function"?typeof Qe=="function"?(Oe().forEach(D=>{Qe(D);}),w.success("已清空脚本存储的配置")):w.error("不支持GM_deleteValue函数，无法执行删除脚本配置"):w.error("不支持GM_listValues函数，无法清空脚本存储的配置")),typeof bt=="function"?bt(E):Object.keys(E).forEach(D=>{const T=E[D];$e(D,T);}),w.success("配置导入完毕");},S=E=>new Promise(async y=>{const V=f.toJSON(E);Object.keys(V).length===0?w.warning("解析为空配置，不导入"):await _(V),y(true);});u.on(v,"click",E=>{u.preventEvent(E),h.close();const y=u.createElement("input",{type:"file",accept:".json"});u.on(y,["propertychange","input"],V=>{if(!y.files?.length)return;const D=y.files[0],T=new FileReader;T.onload=()=>{S(T.result);},T.readAsText(D,"UTF-8");}),y.click();}),u.on(C,"click",E=>{u.preventEvent(E),h.close();const y=U.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(T,q){T.close();}},ok:{text:"导入",callback:async(T,q)=>{const j=T.text;if(f.isNull(j)){w.error("请填入完整的url");return}const $=w.loading("正在获取配置..."),I=await Q.get(j,{allowInterceptConfig:false});if($.close(),!I.status){s.error(I),w.error("获取配置失败",{consoleLogContent:true});return}await S(I.data.responseText)&&T.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:ie.info.width,height:"auto"}),V=y.$shadowRoot.querySelector("input"),D=y.$shadowRoot.querySelector(".pops-prompt-btn-ok");u.on(V,["input","propertychange"],T=>{u.val(V)===""?u.attr(D,"disabled","true"):u.removeAttr(D,"disabled");}),u.onKeyboard(V,"keydown",(T,q,j)=>{T==="Enter"&&j.length===0&&u.val(V)!==""&&u.emit(D,"click");}),u.emit(V,"input");}),u.on(F,"click",async E=>{u.preventEvent(E),h.close();let y=await te.getClipboardText();if(y.trim()===""){w.warning("获取到的剪贴板内容为空");return}await S(y);});},o=(m=`${Ke}_panel-setting-${f.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,h)=>{const v=U.alert({title:{text:"请选择导出方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="export-to-file">导出至文件</div>
            <div class="btn-control" data-mode="export-to-clipboard">导出至剪贴板</div>
            `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(_,S){_.close();}}},drag:true,mask:{enable:true},width:ie.info.width,height:ie.info.height,style:`
          .btn-control{
              display: inline-block;
              margin: 10px;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 5px;
              cursor: pointer;
          }
          .btn-control:hover{
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
          }`}),C=v.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),F=v.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");u.on(C,"click",_=>{u.preventEvent(_);try{n(m,h),v.close();}catch(S){w.error(S.toString(),{consoleLogContent:true});}}),u.on(F,"click",async _=>{await f.copy(h)?(w.success("复制成功"),v.close()):w.error("复制失败");});},c=U.confirm({title:{text:"配置",position:"center"},content:{text:`
            <textarea name="config-value" id="config" readonly></textarea>
          `,html:true},btn:{ok:{enable:true,type:"primary",text:"导入",callback(m,h){r();}},cancel:{enable:true,text:"导出",callback(m,h){o(void 0,d);}}},width:ge.width<450?"90vw":"450px",height:"auto",style:`
          .pops-content textarea {
            --textarea-bd-color: #dcdfe6;
            display: inline-block;
            resize: vertical;
            padding: 5px 15px;
            margin: 0;
            line-height: normal;
            box-sizing: border-box;
            color: #606266;
            border: 0;
            border-radius: 0;
            outline: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background: none;
            width: 100%;
            height: 100%;
            appearance: none;
            resize: none;
          }
          .pops-content textarea{
            height: 500px;
          }
          .pops-content textarea:focus {
            --textarea-bd-color: #3677f0;
          }
          .pops-content textarea:hover {
            --textarea-bd-color: #c0c4cc;
          }
        `}).$shadowRoot.querySelector("textarea"),p={};if(typeof Oe=="function")Oe().forEach(h=>{const v=Fe(h);Reflect.set(p,h,v);});else {w.warning("不支持函数GM_listValues，仅导出菜单配置");const m=Fe(Je);Reflect.set(p,Je,m);}const d=te.toStr(p);c.value=d;},a=()=>{let r=Me?.script?.supportURL||Me?.script?.namespace;typeof r=="string"&&f.isNotNull(r)&&window.open(r,"_blank");};return [{id:"script-version",title:`版本：${Me?.script?.version||"未知"}`,isBottom:true,views:[],clickFirstCallback(){return  false},afterRender(r){new Sn(r.$asideLiElement).on("tap",function(l){clearTimeout(t),t=void 0,e?(e=false,i()):(t=setTimeout(()=>{e=false,a();},200),e=true);});}}]},setDefaultBottomContentConfig(e){this.$data.__defaultBottomContentConfig=e;}},Ot={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{g.showPanel(Ye.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){te.isTopWindow()&&In.add(this.$data.menuOption);},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e);},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(t=>{let n=this.$data.menuOption.findIndex(i=>i.key===t.key);n!==-1&&(this.$data.menuOption[n]=t);});},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1);}};class $n{storageKey;listenerData;cacheData;callbacks=[];constructor(t){if(typeof t=="string"){const n=t.trim();if(n=="")throw new Error("key can not be empty string");this.storageKey=n;}else throw new TypeError("key must be a string");this.listenerData=new et.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.setLocalValue=this.setLocalValue.bind(this),this.destory=this.destory.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this);}[Symbol.dispose](){this.destory();}async[Symbol.asyncDispose](){this.destory();}destory(){this.cacheData=null;for(let t=this.callbacks.length-1;t>=0;t--){const n=this.callbacks[t];n(),this.callbacks.splice(t,1);}}getLocalValue(){if(this.cacheData==null){let t=Fe(this.storageKey);t==null&&(t={},this.setLocalValue(t)),this.destory(),this.cacheData=t;const n=Cn(this.storageKey,(i,a,r)=>{this.cacheData=null,this.cacheData=r;});return this.callbacks.push(()=>{En(n);}),t}else return this.cacheData}setLocalValue(t){this.cacheData=null,this.cacheData=t,$e(this.storageKey,t);}set(t,n){const i=this.get(t),a=this.getLocalValue();Reflect.set(a,t,n),this.setLocalValue(a),this.emitValueChangeListener(t,n,i);}get(t,n){const i=this.getLocalValue();return Reflect.get(i,t)??n}getAll(){return this.getLocalValue()}delete(t){const n=this.get(t),i=this.getLocalValue();Reflect.deleteProperty(i,t),this.setLocalValue(i),this.emitValueChangeListener(t,void 0,n);}has(t){const n=this.getLocalValue();return Reflect.has(n,t)}keys(){const t=this.getLocalValue();return Reflect.ownKeys(t)}values(){const t=this.getLocalValue();return Reflect.ownKeys(t).map(n=>Reflect.get(t,n))}clear(){this.destory(),Qe(this.storageKey);}addValueChangeListener(t,n){const i=Math.random(),a=this.listenerData.get(t)||[];return a.push({id:i,key:t,callback:n}),this.listenerData.set(t,a),i}removeValueChangeListener(t){let n=false;for(const[i,a]of this.listenerData.entries()){for(let r=0;r<a.length;r++){const o=a[r];(typeof t=="string"&&o.key===t||typeof t=="number"&&o.id===t)&&(a.splice(r,1),r--,n=true);}this.listenerData.set(i,a);}return n}async emitValueChangeListener(...t){const[n,i,a]=t;if(!this.listenerData.has(n))return;const r=this.listenerData.get(n);for(let o=0;o<r.length;o++){const l=r[o];if(typeof l.callback=="function"){let c,p;t.length===1||(t.length===2?c=i:t.length===3&&(c=i,p=a)),await l.callback(n,c,p);}}}}const he=new $n(Je),g={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new f.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new f.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new f.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new f.Dictionary),this.__onceExecData},get scriptName(){return Ke},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e;},key:Je,attributeKeyName:pe,attributeDefaultValueName:de},init(){this.initContentDefaultValue(),Ot.init();},initContentDefaultValue(){const e=i=>{if(!i.attributes||i.type==="button"||i.type==="container"||i.type==="deepMenu")return;const a=i.attributes;let r=a[zt];if(typeof r=="function"){let p=r();if(typeof p=="boolean"&&!p)return}let o=new Map,l=a[pe];if(l!=null){const p=a[de];o.set(l,p);}let c=a[_n];if(typeof c=="object"&&c&&Object.keys(c).forEach(p=>{const d=c[p];o.set(p,d);}),!o.size){s.warn("请先配置键",i);return}if(i.type==="switch"){let p=typeof i.disabled=="function"?i.disabled():i.disabled;typeof p=="boolean"&&p&&this.$data.contentConfigInitDisabledKeys.push(...o.keys());}for(const[p,d]of o.entries())this.setDefaultValue(p,d);},t=i=>{for(let a=0;a<i.length;a++){let r=i[a];e(r);let o=r.views;o&&Array.isArray(o)&&t(o);}},n=[...Ye.getAllContentConfig()];for(let i=0;i<n.length;i++){let a=n[i];if(!a.views)continue;const r=a.views;r&&Array.isArray(r)&&t(r);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&s.warn("该key已存在，初始化默认值失败: "+e),this.$data.contentConfigInitDefaultValue.set(e,t);},getDefaultValue(e){return this.$data.contentConfigInitDefaultValue.get(e)},setValue(e,t){he.set(e,t);},getValue(e,t){const n=he.get(e);return n??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){he.delete(e);},hasKey(e){return he.has(e)},addValueChangeListener(e,t,n){const i=he.addValueChangeListener(e,t);if(n?.immediate||n?.immediateAll){const a=this.getValue(e);n?.immediate?t(e,a,a):n?.immediateAll&&g.emitMenuValueChange(e,a,a);}return i},removeValueChangeListener(e){he.removeValueChangeListener(e);},emitMenuValueChange(e,t,n){he.emitValueChangeListener(e,t,n);},async exec(e,t,n,i=true){const a=this;let r;typeof e=="string"||Array.isArray(e)?r=()=>e:r=e;let o=false;const l=r();let c=[];Array.isArray(l)?(o=true,c=l):c.push(l);const p=c.find(D=>!this.$data.contentConfigInitDefaultValue.has(D));if(p){s.warn(`${p} 键不存在`);return}const d=JSON.stringify(c);if(i&&this.$data.onceExecMenuData.has(d))return this.$data.onceExecMenuData.get(d);let m=[];const h=[];let v=[];const C=(D,T)=>{let q=[],j=[],$=[];if(Array.isArray(T))$=$.concat(T);else {const B=z=>{if(typeof z=="object"&&z!=null)if(z instanceof Element)$.push(z);else {const{$css:X,destory:ae}=z;X!=null&&(Array.isArray(X)?$=$.concat(X):$.push(X)),typeof ae=="function"&&$.push(ae);}else $.push(z);};if(T!=null&&Array.isArray(T))for(const z of T)B(z);else B(T);}const I=B=>{if(B!=null){if(B instanceof Element){q.push(B);return}if(typeof B=="function"){j.push(B);return}}};for(const B of $){const z=I(B);if(typeof z=="boolean"&&!z)break;if(Array.isArray(B))for(const X of B){const ae=I(X);if(typeof ae=="boolean"&&!ae)break}}_(),S(),D&&(m=m.concat(q),v=v.concat(j));},F=D=>!!this.getValue(D),_=()=>{for(let D=0;D<m.length;D++)m[D]?.remove(),m.splice(D,1),D--;},S=()=>{for(let D=0;D<v.length;D++){const T=v[D];T(),v.splice(D,1),D--;}},E=()=>{let D=false;return typeof n=="function"?D=n(c):D=c.every(T=>F(T)),D},y=async D=>{const T=E();let q=[];if(T){const j=c.map($=>this.getValue($));q=await t({key:c,triggerKey:D?.key,value:o?j:j[0],addStoreValue:(...$)=>C(T,$)});}C(T,q);};i&&c.forEach(D=>{const T=this.addValueChangeListener(D,(q,j,$)=>y({key:q}));h.push(T);}),await y();const V={reload(){this.clearStoreStyleElements(),this.destory(),y();},clear(){this.clearStoreStyleElements(),this.destory(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreStyleElements:()=>_(),destory(){return S()},removeValueChangeListener:()=>{h.forEach(D=>{this.removeValueChangeListener(D);});},clearOnceExecMenuData(){i&&a.$data.onceExecMenuData.delete(d);}};return this.$data.onceExecMenuData.set(d,V),V},async execMenu(e,t,n=false,i=false){return await this.exec(e,async a=>await t(a),a=>a.every(o=>{let l=!!this.getValue(o);return g.$data.contentConfigInitDisabledKeys.includes(o)&&(l=false,s.warn(`.execMenu${i?"Once":""} ${o} 被禁用`)),n&&(l=!l),l}),i)},async execMenuOnce(e,t,n=false,i=false){const a=await this.execMenu(e,t,n,true);if(i&&a){const r=()=>{a.reload();};this.removeUrlChangeWithExecMenuOnceListener(e),this.addUrlChangeWithExecMenuOnceListener(e,r);}return a},deleteExecMenuOnce(e){return e=this.transformKey(e),this.$data.onceExecMenuData.delete(e),this.$data.urlChangeReloadMenuExecOnce.delete(e),he.removeValueChangeListener(e)},onceExec(e,t){if(e=this.transformKey(e),typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(e)||(t(),this.$data.onceExecData.set(e,1));},deleteOnceExec(e){e=this.transformKey(e),this.$data.onceExecData.delete(e);},addUrlChangeWithExecMenuOnceListener(e,t){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.set(e,t),{off:()=>this.removeUrlChangeWithExecMenuOnceListener(e)}},removeUrlChangeWithExecMenuOnceListener(e){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.delete(e);},hasUrlChangeWithExecMenuOnceListener(e){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.has(e)},async emitUrlChangeWithExecMenuOnceEvent(e){const t=this.$data.urlChangeReloadMenuExecOnce.values();for(const n of t)await n(e);},showPanel(e,t=`${Ke}-设置`,n=false,i=false){this.$data.$panel=null,this.$data.panelContent=[];const a=e.findIndex(o=>(typeof o.isBottom=="function"?o.isBottom():!!o.isBottom)&&o.id==="script-version")!==-1;!n&&!a&&e.push(...Ye.getDefaultBottomContentConfig());const r=U.panel({title:{text:t,position:"center",html:false,style:""},content:e,btn:{close:{enable:true,callback:o=>{o.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:o=>{o(),this.$data.$panel=null;}},width:ie.setting.width,height:ie.setting.height,drag:true,only:true,style:`
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,...this.$data.panelConfig});this.$data.$panel=r,this.$data.panelContent=e,i||this.registerConfigSearch({$panel:r,content:e});},registerConfigSearch(e){const{$panel:t,content:n}=e,i=async(h,v)=>{if(h==null)return;const C=await v(h);return C&&typeof C.isFind=="boolean"&&C.isFind?C.data:await i(C.data,v)},a=(h,v)=>{const C=new IntersectionObserver(F=>{F.forEach(_=>{_.isIntersecting&&(v?.(),C.disconnect());});},{root:null,threshold:1});C.observe(h),h.scrollIntoView({behavior:"smooth",block:"center"});},r=h=>{const v="pops-flashing";u.onAnimationend(h,()=>{h.classList.remove(v);}),h.classList.add(v);},o=h=>{if(h.type==="dblclick"&&m)return;u.preventEvent(h);const v=U.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:ie.settingMiddle.width,height:"auto",drag:true,style:`
					${U.config.cssText.panelCSS}

					.search-wrapper{
						border-bottom: 1px solid rgb(235, 238, 245, 1);
					}
					.pops-content:has(.search-result-wrapper:empty) .search-wrapper{
						border-bottom: 0;
					}
					.search-config-text{
						width: 100%;
						border: 0;
						height: 32px;
						padding: 0px 10px;
						outline: none;
					}
					.search-result-wrapper{
						max-height: 400px;
						overflow: auto;
					}
					.search-result-item{
						cursor: pointer;
						padding: 5px 10px;
						display: flex;
						flex-direction: column;
					}
					.search-result-item:hover{
						background-color: #D8F1FD;
					}
					.search-result-item-path{
						display: flex;
    					align-items: center;
					}
					.search-result-item-description{
						font-size: 0.8em;
						color: #6c6c6c;
					}
					${e.searchDialogStyle??""}
				`});v.$shadowRoot.querySelector(".search-wrapper");const C=v.$shadowRoot.querySelector(".search-config-text"),F=v.$shadowRoot.querySelector(".search-result-wrapper");C.focus();const _=()=>{u.empty(F);},S=y=>{const V=f.queryProperty(y,q=>q?.next?{isFind:false,data:q.next}:{isFind:true,data:q}),D=u.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${V.matchedData?.path}</div>
							<div class="search-result-item-description">${V.matchedData?.description??""}</div>
						`}),T=U.fn.PanelHandlerComponents();return u.on(D,"click",()=>{const j=t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[y.index];if(!j){w.error(`左侧项下标${y.index}不存在`);return}j.scrollIntoView({behavior:"smooth",block:"center"}),j.click(),i(y.next,async $=>{if($?.next){const I=await u.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(B=>{const z=Reflect.get(B,T.$data.nodeStoreConfigKey);return typeof z=="object"&&z!=null&&z.text===$.name}),2500);if(I)I.click();else return w.error("未找到对应的二级菜单"),{isFind:true,data:$};return {isFind:false,data:$.next}}else {const I=await u.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(B=>Reflect.get(B,T.$data.nodeStoreConfigKey)===$.matchedData?.formConfig),2500);if(I){a(I);const B=I.closest(".pops-panel-forms-fold[data-fold-enable]");B&&(B.querySelector(".pops-panel-forms-fold-container").click(),await f.sleep(500)),a(I,()=>{r(I);});}else w.error("未找到对应的菜单项");return {isFind:true,data:$}}});}),D},E=y=>{const V=new RegExp(y,"i"),D=[],T=(j,$)=>{for(let I=0;I<j.length;I++){const B=j[I],z=B.views;if(z&&Array.isArray(z)){const X=f.deepClone($);if(B.type==="deepMenu"){const ae=f.queryProperty(X,Se=>Se?.next?{isFind:false,data:Se.next}:{isFind:true,data:Se});ae.next={name:B.text};}T(z,X);}else {let X,ae;if(B.type==="own"){let Y=Reflect.get(B.attributes||{},Fn);Y&&(typeof Y=="function"&&(Y=Y()),typeof Y.text=="string"&&(X=Y.text),typeof Y.desc=="string"&&(ae=Y.desc));}else X=B.text,ae=Reflect.get(B,"description");const Se=[X,ae],mt=Se.findIndex(Y=>{if(typeof Y=="string")return Y.match(V)});if(mt!==-1){const Y=f.deepClone($),ht=f.queryProperty(Y,me=>me?.next?{isFind:false,data:me.next}:{isFind:true,data:me});ht.next={name:X,matchedData:{path:"",formConfig:B,matchedText:Se[mt],description:ae}};const ft=[];f.queryProperty(Y,me=>{const tt=me?.name;return typeof tt=="string"&&tt.trim()!==""&&ft.push(tt),me?.next?{isFind:false,data:me.next}:{isFind:true,data:me}});const gn=ft.join(te.escapeHtml(" - "));ht.next.matchedData.path=gn,D.push(Y);}}}};for(let j=0;j<n.length;j++){const $=n[j];if(!$.views||$.isBottom&&$.id==="script-version")continue;const I=$.views;if(I&&Array.isArray(I)){let B=$.title;typeof B=="function"&&(B=B()),T(I,{index:j,name:B});}}const q=document.createDocumentFragment();for(const j of D){let $=S(j);q.appendChild($);}_(),F.append(q);};u.on(C,"input",f.debounce(y=>{u.preventEvent(y);let V=u.val(C).trim();if(V===""){_();return}E(V);},200));};t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(h=>{u.on(h,"dblclick",o);});let c=new WeakMap,p=false,d,m=false;u.on(t.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(h,v)=>{m=true,clearTimeout(d),d=void 0,p&&c.has(v)?(p=false,c.delete(v),o(h)):(d=setTimeout(()=>{p=false;},200),p=true,c.set(v,h));},{capture:true}),t.$shadowRoot.appendChild(u.createElement("style",{type:"text/css",textContent:`
    			.pops-flashing{
    				animation: double-blink 1.5s ease-in-out;
    			}
    			@keyframes double-blink {
    				 0% {
    					background-color: initial;
    				}
    				25% {
    					background-color: yellow;
    				}
    				50% {
    					background-color: initial;
    				}
    				75% {
    					background-color: yellow;
    				}
    				100% {
    					background-color: initial;
    				}
    			}
    		`}));},transformKey(e){if(Array.isArray(e)){const t=e.sort();return JSON.stringify(t)}else return e},getDynamicValue(e,t){const n=this;let i=false,a=t;const r=this.addValueChangeListener(e,(o,l)=>{a=l;});return {get value(){return i||(i=true,a=n.getValue(e,t)),a},destory(){n.removeValueChangeListener(r);}}}},Te={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},f=et.noConflict(),u=le.noConflict(),U=st,s=new f.Log(Me,P.console||Nt.console),Ke=Me?.script?.name||void 0,Sn=st.fn.Utils.AnyTouch(),Tn=false;s.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});const Pt=()=>{const t=st.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex??0,n=f.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex??0;return Math.max(100,t,n)};w.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(e){const t=e.setting.type;if(t==="loading")return  false;const n=e.setting.content;return t==="warning"?s.warn(n):t==="error"?s.error(n):s.info(n),false},get position(){return g.getValue(Te.qmsg_config_position.key,Te.qmsg_config_position.defaultValue)},get maxNums(){return g.getValue(Te.qmsg_config_maxnums.key,Te.qmsg_config_maxnums.defaultValue)},get showReverse(){return g.getValue(Te.qmsg_config_showreverse.key,Te.qmsg_config_showreverse.defaultValue)},get zIndex(){return Pt()}});U.GlobalConfig.setGlobalConfig({zIndex:()=>Pt(),mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const In=new f.GM_Menu({GM_getValue:Fe,GM_setValue:$e,GM_registerMenuCommand:An,GM_unregisterMenuCommand:Bn}),Q=new f.Httpx({xmlHttpRequest:Dn,logDetails:Tn});Q.interceptors.request.use(e=>e);Q.interceptors.response.use(void 0,e=>(s.error("拦截器-请求错误",e),e.type==="onabort"?w.warning("请求取消",{consoleLogContent:true}):e.type==="onerror"?w.error("请求异常",{consoleLogContent:true}):e.type==="ontimeout"?w.error("请求超时",{consoleLogContent:true}):w.error("其它错误",{consoleLogContent:true}),e));const yt={Object:{defineProperty:P.Object.defineProperty,keys:P.Object.keys,values:P.Object.values},Function:{apply:P.Function.prototype.apply,call:P.Function.prototype.call},Element:{appendChild:P.Element.prototype.appendChild},setTimeout:P.setTimeout.bind(P),clearTimeout:P.clearTimeout.bind(P),setInterval:P.setInterval.bind(P),clearInterval:P.clearInterval.bind(P)},M=u.addStyle.bind(u),L=le.selector.bind(le),W=le.selectorAll.bind(le),jt=new f.GM_Cookie,Ln=Ke||"【移动端】bilibili优化",xt=Nt.QRCode||P.QRCode,ve={ios:{appkey:"27eb53fc9058f8c3",appsec:"c2ed53a74eeefe3cf99fbd01d8c9c375",mobi_app:"ipnone"}};function wt(e,t,n){e.appkey=t;const i=new URLSearchParams(e);return i.sort(),Mt(i.toString()+n)}const re={isWebApiSuccess(e){const t=(typeof e?.message=="string"?e.message:"").toLowerCase();return e?.code===0&&(e?.message==="0"||t==="success"||t==="ok")},isAreaLimit(e){const t={6002003:"抱歉您所在地区不可观看！"};return Object.keys(t).findIndex(i=>{const a=t[i];if(e.code.toString()===i.toString()||e.message.includes(a))return  true})!==-1}},Ct={async getQrCodeInfo(){const e="https://passport.bilibili.com/x/passport-tv-login/qrcode/auth_code",t={appkey:ve.ios.appkey,local_id:"0",ts:"0",mobi_app:ve.ios.mobi_app,csrf:jt.get("bili_jct")?.value||""},n=wt(t,ve.ios.appkey,ve.ios.appsec),i=await Q.post(e,{data:f.toSearchParamsStr({...t,sign:n}),headers:{"Content-Type":"application/x-www-form-urlencoded"},responseType:"json",fetch:true});if(s.info(i),!i.status)return;const a=f.toJSON(i.data.responseText);if(a.code!==0){w.error(a.message);return}return a.data},async poll(e){const t="https://passport.bilibili.com/x/passport-tv-login/qrcode/poll",n={appkey:ve.ios.appkey,auth_code:e,local_id:"0",ts:"0"},i=wt(n,ve.ios.appkey,ve.ios.appsec),a=await Q.post(t,{data:f.toSearchParamsStr({...n,sign:i}),headers:{"Content-Type":"application/x-www-form-urlencoded"},responseType:"json",fetch:true});if(!a.status)return {success:false,message:"网络错误",action:void 0};const r=f.toJSON(a.data.responseText);s.info(r);const o={0:"成功","-3":"API校验密匙错误","-400":"请求错误","-404":"啥都木有",86038:"二维码已失效",86039:"二维码尚未确认",86090:"二维码已扫码未确认"};if(!re.isWebApiSuccess(r)){const p=r.code.toString(),d=r.message||o[p]||"未知错误";return p==="86038"?{success:false,message:d,action:"refresh"}:p==="86039"||p==="86090"?{success:false,message:d,action:"wait"}:{success:false,message:d,action:void 0}}const l=r.data.access_token,c=Date.now()+r.data.expires_in*1e3;return {success:true,message:"获取成功",accessKey:l,accessKeyExpireAt:c}}},De={async init(){w.info("正在申请二维码...");let e=await this.getQRCodeInfo();e&&this.confirmScanQrcode(e);},getQRCodeInfo:async function(){s.info("正在申请二维码...");let e=await Ct.getQrCodeInfo();return s.info("获取到二维码信息",e),e},async confirmScanQrcode(e){let t=U.alert({title:{text:"请扫描二维码登录",position:"center",html:false,style:""},content:{text:'<div id="bili-qrcode-canvas"></div>',html:true},btn:{ok:{enable:false},close:{enable:true,callback(r){a=true,r.close();}}},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},only:true,width:"310px",height:"365px",drag:true,dragLimit:true,style:`
            #bili-qrcode-canvas{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
            }
            `}),n=t.$shadowRoot.querySelector("#bili-qrcode-canvas"),i=new xt(n,{text:e.url,width:300,height:300,colorDark:"#000000",colorLight:"#ffffff",correctLevel:xt.CorrectLevel.H}),a=false;for(;;){if(a){s.error("用户关闭扫码登录弹窗、取消扫码登录");break}s.info("正在等待扫码登录...");let r=await Ct.poll(e.auth_code);if(r?.success){this.setAccessTokenInfo({access_token:r.accessKey,expireAt:r.accessKeyExpireAt}),s.info("扫码登录成功",r),w.success("扫码登录成功");break}else if(r?.action==="refresh"){s.info("刷新二维码"),w.info("刷新二维码");let o=await this.getQRCodeInfo();o&&(i.clear(),i.makeCode(o.url));}else if(r.action==="wait")r.message==="二维码已扫码未确认"&&(s.info("已扫码，等待确认..."),U.loading({$parent:n,content:{text:"已扫码，等待确认"},mask:{enable:true}}));else {s.error(r.message),w.error(r.message);break}await f.sleep(1500);}t.close();},generateExpireAt(e=6){return new Date().getTime()+1e3*60*60*24*30*e},setAccessTokenInfo(e){$e("bili-accessTokenInfo",e);},getAccessTokenInfo(){let e=Fe("bili-accessTokenInfo");return e&&e.expireAt>Date.now()?e:null},getAccessToken(){return this.getAccessTokenInfo()?.access_token||""}},Ne={web_host:"api.bilibili.com"},Vn={上海:["cn-sh-ct-01-06.bilivideo.com","cn-sh-ct-01-13.bilivideo.com","cn-sh-ct-01-15.bilivideo.com","cn-sh-ct-01-24.bilivideo.com","cn-sh-ct-01-36.bilivideo.com","cn-sh-office-bcache-01.bilivideo.com"],北京:["cn-bj-cc-03-14.bilivideo.com","cn-bj-cc-03-17.bilivideo.com","cn-bj-fx-01-01.bilivideo.com","cn-bj-fx-01-04.bilivideo.com","cn-bj-fx-01-05.bilivideo.com","cn-bj-se-01-05.bilivideo.com"],南京:["cn-jsnj-fx-02-05.bilivideo.com","cn-jsnj-fx-02-07.bilivideo.com","cn-jsnj-fx-02-10.bilivideo.com"],呼市:["cn-nmghhht-cm-01-11.bilivideo.com","cn-nmghhht-cu-01-01.bilivideo.com","cn-nmghhht-cu-01-08.bilivideo.com","cn-nmghhht-cu-01-09.bilivideo.com","cn-nmghhht-cu-01-12.bilivideo.com","cn-nmghhht-cu-01-15.bilivideo.com"],哈市:["cn-hljheb-cm-01-01.bilivideo.com","cn-hljheb-cm-01-03.bilivideo.com","cn-hljheb-ct-01-02.bilivideo.com","cn-hljheb-ct-01-03.bilivideo.com","cn-hljheb-ct-01-04.bilivideo.com","cn-hljheb-ct-01-07.bilivideo.com"],外建:["c0--cn-gotcha01.bilivideo.com","d0--cn-gotcha09.bilivideo.com","d1--cn-gotcha101.bilivideo.com","d1--cn-gotcha102.bilivideo.com","d1--cn-gotcha204-1.bilivideo.com","d1--cn-gotcha204-2.bilivideo.com","d1--cn-gotcha204-3.bilivideo.com","d1--cn-gotcha204-4.bilivideo.com","d1--cn-gotcha207.bilivideo.com","d1--cn-gotcha211.bilivideo.com","d1--cn-gotcha308.bilivideo.com","d1--ov-gotcha01.bilivideo.com","d1--ov-gotcha03.bilivideo.com","d1--ov-gotcha207.bilivideo.com","d1--ov-gotcha208.bilivideo.com","d1--ov-gotcha209.bilivideo.com","d1--ov-gotcha210.bilivideo.com","d1--p1--cn-gotcha04.bilivideo.com","d1--tf-gotcha04.bilivideo.com"],天津:["cn-tj-cm-02-01.bilivideo.com","cn-tj-cm-02-02.bilivideo.com","cn-tj-cm-02-04.bilivideo.com","cn-tj-cm-02-05.bilivideo.com","cn-tj-cm-02-06.bilivideo.com","cn-tj-cm-02-07.bilivideo.com","cn-tj-cu-01-02.bilivideo.com","cn-tj-cu-01-03.bilivideo.com","cn-tj-cu-01-04.bilivideo.com","cn-tj-cu-01-06.bilivideo.com","cn-tj-cu-01-07.bilivideo.com","cn-tj-cu-01-09.bilivideo.com","cn-tj-cu-01-10.bilivideo.com","cn-tj-cu-01-11.bilivideo.com","cn-tj-cu-01-12.bilivideo.com","cn-tj-cu-01-13.bilivideo.com"],广州:["cn-gdgz-cm-01-02.bilivideo.com","cn-gdgz-cm-01-10.bilivideo.com","cn-gdgz-fx-01-01.bilivideo.com","cn-gdgz-fx-01-02.bilivideo.com","cn-gdgz-fx-01-03.bilivideo.com","cn-gdgz-fx-01-04.bilivideo.com","cn-gdgz-fx-01-06.bilivideo.com","cn-gdgz-fx-01-08.bilivideo.com","cn-gdgz-fx-01-09.bilivideo.com","cn-gdgz-fx-01-10.bilivideo.com","cn-gdgz-gd-01-01.bilivideo.com"],成都:["cn-sccd-cm-03-01.bilivideo.com","cn-sccd-cm-03-02.bilivideo.com","cn-sccd-cm-03-05.bilivideo.com","cn-sccd-ct-01-02.bilivideo.com","cn-sccd-ct-01-08.bilivideo.com","cn-sccd-ct-01-10.bilivideo.com","cn-sccd-ct-01-17.bilivideo.com","cn-sccd-ct-01-18.bilivideo.com","cn-sccd-ct-01-19.bilivideo.com","cn-sccd-ct-01-20.bilivideo.com","cn-sccd-ct-01-21.bilivideo.com","cn-sccd-ct-01-22.bilivideo.com","cn-sccd-ct-01-23.bilivideo.com","cn-sccd-ct-01-24.bilivideo.com","cn-sccd-ct-01-25.bilivideo.com","cn-sccd-ct-01-26.bilivideo.com","cn-sccd-ct-01-27.bilivideo.com","cn-sccd-ct-01-29.bilivideo.com","cn-sccd-cu-01-02.bilivideo.com","cn-sccd-cu-01-03.bilivideo.com","cn-sccd-cu-01-04.bilivideo.com","cn-sccd-cu-01-05.bilivideo.com","cn-sccd-cu-01-06.bilivideo.com","cn-sccd-cu-01-07.bilivideo.com","cn-sccd-cu-01-09.bilivideo.com","cn-sccd-fx-01-01.bilivideo.com","cn-sccd-fx-01-06.bilivideo.com"],新疆:["cn-xj-cm-02-01.bilivideo.com","cn-xj-cm-02-03.bilivideo.com","cn-xj-cm-02-04.bilivideo.com","cn-xj-cm-02-06.bilivideo.com","cn-xj-ct-01-01.bilivideo.com","cn-xj-ct-01-02.bilivideo.com","cn-xj-ct-01-03.bilivideo.com","cn-xj-ct-01-04.bilivideo.com","cn-xj-ct-01-05.bilivideo.com","cn-xj-ct-02-02.bilivideo.com"],杭州:["cn-zjhz-cm-01-01.bilivideo.com","cn-zjhz-cm-01-04.bilivideo.com","cn-zjhz-cm-01-07.bilivideo.com","cn-zjhz-cm-01-12.bilivideo.com","cn-zjhz-cm-01-17.bilivideo.com","cn-zjhz-cu-01-01.bilivideo.com","cn-zjhz-cu-01-02.bilivideo.com","cn-zjhz-cu-01-05.bilivideo.com","cn-zjhz-cu-v-02.bilivideo.com"],武汉:["cn-hbwh-cm-01-01.bilivideo.com","cn-hbwh-cm-01-02.bilivideo.com","cn-hbwh-cm-01-04.bilivideo.com","cn-hbwh-cm-01-05.bilivideo.com","cn-hbwh-cm-01-06.bilivideo.com","cn-hbwh-cm-01-08.bilivideo.com","cn-hbwh-cm-01-09.bilivideo.com","cn-hbwh-cm-01-10.bilivideo.com","cn-hbwh-cm-01-12.bilivideo.com","cn-hbwh-cm-01-13.bilivideo.com","cn-hbwh-cm-01-17.bilivideo.com","cn-hbwh-cm-01-19.bilivideo.com","cn-hbwh-fx-01-02.bilivideo.com","cn-hbwh-fx-01-12.bilivideo.com","cn-hbwh-fx-01-13.bilivideo.com"],沈阳:["cn-lnsy-cm-01-01.bilivideo.com","cn-lnsy-cm-01-03.bilivideo.com","cn-lnsy-cm-01-04.bilivideo.com","cn-lnsy-cm-01-05.bilivideo.com","cn-lnsy-cm-01-06.bilivideo.com","cn-lnsy-cu-01-03.bilivideo.com","cn-lnsy-cu-01-04.bilivideo.com","cn-lnsy-cu-01-06.bilivideo.com"],泉州:["cn-fjqz-cm-01-01.bilivideo.com","cn-fjqz-cm-01-02.bilivideo.com","cn-fjqz-cm-01-03.bilivideo.com","cn-fjqz-cm-01-04.bilivideo.com","cn-fjqz-cm-01-05.bilivideo.com","cn-fjqz-cm-01-06.bilivideo.com","cn-fjqz-cm-01-08.bilivideo.com","cn-fjqz-cmcc-live-01.bilivideo.com"],海外:["upos-hz-mirrorakam.akamaized.net","upos-sz-mirroraliov.bilivideo.com"],深圳:["upos-sz-dynqn.bilivideo.com","upos-sz-estgcos.bilivideo.com","upos-sz-estghw.bilivideo.com","upos-sz-mirror08c.bilivideo.com","upos-sz-mirror08ct.bilivideo.com","upos-sz-mirror08h.bilivideo.com","upos-sz-mirroralib.bilivideo.com","upos-sz-mirroralibstar1.bilivideo.com","upos-sz-mirroraliov.bilivideo.com","upos-sz-mirrorbd.bilivideo.com","upos-sz-mirrorcf1ov.bilivideo.com","upos-sz-mirrorcosdisp.bilivideo.com","upos-sz-mirrorctos.bilivideo.com","upos-sz-mirrorhwdisp.bilivideo.com","upos-sz-originbstar.bilivideo.com","upos-sz-origincosgzhw.bilivideo.com","upos-sz-origincosv.bilivideo.com"],西安:["cn-sxxa-cm-01-01.bilivideo.com","cn-sxxa-cm-01-02.bilivideo.com","cn-sxxa-cm-01-04.bilivideo.com","cn-sxxa-cm-01-09.bilivideo.com","cn-sxxa-cm-01-12.bilivideo.com","cn-sxxa-ct-03-02.bilivideo.com","cn-sxxa-ct-03-03.bilivideo.com","cn-sxxa-ct-03-04.bilivideo.com","cn-sxxa-cu-02-01.bilivideo.com","cn-sxxa-cu-02-02.bilivideo.com"],郑州:["cn-hnzz-cm-01-01.bilivideo.com","cn-hnzz-cm-01-02.bilivideo.com","cn-hnzz-cm-01-03.bilivideo.com","cn-hnzz-cm-01-04.bilivideo.com","cn-hnzz-cm-01-05.bilivideo.com","cn-hnzz-cm-01-06.bilivideo.com","cn-hnzz-cm-01-09.bilivideo.com","cn-hnzz-cm-01-11.bilivideo.com","cn-hnzz-fx-01-01.bilivideo.com","cn-hnzz-fx-01-08.bilivideo.com"],香港:["cn-hk-eq-01-03.bilivideo.com","cn-hk-eq-01-09.bilivideo.com","cn-hk-eq-01-10.bilivideo.com","cn-hk-eq-01-12.bilivideo.com","cn-hk-eq-01-13.bilivideo.com","cn-hk-eq-01-14.bilivideo.com","cn-hk-eq-bcache-13.bilivideo.com","cn-hk-eq-bcache-16.bilivideo.com"]},At={...Vn,海外:["upos-hz-mirrorakam.akamaized.net","upos-sz-mirroraliov.bilivideo.com","upos-sz-mirrorcosov.bilivideo.com","upos-sz-mirrorhwov.bilivideo.com","cn-hk-eq-bcache-01.bilivideo.com"],"海外（东南亚）":["upos-sz-mirroralibstar1.bilivideo.com","upos-sz-mirrorcosbstar1.bilivideo.com","upos-sz-mirrorhwbstar1.bilivideo.com","upos-bstar1-mirrorakam.akamaized.net"],其它:["upos-tf-all-hw.bilivideo.com","upos-tf-all-tx.bilivideo.com"]},Ht=[{name:"不替换",host:""}];Object.keys(At).map(e=>{At[e].forEach(n=>{Ht.push({name:`${e} - ${n.trim().replace(/\.bilivideo\.com$/gi,"")}`,host:n});});});const se=Ht,ot={getBangumiProxyHost(){const e=[{name:"中国大陆",area:"",host:g.getValue("bili-bangumi-proxyApiServer-default","").trim()||Ne.web_host}];if(!g.getValue("bili-bangumi-unlockAreaLimit"))return e;const t=g.getValue("bili-bangumi-proxyApiServer-hk");f.isNotNull(t)&&e.push({name:"香港",area:"hk",host:t});const n=g.getValue("bili-bangumi-proxyApiServer-tw");f.isNotNull(n)&&e.push({name:"台湾",area:"tw",host:n});const i=g.getValue("bili-bangumi-proxyApiServer-tha-or-sea");return f.isNotNull(i)&&e.push({name:"泰国/东南亚",area:"th",host:i}),e},getSearchProxyHost(){const e=this.getBangumiProxyHost(),t=[],n=g.getValue("bili-search-proxyApiServer-hk");if(f.isNotNull(n))t.push({name:"香港",area:"hk",host:n});else {const r=e.find(o=>o.area==="hk");r&&t.push(r);}const i=g.getValue("bili-search-proxyApiServer-tw");if(f.isNotNull(i))t.push({name:"台湾",area:"tw",host:i});else {const r=e.find(o=>o.area==="tw");r&&t.push(r);}const a=g.getValue("bili-search-proxyApiServer-tha-or-sea");if(f.isNotNull(a))t.push({name:"泰国/东南亚",area:"th",host:a});else {const r=e.find(o=>o.area==="th");r&&t.push(r);}return t},getBangumiProxySearchParam(e={}){return {from_client:"BROWSER",drm_tech_type:2,module:"bangumi",area:e?.area||"",access_key:De.getAccessToken()}}},ee={findBetterCDN(...e){let t=[];e.forEach(i=>{Array.isArray(i)?t=t.concat(i.filter(a=>typeof a=="string")):typeof i=="string"&&t.push(i);});const n=t.find(i=>{if(new URL(i).host.startsWith("upos"))return i});return n||t[0]},replaceVideoCDN(e,t=false){const n=t?g.getValue("bili-video-uposServerSelect-audio"):g.getValue("bili-video-uposServerSelect");let i=t?g.getValue("bili-video-uposServerSelect-audio-own"):g.getValue("bili-video-uposServerSelect-own");return i=(i??"").trim(),this.replaceVideoCDNHost(e,n,i)},replaceBangumiVideoCDN(e,t=false){const n=t?g.getValue("bili-bangumi-uposServerSelect-audio"):g.getValue("bili-bangumi-uposServerSelect");let i=t?g.getValue("bili-bangumi-uposServerSelect-audio-own"):g.getValue("bili-bangumi-uposServerSelect-own");return i=(i??"").trim(),this.replaceVideoCDNHost(e,n,i)},replaceLiveVideoCDN(e){const t=g.getValue("bili-live-uposServerSelect");let n=g.getValue("bili-live-uposServerSelect-own");return n=(n??"").trim(),this.replaceVideoCDNHost(e,t,n)},replaceVideoCDNHost(e,t,n){try{const i=new URL(e),a=i.host;if(f.isNotNull(n))return a!==n?e:(i.host=n,s.info(`原Host为：${a}，替换CDN为自定义：${n}`),i.toString());const r=se.find(l=>l.host===t);if(f.isNull(r)||f.isNull(r.host))return e;const o=r.host;return o===i.host?e:(i.host=o,s.info(`原Host为：${a}，替换CDN为：${JSON.stringify(r)}`),i.toString())}catch(i){return s.error("视频upos替换失败",i),e}}},Mn={$flag:{isInitCSS:false},$data:{originToast:"mplayer-toast",showClassName:"mplayer-show",prefix:"mplayer-toast-gm"},$el:{get $mplayer(){return L(".mplayer")}},toast(e){typeof e=="string"&&(e={text:e}),this.initCSS();let t=e.parent??this.$el.$mplayer;if(!t)throw new TypeError("toast parent is null");this.mutationMPlayerOriginToast(t);let n=u.createElement("div",{"data-from":"gm"});if(u.addClass(n,this.$data.prefix),u.addClass(n,this.$data.showClassName),e.showCloseBtn){let r=u.createElement("div",{className:this.$data.prefix+"-close",innerHTML:`
                    <span class="bp-svgicon">
                        <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.47 4.47a.75.75 0 011.06 0l5.541 5.54 5.54-5.54a.75.75 0 011.061 1.06l-5.54 5.541 5.54 5.54a.75.75 0 01.073.977l-.073.084a.75.75 0 01-1.06 0l-5.541-5.54-5.54 5.54a.75.75 0 01-1.061-1.06l5.54-5.541-5.54-5.54a.75.75 0 01-.073-.977z" fill="#FEFEFE" fill-rule="evenodd">
                            </path>
                        </svg>
                    </span>
                `});n.appendChild(r),u.on(r,"click",o=>{u.preventEvent(o),this.closeToast(n);});}let i=u.createElement("span",{className:this.$data.prefix+"-text",innerText:e.text});if(n.appendChild(i),typeof e.timeText=="string"&&e.timeText.trim()!=""){let r=u.createElement("span",{className:this.$data.prefix+"-time",innerText:e.timeText});n.appendChild(r);}if(typeof e.jumpText=="string"&&e.jumpText.trim()!=""){let r=u.createElement("span",{className:this.$data.prefix+"-jump",innerText:e.jumpText});n.appendChild(r),u.on(r,"click",o=>{typeof e.jumpClickCallback=="function"&&(u.preventEvent(o),e.jumpClickCallback(o));});}this.setTransitionendEvent(n);let a=typeof e.timeout=="number"&&!isNaN(e.timeout)?e.timeout:3500;return Array.from(W(".mplayer-toast")).forEach(r=>{r.hasAttribute("data-is-set-transitionend")||(r.setAttribute("data-is-set-transitionend","true"),r.textContent?.includes("记忆你上次看到")&&setTimeout(()=>{let o=r.querySelector(".mplayer-toast-close");o?o.click():r.remove();},3e3),this.setTransitionendEvent(r));}),t.appendChild(n),setTimeout(()=>{this.closeToast(n);},a),{$toast:n,close:()=>{this.closeToast(n);}}},initCSS(){this.$flag.isInitCSS||(this.$flag.isInitCSS=true,M(`
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

		`));},mutationMPlayerOriginToast(e){let t=this.$el.$mplayer;t&&(t.hasAttribute("data-mutation")||(s.success("添加观察器，动态更新toast的位置"),t.setAttribute("data-mutation","gm"),f.mutationObserver(t,{config:{subtree:true,childList:true},immediate:true,callback:()=>{this.updatePageToastBottom();}})));},updatePageToastBottom(){let e=Array.from(W(`.${this.$data.prefix}`)).concat(Array.from(W(".".concat(this.$data.originToast).concat(".").concat(this.$data.showClassName))));if(e.length){let t=e.length-1;const n=46;e.forEach((i,a)=>{let r=n+n*(t-a);i.setAttribute("data-transition","move"),i.style.bottom=r+"px";});}},closeToast(e){e.classList.remove(this.$data.showClassName);},getTransitionendEventNameList(){return ["webkitTransitionEnd","mozTransitionEnd","MSTransitionEnd","otransitionend","transitionend"]},setTransitionendEvent(e){let t=this,n=this.getTransitionendEventNameList();u.on(e,n,function(i){let a=e.getAttribute("data-transition");if(!e.classList.contains(t.$data.showClassName)){e.remove();return}if(a==="move"){e.removeAttribute("data-transition");return}},{capture:true});}},ze={"240P 极速":6,"360P 流畅":16,"480P 清晰":32,"720P 高清":64,"720P60 高帧率":74,"1080P 高清":80,"1080P+ 高码率":112,"1080P60 高帧率":116,"4K 超清":120,"HDR 真彩色":125,杜比视界:126,"8K 超高清":127},Rn={};Object.keys(ze).forEach(e=>{let t=Reflect.get(ze,e);Reflect.set(Rn,t,e);});const ke={_ajaxHooker_:null,get ajaxHooker(){return ke._ajaxHooker_==null&&(s.info("启用ajaxHooker拦截网络"),ke._ajaxHooker_=f.ajaxHooker()),ke._ajaxHooker_}},Nn={$flag:{is_hook_video_playurl:false,is_hook_bangumi_html5:false,is_hook_live_playurl:false},init(){H.isLive()&&g.execMenuOnce("bili-live-cdn-hook",()=>{this.hook_live_playurl();});},hook_video_playurl(){this.$flag.is_hook_video_playurl||(this.$flag.is_hook_video_playurl=true,ke.ajaxHooker.hook(e=>{if(e.url.includes("//api.bilibili.com/x/player/wbi/playurl")){e.url.startsWith("//")&&(e.url=window.location.protocol+e.url);let t=new URL(e.url);if(t.searchParams.set("platform","html5"),t.searchParams.set("qn",ze["1080P60 高帧率"].toString()),t.searchParams.set("high_quality","1"),t.searchParams.set("fnver","0"),t.searchParams.set("fourk","1"),t.searchParams.has("__t")){t.searchParams.delete("__t");return}e.url=t.toString(),e.response=n=>{let i=f.toJSON(n.responseText),a=i?.data?.quality,r=i?.data?.support_formats;if(s.info("当前解锁的quality值："+a),a&&r){let o=r.find(l=>l.quality==a);if(o){let l=o.new_description||o.display_desc;s.info("成功解锁画质 "+l),Mn.toast(`成功解锁画质 ${l}`);}}};}}));},hook_bangumi_html5(){this.$flag.is_hook_bangumi_html5||(this.$flag.is_hook_bangumi_html5=true,ke.ajaxHooker.hook(e=>{if(e.url.includes("//api.bilibili.com/pgc/player/web/playurl/html5")){e.url.startsWith("//")&&(e.url=window.location.protocol+e.url);let t=new URL(e.url);t.pathname="/pgc/player/web/playurl",t.searchParams.delete("bsource"),t.searchParams.set("qn",ze["1080P60 高帧率"].toString()),t.searchParams.set("fnval","1"),t.searchParams.set("fnver","0"),t.searchParams.set("fourk","1"),t.searchParams.set("from_client","BROWSER"),t.searchParams.set("drm_tech_type","2"),e.url=t.toString(),e.response=n=>{let a=f.toJSON(n.responseText).result;if(s.info("当前解锁的quality值："+a.quality),a.quality&&a.support_formats){let r=a.support_formats.find(o=>o.quality==a.quality);r&&s.info("当前已解锁的画质："+r.new_description||r.display_desc);}};}}));},hook_live_playurl(){this.$flag.is_hook_live_playurl||(this.$flag.is_hook_live_playurl=true,ke.ajaxHooker.hook(e=>{if(!g.getValue("bili-live-cdn-hook")||e.url.startsWith("data:"))return;const t=te.fixUrl(e.url);let n=new URL(t);n.pathname.startsWith("/xlive/web-room/v2/index/getRoomPlayInfo")?(n.searchParams.set("qn","30000"),e.url=n.toString(),e.response=a=>{const r=typeof a.responseText=="string"?f.toJSON(a.responseText):a.json,o=r?.data?.playurl_info?.playurl?.stream;Array.isArray(o)?o.forEach(l=>{const c=l?.format;Array.isArray(c)&&c.forEach(p=>{const d=p?.codec;Array.isArray(d)&&(p?.format_name,d.forEach(m=>{m?.codec_name;const h=m?.url_info;Array.isArray(h)&&h.forEach(v=>{const C=v?.host;typeof C=="string"&&(v.host=ee.replaceLiveVideoCDN(C));});}));});}):s.error("直播请求信息中返回的steam不是数组",r);}):n.hostname.endsWith(".bilivideo.com")&&(e.url=ee.replaceLiveVideoCDN(t));}));}},Ze={async nav(e=true){const t=await Q.get("https://api.bilibili.com/x/web-interface/nav?web_location=333.401",{fetch:true,responseType:"json",allowInterceptConfig:false});if(!t.status){s.error(["获取导航栏用户信息失败，请求异常",t]);return}const n=f.toJSON(t.data.responseText);if(e&&!re.isWebApiSuccess(n)){s.error(n),w.error("获取导航栏用户信息失败");return}return n.data},async space(e,t=""){const n=await Q.get("https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/space",{data:{host_mid:e,offset:t},fetch:true});if(!n.status)return;const i=f.toJSON(n.data.responseText);if(re.isWebApiSuccess(i))return i.data},async following(e,t=1,n=50){const i=await Q.get("https://api.bilibili.com/x/relation/followings",{data:{vmid:e,ps:n,pn:t},fetch:true});if(!i.status)return;const a=f.toJSON(i.data.responseText);return re.isWebApiSuccess(a)?a.data:a.message}},Xe={$data:{isLogin:new Promise(()=>false)},$flag:{isSetQueryLoginStatus:false,isQueryLoginStatus:false},init(){this.resetLoginStatus();},resetLoginStatus(){if(this.$flag.isSetQueryLoginStatus)return;this.$flag.isSetQueryLoginStatus=true;let e=false;this.$data.isLogin=new Promise(async t=>{if(!this.$flag.isQueryLoginStatus){this.$flag.isQueryLoginStatus=true;let n=await Ze.nav(false);n&&n.isLogin&&(e=true);}t(e);});}};function zn(e){const t=23442827791579n,n=2251799813685247n,i=58n,r=["B","V",1,"","","","","","","","",""].length,o="FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf".split(""),l=[0,1,2,9,7,5,6,4,8,3,10,11];let c=0n;for(let p=3;p<r;p++)c=c*i+BigInt(o.indexOf(e[l[p]]));return `${c&n^t}`}const On=async e=>{async function t(n){const i=await Ze.nav(false);if(!i)return;const{img_url:a,sub_url:r}=i.wbi_img,o=a.slice(a.lastIndexOf("/")+1,a.lastIndexOf(".")),l=r.slice(r.lastIndexOf("/")+1,r.lastIndexOf(".")),c=o+l,d=[46,47,18,2,53,8,23,32,15,50,10,31,58,3,45,35,27,43,5,49,33,9,42,19,29,28,14,39,12,38,41,13,37,48,7,16,24,55,40,61,26,17,0,1,60,51,30,4,22,25,54,21,56,59,6,63,57,62,11,36,20,34,44,52].map(v=>c[v]).join("").slice(0,32),m=Object.keys(n).sort().map(v=>{const C=n[v].toString().replace(/[!'()*]/g,"");return `${encodeURIComponent(v)}=${encodeURIComponent(C)}`}).join("&"),h=Mt(m+d);return m+"&w_rid="+h}return await t(e)},Pe=typeof P>"u"?window:P,fe={LATEST:0,HOT:2},Pn={$data:{oid:null,createrID:void 0,commentType:null,currentSortType:fe.HOT,replyPool:{},nextOffset:"",dynamicDetail:{oid:null,commentType:null}},$el:{replyList:null,navSort:null,hotSort:null,timeSort:null,totalReply:null,replyWrapper:null},$flag:{isInitCSS:false,isHookNetwork:false},async init(e){this.initData(),this.networkHook(),this.addStyle(),this.setupStandardCommentContainer(e),await new Promise(t=>{u.wait(()=>{if(H.isVideo()){const n=Pe.location.pathname.replace("/video/","").replace("/","");n.startsWith("av")&&(this.$data.oid=n.slice(2)),n.startsWith("BV")&&(this.$data.oid=zn(n)),this.$data.commentType=1;}else H.isDynamic()?(this.$data.oid=this.$data.dynamicDetail?.oid,this.$data.commentType=this.$data.dynamicDetail?.commentType):H.isOpus()&&(this.$data.oid=Pe?.__INITIAL_STATE__?.opus?.detail?.basic?.comment_id_str,this.$data.commentType=Pe?.__INITIAL_STATE__?.opus?.detail?.basic?.comment_type);return this.$data.oid&&this.$data.commentType?(t(null),{success:true,data:{}}):{success:false,data:null}},0);}),await this.enableSwitchingSortType(e),await this.loadFirstPagination(e);},initData(){this.$data.oid=null,this.$data.createrID=void 0,this.$data.commentType=null,this.$data.replyPool=null,this.$data.replyPool={},this.$data.nextOffset="",this.$data.currentSortType=fe.HOT,this.$data.dynamicDetail={oid:null,commentType:null},Object.keys(this.$el).forEach(e=>{const t=Reflect.get(this.$el,e);document.contains(t)&&Reflect.set(this.$el,e,null);});},networkHook(){this.$flag.isHookNetwork||H.isDynamic()&&ke.ajaxHooker.hook(e=>{const t=e.url;if(typeof t=="string"&&t.includes("reply/wbi/main")){const{searchParams:n}=new URL(`${t.startsWith("//")?"https:":""}${t}`);this.$data.dynamicDetail={oid:n.get("oid"),commentType:n.get("type")};}});},async addStyle(){if(this.$flag.isInitCSS)return;this.$flag.isInitCSS=true,await u.onReady(),M(`
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
    `),M(`
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
    `);const e=document.createElement("style");e.textContent=`
            
          `,M(`
    .reply-item .root-reply-avatar .avatar .bili-avatar {
        width: 40px;
        height: 40px;
    }

    .sub-reply-item .sub-reply-avatar .avatar .bili-avatar {
        width: 24px;
        height: 24px;
    }
    `),M(`
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
    `);const t=document.createElement("style");t.textContent=`
            
          `,M(`
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
    `);},setupStandardCommentContainer(e){u.html(e,`
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
    `),this.$el.replyList=e.querySelector(".reply-list"),this.$el.navSort=e.querySelector(".comment-container .reply-header .nav-sort"),this.$el.hotSort=this.$el.navSort.querySelector(".hot-sort"),this.$el.timeSort=this.$el.navSort.querySelector(".time-sort"),this.$el.totalReply=e.querySelector(".comment-container .reply-header .total-reply"),this.$el.replyWrapper=e.querySelector(".comment-container .reply-warp");},enableSwitchingSortType(e){u.addClass(this.$el.navSort,"hot"),u.removeClass(this.$el.navSort,"time"),u.on(this.$el.hotSort,"click",t=>{u.preventEvent(t),this.$data.currentSortType!==fe.HOT&&(this.$data.currentSortType=fe.HOT,u.addClass(this.$el.navSort,"hot"),u.removeClass(this.$el.navSort,"time"),e.scrollTo(0,0),this.loadFirstPagination(e));}),u.on(this.$el.timeSort,"click",t=>{u.preventEvent(t),this.$data.currentSortType!==fe.LATEST&&(this.$data.currentSortType=fe.LATEST,u.addClass(this.$el.navSort,"time"),u.removeClass(this.$el.navSort,"hot"),e.scrollTo(0,0),this.loadFirstPagination(e));});},async loadFirstPagination(e){this.$data.nextOffset="";const{data:t,code:n}=await this.getPaginationData(1);if(this.$data.createrID=t.upper.mid,u.empty(this.$el.replyList),this.$data.replyPool={},u.remove(".comment-container .reply-warp .no-more-replies-info"),u.remove(".comment-container .reply-warp .anchor-for-loading"),n!==0){const a=n===12061?"UP主已关闭评论区":"无法从API获取评论数据";u.html(this.$el.replyList,`
        <p style="padding: 100px 0; text-align: center; color: #999;">${a}</p>
      `);return}const i=parseInt(t?.cursor?.all_count)||0;if(u.text(this.$el.totalReply,i),t?.cursor?.name?.includes("精选")&&u.html(this.$el.navSort,`
            <div class="selected-sort">精选评论</div>
        `),t.top_replies&&t.top_replies.length!==0){const a=t.top_replies[0];this.appendReplyItem(a,true);}for(const a of t.replies)this.appendReplyItem(a);if(t.replies.length===0||t.cursor.is_end){const a=u.createElement("p",{className:"no-more-replies-info",textContent:"没有更多评论"},{style:"padding-bottom: 100px; text-align: center; color: #999;"});u.append(this.$el.replyWrapper,a);return}this.addAnchor();},async getPaginationData(e){const t={pagination_str:JSON.stringify({offset:this.$data.nextOffset||""}),oid:this.$data.oid,type:this.$data.commentType,wts:parseInt((Date.now()/1e3).toString())};this.$data.currentSortType===fe.HOT?(Reflect.set(t,"mode",3),this.$data.nextOffset):this.$data.currentSortType===fe.LATEST&&Reflect.set(t,"mode",2);const n=await Xe.$data.isLogin,i=await Q.get(`https://api.bilibili.com/x/v2/reply/wbi/main?${await On(t)}`,{fetch:!n,fetchInit:{credentials:"same-origin"},anonymous:!n}),a=f.toJSON(i.data.responseText);return this.$data.nextOffset=a.data.cursor?.pagination_reply?.next_offset||"",a},appendReplyItem(e,t){if(typeof this.$data.replyPool=="object"&&this.$data.replyPool!=null&&this.$data.replyPool[e.rpid])return;const n=u.createElement("div",{className:"reply-item",innerHTML:`
            <div class="root-reply-container">
          <a class="root-reply-avatar" href="https://space.bilibili.com/${e.mid}" target="_blank" data-user-id="${e.mid}" data-root-reply-id="${e.rpid}">
            <div class="avatar">
              <div class="bili-avatar">
                <img class="bili-avatar-img bili-avatar-face bili-avatar-img-radius" data-src="${e.member.avatar}" alt="" src="${e.member.avatar}">
                <span class="bili-avatar-icon bili-avatar-right-icon bili-avatar-size-40"></span>
              </div>
            </div>
          </a>
          <div class="content-warp">
            <div class="user-info">
              <a class="user-name" href="https://space.bilibili.com/${e.mid}" target="_blank" data-user-id="${e.mid}" data-root-reply-id="${e.rpid}" style="color: ${e.member.vip.nickname_color?e.member.vip.nickname_color:"#61666d"}">${e.member.uname}</a>
              <span style="height: 14px; padding: 0 2px; margin-right: 4px; display: flex; align-items: center; font-size: 10px; color: white; border-radius: 2px; background-color: ${this.getMemberLevelColor(e.member.level_info.current_level)};">LV${e.member.level_info.current_level}</span>
              ${this.$data.createrID===e.mid?'<i class="svg-icon up-web up-icon" style="width: 20px; height: 24px; transform: scale(1.03);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="4" width="24" height="16" rx="2" fill="#FF6699"></rect><path d="M5.7 8.36V12.79C5.7 13.72 5.96 14.43 6.49 14.93C6.99 15.4 7.72 15.64 8.67 15.64C9.61 15.64 10.34 15.4 10.86 14.92C11.38 14.43 11.64 13.72 11.64 12.79V8.36H10.47V12.81C10.47 13.43 10.32 13.88 10.04 14.18C9.75 14.47 9.29 14.62 8.67 14.62C8.04 14.62 7.58 14.47 7.3 14.18C7.01 13.88 6.87 13.43 6.87 12.81V8.36H5.7ZM13.0438 8.36V15.5H14.2138V12.76H15.9838C17.7238 12.76 18.5938 12.02 18.5938 10.55C18.5938 9.09 17.7238 8.36 16.0038 8.36H13.0438ZM14.2138 9.36H15.9138C16.4238 9.36 16.8038 9.45 17.0438 9.64C17.2838 9.82 17.4138 10.12 17.4138 10.55C17.4138 10.98 17.2938 11.29 17.0538 11.48C16.8138 11.66 16.4338 11.76 15.9138 11.76H14.2138V9.36Z" fill="white"></path></svg></i>':""}
            </div>
            <div class="root-reply">
              <span class="reply-content-container root-reply" style="padding-bottom: 8px;">
                <span class="reply-content">${t?'<span class="top-icon" style="top: -1px;">置顶</span>':""}${e.content.pictures?'<div class="note-prefix" style="transform: translateY(-1px);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="#BBBBBB"><path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25Zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25ZM3.5 6.25a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Zm.75 2.25h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5Z"></path></svg><div style="margin-left: 3px;">笔记</div></div>':""}${this.getConvertedMessage(e.content)}</span>
              </span>
              ${e.content.pictures?`
                <div class="image-exhibition" style="margin-top: 0; margin-bottom: 8px;">
                  <div class="preview-image-container" style="display: flex; width: 300px;">
                    ${this.getImageItems(e.content.pictures)}
                  </div>
                </div>
                `:""}
              <div class="reply-info">
                <span class="reply-time" style="margin-right: 20px;">${this.getFormattedTime(e.ctime)}</span>
                <span class="reply-like">
                  <i class="svg-icon like use-color like-icon" style="width: 16px; height: 16px;"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3323" width="200" height="200"><path d="M594.176 151.168a34.048 34.048 0 0 0-29.184 10.816c-11.264 13.184-15.872 24.064-21.504 40.064l-1.92 5.632c-5.632 16.128-12.8 36.864-27.648 63.232-25.408 44.928-50.304 74.432-86.208 97.024-23.04 14.528-43.648 26.368-65.024 32.576v419.648a4569.408 4569.408 0 0 0 339.072-4.672c38.72-2.048 72-21.12 88.96-52.032 21.504-39.36 47.168-95.744 63.552-163.008a782.72 782.72 0 0 0 22.528-163.008c0.448-16.832-13.44-32.256-35.328-32.256h-197.312a32 32 0 0 1-28.608-46.336l0.192-0.32 0.64-1.344 2.56-5.504c2.112-4.8 5.12-11.776 8.32-20.16 6.592-17.088 13.568-39.04 16.768-60.416 4.992-33.344 3.776-60.16-9.344-84.992-14.08-26.688-30.016-33.728-40.512-34.944zM691.84 341.12h149.568c52.736 0 100.864 40.192 99.328 98.048a845.888 845.888 0 0 1-24.32 176.384 742.336 742.336 0 0 1-69.632 178.56c-29.184 53.44-84.48 82.304-141.76 85.248-55.68 2.88-138.304 5.952-235.712 5.952-96 0-183.552-3.008-244.672-5.76-66.432-3.136-123.392-51.392-131.008-119.872a1380.672 1380.672 0 0 1-0.768-296.704c7.68-72.768 70.4-121.792 140.032-121.792h97.728c13.76 0 28.16-5.504 62.976-27.456 24.064-15.104 42.432-35.2 64.512-74.24 11.904-21.184 17.408-36.928 22.912-52.8l2.048-5.888c6.656-18.88 14.4-38.4 33.28-60.416a97.984 97.984 0 0 1 85.12-32.768c35.264 4.096 67.776 26.88 89.792 68.608 22.208 42.176 21.888 84.864 16 124.352a342.464 342.464 0 0 1-15.424 60.544z m-393.216 477.248V405.184H232.96c-40.448 0-72.448 27.712-76.352 64.512a1318.912 1318.912 0 0 0 0.64 282.88c3.904 34.752 32.96 61.248 70.4 62.976 20.8 0.96 44.8 1.92 71.04 2.816z" p-id="3324" fill="#9499a0"></path></svg></i>
                  <span>${e.like}</span>
                </span>
              </div>
              <div class="reply-tag-list">
                ${e.card_label?e.card_label.reduce((o,l)=>o+`<span class="reply-tag-item ${l.text_content==="热评"?"reply-tag-hot":""} ${l.text_content==="UP主觉得很赞"?"reply-tag-liked":""}" style="font-size: 12px; background-color: ${l.label_color_day}; color: ${l.text_color_day};">${l.text_content}</span>`,""):""}
              </div>
            </div>
          </div>
        </div>
        <div class="sub-reply-container">
          <div class="sub-reply-list">
            ${this.getSubReplyItems(e.replies)}
            ${e.rcount>(e.replies||[]).length?`
              <div class="view-more" style="padding-left: 8px; font-size: 13px; color: #9499A0;">
                <div class="view-more-default">
                  <span>共${e.rcount}条回复, </span>
                  <span class="view-more-btn" style="cursor: pointer;">点击查看</span>
                </div>
              </div>
              `:""}
          </div>
        </div>
        `});u.append(this.$el.replyList,n),this.$data.replyPool[e.rpid_str]=true;const i=n.querySelector(".preview-image-container");i&&new vn(i,{title:false,toolbar:false,tooltip:false,keyboard:false});const a=n.querySelector(".sub-reply-list"),r=n.querySelector(".view-more-btn");r&&u.on(r,"click",()=>{this.loadPaginatedSubReplies(e.rpid,a,e.rcount,1);});},getFormattedTime(e){const t=new Date(e*1e3),n=t.getFullYear(),i=(t.getMonth()+1).toString().padStart(2,"0"),a=t.getDate().toString().padStart(2,"0"),r=t.getHours().toString().padStart(2,"0"),o=t.getMinutes().toString().padStart(2,"0");return `${n}-${i}-${a} ${r}:${o}`},getMemberLevelColor(e){return {0:"#C0C0C0",1:"#BBBBBB",2:"#8BD29B",3:"#7BCDEF",4:"#FEBB8B",5:"#EE672A",6:"#F04C49"}[e]},getConvertedMessage(e){let t=e.message;const n=["https://www.bilibili.com/video/av","https://b23.tv/mall-"];if(e.vote&&e.vote.deleted===false){const i=`<a class="jump-link normal" href="${e.vote.url}" target="_blank" noopener noreferrer>${e.vote.title}</a>`;n.push(i),t=t.replace(`{vote:${e.vote.id}}`,i);}if(e.emote)for(const[i,a]of Object.entries(e.emote)){const r=`<img class="emoji-${["","small","large"][a.meta.size]}" src="${a.url}" alt="${i}">`;n.push(r),t=t.replaceAll(i,r);}if(t=t.replaceAll(/(\d{1,2}[:：]){1,2}\d{1,2}/g,i=>{if(i=i.replaceAll("：",":"),!H.isVideo())return i;const a=i.split(":");if(a.some(l=>parseInt(l)>=60))return i;let r;if(a.length===2?r=parseInt(a[0])*60+parseInt(a[1]):a.length===3&&(r=parseInt(a[0])*3600+parseInt(a[1])*60+parseInt(a[2])),Number.isNaN(r))return i;const o=`<a class="jump-link video-time" onclick="(async () => {
          // jump to exact time
          const videoElement = document.querySelector('video.gsl-video');
          videoElement.currentTime = ${r};
  
          // close comment module
          document.querySelector('.close-comment-module-btn').click();
  
          // scroll to top
          window.scrollTo(0, 0);
  
          // play video if it is paused
          if (videoElement.paused) videoElement.play();
        })()">${i}</a>`;return n.push(o),o}),e.at_name_to_mid)for(const[i,a]of Object.entries(e.at_name_to_mid)){const r=`<a class="jump-link user" data-user-id="${a}" href="https://space.bilibili.com/${a}" target="_blank" noopener noreferrer>@${i}</a>`;n.push(r),t=t.replaceAll(`@${i}`,r);}if(Object.keys(e.jump_url).length){const i=[].concat(Object.entries(e.jump_url).filter(a=>a[0].startsWith("https://")),Object.entries(e.jump_url).filter(a=>!a[0].startsWith("https://")));for(const[a,r]of i){const o=a.startsWith("BV")||/^av\d+$/.test(a)?`https://www.bilibili.com/video/${a}`:r.pc_url||a;if(o.includes("search.bilibili.com")&&n.join("").includes(a))continue;const l=`<img class="icon normal" src="${r.prefix_icon}" style="${r.extra&&r.extra.is_word_search&&"width: 12px;"}"><a class="jump-link normal" href="${o}" target="_blank" noopener noreferrer>${r.title}</a>`;n.push(l),t=t.replaceAll(a,l);}}return t},getImageItems(e){let t="width: 84px; height: 84px;";e.length===1&&(t="max-width: 260px; max-height: 180px;"),e.length===2&&(t="width: 128px; height: 128px;");let n="";for(const i of e)n+=`<div class="image-item-wrap" style="margin-top: 4px; margin-right: 4px; cursor: zoom-in;"><img src="${i.img_src}" style="border-radius: 4px; ${t}"></div>`;return n},getSubReplyItems(e){if(!(e instanceof Array))return "";let t="";for(const n of e)t+=`
          <div class="sub-reply-item">
            <div class="sub-user-info">
              <a class="sub-reply-avatar" href="https://space.bilibili.com/${n.mid}" target="_blank" data-user-id="${n.mid}" data-root-reply-id="${n.rpid}">
                <div class="avatar">
                  <div class="bili-avatar">
                    <img class="bili-avatar-img bili-avatar-face bili-avatar-img-radius" data-src="${n.member.avatar}" alt="" src="${n.member.avatar}">
                    <span class="bili-avatar-icon bili-avatar-right-icon  bili-avatar-size-24"></span>
                  </div>
                </div>
              </a>
              <a class="sub-user-name" href="https://space.bilibili.com/${n.mid}" target="_blank" data-user-id="${n.mid}" data-root-reply-id="${n.rpid}" style="color: ${n.member.vip.nickname_color?n.member.vip.nickname_color:"#61666d"}">${n.member.uname}</a>
              <span style="height: 14px; padding: 0 2px; margin-right: 4px; display: flex; align-items: center; font-size: 10px; color: white; border-radius: 2px; background-color: ${this.getMemberLevelColor(n.member.level_info.current_level)};">LV${n.member.level_info.current_level}</span>
              ${this.$data.createrID===n.mid?'<i class="svg-icon up-web up-icon" style="width: 20px; height: 24px; transform: scale(1.03);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="4" width="24" height="16" rx="2" fill="#FF6699"></rect><path d="M5.7 8.36V12.79C5.7 13.72 5.96 14.43 6.49 14.93C6.99 15.4 7.72 15.64 8.67 15.64C9.61 15.64 10.34 15.4 10.86 14.92C11.38 14.43 11.64 13.72 11.64 12.79V8.36H10.47V12.81C10.47 13.43 10.32 13.88 10.04 14.18C9.75 14.47 9.29 14.62 8.67 14.62C8.04 14.62 7.58 14.47 7.3 14.18C7.01 13.88 6.87 13.43 6.87 12.81V8.36H5.7ZM13.0438 8.36V15.5H14.2138V12.76H15.9838C17.7238 12.76 18.5938 12.02 18.5938 10.55C18.5938 9.09 17.7238 8.36 16.0038 8.36H13.0438ZM14.2138 9.36H15.9138C16.4238 9.36 16.8038 9.45 17.0438 9.64C17.2838 9.82 17.4138 10.12 17.4138 10.55C17.4138 10.98 17.2938 11.29 17.0538 11.48C16.8138 11.66 16.4338 11.76 15.9138 11.76H14.2138V9.36Z" fill="white"></path></svg></i>':""}
            </div>
            <span class="reply-content-container sub-reply-content">
              <span class="reply-content">${this.getConvertedMessage(n.content)}</span>
            </span>
            <div class="sub-reply-info" style="margin: 4px 0;">
              <span class="sub-reply-time" style="margin-right: 20px;">${this.getFormattedTime(n.ctime)}</span>
              <span class="sub-reply-like">
                <i class="svg-icon like use-color sub-like-icon" style="width: 16px; height: 16px;"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3323" width="200" height="200"><path d="M594.176 151.168a34.048 34.048 0 0 0-29.184 10.816c-11.264 13.184-15.872 24.064-21.504 40.064l-1.92 5.632c-5.632 16.128-12.8 36.864-27.648 63.232-25.408 44.928-50.304 74.432-86.208 97.024-23.04 14.528-43.648 26.368-65.024 32.576v419.648a4569.408 4569.408 0 0 0 339.072-4.672c38.72-2.048 72-21.12 88.96-52.032 21.504-39.36 47.168-95.744 63.552-163.008a782.72 782.72 0 0 0 22.528-163.008c0.448-16.832-13.44-32.256-35.328-32.256h-197.312a32 32 0 0 1-28.608-46.336l0.192-0.32 0.64-1.344 2.56-5.504c2.112-4.8 5.12-11.776 8.32-20.16 6.592-17.088 13.568-39.04 16.768-60.416 4.992-33.344 3.776-60.16-9.344-84.992-14.08-26.688-30.016-33.728-40.512-34.944zM691.84 341.12h149.568c52.736 0 100.864 40.192 99.328 98.048a845.888 845.888 0 0 1-24.32 176.384 742.336 742.336 0 0 1-69.632 178.56c-29.184 53.44-84.48 82.304-141.76 85.248-55.68 2.88-138.304 5.952-235.712 5.952-96 0-183.552-3.008-244.672-5.76-66.432-3.136-123.392-51.392-131.008-119.872a1380.672 1380.672 0 0 1-0.768-296.704c7.68-72.768 70.4-121.792 140.032-121.792h97.728c13.76 0 28.16-5.504 62.976-27.456 24.064-15.104 42.432-35.2 64.512-74.24 11.904-21.184 17.408-36.928 22.912-52.8l2.048-5.888c6.656-18.88 14.4-38.4 33.28-60.416a97.984 97.984 0 0 1 85.12-32.768c35.264 4.096 67.776 26.88 89.792 68.608 22.208 42.176 21.888 84.864 16 124.352a342.464 342.464 0 0 1-15.424 60.544z m-393.216 477.248V405.184H232.96c-40.448 0-72.448 27.712-76.352 64.512a1318.912 1318.912 0 0 0 0.64 282.88c3.904 34.752 32.96 61.248 70.4 62.976 20.8 0.96 44.8 1.92 71.04 2.816z" p-id="3324" fill="#9499a0"></path></svg></i>
                <span>${n.like}</span>
              </span>
            </div>
          </div>
        `;return t},async loadPaginatedSubReplies(e,t,n,i){const a={oid:this.$data.oid,type:this.$data.commentType,root:e,ps:10,pn:i,web_location:333.788},r=await Xe.$data.isLogin,o=await Q.get(`https://api.bilibili.com/x/v2/reply/reply?${f.toSearchParamsStr(a)}`,{allowInterceptConfig:false,fetch:!r,fetchInit:{credentials:"same-origin"},anonymous:!r});if(!o.status){s.error(o),w.error("请求异常，获取评论的回复失败");return}const l=f.toJSON(o.data.responseText);if(l===-352){w.error("请登录后再进行操作"),console.error("you should login first",o);return}const c=l.data;t.innerHTML=this.getSubReplyItems(c.replies),this.addSubReplyPageSwitcher(e,t,n,i),t.parentElement.parentElement.scrollIntoView({behavior:"instant"}),Pe.scrollTo(0,document.documentElement.scrollTop-60);},addSubReplyPageSwitcher(e,t,n,i){if(n<=10)return;const a=Math.ceil(n/10),r=u.createElement("div",{className:"sub-reply-pagination",innerHTML:`
          <div class="view-more-pagination">
            <span class="pagination-page-count">共${a}页</span>
            ${i!==1?'<span class="pagination-btn pagination-to-prev-btn">上一页</span>':""}
            ${(()=>{const c=[i-4,i-3,i-2,i-1].filter(v=>v>=1),p=[i+1,i+2,i+3,i+4].filter(v=>v<=a),d=[].concat(c,i,p);let m;i<=3?m=d.slice(0,5):i>=a-3?m=d.reverse().slice(0,5).reverse():m=d.slice(d.indexOf(i)-2,d.indexOf(i)+3);let h=JSON.parse(JSON.stringify(m));if(!h.includes(1)){let v=[1];h.at(0)!==2&&(v=[1,"..."]),h=[].concat(v,h);}if(!h.includes(a)){let v=[a];h.at(-1)!==a-1&&(v=["...",a]),h=[].concat(h,v);}return h.reduce((v,C)=>C==="..."?v+'<span class="pagination-page-dot">...</span>':C===i?v+`<span class="pagination-page-number current-page">${C}</span>`:v+`<span class="pagination-page-number">${C}</span>`,"")})()}
            ${i!==a?'<span class="pagination-btn pagination-to-next-btn">下一页</span>':""}
          </div>
        `}),o=r.querySelector(".pagination-to-prev-btn");u.on(o,"click",()=>{this.loadPaginatedSubReplies(e,t,n,i-1);});const l=r.querySelector(".pagination-to-next-btn");u.on(l,"click",()=>{this.loadPaginatedSubReplies(e,t,n,i+1);}),r.querySelectorAll(".pagination-page-number:not(.current-page)")?.forEach(c=>{const p=parseInt(c.textContent);u.on(c,"click",()=>this.loadPaginatedSubReplies(e,t,n,p));}),t.appendChild(r);},addAnchor(){const e=u.createElement("div",{className:"anchor-for-loading",textContent:"正在加载..."},{style:"text-align: center; color: #61666d; transform: translateY(-50px)"});u.append(this.$el.replyWrapper,e);let t=1;const n=new IntersectionObserver(async i=>{if(!i[0].isIntersecting)return;const{data:a}=await this.getPaginationData(++t);if(!a.replies||a.replies.length===0){e.textContent="所有评论已加载完毕",n.disconnect();return}for(const r of a.replies)this.appendReplyItem(r);});n.observe(e);}},jn=`:root {
  --v_xs: 5px;
  --v_xsx: 4px;
  --v_xxs: 6px;
  --v_sm: 10px;
  --v_smx: 8px;
  --v_xsm: 12px;
  --v_md: 15px;
  --v_mdx: 14px;
  --v_xmd: 16px;
  --v_lg: 20px;
  --v_lgx: 18px;
  --v_xlg: 22px;
  --v_xl: 25px;
  --v_xlx: 24px;
  --v_xxl: 26px;
  --v_fs_1: 24px;
  --v_fs_2: 18px;
  --v_fs_3: 16px;
  --v_fs_4: 14px;
  --v_fs_5: 13px;
  --v_fs_6: 12px;
  --v_lh_xs: 1;
  --v_lh_sm: 1.25;
  --v_lh_md: 1.5;
  --v_lh_lg: 1.75;
  --v_lh_xl: 2;
  --v_height_xs: 16px;
  --v_height_sm: 24px;
  --v_height_md: 32px;
  --v_height_lg: 40px;
  --v_height_xl: 48px;
  --v_radius: 6px;
  --v_radius_sm: 4px;
  --v_radius_md: 8px;
  --v_radius_lg: 10px;
  --v_brand_pink: var(--brand_pink, #ff6699);
  --v_brand_pink_thin: var(--brand_pink_thin, #ffecf1);
  --v_brand_blue: var(--brand_blue, #00aeec);
  --v_brand_blue_thin: var(--brand_blue_thin, #dff6fd);
  --v_stress_red: var(--stress_red, #f85a54);
  --v_stress_red_thin: var(--stress_red_thin, #feecea);
  --v_success_green: var(--success_green, #2ac864);
  --v_success_green_thin: var(--success_green_thin, #e4f8ea);
  --v_operate_orange: var(--operate_orange, #ff7f24);
  --v_operate_orange_thin: var(--operate_orange_thin, #fff0e3);
  --v_pay_yellow: var(--pay_yellow, #ffb027);
  --v_pay_yellow_thin: var(--pay_yellow_thin, #fff6e4);
  --v_bg1: var(--bg1, #ffffff);
  --v_bg2: var(--bg2, #f6f7f8);
  --v_bg3: var(--bg3, #f1f2f3);
  --v_bg1_float: var(--bg1_float, #ffffff);
  --v_bg2_float: var(--bg2_float, #f1f2f3);
  --v_text_white: var(--text_white, #ffffff);
  --v_text1: var(--text1, #18191c);
  --v_text2: var(--text2, #61666d);
  --v_text3: var(--text3, #9499a0);
  --v_text4: var(--text4, #c9ccd0);
  --v_text_link: var(--text_link, #008ac5);
  --v_text_notice: var(--text_notice, #e58900);
  --v_line_light: var(--line_light, #f1f2f3);
  --v_line_regular: var(--line_regular, #e3e5e7);
  --v_line_bold: var(--line_bold, #c9ccd0);
  --v_graph_white: var(--graph_white, #ffffff);
  --v_graph_bg_thin: var(--graph_bg_thin, #f6f7f8);
  --v_graph_bg_regular: var(--graph_bg_regular, #f1f2f3);
  --v_graph_bg_thick: var(--graph_bg_thick, #e3e5e7);
  --v_graph_weak: var(--graph_weak, #c9ccd0);
  --v_graph_medium: var(--graph_medium, #9499a0);
  --v_graph_icon: var(--graph_icon, #61666d);
  --v_shadow: var(--shadow, #000000);
  --v_brand_pink_hover: var(--brand_pink_hover, #ff8cb0);
  --v_brand_pink_active: var(--brand_pink_active, #e84b85);
  --v_brand_pink_disabled: var(--brand_pink_disabled, #ffb3ca);
  --v_brand_blue_hover: var(--brand_blue_hover, #40c5f1);
  --v_brand_blue_active: var(--brand_blue_active, #008ac5);
  --v_brand_blue_disabled: var(--brand_blue_disabled, #80daf6);
  --v_stress_red_hover: var(--stress_red_hover, #fa857f);
  --v_stress_red_active: var(--stress_red_active, #e23d3d);
  --v_stress_red_disabled: var(--stress_red_disabled, #fcafaa);
  --v_text_hover: var(--text_hover, #797f87);
  --v_text_active: var(--text_active, #61666d);
  --v_text_disabled: var(--text_disabled, #c9ccd0);
  --v_line_border: var(--line_border, #c9ccd0);
  --v_line_bolder_hover: var(--line_bolder_hover, #e3e5e7);
  --v_line_bolder_active: var(--line_bolder_active, #aeb3b9);
  --v_line_bolder_disabled: var(--line_bolder_disabled, #f1f2f3);
}

@font-face {
  font-family: fanscard;
  src: url(//s1.hdslb.com/bfs/static/jinkela/mall-h5/asserts/fansCard.ttf);
}

.svg-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.svg-icon svg {
  width: 100%;
  height: 100%;
}

.svg-icon.use-color svg path {
  fill: currentColor;
  color: inherit;
}

.top-vote-card {
  background-color: var(--graph_bg_thin);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  margin-bottom: 24px;
  padding: 12px 16px 12px 10px;
  border-radius: 6px;
}

.top-vote-card__multi {
  cursor: pointer;
}

.top-vote-card__multi:hover .vote-result-text {
  color: var(--brand_blue);
  transition: 0.2s;
}

.top-vote-card-left {
  width: 40%;
  max-width: calc(40% - 30px);
  margin-right: 20px;
  word-wrap: break-word;
  font-size: 13px;
  line-height: 18px;
  color: var(--text1);
}

.top-vote-card-left__title {
  display: flex;
  align-items: center;
}

.top-vote-card-left__title svg {
  margin-right: 2px;
  flex: none;
}

.top-vote-card-left__title span {
  display: -webkit-box;
  float: none;
  height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.top-vote-card-left__join {
  height: 17px;
  display: flex;
  align-items: center;
  margin-top: 4px;
  font-size: 12px;
  color: var(--text3);
}

.top-vote-card-left__join .vote-icon {
  height: 12px;
}

.top-vote-card-left__join span {
  display: flex;
  align-items: center;
}

.top-vote-card-right {
  width: 60%;
  font-size: var(--2fde2a28);
  line-height: 17px;
  display: flex;
  --option-height: 40px;
  --option-radius: 6px;
}

.top-vote-card-right .vote-text__not-vote {
  opacity: 0.9;
}

.top-vote-card-right .vote-text__not-vote .vui_ellipsis {
  font-weight: 400 !important;
}

.top-vote-card-right .vote-text :first-child {
  font-weight: 500;
}

.top-vote-card-right .vote-icon {
  flex: none;
}

.top-vote-card-right .left-vote-option {
  position: relative;
  display: flex;
  min-width: 120px;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 102, 153, var(--212267a6));
  height: var(--option-height);
  width: var(--38c5ebb3);
  padding-left: 10px;
  border-radius: var(--option-radius) 0 0 var(--option-radius);
  cursor: pointer;
  margin-right: 30px;
  color: var(--332a347e);
  transition: width ease-out 0.2s;
}

.top-vote-card-right .left-vote-option .skew-vote-option {
  position: absolute;
  right: -20px;
  top: 0;
}

.top-vote-card-right .left-vote-option .skew-vote-option__fill {
  left: -8px;
  background-color: #f69;
  transform: skew(21deg);
  border-top-right-radius: calc(var(--option-radius) - 2px);
  border-bottom-right-radius: var(--option-radius);
}

.top-vote-card-right .skew-vote-option {
  height: 40px;
  width: 20px;
  overflow: hidden;
  opacity: var(--212267a6);
  pointer-events: none;
}

.top-vote-card-right .skew-vote-option__fill {
  pointer-events: all;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}

.top-vote-card-right .right-vote-option {
  position: relative;
  display: flex;
  min-width: 120px;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  background-color: rgba(0, 174, 236, var(--212267a6));
  height: var(--option-height);
  width: var(--4b2970aa);
  padding-right: 10px;
  border-radius: 0 var(--option-radius) var(--option-radius) 0;
  cursor: pointer;
  color: var(--1e587827);
  transition: width ease-out 0.2s;
}

.top-vote-card-right .right-vote-option .skew-vote-option {
  position: absolute;
  left: -20px;
  top: 0;
}

.top-vote-card-right .right-vote-option .skew-vote-option__fill {
  left: 8px;
  background-color: #00aeec;
  transform: skew(21deg);
  border-top-left-radius: var(--option-radius);
  border-bottom-left-radius: calc(var(--option-radius) - 2px);
}

.top-vote-card-right .right-vote-option .vote-text {
  text-align: right;
}

.top-vote-card-right .had_voted {
  cursor: unset;
}

.reply-header .reply-notice {
  display: flex;
  align-items: center;
  position: relative;
  min-height: 40px;
  padding: 4px 10px;
  margin-bottom: 16px;
  font-size: 13px;
  border-radius: 2px;
  color: var(--Ye5_u);
  cursor: pointer;
}

.reply-header .reply-notice:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--Ye5_u);
  opacity: 0.2;
}

.reply-header .reply-notice .notice-icon {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}

.reply-header .reply-notice .notice-content {
  flex: 1;
  padding: 0 5px;
  vertical-align: top;
  word-wrap: break-word;
  word-break: break-all;
}

.reply-header .reply-notice .notice-close-icon {
  position: relative;
  z-index: 1;
  width: 10px;
  height: 10px;
  margin-left: 5px;
}

.reply-header .reply-navigation {
  margin-bottom: 22px;
}

.reply-header .reply-navigation .nav-bar {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.reply-header .reply-navigation .nav-bar .nav-title {
  display: flex;
  align-items: center;
}

@media screen and (max-width: 1681px) {
  .reply-header .reply-navigation .nav-bar .nav-title {
    font-size: 20px;
  }
}

@media screen and (min-width: 1681px) {
  .reply-header .reply-navigation .nav-bar .nav-title {
    font-size: 24px;
  }
}

.reply-header .reply-navigation .nav-bar .nav-title .nav-title-text {
  color: var(--text1);
  font-family:
    PingFang SC,
    HarmonyOS_Medium,
    Helvetica Neue,
    Microsoft YaHei,
    sans-serif;
  font-weight: 500;
}

@media (-webkit-max-device-pixel-ratio: 1) {
  .reply-header .reply-navigation .nav-bar .nav-title .nav-title-text {
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      Helvetica Neue,
      Helvetica,
      Arial,
      PingFang SC,
      Hiragino Sans GB,
      Microsoft YaHei,
      sans-serif;
  }
}

.reply-header .reply-navigation .nav-bar .nav-title .total-reply {
  margin: 0 36px 0 6px;
  font-weight: 400;
  color: var(--text3);
}

@media screen and (max-width: 1681px) {
  .reply-header .reply-navigation .nav-bar .nav-title .total-reply {
    font-size: 13px;
  }
}

@media screen and (min-width: 1681px) {
  .reply-header .reply-navigation .nav-bar .nav-title .total-reply {
    font-size: 14px;
  }
}

.reply-header .reply-navigation .nav-bar .nav-select-reply {
  font-family:
    PingFang SC,
    HarmonyOS_Medium,
    Helvetica Neue,
    Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  color: var(--text1);
}

@media screen and (max-width: 1681px) {
  .reply-header .reply-navigation .nav-bar .nav-select-reply {
    font-size: 13px;
  }
}

@media screen and (min-width: 1681px) {
  .reply-header .reply-navigation .nav-bar .nav-select-reply {
    font-size: 16px;
  }
}

@media (-webkit-max-device-pixel-ratio: 1) {
  .reply-header .reply-navigation .nav-bar .nav-select-reply {
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      Helvetica Neue,
      Helvetica,
      Arial,
      PingFang SC,
      Hiragino Sans GB,
      Microsoft YaHei,
      sans-serif;
  }
}

.reply-header .reply-navigation .nav-bar .nav-sort {
  display: flex;
  align-items: center;
  color: var(--text3);
}

@media screen and (max-width: 1681px) {
  .reply-header .reply-navigation .nav-bar .nav-sort {
    font-size: 13px;
  }
}

@media screen and (min-width: 1681px) {
  .reply-header .reply-navigation .nav-bar .nav-sort {
    font-size: 16px;
  }
}

.reply-header .reply-navigation .nav-bar .nav-sort .part-symbol {
  height: 11px;
  margin: 0 12px;
  border-left: solid 1px;
}

.reply-header .reply-navigation .nav-bar .nav-sort .hot-sort {
  cursor: pointer;
}

.reply-header .reply-navigation .nav-bar .nav-sort .hot-sort:hover {
  color: var(--brand_blue);
}

.reply-header .reply-navigation .nav-bar .nav-sort .time-sort {
  cursor: pointer;
}

.reply-header .reply-navigation .nav-bar .nav-sort .time-sort:hover {
  color: var(--brand_blue);
}

.reply-header .reply-navigation .nav-bar .nav-sort.hot .hot-sort,
.reply-header .reply-navigation .nav-bar .nav-sort.time .time-sort {
  color: var(--text1);
}

.reply-header .reply-navigation .nav-operation-warp {
  position: absolute;
  right: 0;
}

/*
   * @bilibili/userAvatar
   * version: 1.2.0-beta.2. Powered by main-frontend
   * 用户头像公共组件.
   * author: wuxiuran
   */
.bili-avatar {
  display: block;
  position: relative;
  background-image: url(data:image/gif;base64,R0lGODlhtAC0AOYAALzEy+To7rG6wb/Hzd/k6rK7wsPK0bvDybO8w9/j6dDW3NHX3eHl6+Hm7LnByLa+xeDl6+Lm7M/V27vDyt7j6dHX3r/Gzb/HzsLJ0LS9xLW+xbe/xtLY3s/V3OPn7dne5NXb4eDk67jAx7S8w+Dk6rrCybW9xMXM08TL0sLK0Nrf5cXM0tjd48zS2bO7wsrR17W+xLfAx8fO1La/xsbN07K7wbzEytzh573FzNLX3uLn7cDHzsbN1NPZ377Gzb7FzNbc4sjP1dfd49bb4tvg5svR2LfAxsnQ1s7U293h6Nbb4dTa4MrQ19fc4t3i6L7GzMnP1s7U2tXa4M3T2sDIz97i6N7i6dje5MjO1dfc473Ey8HJz9vg57jBx8jP1tPY38PL0cfO1dne5dXa4ePn7sHIz8vS2Nrf5tDW3djd5M3T2cDIztTZ4L3Fy7rCyMTL0czT2bC5wOXp7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OTQ4QTFCMzg4NDAxMUU1OTA2NUJGQjgwNzVFMDQ2NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OTQ4QTFCNDg4NDAxMUU1OTA2NUJGQjgwNzVFMDQ2NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5NDhBMUIxODg0MDExRTU5MDY1QkZCODA3NUUwNDY1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5NDhBMUIyODg0MDExRTU5MDY1QkZCODA3NUUwNDY1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAAAAAAAsAAAAALQAtAAAB/+AcoKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19sA6SCtTCakBCyuKOLmXKAGOOAhLiDkFoQzCOA9YEDyE5SHCBx9KhdhhMc6EBhMJeXDQMY6GjKIgXCgZR0jIQR4msDRxJRQBHyzjoHwpR0LODRI9keDI0kAAnoI8rMgJoyYnlTkBUEA6KMDSmTsxhTjIEsBAqlWvlowR9BIBCzmf9ANLyCrTrJP/SAzI+WMtW5EncmpIUwkCTpZaqtw9FIBGzgxlIRHgWvLH1MGIDLN8ACRSArQsfRCAnCgAj5wmsjwigbnkk80hA6hezbr1ajkeMoCu7Lq1HIM5C9yQU7v363EQFhxBMeGA8ePIkx+fMEFAzjgFmCtHPuHBcwEAik/fbnwCCiZfQHKzcoLk8/Po06tfr95BC7vWAkgQwb6+/fv4ETqocC2EgfwABihgRzToQM1ZJT0AwIIMNujggxBGKOGEFFYIgHkWYQCBNA0A0BEASOzmDAMS2NBRCh5AE4AMFiGAhIHSeIAEAhYdAQ0HFmkwxDVDmPBQAU2MiCECSiDiAQkhMBAC/wFMNunkk1ASkMCUUzJJAgQMMNDAllxyGUEEXTaQ5ZhjQmDmmRCEcOVRhyhBI0I2RNCMGRZ5cUgO5RWAQAYuCCBADYDW4OeghBZqqJ8FuLAnDBo84OijkDqqwaQwwGDCpRlkOsKmCHTaqQsjAIDFAocEYVEHzDCA4QMkFNIAGAgdcMEAtM5K6621XqDrrrz2uiuuFgQr7LDEFmsBrsjiWgJCYIg3CAnW6ZeiMgtYBEUhEfwQhwEqsFkMGSxw9IOchHjxIwjKBICBRS4R8pkZzHgWhwyFCGHRCcoQMIJFZxAyRBz4NhMADgIUOYgKFjnAQDJLOIeQboTQUAB8y3wgAP8PhHBRwEMCwEUMiw+Z8BhvJVChogMHeEuBbA+NkQysDxmxsCARbPBCNDs8QK4cDBhhUQvJrJHwtHJAAAMS0byQwYZJYRgHxsjM9VAJ3kJgAqrQoAFDCFUdYBEKyUiN0ASENCCCBNF0IIKzcpj4kAFhWwQAIRE4gDY0EjiwsxwePpRC3A+1Qbfd0eS9N2PbAo7QAIPf/YzhhBCFENxRW/T3IHU77gzkg6RgEeXHiB0HBmWfnXYMbK/7tuKjl72B5s10sMHMgqg+OeukD9LA62nPTojtiVf+0A+EMPAA7Mx08ADTgjxhOetzDwLBA1g/04EGzPP9vPBjEwKBBtU7o8D/1oS4jdDloVtE9iAhZBC+JVkg0YS3kQzhgAMoRBEkJgpk0OogMvEb61I2CH29LxJWWMIKROAcAUzACpIIgLYsIoITAGFvkVAAAlAjiADejnseIQQBEHDARlBAAT5gWUemIIkXPKcLGEhD9hyhABdwUA4eDF76HrI+QRCgAAqARADYYACHHUZEjvDAstAzAx54TBEKmBghcgg6Y4iuh3L4YRAbEQEFuGE96HoEA2awHgHIgAg0lCIAP8c6G4gQiIw4wwvIyJ5+QUIB9SkACpCYiCjCx3w6tKJFtCBCEnZmDGUwono20AP6OSIIG2NPAbAwskNo8IbOWx0I10AIEoyg/4RyIMJf2DMDNcwQEiowQCTXU4AjYHAQl/wdG0GIPjmQwH2HCIHT0jMCJtDOElWAwi7RgwNEKGAENwReFYshutz50JCGAJl6HuCFG2YiAl/oW3oQYMwNylKTO0SIM7MIzUL8Jz0bkIE1O8GCLfjoPA/oZjJnGc7WFdAFWyxEtZ4zAhpwwJGhSIAEnrDKjpDKkgWYJzgF+ZBxavEQHlhJRzSAAja80hQkmIIBNGCRGfySEH785gfrWcuHHuIDGajBBnBwAhb8DxYk+MAKLBCFdcJSjbWjJ0PPR4gEwBERViDCR4GhgBrAR5msq6JP8yk+AcDHcwtlpk6XGg0FOJUQUP8d6U4DmYAaMLUZVq3kObUq1YeAbRAJEMBXNUGCV3pgnR94YibCSoixBrKsCDmrINK6VkwoQQNlKAQRJpCBdgmCAQdAgFM6QddBoECneI2DXm+jVk98Jg5hFMRVCDkIF8YBeXMVQCUfG1ViiC5ggqBAZTvhhBhARAWCqMIq0QAbKDgHAVz4RGMFQVqymtYiNCCEavuKiRu41gUGKMIXNyCTAuxgiSOojG5FS4i8lHYYoqMXWn/qiSrkUABSaMASEaKF3ILCqvC5rG+xaxEsuA60mtABHKhQgi2EkQFH2IIBFABQTsiObWGA7G8fYiPMmQ4aamMbFATM3ofcDHOEw5v/3gjBBAYLQ3RFaFzhJjyIIlg4GBgmhA4i/DgOC8LD172wRZggYhJvzsRyqHCKQWyRFdDtwNZbGyHEctcBI8Rk0oMBKJOhABNwbRBUsAgYkiHR7klPA/AlMgyyl0PUGgN4VMOcEYAGDRTorCrjjUMQkmFdhMgMzFB7hhayfFifPYS2yEAxQhCQhB13gWipykBwB3GDNyFkf8cgQkFhO4h/9eAZLYiDwQSBsIfQORkNcJphBUGDDHxlGSoowJ4HYa+H7GAZnkWInegGAA0k5hhKGIEDYDQIUz2Ey8kQgwse8gBrRmBdFzDDAna9gBzkoALADrawh01sYP8a2LxOtrKX/83sZVfA19CuQAucN4E6i5CjCMlAJZGxBYuM2RALoEF1NDADGAigAHrylLo95YJ2o/vd8NbTCDLQqA1sIAYiEEEM9o3vfOvbCPYO+Axm8KhJaQABg0K3AEzwBgngWRAVESAzmrBKBGS2EAFIEwNIQAEKJOBJVAq5yBPQ8ZJ73EpYytKWyKSllbM8S2gKgcxJbnIKHNkQIPBzAQjNjN7GwQQXnwYI3omQazmjCl1oURRYXVU/xyFO0ACCCscmgUszowEc2IIiMSKNBSgSIRuwkNjHTvayN2iYIwj6MxZA9AG5/e3TVDs0WBBmuNv97k+3ozUIwARs4/3vAZpBC4ZaDf8CtMACdDzPuQvwdcBfx0/rEQEAWnBKbYRgCUsAgRSkMIYxLKAHIGjCFVRABC6ogAUg4IADII+QMHDg9bCHfQf29ZARKCD2uLdrHBDQgyawIK4fEAIQNL+EHoB+CJrvwReykAC2xaMHX/80Ij5QEmsbIgJ1j0MYJvFweARglLVfyCHk/JCDGuILLKmBXNkyhII+xOiGACRCrFwV8GeIMyKd6EsHsbKS4ACgQNB4D8NzSBEAZEAGqiEHNzBrOREFhrAELJEBFKMu57FMBcgmrpYTNsB0cpCBHQEXmXYeBYBGkNEAbvYcFxcAXsMSDlhd6WFjkNED6eEDGeN0FgFkguD/BO7HEo82GKKTE+o3CPvEEg7gLdKEHt/GFn2mHnpVZiXRgwQwdeehATYVEommHgIAQSNxHksgCKGmHiwEFgGQdOsRXCH4HPAyPfXRBRwYEiBQH9oWBeixAwEwBffBH1Thc+rxArqXIFZAH/bxA/1lDyFgg+mhARuAHgJgLvchAKdGED7xd9FyHxZ4D23gePmBAIIREkQggJioHmrwEl/4ifXBZvcQAMNEilj4iPOQBZ6oiuixfQRxhLBISs4nDx6QiLV4HxxwD1Kwi/gRWPbghMDIStYnD7tTjPcBa/KgBMp4HxPQfe7AY8+IhdIVDw3gWtVYH/TnDlmwjfaxAVWogg60CI7pkQPxQAbZZ47nUWDvcAWvyI7+N4jocIXyqB4FIH7tEADadI/p8WDtsIT+qB7R6A5IMJBltH7lkFUIiR7uqA7f05DqAQDSWA7/IpHpsXPsUI4YyRJhmA4S1JHpgYPo4AS0J5LPIQI3dw5v2BHnFo/+WAOTZg4yhpLnYX6xEAgAOw==);
  -webkit-background-size: cover;
  background-size: cover;
  border-radius: 50%;
  margin: 0;
  padding: 0;
}

.bili-avatar * {
  margin: 0;
  padding: 0;
}

.bili-avatar-face {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
}

.bili-avatar-pendent-dom {
  height: 176.48%;
  width: 176.48%;
  position: absolute;
  top: -38.33%;
  left: -38.33%;
  overflow: hidden;
}

.bili-avatar-pendent-dom img {
  height: 100%;
  min-width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.bili-avatar-img {
  border: none;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
  image-rendering: -webkit-optimize-contrast;
}

.bili-avatar-img-radius {
  border-radius: 50%;
}

.bili-avatar-img[src=""],
.bili-avatar-img:not([src]) {
  opacity: 0;
}

.bili-avatar-img.bili-avatar-img-error {
  display: none;
}

.bili-avatar-right-icon {
  width: 27.5%;
  height: 27.5%;
  position: absolute;
  right: 0;
  bottom: -1px;
  -webkit-background-size: cover;
  background-size: cover;
  image-rendering: -webkit-optimize-contrast;
}

.bili-avatar-nft-icon {
  position: absolute;
  width: 27.5%;
  height: 27.5%;
  right: -webkit-calc(27.5% - 1px);
  right: -moz-calc(27.5% - 1px);
  right: calc(27.5% - 1px);
  bottom: -1px;
  -webkit-background-size: cover;
  background-size: cover;
  image-rendering: -webkit-optimize-contrast;
}

@-webkit-keyframes bili-avatar {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }

  to {
    -webkit-transform: translate3d(-97.5%, 0, 0);
    transform: translate3d(-97.5%, 0, 0);
  }
}

@-moz-keyframes bili-avatar {
  0% {
    -moz-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }

  to {
    -moz-transform: translate3d(-97.5%, 0, 0);
    transform: translate3d(-97.5%, 0, 0);
  }
}

@keyframes bili-avatar {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }

  to {
    -webkit-transform: translate3d(-97.5%, 0, 0);
    -moz-transform: translate3d(-97.5%, 0, 0);
    transform: translate3d(-97.5%, 0, 0);
  }
}

.bili-avatar .bili-avatar-size-80 {
  width: 22px;
  height: 22px;
  bottom: -1px;
}

.bili-avatar .bili-avatar-size-60,
.bili-avatar .bili-avatar-size-50,
.bili-avatar .bili-avatar-size-48 {
  width: 18px;
  height: 18px;
  bottom: -1px;
}

.bili-avatar .bili-avatar-size-40,
.bili-avatar .bili-avatar-size-36 {
  width: 14px;
  height: 14px;
  bottom: -1px;
}

.bili-avatar .bili-avatar-size-30,
.bili-avatar .bili-avatar-size-24 {
  width: 12px;
  height: 12px;
  bottom: -1px;
}

.bili-avatar .bili-avatar-size-nft-80 {
  width: 22px;
  height: 22px;
  bottom: -1px;
  right: -webkit-calc(22px - 1px);
  right: -moz-calc(22px - 1px);
  right: 21px;
}

.bili-avatar .bili-avatar-size-nft-60,
.bili-avatar .bili-avatar-size-nft-50,
.bili-avatar .bili-avatar-size-nft-48 {
  width: 18px;
  height: 18px;
  bottom: -1px;
  right: -webkit-calc(18px - 1px);
  right: -moz-calc(18px - 1px);
  right: 17px;
}

.bili-avatar .bili-avatar-size-nft-40,
.bili-avatar .bili-avatar-size-nft-36 {
  width: 14px;
  height: 14px;
  bottom: -1px;
  right: -webkit-calc(14px - 1px);
  right: -moz-calc(14px - 1px);
  right: 13px;
}

.bili-avatar .bili-avatar-size-nft-30,
.bili-avatar .bili-avatar-size-nft-24 {
  width: 12px;
  height: 12px;
  bottom: -1px;
  right: -webkit-calc(12px - 1px);
  right: -moz-calc(12px - 1px);
  right: 11px;
}

.reply-image {
  width: var(--3414c33c);
  height: var(--822197ea);
}

.reply-image.b-img {
  background-color: inherit;
}

.reply-image.b-img img {
  width: 100%;
  height: 100%;
}

.opacity-enter-active,
.opacity-leave-active {
  transition: opacity 0.15s ease;
}

.opacity-enter-from,
.opacity-leave-to {
  opacity: 0;
}

.reply-box {
  display: flex;
  flex-direction: column;
}

.reply-box .box-normal {
  display: flex;
  z-index: 2;
}

.reply-box .box-normal .reply-box-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 48px;
}

.reply-box .box-normal .reply-box-warp {
  position: relative;
  flex: 1;
  transition: 0.2s;
  border: 1px solid var(--line_regular);
  border-radius: 6px;
  background-color: var(--bg3);
  overflow-x: hidden;
}

.reply-box .box-normal .reply-box-warp.focus-within,
.reply-box .box-normal .reply-box-warp:hover {
  border-color: var(--line_regular);
  background-color: var(--bg1);
}

.reply-box .box-normal .reply-box-warp .textarea-wrap {
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 6px;
  cursor: text;
  overflow: hidden;
}

.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info {
  margin-left: 10px;
  margin-bottom: 4px;
  height: 20px;
  font-size: 12px;
  line-height: 17px;
  display: flex;
  align-items: center;
}

.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info__tag {
  flex: none;
  padding: 2px 6px;
  border-radius: 2px;
  margin-right: 4px;
}

.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info__tag--pink {
  background-color: var(--Pi1);
  color: var(--Pi5);
}

.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info__tag--blue {
  background-color: var(--brand_blue_thin);
  color: var(--brand_blue);
}

.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info__tag--gary {
  background-color: var(--graph_bg_regular);
  color: var(--text3);
}

.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info__text {
  max-width: calc(100% - 68px);
  color: var(--text2);
}

.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info__close {
  flex: none;
  margin-left: 4px;
  cursor: pointer;
}

.reply-box .box-normal .reply-box-warp .reply-input {
  padding: 0 8px;
  width: 100%;
  height: 100%;
  border: 1px solid var(--Ga1);
  border-radius: 6px;
  background-color: var(--bg3);
  font-family: inherit;
  line-height: 20px;
  color: var(--text1);
  resize: none;
  outline: none;
  overflow-y: scroll;
  overflow-x: hidden;
}

.reply-box .box-normal .reply-box-warp .reply-input.focus,
.reply-box .box-normal .reply-box-warp .reply-input:hover {
  background-color: var(--bg1);
  border-color: var(--graph_weak);
}

.reply-box .box-normal .reply-box-warp .reply-box-textarea {
  padding: 0 8px;
  width: 100%;
  height: 32px;
  border: none;
  border-radius: 6px;
  background-color: transparent;
  font-family: inherit;
  font-size: 14px;
  line-height: 32px;
  color: var(--text1);
  resize: none;
  outline: none;
}

.reply-box .box-normal .reply-box-warp .reply-box-textarea::placeholder {
  color: var(--text3);
}

.reply-box .box-normal .reply-box-warp .image-content-wrap {
  background: transparent;
}

.reply-box .box-expand {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 80px;
  margin-top: 10px;
  z-index: 1;
  height: 32px;
  transition: all 0.2s ease-in-out;
}

.reply-box .box-expand.hide {
  margin-top: 0;
  height: 0;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
}

.reply-box .box-expand .box-left {
  display: flex;
  align-items: center;
}

.reply-box .box-expand .reply-box-emoji {
  width: 32px;
  height: 26px;
  margin-right: 6px;
  position: relative;
}

.reply-box .box-expand .reply-box-emoji .emoji-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid var(--line_regular);
  border-radius: 4px;
  color: var(--text3);
  cursor: pointer;
}

.reply-box .box-expand .at-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 32px;
  height: 26px;
  margin-right: 6px;
  border: 1px solid var(--line_regular);
  border-radius: 4px;
  color: var(--text3);
  cursor: pointer;
}

.reply-box .box-expand .image-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 32px;
  height: 26px;
  border: 1px solid var(--line_regular);
  border-radius: 4px;
  color: var(--text3);
  cursor: pointer;
}

.reply-box .box-expand .image-btn.disabled {
  opacity: 0.4;
}

.reply-box .box-expand .image-btn .image-upload-input {
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  font-size: 0;
  user-select: auto;
  cursor: pointer;
}

.reply-box .box-expand .forward-to-dynamic {
  display: flex;
  align-items: center;
  margin-left: 16px;
  font-size: 12px;
  color: var(--text3);
}

.reply-box .box-expand .forward-to-dynamic .forward-input,
.reply-box .box-expand .forward-to-dynamic .forward-label {
  cursor: pointer;
}

.reply-box .box-expand .reply-box-send {
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 70px;
  height: 32px;
  border-radius: 6px;
  cursor: pointer;
}

.reply-box .box-expand .reply-box-send .send-text {
  position: absolute;
  z-index: 1;
  font-size: 16px;
  color: var(--text_white);
}

.reply-box .box-expand .reply-box-send:after {
  content: "";
  position: absolute;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: var(--brand_blue);
}

.reply-box .box-expand .reply-box-send:hover:after {
  opacity: 1;
}

.reply-box.box-active .box-normal .reply-box-warp .reply-box-textarea.send-active {
  line-height: normal;
}

.reply-box.box-active .reply-box-send.send-active:after {
  opacity: 1;
}

.reply-box.disabled .box-normal .reply-box-warp .disable-mask {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  font-size: 12px;
  color: var(--text3);
  background-color: var(--bg3);
}

.reply-box.disabled .box-normal .reply-box-warp .disable-mask .no-login-mask {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.reply-box.disabled .box-normal .reply-box-warp .disable-mask .no-login-mask .login-btn {
  padding: 4px 9px;
  margin: 0 3px;
  border-radius: 4px;
  color: var(--text_white);
  background-color: var(--brand_blue);
}

.reply-box.disabled .box-normal .reply-box-warp .disable-mask .no-login-mask .login-btn:hover {
  background-color: var(--Lb4);
  cursor: pointer;
}

.reply-box.disabled .reply-box-send .send-text {
  color: var(--text3);
}

.reply-box.disabled .reply-box-send:after {
  opacity: 1;
  background-color: var(--bg3);
}

.reply-box.fixed-box {
  position: relative;
  z-index: 2;
  padding: 15px 0;
  border-top: 0.5px solid var(--graph_bg_thick);
  background-color: var(--bg1);
}

.reply-content-container.fold .reply-content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}

.reply-content-container .reply-content {
  color: var(--text1);
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-word;
  white-space: pre-wrap;
  line-height: 24px;
  vertical-align: baseline;
}

.reply-content-container .reply-content .note-prefix {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1px 4px;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 12px;
  color: var(--text3);
  line-height: 20px;
  vertical-align: bottom;
  background-color: var(--bg2);
}

.reply-content-container .reply-content .note-prefix .note-icon {
  width: 16px;
  height: 16px;
}

.reply-content-container .reply-content .top-icon {
  top: -2px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 30px;
  height: 18px;
  border: 1px solid var(--brand_pink);
  border-radius: 3px;
  margin-right: 5px;
  font-size: 12px;
  color: var(--brand_pink);
}

.reply-content-container .reply-content .emoji-small {
  vertical-align: text-bottom;
}

@media screen and (max-width: 1681px) {
  .reply-content-container .reply-content .emoji-small {
    width: 20px;
    height: 20px;
  }
}

@media screen and (min-width: 1681px) {
  .reply-content-container .reply-content .emoji-small {
    width: 22px;
    height: 22px;
  }
}

.reply-content-container .reply-content .emoji-large {
  width: 50px;
  height: 50px;
  vertical-align: text-bottom;
}

.reply-content-container .reply-content .icon {
  width: 20px;
  height: 20px;
  vertical-align: text-top;
}

@media screen and (max-width: 1681px) {
  .reply-content-container .reply-content .icon {
    line-height: 24px;
  }
}

@media screen and (min-width: 1681px) {
  .reply-content-container .reply-content .icon {
    line-height: 26px;
  }
}

.reply-content-container .reply-content .icon.search-word {
  width: 12px;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
}

.reply-content-container .reply-content .jump-link {
  vertical-align: baseline;
}

@media screen and (max-width: 1681px) {
  .reply-content-container .reply-content .jump-link {
    line-height: 24px;
  }
}

@media screen and (min-width: 1681px) {
  .reply-content-container .reply-content .jump-link {
    line-height: 26px;
  }
}

.reply-content-container .expand-content {
  color: var(--text_link);
  cursor: pointer;
  margin-left: 4px;
}

.reply-content-container .expand-content:hover {
  color: var(--brand_blue);
}

.sub-reply-item {
  position: relative;
  padding: 8px 0 8px 42px;
  border-radius: 4px;
}

@media screen and (max-width: 1681px) {
  .sub-reply-item {
    font-size: 15px;
    line-height: 24px;
  }
}

@media screen and (min-width: 1681px) {
  .sub-reply-item {
    font-size: 16px;
    line-height: 26px;
  }
}

.sub-reply-item.show-reply {
  background-color: #dff6fb;
  animation-name: enterAnimation-jumpReply-1f8a4018;
  animation-duration: 2s;
  animation-delay: 3s;
  animation-fill-mode: forwards;
}

.sub-reply-item .sub-user-info {
  display: inline-flex;
  align-items: center;
  margin-right: 9px;
  line-height: 24px;
  vertical-align: baseline;
  white-space: nowrap;
}

.sub-reply-item .sub-user-info .sub-reply-avatar {
  position: absolute;
  left: 8px;
  cursor: pointer;
}

.sub-reply-item .sub-user-info .sub-user-name {
  font-family:
    PingFang SC,
    HarmonyOS_Medium,
    Helvetica Neue,
    Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  margin-right: 5px;
  color: var(--3bab3096);
  cursor: pointer;
}

@media screen and (max-width: 1681px) {
  .sub-reply-item .sub-user-info .sub-user-name {
    font-size: 13px;
    line-height: 24px;
  }
}

@media screen and (min-width: 1681px) {
  .sub-reply-item .sub-user-info .sub-user-name {
    font-size: 14px;
    line-height: 26px;
  }
}

@media (-webkit-max-device-pixel-ratio: 1) {
  .sub-reply-item .sub-user-info .sub-user-name {
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      Helvetica Neue,
      Helvetica,
      Arial,
      PingFang SC,
      Hiragino Sans GB,
      Microsoft YaHei,
      sans-serif;
  }
}

.sub-reply-item .sub-user-info .sub-user-level {
  cursor: pointer;
}

.sub-reply-item .sub-user-info .sub-up-icon {
  cursor: default;
}

.sub-reply-item .sub-reply-info {
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 2px;
  font-size: 13px;
  color: var(--text3);
}

.sub-reply-item .sub-reply-info .sub-reply-time {
  margin-right: var(--7530c1e4);
}

.sub-reply-item .sub-reply-info .sub-reply-location {
  margin-right: 20px;
}

.sub-reply-item .sub-reply-info .sub-reply-like {
  display: flex;
  align-items: center;
  margin-right: 19px;
  cursor: pointer;
}

.sub-reply-item .sub-reply-info .sub-reply-like .sub-like-icon {
  margin-right: 5px;
  color: #9499a0;
}

.sub-reply-item .sub-reply-info .sub-reply-like .sub-like-icon:hover,
.sub-reply-item .sub-reply-info .sub-reply-like .sub-like-icon.liked {
  color: #00aeec;
}

.sub-reply-item .sub-reply-info .sub-reply-dislike {
  display: flex;
  align-items: center;
  margin-right: 19px;
}

.sub-reply-item .sub-reply-info .sub-reply-dislike .sub-dislike-icon {
  color: #9499a0;
  cursor: pointer;
}

.sub-reply-item .sub-reply-info .sub-reply-dislike .sub-dislike-icon:hover,
.sub-reply-item .sub-reply-info .sub-reply-dislike .sub-dislike-icon.disliked {
  color: #00aeec;
}

.sub-reply-item .sub-reply-info .sub-reply-btn {
  cursor: pointer;
}

.sub-reply-item .sub-reply-info .sub-reply-btn:hover {
  color: var(--brand_blue);
}

.sub-reply-item .sub-reply-info .sub-reply-operation-warp {
  position: absolute;
  right: 40px;
  opacity: 0;
}

.sub-reply-item:hover .sub-reply-info .sub-reply-operation-warp {
  opacity: 1;
}

@keyframes enterAnimation-jumpReply-1f8a4018 {
  0% {
    background-color: #dff6fb;
  }

  to {
    background-color: #dff6fb00;
  }
}

.sub-reply-list .view-more {
  padding-left: 8px;
  font-size: 13px;
  color: var(--text3);
}

.sub-reply-list .view-more .view-more-default .view-more-btn {
  cursor: pointer;
}

.sub-reply-list .view-more .view-more-default .view-more-btn:hover {
  color: var(--brand_blue);
}

.sub-reply-list .view-more .view-more-pagination {
  color: var(--text1);
}

.sub-reply-list .view-more .view-more-pagination .pagination-page-count {
  margin-right: 10px;
}

.sub-reply-list .view-more .view-more-pagination .pagination-btn {
  margin: 0 4 0 14px;
  cursor: pointer;
}

.sub-reply-list .view-more .view-more-pagination .pagination-btn:hover {
  color: var(--brand_blue);
}

.sub-reply-list .view-more .view-more-pagination .pagination-page-number {
  margin: 0 4px;
  cursor: pointer;
}

.sub-reply-list .view-more .view-more-pagination .pagination-page-number:hover,
.sub-reply-list .view-more .view-more-pagination .pagination-page-number.current-page {
  color: var(--brand_blue);
}

.sub-reply-list .view-more .view-more-pagination .pagination-page-dot {
  margin: 0 4px;
  cursor: default;
}

.image-exhibition {
  margin-top: 8px;
  user-select: none;
}

.image-exhibition .preview-image-container {
  max-width: var(--dacbf126);
  display: flex;
  flex-wrap: wrap;
  row-gap: var(--77b1c8ee);
  column-gap: var(--0c349aa2);
}

.image-exhibition .preview-image-container .image-item-wrap {
  display: flex;
  justify-content: center;
  position: relative;
  border-radius: var(--7fefecd2);
  overflow: hidden;
  cursor: zoom-in;
}

.image-exhibition .preview-image-container .image-item-wrap.vertical {
  flex-direction: column;
}

.image-exhibition .preview-image-container .image-item-wrap.extra-long {
  justify-content: start;
}

.image-exhibition .preview-image-container .image-item-wrap .more-image {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 4px;
  bottom: 4px;
  height: 20px;
  padding: 0 6px;
  border-radius: 4px;
  font-size: 13px;
  color: var(--text_white);
  font-weight: 500;
  line-height: 18px;
  background: rgba(0, 0, 0, 0.7);
}

.image-exhibition .preview-image-container .client-image-item-warp:nth-child(3n + 1) {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.image-exhibition .preview-image-container .client-image-item-warp:nth-child(3n + 2) {
  border-radius: 0;
}

.image-exhibition .preview-image-container .client-image-item-warp:nth-child(3n + 3) {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.image-exhibition .preview-image-container .client-image-item-warp:nth-last-child(1) {
  border-bottom-right-radius: var(--7fefecd2);
  border-top-right-radius: var(--7fefecd2);
}

.image-exhibition .preview-image-container .expand-image-item-warp:nth-child(1) {
  border-radius: var(--7fefecd2) 0 0 0;
}

.image-exhibition .preview-image-container .expand-image-item-warp:nth-child(3) {
  border-radius: 0 var(--7fefecd2) 0 0;
}

.image-exhibition .preview-image-container .expand-image-item-warp:nth-child(7) {
  border-radius: 0 0 0 var(--7fefecd2);
}

.image-exhibition .preview-image-container .expand-image-item-warp:nth-child(9) {
  border-radius: 0 0 var(--7fefecd2) 0;
}

.image-exhibition .preview-image-container .expand-image-item-warp:nth-child(3n + 2) {
  border-radius: 0;
}

.image-exhibition .preview-image-container .expand-image-item-warp.expand-image-two-rows:nth-child(4) {
  border-radius: 0 0 0 var(--7fefecd2);
}

.image-exhibition .preview-image-container .expand-image-item-warp.expand-image-two-rows:nth-child(6) {
  border-radius: 0 0 var(--7fefecd2) 0;
}

.reply-user-sailing {
  height: 48px;
}

.vote-warp {
  display: flex;
  width: 100%;
  height: 80px;
  border: 0.5px solid var(--graph_bg_thick);
  border-radius: 4px;
  margin: 10px 0;
}

.vote-warp .vote-icon-warp {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 80px;
  flex-shrink: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: var(--brand_blue_thin);
}

.vote-warp .vote-icon-warp .vote-icon {
  width: 40px;
  height: 40px;
}

.vote-warp .vote-container {
  display: flex;
  align-items: center;
  flex: 1;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: var(--bg1);
}

.vote-warp .vote-container .vote-text-warp {
  flex: 1;
  padding-left: 15px;
}

.vote-warp .vote-container .vote-text-warp .vote-title {
  font-size: 14px;
  color: var(--text1);
}

.vote-warp .vote-container .vote-text-warp .vote-desc {
  margin-top: 10px;
  font-size: 12px;
  color: var(--text3);
}

.vote-warp .vote-container .vote-btn-warp {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 90px;
  flex-shrink: 0;
}

.vote-warp .vote-container .vote-btn-warp .vote-btn {
  width: 54px;
  height: 28px;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  line-height: 28px;
  color: var(--text_white);
  background-color: var(--brand_blue);
  cursor: pointer;
}

.vote-warp .vote-container .vote-btn-warp .vote-btn:hover {
  background-color: var(--Lb4);
}

.vote-dialog {
  max-height: 100vh;
  overflow-y: auto;
}

.vote-dialog::-webkit-scrollbar {
  width: 4px;
  border-radius: 4px;
  background-color: transparent;
}

.vote-dialog::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: var(--graph_bg_thick);
  transition: 0.3s ease-in-out;
}

.vote-dialog::-webkit-scrollbar-track {
  border-radius: 4px;
  background-color: transparent;
}

.vote-dialog .vote-iframe-warp {
  height: 600px;
  padding-top: 10px;
  border-top: 0.5px solid var(--graph_weak);
}

.vote-dialog .vote-iframe-warp .vote-iframe {
  width: 100%;
  height: 100%;
}

.reply-item {
  position: relative;
}

.reply-item .login-limit-mask {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  pointer-events: none;
}

.reply-item .login-limit-mask .mask-top {
  height: 80%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, var(--bg1) 100%);
}

.reply-item .login-limit-mask .mask-bottom {
  height: 20%;
  background: var(--bg1);
}

.reply-item.login-limit-reply-end .login-limit-mask {
  display: block;
}

.reply-item .root-reply-container {
  padding: 22px 0 0 80px;
}

.reply-item .root-reply-container.show-reply {
  animation-name: enterAnimation-jumpReply-7041f671;
  animation-duration: 5s;
  animation-fill-mode: forwards;
}

.reply-item .root-reply-container .root-reply-avatar {
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  width: 80px;
  cursor: pointer;
}

.reply-item .root-reply-container .content-warp {
  flex: 1;
  position: relative;
}

.reply-item .root-reply-container .content-warp .reply-decorate {
  position: absolute;
  top: 0;
  right: 0;
  user-select: none;
  transform: translateY(-15px);
}

.reply-item .root-reply-container .content-warp .reply-decorate .easter-egg-label {
  width: 82px;
  height: 36px;
  transform: translateY(6px);
}

.reply-item .root-reply-container .content-warp .reply-decorate .easter-egg-label img {
  width: 100%;
  height: 100%;
}

.reply-item .root-reply-container .content-warp .reply-decorate .selected-reply .selected-reply-icon {
  width: var(--213e47ca);
  height: var(--268890ba);
}

.reply-item .root-reply-container .content-warp .reply-decorate .user-sailing {
  display: flex;
  align-items: center;
}

.reply-item .root-reply-container .content-warp .reply-decorate .user-sailing .user-sailing-img {
  height: 48px;
}

.reply-item .root-reply-container .content-warp .reply-decorate .user-sailing .user-sailing-text {
  position: absolute;
  right: 0;
  font-size: 13px;
  color: var(--2bd55d12);
  line-height: 16px;
  word-break: keep-all;
  transform: scale(0.7);
  transform-origin: center center;
}

.reply-item .root-reply-container .content-warp .reply-decorate .user-sailing .user-sailing-text .sailing-text {
  font-family: fanscard;
}

.reply-item .root-reply-container .content-warp .user-info {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}

@media screen and (max-width: 1681px) {
  .reply-item .root-reply-container .content-warp .user-info {
    font-size: 13px;
  }
}

@media screen and (min-width: 1681px) {
  .reply-item .root-reply-container .content-warp .user-info {
    font-size: 14px;
  }
}

.reply-item .root-reply-container .content-warp .user-info .user-name {
  font-family:
    PingFang SC,
    HarmonyOS_Medium,
    Helvetica Neue,
    Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  margin-right: 5px;
  color: var(--dc735352);
  cursor: pointer;
}

@media (-webkit-max-device-pixel-ratio: 1) {
  .reply-item .root-reply-container .content-warp .user-info .user-name {
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      Helvetica Neue,
      Helvetica,
      Arial,
      PingFang SC,
      Hiragino Sans GB,
      Microsoft YaHei,
      sans-serif;
  }
}

.reply-item .root-reply-container .content-warp .user-info .user-level {
  cursor: pointer;
}

.reply-item .root-reply-container .content-warp .user-info .up-icon {
  cursor: default;
}

.reply-item .root-reply-container .content-warp .user-info .contractor-box {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: var(--697d5c46);
  height: 12px;
  padding: 2px;
  border-radius: 2px;
  background-color: var(--brand_pink_thin);
}

.reply-item .root-reply-container .content-warp .user-info .contractor-box.originalFan {
  border: 0.5px solid var(--brand_pink);
  background-color: transparent;
}

.reply-item .root-reply-container .content-warp .user-info .contractor-box .contractor-text {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  transform-origin: center center;
  transform: scale(0.5);
  position: absolute;
  color: var(--brand_pink);
  white-space: nowrap;
}

.reply-item .root-reply-container .content-warp .user-info .fan-badge {
  display: flex;
  align-items: center;
  height: 14px;
  padding-left: 5px;
  border: 0.5px solid var(--3d3b5a1e);
  border-radius: 10px;
  margin-left: 5px;
  background-image: var(--35269ce2);
}

.reply-item .root-reply-container .content-warp .user-info .fan-badge .badge-icon-wrap {
  display: flex;
  align-items: center;
  position: relative;
  width: var(--1f5204fd);
}

.reply-item .root-reply-container .content-warp .user-info .fan-badge .badge-icon-wrap .badge-frist-icon {
  position: absolute;
  left: -8px;
  width: 20px;
  height: 20px;
}

.reply-item .root-reply-container .content-warp .user-info .fan-badge .badge-icon-wrap .badge-second-icon {
  position: absolute;
  right: 0;
  width: 8px;
  height: 11px;
}

.reply-item .root-reply-container .content-warp .user-info .fan-badge .badge-name-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: var(--4f9eed68);
  height: 100%;
  margin-right: 4px;
}

.reply-item .root-reply-container .content-warp .user-info .fan-badge .badge-name-wrap .badge-name {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  transform-origin: center center;
  transform: scale(0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  color: var(--57e6be72);
  font-weight: 500;
  white-space: nowrap;
  transform: scale(0.5) translate(-50%, -50%);
  transform-origin: 0 0;
}

.reply-item .root-reply-container .content-warp .user-info .fan-badge .badge-level-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 11.5px;
  height: 11.5px;
  border-radius: 50%;
  margin-right: 0.5px;
  background-color: var(--59f85baa);
}

.reply-item .root-reply-container .content-warp .user-info .fan-badge .badge-level-wrap .badge-level {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  transform-origin: center center;
  transform: scale(0.5);
  position: absolute;
  top: 52%;
  left: 50%;
  font-family: Reeji-CloudHuPo-GBK;
  color: var(--103312b6);
  font-weight: 500;
  white-space: nowrap;
  line-height: 1;
  transform: scale(0.5) translate(-50%, -43%);
  transform-origin: 0 0;
}

.reply-item .root-reply-container .content-warp .vote-info {
  margin-bottom: 4px;
  height: 20px;
  font-size: 12px;
  line-height: 17px;
  display: flex;
  align-items: center;
}

.reply-item .root-reply-container .content-warp .vote-info__tag {
  padding: 2px 6px;
  border-radius: 2px;
  margin-right: 4px;
  flex: none;
}

.reply-item .root-reply-container .content-warp .vote-info__tag--pink {
  background-color: var(--Pi1);
  color: var(--Pi5);
}

.reply-item .root-reply-container .content-warp .vote-info__tag--blue {
  background-color: var(--brand_blue_thin);
  color: var(--brand_blue);
}

.reply-item .root-reply-container .content-warp .vote-info__tag--gray {
  background-color: var(--graph_bg_regular);
  color: var(--text3);
}

.reply-item .root-reply-container .content-warp .vote-info__text {
  color: var(--Ga7_u);
}

.reply-item .root-reply-container .content-warp .root-reply {
  position: relative;
  padding: 2px 0;
}

@media screen and (max-width: 1681px) {
  .reply-item .root-reply-container .content-warp .root-reply {
    font-size: 15px;
    line-height: 24px;
  }
}

@media screen and (min-width: 1681px) {
  .reply-item .root-reply-container .content-warp .root-reply {
    font-size: 16px;
    line-height: 26px;
  }
}

.reply-item .root-reply-container .content-warp .root-reply .reply-content-container {
  display: block;
  overflow: hidden;
  width: 100%;
}

.reply-item .root-reply-container .content-warp .root-reply .reply-info {
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 2px;
  font-size: 13px;
  color: var(--text3);
}

.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-time {
  margin-right: var(--472bae2d);
}

.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-location {
  margin-right: 20px;
}

.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-like {
  display: flex;
  align-items: center;
  margin-right: 19px;
  cursor: pointer;
}

.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-like .like-icon {
  margin-right: 5px;
  color: #9499a0;
}

.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-like .like-icon:hover,
.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-like .like-icon.liked {
  color: #00aeec;
}

.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-dislike {
  display: flex;
  align-items: center;
  margin-right: 19px;
}

.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-dislike .dislike-icon {
  color: #9499a0;
  cursor: pointer;
}

.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-dislike .dislike-icon:hover,
.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-dislike .dislike-icon.disliked {
  color: #00aeec;
}

.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-btn {
  cursor: pointer;
}

.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-btn:hover {
  color: var(--brand_blue);
}

.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-operation-warp {
  position: absolute;
  right: 20px;
  display: none;
}

.reply-item .root-reply-container .content-warp .root-reply .reply-tag-list {
  display: flex;
  align-items: center;
  margin-top: 6px;
  font-size: 12px;
  line-height: 17px;
}

.reply-item .root-reply-container .content-warp .root-reply .reply-tag-list .reply-tag-item {
  padding: 2px 6px;
  border-radius: 2px;
  margin-right: 10px;
}

.reply-item .root-reply-container:hover .content-warp .root-reply .reply-info .reply-operation-warp {
  display: block;
}

.reply-item .sub-reply-container {
  padding-left: 72px;
}

.reply-item .reply-box-container {
  padding: 25px 0 10px 80px;
}

.reply-item .bottom-line {
  margin-left: 80px;
  border-bottom: 1px solid var(--graph_bg_thick);
  margin-top: 14px;
}

.reply-item .reply-dynamic-card {
  position: absolute;
  z-index: 10;
  top: 30px;
  left: 400px;
}

@keyframes enterAnimation-jumpReply-7041f671 {
  0% {
    background-color: #dff6fb;
  }

  to {
    background-color: #dff6fb00;
  }
}

.reply-list {
  margin-top: 14px;
  padding-bottom: 100px;
}

.reply-list .reply-end-mark {
  height: 100px;
}

.reply-list .reply-end,
.reply-list .reply-loading,
.reply-list .view-all-reply {
  margin-top: 20px;
  font-size: 13px;
  color: var(--text3);
  text-align: center;
}

.reply-list .view-all-reply:hover {
  color: var(--brand_blue);
  cursor: pointer;
}

.reply-list .login-prompt {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 80px);
  height: 50px;
  margin: 16px 0 0 auto;
  border-radius: 6px;
  font-size: 14px;
  color: var(--brand_blue);
  background-color: var(--brand_blue_thin);
  transition: 0.2s;
  cursor: pointer;
}

.reply-list .login-prompt:hover {
  background-color: var(--Lb2);
}

.user-card {
  position: absolute;
  top: var(--555c4a14);
  left: var(--8468e010);
  z-index: 10;
  width: 366px;
  border: 0.5px solid var(--graph_weak);
  border-radius: 8px;
  background-color: var(--bg1);
  box-shadow: 0 0 30px #0000001a;
}

.user-card .card-bg {
  width: 100%;
  height: 85px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  background-image: var(--71924242);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.user-card .user-card-avatar {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 70px;
  margin-top: 10px;
  cursor: pointer;
}

.user-card .card-content {
  display: flex;
  flex-direction: column;
  padding: 12px 20px 16px 70px;
}

.user-card .card-content .card-user-info {
  display: flex;
  align-items: center;
  color: var(--text1);
  margin-bottom: 10px;
}

.user-card .card-content .card-user-info .card-user-name {
  max-width: 160px;
  margin-right: 5px;
  font-size: 16px;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--text1);
  color: var(--7ba58c95);
  text-decoration: none;
}

.user-card .card-content .card-user-info .card-user-sex {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}

.user-card .card-content .card-user-info .card-user-level {
  margin-right: 5px;
  cursor: pointer;
}

.user-card .card-content .card-user-info .card-user-vip {
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--7a718880);
  height: 16px;
  padding: 1px 4px;
  border-radius: 2px;
  color: var(--612d8511);
  background-color: var(--29ab308e);
  cursor: default;
}

.user-card .card-content .card-user-info .card-user-vip .card-vip-text {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  transform-origin: center center;
  transform: scale(0.5);
  white-space: nowrap;
  font-style: normal;
}

.user-card .card-content .card-social-info {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: var(--text1);
}

.user-card .card-content .card-social-info .card-user-attention,
.user-card .card-content .card-social-info .card-user-fans,
.user-card .card-content .card-social-info .card-user-like {
  margin-right: 18px;
  color: inherit;
  text-decoration: none;
}

.user-card .card-content .card-social-info .card-user-attention .social-info-title,
.user-card .card-content .card-social-info .card-user-fans .social-info-title,
.user-card .card-content .card-social-info .card-user-like .social-info-title {
  margin-left: 3px;
  color: var(--text3);
}

.user-card .card-content .card-verify-info {
  padding-top: 10px;
  font-size: 12px;
  color: var(--text3);
}

.user-card .card-content .card-verify-info .card-verify-icon {
  vertical-align: text-bottom;
  margin-right: 3px;
}

.user-card .card-content .card-sign {
  padding-top: 8px;
  font-size: 12px;
  color: var(--text3);
  word-break: break-all;
}

.user-card .card-content .card-btn-warp {
  display: flex;
  margin-top: 16px;
  font-size: 14px;
}

.user-card .card-content .card-btn-warp .card-attention-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  border-radius: 4px;
  margin-right: 8px;
  color: var(--text_white);
  background-color: var(--brand_blue);
  transition: 0.4s;
  cursor: pointer;
}

.user-card .card-content .card-btn-warp .card-attention-btn .cancel-attention-text {
  display: none;
  position: absolute;
}

.user-card .card-content .card-btn-warp .card-attention-btn.attention {
  color: var(--text2);
  background-color: var(--bg3);
}

.user-card .card-content .card-btn-warp .card-attention-btn.attention:hover .attention-text {
  display: none;
}

.user-card .card-content .card-btn-warp .card-attention-btn.attention:hover .cancel-attention-text {
  display: inline;
}

.user-card .card-content .card-btn-warp .card-message-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  border: 1px solid var(--graph_weak);
  border-radius: 4px;
  color: var(--text2);
  cursor: pointer;
}

.user-card .card-content .card-btn-warp .card-message-btn:hover {
  border-color: var(--brand_blue);
  color: var(--brand_blue);
}

.dynamic-card {
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 10;
  top: var(--7b058890);
  left: 400px;
  width: 710px;
  height: 550px;
  border-radius: 6px;
  background-color: var(--bg1);
  box-shadow: 0 0 25px #00000026;
}

.dynamic-card .card-header {
  display: flex;
  align-items: center;
  flex-basis: 50px;
  padding: 0 10px;
  border-bottom: 0.5px solid var(--line_light);
}

.dynamic-card .card-header .card-title {
  flex: 1;
  text-align: center;
  font-size: 16px;
  color: var(--text1);
}

.dynamic-card .card-header .close-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 6px;
  color: var(--text2);
  transition: 0.2s;
  cursor: pointer;
}

.dynamic-card .card-header .close-card:hover {
  background-color: var(--bg3);
}

.dynamic-card .card-content {
  flex: 1;
}

.dynamic-card .card-content::-webkit-scrollbar {
  width: 4px;
  border-radius: 4px;
  background-color: transparent;
}

.dynamic-card .card-content::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: var(--graph_bg_thick);
  transition: 0.3s ease-in-out;
}

.dynamic-card .card-content::-webkit-scrollbar-track {
  border-radius: 4px;
  background-color: transparent;
}

.dynamic-card .card-content .dynamic-card-iframe {
  width: 100%;
  height: 100%;
}

.reply-view-image {
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(24, 25, 28, 0.85);
  transform: scale(1);
  user-select: none;
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
}

.reply-view-image,
.reply-view-image * {
  box-sizing: border-box;
}

.reply-view-image .operation-btn .operation-btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  color: var(--text_white);
  background: rgba(0, 0, 0, 0.58);
  transition: 0.2s;
  cursor: pointer;
}

.reply-view-image .operation-btn .operation-btn-icon:hover {
  color: var(--brand_pink);
}

.reply-view-image .operation-btn .operation-btn-icon.close-container {
  top: 16px;
  right: 16px;
}

.reply-view-image .operation-btn .operation-btn-icon.last-image {
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
}

.reply-view-image .operation-btn .operation-btn-icon.next-image {
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
}

.reply-view-image .show-image-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  max-height: 100%;
  padding: 0 100px;
  overflow: auto;
}

.reply-view-image .show-image-wrap .loading-svga {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 42px;
  height: 42px;
}

.reply-view-image .show-image-wrap.vertical {
  flex-direction: column;
  justify-content: var(--c186e874);
}

.reply-view-image .show-image-wrap .image-content {
  width: calc(100vw - 200px);
  max-width: var(--34114ac9);
  -webkit-user-drag: none;
}

.reply-view-image .preview-list {
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 30px;
  z-index: 2;
  padding: 6px 10px;
  border-radius: 8px;
  background: rgba(24, 25, 28, 0.8);
  backdrop-filter: blur(20px);
  transform: translate(-50%);
}

.reply-view-image .preview-list .preview-item-box {
  padding: 1px;
  border: 2px solid transparent;
  border-radius: 8px;
  transition: 0.3s;
  cursor: pointer;
}

.reply-view-image .preview-list .preview-item-box.active {
  border-color: var(--brand_pink);
}

.reply-view-image .preview-list .preview-item-box .preview-item-wrap {
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 6px;
}

.reply-view-image .preview-list .preview-item-box .preview-item-wrap.vertical {
  flex-direction: column;
}

.reply-view-image .preview-list .preview-item-box .preview-item-wrap.extra-long {
  justify-content: start;
}

.reply-view-image .preview-list .preview-item-box .preview-item-wrap .item-content {
  -webkit-user-drag: none;
}

.reply-view-image--transition-enter-active,
.reply-view-image--transition-leave-active {
  transition: all 0.3s ease;
}

.reply-view-image--transition-enter-from,
.reply-view-image--transition-leave-to {
  transform: scale(0.4);
  opacity: 0;
}

.reply-warp {
  position: relative;
}

.reply-warp .fixed-reply-box {
  position: fixed;
  bottom: 0;
  left: var(--3e88ddc5);
  z-index: 10;
  width: var(--d9a0b070);
}

.reply-warp .fixed-reply-box .reply-box-shadow {
  position: absolute;
  top: -10px;
  z-index: 1;
  width: 100%;
  height: 36px;
  border-radius: 50%;
  background-color: #00000014;
  filter: blur(10px);
}

.reply-warp .fixed-reply-box--transition-enter-active,
.reply-warp .fixed-reply-box--transition-leave-active {
  transition: opacity 0.5s ease;
}

.reply-warp .fixed-reply-box--transition-enter-from,
.reply-warp .fixed-reply-box--transition-leave-to {
  opacity: 0;
}

.bili-comment.browser-pc {
  background-color: var(--bg1);
}

.bili-comment.browser-pc * {
  font-family:
    PingFang SC,
    HarmonyOS_Regular,
    Helvetica Neue,
    Microsoft YaHei,
    sans-serif;
  font-weight: 400;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

@media (-webkit-max-device-pixel-ratio: 1) {
  .bili-comment.browser-pc * {
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      Helvetica Neue,
      Helvetica,
      Arial,
      PingFang SC,
      Hiragino Sans GB,
      Microsoft YaHei,
      sans-serif;
  }
}

.bili-comment.browser-pc * ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.bili-comment.browser-pc * a {
  text-decoration: none;
  background-color: transparent;
  color: var(--text_link);
  cursor: pointer;
}

.bili-comment.browser-pc * a:hover {
  color: var(--Lb4);
}

.bili-comment.browser-pc * i {
  font-style: normal;
}

.bili-comment.browser-pc * p {
  margin: 0;
  padding: 0;
}

.bili-comment.browser-pc .comment-container {
  animation-name: enterAnimation-commentContainer;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.reply-operation-client {
  display: inline-flex;
  position: relative;
}

.reply-operation-client .operation-icon {
  border-radius: 4px;
  cursor: pointer;
}

.reply-operation-client .operation-icon:hover {
  background-color: var(--graph_bg_thick);
}

.reply-operation-client .operation-list {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10px;
  right: 0;
  z-index: 10;
  width: 180px;
  padding: 12px 0;
  border-radius: 6px;
  font-size: 14px;
  color: var(--text2);
  background-color: var(--bg1_float);
  box-shadow: 0 0 5px #0003;
}

.reply-operation-client .operation-list .operation-option {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 15px;
  cursor: pointer;
}

.reply-operation-client .operation-list .operation-option:hover {
  background-color: var(--graph_bg_thick);
}

.reply-operation-client .operation-list .delete-reply-modal {
  position: absolute;
  top: 0;
  left: 50%;
  width: auto;
  padding: 10px 20px;
  border: 1px solid var(--graph_bg_thick);
  border-radius: 8px;
  margin-bottom: 100px;
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  white-space: nowrap;
  background-color: var(--bg1);
  box-shadow: 0 0 5px #0003;
  transform: translate(-50%, -100%);
}

.reply-operation-client .operation-list .delete-reply-modal .delete-reply-btn {
  display: flex;
  justify-content: center;
}

.reply-operation-client .operation-list .delete-reply-modal .delete-reply-btn .comfirm-delete {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 20px;
  border-radius: 4px;
  margin-right: 20px;
  color: var(--text_white);
  background-color: var(--brand_blue);
}

.reply-operation-client .operation-list .delete-reply-modal .delete-reply-btn .comfirm-delete:hover {
  background-color: var(--Lb4);
}

.reply-operation-client .operation-list .delete-reply-modal .delete-reply-btn .cancel-delete {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 20px;
}

.reply-operation-client .operation-list .delete-reply-modal .delete-reply-btn .cancel-delete:hover {
  color: var(--brand_blue);
}

.select-reply-dialog-client .select-dialog-content {
  text-align: left;
}

.select-reply-dialog-client .cancel-select-reply {
  width: 130px;
  margin-right: 20px;
}

.select-reply-dialog-client .comfirm-select-reply {
  width: 130px;
}

.close-reply-dialog-client .close-reply-dialog-content {
  text-align: left;
}

.close-reply-dialog-client .cancel-close-reply {
  width: 130px;
  margin-right: 20px;
}

.close-reply-dialog-client .comfirm-close-reply {
  width: 130px;
}

.close-danmaku-dialog-client .close-danmaku-dialog-content {
  text-align: left;
}

.close-danmaku-dialog-client .cancel-close-danmaku {
  width: 130px;
  margin-right: 20px;
}

.close-danmaku-dialog-client .comfirm-close-danmaku {
  width: 130px;
}

.blacklist-dialog-client .blacklist-dialog-content {
  text-align: center;
}

.blacklist-dialog-client .comfirm-pull-blacklist {
  margin-right: 20px;
}

.reply-header-client .reply-notice {
  display: flex;
  align-items: center;
  position: relative;
  height: 40px;
  padding: 11px 14px;
  margin-bottom: 10px;
  font-size: 12px;
  border-radius: 2px;
  color: var(--text_notice);
  background-color: var(--Or0);
  cursor: pointer;
}

.reply-header-client .reply-notice .notice-content {
  flex: 1;
  position: relative;
  padding: 0 5px;
  line-height: 18px;
  vertical-align: top;
  word-wrap: break-word;
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: 2s;
}

.reply-header-client .reply-navigation {
  margin: 12px 0;
}

.reply-header-client .reply-navigation .nav-bar {
  display: flex;
  align-items: center;
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
}

.reply-header-client .reply-navigation .nav-bar .nav-select-reply {
  font-size: 12px;
  color: var(--text1);
}

.reply-header-client .reply-navigation .nav-bar .nav-sort {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: var(--text3);
}

.reply-header-client .reply-navigation .nav-bar .nav-sort .part-symbol {
  height: 10px;
  margin: 0 8px;
  border-left: solid 1px;
}

.reply-header-client .reply-navigation .nav-bar .nav-sort .hot-sort {
  cursor: pointer;
}

.reply-header-client .reply-navigation .nav-bar .nav-sort .hot-sort:hover {
  color: var(--brand_blue);
}

.reply-header-client .reply-navigation .nav-bar .nav-sort .time-sort {
  cursor: pointer;
}

.reply-header-client .reply-navigation .nav-bar .nav-sort .time-sort:hover {
  color: var(--brand_blue);
}

.reply-header-client .reply-navigation .nav-bar .nav-sort.hot .hot-sort,
.reply-header-client .reply-navigation .nav-bar .nav-sort.time .time-sort {
  color: var(--text1);
}

.reply-header-client .reply-navigation .nav-operation-warp {
  position: absolute;
  right: 0;
}

.reply-box-client {
  display: flex;
  flex-direction: column;
}

.reply-box-client .reply-box-warp {
  position: relative;
  flex: 1;
}

.reply-box-client .reply-box-warp .reply-box-textarea {
  width: 100%;
  height: 32px;
  padding: 5px 12px;
  border: 1px solid transparent;
  border-radius: 6px;
  line-height: 20px;
  color: var(--text1);
  background-color: var(--bg2);
  resize: none;
  outline: none;
  transition: 0.2s;
}

.reply-box-client .reply-box-warp .reply-box-textarea::placeholder {
  color: var(--text4);
}

.reply-box-client .reply-box-warp .reply-box-textarea.focus,
.reply-box-client .reply-box-warp .reply-box-textarea:hover {
  border-color: var(--brand_pink);
}

.reply-box-client .box-operation-warp {
  display: flex;
  align-items: center;
  margin-top: 10px;
  height: 32px;
}

.reply-box-client .box-operation-warp .reply-box-emoji {
  position: relative;
  margin-right: auto;
}

.reply-box-client .box-operation-warp .reply-box-emoji .box-emoji-icon {
  cursor: pointer;
}

.reply-box-client .box-operation-warp .reply-box-send {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 70px;
  height: 100%;
  border-radius: 4px;
  cursor: pointer;
}

.reply-box-client .box-operation-warp .reply-box-send .send-text {
  position: absolute;
  z-index: 1;
  color: var(--text_white);
}

.reply-box-client .box-operation-warp .reply-box-send:after {
  content: "";
  position: absolute;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: var(--brand_pink);
}

.reply-box-client .box-operation-warp .reply-box-send:hover:after {
  opacity: 1;
}

.reply-box-client.box-active .reply-box-warp .reply-box-textarea {
  height: 60px;
}

.reply-box-client.box-active .reply-box-send.send-active:after {
  opacity: 1;
}

.reply-box-client.disabled .reply-box-warp .disable-mask {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  font-size: 12px;
  color: var(--text3);
  background-color: var(--bg3);
}

.reply-box-client.disabled .reply-box-warp .disable-mask .no-login-mask {
  cursor: pointer;
}

.reply-box-client.disabled .box-operation-warp .reply-box-send {
  cursor: not-allowed;
}

.reply-box-client.disabled .box-operation-warp .reply-box-send .send-text {
  color: var(--text3);
}

.reply-box-client.disabled .box-operation-warp .reply-box-send:after {
  opacity: 1;
  background-color: var(--bg3);
}

.note-prefix {
  vertical-align: -3px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 3px;
  line-height: 19px;
  border-radius: 4px;
  margin-right: 6px;
  font-size: 12px;
  color: var(--text3);
  background-color: var(--bg2);
}

.note-prefix .note-icon {
  width: 16px;
  height: 16px;
}

.reply-content-client {
  color: var(--text1);
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-word;
  white-space: pre-wrap;
  vertical-align: baseline;
  transition: 0.2s;
}

.reply-content-client.root {
  line-height: 25px;
}

.reply-content-client.need-view-more {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.reply-content-client.sub {
  line-height: 20px;
}

.reply-content-client .top-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 30px;
  height: 18px;
  border: 1px solid var(--brand_pink);
  border-radius: 3px;
  margin-right: 5px;
  font-size: 12px;
  color: var(--brand_pink);
  vertical-align: 1px;
}

.reply-content-client .emoji-small {
  width: 20px;
  height: 20px;
  vertical-align: text-bottom;
}

.reply-content-client .emoji-large {
  width: 36px;
  height: 36px;
  vertical-align: text-bottom;
}

.reply-content-client .jump-link {
  vertical-align: baseline;
}

.reply-content-client .icon {
  width: 20px;
  height: 20px;
  vertical-align: text-top;
}

.reply-content-client .icon.vote {
  width: 16px;
  height: 16px;
  margin-right: 3px;
  vertical-align: text-bottom;
}

.reply-content-client .icon.search-word {
  width: 12px;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
}

.view-more-reply {
  font-size: 12px;
  color: var(--text_link);
  line-height: 17px;
  cursor: pointer;
}

.view-more-reply:hover {
  color: var(--Lb4);
}

.sub-reply-item-client {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  position: relative;
  max-height: 42px;
  padding: 3px 0;
  font-size: 14px;
  overflow: hidden;
}

.sub-reply-item-client .sub-user-info {
  display: inline-flex;
  align-items: center;
  color: var(--text2);
  line-height: 20px;
  vertical-align: baseline;
  white-space: nowrap;
}

.sub-reply-item-client .sub-user-info .sub-user-name {
  margin-right: 5px;
  font-size: 14px;
  cursor: pointer;
}

.sub-reply-item-client .sub-user-info .sub-up-icon {
  margin-right: 4px;
  cursor: default;
}

.sub-reply-list-client {
  border-radius: 4px;
  padding: 7px 10px;
  margin-top: 12px;
  background-color: var(--bg2_float);
}

.sub-reply-list-client .view-more {
  margin-top: 4px;
  cursor: pointer;
}

.sub-reply-list-client .view-more .view-more-text {
  font-size: 12px;
  color: var(--text_link);
}

.sub-reply-list-client .view-more .view-more-text:hover {
  color: var(--Lb4);
}

.content-warp--blacklist .reply-content {
  display: inline-flex;
  align-items: center;
  padding: 4px;
  border-radius: 4px;
  color: var(--text1);
  background-color: var(--bg2_float);
}

.content-warp--blacklist .reply-content .ban-icon {
  margin-right: 4px;
}

.content-warp--blacklist .reply-header {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.content-warp--blacklist .reply-header .root-reply-avatar {
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  cursor: pointer;
}

.content-warp--blacklist .reply-header .root-reply-avatar .blacklist-avatar {
  width: 30px;
  height: 30px;
}

.content-warp--blacklist .reply-header .reply-info .balcklist-name {
  color: var(--text1);
}

.reply-item-client {
  position: relative;
  padding: 10px 0 14px 42px;
  border-bottom: 1px solid var(--line_light);
}

.reply-item-client .content-warp {
  flex: 1;
  position: relative;
}

.reply-item-client .content-warp .reply-header {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.reply-item-client .content-warp .reply-header .root-reply-avatar {
  display: flex;
  justify-content: center;
  position: absolute;
  left: -42px;
  cursor: pointer;
}

.reply-item-client .content-warp .reply-header .reply-info {
  display: flex;
  flex-direction: column;
}

.reply-item-client .content-warp .reply-header .reply-info .user-info {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: var(--text2);
}

.reply-item-client .content-warp .reply-header .reply-info .user-info .user-name {
  margin-right: 5px;
  color: var(--be794234);
  cursor: pointer;
}

.reply-item-client .content-warp .reply-header .reply-info .user-info .user-level {
  margin-right: 5px;
  cursor: pointer;
}

.reply-item-client .content-warp .reply-header .reply-info .user-info .up-icon {
  cursor: default;
}

.reply-item-client .content-warp .reply-header .reply-info .reply-time {
  font-size: 12px;
  color: var(--text3);
}

.reply-item-client .content-warp .root-reply {
  position: relative;
  font-size: 15px;
  line-height: 25px;
  transition: 0.2s;
}

.reply-item-client .content-warp .root-reply .reply-operation-warp {
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 12px;
  font-size: 13px;
  color: var(--text3);
  line-height: 16px;
}

.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-like {
  display: flex;
  align-items: center;
  margin-right: 19px;
  cursor: pointer;
}

.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-like .like-icon {
  margin-right: 5px;
  color: var(--text3);
}

.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-like .like-icon:hover,
.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-like .like-icon.liked {
  color: var(--brand_pink);
}

.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-dislike {
  display: flex;
  align-items: center;
  margin-right: 19px;
}

.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-dislike .dislike-icon {
  color: var(--text3);
  cursor: pointer;
}

.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-dislike .dislike-icon:hover,
.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-dislike .dislike-icon.disliked {
  color: var(--brand_pink);
}

.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-icon {
  color: var(--text3);
  cursor: pointer;
}

.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-icon:hover {
  color: var(--brand_pink);
}

.reply-item-client .content-warp .root-reply .reply-operation-warp .more-operation {
  display: none;
  position: absolute;
  right: 20px;
}

.reply-item-client .content-warp .reply-item-box {
  margin-top: 12px;
}

.reply-item-client .content-warp .reply-tag-list {
  display: flex;
  align-items: center;
  margin-top: 12px;
  font-size: 12px;
  line-height: 14px;
}

.reply-item-client .content-warp .reply-tag-list .reply-tag-item {
  padding: 5px 6px;
  border-radius: 2px;
  margin-right: 10px;
  color: var(--text2);
  background-color: var(--bg2_float);
}

.reply-item-client:hover .content-warp .root-reply .reply-operation-warp .more-operation {
  display: block;
}

.reply-list {
  position: relative;
  margin-top: 14px;
  padding-bottom: 100px;
}

.reply-list .reply-empty {
  margin-top: 100px;
  text-align: center;
  font-size: 14px;
  color: var(--text3);
}

.reply-list .reply-end-mark {
  height: 100px;
}

.reply-list .reply-end,
.reply-list .reply-loading {
  margin-top: 20px;
  font-size: 13px;
  color: var(--text3);
  text-align: center;
}

.fixed-reply-box {
  bottom: 0;
  z-index: 20;
  width: 100%;
}

.fixed-reply-box .reply-box-wrap {
  background-color: var(--bg1);
  padding: 14px 0;
  border-top: 1px solid var(--line_light);
}

.fixed-reply-box .reply-box-shadow {
  position: absolute;
  top: -10px;
  z-index: -1;
  height: 36px;
  border-radius: 50%;
  background-color: #00000014;
  filter: blur(10px);
  width: calc(100% - 72px);
  left: 50%;
  transform: translate(-50%);
}

.reply-detail {
  flex: 1;
}

.reply-detail .reply-header {
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 9;
  top: 0;
  left: 0;
  height: 46px;
  border-bottom: 1px solid var(--line_light);
  margin-bottom: 14px;
  background-color: var(--bg1);
}

.reply-detail .reply-header .return-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  margin-right: 4px;
  color: var(--text1);
  cursor: pointer;
}

.reply-detail .reply-header .return-icon:hover {
  background-color: var(--graph_bg_thick);
}

.reply-detail .reply-header .reply-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--text1);
}

.dialog-reply {
  flex: 1;
}

.dialog-reply .reply-header {
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 9;
  top: 0;
  left: 0;
  height: 46px;
  border-bottom: 1px solid var(--line_light);
  margin-bottom: 14px;
  background-color: var(--bg1);
}

.dialog-reply .reply-header .return-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  margin-right: 4px;
  color: var(--text1);
  cursor: pointer;
}

.dialog-reply .reply-header .return-icon:hover {
  background-color: var(--graph_bg_thick);
}

.dialog-reply .reply-header .reply-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--text1);
}

.bili-comment.client {
  background-color: var(--bg1);
}

.bili-comment.client * {
  box-sizing: border-box;
  font-family:
    PingFang SC,
    HarmonyOS_Regular,
    Helvetica Neue,
    Microsoft YaHei,
    sans-serif;
  -webkit-font-smoothing: antialiased;
}

.bili-comment.client * ul {
  list-style: none;
}

.bili-comment.client * a {
  text-decoration: none;
  background-color: transparent;
  color: var(--text_link);
  cursor: pointer;
}

.bili-comment.client * a:hover {
  color: var(--Lb4);
}

.bili-comment.client * i {
  font-style: normal;
}
`,Ce={getUserSpaceUrl(e){return `https://m.bilibili.com/space/${e}`},getUserSpaceDynamicUrl(e){return `https://m.bilibili.com/dynamic/${e}`},getUserSpaceOpusUrl(e){return `https://m.bilibili.com/opus/${e}`},getVideoUrl(e){return `https://m.bilibili.com/video/${e}`}},k={getVue(e){if(e!=null)return e.__vue__||e.__Ivue__||e.__IVue__},getVue3(e){if(e!=null)return e.__vueParentComponent},waitVuePropToSet(e,t){Array.isArray(t)||(t=[t]);function n(){let i=null;return typeof e=="string"?i=u.selector(e):typeof e=="function"?i=e():e instanceof HTMLElement&&(i=e),i}t.forEach(i=>{typeof i.msg=="string"&&s.info(i.msg);const a=function(){const r=n();if(r==null)return {status:false,isTimeout:true,inst:null,$el:r};const o=k.getVue(r);return o==null?{status:false,isTimeout:false,inst:null,$el:r}:{status:!!i.check(o,r),isTimeout:false,inst:o,$el:r}};f.waitVueByInterval(()=>n(),()=>a().status,250,1e4).then(()=>{const r=a();if(r.status){const o=r.inst;i.set(o,r.$el);}else typeof i.failWait=="function"&&i.failWait(r.isTimeout);});});},watchVuePropChange(e,t,n,i,a){let r=f.assign({immediate:true,deep:false},i||{});return new Promise(o=>{k.waitVuePropToSet(e,{check(l){return typeof l?.$watch=="function"},set(l){let c=null;typeof t=="function"?c=l.$watch(()=>t(l),(p,d)=>{n(l,p,d);},r):c=l.$watch(t,(p,d)=>{n(l,p,d);},r),o(c);},failWait:a});})},goToUrl(e,t,n=false){if(e==null){w.error("跳转Url: $vueNode为空"),s.error("跳转Url: $vueNode为空："+t);return}let i=k.getVue(e);if(i==null){w.error("获取vue属性失败",{consoleLogContent:true});return}let a=i.$router,r=true;if(s.info("即将跳转URL："+t),n&&(r=false),r)window.open(t,"_blank");else {if(t.startsWith("http")||t.startsWith("//")){t.startsWith("//")&&(t=window.location.protocol+t);let o=new URL(t);if(o.origin===window.location.origin)t=o.pathname+o.search+o.hash;else {s.info("不同域名，直接本页打开，不用Router："+t),window.location.href=t;return}}s.info("$router push跳转Url："+t),a.push(t);}},hookGestureReturnByVueRouter(e){function t(){s.success("触发popstate事件"),i(true);}function n(){s.success("监听地址改变"),e.vueInst.$router.history.push(e.hash),u.on(P,"popstate",t);}async function i(a=false){if(u.off(P,"popstate",t),!e.callback(a))for(;;)if(e.vueInst.$router.history.current.hash===e.hash)s.info("后退！"),e.vueInst.$router.back(),await f.sleep(250);else return}return n(),{resumeBack:i}}},N={goToUrl(e,t=false){let n=g.getValue("bili-go-to-url-blank");if(s.info("即将跳转URL："+e),t&&(n=false),n)window.open(e,"_blank");else {if(e.startsWith("http")||e.startsWith("//")){e.startsWith("//")&&(e=window.location.protocol+e);let o=new URL(e);if(o.origin===window.location.origin)e=o.pathname+o.search+o.hash;else {s.info("不同域名，直接本页打开，不用Router："+e),window.location.href=e;return}}s.info("$router push跳转Url："+e);let i=L("#app");if(i==null){if(!t){window.location.href=e;return}w.error("跳转Url: 获取根元素#app失败"),s.error("跳转Url: 获取根元素#app失败："+e);return}let a=k.getVue(i);if(a==null){if(!t){window.location.href=e;return}s.error("获取#app的vue属性失败"),w.error("获取#app的vue属性失败");return}a.$router.push(e);}},goToLogin(e=""){window.open(`https://passport.bilibili.com/h5-app/passport/login?gourl=${encodeURIComponent(e)}`);},parseDuration(e){if(typeof e!="number"&&(e=parseInt(e)),isNaN(e))return e.toString();function t(n){return n<10?`0${n}`:n}return e<60?`0:${t(e)}`:e>=60&&e<3600?`${Math.floor(e/60)}:${t(e%60)}`:`${Math.floor(e/3600)}:${t(Math.floor(e/60)%60)}:${t(e%60)}`},parseCount(e){let t=e.toString();if(e>1e4){let n=(e/1e4).toFixed(2).slice(0,-1);n.endsWith(".0")&&(n=n.slice(0,-2)),t=`${n}万`;}else if(e>1e4*1e4){let n=(e/1e8).toFixed(2).slice(0,-1);n.endsWith(".0")&&(n=n.slice(0,-2)),t=`${n}亿`;}return t},hookGestureReturnByVueRouter(e){function t(){s.success("触发popstate事件"),i(true);}function n(){s.success("监听地址改变"),e.vueInst.$router.history.push(e.hash),u.on(window,"popstate",t);}async function i(a=false){if(u.off(window,"popstate",t),!e.callback(a))for(;;)if(e.vueInst.$router.history.current.hash===e.hash)s.info("后退！"),e.vueInst.$router.back(),await f.sleep(250);else return}return n(),{resumeBack:i}},initialScale(){s.info("设置<meta>的viewport固定缩放倍率为1并移除页面原有的<meta>"),u.onReady(()=>{let e=u.createElement("meta",{},{name:"viewport",content:"width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover"});u.remove("meta[name='viewport']"),u.waitNode("head").then(()=>{document.head.appendChild(e);});});}};class Hn{isBacking=false;config;constructor(t){this.config=t,this.enterGestureBackMode=this.enterGestureBackMode.bind(this),this.quitGestureBackMode=this.quitGestureBackMode.bind(this),this.popStateEvent=this.popStateEvent.bind(this),(typeof this.config.backDelayTime!="number"||isNaN(this.config.backDelayTime))&&(this.config.backDelayTime=150),this.config.win==null&&(this.config.win=self);}popStateEvent(t){u.preventEvent(t),!this.isBacking&&this.quitGestureBackMode(true);}enterGestureBackMode(){s.success("进入手势模式");let t=this.config.hash;t.startsWith("#")||(t.startsWith("/")||(t="/"+t),t="#"+t),this.config.useUrl&&(t=this.config.win.location.origin+this.config.win.location.pathname+this.config.win.location.search+t),this.config.win.history.pushState({},"",t),s.success("监听popstate事件"),u.on(this.config.win,"popstate",this.popStateEvent,{capture:true});}async quitGestureBackMode(t=false){this.isBacking=true,s.success("退出手势模式"),typeof this.config.beforeHistoryBackCallBack=="function"&&this.config.beforeHistoryBackCallBack(t);let n=Date.now()+1e3*5;for(;;){if(Date.now()>n){s.error("未知情况，history.back()失败，无法退出手势模式");break}if(this.config.win.location.hash.endsWith(this.config.hash))s.info("history.back()"),this.config.win.history.back(),await et.sleep(this.config.backDelayTime||150);else break}s.success("移除popstate事件"),u.off(this.config.win,"popstate",this.popStateEvent,{capture:true}),this.isBacking=false,typeof this.config.afterHistoryBackCallBack=="function"&&this.config.afterHistoryBackCallBack(t);}}const it={mergeAidOrBvidSearchParamsData(e,t){if("aid"in t&&t.aid!=null)Reflect.set(e,"aid",t.aid);else if("bvid"in t&&t.bvid!=null)Reflect.set(e,"bvid",t.bvid);else throw new TypeError("avid or bvid must give one")}},lt={async playUrl(e,t){const n={cid:e.cid,qn:e.qn??ze["1080P60 高帧率"],high_quality:e.high_quality??1,fnval:e.fnval??1,fnver:e.fnver??0,fourk:e.fourk??1,try_look:await Xe.$data.isLogin?0:1,platform:e.setPlatformHTML5?"html5":"pc"};it.mergeAidOrBvidSearchParamsData(n,e),typeof t=="object"&&t!==null&&Object.assign(n,t);const i=await Q.get("https://api.bilibili.com/x/player/playurl?"+f.toSearchParamsStr(n),{responseType:"json",fetch:true});if(!i.status)return;const a=f.toJSON(i.data.responseText);if(a.code===0)return a.data},async onlineTotal(e){const t={cid:e.cid};it.mergeAidOrBvidSearchParamsData(t,e);const n=await Q.get(`https://${Ne.web_host}/x/player/online/total?${f.toSearchParamsStr(t)}`,{responseType:"json",fetch:true});if(!n.status)return;const i=f.toJSON(n.data.responseText);return re.isWebApiSuccess(i)||s.error("获取在线观看人数失败: ",i),i.data},async like(e){const t={like:e.like,csrf:jt.get("bili_jct")?.value||""};it.mergeAidOrBvidSearchParamsData(t,e);const n=await Q.get("https://api.bilibili.com/x/web-interface/archive/like?"+f.toSearchParamsStr(t),{fetch:true});if(!n.status)return  false;const i=f.toJSON(n.data.responseText),a=i.code;return a===0?true:(a===-101?w.error("账号未登录"):a===-111?w.error("csrf校验失败"):a===-400?w.error("请求错误"):a===-403?w.error("账号异常"):a===10003?w.error("不存在该稿件"):a===65004?w.error("取消点赞失败"):a===65006?w.warning("重复点赞"):w.error("未知错误："+i.message),false)}},pt=`/* 设置播放器基础宽高 */
#artplayer {
  width: 100%;
  height: 100%;
}
/* 通用隐藏class */
.art-video-player .art-common-hide {
  display: none !important;
}
/* 设置播放器基础宽高 */
.art-video-player {
  width: 100% !important;
}
/* 播放时隐藏进度条 */
.art-hide-cursor .art-progress {
  display: none !important;
}
/* 不知道为什么背景模糊了 */
.art-video-player.art-backdrop .art-settings {
  backdrop-filter: unset !important;
}
/* 底部的设置菜单当前选中的提示文字设置文字溢出省略号 */
.art-settings .art-setting-item .art-setting-item-right-tooltip {
  max-width: 100px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

/* 竖屏 宽度小于400px */
@media (orientation: portrait) and (max-width: 400px) {
  /* 修正小屏下宽度溢出 */
  .art-controls .art-control {
    max-width: 60px;
    white-space: pre-wrap;
  }
}

/* 竖屏 宽度小于550px */
@media (orientation: portrait) and (max-width: 550px) {
  /* 隐藏 弹幕设置按钮 */
  .artplayer-plugin-danmuku .apd-config ,
    /* 隐藏 弹幕输入框 */
	.artplayer-plugin-danmuku .apd-emitter {
    display: none !important;
  }
  /* 弹幕库靠右对齐 */
  .artplayer-plugin-danmuku {
    justify-content: right;
  }
}
/* 横屏 */
@media (orientation: landscape) {
  /* 限制弹幕输入框的最大宽度 */
  .artplayer-plugin-danmuku .apd-emitter {
    max-width: 260px;
  }
}

/* 插件-在线观看人数  */
.art-lock .art-layer-top-wrap {
  /* 启用了锁定功能，隐藏底部控制栏，所以这个也同步 */
  display: none !important;
}
.art-layer-top-wrap {
  --layer-top-wrap-follow-text-font-size: 0.8em;
  --layer-top-wrap-follow-icon-size: 1em;
  width: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  left: 0;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  width: 100%;
  background: linear-gradient(to bottom, #000, transparent);
  padding: 10px calc(var(--art-padding));
  z-index: 60;
}
.art-player-top-wrap {
  width: 100%;
}
.art-player-top-wrap .art-player-top-title-text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100%;
}
/* 面板隐藏时，顶部toolbar也隐藏 */
.art-hide-cursor .art-layer-top-wrap {
  transform: translateY(-60px);
}
/*.art-layer-top-wrap .art-player-top-wrap {
}
.art-layer-top-wrap .art-player-top-title-text {
}*/
/* 下面的当前在线观看人数 */
.art-layer-top-wrap .art-player-top-follow {
  margin-top: var(--art-padding);
  gap: var(--layer-top-wrap-follow-text-font-size);
  font-size: var(--layer-top-wrap-follow-text-font-size);
  display: flex;
  align-items: center;
  position: absolute;
}
.art-layer-top-wrap .art-player-top-follow .art-player-top-follow-icon {
  width: var(--layer-top-wrap-follow-icon-size);
  height: var(--layer-top-wrap-follow-icon-size);
}
.art-layer-top-wrap .art-player-top-follow-text {
  text-wrap: nowrap;
}
/* 插件-在线观看人数  */

/* 插件-锁定 */
.art-video-player .art-layers .art-layer.art-layer-lock {
  /* 放在右边 */
  right: 0;
  left: calc(100% - 20px - var(--art-lock-size) - var(--art-lock-left-size));
}
/* 插件-锁定 */
`,Ut={30216:"64K",30232:"132K",30280:"192K",30250:"杜比全景声",30251:"Hi-Res无损"};class qt{$data={KEY:"art-player-danmaku-option",localArtDanmakuOption:{}};constructor(t){this.$data.KEY=t;const n=this.getDefaultDanmakuOption();this.$data.localArtDanmakuOption=f.assign(n,Fe(this.$data.KEY,{}));}getDefaultDanmakuOption(){return {speed:5,margin:[10,"75%"],opacity:1,modes:[0,1,2],fontSize:18,antiOverlap:false,synchronousPlayback:true,visible:true}}getLocalArtDanmakuOption(){return this.$data.localArtDanmakuOption}onConfigChange(t){t.on("artplayerPluginDanmuku:config",n=>{Object.keys(this.$data.localArtDanmakuOption).forEach(i=>{if(Reflect.has(n,i)){let a=Reflect.get(n,i);Reflect.set(this.$data.localArtDanmakuOption,i,a);}}),$e(this.$data.KEY,this.$data.localArtDanmakuOption);});}}const be="[artplayer-plugin-m4sAudioSupport]：",je="setting-bilibili-m4sAudio",K={$flag:{isIntervaling:false},intervalHandler(e,t=2,n=900){if(K.$flag.isIntervaling)return;K.$flag.isIntervaling=true;let i=0,a,r=()=>{if(i>t){K.$flag.isIntervaling=false,clearInterval(a);return}if(typeof e=="function")try{e();}catch(o){console.error(be,o);}i++;};r(),t>1?a=setInterval(r,n):K.$flag.isIntervaling=false;}},b={$key:{plugin_KEY:"plugin-bilibili-m4sAudio"},$data:{art:null,audio:new Audio,latestSyncTime:0,reconnectConfig:{maxCount:5,delayTime:1e3},reconnectInfo:{url:"",count:0},option:null},userEvent:{onRestart:void 0},events:{play:()=>{b.handler.play(),b.handler.syncVolume(),b.handler.syncMuted(),K.intervalHandler(()=>{b.handler.syncTime();},1);},seek:e=>{K.intervalHandler(()=>{b.handler.syncTime(),b.handler.syncPlayState();});},pause:()=>{K.intervalHandler(()=>{b.handler.syncTime();},1),b.handler.pause();},restart:e=>{if(typeof b.userEvent.onRestart=="function"){let t=b.userEvent.onRestart(e);b.handler.playUrl(t);}K.intervalHandler(()=>{b.handler.syncTime();},1),b.handler.syncPlayState();},muted:e=>{b.handler.syncVolume(),b.handler.syncMuted();},destroy:()=>{b.handler.pause();},error:(e,t)=>{b.handler.pause();},resize:()=>{K.intervalHandler(()=>{b.handler.syncTime();});},fullscreen:()=>{K.intervalHandler(()=>{b.handler.syncTime();});},"video:ended":()=>{b.handler.pause();},"video:ratechange":()=>{b.handler.syncPlayBackRate();},"video:waiting":()=>{b.handler.pause();},"video:playing":()=>{K.intervalHandler(()=>{b.handler.syncTime();},1),b.handler.play();},"video:pause":()=>{b.handler.pause(),K.intervalHandler(()=>{b.handler.syncTime();},1);},"video:volumechange":()=>{b.handler.syncVolume(),b.handler.syncMuted(),b.handler.syncPlayState();},"video:timeupdate":()=>{let e=b.$data.art.currentTime;Math.abs(e-b.$data.latestSyncTime)>=3&&(b.$data.latestSyncTime=e,K.intervalHandler(()=>{b.handler.syncTime(.777);},1));}},audioEvents:{loadedmetadata:e=>{b.$data.art.emit("m4sAudio:loadedmetadata",e),console.log(be+"Audio预加载完成"),b.$data.reconnectInfo.count=0,b.$data.reconnectInfo.url="",b.$data.latestSyncTime=0,b.handler.syncPlayState(),b.handler.syncPlayBackRate(),b.handler.syncVolume(),b.handler.syncMuted(),K.intervalHandler(()=>{b.handler.syncTime();});},canplaythrough:e=>{b.$data.art.emit("m4sAudio:canplaythrough",e),console.log(be+"浏览器估计该音频可以在不停止内容缓冲的情况下播放媒体直到结束"),K.intervalHandler(()=>{b.handler.syncTime();});},error:e=>{b.$data.art.emit("m4sAudio:error",e),console.error(be+"Audio加载失败",e),f.isNull(b.$data.reconnectInfo.url)&&(b.$data.reconnectInfo.url=b.$data.audio.src),b.$data.reconnectInfo.count<b.$data.reconnectConfig.maxCount?(console.log(be+`Audio第${b.$data.reconnectInfo.count+1}次尝试重新连接`),b.$data.art.notice.show=`Audio第${b.$data.reconnectInfo.count+1}次尝试重新连接`,b.$data.reconnectInfo.count++,setTimeout(()=>{b.handler.playUrl(""),b.handler.playUrl(b.$data.reconnectInfo.url),b.$data.audio.load();},b.$data.reconnectConfig.delayTime)):(console.error(be+"Audio已超出重连次数"),b.$data.art.notice.show="Audio已超出重连次数，请尝试切换源");}},handler:{playUrl(e){typeof e=="string"&&(b.$data.audio.src=e,b.unbindAudio(),f.isNotNull(e)&&b.bindAudio(),b.$data.art.emit("m4sAudio:restart",e),b.handler.syncTime(),b.handler.syncPlayState());},play(){b.$data.audio.paused&&(b.$data.audio.play(),b.$data.art.emit("m4sAudio:play"));},pause(){b.$data.audio.paused||(b.$data.audio.pause(),b.$data.art.emit("m4sAudio:pause"));},syncPlayState(){b.$data.art.playing?this.play():this.pause(),b.$data.art.emit("m4sAudio:syncPlayState");},syncTime(e=.1){let t=b.$data.art.currentTime,n=b.$data.audio.currentTime;Math.abs(t-n)>=Math.abs(e)&&(b.$data.audio.currentTime=t,this.syncVolume(),this.syncMuted(),b.$data.art.emit("m4sAudio:syncTime"));},syncVolume(){b.$data.audio.volume=b.$data.art.volume,b.$data.art.emit("m4sAudio:syncVolume");},syncMuted(){let e=b.$data.art.muted;b.$data.audio.muted=e,b.$data.art.emit("m4sAudio:syncMuted");},syncPlayBackRate(){let e=b.$data.art.playbackRate,t=b.$data.audio.playbackRate;e!==t&&(b.$data.audio.playbackRate=e,b.$data.art.emit("m4sAudio:syncPlayBackRate"));}},update(e){this.unbind(),this.unbindAudio(),this.$data.option=null,this.$data.option=e.audioList,this.$data.latestSyncTime=0;const t=this;if(e.audioList?.length){e.audioList.sort((p,d)=>d.bandwidth-p.bandwidth);let n=e.audioList[0];const i=`artplayer-m4s-audio-${e.from}`,a=this.$data.art.storage.get(i);let r={index:0,html:n.soundQualityCodeText,url:n.url};if(a){const p=e.audioList.findIndex(d=>d.soundQualityCode===a.soundQualityCode);if(p!==-1){const d=e.audioList[p];r.index=p,r.url=d.url,r.html=d.soundQualityCodeText;}else console.warn(be+"没有找到上次选的音频代码，使用当前默认第一个音频");}let o=e.audioList.map((p,d)=>({default:d===r.index,html:p.soundQualityCodeText,url:p.url,soundQualityCode:p.soundQualityCode,soundQualityCodeText:p.soundQualityCodeText,codecs:p.codecs,mimeType:p.mimeType,bandwidth:p.bandwidth,size:p.size}));const l={name:je,width:200,html:"音频",tooltip:r.html,icon:`
				<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
					<path d="M123.5 438.5h131.3v310.7H123.5zM769.2 438.5h131.3v310.7H769.2z"></path>
					<path d="M859.8 398.8h-48.3c-7.9 0-15.4 1.6-22.5 3.9v-32.4c0-125.2-101.9-227.1-227.1-227.1h-99.7c-125.2 0-227.1 101.9-227.1 227.1v32.4c-7.1-2.3-14.6-3.9-22.5-3.9h-48.3c-40.9 0-74.2 33.3-74.2 74.2v243c0 40.9 33.3 74.2 74.2 74.2h48.3c40.9 0 74.2-33.3 74.2-74.2V370.3c0-96.7 78.7-175.4 175.4-175.4h99.7c96.7 0 175.4 78.7 175.4 175.4V716c0 40.9 33.3 74.2 74.2 74.2h48.3c40.9 0 74.2-33.3 74.2-74.2V473c-0.1-40.9-33.3-74.2-74.2-74.2zM235.1 716c0 12.4-10.1 22.5-22.5 22.5h-48.3c-12.4 0-22.5-10.1-22.5-22.5V473c0-12.4 10.1-22.5 22.5-22.5h48.3c12.4 0 22.5 10.1 22.5 22.5v243z m647.2 0c0 12.4-10.1 22.5-22.5 22.5h-48.3c-12.4 0-22.5-10.1-22.5-22.5V473c0-12.4 10.1-22.5 22.5-22.5h48.3c12.4 0 22.5 10.1 22.5 22.5v243z"></path>
					<path d="M531.3 652.3c-1.7 0-3.3-0.1-5-0.4-10.2-1.7-18.7-8.3-22.7-17.8l-41.1-95.4-37 43.8c-8.1 9.6-19.9 15.1-32.5 15.1h-71.9V546h67.6l56.6-67.1c6.8-8.1 17-12 27.5-10.4 10.4 1.5 19.1 8.2 23.3 17.9l41.6 96.7 21.9-24c8-8.8 19.5-13.9 31.4-13.9h102.4v51.7H595l-41.6 45.7c-5.6 6.2-13.7 9.7-22.1 9.7z"></path>
				</svg>
				`,selector:o,onSelect:function(p){let d=p;return console.log(be+"切换音频",d),t.handler.playUrl(d.url),t.$data.art.storage.set(i,{soundQualityCode:d.soundQualityCode}),p.html}};b.$data.art.setting.find(je)?b.$data.art.setting.update(l):b.$data.art.setting.add(l),s.info("加载m4s的音频：",r),b.handler.playUrl(r.url),this.bind(),this.bindAudio();}else b.handler.playUrl(""),b.$data.art.setting.option.find(i=>i.name===je)&&b.$data.art.setting.remove(je);},bind(){Object.keys(this.events).forEach(e=>{this.$data.art.on(e,this.events[e]);});},bindAudio(){Object.keys(this.audioEvents).forEach(e=>{this.$data.audio.addEventListener(e,this.audioEvents[e],{once:true});});},unbind(){Object.keys(this.events).forEach(e=>{this.$data.art.off(e,this.events[e]);});},unbindAudio(){Object.keys(this.audioEvents).forEach(e=>{this.$data.audio.removeEventListener(e,this.audioEvents[e]);});}},Gt=e=>t=>(b.$data.art=t,typeof e.onRestart=="function"&&(b.userEvent.onRestart=e.onRestart),b.update({from:e.from,audioList:e.audioList}),{name:b.$key.plugin_KEY,update(...n){b.update(...n),b.handler.syncVolume(),b.handler.syncMuted(),b.handler.syncTime();},getAudio(){return b.$data.audio},getCurrentPlayConfig(){return b.$data.option.find(n=>n.url===b.$data.audio.src)}}),dt=b.$key.plugin_KEY,Un={events:{control:e=>{e&&R.updateOnlineTotal({showOnlineTotal:R.$data.option.showOnlineTotal,onlineInfoParams:R.$data.option.onlineInfoParams});}},bind(){Object.keys(this.events).forEach(e=>{R.art.on(e,this.events[e]);});},unbind(){Object.keys(this.events).forEach(e=>{R.art.off(e,this.events[e]);});}},R={art:null,$el:{$topWrap:null,$topTitle:null,$topTitleText:null,$topTitleFollow:null,$topTitleFollowText:null,$topRight:null,$topRightFollow:null},$data:{isInit:false,__option:{},option:{}},$key:{plugin_KEY:"plugin-bilibili-topToolBar"},init(e){this.art.layers.add({name:"top-wrap",html:`
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
            `,mounted:async function(t){R.$el.$topWrap=t,R.$el.$topTitle=t.querySelector(".art-player-top-title"),R.$el.$topTitleText=t.querySelector(".art-player-top-title-text"),R.$el.$topTitleFollow=t.querySelector(".art-player-top-follow"),R.$el.$topTitleFollowText=t.querySelector(".art-player-top-follow-text"),R.$el.$topRight=t.querySelector(".art-player-top-right"),R.$el.$topRightFollow=t.querySelector(".art-player-top-right-follow"),R.update(e),Un.bind();}});},update(e){this.$data.isInit||(this.$data.isInit=true,Object.defineProperties(this.$data.option,{showWrap:{set(t){R.$data.__option.showWrap=t;},get(){return R.$data.__option.showWrap}},showTitle:{set(t){R.$data.__option.showTitle=t;},get(){return R.$data.__option.showTitle}},title:{set(t){R.$data.__option.title=t,typeof t=="string"&&(R.$el.$topTitleText.innerText=t);},get(){return R.$data.__option.title}},showOnlineTotal:{set(t){R.$data.__option.showOnlineTotal=t;},get(){return R.$data.__option.showOnlineTotal}},onlineInfoParams:{set(t){R.$data.__option.onlineInfoParams=t,R.updateOnlineTotal({showOnlineTotal:this.showOnlineTotal,onlineInfoParams:t});},get(){return R.$data.__option.onlineInfoParams}},showRight:{set(t){R.$data.__option.showRight=t;},get(){return R.$data.__option.showRight}},showRightFollow:{set(t){R.$data.__option.showRightFollow=t;},get(){return R.$data.__option.showRightFollow}}})),Object.assign(this.$data.option,e);},async updateOnlineTotal(e){if(!e.showOnlineTotal)return;let t=await lt.onlineTotal({aid:e.onlineInfoParams.aid,bvid:e.onlineInfoParams.bvid,cid:e.onlineInfoParams.cid});t&&(R.$el.$topTitleFollowText.innerText=`${t.total||t.count||0}人正在看`);}},Wt=e=>t=>(R.art=t,R.init(e),{name:R.$key.plugin_KEY,update(n){R.update(n);}}),Qt=R.$key.plugin_KEY,Jt={S:"万与丑专业丛东丝丢两严丧个丬丰临为丽举么义乌乐乔习乡书买乱争于亏云亘亚产亩亲亵亸亿仅从仑仓仪们价众优伙会伛伞伟传伤伥伦伧伪伫体余佣佥侠侣侥侦侧侨侩侪侬俣俦俨俩俪俭债倾偬偻偾偿傥傧储傩儿兑兖党兰关兴兹养兽冁内冈册写军农冢冯冲决况冻净凄凉凌减凑凛几凤凫凭凯击凼凿刍划刘则刚创删别刬刭刽刿剀剂剐剑剥剧劝办务劢动励劲劳势勋勐勚匀匦匮区医华协单卖卢卤卧卫却卺厂厅历厉压厌厍厕厢厣厦厨厩厮县参叆叇双发变叙叠叶号叹叽吁后吓吕吗吣吨听启吴呒呓呕呖呗员呙呛呜咏咔咙咛咝咤咴咸哌响哑哒哓哔哕哗哙哜哝哟唛唝唠唡唢唣唤唿啧啬啭啮啰啴啸喷喽喾嗫呵嗳嘘嘤嘱噜噼嚣嚯团园囱围囵国图圆圣圹场坂坏块坚坛坜坝坞坟坠垄垅垆垒垦垧垩垫垭垯垱垲垴埘埙埚埝埯堑堕塆墙壮声壳壶壸处备复够头夸夹夺奁奂奋奖奥妆妇妈妩妪妫姗姜娄娅娆娇娈娱娲娴婳婴婵婶媪嫒嫔嫱嬷孙学孪宁宝实宠审宪宫宽宾寝对寻导寿将尔尘尧尴尸尽层屃屉届属屡屦屿岁岂岖岗岘岙岚岛岭岳岽岿峃峄峡峣峤峥峦崂崃崄崭嵘嵚嵛嵝嵴巅巩巯币帅师帏帐帘帜带帧帮帱帻帼幂幞干并广庄庆庐庑库应庙庞废庼廪开异弃张弥弪弯弹强归当录彟彦彻径徕御忆忏忧忾怀态怂怃怄怅怆怜总怼怿恋恳恶恸恹恺恻恼恽悦悫悬悭悯惊惧惨惩惫惬惭惮惯愍愠愤愦愿慑慭憷懑懒懔戆戋戏戗战戬户扎扑扦执扩扪扫扬扰抚抛抟抠抡抢护报担拟拢拣拥拦拧拨择挂挚挛挜挝挞挟挠挡挢挣挤挥挦捞损捡换捣据捻掳掴掷掸掺掼揸揽揿搀搁搂搅携摄摅摆摇摈摊撄撑撵撷撸撺擞攒敌敛数斋斓斗斩断无旧时旷旸昙昼昽显晋晒晓晔晕晖暂暧札术朴机杀杂权条来杨杩杰极构枞枢枣枥枧枨枪枫枭柜柠柽栀栅标栈栉栊栋栌栎栏树栖样栾桊桠桡桢档桤桥桦桧桨桩梦梼梾检棂椁椟椠椤椭楼榄榇榈榉槚槛槟槠横樯樱橥橱橹橼檐檩欢欤欧歼殁殇残殒殓殚殡殴毁毂毕毙毡毵氇气氢氩氲汇汉污汤汹沓沟没沣沤沥沦沧沨沩沪沵泞泪泶泷泸泺泻泼泽泾洁洒洼浃浅浆浇浈浉浊测浍济浏浐浑浒浓浔浕涂涌涛涝涞涟涠涡涢涣涤润涧涨涩淀渊渌渍渎渐渑渔渖渗温游湾湿溃溅溆溇滗滚滞滟滠满滢滤滥滦滨滩滪漤潆潇潋潍潜潴澜濑濒灏灭灯灵灾灿炀炉炖炜炝点炼炽烁烂烃烛烟烦烧烨烩烫烬热焕焖焘煅煳熘爱爷牍牦牵牺犊犟状犷犸犹狈狍狝狞独狭狮狯狰狱狲猃猎猕猡猪猫猬献獭玑玙玚玛玮环现玱玺珉珏珐珑珰珲琎琏琐琼瑶瑷璇璎瓒瓮瓯电画畅畲畴疖疗疟疠疡疬疮疯疱疴痈痉痒痖痨痪痫痴瘅瘆瘗瘘瘪瘫瘾瘿癞癣癫癯皑皱皲盏盐监盖盗盘眍眦眬着睁睐睑瞒瞩矫矶矾矿砀码砖砗砚砜砺砻砾础硁硅硕硖硗硙硚确硷碍碛碜碱碹磙礼祎祢祯祷祸禀禄禅离秃秆种积称秽秾稆税稣稳穑穷窃窍窑窜窝窥窦窭竖竞笃笋笔笕笺笼笾筑筚筛筜筝筹签简箓箦箧箨箩箪箫篑篓篮篱簖籁籴类籼粜粝粤粪粮糁糇紧絷纟纠纡红纣纤纥约级纨纩纪纫纬纭纮纯纰纱纲纳纴纵纶纷纸纹纺纻纼纽纾线绀绁绂练组绅细织终绉绊绋绌绍绎经绐绑绒结绔绕绖绗绘给绚绛络绝绞统绠绡绢绣绤绥绦继绨绩绪绫绬续绮绯绰绱绲绳维绵绶绷绸绹绺绻综绽绾绿缀缁缂缃缄缅缆缇缈缉缊缋缌缍缎缏缐缑缒缓缔缕编缗缘缙缚缛缜缝缞缟缠缡缢缣缤缥缦缧缨缩缪缫缬缭缮缯缰缱缲缳缴缵罂网罗罚罢罴羁羟羡翘翙翚耢耧耸耻聂聋职聍联聩聪肃肠肤肷肾肿胀胁胆胜胧胨胪胫胶脉脍脏脐脑脓脔脚脱脶脸腊腌腘腭腻腼腽腾膑臜舆舣舰舱舻艰艳艹艺节芈芗芜芦苁苇苈苋苌苍苎苏苘苹茎茏茑茔茕茧荆荐荙荚荛荜荞荟荠荡荣荤荥荦荧荨荩荪荫荬荭荮药莅莜莱莲莳莴莶获莸莹莺莼萚萝萤营萦萧萨葱蒇蒉蒋蒌蓝蓟蓠蓣蓥蓦蔷蔹蔺蔼蕲蕴薮藁藓虏虑虚虫虬虮虽虾虿蚀蚁蚂蚕蚝蚬蛊蛎蛏蛮蛰蛱蛲蛳蛴蜕蜗蜡蝇蝈蝉蝎蝼蝾螀螨蟏衅衔补衬衮袄袅袆袜袭袯装裆裈裢裣裤裥褛褴襁襕见观觃规觅视觇览觉觊觋觌觍觎觏觐觑觞触觯詟誉誊讠计订讣认讥讦讧讨让讪讫训议讯记讱讲讳讴讵讶讷许讹论讻讼讽设访诀证诂诃评诅识诇诈诉诊诋诌词诎诏诐译诒诓诔试诖诗诘诙诚诛诜话诞诟诠诡询诣诤该详诧诨诩诪诫诬语诮误诰诱诲诳说诵诶请诸诹诺读诼诽课诿谀谁谂调谄谅谆谇谈谊谋谌谍谎谏谐谑谒谓谔谕谖谗谘谙谚谛谜谝谞谟谠谡谢谣谤谥谦谧谨谩谪谫谬谭谮谯谰谱谲谳谴谵谶谷豮贝贞负贠贡财责贤败账货质贩贪贫贬购贮贯贰贱贲贳贴贵贶贷贸费贺贻贼贽贾贿赀赁赂赃资赅赆赇赈赉赊赋赌赍赎赏赐赑赒赓赔赕赖赗赘赙赚赛赜赝赞赟赠赡赢赣赪赵赶趋趱趸跃跄跖跞践跶跷跸跹跻踊踌踪踬踯蹑蹒蹰蹿躏躜躯车轧轨轩轪轫转轭轮软轰轱轲轳轴轵轶轷轸轹轺轻轼载轾轿辀辁辂较辄辅辆辇辈辉辊辋辌辍辎辏辐辑辒输辔辕辖辗辘辙辚辞辩辫边辽达迁过迈运还这进远违连迟迩迳迹适选逊递逦逻遗遥邓邝邬邮邹邺邻郁郄郏郐郑郓郦郧郸酝酦酱酽酾酿释里鉅鉴銮錾钆钇针钉钊钋钌钍钎钏钐钑钒钓钔钕钖钗钘钙钚钛钝钞钟钠钡钢钣钤钥钦钧钨钩钪钫钬钭钮钯钰钱钲钳钴钵钶钷钸钹钺钻钼钽钾钿铀铁铂铃铄铅铆铈铉铊铋铍铎铏铐铑铒铕铗铘铙铚铛铜铝铞铟铠铡铢铣铤铥铦铧铨铪铫铬铭铮铯铰铱铲铳铴铵银铷铸铹铺铻铼铽链铿销锁锂锃锄锅锆锇锈锉锊锋锌锍锎锏锐锑锒锓锔锕锖锗错锚锜锞锟锠锡锢锣锤锥锦锨锩锫锬锭键锯锰锱锲锳锴锵锶锷锸锹锺锻锼锽锾锿镀镁镂镃镆镇镈镉镊镌镍镎镏镐镑镒镕镖镗镙镚镛镜镝镞镟镠镡镢镣镤镥镦镧镨镩镪镫镬镭镮镯镰镱镲镳镴镶长门闩闪闫闬闭问闯闰闱闲闳间闵闶闷闸闹闺闻闼闽闾闿阀阁阂阃阄阅阆阇阈阉阊阋阌阍阎阏阐阑阒阓阔阕阖阗阘阙阚阛队阳阴阵阶际陆陇陈陉陕陧陨险随隐隶隽难雏雠雳雾霁霉霭靓静靥鞑鞒鞯鞴韦韧韨韩韪韫韬韵页顶顷顸项顺须顼顽顾顿颀颁颂颃预颅领颇颈颉颊颋颌颍颎颏颐频颒颓颔颕颖颗题颙颚颛颜额颞颟颠颡颢颣颤颥颦颧风飏飐飑飒飓飔飕飖飗飘飙飚飞飨餍饤饥饦饧饨饩饪饫饬饭饮饯饰饱饲饳饴饵饶饷饸饹饺饻饼饽饾饿馀馁馂馃馄馅馆馇馈馉馊馋馌馍馎馏馐馑馒馓馔馕马驭驮驯驰驱驲驳驴驵驶驷驸驹驺驻驼驽驾驿骀骁骂骃骄骅骆骇骈骉骊骋验骍骎骏骐骑骒骓骔骕骖骗骘骙骚骛骜骝骞骟骠骡骢骣骤骥骦骧髅髋髌鬓魇魉鱼鱽鱾鱿鲀鲁鲂鲄鲅鲆鲇鲈鲉鲊鲋鲌鲍鲎鲏鲐鲑鲒鲓鲔鲕鲖鲗鲘鲙鲚鲛鲜鲝鲞鲟鲠鲡鲢鲣鲤鲥鲦鲧鲨鲩鲪鲫鲬鲭鲮鲯鲰鲱鲲鲳鲴鲵鲶鲷鲸鲹鲺鲻鲼鲽鲾鲿鳀鳁鳂鳃鳄鳅鳆鳇鳈鳉鳊鳋鳌鳍鳎鳏鳐鳑鳒鳓鳔鳕鳖鳗鳘鳙鳛鳜鳝鳞鳟鳠鳡鳢鳣鸟鸠鸡鸢鸣鸤鸥鸦鸧鸨鸩鸪鸫鸬鸭鸮鸯鸰鸱鸲鸳鸴鸵鸶鸷鸸鸹鸺鸻鸼鸽鸾鸿鹀鹁鹂鹃鹄鹅鹆鹇鹈鹉鹊鹋鹌鹍鹎鹏鹐鹑鹒鹓鹔鹕鹖鹗鹘鹚鹛鹜鹝鹞鹟鹠鹡鹢鹣鹤鹥鹦鹧鹨鹩鹪鹫鹬鹭鹯鹰鹱鹲鹳鹴鹾麦麸黄黉黡黩黪黾鼋鼌鼍鼗鼹齄齐齑齿龀龁龂龃龄龅龆龇龈龉龊龋龌龙龚龛龟志制咨只里系范松没尝尝闹面准钟别闲乾尽脏拼冲里",T:"萬與醜專業叢東絲丟兩嚴喪個丬豐臨爲麗舉麼義烏樂喬習鄉書買亂爭於虧雲亙亞產畝親褻嚲億僅從侖倉儀們價衆優夥會傴傘偉傳傷倀倫傖僞佇體餘傭僉俠侶僥偵側僑儈儕儂俁儔儼倆儷儉債傾傯僂僨償儻儐儲儺兒兌兗黨蘭關興茲養獸囅內岡冊寫軍農冢馮沖決況凍淨淒涼凌減湊凜幾鳳鳧憑凱擊凼鑿芻劃劉則剛創刪別剗剄劊劌剴劑剮劍剝劇勸辦務勱動勵勁勞勢勳勐勩勻匭匱區醫華協單賣盧滷臥衛卻巹廠廳歷厲壓厭厙廁廂厴廈廚廄廝縣參靉靆雙發變敘疊葉號嘆嘰籲後嚇呂嗎唚噸聽啓吳嘸囈嘔嚦唄員咼嗆嗚詠咔嚨嚀噝吒咴鹹哌響啞噠嘵嗶噦譁噲嚌噥喲嘜嗊嘮啢嗩唣喚唿嘖嗇囀齧囉嘽嘯噴嘍嚳囁呵噯噓嚶囑嚕噼囂嚯團園囪圍圇國圖圓聖壙場阪壞塊堅壇壢壩塢墳墜壟壠壚壘墾垧堊墊埡墶壋塏堖塒壎堝埝垵塹墮壪牆壯聲殼壺壼處備復夠頭誇夾奪奩奐奮獎奧妝婦媽嫵嫗嬀姍姜婁婭嬈嬌孌娛媧嫺嫿嬰嬋嬸媼嬡嬪嬙嬤孫學孿寧寶實寵審憲宮寬賓寢對尋導壽將爾塵堯尷屍盡層屓屜屆屬屢屨嶼歲豈嶇崗峴嶴嵐島嶺嶽崬巋嶨嶧峽嶢嶠崢巒嶗崍嶮嶄嶸嶔嵛嶁嵴巔鞏巰幣帥師幃帳簾幟帶幀幫幬幘幗冪襆幹並廣莊慶廬廡庫應廟龐廢廎廩開異棄張彌弳彎彈強歸當錄彠彥徹徑徠御憶懺憂愾懷態慫憮慪悵愴憐總懟懌戀懇惡慟懨愷惻惱惲悅愨懸慳憫驚懼慘懲憊愜慚憚慣愍慍憤憒願懾憖憷懣懶懍戇戔戲戧戰戩戶扎撲扦執擴捫掃揚擾撫拋摶摳掄搶護報擔擬攏揀擁攔擰撥擇掛摯攣掗撾撻挾撓擋撟掙擠揮撏撈損撿換搗據捻擄摑擲撣摻摜揸攬撳攙擱摟攪攜攝攄擺搖擯攤攖撐攆擷擼攛擻攢敵斂數齋斕鬥斬斷無舊時曠暘曇晝曨顯晉曬曉曄暈暉暫曖札術樸機殺雜權條來楊榪傑極構樅樞棗櫪梘棖槍楓梟櫃檸檉梔柵標棧櫛櫳棟櫨櫟欄樹棲樣欒桊椏橈楨檔榿橋樺檜槳樁夢檮棶檢櫺槨櫝槧欏橢樓欖櫬櫚櫸檟檻檳櫧橫檣櫻櫫櫥櫓櫞檐檁歡歟歐殲歿殤殘殞殮殫殯毆毀轂畢斃氈毿氌氣氫氬氳匯漢污湯洶沓溝沒灃漚瀝淪滄渢潙滬沵濘淚澩瀧瀘濼瀉潑澤涇潔灑窪浹淺漿澆湞溮濁測澮濟瀏滻渾滸濃潯濜塗涌濤澇淶漣潿渦溳渙滌潤澗漲澀澱淵淥漬瀆漸澠漁瀋滲溫遊灣溼潰濺漵漊潷滾滯灩灄滿瀅濾濫灤濱灘澦漤瀠瀟瀲濰潛瀦瀾瀨瀕灝滅燈靈災燦煬爐燉煒熗點煉熾爍爛烴燭煙煩燒燁燴燙燼熱煥燜燾煅煳熘愛爺牘犛牽犧犢犟狀獷獁猶狽狍獮獰獨狹獅獪猙獄猻獫獵獼玀豬貓蝟獻獺璣璵瑒瑪瑋環現瑲璽珉珏琺瓏璫琿璡璉瑣瓊瑤璦璇瓔瓚甕甌電畫暢畲疇癤療瘧癘瘍癧瘡瘋皰痾癰痙癢瘂癆瘓癇癡癉瘮瘞瘻癟癱癮癭癩癬癲癯皚皺皸盞鹽監蓋盜盤瞘眥矓着睜睞瞼瞞矚矯磯礬礦碭碼磚硨硯碸礪礱礫礎硜硅碩硤磽磑礄確礆礙磧磣鹼碹磙禮禕禰禎禱禍稟祿禪離禿稈種積稱穢穠穭稅穌穩穡窮竊竅窯竄窩窺竇窶豎競篤筍筆筧箋籠籩築篳篩簹箏籌籤簡籙簀篋籜籮簞簫簣簍籃籬籪籟糴類秈糶糲粵糞糧糝餱緊縶糹糾紆紅紂纖紇約級紈纊紀紉緯紜紘純紕紗綱納紝縱綸紛紙紋紡紵紖紐紓線紺紲紱練組紳細織終縐絆紼絀紹繹經紿綁絨結絝繞絰絎繪給絢絳絡絕絞統綆綃絹繡綌綏絛繼綈績緒綾緓續綺緋綽鞝緄繩維綿綬繃綢綯綹綣綜綻綰綠綴緇緙緗緘緬纜緹緲緝縕繢緦綞緞緶線緱縋緩締縷編緡緣縉縛縟縝縫縗縞纏縭縊縑繽縹縵縲纓縮繆繅纈繚繕繒繮繾繰繯繳纘罌網羅罰罷羆羈羥羨翹翽翬耮耬聳恥聶聾職聹聯聵聰肅腸膚肷腎腫脹脅膽勝朧腖臚脛膠脈膾髒臍腦膿臠腳脫腡臉臘醃膕齶膩靦膃騰臏臢輿艤艦艙艫艱豔艹藝節羋薌蕪蘆蓯葦藶莧萇蒼苧蘇檾蘋莖蘢蔦塋煢繭荊薦薘莢蕘蓽蕎薈薺蕩榮葷滎犖熒蕁藎蓀蔭蕒葒葤藥蒞莜萊蓮蒔萵薟獲蕕瑩鶯蓴蘀蘿螢營縈蕭薩蔥蕆蕢蔣蔞藍薊蘺蕷鎣驀薔蘞藺藹蘄蘊藪藁蘚虜慮虛蟲虯蟣雖蝦蠆蝕蟻螞蠶蠔蜆蠱蠣蟶蠻蟄蛺蟯螄蠐蛻蝸蠟蠅蟈蟬蠍螻蠑螿蟎蠨釁銜補襯袞襖嫋褘襪襲襏裝襠褌褳襝褲襉褸襤襁襴見觀覎規覓視覘覽覺覬覡覿覥覦覯覲覷觴觸觶讋譽謄訁計訂訃認譏訐訌討讓訕訖訓議訊記訒講諱謳詎訝訥許訛論訩訟諷設訪訣證詁訶評詛識詗詐訴診詆謅詞詘詔詖譯詒誆誄試詿詩詰詼誠誅詵話誕詬詮詭詢詣諍該詳詫諢詡譸誡誣語誚誤誥誘誨誑說誦誒請諸諏諾讀諑誹課諉諛誰諗調諂諒諄誶談誼謀諶諜謊諫諧謔謁謂諤諭諼讒諮諳諺諦謎諞諝謨讜謖謝謠謗諡謙謐謹謾謫譾謬譚譖譙讕譜譎讞譴譫讖谷豶貝貞負貟貢財責賢敗賬貨質販貪貧貶購貯貫貳賤賁貰貼貴貺貸貿費賀貽賊贄賈賄貲賃賂贓資賅贐賕賑賚賒賦賭齎贖賞賜贔賙賡賠賧賴賵贅賻賺賽賾贗贊贇贈贍贏贛赬趙趕趨趲躉躍蹌跖躒踐躂蹺蹕躚躋踊躊蹤躓躑躡蹣躕躥躪躦軀車軋軌軒軑軔轉軛輪軟轟軲軻轤軸軹軼軤軫轢軺輕軾載輊轎輈輇輅較輒輔輛輦輩輝輥輞輬輟輜輳輻輯轀輸轡轅轄輾轆轍轔辭辯辮邊遼達遷過邁運還這進遠違連遲邇逕跡適選遜遞邐邏遺遙鄧鄺鄔郵鄒鄴鄰鬱郄郟鄶鄭鄆酈鄖鄲醞醱醬釅釃釀釋裏鉅鑑鑾鏨釓釔針釘釗釙釕釷釺釧釤鈒釩釣鍆釹鍚釵鈃鈣鈈鈦鈍鈔鍾鈉鋇鋼鈑鈐鑰欽鈞鎢鉤鈧鈁鈥鈄鈕鈀鈺錢鉦鉗鈷鉢鈳鉕鈽鈸鉞鑽鉬鉭鉀鈿鈾鐵鉑鈴鑠鉛鉚鈰鉉鉈鉍鈹鐸鉶銬銠鉺銪鋏鋣鐃銍鐺銅鋁銱銦鎧鍘銖銑鋌銩銛鏵銓鉿銚鉻銘錚銫鉸銥鏟銃鐋銨銀銣鑄鐒鋪鋙錸鋱鏈鏗銷鎖鋰鋥鋤鍋鋯鋨鏽銼鋝鋒鋅鋶鐦鐗銳銻鋃鋟鋦錒錆鍺錯錨錡錁錕錩錫錮鑼錘錐錦杴錈錇錟錠鍵鋸錳錙鍥鍈鍇鏘鍶鍔鍤鍬鍾鍛鎪鍠鍰鎄鍍鎂鏤鎡鏌鎮鎛鎘鑷鐫鎳鎿鎦鎬鎊鎰鎔鏢鏜鏍鏰鏞鏡鏑鏃鏇鏐鐔钁鐐鏷鑥鐓鑭鐠鑹鏹鐙鑊鐳鐶鐲鐮鐿鑔鑣鑞鑲長門閂閃閆閈閉問闖閏闈閒閎間閔閌悶閘鬧閨聞闥閩閭闓閥閣閡閫鬮閱閬闍閾閹閶鬩閿閽閻閼闡闌闃闠闊闋闔闐闒闕闞闤隊陽陰陣階際陸隴陳陘陝隉隕險隨隱隸雋難雛讎靂霧霽黴靄靚靜靨韃鞽韉鞴韋韌韍韓韙韞韜韻頁頂頃頇項順須頊頑顧頓頎頒頌頏預顱領頗頸頡頰頲頜潁熲頦頤頻頮頹頷頴穎顆題顒顎顓顏額顳顢顛顙顥纇顫顬顰顴風颺颭颮颯颶颸颼颻飀飄飆飈飛饗饜飣飢飥餳飩餼飪飫飭飯飲餞飾飽飼飿飴餌饒餉餄餎餃餏餅餑餖餓餘餒餕餜餛餡館餷饋餶餿饞饁饃餺餾饈饉饅饊饌饢馬馭馱馴馳驅馹駁驢駔駛駟駙駒騶駐駝駑駕驛駘驍罵駰驕驊駱駭駢驫驪騁驗騂駸駿騏騎騍騅騌驌驂騙騭騤騷騖驁騮騫騸驃騾驄驏驟驥驦驤髏髖髕鬢魘魎魚魛魢魷魨魯魴魺鮁鮃鮎鱸鮋鮓鮒鮊鮑鱟鮍鮐鮭鮚鮳鮪鮞鮦鰂鮜鱠鱭鮫鮮鮺鯗鱘鯁鱺鰱鰹鯉鰣鰷鯀鯊鯇鮶鯽鯒鯖鯪鯕鯫鯡鯤鯧鯝鯢鮎鯛鯨鰺鯴鯔鱝鰈鰏鱨鯷鰮鰃鰓鱷鰍鰒鰉鰁鱂鯿鰠鰲鰭鰨鰥鰩鰟鰜鰳鰾鱈鱉鰻鰵鱅鰼鱖鱔鱗鱒鱯鱤鱧鱣鳥鳩雞鳶鳴鳲鷗鴉鶬鴇鴆鴣鶇鸕鴨鴞鴦鴒鴟鴝鴛鷽鴕鷥鷙鴯鴰鵂鴴鵃鴿鸞鴻鵐鵓鸝鵑鵠鵝鵒鷳鵜鵡鵲鶓鵪鵾鵯鵬鵮鶉鶊鵷鷫鶘鶡鶚鶻鶿鶥鶩鷊鷂鶲鶹鶺鷁鶼鶴鷖鸚鷓鷚鷯鷦鷲鷸鷺鸇鷹鸌鸏鸛鸘鹺麥麩黃黌黶黷黲黽黿鼂鼉鞀鼴齇齊齏齒齔齕齗齟齡齙齠齜齦齬齪齲齷龍龔龕龜志制諮只裏系範鬆沒嚐嚐鬧面準鍾別閒乾盡髒拼衝裡"},Et=Jt.S,Bt=Jt.T,He=(e,t)=>{let n,i,a,r,o="",l;for(t?(n=Et,i=Bt):(n=Bt,i=Et),a=0;a<e.length;a++){r=e.charAt(a);const c=e.charCodeAt(a);if(!(c>13312&&c<40899||c>63744&&c<64106)){o+=r;continue}l=n.indexOf(r),l!==-1?o+=i.charAt(l):o+=r;}return o},qn={s2t:(e,t)=>{if(t){for(let n=0;n<t.length;n++)e.includes(t[n].src)&&(e=e.replaceAll(t[n].src,t[n].des));return He(e,true)}else return He(e,true)},t2s:(e,t)=>{if(t){for(let n=0;n<t.length;n++)e.includes(t[n].src)&&(e=e.replaceAll(t[n].src,t[n].des));return He(e,false)}else return He(e,false)}},oe="[artplayer-plugin-bilibiliCCSubTitle]：",Yt={src:"臟妳為傢蔔餵眾係姊託迴蹟儘封啟",des:"脏你为家卜喂众系姐托回迹尽对启",more_src:["乾脆","随著","相信著","奇蹟","拚命","採取","製造"],more_des:["干脆","随着","相信着","奇迹","拼命","采取","制造"],_custom_str:[],generteCustomStr(){for(let e=0;e<this.src.length;e++)this._custom_str.push({src:this.src[e],des:this.des[e]});for(let e=0;e<this.more_src.length;e++)this._custom_str.push({src:this.more_src[e],des:this.more_des[e]});},getCustomStr(){return this._custom_str}},Ue={reset(){this.unbind();},bind(){ue.art.on("video:timeupdate",this.event,this);},unbind(){ue.clearSubTitle(),ue.art.off("video:timeupdate",this.event);},event(){let e=ue.art.currentTime,t=J.allSubTitleInfo[J.currentSelectIndex]?.data;if(!t)return;let n=t.find(a=>a.to>=e&&a.from<=e),i=Array.from(ue.$el.$subtitle.querySelectorAll(".art-subtitle-line"));for(let a=0;a<i.length;a++){const r=i[a],{from:o,to:l}=Reflect.get(r,"data-subtitle-line-info");if(l<=e||o>=e)r.remove();else if(n&&n.from===o&&n.to===l)return}if(n){let a=document.createElement("div");a.className="art-subtitle-line",Reflect.set(a,"data-subtitle-line-info",n),a.setAttribute("data-group","0"),a.innerHTML=n.content,ue.$el.$subtitle.appendChild(a);}}},J={allSubTitleInfo:[],currentSelectIndex:-1,reset(){this.allSubTitleInfo.length=0,this.currentSelectIndex=-1;}},ue={art:null,$key:{plugin_KEY:"plugin-bilibili-cc-subtitle"},$el:{$subtitle:null},async update(e){const t=this,n=`artplayer-bili-cc-subtitle-${e.from}`,i={config:{NAME:"setting-bilibili-cc-subtitle"},getDefaultSettingOption:()=>({name:i.config.NAME,width:200,html:"字幕",tooltip:"",icon:`
					<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 48 48">
						<path d="M0 0h48v48H0z" fill="none"/>
						<path fill="#ffffff" d="M40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM8 24h8v4H8v-4zm20 12H8v-4h20v4zm12 0h-8v-4h8v4zm0-8H20v-4h20v4z"/>
					</svg>
					`,selector:[],onSelect:function(d){let m=d;return t.art.storage.set(n,{lan:m.subTitle_lan}),Ue.unbind(),J.currentSelectIndex=m.subTitle_index,m.subTitle_index!==-1&&Ue.bind(),d.html}}),getSettingOption:()=>{const d=i.getDefaultSettingOption(),m=i.getDefaultSettingSelector();return d.selector.push(m),d.tooltip=m.html,d},getDefaultSettingSelector:()=>({default:true,html:"无",subTitle_lan:"",subTitle_index:0,subTitle_data:[]}),addSetting(d){let m=this.getSettingOption();if(d&&d.length){m.selector.push(...d);let v={index:0,html:m.selector[0].html};const C=t.art.storage.get(n);if(C){const F=m.selector.findIndex(_=>_.subTitle_lan===C.lan);if(F!==-1){const _=m.selector[F];console.log(oe+"选择字幕："+_.html),v.index=F,v.html=_.html;}else console.warn(oe+"没有找到上次选的字幕，使用当前默认无");}for(let F=0;F<m.selector.length;F++)m.selector[F].default=F===v.index;m.tooltip=v.html,J.currentSelectIndex=v.index;}this.isAddSetting()?(console.log(oe+"更新字幕菜单",d??[]),t.art.setting.update(m)):t.art.setting.add(m);},isAddSetting(){return t.art.setting.find(this.config.NAME)!=null}};J.reset(),Ue.reset();const a=i.getDefaultSettingSelector();J.currentSelectIndex=0,J.allSubTitleInfo.push({name:a.html,lan:a.subTitle_lan,data:a.subTitle_data}),i.addSetting();const r=[];this.$el.$subtitle=this.art.template.$subtitle;const o={cid:e.cid};if(e.ep_id&&Reflect.set(o,"ep_id",e.ep_id),e.aid)Reflect.set(o,"aid",e.aid);else if(e.bvid)Reflect.set(o,"bvid",e.bvid);else throw new TypeError("avid or bvid must give one");const l=await Q.get(`https://${Ne.web_host}/x/player/v2?${f.toSearchParamsStr(o)}`,{fetch:true,allowInterceptConfig:false,responseType:"json",headers:{Host:"www.bilibili.com",Referer:"https://www.bilibili.com"}});if(!l.status){console.error(oe+"网络异常，获取视频的字幕信息失败",l);return}console.log(oe+"视频的字幕信息",l);const c=f.toJSON(l.data.responseText);if(!re.isWebApiSuccess(c)){console.error(oe+"获取视频的字幕信息失败",c);return}let p=c.data.subtitle.subtitles;if(!p.length){console.warn(oe+"获取字幕链接列表为空",c);return}for(let d=0;d<p.length;d++){const m=p[d];if(console.log(oe+"请求字幕链接信息："+m.subtitle_url),f.isNull(m.subtitle_url))continue;const h=await Q.get(m.subtitle_url,{responseType:"json",allowInterceptConfig:false,headers:{Referer:"https://www.bilibili.com","User-Agent":f.getRandomPCUA()}});if(h.status){console.log(oe+"成功获取字幕信息");const C=f.toJSON(h.data.responseText).body;let F=J.allSubTitleInfo.length,_={name:m.lan_doc,lan:m.lan,data:C};J.allSubTitleInfo.push(_),r.push({html:m.lan_doc,subTitle_index:F,subTitle_lan:m.lan,subTitle_data:C});}else console.error(oe+"请求字幕链接信息失败",h);}if(g.getValue("bili-bangumi-generateSimpleChineseSubtitle")){let d=J.allSubTitleInfo.find(m=>m.lan==="zh-Hant"||m.name.includes("繁体"));if(d){let m=[];d.data.forEach(C=>{const{content:F,..._}=C,S=qn.t2s(F,Yt.getCustomStr());m.push({content:S,..._});});let h="简体（自动生成）",v=J.allSubTitleInfo.length;J.allSubTitleInfo.push({name:h,lan:"zh-CN-auto",data:m}),r.push({html:h,subTitle_index:v,subTitle_lan:"zh-CN-auto",subTitle_data:m});}}console.log(oe+"加载视频CC字幕信息",J.allSubTitleInfo),J.allSubTitleInfo[J.currentSelectIndex].data==null||J.allSubTitleInfo[J.currentSelectIndex].data.length==0||Ue.bind(),i.addSetting(r);},clearSubTitle(){this.$el.$subtitle&&(this.$el.$subtitle.innerHTML="");},updateArtPlayer(e){this.art=e;}};function Kt(e){return t=>(Yt.generteCustomStr(),ue.updateArtPlayer(t),ue.update(e),{name:ue.$key.plugin_KEY,update(n){ue.update(n);}})}const Zt=ue.$key.plugin_KEY,Xt="[artplayer-plugin-epChoose]：",en=(e,t)=>t==null||t==""?e:isNaN(Number(t))?t.toString():`第${t}话 ${e}`,Gn=e=>{let t="",n=e.EP_LIST.map((i,a)=>(i.isDefault&&(t=i.title),{html:i.title,default:i.isDefault,index:a,callback:i.onSelect}));return {name:ce.$key.SETTING_KEY,icon:'<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2295" width="24" height="24"><path d="M983.745542 312.673133a510.516437 510.516437 0 0 0-109.673817-162.745211A510.516437 510.516437 0 0 0 511.999823 0.000353 510.516437 510.516437 0 0 0 149.927922 149.927922 510.516437 510.516437 0 0 0 0.000353 511.999823a510.516437 510.516437 0 0 0 149.927569 362.071902A510.516437 510.516437 0 0 0 511.999823 1023.999294a510.516437 510.516437 0 0 0 362.071902-149.927569A510.516437 510.516437 0 0 0 1023.999294 511.999823c0-69.137584-13.488538-136.121238-40.253752-199.32669z m-62.852348 372.029408a443.779955 443.779955 0 0 1-95.05535 140.994061 441.908508 441.908508 0 0 1-313.73209 129.941935c-59.886283 0-118.042361-11.758333-172.667407-34.851274a443.779955 443.779955 0 0 1-141.029372-95.090661 441.908508 441.908508 0 0 1-129.941934-313.696779c0-59.886283 11.758333-118.042361 34.851274-172.667407a443.779955 443.779955 0 0 1 95.09066-141.029371 441.908508 441.908508 0 0 1 313.696779-129.941935c59.886283 0 118.077671 11.758333 172.667408 34.851274a443.779955 443.779955 0 0 1 141.064682 95.090661 441.908508 441.908508 0 0 1 129.941934 313.696778c0 59.886283-11.793643 118.042361-34.851274 172.667408zM388.413744 706.206519l317.792775-211.86185-317.792775-211.861849v423.723699z" p-id="2296"></path></svg>',html:"选集",selector:n,tooltip:t,onSelect:function(i){return typeof i.callback=="function"&&i.callback(i,i.index),i.html},mounted(i,a){i.setAttribute("data-plugin",ce.$key.SETTING_KEY);},playNext(){let i=this.selector.findIndex(a=>a.default);i!==-1&&i+1<this.selector.length-1?(i+=1,this.onSelect(this.selector[i])):console.warn(Xt+"当前播放列表已无下一集");}}},qe={$event:{"video:ended":()=>{console.log(Xt+"自动连播启用，播放下一集"),ce.$data.art.setting.find(ce.$key.SETTING_KEY)?.playNext();}},bind(e){Object.keys(this.$event).forEach(t=>{e.on(t,this.$event[t]);});},unbind(e){Object.keys(this.$event).forEach(t=>{e.off(t,this.$event[t]);});}},ce={$flag:{isInitCSS:false},$key:{SETTING_KEY:"setting-ep-choose",PLUGIN_KEY:"plugin-ep-choose"},$data:{art:null},resetEnv(){Object.keys(this.$data).forEach(e=>{Reflect.set(this.$data,e,null);});},init(e,t){this.resetEnv(),this.$data.art=e,qe.unbind(e),t.automaticBroadcast&&qe.bind(e),this.$flag.isInitCSS||(this.$flag.isInitCSS=true,M(`
			.art-setting-panel[data-plugin="${ce.$key.SETTING_KEY}"] .art-setting-item .art-setting-item-left-text{
				max-width: 210px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			`)),this.update(t);},update(e){if(qe.unbind(this.$data.art),e.EP_LIST==null||e.EP_LIST.length===0)return;let t=Gn(e);this.$data.art.setting.find(this.$key.SETTING_KEY)?this.$data.art.setting.update(t):this.$data.art.setting.add(t),e.automaticBroadcast&&qe.bind(this.$data.art);}},tn=e=>t=>(ce.init(t,e),{name:ce.$key.PLUGIN_KEY,update(n){ce.update(n);}}),nn=ce.$key.PLUGIN_KEY,Wn={loading:'<img src="data:image/gif;base64,R0lGODlhWgBaALMOAHR0dAICAnd3dwEBAXh4eAMDAwkJCQ0NDQsLCxwcHA4ODggICHl5eQAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiYWE1ODg5ZS1jN2RmLTRmZmUtYjkzOS0wMmVkMTZhNmNjZDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0I2ODI2NjA1NzhGMTFFNkEyMEVDNzhEOUY1RkQxRjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0I2ODI2NUY1NzhGMTFFNkEyMEVDNzhEOUY1RkQxRjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjljYjgzNjY2LWYxYWUtNGMyZi1hMGEwLThhODJmYjIxM2U0MyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmU1NDE3YzFmLTllODAtMTE3OS04NjdiLWUyN2Y3M2VkMTZkOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAkKAA4ALAAAAABaAFoAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsz3Ta3HW+3bjuV7wbg/H7BYXEYu7YGCaVjuDr6Hwqjy2qEzphNlTaIZfi/ZqY2zHZW0KL1RVGeRS2wiXD+ad+x8jZHXx9GX9MO2GDG3mGGG52iX5ojUFVRWWXmJmam1IknJ+goXoioqWmnHSnqquUpDxVsLGys7S1tk6Uj4dIt72+v7K5IcKQF8R7r1asPC7HHs7L0Z3Ogclr0tES1BzH2NiLSMPWUcnAsd7gTboaxLnm77e527vq2uMm8FXy98/j8z77woFoxw9Fp2pI/mUgKBDMQXrp3iATqNBeD3rMIBaqN9BfwWsZ/7kBmpTwo0aLHIF4kchupIWAKftRLHgpDYeND7skq2jMY0NyjlgqwnlRZ8mfCDlCqyO0A1E7MJueBBrTnc0RG1lGXbfQZ0w8sFLEAhmRK0khKJtWConv6lZXaKlKNWpmyk6TJxVqoWvw7iu49fQyLOrJWitx4QTzQhnX4sTAeLsmjuyO8cWcLScjFan5K9kkl9KapSuG50vDlFtlkjtaNGvEkDeDXIlprsrOts+WjkzVUZmrkmN7zsu7dzkiK3OTRl78NO7WQenK7vkc9u7pt9UJrZz0+vDMwpVPGGuBPOfwrbO/8SbNu3j1oNkvc5/+s3T5oraYhn8f/6e1zfFHQZY+BPbiWkdIFajgLMs9ZgoX+1nmn0upYOfchPK95iCG+L034HHpAAAAh6V4OOAsQYh4hAAC3EJAMO3VV55WmLBYiwAv+pKiirzoE+CGDbAoZFu4eCGiiOdYCBgPQrK4wiVHXlDJk0w4mUUZAGgAXApNDtmMkVn+0KWVLhxppojFsHBmlGm26eabcMYp55x01mnnnXjSEAEAIfkECQoADgAsAAAAAFoAWgAABP/QyUmrvTjrzbv/YCiOZGmeaKqubOu+cCxbTT3fX23jfKbXDEZvSPk1gkSiMShM8pZMZ1HngjalEiPLip1qUdZr12Hcmbhj73eETlMY5QbpxxS7JfCyqH2v5NccfH1+cR6CgxVxchqHiIR6GGGOG38/kXRIkxyVR2SKn6CFbKGkpaangDmoq6ytdh2tsbKhmaqzpHW5uru8lbWGOr3Cw8TFvJghmMbLUVvBrxvImmq/sM+Jt9mWE9K2R2La4VRZ1yDdnuLaTefWQFfp4kjsgeXo38z4xMjz0fXK+QB37asHzB03gkqu8WPkD+GQgQbNNYxIY1zBRf0MLvQx8duFVBn/zXDU6DBkrXllqo3cdokkxYsnEaZUudJiRZceJVI8N5NmTZsHcfpcGXOnpBCcRJITCo2h0afuhlISFdTjxpY57RW91/QDJ3AKSzrNyi5XCl/vwr5sB6RqtToZPZhdalXs2LRrvXwEqgEuXXl2ia4Ty7Jq1qX0mO4pt7DbTDWJ6+aNnKkx48duu2oVchVrZcKXqW6+yzmw58GTR4eie/im5NZsP6emhUsqRNiUUeO2F4cJqGanRycLvfs3kqSmb0sNLnxvzyvIlyvXzPyqMD9oqU9fHLEzLwy7TJZOTfovdRF+y3d2ThZeNsDkBRt272r87vLz6Z+Kst71L/2x8GcapHsqBWTgMOZxB9uBDIbXnDcAAricaxFKeB42FUY4IYbpHJCAAgYYsEABoQRgYgA6nIiicaNw9VUQ/zCoIhMz6tKfBcco84MAAjTIQI0/npjjfZtspQiPKdTogJI4AgcGKDwKoIKQKprok5MpCFBGlEgmWSWTPPBoBJctBCkklmFyKaULZgYwVxJqwnDmhtN4hWadJtyJ55589unnn4AGKuigG0QAACH5BAkKAA4ALAAAAABaAFoAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsW009319t43ym1wxGb0j5NYJEojEoTPKWTOfzF5VOfi1o0yoxNlTaLdf7PXmr3CvZpE1bGORyKOx+x+Udev0CX3vaexhBcRyAgRmDXhp6U3ghfVQ+VEhDd5aXmJmajjmbnp+gOiShpKWWlCCmqqtHYn86TLGys7S1tre3kyKTuL2+v7mwrnnChxi6c8VqrFnKqc4OrNJ4yM9AYtPSy627xaLZzNHQr9fiNsC22ULVneWR6PC/k+zk3PQk8bHz48Tu/ErC7hXy9q9SwIKLCJZbgaVeooXW7CHsImpgww37ILaTqLGIIotG/zAe7NiPI7cKd1BJ8nMh48mISNidUomIUMuRLzfGdJYyloeHsG5eEyjSH8Qzsx5Byklx6MRjCl/y8olPFg2cNEvu7Jg0BVWPTkmC3MrUZ8VlYLAOG7sO4cWmnEa4zMrWHFOwJ5egmLu2qEm6dvMS1bkUcEKjd+FWOYNyh9bCfQ//7csr8Fm7hAevnAx14Z1thvECDd2Zs1DBmkgrhtwNMWBFS2ZGFs06mevIsnvOBl0bZluxcJEKWfqUt+bSZEP3nDBa9erjp5PvBtrKFS2HvQnbVW2LDxq20K+6BqeqeWuT5Mtnxx48/SdZ4RtDJO4+tb7i4nPm2/+L9/ms/AVYi3Z/tiVmTHx41Vefc/IpuOBupzmYHoMJZoPAAQ5SWEEtwkCGDgHBXOMhEwhuSEuHU+FCAIi48JIiJN/ttVxaQBjCXIxmKPKVjHHgiGOOYUAYERQGlbhRZUNc98KLSXT1woDGtLBjlFRWaeWVWGap5ZZcdumlChEAACH5BAkKAA4ALAAAAABaAFoAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsW009319t43ym1wxGbzj5AYXEoTGITOKWTOfzx2xKHb8W1Ho1NlTba8X7PW25YnJ55I2KLQw1mxp8Y+LyHL1uv6vXGmd9GkF5gXuDHIVkPoiJHYtGF4JEf5aXmJmZJZqdnp+GIaCjpJloHKWpqlCiOlWvsLGys7S1THStR7a7vL2xuCDAj5Oup4dHwxjCHsvJRcW5DXxYqzouzajQ1NXc1hLYG8Dd4zvgx9JI5ONC5o3I2+i+sOSR6NF8e/L6tXTtytr+POyr0k+bnncBbxR8d9AevGkpsjArlnAMQIPEdmTzthFdRQri/zA+k9SBUTiKIjviE/kHojuS/458HOlwCc02Ll9KzOgx5UmGVL6pefUBjxee9XL+dPiQ3Rk3RY3upJnU2MtpuPJBFSEViEWZPs9hNQhLhVSIC5lOBErWDccSZal2tRqTqbmpQgFB2prV1b0mdzHCBKlRrFOGJQ0GRjw4r966dWY2lQvZCivKhic3HIuYMGObjtUiPSx6KWevoz3vdHSVtNLWqo0JGwovnmnXdGkI9smo09bKmteqBafqd2rJyxYP7Vost+PIYYFjvsBcF5kqiZEh3925wq3mSGQJh949881UEmJtxh2Mu7pU5EubD/1+VPzX0unX10R0e2fw+nDTX5l0qXk30IG0xOacgtThtxeCaBGoW3nO+LffhRTWheF+Dk64IYcLqjZOACQGUEABJA6g4orVdNjgPDoAIKNWENYDwA8y/pIhITA2cCNONRIUI44A2MLCj17IyIIRSCp5h4sgIBmjjAAsqYaTPTBJZZUrXInlEFt+CQYZVDoRZgwzTunMCmGWuWYLW74p55x01mnnnXjmqecNEQAAIfkEBQoADgAsAAAAAFoAWgAABP/QyUmrvTjrzbv/YCiOZGmeaKqubOu+cCzP9Nrcdb7duO5XvBuD8fsFhcSi7jhMKh3BF7P5lBxb02HVelUdG9Qtt3vKiinfRjnYdJ6h31LW/XYw0qJvuE65x0FmfBdpah1zghh+ZBmHiIl4jIGOGYo8kTx7NYSbnJ2en5t5oKOkpaEhpqmqo1ofq6+wenQ7mG22t7i5uru8TWyzGr+9w8TFub+AtZODyq7NY7AwyM5IaLHXURPTHttw2NjW1dRgSd/m5NCt3M3Cxm3nrd0c0+3u9rr0z4bs+iP37/zErRMnz0hAdOPi9TNIcGGwg+qY9dg38WFDgRQRFtSWLWNFiRr/HV4KiTGcSCCEMOQrSesiQpO1gIH8Y1IhS4skX0KLKfNCpUXeckacB9FNmjYhhhytWe4kSJsvZWUC4evZSp1EXaqb09MDLo5au1pgks5JOxZIy6pNJmTtBFuXUCCbgkqZPKSWUH4UVU1Y3b4nO4IFY2JuzL/oNroNOpRtYqcq7QbWRzZcRi2KcWJ2ygZmIWiXiWQeufnm4M8pFz8VDXk1466lVI+VbFoz69o7SzXW+xh3ZMC+g07ZNHU2cKyhX3f4aYtQcd6lkWftLd1nrtzVmSpHHH03pbRv/bak7t228HOvuot1jR6ber7U2696z72p/Pm3s5N28q9/se2OReTffYC7AJjQemeMZpx8MSjI230Q6rdghPeV9xuF8lmYyC48kcMLhhJuiIsw9RDo3IitOQbJBsawwQMAANxymA2cwEjjFzZapyFiL8Lo4404iojFET4WCSSRPgRRJABSEJKjDksyGUOUP/pg5AxUPrnMllx26eWXYIYp5phkjhkBADs=">',state:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 80" width="100" height="100"><defs><path id="pid-64-svgo-a" d="M0 0h80v80H0z"/><path d="M52.546 8.014a3.998 3.998 0 014.222 3.077c.104.446.093.808.039 1.138a2.74 2.74 0 01-.312.881c-.073.132-.16.254-.246.376l-.257.366-.521.73c-.7.969-1.415 1.926-2.154 2.866l-.015.02a240.945 240.945 0 015.986.341l1.643.123.822.066.41.034.206.018.103.008.115.012c1.266.116 2.516.45 3.677.975a11.663 11.663 0 013.166 2.114c.931.87 1.719 1.895 2.321 3.022a11.595 11.595 0 011.224 3.613c.03.157.046.316.068.474l.015.119.013.112.022.206.085.822.159 1.646c.1 1.098.19 2.198.27 3.298.315 4.4.463 8.829.36 13.255a166.489 166.489 0 01-.843 13.213c-.012.127-.034.297-.053.454a7.589 7.589 0 01-.072.475l-.04.237-.05.236a11.762 11.762 0 01-.74 2.287 11.755 11.755 0 01-5.118 5.57 11.705 11.705 0 01-3.623 1.263c-.158.024-.316.052-.475.072l-.477.053-.821.071-1.644.134c-1.096.086-2.192.16-3.288.23a260.08 260.08 0 01-6.578.325c-8.772.324-17.546.22-26.313-.302a242.458 242.458 0 01-3.287-.22l-1.643-.129-.822-.069-.41-.035-.206-.018c-.068-.006-.133-.01-.218-.02a11.566 11.566 0 01-3.7-.992 11.732 11.732 0 01-5.497-5.178 11.73 11.73 0 01-1.215-3.627c-.024-.158-.051-.316-.067-.475l-.026-.238-.013-.119-.01-.103-.07-.823-.132-1.648a190.637 190.637 0 01-.22-3.298c-.256-4.399-.358-8.817-.258-13.233.099-4.412.372-8.811.788-13.197a11.65 11.65 0 013.039-6.835 11.585 11.585 0 016.572-3.563c.157-.023.312-.051.47-.07l.47-.05.82-.07 1.643-.13a228.493 228.493 0 016.647-.405l-.041-.05a88.145 88.145 0 01-2.154-2.867l-.52-.73-.258-.366c-.086-.122-.173-.244-.246-.376a2.74 2.74 0 01-.312-.881 2.808 2.808 0 01.04-1.138 3.998 3.998 0 014.22-3.077 2.8 2.8 0 011.093.313c.294.155.538.347.742.568.102.11.19.23.28.35l.27.359.532.72a88.059 88.059 0 012.06 2.936 73.036 73.036 0 011.929 3.03c.187.313.373.628.556.945 2.724-.047 5.447-.056 8.17-.038.748.006 1.496.015 2.244.026.18-.313.364-.624.549-.934a73.281 73.281 0 011.93-3.03 88.737 88.737 0 012.059-2.935l.533-.72.268-.359c.09-.12.179-.24.281-.35a2.8 2.8 0 011.834-.881zM30.13 34.631a4 4 0 00-.418 1.42 91.157 91.157 0 00-.446 9.128c0 2.828.121 5.656.364 8.483l.11 1.212a4 4 0 005.858 3.143c2.82-1.498 5.55-3.033 8.193-4.606a177.41 177.41 0 005.896-3.666l1.434-.942a4 4 0 00.047-6.632 137.703 137.703 0 00-7.377-4.708 146.88 146.88 0 00-6.879-3.849l-1.4-.725a4 4 0 00-5.382 1.742z" id="pid-64-svgo-d"/><filter x="-15.4%" y="-16.3%" width="130.9%" height="132.5%" filterUnits="objectBoundingBox" id="pid-64-svgo-c"><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feOffset in="SourceAlpha" result="shadowOffsetOuter2"/><feGaussianBlur stdDeviation="3.5" in="shadowOffsetOuter2" result="shadowBlurOuter2"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowBlurOuter2" result="shadowMatrixOuter2"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="shadowMatrixOuter2"/></feMerge></filter></defs><g fill="none" fill-rule="evenodd" opacity=".8"><mask id="pid-64-svgo-b" fill="#fff"><use xlink:href="#pid-64-svgo-a"/></mask><g mask="url(#pid-64-svgo-b)"><use fill="#000" filter="url(#pid-64-svgo-c)" xlink:href="#pid-64-svgo-d"/><use fill="#FFF" xlink:href="#pid-64-svgo-d"/></g></g></svg>',indicator:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="16" height="16">
        <path d="M16.118 3.667h.382a3.667 3.667 0 013.667 3.667v7.333a3.667 3.667 0 01-3.667 3.667h-11a3.667 3.667 0 01-3.667-3.667V7.333A3.667 3.667 0 015.5 3.666h.382L4.95 2.053a1.1 1.1 0 011.906-1.1l1.567 2.714h5.156L15.146.953a1.101 1.101 0 011.906 1.1l-.934 1.614z" fill="#333"></path>
        <path d="M5.561 5.194h10.878a2.2 2.2 0 012.2 2.2v7.211a2.2 2.2 0 01-2.2 2.2H5.561a2.2 2.2 0 01-2.2-2.2V7.394a2.2 2.2 0 012.2-2.2z" fill="#fff"></path>
        <path d="M6.967 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1zM15.033 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1z" fill="#333"></path>
    </svg>
        `,fullscreenWebOn:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="28" height="28" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_172"><rect width="88" height="88" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_172)"><g transform="matrix(1,0,0,1,44,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-14,-20 C-14,-20 -26,-20 -26,-20 C-27.049999237060547,-20 -27.920000076293945,-19.18000030517578 -27.989999771118164,-18.149999618530273 C-27.989999771118164,-18.149999618530273 -28,-18 -28,-18 C-28,-18 -28,-6 -28,-6 C-28,-4.949999809265137 -27.18000030517578,-4.079999923706055 -26.149999618530273,-4.010000228881836 C-26.149999618530273,-4.010000228881836 -26,-4 -26,-4 C-26,-4 -22,-4 -22,-4 C-20.950000762939453,-4 -20.079999923706055,-4.820000171661377 -20.010000228881836,-5.849999904632568 C-20.010000228881836,-5.849999904632568 -20,-6 -20,-6 C-20,-6 -20,-12 -20,-12 C-20,-12 -14,-12 -14,-12 C-12.949999809265137,-12 -12.079999923706055,-12.819999694824219 -12.010000228881836,-13.850000381469727 C-12.010000228881836,-13.850000381469727 -12,-14 -12,-14 C-12,-14 -12,-18 -12,-18 C-12,-19.049999237060547 -12.819999694824219,-19.920000076293945 -13.850000381469727,-19.989999771118164 C-13.850000381469727,-19.989999771118164 -14,-20 -14,-20z M26,-20 C26,-20 14,-20 14,-20 C12.949999809265137,-20 12.079999923706055,-19.18000030517578 12.010000228881836,-18.149999618530273 C12.010000228881836,-18.149999618530273 12,-18 12,-18 C12,-18 12,-14 12,-14 C12,-12.949999809265137 12.819999694824219,-12.079999923706055 13.850000381469727,-12.010000228881836 C13.850000381469727,-12.010000228881836 14,-12 14,-12 C14,-12 20,-12 20,-12 C20,-12 20,-6 20,-6 C20,-4.949999809265137 20.81999969482422,-4.079999923706055 21.850000381469727,-4.010000228881836 C21.850000381469727,-4.010000228881836 22,-4 22,-4 C22,-4 26,-4 26,-4 C27.049999237060547,-4 27.920000076293945,-4.820000171661377 27.989999771118164,-5.849999904632568 C27.989999771118164,-5.849999904632568 28,-6 28,-6 C28,-6 28,-18 28,-18 C28,-19.049999237060547 27.18000030517578,-19.920000076293945 26.149999618530273,-19.989999771118164 C26.149999618530273,-19.989999771118164 26,-20 26,-20z M-22,4 C-22,4 -26,4 -26,4 C-27.049999237060547,4 -27.920000076293945,4.820000171661377 -27.989999771118164,5.849999904632568 C-27.989999771118164,5.849999904632568 -28,6 -28,6 C-28,6 -28,18 -28,18 C-28,19.049999237060547 -27.18000030517578,19.920000076293945 -26.149999618530273,19.989999771118164 C-26.149999618530273,19.989999771118164 -26,20 -26,20 C-26,20 -14,20 -14,20 C-12.949999809265137,20 -12.079999923706055,19.18000030517578 -12.010000228881836,18.149999618530273 C-12.010000228881836,18.149999618530273 -12,18 -12,18 C-12,18 -12,14 -12,14 C-12,12.949999809265137 -12.819999694824219,12.079999923706055 -13.850000381469727,12.010000228881836 C-13.850000381469727,12.010000228881836 -14,12 -14,12 C-14,12 -20,12 -20,12 C-20,12 -20,6 -20,6 C-20,4.949999809265137 -20.81999969482422,4.079999923706055 -21.850000381469727,4.010000228881836 C-21.850000381469727,4.010000228881836 -22,4 -22,4z M26,4 C26,4 22,4 22,4 C20.950000762939453,4 20.079999923706055,4.820000171661377 20.010000228881836,5.849999904632568 C20.010000228881836,5.849999904632568 20,6 20,6 C20,6 20,12 20,12 C20,12 14,12 14,12 C12.949999809265137,12 12.079999923706055,12.819999694824219 12.010000228881836,13.850000381469727 C12.010000228881836,13.850000381469727 12,14 12,14 C12,14 12,18 12,18 C12,19.049999237060547 12.819999694824219,19.920000076293945 13.850000381469727,19.989999771118164 C13.850000381469727,19.989999771118164 14,20 14,20 C14,20 26,20 26,20 C27.049999237060547,20 27.920000076293945,19.18000030517578 27.989999771118164,18.149999618530273 C27.989999771118164,18.149999618530273 28,18 28,18 C28,18 28,6 28,6 C28,4.949999809265137 27.18000030517578,4.079999923706055 26.149999618530273,4.010000228881836 C26.149999618530273,4.010000228881836 26,4 26,4z M28,-28 C32.41999816894531,-28 36,-24.420000076293945 36,-20 C36,-20 36,20 36,20 C36,24.420000076293945 32.41999816894531,28 28,28 C28,28 -28,28 -28,28 C-32.41999816894531,28 -36,24.420000076293945 -36,20 C-36,20 -36,-20 -36,-20 C-36,-24.420000076293945 -32.41999816894531,-28 -28,-28 C-28,-28 28,-28 28,-28z"></path></g></g></g></svg>',fullscreenWebOff:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="28" height="28" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_177"><rect width="88" height="88" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_177)"><g transform="matrix(1,0,0,1,44,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-14,-20 C-14,-20 -18,-20 -18,-20 C-19.049999237060547,-20 -19.920000076293945,-19.18000030517578 -19.989999771118164,-18.149999618530273 C-19.989999771118164,-18.149999618530273 -20,-18 -20,-18 C-20,-18 -20,-12 -20,-12 C-20,-12 -26,-12 -26,-12 C-27.049999237060547,-12 -27.920000076293945,-11.180000305175781 -27.989999771118164,-10.149999618530273 C-27.989999771118164,-10.149999618530273 -28,-10 -28,-10 C-28,-10 -28,-6 -28,-6 C-28,-4.949999809265137 -27.18000030517578,-4.079999923706055 -26.149999618530273,-4.010000228881836 C-26.149999618530273,-4.010000228881836 -26,-4 -26,-4 C-26,-4 -14,-4 -14,-4 C-12.949999809265137,-4 -12.079999923706055,-4.820000171661377 -12.010000228881836,-5.849999904632568 C-12.010000228881836,-5.849999904632568 -12,-6 -12,-6 C-12,-6 -12,-18 -12,-18 C-12,-19.049999237060547 -12.819999694824219,-19.920000076293945 -13.850000381469727,-19.989999771118164 C-13.850000381469727,-19.989999771118164 -14,-20 -14,-20z M18,-20 C18,-20 14,-20 14,-20 C12.949999809265137,-20 12.079999923706055,-19.18000030517578 12.010000228881836,-18.149999618530273 C12.010000228881836,-18.149999618530273 12,-18 12,-18 C12,-18 12,-6 12,-6 C12,-4.949999809265137 12.819999694824219,-4.079999923706055 13.850000381469727,-4.010000228881836 C13.850000381469727,-4.010000228881836 14,-4 14,-4 C14,-4 26,-4 26,-4 C27.049999237060547,-4 27.920000076293945,-4.820000171661377 27.989999771118164,-5.849999904632568 C27.989999771118164,-5.849999904632568 28,-6 28,-6 C28,-6 28,-10 28,-10 C28,-11.050000190734863 27.18000030517578,-11.920000076293945 26.149999618530273,-11.989999771118164 C26.149999618530273,-11.989999771118164 26,-12 26,-12 C26,-12 20,-12 20,-12 C20,-12 20,-18 20,-18 C20,-19.049999237060547 19.18000030517578,-19.920000076293945 18.149999618530273,-19.989999771118164 C18.149999618530273,-19.989999771118164 18,-20 18,-20z M-14,4 C-14,4 -26,4 -26,4 C-27.049999237060547,4 -27.920000076293945,4.820000171661377 -27.989999771118164,5.849999904632568 C-27.989999771118164,5.849999904632568 -28,6 -28,6 C-28,6 -28,10 -28,10 C-28,11.050000190734863 -27.18000030517578,11.920000076293945 -26.149999618530273,11.989999771118164 C-26.149999618530273,11.989999771118164 -26,12 -26,12 C-26,12 -20,12 -20,12 C-20,12 -20,18 -20,18 C-20,19.049999237060547 -19.18000030517578,19.920000076293945 -18.149999618530273,19.989999771118164 C-18.149999618530273,19.989999771118164 -18,20 -18,20 C-18,20 -14,20 -14,20 C-12.949999809265137,20 -12.079999923706055,19.18000030517578 -12.010000228881836,18.149999618530273 C-12.010000228881836,18.149999618530273 -12,18 -12,18 C-12,18 -12,6 -12,6 C-12,4.949999809265137 -12.819999694824219,4.079999923706055 -13.850000381469727,4.010000228881836 C-13.850000381469727,4.010000228881836 -14,4 -14,4z M26,4 C26,4 14,4 14,4 C12.949999809265137,4 12.079999923706055,4.820000171661377 12.010000228881836,5.849999904632568 C12.010000228881836,5.849999904632568 12,6 12,6 C12,6 12,18 12,18 C12,19.049999237060547 12.819999694824219,19.920000076293945 13.850000381469727,19.989999771118164 C13.850000381469727,19.989999771118164 14,20 14,20 C14,20 18,20 18,20 C19.049999237060547,20 19.920000076293945,19.18000030517578 19.989999771118164,18.149999618530273 C19.989999771118164,18.149999618530273 20,18 20,18 C20,18 20,12 20,12 C20,12 26,12 26,12 C27.049999237060547,12 27.920000076293945,11.180000305175781 27.989999771118164,10.149999618530273 C27.989999771118164,10.149999618530273 28,10 28,10 C28,10 28,6 28,6 C28,4.949999809265137 27.18000030517578,4.079999923706055 26.149999618530273,4.010000228881836 C26.149999618530273,4.010000228881836 26,4 26,4z M28,-28 C32.41999816894531,-28 36,-24.420000076293945 36,-20 C36,-20 36,20 36,20 C36,24.420000076293945 32.41999816894531,28 28,28 C28,28 -28,28 -28,28 C-32.41999816894531,28 -36,24.420000076293945 -36,20 C-36,20 -36,-20 -36,-20 C-36,-24.420000076293945 -32.41999816894531,-28 -28,-28 C-28,-28 28,-28 28,-28z"></path></g></g></g></svg>'},an=()=>({container:"",url:"",volume:1,isLive:false,muted:false,autoplay:false,pip:false,autoMini:false,screenshot:false,setting:true,loop:false,flip:true,playbackRate:true,autoSize:false,aspectRatio:false,fullscreen:true,fullscreenWeb:true,subtitleOffset:true,miniProgressBar:true,mutex:false,backdrop:true,playsInline:false,autoPlayback:true,airplay:true,lock:true,fastForward:true,theme:x.theme,lang:navigator.language.toLowerCase(),moreVideoAttr:{crossOrigin:"anonymous"},icons:Wn}),Le="[artplayer-plugin-quality]：",_e="artplayer-plugin-quality",Ee={AVC:7,HEVC:12,AV1:13};class Qn{art;from;$key={SETTING_KEY:"video-playback-codeid"};constructor(t,n){this.art=t,this.from=n,this.updateSetting();}updateSetting(t){let n=this.getSetting();if(Array.isArray(t?.acceptCodeIdList)){for(let a=0;a<n.selector.length;a++){const r=n.selector[a];t.acceptCodeIdList.findIndex(l=>l.toString()===r.value.toString())===-1&&(n.selector.splice(a,1),a--);}if(!n.selector.find(a=>a.default)&&n.selector.length)if(typeof t?.defaultCodeId=="number"){let a=n.selector.findIndex(r=>r.value===t.defaultCodeId);a!==-1?(n.selector[a].default=true,n.tooltip=n.selector[a].html):(n.selector[0].default=true,n.tooltip=n.selector[0].html);}else n.selector[0].default=true,n.tooltip=n.selector[0].html;}this.art.setting.find(this.$key.SETTING_KEY)?this.art.setting.update(n):this.art.setting.add(n);}getSetting(){const t=this;let n=this.getUserChooseVideoCodingCode(),i=[{html:"AV1",value:Ee.AV1},{html:"HEVC",value:Ee.HEVC},{html:"AVC",value:Ee.AVC}].map(o=>Object.assign(o,{default:o.value===n}));i.find(o=>o.default)||(i=i.map((o,l)=>(o.default=l===0,o)),console.warn(Le+"没有找到用户选择对应的画质编码，将使用排序第一个的画质："+i[0].html));let r=i.find(o=>o.default);return {name:this.$key.SETTING_KEY,html:"播放策略",tooltip:r.html,icon:'<svg t="1727413004405" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3183" width="24" height="24"><path d="M170.666667 256h682.666666c23.466667 0 42.666667 19.2 42.666667 42.666667v170.666666h85.333333V256c0-46.933333-38.4-85.333333-85.333333-85.333333H128c-46.933333 0-85.333333 38.4-85.333333 85.333333v512c0 46.933333 38.4 85.333333 85.333333 85.333333h384v-85.333333H170.666667c-23.466667 0-42.666667-19.2-42.666667-42.666667V298.666667c0-23.466667 19.2-42.666667 42.666667-42.666667z" p-id="3184"></path><path d="M640 512L384 341.333333v341.333334zM968.96 786.346667c1.28-12.373333 1.706667-24.746667 0.426667-36.693334l45.653333-36.266666c4.266667-3.413333 5.12-8.96 2.56-13.653334l-43.946667-76.373333c-2.56-4.693333-8.106667-6.4-13.226666-4.693333l-54.613334 21.333333a146.773333 146.773333 0 0 0-32-17.92l-8.533333-58.026667a10.624 10.624 0 0 0-10.666667-9.386666h-88.32c-5.12 0-9.813333 3.84-10.666666 8.96l-8.533334 58.026666c-11.093333 4.693333-21.76 11.093333-31.573333 17.92l-54.613333-21.333333c-5.12-2.133333-10.666667 0-13.226667 4.693333l-43.946667 76.373334c-2.56 4.693333-1.706667 10.24 2.56 13.653333l45.653334 36.693333c-1.28 12.373333-1.706667 24.746667-0.426667 36.693334l-45.653333 36.266666c-4.266667 3.413333-5.12 8.96-2.56 13.653334l43.946666 76.373333c2.56 4.693333 8.106667 6.4 13.226667 4.693333l54.186667-21.333333c9.813333 7.253333 20.48 13.226667 32 17.92l8.533333 58.026667c0.853333 5.12 5.12 8.96 10.666667 8.96h88.32c5.12 0 9.813333-3.84 10.666666-8.96l8.533334-58.026667c11.093333-4.693333 21.76-11.093333 31.573333-17.92l54.613333 21.333333c5.12 2.133333 10.666667 0 13.226667-4.693333l43.946667-76.373333c2.56-4.693333 1.706667-10.24-2.56-13.653334l-45.226667-36.266666zM810.666667 832c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64z" p-id="3185"></path></svg>',selector:i,onSelect:function(o){let l=o.value;return t.setCurrentVideoCodingCode(l),t.onSettingSelect(l),o.html}}}onSettingSelect(t){}get storageVideoCodingKey(){return `bili-${this.from}-artplayer-videoCodingCode`}setCurrentVideoCodingCode(t){this.art.storage.set(this.storageVideoCodingKey,t);}getUserChooseVideoCodingCode(){let t=this.art.storage.get(this.storageVideoCodingKey)||Ee.AV1;return Object.values(Ee).includes(t)||(console.error(Le+"意外情况，选择的编码格式不是允许的编码，将强制使用默认(av1)，防止过滤掉的视频链接为空："+t),t=Ee.AV1),t}}class Jn extends Qn{$data={qualityOption:null,qualityOptionList:[],qualityCodeIdList:[],currentQualityCodecId:Ee.AV1,currentSelectQualityInfo:null,currentQualityOption:null};constructor(t,n){super(t,n);}setCurrentQualityOption(t=null){this.$data.currentQualityOption=null,this.$data.currentQualityOption=t;}getStorageKey(t){return `artplayer-quality-${t}`}update(t){if(this.$data.qualityOption=null,this.$data.qualityOption=t,this.$data.qualityOptionList.length=0,this.$data.qualityCodeIdList.length=0,this.$data.currentSelectQualityInfo=null,this.$data.currentQualityCodecId=void 0,this.setCurrentQualityOption(),t.qualityList.length){let n=this.getQualityInfo();this.addControls(),super.updateSetting({acceptCodeIdList:this.$data.qualityCodeIdList,defaultCodeId:this.$data.currentQualityCodecId}),this.art.url=n.url;}else this.removeControls();}getControlsOption(){const t=this;let n=this.$data.qualityOptionList.map((a,r)=>({default:r===this.$data.currentSelectQualityInfo?.index,html:a.html,url:a.url,quality:a.quality,frameRate:a.frameRate,mimeType:a.mimeType,codecid:a.codecid,codecs:a.codecs,bandwidth:a.bandwidth}));return {name:_e,index:10,position:"right",html:this.$data.currentSelectQualityInfo.html,selector:n,onSelect:function(a){let r=a;return console.log(Le+"切换画质",r),t.art.switchQuality(r.url),t.art.storage.set(t.getStorageKey(t.$data.qualityOption.from),{quality:r.quality}),t.setCurrentQualityOption({html:r.html,url:r.url,quality:r.quality,frameRate:r.frameRate,mimeType:r.mimeType,codecid:r.codecid,codecs:r.codecs,bandwidth:r.bandwidth}),a.html}}}addControls(){if(this.isAddControls())this.updateQualityControls();else {let t=this.getControlsOption();this.art.controls.add(t);}}getQualityInfo(){let t=this.getUserChooseVideoCodingCode(),n=this.$data.qualityOption.qualityList.filter(c=>c.codecid===t);n.sort((c,p)=>p.quality-c.quality);const i={};for(let c=0;c<this.$data.qualityOption.qualityList.length;c++){const p=this.$data.qualityOption.qualityList[c],d=i[p.codecid]||[];d.push(p),i[p.codecid]=d;}n.length===0&&(n=Object.values(i)[0],this.$data.currentQualityCodecId=n[0].codecid,console.warn(Le+"该画质："+t+"不存在，将使用第一个画质",n)),this.$data.qualityOptionList=[],this.$data.qualityOptionList=n,this.$data.qualityCodeIdList=Object.keys(i);let a=n[0];const r=this.getStorageKey(this.$data.qualityOption.from),o=this.art.storage.get(r);let l={index:0,html:a?.html,url:a?.url};if(this.setCurrentQualityOption(n[0]),o){const c=n.findIndex(p=>p.quality===o.quality);if(c!==-1){const p=n[c];l.index=c,l.url=p.url,l.html=p.html,this.setCurrentQualityOption(p);}else console.warn(Le+"没有找到上次选的画质，使用当前默认第一个画质");}return this.$data.currentSelectQualityInfo=null,this.$data.currentSelectQualityInfo=l,l}updateQualityControls(){let t=this.getControlsOption();console.log(Le+"更新画质切换面板信息",this.$data.qualityOptionList,this.$data.currentQualityOption),this.art.controls.update(t);}removeControls(){this.isAddControls()&&this.art.controls.remove(_e);}isAddControls(){return Reflect.has(this.art.controls,_e)}onSettingSelect(t){this.getQualityInfo(),this.updateQualityControls(),this.updateSetting({acceptCodeIdList:this.$data.qualityCodeIdList,defaultCodeId:this.$data.currentQualityCodecId}),this.$data.currentSelectQualityInfo&&(this.art.url=this.$data.currentSelectQualityInfo.url);}}const rn=e=>t=>{let n=new Jn(t,e.from);return n.update(e),{name:_e,update(i){n.update(i);},getCurrentQualityOption(){return n.$data.currentQualityOption}}},Ge={$data:{art:null},$key:{plugin_KEY:"artplayer-plugin-toast"},$flag:{isInitCSS:false},$config:{originToast:"art-layer-auto-playback",hideClassName:"art-toast-hide-opacity",prefix:"mplayer-toast-gm"},$el:{get $originPlayer(){return L(".art-video-player .art-layers")}},toast(e){typeof e=="string"&&(e={text:e}),this.initCSS();let t=e.parent??this.$el.$originPlayer;if(!t)throw new TypeError("toast parent is null");this.mutationMPlayerOriginToast(t);let n=u.createElement("div",{"data-from":"gm"});if(u.addClass(n,this.$config.prefix),e.showCloseBtn){let o=u.createElement("div",{className:this.$config.prefix+"-close",innerHTML:`
                    <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="m571.733 512 268.8-268.8c17.067-17.067 17.067-42.667 0-59.733-17.066-17.067-42.666-17.067-59.733 0L512 452.267l-268.8-268.8c-17.067-17.067-42.667-17.067-59.733 0-17.067 17.066-17.067 42.666 0 59.733l268.8 268.8-268.8 268.8c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.534 19.2 12.8 29.866 12.8s21.334-4.266 29.867-12.8l268.8-268.8 268.8 268.8c8.533 8.534 19.2 12.8 29.867 12.8s21.333-4.266 29.866-12.8c17.067-17.066 17.067-42.666 0-59.733L571.733 512z"></path></svg>
                `});n.appendChild(o),u.on(o,"click",l=>{u.preventEvent(l),this.closeToast(n);},{capture:true});}let i=u.createElement("span",{className:this.$config.prefix+"-text",innerText:e.text});if(n.appendChild(i),typeof e.timeText=="string"&&e.timeText.trim()!=""){let o=u.createElement("span",{className:this.$config.prefix+"-time",innerText:e.timeText});n.appendChild(o);}if(typeof e.jumpText=="string"&&e.jumpText.trim()!=""){let o=u.createElement("span",{className:this.$config.prefix+"-jump",innerText:e.jumpText});n.appendChild(o),u.on(o,"click",l=>{typeof e.jumpClickCallback=="function"&&(u.preventEvent(l),e.jumpClickCallback(l));},{capture:true});}this.setTransitionendEvent(n,e);let a=typeof e.timeout=="number"&&!isNaN(e.timeout)?e.timeout:3500;t.appendChild(n);let r=setTimeout(()=>{this.closeToast(n);},a);return {$toast:n,timeoutId:r,close:()=>{clearTimeout(r),this.closeToast(n);}}},initCSS(){this.$flag.isInitCSS||(this.$flag.isInitCSS=true,M(`
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
		`),M(`
        .${this.$config.hideClassName}{
            opacity: 0;
            visibility: hidden;
        }
        `));},mutationMPlayerOriginToast(e){let t=this.$el.$originPlayer;t&&(t.hasAttribute("data-mutation")||(s.success("添加观察器，动态更新toast的位置"),t.setAttribute("data-mutation","gm"),f.mutationObserver(t,{config:{subtree:true,childList:true},immediate:true,callback:()=>{this.updatePageToastBottom();}})));},updatePageToastBottom(){let e=Array.from(W(`.${this.$config.prefix}`)).concat(Array.from(W(".".concat(this.$config.originToast))));e.length&&(e.length-1,e.forEach((t,n)=>{t.setAttribute("data-transition","move"),t.style.bottom=`calc( calc( var(--art-control-height) + var(--art-bottom-gap) ) * ${n+1} + 10px)`;}));},closeToast(e){e.classList.add(this.$config.hideClassName);},getTransitionendEventNameList(){return ["webkitTransitionEnd","mozTransitionEnd","MSTransitionEnd","otransitionend","transitionend"]},setTransitionendEvent(e,t){let n=this,i=this.getTransitionendEventNameList();u.on(e,i,function(a){let r=e.getAttribute("data-transition");if(e.classList.contains(n.$config.hideClassName)){typeof t=="object"&&typeof t?.closeCallback=="function"&&t.closeCallback(),e.remove();return}if(r==="move"){e.removeAttribute("data-transition");return}},{capture:true});}},on=e=>t=>(Ge.$data.art=t,{name:Ge.$key.plugin_KEY,toast(...n){return Ge.toast(...n)}}),Yn=Ge.$key.plugin_KEY;class Kn{art;option;$key={plugin_KEY:"artplayer-plugin-videoStatistics",setting_name:"video-statistics"};$data={intervalId:void 0};constructor(t,n){this.art=t,this.option=n,this.addSetting();}addSetting(){this.art.setting.add({name:this.$key.setting_name,icon:"",html:"视频统计信息",mounted:t=>{let n=t.querySelector(".art-setting-item-left-icon");n.innerHTML=`
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M512.50142 958.397886c-119.320573 0-231.499491-46.465265-315.871087-130.837884C112.258737 743.188406 65.792449 631.010511 65.792449 511.688915c0-119.319549 46.466288-231.499491 130.837884-315.871087C281.002952 111.445208 393.180847 64.979944 512.50142 64.979944s231.499491 46.465265 315.871087 130.837884c84.372619 84.372619 130.837884 196.551538 130.837884 315.871087 0 119.321596-46.465265 231.499491-130.837884 315.871087C744.000911 911.932622 631.821993 958.397886 512.50142 958.397886zM512.50142 105.962334c-223.718271 0-405.726581 182.00831-405.726581 405.726581s182.00831 405.726581 405.726581 405.726581c223.718271 0 405.727605-182.00831 405.727605-405.726581S736.220714 105.962334 512.50142 105.962334z"></path>
                    <path d="M510.150886 775.953647c-18.107403 0-32.745798-14.678304-32.745798-32.785707L477.405087 452.191846c0-18.108426 14.638395-32.785707 32.745798-32.785707 18.107403 0 32.745798 14.678304 32.745798 32.785707l0 290.976094C542.896684 761.275343 528.258289 775.953647 510.150886 775.953647z"></path>
                    <path d="M511.357364 296.458969m-45.080731 0a44.054 44.054 0 1 0 90.161463 0 44.054 44.054 0 1 0-90.161463 0Z"></path>
                </svg>
                `.trim(),this.art.proxy(t,"click",i=>{i.stopPropagation(),i.stopImmediatePropagation(),i.preventDefault(),this.art.setting.show=false,this.isRegisterLayer()?this.updateLayer():this.showLayer(true);},{capture:true});}});}getLayerOption(){let t,n,i,a={key:"Resolution:",value:`${this.art.video.videoWidth} x ${this.art.video.videoHeight}`},r,o,l,c=this.art.plugins[_e];if(c){let m=c.getCurrentQualityOption();m&&(t={key:"Mime Type:",value:`${m.mimeType}`},m.codecs.trim()!==""&&(t.value+=`;codecs="${m.codecs}"`),m.frameRate.trim()!==""&&(a.value+="@"+m.frameRate),m.bandwidth&&(r={key:"Video DataRate:",value:(m.bandwidth/1024).toFixed(0)+"Kbps"}));}let p=this.art.plugins[dt];if(p){let m=p.getCurrentPlayConfig();m&&(n={key:"Audio Host:",value:new URL(m.url).host},i={key:"Audio Time:",value:p.getAudio().currentTime.toString()},t&&(t.value.trim()!==""&&(t.value+=", "),t.value+=`${m.mimeType}`,m.codecs.trim()!==""&&(t.value+=`;codecs="${m.codecs}"`)),o={key:"Audio DataRate:",value:(m.bandwidth/1024).toFixed(0)+"Kbps"},l={key:"Audio Duration:",value:p.getAudio().duration.toString()});}let d=[t,{key:"Player Type",value:"ArtPlayer@"+ct.version},a,r,o,{key:"Video Host:",value:new URL(this.art.url).host},n,{key:"Video Time:",value:this.art.currentTime.toString()},i,{key:"Video Duration:",value:this.art.duration.toString()},l];return d.push(...this?.option?.data||[]),{name:this.$key.setting_name,html:`
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
                    ${d.filter(m=>m!=null).map(m=>`
                        <div class="art-player-video-statistics-panel-item">
                            <div class="art-player-video-statistics-panel-title">${m.key}</div>
                            <div class="art-player-video-statistics-panel-content">${m.value}</div>
                        </div>
                        `).join(`
`)}
                </div>
            </div>
            `,mounted:async m=>{let h=m.querySelector(".art-player-video-statistics-close svg");this.art.proxy(h,"click",v=>{v.stopPropagation(),v.stopImmediatePropagation(),v.preventDefault(),this.closeLayer();});}}}isRegisterLayer(){return this.$key.setting_name in this.art.layers}showLayer(t){clearInterval(this.$data.intervalId);let n=this.getLayerOption();this.art.layers.add(n),t&&(this.unbindUpdateLayerEvent(),this.bindUpdateLayerEvent());}updateLayer(){let t=this.getLayerOption();this.art.layers.update(t);}bindUpdateLayerEvent(){this.art.on("play",this.updateLayerEvent_interval,this),this.art.on("restart",this.updateLayerEvent_once,this),this.art.on("m4sAudio:loadedmetadata",this.updateLayerEvent_once,this),this.art.on("pause",this.updateLayerEvent_clear_interval,this),this.art.on("video:ended",this.updateLayerEvent_clear_interval,this),this.art.playing&&this.updateLayerEvent_interval();}unbindUpdateLayerEvent(){this.art.off("play",this.updateLayerEvent_interval),this.art.off("restart",this.updateLayerEvent_once),this.art.off("m4sAudio:loadedmetadata",this.updateLayerEvent_once),this.art.off("pause",this.updateLayerEvent_clear_interval),this.art.off("video:ended",this.updateLayerEvent_clear_interval);}updateLayerEvent_interval(){clearInterval(this.$data.intervalId),this.$data.intervalId=setInterval(()=>{this.updateLayer();},1500);}updateLayerEvent_once(){this.updateLayer();}updateLayerEvent_clear_interval(){clearInterval(this.$data.intervalId);}closeLayer(){clearInterval(this.$data.intervalId),this.art.layers.remove(this.$key.setting_name),this.unbindUpdateLayerEvent();}update(t){this.option=t;}}const ln=e=>t=>{let n=new Kn(t,e);return {name:n.$key.plugin_KEY,update(i){n.update(i);}}},un=()=>({heatmap:false,color:"#FFFFFF",mode:0,mount:void 0,width:800,points:[],filter:e=>e.text.length<=100,beforeVisible:()=>true,emitter:false,maxLength:50,lockTime:3,theme:f.isThemeDark()?"dark":"light"}),Dt=e=>{let t=e.epList||[];if(t.length===1){let n=t[0];return n.pages.map(i=>({isDefault:i.cid===e.cid,title:i.part,aid:e.aid,bvid:e.bvid,cid:i.cid,onSelect(a,r){n.cid=i.cid,ut.updateArtPlayerVideoInfo({aid:e.aid,bvid:e.bvid,cid:i.cid,pic:i.first_frame||"",title:i.part,epList:e.epList||[]},true);}}))}else return t.map(n=>({isDefault:n.aid===e.aid&&n.cid===e.cid,title:en(n.title),aid:n.aid,bvid:n.bvid,cid:n.cid,onSelect(i,a){ut.updateArtPlayerVideoInfo({aid:n.aid,bvid:n.bvid,cid:n.cid,pic:n.arc.pic,title:n.title,epList:e.epList||[]},true);}}))},Be={$data:{art:null,currentOption:null},resetEnv(e){e&&Reflect.set(this.$data,"art",null),Reflect.set(this.$data,"currentOption",null);},async init(e){this.resetEnv(true),this.$data.currentOption=e;const t="artplayer-video-danmaku-option",n=new qt(t),i=n.getLocalArtDanmakuOption(),a={...an(),container:e.container,poster:e.poster,settings:[],plugins:[on(),rn({from:"video",qualityList:e.quality})]};return a.type="mp4",g.getValue("artplayer-plugin-video-danmaku-enable")&&a.plugins.push(Rt({...un(),danmuku:e.danmukuUrl,speed:i.speed,margin:i.margin,opacity:i.opacity,modes:i.modes,fontSize:i.fontSize,antiOverlap:i.antiOverlap,synchronousPlayback:i.synchronousPlayback,visible:i.visible,beforeEmit(r){return new Promise(o=>{console.log(r),setTimeout(()=>{o(true);},1e3);})}})),g.getValue("artplayer-plugin-video-m4sAudioSupport-enable")&&a.plugins.push(Gt({from:"video",audioList:e.audioList||[]})),g.getValue("artplayer-plugin-video-epChoose-enable")&&a.plugins.push(tn({EP_LIST:Dt(e),automaticBroadcast:true})),g.getValue("artplayer-plugin-video-cc-subtitle-enable")&&a.plugins.push(Kt({from:"video",cid:e.cid,aid:e.aid,bvid:e.bvid})),g.getValue("artplayer-plugin-video-toptoolbar-enable")&&a.plugins.push(Wt({onlineInfoParams:{aid:e.aid,cid:e.cid,bvid:e.bvid},title:e.videoTitle,showWrap:true,showTitle:true,showOnlineTotal:true})),g.getValue("artplayer-plugin-video-statistics-enable")&&a.plugins.push(ln({data:[]})),g.getValue("bili-video-playerAutoPlayVideo")&&(a.muted=true,a.autoplay=true),this.$data.art=new ct(a),n.onConfigChange(this.$data.art),this.$data.art},async update(e,t){this.resetEnv(false),this.$data.currentOption=t,s.info("更新新的播放信息",t),e.pause(),s.info("暂停视频"),e.currentTime=0,s.info("重置播放进度"),this.updatePluginInfo(e,t),e.play(),s.info("播放");},updatePluginInfo(e,t){if(e.plugins[_e].update({from:"video",qualityList:t.quality}),s.info("更新画质",t.quality),g.getValue("artplayer-plugin-video-danmaku-enable")&&(e.plugins.artplayerPluginDanmuku.config({danmuku:t.danmukuUrl}),e.plugins.artplayerPluginDanmuku.load(),s.info("更新弹幕姬",t.danmukuUrl)),g.getValue("artplayer-plugin-video-m4sAudioSupport-enable")&&(e.plugins[dt].update({from:"video",audioList:t.audioList||[]}),s.info("更新音频",t.audioList)),g.getValue("artplayer-plugin-video-epChoose-enable")&&(e.plugins[nn].update({EP_LIST:Dt(t),automaticBroadcast:true}),s.info("更新选集信息",t.epList)),g.getValue("artplayer-plugin-video-cc-subtitle-enable")){let i=e.plugins[Zt];const a={from:"video",aid:t.aid,bvid:t.bvid,cid:t.cid};i.update(a),s.info("更新字幕",a);}if(g.getValue("artplayer-plugin-video-toptoolbar-enable")){let i=e.plugins[Qt];const a={showRight:true,showRightFollow:true,showWrap:true,showTitle:true,showOnlineTotal:true,title:t.videoTitle,onlineInfoParams:{aid:t.aid,cid:t.cid,bvid:t.bvid}};i.update(a),s.info("更新顶部标题",a);}}},sn=`.artplayer-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
}
`;function Zn(e){let t=[];return e.video.forEach(n=>{if(!e.accept_quality.includes(n.id))return;let i=e.support_formats.find(o=>o.quality===n.id),a=ee.findBetterCDN(n.base_url,n.baseUrl,n.backup_url,n.backupUrl);a=ee.replaceVideoCDN(a);let r=i?.new_description;t.push({name:r,url:a,type:n.mimeType||n.mime_type,id:n.id,quality:n.id,vip:false,codecid:n.codecid,codecs:n.codecs,frameRate:n.frameRate||n.frame_rate,bandwidth:n.bandwidth});}),t}const cn=async e=>{const t=[];let n=[];if(g.getValue("bili-video-playType","mp4")==="mp4"){const r=await lt.playUrl({bvid:e.bvid,cid:e.cid,fnval:1,fnver:0,fourk:1,high_quality:1,qn:127,setPlatformHTML5:true});if(s.info(["视频播放地址信息：",r]),!r)return;let o=r.durl[0],l=r.support_formats.find(d=>d.quality===r.quality),c=ee.findBetterCDN(o.url,o.url||o.backup_url?.[0]),p=l?.new_description;n.push({name:p,url:c,type:"audio/mp4",id:r.quality,codecid:r.video_codecid,quality:r.quality,vip:false,codecs:"",frameRate:"",bandwidth:0});}else {const r=await lt.playUrl({bvid:e.bvid,cid:e.cid,fnval:3088,fnver:0,fourk:1,high_quality:1,qn:127,setPlatformHTML5:false});if(s.info(["视频播放地址信息：",r]),!r)return;r.dash.audio.forEach(o=>{let l=ee.findBetterCDN(o.baseUrl,o.base_url,o.baseUrl,o.backup_url);l=ee.replaceVideoCDN(l,true),t.push({url:l,id:o.id,text:Ut[o.id]||"",codecs:o.codecs,mimeType:o.mimeType,bandwidth:o.bandwidth,size:0});}),t.sort((o,l)=>l.id-o.id),s.info("ArtPlayer: 获取的音频信息",t),n=[...Zn({accept_quality:r.accept_quality,support_formats:r.support_formats,video:r.dash.video})],s.info("ArtPlayer: 获取的视频画质信息",n);}const i=n.map((r,o)=>({quality:r.quality,html:r.name,url:r.url,codecid:r.codecid,codecs:r.codecs,frameRate:r.frameRate,mimeType:r.type,bandwidth:r.bandwidth})),a={container:null,epList:e.epList,audioUrl:null,url:"",poster:e.pic,aid:e.aid,bvid:e.bvid,cid:e.cid,videoTitle:e.title,danmukuUrl:`https://api.bilibili.com/x/v1/dm/list.so?oid=${e.cid}`,quality:i};return a.url=n?.[0]?.url,t.length&&(a.audioList=t.map((r,o)=>({isDefault:o===0,url:r.url,soundQualityCode:r.id,soundQualityCodeText:r.text,codecs:r.codecs,mimeType:r.mimeType,bandwidth:r.bandwidth,size:r.size}))),a},ut={$data:{art:null},init(){g.execMenu("bili-video-enableArtPlayer",()=>{this.coverVideoPlayer();});},coverVideoPlayer(){if(L("#artplayer"))s.warn("已使用ArtPlayer覆盖原播放器，更新播放信息");else {s.info("覆盖播放器"),M(`
            /* 隐藏原本的播放器 */
			${x.className.video} .m-video-player .player-container,
			${x.className.mVideo} .m-video-player .player-container{
				display: none !important;
			}
			
			${pt}
			
			${sn}

			`);let e=g.getValue("bili-video-artplayer-controlsPadding-left-right",0);e!=0&&M(`
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
				`);}this.updateArtPlayerVideoInfo();},updateArtPlayerVideoInfo(e,t){const n=this,i=()=>L(x.className.video+" .m-video-player")||L(x.className.mVideo+" .m-video-player"),a=r=>{const o=r?.playerOptions?.aid||r?.info?.aid,l=r?.playerOptions?.bvid||r?.info?.bvid;let c=r?.playerOptions?.cid||r?.cid||r?.info?.cid;const p=r?.pic||r?.info?.pic;let d=r?.title||r?.info?.title;const m=r?.info?.p,h=r?.info?.pages;if(typeof m=="number"&&Array.isArray(h)){const v=h.findIndex(C=>C.page===m);if(v!==0){const C=h[v];typeof C?.cid=="number"&&(c=C.cid),typeof C?.part=="string"&&(d=C.part);}}return {aid:o,bvid:l,cid:c,pic:p,title:d}};k.waitVuePropToSet(i,{msg:"等待m-video-player加载完成",check(r){const{aid:o,bvid:l,cid:c}=a(r);return !t&&Be.$data.currentOption!=null?(Be.$data.art.pause(),typeof o=="number"&&typeof l=="string"&&typeof c=="number"&&Be.$data.currentOption.cid!==c):typeof o=="number"&&typeof l=="string"&&typeof c=="number"},async set(r){const o=i();let{aid:l,bvid:c,cid:p,pic:d,title:m}=a(r),h=[];const v=L(".m-video-season-new"),C=k.getVue(v),F=L(".m-video-part-new")||L(".m-video-part"),_=k.getVue(F);if(C){let y=C?.videoList;Array.isArray(y)&&(h=y);}else if(_){let y=_?.info,V=_?.p,D=_?.pages||_?.info?.pages;Array.isArray(D)&&h.push({season_id:0,section_id:0,id:0,aid:l||y.aid,bvid:c||y.bvid,cid:p||y.cid,title:m||y.title,attribute:0,arc:{aid:l||y.aid,videos:y?.videos,type_id:0,type_name:"",copyright:y?.copyright,pic:y?.pic,title:y?.title,pubdate:y?.pubdate,ctime:y?.ctime,desc:y?.desc,state:y?.state,duration:y?.duration,rights:y?.rights,author:y?.owner,stat:y?.stat,dynamic:y?.dynamic,dimension:y?.dimension,desc_v2:y?.desc_v2,is_chargeable_season:y?.is_chargeable_season,is_blooper:y?.is_blooper,enable_vt:y?.enable_vt,vt_display:y?.vt_display},page:y?.pages?.[V],pages:y?.pages});}e==null&&(e={aid:l,bvid:c,cid:p,pic:d,title:m,epList:h}),s.info(`视频播放信息 => aid：${l} bvid：${c} cid：${p}`);const S=await cn(e);if(S==null)return;let E=L("#artplayer");if(!E){const y=u.createElement("div",{className:"artplayer-container",innerHTML:`
								<div id="artplayer"></div>
							`});E=y.querySelector("#artplayer"),u.append(o,y);}if(S.container=E,n.$data.art==null){let y=await Be.init(S);if(y)n.$data.art=y;else return;n.$data.art.volume=1,n.$data.art.once("ready",()=>{g.execMenu("bili-video-playerAutoPlayVideoFullScreen",async()=>{s.info("自动进入全屏"),n.$data.art.fullscreen=true,n.$data.art.once("fullscreenError",()=>{s.warn("未成功进入全屏，需要用户交互操作，使用网页全屏代替"),n.$data.art.fullscreenWeb=true;});});});}else {const y=L(".artplayer-container");y&&!y.contains(n.$data.art.template.$container)&&(s.warn("artplayer-container的artplayer被移除了，重新添加元素"),u.empty(y),u.append(y,n.$data.art.template.$container)),await Be.update(n.$data.art,S);}o.style.paddingTop="";}});}},Xn={$data:{isAddBeautifyCSS:false,isInitCommentModule:false,isInitDescModule:false},init(){ut.init(),g.execMenuOnce("bili-video-cover-bottomRecommendVideo",()=>{this.coverBottomRecommendVideo();}),g.execMenuOnce("bili-video-cover-UpWrapper",()=>{this.coverUpWrapper();}),g.execMenuOnce("bili-video-cover-seasonNew",()=>{this.coverSeasonNew();}),u.onReady(()=>{g.execMenu("bili-video-addCommentModule",()=>{this.addCommentModule();}),g.execMenu("bili-video-addDescModule",()=>{this.addDescModule();});});},beautify(){s.info("美化显示"),this.$data.isAddBeautifyCSS||(this.$data.isAddBeautifyCSS=true,M(`
				@charset "UTF-8";
				${x.className.video} .video-list .card-box {
					--left-card-width: 33%;
					--right-child-padding: 1.333vmin;
					/* 开启了bili-video-beautify */
				}
				${x.className.video} .video-list .card-box .v-card-toapp {
					width: 100%;
					border-bottom: 1px solid #b5b5b5;
					padding-left: 0;
					padding-right: 0;
				}
				${x.className.video} .video-list .card-box .v-card-toapp > a {
					display: flex;
					flex-wrap: nowrap;
					gap: var(--right-child-padding);
				}
				${x.className.video} .video-list .card-box .v-card-toapp > a .card {
					width: var(--left-card-width);
					height: 80px;
					flex: 0 auto;
				}
				${x.className.video} .video-list .card-box .v-card-toapp > a .card .count {
					background: transparent;
				}
				${x.className.video} .video-list .card-box .v-card-toapp > a .card .count .left {
					display: list-item;
				}
				${x.className.video} .video-list .card-box .v-card-toapp > a .card .count .left span.item {
					display: none;
				}
				${x.className.video} .video-list .card-box .v-card-toapp > a .card .count .duration {
					background: rgba(0, 0, 0, 0.4);
					border-radius: 0.6vmin;
					padding: 0px 0.5vmin;
					right: 1vmin;
					bottom: 1vmin;
				}
				${x.className.video} .video-list .card-box .v-card-toapp > a .title {
					/*flex: 1;*/
					/*padding: var(--right-child-padding);*/
					padding-top: 0;
					margin-top: 0;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}
				${x.className.video} .video-list .card-box .gm-right-container {
					display: flex;
					flex-direction: column;
					width: calc(100% - var(--left-card-width));
					justify-content: space-between;
				}
				${x.className.video} .video-list .card-box .gm-right-container > * {
					padding: var(--right-child-padding);
					padding-bottom: 0;
				}
				${x.className.video} .video-list .card-box .gm-right-container .left {
					gap: 1rem;
				}
				${x.className.video} .video-list .card-box .gm-right-container .left span {
					display: flex;
					align-items: safe center;
					gap: 1vmin;
				}
				${x.className.video} .video-list .card-box .gm-right-container .gm-up-name,
				${x.className.video} .video-list .card-box .gm-right-container .left {
					color: #999;
					font-size: 3vmin;
					transform-origin: left;
					display: flex;
					/*align-items: safe center;*/
					align-items: safe flex-end;
				}
				${x.className.video} .video-list .card-box .gm-right-container .gm-up-name svg {
					width: 3vmin;
					height: 3vmin;
				}
				${x.className.video} .video-list .card-box .gm-right-container .gm-up-name-text {
					margin-left: 1vmin;
				}
				${x.className.video} .video-list .card-box .gm-right-container .num {
					margin-right: 4vmin;
				}
				${x.className.video} .video-list .card-box > a.v-card {
					width: 100%;
					border-bottom: 1px solid #b5b5b5;
					padding-left: 0;
					padding-right: 0;
					display: flex;
					flex-wrap: nowrap;
				}
				${x.className.video} .video-list .card-box > a.v-card .card {
					width: var(--left-card-width);
					height: 100%;
					flex: 0 auto;
				}
				${x.className.video} .video-list .card-box > a.v-card .card .count {
					background: transparent;
				}
				${x.className.video} .video-list .card-box > a.v-card .card .count span {
					display: none;
				}
				${x.className.video} .video-list .card-box > a.v-card .card .count .duration {
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
				${x.className.video} .video-list .card-box > a.v-card .title {
					flex: 1;
					/*padding: var(--right-child-padding);*/
					padding-top: 0;
					margin-top: 0;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}

			`)),u.waitNode(x.className.video+" .bottom-tab .list-view .card-box",1e4).then(e=>{if(!e){s.error("$cardBox is null");return}function t(r){let o=r.querySelector(".title"),l=r.querySelector(".count .left"),c=!!r.querySelector(".gm-right-container"),p=k.getVue(r);if(o&&l&&p&&!c){let d=p?.info?.owner?.name;if(d==null){s.error("美化显示-handleVCardToApp：获取up主名字失败");return}r.querySelector(".count");let m=o.cloneNode(true),h=l.cloneNode(true);u.hide(o);let v=r.querySelector(".open-app.weakened");v&&u.hide(v);let C=document.createElement("div");C.className="gm-up-name",C.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${d}</span>
						`;let F=document.createElement("div"),_=document.createElement("div");F.className="gm-right-container",_.className="gm-right-bottom",u.after(o,F),F.appendChild(m),F.appendChild(_),_.appendChild(C),_.appendChild(h);}}function n(r){let o=r.querySelector(".title"),l=r.querySelector(".count"),c=!!r.querySelector(".gm-right-container"),p=k.getVue(r);if(o&&l&&p&&!c){let d=p?.info?.duration;if(d==null){s.error("美化显示-handleVCard：获取视频时长失败");return}let m=p?.info?.owner?.name;if(m==null){s.error("美化显示-handleVCard：获取up主名字失败");return}let h=o.cloneNode(true),v=l.cloneNode(true);u.hide(o);let C=document.createElement("div");C.className="duration",C.innerText=N.parseDuration(d),v.className="left";let F=document.createElement("div");l.appendChild(C),F.className="gm-up-name",F.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${m}</span>
						`;let _=document.createElement("div"),S=document.createElement("div");_.className="gm-right-container",S.className="gm-right-bottom",u.after(o,_),_.appendChild(h),_.appendChild(S),S.appendChild(F),S.appendChild(v);}}let i=new f.LockFunction(()=>{let r=W(x.className.video+" .bottom-tab .list-view .card-box .v-card-toapp"),o=W(x.className.video+" .bottom-tab .list-view .card-box>a.v-card");r.forEach(l=>{t(l);}),o.forEach(l=>{n(l);});},25),a=L(x.className.video);a?f.mutationObserver(a,{config:{subtree:true,attributes:true,childList:true},callback(){i.run();}}):s.error("未找到视频根节点");});},repairVideoBottomAreaHeight(){return s.info("修复视频底部区域高度"),M(`
		${x.className.video},
		${x.className.mVideo} {
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
			${x.className.video},
			${x.className.mVideo}{
				.m-video-info-new{
					margin-top: 72vmin;
				}
			}
		}
		`)},coverUpWrapper(){s.info("修复up主信息区域的点击事件"),u.on(document,"click",[x.className.video+" .bottom-wrapper .up-wrapper",x.className.mVideo+" .bottom-wrapper .up-wrapper"],function(e){let n=e.target.closest(".bottom-wrapper");if(!n){s.error("获取元素.bottom-wrapper失败");return}let i=k.getVue(n);if(!i){s.error("获取元素.bottom-wrapper的vue实例失败");return}let a=i?.upInfo?.card?.mid;typeof a=="string"?N.goToUrl(Ce.getUserSpaceUrl(a)):w.error("获取mid失败");},{capture:true});},coverBottomRecommendVideo(){s.info("覆盖 相关视频 点击事件"),u.on(document,"click",[x.className.video+" .list-view .card-box .launch-app-btn",x.className.mVideo+" .list-view .card-box .launch-app-btn"],function(e){let t=e.target,n=k.getVue(t);if(!n){w.error("获取相关视频的__vue__失败");return}let i=n.bvid;if(f.isNull(i))if(n.$children&&n.$children[0]&&f.isNotNull(n.$children[0].bvid))i=n.$children[0].bvid;else {w.error("获取相关视频的bvid失败");return}s.info("相关视频的bvid: "+i),N.goToUrl(Ce.getVideoUrl(i)),u.preventEvent(e);},{capture:true});},coverSeasonNew(){s.info("覆盖 选集视频列表 点击事件");function e(t){let n=t.target,i=k.getVue(n);if(!i){w.error("获取选集视频的目标视频的__vue__失败");return}let a=i.bvid;if(f.isNull(a)){w.error("获取相关视频的bvid失败");return}s.info("相关视频的bvid: "+a),N.goToUrl(Ce.getVideoUrl(a)),u.preventEvent(t);}u.on(document,"click",[x.className.video+" .m-video-season-new .video-card .launch-app-btn",x.className.mVideo+" .m-video-season-new .video-card .launch-app-btn"],e,{capture:true}),u.on(document,"click",[x.className.video+" .m-video-season-panel .season-video-item .launch-app-btn",x.className.mVideo+" .m-video-season-panel .season-video-item .launch-app-btn"],e,{capture:true});},repairLinkJump(){s.info("修复链接跳转");let e=new f.LockFunction(()=>{["a.member-link:not([href])[data-url]","a.jump-link:not([href])[data-url]"].forEach(t=>{W(t).forEach(n=>{n.href=n.getAttribute("data-url");});});});f.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{e.run();}});},gestureReturnToCloseCommentArea(){s.info("手势返回关闭评论区，全局监听document点击.sub-reply-preview"),u.waitNode("#app").then(e=>{f.waitVueByInterval(e,()=>{let t=k.getVue(e);return t==null?false:typeof t?.$router?.options?.scrollBehavior!=null},250,1e4).then(t=>{let n=k.getVue(e);if(!n){s.error("获取#app的vue属性失败");return}let i=n.$router.options.scrollBehavior;n.$router.options.scrollBehavior=function(a,r,o){return a.hash==="#/seeCommentReply"?(s.info("当前操作为打开评论区，scrollBehavior返回null"),null):a.hash===""&&r.hash==="#/seeCommentReply"?(s.info("当前操作为关闭评论区，scrollBehavior返回null"),null):i.call(this,...arguments)};});}),u.on(document,"click",".sub-reply-preview",function(e){let t=L("#app"),n=k.getVue(t);if(!n){s.error("获取#app元素失败");return}let i=N.hookGestureReturnByVueRouter({vueInst:n,hash:"#/seeCommentReply",callback(a){if(!a)return  false;let r=L(".dialog-close-icon");return r?r.click():s.error("评论区关闭失败，原因：元素dialog-close-icon获取失败"),true}});u.waitNode(".dialog-close-icon").then(a=>{u.on(a,"click",function(){i.resumeBack(false);},{capture:true,once:true});});});},enterVideoFullScreen(){u.waitNode(".mplayer-btn-widescreen",5e3).then(e=>{if(!e){s.error("获取全屏按钮失败"),w.error("获取全屏按钮失败");return}if(e.closest(".mplayer-wide")){s.warn("当前的全屏按钮是【退出全屏】，不点击");return}s.info("进入全屏"),e.click();});},optimizationScroll(){let e=null,t=null,n=null,i=null,a=null,r=0;u.on(document,"scroll",c=>{let p=n.getBoundingClientRect().top;p>=0?p<=r?t.style.paddingTop=p+"px":t.style.paddingTop="":t.style.paddingTop="0px";let d=u.height(e);i.getBoundingClientRect().top<d?a.hasAttribute("data-is-fixed")||(a.style.cssText=`position: fixed;left: 0px;top: ${d}px;z-index: 10000;width: 100%;`,a.setAttribute("data-is-fixed","true")):(a.style.cssText="",a.removeAttribute("data-is-fixed"));},{passive:true});},disableSwipeTab(){s.info("禁止滑动切换tab"),k.waitVuePropToSet(".m-video-bottom-tab",{msg:"等待tab的vue属性touchstart、touchmove、touchend事件，_bindEvents函数",check(e){return e?.slider?.el instanceof HTMLElement&&typeof e?.slider?.events?.touchstart=="function"&&typeof e?.slider?.events?.touchmove=="function"&&typeof e?.slider?.events?.touchend=="function"&&typeof e?.slider?._bindEvents=="function"},set(e){let t=e.slider.el;t.removeEventListener("touchstart",e.slider.events.touchstart),t.removeEventListener("touchmove",e.slider.events.touchmove),t.removeEventListener("touchend",e.slider.events.touchend),e.slider._bindEvents=()=>{},s.success("成功禁用滑动，清除touchstart、touchmove、touchend事件，覆盖_bindEvents函数");}});},addCommentModule(){s.info("新增评论模块"),this.$data.isInitCommentModule||(this.$data.isInitCommentModule=true,te.setGMResourceCSS(kn.Viewer),M(jn),M(`
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
			`),M(`
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
			`)),u.waitNode(".m-video-info",1e4).then(e=>{if(!e){s.error("获取视频信息元素失败");return}u.remove(".comment-module-show-btn"),u.remove(".close-comment-module-btn"),u.remove("#comment-module-wrapper");const t="comment-module";let n=new Hn({hash:t,useUrl:true,beforeHistoryBackCallBack(o){let l=L(".viewer-button.viewer-close");l&&l.click(),o&&a.click();}}),i=u.createElement("div",{className:"comment-module-show-btn",innerHTML:"查看评论"}),a=u.createElement("span",{className:"close-comment-module-btn",innerHTML:"×"});u.on(i,"click",o=>{u.preventEvent(o),u.css(r,{display:"block"}),u.css(a,{display:"flex"}),n.enterGestureBackMode();}),u.on(a,"click",o=>{u.preventEvent(o),u.css(r,{display:""}),u.css(a,{display:""}),n.quitGestureBackMode(false);}),u.append(e,i);let r=u.createElement("div",{id:"comment-module-wrapper"});u.append(document.body,r),u.after(r,a),Pn.init(r);});},addDescModule(){s.info("新增简介模块"),this.$data.isInitDescModule||(this.$data.isInitDescModule=true,M(`
				${x.className.mVideo} .m-video-info .bottom-wrapper{
					flex-direction: column;
					align-items: flex-start;
					height: auto;
				}
			`),M(`
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
	
			`)),u.remove(x.className.mVideo+"  .m-video-info .video-desc-wrapper"),k.waitVuePropToSet(x.className.mVideo+"  .m-video-info .bottom-wrapper",{check(e){return typeof e?.info?.bvid=="string"},set(e,t){let n=e.info,i=e.upInfo;i.follower,i.archive_count;let a=n.stat.view,r=n.stat.danmaku;n.ctime;let o=n.bvid,l=n.desc,c=n.stat.like,p=n.stat.coin,d=n.stat.favorite,m=n.stat.share,h=u.createElement("div",{className:"video-desc-wrapper",innerHTML:`
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
									<span class="video-info-text" data-value="${a}">${N.parseCount(a)}</span>
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
									<span class="video-info-text" data-value="${r}">${N.parseCount(r)}</span>
								</div>
								<span class="video-info-text">${f.formatTime(n.ctime*1e3,"yyyy年MM月dd日 HH:mm:ss")}</span>
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
									<span data-value="${c}">${N.parseCount(c)}</span>
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
									<span data-value="${p}">${N.parseCount(p)}</span>
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
									<span data-value="${d}">${N.parseCount(d)}</span>
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
									<span data-value="${m}">${N.parseCount(m)}</span>
								</div>
							</div>
						`});t.appendChild(h);}});}},ei=`.artplayer-container {
  width: 100vw;
  height: 35vh;
}
`,ye={getUrl(e){if(e!=null)return e.getAttribute("universallink")},jumpToUrl(e){let t=e.target,n=t.querySelector("bili-open-app")||t.querySelector("m-open-app");if(n){let i=ye.getUrl(n);i?N.goToUrl(i):(w.error("获取bili-open-app的Url失败"),s.error("获取bili-open-app的Url失败"));}else w.error("未获取到<bili-open-app>元素"),s.error("未获取到<bili-open-app>元素");}},Re={filteringSensitiveSearchParamData(e){const t=f.assign({},e,true);return Reflect.deleteProperty(t,"access_key"),Reflect.deleteProperty(t,"access_token"),t},failToast(e){s.error(e),alert(JSON.stringify(e,null,4));}},kt={async getPlayUrl(e){let t={avid:"",cid:"",ep_id:"",qn:127,fnver:0,fnval:3088,fourk:1};t=f.assign(t,e);const n=ot.getBangumiProxyHost();s.info("番剧播放地址请求数据");const i=[];let a;const r="/pgc/player/web/playurl";s.info(`请求路径：${r}`);for(let o=0;o<n.length;o++){const l=n[o],c=l.host,p={};c!==Ne.web_host&&(f.assign(p,ot.getBangumiProxySearchParam({area:l.area}),true),s.info(`代理服务器数据: ${JSON.stringify(l)}`),s.info(`代理服务器请求参数：${JSON.stringify(Re.filteringSensitiveSearchParamData(p))}`));const d=`https://${c}${r}?${f.toSearchParamsStr(t)}&${f.toSearchParamsStr(p)}`,m=await Q.get(d,{responseType:"json",fetch:false,allowInterceptConfig:false,headers:{Referer:"https://www.bilibili.com/"}});if(!m.status){s.error(`代理服务器：${c} 请求失败`);continue}const h=f.toJSON(m.data.responseText);if(!re.isWebApiSuccess(h)||re.isAreaLimit(h)){s.error(`请求失败，当前代理服务器：${c} ${JSON.stringify(h)}`),i.push(h);continue}a=h.result;break}return a==null&&Re.failToast(i),a},async getPlayUrlHTML5(e){let t={avid:"",cid:"",ep_id:"",bsource:""};t=f.assign(t,e),s.info("（原版api）番剧播放地址请求数据");let i=`https://${Ne.web_host}/pgc/player/web/playurl/html5?${f.toSearchParamsStr(t)}`,a=await Q.get(i,{responseType:"json",fetch:true,headers:{Host:"www.bilibili.com",Referer:"https://www.bilibili.com"}});if(!a.status)return;let r=f.toJSON(a.data.responseText);if(!re.isWebApiSuccess(r)){Re.failToast(r);return}return r.result}},ti="[artplayer-plugin-airborneHelper]：",O={$data:{tipJumpToastTimeoutId:void 0,tipJumpToastInfo:void 0,successJumpToastInfo:void 0},$event:{"video:timeupdate":()=>{if(O.$data.tipJumpToastTimeoutId!=null||!ne.$data.art.playing)return;const e=5;let t=ne.$data.art.currentTime,n=ne.$data.option.clip_info_list.findIndex(i=>{let a=i.start;return a===0?t<=1:t>=a-e&&t<a});if(n!==-1){let i=function(){clearTimeout(O.$data.tipJumpToastTimeoutId),O.$data.tipJumpToastTimeoutId=void 0,O.$data.tipJumpToastInfo?.close(),O.$data.tipJumpToastInfo=void 0,ne.$data.option.clip_info_list.splice(n,1);},a=ne.$data.option.clip_info_list[n],r=ne.$data.art.plugins[Yn],o=(a.start-t)*1e3;O.$data.tipJumpToastTimeoutId=setTimeout(()=>{ne.$data.art.currentTime=a.end,O.$data.tipJumpToastTimeoutId=void 0,O.$data.successJumpToastInfo&&(O.$data.successJumpToastInfo.close(),O.$data.successJumpToastInfo=void 0),O.$data.successJumpToastInfo=r.toast({text:"空降成功~o(*≧▽≦)ツ┏━┓",closeCallback(){O.$data.successJumpToastInfo=void 0;}});},o),O.$data.tipJumpToastInfo&&(O.$data.tipJumpToastInfo.close(),O.$data.tipJumpToastInfo=void 0),O.$data.tipJumpToastInfo=r.toast({text:typeof a.toastText=="string"?a.toastText:"站稳扶好，准备起飞~",timeout:o<2e3?2e3:o,showCloseBtn:false,jumpText:typeof a.toastText=="string"?"不跳过":"坠机",jumpClickCallback:()=>{i();}}),setTimeout(()=>{O.$data.tipJumpToastInfo&&(O.$data.tipJumpToastInfo.close(),O.$data.tipJumpToastInfo=void 0);},(e+3)*1e3);}}},bind(){Object.keys(this.$event).forEach(e=>{ne.$data.art.on(e,this.$event[e]);});},unbind(){Object.keys(this.$event).forEach(e=>{ne.$data.art.off(e,this.$event[e]);}),clearTimeout(O.$data.tipJumpToastTimeoutId),O.$data.tipJumpToastTimeoutId=void 0,O.$data.successJumpToastInfo&&(O.$data.successJumpToastInfo.close(),O.$data.successJumpToastInfo=void 0),O.$data.tipJumpToastInfo&&(O.$data.tipJumpToastInfo.close(),O.$data.tipJumpToastInfo=void 0);}},ne={$key:{plugin_KEY:"plugin-airborne-helper"},$data:{art:null,option:null},init(e,t){this.$data.art=e,this.update(t);},update(e){this.$data.option=e,console.log(ti+"更新配置",e),O.unbind(),e.clip_info_list.length&&O.bind();}},ni=e=>t=>(ne.init(t,e),{name:ne.$key.plugin_KEY,update(n){ne.update(n);}}),ii=ne.$key.plugin_KEY,_t="[flvjs]：",Ft=e=>e.epList.map(t=>({isDefault:t.ep_id===e.ep_id&&t.aid===e.aid&&t.cid===e.cid,title:en(t.long_title,t.title),aid:t.aid,bvid:t.bvid,cid:t.cid,ep_id:t.ep_id,onSelect(n,i){pn.updateArtPlayerVideoInfo(t,e.epList);}})),xe={$data:{art:null,flv:null,currentOption:null,from:"bangumi"},resetEnv(e){e&&(Reflect.set(this.$data,"art",null),Reflect.set(this.$data,"flv",null)),Reflect.set(this.$data,"currentOption",null);},flvPlayer(){if(this.$data.currentOption==null){console.error(_t+"获取当前配置为空");return}let e=this.$data.currentOption.flvInfo;(this.$data.flv!=null||e==null)&&(this.$data.flv?.detachMediaElement(),this.$data.flv?.destroy());let t=this.$data.currentOption;console.log(_t+"加载视频",e),e.length>1?this.$data.flv=nt.createPlayer({type:"flv",filesize:t.flvTotalSize,duration:t.flvTotalDuration,segments:e.map(n=>({url:n.url,duration:n.duration,filesize:n.size}))},{stashInitialSize:1024*100}):this.$data.flv=nt.createPlayer({type:"flv",url:e[0].url},{stashInitialSize:1024*100}),this.$data.flv.attachMediaElement(this.$data.art.video),this.$data.flv.load();},async init(e){this.resetEnv(true),this.$data.currentOption=e;const t="artplayer-bangumi-danmaku-option",n=new qt(t),i=n.getLocalArtDanmakuOption(),a={...an(),container:e.container,settings:[],plugins:[on(),rn({from:xe.$data.from,qualityList:e.quality})]};if(e.isFlv){if(Array.isArray(a.quality)?a.quality.length=0:a.quality=[],a.type="flv",e.flvInfo.length===0){Re.failToast("视频播放地址为空，无法播放！");return}a.url=e.flvInfo[0].url,a.customType={flv:(r,o,l)=>{if(!nt.isSupported()){l.notice.show="Unsupported playback format: flv";return}this.flvPlayer();}};}else a.type="mp4";return g.getValue("artplayer-plugin-bangumi-danmaku-enable")&&a.plugins.push(Rt({...un(),danmuku:e.danmukuUrl,speed:i.speed,margin:i.margin,opacity:i.opacity,modes:i.modes,fontSize:i.fontSize,antiOverlap:i.antiOverlap,synchronousPlayback:i.synchronousPlayback,visible:i.visible,beforeEmit(r){return new Promise(o=>{console.log(r),setTimeout(()=>{o(true);},1e3);})}})),g.getValue("artplayer-plugin-bangumi-m4sAudioSupport-enable")&&a.plugins.push(Gt({from:xe.$data.from,audioList:e.audioList||[]})),g.getValue("artplayer-plugin-bangumi-epChoose-enable")&&a.plugins.push(tn({EP_LIST:Ft(e),automaticBroadcast:true})),g.getValue("artplayer-plugin-bangumi-cc-subtitle-enable")&&a.plugins.push(Kt({from:xe.$data.from,cid:e.cid,aid:e.aid,bvid:e.bvid,ep_id:e.ep_id})),g.getValue("artplayer-plugin-bangumi-toptoolbar-enable")&&a.plugins.push(Wt({onlineInfoParams:{aid:e.aid,cid:e.cid,bvid:e.bvid},title:e.videoTitle,showWrap:true,showTitle:true,showOnlineTotal:true})),g.getValue("artplayer-plugin-bangumi-airborneHelper-enable")&&a.plugins.push(ni({clip_info_list:e.clip_info_list})),g.getValue("artplayer-plugin-bangumi-statistics-enable")&&a.plugins.push(ln({data:[]})),this.$data.art=new ct(a),n.onConfigChange(this.$data.art),this.$data.art},async update(e,t){this.resetEnv(false),this.$data.currentOption=t,s.info("更新新的播放信息",t),e.pause(),s.info("暂停视频"),e.currentTime=0,s.info("重置播放进度"),this.updatePluginInfo(e,t),e.play(),s.info("播放");},updatePluginInfo(e,t){if(e.plugins[_e].update({from:xe.$data.from,qualityList:t.quality}),s.info("更新画质",t.quality),g.getValue("artplayer-plugin-bangumi-danmaku-enable")&&(e.plugins.artplayerPluginDanmuku.config({danmuku:t.danmukuUrl}),e.plugins.artplayerPluginDanmuku.load(),s.info("更新弹幕姬",t.danmukuUrl)),g.getValue("artplayer-plugin-bangumi-m4sAudioSupport-enable")&&(e.plugins[dt].update({from:xe.$data.from,audioList:t.audioList||[]}),s.info("更新音频",t.audioList)),g.getValue("artplayer-plugin-bangumi-epChoose-enable")&&(e.plugins[nn].update({EP_LIST:Ft(t),automaticBroadcast:true}),s.info("更新选集信息",t.epList)),g.getValue("artplayer-plugin-bangumi-cc-subtitle-enable")){let i=e.plugins[Zt];const a={from:xe.$data.from,cid:t.cid,aid:t.aid,ep_id:t.ep_id};i.update(a),s.info("更新字幕",a);}if(g.getValue("artplayer-plugin-bangumi-toptoolbar-enable")){let i=e.plugins[Qt];const a={showRight:true,showRightFollow:true,showWrap:true,showTitle:true,showOnlineTotal:true,title:t.videoTitle,onlineInfoParams:{aid:t.aid,cid:t.cid,bvid:t.bvid}};i.update(a),s.info("更新顶部标题",a);}g.getValue("artplayer-plugin-bangumi-airborneHelper-enable")&&(e.plugins[ii].update({clip_info_list:t.clip_info_list}),s.info("更新空降助手信息",t.clip_info_list));}},ai={async waitReactPropsToSet(e,t,n){Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);function i(){let a=null;return typeof e=="string"?a=u.selector(e):typeof e=="function"?a=e():e instanceof HTMLElement&&(a=e),a}typeof e=="string"&&!await u.waitNode(e,1e4)||n.forEach(a=>{typeof a.msg=="string"&&s.info(a.msg);const r=function(){let o=i();if(o==null)return {status:false,isTimeout:true,inst:null,$el:o};const l=f.getReactInstance(o);if(l==null)return {status:false,isTimeout:false,inst:null,$el:o};const c=Array.from(t).findIndex(m=>{const h=l[m];return h?!!a.check(h,o):false}),p=t[c],d=l[p];return {status:c!==-1,isTimeout:false,inst:d,$el:o}};f.waitPropertyByInterval(()=>i(),()=>r().status,250,1e4).then(()=>{const o=r();if(o.status){const l=o.inst;a.set(l,o.$el);}else typeof a.failWait=="function"&&a.failWait(o.isTimeout);});});}};function $t(e){let t=[];return e.video.forEach(n=>{if(!e.accept_quality.includes(n.id))return;let i=e.support_formats.find(o=>o.quality===n.id),a=ee.findBetterCDN(n.base_url,n.baseUrl,n.backup_url,n.backupUrl);a=ee.replaceBangumiVideoCDN(a);let r=i?.new_description;t.push({name:r,url:a,type:n.mimeType,id:n.id,size:n.size,quality:n.id,vip:!!i?.need_vip,bandwidth:n.bandwidth,frameRate:n.frameRate,codecid:n.codecid,codecs:n.codecs});}),t}const ri=(e,t)=>`第${e}话 ${t}`,St=(e,t)=>{let n=[];if(e?.dash?.video?.length){let i=e;n=[...$t({accept_quality:i.accept_quality,support_formats:i.support_formats,video:i.dash.video})],n.length===0&&i.dash.video.length!==0&&(s.warn(`当前选择的视频编码id为: ${t}，但是过滤出的视频没有一个符合的，所以直接放弃使用自定义选择视频编码`),n=[...$t({accept_quality:i.accept_quality,support_formats:i.support_formats,video:i.dash.video})]);}else {let i=e;i.durls.length===0&&i.durl!=null&&i.durls.push({quality:i.quality,durl:i.durl}),i.durls.forEach(a=>{if(!i.accept_quality.includes(a.quality)||!a.durl.length)return;let r=a.durl[0],o=e.support_formats.find(p=>p.quality===a.quality),l=ee.findBetterCDN(r.url,r.backup_url),c=o?.new_description;n.push({name:c,url:l,type:"audio/mp4",id:a.quality,size:r.size,quality:a.quality,vip:!!o?.need_vip,bandwidth:0,frameRate:"",codecid:0,codecs:""});});}return n},oi=async(e,t)=>{const{aid:n,bvid:i,cid:a,ep_id:r,title:o,long_title:l}=e;s.info(`解析番剧信息 aid:${n} cid:${a} ep_id:${r}`);const c=ri(o,l),p=[];let d=[],m=[],h=false,v=[],C=0,F=0;if(g.getValue("bili-bangumi-unlockAreaLimit")){const E=await kt.getPlayUrl({avid:n,cid:a,ep_id:r});if(!E)return;if(Array.isArray(E?.clip_info_list)?m=E.clip_info_list:Array.isArray(E?.clip_info)&&(m=E.clip_info),E.type.toLowerCase()==="flv")h=true,E.durl.forEach(y=>{let V=ee.findBetterCDN(y.url,y.backup_url);V=ee.replaceBangumiVideoCDN(V),C+=y.length,F+=y.size,v.push({order:y.order,url:V,duration:y.length,length:y.length,size:y.size});});else if(E.type.toLowerCase()==="dash"||E.type.toLowerCase()==="mp4")(E?.dash?.audio||[]).forEach(y=>{let V=ee.findBetterCDN(y.baseUrl,y.base_url,y.baseUrl,y.backup_url);V=ee.replaceBangumiVideoCDN(V),p.push({url:V,id:y.id,size:y.size,text:Ut[y.id]||"",bandwidth:y.bandwidth,codecs:y.codecs,mimeType:y.mimeType||y.mime_type});}),s.info("ArtPlayer: 获取的音频信息",p),d=d.concat(St(E)),s.info("ArtPlayer: 获取的视频画质信息",d);else {Re.failToast("暂未适配的视频格式："+E.format);return}}else {const E=await kt.getPlayUrlHTML5({avid:n,cid:a,ep_id:r});if(!E)return;Array.isArray(E?.clip_info_list)?m=E.clip_info_list:Array.isArray(E?.clip_info)&&(m=E.clip_info),d=d.concat(St(E));}const _=d.map((E,y)=>({html:E.name,url:E.url,quality:E.quality,mimeType:E.type,codecid:E.codecid,codecs:E.codecs,frameRate:E.frameRate,bandwidth:E.bandwidth})),S={container:null,epList:t,cid:a,aid:n,bvid:i,ep_id:r,videoTitle:c,danmukuUrl:`https://api.bilibili.com/x/v1/dm/list.so?oid=${a}`,quality:_,clip_info_list:m,isFlv:h,flvInfo:v,flvTotalDuration:C,flvTotalSize:F};return S.url=d?.[0]?.url,p.length&&(S.audioList=p.map((E,y)=>({isDefault:y===0,url:E.url,soundQualityCode:E.id,soundQualityCodeText:E.text,bandwidth:E.bandwidth,codecs:E.codecs,mimeType:E.mimeType,size:E.size}))),S},pn={$data:{art:null},updateArtPlayerVideoInfo(e,t){const n=this;ai.waitReactPropsToSet(x.className.bangumi_new+' [class^="Player_container"]',"reactFiber",{check(i){return typeof i?.return?.memoizedState?.queue?.lastRenderedState?.[0]?.epInfo?.bvid=="string"},async set(i){let a=i?.return?.memoizedState?.queue?.lastRenderedState?.[0]?.epInfo;const r=L("#bilibiliPlayer");if(e==null&&(e=a),t==null){t=[];let c=L(x.className.bangumi_new+' [class^="EpisodeList_episodeListWrap"]');if(c){let d=f.getReactInstance(c)?.reactFiber?.return?.memoizedState?.memoizedState?.[0]?.episodes;Array.isArray(d)&&(t=d);}}const o=await oi(e,t);if(o==null)return;let l=L("#artplayer");if(!l){const c=u.createElement("div",{className:"artplayer-container",innerHTML:`
									<div id="artplayer"></div>
									`});l=c.querySelector("#artplayer"),u.after(r,c);}if(o.container=l,n.$data.art==null){let c=await xe.init(o);if(c)n.$data.art=c;else return;n.$data.art.volume=1;}else xe.update(n.$data.art,o);}});}},li={$data:{art:null},init(){g.execMenuOnce("bili-bangumi-initialScale",()=>{N.initialScale();}),g.execMenuOnce("bili-bangumi-hook-callApp",()=>{this.hookCallApp();}),g.execMenu("bili-bangumi-cover-clicl-event-chooseEp",()=>{this.setChooseEpClickEvent();}),g.execMenu("bili-bangumi-cover-clicl-event-other",()=>{this.setClickOtherVideo();}),g.execMenu("bili-bangumi-cover-clicl-event-recommend",()=>{this.setRecommendClickEvent();}),this.coverVideoPlayer();},hookCallApp(){let e=P.setTimeout;P.setTimeout=function(...t){if(t[0].toString().includes("autoOpenApp")){s.success("阻止唤醒App",t);return}return Reflect.apply(e,this,t)};},setChooseEpClickEvent(){u.waitNode(x.className.bangumi+" .ep-list-pre-wrapper ul.ep-list-pre-container").then(e=>{s.info("覆盖【选集】的点击事件"),u.on(e,"click","li.episode-item",function(t){u.preventEvent(t),ye.jumpToUrl(t);},{capture:true});}),u.waitNode(x.className.bangumi+" .ep-list-pre-wrapper ul.season-list-wrapper").then(e=>{s.info("覆盖【xx季】的点击事件"),u.on(e,"click","li",function(t){u.preventEvent(t),ye.jumpToUrl(t);},{capture:true});}),u.waitNode(x.className.bangumi+" .ep-list-pre-header").then(e=>{s.info("覆盖【选集】右上角的【全xx话】Arrow的点击事件"),u.on(e,"click",function(t){u.preventEvent(t);},{capture:true});}),u.on(document,"click",[x.className.bangumi_new+' [class^="EpisodeList_episodeListWrap"] m-open-app[universallink]',x.className.bangumi_new+' [class^="SeasonList_container"] m-open-app[universallink]'],(e,t)=>{let n=ye.getUrl(t);if(!n){w.error("获取跳转链接失败");return}N.goToUrl(n);},{capture:true});},setClickOtherVideo(){u.waitNode(x.className.bangumi+" .section-preview-wrapper ul.ep-list-pre-container").then(e=>{s.info("覆盖【PV&其他】、【预告】、【主题曲】的点击事件"),u.on(e,"click","li.section-preview-item",function(t){u.preventEvent(t),ye.jumpToUrl(t);},{capture:true});}),u.waitNode(x.className.bangumi+" .section-preview-header").then(e=>{s.info("覆盖【PV&其他】、【预告】、【主题曲】右上角的Arrow的点击事件"),u.on(e,"click",function(t){u.preventEvent(t);},{capture:true});}),u.on(document,"click",x.className.bangumi_new+' [class^="SectionPanel_container"] m-open-app[universallink]',(e,t)=>{let n=ye.getUrl(t);if(!n){w.error("获取跳转链接失败");return}N.goToUrl(n);},{capture:true});},setRecommendClickEvent(){u.waitNode(x.className.bangumi+" .recom-wrapper ul.recom-list").then(e=>{s.info("覆盖【更多推荐】番剧的点击事件"),u.on(e,"click","li.recom-item-v2",function(t){u.preventEvent(t),ye.jumpToUrl(t);},{capture:true});}),u.on(document,"click",x.className.bangumi_new+' [class^="Footer_container"] m-open-app[universallink]',(e,t)=>{let n=ye.getUrl(t);if(!n){w.error("获取跳转链接失败");return}N.goToUrl(n);},{capture:true});},coverVideoPlayer(){if(L("#artplayer"))s.warn("已存在播放器，更新播放信息");else {M(`
			.player-wrapper,
			.open-app-bar,
			${x.className.bangumi_new} [class^="Player_videoWrap"] > div:not(.artplayer-container){
				display: none !important;
			}
			
			${pt}
			
			${ei}
			
			.artplayer-container{
				height: -webkit-fill-available;
				height: 100%;
			}
			`);let e=g.getValue("bili-bangumi-artplayer-controlsPadding-left-right",0);e!=0&&M(`
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
				`);}pn.updateArtPlayerVideoInfo();}},dn={async getSearchInputPlaceholder(){const e=await Q.get("https://api.bilibili.com/x/web-interface/wbi/search/default",{fetch:true,headers:{accept:"application/json, text/plain, */*","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","cache-control":"no-cache",pragma:"no-cache","sec-ch-ua":'""',"sec-ch-ua-mobile":"?1","sec-ch-ua-platform":'""',"sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-site"},allowInterceptConfig:false});if(!e.status)return;const t=f.toJSON(e.data.responseText);if(re.isWebApiSuccess(t))return t.data},async getBangumiSearchResult(e){const t={search_type:"media_bangumi",keyword:e.keyword,from_client:"BROWSER",drm_tech_type:"2",module:"bangumi",area:e.area.toLowerCase(),access_key:De.getAccessToken()},n=`https://${e.host}/x/web-interface/search/type?${f.toSearchParamsStr(t)}`,i=await Q.get(n,{fetch:false,headers:{"User-Agent":f.getRandomAndroidUA()}});if(!i.status)return;const a=f.toJSON(i.data.responseText);return re.isWebApiSuccess(a)?{isSuccess:true,data:a.data.result}:(s.error(`请求失败，当前代理服务器信息：${JSON.stringify(e.host)}`),s.error(`请求失败，当前请求的响应信息：${JSON.stringify(a)}`),{isSuccess:false,data:a})}},ui=`#app .m-search {
  --card-img-width: 90px;
  --card-img-height: calc(var(--card-img-width) * 1.33);
  --card-desc-color: #808080;
  --card-desc-size: 0.8em;
  --card-badge-item-size: 0.7em;
  --card-badge-item-padding: 0.1em 0.2em;
  --card-badge-item-border-radius: 3px;
  --card-ep-item-border-radius: 4px;
  --card-ep-item-padding-top-bottom: 13px;
  --card-ep-item-padding-left-right: 13px;
  --card-ep-item-badge-padding: 2px;
}
.gm-result-panel {
  padding-top: 23.46667vmin;
  background: #f4f4f4;
}
.gm-card-cover {
  position: relative;
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

.gm-card-display-info,
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
  color: #f77c2e;
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
  overflow: hidden;
}
.gm-card-badges {
  background: var(--bili-color);
  color: #fff;
  padding: 3px;
  font-size: 12px;
  border-radius: 3px;
  white-space: nowrap;
  position: absolute;
  top: 5px;
  right: 5px;
}
.gm-card-badge-info-item {
  font-size: var(--card-badge-item-size);
  padding: var(--card-badge-item-padding);
  border-radius: var(--card-badge-item-border-radius);
}
.gm-card-eps {
  display: flex;
  overflow: auto;
  gap: 10px;
}

.gm-card-ep-conatiner {
  text-align: center;
  white-space: nowrap;
  padding: var(--card-ep-item-padding-top-bottom) var(--card-ep-item-padding-left-right);
  background: #edeff3;
  border-radius: var(--card-ep-item-border-radius);
  font-size: 14px;
  position: relative;
}

.gm-card-ep-badges-container {
  position: absolute;
  top: 0;
  right: 0;
  font-size: calc(var(--card-ep-item-padding-top-bottom) - var(--card-ep-item-badge-padding));
}

.gm-card-ep-badge-top-right {
  border-top-right-radius: var(--card-ep-item-border-radius);
  border-bottom-left-radius: var(--card-ep-item-border-radius);
  padding: var(--card-ep-item-badge-padding);
}
.gm-card-ep-info-container {
  min-width: 30px;
}
`,mn={$flag_css:{enableOtherAreaSearchBangumi:false},init(){M(ui),u.onReady(()=>{g.execMenu("bili-search-enableOtherAreaSearchBangumi",()=>{this.enableOtherAreaSearchBangumi();});});},enableOtherAreaSearchBangumi(){this.$flag_css.enableOtherAreaSearchBangumi||(this.$flag_css.enableOtherAreaSearchBangumi=true,M(`
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
			`)),u.waitNode(".m-search-result .tabs:not(:has(.gm-tab-item))").then(e=>{ot.getSearchProxyHost().forEach(i=>{let a=u.createElement("a",{className:"tab-item gm-tab-item",innerHTML:`番剧（${i.name}）`},{"data-area":i.area,"data-host":i.host});e.appendChild(a);});const n=i=>{e.querySelectorAll(".tab-item").forEach(a=>i!=a&&a.classList.remove("on")),i.classList.add("on");};u.on(e,"click",".tab-item",async i=>{let a=i.target;n(a);let r=L(".result-panel"),o=L(".gm-result-panel");if(o&&(o.remove(),u.show(r)),!a.classList.contains("gm-tab-item"))return;let l=a.dataset.area,c=a.dataset.host,p=L(".m-search-result"),d=k.getVue(p);d.switchTab(233),u.hide(r);let m=d.keyword,h=w.loading("搜索中，请稍后..."),v=await dn.getBangumiSearchResult({keyword:m,area:l,host:c});if(h.close(),!v)return;if(!v.isSuccess){alert(JSON.stringify(v.data,null,2));return}let C=v.data;s.info("搜索结果：",C);let F=u.createElement("div",{className:"gm-result-panel",innerHTML:`
						<div class="gm-list-view">
							<div class="gm-video-list-box">
								<div class="gm-video-list">
									<div class="gm-card-box"></div>
								</div>
							</div>
						</div>
					`}),_=F.querySelector(".gm-card-box");C.forEach(S=>{_.appendChild(this.createSearchResultVideoItem(S));}),p.appendChild(F);});});},createSearchResultVideoItem(e){let t=u.createElement("div",{className:"gm-card-item",innerHTML:`
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
				`},{"data-url":e.url,"data-type":e.type,"data-media_id":e.media_id,"data-pgc_season_id":e.pgc_season_id,"data-is_follow":e.is_follow,"data-is_selection":e.is_selection});Reflect.set(t,"data-option",e),u.on(t,"click",c=>{u.preventEvent(c),window.open(e.url,"_blank");});let n=t.querySelector(".gm-card-display-info"),i=[];Array.isArray(e?.display_info)&&(i=i.concat(e.display_info)),Array.isArray(e?.badges)&&(i=i.concat(e.badges)),i=f.uniqueArray(i,c=>c.text),i.forEach(c=>{let p=u.createElement("span",{className:"gm-card-badge-info-item",innerText:c.text});typeof c.border_color=="string"&&(p.style.border=`1px solid ${c.border_color}`,p.style.color=c.border_color),u.append(n,p);}),e.pubtime&&u.append(n,`
				<span>${f.formatTime(e.pubtime*1e3,"yyyy")}</span>
				`);let a=e.areas||Reflect.get(e,"area");a&&(n.children.length&&u.append(n,`
					<span> | </span>
				`),u.append(n,`
					<span>${a}</span>
				`));let r=t.querySelector(".gm-card-media_score");e.media_score&&e.media_score.user_count&&u.append(r,`
				<span class="gm-card-media_score-score">${e.media_score?.score||0}分</span>
				<span class="gm-card-media_score-user_count">${e.media_score?.user_count||0}人参与</span>
				`);let o=t.querySelector(".gm-card-eps");return [...e.eps||[],...Reflect.get(e,"episodes_new")||[]].filter(c=>f.isNotNull(c)).forEach(c=>{let p=c.title||c.long_title,d=c.url||Reflect.get(c,"uri"),m=u.createElement("div",{className:"gm-card-ep-conatiner",innerHTML:`
				<div class="gm-card-ep-badges-container">
					
				</div>
				<div class="gm-card-ep-info-container">
					${p}
				</div>`},{"data-id":c.id,"data-url":d,"data-title":p,"data-long_title":c.long_title}),h=m.querySelector(".gm-card-ep-badges-container");if(m.querySelector(".gm-card-ep-info-container"),Array.isArray(c.badges)&&c.badges.length){let v=c.badges[0],C=u.createElement("span",{className:"gm-card-ep-badge-top-right",innerText:v.text});typeof v.bg_color=="string"&&(C.style.backgroundColor=v.bg_color),typeof v.text_color=="string"&&(C.style.color=v.text_color),u.append(h,C);}u.on(m,"click",v=>{u.preventEvent(v),window.open(d,"_blank");}),o.appendChild(m);}),t},searchBangumi(){}},si={$flag:{mutationSearchResult:false},init(){this.mutationSearchResult();},mutationSearchResult(){this.$flag.mutationSearchResult||(this.$flag.mutationSearchResult=true,M(`
        .bangumi-list{
            padding: 0 10px;
        }
        `),f.mutationObserver(document,{config:{subtree:true,childList:true},callback:f.debounce(()=>{document.querySelectorAll(".m-search-bangumi-item").forEach(e=>{let t=k.getVue(e);if(!t)return;let n=t.info;if(!n)return;let i=mn.createSearchResultVideoItem(n);u.after(e,i),e.remove();});})}));}},ci={init(){g.execMenuOnce("bili-search-vue-prop-noCallApp",()=>{this.noCallApp();}),g.execMenuOnce("bili-search-vue-prop-openAppDialog",()=>{this.openAppDialog();});},noCallApp(){let e=new f.LockFunction(()=>{W(".video-list .card-box > div:not([data-gm-inject-no-call-app])").forEach(t=>{let n=k.getVue(t);n&&typeof n.noCallApp=="boolean"&&(Object.defineProperty(n,"noCallApp",{value:true,writable:false,enumerable:true,configurable:true}),t.setAttribute("data-gm-inject-no-call-app","true"));});});f.mutationObserver(document,{config:{subtree:true,childList:true},callback(){e.run();}});},openAppDialog(){let e=new f.LockFunction(()=>{W(".video-list .card-box > div:not([data-gm-inject-openAppDialog])").forEach(t=>{let n=k.getVue(t);n&&typeof n.openAppDialog=="boolean"&&(Object.defineProperty(n,"openAppDialog",{value:false,writable:false,enumerable:true,configurable:true}),t.setAttribute("data-gm-inject-openAppDialog","true"));});});f.mutationObserver(document,{config:{subtree:true,childList:true},callback(){e.run();}});}},pi={init(){H.isSearchResult()&&mn.init(),ci.init(),g.execMenuOnce("bili-search-cover-cancel",()=>{this.coverCancel();}),g.execMenu("bili-search-beautifySearchResult",()=>{si.init();}),g.execMenuOnce("bili-search-cover-card-result-click-event",()=>{this.coverCardResultClickEvent();}),u.onReady(()=>{g.execMenu("bili-search-inputAutoFocus",()=>{this.inputAutoFocus();});});},coverCancel(){s.info("覆盖【取消】按钮的点击事件"),u.on(document,"click","a.cancel",e=>{s.info("点击取消按钮"),u.preventEvent(e),window.history.back();},{capture:true});},inputAutoFocus(){if(new URLSearchParams(window.location.search).has("keyword")){s.warn("当前在搜索结果页面，不执行输入框自动获取焦点");return}s.info("输入框自动获取焦点"),u.waitNode('.m-search .m-search-search-bar input[type="search"]',1e4).then(t=>{if(!t){s.error("获取输入框失败");return}t.focus();});},coverCardResultClickEvent(){s.info("覆盖搜索结果点击事件"),u.on(document,"click",".video-list .card-box > div",(e,t)=>{let n=t,i=k.getVue(n);if(!i)return;let a=i.cardClick;typeof a=="function"&&(u.preventEvent(e),a(e));},{capture:true});}},di={init(){g.execMenuOnce("bili-live-block-chatRoom",()=>this.blockChatRoom()),g.execMenuOnce("bili-live-block-brush-prompt",()=>this.blockBrushPrompt()),g.execMenuOnce("bili-live-block-control-panel",()=>this.blockControlPanel());},blockChatRoom(){return s.info("屏蔽聊天室"),te.addBlockCSS("#chat-items")},blockBrushPrompt(){return s.info("屏蔽xxx进入直播间"),te.addBlockCSS("#brush-prompt")},blockControlPanel(){return s.info("屏蔽底部工具栏"),te.addBlockCSS(".control-panel")}},mi={init(){di.init(),g.execMenuOnce("bili-live-prevent-openAppBtn",()=>{this.preventOpenAppBtn();});},preventOpenAppBtn(){u.waitNode("body").then(e=>{s.info("阻止.open-app-btn元素触发点击事件"),u.on(e,"click",".open-app-btn",function(t,n){const i=k.getVue(n);typeof i?.open=="function"&&(i.open=function(){s.info("成功阻止.open-app-btn元素触发点击事件");});},{capture:true});});}},Tt={$data:{dispatchCallBackList:[]},init(){g.execMenu("bili-opus-variable-autoOpenApp",()=>{this.autoOpenApp();}),g.execMenu("bili-opus-variable-go404",()=>{this.go404();}),g.execMenu("bili-opus-variable-handleFallback",()=>{this.dispatch((e,t)=>{if(typeof t=="string"&&t==="opus/handleFallback"&&![1,2].includes(e.fallback.type))return s.success("禁止调用handleFallback函数前往404"),typeof e?.showComment=="boolean"&&e.showComment&&typeof e?.initFullComment=="function"&&e.initFullComment(),false});});},isLimit(){s.info("等待 观察并覆盖变量isLimit"),k.watchVuePropChange(x.className.opus,e=>e.isLimit,e=>{e.isLimit=false,s.success("观察者：覆盖变量isLimit=false");});},autoOpenApp(){k.waitVuePropToSet(x.className.opus,{msg:"等待 覆盖函数autoOpenApp",check(e){return typeof e?.autoOpenApp=="function"},set(e){s.success("成功 覆盖函数autoOpenApp"),e.autoOpenApp=function(){s.success("禁止调用autoOpenApp函数");};}});},go404(){k.waitVuePropToSet(x.className.opus,{msg:"等待 覆盖函数go404",check(e){return typeof e?.go404=="function"},set(e){s.success("成功 覆盖函数go404"),e.go404=function(){s.success("禁止调用go404函数");};}});},fallback(){k.waitVuePropToSet(x.className.opus,{msg:"等待 覆盖对象fallback",check(e){return typeof e?.fallback?.type=="number"},set(e){s.success("成功 覆盖对象fallback"),e.$watch(()=>e?.fallback,()=>{e.fallback=null,s.success("覆盖对象fallback");},{deep:true,immediate:true});}});},dispatch(e){let t=e.toString();for(let i=0;i<this.$data.dispatchCallBackList.length;i++)if(this.$data.dispatchCallBackList[i].toString()===t)return;if(s.info("添加dispatch回调判断"),this.$data.dispatchCallBackList.push(e),this.$data.dispatchCallBackList.length>1)return;const n=this;k.waitVuePropToSet(x.className.opus,{msg:"等待 覆盖函数dispatch",check(i){return typeof i?.$store?.dispatch=="function"},set(i){s.success("成功 覆盖函数dispatch");let a=i.$store.dispatch;i.$store.dispatch=function(...r){let o=r[0];for(let l=0;l<n.$data.dispatchCallBackList.length;l++){const c=n.$data.dispatchCallBackList[l];if(typeof c=="function"){let p=c(i,o);if(typeof p=="boolean"&&!p)return}}return Reflect.apply(a,this,r)};}});}},hi={init(){Tt.init(),g.execMenuOnce("bili-opus-cover-topicJump",()=>{this.coverTopicJump();}),g.execMenuOnce("bili-opus-automaticallyExpandToReadFullText",()=>(Tt.isLimit(),this.automaticallyExpandToReadFullText())),g.execMenuOnce("bili-opus-cover-header",()=>{this.coverHeaderJump();});},coverTopicJump(){s.info("覆盖话题跳转点击事件"),u.on(document,"click",x.className.opus+" .launch-app-btn.opus-module-topic",function(e){let t=e.target,n=k.getVue(t);if(!n){w.error("获取话题的__vue__失败");return}let i=n?.$props?.data,a=i?.jump_url;if(f.isNull(a)){w.error("获取话题的jump_url失败");return}s.info("话题的跳转信息: ",i),N.goToUrl(a);},{capture:true});},automaticallyExpandToReadFullText(){return s.info("自动展开阅读全文"),[te.addBlockCSS(x.className.opus+" .opus-read-more"),M(`
			${x.className.opus} .opus-module-content{
				overflow: unset !important;
				max-height: unset !important;
			}
			`)]},coverHeaderJump(){s.info("覆盖header点击事件"),u.on(document,"click",x.className.opus+" .opus-module-author",function(e){u.preventEvent(e);let t=e.target,n=k.getVue(t);if(!n){w.error("获取vue属性失败");return}let i=n?.data?.mid;if(!i){w.error("获取mid失败");return}N.goToUrl(Ce.getUserSpaceUrl(i));},{capture:true});}},fi={init(){g.execMenuOnce("bili-dynamic-cover-topicJump",()=>{this.coverTopicJump();}),g.execMenuOnce("bili-dynamic-cover-atJump",()=>{this.coverAtJump();}),g.execMenuOnce("bili-dynamic-cover-referenceJump",()=>{this.coverReferenceJump();}),g.execMenuOnce("bili-dynamic-cover-header",()=>{this.coverHeaderJump();});},coverHeaderJump(){s.info("覆盖header点击事件"),u.on(document,"click",x.className.dynamic+" .launch-app-btn .dyn-header",function(e){u.preventEvent(e);let t=e.target,n=k.getVue(t);if(!n){w.error("获取vue属性失败");return}let i=n.url;if(!i){w.error("获取url失败");return}N.goToUrl(i);},{capture:true});},coverTopicJump(){s.info("覆盖话题跳转点击事件"),u.on(document,"click",x.className.dynamic+" .launch-app-btn .bili-dyn-topic",function(e){u.preventEvent(e);let t=e.target,n=k.getVue(t);if(!n){w.error("获取vue属性失败");return}let i=n?.$props?.data,a=i?.jump_url;if(f.isNull(a)){w.error("获取jump_url失败");return}s.info("话题的跳转信息: ",i),N.goToUrl(a);},{capture:true});},coverAtJump(){s.info("覆盖@ 跳转"),u.on(document,"click",x.className.dynamic+" .at",function(e){u.preventEvent(e);let t=e.target,n=t.getAttribute("data-oid")||k.getVue(t)?.$props?.rid;if(f.isNull(n)){w.error("获取data-oid或rid失败");return}s.info("用户的oid: "+n),N.goToUrl(Ce.getUserSpaceDynamicUrl(n));},{capture:true});},coverReferenceJump(){s.info("覆盖引用的点击事件"),u.on(document,"click",x.className.dynamic+" .dyn-content .reference .dyn-orig-author",function(e){u.preventEvent(e);let n=e.target.getAttribute("data-url");if(!n){w.error("获取data-url失败");return}N.goToUrl(n);},{capture:true}),u.on(document,"click",x.className.dynamic+" .dyn-content .reference .dyn-archive",function(e){u.preventEvent(e);let t=e.target,n=k.getVue(t);if(!n){w.error("获取vue属性失败");return}let i=n?.data?.jump_url;if(f.isNull(i)){w.error("获取jump_url失败");return}N.goToUrl(i);},{capture:true});}},Ie={$isHook:{windowPlayerAgent:false,hookWebpackJsonp_openApp:false,overRideLaunchAppBtn_Vue_openApp:false,overRideBiliOpenApp:false,overRideWxTaghandleClick:false},$data:{setTimeout:[]},windowWebPack(e="webpackJsonp",t,n){let i;yt.Object.defineProperty(P,e,{get(){return i},set(a){s.success("成功劫持webpack，当前webpack名："+e),i=a;const r=i.push;i.push=function(...o){let l=o[0][0];return (t==l||Array.isArray(t)&&Array.isArray(l)&&JSON.stringify(t)===JSON.stringify(l))&&Object.keys(o[0][1]).forEach(c=>{let p=o[0][1][c];o[0][1][c]=function(...d){let m=p.call(this,...d);return d[0]=n(d[0]),m};}),r.call(this,...o)};}});},setTimeout(e){if(this.$data.setTimeout.push(e),this.$data.setTimeout.length>1){s.info("window.setTimeout hook新增劫持判断参数："+e);return}P.setTimeout=function(...t){let n=t[0].toString();if(n.match(e)){s.success("劫持setTimeout的函数",n);return}return yt.setTimeout.apply(this,t)};},overRideLaunchAppBtn_Vue_openApp(){if(this.$isHook.overRideLaunchAppBtn_Vue_openApp)return;this.$isHook.overRideLaunchAppBtn_Vue_openApp=true;function e(t){typeof t.openApp!="function"||t.openApp.toString().includes("阻止唤醒App")||(t.openApp=function(...i){s.success("openApp：阻止唤醒App",i);});}f.mutationObserver(document,{config:{subtree:true,childList:true,attributes:true},immediate:true,callback(){W(".launch-app-btn").forEach(t=>{let n=k.getVue(t);n&&(e(n),n.$children&&n.$children.length&&n.$children.forEach(i=>{e(i);}));});}});},overRideBiliOpenApp(){this.$isHook.overRideBiliOpenApp||(this.$isHook.overRideBiliOpenApp=true,f.mutationObserver(document,{config:{subtree:true,childList:true,attributes:true},immediate:true,callback(){[...Array.from(W("bili-open-app")),...Array.from(W("m-open-app"))].forEach(e=>{if(e.hasAttribute("data-inject-opener-open"))return;let t=Reflect.get(e,"opener");if(t==null)return;typeof t?.open=="function"&&(Reflect.set(t,"open",i=>{s.success(`拦截bili-open-app.open跳转: ${JSON.stringify(i)}`),typeof i?.universalLink=="string"&&N.goToUrl(i.universalLink);}),e.setAttribute("data-inject-opener-open","true"));});}}));},overRideWxTaghandleClick(){this.$isHook.overRideWxTaghandleClick||(this.$isHook.overRideWxTaghandleClick=true,f.mutationObserver(document,{config:{subtree:true,childList:true,attributes:true},immediate:true,callback(){[...Array.from(W(".wx-tag"))].forEach(e=>{if(e.hasAttribute("data-inject-vueins-handle-click"))return;let t=k.getVue(e);t&&(typeof t?.handleClick=="function"&&(t.handleClick=function(){typeof t.goToVideo=="function"?t.goToVideo():w.error(".wx-tag不存在goToVideo函数",{consoleLogContent:true});},e.setAttribute("data-inject-vueins-handle-click","true")),Array.isArray(t?.$children)&&t.$children.length&&typeof t.$children[0].handleClick=="function"&&(t.$children[0].handleClick=t.handleClick));});}}));}},gi=`#app .m-head .m-recommend-view {
  display: none;
}

#app .m-head .suspension .channel-menu:has(.recommend-tag.is-avtive) .v-switcher__header__anchor {
  display: none !important;
}
#app .m-head .suspension .channel-menu:has(.recommend-tag.is-avtive) a.v-switcher__header__tabs__item {
  color: #505050 !important;
}
#app .m-head .suspension .channel-menu:has(.recommend-tag.is-avtive) a.recommend-tag {
  color: var(--bili-color) !important;
}
#app .m-head .suspension .channel-menu:has(.recommend-tag.is-avtive) a.recommend-tag span:after {
  content: " ";
  position: relative;
  background: var(--bili-color);
  width: 30.4375px;
  height: 0.53333vmin;
  display: block;
  bottom: 3px;
}

#app .m-head:has(.recommend-tag.is-avtive) .suspension + div {
  display: none;
}
#app .m-head:has(.recommend-tag.is-avtive) .m-recommend-view {
  display: unset;
}

#app .m-head .m-recommend-view {
  background-color: #f0f1f3;
}
#app .m-head .m-recommend-view .list-view .video-list-box .video-list {
  padding: 0 1.33333vmin;
  margin-bottom: 5.33333vmin;
}
#app .m-head .m-recommend-view .list-view .video-list-box .video-list .card-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
#app .m-head .m-recommend-view .list-view .video-list-box .video-list .card-box .v-card .card {
  position: relative;
}
#app .m-head .m-recommend-view .list-view .video-list-box .video-list .card-box .v-card .card .bfs-img-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app
  .m-head
  .m-recommend-view
  .list-view
  .video-list-box
  .video-list
  .card-box
  .v-card
  .card
  .bfs-img-wrap
  .bfs-img.b-img {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: transparent;
}
#app
  .m-head
  .m-recommend-view
  .list-view
  .video-list-box
  .video-list
  .card-box
  .v-card
  .card
  .bfs-img-wrap
  .bfs-img.b-img
  picture.b-img__inner {
  display: block;
  width: 100%;
  height: 100%;
}
#app
  .m-head
  .m-recommend-view
  .list-view
  .video-list-box
  .video-list
  .card-box
  .v-card
  .card
  .bfs-img-wrap
  .bfs-img.b-img
  picture.b-img__inner
  img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
#app .m-head .m-recommend-view .list-view .video-list-box .video-list .card-box .v-card .card .count {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 3.2vmin;
  padding: 1.33333vmin 1.6vmin;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  color: #fff;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), transparent);
}
#app .m-head .m-recommend-view .list-view .video-list-box .video-list .card-box .v-card .title {
  font-size: 3.2vmin;
  color: #212121;
  margin-top: 1.6vmin;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
#app
  .m-head
  .m-recommend-view
  .list-view
  .video-list-box
  .video-list
  .card-box
  .v-card
  .gm-up-info
  .gm-up-name
  .gm-picture-text {
  padding: 1px 4px;
  border: 1px solid var(--bili-color);
  color: var(--bili-color);
  border-radius: 2px;
  margin-right: 4px;
  font-size: 2vmin;
}

#app .m-head .m-recommend-view .list-view .video-list-box .video-list .card-box .v-card .count > span {
  display: flex;
  align-items: center;
  gap: 1.33333vmin;
}
`,vi=23442827791579n,bi=1n<<51n,It=58n,yi="FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf";function xi(e){const t=["B","V","1","0","0","0","0","0","0","0","0","0"];let n=t.length-1,i=(bi|BigInt(e))^vi;for(;i>0;)t[n]=yi[Number(i%BigInt(It))],i=i/It,n-=1;return [t[3],t[9]]=[t[9],t[3]],[t[4],t[7]]=[t[7],t[4]],t.join("")}const Lt=e=>(e.startsWith("http://")&&(e=e.replace(/^http/,"https")),e),wi={$flag:{isInitCSS:false,isLoadingNextPage:false},$data:{intersectionObserver:null,loadNums:0},$ele:{$listView:null,$videoListBox:null,$videoList:null,$cardBox:null,$listViewShim:null},$cardGoto:{av:"av",picture:"picture"},init(){this.setCSS(),u.onReady(()=>{this.addRecommendTag();});},setCSS(){this.$flag.isInitCSS||(this.$flag.isInitCSS=true,M(gi));},reset(){s.info("重置状态"),this.$flag.isLoadingNextPage=false,this.removeScrollEvent(),Object.keys(this.$ele).forEach(e=>{this.$ele[e]=null;});},addRecommendTag(){if(L(".channel-menu a.recommend-tag"))return;let e=L(".channel-menu .v-switcher");if(!e){s.error("添加推荐标签失败，原因：.channel-menu .v-switcher不存在"),w.error("添加推荐标签失败，原因：.channel-menu .v-switcher不存在");return}let t=u.createElement("a",{className:"v-switcher__header__tabs__item recommend-tag",innerHTML:"<span>推荐</span>"},{href:"javascript:;"}),n=u.createElement("div",{className:"m-recommend-view",innerHTML:`
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
            `});this.$ele.$listView=n.querySelector(".list-view"),this.$ele.$videoListBox=n.querySelector(".video-list-box"),this.$ele.$videoList=n.querySelector(".video-list"),this.$ele.$cardBox=n.querySelector(".card-box"),this.$ele.$listViewShim=n.querySelector(".list-view__shim"),this.$ele.$listViewShim.style.cssText="z-index:-1;user-select:none;pointer-events:none;background:transparent;left:0;bottom:0;width:100%;height:200px;";let i=document.querySelector("#app .m-head");i&&i.appendChild(n),u.on(t,"click",a=>{u.preventEvent(a),t.classList.add("is-avtive"),this.recommendClickEvent();}),u.on(e,"click",()=>{t.classList.remove("is-avtive");},{capture:true}),u.on(this.$ele.$cardBox,"click",".v-card",a=>{u.preventEvent(a);let r=a.target;window.open(r.href,"_blank");}),u.before(e,t),this.setScrollEvent(),window.location.hash==="#/recommend/"&&(s.info("当前hash为推荐视频，出动触发"),t.click());},async recommendClickEvent(){N.goToUrl("#/recommend/",true);},setScrollEvent(){s.success("推荐视频监听滚动: IntersectionObserver"),this.$data.intersectionObserver=new IntersectionObserver(async e=>{if(!this.$flag.isLoadingNextPage&&e[0].isIntersecting){this.$flag.isLoadingNextPage=true;let t=await this.scrollEvent();this.$flag.isLoadingNextPage=false,this.$data.loadNums<=1&&t?(u.hide(this.$ele.$listViewShim,false),await f.sleep(500),u.show(this.$ele.$listViewShim,false)):u.show(this.$ele.$listViewShim,false);}},{threshold:0,rootMargin:"0px 0px 0px 0px"}),this.$data.intersectionObserver.observe(this.$ele.$listViewShim);},removeScrollEvent(){this.$data.intersectionObserver?.disconnect(),this.$data.intersectionObserver=null;},async scrollEvent(){let e=await this.getRecommendVideoInfo();if(!e)return  false;s.success("获取推荐视频信息",e);let t=document.createDocumentFragment(),n=g.getValue("bili-head-recommend-push-graphic");return e.forEach(i=>{let a=null;if(i.goto===this.$cardGoto.av)a=this.getRecommendItemAVElement(i);else if(i.goto===this.$cardGoto.picture)if(n)a=this.getRecommendItemPictureElement(i);else return;else {s.error("该goto暂未适配",i);return}t.appendChild(a);}),this.$ele.$cardBox.appendChild(t),this.$data.loadNums++,true},async getRecommendVideoInfo(){let e={appkey:ve.ios.appkey,access_key:De.getAccessTokenInfo()?.access_token||""},n=await Q.get("https://app.bilibili.com/x/v2/feed/index"+"?"+f.toSearchParamsStr(e),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(!n.status)return;let i=f.toJSON(n.data.responseText);if(!re.isWebApiSuccess(i)){w.error(i.message);return}return i.data.items},getRecommendItemPictureElement(e){let t=e.goto,n=e.param,i="/opus/"+n,a=e.args.up_name,r=e.title,o=Lt(e.cover),l=e.cover_left_text_1,c=u.createElement("a",{className:"v-card",href:i,innerHTML:`
                <div class="card">
                    <div class="bfs-img-wrap">
                        <div class="bfs-img b-img">
                            <picture class="b-img__inner">
                                <source type="image/webp" srcset="${o}">
                                <img src="${o}" alt="${r}">
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
                <p class="title">${r}</p>
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
                `},{"data-param":n,"data-title":r,"data-goto":t});return c["data-picture"]=e,c},getRecommendItemAVElement(e){let t=e.goto,n=e?.player_args?.aid||e.args.aid,a="/video/"+xi(n),r=e.args.up_name,o=e.title,l=Lt(e.cover),c=e.cover_left_text_1,p=e.cover_left_text_2,d=e.cover_right_text,m=u.createElement("a",{className:"v-card",href:a,innerHTML:`
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
                            ${c}
                        </span>
                        <span>
                            <i class="iconfont icon_shipin_danmushu">
								<svg class="stats-item__icon" style="width: 16px; height: 16px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" width="16" height="16"><path d="M8 3.3320333333333334C6.321186666666667 3.3320333333333334 4.855333333333333 3.4174399999999996 3.820593333333333 3.5013466666666666C3.1014733333333333 3.5596599999999996 2.5440733333333334 4.109013333333333 2.48 4.821693333333333C2.4040466666666664 5.666533333333334 2.333333333333333 6.780666666666666 2.333333333333333 7.998666666666666C2.333333333333333 9.216733333333334 2.4040466666666664 10.330866666666665 2.48 11.175699999999999C2.5440733333333334 11.888366666666666 3.1014733333333333 12.437733333333334 3.820593333333333 12.496066666666666C4.855333333333333 12.579933333333333 6.321186666666667 12.665333333333333 8 12.665333333333333C9.678999999999998 12.665333333333333 11.144933333333334 12.579933333333333 12.179733333333333 12.496033333333333C12.898733333333332 12.4377 13.456 11.888533333333331 13.520066666666667 11.176033333333333C13.595999999999998 10.331533333333333 13.666666666666666 9.217633333333332 13.666666666666666 7.998666666666666C13.666666666666666 6.779766666666667 13.595999999999998 5.665846666666667 13.520066666666667 4.821366666666666C13.456 4.108866666666666 12.898733333333332 3.55968 12.179733333333333 3.5013666666666663C11.144933333333334 3.417453333333333 9.678999999999998 3.3320333333333334 8 3.3320333333333334zM3.7397666666666667 2.50462C4.794879999999999 2.41906 6.288386666666666 2.3320333333333334 8 2.3320333333333334C9.7118 2.3320333333333334 11.2054 2.4190733333333334 12.260533333333331 2.5046399999999998C13.458733333333331 2.6018133333333333 14.407866666666665 3.5285199999999994 14.516066666666667 4.73182C14.593933333333332 5.597933333333334 14.666666666666666 6.7427 14.666666666666666 7.998666666666666C14.666666666666666 9.2547 14.593933333333332 10.399466666666665 14.516066666666667 11.2656C14.407866666666665 12.468866666666665 13.458733333333331 13.395566666666667 12.260533333333331 13.492766666666665C11.2054 13.578333333333333 9.7118 13.665333333333333 8 13.665333333333333C6.288386666666666 13.665333333333333 4.794879999999999 13.578333333333333 3.7397666666666667 13.492799999999999C2.541373333333333 13.395599999999998 1.5922066666666668 12.468633333333333 1.4840200000000001 11.265266666666665C1.4061199999999998 10.3988 1.3333333333333333 9.253866666666667 1.3333333333333333 7.998666666666666C1.3333333333333333 6.743533333333333 1.4061199999999998 5.598579999999999 1.4840200000000001 4.732153333333333C1.5922066666666668 3.5287466666666667 2.541373333333333 2.601793333333333 3.7397666666666667 2.50462z" fill="currentColor"></path><path d="M10.583333333333332 7.166666666666666L6.583333333333333 7.166666666666666C6.307193333333332 7.166666666666666 6.083333333333333 6.942799999999999 6.083333333333333 6.666666666666666C6.083333333333333 6.390526666666666 6.307193333333332 6.166666666666666 6.583333333333333 6.166666666666666L10.583333333333332 6.166666666666666C10.859466666666666 6.166666666666666 11.083333333333332 6.390526666666666 11.083333333333332 6.666666666666666C11.083333333333332 6.942799999999999 10.859466666666666 7.166666666666666 10.583333333333332 7.166666666666666z" fill="currentColor"></path><path d="M11.583333333333332 9.833333333333332L7.583333333333333 9.833333333333332C7.3072 9.833333333333332 7.083333333333333 9.609466666666666 7.083333333333333 9.333333333333332C7.083333333333333 9.0572 7.3072 8.833333333333332 7.583333333333333 8.833333333333332L11.583333333333332 8.833333333333332C11.859466666666666 8.833333333333332 12.083333333333332 9.0572 12.083333333333332 9.333333333333332C12.083333333333332 9.609466666666666 11.859466666666666 9.833333333333332 11.583333333333332 9.833333333333332z" fill="currentColor"></path><path d="M5.25 6.666666666666666C5.25 6.942799999999999 5.02614 7.166666666666666 4.75 7.166666666666666L4.416666666666666 7.166666666666666C4.140526666666666 7.166666666666666 3.9166666666666665 6.942799999999999 3.9166666666666665 6.666666666666666C3.9166666666666665 6.390526666666666 4.140526666666666 6.166666666666666 4.416666666666666 6.166666666666666L4.75 6.166666666666666C5.02614 6.166666666666666 5.25 6.390526666666666 5.25 6.666666666666666z" fill="currentColor"></path><path d="M6.25 9.333333333333332C6.25 9.609466666666666 6.02614 9.833333333333332 5.75 9.833333333333332L5.416666666666666 9.833333333333332C5.140526666666666 9.833333333333332 4.916666666666666 9.609466666666666 4.916666666666666 9.333333333333332C4.916666666666666 9.0572 5.140526666666666 8.833333333333332 5.416666666666666 8.833333333333332L5.75 8.833333333333332C6.02614 8.833333333333332 6.25 9.0572 6.25 9.333333333333332z" fill="currentColor"></path></svg>
							</i>
                            ${p}
                        </span>
                        <span class="gm-video-duration">${d}</span>
                    </div>
                </div>
                <p class="title">${o}</p>
                <div class="gm-up-info">
                    <div class="gm-up-name">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
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
                    </div>
                </div>
                `},{"data-aid":n,"data-title":o,"data-goto":t});return m["data-video"]=e,m}},Ci={$flag:{isInit_reconfigurationTinyAppSettingButton:false,isInit_beautifyTopNavBar_css:false},init(){g.execMenuOnce("bili-head-supplementaryVideoStreamingInformation",()=>{this.addVideoListUPInfo();}),g.execMenu("bili-head-recommend-enable",()=>{wi.init();});},addVideoListUPInfo(){s.info("添加视频列表UP主信息"),M(`
		${x.className.head} .video-list .card-box .gm-up-info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: var(--pd-width);
		}
		${x.className.head} .video-list .card-box .gm-up-info .gm-up-name {
			display: flex;
			align-items: center;
			font-size: 3vmin;
			color: #999A9E;
		}
		${x.className.head} .video-list .card-box .gm-up-info .gm-up-name svg {
			margin-right: calc(var(--pd-width) / 2);
			width: 3vmin;
			height: 3vmin;
		}
		${x.className.head} .gm-video-duration{
			margin: 0 auto;
		}
        `),u.waitNode(x.className.head+" .video-list .card-box").then(()=>{let e=new f.LockFunction(()=>{W(x.className.head+" .video-list .card-box .v-card").forEach(t=>{let n=k.getVue(t),i=n?.info?.author?.name||n?.info?.owner?.name,a=n?.info?.duration;if(i&&!t.querySelector(".gm-up-info")){let r=document.createElement("div");r.innerHTML=`
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
            </div>`,r.className="gm-up-info",t.appendChild(r);}if(a){let r=t.querySelector(".count");if(r&&!r.querySelector(".gm-video-duration")){let o=typeof a=="string"?a:N.parseDuration(a),l=document.createElement("span");l.className="gm-video-duration",l.innerHTML=o,r.appendChild(l);}}});},25);f.mutationObserver(document.body,{config:{subtree:true,childList:true,attributes:true},callback(){e.run();}});});},async reconfigurationTinyAppSettingButton(){s.info("重构tinyApp右上角的设置按钮图标"),this.$flag.isInit_reconfigurationTinyAppSettingButton||(this.$flag.isInit_reconfigurationTinyAppSettingButton=true,M(`

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
			`));let e=await u.waitNode(".nav-bar .icon-config",1e4);if(!e){s.error("未找到设置按钮图标，无法重构");return}e.outerHTML=`
		<div class="gm-face">
			<div class="gm-face-avatar">
				<img src="http://i0.hdslb.com/bfs/face/member/noface.jpg">
			</div>
		</div>
		`;let t=false,n=null,i=L(".gm-face"),a=i.querySelector("img");k.waitVuePropToSet("#app",[{check(r){return typeof r?.$store?.state?.common?.userInfo?.isLogin=="boolean"},set(r){let o=r?.$store?.state?.common?.userInfo;if(t=o?.isLogin,t){if(n=o?.mid,n==null){s.warn("当前是脚本设置的isLogin但其实未登录账号"),t=false;return}o?.uname,a.src=o?.face||a.src;}else s.warn("经检测，Bilibili尚未登录账号");}}]),u.on(i,"click",r=>{if(u.preventEvent(r),t)if(n!=null){let o=Ce.getUserSpaceUrl(n);N.goToUrl(o,false);}else w.error("获取用户id失败");else N.goToLogin(window.location.href);});},beautifyTopNavBar(){s.info("美化顶部navbar"),this.$flag.isInit_beautifyTopNavBar_css||(this.$flag.isInit_beautifyTopNavBar_css=true,M(`
			/* 隐藏logo */
			.${x.className.head} .m-navbar .logo,
			/* 隐藏原有的搜索图标 */
			.${x.className.head} .m-navbar .icon-search{
				display: none !important;
			}
			/* 设置右侧的宽度撑开、逆反 */
			.${x.className.head} .m-navbar .right{
				width: 100%;
				display: flex;
				flex-direction: row-reverse;
				justify-content: flex-end;
			}
			/* 头像 */
			.${x.className.head} .m-navbar .gm-face{
				flex: 0 auto;
				margin-top: 1.86667vmin;
			}
			/* 新的输入框 */
			.${x.className.head} .m-navbar .gm-input-area{
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
			.${x.className.head} .m-navbar .gm-input-area .ic_search_tab{
				color: #a0a0a0;
				vertical-align: middle;
				font-size: 4.33333vmin;
			}
			/* 输入框内容 */
			.${x.className.head} .m-navbar .gm-input-area input[type="search"]{
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
			.${x.className.head} .m-navbar .right .search {
				border: 1px solid #ccc;
				width: 100% !important;
				height: auto !important;
				border-radius: 1rem;
				display: flex;
				align-items: center;
				padding: 2px 6px;
			}
			`)),u.waitNode(".m-head .m-navbar .icon-search",1e4).then(async e=>{if(!e||e.parentElement.querySelector(".gm-input-area"))return;let t=u.createElement("div",{className:"gm-input-area",innerHTML:`
						<i class="iconfont ic_search_tab"></i>
						<input type="search" placeholder="" readonly="" disabled="">
					`}),n=t.querySelector("input");u.on(t,"click",a=>{u.preventEvent(a),N.goToUrl("/search",true);}),u.after(e,t);let i=await dn.getSearchInputPlaceholder();i!=null&&(s.info("热点信息：",i),n.placeholder=i.show_name||i.name);});}},Ai={init(){this.removeAds(),g.onceExec("bili-pc-read-mobile-autoExpand",()=>this.autoExpand());},removeAds(){te.addBlockCSS("body>.h5-download-bar");},autoExpand(){return s.info("自动展开"),[M(`
			${gt.className.read.mobile} .limit{
				overflow: unset !important;
				max-height: unset !important;
			}`),te.addBlockCSS(gt.className.read.mobile+" .read-more")]}},Ei={init(){g.execMenuOnce("bili-space-repairRealJump",()=>{this.repairRealJump();}),g.execMenuOnce("bili-space-coverDynamicStateCardVideo",()=>{this.coverDynamicStateCardVideo();});},repairRealJump(){let e=new f.LockFunction(()=>{W(x.className.space+" .wx-tag.open-app-wrapper").forEach(t=>{let n=k.getVue(t);typeof n?.disabled=="boolean"&&(n.disabled=false);});});f.mutationObserver(document,{config:{subtree:true,childList:true},immediate:true,callback:()=>{e.run();}});},coverDynamicStateCardVideo(){s.info("覆盖动态视频的点击事件"),u.on(document,"click",".card-content .main .wings",e=>{let n=e.target.closest(".card");if(!n){w.error("未找到对应的.card元素");return}let i=k.getVue(n);if(!i){w.error("未找到对应的vue实例");return}let a=i?.shareData?.default?.url;if(!a){w.error("未找到对应的url");return}N.goToUrl(a);},{capture:true});}},Bi={init(){g.execMenu("bili-noCallApp",()=>{this.noCallApp();}),g.execMenu("bili-setLogin",()=>{this.setLogin();}),g.execMenu("bili-setIsClient",()=>{this.setIsClient();});},noCallApp(){k.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.noCallApp",check(e){return typeof e?.$store?.state?.common?.noCallApp=="boolean"},set(e){s.success("成功设置参数 $store.state.common.noCallApp=true"),e.$store.state.common.noCallApp=true;}}]);},setLogin(){let e=new f.GM_Cookie,t=e.get("DedeUserID");t!=null?s.info("Cookie DedeUserID已存在：",t.value):e.set({name:"DedeUserID",value:"2333"},n=>{n?s.error(n):s.success("Cookie成功设置DedeUserID=>2333");}),k.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.userInfo.isLogin",check(n){return typeof n?.$store?.state?.common?.userInfo?.isLogin=="boolean"},set(n){s.success("成功设置参数 $store.state.common.userInfo.isLogin=true"),n.$store.state.common.userInfo.isLogin=true;}},{msg:"设置参数 $store.state.loginInfo.isLogin",check(n){return typeof n?.$store?.state?.loginInfo?.isLogin=="boolean"},set(n){s.success("成功设置参数 $store.state.loginInfo.isLogin=true"),n.$store.state.loginInfo.isLogin=true;}}]);},setIsClient(){k.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.video.isClient",check(e){return typeof typeof e?.$store?.state?.video?.isClient=="boolean"},set(e){s.success("成功设置参数 $store.state.video.isClient=true"),e.$store.state.video.isClient=true;}},{msg:"设置参数 $store.state.opus.isClient=true",check(e){return typeof e?.$store?.state?.opus?.isClient=="boolean"},set(e){s.success("成功设置参数 $store.state.opus.isClient"),e.$store.state.opus.isClient=true;}},{msg:"设置参数 $store.state.playlist.isClient",check(e){return typeof e?.$store?.state?.playlist?.isClient=="boolean"},set(e){s.success("成功设置参数 $store.state.playlist.isClient=true"),e.$store.state.playlist.isClient=true;}},{msg:"设置参数 $store.state.ver.bili",check(e){return typeof e?.$store?.state?.ver?.bili=="boolean"},set(e){s.success("成功设置参数 $store.state.ver.bili=true"),e.$store.state.ver.bili=true;}},{msg:"设置参数 $store.state.ver.biliVer",check(e){return typeof e?.$store?.state?.ver?.biliVer=="number"},set(e){s.success("成功设置参数 $store.state.ver.biliVer=2333333"),e.$store.state.ver.biliVer=2333333;}}]);},setTinyApp(){k.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.tinyApp",check(e){return typeof e?.$store?.state?.common?.tinyApp=="boolean"},set(e){e.$store.state.common.tinyApp=true,s.success("成功设置参数 $store.state.common.tinyApp=true"),g.onceExec("bili-tinyApp-init-css",()=>{M(`
							.tiny-app .reply-input,.tiny-app .reply-item .info .name .right,.tiny-app .reply-item .info .toolbar,.tiny-app .sub-reply-input {
								display: block;
							}
						`);});}}]);}},at=function(e,t,n,i,a,r,o,l,c,p){const d={text:e,type:"button",attributes:{},props:{},description:t,buttonIcon:i,buttonIsRightIcon:a,buttonIconIsLoading:r,buttonType:o,buttonText:n,callback(m){typeof l=="function"&&l(m);},afterAddToUListCallBack:c};return Reflect.set(d.attributes,zt,()=>{d.disable=false;}),d},Di=function(e,t,n,i,a,r="",o,l){const c={text:e,type:"input",inputType:"password",attributes:{},props:{},description:i,placeholder:r,afterAddToUListCallBack:o,getValue(){return this.props[G].get(t,n)},callback(p,d){if(typeof a=="function"&&a(p,d))return;this.props[G].set(t,d);}};return Reflect.set(c.attributes,pe,t),Reflect.set(c.attributes,de,n),Ve.initComponentsStorageApi("input",c,{get(p,d){return g.getValue(p,d)},set(p,d){g.setValue(p,d);}}),c},Ae=function(e,t,n,i,a,r,o){const l={text:e,type:"select",description:r,attributes:{},props:{},getValue(){return this.props[G].get(t,n)},callback(c){if(c==null)return;const p=c.value;if(s.info(`选择：${c.text}`),typeof a=="function"&&a(c))return;this.props[G].set(t,p);},data:i};return Reflect.set(l.attributes,pe,t),Reflect.set(l.attributes,de,n),Ve.initComponentsStorageApi("select",l,{get(c,p){return g.getValue(c,p)},set(c,p){g.setValue(c,p);}}),l},hn=function(e,t,n,i,a,r,o,l,c,p){const d={text:e,type:"slider",description:l,attributes:{},props:{},getValue(){return this.props[G].get(t,n)},getToolTipContent(m){return typeof o=="function"?o(m):`${m}`},callback(m,h){this.props[G].set(t,h);},min:i,max:a,step:c};return Reflect.set(d.attributes,pe,t),Reflect.set(d.attributes,de,n),Ve.initComponentsStorageApi("slider",d,{get(m,h){return g.getValue(m,h)},set(m,h){g.setValue(m,h);}}),d},A=function(e,t,n,i,a,r,o,l,c){const p={text:e,type:"switch",description:a,disabled:o,attributes:{},props:{},getValue(){return this.props[G].get(t,n)},callback(d,m){const h=!!m;s.success(`${h?"开启":"关闭"} ${e}`),this.props[G].set(t,h);},afterAddToUListCallBack:(...d)=>{}};return Reflect.set(p.attributes,pe,t),Reflect.set(p.attributes,de,n),Ve.initComponentsStorageApi("switch",p,{get(d,m){return g.getValue(d,m)},set(d,m){g.setValue(d,m);}}),p},We=function(e,t,n,i,a,r="",o,l){const c={text:e,type:"textarea",attributes:{},props:{},description:i,placeholder:r,disabled:o,getValue(){const d=this.props[G].get(t,n);return Array.isArray(d)?d.join(`
`):d},callback(p,d){this.props[G].set(t,d);}};return Reflect.set(c.attributes,pe,t),Reflect.set(c.attributes,de,n),Ve.initComponentsStorageApi("switch",c,{get(p,d){return g.getValue(p,d)},set(p,d){g.setValue(p,d);}}),c},Ve={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new et.Dictionary),this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t);},initComponentsStorageApi(e,t,n){let i;this.hasStorageApi(e)?i=this.getStorageApi(e):i=n,this.setComponentsStorageApiProperty(t,i);},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,G,t);}},Z=function(e,t,n,i,a,r="",o="text",l,c){const p={text:e,type:"input",inputType:o,attributes:{},props:{},description:i,placeholder:r,afterAddToUListCallBack:l,getValue(){return this.props[G].get(t,n)},callback(d,m){d.target.validity.valid,this.props[G].set(t,m);}};return Reflect.set(p.attributes,pe,t),Reflect.set(p.attributes,de,n),Ve.initComponentsStorageApi("input",p,{get(d,m){return g.getValue(d,m)},set(d,m){g.setValue(d,m);}}),p};class ki{option;constructor(t){this.option=t;}async showView(){const t=U.confirm({title:{text:this.option.title,position:"center"},content:{text:`
        <form class="rule-form-container" onsubmit="return false">
            <ul class="rule-form-ulist"></ul>
            <input type="submit" style="display: none;" />
        </form>
        `,html:true},btn:f.assign({ok:{callback:async()=>{await r();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
      ${U.config.cssText.panelCSS}
      
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
      `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),n=t.$shadowRoot.querySelector(".rule-form-container");t.$shadowRoot.querySelector("input[type=submit]");const i=t.$shadowRoot.querySelector(".rule-form-ulist"),a=await this.option.getView(await this.option.data());u.append(i,a);const r=async()=>{(await this.option.onsubmit(n,await this.option.data())).success&&(t.close(),typeof this.option.dialogCloseCallBack=="function"&&await this.option.dialogCloseCallBack(true));};return t}}class _i{option;constructor(t){this.option=t;}async showView(t){const n=U.confirm({title:{text:this.option.title,position:"center"},content:{text:`
        <div class="rule-view-search-container">
          <div class="pops-panel-select pops-user-select-none" data-mode="native" style="min-width: 50px;">
            <select class="select-rule-status">
            </select>
          </div>
          <div class="pops-panel-select pops-user-select-none" data-mode="native" style="min-width: 50px;">
            <select class="select-rule-value">
            </select>
          </div>
          <div class="pops-panel-input pops-user-select-none">
            <div class="pops-panel-input_inner">
                <input type="text" placeholder="">
            </div>
          </div>
        </div>
        <div class="rule-view-container"></div>
        `,html:true},style:`
      ${U.config.cssText.panelCSS}

      .rule-view-search-container{
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 4px 8px;
      }
      .rule-view-search-container .pops-panel-select{
        min-width: fit-content;
        max-width: 60px;
      }
      .rule-view-search-container .pops-panel-select select{
        width: 100%;
        min-width: auto;
      }
      .rule-view-search-container .pops-panel-input{
        width: 100%;
      }


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
      `,btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async()=>{this.showEditView(false,await this.option.getAddData(),n.$shadowRoot);}},close:{enable:true,callback(){n.close();}},cancel:{enable:false},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:()=>{const l=U.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async()=>{if(s.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){w.error("清理失败");return}else w.success("清理成功");await this.updateDeleteAllBtnText(n.$shadowRoot),this.clearContent(n.$shadowRoot),l.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh"}),{$searchContainer:i,$externalSelect:a,$ruleValueSelect:r,$searchInput:o}=this.parseViewElement(n.$shadowRoot);if(this.option.bottomControls?.filter?.enable){let l=null,c=null;Array.isArray(this.option.bottomControls?.filter?.option)&&u.append(a,this.option.bottomControls?.filter?.option.map(m=>{const h=u.createElement("option",{innerText:m.name});return Reflect.set(h,"data-value",m),h})),Array.isArray(this.option.bottomControls?.filter?.inputOption)&&u.append(r,this.option.bottomControls?.filter?.inputOption.map(m=>{const h=u.createElement("option",{innerText:m.name});return Reflect.set(h,"data-value",m),h})),u.on(a,"change",async()=>{const m=a[a.selectedIndex],h=Reflect.get(m,"data-value");typeof h?.selectedCallBack=="function"&&h.selectedCallBack(h),l=h,await d(false);}),u.on(r,"change",async()=>{const m=r[r.selectedIndex],h=Reflect.get(m,"data-value");typeof h?.selectedCallBack=="function"&&h.selectedCallBack(h),c=h,await d(false);}),u.onInput(o,f.debounce(async()=>{await d(false);}));const p=()=>{const m=a[a.selectedIndex];l=Reflect.get(m,"data-value");const h=r[r.selectedIndex];c=Reflect.get(h,"data-value");},d=async m=>{this.clearContent(n.$shadowRoot),m&&p();const h=await this.option.data(),v=[],C=u.val(o);for(let F=0;F<h.length;F++){const _=h[F];if(typeof t=="function"){const S=await t(_);if(typeof S=="boolean"&&!S)continue}if(l){const S=await l?.filterCallBack?.(_);if(typeof S=="boolean"&&!S)continue}if(c){let S=true;if(C===""?S=true:S=false,S||(S=await c?.filterCallBack?.(_,C)),!S)continue}v.push(_);}await this.appendRuleItemElement(n.$shadowRoot,v);};if(typeof t=="object"&&t!=null){let m;typeof t.external=="number"?m=t.external:m=Array.from(a.options).findIndex(v=>Reflect.get(v,"data-value").value===t.external),m!==-1&&(a.selectedIndex=m);let h;typeof t.rule=="number"?h=t.rule:h=Array.from(r.options).findIndex(v=>Reflect.get(v,"data-value").value===t.rule),h!==-1&&(r.selectedIndex=h);}await d(true);}else u.hide(i,false);}showEditView(t,n,i,a,r,o){let l=async p=>{if(p){if(typeof o=="function"){let d=await this.option.getData(n);o(d);}}else if(t||await this.option.deleteData(n),typeof r=="function"){let d=await this.option.getData(n);r(d);}};new ki({title:t?"编辑":"添加",data:()=>n,dialogCloseCallBack:l,getView:async p=>await this.option.itemControls.edit.getView(p,t),btn:{ok:{enable:true,text:t?"修改":"添加"},cancel:{callback:async p=>{p.close(),await l(false);}},close:{callback:async p=>{p.close(),await l(false);}}},onsubmit:async(p,d)=>{let m=await this.option.itemControls.edit.onsubmit(p,t,d);return m.success?t?(w.success("修改成功"),i&&await this.updateRuleItemElement(m.data,a,i)):i&&await this.appendRuleItemElement(i,m.data):t&&s.error("修改失败"),m},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(t){const n=t.querySelector(".rule-view-container"),i=t.querySelector(".pops-confirm-btn button.pops-confirm-btn-other"),a=t.querySelector(".rule-view-search-container"),r=a.querySelector(".pops-panel-select .select-rule-status"),o=a.querySelector(".pops-panel-select .select-rule-value"),l=a.querySelector(".pops-panel-input input");return {$container:n,$deleteBtn:i,$searchContainer:a,$externalSelect:r,$ruleValueSelect:o,$searchInput:l}}parseRuleItemElement(t){const n=t.querySelector(".rule-controls-enable"),i=n.querySelector(".pops-panel-switch"),a=n.querySelector(".pops-panel-switch__input"),r=n.querySelector(".pops-panel-switch__core"),o=t.querySelector(".rule-controls-edit"),l=t.querySelector(".rule-controls-delete");return {$enable:n,$enableSwitch:i,$enableSwitchInput:a,$enableSwitchCore:r,$edit:o,$delete:l,data:Reflect.get(t,"data-rule")}}async createRuleItemElement(t,n){const i=await this.option.getDataItemName(t),a=u.createElement("div",{className:"rule-item",innerHTML:`
			<div class="rule-name">${i}</div>
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
					${U.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${U.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(a,"data-rule",t);const r="pops-panel-switch-is-checked",{$enable:o,$enableSwitch:l,$enableSwitchCore:c,$enableSwitchInput:p,$delete:d,$edit:m}=this.parseRuleItemElement(a);return this.option.itemControls.enable.enable?(u.on(c,"click",async()=>{let h=false;l.classList.contains(r)?(l.classList.remove(r),h=false):(l.classList.add(r),h=true),p.checked=h,await this.option.itemControls.enable.callback(t,h);}),await this.option.itemControls.enable.getEnable(t)&&l.classList.add(r)):o.remove(),this.option.itemControls.edit.enable?u.on(m,"click",h=>{u.preventEvent(h),this.showEditView(true,t,n,a,v=>{t=null,t=v;});}):m.remove(),this.option.itemControls.delete.enable?u.on(d,"click",h=>{u.preventEvent(h);const v=U.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async()=>{s.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(t)?(w.success("成功删除该数据"),a.remove(),await this.updateDeleteAllBtnText(n),v.close()):w.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):d.remove(),a}async appendRuleItemElement(t,n){const{$container:i}=this.parseViewElement(t),a=[],r=Array.isArray(n)?n:[n];for(let o=0;o<r.length;o++){const l=r[o],c=await this.createRuleItemElement(l,t);a.push(c);}return u.append(i,a),await this.updateDeleteAllBtnText(t),a}async updateRuleContaienrElement(t){this.clearContent(t);const n=await this.option.data();await this.appendRuleItemElement(t,n),await this.updateDeleteAllBtnText(t);}async updateRuleItemElement(t,n,i){const a=await this.createRuleItemElement(t,i);n.after(a),n.remove();}clearContent(t){const{$container:n}=this.parseViewElement(t);u.html(n,"");}setDeleteBtnText(t,n,i=false){const{$deleteBtn:a}=this.parseViewElement(t);i?u.html(a,n):u.text(a,n);}async updateDeleteAllBtnText(t){let n=await this.option.data();this.setDeleteBtnText(t,`清空所有(${n.length})`);}}const we={$data:{whiteList:[],ruleData:[]},$key:{STORAGE_KEY:"bili-componentDetection-rule"},init(){this.$data.whiteList.length=0,this.$data.ruleData.length=0,this.getData().forEach(t=>{t.enable&&this.$data.ruleData.push(t);});},showView(){let e=U.fn.PanelHandlerComponents();function t(i,a){return {get(r,o){return i[r]??o},set(r,o){i[r]=o;}}}new _i({title:"成分检测",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:i=>i.name,updateData:i=>this.updateData(i),deleteData:i=>this.deleteData(i),getData:i=>this.getData().find(o=>o.uuid===i.uuid)??i,itemControls:{enable:{enable:true,getEnable(i){return i.enable},callback:(i,a)=>{i.enable=a,this.updateData(i);}},edit:{enable:true,getView:(i,a)=>{let r=document.createDocumentFragment(),o=this.getTemplateData();a||(i=o);let l=A("启用","enable",o.enable);Reflect.set(l.props,G,t(i));let c=e.createSectionContainerItem_switch(l).$el,p=Z("规则名称","name","",o.name,void 0,"必填");Reflect.set(p.props,G,t(i));let d=e.createSectionContainerItem_input(p).$el,m=A("是否显示标签名称","isShowDisplayName",o.data.isShowDisplayName);Reflect.set(m.props,G,t(i.data));let h=e.createSectionContainerItem_switch(m).$el,v=Z("标签名称","displayName",o.data.displayName,"例如：原神");Reflect.set(v.props,G,t(i.data));let C=e.createSectionContainerItem_input(v).$el,F=A("是否显示标签图标","isShowDisplayIcon",o.data.isShowDisplayIcon);Reflect.set(F.props,G,t(i.data));let _=e.createSectionContainerItem_switch(F).$el,S=Z("标签图标","displayIcon",o.data.displayIcon,"Url或base64");Reflect.set(S.props,G,t(i.data));let E=e.createSectionContainerItem_input(S).$el,y=We("关键词","keywords","","用于匹配标题、简介、转发内容的关键词",void 0,"多个关键词换行");Reflect.set(y.props,G,{get($,I){let B=i.data[$]??I;return typeof B=="string"?B.split(`
`):B},set($,I){typeof I=="string"&&(I=I.split(`
`)),i.data[$]=I;}});let V=e.createSectionContainerItem_textarea(y).$el,D=We("关注的用户","followings","","用户id",void 0,"多个用户id换行");Reflect.set(D.props,G,{get($,I){let B=i.data[$]??I;return typeof B=="string"?B.split(`
`).map(z=>Number(z)).filter(z=>!isNaN(z)):B},set($,I){typeof I=="string"&&(I=I.split(`
`).map(B=>Number(B)).filter(B=>!isNaN(B))),i.data[$]=I;}});let T=e.createSectionContainerItem_textarea(D).$el,q=We("黑名单","blacklist","","",void 0,"多个用户id换行");Reflect.set(q.props,G,{get($,I){let B=i.data[$]??I;return typeof B=="string"?B.split(`
`).map(z=>Number(z)).filter(z=>!isNaN(z)):B},set($,I){typeof I=="string"&&(I=I.split(`
`).map(B=>Number(B)).filter(B=>!isNaN(B))),i.data[$]=I;}});let j=e.createSectionContainerItem_textarea(q).$el;return r.append(c,d,h,C,_,E,V,T,j),r},onsubmit:(i,a,r)=>{let o=i.querySelectorAll(".rule-form-ulist > li"),l=this.getTemplateData();a&&(l.uuid=r.uuid);try{return o.forEach(c=>{let p=Reflect.get(c,e.$data.nodeStoreConfigKey),d=Reflect.get(p,"attributes"),m=Reflect.get(c,G),h=Reflect.get(d,pe),v=Reflect.get(d,de),C=m.get(h,v);Reflect.has(l,h)?Reflect.set(l,h,C):Reflect.has(l.data,h)?Reflect.set(l.data,h,C):s.error(`${h}不在数据中`);}),l.name.trim()===""?(w.error("规则名称不能为空"),{success:!1,data:l}):a?{success:this.updateData(l),data:l}:{success:this.addData(l),data:l}}catch(c){return s.error(c),{success:false,data:l}}finally{this.init();}},style:`
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
                    `},delete:{enable:true,deleteCallBack:i=>this.deleteData(i)}}}).showView();},getTemplateData(){return {uuid:f.generateUUID(),enable:true,name:"",data:{isShowDisplayIcon:true,displayIcon:"",isShowDisplayName:true,displayName:"",keywords:[],blacklist:[],followings:[]}}},getData(){return Fe(this.$key.STORAGE_KEY,[])},setData(e){$e(this.$key.STORAGE_KEY,e);},addData(e){let t=this.getData();return t.findIndex(i=>i.uuid==e.uuid)===-1?(t.push(e),$e(this.$key.STORAGE_KEY,t),true):false},updateData(e){let t=this.getData(),n=t.findIndex(a=>a.uuid==e.uuid),i=false;return n!==-1&&(i=true,t[n]=e),this.setData(t),i},deleteData(e){let t=this.getData(),n=t.findIndex(a=>a.uuid==e.uuid),i=false;return n!==-1&&(i=true,t.splice(n,1)),this.setData(t),i},clearData(){Qe(this.$key.STORAGE_KEY);},exportRule(e="rule.json"){let t=this.getData(),n=new Blob([JSON.stringify(t,null,4)]),i=window.URL.createObjectURL(n),a=document.createElement("a");a.href=i,a.download=e,a.click(),setTimeout(()=>{window.URL.revokeObjectURL(i);},1500);},importRule(){let e=U.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
                    <div class="import-mode" data-mode="local">本地导入</div>
                    <div class="import-mode" data-mode="network">网络导入</div>
                `,html:true},width:ie.info.width,height:ie.info.height,style:`
                .import-mode{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),t=e.$shadowRoot.querySelector(".import-mode[data-mode='local']"),n=e.$shadowRoot.querySelector(".import-mode[data-mode='network']");u.on(t,"click",i=>{u.preventEvent(i),e.close();let a=u.createElement("input",{type:"file",accept:".json"});u.on(a,["propertychange","input"],r=>{if(!a.files?.length)return;let o=a.files[0],l=new FileReader;l.onload=()=>{let c=f.toJSON(l.result);if(!Array.isArray(c)){s.error("不是正确的规则文件",c),w.error("不是正确的规则文件");return}this.setData(c),w.success(`成功导入 ${c.length}条规则`);},l.readAsText(o,"UTF-8");}),a.click();}),u.on(n,"click",i=>{u.preventEvent(i),e.close(),U.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"url",focus:true},btn:{ok:{callback:async(a,r)=>{let o=a.text;if(f.isNull(o)){w.error("请填入完整的url");return}let l=await Q.get(o);if(!l.status)return;let c=f.toJSON(l.data.responseText);if(!Array.isArray(c)){s.error("不是正确的规则文件",l,c),w.error("不是正确的规则文件");return}this.setData(c),a.close(),w.success(`成功导入 ${c.length}条规则`);}}},width:ie.info.width,height:"auto"});});}},Fi={$data:{searchIcon:`
            <svg viewBox="0 0 24 24" fill="none">
                <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        `},init(){we.init(),M(`
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
        `),u.onReady(()=>{let e=new f.LockFunction(async()=>{W(".reply-item:not([data-is-inject-search-label])").forEach(t=>{t.setAttribute("data-is-inject-search-label","");let n=t.querySelector(".info .floor-time")||t.querySelector(".content-warp .user-info"),{$container:i,$compositionNameControl:a}=this.createSearchButton(()=>{let r=t.querySelector(".user-name[data-user-id]");if(!r)throw new TypeError("获取用户名元素失败");let o=r.getAttribute("data-user-id");if(o==null)throw new TypeError("获取mid失败");return o});u.after(n,i);}),[...Array.from(W(".reply-item .member-link[data-url]:not([data-is-inject-search-label])")),...Array.from(W(".reply-item .jump-link.user[data-user-id]:not([data-is-inject-search-label])")),...Array.from(W(".reply-item .sub-user-name[data-user-id]:not([data-is-inject-search-label])"))].forEach(t=>{t.setAttribute("data-is-inject-search-label","");let{$container:n,$compositionNameControl:i}=this.createSearchButton(()=>{let r=t.getAttribute("href").match(/space.bilibili.com\/([\d]+)/i)?.[1];if(r==null)throw new TypeError("获取mid失败");return r});u.after(t,n);}),W(".m-space-info .base:not([data-is-inject-search-label])").forEach(t=>{t.setAttribute("data-is-inject-search-label","");let n=t.closest(".m-space-info"),{$container:i}=this.createSearchButton(()=>{let a=k.getVue(n);if(!a)throw new TypeError("获取vue属性失败");let r=a.info.mid;if(r==null)throw new TypeError("获取mid失败");return r});u.after(t,i);});});f.mutationObserver(document,{config:{subtree:true,childList:true},immediate:true,callback:()=>{e.run();}});});},async queryUserInfo(e){let t=1,n=[];for(;;){s.info(`正在获取用户的关注：${e} ==> 第${t}页`);let l=await Ze.following(e,t);if(!l){s.error("获取关注列表失败");break}if(typeof l=="string"){s.error("获取关注列表失败，原因："+l);break}if(!l.list.length||(n=n.concat(l.list),l.list.length===l.total&&t===1))break;t++,f.sleep(250);}let i="",a=1,r=[];for(;;){s.info(`正在获取用户的空间动态：${e} ==> 偏移：${i}`);let l=await Ze.space(e,i);if(!l){s.error("获取用户空间动态数据失败");break}if(typeof l=="string"){s.error("获取用户空间动态数据失败，原因："+l);break}if(i===l.offset&&i!=""||(i=l.offset,r=r.concat(l.items),!l.has_more))break;if(a++,a>5){s.info("最多请求5页空间动态的数据");break}f.sleep(250);}let o={following:[],space:[]};return n.forEach(l=>{o.following.push({name:l.uname,mid:l.mid,sign:l.sign});}),r.forEach(l=>{if(l.orig==null){let c={title:l.modules.module_dynamic.major?.archive?.title,desc:l.modules.module_dynamic.major?.archive?.desc||l.modules.module_dynamic.desc?.text,pub_ts:l.modules.module_author.pub_ts*1e3,id_str:l.id_str};o.space.push({contentInfo:c});}else {let c={title:null,desc:l.modules.module_dynamic.desc?.text,pub_ts:l.modules.module_author.pub_ts*1e3,id_str:l.id_str},p={mid:l.orig.modules.module_author.mid,name:l.orig.modules.module_author.name,title:l.orig.modules.module_dynamic?.major?.archive?.title||null,desc:l.orig.modules.module_dynamic.desc?.text??l.orig.modules.module_dynamic?.major?.archive?.desc,pub_ts:l.orig.modules.module_author.pub_ts*1e3,id_str:l.orig.id_str};typeof p.desc=="string"&&Array.isArray(l.orig.modules.module_dynamic?.desc?.rich_text_nodes)&&l.orig.modules.module_dynamic.desc.rich_text_nodes.forEach(d=>{d.type==="RICH_TEXT_NODE_TYPE_AT"&&(p.desc=p.desc?.replace(d.text,""));}),o.space.push({contentInfo:c,forwardInfo:p});}}),o},createSearchButton(e){let t=u.createElement("div",{className:"composition-checkable",innerHTML:`
                <div class="composition-badge-control">
                    <span class="composition-name-control">
                        ${this.$data.searchIcon}
                    </span>
                </div>
            `}),n=t.querySelector(".composition-name-control");return u.on(t,"click",async i=>{if(u.preventEvent(i),t.hasAttribute("data-is-searching")){s.error("正在搜索中，请稍后再试");return}t.setAttribute("data-is-searching",""),u.html(n,"...");try{if(we.$data.ruleData.length===0){w.warning("未配置规则，请在设置中进行添加"),u.html(n,this.$data.searchIcon);return}let a=e();this.clearLabel(t);let r=await this.queryUserInfo(a);this.handleShowLabel(a,r,t),u.html(n,this.$data.searchIcon);}catch(a){s.error(a),w.error(a.message,{timeout:3500}),u.html(n,"重试");}finally{t.removeAttribute("data-is-searching");}}),{$container:t,$compositionNameControl:n}},createLabel(e){let t=u.createElement("div",{className:"composition-checked",innerHTML:`
				<div class="composition-badge">
				</div>
			`}),n=t.querySelector(".composition-badge");if(e.rule.data.isShowDisplayName){let i=u.createElement("span",{className:"composition-name",innerHTML:e.rule.data.displayName});u.append(n,i);}if(e.rule.data.isShowDisplayIcon){let i=null;e.rule.data.displayIcon.startsWith("http")?i=u.createElement("img",{className:"composition-icon",src:e.rule.data.displayIcon},{referrer:"no-referrer",referrerPolicy:"no-referrer"}):i=u.createElement("span",{className:"composition-icon",innerHTML:e.rule.data.displayIcon}),u.append(n,i);}return u.on(n,"click",i=>{u.preventEvent(i),U.alert({title:{text:"识别信息",html:false,position:"center"},content:{text:`
						${e.matchedInfoList.map(a=>{let r=u.createElement("div",{className:"reason-container",innerHTML:`
										<div class="reason-text"><span>原因：</span>${a.reason}</div>
										<div class="reason-text"><span>匹配：</span>${typeof a.reasonLink=="string"?`
											<a href="${a.reasonLink}" target="_blank">${a.reasonText}</a>
										`:a.reasonText}</div>
									`});if(typeof a.reasonTime=="number"){let o=u.createElement("div",{className:"reason-text",innerHTML:`
										<span>时间：</span>${f.formatTime(a.reasonTime)}
										`});u.append(r,o);}return r.outerHTML}).join(`
`)}
					`,html:true},btn:{ok:{enable:false}},mask:{enable:true,clickEvent:{toClose:true}},width:ie.setting.width,height:ie.setting.height,style:`
					.reason-container{
						color: #7367F0;
						margin: 10px 10px;
					}
				`});}),t},clearLabel(e){for(;;){let t=u.prev(e);if(!t)break;if(t?.classList?.contains("composition-checked"))t.remove();else break}},handleShowLabel(e,t,n){if(we.$data.ruleData.length===0){w.warning("未配置规则，请在设置中进行添加");return}if(e=e.toString(),we.$data.whiteList.includes(e))return;let i=[],a=(r,o)=>{let l=i.find(c=>c.rule===r);l?l.matchedInfoList.push(o):i.push({rule:r,matchedInfoList:[o]});};we.$data.ruleData.forEach(r=>{if(Array.isArray(r.data.blacklist)&&r.data.blacklist.find(o=>o.toString()===e)){a(r,{reason:"黑名单用户",reasonText:e,reasonLink:Ce.getUserSpaceUrl(e),reasonTime:null});return}if(Array.isArray(r.data.followings)){let o="关注列表",l="";r.data.followings.some(p=>{let d=t.following.some(m=>m.mid.toString()===p.toString());return d&&(l=p.toString()),d})&&a(r,{reason:o,reasonText:l,reasonLink:Ce.getUserSpaceUrl(l),reasonTime:null});}Array.isArray(r.data.keywords)&&r.data.keywords.forEach(o=>{for(let l=0;l<t.space.length;l++){const c=t.space[l];let p="",d=o,m=`/opus/${c.contentInfo.id_str}`,h=c.contentInfo.pub_ts;c.forwardInfo==null?typeof c.contentInfo.desc=="string"&&c.contentInfo.desc.match(o)?p="投稿视频简介":typeof c.contentInfo.title=="string"&&c.contentInfo.title.match(o)&&(p="投稿视频标题"):typeof c.contentInfo.desc=="string"&&c.contentInfo.desc.match(o)?p="空间动态转发":typeof c.forwardInfo?.title=="string"&&c.forwardInfo.title.match(o)?p="空间动态视频标题":typeof c.forwardInfo?.desc=="string"&&c.forwardInfo.desc.match(o)&&(p="空间动态视频简介"),p!==""&&a(r,{reason:p,reasonText:d,reasonLink:m,reasonTime:h});}});}),f.sortListByProperty(i,r=>r.matchedInfoList.length,true),i.forEach(r=>{let o=this.createLabel(r);u.before(n,o);});}},$i={$flag:{isWatchVideoChange:false},$data:{art:null},init(){},updateArtPlayerVideoInfo(e,t){const n=this;k.waitVuePropToSet(x.className.playlist+" .playlist-player",{msg:"等待覆盖playlist播放器",check(i){return typeof i?.aid=="number"&&typeof i?.cid=="number"&&typeof i?.bvid=="string"},async set(i){L(".playlist-player .player-container")?.remove();let a=L(x.className.playlist+" .playlist-player"),r=L(x.className.playlist),o=k.getVue(r),{aid:l,cid:c,bvid:p}=i,{title:d,cover:m}=o.video;s.info(`视频播放信息 => aid：${l} bvid：${p} cid：${c}`),e==null&&(e={aid:l,bvid:p,cid:c,pic:m,title:d});const h=await cn(e);if(h==null)return;let v=L("#artplayer");if(!v){const C=u.createElement("div",{className:"artplayer-container",innerHTML:`
								<div id="artplayer"></div>
							`});v=C.querySelector("#artplayer"),u.append(a,C);}if(h.container=v,n.$data.art==null){let C=await Be.init(h);if(C)n.$data.art=C;else return;n.$data.art.volume=1,n.$data.art.once("ready",()=>{g.execMenu("bili-video-playerAutoPlayVideoFullScreen",async()=>{s.info("自动进入全屏"),n.$data.art.fullscreen=true,n.$data.art.once("fullscreenError",()=>{s.warn("未成功进入全屏，需要用户交互操作，使用网页全屏代替"),n.$data.art.fullscreenWeb=true;});});}),n.$data.art.on("video:ended",()=>{s.info("视频播放结束，自动下一集");let F=L(x.className.playlist+" .control-panel");if(!F){s.error("未找到播放列表，无法自动播放下一集");return}if(k.getVue(F)==null){s.error("未找到播放列表的Vue实例，无法自动播放下一集");return}let{playMode:S,mediaList:E,videoIndex:y}=i.$store.state.playlist;if(y>=E.length-1)s.info("播放列表已播放完毕");else {let V=L(`.video-card[index="${y}"]`),D=k.getVue(V),T=D.p;if(T>=D.video.page){let q=L(`.video-card[index="${y+1}"]`);k.getVue(q).changeVideo(),s.info(`当前播放列表共：${E.length-1}个，即将播放下一个视频，第${y+2}个`);}else T++,D.changeVideo(T),s.info(`当前播放列表共：${E.length-1}个，即将播放第${y+2}-${T}`);}});}else await Be.update(n.$data.art,h);}}),k.waitVuePropToSet(x.className.playlist+" .playlist-player",{msg:"等待监听playlist播放列表改变",check(i){return typeof i.$watch=="function"},set(i){n.$flag.isWatchVideoChange||(n.$flag.isWatchVideoChange=true,i.$watch("cid",(a,r)=>{s.info("切换播放视频"),n.updateArtPlayerVideoInfo();}));}});}},Si={init(){this.coverVideoPlayer();},coverVideoPlayer(){L("#artplayer")?s.warn("已存在播放器，更新播放信息"):M(`
			#app .playlist .playlist-player .player-container{
				display: none !important;
			}
			
			${pt}
			
			${sn}
			
			`),$i.updateArtPlayerVideoInfo();}},fn={init(){Nn.init(),Xe.init(),Bi.init(),g.execMenuOnce("bili-allowCopy",()=>M(`
				.v-drawer{
					-webkit-user-select: unset !important;
					-moz-user-select: unset !important;
					user-select: unset !important;
				}
			`)),g.onceExec("listenRouterChange",()=>{this.listenRouterChange();}),g.execMenuOnce("bili-hookSetTimeout_autoOpenApp",()=>{s.info("hook  window.setTimeout autoOpenApp"),Ie.setTimeout("autoOpenApp"),Ie.setTimeout("bilibili://"),Ie.setTimeout("void 0 !== y && document[y]");}),g.execMenuOnce("bili-overrideLaunchAppBtn_Vue_openApp",()=>{s.info("覆盖元素.launch-app-btn上的openApp"),Ie.overRideLaunchAppBtn_Vue_openApp();}),g.execMenuOnce("bili-cover-bili-open-app-open",()=>{s.info("覆盖元素bili-open-app上的opener.open"),Ie.overRideBiliOpenApp();}),g.execMenuOnce("bili-cover-wx-tag-handleClick",()=>{s.info("覆盖元素.wx-tag的handleClick函数"),Ie.overRideWxTaghandleClick();}),g.execMenuOnce("bili-head-beautify",()=>(s.info("添加美化CSS"),M(xn))),g.execMenuOnce("bili-componentDetection",()=>{Fi.init();}),H.isVideo()?(s.info("Router: 视频稿件"),Xn.init()):H.isOpus()?(s.info("Router: 专栏稿件"),hi.init()):wn.isReadMobile()?(s.info("PC-Router: 专栏稿件"),Ai.init()):H.isDynamic()?(s.info("Router: 动态"),fi.init()):H.isBangumi()?(s.info("Router: 番剧"),li.init()):H.isSearch()?(s.info("Router: 搜索"),pi.init()):H.isLive()?(s.info("Router: 直播"),mi.init()):H.isTopicDetail()?s.info("Router: 话题"):H.isHead()?(s.info("Router: 首页之类的"),Ci.init()):H.isSpace()?(s.info("Router: 个人空间"),Ei.init()):H.isPlayList()?(s.info("Router: 播放列表"),Si.init()):s.error("该Router暂未适配，可能是首页之类："+window.location.href),u.onReady(()=>{});},listenRouterChange(){k.waitVuePropToSet("#app",{msg:"监听路由变化",check:e=>typeof e?.$router?.afterEach=="function",set:e=>{s.success("成功设置监听路由变化"),e.$router.beforeHooks.splice(0,0,(t,n,i)=>{if(s.info("路由变化 => 更新前",{to:t,from:n}),t.hash==="#/seeCommentReply"||n.hash==="#/seeCommentReply"){s.info("该路由变化判定为#/seeCommentReply"),i();return}if(g.getValue("bili-repairVueRouter404")&&t.name==="space"){s.info("修复空间跳转404"),window.location.href=t.fullPath;return}if(t.fullPath.startsWith("/video")){if(n.fullPath.startsWith("/video")&&g.getValue("bili-video-forceThisPageToRefreshAndRedirect")){s.info("强制本页刷新"),window.location.href=t.fullPath;return}else if(H.isHead()&&g.getValue("bili-head-openVideoInNewTab")){s.info("当前是首页，新标签页打开"),window.open(t.fullPath,"_blank");return}}else if(t.fullPath.startsWith("/bangumi")){if(n.fullPath.startsWith("/bangumi")){s.info("番剧 => 番剧"),window.location.href=t.fullPath;return}else if(H.isHead()&&g.getValue("bili-head-openVideoInNewTab")){s.info("首页 => 番剧"),window.open(t.fullPath,"_blank");return}}i();}),e.$router.afterHooks.splice(0,0,(t,n)=>{if(s.info("路由变化 => 更新后",{to:t,from:n}),t.hash==="#/seeCommentReply"||n.hash==="#/seeCommentReply"){s.info("该路由变化判定为#/seeCommentReply，不重载");return}g.execMenu("bili-listenRouterChange",()=>{fn.init();});});}});}},Ti={id:"panel-common",title:"通用",views:[{text:"",type:"container",views:[{text:"功能",type:"deepMenu",views:[{text:"",type:"container",views:[A("监听路由-重载所有功能","bili-listenRouterChange",true,void 0,"用于处理页面跳转(本页)时功能不生效问题"),A("修复VueRouter跳转404问题","bili-repairVueRouter404",true,void 0,"例如：点击UP主正确进入空间"),A("新标签页打开","bili-go-to-url-blank",false,void 0,"通过开启【覆盖点击事件】相关的设置，通过新标签页打开链接"),A("允许复制","bili-allowCopy",true,void 0,"一般用于处理楼层的回复弹窗内无法选中复制问题")]}]},{text:"变量设置",type:"deepMenu",views:[{text:"",type:"container",views:[A("noCallApp","bili-noCallApp",true,void 0,"$store.state.common.noCallApp=true"),A("isLogin","bili-setLogin",true,void 0,["$store.state.common.userInfo.isLogin=true","$store.state.loginInfo.isLogin=true"].join("<br>")),A("isClient","bili-setIsClient",true,void 0,["$store.state.video.isClient=true","$store.state.opus.isClient=true","$store.state.playlist.isClient=true","$store.state.ver.bili=true","$store.state.ver.biliVer=2333"].join("<br>"))]}]},{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[A("覆盖.launch-app-btn openApp","bili-overrideLaunchAppBtn_Vue_openApp",true,void 0,"覆盖.launch-app-btn元素上的openApp函数，可阻止点击唤醒/下载App"),A("覆盖bili-open-app opener.open","bili-cover-bili-open-app-open",true,void 0,"覆盖bili-open-app/m-open-app元素上的opener.open函数，可阻止点击唤醒/下载App，如果存在有效链接，会自动跳转"),A("覆盖.wx-tag的handleClick","bili-cover-wx-tag-handleClick",true,void 0,"覆盖.wx-tag元素上的点击事件，让它直接打开视频"),A("劫持setTimeout-autoOpenApp","bili-hookSetTimeout_autoOpenApp",true,void 0,"阻止自动调用App")]}]},{type:"deepMenu",text:"成分检测",views:[{type:"container",text:"",views:[A("启用","bili-componentDetection",true,void 0,"启用后可检测用户的成分信息"),at("自定义规则","检测用户成分的规则","管理",void 0,false,false,"primary",()=>{we.showView();})]},{type:"container",text:"",views:[at("数据导入","导入自定义规则数据","导入",void 0,false,false,"primary",()=>{we.importRule();}),at("数据导出","导出自定义规则数据","导出",void 0,false,false,"primary",()=>{we.exportRule("成分检测.json");})]}]}]},{text:"",type:"container",views:[{text:"数据配置",type:"deepMenu",views:[{text:"",type:"container",views:[Di("access_token","bili-head-recommend-access_token",De.getAccessToken(),"填入access_token，可用于获取推荐视频数据、番剧搜索、番剧播放等",(e,t)=>{De.setAccessTokenInfo({access_token:t,expireAt:De.generateExpireAt()});})]}]},{text:"Toast配置",type:"deepMenu",views:[{text:"",type:"container",views:[Ae("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],e=>{s.info("设置当前Qmsg弹出位置"+e.text);},"Toast显示在页面九宫格的位置"),Ae("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),A("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},{text:"Cookie配置",type:"deepMenu",views:[{text:"",type:"container",views:[A("启用","httpx-use-cookie-enable",false,void 0,"启用后，将根据下面的配置进行添加cookie"),A("使用document.cookie","httpx-use-document-cookie",false,void 0,"自动根据请求的域名来获取对应的cookie"),We("bilibili.com","httpx-cookie-bilibili.com","",void 0,void 0,"Cookie格式：xxx=xxxx;xxx=xxxx")]}]}]}]},Ii={id:"panel-head",title:"首页",views:[{text:"",type:"container",views:[{text:"功能",type:"deepMenu",views:[{text:"",type:"container",views:[A("美化显示","bili-head-beautify",true,void 0,"调整瀑布流视频卡片样式类似哔哩哔哩App"),A("美化顶部NavBar","bili-beautifyTopNavBar",true,void 0,"类似哔哩哔哩App的样式"),A("补充推荐视频信息","bili-head-supplementaryVideoStreamingInformation",true,void 0,"给视频添加UP主名，当前视频总时长信息"),A("新标签页打开","bili-head-openVideoInNewTab",false,void 0,"包括视频、番剧")]}]},{text:"推荐视频",type:"deepMenu",views:[{text:"",type:"container",views:[A("启用","bili-head-recommend-enable",true,void 0,"添加【推荐】标签，数据来源为App端(如果填入了access_token的话)"),A("显示【图文】","bili-head-recommend-push-graphic",true,void 0,"加载App端推送的【图文】卡片")]}]}]}]},Li={id:"panel-video",title:"视频",isDefault(){return H.isVideo()},views:[{text:"",type:"container",views:[{text:"功能",type:"deepMenu",views:[{text:"",type:"container",views:[A("强制本页刷新跳转","bili-video-forceThisPageToRefreshAndRedirect",false,void 0,"用于处理内存泄露问题"),A("新增评论模块","bili-video-addCommentModule",true,void 0,"用于查看当前视频的评论"),A("新增简介模块","bili-video-addDescModule",true,void 0,"用于查看当前视频的播放量、简介、一键三连等信息")]}]},{text:"ArtPlayer播放器",type:"deepMenu",views:[{text:"功能",type:"container",views:[A("启用","bili-video-enableArtPlayer",true,void 0,"使用artplayer代替页面的播放器"),Ae("播放的视频类型","bili-video-playType","mp4",[{text:"mp4",value:"mp4"},{text:"dash",value:"dash"}],void 0,"当选择dash时会有画质更高的选项"),A("自动播放视频","bili-video-playerAutoPlayVideo",false,void 0,""),A("自动进入全屏","bili-video-playerAutoPlayVideoFullScreen",false,void 0,"")]},{text:"控件设置",type:"container",views:[hn("controls左右边距","bili-video-artplayer-controlsPadding-left-right",0,0,50,void 0,e=>e+"px","可用于全屏横屏适配屏幕",1)]},{text:"插件",type:"container",views:[A("弹幕","artplayer-plugin-video-danmaku-enable",true,void 0,"哔哩哔哩 (゜-゜)つロ 干杯~"),A("Dash Audio Support","artplayer-plugin-video-m4sAudioSupport-enable",true,void 0,"视频类型为dash时，该插件可支持播放音频"),A("选集","artplayer-plugin-video-epChoose-enable",true,void 0,"当视频播放完毕后会自动连播"),A("CC字幕","artplayer-plugin-video-cc-subtitle-enable",true,void 0,"字幕支持插件，如果存在繁体字幕，则自动生成简体字幕"),A("顶部工具栏","artplayer-plugin-video-toptoolbar-enable",true,void 0,"显示视频标题和当前观看人数"),A("视频统计信息","artplayer-plugin-video-statistics-enable",true,void 0,"用于显示当前视频信息的弹窗")]},{text:"加速CDN设置（dash）",type:"container",views:[Ae("视频-UPOS服务器设置","bili-video-uposServerSelect",se[0].host,se.map(e=>({text:e.name,value:e.host})),void 0,"设置视频流的服务器，可加快视频加载速度"),Z("视频-自定义UPOS服务器","bili-video-uposServerSelect-own","","自定义的服务器优先级大于上面选择的服务器",void 0,"请输入upos服务器的域名"),Ae("音频-UPOS服务器设置","bili-video-uposServerSelect-audio",se[0].host,se.map(e=>({text:e.name,value:e.host})),void 0,"设置音频的服务器，可加快音频加载速度"),Z("音频-自定义UPOS服务器","bili-video-uposServerSelect-audio-own","","自定义的服务器优先级大于上面选择的服务器",void 0,"请输入upos服务器的域名")]}]},{text:"覆盖点击事件",type:"deepMenu",views:[{text:"",type:"container",views:[A("UP主信息","bili-video-cover-UpWrapper",true,void 0,"点击UP主头像/名称可跳转至UP主空间"),A("相关视频","bili-video-cover-bottomRecommendVideo",true,void 0,"点击下面的相关视频可正确跳转至该视频"),A("选集","bili-video-cover-seasonNew",true,void 0,"点击下面的选集列表内的视频可正确跳转至该视频")]}]},{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[A("阻止调用App","bili-video-hook-callApp",true,void 0,"处理函数: PlayerAgent")]}]}]}]},Vi={id:"panel-opus",title:"专栏",isDefault(){return H.isOpus()},views:[{text:"",type:"container",views:[{text:"功能",type:"deepMenu",views:[{text:"",type:"container",views:[A("自动展开阅读全文","bili-opus-automaticallyExpandToReadFullText",true,void 0,"屏蔽【展开阅读全文】按钮并自动处理全文高度")]}]},{text:"变量设置",type:"deepMenu",views:[{text:"",type:"container",views:[A("autoOpenApp","bili-opus-variable-autoOpenApp",true,void 0,"autoOpenApp函数置空"),A("go404","bili-opus-variable-go404",true,void 0,"go404函数置空，可禁止前往404页面"),A("handleFallback","bili-opus-variable-handleFallback",true,void 0,"禁止前往404页面")]}]},{text:"覆盖点击事件",type:"deepMenu",views:[{text:"",type:"container",views:[A("话题","bili-opus-cover-topicJump",true,void 0,"点击话题正确跳转"),A("header用户","bili-opus-cover-header",true,void 0,"点击内容上的发布本动态的用户正确跳转个人空间")]}]}]}]},Mi={id:"panel-dynamic",title:"动态",isDefault(){return H.isDynamic()},views:[{text:"",type:"container",views:[{text:"覆盖点击事件",type:"deepMenu",views:[{text:"",type:"container",views:[A("话题","bili-dynamic-cover-topicJump",true,void 0,"点击话题正确跳转"),A("header用户","bili-dynamic-cover-header",true,void 0,"点击内容上的发布本动态的用户正确跳转个人空间"),A("@用户","bili-dynamic-cover-atJump",true,void 0,"点击@用户正确跳转个人空间"),A("引用","bili-dynamic-cover-referenceJump",true,void 0,"点击引用的视频|用户正确跳转")]}]}]}]},Ri={id:"panel-bangumi",title:"番剧",isDefault(){return H.isBangumi()},views:[{text:"",type:"container",views:[{text:"功能",type:"deepMenu",views:[{text:"",type:"container",views:[A("固定缩放倍率","bili-bangumi-initialScale",true,void 0,"")]}]},{text:"ArtPlayer播放器",type:"deepMenu",views:[{text:"控件设置",type:"container",views:[hn("controls左右边距","bili-bangumi-artplayer-controlsPadding-left-right",0,0,50,void 0,e=>e+"px","可用于全屏横屏适配屏幕",1)]},{text:"插件",type:"container",views:[A("弹幕","artplayer-plugin-bangumi-danmaku-enable",true,void 0,"哔哩哔哩 (゜-゜)つロ 干杯~"),A("Dash Audio Support","artplayer-plugin-bangumi-m4sAudioSupport-enable",true,void 0,"视频类型为dash时，该插件可支持播放音频"),A("选集","artplayer-plugin-bangumi-epChoose-enable",true,void 0,"当视频播放完毕后会自动连播"),A("CC字幕","artplayer-plugin-bangumi-cc-subtitle-enable",true,void 0,"字幕支持插件，如果存在繁体字幕，则自动生成简体字幕"),A("顶部工具栏","artplayer-plugin-bangumi-toptoolbar-enable",true,void 0,"显示视频标题和当前观看人数"),A("空降助手","artplayer-plugin-bangumi-airborneHelper-enable",true,void 0,"如果获取到的信息中存在空降信息，如跳过片头片尾，那么会自动跳过"),A("视频统计信息","artplayer-plugin-bangumi-statistics-enable",true,void 0,"用于显示当前视频信息的弹窗")]},{text:"解除区域限制",type:"container",views:[A("解锁番剧限制","bili-bangumi-unlockAreaLimit",false,void 0,"使用户可以观看区域外版权番剧"),A("生成简中字幕","bili-bangumi-generateSimpleChineseSubtitle",true,void 0,"根据繁体字幕自动生成简体中文字幕")]},{text:"加速CDN设置（dash）",type:"container",views:[Ae("视频-UPOS服务器设置","bili-bangumi-uposServerSelect",se[0].host,se.map(e=>({text:e.name,value:e.host})),void 0,"设置视频流的服务器，可加快视频加载速度"),Z("视频-自定义UPOS服务器","bili-bangumi-uposServerSelect-own","","自定义的服务器优先级大于上面选择的服务器",void 0,"请输入upos服务器的域名"),Ae("音频-UPOS服务器设置","bili-bangumi-uposServerSelect-audio",se[0].host,se.map(e=>({text:e.name,value:e.host})),void 0,"设置音频的服务器，可加快音频加载速度"),Z("音频-自定义UPOS服务器","bili-bangumi-uposServerSelect-audio-own","","自定义的服务器优先级大于上面选择的服务器",void 0,"请输入upos服务器的域名")]},{text:"<a href='https://github.com/yujincheng08/BiliRoaming/wiki/%E5%85%AC%E5%85%B1%E8%A7%A3%E6%9E%90%E6%9C%8D%E5%8A%A1%E5%99%A8' target='_blank'>解析服务器</a>",type:"container",views:[Z("中国大陆","bili-bangumi-proxyApiServer-default","","用于请求播放地址的代理",void 0,"bilibili优化.example.com"),Z("香港","bili-bangumi-proxyApiServer-hk","","用于请求播放地址的代理",void 0,"bilibili优化.example.com"),Z("台湾","bili-bangumi-proxyApiServer-tw","","用于请求播放地址的代理",void 0,"bilibili优化.example.com"),Z("泰国/东南亚","bili-bangumi-proxyApiServer-tha-or-sea","","用于请求播放地址的代理",void 0,"bilibili优化.example.com")]}]},{text:"覆盖点击事件",type:"deepMenu",views:[{text:"",type:"container",views:[A("【选集】","bili-bangumi-cover-clicl-event-chooseEp",true,void 0,"让【选集】的视频列表可点击跳转"),A("【其它】","bili-bangumi-cover-clicl-event-other",true,void 0,"让【PV&其他】、【预告】、【主题曲】、【香境剧场】等的视频列表可点击跳转"),A("【更多推荐】","bili-bangumi-cover-clicl-event-recommend",true,void 0,"让【更多推荐】的视频列表可点击跳转")]}]},{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[A("阻止调用App","bili-bangumi-hook-callApp",true,void 0,"")]}]}]}]},Ni={id:"panel-search",title:"搜索",isDefault(){return H.isSearch()},views:[{type:"container",text:"",views:[{type:"deepMenu",text:"功能",views:[{type:"container",text:"",views:[A("搜索框自动获取焦点","bili-search-inputAutoFocus",true,void 0,""),A("美化搜索结果","bili-search-beautifySearchResult",true,void 0,"重构搜索结果的样式"),A("开启其它地区番剧搜索","bili-search-enableOtherAreaSearchBangumi",false,void 0,"在搜索页面添加其它地区番剧搜索结果，需要解析服务器支持")]},{text:"<a href='https://github.com/yujincheng08/BiliRoaming/wiki/%E5%85%AC%E5%85%B1%E8%A7%A3%E6%9E%90%E6%9C%8D%E5%8A%A1%E5%99%A8' target='_blank'>搜索服务器</a>",type:"container",views:[Z("香港","bili-search-proxyApiServer-hk","","用于搜索番剧结果的代理",void 0,"bilibili优化.example.com"),Z("台湾","bili-search-proxyApiServer-tw","","用于搜索番剧结果的代理",void 0,"bilibili优化.example.com"),Z("泰国/东南亚","bili-search-proxyApiServer-tha-or-sea","","用于搜索番剧结果的代理",void 0,"bilibili优化.example.com")]}]},{type:"deepMenu",text:"覆盖点击事件",views:[{type:"container",text:"",views:[A("取消","bili-search-cover-cancel",false,void 0,"点击取消按钮回退至上一页"),A("搜索结果","bili-search-cover-card-result-click-event",true,void 0,"修复点击搜索结果不跳转视频的问题")]}]},{text:"变量设置",type:"deepMenu",views:[{text:"",type:"container",views:[A("noCallApp","bili-search-vue-prop-noCallApp",true,void 0,"noCallApp = true"),A("openAppDialog","bili-search-vue-prop-openAppDialog",true,void 0,"openAppDialog = false")]}]}]}]},zi={id:"panel-space",title:"个人空间",isDefault(){return H.isSpace()},views:[{text:"",type:"container",views:[{text:"功能",type:"deepMenu",views:[{text:"",type:"container",views:[A("修复正确跳转","bili-space-repairRealJump",true,void 0,"修复视频|动态的正确跳转，避免跳转404")]}]},{text:"覆盖点击事件",type:"deepMenu",views:[{text:"",type:"container",views:[A("动态视频","bili-space-coverDynamicStateCardVideo",true,void 0,"点击发布动态的视频可正常跳转至该视频")]}]}]}]},Oi={id:"panel-live",title:"直播",isDefault(){return H.isLive()},views:[{text:"",type:"container",views:[{type:"deepMenu",text:"功能",views:[{text:"加速CDN设置",type:"container",views:[A("启用","bili-live-cdn-hook",false,void 0,"开启后，劫持网络请求并替换返回的视频流CDN"),Ae("直播视频流-UPOS服务器设置","bili-live-uposServerSelect",se[0].host,se.map(e=>({text:e.name,value:e.host})),void 0,"设置视频流的服务器，可加快视频加载速度"),Z("直播视频流-自定义UPOS服务器","bili-live-uposServerSelect-own","","自定义的服务器优先级大于上面选择的服务器",void 0,"请输入upos服务器的域名")]}]},{text:"屏蔽",type:"deepMenu",views:[{text:"",type:"container",views:[A("【屏蔽】聊天室","bili-live-block-chatRoom",false,void 0,"直接不显示底部的聊天室"),A("【屏蔽】xxx进入直播间","bili-live-block-brush-prompt",false,void 0,"直接不显示底部的xxx进入直播间"),A("【屏蔽】控制面板","bili-live-block-control-panel",false,void 0,"屏蔽底部的发个弹幕、送礼")]}]},{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[A("阻止open-app-btn元素点击事件触发","bili-live-prevent-openAppBtn",true,void 0,"开启后可不跳转至唤醒App页面")]}]}]}]},Pi={id:"panel-topic-detail",title:"话题",isDefault(){return H.isTopicDetail()},views:[]},rt=f.formatTime(void 0,"yyyy-MM-dd_HH:mm:ss")+"BilibiliPerfScriptRunning";Reflect.has(P,rt)?s.error(`${Ln}运行异常，请勿重复运行脚本：${rt}`):(Reflect.set(P,rt,true),Ye.addContentConfig([Ti,Ii,Li,Vi,Mi,Ri,Pi,Ni,zi,Oi]),Ot.addMenuOption([{key:"go_to_login",text:"🛠 前往登录",autoReload:false,isStoreValue:false,showText(e){return e},callback(){N.goToLogin();}},{key:"go_to_login_to_parse_access_key",text:"🛠 扫码并解析access_key",autoReload:false,isStoreValue:false,showText(e){return e},callback(){De.init();}}]),g.init(),fn.init(),U.config.cssText.index+=`
  /* bilibili颜色 #FB7299 */
  .pops{
      --bili-color: #FB7299;
      --bili-color-rgb: 251, 114, 153;
  }
  `,U.config.cssText.panelCSS+=`

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
  `);

})(DOMUtils, pops, Utils, Qmsg, MD5, Viewer, Artplayer, artplayerPluginDanmuku, MD5);