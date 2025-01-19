// ==UserScript==
// @name         【移动端】bilibili优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.1.19
// @author       WhiteSevs
// @description  阻止跳转App、App端推荐视频流、解锁视频画质(番剧解锁需配合其它插件)、美化显示、去广告等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAACjBJREFUeF7tnX+MHGUZx7/PbFsr3O3eNWBTaQu1RhNQEv7CBKNtQsBQTRDSJiYabNBaerP2bmcL8pcHiZH2du6u7Fx/SCmESGLQSP+QQk0aMAElMTGmsURQCQSLqcG7222ttb2dR8a700u7e/u+8850d2ae/Xee55nn+T6ffWd29p33Jcgn0wpQpquX4iEAZBwCAUAAyLgCGS9fRgABIOMKZLx8GQEEgIwrkPHyZQQQADKuQMbLlxFAAMi4Ahkvv+MjwJQ9MpyDtQ6gtT7xn5n9U/3eruE09qUba+0oALXi6DEw39Gk2Uct4l291fIbaQDhTLFyo880AuCuS+sh4GTecz7TqTo7BkDddv/AwE2tCg+EIeItSYcgaD4zPbdYrSD6ZaFaurMTEHQEgGAotGB9v13BSYdAqflzIvjwH+nEpa8jAEwX3SeI8a12AATHkwqBTvPn6nwm7zn3qWgSpU1HAKjboy8zeINqIUmDQLf5swDQK3mvtFFVk6jsOgKAzggwX2hSIAjT/MyNAKr3AM3umLv5xjBs84M6M3UPEBRcs90Xmv0saje0detIYNJ8AEcLnrOpXe1xHO/IJSAoxESwboMgybV0DIC0QJDk5s/de8QxsKjHTLKASc59wc21erPiskyikEnMuVn/OnoJWJhQkgRNUq7tvrRdA0BS7gnS1PyuuAe4lNBuFribc2v3TW91vKtGgPkku1HobswpbNMX+nUlAN12OUhr87vyEtBtN4Zpbv4VAWDadjdbwGYG1oOxAoQVAPJRDF8pjFEHYxKESYDfAvBMwSu/GGedsVwCzu4cv7nhN7YRcA8zVsVZQNpjM/AeAUdyudyhnr2DJ6KuN1IApgYq1xORbQE2A8ujTjbL8Qg47wMeM3v9E+V3o9IiMgBqtvt1ABUAK6NKTuI0VeA0QI8WvNK+KPSJBIBaccQGW9UoEpIYagoQ4XC+6tyvZt3ayhiAsP/rmyYu/v+dR3a8UHVuN9HCCICa7R4D0Gxev0lO4qungFfwnKKey/+tQwNQH3APMOE7YU8sftEpYDKdLBQAZ+zR7T54f3QlSCRTBSzQA71e6YBuHG0A/r5juGe51fv6om+66GYh9sYKBNPkzvtnPvexfcNndYJpAzBtV75HoB/qnGShbfBgwwL9Jax/mv2YeS0InwhbI4Mf7vPKj+n4awEwue2xgrVs6UkCrtM5CYDXCNiTW2L99urxob9p+mbKfGpwrC/n+zfCpx/ovDwTiMTAKTQufLZv/8NTqqJpAVArjmwCW79QDT6bFD/U55X36PiI7awCZ4rumM8Y1NGDgS19nvNTVR8tAOq2u5uBB1WD+8Tl/mrZVbUXu8sVCP5MI+A5VW0I9KO8V1L+daYFQG2g8kcQfVolGSYc6qs631axFZvFFajZbvCU1VbU6e2C56xXtFVfLJqHn1pe/2DyX6qBeam1vm9s6G1Ve7FrrcC5He6aCxbeIKBHRaf8NSs+SsNbz6vYKo8A/xwcWzUz47+vErSTrzop5pc4s7rt/oqBL6gkvmSJ9XHVm21lAOaWOTmpkgATtvdVnYMqtmKjpoDODaFFfJPqyirKANTtsdsY/qsq6frwN/Z7u15RsRUbNQWm7MrdFuh5FWuC9fm8N/Samq2KFYApe2SDBetlFXMBQEUlPZu49FceAeJKQE+G7FrHpb8AkBCmBICENCquNAWAuJRNSFwBICGNiitNASAuZRMSN9MAnCs+vnrG//caEE31XtU4RXseOtONfftH8fH8MlxY7fvce7GR++s1B0qnosozkwAEj58bDT7IzF9ZKKTJHLioGnJpnLrtlhkIFoRe8KHfUM7amt87+KbpeTMHwFTRvcVi/K6VcAw82ec5SsvNmorfzn/adg8R0HKOvj9jres/MPROuziLHc8UAO9vG77q6mU9JwBq87cmf6nglYOp6R371OzKnQC9tGgCjF/nr12zkYa3XAibaKYAmNrhftOy8FQ7sYjxdH7C2drOLs7jdXv0IIO3tTsHgx/o88ras3bn42YKAOW1hBnvFCacde3Ej/N4zXb/BOCTCuf4ccFzvqFg19QkUwDorCZe8Bzlx9lhxV/Mr2a7rBLXdDVwAaCFygLA5cLo/Bur/O2Ji8BmfZUR4HJV4tJfAFAZvxexkUtAE3F0hiAZAdQIlBFA7gFimZEllwC1L2BLK7kEyCVAfgZeyoDcA1z+rZDnABpDrfwMlJ+ByvsKyoOgFD4Imrbd3aT0FjL9vuCVbtEYXCI3rdmjrwN8a/vAvK/glQfa2zW3yNTPwGnbvZeAn7UTyyKM91adoXZ2cR6vD4xWmNhpew72v1aY2PWTtnYtDDIFQKBB3XafZ+DuxQS7OEOro5x2FaY5Su9MMp4tTDjBSqqhP5kDYO5t5GBOQKtt1Yc/vP4/ElrRCB3b7IR6LJfL3dezd/C0ySkzB8C8WHV79H6Av8zABoDeJMarZPmHVd9+NRFdx/eD7aPXfWQpl32mDQCvBXCMQMfzXulJnTitbDMLQBTipSGGAJCGLhrUIAAYiJcGVwEgDV00qEEAMBAvDa4CQBq6aFCDAGAgXhpcBYA0dNGgBgHAQLw0uAoAaeiiQQ0CgIF4aXAVANLQRYMaBAAD8dLg2nEAdJaKBWNTYcI5mgbhu6UGHQBiWSpWaeLD/9TiUsErj3WLeGnIo1Z0vwvGXpVaYlksWme5+A/3FHoi7zltF01QKUZsZhXQmSkdy3LxOhtGENGJRo6+2D8+NC0NNFegPuB+ignKC03FsmFEUIbOljEE+nneK91rXr5EmLYr+wm0XVGJeLaMmR2GNDeNAn+13ysfUUxczJooUCuO2mBW3pk93k2jQmwb5/vY2r/PeVq6q6/AtF15kEC7dTxj3TYu7MaRwWpePuHoxXMzL117uDtX+dQROU7bszvHV/qNxq1z2/PdpnOu2DeODJIx3To2eElSp6gs2TLzDSDcELbm2LeODRKTzaPDtidevyu2eXRQhmwfH28zw0S/YtvHzydXH3APMEF5i9IwRYmPmgImi2crLxHTLJWa7Qbr9N6hlqZYxaSAV/CcYtjYRgAEJ63Z7gsA7gqbgPgZKEA4Xqg6txtEUN87eLGT1IojNthSflhhkrD4zipAhMP5qtNyiXpVnYxHgPkT1Ww3eP25AmCl6snFLpQCpwF6tOCV9oXyvsQpMgCCuFMDleuJyLYAm4HlUSQoMea+8cB5H/CY2eufKL8blS6RAjCf1Nmd4zc3/MY2Au5hxqqoks1iHAbeI+BILpc71LN38ETUGsQCwMIkp213swVsZmA9GCtAWAEgH3UhKYlXB2MShEmA3wLwTMErvxhnbbEDEGfyEttcAQHAXMNERxAAEt0+8+QFAHMNEx1BAEh0+8yTFwDMNUx0BAEg0e0zT14AMNcw0REEgES3zzx5AcBcw0RHEAAS3T7z5AUAcw0THUEASHT7zJMXAMw1THQEASDR7TNPXgAw1zDREf4DSPKG2yZqlokAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://m.bilibili.com/*
// @match        *://live.bilibili.com/*
// @match        *://www.bilibili.com/read/*
// @match        *://www.bilibili.com/h5/comment/*
// @require      https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/497907/1413262/QRCodeJS.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.5.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.4.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.9.7/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/md5@2.3.0/dist/md5.min.js
// @require      https://fastly.jsdelivr.net/npm/flv.js@1.6.2/dist/flv.js
// @require      https://fastly.jsdelivr.net/npm/artplayer@5.2.2/dist/artplayer.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/ArtPlayer@aca6fb3795ea03b9614cd32613e2588e60470524/packages/artplayer-plugin-danmuku/dist/artplayer-plugin-danmuku.js
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

