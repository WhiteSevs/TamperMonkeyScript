// ==UserScript==
// @name         【移动端】bilibili优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.5.11
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
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.12.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@2.0.8/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.8/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.2/dist/index.umd.min.js
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

(function(e,t,n,r,i,a,o,s,c){'use strict';var l=Object.create,u=Object.defineProperty,d=Object.getOwnPropertyDescriptor,f=Object.getOwnPropertyNames,p=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty,h=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=f(t),a=0,o=i.length,s;a<o;a++)s=i[a],!m.call(e,s)&&s!==n&&u(e,s,{get:(e=>t[e]).bind(null,s),enumerable:!(r=d(t,s))||r.enumerable});return e},g=(e,t,n)=>(n=e==null?{}:l(p(e)),h(t||!e||!e.__esModule?u(n,`default`,{value:e,enumerable:!0}):n,e));e=g(e),t=g(t),n=g(n),r=g(r),i=g(i),a=g(a),o=g(o),s=g(s),c=g(c);var _=new Set,ee=async e=>{_.has(e)||(_.add(e),(e=>{function t(e){if(typeof GM_addStyle==`function`)return GM_addStyle(e);let t=document.createElement(`style`);return t.setAttribute(`type`,`text/css`),t.setAttribute(`data-type`,`gm-css`),globalThis.trustedTypes?t.innerHTML=globalThis.trustedTypes.createPolicy(`safe-innerHTML`,{createHTML:e=>e}).createHTML(e):t.innerHTML=e,(document.head||document.documentElement).appendChild(t),t}t(e)})(e))};ee(`.m-video2-awaken-btn,.openapp-dialog,.m-head .launch-app-btn.m-nav-openapp,.m-head .launch-app-btn.home-float-openapp,.m-head m-open-app,.m-home .launch-app-btn.home-float-openapp,.m-space .launch-app-btn.m-space-float-openapp,.m-space .launch-app-btn.m-nav-openapp{display:none!important}.m-space m-open-app:has(>.m-fixed-openapp){display:none!important}#app .video .launch-app-btn.m-nav-openapp,#app .video .mplayer-widescreen-callapp,#app .video .launch-app-btn.m-float-openapp,#app .video .m-video-season-panel .launch-app-btn .open-app{display:none!important}#app .video .launch-app-btn.m-video-main-launchapp:has([class^=m-video2-awaken]){display:none!important}#app.LIVE .open-app-btn.bili-btn-warp,#app .m-dynamic .launch-app-btn.m-nav-openapp,#app .m-dynamic .dynamic-float-openapp.dynamic-float-btn{display:none!important}#app .m-dynamic m-open-app:has(>.m-fixed-openapp){display:none!important}#app .m-opus .float-openapp.opus-float-btn,#app .m-opus .float-openapp.opus-float-btn,#app .m-opus .v-switcher .launch-app-btn.list-more,#app .m-opus .opus-nav .launch-app-btn.m-nav-openapp,#app .m-opus .m-navbar .m-nav-openapp,#app .m-opus m-open-app.m-open-app.fixed-openapp,#app .m-opus_wp .m-open-app.opus-float-btn,#app .topic-detail .launch-app-btn.m-nav-openapp,#app .topic-detail .launch-app-btn.m-topic-float-openapp,#app.main-container bili-open-app.btn-download,#__next m-open-app[class^=TopBar_download]{display:none!important}#__next m-open-app:has([class^=GoApp]){display:none!important}#__next m-open-app[class^=MainButton_btnWrap]{visibility:hidden!important}#app .read-app-main bili-open-app,#app .playlist>.open-app-wp{display:none!important}#app .playlist>.open-app-wp+div{padding-top:56.25%}`),ee(`html{--bili-color:#fb7299;--bili-color-rgb:251, 114, 153}`);var te=`@charset "UTF-8";
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
`,v={isVideo(){return window.location.pathname.startsWith(`/video/`)},isBangumi(){return window.location.pathname.startsWith(`/bangumi/`)},isSearch(){return window.location.pathname.startsWith(`/search`)},isSearchResult(){let e=new URLSearchParams(window.location.search);return this.isSearch()&&e.has(`keyword`)},isLive(){return window.location.hostname===`live.bilibili.com`},isOpus(){return window.location.pathname.startsWith(`/opus`)},isTopicDetail(){return window.location.pathname.startsWith(`/topic-detail`)},isDynamic(){return window.location.pathname.startsWith(`/dynamic`)},isHead(){return window.location.pathname===`/`||window.location.pathname.startsWith(`/channel`)},isSpace(){return window.location.pathname.startsWith(`/space`)},isPlayList(){return window.location.pathname.startsWith(`/playlist`)}},ne={isPC(){return window.location.hostname===`www.bilibili.com`},isReadMobile(){return this.isPC()&&window.location.pathname.startsWith(`/read/mobile`)}},y={className:{bangumi:`#app.main-container`,bangumi_new:`body > #__next`,dynamic:`#app .m-dynamic`,opus:`#app .m-opus`,search:`#app .m-search`,"topic-detail":`#app .topic-detail`,video:`#app .video`,mVideo:`#app .m-video`,head:`#app .m-head`,playlist:`#app .playlist`,space:`#app .m-space`},theme:`#FB7299`},re={className:{read:{mobile:`#app .read-app-main`}}},ie=typeof GM_addValueChangeListener<`u`?GM_addValueChangeListener:void 0,ae=typeof GM_deleteValue<`u`?GM_deleteValue:void 0,oe=typeof GM_getResourceText<`u`?GM_getResourceText:void 0,se=typeof GM_getValue<`u`?GM_getValue:void 0,ce=typeof GM_info<`u`?GM_info:void 0,le=typeof GM_listValues<`u`?GM_listValues:void 0,ue=typeof GM_registerMenuCommand<`u`?GM_registerMenuCommand:void 0,de=typeof GM_removeValueChangeListener<`u`?GM_removeValueChangeListener:void 0,fe=typeof GM_setValue<`u`?GM_setValue:void 0,pe=typeof GM_setValues<`u`?GM_setValues:void 0,me=typeof GM_unregisterMenuCommand<`u`?GM_unregisterMenuCommand:void 0,he=typeof GM_xmlhttpRequest<`u`?GM_xmlhttpRequest:void 0,b=typeof unsafeWindow<`u`?unsafeWindow:void 0,ge=window,_e={ElementPlus:{keyName:`ElementPlusResourceCSS`,url:`https://fastly.jsdelivr.net/npm/element-plus@latest/dist/index.min.css`},Viewer:{keyName:`ViewerCSS`,url:`https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css`},Hljs:{keyName:`HljsCSS`,url:`https://fastly.jsdelivr.net/npm/highlight.js@latest/styles/github-dark.min.css`}},x={waitRemove(...t){t.forEach(t=>{typeof t==`string`&&e.default.waitNodeList(t).then(e=>{e.forEach(e=>e.remove())})})},createBlockCSSNode(...t){let n=[];if(t.length!==0&&!(t.length===1&&typeof t[0]==`string`&&t[0].trim()===``))return t.forEach(e=>{Array.isArray(e)?n=n.concat(e):n.push(e)}),e.default.createElement(`style`,{type:`text/css`,innerHTML:`${n.join(`,
`)}{display: none !important;}`})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]==`string`&&e[0].trim()===``)&&(e.forEach(e=>{Array.isArray(e)?t=t.concat(e):t.push(e)}),t=t.map(e=>e.trim()).filter(e=>e!==``),t.length))return N(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){let t=typeof oe==`function`?oe(e.keyName):null;return typeof t==`string`&&t?N(t):x.loadStyleLink(e.url)},async loadStyleLink(t){let n=document.createElement(`link`);return n.rel=`stylesheet`,n.type=`text/css`,n.href=t,new Promise(t=>{e.default.onReady(()=>{document.head.appendChild(n),t(n)})})},async loadScript(e){let t=document.createElement(`script`);return t.src=e,new Promise(e=>{t.onload=()=>{e(null)},(document.head||document.documentElement).appendChild(t)})},fixUrl(e){return e=e.trim(),e.startsWith(`data:`)||e.match(/^http(s|):\/\//i)?e:e.startsWith(`//`)?(e.startsWith(`///`)||(e=window.location.protocol+e),e):(e.startsWith(`/`)||(e+=`/`),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith(`https://`)||!e.startsWith(`http://`))return e;try{let t=new URL(e);return t.protocol=`https:`,t.toString()}catch{return e}},lockScroll(...e){let t=document.createElement(`style`);t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...e||[]);return n.forEach(e=>{e.classList.add(`pops-overflow-hidden-important`)}),(document.head||document.documentElement).appendChild(t),{recovery(){n.forEach(e=>{e.classList.remove(`pops-overflow-hidden-important`)}),t.remove()}}},async getClipboardText(){function e(e){navigator.clipboard.readText().then(t=>{e(t)}).catch(t=>{j.error(`读取剪贴板内容失败👉`,t),e(``)})}function t(t){navigator.permissions.query({name:`clipboard-read`}).then(()=>{e(t)}).catch(n=>{j.error(`申请剪贴板权限失败，尝试直接读取👉`,n.message??n.name??n.stack),e(t)})}function n(){return!(typeof navigator?.clipboard?.readText!=`function`||typeof navigator?.permissions?.query!=`function`)}return new Promise(e=>{if(!n()){e(``);return}document.hasFocus()?t(e):window.addEventListener(`focus`,()=>{t(e)},{once:!0})})},escapeHtml(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`).replace(/©/g,`&copy;`).replace(/®/g,`&reg;`).replace(/™/g,`&trade;`).replace(/→/g,`&rarr;`).replace(/←/g,`&larr;`).replace(/↑/g,`&uarr;`).replace(/↓/g,`&darr;`).replace(/—/g,`&mdash;`).replace(/–/g,`&ndash;`).replace(/…/g,`&hellip;`).replace(/ /g,`&nbsp;`).replace(/\r\n/g,`<br>`).replace(/\r/g,`<br>`).replace(/\n/g,`<br>`).replace(/\t/g,`&nbsp;&nbsp;&nbsp;&nbsp;`)},interval(e,t,n=5e3){let r,i=n-t,a=t,o=async n=>{let s=await e(n);if(typeof s==`boolean`&&s||n){O.workerClearTimeout(r);return}if(a+=t,a>i){o(!0);return}r=O.workerSetTimeout(()=>{o(!1)},t)};o(!1)},findParentNode(t,n,r){if(r){let i=e.default.closest(t,r);if(i)return i.querySelector(n)}else return e.default.matches(t,n)?t:e.default.closest(t,n)},toStr(e,t=2){let n=`__undefined__placeholder__replaced__str__`+performance.now();return JSON.stringify(e,(e,t)=>t===void 0?n:t,t).replace(RegExp(`"${n}"`,`g`),`undefined`)},isVerticalScreen(){return!globalThis.screen.orientation.type.includes(`landscape`)},isMobileDevice(e=768){return this.isVerticalScreen()?globalThis.innerWidth<e:globalThis.innerHeight<e},isTopWindow(){let e=typeof b==`object`&&b?b:window;return e.top===e.self},formatVideoDuration(e){if(typeof e!=`number`&&(e=parseInt(e)),isNaN(e))return e.toString();let t=function(e){return e<10?`0${e}`:e};if(e<60)return`0:${t(e)}`;if(e>=60&&e<3600)return`${Math.floor(e/60)}:${t(e%60)}`;{let n=Math.floor(e/3600),r=Math.floor(e/60)%60,i=e%60;return`${n}:${t(r)}:${t(i)}`}},formatTimeStamp(e,t){if(typeof e==`number`&&e<0xe8d4a51000){let t=String(Date.now()).length-String(e).length;e*=10**t}let n=e,r=new Date(typeof e==`string`?e.replace(/-/g,`/`):e),i=new Date(t??Date.now()).getTime()-r.getTime(),a=Math.floor(i/(24*3600*1e3));if(a>0)n=a>7?O.formatTime(r.getTime()):a+`天前`;else{let e=i%(24*3600*1e3),t=Math.floor(e/(3600*1e3));if(t>0)n=t+`小时前`;else{let t=e%(3600*1e3),r=Math.floor(t/(60*1e3));if(r>0)n=r+`分钟前`;else{let e=t%(60*1e3);n=Math.round(e/1e3)+`秒前`}}}return n}},ve=`GM_Panel`,ye=`data-init`,S=`data-key`,C=`data-default-value`,be=`data-init-more-value`,xe=`data-plugin-search-config`,w=`data-storage-api`,T={followBrowserSize:!1,get width(){return T.followBrowserSize?globalThis.outerWidth:globalThis.innerWidth},get height(){return T.followBrowserSize?globalThis.outerHeight:globalThis.innerHeight}},E={setting:{get width(){return T.width<550?`88vw`:T.width<700?`550px`:`700px`},get height(){return T.height<450?`70vh`:T.height<550?`450px`:`550px`}},settingMiddle:{get width(){return T.width<350?`88vw`:`350px`},get height(){return T.height<450?`88vh`:`450px`}},settingBig:{get width(){return T.width<800?`92vw`:`800px`},get height(){return T.height<600?`80vh`:`600px`}},info:{get width(){return T.width<350?`88vw`:`350px`},get height(){return T.height<250?`88vh`:`250px`}}},Se={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig??=new O.Dictionary,this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e)},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]},getDefaultBottomContentConfig(e){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let t=!1,n,i=(t,n)=>{if(e&&typeof e.translateCallback==`function`)return e.translateCallback(t,n);if(typeof n==`object`&&n)for(let e in n)t=t.replaceAll(`{{${e}}}`,n[e]);return t},a=(e,t)=>{typeof t!=`string`&&(t=x.toStr(t));let n=new Blob([t]),r=globalThis.URL.createObjectURL(n);k.createElement(`a`,{href:r,download:e}).click(),O.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(r)},500)},o=()=>{let e=e=>{let t=A.alert({title:{text:i(`请选择导入方式`),position:`center`},content:{text:`
            <div class="btn-control" data-mode="local">${i(`本地导入`)}</div>
            <div class="btn-control" data-mode="network">${i(`网络导入`)}</div>
            <div class="btn-control" data-mode="clipboard">${i(`剪贴板导入`)}</div>`,html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(e){e.close()}}},drag:!0,mask:{enable:!0},width:E.info.width,height:E.info.height,style:`
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
          }`}),n=t.$shadowRoot.querySelector(`.btn-control[data-mode='local']`),a=t.$shadowRoot.querySelector(`.btn-control[data-mode='network']`),o=t.$shadowRoot.querySelector(`.btn-control[data-mode='clipboard']`),s=async t=>{confirm(i(`是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）`))&&(typeof le==`function`?typeof ae==`function`?(le().forEach(e=>{ae(e)}),r.default.success(i(`已清空脚本存储的配置`))):r.default.error(i(`不支持GM_deleteValue函数，无法执行删除脚本配置`)):r.default.error(i(`不支持GM_listValues函数，无法清空脚本存储的配置`))),typeof pe==`function`?pe(t):Object.keys(t).forEach(e=>{let n=t[e];fe(e,n)}),r.default.success(i(`配置导入完毕`)),e?.()},c=e=>new Promise(async t=>{let n=O.toJSON(e);Object.keys(n).length===0?r.default.warning(i(`解析为空配置，不导入`)):await s(n),t(!0)});k.on(n,`click`,e=>{k.preventEvent(e),t.close();let n=k.createElement(`input`,{type:`file`,accept:`.json`});k.on(n,[`propertychange`,`input`],()=>{if(!n.files?.length)return;let e=n.files[0],t=new FileReader;t.onload=()=>{c(t.result)},t.readAsText(e,`UTF-8`)}),n.click()}),k.on(a,`click`,e=>{k.preventEvent(e),t.close();let n=A.prompt({title:{text:i(`网络导入`),position:`center`},content:{text:``,placeholder:i(`请填写URL`),focus:!0},btn:{close:{enable:!0,callback(e){e.close()}},ok:{text:i(`导入`),callback:async e=>{let t=e.text;if(O.isNull(t)){r.default.error(i(`请填入完整的url`));return}let n=r.default.loading(i(`正在获取配置...`)),a=await M.get(t,{allowInterceptConfig:!1});if(n.close(),!a.status){j.error(a),r.default.error(i(`获取配置失败`),{consoleLogContent:!0});return}await c(a.data.responseText)&&e.close()}},cancel:{enable:!1}},drag:!0,mask:{enable:!0},width:E.info.width,height:`auto`}),a=n.$shadowRoot.querySelector(`input`),o=n.$shadowRoot.querySelector(`.pops-prompt-btn-ok`);k.on(a,[`input`,`propertychange`],()=>{k.val(a)===``?k.attr(o,`disabled`,`true`):k.removeAttr(o,`disabled`)}),k.onKeyboard(a,`keydown`,(e,t,n)=>{e===`Enter`&&n.length===0&&k.val(a)!==``&&k.emit(o,`click`)}),k.emit(a,`input`)}),k.on(o,`click`,async e=>{k.preventEvent(e),t.close();let n=await x.getClipboardText();if(n.trim()===``){r.default.warning(i(`获取到的剪贴板内容为空`));return}await c(n)})},t=(e=`${De}_panel-setting-${O.formatTime(Date.now(),`yyyy_MM_dd_HH_mm_ss`)}.json`,t)=>{let n=A.alert({title:{text:i(`请选择导出方式`),position:`center`},content:{text:`
            <div class="btn-control" data-mode="export-to-file">${i(`导出至文件`)}</div>
            <div class="btn-control" data-mode="export-to-clipboard">${i(`导出至剪贴板`)}</div>
            `,html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(e){e.close()}}},drag:!0,mask:{enable:!0},width:E.info.width,height:E.info.height,style:`
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
          }`}),o=n.$shadowRoot.querySelector(`.btn-control[data-mode='export-to-file']`),s=n.$shadowRoot.querySelector(`.btn-control[data-mode='export-to-clipboard']`);k.on(o,`click`,i=>{k.preventEvent(i);try{a(e,t),n.close()}catch(e){r.default.error(e.toString(),{consoleLogContent:!0})}}),k.on(s,`click`,async()=>{await O.copy(t)?(r.default.success(i(`复制成功`)),n.close()):r.default.error(i(`复制失败`))})},n=A.confirm({title:{text:i(`配置`),position:`center`},content:{text:`<textarea name="config-value" id="config" readonly></textarea>`,html:!0},btn:{ok:{enable:!0,type:`primary`,text:i(`导入`),callback(){e()}},cancel:{enable:!0,text:i(`导出`),callback(){t(void 0,s)}}},width:T.width<450?`90vw`:`450px`,height:`auto`,style:`
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
        `}).$shadowRoot.querySelector(`textarea`),o={};if(typeof le==`function`)le().forEach(e=>{let t=se(e);Reflect.set(o,e,t)});else{r.default.warning(i(`不支持函数GM_listValues，仅导出菜单配置`));let e=se(ve);Reflect.set(o,ve,e)}let s=x.toStr(o);n.value=s},s=()=>{let e=ce?.script?.supportURL||ce?.script?.namespace;typeof e==`string`&&O.isNotNull(e)&&window.open(e,`_blank`)};return[{id:`script-version`,title:i(`版本：{{version}}`,{version:ce?.script?.version||i(`未知`)}),isBottom:!0,views:[],clickFirstCallback(){return!1},afterRender(e){new Oe(e.$asideLiElement).on(`tap`,function(){clearTimeout(n),n=void 0,t?(t=!1,o()):(n=setTimeout(()=>{t=!1,s()},200),t=!0)})}}]},setDefaultBottomContentConfig(e){this.$data.__defaultBottomContentConfig=e}},Ce={$data:{__menuOption:[{key:`show_pops_panel_setting`,text:`⚙ 设置`,autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{D.showPanel(Se.getConfig(0))}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu()},initExtensionsMenu(){x.isTopWindow()&&Ae.add(this.$data.menuOption)},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e)},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(e=>{let t=this.$data.menuOption.findIndex(t=>t.key===e.key);t!==-1&&(this.$data.menuOption[t]=e)})},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1)}},we=class{data={storeNodeList:[],destoryFnList:[]};option={};constructor(e){this.option=e}handlerResult(e,t){let n=[],r=[],i=[];if(Array.isArray(t))i=i.concat(t);else{let e=t=>{if(typeof t==`object`&&t)if(t instanceof Element)i.push(t);else if(Array.isArray(t))e(t);else{let{$css:e,destory:n}=t;e!=null&&(Array.isArray(e)?i=i.concat(e):e instanceof Element&&i.push(e)),typeof n==`function`&&i.push(n)}else i.push(t)};e(t)}let a=e=>{if(e!=null){if(e instanceof Element){n.push(e);return}if(typeof e==`function`){r.push(e);return}}};for(let e of i){let t=a(e);if(typeof t==`boolean`&&!t)break;if(Array.isArray(e))for(let t of e){let e=a(t);if(typeof e==`boolean`&&!e)break}}this.clearStoreNodeList(),this.execDestoryFnAndClear(),e&&(this.data.storeNodeList=this.data.storeNodeList.concat(n),this.data.destoryFnList=this.data.destoryFnList.concat(r))}getEnableStatus(e){return!!this.option.getValue(e)}clearStoreNodeList=()=>{for(let e=this.data.storeNodeList.length-1;e>=0;e--)this.data.storeNodeList[e]?.remove(),this.data.storeNodeList.splice(e,1)};execDestoryFnAndClear=()=>{for(let e=this.data.destoryFnList.length-1;e>=0;e--){let t=this.data.destoryFnList[e];t(),this.data.destoryFnList.splice(e,1)}};checkMenuExec(){let e=!1;return e=typeof this.option.checkExec==`function`?this.option.checkExec(this.option.keyList):this.option.keyList.every(e=>this.getEnableStatus(e)),e}},Te=new class{storageKey;listenerData;cacheData;callbacks=[];constructor(e){if(typeof e==`string`){let t=e.trim();if(t==``)throw Error(`key can not be empty string`);this.storageKey=t}else throw TypeError(`key must be a string`);this.listenerData=new n.default.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.setLocalValue=this.setLocalValue.bind(this),this.destory=this.destory.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this)}[Symbol.dispose](){this.destory()}async[Symbol.asyncDispose](){this.destory()}destory(){this.cacheData=null;for(let e=this.callbacks.length-1;e>=0;e--){let t=this.callbacks[e];t(),this.callbacks.splice(e,1)}}getLocalValue(){if(this.cacheData==null){let e=se(this.storageKey);e??(e={},this.setLocalValue(e)),this.destory(),this.cacheData=e;let t=ie(this.storageKey,(e,t,n)=>{this.cacheData=null,this.cacheData=n});return this.callbacks.push(()=>{de(t)}),e}else return this.cacheData}setLocalValue(e){this.cacheData=null,this.cacheData=e,fe(this.storageKey,e)}set(e,t){let n=this.get(e),r=this.getLocalValue();Reflect.set(r,e,t),this.setLocalValue(r),this.emitValueChangeListener(e,t,n)}get(e,t){let n=this.getLocalValue();return Reflect.get(n,e)??t}getAll(){return this.getLocalValue()}delete(e){let t=this.get(e),n=this.getLocalValue();Reflect.deleteProperty(n,e),this.setLocalValue(n),this.emitValueChangeListener(e,void 0,t)}has(e){let t=this.getLocalValue();return Reflect.has(t,e)}keys(){let e=this.getLocalValue();return Reflect.ownKeys(e)}values(){let e=this.getLocalValue();return Reflect.ownKeys(e).map(t=>Reflect.get(e,t))}clear(){this.destory(),ae(this.storageKey)}addValueChangeListener(e,t){let n=Math.random(),r=this.listenerData.get(e)||[];return r.push({id:n,key:e,callback:t}),this.listenerData.set(e,r),n}removeValueChangeListener(e){let t=!1;for(let[n,r]of this.listenerData.entries()){for(let n=0;n<r.length;n++){let i=r[n];(typeof e==`string`&&i.key===e||typeof e==`number`&&i.id===e)&&(r.splice(n,1),n--,t=!0)}this.listenerData.set(n,r)}return t}async emitValueChangeListener(...e){let[t,n,r]=e;if(!this.listenerData.has(t))return;let i=this.listenerData.get(t);for(let a=0;a<i.length;a++){let o=i[a];if(typeof o.callback==`function`){let i,a;e.length===1||(e.length===2?i=n:e.length===3&&(i=n,a=r)),await o.callback(t,i,a)}}}}(ve),D={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue??=new O.Dictionary,this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData??=new O.Dictionary,this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce??=new O.Dictionary,this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData??=new O.Dictionary,this.__onceExecData},get scriptName(){return De},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e},key:ve,attributeKeyName:S,attributeDefaultValueName:C},init(){this.initContentDefaultValue(),Ce.init()},initContentDefaultValue(){let e=e=>{if(!e.attributes||e.type===`button`||e.type===`container`||e.type===`deepMenu`)return;let t=e.attributes,n=t[ye];if(typeof n==`function`){let e=n();if(typeof e==`boolean`&&!e)return}let r=new Map,i=t[S];if(i!=null){let e=t[C];r.set(i,e)}let a=t[be];if(typeof a==`object`&&a&&Object.keys(a).forEach(e=>{let t=a[e];r.set(e,t)}),!r.size){j.warn(`请先配置键`,e);return}if(e.type===`switch`){let t=typeof e.disabled==`function`?e.disabled():e.disabled;typeof t==`boolean`&&t&&this.$data.contentConfigInitDisabledKeys.push(...r.keys())}for(let[e,t]of r.entries())this.setDefaultValue(e,t)},t=n=>{for(let r=0;r<n.length;r++){let i=n[r];e(i);let a=i.views;a&&Array.isArray(a)&&t(a)}},n=[...Se.getAllContentConfig()];for(let e=0;e<n.length;e++){let r=n[e];if(!r.views)continue;let i=r.views;i&&Array.isArray(i)&&t(i)}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)]},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&j.warn(`该key已存在，初始化默认值失败: `,{key:e,initValue:this.$data.contentConfigInitDefaultValue.get(e)}),this.$data.contentConfigInitDefaultValue.set(e,t)},getDefaultValue(e){return this.$data.contentConfigInitDefaultValue.get(e)},setValue(e,t){Te.set(e,t)},getValue(e,t){return Te.get(e)??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){Te.delete(e)},hasKey(e){return Te.has(e)},addValueChangeListener(e,t,n){let r=Te.addValueChangeListener(e,t);if(n?.immediate||n?.immediateAll){let r=this.getValue(e);n?.immediate?t(e,r,r):n?.immediateAll&&D.emitMenuValueChange(e,r,r)}return r},removeValueChangeListener(e){Te.removeValueChangeListener(e)},emitMenuValueChange(e,t,n){Te.emitValueChangeListener(e,t,n)},async exec(e,t,n,r=!0){let i;i=typeof e==`string`||Array.isArray(e)?()=>e:e;let a=!1,o=i(),s=[];Array.isArray(o)?(a=!0,s=o):s.push(o);let c=s.find(e=>!this.$data.contentConfigInitDefaultValue.has(e));if(c){j.warn(`${c} 键不存在`);return}let l=JSON.stringify(s);if(r&&this.$data.onceExecMenuData.has(l))return this.$data.onceExecMenuData.get(l);let u=[],d=new we({keyList:s,getValue:e=>!!this.getValue(e),checkExec(e){let t=!1;return t=typeof n==`function`?n(e):e.every(e=>this.getValue(e)),t}}),f=async e=>{let n=d.checkMenuExec(),r=[];if(n){let i=s.map(e=>this.getValue(e));r=await t({key:s,triggerKey:e?.key,value:a?i:i[0],addStoreValue:(...e)=>d.handlerResult(n,e)})}d.handlerResult(n,r)};r&&s.forEach(e=>{let t=this.addValueChangeListener(e,(e,t,n)=>f({key:e,newValue:t,oldValue:n}));u.push(t)}),await f();let p={checkMenuExec:d.checkMenuExec.bind(d),keyList:s,reload(){this.clearStoreNodeList(),this.execDestoryFnAndClear(),f()},clear(){d.clearStoreNodeList(),this.execDestoryFnAndClear(),this.removeValueChangeListener(),this.clearOnceExecMenuData()},clearStoreNodeList:d.clearStoreNodeList.bind(d),execDestoryFnAndClear:d.execDestoryFnAndClear.bind(d),removeValueChangeListener:()=>{u.forEach(e=>{this.removeValueChangeListener(e)})},clearOnceExecMenuData(){r&&D.$data.onceExecMenuData.delete(l)}};return this.$data.onceExecMenuData.set(l,p),p},async execMenu(e,t,n=!1,r=!1){return await this.exec(e,async(...e)=>await t(...e),e=>e.every(e=>{let t=!!this.getValue(e);return D.$data.contentConfigInitDisabledKeys.includes(e)&&(t=!1,j.warn(`.execMenu${r?`Once`:``} ${e} 被禁用`)),n&&(t=!t),t}),r)},async execMenuOnce(e,t,n=!1,r=!1){let i=await this.execMenu(e,t,n,!0);return r&&i&&(this.removeUrlChangeWithExecMenuOnceListener(e),this.addUrlChangeWithExecMenuOnceListener(e,()=>{i.reload()})),i},async execMoreMenu(e,t,n=!1,r=!1,i=!1){let a=await Promise.all(e.map(async([e,t])=>await this.execMenu(e,(...e)=>t(...e),n,r))),o=new we({keyList:e.map(([e])=>e),getValue:e=>!!this.getValue(e)}),s=[],c=(e=!1)=>{if(o.clearStoreNodeList(),o.execDestoryFnAndClear(),e){for(let e of s)this.removeValueChangeListener(e);for(let e of a)e&&this.removeUrlChangeWithExecMenuOnceListener(e.keyList)}},l=()=>{let e=a.every(e=>e?e.checkMenuExec():!0);if(c(!1),e){let n=t();o.handlerResult(e,n)}};l();for(let e of a)if(e){let t=this.addValueChangeListener(e.keyList[0],()=>{l()});s.push(t),i&&(this.removeUrlChangeWithExecMenuOnceListener(e.keyList),this.addUrlChangeWithExecMenuOnceListener(e.keyList,()=>{e.reload()}))}return{clear(){for(let e of a)e?.clear();this.execDestoryFnAndClear(),this.removeValueChangeListener()},execDestoryFnAndClear(){for(let e of a)e?.execDestoryFnAndClear();c(!1)},removeValueChangeListener(){for(let e of a)e?.removeValueChangeListener();c(!0)}}},async execMoreMenuOnce(e,t,n=!1,r=!1){return await this.execMoreMenu(e,t,n,!0,r)},deleteExecMenuOnce(e){return e=this.transformKey(e),this.$data.onceExecMenuData.delete(e),this.$data.urlChangeReloadMenuExecOnce.delete(e),Te.removeValueChangeListener(e)},onceExec(e,t,n=!1){if(e=this.transformKey(e),typeof e!=`string`)throw TypeError(`key 必须是字符串`);this.$data.onceExecData.has(e)||n&&(Array.isArray(e)?e:[e]).findIndex(e=>{if(!D.getValue(e))return!0})!==-1||(t(),this.$data.onceExecData.set(e,1))},deleteOnceExec(e){e=this.transformKey(e),this.$data.onceExecData.delete(e)},addUrlChangeWithExecMenuOnceListener(e,t){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.set(e,t),{off:()=>this.removeUrlChangeWithExecMenuOnceListener(e)}},removeUrlChangeWithExecMenuOnceListener(e){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.delete(e)},hasUrlChangeWithExecMenuOnceListener(e){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.has(e)},async emitUrlChangeWithExecMenuOnceEvent(e){let t=this.$data.urlChangeReloadMenuExecOnce.values();for(let n of t)await n(e)},showPanel(e,t=`${De}-设置`,n=!1,r=!1){this.$data.$panel=null,this.$data.panelContent=[];let i=e.findIndex(e=>(typeof e.isBottom==`function`?e.isBottom():!!e.isBottom)&&e.id===`script-version`)!==-1;!n&&!i&&e.push(...Se.getDefaultBottomContentConfig());let a=A.panel({title:{text:t,position:`center`,html:!1,style:``},content:e,btn:{close:{enable:!0,callback:e=>{e.close(),this.$data.$panel=null}}},mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1},clickCallBack:e=>{e(),this.$data.$panel=null}},width:E.setting.width,height:E.setting.height,drag:!0,only:!0,style:`
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,...this.$data.panelConfig});return this.$data.$panel=a,this.$data.panelContent=e,r||this.registerConfigSearch({$panel:a,content:e}),{$panel:a,content:e}},registerConfigSearch(e){let{$panel:t,content:n}=e,i=(t,n)=>{if(typeof e.translateCallback==`function`)return e.translateCallback(t,n);if(typeof n==`object`&&n)for(let e in n)t=t.replaceAll(`{{${e}}}`,n[e]);return t},a=async(e,t)=>{if(e==null)return;let n=await t(e);return n&&typeof n.isFind==`boolean`&&n.isFind?n.data:await a(n.data,t)},o=(e,t)=>{let n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(t?.(),n.disconnect())})},{root:null,threshold:1});n.observe(e),e.scrollIntoView({behavior:`smooth`,block:`center`})},s=e=>{let t=`pops-flashing`;k.onAnimationend(e,()=>{e.classList.remove(t)}),e.classList.add(t)},c=c=>{if(c.type===`dblclick`&&f)return;k.preventEvent(c);let l=A.alert({title:{text:i(`搜索配置`),position:`center`},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="${i(`请输入需要搜素的配置名称`)}">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:!0},btn:{ok:{enable:!1}},mask:{clickEvent:{toClose:!0}},width:E.settingMiddle.width,height:`auto`,drag:!0,style:`
					${A.config.cssText.panelCSS}

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
            flex-wrap: wrap;
					}
					.search-result-item-description{
						font-size: 0.8em;
						color: #6c6c6c;
					}
					${e.searchDialogStyle??``}
				`}),u=l.$shadowRoot.querySelector(`.search-config-text`),d=l.$shadowRoot.querySelector(`.search-result-wrapper`);u.focus();let p=()=>{k.empty(d)},m=e=>{let n=O.queryProperty(e,e=>e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e}),c=k.createElement(`div`,{className:`search-result-item`,innerHTML:`
							<div class="search-result-item-path">${n.matchedData?.path}</div>
							<div class="search-result-item-description">${n.matchedData?.description??``}</div>
						`}),l=A.fn.PanelHandlerComponents();return k.on(c,`click`,()=>{let n=t.$shadowRoot.querySelectorAll(`aside.pops-panel-aside .pops-panel-aside-top-container li`)[e.index];if(!n){r.default.error(i(`左侧项下标{{index}}不存在`,{index:e.index}));return}n.scrollIntoView({behavior:`smooth`,block:`center`}),n.click(),a(e.next,async e=>{if(e?.next){let n=await k.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll(`.pops-panel-deepMenu-nav-item`)).find(t=>{let n=Reflect.get(t,l.$data.nodeStoreConfigKey);return typeof n==`object`&&!!n&&n.text===e.name}),2500);if(n)n.click();else return r.default.error(i(`未找到对应的二级菜单`)),{isFind:!0,data:e};return{isFind:!1,data:e.next}}else{let n=await k.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll(`li:not(.pops-panel-deepMenu-nav-item)`)).find(t=>Reflect.get(t,l.$data.nodeStoreConfigKey)===e.matchedData?.formConfig),2500);if(n){o(n);let e=n.closest(`.pops-panel-forms-fold[data-fold-enable]`);e&&(e.querySelector(`.pops-panel-forms-fold-container`).click(),await O.sleep(500)),o(n,()=>{s(n)})}else r.default.error(i(`未找到对应的菜单项`));return{isFind:!0,data:e}}})}),c},h=e=>{let t=new RegExp(e,`i`),r=[],i=(e,n)=>{for(let a=0;a<e.length;a++){let o=e[a],s=o.views;if(s&&Array.isArray(s)){let e=O.deepClone(n);if(o.type===`deepMenu`){let t=O.queryProperty(e,e=>e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e});t.next={name:o.text}}i(s,e)}else{let e,i;if(o.type===`own`){let t=Reflect.get(o.attributes||{},xe);t&&(typeof t==`function`&&(t=t()),typeof t.text==`string`&&(e=t.text),typeof t.desc==`string`&&(i=t.desc))}else e=o.text,i=Reflect.get(o,`description`);let a=[e,i],s=a.findIndex(e=>{if(typeof e==`string`)return e.match(t)});if(s!==-1){let t=O.deepClone(n),c=O.queryProperty(t,e=>e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e});c.next={name:e,matchedData:{path:``,formConfig:o,matchedText:a[s],description:i}};let l=[];O.queryProperty(t,e=>{let t=e?.name;return typeof t==`string`&&t.trim()!==``&&l.push(t),e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e}});let u=l.join(x.escapeHtml(` - `));c.next.matchedData.path=u,r.push(t)}}}};for(let e=0;e<n.length;e++){let t=n[e];if(!t.views||t.isBottom&&t.id===`script-version`)continue;let r=t.views;if(r&&Array.isArray(r)){let n=t.title;typeof n==`function`&&(n=n()),i(r,{index:e,name:n})}}let a=document.createDocumentFragment();for(let e of r){let t=m(e);a.appendChild(t)}p(),d.append(a)};k.on(u,`input`,O.debounce(e=>{k.preventEvent(e);let t=k.val(u).trim();if(t===``){p();return}h(t)},200))};t.$shadowRoot.querySelectorAll(`aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`).forEach(e=>{k.on(e,`dblclick`,c)});let l=new WeakMap,u=!1,d,f=!1;k.on(t.$shadowRoot,`touchend`,`aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`,(e,t)=>{f=!0,clearTimeout(d),d=void 0,u&&l.has(t)?(u=!1,l.delete(t),c(e)):(d=setTimeout(()=>{u=!1},200),u=!0,l.set(t,e))},{capture:!0}),t.$shadowRoot.appendChild(k.createElement(`style`,{type:`text/css`,textContent:`
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
    		`}))},transformKey(e){if(Array.isArray(e))if(e.length>1){let t=e.sort();return JSON.stringify(t)}else return e[0];else return e},getDynamicValue(e,t){let n=!1,r=t,i=this.addValueChangeListener(e,(e,t)=>{r=t});return{get value(){return n||(n=!0,r=D.getValue(e,t)),r},destory(){D.removeValueChangeListener(i)}}}},Ee={qmsg_config_position:{key:`qmsg-config-position`,defaultValue:`bottom`},qmsg_config_maxnums:{key:`qmsg-config-maxnums`,defaultValue:3},qmsg_config_showreverse:{key:`qmsg-config-showreverse`,defaultValue:!1},httpx_cookie_manager_enable:{key:`httpx-use-cookie-enable`,defaultValue:!1},httpx_cookie_manager_use_document_cookie:{key:`httpx-use-document-cookie`,defaultValue:!1}},O=n.default.noConflict(),k=e.default.noConflict(),A=t.default,j=new O.Log(ce,b.console||ge.console),De=ce?.script?.name||void 0,Oe=t.default.fn.Utils.AnyTouch();j.config({debug:!1,logMaxCount:250,autoClearConsole:!0,tag:!0});var ke=()=>{let e=t.default.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex??0,n=O.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex??0;return Math.max(100,e,n)};r.default.config({isHTML:!0,autoClose:!0,showClose:!1,consoleLogContent(e){let t=e.setting.type;if(t===`loading`)return!1;let n=e.setting.content;return t===`warning`?j.warn(n):t===`error`?j.error(n):j.info(n),!1},get position(){return D.getValue(Ee.qmsg_config_position.key,Ee.qmsg_config_position.defaultValue)},get maxNums(){return D.getValue(Ee.qmsg_config_maxnums.key,Ee.qmsg_config_maxnums.defaultValue)},get showReverse(){return D.getValue(Ee.qmsg_config_showreverse.key,Ee.qmsg_config_showreverse.defaultValue)},get zIndex(){return ke()}}),A.GlobalConfig.setGlobalConfig({zIndex:()=>ke(),mask:{enable:!0,clickEvent:{toClose:!1,toHide:!1}},drag:!0});var Ae=new O.GM_Menu({GM_getValue:se,GM_setValue:fe,GM_registerMenuCommand:ue,GM_unregisterMenuCommand:me}),M=new O.Httpx({xmlHttpRequest:he,logDetails:!1});M.interceptors.request.use(e=>e),M.interceptors.response.use(e=>e,e=>(j.error(`[Httpx-HttpxRequest.response] 响应错误`,{data:e}),e.type===`onabort`?r.default.warning(`请求取消`,{consoleLogContent:!0}):e.type===`onerror`?r.default.error(`请求异常`,{consoleLogContent:!0}):e.type===`ontimeout`?r.default.error(`请求超时`,{consoleLogContent:!0}):r.default.error(`其它错误`,{consoleLogContent:!0}),e));var je={Object:{defineProperty:b.Object.defineProperty,keys:b.Object.keys,values:b.Object.values},Function:{apply:b.Function.prototype.apply,call:b.Function.prototype.call},Element:{appendChild:b.Element.prototype.appendChild},setTimeout:b.setTimeout.bind(b),clearTimeout:b.clearTimeout.bind(b),setInterval:b.setInterval.bind(b),clearInterval:b.clearInterval.bind(b)},N=k.addStyle.bind(k);x.addBlockCSS.bind(x);var P=e.default.selector.bind(e.default),F=e.default.selectorAll.bind(e.default),Me=new O.CookieManagerService({baseCookieHandler:`GM_cookie`});Me.isSupportGM_cookie||(Me.isSupportCookieStore?Me.setOptions({baseCookieHandler:`cookieStore`}):Me.setOptions({baseCookieHandler:`document.cookie`})),new O.DocumentCookieHandler;var Ne=De||`【移动端】bilibili优化`,Pe=ge.QRCode||b.QRCode,I={web_host:`api.bilibili.com`},Fe={tv:{appkey:`4409e2ce8ffd12b8`,appsec:`59b43e04ad6965f34319062b478f83dd`,mobi_app:`android_tv_yst`},ios:{appkey:`27eb53fc9058f8c3`,appsec:`c2ed53a74eeefe3cf99fbd01d8c9c375`,mobi_app:`ipnone`}};function Ie(e,t,n){e.appkey=t;let r=new URLSearchParams(e);return r.sort(),(0,i.default)(r.toString()+n)}var L={isWebApiSuccess(e){let t=(typeof e?.message==`string`?e.message:``).toLowerCase();return e?.code===0&&(e?.message===`0`||t===`success`||t===`ok`)},isAreaLimit(e){let t={6002003:`抱歉您所在地区不可观看！`};return Object.keys(t).findIndex(n=>{let r=t[n];if(e.code.toString()===n.toString()||e.message.includes(r))return!0})!==-1}},Le={async getQrCodeInfo(){let e={appkey:Fe.ios.appkey,local_id:`0`,ts:`0`,mobi_app:Fe.ios.mobi_app,csrf:(await Me.get(`bili_jct`))?.value||``},t=Ie(e,Fe.ios.appkey,Fe.ios.appsec),n=await M.post(`https://passport.bilibili.com/x/passport-tv-login/qrcode/auth_code`,{data:O.toSearchParamsStr({...e,sign:t}),headers:{"Content-Type":`application/x-www-form-urlencoded`},responseType:`json`,fetch:!0});if(j.info(n),!n.status)return;let i=O.toJSON(n.data.responseText);if(i.code!==0){r.default.error(i.message);return}return i.data},async poll(e){let t={appkey:Fe.ios.appkey,auth_code:e,local_id:`0`,ts:`0`},n=Ie(t,Fe.ios.appkey,Fe.ios.appsec),r=await M.post(`https://passport.bilibili.com/x/passport-tv-login/qrcode/poll`,{data:O.toSearchParamsStr({...t,sign:n}),headers:{"Content-Type":`application/x-www-form-urlencoded`},responseType:`json`,fetch:!0});if(!r.status)return{success:!1,message:`网络错误`,action:void 0};let i=O.toJSON(r.data.responseText);j.info(i);let a={0:`成功`,"-3":`API校验密匙错误`,"-400":`请求错误`,"-404":`啥都木有`,86038:`二维码已失效`,86039:`二维码尚未确认`,86090:`二维码已扫码未确认`};if(!L.isWebApiSuccess(i)){let e=i.code.toString(),t=i.message||a[e]||`未知错误`;return e===`86038`?{success:!1,message:t,action:`refresh`}:e===`86039`||e===`86090`?{success:!1,message:t,action:`wait`}:{success:!1,message:t,action:void 0}}return{success:!0,message:`获取成功`,accessKey:i.data.access_token,accessKeyExpireAt:Date.now()+i.data.expires_in*1e3}}},Re={async init(){r.default.info(`正在申请二维码...`);let e=await this.getQRCodeInfo();e&&this.confirmScanQrcode(e)},getQRCodeInfo:async function(){j.info(`正在申请二维码...`);let e=await Le.getQrCodeInfo();return j.info(`获取到二维码信息`,e),e},async confirmScanQrcode(e){let t=A.alert({title:{text:`请扫描二维码登录`,position:`center`,html:!1,style:``},content:{text:`<div id="bili-qrcode-canvas"></div>`,html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(e){o=!0,e.close()}}},mask:{enable:!0,clickEvent:{toClose:!1,toHide:!1}},only:!0,width:`310px`,height:`365px`,drag:!0,dragLimit:!0,style:`
            #bili-qrcode-canvas{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
            }
            `}),n=t.$shadowRoot.querySelector(`#bili-qrcode-canvas`),i=new Pe(n,{text:e.url,width:300,height:300,colorDark:`#000000`,colorLight:`#ffffff`,correctLevel:Pe.CorrectLevel.H}),a=!1,o=!1;for(;;){if(o){j.error(`用户关闭扫码登录弹窗、取消扫码登录`);break}j.info(`正在等待扫码登录...`);let t=await Le.poll(e.auth_code);if(t?.success){this.setAccessTokenInfo({access_token:t.accessKey,expireAt:t.accessKeyExpireAt}),a=!0,j.info(`扫码登录成功`,t),r.default.success(`扫码登录成功`);break}else if(t?.action===`refresh`){j.info(`刷新二维码`),r.default.info(`刷新二维码`);let e=await this.getQRCodeInfo();e&&(i.clear(),i.makeCode(e.url))}else if(t.action===`wait`)t.message===`二维码已扫码未确认`&&(j.info(`已扫码，等待确认...`),A.loading({$parent:n,content:{text:`已扫码，等待确认`},mask:{enable:!0}}));else{a=!1,j.error(t.message),r.default.error(t.message);break}await O.sleep(1500)}return t.close(),{isSuccessLogin:a,isUserCloseScanDialog:o}},generateExpireAt(e=6){return new Date().getTime()+1e3*60*60*24*30*e},setAccessTokenInfo(e){fe(`bili-accessTokenInfo`,e)},getAccessTokenInfo(){let e=se(`bili-accessTokenInfo`);return e&&e.expireAt>Date.now()?e:null},getAccessToken(){return this.getAccessTokenInfo()?.access_token||``}},ze={上海:[`cn-sh-ct-01-06.bilivideo.com`,`cn-sh-ct-01-13.bilivideo.com`,`cn-sh-ct-01-15.bilivideo.com`,`cn-sh-ct-01-24.bilivideo.com`,`cn-sh-ct-01-36.bilivideo.com`,`cn-sh-office-bcache-01.bilivideo.com`],北京:[`cn-bj-cc-03-14.bilivideo.com`,`cn-bj-cc-03-17.bilivideo.com`,`cn-bj-fx-01-01.bilivideo.com`,`cn-bj-fx-01-04.bilivideo.com`,`cn-bj-fx-01-05.bilivideo.com`,`cn-bj-se-01-05.bilivideo.com`],南京:[`cn-jsnj-fx-02-05.bilivideo.com`,`cn-jsnj-fx-02-07.bilivideo.com`,`cn-jsnj-fx-02-10.bilivideo.com`],呼市:[`cn-nmghhht-cm-01-11.bilivideo.com`,`cn-nmghhht-cu-01-01.bilivideo.com`,`cn-nmghhht-cu-01-08.bilivideo.com`,`cn-nmghhht-cu-01-09.bilivideo.com`,`cn-nmghhht-cu-01-12.bilivideo.com`,`cn-nmghhht-cu-01-15.bilivideo.com`],哈市:[`cn-hljheb-cm-01-01.bilivideo.com`,`cn-hljheb-cm-01-03.bilivideo.com`,`cn-hljheb-ct-01-02.bilivideo.com`,`cn-hljheb-ct-01-03.bilivideo.com`,`cn-hljheb-ct-01-04.bilivideo.com`,`cn-hljheb-ct-01-07.bilivideo.com`],外建:[`c0--cn-gotcha01.bilivideo.com`,`d0--cn-gotcha09.bilivideo.com`,`d1--cn-gotcha101.bilivideo.com`,`d1--cn-gotcha102.bilivideo.com`,`d1--cn-gotcha204-1.bilivideo.com`,`d1--cn-gotcha204-2.bilivideo.com`,`d1--cn-gotcha204-3.bilivideo.com`,`d1--cn-gotcha204-4.bilivideo.com`,`d1--cn-gotcha207.bilivideo.com`,`d1--cn-gotcha211.bilivideo.com`,`d1--cn-gotcha308.bilivideo.com`,`d1--ov-gotcha01.bilivideo.com`,`d1--ov-gotcha03.bilivideo.com`,`d1--ov-gotcha207.bilivideo.com`,`d1--ov-gotcha208.bilivideo.com`,`d1--ov-gotcha209.bilivideo.com`,`d1--ov-gotcha210.bilivideo.com`,`d1--p1--cn-gotcha04.bilivideo.com`,`d1--tf-gotcha04.bilivideo.com`],天津:[`cn-tj-cm-02-01.bilivideo.com`,`cn-tj-cm-02-02.bilivideo.com`,`cn-tj-cm-02-04.bilivideo.com`,`cn-tj-cm-02-05.bilivideo.com`,`cn-tj-cm-02-06.bilivideo.com`,`cn-tj-cm-02-07.bilivideo.com`,`cn-tj-cu-01-02.bilivideo.com`,`cn-tj-cu-01-03.bilivideo.com`,`cn-tj-cu-01-04.bilivideo.com`,`cn-tj-cu-01-06.bilivideo.com`,`cn-tj-cu-01-07.bilivideo.com`,`cn-tj-cu-01-09.bilivideo.com`,`cn-tj-cu-01-10.bilivideo.com`,`cn-tj-cu-01-11.bilivideo.com`,`cn-tj-cu-01-12.bilivideo.com`,`cn-tj-cu-01-13.bilivideo.com`],广州:[`cn-gdgz-cm-01-02.bilivideo.com`,`cn-gdgz-cm-01-10.bilivideo.com`,`cn-gdgz-fx-01-01.bilivideo.com`,`cn-gdgz-fx-01-02.bilivideo.com`,`cn-gdgz-fx-01-03.bilivideo.com`,`cn-gdgz-fx-01-04.bilivideo.com`,`cn-gdgz-fx-01-06.bilivideo.com`,`cn-gdgz-fx-01-08.bilivideo.com`,`cn-gdgz-fx-01-09.bilivideo.com`,`cn-gdgz-fx-01-10.bilivideo.com`,`cn-gdgz-gd-01-01.bilivideo.com`],成都:`cn-sccd-cm-03-01.bilivideo.com,cn-sccd-cm-03-02.bilivideo.com,cn-sccd-cm-03-05.bilivideo.com,cn-sccd-ct-01-02.bilivideo.com,cn-sccd-ct-01-08.bilivideo.com,cn-sccd-ct-01-10.bilivideo.com,cn-sccd-ct-01-17.bilivideo.com,cn-sccd-ct-01-18.bilivideo.com,cn-sccd-ct-01-19.bilivideo.com,cn-sccd-ct-01-20.bilivideo.com,cn-sccd-ct-01-21.bilivideo.com,cn-sccd-ct-01-22.bilivideo.com,cn-sccd-ct-01-23.bilivideo.com,cn-sccd-ct-01-24.bilivideo.com,cn-sccd-ct-01-25.bilivideo.com,cn-sccd-ct-01-26.bilivideo.com,cn-sccd-ct-01-27.bilivideo.com,cn-sccd-ct-01-29.bilivideo.com,cn-sccd-cu-01-02.bilivideo.com,cn-sccd-cu-01-03.bilivideo.com,cn-sccd-cu-01-04.bilivideo.com,cn-sccd-cu-01-05.bilivideo.com,cn-sccd-cu-01-06.bilivideo.com,cn-sccd-cu-01-07.bilivideo.com,cn-sccd-cu-01-09.bilivideo.com,cn-sccd-fx-01-01.bilivideo.com,cn-sccd-fx-01-06.bilivideo.com`.split(`,`),新疆:[`cn-xj-cm-02-01.bilivideo.com`,`cn-xj-cm-02-03.bilivideo.com`,`cn-xj-cm-02-04.bilivideo.com`,`cn-xj-cm-02-06.bilivideo.com`,`cn-xj-ct-01-01.bilivideo.com`,`cn-xj-ct-01-02.bilivideo.com`,`cn-xj-ct-01-03.bilivideo.com`,`cn-xj-ct-01-04.bilivideo.com`,`cn-xj-ct-01-05.bilivideo.com`,`cn-xj-ct-02-02.bilivideo.com`],杭州:[`cn-zjhz-cm-01-01.bilivideo.com`,`cn-zjhz-cm-01-04.bilivideo.com`,`cn-zjhz-cm-01-07.bilivideo.com`,`cn-zjhz-cm-01-12.bilivideo.com`,`cn-zjhz-cm-01-17.bilivideo.com`,`cn-zjhz-cu-01-01.bilivideo.com`,`cn-zjhz-cu-01-02.bilivideo.com`,`cn-zjhz-cu-01-05.bilivideo.com`,`cn-zjhz-cu-v-02.bilivideo.com`],武汉:[`cn-hbwh-cm-01-01.bilivideo.com`,`cn-hbwh-cm-01-02.bilivideo.com`,`cn-hbwh-cm-01-04.bilivideo.com`,`cn-hbwh-cm-01-05.bilivideo.com`,`cn-hbwh-cm-01-06.bilivideo.com`,`cn-hbwh-cm-01-08.bilivideo.com`,`cn-hbwh-cm-01-09.bilivideo.com`,`cn-hbwh-cm-01-10.bilivideo.com`,`cn-hbwh-cm-01-12.bilivideo.com`,`cn-hbwh-cm-01-13.bilivideo.com`,`cn-hbwh-cm-01-17.bilivideo.com`,`cn-hbwh-cm-01-19.bilivideo.com`,`cn-hbwh-fx-01-02.bilivideo.com`,`cn-hbwh-fx-01-12.bilivideo.com`,`cn-hbwh-fx-01-13.bilivideo.com`],沈阳:[`cn-lnsy-cm-01-01.bilivideo.com`,`cn-lnsy-cm-01-03.bilivideo.com`,`cn-lnsy-cm-01-04.bilivideo.com`,`cn-lnsy-cm-01-05.bilivideo.com`,`cn-lnsy-cm-01-06.bilivideo.com`,`cn-lnsy-cu-01-03.bilivideo.com`,`cn-lnsy-cu-01-04.bilivideo.com`,`cn-lnsy-cu-01-06.bilivideo.com`],泉州:[`cn-fjqz-cm-01-01.bilivideo.com`,`cn-fjqz-cm-01-02.bilivideo.com`,`cn-fjqz-cm-01-03.bilivideo.com`,`cn-fjqz-cm-01-04.bilivideo.com`,`cn-fjqz-cm-01-05.bilivideo.com`,`cn-fjqz-cm-01-06.bilivideo.com`,`cn-fjqz-cm-01-08.bilivideo.com`,`cn-fjqz-cmcc-live-01.bilivideo.com`],海外:[`upos-hz-mirrorakam.akamaized.net`,`upos-sz-mirroraliov.bilivideo.com`],深圳:[`upos-sz-dynqn.bilivideo.com`,`upos-sz-estgcos.bilivideo.com`,`upos-sz-estghw.bilivideo.com`,`upos-sz-mirror08c.bilivideo.com`,`upos-sz-mirror08ct.bilivideo.com`,`upos-sz-mirror08h.bilivideo.com`,`upos-sz-mirroralib.bilivideo.com`,`upos-sz-mirroralibstar1.bilivideo.com`,`upos-sz-mirroraliov.bilivideo.com`,`upos-sz-mirrorbd.bilivideo.com`,`upos-sz-mirrorcf1ov.bilivideo.com`,`upos-sz-mirrorcosdisp.bilivideo.com`,`upos-sz-mirrorctos.bilivideo.com`,`upos-sz-mirrorhwdisp.bilivideo.com`,`upos-sz-originbstar.bilivideo.com`,`upos-sz-origincosgzhw.bilivideo.com`,`upos-sz-origincosv.bilivideo.com`],西安:[`cn-sxxa-cm-01-01.bilivideo.com`,`cn-sxxa-cm-01-02.bilivideo.com`,`cn-sxxa-cm-01-04.bilivideo.com`,`cn-sxxa-cm-01-09.bilivideo.com`,`cn-sxxa-cm-01-12.bilivideo.com`,`cn-sxxa-ct-03-02.bilivideo.com`,`cn-sxxa-ct-03-03.bilivideo.com`,`cn-sxxa-ct-03-04.bilivideo.com`,`cn-sxxa-cu-02-01.bilivideo.com`,`cn-sxxa-cu-02-02.bilivideo.com`],郑州:[`cn-hnzz-cm-01-01.bilivideo.com`,`cn-hnzz-cm-01-02.bilivideo.com`,`cn-hnzz-cm-01-03.bilivideo.com`,`cn-hnzz-cm-01-04.bilivideo.com`,`cn-hnzz-cm-01-05.bilivideo.com`,`cn-hnzz-cm-01-06.bilivideo.com`,`cn-hnzz-cm-01-09.bilivideo.com`,`cn-hnzz-cm-01-11.bilivideo.com`,`cn-hnzz-fx-01-01.bilivideo.com`,`cn-hnzz-fx-01-08.bilivideo.com`],香港:[`cn-hk-eq-01-03.bilivideo.com`,`cn-hk-eq-01-09.bilivideo.com`,`cn-hk-eq-01-10.bilivideo.com`,`cn-hk-eq-01-12.bilivideo.com`,`cn-hk-eq-01-13.bilivideo.com`,`cn-hk-eq-01-14.bilivideo.com`,`cn-hk-eq-bcache-13.bilivideo.com`,`cn-hk-eq-bcache-16.bilivideo.com`],海外:[`upos-hz-mirrorakam.akamaized.net`,`upos-sz-mirroraliov.bilivideo.com`,`upos-sz-mirrorcosov.bilivideo.com`,`upos-sz-mirrorhwov.bilivideo.com`,`cn-hk-eq-bcache-01.bilivideo.com`],"海外（东南亚）":[`upos-sz-mirroralibstar1.bilivideo.com`,`upos-sz-mirrorcosbstar1.bilivideo.com`,`upos-sz-mirrorhwbstar1.bilivideo.com`,`upos-bstar1-mirrorakam.akamaized.net`],其它:[`upos-tf-all-hw.bilivideo.com`,`upos-tf-all-tx.bilivideo.com`]},Be=[{name:`不替换`,host:``}];Object.keys(ze).map(e=>{ze[e].forEach(t=>{Be.push({name:`${e} - ${t.trim().replace(/\.bilivideo\.com$/gi,``)}`,host:t})})});var R=Be,Ve={getBangumiProxyHost(){let e=[{name:`中国大陆`,area:``,host:D.getValue(`bili-bangumi-proxyApiServer-default`,``).trim()||I.web_host}];if(!D.getValue(`bili-bangumi-unlockAreaLimit`))return e;let t=D.getValue(`bili-bangumi-proxyApiServer-hk`);O.isNotNull(t)&&e.push({name:`香港`,area:`hk`,host:t});let n=D.getValue(`bili-bangumi-proxyApiServer-tw`);O.isNotNull(n)&&e.push({name:`台湾`,area:`tw`,host:n});let r=D.getValue(`bili-bangumi-proxyApiServer-tha-or-sea`);return O.isNotNull(r)&&e.push({name:`泰国/东南亚`,area:`th`,host:r}),e},getSearchProxyHost(){let e=this.getBangumiProxyHost(),t=[],n=D.getValue(`bili-search-proxyApiServer-hk`);if(O.isNotNull(n))t.push({name:`香港`,area:`hk`,host:n});else{let n=e.find(e=>e.area===`hk`);n&&t.push(n)}let r=D.getValue(`bili-search-proxyApiServer-tw`);if(O.isNotNull(r))t.push({name:`台湾`,area:`tw`,host:r});else{let n=e.find(e=>e.area===`tw`);n&&t.push(n)}let i=D.getValue(`bili-search-proxyApiServer-tha-or-sea`);if(O.isNotNull(i))t.push({name:`泰国/东南亚`,area:`th`,host:i});else{let n=e.find(e=>e.area===`th`);n&&t.push(n)}return t},getBangumiProxySearchParam(e={}){return{from_client:`BROWSER`,drm_tech_type:2,module:`bangumi`,area:e?.area||``,access_key:Re.getAccessToken()}}},z={findBetterCDN(...e){let t=[];return e.forEach(e=>{Array.isArray(e)?t=t.concat(e.filter(e=>typeof e==`string`)):typeof e==`string`&&t.push(e)}),t.find(e=>{if(new URL(e).host.startsWith(`upos`))return e})||t[0]},replaceVideoCDN(e,t=!1){let n=t?D.getValue(`bili-video-uposServerSelect-audio`):D.getValue(`bili-video-uposServerSelect`),r=t?D.getValue(`bili-video-uposServerSelect-audio-own`):D.getValue(`bili-video-uposServerSelect-own`);return r=(r??``).trim(),this.replaceVideoCDNHost(e,n,r)},replaceBangumiVideoCDN(e,t=!1){let n=t?D.getValue(`bili-bangumi-uposServerSelect-audio`):D.getValue(`bili-bangumi-uposServerSelect`),r=t?D.getValue(`bili-bangumi-uposServerSelect-audio-own`):D.getValue(`bili-bangumi-uposServerSelect-own`);return r=(r??``).trim(),this.replaceVideoCDNHost(e,n,r)},replaceLiveVideoCDN(e){let t=D.getValue(`bili-live-uposServerSelect`),n=D.getValue(`bili-live-uposServerSelect-own`);return n=(n??``).trim(),this.replaceVideoCDNHost(e,t,n)},replaceVideoCDNHost(e,t,n){try{let r=new URL(e),i=r.host;if(O.isNotNull(n))return i===n?(r.host=n,j.info(`原Host为：${i}，替换CDN为自定义：${n}`),r.toString()):e;let a=R.find(e=>e.host===t);if(O.isNull(a)||O.isNull(a.host))return e;let o=a.host;return o===r.host?e:(r.host=o,j.info(`原Host为：${i}，替换CDN为：${JSON.stringify(a)}`),r.toString())}catch(t){return j.error(`视频upos替换失败`,t),e}}},He={$flag:{isInitCSS:!1},$data:{originToast:`mplayer-toast`,showClassName:`mplayer-show`,prefix:`mplayer-toast-gm`},$el:{get $mplayer(){return P(`.mplayer`)}},toast(e){typeof e==`string`&&(e={text:e}),this.initCSS();let t=e.parent??this.$el.$mplayer;if(!t)throw TypeError(`toast parent is null`);this.mutationMPlayerOriginToast(t);let n=k.createElement(`div`,{"data-from":`gm`});if(k.addClass(n,this.$data.prefix),k.addClass(n,this.$data.showClassName),e.showCloseBtn){let e=k.createElement(`div`,{className:this.$data.prefix+`-close`,innerHTML:`
                    <span class="bp-svgicon">
                        <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.47 4.47a.75.75 0 011.06 0l5.541 5.54 5.54-5.54a.75.75 0 011.061 1.06l-5.54 5.541 5.54 5.54a.75.75 0 01.073.977l-.073.084a.75.75 0 01-1.06 0l-5.541-5.54-5.54 5.54a.75.75 0 01-1.061-1.06l5.54-5.541-5.54-5.54a.75.75 0 01-.073-.977z" fill="#FEFEFE" fill-rule="evenodd">
                            </path>
                        </svg>
                    </span>
                `});n.appendChild(e),k.on(e,`click`,e=>{k.preventEvent(e),this.closeToast(n)})}let r=k.createElement(`span`,{className:this.$data.prefix+`-text`,innerText:e.text});if(n.appendChild(r),typeof e.timeText==`string`&&e.timeText.trim()!=``){let t=k.createElement(`span`,{className:this.$data.prefix+`-time`,innerText:e.timeText});n.appendChild(t)}if(typeof e.jumpText==`string`&&e.jumpText.trim()!=``){let t=k.createElement(`span`,{className:this.$data.prefix+`-jump`,innerText:e.jumpText});n.appendChild(t),k.on(t,`click`,t=>{typeof e.jumpClickCallback==`function`&&(k.preventEvent(t),e.jumpClickCallback(t))})}this.setTransitionendEvent(n);let i=typeof e.timeout==`number`&&!isNaN(e.timeout)?e.timeout:3500;return Array.from(F(`.mplayer-toast`)).forEach(e=>{e.hasAttribute(`data-is-set-transitionend`)||(e.setAttribute(`data-is-set-transitionend`,`true`),e.textContent?.includes(`记忆你上次看到`)&&setTimeout(()=>{let t=e.querySelector(`.mplayer-toast-close`);t?t.click():e.remove()},3e3),this.setTransitionendEvent(e))}),t.appendChild(n),setTimeout(()=>{this.closeToast(n)},i),{$toast:n,close:()=>{this.closeToast(n)}}},initCSS(){this.$flag.isInitCSS||(this.$flag.isInitCSS=!0,N(`
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

		`))},mutationMPlayerOriginToast(e){let t=this.$el.$mplayer;t&&(t.hasAttribute(`data-mutation`)||(j.success(`添加观察器，动态更新toast的位置`),t.setAttribute(`data-mutation`,`gm`),O.mutationObserver(t,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{this.updatePageToastBottom()}})))},updatePageToastBottom(){let e=Array.from(F(`.${this.$data.prefix}`)).concat(Array.from(F(`.${this.$data.originToast}.${this.$data.showClassName}`)));if(e.length){let t=e.length-1;e.forEach((e,n)=>{let r=46+46*(t-n);e.setAttribute(`data-transition`,`move`),e.style.bottom=r+`px`})}},closeToast(e){e.classList.remove(this.$data.showClassName)},getTransitionendEventNameList(){return[`webkitTransitionEnd`,`mozTransitionEnd`,`MSTransitionEnd`,`otransitionend`,`transitionend`]},setTransitionendEvent(e){let t=this,n=this.getTransitionendEventNameList();k.on(e,n,function(n){let r=e.getAttribute(`data-transition`);if(!e.classList.contains(t.$data.showClassName)){e.remove();return}if(r===`move`){e.removeAttribute(`data-transition`);return}},{capture:!0})}},Ue={"240P 极速":6,"360P 流畅":16,"480P 清晰":32,"720P 高清":64,"720P60 高帧率":74,"1080P 高清":80,"1080P+ 高码率":112,"1080P60 高帧率":116,"4K 超清":120,"HDR 真彩色":125,杜比视界:126,"8K 超高清":127},We={};Object.keys(Ue).forEach(e=>{let t=Reflect.get(Ue,e);Reflect.set(We,t,e)});var Ge={_ajaxHooker_:null,get ajaxHooker(){return Ge._ajaxHooker_??=(j.info(`启用ajaxHooker拦截网络`),O.ajaxHooker()),Ge._ajaxHooker_}},Ke={$flag:{is_hook_video_playurl:!1,is_hook_bangumi_html5:!1,is_hook_live_playurl:!1},init(){v.isLive()&&D.execMenuOnce(`bili-live-cdn-hook`,()=>{this.hook_live_playurl()})},hook_video_playurl(){this.$flag.is_hook_video_playurl||(this.$flag.is_hook_video_playurl=!0,Ge.ajaxHooker.hook(e=>{if(e.url.includes(`//${I.web_host}/x/player/wbi/playurl`)){e.url.startsWith(`//`)&&(e.url=window.location.protocol+e.url);let t=new URL(e.url);if(t.searchParams.set(`platform`,`html5`),t.searchParams.set(`qn`,Ue[`1080P60 高帧率`].toString()),t.searchParams.set(`high_quality`,`1`),t.searchParams.set(`fnver`,`0`),t.searchParams.set(`fourk`,`1`),t.searchParams.has(`__t`)){t.searchParams.delete(`__t`);return}e.url=t.toString(),e.response=e=>{let t=O.toJSON(e.responseText),n=t?.data?.quality,r=t?.data?.support_formats;if(j.info(`当前解锁的quality值：`+n),n&&r){let e=r.find(e=>e.quality==n);if(e){let t=e.new_description||e.display_desc;j.info(`成功解锁画质 `+t),He.toast(`成功解锁画质 ${t}`)}}}}}))},hook_bangumi_html5(){this.$flag.is_hook_bangumi_html5||(this.$flag.is_hook_bangumi_html5=!0,Ge.ajaxHooker.hook(e=>{if(e.url.includes(`//${I.web_host}/pgc/player/web/playurl/html5`)){e.url.startsWith(`//`)&&(e.url=window.location.protocol+e.url);let t=new URL(e.url);t.pathname=`/pgc/player/web/playurl`,t.searchParams.delete(`bsource`),t.searchParams.set(`qn`,Ue[`1080P60 高帧率`].toString()),t.searchParams.set(`fnval`,`1`),t.searchParams.set(`fnver`,`0`),t.searchParams.set(`fourk`,`1`),t.searchParams.set(`from_client`,`BROWSER`),t.searchParams.set(`drm_tech_type`,`2`),e.url=t.toString(),e.response=e=>{let t=O.toJSON(e.responseText).result;if(j.info(`当前解锁的quality值：`+t.quality),t.quality&&t.support_formats){let e=t.support_formats.find(e=>e.quality==t.quality);e&&j.info(`当前已解锁的画质：`+e.new_description||e.display_desc)}}}}))},hook_live_playurl(){this.$flag.is_hook_live_playurl||(this.$flag.is_hook_live_playurl=!0,Ge.ajaxHooker.hook(e=>{if(!D.getValue(`bili-live-cdn-hook`)||e.url.startsWith(`data:`))return;let t=x.fixUrl(e.url),n=new URL(t);n.pathname.startsWith(`/xlive/web-room/v2/index/getRoomPlayInfo`)?(n.searchParams.set(`qn`,`30000`),e.url=n.toString(),e.response=e=>{let t=typeof e.responseText==`string`?O.toJSON(e.responseText):e.json,n=t?.data?.playurl_info?.playurl?.stream;Array.isArray(n)?n.forEach(e=>{let t=e?.format;Array.isArray(t)&&t.forEach(e=>{let t=e?.codec;Array.isArray(t)&&(e?.format_name,t.forEach(e=>{e?.codec_name;let t=e?.url_info;Array.isArray(t)&&t.forEach(e=>{let t=e?.host;typeof t==`string`&&(e.host=z.replaceLiveVideoCDN(t))})}))})}):j.error(`直播请求信息中返回的steam不是数组`,t)}):n.hostname.endsWith(`.bilivideo.com`)&&(e.url=z.replaceLiveVideoCDN(t))}))}},qe={async nav(e=!0){let t=await M.get(`https://${I.web_host}/x/web-interface/nav?web_location=333.401`,{fetch:!0,responseType:`json`,allowInterceptConfig:!1});if(!t.status){j.error([`获取导航栏用户信息失败，请求异常`,t]);return}let n=O.toJSON(t.data.responseText);if(e&&!L.isWebApiSuccess(n)){j.error(n),r.default.error(`获取导航栏用户信息失败`);return}return n.data},async space(e,t=``){let n=await M.get(`https://${I.web_host}/x/polymer/web-dynamic/v1/feed/space`,{data:{host_mid:e,offset:t},fetch:!0});if(!n.status)return;let r=O.toJSON(n.data.responseText);if(L.isWebApiSuccess(r))return r.data},async following(e,t=1,n=50){let r=await M.get(`https://${I.web_host}/x/relation/followings`,{data:{vmid:e,ps:n,pn:t},fetch:!0});if(!r.status)return;let i=O.toJSON(r.data.responseText);return L.isWebApiSuccess(i)?i.data:i.message}},Je={$data:{isLogin:new Promise(()=>!1)},$flag:{isSetQueryLoginStatus:!1,isQueryLoginStatus:!1},init(){this.resetLoginStatus()},resetLoginStatus(){if(this.$flag.isSetQueryLoginStatus)return;this.$flag.isSetQueryLoginStatus=!0;let e=!1;this.$data.isLogin=new Promise(async t=>{if(!this.$flag.isQueryLoginStatus){this.$flag.isQueryLoginStatus=!0;let t=await qe.nav(!1);t&&t.isLogin&&(e=!0)}t(e)})}};function Ye(e){let t=`FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf`.split(``),n=[0,1,2,9,7,5,6,4,8,3,10,11],r=0n;for(let i=3;i<12;i++)r=r*58n+BigInt(t.indexOf(e[n[i]]));return`${r&2251799813685247n^23442827791579n}`}var Xe=async e=>{async function t(e){let t=await qe.nav(!1);if(!t)return;let{img_url:n,sub_url:r}=t.wbi_img,a=n.slice(n.lastIndexOf(`/`)+1,n.lastIndexOf(`.`))+r.slice(r.lastIndexOf(`/`)+1,r.lastIndexOf(`.`)),o=[46,47,18,2,53,8,23,32,15,50,10,31,58,3,45,35,27,43,5,49,33,9,42,19,29,28,14,39,12,38,41,13,37,48,7,16,24,55,40,61,26,17,0,1,60,51,30,4,22,25,54,21,56,59,6,63,57,62,11,36,20,34,44,52].map(e=>a[e]).join(``).slice(0,32),s=Object.keys(e).sort().map(t=>{let n=e[t].toString().replace(/[!'()*]/g,``);return`${encodeURIComponent(t)}=${encodeURIComponent(n)}`}).join(`&`),c=(0,i.default)(s+o);return s+`&w_rid=`+c}return await t(e)},Ze=b===void 0?window:b,Qe={LATEST:0,HOT:2},$e={$data:{oid:null,createrID:void 0,commentType:null,currentSortType:Qe.HOT,replyPool:{},nextOffset:``,dynamicDetail:{oid:null,commentType:null}},$el:{replyList:null,navSort:null,hotSort:null,timeSort:null,totalReply:null,replyWrapper:null},$flag:{isInitCSS:!1,isHookNetwork:!1},async init(e){this.initData(),this.networkHook(),this.addStyle(),this.setupStandardCommentContainer(e),await new Promise(e=>{k.wait(()=>{if(v.isVideo()){let e=Ze.location.pathname.replace(`/video/`,``).replace(`/`,``);e.startsWith(`av`)&&(this.$data.oid=e.slice(2)),e.startsWith(`BV`)&&(this.$data.oid=Ye(e)),this.$data.commentType=1}else v.isDynamic()?(this.$data.oid=this.$data.dynamicDetail?.oid,this.$data.commentType=this.$data.dynamicDetail?.commentType):v.isOpus()&&(this.$data.oid=Ze?.__INITIAL_STATE__?.opus?.detail?.basic?.comment_id_str,this.$data.commentType=Ze?.__INITIAL_STATE__?.opus?.detail?.basic?.comment_type);return this.$data.oid&&this.$data.commentType?(e(null),{success:!0,data:{}}):{success:!1,data:null}},0)}),await this.enableSwitchingSortType(e),await this.loadFirstPagination(e)},initData(){this.$data.oid=null,this.$data.createrID=void 0,this.$data.commentType=null,this.$data.replyPool=null,this.$data.replyPool={},this.$data.nextOffset=``,this.$data.currentSortType=Qe.HOT,this.$data.dynamicDetail={oid:null,commentType:null},Object.keys(this.$el).forEach(e=>{let t=Reflect.get(this.$el,e);document.contains(t)&&Reflect.set(this.$el,e,null)})},networkHook(){this.$flag.isHookNetwork||v.isDynamic()&&Ge.ajaxHooker.hook(e=>{let t=e.url;if(typeof t==`string`&&t.includes(`reply/wbi/main`)){let{searchParams:e}=new URL(`${t.startsWith(`//`)?`https:`:``}${t}`);this.$data.dynamicDetail={oid:e.get(`oid`),commentType:e.get(`type`)}}})},async addStyle(){if(this.$flag.isInitCSS)return;this.$flag.isInitCSS=!0,await k.onReady(),N(`
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
    `),N(`
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
    `);let e=document.createElement(`style`);e.textContent=`
            
          `,N(`
    .reply-item .root-reply-avatar .avatar .bili-avatar {
        width: 40px;
        height: 40px;
    }

    .sub-reply-item .sub-reply-avatar .avatar .bili-avatar {
        width: 24px;
        height: 24px;
    }
    `),N(`
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
    `);let t=document.createElement(`style`);t.textContent=`
            
          `,N(`
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
    `)},setupStandardCommentContainer(e){k.html(e,`
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
    `),this.$el.replyList=e.querySelector(`.reply-list`),this.$el.navSort=e.querySelector(`.comment-container .reply-header .nav-sort`),this.$el.hotSort=this.$el.navSort.querySelector(`.hot-sort`),this.$el.timeSort=this.$el.navSort.querySelector(`.time-sort`),this.$el.totalReply=e.querySelector(`.comment-container .reply-header .total-reply`),this.$el.replyWrapper=e.querySelector(`.comment-container .reply-warp`)},enableSwitchingSortType(e){k.addClass(this.$el.navSort,`hot`),k.removeClass(this.$el.navSort,`time`),k.on(this.$el.hotSort,`click`,t=>{k.preventEvent(t),this.$data.currentSortType!==Qe.HOT&&(this.$data.currentSortType=Qe.HOT,k.addClass(this.$el.navSort,`hot`),k.removeClass(this.$el.navSort,`time`),e.scrollTo(0,0),this.loadFirstPagination(e))}),k.on(this.$el.timeSort,`click`,t=>{k.preventEvent(t),this.$data.currentSortType!==Qe.LATEST&&(this.$data.currentSortType=Qe.LATEST,k.addClass(this.$el.navSort,`time`),k.removeClass(this.$el.navSort,`hot`),e.scrollTo(0,0),this.loadFirstPagination(e))})},async loadFirstPagination(e){this.$data.nextOffset=``;let{data:t,code:n}=await this.getPaginationData(1);if(this.$data.createrID=t.upper.mid,k.empty(this.$el.replyList),this.$data.replyPool={},k.remove(`.comment-container .reply-warp .no-more-replies-info`),k.remove(`.comment-container .reply-warp .anchor-for-loading`),n!==0){let e=n===12061?`UP主已关闭评论区`:`无法从API获取评论数据`;k.html(this.$el.replyList,`
        <p style="padding: 100px 0; text-align: center; color: #999;">${e}</p>
      `);return}let r=parseInt(t?.cursor?.all_count)||0;if(k.text(this.$el.totalReply,r),t?.cursor?.name?.includes(`精选`)&&k.html(this.$el.navSort,`
            <div class="selected-sort">精选评论</div>
        `),t.top_replies&&t.top_replies.length!==0){let e=t.top_replies[0];this.appendReplyItem(e,!0)}for(let e of t.replies)this.appendReplyItem(e);if(t.replies.length===0||t.cursor.is_end){let e=k.createElement(`p`,{className:`no-more-replies-info`,textContent:`没有更多评论`},{style:`padding-bottom: 100px; text-align: center; color: #999;`});k.append(this.$el.replyWrapper,e);return}this.addAnchor()},async getPaginationData(e){let t={pagination_str:JSON.stringify({offset:this.$data.nextOffset||``}),oid:this.$data.oid,type:this.$data.commentType,wts:parseInt((Date.now()/1e3).toString())};this.$data.currentSortType===Qe.HOT?(Reflect.set(t,`mode`,3),this.$data.nextOffset):this.$data.currentSortType===Qe.LATEST&&Reflect.set(t,`mode`,2);let n=await Je.$data.isLogin,r=await M.get(`https://${I.web_host}/x/v2/reply/wbi/main?${await Xe(t)}`,{fetch:!n,fetchInit:{credentials:`same-origin`},anonymous:!n}),i=O.toJSON(r.data.responseText);return this.$data.nextOffset=i.data.cursor?.pagination_reply?.next_offset||``,i},appendReplyItem(e,t){if(typeof this.$data.replyPool==`object`&&this.$data.replyPool!=null&&this.$data.replyPool[e.rpid])return;let n=k.createElement(`div`,{className:`reply-item`,innerHTML:`
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
              <a class="user-name" href="https://space.bilibili.com/${e.mid}" target="_blank" data-user-id="${e.mid}" data-root-reply-id="${e.rpid}" style="color: ${e.member.vip.nickname_color?e.member.vip.nickname_color:`#61666d`}">${e.member.uname}</a>
              <span style="height: 14px; padding: 0 2px; margin-right: 4px; display: flex; align-items: center; font-size: 10px; color: white; border-radius: 2px; background-color: ${this.getMemberLevelColor(e.member.level_info.current_level)};">LV${e.member.level_info.current_level}</span>
              ${this.$data.createrID===e.mid?`<i class="svg-icon up-web up-icon" style="width: 20px; height: 24px; transform: scale(1.03);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="4" width="24" height="16" rx="2" fill="#FF6699"></rect><path d="M5.7 8.36V12.79C5.7 13.72 5.96 14.43 6.49 14.93C6.99 15.4 7.72 15.64 8.67 15.64C9.61 15.64 10.34 15.4 10.86 14.92C11.38 14.43 11.64 13.72 11.64 12.79V8.36H10.47V12.81C10.47 13.43 10.32 13.88 10.04 14.18C9.75 14.47 9.29 14.62 8.67 14.62C8.04 14.62 7.58 14.47 7.3 14.18C7.01 13.88 6.87 13.43 6.87 12.81V8.36H5.7ZM13.0438 8.36V15.5H14.2138V12.76H15.9838C17.7238 12.76 18.5938 12.02 18.5938 10.55C18.5938 9.09 17.7238 8.36 16.0038 8.36H13.0438ZM14.2138 9.36H15.9138C16.4238 9.36 16.8038 9.45 17.0438 9.64C17.2838 9.82 17.4138 10.12 17.4138 10.55C17.4138 10.98 17.2938 11.29 17.0538 11.48C16.8138 11.66 16.4338 11.76 15.9138 11.76H14.2138V9.36Z" fill="white"></path></svg></i>`:``}
            </div>
            <div class="root-reply">
              <span class="reply-content-container root-reply" style="padding-bottom: 8px;">
                <span class="reply-content">${t?`<span class="top-icon" style="top: -1px;">置顶</span>`:``}${e.content.pictures?`<div class="note-prefix" style="transform: translateY(-1px);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="#BBBBBB"><path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25Zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25ZM3.5 6.25a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Zm.75 2.25h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5Z"></path></svg><div style="margin-left: 3px;">笔记</div></div>`:``}${this.getConvertedMessage(e.content)}</span>
              </span>
              ${e.content.pictures?`
                <div class="image-exhibition" style="margin-top: 0; margin-bottom: 8px;">
                  <div class="preview-image-container" style="display: flex; width: 300px;">
                    ${this.getImageItems(e.content.pictures)}
                  </div>
                </div>
                `:``}
              <div class="reply-info">
                <span class="reply-time" style="margin-right: 20px;">${this.getFormattedTime(e.ctime)}</span>
                <span class="reply-like">
                  <i class="svg-icon like use-color like-icon" style="width: 16px; height: 16px;"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3323" width="200" height="200"><path d="M594.176 151.168a34.048 34.048 0 0 0-29.184 10.816c-11.264 13.184-15.872 24.064-21.504 40.064l-1.92 5.632c-5.632 16.128-12.8 36.864-27.648 63.232-25.408 44.928-50.304 74.432-86.208 97.024-23.04 14.528-43.648 26.368-65.024 32.576v419.648a4569.408 4569.408 0 0 0 339.072-4.672c38.72-2.048 72-21.12 88.96-52.032 21.504-39.36 47.168-95.744 63.552-163.008a782.72 782.72 0 0 0 22.528-163.008c0.448-16.832-13.44-32.256-35.328-32.256h-197.312a32 32 0 0 1-28.608-46.336l0.192-0.32 0.64-1.344 2.56-5.504c2.112-4.8 5.12-11.776 8.32-20.16 6.592-17.088 13.568-39.04 16.768-60.416 4.992-33.344 3.776-60.16-9.344-84.992-14.08-26.688-30.016-33.728-40.512-34.944zM691.84 341.12h149.568c52.736 0 100.864 40.192 99.328 98.048a845.888 845.888 0 0 1-24.32 176.384 742.336 742.336 0 0 1-69.632 178.56c-29.184 53.44-84.48 82.304-141.76 85.248-55.68 2.88-138.304 5.952-235.712 5.952-96 0-183.552-3.008-244.672-5.76-66.432-3.136-123.392-51.392-131.008-119.872a1380.672 1380.672 0 0 1-0.768-296.704c7.68-72.768 70.4-121.792 140.032-121.792h97.728c13.76 0 28.16-5.504 62.976-27.456 24.064-15.104 42.432-35.2 64.512-74.24 11.904-21.184 17.408-36.928 22.912-52.8l2.048-5.888c6.656-18.88 14.4-38.4 33.28-60.416a97.984 97.984 0 0 1 85.12-32.768c35.264 4.096 67.776 26.88 89.792 68.608 22.208 42.176 21.888 84.864 16 124.352a342.464 342.464 0 0 1-15.424 60.544z m-393.216 477.248V405.184H232.96c-40.448 0-72.448 27.712-76.352 64.512a1318.912 1318.912 0 0 0 0.64 282.88c3.904 34.752 32.96 61.248 70.4 62.976 20.8 0.96 44.8 1.92 71.04 2.816z" p-id="3324" fill="#9499a0"></path></svg></i>
                  <span>${e.like}</span>
                </span>
              </div>
              <div class="reply-tag-list">
                ${e.card_label?e.card_label.reduce((e,t)=>e+`<span class="reply-tag-item ${t.text_content===`热评`?`reply-tag-hot`:``} ${t.text_content===`UP主觉得很赞`?`reply-tag-liked`:``}" style="font-size: 12px; background-color: ${t.label_color_day}; color: ${t.text_color_day};">${t.text_content}</span>`,``):``}
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
              `:``}
          </div>
        </div>
        `});k.append(this.$el.replyList,n),this.$data.replyPool[e.rpid_str]=!0;let r=n.querySelector(`.preview-image-container`);r&&new a.default(r,{title:!1,toolbar:!1,tooltip:!1,keyboard:!1});let i=n.querySelector(`.sub-reply-list`),o=n.querySelector(`.view-more-btn`);o&&k.on(o,`click`,()=>{this.loadPaginatedSubReplies(e.rpid,i,e.rcount,1)})},getFormattedTime(e){let t=new Date(e*1e3);return`${t.getFullYear()}-${(t.getMonth()+1).toString().padStart(2,`0`)}-${t.getDate().toString().padStart(2,`0`)} ${t.getHours().toString().padStart(2,`0`)}:${t.getMinutes().toString().padStart(2,`0`)}`},getMemberLevelColor(e){return{0:`#C0C0C0`,1:`#BBBBBB`,2:`#8BD29B`,3:`#7BCDEF`,4:`#FEBB8B`,5:`#EE672A`,6:`#F04C49`}[e]},getConvertedMessage(e){let t=e.message,n=[`https://www.bilibili.com/video/av`,`https://b23.tv/mall-`];if(e.vote&&e.vote.deleted===!1){let r=`<a class="jump-link normal" href="${e.vote.url}" target="_blank" noopener noreferrer>${e.vote.title}</a>`;n.push(r),t=t.replace(`{vote:${e.vote.id}}`,r)}if(e.emote)for(let[r,i]of Object.entries(e.emote)){let e=`<img class="emoji-${[``,`small`,`large`][i.meta.size]}" src="${i.url}" alt="${r}">`;n.push(e),t=t.replaceAll(r,e)}if(t=t.replaceAll(/(\d{1,2}[:：]){1,2}\d{1,2}/g,e=>{if(e=e.replaceAll(`：`,`:`),!v.isVideo())return e;let t=e.split(`:`);if(t.some(e=>parseInt(e)>=60))return e;let r;if(t.length===2?r=parseInt(t[0])*60+parseInt(t[1]):t.length===3&&(r=parseInt(t[0])*3600+parseInt(t[1])*60+parseInt(t[2])),Number.isNaN(r))return e;let i=`<a class="jump-link video-time" onclick="(async () => {
          // jump to exact time
          const videoElement = document.querySelector('video.gsl-video');
          videoElement.currentTime = ${r};
  
          // close comment module
          document.querySelector('.close-comment-module-btn').click();
  
          // scroll to top
          window.scrollTo(0, 0);
  
          // play video if it is paused
          if (videoElement.paused) videoElement.play();
        })()">${e}</a>`;return n.push(i),i}),e.at_name_to_mid)for(let[r,i]of Object.entries(e.at_name_to_mid)){let e=`<a class="jump-link user" data-user-id="${i}" href="https://space.bilibili.com/${i}" target="_blank" noopener noreferrer>@${r}</a>`;n.push(e),t=t.replaceAll(`@${r}`,e)}if(Object.keys(e.jump_url).length){let r=[].concat(Object.entries(e.jump_url).filter(e=>e[0].startsWith(`https://`)),Object.entries(e.jump_url).filter(e=>!e[0].startsWith(`https://`)));for(let[e,i]of r){let r=e.startsWith(`BV`)||/^av\d+$/.test(e)?`https://www.bilibili.com/video/${e}`:i.pc_url||e;if(r.includes(`search.bilibili.com`)&&n.join(``).includes(e))continue;let a=`<img class="icon normal" src="${i.prefix_icon}" style="${i.extra&&i.extra.is_word_search&&`width: 12px;`}"><a class="jump-link normal" href="${r}" target="_blank" noopener noreferrer>${i.title}</a>`;n.push(a),t=t.replaceAll(e,a)}}return t},getImageItems(e){let t=`width: 84px; height: 84px;`;e.length===1&&(t=`max-width: 260px; max-height: 180px;`),e.length===2&&(t=`width: 128px; height: 128px;`);let n=``;for(let r of e)n+=`<div class="image-item-wrap" style="margin-top: 4px; margin-right: 4px; cursor: zoom-in;"><img src="${r.img_src}" style="border-radius: 4px; ${t}"></div>`;return n},getSubReplyItems(e){if(!(e instanceof Array))return``;let t=``;for(let n of e)t+=`
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
              <a class="sub-user-name" href="https://space.bilibili.com/${n.mid}" target="_blank" data-user-id="${n.mid}" data-root-reply-id="${n.rpid}" style="color: ${n.member.vip.nickname_color?n.member.vip.nickname_color:`#61666d`}">${n.member.uname}</a>
              <span style="height: 14px; padding: 0 2px; margin-right: 4px; display: flex; align-items: center; font-size: 10px; color: white; border-radius: 2px; background-color: ${this.getMemberLevelColor(n.member.level_info.current_level)};">LV${n.member.level_info.current_level}</span>
              ${this.$data.createrID===n.mid?`<i class="svg-icon up-web up-icon" style="width: 20px; height: 24px; transform: scale(1.03);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="4" width="24" height="16" rx="2" fill="#FF6699"></rect><path d="M5.7 8.36V12.79C5.7 13.72 5.96 14.43 6.49 14.93C6.99 15.4 7.72 15.64 8.67 15.64C9.61 15.64 10.34 15.4 10.86 14.92C11.38 14.43 11.64 13.72 11.64 12.79V8.36H10.47V12.81C10.47 13.43 10.32 13.88 10.04 14.18C9.75 14.47 9.29 14.62 8.67 14.62C8.04 14.62 7.58 14.47 7.3 14.18C7.01 13.88 6.87 13.43 6.87 12.81V8.36H5.7ZM13.0438 8.36V15.5H14.2138V12.76H15.9838C17.7238 12.76 18.5938 12.02 18.5938 10.55C18.5938 9.09 17.7238 8.36 16.0038 8.36H13.0438ZM14.2138 9.36H15.9138C16.4238 9.36 16.8038 9.45 17.0438 9.64C17.2838 9.82 17.4138 10.12 17.4138 10.55C17.4138 10.98 17.2938 11.29 17.0538 11.48C16.8138 11.66 16.4338 11.76 15.9138 11.76H14.2138V9.36Z" fill="white"></path></svg></i>`:``}
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
        `;return t},async loadPaginatedSubReplies(e,t,n,i){let a={oid:this.$data.oid,type:this.$data.commentType,root:e,ps:10,pn:i,web_location:333.788},o=await Je.$data.isLogin,s=await M.get(`https://${I.web_host}/x/v2/reply/reply?${O.toSearchParamsStr(a)}`,{allowInterceptConfig:!1,fetch:!o,fetchInit:{credentials:`same-origin`},anonymous:!o});if(!s.status){j.error(s),r.default.error(`请求异常，获取评论的回复失败`);return}let c=O.toJSON(s.data.responseText);if(c===-352){r.default.error(`请登录后再进行操作`),console.error(`you should login first`,s);return}let l=c.data;t.innerHTML=this.getSubReplyItems(l.replies),this.addSubReplyPageSwitcher(e,t,n,i),t.parentElement.parentElement.scrollIntoView({behavior:`instant`}),Ze.scrollTo(0,document.documentElement.scrollTop-60)},addSubReplyPageSwitcher(e,t,n,r){if(n<=10)return;let i=Math.ceil(n/10),a=k.createElement(`div`,{className:`sub-reply-pagination`,innerHTML:`
          <div class="view-more-pagination">
            <span class="pagination-page-count">共${i}页</span>
            ${r===1?``:`<span class="pagination-btn pagination-to-prev-btn">上一页</span>`}
            ${(()=>{let e=[r-4,r-3,r-2,r-1].filter(e=>e>=1),t=[r+1,r+2,r+3,r+4].filter(e=>e<=i),n=[].concat(e,r,t),a;a=r<=3?n.slice(0,5):r>=i-3?n.reverse().slice(0,5).reverse():n.slice(n.indexOf(r)-2,n.indexOf(r)+3);let o=JSON.parse(JSON.stringify(a));if(!o.includes(1)){let e=[1];o.at(0)!==2&&(e=[1,`...`]),o=[].concat(e,o)}if(!o.includes(i)){let e=[i];o.at(-1)!==i-1&&(e=[`...`,i]),o=[].concat(o,e)}return o.reduce((e,t)=>t===`...`?e+`<span class="pagination-page-dot">...</span>`:t===r?e+`<span class="pagination-page-number current-page">${t}</span>`:e+`<span class="pagination-page-number">${t}</span>`,``)})()}
            ${r===i?``:`<span class="pagination-btn pagination-to-next-btn">下一页</span>`}
          </div>
        `}),o=a.querySelector(`.pagination-to-prev-btn`);k.on(o,`click`,()=>{this.loadPaginatedSubReplies(e,t,n,r-1)});let s=a.querySelector(`.pagination-to-next-btn`);k.on(s,`click`,()=>{this.loadPaginatedSubReplies(e,t,n,r+1)}),a.querySelectorAll(`.pagination-page-number:not(.current-page)`)?.forEach(r=>{let i=parseInt(r.textContent);k.on(r,`click`,()=>this.loadPaginatedSubReplies(e,t,n,i))}),t.appendChild(a)},addAnchor(){let e=k.createElement(`div`,{className:`anchor-for-loading`,textContent:`正在加载...`},{style:`text-align: center; color: #61666d; transform: translateY(-50px)`});k.append(this.$el.replyWrapper,e);let t=1,n=new IntersectionObserver(async r=>{if(!r[0].isIntersecting)return;let{data:i}=await this.getPaginationData(++t);if(!i.replies||i.replies.length===0){e.textContent=`所有评论已加载完毕`,n.disconnect();return}for(let e of i.replies)this.appendReplyItem(e)});n.observe(e)}},et=`:root {
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
`,tt={getUserSpaceUrl(e){return`https://m.bilibili.com/space/${e}`},getUserSpaceDynamicUrl(e){return`https://m.bilibili.com/dynamic/${e}`},getUserSpaceOpusUrl(e){return`https://m.bilibili.com/opus/${e}`},getVideoUrl(e){return`https://m.bilibili.com/video/${e}`}},B={getVue(e){if(e!=null)return e.__vue__||e.__Ivue__||e.__IVue__},getVue3(e){if(e!=null)return e.__vueParentComponent},waitVuePropToSet(e,t){Array.isArray(t)||(t=[t]);function n(){let t=null;return typeof e==`string`?t=k.selector(e):typeof e==`function`?t=e():e instanceof HTMLElement&&(t=e),t}t.forEach(e=>{typeof e.msg==`string`&&j.info(e.msg);let t=function(){let t=n();if(t==null)return{status:!1,isTimeout:!0,inst:null,$el:t};let r=B.getVue(t);return r==null?{status:!1,isTimeout:!1,inst:null,$el:t}:{status:!!e.check(r,t),isTimeout:!1,inst:r,$el:t}};O.waitVueByInterval(()=>n(),()=>t().status,250,1e4).then(()=>{let n=t();if(n.status){let t=n.inst;e.set(t,n.$el)}else typeof e.failWait==`function`&&e.failWait(n.isTimeout)})})},watchVuePropChange(e,t,n,r,i){let a=O.assign({immediate:!0,deep:!1},r||{});return new Promise(r=>{B.waitVuePropToSet(e,{check(e){return typeof e?.$watch==`function`},set(e){let i=null;i=typeof t==`function`?e.$watch(()=>t(e),(t,r)=>{n(e,t,r)},a):e.$watch(t,(t,r)=>{n(e,t,r)},a),r(i)},failWait:i})})},goToUrl(e,t,n=!1){if(e==null){r.default.error(`跳转Url: $vueNode为空`),j.error(`跳转Url: $vueNode为空：`+t);return}let i=B.getVue(e);if(i==null){r.default.error(`获取vue属性失败`,{consoleLogContent:!0});return}let a=i.$router,o=!0;if(j.info(`即将跳转URL：`+t),n&&(o=!1),o)window.open(t,`_blank`);else{if(t.startsWith(`http`)||t.startsWith(`//`)){t.startsWith(`//`)&&(t=window.location.protocol+t);let e=new URL(t);if(e.origin===window.location.origin)t=e.pathname+e.search+e.hash;else{j.info(`不同域名，直接本页打开，不用Router：`+t),window.location.href=t;return}}j.info(`$router push跳转Url：`+t),a.push(t)}},hookGestureReturnByVueRouter(e){function t(){j.success(`触发popstate事件`),r(!0)}function n(){j.success(`监听地址改变`),e.vueInst.$router.history.push(e.hash),k.on(b,`popstate`,t)}async function r(n=!1){if(k.off(b,`popstate`,t),!e.callback(n))for(;;)if(e.vueInst.$router.history.current.hash===e.hash)j.info(`后退！`),e.vueInst.$router.back(),await O.sleep(250);else return}return n(),{resumeBack:r}}},V={goToUrl(e,t=!1){let n=D.getValue(`bili-go-to-url-blank`);if(j.info(`即将跳转URL：`+e),t&&(n=!1),n)window.open(e,`_blank`);else{if(e.startsWith(`http`)||e.startsWith(`//`)){e.startsWith(`//`)&&(e=window.location.protocol+e);let t=new URL(e);if(t.origin===window.location.origin)e=t.pathname+t.search+t.hash;else{j.info(`不同域名，直接本页打开，不用Router：`+e),window.location.href=e;return}}j.info(`$router push跳转Url：`+e);let n=P(`#app`);if(n==null){if(!t){window.location.href=e;return}r.default.error(`跳转Url: 获取根元素#app失败`),j.error(`跳转Url: 获取根元素#app失败：`+e);return}let i=B.getVue(n);if(i==null){if(!t){window.location.href=e;return}j.error(`获取#app的vue属性失败`),r.default.error(`获取#app的vue属性失败`);return}i.$router.push(e)}},goToLogin(e=``){window.open(`https://passport.bilibili.com/h5-app/passport/login?gourl=${encodeURIComponent(e)}`)},parseDuration(e){if(typeof e!=`number`&&(e=parseInt(e)),isNaN(e))return e.toString();function t(e){return e<10?`0${e}`:e}return e<60?`0:${t(e)}`:e>=60&&e<3600?`${Math.floor(e/60)}:${t(e%60)}`:`${Math.floor(e/3600)}:${t(Math.floor(e/60)%60)}:${t(e%60)}`},parseCount(e){let t=e.toString();if(e>1e4){let n=(e/1e4).toFixed(2).slice(0,-1);n.endsWith(`.0`)&&(n=n.slice(0,-2)),t=`${n}万`}else if(e>1e4*1e4){let n=(e/(1e4*1e4)).toFixed(2).slice(0,-1);n.endsWith(`.0`)&&(n=n.slice(0,-2)),t=`${n}亿`}return t},hookGestureReturnByVueRouter(e){function t(){j.success(`触发popstate事件`),r(!0)}function n(){j.success(`监听地址改变`),e.vueInst.$router.history.push(e.hash),k.on(window,`popstate`,t)}async function r(n=!1){if(k.off(window,`popstate`,t),!e.callback(n))for(;;)if(e.vueInst.$router.history.current.hash===e.hash)j.info(`后退！`),e.vueInst.$router.back(),await O.sleep(250);else return}return n(),{resumeBack:r}},initialScale(){j.info(`设置<meta>的viewport固定缩放倍率为1并移除页面原有的<meta>`),k.onReady(()=>{let e=k.createElement(`meta`,{},{name:`viewport`,content:`width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover`});k.remove(`meta[name='viewport']`),k.waitNode(`head`).then(()=>{document.head.appendChild(e)})})}},nt=class{isBacking=!1;config;constructor(e){this.config=e,this.enterGestureBackMode=this.enterGestureBackMode.bind(this),this.quitGestureBackMode=this.quitGestureBackMode.bind(this),this.popStateEvent=this.popStateEvent.bind(this),(typeof this.config.backDelayTime!=`number`||isNaN(this.config.backDelayTime))&&(this.config.backDelayTime=150),this.config.win??(this.config.win=self)}popStateEvent(e){k.preventEvent(e),!this.isBacking&&this.quitGestureBackMode(!0)}enterGestureBackMode(){j.success(`进入手势模式`);let e=this.config.hash;e.startsWith(`#`)||(e.startsWith(`/`)||(e=`/`+e),e=`#`+e),this.config.useUrl&&(e=this.config.win.location.origin+this.config.win.location.pathname+this.config.win.location.search+e),this.config.win.history.pushState({},``,e),j.success(`监听popstate事件`),k.on(this.config.win,`popstate`,this.popStateEvent,{capture:!0})}async quitGestureBackMode(e=!1){this.isBacking=!0,j.success(`退出手势模式`),typeof this.config.beforeHistoryBackCallBack==`function`&&this.config.beforeHistoryBackCallBack(e);let t=Date.now()+1e3*5;for(;;){if(Date.now()>t){j.error(`未知情况，history.back()失败，无法退出手势模式`);break}if(this.config.win.location.hash.endsWith(this.config.hash))j.info(`history.back()`),this.config.win.history.back(),await n.default.sleep(this.config.backDelayTime||150);else break}j.success(`移除popstate事件`),k.off(this.config.win,`popstate`,this.popStateEvent,{capture:!0}),this.isBacking=!1,typeof this.config.afterHistoryBackCallBack==`function`&&this.config.afterHistoryBackCallBack(e)}},rt={mergeAidOrBvidSearchParamsData(e,t){if(`aid`in t&&t.aid!=null)Reflect.set(e,`aid`,t.aid);else if(`bvid`in t&&t.bvid!=null)Reflect.set(e,`bvid`,t.bvid);else throw TypeError(`avid or bvid must give one`)}},it={async playUrl(e,t){let n={cid:e.cid,qn:e.qn??Ue[`1080P60 高帧率`],high_quality:e.high_quality??1,fnval:e.fnval??1,fnver:e.fnver??0,fourk:e.fourk??1,try_look:+!await Je.$data.isLogin,platform:e.setPlatformHTML5?`html5`:`pc`};rt.mergeAidOrBvidSearchParamsData(n,e),typeof t==`object`&&t&&Object.assign(n,t);let r=await M.get(`https://${I.web_host}/x/player/playurl?`+O.toSearchParamsStr(n),{responseType:`json`,fetch:!0});if(!r.status)return;let i=O.toJSON(r.data.responseText);if(i.code===0)return i.data},async onlineTotal(e){let t={cid:e.cid};rt.mergeAidOrBvidSearchParamsData(t,e);let n=await M.get(`https://${I.web_host}/x/player/online/total?${O.toSearchParamsStr(t)}`,{responseType:`json`,fetch:!0});if(!n.status)return;let r=O.toJSON(n.data.responseText);return L.isWebApiSuccess(r)||j.error(`获取在线观看人数失败: `,r),r.data},async like(e){let t={like:e.like,csrf:(await Me.get(`bili_jct`))?.value||``};rt.mergeAidOrBvidSearchParamsData(t,e);let n=await M.get(`https://${I.web_host}/x/web-interface/archive/like?`+O.toSearchParamsStr(t),{fetch:!0});if(!n.status)return!1;let i=O.toJSON(n.data.responseText),a=i.code;return a===0?!0:(a===-101?r.default.error(`账号未登录`):a===-111?r.default.error(`csrf校验失败`):a===-400?r.default.error(`请求错误`):a===-403?r.default.error(`账号异常`):a===10003?r.default.error(`不存在该稿件`):a===65004?r.default.error(`取消点赞失败`):a===65006?r.default.warning(`重复点赞`):r.default.error(`未知错误：`+i.message),!1)}},at=`/* 设置播放器基础宽高 */
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
`,ot={30216:`64K`,30232:`132K`,30280:`192K`,30250:`杜比全景声`,30251:`Hi-Res无损`},st=class{$data={KEY:`art-player-danmaku-option`,localArtDanmakuOption:{}};constructor(e){this.$data.KEY=e;let t=this.getDefaultDanmakuOption();this.$data.localArtDanmakuOption=O.assign(t,se(this.$data.KEY,{}))}getDefaultDanmakuOption(){return{speed:5,margin:[10,`75%`],opacity:1,modes:[0,1,2],fontSize:18,antiOverlap:!1,synchronousPlayback:!0,visible:!0}}getLocalArtDanmakuOption(){return this.$data.localArtDanmakuOption}onConfigChange(e){e.on(`artplayerPluginDanmuku:config`,e=>{Object.keys(this.$data.localArtDanmakuOption).forEach(t=>{if(Reflect.has(e,t)){let n=Reflect.get(e,t);Reflect.set(this.$data.localArtDanmakuOption,t,n)}}),fe(this.$data.KEY,this.$data.localArtDanmakuOption)})}},ct=`[artplayer-plugin-m4sAudioSupport]：`,lt=`setting-bilibili-m4sAudio`,H={$flag:{isIntervaling:!1},intervalHandler(e,t=2,n=900){if(H.$flag.isIntervaling)return;H.$flag.isIntervaling=!0;let r=0,i,a=()=>{if(r>t){H.$flag.isIntervaling=!1,clearInterval(i);return}if(typeof e==`function`)try{e()}catch(e){console.error(ct,e)}r++};a(),t>1?i=setInterval(a,n):H.$flag.isIntervaling=!1}},U={$key:{plugin_KEY:`plugin-bilibili-m4sAudio`},$data:{art:null,audio:new Audio,latestSyncTime:0,reconnectConfig:{maxCount:5,delayTime:1e3},reconnectInfo:{url:``,count:0},option:null},userEvent:{onRestart:void 0},events:{play:()=>{U.handler.play(),U.handler.syncVolume(),U.handler.syncMuted(),H.intervalHandler(()=>{U.handler.syncTime()},1)},seek:e=>{H.intervalHandler(()=>{U.handler.syncTime(),U.handler.syncPlayState()})},pause:()=>{H.intervalHandler(()=>{U.handler.syncTime()},1),U.handler.pause()},restart:e=>{if(typeof U.userEvent.onRestart==`function`){let t=U.userEvent.onRestart(e);U.handler.playUrl(t)}H.intervalHandler(()=>{U.handler.syncTime()},1),U.handler.syncPlayState()},muted:e=>{U.handler.syncVolume(),U.handler.syncMuted()},destroy:()=>{U.handler.pause()},error:(e,t)=>{U.handler.pause()},resize:()=>{H.intervalHandler(()=>{U.handler.syncTime()})},fullscreen:()=>{H.intervalHandler(()=>{U.handler.syncTime()})},"video:ended":()=>{U.handler.pause()},"video:ratechange":()=>{U.handler.syncPlayBackRate()},"video:waiting":()=>{U.handler.pause()},"video:playing":()=>{H.intervalHandler(()=>{U.handler.syncTime()},1),U.handler.play()},"video:pause":()=>{U.handler.pause(),H.intervalHandler(()=>{U.handler.syncTime()},1)},"video:volumechange":()=>{U.handler.syncVolume(),U.handler.syncMuted(),U.handler.syncPlayState()},"video:timeupdate":()=>{let e=U.$data.art.currentTime;Math.abs(e-U.$data.latestSyncTime)>=3&&(U.$data.latestSyncTime=e,H.intervalHandler(()=>{U.handler.syncTime(.777)},1))}},audioEvents:{loadedmetadata:e=>{U.$data.art.emit(`m4sAudio:loadedmetadata`,e),console.log(ct+`Audio预加载完成`),U.$data.reconnectInfo.count=0,U.$data.reconnectInfo.url=``,U.$data.latestSyncTime=0,U.handler.syncPlayState(),U.handler.syncPlayBackRate(),U.handler.syncVolume(),U.handler.syncMuted(),H.intervalHandler(()=>{U.handler.syncTime()})},canplaythrough:e=>{U.$data.art.emit(`m4sAudio:canplaythrough`,e),console.log(ct+`浏览器估计该音频可以在不停止内容缓冲的情况下播放媒体直到结束`),H.intervalHandler(()=>{U.handler.syncTime()})},error:e=>{U.$data.art.emit(`m4sAudio:error`,e),console.error(`[artplayer-plugin-m4sAudioSupport]：Audio加载失败`,e),O.isNull(U.$data.reconnectInfo.url)&&(U.$data.reconnectInfo.url=U.$data.audio.src),U.$data.reconnectInfo.count<U.$data.reconnectConfig.maxCount?(console.log(`[artplayer-plugin-m4sAudioSupport]：Audio第${U.$data.reconnectInfo.count+1}次尝试重新连接`),U.$data.art.notice.show=`Audio第${U.$data.reconnectInfo.count+1}次尝试重新连接`,U.$data.reconnectInfo.count++,setTimeout(()=>{U.handler.playUrl(``),U.handler.playUrl(U.$data.reconnectInfo.url),U.$data.audio.load()},U.$data.reconnectConfig.delayTime)):(console.error(`[artplayer-plugin-m4sAudioSupport]：Audio已超出重连次数`),U.$data.art.notice.show=`Audio已超出重连次数，请尝试切换源`)}},handler:{playUrl(e){typeof e==`string`&&(U.$data.audio.src=e,U.unbindAudio(),O.isNotNull(e)&&U.bindAudio(),U.$data.art.emit(`m4sAudio:restart`,e),U.handler.syncTime(),U.handler.syncPlayState())},play(){U.$data.audio.paused&&(U.$data.audio.play(),U.$data.art.emit(`m4sAudio:play`))},pause(){U.$data.audio.paused||(U.$data.audio.pause(),U.$data.art.emit(`m4sAudio:pause`))},syncPlayState(){U.$data.art.playing?this.play():this.pause(),U.$data.art.emit(`m4sAudio:syncPlayState`)},syncTime(e=.1){let t=U.$data.art.currentTime,n=U.$data.audio.currentTime;Math.abs(t-n)>=Math.abs(e)&&(U.$data.audio.currentTime=t,this.syncVolume(),this.syncMuted(),U.$data.art.emit(`m4sAudio:syncTime`))},syncVolume(){U.$data.audio.volume=U.$data.art.volume,U.$data.art.emit(`m4sAudio:syncVolume`)},syncMuted(){let e=U.$data.art.muted;U.$data.audio.muted=e,U.$data.art.emit(`m4sAudio:syncMuted`)},syncPlayBackRate(){let e=U.$data.art.playbackRate;e!==U.$data.audio.playbackRate&&(U.$data.audio.playbackRate=e,U.$data.art.emit(`m4sAudio:syncPlayBackRate`))}},update(e){this.unbind(),this.unbindAudio(),this.$data.option=null,this.$data.option=e.audioList,this.$data.latestSyncTime=0;let t=this;if(e.audioList?.length){e.audioList.sort((e,t)=>t.bandwidth-e.bandwidth);let n=e.audioList[0],r=`artplayer-m4s-audio-${e.from}`,i=this.$data.art.storage.get(r),a={index:0,html:n.soundQualityCodeText,url:n.url};if(i){let t=e.audioList.findIndex(e=>e.soundQualityCode===i.soundQualityCode);if(t!==-1){let n=e.audioList[t];a.index=t,a.url=n.url,a.html=n.soundQualityCodeText}else console.warn(ct+`没有找到上次选的音频代码，使用当前默认第一个音频`)}let o=e.audioList.map((e,t)=>({default:t===a.index,html:e.soundQualityCodeText,url:e.url,soundQualityCode:e.soundQualityCode,soundQualityCodeText:e.soundQualityCodeText,codecs:e.codecs,mimeType:e.mimeType,bandwidth:e.bandwidth,size:e.size})),s={name:lt,width:200,html:`音频`,tooltip:a.html,icon:`
				<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
					<path d="M123.5 438.5h131.3v310.7H123.5zM769.2 438.5h131.3v310.7H769.2z"></path>
					<path d="M859.8 398.8h-48.3c-7.9 0-15.4 1.6-22.5 3.9v-32.4c0-125.2-101.9-227.1-227.1-227.1h-99.7c-125.2 0-227.1 101.9-227.1 227.1v32.4c-7.1-2.3-14.6-3.9-22.5-3.9h-48.3c-40.9 0-74.2 33.3-74.2 74.2v243c0 40.9 33.3 74.2 74.2 74.2h48.3c40.9 0 74.2-33.3 74.2-74.2V370.3c0-96.7 78.7-175.4 175.4-175.4h99.7c96.7 0 175.4 78.7 175.4 175.4V716c0 40.9 33.3 74.2 74.2 74.2h48.3c40.9 0 74.2-33.3 74.2-74.2V473c-0.1-40.9-33.3-74.2-74.2-74.2zM235.1 716c0 12.4-10.1 22.5-22.5 22.5h-48.3c-12.4 0-22.5-10.1-22.5-22.5V473c0-12.4 10.1-22.5 22.5-22.5h48.3c12.4 0 22.5 10.1 22.5 22.5v243z m647.2 0c0 12.4-10.1 22.5-22.5 22.5h-48.3c-12.4 0-22.5-10.1-22.5-22.5V473c0-12.4 10.1-22.5 22.5-22.5h48.3c12.4 0 22.5 10.1 22.5 22.5v243z"></path>
					<path d="M531.3 652.3c-1.7 0-3.3-0.1-5-0.4-10.2-1.7-18.7-8.3-22.7-17.8l-41.1-95.4-37 43.8c-8.1 9.6-19.9 15.1-32.5 15.1h-71.9V546h67.6l56.6-67.1c6.8-8.1 17-12 27.5-10.4 10.4 1.5 19.1 8.2 23.3 17.9l41.6 96.7 21.9-24c8-8.8 19.5-13.9 31.4-13.9h102.4v51.7H595l-41.6 45.7c-5.6 6.2-13.7 9.7-22.1 9.7z"></path>
				</svg>
				`,selector:o,onSelect:function(e){let n=e;return console.log(ct+`切换音频`,n),t.handler.playUrl(n.url),t.$data.art.storage.set(r,{soundQualityCode:n.soundQualityCode}),e.html}};U.$data.art.setting.find(lt)?U.$data.art.setting.update(s):U.$data.art.setting.add(s),j.info(`加载m4s的音频：`,a),U.handler.playUrl(a.url),this.bind(),this.bindAudio()}else U.handler.playUrl(``),U.$data.art.setting.option.find(e=>e.name===lt)&&U.$data.art.setting.remove(lt)},bind(){Object.keys(this.events).forEach(e=>{this.$data.art.on(e,this.events[e])})},bindAudio(){Object.keys(this.audioEvents).forEach(e=>{this.$data.audio.addEventListener(e,this.audioEvents[e],{once:!0})})},unbind(){Object.keys(this.events).forEach(e=>{this.$data.art.off(e,this.events[e])})},unbindAudio(){Object.keys(this.audioEvents).forEach(e=>{this.$data.audio.removeEventListener(e,this.audioEvents[e])})}},ut=e=>t=>(U.$data.art=t,typeof e.onRestart==`function`&&(U.userEvent.onRestart=e.onRestart),U.update({from:e.from,audioList:e.audioList}),{name:U.$key.plugin_KEY,update(...e){U.update(...e),U.handler.syncVolume(),U.handler.syncMuted(),U.handler.syncTime()},getAudio(){return U.$data.audio},getCurrentPlayConfig(){return U.$data.option.find(e=>e.url===U.$data.audio.src)}}),dt=U.$key.plugin_KEY,W={show(e){},hide(e){}},ft={events:{control:e=>{e&&G.updateOnlineTotal({showOnlineTotal:G.$data.option.showOnlineTotal,onlineInfoParams:G.$data.option.onlineInfoParams})}},bind(){Object.keys(this.events).forEach(e=>{G.art.on(e,this.events[e])})},unbind(){Object.keys(this.events).forEach(e=>{G.art.off(e,this.events[e])})}},G={art:null,$el:{$topWrap:null,$topTitle:null,$topTitleText:null,$topTitleFollow:null,$topTitleFollowText:null,$topRight:null,$topRightFollow:null},$data:{isInit:!1,__option:{},option:{}},$key:{plugin_KEY:`plugin-bilibili-topToolBar`},init(e){this.art.layers.add({name:`top-wrap`,html:`
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
            `,mounted:async function(t){G.$el.$topWrap=t,G.$el.$topTitle=t.querySelector(`.art-player-top-title`),G.$el.$topTitleText=t.querySelector(`.art-player-top-title-text`),G.$el.$topTitleFollow=t.querySelector(`.art-player-top-follow`),G.$el.$topTitleFollowText=t.querySelector(`.art-player-top-follow-text`),G.$el.$topRight=t.querySelector(`.art-player-top-right`),G.$el.$topRightFollow=t.querySelector(`.art-player-top-right-follow`),W.hide(G.$el.$topTitleFollow),G.update(e),ft.bind()}})},update(e){this.$data.isInit||(this.$data.isInit=!0,Object.defineProperties(this.$data.option,{showWrap:{set(e){G.$data.__option.showWrap=e,e?W.show(G.$el.$topWrap):W.hide(G.$el.$topWrap)},get(){return G.$data.__option.showWrap}},showTitle:{set(e){G.$data.__option.showTitle=e,e?W.show(G.$el.$topTitle):W.hide(G.$el.$topTitle)},get(){return G.$data.__option.showTitle}},title:{set(e){G.$data.__option.title=e,typeof e==`string`&&(G.$el.$topTitleText.innerText=e)},get(){return G.$data.__option.title}},showOnlineTotal:{set(e){G.$data.__option.showOnlineTotal=e,e?W.show(G.$el.$topTitleFollow):W.hide(G.$el.$topTitleFollow)},get(){return G.$data.__option.showOnlineTotal}},onlineInfoParams:{set(e){G.$data.__option.onlineInfoParams=e,G.updateOnlineTotal({showOnlineTotal:this.showOnlineTotal,onlineInfoParams:e})},get(){return G.$data.__option.onlineInfoParams}},showRight:{set(e){G.$data.__option.showRight=e,e?W.show(G.$el.$topRight):W.hide(G.$el.$topRight)},get(){return G.$data.__option.showRight}},showRightFollow:{set(e){G.$data.__option.showRightFollow=e,e?W.show(G.$el.$topRightFollow):W.hide(G.$el.$topRightFollow)},get(){return G.$data.__option.showRightFollow}}})),Object.assign(this.$data.option,e)},async updateOnlineTotal(e){if(!e.showOnlineTotal)return;let t=await it.onlineTotal({aid:e.onlineInfoParams.aid,bvid:e.onlineInfoParams.bvid,cid:e.onlineInfoParams.cid});t&&(G.$el.$topTitleFollowText.innerText=`${t.total||t.count||0}人正在看`)}},pt=e=>t=>(G.art=t,G.init(e),{name:G.$key.plugin_KEY,update(e){G.update(e)}}),mt=G.$key.plugin_KEY,ht={S:`万与丑专业丛东丝丢两严丧个丬丰临为丽举么义乌乐乔习乡书买乱争于亏云亘亚产亩亲亵亸亿仅从仑仓仪们价众优伙会伛伞伟传伤伥伦伧伪伫体余佣佥侠侣侥侦侧侨侩侪侬俣俦俨俩俪俭债倾偬偻偾偿傥傧储傩儿兑兖党兰关兴兹养兽冁内冈册写军农冢冯冲决况冻净凄凉凌减凑凛几凤凫凭凯击凼凿刍划刘则刚创删别刬刭刽刿剀剂剐剑剥剧劝办务劢动励劲劳势勋勐勚匀匦匮区医华协单卖卢卤卧卫却卺厂厅历厉压厌厍厕厢厣厦厨厩厮县参叆叇双发变叙叠叶号叹叽吁后吓吕吗吣吨听启吴呒呓呕呖呗员呙呛呜咏咔咙咛咝咤咴咸哌响哑哒哓哔哕哗哙哜哝哟唛唝唠唡唢唣唤唿啧啬啭啮啰啴啸喷喽喾嗫呵嗳嘘嘤嘱噜噼嚣嚯团园囱围囵国图圆圣圹场坂坏块坚坛坜坝坞坟坠垄垅垆垒垦垧垩垫垭垯垱垲垴埘埙埚埝埯堑堕塆墙壮声壳壶壸处备复够头夸夹夺奁奂奋奖奥妆妇妈妩妪妫姗姜娄娅娆娇娈娱娲娴婳婴婵婶媪嫒嫔嫱嬷孙学孪宁宝实宠审宪宫宽宾寝对寻导寿将尔尘尧尴尸尽层屃屉届属屡屦屿岁岂岖岗岘岙岚岛岭岳岽岿峃峄峡峣峤峥峦崂崃崄崭嵘嵚嵛嵝嵴巅巩巯币帅师帏帐帘帜带帧帮帱帻帼幂幞干并广庄庆庐庑库应庙庞废庼廪开异弃张弥弪弯弹强归当录彟彦彻径徕御忆忏忧忾怀态怂怃怄怅怆怜总怼怿恋恳恶恸恹恺恻恼恽悦悫悬悭悯惊惧惨惩惫惬惭惮惯愍愠愤愦愿慑慭憷懑懒懔戆戋戏戗战戬户扎扑扦执扩扪扫扬扰抚抛抟抠抡抢护报担拟拢拣拥拦拧拨择挂挚挛挜挝挞挟挠挡挢挣挤挥挦捞损捡换捣据捻掳掴掷掸掺掼揸揽揿搀搁搂搅携摄摅摆摇摈摊撄撑撵撷撸撺擞攒敌敛数斋斓斗斩断无旧时旷旸昙昼昽显晋晒晓晔晕晖暂暧札术朴机杀杂权条来杨杩杰极构枞枢枣枥枧枨枪枫枭柜柠柽栀栅标栈栉栊栋栌栎栏树栖样栾桊桠桡桢档桤桥桦桧桨桩梦梼梾检棂椁椟椠椤椭楼榄榇榈榉槚槛槟槠横樯樱橥橱橹橼檐檩欢欤欧歼殁殇残殒殓殚殡殴毁毂毕毙毡毵氇气氢氩氲汇汉污汤汹沓沟没沣沤沥沦沧沨沩沪沵泞泪泶泷泸泺泻泼泽泾洁洒洼浃浅浆浇浈浉浊测浍济浏浐浑浒浓浔浕涂涌涛涝涞涟涠涡涢涣涤润涧涨涩淀渊渌渍渎渐渑渔渖渗温游湾湿溃溅溆溇滗滚滞滟滠满滢滤滥滦滨滩滪漤潆潇潋潍潜潴澜濑濒灏灭灯灵灾灿炀炉炖炜炝点炼炽烁烂烃烛烟烦烧烨烩烫烬热焕焖焘煅煳熘爱爷牍牦牵牺犊犟状犷犸犹狈狍狝狞独狭狮狯狰狱狲猃猎猕猡猪猫猬献獭玑玙玚玛玮环现玱玺珉珏珐珑珰珲琎琏琐琼瑶瑷璇璎瓒瓮瓯电画畅畲畴疖疗疟疠疡疬疮疯疱疴痈痉痒痖痨痪痫痴瘅瘆瘗瘘瘪瘫瘾瘿癞癣癫癯皑皱皲盏盐监盖盗盘眍眦眬着睁睐睑瞒瞩矫矶矾矿砀码砖砗砚砜砺砻砾础硁硅硕硖硗硙硚确硷碍碛碜碱碹磙礼祎祢祯祷祸禀禄禅离秃秆种积称秽秾稆税稣稳穑穷窃窍窑窜窝窥窦窭竖竞笃笋笔笕笺笼笾筑筚筛筜筝筹签简箓箦箧箨箩箪箫篑篓篮篱簖籁籴类籼粜粝粤粪粮糁糇紧絷纟纠纡红纣纤纥约级纨纩纪纫纬纭纮纯纰纱纲纳纴纵纶纷纸纹纺纻纼纽纾线绀绁绂练组绅细织终绉绊绋绌绍绎经绐绑绒结绔绕绖绗绘给绚绛络绝绞统绠绡绢绣绤绥绦继绨绩绪绫绬续绮绯绰绱绲绳维绵绶绷绸绹绺绻综绽绾绿缀缁缂缃缄缅缆缇缈缉缊缋缌缍缎缏缐缑缒缓缔缕编缗缘缙缚缛缜缝缞缟缠缡缢缣缤缥缦缧缨缩缪缫缬缭缮缯缰缱缲缳缴缵罂网罗罚罢罴羁羟羡翘翙翚耢耧耸耻聂聋职聍联聩聪肃肠肤肷肾肿胀胁胆胜胧胨胪胫胶脉脍脏脐脑脓脔脚脱脶脸腊腌腘腭腻腼腽腾膑臜舆舣舰舱舻艰艳艹艺节芈芗芜芦苁苇苈苋苌苍苎苏苘苹茎茏茑茔茕茧荆荐荙荚荛荜荞荟荠荡荣荤荥荦荧荨荩荪荫荬荭荮药莅莜莱莲莳莴莶获莸莹莺莼萚萝萤营萦萧萨葱蒇蒉蒋蒌蓝蓟蓠蓣蓥蓦蔷蔹蔺蔼蕲蕴薮藁藓虏虑虚虫虬虮虽虾虿蚀蚁蚂蚕蚝蚬蛊蛎蛏蛮蛰蛱蛲蛳蛴蜕蜗蜡蝇蝈蝉蝎蝼蝾螀螨蟏衅衔补衬衮袄袅袆袜袭袯装裆裈裢裣裤裥褛褴襁襕见观觃规觅视觇览觉觊觋觌觍觎觏觐觑觞触觯詟誉誊讠计订讣认讥讦讧讨让讪讫训议讯记讱讲讳讴讵讶讷许讹论讻讼讽设访诀证诂诃评诅识诇诈诉诊诋诌词诎诏诐译诒诓诔试诖诗诘诙诚诛诜话诞诟诠诡询诣诤该详诧诨诩诪诫诬语诮误诰诱诲诳说诵诶请诸诹诺读诼诽课诿谀谁谂调谄谅谆谇谈谊谋谌谍谎谏谐谑谒谓谔谕谖谗谘谙谚谛谜谝谞谟谠谡谢谣谤谥谦谧谨谩谪谫谬谭谮谯谰谱谲谳谴谵谶谷豮贝贞负贠贡财责贤败账货质贩贪贫贬购贮贯贰贱贲贳贴贵贶贷贸费贺贻贼贽贾贿赀赁赂赃资赅赆赇赈赉赊赋赌赍赎赏赐赑赒赓赔赕赖赗赘赙赚赛赜赝赞赟赠赡赢赣赪赵赶趋趱趸跃跄跖跞践跶跷跸跹跻踊踌踪踬踯蹑蹒蹰蹿躏躜躯车轧轨轩轪轫转轭轮软轰轱轲轳轴轵轶轷轸轹轺轻轼载轾轿辀辁辂较辄辅辆辇辈辉辊辋辌辍辎辏辐辑辒输辔辕辖辗辘辙辚辞辩辫边辽达迁过迈运还这进远违连迟迩迳迹适选逊递逦逻遗遥邓邝邬邮邹邺邻郁郄郏郐郑郓郦郧郸酝酦酱酽酾酿释里鉅鉴銮錾钆钇针钉钊钋钌钍钎钏钐钑钒钓钔钕钖钗钘钙钚钛钝钞钟钠钡钢钣钤钥钦钧钨钩钪钫钬钭钮钯钰钱钲钳钴钵钶钷钸钹钺钻钼钽钾钿铀铁铂铃铄铅铆铈铉铊铋铍铎铏铐铑铒铕铗铘铙铚铛铜铝铞铟铠铡铢铣铤铥铦铧铨铪铫铬铭铮铯铰铱铲铳铴铵银铷铸铹铺铻铼铽链铿销锁锂锃锄锅锆锇锈锉锊锋锌锍锎锏锐锑锒锓锔锕锖锗错锚锜锞锟锠锡锢锣锤锥锦锨锩锫锬锭键锯锰锱锲锳锴锵锶锷锸锹锺锻锼锽锾锿镀镁镂镃镆镇镈镉镊镌镍镎镏镐镑镒镕镖镗镙镚镛镜镝镞镟镠镡镢镣镤镥镦镧镨镩镪镫镬镭镮镯镰镱镲镳镴镶长门闩闪闫闬闭问闯闰闱闲闳间闵闶闷闸闹闺闻闼闽闾闿阀阁阂阃阄阅阆阇阈阉阊阋阌阍阎阏阐阑阒阓阔阕阖阗阘阙阚阛队阳阴阵阶际陆陇陈陉陕陧陨险随隐隶隽难雏雠雳雾霁霉霭靓静靥鞑鞒鞯鞴韦韧韨韩韪韫韬韵页顶顷顸项顺须顼顽顾顿颀颁颂颃预颅领颇颈颉颊颋颌颍颎颏颐频颒颓颔颕颖颗题颙颚颛颜额颞颟颠颡颢颣颤颥颦颧风飏飐飑飒飓飔飕飖飗飘飙飚飞飨餍饤饥饦饧饨饩饪饫饬饭饮饯饰饱饲饳饴饵饶饷饸饹饺饻饼饽饾饿馀馁馂馃馄馅馆馇馈馉馊馋馌馍馎馏馐馑馒馓馔馕马驭驮驯驰驱驲驳驴驵驶驷驸驹驺驻驼驽驾驿骀骁骂骃骄骅骆骇骈骉骊骋验骍骎骏骐骑骒骓骔骕骖骗骘骙骚骛骜骝骞骟骠骡骢骣骤骥骦骧髅髋髌鬓魇魉鱼鱽鱾鱿鲀鲁鲂鲄鲅鲆鲇鲈鲉鲊鲋鲌鲍鲎鲏鲐鲑鲒鲓鲔鲕鲖鲗鲘鲙鲚鲛鲜鲝鲞鲟鲠鲡鲢鲣鲤鲥鲦鲧鲨鲩鲪鲫鲬鲭鲮鲯鲰鲱鲲鲳鲴鲵鲶鲷鲸鲹鲺鲻鲼鲽鲾鲿鳀鳁鳂鳃鳄鳅鳆鳇鳈鳉鳊鳋鳌鳍鳎鳏鳐鳑鳒鳓鳔鳕鳖鳗鳘鳙鳛鳜鳝鳞鳟鳠鳡鳢鳣鸟鸠鸡鸢鸣鸤鸥鸦鸧鸨鸩鸪鸫鸬鸭鸮鸯鸰鸱鸲鸳鸴鸵鸶鸷鸸鸹鸺鸻鸼鸽鸾鸿鹀鹁鹂鹃鹄鹅鹆鹇鹈鹉鹊鹋鹌鹍鹎鹏鹐鹑鹒鹓鹔鹕鹖鹗鹘鹚鹛鹜鹝鹞鹟鹠鹡鹢鹣鹤鹥鹦鹧鹨鹩鹪鹫鹬鹭鹯鹰鹱鹲鹳鹴鹾麦麸黄黉黡黩黪黾鼋鼌鼍鼗鼹齄齐齑齿龀龁龂龃龄龅龆龇龈龉龊龋龌龙龚龛龟志制咨只里系范松没尝尝闹面准钟别闲乾尽脏拼冲里`,T:`萬與醜專業叢東絲丟兩嚴喪個丬豐臨爲麗舉麼義烏樂喬習鄉書買亂爭於虧雲亙亞產畝親褻嚲億僅從侖倉儀們價衆優夥會傴傘偉傳傷倀倫傖僞佇體餘傭僉俠侶僥偵側僑儈儕儂俁儔儼倆儷儉債傾傯僂僨償儻儐儲儺兒兌兗黨蘭關興茲養獸囅內岡冊寫軍農冢馮沖決況凍淨淒涼凌減湊凜幾鳳鳧憑凱擊凼鑿芻劃劉則剛創刪別剗剄劊劌剴劑剮劍剝劇勸辦務勱動勵勁勞勢勳勐勩勻匭匱區醫華協單賣盧滷臥衛卻巹廠廳歷厲壓厭厙廁廂厴廈廚廄廝縣參靉靆雙發變敘疊葉號嘆嘰籲後嚇呂嗎唚噸聽啓吳嘸囈嘔嚦唄員咼嗆嗚詠咔嚨嚀噝吒咴鹹哌響啞噠嘵嗶噦譁噲嚌噥喲嘜嗊嘮啢嗩唣喚唿嘖嗇囀齧囉嘽嘯噴嘍嚳囁呵噯噓嚶囑嚕噼囂嚯團園囪圍圇國圖圓聖壙場阪壞塊堅壇壢壩塢墳墜壟壠壚壘墾垧堊墊埡墶壋塏堖塒壎堝埝垵塹墮壪牆壯聲殼壺壼處備復夠頭誇夾奪奩奐奮獎奧妝婦媽嫵嫗嬀姍姜婁婭嬈嬌孌娛媧嫺嫿嬰嬋嬸媼嬡嬪嬙嬤孫學孿寧寶實寵審憲宮寬賓寢對尋導壽將爾塵堯尷屍盡層屓屜屆屬屢屨嶼歲豈嶇崗峴嶴嵐島嶺嶽崬巋嶨嶧峽嶢嶠崢巒嶗崍嶮嶄嶸嶔嵛嶁嵴巔鞏巰幣帥師幃帳簾幟帶幀幫幬幘幗冪襆幹並廣莊慶廬廡庫應廟龐廢廎廩開異棄張彌弳彎彈強歸當錄彠彥徹徑徠御憶懺憂愾懷態慫憮慪悵愴憐總懟懌戀懇惡慟懨愷惻惱惲悅愨懸慳憫驚懼慘懲憊愜慚憚慣愍慍憤憒願懾憖憷懣懶懍戇戔戲戧戰戩戶扎撲扦執擴捫掃揚擾撫拋摶摳掄搶護報擔擬攏揀擁攔擰撥擇掛摯攣掗撾撻挾撓擋撟掙擠揮撏撈損撿換搗據捻擄摑擲撣摻摜揸攬撳攙擱摟攪攜攝攄擺搖擯攤攖撐攆擷擼攛擻攢敵斂數齋斕鬥斬斷無舊時曠暘曇晝曨顯晉曬曉曄暈暉暫曖札術樸機殺雜權條來楊榪傑極構樅樞棗櫪梘棖槍楓梟櫃檸檉梔柵標棧櫛櫳棟櫨櫟欄樹棲樣欒桊椏橈楨檔榿橋樺檜槳樁夢檮棶檢櫺槨櫝槧欏橢樓欖櫬櫚櫸檟檻檳櫧橫檣櫻櫫櫥櫓櫞檐檁歡歟歐殲歿殤殘殞殮殫殯毆毀轂畢斃氈毿氌氣氫氬氳匯漢污湯洶沓溝沒灃漚瀝淪滄渢潙滬沵濘淚澩瀧瀘濼瀉潑澤涇潔灑窪浹淺漿澆湞溮濁測澮濟瀏滻渾滸濃潯濜塗涌濤澇淶漣潿渦溳渙滌潤澗漲澀澱淵淥漬瀆漸澠漁瀋滲溫遊灣溼潰濺漵漊潷滾滯灩灄滿瀅濾濫灤濱灘澦漤瀠瀟瀲濰潛瀦瀾瀨瀕灝滅燈靈災燦煬爐燉煒熗點煉熾爍爛烴燭煙煩燒燁燴燙燼熱煥燜燾煅煳熘愛爺牘犛牽犧犢犟狀獷獁猶狽狍獮獰獨狹獅獪猙獄猻獫獵獼玀豬貓蝟獻獺璣璵瑒瑪瑋環現瑲璽珉珏琺瓏璫琿璡璉瑣瓊瑤璦璇瓔瓚甕甌電畫暢畲疇癤療瘧癘瘍癧瘡瘋皰痾癰痙癢瘂癆瘓癇癡癉瘮瘞瘻癟癱癮癭癩癬癲癯皚皺皸盞鹽監蓋盜盤瞘眥矓着睜睞瞼瞞矚矯磯礬礦碭碼磚硨硯碸礪礱礫礎硜硅碩硤磽磑礄確礆礙磧磣鹼碹磙禮禕禰禎禱禍稟祿禪離禿稈種積稱穢穠穭稅穌穩穡窮竊竅窯竄窩窺竇窶豎競篤筍筆筧箋籠籩築篳篩簹箏籌籤簡籙簀篋籜籮簞簫簣簍籃籬籪籟糴類秈糶糲粵糞糧糝餱緊縶糹糾紆紅紂纖紇約級紈纊紀紉緯紜紘純紕紗綱納紝縱綸紛紙紋紡紵紖紐紓線紺紲紱練組紳細織終縐絆紼絀紹繹經紿綁絨結絝繞絰絎繪給絢絳絡絕絞統綆綃絹繡綌綏絛繼綈績緒綾緓續綺緋綽鞝緄繩維綿綬繃綢綯綹綣綜綻綰綠綴緇緙緗緘緬纜緹緲緝縕繢緦綞緞緶線緱縋緩締縷編緡緣縉縛縟縝縫縗縞纏縭縊縑繽縹縵縲纓縮繆繅纈繚繕繒繮繾繰繯繳纘罌網羅罰罷羆羈羥羨翹翽翬耮耬聳恥聶聾職聹聯聵聰肅腸膚肷腎腫脹脅膽勝朧腖臚脛膠脈膾髒臍腦膿臠腳脫腡臉臘醃膕齶膩靦膃騰臏臢輿艤艦艙艫艱豔艹藝節羋薌蕪蘆蓯葦藶莧萇蒼苧蘇檾蘋莖蘢蔦塋煢繭荊薦薘莢蕘蓽蕎薈薺蕩榮葷滎犖熒蕁藎蓀蔭蕒葒葤藥蒞莜萊蓮蒔萵薟獲蕕瑩鶯蓴蘀蘿螢營縈蕭薩蔥蕆蕢蔣蔞藍薊蘺蕷鎣驀薔蘞藺藹蘄蘊藪藁蘚虜慮虛蟲虯蟣雖蝦蠆蝕蟻螞蠶蠔蜆蠱蠣蟶蠻蟄蛺蟯螄蠐蛻蝸蠟蠅蟈蟬蠍螻蠑螿蟎蠨釁銜補襯袞襖嫋褘襪襲襏裝襠褌褳襝褲襉褸襤襁襴見觀覎規覓視覘覽覺覬覡覿覥覦覯覲覷觴觸觶讋譽謄訁計訂訃認譏訐訌討讓訕訖訓議訊記訒講諱謳詎訝訥許訛論訩訟諷設訪訣證詁訶評詛識詗詐訴診詆謅詞詘詔詖譯詒誆誄試詿詩詰詼誠誅詵話誕詬詮詭詢詣諍該詳詫諢詡譸誡誣語誚誤誥誘誨誑說誦誒請諸諏諾讀諑誹課諉諛誰諗調諂諒諄誶談誼謀諶諜謊諫諧謔謁謂諤諭諼讒諮諳諺諦謎諞諝謨讜謖謝謠謗諡謙謐謹謾謫譾謬譚譖譙讕譜譎讞譴譫讖谷豶貝貞負貟貢財責賢敗賬貨質販貪貧貶購貯貫貳賤賁貰貼貴貺貸貿費賀貽賊贄賈賄貲賃賂贓資賅贐賕賑賚賒賦賭齎贖賞賜贔賙賡賠賧賴賵贅賻賺賽賾贗贊贇贈贍贏贛赬趙趕趨趲躉躍蹌跖躒踐躂蹺蹕躚躋踊躊蹤躓躑躡蹣躕躥躪躦軀車軋軌軒軑軔轉軛輪軟轟軲軻轤軸軹軼軤軫轢軺輕軾載輊轎輈輇輅較輒輔輛輦輩輝輥輞輬輟輜輳輻輯轀輸轡轅轄輾轆轍轔辭辯辮邊遼達遷過邁運還這進遠違連遲邇逕跡適選遜遞邐邏遺遙鄧鄺鄔郵鄒鄴鄰鬱郄郟鄶鄭鄆酈鄖鄲醞醱醬釅釃釀釋裏鉅鑑鑾鏨釓釔針釘釗釙釕釷釺釧釤鈒釩釣鍆釹鍚釵鈃鈣鈈鈦鈍鈔鍾鈉鋇鋼鈑鈐鑰欽鈞鎢鉤鈧鈁鈥鈄鈕鈀鈺錢鉦鉗鈷鉢鈳鉕鈽鈸鉞鑽鉬鉭鉀鈿鈾鐵鉑鈴鑠鉛鉚鈰鉉鉈鉍鈹鐸鉶銬銠鉺銪鋏鋣鐃銍鐺銅鋁銱銦鎧鍘銖銑鋌銩銛鏵銓鉿銚鉻銘錚銫鉸銥鏟銃鐋銨銀銣鑄鐒鋪鋙錸鋱鏈鏗銷鎖鋰鋥鋤鍋鋯鋨鏽銼鋝鋒鋅鋶鐦鐗銳銻鋃鋟鋦錒錆鍺錯錨錡錁錕錩錫錮鑼錘錐錦杴錈錇錟錠鍵鋸錳錙鍥鍈鍇鏘鍶鍔鍤鍬鍾鍛鎪鍠鍰鎄鍍鎂鏤鎡鏌鎮鎛鎘鑷鐫鎳鎿鎦鎬鎊鎰鎔鏢鏜鏍鏰鏞鏡鏑鏃鏇鏐鐔钁鐐鏷鑥鐓鑭鐠鑹鏹鐙鑊鐳鐶鐲鐮鐿鑔鑣鑞鑲長門閂閃閆閈閉問闖閏闈閒閎間閔閌悶閘鬧閨聞闥閩閭闓閥閣閡閫鬮閱閬闍閾閹閶鬩閿閽閻閼闡闌闃闠闊闋闔闐闒闕闞闤隊陽陰陣階際陸隴陳陘陝隉隕險隨隱隸雋難雛讎靂霧霽黴靄靚靜靨韃鞽韉鞴韋韌韍韓韙韞韜韻頁頂頃頇項順須頊頑顧頓頎頒頌頏預顱領頗頸頡頰頲頜潁熲頦頤頻頮頹頷頴穎顆題顒顎顓顏額顳顢顛顙顥纇顫顬顰顴風颺颭颮颯颶颸颼颻飀飄飆飈飛饗饜飣飢飥餳飩餼飪飫飭飯飲餞飾飽飼飿飴餌饒餉餄餎餃餏餅餑餖餓餘餒餕餜餛餡館餷饋餶餿饞饁饃餺餾饈饉饅饊饌饢馬馭馱馴馳驅馹駁驢駔駛駟駙駒騶駐駝駑駕驛駘驍罵駰驕驊駱駭駢驫驪騁驗騂駸駿騏騎騍騅騌驌驂騙騭騤騷騖驁騮騫騸驃騾驄驏驟驥驦驤髏髖髕鬢魘魎魚魛魢魷魨魯魴魺鮁鮃鮎鱸鮋鮓鮒鮊鮑鱟鮍鮐鮭鮚鮳鮪鮞鮦鰂鮜鱠鱭鮫鮮鮺鯗鱘鯁鱺鰱鰹鯉鰣鰷鯀鯊鯇鮶鯽鯒鯖鯪鯕鯫鯡鯤鯧鯝鯢鮎鯛鯨鰺鯴鯔鱝鰈鰏鱨鯷鰮鰃鰓鱷鰍鰒鰉鰁鱂鯿鰠鰲鰭鰨鰥鰩鰟鰜鰳鰾鱈鱉鰻鰵鱅鰼鱖鱔鱗鱒鱯鱤鱧鱣鳥鳩雞鳶鳴鳲鷗鴉鶬鴇鴆鴣鶇鸕鴨鴞鴦鴒鴟鴝鴛鷽鴕鷥鷙鴯鴰鵂鴴鵃鴿鸞鴻鵐鵓鸝鵑鵠鵝鵒鷳鵜鵡鵲鶓鵪鵾鵯鵬鵮鶉鶊鵷鷫鶘鶡鶚鶻鶿鶥鶩鷊鷂鶲鶹鶺鷁鶼鶴鷖鸚鷓鷚鷯鷦鷲鷸鷺鸇鷹鸌鸏鸛鸘鹺麥麩黃黌黶黷黲黽黿鼂鼉鞀鼴齇齊齏齒齔齕齗齟齡齙齠齜齦齬齪齲齷龍龔龕龜志制諮只裏系範鬆沒嚐嚐鬧面準鍾別閒乾盡髒拼衝裡`},gt=ht.S,_t=ht.T,vt=(e,t)=>{let n,r,i,a,o=``,s;for(t?(n=gt,r=_t):(n=_t,r=gt),i=0;i<e.length;i++){a=e.charAt(i);let t=e.charCodeAt(i);if(!(t>13312&&t<40899||t>63744&&t<64106)){o+=a;continue}s=n.indexOf(a),s===-1?o+=a:o+=r.charAt(s)}return o},yt={s2t:(e,t)=>{if(t){for(let n=0;n<t.length;n++)e.includes(t[n].src)&&(e=e.replaceAll(t[n].src,t[n].des));return vt(e,!0)}else return vt(e,!0)},t2s:(e,t)=>{if(t){for(let n=0;n<t.length;n++)e.includes(t[n].src)&&(e=e.replaceAll(t[n].src,t[n].des));return vt(e,!1)}else return vt(e,!1)}},K=`[artplayer-plugin-bilibiliCCSubTitle]：`,bt={src:`臟妳為傢蔔餵眾係姊託迴蹟儘封啟`,des:`脏你为家卜喂众系姐托回迹尽对启`,more_src:[`乾脆`,`随著`,`相信著`,`奇蹟`,`拚命`,`採取`,`製造`,`艾連`],more_des:[`干脆`,`随着`,`相信着`,`奇迹`,`拼命`,`采取`,`制造`,`艾伦`],_custom_str:[],generteCustomStr(){for(let e=0;e<this.src.length;e++)this._custom_str.push({src:this.src[e],des:this.des[e]});for(let e=0;e<this.more_src.length;e++)this._custom_str.push({src:this.more_src[e],des:this.more_des[e]})},getCustomStr(){return this._custom_str}},xt={reset(){this.unbind()},bind(){J.art.on(`video:timeupdate`,this.event,this)},unbind(){J.clearSubTitle(),J.art.off(`video:timeupdate`,this.event)},event(){let e=J.art.currentTime,t=q.allSubTitleInfo[q.currentSelectIndex]?.data;if(!t)return;let n=t.find(t=>t.to>=e&&t.from<=e),r=Array.from(J.$el.$subtitle.querySelectorAll(`.art-subtitle-line`));for(let t=0;t<r.length;t++){let i=r[t],{from:a,to:o}=Reflect.get(i,`data-subtitle-line-info`);if(o<=e||a>=e)i.remove();else if(n&&n.from===a&&n.to===o)return}if(n){let e=document.createElement(`div`);e.className=`art-subtitle-line`,Reflect.set(e,`data-subtitle-line-info`,n),e.setAttribute(`data-group`,`0`),e.innerHTML=n.content,J.$el.$subtitle.appendChild(e)}}},q={allSubTitleInfo:[],currentSelectIndex:-1,reset(){this.allSubTitleInfo.length=0,this.currentSelectIndex=-1}},J={art:null,$key:{plugin_KEY:`plugin-bilibili-cc-subtitle`},$el:{$subtitle:null},async update(e){let t=this,n=`artplayer-bili-cc-subtitle-${e.from}`,r={config:{NAME:`setting-bilibili-cc-subtitle`},getDefaultSettingOption:()=>({name:r.config.NAME,width:200,html:`字幕`,tooltip:``,icon:`
					<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 48 48">
						<path d="M0 0h48v48H0z" fill="none"/>
						<path fill="#ffffff" d="M40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM8 24h8v4H8v-4zm20 12H8v-4h20v4zm12 0h-8v-4h8v4zm0-8H20v-4h20v4z"/>
					</svg>
					`,selector:[],onSelect:function(e){let r=e;return t.art.storage.set(n,{lan:r.subTitle_lan}),xt.unbind(),q.currentSelectIndex=r.subTitle_index,r.subTitle_index!==-1&&xt.bind(),e.html}}),getSettingOption:()=>{let e=r.getDefaultSettingOption(),t=r.getDefaultSettingSelector();return e.selector.push(t),e.tooltip=t.html,e},getDefaultSettingSelector:()=>({default:!0,html:`无`,subTitle_lan:``,subTitle_index:0,subTitle_data:[]}),addSetting(e){let r=this.getSettingOption();if(e&&e.length){r.selector.push(...e);let i={index:0,html:r.selector[0].html},a=t.art.storage.get(n);if(a){let e=r.selector.findIndex(e=>e.subTitle_lan===a.lan);if(e!==-1){let t=r.selector[e];console.log(K+`选择字幕：`+t.html),i.index=e,i.html=t.html}else console.warn(K+`没有找到上次选的字幕，使用当前默认无`)}for(let e=0;e<r.selector.length;e++)r.selector[e].default=e===i.index;r.tooltip=i.html,q.currentSelectIndex=i.index}this.isAddSetting()?(console.log(K+`更新字幕菜单`,e??[]),t.art.setting.update(r)):t.art.setting.add(r)},isAddSetting(){return t.art.setting.find(this.config.NAME)!=null}};q.reset(),xt.reset();let i=r.getDefaultSettingSelector();q.currentSelectIndex=0,q.allSubTitleInfo.push({name:i.html,lan:i.subTitle_lan,data:i.subTitle_data}),r.addSetting();let a=[];this.$el.$subtitle=this.art.template.$subtitle;let o={cid:e.cid};if(e.ep_id&&Reflect.set(o,`ep_id`,e.ep_id),e.aid)Reflect.set(o,`aid`,e.aid);else if(e.bvid)Reflect.set(o,`bvid`,e.bvid);else throw TypeError(`avid or bvid must give one`);let s=await M.get(`https://api.bilibili.com/x/player/v2?${O.toSearchParamsStr(o)}`,{fetch:!0,allowInterceptConfig:!1,responseType:`json`,headers:{Host:`www.bilibili.com`,Referer:`https://www.bilibili.com`}});if(!s.status){console.error(K+`网络异常，获取视频的字幕信息失败`,s);return}console.log(K+`视频的字幕信息`,s);let c=O.toJSON(s.data.responseText);if(!L.isWebApiSuccess(c)){console.error(K+`获取视频的字幕信息失败`,c);return}let l=c.data.subtitle.subtitles;if(!l.length){console.warn(K+`字幕列表为空`,c);return}if(l=l.filter(e=>O.isNotNull(e.subtitle_url)),!l.length){console.warn(K+`有字幕列表，但是链接都为空`,c);return}for(let e=0;e<l.length;e++){let t=l[e];console.log(K+`获取字幕链接信息：`+t.subtitle_url);let n=await M.get(t.subtitle_url,{responseType:`json`,allowInterceptConfig:!1,headers:{Referer:`https://www.bilibili.com`,"User-Agent":O.getRandomPCUA()}});if(n.status){console.log(K+`获取字幕信息成功`);let e=O.toJSON(n.data.responseText).body,r=q.allSubTitleInfo.length,i={name:t.lan_doc,lan:t.lan,data:e};i.lan===`ai-zh`&&(i.name+=`（AI）`),q.allSubTitleInfo.push(i),a.push({html:i.name,subTitle_index:r,subTitle_lan:i.lan,subTitle_data:i.data})}else console.error(K+`获取字幕链接信息失败`,n)}if(D.getValue(`bili-bangumi-generateSimpleChineseSubtitle`)){let e=q.allSubTitleInfo.find(e=>e.lan===`zh-Hant`||e.name.includes(`繁体`));if(e){let t=[];e.data.forEach(e=>{let{content:n,...r}=e,i=yt.t2s(n,bt.getCustomStr());t.push({content:i,...r})});let n=`简体（自动生成）`,r=q.allSubTitleInfo.length;q.allSubTitleInfo.push({name:n,lan:`zh-CN-auto`,data:t}),a.push({html:n,subTitle_index:r,subTitle_lan:`zh-CN-auto`,subTitle_data:t})}}console.log(K+`加载视频CC字幕信息`,q.allSubTitleInfo),q.allSubTitleInfo[q.currentSelectIndex].data==null||q.allSubTitleInfo[q.currentSelectIndex].data.length==0||xt.bind(),r.addSetting(a)},clearSubTitle(){this.$el.$subtitle&&(this.$el.$subtitle.innerHTML=``)},updateArtPlayer(e){this.art=e}};function St(e){return t=>(bt.generteCustomStr(),J.updateArtPlayer(t),J.update(e),{name:J.$key.plugin_KEY,update(e){J.update(e)}})}var Ct=J.$key.plugin_KEY,wt=`[artplayer-plugin-epChoose]：`,Tt=(e,t)=>t==null||t==``?e:isNaN(Number(t))?t.toString():`第${t}话 ${e}`,Et=e=>{let t=``,n=e.EP_LIST.map((e,n)=>(e.isDefault&&(t=e.title),{html:e.title,default:e.isDefault,index:n,callback:e.onSelect}));return{name:Y.$key.SETTING_KEY,icon:`<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2295" width="24" height="24"><path d="M983.745542 312.673133a510.516437 510.516437 0 0 0-109.673817-162.745211A510.516437 510.516437 0 0 0 511.999823 0.000353 510.516437 510.516437 0 0 0 149.927922 149.927922 510.516437 510.516437 0 0 0 0.000353 511.999823a510.516437 510.516437 0 0 0 149.927569 362.071902A510.516437 510.516437 0 0 0 511.999823 1023.999294a510.516437 510.516437 0 0 0 362.071902-149.927569A510.516437 510.516437 0 0 0 1023.999294 511.999823c0-69.137584-13.488538-136.121238-40.253752-199.32669z m-62.852348 372.029408a443.779955 443.779955 0 0 1-95.05535 140.994061 441.908508 441.908508 0 0 1-313.73209 129.941935c-59.886283 0-118.042361-11.758333-172.667407-34.851274a443.779955 443.779955 0 0 1-141.029372-95.090661 441.908508 441.908508 0 0 1-129.941934-313.696779c0-59.886283 11.758333-118.042361 34.851274-172.667407a443.779955 443.779955 0 0 1 95.09066-141.029371 441.908508 441.908508 0 0 1 313.696779-129.941935c59.886283 0 118.077671 11.758333 172.667408 34.851274a443.779955 443.779955 0 0 1 141.064682 95.090661 441.908508 441.908508 0 0 1 129.941934 313.696778c0 59.886283-11.793643 118.042361-34.851274 172.667408zM388.413744 706.206519l317.792775-211.86185-317.792775-211.861849v423.723699z" p-id="2296"></path></svg>`,html:`选集`,selector:n,tooltip:t,onSelect:function(e){return typeof e.callback==`function`&&e.callback(e,e.index),e.html},mounted(e,t){e.setAttribute(`data-plugin`,Y.$key.SETTING_KEY)},playNext(){let e=this.selector.findIndex(e=>e.default);e!==-1&&e+1<this.selector.length-1?(e+=1,this.onSelect(this.selector[e])):console.warn(wt+`当前播放列表已无下一集`)}}},Dt={$event:{"video:ended":()=>{console.log(wt+`自动连播启用，播放下一集`),Y.$data.art.setting.find(Y.$key.SETTING_KEY)?.playNext()}},bind(e){Object.keys(this.$event).forEach(t=>{e.on(t,this.$event[t])})},unbind(e){Object.keys(this.$event).forEach(t=>{e.off(t,this.$event[t])})}},Y={$flag:{isInitCSS:!1},$key:{SETTING_KEY:`setting-ep-choose`,PLUGIN_KEY:`plugin-ep-choose`},$data:{art:null},resetEnv(){Object.keys(this.$data).forEach(e=>{Reflect.set(this.$data,e,null)})},init(e,t){this.resetEnv(),this.$data.art=e,Dt.unbind(e),t.automaticBroadcast&&Dt.bind(e),this.$flag.isInitCSS||(this.$flag.isInitCSS=!0,N(`
			.art-setting-panel[data-plugin="${Y.$key.SETTING_KEY}"] .art-setting-item .art-setting-item-left-text{
				max-width: 210px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			`)),this.update(t)},update(e){if(Dt.unbind(this.$data.art),e.EP_LIST==null||e.EP_LIST.length===0)return;let t=Et(e);this.$data.art.setting.find(this.$key.SETTING_KEY)?this.$data.art.setting.update(t):this.$data.art.setting.add(t),e.automaticBroadcast&&Dt.bind(this.$data.art)}},Ot=e=>t=>(Y.init(t,e),{name:Y.$key.PLUGIN_KEY,update(e){Y.update(e)}}),kt=Y.$key.PLUGIN_KEY,At={loading:`<img src="data:image/gif;base64,R0lGODlhWgBaALMOAHR0dAICAnd3dwEBAXh4eAMDAwkJCQ0NDQsLCxwcHA4ODggICHl5eQAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiYWE1ODg5ZS1jN2RmLTRmZmUtYjkzOS0wMmVkMTZhNmNjZDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0I2ODI2NjA1NzhGMTFFNkEyMEVDNzhEOUY1RkQxRjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0I2ODI2NUY1NzhGMTFFNkEyMEVDNzhEOUY1RkQxRjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjljYjgzNjY2LWYxYWUtNGMyZi1hMGEwLThhODJmYjIxM2U0MyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmU1NDE3YzFmLTllODAtMTE3OS04NjdiLWUyN2Y3M2VkMTZkOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAkKAA4ALAAAAABaAFoAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsz3Ta3HW+3bjuV7wbg/H7BYXEYu7YGCaVjuDr6Hwqjy2qEzphNlTaIZfi/ZqY2zHZW0KL1RVGeRS2wiXD+ad+x8jZHXx9GX9MO2GDG3mGGG52iX5ojUFVRWWXmJmam1IknJ+goXoioqWmnHSnqquUpDxVsLGys7S1tk6Uj4dIt72+v7K5IcKQF8R7r1asPC7HHs7L0Z3Ogclr0tES1BzH2NiLSMPWUcnAsd7gTboaxLnm77e527vq2uMm8FXy98/j8z77woFoxw9Fp2pI/mUgKBDMQXrp3iATqNBeD3rMIBaqN9BfwWsZ/7kBmpTwo0aLHIF4kchupIWAKftRLHgpDYeND7skq2jMY0NyjlgqwnlRZ8mfCDlCqyO0A1E7MJueBBrTnc0RG1lGXbfQZ0w8sFLEAhmRK0khKJtWConv6lZXaKlKNWpmyk6TJxVqoWvw7iu49fQyLOrJWitx4QTzQhnX4sTAeLsmjuyO8cWcLScjFan5K9kkl9KapSuG50vDlFtlkjtaNGvEkDeDXIlprsrOts+WjkzVUZmrkmN7zsu7dzkiK3OTRl78NO7WQenK7vkc9u7pt9UJrZz0+vDMwpVPGGuBPOfwrbO/8SbNu3j1oNkvc5/+s3T5oraYhn8f/6e1zfFHQZY+BPbiWkdIFajgLMs9ZgoX+1nmn0upYOfchPK95iCG+L034HHpAAAAh6V4OOAsQYh4hAAC3EJAMO3VV55WmLBYiwAv+pKiirzoE+CGDbAoZFu4eCGiiOdYCBgPQrK4wiVHXlDJk0w4mUUZAGgAXApNDtmMkVn+0KWVLhxppojFsHBmlGm26eabcMYp55x01mnnnXjSEAEAIfkECQoADgAsAAAAAFoAWgAABP/QyUmrvTjrzbv/YCiOZGmeaKqubOu+cCxbTT3fX23jfKbXDEZvSPk1gkSiMShM8pZMZ1HngjalEiPLip1qUdZr12Hcmbhj73eETlMY5QbpxxS7JfCyqH2v5NccfH1+cR6CgxVxchqHiIR6GGGOG38/kXRIkxyVR2SKn6CFbKGkpaangDmoq6ytdh2tsbKhmaqzpHW5uru8lbWGOr3Cw8TFvJghmMbLUVvBrxvImmq/sM+Jt9mWE9K2R2La4VRZ1yDdnuLaTefWQFfp4kjsgeXo38z4xMjz0fXK+QB37asHzB03gkqu8WPkD+GQgQbNNYxIY1zBRf0MLvQx8duFVBn/zXDU6DBkrXllqo3cdokkxYsnEaZUudJiRZceJVI8N5NmTZsHcfpcGXOnpBCcRJITCo2h0afuhlISFdTjxpY57RW91/QDJ3AKSzrNyi5XCl/vwr5sB6RqtToZPZhdalXs2LRrvXwEqgEuXXl2ia4Ty7Jq1qX0mO4pt7DbTDWJ6+aNnKkx48duu2oVchVrZcKXqW6+yzmw58GTR4eie/im5NZsP6emhUsqRNiUUeO2F4cJqGanRycLvfs3kqSmb0sNLnxvzyvIlyvXzPyqMD9oqU9fHLEzLwy7TJZOTfovdRF+y3d2ThZeNsDkBRt272r87vLz6Z+Kst71L/2x8GcapHsqBWTgMOZxB9uBDIbXnDcAAricaxFKeB42FUY4IYbpHJCAAgYYsEABoQRgYgA6nIiicaNw9VUQ/zCoIhMz6tKfBcco84MAAjTIQI0/npjjfZtspQiPKdTogJI4AgcGKDwKoIKQKprok5MpCFBGlEgmWSWTPPBoBJctBCkklmFyKaULZgYwVxJqwnDmhtN4hWadJtyJ55589unnn4AGKuigG0QAACH5BAkKAA4ALAAAAABaAFoAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsW009319t43ym1wxGb0j5NYJEojEoTPKWTOfzF5VOfi1o0yoxNlTaLdf7PXmr3CvZpE1bGORyKOx+x+Udev0CX3vaexhBcRyAgRmDXhp6U3ghfVQ+VEhDd5aXmJmajjmbnp+gOiShpKWWlCCmqqtHYn86TLGys7S1tre3kyKTuL2+v7mwrnnChxi6c8VqrFnKqc4OrNJ4yM9AYtPSy627xaLZzNHQr9fiNsC22ULVneWR6PC/k+zk3PQk8bHz48Tu/ErC7hXy9q9SwIKLCJZbgaVeooXW7CHsImpgww37ILaTqLGIIotG/zAe7NiPI7cKd1BJ8nMh48mISNidUomIUMuRLzfGdJYyloeHsG5eEyjSH8Qzsx5Byklx6MRjCl/y8olPFg2cNEvu7Jg0BVWPTkmC3MrUZ8VlYLAOG7sO4cWmnEa4zMrWHFOwJ5egmLu2qEm6dvMS1bkUcEKjd+FWOYNyh9bCfQ//7csr8Fm7hAevnAx14Z1thvECDd2Zs1DBmkgrhtwNMWBFS2ZGFs06mevIsnvOBl0bZluxcJEKWfqUt+bSZEP3nDBa9erjp5PvBtrKFS2HvQnbVW2LDxq20K+6BqeqeWuT5Mtnxx48/SdZ4RtDJO4+tb7i4nPm2/+L9/ms/AVYi3Z/tiVmTHx41Vefc/IpuOBupzmYHoMJZoPAAQ5SWEEtwkCGDgHBXOMhEwhuSEuHU+FCAIi48JIiJN/ttVxaQBjCXIxmKPKVjHHgiGOOYUAYERQGlbhRZUNc98KLSXT1woDGtLBjlFRWaeWVWGap5ZZcdumlChEAACH5BAkKAA4ALAAAAABaAFoAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsW009319t43ym1wxGbzj5AYXEoTGITOKWTOfzx2xKHb8W1Ho1NlTba8X7PW25YnJ55I2KLQw1mxp8Y+LyHL1uv6vXGmd9GkF5gXuDHIVkPoiJHYtGF4JEf5aXmJmZJZqdnp+GIaCjpJloHKWpqlCiOlWvsLGys7S1THStR7a7vL2xuCDAj5Oup4dHwxjCHsvJRcW5DXxYqzouzajQ1NXc1hLYG8Dd4zvgx9JI5ONC5o3I2+i+sOSR6NF8e/L6tXTtytr+POyr0k+bnncBbxR8d9AevGkpsjArlnAMQIPEdmTzthFdRQri/zA+k9SBUTiKIjviE/kHojuS/458HOlwCc02Ll9KzOgx5UmGVL6pefUBjxee9XL+dPiQ3Rk3RY3upJnU2MtpuPJBFSEViEWZPs9hNQhLhVSIC5lOBErWDccSZal2tRqTqbmpQgFB2prV1b0mdzHCBKlRrFOGJQ0GRjw4r966dWY2lQvZCivKhic3HIuYMGObjtUiPSx6KWevoz3vdHSVtNLWqo0JGwovnmnXdGkI9smo09bKmteqBafqd2rJyxYP7Vost+PIYYFjvsBcF5kqiZEh3925wq3mSGQJh949881UEmJtxh2Mu7pU5EubD/1+VPzX0unX10R0e2fw+nDTX5l0qXk30IG0xOacgtThtxeCaBGoW3nO+LffhRTWheF+Dk64IYcLqjZOACQGUEABJA6g4orVdNjgPDoAIKNWENYDwA8y/pIhITA2cCNONRIUI44A2MLCj17IyIIRSCp5h4sgIBmjjAAsqYaTPTBJZZUrXInlEFt+CQYZVDoRZgwzTunMCmGWuWYLW74p55x01mnnnXjmqecNEQAAIfkEBQoADgAsAAAAAFoAWgAABP/QyUmrvTjrzbv/YCiOZGmeaKqubOu+cCzP9Nrcdb7duO5XvBuD8fsFhcSi7jhMKh3BF7P5lBxb02HVelUdG9Qtt3vKiinfRjnYdJ6h31LW/XYw0qJvuE65x0FmfBdpah1zghh+ZBmHiIl4jIGOGYo8kTx7NYSbnJ2en5t5oKOkpaEhpqmqo1ofq6+wenQ7mG22t7i5uru8TWyzGr+9w8TFub+AtZODyq7NY7AwyM5IaLHXURPTHttw2NjW1dRgSd/m5NCt3M3Cxm3nrd0c0+3u9rr0z4bs+iP37/zErRMnz0hAdOPi9TNIcGGwg+qY9dg38WFDgRQRFtSWLWNFiRr/HV4KiTGcSCCEMOQrSesiQpO1gIH8Y1IhS4skX0KLKfNCpUXeckacB9FNmjYhhhytWe4kSJsvZWUC4evZSp1EXaqb09MDLo5au1pgks5JOxZIy6pNJmTtBFuXUCCbgkqZPKSWUH4UVU1Y3b4nO4IFY2JuzL/oNroNOpRtYqcq7QbWRzZcRi2KcWJ2ygZmIWiXiWQeufnm4M8pFz8VDXk1466lVI+VbFoz69o7SzXW+xh3ZMC+g07ZNHU2cKyhX3f4aYtQcd6lkWftLd1nrtzVmSpHHH03pbRv/bak7t228HOvuot1jR6ber7U2696z72p/Pm3s5N28q9/se2OReTffYC7AJjQemeMZpx8MSjI230Q6rdghPeV9xuF8lmYyC48kcMLhhJuiIsw9RDo3IitOQbJBsawwQMAANxymA2cwEjjFzZapyFiL8Lo4404iojFET4WCSSRPgRRJABSEJKjDksyGUOUP/pg5AxUPrnMllx26eWXYIYp5phkjhkBADs=">`,state:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 80" width="100" height="100"><defs><path id="pid-64-svgo-a" d="M0 0h80v80H0z"/><path d="M52.546 8.014a3.998 3.998 0 014.222 3.077c.104.446.093.808.039 1.138a2.74 2.74 0 01-.312.881c-.073.132-.16.254-.246.376l-.257.366-.521.73c-.7.969-1.415 1.926-2.154 2.866l-.015.02a240.945 240.945 0 015.986.341l1.643.123.822.066.41.034.206.018.103.008.115.012c1.266.116 2.516.45 3.677.975a11.663 11.663 0 013.166 2.114c.931.87 1.719 1.895 2.321 3.022a11.595 11.595 0 011.224 3.613c.03.157.046.316.068.474l.015.119.013.112.022.206.085.822.159 1.646c.1 1.098.19 2.198.27 3.298.315 4.4.463 8.829.36 13.255a166.489 166.489 0 01-.843 13.213c-.012.127-.034.297-.053.454a7.589 7.589 0 01-.072.475l-.04.237-.05.236a11.762 11.762 0 01-.74 2.287 11.755 11.755 0 01-5.118 5.57 11.705 11.705 0 01-3.623 1.263c-.158.024-.316.052-.475.072l-.477.053-.821.071-1.644.134c-1.096.086-2.192.16-3.288.23a260.08 260.08 0 01-6.578.325c-8.772.324-17.546.22-26.313-.302a242.458 242.458 0 01-3.287-.22l-1.643-.129-.822-.069-.41-.035-.206-.018c-.068-.006-.133-.01-.218-.02a11.566 11.566 0 01-3.7-.992 11.732 11.732 0 01-5.497-5.178 11.73 11.73 0 01-1.215-3.627c-.024-.158-.051-.316-.067-.475l-.026-.238-.013-.119-.01-.103-.07-.823-.132-1.648a190.637 190.637 0 01-.22-3.298c-.256-4.399-.358-8.817-.258-13.233.099-4.412.372-8.811.788-13.197a11.65 11.65 0 013.039-6.835 11.585 11.585 0 016.572-3.563c.157-.023.312-.051.47-.07l.47-.05.82-.07 1.643-.13a228.493 228.493 0 016.647-.405l-.041-.05a88.145 88.145 0 01-2.154-2.867l-.52-.73-.258-.366c-.086-.122-.173-.244-.246-.376a2.74 2.74 0 01-.312-.881 2.808 2.808 0 01.04-1.138 3.998 3.998 0 014.22-3.077 2.8 2.8 0 011.093.313c.294.155.538.347.742.568.102.11.19.23.28.35l.27.359.532.72a88.059 88.059 0 012.06 2.936 73.036 73.036 0 011.929 3.03c.187.313.373.628.556.945 2.724-.047 5.447-.056 8.17-.038.748.006 1.496.015 2.244.026.18-.313.364-.624.549-.934a73.281 73.281 0 011.93-3.03 88.737 88.737 0 012.059-2.935l.533-.72.268-.359c.09-.12.179-.24.281-.35a2.8 2.8 0 011.834-.881zM30.13 34.631a4 4 0 00-.418 1.42 91.157 91.157 0 00-.446 9.128c0 2.828.121 5.656.364 8.483l.11 1.212a4 4 0 005.858 3.143c2.82-1.498 5.55-3.033 8.193-4.606a177.41 177.41 0 005.896-3.666l1.434-.942a4 4 0 00.047-6.632 137.703 137.703 0 00-7.377-4.708 146.88 146.88 0 00-6.879-3.849l-1.4-.725a4 4 0 00-5.382 1.742z" id="pid-64-svgo-d"/><filter x="-15.4%" y="-16.3%" width="130.9%" height="132.5%" filterUnits="objectBoundingBox" id="pid-64-svgo-c"><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feOffset in="SourceAlpha" result="shadowOffsetOuter2"/><feGaussianBlur stdDeviation="3.5" in="shadowOffsetOuter2" result="shadowBlurOuter2"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowBlurOuter2" result="shadowMatrixOuter2"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="shadowMatrixOuter2"/></feMerge></filter></defs><g fill="none" fill-rule="evenodd" opacity=".8"><mask id="pid-64-svgo-b" fill="#fff"><use xlink:href="#pid-64-svgo-a"/></mask><g mask="url(#pid-64-svgo-b)"><use fill="#000" filter="url(#pid-64-svgo-c)" xlink:href="#pid-64-svgo-d"/><use fill="#FFF" xlink:href="#pid-64-svgo-d"/></g></g></svg>`,indicator:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="16" height="16">
        <path d="M16.118 3.667h.382a3.667 3.667 0 013.667 3.667v7.333a3.667 3.667 0 01-3.667 3.667h-11a3.667 3.667 0 01-3.667-3.667V7.333A3.667 3.667 0 015.5 3.666h.382L4.95 2.053a1.1 1.1 0 011.906-1.1l1.567 2.714h5.156L15.146.953a1.101 1.101 0 011.906 1.1l-.934 1.614z" fill="#333"></path>
        <path d="M5.561 5.194h10.878a2.2 2.2 0 012.2 2.2v7.211a2.2 2.2 0 01-2.2 2.2H5.561a2.2 2.2 0 01-2.2-2.2V7.394a2.2 2.2 0 012.2-2.2z" fill="#fff"></path>
        <path d="M6.967 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1zM15.033 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1z" fill="#333"></path>
    </svg>
        `,fullscreenWebOn:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="28" height="28" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_172"><rect width="88" height="88" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_172)"><g transform="matrix(1,0,0,1,44,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-14,-20 C-14,-20 -26,-20 -26,-20 C-27.049999237060547,-20 -27.920000076293945,-19.18000030517578 -27.989999771118164,-18.149999618530273 C-27.989999771118164,-18.149999618530273 -28,-18 -28,-18 C-28,-18 -28,-6 -28,-6 C-28,-4.949999809265137 -27.18000030517578,-4.079999923706055 -26.149999618530273,-4.010000228881836 C-26.149999618530273,-4.010000228881836 -26,-4 -26,-4 C-26,-4 -22,-4 -22,-4 C-20.950000762939453,-4 -20.079999923706055,-4.820000171661377 -20.010000228881836,-5.849999904632568 C-20.010000228881836,-5.849999904632568 -20,-6 -20,-6 C-20,-6 -20,-12 -20,-12 C-20,-12 -14,-12 -14,-12 C-12.949999809265137,-12 -12.079999923706055,-12.819999694824219 -12.010000228881836,-13.850000381469727 C-12.010000228881836,-13.850000381469727 -12,-14 -12,-14 C-12,-14 -12,-18 -12,-18 C-12,-19.049999237060547 -12.819999694824219,-19.920000076293945 -13.850000381469727,-19.989999771118164 C-13.850000381469727,-19.989999771118164 -14,-20 -14,-20z M26,-20 C26,-20 14,-20 14,-20 C12.949999809265137,-20 12.079999923706055,-19.18000030517578 12.010000228881836,-18.149999618530273 C12.010000228881836,-18.149999618530273 12,-18 12,-18 C12,-18 12,-14 12,-14 C12,-12.949999809265137 12.819999694824219,-12.079999923706055 13.850000381469727,-12.010000228881836 C13.850000381469727,-12.010000228881836 14,-12 14,-12 C14,-12 20,-12 20,-12 C20,-12 20,-6 20,-6 C20,-4.949999809265137 20.81999969482422,-4.079999923706055 21.850000381469727,-4.010000228881836 C21.850000381469727,-4.010000228881836 22,-4 22,-4 C22,-4 26,-4 26,-4 C27.049999237060547,-4 27.920000076293945,-4.820000171661377 27.989999771118164,-5.849999904632568 C27.989999771118164,-5.849999904632568 28,-6 28,-6 C28,-6 28,-18 28,-18 C28,-19.049999237060547 27.18000030517578,-19.920000076293945 26.149999618530273,-19.989999771118164 C26.149999618530273,-19.989999771118164 26,-20 26,-20z M-22,4 C-22,4 -26,4 -26,4 C-27.049999237060547,4 -27.920000076293945,4.820000171661377 -27.989999771118164,5.849999904632568 C-27.989999771118164,5.849999904632568 -28,6 -28,6 C-28,6 -28,18 -28,18 C-28,19.049999237060547 -27.18000030517578,19.920000076293945 -26.149999618530273,19.989999771118164 C-26.149999618530273,19.989999771118164 -26,20 -26,20 C-26,20 -14,20 -14,20 C-12.949999809265137,20 -12.079999923706055,19.18000030517578 -12.010000228881836,18.149999618530273 C-12.010000228881836,18.149999618530273 -12,18 -12,18 C-12,18 -12,14 -12,14 C-12,12.949999809265137 -12.819999694824219,12.079999923706055 -13.850000381469727,12.010000228881836 C-13.850000381469727,12.010000228881836 -14,12 -14,12 C-14,12 -20,12 -20,12 C-20,12 -20,6 -20,6 C-20,4.949999809265137 -20.81999969482422,4.079999923706055 -21.850000381469727,4.010000228881836 C-21.850000381469727,4.010000228881836 -22,4 -22,4z M26,4 C26,4 22,4 22,4 C20.950000762939453,4 20.079999923706055,4.820000171661377 20.010000228881836,5.849999904632568 C20.010000228881836,5.849999904632568 20,6 20,6 C20,6 20,12 20,12 C20,12 14,12 14,12 C12.949999809265137,12 12.079999923706055,12.819999694824219 12.010000228881836,13.850000381469727 C12.010000228881836,13.850000381469727 12,14 12,14 C12,14 12,18 12,18 C12,19.049999237060547 12.819999694824219,19.920000076293945 13.850000381469727,19.989999771118164 C13.850000381469727,19.989999771118164 14,20 14,20 C14,20 26,20 26,20 C27.049999237060547,20 27.920000076293945,19.18000030517578 27.989999771118164,18.149999618530273 C27.989999771118164,18.149999618530273 28,18 28,18 C28,18 28,6 28,6 C28,4.949999809265137 27.18000030517578,4.079999923706055 26.149999618530273,4.010000228881836 C26.149999618530273,4.010000228881836 26,4 26,4z M28,-28 C32.41999816894531,-28 36,-24.420000076293945 36,-20 C36,-20 36,20 36,20 C36,24.420000076293945 32.41999816894531,28 28,28 C28,28 -28,28 -28,28 C-32.41999816894531,28 -36,24.420000076293945 -36,20 C-36,20 -36,-20 -36,-20 C-36,-24.420000076293945 -32.41999816894531,-28 -28,-28 C-28,-28 28,-28 28,-28z"></path></g></g></g></svg>`,fullscreenWebOff:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="28" height="28" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_177"><rect width="88" height="88" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_177)"><g transform="matrix(1,0,0,1,44,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-14,-20 C-14,-20 -18,-20 -18,-20 C-19.049999237060547,-20 -19.920000076293945,-19.18000030517578 -19.989999771118164,-18.149999618530273 C-19.989999771118164,-18.149999618530273 -20,-18 -20,-18 C-20,-18 -20,-12 -20,-12 C-20,-12 -26,-12 -26,-12 C-27.049999237060547,-12 -27.920000076293945,-11.180000305175781 -27.989999771118164,-10.149999618530273 C-27.989999771118164,-10.149999618530273 -28,-10 -28,-10 C-28,-10 -28,-6 -28,-6 C-28,-4.949999809265137 -27.18000030517578,-4.079999923706055 -26.149999618530273,-4.010000228881836 C-26.149999618530273,-4.010000228881836 -26,-4 -26,-4 C-26,-4 -14,-4 -14,-4 C-12.949999809265137,-4 -12.079999923706055,-4.820000171661377 -12.010000228881836,-5.849999904632568 C-12.010000228881836,-5.849999904632568 -12,-6 -12,-6 C-12,-6 -12,-18 -12,-18 C-12,-19.049999237060547 -12.819999694824219,-19.920000076293945 -13.850000381469727,-19.989999771118164 C-13.850000381469727,-19.989999771118164 -14,-20 -14,-20z M18,-20 C18,-20 14,-20 14,-20 C12.949999809265137,-20 12.079999923706055,-19.18000030517578 12.010000228881836,-18.149999618530273 C12.010000228881836,-18.149999618530273 12,-18 12,-18 C12,-18 12,-6 12,-6 C12,-4.949999809265137 12.819999694824219,-4.079999923706055 13.850000381469727,-4.010000228881836 C13.850000381469727,-4.010000228881836 14,-4 14,-4 C14,-4 26,-4 26,-4 C27.049999237060547,-4 27.920000076293945,-4.820000171661377 27.989999771118164,-5.849999904632568 C27.989999771118164,-5.849999904632568 28,-6 28,-6 C28,-6 28,-10 28,-10 C28,-11.050000190734863 27.18000030517578,-11.920000076293945 26.149999618530273,-11.989999771118164 C26.149999618530273,-11.989999771118164 26,-12 26,-12 C26,-12 20,-12 20,-12 C20,-12 20,-18 20,-18 C20,-19.049999237060547 19.18000030517578,-19.920000076293945 18.149999618530273,-19.989999771118164 C18.149999618530273,-19.989999771118164 18,-20 18,-20z M-14,4 C-14,4 -26,4 -26,4 C-27.049999237060547,4 -27.920000076293945,4.820000171661377 -27.989999771118164,5.849999904632568 C-27.989999771118164,5.849999904632568 -28,6 -28,6 C-28,6 -28,10 -28,10 C-28,11.050000190734863 -27.18000030517578,11.920000076293945 -26.149999618530273,11.989999771118164 C-26.149999618530273,11.989999771118164 -26,12 -26,12 C-26,12 -20,12 -20,12 C-20,12 -20,18 -20,18 C-20,19.049999237060547 -19.18000030517578,19.920000076293945 -18.149999618530273,19.989999771118164 C-18.149999618530273,19.989999771118164 -18,20 -18,20 C-18,20 -14,20 -14,20 C-12.949999809265137,20 -12.079999923706055,19.18000030517578 -12.010000228881836,18.149999618530273 C-12.010000228881836,18.149999618530273 -12,18 -12,18 C-12,18 -12,6 -12,6 C-12,4.949999809265137 -12.819999694824219,4.079999923706055 -13.850000381469727,4.010000228881836 C-13.850000381469727,4.010000228881836 -14,4 -14,4z M26,4 C26,4 14,4 14,4 C12.949999809265137,4 12.079999923706055,4.820000171661377 12.010000228881836,5.849999904632568 C12.010000228881836,5.849999904632568 12,6 12,6 C12,6 12,18 12,18 C12,19.049999237060547 12.819999694824219,19.920000076293945 13.850000381469727,19.989999771118164 C13.850000381469727,19.989999771118164 14,20 14,20 C14,20 18,20 18,20 C19.049999237060547,20 19.920000076293945,19.18000030517578 19.989999771118164,18.149999618530273 C19.989999771118164,18.149999618530273 20,18 20,18 C20,18 20,12 20,12 C20,12 26,12 26,12 C27.049999237060547,12 27.920000076293945,11.180000305175781 27.989999771118164,10.149999618530273 C27.989999771118164,10.149999618530273 28,10 28,10 C28,10 28,6 28,6 C28,4.949999809265137 27.18000030517578,4.079999923706055 26.149999618530273,4.010000228881836 C26.149999618530273,4.010000228881836 26,4 26,4z M28,-28 C32.41999816894531,-28 36,-24.420000076293945 36,-20 C36,-20 36,20 36,20 C36,24.420000076293945 32.41999816894531,28 28,28 C28,28 -28,28 -28,28 C-32.41999816894531,28 -36,24.420000076293945 -36,20 C-36,20 -36,-20 -36,-20 C-36,-24.420000076293945 -32.41999816894531,-28 -28,-28 C-28,-28 28,-28 28,-28z"></path></g></g></g></svg>`},jt=()=>({container:``,url:``,volume:1,isLive:!1,muted:!1,autoplay:!1,pip:!1,autoMini:!1,screenshot:!1,setting:!0,loop:!1,flip:!0,playbackRate:!0,autoSize:!1,aspectRatio:!1,fullscreen:!0,fullscreenWeb:!0,subtitleOffset:!0,miniProgressBar:!0,mutex:!1,backdrop:!0,playsInline:!1,autoPlayback:!0,airplay:!0,lock:!0,fastForward:!0,theme:y.theme,lang:navigator.language.toLowerCase(),moreVideoAttr:{crossOrigin:`anonymous`},icons:At}),Mt=`[artplayer-plugin-quality]：`,Nt=`artplayer-plugin-quality`,Pt={AVC:7,HEVC:12,AV1:13},Ft=class{art;from;$key={SETTING_KEY:`video-playback-codeid`};constructor(e,t){this.art=e,this.from=t,this.updateSetting()}updateSetting(e){let t=this.getSetting();if(Array.isArray(e?.acceptCodeIdList)){for(let n=0;n<t.selector.length;n++){let r=t.selector[n];e.acceptCodeIdList.findIndex(e=>e.toString()===r.value.toString())===-1&&(t.selector.splice(n,1),n--)}if(!t.selector.find(e=>e.default)&&t.selector.length)if(typeof e?.defaultCodeId==`number`){let n=t.selector.findIndex(t=>t.value===e.defaultCodeId);n===-1?(t.selector[0].default=!0,t.tooltip=t.selector[0].html):(t.selector[n].default=!0,t.tooltip=t.selector[n].html)}else t.selector[0].default=!0,t.tooltip=t.selector[0].html}this.art.setting.find(this.$key.SETTING_KEY)?this.art.setting.update(t):this.art.setting.add(t)}getSetting(){let e=this,t=this.getUserChooseVideoCodingCode(),n=[{html:`AV1`,value:Pt.AV1},{html:`HEVC`,value:Pt.HEVC},{html:`AVC`,value:Pt.AVC}].map(e=>Object.assign(e,{default:e.value===t}));n.find(e=>e.default)||(n=n.map((e,t)=>(e.default=t===0,e)),console.warn(Mt+`没有找到用户选择对应的画质编码，将使用排序第一个的画质：`+n[0].html));let r=n.find(e=>e.default);return{name:this.$key.SETTING_KEY,html:`播放策略`,tooltip:r.html,icon:`<svg t="1727413004405" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3183" width="24" height="24"><path d="M170.666667 256h682.666666c23.466667 0 42.666667 19.2 42.666667 42.666667v170.666666h85.333333V256c0-46.933333-38.4-85.333333-85.333333-85.333333H128c-46.933333 0-85.333333 38.4-85.333333 85.333333v512c0 46.933333 38.4 85.333333 85.333333 85.333333h384v-85.333333H170.666667c-23.466667 0-42.666667-19.2-42.666667-42.666667V298.666667c0-23.466667 19.2-42.666667 42.666667-42.666667z" p-id="3184"></path><path d="M640 512L384 341.333333v341.333334zM968.96 786.346667c1.28-12.373333 1.706667-24.746667 0.426667-36.693334l45.653333-36.266666c4.266667-3.413333 5.12-8.96 2.56-13.653334l-43.946667-76.373333c-2.56-4.693333-8.106667-6.4-13.226666-4.693333l-54.613334 21.333333a146.773333 146.773333 0 0 0-32-17.92l-8.533333-58.026667a10.624 10.624 0 0 0-10.666667-9.386666h-88.32c-5.12 0-9.813333 3.84-10.666666 8.96l-8.533334 58.026666c-11.093333 4.693333-21.76 11.093333-31.573333 17.92l-54.613333-21.333333c-5.12-2.133333-10.666667 0-13.226667 4.693333l-43.946667 76.373334c-2.56 4.693333-1.706667 10.24 2.56 13.653333l45.653334 36.693333c-1.28 12.373333-1.706667 24.746667-0.426667 36.693334l-45.653333 36.266666c-4.266667 3.413333-5.12 8.96-2.56 13.653334l43.946666 76.373333c2.56 4.693333 8.106667 6.4 13.226667 4.693333l54.186667-21.333333c9.813333 7.253333 20.48 13.226667 32 17.92l8.533333 58.026667c0.853333 5.12 5.12 8.96 10.666667 8.96h88.32c5.12 0 9.813333-3.84 10.666666-8.96l8.533334-58.026667c11.093333-4.693333 21.76-11.093333 31.573333-17.92l54.613333 21.333333c5.12 2.133333 10.666667 0 13.226667-4.693333l43.946667-76.373333c2.56-4.693333 1.706667-10.24-2.56-13.653334l-45.226667-36.266666zM810.666667 832c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64z" p-id="3185"></path></svg>`,selector:n,onSelect:function(t){let n=t.value;return e.setCurrentVideoCodingCode(n),e.onSettingSelect(n),t.html}}}onSettingSelect(e){}get storageVideoCodingKey(){return`bili-${this.from}-artplayer-videoCodingCode`}setCurrentVideoCodingCode(e){this.art.storage.set(this.storageVideoCodingKey,e)}getUserChooseVideoCodingCode(){let e=this.art.storage.get(this.storageVideoCodingKey)||Pt.AV1;return Object.values(Pt).includes(e)||(console.error(Mt+`意外情况，选择的编码格式不是允许的编码，将强制使用默认(av1)，防止过滤掉的视频链接为空：`+e),e=Pt.AV1),e}},It=class extends Ft{$data={qualityOption:null,qualityOptionList:[],qualityCodeIdList:[],currentQualityCodecId:Pt.AV1,currentSelectQualityInfo:null,currentQualityOption:null};constructor(e,t){super(e,t)}setCurrentQualityOption(e=null){this.$data.currentQualityOption=null,this.$data.currentQualityOption=e}getStorageKey(e){return`artplayer-quality-${e}`}update(e){if(this.$data.qualityOption=null,this.$data.qualityOption=e,this.$data.qualityOptionList.length=0,this.$data.qualityCodeIdList.length=0,this.$data.currentSelectQualityInfo=null,this.$data.currentQualityCodecId=void 0,this.setCurrentQualityOption(),e.qualityList.length){let e=this.getQualityInfo();this.addControls(),super.updateSetting({acceptCodeIdList:this.$data.qualityCodeIdList,defaultCodeId:this.$data.currentQualityCodecId}),this.art.url=e.url}else this.removeControls()}getControlsOption(){let e=this,t=this.$data.qualityOptionList.map((e,t)=>({default:t===this.$data.currentSelectQualityInfo?.index,html:e.html,url:e.url,quality:e.quality,frameRate:e.frameRate,mimeType:e.mimeType,codecid:e.codecid,codecs:e.codecs,bandwidth:e.bandwidth}));return{name:Nt,index:10,position:`right`,html:this.$data.currentSelectQualityInfo.html,selector:t,onSelect:function(t){let n=t;return console.log(Mt+`切换画质`,n),e.art.switchQuality(n.url),e.art.storage.set(e.getStorageKey(e.$data.qualityOption.from),{quality:n.quality}),e.setCurrentQualityOption({html:n.html,url:n.url,quality:n.quality,frameRate:n.frameRate,mimeType:n.mimeType,codecid:n.codecid,codecs:n.codecs,bandwidth:n.bandwidth}),t.html}}}addControls(){if(this.isAddControls())this.updateQualityControls();else{let e=this.getControlsOption();this.art.controls.add(e)}}getQualityInfo(){let e=this.getUserChooseVideoCodingCode(),t=this.$data.qualityOption.qualityList.filter(t=>t.codecid===e);t.sort((e,t)=>t.quality-e.quality);let n={};for(let e=0;e<this.$data.qualityOption.qualityList.length;e++){let t=this.$data.qualityOption.qualityList[e],r=n[t.codecid]||[];r.push(t),n[t.codecid]=r}t.length===0&&(t=Object.values(n)[0],this.$data.currentQualityCodecId=t[0].codecid,console.warn(Mt+`该画质：`+e+`不存在，将使用第一个画质`,t)),this.$data.qualityOptionList=[],this.$data.qualityOptionList=t,this.$data.qualityCodeIdList=Object.keys(n);let r=t[0],i=this.getStorageKey(this.$data.qualityOption.from),a=this.art.storage.get(i),o={index:0,html:r?.html,url:r?.url};if(this.setCurrentQualityOption(t[0]),a){let e=t.findIndex(e=>e.quality===a.quality);if(e!==-1){let n=t[e];o.index=e,o.url=n.url,o.html=n.html,this.setCurrentQualityOption(n)}else console.warn(Mt+`没有找到上次选的画质，使用当前默认第一个画质`)}return this.$data.currentSelectQualityInfo=null,this.$data.currentSelectQualityInfo=o,o}updateQualityControls(){let e=this.getControlsOption();console.log(Mt+`更新画质切换面板信息`,this.$data.qualityOptionList,this.$data.currentQualityOption),this.art.controls.update(e)}removeControls(){this.isAddControls()&&this.art.controls.remove(Nt)}isAddControls(){return Reflect.has(this.art.controls,Nt)}onSettingSelect(e){this.getQualityInfo(),this.updateQualityControls(),this.updateSetting({acceptCodeIdList:this.$data.qualityCodeIdList,defaultCodeId:this.$data.currentQualityCodecId}),this.$data.currentSelectQualityInfo&&(this.art.url=this.$data.currentSelectQualityInfo.url)}},Lt=e=>t=>{let n=new It(t,e.from);return n.update(e),{name:Nt,update(e){n.update(e)},getCurrentQualityOption(){return n.$data.currentQualityOption}}},Rt={$data:{art:null},$key:{plugin_KEY:`artplayer-plugin-toast`},$flag:{isInitCSS:!1},$config:{originToast:`art-layer-auto-playback`,hideClassName:`art-toast-hide-opacity`,prefix:`mplayer-toast-gm`},$el:{get $originPlayer(){return P(`.art-video-player .art-layers`)}},toast(e){typeof e==`string`&&(e={text:e}),this.initCSS();let t=e.parent??this.$el.$originPlayer;if(!t)throw TypeError(`toast parent is null`);this.mutationMPlayerOriginToast(t);let n=k.createElement(`div`,{"data-from":`gm`});if(k.addClass(n,this.$config.prefix),e.showCloseBtn){let e=k.createElement(`div`,{className:this.$config.prefix+`-close`,innerHTML:`
                    <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="m571.733 512 268.8-268.8c17.067-17.067 17.067-42.667 0-59.733-17.066-17.067-42.666-17.067-59.733 0L512 452.267l-268.8-268.8c-17.067-17.067-42.667-17.067-59.733 0-17.067 17.066-17.067 42.666 0 59.733l268.8 268.8-268.8 268.8c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.534 19.2 12.8 29.866 12.8s21.334-4.266 29.867-12.8l268.8-268.8 268.8 268.8c8.533 8.534 19.2 12.8 29.867 12.8s21.333-4.266 29.866-12.8c17.067-17.066 17.067-42.666 0-59.733L571.733 512z"></path></svg>
                `});n.appendChild(e),k.on(e,`click`,e=>{k.preventEvent(e),this.closeToast(n)},{capture:!0})}let r=k.createElement(`span`,{className:this.$config.prefix+`-text`,innerText:e.text});if(n.appendChild(r),typeof e.timeText==`string`&&e.timeText.trim()!=``){let t=k.createElement(`span`,{className:this.$config.prefix+`-time`,innerText:e.timeText});n.appendChild(t)}if(typeof e.jumpText==`string`&&e.jumpText.trim()!=``){let t=k.createElement(`span`,{className:this.$config.prefix+`-jump`,innerText:e.jumpText});n.appendChild(t),k.on(t,`click`,t=>{typeof e.jumpClickCallback==`function`&&(k.preventEvent(t),e.jumpClickCallback(t))},{capture:!0})}this.setTransitionendEvent(n,e);let i=typeof e.timeout==`number`&&!isNaN(e.timeout)?e.timeout:3500;t.appendChild(n);let a=setTimeout(()=>{this.closeToast(n)},i);return{$toast:n,timeoutId:a,close:()=>{clearTimeout(a),this.closeToast(n)}}},initCSS(){this.$flag.isInitCSS||(this.$flag.isInitCSS=!0,N(`
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
		`),N(`
        .${this.$config.hideClassName}{
            opacity: 0;
            visibility: hidden;
        }
        `))},mutationMPlayerOriginToast(e){let t=this.$el.$originPlayer;t&&(t.hasAttribute(`data-mutation`)||(j.success(`添加观察器，动态更新toast的位置`),t.setAttribute(`data-mutation`,`gm`),O.mutationObserver(t,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{this.updatePageToastBottom()}})))},updatePageToastBottom(){let e=Array.from(F(`.${this.$config.prefix}`)).concat(Array.from(F(`.${this.$config.originToast}`)));if(e.length){let t=e.length-1;e.forEach((e,n)=>{46+46*(t-n),e.setAttribute(`data-transition`,`move`),e.style.bottom=`calc( calc( var(--art-control-height) + var(--art-bottom-gap) ) * ${n+1} + 10px)`})}},closeToast(e){e.classList.add(this.$config.hideClassName)},getTransitionendEventNameList(){return[`webkitTransitionEnd`,`mozTransitionEnd`,`MSTransitionEnd`,`otransitionend`,`transitionend`]},setTransitionendEvent(e,t){let n=this,r=this.getTransitionendEventNameList();k.on(e,r,function(r){let i=e.getAttribute(`data-transition`);if(e.classList.contains(n.$config.hideClassName)){typeof t==`object`&&typeof t?.closeCallback==`function`&&t.closeCallback(),e.remove();return}if(i===`move`){e.removeAttribute(`data-transition`);return}},{capture:!0})}},zt=e=>e=>(Rt.$data.art=e,{name:Rt.$key.plugin_KEY,toast(...e){return Rt.toast(...e)}}),Bt=Rt.$key.plugin_KEY,Vt=class{art;option;$key={plugin_KEY:`artplayer-plugin-videoStatistics`,setting_name:`video-statistics`};$data={intervalId:void 0};constructor(e,t){this.art=e,this.option=t,this.addSetting()}addSetting(){this.art.setting.add({name:this.$key.setting_name,icon:``,html:`视频统计信息`,mounted:e=>{let t=e.querySelector(`.art-setting-item-left-icon`);t.innerHTML=`<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M512.50142 958.397886c-119.320573 0-231.499491-46.465265-315.871087-130.837884C112.258737 743.188406 65.792449 631.010511 65.792449 511.688915c0-119.319549 46.466288-231.499491 130.837884-315.871087C281.002952 111.445208 393.180847 64.979944 512.50142 64.979944s231.499491 46.465265 315.871087 130.837884c84.372619 84.372619 130.837884 196.551538 130.837884 315.871087 0 119.321596-46.465265 231.499491-130.837884 315.871087C744.000911 911.932622 631.821993 958.397886 512.50142 958.397886zM512.50142 105.962334c-223.718271 0-405.726581 182.00831-405.726581 405.726581s182.00831 405.726581 405.726581 405.726581c223.718271 0 405.727605-182.00831 405.727605-405.726581S736.220714 105.962334 512.50142 105.962334z"></path>
                    <path d="M510.150886 775.953647c-18.107403 0-32.745798-14.678304-32.745798-32.785707L477.405087 452.191846c0-18.108426 14.638395-32.785707 32.745798-32.785707 18.107403 0 32.745798 14.678304 32.745798 32.785707l0 290.976094C542.896684 761.275343 528.258289 775.953647 510.150886 775.953647z"></path>
                    <path d="M511.357364 296.458969m-45.080731 0a44.054 44.054 0 1 0 90.161463 0 44.054 44.054 0 1 0-90.161463 0Z"></path>
                </svg>`,this.art.proxy(e,`click`,e=>{e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault(),this.art.setting.show=!1,this.isRegisterLayer()?this.updateLayer():this.showLayer(!0)},{capture:!0})}})}getLayerOption(){let e,t,n,r={key:`Resolution:`,value:`${this.art.video.videoWidth} x ${this.art.video.videoHeight}`},i,a,s,c=this.art.plugins[Nt];if(c){let t=c.getCurrentQualityOption();t&&(e={key:`Mime Type:`,value:`${t.mimeType}`},t.codecs.trim()!==``&&(e.value+=`;codecs="${t.codecs}"`),t.frameRate.trim()!==``&&(r.value+=`@`+t.frameRate),t.bandwidth&&(i={key:`Video DataRate:`,value:(t.bandwidth/1024).toFixed(0)+`Kbps`}))}let l=this.art.plugins[dt];if(l){let r=l.getCurrentPlayConfig();r&&(t={key:`Audio Host:`,value:new URL(r.url).host},n={key:`Audio Time:`,value:l.getAudio().currentTime.toString()},e&&(e.value.trim()!==``&&(e.value+=`, `),e.value+=`${r.mimeType}`,r.codecs.trim()!==``&&(e.value+=`;codecs="${r.codecs}"`)),a={key:`Audio DataRate:`,value:(r.bandwidth/1024).toFixed(0)+`Kbps`},s={key:`Audio Duration:`,value:l.getAudio().duration.toString()})}let u=[e,{key:`Player Type`,value:`ArtPlayer@`+o.default.version},r,i,a,{key:`Video Host:`,value:new URL(this.art.url).host},t,{key:`Video Time:`,value:this.art.currentTime.toString()},n,{key:`Video Duration:`,value:this.art.duration.toString()},s];return u.push(...this?.option?.data||[]),{name:this.$key.setting_name,html:`
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
                    ${u.filter(e=>e!=null).map(e=>`
                        <div class="art-player-video-statistics-panel-item">
                            <div class="art-player-video-statistics-panel-title">${e.key}</div>
                            <div class="art-player-video-statistics-panel-content">${e.value}</div>
                        </div>
                        `).join(`
`)}
                </div>
            </div>
            `,mounted:async e=>{let t=e.querySelector(`.art-player-video-statistics-close svg`);this.art.proxy(t,`click`,e=>{e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault(),this.closeLayer()})}}}isRegisterLayer(){return this.$key.setting_name in this.art.layers}showLayer(e){clearInterval(this.$data.intervalId);let t=this.getLayerOption();this.art.layers.add(t),e&&(this.unbindUpdateLayerEvent(),this.bindUpdateLayerEvent())}updateLayer(){let e=this.getLayerOption();this.art.layers.update(e)}bindUpdateLayerEvent(){this.art.on(`play`,this.updateLayerEvent_interval,this),this.art.on(`restart`,this.updateLayerEvent_once,this),this.art.on(`m4sAudio:loadedmetadata`,this.updateLayerEvent_once,this),this.art.on(`pause`,this.updateLayerEvent_clear_interval,this),this.art.on(`video:ended`,this.updateLayerEvent_clear_interval,this),this.art.playing&&this.updateLayerEvent_interval()}unbindUpdateLayerEvent(){this.art.off(`play`,this.updateLayerEvent_interval),this.art.off(`restart`,this.updateLayerEvent_once),this.art.off(`m4sAudio:loadedmetadata`,this.updateLayerEvent_once),this.art.off(`pause`,this.updateLayerEvent_clear_interval),this.art.off(`video:ended`,this.updateLayerEvent_clear_interval)}updateLayerEvent_interval(){clearInterval(this.$data.intervalId),this.$data.intervalId=setInterval(()=>{this.updateLayer()},1500)}updateLayerEvent_once(){this.updateLayer()}updateLayerEvent_clear_interval(){clearInterval(this.$data.intervalId)}closeLayer(){clearInterval(this.$data.intervalId),this.art.layers.remove(this.$key.setting_name),this.unbindUpdateLayerEvent()}update(e){this.option=e}},Ht=e=>t=>{let n=new Vt(t,e);return{name:n.$key.plugin_KEY,update(e){n.update(e)}}},Ut=()=>({heatmap:!1,color:`#FFFFFF`,mode:0,mount:void 0,width:800,points:[],filter:e=>e.text.length<=100,beforeVisible:()=>!0,emitter:!1,maxLength:50,lockTime:3,theme:O.isThemeDark()?`dark`:`light`}),Wt=e=>{let t=e.epList||[];if(t.length===1){let n=t[0];return n.pages.map(t=>({isDefault:t.cid===e.cid,title:t.part,aid:e.aid,bvid:e.bvid,cid:t.cid,onSelect(r,i){n.cid=t.cid,Yt.updateArtPlayerVideoInfo({aid:e.aid,bvid:e.bvid,cid:t.cid,pic:t.first_frame||``,title:t.part,epList:e.epList||[]},!0)}}))}else return t.map(t=>({isDefault:t.aid===e.aid&&t.cid===e.cid,title:Tt(t.title),aid:t.aid,bvid:t.bvid,cid:t.cid,onSelect(n,r){Yt.updateArtPlayerVideoInfo({aid:t.aid,bvid:t.bvid,cid:t.cid,pic:t.arc.pic,title:t.title,epList:e.epList||[]},!0)}}))},Gt={$data:{art:null,currentOption:null},resetEnv(e){e&&Reflect.set(this.$data,`art`,null),Reflect.set(this.$data,`currentOption`,null)},async init(e){this.resetEnv(!0),this.$data.currentOption=e;let t=new st(`artplayer-video-danmaku-option`),n=t.getLocalArtDanmakuOption(),r={...jt(),container:e.container,poster:e.poster,settings:[],plugins:[zt(),Lt({from:`video`,qualityList:e.quality})]};return r.type=`mp4`,D.getValue(`artplayer-plugin-video-danmaku-enable`)&&r.plugins.push((0,s.default)({...Ut(),danmuku:e.danmukuUrl,speed:n.speed,margin:n.margin,opacity:n.opacity,modes:n.modes,fontSize:n.fontSize,antiOverlap:n.antiOverlap,synchronousPlayback:n.synchronousPlayback,visible:n.visible,beforeEmit(e){return new Promise(t=>{console.log(e),setTimeout(()=>{t(!0)},1e3)})}})),D.getValue(`artplayer-plugin-video-m4sAudioSupport-enable`)&&r.plugins.push(ut({from:`video`,showSetting:!0,audioList:e.audioList||[]})),D.getValue(`artplayer-plugin-video-epChoose-enable`)&&r.plugins.push(Ot({EP_LIST:Wt(e),automaticBroadcast:!0})),D.getValue(`artplayer-plugin-video-cc-subtitle-enable`)&&r.plugins.push(St({from:`video`,cid:e.cid,aid:e.aid,bvid:e.bvid})),D.getValue(`artplayer-plugin-video-toptoolbar-enable`)&&r.plugins.push(pt({onlineInfoParams:{aid:e.aid,cid:e.cid,bvid:e.bvid},title:e.videoTitle,showWrap:!0,showTitle:!0,showOnlineTotal:!0})),D.getValue(`artplayer-plugin-video-statistics-enable`)&&r.plugins.push(Ht({data:[]})),D.getValue(`bili-video-playerAutoPlayVideo`)&&(r.muted=!0,r.autoplay=!0),this.$data.art=new o.default(r),t.onConfigChange(this.$data.art),this.$data.art},async update(e,t){this.resetEnv(!1),this.$data.currentOption=t,j.info(`更新新的播放信息`,t),e.pause(),j.info(`暂停视频`),e.currentTime=0,j.info(`重置播放进度`),this.updatePluginInfo(e,t),e.play(),j.info(`播放`)},updatePluginInfo(e,t){if(e.plugins[Nt].update({from:`video`,qualityList:t.quality}),j.info(`更新画质`,t.quality),D.getValue(`artplayer-plugin-video-danmaku-enable`)&&(e.plugins.artplayerPluginDanmuku.config({danmuku:t.danmukuUrl}),e.plugins.artplayerPluginDanmuku.load(),j.info(`更新弹幕姬`,t.danmukuUrl)),D.getValue(`artplayer-plugin-video-m4sAudioSupport-enable`)&&(e.plugins[dt].update({from:`video`,audioList:t.audioList||[]}),j.info(`更新音频`,t.audioList)),D.getValue(`artplayer-plugin-video-epChoose-enable`)&&(e.plugins[kt].update({EP_LIST:Wt(t),automaticBroadcast:!0}),j.info(`更新选集信息`,t.epList)),D.getValue(`artplayer-plugin-video-cc-subtitle-enable`)){let n=e.plugins[Ct],r={from:`video`,aid:t.aid,bvid:t.bvid,cid:t.cid};n.update(r),j.info(`更新字幕`,r)}if(D.getValue(`artplayer-plugin-video-toptoolbar-enable`)){let n=e.plugins[mt],r={showRight:!0,showRightFollow:!0,showWrap:!0,showTitle:!0,showOnlineTotal:!0,title:t.videoTitle,onlineInfoParams:{aid:t.aid,cid:t.cid,bvid:t.bvid}};n.update(r),j.info(`更新顶部标题`,r)}}},Kt=`.artplayer-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
}
`;function qt(e){let t=[];return e.video.forEach(n=>{if(!e.accept_quality.includes(n.id))return;let r=e.support_formats.find(e=>e.quality===n.id),i=z.findBetterCDN(n.base_url,n.baseUrl,n.backup_url,n.backupUrl);i=z.replaceVideoCDN(i);let a=r?.new_description;t.push({name:a,url:i,type:n.mimeType||n.mime_type,id:n.id,quality:n.id,vip:!1,codecid:n.codecid,codecs:n.codecs,frameRate:n.frameRate||n.frame_rate,bandwidth:n.bandwidth})}),t}var Jt=async e=>{let t=[],n=[];if(D.getValue(`bili-video-playType`,`mp4`)===`mp4`){let t=await it.playUrl({bvid:e.bvid,cid:e.cid,fnval:1,fnver:0,fourk:1,high_quality:1,qn:127,setPlatformHTML5:!0});if(j.info([`视频播放地址信息：`,t]),!t)return;let r=t.durl[0],i=t.support_formats.find(e=>e.quality===t.quality),a=z.findBetterCDN(r.url,r.url||r.backup_url?.[0]),o=i?.new_description;n.push({name:o,url:a,type:`audio/mp4`,id:t.quality,codecid:t.video_codecid,quality:t.quality,vip:!1,codecs:``,frameRate:``,bandwidth:0})}else{let r=await it.playUrl({bvid:e.bvid,cid:e.cid,fnval:3088,fnver:0,fourk:1,high_quality:1,qn:127,setPlatformHTML5:!1});if(j.info([`视频播放地址信息：`,r]),!r)return;r.dash.audio.forEach(e=>{let n=z.findBetterCDN(e.baseUrl,e.base_url,e.baseUrl,e.backup_url);n=z.replaceVideoCDN(n,!0),t.push({url:n,id:e.id,text:ot[e.id]||``,codecs:e.codecs,mimeType:e.mimeType,bandwidth:e.bandwidth,size:0})}),t.sort((e,t)=>t.id-e.id),j.info(`ArtPlayer: 获取的音频信息`,t),n=[...qt({accept_quality:r.accept_quality,support_formats:r.support_formats,video:r.dash.video})],j.info(`ArtPlayer: 获取的视频画质信息`,n)}let r=n.map((e,t)=>({quality:e.quality,html:e.name,url:e.url,codecid:e.codecid,codecs:e.codecs,frameRate:e.frameRate,mimeType:e.type,bandwidth:e.bandwidth})),i={container:null,epList:e.epList,audioUrl:null,url:``,poster:e.pic,aid:e.aid,bvid:e.bvid,cid:e.cid,videoTitle:e.title,danmukuUrl:`https://${I.web_host}/x/v1/dm/list.so?oid=${e.cid}`,quality:r};return i.url=n?.[0]?.url,t.length&&(i.audioList=t.map((e,t)=>({isDefault:t===0,url:e.url,soundQualityCode:e.id,soundQualityCodeText:e.text,codecs:e.codecs,mimeType:e.mimeType,bandwidth:e.bandwidth,size:e.size}))),i},Yt={$data:{art:null},init(){D.execMenu(`bili-video-enableArtPlayer`,()=>{this.coverVideoPlayer()})},coverVideoPlayer(){if(P(`#artplayer`))j.warn(`已使用ArtPlayer覆盖原播放器，更新播放信息`);else{j.info(`覆盖播放器`),N(`
            /* 隐藏原本的播放器 */
			${y.className.video} .m-video-player .player-container,
			${y.className.mVideo} .m-video-player .player-container{
				display: none !important;
			}
			
			${at}
			
			${Kt}

			`);let e=D.getValue(`bili-video-artplayer-controlsPadding-left-right`,0);e!=0&&N(`
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
				`)}this.updateArtPlayerVideoInfo()},updateArtPlayerVideoInfo(e,t){let n=this,r=()=>P(y.className.video+` .m-video-player`)||P(y.className.mVideo+` .m-video-player`),i=e=>{let t=e?.playerOptions?.aid||e?.info?.aid,n=e?.playerOptions?.bvid||e?.info?.bvid,r=e?.playerOptions?.cid||e?.cid||e?.info?.cid,i=e?.pic||e?.info?.pic,a=e?.title||e?.info?.title,o=e?.info?.p,s=e?.info?.pages;if(typeof o==`number`&&Array.isArray(s)){let e=s.findIndex(e=>e.page===o);if(e!==0){let t=s[e];typeof t?.cid==`number`&&(r=t.cid),typeof t?.part==`string`&&(a=t.part)}}return{aid:t,bvid:n,cid:r,pic:i,title:a}};B.waitVuePropToSet(r,{msg:`等待m-video-player加载完成`,check(e){let{aid:n,bvid:r,cid:a}=i(e);return!t&&Gt.$data.currentOption!=null?(Gt.$data.art.pause(),typeof n==`number`&&typeof r==`string`&&typeof a==`number`&&Gt.$data.currentOption.cid!==a):typeof n==`number`&&typeof r==`string`&&typeof a==`number`},async set(t){let a=r(),{aid:o,bvid:s,cid:c,pic:l,title:u}=i(t),d=[],f=P(`.m-video-season-new`),p=B.getVue(f),m=P(`.m-video-part-new`)||P(`.m-video-part`),h=B.getVue(m);if(p){let e=p?.videoList;Array.isArray(e)&&(d=e)}else if(h){let e=h?.info,t=h?.p,n=h?.pages||h?.info?.pages;Array.isArray(n)&&d.push({season_id:0,section_id:0,id:0,aid:o||e.aid,bvid:s||e.bvid,cid:c||e.cid,title:u||e.title,attribute:0,arc:{aid:o||e.aid,videos:e?.videos,type_id:0,type_name:``,copyright:e?.copyright,pic:e?.pic,title:e?.title,pubdate:e?.pubdate,ctime:e?.ctime,desc:e?.desc,state:e?.state,duration:e?.duration,rights:e?.rights,author:e?.owner,stat:e?.stat,dynamic:e?.dynamic,dimension:e?.dimension,desc_v2:e?.desc_v2,is_chargeable_season:e?.is_chargeable_season,is_blooper:e?.is_blooper,enable_vt:e?.enable_vt,vt_display:e?.vt_display},page:e?.pages?.[t],pages:e?.pages})}e??={aid:o,bvid:s,cid:c,pic:l,title:u,epList:d},j.info(`视频播放信息 => aid：${o} bvid：${s} cid：${c}`);let g=await Jt(e);if(g==null)return;let _=P(`#artplayer`);if(!_){let e=k.createElement(`div`,{className:`artplayer-container`,innerHTML:`
								<div id="artplayer"></div>
							`});_=e.querySelector(`#artplayer`),k.append(a,e)}if(g.container=_,n.$data.art==null){let e=await Gt.init(g);if(e)n.$data.art=e;else return;n.$data.art.volume=1,n.$data.art.once(`ready`,()=>{D.execMenu(`bili-video-playerAutoPlayVideoFullScreen`,async()=>{j.info(`自动进入全屏`),n.$data.art.fullscreen=!0,n.$data.art.once(`fullscreenError`,()=>{j.warn(`未成功进入全屏，需要用户交互操作，使用网页全屏代替`),n.$data.art.fullscreenWeb=!0})})})}else{let e=P(`.artplayer-container`);e&&!e.contains(n.$data.art.template.$container)&&(j.warn(`artplayer-container的artplayer被移除了，重新添加元素`),k.empty(e),k.append(e,n.$data.art.template.$container)),await Gt.update(n.$data.art,g)}a.style.paddingTop=``}})}},Xt={$data:{isAddBeautifyCSS:!1,isInitCommentModule:!1,isInitDescModule:!1},init(){Yt.init(),D.execMenuOnce(`bili-video-cover-bottomRecommendVideo`,()=>{this.coverBottomRecommendVideo()}),D.execMenuOnce(`bili-video-cover-UpWrapper`,()=>{this.coverUpWrapper()}),D.execMenuOnce(`bili-video-cover-seasonNew`,()=>{this.coverSeasonNew()}),k.onReady(()=>{D.execMenu(`bili-video-addCommentModule`,()=>{this.addCommentModule()}),D.execMenu(`bili-video-addDescModule`,()=>{this.addDescModule()})})},beautify(){j.info(`美化显示`),this.$data.isAddBeautifyCSS||(this.$data.isAddBeautifyCSS=!0,N(`
				@charset "UTF-8";
				${y.className.video} .video-list .card-box {
					--left-card-width: 33%;
					--right-child-padding: 1.333vmin;
					/* 开启了bili-video-beautify */
				}
				${y.className.video} .video-list .card-box .v-card-toapp {
					width: 100%;
					border-bottom: 1px solid #b5b5b5;
					padding-left: 0;
					padding-right: 0;
				}
				${y.className.video} .video-list .card-box .v-card-toapp > a {
					display: flex;
					flex-wrap: nowrap;
					gap: var(--right-child-padding);
				}
				${y.className.video} .video-list .card-box .v-card-toapp > a .card {
					width: var(--left-card-width);
					height: 80px;
					flex: 0 auto;
				}
				${y.className.video} .video-list .card-box .v-card-toapp > a .card .count {
					background: transparent;
				}
				${y.className.video} .video-list .card-box .v-card-toapp > a .card .count .left {
					display: list-item;
				}
				${y.className.video} .video-list .card-box .v-card-toapp > a .card .count .left span.item {
					display: none;
				}
				${y.className.video} .video-list .card-box .v-card-toapp > a .card .count .duration {
					background: rgba(0, 0, 0, 0.4);
					border-radius: 0.6vmin;
					padding: 0px 0.5vmin;
					right: 1vmin;
					bottom: 1vmin;
				}
				${y.className.video} .video-list .card-box .v-card-toapp > a .title {
					/*flex: 1;*/
					/*padding: var(--right-child-padding);*/
					padding-top: 0;
					margin-top: 0;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}
				${y.className.video} .video-list .card-box .gm-right-container {
					display: flex;
					flex-direction: column;
					width: calc(100% - var(--left-card-width));
					justify-content: space-between;
				}
				${y.className.video} .video-list .card-box .gm-right-container > * {
					padding: var(--right-child-padding);
					padding-bottom: 0;
				}
				${y.className.video} .video-list .card-box .gm-right-container .left {
					gap: 1rem;
				}
				${y.className.video} .video-list .card-box .gm-right-container .left span {
					display: flex;
					align-items: safe center;
					gap: 1vmin;
				}
				${y.className.video} .video-list .card-box .gm-right-container .gm-up-name,
				${y.className.video} .video-list .card-box .gm-right-container .left {
					color: #999;
					font-size: 3vmin;
					transform-origin: left;
					display: flex;
					/*align-items: safe center;*/
					align-items: safe flex-end;
				}
				${y.className.video} .video-list .card-box .gm-right-container .gm-up-name svg {
					width: 3vmin;
					height: 3vmin;
				}
				${y.className.video} .video-list .card-box .gm-right-container .gm-up-name-text {
					margin-left: 1vmin;
				}
				${y.className.video} .video-list .card-box .gm-right-container .num {
					margin-right: 4vmin;
				}
				${y.className.video} .video-list .card-box > a.v-card {
					width: 100%;
					border-bottom: 1px solid #b5b5b5;
					padding-left: 0;
					padding-right: 0;
					display: flex;
					flex-wrap: nowrap;
				}
				${y.className.video} .video-list .card-box > a.v-card .card {
					width: var(--left-card-width);
					height: 100%;
					flex: 0 auto;
				}
				${y.className.video} .video-list .card-box > a.v-card .card .count {
					background: transparent;
				}
				${y.className.video} .video-list .card-box > a.v-card .card .count span {
					display: none;
				}
				${y.className.video} .video-list .card-box > a.v-card .card .count .duration {
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
				${y.className.video} .video-list .card-box > a.v-card .title {
					flex: 1;
					/*padding: var(--right-child-padding);*/
					padding-top: 0;
					margin-top: 0;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}

			`)),k.waitNode(y.className.video+` .bottom-tab .list-view .card-box`,1e4).then(e=>{if(!e){j.error(`$cardBox is null`);return}function t(e){let t=e.querySelector(`.title`),n=e.querySelector(`.count .left`),r=!!e.querySelector(`.gm-right-container`),i=B.getVue(e);if(t&&n&&i&&!r){let r=i?.info?.owner?.name;if(r==null){j.error(`美化显示-handleVCardToApp：获取up主名字失败`);return}e.querySelector(`.count`);let a=t.cloneNode(!0),o=n.cloneNode(!0);k.hide(t);let s=e.querySelector(`.open-app.weakened`);s&&k.hide(s);let c=document.createElement(`div`);c.className=`gm-up-name`,c.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${r}</span>
						`;let l=document.createElement(`div`),u=document.createElement(`div`);l.className=`gm-right-container`,u.className=`gm-right-bottom`,k.after(t,l),l.appendChild(a),l.appendChild(u),u.appendChild(c),u.appendChild(o)}}function n(e){let t=e.querySelector(`.title`),n=e.querySelector(`.count`),r=!!e.querySelector(`.gm-right-container`),i=B.getVue(e);if(t&&n&&i&&!r){let e=i?.info?.duration;if(e==null){j.error(`美化显示-handleVCard：获取视频时长失败`);return}let r=i?.info?.owner?.name;if(r==null){j.error(`美化显示-handleVCard：获取up主名字失败`);return}let a=t.cloneNode(!0),o=n.cloneNode(!0);k.hide(t);let s=document.createElement(`div`);s.className=`duration`,s.innerText=V.parseDuration(e),o.className=`left`;let c=document.createElement(`div`);n.appendChild(s),c.className=`gm-up-name`,c.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${r}</span>
						`;let l=document.createElement(`div`),u=document.createElement(`div`);l.className=`gm-right-container`,u.className=`gm-right-bottom`,k.after(t,l),l.appendChild(a),l.appendChild(u),u.appendChild(c),u.appendChild(o)}}let r=new O.LockFunction(()=>{let e=F(y.className.video+` .bottom-tab .list-view .card-box .v-card-toapp`),r=F(y.className.video+` .bottom-tab .list-view .card-box>a.v-card`);e.forEach(e=>{t(e)}),r.forEach(e=>{n(e)})},25),i=P(y.className.video);i?O.mutationObserver(i,{config:{subtree:!0,attributes:!0,childList:!0},callback(){r.run()}}):j.error(`未找到视频根节点`)})},repairVideoBottomAreaHeight(){return j.info(`修复视频底部区域高度`),N(`
		${y.className.video},
		${y.className.mVideo} {
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
			${y.className.video},
			${y.className.mVideo}{
				.m-video-info-new{
					margin-top: 72vmin;
				}
			}
		}
		`)},coverUpWrapper(){j.info(`修复up主信息区域的点击事件`),k.on(document,`click`,[y.className.video+` .bottom-wrapper .up-wrapper`,y.className.mVideo+` .bottom-wrapper .up-wrapper`],function(e){let t=e.target.closest(`.bottom-wrapper`);if(!t){j.error(`获取元素.bottom-wrapper失败`);return}let n=B.getVue(t);if(!n){j.error(`获取元素.bottom-wrapper的vue实例失败`);return}let i=n?.upInfo?.card?.mid;typeof i==`string`?V.goToUrl(tt.getUserSpaceUrl(i)):r.default.error(`获取mid失败`)},{capture:!0})},coverBottomRecommendVideo(){j.info(`覆盖 相关视频 点击事件`),k.on(document,`click`,[y.className.video+` .list-view .card-box .launch-app-btn`,y.className.mVideo+` .list-view .card-box .launch-app-btn`],function(e){let t=e.target,n=B.getVue(t);if(!n){r.default.error(`获取相关视频的__vue__失败`);return}let i=n.bvid;if(O.isNull(i))if(n.$children&&n.$children[0]&&O.isNotNull(n.$children[0].bvid))i=n.$children[0].bvid;else{r.default.error(`获取相关视频的bvid失败`);return}j.info(`相关视频的bvid: `+i),V.goToUrl(tt.getVideoUrl(i)),k.preventEvent(e)},{capture:!0})},coverSeasonNew(){j.info(`覆盖 选集视频列表 点击事件`);function e(e){let t=e.target,n=B.getVue(t);if(!n){r.default.error(`获取选集视频的目标视频的__vue__失败`);return}let i=n.bvid;if(O.isNull(i)){r.default.error(`获取相关视频的bvid失败`);return}j.info(`相关视频的bvid: `+i),V.goToUrl(tt.getVideoUrl(i)),k.preventEvent(e)}k.on(document,`click`,[y.className.video+` .m-video-season-new .video-card .launch-app-btn`,y.className.mVideo+` .m-video-season-new .video-card .launch-app-btn`],e,{capture:!0}),k.on(document,`click`,[y.className.video+` .m-video-season-panel .season-video-item .launch-app-btn`,y.className.mVideo+` .m-video-season-panel .season-video-item .launch-app-btn`],e,{capture:!0})},repairLinkJump(){j.info(`修复链接跳转`);let e=new O.LockFunction(()=>{[`a.member-link:not([href])[data-url]`,`a.jump-link:not([href])[data-url]`].forEach(e=>{F(e).forEach(e=>{e.href=e.getAttribute(`data-url`)})})});O.mutationObserver(document,{config:{subtree:!0,childList:!0},callback:()=>{e.run()}})},gestureReturnToCloseCommentArea(){j.info(`手势返回关闭评论区，全局监听document点击.sub-reply-preview`),k.waitNode(`#app`).then(e=>{O.waitVueByInterval(e,()=>B.getVue(e)!=null,250,1e4).then(t=>{let n=B.getVue(e);if(!n){j.error(`获取#app的vue属性失败`);return}let r=n.$router.options.scrollBehavior;n.$router.options.scrollBehavior=function(e,t,n){return e.hash===`#/seeCommentReply`?(j.info(`当前操作为打开评论区，scrollBehavior返回null`),null):e.hash===``&&t.hash===`#/seeCommentReply`?(j.info(`当前操作为关闭评论区，scrollBehavior返回null`),null):r.call(this,...arguments)}})}),k.on(document,`click`,`.sub-reply-preview`,function(e){let t=P(`#app`),n=B.getVue(t);if(!n){j.error(`获取#app元素失败`);return}let r=V.hookGestureReturnByVueRouter({vueInst:n,hash:`#/seeCommentReply`,callback(e){if(!e)return!1;let t=P(`.dialog-close-icon`);return t?t.click():j.error(`评论区关闭失败，原因：元素dialog-close-icon获取失败`),!0}});k.waitNode(`.dialog-close-icon`).then(e=>{k.on(e,`click`,function(){r.resumeBack(!1)},{capture:!0,once:!0})})})},enterVideoFullScreen(){k.waitNode(`.mplayer-btn-widescreen`,5e3).then(e=>{if(!e){j.error(`获取全屏按钮失败`),r.default.error(`获取全屏按钮失败`);return}if(e.closest(`.mplayer-wide`)){j.warn(`当前的全屏按钮是【退出全屏】，不点击`);return}j.info(`进入全屏`),e.click()})},optimizationScroll(){let e=null,t=null,n=null,r=null,i=null,a=0,o=0;function s(e){return e==null?!1:!document.contains(e)}k.on(document,`scroll`,c=>{if(s(t)){if(t=P(`.m-video-player`),s(t))return;if(a==0){let e=t.getBoundingClientRect();a=e.height,o=e.top,j.info(`视频区域的最大高度为 ${a}px`),j.info(`视频区域的最大top为 ${o}px`)}}if(s(n)&&(n=P(`.m-video-info-new`),s(n))||s(e)&&(e=P(`.m-navbar`),s(e))||s(r)&&(r=P(`.bottom-tab`),s(r))||s(i)&&(i=P(`.bottom-tab .v-affix`),s(i)))return;let l=n.getBoundingClientRect().top;l>=0?l<=a?t.style.paddingTop=l+`px`:t.style.paddingTop=``:t.style.paddingTop=`0px`;let u=k.height(e);r.getBoundingClientRect().top<u?i.hasAttribute(`data-is-fixed`)||(i.style.cssText=`position: fixed;left: 0px;top: ${u}px;z-index: 10000;width: 100%;`,i.setAttribute(`data-is-fixed`,`true`)):(i.style.cssText=``,i.removeAttribute(`data-is-fixed`))},{passive:!0})},disableSwipeTab(){j.info(`禁止滑动切换tab`),B.waitVuePropToSet(`.m-video-bottom-tab`,{msg:`等待tab的vue属性touchstart、touchmove、touchend事件，_bindEvents函数`,check(e){return e?.slider?.el instanceof HTMLElement&&typeof e?.slider?.events?.touchstart==`function`&&typeof e?.slider?.events?.touchmove==`function`&&typeof e?.slider?.events?.touchend==`function`&&typeof e?.slider?._bindEvents==`function`},set(e){let t=e.slider.el;t.removeEventListener(`touchstart`,e.slider.events.touchstart),t.removeEventListener(`touchmove`,e.slider.events.touchmove),t.removeEventListener(`touchend`,e.slider.events.touchend),e.slider._bindEvents=()=>{},j.success(`成功禁用滑动，清除touchstart、touchmove、touchend事件，覆盖_bindEvents函数`)}})},addCommentModule(){j.info(`新增评论模块`),this.$data.isInitCommentModule||(this.$data.isInitCommentModule=!0,x.setGMResourceCSS(_e.Viewer),N(et),N(`
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
			`),N(`
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
			`)),k.waitNode(`.m-video-info`,1e4).then(e=>{if(!e){j.error(`获取视频信息元素失败`);return}k.remove(`.comment-module-show-btn`),k.remove(`.close-comment-module-btn`),k.remove(`#comment-module-wrapper`);let t=new nt({hash:`comment-module`,useUrl:!0,beforeHistoryBackCallBack(e){let t=P(`.viewer-button.viewer-close`);t&&t.click(),e&&r.click()}}),n=k.createElement(`div`,{className:`comment-module-show-btn`,innerHTML:`查看评论`}),r=k.createElement(`span`,{className:`close-comment-module-btn`,innerHTML:`×`});k.on(n,`click`,e=>{k.preventEvent(e),k.css(i,{display:`block`}),k.css(r,{display:`flex`}),t.enterGestureBackMode()}),k.on(r,`click`,e=>{k.preventEvent(e),k.css(i,{display:``}),k.css(r,{display:``}),t.quitGestureBackMode(!1)}),k.append(e,n);let i=k.createElement(`div`,{id:`comment-module-wrapper`});k.append(document.body,i),k.after(i,r),$e.init(i)})},addDescModule(){j.info(`新增简介模块`),this.$data.isInitDescModule||(this.$data.isInitDescModule=!0,N(`
				${y.className.mVideo} .m-video-info .bottom-wrapper{
					flex-direction: column;
					align-items: flex-start;
					height: auto;
				}
			`),N(`
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
	
			`)),k.remove(y.className.mVideo+`  .m-video-info .video-desc-wrapper`),B.waitVuePropToSet(y.className.mVideo+`  .m-video-info .bottom-wrapper`,{check(e){return typeof e?.info?.bvid==`string`},set(e,t){let n=e.info,r=e.upInfo;r.follower,r.archive_count;let i=n.stat.view,a=n.stat.danmaku;n.ctime;let o=n.bvid,s=n.desc,c=n.stat.like,l=n.stat.coin,u=n.stat.favorite,d=n.stat.share,f=k.createElement(`div`,{className:`video-desc-wrapper`,innerHTML:`
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
									<span class="video-info-text" data-value="${i}">${V.parseCount(i)}</span>
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
									<span class="video-info-text" data-value="${a}">${V.parseCount(a)}</span>
								</div>
								<span class="video-info-text">${O.formatTime(n.ctime*1e3,`yyyy年MM月dd日 HH:mm:ss`)}</span>
							</div>
							<div class="video-bvid">${o}</div>
							<div class="video-desc-text">${s}</div>
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
									<span data-value="${c}">${V.parseCount(c)}</span>
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
									<span data-value="${l}">${V.parseCount(l)}</span>
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
									<span data-value="${u}">${V.parseCount(u)}</span>
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
									<span data-value="${d}">${V.parseCount(d)}</span>
								</div>
							</div>
						`});t.appendChild(f)}})}},Zt=`.artplayer-container {
  width: 100vw;
  height: 35vh;
}
`,Qt={getUrl(e){if(e!=null)return e.getAttribute(`universallink`)},jumpToUrl(e){let t=e.target,n=t.querySelector(`bili-open-app`)||t.querySelector(`m-open-app`);if(n){let e=Qt.getUrl(n);e?V.goToUrl(e):(r.default.error(`获取bili-open-app的Url失败`),j.error(`获取bili-open-app的Url失败`))}else r.default.error(`未获取到<bili-open-app>元素`),j.error(`未获取到<bili-open-app>元素`)}},$t={filteringSensitiveSearchParamData(e){let t=O.assign({},e,!0);return Reflect.deleteProperty(t,`access_key`),Reflect.deleteProperty(t,`access_token`),t},failToast(e){j.error(e),alert(JSON.stringify(e,null,4))}},en={async getPlayUrl(e){let t={avid:``,cid:``,ep_id:``,qn:127,fnver:0,fnval:3088,fourk:1};t=O.assign(t,e);let n=Ve.getBangumiProxyHost();j.info(`番剧播放地址请求数据`);let r=[],i,a=`/pgc/player/web/playurl`;j.info(`请求路径：${a}`);for(let e=0;e<n.length;e++){let o=n[e],s=o.host,c={};s!==I.web_host&&(O.assign(c,Ve.getBangumiProxySearchParam({area:o.area}),!0),j.info(`代理服务器数据: ${JSON.stringify(o)}`),j.info(`代理服务器请求参数：${JSON.stringify($t.filteringSensitiveSearchParamData(c))}`));let l=`https://${s}${a}?${O.toSearchParamsStr(t)}&${O.toSearchParamsStr(c)}`,u=await M.get(l,{responseType:`json`,fetch:!1,allowInterceptConfig:!1,headers:{Referer:`https://www.bilibili.com/`}});if(!u.status){j.error(`代理服务器：${s} 请求失败`);continue}let d=O.toJSON(u.data.responseText);if(!L.isWebApiSuccess(d)||L.isAreaLimit(d)){j.error(`请求失败，当前代理服务器：${s} ${JSON.stringify(d)}`),r.push(d);continue}i=d.result;break}return i??$t.failToast(r),i},async getPlayUrlHTML5(e){let t={avid:``,cid:``,ep_id:``,bsource:``};t=O.assign(t,e),j.info(`（原版api）番剧播放地址请求数据`);let n=`https://${I.web_host}/pgc/player/web/playurl/html5?${O.toSearchParamsStr(t)}`,r=await M.get(n,{responseType:`json`,fetch:!0,headers:{Host:`www.bilibili.com`,Referer:`https://www.bilibili.com`}});if(!r.status)return;let i=O.toJSON(r.data.responseText);if(!L.isWebApiSuccess(i)){$t.failToast(i);return}return i.result}},tn={async waitReactPropsToSet(e,t,n){Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);function r(){let t=null;return typeof e==`string`?t=k.selector(e):typeof e==`function`?t=e():e instanceof HTMLElement&&(t=e),t}typeof e==`string`&&!await k.waitNode(e,1e4)||n.forEach(e=>{typeof e.msg==`string`&&j.info(e.msg);let n=function(){let n=r();if(n==null)return{status:!1,isTimeout:!0,inst:null,$el:n};let i=O.getReactInstance(n);if(i==null)return{status:!1,isTimeout:!1,inst:null,$el:n};let a=Array.from(t).findIndex(t=>{let r=i[t];return r?!!e.check(r,n):!1}),o=i[t[a]];return{status:a!==-1,isTimeout:!1,inst:o,$el:n}};O.waitPropertyByInterval(()=>r(),()=>n().status,250,1e4).then(()=>{let t=n();if(t.status){let n=t.inst;e.set(n,t.$el)}else typeof e.failWait==`function`&&e.failWait(t.isTimeout)})})}},nn=`[artplayer-plugin-airborneHelper]：`,X={$data:{tipJumpToastTimeoutId:void 0,tipJumpToastInfo:void 0,successJumpToastInfo:void 0},$event:{"video:timeupdate":()=>{if(X.$data.tipJumpToastTimeoutId!=null||!Z.$data.art.playing)return;let e=Z.$data.art.currentTime,t=Z.$data.option.clip_info_list.findIndex(t=>{let n=t.start;return n===0?e<=1:e>=n-5&&e<n});if(t!==-1){let r=Z.$data.option.clip_info_list[t],i=Z.$data.art.plugins[Bt],a=(r.start-e)*1e3;X.$data.tipJumpToastTimeoutId=setTimeout(()=>{Z.$data.art.currentTime=r.end,X.$data.tipJumpToastTimeoutId=void 0,X.$data.successJumpToastInfo&&(X.$data.successJumpToastInfo.close(),X.$data.successJumpToastInfo=void 0),X.$data.successJumpToastInfo=i.toast({text:`空降成功~o(*≧▽≦)ツ┏━┓`,closeCallback(){X.$data.successJumpToastInfo=void 0}})},a),X.$data.tipJumpToastInfo&&(X.$data.tipJumpToastInfo.close(),X.$data.tipJumpToastInfo=void 0);function n(){clearTimeout(X.$data.tipJumpToastTimeoutId),X.$data.tipJumpToastTimeoutId=void 0,X.$data.tipJumpToastInfo?.close(),X.$data.tipJumpToastInfo=void 0,Z.$data.option.clip_info_list.splice(t,1)}X.$data.tipJumpToastInfo=i.toast({text:typeof r.toastText==`string`?r.toastText:`站稳扶好，准备起飞~`,timeout:a<2e3?2e3:a,showCloseBtn:!1,jumpText:typeof r.toastText==`string`?`不跳过`:`坠机`,jumpClickCallback:()=>{n()}}),setTimeout(()=>{X.$data.tipJumpToastInfo&&(X.$data.tipJumpToastInfo.close(),X.$data.tipJumpToastInfo=void 0)},8*1e3)}}},bind(){Object.keys(this.$event).forEach(e=>{Z.$data.art.on(e,this.$event[e])})},unbind(){Object.keys(this.$event).forEach(e=>{Z.$data.art.off(e,this.$event[e])}),clearTimeout(X.$data.tipJumpToastTimeoutId),X.$data.tipJumpToastTimeoutId=void 0,X.$data.successJumpToastInfo&&(X.$data.successJumpToastInfo.close(),X.$data.successJumpToastInfo=void 0),X.$data.tipJumpToastInfo&&(X.$data.tipJumpToastInfo.close(),X.$data.tipJumpToastInfo=void 0)}},Z={$key:{plugin_KEY:`plugin-airborne-helper`},$data:{art:null,option:null},init(e,t){this.$data.art=e,this.update(t)},update(e){this.$data.option=e,console.log(nn+`更新配置`,e),X.unbind(),e.clip_info_list.length&&X.bind()}},rn=e=>t=>(Z.init(t,e),{name:Z.$key.plugin_KEY,update(e){Z.update(e)}}),an=Z.$key.plugin_KEY,on=`[flvjs]：`,sn=e=>e.epList.map(t=>({isDefault:t.ep_id===e.ep_id&&t.aid===e.aid&&t.cid===e.cid,title:Tt(t.long_title,t.title),aid:t.aid,bvid:t.bvid,cid:t.cid,ep_id:t.ep_id,onSelect(n,r){pn.updateArtPlayerVideoInfo(t,e.epList)}})),cn={$data:{art:null,flv:null,currentOption:null,from:`bangumi`},resetEnv(e){e&&(Reflect.set(this.$data,`art`,null),Reflect.set(this.$data,`flv`,null)),Reflect.set(this.$data,`currentOption`,null)},flvPlayer(){if(this.$data.currentOption==null){console.error(on+`获取当前配置为空`);return}let e=this.$data.currentOption.flvInfo;(this.$data.flv!=null||e==null)&&(this.$data.flv?.detachMediaElement(),this.$data.flv?.destroy());let t=this.$data.currentOption;console.log(on+`加载视频`,e),e.length>1?this.$data.flv=c.default.createPlayer({type:`flv`,filesize:t.flvTotalSize,duration:t.flvTotalDuration,segments:e.map(e=>({url:e.url,duration:e.duration,filesize:e.size}))},{stashInitialSize:1024*100}):this.$data.flv=c.default.createPlayer({type:`flv`,url:e[0].url},{stashInitialSize:1024*100}),this.$data.flv.attachMediaElement(this.$data.art.video),this.$data.flv.load()},async init(e){this.resetEnv(!0),this.$data.currentOption=e;let t=new st(`artplayer-bangumi-danmaku-option`),n=t.getLocalArtDanmakuOption(),r={...jt(),container:e.container,settings:[],plugins:[zt(),Lt({from:cn.$data.from,qualityList:e.quality})]};if(e.isFlv){if(Array.isArray(r.quality)?r.quality.length=0:r.quality=[],r.type=`flv`,e.flvInfo.length===0){$t.failToast(`视频播放地址为空，无法播放！`);return}r.url=e.flvInfo[0].url,r.customType={flv:(e,t,n)=>{if(!c.default.isSupported()){n.notice.show=`Unsupported playback format: flv`;return}this.flvPlayer()}}}else r.type=`mp4`;return D.getValue(`artplayer-plugin-bangumi-danmaku-enable`)&&r.plugins.push((0,s.default)({...Ut(),danmuku:e.danmukuUrl,speed:n.speed,margin:n.margin,opacity:n.opacity,modes:n.modes,fontSize:n.fontSize,antiOverlap:n.antiOverlap,synchronousPlayback:n.synchronousPlayback,visible:n.visible,beforeEmit(e){return new Promise(t=>{console.log(e),setTimeout(()=>{t(!0)},1e3)})}})),D.getValue(`artplayer-plugin-bangumi-m4sAudioSupport-enable`)&&r.plugins.push(ut({from:cn.$data.from,audioList:e.audioList||[],showSetting:!0})),D.getValue(`artplayer-plugin-bangumi-epChoose-enable`)&&r.plugins.push(Ot({EP_LIST:sn(e),automaticBroadcast:!0})),D.getValue(`artplayer-plugin-bangumi-cc-subtitle-enable`)&&r.plugins.push(St({from:cn.$data.from,cid:e.cid,aid:e.aid,bvid:e.bvid,ep_id:e.ep_id})),D.getValue(`artplayer-plugin-bangumi-toptoolbar-enable`)&&r.plugins.push(pt({onlineInfoParams:{aid:e.aid,cid:e.cid,bvid:e.bvid},title:e.videoTitle,showWrap:!0,showTitle:!0,showOnlineTotal:!0})),D.getValue(`artplayer-plugin-bangumi-airborneHelper-enable`)&&r.plugins.push(rn({clip_info_list:e.clip_info_list})),D.getValue(`artplayer-plugin-bangumi-statistics-enable`)&&r.plugins.push(Ht({data:[]})),this.$data.art=new o.default(r),t.onConfigChange(this.$data.art),this.$data.art},async update(e,t){this.resetEnv(!1),this.$data.currentOption=t,j.info(`更新新的播放信息`,t),e.pause(),j.info(`暂停视频`),e.currentTime=0,j.info(`重置播放进度`),this.updatePluginInfo(e,t),e.play(),j.info(`播放`)},updatePluginInfo(e,t){if(e.plugins[Nt].update({from:cn.$data.from,qualityList:t.quality}),j.info(`更新画质`,t.quality),D.getValue(`artplayer-plugin-bangumi-danmaku-enable`)&&(e.plugins.artplayerPluginDanmuku.config({danmuku:t.danmukuUrl}),e.plugins.artplayerPluginDanmuku.load(),j.info(`更新弹幕姬`,t.danmukuUrl)),D.getValue(`artplayer-plugin-bangumi-m4sAudioSupport-enable`)&&(e.plugins[dt].update({from:cn.$data.from,audioList:t.audioList||[]}),j.info(`更新音频`,t.audioList)),D.getValue(`artplayer-plugin-bangumi-epChoose-enable`)&&(e.plugins[kt].update({EP_LIST:sn(t),automaticBroadcast:!0}),j.info(`更新选集信息`,t.epList)),D.getValue(`artplayer-plugin-bangumi-cc-subtitle-enable`)){let n=e.plugins[Ct],r={from:cn.$data.from,cid:t.cid,aid:t.aid,ep_id:t.ep_id};n.update(r),j.info(`更新字幕`,r)}if(D.getValue(`artplayer-plugin-bangumi-toptoolbar-enable`)){let n=e.plugins[mt],r={showRight:!0,showRightFollow:!0,showWrap:!0,showTitle:!0,showOnlineTotal:!0,title:t.videoTitle,onlineInfoParams:{aid:t.aid,cid:t.cid,bvid:t.bvid}};n.update(r),j.info(`更新顶部标题`,r)}D.getValue(`artplayer-plugin-bangumi-airborneHelper-enable`)&&(e.plugins[an].update({clip_info_list:t.clip_info_list}),j.info(`更新空降助手信息`,t.clip_info_list))}};function ln(e){let t=[];return e.video.forEach(n=>{if(!e.accept_quality.includes(n.id))return;let r=e.support_formats.find(e=>e.quality===n.id),i=z.findBetterCDN(n.base_url,n.baseUrl,n.backup_url,n.backupUrl);i=z.replaceBangumiVideoCDN(i);let a=r?.new_description;t.push({name:a,url:i,type:n.mimeType,id:n.id,size:n.size,quality:n.id,vip:!!r?.need_vip,bandwidth:n.bandwidth,frameRate:n.frameRate,codecid:n.codecid,codecs:n.codecs})}),t}var un=(e,t)=>`第${e}话 ${t}`,dn=(e,t)=>{let n=[];if(e?.dash?.video?.length){let r=e;n=[...ln({accept_quality:r.accept_quality,support_formats:r.support_formats,video:r.dash.video})],n.length===0&&r.dash.video.length!==0&&(j.warn(`当前选择的视频编码id为: ${t}，但是过滤出的视频没有一个符合的，所以直接放弃使用自定义选择视频编码`),n=[...ln({accept_quality:r.accept_quality,support_formats:r.support_formats,video:r.dash.video})])}else{let t=e;t.durls.length===0&&t.durl!=null&&t.durls.push({quality:t.quality,durl:t.durl}),t.durls.forEach(r=>{if(!t.accept_quality.includes(r.quality)||!r.durl.length)return;let i=r.durl[0],a=e.support_formats.find(e=>e.quality===r.quality),o=z.findBetterCDN(i.url,i.backup_url),s=a?.new_description;n.push({name:s,url:o,type:`audio/mp4`,id:r.quality,size:i.size,quality:r.quality,vip:!!a?.need_vip,bandwidth:0,frameRate:``,codecid:0,codecs:``})})}return n},fn=async(e,t)=>{let{aid:n,bvid:r,cid:i,ep_id:a,title:o,long_title:s}=e;j.info(`解析番剧信息 aid:${n} cid:${i} ep_id:${a}`);let c=un(o,s),l=[],u=[],d=[],f=!1,p=[],m=0,h=0;if(D.getValue(`bili-bangumi-unlockAreaLimit`)){let e=await en.getPlayUrl({avid:n,cid:i,ep_id:a});if(!e)return;if(Array.isArray(e?.clip_info_list)?d=e.clip_info_list:Array.isArray(e?.clip_info)&&(d=e.clip_info),e.type.toLowerCase()===`flv`)f=!0,e.durl.forEach(e=>{let t=z.findBetterCDN(e.url,e.backup_url);t=z.replaceBangumiVideoCDN(t),m+=e.length,h+=e.size,p.push({order:e.order,url:t,duration:e.length,length:e.length,size:e.size})});else if(e.type.toLowerCase()===`dash`||e.type.toLowerCase()===`mp4`)(e?.dash?.audio||[]).forEach(e=>{let t=z.findBetterCDN(e.baseUrl,e.base_url,e.baseUrl,e.backup_url);t=z.replaceBangumiVideoCDN(t),l.push({url:t,id:e.id,size:e.size,text:ot[e.id]||``,bandwidth:e.bandwidth,codecs:e.codecs,mimeType:e.mimeType||e.mime_type})}),j.info(`ArtPlayer: 获取的音频信息`,l),u=u.concat(dn(e)),j.info(`ArtPlayer: 获取的视频画质信息`,u);else{$t.failToast(`暂未适配的视频格式：`+e.format);return}}else{let e=await en.getPlayUrlHTML5({avid:n,cid:i,ep_id:a});if(!e)return;Array.isArray(e?.clip_info_list)?d=e.clip_info_list:Array.isArray(e?.clip_info)&&(d=e.clip_info),u=u.concat(dn(e))}let g=u.map((e,t)=>({html:e.name,url:e.url,quality:e.quality,mimeType:e.type,codecid:e.codecid,codecs:e.codecs,frameRate:e.frameRate,bandwidth:e.bandwidth})),_={container:null,epList:t,cid:i,aid:n,bvid:r,ep_id:a,videoTitle:c,danmukuUrl:`https://${I.web_host}/x/v1/dm/list.so?oid=${i}`,quality:g,clip_info_list:d,isFlv:f,flvInfo:p,flvTotalDuration:m,flvTotalSize:h};return _.url=u?.[0]?.url,l.length&&(_.audioList=l.map((e,t)=>({isDefault:t===0,url:e.url,soundQualityCode:e.id,soundQualityCodeText:e.text,bandwidth:e.bandwidth,codecs:e.codecs,mimeType:e.mimeType,size:e.size}))),_},pn={$data:{art:null},updateArtPlayerVideoInfo(e,t){let n=this;tn.waitReactPropsToSet(y.className.bangumi_new+` [class^="Player_container"]`,`reactFiber`,{check(e){return typeof e?.return?.memoizedState?.queue?.lastRenderedState?.[0]?.epInfo?.bvid==`string`},async set(r){let i=r?.return?.memoizedState?.queue?.lastRenderedState?.[0]?.epInfo,a=P(`#bilibiliPlayer`);if(e??=i,t==null){t=[];let e=P(y.className.bangumi_new+` [class^="EpisodeList_episodeListWrap"]`);if(e){let n=O.getReactInstance(e)?.reactFiber?.return?.memoizedState?.memoizedState?.[0]?.episodes;Array.isArray(n)&&(t=n)}}let o=await fn(e,t);if(o==null)return;let s=P(`#artplayer`);if(!s){let e=k.createElement(`div`,{className:`artplayer-container`,innerHTML:`
									<div id="artplayer"></div>
									`});s=e.querySelector(`#artplayer`),k.after(a,e)}if(o.container=s,n.$data.art==null){let e=await cn.init(o);if(e)n.$data.art=e;else return;n.$data.art.volume=1}else cn.update(n.$data.art,o)}})}},mn={$data:{art:null},init(){D.execMenuOnce(`bili-bangumi-initialScale`,()=>{V.initialScale()}),D.execMenuOnce(`bili-bangumi-hook-callApp`,()=>{this.hookCallApp()}),D.execMenu(`bili-bangumi-cover-clicl-event-chooseEp`,()=>{this.setChooseEpClickEvent()}),D.execMenu(`bili-bangumi-cover-clicl-event-other`,()=>{this.setClickOtherVideo()}),D.execMenu(`bili-bangumi-cover-clicl-event-recommend`,()=>{this.setRecommendClickEvent()}),this.coverVideoPlayer()},hookCallApp(){let e=b.setTimeout;b.setTimeout=function(...t){if(t[0].toString().includes(`autoOpenApp`)){j.success(`阻止唤醒App`,t);return}return Reflect.apply(e,this,t)}},setChooseEpClickEvent(){k.waitNode(y.className.bangumi+` .ep-list-pre-wrapper ul.ep-list-pre-container`).then(e=>{j.info(`覆盖【选集】的点击事件`),k.on(e,`click`,`li.episode-item`,function(e){k.preventEvent(e),Qt.jumpToUrl(e)},{capture:!0})}),k.waitNode(y.className.bangumi+` .ep-list-pre-wrapper ul.season-list-wrapper`).then(e=>{j.info(`覆盖【xx季】的点击事件`),k.on(e,`click`,`li`,function(e){k.preventEvent(e),Qt.jumpToUrl(e)},{capture:!0})}),k.waitNode(y.className.bangumi+` .ep-list-pre-header`).then(e=>{j.info(`覆盖【选集】右上角的【全xx话】Arrow的点击事件`),k.on(e,`click`,function(e){k.preventEvent(e)},{capture:!0})}),k.on(document,`click`,[y.className.bangumi_new+` [class^="EpisodeList_episodeListWrap"] m-open-app[universallink]`,y.className.bangumi_new+` [class^="SeasonList_container"] m-open-app[universallink]`],(e,t)=>{let n=Qt.getUrl(t);if(!n){r.default.error(`获取跳转链接失败`);return}V.goToUrl(n)},{capture:!0})},setClickOtherVideo(){k.waitNode(y.className.bangumi+` .section-preview-wrapper ul.ep-list-pre-container`).then(e=>{j.info(`覆盖【PV&其他】、【预告】、【主题曲】的点击事件`),k.on(e,`click`,`li.section-preview-item`,function(e){k.preventEvent(e),Qt.jumpToUrl(e)},{capture:!0})}),k.waitNode(y.className.bangumi+` .section-preview-header`).then(e=>{j.info(`覆盖【PV&其他】、【预告】、【主题曲】右上角的Arrow的点击事件`),k.on(e,`click`,function(e){k.preventEvent(e)},{capture:!0})}),k.on(document,`click`,y.className.bangumi_new+` [class^="SectionPanel_container"] m-open-app[universallink]`,(e,t)=>{let n=Qt.getUrl(t);if(!n){r.default.error(`获取跳转链接失败`);return}V.goToUrl(n)},{capture:!0})},setRecommendClickEvent(){k.waitNode(y.className.bangumi+` .recom-wrapper ul.recom-list`).then(e=>{j.info(`覆盖【更多推荐】番剧的点击事件`),k.on(e,`click`,`li.recom-item-v2`,function(e){k.preventEvent(e),Qt.jumpToUrl(e)},{capture:!0})}),k.on(document,`click`,y.className.bangumi_new+` [class^="Footer_container"] m-open-app[universallink]`,(e,t)=>{let n=Qt.getUrl(t);if(!n){r.default.error(`获取跳转链接失败`);return}V.goToUrl(n)},{capture:!0})},coverVideoPlayer(){if(P(`#artplayer`))j.warn(`已存在播放器，更新播放信息`);else{N(`
			.player-wrapper,
			.open-app-bar,
			${y.className.bangumi_new} [class^="Player_videoWrap"] > div:not(.artplayer-container){
				display: none !important;
			}
			
			${at}
			
			${Zt}
			
			.artplayer-container{
				height: -webkit-fill-available;
				height: 100%;
			}
			`);let e=D.getValue(`bili-bangumi-artplayer-controlsPadding-left-right`,0);e!=0&&N(`
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
				`)}pn.updateArtPlayerVideoInfo()}},hn={async getSearchInputPlaceholder(){let e=await M.get(`https://${I.web_host}/x/web-interface/wbi/search/default`,{fetch:!0,headers:{accept:`application/json, text/plain, */*`,"accept-language":`zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6`,"cache-control":`no-cache`,pragma:`no-cache`,"sec-ch-ua":`""`,"sec-ch-ua-mobile":`?1`,"sec-ch-ua-platform":`""`,"sec-fetch-dest":`empty`,"sec-fetch-mode":`cors`,"sec-fetch-site":`same-site`},allowInterceptConfig:!1});if(!e.status)return;let t=O.toJSON(e.data.responseText);if(L.isWebApiSuccess(t))return t.data},async getBangumiSearchResult(e){let t=Re.getAccessToken();if(O.isNull(t))return{isSuccess:!1,data:{code:-101,message:`请先使用脚本菜单的【通过扫码并解析access_key】`}};let n={search_type:`media_bangumi`,keyword:e.keyword,from_client:`BROWSER`,drm_tech_type:`2`,module:`bangumi`,area:e.area.toLowerCase(),access_key:Re.getAccessToken()},r=`https://${e.host}/x/web-interface/search/type?${await Xe(n)}`,i=await M.get(r,{fetch:!1,headers:{"User-Agent":O.getRandomAndroidUA()}});if(!i.status)return;let a=O.toJSON(i.data.responseText);return L.isWebApiSuccess(a)?{isSuccess:!0,data:a.data.result}:(j.error(`请求失败，当前代理服务器信息：${JSON.stringify(e.host)}`),j.error(`请求失败，当前请求的响应信息：${JSON.stringify(a)}`),{isSuccess:!1,data:a})}},gn=`#app .m-search {
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
`,_n={$flag_css:{enableOtherAreaSearchBangumi:!1},init(){N(gn),k.onReady(()=>{D.execMenu(`bili-search-enableOtherAreaSearchBangumi`,()=>{this.enableOtherAreaSearchBangumi()})})},enableOtherAreaSearchBangumi(){this.$flag_css.enableOtherAreaSearchBangumi||(this.$flag_css.enableOtherAreaSearchBangumi=!0,N(`
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
			`));let e=null;k.waitNode(`.m-search-result .tabs:not(:has(.gm-tab-item))`).then(t=>{Ve.getSearchProxyHost().forEach(e=>{let n=k.createElement(`a`,{className:`tab-item gm-tab-item`,innerHTML:`番剧（${e.name}）`},{"data-area":e.area,"data-host":e.host});t.appendChild(n)});let n=n=>{t.querySelectorAll(`.tab-item`).forEach(e=>n!=e&&e.classList.remove(`on`)),n.classList.add(`on`),e?.close()},i=()=>{let e=Ve.getSearchProxyHost();F(`.tab-item.gm-tab-item`).forEach(t=>{let n=t.getAttribute(`data-area`),r=e.find(e=>e.area===n);r&&t.setAttribute(`data-host`,r.host)})};k.on(t,`click`,`.tab-item`,async t=>{let a=t.target;i(),n(a);let o=P(`.result-panel`),s=P(`.gm-result-panel`);if(s&&(s.remove(),k.show(o)),!a.classList.contains(`gm-tab-item`))return;let c=a.dataset.area,l=a.dataset.host,u=P(`.m-search-result`),d=B.getVue(u);d.switchTab(233),k.hide(o);let f=d.keyword;e=r.default.loading(`搜索中，请稍后...`,{onClose(){e=null}});let p=await hn.getBangumiSearchResult({keyword:f,area:c,host:l});if(e.close(),!p)return;let m=p.data;if(!p.isSuccess||!Array.isArray(m)){alert(x.toStr(m));return}j.info(`搜索结果：`,m);let h=k.createElement(`div`,{className:`gm-result-panel`,innerHTML:`
						<div class="gm-list-view">
							<div class="gm-video-list-box">
								<div class="gm-video-list">
									<div class="gm-card-box"></div>
								</div>
							</div>
						</div>
					`}),g=h.querySelector(`.gm-card-box`);u.appendChild(h);let _=document.createDocumentFragment();m.forEach(e=>{let t=this.createSearchResultVideoItem(e);_.appendChild(t)}),g.appendChild(_)})})},createSearchResultVideoItem(e){let t=k.createElement(`div`,{className:`gm-card-item`,innerHTML:`
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
							<div class="gm-card-styles">${e.styles||Reflect.get(e,`style`)||Reflect.get(e,`styles_v2`)||``}</div>
						</div>
						<div class="gm-card-media_score">
							
						</div>
					</div>
					<div class="gm-card-ferture">
					</div>
				</div>
				<div class="gm-card-eps">
					
				</div>
				`},{"data-url":e.url,"data-type":e.type,"data-media_id":e.media_id,"data-pgc_season_id":e.pgc_season_id,"data-is_follow":e.is_follow,"data-is_selection":e.is_selection});Reflect.set(t,`data-option`,e),k.on(t,`click`,t=>{k.preventEvent(t),window.open(e.url,`_blank`)});let n=t.querySelector(`.gm-card-display-info`),r=[];Array.isArray(e?.display_info)&&(r=r.concat(e.display_info)),Array.isArray(e?.badges)&&(r=r.concat(e.badges)),r=O.uniqueArray(r,e=>e.text),r.forEach(e=>{let t=k.createElement(`span`,{className:`gm-card-badge-info-item`,innerText:e.text});typeof e.border_color==`string`&&(t.style.border=`1px solid ${e.border_color}`,t.style.color=e.border_color),k.append(n,t)}),e.pubtime&&k.append(n,`
				<span>${O.formatTime(e.pubtime*1e3,`yyyy`)}</span>
				`);let i=e.areas||Reflect.get(e,`area`);i&&(n.children.length&&k.append(n,`
					<span> | </span>
				`),k.append(n,`
					<span>${i}</span>
				`));let a=t.querySelector(`.gm-card-media_score`);e.media_score&&e.media_score.user_count&&k.append(a,`
				<span class="gm-card-media_score-score">${e.media_score?.score||0}分</span>
				<span class="gm-card-media_score-user_count">${e.media_score?.user_count||0}人参与</span>
				`);let o=t.querySelector(`.gm-card-eps`);return[...e.eps||[],...Reflect.get(e,`episodes_new`)||[]].filter(e=>O.isNotNull(e)).forEach(e=>{let t=e.title||e.long_title,n=e.url||Reflect.get(e,`uri`),r=k.createElement(`div`,{className:`gm-card-ep-conatiner`,innerHTML:`
				<div class="gm-card-ep-badges-container">
					
				</div>
				<div class="gm-card-ep-info-container">
					${t}
				</div>`},{"data-id":e.id,"data-url":n,"data-title":t,"data-long_title":e.long_title}),i=r.querySelector(`.gm-card-ep-badges-container`);if(r.querySelector(`.gm-card-ep-info-container`),Array.isArray(e.badges)&&e.badges.length){let t=e.badges[0],n=k.createElement(`span`,{className:`gm-card-ep-badge-top-right`,innerText:t.text});typeof t.bg_color==`string`&&(n.style.backgroundColor=t.bg_color),typeof t.text_color==`string`&&(n.style.color=t.text_color),k.append(i,n)}k.on(r,`click`,e=>{k.preventEvent(e),window.open(n,`_blank`)}),o.appendChild(r)}),t},searchBangumi(){}},vn={$flag:{mutationSearchResult:!1},init(){this.mutationSearchResult()},mutationSearchResult(){this.$flag.mutationSearchResult||(this.$flag.mutationSearchResult=!0,N(`
        .bangumi-list{
            padding: 0 10px;
        }
        `),O.mutationObserver(document,{config:{subtree:!0,childList:!0},callback:O.debounce(()=>{document.querySelectorAll(`.m-search-bangumi-item`).forEach(e=>{let t=B.getVue(e);if(!t)return;let n=t.info;if(!n)return;let r=_n.createSearchResultVideoItem(n);k.after(e,r),e.remove()})})}))}},yn={init(){D.execMenuOnce(`bili-search-vue-prop-noCallApp`,()=>{this.noCallApp()}),D.execMenuOnce(`bili-search-vue-prop-openAppDialog`,()=>{this.openAppDialog()})},noCallApp(){let e=new O.LockFunction(()=>{F(`.video-list .card-box > div:not([data-gm-inject-no-call-app])`).forEach(e=>{let t=B.getVue(e);t&&typeof t.noCallApp==`boolean`&&(Object.defineProperty(t,`noCallApp`,{value:!0,writable:!1,enumerable:!0,configurable:!0}),e.setAttribute(`data-gm-inject-no-call-app`,`true`))})});O.mutationObserver(document,{config:{subtree:!0,childList:!0},callback(){e.run()}})},openAppDialog(){let e=new O.LockFunction(()=>{F(`.video-list .card-box > div:not([data-gm-inject-openAppDialog])`).forEach(e=>{let t=B.getVue(e);t&&typeof t.openAppDialog==`boolean`&&(Object.defineProperty(t,`openAppDialog`,{value:!1,writable:!1,enumerable:!0,configurable:!0}),e.setAttribute(`data-gm-inject-openAppDialog`,`true`))})});O.mutationObserver(document,{config:{subtree:!0,childList:!0},callback(){e.run()}})}},bn={init(){v.isSearchResult()&&_n.init(),yn.init(),D.execMenuOnce(`bili-search-cover-cancel`,()=>{this.coverCancel()}),D.execMenu(`bili-search-beautifySearchResult`,()=>{vn.init()}),D.execMenuOnce(`bili-search-cover-card-result-click-event`,()=>{this.coverCardResultClickEvent()}),k.onReady(()=>{D.execMenu(`bili-search-inputAutoFocus`,()=>{this.inputAutoFocus()})})},coverCancel(){j.info(`覆盖【取消】按钮的点击事件`),k.on(document,`click`,`a.cancel`,e=>{j.info(`点击取消按钮`),k.preventEvent(e),window.history.back()},{capture:!0})},inputAutoFocus(){if(new URLSearchParams(window.location.search).has(`keyword`)){j.warn(`当前在搜索结果页面，不执行输入框自动获取焦点`);return}j.info(`输入框自动获取焦点`),k.waitNode(`.m-search .m-search-search-bar input[type="search"]`,1e4).then(e=>{if(!e){j.error(`获取输入框失败`);return}e.focus()})},coverCardResultClickEvent(){j.info(`覆盖搜索结果点击事件`),k.on(document,`click`,`.video-list .card-box > div`,(e,t)=>{let n=t,r=B.getVue(n);if(!r)return;let i=r.cardClick;typeof i==`function`&&(k.preventEvent(e),i(e))},{capture:!0})}},xn={init(){D.execMenuOnce(`bili-live-block-chatRoom`,()=>this.blockChatRoom()),D.execMenuOnce(`bili-live-block-brush-prompt`,()=>this.blockBrushPrompt()),D.execMenuOnce(`bili-live-block-control-panel`,()=>this.blockControlPanel())},blockChatRoom(){return j.info(`屏蔽聊天室`),x.addBlockCSS(`#chat-items`)},blockBrushPrompt(){return j.info(`屏蔽xxx进入直播间`),x.addBlockCSS(`#brush-prompt`)},blockControlPanel(){return j.info(`屏蔽底部工具栏`),x.addBlockCSS(`.control-panel`)}},Sn={init(){xn.init(),D.execMenuOnce(`bili-live-prevent-openAppBtn`,()=>{this.preventOpenAppBtn()})},preventOpenAppBtn(){k.waitNode(`body`).then(e=>{j.info(`阻止.open-app-btn元素触发点击事件`),k.on(e,`click`,`.open-app-btn`,function(e,t){let n=B.getVue(t);typeof n?.open==`function`&&(n.open=function(){j.info(`成功阻止.open-app-btn元素触发点击事件`)})},{capture:!0})})}},Cn={$data:{dispatchCallBackList:[]},init(){D.execMenu(`bili-opus-variable-autoOpenApp`,()=>{this.autoOpenApp()}),D.execMenu(`bili-opus-variable-go404`,()=>{this.go404()}),D.execMenu(`bili-opus-variable-handleFallback`,()=>{this.dispatch((e,t)=>{if(typeof t==`string`&&t===`opus/handleFallback`&&![1,2].includes(e.fallback.type))return j.success(`禁止调用handleFallback函数前往404`),typeof e?.showComment==`boolean`&&e.showComment&&typeof e?.initFullComment==`function`&&e.initFullComment(),!1})})},isLimit(){j.info(`等待 观察并覆盖变量isLimit`),B.watchVuePropChange(y.className.opus,e=>e.isLimit,e=>{e.isLimit=!1,j.success(`观察者：覆盖变量isLimit=false`)})},autoOpenApp(){B.waitVuePropToSet(y.className.opus,{msg:`等待 覆盖函数autoOpenApp`,check(e){return typeof e?.autoOpenApp==`function`},set(e){j.success(`成功 覆盖函数autoOpenApp`),e.autoOpenApp=function(){j.success(`禁止调用autoOpenApp函数`)}}})},go404(){B.waitVuePropToSet(y.className.opus,{msg:`等待 覆盖函数go404`,check(e){return typeof e?.go404==`function`},set(e){j.success(`成功 覆盖函数go404`),e.go404=function(){j.success(`禁止调用go404函数`)}}})},fallback(){B.waitVuePropToSet(y.className.opus,{msg:`等待 覆盖对象fallback`,check(e){return typeof e?.fallback?.type==`number`},set(e){j.success(`成功 覆盖对象fallback`),e.$watch(()=>e?.fallback,()=>{e.fallback=null,j.success(`覆盖对象fallback`)},{deep:!0,immediate:!0})}})},dispatch(e){let t=e.toString();for(let e=0;e<this.$data.dispatchCallBackList.length;e++)if(this.$data.dispatchCallBackList[e].toString()===t)return;if(j.info(`添加dispatch回调判断`),this.$data.dispatchCallBackList.push(e),this.$data.dispatchCallBackList.length>1)return;let n=this;B.waitVuePropToSet(y.className.opus,{msg:`等待 覆盖函数dispatch`,check(e){return typeof e?.$store?.dispatch==`function`},set(e){j.success(`成功 覆盖函数dispatch`);let t=e.$store.dispatch;e.$store.dispatch=function(...r){let i=r[0];for(let t=0;t<n.$data.dispatchCallBackList.length;t++){let r=n.$data.dispatchCallBackList[t];if(typeof r==`function`){let t=r(e,i);if(typeof t==`boolean`&&!t)return}}return Reflect.apply(t,this,r)}}})}},wn={init(){Cn.init(),D.execMenuOnce(`bili-opus-cover-topicJump`,()=>{this.coverTopicJump()}),D.execMenuOnce(`bili-opus-automaticallyExpandToReadFullText`,()=>(Cn.isLimit(),this.automaticallyExpandToReadFullText())),D.execMenuOnce(`bili-opus-cover-header`,()=>{this.coverHeaderJump()})},coverTopicJump(){j.info(`覆盖话题跳转点击事件`),k.on(document,`click`,y.className.opus+` .launch-app-btn.opus-module-topic`,function(e){let t=e.target,n=B.getVue(t);if(!n){r.default.error(`获取话题的__vue__失败`);return}let i=n?.$props?.data,a=i?.jump_url;if(O.isNull(a)){r.default.error(`获取话题的jump_url失败`);return}j.info(`话题的跳转信息: `,i),V.goToUrl(a)},{capture:!0})},automaticallyExpandToReadFullText(){return j.info(`自动展开阅读全文`),[x.addBlockCSS(y.className.opus+` .opus-read-more`),N(`
			${y.className.opus} .opus-module-content{
				overflow: unset !important;
				max-height: unset !important;
			}
			`)]},coverHeaderJump(){j.info(`覆盖header点击事件`),k.on(document,`click`,y.className.opus+` .opus-module-author`,function(e){k.preventEvent(e);let t=e.target,n=B.getVue(t);if(!n){r.default.error(`获取vue属性失败`);return}let i=n?.data?.mid;if(!i){r.default.error(`获取mid失败`);return}V.goToUrl(tt.getUserSpaceUrl(i))},{capture:!0})}},Tn={init(){}},En={init(){D.execMenuOnce(`bili-dynamic-cover-topicJump`,()=>{this.coverTopicJump()}),D.execMenuOnce(`bili-dynamic-cover-atJump`,()=>{this.coverAtJump()}),D.execMenuOnce(`bili-dynamic-cover-referenceJump`,()=>{this.coverReferenceJump()}),D.execMenuOnce(`bili-dynamic-cover-header`,()=>{this.coverHeaderJump()})},coverHeaderJump(){j.info(`覆盖header点击事件`),k.on(document,`click`,y.className.dynamic+` .launch-app-btn .dyn-header`,function(e){k.preventEvent(e);let t=e.target,n=B.getVue(t);if(!n){r.default.error(`获取vue属性失败`);return}let i=n.url;if(!i){r.default.error(`获取url失败`);return}V.goToUrl(i)},{capture:!0})},coverTopicJump(){j.info(`覆盖话题跳转点击事件`),k.on(document,`click`,y.className.dynamic+` .launch-app-btn .bili-dyn-topic`,function(e){k.preventEvent(e);let t=e.target,n=B.getVue(t);if(!n){r.default.error(`获取vue属性失败`);return}let i=n?.$props?.data,a=i?.jump_url;if(O.isNull(a)){r.default.error(`获取jump_url失败`);return}j.info(`话题的跳转信息: `,i),V.goToUrl(a)},{capture:!0})},coverAtJump(){j.info(`覆盖@ 跳转`),k.on(document,`click`,y.className.dynamic+` .at`,function(e){k.preventEvent(e);let t=e.target,n=t.getAttribute(`data-oid`)||B.getVue(t)?.$props?.rid;if(O.isNull(n)){r.default.error(`获取data-oid或rid失败`);return}j.info(`用户的oid: `+n),V.goToUrl(tt.getUserSpaceDynamicUrl(n))},{capture:!0})},coverReferenceJump(){j.info(`覆盖引用的点击事件`),k.on(document,`click`,y.className.dynamic+` .dyn-content .reference .dyn-orig-author`,function(e){k.preventEvent(e);let t=e.target.getAttribute(`data-url`);if(!t){r.default.error(`获取data-url失败`);return}V.goToUrl(t)},{capture:!0}),k.on(document,`click`,y.className.dynamic+` .dyn-content .reference .dyn-archive`,function(e){k.preventEvent(e);let t=e.target,n=B.getVue(t);if(!n){r.default.error(`获取vue属性失败`);return}let i=n?.data?.jump_url;if(O.isNull(i)){r.default.error(`获取jump_url失败`);return}V.goToUrl(i)},{capture:!0})}},Dn={$isHook:{windowPlayerAgent:!1,hookWebpackJsonp_openApp:!1,overRideLaunchAppBtn_Vue_openApp:!1,overRideBiliOpenApp:!1,overRideWxTaghandleClick:!1},$data:{setTimeout:[]},windowWebPack(e=`webpackJsonp`,t,n){let r;je.Object.defineProperty(b,e,{get(){return r},set(i){j.success(`成功劫持webpack，当前webpack名：`+e),r=i;let a=r.push;r.push=function(...e){let r=e[0][0];return(t==r||Array.isArray(t)&&Array.isArray(r)&&JSON.stringify(t)===JSON.stringify(r))&&Object.keys(e[0][1]).forEach(t=>{let r=e[0][1][t];e[0][1][t]=function(...e){let t=r.call(this,...e);return e[0]=n(e[0]),t}}),a.call(this,...e)}}})},setTimeout(e){if(this.$data.setTimeout.push(e),this.$data.setTimeout.length>1){j.info(`window.setTimeout hook新增劫持判断参数：`+e);return}b.setTimeout=function(...t){let n=t[0].toString();if(n.match(e)){j.success(`劫持setTimeout的函数`,n);return}return je.setTimeout.apply(this,t)}},overRideLaunchAppBtn_Vue_openApp(){if(this.$isHook.overRideLaunchAppBtn_Vue_openApp)return;this.$isHook.overRideLaunchAppBtn_Vue_openApp=!0;function e(e){typeof e.openApp==`function`&&(e.openApp.toString().includes(`阻止唤醒App`)||(e.openApp=function(...e){j.success(`openApp：阻止唤醒App`,e)}))}O.mutationObserver(document,{config:{subtree:!0,childList:!0,attributes:!0},immediate:!0,callback(){F(`.launch-app-btn`).forEach(t=>{let n=B.getVue(t);n&&(e(n),n.$children&&n.$children.length&&n.$children.forEach(t=>{e(t)}))})}})},overRideBiliOpenApp(){this.$isHook.overRideBiliOpenApp||(this.$isHook.overRideBiliOpenApp=!0,O.mutationObserver(document,{config:{subtree:!0,childList:!0,attributes:!0},immediate:!0,callback(){[...Array.from(F(`bili-open-app`)),...Array.from(F(`m-open-app`))].forEach(e=>{if(e.hasAttribute(`data-inject-opener-open`))return;let t=Reflect.get(e,`opener`);t!=null&&typeof t?.open==`function`&&(Reflect.set(t,`open`,e=>{j.success(`拦截bili-open-app.open跳转: ${JSON.stringify(e)}`),typeof e?.universalLink==`string`&&V.goToUrl(e.universalLink)}),e.setAttribute(`data-inject-opener-open`,`true`))})}}))},overRideWxTaghandleClick(){this.$isHook.overRideWxTaghandleClick||(this.$isHook.overRideWxTaghandleClick=!0,O.mutationObserver(document,{config:{subtree:!0,childList:!0,attributes:!0},immediate:!0,callback(){[...Array.from(F(`.wx-tag`))].forEach(e=>{if(e.hasAttribute(`data-inject-vueins-handle-click`))return;let t=B.getVue(e);t&&(typeof t?.handleClick==`function`&&(t.handleClick=function(){typeof t.goToVideo==`function`?t.goToVideo():r.default.error(`.wx-tag不存在goToVideo函数`,{consoleLogContent:!0})},e.setAttribute(`data-inject-vueins-handle-click`,`true`)),Array.isArray(t?.$children)&&t.$children.length&&typeof t.$children[0].handleClick==`function`&&(t.$children[0].handleClick=t.handleClick))})}}))}},On=`#app .m-head .m-recommend-view {
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
`,kn;(function(e){e.CardGoto=function(e){return e.AV=`av`,e.Bangumi=`bangumi`,e.Picture=`picture`,e}({}),e.CardType=function(e){return e.SmallCoverV2=`small_cover_v2`,e}({}),e.ToastEnum=function(e){return e.将优化首页此类内容=`将优化首页此类内容`,e.将减少相似内容推荐=`将减少相似内容推荐`,e}({}),e.Subtitle=function(e){return e.选择后将优化首页此类内容=`(选择后将优化首页此类内容)`,e.选择后将减少相似内容推荐=`(选择后将减少相似内容推荐)`,e}({}),e.Title=function(e){return e.反馈=`反馈`,e.我不想看=`我不想看`,e.添加至稍后再看=`添加至稍后再看`,e}({}),e.Type=function(e){return e.Dislike=`dislike`,e.Feedback=`feedback`,e.WatchLater=`watch_later`,e}({}),e.TrackID=function(e){return e.All20ShylfAIGalaxy1011673305601416500=`all_20.shylf-ai-galaxy-101.1673305601416.500`,e}({})})(kn||={});var An=23442827791579n,jn=1n<<51n,Mn=58n,Nn=`FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf`;function Pn(e){let t=[`B`,`V`,`1`,`0`,`0`,`0`,`0`,`0`,`0`,`0`,`0`,`0`],n=t.length-1,r=(jn|BigInt(e))^An;for(;r>0;)t[n]=Nn[Number(r%BigInt(Mn))],r/=Mn,--n;return[t[3],t[9]]=[t[9],t[3]],[t[4],t[7]]=[t[7],t[4]],t.join(``)}var Fn=e=>(e.startsWith(`http://`)&&(e=e.replace(/^http/,`https`)),e),In={$flag:{isInitCSS:!1,isLoadingNextPage:!1},$data:{intersectionObserver:null,loadNums:0},$ele:{$listView:null,$videoListBox:null,$videoList:null,$cardBox:null,$listViewShim:null},$cardGoto:{av:`av`,picture:`picture`},init(){this.setCSS(),k.onReady(()=>{this.addRecommendTag()})},setCSS(){this.$flag.isInitCSS||(this.$flag.isInitCSS=!0,N(On))},reset(){j.info(`重置状态`),this.$flag.isLoadingNextPage=!1,this.removeScrollEvent(),Object.keys(this.$ele).forEach(e=>{this.$ele[e]=null})},addRecommendTag(){if(P(`.channel-menu a.recommend-tag`))return;let e=P(`.channel-menu .v-switcher`);if(!e){j.error(`添加推荐标签失败，原因：.channel-menu .v-switcher不存在`),r.default.error(`添加推荐标签失败，原因：.channel-menu .v-switcher不存在`);return}let t=k.createElement(`a`,{className:`v-switcher__header__tabs__item recommend-tag`,innerHTML:`<span>推荐</span>`},{href:`javascript:;`}),n=k.createElement(`div`,{className:`m-recommend-view`,innerHTML:`
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
            `});this.$ele.$listView=n.querySelector(`.list-view`),this.$ele.$videoListBox=n.querySelector(`.video-list-box`),this.$ele.$videoList=n.querySelector(`.video-list`),this.$ele.$cardBox=n.querySelector(`.card-box`),this.$ele.$listViewShim=n.querySelector(`.list-view__shim`),this.$ele.$listViewShim.style.cssText=`z-index:-1;user-select:none;pointer-events:none;background:transparent;left:0;bottom:0;width:100%;height:200px;`;let i=document.querySelector(`#app .m-head`);i&&i.appendChild(n),k.on(t,`click`,e=>{k.preventEvent(e),t.classList.add(`is-avtive`),this.recommendClickEvent()}),k.on(e,`click`,()=>{t.classList.remove(`is-avtive`)},{capture:!0}),k.on(this.$ele.$cardBox,`click`,`.v-card`,e=>{k.preventEvent(e);let t=e.target;window.open(t.href,`_blank`)}),k.before(e,t),this.setScrollEvent(),window.location.hash===`#/recommend/`&&(j.info(`当前hash为推荐视频，出动触发`),t.click())},async recommendClickEvent(){V.goToUrl(`#/recommend/`,!0)},setScrollEvent(){j.success(`推荐视频监听滚动: IntersectionObserver`),this.$data.intersectionObserver=new IntersectionObserver(async e=>{if(!this.$flag.isLoadingNextPage&&e[0].isIntersecting){this.$flag.isLoadingNextPage=!0;let e=await this.scrollEvent();this.$flag.isLoadingNextPage=!1,this.$data.loadNums<=1&&e?(k.hide(this.$ele.$listViewShim,!1),await O.sleep(500),k.show(this.$ele.$listViewShim,!1)):k.show(this.$ele.$listViewShim,!1)}},{threshold:0,rootMargin:`0px 0px 0px 0px`}),this.$data.intersectionObserver.observe(this.$ele.$listViewShim)},removeScrollEvent(){this.$data.intersectionObserver?.disconnect(),this.$data.intersectionObserver=null},async scrollEvent(){let e=await this.getRecommendVideoInfo();if(!e)return!1;j.success(`获取推荐视频信息`,e);let t=document.createDocumentFragment(),n=D.getValue(`bili-head-recommend-push-graphic`);return e.forEach(e=>{let r=null;if(e.goto===this.$cardGoto.av)r=this.getRecommendItemAVElement(e);else if(e.goto===this.$cardGoto.picture)if(n)r=this.getRecommendItemPictureElement(e);else return;else{j.error(`该goto暂未适配`,e);return}t.appendChild(r)}),this.$ele.$cardBox.appendChild(t),this.$data.loadNums++,!0},async getRecommendVideoInfo(){let e={appkey:Fe.ios.appkey,access_key:Re.getAccessTokenInfo()?.access_token||``},t=await M.get(`https://app.bilibili.com/x/v2/feed/index?`+O.toSearchParamsStr(e),{headers:{"Content-Type":`application/x-www-form-urlencoded`}});if(!t.status)return;let n=O.toJSON(t.data.responseText);if(!L.isWebApiSuccess(n)){r.default.error(n.message);return}return n.data.items},getRecommendItemPictureElement(e){let t=e.goto,n=e.param,r=`/opus/`+n,i=e.args.up_name,a=e.title,o=Fn(e.cover),s=e.cover_left_text_1,c=k.createElement(`a`,{className:`v-card`,href:r,innerHTML:`
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
                            ${s}
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
                `},{"data-param":n,"data-title":a,"data-goto":t});return c[`data-picture`]=e,c},getRecommendItemAVElement(e){let t=e.goto,n=e?.player_args?.aid||e.args.aid,r=`/video/`+Pn(n),i=e.args.up_name,a=e.title,o=Fn(e.cover),s=e.cover_left_text_1,c=e.cover_left_text_2,l=e.cover_right_text,u=k.createElement(`a`,{className:`v-card`,href:r,innerHTML:`
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
                        <span class="gm-video-duration">${l}</span>
                    </div>
                </div>
                <p class="title">${a}</p>
                <div class="gm-up-info">
                    <div class="gm-up-name">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
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
                    </div>
                </div>
                `},{"data-aid":n,"data-title":a,"data-goto":t});return u[`data-video`]=e,u}},Ln={$flag:{isInit_reconfigurationTinyAppSettingButton:!1,isInit_beautifyTopNavBar_css:!1},init(){D.execMenuOnce(`bili-head-supplementaryVideoStreamingInformation`,()=>{this.addVideoListUPInfo()}),D.execMenu(`bili-head-recommend-enable`,()=>{In.init()})},addVideoListUPInfo(){j.info(`添加视频列表UP主信息`),N(`
		${y.className.head} .video-list .card-box .gm-up-info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: var(--pd-width);
		}
		${y.className.head} .video-list .card-box .gm-up-info .gm-up-name {
			display: flex;
			align-items: center;
			font-size: 3vmin;
			color: #999A9E;
		}
		${y.className.head} .video-list .card-box .gm-up-info .gm-up-name svg {
			margin-right: calc(var(--pd-width) / 2);
			width: 3vmin;
			height: 3vmin;
		}
		${y.className.head} .gm-video-duration{
			margin: 0 auto;
		}
        `),k.waitNode(y.className.head+` .video-list .card-box`).then(()=>{let e=new O.LockFunction(()=>{F(y.className.head+` .video-list .card-box .v-card`).forEach(e=>{let t=B.getVue(e),n=t?.info?.author?.name||t?.info?.owner?.name,r=t?.info?.duration;if(n&&!e.querySelector(`.gm-up-info`)){let t=document.createElement(`div`);t.innerHTML=`
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
            </div>`,t.className=`gm-up-info`,e.appendChild(t)}if(r){let t=e.querySelector(`.count`);if(t&&!t.querySelector(`.gm-video-duration`)){let e=typeof r==`string`?r:V.parseDuration(r),n=document.createElement(`span`);n.className=`gm-video-duration`,n.innerHTML=e,t.appendChild(n)}}})},25);O.mutationObserver(document.body,{config:{subtree:!0,childList:!0,attributes:!0},callback(){e.run()}})})},async reconfigurationTinyAppSettingButton(){j.info(`重构tinyApp右上角的设置按钮图标`),this.$flag.isInit_reconfigurationTinyAppSettingButton||(this.$flag.isInit_reconfigurationTinyAppSettingButton=!0,N(`

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
			`));let e=await k.waitNode(`.nav-bar .icon-config`,1e4);if(!e){j.error(`未找到设置按钮图标，无法重构`);return}e.outerHTML=`
		<div class="gm-face">
			<div class="gm-face-avatar">
				<img src="http://i0.hdslb.com/bfs/face/member/noface.jpg">
			</div>
		</div>
		`;let t=!1,n=null,i=P(`.gm-face`),a=i.querySelector(`img`);B.waitVuePropToSet(`#app`,[{check(e){return typeof e?.$store?.state?.common?.userInfo?.isLogin==`boolean`},set(e){let r=e?.$store?.state?.common?.userInfo;if(t=r?.isLogin,t){if(n=r?.mid,n==null){j.warn(`当前是脚本设置的isLogin但其实未登录账号`),t=!1;return}r?.uname,a.src=r?.face||a.src}else j.warn(`经检测，Bilibili尚未登录账号`)}}]),k.on(i,`click`,e=>{if(k.preventEvent(e),t)if(n!=null){let e=tt.getUserSpaceUrl(n);V.goToUrl(e,!1)}else r.default.error(`获取用户id失败`);else V.goToLogin(window.location.href)})},beautifyTopNavBar(){j.info(`美化顶部navbar`),this.$flag.isInit_beautifyTopNavBar_css||(this.$flag.isInit_beautifyTopNavBar_css=!0,N(`
			/* 隐藏logo */
			.${y.className.head} .m-navbar .logo,
			/* 隐藏原有的搜索图标 */
			.${y.className.head} .m-navbar .icon-search{
				display: none !important;
			}
			/* 设置右侧的宽度撑开、逆反 */
			.${y.className.head} .m-navbar .right{
				width: 100%;
				display: flex;
				flex-direction: row-reverse;
				justify-content: flex-end;
			}
			/* 头像 */
			.${y.className.head} .m-navbar .gm-face{
				flex: 0 auto;
				margin-top: 1.86667vmin;
			}
			/* 新的输入框 */
			.${y.className.head} .m-navbar .gm-input-area{
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
			.${y.className.head} .m-navbar .gm-input-area .ic_search_tab{
				color: #a0a0a0;
				vertical-align: middle;
				font-size: 4.33333vmin;
			}
			/* 输入框内容 */
			.${y.className.head} .m-navbar .gm-input-area input[type="search"]{
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
			.${y.className.head} .m-navbar .right .search {
				border: 1px solid #ccc;
				width: 100% !important;
				height: auto !important;
				border-radius: 1rem;
				display: flex;
				align-items: center;
				padding: 2px 6px;
			}
			`)),k.waitNode(`.m-head .m-navbar .icon-search`,1e4).then(async e=>{if(!e||e.parentElement.querySelector(`.gm-input-area`))return;let t=k.createElement(`div`,{className:`gm-input-area`,innerHTML:`
						<i class="iconfont ic_search_tab"></i>
						<input type="search" placeholder="" readonly="" disabled="">
					`}),n=t.querySelector(`input`);k.on(t,`click`,e=>{k.preventEvent(e),V.goToUrl(`/search`,!0)}),k.after(e,t);let r=await hn.getSearchInputPlaceholder();r!=null&&(j.info(`热点信息：`,r),n.placeholder=r.show_name||r.name)})}},Rn={init(){this.removeAds(),D.onceExec(`bili-pc-read-mobile-autoExpand`,()=>this.autoExpand())},removeAds(){x.addBlockCSS(`body>.h5-download-bar`)},autoExpand(){return j.info(`自动展开`),[N(`
			${re.className.read.mobile} .limit{
				overflow: unset !important;
				max-height: unset !important;
			}`),x.addBlockCSS(re.className.read.mobile+` .read-more`)]}},zn={init(){D.execMenuOnce(`bili-space-repairRealJump`,()=>{this.repairRealJump()}),D.execMenuOnce(`bili-space-coverDynamicStateCardVideo`,()=>{this.coverDynamicStateCardVideo()})},repairRealJump(){let e=new O.LockFunction(()=>{F(y.className.space+` .wx-tag.open-app-wrapper`).forEach(e=>{let t=B.getVue(e);typeof t?.disabled==`boolean`&&(t.disabled=!1)})});O.mutationObserver(document,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{e.run()}})},coverDynamicStateCardVideo(){j.info(`覆盖动态视频的点击事件`),k.on(document,`click`,`.card-content .main .wings`,e=>{let t=e.target.closest(`.card`);if(!t){r.default.error(`未找到对应的.card元素`);return}let n=B.getVue(t);if(!n){r.default.error(`未找到对应的vue实例`);return}let i=n?.shareData?.default?.url;if(!i){r.default.error(`未找到对应的url`);return}V.goToUrl(i)},{capture:!0})}},Bn={init(){D.execMenu(`bili-noCallApp`,()=>{this.noCallApp()}),D.execMenu(`bili-setLogin`,()=>{this.setLogin()}),D.execMenu(`bili-setIsClient`,()=>{this.setIsClient()})},noCallApp(){B.waitVuePropToSet(`#app`,[{msg:`设置参数 $store.state.common.noCallApp`,check(e){return typeof e?.$store?.state?.common?.noCallApp==`boolean`},set(e){j.success(`成功设置参数 $store.state.common.noCallApp=true`),e.$store.state.common.noCallApp=!0}}])},setLogin(){let e=new O.DocumentCookieHandler,t=e.get(`DedeUserID`);t==null?e.set({name:`DedeUserID`,value:`2333`},e=>{e?j.error(e):j.success(`Cookie成功设置DedeUserID=>2333`)}):j.info(`Cookie DedeUserID已存在：`,t.value),B.waitVuePropToSet(`#app`,[{msg:`设置参数 $store.state.common.userInfo.isLogin`,check(e){return typeof e?.$store?.state?.common?.userInfo?.isLogin==`boolean`},set(e){j.success(`成功设置参数 $store.state.common.userInfo.isLogin=true`),e.$store.state.common.userInfo.isLogin=!0}},{msg:`设置参数 $store.state.loginInfo.isLogin`,check(e){return typeof e?.$store?.state?.loginInfo?.isLogin==`boolean`},set(e){j.success(`成功设置参数 $store.state.loginInfo.isLogin=true`),e.$store.state.loginInfo.isLogin=!0}}])},setIsClient(){B.waitVuePropToSet(`#app`,[{msg:`设置参数 $store.state.video.isClient`,check(e){return typeof typeof e?.$store?.state?.video?.isClient==`boolean`},set(e){j.success(`成功设置参数 $store.state.video.isClient=true`),e.$store.state.video.isClient=!0}},{msg:`设置参数 $store.state.opus.isClient=true`,check(e){return typeof e?.$store?.state?.opus?.isClient==`boolean`},set(e){j.success(`成功设置参数 $store.state.opus.isClient`),e.$store.state.opus.isClient=!0}},{msg:`设置参数 $store.state.playlist.isClient`,check(e){return typeof e?.$store?.state?.playlist?.isClient==`boolean`},set(e){j.success(`成功设置参数 $store.state.playlist.isClient=true`),e.$store.state.playlist.isClient=!0}},{msg:`设置参数 $store.state.ver.bili`,check(e){return typeof e?.$store?.state?.ver?.bili==`boolean`},set(e){j.success(`成功设置参数 $store.state.ver.bili=true`),e.$store.state.ver.bili=!0}},{msg:`设置参数 $store.state.ver.biliVer`,check(e){return typeof e?.$store?.state?.ver?.biliVer==`number`},set(e){j.success(`成功设置参数 $store.state.ver.biliVer=2333333`),e.$store.state.ver.biliVer=2333333}}])},setTinyApp(){B.waitVuePropToSet(`#app`,[{msg:`设置参数 $store.state.common.tinyApp`,check(e){return typeof e?.$store?.state?.common?.tinyApp==`boolean`},set(e){e.$store.state.common.tinyApp=!0,j.success(`成功设置参数 $store.state.common.tinyApp=true`),D.onceExec(`bili-tinyApp-init-css`,()=>{N(`
							.tiny-app .reply-input,.tiny-app .reply-item .info .name .right,.tiny-app .reply-item .info .toolbar,.tiny-app .sub-reply-input {
								display: block;
							}
						`)})}}])}},Vn=function(e,t,n,r,i,a,o,s,c,l){let u={text:e,type:`button`,attributes:{},props:{},description:t,buttonIcon:r,buttonIsRightIcon:i,buttonIconIsLoading:a,buttonType:o,buttonText:n,callback(e){typeof s==`function`&&s(e)},afterAddToUListCallBack:c};return Reflect.set(u.attributes,ye,()=>{u.disable=!!(typeof l==`function`?l():l)}),u},Hn=function(e,t,n,r,i,a=``,o,s){let c={text:e,type:`input`,inputType:`password`,attributes:{},props:{},description:r,placeholder:a,afterAddToUListCallBack:o,getValue(){return this.props[w].get(t,n)},callback(e,n){typeof i==`function`&&i(e,n)||(this.props[w].set(t,n),typeof s==`function`&&s(e,n))}};return Reflect.set(c.attributes,S,t),Reflect.set(c.attributes,C,n),Kn.initComponentsStorageApi(`input`,c,{get(e,t){return D.getValue(e,t)},set(e,t){D.setValue(e,t)}}),c},Un=function(e,t,n,r,i,a,o){let s={text:e,type:`select`,description:a,attributes:{},props:{},getValue(){return this.props[w].get(t,n)},callback(e){if(e==null)return;let n=e.value;j.info(`选择：${e.text}`),!(typeof i==`function`&&i(e))&&(this.props[w].set(t,n),typeof o==`function`&&o(e))},data:r};return Reflect.set(s.attributes,S,t),Reflect.set(s.attributes,C,n),Kn.initComponentsStorageApi(`select`,s,{get(e,t){return D.getValue(e,t)},set(e,t){D.setValue(e,t)}}),s},Wn=function(e,t,n,r,i,a,o,s,c,l){let u={text:e,type:`slider`,description:s,attributes:{},props:{},getValue(){return this.props[w].get(t,n)},getToolTipContent(e){return typeof o==`function`?o(e):`${e}`},callback(e,n){typeof a==`function`&&a(e,n)||(this.props[w].set(t,n),typeof l==`function`&&l(e,n))},min:r,max:i,step:c};return Reflect.set(u.attributes,S,t),Reflect.set(u.attributes,C,n),Kn.initComponentsStorageApi(`slider`,u,{get(e,t){return D.getValue(e,t)},set(e,t){D.setValue(e,t)}}),u},Q=function(e,t,n=!1,i,a,o,s,c,l){if(l&&typeof l.defaultValue==`object`&&l.defaultValue!=null){let n=l.key??t;l.handler.add({key:n,name:e}),l.handler.shortCut.initConfig(n,l.defaultValue)}let u={text:e,type:`switch`,description:a,disabled:s,attributes:{},props:{},getValue(){return this.props[w].get(t,n)},callback(n,r){let a=!!r;j.success(`${a?`开启`:`关闭`} ${e}`),!(typeof i==`function`&&i(n,a))&&(this.props[w].set(t,a),typeof c==`function`&&c(n,a))},afterAddToUListCallBack:(...n)=>{if(o?.(...n),l){let i=l.handler.shortCut,a=l.key??t,[o,s]=n,c=s.target?.querySelector(`.pops-panel-item-left-main-text`);if(!c)return;let u=()=>{let t=l.handler.shortCut.getShowText(a,`暂未录入快捷键`),n=k.createElement(`div`,{className:`pops-switch-shortcut-wrapper`,innerHTML:`
              <i class="pops-bottom-icon" is-loading="false">
                <svg viewBox="0 0 1123 1024" xmlns="http://www.w3.org/2000/svg" data-type="keyboard">
                  <path d="M1014.122186 1024H109.753483A109.753483 109.753483 0 0 1 0 914.246517V392.917471a109.753483 109.753483 0 0 1 109.753483-109.753484h904.368703a109.753483 109.753483 0 0 1 109.753484 109.753484v521.329046a109.753483 109.753483 0 0 1-109.753484 109.753483zM109.753483 370.966774a21.950697 21.950697 0 0 0-21.950696 21.950697v521.329046a21.950697 21.950697 0 0 0 21.950696 21.950696h904.368703a21.950697 21.950697 0 0 0 21.950697-21.950696V392.917471a21.950697 21.950697 0 0 0-21.950697-21.950697z"></path>
                  <path d="M687.056806 891.198285H307.309753a43.901393 43.901393 0 0 1 0-87.802787h379.747053a43.901393 43.901393 0 0 1 0 87.802787zM175.605573 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM432.428725 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM947.172562 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 546.572347a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 803.395498a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 678.276527a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM948.270096 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394z"></path>
                  <path d="M881.320472 766.079314H689.251876a43.901393 43.901393 0 0 1 0-87.802787h192.068596a21.950697 21.950697 0 0 0 21.950696-21.950696v-65.85209a43.901393 43.901393 0 0 1 87.802787 0v65.85209a109.753483 109.753483 0 0 1-109.753483 109.753483zM305.114684 502.670954H175.605573a43.901393 43.901393 0 0 1 0-87.802787h129.509111a43.901393 43.901393 0 0 1 0 87.802787zM563.03537 365.4791a43.901393 43.901393 0 0 1-43.901394-43.901394v-105.363344A109.753483 109.753483 0 0 1 628.88746 106.460879h61.461951a21.950697 21.950697 0 0 0 21.950696-21.950697V43.901393a43.901393 43.901393 0 0 1 87.802787 0v40.608789a109.753483 109.753483 0 0 1-109.753483 109.753484h-61.461951a21.950697 21.950697 0 0 0-21.950697 21.950696v105.363344a43.901393 43.901393 0 0 1-43.901393 43.901394z"></path>
                </svg>
              </i>
            `},{style:`margin-right: 5px;display: inline-flex;`}),r=n.querySelector(`.pops-bottom-icon`);k.on(r,`click`,function(e){l.handler.shortCut.deleteOption(a),i.toolTip.offEvent(),i.toolTip.close(),i.toolTip.destory(),n.remove()},{once:!0});let i=A.tooltip({$target:r,content:()=>t,className:`github-tooltip`,isFixed:!0,only:!0});k.empty(c),k.append(c,n,e)};if(A.rightClickMenu({$target:c,only:!0,data:[{text:()=>l.handler.shortCut.hasOption(a)?`修改快捷键`:`添加快捷键`,icon:A.config.iconSVG.keyboard,callback(e,t,n,o){if(i.isWaitKeyboardPress()){r.default.warning(`请先执行当前的录入操作`);return}let s=r.default.loading(`请按下快捷键...`,{showClose:!0,onClose(){i.cancelEnterShortcutKeys()}});i.enterShortcutKeys(a).then(({status:e,option:t,key:n})=>{s.close(),e?(j.success(`录入快捷键`,t),r.default.success(`录入成功`),u()):r.default.error(`快捷键 ${i.translateKeyboardValueToButtonText(t)} 已被 ${n} 占用`)})}}]}),!i.hasOption(a))return;u()}}};return Reflect.set(u.attributes,S,t),Reflect.set(u.attributes,C,n),Kn.initComponentsStorageApi(`switch`,u,{get(e,t){return D.getValue(e,t)},set(e,t){D.setValue(e,t)}}),u},Gn=function(e,t,n,r,i,a=``,o,s){let c={text:e,type:`textarea`,attributes:{},props:{},description:r,placeholder:a,disabled:o,getValue(){let e=this.props[w].get(t,n);return Array.isArray(e)?e.join(`
`):e},callback(e,n){typeof i==`function`&&i(e,n)||(this.props[w].set(t,n),typeof s==`function`&&s(e,n))}};return Reflect.set(c.attributes,S,t),Reflect.set(c.attributes,C,n),Kn.initComponentsStorageApi(`switch`,c,{get(e,t){return D.getValue(e,t)},set(e,t){D.setValue(e,t)}}),c},Kn={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||=new n.default.Dictionary,this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t)},initComponentsStorageApi(e,t,n){let r;r=this.hasStorageApi(e)?this.getStorageApi(e):n,this.setComponentsStorageApiProperty(t,r)},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,w,t)}},$=function(e,t,n,r,i,a=``,o=`text`,s,c){let l={text:e,type:`input`,inputType:o,attributes:{},props:{},description:r,placeholder:a,afterAddToUListCallBack:s,getValue(){return this.props[w].get(t,n)},callback(e,n){let r=e.target.validity.valid;typeof i==`function`&&i(e,n,r)||(this.props[w].set(t,n),typeof c==`function`&&c(e,n,r))}};return Reflect.set(l.attributes,S,t),Reflect.set(l.attributes,C,n),Kn.initComponentsStorageApi(`input`,l,{get(e,t){return D.getValue(e,t)},set(e,t){D.setValue(e,t)}}),l},qn=class{option;constructor(e){this.option=e}async showView(){let e=A.confirm({title:{text:this.option.title,position:`center`},content:{text:`
        <form class="rule-form-container" onsubmit="return false">
            <ul class="rule-form-ulist"></ul>
            <input type="submit" style="display: none;" />
        </form>
        `,html:!0},btn:O.assign({ok:{callback:async()=>{await i()}}},this.option.btn||{},!0),drag:!0,mask:{enable:!0},style:`
      ${A.config.cssText.panelCSS}
      
      .rule-form-container {
          
      }
      .rule-form-container li{
        display: flex;
        align-items: flex-start;
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

      ${this.option?.style??``}
      `,width:typeof this.option.width==`function`?this.option.width():window.innerWidth>500?`500px`:`88vw`,height:typeof this.option.height==`function`?this.option.height():window.innerHeight>500?`500px`:`80vh`}),t=e.$shadowRoot.querySelector(`.rule-form-container`);e.$shadowRoot.querySelector(`input[type=submit]`);let n=e.$shadowRoot.querySelector(`.rule-form-ulist`),r=await this.option.getView(await this.option.data());k.append(n,r);let i=async()=>{(await this.option.onsubmit(t,await this.option.data())).success&&(e.close(),typeof this.option.dialogCloseCallBack==`function`&&await this.option.dialogCloseCallBack(!0))};return e}},Jn=class{option;constructor(e){this.option=e}async showView(e){let t=A.confirm({title:{text:this.option.title,position:`center`},content:{text:`
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
        `,html:!0},style:`
      ${A.config.cssText.panelCSS}

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
      `,btn:{merge:!0,reverse:!1,position:`space-between`,ok:{enable:this.option?.bottomControls?.add?.enable||!0,type:`primary`,text:`添加`,callback:async()=>{this.showEditView(!1,await this.option.getAddData(),t.$shadowRoot)}},close:{enable:!0,callback(){t.close()}},cancel:{enable:!1},other:{enable:this.option?.bottomControls?.clear?.enable||!0,type:`xiaomi-primary`,text:`清空所有(${(await this.option.data()).length})`,callback:()=>{let e=A.confirm({title:{text:`提示`,position:`center`},content:{text:`确定清空所有的数据？`,html:!1},btn:{ok:{enable:!0,callback:async()=>{if(j.success(`清空所有`),typeof this.option?.bottomControls?.clear?.callback==`function`&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){r.default.error(`清理失败`);return}else r.default.success(`清理成功`);await this.updateDeleteAllBtnText(t.$shadowRoot),this.clearContent(t.$shadowRoot),e.close()}},cancel:{text:`取消`,enable:!0}},mask:{enable:!0},width:`300px`,height:`200px`})}}},mask:{enable:!0},width:window.innerWidth>500?`500px`:`88vw`,height:window.innerHeight>500?`500px`:`80vh`}),{$searchContainer:n,$externalSelect:i,$ruleValueSelect:a,$searchInput:o}=this.parseViewElement(t.$shadowRoot);if(this.option.bottomControls?.filter?.enable){let n=null,r=null;Array.isArray(this.option.bottomControls?.filter?.option)&&k.append(i,this.option.bottomControls?.filter?.option.map(e=>{let t=k.createElement(`option`,{innerText:e.name});return Reflect.set(t,`data-value`,e),t})),Array.isArray(this.option.bottomControls?.filter?.inputOption)&&k.append(a,this.option.bottomControls?.filter?.inputOption.map(e=>{let t=k.createElement(`option`,{innerText:e.name});return Reflect.set(t,`data-value`,e),t})),k.on(i,`change`,async()=>{let e=i[i.selectedIndex],t=Reflect.get(e,`data-value`);typeof t?.selectedCallBack==`function`&&t.selectedCallBack(t),n=t,await c(!1)}),k.on(a,`change`,async()=>{let e=a[a.selectedIndex],t=Reflect.get(e,`data-value`);typeof t?.selectedCallBack==`function`&&t.selectedCallBack(t),r=t,await c(!1)}),k.onInput(o,O.debounce(async()=>{await c(!1)}));let s=()=>{let e=i[i.selectedIndex];n=Reflect.get(e,`data-value`);let t=a[a.selectedIndex];r=Reflect.get(t,`data-value`)},c=async i=>{this.clearContent(t.$shadowRoot),i&&s();let a=await this.option.data(),c=[],l=k.val(o);for(let t=0;t<a.length;t++){let i=a[t];if(typeof e==`function`){let t=await e(i);if(typeof t==`boolean`&&!t)continue}if(n){let e=await n?.filterCallBack?.(i);if(typeof e==`boolean`&&!e)continue}if(r){let e=!0;if(e=l===``,e||=await r?.filterCallBack?.(i,l),!e)continue}c.push(i)}await this.appendRuleItemElement(t.$shadowRoot,c)};if(typeof e==`object`&&e){let t;t=typeof e.external==`number`?e.external:Array.from(i.options).findIndex(t=>Reflect.get(t,`data-value`).value===e.external),t!==-1&&(i.selectedIndex=t);let n;n=typeof e.rule==`number`?e.rule:Array.from(a.options).findIndex(t=>Reflect.get(t,`data-value`).value===e.rule),n!==-1&&(a.selectedIndex=n)}await c(!0)}else k.hide(n,!1)}showEditView(e,t,n,i,a,o){let s=async n=>{n?typeof o==`function`&&o(await this.option.getData(t)):(e||await this.option.deleteData(t),typeof a==`function`&&a(await this.option.getData(t)))};new qn({title:e?`编辑`:`添加`,data:()=>t,dialogCloseCallBack:s,getView:async t=>await this.option.itemControls.edit.getView(t,e),btn:{ok:{enable:!0,text:e?`修改`:`添加`},cancel:{callback:async e=>{e.close(),await s(!1)}},close:{callback:async e=>{e.close(),await s(!1)}}},onsubmit:async(t,a)=>{let o=await this.option.itemControls.edit.onsubmit(t,e,a);return o.success?e?(r.default.success(`修改成功`),n&&await this.updateRuleItemElement(o.data,i,n)):n&&await this.appendRuleItemElement(n,o.data):e&&j.error(`修改失败`),o},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView()}parseViewElement(e){let t=e.querySelector(`.rule-view-container`),n=e.querySelector(`.pops-confirm-btn button.pops-confirm-btn-other`),r=e.querySelector(`.rule-view-search-container`);return{$container:t,$deleteBtn:n,$searchContainer:r,$externalSelect:r.querySelector(`.pops-panel-select .select-rule-status`),$ruleValueSelect:r.querySelector(`.pops-panel-select .select-rule-value`),$searchInput:r.querySelector(`.pops-panel-input input`)}}parseRuleItemElement(e){let t=e.querySelector(`.rule-controls-enable`);return{$enable:t,$enableSwitch:t.querySelector(`.pops-panel-switch`),$enableSwitchInput:t.querySelector(`.pops-panel-switch__input`),$enableSwitchCore:t.querySelector(`.pops-panel-switch__core`),$edit:e.querySelector(`.rule-controls-edit`),$delete:e.querySelector(`.rule-controls-delete`),data:Reflect.get(e,`data-rule`)}}async createRuleItemElement(e,t){let n=await this.option.getDataItemName(e),i=k.createElement(`div`,{className:`rule-item`,innerHTML:`
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
					${A.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${A.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(i,`data-rule`,e);let a=`pops-panel-switch-is-checked`,{$enable:o,$enableSwitch:s,$enableSwitchCore:c,$enableSwitchInput:l,$delete:u,$edit:d}=this.parseRuleItemElement(i);return this.option.itemControls.enable.enable?(k.on(c,`click`,async()=>{let t=!1;s.classList.contains(a)?(s.classList.remove(a),t=!1):(s.classList.add(a),t=!0),l.checked=t,await this.option.itemControls.enable.callback(e,t)}),await this.option.itemControls.enable.getEnable(e)&&s.classList.add(a)):o.remove(),this.option.itemControls.edit.enable?k.on(d,`click`,n=>{k.preventEvent(n),this.showEditView(!0,e,t,i,t=>{e=null,e=t})}):d.remove(),this.option.itemControls.delete.enable?k.on(u,`click`,n=>{k.preventEvent(n);let a=A.confirm({title:{text:`提示`,position:`center`},content:{text:`确定删除该条数据？`,html:!1},btn:{ok:{enable:!0,callback:async()=>{j.success(`删除数据`),await this.option.itemControls.delete.deleteCallBack(e)?(r.default.success(`成功删除该数据`),i.remove(),await this.updateDeleteAllBtnText(t),a.close()):r.default.error(`删除该数据失败`)}},cancel:{text:`取消`,enable:!0}},mask:{enable:!0},width:`300px`,height:`200px`})}):u.remove(),i}async appendRuleItemElement(e,t){let{$container:n}=this.parseViewElement(e),r=[],i=Array.isArray(t)?t:[t];for(let t=0;t<i.length;t++){let n=i[t],a=await this.createRuleItemElement(n,e);r.push(a)}return k.append(n,r),await this.updateDeleteAllBtnText(e),r}async updateRuleContaienrElement(e){this.clearContent(e);let t=await this.option.data();await this.appendRuleItemElement(e,t),await this.updateDeleteAllBtnText(e)}async updateRuleItemElement(e,t,n){let r=await this.createRuleItemElement(e,n);t.after(r),t.remove()}clearContent(e){let{$container:t}=this.parseViewElement(e);k.html(t,``)}setDeleteBtnText(e,t,n=!1){let{$deleteBtn:r}=this.parseViewElement(e);n?k.html(r,t):k.text(r,t)}async updateDeleteAllBtnText(e){let t=await this.option.data();this.setDeleteBtnText(e,`清空所有(${t.length})`)}},Yn={$data:{whiteList:[],ruleData:[]},$key:{STORAGE_KEY:`bili-componentDetection-rule`},init(){this.$data.whiteList.length=0,this.$data.ruleData.length=0,this.getData().forEach(e=>{e.enable&&this.$data.ruleData.push(e)})},showView(){let e=A.fn.PanelHandlerComponents();function t(e,t){return{get(t,n){return e[t]??n},set(t,n){e[t]=n}}}new Jn({title:`成分检测`,data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:e=>e.name,updateData:e=>this.updateData(e),deleteData:e=>this.deleteData(e),getData:e=>this.getData().find(t=>t.uuid===e.uuid)??e,itemControls:{enable:{enable:!0,getEnable(e){return e.enable},callback:(e,t)=>{e.enable=t,this.updateData(e)}},edit:{enable:!0,getView:(n,r)=>{let i=document.createDocumentFragment(),a=this.getTemplateData();r||(n=a);let o=Q(`启用`,`enable`,a.enable);Reflect.set(o.props,w,t(n));let s=e.createSectionContainerItem_switch(o).$el,c=$(`规则名称`,`name`,``,a.name,void 0,`必填`);Reflect.set(c.props,w,t(n));let l=e.createSectionContainerItem_input(c).$el,u=Q(`是否显示标签名称`,`isShowDisplayName`,a.data.isShowDisplayName);Reflect.set(u.props,w,t(n.data));let d=e.createSectionContainerItem_switch(u).$el,f=$(`标签名称`,`displayName`,a.data.displayName,`例如：原神`);Reflect.set(f.props,w,t(n.data));let p=e.createSectionContainerItem_input(f).$el,m=Q(`是否显示标签图标`,`isShowDisplayIcon`,a.data.isShowDisplayIcon);Reflect.set(m.props,w,t(n.data));let h=e.createSectionContainerItem_switch(m).$el,g=$(`标签图标`,`displayIcon`,a.data.displayIcon,`Url或base64`);Reflect.set(g.props,w,t(n.data));let _=e.createSectionContainerItem_input(g).$el,ee=Gn(`关键词`,`keywords`,``,`用于匹配标题、简介、转发内容的关键词`,void 0,`多个关键词换行`);Reflect.set(ee.props,w,{get(e,t){let r=n.data[e]??t;return typeof r==`string`?r.split(`
`):r},set(e,t){typeof t==`string`&&(t=t.split(`
`)),n.data[e]=t}});let te=e.createSectionContainerItem_textarea(ee).$el,v=Gn(`关注的用户`,`followings`,``,`用户id`,void 0,`多个用户id换行`);Reflect.set(v.props,w,{get(e,t){let r=n.data[e]??t;return typeof r==`string`?r.split(`
`).map(e=>Number(e)).filter(e=>!isNaN(e)):r},set(e,t){typeof t==`string`&&(t=t.split(`
`).map(e=>Number(e)).filter(e=>!isNaN(e))),n.data[e]=t}});let ne=e.createSectionContainerItem_textarea(v).$el,y=Gn(`黑名单`,`blacklist`,``,``,void 0,`多个用户id换行`);Reflect.set(y.props,w,{get(e,t){let r=n.data[e]??t;return typeof r==`string`?r.split(`
`).map(e=>Number(e)).filter(e=>!isNaN(e)):r},set(e,t){typeof t==`string`&&(t=t.split(`
`).map(e=>Number(e)).filter(e=>!isNaN(e))),n.data[e]=t}});let re=e.createSectionContainerItem_textarea(y).$el;return i.append(s,l,d,p,h,_,te,ne,re),i},onsubmit:(t,n,i)=>{let a=t.querySelectorAll(`.rule-form-ulist > li`),o=this.getTemplateData();n&&(o.uuid=i.uuid);try{return a.forEach(t=>{let n=Reflect.get(t,e.$data.nodeStoreConfigKey),r=Reflect.get(n,`attributes`),i=Reflect.get(t,w),a=Reflect.get(r,S),s=Reflect.get(r,C),c=i.get(a,s);Reflect.has(o,a)?Reflect.set(o,a,c):Reflect.has(o.data,a)?Reflect.set(o.data,a,c):j.error(`${a}不在数据中`)}),o.name.trim()===``?(r.default.error(`规则名称不能为空`),{success:!1,data:o}):n?{success:this.updateData(o),data:o}:{success:this.addData(o),data:o}}catch(e){return j.error(e),{success:!1,data:o}}finally{this.init()}},style:`
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
                    `},delete:{enable:!0,deleteCallBack:e=>this.deleteData(e)}},bottomControls:{filter:{enable:!0,option:[{name:`无`,value:``,filterCallBack(){return!0}},{name:`启用`,value:`enable`,filterCallBack(e){return e.enable}},{name:`未启用`,value:`notEnable`,filterCallBack(e){return!e.enable}}],inputOption:[{name:`规则名`,value:`name`,filterCallBack(e,t){return!!e.name.match(t)}},{name:`关键词`,value:`keywords`,filterCallBack(e,t){return!!e.data.keywords.find(e=>!!e.match(t))}}]}}}).showView()},getTemplateData(){return{uuid:O.generateUUID(),enable:!0,name:``,data:{isShowDisplayIcon:!0,displayIcon:``,isShowDisplayName:!0,displayName:``,keywords:[],blacklist:[],followings:[]}}},getData(){return se(this.$key.STORAGE_KEY,[])},setData(e){fe(this.$key.STORAGE_KEY,e)},addData(e){let t=this.getData();return t.findIndex(t=>t.uuid==e.uuid)===-1?(t.push(e),fe(this.$key.STORAGE_KEY,t),!0):!1},updateData(e){let t=this.getData(),n=t.findIndex(t=>t.uuid==e.uuid),r=!1;return n!==-1&&(r=!0,t[n]=e),this.setData(t),r},deleteData(e){let t=this.getData(),n=t.findIndex(t=>t.uuid==e.uuid),r=!1;return n!==-1&&(r=!0,t.splice(n,1)),this.setData(t),r},clearData(){ae(this.$key.STORAGE_KEY)},exportRule(e=`rule.json`){let t=this.getData(),n=new Blob([JSON.stringify(t,null,4)]),r=window.URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=e,i.click(),setTimeout(()=>{window.URL.revokeObjectURL(r)},1500)},importRule(){let e=A.alert({title:{text:`请选择导入方式`,position:`center`},content:{text:`
                    <div class="import-mode" data-mode="local">本地导入</div>
                    <div class="import-mode" data-mode="network">网络导入</div>
                `,html:!0},width:E.info.width,height:E.info.height,style:`
                .import-mode{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),t=e.$shadowRoot.querySelector(`.import-mode[data-mode='local']`),n=e.$shadowRoot.querySelector(`.import-mode[data-mode='network']`);k.on(t,`click`,t=>{k.preventEvent(t),e.close();let n=k.createElement(`input`,{type:`file`,accept:`.json`});k.on(n,[`propertychange`,`input`],e=>{if(!n.files?.length)return;let t=n.files[0],i=new FileReader;i.onload=()=>{let e=O.toJSON(i.result);if(!Array.isArray(e)){j.error(`不是正确的规则文件`,e),r.default.error(`不是正确的规则文件`);return}this.setData(e),r.default.success(`成功导入 ${e.length}条规则`)},i.readAsText(t,`UTF-8`)}),n.click()}),k.on(n,`click`,t=>{k.preventEvent(t),e.close(),A.prompt({title:{text:`网络导入`,position:`center`},content:{text:``,placeholder:`url`,focus:!0},btn:{ok:{callback:async(e,t)=>{let n=e.text;if(O.isNull(n)){r.default.error(`请填入完整的url`);return}let i=await M.get(n);if(!i.status)return;let a=O.toJSON(i.data.responseText);if(!Array.isArray(a)){j.error(`不是正确的规则文件`,i,a),r.default.error(`不是正确的规则文件`);return}this.setData(a),e.close(),r.default.success(`成功导入 ${a.length}条规则`)}}},width:E.info.width,height:`auto`})})}},Xn={$data:{searchIcon:`
            <svg viewBox="0 0 24 24" fill="none">
                <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        `},init(){Yn.init(),N(`
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
        `),k.onReady(()=>{let e=new O.LockFunction(async()=>{F(`.reply-item:not([data-is-inject-search-label])`).forEach(e=>{e.setAttribute(`data-is-inject-search-label`,``);let t=e.querySelector(`.info .floor-time`)||e.querySelector(`.content-warp .user-info`),{$container:n,$compositionNameControl:r}=this.createSearchButton(()=>{let t=e.querySelector(`.user-name[data-user-id]`);if(!t)throw TypeError(`获取用户名元素失败`);let n=t.getAttribute(`data-user-id`);if(n==null)throw TypeError(`获取mid失败`);return n});k.after(t,n)}),[...Array.from(F(`.reply-item .member-link[data-url]:not([data-is-inject-search-label])`)),...Array.from(F(`.reply-item .jump-link.user[data-user-id]:not([data-is-inject-search-label])`)),...Array.from(F(`.reply-item .sub-user-name[data-user-id]:not([data-is-inject-search-label])`))].forEach(e=>{e.setAttribute(`data-is-inject-search-label`,``);let{$container:t,$compositionNameControl:n}=this.createSearchButton(()=>{let t=e.getAttribute(`href`).match(/space.bilibili.com\/([\d]+)/i)?.[1];if(t==null)throw TypeError(`获取mid失败`);return t});k.after(e,t)}),F(`.m-space-info .base:not([data-is-inject-search-label])`).forEach(e=>{e.setAttribute(`data-is-inject-search-label`,``);let t=e.closest(`.m-space-info`),{$container:n}=this.createSearchButton(()=>{let e=B.getVue(t);if(!e)throw TypeError(`获取vue属性失败`);let n=e.info.mid;if(n==null)throw TypeError(`获取mid失败`);return n});k.after(e,n)})});O.mutationObserver(document,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{e.run()}})})},async queryUserInfo(e){let t=1,n=[];for(;;){j.info(`正在获取用户的关注：${e} ==> 第${t}页`);let r=await qe.following(e,t);if(!r){j.error(`获取关注列表失败`);break}if(typeof r==`string`){j.error(`获取关注列表失败，原因：`+r);break}if(!r.list.length||(n=n.concat(r.list),r.list.length===r.total&&t===1))break;t++,O.sleep(250)}let r=``,i=1,a=[];for(;;){j.info(`正在获取用户的空间动态：${e} ==> 偏移：${r}`);let t=await qe.space(e,r);if(!t){j.error(`获取用户空间动态数据失败`);break}if(typeof t==`string`){j.error(`获取用户空间动态数据失败，原因：`+t);break}if(r===t.offset&&r!=``||(r=t.offset,a=a.concat(t.items),!t.has_more))break;if(i++,i>5){j.info(`最多请求5页空间动态的数据`);break}O.sleep(250)}let o={following:[],space:[]};return n.forEach(e=>{o.following.push({name:e.uname,mid:e.mid,sign:e.sign})}),a.forEach(e=>{if(e.orig==null){let t={title:e.modules.module_dynamic.major?.archive?.title,desc:e.modules.module_dynamic.major?.archive?.desc||e.modules.module_dynamic.desc?.text,pub_ts:e.modules.module_author.pub_ts*1e3,id_str:e.id_str};o.space.push({contentInfo:t})}else{let t={title:null,desc:e.modules.module_dynamic.desc?.text,pub_ts:e.modules.module_author.pub_ts*1e3,id_str:e.id_str},n={mid:e.orig.modules.module_author.mid,name:e.orig.modules.module_author.name,title:e.orig.modules.module_dynamic?.major?.archive?.title||null,desc:e.orig.modules.module_dynamic.desc?.text??e.orig.modules.module_dynamic?.major?.archive?.desc,pub_ts:e.orig.modules.module_author.pub_ts*1e3,id_str:e.orig.id_str};typeof n.desc==`string`&&Array.isArray(e.orig.modules.module_dynamic?.desc?.rich_text_nodes)&&e.orig.modules.module_dynamic.desc.rich_text_nodes.forEach(e=>{e.type===`RICH_TEXT_NODE_TYPE_AT`&&(n.desc=n.desc?.replace(e.text,``))}),o.space.push({contentInfo:t,forwardInfo:n})}}),o},createSearchButton(e){let t=k.createElement(`div`,{className:`composition-checkable`,innerHTML:`
                <div class="composition-badge-control">
                    <span class="composition-name-control">
                        ${this.$data.searchIcon}
                    </span>
                </div>
            `}),n=t.querySelector(`.composition-name-control`);return k.on(t,`click`,async i=>{if(k.preventEvent(i),t.hasAttribute(`data-is-searching`)){j.error(`正在搜索中，请稍后再试`);return}t.setAttribute(`data-is-searching`,``),k.html(n,`...`);try{if(Yn.$data.ruleData.length===0){r.default.warning(`未配置规则，请在设置中进行添加`),k.html(n,this.$data.searchIcon);return}let i=e();this.clearLabel(t);let a=await this.queryUserInfo(i);this.handleShowLabel(i,a,t),k.html(n,this.$data.searchIcon)}catch(e){j.error(e),r.default.error(e.message,{timeout:3500}),k.html(n,`重试`)}finally{t.removeAttribute(`data-is-searching`)}}),{$container:t,$compositionNameControl:n}},createLabel(e){let t=k.createElement(`div`,{className:`composition-checked`,innerHTML:`
				<div class="composition-badge">
				</div>
			`}),n=t.querySelector(`.composition-badge`);if(e.rule.data.isShowDisplayName){let t=k.createElement(`span`,{className:`composition-name`,innerHTML:e.rule.data.displayName});k.append(n,t)}if(e.rule.data.isShowDisplayIcon){let t=null;t=e.rule.data.displayIcon.startsWith(`http`)?k.createElement(`img`,{className:`composition-icon`,src:e.rule.data.displayIcon},{referrer:`no-referrer`,referrerPolicy:`no-referrer`}):k.createElement(`span`,{className:`composition-icon`,innerHTML:e.rule.data.displayIcon}),k.append(n,t)}return k.on(n,`click`,t=>{k.preventEvent(t),A.alert({title:{text:`识别信息`,html:!1,position:`center`},content:{text:`
						${e.matchedInfoList.map(e=>{let t=k.createElement(`div`,{className:`reason-container`,innerHTML:`
										<div class="reason-text"><span>原因：</span>${e.reason}</div>
										<div class="reason-text"><span>匹配：</span>${typeof e.reasonLink==`string`?`
											<a href="${e.reasonLink}" target="_blank">${e.reasonText}</a>
										`:e.reasonText}</div>
									`});if(typeof e.reasonTime==`number`){let n=k.createElement(`div`,{className:`reason-text`,innerHTML:`
										<span>时间：</span>${O.formatTime(e.reasonTime)}
										`});k.append(t,n)}return t.outerHTML}).join(`
`)}
					`,html:!0},btn:{ok:{enable:!1}},mask:{enable:!0,clickEvent:{toClose:!0}},width:E.setting.width,height:E.setting.height,style:`
					.reason-container{
						color: #7367F0;
						margin: 10px 10px;
					}
				`})}),t},clearLabel(e){for(;;){let t=k.prev(e);if(!t)break;if(t?.classList?.contains(`composition-checked`))t.remove();else break}},handleShowLabel(e,t,n){if(Yn.$data.ruleData.length===0){r.default.warning(`未配置规则，请在设置中进行添加`);return}if(e=e.toString(),Yn.$data.whiteList.includes(e))return;let i=[],a=(e,t)=>{let n=i.find(t=>t.rule===e);n?n.matchedInfoList.push(t):i.push({rule:e,matchedInfoList:[t]})};Yn.$data.ruleData.forEach(n=>{if(Array.isArray(n.data.blacklist)&&n.data.blacklist.find(t=>t.toString()===e)){a(n,{reason:`黑名单用户`,reasonText:e,reasonLink:tt.getUserSpaceUrl(e),reasonTime:null});return}if(Array.isArray(n.data.followings)){let e=``;n.data.followings.some(n=>{let r=t.following.some(e=>e.mid.toString()===n.toString());return r&&(e=n.toString()),r})&&a(n,{reason:`关注列表`,reasonText:e,reasonLink:tt.getUserSpaceUrl(e),reasonTime:null})}Array.isArray(n.data.keywords)&&n.data.keywords.forEach(e=>{for(let r=0;r<t.space.length;r++){let i=t.space[r],o=``,s=e,c=`/opus/${i.contentInfo.id_str}`,l=i.contentInfo.pub_ts;i.forwardInfo==null?typeof i.contentInfo.desc==`string`&&i.contentInfo.desc.match(e)?o=`投稿视频简介`:typeof i.contentInfo.title==`string`&&i.contentInfo.title.match(e)&&(o=`投稿视频标题`):typeof i.contentInfo.desc==`string`&&i.contentInfo.desc.match(e)?o=`空间动态转发`:typeof i.forwardInfo?.title==`string`&&i.forwardInfo.title.match(e)?o=`空间动态视频标题`:typeof i.forwardInfo?.desc==`string`&&i.forwardInfo.desc.match(e)&&(o=`空间动态视频简介`),o!==``&&a(n,{reason:o,reasonText:s,reasonLink:c,reasonTime:l})}})}),O.sortListByProperty(i,e=>e.matchedInfoList.length,!0),i.forEach(e=>{let t=this.createLabel(e);k.before(n,t)})}},Zn={$flag:{isWatchVideoChange:!1},$data:{art:null},init(){},updateArtPlayerVideoInfo(e,t){let n=this;B.waitVuePropToSet(y.className.playlist+` .playlist-player`,{msg:`等待覆盖playlist播放器`,check(e){return typeof e?.aid==`number`&&typeof e?.cid==`number`&&typeof e?.bvid==`string`},async set(t){P(`.playlist-player .player-container`)?.remove();let r=P(y.className.playlist+` .playlist-player`),i=P(y.className.playlist),a=B.getVue(i),{aid:o,cid:s,bvid:c}=t,{title:l,cover:u}=a.video;j.info(`视频播放信息 => aid：${o} bvid：${c} cid：${s}`),e??={aid:o,bvid:c,cid:s,pic:u,title:l};let d=await Jt(e);if(d==null)return;let f=P(`#artplayer`);if(!f){let e=k.createElement(`div`,{className:`artplayer-container`,innerHTML:`
								<div id="artplayer"></div>
							`});f=e.querySelector(`#artplayer`),k.append(r,e)}if(d.container=f,n.$data.art==null){let e=await Gt.init(d);if(e)n.$data.art=e;else return;n.$data.art.volume=1,n.$data.art.once(`ready`,()=>{D.execMenu(`bili-video-playerAutoPlayVideoFullScreen`,async()=>{j.info(`自动进入全屏`),n.$data.art.fullscreen=!0,n.$data.art.once(`fullscreenError`,()=>{j.warn(`未成功进入全屏，需要用户交互操作，使用网页全屏代替`),n.$data.art.fullscreenWeb=!0})})}),n.$data.art.on(`video:ended`,()=>{j.info(`视频播放结束，自动下一集`);let e=P(y.className.playlist+` .control-panel`);if(!e){j.error(`未找到播放列表，无法自动播放下一集`);return}if(B.getVue(e)==null){j.error(`未找到播放列表的Vue实例，无法自动播放下一集`);return}let{playMode:n,mediaList:r,videoIndex:i}=t.$store.state.playlist;if(i>=r.length-1)j.info(`播放列表已播放完毕`);else{let e=P(`.video-card[index="${i}"]`),t=B.getVue(e),n=t.p;if(n>=t.video.page){let e=P(`.video-card[index="${i+1}"]`);B.getVue(e).changeVideo(),j.info(`当前播放列表共：${r.length-1}个，即将播放下一个视频，第${i+2}个`)}else n++,t.changeVideo(n),j.info(`当前播放列表共：${r.length-1}个，即将播放第${i+2}-${n}`)}})}else await Gt.update(n.$data.art,d)}}),B.waitVuePropToSet(y.className.playlist+` .playlist-player`,{msg:`等待监听playlist播放列表改变`,check(e){return typeof e.$watch==`function`},set(e){n.$flag.isWatchVideoChange||(n.$flag.isWatchVideoChange=!0,e.$watch(`cid`,(e,t)=>{j.info(`切换播放视频`),n.updateArtPlayerVideoInfo()}))}})}},Qn={init(){this.coverVideoPlayer()},coverVideoPlayer(){P(`#artplayer`)?j.warn(`已存在播放器，更新播放信息`):N(`
			#app .playlist .playlist-player .player-container{
				display: none !important;
			}
			
			${at}
			
			${Kt}
			
			`),Zn.updateArtPlayerVideoInfo()}},$n={init(){Ke.init(),Je.init(),Bn.init(),D.execMenuOnce(`bili-allowCopy`,()=>N(`
				.v-drawer{
					-webkit-user-select: unset !important;
					-moz-user-select: unset !important;
					user-select: unset !important;
				}
			`)),D.onceExec(`listenRouterChange`,()=>{this.listenRouterChange()}),D.execMenuOnce(`bili-hookSetTimeout_autoOpenApp`,()=>{j.info(`hook  window.setTimeout autoOpenApp`),Dn.setTimeout(`autoOpenApp`),Dn.setTimeout(`bilibili://`),Dn.setTimeout(`void 0 !== y && document[y]`)}),D.execMenuOnce(`bili-overrideLaunchAppBtn_Vue_openApp`,()=>{j.info(`覆盖元素.launch-app-btn上的openApp`),Dn.overRideLaunchAppBtn_Vue_openApp()}),D.execMenuOnce(`bili-cover-bili-open-app-open`,()=>{j.info(`覆盖元素bili-open-app上的opener.open`),Dn.overRideBiliOpenApp()}),D.execMenuOnce(`bili-cover-wx-tag-handleClick`,()=>{j.info(`覆盖元素.wx-tag的handleClick函数`),Dn.overRideWxTaghandleClick()}),D.execMenuOnce(`bili-head-beautify`,()=>(j.info(`添加美化CSS`),N(te))),D.execMenuOnce(`bili-componentDetection`,()=>{Xn.init()}),v.isVideo()?(j.info(`Router: 视频稿件`),Xt.init()):v.isOpus()?(j.info(`Router: 专栏稿件`),wn.init()):ne.isReadMobile()?(j.info(`PC-Router: 专栏稿件`),Rn.init()):v.isDynamic()?(j.info(`Router: 动态`),En.init()):v.isBangumi()?(j.info(`Router: 番剧`),mn.init()):v.isSearch()?(j.info(`Router: 搜索`),bn.init()):v.isLive()?(j.info(`Router: 直播`),Sn.init()):v.isTopicDetail()?(j.info(`Router: 话题`),Tn.init()):v.isHead()?(j.info(`Router: 首页之类的`),Ln.init()):v.isSpace()?(j.info(`Router: 个人空间`),zn.init()):v.isPlayList()?(j.info(`Router: 播放列表`),Qn.init()):j.error(`该Router暂未适配，可能是首页之类：`+window.location.href)},listenRouterChange(){B.waitVuePropToSet(`#app`,{msg:`监听路由变化`,check:e=>typeof e?.$router?.afterEach==`function`,set:e=>{j.success(`成功设置监听路由变化`),e.$router.beforeHooks.splice(0,0,(e,t,n)=>{if(j.info(`路由变化 => 更新前`,{to:e,from:t}),e.hash===`#/seeCommentReply`||t.hash===`#/seeCommentReply`){j.info(`该路由变化判定为#/seeCommentReply`),n();return}if(D.getValue(`bili-repairVueRouter404`)&&e.name===`space`){j.info(`修复空间跳转404`),window.location.href=e.fullPath;return}if(e.fullPath.startsWith(`/video`)){if(t.fullPath.startsWith(`/video`)&&D.getValue(`bili-video-forceThisPageToRefreshAndRedirect`)){j.info(`强制本页刷新`),window.location.href=e.fullPath;return}else if(v.isHead()&&D.getValue(`bili-head-openVideoInNewTab`)){j.info(`当前是首页，新标签页打开`),window.open(e.fullPath,`_blank`);return}}else if(e.fullPath.startsWith(`/bangumi`)){if(t.fullPath.startsWith(`/bangumi`)){j.info(`番剧 => 番剧`),window.location.href=e.fullPath;return}else if(v.isHead()&&D.getValue(`bili-head-openVideoInNewTab`)){j.info(`首页 => 番剧`),window.open(e.fullPath,`_blank`);return}}n()}),e.$router.afterHooks.splice(0,0,(e,t)=>{if(j.info(`路由变化 => 更新后`,{to:e,from:t}),e.hash===`#/seeCommentReply`||t.hash===`#/seeCommentReply`){j.info(`该路由变化判定为#/seeCommentReply，不重载`);return}D.execMenu(`bili-listenRouterChange`,()=>{$n.init()})})}})}},er={id:`panel-common`,title:`通用`,views:[{text:``,type:`container`,views:[{text:`功能`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`监听路由-重载所有功能`,`bili-listenRouterChange`,!0,void 0,`用于处理页面跳转(本页)时功能不生效问题`),Q(`修复VueRouter跳转404问题`,`bili-repairVueRouter404`,!0,void 0,`例如：点击UP主正确进入空间`),Q(`新标签页打开`,`bili-go-to-url-blank`,!1,void 0,`通过开启【覆盖点击事件】相关的设置，通过新标签页打开链接`),Q(`允许复制`,`bili-allowCopy`,!0,void 0,`一般用于处理楼层的回复弹窗内无法选中复制问题`)]}]},{text:`变量设置`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`noCallApp`,`bili-noCallApp`,!0,void 0,`$store.state.common.noCallApp=true`),Q(`isLogin`,`bili-setLogin`,!0,void 0,[`$store.state.common.userInfo.isLogin=true`,`$store.state.loginInfo.isLogin=true`].join(`<br>`)),Q(`isClient`,`bili-setIsClient`,!0,void 0,[`$store.state.video.isClient=true`,`$store.state.opus.isClient=true`,`$store.state.playlist.isClient=true`,`$store.state.ver.bili=true`,`$store.state.ver.biliVer=2333`].join(`<br>`))]}]},{text:`劫持/拦截`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`覆盖.launch-app-btn openApp`,`bili-overrideLaunchAppBtn_Vue_openApp`,!0,void 0,`覆盖.launch-app-btn元素上的openApp函数，可阻止点击唤醒/下载App`),Q(`覆盖bili-open-app opener.open`,`bili-cover-bili-open-app-open`,!0,void 0,`覆盖bili-open-app/m-open-app元素上的opener.open函数，可阻止点击唤醒/下载App，如果存在有效链接，会自动跳转`),Q(`覆盖.wx-tag的handleClick`,`bili-cover-wx-tag-handleClick`,!0,void 0,`覆盖.wx-tag元素上的点击事件，让它直接打开视频`),Q(`劫持setTimeout-autoOpenApp`,`bili-hookSetTimeout_autoOpenApp`,!0,void 0,`阻止自动调用App`)]}]},{type:`deepMenu`,text:`成分检测`,views:[{type:`container`,text:``,views:[Q(`启用`,`bili-componentDetection`,!0,void 0,`启用后可检测用户的成分信息`),Vn(`自定义规则`,`检测用户成分的规则`,`管理`,void 0,!1,!1,`primary`,()=>{Yn.showView()})]},{type:`container`,text:``,views:[Vn(`数据导入`,`导入自定义规则数据`,`导入`,void 0,!1,!1,`primary`,()=>{Yn.importRule()}),Vn(`数据导出`,`导出自定义规则数据`,`导出`,void 0,!1,!1,`primary`,()=>{Yn.exportRule(`成分检测.json`)})]}]}]},{text:``,type:`container`,views:[{text:`数据配置`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Hn(`access_token`,`bili-head-recommend-access_token`,Re.getAccessToken(),`填入access_token，可用于获取推荐视频数据、番剧搜索、番剧播放等`,(e,t)=>{Re.setAccessTokenInfo({access_token:t,expireAt:Re.generateExpireAt()})})]}]},{text:`Toast配置`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Un(`Toast位置`,`qmsg-config-position`,`bottom`,[{value:`topleft`,text:`左上角`},{value:`top`,text:`顶部`},{value:`topright`,text:`右上角`},{value:`left`,text:`左边`},{value:`center`,text:`中间`},{value:`right`,text:`右边`},{value:`bottomleft`,text:`左下角`},{value:`bottom`,text:`底部`},{value:`bottomright`,text:`右下角`}],e=>{j.info(`设置当前Qmsg弹出位置`+e.text)},`Toast显示在页面九宫格的位置`),Un(`最多显示的数量`,`qmsg-config-maxnums`,3,[{value:1,text:`1`},{value:2,text:`2`},{value:3,text:`3`},{value:4,text:`4`},{value:5,text:`5`}],void 0,`限制Toast显示的数量`),Q(`逆序弹出`,`qmsg-config-showreverse`,!1,void 0,`修改Toast弹出的顺序`)]}]},{text:`Cookie配置`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`启用`,`httpx-use-cookie-enable`,!1,void 0,`启用后，将根据下面的配置进行添加cookie`),Q(`使用document.cookie`,`httpx-use-document-cookie`,!1,void 0,`自动根据请求的域名来获取对应的cookie`),Gn(`bilibili.com`,`httpx-cookie-bilibili.com`,``,void 0,void 0,`Cookie格式：xxx=xxxx;xxx=xxxx`)]}]}]}]},tr={id:`panel-head`,title:`首页`,views:[{text:``,type:`container`,views:[{text:`功能`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`美化显示`,`bili-head-beautify`,!0,void 0,`调整瀑布流视频卡片样式类似哔哩哔哩App`),Q(`美化顶部NavBar`,`bili-beautifyTopNavBar`,!0,void 0,`类似哔哩哔哩App的样式`),Q(`补充推荐视频信息`,`bili-head-supplementaryVideoStreamingInformation`,!0,void 0,`给视频添加UP主名，当前视频总时长信息`),Q(`新标签页打开`,`bili-head-openVideoInNewTab`,!1,void 0,`包括视频、番剧`)]}]},{text:`推荐视频`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`启用`,`bili-head-recommend-enable`,!0,void 0,`添加【推荐】标签，数据来源为App端(如果填入了access_token的话)`),Q(`显示【图文】`,`bili-head-recommend-push-graphic`,!0,void 0,`加载App端推送的【图文】卡片`)]}]}]}]},nr={id:`panel-video`,title:`视频`,isDefault(){return v.isVideo()},views:[{text:``,type:`container`,views:[{text:`功能`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`强制本页刷新跳转`,`bili-video-forceThisPageToRefreshAndRedirect`,!1,void 0,`用于处理内存泄露问题`),Q(`新增评论模块`,`bili-video-addCommentModule`,!0,void 0,`用于查看当前视频的评论`),Q(`新增简介模块`,`bili-video-addDescModule`,!0,void 0,`用于查看当前视频的播放量、简介、一键三连等信息`)]}]},{text:`ArtPlayer播放器`,type:`deepMenu`,views:[{text:`功能`,type:`container`,views:[Q(`启用`,`bili-video-enableArtPlayer`,!0,void 0,`使用artplayer代替页面的播放器`),Un(`播放的视频类型`,`bili-video-playType`,`mp4`,[{text:`mp4`,value:`mp4`},{text:`dash`,value:`dash`}],void 0,`当选择dash时会有画质更高的选项`),Q(`自动播放视频`,`bili-video-playerAutoPlayVideo`,!1,void 0,``),Q(`自动进入全屏`,`bili-video-playerAutoPlayVideoFullScreen`,!1,void 0,``)]},{text:`控件设置`,type:`container`,views:[Wn(`controls左右边距`,`bili-video-artplayer-controlsPadding-left-right`,0,0,50,void 0,e=>e+`px`,`可用于全屏横屏适配屏幕`,1)]},{text:`插件`,type:`container`,views:[Q(`弹幕`,`artplayer-plugin-video-danmaku-enable`,!0,void 0,`哔哩哔哩 (゜-゜)つロ 干杯~`),Q(`Dash Audio Support`,`artplayer-plugin-video-m4sAudioSupport-enable`,!0,void 0,`视频类型为dash时，该插件可支持播放音频`),Q(`选集`,`artplayer-plugin-video-epChoose-enable`,!0,void 0,`当视频播放完毕后会自动连播`),Q(`CC字幕`,`artplayer-plugin-video-cc-subtitle-enable`,!0,void 0,`字幕支持插件，如果存在繁体字幕，则自动生成简体字幕`),Q(`顶部工具栏`,`artplayer-plugin-video-toptoolbar-enable`,!0,void 0,`显示视频标题和当前观看人数`),Q(`视频统计信息`,`artplayer-plugin-video-statistics-enable`,!0,void 0,`用于显示当前视频信息的弹窗`)]},{text:`加速CDN设置（dash）`,type:`container`,views:[Un(`视频-UPOS服务器设置`,`bili-video-uposServerSelect`,R[0].host,R.map(e=>({text:e.name,value:e.host})),void 0,`设置视频流的服务器，可加快视频加载速度`),$(`视频-自定义UPOS服务器`,`bili-video-uposServerSelect-own`,``,`自定义的服务器优先级大于上面选择的服务器`,void 0,`请输入upos服务器的域名`),Un(`音频-UPOS服务器设置`,`bili-video-uposServerSelect-audio`,R[0].host,R.map(e=>({text:e.name,value:e.host})),void 0,`设置音频的服务器，可加快音频加载速度`),$(`音频-自定义UPOS服务器`,`bili-video-uposServerSelect-audio-own`,``,`自定义的服务器优先级大于上面选择的服务器`,void 0,`请输入upos服务器的域名`)]}]},{text:`覆盖点击事件`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`UP主信息`,`bili-video-cover-UpWrapper`,!0,void 0,`点击UP主头像/名称可跳转至UP主空间`),Q(`相关视频`,`bili-video-cover-bottomRecommendVideo`,!0,void 0,`点击下面的相关视频可正确跳转至该视频`),Q(`选集`,`bili-video-cover-seasonNew`,!0,void 0,`点击下面的选集列表内的视频可正确跳转至该视频`)]}]},{text:`劫持/拦截`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`阻止调用App`,`bili-video-hook-callApp`,!0,void 0,`处理函数: PlayerAgent`)]}]}]}]},rr={id:`panel-opus`,title:`专栏`,isDefault(){return v.isOpus()},views:[{text:``,type:`container`,views:[{text:`功能`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`自动展开阅读全文`,`bili-opus-automaticallyExpandToReadFullText`,!0,void 0,`屏蔽【展开阅读全文】按钮并自动处理全文高度`)]}]},{text:`变量设置`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`autoOpenApp`,`bili-opus-variable-autoOpenApp`,!0,void 0,`autoOpenApp函数置空`),Q(`go404`,`bili-opus-variable-go404`,!0,void 0,`go404函数置空，可禁止前往404页面`),Q(`handleFallback`,`bili-opus-variable-handleFallback`,!0,void 0,`禁止前往404页面`)]}]},{text:`覆盖点击事件`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`话题`,`bili-opus-cover-topicJump`,!0,void 0,`点击话题正确跳转`),Q(`header用户`,`bili-opus-cover-header`,!0,void 0,`点击内容上的发布本动态的用户正确跳转个人空间`)]}]}]}]},ir={id:`panel-dynamic`,title:`动态`,isDefault(){return v.isDynamic()},views:[{text:``,type:`container`,views:[{text:`覆盖点击事件`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`话题`,`bili-dynamic-cover-topicJump`,!0,void 0,`点击话题正确跳转`),Q(`header用户`,`bili-dynamic-cover-header`,!0,void 0,`点击内容上的发布本动态的用户正确跳转个人空间`),Q(`@用户`,`bili-dynamic-cover-atJump`,!0,void 0,`点击@用户正确跳转个人空间`),Q(`引用`,`bili-dynamic-cover-referenceJump`,!0,void 0,`点击引用的视频|用户正确跳转`)]}]}]}]},ar={id:`panel-bangumi`,title:`番剧`,isDefault(){return v.isBangumi()},views:[{text:``,type:`container`,views:[{text:`功能`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`固定缩放倍率`,`bili-bangumi-initialScale`,!0,void 0,``)]}]},{text:`ArtPlayer播放器`,type:`deepMenu`,views:[{text:`控件设置`,type:`container`,views:[Wn(`controls左右边距`,`bili-bangumi-artplayer-controlsPadding-left-right`,0,0,50,void 0,e=>e+`px`,`可用于全屏横屏适配屏幕`,1)]},{text:`插件`,type:`container`,views:[Q(`弹幕`,`artplayer-plugin-bangumi-danmaku-enable`,!0,void 0,`哔哩哔哩 (゜-゜)つロ 干杯~`),Q(`Dash Audio Support`,`artplayer-plugin-bangumi-m4sAudioSupport-enable`,!0,void 0,`视频类型为dash时，该插件可支持播放音频`),Q(`选集`,`artplayer-plugin-bangumi-epChoose-enable`,!0,void 0,`当视频播放完毕后会自动连播`),Q(`CC字幕`,`artplayer-plugin-bangumi-cc-subtitle-enable`,!0,void 0,`字幕支持插件，如果存在繁体字幕，则自动生成简体字幕`),Q(`顶部工具栏`,`artplayer-plugin-bangumi-toptoolbar-enable`,!0,void 0,`显示视频标题和当前观看人数`),Q(`空降助手`,`artplayer-plugin-bangumi-airborneHelper-enable`,!0,void 0,`如果获取到的信息中存在空降信息，如跳过片头片尾，那么会自动跳过`),Q(`视频统计信息`,`artplayer-plugin-bangumi-statistics-enable`,!0,void 0,`用于显示当前视频信息的弹窗`)]},{text:`解除区域限制`,type:`container`,views:[Q(`解锁番剧限制`,`bili-bangumi-unlockAreaLimit`,!1,void 0,`使用户可以观看区域外版权番剧`),Q(`生成简中字幕`,`bili-bangumi-generateSimpleChineseSubtitle`,!0,void 0,`根据繁体字幕自动生成简体中文字幕`)]},{text:`加速CDN设置（dash）`,type:`container`,views:[Un(`视频-UPOS服务器设置`,`bili-bangumi-uposServerSelect`,R[0].host,R.map(e=>({text:e.name,value:e.host})),void 0,`设置视频流的服务器，可加快视频加载速度`),$(`视频-自定义UPOS服务器`,`bili-bangumi-uposServerSelect-own`,``,`自定义的服务器优先级大于上面选择的服务器`,void 0,`请输入upos服务器的域名`),Un(`音频-UPOS服务器设置`,`bili-bangumi-uposServerSelect-audio`,R[0].host,R.map(e=>({text:e.name,value:e.host})),void 0,`设置音频的服务器，可加快音频加载速度`),$(`音频-自定义UPOS服务器`,`bili-bangumi-uposServerSelect-audio-own`,``,`自定义的服务器优先级大于上面选择的服务器`,void 0,`请输入upos服务器的域名`)]},{text:`<a href='https://github.com/yujincheng08/BiliRoaming/wiki/%E5%85%AC%E5%85%B1%E8%A7%A3%E6%9E%90%E6%9C%8D%E5%8A%A1%E5%99%A8' target='_blank'>解析服务器</a>`,type:`container`,views:[$(`中国大陆`,`bili-bangumi-proxyApiServer-default`,``,`用于请求播放地址的代理`,void 0,`bilibili优化.example.com`),$(`香港`,`bili-bangumi-proxyApiServer-hk`,``,`用于请求播放地址的代理`,void 0,`bilibili优化.example.com`),$(`台湾`,`bili-bangumi-proxyApiServer-tw`,``,`用于请求播放地址的代理`,void 0,`bilibili优化.example.com`),$(`泰国/东南亚`,`bili-bangumi-proxyApiServer-tha-or-sea`,``,`用于请求播放地址的代理`,void 0,`bilibili优化.example.com`)]}]},{text:`覆盖点击事件`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`【选集】`,`bili-bangumi-cover-clicl-event-chooseEp`,!0,void 0,`让【选集】的视频列表可点击跳转`),Q(`【其它】`,`bili-bangumi-cover-clicl-event-other`,!0,void 0,`让【PV&其他】、【预告】、【主题曲】、【香境剧场】等的视频列表可点击跳转`),Q(`【更多推荐】`,`bili-bangumi-cover-clicl-event-recommend`,!0,void 0,`让【更多推荐】的视频列表可点击跳转`)]}]},{text:`劫持/拦截`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`阻止调用App`,`bili-bangumi-hook-callApp`,!0,void 0,``)]}]}]}]},or={id:`panel-search`,title:`搜索`,isDefault(){return v.isSearch()},views:[{type:`container`,text:``,views:[{type:`deepMenu`,text:`功能`,views:[{type:`container`,text:``,views:[Q(`搜索框自动获取焦点`,`bili-search-inputAutoFocus`,!0,void 0,``),Q(`美化搜索结果`,`bili-search-beautifySearchResult`,!0,void 0,`重构搜索结果的样式`),Q(`开启其它地区番剧搜索`,`bili-search-enableOtherAreaSearchBangumi`,!1,void 0,`在搜索页面添加其它地区番剧搜索结果，需要解析服务器支持`)]},{text:`<a href='https://github.com/yujincheng08/BiliRoaming/wiki/%E5%85%AC%E5%85%B1%E8%A7%A3%E6%9E%90%E6%9C%8D%E5%8A%A1%E5%99%A8' target='_blank'>搜索服务器</a>`,type:`container`,views:[$(`香港`,`bili-search-proxyApiServer-hk`,``,`用于搜索番剧结果的代理`,void 0,`bilibili优化.example.com`),$(`台湾`,`bili-search-proxyApiServer-tw`,``,`用于搜索番剧结果的代理`,void 0,`bilibili优化.example.com`),$(`泰国/东南亚`,`bili-search-proxyApiServer-tha-or-sea`,``,`用于搜索番剧结果的代理`,void 0,`bilibili优化.example.com`)]}]},{type:`deepMenu`,text:`覆盖点击事件`,views:[{type:`container`,text:``,views:[Q(`取消`,`bili-search-cover-cancel`,!1,void 0,`点击取消按钮回退至上一页`),Q(`搜索结果`,`bili-search-cover-card-result-click-event`,!0,void 0,`修复点击搜索结果不跳转视频的问题`)]}]},{text:`变量设置`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`noCallApp`,`bili-search-vue-prop-noCallApp`,!0,void 0,`noCallApp = true`),Q(`openAppDialog`,`bili-search-vue-prop-openAppDialog`,!0,void 0,`openAppDialog = false`)]}]}]}]},sr={id:`panel-space`,title:`个人空间`,isDefault(){return v.isSpace()},views:[{text:``,type:`container`,views:[{text:`功能`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`修复正确跳转`,`bili-space-repairRealJump`,!0,void 0,`修复视频|动态的正确跳转，避免跳转404`)]}]},{text:`覆盖点击事件`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`动态视频`,`bili-space-coverDynamicStateCardVideo`,!0,void 0,`点击发布动态的视频可正常跳转至该视频`)]}]}]}]},cr={id:`panel-live`,title:`直播`,isDefault(){return v.isLive()},views:[{text:``,type:`container`,views:[{type:`deepMenu`,text:`功能`,views:[{text:`加速CDN设置`,type:`container`,views:[Q(`启用`,`bili-live-cdn-hook`,!1,void 0,`开启后，劫持网络请求并替换返回的视频流CDN`),Un(`直播视频流-UPOS服务器设置`,`bili-live-uposServerSelect`,R[0].host,R.map(e=>({text:e.name,value:e.host})),void 0,`设置视频流的服务器，可加快视频加载速度`),$(`直播视频流-自定义UPOS服务器`,`bili-live-uposServerSelect-own`,``,`自定义的服务器优先级大于上面选择的服务器`,void 0,`请输入upos服务器的域名`)]}]},{text:`屏蔽`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`【屏蔽】聊天室`,`bili-live-block-chatRoom`,!1,void 0,`直接不显示底部的聊天室`),Q(`【屏蔽】xxx进入直播间`,`bili-live-block-brush-prompt`,!1,void 0,`直接不显示底部的xxx进入直播间`),Q(`【屏蔽】控制面板`,`bili-live-block-control-panel`,!1,void 0,`屏蔽底部的发个弹幕、送礼`)]}]},{text:`劫持/拦截`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Q(`阻止open-app-btn元素点击事件触发`,`bili-live-prevent-openAppBtn`,!0,void 0,`开启后可不跳转至唤醒App页面`)]}]}]}]},lr={id:`panel-topic-detail`,title:`话题`,isDefault(){return v.isTopicDetail()},views:[]},ur=O.formatTime(void 0,`yyyy-MM-dd_HH:mm:ss`)+`BilibiliPerfScriptRunning`;Reflect.has(b,ur)?j.error(`${Ne}运行异常，请勿重复运行脚本：${ur}`):(Reflect.set(b,ur,!0),Se.addContentConfig([er,tr,nr,rr,ir,ar,lr,or,sr,cr]),Ce.addMenuOption([{key:`go_to_login`,text:`🛠 前往登录`,autoReload:!1,isStoreValue:!1,showText(e){return e},callback(){V.goToLogin()}},{key:`go_to_login_to_parse_access_key`,text:`🛠 扫码并解析access_key`,autoReload:!1,isStoreValue:!1,showText(e){return e},callback(){Re.init()}}]),D.init(),$n.init(),A.config.cssText.index+=`
  /* bilibili颜色 #FB7299 */
  .pops{
      --bili-color: #FB7299;
      --bili-color-rgb: 251, 114, 153;
  }
  `,A.config.cssText.panelCSS+=`

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
  `)})(DOMUtils,pops,Utils,Qmsg,MD5,Viewer,Artplayer,artplayerPluginDanmuku,MD5);
