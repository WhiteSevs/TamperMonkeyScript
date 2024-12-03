// ==UserScript==
// @name         【移动端】bilibili优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.12.3.17
// @author       WhiteSevs
// @description  免登录（但登录后可以看更多评论）、阻止跳转App、App端推荐视频流、解锁视频画质(番剧解锁需配合其它插件)、美化显示、去广告等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAACjBJREFUeF7tnX+MHGUZx7/PbFsr3O3eNWBTaQu1RhNQEv7CBKNtQsBQTRDSJiYabNBaerP2bmcL8pcHiZH2du6u7Fx/SCmESGLQSP+QQk0aMAElMTGmsURQCQSLqcG7222ttb2dR8a700u7e/u+8850d2ae/Xee55nn+T6ffWd29p33Jcgn0wpQpquX4iEAZBwCAUAAyLgCGS9fRgABIOMKZLx8GQEEgIwrkPHyZQQQADKuQMbLlxFAAMi4Ahkvv+MjwJQ9MpyDtQ6gtT7xn5n9U/3eruE09qUba+0oALXi6DEw39Gk2Uct4l291fIbaQDhTLFyo880AuCuS+sh4GTecz7TqTo7BkDddv/AwE2tCg+EIeItSYcgaD4zPbdYrSD6ZaFaurMTEHQEgGAotGB9v13BSYdAqflzIvjwH+nEpa8jAEwX3SeI8a12AATHkwqBTvPn6nwm7zn3qWgSpU1HAKjboy8zeINqIUmDQLf5swDQK3mvtFFVk6jsOgKAzggwX2hSIAjT/MyNAKr3AM3umLv5xjBs84M6M3UPEBRcs90Xmv0saje0detIYNJ8AEcLnrOpXe1xHO/IJSAoxESwboMgybV0DIC0QJDk5s/de8QxsKjHTLKASc59wc21erPiskyikEnMuVn/OnoJWJhQkgRNUq7tvrRdA0BS7gnS1PyuuAe4lNBuFribc2v3TW91vKtGgPkku1HobswpbNMX+nUlAN12OUhr87vyEtBtN4Zpbv4VAWDadjdbwGYG1oOxAoQVAPJRDF8pjFEHYxKESYDfAvBMwSu/GGedsVwCzu4cv7nhN7YRcA8zVsVZQNpjM/AeAUdyudyhnr2DJ6KuN1IApgYq1xORbQE2A8ujTjbL8Qg47wMeM3v9E+V3o9IiMgBqtvt1ABUAK6NKTuI0VeA0QI8WvNK+KPSJBIBaccQGW9UoEpIYagoQ4XC+6tyvZt3ayhiAsP/rmyYu/v+dR3a8UHVuN9HCCICa7R4D0Gxev0lO4qungFfwnKKey/+tQwNQH3APMOE7YU8sftEpYDKdLBQAZ+zR7T54f3QlSCRTBSzQA71e6YBuHG0A/r5juGe51fv6om+66GYh9sYKBNPkzvtnPvexfcNndYJpAzBtV75HoB/qnGShbfBgwwL9Jax/mv2YeS0InwhbI4Mf7vPKj+n4awEwue2xgrVs6UkCrtM5CYDXCNiTW2L99urxob9p+mbKfGpwrC/n+zfCpx/ovDwTiMTAKTQufLZv/8NTqqJpAVArjmwCW79QDT6bFD/U55X36PiI7awCZ4rumM8Y1NGDgS19nvNTVR8tAOq2u5uBB1WD+8Tl/mrZVbUXu8sVCP5MI+A5VW0I9KO8V1L+daYFQG2g8kcQfVolGSYc6qs631axFZvFFajZbvCU1VbU6e2C56xXtFVfLJqHn1pe/2DyX6qBeam1vm9s6G1Ve7FrrcC5He6aCxbeIKBHRaf8NSs+SsNbz6vYKo8A/xwcWzUz47+vErSTrzop5pc4s7rt/oqBL6gkvmSJ9XHVm21lAOaWOTmpkgATtvdVnYMqtmKjpoDODaFFfJPqyirKANTtsdsY/qsq6frwN/Z7u15RsRUbNQWm7MrdFuh5FWuC9fm8N/Samq2KFYApe2SDBetlFXMBQEUlPZu49FceAeJKQE+G7FrHpb8AkBCmBICENCquNAWAuJRNSFwBICGNiitNASAuZRMSN9MAnCs+vnrG//caEE31XtU4RXseOtONfftH8fH8MlxY7fvce7GR++s1B0qnosozkwAEj58bDT7IzF9ZKKTJHLioGnJpnLrtlhkIFoRe8KHfUM7amt87+KbpeTMHwFTRvcVi/K6VcAw82ec5SsvNmorfzn/adg8R0HKOvj9jres/MPROuziLHc8UAO9vG77q6mU9JwBq87cmf6nglYOp6R371OzKnQC9tGgCjF/nr12zkYa3XAibaKYAmNrhftOy8FQ7sYjxdH7C2drOLs7jdXv0IIO3tTsHgx/o88ras3bn42YKAOW1hBnvFCacde3Ej/N4zXb/BOCTCuf4ccFzvqFg19QkUwDorCZe8Bzlx9lhxV/Mr2a7rBLXdDVwAaCFygLA5cLo/Bur/O2Ji8BmfZUR4HJV4tJfAFAZvxexkUtAE3F0hiAZAdQIlBFA7gFimZEllwC1L2BLK7kEyCVAfgZeyoDcA1z+rZDnABpDrfwMlJ+ByvsKyoOgFD4Imrbd3aT0FjL9vuCVbtEYXCI3rdmjrwN8a/vAvK/glQfa2zW3yNTPwGnbvZeAn7UTyyKM91adoXZ2cR6vD4xWmNhpew72v1aY2PWTtnYtDDIFQKBB3XafZ+DuxQS7OEOro5x2FaY5Su9MMp4tTDjBSqqhP5kDYO5t5GBOQKtt1Yc/vP4/ElrRCB3b7IR6LJfL3dezd/C0ySkzB8C8WHV79H6Av8zABoDeJMarZPmHVd9+NRFdx/eD7aPXfWQpl32mDQCvBXCMQMfzXulJnTitbDMLQBTipSGGAJCGLhrUIAAYiJcGVwEgDV00qEEAMBAvDa4CQBq6aFCDAGAgXhpcBYA0dNGgBgHAQLw0uAoAaeiiQQ0CgIF4aXAVANLQRYMaBAAD8dLg2nEAdJaKBWNTYcI5mgbhu6UGHQBiWSpWaeLD/9TiUsErj3WLeGnIo1Z0vwvGXpVaYlksWme5+A/3FHoi7zltF01QKUZsZhXQmSkdy3LxOhtGENGJRo6+2D8+NC0NNFegPuB+ignKC03FsmFEUIbOljEE+nneK91rXr5EmLYr+wm0XVGJeLaMmR2GNDeNAn+13ysfUUxczJooUCuO2mBW3pk93k2jQmwb5/vY2r/PeVq6q6/AtF15kEC7dTxj3TYu7MaRwWpePuHoxXMzL117uDtX+dQROU7bszvHV/qNxq1z2/PdpnOu2DeODJIx3To2eElSp6gs2TLzDSDcELbm2LeODRKTzaPDtidevyu2eXRQhmwfH28zw0S/YtvHzydXH3APMEF5i9IwRYmPmgImi2crLxHTLJWa7Qbr9N6hlqZYxaSAV/CcYtjYRgAEJ63Z7gsA7gqbgPgZKEA4Xqg6txtEUN87eLGT1IojNthSflhhkrD4zipAhMP5qtNyiXpVnYxHgPkT1Ww3eP25AmCl6snFLpQCpwF6tOCV9oXyvsQpMgCCuFMDleuJyLYAm4HlUSQoMea+8cB5H/CY2eufKL8blS6RAjCf1Nmd4zc3/MY2Au5hxqqoks1iHAbeI+BILpc71LN38ETUGsQCwMIkp213swVsZmA9GCtAWAEgH3UhKYlXB2MShEmA3wLwTMErvxhnbbEDEGfyEttcAQHAXMNERxAAEt0+8+QFAHMNEx1BAEh0+8yTFwDMNUx0BAEg0e0zT14AMNcw0REEgES3zzx5AcBcw0RHEAAS3T7z5AUAcw0THUEASHT7zJMXAMw1THQEASDR7TNPXgAw1zDREf4DSPKG2yZqlokAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://m.bilibili.com/*
// @match        *://live.bilibili.com/*
// @match        *://www.bilibili.com/read/*
// @match        *://www.bilibili.com/h5/comment/*
// @require      https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/497907/1413262/QRCodeJS.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.5.4/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.4.3/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.9.4/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.7/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/md5@2.3.0/dist/md5.min.js
// @require      https://fastly.jsdelivr.net/npm/flv.js@1.6.2/dist/flv.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/ArtPlayer@78dcae673558915192020103d55bca9fc28b39ec/packages/artplayer-plugin-danmuku/dist/artplayer-plugin-danmuku.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/ArtPlayer@3cbe20292ddaf3018362944c2e6e06250b463d14/packages/artplayer/dist/artplayer.js
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

(a=>{function e(n){if(typeof n!="string")throw new TypeError("cssText must be a string");let p=document.createElement("style");return p.setAttribute("type","text/css"),p.innerHTML=n,document.head?document.head.appendChild(p):document.body?document.body.appendChild(p):document.documentElement.childNodes.length===0?document.documentElement.appendChild(p):document.documentElement.insertBefore(p,document.documentElement.childNodes[0]),p}if(typeof GM_addStyle=="function"){GM_addStyle(a);return}e(a)})(' @charset "UTF-8";.m-video2-awaken-btn,.openapp-dialog,.m-head .launch-app-btn.m-nav-openapp,.m-head .launch-app-btn.home-float-openapp,.m-home .launch-app-btn.home-float-openapp,.m-space .launch-app-btn.m-space-float-openapp,.m-space .launch-app-btn.m-nav-openapp{display:none!important}#app .video .launch-app-btn.m-video-main-launchapp:has([class^=m-video2-awaken]),#app .video .launch-app-btn.m-nav-openapp,#app .video .mplayer-widescreen-callapp,#app .video .launch-app-btn.m-float-openapp,#app .video .m-video-season-panel .launch-app-btn .open-app{display:none!important}#app.LIVE .open-app-btn.bili-btn-warp,#app .m-dynamic .launch-app-btn.m-nav-openapp,#app .m-dynamic .dynamic-float-openapp.dynamic-float-btn,#app .m-opus .float-openapp.opus-float-btn,#app .m-opus .v-switcher .launch-app-btn.list-more,#app .m-opus .opus-nav .launch-app-btn.m-nav-openapp,#app .m-opus .m-navbar .m-nav-openapp,#app .topic-detail .launch-app-btn.m-nav-openapp,#app .topic-detail .launch-app-btn.m-topic-float-openapp{display:none!important}#app.main-container bili-open-app.btn-download{display:none!important}#app .read-app-main bili-open-app{display:none!important}html{--bili-color: #fb7299;--bili-color-rgb: 251, 114, 153} ');