(function (B, Be, zt, Ne, Ht, ze, pt, Le) {
	'use strict';

	var It=Object.defineProperty;var qt=(e,t,u)=>t in e?It(e,t,{enumerable:true,configurable:true,writable:true,value:u}):e[t]=u;var Q=(e,t,u)=>qt(e,typeof t!="symbol"?t+"":t,u);var jt=typeof GM_deleteValue<"u"?GM_deleteValue:undefined,Ge=typeof GM_getResourceText<"u"?GM_getResourceText:undefined,le=typeof GM_getValue<"u"?GM_getValue:undefined,_e=typeof GM_info<"u"?GM_info:undefined,Gt=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:undefined,Ee=typeof GM_setValue<"u"?GM_setValue:undefined,Wt=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:undefined,Jt=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:undefined,G=typeof unsafeWindow<"u"?unsafeWindow:undefined,mt=window;const Yt={$data:{get enable(){return h.getValue("httpx-use-cookie-enable")},get useDocumentCookie(){return h.getValue("httpx-use-document-cookie")},cookieRule:[{key:"httpx-cookie-bilibili.com",hostname:/bilibili.com/g}]},fixCookieSplit(e){return p.isNotNull(e)&&!e.trim().endsWith(";")&&(e+=";"),e},concatCookie(e,t){return p.isNull(e)?t:(e=e.trim(),t=t.trim(),e=this.fixCookieSplit(e),t.startsWith(";")&&(t=t.substring(1)),e.concat(t))},handle(e){if(e.fetch||!this.$data.enable)return;let t="",u=e.url;u.startsWith("//")&&(u=window.location.protocol+u);let i=new URL(u);this.$data.useDocumentCookie&&i.hostname.endsWith(window.location.hostname.split(".").slice(-2).join("."))&&(t=this.concatCookie(t,document.cookie.trim()));for(let a=0;a<this.$data.cookieRule.length;a++){let r=this.$data.cookieRule[a];if(i.hostname.match(r.hostname)){let n=h.getValue(r.key);if(p.isNull(n))break;t=this.concatCookie(t,n);}}p.isNotNull(t)&&(e.headers&&e.headers.Cookie?e.headers.Cookie=this.concatCookie(e.headers.Cookie,t):e.headers.Cookie=t,o.info("Httpx => 设置cookie:",e)),e.headers&&e.headers.Cookie!=null&&p.isNull(e.headers.Cookie)&&delete e.headers.Cookie;}},Qt="【移动端】bilibili优化",p=Be.noConflict(),f=zt.noConflict(),U=Ne,We=mt.QRCode||G.QRCode,o=new p.Log(_e,G.console||mt.console);var dt;const Je=((dt=_e==null?undefined:_e.script)==null?undefined:dt.name)||Qt,ft=new p.GM_Cookie,ht=false;o.config({debug:ht,logMaxCount:1e3,autoClearConsole:true,tag:true});B.config(Object.defineProperties({html:true,autoClose:true,showClose:false},{position:{get(){return h.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return h.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return h.getValue("qmsg-config-showreverse",true)}},zIndex:{get(){let e=Be.getMaxZIndex(),t=Ne.config.InstanceUtils.getPopsMaxZIndex().zIndex;return Be.getMaxValue(e,t)+100}}}));const Kt=new p.GM_Menu({GM_getValue:le,GM_setValue:Ee,GM_registerMenuCommand:Gt,GM_unregisterMenuCommand:Wt}),I=new p.Httpx(Jt);I.interceptors.request.use(e=>(Yt.handle(e),e));I.interceptors.response.use(undefined,e=>(o.error("拦截器-请求错误",e),e.type==="onabort"?B.warning("请求取消"):e.type==="onerror"?B.error("请求异常"):e.type==="ontimeout"?B.error("请求超时"):B.error("其它错误"),e));I.config({logDetails:ht});const Ye={Object:{defineProperty:G.Object.defineProperty},Function:{apply:G.Function.prototype.apply,call:G.Function.prototype.call},Element:{appendChild:G.Element.prototype.appendChild},setTimeout:G.setTimeout},N=p.addStyle.bind(p),z=document.querySelector.bind(document),ge=document.querySelectorAll.bind(document);Ne.GlobalConfig.setGlobalConfig({mask:{enable:true,clickEvent:{toClose:true}},zIndex(){let e=Be.getMaxZIndex(),t=Ne.config.InstanceUtils.getPopsMaxZIndex().zIndex;return Be.getMaxValue(e,t)+100}});const pe="GM_Panel",Zt="data-init",se="data-key",ce="data-default-value",Xt="data-init-more-value",V="data-storage-api",E=function(e,t,u,i,a,r){let n={text:e,type:"switch",description:a,attributes:{},props:{},getValue(){return !!this.props[V].get(t,u)},callback(l,s){let d=!!s;o.success(`${d?"开启":"关闭"} ${e}`),this.props[V].set(t,d);},afterAddToUListCallBack:r};return Reflect.set(n.attributes,se,t),Reflect.set(n.attributes,ce,u),Reflect.set(n.props,V,{get(l,s){return h.getValue(l,s)},set(l,s){h.setValue(l,s);}}),n},Te=function(e,t,u,i,a,r="",n){let l={text:e,type:"textarea",attributes:{},props:{},description:i,placeholder:r,disabled:n,getValue(){let s=this.props[V].get(t,u);return Array.isArray(s)?s.join(`
`):s},callback(s,d){this.props[V].set(t,d);}};return Reflect.set(l.attributes,se,t),Reflect.set(l.attributes,ce,u),Reflect.set(l.props,V,{get(s,d){return h.getValue(s,d)},set(s,d){h.setValue(s,d);}}),l},we=function(e,t,u,i,a,r){let n=[];typeof i=="function"?n=i():n=i;let l={text:e,type:"select",description:r,attributes:{},props:{},getValue(){return this.props[V].get(t,u)},callback(s,d,c){let m=d;o.info(`选择：${c}`),this.props[V].set(t,m),typeof a=="function"&&a(s,m,c);},data:n};return Reflect.set(l.attributes,se,t),Reflect.set(l.attributes,ce,u),Reflect.set(l.props,V,{get(s,d){return h.getValue(s,d)},set(s,d){h.setValue(s,d);}}),l},ee=function(e,t,u,i,a,r="",n,l){let s={text:e,type:"input",isNumber:!!n,isPassword:!!l,props:{},attributes:{},description:i,getValue(){return this.props[V].get(t,u)},callback(d,c){typeof a=="function"&&a(d,c)||this.props[V].set(t,c);},placeholder:r};return Reflect.set(s.attributes,se,t),Reflect.set(s.attributes,ce,u),Reflect.set(s.props,V,{get(d,c){return h.getValue(d,c)},set(d,c){h.setValue(d,c);}}),s},ie={tv:{appkey:"4409e2ce8ffd12b8",appsec:"59b43e04ad6965f34319062b478f83dd",mobi_app:"android_tv_yst"},ios:{appkey:"27eb53fc9058f8c3",appsec:"c2ed53a74eeefe3cf99fbd01d8c9c375",mobi_app:"ipnone"}};function Qe(e,t,u){e.appkey=t;const i=new URLSearchParams(e);return i.sort(),Ht(i.toString()+u)}const te={isWebApiSuccess(e){return (e==null?undefined:e.code)===0&&((e==null?undefined:e.message)==="0"||(e==null?undefined:e.message)==="success")},isAreaLimit(e){let t={6002003:"抱歉您所在地区不可观看！"},u=false;return Object.keys(t).forEach(i=>{let a=t[i];(e.code.toString()===i.toString()||e.message.includes(a))&&(u=true);}),u}},Ke={async getQrCodeInfo(){var n;let e="https://passport.bilibili.com/x/passport-tv-login/qrcode/auth_code",t={appkey:ie.ios.appkey,local_id:"0",ts:"0",mobi_app:ie.ios.mobi_app,csrf:((n=ft.get("bili_jct"))==null?undefined:n.value)||""},u=Qe(t,ie.ios.appkey,ie.ios.appsec),i=await I.post(e,{data:p.toSearchParamsStr({...t,sign:u}),headers:{"Content-Type":"application/x-www-form-urlencoded"},responseType:"json",fetch:true});if(o.info(i),!i.status)return;let a=p.toJSON(i.data.responseText);if(a.code!==0){B.error(a.message);return}return a.data},async poll(e){let t="https://passport.bilibili.com/x/passport-tv-login/qrcode/poll",u={appkey:ie.ios.appkey,auth_code:e,local_id:"0",ts:"0"},i=Qe(u,ie.ios.appkey,ie.ios.appsec),a=await I.post(t,{data:p.toSearchParamsStr({...u,sign:i}),headers:{"Content-Type":"application/x-www-form-urlencoded"},responseType:"json",fetch:true});if(!a.status)return {success:false,message:"网络错误",action:undefined};const r=p.toJSON(a.data.responseText);o.info(r);const n={0:"成功","-3":"API校验密匙错误","-400":"请求错误","-404":"啥都木有",86038:"二维码已失效",86039:"二维码尚未确认",86090:"二维码已扫码未确认"};if(!te.isWebApiSuccess(r)){const d=r.code.toString(),c=r.message||n[d]||"未知错误";return d==="86038"?{success:false,message:c,action:"refresh"}:d==="86039"||d==="86090"?{success:false,message:c,action:"wait"}:{success:false,message:c,action:undefined}}const l=r.data.access_token,s=Date.now()+r.data.expires_in*1e3;return {success:true,message:"获取成功",accessKey:l,accessKeyExpireAt:s}}},Ce={async init(){B.info("正在申请二维码...");let e=await this.getQRCodeInfo();e&&this.confirmScanQrcode(e);},getQRCodeInfo:async function(){o.info("正在申请二维码...");let e=await Ke.getQrCodeInfo();return o.info("获取到二维码信息",e),e},async confirmScanQrcode(e){let t=U.alert({title:{text:"请扫描二维码登录",position:"center",html:false,style:""},content:{text:'<div id="bili-qrcode-canvas"></div>',html:true},btn:{ok:{enable:false},close:{enable:true,callback(r){a=true,r.close();}}},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},only:true,width:"310px",height:"365px",drag:true,dragLimit:true,style:`
            #bili-qrcode-canvas{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
            }
            `}),u=t.$shadowRoot.querySelector("#bili-qrcode-canvas"),i=new We(u,{text:e.url,width:300,height:300,colorDark:"#000000",colorLight:"#ffffff",correctLevel:We.CorrectLevel.H}),a=false;for(;;){if(a){o.error("用户关闭扫码登录弹窗、取消扫码登录");break}o.info("正在等待扫码登录...");let r=await Ke.poll(e.auth_code);if(r!=null&&r.success){this.setAccessTokenInfo({access_token:r.accessKey,expireAt:r.accessKeyExpireAt}),o.info("扫码登录成功",r),B.success("扫码登录成功");break}else if((r==null?undefined:r.action)==="refresh"){o.info("刷新二维码"),B.info("刷新二维码");let n=await this.getQRCodeInfo();n&&(i.clear(),i.makeCode(n.url));}else if(r.action==="wait")r.message==="二维码已扫码未确认"&&(o.info("已扫码，等待确认..."),U.loading({parent:u,content:{text:"已扫码，等待确认"},mask:{enable:true}}));else {o.error(r.message),B.error(r.message);break}await p.sleep(1500);}t.close();},generateExpireAt(e=6){return new Date().getTime()+1e3*60*60*24*30*e},setAccessTokenInfo(e){Ee("bili-accessTokenInfo",e);},getAccessTokenInfo(){let e=le("bili-accessTokenInfo");return e&&e.expireAt>Date.now()?e:null},getAccessToken(){var e;return ((e=this.getAccessTokenInfo())==null?undefined:e.access_token)||""}},Pe=function(e,t,u,i,a,r,n,l,s){return {text:e,type:"button",description:t,buttonIcon:i,buttonIsRightIcon:a,buttonIconIsLoading:r,buttonType:n,buttonText:u,callback(c){typeof l=="function"&&l(c);},afterAddToUListCallBack:s}},be={setting:{get width(){return window.innerWidth<550?"88vw":"550px"},get height(){return window.innerHeight<450?"70vh":"450px"}},settingBig:{get width(){return window.innerWidth<800?"92vw":"800px"},get height(){return window.innerHeight<600?"80vh":"600px"}},info:{get width(){return "350px"},get height(){return "250px"}}};class eu{constructor(t){Q(this,"option");this.option=t;}async showView(){var n;let t=U.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist">
                            
                        </ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:true},btn:p.assign({ok:{callback:async()=>{await r();}}},this.option.btn||{},true),mask:{enable:true},style:`
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

                ${((n=this.option)==null?undefined:n.style)??""}
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),u=t.$shadowRoot.querySelector(".rule-form-container");t.$shadowRoot.querySelector("input[type=submit]");let i=t.$shadowRoot.querySelector(".rule-form-ulist"),a=await this.option.getView(await this.option.data());i.appendChild(a);const r=async()=>{(await this.option.onsubmit(u,await this.option.data())).success&&(t.close(),await this.option.dialogCloseCallBack(true));};}}class tu{constructor(t){Q(this,"option");this.option=t;}showView(){let t=U.alert({title:{text:this.option.title,position:"center"},content:{text:`
                <div class="filter-container"></div>
                `},btn:{ok:{text:"关闭",type:"default"}},mask:{enable:true},width:window.innerWidth>500?"350px":"80vw",height:window.innerHeight>500?"300px":"70vh",style:`
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
            `}),u=t.$shadowRoot.querySelector(".filter-container"),i=document.createDocumentFragment();this.option.filterOption.forEach(a=>{let r=document.createElement("button");r.innerText=a.name;let n=async()=>{(await this.option.getAllRuleInfo()).forEach(async s=>{await a.filterCallBack(s.data)?f.show(s.$el,false):f.hide(s.$el,false);}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),t.close();};f.on(r,"click",async l=>{p.preventEvent(l),!(typeof a.callback=="function"&&!await a.callback(l,n))&&await n();}),i.appendChild(r);}),u.appendChild(i);}}class uu{constructor(t){Q(this,"option");this.option=t;}async showView(){var i,a,r,n,l,s,d,c,m;let t=U.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:true},btn:{merge:true,reverse:false,position:"space-between",ok:{enable:((r=(a=(i=this.option)==null?undefined:i.bottomControls)==null?undefined:a.add)==null?undefined:r.enable)||true,type:"primary",text:"添加",callback:async g=>{this.showEditView(t.$shadowRoot,false,await this.option.getAddData());}},close:{enable:true,callback(g){t.close();}},cancel:{enable:((s=(l=(n=this.option)==null?undefined:n.bottomControls)==null?undefined:l.filter)==null?undefined:s.enable)||false,type:"default",text:"过滤",callback:(g,A)=>{var $,S,F,b,v,k,O;typeof((F=(S=($=this.option)==null?undefined:$.bottomControls)==null?undefined:S.filter)==null?undefined:F.callback)=="function"&&this.option.bottomControls.filter.callback();let D=()=>Array.from(t.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),w=A.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");f.text(w).includes("取消")?(D().forEach(W=>{f.show(W,false);}),f.text(w,"过滤")):new tu({title:((v=(b=this.option.bottomControls)==null?undefined:b.filter)==null?undefined:v.title)??"过滤规则",filterOption:((O=(k=this.option.bottomControls)==null?undefined:k.filter)==null?undefined:O.option)||[],execFilterCallBack(){f.text(w,"取消过滤");},getAllRuleInfo:()=>D().map(K=>({data:this.parseRuleItemElement(K).data,$el:K}))}).showView();}},other:{enable:((m=(c=(d=this.option)==null?undefined:d.bottomControls)==null?undefined:c.clear)==null?undefined:m.enable)||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:g=>{let A=U.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async D=>{var $,S,F;if(o.success("清空所有"),typeof((F=(S=($=this.option)==null?undefined:$.bottomControls)==null?undefined:S.clear)==null?undefined:F.callback)=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){B.error("清理失败");return}else B.success("清理成功");await this.updateDeleteAllBtnText(t.$shadowRoot),this.clearContent(t.$shadowRoot),A.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
            ${U.config.cssText.panelCSS}
            
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
            `}),u=await this.option.data();for(let g=0;g<u.length;g++)await this.appendRuleItemElement(t.$shadowRoot,u[g]);}parseViewElement(t){let u=t.querySelector(".rule-view-container"),i=t.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:u,$deleteBtn:i}}parseRuleItemElement(t){let u=t.querySelector(".rule-controls-enable"),i=u.querySelector(".pops-panel-switch"),a=u.querySelector(".pops-panel-switch__input"),r=u.querySelector(".pops-panel-switch__core"),n=t.querySelector(".rule-controls-edit"),l=t.querySelector(".rule-controls-delete");return {$enable:u,$enableSwitch:i,$enableSwitchInput:a,$enableSwitchCore:r,$edit:n,$delete:l,data:Reflect.get(t,"data-rule")}}async createRuleItemElement(t,u){let i=await this.option.getDataItemName(t),a=f.createElement("div",{className:"rule-item",innerHTML:`
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
			`});Reflect.set(a,"data-rule",t);let r="pops-panel-switch-is-checked";const{$enable:n,$enableSwitch:l,$enableSwitchCore:s,$enableSwitchInput:d,$delete:c,$edit:m}=this.parseRuleItemElement(a);return this.option.itemControls.enable.enable?(f.on(s,"click",async g=>{let A=false;l.classList.contains(r)?(l.classList.remove(r),A=false):(l.classList.add(r),A=true),d.checked=A,await this.option.itemControls.enable.callback(t,A);}),await this.option.itemControls.enable.getEnable(t)&&l.classList.add(r)):n.remove(),this.option.itemControls.edit.enable?f.on(m,"click",g=>{p.preventEvent(g),this.showEditView(u,true,t,a,A=>{t=null,t=A;});}):m.remove(),this.option.itemControls.delete.enable?f.on(c,"click",g=>{p.preventEvent(g);let A=U.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async D=>{o.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(t)?(B.success("成功删除该数据"),a.remove(),await this.updateDeleteAllBtnText(u),A.close()):B.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):c.remove(),a}async appendRuleItemElement(t,u){const{$container:i}=this.parseViewElement(t);if(Array.isArray(u))for(let a=0;a<u.length;a++){const r=u[a];i.appendChild(await this.createRuleItemElement(r,t));}else i.appendChild(await this.createRuleItemElement(u,t));await this.updateDeleteAllBtnText(t);}async updateRuleContaienrElement(t){this.clearContent(t),this.parseViewElement(t);let u=await this.option.data();await this.appendRuleItemElement(t,u),await this.updateDeleteAllBtnText(t);}async updateRuleItemElement(t,u,i){let a=await this.createRuleItemElement(t,i);u.after(a),u.remove();}clearContent(t){const{$container:u}=this.parseViewElement(t);f.html(u,"");}setDeleteBtnText(t,u,i=false){const{$deleteBtn:a}=this.parseViewElement(t);i?f.html(a,u):f.text(a,u);}async updateDeleteAllBtnText(t){let u=await this.option.data();this.setDeleteBtnText(t,`清空所有(${u.length})`);}showEditView(t,u,i,a,r){let n=async s=>{if(!s){if(u||await this.option.deleteData(i),typeof r=="function"){let d=await this.option.getData(i);r(d);}}};new eu({title:u?"编辑":"添加",data:()=>i,dialogCloseCallBack:n,getView:async s=>await this.option.itemControls.edit.getView(s,u),btn:{ok:{enable:true,text:u?"修改":"添加"},cancel:{callback:async(s,d)=>{s.close(),await n(false);}},close:{callback:async(s,d)=>{s.close(),await n(false);}}},onsubmit:async(s,d)=>{let c=await this.option.itemControls.edit.onsubmit(s,u,d);return c.success?u?(B.success("修改成功"),await this.updateRuleItemElement(c.data,a,t)):await this.appendRuleItemElement(t,c.data):u&&B.error("修改失败"),c},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}}const he={$data:{whiteList:[],ruleData:[]},$key:{STORAGE_KEY:"bili-componentDetection-rule"},init(){this.$data.whiteList=[],this.$data.ruleData=[],this.getData().forEach(t=>{t.enable&&this.$data.ruleData.push(t);});},showView(){let e=U.config.panelHandleContentUtils();function t(i,a){return {get(r,n){return i[r]??n},set(r,n){i[r]=n;}}}new uu({title:"成分检测",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:i=>i.name,updateData:i=>this.updateData(i),deleteData:i=>this.deleteData(i),getData:i=>this.getData().find(n=>n.uuid===i.uuid)??i,itemControls:{enable:{enable:true,getEnable(i){return i.enable},callback:(i,a)=>{i.enable=a,this.updateData(i);}},edit:{enable:true,getView:(i,a)=>{let r=document.createDocumentFragment(),n=this.getTemplateData();a||(i=n);let l=E("启用","enable",n.enable);Reflect.set(l.props,V,t(i));let s=e.createSectionContainerItem_switch(l),d=ee("规则名称","name","",n.name,undefined,"必填");Reflect.set(d.props,V,t(i));let c=e.createSectionContainerItem_input(d),m=E("是否显示标签名称","isShowDisplayName",n.data.isShowDisplayName);Reflect.set(m.props,V,t(i.data));let g=e.createSectionContainerItem_switch(m),A=ee("标签名称","displayName",n.data.displayName,"例如：原神");Reflect.set(A.props,V,t(i.data));let D=e.createSectionContainerItem_input(A),w=E("是否显示标签图标","isShowDisplayIcon",n.data.isShowDisplayIcon);Reflect.set(w.props,V,t(i.data));let $=e.createSectionContainerItem_switch(w),S=ee("标签图标","displayIcon",n.data.displayIcon,"Url或base64");Reflect.set(S.props,V,t(i.data));let F=e.createSectionContainerItem_input(S),b=Te("关键词","keywords","","用于匹配标题、简介、转发内容的关键词",undefined,"多个关键词换行");Reflect.set(b.props,V,{get(H,L){let M=i.data[H]??L;return typeof M=="string"?M.split(`
`):M},set(H,L){typeof L=="string"&&(L=L.split(`
`)),i.data[H]=L;}});let v=e.createSectionContainerItem_textarea(b),k=Te("关注的用户","followings","","用户id",undefined,"多个用户id换行");Reflect.set(k.props,V,{get(H,L){let M=i.data[H]??L;return typeof M=="string"?M.split(`
`).map(de=>Number(de)).filter(de=>!isNaN(de)):M},set(H,L){typeof L=="string"&&(L=L.split(`
`).map(M=>Number(M)).filter(M=>!isNaN(M))),i.data[H]=L;}});let O=e.createSectionContainerItem_textarea(k),W=Te("黑名单","blacklist","","",undefined,"多个用户id换行");Reflect.set(W.props,V,{get(H,L){let M=i.data[H]??L;return typeof M=="string"?M.split(`
`).map(de=>Number(de)).filter(de=>!isNaN(de)):M},set(H,L){typeof L=="string"&&(L=L.split(`
`).map(M=>Number(M)).filter(M=>!isNaN(M))),i.data[H]=L;}});let K=e.createSectionContainerItem_textarea(W);return r.append(s,c,g,D,$,F,v,O,K),r},onsubmit:(i,a,r)=>{let n=i.querySelectorAll(".rule-form-ulist > li"),l=this.getTemplateData();a&&(l.uuid=r.uuid);try{return n.forEach(s=>{let d=Reflect.get(s,"__formConfig__"),c=Reflect.get(d,"attributes"),m=Reflect.get(s,V),g=Reflect.get(c,se),A=Reflect.get(c,ce),D=m.get(g,A);Reflect.has(l,g)?Reflect.set(l,g,D):Reflect.has(l.data,g)?Reflect.set(l.data,g,D):o.error(`${g}不在数据中`);}),l.name.trim()===""?(B.error("规则名称不能为空"),{success:!1,data:l}):a?{success:this.updateData(l),data:l}:{success:this.addData(l),data:l}}catch(s){return o.error(s),{success:false,data:l}}finally{this.init();}},style:`
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
                    `},delete:{enable:true,deleteCallBack:i=>this.deleteData(i)}}}).showView();},getTemplateData(){return {uuid:p.generateUUID(),enable:true,name:"",data:{isShowDisplayIcon:true,displayIcon:"",isShowDisplayName:true,displayName:"",keywords:[],blacklist:[],followings:[]}}},getData(){return le(this.$key.STORAGE_KEY,[])},setData(e){Ee(this.$key.STORAGE_KEY,e);},addData(e){let t=this.getData();return t.findIndex(i=>i.uuid==e.uuid)===-1?(t.push(e),Ee(this.$key.STORAGE_KEY,t),true):false},updateData(e){let t=this.getData(),u=t.findIndex(a=>a.uuid==e.uuid),i=false;return u!==-1&&(i=true,t[u]=e),this.setData(t),i},deleteData(e){let t=this.getData(),u=t.findIndex(a=>a.uuid==e.uuid),i=false;return u!==-1&&(i=true,t.splice(u,1)),this.setData(t),i},clearData(){jt(this.$key.STORAGE_KEY);},exportRule(e="rule.json"){let t=this.getData(),u=new Blob([JSON.stringify(t,null,4)]),i=window.URL.createObjectURL(u),a=document.createElement("a");a.href=i,a.download=e,a.click(),setTimeout(()=>{window.URL.revokeObjectURL(i);},1500);},importRule(){let e=U.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
                    <div class="import-mode" data-mode="local">本地导入</div>
                    <div class="import-mode" data-mode="network">网络导入</div>
                `,html:true},width:be.info.width,height:be.info.height,style:`
                .import-mode{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),t=e.$shadowRoot.querySelector(".import-mode[data-mode='local']"),u=e.$shadowRoot.querySelector(".import-mode[data-mode='network']");f.on(t,"click",i=>{p.preventEvent(i),e.close();let a=f.createElement("input",{type:"file",accept:".json"});f.on(a,["propertychange","input"],r=>{var s;if(!((s=a.files)!=null&&s.length))return;let n=a.files[0],l=new FileReader;l.onload=()=>{let d=p.toJSON(l.result);if(!Array.isArray(d)){o.error("不是正确的规则文件",d),B.error("不是正确的规则文件");return}this.setData(d),B.success(`成功导入 ${d.length}条规则`);},l.readAsText(n,"UTF-8");}),a.click();}),f.on(u,"click",i=>{p.preventEvent(i),e.close(),U.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"url",focus:true},btn:{ok:{callback:async(a,r)=>{let n=a.text;if(p.isNull(n)){B.error("请填入完整的url");return}let l=await I.get(n);if(!l.status)return;let s=p.toJSON(l.data.responseText);if(!Array.isArray(s)){o.error("不是正确的规则文件",l,s),B.error("不是正确的规则文件");return}this.setData(s),a.close(),B.success(`成功导入 ${s.length}条规则`);}}},width:be.info.width,height:"auto"});});}},iu={id:"panel-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[E("监听路由-重载所有功能","bili-listenRouterChange",true,undefined,"用于处理页面跳转(本页)时功能不生效问题"),E("修复VueRouter跳转404问题","bili-repairVueRouter404",true,undefined,"例如：点击UP主正确进入空间"),E("新标签页打开","bili-go-to-url-blank",false,undefined,"通过开启【覆盖点击事件】相关的设置，通过新标签页打开链接"),E("允许复制","bili-allowCopy",true,undefined,"一般用于处理楼层的回复弹窗内无法选中复制问题")]}]},{text:"变量设置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[E("isLogin","bili-setLogin",true,undefined,"$store.state.common.noCallApp=true<br>$store.state.common.userInfo.isLogin=true<br>$store.state.loginInfo.isLogin=true"),E("isClient","bili-setIsClient",true,undefined,"$store.state.video.isClient=true<br>$store.state.opus.isClient=true<br>$store.state.playlist.isClient=true<br>$store.state.ver.bili=true<br>$store.state.ver.biliVer=2333")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[E("覆盖.launch-app-btn openApp","bili-overrideLaunchAppBtn_Vue_openApp",true,undefined,"覆盖.launch-app-btn元素上的openApp函数，可阻止点击唤醒/下载App"),E("覆盖bili-open-app opener.open","bili-cover-bili-open-app-open",true,undefined,"覆盖bili-open-app/m-open-app元素上的opener.open函数，可阻止点击唤醒/下载App，如果存在有效链接，会自动跳转"),E("劫持setTimeout-autoOpenApp","bili-hookSetTimeout_autoOpenApp",true,undefined,"阻止自动调用App")]}]},{type:"deepMenu",text:"成分检测",forms:[{type:"forms",text:"",forms:[E("启用","bili-componentDetection",true,undefined,"启用后可检测用户的成分信息"),Pe("自定义规则","检测用户成分的规则","管理",undefined,false,false,"primary",()=>{he.showView();})]},{type:"forms",text:"",forms:[Pe("数据导入","导入自定义规则数据","导入",undefined,false,false,"primary",()=>{he.importRule();}),Pe("数据导出","导出自定义规则数据","导出",undefined,false,false,"primary",()=>{he.exportRule("成分检测.json");})]}]}]},{text:"",type:"forms",forms:[{text:"数据配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[ee("access_token","bili-head-recommend-access_token",Ce.getAccessToken(),"填入access_token，可用于获取推荐视频数据、番剧搜索、番剧播放等",(e,t,u)=>{Ce.setAccessTokenInfo({access_token:t,expireAt:Ce.generateExpireAt()});},undefined,false,true)]}]},{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[we("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,u)=>{o.info("设置当前Qmsg弹出位置"+u);},"Toast显示在页面九宫格的位置"),we("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],undefined,"限制Toast显示的数量"),E("逆序弹出","qmsg-config-showreverse",false,undefined,"修改Toast弹出的顺序")]}]},{text:"Cookie配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[E("启用","httpx-use-cookie-enable",false,undefined,"启用后，将根据下面的配置进行添加cookie"),E("使用document.cookie","httpx-use-document-cookie",false,undefined,"自动根据请求的域名来获取对应的cookie"),Te("bilibili.com","httpx-cookie-bilibili.com","",undefined,undefined,"Cookie格式：xxx=xxxx;xxx=xxxx")]}]}]}]},P={isVideo(){return window.location.pathname.startsWith("/video/")},isBangumi(){return window.location.pathname.startsWith("/bangumi/")},isSearch(){return window.location.pathname.startsWith("/search")},isSearchResult(){let e=new URLSearchParams(window.location.search);return this.isSearch()&&e.has("keyword")},isLive(){return window.location.hostname==="live.bilibili.com"},isOpus(){return window.location.pathname.startsWith("/opus")},isTopicDetail(){return window.location.pathname.startsWith("/topic-detail")},isDynamic(){return window.location.pathname.startsWith("/dynamic")},isHead(){return window.location.pathname==="/"||window.location.pathname.startsWith("/channel")},isSpace(){return window.location.pathname.startsWith("/space")},isPlayList(){return window.location.pathname.startsWith("/playlist")}},au={isPC(){return window.location.hostname==="www.bilibili.com"},isReadMobile(){return this.isPC()&&window.location.pathname.startsWith("/read/mobile")}},Fe={web_host:"api.bilibili.com"},Me={getBangumiProxyHost(){let e=[{name:"中国大陆",area:"",host:h.getValue("bili-bangumi-proxyApiServer-default","").trim()||Fe.web_host}];if(!h.getValue("bili-bangumi-unlockAreaLimit"))return e;let t=h.getValue("bili-bangumi-proxyApiServer-hk");p.isNotNull(t)&&e.push({name:"香港",area:"hk",host:t});let u=h.getValue("bili-bangumi-proxyApiServer-tw");p.isNotNull(u)&&e.push({name:"台湾",area:"tw",host:u});let i=h.getValue("bili-bangumi-proxyApiServer-tha-or-sea");return p.isNotNull(i)&&e.push({name:"泰国/东南亚",area:"th",host:i}),e},getSearchProxyHost(){let e=this.getBangumiProxyHost(),t=[],u=h.getValue("bili-search-proxyApiServer-hk");if(p.isNotNull(u))t.push({name:"香港",area:"hk",host:u});else {let r=e.find(n=>n.area==="hk");r&&t.push(r);}let i=h.getValue("bili-search-proxyApiServer-tw");if(p.isNotNull(i))t.push({name:"台湾",area:"tw",host:i});else {let r=e.find(n=>n.area==="tw");r&&t.push(r);}let a=h.getValue("bili-search-proxyApiServer-tha-or-sea");return p.isNotNull(a)?t.push({name:"泰国/东南亚",area:"th",host:a}):e.find(n=>n.area==="th")&&t.push,t},getBangumiProxySearchParam(e={}){return {from_client:"BROWSER",drm_tech_type:2,module:"bangumi",area:(e==null?undefined:e.area)||"",access_key:Ce.getAccessToken()}}},J={findBetterCDN(...e){let t=[];e.forEach(i=>{Array.isArray(i)?t=t.concat(i.filter(a=>typeof a=="string")):typeof i=="string"&&t.push(i);});let u=t.find(i=>{if(new URL(i).host.startsWith("upos"))return i});return u||t[0]},replaceBangumiVideoCDN(e){let t=h.getValue("bili-bangumi-uposServerSelect");return this.replaceVideoCDNHost(e,t)},replaceVideoCDN(e){let t=h.getValue("bili-video-uposServerSelect");return this.replaceVideoCDNHost(e,t)},replaceVideoCDNHost(e,t){try{let u=new URL(e),i=this.getUposCDNServerList().find(n=>n.host===t);if(p.isNull(i)||p.isNull(i.host))return e;let a=i.host,r=u.host;return r.includes("mirror")&&(o.info(`原Host为：${r}`),o.info(`替换CDN为：${JSON.stringify(i)}`),u.host=a),u.toString()}catch(u){return o.error("视频upos替换失败",u),o.error(u),e}},getUposCDNServerList(){return [{name:"不替换",host:""},{name:"ali（阿里云）",host:"upos-sz-mirrorali.bilivideo.com"},{name:"alib（阿里云）",host:"upos-sz-mirroralib.bilivideo.com"},{name:"alio1（阿里云）",host:"upos-sz-mirroralio1.bilivideo.com"},{name:"cos（腾讯云）",host:"upos-sz-mirrorcos.bilivideo.com"},{name:"cosb（腾讯云，VOD加速类型）",host:"upos-sz-mirrorcosb.bilivideo.com"},{name:"coso1（腾讯云）",host:"upos-sz-mirrorcoso1.bilivideo.com"},{name:"hw（华为云，融合CDN）",host:"upos-sz-mirrorhw.bilivideo.com"},{name:"hwb（华为云，融合CDN）",host:"upos-sz-mirrorhwb.bilivideo.com"},{name:"hwo1（华为云，融合CDN）",host:"upos-sz-mirrorhwo1.bilivideo.com"},{name:"08c（华为云，融合CDN）",host:"upos-sz-mirror08c.bilivideo.com"},{name:"08h（华为云，融合CDN）",host:"upos-sz-mirror08h.bilivideo.com"},{name:"08ct（华为云，融合CDN）",host:"upos-sz-mirror08ct.bilivideo.com"},{name:"tf_hw（华为云）",host:"upos-tf-all-hw.bilivideo.com"},{name:"tf_tx（腾讯云）",host:"upos-tf-all-tx.bilivideo.com"},{name:"akamai（Akamai海外）",host:"upos-hz-mirrorakam.akamaized.net"},{name:"aliov（阿里云海外）",host:"upos-sz-mirroraliov.bilivideo.com"},{name:"cosov（腾讯云海外）",host:"upos-sz-mirrorcosov.bilivideo.com"},{name:"hwov（华为云海外）",host:"upos-sz-mirrorhwov.bilivideo.com"},{name:"hk_bcache（Bilibili海外）",host:"cn-hk-eq-bcache-01.bilivideo.com"},{name:"alibstar1（阿里云海外-东南亚）",host:"upos-sz-mirroralibstar1.bilivideo.com"},{name:"cosbstar1（腾讯云海外-东南亚）",host:"upos-sz-mirrorcosbstar1.bilivideo.com"},{name:"hwbstar1（华为云海外-东南亚）",host:"upos-sz-mirrorhwbstar1.bilivideo.com"},{name:"akamai（Akamai海外-东南亚）",host:"upos-bstar1-mirrorakam.akamaized.net"}]}},gt=function(e,t,u,i,a,r,n,l,s){let d={text:e,type:"slider",description:l,attributes:{},props:{},getValue(){return this.props[V].get(t,u)},getToolTipContent(c){return typeof n=="function"?n(c):`${c}`},callback(c,m){this.props[V].set(t,m);},min:i,max:a,step:s};return Reflect.set(d.attributes,se,t),Reflect.set(d.attributes,ce,u),Reflect.set(d.props,V,{get(c,m){return h.getValue(c,m)},set(c,m){h.setValue(c,m);}}),d},ru={id:"panel-video",title:"视频",isDefault(){return P.isVideo()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[E("强制本页刷新跳转","bili-video-forceThisPageToRefreshAndRedirect",false,undefined,"用于处理内存泄露问题")]}]},{text:"ArtPlayer播放器",type:"deepMenu",forms:[{text:"功能",type:"forms",forms:[E("启用","bili-video-enableArtPlayer",true,undefined,"使用artplayer代替页面的播放器"),we("播放的视频类型","bili-video-playType","mp4",[{text:"mp4",value:"mp4"},{text:"dash",value:"dash"}],undefined,"当选择dash时会有画质更高的选项"),E("自动播放视频","bili-video-playerAutoPlayVideo",false,undefined,""),E("自动进入全屏","bili-video-playerAutoPlayVideoFullScreen",false,undefined,"")]},{text:"控件设置",type:"forms",forms:[gt("controls左右边距","bili-video-artplayer-controlsPadding-left-right",0,0,50,undefined,e=>e+"px","可用于全屏横屏适配屏幕",1)]},{text:"插件",type:"forms",forms:[E("弹幕","artplayer-plugin-video-danmaku-enable",true,undefined,"哔哩哔哩 (゜-゜)つロ 干杯~"),E("Dash Audio Support","artplayer-plugin-video-m4sAudioSupport-enable",true,undefined,"视频类型为dash时，该插件可支持播放音频"),E("选集","artplayer-plugin-video-epChoose-enable",true,undefined,"当视频播放完毕后会自动连播"),E("CC字幕","artplayer-plugin-video-cc-subtitle-enable",true,undefined,"字幕支持插件，如果存在繁体字幕，则自动生成简体字幕"),E("顶部工具栏","artplayer-plugin-video-toptoolbar-enable",true,undefined,"显示视频标题和当前观看人数"),E("视频统计信息","artplayer-plugin-video-statistics-enable",true,undefined,"用于显示当前视频信息的弹窗")]},{text:"加速CDN设置",type:"forms",forms:[we("UPOS服务器设置","bili-video-uposServerSelect","",J.getUposCDNServerList().map(e=>({text:e.name,value:e.host})),undefined,"设置视频流的服务器，可加快视频加载速度"),E("作用于Audio上","bili-video-uposServerSelect-applyAudio",false,undefined,"把m4s类型的audio也进行upos替换")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[E("UP主信息","bili-video-cover-UpWrapper",true,undefined,"点击UP主头像/名称可跳转至UP主空间"),E("相关视频","bili-video-cover-bottomRecommendVideo",true,undefined,"点击下面的相关视频可正确跳转至该视频"),E("选集","bili-video-cover-seasonNew",true,undefined,"点击下面的选集列表内的视频可正确跳转至该视频")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[E("阻止调用App","bili-video-hook-callApp",true,undefined,"处理函数: PlayerAgent")]}]}]}]},nu={id:"panel-bangumi",title:"番剧",isDefault(){return P.isBangumi()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[E("固定缩放倍率","bili-bangumi-initialScale",true,undefined,"")]}]},{text:"ArtPlayer播放器",type:"deepMenu",forms:[{text:"控件设置",type:"forms",forms:[gt("controls左右边距","bili-bangumi-artplayer-controlsPadding-left-right",0,0,50,undefined,e=>e+"px","可用于全屏横屏适配屏幕",1)]},{text:"插件",type:"forms",forms:[E("弹幕","artplayer-plugin-bangumi-danmaku-enable",true,undefined,"哔哩哔哩 (゜-゜)つロ 干杯~"),E("Dash Audio Support","artplayer-plugin-bangumi-m4sAudioSupport-enable",true,undefined,"视频类型为dash时，该插件可支持播放音频"),E("选集","artplayer-plugin-bangumi-epChoose-enable",true,undefined,"当视频播放完毕后会自动连播"),E("CC字幕","artplayer-plugin-bangumi-cc-subtitle-enable",true,undefined,"字幕支持插件，如果存在繁体字幕，则自动生成简体字幕"),E("顶部工具栏","artplayer-plugin-bangumi-toptoolbar-enable",true,undefined,"显示视频标题和当前观看人数"),E("空降助手","artplayer-plugin-bangumi-airborneHelper-enable",true,undefined,"如果获取到的信息中存在空降信息，如跳过片头片尾，那么会自动跳过"),E("视频统计信息","artplayer-plugin-bangumi-statistics-enable",true,undefined,"用于显示当前视频信息的弹窗")]},{text:"解除区域限制",type:"forms",forms:[E("解锁番剧限制","bili-bangumi-unlockAreaLimit",false,undefined,"使用户可以观看区域外版权番剧"),E("生成简中字幕","bili-bangumi-generateSimpleChineseSubtitle",true,undefined,"根据繁体字幕自动生成简体中文字幕")]},{text:"加速CDN设置",type:"forms",forms:[we("UPOS服务器设置","bili-bangumi-uposServerSelect","",J.getUposCDNServerList().map(e=>({text:e.name,value:e.host})),undefined,"设置解锁番剧的服务器，可加快视频加载速度"),E("作用于Audio上","bili-bangumi-uposServerSelect-applyAudio",false,undefined,"把m4s类型的audio也进行upos替换")]},{text:"<a href='https://github.com/yujincheng08/BiliRoaming/wiki/%E5%85%AC%E5%85%B1%E8%A7%A3%E6%9E%90%E6%9C%8D%E5%8A%A1%E5%99%A8' target='_blank'>解析服务器</a>",type:"forms",forms:[ee("中国大陆","bili-bangumi-proxyApiServer-default","","用于请求播放地址的代理",undefined,"bilibili优化.example.com"),ee("香港","bili-bangumi-proxyApiServer-hk","","用于请求播放地址的代理",undefined,"bilibili优化.example.com"),ee("台湾","bili-bangumi-proxyApiServer-tw","","用于请求播放地址的代理",undefined,"bilibili优化.example.com"),ee("泰国/东南亚","bili-bangumi-proxyApiServer-tha-or-sea","","用于请求播放地址的代理",undefined,"bilibili优化.example.com")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[E("【选集】","bili-bangumi-cover-clicl-event-chooseEp",true,undefined,"让【选集】的视频列表可点击跳转"),E("【其它】","bili-bangumi-cover-clicl-event-other",true,undefined,"让【PV&其他】、【预告】、【主题曲】、【香境剧场】等的视频列表可点击跳转"),E("【更多推荐】","bili-bangumi-cover-clicl-event-recommend",true,undefined,"让【更多推荐】的视频列表可点击跳转")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[E("阻止调用App","bili-bangumi-hook-callApp",true,undefined,"")]}]}]}]},lu={id:"panel-search",title:"搜索",isDefault(){return P.isSearch()},forms:[{type:"forms",text:"",forms:[{type:"deepMenu",text:"功能",forms:[{type:"forms",text:"",forms:[E("搜索框自动获取焦点","bili-search-inputAutoFocus",true,undefined,""),E("美化搜索结果","bili-search-beautifySearchResult",true,undefined,"重构搜索结果的样式"),E("开启其它地区番剧搜索","bili-search-enableOtherAreaSearchBangumi",false,undefined,"在搜索页面添加其它地区番剧搜索结果，需要解析服务器支持")]},{text:"<a href='https://github.com/yujincheng08/BiliRoaming/wiki/%E5%85%AC%E5%85%B1%E8%A7%A3%E6%9E%90%E6%9C%8D%E5%8A%A1%E5%99%A8' target='_blank'>搜索服务器</a>",type:"forms",forms:[ee("香港","bili-search-proxyApiServer-hk","","用于搜索番剧结果的代理",undefined,"bilibili优化.example.com"),ee("台湾","bili-search-proxyApiServer-tw","","用于搜索番剧结果的代理",undefined,"bilibili优化.example.com"),ee("泰国/东南亚","bili-search-proxyApiServer-tha-or-sea","","用于搜索番剧结果的代理",undefined,"bilibili优化.example.com")]}]},{type:"deepMenu",text:"覆盖点击事件",forms:[{type:"forms",text:"",forms:[E("取消","bili-search-cover-cancel",false,undefined,"点击取消按钮回退至上一页")]}]},{text:"变量设置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[E("noCallApp","bili-search-vue-prop-noCallApp",true,undefined,"noCallApp = true"),E("openAppDialog","bili-search-vue-prop-openAppDialog",true,undefined,"openAppDialog = false")]}]}]}]},ou={id:"panel-live",title:"直播",isDefault(){return P.isLive()},forms:[{text:"",type:"forms",forms:[{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[E("【屏蔽】聊天室","bili-live-block-chatRoom",false,undefined,"直接不显示底部的聊天室"),E("【屏蔽】xxx进入直播间","bili-live-block-brush-prompt",false,undefined,"直接不显示底部的xxx进入直播间"),E("【屏蔽】控制面板","bili-live-block-control-panel",false,undefined,"屏蔽底部的发个弹幕、送礼")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[E("阻止open-app-btn元素点击事件触发","bili-live-prevent-openAppBtn",true,undefined,"开启后可不跳转至唤醒App页面")]}]}]}]},su={id:"panel-opus",title:"专栏",isDefault(){return P.isOpus()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[E("自动展开阅读全文","bili-opus-automaticallyExpandToReadFullText",true,undefined,"屏蔽【展开阅读全文】按钮并自动处理全文高度")]}]},{text:"变量设置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[E("autoOpenApp","bili-opus-variable-autoOpenApp",true,undefined,"autoOpenApp函数置空"),E("go404","bili-opus-variable-go404",true,undefined,"go404函数置空，可禁止前往404页面"),E("handleFallback","bili-opus-variable-handleFallback",true,undefined,"禁止前往404页面")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[E("话题","bili-opus-cover-topicJump",true,undefined,"点击话题正确跳转"),E("header用户","bili-opus-cover-header",true,undefined,"点击内容上的发布本动态的用户正确跳转个人空间")]}]}]}]},cu={id:"panel-dynamic",title:"动态",isDefault(){return P.isDynamic()},forms:[{text:"",type:"forms",forms:[{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[E("话题","bili-dynamic-cover-topicJump",true,undefined,"点击话题正确跳转"),E("header用户","bili-dynamic-cover-header",true,undefined,"点击内容上的发布本动态的用户正确跳转个人空间"),E("@用户","bili-dynamic-cover-atJump",true,undefined,"点击@用户正确跳转个人空间"),E("引用","bili-dynamic-cover-referenceJump",true,undefined,"点击引用的视频|用户正确跳转")]}]}]}]},du={id:"panel-head",title:"首页",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[E("美化显示","bili-head-beautify",true,undefined,"调整瀑布流视频卡片样式类似哔哩哔哩App"),E("美化顶部NavBar","bili-beautifyTopNavBar",true,undefined,"类似哔哩哔哩App的样式"),E("补充推荐视频信息","bili-head-supplementaryVideoStreamingInformation",true,undefined,"给视频添加UP主名，当前视频总时长信息"),E("新标签页打开","bili-head-openVideoInNewTab",false,undefined,"包括视频、番剧")]}]},{text:"推荐视频",type:"deepMenu",forms:[{text:"",type:"forms",forms:[E("启用","bili-head-recommend-enable",true,undefined,"添加【推荐】标签，数据来源为App端(如果填入了access_token的话)"),E("显示【图文】","bili-head-recommend-push-graphic",true,undefined,"加载App端推送的【图文】卡片")]}]}]}]},x={getVue(e){if(e!=null)return e.__vue__||e.__Ivue__||e.__IVue__},getVue3(e){if(e!=null)return e.__vueParentComponent},waitVuePropToSet(e,t){if(!Array.isArray(t)){x.waitVuePropToSet(e,[t]);return}function u(){let i=null;return typeof e=="string"?i=document.querySelector(e):typeof e=="function"?i=e():e instanceof HTMLElement&&(i=e),i}t.forEach(i=>{typeof i.msg=="string"&&o.info(i.msg);function a(){let r=u();if(r==null)return  false;let n=x.getVue(r);return n==null?false:!!i.check(n)}p.waitVueByInterval(()=>u(),a,250,1e4).then(r=>{if(!r){typeof i.failWait=="function"&&i.failWait(true);return}let n=u(),l=x.getVue(n);if(l==null){typeof i.failWait=="function"&&i.failWait(false);return}i.set(l);});});},watchVuePropChange(e,t,u,i,a){let r=p.assign({immediate:true,deep:false},i||{});return new Promise(n=>{x.waitVuePropToSet(e,{check(l){return typeof(l==null?undefined:l.$watch)=="function"},set(l){let s=null;typeof t=="function"?s=l.$watch(()=>t(l),(d,c)=>{u(l,d,c);},r):s=l.$watch(t,(d,c)=>{u(l,d,c);},r),n(s);},failWait:a});})},goToUrl(e,t,u=false){if(e==null){B.error("跳转Url: $vueNode为空"),o.error("跳转Url: $vueNode为空："+t);return}let i=x.getVue(e);if(i==null){B.error("获取vue属性失败",{consoleLogContent:true});return}let a=i.$router,r=true;if(o.info("即将跳转URL："+t),u&&(r=false),r)window.open(t,"_blank");else {if(t.startsWith("http")||t.startsWith("//")){t.startsWith("//")&&(t=window.location.protocol+t);let n=new URL(t);if(n.origin===window.location.origin)t=n.pathname+n.search+n.hash;else {o.info("不同域名，直接本页打开，不用Router："+t),window.location.href=t;return}}o.info("$router push跳转Url："+t),a.push(t);}},hookGestureReturnByVueRouter(e){function t(){o.success("触发popstate事件"),i(true);}function u(){o.success("监听地址改变"),e.vueInstance.$router.history.push(e.hash),f.on(G,"popstate",t);}async function i(a=false){if(f.off(G,"popstate",t),!e.callback(a))for(;;)if(e.vueInstance.$router.history.current.hash===e.hash)o.info("后退！"),e.vueInstance.$router.back(),await p.sleep(250);else return}return u(),{resumeBack:i}}},R={goToUrl(e,t=false){let u=h.getValue("bili-go-to-url-blank");if(o.info("即将跳转URL："+e),t&&(u=false),u)window.open(e,"_blank");else {if(e.startsWith("http")||e.startsWith("//")){e.startsWith("//")&&(e=window.location.protocol+e);let n=new URL(e);if(n.origin===window.location.origin)e=n.pathname+n.search+n.hash;else {o.info("不同域名，直接本页打开，不用Router："+e),window.location.href=e;return}}o.info("$router push跳转Url："+e);let i=z("#app");if(i==null){if(!t){window.location.href=e;return}B.error("跳转Url: 获取根元素#app失败"),o.error("跳转Url: 获取根元素#app失败："+e);return}let a=x.getVue(i);if(a==null){if(!t){window.location.href=e;return}o.error("获取#app的vue属性失败"),B.error("获取#app的vue属性失败");return}a.$router.push(e);}},goToLogin(e=""){window.open(`https://passport.bilibili.com/h5-app/passport/login?gourl=${encodeURIComponent(e)}`);},parseDuration(e){if(typeof e!="number"&&(e=parseInt(e)),isNaN(e))return e.toString();function t(u){return u<10?`0${u}`:u}return e<60?`0:${t(e)}`:e>=60&&e<3600?`${Math.floor(e/60)}:${t(e%60)}`:`${Math.floor(e/3600)}:${t(Math.floor(e/60)%60)}:${t(e%60)}`},hookGestureReturnByVueRouter(e){function t(){o.success("触发popstate事件"),i(true);}function u(){o.success("监听地址改变"),e.vueObj.$router.history.push(e.hash),f.on(window,"popstate",t);}async function i(a=false){if(f.off(window,"popstate",t),!e.callback(a))for(;;)if(e.vueObj.$router.history.current.hash===e.hash)o.info("后退！"),e.vueObj.$router.back(),await p.sleep(250);else return}return u(),{resumeBack:i}},initialScale(){o.info("设置<meta>的viewport固定缩放倍率为1并移除页面原有的<meta>"),f.ready(()=>{let e=f.createElement("meta",{},{name:"viewport",content:"width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover"});f.remove("meta[name='viewport']"),p.waitNode("head").then(()=>{document.head.appendChild(e);});});}},pu={id:"panel-space",title:"个人空间",isDefault(){return P.isSpace()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[E("修复正确跳转","bili-space-repairRealJump",true,undefined,"修复视频|动态的正确跳转，避免跳转404")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[E("动态视频","bili-space-coverDynamicStateCardVideo",true,undefined,"点击发布动态的视频可正常跳转至该视频")]}]}]}]},h={$data:{__data:null,__oneSuccessExecMenu:null,__onceExec:null,__listenData:null,get data(){return h.$data.__data==null&&(h.$data.__data=new p.Dictionary),h.$data.__data},get oneSuccessExecMenu(){return h.$data.__oneSuccessExecMenu==null&&(h.$data.__oneSuccessExecMenu=new p.Dictionary),h.$data.__oneSuccessExecMenu},get onceExec(){return h.$data.__onceExec==null&&(h.$data.__onceExec=new p.Dictionary),h.$data.__onceExec},get scriptName(){return Je},key:pe,attributeKeyName:se,attributeDefaultValueName:ce},$listener:{get listenData(){return h.$data.__listenData==null&&(h.$data.__listenData=new p.Dictionary),h.$data.__listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},isTopWindow(){return G.top===G.self},initExtensionsMenu(){this.isTopWindow()&&Kt.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showPanel();}},{key:"go_to_login",text:"🛠 前往登录",autoReload:false,isStoreValue:false,showText(e){return e},callback(){R.goToLogin();}},{key:"go_to_login_to_parse_access_key",text:"🛠 扫码并解析access_key",autoReload:false,isStoreValue:false,showText(e){return e},callback(){Ce.init();}}]);},initPanelDefaultValue(){let e=this;function t(a){if(!a.attributes)return;let r={},n=a.attributes[se];n!=null&&(r[n]=a.attributes[ce]);let l=a.attributes[Zt];if(typeof l=="function"){let c=l();if(typeof c=="boolean"&&!c)return}let s=a.attributes[Xt];s&&typeof s=="object"&&Object.assign(r,s);let d=Object.keys(r);if(!d.length){o.warn("请先配置键",a);return}d.forEach(c=>{let m=r[c];e.$data.data.has(c)&&o.warn("请检查该key(已存在): "+c),e.$data.data.set(c,m);});}function u(a){for(let r=0;r<a.length;r++){let n=a[r];t(n);let l=n.forms;l&&Array.isArray(l)&&u(l);}}let i=this.getPanelContentConfig();for(let a=0;a<i.length;a++){let r=i[a];if(!r.forms)continue;let n=r.forms;n&&Array.isArray(n)&&u(n);}},setValue(e,t){let u=le(pe,{}),i=u[e];u[e]=t,Ee(pe,u),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,i,t);},getValue(e,t){let i=le(pe,{})[e];return i??(this.$data.data.has(e)?this.$data.data.get(e):t)},deleteValue(e){let t=le(pe,{}),u=t[e];Reflect.deleteProperty(t,e),Ee(pe,t),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,u,undefined);},addValueChangeListener(e,t){let u=Math.random();return this.$listener.listenData.set(e,{id:u,key:e,callback:t}),u},removeValueChangeListener(e){let t=null;for(const[u,i]of this.$listener.listenData.entries())if(i.id===e){t=u;break}this.$listener.listenData.delete(t);},triggerMenuValueChange(e,t,u){if(this.$listener.listenData.has(e)){let i=this.$listener.listenData.get(e);if(typeof i.callback=="function"){let a=this.getValue(e),r=a,n=a;typeof t<"u"&&arguments.length>1&&(r=t),typeof u<"u"&&arguments.length>2&&(n=u),i.callback(e,n,r);}}},hasKey(e){let t=le(pe,{});return e in t},execMenu(e,t,u=false,i){if(!(typeof e=="string"||typeof e=="object"&&Array.isArray(e)))throw new TypeError("key 必须是字符串或者字符串数组");let a=[];typeof e=="object"&&Array.isArray(e)?a=[...e]:a.push(e);let r;for(let n=0;n<a.length;n++){const l=a[n];if(!this.$data.data.has(l)){o.warn(`${e} 键不存在`);return}let s=h.getValue(l);if(u&&(s=!s),typeof i=="function"){let d=i(l,s);typeof d=="boolean"&&(s=d);}if(!s)break;r=s;}r&&t(r);},execMenuOnce(e,t,u,i,a){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){o.warn(`${e} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(e))return;this.$data.oneSuccessExecMenu.set(e,1);let r=()=>{let m=h.getValue(e);return typeof u=="function"?u(e,m):m},n=[],l=m=>{let g=r(),A=[];if(m instanceof HTMLStyleElement?A=[m]:Array.isArray(m)&&(A=[...m.filter(D=>D!=null&&D instanceof HTMLStyleElement)]),g)n=n.concat(A);else for(let D=0;D<A.length;D++)A[D].remove(),A.splice(D,1),D--;},s=m=>typeof a=="function"?a(e,m):m,d=m=>{let g=[];if(s(m)){let A=t(m,l);A instanceof HTMLStyleElement?g=[A]:Array.isArray(A)&&(g=[...A.filter(D=>D!=null&&D instanceof HTMLStyleElement)]);}for(let A=0;A<n.length;A++)n[A].remove(),n.splice(A,1),A--;n=[...g];};this.addValueChangeListener(e,(m,g,A)=>{let D=A;typeof i=="function"&&(D=i(m,A,g)),d(D);});let c=r();c&&d(c);},execInheritMenuOnce(e,t,u,i){let a=this;const r=(n,l)=>{let s=a.getValue(n),d=a.getValue(l);if(typeof i=="function"){let c=i(s,d);if(c!=null)return c}return s};this.execMenuOnce(e,u,()=>r(e,t),()=>r(e,t)),this.execMenuOnce(t,()=>{},()=>false,()=>(this.triggerMenuValueChange(e),false));},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(t(),this.$data.onceExec.set(e,1));},showPanel(){U.panel({title:{text:`${Je}-设置`,position:"center",html:false,style:""},content:this.getPanelContentConfig(),mask:{enable:true,clickEvent:{toClose:true,toHide:false}},width:be.setting.width,height:be.setting.height,drag:true,only:true});},getPanelContentConfig(){return [iu,du,ru,su,cu,nu,lu,pu,ou]}},mu=`@charset "UTF-8";\r
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
`,oe={getUserSpaceUrl(e){return `https://m.bilibili.com/space/${e}`},getUserSpaceDynamicUrl(e){return `https://m.bilibili.com/dynamic/${e}`},getUserSpaceOpusUrl(e){return `https://m.bilibili.com/opus/${e}`},getVideoUrl(e){return `https://m.bilibili.com/video/${e}`}},y={className:{bangumi:"#app.main-container",bangumi_new:"body > #__next",dynamic:"#app .m-dynamic",opus:"#app .m-opus",search:"#app .m-search","topic-detail":"#app .topic-detail",video:"#app .video",mVideo:"#app .m-video",head:"#app .m-head",playlist:"#app .playlist",space:"#app .m-space"},theme:"#FB7299"},Ze={className:{read:{mobile:"#app .read-app-main"}}},Ct=`.artplayer-container {\r
	position: absolute;\r
	width: 100%;\r
	height: 100%;\r
	top: 0;\r
	left: 0;\r
	overflow: hidden;\r
}`,He=`/* 设置播放器基础宽高 */\r
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
`,Oe={mergeAidOrBvidSearchParamsData(e,t){if("aid"in t&&t.aid!=null)Reflect.set(e,"aid",t.aid);else if("bvid"in t&&t.bvid!=null)Reflect.set(e,"bvid",t.bvid);else throw new TypeError("avid or bvid must give one")}},Ue={"240P 极速":6,"360P 流畅":16,"480P 清晰":32,"720P 高清":64,"720P60 高帧率":74,"1080P 高清":80,"1080P+ 高码率":112,"1080P60 高帧率":116,"4K 超清":120,"HDR 真彩色":125,杜比视界:126,"8K 超高清":127},fu={};Object.keys(Ue).forEach(e=>{let t=Reflect.get(Ue,e);Reflect.set(fu,t,e);});const Ie={async playUrl(e,t){let u={cid:e.cid,qn:e.qn??Ue["1080P60 高帧率"],high_quality:e.high_quality??1,fnval:e.fnval??1,fnver:e.fnver??0,fourk:e.fourk??1};e.setPlatformHTML5&&Reflect.set(u,"platform","html5"),Oe.mergeAidOrBvidSearchParamsData(u,e),typeof t=="object"&&Object.assign(u,t);let i=await I.get("https://api.bilibili.com/x/player/playurl?"+p.toSearchParamsStr(u),{responseType:"json",fetch:true});if(!i.status)return;let a=p.toJSON(i.data.responseText);if(a.code===0)return a.data},async onlineTotal(e){let t={cid:e.cid};Oe.mergeAidOrBvidSearchParamsData(t,e);let u=await I.get(`https://${Fe.web_host}/x/player/online/total?${p.toSearchParamsStr(t)}`,{responseType:"json",fetch:true});if(!u.status)return;let i=p.toJSON(u.data.responseText);return te.isWebApiSuccess(i)||o.error(`获取在线观看人数失败: ${JSON.stringify(i)}`),i.data},async like(e){var r;let t={like:e.like,csrf:((r=ft.get("bili_jct"))==null?undefined:r.value)||""};Oe.mergeAidOrBvidSearchParamsData(t,e);let u=await I.get("https://api.bilibili.com/x/web-interface/archive/like?"+p.toSearchParamsStr(t),{fetch:true});if(!u.status)return  false;let i=p.toJSON(u.data.responseText);const a=i.code;return a===0?true:(a===-101?B.error("账号未登录"):a===-111?B.error("csrf校验失败"):a===-400?B.error("请求错误"):a===-403?B.error("账号异常"):a===10003?B.error("不存在该稿件"):a===65004?B.error("取消点赞失败"):a===65006?B.warning("重复点赞"):B.error("未知错误："+i.message),false)}},bt={30216:"64K",30232:"132K",30280:"192K",30250:"杜比全景声",30251:"Hi-Res无损"},hu="[artplayer-plugin-danmuku]：";class yt{constructor(t){Q(this,"$data",{KEY:"art-player-danmaku-option",localArtDanmakuOption:{}});this.$data.KEY=t;const u=this.getDefaultDanmakuOption();this.$data.localArtDanmakuOption=p.assign(u,le(this.$data.KEY,{}));}getDefaultDanmakuOption(){return {speed:5,margin:[10,"75%"],opacity:1,modes:[0,1,2],fontSize:18,antiOverlap:false,synchronousPlayback:true,visible:true}}getLocalArtDanmakuOption(){return this.$data.localArtDanmakuOption}onConfigChange(t){t.on("artplayerPluginDanmuku:config",u=>{console.log(hu+"更新配置项",u),Object.keys(this.$data.localArtDanmakuOption).forEach(i=>{if(Reflect.has(u,i)){let a=Reflect.get(u,i);Reflect.set(this.$data.localArtDanmakuOption,i,a);}}),Ee(this.$data.KEY,this.$data.localArtDanmakuOption);});}}const ae="[artplayer-plugin-m4sAudioSupport]：",xe="setting-bilibili-m4sAudio",j={$flag:{isIntervaling:false},intervalHandler(e,t=2,u=900){if(j.$flag.isIntervaling)return;j.$flag.isIntervaling=true;let i=0,a,r=()=>{if(i>t){j.$flag.isIntervaling=false,clearInterval(a);return}if(typeof e=="function")try{e();}catch(n){console.error(ae,n);}i++;};r(),t>1?a=setInterval(r,u):j.$flag.isIntervaling=false;}},C={$key:{plugin_KEY:"plugin-bilibili-m4sAudio"},$data:{art:null,audio:new Audio,latestSyncTime:0,reconnectConfig:{maxCount:5,delayTime:1e3},reconnectInfo:{url:"",count:0},option:null},userEvent:{onRestart:undefined},events:{play:()=>{C.handler.play(),C.handler.syncVolume(),C.handler.syncMuted(),j.intervalHandler(()=>{C.handler.syncTime();},1);},seek:e=>{j.intervalHandler(()=>{C.handler.syncTime(),C.handler.syncPlayState();});},pause:()=>{j.intervalHandler(()=>{C.handler.syncTime();},1),C.handler.pause();},restart:e=>{if(typeof C.userEvent.onRestart=="function"){let t=C.userEvent.onRestart(e);C.handler.playUrl(t);}j.intervalHandler(()=>{C.handler.syncTime();},1),C.handler.syncPlayState();},muted:e=>{C.handler.syncVolume(),C.handler.syncMuted();},destroy:()=>{C.handler.pause();},error:(e,t)=>{C.handler.pause();},resize:()=>{j.intervalHandler(()=>{C.handler.syncTime();});},fullscreen:()=>{j.intervalHandler(()=>{C.handler.syncTime();});},"video:ended":()=>{C.handler.pause();},"video:ratechange":()=>{C.handler.syncPlayBackRate();},"video:waiting":()=>{C.handler.pause();},"video:playing":()=>{j.intervalHandler(()=>{C.handler.syncTime();},1),C.handler.play();},"video:pause":()=>{C.handler.pause(),j.intervalHandler(()=>{C.handler.syncTime();},1);},"video:volumechange":()=>{C.handler.syncVolume(),C.handler.syncMuted(),C.handler.syncPlayState();},"video:timeupdate":()=>{let e=C.$data.art.currentTime;Math.abs(e-C.$data.latestSyncTime)>=3&&(C.$data.latestSyncTime=e,j.intervalHandler(()=>{C.handler.syncTime(.777);},1));}},audioEvents:{loadedmetadata:e=>{C.$data.art.emit("m4sAudio:loadedmetadata",e),console.log(ae+"Audio预加载完成"),C.$data.reconnectInfo.count=0,C.$data.reconnectInfo.url="",C.$data.latestSyncTime=0,C.handler.syncPlayState(),C.handler.syncPlayBackRate(),C.handler.syncVolume(),C.handler.syncMuted(),j.intervalHandler(()=>{C.handler.syncTime();});},canplaythrough:e=>{C.$data.art.emit("m4sAudio:canplaythrough",e),console.log(ae+"浏览器估计该音频可以在不停止内容缓冲的情况下播放媒体直到结束"),j.intervalHandler(()=>{C.handler.syncTime();});},error:e=>{C.$data.art.emit("m4sAudio:error",e),console.error(ae+"Audio加载失败",e),p.isNull(C.$data.reconnectInfo.url)&&(C.$data.reconnectInfo.url=C.$data.audio.src),C.$data.reconnectInfo.count<C.$data.reconnectConfig.maxCount?(console.log(ae+`Audio第${C.$data.reconnectInfo.count+1}次尝试重新连接`),C.$data.art.notice.show=`Audio第${C.$data.reconnectInfo.count+1}次尝试重新连接`,C.$data.reconnectInfo.count++,setTimeout(()=>{C.handler.playUrl(""),C.handler.playUrl(C.$data.reconnectInfo.url),C.$data.audio.load();},C.$data.reconnectConfig.delayTime)):(console.error(ae+"Audio已超出重连次数"),C.$data.art.notice.show="Audio已超出重连次数，请尝试切换源");}},handler:{playUrl(e){typeof e=="string"&&(C.$data.audio.src=e,C.unbindAudio(),p.isNotNull(e)&&C.bindAudio(),C.$data.art.emit("m4sAudio:restart",e),C.handler.syncTime(),C.handler.syncPlayState());},play(){C.$data.audio.paused&&(C.$data.audio.play(),C.$data.art.emit("m4sAudio:play"));},pause(){C.$data.audio.paused||(C.$data.audio.pause(),C.$data.art.emit("m4sAudio:pause"));},syncPlayState(){C.$data.art.playing?this.play():this.pause(),C.$data.art.emit("m4sAudio:syncPlayState");},syncTime(e=.1){let t=C.$data.art.currentTime,u=C.$data.audio.currentTime;Math.abs(t-u)>=Math.abs(e)&&(C.$data.audio.currentTime=t,this.syncVolume(),this.syncMuted(),C.$data.art.emit("m4sAudio:syncTime"));},syncVolume(){C.$data.audio.volume=C.$data.art.volume,C.$data.art.emit("m4sAudio:syncVolume");},syncMuted(){let e=C.$data.art.muted;C.$data.audio.muted=e,C.$data.art.emit("m4sAudio:syncMuted");},syncPlayBackRate(){let e=C.$data.art.playbackRate,t=C.$data.audio.playbackRate;e!==t&&(C.$data.audio.playbackRate=e,C.$data.art.emit("m4sAudio:syncPlayBackRate"));}},update(e){var u;this.unbind(),this.unbindAudio(),this.$data.option=null,this.$data.option=e.audioList,this.$data.latestSyncTime=0;const t=this;if((u=e.audioList)!=null&&u.length){e.audioList.sort((c,m)=>m.bandwidth-c.bandwidth);let i=e.audioList[0];const a=`artplayer-m4s-audio-${e.from}`,r=this.$data.art.storage.get(a);let n={index:0,html:i.soundQualityCodeText,url:i.url};if(r){const c=e.audioList.findIndex(m=>m.soundQualityCode===r.soundQualityCode);if(c!==-1){const m=e.audioList[c];n.index=c,n.url=m.url,n.html=m.soundQualityCodeText;}else console.warn(ae+"没有找到上次选的音频代码，使用当前默认第一个音频");}let l=e.audioList.map((c,m)=>({default:m===n.index,html:c.soundQualityCodeText,url:c.url,soundQualityCode:c.soundQualityCode,soundQualityCodeText:c.soundQualityCodeText,codecs:c.codecs,mimeType:c.mimeType,bandwidth:c.bandwidth,size:c.size}));const s={name:xe,width:200,html:"音频",tooltip:n.html,icon:`
				<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
					<path d="M123.5 438.5h131.3v310.7H123.5zM769.2 438.5h131.3v310.7H769.2z"></path>
					<path d="M859.8 398.8h-48.3c-7.9 0-15.4 1.6-22.5 3.9v-32.4c0-125.2-101.9-227.1-227.1-227.1h-99.7c-125.2 0-227.1 101.9-227.1 227.1v32.4c-7.1-2.3-14.6-3.9-22.5-3.9h-48.3c-40.9 0-74.2 33.3-74.2 74.2v243c0 40.9 33.3 74.2 74.2 74.2h48.3c40.9 0 74.2-33.3 74.2-74.2V370.3c0-96.7 78.7-175.4 175.4-175.4h99.7c96.7 0 175.4 78.7 175.4 175.4V716c0 40.9 33.3 74.2 74.2 74.2h48.3c40.9 0 74.2-33.3 74.2-74.2V473c-0.1-40.9-33.3-74.2-74.2-74.2zM235.1 716c0 12.4-10.1 22.5-22.5 22.5h-48.3c-12.4 0-22.5-10.1-22.5-22.5V473c0-12.4 10.1-22.5 22.5-22.5h48.3c12.4 0 22.5 10.1 22.5 22.5v243z m647.2 0c0 12.4-10.1 22.5-22.5 22.5h-48.3c-12.4 0-22.5-10.1-22.5-22.5V473c0-12.4 10.1-22.5 22.5-22.5h48.3c12.4 0 22.5 10.1 22.5 22.5v243z"></path>
					<path d="M531.3 652.3c-1.7 0-3.3-0.1-5-0.4-10.2-1.7-18.7-8.3-22.7-17.8l-41.1-95.4-37 43.8c-8.1 9.6-19.9 15.1-32.5 15.1h-71.9V546h67.6l56.6-67.1c6.8-8.1 17-12 27.5-10.4 10.4 1.5 19.1 8.2 23.3 17.9l41.6 96.7 21.9-24c8-8.8 19.5-13.9 31.4-13.9h102.4v51.7H595l-41.6 45.7c-5.6 6.2-13.7 9.7-22.1 9.7z"></path>
				</svg>
				`,selector:l,onSelect:function(c){let m=c;return console.log(ae+"切换音频",m),t.handler.playUrl(m.url),t.$data.art.storage.set(a,{soundQualityCode:m.soundQualityCode}),c.html}};C.$data.art.setting.find(xe)?C.$data.art.setting.update(s):C.$data.art.setting.add(s),o.info("加载m4s的音频：",n),C.handler.playUrl(n.url),this.bind(),this.bindAudio();}else C.handler.playUrl(""),C.$data.art.setting.option.find(a=>a.name===xe)&&C.$data.art.setting.remove(xe);},bind(){Object.keys(this.events).forEach(e=>{this.$data.art.on(e,this.events[e]);});},bindAudio(){Object.keys(this.audioEvents).forEach(e=>{this.$data.audio.addEventListener(e,this.audioEvents[e],{once:true});});},unbind(){Object.keys(this.events).forEach(e=>{this.$data.art.off(e,this.events[e]);});},unbindAudio(){Object.keys(this.audioEvents).forEach(e=>{this.$data.audio.removeEventListener(e,this.audioEvents[e]);});}},At=e=>t=>(C.$data.art=t,typeof e.onRestart=="function"&&(C.userEvent.onRestart=e.onRestart),C.update({from:e.from,audioList:e.audioList}),{name:C.$key.plugin_KEY,update(...u){C.update(...u),C.handler.syncVolume(),C.handler.syncMuted(),C.handler.syncTime();},getAudio(){return C.$data.audio},getCurrentPlayConfig(){return C.$data.option.find(u=>u.url===C.$data.audio.src)}}),je=C.$key.plugin_KEY,gu={events:{control:e=>{e&&_.updateOnlineTotal({showOnlineTotal:_.$data.option.showOnlineTotal,onlineInfoParams:_.$data.option.onlineInfoParams});}},bind(){Object.keys(this.events).forEach(e=>{_.art.on(e,this.events[e]);});},unbind(){Object.keys(this.events).forEach(e=>{_.art.off(e,this.events[e]);});}},_={art:null,$el:{$topWrap:null,$topTitle:null,$topTitleText:null,$topTitleFollow:null,$topTitleFollowText:null,$topRight:null,$topRightFollow:null},$data:{isInit:false,__option:{},option:{}},$key:{plugin_KEY:"plugin-bilibili-topToolBar"},init(e){this.art.layers.add({name:"top-wrap",html:`
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
            `,mounted:async function(t){_.$el.$topWrap=t,_.$el.$topTitle=t.querySelector(".art-player-top-title"),_.$el.$topTitleText=t.querySelector(".art-player-top-title-text"),_.$el.$topTitleFollow=t.querySelector(".art-player-top-follow"),_.$el.$topTitleFollowText=t.querySelector(".art-player-top-follow-text"),_.$el.$topRight=t.querySelector(".art-player-top-right"),_.$el.$topRightFollow=t.querySelector(".art-player-top-right-follow"),_.update(e),gu.bind();}});},update(e){this.$data.isInit||(this.$data.isInit=true,Object.defineProperties(this.$data.option,{showWrap:{set(t){_.$data.__option.showWrap=t;},get(){return _.$data.__option.showWrap}},showTitle:{set(t){_.$data.__option.showTitle=t;},get(){return _.$data.__option.showTitle}},title:{set(t){_.$data.__option.title=t,typeof t=="string"&&(_.$el.$topTitleText.innerText=t);},get(){return _.$data.__option.title}},showOnlineTotal:{set(t){_.$data.__option.showOnlineTotal=t;},get(){return _.$data.__option.showOnlineTotal}},onlineInfoParams:{set(t){_.$data.__option.onlineInfoParams=t,_.updateOnlineTotal({showOnlineTotal:this.showOnlineTotal,onlineInfoParams:t});},get(){return _.$data.__option.onlineInfoParams}},showRight:{set(t){_.$data.__option.showRight=t;},get(){return _.$data.__option.showRight}},showRightFollow:{set(t){_.$data.__option.showRightFollow=t;},get(){return _.$data.__option.showRightFollow}}})),Object.assign(this.$data.option,e);},async updateOnlineTotal(e){if(!e.showOnlineTotal)return;let t=await Ie.onlineTotal({aid:e.onlineInfoParams.aid,bvid:e.onlineInfoParams.bvid,cid:e.onlineInfoParams.cid});t&&(_.$el.$topTitleFollowText.innerText=`${t.total||t.count||0}人正在看`);}},Et=e=>t=>(_.art=t,_.init(e),{name:_.$key.plugin_KEY,update(u){_.update(u);}}),vt=_.$key.plugin_KEY,Dt={S:"万与丑专业丛东丝丢两严丧个丬丰临为丽举么义乌乐乔习乡书买乱争于亏云亘亚产亩亲亵亸亿仅从仑仓仪们价众优伙会伛伞伟传伤伥伦伧伪伫体余佣佥侠侣侥侦侧侨侩侪侬俣俦俨俩俪俭债倾偬偻偾偿傥傧储傩儿兑兖党兰关兴兹养兽冁内冈册写军农冢冯冲决况冻净凄凉凌减凑凛几凤凫凭凯击凼凿刍划刘则刚创删别刬刭刽刿剀剂剐剑剥剧劝办务劢动励劲劳势勋勐勚匀匦匮区医华协单卖卢卤卧卫却卺厂厅历厉压厌厍厕厢厣厦厨厩厮县参叆叇双发变叙叠叶号叹叽吁后吓吕吗吣吨听启吴呒呓呕呖呗员呙呛呜咏咔咙咛咝咤咴咸哌响哑哒哓哔哕哗哙哜哝哟唛唝唠唡唢唣唤唿啧啬啭啮啰啴啸喷喽喾嗫呵嗳嘘嘤嘱噜噼嚣嚯团园囱围囵国图圆圣圹场坂坏块坚坛坜坝坞坟坠垄垅垆垒垦垧垩垫垭垯垱垲垴埘埙埚埝埯堑堕塆墙壮声壳壶壸处备复够头夸夹夺奁奂奋奖奥妆妇妈妩妪妫姗姜娄娅娆娇娈娱娲娴婳婴婵婶媪嫒嫔嫱嬷孙学孪宁宝实宠审宪宫宽宾寝对寻导寿将尔尘尧尴尸尽层屃屉届属屡屦屿岁岂岖岗岘岙岚岛岭岳岽岿峃峄峡峣峤峥峦崂崃崄崭嵘嵚嵛嵝嵴巅巩巯币帅师帏帐帘帜带帧帮帱帻帼幂幞干并广庄庆庐庑库应庙庞废庼廪开异弃张弥弪弯弹强归当录彟彦彻径徕御忆忏忧忾怀态怂怃怄怅怆怜总怼怿恋恳恶恸恹恺恻恼恽悦悫悬悭悯惊惧惨惩惫惬惭惮惯愍愠愤愦愿慑慭憷懑懒懔戆戋戏戗战戬户扎扑扦执扩扪扫扬扰抚抛抟抠抡抢护报担拟拢拣拥拦拧拨择挂挚挛挜挝挞挟挠挡挢挣挤挥挦捞损捡换捣据捻掳掴掷掸掺掼揸揽揿搀搁搂搅携摄摅摆摇摈摊撄撑撵撷撸撺擞攒敌敛数斋斓斗斩断无旧时旷旸昙昼昽显晋晒晓晔晕晖暂暧札术朴机杀杂权条来杨杩杰极构枞枢枣枥枧枨枪枫枭柜柠柽栀栅标栈栉栊栋栌栎栏树栖样栾桊桠桡桢档桤桥桦桧桨桩梦梼梾检棂椁椟椠椤椭楼榄榇榈榉槚槛槟槠横樯樱橥橱橹橼檐檩欢欤欧歼殁殇残殒殓殚殡殴毁毂毕毙毡毵氇气氢氩氲汇汉污汤汹沓沟没沣沤沥沦沧沨沩沪沵泞泪泶泷泸泺泻泼泽泾洁洒洼浃浅浆浇浈浉浊测浍济浏浐浑浒浓浔浕涂涌涛涝涞涟涠涡涢涣涤润涧涨涩淀渊渌渍渎渐渑渔渖渗温游湾湿溃溅溆溇滗滚滞滟滠满滢滤滥滦滨滩滪漤潆潇潋潍潜潴澜濑濒灏灭灯灵灾灿炀炉炖炜炝点炼炽烁烂烃烛烟烦烧烨烩烫烬热焕焖焘煅煳熘爱爷牍牦牵牺犊犟状犷犸犹狈狍狝狞独狭狮狯狰狱狲猃猎猕猡猪猫猬献獭玑玙玚玛玮环现玱玺珉珏珐珑珰珲琎琏琐琼瑶瑷璇璎瓒瓮瓯电画畅畲畴疖疗疟疠疡疬疮疯疱疴痈痉痒痖痨痪痫痴瘅瘆瘗瘘瘪瘫瘾瘿癞癣癫癯皑皱皲盏盐监盖盗盘眍眦眬着睁睐睑瞒瞩矫矶矾矿砀码砖砗砚砜砺砻砾础硁硅硕硖硗硙硚确硷碍碛碜碱碹磙礼祎祢祯祷祸禀禄禅离秃秆种积称秽秾稆税稣稳穑穷窃窍窑窜窝窥窦窭竖竞笃笋笔笕笺笼笾筑筚筛筜筝筹签简箓箦箧箨箩箪箫篑篓篮篱簖籁籴类籼粜粝粤粪粮糁糇紧絷纟纠纡红纣纤纥约级纨纩纪纫纬纭纮纯纰纱纲纳纴纵纶纷纸纹纺纻纼纽纾线绀绁绂练组绅细织终绉绊绋绌绍绎经绐绑绒结绔绕绖绗绘给绚绛络绝绞统绠绡绢绣绤绥绦继绨绩绪绫绬续绮绯绰绱绲绳维绵绶绷绸绹绺绻综绽绾绿缀缁缂缃缄缅缆缇缈缉缊缋缌缍缎缏缐缑缒缓缔缕编缗缘缙缚缛缜缝缞缟缠缡缢缣缤缥缦缧缨缩缪缫缬缭缮缯缰缱缲缳缴缵罂网罗罚罢罴羁羟羡翘翙翚耢耧耸耻聂聋职聍联聩聪肃肠肤肷肾肿胀胁胆胜胧胨胪胫胶脉脍脏脐脑脓脔脚脱脶脸腊腌腘腭腻腼腽腾膑臜舆舣舰舱舻艰艳艹艺节芈芗芜芦苁苇苈苋苌苍苎苏苘苹茎茏茑茔茕茧荆荐荙荚荛荜荞荟荠荡荣荤荥荦荧荨荩荪荫荬荭荮药莅莜莱莲莳莴莶获莸莹莺莼萚萝萤营萦萧萨葱蒇蒉蒋蒌蓝蓟蓠蓣蓥蓦蔷蔹蔺蔼蕲蕴薮藁藓虏虑虚虫虬虮虽虾虿蚀蚁蚂蚕蚝蚬蛊蛎蛏蛮蛰蛱蛲蛳蛴蜕蜗蜡蝇蝈蝉蝎蝼蝾螀螨蟏衅衔补衬衮袄袅袆袜袭袯装裆裈裢裣裤裥褛褴襁襕见观觃规觅视觇览觉觊觋觌觍觎觏觐觑觞触觯詟誉誊讠计订讣认讥讦讧讨让讪讫训议讯记讱讲讳讴讵讶讷许讹论讻讼讽设访诀证诂诃评诅识诇诈诉诊诋诌词诎诏诐译诒诓诔试诖诗诘诙诚诛诜话诞诟诠诡询诣诤该详诧诨诩诪诫诬语诮误诰诱诲诳说诵诶请诸诹诺读诼诽课诿谀谁谂调谄谅谆谇谈谊谋谌谍谎谏谐谑谒谓谔谕谖谗谘谙谚谛谜谝谞谟谠谡谢谣谤谥谦谧谨谩谪谫谬谭谮谯谰谱谲谳谴谵谶谷豮贝贞负贠贡财责贤败账货质贩贪贫贬购贮贯贰贱贲贳贴贵贶贷贸费贺贻贼贽贾贿赀赁赂赃资赅赆赇赈赉赊赋赌赍赎赏赐赑赒赓赔赕赖赗赘赙赚赛赜赝赞赟赠赡赢赣赪赵赶趋趱趸跃跄跖跞践跶跷跸跹跻踊踌踪踬踯蹑蹒蹰蹿躏躜躯车轧轨轩轪轫转轭轮软轰轱轲轳轴轵轶轷轸轹轺轻轼载轾轿辀辁辂较辄辅辆辇辈辉辊辋辌辍辎辏辐辑辒输辔辕辖辗辘辙辚辞辩辫边辽达迁过迈运还这进远违连迟迩迳迹适选逊递逦逻遗遥邓邝邬邮邹邺邻郁郄郏郐郑郓郦郧郸酝酦酱酽酾酿释里鉅鉴銮錾钆钇针钉钊钋钌钍钎钏钐钑钒钓钔钕钖钗钘钙钚钛钝钞钟钠钡钢钣钤钥钦钧钨钩钪钫钬钭钮钯钰钱钲钳钴钵钶钷钸钹钺钻钼钽钾钿铀铁铂铃铄铅铆铈铉铊铋铍铎铏铐铑铒铕铗铘铙铚铛铜铝铞铟铠铡铢铣铤铥铦铧铨铪铫铬铭铮铯铰铱铲铳铴铵银铷铸铹铺铻铼铽链铿销锁锂锃锄锅锆锇锈锉锊锋锌锍锎锏锐锑锒锓锔锕锖锗错锚锜锞锟锠锡锢锣锤锥锦锨锩锫锬锭键锯锰锱锲锳锴锵锶锷锸锹锺锻锼锽锾锿镀镁镂镃镆镇镈镉镊镌镍镎镏镐镑镒镕镖镗镙镚镛镜镝镞镟镠镡镢镣镤镥镦镧镨镩镪镫镬镭镮镯镰镱镲镳镴镶长门闩闪闫闬闭问闯闰闱闲闳间闵闶闷闸闹闺闻闼闽闾闿阀阁阂阃阄阅阆阇阈阉阊阋阌阍阎阏阐阑阒阓阔阕阖阗阘阙阚阛队阳阴阵阶际陆陇陈陉陕陧陨险随隐隶隽难雏雠雳雾霁霉霭靓静靥鞑鞒鞯鞴韦韧韨韩韪韫韬韵页顶顷顸项顺须顼顽顾顿颀颁颂颃预颅领颇颈颉颊颋颌颍颎颏颐频颒颓颔颕颖颗题颙颚颛颜额颞颟颠颡颢颣颤颥颦颧风飏飐飑飒飓飔飕飖飗飘飙飚飞飨餍饤饥饦饧饨饩饪饫饬饭饮饯饰饱饲饳饴饵饶饷饸饹饺饻饼饽饾饿馀馁馂馃馄馅馆馇馈馉馊馋馌馍馎馏馐馑馒馓馔馕马驭驮驯驰驱驲驳驴驵驶驷驸驹驺驻驼驽驾驿骀骁骂骃骄骅骆骇骈骉骊骋验骍骎骏骐骑骒骓骔骕骖骗骘骙骚骛骜骝骞骟骠骡骢骣骤骥骦骧髅髋髌鬓魇魉鱼鱽鱾鱿鲀鲁鲂鲄鲅鲆鲇鲈鲉鲊鲋鲌鲍鲎鲏鲐鲑鲒鲓鲔鲕鲖鲗鲘鲙鲚鲛鲜鲝鲞鲟鲠鲡鲢鲣鲤鲥鲦鲧鲨鲩鲪鲫鲬鲭鲮鲯鲰鲱鲲鲳鲴鲵鲶鲷鲸鲹鲺鲻鲼鲽鲾鲿鳀鳁鳂鳃鳄鳅鳆鳇鳈鳉鳊鳋鳌鳍鳎鳏鳐鳑鳒鳓鳔鳕鳖鳗鳘鳙鳛鳜鳝鳞鳟鳠鳡鳢鳣鸟鸠鸡鸢鸣鸤鸥鸦鸧鸨鸩鸪鸫鸬鸭鸮鸯鸰鸱鸲鸳鸴鸵鸶鸷鸸鸹鸺鸻鸼鸽鸾鸿鹀鹁鹂鹃鹄鹅鹆鹇鹈鹉鹊鹋鹌鹍鹎鹏鹐鹑鹒鹓鹔鹕鹖鹗鹘鹚鹛鹜鹝鹞鹟鹠鹡鹢鹣鹤鹥鹦鹧鹨鹩鹪鹫鹬鹭鹯鹰鹱鹲鹳鹴鹾麦麸黄黉黡黩黪黾鼋鼌鼍鼗鼹齄齐齑齿龀龁龂龃龄龅龆龇龈龉龊龋龌龙龚龛龟志制咨只里系范松没尝尝闹面准钟别闲乾尽脏拼冲里",T:"萬與醜專業叢東絲丟兩嚴喪個丬豐臨爲麗舉麼義烏樂喬習鄉書買亂爭於虧雲亙亞產畝親褻嚲億僅從侖倉儀們價衆優夥會傴傘偉傳傷倀倫傖僞佇體餘傭僉俠侶僥偵側僑儈儕儂俁儔儼倆儷儉債傾傯僂僨償儻儐儲儺兒兌兗黨蘭關興茲養獸囅內岡冊寫軍農冢馮沖決況凍淨淒涼凌減湊凜幾鳳鳧憑凱擊凼鑿芻劃劉則剛創刪別剗剄劊劌剴劑剮劍剝劇勸辦務勱動勵勁勞勢勳勐勩勻匭匱區醫華協單賣盧滷臥衛卻巹廠廳歷厲壓厭厙廁廂厴廈廚廄廝縣參靉靆雙發變敘疊葉號嘆嘰籲後嚇呂嗎唚噸聽啓吳嘸囈嘔嚦唄員咼嗆嗚詠咔嚨嚀噝吒咴鹹哌響啞噠嘵嗶噦譁噲嚌噥喲嘜嗊嘮啢嗩唣喚唿嘖嗇囀齧囉嘽嘯噴嘍嚳囁呵噯噓嚶囑嚕噼囂嚯團園囪圍圇國圖圓聖壙場阪壞塊堅壇壢壩塢墳墜壟壠壚壘墾垧堊墊埡墶壋塏堖塒壎堝埝垵塹墮壪牆壯聲殼壺壼處備復夠頭誇夾奪奩奐奮獎奧妝婦媽嫵嫗嬀姍姜婁婭嬈嬌孌娛媧嫺嫿嬰嬋嬸媼嬡嬪嬙嬤孫學孿寧寶實寵審憲宮寬賓寢對尋導壽將爾塵堯尷屍盡層屓屜屆屬屢屨嶼歲豈嶇崗峴嶴嵐島嶺嶽崬巋嶨嶧峽嶢嶠崢巒嶗崍嶮嶄嶸嶔嵛嶁嵴巔鞏巰幣帥師幃帳簾幟帶幀幫幬幘幗冪襆幹並廣莊慶廬廡庫應廟龐廢廎廩開異棄張彌弳彎彈強歸當錄彠彥徹徑徠御憶懺憂愾懷態慫憮慪悵愴憐總懟懌戀懇惡慟懨愷惻惱惲悅愨懸慳憫驚懼慘懲憊愜慚憚慣愍慍憤憒願懾憖憷懣懶懍戇戔戲戧戰戩戶扎撲扦執擴捫掃揚擾撫拋摶摳掄搶護報擔擬攏揀擁攔擰撥擇掛摯攣掗撾撻挾撓擋撟掙擠揮撏撈損撿換搗據捻擄摑擲撣摻摜揸攬撳攙擱摟攪攜攝攄擺搖擯攤攖撐攆擷擼攛擻攢敵斂數齋斕鬥斬斷無舊時曠暘曇晝曨顯晉曬曉曄暈暉暫曖札術樸機殺雜權條來楊榪傑極構樅樞棗櫪梘棖槍楓梟櫃檸檉梔柵標棧櫛櫳棟櫨櫟欄樹棲樣欒桊椏橈楨檔榿橋樺檜槳樁夢檮棶檢櫺槨櫝槧欏橢樓欖櫬櫚櫸檟檻檳櫧橫檣櫻櫫櫥櫓櫞檐檁歡歟歐殲歿殤殘殞殮殫殯毆毀轂畢斃氈毿氌氣氫氬氳匯漢污湯洶沓溝沒灃漚瀝淪滄渢潙滬沵濘淚澩瀧瀘濼瀉潑澤涇潔灑窪浹淺漿澆湞溮濁測澮濟瀏滻渾滸濃潯濜塗涌濤澇淶漣潿渦溳渙滌潤澗漲澀澱淵淥漬瀆漸澠漁瀋滲溫遊灣溼潰濺漵漊潷滾滯灩灄滿瀅濾濫灤濱灘澦漤瀠瀟瀲濰潛瀦瀾瀨瀕灝滅燈靈災燦煬爐燉煒熗點煉熾爍爛烴燭煙煩燒燁燴燙燼熱煥燜燾煅煳熘愛爺牘犛牽犧犢犟狀獷獁猶狽狍獮獰獨狹獅獪猙獄猻獫獵獼玀豬貓蝟獻獺璣璵瑒瑪瑋環現瑲璽珉珏琺瓏璫琿璡璉瑣瓊瑤璦璇瓔瓚甕甌電畫暢畲疇癤療瘧癘瘍癧瘡瘋皰痾癰痙癢瘂癆瘓癇癡癉瘮瘞瘻癟癱癮癭癩癬癲癯皚皺皸盞鹽監蓋盜盤瞘眥矓着睜睞瞼瞞矚矯磯礬礦碭碼磚硨硯碸礪礱礫礎硜硅碩硤磽磑礄確礆礙磧磣鹼碹磙禮禕禰禎禱禍稟祿禪離禿稈種積稱穢穠穭稅穌穩穡窮竊竅窯竄窩窺竇窶豎競篤筍筆筧箋籠籩築篳篩簹箏籌籤簡籙簀篋籜籮簞簫簣簍籃籬籪籟糴類秈糶糲粵糞糧糝餱緊縶糹糾紆紅紂纖紇約級紈纊紀紉緯紜紘純紕紗綱納紝縱綸紛紙紋紡紵紖紐紓線紺紲紱練組紳細織終縐絆紼絀紹繹經紿綁絨結絝繞絰絎繪給絢絳絡絕絞統綆綃絹繡綌綏絛繼綈績緒綾緓續綺緋綽鞝緄繩維綿綬繃綢綯綹綣綜綻綰綠綴緇緙緗緘緬纜緹緲緝縕繢緦綞緞緶線緱縋緩締縷編緡緣縉縛縟縝縫縗縞纏縭縊縑繽縹縵縲纓縮繆繅纈繚繕繒繮繾繰繯繳纘罌網羅罰罷羆羈羥羨翹翽翬耮耬聳恥聶聾職聹聯聵聰肅腸膚肷腎腫脹脅膽勝朧腖臚脛膠脈膾髒臍腦膿臠腳脫腡臉臘醃膕齶膩靦膃騰臏臢輿艤艦艙艫艱豔艹藝節羋薌蕪蘆蓯葦藶莧萇蒼苧蘇檾蘋莖蘢蔦塋煢繭荊薦薘莢蕘蓽蕎薈薺蕩榮葷滎犖熒蕁藎蓀蔭蕒葒葤藥蒞莜萊蓮蒔萵薟獲蕕瑩鶯蓴蘀蘿螢營縈蕭薩蔥蕆蕢蔣蔞藍薊蘺蕷鎣驀薔蘞藺藹蘄蘊藪藁蘚虜慮虛蟲虯蟣雖蝦蠆蝕蟻螞蠶蠔蜆蠱蠣蟶蠻蟄蛺蟯螄蠐蛻蝸蠟蠅蟈蟬蠍螻蠑螿蟎蠨釁銜補襯袞襖嫋褘襪襲襏裝襠褌褳襝褲襉褸襤襁襴見觀覎規覓視覘覽覺覬覡覿覥覦覯覲覷觴觸觶讋譽謄訁計訂訃認譏訐訌討讓訕訖訓議訊記訒講諱謳詎訝訥許訛論訩訟諷設訪訣證詁訶評詛識詗詐訴診詆謅詞詘詔詖譯詒誆誄試詿詩詰詼誠誅詵話誕詬詮詭詢詣諍該詳詫諢詡譸誡誣語誚誤誥誘誨誑說誦誒請諸諏諾讀諑誹課諉諛誰諗調諂諒諄誶談誼謀諶諜謊諫諧謔謁謂諤諭諼讒諮諳諺諦謎諞諝謨讜謖謝謠謗諡謙謐謹謾謫譾謬譚譖譙讕譜譎讞譴譫讖谷豶貝貞負貟貢財責賢敗賬貨質販貪貧貶購貯貫貳賤賁貰貼貴貺貸貿費賀貽賊贄賈賄貲賃賂贓資賅贐賕賑賚賒賦賭齎贖賞賜贔賙賡賠賧賴賵贅賻賺賽賾贗贊贇贈贍贏贛赬趙趕趨趲躉躍蹌跖躒踐躂蹺蹕躚躋踊躊蹤躓躑躡蹣躕躥躪躦軀車軋軌軒軑軔轉軛輪軟轟軲軻轤軸軹軼軤軫轢軺輕軾載輊轎輈輇輅較輒輔輛輦輩輝輥輞輬輟輜輳輻輯轀輸轡轅轄輾轆轍轔辭辯辮邊遼達遷過邁運還這進遠違連遲邇逕跡適選遜遞邐邏遺遙鄧鄺鄔郵鄒鄴鄰鬱郄郟鄶鄭鄆酈鄖鄲醞醱醬釅釃釀釋裏鉅鑑鑾鏨釓釔針釘釗釙釕釷釺釧釤鈒釩釣鍆釹鍚釵鈃鈣鈈鈦鈍鈔鍾鈉鋇鋼鈑鈐鑰欽鈞鎢鉤鈧鈁鈥鈄鈕鈀鈺錢鉦鉗鈷鉢鈳鉕鈽鈸鉞鑽鉬鉭鉀鈿鈾鐵鉑鈴鑠鉛鉚鈰鉉鉈鉍鈹鐸鉶銬銠鉺銪鋏鋣鐃銍鐺銅鋁銱銦鎧鍘銖銑鋌銩銛鏵銓鉿銚鉻銘錚銫鉸銥鏟銃鐋銨銀銣鑄鐒鋪鋙錸鋱鏈鏗銷鎖鋰鋥鋤鍋鋯鋨鏽銼鋝鋒鋅鋶鐦鐗銳銻鋃鋟鋦錒錆鍺錯錨錡錁錕錩錫錮鑼錘錐錦杴錈錇錟錠鍵鋸錳錙鍥鍈鍇鏘鍶鍔鍤鍬鍾鍛鎪鍠鍰鎄鍍鎂鏤鎡鏌鎮鎛鎘鑷鐫鎳鎿鎦鎬鎊鎰鎔鏢鏜鏍鏰鏞鏡鏑鏃鏇鏐鐔钁鐐鏷鑥鐓鑭鐠鑹鏹鐙鑊鐳鐶鐲鐮鐿鑔鑣鑞鑲長門閂閃閆閈閉問闖閏闈閒閎間閔閌悶閘鬧閨聞闥閩閭闓閥閣閡閫鬮閱閬闍閾閹閶鬩閿閽閻閼闡闌闃闠闊闋闔闐闒闕闞闤隊陽陰陣階際陸隴陳陘陝隉隕險隨隱隸雋難雛讎靂霧霽黴靄靚靜靨韃鞽韉鞴韋韌韍韓韙韞韜韻頁頂頃頇項順須頊頑顧頓頎頒頌頏預顱領頗頸頡頰頲頜潁熲頦頤頻頮頹頷頴穎顆題顒顎顓顏額顳顢顛顙顥纇顫顬顰顴風颺颭颮颯颶颸颼颻飀飄飆飈飛饗饜飣飢飥餳飩餼飪飫飭飯飲餞飾飽飼飿飴餌饒餉餄餎餃餏餅餑餖餓餘餒餕餜餛餡館餷饋餶餿饞饁饃餺餾饈饉饅饊饌饢馬馭馱馴馳驅馹駁驢駔駛駟駙駒騶駐駝駑駕驛駘驍罵駰驕驊駱駭駢驫驪騁驗騂駸駿騏騎騍騅騌驌驂騙騭騤騷騖驁騮騫騸驃騾驄驏驟驥驦驤髏髖髕鬢魘魎魚魛魢魷魨魯魴魺鮁鮃鮎鱸鮋鮓鮒鮊鮑鱟鮍鮐鮭鮚鮳鮪鮞鮦鰂鮜鱠鱭鮫鮮鮺鯗鱘鯁鱺鰱鰹鯉鰣鰷鯀鯊鯇鮶鯽鯒鯖鯪鯕鯫鯡鯤鯧鯝鯢鮎鯛鯨鰺鯴鯔鱝鰈鰏鱨鯷鰮鰃鰓鱷鰍鰒鰉鰁鱂鯿鰠鰲鰭鰨鰥鰩鰟鰜鰳鰾鱈鱉鰻鰵鱅鰼鱖鱔鱗鱒鱯鱤鱧鱣鳥鳩雞鳶鳴鳲鷗鴉鶬鴇鴆鴣鶇鸕鴨鴞鴦鴒鴟鴝鴛鷽鴕鷥鷙鴯鴰鵂鴴鵃鴿鸞鴻鵐鵓鸝鵑鵠鵝鵒鷳鵜鵡鵲鶓鵪鵾鵯鵬鵮鶉鶊鵷鷫鶘鶡鶚鶻鶿鶥鶩鷊鷂鶲鶹鶺鷁鶼鶴鷖鸚鷓鷚鷯鷦鷲鷸鷺鸇鷹鸌鸏鸛鸘鹺麥麩黃黌黶黷黲黽黿鼂鼉鞀鼴齇齊齏齒齔齕齗齟齡齙齠齜齦齬齪齲齷龍龔龕龜志制諮只裏系範鬆沒嚐嚐鬧面準鍾別閒乾盡髒拼衝裡"},Xe=Dt.S,et=Dt.T,$e=(e,t)=>{let u,i,a,r,n="",l;for(t?(u=Xe,i=et):(u=et,i=Xe),a=0;a<e.length;a++){r=e.charAt(a);const s=e.charCodeAt(a);if(!(s>13312&&s<40899||s>63744&&s<64106)){n+=r;continue}l=u.indexOf(r),l!==-1?n+=i.charAt(l):n+=r;}return n},Cu={s2t:(e,t)=>{if(t){for(let u=0;u<t.length;u++)e.includes(t[u].src)&&(e=e.replaceAll(t[u].src,t[u].des));return $e(e,true)}else return $e(e,true)},t2s:(e,t)=>{if(t){for(let u=0;u<t.length;u++)e.includes(t[u].src)&&(e=e.replaceAll(t[u].src,t[u].des));return $e(e,false)}else return $e(e,false)}},Z="[artplayer-plugin-bilibiliCCSubTitle]：",Bt={src:"臟妳為傢蔔餵眾係姊託迴蹟儘封啟",des:"脏你为家卜喂众系姐托回迹尽对启",more_src:["乾脆","随著","相信著","奇蹟","拚命","採取","製造"],more_des:["干脆","随着","相信着","奇迹","拼命","采取","制造"],_custom_str:[],generteCustomStr(){for(let e=0;e<this.src.length;e++)this._custom_str.push({src:this.src[e],des:this.des[e]});for(let e=0;e<this.more_src.length;e++)this._custom_str.push({src:this.more_src[e],des:this.more_des[e]});},getCustomStr(){return this._custom_str}},ke={reset(){this.unbind();},bind(){X.art.on("video:timeupdate",this.event,this);},unbind(){X.clearSubTitle(),X.art.off("video:timeupdate",this.event);},event(){var a;let e=X.art.currentTime,t=(a=q.allSubTitleInfo[q.currentSelectIndex])==null?undefined:a.data;if(!t)return;let u=t.find(r=>r.to>=e&&r.from<=e),i=Array.from(X.$el.$subtitle.querySelectorAll(".art-subtitle-line"));for(let r=0;r<i.length;r++){const n=i[r],{from:l,to:s}=Reflect.get(n,"data-subtitle-line-info");if(s<=e||l>=e)n.remove();else if(u&&u.from===l&&u.to===s)return}if(u){let r=document.createElement("div");r.className="art-subtitle-line",Reflect.set(r,"data-subtitle-line-info",u),r.setAttribute("data-group","0"),r.innerHTML=u.content,X.$el.$subtitle.appendChild(r);}}},q={allSubTitleInfo:[],currentSelectIndex:-1,reset(){this.allSubTitleInfo=[],this.currentSelectIndex=-1;}},X={art:null,$key:{plugin_KEY:"plugin-bilibili-cc-subtitle"},$el:{$subtitle:null},async update(e){const t=this,u=`artplayer-bili-cc-subtitle-${e.from}`,i={config:{NAME:"setting-bilibili-cc-subtitle"},getDefaultSettingOption:()=>({name:i.config.NAME,width:200,html:"字幕",tooltip:"",icon:`
					<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 48 48">
						<path d="M0 0h48v48H0z" fill="none"/>
						<path fill="#ffffff" d="M40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM8 24h8v4H8v-4zm20 12H8v-4h20v4zm12 0h-8v-4h8v4zm0-8H20v-4h20v4z"/>
					</svg>
					`,selector:[],onSelect:function(c){let m=c;return t.art.storage.set(u,{lan:m.subTitle_lan}),ke.unbind(),q.currentSelectIndex=m.subTitle_index,m.subTitle_index!==-1&&ke.bind(),c.html}}),getSettingOption:()=>{const c=i.getDefaultSettingOption(),m=i.getDefaultSettingSelector();return c.selector.push(m),c.tooltip=m.html,c},getDefaultSettingSelector:()=>({default:true,html:"无",subTitle_lan:"",subTitle_index:0,subTitle_data:[]}),addSetting(c){let m=this.getSettingOption();if(c){m.selector.push(...c);let A={index:0,html:m.selector[0].html};const D=t.art.storage.get(u);if(D){const w=m.selector.findIndex($=>$.subTitle_lan===D.lan);if(w!==-1){const $=m.selector[w];console.log(Z+"选择字幕："+$.html),A.index=w,A.html=$.html;}else console.warn(Z+"没有找到上次选的字幕，使用当前默认无");}for(let w=0;w<m.selector.length;w++)m.selector[w].default=w===A.index;m.tooltip=A.html,q.currentSelectIndex=A.index;}this.isAddSetting()?(console.log(Z+"更新字幕菜单",c),t.art.setting.update(m)):t.art.setting.add(m);},isAddSetting(){return t.art.setting.find(this.config.NAME)!=null}};q.reset(),ke.reset();const a=i.getDefaultSettingSelector();q.currentSelectIndex=0,q.allSubTitleInfo.push({name:a.html,lan:a.subTitle_lan,data:a.subTitle_data}),i.addSetting();const r=[];this.$el.$subtitle=this.art.template.$subtitle;const n={cid:e.cid};if(e.ep_id&&Reflect.set(n,"ep_id",e.ep_id),e.aid)Reflect.set(n,"aid",e.aid);else if(e.bvid)Reflect.set(n,"bvid",e.bvid);else throw new TypeError("avid or bvid must give one");const l=await I.get(`https://${Fe.web_host}/x/player/v2?${p.toSearchParamsStr(n)}`,{fetch:true,allowInterceptConfig:false,responseType:"json",headers:{Host:"www.bilibili.com",Referer:"https://www.bilibili.com"}});if(!l.status){console.error(Z+"网络异常，获取视频的字幕信息失败",l);return}console.log(Z+"视频的字幕信息",l);const s=p.toJSON(l.data.responseText);if(!te.isWebApiSuccess(s)){console.error(Z+"获取视频的字幕信息失败",s);return}let d=s.data.subtitle.subtitles;if(!d.length){console.warn(Z+"获取字幕链接列表为空",s);return}for(let c=0;c<d.length;c++){const m=d[c];if(console.log(Z+"请求字幕链接信息："+m.subtitle_url),p.isNull(m.subtitle_url))continue;const g=await I.get(m.subtitle_url,{responseType:"json",allowInterceptConfig:false,headers:{Referer:"https://www.bilibili.com","User-Agent":p.getRandomPCUA()}});if(g.status){console.log(Z+"成功获取字幕信息");const D=p.toJSON(g.data.responseText).body;let w=q.allSubTitleInfo.length,$={name:m.lan_doc,lan:m.lan,data:D};q.allSubTitleInfo.push($),r.push({html:m.lan_doc,subTitle_index:w,subTitle_lan:m.lan,subTitle_data:D});}else console.error(Z+"请求字幕链接信息失败",g);}if(h.getValue("bili-bangumi-generateSimpleChineseSubtitle")){let c=q.allSubTitleInfo.find(m=>m.lan==="zh-Hant"||m.name.includes("繁体"));if(c){let m=[];c.data.forEach(D=>{const{content:w,...$}=D,S=Cu.t2s(w,Bt.getCustomStr());m.push({content:S,...$});});let g="简体（自动生成）",A=q.allSubTitleInfo.length;q.allSubTitleInfo.push({name:g,lan:"zh-CN-auto",data:m}),r.push({html:g,subTitle_index:A,subTitle_lan:"zh-CN-auto",subTitle_data:m});}}console.log(Z+"加载视频CC字幕信息",q.allSubTitleInfo),q.allSubTitleInfo[q.currentSelectIndex].data==null||q.allSubTitleInfo[q.currentSelectIndex].data.length==0||ke.bind(),i.addSetting(r);},clearSubTitle(){this.$el.$subtitle&&(this.$el.$subtitle.innerHTML="");},updateArtPlayer(e){this.art=e;}};function wt(e){return t=>(Bt.generteCustomStr(),X.updateArtPlayer(t),X.update(e),{name:X.$key.plugin_KEY,update(u){X.update(u);}})}const Ft=X.$key.plugin_KEY,xt="[artplayer-plugin-epChoose]：",$t=(e,t)=>t==null?e:`第${t}话 ${e}`,bu=e=>{let t="",u=e.EP_LIST.map((i,a)=>(i.isDefault&&(t=i.title),{html:i.title,default:i.isDefault,index:a,callback:i.onSelect}));return {name:ue.$key.SETTING_KEY,icon:'<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2295" width="24" height="24"><path d="M983.745542 312.673133a510.516437 510.516437 0 0 0-109.673817-162.745211A510.516437 510.516437 0 0 0 511.999823 0.000353 510.516437 510.516437 0 0 0 149.927922 149.927922 510.516437 510.516437 0 0 0 0.000353 511.999823a510.516437 510.516437 0 0 0 149.927569 362.071902A510.516437 510.516437 0 0 0 511.999823 1023.999294a510.516437 510.516437 0 0 0 362.071902-149.927569A510.516437 510.516437 0 0 0 1023.999294 511.999823c0-69.137584-13.488538-136.121238-40.253752-199.32669z m-62.852348 372.029408a443.779955 443.779955 0 0 1-95.05535 140.994061 441.908508 441.908508 0 0 1-313.73209 129.941935c-59.886283 0-118.042361-11.758333-172.667407-34.851274a443.779955 443.779955 0 0 1-141.029372-95.090661 441.908508 441.908508 0 0 1-129.941934-313.696779c0-59.886283 11.758333-118.042361 34.851274-172.667407a443.779955 443.779955 0 0 1 95.09066-141.029371 441.908508 441.908508 0 0 1 313.696779-129.941935c59.886283 0 118.077671 11.758333 172.667408 34.851274a443.779955 443.779955 0 0 1 141.064682 95.090661 441.908508 441.908508 0 0 1 129.941934 313.696778c0 59.886283-11.793643 118.042361-34.851274 172.667408zM388.413744 706.206519l317.792775-211.86185-317.792775-211.861849v423.723699z" p-id="2296"></path></svg>',html:"选集",selector:u,tooltip:t,onSelect:function(i){return typeof i.callback=="function"&&i.callback(i,i.index),i.html},mounted(i,a){i.setAttribute("data-plugin",ue.$key.SETTING_KEY);},playNext(){let i=this.selector.findIndex(a=>a.default);i!==-1&&i+1<this.selector.length-1?(i+=1,this.onSelect(this.selector[i])):console.warn(xt+"当前播放列表已无下一集");}}},Se={$event:{"video:ended":()=>{console.log(xt+"自动连播启用，播放下一集"),ue.$data.art.setting.find(ue.$key.SETTING_KEY).playNext();}},bind(e){Object.keys(this.$event).forEach(t=>{e.on(t,this.$event[t]);});},unbind(e){Object.keys(this.$event).forEach(t=>{e.off(t,this.$event[t]);});}},ue={$flag:{isInitCSS:false},$key:{SETTING_KEY:"setting-ep-choose",PLUGIN_KEY:"plugin-ep-choose"},$data:{art:null},resetEnv(){Object.keys(this.$data).forEach(e=>{Reflect.set(this.$data,e,null);});},init(e,t){this.resetEnv(),this.$data.art=e,Se.unbind(e),t.automaticBroadcast&&Se.bind(e),this.$flag.isInitCSS||(this.$flag.isInitCSS=true,N(`
			.art-setting-panel[data-plugin="${ue.$key.SETTING_KEY}"] .art-setting-item .art-setting-item-left-text{
				max-width: 210px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			`)),this.update(t);},update(e){if(Se.unbind(this.$data.art),e.EP_LIST==null||e.EP_LIST.length===0)return;let t=bu(e);this.$data.art.setting.find(this.$key.SETTING_KEY)?this.$data.art.setting.update(t):this.$data.art.setting.add(t),e.automaticBroadcast&&Se.bind(this.$data.art);}},kt=e=>t=>(ue.init(t,e),{name:ue.$key.PLUGIN_KEY,update(u){ue.update(u);}}),St=ue.$key.PLUGIN_KEY,yu={loading:'<img src="data:image/gif;base64,R0lGODlhWgBaALMOAHR0dAICAnd3dwEBAXh4eAMDAwkJCQ0NDQsLCxwcHA4ODggICHl5eQAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiYWE1ODg5ZS1jN2RmLTRmZmUtYjkzOS0wMmVkMTZhNmNjZDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0I2ODI2NjA1NzhGMTFFNkEyMEVDNzhEOUY1RkQxRjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0I2ODI2NUY1NzhGMTFFNkEyMEVDNzhEOUY1RkQxRjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjljYjgzNjY2LWYxYWUtNGMyZi1hMGEwLThhODJmYjIxM2U0MyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmU1NDE3YzFmLTllODAtMTE3OS04NjdiLWUyN2Y3M2VkMTZkOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAkKAA4ALAAAAABaAFoAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsz3Ta3HW+3bjuV7wbg/H7BYXEYu7YGCaVjuDr6Hwqjy2qEzphNlTaIZfi/ZqY2zHZW0KL1RVGeRS2wiXD+ad+x8jZHXx9GX9MO2GDG3mGGG52iX5ojUFVRWWXmJmam1IknJ+goXoioqWmnHSnqquUpDxVsLGys7S1tk6Uj4dIt72+v7K5IcKQF8R7r1asPC7HHs7L0Z3Ogclr0tES1BzH2NiLSMPWUcnAsd7gTboaxLnm77e527vq2uMm8FXy98/j8z77woFoxw9Fp2pI/mUgKBDMQXrp3iATqNBeD3rMIBaqN9BfwWsZ/7kBmpTwo0aLHIF4kchupIWAKftRLHgpDYeND7skq2jMY0NyjlgqwnlRZ8mfCDlCqyO0A1E7MJueBBrTnc0RG1lGXbfQZ0w8sFLEAhmRK0khKJtWConv6lZXaKlKNWpmyk6TJxVqoWvw7iu49fQyLOrJWitx4QTzQhnX4sTAeLsmjuyO8cWcLScjFan5K9kkl9KapSuG50vDlFtlkjtaNGvEkDeDXIlprsrOts+WjkzVUZmrkmN7zsu7dzkiK3OTRl78NO7WQenK7vkc9u7pt9UJrZz0+vDMwpVPGGuBPOfwrbO/8SbNu3j1oNkvc5/+s3T5oraYhn8f/6e1zfFHQZY+BPbiWkdIFajgLMs9ZgoX+1nmn0upYOfchPK95iCG+L034HHpAAAAh6V4OOAsQYh4hAAC3EJAMO3VV55WmLBYiwAv+pKiirzoE+CGDbAoZFu4eCGiiOdYCBgPQrK4wiVHXlDJk0w4mUUZAGgAXApNDtmMkVn+0KWVLhxppojFsHBmlGm26eabcMYp55x01mnnnXjSEAEAIfkECQoADgAsAAAAAFoAWgAABP/QyUmrvTjrzbv/YCiOZGmeaKqubOu+cCxbTT3fX23jfKbXDEZvSPk1gkSiMShM8pZMZ1HngjalEiPLip1qUdZr12Hcmbhj73eETlMY5QbpxxS7JfCyqH2v5NccfH1+cR6CgxVxchqHiIR6GGGOG38/kXRIkxyVR2SKn6CFbKGkpaangDmoq6ytdh2tsbKhmaqzpHW5uru8lbWGOr3Cw8TFvJghmMbLUVvBrxvImmq/sM+Jt9mWE9K2R2La4VRZ1yDdnuLaTefWQFfp4kjsgeXo38z4xMjz0fXK+QB37asHzB03gkqu8WPkD+GQgQbNNYxIY1zBRf0MLvQx8duFVBn/zXDU6DBkrXllqo3cdokkxYsnEaZUudJiRZceJVI8N5NmTZsHcfpcGXOnpBCcRJITCo2h0afuhlISFdTjxpY57RW91/QDJ3AKSzrNyi5XCl/vwr5sB6RqtToZPZhdalXs2LRrvXwEqgEuXXl2ia4Ty7Jq1qX0mO4pt7DbTDWJ6+aNnKkx48duu2oVchVrZcKXqW6+yzmw58GTR4eie/im5NZsP6emhUsqRNiUUeO2F4cJqGanRycLvfs3kqSmb0sNLnxvzyvIlyvXzPyqMD9oqU9fHLEzLwy7TJZOTfovdRF+y3d2ThZeNsDkBRt272r87vLz6Z+Kst71L/2x8GcapHsqBWTgMOZxB9uBDIbXnDcAAricaxFKeB42FUY4IYbpHJCAAgYYsEABoQRgYgA6nIiicaNw9VUQ/zCoIhMz6tKfBcco84MAAjTIQI0/npjjfZtspQiPKdTogJI4AgcGKDwKoIKQKprok5MpCFBGlEgmWSWTPPBoBJctBCkklmFyKaULZgYwVxJqwnDmhtN4hWadJtyJ55589unnn4AGKuigG0QAACH5BAkKAA4ALAAAAABaAFoAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsW009319t43ym1wxGb0j5NYJEojEoTPKWTOfzF5VOfi1o0yoxNlTaLdf7PXmr3CvZpE1bGORyKOx+x+Udev0CX3vaexhBcRyAgRmDXhp6U3ghfVQ+VEhDd5aXmJmajjmbnp+gOiShpKWWlCCmqqtHYn86TLGys7S1tre3kyKTuL2+v7mwrnnChxi6c8VqrFnKqc4OrNJ4yM9AYtPSy627xaLZzNHQr9fiNsC22ULVneWR6PC/k+zk3PQk8bHz48Tu/ErC7hXy9q9SwIKLCJZbgaVeooXW7CHsImpgww37ILaTqLGIIotG/zAe7NiPI7cKd1BJ8nMh48mISNidUomIUMuRLzfGdJYyloeHsG5eEyjSH8Qzsx5Byklx6MRjCl/y8olPFg2cNEvu7Jg0BVWPTkmC3MrUZ8VlYLAOG7sO4cWmnEa4zMrWHFOwJ5egmLu2qEm6dvMS1bkUcEKjd+FWOYNyh9bCfQ//7csr8Fm7hAevnAx14Z1thvECDd2Zs1DBmkgrhtwNMWBFS2ZGFs06mevIsnvOBl0bZluxcJEKWfqUt+bSZEP3nDBa9erjp5PvBtrKFS2HvQnbVW2LDxq20K+6BqeqeWuT5Mtnxx48/SdZ4RtDJO4+tb7i4nPm2/+L9/ms/AVYi3Z/tiVmTHx41Vefc/IpuOBupzmYHoMJZoPAAQ5SWEEtwkCGDgHBXOMhEwhuSEuHU+FCAIi48JIiJN/ttVxaQBjCXIxmKPKVjHHgiGOOYUAYERQGlbhRZUNc98KLSXT1woDGtLBjlFRWaeWVWGap5ZZcdumlChEAACH5BAkKAA4ALAAAAABaAFoAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsW009319t43ym1wxGbzj5AYXEoTGITOKWTOfzx2xKHb8W1Ho1NlTba8X7PW25YnJ55I2KLQw1mxp8Y+LyHL1uv6vXGmd9GkF5gXuDHIVkPoiJHYtGF4JEf5aXmJmZJZqdnp+GIaCjpJloHKWpqlCiOlWvsLGys7S1THStR7a7vL2xuCDAj5Oup4dHwxjCHsvJRcW5DXxYqzouzajQ1NXc1hLYG8Dd4zvgx9JI5ONC5o3I2+i+sOSR6NF8e/L6tXTtytr+POyr0k+bnncBbxR8d9AevGkpsjArlnAMQIPEdmTzthFdRQri/zA+k9SBUTiKIjviE/kHojuS/458HOlwCc02Ll9KzOgx5UmGVL6pefUBjxee9XL+dPiQ3Rk3RY3upJnU2MtpuPJBFSEViEWZPs9hNQhLhVSIC5lOBErWDccSZal2tRqTqbmpQgFB2prV1b0mdzHCBKlRrFOGJQ0GRjw4r966dWY2lQvZCivKhic3HIuYMGObjtUiPSx6KWevoz3vdHSVtNLWqo0JGwovnmnXdGkI9smo09bKmteqBafqd2rJyxYP7Vost+PIYYFjvsBcF5kqiZEh3925wq3mSGQJh949881UEmJtxh2Mu7pU5EubD/1+VPzX0unX10R0e2fw+nDTX5l0qXk30IG0xOacgtThtxeCaBGoW3nO+LffhRTWheF+Dk64IYcLqjZOACQGUEABJA6g4orVdNjgPDoAIKNWENYDwA8y/pIhITA2cCNONRIUI44A2MLCj17IyIIRSCp5h4sgIBmjjAAsqYaTPTBJZZUrXInlEFt+CQYZVDoRZgwzTunMCmGWuWYLW74p55x01mnnnXjmqecNEQAAIfkEBQoADgAsAAAAAFoAWgAABP/QyUmrvTjrzbv/YCiOZGmeaKqubOu+cCzP9Nrcdb7duO5XvBuD8fsFhcSi7jhMKh3BF7P5lBxb02HVelUdG9Qtt3vKiinfRjnYdJ6h31LW/XYw0qJvuE65x0FmfBdpah1zghh+ZBmHiIl4jIGOGYo8kTx7NYSbnJ2en5t5oKOkpaEhpqmqo1ofq6+wenQ7mG22t7i5uru8TWyzGr+9w8TFub+AtZODyq7NY7AwyM5IaLHXURPTHttw2NjW1dRgSd/m5NCt3M3Cxm3nrd0c0+3u9rr0z4bs+iP37/zErRMnz0hAdOPi9TNIcGGwg+qY9dg38WFDgRQRFtSWLWNFiRr/HV4KiTGcSCCEMOQrSesiQpO1gIH8Y1IhS4skX0KLKfNCpUXeckacB9FNmjYhhhytWe4kSJsvZWUC4evZSp1EXaqb09MDLo5au1pgks5JOxZIy6pNJmTtBFuXUCCbgkqZPKSWUH4UVU1Y3b4nO4IFY2JuzL/oNroNOpRtYqcq7QbWRzZcRi2KcWJ2ygZmIWiXiWQeufnm4M8pFz8VDXk1466lVI+VbFoz69o7SzXW+xh3ZMC+g07ZNHU2cKyhX3f4aYtQcd6lkWftLd1nrtzVmSpHHH03pbRv/bak7t228HOvuot1jR6ber7U2696z72p/Pm3s5N28q9/se2OReTffYC7AJjQemeMZpx8MSjI230Q6rdghPeV9xuF8lmYyC48kcMLhhJuiIsw9RDo3IitOQbJBsawwQMAANxymA2cwEjjFzZapyFiL8Lo4404iojFET4WCSSRPgRRJABSEJKjDksyGUOUP/pg5AxUPrnMllx26eWXYIYp5phkjhkBADs=">',state:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 80" width="100" height="100"><defs><path id="pid-64-svgo-a" d="M0 0h80v80H0z"/><path d="M52.546 8.014a3.998 3.998 0 014.222 3.077c.104.446.093.808.039 1.138a2.74 2.74 0 01-.312.881c-.073.132-.16.254-.246.376l-.257.366-.521.73c-.7.969-1.415 1.926-2.154 2.866l-.015.02a240.945 240.945 0 015.986.341l1.643.123.822.066.41.034.206.018.103.008.115.012c1.266.116 2.516.45 3.677.975a11.663 11.663 0 013.166 2.114c.931.87 1.719 1.895 2.321 3.022a11.595 11.595 0 011.224 3.613c.03.157.046.316.068.474l.015.119.013.112.022.206.085.822.159 1.646c.1 1.098.19 2.198.27 3.298.315 4.4.463 8.829.36 13.255a166.489 166.489 0 01-.843 13.213c-.012.127-.034.297-.053.454a7.589 7.589 0 01-.072.475l-.04.237-.05.236a11.762 11.762 0 01-.74 2.287 11.755 11.755 0 01-5.118 5.57 11.705 11.705 0 01-3.623 1.263c-.158.024-.316.052-.475.072l-.477.053-.821.071-1.644.134c-1.096.086-2.192.16-3.288.23a260.08 260.08 0 01-6.578.325c-8.772.324-17.546.22-26.313-.302a242.458 242.458 0 01-3.287-.22l-1.643-.129-.822-.069-.41-.035-.206-.018c-.068-.006-.133-.01-.218-.02a11.566 11.566 0 01-3.7-.992 11.732 11.732 0 01-5.497-5.178 11.73 11.73 0 01-1.215-3.627c-.024-.158-.051-.316-.067-.475l-.026-.238-.013-.119-.01-.103-.07-.823-.132-1.648a190.637 190.637 0 01-.22-3.298c-.256-4.399-.358-8.817-.258-13.233.099-4.412.372-8.811.788-13.197a11.65 11.65 0 013.039-6.835 11.585 11.585 0 016.572-3.563c.157-.023.312-.051.47-.07l.47-.05.82-.07 1.643-.13a228.493 228.493 0 016.647-.405l-.041-.05a88.145 88.145 0 01-2.154-2.867l-.52-.73-.258-.366c-.086-.122-.173-.244-.246-.376a2.74 2.74 0 01-.312-.881 2.808 2.808 0 01.04-1.138 3.998 3.998 0 014.22-3.077 2.8 2.8 0 011.093.313c.294.155.538.347.742.568.102.11.19.23.28.35l.27.359.532.72a88.059 88.059 0 012.06 2.936 73.036 73.036 0 011.929 3.03c.187.313.373.628.556.945 2.724-.047 5.447-.056 8.17-.038.748.006 1.496.015 2.244.026.18-.313.364-.624.549-.934a73.281 73.281 0 011.93-3.03 88.737 88.737 0 012.059-2.935l.533-.72.268-.359c.09-.12.179-.24.281-.35a2.8 2.8 0 011.834-.881zM30.13 34.631a4 4 0 00-.418 1.42 91.157 91.157 0 00-.446 9.128c0 2.828.121 5.656.364 8.483l.11 1.212a4 4 0 005.858 3.143c2.82-1.498 5.55-3.033 8.193-4.606a177.41 177.41 0 005.896-3.666l1.434-.942a4 4 0 00.047-6.632 137.703 137.703 0 00-7.377-4.708 146.88 146.88 0 00-6.879-3.849l-1.4-.725a4 4 0 00-5.382 1.742z" id="pid-64-svgo-d"/><filter x="-15.4%" y="-16.3%" width="130.9%" height="132.5%" filterUnits="objectBoundingBox" id="pid-64-svgo-c"><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feOffset in="SourceAlpha" result="shadowOffsetOuter2"/><feGaussianBlur stdDeviation="3.5" in="shadowOffsetOuter2" result="shadowBlurOuter2"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowBlurOuter2" result="shadowMatrixOuter2"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="shadowMatrixOuter2"/></feMerge></filter></defs><g fill="none" fill-rule="evenodd" opacity=".8"><mask id="pid-64-svgo-b" fill="#fff"><use xlink:href="#pid-64-svgo-a"/></mask><g mask="url(#pid-64-svgo-b)"><use fill="#000" filter="url(#pid-64-svgo-c)" xlink:href="#pid-64-svgo-d"/><use fill="#FFF" xlink:href="#pid-64-svgo-d"/></g></g></svg>',indicator:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="16" height="16">
        <path d="M16.118 3.667h.382a3.667 3.667 0 013.667 3.667v7.333a3.667 3.667 0 01-3.667 3.667h-11a3.667 3.667 0 01-3.667-3.667V7.333A3.667 3.667 0 015.5 3.666h.382L4.95 2.053a1.1 1.1 0 011.906-1.1l1.567 2.714h5.156L15.146.953a1.101 1.101 0 011.906 1.1l-.934 1.614z" fill="#333"></path>
        <path d="M5.561 5.194h10.878a2.2 2.2 0 012.2 2.2v7.211a2.2 2.2 0 01-2.2 2.2H5.561a2.2 2.2 0 01-2.2-2.2V7.394a2.2 2.2 0 012.2-2.2z" fill="#fff"></path>
        <path d="M6.967 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1zM15.033 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1z" fill="#333"></path>
    </svg>
        `,fullscreenWebOn:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="28" height="28" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_172"><rect width="88" height="88" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_172)"><g transform="matrix(1,0,0,1,44,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-14,-20 C-14,-20 -26,-20 -26,-20 C-27.049999237060547,-20 -27.920000076293945,-19.18000030517578 -27.989999771118164,-18.149999618530273 C-27.989999771118164,-18.149999618530273 -28,-18 -28,-18 C-28,-18 -28,-6 -28,-6 C-28,-4.949999809265137 -27.18000030517578,-4.079999923706055 -26.149999618530273,-4.010000228881836 C-26.149999618530273,-4.010000228881836 -26,-4 -26,-4 C-26,-4 -22,-4 -22,-4 C-20.950000762939453,-4 -20.079999923706055,-4.820000171661377 -20.010000228881836,-5.849999904632568 C-20.010000228881836,-5.849999904632568 -20,-6 -20,-6 C-20,-6 -20,-12 -20,-12 C-20,-12 -14,-12 -14,-12 C-12.949999809265137,-12 -12.079999923706055,-12.819999694824219 -12.010000228881836,-13.850000381469727 C-12.010000228881836,-13.850000381469727 -12,-14 -12,-14 C-12,-14 -12,-18 -12,-18 C-12,-19.049999237060547 -12.819999694824219,-19.920000076293945 -13.850000381469727,-19.989999771118164 C-13.850000381469727,-19.989999771118164 -14,-20 -14,-20z M26,-20 C26,-20 14,-20 14,-20 C12.949999809265137,-20 12.079999923706055,-19.18000030517578 12.010000228881836,-18.149999618530273 C12.010000228881836,-18.149999618530273 12,-18 12,-18 C12,-18 12,-14 12,-14 C12,-12.949999809265137 12.819999694824219,-12.079999923706055 13.850000381469727,-12.010000228881836 C13.850000381469727,-12.010000228881836 14,-12 14,-12 C14,-12 20,-12 20,-12 C20,-12 20,-6 20,-6 C20,-4.949999809265137 20.81999969482422,-4.079999923706055 21.850000381469727,-4.010000228881836 C21.850000381469727,-4.010000228881836 22,-4 22,-4 C22,-4 26,-4 26,-4 C27.049999237060547,-4 27.920000076293945,-4.820000171661377 27.989999771118164,-5.849999904632568 C27.989999771118164,-5.849999904632568 28,-6 28,-6 C28,-6 28,-18 28,-18 C28,-19.049999237060547 27.18000030517578,-19.920000076293945 26.149999618530273,-19.989999771118164 C26.149999618530273,-19.989999771118164 26,-20 26,-20z M-22,4 C-22,4 -26,4 -26,4 C-27.049999237060547,4 -27.920000076293945,4.820000171661377 -27.989999771118164,5.849999904632568 C-27.989999771118164,5.849999904632568 -28,6 -28,6 C-28,6 -28,18 -28,18 C-28,19.049999237060547 -27.18000030517578,19.920000076293945 -26.149999618530273,19.989999771118164 C-26.149999618530273,19.989999771118164 -26,20 -26,20 C-26,20 -14,20 -14,20 C-12.949999809265137,20 -12.079999923706055,19.18000030517578 -12.010000228881836,18.149999618530273 C-12.010000228881836,18.149999618530273 -12,18 -12,18 C-12,18 -12,14 -12,14 C-12,12.949999809265137 -12.819999694824219,12.079999923706055 -13.850000381469727,12.010000228881836 C-13.850000381469727,12.010000228881836 -14,12 -14,12 C-14,12 -20,12 -20,12 C-20,12 -20,6 -20,6 C-20,4.949999809265137 -20.81999969482422,4.079999923706055 -21.850000381469727,4.010000228881836 C-21.850000381469727,4.010000228881836 -22,4 -22,4z M26,4 C26,4 22,4 22,4 C20.950000762939453,4 20.079999923706055,4.820000171661377 20.010000228881836,5.849999904632568 C20.010000228881836,5.849999904632568 20,6 20,6 C20,6 20,12 20,12 C20,12 14,12 14,12 C12.949999809265137,12 12.079999923706055,12.819999694824219 12.010000228881836,13.850000381469727 C12.010000228881836,13.850000381469727 12,14 12,14 C12,14 12,18 12,18 C12,19.049999237060547 12.819999694824219,19.920000076293945 13.850000381469727,19.989999771118164 C13.850000381469727,19.989999771118164 14,20 14,20 C14,20 26,20 26,20 C27.049999237060547,20 27.920000076293945,19.18000030517578 27.989999771118164,18.149999618530273 C27.989999771118164,18.149999618530273 28,18 28,18 C28,18 28,6 28,6 C28,4.949999809265137 27.18000030517578,4.079999923706055 26.149999618530273,4.010000228881836 C26.149999618530273,4.010000228881836 26,4 26,4z M28,-28 C32.41999816894531,-28 36,-24.420000076293945 36,-20 C36,-20 36,20 36,20 C36,24.420000076293945 32.41999816894531,28 28,28 C28,28 -28,28 -28,28 C-32.41999816894531,28 -36,24.420000076293945 -36,20 C-36,20 -36,-20 -36,-20 C-36,-24.420000076293945 -32.41999816894531,-28 -28,-28 C-28,-28 28,-28 28,-28z"></path></g></g></g></svg>',fullscreenWebOff:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="28" height="28" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_177"><rect width="88" height="88" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_177)"><g transform="matrix(1,0,0,1,44,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-14,-20 C-14,-20 -18,-20 -18,-20 C-19.049999237060547,-20 -19.920000076293945,-19.18000030517578 -19.989999771118164,-18.149999618530273 C-19.989999771118164,-18.149999618530273 -20,-18 -20,-18 C-20,-18 -20,-12 -20,-12 C-20,-12 -26,-12 -26,-12 C-27.049999237060547,-12 -27.920000076293945,-11.180000305175781 -27.989999771118164,-10.149999618530273 C-27.989999771118164,-10.149999618530273 -28,-10 -28,-10 C-28,-10 -28,-6 -28,-6 C-28,-4.949999809265137 -27.18000030517578,-4.079999923706055 -26.149999618530273,-4.010000228881836 C-26.149999618530273,-4.010000228881836 -26,-4 -26,-4 C-26,-4 -14,-4 -14,-4 C-12.949999809265137,-4 -12.079999923706055,-4.820000171661377 -12.010000228881836,-5.849999904632568 C-12.010000228881836,-5.849999904632568 -12,-6 -12,-6 C-12,-6 -12,-18 -12,-18 C-12,-19.049999237060547 -12.819999694824219,-19.920000076293945 -13.850000381469727,-19.989999771118164 C-13.850000381469727,-19.989999771118164 -14,-20 -14,-20z M18,-20 C18,-20 14,-20 14,-20 C12.949999809265137,-20 12.079999923706055,-19.18000030517578 12.010000228881836,-18.149999618530273 C12.010000228881836,-18.149999618530273 12,-18 12,-18 C12,-18 12,-6 12,-6 C12,-4.949999809265137 12.819999694824219,-4.079999923706055 13.850000381469727,-4.010000228881836 C13.850000381469727,-4.010000228881836 14,-4 14,-4 C14,-4 26,-4 26,-4 C27.049999237060547,-4 27.920000076293945,-4.820000171661377 27.989999771118164,-5.849999904632568 C27.989999771118164,-5.849999904632568 28,-6 28,-6 C28,-6 28,-10 28,-10 C28,-11.050000190734863 27.18000030517578,-11.920000076293945 26.149999618530273,-11.989999771118164 C26.149999618530273,-11.989999771118164 26,-12 26,-12 C26,-12 20,-12 20,-12 C20,-12 20,-18 20,-18 C20,-19.049999237060547 19.18000030517578,-19.920000076293945 18.149999618530273,-19.989999771118164 C18.149999618530273,-19.989999771118164 18,-20 18,-20z M-14,4 C-14,4 -26,4 -26,4 C-27.049999237060547,4 -27.920000076293945,4.820000171661377 -27.989999771118164,5.849999904632568 C-27.989999771118164,5.849999904632568 -28,6 -28,6 C-28,6 -28,10 -28,10 C-28,11.050000190734863 -27.18000030517578,11.920000076293945 -26.149999618530273,11.989999771118164 C-26.149999618530273,11.989999771118164 -26,12 -26,12 C-26,12 -20,12 -20,12 C-20,12 -20,18 -20,18 C-20,19.049999237060547 -19.18000030517578,19.920000076293945 -18.149999618530273,19.989999771118164 C-18.149999618530273,19.989999771118164 -18,20 -18,20 C-18,20 -14,20 -14,20 C-12.949999809265137,20 -12.079999923706055,19.18000030517578 -12.010000228881836,18.149999618530273 C-12.010000228881836,18.149999618530273 -12,18 -12,18 C-12,18 -12,6 -12,6 C-12,4.949999809265137 -12.819999694824219,4.079999923706055 -13.850000381469727,4.010000228881836 C-13.850000381469727,4.010000228881836 -14,4 -14,4z M26,4 C26,4 14,4 14,4 C12.949999809265137,4 12.079999923706055,4.820000171661377 12.010000228881836,5.849999904632568 C12.010000228881836,5.849999904632568 12,6 12,6 C12,6 12,18 12,18 C12,19.049999237060547 12.819999694824219,19.920000076293945 13.850000381469727,19.989999771118164 C13.850000381469727,19.989999771118164 14,20 14,20 C14,20 18,20 18,20 C19.049999237060547,20 19.920000076293945,19.18000030517578 19.989999771118164,18.149999618530273 C19.989999771118164,18.149999618530273 20,18 20,18 C20,18 20,12 20,12 C20,12 26,12 26,12 C27.049999237060547,12 27.920000076293945,11.180000305175781 27.989999771118164,10.149999618530273 C27.989999771118164,10.149999618530273 28,10 28,10 C28,10 28,6 28,6 C28,4.949999809265137 27.18000030517578,4.079999923706055 26.149999618530273,4.010000228881836 C26.149999618530273,4.010000228881836 26,4 26,4z M28,-28 C32.41999816894531,-28 36,-24.420000076293945 36,-20 C36,-20 36,20 36,20 C36,24.420000076293945 32.41999816894531,28 28,28 C28,28 -28,28 -28,28 C-32.41999816894531,28 -36,24.420000076293945 -36,20 C-36,20 -36,-20 -36,-20 C-36,-24.420000076293945 -32.41999816894531,-28 -28,-28 C-28,-28 28,-28 28,-28z"></path></g></g></g></svg>'},_t=()=>({container:"",url:"",volume:1,isLive:false,muted:false,autoplay:false,pip:false,autoMini:false,screenshot:false,setting:true,loop:false,flip:true,playbackRate:true,autoSize:false,aspectRatio:false,fullscreen:true,fullscreenWeb:true,subtitleOffset:true,miniProgressBar:true,mutex:false,backdrop:true,playsInline:false,autoPlayback:true,airplay:true,lock:true,fastForward:true,theme:y.theme,lang:navigator.language.toLowerCase(),moreVideoAttr:{crossOrigin:"anonymous"},icons:yu}),Ve="[artplayer-plugin-quality]：",ye="artplayer-plugin-quality",me={AVC:7,HEVC:12,AV1:13};class Au{constructor(t,u){Q(this,"art");Q(this,"from");this.art=t,this.from=u;}addSetting(){const t=this;let u=this.getUserChooseVideoCodingCode(),i=[{html:"AV1",value:me.AV1},{html:"HEVC",value:me.HEVC},{html:"AVC",value:me.AVC}].map(n=>Object.assign(n,{default:n.value===u}));i.find(n=>n.default)||(i=i.map(n=>(n.default=n.value===me.AV1,n)));let r=i.find(n=>n.default);this.art.setting.add({name:"video-playback-codeid",html:"播放策略",tooltip:r.html,icon:'<svg t="1727413004405" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3183" width="24" height="24"><path d="M170.666667 256h682.666666c23.466667 0 42.666667 19.2 42.666667 42.666667v170.666666h85.333333V256c0-46.933333-38.4-85.333333-85.333333-85.333333H128c-46.933333 0-85.333333 38.4-85.333333 85.333333v512c0 46.933333 38.4 85.333333 85.333333 85.333333h384v-85.333333H170.666667c-23.466667 0-42.666667-19.2-42.666667-42.666667V298.666667c0-23.466667 19.2-42.666667 42.666667-42.666667z" p-id="3184"></path><path d="M640 512L384 341.333333v341.333334zM968.96 786.346667c1.28-12.373333 1.706667-24.746667 0.426667-36.693334l45.653333-36.266666c4.266667-3.413333 5.12-8.96 2.56-13.653334l-43.946667-76.373333c-2.56-4.693333-8.106667-6.4-13.226666-4.693333l-54.613334 21.333333a146.773333 146.773333 0 0 0-32-17.92l-8.533333-58.026667a10.624 10.624 0 0 0-10.666667-9.386666h-88.32c-5.12 0-9.813333 3.84-10.666666 8.96l-8.533334 58.026666c-11.093333 4.693333-21.76 11.093333-31.573333 17.92l-54.613333-21.333333c-5.12-2.133333-10.666667 0-13.226667 4.693333l-43.946667 76.373334c-2.56 4.693333-1.706667 10.24 2.56 13.653333l45.653334 36.693333c-1.28 12.373333-1.706667 24.746667-0.426667 36.693334l-45.653333 36.266666c-4.266667 3.413333-5.12 8.96-2.56 13.653334l43.946666 76.373333c2.56 4.693333 8.106667 6.4 13.226667 4.693333l54.186667-21.333333c9.813333 7.253333 20.48 13.226667 32 17.92l8.533333 58.026667c0.853333 5.12 5.12 8.96 10.666667 8.96h88.32c5.12 0 9.813333-3.84 10.666666-8.96l8.533334-58.026667c11.093333-4.693333 21.76-11.093333 31.573333-17.92l54.613333 21.333333c5.12 2.133333 10.666667 0 13.226667-4.693333l43.946667-76.373333c2.56-4.693333 1.706667-10.24-2.56-13.653334l-45.226667-36.266666zM810.666667 832c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64z" p-id="3185"></path></svg>',selector:i,onSelect:function(n){let l=n.value;return t.setCurrentVideoCodingCode(l),t.onSettingSelect(l),n.html}});}onSettingSelect(t){}get storageVideoCodingKey(){return `bili-${this.from}-artplayer-videoCodingCode`}setCurrentVideoCodingCode(t){this.art.storage.set(this.storageVideoCodingKey,t);}getUserChooseVideoCodingCode(){let t=this.art.storage.get(this.storageVideoCodingKey)||me.AV1;return Object.values(me).includes(t)||(console.error(Ve+"意外情况，选择的编码格式不是允许的编码，将强制使用默认(av1)，防止过滤掉的视频链接为空："+t),t=me.AV1),t}}class Eu extends Au{constructor(u,i){super(u,i);Q(this,"$data",{qualityOption:null,qualityOptionList:[],currentSelectQualityInfo:null,currentQualityOption:null});super.addSetting();}setCurrentQualityOption(u=null){this.$data.currentQualityOption=null,this.$data.currentQualityOption=u;}getStorageKey(u){return `artplayer-quality-${u}`}update(u){if(this.$data.qualityOption=null,this.$data.qualityOption=u,this.$data.currentSelectQualityInfo=null,this.$data.qualityOptionList=[],this.setCurrentQualityOption(),u.qualityList.length){let i=this.updateQualityInfo();this.addControls(),this.art.url=i.url;}else this.removeControls();}getControlsOption(){const u=this;let i=this.$data.qualityOptionList.map((r,n)=>{var l;return {default:n===((l=this.$data.currentSelectQualityInfo)==null?undefined:l.index),html:r.html,url:r.url,quality:r.quality,frameRate:r.frameRate,mimeType:r.mimeType,codecid:r.codecid,codecs:r.codecs,bandwidth:r.bandwidth}});return {name:ye,index:10,position:"right",html:this.$data.currentSelectQualityInfo.html,selector:i,onSelect:function(r){let n=r;return console.log(Ve+"切换画质",n),u.art.switchQuality(n.url),u.art.storage.set(u.getStorageKey(u.$data.qualityOption.from),{quality:n.quality}),u.setCurrentQualityOption({html:n.html,url:n.url,quality:n.quality,frameRate:n.frameRate,mimeType:n.mimeType,codecid:n.codecid,codecs:n.codecs,bandwidth:n.bandwidth}),r.html}}}addControls(){if(this.isAddControls())this.updateQualityControls();else {let u=this.getControlsOption();this.art.controls.add(u);}}updateQualityInfo(){let u=this.getUserChooseVideoCodingCode(),i=this.$data.qualityOption.qualityList.filter(s=>s.codecid===u);i.length===0&&(i=this.$data.qualityOption.qualityList),i.sort((s,d)=>d.quality-s.quality),this.$data.qualityOptionList=[],this.$data.qualityOptionList=i;let a=i[0];const r=this.getStorageKey(this.$data.qualityOption.from),n=this.art.storage.get(r);let l={index:0,html:a.html,url:a.url};if(this.setCurrentQualityOption(i[0]),n){const s=i.findIndex(d=>d.quality===n.quality);if(s!==-1){const d=i[s];l.index=s,l.url=d.url,l.html=d.html,this.setCurrentQualityOption(d);}else console.warn(Ve+"没有找到上次选的画质，使用当前默认第一个画质");}return this.$data.currentSelectQualityInfo=null,this.$data.currentSelectQualityInfo=l,l}updateQualityControls(){let u=this.getControlsOption();console.log(Ve+"更新画质切换面板信息",this.$data.qualityOptionList,this.$data.currentQualityOption),this.art.controls.update(u);}removeControls(){this.isAddControls()&&this.art.controls.remove(ye);}isAddControls(){return Reflect.has(this.art.controls,ye)}onSettingSelect(u){this.updateQualityInfo(),this.updateQualityControls(),this.$data.currentSelectQualityInfo&&(this.art.url=this.$data.currentSelectQualityInfo.url);}}const Tt=e=>t=>{let u=new Eu(t,e.from);return u.update(e),{name:ye,update(i){u.update(i);},getCurrentQualityOption(){return u.$data.currentQualityOption}}},Re={$data:{art:null},$key:{plugin_KEY:"artplayer-plugin-toast"},$flag:{isInitCSS:false},$config:{originToast:"art-layer-auto-playback",hideClassName:"art-toast-hide-opacity",prefix:"mplayer-toast-gm"},$el:{get $originPlayer(){return document.querySelector(".art-video-player .art-layers")}},toast(e){typeof e=="string"&&(e={text:e}),this.initCSS();let t=e.parent??this.$el.$originPlayer;if(!t)throw new TypeError("toast parent is null");this.mutationMPlayerOriginToast(t);let u=f.createElement("div",{"data-from":"gm"});if(f.addClass(u,this.$config.prefix),e.showCloseBtn){let n=f.createElement("div",{className:this.$config.prefix+"-close",innerHTML:`
                    <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="m571.733 512 268.8-268.8c17.067-17.067 17.067-42.667 0-59.733-17.066-17.067-42.666-17.067-59.733 0L512 452.267l-268.8-268.8c-17.067-17.067-42.667-17.067-59.733 0-17.067 17.066-17.067 42.666 0 59.733l268.8 268.8-268.8 268.8c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.534 19.2 12.8 29.866 12.8s21.334-4.266 29.867-12.8l268.8-268.8 268.8 268.8c8.533 8.534 19.2 12.8 29.867 12.8s21.333-4.266 29.866-12.8c17.067-17.066 17.067-42.666 0-59.733L571.733 512z"></path></svg>
                `});u.appendChild(n),f.on(n,"click",l=>{p.preventEvent(l),this.closeToast(u);},{capture:true});}let i=f.createElement("span",{className:this.$config.prefix+"-text",innerText:e.text});if(u.appendChild(i),typeof e.timeText=="string"&&e.timeText.trim()!=""){let n=f.createElement("span",{className:this.$config.prefix+"-time",innerText:e.timeText});u.appendChild(n);}if(typeof e.jumpText=="string"&&e.jumpText.trim()!=""){let n=f.createElement("span",{className:this.$config.prefix+"-jump",innerText:e.jumpText});u.appendChild(n),f.on(n,"click",l=>{typeof e.jumpClickCallback=="function"&&(p.preventEvent(l),e.jumpClickCallback(l));},{capture:true});}this.setTransitionendEvent(u,e);let a=typeof e.timeout=="number"&&!isNaN(e.timeout)?e.timeout:3500;t.appendChild(u);let r=setTimeout(()=>{this.closeToast(u);},a);return {$toast:u,timeoutId:r,close:()=>{clearTimeout(r),this.closeToast(u);}}},initCSS(){this.$flag.isInitCSS||(this.$flag.isInitCSS=true,N(`
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
        `));},mutationMPlayerOriginToast(e){let t=this.$el.$originPlayer;t&&(t.hasAttribute("data-mutation")||(o.success("添加观察器，动态更新toast的位置"),t.setAttribute("data-mutation","gm"),p.mutationObserver(t,{config:{subtree:true,childList:true},immediate:true,callback:()=>{this.updatePageToastBottom();}})));},updatePageToastBottom(){let e=Array.from(document.querySelectorAll(`.${this.$config.prefix}`)).concat(Array.from(document.querySelectorAll(".".concat(this.$config.originToast))));e.length&&(e.length-1,e.forEach((t,u)=>{t.setAttribute("data-transition","move"),t.style.bottom=`calc( calc( var(--art-control-height) + var(--art-bottom-gap) ) * ${u+1} + 10px)`;}));},closeToast(e){e.classList.add(this.$config.hideClassName);},getTransitionendEventNameList(){return ["webkitTransitionEnd","mozTransitionEnd","MSTransitionEnd","otransitionend","transitionend"]},setTransitionendEvent(e,t){let u=this,i=this.getTransitionendEventNameList();f.on(e,i,function(a){let r=e.getAttribute("data-transition");if(e.classList.contains(u.$config.hideClassName)){typeof t=="object"&&typeof(t==null?undefined:t.closeCallback)=="function"&&t.closeCallback(),e.remove();return}if(r==="move"){e.removeAttribute("data-transition");return}},{capture:true});}},Vt=e=>t=>(Re.$data.art=t,{name:Re.$key.plugin_KEY,toast(...u){return Re.toast(...u)}}),vu=Re.$key.plugin_KEY;class Du{constructor(t,u){Q(this,"art");Q(this,"option");Q(this,"$key",{plugin_KEY:"artplayer-plugin-videoStatistics",setting_name:"video-statistics"});Q(this,"$data",{intervalId:undefined});this.art=t,this.option=u,this.addSetting();}addSetting(){this.art.setting.add({name:this.$key.setting_name,icon:"",html:"视频统计信息",mounted:t=>{let u=t.querySelector(".art-setting-item-left-icon");u.innerHTML=`
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M512.50142 958.397886c-119.320573 0-231.499491-46.465265-315.871087-130.837884C112.258737 743.188406 65.792449 631.010511 65.792449 511.688915c0-119.319549 46.466288-231.499491 130.837884-315.871087C281.002952 111.445208 393.180847 64.979944 512.50142 64.979944s231.499491 46.465265 315.871087 130.837884c84.372619 84.372619 130.837884 196.551538 130.837884 315.871087 0 119.321596-46.465265 231.499491-130.837884 315.871087C744.000911 911.932622 631.821993 958.397886 512.50142 958.397886zM512.50142 105.962334c-223.718271 0-405.726581 182.00831-405.726581 405.726581s182.00831 405.726581 405.726581 405.726581c223.718271 0 405.727605-182.00831 405.727605-405.726581S736.220714 105.962334 512.50142 105.962334z"></path>
                    <path d="M510.150886 775.953647c-18.107403 0-32.745798-14.678304-32.745798-32.785707L477.405087 452.191846c0-18.108426 14.638395-32.785707 32.745798-32.785707 18.107403 0 32.745798 14.678304 32.745798 32.785707l0 290.976094C542.896684 761.275343 528.258289 775.953647 510.150886 775.953647z"></path>
                    <path d="M511.357364 296.458969m-45.080731 0a44.054 44.054 0 1 0 90.161463 0 44.054 44.054 0 1 0-90.161463 0Z"></path>
                </svg>
                `.trim(),this.art.proxy(t,"click",i=>{i.stopPropagation(),i.stopImmediatePropagation(),i.preventDefault(),this.art.setting.show=false,this.isRegisterLayer()?this.updateLayer():this.showLayer(true);},{capture:true});}});}getLayerOption(){var m;let t,u,i,a={key:"Resolution:",value:`${this.art.video.videoWidth} x ${this.art.video.videoHeight}`},r,n,l,s=this.art.plugins[ye];if(s){let g=s.getCurrentQualityOption();g&&(t={key:"Mime Type:",value:`${g.mimeType}`},g.codecs.trim()!==""&&(t.value+=`;codecs="${g.codecs}"`),g.frameRate.trim()!==""&&(a.value+="@"+g.frameRate),g.bandwidth&&(r={key:"Video DataRate:",value:(g.bandwidth/1024).toFixed(0)+"Kbps"}));}let d=this.art.plugins[je];if(d){let g=d.getCurrentPlayConfig();g&&(u={key:"Audio Host:",value:new URL(g.url).host},i={key:"Audio Time:",value:d.getAudio().currentTime.toString()},t&&(t.value.trim()!==""&&(t.value+=", "),t.value+=`${g.mimeType}`,g.codecs.trim()!==""&&(t.value+=`;codecs="${g.codecs}"`)),n={key:"Audio DataRate:",value:(g.bandwidth/1024).toFixed(0)+"Kbps"},l={key:"Audio Duration:",value:d.getAudio().duration.toString()});}let c=[t,{key:"Player Type",value:"ArtPlayer@"+ze.version},a,r,n,{key:"Video Host:",value:new URL(this.art.url).host},u,{key:"Video Time:",value:this.art.currentTime.toString()},i,{key:"Video Duration:",value:this.art.duration.toString()},l];return c.push(...((m=this==null?undefined:this.option)==null?undefined:m.data)||[]),{name:this.$key.setting_name,html:`
            <div class="art-player-video-statistics">
                <style>
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
                    ${c.filter(g=>g!=null).map(g=>`
                        <div class="art-player-video-statistics-panel-item">
                            <div class="art-player-video-statistics-panel-title">${g.key}</div>
                            <div class="art-player-video-statistics-panel-content">${g.value}</div>
                        </div>
                        `).join(`
`)}
                </div>
            </div>
            `,mounted:async g=>{let A=g.querySelector(".art-player-video-statistics-close svg");this.art.proxy(A,"click",D=>{D.stopPropagation(),D.stopImmediatePropagation(),D.preventDefault(),this.closeLayer();});}}}isRegisterLayer(){return this.$key.setting_name in this.art.layers}showLayer(t){clearInterval(this.$data.intervalId);let u=this.getLayerOption();this.art.layers.add(u),t&&(this.unbindUpdateLayerEvent(),this.bindUpdateLayerEvent());}updateLayer(){let t=this.getLayerOption();this.art.layers.update(t);}bindUpdateLayerEvent(){this.art.on("play",this.updateLayerEvent_interval,this),this.art.on("restart",this.updateLayerEvent_once,this),this.art.on("m4sAudio:loadedmetadata",this.updateLayerEvent_once,this),this.art.on("pause",this.updateLayerEvent_clear_interval,this),this.art.on("video:ended",this.updateLayerEvent_clear_interval,this),this.art.playing&&this.updateLayerEvent_interval();}unbindUpdateLayerEvent(){this.art.off("play",this.updateLayerEvent_interval),this.art.off("restart",this.updateLayerEvent_once),this.art.off("m4sAudio:loadedmetadata",this.updateLayerEvent_once),this.art.off("pause",this.updateLayerEvent_clear_interval),this.art.off("video:ended",this.updateLayerEvent_clear_interval);}updateLayerEvent_interval(){clearInterval(this.$data.intervalId),this.$data.intervalId=setInterval(()=>{this.updateLayer();},1500);}updateLayerEvent_once(){this.updateLayer();}updateLayerEvent_clear_interval(){clearInterval(this.$data.intervalId);}closeLayer(){clearInterval(this.$data.intervalId),this.art.layers.remove(this.$key.setting_name),this.unbindUpdateLayerEvent();}update(t){this.option=t;}}const Rt=e=>t=>{let u=new Du(t,e);return {name:u.$key.plugin_KEY,update(i){u.update(i);}}},Nt=()=>({heatmap:false,color:"#FFFFFF",mode:0,mount:undefined,width:800,points:[],filter:e=>e.text.length<=100,beforeVisible:()=>true,emitter:false,maxLength:50,lockTime:3,theme:p.isThemeDark()?"dark":"light"}),tt=e=>{let t=e.epList||[];if(t.length===1){let u=t[0];return u.pages.map(i=>({isDefault:i.cid===e.cid,title:i.part,aid:e.aid,bvid:e.bvid,cid:i.cid,onSelect(a,r){u.cid=i.cid,qe.updateArtPlayerVideoInfo({aid:e.aid,bvid:e.bvid,cid:i.cid,pic:i.first_frame||"",title:i.part,epList:e.epList||[]},true);}}))}else return t.map(u=>({isDefault:u.aid===e.aid&&u.cid===e.cid,title:$t(u.title),aid:u.aid,bvid:u.bvid,cid:u.cid,onSelect(i,a){qe.updateArtPlayerVideoInfo({aid:u.aid,bvid:u.bvid,cid:u.cid,pic:u.arc.pic,title:u.title,epList:e.epList||[]},true);}}))},fe={$data:{art:null,currentOption:null},resetEnv(e){e&&Reflect.set(this.$data,"art",null),Reflect.set(this.$data,"currentOption",null);},async init(e){this.resetEnv(true),this.$data.currentOption=e;const t="artplayer-video-danmaku-option",u=new yt(t),i=u.getLocalArtDanmakuOption(),a={..._t(),container:e.container,poster:e.poster,settings:[],plugins:[Vt(),Tt({from:"video",qualityList:e.quality})]};return a.type="mp4",h.getValue("artplayer-plugin-video-danmaku-enable")&&a.plugins.push(pt({...Nt(),danmuku:e.danmukuUrl,speed:i.speed,margin:i.margin,opacity:i.opacity,modes:i.modes,fontSize:i.fontSize,antiOverlap:i.antiOverlap,synchronousPlayback:i.synchronousPlayback,visible:i.visible,beforeEmit(r){return new Promise(n=>{console.log(r),setTimeout(()=>{n(true);},1e3);})}})),h.getValue("artplayer-plugin-video-m4sAudioSupport-enable")&&a.plugins.push(At({from:"video",showSetting:true,audioList:e.audioList||[]})),h.getValue("artplayer-plugin-video-epChoose-enable")&&a.plugins.push(kt({EP_LIST:tt(e),automaticBroadcast:true})),h.getValue("artplayer-plugin-video-cc-subtitle-enable")&&a.plugins.push(wt({from:"video",cid:e.cid,aid:e.aid,bvid:e.bvid})),h.getValue("artplayer-plugin-video-toptoolbar-enable")&&a.plugins.push(Et({onlineInfoParams:{aid:e.aid,cid:e.cid,bvid:e.bvid},title:e.videoTitle,showWrap:true,showTitle:true,showOnlineTotal:true})),h.getValue("artplayer-plugin-video-statistics-enable")&&a.plugins.push(Rt({data:[]})),h.getValue("bili-video-playerAutoPlayVideo")&&(a.muted=true,a.autoplay=true),this.$data.art=new ze(a),u.onConfigChange(this.$data.art),this.$data.art},async update(e,t){this.resetEnv(false),this.$data.currentOption=t,o.info("更新新的播放信息",t),e.pause(),o.info("暂停视频"),e.currentTime=0,o.info("重置播放进度"),this.updatePluginInfo(e,t),e.play(),o.info("播放");},updatePluginInfo(e,t){if(e.plugins[ye].update({from:"video",qualityList:t.quality}),o.info("更新画质",t.quality),h.getValue("artplayer-plugin-video-danmaku-enable")&&(e.plugins.artplayerPluginDanmuku.config({danmuku:t.danmukuUrl}),e.plugins.artplayerPluginDanmuku.load(),o.info("更新弹幕姬",t.danmukuUrl)),h.getValue("artplayer-plugin-video-m4sAudioSupport-enable")&&(e.plugins[je].update({from:"video",audioList:t.audioList||[]}),o.info("更新音频",t.audioList)),h.getValue("artplayer-plugin-video-epChoose-enable")&&(e.plugins[St].update({EP_LIST:tt(t),automaticBroadcast:true}),o.info("更新选集信息",t.epList)),h.getValue("artplayer-plugin-video-cc-subtitle-enable")){let i=e.plugins[Ft];const a={from:"video",aid:t.aid,bvid:t.bvid,cid:t.cid};i.update(a),o.info("更新字幕",a);}if(h.getValue("artplayer-plugin-video-toptoolbar-enable")){let i=e.plugins[vt];const a={showRight:true,showRightFollow:true,showWrap:true,showTitle:true,showOnlineTotal:true,title:t.videoTitle,onlineInfoParams:{aid:t.aid,cid:t.cid,bvid:t.bvid}};i.update(a),o.info("更新顶部标题",a);}}};function Bu(e){let t=[];return e.video.forEach(u=>{if(!e.accept_quality.includes(u.id))return;let i=e.support_formats.find(n=>n.quality===u.id),a=J.findBetterCDN(u.base_url,u.baseUrl,u.backup_url,u.backupUrl);a=J.replaceVideoCDN(a);let r=i==null?undefined:i.new_description;t.push({name:r,url:a,type:u.mimeType||u.mime_type,id:u.id,quality:u.id,vip:false,codecid:u.codecid,codecs:u.codecs,frameRate:u.frameRate||u.frame_rate,bandwidth:u.bandwidth});}),t}const Lt=async e=>{var r,n;const t=[];let u=[];if(h.getValue("bili-video-playType","mp4")==="mp4"){const l=await Ie.playUrl({bvid:e.bvid,cid:e.cid,fnval:1,fnver:0,fourk:1,high_quality:1,qn:127,setPlatformHTML5:true});if(o.info(l),!l)return;let s=l.durl[0],d=l.support_formats.find(g=>g.quality===l.quality),c=J.findBetterCDN(s.url,s.url||((r=s.backup_url)==null?undefined:r[0])),m=d==null?undefined:d.new_description;u.push({name:m,url:c,type:"audio/mp4",id:l.quality,codecid:l.video_codecid,quality:l.quality,vip:false,codecs:"",frameRate:"",bandwidth:0});}else {const l=await Ie.playUrl({bvid:e.bvid,cid:e.cid,fnval:3088,fnver:0,fourk:1,high_quality:1,qn:127,setPlatformHTML5:false});if(o.info(l),!l)return;l.dash.audio.forEach(s=>{let d=J.findBetterCDN(s.baseUrl,s.base_url,s.baseUrl,s.backup_url);h.getValue("bili-video-uposServerSelect-applyAudio")&&(d=J.replaceVideoCDN(d)),t.push({url:d,id:s.id,text:bt[s.id]||"",codecs:s.codecs,mimeType:s.mimeType,bandwidth:s.bandwidth,size:0});}),t.sort((s,d)=>d.id-s.id),o.info("ArtPlayer: 获取的音频信息",t),u=[...Bu({accept_quality:l.accept_quality,support_formats:l.support_formats,video:l.dash.video})],o.info("ArtPlayer: 获取的视频画质信息",u);}const i=u.map((l,s)=>({quality:l.quality,html:l.name,url:l.url,codecid:l.codecid,codecs:l.codecs,frameRate:l.frameRate,mimeType:l.type,bandwidth:l.bandwidth})),a={container:null,epList:e.epList,audioUrl:null,url:"",poster:e.pic,aid:e.aid,bvid:e.bvid,cid:e.cid,videoTitle:e.title,danmukuUrl:`https://api.bilibili.com/x/v1/dm/list.so?oid=${e.cid}`,quality:i};return a.url=(n=u==null?undefined:u[0])==null?undefined:n.url,t.length&&(a.audioList=t.map((l,s)=>({isDefault:s===0,url:l.url,soundQualityCode:l.id,soundQualityCodeText:l.text,codecs:l.codecs,mimeType:l.mimeType,bandwidth:l.bandwidth,size:l.size}))),a},qe={$data:{art:null},init(){h.execMenu("bili-video-enableArtPlayer",()=>{this.coverVideoPlayer();});},coverVideoPlayer(){if(z("#artplayer"))o.warn("已使用ArtPlayer覆盖原播放器，更新播放信息");else {N(`
            /* 隐藏原本的播放器 */
			${y.className.video} .m-video-player .player-container,
			${y.className.mVideo} .m-video-player .player-container{
				display: none !important;
			}
			
			${He}
			
			${Ct}

			`);let e=h.getValue("bili-video-artplayer-controlsPadding-left-right",0);e!=0&&N(`
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
				`);}this.updateArtPlayerVideoInfo();},updateArtPlayerVideoInfo(e,t){let u=this,i=()=>z(y.className.video+" .m-video-player")||z(y.className.mVideo+" .m-video-player");x.waitVuePropToSet(i,{msg:"等待m-video-player加载完成",check(a){var r,n,l,s,d,c;return !t&&fe.$data.currentOption!=null?(fe.$data.art.pause(),typeof((r=a==null?undefined:a.info)==null?undefined:r.aid)=="number"&&fe.$data.currentOption.aid!==a.info.aid&&typeof((n=a==null?undefined:a.info)==null?undefined:n.bvid)=="string"&&typeof((l=a==null?undefined:a.info)==null?undefined:l.cid)=="number"):typeof((s=a==null?undefined:a.info)==null?undefined:s.aid)=="number"&&typeof((d=a==null?undefined:a.info)==null?undefined:d.bvid)=="string"&&typeof((c=a==null?undefined:a.info)==null?undefined:c.cid)=="number"},async set(a){var $,S;const r=i();let{aid:n,bvid:l,cid:s,pic:d,title:c}=a;n=n||a.info.aid,l=l||a.info.bvid,s=s||a.info.cid,d=d||a.info.pic,c=c||a.info.title;let m=[];const g=z(".m-video-season-new"),A=z(".m-video-part-new");if(g&&x.getVue(g)){let F=x.getVue(g),b=F==null?undefined:F.videoList;Array.isArray(b)&&(m=b);}else if(A&&x.getVue(A)){let F=x.getVue(A),b=F==null?undefined:F.info,v=F==null?undefined:F.p,k=(F==null?undefined:F.pages)||(($=F==null?undefined:F.info)==null?undefined:$.pages);Array.isArray(k)&&m.push({season_id:0,section_id:0,id:0,aid:n||b.aid,bvid:l||b.bvid,cid:s||b.cid,title:c||b.title,attribute:0,arc:{aid:n||b.aid,videos:b==null?undefined:b.videos,type_id:0,type_name:"",copyright:b==null?undefined:b.copyright,pic:b==null?undefined:b.pic,title:b==null?undefined:b.title,pubdate:b==null?undefined:b.pubdate,ctime:b==null?undefined:b.ctime,desc:b==null?undefined:b.desc,state:b==null?undefined:b.state,duration:b==null?undefined:b.duration,rights:b==null?undefined:b.rights,author:b==null?undefined:b.owner,stat:b==null?undefined:b.stat,dynamic:b==null?undefined:b.dynamic,dimension:b==null?undefined:b.dimension,desc_v2:b==null?undefined:b.desc_v2,is_chargeable_season:b==null?undefined:b.is_chargeable_season,is_blooper:b==null?undefined:b.is_blooper,enable_vt:b==null?undefined:b.enable_vt,vt_display:b==null?undefined:b.vt_display},page:(S=b==null?undefined:b.pages)==null?undefined:S[v],pages:b==null?undefined:b.pages});}e==null&&(e={aid:n,bvid:l,cid:s,pic:d,title:c,epList:m}),o.info(`视频播放信息 => aid：${n} bvid：${l} cid：${s}`);const D=await Lt(e);if(D==null)return;let w=z("#artplayer");if(!w){const F=f.createElement("div",{className:"artplayer-container",innerHTML:`
								<div id="artplayer"></div>
							`});w=F.querySelector("#artplayer"),f.append(r,F);}if(D.container=w,u.$data.art==null){let F=await fe.init(D);if(F)u.$data.art=F;else return;u.$data.art.volume=1,u.$data.art.once("ready",()=>{h.execMenu("bili-video-playerAutoPlayVideoFullScreen",async()=>{o.info("自动进入全屏"),u.$data.art.fullscreen=true,u.$data.art.once("fullscreenError",()=>{o.warn("未成功进入全屏，需要用户交互操作，使用网页全屏代替"),u.$data.art.fullscreenWeb=true;});});});}else await fe.update(u.$data.art,D);r.style.paddingTop="";}});}},wu={$data:{isAddBeautifyCSS:false},init(){qe.init(),h.execMenuOnce("bili-video-cover-bottomRecommendVideo",()=>{this.coverBottomRecommendVideo();}),h.execMenuOnce("bili-video-cover-UpWrapper",()=>{this.coverUpWrapper();}),h.execMenuOnce("bili-video-cover-seasonNew",()=>{this.coverSeasonNew();}),f.ready(()=>{});},beautify(){o.info("美化显示"),this.$data.isAddBeautifyCSS||(this.$data.isAddBeautifyCSS=true,N(`
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

			`)),p.waitNode(y.className.video+" .bottom-tab .list-view .card-box",1e4).then(e=>{if(!e){o.error("$cardBox is null");return}function t(r){var c,m;let n=r.querySelector(".title"),l=r.querySelector(".count .left"),s=!!r.querySelector(".gm-right-container"),d=x.getVue(r);if(n&&l&&d&&!s){let g=(m=(c=d==null?undefined:d.info)==null?undefined:c.owner)==null?undefined:m.name;if(g==null){o.error("美化显示-handleVCardToApp：获取up主名字失败");return}r.querySelector(".count");let A=n.cloneNode(true),D=l.cloneNode(true);f.hide(n);let w=r.querySelector(".open-app.weakened");w&&f.hide(w);let $=document.createElement("div");$.className="gm-up-name",$.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${g}</span>
						`;let S=document.createElement("div"),F=document.createElement("div");S.className="gm-right-container",F.className="gm-right-bottom",f.after(n,S),S.appendChild(A),S.appendChild(F),F.appendChild($),F.appendChild(D);}}function u(r){var c,m,g;let n=r.querySelector(".title"),l=r.querySelector(".count"),s=!!r.querySelector(".gm-right-container"),d=x.getVue(r);if(n&&l&&d&&!s){let A=(c=d==null?undefined:d.info)==null?undefined:c.duration;if(A==null){o.error("美化显示-handleVCard：获取视频时长失败");return}let D=(g=(m=d==null?undefined:d.info)==null?undefined:m.owner)==null?undefined:g.name;if(D==null){o.error("美化显示-handleVCard：获取up主名字失败");return}let w=n.cloneNode(true),$=l.cloneNode(true);f.hide(n);let S=document.createElement("div");S.className="duration",S.innerText=R.parseDuration(A),$.className="left";let F=document.createElement("div");l.appendChild(S),F.className="gm-up-name",F.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${D}</span>
						`;let b=document.createElement("div"),v=document.createElement("div");b.className="gm-right-container",v.className="gm-right-bottom",f.after(n,b),b.appendChild(w),b.appendChild(v),v.appendChild(F),v.appendChild($);}}let i=new p.LockFunction(()=>{let r=document.querySelectorAll(y.className.video+" .bottom-tab .list-view .card-box .v-card-toapp"),n=document.querySelectorAll(y.className.video+" .bottom-tab .list-view .card-box>a.v-card");r.forEach(l=>{t(l);}),n.forEach(l=>{u(l);});},25),a=document.querySelector(y.className.video);a?p.mutationObserver(a,{config:{subtree:true,attributes:true,childList:true},callback(){i.run();}}):o.error("未找到视频根节点");});},repairVideoBottomAreaHeight(){return o.info("修复视频底部区域高度"),N(`
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
		`)},coverUpWrapper(){o.info("修复up主信息区域的点击事件"),f.on(document,"click",[y.className.video+" .bottom-wrapper .up-wrapper",y.className.mVideo+" .bottom-wrapper .up-wrapper"],function(e){var r,n;let u=e.target.closest(".bottom-wrapper");if(!u){o.error("获取元素.bottom-wrapper失败");return}let i=x.getVue(u);if(!i){o.error("获取元素.bottom-wrapper的vue实例失败");return}let a=(n=(r=i==null?undefined:i.upInfo)==null?undefined:r.card)==null?undefined:n.mid;typeof a=="string"?R.goToUrl(oe.getUserSpaceUrl(a)):B.error("获取mid失败");},{capture:true});},coverBottomRecommendVideo(){o.info("覆盖 相关视频 点击事件"),f.on(document,"click",[y.className.video+" .list-view .card-box .launch-app-btn",y.className.mVideo+" .list-view .card-box .launch-app-btn"],function(e){let t=e.target,u=x.getVue(t);if(!u){B.error("获取相关视频的__vue__失败");return}let i=u.bvid;if(p.isNull(i))if(u.$children&&u.$children[0]&&p.isNotNull(u.$children[0].bvid))i=u.$children[0].bvid;else {B.error("获取相关视频的bvid失败");return}o.info("相关视频的bvid: "+i),R.goToUrl(oe.getVideoUrl(i)),p.preventEvent(e);},{capture:true});},coverSeasonNew(){o.info("覆盖 选集视频列表 点击事件");function e(t){let u=t.target,i=x.getVue(u);if(!i){B.error("获取选集视频的目标视频的__vue__失败");return}let a=i.bvid;if(p.isNull(a)){B.error("获取相关视频的bvid失败");return}o.info("相关视频的bvid: "+a),R.goToUrl(oe.getVideoUrl(a)),p.preventEvent(t);}f.on(document,"click",[y.className.video+" .m-video-season-new .video-card .launch-app-btn",y.className.mVideo+" .m-video-season-new .video-card .launch-app-btn"],e,{capture:true}),f.on(document,"click",[y.className.video+" .m-video-season-panel .season-video-item .launch-app-btn",y.className.mVideo+" .m-video-season-panel .season-video-item .launch-app-btn"],e,{capture:true});},repairLinkJump(){o.info("修复链接跳转");let e=new p.LockFunction(()=>{["a.member-link:not([href])[data-url]","a.jump-link:not([href])[data-url]"].forEach(t=>{ge(t).forEach(u=>{u.href=u.getAttribute("data-url");});});});p.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{e.run();}});},gestureReturnToCloseCommentArea(){o.info("手势返回关闭评论区，全局监听document点击.sub-reply-preview"),p.waitNode("#app").then(e=>{p.waitVueByInterval(e,()=>{var u,i;let t=x.getVue(e);return t==null?false:typeof((i=(u=t==null?undefined:t.$router)==null?undefined:u.options)==null?undefined:i.scrollBehavior)!=null},250,1e4).then(t=>{let u=x.getVue(e);if(!u){o.error("获取#app的vue属性失败");return}let i=u.$router.options.scrollBehavior;u.$router.options.scrollBehavior=function(a,r,n){return a.hash==="#/seeCommentReply"?(o.info("当前操作为打开评论区，scrollBehavior返回null"),null):a.hash===""&&r.hash==="#/seeCommentReply"?(o.info("当前操作为关闭评论区，scrollBehavior返回null"),null):i.call(this,...arguments)};});}),f.on(document,"click",".sub-reply-preview",function(e){let t=document.querySelector("#app"),u=x.getVue(t);if(!u){o.error("获取#app元素失败");return}let i=R.hookGestureReturnByVueRouter({vueObj:u,hash:"#/seeCommentReply",callback(a){if(!a)return  false;let r=document.querySelector(".dialog-close-icon");return r?r.click():o.error("评论区关闭失败，原因：元素dialog-close-icon获取失败"),true}});p.waitNode(".dialog-close-icon").then(a=>{f.on(a,"click",function(){i.resumeBack(false);},{capture:true,once:true});});});},enterVideoFullScreen(){p.waitNode(".mplayer-btn-widescreen",5e3).then(e=>{if(!e){o.error("获取全屏按钮失败"),B.error("获取全屏按钮失败");return}if(e.closest(".mplayer-wide")){o.warn("当前的全屏按钮是【退出全屏】，不点击");return}o.info("进入全屏"),e.click();});},optimizationScroll(){let e=null,t=null,u=null,i=null,a=null,r=0,n=0;function l(s){return !document.contains(s)}f.on(document,"scroll",s=>{if(l(t)){if(t=document.querySelector(".m-video-player"),l(t))return;if(r==0){const g=t.getBoundingClientRect();r=g.height,n=g.top,o.info(`视频区域的最大高度为 ${r}px`),o.info(`视频区域的最大top为 ${n}px`);}}if(l(u)&&(u=document.querySelector(".m-video-info-new"),l(u))||l(e)&&(e=document.querySelector(".m-navbar"),l(e))||l(i)&&(i=document.querySelector(".bottom-tab"),l(i))||l(a)&&(a=document.querySelector(".bottom-tab .v-affix"),l(a)))return;let d=u.getBoundingClientRect().top;d>=0?d<=r?t.style.paddingTop=d+"px":t.style.paddingTop="":t.style.paddingTop="0px";let c=f.height(e);i.getBoundingClientRect().top<c?a.hasAttribute("data-is-fixed")||(a.style.cssText=`position: fixed;left: 0px;top: ${c}px;z-index: 10000;width: 100%;`,a.setAttribute("data-is-fixed","true")):(a.style.cssText="",a.removeAttribute("data-is-fixed"));},{passive:true});},disableSwipeTab(){o.info("禁止滑动切换tab"),x.waitVuePropToSet(".m-video-bottom-tab",{msg:"等待tab的vue属性touchstart、touchmove、touchend事件，_bindEvents函数",check(e){var t,u,i,a,r,n,l,s;return ((t=e==null?undefined:e.slider)==null?undefined:t.el)instanceof HTMLElement&&typeof((i=(u=e==null?undefined:e.slider)==null?undefined:u.events)==null?undefined:i.touchstart)=="function"&&typeof((r=(a=e==null?undefined:e.slider)==null?undefined:a.events)==null?undefined:r.touchmove)=="function"&&typeof((l=(n=e==null?undefined:e.slider)==null?undefined:n.events)==null?undefined:l.touchend)=="function"&&typeof((s=e==null?undefined:e.slider)==null?undefined:s._bindEvents)=="function"},set(e){let t=e.slider.el;t.removeEventListener("touchstart",e.slider.events.touchstart),t.removeEventListener("touchmove",e.slider.events.touchmove),t.removeEventListener("touchend",e.slider.events.touchend),e.slider._bindEvents=()=>{},o.success("成功禁用滑动，清除touchstart、touchmove、touchend事件，覆盖_bindEvents函数");}});}},Fu=`.artplayer-container {\r
	width: 100vw;\r
	height: 35vh;\r
}`,re={getUrl(e){if(e!=null)return e.getAttribute("universallink")},jumpToUrl(e){let t=e.target,u=t.querySelector("bili-open-app")||t.querySelector("m-open-app");if(u){let i=re.getUrl(u);i?R.goToUrl(i):(B.error("获取bili-open-app的Url失败"),o.error("获取bili-open-app的Url失败"));}else B.error("未获取到<bili-open-app>元素"),o.error("未获取到<bili-open-app>元素");}},De={filteringSensitiveSearchParamData(e){const t=p.assign({},e,true);return Reflect.deleteProperty(t,"access_key"),Reflect.deleteProperty(t,"access_token"),t},failToast(e){o.error(e),alert(JSON.stringify(e,null,4));}},ut={async getPlayUrl(e){let t={avid:"",cid:"",ep_id:"",qn:127,fnver:0,fnval:3088,fourk:1};t=p.assign(t,e);let u=Me.getBangumiProxyHost();o.info("番剧播放地址请求数据");let i=[],a;const r="/pgc/player/web/playurl";o.info(`请求路径：${r}`);for(let n=0;n<u.length;n++){const l=u[n],s=l.host,d={};s!==Fe.web_host&&(p.assign(d,Me.getBangumiProxySearchParam({area:l.area}),true),o.info(`代理服务器数据: ${JSON.stringify(l)}`),o.info(`代理服务器请求参数：${JSON.stringify(De.filteringSensitiveSearchParamData(d))}`));let c=`https://${s}${r}?${p.toSearchParamsStr(t)}&${p.toSearchParamsStr(d)}`,m=await I.get(c,{responseType:"json",fetch:false,allowInterceptConfig:false,headers:{Referer:"https://www.bilibili.com/"}});if(!m.status){o.error(`代理服务器：${s} 请求失败`);continue}let g=p.toJSON(m.data.responseText);if(g.result,!te.isWebApiSuccess(g)||te.isAreaLimit(g)){o.error(`请求失败，当前代理服务器：${s} ${JSON.stringify(g)}`),i.push(g);continue}a=g.result;break}return a==null&&De.failToast(i),a},async getPlayUrlHTML5(e){let t={avid:"",cid:"",ep_id:"",bsource:""};t=p.assign(t,e),o.info("（原版api）番剧播放地址请求数据");let i=`https://${Fe.web_host}/pgc/player/web/playurl/html5?${p.toSearchParamsStr(t)}`,a=await I.get(i,{responseType:"json",fetch:true,headers:{Host:"www.bilibili.com",Referer:"https://www.bilibili.com"}});if(!a.status)return;let r=p.toJSON(a.data.responseText);if(!te.isWebApiSuccess(r)){De.failToast(r);return}return r.result}},xu="[artplayer-plugin-airborneHelper]：",T={$data:{tipJumpToastTimeoutId:undefined,tipJumpToastInfo:undefined,successJumpToastInfo:undefined},$event:{"video:timeupdate":()=>{if(T.$data.tipJumpToastTimeoutId!=null||!Y.$data.art.playing)return;const e=5;let t=Y.$data.art.currentTime,u=Y.$data.option.clip_info_list.findIndex(i=>{let a=i.start;return a===0?t<=1:t>=a-e&&t<a});if(u!==-1){let i=function(){var l;clearTimeout(T.$data.tipJumpToastTimeoutId),T.$data.tipJumpToastTimeoutId=undefined,(l=T.$data.tipJumpToastInfo)==null||l.close(),T.$data.tipJumpToastInfo=undefined,Y.$data.option.clip_info_list.splice(u,1);},a=Y.$data.option.clip_info_list[u],r=Y.$data.art.plugins[vu],n=(a.start-t)*1e3;T.$data.tipJumpToastTimeoutId=setTimeout(()=>{Y.$data.art.currentTime=a.end,T.$data.tipJumpToastTimeoutId=undefined,T.$data.successJumpToastInfo&&(T.$data.successJumpToastInfo.close(),T.$data.successJumpToastInfo=undefined),T.$data.successJumpToastInfo=r.toast({text:"空降成功~o(*≧▽≦)ツ┏━┓",closeCallback(){T.$data.successJumpToastInfo=undefined;}});},n),T.$data.tipJumpToastInfo&&(T.$data.tipJumpToastInfo.close(),T.$data.tipJumpToastInfo=undefined),T.$data.tipJumpToastInfo=r.toast({text:typeof a.toastText=="string"?a.toastText:"站稳扶好，准备起飞~",timeout:n<2e3?2e3:n,showCloseBtn:false,jumpText:typeof a.toastText=="string"?"不跳过":"坠机",jumpClickCallback:()=>{i();}}),setTimeout(()=>{T.$data.tipJumpToastInfo&&(T.$data.tipJumpToastInfo.close(),T.$data.tipJumpToastInfo=undefined);},(e+3)*1e3);}}},bind(){Object.keys(this.$event).forEach(e=>{Y.$data.art.on(e,this.$event[e]);});},unbind(){Object.keys(this.$event).forEach(e=>{Y.$data.art.off(e,this.$event[e]);}),clearTimeout(T.$data.tipJumpToastTimeoutId),T.$data.tipJumpToastTimeoutId=undefined,T.$data.successJumpToastInfo&&(T.$data.successJumpToastInfo.close(),T.$data.successJumpToastInfo=undefined),T.$data.tipJumpToastInfo&&(T.$data.tipJumpToastInfo.close(),T.$data.tipJumpToastInfo=undefined);}},Y={$key:{plugin_KEY:"plugin-airborne-helper"},$data:{art:null,option:null},init(e,t){this.$data.art=e,this.update(t);},update(e){this.$data.option=e,console.log(xu+"更新配置",e),T.unbind(),e.clip_info_list.length&&T.bind();}},$u=e=>t=>(Y.init(t,e),{name:Y.$key.plugin_KEY,update(u){Y.update(u);}}),ku=Y.$key.plugin_KEY,it="[flvjs]：",at=e=>e.epList.map(t=>({isDefault:t.ep_id===e.ep_id&&t.aid===e.aid&&t.cid===e.cid,title:$t(t.long_title,t.title),aid:t.aid,bvid:t.bvid,cid:t.cid,ep_id:t.ep_id,onSelect(u,i){Pt.updateArtPlayerVideoInfo(t,e.epList);}})),ne={$data:{art:null,flv:null,currentOption:null,from:"bangumi"},resetEnv(e){e&&(Reflect.set(this.$data,"art",null),Reflect.set(this.$data,"flv",null)),Reflect.set(this.$data,"currentOption",null);},flvPlayer(){var u,i;if(this.$data.currentOption==null){console.error(it+"获取当前配置为空");return}let e=this.$data.currentOption.flvInfo;(this.$data.flv!=null||e==null)&&((u=this.$data.flv)==null||u.detachMediaElement(),(i=this.$data.flv)==null||i.destroy());let t=this.$data.currentOption;console.log(it+"加载视频",e),e.length>1?this.$data.flv=Le.createPlayer({type:"flv",filesize:t.flvTotalSize,duration:t.flvTotalDuration,segments:e.map(a=>({url:a.url,duration:a.duration,filesize:a.size}))},{stashInitialSize:1024*100}):this.$data.flv=Le.createPlayer({type:"flv",url:e[0].url},{stashInitialSize:1024*100}),this.$data.flv.attachMediaElement(this.$data.art.video),this.$data.flv.load();},async init(e){this.resetEnv(true),this.$data.currentOption=e;const t="artplayer-bangumi-danmaku-option",u=new yt(t),i=u.getLocalArtDanmakuOption(),a={..._t(),container:e.container,settings:[],plugins:[Vt(),Tt({from:ne.$data.from,qualityList:e.quality})]};if(e.isFlv){if(a.quality=[],a.type="flv",e.flvInfo.length===0){De.failToast("视频播放地址为空，无法播放！");return}a.url=e.flvInfo[0].url,a.customType={flv:(r,n,l)=>{if(!Le.isSupported()){l.notice.show="Unsupported playback format: flv";return}this.flvPlayer();}};}else a.type="mp4";return h.getValue("artplayer-plugin-bangumi-danmaku-enable")&&a.plugins.push(pt({...Nt(),danmuku:e.danmukuUrl,speed:i.speed,margin:i.margin,opacity:i.opacity,modes:i.modes,fontSize:i.fontSize,antiOverlap:i.antiOverlap,synchronousPlayback:i.synchronousPlayback,visible:i.visible,beforeEmit(r){return new Promise(n=>{console.log(r),setTimeout(()=>{n(true);},1e3);})}})),h.getValue("artplayer-plugin-bangumi-m4sAudioSupport-enable")&&a.plugins.push(At({from:ne.$data.from,audioList:e.audioList||[],showSetting:true})),h.getValue("artplayer-plugin-bangumi-epChoose-enable")&&a.plugins.push(kt({EP_LIST:at(e),automaticBroadcast:true})),h.getValue("artplayer-plugin-bangumi-cc-subtitle-enable")&&a.plugins.push(wt({from:ne.$data.from,cid:e.cid,aid:e.aid,bvid:e.bvid,ep_id:e.ep_id})),h.getValue("artplayer-plugin-bangumi-toptoolbar-enable")&&a.plugins.push(Et({onlineInfoParams:{aid:e.aid,cid:e.cid,bvid:e.bvid},title:e.videoTitle,showWrap:true,showTitle:true,showOnlineTotal:true})),h.getValue("artplayer-plugin-bangumi-airborneHelper-enable")&&a.plugins.push($u({clip_info_list:e.clip_info_list})),h.getValue("artplayer-plugin-bangumi-statistics-enable")&&a.plugins.push(Rt({data:[]})),this.$data.art=new ze(a),u.onConfigChange(this.$data.art),this.$data.art},async update(e,t){this.resetEnv(false),this.$data.currentOption=t,o.info("更新新的播放信息",t),e.pause(),o.info("暂停视频"),e.currentTime=0,o.info("重置播放进度"),this.updatePluginInfo(e,t),e.play(),o.info("播放");},updatePluginInfo(e,t){if(e.plugins[ye].update({from:ne.$data.from,qualityList:t.quality}),o.info("更新画质",t.quality),h.getValue("artplayer-plugin-bangumi-danmaku-enable")&&(e.plugins.artplayerPluginDanmuku.config({danmuku:t.danmukuUrl}),e.plugins.artplayerPluginDanmuku.load(),o.info("更新弹幕姬",t.danmukuUrl)),h.getValue("artplayer-plugin-bangumi-m4sAudioSupport-enable")&&(e.plugins[je].update({from:ne.$data.from,audioList:t.audioList||[]}),o.info("更新音频",t.audioList)),h.getValue("artplayer-plugin-bangumi-epChoose-enable")&&(e.plugins[St].update({EP_LIST:at(t),automaticBroadcast:true}),o.info("更新选集信息",t.epList)),h.getValue("artplayer-plugin-bangumi-cc-subtitle-enable")){let i=e.plugins[Ft];const a={from:ne.$data.from,cid:t.cid,aid:t.aid,ep_id:t.ep_id};i.update(a),o.info("更新字幕",a);}if(h.getValue("artplayer-plugin-bangumi-toptoolbar-enable")){let i=e.plugins[vt];const a={showRight:true,showRightFollow:true,showWrap:true,showTitle:true,showOnlineTotal:true,title:t.videoTitle,onlineInfoParams:{aid:t.aid,cid:t.cid,bvid:t.bvid}};i.update(a),o.info("更新顶部标题",a);}h.getValue("artplayer-plugin-bangumi-airborneHelper-enable")&&(e.plugins[ku].update({clip_info_list:t.clip_info_list}),o.info("更新空降助手信息",t.clip_info_list));}},Su={async waitReactPropsToSet(e,t,u){if(!Array.isArray(u)){this.waitReactPropsToSet(e,t,[u]);return}function i(){let a=null;return typeof e=="string"?a=document.querySelector(e):typeof e=="function"?a=e():e instanceof HTMLElement&&(a=e),a}typeof e=="string"&&!await p.waitNode(e,1e4)||u.forEach(a=>{typeof a.msg=="string"&&o.info(a.msg);function r(){let n=i();if(n==null)return  false;let l=p.getReactObj(n);if(l==null)return  false;let s=l[t];return s==null?false:!!a.check(s)}p.waitPropertyByInterval(()=>i(),r,250,1e4).then(()=>{let n=i();if(n==null){typeof a.overTimeCallBack=="function"&&a.overTimeCallBack();return}let l=p.getReactObj(n);if(l==null){typeof a.overTimeCallBack=="function"&&a.overTimeCallBack();return}let s=l[t];if(s==null){typeof a.overTimeCallBack=="function"&&a.overTimeCallBack();return}a.set(s);});});}};function rt(e){let t=[];return e.video.forEach(u=>{if(!e.accept_quality.includes(u.id))return;let i=e.support_formats.find(n=>n.quality===u.id),a=J.findBetterCDN(u.base_url,u.baseUrl,u.backup_url,u.backupUrl);a=J.replaceBangumiVideoCDN(a);let r=i==null?undefined:i.new_description;t.push({name:r,url:a,type:u.mimeType,id:u.id,size:u.size,quality:u.id,vip:!!(i!=null&&i.need_vip),bandwidth:u.bandwidth,frameRate:u.frameRate,codecid:u.codecid,codecs:u.codecs});}),t}const _u=(e,t)=>`第${e}话 ${t}`,nt=(e,t)=>{var i,a;let u=[];if((a=(i=e==null?undefined:e.dash)==null?undefined:i.video)!=null&&a.length){let r=e;u=[...rt({accept_quality:r.accept_quality,support_formats:r.support_formats,video:r.dash.video})],u.length===0&&r.dash.video.length!==0&&(o.warn(`当前选择的视频编码id为: ${t}，但是过滤出的视频没有一个符合的，所以直接放弃使用自定义选择视频编码`),u=[...rt({accept_quality:r.accept_quality,support_formats:r.support_formats,video:r.dash.video})]);}else {let r=e;r.durls.length===0&&r.durl!=null&&r.durls.push({quality:r.quality,durl:r.durl}),r.durls.forEach(n=>{if(!r.accept_quality.includes(n.quality)||!n.durl.length)return;let l=n.durl[0],s=e.support_formats.find(m=>m.quality===n.quality),d=J.findBetterCDN(l.url,l.backup_url),c=s==null?undefined:s.new_description;u.push({name:c,url:d,type:"audio/mp4",id:n.quality,size:l.size,quality:n.quality,vip:!!(s!=null&&s.need_vip),bandwidth:0,frameRate:"",codecid:0,codecs:""});});}return u},Tu=async(e,t)=>{var F,b;const{aid:u,bvid:i,cid:a,ep_id:r,title:n,long_title:l}=e;o.info(`解析番剧信息 aid:${u} cid:${a} ep_id:${r}`);const s=_u(n,l),d=[];let c=[],m=[],g=false,A=[],D=0,w=0;if(h.getValue("bili-bangumi-unlockAreaLimit")){const v=await ut.getPlayUrl({avid:u,cid:a,ep_id:r});if(!v)return;if(Array.isArray(v==null?undefined:v.clip_info_list)?m=v.clip_info_list:Array.isArray(v==null?undefined:v.clip_info)&&(m=v.clip_info),v.type.toLowerCase()==="flv")g=true,v.durl.forEach(k=>{let O=J.findBetterCDN(k.url,k.backup_url);O=J.replaceBangumiVideoCDN(O),D+=k.length,w+=k.size,A.push({order:k.order,url:O,duration:k.length,length:k.length,size:k.size});});else if(v.type.toLowerCase()==="dash"||v.type.toLowerCase()==="mp4")(((F=v==null?undefined:v.dash)==null?undefined:F.audio)||[]).forEach(k=>{let O=J.findBetterCDN(k.baseUrl,k.base_url,k.baseUrl,k.backup_url);h.getValue("bili-bangumi-uposServerSelect-applyAudio")&&(O=J.replaceBangumiVideoCDN(O)),d.push({url:O,id:k.id,size:k.size,text:bt[k.id]||"",bandwidth:k.bandwidth,codecs:k.codecs,mimeType:k.mimeType||k.mime_type});}),o.info("ArtPlayer: 获取的音频信息",d),c=c.concat(nt(v)),o.info("ArtPlayer: 获取的视频画质信息",c);else {De.failToast("暂未适配的视频格式："+v.format);return}}else {const v=await ut.getPlayUrlHTML5({avid:u,cid:a,ep_id:r});if(!v)return;Array.isArray(v==null?undefined:v.clip_info_list)?m=v.clip_info_list:Array.isArray(v==null?undefined:v.clip_info)&&(m=v.clip_info),c=c.concat(nt(v));}const $=c.map((v,k)=>({html:v.name,url:v.url,quality:v.quality,mimeType:v.type,codecid:v.codecid,codecs:v.codecs,frameRate:v.frameRate,bandwidth:v.bandwidth})),S={container:null,epList:t,cid:a,aid:u,bvid:i,ep_id:r,videoTitle:s,danmukuUrl:`https://api.bilibili.com/x/v1/dm/list.so?oid=${a}`,quality:$,clip_info_list:m,isFlv:g,flvInfo:A,flvTotalDuration:D,flvTotalSize:w};return S.url=(b=c==null?undefined:c[0])==null?undefined:b.url,d.length&&(S.audioList=d.map((v,k)=>({isDefault:k===0,url:v.url,soundQualityCode:v.id,soundQualityCodeText:v.text,bandwidth:v.bandwidth,codecs:v.codecs,mimeType:v.mimeType,size:v.size}))),S},Pt={$data:{art:null},updateArtPlayerVideoInfo(e,t){const u=this;Su.waitReactPropsToSet(y.className.bangumi_new+' [class^="Player_container"]',"reactFiber",{check(i){var a,r,n,l,s,d;return typeof((d=(s=(l=(n=(r=(a=i==null?undefined:i.return)==null?undefined:a.memoizedState)==null?undefined:r.queue)==null?undefined:n.lastRenderedState)==null?undefined:l[0])==null?undefined:s.epInfo)==null?undefined:d.bvid)=="string"},async set(i){var s,d,c,m,g,A,D,w,$,S;let a=(g=(m=(c=(d=(s=i==null?undefined:i.return)==null?undefined:s.memoizedState)==null?undefined:d.queue)==null?undefined:c.lastRenderedState)==null?undefined:m[0])==null?undefined:g.epInfo;const r=z("#bilibiliPlayer");if(e==null&&(e=a),t==null){t=[];let F=z(y.className.bangumi_new+' [class^="EpisodeList_episodeListWrap"]');if(F){let b=p.getReactObj(F),v=(S=($=(w=(D=(A=b==null?undefined:b.reactFiber)==null?undefined:A.return)==null?undefined:D.memoizedState)==null?undefined:w.memoizedState)==null?undefined:$[0])==null?undefined:S.episodes;Array.isArray(v)&&(t=v);}}const n=await Tu(e,t);if(n==null)return;let l=z("#artplayer");if(!l){const F=f.createElement("div",{className:"artplayer-container",innerHTML:`
									<div id="artplayer"></div>
									`});l=F.querySelector("#artplayer"),f.after(r,F);}if(n.container=l,u.$data.art==null){let F=await ne.init(n);if(F)u.$data.art=F;else return;u.$data.art.volume=1;}else ne.update(u.$data.art,n);}});}},Vu={$data:{art:null},init(){h.execMenuOnce("bili-bangumi-initialScale",()=>{R.initialScale();}),h.execMenuOnce("bili-bangumi-hook-callApp",()=>{this.hookCallApp();}),h.execMenu("bili-bangumi-cover-clicl-event-chooseEp",()=>{this.setChooseEpClickEvent();}),h.execMenu("bili-bangumi-cover-clicl-event-other",()=>{this.setClickOtherVideo();}),h.execMenu("bili-bangumi-cover-clicl-event-recommend",()=>{this.setRecommendClickEvent();}),this.coverVideoPlayer();},hookCallApp(){let e=G.setTimeout;G.setTimeout=function(...t){if(t[0].toString().includes("autoOpenApp")){o.success("阻止唤醒App",t);return}return Reflect.apply(e,this,t)};},setChooseEpClickEvent(){p.waitNode(y.className.bangumi+" .ep-list-pre-wrapper ul.ep-list-pre-container").then(e=>{o.info("覆盖【选集】的点击事件"),f.on(e,"click","li.episode-item",function(t){p.preventEvent(t),re.jumpToUrl(t);},{capture:true});}),p.waitNode(y.className.bangumi+" .ep-list-pre-wrapper ul.season-list-wrapper").then(e=>{o.info("覆盖【xx季】的点击事件"),f.on(e,"click","li",function(t){p.preventEvent(t),re.jumpToUrl(t);},{capture:true});}),p.waitNode(y.className.bangumi+" .ep-list-pre-header").then(e=>{o.info("覆盖【选集】右上角的【全xx话】Arrow的点击事件"),f.on(e,"click",function(t){p.preventEvent(t);},{capture:true});}),f.on(document,"click",[y.className.bangumi_new+' [class^="EpisodeList_episodeListWrap"] m-open-app[universallink]',y.className.bangumi_new+' [class^="SeasonList_container"] m-open-app[universallink]'],(e,t)=>{let u=re.getUrl(t);if(!u){B.error("获取跳转链接失败");return}R.goToUrl(u);},{capture:true});},setClickOtherVideo(){p.waitNode(y.className.bangumi+" .section-preview-wrapper ul.ep-list-pre-container").then(e=>{o.info("覆盖【PV&其他】、【预告】、【主题曲】的点击事件"),f.on(e,"click","li.section-preview-item",function(t){p.preventEvent(t),re.jumpToUrl(t);},{capture:true});}),p.waitNode(y.className.bangumi+" .section-preview-header").then(e=>{o.info("覆盖【PV&其他】、【预告】、【主题曲】右上角的Arrow的点击事件"),f.on(e,"click",function(t){p.preventEvent(t);},{capture:true});}),f.on(document,"click",y.className.bangumi_new+' [class^="SectionPanel_container"] m-open-app[universallink]',(e,t)=>{let u=re.getUrl(t);if(!u){B.error("获取跳转链接失败");return}R.goToUrl(u);},{capture:true});},setRecommendClickEvent(){p.waitNode(y.className.bangumi+" .recom-wrapper ul.recom-list").then(e=>{o.info("覆盖【更多推荐】番剧的点击事件"),f.on(e,"click","li.recom-item-v2",function(t){p.preventEvent(t),re.jumpToUrl(t);},{capture:true});}),f.on(document,"click",y.className.bangumi_new+' [class^="Footer_container"] m-open-app[universallink]',(e,t)=>{let u=re.getUrl(t);if(!u){B.error("获取跳转链接失败");return}R.goToUrl(u);},{capture:true});},coverVideoPlayer(){if(document.querySelector("#artplayer"))o.warn("已存在播放器，更新播放信息");else {N(`
			.player-wrapper,
			.open-app-bar,
			${y.className.bangumi_new} [class^="Player_videoWrap"] > div:not(.artplayer-container){
				display: none !important;
			}
			
			${He}
			
			${Fu}
			
			.artplayer-container{
				height: -webkit-fill-available;
				height: 100%;
			}
			`);let e=h.getValue("bili-bangumi-artplayer-controlsPadding-left-right",0);e!=0&&N(`
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
				`);}Pt.updateArtPlayerVideoInfo();}},Ot={async getSearchInputPlaceholder(){let e=await I.get("https://api.bilibili.com/x/web-interface/wbi/search/default",{fetch:true,headers:{accept:"application/json, text/plain, */*","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","cache-control":"no-cache",pragma:"no-cache","sec-ch-ua":'""',"sec-ch-ua-mobile":"?1","sec-ch-ua-platform":'""',"sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-site"},allowInterceptConfig:false});if(!e.status)return;let t=p.toJSON(e.data.responseText);if(te.isWebApiSuccess(t))return t.data},async getBangumiSearchResult(e){let t={search_type:"media_bangumi",keyword:e.keyword,from_client:"BROWSER",drm_tech_type:"2",module:"bangumi",area:e.area.toLowerCase(),access_key:Ce.getAccessToken()},u=`https://${e.host}/x/web-interface/search/type?${p.toSearchParamsStr(t)}`,i=await I.get(u,{fetch:false,headers:{"User-Agent":p.getRandomAndroidUA()}});if(!i.status)return;let a=p.toJSON(i.data.responseText);return te.isWebApiSuccess(a)?{isSuccess:true,data:a.data.result}:(o.error(`请求失败，当前代理服务器信息：${JSON.stringify(e.host)}`),o.error(`请求失败，当前请求的响应信息：${JSON.stringify(a)}`),{isSuccess:false,data:a})}},Ru=`#app .m-search {\r
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
`,Mt={$flag_css:{enableOtherAreaSearchBangumi:false},init(){N(Ru),f.ready(()=>{h.execMenu("bili-search-enableOtherAreaSearchBangumi",()=>{this.enableOtherAreaSearchBangumi();});});},enableOtherAreaSearchBangumi(){this.$flag_css.enableOtherAreaSearchBangumi||(this.$flag_css.enableOtherAreaSearchBangumi=true,N(`
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
			`)),p.waitNode(".m-search-result .tabs:not(:has(.gm-tab-item))").then(e=>{Me.getSearchProxyHost().forEach(i=>{let a=f.createElement("a",{className:"tab-item gm-tab-item",innerHTML:`番剧（${i.name}）`},{"data-area":i.area,"data-host":i.host});e.appendChild(a);});const u=i=>{e.querySelectorAll(".tab-item").forEach(a=>i!=a&&a.classList.remove("on")),i.classList.add("on");};f.on(e,"click",".tab-item",async i=>{let a=i.target;u(a);let r=document.querySelector(".result-panel"),n=document.querySelector(".gm-result-panel");if(n&&(n.remove(),f.show(r)),!a.classList.contains("gm-tab-item"))return;let l=a.dataset.area,s=a.dataset.host,d=document.querySelector(".m-search-result"),c=x.getVue(d);c.switchTab(233),f.hide(r);let m=c.keyword,g=B.loading("搜索中，请稍后..."),A=await Ot.getBangumiSearchResult({keyword:m,area:l,host:s});if(g.close(),!A)return;if(!A.isSuccess){alert(JSON.stringify(A.data,null,2));return}let D=A.data;o.info("搜索结果：",D);let w=f.createElement("div",{className:"gm-result-panel",innerHTML:`
						<div class="gm-list-view">
							<div class="gm-video-list-box">
								<div class="gm-video-list">
									<div class="gm-card-box"></div>
								</div>
							</div>
						</div>
					`}),$=w.querySelector(".gm-card-box");D.forEach(S=>{$.appendChild(this.createSearchResultVideoItem(S));}),d.appendChild(w);});});},createSearchResultVideoItem(e){var s,d;let t=f.createElement("div",{className:"gm-card-item",innerHTML:`
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
				`},{"data-url":e.url,"data-type":e.type,"data-media_id":e.media_id,"data-pgc_season_id":e.pgc_season_id,"data-is_follow":e.is_follow,"data-is_selection":e.is_selection});Reflect.set(t,"data-option",e),f.on(t,"click",c=>{p.preventEvent(c),window.open(e.url,"_blank");});let u=t.querySelector(".gm-card-display-info"),i=[];Array.isArray(e==null?undefined:e.display_info)&&(i=i.concat(e.display_info)),Array.isArray(e==null?undefined:e.badges)&&(i=i.concat(e.badges)),i=p.uniqueArray(i,c=>c.text),i.forEach(c=>{let m=f.createElement("span",{className:"gm-card-badge-info-item",innerText:c.text});typeof c.border_color=="string"&&(m.style.border=`1px solid ${c.border_color}`,m.style.color=c.border_color),f.append(u,m);}),e.pubtime&&f.append(u,`
				<span>${p.formatTime(e.pubtime*1e3,"yyyy")}</span>
				`);let a=e.areas||Reflect.get(e,"area");a&&(u.children.length&&f.append(u,`
					<span> | </span>
				`),f.append(u,`
					<span>${a}</span>
				`));let r=t.querySelector(".gm-card-media_score");e.media_score&&e.media_score.user_count&&f.append(r,`
				<span class="gm-card-media_score-score">${((s=e.media_score)==null?undefined:s.score)||0}分</span>
				<span class="gm-card-media_score-user_count">${((d=e.media_score)==null?undefined:d.user_count)||0}人参与</span>
				`);let n=t.querySelector(".gm-card-eps");return [...e.eps||[],...Reflect.get(e,"episodes_new")||[]].filter(c=>p.isNotNull(c)).forEach(c=>{let m=c.title||c.long_title,g=c.url||Reflect.get(c,"uri"),A=f.createElement("div",{className:"gm-card-ep-conatiner",innerHTML:`
				<div class="gm-card-ep-badges-container">
					
				</div>
				<div class="gm-card-ep-info-container">
					${m}
				</div>`},{"data-id":c.id,"data-url":g,"data-title":m,"data-long_title":c.long_title}),D=A.querySelector(".gm-card-ep-badges-container");if(A.querySelector(".gm-card-ep-info-container"),Array.isArray(c.badges)&&c.badges.length){let w=c.badges[0],$=f.createElement("span",{className:"gm-card-ep-badge-top-right",innerText:w.text});typeof w.bg_color=="string"&&($.style.backgroundColor=w.bg_color),typeof w.text_color=="string"&&($.style.color=w.text_color),f.append(D,$);}f.on(A,"click",w=>{p.preventEvent(w),window.open(g,"_blank");}),n.appendChild(A);}),t},searchBangumi(){}},Nu={$flag:{mutationSearchResult:false},init(){this.mutationSearchResult();},mutationSearchResult(){this.$flag.mutationSearchResult||(this.$flag.mutationSearchResult=true,N(`
        .bangumi-list{
            padding: 0 10px;
        }
        `),p.mutationObserver(document,{config:{subtree:true,childList:true},callback:p.debounce(()=>{document.querySelectorAll(".m-search-bangumi-item").forEach(e=>{let t=x.getVue(e);if(!t)return;let u=t.info;if(!u)return;let i=Mt.createSearchResultVideoItem(u);f.after(e,i),e.remove();});})}));}},Lu={init(){h.execMenuOnce("bili-search-vue-prop-noCallApp",()=>{this.noCallApp();}),h.execMenuOnce("bili-search-vue-prop-openAppDialog",()=>{this.openAppDialog();});},noCallApp(){let e=new p.LockFunction(()=>{document.querySelectorAll(".video-list .card-box > div:not([data-gm-inject-no-call-app])").forEach(t=>{let u=x.getVue(t);u&&typeof u.noCallApp=="boolean"&&(Object.defineProperty(u,"noCallApp",{value:true,writable:false,enumerable:true,configurable:true}),t.setAttribute("data-gm-inject-no-call-app","true"));});});p.mutationObserver(document,{config:{subtree:true,childList:true},callback(){e.run();}});},openAppDialog(){let e=new p.LockFunction(()=>{document.querySelectorAll(".video-list .card-box > div:not([data-gm-inject-openAppDialog])").forEach(t=>{let u=x.getVue(t);u&&typeof u.openAppDialog=="boolean"&&(Object.defineProperty(u,"openAppDialog",{value:false,writable:false,enumerable:true,configurable:true}),t.setAttribute("data-gm-inject-openAppDialog","true"));});});p.mutationObserver(document,{config:{subtree:true,childList:true},callback(){e.run();}});}},Pu={init(){P.isSearchResult()&&Mt.init(),Lu.init(),h.execMenuOnce("bili-search-cover-cancel",()=>{this.coverCancel();}),h.execMenu("bili-search-beautifySearchResult",()=>{Nu.init();}),f.ready(()=>{h.execMenu("bili-search-inputAutoFocus",()=>{this.inputAutoFocus();});});},coverCancel(){o.info("覆盖【取消】按钮的点击事件"),f.on(document,"click","a.cancel",e=>{o.info("点击取消按钮"),p.preventEvent(e),window.history.back();},{capture:true});},inputAutoFocus(){if(new URLSearchParams(window.location.search).has("keyword")){o.warn("当前在搜索结果页面，不执行输入框自动获取焦点");return}o.info("输入框自动获取焦点"),p.waitNode('.m-search .m-search-search-bar input[type="search"]',1e4).then(t=>{if(!t){o.error("获取输入框失败");return}t.focus();});}},Ae={addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(u=>{Array.isArray(u)?t=t.concat(u):t.push(u);}),N(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){let t=typeof Ge=="function"?Ge(e.keyName):"";typeof t=="string"&&t?N(t):Ae.loadStyleLink(e.url);},async loadStyleLink(e){let t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=e,f.ready(()=>{document.head.appendChild(t);});},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(u=>{t.onload=()=>{u(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.match(/^http(s|):\/\//i)||(e.startsWith("/")||(e+="/"),e=window.location.origin+e),e},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;let t=new URL(e);return t.protocol="https:",t.toString()}},Ou={init(){h.execMenuOnce("bili-live-block-chatRoom",()=>this.blockChatRoom()),h.execMenuOnce("bili-live-block-brush-prompt",()=>this.blockBrushPrompt()),h.execMenuOnce("bili-live-block-control-panel",()=>this.blockControlPanel());},blockChatRoom(){return o.info("屏蔽聊天室"),Ae.addBlockCSS("#chat-items")},blockBrushPrompt(){return o.info("屏蔽xxx进入直播间"),Ae.addBlockCSS("#brush-prompt")},blockControlPanel(){return o.info("屏蔽底部工具栏"),Ae.addBlockCSS(".control-panel")}},Mu={init(){Ou.init(),h.execMenuOnce("bili-live-prevent-openAppBtn",()=>{this.preventOpenAppBtn();});},preventOpenAppBtn(){p.waitNode("body").then(e=>{o.info("阻止.open-app-btn元素触发点击事件"),f.on(e,"click",".open-app-btn",function(t){p.preventEvent(t);},{capture:true}),f.on(e,"click","#web-player-controller-wrap-el",function(t){p.preventEvent(t);},{capture:true});});}},lt={$data:{dispatchCallBackList:[]},init(){h.execMenu("bili-opus-variable-autoOpenApp",()=>{this.autoOpenApp();}),h.execMenu("bili-opus-variable-go404",()=>{this.go404();}),h.execMenu("bili-opus-variable-handleFallback",()=>{this.dispatch((e,t)=>{if(typeof t=="string"&&t==="opus/handleFallback"&&![1,2].includes(e.fallback.type))return o.success("禁止调用handleFallback函数前往404"),typeof(e==null?undefined:e.showComment)=="boolean"&&e.showComment&&typeof(e==null?undefined:e.initFullComment)=="function"&&e.initFullComment(),false});});},isLimit(){o.info("等待 观察并覆盖变量isLimit"),x.watchVuePropChange(y.className.opus,e=>e.isLimit,e=>{e.isLimit=false,o.success("观察者：覆盖变量isLimit=false");});},autoOpenApp(){x.waitVuePropToSet(y.className.opus,{msg:"等待 覆盖函数autoOpenApp",check(e){return typeof(e==null?undefined:e.autoOpenApp)=="function"},set(e){o.success("成功 覆盖函数autoOpenApp"),e.autoOpenApp=function(){o.success("禁止调用autoOpenApp函数");};}});},go404(){x.waitVuePropToSet(y.className.opus,{msg:"等待 覆盖函数go404",check(e){return typeof(e==null?undefined:e.go404)=="function"},set(e){o.success("成功 覆盖函数go404"),e.go404=function(){o.success("禁止调用go404函数");};}});},fallback(){x.waitVuePropToSet(y.className.opus,{msg:"等待 覆盖对象fallback",check(e){var t;return typeof((t=e==null?undefined:e.fallback)==null?undefined:t.type)=="number"},set(e){o.success("成功 覆盖对象fallback"),e.$watch(()=>e==null?undefined:e.fallback,()=>{e.fallback=null,o.success("覆盖对象fallback");},{deep:true,immediate:true});}});},dispatch(e){let t=e.toString();for(let i=0;i<this.$data.dispatchCallBackList.length;i++)if(this.$data.dispatchCallBackList[i].toString()===t)return;if(o.info("添加dispatch回调判断"),this.$data.dispatchCallBackList.push(e),this.$data.dispatchCallBackList.length>1)return;const u=this;x.waitVuePropToSet(y.className.opus,{msg:"等待 覆盖函数dispatch",check(i){var a;return typeof((a=i==null?undefined:i.$store)==null?undefined:a.dispatch)=="function"},set(i){o.success("成功 覆盖函数dispatch");let a=i.$store.dispatch;i.$store.dispatch=function(...r){let n=r[0];for(let l=0;l<u.$data.dispatchCallBackList.length;l++){const s=u.$data.dispatchCallBackList[l];if(typeof s=="function"){let d=s(i,n);if(typeof d=="boolean"&&!d)return}}return Reflect.apply(a,this,r)};}});}},Uu={init(){lt.init(),h.execMenuOnce("bili-opus-cover-topicJump",()=>{this.coverTopicJump();}),h.execMenuOnce("bili-opus-automaticallyExpandToReadFullText",()=>(lt.isLimit(),this.automaticallyExpandToReadFullText())),h.execMenuOnce("bili-opus-cover-header",()=>{this.coverHeaderJump();});},coverTopicJump(){o.info("覆盖话题跳转点击事件"),f.on(document,"click",y.className.opus+" .launch-app-btn.opus-module-topic",function(e){var r;let t=e.target,u=x.getVue(t);if(!u){B.error("获取话题的__vue__失败");return}let i=(r=u==null?undefined:u.$props)==null?undefined:r.data,a=i==null?undefined:i.jump_url;if(p.isNull(a)){B.error("获取话题的jump_url失败");return}o.info("话题的跳转信息: ",i),R.goToUrl(a);},{capture:true});},automaticallyExpandToReadFullText(){return o.info("自动展开阅读全文"),[Ae.addBlockCSS(y.className.opus+" .opus-read-more"),N(`
			${y.className.opus} .opus-module-content{
				overflow: unset !important;
				max-height: unset !important;
			}
			`)]},coverHeaderJump(){o.info("覆盖header点击事件"),f.on(document,"click",y.className.opus+" .opus-module-author",function(e){var a;p.preventEvent(e);let t=e.target,u=x.getVue(t);if(!u){B.error("获取vue属性失败");return}let i=(a=u==null?undefined:u.data)==null?undefined:a.mid;if(!i){B.error("获取mid失败");return}R.goToUrl(oe.getUserSpaceUrl(i));},{capture:true});}},Iu={init(){h.execMenuOnce("bili-dynamic-cover-topicJump",()=>{this.coverTopicJump();}),h.execMenuOnce("bili-dynamic-cover-atJump",()=>{this.coverAtJump();}),h.execMenuOnce("bili-dynamic-cover-referenceJump",()=>{this.coverReferenceJump();}),h.execMenuOnce("bili-dynamic-cover-header",()=>{this.coverHeaderJump();});},coverHeaderJump(){o.info("覆盖header点击事件"),f.on(document,"click",y.className.dynamic+" .launch-app-btn .dyn-header",function(e){p.preventEvent(e);let t=e.target,u=x.getVue(t);if(!u){B.error("获取vue属性失败");return}let i=u.url;if(!i){B.error("获取url失败");return}R.goToUrl(i);},{capture:true});},coverTopicJump(){o.info("覆盖话题跳转点击事件"),f.on(document,"click",y.className.dynamic+" .launch-app-btn .bili-dyn-topic",function(e){var r;p.preventEvent(e);let t=e.target,u=x.getVue(t);if(!u){B.error("获取vue属性失败");return}let i=(r=u==null?undefined:u.$props)==null?undefined:r.data,a=i==null?undefined:i.jump_url;if(p.isNull(a)){B.error("获取jump_url失败");return}o.info("话题的跳转信息: ",i),R.goToUrl(a);},{capture:true});},coverAtJump(){o.info("覆盖@ 跳转"),f.on(document,"click",y.className.dynamic+" .at",function(e){var i,a;p.preventEvent(e);let t=e.target,u=t.getAttribute("data-oid")||((a=(i=x.getVue(t))==null?undefined:i.$props)==null?undefined:a.rid);if(p.isNull(u)){B.error("获取data-oid或rid失败");return}o.info("用户的oid: "+u),R.goToUrl(oe.getUserSpaceDynamicUrl(u));},{capture:true});},coverReferenceJump(){o.info("覆盖引用的点击事件"),f.on(document,"click",y.className.dynamic+" .dyn-content .reference .dyn-orig-author",function(e){p.preventEvent(e);let u=e.target.getAttribute("data-url");if(!u){B.error("获取data-url失败");return}R.goToUrl(u);},{capture:true}),f.on(document,"click",y.className.dynamic+" .dyn-content .reference .dyn-archive",function(e){var a;p.preventEvent(e);let t=e.target,u=x.getVue(t);if(!u){B.error("获取vue属性失败");return}let i=(a=u==null?undefined:u.data)==null?undefined:a.jump_url;if(p.isNull(i)){B.error("获取jump_url失败");return}R.goToUrl(i);},{capture:true});}},ve={$isHook:{windowPlayerAgent:false,hookWebpackJsonp_openApp:false,overRideLaunchAppBtn_Vue_openApp:false,overRideBiliOpenApp:false},$data:{setTimeout:[]},windowWebPack(e="webpackJsonp",t,u){let i;Ye.Object.defineProperty(G,e,{get(){return i},set(a){o.success("成功劫持webpack，当前webpack名："+e),i=a;const r=i.push;i.push=function(...n){let l=n[0][0];return (t==l||Array.isArray(t)&&Array.isArray(l)&&JSON.stringify(t)===JSON.stringify(l))&&Object.keys(n[0][1]).forEach(s=>{let d=n[0][1][s];n[0][1][s]=function(...c){let m=d.call(this,...c);return c[0]=u(c[0]),m};}),r.call(this,...n)};}});},setTimeout(e){if(this.$data.setTimeout.push(e),this.$data.setTimeout.length>1){o.info("window.setTimeout hook新增劫持判断参数："+e);return}G.setTimeout=function(...t){let u=t[0].toString();if(u.match(e)){o.success("劫持setTimeout的函数",u);return}return Ye.setTimeout.apply(this,t)};},overRideLaunchAppBtn_Vue_openApp(){if(this.$isHook.overRideLaunchAppBtn_Vue_openApp)return;this.$isHook.overRideLaunchAppBtn_Vue_openApp=true;function e(t){typeof t.openApp!="function"||t.openApp.toString().includes("阻止唤醒App")||(t.openApp=function(...i){o.success("openApp：阻止唤醒App",i);});}p.mutationObserver(document,{config:{subtree:true,childList:true,attributes:true},callback(){document.querySelectorAll(".launch-app-btn").forEach(t=>{let u=x.getVue(t);u&&(e(u),u.$children&&u.$children.length&&u.$children.forEach(i=>{e(i);}));});}});},overRideBiliOpenApp(){this.$isHook.overRideBiliOpenApp||(this.$isHook.overRideBiliOpenApp=true,p.mutationObserver(document,{config:{subtree:true,childList:true,attributes:true},callback(){[...Array.from(ge("bili-open-app")),...Array.from(ge("m-open-app"))].forEach(e=>{if(e.hasAttribute("data-inject-opener-open"))return;let t=Reflect.get(e,"opener");if(t==null)return;typeof(t==null?undefined:t.open)=="function"&&(Reflect.set(t,"open",i=>{o.success(`拦截bili-open-app.open跳转: ${JSON.stringify(i)}`),typeof(i==null?undefined:i.universalLink)=="string"&&R.goToUrl(i.universalLink);}),e.setAttribute("data-inject-opener-open","true"));});}}));}},qu=`#app .m-head .m-recommend-view {\r
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
`;var zu=23442827791579n,Hu=1n<<51n,ot=58n,ju="FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf";function Gu(e){const t=["B","V","1","0","0","0","0","0","0","0","0","0"];let u=t.length-1,i=(Hu|BigInt(e))^zu;for(;i>0;)t[u]=ju[Number(i%BigInt(ot))],i=i/ot,u-=1;return [t[3],t[9]]=[t[9],t[3]],[t[4],t[7]]=[t[7],t[4]],t.join("")}const st=e=>(e.startsWith("http://")&&(e=e.replace(/^http/,"https")),e),Wu={$flag:{isInitCSS:false,isLoadingNextPage:false},$data:{intersectionObserver:null,loadNums:0},$ele:{$listView:null,$videoListBox:null,$videoList:null,$cardBox:null,$listViewShim:null},$cardGoto:{av:"av",picture:"picture"},init(){this.setCSS(),f.ready(()=>{this.addRecommendTag();});},setCSS(){this.$flag.isInitCSS||(this.$flag.isInitCSS=true,N(qu));},reset(){o.info("重置状态"),this.$flag.isLoadingNextPage=false,this.removeScrollEvent(),Object.keys(this.$ele).forEach(e=>{this.$ele[e]=null;});},addRecommendTag(){if(document.querySelector(".channel-menu a.recommend-tag"))return;let e=document.querySelector(".channel-menu .v-switcher");if(!e){o.error("添加推荐标签失败，原因：.channel-menu .v-switcher不存在"),B.error("添加推荐标签失败，原因：.channel-menu .v-switcher不存在");return}let t=f.createElement("a",{className:"v-switcher__header__tabs__item recommend-tag",innerHTML:"<span>推荐</span>"},{href:"javascript:;"}),u=f.createElement("div",{className:"m-recommend-view",innerHTML:`
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
            `});this.$ele.$listView=u.querySelector(".list-view"),this.$ele.$videoListBox=u.querySelector(".video-list-box"),this.$ele.$videoList=u.querySelector(".video-list"),this.$ele.$cardBox=u.querySelector(".card-box"),this.$ele.$listViewShim=u.querySelector(".list-view__shim"),this.$ele.$listViewShim.style.cssText="z-index:-1;user-select:none;pointer-events:none;background:transparent;left:0;bottom:0;width:100%;height:200px;";let i=document.querySelector("#app .m-head");i&&i.appendChild(u),f.on(t,"click",a=>{p.preventEvent(a),t.classList.add("is-avtive"),this.recommendClickEvent();}),f.on(e,"click",()=>{t.classList.remove("is-avtive");},{capture:true}),f.on(this.$ele.$cardBox,"click",".v-card",a=>{p.preventEvent(a);let r=a.target;window.open(r.href,"_blank");}),f.before(e,t),this.setScrollEvent(),window.location.hash==="#/recommend/"&&(o.info("当前hash为推荐视频，出动触发"),t.click());},async recommendClickEvent(){R.goToUrl("#/recommend/",true);},setScrollEvent(){o.success("推荐视频监听滚动: IntersectionObserver"),this.$data.intersectionObserver=new IntersectionObserver(async e=>{if(!this.$flag.isLoadingNextPage&&e[0].isIntersecting){this.$flag.isLoadingNextPage=true;let t=await this.scrollEvent();this.$flag.isLoadingNextPage=false,this.$data.loadNums<=1&&t?(f.hide(this.$ele.$listViewShim,false),await p.sleep(500),f.show(this.$ele.$listViewShim,false)):f.show(this.$ele.$listViewShim,false);}},{threshold:0,rootMargin:"0px 0px 0px 0px"}),this.$data.intersectionObserver.observe(this.$ele.$listViewShim);},removeScrollEvent(){var e;(e=this.$data.intersectionObserver)==null||e.disconnect(),this.$data.intersectionObserver=null;},async scrollEvent(){let e=await this.getRecommendVideoInfo();if(!e)return  false;o.success("获取推荐视频信息",e);let t=document.createDocumentFragment(),u=h.getValue("bili-head-recommend-push-graphic");return e.forEach(i=>{let a=null;if(i.goto===this.$cardGoto.av)a=this.getRecommendItemAVElement(i);else if(i.goto===this.$cardGoto.picture)if(u)a=this.getRecommendItemPictureElement(i);else return;else {o.error("该goto暂未适配",i);return}t.appendChild(a);}),this.$ele.$cardBox.appendChild(t),this.$data.loadNums++,true},async getRecommendVideoInfo(){var a;let e={appkey:ie.ios.appkey,access_key:((a=Ce.getAccessTokenInfo())==null?undefined:a.access_token)||""},u=await I.get("https://app.bilibili.com/x/v2/feed/index"+"?"+p.toSearchParamsStr(e),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(!u.status)return;let i=p.toJSON(u.data.responseText);if(!te.isWebApiSuccess(i)){B.error(i.message);return}return i.data.items},getRecommendItemPictureElement(e){let t=e.goto,u=e.param,i="/opus/"+u,a=e.args.up_name,r=e.title,n=st(e.cover),l=e.cover_left_text_1,s=f.createElement("a",{className:"v-card",href:i,innerHTML:`
                <div class="card">
                    <div class="bfs-img-wrap">
                        <div class="bfs-img b-img">
                            <picture class="b-img__inner">
                                <source type="image/webp" srcset="${n}">
                                <img src="${n}" alt="${r}">
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
                `},{"data-param":u,"data-title":r,"data-goto":t});return s["data-picture"]=e,s},getRecommendItemAVElement(e){var g;let t=e.goto,u=((g=e==null?undefined:e.player_args)==null?undefined:g.aid)||e.args.aid,a="/video/"+Gu(u),r=e.args.up_name,n=e.title,l=st(e.cover),s=e.cover_left_text_1,d=e.cover_left_text_2,c=e.cover_right_text,m=f.createElement("a",{className:"v-card",href:a,innerHTML:`
                <div class="card">
                    <div class="bfs-img-wrap">
                        <div class="bfs-img b-img">
                            <picture class="b-img__inner">
                                <source type="image/webp" srcset="${l}">
                                <img src="${l}" alt="${n}">
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
                        ${r}
                    </div>
                    <div class="gm-video-handle">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path fill="#2E2F30" d="M512 256a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z m0 341.333333a85.333333 85.333333 0 1 1 0-170.666666 85.333333 85.333333 0 0 1 0 170.666666z m0 341.333334a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z">
                            </path>
                        </svg>
                    </div>
                </div>
                `},{"data-aid":u,"data-title":n,"data-goto":t});return m["data-video"]=e,m}},Ju={$flag:{isInit_reconfigurationTinyAppSettingButton:false,isInit_beautifyTopNavBar_css:false},init(){h.execMenuOnce("bili-head-supplementaryVideoStreamingInformation",()=>{this.addVideoListUPInfo();}),h.execMenu("bili-head-recommend-enable",()=>{Wu.init();});},addVideoListUPInfo(){o.info("添加视频列表UP主信息"),N(`
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
        `),p.waitNode(y.className.head+" .video-list .card-box").then(()=>{let e=new p.LockFunction(()=>{document.querySelectorAll(y.className.head+" .video-list .card-box .v-card").forEach(t=>{var r,n,l,s,d;let u=x.getVue(t),i=((n=(r=u==null?undefined:u.info)==null?undefined:r.author)==null?undefined:n.name)||((s=(l=u==null?undefined:u.info)==null?undefined:l.owner)==null?undefined:s.name),a=(d=u==null?undefined:u.info)==null?undefined:d.duration;if(i&&!t.querySelector(".gm-up-info")){let c=document.createElement("div");c.innerHTML=`
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
                                    </div>`,c.className="gm-up-info",t.appendChild(c);}if(a){let c=t.querySelector(".count");if(c&&!c.querySelector(".gm-video-duration")){let m=typeof a=="string"?a:R.parseDuration(a),g=document.createElement("span");g.className="gm-video-duration",g.innerHTML=m,c.appendChild(g);}}});},25);p.mutationObserver(document.body,{config:{subtree:true,childList:true,attributes:true},callback(){e.run();}});});},async reconfigurationTinyAppSettingButton(){o.info("重构tinyApp右上角的设置按钮图标"),this.$flag.isInit_reconfigurationTinyAppSettingButton||(this.$flag.isInit_reconfigurationTinyAppSettingButton=true,N(`

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
			`));let e=await p.waitNode(".nav-bar .icon-config",1e4);if(!e){o.error("未找到设置按钮图标，无法重构");return}e.outerHTML=`
		<div class="gm-face">
			<div class="gm-face-avatar">
				<img src="http://i0.hdslb.com/bfs/face/member/noface.jpg">
			</div>
		</div>
		`;let t=false,u=null,i=document.querySelector(".gm-face"),a=i.querySelector("img");x.waitVuePropToSet("#app",[{check(r){var n,l,s,d;return typeof((d=(s=(l=(n=r==null?undefined:r.$store)==null?undefined:n.state)==null?undefined:l.common)==null?undefined:s.userInfo)==null?undefined:d.isLogin)=="boolean"},set(r){var l,s,d;let n=(d=(s=(l=r==null?undefined:r.$store)==null?undefined:l.state)==null?undefined:s.common)==null?undefined:d.userInfo;if(t=n==null?undefined:n.isLogin,t){if(u=n==null?undefined:n.mid,u==null){o.warn("当前是脚本设置的isLogin但其实未登录账号"),t=false;return}n==null||n.uname,a.src=(n==null?undefined:n.face)||a.src;}else o.warn("经检测，Bilibili尚未登录账号");}}]),f.on(i,"click",r=>{if(p.preventEvent(r),t)if(u!=null){let n=oe.getUserSpaceUrl(u);R.goToUrl(n,false);}else B.error("获取用户id失败");else R.goToLogin(window.location.href);});},beautifyTopNavBar(){o.info("美化顶部navbar"),this.$flag.isInit_beautifyTopNavBar_css||(this.$flag.isInit_beautifyTopNavBar_css=true,N(`
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
			`)),p.waitNode(".m-head .m-navbar .icon-search",1e4).then(async e=>{if(!e||e.parentElement.querySelector(".gm-input-area"))return;let t=f.createElement("div",{className:"gm-input-area",innerHTML:`
						<i class="iconfont ic_search_tab"></i>
						<input type="search" placeholder="" readonly="" disabled="">
					`}),u=t.querySelector("input");f.on(t,"click",a=>{p.preventEvent(a),R.goToUrl("/search",true);}),f.after(e,t);let i=await Ot.getSearchInputPlaceholder();i!=null&&(o.info("热点信息：",i),u.placeholder=i.show_name||i.name);});}},Yu={init(){this.removeAds(),h.onceExec("bili-pc-read-mobile-autoExpand",()=>this.autoExpand());},removeAds(){Ae.addBlockCSS("body>.h5-download-bar");},autoExpand(){return o.info("自动展开"),[N(`
			${Ze.className.read.mobile} .limit{
				overflow: unset !important;
				max-height: unset !important;
			}`),Ae.addBlockCSS(Ze.className.read.mobile+" .read-more")]}},Qu={init(){h.execMenuOnce("bili-space-repairRealJump",()=>{this.repairRealJump();}),h.execMenuOnce("bili-space-coverDynamicStateCardVideo",()=>{this.coverDynamicStateCardVideo();});},repairRealJump(){let e=new p.LockFunction(()=>{ge(y.className.space+" .wx-tag.open-app-wrapper").forEach(t=>{let u=x.getVue(t);typeof(u==null?undefined:u.disabled)=="boolean"&&(u.disabled=false);});});p.mutationObserver(document,{config:{subtree:true,childList:true},immediate:true,callback:()=>{e.run();}});},coverDynamicStateCardVideo(){o.info("覆盖动态视频的点击事件"),f.on(document,"click",".card-content .main .wings",e=>{var r,n;let u=e.target.closest(".card");if(!u){B.error("未找到对应的.card元素");return}let i=x.getVue(u);if(!i){B.error("未找到对应的vue实例");return}let a=(n=(r=i==null?undefined:i.shareData)==null?undefined:r.default)==null?undefined:n.url;if(!a){B.error("未找到对应的url");return}R.goToUrl(a);},{capture:true});}},Ku={init(){h.execMenu("bili-setLogin",()=>{this.setLogin();}),h.execMenu("bili-setIsClient",()=>{this.setIsClient();});},setLogin(){let e=new p.GM_Cookie,t=e.get("DedeUserID");t!=null?o.info("Cookie DedeUserID已存在：",t.value):e.set({name:"DedeUserID",value:"2333"},u=>{u?o.error(u):o.success("Cookie成功设置DedeUserID=>2333");}),x.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.noCallApp",check(u){var i,a,r;return typeof((r=(a=(i=u==null?undefined:u.$store)==null?undefined:i.state)==null?undefined:a.common)==null?undefined:r.noCallApp)=="boolean"},set(u){o.success("成功设置参数 $store.state.common.noCallApp=true"),u.$store.state.common.noCallApp=true;}},{msg:"设置参数 $store.state.common.userInfo.isLogin",check(u){var i,a,r,n;return typeof((n=(r=(a=(i=u==null?undefined:u.$store)==null?undefined:i.state)==null?undefined:a.common)==null?undefined:r.userInfo)==null?undefined:n.isLogin)=="boolean"},set(u){o.success("成功设置参数 $store.state.common.userInfo.isLogin=true"),u.$store.state.common.userInfo.isLogin=true;}},{msg:"设置参数 $store.state.loginInfo.isLogin",check(u){var i,a,r;return typeof((r=(a=(i=u==null?undefined:u.$store)==null?undefined:i.state)==null?undefined:a.loginInfo)==null?undefined:r.isLogin)=="boolean"},set(u){o.success("成功设置参数 $store.state.loginInfo.isLogin=true"),u.$store.state.loginInfo.isLogin=true;}}]);},setIsClient(){x.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.video.isClient",check(e){var t,u,i;return typeof typeof((i=(u=(t=e==null?undefined:e.$store)==null?undefined:t.state)==null?undefined:u.video)==null?undefined:i.isClient)=="boolean"},set(e){o.success("成功设置参数 $store.state.video.isClient=true"),e.$store.state.video.isClient=true;}},{msg:"设置参数 $store.state.opus.isClient=true",check(e){var t,u,i;return typeof((i=(u=(t=e==null?undefined:e.$store)==null?undefined:t.state)==null?undefined:u.opus)==null?undefined:i.isClient)=="boolean"},set(e){o.success("成功设置参数 $store.state.opus.isClient"),e.$store.state.opus.isClient=true;}},{msg:"设置参数 $store.state.playlist.isClient",check(e){var t,u,i;return typeof((i=(u=(t=e==null?undefined:e.$store)==null?undefined:t.state)==null?undefined:u.playlist)==null?undefined:i.isClient)=="boolean"},set(e){o.success("成功设置参数 $store.state.playlist.isClient=true"),e.$store.state.playlist.isClient=true;}},{msg:"设置参数 $store.state.ver.bili",check(e){var t,u,i;return typeof((i=(u=(t=e==null?undefined:e.$store)==null?undefined:t.state)==null?undefined:u.ver)==null?undefined:i.bili)=="boolean"},set(e){o.success("成功设置参数 $store.state.ver.bili=true"),e.$store.state.ver.bili=true;}},{msg:"设置参数 $store.state.ver.biliVer",check(e){var t,u,i;return typeof((i=(u=(t=e==null?undefined:e.$store)==null?undefined:t.state)==null?undefined:u.ver)==null?undefined:i.biliVer)=="number"},set(e){o.success("成功设置参数 $store.state.ver.biliVer=2333333"),e.$store.state.ver.biliVer=2333333;}}]);},setTinyApp(){x.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.tinyApp",check(e){var t,u,i;return typeof((i=(u=(t=e==null?undefined:e.$store)==null?undefined:t.state)==null?undefined:u.common)==null?undefined:i.tinyApp)=="boolean"},set(e){e.$store.state.common.tinyApp=true,o.success("成功设置参数 $store.state.common.tinyApp=true"),h.onceExec("bili-tinyApp-init-css",()=>{N(`
							.tiny-app .reply-input,.tiny-app .reply-item .info .name .right,.tiny-app .reply-item .info .toolbar,.tiny-app .sub-reply-input {
								display: block;
							}
						`);});}}]);}},ct={async space(e,t=""){let u=await I.get("https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/space",{data:{host_mid:e,offset:t},fetch:true});if(!u.status)return;let i=p.toJSON(u.data.responseText);if(te.isWebApiSuccess(i))return i.data},async following(e,t=1,u=50){let i=await I.get("https://api.bilibili.com/x/relation/followings",{data:{vmid:e,ps:u,pn:t},fetch:true});if(!i.status)return;let a=p.toJSON(i.data.responseText);return te.isWebApiSuccess(a)?a.data:a.message}},Zu={$data:{searchIcon:`
            <svg viewBox="0 0 24 24" fill="none">
                <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        `},init(){he.init(),N(`
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
        `),f.ready(()=>{let e=new p.LockFunction(async()=>{ge(".reply-item:not([data-is-inject-search-label])").forEach(t=>{t.setAttribute("data-is-inject-search-label","");let u=t.querySelector(".info .floor-time"),{$container:i,$compositionNameControl:a}=this.createSearchButton(()=>{let r=x.getVue(t);if(!r)throw new TypeError("获取vue属性失败");let n=r.info.mid;if(n==null)throw new TypeError("获取mid失败");return n});f.after(u,i);}),ge(".reply-item .member-link[data-url]:not([data-is-inject-search-label])").forEach(t=>{t.setAttribute("data-is-inject-search-label","");let{$container:u,$compositionNameControl:i}=this.createSearchButton(()=>{var n;let r=(n=t.getAttribute("data-url").match(/space.bilibili.com\/([\d]+)/i))==null?undefined:n[1];if(r==null)throw new TypeError("获取mid失败");return r});f.after(t,u);}),ge(".m-space-info .base:not([data-is-inject-search-label])").forEach(t=>{t.setAttribute("data-is-inject-search-label","");let u=t.closest(".m-space-info"),{$container:i}=this.createSearchButton(()=>{let a=x.getVue(u);if(!a)throw new TypeError("获取vue属性失败");let r=a.info.mid;if(r==null)throw new TypeError("获取mid失败");return r});f.after(t,i);});});p.mutationObserver(document,{config:{subtree:true,childList:true},immediate:true,callback:()=>{e.run();}});});},async queryUserInfo(e){let t=1,u=[];for(;;){o.info(`正在获取用户的关注：${e} ==> 第${t}页`);let l=await ct.following(e,t);if(!l){o.error("获取关注列表失败");break}if(typeof l=="string"){o.error("获取关注列表失败，原因："+l);break}if(!l.list.length||(u=u.concat(l.list),l.list.length===l.total&&t===1))break;t++,p.sleep(250);}let i="",a=1,r=[];for(;;){o.info(`正在获取用户的空间动态：${e} ==> 偏移：${i}`);let l=await ct.space(e,i);if(!l){o.error("获取用户空间动态数据失败");break}if(typeof l=="string"){o.error("获取用户空间动态数据失败，原因："+l);break}if(i===l.offset&&i!=""||(i=l.offset,r=r.concat(l.items),!l.has_more))break;if(a++,a>5){o.info("最多请求5页空间动态的数据");break}p.sleep(250);}let n={following:[],space:[]};return u.forEach(l=>{n.following.push({name:l.uname,mid:l.mid,sign:l.sign});}),r.forEach(l=>{var s,d,c,m,g,A,D,w,$,S,F,b,v,k,O;if(l.orig==null){let W={title:(d=(s=l.modules.module_dynamic.major)==null?undefined:s.archive)==null?undefined:d.title,desc:((m=(c=l.modules.module_dynamic.major)==null?undefined:c.archive)==null?undefined:m.desc)||((g=l.modules.module_dynamic.desc)==null?undefined:g.text),pub_ts:l.modules.module_author.pub_ts*1e3,id_str:l.id_str};n.space.push({contentInfo:W});}else {let W={title:null,desc:(A=l.modules.module_dynamic.desc)==null?undefined:A.text,pub_ts:l.modules.module_author.pub_ts*1e3,id_str:l.id_str},K={mid:l.orig.modules.module_author.mid,name:l.orig.modules.module_author.name,title:(($=(w=(D=l.orig.modules.module_dynamic)==null?undefined:D.major)==null?undefined:w.archive)==null?undefined:$.title)||null,desc:((S=l.orig.modules.module_dynamic.desc)==null?undefined:S.text)??((v=(b=(F=l.orig.modules.module_dynamic)==null?undefined:F.major)==null?undefined:b.archive)==null?undefined:v.desc),pub_ts:l.orig.modules.module_author.pub_ts*1e3,id_str:l.orig.id_str};typeof K.desc=="string"&&Array.isArray((O=(k=l.orig.modules.module_dynamic)==null?undefined:k.desc)==null?undefined:O.rich_text_nodes)&&l.orig.modules.module_dynamic.desc.rich_text_nodes.forEach(H=>{var L;H.type==="RICH_TEXT_NODE_TYPE_AT"&&(K.desc=(L=K.desc)==null?undefined:L.replace(H.text,""));}),n.space.push({contentInfo:W,forwardInfo:K});}}),n},createSearchButton(e){let t=f.createElement("div",{className:"composition-checkable",innerHTML:`
                <div class="composition-badge-control">
                    <span class="composition-name-control">
                        ${this.$data.searchIcon}
                    </span>
                </div>
            `}),u=t.querySelector(".composition-name-control");return f.on(t,"click",async i=>{if(p.preventEvent(i),t.hasAttribute("data-is-searching")){o.error("正在搜索中，请稍后再试");return}t.setAttribute("data-is-searching",""),f.html(u,"...");try{let a=e();this.clearLabel(t);let r=await this.queryUserInfo(a);this.handleShowLabel(a,r,t),f.html(u,this.$data.searchIcon);}catch(a){o.error(a),B.error(a.message,{timeout:3500}),f.html(u,"重试");}finally{t.removeAttribute("data-is-searching");}}),{$container:t,$compositionNameControl:u}},createLabel(e){let t=f.createElement("div",{className:"composition-checked",innerHTML:`
				<div class="composition-badge">
				</div>
			`}),u=t.querySelector(".composition-badge");if(e.rule.data.isShowDisplayName){let i=f.createElement("span",{className:"composition-name",innerHTML:e.rule.data.displayName});f.append(u,i);}if(e.rule.data.isShowDisplayIcon){let i=null;e.rule.data.displayIcon.startsWith("http")?i=f.createElement("img",{className:"composition-icon",src:e.rule.data.displayIcon},{referrer:"no-referrer",referrerPolicy:"no-referrer"}):i=f.createElement("span",{className:"composition-icon",innerHTML:e.rule.data.displayIcon}),f.append(u,i);}return f.on(u,"click",i=>{p.preventEvent(i),U.alert({title:{text:"识别信息",html:false,position:"center"},content:{text:`
						${e.matchedInfoList.map(a=>{let r=f.createElement("div",{className:"reason-container",innerHTML:`
										<div class="reason-text"><span>原因：</span>${a.reason}</div>
										<div class="reason-text"><span>匹配：</span>${typeof a.reasonLink=="string"?`
											<a href="${a.reasonLink}" target="_blank">${a.reasonText}</a>
										`:a.reasonText}</div>
									`});if(typeof a.reasonTime=="number"){let n=f.createElement("div",{className:"reason-text",innerHTML:`
										<span>时间：</span>${p.formatTime(a.reasonTime)}
										`});f.append(r,n);}return r.outerHTML}).join(`
`)}
					`,html:true},btn:{ok:{enable:false}},mask:{enable:true,clickEvent:{toClose:true}},width:be.setting.width,height:be.setting.height,style:`
					.reason-container{
						color: #7367F0;
						margin: 10px 10px;
					}
				`});}),t},clearLabel(e){var t;for(;;){let u=f.prev(e);if(!u)break;if((t=u==null?undefined:u.classList)!=null&&t.contains("composition-checked"))u.remove();else break}},handleShowLabel(e,t,u){if(he.$data.ruleData.length===0){B.warning("未配置规则，请在设置中进行添加");return}if(e=e.toString(),he.$data.whiteList.includes(e))return;let i=[],a=(r,n)=>{let l=i.find(s=>s.rule===r);l?l.matchedInfoList.push(n):i.push({rule:r,matchedInfoList:[n]});};he.$data.ruleData.forEach(r=>{if(Array.isArray(r.data.blacklist)&&r.data.blacklist.find(n=>n.toString()===e)){a(r,{reason:"黑名单用户",reasonText:e,reasonLink:oe.getUserSpaceUrl(e),reasonTime:null});return}if(Array.isArray(r.data.followings)){let n="关注列表",l="";r.data.followings.some(d=>{let c=t.following.some(m=>m.mid.toString()===d.toString());return c&&(l=d.toString()),c})&&a(r,{reason:n,reasonText:l,reasonLink:oe.getUserSpaceUrl(l),reasonTime:null});}Array.isArray(r.data.keywords)&&r.data.keywords.forEach(n=>{var l,s;for(let d=0;d<t.space.length;d++){const c=t.space[d];let m="",g=n,A=`/opus/${c.contentInfo.id_str}`,D=c.contentInfo.pub_ts;c.forwardInfo==null?typeof c.contentInfo.desc=="string"&&c.contentInfo.desc.match(n)?m="投稿视频简介":typeof c.contentInfo.title=="string"&&c.contentInfo.title.match(n)&&(m="投稿视频标题"):typeof c.contentInfo.desc=="string"&&c.contentInfo.desc.match(n)?m="空间动态转发":typeof((l=c.forwardInfo)==null?undefined:l.title)=="string"&&c.forwardInfo.title.match(n)?m="空间动态视频标题":typeof((s=c.forwardInfo)==null?undefined:s.desc)=="string"&&c.forwardInfo.desc.match(n)&&(m="空间动态视频简介"),m!==""&&a(r,{reason:m,reasonText:g,reasonLink:A,reasonTime:D});}});}),p.sortListByProperty(i,r=>r.matchedInfoList.length,true),i.forEach(r=>{let n=this.createLabel(r);f.before(u,n);});}},Xu={$flag:{isWatchVideoChange:false},$data:{art:null},init(){},updateArtPlayerVideoInfo(e,t){const u=this;x.waitVuePropToSet(y.className.playlist+" .playlist-player",{msg:"等待覆盖playlist播放器",check(i){return typeof(i==null?undefined:i.aid)=="number"&&typeof(i==null?undefined:i.cid)=="number"&&typeof(i==null?undefined:i.bvid)=="string"},async set(i){var D;(D=z(".playlist-player .player-container"))==null||D.remove();let a=z(y.className.playlist+" .playlist-player"),r=z(y.className.playlist),n=x.getVue(r),{aid:l,cid:s,bvid:d}=i,{title:c,cover:m}=n.video;o.info(`视频播放信息 => aid：${l} bvid：${d} cid：${s}`),e==null&&(e={aid:l,bvid:d,cid:s,pic:m,title:c});const g=await Lt(e);if(g==null)return;let A=z("#artplayer");if(!A){const w=f.createElement("div",{className:"artplayer-container",innerHTML:`
								<div id="artplayer"></div>
							`});A=w.querySelector("#artplayer"),f.append(a,w);}if(g.container=A,u.$data.art==null){let w=await fe.init(g);if(w)u.$data.art=w;else return;u.$data.art.volume=1,u.$data.art.once("ready",()=>{h.execMenu("bili-video-playerAutoPlayVideoFullScreen",async()=>{o.info("自动进入全屏"),u.$data.art.fullscreen=true,u.$data.art.once("fullscreenError",()=>{o.warn("未成功进入全屏，需要用户交互操作，使用网页全屏代替"),u.$data.art.fullscreenWeb=true;});});}),u.$data.art.on("video:ended",()=>{o.info("视频播放结束，自动下一集");let $=z(y.className.playlist+" .control-panel");if(!$){o.error("未找到播放列表，无法自动播放下一集");return}if(x.getVue($)==null){o.error("未找到播放列表的Vue实例，无法自动播放下一集");return}let{playMode:F,mediaList:b,videoIndex:v}=i.$store.state.playlist;if(v>=b.length-1)o.info("播放列表已播放完毕");else {let k=z(`.video-card[index="${v}"]`),O=x.getVue(k),W=O.p;if(W>=O.video.page){let K=z(`.video-card[index="${v+1}"]`);x.getVue(K).changeVideo(),o.info(`当前播放列表共：${b.length-1}个，即将播放下一个视频，第${v+2}个`);}else W++,O.changeVideo(W),o.info(`当前播放列表共：${b.length-1}个，即将播放第${v+2}-${W}`);}});}else await fe.update(u.$data.art,g);}}),x.waitVuePropToSet(y.className.playlist+" .playlist-player",{msg:"等待监听playlist播放列表改变",check(i){return typeof i.$watch=="function"},set(i){u.$flag.isWatchVideoChange||(u.$flag.isWatchVideoChange=true,i.$watch("cid",(a,r)=>{o.info("切换播放视频"),u.updateArtPlayerVideoInfo();}));}});}},ei={init(){this.coverVideoPlayer();},coverVideoPlayer(){document.querySelector("#artplayer")?o.warn("已存在播放器，更新播放信息"):N(`
			#app .playlist .playlist-player .player-container{
				display: none !important;
			}
			
			${He}
			
			${Ct}
			
			`),Xu.updateArtPlayerVideoInfo();}},Ut={init(){Ku.init(),h.execMenuOnce("bili-allowCopy",()=>N(`
				.v-drawer{
					-webkit-user-select: unset !important;
					-moz-user-select: unset !important;
					user-select: unset !important;
				}
			`)),h.onceExec("listenRouterChange",()=>{this.listenRouterChange();}),h.execMenuOnce("bili-hookSetTimeout_autoOpenApp",()=>{o.info("hook  window.setTimeout autoOpenApp"),ve.setTimeout("autoOpenApp"),ve.setTimeout("bilibili://"),ve.setTimeout("void 0 !== y && document[y]");}),h.execMenuOnce("bili-overrideLaunchAppBtn_Vue_openApp",()=>{o.info("覆盖元素.launch-app-btn上的openApp"),ve.overRideLaunchAppBtn_Vue_openApp();}),h.execMenuOnce("bili-cover-bili-open-app-open",()=>{o.info("覆盖元素bili-open-app上的opener.open"),ve.overRideBiliOpenApp();}),h.execMenuOnce("bili-head-beautify",()=>(o.info("添加美化CSS"),N(mu))),h.execMenuOnce("bili-componentDetection",()=>{Zu.init();}),P.isVideo()?(o.info("Router: 视频稿件"),wu.init()):P.isOpus()?(o.info("Router: 专栏稿件"),Uu.init()):au.isReadMobile()?(o.info("PC-Router: 专栏稿件"),Yu.init()):P.isDynamic()?(o.info("Router: 动态"),Iu.init()):P.isBangumi()?(o.info("Router: 番剧"),Vu.init()):P.isSearch()?(o.info("Router: 搜索"),Pu.init()):P.isLive()?(o.info("Router: 直播"),Mu.init()):P.isTopicDetail()?o.info("Router: 话题"):P.isHead()?(o.info("Router: 首页之类的"),Ju.init()):P.isSpace()?(o.info("Router: 个人空间"),Qu.init()):P.isPlayList()?(o.info("Router: 播放列表"),ei.init()):o.error("该Router暂未适配，可能是首页之类："+window.location.href),f.ready(()=>{});},listenRouterChange(){x.waitVuePropToSet("#app",{msg:"监听路由变化",check:e=>{var t;return typeof((t=e==null?undefined:e.$router)==null?undefined:t.afterEach)=="function"},set:e=>{o.success("成功设置监听路由变化"),e.$router.beforeHooks.splice(0,0,(t,u,i)=>{if(o.info("路由变化 => 更新前",{to:t,from:u}),t.hash==="#/seeCommentReply"||u.hash==="#/seeCommentReply"){o.info("该路由变化判定为#/seeCommentReply"),i();return}if(h.getValue("bili-repairVueRouter404")&&t.name==="space"){o.info("修复空间跳转404"),window.location.href=t.fullPath;return}if(t.fullPath.startsWith("/video")){if(u.fullPath.startsWith("/video")&&h.getValue("bili-video-forceThisPageToRefreshAndRedirect")){o.info("强制本页刷新"),window.location.href=t.fullPath;return}else if(P.isHead()&&h.getValue("bili-head-openVideoInNewTab")){o.info("当前是首页，新标签页打开"),window.open(t.fullPath,"_blank");return}}else if(t.fullPath.startsWith("/bangumi")){if(u.fullPath.startsWith("/bangumi")){o.info("番剧 => 番剧"),window.location.href=t.fullPath;return}else if(P.isHead()&&h.getValue("bili-head-openVideoInNewTab")){o.info("首页 => 番剧"),window.open(t.fullPath,"_blank");return}}i();}),e.$router.afterHooks.splice(0,0,(t,u)=>{if(o.info("路由变化 => 更新后",{to:t,from:u}),t.hash==="#/seeCommentReply"||u.hash==="#/seeCommentReply"){o.info("该路由变化判定为#/seeCommentReply，不重载");return}h.execMenu("bili-listenRouterChange",()=>{Ut.init();});});}});}};h.init();Ut.init();U.config.cssText.index+=`
/* bilibili颜色 #FB7299 */
.pops{
    --bili-color: #FB7299;
    --bili-color-rgb: 251, 114, 153;
}
`;U.config.cssText.panelCSS+=`

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