(function (D, Be, zt, Ne, qt, mt, ht, Re) {
	'use strict';

	var It=Object.defineProperty;var Ut=(e,t,u)=>t in e?It(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u;var be=(e,t,u)=>Ut(e,typeof t!="symbol"?t+"":t,u);var Ht=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,He=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,re=typeof GM_getValue<"u"?GM_getValue:void 0,_e=typeof GM_info<"u"?GM_info:void 0,Gt=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,fe=typeof GM_setValue<"u"?GM_setValue:void 0,jt=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Jt=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,K=typeof unsafeWindow<"u"?unsafeWindow:void 0,ft=window;const Wt={$data:{get enable(){return m.getValue("httpx-use-cookie-enable")},get useDocumentCookie(){return m.getValue("httpx-use-document-cookie")},cookieRule:[{key:"httpx-cookie-bilibili.com",hostname:/bilibili.com/g}]},fixCookieSplit(e){return p.isNotNull(e)&&!e.trim().endsWith(";")&&(e+=";"),e},concatCookie(e,t){return p.isNull(e)?t:(e=e.trim(),t=t.trim(),e=this.fixCookieSplit(e),t.startsWith(";")&&(t=t.substring(1)),e.concat(t))},handle(e){if(e.fetch||!this.$data.enable)return;let t="",u=e.url;u.startsWith("//")&&(u=window.location.protocol+u);let i=new URL(u);this.$data.useDocumentCookie&&i.hostname.endsWith(window.location.hostname.split(".").slice(-2).join("."))&&(t=this.concatCookie(t,document.cookie.trim()));for(let r=0;r<this.$data.cookieRule.length;r++){let a=this.$data.cookieRule[r];if(i.hostname.match(a.hostname)){let n=m.getValue(a.key);if(p.isNull(n))break;t=this.concatCookie(t,n);}}p.isNotNull(t)&&(e.headers&&e.headers.Cookie?e.headers.Cookie=this.concatCookie(e.headers.Cookie,t):e.headers.Cookie=t,l.info("Httpx => 设置cookie:",e)),e.headers&&e.headers.Cookie!=null&&p.isNull(e.headers.Cookie)&&delete e.headers.Cookie;}},Yt="【移动端】bilibili优化",p=Be.noConflict(),h=zt.noConflict(),I=Ne,Ge=ft.QRCode||K.QRCode,l=new p.Log(_e,K.console||ft.console);var pt;const je=((pt=_e==null?void 0:_e.script)==null?void 0:pt.name)||Yt,qe=new p.GM_Cookie,gt=!1;l.config({debug:gt,logMaxCount:1e3,autoClearConsole:!0,tag:!0});D.config(Object.defineProperties({html:!0,autoClose:!0,showClose:!1},{position:{get(){return m.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return m.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return m.getValue("qmsg-config-showreverse",!0)}},zIndex:{get(){let e=Be.getMaxZIndex(),t=Ne.config.InstanceUtils.getPopsMaxZIndex().zIndex;return Be.getMaxValue(e,t)+100}}}));const Kt=new p.GM_Menu({GM_getValue:re,GM_setValue:fe,GM_registerMenuCommand:Gt,GM_unregisterMenuCommand:jt}),U=new p.Httpx(Jt);U.interceptors.request.use(e=>(Wt.handle(e),e));U.interceptors.response.use(void 0,e=>(l.error("拦截器-请求错误",e),e.type==="onabort"?D.warning("请求取消"):e.type==="onerror"?D.error("请求异常"):e.type==="ontimeout"?D.error("请求超时"):D.error("其它错误"),e));U.config({logDetails:gt});const Je={Object:{defineProperty:K.Object.defineProperty},Function:{apply:K.Function.prototype.apply,call:K.Function.prototype.call},Element:{appendChild:K.Element.prototype.appendChild},setTimeout:K.setTimeout},N=p.addStyle.bind(p),ge=document.querySelector.bind(document),Pe=document.querySelectorAll.bind(document);Ne.GlobalConfig.setGlobalConfig({mask:{enable:!0,clickEvent:{toClose:!0}},zIndex(){let e=Be.getMaxZIndex(),t=Ne.config.InstanceUtils.getPopsMaxZIndex().zIndex;return Be.getMaxValue(e,t)+100}});const se="GM_Panel",Qt="data-init",ae="data-key",ne="data-default-value",Zt="data-init-more-value",V="data-storage-api",v=function(e,t,u,i,r,a){let n={text:e,type:"switch",description:r,attributes:{},props:{},getValue(){return !!this.props[V].get(t,u)},callback(o,s){let d=!!s;l.success(`${d?"开启":"关闭"} ${e}`),this.props[V].set(t,d);},afterAddToUListCallBack:a};return Reflect.set(n.attributes,ae,t),Reflect.set(n.attributes,ne,u),Reflect.set(n.props,V,{get(o,s){return m.getValue(o,s)},set(o,s){m.setValue(o,s);}}),n},Te=function(e,t,u,i,r,a="",n){let o={text:e,type:"textarea",attributes:{},props:{},description:i,placeholder:a,disabled:n,getValue(){let s=this.props[V].get(t,u);return Array.isArray(s)?s.join(`
`):s},callback(s,d){this.props[V].set(t,d);}};return Reflect.set(o.attributes,ae,t),Reflect.set(o.attributes,ne,u),Reflect.set(o.props,V,{get(s,d){return m.getValue(s,d)},set(s,d){m.setValue(s,d);}}),o},Fe=function(e,t,u,i,r,a){let n=[];typeof i=="function"?n=i():n=i;let o={text:e,type:"select",description:a,attributes:{},props:{},getValue(){return this.props[V].get(t,u)},callback(s,d,c){let f=d;l.info(`选择：${c}`),this.props[V].set(t,f),typeof r=="function"&&r(s,f,c);},data:n};return Reflect.set(o.attributes,ae,t),Reflect.set(o.attributes,ne,u),Reflect.set(o.props,V,{get(s,d){return m.getValue(s,d)},set(s,d){m.setValue(s,d);}}),o},Q=function(e,t,u,i,r,a="",n,o){let s={text:e,type:"input",isNumber:!!n,isPassword:!!o,props:{},attributes:{},description:i,getValue(){return this.props[V].get(t,u)},callback(d,c){typeof r=="function"&&r(d,c)||this.props[V].set(t,c);},placeholder:a};return Reflect.set(s.attributes,ae,t),Reflect.set(s.attributes,ne,u),Reflect.set(s.props,V,{get(d,c){return m.getValue(d,c)},set(d,c){m.setValue(d,c);}}),s},ue={tv:{appkey:"4409e2ce8ffd12b8",appsec:"59b43e04ad6965f34319062b478f83dd",mobi_app:"android_tv_yst"},ios:{appkey:"27eb53fc9058f8c3",appsec:"c2ed53a74eeefe3cf99fbd01d8c9c375",mobi_app:"ipnone"}};function We(e,t,u){e.appkey=t;const i=new URLSearchParams(e);return i.sort(),qt(i.toString()+u)}const Z={isWebApiSuccess(e){return (e==null?void 0:e.code)===0&&((e==null?void 0:e.message)==="0"||(e==null?void 0:e.message)==="success")},isAreaLimit(e){let t={6002003:"抱歉您所在地区不可观看！"},u=!1;return Object.keys(t).forEach(i=>{let r=t[i];(e.code.toString()===i.toString()||e.message.includes(r))&&(u=!0);}),u}},Ye={async getQrCodeInfo(){var n;let e="https://passport.bilibili.com/x/passport-tv-login/qrcode/auth_code",t={appkey:ue.ios.appkey,local_id:"0",ts:"0",mobi_app:ue.ios.mobi_app,csrf:((n=qe.get("bili_jct"))==null?void 0:n.value)||""},u=We(t,ue.ios.appkey,ue.ios.appsec),i=await U.post(e,{data:p.toSearchParamsStr({...t,sign:u}),headers:{"Content-Type":"application/x-www-form-urlencoded"},responseType:"json",fetch:!0});if(l.info(i),!i.status)return;let r=p.toJSON(i.data.responseText);if(r.code!==0){D.error(r.message);return}return r.data},async poll(e){let t="https://passport.bilibili.com/x/passport-tv-login/qrcode/poll",u={appkey:ue.ios.appkey,auth_code:e,local_id:"0",ts:"0"},i=We(u,ue.ios.appkey,ue.ios.appsec),r=await U.post(t,{data:p.toSearchParamsStr({...u,sign:i}),headers:{"Content-Type":"application/x-www-form-urlencoded"},responseType:"json",fetch:!0});if(!r.status)return {success:!1,message:"网络错误",action:void 0};const a=p.toJSON(r.data.responseText);l.info(a);const n={0:"成功","-3":"API校验密匙错误","-400":"请求错误","-404":"啥都木有",86038:"二维码已失效",86039:"二维码尚未确认",86090:"二维码已扫码未确认"};if(!Z.isWebApiSuccess(a)){const d=a.code.toString(),c=a.message||n[d]||"未知错误";return d==="86038"?{success:!1,message:c,action:"refresh"}:d==="86039"||d==="86090"?{success:!1,message:c,action:"wait"}:{success:!1,message:c,action:void 0}}const o=a.data.access_token,s=Date.now()+a.data.expires_in*1e3;return {success:!0,message:"获取成功",accessKey:o,accessKeyExpireAt:s}}},pe={async init(){D.info("正在申请二维码...");let e=await this.getQRCodeInfo();e&&this.confirmScanQrcode(e);},getQRCodeInfo:async function(){l.info("正在申请二维码...");let e=await Ye.getQrCodeInfo();return l.info("获取到二维码信息",e),e},async confirmScanQrcode(e){let t=I.alert({title:{text:"请扫描二维码登录",position:"center",html:!1,style:""},content:{text:'<div id="bili-qrcode-canvas"></div>',html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(a){r=!0,a.close();}}},mask:{enable:!0,clickEvent:{toClose:!1,toHide:!1}},only:!0,width:"310px",height:"365px",drag:!0,dragLimit:!0,style:`
            #bili-qrcode-canvas{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
            }
            `}),u=t.$shadowRoot.querySelector("#bili-qrcode-canvas"),i=new Ge(u,{text:e.url,width:300,height:300,colorDark:"#000000",colorLight:"#ffffff",correctLevel:Ge.CorrectLevel.H}),r=!1;for(;;){if(r){l.error("用户关闭扫码登录弹窗、取消扫码登录");break}l.info("正在等待扫码登录...");let a=await Ye.poll(e.auth_code);if(a!=null&&a.success){this.setAccessTokenInfo({access_token:a.accessKey,expireAt:a.accessKeyExpireAt}),l.info("扫码登录成功",a),D.success("扫码登录成功");break}else if((a==null?void 0:a.action)==="refresh"){l.info("刷新二维码"),D.info("刷新二维码");let n=await this.getQRCodeInfo();n&&(i.clear(),i.makeCode(n.url));}else if(a.action==="wait")a.message==="二维码已扫码未确认"&&(l.info("已扫码，等待确认..."),I.loading({parent:u,content:{text:"已扫码，等待确认"},mask:{enable:!0}}));else {l.error(a.message),D.error(a.message);break}await p.sleep(1500);}t.close();},generateExpireAt(e=6){return new Date().getTime()+1e3*60*60*24*30*e},setAccessTokenInfo(e){fe("bili-accessTokenInfo",e);},getAccessTokenInfo(){let e=re("bili-accessTokenInfo");return e&&e.expireAt>Date.now()?e:null},getAccessToken(){var e;return ((e=this.getAccessTokenInfo())==null?void 0:e.access_token)||""}},Me=function(e,t,u,i,r,a,n,o,s){return {text:e,type:"button",description:t,buttonIcon:i,buttonIsRightIcon:r,buttonIconIsLoading:a,buttonType:n,buttonText:u,callback(c){typeof o=="function"&&o(c);},afterAddToUListCallBack:s}},me={setting:{get width(){return window.innerWidth<550?"88vw":"550px"},get height(){return window.innerHeight<450?"70vh":"450px"}},settingBig:{get width(){return window.innerWidth<800?"92vw":"800px"},get height(){return window.innerHeight<600?"80vh":"600px"}},info:{get width(){return "350px"},get height(){return "250px"}}};class Xt{constructor(t){be(this,"option");this.option=t;}async showView(){var n;let t=I.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist">
                            
                        </ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:!0},btn:p.assign({ok:{callback:async()=>{await a();}}},this.option.btn||{},!0),mask:{enable:!0},style:`
                ${I.config.cssText.panelCSS}
                
                .rule-form-container {
                    
                }
                .rule-form-container li{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 5px 20px;
                    gap: 10px;
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

                ${((n=this.option)==null?void 0:n.style)??""}
            `,width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh"}),u=t.$shadowRoot.querySelector(".rule-form-container");t.$shadowRoot.querySelector("input[type=submit]");let i=t.$shadowRoot.querySelector(".rule-form-ulist"),r=await this.option.getView(await this.option.data());i.appendChild(r);const a=async()=>{(await this.option.onsubmit(u,await this.option.data())).success&&(t.close(),await this.option.dialogCloseCallBack(!0));};}}class eu{constructor(t){be(this,"option");this.option=t;}showView(){let t=I.alert({title:{text:this.option.title,position:"center"},content:{text:`
                <div class="filter-container"></div>
                `},btn:{ok:{text:"关闭",type:"default"}},mask:{enable:!0},width:window.innerWidth>500?"350px":"80vw",height:window.innerHeight>500?"300px":"70vh",style:`
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
            `}),u=t.$shadowRoot.querySelector(".filter-container"),i=document.createDocumentFragment();this.option.filterOption.forEach(r=>{let a=document.createElement("button");a.innerText=r.name;let n=async()=>{(await this.option.getAllRuleInfo()).forEach(async s=>{await r.filterCallBack(s.data)?h.show(s.$el,!1):h.hide(s.$el,!1);}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),t.close();};h.on(a,"click",async o=>{p.preventEvent(o),!(typeof r.callback=="function"&&!await r.callback(o,n))&&await n();}),i.appendChild(a);}),u.appendChild(i);}}class tu{constructor(t){be(this,"option");this.option=t;}async showView(){var i,r,a,n,o,s,d,c,f;let t=I.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:!0},btn:{merge:!0,reverse:!1,position:"space-between",ok:{enable:((a=(r=(i=this.option)==null?void 0:i.bottomControls)==null?void 0:r.add)==null?void 0:a.enable)||!0,type:"primary",text:"添加",callback:async E=>{this.showEditView(t.$shadowRoot,!1,await this.option.getAddData());}},close:{enable:!0,callback(E){t.close();}},cancel:{enable:((s=(o=(n=this.option)==null?void 0:n.bottomControls)==null?void 0:o.filter)==null?void 0:s.enable)||!1,type:"default",text:"过滤",callback:(E,b)=>{var S,k,F,g,B,q,T;typeof((F=(k=(S=this.option)==null?void 0:S.bottomControls)==null?void 0:k.filter)==null?void 0:F.callback)=="function"&&this.option.bottomControls.filter.callback();let A=()=>Array.from(t.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),w=b.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");h.text(w).includes("取消")?(A().forEach(M=>{h.show(M,!1);}),h.text(w,"过滤")):new eu({title:((B=(g=this.option.bottomControls)==null?void 0:g.filter)==null?void 0:B.title)??"过滤规则",filterOption:((T=(q=this.option.bottomControls)==null?void 0:q.filter)==null?void 0:T.option)||[],execFilterCallBack(){h.text(w,"取消过滤");},getAllRuleInfo:()=>A().map(ee=>({data:this.parseRuleItemElement(ee).data,$el:ee}))}).showView();}},other:{enable:((f=(c=(d=this.option)==null?void 0:d.bottomControls)==null?void 0:c.clear)==null?void 0:f.enable)||!0,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:E=>{let b=I.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:!1},btn:{ok:{enable:!0,callback:async A=>{var S,k,F;if(l.success("清空所有"),typeof((F=(k=(S=this.option)==null?void 0:S.bottomControls)==null?void 0:k.clear)==null?void 0:F.callback)=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){D.error("清理失败");return}else D.success("清理成功");await this.updateDeleteAllBtnText(t.$shadowRoot),this.clearContent(t.$shadowRoot),b.close();}},cancel:{text:"取消",enable:!0}},mask:{enable:!0},width:"300px",height:"200px"});}}},mask:{enable:!0},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
            ${I.config.cssText.panelCSS}
            
            .rule-item{
                display: flex;
                align-items: center;
                line-height: normal;
                font-size: 16px;
                padding: 4px 4px;
                gap: 6px;
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
                padding: 0px 4px;
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
            `}),u=await this.option.data();for(let E=0;E<u.length;E++)await this.appendRuleItemElement(t.$shadowRoot,u[E]);}parseViewElement(t){let u=t.querySelector(".rule-view-container"),i=t.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:u,$deleteBtn:i}}parseRuleItemElement(t){let u=t.querySelector(".rule-controls-enable"),i=u.querySelector(".pops-panel-switch"),r=u.querySelector(".pops-panel-switch__input"),a=u.querySelector(".pops-panel-switch__core"),n=t.querySelector(".rule-controls-edit"),o=t.querySelector(".rule-controls-delete");return {$enable:u,$enableSwitch:i,$enableSwitchInput:r,$enableSwitchCore:a,$edit:n,$delete:o,data:Reflect.get(t,"data-rule")}}async createRuleItemElement(t,u){let i=await this.option.getDataItemName(t),r=h.createElement("div",{className:"rule-item",innerHTML:`
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
					${I.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${I.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(r,"data-rule",t);let a="pops-panel-switch-is-checked";const{$enable:n,$enableSwitch:o,$enableSwitchCore:s,$enableSwitchInput:d,$delete:c,$edit:f}=this.parseRuleItemElement(r);return this.option.itemControls.enable.enable?(h.on(s,"click",async E=>{let b=!1;o.classList.contains(a)?(o.classList.remove(a),b=!1):(o.classList.add(a),b=!0),d.checked=b,await this.option.itemControls.enable.callback(t,b);}),await this.option.itemControls.enable.getEnable(t)&&o.classList.add(a)):n.remove(),this.option.itemControls.edit.enable?h.on(f,"click",E=>{p.preventEvent(E),this.showEditView(u,!0,t,r,b=>{t=null,t=b;});}):f.remove(),this.option.itemControls.delete.enable?h.on(c,"click",E=>{p.preventEvent(E);let b=I.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:!1},btn:{ok:{enable:!0,callback:async A=>{l.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(t)?(D.success("成功删除该数据"),r.remove(),await this.updateDeleteAllBtnText(u),b.close()):D.error("删除该数据失败");}},cancel:{text:"取消",enable:!0}},mask:{enable:!0},width:"300px",height:"200px"});}):c.remove(),r}async appendRuleItemElement(t,u){const{$container:i}=this.parseViewElement(t);if(Array.isArray(u))for(let r=0;r<u.length;r++){const a=u[r];i.appendChild(await this.createRuleItemElement(a,t));}else i.appendChild(await this.createRuleItemElement(u,t));await this.updateDeleteAllBtnText(t);}async updateRuleContaienrElement(t){this.clearContent(t),this.parseViewElement(t);let u=await this.option.data();await this.appendRuleItemElement(t,u),await this.updateDeleteAllBtnText(t);}async updateRuleItemElement(t,u,i){let r=await this.createRuleItemElement(t,i);u.after(r),u.remove();}clearContent(t){const{$container:u}=this.parseViewElement(t);h.html(u,"");}setDeleteBtnText(t,u,i=!1){const{$deleteBtn:r}=this.parseViewElement(t);i?h.html(r,u):h.text(r,u);}async updateDeleteAllBtnText(t){let u=await this.option.data();this.setDeleteBtnText(t,`清空所有(${u.length})`);}showEditView(t,u,i,r,a){let n=async s=>{if(!s){if(u||await this.option.deleteData(i),typeof a=="function"){let d=await this.option.getData(i);a(d);}}};new Xt({title:u?"编辑":"添加",data:()=>i,dialogCloseCallBack:n,getView:async s=>await this.option.itemControls.edit.getView(s,u),btn:{ok:{enable:!0,text:u?"修改":"添加"},cancel:{callback:async(s,d)=>{s.close(),await n(!1);}},close:{callback:async(s,d)=>{s.close(),await n(!1);}}},onsubmit:async(s,d)=>{let c=await this.option.itemControls.edit.onsubmit(s,u,d);return c.success?u?(D.success("修改成功"),await this.updateRuleItemElement(c.data,r,t)):await this.appendRuleItemElement(t,c.data):u&&D.error("修改失败"),c},style:this.option.itemControls.edit.style}).showView();}}const Ce={$data:{whiteList:[],ruleData:[]},$key:{STORAGE_KEY:"bili-componentDetection-rule"},init(){this.$data.whiteList=[],this.$data.ruleData=[],this.getData().forEach(t=>{t.enable&&this.$data.ruleData.push(t);});},showView(){let e=I.config.panelHandleContentUtils();function t(i,r){return {get(a,n){return i[a]??n},set(a,n){i[a]=n;}}}new tu({title:"成分检测",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:i=>i.name,updateData:i=>this.updateData(i),deleteData:i=>this.deleteData(i),getData:i=>this.getData().find(n=>n.uuid===i.uuid)??i,itemControls:{enable:{enable:!0,getEnable(i){return i.enable},callback:(i,r)=>{i.enable=r,this.updateData(i);}},edit:{enable:!0,getView:(i,r)=>{let a=document.createDocumentFragment(),n=this.getTemplateData();r||(i=n);let o=v("启用","enable",n.enable);Reflect.set(o.props,V,t(i));let s=e.createSectionContainerItem_switch(o),d=Q("规则名称","name","",n.name,void 0,"必填");Reflect.set(d.props,V,t(i));let c=e.createSectionContainerItem_input(d),f=v("显示标签名称","isShowDisplayName",n.data.isShowDisplayName);Reflect.set(f.props,V,t(i.data));let E=e.createSectionContainerItem_switch(f),b=Q("显示标签名称","displayName",n.data.displayName,"");Reflect.set(b.props,V,t(i.data));let A=e.createSectionContainerItem_input(b),w=v("显示标签图标","isShowDisplayIcon",n.data.isShowDisplayIcon);Reflect.set(w.props,V,t(i.data));let S=e.createSectionContainerItem_switch(w),k=Q("显示的标签图标","displayIcon",n.data.displayIcon,"");Reflect.set(k.props,V,t(i.data));let F=e.createSectionContainerItem_input(k),g=Te("关键词","keywords","","",void 0,"多个关键词换行");Reflect.set(g.props,V,{get(G,R){let L=i.data[G]??R;return typeof L=="string"?L.split(`
`):L},set(G,R){typeof R=="string"&&(R=R.split(`
`)),i.data[G]=R;}});let B=e.createSectionContainerItem_textarea(g),q=Te("关注的用户","followings","","",void 0,"多个用户id换行");Reflect.set(q.props,V,{get(G,R){let L=i.data[G]??R;return typeof L=="string"?L.split(`
`).map(le=>Number(le)).filter(le=>!isNaN(le)):L},set(G,R){typeof R=="string"&&(R=R.split(`
`).map(L=>Number(L)).filter(L=>!isNaN(L))),i.data[G]=R;}});let T=e.createSectionContainerItem_textarea(q),M=Te("黑名单","blacklist","","",void 0,"多个用户id换行");Reflect.set(M.props,V,{get(G,R){let L=i.data[G]??R;return typeof L=="string"?L.split(`
`).map(le=>Number(le)).filter(le=>!isNaN(le)):L},set(G,R){typeof R=="string"&&(R=R.split(`
`).map(L=>Number(L)).filter(L=>!isNaN(L))),i.data[G]=R;}});let ee=e.createSectionContainerItem_textarea(M);return a.append(s,c,E,A,S,F,B,T,ee),a},onsubmit:(i,r,a)=>{let n=i.querySelectorAll(".rule-form-ulist > li"),o=this.getTemplateData();r&&(o.uuid=a.uuid);try{return n.forEach(s=>{let d=Reflect.get(s,"__formConfig__"),c=Reflect.get(d,"attributes"),f=Reflect.get(s,V),E=Reflect.get(c,ae),b=Reflect.get(c,ne),A=f.get(E,b);Reflect.has(o,E)?Reflect.set(o,E,A):Reflect.has(o.data,E)?Reflect.set(o.data,E,A):l.error(`${E}不在数据中`);}),o.name.trim()===""?(D.error("规则名称不能为空"),{success:!1,data:o}):r?{success:this.updateData(o),data:o}:{success:this.addData(o),data:o}}catch(s){return l.error(s),{success:!1,data:o}}finally{this.init();}},style:`
                    .pops-panel-textarea textarea{
                        height: 150px;
                    }
                    `},delete:{enable:!0,deleteCallBack:i=>this.deleteData(i)}}}).showView();},getTemplateData(){return {uuid:p.generateUUID(),enable:!0,name:"",data:{isShowDisplayIcon:!0,displayIcon:"",isShowDisplayName:!0,displayName:"",keywords:[],blacklist:[],followings:[]}}},getData(){return re(this.$key.STORAGE_KEY,[])},setData(e){fe(this.$key.STORAGE_KEY,e);},addData(e){let t=this.getData();return t.findIndex(i=>i.uuid==e.uuid)===-1?(t.push(e),fe(this.$key.STORAGE_KEY,t),!0):!1},updateData(e){let t=this.getData(),u=t.findIndex(r=>r.uuid==e.uuid),i=!1;return u!==-1&&(i=!0,t[u]=e),this.setData(t),i},deleteData(e){let t=this.getData(),u=t.findIndex(r=>r.uuid==e.uuid),i=!1;return u!==-1&&(i=!0,t.splice(u,1)),this.setData(t),i},clearData(){Ht(this.$key.STORAGE_KEY);},exportRule(e="rule.json"){let t=this.getData(),u=new Blob([JSON.stringify(t,null,4)]),i=window.URL.createObjectURL(u),r=document.createElement("a");r.href=i,r.download=e,r.click(),setTimeout(()=>{window.URL.revokeObjectURL(i);},1500);},importRule(){let e=I.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
                    <div class="import-mode" data-mode="local">本地导入</div>
                    <div class="import-mode" data-mode="network">网络导入</div>
                `,html:!0},width:me.info.width,height:me.info.height,style:`
                .import-mode{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),t=e.$shadowRoot.querySelector(".import-mode[data-mode='local']"),u=e.$shadowRoot.querySelector(".import-mode[data-mode='network']");h.on(t,"click",i=>{p.preventEvent(i),e.close();let r=h.createElement("input",{type:"file",accept:".json"});h.on(r,["propertychange","input"],a=>{var s;if(!((s=r.files)!=null&&s.length))return;let n=r.files[0],o=new FileReader;o.onload=()=>{let d=p.toJSON(o.result);if(!Array.isArray(d)){l.error("不是正确的规则文件",d),D.error("不是正确的规则文件");return}this.setData(d),D.success(`成功导入 ${d.length}条规则`);},o.readAsText(n,"UTF-8");}),r.click();}),h.on(u,"click",i=>{p.preventEvent(i),e.close(),I.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"url",focus:!0},btn:{ok:{callback:async(r,a)=>{let n=r.text;if(p.isNull(n)){D.error("请填入完整的url");return}let o=await U.get(n);if(!o.status)return;let s=p.toJSON(o.data.responseText);if(!Array.isArray(s)){l.error("不是正确的规则文件",o,s),D.error("不是正确的规则文件");return}this.setData(s),r.close(),D.success(`成功导入 ${s.length}条规则`);}}},width:me.info.width,height:"auto"});});}},uu={id:"panel-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[v("监听路由-重载所有功能","bili-listenRouterChange",!0,void 0,"用于处理页面跳转(本页)时功能不生效问题"),v("修复VueRouter跳转404问题","bili-repairVueRouter404",!0,void 0,"例如：点击UP主正确进入空间"),v("新标签页打开","bili-go-to-url-blank",!1,void 0,"通过开启【覆盖点击事件】相关的设置，通过新标签页打开链接"),v("允许复制","bili-allowCopy",!0,void 0,"一般用于处理楼层的回复弹窗内无法选中复制问题"),v("自动删除Cookie buvid3","common_auto_delete_cookie_buvid3",!1)]}]},{text:"变量设置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[v("isLogin","bili-setLogin",!0,void 0,"$store.state.common.noCallApp=true<br>$store.state.common.userInfo.isLogin=true<br>$store.state.loginInfo.isLogin=true"),v("isClient","bili-setIsClient",!0,void 0,"$store.state.video.isClient=true<br>$store.state.opus.isClient=true<br>$store.state.playlist.isClient=true<br>$store.state.ver.bili=true<br>$store.state.ver.biliVer=2333"),v("tinyApp","bili-setTinyApp",!0,void 0,"$store.state.common.tinyApp=true")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[v("覆盖.launch-app-btn openApp","bili-overrideLaunchAppBtn_Vue_openApp",!0,void 0,"覆盖.launch-app-btn元素上的openApp函数，可阻止点击唤醒/下载App"),v("覆盖bili-open-app opener.open","bili-cover-bili-open-app-open",!0,void 0,"覆盖bili-open-app元素上的opener.open函数，可阻止点击唤醒/下载App"),v("劫持setTimeout-autoOpenApp","bili-hookSetTimeout_autoOpenApp",!0,void 0,"阻止自动调用App")]}]},{type:"deepMenu",text:"成分检测",forms:[{type:"forms",text:"",forms:[v("启用","bili-componentDetection",!1,void 0,"启用后可检测用户的成分信息"),Me("自定义规则","检测用户成分的规则","管理",void 0,!1,!1,"primary",()=>{Ce.showView();})]},{type:"forms",text:"",forms:[Me("数据导入","导入自定义规则数据","导入",void 0,!1,!1,"primary",()=>{Ce.importRule();}),Me("数据导出","导出自定义规则数据","导出",void 0,!1,!1,"primary",()=>{Ce.exportRule("成分检测.json");})]}]}]},{text:"",type:"forms",forms:[{text:"数据配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[Q("access_token","bili-head-recommend-access_token",pe.getAccessToken(),"填入access_token，可用于获取推荐视频数据、番剧搜索、番剧播放等",(e,t,u)=>{pe.setAccessTokenInfo({access_token:t,expireAt:pe.generateExpireAt()});},void 0,!1,!0)]}]},{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[Fe("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,u)=>{l.info("设置当前Qmsg弹出位置"+u);},"Toast显示在页面九宫格的位置"),Fe("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),v("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]},{text:"Cookie配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[v("启用","httpx-use-cookie-enable",!1,void 0,"启用后，将根据下面的配置进行添加cookie"),v("使用document.cookie","httpx-use-document-cookie",!1,void 0,"自动根据请求的域名来获取对应的cookie"),Te("bilibili.com","httpx-cookie-bilibili.com","",void 0,void 0,"Cookie格式：xxx=xxxx;xxx=xxxx")]}]}]}]},O={isVideo(){return window.location.pathname.startsWith("/video/")},isBangumi(){return window.location.pathname.startsWith("/bangumi/")},isSearch(){return window.location.pathname.startsWith("/search")},isSearchResult(){let e=new URLSearchParams(window.location.search);return this.isSearch()&&e.has("keyword")},isLive(){return window.location.hostname==="live.bilibili.com"},isOpus(){return window.location.pathname.startsWith("/opus")},isTopicDetail(){return window.location.pathname.startsWith("/topic-detail")},isDynamic(){return window.location.pathname.startsWith("/dynamic")},isHead(){return window.location.pathname==="/"||window.location.pathname.startsWith("/channel")},isSpace(){return window.location.pathname.startsWith("/space")}},iu={isPC(){return window.location.hostname==="www.bilibili.com"},isReadMobile(){return this.isPC()&&window.location.pathname.startsWith("/read/mobile")}},we={web_host:"api.bilibili.com"},j={AVC:7,HEVC:12,AV1:13},Oe={getBangumiProxyHost(){let e=[{name:"中国大陆",area:"",host:m.getValue("bili-bangumi-proxyApiServer-default","").trim()||we.web_host}];if(!m.getValue("bili-bangumi-unlockAreaLimit"))return e;let t=m.getValue("bili-bangumi-proxyApiServer-hk");p.isNotNull(t)&&e.push({name:"香港",area:"hk",host:t});let u=m.getValue("bili-bangumi-proxyApiServer-tw");p.isNotNull(u)&&e.push({name:"台湾",area:"tw",host:u});let i=m.getValue("bili-bangumi-proxyApiServer-tha-or-sea");return p.isNotNull(i)&&e.push({name:"泰国/东南亚",area:"th",host:i}),e},getSearchProxyHost(){let e=this.getBangumiProxyHost(),t=[],u=m.getValue("bili-search-proxyApiServer-hk");if(p.isNotNull(u))t.push({name:"香港",area:"hk",host:u});else {let a=e.find(n=>n.area==="hk");a&&t.push(a);}let i=m.getValue("bili-search-proxyApiServer-tw");if(p.isNotNull(i))t.push({name:"台湾",area:"tw",host:i});else {let a=e.find(n=>n.area==="tw");a&&t.push(a);}let r=m.getValue("bili-search-proxyApiServer-tha-or-sea");return p.isNotNull(r)?t.push({name:"泰国/东南亚",area:"th",host:r}):e.find(n=>n.area==="th")&&t.push,t},getBangumiProxySearchParam(e={}){return {from_client:"BROWSER",drm_tech_type:2,module:"bangumi",area:(e==null?void 0:e.area)||"",access_key:pe.getAccessToken()}}},J={findBetterCDN(...e){let t=[];e.forEach(i=>{Array.isArray(i)?t=t.concat(i.filter(r=>typeof r=="string")):typeof i=="string"&&t.push(i);});let u=t.find(i=>{if(new URL(i).host.startsWith("upos"))return i});return u||t[0]},replaceBangumiVideoCDN(e){let t=m.getValue("bili-bangumi-uposServerSelect");return this.replaceVideoCDNHost(e,t)},replaceVideoCDN(e){let t=m.getValue("bili-video-uposServerSelect");return this.replaceVideoCDNHost(e,t)},replaceVideoCDNHost(e,t){try{let u=new URL(e),i=this.getUposCDNServerList().find(n=>n.host===t);if(p.isNull(i)||p.isNull(i.host))return e;let r=i.host,a=u.host;return a.includes("mirror")&&(l.info(`原Host为：${a}`),l.info(`替换CDN为：${JSON.stringify(i)}`),u.host=r),u.toString()}catch(u){return l.error("视频upos替换失败",u),l.error(u),e}},getUposCDNServerList(){return [{name:"不替换",host:""},{name:"ali（阿里云）",host:"upos-sz-mirrorali.bilivideo.com"},{name:"alib（阿里云）",host:"upos-sz-mirroralib.bilivideo.com"},{name:"alio1（阿里云）",host:"upos-sz-mirroralio1.bilivideo.com"},{name:"cos（腾讯云）",host:"upos-sz-mirrorcos.bilivideo.com"},{name:"cosb（腾讯云，VOD加速类型）",host:"upos-sz-mirrorcosb.bilivideo.com"},{name:"coso1（腾讯云）",host:"upos-sz-mirrorcoso1.bilivideo.com"},{name:"hw（华为云，融合CDN）",host:"upos-sz-mirrorhw.bilivideo.com"},{name:"hwb（华为云，融合CDN）",host:"upos-sz-mirrorhwb.bilivideo.com"},{name:"hwo1（华为云，融合CDN）",host:"upos-sz-mirrorhwo1.bilivideo.com"},{name:"08c（华为云，融合CDN）",host:"upos-sz-mirror08c.bilivideo.com"},{name:"08h（华为云，融合CDN）",host:"upos-sz-mirror08h.bilivideo.com"},{name:"08ct（华为云，融合CDN）",host:"upos-sz-mirror08ct.bilivideo.com"},{name:"tf_hw（华为云）",host:"upos-tf-all-hw.bilivideo.com"},{name:"tf_tx（腾讯云）",host:"upos-tf-all-tx.bilivideo.com"},{name:"akamai（Akamai海外）",host:"upos-hz-mirrorakam.akamaized.net"},{name:"aliov（阿里云海外）",host:"upos-sz-mirroraliov.bilivideo.com"},{name:"cosov（腾讯云海外）",host:"upos-sz-mirrorcosov.bilivideo.com"},{name:"hwov（华为云海外）",host:"upos-sz-mirrorhwov.bilivideo.com"},{name:"hk_bcache（Bilibili海外）",host:"cn-hk-eq-bcache-01.bilivideo.com"},{name:"alibstar1（阿里云海外-东南亚）",host:"upos-sz-mirroralibstar1.bilivideo.com"},{name:"cosbstar1（腾讯云海外-东南亚）",host:"upos-sz-mirrorcosbstar1.bilivideo.com"},{name:"hwbstar1（华为云海外-东南亚）",host:"upos-sz-mirrorhwbstar1.bilivideo.com"},{name:"akamai（Akamai海外-东南亚）",host:"upos-bstar1-mirrorakam.akamaized.net"}]}},Ct=function(e,t,u,i,r,a,n,o,s){let d={text:e,type:"slider",description:o,attributes:{},props:{},getValue(){return this.props[V].get(t,u)},getToolTipContent(c){return typeof n=="function"?n(c):`${c}`},callback(c,f){this.props[V].set(t,f);},min:i,max:r,step:s};return Reflect.set(d.attributes,ae,t),Reflect.set(d.attributes,ne,u),Reflect.set(d.props,V,{get(c,f){return m.getValue(c,f)},set(c,f){m.setValue(c,f);}}),d},ru={id:"panel-video",title:"视频",isDefault(){return O.isVideo()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[v("调整视频底部区域高度","bili-video-repairVideoBottomAreaHeight",!0,void 0,"添加margin-top"),v("美化底部推荐视频","bili-video-beautify",!0,void 0,"调整底部推荐视频卡片样式类似哔哩哔哩App"),v("手势返回关闭评论区","bili-video-gestureReturnToCloseCommentArea",!0,void 0,"当浏览器手势触发浏览器回退页面时，关闭评论区"),v("强制本页刷新跳转","bili-video-forceThisPageToRefreshAndRedirect",!1,void 0,"用于处理内存泄露问题")]},{type:"forms",text:"底部Tab",forms:[v("滚动固钉Tab","bili-video-optimizationScroll",!0,void 0,"向下滚动时，自动跳转视频区域大小且对Tab进行吸附处理"),v("禁止滑动切换Tab","bili-video-disableSwipeTab",!1,void 0,"禁止左右滑动切换Tab")]}]},{text:"ArtPlayer播放器",type:"deepMenu",forms:[{text:"功能",type:"forms",forms:[v("启用","bili-video-enableArtPlayer",!0,void 0,"使用artplayer代替页面的播放器"),Fe("播放的视频类型","bili-video-playType","mp4",[{text:"mp4",value:"mp4"},{text:"dash",value:"dash"}],void 0,"当选择dash时会有画质更高的选项"),v("自动播放视频","bili-video-playerAutoPlayVideo",!1,void 0,""),v("自动进入全屏","bili-video-playerAutoPlayVideoFullScreen",!1,void 0,"")]},{text:"控件设置",type:"forms",forms:[Ct("controls左右边距","bili-video-artplayer-controlsPadding-left-right",0,0,50,void 0,e=>e+"px","可用于全屏横屏适配屏幕",1)]},{text:"插件",type:"forms",forms:[v("弹幕","artplayer-plugin-video-danmaku-enable",!1,void 0,"哔哩哔哩 (゜-゜)つロ 干杯~"),v("Dash Audio Support","artplayer-plugin-video-m4sAudioSupport-enable",!0,void 0,"视频类型为dash时，该插件可支持播放音频"),v("选集","artplayer-plugin-video-epChoose-enable",!0,void 0,"当视频播放完毕后会自动连播"),v("CC字幕","artplayer-plugin-video-cc-subtitle-enable",!0,void 0,"字幕支持插件，如果存在繁体字幕，则自动生成简体字幕"),v("顶部工具栏","artplayer-plugin-video-toptoolbar-enable",!0,void 0,"显示视频标题和当前观看人数")]},{text:"加速CDN设置",type:"forms",forms:[Fe("UPOS服务器设置","bili-video-uposServerSelect","",J.getUposCDNServerList().map(e=>({text:e.name,value:e.host})),void 0,"设置视频流的服务器，可加快视频加载速度"),v("作用于Audio上","bili-video-uposServerSelect-applyAudio",!1,void 0,"把m4s类型的audio也进行upos替换")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[v("相关视频","bili-video-cover-bottomRecommendVideo",!0,void 0,"点击下面的相关视频可正确跳转至该视频"),v("选集","bili-video-cover-seasonNew",!0,void 0,"点击下面的选集列表内的视频可正确跳转至该视频")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[v("阻止调用App","bili-video-hook-callApp",!0,void 0,"处理函数: PlayerAgent")]}]}]}]},au={id:"panel-bangumi",title:"番剧",isDefault(){return O.isBangumi()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[v("固定缩放倍率","bili-bangumi-initialScale",!0,void 0,"")]}]},{text:"ArtPlayer播放器",type:"deepMenu",forms:[{text:"控件设置",type:"forms",forms:[Ct("controls左右边距","bili-bangumi-artplayer-controlsPadding-left-right",0,0,50,void 0,e=>e+"px","可用于全屏横屏适配屏幕",1)]},{text:"插件",type:"forms",forms:[v("弹幕","artplayer-plugin-bangumi-danmaku-enable",!1,void 0,"哔哩哔哩 (゜-゜)つロ 干杯~"),v("Dash Audio Support","artplayer-plugin-bangumi-m4sAudioSupport-enable",!0,void 0,"视频类型为dash时，该插件可支持播放音频"),v("选集","artplayer-plugin-bangumi-epChoose-enable",!0,void 0,"当视频播放完毕后会自动连播"),v("CC字幕","artplayer-plugin-bangumi-cc-subtitle-enable",!0,void 0,"字幕支持插件，如果存在繁体字幕，则自动生成简体字幕"),v("顶部工具栏","artplayer-plugin-bangumi-toptoolbar-enable",!0,void 0,"显示视频标题和当前观看人数"),v("空降助手","artplayer-plugin-bangumi-airborneHelper-enable",!1,void 0,"如果获取到的信息中存在空降信息，如跳过片头片尾，那么会自动跳过")]},{text:"解除区域限制",type:"forms",forms:[v("解锁番剧限制","bili-bangumi-unlockAreaLimit",!1,void 0,"使用户可以观看区域外版权番剧"),v("生成简中字幕","bili-bangumi-generateSimpleChineseSubtitle",!1,void 0,"根据繁体字幕自动生成简体中文字幕")]},{text:"加速CDN设置",type:"forms",forms:[Fe("UPOS服务器设置","bili-bangumi-uposServerSelect","",J.getUposCDNServerList().map(e=>({text:e.name,value:e.host})),void 0,"设置解锁番剧的服务器，可加快视频加载速度"),v("作用于Audio上","bili-bangumi-uposServerSelect-applyAudio",!1,void 0,"把m4s类型的audio也进行upos替换")]},{text:"<a href='https://github.com/yujincheng08/BiliRoaming/wiki/%E5%85%AC%E5%85%B1%E8%A7%A3%E6%9E%90%E6%9C%8D%E5%8A%A1%E5%99%A8' target='_blank'>解析服务器</a>",type:"forms",forms:[Q("中国大陆","bili-bangumi-proxyApiServer-default","","用于请求播放地址的代理",void 0,"bilibili优化.example.com"),Q("香港","bili-bangumi-proxyApiServer-hk","","用于请求播放地址的代理",void 0,"bilibili优化.example.com"),Q("台湾","bili-bangumi-proxyApiServer-tw","","用于请求播放地址的代理",void 0,"bilibili优化.example.com"),Q("泰国/东南亚","bili-bangumi-proxyApiServer-tha-or-sea","","用于请求播放地址的代理",void 0,"bilibili优化.example.com")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[v("【选集】","bili-bangumi-cover-clicl-event-chooseEp",!0,void 0,"让【选集】的视频列表可点击跳转"),v("【其它】","bili-bangumi-cover-clicl-event-other",!0,void 0,"让【PV&其他】、【预告】、【主题曲】、【香境剧场】等的视频列表可点击跳转"),v("【更多推荐】","bili-bangumi-cover-clicl-event-recommend",!0,void 0,"让【更多推荐】的视频列表可点击跳转")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[v("阻止调用App","bili-bangumi-hook-callApp",!0,void 0,"")]}]}]}]},nu={id:"panel-search",title:"搜索",isDefault(){return O.isSearch()},forms:[{type:"forms",text:"",forms:[{type:"deepMenu",text:"功能",forms:[{type:"forms",text:"",forms:[v("搜索框自动获取焦点","bili-search-inputAutoFocus",!1,void 0,""),v("美化搜索结果","bili-search-beautifySearchResult",!0,void 0,"重构搜索结果的样式"),v("开启其它地区番剧搜索","bili-search-enableOtherAreaSearchBangumi",!1,void 0,"在搜索页面添加其它地区番剧搜索结果，需要解析服务器支持")]},{text:"<a href='https://github.com/yujincheng08/BiliRoaming/wiki/%E5%85%AC%E5%85%B1%E8%A7%A3%E6%9E%90%E6%9C%8D%E5%8A%A1%E5%99%A8' target='_blank'>搜索服务器</a>",type:"forms",forms:[Q("香港","bili-search-proxyApiServer-hk","","用于搜索番剧结果的代理",void 0,"bilibili优化.example.com"),Q("台湾","bili-search-proxyApiServer-tw","","用于搜索番剧结果的代理",void 0,"bilibili优化.example.com"),Q("泰国/东南亚","bili-search-proxyApiServer-tha-or-sea","","用于搜索番剧结果的代理",void 0,"bilibili优化.example.com")]}]},{type:"deepMenu",text:"覆盖点击事件",forms:[{type:"forms",text:"",forms:[v("取消","bili-search-cover-cancel",!1,void 0,"点击取消按钮回退至上一页")]}]},{text:"变量设置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[v("noCallApp","bili-search-vue-prop-noCallApp",!0,void 0,"noCallApp = true"),v("openAppDialog","bili-search-vue-prop-openAppDialog",!0,void 0,"openAppDialog = false")]}]}]}]},ou={id:"panel-live",title:"直播",isDefault(){return O.isLive()},forms:[{text:"",type:"forms",forms:[{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[v("【屏蔽】聊天室","bili-live-block-chatRoom",!1,void 0,"直接不显示底部的聊天室"),v("【屏蔽】xxx进入直播间","bili-live-block-brush-prompt",!1,void 0,"直接不显示底部的xxx进入直播间"),v("【屏蔽】控制面板","bili-live-block-control-panel",!1,void 0,"屏蔽底部的发个弹幕、送礼")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[v("阻止open-app-btn元素点击事件触发","bili-live-prevent-openAppBtn",!0,void 0,"开启后可不跳转至唤醒App页面")]}]}]}]},lu={id:"panel-opus",title:"专栏",isDefault(){return O.isOpus()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[v("自动展开阅读全文","bili-opus-automaticallyExpandToReadFullText",!0,void 0,"屏蔽【展开阅读全文】按钮并自动处理全文高度")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[v("话题","bili-opus-cover-topicJump",!0,void 0,"点击话题正确跳转"),v("header用户","bili-opus-cover-header",!0,void 0,"点击内容上的发布本动态的用户正确跳转个人空间")]}]}]}]},su={id:"panel-dynamic",title:"动态",isDefault(){return O.isDynamic()},forms:[{text:"",type:"forms",forms:[{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[v("话题","bili-dynamic-cover-topicJump",!0,void 0,"点击话题正确跳转"),v("header用户","bili-dynamic-cover-header",!0,void 0,"点击内容上的发布本动态的用户正确跳转个人空间"),v("@用户","bili-dynamic-cover-atJump",!0,void 0,"点击@用户正确跳转个人空间"),v("引用","bili-dynamic-cover-referenceJump",!0,void 0,"点击引用的视频|用户正确跳转")]}]}]}]},cu={id:"panel-head",title:"首页",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[v("美化显示","bili-head-beautify",!0,void 0,"调整瀑布流视频卡片样式类似哔哩哔哩App"),v("美化顶部NavBar","bili-beautifyTopNavBar",!0,void 0,"类似哔哩哔哩App的样式"),v("补充推荐视频信息","bili-head-supplementaryVideoStreamingInformation",!0,void 0,"给视频添加UP主名，当前视频总时长信息"),v("新标签页打开","bili-head-openVideoInNewTab",!1,void 0,"包括视频、番剧")]}]},{text:"推荐视频",type:"deepMenu",forms:[{text:"",type:"forms",forms:[v("启用","bili-head-recommend-enable",!1,void 0,"添加【推荐】标签，数据来源为App端(如果填入了access_token的话)"),v("显示【图文】","bili-head-recommend-push-graphic",!0,void 0,"加载App端推送的【图文】卡片")]}]}]}]},x={getVue(e){return e==null?void 0:e.__vue__},waitVuePropToSet(e,t){if(!Array.isArray(t)){x.waitVuePropToSet(e,[t]);return}function u(){let i=null;return typeof e=="string"?i=document.querySelector(e):typeof e=="function"?i=e():e instanceof HTMLElement&&(i=e),i}t.forEach(i=>{typeof i.msg=="string"&&l.info(i.msg);function r(){let a=u();if(a==null)return !1;let n=x.getVue(a);return n==null?!1:!!i.check(n)}p.waitVueByInterval(()=>u(),r,250,1e4).then(a=>{if(!a)return;let n=u(),o=x.getVue(n);o!=null&&i.set(o);});});},goToUrl(e,t,u=!1){if(e==null){D.error("跳转Url: 获取根元素#app失败"),l.error("跳转Url: 获取根元素#app失败："+t);return}let i=x.getVue(e);if(i==null){l.error("获取vue属性失败"),D.error("获取vue属性失败");return}let r=i.$router,a=!0;if(l.info("即将跳转URL："+t),u&&(a=!1),a)window.open(t,"_blank");else {if(t.startsWith("http")||t.startsWith("//")){t.startsWith("//")&&(t=window.location.protocol+t);let n=new URL(t);if(n.origin===window.location.origin)t=n.pathname+n.search+n.hash;else {l.info("不同域名，直接本页打开，不用Router："+t),window.location.href=t;return}}l.info("$router push跳转Url："+t),r.push(t);}},hookGestureReturnByVueRouter(e){function t(){l.success("触发popstate事件"),i(!0);}function u(){l.success("监听地址改变"),e.vueInstance.$router.history.push(e.hash),h.on(window,"popstate",t);}async function i(r=!1){if(h.off(window,"popstate",t),!e.callback(r))for(;;)if(e.vueInstance.$router.history.current.hash===e.hash)l.info("后退！"),e.vueInstance.$router.back(),await p.sleep(250);else return}return u(),{resumeBack:i}}},P={goToUrl(e,t=!1){let u=document.querySelector("#app");if(u==null){D.error("跳转Url: 获取根元素#app失败"),l.error("跳转Url: 获取根元素#app失败："+e);return}let i=x.getVue(u);if(i==null){l.error("获取#app的vue属性失败"),D.error("获取#app的vue属性失败");return}let r=i.$router,a=m.getValue("bili-go-to-url-blank");if(l.info("即将跳转URL："+e),t&&(a=!1),a)window.open(e,"_blank");else {if(e.startsWith("http")||e.startsWith("//")){e.startsWith("//")&&(e=window.location.protocol+e);let n=new URL(e);if(n.origin===window.location.origin)e=n.pathname+n.search+n.hash;else {l.info("不同域名，直接本页打开，不用Router："+e),window.location.href=e;return}}l.info("$router push跳转Url："+e),r.push(e);}},goToLogin(e=""){window.open(`https://passport.bilibili.com/h5-app/passport/login?gourl=${encodeURIComponent(e)}`);},parseDuration(e){if(typeof e!="number"&&(e=parseInt(e)),isNaN(e))return e.toString();function t(u){return u<10?`0${u}`:u}return e<60?`0:${t(e)}`:e>=60&&e<3600?`${Math.floor(e/60)}:${t(e%60)}`:`${Math.floor(e/3600)}:${t(Math.floor(e/60)%60)}:${t(e%60)}`},hookGestureReturnByVueRouter(e){function t(){l.success("触发popstate事件"),i(!0);}function u(){l.success("监听地址改变"),e.vueObj.$router.history.push(e.hash),h.on(window,"popstate",t);}async function i(r=!1){if(h.off(window,"popstate",t),!e.callback(r))for(;;)if(e.vueObj.$router.history.current.hash===e.hash)l.info("后退！"),e.vueObj.$router.back(),await p.sleep(250);else return}return u(),{resumeBack:i}},initialScale(){l.info("设置<meta>的viewport固定缩放倍率为1并移除页面原有的<meta>"),h.ready(()=>{let e=h.createElement("meta",{},{name:"viewport",content:"width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover"});h.remove("meta[name='viewport']"),p.waitNode("head").then(()=>{document.head.appendChild(e);});});}},du={id:"panel-space",title:"个人空间",isDefault(){return O.isSpace()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[v("修复正确跳转","bili-space-repairRealJump",!0,void 0,"修复视频|动态的正确跳转，避免跳转404")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[v("动态视频","bili-space-coverDynamicStateCardVideo",!0,void 0,"点击发布动态的视频可正常跳转至该视频")]}]}]}]},m={$data:{__data:null,__oneSuccessExecMenu:null,__onceExec:null,__listenData:null,get data(){return m.$data.__data==null&&(m.$data.__data=new p.Dictionary),m.$data.__data},get oneSuccessExecMenu(){return m.$data.__oneSuccessExecMenu==null&&(m.$data.__oneSuccessExecMenu=new p.Dictionary),m.$data.__oneSuccessExecMenu},get onceExec(){return m.$data.__onceExec==null&&(m.$data.__onceExec=new p.Dictionary),m.$data.__onceExec},get scriptName(){return je},key:se,attributeKeyName:ae,attributeDefaultValueName:ne},$listener:{get listenData(){return m.$data.__listenData==null&&(m.$data.__listenData=new p.Dictionary),m.$data.__listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},isTopWindow(){return K.top===K.self},initExtensionsMenu(){this.isTopWindow()&&Kt.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPanel();}},{key:"go_to_login",text:"🛠 前往登录",autoReload:!1,isStoreValue:!1,showText(e){return e},callback(){P.goToLogin();}},{key:"go_to_login_to_parse_access_key",text:"🛠 扫码并解析access_key",autoReload:!1,isStoreValue:!1,showText(e){return e},callback(){pe.init();}}]);},initPanelDefaultValue(){let e=this;function t(r){if(!r.attributes)return;let a={},n=r.attributes[ae];n!=null&&(a[n]=r.attributes[ne]);let o=r.attributes[Qt];if(typeof o=="function"){let c=o();if(typeof c=="boolean"&&!c)return}let s=r.attributes[Zt];s&&typeof s=="object"&&Object.assign(a,s);let d=Object.keys(a);if(!d.length){l.warn("请先配置键",r);return}d.forEach(c=>{let f=a[c];e.$data.data.has(c)&&l.warn("请检查该key(已存在): "+c),e.$data.data.set(c,f);});}function u(r){for(let a=0;a<r.length;a++){let n=r[a];t(n);let o=n.forms;o&&Array.isArray(o)&&u(o);}}let i=this.getPanelContentConfig();for(let r=0;r<i.length;r++){let a=i[r];if(!a.forms)continue;let n=a.forms;n&&Array.isArray(n)&&u(n);}},setValue(e,t){let u=re(se,{}),i=u[e];u[e]=t,fe(se,u),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,i,t);},getValue(e,t){let i=re(se,{})[e];return i??(this.$data.data.has(e)?this.$data.data.get(e):t)},deleteValue(e){let t=re(se,{}),u=t[e];Reflect.deleteProperty(t,e),fe(se,t),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,u,void 0);},addValueChangeListener(e,t){let u=Math.random();return this.$listener.listenData.set(e,{id:u,key:e,callback:t}),u},removeValueChangeListener(e){let t=null;for(const[u,i]of this.$listener.listenData.entries())if(i.id===e){t=u;break}this.$listener.listenData.delete(t);},triggerMenuValueChange(e,t,u){if(this.$listener.listenData.has(e)){let i=this.$listener.listenData.get(e);if(typeof i.callback=="function"){let r=this.getValue(e),a=r,n=r;typeof t<"u"&&arguments.length>1&&(a=t),typeof u<"u"&&arguments.length>2&&(n=u),i.callback(e,n,a);}}},hasKey(e){let t=re(se,{});return e in t},execMenu(e,t,u=!1,i){if(!(typeof e=="string"||typeof e=="object"&&Array.isArray(e)))throw new TypeError("key 必须是字符串或者字符串数组");let r=[];typeof e=="object"&&Array.isArray(e)?r=[...e]:r.push(e);let a;for(let n=0;n<r.length;n++){const o=r[n];if(!this.$data.data.has(o)){l.warn(`${e} 键不存在`);return}let s=m.getValue(o);if(u&&(s=!s),typeof i=="function"){let d=i(o,s);typeof d=="boolean"&&(s=d);}if(!s)break;a=s;}a&&t(a);},execMenuOnce(e,t,u,i,r){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){l.warn(`${e} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(e))return;this.$data.oneSuccessExecMenu.set(e,1);let a=()=>{let f=m.getValue(e);return typeof u=="function"?u(e,f):f},n=[],o=f=>{let E=a(),b=[];if(f instanceof HTMLStyleElement?b=[f]:Array.isArray(f)&&(b=[...f.filter(A=>A!=null&&A instanceof HTMLStyleElement)]),E)n=n.concat(b);else for(let A=0;A<b.length;A++)b[A].remove(),b.splice(A,1),A--;},s=f=>typeof r=="function"?r(e,f):f,d=f=>{let E=[];if(s(f)){let b=t(f,o);b instanceof HTMLStyleElement?E=[b]:Array.isArray(b)&&(E=[...b.filter(A=>A!=null&&A instanceof HTMLStyleElement)]);}for(let b=0;b<n.length;b++)n[b].remove(),n.splice(b,1),b--;n=[...E];};this.addValueChangeListener(e,(f,E,b)=>{let A=b;typeof i=="function"&&(A=i(f,b,E)),d(A);});let c=a();c&&d(c);},execInheritMenuOnce(e,t,u,i){let r=this;const a=(n,o)=>{let s=r.getValue(n),d=r.getValue(o);if(typeof i=="function"){let c=i(s,d);if(c!=null)return c}return s};this.execMenuOnce(e,u,()=>a(e,t),()=>a(e,t)),this.execMenuOnce(t,()=>{},()=>!1,()=>(this.triggerMenuValueChange(e),!1));},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(t(),this.$data.onceExec.set(e,1));},showPanel(){I.panel({title:{text:`${je}-设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},width:me.setting.width,height:me.setting.height,drag:!0,only:!0});},getPanelContentConfig(){return [uu,cu,ru,lu,su,au,nu,du,ou]}},pu=`@charset "UTF-8";\r
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
`,oe={getUserSpaceUrl(e){return `https://m.bilibili.com/space/${e}`},getUserSpaceDynamicUrl(e){return `https://m.bilibili.com/dynamic/${e}`},getUserSpaceOpusUrl(e){return `https://m.bilibili.com/opus/${e}`},getVideoUrl(e){return `https://m.bilibili.com/video/${e}`}},y={className:{bangumi:"#app.main-container",dynamic:"#app .m-dynamic",opus:"#app .m-opus",search:"#app .m-search","topic-detail":"#app .topic-detail",video:"#app .video",mVideo:"#app .m-video",head:"#app .m-head"},theme:"#FB7299"},Ke={className:{read:{mobile:"#app .read-app-main"}}},mu=`.artplayer-container {\r
	position: absolute;\r
	width: 100%;\r
	height: 100%;\r
	top: 0;\r
	left: 0;\r
	overflow: hidden;\r
}`,bt=`/* 设置播放器基础宽高 */\r
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
`,Le={mergeAidOrBvidSearchParamsData(e,t){if("aid"in t&&t.aid!=null)Reflect.set(e,"aid",t.aid);else if("bvid"in t&&t.bvid!=null)Reflect.set(e,"bvid",t.bvid);else throw new TypeError("avid or bvid must give one")}},Ie={"240P 极速":6,"360P 流畅":16,"480P 清晰":32,"720P 高清":64,"720P60 高帧率":74,"1080P 高清":80,"1080P+ 高码率":112,"1080P60 高帧率":116,"4K 超清":120,"HDR 真彩色":125,杜比视界:126,"8K 超高清":127},hu={};Object.keys(Ie).forEach(e=>{let t=Reflect.get(Ie,e);Reflect.set(hu,t,e);});const Ue={async playUrl(e,t){let u={cid:e.cid,qn:e.qn??Ie["1080P60 高帧率"],high_quality:e.high_quality??1,fnval:e.fnval??1,fnver:e.fnver??0,fourk:e.fourk??1};e.setPlatformHTML5&&Reflect.set(u,"platform","html5"),Le.mergeAidOrBvidSearchParamsData(u,e),typeof t=="object"&&Object.assign(u,t);let i=await U.get("https://api.bilibili.com/x/player/playurl?"+p.toSearchParamsStr(u),{responseType:"json",fetch:!0});if(!i.status)return;let r=p.toJSON(i.data.responseText);if(r.code===0)return r.data},async onlineTotal(e){let t={cid:e.cid};Le.mergeAidOrBvidSearchParamsData(t,e);let u=await U.get(`https://${we.web_host}/x/player/online/total?${p.toSearchParamsStr(t)}`,{responseType:"json",fetch:!0});if(!u.status)return;let i=p.toJSON(u.data.responseText);return Z.isWebApiSuccess(i)||l.error(`获取在线观看人数失败: ${JSON.stringify(i)}`),i.data},async like(e){var a;let t={like:e.like,csrf:((a=qe.get("bili_jct"))==null?void 0:a.value)||""};Le.mergeAidOrBvidSearchParamsData(t,e);let u=await U.get("https://api.bilibili.com/x/web-interface/archive/like?"+p.toSearchParamsStr(t),{fetch:!0});if(!u.status)return !1;let i=p.toJSON(u.data.responseText);const r=i.code;return r===0?!0:(r===-101?D.error("账号未登录"):r===-111?D.error("csrf校验失败"):r===-400?D.error("请求错误"):r===-403?D.error("账号异常"):r===10003?D.error("不存在该稿件"):r===65004?D.error("取消点赞失败"):r===65006?D.warning("重复点赞"):D.error("未知错误："+i.message),!1)}},fu={getUserChooseVideoCodingCode(){let e=m.getValue("bili-video-artplayer-videoCodingCode",j.AV1);return Object.values(j).includes(e)||(l.error("意外情况，选择的编码格式不是允许的编码，将强制使用默认，防止过滤掉的视频链接为空："+e),e=j.AV1),e}},At={30216:"64K",30232:"132K",30280:"192K",30250:"杜比全景声",30251:"Hi-Res无损"},gu="[artplayer-plugin-danmuku]：";class vt{constructor(t){be(this,"$data",{KEY:"art-player-danmaku-option",localArtDanmakuOption:{}});this.$data.KEY=t;const u=this.getDefaultDanmakuOption();this.$data.localArtDanmakuOption=p.assign(u,re(this.$data.KEY,{}));}getDefaultDanmakuOption(){return {speed:5,margin:[10,"75%"],opacity:1,modes:[0,1,2],fontSize:18,antiOverlap:!1,synchronousPlayback:!0,visible:!0}}getLocalArtDanmakuOption(){return this.$data.localArtDanmakuOption}repairBrowserNoResponse(t){}onConfigChange(t){t.on("artplayerPluginDanmuku:config",u=>{console.log(gu+"更新配置项",u),Object.keys(this.$data.localArtDanmakuOption).forEach(i=>{if(Reflect.has(u,i)){let r=Reflect.get(u,i);Reflect.set(this.$data.localArtDanmakuOption,i,r);}}),fe(this.$data.KEY,this.$data.localArtDanmakuOption);});}}const ie="[artplayer-plugin-m4sAudioSupport]：",xe="setting-bilibili-m4sAudio",H={$flag:{isIntervaling:!1},intervalHandler(e,t=2,u=900){if(H.$flag.isIntervaling)return;H.$flag.isIntervaling=!0;let i=0,r,a=()=>{if(i>t){H.$flag.isIntervaling=!1,clearInterval(r);return}if(typeof e=="function")try{e();}catch(n){console.error(ie,n);}i++;};a(),t>1?r=setInterval(a,u):H.$flag.isIntervaling=!1;}},C={$key:{plugin_KEY:"plugin-bilibili-m4sAudio"},$data:{art:null,audio:new Audio,latestSyncTime:0,reconnectConfig:{maxCount:5,delayTime:1e3},reconnectInfo:{url:"",count:0}},userEvent:{onRestart:void 0},events:{play:()=>{C.handler.play(),C.handler.syncVolume(),C.handler.syncMuted(),H.intervalHandler(()=>{C.handler.syncTime();},1);},seek:e=>{H.intervalHandler(()=>{C.handler.syncTime(),C.handler.syncPlayState();});},pause:()=>{H.intervalHandler(()=>{C.handler.syncTime();},1),C.handler.pause();},restart:e=>{if(typeof C.userEvent.onRestart=="function"){let t=C.userEvent.onRestart(e);C.handler.playUrl(t);}H.intervalHandler(()=>{C.handler.syncTime();},1),C.handler.syncPlayState();},muted:e=>{C.handler.syncVolume(),C.handler.syncMuted();},destroy:()=>{C.handler.pause();},error:(e,t)=>{C.handler.pause();},resize:()=>{H.intervalHandler(()=>{C.handler.syncTime();});},fullscreen:()=>{H.intervalHandler(()=>{C.handler.syncTime();});},"video:ended":()=>{C.handler.pause();},"video:ratechange":()=>{C.handler.syncPlayBackRate();},"video:waiting":()=>{C.handler.pause();},"video:playing":()=>{H.intervalHandler(()=>{C.handler.syncTime();},1),C.handler.play();},"video:pause":()=>{C.handler.pause(),H.intervalHandler(()=>{C.handler.syncTime();},1);},"video:volumechange":()=>{C.handler.syncVolume(),C.handler.syncMuted();},"video:timeupdate":()=>{let e=C.$data.art.currentTime;Math.abs(e-C.$data.latestSyncTime)>=3&&(C.$data.latestSyncTime=e,H.intervalHandler(()=>{C.handler.syncTime(.777);},1));}},audioEvents:{loadedmetadata:e=>{console.log(ie+"Audio预加载完成"),C.$data.reconnectInfo.count=0,C.$data.reconnectInfo.url="",C.$data.latestSyncTime=0,C.handler.syncPlayState(),C.handler.syncPlayBackRate(),C.handler.syncVolume(),C.handler.syncMuted(),H.intervalHandler(()=>{C.handler.syncTime();});},canplaythrough:e=>{console.log(ie+"浏览器估计该音频可以在不停止内容缓冲的情况下播放媒体直到结束"),H.intervalHandler(()=>{C.handler.syncTime();});},error:e=>{console.error(ie+"Audio加载失败",e),p.isNull(C.$data.reconnectInfo.url)&&(C.$data.reconnectInfo.url=C.$data.audio.src),C.$data.reconnectInfo.count<C.$data.reconnectConfig.maxCount?(console.log(ie+`Audio第${C.$data.reconnectInfo.count+1}次尝试重新连接`),C.$data.art.notice.show=`Audio第${C.$data.reconnectInfo.count+1}次尝试重新连接`,C.$data.reconnectInfo.count++,setTimeout(()=>{C.handler.playUrl(""),C.handler.playUrl(C.$data.reconnectInfo.url),C.$data.audio.load();},C.$data.reconnectConfig.delayTime)):(console.error(ie+"Audio已超出重连次数"),C.$data.art.notice.show="Audio已超出重连次数，请尝试切换源");}},handler:{playUrl(e){typeof e=="string"&&(C.$data.audio.src=e,C.unbindAudio(),p.isNotNull(e)&&C.bindAudio());},play(){C.$data.audio.paused&&C.$data.audio.play();},pause(){C.$data.audio.paused||C.$data.audio.pause();},syncPlayState(){C.$data.art.playing?this.play():this.pause();},syncTime(e=.1){let t=C.$data.art.currentTime,u=C.$data.audio.currentTime;Math.abs(t-u)>=Math.abs(e)&&(C.$data.audio.currentTime=t,this.syncVolume(),this.syncMuted());},syncVolume(){C.$data.audio.volume=C.$data.art.volume;},syncMuted(){let e=C.$data.art.muted,t=C.$data.audio.muted;e!==t&&(C.$data.audio.muted=e);},syncPlayBackRate(){let e=C.$data.art.playbackRate,t=C.$data.audio.playbackRate;e!==t&&(C.$data.audio.playbackRate=e);}},update(e){var u;this.unbind(),this.unbindAudio(),this.$data.latestSyncTime=0;const t=this;if((u=e.audioList)!=null&&u.length){let i=e.audioList[0];const r=`artplayer-m4s-audio-${e.from}`,a=this.$data.art.storage.get(r);let n={index:0,html:i.soundQualityCodeText,url:i.url};if(a){const c=e.audioList.findIndex(f=>f.soundQualityCode===a.soundQualityCode);if(c!==-1){const f=e.audioList[c];n.index=c,n.url=f.url,n.html=f.soundQualityCodeText;}else console.warn(ie+"没有找到上次选的音频代码，使用当前默认第一个音频");}let o=e.audioList.map((c,f)=>({default:f===n.index,html:c.soundQualityCodeText,url:c.url,soundQualityCode:c.soundQualityCode,soundQualityCodeText:c.soundQualityCodeText}));const s={name:xe,width:200,html:"音频",tooltip:n.html,icon:`
				<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
					<path d="M123.5 438.5h131.3v310.7H123.5zM769.2 438.5h131.3v310.7H769.2z"></path>
					<path d="M859.8 398.8h-48.3c-7.9 0-15.4 1.6-22.5 3.9v-32.4c0-125.2-101.9-227.1-227.1-227.1h-99.7c-125.2 0-227.1 101.9-227.1 227.1v32.4c-7.1-2.3-14.6-3.9-22.5-3.9h-48.3c-40.9 0-74.2 33.3-74.2 74.2v243c0 40.9 33.3 74.2 74.2 74.2h48.3c40.9 0 74.2-33.3 74.2-74.2V370.3c0-96.7 78.7-175.4 175.4-175.4h99.7c96.7 0 175.4 78.7 175.4 175.4V716c0 40.9 33.3 74.2 74.2 74.2h48.3c40.9 0 74.2-33.3 74.2-74.2V473c-0.1-40.9-33.3-74.2-74.2-74.2zM235.1 716c0 12.4-10.1 22.5-22.5 22.5h-48.3c-12.4 0-22.5-10.1-22.5-22.5V473c0-12.4 10.1-22.5 22.5-22.5h48.3c12.4 0 22.5 10.1 22.5 22.5v243z m647.2 0c0 12.4-10.1 22.5-22.5 22.5h-48.3c-12.4 0-22.5-10.1-22.5-22.5V473c0-12.4 10.1-22.5 22.5-22.5h48.3c12.4 0 22.5 10.1 22.5 22.5v243z"></path>
					<path d="M531.3 652.3c-1.7 0-3.3-0.1-5-0.4-10.2-1.7-18.7-8.3-22.7-17.8l-41.1-95.4-37 43.8c-8.1 9.6-19.9 15.1-32.5 15.1h-71.9V546h67.6l56.6-67.1c6.8-8.1 17-12 27.5-10.4 10.4 1.5 19.1 8.2 23.3 17.9l41.6 96.7 21.9-24c8-8.8 19.5-13.9 31.4-13.9h102.4v51.7H595l-41.6 45.7c-5.6 6.2-13.7 9.7-22.1 9.7z"></path>
				</svg>
				`,selector:o,onSelect:function(c){let f=c;return console.log(ie+"切换音频",f),t.handler.playUrl(f.url),t.$data.art.storage.set(r,{soundQualityCode:f.soundQualityCode}),c.html}};C.$data.art.setting.find(xe)?C.$data.art.setting.update(s):C.$data.art.setting.add(s),l.info("加载m4s的音频：",n),C.handler.playUrl(n.url),this.bind(),this.bindAudio();}else C.handler.playUrl(""),C.$data.art.setting.option.find(r=>r.name===xe)&&C.$data.art.setting.remove(xe);},bind(){Object.keys(this.events).forEach(e=>{this.$data.art.on(e,this.events[e]);});},bindAudio(){Object.keys(this.audioEvents).forEach(e=>{this.$data.audio.addEventListener(e,this.audioEvents[e],{once:!0});});},unbind(){Object.keys(this.events).forEach(e=>{this.$data.art.off(e,this.events[e]);});},unbindAudio(){Object.keys(this.audioEvents).forEach(e=>{this.$data.audio.removeEventListener(e,this.audioEvents[e]);});}},Et=e=>t=>(C.$data.art=t,typeof e.onRestart=="function"&&(C.userEvent.onRestart=e.onRestart),C.update({from:e.from,audioList:e.audioList}),{name:C.$key.plugin_KEY,update(...u){C.update(...u),C.handler.syncVolume(),C.handler.syncMuted(),C.handler.syncTime();}}),yt=C.$key.plugin_KEY,Cu={events:{control:e=>{e&&$.updateOnlineTotal({showOnlineTotal:$.$data.option.showOnlineTotal,onlineInfoParams:$.$data.option.onlineInfoParams});}},bind(){Object.keys(this.events).forEach(e=>{$.art.on(e,this.events[e]);});},unbind(){Object.keys(this.events).forEach(e=>{$.art.off(e,this.events[e]);});}},$={art:null,$el:{$topWrap:null,$topTitle:null,$topTitleText:null,$topTitleFollow:null,$topTitleFollowText:null,$topRight:null,$topRightFollow:null},$data:{isInit:!1,__option:{},option:{}},$key:{plugin_KEY:"plugin-bilibili-topToolBar"},init(e){this.art.layers.add({name:"top-wrap",html:`
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
            `,mounted:async function(t){$.$el.$topWrap=t,$.$el.$topTitle=t.querySelector(".art-player-top-title"),$.$el.$topTitleText=t.querySelector(".art-player-top-title-text"),$.$el.$topTitleFollow=t.querySelector(".art-player-top-follow"),$.$el.$topTitleFollowText=t.querySelector(".art-player-top-follow-text"),$.$el.$topRight=t.querySelector(".art-player-top-right"),$.$el.$topRightFollow=t.querySelector(".art-player-top-right-follow"),$.update(e),Cu.bind();}});},update(e){this.$data.isInit||(this.$data.isInit=!0,Object.defineProperties(this.$data.option,{showWrap:{set(t){$.$data.__option.showWrap=t;},get(){return $.$data.__option.showWrap}},showTitle:{set(t){$.$data.__option.showTitle=t;},get(){return $.$data.__option.showTitle}},title:{set(t){$.$data.__option.title=t,typeof t=="string"&&($.$el.$topTitleText.innerText=t);},get(){return $.$data.__option.title}},showOnlineTotal:{set(t){$.$data.__option.showOnlineTotal=t;},get(){return $.$data.__option.showOnlineTotal}},onlineInfoParams:{set(t){$.$data.__option.onlineInfoParams=t,$.updateOnlineTotal({showOnlineTotal:this.showOnlineTotal,onlineInfoParams:t});},get(){return $.$data.__option.onlineInfoParams}},showRight:{set(t){$.$data.__option.showRight=t;},get(){return $.$data.__option.showRight}},showRightFollow:{set(t){$.$data.__option.showRightFollow=t;},get(){return $.$data.__option.showRightFollow}}})),Object.assign(this.$data.option,e);},async updateOnlineTotal(e){if(!e.showOnlineTotal)return;let t=await Ue.onlineTotal({aid:e.onlineInfoParams.aid,bvid:e.onlineInfoParams.bvid,cid:e.onlineInfoParams.cid});t&&($.$el.$topTitleFollowText.innerText=`${t.total||t.count||0}人正在看`);}},Dt=e=>t=>($.art=t,$.init(e),{name:$.$key.plugin_KEY,update(u){$.update(u);}}),Bt=$.$key.plugin_KEY,Ft={S:"万与丑专业丛东丝丢两严丧个丬丰临为丽举么义乌乐乔习乡书买乱争于亏云亘亚产亩亲亵亸亿仅从仑仓仪们价众优伙会伛伞伟传伤伥伦伧伪伫体余佣佥侠侣侥侦侧侨侩侪侬俣俦俨俩俪俭债倾偬偻偾偿傥傧储傩儿兑兖党兰关兴兹养兽冁内冈册写军农冢冯冲决况冻净凄凉凌减凑凛几凤凫凭凯击凼凿刍划刘则刚创删别刬刭刽刿剀剂剐剑剥剧劝办务劢动励劲劳势勋勐勚匀匦匮区医华协单卖卢卤卧卫却卺厂厅历厉压厌厍厕厢厣厦厨厩厮县参叆叇双发变叙叠叶号叹叽吁后吓吕吗吣吨听启吴呒呓呕呖呗员呙呛呜咏咔咙咛咝咤咴咸哌响哑哒哓哔哕哗哙哜哝哟唛唝唠唡唢唣唤唿啧啬啭啮啰啴啸喷喽喾嗫呵嗳嘘嘤嘱噜噼嚣嚯团园囱围囵国图圆圣圹场坂坏块坚坛坜坝坞坟坠垄垅垆垒垦垧垩垫垭垯垱垲垴埘埙埚埝埯堑堕塆墙壮声壳壶壸处备复够头夸夹夺奁奂奋奖奥妆妇妈妩妪妫姗姜娄娅娆娇娈娱娲娴婳婴婵婶媪嫒嫔嫱嬷孙学孪宁宝实宠审宪宫宽宾寝对寻导寿将尔尘尧尴尸尽层屃屉届属屡屦屿岁岂岖岗岘岙岚岛岭岳岽岿峃峄峡峣峤峥峦崂崃崄崭嵘嵚嵛嵝嵴巅巩巯币帅师帏帐帘帜带帧帮帱帻帼幂幞干并广庄庆庐庑库应庙庞废庼廪开异弃张弥弪弯弹强归当录彟彦彻径徕御忆忏忧忾怀态怂怃怄怅怆怜总怼怿恋恳恶恸恹恺恻恼恽悦悫悬悭悯惊惧惨惩惫惬惭惮惯愍愠愤愦愿慑慭憷懑懒懔戆戋戏戗战戬户扎扑扦执扩扪扫扬扰抚抛抟抠抡抢护报担拟拢拣拥拦拧拨择挂挚挛挜挝挞挟挠挡挢挣挤挥挦捞损捡换捣据捻掳掴掷掸掺掼揸揽揿搀搁搂搅携摄摅摆摇摈摊撄撑撵撷撸撺擞攒敌敛数斋斓斗斩断无旧时旷旸昙昼昽显晋晒晓晔晕晖暂暧札术朴机杀杂权条来杨杩杰极构枞枢枣枥枧枨枪枫枭柜柠柽栀栅标栈栉栊栋栌栎栏树栖样栾桊桠桡桢档桤桥桦桧桨桩梦梼梾检棂椁椟椠椤椭楼榄榇榈榉槚槛槟槠横樯樱橥橱橹橼檐檩欢欤欧歼殁殇残殒殓殚殡殴毁毂毕毙毡毵氇气氢氩氲汇汉污汤汹沓沟没沣沤沥沦沧沨沩沪沵泞泪泶泷泸泺泻泼泽泾洁洒洼浃浅浆浇浈浉浊测浍济浏浐浑浒浓浔浕涂涌涛涝涞涟涠涡涢涣涤润涧涨涩淀渊渌渍渎渐渑渔渖渗温游湾湿溃溅溆溇滗滚滞滟滠满滢滤滥滦滨滩滪漤潆潇潋潍潜潴澜濑濒灏灭灯灵灾灿炀炉炖炜炝点炼炽烁烂烃烛烟烦烧烨烩烫烬热焕焖焘煅煳熘爱爷牍牦牵牺犊犟状犷犸犹狈狍狝狞独狭狮狯狰狱狲猃猎猕猡猪猫猬献獭玑玙玚玛玮环现玱玺珉珏珐珑珰珲琎琏琐琼瑶瑷璇璎瓒瓮瓯电画畅畲畴疖疗疟疠疡疬疮疯疱疴痈痉痒痖痨痪痫痴瘅瘆瘗瘘瘪瘫瘾瘿癞癣癫癯皑皱皲盏盐监盖盗盘眍眦眬着睁睐睑瞒瞩矫矶矾矿砀码砖砗砚砜砺砻砾础硁硅硕硖硗硙硚确硷碍碛碜碱碹磙礼祎祢祯祷祸禀禄禅离秃秆种积称秽秾稆税稣稳穑穷窃窍窑窜窝窥窦窭竖竞笃笋笔笕笺笼笾筑筚筛筜筝筹签简箓箦箧箨箩箪箫篑篓篮篱簖籁籴类籼粜粝粤粪粮糁糇紧絷纟纠纡红纣纤纥约级纨纩纪纫纬纭纮纯纰纱纲纳纴纵纶纷纸纹纺纻纼纽纾线绀绁绂练组绅细织终绉绊绋绌绍绎经绐绑绒结绔绕绖绗绘给绚绛络绝绞统绠绡绢绣绤绥绦继绨绩绪绫绬续绮绯绰绱绲绳维绵绶绷绸绹绺绻综绽绾绿缀缁缂缃缄缅缆缇缈缉缊缋缌缍缎缏缐缑缒缓缔缕编缗缘缙缚缛缜缝缞缟缠缡缢缣缤缥缦缧缨缩缪缫缬缭缮缯缰缱缲缳缴缵罂网罗罚罢罴羁羟羡翘翙翚耢耧耸耻聂聋职聍联聩聪肃肠肤肷肾肿胀胁胆胜胧胨胪胫胶脉脍脏脐脑脓脔脚脱脶脸腊腌腘腭腻腼腽腾膑臜舆舣舰舱舻艰艳艹艺节芈芗芜芦苁苇苈苋苌苍苎苏苘苹茎茏茑茔茕茧荆荐荙荚荛荜荞荟荠荡荣荤荥荦荧荨荩荪荫荬荭荮药莅莜莱莲莳莴莶获莸莹莺莼萚萝萤营萦萧萨葱蒇蒉蒋蒌蓝蓟蓠蓣蓥蓦蔷蔹蔺蔼蕲蕴薮藁藓虏虑虚虫虬虮虽虾虿蚀蚁蚂蚕蚝蚬蛊蛎蛏蛮蛰蛱蛲蛳蛴蜕蜗蜡蝇蝈蝉蝎蝼蝾螀螨蟏衅衔补衬衮袄袅袆袜袭袯装裆裈裢裣裤裥褛褴襁襕见观觃规觅视觇览觉觊觋觌觍觎觏觐觑觞触觯詟誉誊讠计订讣认讥讦讧讨让讪讫训议讯记讱讲讳讴讵讶讷许讹论讻讼讽设访诀证诂诃评诅识诇诈诉诊诋诌词诎诏诐译诒诓诔试诖诗诘诙诚诛诜话诞诟诠诡询诣诤该详诧诨诩诪诫诬语诮误诰诱诲诳说诵诶请诸诹诺读诼诽课诿谀谁谂调谄谅谆谇谈谊谋谌谍谎谏谐谑谒谓谔谕谖谗谘谙谚谛谜谝谞谟谠谡谢谣谤谥谦谧谨谩谪谫谬谭谮谯谰谱谲谳谴谵谶谷豮贝贞负贠贡财责贤败账货质贩贪贫贬购贮贯贰贱贲贳贴贵贶贷贸费贺贻贼贽贾贿赀赁赂赃资赅赆赇赈赉赊赋赌赍赎赏赐赑赒赓赔赕赖赗赘赙赚赛赜赝赞赟赠赡赢赣赪赵赶趋趱趸跃跄跖跞践跶跷跸跹跻踊踌踪踬踯蹑蹒蹰蹿躏躜躯车轧轨轩轪轫转轭轮软轰轱轲轳轴轵轶轷轸轹轺轻轼载轾轿辀辁辂较辄辅辆辇辈辉辊辋辌辍辎辏辐辑辒输辔辕辖辗辘辙辚辞辩辫边辽达迁过迈运还这进远违连迟迩迳迹适选逊递逦逻遗遥邓邝邬邮邹邺邻郁郄郏郐郑郓郦郧郸酝酦酱酽酾酿释里鉅鉴銮錾钆钇针钉钊钋钌钍钎钏钐钑钒钓钔钕钖钗钘钙钚钛钝钞钟钠钡钢钣钤钥钦钧钨钩钪钫钬钭钮钯钰钱钲钳钴钵钶钷钸钹钺钻钼钽钾钿铀铁铂铃铄铅铆铈铉铊铋铍铎铏铐铑铒铕铗铘铙铚铛铜铝铞铟铠铡铢铣铤铥铦铧铨铪铫铬铭铮铯铰铱铲铳铴铵银铷铸铹铺铻铼铽链铿销锁锂锃锄锅锆锇锈锉锊锋锌锍锎锏锐锑锒锓锔锕锖锗错锚锜锞锟锠锡锢锣锤锥锦锨锩锫锬锭键锯锰锱锲锳锴锵锶锷锸锹锺锻锼锽锾锿镀镁镂镃镆镇镈镉镊镌镍镎镏镐镑镒镕镖镗镙镚镛镜镝镞镟镠镡镢镣镤镥镦镧镨镩镪镫镬镭镮镯镰镱镲镳镴镶长门闩闪闫闬闭问闯闰闱闲闳间闵闶闷闸闹闺闻闼闽闾闿阀阁阂阃阄阅阆阇阈阉阊阋阌阍阎阏阐阑阒阓阔阕阖阗阘阙阚阛队阳阴阵阶际陆陇陈陉陕陧陨险随隐隶隽难雏雠雳雾霁霉霭靓静靥鞑鞒鞯鞴韦韧韨韩韪韫韬韵页顶顷顸项顺须顼顽顾顿颀颁颂颃预颅领颇颈颉颊颋颌颍颎颏颐频颒颓颔颕颖颗题颙颚颛颜额颞颟颠颡颢颣颤颥颦颧风飏飐飑飒飓飔飕飖飗飘飙飚飞飨餍饤饥饦饧饨饩饪饫饬饭饮饯饰饱饲饳饴饵饶饷饸饹饺饻饼饽饾饿馀馁馂馃馄馅馆馇馈馉馊馋馌馍馎馏馐馑馒馓馔馕马驭驮驯驰驱驲驳驴驵驶驷驸驹驺驻驼驽驾驿骀骁骂骃骄骅骆骇骈骉骊骋验骍骎骏骐骑骒骓骔骕骖骗骘骙骚骛骜骝骞骟骠骡骢骣骤骥骦骧髅髋髌鬓魇魉鱼鱽鱾鱿鲀鲁鲂鲄鲅鲆鲇鲈鲉鲊鲋鲌鲍鲎鲏鲐鲑鲒鲓鲔鲕鲖鲗鲘鲙鲚鲛鲜鲝鲞鲟鲠鲡鲢鲣鲤鲥鲦鲧鲨鲩鲪鲫鲬鲭鲮鲯鲰鲱鲲鲳鲴鲵鲶鲷鲸鲹鲺鲻鲼鲽鲾鲿鳀鳁鳂鳃鳄鳅鳆鳇鳈鳉鳊鳋鳌鳍鳎鳏鳐鳑鳒鳓鳔鳕鳖鳗鳘鳙鳛鳜鳝鳞鳟鳠鳡鳢鳣鸟鸠鸡鸢鸣鸤鸥鸦鸧鸨鸩鸪鸫鸬鸭鸮鸯鸰鸱鸲鸳鸴鸵鸶鸷鸸鸹鸺鸻鸼鸽鸾鸿鹀鹁鹂鹃鹄鹅鹆鹇鹈鹉鹊鹋鹌鹍鹎鹏鹐鹑鹒鹓鹔鹕鹖鹗鹘鹚鹛鹜鹝鹞鹟鹠鹡鹢鹣鹤鹥鹦鹧鹨鹩鹪鹫鹬鹭鹯鹰鹱鹲鹳鹴鹾麦麸黄黉黡黩黪黾鼋鼌鼍鼗鼹齄齐齑齿龀龁龂龃龄龅龆龇龈龉龊龋龌龙龚龛龟志制咨只里系范松没尝尝闹面准钟别闲乾尽脏拼冲里",T:"萬與醜專業叢東絲丟兩嚴喪個丬豐臨爲麗舉麼義烏樂喬習鄉書買亂爭於虧雲亙亞產畝親褻嚲億僅從侖倉儀們價衆優夥會傴傘偉傳傷倀倫傖僞佇體餘傭僉俠侶僥偵側僑儈儕儂俁儔儼倆儷儉債傾傯僂僨償儻儐儲儺兒兌兗黨蘭關興茲養獸囅內岡冊寫軍農冢馮沖決況凍淨淒涼凌減湊凜幾鳳鳧憑凱擊凼鑿芻劃劉則剛創刪別剗剄劊劌剴劑剮劍剝劇勸辦務勱動勵勁勞勢勳勐勩勻匭匱區醫華協單賣盧滷臥衛卻巹廠廳歷厲壓厭厙廁廂厴廈廚廄廝縣參靉靆雙發變敘疊葉號嘆嘰籲後嚇呂嗎唚噸聽啓吳嘸囈嘔嚦唄員咼嗆嗚詠咔嚨嚀噝吒咴鹹哌響啞噠嘵嗶噦譁噲嚌噥喲嘜嗊嘮啢嗩唣喚唿嘖嗇囀齧囉嘽嘯噴嘍嚳囁呵噯噓嚶囑嚕噼囂嚯團園囪圍圇國圖圓聖壙場阪壞塊堅壇壢壩塢墳墜壟壠壚壘墾垧堊墊埡墶壋塏堖塒壎堝埝垵塹墮壪牆壯聲殼壺壼處備復夠頭誇夾奪奩奐奮獎奧妝婦媽嫵嫗嬀姍姜婁婭嬈嬌孌娛媧嫺嫿嬰嬋嬸媼嬡嬪嬙嬤孫學孿寧寶實寵審憲宮寬賓寢對尋導壽將爾塵堯尷屍盡層屓屜屆屬屢屨嶼歲豈嶇崗峴嶴嵐島嶺嶽崬巋嶨嶧峽嶢嶠崢巒嶗崍嶮嶄嶸嶔嵛嶁嵴巔鞏巰幣帥師幃帳簾幟帶幀幫幬幘幗冪襆幹並廣莊慶廬廡庫應廟龐廢廎廩開異棄張彌弳彎彈強歸當錄彠彥徹徑徠御憶懺憂愾懷態慫憮慪悵愴憐總懟懌戀懇惡慟懨愷惻惱惲悅愨懸慳憫驚懼慘懲憊愜慚憚慣愍慍憤憒願懾憖憷懣懶懍戇戔戲戧戰戩戶扎撲扦執擴捫掃揚擾撫拋摶摳掄搶護報擔擬攏揀擁攔擰撥擇掛摯攣掗撾撻挾撓擋撟掙擠揮撏撈損撿換搗據捻擄摑擲撣摻摜揸攬撳攙擱摟攪攜攝攄擺搖擯攤攖撐攆擷擼攛擻攢敵斂數齋斕鬥斬斷無舊時曠暘曇晝曨顯晉曬曉曄暈暉暫曖札術樸機殺雜權條來楊榪傑極構樅樞棗櫪梘棖槍楓梟櫃檸檉梔柵標棧櫛櫳棟櫨櫟欄樹棲樣欒桊椏橈楨檔榿橋樺檜槳樁夢檮棶檢櫺槨櫝槧欏橢樓欖櫬櫚櫸檟檻檳櫧橫檣櫻櫫櫥櫓櫞檐檁歡歟歐殲歿殤殘殞殮殫殯毆毀轂畢斃氈毿氌氣氫氬氳匯漢污湯洶沓溝沒灃漚瀝淪滄渢潙滬沵濘淚澩瀧瀘濼瀉潑澤涇潔灑窪浹淺漿澆湞溮濁測澮濟瀏滻渾滸濃潯濜塗涌濤澇淶漣潿渦溳渙滌潤澗漲澀澱淵淥漬瀆漸澠漁瀋滲溫遊灣溼潰濺漵漊潷滾滯灩灄滿瀅濾濫灤濱灘澦漤瀠瀟瀲濰潛瀦瀾瀨瀕灝滅燈靈災燦煬爐燉煒熗點煉熾爍爛烴燭煙煩燒燁燴燙燼熱煥燜燾煅煳熘愛爺牘犛牽犧犢犟狀獷獁猶狽狍獮獰獨狹獅獪猙獄猻獫獵獼玀豬貓蝟獻獺璣璵瑒瑪瑋環現瑲璽珉珏琺瓏璫琿璡璉瑣瓊瑤璦璇瓔瓚甕甌電畫暢畲疇癤療瘧癘瘍癧瘡瘋皰痾癰痙癢瘂癆瘓癇癡癉瘮瘞瘻癟癱癮癭癩癬癲癯皚皺皸盞鹽監蓋盜盤瞘眥矓着睜睞瞼瞞矚矯磯礬礦碭碼磚硨硯碸礪礱礫礎硜硅碩硤磽磑礄確礆礙磧磣鹼碹磙禮禕禰禎禱禍稟祿禪離禿稈種積稱穢穠穭稅穌穩穡窮竊竅窯竄窩窺竇窶豎競篤筍筆筧箋籠籩築篳篩簹箏籌籤簡籙簀篋籜籮簞簫簣簍籃籬籪籟糴類秈糶糲粵糞糧糝餱緊縶糹糾紆紅紂纖紇約級紈纊紀紉緯紜紘純紕紗綱納紝縱綸紛紙紋紡紵紖紐紓線紺紲紱練組紳細織終縐絆紼絀紹繹經紿綁絨結絝繞絰絎繪給絢絳絡絕絞統綆綃絹繡綌綏絛繼綈績緒綾緓續綺緋綽鞝緄繩維綿綬繃綢綯綹綣綜綻綰綠綴緇緙緗緘緬纜緹緲緝縕繢緦綞緞緶線緱縋緩締縷編緡緣縉縛縟縝縫縗縞纏縭縊縑繽縹縵縲纓縮繆繅纈繚繕繒繮繾繰繯繳纘罌網羅罰罷羆羈羥羨翹翽翬耮耬聳恥聶聾職聹聯聵聰肅腸膚肷腎腫脹脅膽勝朧腖臚脛膠脈膾髒臍腦膿臠腳脫腡臉臘醃膕齶膩靦膃騰臏臢輿艤艦艙艫艱豔艹藝節羋薌蕪蘆蓯葦藶莧萇蒼苧蘇檾蘋莖蘢蔦塋煢繭荊薦薘莢蕘蓽蕎薈薺蕩榮葷滎犖熒蕁藎蓀蔭蕒葒葤藥蒞莜萊蓮蒔萵薟獲蕕瑩鶯蓴蘀蘿螢營縈蕭薩蔥蕆蕢蔣蔞藍薊蘺蕷鎣驀薔蘞藺藹蘄蘊藪藁蘚虜慮虛蟲虯蟣雖蝦蠆蝕蟻螞蠶蠔蜆蠱蠣蟶蠻蟄蛺蟯螄蠐蛻蝸蠟蠅蟈蟬蠍螻蠑螿蟎蠨釁銜補襯袞襖嫋褘襪襲襏裝襠褌褳襝褲襉褸襤襁襴見觀覎規覓視覘覽覺覬覡覿覥覦覯覲覷觴觸觶讋譽謄訁計訂訃認譏訐訌討讓訕訖訓議訊記訒講諱謳詎訝訥許訛論訩訟諷設訪訣證詁訶評詛識詗詐訴診詆謅詞詘詔詖譯詒誆誄試詿詩詰詼誠誅詵話誕詬詮詭詢詣諍該詳詫諢詡譸誡誣語誚誤誥誘誨誑說誦誒請諸諏諾讀諑誹課諉諛誰諗調諂諒諄誶談誼謀諶諜謊諫諧謔謁謂諤諭諼讒諮諳諺諦謎諞諝謨讜謖謝謠謗諡謙謐謹謾謫譾謬譚譖譙讕譜譎讞譴譫讖谷豶貝貞負貟貢財責賢敗賬貨質販貪貧貶購貯貫貳賤賁貰貼貴貺貸貿費賀貽賊贄賈賄貲賃賂贓資賅贐賕賑賚賒賦賭齎贖賞賜贔賙賡賠賧賴賵贅賻賺賽賾贗贊贇贈贍贏贛赬趙趕趨趲躉躍蹌跖躒踐躂蹺蹕躚躋踊躊蹤躓躑躡蹣躕躥躪躦軀車軋軌軒軑軔轉軛輪軟轟軲軻轤軸軹軼軤軫轢軺輕軾載輊轎輈輇輅較輒輔輛輦輩輝輥輞輬輟輜輳輻輯轀輸轡轅轄輾轆轍轔辭辯辮邊遼達遷過邁運還這進遠違連遲邇逕跡適選遜遞邐邏遺遙鄧鄺鄔郵鄒鄴鄰鬱郄郟鄶鄭鄆酈鄖鄲醞醱醬釅釃釀釋裏鉅鑑鑾鏨釓釔針釘釗釙釕釷釺釧釤鈒釩釣鍆釹鍚釵鈃鈣鈈鈦鈍鈔鍾鈉鋇鋼鈑鈐鑰欽鈞鎢鉤鈧鈁鈥鈄鈕鈀鈺錢鉦鉗鈷鉢鈳鉕鈽鈸鉞鑽鉬鉭鉀鈿鈾鐵鉑鈴鑠鉛鉚鈰鉉鉈鉍鈹鐸鉶銬銠鉺銪鋏鋣鐃銍鐺銅鋁銱銦鎧鍘銖銑鋌銩銛鏵銓鉿銚鉻銘錚銫鉸銥鏟銃鐋銨銀銣鑄鐒鋪鋙錸鋱鏈鏗銷鎖鋰鋥鋤鍋鋯鋨鏽銼鋝鋒鋅鋶鐦鐗銳銻鋃鋟鋦錒錆鍺錯錨錡錁錕錩錫錮鑼錘錐錦杴錈錇錟錠鍵鋸錳錙鍥鍈鍇鏘鍶鍔鍤鍬鍾鍛鎪鍠鍰鎄鍍鎂鏤鎡鏌鎮鎛鎘鑷鐫鎳鎿鎦鎬鎊鎰鎔鏢鏜鏍鏰鏞鏡鏑鏃鏇鏐鐔钁鐐鏷鑥鐓鑭鐠鑹鏹鐙鑊鐳鐶鐲鐮鐿鑔鑣鑞鑲長門閂閃閆閈閉問闖閏闈閒閎間閔閌悶閘鬧閨聞闥閩閭闓閥閣閡閫鬮閱閬闍閾閹閶鬩閿閽閻閼闡闌闃闠闊闋闔闐闒闕闞闤隊陽陰陣階際陸隴陳陘陝隉隕險隨隱隸雋難雛讎靂霧霽黴靄靚靜靨韃鞽韉鞴韋韌韍韓韙韞韜韻頁頂頃頇項順須頊頑顧頓頎頒頌頏預顱領頗頸頡頰頲頜潁熲頦頤頻頮頹頷頴穎顆題顒顎顓顏額顳顢顛顙顥纇顫顬顰顴風颺颭颮颯颶颸颼颻飀飄飆飈飛饗饜飣飢飥餳飩餼飪飫飭飯飲餞飾飽飼飿飴餌饒餉餄餎餃餏餅餑餖餓餘餒餕餜餛餡館餷饋餶餿饞饁饃餺餾饈饉饅饊饌饢馬馭馱馴馳驅馹駁驢駔駛駟駙駒騶駐駝駑駕驛駘驍罵駰驕驊駱駭駢驫驪騁驗騂駸駿騏騎騍騅騌驌驂騙騭騤騷騖驁騮騫騸驃騾驄驏驟驥驦驤髏髖髕鬢魘魎魚魛魢魷魨魯魴魺鮁鮃鮎鱸鮋鮓鮒鮊鮑鱟鮍鮐鮭鮚鮳鮪鮞鮦鰂鮜鱠鱭鮫鮮鮺鯗鱘鯁鱺鰱鰹鯉鰣鰷鯀鯊鯇鮶鯽鯒鯖鯪鯕鯫鯡鯤鯧鯝鯢鮎鯛鯨鰺鯴鯔鱝鰈鰏鱨鯷鰮鰃鰓鱷鰍鰒鰉鰁鱂鯿鰠鰲鰭鰨鰥鰩鰟鰜鰳鰾鱈鱉鰻鰵鱅鰼鱖鱔鱗鱒鱯鱤鱧鱣鳥鳩雞鳶鳴鳲鷗鴉鶬鴇鴆鴣鶇鸕鴨鴞鴦鴒鴟鴝鴛鷽鴕鷥鷙鴯鴰鵂鴴鵃鴿鸞鴻鵐鵓鸝鵑鵠鵝鵒鷳鵜鵡鵲鶓鵪鵾鵯鵬鵮鶉鶊鵷鷫鶘鶡鶚鶻鶿鶥鶩鷊鷂鶲鶹鶺鷁鶼鶴鷖鸚鷓鷚鷯鷦鷲鷸鷺鸇鷹鸌鸏鸛鸘鹺麥麩黃黌黶黷黲黽黿鼂鼉鞀鼴齇齊齏齒齔齕齗齟齡齙齠齜齦齬齪齲齷龍龔龕龜志制諮只裏系範鬆沒嚐嚐鬧面準鍾別閒乾盡髒拼衝裡"},Qe=Ft.S,Ze=Ft.T,$e=(e,t)=>{let u,i,r,a,n="",o;for(t?(u=Qe,i=Ze):(u=Ze,i=Qe),r=0;r<e.length;r++){a=e.charAt(r);const s=e.charCodeAt(r);if(!(s>13312&&s<40899||s>63744&&s<64106)){n+=a;continue}o=u.indexOf(a),o!==-1?n+=i.charAt(o):n+=a;}return n},bu={s2t:(e,t)=>{if(t){for(let u=0;u<t.length;u++)e.includes(t[u].src)&&(e=e.replaceAll(t[u].src,t[u].des));return $e(e,!0)}else return $e(e,!0)},t2s:(e,t)=>{if(t){for(let u=0;u<t.length;u++)e.includes(t[u].src)&&(e=e.replaceAll(t[u].src,t[u].des));return $e(e,!1)}else return $e(e,!1)}},X="[artplayer-plugin-bilibiliCCSubTitle]：",wt={src:"臟妳為傢蔔餵眾係姊託迴蹟儘封啟",des:"脏你为家卜喂众系姐托回迹尽对启",more_src:["乾脆","随著","相信著","奇蹟","拚命","採取","製造"],more_des:["干脆","随着","相信着","奇迹","拼命","采取","制造"],_custom_str:[],generteCustomStr(){for(let e=0;e<this.src.length;e++)this._custom_str.push({src:this.src[e],des:this.des[e]});for(let e=0;e<this.more_src.length;e++)this._custom_str.push({src:this.more_src[e],des:this.more_des[e]});},getCustomStr(){return this._custom_str}},ke={reset(){this.unbind();},bind(){Y.art.on("video:timeupdate",this.event,this);},unbind(){Y.clearSubTitle(),Y.art.off("video:timeupdate",this.event);},event(){var r;let e=Y.art.currentTime,t=(r=z.allSubTitleInfo[z.currentSelectIndex])==null?void 0:r.data;if(!t)return;let u=t.find(a=>a.to>=e&&a.from<=e),i=Array.from(Y.$el.$subtitle.querySelectorAll(".art-subtitle-line"));for(let a=0;a<i.length;a++){const n=i[a],{from:o,to:s}=Reflect.get(n,"data-subtitle-line-info");if(s<=e||o>=e)n.remove();else if(u&&u.from===o&&u.to===s)return}if(u){let a=document.createElement("div");a.className="art-subtitle-line",Reflect.set(a,"data-subtitle-line-info",u),a.setAttribute("data-group","0"),a.innerHTML=u.content,Y.$el.$subtitle.appendChild(a);}}},z={allSubTitleInfo:[],currentSelectIndex:-1,reset(){this.allSubTitleInfo=[],this.currentSelectIndex=-1;}},Y={art:null,$key:{plugin_KEY:"plugin-bilibili-cc-subtitle"},$el:{$subtitle:null},async update(e){const t=this,u=`artplayer-bili-cc-subtitle-${e.from}`,i={config:{NAME:"setting-bilibili-cc-subtitle"},reset(){Y.art.setting.option.find(A=>A.name===this.config.NAME)&&Y.art.setting.remove(this.config.NAME);},getDefaultSettingOption:()=>({name:i.config.NAME,width:200,html:"字幕",tooltip:"",icon:`
					<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 48 48">
						<path d="M0 0h48v48H0z" fill="none"/>
						<path fill="#ffffff" d="M40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM8 24h8v4H8v-4zm20 12H8v-4h20v4zm12 0h-8v-4h8v4zm0-8H20v-4h20v4z"/>
					</svg>
					`,selector:[],onSelect:function(b){let A=b;return t.art.storage.set(u,{lan:A.subTitle_lan}),ke.unbind(),z.currentSelectIndex=A.subTitle_index,A.subTitle_index!==-1&&ke.bind(),b.html}}),getSettingOption:()=>{const b=i.getDefaultSettingOption(),A=i.getDefaultSettingSelector();return b.selector.push(A),b.tooltip=A.html,b},getDefaultSettingSelector:()=>({default:!0,html:"无",subTitle_lan:"",subTitle_index:0,subTitle_data:[]})};z.reset(),i.reset(),ke.reset();const r=i.getDefaultSettingSelector();z.currentSelectIndex=0,z.allSubTitleInfo.push({name:r.html,lan:r.subTitle_lan,data:r.subTitle_data}),this.art.setting.add(i.getSettingOption());const a=i.getSettingOption();this.$el.$subtitle=this.art.template.$subtitle;const n={cid:e.cid};if(e.ep_id&&Reflect.set(n,"ep_id",e.ep_id),e.aid)Reflect.set(n,"aid",e.aid);else if(e.bvid)Reflect.set(n,"bvid",e.bvid);else throw new TypeError("avid or bvid must give one");const o=await U.get(`https://${we.web_host}/x/player/v2?${p.toSearchParamsStr(n)}`,{fetch:!0,allowInterceptConfig:!1,responseType:"json",headers:{Host:"www.bilibili.com",Referer:"https://www.bilibili.com"}});if(!o.status){console.error(X+"网络异常，获取视频的字幕信息失败",o);return}console.log(X+"视频的字幕信息",o);const s=p.toJSON(o.data.responseText);if(!Z.isWebApiSuccess(s)){console.error(X+"获取视频的字幕信息失败",s);return}let d=s.data.subtitle.subtitles;if(!d.length){console.warn(X+"获取字幕链接列表为空",s);return}for(let b=0;b<d.length;b++){const A=d[b];if(console.log(X+"请求字幕链接信息："+A.subtitle_url),p.isNull(A.subtitle_url))continue;const w=await U.get(A.subtitle_url,{responseType:"json",allowInterceptConfig:!1,headers:{Referer:"https://www.bilibili.com","User-Agent":p.getRandomPCUA()}});if(w.status){console.log(X+"成功获取字幕信息");const k=p.toJSON(w.data.responseText).body;let F=z.allSubTitleInfo.length,g={name:A.lan_doc,lan:A.lan,data:k};z.allSubTitleInfo.push(g),a.selector.push({html:A.lan_doc,subTitle_index:F,subTitle_lan:A.lan,subTitle_data:k});}else console.error(X+"请求字幕链接信息失败",w);}if(m.getValue("bili-bangumi-generateSimpleChineseSubtitle")){let b=z.allSubTitleInfo.find(A=>A.lan==="zh-Hant"||A.name.includes("繁体"));if(b){let A=[];b.data.forEach(k=>{const{content:F,...g}=k,B=bu.t2s(F,wt.getCustomStr());A.push({content:B,...g});});let w="简体（自动生成）",S=z.allSubTitleInfo.length;z.allSubTitleInfo.push({name:w,lan:"zh-CN-auto",data:A}),a.selector.push({html:w,subTitle_index:S,subTitle_lan:"zh-CN-auto",subTitle_data:A});}}console.log(X+"加载视频CC字幕信息",z.allSubTitleInfo);let f={index:0,html:a.selector[0].html};const E=this.art.storage.get(u);if(E){const b=a.selector.findIndex(A=>A.subTitle_lan===E.lan);if(b!==-1){const A=a.selector[b];console.log(X+"选择字幕："+A.html),f.index=b,f.html=A.html;}else console.warn(X+"没有找到上次选的字幕，使用当前默认无");}for(let b=0;b<a.selector.length;b++)a.selector[b].default=b===f.index;a.tooltip=f.html,z.currentSelectIndex=f.index,z.allSubTitleInfo[z.currentSelectIndex].data==null||z.allSubTitleInfo[z.currentSelectIndex].data.length==0||ke.bind(),this.art.setting.update(a);},clearSubTitle(){this.$el.$subtitle&&(this.$el.$subtitle.innerHTML="");},updateArtPlayer(e){this.art=e;}};function xt(e){return t=>(wt.generteCustomStr(),Y.updateArtPlayer(t),Y.update(e),{name:Y.$key.plugin_KEY,update(u){Y.update(u);}})}const $t=Y.$key.plugin_KEY,kt="[artplayer-plugin-epChoose]：",St=(e,t)=>t==null?e:`第${t}话 ${e}`,Au=e=>{let t="",u=e.EP_LIST.map((i,r)=>(i.isDefault&&(t=i.title),{html:i.title,default:i.isDefault,index:r,callback:i.onSelect}));return {name:te.$key.SETTING_KEY,icon:'<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2295" width="24" height="24"><path d="M983.745542 312.673133a510.516437 510.516437 0 0 0-109.673817-162.745211A510.516437 510.516437 0 0 0 511.999823 0.000353 510.516437 510.516437 0 0 0 149.927922 149.927922 510.516437 510.516437 0 0 0 0.000353 511.999823a510.516437 510.516437 0 0 0 149.927569 362.071902A510.516437 510.516437 0 0 0 511.999823 1023.999294a510.516437 510.516437 0 0 0 362.071902-149.927569A510.516437 510.516437 0 0 0 1023.999294 511.999823c0-69.137584-13.488538-136.121238-40.253752-199.32669z m-62.852348 372.029408a443.779955 443.779955 0 0 1-95.05535 140.994061 441.908508 441.908508 0 0 1-313.73209 129.941935c-59.886283 0-118.042361-11.758333-172.667407-34.851274a443.779955 443.779955 0 0 1-141.029372-95.090661 441.908508 441.908508 0 0 1-129.941934-313.696779c0-59.886283 11.758333-118.042361 34.851274-172.667407a443.779955 443.779955 0 0 1 95.09066-141.029371 441.908508 441.908508 0 0 1 313.696779-129.941935c59.886283 0 118.077671 11.758333 172.667408 34.851274a443.779955 443.779955 0 0 1 141.064682 95.090661 441.908508 441.908508 0 0 1 129.941934 313.696778c0 59.886283-11.793643 118.042361-34.851274 172.667408zM388.413744 706.206519l317.792775-211.86185-317.792775-211.861849v423.723699z" p-id="2296"></path></svg>',html:"选集",selector:u,tooltip:t,onSelect:function(i){return typeof i.callback=="function"&&i.callback(i,i.index),i.html},mounted(i,r){i.setAttribute("data-plugin",te.$key.SETTING_KEY);},playNext(){let i=this.selector.findIndex(r=>r.default);i!==-1&&i+1<this.selector.length-1?(i+=1,this.onSelect(this.selector[i])):console.warn(kt+"当前播放列表已无下一集");}}},Se={$event:{"video:ended":()=>{console.log(kt+"自动连播启用，播放下一集"),te.$data.art.setting.find(te.$key.SETTING_KEY).playNext();}},bind(e){Object.keys(this.$event).forEach(t=>{e.on(t,this.$event[t]);});},unbind(e){Object.keys(this.$event).forEach(t=>{e.off(t,this.$event[t]);});}},te={$flag:{isInitCSS:!1},$key:{SETTING_KEY:"setting-ep-choose",PLUGIN_KEY:"plugin-ep-choose"},$data:{art:null},resetEnv(){Object.keys(this.$data).forEach(e=>{Reflect.set(this.$data,e,null);});},init(e,t){this.resetEnv(),this.$data.art=e,Se.unbind(e),t.automaticBroadcast&&Se.bind(e),this.$flag.isInitCSS||(this.$flag.isInitCSS=!0,N(`
			.art-setting-panel[data-plugin="${te.$key.SETTING_KEY}"] .art-setting-item .art-setting-item-left-text{
				max-width: 210px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			`)),this.update(t);},update(e){if(Se.unbind(this.$data.art),e.EP_LIST==null||e.EP_LIST.length===0)return;let t=Au(e);this.$data.art.setting.find(this.$key.SETTING_KEY)?this.$data.art.setting.update(t):this.$data.art.setting.add(t),e.automaticBroadcast&&Se.bind(this.$data.art);}},_t=e=>t=>(te.init(t,e),{name:te.$key.PLUGIN_KEY,update(u){te.update(u);}}),Tt=te.$key.PLUGIN_KEY,vu={loading:'<img src="data:image/gif;base64,R0lGODlhWgBaALMOAHR0dAICAnd3dwEBAXh4eAMDAwkJCQ0NDQsLCxwcHA4ODggICHl5eQAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiYWE1ODg5ZS1jN2RmLTRmZmUtYjkzOS0wMmVkMTZhNmNjZDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0I2ODI2NjA1NzhGMTFFNkEyMEVDNzhEOUY1RkQxRjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0I2ODI2NUY1NzhGMTFFNkEyMEVDNzhEOUY1RkQxRjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjljYjgzNjY2LWYxYWUtNGMyZi1hMGEwLThhODJmYjIxM2U0MyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmU1NDE3YzFmLTllODAtMTE3OS04NjdiLWUyN2Y3M2VkMTZkOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAkKAA4ALAAAAABaAFoAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsz3Ta3HW+3bjuV7wbg/H7BYXEYu7YGCaVjuDr6Hwqjy2qEzphNlTaIZfi/ZqY2zHZW0KL1RVGeRS2wiXD+ad+x8jZHXx9GX9MO2GDG3mGGG52iX5ojUFVRWWXmJmam1IknJ+goXoioqWmnHSnqquUpDxVsLGys7S1tk6Uj4dIt72+v7K5IcKQF8R7r1asPC7HHs7L0Z3Ogclr0tES1BzH2NiLSMPWUcnAsd7gTboaxLnm77e527vq2uMm8FXy98/j8z77woFoxw9Fp2pI/mUgKBDMQXrp3iATqNBeD3rMIBaqN9BfwWsZ/7kBmpTwo0aLHIF4kchupIWAKftRLHgpDYeND7skq2jMY0NyjlgqwnlRZ8mfCDlCqyO0A1E7MJueBBrTnc0RG1lGXbfQZ0w8sFLEAhmRK0khKJtWConv6lZXaKlKNWpmyk6TJxVqoWvw7iu49fQyLOrJWitx4QTzQhnX4sTAeLsmjuyO8cWcLScjFan5K9kkl9KapSuG50vDlFtlkjtaNGvEkDeDXIlprsrOts+WjkzVUZmrkmN7zsu7dzkiK3OTRl78NO7WQenK7vkc9u7pt9UJrZz0+vDMwpVPGGuBPOfwrbO/8SbNu3j1oNkvc5/+s3T5oraYhn8f/6e1zfFHQZY+BPbiWkdIFajgLMs9ZgoX+1nmn0upYOfchPK95iCG+L034HHpAAAAh6V4OOAsQYh4hAAC3EJAMO3VV55WmLBYiwAv+pKiirzoE+CGDbAoZFu4eCGiiOdYCBgPQrK4wiVHXlDJk0w4mUUZAGgAXApNDtmMkVn+0KWVLhxppojFsHBmlGm26eabcMYp55x01mnnnXjSEAEAIfkECQoADgAsAAAAAFoAWgAABP/QyUmrvTjrzbv/YCiOZGmeaKqubOu+cCxbTT3fX23jfKbXDEZvSPk1gkSiMShM8pZMZ1HngjalEiPLip1qUdZr12Hcmbhj73eETlMY5QbpxxS7JfCyqH2v5NccfH1+cR6CgxVxchqHiIR6GGGOG38/kXRIkxyVR2SKn6CFbKGkpaangDmoq6ytdh2tsbKhmaqzpHW5uru8lbWGOr3Cw8TFvJghmMbLUVvBrxvImmq/sM+Jt9mWE9K2R2La4VRZ1yDdnuLaTefWQFfp4kjsgeXo38z4xMjz0fXK+QB37asHzB03gkqu8WPkD+GQgQbNNYxIY1zBRf0MLvQx8duFVBn/zXDU6DBkrXllqo3cdokkxYsnEaZUudJiRZceJVI8N5NmTZsHcfpcGXOnpBCcRJITCo2h0afuhlISFdTjxpY57RW91/QDJ3AKSzrNyi5XCl/vwr5sB6RqtToZPZhdalXs2LRrvXwEqgEuXXl2ia4Ty7Jq1qX0mO4pt7DbTDWJ6+aNnKkx48duu2oVchVrZcKXqW6+yzmw58GTR4eie/im5NZsP6emhUsqRNiUUeO2F4cJqGanRycLvfs3kqSmb0sNLnxvzyvIlyvXzPyqMD9oqU9fHLEzLwy7TJZOTfovdRF+y3d2ThZeNsDkBRt272r87vLz6Z+Kst71L/2x8GcapHsqBWTgMOZxB9uBDIbXnDcAAricaxFKeB42FUY4IYbpHJCAAgYYsEABoQRgYgA6nIiicaNw9VUQ/zCoIhMz6tKfBcco84MAAjTIQI0/npjjfZtspQiPKdTogJI4AgcGKDwKoIKQKprok5MpCFBGlEgmWSWTPPBoBJctBCkklmFyKaULZgYwVxJqwnDmhtN4hWadJtyJ55589unnn4AGKuigG0QAACH5BAkKAA4ALAAAAABaAFoAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsW009319t43ym1wxGb0j5NYJEojEoTPKWTOfzF5VOfi1o0yoxNlTaLdf7PXmr3CvZpE1bGORyKOx+x+Udev0CX3vaexhBcRyAgRmDXhp6U3ghfVQ+VEhDd5aXmJmajjmbnp+gOiShpKWWlCCmqqtHYn86TLGys7S1tre3kyKTuL2+v7mwrnnChxi6c8VqrFnKqc4OrNJ4yM9AYtPSy627xaLZzNHQr9fiNsC22ULVneWR6PC/k+zk3PQk8bHz48Tu/ErC7hXy9q9SwIKLCJZbgaVeooXW7CHsImpgww37ILaTqLGIIotG/zAe7NiPI7cKd1BJ8nMh48mISNidUomIUMuRLzfGdJYyloeHsG5eEyjSH8Qzsx5Byklx6MRjCl/y8olPFg2cNEvu7Jg0BVWPTkmC3MrUZ8VlYLAOG7sO4cWmnEa4zMrWHFOwJ5egmLu2qEm6dvMS1bkUcEKjd+FWOYNyh9bCfQ//7csr8Fm7hAevnAx14Z1thvECDd2Zs1DBmkgrhtwNMWBFS2ZGFs06mevIsnvOBl0bZluxcJEKWfqUt+bSZEP3nDBa9erjp5PvBtrKFS2HvQnbVW2LDxq20K+6BqeqeWuT5Mtnxx48/SdZ4RtDJO4+tb7i4nPm2/+L9/ms/AVYi3Z/tiVmTHx41Vefc/IpuOBupzmYHoMJZoPAAQ5SWEEtwkCGDgHBXOMhEwhuSEuHU+FCAIi48JIiJN/ttVxaQBjCXIxmKPKVjHHgiGOOYUAYERQGlbhRZUNc98KLSXT1woDGtLBjlFRWaeWVWGap5ZZcdumlChEAACH5BAkKAA4ALAAAAABaAFoAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsW009319t43ym1wxGbzj5AYXEoTGITOKWTOfzx2xKHb8W1Ho1NlTba8X7PW25YnJ55I2KLQw1mxp8Y+LyHL1uv6vXGmd9GkF5gXuDHIVkPoiJHYtGF4JEf5aXmJmZJZqdnp+GIaCjpJloHKWpqlCiOlWvsLGys7S1THStR7a7vL2xuCDAj5Oup4dHwxjCHsvJRcW5DXxYqzouzajQ1NXc1hLYG8Dd4zvgx9JI5ONC5o3I2+i+sOSR6NF8e/L6tXTtytr+POyr0k+bnncBbxR8d9AevGkpsjArlnAMQIPEdmTzthFdRQri/zA+k9SBUTiKIjviE/kHojuS/458HOlwCc02Ll9KzOgx5UmGVL6pefUBjxee9XL+dPiQ3Rk3RY3upJnU2MtpuPJBFSEViEWZPs9hNQhLhVSIC5lOBErWDccSZal2tRqTqbmpQgFB2prV1b0mdzHCBKlRrFOGJQ0GRjw4r966dWY2lQvZCivKhic3HIuYMGObjtUiPSx6KWevoz3vdHSVtNLWqo0JGwovnmnXdGkI9smo09bKmteqBafqd2rJyxYP7Vost+PIYYFjvsBcF5kqiZEh3925wq3mSGQJh949881UEmJtxh2Mu7pU5EubD/1+VPzX0unX10R0e2fw+nDTX5l0qXk30IG0xOacgtThtxeCaBGoW3nO+LffhRTWheF+Dk64IYcLqjZOACQGUEABJA6g4orVdNjgPDoAIKNWENYDwA8y/pIhITA2cCNONRIUI44A2MLCj17IyIIRSCp5h4sgIBmjjAAsqYaTPTBJZZUrXInlEFt+CQYZVDoRZgwzTunMCmGWuWYLW74p55x01mnnnXjmqecNEQAAIfkEBQoADgAsAAAAAFoAWgAABP/QyUmrvTjrzbv/YCiOZGmeaKqubOu+cCzP9Nrcdb7duO5XvBuD8fsFhcSi7jhMKh3BF7P5lBxb02HVelUdG9Qtt3vKiinfRjnYdJ6h31LW/XYw0qJvuE65x0FmfBdpah1zghh+ZBmHiIl4jIGOGYo8kTx7NYSbnJ2en5t5oKOkpaEhpqmqo1ofq6+wenQ7mG22t7i5uru8TWyzGr+9w8TFub+AtZODyq7NY7AwyM5IaLHXURPTHttw2NjW1dRgSd/m5NCt3M3Cxm3nrd0c0+3u9rr0z4bs+iP37/zErRMnz0hAdOPi9TNIcGGwg+qY9dg38WFDgRQRFtSWLWNFiRr/HV4KiTGcSCCEMOQrSesiQpO1gIH8Y1IhS4skX0KLKfNCpUXeckacB9FNmjYhhhytWe4kSJsvZWUC4evZSp1EXaqb09MDLo5au1pgks5JOxZIy6pNJmTtBFuXUCCbgkqZPKSWUH4UVU1Y3b4nO4IFY2JuzL/oNroNOpRtYqcq7QbWRzZcRi2KcWJ2ygZmIWiXiWQeufnm4M8pFz8VDXk1466lVI+VbFoz69o7SzXW+xh3ZMC+g07ZNHU2cKyhX3f4aYtQcd6lkWftLd1nrtzVmSpHHH03pbRv/bak7t228HOvuot1jR6ber7U2696z72p/Pm3s5N28q9/se2OReTffYC7AJjQemeMZpx8MSjI230Q6rdghPeV9xuF8lmYyC48kcMLhhJuiIsw9RDo3IitOQbJBsawwQMAANxymA2cwEjjFzZapyFiL8Lo4404iojFET4WCSSRPgRRJABSEJKjDksyGUOUP/pg5AxUPrnMllx26eWXYIYp5phkjhkBADs=">',state:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 80" width="100" height="100"><defs><path id="pid-64-svgo-a" d="M0 0h80v80H0z"/><path d="M52.546 8.014a3.998 3.998 0 014.222 3.077c.104.446.093.808.039 1.138a2.74 2.74 0 01-.312.881c-.073.132-.16.254-.246.376l-.257.366-.521.73c-.7.969-1.415 1.926-2.154 2.866l-.015.02a240.945 240.945 0 015.986.341l1.643.123.822.066.41.034.206.018.103.008.115.012c1.266.116 2.516.45 3.677.975a11.663 11.663 0 013.166 2.114c.931.87 1.719 1.895 2.321 3.022a11.595 11.595 0 011.224 3.613c.03.157.046.316.068.474l.015.119.013.112.022.206.085.822.159 1.646c.1 1.098.19 2.198.27 3.298.315 4.4.463 8.829.36 13.255a166.489 166.489 0 01-.843 13.213c-.012.127-.034.297-.053.454a7.589 7.589 0 01-.072.475l-.04.237-.05.236a11.762 11.762 0 01-.74 2.287 11.755 11.755 0 01-5.118 5.57 11.705 11.705 0 01-3.623 1.263c-.158.024-.316.052-.475.072l-.477.053-.821.071-1.644.134c-1.096.086-2.192.16-3.288.23a260.08 260.08 0 01-6.578.325c-8.772.324-17.546.22-26.313-.302a242.458 242.458 0 01-3.287-.22l-1.643-.129-.822-.069-.41-.035-.206-.018c-.068-.006-.133-.01-.218-.02a11.566 11.566 0 01-3.7-.992 11.732 11.732 0 01-5.497-5.178 11.73 11.73 0 01-1.215-3.627c-.024-.158-.051-.316-.067-.475l-.026-.238-.013-.119-.01-.103-.07-.823-.132-1.648a190.637 190.637 0 01-.22-3.298c-.256-4.399-.358-8.817-.258-13.233.099-4.412.372-8.811.788-13.197a11.65 11.65 0 013.039-6.835 11.585 11.585 0 016.572-3.563c.157-.023.312-.051.47-.07l.47-.05.82-.07 1.643-.13a228.493 228.493 0 016.647-.405l-.041-.05a88.145 88.145 0 01-2.154-2.867l-.52-.73-.258-.366c-.086-.122-.173-.244-.246-.376a2.74 2.74 0 01-.312-.881 2.808 2.808 0 01.04-1.138 3.998 3.998 0 014.22-3.077 2.8 2.8 0 011.093.313c.294.155.538.347.742.568.102.11.19.23.28.35l.27.359.532.72a88.059 88.059 0 012.06 2.936 73.036 73.036 0 011.929 3.03c.187.313.373.628.556.945 2.724-.047 5.447-.056 8.17-.038.748.006 1.496.015 2.244.026.18-.313.364-.624.549-.934a73.281 73.281 0 011.93-3.03 88.737 88.737 0 012.059-2.935l.533-.72.268-.359c.09-.12.179-.24.281-.35a2.8 2.8 0 011.834-.881zM30.13 34.631a4 4 0 00-.418 1.42 91.157 91.157 0 00-.446 9.128c0 2.828.121 5.656.364 8.483l.11 1.212a4 4 0 005.858 3.143c2.82-1.498 5.55-3.033 8.193-4.606a177.41 177.41 0 005.896-3.666l1.434-.942a4 4 0 00.047-6.632 137.703 137.703 0 00-7.377-4.708 146.88 146.88 0 00-6.879-3.849l-1.4-.725a4 4 0 00-5.382 1.742z" id="pid-64-svgo-d"/><filter x="-15.4%" y="-16.3%" width="130.9%" height="132.5%" filterUnits="objectBoundingBox" id="pid-64-svgo-c"><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feOffset in="SourceAlpha" result="shadowOffsetOuter2"/><feGaussianBlur stdDeviation="3.5" in="shadowOffsetOuter2" result="shadowBlurOuter2"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowBlurOuter2" result="shadowMatrixOuter2"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="shadowMatrixOuter2"/></feMerge></filter></defs><g fill="none" fill-rule="evenodd" opacity=".8"><mask id="pid-64-svgo-b" fill="#fff"><use xlink:href="#pid-64-svgo-a"/></mask><g mask="url(#pid-64-svgo-b)"><use fill="#000" filter="url(#pid-64-svgo-c)" xlink:href="#pid-64-svgo-d"/><use fill="#FFF" xlink:href="#pid-64-svgo-d"/></g></g></svg>',indicator:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="16" height="16">
        <path d="M16.118 3.667h.382a3.667 3.667 0 013.667 3.667v7.333a3.667 3.667 0 01-3.667 3.667h-11a3.667 3.667 0 01-3.667-3.667V7.333A3.667 3.667 0 015.5 3.666h.382L4.95 2.053a1.1 1.1 0 011.906-1.1l1.567 2.714h5.156L15.146.953a1.101 1.101 0 011.906 1.1l-.934 1.614z" fill="#333"></path>
        <path d="M5.561 5.194h10.878a2.2 2.2 0 012.2 2.2v7.211a2.2 2.2 0 01-2.2 2.2H5.561a2.2 2.2 0 01-2.2-2.2V7.394a2.2 2.2 0 012.2-2.2z" fill="#fff"></path>
        <path d="M6.967 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1zM15.033 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1z" fill="#333"></path>
    </svg>
        `,fullscreenWebOn:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="28" height="28" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_172"><rect width="88" height="88" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_172)"><g transform="matrix(1,0,0,1,44,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-14,-20 C-14,-20 -26,-20 -26,-20 C-27.049999237060547,-20 -27.920000076293945,-19.18000030517578 -27.989999771118164,-18.149999618530273 C-27.989999771118164,-18.149999618530273 -28,-18 -28,-18 C-28,-18 -28,-6 -28,-6 C-28,-4.949999809265137 -27.18000030517578,-4.079999923706055 -26.149999618530273,-4.010000228881836 C-26.149999618530273,-4.010000228881836 -26,-4 -26,-4 C-26,-4 -22,-4 -22,-4 C-20.950000762939453,-4 -20.079999923706055,-4.820000171661377 -20.010000228881836,-5.849999904632568 C-20.010000228881836,-5.849999904632568 -20,-6 -20,-6 C-20,-6 -20,-12 -20,-12 C-20,-12 -14,-12 -14,-12 C-12.949999809265137,-12 -12.079999923706055,-12.819999694824219 -12.010000228881836,-13.850000381469727 C-12.010000228881836,-13.850000381469727 -12,-14 -12,-14 C-12,-14 -12,-18 -12,-18 C-12,-19.049999237060547 -12.819999694824219,-19.920000076293945 -13.850000381469727,-19.989999771118164 C-13.850000381469727,-19.989999771118164 -14,-20 -14,-20z M26,-20 C26,-20 14,-20 14,-20 C12.949999809265137,-20 12.079999923706055,-19.18000030517578 12.010000228881836,-18.149999618530273 C12.010000228881836,-18.149999618530273 12,-18 12,-18 C12,-18 12,-14 12,-14 C12,-12.949999809265137 12.819999694824219,-12.079999923706055 13.850000381469727,-12.010000228881836 C13.850000381469727,-12.010000228881836 14,-12 14,-12 C14,-12 20,-12 20,-12 C20,-12 20,-6 20,-6 C20,-4.949999809265137 20.81999969482422,-4.079999923706055 21.850000381469727,-4.010000228881836 C21.850000381469727,-4.010000228881836 22,-4 22,-4 C22,-4 26,-4 26,-4 C27.049999237060547,-4 27.920000076293945,-4.820000171661377 27.989999771118164,-5.849999904632568 C27.989999771118164,-5.849999904632568 28,-6 28,-6 C28,-6 28,-18 28,-18 C28,-19.049999237060547 27.18000030517578,-19.920000076293945 26.149999618530273,-19.989999771118164 C26.149999618530273,-19.989999771118164 26,-20 26,-20z M-22,4 C-22,4 -26,4 -26,4 C-27.049999237060547,4 -27.920000076293945,4.820000171661377 -27.989999771118164,5.849999904632568 C-27.989999771118164,5.849999904632568 -28,6 -28,6 C-28,6 -28,18 -28,18 C-28,19.049999237060547 -27.18000030517578,19.920000076293945 -26.149999618530273,19.989999771118164 C-26.149999618530273,19.989999771118164 -26,20 -26,20 C-26,20 -14,20 -14,20 C-12.949999809265137,20 -12.079999923706055,19.18000030517578 -12.010000228881836,18.149999618530273 C-12.010000228881836,18.149999618530273 -12,18 -12,18 C-12,18 -12,14 -12,14 C-12,12.949999809265137 -12.819999694824219,12.079999923706055 -13.850000381469727,12.010000228881836 C-13.850000381469727,12.010000228881836 -14,12 -14,12 C-14,12 -20,12 -20,12 C-20,12 -20,6 -20,6 C-20,4.949999809265137 -20.81999969482422,4.079999923706055 -21.850000381469727,4.010000228881836 C-21.850000381469727,4.010000228881836 -22,4 -22,4z M26,4 C26,4 22,4 22,4 C20.950000762939453,4 20.079999923706055,4.820000171661377 20.010000228881836,5.849999904632568 C20.010000228881836,5.849999904632568 20,6 20,6 C20,6 20,12 20,12 C20,12 14,12 14,12 C12.949999809265137,12 12.079999923706055,12.819999694824219 12.010000228881836,13.850000381469727 C12.010000228881836,13.850000381469727 12,14 12,14 C12,14 12,18 12,18 C12,19.049999237060547 12.819999694824219,19.920000076293945 13.850000381469727,19.989999771118164 C13.850000381469727,19.989999771118164 14,20 14,20 C14,20 26,20 26,20 C27.049999237060547,20 27.920000076293945,19.18000030517578 27.989999771118164,18.149999618530273 C27.989999771118164,18.149999618530273 28,18 28,18 C28,18 28,6 28,6 C28,4.949999809265137 27.18000030517578,4.079999923706055 26.149999618530273,4.010000228881836 C26.149999618530273,4.010000228881836 26,4 26,4z M28,-28 C32.41999816894531,-28 36,-24.420000076293945 36,-20 C36,-20 36,20 36,20 C36,24.420000076293945 32.41999816894531,28 28,28 C28,28 -28,28 -28,28 C-32.41999816894531,28 -36,24.420000076293945 -36,20 C-36,20 -36,-20 -36,-20 C-36,-24.420000076293945 -32.41999816894531,-28 -28,-28 C-28,-28 28,-28 28,-28z"></path></g></g></g></svg>',fullscreenWebOff:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="28" height="28" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_177"><rect width="88" height="88" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_177)"><g transform="matrix(1,0,0,1,44,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-14,-20 C-14,-20 -18,-20 -18,-20 C-19.049999237060547,-20 -19.920000076293945,-19.18000030517578 -19.989999771118164,-18.149999618530273 C-19.989999771118164,-18.149999618530273 -20,-18 -20,-18 C-20,-18 -20,-12 -20,-12 C-20,-12 -26,-12 -26,-12 C-27.049999237060547,-12 -27.920000076293945,-11.180000305175781 -27.989999771118164,-10.149999618530273 C-27.989999771118164,-10.149999618530273 -28,-10 -28,-10 C-28,-10 -28,-6 -28,-6 C-28,-4.949999809265137 -27.18000030517578,-4.079999923706055 -26.149999618530273,-4.010000228881836 C-26.149999618530273,-4.010000228881836 -26,-4 -26,-4 C-26,-4 -14,-4 -14,-4 C-12.949999809265137,-4 -12.079999923706055,-4.820000171661377 -12.010000228881836,-5.849999904632568 C-12.010000228881836,-5.849999904632568 -12,-6 -12,-6 C-12,-6 -12,-18 -12,-18 C-12,-19.049999237060547 -12.819999694824219,-19.920000076293945 -13.850000381469727,-19.989999771118164 C-13.850000381469727,-19.989999771118164 -14,-20 -14,-20z M18,-20 C18,-20 14,-20 14,-20 C12.949999809265137,-20 12.079999923706055,-19.18000030517578 12.010000228881836,-18.149999618530273 C12.010000228881836,-18.149999618530273 12,-18 12,-18 C12,-18 12,-6 12,-6 C12,-4.949999809265137 12.819999694824219,-4.079999923706055 13.850000381469727,-4.010000228881836 C13.850000381469727,-4.010000228881836 14,-4 14,-4 C14,-4 26,-4 26,-4 C27.049999237060547,-4 27.920000076293945,-4.820000171661377 27.989999771118164,-5.849999904632568 C27.989999771118164,-5.849999904632568 28,-6 28,-6 C28,-6 28,-10 28,-10 C28,-11.050000190734863 27.18000030517578,-11.920000076293945 26.149999618530273,-11.989999771118164 C26.149999618530273,-11.989999771118164 26,-12 26,-12 C26,-12 20,-12 20,-12 C20,-12 20,-18 20,-18 C20,-19.049999237060547 19.18000030517578,-19.920000076293945 18.149999618530273,-19.989999771118164 C18.149999618530273,-19.989999771118164 18,-20 18,-20z M-14,4 C-14,4 -26,4 -26,4 C-27.049999237060547,4 -27.920000076293945,4.820000171661377 -27.989999771118164,5.849999904632568 C-27.989999771118164,5.849999904632568 -28,6 -28,6 C-28,6 -28,10 -28,10 C-28,11.050000190734863 -27.18000030517578,11.920000076293945 -26.149999618530273,11.989999771118164 C-26.149999618530273,11.989999771118164 -26,12 -26,12 C-26,12 -20,12 -20,12 C-20,12 -20,18 -20,18 C-20,19.049999237060547 -19.18000030517578,19.920000076293945 -18.149999618530273,19.989999771118164 C-18.149999618530273,19.989999771118164 -18,20 -18,20 C-18,20 -14,20 -14,20 C-12.949999809265137,20 -12.079999923706055,19.18000030517578 -12.010000228881836,18.149999618530273 C-12.010000228881836,18.149999618530273 -12,18 -12,18 C-12,18 -12,6 -12,6 C-12,4.949999809265137 -12.819999694824219,4.079999923706055 -13.850000381469727,4.010000228881836 C-13.850000381469727,4.010000228881836 -14,4 -14,4z M26,4 C26,4 14,4 14,4 C12.949999809265137,4 12.079999923706055,4.820000171661377 12.010000228881836,5.849999904632568 C12.010000228881836,5.849999904632568 12,6 12,6 C12,6 12,18 12,18 C12,19.049999237060547 12.819999694824219,19.920000076293945 13.850000381469727,19.989999771118164 C13.850000381469727,19.989999771118164 14,20 14,20 C14,20 18,20 18,20 C19.049999237060547,20 19.920000076293945,19.18000030517578 19.989999771118164,18.149999618530273 C19.989999771118164,18.149999618530273 20,18 20,18 C20,18 20,12 20,12 C20,12 26,12 26,12 C27.049999237060547,12 27.920000076293945,11.180000305175781 27.989999771118164,10.149999618530273 C27.989999771118164,10.149999618530273 28,10 28,10 C28,10 28,6 28,6 C28,4.949999809265137 27.18000030517578,4.079999923706055 26.149999618530273,4.010000228881836 C26.149999618530273,4.010000228881836 26,4 26,4z M28,-28 C32.41999816894531,-28 36,-24.420000076293945 36,-20 C36,-20 36,20 36,20 C36,24.420000076293945 32.41999816894531,28 28,28 C28,28 -28,28 -28,28 C-32.41999816894531,28 -36,24.420000076293945 -36,20 C-36,20 -36,-20 -36,-20 C-36,-24.420000076293945 -32.41999816894531,-28 -28,-28 C-28,-28 28,-28 28,-28z"></path></g></g></g></svg>'},Vt=()=>({container:"",url:"",volume:1,isLive:!1,muted:!1,autoplay:!1,pip:!1,autoMini:!1,screenshot:!1,setting:!0,loop:!1,flip:!0,playbackRate:!0,autoSize:!1,aspectRatio:!1,fullscreen:!0,fullscreenWeb:!0,subtitleOffset:!0,miniProgressBar:!0,mutex:!1,backdrop:!0,playsInline:!1,autoPlayback:!0,airplay:!0,lock:!0,fastForward:!0,theme:y.theme,lang:navigator.language.toLowerCase(),moreVideoAttr:{crossOrigin:"anonymous"},icons:vu}),Xe="[artplayer-plugin-quality]：",ce="artplayer-plugin-quality",et={$data:{art:null},init(e,t){Reflect.set(this.$data,"art",null),this.$data.art=e,this.update(t);},update(e){const t=this;if(e.qualityList.length){let u=e.qualityList[0];const i=`artplayer-quality-${e.from}`,r=this.$data.art.storage.get(i);let a={index:0,html:u.html,url:u.url};if(r){const s=e.qualityList.findIndex(d=>d.quality===r.quality);if(s!==-1){const d=e.qualityList[s];a.index=s,a.url=d.url,a.html=d.html;}else console.warn(Xe+"没有找到上次选的画质，使用当前默认第一个画质");}let n=e.qualityList.map((s,d)=>({default:d===a.index,html:s.html,url:s.url,quality:s.quality}));const o={name:ce,index:10,position:"right",html:a.html,selector:n,onSelect:function(s){let d=s;return console.log(Xe+"切换画质",d),t.$data.art.switchQuality(d.url),t.$data.art.storage.set(i,{quality:d.quality}),s.html}};Reflect.has(this.$data.art.controls,ce)?this.$data.art.controls.update(o):this.$data.art.controls.add(o),this.$data.art.url=a.url;}else Reflect.has(this.$data.art.controls,ce)&&this.$data.art.controls.remove(ce);}},Nt=e=>t=>(et.init(t,e),{name:ce,update(u){et.update(u);}}),Ve={$data:{art:null},$key:{plugin_KEY:"artplayer-plugin-toast"},$flag:{isInitCSS:!1},$config:{originToast:"art-layer-auto-playback",hideClassName:"art-toast-hide-opacity",prefix:"mplayer-toast-gm"},$el:{get $originPlayer(){return document.querySelector(".art-video-player .art-layers")}},toast(e){typeof e=="string"&&(e={text:e}),this.initCSS();let t=e.parent??this.$el.$originPlayer;if(!t)throw new TypeError("toast parent is null");this.mutationMPlayerOriginToast(t);let u=h.createElement("div",{"data-from":"gm"});if(h.addClass(u,this.$config.prefix),e.showCloseBtn){let n=h.createElement("div",{className:this.$config.prefix+"-close",innerHTML:`
                    <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="m571.733 512 268.8-268.8c17.067-17.067 17.067-42.667 0-59.733-17.066-17.067-42.666-17.067-59.733 0L512 452.267l-268.8-268.8c-17.067-17.067-42.667-17.067-59.733 0-17.067 17.066-17.067 42.666 0 59.733l268.8 268.8-268.8 268.8c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.534 19.2 12.8 29.866 12.8s21.334-4.266 29.867-12.8l268.8-268.8 268.8 268.8c8.533 8.534 19.2 12.8 29.867 12.8s21.333-4.266 29.866-12.8c17.067-17.066 17.067-42.666 0-59.733L571.733 512z"></path></svg>
                `});u.appendChild(n),h.on(n,"click",o=>{p.preventEvent(o),this.closeToast(u);},{capture:!0});}let i=h.createElement("span",{className:this.$config.prefix+"-text",innerText:e.text});if(u.appendChild(i),typeof e.timeText=="string"&&e.timeText.trim()!=""){let n=h.createElement("span",{className:this.$config.prefix+"-time",innerText:e.timeText});u.appendChild(n);}if(typeof e.jumpText=="string"&&e.jumpText.trim()!=""){let n=h.createElement("span",{className:this.$config.prefix+"-jump",innerText:e.jumpText});u.appendChild(n),h.on(n,"click",o=>{typeof e.jumpClickCallback=="function"&&(p.preventEvent(o),e.jumpClickCallback(o));},{capture:!0});}this.setTransitionendEvent(u,e);let r=typeof e.timeout=="number"&&!isNaN(e.timeout)?e.timeout:3500;t.appendChild(u);let a=setTimeout(()=>{this.closeToast(u);},r);return {$toast:u,timeoutId:a,close:()=>{clearTimeout(a),this.closeToast(u);}}},initCSS(){this.$flag.isInitCSS||(this.$flag.isInitCSS=!0,N(`
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
        `));},mutationMPlayerOriginToast(e){let t=this.$el.$originPlayer;t&&(t.hasAttribute("data-mutation")||(l.success("添加观察器，动态更新toast的位置"),t.setAttribute("data-mutation","gm"),p.mutationObserver(t,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{this.updatePageToastBottom();}})));},updatePageToastBottom(){let e=Array.from(document.querySelectorAll(`.${this.$config.prefix}`)).concat(Array.from(document.querySelectorAll(".".concat(this.$config.originToast))));e.length&&(e.length-1,e.forEach((t,u)=>{t.setAttribute("data-transition","move"),t.style.bottom=`calc( calc( var(--art-control-height) + var(--art-bottom-gap) ) * ${u+1} + 10px)`;}));},closeToast(e){e.classList.add(this.$config.hideClassName);},getTransitionendEventNameList(){return ["webkitTransitionEnd","mozTransitionEnd","MSTransitionEnd","otransitionend","transitionend"]},setTransitionendEvent(e,t){let u=this,i=this.getTransitionendEventNameList();h.on(e,i,function(r){let a=e.getAttribute("data-transition");if(e.classList.contains(u.$config.hideClassName)){typeof t=="object"&&typeof(t==null?void 0:t.closeCallback)=="function"&&t.closeCallback(),e.remove();return}if(a==="move"){e.removeAttribute("data-transition");return}},{capture:!0});}},Rt=e=>t=>(Ve.$data.art=t,{name:Ve.$key.plugin_KEY,toast(...u){return Ve.toast(...u)}}),Eu=Ve.$key.plugin_KEY,tt=e=>{let t=e.epList||[];if(t.length===1){let u=t[0];return u.pages.map(i=>({isDefault:i.cid===e.cid,title:i.part,aid:e.aid,bvid:e.bvid,cid:i.cid,onSelect(r,a){u.cid=i.cid,de.updateArtPlayerVideoInfo({aid:e.aid,bvid:e.bvid,cid:i.cid,pic:i.first_frame||"",title:i.part,epList:e.epList||[]},!0);}}))}else return t.map(u=>({isDefault:u.aid===e.aid&&u.cid===e.cid,title:St(u.title),aid:u.aid,bvid:u.bvid,cid:u.cid,onSelect(i,r){de.updateArtPlayerVideoInfo({aid:u.aid,bvid:u.bvid,cid:u.cid,pic:u.arc.pic,title:u.title,epList:e.epList||[]},!0);}}))},Ae={$data:{art:null,currentOption:null},resetEnv(e){e&&Reflect.set(this.$data,"art",null),Reflect.set(this.$data,"currentOption",null);},async init(e){this.resetEnv(!0),this.$data.currentOption=e;const t="artplayer-video-danmaku-option",u=new vt(t),i=u.getLocalArtDanmakuOption(),r={...Vt(),container:e.container,poster:e.poster,settings:[{name:"video-playback-codeid",html:"播放策略",tooltip:"默认",icon:'<svg t="1727413004405" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3183" width="24" height="24"><path d="M170.666667 256h682.666666c23.466667 0 42.666667 19.2 42.666667 42.666667v170.666666h85.333333V256c0-46.933333-38.4-85.333333-85.333333-85.333333H128c-46.933333 0-85.333333 38.4-85.333333 85.333333v512c0 46.933333 38.4 85.333333 85.333333 85.333333h384v-85.333333H170.666667c-23.466667 0-42.666667-19.2-42.666667-42.666667V298.666667c0-23.466667 19.2-42.666667 42.666667-42.666667z" p-id="3184"></path><path d="M640 512L384 341.333333v341.333334zM968.96 786.346667c1.28-12.373333 1.706667-24.746667 0.426667-36.693334l45.653333-36.266666c4.266667-3.413333 5.12-8.96 2.56-13.653334l-43.946667-76.373333c-2.56-4.693333-8.106667-6.4-13.226666-4.693333l-54.613334 21.333333a146.773333 146.773333 0 0 0-32-17.92l-8.533333-58.026667a10.624 10.624 0 0 0-10.666667-9.386666h-88.32c-5.12 0-9.813333 3.84-10.666666 8.96l-8.533334 58.026666c-11.093333 4.693333-21.76 11.093333-31.573333 17.92l-54.613333-21.333333c-5.12-2.133333-10.666667 0-13.226667 4.693333l-43.946667 76.373334c-2.56 4.693333-1.706667 10.24 2.56 13.653333l45.653334 36.693333c-1.28 12.373333-1.706667 24.746667-0.426667 36.693334l-45.653333 36.266666c-4.266667 3.413333-5.12 8.96-2.56 13.653334l43.946666 76.373333c2.56 4.693333 8.106667 6.4 13.226667 4.693333l54.186667-21.333333c9.813333 7.253333 20.48 13.226667 32 17.92l8.533333 58.026667c0.853333 5.12 5.12 8.96 10.666667 8.96h88.32c5.12 0 9.813333-3.84 10.666666-8.96l8.533334-58.026667c11.093333-4.693333 21.76-11.093333 31.573333-17.92l54.613333 21.333333c5.12 2.133333 10.666667 0 13.226667-4.693333l43.946667-76.373333c2.56-4.693333 1.706667-10.24-2.56-13.653334l-45.226667-36.266666zM810.666667 832c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64z" p-id="3185"></path></svg>',selector:[{default:!0,html:"默认",value:j.AV1},{html:"AV1",value:j.AV1},{html:"HEVC",value:j.HEVC},{html:"AVC",value:j.AVC}],onSelect:function(a){return m.setValue("bili-bangumi-videoCodingCode",a.value),a.html}}],plugins:[Rt(),Nt({from:"video",qualityList:e.quality})]};return r.type="mp4",m.getValue("artplayer-plugin-video-danmaku-enable")&&r.plugins.push(ht({danmuku:e.danmukuUrl,speed:i.speed,margin:i.margin,opacity:i.opacity,color:"#FFFFFF",mode:0,modes:i.modes,fontSize:i.fontSize,antiOverlap:i.antiOverlap,synchronousPlayback:i.synchronousPlayback,mount:void 0,heatmap:!1,width:800,points:[],filter:a=>a.text.length<=100,beforeVisible:()=>!0,visible:i.visible,emitter:!1,maxLength:50,lockTime:3,theme:p.isThemeDark()?"dark":"light",beforeEmit(a){return new Promise(n=>{console.log(a),setTimeout(()=>{n(!0);},1e3);})}})),m.getValue("artplayer-plugin-video-m4sAudioSupport-enable")&&r.plugins.push(Et({from:"video",showSetting:!0,audioList:e.audioList||[]})),m.getValue("artplayer-plugin-video-epChoose-enable")&&r.plugins.push(_t({EP_LIST:tt(e),automaticBroadcast:!0})),m.getValue("artplayer-plugin-video-cc-subtitle-enable")&&r.plugins.push(xt({from:"video",cid:e.cid,aid:e.aid,bvid:e.bvid})),m.getValue("artplayer-plugin-video-toptoolbar-enable")&&r.plugins.push(Dt({onlineInfoParams:{aid:e.aid,cid:e.cid,bvid:e.bvid},title:e.videoTitle,showWrap:!0,showTitle:!0,showOnlineTotal:!0})),m.getValue("bili-video-playerAutoPlayVideo")&&(r.muted=!0,r.autoplay=!0),this.$data.art=new mt(r),m.getValue("artplayer-plugin-video-danmaku-enable")&&u.repairBrowserNoResponse(this.$data.art),u.onConfigChange(this.$data.art),this.$data.art},async update(e,t){this.resetEnv(!1),this.$data.currentOption=t,l.info("更新新的播放信息",t),e.pause(),l.info("暂停视频"),e.currentTime=0,l.info("重置播放进度"),this.updatePluginInfo(e,t),e.play(),l.info("播放");},updatePluginInfo(e,t){if(e.plugins[ce].update({from:"video",qualityList:t.quality}),l.info("更新画质",t.quality),m.getValue("artplayer-plugin-video-danmaku-enable")&&(e.plugins.artplayerPluginDanmuku.config({danmuku:t.danmukuUrl}),e.plugins.artplayerPluginDanmuku.load(),l.info("更新弹幕姬",t.danmukuUrl)),m.getValue("artplayer-plugin-video-m4sAudioSupport-enable")&&(e.plugins[yt].update({from:"video",audioList:t.audioList||[]}),l.info("更新音频",t.audioList)),m.getValue("artplayer-plugin-video-epChoose-enable")&&(e.plugins[Tt].update({EP_LIST:tt(t),automaticBroadcast:!0}),l.info("更新选集信息",t.epList)),m.getValue("artplayer-plugin-video-cc-subtitle-enable")){let i=e.plugins[$t];const r={from:"video",aid:t.aid,bvid:t.bvid,cid:t.cid};i.update(r),l.info("更新字幕",r);}if(m.getValue("artplayer-plugin-video-toptoolbar-enable")){let i=e.plugins[Bt];const r={showRight:!0,showRightFollow:!0,showWrap:!0,showTitle:!0,showOnlineTotal:!0,title:t.videoTitle,onlineInfoParams:{aid:t.aid,cid:t.cid,bvid:t.bvid}};i.update(r),l.info("更新顶部标题",r);}}};function yu(e){const t={};return e.forEach(i=>{(!t[i.id]||i.size>t[i.id].size)&&(t[i.id]=i);}),Object.values(t)}function ut(e,t){let u=[];return e.video.forEach(i=>{if(!e.accept_quality.includes(i.id)||t.codecid!=null&&i.codecid!==t.codecid)return;let r=e.support_formats.find(o=>o.quality===i.id),a=J.findBetterCDN(i.base_url,i.baseUrl,i.backup_url,i.backupUrl);a=J.replaceVideoCDN(a);let n=r==null?void 0:r.new_description;u.push({name:n,url:a,type:i.mimeType,id:i.id,quality:i.id,vip:!1});}),u}const Du=async e=>{var a,n;const t=[];let u=[];if(m.getValue("bili-video-playType","mp4")==="mp4"){const o=await Ue.playUrl({bvid:e.bvid,cid:e.cid,fnval:1,fnver:0,fourk:1,high_quality:1,qn:127,setPlatformHTML5:!0});if(l.info(o),!o)return;let s=o.durl[0],d=o.support_formats.find(E=>E.quality===o.quality),c=J.findBetterCDN(s.url,s.url||((a=s.backup_url)==null?void 0:a[0])),f=d==null?void 0:d.new_description;u.push({name:f,url:c,type:"audio/mp4",id:o.quality,quality:o.quality,vip:!1});}else {const o=await Ue.playUrl({bvid:e.bvid,cid:e.cid,fnval:3088,fnver:0,fourk:1,high_quality:1,qn:127,setPlatformHTML5:!1});if(l.info(o),!o)return;let s=fu.getUserChooseVideoCodingCode();o.dash.audio.forEach(d=>{let c=J.findBetterCDN(d.baseUrl,d.base_url,d.baseUrl,d.backup_url);m.getValue("bili-video-uposServerSelect-applyAudio")&&(c=J.replaceVideoCDN(c)),t.push({url:c,id:d.id,text:At[d.id]||""});}),t.sort((d,c)=>c.id-d.id),l.info("ArtPlayer: 获取的音频信息",t),u=[...ut({accept_quality:o.accept_quality,support_formats:o.support_formats,video:o.dash.video},{codecid:s})],u.length===0&&o.dash.video.length!==0&&(l.warn(`当前选择的视频编码id为: ${s}，但是过滤出的视频没有一个符合的，所以直接放弃使用自定义选择视频编码`),u=[],u=[...ut({accept_quality:o.accept_quality,support_formats:o.support_formats,video:o.dash.video},{})]),u=yu(u),u.sort((d,c)=>c.quality-d.quality),l.info("ArtPlayer: 获取的视频画质信息",u);}const i=u.map((o,s)=>({quality:o.quality,html:o.name,url:o.url})),r={container:null,epList:e.epList,audioUrl:null,url:"",poster:e.pic,aid:e.aid,bvid:e.bvid,cid:e.cid,videoTitle:e.title,danmukuUrl:`https://api.bilibili.com/x/v1/dm/list.so?oid=${e.cid}`,quality:i};return r.url=(n=u==null?void 0:u[0])==null?void 0:n.url,t.length&&(r.audioList=t.map((o,s)=>({isDefault:s===0,url:o.url,soundQualityCode:o.id,soundQualityCodeText:o.text}))),r},de={$data:{art:null},init(){m.execMenu("bili-video-enableArtPlayer",()=>{this.coverVideoPlayer();});},coverVideoPlayer(){if(ge("#artplayer"))l.warn("已使用ArtPlayer覆盖原播放器，更新播放信息");else {N(`
            /* 隐藏原本的播放器 */
			${y.className.video} .m-video-player .player-container,
			${y.className.mVideo} .m-video-player .player-container{
				display: none !important;
			}
			
			${bt}
			
			${mu}

			`);let e=m.getValue("bili-video-artplayer-controlsPadding-left-right",0);e!=0&&N(`
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
				`);}this.updateArtPlayerVideoInfo();},updateArtPlayerVideoInfo(e,t){let u=this,i=()=>ge(y.className.video+" .m-video-player")||ge(y.className.mVideo+" .m-video-player");x.waitVuePropToSet(i,{msg:"等待m-video-player加载完成",check(r){var a,n,o,s,d,c;return !t&&Ae.$data.currentOption!=null?(Ae.$data.art.pause(),typeof((a=r==null?void 0:r.info)==null?void 0:a.aid)=="number"&&Ae.$data.currentOption.aid!==r.info.aid&&typeof((n=r==null?void 0:r.info)==null?void 0:n.bvid)=="string"&&typeof((o=r==null?void 0:r.info)==null?void 0:o.cid)=="number"):typeof((s=r==null?void 0:r.info)==null?void 0:s.aid)=="number"&&typeof((d=r==null?void 0:r.info)==null?void 0:d.bvid)=="string"&&typeof((c=r==null?void 0:r.info)==null?void 0:c.cid)=="number"},async set(r){var S,k;const a=i();let{aid:n,bvid:o,cid:s,pic:d,title:c}=r;n=n||r.info.aid,o=o||r.info.bvid,s=s||r.info.cid,d=d||r.info.pic,c=c||r.info.title;let f=[];const E=ge(".m-video-season-new"),b=ge(".m-video-part-new");if(E&&x.getVue(E)){let F=x.getVue(E),g=F==null?void 0:F.videoList;Array.isArray(g)&&(f=g);}else if(b&&x.getVue(b)){let F=x.getVue(b),g=F==null?void 0:F.info,B=F==null?void 0:F.p,q=(F==null?void 0:F.pages)||((S=F==null?void 0:F.info)==null?void 0:S.pages);Array.isArray(q)&&f.push({season_id:0,section_id:0,id:0,aid:n||g.aid,bvid:o||g.bvid,cid:s||g.cid,title:c||g.title,attribute:0,arc:{aid:n||g.aid,videos:g==null?void 0:g.videos,type_id:0,type_name:"",copyright:g==null?void 0:g.copyright,pic:g==null?void 0:g.pic,title:g==null?void 0:g.title,pubdate:g==null?void 0:g.pubdate,ctime:g==null?void 0:g.ctime,desc:g==null?void 0:g.desc,state:g==null?void 0:g.state,duration:g==null?void 0:g.duration,rights:g==null?void 0:g.rights,author:g==null?void 0:g.owner,stat:g==null?void 0:g.stat,dynamic:g==null?void 0:g.dynamic,dimension:g==null?void 0:g.dimension,desc_v2:g==null?void 0:g.desc_v2,is_chargeable_season:g==null?void 0:g.is_chargeable_season,is_blooper:g==null?void 0:g.is_blooper,enable_vt:g==null?void 0:g.enable_vt,vt_display:g==null?void 0:g.vt_display},page:(k=g==null?void 0:g.pages)==null?void 0:k[B],pages:g==null?void 0:g.pages});}e==null&&(e={aid:n,bvid:o,cid:s,pic:d,title:c,epList:f}),l.info(`视频播放信息 => aid：${n} bvid：${o} cid：${s}`);const A=await Du(e);if(A==null)return;let w=ge("#artplayer");if(!w){const F=h.createElement("div",{className:"artplayer-container",innerHTML:`
								<div id="artplayer"></div>
							`});w=F.querySelector("#artplayer"),h.append(a,F);}if(A.container=w,de.$data.art==null){let F=await Ae.init(A);if(F)de.$data.art=F;else return;de.$data.art.volume=1,u.$data.art.once("ready",()=>{m.execMenu("bili-video-playerAutoPlayVideoFullScreen",async()=>{l.info("自动进入全屏"),u.$data.art.fullscreen=!0,u.$data.art.once("fullscreenError",()=>{l.warn("未成功进入全屏，需要用户交互操作，使用网页全屏代替"),u.$data.art.fullscreenWeb=!0;});});});}else await Ae.update(de.$data.art,A);a.style.paddingTop="";}});}},Bu={$data:{isAddBeautifyCSS:!1},init(){de.init(),m.execMenuOnce("bili-video-repairVideoBottomAreaHeight",()=>this.repairVideoBottomAreaHeight()),m.execMenu("bili-video-beautify",()=>{this.beautify();}),m.execMenuOnce("bili-video-cover-bottomRecommendVideo",()=>{this.coverBottomRecommendVideo();}),m.execMenuOnce("bili-video-gestureReturnToCloseCommentArea",()=>{this.gestureReturnToCloseCommentArea();}),m.execMenuOnce("bili-video-cover-seasonNew",()=>{this.coverSeasonNew();}),h.ready(()=>{m.execMenuOnce("bili-video-optimizationScroll",()=>{this.optimizationScroll();}),m.execMenu("bili-video-disableSwipeTab",()=>{this.disableSwipeTab();});});},beautify(){l.info("美化显示"),this.$data.isAddBeautifyCSS||(this.$data.isAddBeautifyCSS=!0,N(`
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

			`)),p.waitNode(y.className.video+" .bottom-tab .list-view .card-box",1e4).then(e=>{if(!e){l.error("$cardBox is null");return}function t(a){var c,f;let n=a.querySelector(".title"),o=a.querySelector(".count .left"),s=!!a.querySelector(".gm-right-container"),d=x.getVue(a);if(n&&o&&d&&!s){let E=(f=(c=d==null?void 0:d.info)==null?void 0:c.owner)==null?void 0:f.name;if(E==null){l.error("美化显示-handleVCardToApp：获取up主名字失败");return}a.querySelector(".count");let b=n.cloneNode(!0),A=o.cloneNode(!0);h.hide(n);let w=a.querySelector(".open-app.weakened");w&&h.hide(w);let S=document.createElement("div");S.className="gm-up-name",S.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${E}</span>
						`;let k=document.createElement("div"),F=document.createElement("div");k.className="gm-right-container",F.className="gm-right-bottom",h.after(n,k),k.appendChild(b),k.appendChild(F),F.appendChild(S),F.appendChild(A);}}function u(a){var c,f,E;let n=a.querySelector(".title"),o=a.querySelector(".count"),s=!!a.querySelector(".gm-right-container"),d=x.getVue(a);if(n&&o&&d&&!s){let b=(c=d==null?void 0:d.info)==null?void 0:c.duration;if(b==null){l.error("美化显示-handleVCard：获取视频时长失败");return}let A=(E=(f=d==null?void 0:d.info)==null?void 0:f.owner)==null?void 0:E.name;if(A==null){l.error("美化显示-handleVCard：获取up主名字失败");return}let w=n.cloneNode(!0),S=o.cloneNode(!0);h.hide(n);let k=document.createElement("div");k.className="duration",k.innerText=P.parseDuration(b),S.className="left";let F=document.createElement("div");o.appendChild(k),F.className="gm-up-name",F.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${A}</span>
						`;let g=document.createElement("div"),B=document.createElement("div");g.className="gm-right-container",B.className="gm-right-bottom",h.after(n,g),g.appendChild(w),g.appendChild(B),B.appendChild(F),B.appendChild(S);}}let i=new p.LockFunction(()=>{let a=document.querySelectorAll(y.className.video+" .bottom-tab .list-view .card-box .v-card-toapp"),n=document.querySelectorAll(y.className.video+" .bottom-tab .list-view .card-box>a.v-card");a.forEach(o=>{t(o);}),n.forEach(o=>{u(o);});},25),r=document.querySelector(y.className.video);r?p.mutationObserver(r,{config:{subtree:!0,attributes:!0,childList:!0},callback(){i.run();}}):l.error("未找到视频根节点");});},repairVideoBottomAreaHeight(){return l.info("修复视频底部区域高度"),N(`
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
		`)},coverBottomRecommendVideo(){l.info("覆盖 相关视频 点击事件"),h.on(document,"click",[y.className.video+" .list-view .card-box .launch-app-btn",y.className.mVideo+" .list-view .card-box .launch-app-btn"],function(e){let t=e.target,u=x.getVue(t);if(!u){D.error("获取相关视频的__vue__失败");return}let i=u.bvid;if(p.isNull(i))if(u.$children&&u.$children[0]&&p.isNotNull(u.$children[0].bvid))i=u.$children[0].bvid;else {D.error("获取相关视频的bvid失败");return}l.info("相关视频的bvid: "+i),P.goToUrl(oe.getVideoUrl(i)),p.preventEvent(e);},{capture:!0});},coverSeasonNew(){l.info("覆盖 选集视频列表 点击事件");function e(t){let u=t.target,i=x.getVue(u);if(!i){D.error("获取选集视频的目标视频的__vue__失败");return}let r=i.bvid;if(p.isNull(r)){D.error("获取相关视频的bvid失败");return}l.info("相关视频的bvid: "+r),P.goToUrl(oe.getVideoUrl(r)),p.preventEvent(t);}h.on(document,"click",[y.className.video+" .m-video-season-new .video-card .launch-app-btn",y.className.mVideo+" .m-video-season-new .video-card .launch-app-btn"],e,{capture:!0}),h.on(document,"click",[y.className.video+" .m-video-season-panel .season-video-item .launch-app-btn",y.className.mVideo+" .m-video-season-panel .season-video-item .launch-app-btn"],e,{capture:!0});},gestureReturnToCloseCommentArea(){l.info("手势返回关闭评论区，全局监听document点击.sub-reply-preview"),p.waitNode("#app").then(e=>{p.waitVueByInterval(e,()=>{var u,i;let t=x.getVue(e);return t==null?!1:typeof((i=(u=t==null?void 0:t.$router)==null?void 0:u.options)==null?void 0:i.scrollBehavior)!=null},250,1e4).then(t=>{let u=x.getVue(e);if(!u){l.error("获取#app的vue属性失败");return}let i=u.$router.options.scrollBehavior;u.$router.options.scrollBehavior=function(r,a,n){return r.hash==="#/seeCommentReply"?(l.info("当前操作为打开评论区，scrollBehavior返回null"),null):r.hash===""&&a.hash==="#/seeCommentReply"?(l.info("当前操作为关闭评论区，scrollBehavior返回null"),null):i.call(this,...arguments)};});}),h.on(document,"click",".sub-reply-preview",function(e){let t=document.querySelector("#app"),u=x.getVue(t);if(!u){l.error("获取#app元素失败");return}let i=P.hookGestureReturnByVueRouter({vueObj:u,hash:"#/seeCommentReply",callback(r){if(!r)return !1;let a=document.querySelector(".dialog-close-icon");return a?a.click():l.error("评论区关闭失败，原因：元素dialog-close-icon获取失败"),!0}});p.waitNode(".dialog-close-icon").then(r=>{h.on(r,"click",function(){i.resumeBack(!1);},{capture:!0,once:!0});});});},enterVideoFullScreen(){p.waitNode(".mplayer-btn-widescreen",5e3).then(e=>{if(!e){l.error("获取全屏按钮失败"),D.error("获取全屏按钮失败");return}if(e.closest(".mplayer-wide")){l.warn("当前的全屏按钮是【退出全屏】，不点击");return}l.info("进入全屏"),e.click();});},optimizationScroll(){let e=null,t=null,u=null,i=null,r=null,a=0,n=0;function o(s){return !document.contains(s)}h.on(document,"scroll",s=>{if(o(t)){if(t=document.querySelector(".m-video-player"),o(t))return;if(a==0){const E=t.getBoundingClientRect();a=E.height,n=E.top,l.info(`视频区域的最大高度为 ${a}px`),l.info(`视频区域的最大top为 ${n}px`);}}if(o(u)&&(u=document.querySelector(".m-video-info-new"),o(u))||o(e)&&(e=document.querySelector(".m-navbar"),o(e))||o(i)&&(i=document.querySelector(".bottom-tab"),o(i))||o(r)&&(r=document.querySelector(".bottom-tab .v-affix"),o(r)))return;let d=u.getBoundingClientRect().top;d>=0?d<=a?t.style.paddingTop=d+"px":t.style.paddingTop="":t.style.paddingTop="0px";let c=h.height(e);i.getBoundingClientRect().top<c?r.hasAttribute("data-is-fixed")||(r.style.cssText=`position: fixed;left: 0px;top: ${c}px;z-index: 10000;width: 100%;`,r.setAttribute("data-is-fixed","true")):(r.style.cssText="",r.removeAttribute("data-is-fixed"));},{passive:!0});},disableSwipeTab(){l.info("禁止滑动切换tab"),x.waitVuePropToSet(".m-video-bottom-tab",{msg:"等待tab的vue属性touchstart、touchmove、touchend事件，_bindEvents函数",check(e){var t,u,i,r,a,n,o,s;return ((t=e==null?void 0:e.slider)==null?void 0:t.el)instanceof HTMLElement&&typeof((i=(u=e==null?void 0:e.slider)==null?void 0:u.events)==null?void 0:i.touchstart)=="function"&&typeof((a=(r=e==null?void 0:e.slider)==null?void 0:r.events)==null?void 0:a.touchmove)=="function"&&typeof((o=(n=e==null?void 0:e.slider)==null?void 0:n.events)==null?void 0:o.touchend)=="function"&&typeof((s=e==null?void 0:e.slider)==null?void 0:s._bindEvents)=="function"},set(e){let t=e.slider.el;t.removeEventListener("touchstart",e.slider.events.touchstart),t.removeEventListener("touchmove",e.slider.events.touchmove),t.removeEventListener("touchend",e.slider.events.touchend),e.slider._bindEvents=()=>{},l.success("成功禁用滑动，清除touchstart、touchmove、touchend事件，覆盖_bindEvents函数");}});}},Fu=`.artplayer-container {\r
	width: 100vw;\r
	height: 35vh;\r
}`,Ee={getUrl(e){if(e!=null)return e.getAttribute("universallink")},jumpToUrl(e){let u=e.target.querySelector("bili-open-app");if(u){let i=Ee.getUrl(u);i?P.goToUrl(i):(D.error("获取bili-open-app的Url失败"),l.error("获取bili-open-app的Url失败"));}else D.error("未获取到<bili-open-app>元素"),l.error("未获取到<bili-open-app>元素");}},De={filteringSensitiveSearchParamData(e){const t=p.assign({},e,!0);return Reflect.deleteProperty(t,"access_key"),Reflect.deleteProperty(t,"access_token"),t},failToast(e){l.error(e),alert(JSON.stringify(e,null,4));}},it={async getPlayUrl(e){let t={avid:"",cid:"",ep_id:"",qn:127,fnver:0,fnval:3088,fourk:1};t=p.assign(t,e);let u=Oe.getBangumiProxyHost();l.info("番剧播放地址请求数据");let i=[],r;const a="/pgc/player/web/playurl";l.info(`请求路径：${a}`);for(let n=0;n<u.length;n++){const o=u[n],s=o.host,d={};s!==we.web_host&&(p.assign(d,Oe.getBangumiProxySearchParam({area:o.area}),!0),l.info(`代理服务器数据: ${JSON.stringify(o)}`),l.info(`代理服务器请求参数：${JSON.stringify(De.filteringSensitiveSearchParamData(d))}`));let c=`https://${s}${a}?${p.toSearchParamsStr(t)}&${p.toSearchParamsStr(d)}`,f=await U.get(c,{responseType:"json",fetch:!1,allowInterceptConfig:!1,headers:{Referer:"https://www.bilibili.com/"}});if(!f.status){l.error(`代理服务器：${s} 请求失败`);continue}let E=p.toJSON(f.data.responseText);if(E.result,!Z.isWebApiSuccess(E)||Z.isAreaLimit(E)){l.error(`请求失败，当前代理服务器：${s} ${JSON.stringify(E)}`),i.push(E);continue}r=E.result;break}return r==null&&De.failToast(i),r},async getPlayUrlHTML5(e){let t={avid:"",cid:"",ep_id:"",bsource:""};t=p.assign(t,e),l.info("（原版api）番剧播放地址请求数据");let i=`https://${we.web_host}/pgc/player/web/playurl/html5?${p.toSearchParamsStr(t)}`,r=await U.get(i,{responseType:"json",fetch:!0,headers:{Host:"www.bilibili.com",Referer:"https://www.bilibili.com"}});if(!r.status)return;let a=p.toJSON(r.data.responseText);if(!Z.isWebApiSuccess(a)){De.failToast(a);return}return a.result}},wu="[artplayer-plugin-airborneHelper]：",_={$data:{tipJumpToastTimeoutId:void 0,tipJumpToastInfo:void 0,successJumpToastInfo:void 0},$event:{"video:timeupdate":()=>{if(_.$data.tipJumpToastTimeoutId!=null||!W.$data.art.playing)return;const e=5;let t=W.$data.art.currentTime,u=W.$data.option.clip_info_list.findIndex(i=>{let r=i.start;return r===0?t<=1:t>=r-e&&t<r});if(u!==-1){let i=function(){var o;clearTimeout(_.$data.tipJumpToastTimeoutId),_.$data.tipJumpToastTimeoutId=void 0,(o=_.$data.tipJumpToastInfo)==null||o.close(),_.$data.tipJumpToastInfo=void 0,W.$data.option.clip_info_list.splice(u,1);},r=W.$data.option.clip_info_list[u],a=W.$data.art.plugins[Eu],n=(r.start-t)*1e3;_.$data.tipJumpToastTimeoutId=setTimeout(()=>{W.$data.art.currentTime=r.end,_.$data.tipJumpToastTimeoutId=void 0,_.$data.successJumpToastInfo&&(_.$data.successJumpToastInfo.close(),_.$data.successJumpToastInfo=void 0),_.$data.successJumpToastInfo=a.toast({text:"空降成功~o(*≧▽≦)ツ┏━┓",closeCallback(){_.$data.successJumpToastInfo=void 0;}});},n),_.$data.tipJumpToastInfo&&(_.$data.tipJumpToastInfo.close(),_.$data.tipJumpToastInfo=void 0),_.$data.tipJumpToastInfo=a.toast({text:typeof r.toastText=="string"?r.toastText:"站稳扶好，准备起飞~",timeout:n<2e3?2e3:n,showCloseBtn:!1,jumpText:typeof r.toastText=="string"?"不跳过":"坠机",jumpClickCallback:()=>{i();}}),setTimeout(()=>{_.$data.tipJumpToastInfo&&(_.$data.tipJumpToastInfo.close(),_.$data.tipJumpToastInfo=void 0);},(e+3)*1e3);}}},bind(){Object.keys(this.$event).forEach(e=>{W.$data.art.on(e,this.$event[e]);});},unbind(){Object.keys(this.$event).forEach(e=>{W.$data.art.off(e,this.$event[e]);}),clearTimeout(_.$data.tipJumpToastTimeoutId),_.$data.tipJumpToastTimeoutId=void 0,_.$data.successJumpToastInfo&&(_.$data.successJumpToastInfo.close(),_.$data.successJumpToastInfo=void 0),_.$data.tipJumpToastInfo&&(_.$data.tipJumpToastInfo.close(),_.$data.tipJumpToastInfo=void 0);}},W={$key:{plugin_KEY:"plugin-airborne-helper"},$data:{art:null,option:null},init(e,t){this.$data.art=e,this.update(t);},update(e){this.$data.option=e,console.log(wu+"更新配置",e),_.unbind(),e.clip_info_list.length&&_.bind();}},xu=e=>t=>(W.init(t,e),{name:W.$key.plugin_KEY,update(u){W.update(u);}}),$u=W.$key.plugin_KEY,rt="[flvjs]：",at=e=>e.epList.map(t=>({isDefault:t.ep_id===e.ep_id&&t.aid===e.aid&&t.cid===e.cid,title:St(t.long_title,t.title),aid:t.aid,bvid:t.bvid,cid:t.cid,ep_id:t.ep_id,onSelect(u,i){Pt.updateArtPlayerVideoInfo(t,e.epList);}})),nt={$data:{art:null,flv:null,currentOption:null},resetEnv(e){e&&(Reflect.set(this.$data,"art",null),Reflect.set(this.$data,"flv",null)),Reflect.set(this.$data,"currentOption",null);},flvPlayer(){var u,i;if(this.$data.currentOption==null){console.error(rt+"获取当前配置为空");return}let e=this.$data.currentOption.flvInfo;(this.$data.flv!=null||e==null)&&((u=this.$data.flv)==null||u.detachMediaElement(),(i=this.$data.flv)==null||i.destroy());let t=this.$data.currentOption;console.log(rt+"加载视频",e),e.length>1?this.$data.flv=Re.createPlayer({type:"flv",filesize:t.flvTotalSize,duration:t.flvTotalDuration,segments:e.map(r=>({url:r.url,duration:r.duration,filesize:r.size}))},{stashInitialSize:1024*100}):this.$data.flv=Re.createPlayer({type:"flv",url:e[0].url},{stashInitialSize:1024*100}),this.$data.flv.attachMediaElement(this.$data.art.video),this.$data.flv.load();},async init(e){this.resetEnv(!0),this.$data.currentOption=e;const t="artplayer-bangumi-danmaku-option",u=new vt(t),i=u.getLocalArtDanmakuOption(),r={...Vt(),container:e.container,settings:[{name:"video-playback-codeid",html:"播放策略",tooltip:"默认",icon:'<svg t="1727413004405" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3183" width="24" height="24"><path d="M170.666667 256h682.666666c23.466667 0 42.666667 19.2 42.666667 42.666667v170.666666h85.333333V256c0-46.933333-38.4-85.333333-85.333333-85.333333H128c-46.933333 0-85.333333 38.4-85.333333 85.333333v512c0 46.933333 38.4 85.333333 85.333333 85.333333h384v-85.333333H170.666667c-23.466667 0-42.666667-19.2-42.666667-42.666667V298.666667c0-23.466667 19.2-42.666667 42.666667-42.666667z" p-id="3184"></path><path d="M640 512L384 341.333333v341.333334zM968.96 786.346667c1.28-12.373333 1.706667-24.746667 0.426667-36.693334l45.653333-36.266666c4.266667-3.413333 5.12-8.96 2.56-13.653334l-43.946667-76.373333c-2.56-4.693333-8.106667-6.4-13.226666-4.693333l-54.613334 21.333333a146.773333 146.773333 0 0 0-32-17.92l-8.533333-58.026667a10.624 10.624 0 0 0-10.666667-9.386666h-88.32c-5.12 0-9.813333 3.84-10.666666 8.96l-8.533334 58.026666c-11.093333 4.693333-21.76 11.093333-31.573333 17.92l-54.613333-21.333333c-5.12-2.133333-10.666667 0-13.226667 4.693333l-43.946667 76.373334c-2.56 4.693333-1.706667 10.24 2.56 13.653333l45.653334 36.693333c-1.28 12.373333-1.706667 24.746667-0.426667 36.693334l-45.653333 36.266666c-4.266667 3.413333-5.12 8.96-2.56 13.653334l43.946666 76.373333c2.56 4.693333 8.106667 6.4 13.226667 4.693333l54.186667-21.333333c9.813333 7.253333 20.48 13.226667 32 17.92l8.533333 58.026667c0.853333 5.12 5.12 8.96 10.666667 8.96h88.32c5.12 0 9.813333-3.84 10.666666-8.96l8.533334-58.026667c11.093333-4.693333 21.76-11.093333 31.573333-17.92l54.613333 21.333333c5.12 2.133333 10.666667 0 13.226667-4.693333l43.946667-76.373333c2.56-4.693333 1.706667-10.24-2.56-13.653334l-45.226667-36.266666zM810.666667 832c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64z" p-id="3185"></path></svg>',selector:[{default:!0,html:"默认",value:j.AV1},{html:"AV1",value:j.AV1},{html:"HEVC",value:j.HEVC},{html:"AVC",value:j.AVC}],onSelect:function(a){return m.setValue("bili-bangumi-videoCodingCode",a.value),a.html}}],plugins:[Rt(),Nt({from:"bangumi",qualityList:e.quality})]};if(e.isFlv){if(r.quality=[],r.type="flv",e.flvInfo.length===0){De.failToast("视频播放地址为空，无法播放！");return}r.url=e.flvInfo[0].url,r.customType={flv:(a,n,o)=>{if(!Re.isSupported()){o.notice.show="Unsupported playback format: flv";return}this.flvPlayer();}};}else r.type="mp4";return m.getValue("artplayer-plugin-bangumi-danmaku-enable")&&r.plugins.push(ht({danmuku:e.danmukuUrl,speed:i.speed,margin:i.margin,opacity:i.opacity,color:"#FFFFFF",mode:0,modes:i.modes,fontSize:i.fontSize,antiOverlap:i.antiOverlap,synchronousPlayback:i.synchronousPlayback,mount:void 0,heatmap:!1,width:800,points:[],filter:a=>a.text.length<=100,beforeVisible:()=>!0,visible:i.visible,emitter:!1,maxLength:50,lockTime:3,theme:p.isThemeDark()?"dark":"light",beforeEmit(a){return new Promise(n=>{console.log(a),setTimeout(()=>{n(!0);},1e3);})}})),m.getValue("artplayer-plugin-bangumi-m4sAudioSupport-enable")&&r.plugins.push(Et({from:"bangumi",audioList:e.audioList||[],showSetting:!0})),m.getValue("artplayer-plugin-bangumi-epChoose-enable")&&r.plugins.push(_t({EP_LIST:at(e),automaticBroadcast:!0})),m.getValue("artplayer-plugin-bangumi-cc-subtitle-enable")&&r.plugins.push(xt({from:"bangumi",cid:e.cid,aid:e.aid,bvid:e.bvid,ep_id:e.ep_id})),m.getValue("artplayer-plugin-bangumi-toptoolbar-enable")&&r.plugins.push(Dt({onlineInfoParams:{aid:e.aid,cid:e.cid,bvid:e.bvid},title:e.videoTitle,showWrap:!0,showTitle:!0,showOnlineTotal:!0})),m.getValue("artplayer-plugin-bangumi-airborneHelper-enable")&&r.plugins.push(xu({clip_info_list:e.clip_info_list})),this.$data.art=new mt(r),m.getValue("artplayer-plugin-bangumi-danmaku-enable")&&u.repairBrowserNoResponse(this.$data.art),u.onConfigChange(this.$data.art),this.$data.art},async update(e,t){this.resetEnv(!1),this.$data.currentOption=t,l.info("更新新的播放信息",t),e.pause(),l.info("暂停视频"),e.currentTime=0,l.info("重置播放进度"),this.updatePluginInfo(e,t),e.play(),l.info("播放");},updatePluginInfo(e,t){if(e.plugins[ce].update({from:"bangumi",qualityList:t.quality}),l.info("更新画质",t.quality),m.getValue("artplayer-plugin-bangumi-danmaku-enable")&&(e.plugins.artplayerPluginDanmuku.config({danmuku:t.danmukuUrl}),e.plugins.artplayerPluginDanmuku.load(),l.info("更新弹幕姬",t.danmukuUrl)),m.getValue("artplayer-plugin-bangumi-m4sAudioSupport-enable")&&(e.plugins[yt].update({from:"bangumi",audioList:t.audioList||[]}),l.info("更新音频",t.audioList)),m.getValue("artplayer-plugin-bangumi-epChoose-enable")&&(e.plugins[Tt].update({EP_LIST:at(t),automaticBroadcast:!0}),l.info("更新选集信息",t.epList)),m.getValue("artplayer-plugin-bangumi-cc-subtitle-enable")){let i=e.plugins[$t];const r={from:"bangumi",cid:t.cid,aid:t.aid,ep_id:t.ep_id};i.update(r),l.info("更新字幕",r);}if(m.getValue("artplayer-plugin-bangumi-toptoolbar-enable")){let i=e.plugins[Bt];const r={showRight:!0,showRightFollow:!0,showWrap:!0,showTitle:!0,showOnlineTotal:!0,title:t.videoTitle,onlineInfoParams:{aid:t.aid,cid:t.cid,bvid:t.bvid}};i.update(r),l.info("更新顶部标题",r);}m.getValue("artplayer-plugin-bangumi-airborneHelper-enable")&&(e.plugins[$u].update({clip_info_list:t.clip_info_list}),l.info("更新空降助手信息",t.clip_info_list));}},ku={getUserChooseVideoCodingCode(){let e=m.getValue("bili-bangumi-videoCodingCode",j.AV1);return Object.values(j).includes(e)||(l.error("意外情况，选择的编码格式不是允许的编码，将强制使用默认，防止过滤掉的视频链接为空："+e),e=j.AV1),e}};function Su(e){const t={};return e.forEach(i=>{(!t[i.id]||i.size>t[i.id].size)&&(t[i.id]=i);}),Object.values(t)}function ot(e,t){let u=[];return e.video.forEach(i=>{if(!e.accept_quality.includes(i.id)||t.codecid!=null&&i.codecid!==t.codecid)return;let r=e.support_formats.find(o=>o.quality===i.id),a=J.findBetterCDN(i.base_url,i.baseUrl,i.backup_url,i.backupUrl);a=J.replaceBangumiVideoCDN(a);let n=r==null?void 0:r.new_description;u.push({name:n,url:a,type:i.mimeType,id:i.id,size:i.size,quality:i.id,vip:!!(r!=null&&r.need_vip)});}),u}const _u=(e,t)=>`第${e}话 ${t}`,lt=(e,t)=>{var i,r;let u=[];if((r=(i=e==null?void 0:e.dash)==null?void 0:i.video)!=null&&r.length){let a=e;u=[...ot({accept_quality:a.accept_quality,support_formats:a.support_formats,video:a.dash.video},{codecid:t})],u.length===0&&a.dash.video.length!==0&&(l.warn(`当前选择的视频编码id为: ${t}，但是过滤出的视频没有一个符合的，所以直接放弃使用自定义选择视频编码`),u=[],u=[...ot({accept_quality:a.accept_quality,support_formats:a.support_formats,video:a.dash.video},{})]),u=Su(u),u.sort((n,o)=>o.quality-n.quality);}else {let a=e;a.durls.length===0&&a.durl!=null&&a.durls.push({quality:a.quality,durl:a.durl}),a.durls.forEach(n=>{if(!a.accept_quality.includes(n.quality)||!n.durl.length)return;let o=n.durl[0],s=e.support_formats.find(f=>f.quality===n.quality),d=J.findBetterCDN(o.url,o.backup_url),c=s==null?void 0:s.new_description;u.push({name:c,url:d,type:"audio/mp4",id:n.quality,size:o.size,quality:n.quality,vip:!!(s!=null&&s.need_vip)});});}return u},Tu=async(e,t)=>{var F,g;const{aid:u,bvid:i,cid:r,ep_id:a,title:n,long_title:o}=e;l.info(`解析番剧信息 aid:${u} cid:${r} ep_id:${a}`);const s=_u(n,o),d=[];let c=[],f=[],E=!1,b=[],A=0,w=0;if(m.getValue("bili-bangumi-unlockAreaLimit")){const B=await it.getPlayUrl({avid:u,cid:r,ep_id:a});if(!B)return;Array.isArray(B==null?void 0:B.clip_info_list)?f=B.clip_info_list:Array.isArray(B==null?void 0:B.clip_info)&&(f=B.clip_info);let q=ku.getUserChooseVideoCodingCode();if(B.type.toLowerCase()==="flv")E=!0,B.durl.forEach(T=>{let M=J.findBetterCDN(T.url,T.backup_url);M=J.replaceBangumiVideoCDN(M),A+=T.length,w+=T.size,b.push({order:T.order,url:M,duration:T.length,length:T.length,size:T.size});});else if(B.type.toLowerCase()==="dash"||B.type.toLowerCase()==="mp4")(((F=B==null?void 0:B.dash)==null?void 0:F.audio)||[]).forEach(T=>{let M=J.findBetterCDN(T.baseUrl,T.base_url,T.baseUrl,T.backup_url);m.getValue("bili-bangumi-uposServerSelect-applyAudio")&&(M=J.replaceBangumiVideoCDN(M)),d.push({url:M,id:T.id,size:T.size,text:At[T.id]||""});}),d.sort((T,M)=>M.id-T.id),l.info("ArtPlayer: 获取的音频信息",d),c=c.concat(lt(B,q)),l.info("ArtPlayer: 获取的视频画质信息",c);else {De.failToast("暂未适配的视频格式："+B.format);return}}else {const B=await it.getPlayUrlHTML5({avid:u,cid:r,ep_id:a});if(!B)return;Array.isArray(B==null?void 0:B.clip_info_list)?f=B.clip_info_list:Array.isArray(B==null?void 0:B.clip_info)&&(f=B.clip_info),c=c.concat(lt(B));}const S=c.map((B,q)=>({html:B.name,url:B.url,quality:B.quality})),k={container:null,epList:t,cid:r,aid:u,bvid:i,ep_id:a,videoTitle:s,danmukuUrl:`https://api.bilibili.com/x/v1/dm/list.so?oid=${r}`,quality:S,clip_info_list:f,isFlv:E,flvInfo:b,flvTotalDuration:A,flvTotalSize:w};return k.url=(g=c==null?void 0:c[0])==null?void 0:g.url,d.length&&(k.audioList=d.map((B,q)=>({isDefault:q===0,url:B.url,soundQualityCode:B.id,soundQualityCodeText:B.text}))),k},Pt={updateArtPlayerVideoInfo(e,t){x.waitVuePropToSet(".player-wrapper",{msg:"等待player-wrapper加载完成",check(u){var i,r,a;return typeof((i=u==null?void 0:u.EP_INFO)==null?void 0:i.aid)=="number"&&typeof((r=u==null?void 0:u.EP_INFO)==null?void 0:r.cid)=="number"&&typeof((a=u==null?void 0:u.EP_INFO)==null?void 0:a.ep_id)=="number"},async set(u){const i=document.querySelector(".player-wrapper");e==null&&(e=u.EP_INFO),t==null&&(t=u.EP_LIST);const r=await Tu(e,t);if(r==null)return;let a=document.querySelector("#artplayer");if(!a){const n=h.createElement("div",{className:"artplayer-container",innerHTML:`
						<div id="artplayer"></div>
						`});a=n.querySelector("#artplayer"),h.after(i,n);}if(r.container=a,ye.$data.art==null){let n=await nt.init(r);if(n)ye.$data.art=n;else return;ye.$data.art.volume=1;}else nt.update(ye.$data.art,r);}});}},ye={$data:{art:null},init(){m.execMenuOnce("bili-bangumi-initialScale",()=>{P.initialScale();}),m.execMenuOnce("bili-bangumi-hook-callApp",()=>{this.hookCallApp();}),m.execMenu("bili-bangumi-cover-clicl-event-chooseEp",()=>{this.setChooseEpClickEvent();}),m.execMenu("bili-bangumi-cover-clicl-event-other",()=>{this.setClickOtherVideo();}),m.execMenu("bili-bangumi-cover-clicl-event-recommend",()=>{this.setRecommendClickEvent();}),this.coverVideoPlayer();},hookCallApp(){let e=K.setTimeout;K.setTimeout=function(...t){if(t[0].toString().includes("autoOpenApp")){l.success("阻止唤醒App",t);return}return e.apply(this,t)};},setPay(){x.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.userStat.pay",check(e){var t,u,i;return typeof typeof((i=(u=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:u.userStat)==null?void 0:i.pay)=="number"},set(e){l.success("成功设置参数 $store.state.userStat.pay=1"),e.$store.state.userStat.pay=1;}},{msg:"设置参数 $store.state.mediaInfo.user_status.pay",check(e){var t,u,i,r;return typeof((r=(i=(u=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:u.mediaInfo)==null?void 0:i.user_status)==null?void 0:r.pay)=="number"},set(e){l.success("成功设置参数 $store.state.mediaInfo.user_status.pay=1"),e.$store.state.mediaInfo.user_status.pay=1;}}]);},setChooseEpClickEvent(){p.waitNode(y.className.bangumi+" .ep-list-pre-wrapper ul.ep-list-pre-container").then(e=>{l.info("覆盖【选集】的点击事件"),h.on(e,"click","li.episode-item",function(t){p.preventEvent(t),Ee.jumpToUrl(t);},{capture:!0});}),p.waitNode(y.className.bangumi+" .ep-list-pre-wrapper ul.season-list-wrapper").then(e=>{l.info("覆盖【xx季】的点击事件"),h.on(e,"click","li",function(t){p.preventEvent(t),Ee.jumpToUrl(t);},{capture:!0});}),p.waitNode(y.className.bangumi+" .ep-list-pre-header").then(e=>{l.info("覆盖【选集】右上角的【全xx话】Arrow的点击事件"),h.on(e,"click",function(t){p.preventEvent(t);},{capture:!0});});},setClickOtherVideo(){p.waitNode(y.className.bangumi+" .section-preview-wrapper ul.ep-list-pre-container").then(e=>{l.info("覆盖【PV&其他】、【预告】、【主题曲】的点击事件"),h.on(e,"click","li.section-preview-item",function(t){p.preventEvent(t),Ee.jumpToUrl(t);},{capture:!0});}),p.waitNode(y.className.bangumi+" .section-preview-header").then(e=>{l.info("覆盖【PV&其他】、【预告】、【主题曲】右上角的Arrow的点击事件"),h.on(e,"click",function(t){p.preventEvent(t);},{capture:!0});});},setRecommendClickEvent(){p.waitNode(y.className.bangumi+" .recom-wrapper ul.recom-list").then(e=>{l.info("覆盖【更多推荐】番剧的点击事件"),h.on(e,"click","li.recom-item-v2",function(t){p.preventEvent(t),Ee.jumpToUrl(t);},{capture:!0});});},coverVideoPlayer(){if(document.querySelector("#artplayer"))l.warn("已存在播放器，更新播放信息");else {N(`
			.player-wrapper,
			.open-app-bar{
				display: none !important;
			}
			
			${bt}
			
			${Fu}
			
			`);let e=m.getValue("bili-bangumi-artplayer-controlsPadding-left-right",0);e!=0&&N(`
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
				`);}Pt.updateArtPlayerVideoInfo();}},Mt={async getSearchInputPlaceholder(){let e=await U.get("https://api.bilibili.com/x/web-interface/wbi/search/default",{fetch:!0,headers:{accept:"application/json, text/plain, */*","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","cache-control":"no-cache",pragma:"no-cache","sec-ch-ua":'""',"sec-ch-ua-mobile":"?1","sec-ch-ua-platform":'""',"sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-site"},allowInterceptConfig:!1});if(!e.status)return;let t=p.toJSON(e.data.responseText);if(Z.isWebApiSuccess(t))return t.data},async getBangumiSearchResult(e){let t={search_type:"media_bangumi",keyword:e.keyword,from_client:"BROWSER",drm_tech_type:"2",module:"bangumi",area:e.area.toLowerCase(),access_key:pe.getAccessToken()},u=`https://${e.host}/x/web-interface/search/type?${p.toSearchParamsStr(t)}`,i=await U.get(u,{fetch:!1,headers:{"User-Agent":p.getRandomAndroidUA()}});if(!i.status)return;let r=p.toJSON(i.data.responseText);return Z.isWebApiSuccess(r)?{isSuccess:!0,data:r.data.result}:(l.error(`请求失败，当前代理服务器信息：${JSON.stringify(e.host)}`),l.error(`请求失败，当前请求的响应信息：${JSON.stringify(r)}`),{isSuccess:!1,data:r})}},Vu=`#app .m-search {\r
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
`,Lt={$flag_css:{enableOtherAreaSearchBangumi:!1},init(){N(Vu),h.ready(()=>{m.execMenu("bili-search-enableOtherAreaSearchBangumi",()=>{this.enableOtherAreaSearchBangumi();});});},enableOtherAreaSearchBangumi(){this.$flag_css.enableOtherAreaSearchBangumi||(this.$flag_css.enableOtherAreaSearchBangumi=!0,N(`
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
			`)),p.waitNode(".m-search-result .tabs:not(:has(.gm-tab-item))").then(e=>{Oe.getSearchProxyHost().forEach(i=>{let r=h.createElement("a",{className:"tab-item gm-tab-item",innerHTML:`番剧（${i.name}）`},{"data-area":i.area,"data-host":i.host});e.appendChild(r);});const u=i=>{e.querySelectorAll(".tab-item").forEach(r=>i!=r&&r.classList.remove("on")),i.classList.add("on");};h.on(e,"click",".tab-item",async i=>{let r=i.target;u(r);let a=document.querySelector(".result-panel"),n=document.querySelector(".gm-result-panel");if(n&&(n.remove(),h.show(a)),!r.classList.contains("gm-tab-item"))return;let o=r.dataset.area,s=r.dataset.host,d=document.querySelector(".m-search-result"),c=x.getVue(d);c.switchTab(233),h.hide(a);let f=c.keyword,E=D.loading("搜索中，请稍后..."),b=await Mt.getBangumiSearchResult({keyword:f,area:o,host:s});if(E.close(),!b)return;if(!b.isSuccess){alert(JSON.stringify(b.data,null,2));return}let A=b.data;l.info("搜索结果：",A);let w=h.createElement("div",{className:"gm-result-panel",innerHTML:`
						<div class="gm-list-view">
							<div class="gm-video-list-box">
								<div class="gm-video-list">
									<div class="gm-card-box"></div>
								</div>
							</div>
						</div>
					`}),S=w.querySelector(".gm-card-box");A.forEach(k=>{S.appendChild(this.createSearchResultVideoItem(k));}),d.appendChild(w);});});},createSearchResultVideoItem(e){var s,d;let t=h.createElement("div",{className:"gm-card-item",innerHTML:`
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
				`},{"data-url":e.url,"data-type":e.type,"data-media_id":e.media_id,"data-pgc_season_id":e.pgc_season_id,"data-is_follow":e.is_follow,"data-is_selection":e.is_selection});Reflect.set(t,"data-option",e),h.on(t,"click",c=>{p.preventEvent(c),window.open(e.url,"_blank");});let u=t.querySelector(".gm-card-display-info"),i=[];Array.isArray(e==null?void 0:e.display_info)&&(i=i.concat(e.display_info)),Array.isArray(e==null?void 0:e.badges)&&(i=i.concat(e.badges)),i=p.uniqueArray(i,c=>c.text),i.forEach(c=>{let f=h.createElement("span",{className:"gm-card-badge-info-item",innerText:c.text});typeof c.border_color=="string"&&(f.style.border=`1px solid ${c.border_color}`,f.style.color=c.border_color),h.append(u,f);}),e.pubtime&&h.append(u,`
				<span>${p.formatTime(e.pubtime*1e3,"yyyy")}</span>
				`);let r=e.areas||Reflect.get(e,"area");r&&(u.children.length&&h.append(u,`
					<span> | </span>
				`),h.append(u,`
					<span>${r}</span>
				`));let a=t.querySelector(".gm-card-media_score");e.media_score&&e.media_score.user_count&&h.append(a,`
				<span class="gm-card-media_score-score">${((s=e.media_score)==null?void 0:s.score)||0}分</span>
				<span class="gm-card-media_score-user_count">${((d=e.media_score)==null?void 0:d.user_count)||0}人参与</span>
				`);let n=t.querySelector(".gm-card-eps");return [...e.eps||[],...Reflect.get(e,"episodes_new")||[]].filter(c=>p.isNotNull(c)).forEach(c=>{let f=c.title||c.long_title,E=c.url||Reflect.get(c,"uri"),b=h.createElement("div",{className:"gm-card-ep-conatiner",innerHTML:`
				<div class="gm-card-ep-badges-container">
					
				</div>
				<div class="gm-card-ep-info-container">
					${f}
				</div>`},{"data-id":c.id,"data-url":E,"data-title":f,"data-long_title":c.long_title}),A=b.querySelector(".gm-card-ep-badges-container");if(b.querySelector(".gm-card-ep-info-container"),Array.isArray(c.badges)&&c.badges.length){let w=c.badges[0],S=h.createElement("span",{className:"gm-card-ep-badge-top-right",innerText:w.text});typeof w.bg_color=="string"&&(S.style.backgroundColor=w.bg_color),typeof w.text_color=="string"&&(S.style.color=w.text_color),h.append(A,S);}h.on(b,"click",w=>{p.preventEvent(w),window.open(E,"_blank");}),n.appendChild(b);}),t},searchBangumi(){}},Nu={$flag:{mutationSearchResult:!1},init(){this.mutationSearchResult();},mutationSearchResult(){this.$flag.mutationSearchResult||(this.$flag.mutationSearchResult=!0,N(`
        .bangumi-list{
            padding: 0 10px;
        }
        `),p.mutationObserver(document,{config:{subtree:!0,childList:!0},callback:p.debounce(()=>{document.querySelectorAll(".m-search-bangumi-item").forEach(e=>{let t=x.getVue(e);if(!t)return;let u=t.info;if(!u)return;let i=Lt.createSearchResultVideoItem(u);h.after(e,i),e.remove();});})}));}},Ru={init(){m.execMenuOnce("bili-search-vue-prop-noCallApp",()=>{this.noCallApp();}),m.execMenuOnce("bili-search-vue-prop-openAppDialog",()=>{this.openAppDialog();});},noCallApp(){let e=new p.LockFunction(()=>{document.querySelectorAll(".video-list .card-box > div:not([data-gm-inject-no-call-app])").forEach(t=>{let u=x.getVue(t);u&&typeof u.noCallApp=="boolean"&&(Object.defineProperty(u,"noCallApp",{value:!0,writable:!1,enumerable:!0,configurable:!0}),t.setAttribute("data-gm-inject-no-call-app","true"));});});p.mutationObserver(document,{config:{subtree:!0,childList:!0},callback(){e.run();}});},openAppDialog(){let e=new p.LockFunction(()=>{document.querySelectorAll(".video-list .card-box > div:not([data-gm-inject-openAppDialog])").forEach(t=>{let u=x.getVue(t);u&&typeof u.openAppDialog=="boolean"&&(Object.defineProperty(u,"openAppDialog",{value:!1,writable:!1,enumerable:!0,configurable:!0}),t.setAttribute("data-gm-inject-openAppDialog","true"));});});p.mutationObserver(document,{config:{subtree:!0,childList:!0},callback(){e.run();}});}},Pu={init(){O.isSearchResult()&&Lt.init(),Ru.init(),m.execMenuOnce("bili-search-cover-cancel",()=>{this.coverCancel();}),m.execMenu("bili-search-beautifySearchResult",()=>{Nu.init();}),h.ready(()=>{m.execMenu("bili-search-inputAutoFocus",()=>{this.inputAutoFocus();});});},coverCancel(){l.info("覆盖【取消】按钮的点击事件"),h.on(document,"click","a.cancel",e=>{l.info("点击取消按钮"),p.preventEvent(e),window.history.back();},{capture:!0});},inputAutoFocus(){if(new URLSearchParams(window.location.search).has("keyword")){l.warn("当前在搜索结果页面，不执行输入框自动获取焦点");return}l.info("输入框自动获取焦点"),p.waitNode('.m-search .m-search-search-bar input[type="search"]',1e4).then(t=>{if(!t){l.error("获取输入框失败");return}t.focus();});}},he={addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(u=>{Array.isArray(u)?t=t.concat(u):t.push(u);}),N(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){let t=typeof He=="function"?He(e.keyName):"";typeof t=="string"&&t?N(t):he.loadStyleLink(e.url);},async loadStyleLink(e){let t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=e,h.ready(()=>{document.head.appendChild(t);});},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(u=>{t.onload=()=>{u(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.match(/^http(s|):\/\//i)||(e.startsWith("/")||(e+="/"),e=window.location.origin+e),e},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;let t=new URL(e);return t.protocol="https:",t.toString()}},Mu={init(){m.execMenuOnce("bili-live-block-chatRoom",()=>this.blockChatRoom()),m.execMenuOnce("bili-live-block-brush-prompt",()=>this.blockBrushPrompt()),m.execMenuOnce("bili-live-block-control-panel",()=>this.blockControlPanel());},blockChatRoom(){return l.info("屏蔽聊天室"),he.addBlockCSS("#chat-items")},blockBrushPrompt(){return l.info("屏蔽xxx进入直播间"),he.addBlockCSS("#brush-prompt")},blockControlPanel(){return l.info("屏蔽底部工具栏"),he.addBlockCSS(".control-panel")}},Lu={init(){Mu.init(),m.execMenuOnce("bili-live-prevent-openAppBtn",()=>{this.preventOpenAppBtn();});},preventOpenAppBtn(){p.waitNode("body").then(e=>{l.info("阻止.open-app-btn元素触发点击事件"),h.on(e,"click",".open-app-btn",function(t){p.preventEvent(t);},{capture:!0}),h.on(e,"click","#web-player-controller-wrap-el",function(t){p.preventEvent(t);},{capture:!0});});}},Ou={init(){m.execMenuOnce("bili-opus-cover-topicJump",()=>{this.coverTopicJump();}),m.execMenuOnce("bili-opus-automaticallyExpandToReadFullText",()=>this.automaticallyExpandToReadFullText()),m.execMenuOnce("bili-opus-cover-header",()=>{this.coverHeaderJump();});},coverTopicJump(){l.info("覆盖话题跳转点击事件"),h.on(document,"click",y.className.opus+" .launch-app-btn.opus-module-topic",function(e){var a;let t=e.target,u=x.getVue(t);if(!u){D.error("获取话题的__vue__失败");return}let i=(a=u==null?void 0:u.$props)==null?void 0:a.data,r=i==null?void 0:i.jump_url;if(p.isNull(r)){D.error("获取话题的jump_url失败");return}l.info("话题的跳转信息: ",i),P.goToUrl(r);},{capture:!0});},automaticallyExpandToReadFullText(){l.info("自动展开阅读全文");let e=[he.addBlockCSS(y.className.opus+" .opus-read-more"),N(`
			${y.className.opus} .opus-module-content{
				overflow: unset !important;
				max-height: unset !important;
			}
			`)];return h.ready(()=>{x.waitVuePropToSet(".m-opus",{msg:"自动展开阅读全文 ==> 等待vue属性isLimit出现",check(t){return typeof(t==null?void 0:t.isLimit)=="boolean"},set(t){t.isLimit=!1;}});}),e},coverHeaderJump(){l.info("覆盖header点击事件"),h.on(document,"click",y.className.opus+" .opus-module-author",function(e){var r;p.preventEvent(e);let t=e.target,u=x.getVue(t);if(!u){D.error("获取vue属性失败");return}let i=(r=u==null?void 0:u.data)==null?void 0:r.mid;if(!i){D.error("获取mid失败");return}P.goToUrl(oe.getUserSpaceUrl(i));},{capture:!0});}},Iu={init(){m.execMenuOnce("bili-dynamic-cover-topicJump",()=>{this.coverTopicJump();}),m.execMenuOnce("bili-dynamic-cover-atJump",()=>{this.coverAtJump();}),m.execMenuOnce("bili-dynamic-cover-referenceJump",()=>{this.coverReferenceJump();}),m.execMenuOnce("bili-dynamic-cover-header",()=>{this.coverHeaderJump();});},coverHeaderJump(){l.info("覆盖header点击事件"),h.on(document,"click",y.className.dynamic+" .launch-app-btn .dyn-header",function(e){p.preventEvent(e);let t=e.target,u=x.getVue(t);if(!u){D.error("获取vue属性失败");return}let i=u.url;if(!i){D.error("获取url失败");return}P.goToUrl(i);},{capture:!0});},coverTopicJump(){l.info("覆盖话题跳转点击事件"),h.on(document,"click",y.className.dynamic+" .launch-app-btn .bili-dyn-topic",function(e){var a;p.preventEvent(e);let t=e.target,u=x.getVue(t);if(!u){D.error("获取vue属性失败");return}let i=(a=u==null?void 0:u.$props)==null?void 0:a.data,r=i==null?void 0:i.jump_url;if(p.isNull(r)){D.error("获取jump_url失败");return}l.info("话题的跳转信息: ",i),P.goToUrl(r);},{capture:!0});},coverAtJump(){l.info("覆盖@ 跳转"),h.on(document,"click",y.className.dynamic+" .at",function(e){var i,r;p.preventEvent(e);let t=e.target,u=t.getAttribute("data-oid")||((r=(i=x.getVue(t))==null?void 0:i.$props)==null?void 0:r.rid);if(p.isNull(u)){D.error("获取data-oid或rid失败");return}l.info("用户的oid: "+u),P.goToUrl(oe.getUserSpaceDynamicUrl(u));},{capture:!0});},coverReferenceJump(){l.info("覆盖引用的点击事件"),h.on(document,"click",y.className.dynamic+" .dyn-content .reference .dyn-orig-author",function(e){p.preventEvent(e);let u=e.target.getAttribute("data-url");if(!u){D.error("获取data-url失败");return}P.goToUrl(u);},{capture:!0}),h.on(document,"click",y.className.dynamic+" .dyn-content .reference .dyn-archive",function(e){var r;p.preventEvent(e);let t=e.target,u=x.getVue(t);if(!u){D.error("获取vue属性失败");return}let i=(r=u==null?void 0:u.data)==null?void 0:r.jump_url;if(p.isNull(i)){D.error("获取jump_url失败");return}P.goToUrl(i);},{capture:!0});}},ve={$isHook:{windowPlayerAgent:!1,hookWebpackJsonp_openApp:!1,overRideLaunchAppBtn_Vue_openApp:!1,overRideBiliOpenApp:!1},$data:{setTimeout:[]},windowWebPack(e="webpackJsonp",t,u){let i;Je.Object.defineProperty(K,e,{get(){return i},set(r){l.success("成功劫持webpack，当前webpack名："+e),i=r;const a=i.push;i.push=function(...n){let o=n[0][0];return (t==o||Array.isArray(t)&&Array.isArray(o)&&JSON.stringify(t)===JSON.stringify(o))&&Object.keys(n[0][1]).forEach(s=>{let d=n[0][1][s];n[0][1][s]=function(...c){let f=d.call(this,...c);return c[0]=u(c[0]),f};}),a.call(this,...n)};}});},setTimeout(e){if(this.$data.setTimeout.push(e),this.$data.setTimeout.length>1){l.info("window.setTimeout hook新增劫持判断参数："+e);return}K.setTimeout=function(...t){let u=t[0].toString();if(u.match(e)){l.success("劫持setTimeout的函数",u);return}return Je.setTimeout.apply(this,t)};},overRideLaunchAppBtn_Vue_openApp(){if(this.$isHook.overRideLaunchAppBtn_Vue_openApp)return;this.$isHook.overRideLaunchAppBtn_Vue_openApp=!0;function e(t){typeof t.openApp!="function"||t.openApp.toString().includes("阻止唤醒App")||(t.openApp=function(...i){l.success("openApp：阻止唤醒App",i);});}p.mutationObserver(document,{config:{subtree:!0,childList:!0,attributes:!0},callback(){document.querySelectorAll(".launch-app-btn").forEach(t=>{let u=x.getVue(t);u&&(e(u),u.$children&&u.$children.length&&u.$children.forEach(i=>{e(i);}));});}});},overRideBiliOpenApp(){this.$isHook.overRideBiliOpenApp||(this.$isHook.overRideBiliOpenApp=!0,p.mutationObserver(document,{config:{subtree:!0,childList:!0,attributes:!0},callback(){document.querySelectorAll("bili-open-app").forEach(e=>{if(e.hasAttribute("data-inject-opener-open"))return;let t=Reflect.get(e,"opener");if(t==null)return;typeof(t==null?void 0:t.open)=="function"&&(Reflect.set(t,"open",i=>{l.success(`拦截bili-open-app.open跳转: ${JSON.stringify(i)}`);}),e.setAttribute("data-inject-opener-open","true"));});}}));}},Uu=`#app .m-head .m-recommend-view {\r
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
`;var zu=23442827791579n,qu=1n<<51n,st=58n,Hu="FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf";function Gu(e){const t=["B","V","1","0","0","0","0","0","0","0","0","0"];let u=t.length-1,i=(qu|BigInt(e))^zu;for(;i>0;)t[u]=Hu[Number(i%BigInt(st))],i=i/st,u-=1;return [t[3],t[9]]=[t[9],t[3]],[t[4],t[7]]=[t[7],t[4]],t.join("")}const ct=e=>(e.startsWith("http://")&&(e=e.replace(/^http/,"https")),e),ju={$flag:{isInitCSS:!1,isLoadingNextPage:!1},$data:{intersectionObserver:null,loadNums:0},$ele:{$listView:null,$videoListBox:null,$videoList:null,$cardBox:null,$listViewShim:null},$cardGoto:{av:"av",picture:"picture"},init(){this.setCSS(),h.ready(()=>{this.addRecommendTag();});},setCSS(){this.$flag.isInitCSS||(this.$flag.isInitCSS=!0,N(Uu));},reset(){l.info("重置状态"),this.$flag.isLoadingNextPage=!1,this.removeScrollEvent(),Object.keys(this.$ele).forEach(e=>{this.$ele[e]=null;});},addRecommendTag(){if(document.querySelector(".channel-menu a.recommend-tag"))return;let e=document.querySelector(".channel-menu .v-switcher");if(!e){l.error("添加推荐标签失败，原因：.channel-menu .v-switcher不存在"),D.error("添加推荐标签失败，原因：.channel-menu .v-switcher不存在");return}let t=h.createElement("a",{className:"v-switcher__header__tabs__item recommend-tag",innerHTML:"<span>推荐</span>"},{href:"javascript:;"}),u=h.createElement("div",{className:"m-recommend-view",innerHTML:`
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
            `});this.$ele.$listView=u.querySelector(".list-view"),this.$ele.$videoListBox=u.querySelector(".video-list-box"),this.$ele.$videoList=u.querySelector(".video-list"),this.$ele.$cardBox=u.querySelector(".card-box"),this.$ele.$listViewShim=u.querySelector(".list-view__shim"),this.$ele.$listViewShim.style.cssText="z-index:-1;user-select:none;pointer-events:none;background:transparent;left:0;bottom:0;width:100%;height:200px;";let i=document.querySelector("#app .m-head");i&&i.appendChild(u),h.on(t,"click",r=>{p.preventEvent(r),t.classList.add("is-avtive"),this.recommendClickEvent();}),h.on(e,"click",()=>{t.classList.remove("is-avtive");},{capture:!0}),h.on(this.$ele.$cardBox,"click",".v-card",r=>{p.preventEvent(r);let a=r.target;window.open(a.href,"_blank");}),h.before(e,t),this.setScrollEvent(),window.location.hash==="#/recommend/"&&(l.info("当前hash为推荐视频，出动触发"),t.click());},async recommendClickEvent(){P.goToUrl("#/recommend/",!0);},setScrollEvent(){l.success("推荐视频监听滚动: IntersectionObserver"),this.$data.intersectionObserver=new IntersectionObserver(async e=>{if(!this.$flag.isLoadingNextPage&&e[0].isIntersecting){this.$flag.isLoadingNextPage=!0;let t=await this.scrollEvent();this.$flag.isLoadingNextPage=!1,this.$data.loadNums<=1&&t?(h.hide(this.$ele.$listViewShim,!1),await p.sleep(500),h.show(this.$ele.$listViewShim,!1)):h.show(this.$ele.$listViewShim,!1);}},{threshold:0,rootMargin:"0px 0px 0px 0px"}),this.$data.intersectionObserver.observe(this.$ele.$listViewShim);},removeScrollEvent(){var e;(e=this.$data.intersectionObserver)==null||e.disconnect(),this.$data.intersectionObserver=null;},async scrollEvent(){let e=await this.getRecommendVideoInfo();if(!e)return !1;l.success("获取推荐视频信息",e);let t=document.createDocumentFragment(),u=m.getValue("bili-head-recommend-push-graphic");return e.forEach(i=>{let r=null;if(i.goto===this.$cardGoto.av)r=this.getRecommendItemAVElement(i);else if(i.goto===this.$cardGoto.picture)if(u)r=this.getRecommendItemPictureElement(i);else return;else {l.error("该goto暂未适配",i);return}t.appendChild(r);}),this.$ele.$cardBox.appendChild(t),this.$data.loadNums++,!0},async getRecommendVideoInfo(){var r;let e={appkey:ue.ios.appkey,access_key:((r=pe.getAccessTokenInfo())==null?void 0:r.access_token)||""},u=await U.get("https://app.bilibili.com/x/v2/feed/index"+"?"+p.toSearchParamsStr(e),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(!u.status)return;let i=p.toJSON(u.data.responseText);if(!Z.isWebApiSuccess(i)){D.error(i.message);return}return i.data.items},getRecommendItemPictureElement(e){let t=e.goto,u=e.param,i="/opus/"+u,r=e.args.up_name,a=e.title,n=ct(e.cover),o=e.cover_left_text_1,s=h.createElement("a",{className:"v-card",href:i,innerHTML:`
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
                            ${o}
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
                `},{"data-param":u,"data-title":a,"data-goto":t});return s["data-picture"]=e,s},getRecommendItemAVElement(e){var E;let t=e.goto,u=((E=e==null?void 0:e.player_args)==null?void 0:E.aid)||e.args.aid,r="/video/"+Gu(u),a=e.args.up_name,n=e.title,o=ct(e.cover),s=e.cover_left_text_1,d=e.cover_left_text_2,c=e.cover_right_text,f=h.createElement("a",{className:"v-card",href:r,innerHTML:`
                <div class="card">
                    <div class="bfs-img-wrap">
                        <div class="bfs-img b-img">
                            <picture class="b-img__inner">
                                <source type="image/webp" srcset="${o}">
                                <img src="${o}" alt="${n}">
                            </picture>
                        </div>
                    </div>
                    <div class="count">
                        <span>
                            <i class="iconfont icon_shipin_bofangshu"></i>
                            ${s}
                        </span>
                        <span>
                            <i class="iconfont icon_shipin_danmushu"></i>
                            ${d}
                        </span>
                        <span class="gm-video-duration">${c}</span>
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
                `},{"data-aid":u,"data-title":n,"data-goto":t});return f["data-video"]=e,f}},ze={$flag:{isInit_reconfigurationTinyAppSettingButton:!1,isInit_beautifyTopNavBar_css:!1},init(){m.execMenuOnce("bili-head-supplementaryVideoStreamingInformation",()=>{this.addVideoListUPInfo();}),m.execMenu("bili-head-recommend-enable",()=>{ju.init();});},addVideoListUPInfo(){l.info("添加视频列表UP主信息"),N(`
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
        `),p.waitNode(y.className.head+" .video-list .card-box").then(()=>{let e=new p.LockFunction(()=>{document.querySelectorAll(y.className.head+" .video-list .card-box .v-card").forEach(t=>{var a,n,o,s,d;let u=x.getVue(t),i=((n=(a=u==null?void 0:u.info)==null?void 0:a.author)==null?void 0:n.name)||((s=(o=u==null?void 0:u.info)==null?void 0:o.owner)==null?void 0:s.name),r=(d=u==null?void 0:u.info)==null?void 0:d.duration;if(i&&!t.querySelector(".gm-up-info")){let c=document.createElement("div");c.innerHTML=`
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
                                    </div>`,c.className="gm-up-info",t.appendChild(c);}if(r){let c=t.querySelector(".count");if(c&&!c.querySelector(".gm-video-duration")){let f=typeof r=="string"?r:P.parseDuration(r),E=document.createElement("span");E.className="gm-video-duration",E.innerHTML=f,c.appendChild(E);}}});},25);p.mutationObserver(document.body,{config:{subtree:!0,childList:!0,attributes:!0},callback(){e.run();}});});},async reconfigurationTinyAppSettingButton(){l.info("重构tinyApp右上角的设置按钮图标"),this.$flag.isInit_reconfigurationTinyAppSettingButton||(this.$flag.isInit_reconfigurationTinyAppSettingButton=!0,N(`
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
			`));let e=await p.waitNode(".nav-bar .icon-config",1e4);if(!e){l.error("未找到设置按钮图标，无法重构");return}e.outerHTML=`
		<div class="gm-face">
			<div class="gm-face-avatar">
				<img src="http://i0.hdslb.com/bfs/face/member/noface.jpg">
			</div>
		</div>
		`;let t=!1,u=null,i=document.querySelector(".gm-face"),r=i.querySelector("img");x.waitVuePropToSet("#app",[{check(a){var n,o,s,d;return typeof((d=(s=(o=(n=a==null?void 0:a.$store)==null?void 0:n.state)==null?void 0:o.common)==null?void 0:s.userInfo)==null?void 0:d.isLogin)=="boolean"},set(a){var o,s,d;let n=(d=(s=(o=a==null?void 0:a.$store)==null?void 0:o.state)==null?void 0:s.common)==null?void 0:d.userInfo;if(t=n==null?void 0:n.isLogin,t){if(u=n==null?void 0:n.mid,u==null){l.warn("当前是脚本设置的isLogin但其实未登录账号"),t=!1;return}n==null||n.uname,r.src=(n==null?void 0:n.face)||r.src;}else l.warn("经检测，Bilibili尚未登录账号");}}]),h.on(i,"click",a=>{if(p.preventEvent(a),t)if(u!=null){let n=oe.getUserSpaceUrl(u);P.goToUrl(n,!1);}else D.error("获取用户id失败");else P.goToLogin(window.location.href);});},beautifyTopNavBar(){l.info("美化顶部navbar"),this.$flag.isInit_beautifyTopNavBar_css||(this.$flag.isInit_beautifyTopNavBar_css=!0,N(`
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
			`)),p.waitNode(".m-head .m-navbar .icon-search",1e4).then(async e=>{if(!e||e.parentElement.querySelector(".gm-input-area"))return;let t=h.createElement("div",{className:"gm-input-area",innerHTML:`
						<i class="iconfont ic_search_tab"></i>
						<input type="search" placeholder="" readonly="" disabled="">
					`}),u=t.querySelector("input");h.on(t,"click",r=>{p.preventEvent(r),P.goToUrl("/search",!0);}),h.after(e,t);let i=await Mt.getSearchInputPlaceholder();i!=null&&(l.info("热点信息：",i),u.placeholder=i.show_name||i.name);});}},Ju={init(){this.removeAds(),m.onceExec("bili-pc-read-mobile-autoExpand",()=>this.autoExpand());},removeAds(){he.addBlockCSS("body>.h5-download-bar");},autoExpand(){return l.info("自动展开"),[N(`
			${Ke.className.read.mobile} .limit{
				overflow: unset !important;
				max-height: unset !important;
			}`),he.addBlockCSS(Ke.className.read.mobile+" .read-more")]}},Wu={init(){m.execMenuOnce("bili-space-repairRealJump",()=>{this.repairRealJump();}),m.execMenuOnce("bili-space-coverDynamicStateCardVideo",()=>{this.coverDynamicStateCardVideo();});},repairRealJump(){h.on(document,"click",e=>{let t=e.target,u=t.closest(".main .forwardingCard")||t.matches(".main .forwardingCard")&&t;if(u){p.preventEvent(e);let i=u.getAttribute("id");l.info(`获取的动态id为：${i}`);let r=oe.getUserSpaceDynamicUrl(i);P.goToUrl(r);}},{capture:!0});},coverDynamicStateCardVideo(){l.info("覆盖动态视频的点击事件"),h.on(document,"click",".card-content .main .wings",e=>{var a,n;let u=e.target.closest(".card");if(!u){D.error("未找到对应的.card元素");return}let i=x.getVue(u);if(!i){D.error("未找到对应的vue实例");return}let r=(n=(a=i==null?void 0:i.shareData)==null?void 0:a.default)==null?void 0:n.url;if(!r){D.error("未找到对应的url");return}P.goToUrl(r);},{capture:!0});}},Yu={init(){m.execMenu("bili-setLogin",()=>{this.setLogin();}),m.execMenu("bili-setIsClient",()=>{this.setIsClient();}),m.execMenu("bili-setTinyApp",()=>{this.setTinyApp(),h.ready(()=>{ze.reconfigurationTinyAppSettingButton().then(()=>{m.execMenu("bili-beautifyTopNavBar",()=>{ze.beautifyTopNavBar();});});});});},setLogin(){let e=new p.GM_Cookie,t=e.get("DedeUserID");t!=null?l.info("Cookie DedeUserID已存在：",t.value):e.set({name:"DedeUserID",value:"2333"},u=>{u?l.error(u):l.success("Cookie成功设置DedeUserID=>2333");}),x.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.noCallApp",check(u){var i,r,a;return typeof((a=(r=(i=u==null?void 0:u.$store)==null?void 0:i.state)==null?void 0:r.common)==null?void 0:a.noCallApp)=="boolean"},set(u){l.success("成功设置参数 $store.state.common.noCallApp=true"),u.$store.state.common.noCallApp=!0;}},{msg:"设置参数 $store.state.common.userInfo.isLogin",check(u){var i,r,a,n;return typeof((n=(a=(r=(i=u==null?void 0:u.$store)==null?void 0:i.state)==null?void 0:r.common)==null?void 0:a.userInfo)==null?void 0:n.isLogin)=="boolean"},set(u){l.success("成功设置参数 $store.state.common.userInfo.isLogin=true"),u.$store.state.common.userInfo.isLogin=!0;}},{msg:"设置参数 $store.state.loginInfo.isLogin",check(u){var i,r,a;return typeof((a=(r=(i=u==null?void 0:u.$store)==null?void 0:i.state)==null?void 0:r.loginInfo)==null?void 0:a.isLogin)=="boolean"},set(u){l.success("成功设置参数 $store.state.loginInfo.isLogin=true"),u.$store.state.loginInfo.isLogin=!0;}}]);},setIsClient(){x.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.video.isClient",check(e){var t,u,i;return typeof typeof((i=(u=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:u.video)==null?void 0:i.isClient)=="boolean"},set(e){l.success("成功设置参数 $store.state.video.isClient=true"),e.$store.state.video.isClient=!0;}},{msg:"设置参数 $store.state.opus.isClient=true",check(e){var t,u,i;return typeof((i=(u=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:u.opus)==null?void 0:i.isClient)=="boolean"},set(e){l.success("成功设置参数 $store.state.opus.isClient"),e.$store.state.opus.isClient=!0;}},{msg:"设置参数 $store.state.playlist.isClient",check(e){var t,u,i;return typeof((i=(u=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:u.playlist)==null?void 0:i.isClient)=="boolean"},set(e){l.success("成功设置参数 $store.state.playlist.isClient=true"),e.$store.state.playlist.isClient=!0;}},{msg:"设置参数 $store.state.ver.bili",check(e){var t,u,i;return typeof((i=(u=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:u.ver)==null?void 0:i.bili)=="boolean"},set(e){l.success("成功设置参数 $store.state.ver.bili=true"),e.$store.state.ver.bili=!0;}},{msg:"设置参数 $store.state.ver.biliVer",check(e){var t,u,i;return typeof((i=(u=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:u.ver)==null?void 0:i.biliVer)=="number"},set(e){l.success("成功设置参数 $store.state.ver.biliVer=2333333"),e.$store.state.ver.biliVer=2333333;}}]);},setTinyApp(){x.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.tinyApp",check(e){var t,u,i;return typeof((i=(u=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:u.common)==null?void 0:i.tinyApp)=="boolean"},set(e){e.$store.state.common.tinyApp=!0,l.success("成功设置参数 $store.state.common.tinyApp=true"),m.onceExec("bili-tinyApp-init-css",()=>{N(`
							.tiny-app .reply-input,.tiny-app .reply-item .info .name .right,.tiny-app .reply-item .info .toolbar,.tiny-app .sub-reply-input {
								display: block;
							}
						`);});}}]);}},dt={async space(e,t=""){let u=await U.get("https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/space",{data:{host_mid:e,offset:t},fetch:!0});if(!u.status)return;let i=p.toJSON(u.data.responseText);if(Z.isWebApiSuccess(i))return i.data},async following(e,t=1,u=50){let i=await U.get("https://api.bilibili.com/x/relation/followings",{data:{vmid:e,ps:u,pn:t},fetch:!0});if(!i.status)return;let r=p.toJSON(i.data.responseText);return Z.isWebApiSuccess(r)?r.data:r.message}},Ku={$data:{searchIcon:`
            <svg viewBox="0 0 24 24" fill="none">
                <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        `},init(){Ce.init(),N(`
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
				margin: 0 0 0 6px;
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
        `),h.ready(()=>{let e=new p.LockFunction(async()=>{Pe(".reply-item:not([data-is-inject-search-label])").forEach(t=>{t.setAttribute("data-is-inject-search-label","");let u=t.querySelector(".info .floor-time"),{$container:i,$compositionNameControl:r}=this.createSearchButton(()=>{let a=x.getVue(t);if(!a)throw new TypeError("获取vue属性失败");let n=a.info.mid;if(n==null)throw new TypeError("获取mid失败");return n});h.after(u,i);}),Pe(".reply-item .member-link[data-url]:not([data-is-inject-search-label])").forEach(t=>{t.setAttribute("data-is-inject-search-label","");let{$container:u,$compositionNameControl:i}=this.createSearchButton(()=>{var n;let a=(n=t.getAttribute("data-url").match(/space.bilibili.com\/([\d]+)/i))==null?void 0:n[1];if(a==null)throw new TypeError("获取mid失败");return a});h.after(t,u);}),Pe(".m-space-info .base:not([data-is-inject-search-label])").forEach(t=>{t.setAttribute("data-is-inject-search-label","");let u=t.closest(".m-space-info"),{$container:i}=this.createSearchButton(()=>{let r=x.getVue(u);if(!r)throw new TypeError("获取vue属性失败");let a=r.info.mid;if(a==null)throw new TypeError("获取mid失败");return a});h.after(t,i);});});p.mutationObserver(document,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{e.run();}});});},async queryUserInfo(e){let t=1,u=[];for(;;){l.info(`正在获取用户的关注：${e} ==> 第${t}页`);let o=await dt.following(e,t);if(!o){l.error("获取关注列表失败");break}if(typeof o=="string"){l.error("获取关注列表失败，原因："+o);break}if(!o.list.length||(u=u.concat(o.list),o.list.length===o.total&&t===1))break;t++,p.sleep(250);}let i="",r=1,a=[];for(;;){l.info(`正在获取用户的空间动态：${e} ==> 偏移：${i}`);let o=await dt.space(e,i);if(!o){l.error("获取用户空间动态数据失败");break}if(typeof o=="string"){l.error("获取用户空间动态数据失败，原因："+o);break}if(i===o.offset&&i!=""||(i=o.offset,a=a.concat(o.items),!o.has_more))break;if(r++,r>5){l.info("最多请求5页空间动态的数据");break}p.sleep(250);}let n={following:[],space:[]};return u.forEach(o=>{n.following.push({name:o.uname,mid:o.mid,sign:o.sign});}),a.forEach(o=>{var s,d,c,f,E,b,A,w,S,k,F,g,B,q,T;if(o.orig==null){let M={title:(d=(s=o.modules.module_dynamic.major)==null?void 0:s.archive)==null?void 0:d.title,desc:((f=(c=o.modules.module_dynamic.major)==null?void 0:c.archive)==null?void 0:f.desc)||((E=o.modules.module_dynamic.desc)==null?void 0:E.text),pub_ts:o.modules.module_author.pub_ts*1e3,id_str:o.id_str};n.space.push({contentInfo:M});}else {let M={title:null,desc:(b=o.modules.module_dynamic.desc)==null?void 0:b.text,pub_ts:o.modules.module_author.pub_ts*1e3,id_str:o.id_str},ee={mid:o.orig.modules.module_author.mid,name:o.orig.modules.module_author.name,title:((S=(w=(A=o.orig.modules.module_dynamic)==null?void 0:A.major)==null?void 0:w.archive)==null?void 0:S.title)||null,desc:((k=o.orig.modules.module_dynamic.desc)==null?void 0:k.text)??((B=(g=(F=o.orig.modules.module_dynamic)==null?void 0:F.major)==null?void 0:g.archive)==null?void 0:B.desc),pub_ts:o.orig.modules.module_author.pub_ts*1e3,id_str:o.orig.id_str};typeof ee.desc=="string"&&Array.isArray((T=(q=o.orig.modules.module_dynamic)==null?void 0:q.desc)==null?void 0:T.rich_text_nodes)&&o.orig.modules.module_dynamic.desc.rich_text_nodes.forEach(G=>{var R;G.type==="RICH_TEXT_NODE_TYPE_AT"&&(ee.desc=(R=ee.desc)==null?void 0:R.replace(G.text,""));}),n.space.push({contentInfo:M,forwardInfo:ee});}}),n},createSearchButton(e){let t=h.createElement("div",{className:"composition-checkable",innerHTML:`
                <div class="composition-badge-control">
                    <span class="composition-name-control">
                        ${this.$data.searchIcon}
                    </span>
                </div>
            `}),u=t.querySelector(".composition-name-control");return h.on(t,"click",async i=>{if(p.preventEvent(i),t.hasAttribute("data-is-searching")){l.error("正在搜索中，请稍后再试");return}t.setAttribute("data-is-searching",""),h.html(u,"...");try{let r=e();this.clearLabel(t);let a=await this.queryUserInfo(r);this.handleShowLabel(r,a,t),h.html(u,this.$data.searchIcon);}catch(r){l.error(r),D.error(r.message,{timeout:3500}),h.html(u,"重试");}finally{t.removeAttribute("data-is-searching");}}),{$container:t,$compositionNameControl:u}},createLabel(e){let t=h.createElement("div",{className:"composition-checked",innerHTML:`
				<div class="composition-badge">
				</div>
			`}),u=t.querySelector(".composition-badge");if(e.rule.data.isShowDisplayName){let i=h.createElement("span",{className:"composition-name",innerHTML:e.rule.data.displayName});h.append(u,i);}if(e.rule.data.isShowDisplayIcon){let i=null;e.rule.data.displayIcon.startsWith("http")?i=h.createElement("img",{className:"composition-icon",src:e.rule.data.displayIcon},{referrer:"no-referrer",referrerPolicy:"no-referrer"}):i=h.createElement("span",{className:"composition-icon",innerHTML:e.rule.data.displayIcon}),h.append(u,i);}return h.on(u,"click",i=>{p.preventEvent(i),I.alert({title:{text:"识别信息",html:!1,position:"center"},content:{text:`
						${e.matchedInfoList.map(r=>{let a=h.createElement("div",{className:"reason-container",innerHTML:`
										<div class="reason-text"><span>原因：</span>${r.reason}</div>
										<div class="reason-text"><span>匹配：</span>${typeof r.reasonLink=="string"?`
											<a href="${r.reasonLink}" target="_blank">${r.reasonText}</a>
										`:r.reasonText}</div>
									`});if(typeof r.reasonTime=="number"){let n=h.createElement("div",{className:"reason-text",innerHTML:`
										<span>时间：</span>${p.formatTime(r.reasonTime)}
										`});h.append(a,n);}return a.outerHTML}).join(`
`)}
					`,html:!0},btn:{ok:{enable:!1}},mask:{enable:!0,clickEvent:{toClose:!0}},width:me.setting.width,height:me.setting.height,style:`
					.reason-container{
						color: #7367F0;
						margin: 10px 10px;
					}
				`});}),t},clearLabel(e){var t;for(;;){let u=h.prev(e);if(!u)break;if((t=u==null?void 0:u.classList)!=null&&t.contains("composition-checked"))u.remove();else break}},handleShowLabel(e,t,u){if(e=e.toString(),Ce.$data.whiteList.includes(e))return;let i=[],r=(a,n)=>{let o=i.find(s=>s.rule===a);o?o.matchedInfoList.push(n):i.push({rule:a,matchedInfoList:[n]});};Ce.$data.ruleData.forEach(a=>{if(Array.isArray(a.data.blacklist)&&a.data.blacklist.find(n=>n.toString()===e)){r(a,{reason:"黑名单用户",reasonText:e,reasonLink:oe.getUserSpaceUrl(e),reasonTime:null});return}if(Array.isArray(a.data.followings)){let n="关注列表",o="";a.data.followings.some(d=>{let c=t.following.some(f=>f.mid.toString()===d.toString());return c&&(o=d.toString()),c})&&r(a,{reason:n,reasonText:o,reasonLink:oe.getUserSpaceUrl(o),reasonTime:null});}Array.isArray(a.data.keywords)&&a.data.keywords.forEach(n=>{var o,s;for(let d=0;d<t.space.length;d++){const c=t.space[d];let f="",E=n,b=`/opus/${c.contentInfo.id_str}`,A=c.contentInfo.pub_ts;c.forwardInfo==null?typeof c.contentInfo.desc=="string"&&c.contentInfo.desc.match(n)&&(f="空间动态内容"):typeof c.contentInfo.desc=="string"&&c.contentInfo.desc.match(n)?f="空间动态转发":typeof((o=c.forwardInfo)==null?void 0:o.title)=="string"&&c.forwardInfo.title.match(n)?f="空间动态视频标题":typeof((s=c.forwardInfo)==null?void 0:s.desc)=="string"&&c.forwardInfo.desc.match(n)&&(f="空间动态视频简介"),f!==""&&r(a,{reason:f,reasonText:E,reasonLink:b,reasonTime:A});}});}),p.sortListByProperty(i,a=>a.matchedInfoList.length,!0),i.forEach(a=>{let n=this.createLabel(a);h.before(u,n);});}},Ot={init(){Yu.init(),m.execMenuOnce("bili-allowCopy",()=>N(`
				.v-drawer{
					-webkit-user-select: unset !important;
					-moz-user-select: unset !important;
					user-select: unset !important;
				}
			`)),m.onceExec("listenRouterChange",()=>{this.listenRouterChange();}),m.execMenuOnce("bili-hookSetTimeout_autoOpenApp",()=>{l.info("hook  window.setTimeout autoOpenApp"),ve.setTimeout("autoOpenApp"),ve.setTimeout("bilibili://"),ve.setTimeout("void 0 !== y && document[y]");}),m.execMenuOnce("bili-overrideLaunchAppBtn_Vue_openApp",()=>{l.info("覆盖元素.launch-app-btn上的openApp"),ve.overRideLaunchAppBtn_Vue_openApp();}),m.execMenuOnce("bili-cover-bili-open-app-open",()=>{l.info("覆盖元素bili-open-app上的opener.open"),ve.overRideBiliOpenApp();}),m.execMenuOnce("bili-head-beautify",()=>(l.info("添加美化CSS"),N(pu))),m.execMenuOnce("bili-componentDetection",()=>{Ku.init();}),O.isVideo()?(l.info("Router: 视频稿件"),Bu.init()):O.isOpus()?(l.info("Router: 专栏稿件"),Ou.init()):iu.isReadMobile()?(l.info("PC-Router: 专栏稿件"),Ju.init()):O.isDynamic()?(l.info("Router: 动态"),Iu.init()):O.isBangumi()?(l.info("Router: 番剧"),ye.init()):O.isSearch()?(l.info("Router: 搜索"),Pu.init()):O.isLive()?(l.info("Router: 直播"),Lu.init()):O.isTopicDetail()?l.info("Router: 话题"):O.isHead()?(l.info("Router: 首页之类的"),ze.init()):O.isSpace()?(l.info("Router: 个人空间"),Wu.init()):l.error("该Router暂未适配，可能是首页之类："+window.location.href),h.ready(()=>{m.execMenu("common_auto_delete_cookie_buvid3",()=>{let e=0,t=setInterval(()=>{if(e++,e>10){clearInterval(t);return}qe.delete({name:"buvid3",firstPartyDomain:".bilibili.com"},u=>{u?l.error("删除buvid3失败",u):l.success("删除buvid3成功");});},1e3);});});},listenRouterChange(){p.waitNode("#app").then(e=>{let t=function(u){var i;return typeof((i=u==null?void 0:u.$router)==null?void 0:i.afterEach)=="function"};p.waitVueByInterval(e,t).then(()=>{let u=x.getVue(e);u!=null&&t(u)&&(l.success("成功设置监听路由变化"),e.__vue__.$router.beforeEach((i,r,a)=>{if(l.info("路由变化 => 更新前",{to:i,from:r}),i.hash==="#/seeCommentReply"||r.hash==="#/seeCommentReply"){l.info("该路由变化判定为#/seeCommentReply"),a();return}if(m.getValue("bili-repairVueRouter404")&&i.name==="space"){window.location.href=i.fullPath;return}if(i.fullPath.startsWith("/video")){if(r.fullPath.startsWith("/video")&&m.getValue("bili-video-forceThisPageToRefreshAndRedirect")){window.location.href=i.fullPath;return}else if(O.isHead()&&m.getValue("bili-head-openVideoInNewTab")){window.open(i.fullPath,"_blank");return}else if(m.getValue("bili-video-enableArtPlayer")){window.location.href=i.fullPath;return}}else if(i.fullPath.startsWith("/bangumi")){if(r.fullPath.startsWith("/bangumi")){window.location.href=i.fullPath;return}else if(O.isHead()&&m.getValue("bili-head-openVideoInNewTab")){window.open(i.fullPath,"_blank");return}}a();}),e.__vue__.$router.afterEach((i,r)=>{if(l.info("路由变化 => 更新后",{to:i,from:r}),i.hash==="#/seeCommentReply"||r.hash==="#/seeCommentReply"){l.info("该路由变化判定为#/seeCommentReply，不重载");return}m.execMenu("bili-listenRouterChange",()=>{Ot.init();});}));});});}};m.init();Ot.init();I.config.cssText.index+=`
/* bilibili颜色 #FB7299 */
.pops{
    --bili-color: #FB7299;
    --bili-color-rgb: 251, 114, 153;
}
`;I.config.cssText.panelCSS+=`

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

})(Qmsg, Utils, DOMUtils, pops, MD5, Artplayer, artplayerPluginDanmuku, MD5);