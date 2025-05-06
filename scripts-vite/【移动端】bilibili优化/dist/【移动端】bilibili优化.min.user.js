// ==UserScript==
// @name         【移动端】bilibili优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.5.6
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
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.6.5/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.5.3/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.0.3/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.3.1/dist/index.umd.js
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

(function (k, Pt, or, Jt, Fe, ie, _e, lr, Kt) {
	'use strict';

	var ir=Object.defineProperty;var ar=(t,e,r)=>e in t?ir(t,e,{enumerable:true,configurable:true,writable:true,value:r}):t[e]=r;var rt=(t,e,r)=>ar(t,typeof e!="symbol"?e+"":e,r);var ur=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,le=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,At=typeof GM_getValue<"u"?GM_getValue:void 0,Wt=typeof GM_info<"u"?GM_info:void 0,sr=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,Rt=typeof GM_setValue<"u"?GM_setValue:void 0,cr=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,pr=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,et=typeof unsafeWindow<"u"?unsafeWindow:void 0,$e=window;const dr={$data:{get enable(){return f.getValue("httpx-use-cookie-enable")},get useDocumentCookie(){return f.getValue("httpx-use-document-cookie")},cookieRule:[{key:"httpx-cookie-bilibili.com",hostname:/bilibili.com/g}]},fixCookieSplit(t){return d.isNotNull(t)&&!t.trim().endsWith(";")&&(t+=";"),t},concatCookie(t,e){return d.isNull(t)?e:(t=t.trim(),e=e.trim(),t=this.fixCookieSplit(t),e.startsWith(";")&&(e=e.substring(1)),t.concat(e))},handle(t){if(t.fetch||!this.$data.enable)return;let e="",r=t.url;r.startsWith("//")&&(r=window.location.protocol+r);let n=new URL(r);this.$data.useDocumentCookie&&n.hostname.endsWith(window.location.hostname.split(".").slice(-2).join("."))&&(e=this.concatCookie(e,document.cookie.trim()));for(let i=0;i<this.$data.cookieRule.length;i++){let a=this.$data.cookieRule[i];if(n.hostname.match(a.hostname)){let o=f.getValue(a.key);if(d.isNull(o))break;e=this.concatCookie(e,o);}}d.isNotNull(e)&&(t.headers&&t.headers.Cookie?t.headers.Cookie=this.concatCookie(t.headers.Cookie,e):t.headers.Cookie=e,u.info("Httpx => 设置cookie:",t)),t.headers&&t.headers.Cookie!=null&&d.isNull(t.headers.Cookie)&&delete t.headers.Cookie;}},mr="【移动端】bilibili优化",d=Pt.noConflict(),h=or.noConflict(),Z=Jt,ue=$e.QRCode||et.QRCode,u=new d.Log(Wt,et.console||$e.console);var ke;const se=((ke=Wt==null?void 0:Wt.script)==null?void 0:ke.name)||mr,Se=new d.GM_Cookie,Te=false;u.config({debug:Te,logMaxCount:1e3,autoClearConsole:true,tag:true});k.config(Object.defineProperties({html:true,autoClose:true,showClose:false},{position:{get(){return f.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return f.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return f.getValue("qmsg-config-showreverse",true)}},zIndex:{get(){let t=Pt.getMaxZIndex(),e=Jt.config.InstanceUtils.getPopsMaxZIndex().zIndex;return Pt.getMaxValue(t,e)+100}}}));const hr=new d.GM_Menu({GM_getValue:At,GM_setValue:Rt,GM_registerMenuCommand:sr,GM_unregisterMenuCommand:cr}),X=new d.Httpx(pr);X.interceptors.request.use(t=>(dr.handle(t),t));X.interceptors.response.use(void 0,t=>(u.error("拦截器-请求错误",t),t.type==="onabort"?k.warning("请求取消"):t.type==="onerror"?k.error("请求异常"):t.type==="ontimeout"?k.error("请求超时"):k.error("其它错误"),t));X.config({logDetails:Te});const ce={Object:{defineProperty:et.Object.defineProperty},Function:{apply:et.Function.prototype.apply,call:et.Function.prototype.call},Element:{appendChild:et.Element.prototype.appendChild},setTimeout:et.setTimeout},P=d.addStyle.bind(d),K=document.querySelector.bind(document),ht=document.querySelectorAll.bind(document);Jt.GlobalConfig.setGlobalConfig({mask:{enable:true,clickEvent:{toClose:true}},zIndex(){let t=Pt.getMaxZIndex(),e=Jt.config.InstanceUtils.getPopsMaxZIndex().zIndex;return Pt.getMaxValue(t,e)+100}});const _t="GM_Panel",fr="data-init",Dt="data-key",kt="data-default-value",gr="data-init-more-value",H="data-storage-api",w=function(t,e,r,n,i,a){let o={text:t,type:"switch",description:i,attributes:{},props:{},getValue(){return !!this.props[H].get(e,r)},callback(l,s){let p=!!s;u.success(`${p?"开启":"关闭"} ${t}`),this.props[H].set(e,p);},afterAddToUListCallBack:a};return Reflect.set(o.attributes,Dt,e),Reflect.set(o.attributes,kt,r),Reflect.set(o.props,H,{get(l,s){return f.getValue(l,s)},set(l,s){f.setValue(l,s);}}),o},Qt=function(t,e,r,n,i,a="",o){let l={text:t,type:"textarea",attributes:{},props:{},description:n,placeholder:a,disabled:o,getValue(){let s=this.props[H].get(e,r);return Array.isArray(s)?s.join(`
`):s},callback(s,p){this.props[H].set(e,p);}};return Reflect.set(l.attributes,Dt,e),Reflect.set(l.attributes,kt,r),Reflect.set(l.props,H,{get(s,p){return f.getValue(s,p)},set(s,p){f.setValue(s,p);}}),l},Ot=function(t,e,r,n,i,a){let o=[];typeof n=="function"?o=n():o=n;let l={text:t,type:"select",description:a,attributes:{},props:{},getValue(){return this.props[H].get(e,r)},callback(s,p,c){let m=p;u.info(`选择：${c}`),this.props[H].set(e,m),typeof i=="function"&&i(s,m,c);},data:o};return Reflect.set(l.attributes,Dt,e),Reflect.set(l.attributes,kt,r),Reflect.set(l.props,H,{get(s,p){return f.getValue(s,p)},set(s,p){f.setValue(s,p);}}),l},pt=function(t,e,r,n,i,a="",o,l){let s={text:t,type:"input",isNumber:!!o,isPassword:!!l,props:{},attributes:{},description:n,getValue(){return this.props[H].get(e,r)},callback(p,c){typeof i=="function"&&i(p,c)||this.props[H].set(e,c);},placeholder:a};return Reflect.set(s.attributes,Dt,e),Reflect.set(s.attributes,kt,r),Reflect.set(s.props,H,{get(p,c){return f.getValue(p,c)},set(p,c){f.setValue(p,c);}}),s},vt={ios:{appkey:"27eb53fc9058f8c3",appsec:"c2ed53a74eeefe3cf99fbd01d8c9c375",mobi_app:"ipnone"}};function pe(t,e,r){t.appkey=e;const n=new URLSearchParams(t);return n.sort(),Fe(n.toString()+r)}const dt={isWebApiSuccess(t){return (t==null?void 0:t.code)===0&&((t==null?void 0:t.message)==="0"||(t==null?void 0:t.message)==="success")},isAreaLimit(t){let e={6002003:"抱歉您所在地区不可观看！"},r=false;return Object.keys(e).forEach(n=>{let i=e[n];(t.code.toString()===n.toString()||t.message.includes(i))&&(r=true);}),r}},de={async getQrCodeInfo(){var o;let t="https://passport.bilibili.com/x/passport-tv-login/qrcode/auth_code",e={appkey:vt.ios.appkey,local_id:"0",ts:"0",mobi_app:vt.ios.mobi_app,csrf:((o=Se.get("bili_jct"))==null?void 0:o.value)||""},r=pe(e,vt.ios.appkey,vt.ios.appsec),n=await X.post(t,{data:d.toSearchParamsStr({...e,sign:r}),headers:{"Content-Type":"application/x-www-form-urlencoded"},responseType:"json",fetch:true});if(u.info(n),!n.status)return;let i=d.toJSON(n.data.responseText);if(i.code!==0){k.error(i.message);return}return i.data},async poll(t){let e="https://passport.bilibili.com/x/passport-tv-login/qrcode/poll",r={appkey:vt.ios.appkey,auth_code:t,local_id:"0",ts:"0"},n=pe(r,vt.ios.appkey,vt.ios.appsec),i=await X.post(e,{data:d.toSearchParamsStr({...r,sign:n}),headers:{"Content-Type":"application/x-www-form-urlencoded"},responseType:"json",fetch:true});if(!i.status)return {success:false,message:"网络错误",action:void 0};const a=d.toJSON(i.data.responseText);u.info(a);const o={0:"成功","-3":"API校验密匙错误","-400":"请求错误","-404":"啥都木有",86038:"二维码已失效",86039:"二维码尚未确认",86090:"二维码已扫码未确认"};if(!dt.isWebApiSuccess(a)){const p=a.code.toString(),c=a.message||o[p]||"未知错误";return p==="86038"?{success:false,message:c,action:"refresh"}:p==="86039"||p==="86090"?{success:false,message:c,action:"wait"}:{success:false,message:c,action:void 0}}const l=a.data.access_token,s=Date.now()+a.data.expires_in*1e3;return {success:true,message:"获取成功",accessKey:l,accessKeyExpireAt:s}}},Tt={async init(){k.info("正在申请二维码...");let t=await this.getQRCodeInfo();t&&this.confirmScanQrcode(t);},getQRCodeInfo:async function(){u.info("正在申请二维码...");let t=await de.getQrCodeInfo();return u.info("获取到二维码信息",t),t},async confirmScanQrcode(t){let e=Z.alert({title:{text:"请扫描二维码登录",position:"center",html:false,style:""},content:{text:'<div id="bili-qrcode-canvas"></div>',html:true},btn:{ok:{enable:false},close:{enable:true,callback(a){i=true,a.close();}}},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},only:true,width:"310px",height:"365px",drag:true,dragLimit:true,style:`
            #bili-qrcode-canvas{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
            }
            `}),r=e.$shadowRoot.querySelector("#bili-qrcode-canvas"),n=new ue(r,{text:t.url,width:300,height:300,colorDark:"#000000",colorLight:"#ffffff",correctLevel:ue.CorrectLevel.H}),i=false;for(;;){if(i){u.error("用户关闭扫码登录弹窗、取消扫码登录");break}u.info("正在等待扫码登录...");let a=await de.poll(t.auth_code);if(a!=null&&a.success){this.setAccessTokenInfo({access_token:a.accessKey,expireAt:a.accessKeyExpireAt}),u.info("扫码登录成功",a),k.success("扫码登录成功");break}else if((a==null?void 0:a.action)==="refresh"){u.info("刷新二维码"),k.info("刷新二维码");let o=await this.getQRCodeInfo();o&&(n.clear(),n.makeCode(o.url));}else if(a.action==="wait")a.message==="二维码已扫码未确认"&&(u.info("已扫码，等待确认..."),Z.loading({parent:r,content:{text:"已扫码，等待确认"},mask:{enable:true}}));else {u.error(a.message),k.error(a.message);break}await d.sleep(1500);}e.close();},generateExpireAt(t=6){return new Date().getTime()+1e3*60*60*24*30*t},setAccessTokenInfo(t){Rt("bili-accessTokenInfo",t);},getAccessTokenInfo(){let t=At("bili-accessTokenInfo");return t&&t.expireAt>Date.now()?t:null},getAccessToken(){var t;return ((t=this.getAccessTokenInfo())==null?void 0:t.access_token)||""}},Zt=function(t,e,r,n,i,a,o,l,s){return {text:t,type:"button",description:e,buttonIcon:n,buttonIsRightIcon:i,buttonIconIsLoading:a,buttonType:o,buttonText:r,callback(c){typeof l=="function"&&l(c);},afterAddToUListCallBack:s}},Lt={setting:{get width(){return window.innerWidth<550?"88vw":"550px"},get height(){return window.innerHeight<450?"70vh":"450px"}},info:{get width(){return "350px"},get height(){return "250px"}}};class br{constructor(e){rt(this,"option");this.option=e;}async showView(){var o;let e=Z.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist">
                            
                        </ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:true},btn:d.assign({ok:{callback:async()=>{await a();}}},this.option.btn||{},true),mask:{enable:true},style:`
                ${Z.config.cssText.panelCSS}
                
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

                ${((o=this.option)==null?void 0:o.style)??""}
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),r=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");let n=e.$shadowRoot.querySelector(".rule-form-ulist"),i=await this.option.getView(await this.option.data());n.appendChild(i);const a=async()=>{(await this.option.onsubmit(r,await this.option.data())).success&&(e.close(),await this.option.dialogCloseCallBack(true));};}}class vr{constructor(e){rt(this,"option");this.option=e;}showView(){let e=Z.alert({title:{text:this.option.title,position:"center"},content:{text:`
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
            `}),r=e.$shadowRoot.querySelector(".filter-container"),n=document.createDocumentFragment();this.option.filterOption.forEach(i=>{let a=document.createElement("button");a.innerText=i.name;let o=async()=>{(await this.option.getAllRuleInfo()).forEach(async s=>{await i.filterCallBack(s.data)?h.show(s.$el,false):h.hide(s.$el,false);}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),e.close();};h.on(a,"click",async l=>{d.preventEvent(l),!(typeof i.callback=="function"&&!await i.callback(l,o))&&await o();}),n.appendChild(a);}),r.appendChild(n);}}class yr{constructor(e){rt(this,"option");this.option=e;}async showView(e){var a,o,l,s,p,c,m,g,C;let r=Z.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:true},btn:{merge:true,reverse:false,position:"space-between",ok:{enable:((l=(o=(a=this.option)==null?void 0:a.bottomControls)==null?void 0:o.add)==null?void 0:l.enable)||true,type:"primary",text:"添加",callback:async B=>{this.showEditView(false,await this.option.getAddData(),r.$shadowRoot);}},close:{enable:true,callback(B){r.close();}},cancel:{enable:((c=(p=(s=this.option)==null?void 0:s.bottomControls)==null?void 0:p.filter)==null?void 0:c.enable)||false,type:"default",text:"过滤",callback:(B,_)=>{var $,v,A,N,U,Q,ot;typeof((A=(v=($=this.option)==null?void 0:$.bottomControls)==null?void 0:v.filter)==null?void 0:A.callback)=="function"&&this.option.bottomControls.filter.callback();let L=()=>Array.from(r.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),M=_.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");h.text(M).includes("取消")?(L().forEach(G=>{h.show(G,false);}),h.text(M,"过滤")):new vr({title:((U=(N=this.option.bottomControls)==null?void 0:N.filter)==null?void 0:U.title)??"过滤规则",filterOption:((ot=(Q=this.option.bottomControls)==null?void 0:Q.filter)==null?void 0:ot.option)||[],execFilterCallBack(){h.text(M,"取消过滤");},getAllRuleInfo:()=>L().map(I=>({data:this.parseRuleItemElement(I).data,$el:I}))}).showView();}},other:{enable:((C=(g=(m=this.option)==null?void 0:m.bottomControls)==null?void 0:g.clear)==null?void 0:C.enable)||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:B=>{let _=Z.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async L=>{var $,v,A;if(u.success("清空所有"),typeof((A=(v=($=this.option)==null?void 0:$.bottomControls)==null?void 0:v.clear)==null?void 0:A.callback)=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){k.error("清理失败");return}else k.success("清理成功");await this.updateDeleteAllBtnText(r.$shadowRoot),this.clearContent(r.$shadowRoot),_.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
            ${Z.config.cssText.panelCSS}
            
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
            `}),n=await this.option.data(),i=false;for(let B=0;B<n.length;B++){let _=n[B],L=await this.appendRuleItemElement(r.$shadowRoot,_);(typeof e=="function"?e(_):true)||(i=true,L.forEach($=>{h.hide($,false);}));}if(i){let B=r.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");h.text(B,"取消过滤");}}parseViewElement(e){let r=e.querySelector(".rule-view-container"),n=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:r,$deleteBtn:n}}parseRuleItemElement(e){let r=e.querySelector(".rule-controls-enable"),n=r.querySelector(".pops-panel-switch"),i=r.querySelector(".pops-panel-switch__input"),a=r.querySelector(".pops-panel-switch__core"),o=e.querySelector(".rule-controls-edit"),l=e.querySelector(".rule-controls-delete");return {$enable:r,$enableSwitch:n,$enableSwitchInput:i,$enableSwitchCore:a,$edit:o,$delete:l,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,r){let n=await this.option.getDataItemName(e),i=h.createElement("div",{className:"rule-item",innerHTML:`
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
					${Z.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${Z.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(i,"data-rule",e);let a="pops-panel-switch-is-checked";const{$enable:o,$enableSwitch:l,$enableSwitchCore:s,$enableSwitchInput:p,$delete:c,$edit:m}=this.parseRuleItemElement(i);return this.option.itemControls.enable.enable?(h.on(s,"click",async g=>{let C=false;l.classList.contains(a)?(l.classList.remove(a),C=false):(l.classList.add(a),C=true),p.checked=C,await this.option.itemControls.enable.callback(e,C);}),await this.option.itemControls.enable.getEnable(e)&&l.classList.add(a)):o.remove(),this.option.itemControls.edit.enable?h.on(m,"click",g=>{d.preventEvent(g),this.showEditView(true,e,r,i,C=>{e=null,e=C;});}):m.remove(),this.option.itemControls.delete.enable?h.on(c,"click",g=>{d.preventEvent(g);let C=Z.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async B=>{u.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(k.success("成功删除该数据"),i.remove(),await this.updateDeleteAllBtnText(r),C.close()):k.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):c.remove(),i}async appendRuleItemElement(e,r){let{$container:n}=this.parseViewElement(e),i=[],a=Array.isArray(r)?r:[r];for(let o=0;o<a.length;o++){let l=a[o],s=await this.createRuleItemElement(l,e);n.appendChild(s),i.push(s);}return await this.updateDeleteAllBtnText(e),i}async updateRuleContaienrElement(e){this.clearContent(e);const{$container:r}=this.parseViewElement(e);let n=await this.option.data();await this.appendRuleItemElement(e,n),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,r,n){let i=await this.createRuleItemElement(e,n);r.after(i),r.remove();}clearContent(e){const{$container:r}=this.parseViewElement(e);h.html(r,"");}setDeleteBtnText(e,r,n=false){const{$deleteBtn:i}=this.parseViewElement(e);n?h.html(i,r):h.text(i,r);}async updateDeleteAllBtnText(e){let r=await this.option.data();this.setDeleteBtnText(e,`清空所有(${r.length})`);}showEditView(e,r,n,i,a){let o=async s=>{if(!s){if(e||await this.option.deleteData(r),typeof a=="function"){let p=await this.option.getData(r);a(p);}}};new br({title:e?"编辑":"添加",data:()=>r,dialogCloseCallBack:o,getView:async s=>await this.option.itemControls.edit.getView(s,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async(s,p)=>{s.close(),await o(false);}},close:{callback:async(s,p)=>{s.close(),await o(false);}}},onsubmit:async(s,p)=>{let c=await this.option.itemControls.edit.onsubmit(s,e,p);return c.success?e?(k.success("修改成功"),n&&await this.updateRuleItemElement(c.data,i,n)):n&&await this.appendRuleItemElement(n,c.data):e&&k.error("修改失败"),c},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}}const wt={$data:{whiteList:[],ruleData:[]},$key:{STORAGE_KEY:"bili-componentDetection-rule"},init(){this.$data.whiteList=[],this.$data.ruleData=[],this.getData().forEach(e=>{e.enable&&this.$data.ruleData.push(e);});},showView(){let t=Z.config.panelHandleContentUtils();function e(n,i){return {get(a,o){return n[a]??o},set(a,o){n[a]=o;}}}new yr({title:"成分检测",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:n=>n.name,updateData:n=>this.updateData(n),deleteData:n=>this.deleteData(n),getData:n=>this.getData().find(o=>o.uuid===n.uuid)??n,itemControls:{enable:{enable:true,getEnable(n){return n.enable},callback:(n,i)=>{n.enable=i,this.updateData(n);}},edit:{enable:true,getView:(n,i)=>{let a=document.createDocumentFragment(),o=this.getTemplateData();i||(n=o);let l=w("启用","enable",o.enable);Reflect.set(l.props,H,e(n));let s=t.createSectionContainerItem_switch(l),p=pt("规则名称","name","",o.name,void 0,"必填");Reflect.set(p.props,H,e(n));let c=t.createSectionContainerItem_input(p),m=w("是否显示标签名称","isShowDisplayName",o.data.isShowDisplayName);Reflect.set(m.props,H,e(n.data));let g=t.createSectionContainerItem_switch(m),C=pt("标签名称","displayName",o.data.displayName,"例如：原神");Reflect.set(C.props,H,e(n.data));let B=t.createSectionContainerItem_input(C),_=w("是否显示标签图标","isShowDisplayIcon",o.data.isShowDisplayIcon);Reflect.set(_.props,H,e(n.data));let L=t.createSectionContainerItem_switch(_),M=pt("标签图标","displayIcon",o.data.displayIcon,"Url或base64");Reflect.set(M.props,H,e(n.data));let $=t.createSectionContainerItem_input(M),v=Qt("关键词","keywords","","用于匹配标题、简介、转发内容的关键词",void 0,"多个关键词换行");Reflect.set(v.props,H,{get(G,I){let q=n.data[G]??I;return typeof q=="string"?q.split(`
`):q},set(G,I){typeof I=="string"&&(I=I.split(`
`)),n.data[G]=I;}});let A=t.createSectionContainerItem_textarea(v),N=Qt("关注的用户","followings","","用户id",void 0,"多个用户id换行");Reflect.set(N.props,H,{get(G,I){let q=n.data[G]??I;return typeof q=="string"?q.split(`
`).map(y=>Number(y)).filter(y=>!isNaN(y)):q},set(G,I){typeof I=="string"&&(I=I.split(`
`).map(q=>Number(q)).filter(q=>!isNaN(q))),n.data[G]=I;}});let U=t.createSectionContainerItem_textarea(N),Q=Qt("黑名单","blacklist","","",void 0,"多个用户id换行");Reflect.set(Q.props,H,{get(G,I){let q=n.data[G]??I;return typeof q=="string"?q.split(`
`).map(y=>Number(y)).filter(y=>!isNaN(y)):q},set(G,I){typeof I=="string"&&(I=I.split(`
`).map(q=>Number(q)).filter(q=>!isNaN(q))),n.data[G]=I;}});let ot=t.createSectionContainerItem_textarea(Q);return a.append(s,c,g,B,L,$,A,U,ot),a},onsubmit:(n,i,a)=>{let o=n.querySelectorAll(".rule-form-ulist > li"),l=this.getTemplateData();i&&(l.uuid=a.uuid);try{return o.forEach(s=>{let p=Reflect.get(s,"__formConfig__"),c=Reflect.get(p,"attributes"),m=Reflect.get(s,H),g=Reflect.get(c,Dt),C=Reflect.get(c,kt),B=m.get(g,C);Reflect.has(l,g)?Reflect.set(l,g,B):Reflect.has(l.data,g)?Reflect.set(l.data,g,B):u.error(`${g}不在数据中`);}),l.name.trim()===""?(k.error("规则名称不能为空"),{success:!1,data:l}):i?{success:this.updateData(l),data:l}:{success:this.addData(l),data:l}}catch(s){return u.error(s),{success:false,data:l}}finally{this.init();}},style:`
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
                    `},delete:{enable:true,deleteCallBack:n=>this.deleteData(n)}}}).showView();},getTemplateData(){return {uuid:d.generateUUID(),enable:true,name:"",data:{isShowDisplayIcon:true,displayIcon:"",isShowDisplayName:true,displayName:"",keywords:[],blacklist:[],followings:[]}}},getData(){return At(this.$key.STORAGE_KEY,[])},setData(t){Rt(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(n=>n.uuid==t.uuid)===-1?(e.push(t),Rt(this.$key.STORAGE_KEY,e),true):false},updateData(t){let e=this.getData(),r=e.findIndex(i=>i.uuid==t.uuid),n=false;return r!==-1&&(n=true,e[r]=t),this.setData(e),n},deleteData(t){let e=this.getData(),r=e.findIndex(i=>i.uuid==t.uuid),n=false;return r!==-1&&(n=true,e.splice(r,1)),this.setData(e),n},clearData(){ur(this.$key.STORAGE_KEY);},exportRule(t="rule.json"){let e=this.getData(),r=new Blob([JSON.stringify(e,null,4)]),n=window.URL.createObjectURL(r),i=document.createElement("a");i.href=n,i.download=t,i.click(),setTimeout(()=>{window.URL.revokeObjectURL(n);},1500);},importRule(){let t=Z.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
                    <div class="import-mode" data-mode="local">本地导入</div>
                    <div class="import-mode" data-mode="network">网络导入</div>
                `,html:true},width:Lt.info.width,height:Lt.info.height,style:`
                .import-mode{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),e=t.$shadowRoot.querySelector(".import-mode[data-mode='local']"),r=t.$shadowRoot.querySelector(".import-mode[data-mode='network']");h.on(e,"click",n=>{d.preventEvent(n),t.close();let i=h.createElement("input",{type:"file",accept:".json"});h.on(i,["propertychange","input"],a=>{var s;if(!((s=i.files)!=null&&s.length))return;let o=i.files[0],l=new FileReader;l.onload=()=>{let p=d.toJSON(l.result);if(!Array.isArray(p)){u.error("不是正确的规则文件",p),k.error("不是正确的规则文件");return}this.setData(p),k.success(`成功导入 ${p.length}条规则`);},l.readAsText(o,"UTF-8");}),i.click();}),h.on(r,"click",n=>{d.preventEvent(n),t.close(),Z.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"url",focus:true},btn:{ok:{callback:async(i,a)=>{let o=i.text;if(d.isNull(o)){k.error("请填入完整的url");return}let l=await X.get(o);if(!l.status)return;let s=d.toJSON(l.data.responseText);if(!Array.isArray(s)){u.error("不是正确的规则文件",l,s),k.error("不是正确的规则文件");return}this.setData(s),i.close(),k.success(`成功导入 ${s.length}条规则`);}}},width:Lt.info.width,height:"auto"});});}},xr={id:"panel-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[w("监听路由-重载所有功能","bili-listenRouterChange",true,void 0,"用于处理页面跳转(本页)时功能不生效问题"),w("修复VueRouter跳转404问题","bili-repairVueRouter404",true,void 0,"例如：点击UP主正确进入空间"),w("新标签页打开","bili-go-to-url-blank",false,void 0,"通过开启【覆盖点击事件】相关的设置，通过新标签页打开链接"),w("允许复制","bili-allowCopy",true,void 0,"一般用于处理楼层的回复弹窗内无法选中复制问题")]}]},{text:"变量设置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[w("noCallApp","bili-noCallApp",true,void 0,"$store.state.common.noCallApp=true"),w("isLogin","bili-setLogin",true,void 0,["$store.state.common.userInfo.isLogin=true","$store.state.loginInfo.isLogin=true"].join("<br>")),w("isClient","bili-setIsClient",true,void 0,["$store.state.video.isClient=true","$store.state.opus.isClient=true","$store.state.playlist.isClient=true","$store.state.ver.bili=true","$store.state.ver.biliVer=2333"].join("<br>"))]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[w("覆盖.launch-app-btn openApp","bili-overrideLaunchAppBtn_Vue_openApp",true,void 0,"覆盖.launch-app-btn元素上的openApp函数，可阻止点击唤醒/下载App"),w("覆盖bili-open-app opener.open","bili-cover-bili-open-app-open",true,void 0,"覆盖bili-open-app/m-open-app元素上的opener.open函数，可阻止点击唤醒/下载App，如果存在有效链接，会自动跳转"),w("覆盖.wx-tag的handleClick","bili-cover-wx-tag-handleClick",true,void 0,"覆盖.wx-tag元素上的点击事件，让它直接打开视频"),w("劫持setTimeout-autoOpenApp","bili-hookSetTimeout_autoOpenApp",true,void 0,"阻止自动调用App")]}]},{type:"deepMenu",text:"成分检测",forms:[{type:"forms",text:"",forms:[w("启用","bili-componentDetection",true,void 0,"启用后可检测用户的成分信息"),Zt("自定义规则","检测用户成分的规则","管理",void 0,false,false,"primary",()=>{wt.showView();})]},{type:"forms",text:"",forms:[Zt("数据导入","导入自定义规则数据","导入",void 0,false,false,"primary",()=>{wt.importRule();}),Zt("数据导出","导出自定义规则数据","导出",void 0,false,false,"primary",()=>{wt.exportRule("成分检测.json");})]}]}]},{text:"",type:"forms",forms:[{text:"数据配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[pt("access_token","bili-head-recommend-access_token",Tt.getAccessToken(),"填入access_token，可用于获取推荐视频数据、番剧搜索、番剧播放等",(t,e,r)=>{Tt.setAccessTokenInfo({access_token:e,expireAt:Tt.generateExpireAt()});},void 0,false,true)]}]},{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[Ot("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(t,e,r)=>{u.info("设置当前Qmsg弹出位置"+r);},"Toast显示在页面九宫格的位置"),Ot("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),w("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},{text:"Cookie配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[w("启用","httpx-use-cookie-enable",false,void 0,"启用后，将根据下面的配置进行添加cookie"),w("使用document.cookie","httpx-use-document-cookie",false,void 0,"自动根据请求的域名来获取对应的cookie"),Qt("bilibili.com","httpx-cookie-bilibili.com","",void 0,void 0,"Cookie格式：xxx=xxxx;xxx=xxxx")]}]}]}]},W={isVideo(){return window.location.pathname.startsWith("/video/")},isBangumi(){return window.location.pathname.startsWith("/bangumi/")},isSearch(){return window.location.pathname.startsWith("/search")},isSearchResult(){let t=new URLSearchParams(window.location.search);return this.isSearch()&&t.has("keyword")},isLive(){return window.location.hostname==="live.bilibili.com"},isOpus(){return window.location.pathname.startsWith("/opus")},isTopicDetail(){return window.location.pathname.startsWith("/topic-detail")},isDynamic(){return window.location.pathname.startsWith("/dynamic")},isHead(){return window.location.pathname==="/"||window.location.pathname.startsWith("/channel")},isSpace(){return window.location.pathname.startsWith("/space")},isPlayList(){return window.location.pathname.startsWith("/playlist")}},Cr={isPC(){return window.location.hostname==="www.bilibili.com"},isReadMobile(){return this.isPC()&&window.location.pathname.startsWith("/read/mobile")}},It={web_host:"api.bilibili.com"},te={getBangumiProxyHost(){let t=[{name:"中国大陆",area:"",host:f.getValue("bili-bangumi-proxyApiServer-default","").trim()||It.web_host}];if(!f.getValue("bili-bangumi-unlockAreaLimit"))return t;let e=f.getValue("bili-bangumi-proxyApiServer-hk");d.isNotNull(e)&&t.push({name:"香港",area:"hk",host:e});let r=f.getValue("bili-bangumi-proxyApiServer-tw");d.isNotNull(r)&&t.push({name:"台湾",area:"tw",host:r});let n=f.getValue("bili-bangumi-proxyApiServer-tha-or-sea");return d.isNotNull(n)&&t.push({name:"泰国/东南亚",area:"th",host:n}),t},getSearchProxyHost(){let t=this.getBangumiProxyHost(),e=[],r=f.getValue("bili-search-proxyApiServer-hk");if(d.isNotNull(r))e.push({name:"香港",area:"hk",host:r});else {let a=t.find(o=>o.area==="hk");a&&e.push(a);}let n=f.getValue("bili-search-proxyApiServer-tw");if(d.isNotNull(n))e.push({name:"台湾",area:"tw",host:n});else {let a=t.find(o=>o.area==="tw");a&&e.push(a);}let i=f.getValue("bili-search-proxyApiServer-tha-or-sea");return d.isNotNull(i)?e.push({name:"泰国/东南亚",area:"th",host:i}):t.find(o=>o.area==="th")&&e.push,e},getBangumiProxySearchParam(t={}){return {from_client:"BROWSER",drm_tech_type:2,module:"bangumi",area:(t==null?void 0:t.area)||"",access_key:Tt.getAccessToken()}}},at={findBetterCDN(...t){let e=[];t.forEach(n=>{Array.isArray(n)?e=e.concat(n.filter(i=>typeof i=="string")):typeof n=="string"&&e.push(n);});let r=e.find(n=>{if(new URL(n).host.startsWith("upos"))return n});return r||e[0]},replaceBangumiVideoCDN(t){let e=f.getValue("bili-bangumi-uposServerSelect");return this.replaceVideoCDNHost(t,e)},replaceVideoCDN(t){let e=f.getValue("bili-video-uposServerSelect");return this.replaceVideoCDNHost(t,e)},replaceVideoCDNHost(t,e){try{let r=new URL(t),n=this.getUposCDNServerList().find(o=>o.host===e);if(d.isNull(n)||d.isNull(n.host))return t;let i=n.host,a=r.host;return a.includes("mirror")&&(u.info(`原Host为：${a}`),u.info(`替换CDN为：${JSON.stringify(n)}`),r.host=i),r.toString()}catch(r){return u.error("视频upos替换失败",r),u.error(r),t}},getUposCDNServerList(){return [{name:"不替换",host:""},{name:"ali（阿里云）",host:"upos-sz-mirrorali.bilivideo.com"},{name:"alib（阿里云）",host:"upos-sz-mirroralib.bilivideo.com"},{name:"alio1（阿里云）",host:"upos-sz-mirroralio1.bilivideo.com"},{name:"cos（腾讯云）",host:"upos-sz-mirrorcos.bilivideo.com"},{name:"cosb（腾讯云，VOD加速类型）",host:"upos-sz-mirrorcosb.bilivideo.com"},{name:"coso1（腾讯云）",host:"upos-sz-mirrorcoso1.bilivideo.com"},{name:"hw（华为云，融合CDN）",host:"upos-sz-mirrorhw.bilivideo.com"},{name:"hwb（华为云，融合CDN）",host:"upos-sz-mirrorhwb.bilivideo.com"},{name:"hwo1（华为云，融合CDN）",host:"upos-sz-mirrorhwo1.bilivideo.com"},{name:"08c（华为云，融合CDN）",host:"upos-sz-mirror08c.bilivideo.com"},{name:"08h（华为云，融合CDN）",host:"upos-sz-mirror08h.bilivideo.com"},{name:"08ct（华为云，融合CDN）",host:"upos-sz-mirror08ct.bilivideo.com"},{name:"tf_hw（华为云）",host:"upos-tf-all-hw.bilivideo.com"},{name:"tf_tx（腾讯云）",host:"upos-tf-all-tx.bilivideo.com"},{name:"akamai（Akamai海外）",host:"upos-hz-mirrorakam.akamaized.net"},{name:"aliov（阿里云海外）",host:"upos-sz-mirroraliov.bilivideo.com"},{name:"cosov（腾讯云海外）",host:"upos-sz-mirrorcosov.bilivideo.com"},{name:"hwov（华为云海外）",host:"upos-sz-mirrorhwov.bilivideo.com"},{name:"hk_bcache（Bilibili海外）",host:"cn-hk-eq-bcache-01.bilivideo.com"},{name:"alibstar1（阿里云海外-东南亚）",host:"upos-sz-mirroralibstar1.bilivideo.com"},{name:"cosbstar1（腾讯云海外-东南亚）",host:"upos-sz-mirrorcosbstar1.bilivideo.com"},{name:"hwbstar1（华为云海外-东南亚）",host:"upos-sz-mirrorhwbstar1.bilivideo.com"},{name:"akamai（Akamai海外-东南亚）",host:"upos-bstar1-mirrorakam.akamaized.net"}]}},Le=function(t,e,r,n,i,a,o,l,s){let p={text:t,type:"slider",description:l,attributes:{},props:{},getValue(){return this.props[H].get(e,r)},getToolTipContent(c){return typeof o=="function"?o(c):`${c}`},callback(c,m){this.props[H].set(e,m);},min:n,max:i,step:s};return Reflect.set(p.attributes,Dt,e),Reflect.set(p.attributes,kt,r),Reflect.set(p.props,H,{get(c,m){return f.getValue(c,m)},set(c,m){f.setValue(c,m);}}),p},wr={id:"panel-video",title:"视频",isDefault(){return W.isVideo()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[w("强制本页刷新跳转","bili-video-forceThisPageToRefreshAndRedirect",false,void 0,"用于处理内存泄露问题"),w("新增评论模块","bili-video-addCommentModule",true,void 0,"用于查看当前视频的评论"),w("新增简介模块","bili-video-addDescModule",true,void 0,"用于查看当前视频的播放量、简介、一键三连等信息")]}]},{text:"ArtPlayer播放器",type:"deepMenu",forms:[{text:"功能",type:"forms",forms:[w("启用","bili-video-enableArtPlayer",true,void 0,"使用artplayer代替页面的播放器"),Ot("播放的视频类型","bili-video-playType","mp4",[{text:"mp4",value:"mp4"},{text:"dash",value:"dash"}],void 0,"当选择dash时会有画质更高的选项"),w("自动播放视频","bili-video-playerAutoPlayVideo",false,void 0,""),w("自动进入全屏","bili-video-playerAutoPlayVideoFullScreen",false,void 0,"")]},{text:"控件设置",type:"forms",forms:[Le("controls左右边距","bili-video-artplayer-controlsPadding-left-right",0,0,50,void 0,t=>t+"px","可用于全屏横屏适配屏幕",1)]},{text:"插件",type:"forms",forms:[w("弹幕","artplayer-plugin-video-danmaku-enable",true,void 0,"哔哩哔哩 (゜-゜)つロ 干杯~"),w("Dash Audio Support","artplayer-plugin-video-m4sAudioSupport-enable",true,void 0,"视频类型为dash时，该插件可支持播放音频"),w("选集","artplayer-plugin-video-epChoose-enable",true,void 0,"当视频播放完毕后会自动连播"),w("CC字幕","artplayer-plugin-video-cc-subtitle-enable",true,void 0,"字幕支持插件，如果存在繁体字幕，则自动生成简体字幕"),w("顶部工具栏","artplayer-plugin-video-toptoolbar-enable",true,void 0,"显示视频标题和当前观看人数"),w("视频统计信息","artplayer-plugin-video-statistics-enable",true,void 0,"用于显示当前视频信息的弹窗")]},{text:"加速CDN设置",type:"forms",forms:[Ot("UPOS服务器设置","bili-video-uposServerSelect","",at.getUposCDNServerList().map(t=>({text:t.name,value:t.host})),void 0,"设置视频流的服务器，可加快视频加载速度"),w("作用于Audio上","bili-video-uposServerSelect-applyAudio",false,void 0,"把m4s类型的audio也进行upos替换")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[w("UP主信息","bili-video-cover-UpWrapper",true,void 0,"点击UP主头像/名称可跳转至UP主空间"),w("相关视频","bili-video-cover-bottomRecommendVideo",true,void 0,"点击下面的相关视频可正确跳转至该视频"),w("选集","bili-video-cover-seasonNew",true,void 0,"点击下面的选集列表内的视频可正确跳转至该视频")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[w("阻止调用App","bili-video-hook-callApp",true,void 0,"处理函数: PlayerAgent")]}]}]}]},Ar={id:"panel-bangumi",title:"番剧",isDefault(){return W.isBangumi()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[w("固定缩放倍率","bili-bangumi-initialScale",true,void 0,"")]}]},{text:"ArtPlayer播放器",type:"deepMenu",forms:[{text:"控件设置",type:"forms",forms:[Le("controls左右边距","bili-bangumi-artplayer-controlsPadding-left-right",0,0,50,void 0,t=>t+"px","可用于全屏横屏适配屏幕",1)]},{text:"插件",type:"forms",forms:[w("弹幕","artplayer-plugin-bangumi-danmaku-enable",true,void 0,"哔哩哔哩 (゜-゜)つロ 干杯~"),w("Dash Audio Support","artplayer-plugin-bangumi-m4sAudioSupport-enable",true,void 0,"视频类型为dash时，该插件可支持播放音频"),w("选集","artplayer-plugin-bangumi-epChoose-enable",true,void 0,"当视频播放完毕后会自动连播"),w("CC字幕","artplayer-plugin-bangumi-cc-subtitle-enable",true,void 0,"字幕支持插件，如果存在繁体字幕，则自动生成简体字幕"),w("顶部工具栏","artplayer-plugin-bangumi-toptoolbar-enable",true,void 0,"显示视频标题和当前观看人数"),w("空降助手","artplayer-plugin-bangumi-airborneHelper-enable",true,void 0,"如果获取到的信息中存在空降信息，如跳过片头片尾，那么会自动跳过"),w("视频统计信息","artplayer-plugin-bangumi-statistics-enable",true,void 0,"用于显示当前视频信息的弹窗")]},{text:"解除区域限制",type:"forms",forms:[w("解锁番剧限制","bili-bangumi-unlockAreaLimit",false,void 0,"使用户可以观看区域外版权番剧"),w("生成简中字幕","bili-bangumi-generateSimpleChineseSubtitle",true,void 0,"根据繁体字幕自动生成简体中文字幕")]},{text:"加速CDN设置",type:"forms",forms:[Ot("UPOS服务器设置","bili-bangumi-uposServerSelect","",at.getUposCDNServerList().map(t=>({text:t.name,value:t.host})),void 0,"设置解锁番剧的服务器，可加快视频加载速度"),w("作用于Audio上","bili-bangumi-uposServerSelect-applyAudio",false,void 0,"把m4s类型的audio也进行upos替换")]},{text:"<a href='https://github.com/yujincheng08/BiliRoaming/wiki/%E5%85%AC%E5%85%B1%E8%A7%A3%E6%9E%90%E6%9C%8D%E5%8A%A1%E5%99%A8' target='_blank'>解析服务器</a>",type:"forms",forms:[pt("中国大陆","bili-bangumi-proxyApiServer-default","","用于请求播放地址的代理",void 0,"bilibili优化.example.com"),pt("香港","bili-bangumi-proxyApiServer-hk","","用于请求播放地址的代理",void 0,"bilibili优化.example.com"),pt("台湾","bili-bangumi-proxyApiServer-tw","","用于请求播放地址的代理",void 0,"bilibili优化.example.com"),pt("泰国/东南亚","bili-bangumi-proxyApiServer-tha-or-sea","","用于请求播放地址的代理",void 0,"bilibili优化.example.com")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[w("【选集】","bili-bangumi-cover-clicl-event-chooseEp",true,void 0,"让【选集】的视频列表可点击跳转"),w("【其它】","bili-bangumi-cover-clicl-event-other",true,void 0,"让【PV&其他】、【预告】、【主题曲】、【香境剧场】等的视频列表可点击跳转"),w("【更多推荐】","bili-bangumi-cover-clicl-event-recommend",true,void 0,"让【更多推荐】的视频列表可点击跳转")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[w("阻止调用App","bili-bangumi-hook-callApp",true,void 0,"")]}]}]}]},Er={id:"panel-search",title:"搜索",isDefault(){return W.isSearch()},forms:[{type:"forms",text:"",forms:[{type:"deepMenu",text:"功能",forms:[{type:"forms",text:"",forms:[w("搜索框自动获取焦点","bili-search-inputAutoFocus",true,void 0,""),w("美化搜索结果","bili-search-beautifySearchResult",true,void 0,"重构搜索结果的样式"),w("开启其它地区番剧搜索","bili-search-enableOtherAreaSearchBangumi",false,void 0,"在搜索页面添加其它地区番剧搜索结果，需要解析服务器支持")]},{text:"<a href='https://github.com/yujincheng08/BiliRoaming/wiki/%E5%85%AC%E5%85%B1%E8%A7%A3%E6%9E%90%E6%9C%8D%E5%8A%A1%E5%99%A8' target='_blank'>搜索服务器</a>",type:"forms",forms:[pt("香港","bili-search-proxyApiServer-hk","","用于搜索番剧结果的代理",void 0,"bilibili优化.example.com"),pt("台湾","bili-search-proxyApiServer-tw","","用于搜索番剧结果的代理",void 0,"bilibili优化.example.com"),pt("泰国/东南亚","bili-search-proxyApiServer-tha-or-sea","","用于搜索番剧结果的代理",void 0,"bilibili优化.example.com")]}]},{type:"deepMenu",text:"覆盖点击事件",forms:[{type:"forms",text:"",forms:[w("取消","bili-search-cover-cancel",false,void 0,"点击取消按钮回退至上一页")]}]},{text:"变量设置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[w("noCallApp","bili-search-vue-prop-noCallApp",true,void 0,"noCallApp = true"),w("openAppDialog","bili-search-vue-prop-openAppDialog",true,void 0,"openAppDialog = false")]}]}]}]},Br={id:"panel-live",title:"直播",isDefault(){return W.isLive()},forms:[{text:"",type:"forms",forms:[{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[w("【屏蔽】聊天室","bili-live-block-chatRoom",false,void 0,"直接不显示底部的聊天室"),w("【屏蔽】xxx进入直播间","bili-live-block-brush-prompt",false,void 0,"直接不显示底部的xxx进入直播间"),w("【屏蔽】控制面板","bili-live-block-control-panel",false,void 0,"屏蔽底部的发个弹幕、送礼")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[w("阻止open-app-btn元素点击事件触发","bili-live-prevent-openAppBtn",true,void 0,"开启后可不跳转至唤醒App页面")]}]}]}]},Dr={id:"panel-opus",title:"专栏",isDefault(){return W.isOpus()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[w("自动展开阅读全文","bili-opus-automaticallyExpandToReadFullText",true,void 0,"屏蔽【展开阅读全文】按钮并自动处理全文高度")]}]},{text:"变量设置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[w("autoOpenApp","bili-opus-variable-autoOpenApp",true,void 0,"autoOpenApp函数置空"),w("go404","bili-opus-variable-go404",true,void 0,"go404函数置空，可禁止前往404页面"),w("handleFallback","bili-opus-variable-handleFallback",true,void 0,"禁止前往404页面")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[w("话题","bili-opus-cover-topicJump",true,void 0,"点击话题正确跳转"),w("header用户","bili-opus-cover-header",true,void 0,"点击内容上的发布本动态的用户正确跳转个人空间")]}]}]}]},kr={id:"panel-dynamic",title:"动态",isDefault(){return W.isDynamic()},forms:[{text:"",type:"forms",forms:[{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[w("话题","bili-dynamic-cover-topicJump",true,void 0,"点击话题正确跳转"),w("header用户","bili-dynamic-cover-header",true,void 0,"点击内容上的发布本动态的用户正确跳转个人空间"),w("@用户","bili-dynamic-cover-atJump",true,void 0,"点击@用户正确跳转个人空间"),w("引用","bili-dynamic-cover-referenceJump",true,void 0,"点击引用的视频|用户正确跳转")]}]}]}]},Fr={id:"panel-head",title:"首页",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[w("美化显示","bili-head-beautify",true,void 0,"调整瀑布流视频卡片样式类似哔哩哔哩App"),w("美化顶部NavBar","bili-beautifyTopNavBar",true,void 0,"类似哔哩哔哩App的样式"),w("补充推荐视频信息","bili-head-supplementaryVideoStreamingInformation",true,void 0,"给视频添加UP主名，当前视频总时长信息"),w("新标签页打开","bili-head-openVideoInNewTab",false,void 0,"包括视频、番剧")]}]},{text:"推荐视频",type:"deepMenu",forms:[{text:"",type:"forms",forms:[w("启用","bili-head-recommend-enable",true,void 0,"添加【推荐】标签，数据来源为App端(如果填入了access_token的话)"),w("显示【图文】","bili-head-recommend-push-graphic",true,void 0,"加载App端推送的【图文】卡片")]}]}]}]},T={getVue(t){if(t!=null)return t.__vue__||t.__Ivue__||t.__IVue__},getVue3(t){if(t!=null)return t.__vueParentComponent},waitVuePropToSet(t,e){if(!Array.isArray(e)){T.waitVuePropToSet(t,[e]);return}function r(){let n=null;return typeof t=="string"?n=document.querySelector(t):typeof t=="function"?n=t():t instanceof HTMLElement&&(n=t),n}e.forEach(n=>{typeof n.msg=="string"&&u.info(n.msg);function i(){let a=r();if(a==null)return  false;let o=T.getVue(a);return o==null?false:!!n.check(o)}d.waitVueByInterval(()=>r(),i,250,1e4).then(a=>{if(!a){typeof n.failWait=="function"&&n.failWait(true);return}let o=r(),l=T.getVue(o);if(l==null){typeof n.failWait=="function"&&n.failWait(false);return}n.set(l,o);});});},watchVuePropChange(t,e,r,n,i){let a=d.assign({immediate:true,deep:false},n||{});return new Promise(o=>{T.waitVuePropToSet(t,{check(l){return typeof(l==null?void 0:l.$watch)=="function"},set(l){let s=null;typeof e=="function"?s=l.$watch(()=>e(l),(p,c)=>{r(l,p,c);},a):s=l.$watch(e,(p,c)=>{r(l,p,c);},a),o(s);},failWait:i});})},goToUrl(t,e,r=false){if(t==null){k.error("跳转Url: $vueNode为空"),u.error("跳转Url: $vueNode为空："+e);return}let n=T.getVue(t);if(n==null){k.error("获取vue属性失败",{consoleLogContent:true});return}let i=n.$router,a=true;if(u.info("即将跳转URL："+e),r&&(a=false),a)window.open(e,"_blank");else {if(e.startsWith("http")||e.startsWith("//")){e.startsWith("//")&&(e=window.location.protocol+e);let o=new URL(e);if(o.origin===window.location.origin)e=o.pathname+o.search+o.hash;else {u.info("不同域名，直接本页打开，不用Router："+e),window.location.href=e;return}}u.info("$router push跳转Url："+e),i.push(e);}},hookGestureReturnByVueRouter(t){function e(){u.success("触发popstate事件"),n(true);}function r(){u.success("监听地址改变"),t.vueInstance.$router.history.push(t.hash),h.on(et,"popstate",e);}async function n(i=false){if(h.off(et,"popstate",e),!t.callback(i))for(;;)if(t.vueInstance.$router.history.current.hash===t.hash)u.info("后退！"),t.vueInstance.$router.back(),await d.sleep(250);else return}return r(),{resumeBack:n}}},z={goToUrl(t,e=false){let r=f.getValue("bili-go-to-url-blank");if(u.info("即将跳转URL："+t),e&&(r=false),r)window.open(t,"_blank");else {if(t.startsWith("http")||t.startsWith("//")){t.startsWith("//")&&(t=window.location.protocol+t);let o=new URL(t);if(o.origin===window.location.origin)t=o.pathname+o.search+o.hash;else {u.info("不同域名，直接本页打开，不用Router："+t),window.location.href=t;return}}u.info("$router push跳转Url："+t);let n=K("#app");if(n==null){if(!e){window.location.href=t;return}k.error("跳转Url: 获取根元素#app失败"),u.error("跳转Url: 获取根元素#app失败："+t);return}let i=T.getVue(n);if(i==null){if(!e){window.location.href=t;return}u.error("获取#app的vue属性失败"),k.error("获取#app的vue属性失败");return}i.$router.push(t);}},goToLogin(t=""){window.open(`https://passport.bilibili.com/h5-app/passport/login?gourl=${encodeURIComponent(t)}`);},parseDuration(t){if(typeof t!="number"&&(t=parseInt(t)),isNaN(t))return t.toString();function e(r){return r<10?`0${r}`:r}return t<60?`0:${e(t)}`:t>=60&&t<3600?`${Math.floor(t/60)}:${e(t%60)}`:`${Math.floor(t/3600)}:${e(Math.floor(t/60)%60)}:${e(t%60)}`},parseCount(t){let e=t.toString();if(t>1e4){let r=(t/1e4).toFixed(2).slice(0,-1);r.endsWith(".0")&&(r=r.slice(0,-2)),e=`${r}万`;}else if(t>1e4*1e4){let r=(t/1e8).toFixed(2).slice(0,-1);r.endsWith(".0")&&(r=r.slice(0,-2)),e=`${r}亿`;}return e},hookGestureReturnByVueRouter(t){function e(){u.success("触发popstate事件"),n(true);}function r(){u.success("监听地址改变"),t.vueObj.$router.history.push(t.hash),h.on(window,"popstate",e);}async function n(i=false){if(h.off(window,"popstate",e),!t.callback(i))for(;;)if(t.vueObj.$router.history.current.hash===t.hash)u.info("后退！"),t.vueObj.$router.back(),await d.sleep(250);else return}return r(),{resumeBack:n}},initialScale(){u.info("设置<meta>的viewport固定缩放倍率为1并移除页面原有的<meta>"),h.ready(()=>{let t=h.createElement("meta",{},{name:"viewport",content:"width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover"});h.remove("meta[name='viewport']"),d.waitNode("head").then(()=>{document.head.appendChild(t);});});}},_r={id:"panel-space",title:"个人空间",isDefault(){return W.isSpace()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[w("修复正确跳转","bili-space-repairRealJump",true,void 0,"修复视频|动态的正确跳转，避免跳转404")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[w("动态视频","bili-space-coverDynamicStateCardVideo",true,void 0,"点击发布动态的视频可正常跳转至该视频")]}]}]}]},f={$data:{__data:null,__oneSuccessExecMenu:null,__onceExec:null,__listenData:null,get data(){return f.$data.__data==null&&(f.$data.__data=new d.Dictionary),f.$data.__data},get oneSuccessExecMenu(){return f.$data.__oneSuccessExecMenu==null&&(f.$data.__oneSuccessExecMenu=new d.Dictionary),f.$data.__oneSuccessExecMenu},get onceExec(){return f.$data.__onceExec==null&&(f.$data.__onceExec=new d.Dictionary),f.$data.__onceExec},get scriptName(){return se},key:_t,attributeKeyName:Dt,attributeDefaultValueName:kt},$listener:{get listenData(){return f.$data.__listenData==null&&(f.$data.__listenData=new d.Dictionary),f.$data.__listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},isTopWindow(){return et.top===et.self},initExtensionsMenu(){this.isTopWindow()&&hr.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{this.showPanel();}},{key:"go_to_login",text:"🛠 前往登录",autoReload:false,isStoreValue:false,showText(t){return t},callback(){z.goToLogin();}},{key:"go_to_login_to_parse_access_key",text:"🛠 扫码并解析access_key",autoReload:false,isStoreValue:false,showText(t){return t},callback(){Tt.init();}}]);},initPanelDefaultValue(){let t=this;function e(i){if(!i.attributes)return;let a={},o=i.attributes[Dt];o!=null&&(a[o]=i.attributes[kt]);let l=i.attributes[fr];if(typeof l=="function"){let c=l();if(typeof c=="boolean"&&!c)return}let s=i.attributes[gr];s&&typeof s=="object"&&Object.assign(a,s);let p=Object.keys(a);if(!p.length){u.warn("请先配置键",i);return}p.forEach(c=>{let m=a[c];t.$data.data.has(c)&&u.warn("请检查该key(已存在): "+c),t.$data.data.set(c,m);});}function r(i){for(let a=0;a<i.length;a++){let o=i[a];e(o);let l=o.forms;l&&Array.isArray(l)&&r(l);}}let n=this.getPanelContentConfig();for(let i=0;i<n.length;i++){let a=n[i];if(!a.forms)continue;let o=a.forms;o&&Array.isArray(o)&&r(o);}},setValue(t,e){let r=At(_t,{}),n=r[t];r[t]=e,Rt(_t,r),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,n,e);},getValue(t,e){let n=At(_t,{})[t];return n??(this.$data.data.has(t)?this.$data.data.get(t):e)},deleteValue(t){let e=At(_t,{}),r=e[t];Reflect.deleteProperty(e,t),Rt(_t,e),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,r,void 0);},addValueChangeListener(t,e){let r=Math.random();return this.$listener.listenData.set(t,{id:r,key:t,callback:e}),r},removeValueChangeListener(t){let e=null;for(const[r,n]of this.$listener.listenData.entries())if(n.id===t){e=r;break}this.$listener.listenData.delete(e);},triggerMenuValueChange(t,e,r){if(this.$listener.listenData.has(t)){let n=this.$listener.listenData.get(t);if(typeof n.callback=="function"){let i=this.getValue(t),a=i,o=i;typeof e<"u"&&arguments.length>1&&(a=e),typeof r<"u"&&arguments.length>2&&(o=r),n.callback(t,o,a);}}},hasKey(t){let e=At(_t,{});return t in e},execMenu(t,e,r=false,n){if(!(typeof t=="string"||typeof t=="object"&&Array.isArray(t)))throw new TypeError("key 必须是字符串或者字符串数组");let i=[];typeof t=="object"&&Array.isArray(t)?i=[...t]:i.push(t);let a;for(let o=0;o<i.length;o++){const l=i[o];if(!this.$data.data.has(l)){u.warn(`${t} 键不存在`);return}let s=f.getValue(l);if(r&&(s=!s),typeof n=="function"){let p=n(l,s);typeof p=="boolean"&&(s=p);}if(!s)break;a=s;}a&&e(a);},execMenuOnce(t,e,r,n,i){if(typeof t!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(t)){u.warn(`${t} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(t))return;this.$data.oneSuccessExecMenu.set(t,1);let a=()=>{let m=f.getValue(t);return typeof r=="function"?r(t,m):m},o=[],l=m=>{let g=a(),C=[];if(m instanceof HTMLStyleElement?C=[m]:Array.isArray(m)&&(C=[...m.filter(B=>B!=null&&B instanceof HTMLStyleElement)]),g)o=o.concat(C);else for(let B=0;B<C.length;B++)C[B].remove(),C.splice(B,1),B--;},s=m=>typeof i=="function"?i(t,m):m,p=m=>{let g=[];if(s(m)){let C=e(m,l);C instanceof HTMLStyleElement?g=[C]:Array.isArray(C)&&(g=[...C.filter(B=>B!=null&&B instanceof HTMLStyleElement)]);}for(let C=0;C<o.length;C++)o[C].remove(),o.splice(C,1),C--;o=[...g];};this.addValueChangeListener(t,(m,g,C)=>{let B=C;typeof n=="function"&&(B=n(m,C,g)),p(B);});let c=a();c&&p(c);},execInheritMenuOnce(t,e,r,n){let i=this;const a=(o,l)=>{let s=i.getValue(o),p=i.getValue(l);if(typeof n=="function"){let c=n(s,p);if(c!=null)return c}return s};this.execMenuOnce(t,r,()=>a(t,e),()=>a(t,e)),this.execMenuOnce(e,()=>{},()=>false,()=>(this.triggerMenuValueChange(t),false));},onceExec(t,e){if(typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(t)||(e(),this.$data.onceExec.set(t,1));},showPanel(){Z.panel({title:{text:`${se}-设置`,position:"center",html:false,style:""},content:this.getPanelContentConfig(),mask:{enable:true,clickEvent:{toClose:true,toHide:false}},width:Lt.setting.width,height:Lt.setting.height,drag:true,only:true});},getPanelContentConfig(){return [xr,Fr,wr,Dr,kr,Ar,Er,_r,Br]}},$r=`@charset "UTF-8";\r
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
`,Et={getUserSpaceUrl(t){return `https://m.bilibili.com/space/${t}`},getUserSpaceDynamicUrl(t){return `https://m.bilibili.com/dynamic/${t}`},getUserSpaceOpusUrl(t){return `https://m.bilibili.com/opus/${t}`},getVideoUrl(t){return `https://m.bilibili.com/video/${t}`}},x={className:{bangumi:"#app.main-container",bangumi_new:"body > #__next",dynamic:"#app .m-dynamic",opus:"#app .m-opus",video:"#app .video",mVideo:"#app .m-video",head:"#app .m-head",playlist:"#app .playlist",space:"#app .m-space"},theme:"#FB7299"},me={className:{read:{mobile:"#app .read-app-main"}}},Me=`.artplayer-container {\r
	position: absolute;\r
	width: 100%;\r
	height: 100%;\r
	top: 0;\r
	left: 0;\r
	overflow: hidden;\r
}`,ae=`/* 设置播放器基础宽高 */\r
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
`,Xt={mergeAidOrBvidSearchParamsData(t,e){if("aid"in e&&e.aid!=null)Reflect.set(t,"aid",e.aid);else if("bvid"in e&&e.bvid!=null)Reflect.set(t,"bvid",e.bvid);else throw new TypeError("avid or bvid must give one")}},ee={"240P 极速":6,"360P 流畅":16,"480P 清晰":32,"720P 高清":64,"720P60 高帧率":74,"1080P 高清":80,"1080P+ 高码率":112,"1080P60 高帧率":116,"4K 超清":120,"HDR 真彩色":125,杜比视界:126,"8K 超高清":127},Sr={};Object.keys(ee).forEach(t=>{let e=Reflect.get(ee,t);Reflect.set(Sr,e,t);});const re={async playUrl(t,e){let r={cid:t.cid,qn:t.qn??ee["1080P60 高帧率"],high_quality:t.high_quality??1,fnval:t.fnval??1,fnver:t.fnver??0,fourk:t.fourk??1};t.setPlatformHTML5&&Reflect.set(r,"platform","html5"),Xt.mergeAidOrBvidSearchParamsData(r,t),typeof e=="object"&&Object.assign(r,e);let n=await X.get("https://api.bilibili.com/x/player/playurl?"+d.toSearchParamsStr(r),{responseType:"json",fetch:true});if(!n.status)return;let i=d.toJSON(n.data.responseText);if(i.code===0)return i.data},async onlineTotal(t){let e={cid:t.cid};Xt.mergeAidOrBvidSearchParamsData(e,t);let r=await X.get(`https://${It.web_host}/x/player/online/total?${d.toSearchParamsStr(e)}`,{responseType:"json",fetch:true});if(!r.status)return;let n=d.toJSON(r.data.responseText);return dt.isWebApiSuccess(n)||u.error(`获取在线观看人数失败: ${JSON.stringify(n)}`),n.data},async like(t){var a;let e={like:t.like,csrf:((a=Se.get("bili_jct"))==null?void 0:a.value)||""};Xt.mergeAidOrBvidSearchParamsData(e,t);let r=await X.get("https://api.bilibili.com/x/web-interface/archive/like?"+d.toSearchParamsStr(e),{fetch:true});if(!r.status)return  false;let n=d.toJSON(r.data.responseText);const i=n.code;return i===0?true:(i===-101?k.error("账号未登录"):i===-111?k.error("csrf校验失败"):i===-400?k.error("请求错误"):i===-403?k.error("账号异常"):i===10003?k.error("不存在该稿件"):i===65004?k.error("取消点赞失败"):i===65006?k.warning("重复点赞"):k.error("未知错误："+n.message),false)}},Re={30216:"64K",30232:"132K",30280:"192K",30250:"杜比全景声",30251:"Hi-Res无损"};class Ne{constructor(e){rt(this,"$data",{KEY:"art-player-danmaku-option",localArtDanmakuOption:{}});this.$data.KEY=e;const r=this.getDefaultDanmakuOption();this.$data.localArtDanmakuOption=d.assign(r,At(this.$data.KEY,{}));}getDefaultDanmakuOption(){return {speed:5,margin:[10,"75%"],opacity:1,modes:[0,1,2],fontSize:18,antiOverlap:false,synchronousPlayback:true,visible:true}}getLocalArtDanmakuOption(){return this.$data.localArtDanmakuOption}onConfigChange(e){e.on("artplayerPluginDanmuku:config",r=>{Object.keys(this.$data.localArtDanmakuOption).forEach(n=>{if(Reflect.has(r,n)){let i=Reflect.get(r,n);Reflect.set(this.$data.localArtDanmakuOption,n,i);}}),Rt(this.$data.KEY,this.$data.localArtDanmakuOption);});}}const yt="[artplayer-plugin-m4sAudioSupport]：",jt="setting-bilibili-m4sAudio",nt={$flag:{isIntervaling:false},intervalHandler(t,e=2,r=900){if(nt.$flag.isIntervaling)return;nt.$flag.isIntervaling=true;let n=0,i,a=()=>{if(n>e){nt.$flag.isIntervaling=false,clearInterval(i);return}if(typeof t=="function")try{t();}catch(o){console.error(yt,o);}n++;};a(),e>1?i=setInterval(a,r):nt.$flag.isIntervaling=false;}},b={$key:{plugin_KEY:"plugin-bilibili-m4sAudio"},$data:{art:null,audio:new Audio,latestSyncTime:0,reconnectConfig:{maxCount:5,delayTime:1e3},reconnectInfo:{url:"",count:0},option:null},userEvent:{onRestart:void 0},events:{play:()=>{b.handler.play(),b.handler.syncVolume(),b.handler.syncMuted(),nt.intervalHandler(()=>{b.handler.syncTime();},1);},seek:t=>{nt.intervalHandler(()=>{b.handler.syncTime(),b.handler.syncPlayState();});},pause:()=>{nt.intervalHandler(()=>{b.handler.syncTime();},1),b.handler.pause();},restart:t=>{if(typeof b.userEvent.onRestart=="function"){let e=b.userEvent.onRestart(t);b.handler.playUrl(e);}nt.intervalHandler(()=>{b.handler.syncTime();},1),b.handler.syncPlayState();},muted:t=>{b.handler.syncVolume(),b.handler.syncMuted();},destroy:()=>{b.handler.pause();},error:(t,e)=>{b.handler.pause();},resize:()=>{nt.intervalHandler(()=>{b.handler.syncTime();});},fullscreen:()=>{nt.intervalHandler(()=>{b.handler.syncTime();});},"video:ended":()=>{b.handler.pause();},"video:ratechange":()=>{b.handler.syncPlayBackRate();},"video:waiting":()=>{b.handler.pause();},"video:playing":()=>{nt.intervalHandler(()=>{b.handler.syncTime();},1),b.handler.play();},"video:pause":()=>{b.handler.pause(),nt.intervalHandler(()=>{b.handler.syncTime();},1);},"video:volumechange":()=>{b.handler.syncVolume(),b.handler.syncMuted(),b.handler.syncPlayState();},"video:timeupdate":()=>{let t=b.$data.art.currentTime;Math.abs(t-b.$data.latestSyncTime)>=3&&(b.$data.latestSyncTime=t,nt.intervalHandler(()=>{b.handler.syncTime(.777);},1));}},audioEvents:{loadedmetadata:t=>{b.$data.art.emit("m4sAudio:loadedmetadata",t),console.log(yt+"Audio预加载完成"),b.$data.reconnectInfo.count=0,b.$data.reconnectInfo.url="",b.$data.latestSyncTime=0,b.handler.syncPlayState(),b.handler.syncPlayBackRate(),b.handler.syncVolume(),b.handler.syncMuted(),nt.intervalHandler(()=>{b.handler.syncTime();});},canplaythrough:t=>{b.$data.art.emit("m4sAudio:canplaythrough",t),console.log(yt+"浏览器估计该音频可以在不停止内容缓冲的情况下播放媒体直到结束"),nt.intervalHandler(()=>{b.handler.syncTime();});},error:t=>{b.$data.art.emit("m4sAudio:error",t),console.error(yt+"Audio加载失败",t),d.isNull(b.$data.reconnectInfo.url)&&(b.$data.reconnectInfo.url=b.$data.audio.src),b.$data.reconnectInfo.count<b.$data.reconnectConfig.maxCount?(console.log(yt+`Audio第${b.$data.reconnectInfo.count+1}次尝试重新连接`),b.$data.art.notice.show=`Audio第${b.$data.reconnectInfo.count+1}次尝试重新连接`,b.$data.reconnectInfo.count++,setTimeout(()=>{b.handler.playUrl(""),b.handler.playUrl(b.$data.reconnectInfo.url),b.$data.audio.load();},b.$data.reconnectConfig.delayTime)):(console.error(yt+"Audio已超出重连次数"),b.$data.art.notice.show="Audio已超出重连次数，请尝试切换源");}},handler:{playUrl(t){typeof t=="string"&&(b.$data.audio.src=t,b.unbindAudio(),d.isNotNull(t)&&b.bindAudio(),b.$data.art.emit("m4sAudio:restart",t),b.handler.syncTime(),b.handler.syncPlayState());},play(){b.$data.audio.paused&&(b.$data.audio.play(),b.$data.art.emit("m4sAudio:play"));},pause(){b.$data.audio.paused||(b.$data.audio.pause(),b.$data.art.emit("m4sAudio:pause"));},syncPlayState(){b.$data.art.playing?this.play():this.pause(),b.$data.art.emit("m4sAudio:syncPlayState");},syncTime(t=.1){let e=b.$data.art.currentTime,r=b.$data.audio.currentTime;Math.abs(e-r)>=Math.abs(t)&&(b.$data.audio.currentTime=e,this.syncVolume(),this.syncMuted(),b.$data.art.emit("m4sAudio:syncTime"));},syncVolume(){b.$data.audio.volume=b.$data.art.volume,b.$data.art.emit("m4sAudio:syncVolume");},syncMuted(){let t=b.$data.art.muted;b.$data.audio.muted=t,b.$data.art.emit("m4sAudio:syncMuted");},syncPlayBackRate(){let t=b.$data.art.playbackRate,e=b.$data.audio.playbackRate;t!==e&&(b.$data.audio.playbackRate=t,b.$data.art.emit("m4sAudio:syncPlayBackRate"));}},update(t){var r;this.unbind(),this.unbindAudio(),this.$data.option=null,this.$data.option=t.audioList,this.$data.latestSyncTime=0;const e=this;if((r=t.audioList)!=null&&r.length){t.audioList.sort((c,m)=>m.bandwidth-c.bandwidth);let n=t.audioList[0];const i=`artplayer-m4s-audio-${t.from}`,a=this.$data.art.storage.get(i);let o={index:0,html:n.soundQualityCodeText,url:n.url};if(a){const c=t.audioList.findIndex(m=>m.soundQualityCode===a.soundQualityCode);if(c!==-1){const m=t.audioList[c];o.index=c,o.url=m.url,o.html=m.soundQualityCodeText;}else console.warn(yt+"没有找到上次选的音频代码，使用当前默认第一个音频");}let l=t.audioList.map((c,m)=>({default:m===o.index,html:c.soundQualityCodeText,url:c.url,soundQualityCode:c.soundQualityCode,soundQualityCodeText:c.soundQualityCodeText,codecs:c.codecs,mimeType:c.mimeType,bandwidth:c.bandwidth,size:c.size}));const s={name:jt,width:200,html:"音频",tooltip:o.html,icon:`
				<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
					<path d="M123.5 438.5h131.3v310.7H123.5zM769.2 438.5h131.3v310.7H769.2z"></path>
					<path d="M859.8 398.8h-48.3c-7.9 0-15.4 1.6-22.5 3.9v-32.4c0-125.2-101.9-227.1-227.1-227.1h-99.7c-125.2 0-227.1 101.9-227.1 227.1v32.4c-7.1-2.3-14.6-3.9-22.5-3.9h-48.3c-40.9 0-74.2 33.3-74.2 74.2v243c0 40.9 33.3 74.2 74.2 74.2h48.3c40.9 0 74.2-33.3 74.2-74.2V370.3c0-96.7 78.7-175.4 175.4-175.4h99.7c96.7 0 175.4 78.7 175.4 175.4V716c0 40.9 33.3 74.2 74.2 74.2h48.3c40.9 0 74.2-33.3 74.2-74.2V473c-0.1-40.9-33.3-74.2-74.2-74.2zM235.1 716c0 12.4-10.1 22.5-22.5 22.5h-48.3c-12.4 0-22.5-10.1-22.5-22.5V473c0-12.4 10.1-22.5 22.5-22.5h48.3c12.4 0 22.5 10.1 22.5 22.5v243z m647.2 0c0 12.4-10.1 22.5-22.5 22.5h-48.3c-12.4 0-22.5-10.1-22.5-22.5V473c0-12.4 10.1-22.5 22.5-22.5h48.3c12.4 0 22.5 10.1 22.5 22.5v243z"></path>
					<path d="M531.3 652.3c-1.7 0-3.3-0.1-5-0.4-10.2-1.7-18.7-8.3-22.7-17.8l-41.1-95.4-37 43.8c-8.1 9.6-19.9 15.1-32.5 15.1h-71.9V546h67.6l56.6-67.1c6.8-8.1 17-12 27.5-10.4 10.4 1.5 19.1 8.2 23.3 17.9l41.6 96.7 21.9-24c8-8.8 19.5-13.9 31.4-13.9h102.4v51.7H595l-41.6 45.7c-5.6 6.2-13.7 9.7-22.1 9.7z"></path>
				</svg>
				`,selector:l,onSelect:function(c){let m=c;return console.log(yt+"切换音频",m),e.handler.playUrl(m.url),e.$data.art.storage.set(i,{soundQualityCode:m.soundQualityCode}),c.html}};b.$data.art.setting.find(jt)?b.$data.art.setting.update(s):b.$data.art.setting.add(s),u.info("加载m4s的音频：",o),b.handler.playUrl(o.url),this.bind(),this.bindAudio();}else b.handler.playUrl(""),b.$data.art.setting.option.find(i=>i.name===jt)&&b.$data.art.setting.remove(jt);},bind(){Object.keys(this.events).forEach(t=>{this.$data.art.on(t,this.events[t]);});},bindAudio(){Object.keys(this.audioEvents).forEach(t=>{this.$data.audio.addEventListener(t,this.audioEvents[t],{once:true});});},unbind(){Object.keys(this.events).forEach(t=>{this.$data.art.off(t,this.events[t]);});},unbindAudio(){Object.keys(this.audioEvents).forEach(t=>{this.$data.audio.removeEventListener(t,this.audioEvents[t]);});}},Ve=t=>e=>(b.$data.art=e,typeof t.onRestart=="function"&&(b.userEvent.onRestart=t.onRestart),b.update({from:t.from,audioList:t.audioList}),{name:b.$key.plugin_KEY,update(...r){b.update(...r),b.handler.syncVolume(),b.handler.syncMuted(),b.handler.syncTime();},getAudio(){return b.$data.audio},getCurrentPlayConfig(){return b.$data.option.find(r=>r.url===b.$data.audio.src)}}),oe=b.$key.plugin_KEY,Tr={events:{control:t=>{t&&V.updateOnlineTotal({showOnlineTotal:V.$data.option.showOnlineTotal,onlineInfoParams:V.$data.option.onlineInfoParams});}},bind(){Object.keys(this.events).forEach(t=>{V.art.on(t,this.events[t]);});},unbind(){Object.keys(this.events).forEach(t=>{V.art.off(t,this.events[t]);});}},V={art:null,$el:{$topWrap:null,$topTitle:null,$topTitleText:null,$topTitleFollow:null,$topTitleFollowText:null,$topRight:null,$topRightFollow:null},$data:{isInit:false,__option:{},option:{}},$key:{plugin_KEY:"plugin-bilibili-topToolBar"},init(t){this.art.layers.add({name:"top-wrap",html:`
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
            `,mounted:async function(e){V.$el.$topWrap=e,V.$el.$topTitle=e.querySelector(".art-player-top-title"),V.$el.$topTitleText=e.querySelector(".art-player-top-title-text"),V.$el.$topTitleFollow=e.querySelector(".art-player-top-follow"),V.$el.$topTitleFollowText=e.querySelector(".art-player-top-follow-text"),V.$el.$topRight=e.querySelector(".art-player-top-right"),V.$el.$topRightFollow=e.querySelector(".art-player-top-right-follow"),V.update(t),Tr.bind();}});},update(t){this.$data.isInit||(this.$data.isInit=true,Object.defineProperties(this.$data.option,{showWrap:{set(e){V.$data.__option.showWrap=e;},get(){return V.$data.__option.showWrap}},showTitle:{set(e){V.$data.__option.showTitle=e;},get(){return V.$data.__option.showTitle}},title:{set(e){V.$data.__option.title=e,typeof e=="string"&&(V.$el.$topTitleText.innerText=e);},get(){return V.$data.__option.title}},showOnlineTotal:{set(e){V.$data.__option.showOnlineTotal=e;},get(){return V.$data.__option.showOnlineTotal}},onlineInfoParams:{set(e){V.$data.__option.onlineInfoParams=e,V.updateOnlineTotal({showOnlineTotal:this.showOnlineTotal,onlineInfoParams:e});},get(){return V.$data.__option.onlineInfoParams}},showRight:{set(e){V.$data.__option.showRight=e;},get(){return V.$data.__option.showRight}},showRightFollow:{set(e){V.$data.__option.showRightFollow=e;},get(){return V.$data.__option.showRightFollow}}})),Object.assign(this.$data.option,t);},async updateOnlineTotal(t){if(!t.showOnlineTotal)return;let e=await re.onlineTotal({aid:t.onlineInfoParams.aid,bvid:t.onlineInfoParams.bvid,cid:t.onlineInfoParams.cid});e&&(V.$el.$topTitleFollowText.innerText=`${e.total||e.count||0}人正在看`);}},ze=t=>e=>(V.art=e,V.init(t),{name:V.$key.plugin_KEY,update(r){V.update(r);}}),Pe=V.$key.plugin_KEY,Oe={S:"万与丑专业丛东丝丢两严丧个丬丰临为丽举么义乌乐乔习乡书买乱争于亏云亘亚产亩亲亵亸亿仅从仑仓仪们价众优伙会伛伞伟传伤伥伦伧伪伫体余佣佥侠侣侥侦侧侨侩侪侬俣俦俨俩俪俭债倾偬偻偾偿傥傧储傩儿兑兖党兰关兴兹养兽冁内冈册写军农冢冯冲决况冻净凄凉凌减凑凛几凤凫凭凯击凼凿刍划刘则刚创删别刬刭刽刿剀剂剐剑剥剧劝办务劢动励劲劳势勋勐勚匀匦匮区医华协单卖卢卤卧卫却卺厂厅历厉压厌厍厕厢厣厦厨厩厮县参叆叇双发变叙叠叶号叹叽吁后吓吕吗吣吨听启吴呒呓呕呖呗员呙呛呜咏咔咙咛咝咤咴咸哌响哑哒哓哔哕哗哙哜哝哟唛唝唠唡唢唣唤唿啧啬啭啮啰啴啸喷喽喾嗫呵嗳嘘嘤嘱噜噼嚣嚯团园囱围囵国图圆圣圹场坂坏块坚坛坜坝坞坟坠垄垅垆垒垦垧垩垫垭垯垱垲垴埘埙埚埝埯堑堕塆墙壮声壳壶壸处备复够头夸夹夺奁奂奋奖奥妆妇妈妩妪妫姗姜娄娅娆娇娈娱娲娴婳婴婵婶媪嫒嫔嫱嬷孙学孪宁宝实宠审宪宫宽宾寝对寻导寿将尔尘尧尴尸尽层屃屉届属屡屦屿岁岂岖岗岘岙岚岛岭岳岽岿峃峄峡峣峤峥峦崂崃崄崭嵘嵚嵛嵝嵴巅巩巯币帅师帏帐帘帜带帧帮帱帻帼幂幞干并广庄庆庐庑库应庙庞废庼廪开异弃张弥弪弯弹强归当录彟彦彻径徕御忆忏忧忾怀态怂怃怄怅怆怜总怼怿恋恳恶恸恹恺恻恼恽悦悫悬悭悯惊惧惨惩惫惬惭惮惯愍愠愤愦愿慑慭憷懑懒懔戆戋戏戗战戬户扎扑扦执扩扪扫扬扰抚抛抟抠抡抢护报担拟拢拣拥拦拧拨择挂挚挛挜挝挞挟挠挡挢挣挤挥挦捞损捡换捣据捻掳掴掷掸掺掼揸揽揿搀搁搂搅携摄摅摆摇摈摊撄撑撵撷撸撺擞攒敌敛数斋斓斗斩断无旧时旷旸昙昼昽显晋晒晓晔晕晖暂暧札术朴机杀杂权条来杨杩杰极构枞枢枣枥枧枨枪枫枭柜柠柽栀栅标栈栉栊栋栌栎栏树栖样栾桊桠桡桢档桤桥桦桧桨桩梦梼梾检棂椁椟椠椤椭楼榄榇榈榉槚槛槟槠横樯樱橥橱橹橼檐檩欢欤欧歼殁殇残殒殓殚殡殴毁毂毕毙毡毵氇气氢氩氲汇汉污汤汹沓沟没沣沤沥沦沧沨沩沪沵泞泪泶泷泸泺泻泼泽泾洁洒洼浃浅浆浇浈浉浊测浍济浏浐浑浒浓浔浕涂涌涛涝涞涟涠涡涢涣涤润涧涨涩淀渊渌渍渎渐渑渔渖渗温游湾湿溃溅溆溇滗滚滞滟滠满滢滤滥滦滨滩滪漤潆潇潋潍潜潴澜濑濒灏灭灯灵灾灿炀炉炖炜炝点炼炽烁烂烃烛烟烦烧烨烩烫烬热焕焖焘煅煳熘爱爷牍牦牵牺犊犟状犷犸犹狈狍狝狞独狭狮狯狰狱狲猃猎猕猡猪猫猬献獭玑玙玚玛玮环现玱玺珉珏珐珑珰珲琎琏琐琼瑶瑷璇璎瓒瓮瓯电画畅畲畴疖疗疟疠疡疬疮疯疱疴痈痉痒痖痨痪痫痴瘅瘆瘗瘘瘪瘫瘾瘿癞癣癫癯皑皱皲盏盐监盖盗盘眍眦眬着睁睐睑瞒瞩矫矶矾矿砀码砖砗砚砜砺砻砾础硁硅硕硖硗硙硚确硷碍碛碜碱碹磙礼祎祢祯祷祸禀禄禅离秃秆种积称秽秾稆税稣稳穑穷窃窍窑窜窝窥窦窭竖竞笃笋笔笕笺笼笾筑筚筛筜筝筹签简箓箦箧箨箩箪箫篑篓篮篱簖籁籴类籼粜粝粤粪粮糁糇紧絷纟纠纡红纣纤纥约级纨纩纪纫纬纭纮纯纰纱纲纳纴纵纶纷纸纹纺纻纼纽纾线绀绁绂练组绅细织终绉绊绋绌绍绎经绐绑绒结绔绕绖绗绘给绚绛络绝绞统绠绡绢绣绤绥绦继绨绩绪绫绬续绮绯绰绱绲绳维绵绶绷绸绹绺绻综绽绾绿缀缁缂缃缄缅缆缇缈缉缊缋缌缍缎缏缐缑缒缓缔缕编缗缘缙缚缛缜缝缞缟缠缡缢缣缤缥缦缧缨缩缪缫缬缭缮缯缰缱缲缳缴缵罂网罗罚罢罴羁羟羡翘翙翚耢耧耸耻聂聋职聍联聩聪肃肠肤肷肾肿胀胁胆胜胧胨胪胫胶脉脍脏脐脑脓脔脚脱脶脸腊腌腘腭腻腼腽腾膑臜舆舣舰舱舻艰艳艹艺节芈芗芜芦苁苇苈苋苌苍苎苏苘苹茎茏茑茔茕茧荆荐荙荚荛荜荞荟荠荡荣荤荥荦荧荨荩荪荫荬荭荮药莅莜莱莲莳莴莶获莸莹莺莼萚萝萤营萦萧萨葱蒇蒉蒋蒌蓝蓟蓠蓣蓥蓦蔷蔹蔺蔼蕲蕴薮藁藓虏虑虚虫虬虮虽虾虿蚀蚁蚂蚕蚝蚬蛊蛎蛏蛮蛰蛱蛲蛳蛴蜕蜗蜡蝇蝈蝉蝎蝼蝾螀螨蟏衅衔补衬衮袄袅袆袜袭袯装裆裈裢裣裤裥褛褴襁襕见观觃规觅视觇览觉觊觋觌觍觎觏觐觑觞触觯詟誉誊讠计订讣认讥讦讧讨让讪讫训议讯记讱讲讳讴讵讶讷许讹论讻讼讽设访诀证诂诃评诅识诇诈诉诊诋诌词诎诏诐译诒诓诔试诖诗诘诙诚诛诜话诞诟诠诡询诣诤该详诧诨诩诪诫诬语诮误诰诱诲诳说诵诶请诸诹诺读诼诽课诿谀谁谂调谄谅谆谇谈谊谋谌谍谎谏谐谑谒谓谔谕谖谗谘谙谚谛谜谝谞谟谠谡谢谣谤谥谦谧谨谩谪谫谬谭谮谯谰谱谲谳谴谵谶谷豮贝贞负贠贡财责贤败账货质贩贪贫贬购贮贯贰贱贲贳贴贵贶贷贸费贺贻贼贽贾贿赀赁赂赃资赅赆赇赈赉赊赋赌赍赎赏赐赑赒赓赔赕赖赗赘赙赚赛赜赝赞赟赠赡赢赣赪赵赶趋趱趸跃跄跖跞践跶跷跸跹跻踊踌踪踬踯蹑蹒蹰蹿躏躜躯车轧轨轩轪轫转轭轮软轰轱轲轳轴轵轶轷轸轹轺轻轼载轾轿辀辁辂较辄辅辆辇辈辉辊辋辌辍辎辏辐辑辒输辔辕辖辗辘辙辚辞辩辫边辽达迁过迈运还这进远违连迟迩迳迹适选逊递逦逻遗遥邓邝邬邮邹邺邻郁郄郏郐郑郓郦郧郸酝酦酱酽酾酿释里鉅鉴銮錾钆钇针钉钊钋钌钍钎钏钐钑钒钓钔钕钖钗钘钙钚钛钝钞钟钠钡钢钣钤钥钦钧钨钩钪钫钬钭钮钯钰钱钲钳钴钵钶钷钸钹钺钻钼钽钾钿铀铁铂铃铄铅铆铈铉铊铋铍铎铏铐铑铒铕铗铘铙铚铛铜铝铞铟铠铡铢铣铤铥铦铧铨铪铫铬铭铮铯铰铱铲铳铴铵银铷铸铹铺铻铼铽链铿销锁锂锃锄锅锆锇锈锉锊锋锌锍锎锏锐锑锒锓锔锕锖锗错锚锜锞锟锠锡锢锣锤锥锦锨锩锫锬锭键锯锰锱锲锳锴锵锶锷锸锹锺锻锼锽锾锿镀镁镂镃镆镇镈镉镊镌镍镎镏镐镑镒镕镖镗镙镚镛镜镝镞镟镠镡镢镣镤镥镦镧镨镩镪镫镬镭镮镯镰镱镲镳镴镶长门闩闪闫闬闭问闯闰闱闲闳间闵闶闷闸闹闺闻闼闽闾闿阀阁阂阃阄阅阆阇阈阉阊阋阌阍阎阏阐阑阒阓阔阕阖阗阘阙阚阛队阳阴阵阶际陆陇陈陉陕陧陨险随隐隶隽难雏雠雳雾霁霉霭靓静靥鞑鞒鞯鞴韦韧韨韩韪韫韬韵页顶顷顸项顺须顼顽顾顿颀颁颂颃预颅领颇颈颉颊颋颌颍颎颏颐频颒颓颔颕颖颗题颙颚颛颜额颞颟颠颡颢颣颤颥颦颧风飏飐飑飒飓飔飕飖飗飘飙飚飞飨餍饤饥饦饧饨饩饪饫饬饭饮饯饰饱饲饳饴饵饶饷饸饹饺饻饼饽饾饿馀馁馂馃馄馅馆馇馈馉馊馋馌馍馎馏馐馑馒馓馔馕马驭驮驯驰驱驲驳驴驵驶驷驸驹驺驻驼驽驾驿骀骁骂骃骄骅骆骇骈骉骊骋验骍骎骏骐骑骒骓骔骕骖骗骘骙骚骛骜骝骞骟骠骡骢骣骤骥骦骧髅髋髌鬓魇魉鱼鱽鱾鱿鲀鲁鲂鲄鲅鲆鲇鲈鲉鲊鲋鲌鲍鲎鲏鲐鲑鲒鲓鲔鲕鲖鲗鲘鲙鲚鲛鲜鲝鲞鲟鲠鲡鲢鲣鲤鲥鲦鲧鲨鲩鲪鲫鲬鲭鲮鲯鲰鲱鲲鲳鲴鲵鲶鲷鲸鲹鲺鲻鲼鲽鲾鲿鳀鳁鳂鳃鳄鳅鳆鳇鳈鳉鳊鳋鳌鳍鳎鳏鳐鳑鳒鳓鳔鳕鳖鳗鳘鳙鳛鳜鳝鳞鳟鳠鳡鳢鳣鸟鸠鸡鸢鸣鸤鸥鸦鸧鸨鸩鸪鸫鸬鸭鸮鸯鸰鸱鸲鸳鸴鸵鸶鸷鸸鸹鸺鸻鸼鸽鸾鸿鹀鹁鹂鹃鹄鹅鹆鹇鹈鹉鹊鹋鹌鹍鹎鹏鹐鹑鹒鹓鹔鹕鹖鹗鹘鹚鹛鹜鹝鹞鹟鹠鹡鹢鹣鹤鹥鹦鹧鹨鹩鹪鹫鹬鹭鹯鹰鹱鹲鹳鹴鹾麦麸黄黉黡黩黪黾鼋鼌鼍鼗鼹齄齐齑齿龀龁龂龃龄龅龆龇龈龉龊龋龌龙龚龛龟志制咨只里系范松没尝尝闹面准钟别闲乾尽脏拼冲里",T:"萬與醜專業叢東絲丟兩嚴喪個丬豐臨爲麗舉麼義烏樂喬習鄉書買亂爭於虧雲亙亞產畝親褻嚲億僅從侖倉儀們價衆優夥會傴傘偉傳傷倀倫傖僞佇體餘傭僉俠侶僥偵側僑儈儕儂俁儔儼倆儷儉債傾傯僂僨償儻儐儲儺兒兌兗黨蘭關興茲養獸囅內岡冊寫軍農冢馮沖決況凍淨淒涼凌減湊凜幾鳳鳧憑凱擊凼鑿芻劃劉則剛創刪別剗剄劊劌剴劑剮劍剝劇勸辦務勱動勵勁勞勢勳勐勩勻匭匱區醫華協單賣盧滷臥衛卻巹廠廳歷厲壓厭厙廁廂厴廈廚廄廝縣參靉靆雙發變敘疊葉號嘆嘰籲後嚇呂嗎唚噸聽啓吳嘸囈嘔嚦唄員咼嗆嗚詠咔嚨嚀噝吒咴鹹哌響啞噠嘵嗶噦譁噲嚌噥喲嘜嗊嘮啢嗩唣喚唿嘖嗇囀齧囉嘽嘯噴嘍嚳囁呵噯噓嚶囑嚕噼囂嚯團園囪圍圇國圖圓聖壙場阪壞塊堅壇壢壩塢墳墜壟壠壚壘墾垧堊墊埡墶壋塏堖塒壎堝埝垵塹墮壪牆壯聲殼壺壼處備復夠頭誇夾奪奩奐奮獎奧妝婦媽嫵嫗嬀姍姜婁婭嬈嬌孌娛媧嫺嫿嬰嬋嬸媼嬡嬪嬙嬤孫學孿寧寶實寵審憲宮寬賓寢對尋導壽將爾塵堯尷屍盡層屓屜屆屬屢屨嶼歲豈嶇崗峴嶴嵐島嶺嶽崬巋嶨嶧峽嶢嶠崢巒嶗崍嶮嶄嶸嶔嵛嶁嵴巔鞏巰幣帥師幃帳簾幟帶幀幫幬幘幗冪襆幹並廣莊慶廬廡庫應廟龐廢廎廩開異棄張彌弳彎彈強歸當錄彠彥徹徑徠御憶懺憂愾懷態慫憮慪悵愴憐總懟懌戀懇惡慟懨愷惻惱惲悅愨懸慳憫驚懼慘懲憊愜慚憚慣愍慍憤憒願懾憖憷懣懶懍戇戔戲戧戰戩戶扎撲扦執擴捫掃揚擾撫拋摶摳掄搶護報擔擬攏揀擁攔擰撥擇掛摯攣掗撾撻挾撓擋撟掙擠揮撏撈損撿換搗據捻擄摑擲撣摻摜揸攬撳攙擱摟攪攜攝攄擺搖擯攤攖撐攆擷擼攛擻攢敵斂數齋斕鬥斬斷無舊時曠暘曇晝曨顯晉曬曉曄暈暉暫曖札術樸機殺雜權條來楊榪傑極構樅樞棗櫪梘棖槍楓梟櫃檸檉梔柵標棧櫛櫳棟櫨櫟欄樹棲樣欒桊椏橈楨檔榿橋樺檜槳樁夢檮棶檢櫺槨櫝槧欏橢樓欖櫬櫚櫸檟檻檳櫧橫檣櫻櫫櫥櫓櫞檐檁歡歟歐殲歿殤殘殞殮殫殯毆毀轂畢斃氈毿氌氣氫氬氳匯漢污湯洶沓溝沒灃漚瀝淪滄渢潙滬沵濘淚澩瀧瀘濼瀉潑澤涇潔灑窪浹淺漿澆湞溮濁測澮濟瀏滻渾滸濃潯濜塗涌濤澇淶漣潿渦溳渙滌潤澗漲澀澱淵淥漬瀆漸澠漁瀋滲溫遊灣溼潰濺漵漊潷滾滯灩灄滿瀅濾濫灤濱灘澦漤瀠瀟瀲濰潛瀦瀾瀨瀕灝滅燈靈災燦煬爐燉煒熗點煉熾爍爛烴燭煙煩燒燁燴燙燼熱煥燜燾煅煳熘愛爺牘犛牽犧犢犟狀獷獁猶狽狍獮獰獨狹獅獪猙獄猻獫獵獼玀豬貓蝟獻獺璣璵瑒瑪瑋環現瑲璽珉珏琺瓏璫琿璡璉瑣瓊瑤璦璇瓔瓚甕甌電畫暢畲疇癤療瘧癘瘍癧瘡瘋皰痾癰痙癢瘂癆瘓癇癡癉瘮瘞瘻癟癱癮癭癩癬癲癯皚皺皸盞鹽監蓋盜盤瞘眥矓着睜睞瞼瞞矚矯磯礬礦碭碼磚硨硯碸礪礱礫礎硜硅碩硤磽磑礄確礆礙磧磣鹼碹磙禮禕禰禎禱禍稟祿禪離禿稈種積稱穢穠穭稅穌穩穡窮竊竅窯竄窩窺竇窶豎競篤筍筆筧箋籠籩築篳篩簹箏籌籤簡籙簀篋籜籮簞簫簣簍籃籬籪籟糴類秈糶糲粵糞糧糝餱緊縶糹糾紆紅紂纖紇約級紈纊紀紉緯紜紘純紕紗綱納紝縱綸紛紙紋紡紵紖紐紓線紺紲紱練組紳細織終縐絆紼絀紹繹經紿綁絨結絝繞絰絎繪給絢絳絡絕絞統綆綃絹繡綌綏絛繼綈績緒綾緓續綺緋綽鞝緄繩維綿綬繃綢綯綹綣綜綻綰綠綴緇緙緗緘緬纜緹緲緝縕繢緦綞緞緶線緱縋緩締縷編緡緣縉縛縟縝縫縗縞纏縭縊縑繽縹縵縲纓縮繆繅纈繚繕繒繮繾繰繯繳纘罌網羅罰罷羆羈羥羨翹翽翬耮耬聳恥聶聾職聹聯聵聰肅腸膚肷腎腫脹脅膽勝朧腖臚脛膠脈膾髒臍腦膿臠腳脫腡臉臘醃膕齶膩靦膃騰臏臢輿艤艦艙艫艱豔艹藝節羋薌蕪蘆蓯葦藶莧萇蒼苧蘇檾蘋莖蘢蔦塋煢繭荊薦薘莢蕘蓽蕎薈薺蕩榮葷滎犖熒蕁藎蓀蔭蕒葒葤藥蒞莜萊蓮蒔萵薟獲蕕瑩鶯蓴蘀蘿螢營縈蕭薩蔥蕆蕢蔣蔞藍薊蘺蕷鎣驀薔蘞藺藹蘄蘊藪藁蘚虜慮虛蟲虯蟣雖蝦蠆蝕蟻螞蠶蠔蜆蠱蠣蟶蠻蟄蛺蟯螄蠐蛻蝸蠟蠅蟈蟬蠍螻蠑螿蟎蠨釁銜補襯袞襖嫋褘襪襲襏裝襠褌褳襝褲襉褸襤襁襴見觀覎規覓視覘覽覺覬覡覿覥覦覯覲覷觴觸觶讋譽謄訁計訂訃認譏訐訌討讓訕訖訓議訊記訒講諱謳詎訝訥許訛論訩訟諷設訪訣證詁訶評詛識詗詐訴診詆謅詞詘詔詖譯詒誆誄試詿詩詰詼誠誅詵話誕詬詮詭詢詣諍該詳詫諢詡譸誡誣語誚誤誥誘誨誑說誦誒請諸諏諾讀諑誹課諉諛誰諗調諂諒諄誶談誼謀諶諜謊諫諧謔謁謂諤諭諼讒諮諳諺諦謎諞諝謨讜謖謝謠謗諡謙謐謹謾謫譾謬譚譖譙讕譜譎讞譴譫讖谷豶貝貞負貟貢財責賢敗賬貨質販貪貧貶購貯貫貳賤賁貰貼貴貺貸貿費賀貽賊贄賈賄貲賃賂贓資賅贐賕賑賚賒賦賭齎贖賞賜贔賙賡賠賧賴賵贅賻賺賽賾贗贊贇贈贍贏贛赬趙趕趨趲躉躍蹌跖躒踐躂蹺蹕躚躋踊躊蹤躓躑躡蹣躕躥躪躦軀車軋軌軒軑軔轉軛輪軟轟軲軻轤軸軹軼軤軫轢軺輕軾載輊轎輈輇輅較輒輔輛輦輩輝輥輞輬輟輜輳輻輯轀輸轡轅轄輾轆轍轔辭辯辮邊遼達遷過邁運還這進遠違連遲邇逕跡適選遜遞邐邏遺遙鄧鄺鄔郵鄒鄴鄰鬱郄郟鄶鄭鄆酈鄖鄲醞醱醬釅釃釀釋裏鉅鑑鑾鏨釓釔針釘釗釙釕釷釺釧釤鈒釩釣鍆釹鍚釵鈃鈣鈈鈦鈍鈔鍾鈉鋇鋼鈑鈐鑰欽鈞鎢鉤鈧鈁鈥鈄鈕鈀鈺錢鉦鉗鈷鉢鈳鉕鈽鈸鉞鑽鉬鉭鉀鈿鈾鐵鉑鈴鑠鉛鉚鈰鉉鉈鉍鈹鐸鉶銬銠鉺銪鋏鋣鐃銍鐺銅鋁銱銦鎧鍘銖銑鋌銩銛鏵銓鉿銚鉻銘錚銫鉸銥鏟銃鐋銨銀銣鑄鐒鋪鋙錸鋱鏈鏗銷鎖鋰鋥鋤鍋鋯鋨鏽銼鋝鋒鋅鋶鐦鐗銳銻鋃鋟鋦錒錆鍺錯錨錡錁錕錩錫錮鑼錘錐錦杴錈錇錟錠鍵鋸錳錙鍥鍈鍇鏘鍶鍔鍤鍬鍾鍛鎪鍠鍰鎄鍍鎂鏤鎡鏌鎮鎛鎘鑷鐫鎳鎿鎦鎬鎊鎰鎔鏢鏜鏍鏰鏞鏡鏑鏃鏇鏐鐔钁鐐鏷鑥鐓鑭鐠鑹鏹鐙鑊鐳鐶鐲鐮鐿鑔鑣鑞鑲長門閂閃閆閈閉問闖閏闈閒閎間閔閌悶閘鬧閨聞闥閩閭闓閥閣閡閫鬮閱閬闍閾閹閶鬩閿閽閻閼闡闌闃闠闊闋闔闐闒闕闞闤隊陽陰陣階際陸隴陳陘陝隉隕險隨隱隸雋難雛讎靂霧霽黴靄靚靜靨韃鞽韉鞴韋韌韍韓韙韞韜韻頁頂頃頇項順須頊頑顧頓頎頒頌頏預顱領頗頸頡頰頲頜潁熲頦頤頻頮頹頷頴穎顆題顒顎顓顏額顳顢顛顙顥纇顫顬顰顴風颺颭颮颯颶颸颼颻飀飄飆飈飛饗饜飣飢飥餳飩餼飪飫飭飯飲餞飾飽飼飿飴餌饒餉餄餎餃餏餅餑餖餓餘餒餕餜餛餡館餷饋餶餿饞饁饃餺餾饈饉饅饊饌饢馬馭馱馴馳驅馹駁驢駔駛駟駙駒騶駐駝駑駕驛駘驍罵駰驕驊駱駭駢驫驪騁驗騂駸駿騏騎騍騅騌驌驂騙騭騤騷騖驁騮騫騸驃騾驄驏驟驥驦驤髏髖髕鬢魘魎魚魛魢魷魨魯魴魺鮁鮃鮎鱸鮋鮓鮒鮊鮑鱟鮍鮐鮭鮚鮳鮪鮞鮦鰂鮜鱠鱭鮫鮮鮺鯗鱘鯁鱺鰱鰹鯉鰣鰷鯀鯊鯇鮶鯽鯒鯖鯪鯕鯫鯡鯤鯧鯝鯢鮎鯛鯨鰺鯴鯔鱝鰈鰏鱨鯷鰮鰃鰓鱷鰍鰒鰉鰁鱂鯿鰠鰲鰭鰨鰥鰩鰟鰜鰳鰾鱈鱉鰻鰵鱅鰼鱖鱔鱗鱒鱯鱤鱧鱣鳥鳩雞鳶鳴鳲鷗鴉鶬鴇鴆鴣鶇鸕鴨鴞鴦鴒鴟鴝鴛鷽鴕鷥鷙鴯鴰鵂鴴鵃鴿鸞鴻鵐鵓鸝鵑鵠鵝鵒鷳鵜鵡鵲鶓鵪鵾鵯鵬鵮鶉鶊鵷鷫鶘鶡鶚鶻鶿鶥鶩鷊鷂鶲鶹鶺鷁鶼鶴鷖鸚鷓鷚鷯鷦鷲鷸鷺鸇鷹鸌鸏鸛鸘鹺麥麩黃黌黶黷黲黽黿鼂鼉鞀鼴齇齊齏齒齔齕齗齟齡齙齠齜齦齬齪齲齷龍龔龕龜志制諮只裏系範鬆沒嚐嚐鬧面準鍾別閒乾盡髒拼衝裡"},he=Oe.S,fe=Oe.T,Ut=(t,e)=>{let r,n,i,a,o="",l;for(e?(r=he,n=fe):(r=fe,n=he),i=0;i<t.length;i++){a=t.charAt(i);const s=t.charCodeAt(i);if(!(s>13312&&s<40899||s>63744&&s<64106)){o+=a;continue}l=r.indexOf(a),l!==-1?o+=n.charAt(l):o+=a;}return o},Lr={s2t:(t,e)=>{if(e){for(let r=0;r<e.length;r++)t.includes(e[r].src)&&(t=t.replaceAll(e[r].src,e[r].des));return Ut(t,true)}else return Ut(t,true)},t2s:(t,e)=>{if(e){for(let r=0;r<e.length;r++)t.includes(e[r].src)&&(t=t.replaceAll(e[r].src,e[r].des));return Ut(t,false)}else return Ut(t,false)}},st="[artplayer-plugin-bilibiliCCSubTitle]：",Ie={src:"臟妳為傢蔔餵眾係姊託迴蹟儘封啟",des:"脏你为家卜喂众系姐托回迹尽对启",more_src:["乾脆","随著","相信著","奇蹟","拚命","採取","製造"],more_des:["干脆","随着","相信着","奇迹","拼命","采取","制造"],_custom_str:[],generteCustomStr(){for(let t=0;t<this.src.length;t++)this._custom_str.push({src:this.src[t],des:this.des[t]});for(let t=0;t<this.more_src.length;t++)this._custom_str.push({src:this.more_src[t],des:this.more_des[t]});},getCustomStr(){return this._custom_str}},qt={reset(){this.unbind();},bind(){ct.art.on("video:timeupdate",this.event,this);},unbind(){ct.clearSubTitle(),ct.art.off("video:timeupdate",this.event);},event(){var i;let t=ct.art.currentTime,e=(i=tt.allSubTitleInfo[tt.currentSelectIndex])==null?void 0:i.data;if(!e)return;let r=e.find(a=>a.to>=t&&a.from<=t),n=Array.from(ct.$el.$subtitle.querySelectorAll(".art-subtitle-line"));for(let a=0;a<n.length;a++){const o=n[a],{from:l,to:s}=Reflect.get(o,"data-subtitle-line-info");if(s<=t||l>=t)o.remove();else if(r&&r.from===l&&r.to===s)return}if(r){let a=document.createElement("div");a.className="art-subtitle-line",Reflect.set(a,"data-subtitle-line-info",r),a.setAttribute("data-group","0"),a.innerHTML=r.content,ct.$el.$subtitle.appendChild(a);}}},tt={allSubTitleInfo:[],currentSelectIndex:-1,reset(){this.allSubTitleInfo=[],this.currentSelectIndex=-1;}},ct={art:null,$key:{plugin_KEY:"plugin-bilibili-cc-subtitle"},$el:{$subtitle:null},async update(t){const e=this,r=`artplayer-bili-cc-subtitle-${t.from}`,n={config:{NAME:"setting-bilibili-cc-subtitle"},getDefaultSettingOption:()=>({name:n.config.NAME,width:200,html:"字幕",tooltip:"",icon:`
					<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 48 48">
						<path d="M0 0h48v48H0z" fill="none"/>
						<path fill="#ffffff" d="M40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM8 24h8v4H8v-4zm20 12H8v-4h20v4zm12 0h-8v-4h8v4zm0-8H20v-4h20v4z"/>
					</svg>
					`,selector:[],onSelect:function(c){let m=c;return e.art.storage.set(r,{lan:m.subTitle_lan}),qt.unbind(),tt.currentSelectIndex=m.subTitle_index,m.subTitle_index!==-1&&qt.bind(),c.html}}),getSettingOption:()=>{const c=n.getDefaultSettingOption(),m=n.getDefaultSettingSelector();return c.selector.push(m),c.tooltip=m.html,c},getDefaultSettingSelector:()=>({default:true,html:"无",subTitle_lan:"",subTitle_index:0,subTitle_data:[]}),addSetting(c){let m=this.getSettingOption();if(c&&c.length){m.selector.push(...c);let C={index:0,html:m.selector[0].html};const B=e.art.storage.get(r);if(B){const _=m.selector.findIndex(L=>L.subTitle_lan===B.lan);if(_!==-1){const L=m.selector[_];console.log(st+"选择字幕："+L.html),C.index=_,C.html=L.html;}else console.warn(st+"没有找到上次选的字幕，使用当前默认无");}for(let _=0;_<m.selector.length;_++)m.selector[_].default=_===C.index;m.tooltip=C.html,tt.currentSelectIndex=C.index;}this.isAddSetting()?(console.log(st+"更新字幕菜单",c??[]),e.art.setting.update(m)):e.art.setting.add(m);},isAddSetting(){return e.art.setting.find(this.config.NAME)!=null}};tt.reset(),qt.reset();const i=n.getDefaultSettingSelector();tt.currentSelectIndex=0,tt.allSubTitleInfo.push({name:i.html,lan:i.subTitle_lan,data:i.subTitle_data}),n.addSetting();const a=[];this.$el.$subtitle=this.art.template.$subtitle;const o={cid:t.cid};if(t.ep_id&&Reflect.set(o,"ep_id",t.ep_id),t.aid)Reflect.set(o,"aid",t.aid);else if(t.bvid)Reflect.set(o,"bvid",t.bvid);else throw new TypeError("avid or bvid must give one");const l=await X.get(`https://${It.web_host}/x/player/v2?${d.toSearchParamsStr(o)}`,{fetch:true,allowInterceptConfig:false,responseType:"json",headers:{Host:"www.bilibili.com",Referer:"https://www.bilibili.com"}});if(!l.status){console.error(st+"网络异常，获取视频的字幕信息失败",l);return}console.log(st+"视频的字幕信息",l);const s=d.toJSON(l.data.responseText);if(!dt.isWebApiSuccess(s)){console.error(st+"获取视频的字幕信息失败",s);return}let p=s.data.subtitle.subtitles;if(!p.length){console.warn(st+"获取字幕链接列表为空",s);return}for(let c=0;c<p.length;c++){const m=p[c];if(console.log(st+"请求字幕链接信息："+m.subtitle_url),d.isNull(m.subtitle_url))continue;const g=await X.get(m.subtitle_url,{responseType:"json",allowInterceptConfig:false,headers:{Referer:"https://www.bilibili.com","User-Agent":d.getRandomPCUA()}});if(g.status){console.log(st+"成功获取字幕信息");const B=d.toJSON(g.data.responseText).body;let _=tt.allSubTitleInfo.length,L={name:m.lan_doc,lan:m.lan,data:B};tt.allSubTitleInfo.push(L),a.push({html:m.lan_doc,subTitle_index:_,subTitle_lan:m.lan,subTitle_data:B});}else console.error(st+"请求字幕链接信息失败",g);}if(f.getValue("bili-bangumi-generateSimpleChineseSubtitle")){let c=tt.allSubTitleInfo.find(m=>m.lan==="zh-Hant"||m.name.includes("繁体"));if(c){let m=[];c.data.forEach(B=>{const{content:_,...L}=B,M=Lr.t2s(_,Ie.getCustomStr());m.push({content:M,...L});});let g="简体（自动生成）",C=tt.allSubTitleInfo.length;tt.allSubTitleInfo.push({name:g,lan:"zh-CN-auto",data:m}),a.push({html:g,subTitle_index:C,subTitle_lan:"zh-CN-auto",subTitle_data:m});}}console.log(st+"加载视频CC字幕信息",tt.allSubTitleInfo),tt.allSubTitleInfo[tt.currentSelectIndex].data==null||tt.allSubTitleInfo[tt.currentSelectIndex].data.length==0||qt.bind(),n.addSetting(a);},clearSubTitle(){this.$el.$subtitle&&(this.$el.$subtitle.innerHTML="");},updateArtPlayer(t){this.art=t;}};function He(t){return e=>(Ie.generteCustomStr(),ct.updateArtPlayer(e),ct.update(t),{name:ct.$key.plugin_KEY,update(r){ct.update(r);}})}const je=ct.$key.plugin_KEY,Ue="[artplayer-plugin-epChoose]：",qe=(t,e)=>e==null||e==""?t:isNaN(Number(e))?e.toString():`第${e}话 ${t}`,Mr=t=>{let e="",r=t.EP_LIST.map((n,i)=>(n.isDefault&&(e=n.title),{html:n.title,default:n.isDefault,index:i,callback:n.onSelect}));return {name:ft.$key.SETTING_KEY,icon:'<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2295" width="24" height="24"><path d="M983.745542 312.673133a510.516437 510.516437 0 0 0-109.673817-162.745211A510.516437 510.516437 0 0 0 511.999823 0.000353 510.516437 510.516437 0 0 0 149.927922 149.927922 510.516437 510.516437 0 0 0 0.000353 511.999823a510.516437 510.516437 0 0 0 149.927569 362.071902A510.516437 510.516437 0 0 0 511.999823 1023.999294a510.516437 510.516437 0 0 0 362.071902-149.927569A510.516437 510.516437 0 0 0 1023.999294 511.999823c0-69.137584-13.488538-136.121238-40.253752-199.32669z m-62.852348 372.029408a443.779955 443.779955 0 0 1-95.05535 140.994061 441.908508 441.908508 0 0 1-313.73209 129.941935c-59.886283 0-118.042361-11.758333-172.667407-34.851274a443.779955 443.779955 0 0 1-141.029372-95.090661 441.908508 441.908508 0 0 1-129.941934-313.696779c0-59.886283 11.758333-118.042361 34.851274-172.667407a443.779955 443.779955 0 0 1 95.09066-141.029371 441.908508 441.908508 0 0 1 313.696779-129.941935c59.886283 0 118.077671 11.758333 172.667408 34.851274a443.779955 443.779955 0 0 1 141.064682 95.090661 441.908508 441.908508 0 0 1 129.941934 313.696778c0 59.886283-11.793643 118.042361-34.851274 172.667408zM388.413744 706.206519l317.792775-211.86185-317.792775-211.861849v423.723699z" p-id="2296"></path></svg>',html:"选集",selector:r,tooltip:e,onSelect:function(n){return typeof n.callback=="function"&&n.callback(n,n.index),n.html},mounted(n,i){n.setAttribute("data-plugin",ft.$key.SETTING_KEY);},playNext(){let n=this.selector.findIndex(i=>i.default);n!==-1&&n+1<this.selector.length-1?(n+=1,this.onSelect(this.selector[n])):console.warn(Ue+"当前播放列表已无下一集");}}},Gt={$event:{"video:ended":()=>{console.log(Ue+"自动连播启用，播放下一集"),ft.$data.art.setting.find(ft.$key.SETTING_KEY).playNext();}},bind(t){Object.keys(this.$event).forEach(e=>{t.on(e,this.$event[e]);});},unbind(t){Object.keys(this.$event).forEach(e=>{t.off(e,this.$event[e]);});}},ft={$flag:{isInitCSS:false},$key:{SETTING_KEY:"setting-ep-choose",PLUGIN_KEY:"plugin-ep-choose"},$data:{art:null},resetEnv(){Object.keys(this.$data).forEach(t=>{Reflect.set(this.$data,t,null);});},init(t,e){this.resetEnv(),this.$data.art=t,Gt.unbind(t),e.automaticBroadcast&&Gt.bind(t),this.$flag.isInitCSS||(this.$flag.isInitCSS=true,P(`
			.art-setting-panel[data-plugin="${ft.$key.SETTING_KEY}"] .art-setting-item .art-setting-item-left-text{
				max-width: 210px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			`)),this.update(e);},update(t){if(Gt.unbind(this.$data.art),t.EP_LIST==null||t.EP_LIST.length===0)return;let e=Mr(t);this.$data.art.setting.find(this.$key.SETTING_KEY)?this.$data.art.setting.update(e):this.$data.art.setting.add(e),t.automaticBroadcast&&Gt.bind(this.$data.art);}},Ge=t=>e=>(ft.init(e,t),{name:ft.$key.PLUGIN_KEY,update(r){ft.update(r);}}),We=ft.$key.PLUGIN_KEY,Rr={loading:'<img src="data:image/gif;base64,R0lGODlhWgBaALMOAHR0dAICAnd3dwEBAXh4eAMDAwkJCQ0NDQsLCxwcHA4ODggICHl5eQAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiYWE1ODg5ZS1jN2RmLTRmZmUtYjkzOS0wMmVkMTZhNmNjZDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0I2ODI2NjA1NzhGMTFFNkEyMEVDNzhEOUY1RkQxRjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0I2ODI2NUY1NzhGMTFFNkEyMEVDNzhEOUY1RkQxRjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjljYjgzNjY2LWYxYWUtNGMyZi1hMGEwLThhODJmYjIxM2U0MyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmU1NDE3YzFmLTllODAtMTE3OS04NjdiLWUyN2Y3M2VkMTZkOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAkKAA4ALAAAAABaAFoAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsz3Ta3HW+3bjuV7wbg/H7BYXEYu7YGCaVjuDr6Hwqjy2qEzphNlTaIZfi/ZqY2zHZW0KL1RVGeRS2wiXD+ad+x8jZHXx9GX9MO2GDG3mGGG52iX5ojUFVRWWXmJmam1IknJ+goXoioqWmnHSnqquUpDxVsLGys7S1tk6Uj4dIt72+v7K5IcKQF8R7r1asPC7HHs7L0Z3Ogclr0tES1BzH2NiLSMPWUcnAsd7gTboaxLnm77e527vq2uMm8FXy98/j8z77woFoxw9Fp2pI/mUgKBDMQXrp3iATqNBeD3rMIBaqN9BfwWsZ/7kBmpTwo0aLHIF4kchupIWAKftRLHgpDYeND7skq2jMY0NyjlgqwnlRZ8mfCDlCqyO0A1E7MJueBBrTnc0RG1lGXbfQZ0w8sFLEAhmRK0khKJtWConv6lZXaKlKNWpmyk6TJxVqoWvw7iu49fQyLOrJWitx4QTzQhnX4sTAeLsmjuyO8cWcLScjFan5K9kkl9KapSuG50vDlFtlkjtaNGvEkDeDXIlprsrOts+WjkzVUZmrkmN7zsu7dzkiK3OTRl78NO7WQenK7vkc9u7pt9UJrZz0+vDMwpVPGGuBPOfwrbO/8SbNu3j1oNkvc5/+s3T5oraYhn8f/6e1zfFHQZY+BPbiWkdIFajgLMs9ZgoX+1nmn0upYOfchPK95iCG+L034HHpAAAAh6V4OOAsQYh4hAAC3EJAMO3VV55WmLBYiwAv+pKiirzoE+CGDbAoZFu4eCGiiOdYCBgPQrK4wiVHXlDJk0w4mUUZAGgAXApNDtmMkVn+0KWVLhxppojFsHBmlGm26eabcMYp55x01mnnnXjSEAEAIfkECQoADgAsAAAAAFoAWgAABP/QyUmrvTjrzbv/YCiOZGmeaKqubOu+cCxbTT3fX23jfKbXDEZvSPk1gkSiMShM8pZMZ1HngjalEiPLip1qUdZr12Hcmbhj73eETlMY5QbpxxS7JfCyqH2v5NccfH1+cR6CgxVxchqHiIR6GGGOG38/kXRIkxyVR2SKn6CFbKGkpaangDmoq6ytdh2tsbKhmaqzpHW5uru8lbWGOr3Cw8TFvJghmMbLUVvBrxvImmq/sM+Jt9mWE9K2R2La4VRZ1yDdnuLaTefWQFfp4kjsgeXo38z4xMjz0fXK+QB37asHzB03gkqu8WPkD+GQgQbNNYxIY1zBRf0MLvQx8duFVBn/zXDU6DBkrXllqo3cdokkxYsnEaZUudJiRZceJVI8N5NmTZsHcfpcGXOnpBCcRJITCo2h0afuhlISFdTjxpY57RW91/QDJ3AKSzrNyi5XCl/vwr5sB6RqtToZPZhdalXs2LRrvXwEqgEuXXl2ia4Ty7Jq1qX0mO4pt7DbTDWJ6+aNnKkx48duu2oVchVrZcKXqW6+yzmw58GTR4eie/im5NZsP6emhUsqRNiUUeO2F4cJqGanRycLvfs3kqSmb0sNLnxvzyvIlyvXzPyqMD9oqU9fHLEzLwy7TJZOTfovdRF+y3d2ThZeNsDkBRt272r87vLz6Z+Kst71L/2x8GcapHsqBWTgMOZxB9uBDIbXnDcAAricaxFKeB42FUY4IYbpHJCAAgYYsEABoQRgYgA6nIiicaNw9VUQ/zCoIhMz6tKfBcco84MAAjTIQI0/npjjfZtspQiPKdTogJI4AgcGKDwKoIKQKprok5MpCFBGlEgmWSWTPPBoBJctBCkklmFyKaULZgYwVxJqwnDmhtN4hWadJtyJ55589unnn4AGKuigG0QAACH5BAkKAA4ALAAAAABaAFoAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsW009319t43ym1wxGb0j5NYJEojEoTPKWTOfzF5VOfi1o0yoxNlTaLdf7PXmr3CvZpE1bGORyKOx+x+Udev0CX3vaexhBcRyAgRmDXhp6U3ghfVQ+VEhDd5aXmJmajjmbnp+gOiShpKWWlCCmqqtHYn86TLGys7S1tre3kyKTuL2+v7mwrnnChxi6c8VqrFnKqc4OrNJ4yM9AYtPSy627xaLZzNHQr9fiNsC22ULVneWR6PC/k+zk3PQk8bHz48Tu/ErC7hXy9q9SwIKLCJZbgaVeooXW7CHsImpgww37ILaTqLGIIotG/zAe7NiPI7cKd1BJ8nMh48mISNidUomIUMuRLzfGdJYyloeHsG5eEyjSH8Qzsx5Byklx6MRjCl/y8olPFg2cNEvu7Jg0BVWPTkmC3MrUZ8VlYLAOG7sO4cWmnEa4zMrWHFOwJ5egmLu2qEm6dvMS1bkUcEKjd+FWOYNyh9bCfQ//7csr8Fm7hAevnAx14Z1thvECDd2Zs1DBmkgrhtwNMWBFS2ZGFs06mevIsnvOBl0bZluxcJEKWfqUt+bSZEP3nDBa9erjp5PvBtrKFS2HvQnbVW2LDxq20K+6BqeqeWuT5Mtnxx48/SdZ4RtDJO4+tb7i4nPm2/+L9/ms/AVYi3Z/tiVmTHx41Vefc/IpuOBupzmYHoMJZoPAAQ5SWEEtwkCGDgHBXOMhEwhuSEuHU+FCAIi48JIiJN/ttVxaQBjCXIxmKPKVjHHgiGOOYUAYERQGlbhRZUNc98KLSXT1woDGtLBjlFRWaeWVWGap5ZZcdumlChEAACH5BAkKAA4ALAAAAABaAFoAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsW009319t43ym1wxGbzj5AYXEoTGITOKWTOfzx2xKHb8W1Ho1NlTba8X7PW25YnJ55I2KLQw1mxp8Y+LyHL1uv6vXGmd9GkF5gXuDHIVkPoiJHYtGF4JEf5aXmJmZJZqdnp+GIaCjpJloHKWpqlCiOlWvsLGys7S1THStR7a7vL2xuCDAj5Oup4dHwxjCHsvJRcW5DXxYqzouzajQ1NXc1hLYG8Dd4zvgx9JI5ONC5o3I2+i+sOSR6NF8e/L6tXTtytr+POyr0k+bnncBbxR8d9AevGkpsjArlnAMQIPEdmTzthFdRQri/zA+k9SBUTiKIjviE/kHojuS/458HOlwCc02Ll9KzOgx5UmGVL6pefUBjxee9XL+dPiQ3Rk3RY3upJnU2MtpuPJBFSEViEWZPs9hNQhLhVSIC5lOBErWDccSZal2tRqTqbmpQgFB2prV1b0mdzHCBKlRrFOGJQ0GRjw4r966dWY2lQvZCivKhic3HIuYMGObjtUiPSx6KWevoz3vdHSVtNLWqo0JGwovnmnXdGkI9smo09bKmteqBafqd2rJyxYP7Vost+PIYYFjvsBcF5kqiZEh3925wq3mSGQJh949881UEmJtxh2Mu7pU5EubD/1+VPzX0unX10R0e2fw+nDTX5l0qXk30IG0xOacgtThtxeCaBGoW3nO+LffhRTWheF+Dk64IYcLqjZOACQGUEABJA6g4orVdNjgPDoAIKNWENYDwA8y/pIhITA2cCNONRIUI44A2MLCj17IyIIRSCp5h4sgIBmjjAAsqYaTPTBJZZUrXInlEFt+CQYZVDoRZgwzTunMCmGWuWYLW74p55x01mnnnXjmqecNEQAAIfkEBQoADgAsAAAAAFoAWgAABP/QyUmrvTjrzbv/YCiOZGmeaKqubOu+cCzP9Nrcdb7duO5XvBuD8fsFhcSi7jhMKh3BF7P5lBxb02HVelUdG9Qtt3vKiinfRjnYdJ6h31LW/XYw0qJvuE65x0FmfBdpah1zghh+ZBmHiIl4jIGOGYo8kTx7NYSbnJ2en5t5oKOkpaEhpqmqo1ofq6+wenQ7mG22t7i5uru8TWyzGr+9w8TFub+AtZODyq7NY7AwyM5IaLHXURPTHttw2NjW1dRgSd/m5NCt3M3Cxm3nrd0c0+3u9rr0z4bs+iP37/zErRMnz0hAdOPi9TNIcGGwg+qY9dg38WFDgRQRFtSWLWNFiRr/HV4KiTGcSCCEMOQrSesiQpO1gIH8Y1IhS4skX0KLKfNCpUXeckacB9FNmjYhhhytWe4kSJsvZWUC4evZSp1EXaqb09MDLo5au1pgks5JOxZIy6pNJmTtBFuXUCCbgkqZPKSWUH4UVU1Y3b4nO4IFY2JuzL/oNroNOpRtYqcq7QbWRzZcRi2KcWJ2ygZmIWiXiWQeufnm4M8pFz8VDXk1466lVI+VbFoz69o7SzXW+xh3ZMC+g07ZNHU2cKyhX3f4aYtQcd6lkWftLd1nrtzVmSpHHH03pbRv/bak7t228HOvuot1jR6ber7U2696z72p/Pm3s5N28q9/se2OReTffYC7AJjQemeMZpx8MSjI230Q6rdghPeV9xuF8lmYyC48kcMLhhJuiIsw9RDo3IitOQbJBsawwQMAANxymA2cwEjjFzZapyFiL8Lo4404iojFET4WCSSRPgRRJABSEJKjDksyGUOUP/pg5AxUPrnMllx26eWXYIYp5phkjhkBADs=">',state:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 80" width="100" height="100"><defs><path id="pid-64-svgo-a" d="M0 0h80v80H0z"/><path d="M52.546 8.014a3.998 3.998 0 014.222 3.077c.104.446.093.808.039 1.138a2.74 2.74 0 01-.312.881c-.073.132-.16.254-.246.376l-.257.366-.521.73c-.7.969-1.415 1.926-2.154 2.866l-.015.02a240.945 240.945 0 015.986.341l1.643.123.822.066.41.034.206.018.103.008.115.012c1.266.116 2.516.45 3.677.975a11.663 11.663 0 013.166 2.114c.931.87 1.719 1.895 2.321 3.022a11.595 11.595 0 011.224 3.613c.03.157.046.316.068.474l.015.119.013.112.022.206.085.822.159 1.646c.1 1.098.19 2.198.27 3.298.315 4.4.463 8.829.36 13.255a166.489 166.489 0 01-.843 13.213c-.012.127-.034.297-.053.454a7.589 7.589 0 01-.072.475l-.04.237-.05.236a11.762 11.762 0 01-.74 2.287 11.755 11.755 0 01-5.118 5.57 11.705 11.705 0 01-3.623 1.263c-.158.024-.316.052-.475.072l-.477.053-.821.071-1.644.134c-1.096.086-2.192.16-3.288.23a260.08 260.08 0 01-6.578.325c-8.772.324-17.546.22-26.313-.302a242.458 242.458 0 01-3.287-.22l-1.643-.129-.822-.069-.41-.035-.206-.018c-.068-.006-.133-.01-.218-.02a11.566 11.566 0 01-3.7-.992 11.732 11.732 0 01-5.497-5.178 11.73 11.73 0 01-1.215-3.627c-.024-.158-.051-.316-.067-.475l-.026-.238-.013-.119-.01-.103-.07-.823-.132-1.648a190.637 190.637 0 01-.22-3.298c-.256-4.399-.358-8.817-.258-13.233.099-4.412.372-8.811.788-13.197a11.65 11.65 0 013.039-6.835 11.585 11.585 0 016.572-3.563c.157-.023.312-.051.47-.07l.47-.05.82-.07 1.643-.13a228.493 228.493 0 016.647-.405l-.041-.05a88.145 88.145 0 01-2.154-2.867l-.52-.73-.258-.366c-.086-.122-.173-.244-.246-.376a2.74 2.74 0 01-.312-.881 2.808 2.808 0 01.04-1.138 3.998 3.998 0 014.22-3.077 2.8 2.8 0 011.093.313c.294.155.538.347.742.568.102.11.19.23.28.35l.27.359.532.72a88.059 88.059 0 012.06 2.936 73.036 73.036 0 011.929 3.03c.187.313.373.628.556.945 2.724-.047 5.447-.056 8.17-.038.748.006 1.496.015 2.244.026.18-.313.364-.624.549-.934a73.281 73.281 0 011.93-3.03 88.737 88.737 0 012.059-2.935l.533-.72.268-.359c.09-.12.179-.24.281-.35a2.8 2.8 0 011.834-.881zM30.13 34.631a4 4 0 00-.418 1.42 91.157 91.157 0 00-.446 9.128c0 2.828.121 5.656.364 8.483l.11 1.212a4 4 0 005.858 3.143c2.82-1.498 5.55-3.033 8.193-4.606a177.41 177.41 0 005.896-3.666l1.434-.942a4 4 0 00.047-6.632 137.703 137.703 0 00-7.377-4.708 146.88 146.88 0 00-6.879-3.849l-1.4-.725a4 4 0 00-5.382 1.742z" id="pid-64-svgo-d"/><filter x="-15.4%" y="-16.3%" width="130.9%" height="132.5%" filterUnits="objectBoundingBox" id="pid-64-svgo-c"><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feOffset in="SourceAlpha" result="shadowOffsetOuter2"/><feGaussianBlur stdDeviation="3.5" in="shadowOffsetOuter2" result="shadowBlurOuter2"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowBlurOuter2" result="shadowMatrixOuter2"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="shadowMatrixOuter2"/></feMerge></filter></defs><g fill="none" fill-rule="evenodd" opacity=".8"><mask id="pid-64-svgo-b" fill="#fff"><use xlink:href="#pid-64-svgo-a"/></mask><g mask="url(#pid-64-svgo-b)"><use fill="#000" filter="url(#pid-64-svgo-c)" xlink:href="#pid-64-svgo-d"/><use fill="#FFF" xlink:href="#pid-64-svgo-d"/></g></g></svg>',indicator:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="16" height="16">
        <path d="M16.118 3.667h.382a3.667 3.667 0 013.667 3.667v7.333a3.667 3.667 0 01-3.667 3.667h-11a3.667 3.667 0 01-3.667-3.667V7.333A3.667 3.667 0 015.5 3.666h.382L4.95 2.053a1.1 1.1 0 011.906-1.1l1.567 2.714h5.156L15.146.953a1.101 1.101 0 011.906 1.1l-.934 1.614z" fill="#333"></path>
        <path d="M5.561 5.194h10.878a2.2 2.2 0 012.2 2.2v7.211a2.2 2.2 0 01-2.2 2.2H5.561a2.2 2.2 0 01-2.2-2.2V7.394a2.2 2.2 0 012.2-2.2z" fill="#fff"></path>
        <path d="M6.967 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1zM15.033 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1z" fill="#333"></path>
    </svg>
        `,fullscreenWebOn:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="28" height="28" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_172"><rect width="88" height="88" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_172)"><g transform="matrix(1,0,0,1,44,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-14,-20 C-14,-20 -26,-20 -26,-20 C-27.049999237060547,-20 -27.920000076293945,-19.18000030517578 -27.989999771118164,-18.149999618530273 C-27.989999771118164,-18.149999618530273 -28,-18 -28,-18 C-28,-18 -28,-6 -28,-6 C-28,-4.949999809265137 -27.18000030517578,-4.079999923706055 -26.149999618530273,-4.010000228881836 C-26.149999618530273,-4.010000228881836 -26,-4 -26,-4 C-26,-4 -22,-4 -22,-4 C-20.950000762939453,-4 -20.079999923706055,-4.820000171661377 -20.010000228881836,-5.849999904632568 C-20.010000228881836,-5.849999904632568 -20,-6 -20,-6 C-20,-6 -20,-12 -20,-12 C-20,-12 -14,-12 -14,-12 C-12.949999809265137,-12 -12.079999923706055,-12.819999694824219 -12.010000228881836,-13.850000381469727 C-12.010000228881836,-13.850000381469727 -12,-14 -12,-14 C-12,-14 -12,-18 -12,-18 C-12,-19.049999237060547 -12.819999694824219,-19.920000076293945 -13.850000381469727,-19.989999771118164 C-13.850000381469727,-19.989999771118164 -14,-20 -14,-20z M26,-20 C26,-20 14,-20 14,-20 C12.949999809265137,-20 12.079999923706055,-19.18000030517578 12.010000228881836,-18.149999618530273 C12.010000228881836,-18.149999618530273 12,-18 12,-18 C12,-18 12,-14 12,-14 C12,-12.949999809265137 12.819999694824219,-12.079999923706055 13.850000381469727,-12.010000228881836 C13.850000381469727,-12.010000228881836 14,-12 14,-12 C14,-12 20,-12 20,-12 C20,-12 20,-6 20,-6 C20,-4.949999809265137 20.81999969482422,-4.079999923706055 21.850000381469727,-4.010000228881836 C21.850000381469727,-4.010000228881836 22,-4 22,-4 C22,-4 26,-4 26,-4 C27.049999237060547,-4 27.920000076293945,-4.820000171661377 27.989999771118164,-5.849999904632568 C27.989999771118164,-5.849999904632568 28,-6 28,-6 C28,-6 28,-18 28,-18 C28,-19.049999237060547 27.18000030517578,-19.920000076293945 26.149999618530273,-19.989999771118164 C26.149999618530273,-19.989999771118164 26,-20 26,-20z M-22,4 C-22,4 -26,4 -26,4 C-27.049999237060547,4 -27.920000076293945,4.820000171661377 -27.989999771118164,5.849999904632568 C-27.989999771118164,5.849999904632568 -28,6 -28,6 C-28,6 -28,18 -28,18 C-28,19.049999237060547 -27.18000030517578,19.920000076293945 -26.149999618530273,19.989999771118164 C-26.149999618530273,19.989999771118164 -26,20 -26,20 C-26,20 -14,20 -14,20 C-12.949999809265137,20 -12.079999923706055,19.18000030517578 -12.010000228881836,18.149999618530273 C-12.010000228881836,18.149999618530273 -12,18 -12,18 C-12,18 -12,14 -12,14 C-12,12.949999809265137 -12.819999694824219,12.079999923706055 -13.850000381469727,12.010000228881836 C-13.850000381469727,12.010000228881836 -14,12 -14,12 C-14,12 -20,12 -20,12 C-20,12 -20,6 -20,6 C-20,4.949999809265137 -20.81999969482422,4.079999923706055 -21.850000381469727,4.010000228881836 C-21.850000381469727,4.010000228881836 -22,4 -22,4z M26,4 C26,4 22,4 22,4 C20.950000762939453,4 20.079999923706055,4.820000171661377 20.010000228881836,5.849999904632568 C20.010000228881836,5.849999904632568 20,6 20,6 C20,6 20,12 20,12 C20,12 14,12 14,12 C12.949999809265137,12 12.079999923706055,12.819999694824219 12.010000228881836,13.850000381469727 C12.010000228881836,13.850000381469727 12,14 12,14 C12,14 12,18 12,18 C12,19.049999237060547 12.819999694824219,19.920000076293945 13.850000381469727,19.989999771118164 C13.850000381469727,19.989999771118164 14,20 14,20 C14,20 26,20 26,20 C27.049999237060547,20 27.920000076293945,19.18000030517578 27.989999771118164,18.149999618530273 C27.989999771118164,18.149999618530273 28,18 28,18 C28,18 28,6 28,6 C28,4.949999809265137 27.18000030517578,4.079999923706055 26.149999618530273,4.010000228881836 C26.149999618530273,4.010000228881836 26,4 26,4z M28,-28 C32.41999816894531,-28 36,-24.420000076293945 36,-20 C36,-20 36,20 36,20 C36,24.420000076293945 32.41999816894531,28 28,28 C28,28 -28,28 -28,28 C-32.41999816894531,28 -36,24.420000076293945 -36,20 C-36,20 -36,-20 -36,-20 C-36,-24.420000076293945 -32.41999816894531,-28 -28,-28 C-28,-28 28,-28 28,-28z"></path></g></g></g></svg>',fullscreenWebOff:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="28" height="28" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_177"><rect width="88" height="88" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_177)"><g transform="matrix(1,0,0,1,44,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-14,-20 C-14,-20 -18,-20 -18,-20 C-19.049999237060547,-20 -19.920000076293945,-19.18000030517578 -19.989999771118164,-18.149999618530273 C-19.989999771118164,-18.149999618530273 -20,-18 -20,-18 C-20,-18 -20,-12 -20,-12 C-20,-12 -26,-12 -26,-12 C-27.049999237060547,-12 -27.920000076293945,-11.180000305175781 -27.989999771118164,-10.149999618530273 C-27.989999771118164,-10.149999618530273 -28,-10 -28,-10 C-28,-10 -28,-6 -28,-6 C-28,-4.949999809265137 -27.18000030517578,-4.079999923706055 -26.149999618530273,-4.010000228881836 C-26.149999618530273,-4.010000228881836 -26,-4 -26,-4 C-26,-4 -14,-4 -14,-4 C-12.949999809265137,-4 -12.079999923706055,-4.820000171661377 -12.010000228881836,-5.849999904632568 C-12.010000228881836,-5.849999904632568 -12,-6 -12,-6 C-12,-6 -12,-18 -12,-18 C-12,-19.049999237060547 -12.819999694824219,-19.920000076293945 -13.850000381469727,-19.989999771118164 C-13.850000381469727,-19.989999771118164 -14,-20 -14,-20z M18,-20 C18,-20 14,-20 14,-20 C12.949999809265137,-20 12.079999923706055,-19.18000030517578 12.010000228881836,-18.149999618530273 C12.010000228881836,-18.149999618530273 12,-18 12,-18 C12,-18 12,-6 12,-6 C12,-4.949999809265137 12.819999694824219,-4.079999923706055 13.850000381469727,-4.010000228881836 C13.850000381469727,-4.010000228881836 14,-4 14,-4 C14,-4 26,-4 26,-4 C27.049999237060547,-4 27.920000076293945,-4.820000171661377 27.989999771118164,-5.849999904632568 C27.989999771118164,-5.849999904632568 28,-6 28,-6 C28,-6 28,-10 28,-10 C28,-11.050000190734863 27.18000030517578,-11.920000076293945 26.149999618530273,-11.989999771118164 C26.149999618530273,-11.989999771118164 26,-12 26,-12 C26,-12 20,-12 20,-12 C20,-12 20,-18 20,-18 C20,-19.049999237060547 19.18000030517578,-19.920000076293945 18.149999618530273,-19.989999771118164 C18.149999618530273,-19.989999771118164 18,-20 18,-20z M-14,4 C-14,4 -26,4 -26,4 C-27.049999237060547,4 -27.920000076293945,4.820000171661377 -27.989999771118164,5.849999904632568 C-27.989999771118164,5.849999904632568 -28,6 -28,6 C-28,6 -28,10 -28,10 C-28,11.050000190734863 -27.18000030517578,11.920000076293945 -26.149999618530273,11.989999771118164 C-26.149999618530273,11.989999771118164 -26,12 -26,12 C-26,12 -20,12 -20,12 C-20,12 -20,18 -20,18 C-20,19.049999237060547 -19.18000030517578,19.920000076293945 -18.149999618530273,19.989999771118164 C-18.149999618530273,19.989999771118164 -18,20 -18,20 C-18,20 -14,20 -14,20 C-12.949999809265137,20 -12.079999923706055,19.18000030517578 -12.010000228881836,18.149999618530273 C-12.010000228881836,18.149999618530273 -12,18 -12,18 C-12,18 -12,6 -12,6 C-12,4.949999809265137 -12.819999694824219,4.079999923706055 -13.850000381469727,4.010000228881836 C-13.850000381469727,4.010000228881836 -14,4 -14,4z M26,4 C26,4 14,4 14,4 C12.949999809265137,4 12.079999923706055,4.820000171661377 12.010000228881836,5.849999904632568 C12.010000228881836,5.849999904632568 12,6 12,6 C12,6 12,18 12,18 C12,19.049999237060547 12.819999694824219,19.920000076293945 13.850000381469727,19.989999771118164 C13.850000381469727,19.989999771118164 14,20 14,20 C14,20 18,20 18,20 C19.049999237060547,20 19.920000076293945,19.18000030517578 19.989999771118164,18.149999618530273 C19.989999771118164,18.149999618530273 20,18 20,18 C20,18 20,12 20,12 C20,12 26,12 26,12 C27.049999237060547,12 27.920000076293945,11.180000305175781 27.989999771118164,10.149999618530273 C27.989999771118164,10.149999618530273 28,10 28,10 C28,10 28,6 28,6 C28,4.949999809265137 27.18000030517578,4.079999923706055 26.149999618530273,4.010000228881836 C26.149999618530273,4.010000228881836 26,4 26,4z M28,-28 C32.41999816894531,-28 36,-24.420000076293945 36,-20 C36,-20 36,20 36,20 C36,24.420000076293945 32.41999816894531,28 28,28 C28,28 -28,28 -28,28 C-32.41999816894531,28 -36,24.420000076293945 -36,20 C-36,20 -36,-20 -36,-20 C-36,-24.420000076293945 -32.41999816894531,-28 -28,-28 C-28,-28 28,-28 28,-28z"></path></g></g></g></svg>'},Qe=()=>({container:"",url:"",volume:1,isLive:false,muted:false,autoplay:false,pip:false,autoMini:false,screenshot:false,setting:true,loop:false,flip:true,playbackRate:true,autoSize:false,aspectRatio:false,fullscreen:true,fullscreenWeb:true,subtitleOffset:true,miniProgressBar:true,mutex:false,backdrop:true,playsInline:false,autoPlayback:true,airplay:true,lock:true,fastForward:true,theme:x.theme,lang:navigator.language.toLowerCase(),moreVideoAttr:{crossOrigin:"anonymous"},icons:Rr}),Vt="[artplayer-plugin-quality]：",Mt="artplayer-plugin-quality",$t={AVC:7,HEVC:12,AV1:13};class Nr{constructor(e,r){rt(this,"art");rt(this,"from");rt(this,"$key",{SETTING_KEY:"video-playback-codeid"});this.art=e,this.from=r,this.updateSetting();}updateSetting(e){let r=this.getSetting();if(Array.isArray(e==null?void 0:e.acceptCodeIdList)){for(let i=0;i<r.selector.length;i++){const a=r.selector[i];e.acceptCodeIdList.findIndex(l=>l.toString()===a.value.toString())===-1&&(r.selector.splice(i,1),i--);}if(!r.selector.find(i=>i.default)&&r.selector.length)if(typeof(e==null?void 0:e.defaultCodeId)=="number"){let i=r.selector.findIndex(a=>a.value===e.defaultCodeId);i!==-1?(r.selector[i].default=true,r.tooltip=r.selector[i].html):(r.selector[0].default=true,r.tooltip=r.selector[0].html);}else r.selector[0].default=true,r.tooltip=r.selector[0].html;}this.art.setting.find(this.$key.SETTING_KEY)?this.art.setting.update(r):this.art.setting.add(r);}getSetting(){const e=this;let r=this.getUserChooseVideoCodingCode(),n=[{html:"AV1",value:$t.AV1},{html:"HEVC",value:$t.HEVC},{html:"AVC",value:$t.AVC}].map(o=>Object.assign(o,{default:o.value===r}));n.find(o=>o.default)||(n=n.map((o,l)=>(o.default=l===0,o)),console.warn(Vt+"没有找到用户选择对应的画质编码，将使用排序第一个的画质："+n[0].html));let a=n.find(o=>o.default);return {name:this.$key.SETTING_KEY,html:"播放策略",tooltip:a.html,icon:'<svg t="1727413004405" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3183" width="24" height="24"><path d="M170.666667 256h682.666666c23.466667 0 42.666667 19.2 42.666667 42.666667v170.666666h85.333333V256c0-46.933333-38.4-85.333333-85.333333-85.333333H128c-46.933333 0-85.333333 38.4-85.333333 85.333333v512c0 46.933333 38.4 85.333333 85.333333 85.333333h384v-85.333333H170.666667c-23.466667 0-42.666667-19.2-42.666667-42.666667V298.666667c0-23.466667 19.2-42.666667 42.666667-42.666667z" p-id="3184"></path><path d="M640 512L384 341.333333v341.333334zM968.96 786.346667c1.28-12.373333 1.706667-24.746667 0.426667-36.693334l45.653333-36.266666c4.266667-3.413333 5.12-8.96 2.56-13.653334l-43.946667-76.373333c-2.56-4.693333-8.106667-6.4-13.226666-4.693333l-54.613334 21.333333a146.773333 146.773333 0 0 0-32-17.92l-8.533333-58.026667a10.624 10.624 0 0 0-10.666667-9.386666h-88.32c-5.12 0-9.813333 3.84-10.666666 8.96l-8.533334 58.026666c-11.093333 4.693333-21.76 11.093333-31.573333 17.92l-54.613333-21.333333c-5.12-2.133333-10.666667 0-13.226667 4.693333l-43.946667 76.373334c-2.56 4.693333-1.706667 10.24 2.56 13.653333l45.653334 36.693333c-1.28 12.373333-1.706667 24.746667-0.426667 36.693334l-45.653333 36.266666c-4.266667 3.413333-5.12 8.96-2.56 13.653334l43.946666 76.373333c2.56 4.693333 8.106667 6.4 13.226667 4.693333l54.186667-21.333333c9.813333 7.253333 20.48 13.226667 32 17.92l8.533333 58.026667c0.853333 5.12 5.12 8.96 10.666667 8.96h88.32c5.12 0 9.813333-3.84 10.666666-8.96l8.533334-58.026667c11.093333-4.693333 21.76-11.093333 31.573333-17.92l54.613333 21.333333c5.12 2.133333 10.666667 0 13.226667-4.693333l43.946667-76.373333c2.56-4.693333 1.706667-10.24-2.56-13.653334l-45.226667-36.266666zM810.666667 832c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64z" p-id="3185"></path></svg>',selector:n,onSelect:function(o){let l=o.value;return e.setCurrentVideoCodingCode(l),e.onSettingSelect(l),o.html}}}onSettingSelect(e){}get storageVideoCodingKey(){return `bili-${this.from}-artplayer-videoCodingCode`}setCurrentVideoCodingCode(e){this.art.storage.set(this.storageVideoCodingKey,e);}getUserChooseVideoCodingCode(){let e=this.art.storage.get(this.storageVideoCodingKey)||$t.AV1;return Object.values($t).includes(e)||(console.error(Vt+"意外情况，选择的编码格式不是允许的编码，将强制使用默认(av1)，防止过滤掉的视频链接为空："+e),e=$t.AV1),e}}class Vr extends Nr{constructor(r,n){super(r,n);rt(this,"$data",{qualityOption:null,qualityOptionList:[],qualityCodeIdList:[],currentQualityCodecId:$t.AV1,currentSelectQualityInfo:null,currentQualityOption:null});}setCurrentQualityOption(r=null){this.$data.currentQualityOption=null,this.$data.currentQualityOption=r;}getStorageKey(r){return `artplayer-quality-${r}`}update(r){if(this.$data.qualityOption=null,this.$data.qualityOption=r,this.$data.qualityOptionList=[],this.$data.qualityCodeIdList=[],this.$data.currentSelectQualityInfo=null,this.$data.currentQualityCodecId=void 0,this.setCurrentQualityOption(),r.qualityList.length){let n=this.getQualityInfo();this.addControls(),super.updateSetting({acceptCodeIdList:this.$data.qualityCodeIdList,defaultCodeId:this.$data.currentQualityCodecId}),this.art.url=n.url;}else this.removeControls();}getControlsOption(){const r=this;let n=this.$data.qualityOptionList.map((a,o)=>{var l;return {default:o===((l=this.$data.currentSelectQualityInfo)==null?void 0:l.index),html:a.html,url:a.url,quality:a.quality,frameRate:a.frameRate,mimeType:a.mimeType,codecid:a.codecid,codecs:a.codecs,bandwidth:a.bandwidth}});return {name:Mt,index:10,position:"right",html:this.$data.currentSelectQualityInfo.html,selector:n,onSelect:function(a){let o=a;return console.log(Vt+"切换画质",o),r.art.switchQuality(o.url),r.art.storage.set(r.getStorageKey(r.$data.qualityOption.from),{quality:o.quality}),r.setCurrentQualityOption({html:o.html,url:o.url,quality:o.quality,frameRate:o.frameRate,mimeType:o.mimeType,codecid:o.codecid,codecs:o.codecs,bandwidth:o.bandwidth}),a.html}}}addControls(){if(this.isAddControls())this.updateQualityControls();else {let r=this.getControlsOption();this.art.controls.add(r);}}getQualityInfo(){let r=this.getUserChooseVideoCodingCode(),n=this.$data.qualityOption.qualityList.filter(p=>p.codecid===r);n.sort((p,c)=>c.quality-p.quality);const i={};for(let p=0;p<this.$data.qualityOption.qualityList.length;p++){const c=this.$data.qualityOption.qualityList[p],m=i[c.codecid]||[];m.push(c),i[c.codecid]=m;}n.length===0&&(n=Object.values(i)[0],this.$data.currentQualityCodecId=n[0].codecid,console.warn(Vt+"该画质："+r+"不存在，将使用第一个画质",n)),this.$data.qualityOptionList=[],this.$data.qualityOptionList=n,this.$data.qualityCodeIdList=Object.keys(i);let a=n[0];const o=this.getStorageKey(this.$data.qualityOption.from),l=this.art.storage.get(o);let s={index:0,html:a==null?void 0:a.html,url:a==null?void 0:a.url};if(this.setCurrentQualityOption(n[0]),l){const p=n.findIndex(c=>c.quality===l.quality);if(p!==-1){const c=n[p];s.index=p,s.url=c.url,s.html=c.html,this.setCurrentQualityOption(c);}else console.warn(Vt+"没有找到上次选的画质，使用当前默认第一个画质");}return this.$data.currentSelectQualityInfo=null,this.$data.currentSelectQualityInfo=s,s}updateQualityControls(){let r=this.getControlsOption();console.log(Vt+"更新画质切换面板信息",this.$data.qualityOptionList,this.$data.currentQualityOption),this.art.controls.update(r);}removeControls(){this.isAddControls()&&this.art.controls.remove(Mt);}isAddControls(){return Reflect.has(this.art.controls,Mt)}onSettingSelect(r){this.getQualityInfo(),this.updateQualityControls(),this.updateSetting({acceptCodeIdList:this.$data.qualityCodeIdList,defaultCodeId:this.$data.currentQualityCodecId}),this.$data.currentSelectQualityInfo&&(this.art.url=this.$data.currentSelectQualityInfo.url);}}const Ye=t=>e=>{let r=new Vr(e,t.from);return r.update(t),{name:Mt,update(n){r.update(n);},getCurrentQualityOption(){return r.$data.currentQualityOption}}},Yt={$data:{art:null},$key:{plugin_KEY:"artplayer-plugin-toast"},$flag:{isInitCSS:false},$config:{originToast:"art-layer-auto-playback",hideClassName:"art-toast-hide-opacity",prefix:"mplayer-toast-gm"},$el:{get $originPlayer(){return document.querySelector(".art-video-player .art-layers")}},toast(t){typeof t=="string"&&(t={text:t}),this.initCSS();let e=t.parent??this.$el.$originPlayer;if(!e)throw new TypeError("toast parent is null");this.mutationMPlayerOriginToast(e);let r=h.createElement("div",{"data-from":"gm"});if(h.addClass(r,this.$config.prefix),t.showCloseBtn){let o=h.createElement("div",{className:this.$config.prefix+"-close",innerHTML:`
                    <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="m571.733 512 268.8-268.8c17.067-17.067 17.067-42.667 0-59.733-17.066-17.067-42.666-17.067-59.733 0L512 452.267l-268.8-268.8c-17.067-17.067-42.667-17.067-59.733 0-17.067 17.066-17.067 42.666 0 59.733l268.8 268.8-268.8 268.8c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.534 19.2 12.8 29.866 12.8s21.334-4.266 29.867-12.8l268.8-268.8 268.8 268.8c8.533 8.534 19.2 12.8 29.867 12.8s21.333-4.266 29.866-12.8c17.067-17.066 17.067-42.666 0-59.733L571.733 512z"></path></svg>
                `});r.appendChild(o),h.on(o,"click",l=>{d.preventEvent(l),this.closeToast(r);},{capture:true});}let n=h.createElement("span",{className:this.$config.prefix+"-text",innerText:t.text});if(r.appendChild(n),typeof t.timeText=="string"&&t.timeText.trim()!=""){let o=h.createElement("span",{className:this.$config.prefix+"-time",innerText:t.timeText});r.appendChild(o);}if(typeof t.jumpText=="string"&&t.jumpText.trim()!=""){let o=h.createElement("span",{className:this.$config.prefix+"-jump",innerText:t.jumpText});r.appendChild(o),h.on(o,"click",l=>{typeof t.jumpClickCallback=="function"&&(d.preventEvent(l),t.jumpClickCallback(l));},{capture:true});}this.setTransitionendEvent(r,t);let i=typeof t.timeout=="number"&&!isNaN(t.timeout)?t.timeout:3500;e.appendChild(r);let a=setTimeout(()=>{this.closeToast(r);},i);return {$toast:r,timeoutId:a,close:()=>{clearTimeout(a),this.closeToast(r);}}},initCSS(){this.$flag.isInitCSS||(this.$flag.isInitCSS=true,P(`
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
		`),P(`
        .${this.$config.hideClassName}{
            opacity: 0;
            visibility: hidden;
        }
        `));},mutationMPlayerOriginToast(t){let e=this.$el.$originPlayer;e&&(e.hasAttribute("data-mutation")||(u.success("添加观察器，动态更新toast的位置"),e.setAttribute("data-mutation","gm"),d.mutationObserver(e,{config:{subtree:true,childList:true},immediate:true,callback:()=>{this.updatePageToastBottom();}})));},updatePageToastBottom(){let t=Array.from(document.querySelectorAll(`.${this.$config.prefix}`)).concat(Array.from(document.querySelectorAll(".".concat(this.$config.originToast))));t.length&&(t.length-1,t.forEach((e,r)=>{e.setAttribute("data-transition","move"),e.style.bottom=`calc( calc( var(--art-control-height) + var(--art-bottom-gap) ) * ${r+1} + 10px)`;}));},closeToast(t){t.classList.add(this.$config.hideClassName);},getTransitionendEventNameList(){return ["webkitTransitionEnd","mozTransitionEnd","MSTransitionEnd","otransitionend","transitionend"]},setTransitionendEvent(t,e){let r=this,n=this.getTransitionendEventNameList();h.on(t,n,function(i){let a=t.getAttribute("data-transition");if(t.classList.contains(r.$config.hideClassName)){typeof e=="object"&&typeof(e==null?void 0:e.closeCallback)=="function"&&e.closeCallback(),t.remove();return}if(a==="move"){t.removeAttribute("data-transition");return}},{capture:true});}},Je=t=>e=>(Yt.$data.art=e,{name:Yt.$key.plugin_KEY,toast(...r){return Yt.toast(...r)}}),zr=Yt.$key.plugin_KEY;class Pr{constructor(e,r){rt(this,"art");rt(this,"option");rt(this,"$key",{plugin_KEY:"artplayer-plugin-videoStatistics",setting_name:"video-statistics"});rt(this,"$data",{intervalId:void 0});this.art=e,this.option=r,this.addSetting();}addSetting(){this.art.setting.add({name:this.$key.setting_name,icon:"",html:"视频统计信息",mounted:e=>{let r=e.querySelector(".art-setting-item-left-icon");r.innerHTML=`
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M512.50142 958.397886c-119.320573 0-231.499491-46.465265-315.871087-130.837884C112.258737 743.188406 65.792449 631.010511 65.792449 511.688915c0-119.319549 46.466288-231.499491 130.837884-315.871087C281.002952 111.445208 393.180847 64.979944 512.50142 64.979944s231.499491 46.465265 315.871087 130.837884c84.372619 84.372619 130.837884 196.551538 130.837884 315.871087 0 119.321596-46.465265 231.499491-130.837884 315.871087C744.000911 911.932622 631.821993 958.397886 512.50142 958.397886zM512.50142 105.962334c-223.718271 0-405.726581 182.00831-405.726581 405.726581s182.00831 405.726581 405.726581 405.726581c223.718271 0 405.727605-182.00831 405.727605-405.726581S736.220714 105.962334 512.50142 105.962334z"></path>
                    <path d="M510.150886 775.953647c-18.107403 0-32.745798-14.678304-32.745798-32.785707L477.405087 452.191846c0-18.108426 14.638395-32.785707 32.745798-32.785707 18.107403 0 32.745798 14.678304 32.745798 32.785707l0 290.976094C542.896684 761.275343 528.258289 775.953647 510.150886 775.953647z"></path>
                    <path d="M511.357364 296.458969m-45.080731 0a44.054 44.054 0 1 0 90.161463 0 44.054 44.054 0 1 0-90.161463 0Z"></path>
                </svg>
                `.trim(),this.art.proxy(e,"click",n=>{n.stopPropagation(),n.stopImmediatePropagation(),n.preventDefault(),this.art.setting.show=false,this.isRegisterLayer()?this.updateLayer():this.showLayer(true);},{capture:true});}});}getLayerOption(){var m;let e,r,n,i={key:"Resolution:",value:`${this.art.video.videoWidth} x ${this.art.video.videoHeight}`},a,o,l,s=this.art.plugins[Mt];if(s){let g=s.getCurrentQualityOption();g&&(e={key:"Mime Type:",value:`${g.mimeType}`},g.codecs.trim()!==""&&(e.value+=`;codecs="${g.codecs}"`),g.frameRate.trim()!==""&&(i.value+="@"+g.frameRate),g.bandwidth&&(a={key:"Video DataRate:",value:(g.bandwidth/1024).toFixed(0)+"Kbps"}));}let p=this.art.plugins[oe];if(p){let g=p.getCurrentPlayConfig();g&&(r={key:"Audio Host:",value:new URL(g.url).host},n={key:"Audio Time:",value:p.getAudio().currentTime.toString()},e&&(e.value.trim()!==""&&(e.value+=", "),e.value+=`${g.mimeType}`,g.codecs.trim()!==""&&(e.value+=`;codecs="${g.codecs}"`)),o={key:"Audio DataRate:",value:(g.bandwidth/1024).toFixed(0)+"Kbps"},l={key:"Audio Duration:",value:p.getAudio().duration.toString()});}let c=[e,{key:"Player Type",value:"ArtPlayer@"+ie.version},i,a,o,{key:"Video Host:",value:new URL(this.art.url).host},r,{key:"Video Time:",value:this.art.currentTime.toString()},n,{key:"Video Duration:",value:this.art.duration.toString()},l];return c.push(...((m=this==null?void 0:this.option)==null?void 0:m.data)||[]),{name:this.$key.setting_name,html:`
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
                    ${c.filter(g=>g!=null).map(g=>`
                        <div class="art-player-video-statistics-panel-item">
                            <div class="art-player-video-statistics-panel-title">${g.key}</div>
                            <div class="art-player-video-statistics-panel-content">${g.value}</div>
                        </div>
                        `).join(`
`)}
                </div>
            </div>
            `,mounted:async g=>{let C=g.querySelector(".art-player-video-statistics-close svg");this.art.proxy(C,"click",B=>{B.stopPropagation(),B.stopImmediatePropagation(),B.preventDefault(),this.closeLayer();});}}}isRegisterLayer(){return this.$key.setting_name in this.art.layers}showLayer(e){clearInterval(this.$data.intervalId);let r=this.getLayerOption();this.art.layers.add(r),e&&(this.unbindUpdateLayerEvent(),this.bindUpdateLayerEvent());}updateLayer(){let e=this.getLayerOption();this.art.layers.update(e);}bindUpdateLayerEvent(){this.art.on("play",this.updateLayerEvent_interval,this),this.art.on("restart",this.updateLayerEvent_once,this),this.art.on("m4sAudio:loadedmetadata",this.updateLayerEvent_once,this),this.art.on("pause",this.updateLayerEvent_clear_interval,this),this.art.on("video:ended",this.updateLayerEvent_clear_interval,this),this.art.playing&&this.updateLayerEvent_interval();}unbindUpdateLayerEvent(){this.art.off("play",this.updateLayerEvent_interval),this.art.off("restart",this.updateLayerEvent_once),this.art.off("m4sAudio:loadedmetadata",this.updateLayerEvent_once),this.art.off("pause",this.updateLayerEvent_clear_interval),this.art.off("video:ended",this.updateLayerEvent_clear_interval);}updateLayerEvent_interval(){clearInterval(this.$data.intervalId),this.$data.intervalId=setInterval(()=>{this.updateLayer();},1500);}updateLayerEvent_once(){this.updateLayer();}updateLayerEvent_clear_interval(){clearInterval(this.$data.intervalId);}closeLayer(){clearInterval(this.$data.intervalId),this.art.layers.remove(this.$key.setting_name),this.unbindUpdateLayerEvent();}update(e){this.option=e;}}const Ke=t=>e=>{let r=new Pr(e,t);return {name:r.$key.plugin_KEY,update(n){r.update(n);}}},Ze=()=>({heatmap:false,color:"#FFFFFF",mode:0,mount:void 0,width:800,points:[],filter:t=>t.text.length<=100,beforeVisible:()=>true,emitter:false,maxLength:50,lockTime:3,theme:d.isThemeDark()?"dark":"light"}),ge=t=>{let e=t.epList||[];if(e.length===1){let r=e[0];return r.pages.map(n=>({isDefault:n.cid===t.cid,title:n.part,aid:t.aid,bvid:t.bvid,cid:n.cid,onSelect(i,a){r.cid=n.cid,ne.updateArtPlayerVideoInfo({aid:t.aid,bvid:t.bvid,cid:n.cid,pic:n.first_frame||"",title:n.part,epList:t.epList||[]},true);}}))}else return e.map(r=>({isDefault:r.aid===t.aid&&r.cid===t.cid,title:qe(r.title),aid:r.aid,bvid:r.bvid,cid:r.cid,onSelect(n,i){ne.updateArtPlayerVideoInfo({aid:r.aid,bvid:r.bvid,cid:r.cid,pic:r.arc.pic,title:r.title,epList:t.epList||[]},true);}}))},St={$data:{art:null,currentOption:null},resetEnv(t){t&&Reflect.set(this.$data,"art",null),Reflect.set(this.$data,"currentOption",null);},async init(t){this.resetEnv(true),this.$data.currentOption=t;const e="artplayer-video-danmaku-option",r=new Ne(e),n=r.getLocalArtDanmakuOption(),i={...Qe(),container:t.container,poster:t.poster,settings:[],plugins:[Je(),Ye({from:"video",qualityList:t.quality})]};return i.type="mp4",f.getValue("artplayer-plugin-video-danmaku-enable")&&i.plugins.push(_e({...Ze(),danmuku:t.danmukuUrl,speed:n.speed,margin:n.margin,opacity:n.opacity,modes:n.modes,fontSize:n.fontSize,antiOverlap:n.antiOverlap,synchronousPlayback:n.synchronousPlayback,visible:n.visible,beforeEmit(a){return new Promise(o=>{console.log(a),setTimeout(()=>{o(true);},1e3);})}})),f.getValue("artplayer-plugin-video-m4sAudioSupport-enable")&&i.plugins.push(Ve({from:"video",audioList:t.audioList||[]})),f.getValue("artplayer-plugin-video-epChoose-enable")&&i.plugins.push(Ge({EP_LIST:ge(t),automaticBroadcast:true})),f.getValue("artplayer-plugin-video-cc-subtitle-enable")&&i.plugins.push(He({from:"video",cid:t.cid,aid:t.aid,bvid:t.bvid})),f.getValue("artplayer-plugin-video-toptoolbar-enable")&&i.plugins.push(ze({onlineInfoParams:{aid:t.aid,cid:t.cid,bvid:t.bvid},title:t.videoTitle,showWrap:true,showTitle:true,showOnlineTotal:true})),f.getValue("artplayer-plugin-video-statistics-enable")&&i.plugins.push(Ke({data:[]})),f.getValue("bili-video-playerAutoPlayVideo")&&(i.muted=true,i.autoplay=true),this.$data.art=new ie(i),r.onConfigChange(this.$data.art),this.$data.art},async update(t,e){this.resetEnv(false),this.$data.currentOption=e,u.info("更新新的播放信息",e),t.pause(),u.info("暂停视频"),t.currentTime=0,u.info("重置播放进度"),this.updatePluginInfo(t,e),t.play(),u.info("播放");},updatePluginInfo(t,e){if(t.plugins[Mt].update({from:"video",qualityList:e.quality}),u.info("更新画质",e.quality),f.getValue("artplayer-plugin-video-danmaku-enable")&&(t.plugins.artplayerPluginDanmuku.config({danmuku:e.danmukuUrl}),t.plugins.artplayerPluginDanmuku.load(),u.info("更新弹幕姬",e.danmukuUrl)),f.getValue("artplayer-plugin-video-m4sAudioSupport-enable")&&(t.plugins[oe].update({from:"video",audioList:e.audioList||[]}),u.info("更新音频",e.audioList)),f.getValue("artplayer-plugin-video-epChoose-enable")&&(t.plugins[We].update({EP_LIST:ge(e),automaticBroadcast:true}),u.info("更新选集信息",e.epList)),f.getValue("artplayer-plugin-video-cc-subtitle-enable")){let n=t.plugins[je];const i={from:"video",aid:e.aid,bvid:e.bvid,cid:e.cid};n.update(i),u.info("更新字幕",i);}if(f.getValue("artplayer-plugin-video-toptoolbar-enable")){let n=t.plugins[Pe];const i={showRight:true,showRightFollow:true,showWrap:true,showTitle:true,showOnlineTotal:true,title:e.videoTitle,onlineInfoParams:{aid:e.aid,cid:e.cid,bvid:e.bvid}};n.update(i),u.info("更新顶部标题",i);}}};function Or(t){let e=[];return t.video.forEach(r=>{if(!t.accept_quality.includes(r.id))return;let n=t.support_formats.find(o=>o.quality===r.id),i=at.findBetterCDN(r.base_url,r.baseUrl,r.backup_url,r.backupUrl);i=at.replaceVideoCDN(i);let a=n==null?void 0:n.new_description;e.push({name:a,url:i,type:r.mimeType||r.mime_type,id:r.id,quality:r.id,vip:false,codecid:r.codecid,codecs:r.codecs,frameRate:r.frameRate||r.frame_rate,bandwidth:r.bandwidth});}),e}const Xe=async t=>{var a,o;const e=[];let r=[];if(f.getValue("bili-video-playType","mp4")==="mp4"){const l=await re.playUrl({bvid:t.bvid,cid:t.cid,fnval:1,fnver:0,fourk:1,high_quality:1,qn:127,setPlatformHTML5:true});if(u.info(l),!l)return;let s=l.durl[0],p=l.support_formats.find(g=>g.quality===l.quality),c=at.findBetterCDN(s.url,s.url||((a=s.backup_url)==null?void 0:a[0])),m=p==null?void 0:p.new_description;r.push({name:m,url:c,type:"audio/mp4",id:l.quality,codecid:l.video_codecid,quality:l.quality,vip:false,codecs:"",frameRate:"",bandwidth:0});}else {const l=await re.playUrl({bvid:t.bvid,cid:t.cid,fnval:3088,fnver:0,fourk:1,high_quality:1,qn:127,setPlatformHTML5:false});if(u.info(l),!l)return;l.dash.audio.forEach(s=>{let p=at.findBetterCDN(s.baseUrl,s.base_url,s.baseUrl,s.backup_url);f.getValue("bili-video-uposServerSelect-applyAudio")&&(p=at.replaceVideoCDN(p)),e.push({url:p,id:s.id,text:Re[s.id]||"",codecs:s.codecs,mimeType:s.mimeType,bandwidth:s.bandwidth,size:0});}),e.sort((s,p)=>p.id-s.id),u.info("ArtPlayer: 获取的音频信息",e),r=[...Or({accept_quality:l.accept_quality,support_formats:l.support_formats,video:l.dash.video})],u.info("ArtPlayer: 获取的视频画质信息",r);}const n=r.map((l,s)=>({quality:l.quality,html:l.name,url:l.url,codecid:l.codecid,codecs:l.codecs,frameRate:l.frameRate,mimeType:l.type,bandwidth:l.bandwidth})),i={container:null,epList:t.epList,audioUrl:null,url:"",poster:t.pic,aid:t.aid,bvid:t.bvid,cid:t.cid,videoTitle:t.title,danmukuUrl:`https://api.bilibili.com/x/v1/dm/list.so?oid=${t.cid}`,quality:n};return i.url=(o=r==null?void 0:r[0])==null?void 0:o.url,e.length&&(i.audioList=e.map((l,s)=>({isDefault:s===0,url:l.url,soundQualityCode:l.id,soundQualityCodeText:l.text,codecs:l.codecs,mimeType:l.mimeType,bandwidth:l.bandwidth,size:l.size}))),i},ne={$data:{art:null},init(){f.execMenu("bili-video-enableArtPlayer",()=>{this.coverVideoPlayer();});},coverVideoPlayer(){if(K("#artplayer"))u.warn("已使用ArtPlayer覆盖原播放器，更新播放信息");else {P(`
            /* 隐藏原本的播放器 */
			${x.className.video} .m-video-player .player-container,
			${x.className.mVideo} .m-video-player .player-container{
				display: none !important;
			}
			
			${ae}
			
			${Me}

			`);let t=f.getValue("bili-video-artplayer-controlsPadding-left-right",0);t!=0&&P(`
				@media (orientation: landscape) {
					.art-video-player .art-layers .art-layer-top-wrap,
					/* 底部 */
					.art-video-player .art-bottom{
						padding-left: ${t}px !important;
						padding-right: ${t}px !important;
					}
					
					/* 锁定图标 */
					.art-video-player  .art-layer-lock{
						--art-lock-left-size: ${t}px;
					}
				}
				`);}this.updateArtPlayerVideoInfo();},updateArtPlayerVideoInfo(t,e){let r=this,n=()=>K(x.className.video+" .m-video-player")||K(x.className.mVideo+" .m-video-player");T.waitVuePropToSet(n,{msg:"等待m-video-player加载完成",check(i){var a,o,l,s,p,c;return !e&&St.$data.currentOption!=null?(St.$data.art.pause(),typeof((a=i==null?void 0:i.info)==null?void 0:a.aid)=="number"&&St.$data.currentOption.aid!==i.info.aid&&typeof((o=i==null?void 0:i.info)==null?void 0:o.bvid)=="string"&&typeof((l=i==null?void 0:i.info)==null?void 0:l.cid)=="number"):typeof((s=i==null?void 0:i.info)==null?void 0:s.aid)=="number"&&typeof((p=i==null?void 0:i.info)==null?void 0:p.bvid)=="string"&&typeof((c=i==null?void 0:i.info)==null?void 0:c.cid)=="number"},async set(i){var L,M;const a=n();let{aid:o,bvid:l,cid:s,pic:p,title:c}=i;o=o||i.info.aid,l=l||i.info.bvid,s=s||i.info.cid,p=p||i.info.pic,c=c||i.info.title;let m=[];const g=K(".m-video-season-new"),C=K(".m-video-part-new");if(g&&T.getVue(g)){let $=T.getVue(g),v=$==null?void 0:$.videoList;Array.isArray(v)&&(m=v);}else if(C&&T.getVue(C)){let $=T.getVue(C),v=$==null?void 0:$.info,A=$==null?void 0:$.p,N=($==null?void 0:$.pages)||((L=$==null?void 0:$.info)==null?void 0:L.pages);Array.isArray(N)&&m.push({season_id:0,section_id:0,id:0,aid:o||v.aid,bvid:l||v.bvid,cid:s||v.cid,title:c||v.title,attribute:0,arc:{aid:o||v.aid,videos:v==null?void 0:v.videos,type_id:0,type_name:"",copyright:v==null?void 0:v.copyright,pic:v==null?void 0:v.pic,title:v==null?void 0:v.title,pubdate:v==null?void 0:v.pubdate,ctime:v==null?void 0:v.ctime,desc:v==null?void 0:v.desc,state:v==null?void 0:v.state,duration:v==null?void 0:v.duration,rights:v==null?void 0:v.rights,author:v==null?void 0:v.owner,stat:v==null?void 0:v.stat,dynamic:v==null?void 0:v.dynamic,dimension:v==null?void 0:v.dimension,desc_v2:v==null?void 0:v.desc_v2,is_chargeable_season:v==null?void 0:v.is_chargeable_season,is_blooper:v==null?void 0:v.is_blooper,enable_vt:v==null?void 0:v.enable_vt,vt_display:v==null?void 0:v.vt_display},page:(M=v==null?void 0:v.pages)==null?void 0:M[A],pages:v==null?void 0:v.pages});}t==null&&(t={aid:o,bvid:l,cid:s,pic:p,title:c,epList:m}),u.info(`视频播放信息 => aid：${o} bvid：${l} cid：${s}`);const B=await Xe(t);if(B==null)return;let _=K("#artplayer");if(!_){const $=h.createElement("div",{className:"artplayer-container",innerHTML:`
								<div id="artplayer"></div>
							`});_=$.querySelector("#artplayer"),h.append(a,$);}if(B.container=_,r.$data.art==null){let $=await St.init(B);if($)r.$data.art=$;else return;r.$data.art.volume=1,r.$data.art.once("ready",()=>{f.execMenu("bili-video-playerAutoPlayVideoFullScreen",async()=>{u.info("自动进入全屏"),r.$data.art.fullscreen=true,r.$data.art.once("fullscreenError",()=>{u.warn("未成功进入全屏，需要用户交互操作，使用网页全屏代替"),r.$data.art.fullscreenWeb=true;});});});}else await St.update(r.$data.art,B);a.style.paddingTop="";}});}},be=async t=>{async function e(r){const{img_url:n,sub_url:i}=await fetch("https://api.bilibili.com/x/web-interface/nav").then(g=>g.json()).then(g=>g.data.wbi_img),a=n.slice(n.lastIndexOf("/")+1,n.lastIndexOf(".")),o=i.slice(i.lastIndexOf("/")+1,i.lastIndexOf(".")),l=a+o,p=[46,47,18,2,53,8,23,32,15,50,10,31,58,3,45,35,27,43,5,49,33,9,42,19,29,28,14,39,12,38,41,13,37,48,7,16,24,55,40,61,26,17,0,1,60,51,30,4,22,25,54,21,56,59,6,63,57,62,11,36,20,34,44,52].map(g=>l[g]).join("").slice(0,32),c=Object.keys(r).sort().map(g=>{const C=r[g].toString().replace(/[!'()*]/g,"");return `${encodeURIComponent(g)}=${encodeURIComponent(C)}`}).join("&"),m=Fe(c+p);return c+"&w_rid="+m}return await e(t)};function Ir(t){const e=23442827791579n,r=2251799813685247n,n=58n,a=["B","V",1,"","","","","","","","",""].length,o="FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf".split(""),l=[0,1,2,9,7,5,6,4,8,3,10,11];let s=0n;for(let p=3;p<a;p++)s=s*n+BigInt(o.indexOf(t[l[p]]));return `${s&r^e}`}const Hr=function(){const t=typeof et>"u"?window:et,e=/https:\/\/m\.bilibili\.com\/video\/.*/,r=/https:\/\/m.bilibili.com\/dynamic\/\d+/,n=/https:\/\/m.bilibili.com\/opus\/\d+/;let i,a,o,l;const s={LATEST:0,HOT:2};let p,c,m;return r.test(t.location.href)&&I(),q(),{init:g};async function g(y){i=a=o=void 0,m={},p=s.HOT,C(y),l=y.querySelector(".reply-list"),await new Promise(E=>{const D=setInterval(async()=>{var F,S,R,j,Y,gt,mt,J,bt,Ft;if(e.test(t.location.href)){const it=t.location.pathname.replace("/video/","").replace("/","");it.startsWith("av")&&(i=it.slice(2)),it.startsWith("BV")&&(i=Ir(it)),o=1;}else r.test(t.location.href)?(i=(F=t.dynamicDetail)==null?void 0:F.oid,o=(S=t.dynamicDetail)==null?void 0:S.commentType):n.test(t.location.href)&&(i=(gt=(Y=(j=(R=t==null?void 0:t.__INITIAL_STATE__)==null?void 0:R.opus)==null?void 0:j.detail)==null?void 0:Y.basic)==null?void 0:gt.comment_id_str,o=(Ft=(bt=(J=(mt=t==null?void 0:t.__INITIAL_STATE__)==null?void 0:mt.opus)==null?void 0:J.detail)==null?void 0:bt.basic)==null?void 0:Ft.comment_type);i&&o&&(clearInterval(D),E());},200);}),await B(y),await _(y);}function C(y){y.innerHTML=`
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
      `;}async function B(y){const E=y.querySelector(".comment-container .reply-header .nav-sort"),D=E.querySelector(".hot-sort"),F=E.querySelector(".time-sort");E.classList.add("hot"),E.classList.remove("time"),D.addEventListener("click",S=>{S.stopPropagation(),S.preventDefault(),p!==s.HOT&&(p=s.HOT,E.classList.add("hot"),E.classList.remove("time"),y.scrollTo(0,0),_(y));}),F.addEventListener("click",S=>{S.stopPropagation(),S.preventDefault(),p!==s.LATEST&&(p=s.LATEST,E.classList.add("time"),E.classList.remove("hot"),y.scrollTo(0,0),_(y));});}async function _(y){var R,j,Y,gt,mt;c={1:'{"offset":""}'};const{data:E,code:D}=await L(1);if(a=E.upper.mid,l.innerHTML="",m={},(R=document.querySelector(".comment-container .reply-warp .no-more-replies-info"))==null||R.remove(),(j=document.querySelector(".comment-container .reply-warp .anchor-for-loading"))==null||j.remove(),D!==0){const J=D===12061?"UP主已关闭评论区":"无法从API获取评论数据";l.innerHTML=`<p style="padding: 100px 0; text-align: center; color: #999;">${J}</p>`;return}const F=y.querySelector(".comment-container .reply-header .total-reply"),S=parseInt((Y=E==null?void 0:E.cursor)==null?void 0:Y.all_count)||0;if(F.textContent=S,(mt=(gt=E==null?void 0:E.cursor)==null?void 0:gt.name)!=null&&mt.includes("精选")){const J=y.querySelector(".comment-container .reply-header .nav-sort");J.innerHTML='<div class="selected-sort">精选评论</div>';}if(E.top_replies&&E.top_replies.length!==0){const J=E.top_replies[0];M(J,true);}if(E.replies.length===0){const J=document.createElement("p");J.classList.add("no-more-replies-info"),J.style="padding-bottom: 100px; text-align: center; color: #999;",J.textContent="没有更多评论",document.querySelector(".comment-container .reply-warp").appendChild(J);return}for(const J of E.replies)M(J);G();}async function L(y){const E={oid:i,type:o,wts:parseInt(Date.now()/1e3)};if(p===s.HOT)return E.mode=3,E.pagination_str=`{"offset":"{\\"type\\":1,\\"data\\":{\\"pn\\":${y}}}"}`,await fetch(`https://api.bilibili.com/x/v2/reply/wbi/main?${await be(E)}`).then(D=>D.json());if(p===s.LATEST){E.mode=2,E.pagination_str=c[y];const D=await fetch(`https://api.bilibili.com/x/v2/reply/wbi/main?${await be(E)}`).then(F=>F.json());if(D.code===0){const F=D.data.cursor.pagination_reply.next_offset,S=F?JSON.parse(F).Data.cursor:-1;c[y+1]=`{"offset":"{\\"type\\":3,\\"data\\":{\\"cursor\\":${S}}}"}`;}else D.data=D.data||{};return D}}function M(y,E){if(m[y.rpid_str])return;const D=document.createElement("div");D.classList.add("reply-item"),D.innerHTML=`
        <div class="root-reply-container">
          <a class="root-reply-avatar" href="https://space.bilibili.com/${y.mid}" target="_blank" data-user-id="${y.mid}" data-root-reply-id="${y.rpid}">
            <div class="avatar">
              <div class="bili-avatar">
                <img class="bili-avatar-img bili-avatar-face bili-avatar-img-radius" data-src="${y.member.avatar}" alt="" src="${y.member.avatar}">
                <span class="bili-avatar-icon bili-avatar-right-icon bili-avatar-size-40"></span>
              </div>
            </div>
          </a>
          <div class="content-warp">
            <div class="user-info">
              <a class="user-name" href="https://space.bilibili.com/${y.mid}" target="_blank" data-user-id="${y.mid}" data-root-reply-id="${y.rpid}" style="color: ${y.member.vip.nickname_color?y.member.vip.nickname_color:"#61666d"}">${y.member.uname}</a>
              <span style="height: 14px; padding: 0 2px; margin-right: 4px; display: flex; align-items: center; font-size: 10px; color: white; border-radius: 2px; background-color: ${v(y.member.level_info.current_level)};">LV${y.member.level_info.current_level}</span>
              ${a===y.mid?'<i class="svg-icon up-web up-icon" style="width: 20px; height: 24px; transform: scale(1.03);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="4" width="24" height="16" rx="2" fill="#FF6699"></rect><path d="M5.7 8.36V12.79C5.7 13.72 5.96 14.43 6.49 14.93C6.99 15.4 7.72 15.64 8.67 15.64C9.61 15.64 10.34 15.4 10.86 14.92C11.38 14.43 11.64 13.72 11.64 12.79V8.36H10.47V12.81C10.47 13.43 10.32 13.88 10.04 14.18C9.75 14.47 9.29 14.62 8.67 14.62C8.04 14.62 7.58 14.47 7.3 14.18C7.01 13.88 6.87 13.43 6.87 12.81V8.36H5.7ZM13.0438 8.36V15.5H14.2138V12.76H15.9838C17.7238 12.76 18.5938 12.02 18.5938 10.55C18.5938 9.09 17.7238 8.36 16.0038 8.36H13.0438ZM14.2138 9.36H15.9138C16.4238 9.36 16.8038 9.45 17.0438 9.64C17.2838 9.82 17.4138 10.12 17.4138 10.55C17.4138 10.98 17.2938 11.29 17.0538 11.48C16.8138 11.66 16.4338 11.76 15.9138 11.76H14.2138V9.36Z" fill="white"></path></svg></i>':""}
            </div>
            <div class="root-reply">
              <span class="reply-content-container root-reply" style="padding-bottom: 8px;">
                <span class="reply-content">${E?'<span class="top-icon" style="top: -1px;">置顶</span>':""}${y.content.pictures?'<div class="note-prefix" style="transform: translateY(-1px);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="#BBBBBB"><path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25Zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25ZM3.5 6.25a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Zm.75 2.25h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5Z"></path></svg><div style="margin-left: 3px;">笔记</div></div>':""}${A(y.content)}</span>
              </span>
              ${y.content.pictures?`
                <div class="image-exhibition" style="margin-top: 0; margin-bottom: 8px;">
                  <div class="preview-image-container" style="display: flex; width: 300px;">
                    ${N(y.content.pictures)}
                  </div>
                </div>
                `:""}
              <div class="reply-info">
                <span class="reply-time" style="margin-right: 20px;">${$(y.ctime)}</span>
                <span class="reply-like">
                  <i class="svg-icon like use-color like-icon" style="width: 16px; height: 16px;"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3323" width="200" height="200"><path d="M594.176 151.168a34.048 34.048 0 0 0-29.184 10.816c-11.264 13.184-15.872 24.064-21.504 40.064l-1.92 5.632c-5.632 16.128-12.8 36.864-27.648 63.232-25.408 44.928-50.304 74.432-86.208 97.024-23.04 14.528-43.648 26.368-65.024 32.576v419.648a4569.408 4569.408 0 0 0 339.072-4.672c38.72-2.048 72-21.12 88.96-52.032 21.504-39.36 47.168-95.744 63.552-163.008a782.72 782.72 0 0 0 22.528-163.008c0.448-16.832-13.44-32.256-35.328-32.256h-197.312a32 32 0 0 1-28.608-46.336l0.192-0.32 0.64-1.344 2.56-5.504c2.112-4.8 5.12-11.776 8.32-20.16 6.592-17.088 13.568-39.04 16.768-60.416 4.992-33.344 3.776-60.16-9.344-84.992-14.08-26.688-30.016-33.728-40.512-34.944zM691.84 341.12h149.568c52.736 0 100.864 40.192 99.328 98.048a845.888 845.888 0 0 1-24.32 176.384 742.336 742.336 0 0 1-69.632 178.56c-29.184 53.44-84.48 82.304-141.76 85.248-55.68 2.88-138.304 5.952-235.712 5.952-96 0-183.552-3.008-244.672-5.76-66.432-3.136-123.392-51.392-131.008-119.872a1380.672 1380.672 0 0 1-0.768-296.704c7.68-72.768 70.4-121.792 140.032-121.792h97.728c13.76 0 28.16-5.504 62.976-27.456 24.064-15.104 42.432-35.2 64.512-74.24 11.904-21.184 17.408-36.928 22.912-52.8l2.048-5.888c6.656-18.88 14.4-38.4 33.28-60.416a97.984 97.984 0 0 1 85.12-32.768c35.264 4.096 67.776 26.88 89.792 68.608 22.208 42.176 21.888 84.864 16 124.352a342.464 342.464 0 0 1-15.424 60.544z m-393.216 477.248V405.184H232.96c-40.448 0-72.448 27.712-76.352 64.512a1318.912 1318.912 0 0 0 0.64 282.88c3.904 34.752 32.96 61.248 70.4 62.976 20.8 0.96 44.8 1.92 71.04 2.816z" p-id="3324" fill="#9499a0"></path></svg></i>
                  <span>${y.like}</span>
                </span>
              </div>
              <div class="reply-tag-list">
                ${y.card_label?y.card_label.reduce((j,Y)=>j+`<span class="reply-tag-item ${Y.text_content==="热评"?"reply-tag-hot":""} ${Y.text_content==="UP主觉得很赞"?"reply-tag-liked":""}" style="font-size: 12px; background-color: ${Y.label_color_day}; color: ${Y.text_color_day};">${Y.text_content}</span>`,""):""}
              </div>
            </div>
          </div>
        </div>
        <div class="sub-reply-container">
          <div class="sub-reply-list">
            ${U(y.replies)}
            ${y.rcount>y.replies.length?`
              <div class="view-more" style="padding-left: 8px; font-size: 13px; color: #9499A0;">
                <div class="view-more-default">
                  <span>共${y.rcount}条回复, </span>
                  <span class="view-more-btn" style="cursor: pointer;">点击查看</span>
                </div>
              </div>
              `:""}
          </div>
        </div>
      `,l.appendChild(D),m[y.rpid_str]=true;const F=D.querySelector(".preview-image-container");F&&new lr(F,{title:false,toolbar:false,tooltip:false,keyboard:false});const S=D.querySelector(".sub-reply-list"),R=D.querySelector(".view-more-btn");R&&R.addEventListener("click",()=>Q(y.rpid,S,y.rcount,1));}function $(y){const E=new Date(y*1e3),D=E.getFullYear(),F=(E.getMonth()+1).toString().padStart(2,"0"),S=E.getDate().toString().padStart(2,"0"),R=E.getHours().toString().padStart(2,"0"),j=E.getMinutes().toString().padStart(2,"0");return `${D}-${F}-${S} ${R}:${j}`}function v(y){return {0:"#C0C0C0",1:"#BBBBBB",2:"#8BD29B",3:"#7BCDEF",4:"#FEBB8B",5:"#EE672A",6:"#F04C49"}[y]}function A(y){let E=y.message;const D=["https://www.bilibili.com/video/av","https://b23.tv/mall-"];if(y.vote&&y.vote.deleted===false){const F=`<a class="jump-link normal" href="${y.vote.url}" target="_blank" noopener noreferrer>${y.vote.title}</a>`;D.push(F),E=E.replace(`{vote:${y.vote.id}}`,F);}if(y.emote)for(const[F,S]of Object.entries(y.emote)){const R=`<img class="emoji-${["","small","large"][S.meta.size]}" src="${S.url}" alt="${F}">`;D.push(R),E=E.replaceAll(F,R);}if(E=E.replaceAll(/(\d{1,2}[:：]){1,2}\d{1,2}/g,F=>{if(F=F.replaceAll("：",":"),!e.test(t.location.href))return F;const S=F.split(":");if(S.some(Y=>parseInt(Y)>=60))return F;let R;if(S.length===2?R=parseInt(S[0])*60+parseInt(S[1]):S.length===3&&(R=parseInt(S[0])*3600+parseInt(S[1])*60+parseInt(S[2])),Number.isNaN(R))return F;const j=`<a class="jump-link video-time" onclick="(async () => {
          // jump to exact time
          const videoElement = document.querySelector('video.gsl-video');
          videoElement.currentTime = ${R};
  
          // close comment module
          document.querySelector('.close-comment-module-btn').click();
  
          // scroll to top
          window.scrollTo(0, 0);
  
          // play video if it is paused
          if (videoElement.paused) videoElement.play();
        })()">${F}</a>`;return D.push(j),j}),y.at_name_to_mid)for(const[F,S]of Object.entries(y.at_name_to_mid)){const R=`<a class="jump-link user" data-user-id="${S}" href="https://space.bilibili.com/${S}" target="_blank" noopener noreferrer>@${F}</a>`;D.push(R),E=E.replaceAll(`@${F}`,R);}if(Object.keys(y.jump_url).length){const F=[].concat(Object.entries(y.jump_url).filter(S=>S[0].startsWith("https://")),Object.entries(y.jump_url).filter(S=>!S[0].startsWith("https://")));for(const[S,R]of F){const j=S.startsWith("BV")||/^av\d+$/.test(S)?`https://www.bilibili.com/video/${S}`:R.pc_url||S;if(j.includes("search.bilibili.com")&&D.join("").includes(S))continue;const Y=`<img class="icon normal" src="${R.prefix_icon}" style="${R.extra&&R.extra.is_word_search&&"width: 12px;"}"><a class="jump-link normal" href="${j}" target="_blank" noopener noreferrer>${R.title}</a>`;D.push(Y),E=E.replaceAll(S,Y);}}return E}function N(y){let E="width: 84px; height: 84px;";y.length===1&&(E="max-width: 260px; max-height: 180px;"),y.length===2&&(E="width: 128px; height: 128px;");let D="";for(const F of y)D+=`<div class="image-item-wrap" style="margin-top: 4px; margin-right: 4px; cursor: zoom-in;"><img src="${F.img_src}" style="border-radius: 4px; ${E}"></div>`;return D}function U(y){if(!(y instanceof Array))return "";let E="";for(const D of y)E+=`
          <div class="sub-reply-item">
            <div class="sub-user-info">
              <a class="sub-reply-avatar" href="https://space.bilibili.com/${D.mid}" target="_blank" data-user-id="${D.mid}" data-root-reply-id="${D.rpid}">
                <div class="avatar">
                  <div class="bili-avatar">
                    <img class="bili-avatar-img bili-avatar-face bili-avatar-img-radius" data-src="${D.member.avatar}" alt="" src="${D.member.avatar}">
                    <span class="bili-avatar-icon bili-avatar-right-icon  bili-avatar-size-24"></span>
                  </div>
                </div>
              </a>
              <a class="sub-user-name" href="https://space.bilibili.com/${D.mid}" target="_blank" data-user-id="${D.mid}" data-root-reply-id="${D.rpid}" style="color: ${D.member.vip.nickname_color?D.member.vip.nickname_color:"#61666d"}">${D.member.uname}</a>
              <span style="height: 14px; padding: 0 2px; margin-right: 4px; display: flex; align-items: center; font-size: 10px; color: white; border-radius: 2px; background-color: ${v(D.member.level_info.current_level)};">LV${D.member.level_info.current_level}</span>
              ${a===D.mid?'<i class="svg-icon up-web up-icon" style="width: 20px; height: 24px; transform: scale(1.03);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="4" width="24" height="16" rx="2" fill="#FF6699"></rect><path d="M5.7 8.36V12.79C5.7 13.72 5.96 14.43 6.49 14.93C6.99 15.4 7.72 15.64 8.67 15.64C9.61 15.64 10.34 15.4 10.86 14.92C11.38 14.43 11.64 13.72 11.64 12.79V8.36H10.47V12.81C10.47 13.43 10.32 13.88 10.04 14.18C9.75 14.47 9.29 14.62 8.67 14.62C8.04 14.62 7.58 14.47 7.3 14.18C7.01 13.88 6.87 13.43 6.87 12.81V8.36H5.7ZM13.0438 8.36V15.5H14.2138V12.76H15.9838C17.7238 12.76 18.5938 12.02 18.5938 10.55C18.5938 9.09 17.7238 8.36 16.0038 8.36H13.0438ZM14.2138 9.36H15.9138C16.4238 9.36 16.8038 9.45 17.0438 9.64C17.2838 9.82 17.4138 10.12 17.4138 10.55C17.4138 10.98 17.2938 11.29 17.0538 11.48C16.8138 11.66 16.4338 11.76 15.9138 11.76H14.2138V9.36Z" fill="white"></path></svg></i>':""}
            </div>
            <span class="reply-content-container sub-reply-content">
              <span class="reply-content">${A(D.content)}</span>
            </span>
            <div class="sub-reply-info" style="margin: 4px 0;">
              <span class="sub-reply-time" style="margin-right: 20px;">${$(D.ctime)}</span>
              <span class="sub-reply-like">
                <i class="svg-icon like use-color sub-like-icon" style="width: 16px; height: 16px;"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3323" width="200" height="200"><path d="M594.176 151.168a34.048 34.048 0 0 0-29.184 10.816c-11.264 13.184-15.872 24.064-21.504 40.064l-1.92 5.632c-5.632 16.128-12.8 36.864-27.648 63.232-25.408 44.928-50.304 74.432-86.208 97.024-23.04 14.528-43.648 26.368-65.024 32.576v419.648a4569.408 4569.408 0 0 0 339.072-4.672c38.72-2.048 72-21.12 88.96-52.032 21.504-39.36 47.168-95.744 63.552-163.008a782.72 782.72 0 0 0 22.528-163.008c0.448-16.832-13.44-32.256-35.328-32.256h-197.312a32 32 0 0 1-28.608-46.336l0.192-0.32 0.64-1.344 2.56-5.504c2.112-4.8 5.12-11.776 8.32-20.16 6.592-17.088 13.568-39.04 16.768-60.416 4.992-33.344 3.776-60.16-9.344-84.992-14.08-26.688-30.016-33.728-40.512-34.944zM691.84 341.12h149.568c52.736 0 100.864 40.192 99.328 98.048a845.888 845.888 0 0 1-24.32 176.384 742.336 742.336 0 0 1-69.632 178.56c-29.184 53.44-84.48 82.304-141.76 85.248-55.68 2.88-138.304 5.952-235.712 5.952-96 0-183.552-3.008-244.672-5.76-66.432-3.136-123.392-51.392-131.008-119.872a1380.672 1380.672 0 0 1-0.768-296.704c7.68-72.768 70.4-121.792 140.032-121.792h97.728c13.76 0 28.16-5.504 62.976-27.456 24.064-15.104 42.432-35.2 64.512-74.24 11.904-21.184 17.408-36.928 22.912-52.8l2.048-5.888c6.656-18.88 14.4-38.4 33.28-60.416a97.984 97.984 0 0 1 85.12-32.768c35.264 4.096 67.776 26.88 89.792 68.608 22.208 42.176 21.888 84.864 16 124.352a342.464 342.464 0 0 1-15.424 60.544z m-393.216 477.248V405.184H232.96c-40.448 0-72.448 27.712-76.352 64.512a1318.912 1318.912 0 0 0 0.64 282.88c3.904 34.752 32.96 61.248 70.4 62.976 20.8 0.96 44.8 1.92 71.04 2.816z" p-id="3324" fill="#9499a0"></path></svg></i>
                <span>${D.like}</span>
              </span>
            </div>
          </div>
        `;return E}async function Q(y,E,D,F){const S=await fetch(`https://api.bilibili.com/x/v2/reply/reply?oid=${i}&pn=${F}&ps=10&root=${y}&type=${o}`).then(j=>j.json()).then(j=>j.data);E.innerHTML=U(S.replies),ot(y,E,D,F),E.parentElement.parentElement.scrollIntoView({behavior:"instant"}),t.scrollTo(0,document.documentElement.scrollTop-60);}function ot(y,E,D,F){var j,Y,gt;if(D<=10)return;const S=Math.ceil(D/10),R=document.createElement("div");R.classList.add("view-more"),R.innerHTML=`
        <div class="view-more-pagination">
          <span class="pagination-page-count">共${S}页</span>
          ${F!==1?'<span class="pagination-btn pagination-to-prev-btn">上一页</span>':""}
          ${(()=>{const mt=[F-4,F-3,F-2,F-1].filter(lt=>lt>=1),J=[F+1,F+2,F+3,F+4].filter(lt=>lt<=S),bt=[].concat(mt,F,J);let Ft;F<=3?Ft=bt.slice(0,5):F>=S-3?Ft=bt.reverse().slice(0,5).reverse():Ft=bt.slice(bt.indexOf(F)-2,bt.indexOf(F)+3);let it=JSON.parse(JSON.stringify(Ft));if(!it.includes(1)){let lt=[1];it.at(0)!==2&&(lt=[1,"..."]),it=[].concat(lt,it);}if(!it.includes(S)){let lt=[S];it.at(-1)!==S-1&&(lt=["...",S]),it=[].concat(it,lt);}return it.reduce((lt,Ht)=>Ht==="..."?lt+'<span class="pagination-page-dot">...</span>':Ht===F?lt+`<span class="pagination-page-number current-page">${Ht}</span>`:lt+`<span class="pagination-page-number">${Ht}</span>`,"")})()}
          ${F!==S?'<span class="pagination-btn pagination-to-next-btn">下一页</span>':""}
        </div>
      `,(j=R.querySelector(".pagination-to-prev-btn"))==null||j.addEventListener("click",()=>Q(y,E,D,F-1)),(Y=R.querySelector(".pagination-to-next-btn"))==null||Y.addEventListener("click",()=>Q(y,E,D,F+1)),(gt=R.querySelectorAll(".pagination-page-number:not(.current-page)"))==null||gt.forEach(mt=>{const J=parseInt(mt.textContent);mt.addEventListener("click",()=>Q(y,E,D,J));}),E.appendChild(R);}function G(){const y=document.createElement("div");y.classList.add("anchor-for-loading"),y.textContent="正在加载...",y.style="text-align: center; color: #61666d; transform: translateY(-50px);",document.querySelector(".comment-container .reply-warp").appendChild(y);let E=1;const D=new IntersectionObserver(async F=>{if(!F[0].isIntersecting)return;const{data:S}=await L(++E);if(!S.replies||S.replies.length===0){y.textContent="所有评论已加载完毕",D.disconnect();return}for(const R of S.replies)M(R);});D.observe(y);}function I(){const y=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(){const E=arguments[1];if(typeof E=="string"&&E.includes("reply/wbi/main")){const{searchParams:D}=new URL(`${E.startsWith("//")?"https:":""}${E}`);t.dynamicDetail={oid:D.get("oid"),commentType:D.get("type")};}return y.apply(this,arguments)};}async function q(){await new Promise(R=>{const j=setInterval(()=>{document&&document.createElement&&document.head&&document.head.appendChild&&(clearInterval(j),R());},100);});const y=document.createElement("style");y.textContent=`
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
      `,document.head.appendChild(y);const E=document.createElement("style");E.textContent=`
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
      `,document.head.appendChild(E);const D=document.createElement("style");D.textContent=`
        .reply-item .root-reply-avatar .avatar .bili-avatar {
          width: 40px;
          height: 40px;
        }
  
        .sub-reply-item .sub-reply-avatar .avatar .bili-avatar {
          width: 24px;
          height: 24px;
        }
      `,document.head.appendChild(D);const F=document.createElement("style");F.textContent=`
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
      `,(document.head||document.documentElement).appendChild(F);const S=document.createElement("style");S.textContent=`
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
      `,(document.head||document.documentElement).appendChild(S);}}(),jr=`:root {\r
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
`,Bt={addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(r=>{Array.isArray(r)?e=e.concat(r):e.push(r);}),P(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){let e=typeof le=="function"?le(t.keyName):"";typeof e=="string"&&e?P(e):Bt.loadStyleLink(t.url);},async loadStyleLink(t){let e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=t,h.ready(()=>{document.head.appendChild(e);});},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(r=>{e.onload=()=>{r(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.match(/^http(s|):\/\//i)||(t.startsWith("/")||(t+="/"),t=window.location.origin+t),t},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;let e=new URL(t);return e.protocol="https:",e.toString()}},Ur={Viewer:{keyName:"ViewerCSS",url:"https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"}};class qr{constructor(e){rt(this,"isBacking",false);rt(this,"config");this.config=e,this.enterGestureBackMode=this.enterGestureBackMode.bind(this),this.quitGestureBackMode=this.quitGestureBackMode.bind(this),this.popStateEvent=this.popStateEvent.bind(this),(typeof this.config.backDelayTime!="number"||isNaN(this.config.backDelayTime))&&(this.config.backDelayTime=150),this.config.win==null&&(this.config.win=self);}popStateEvent(e){d.preventEvent(e),!this.isBacking&&this.quitGestureBackMode(true);}enterGestureBackMode(){u.success("进入手势模式");let e=this.config.hash;e.startsWith("#")||(e.startsWith("/")||(e="/"+e),e="#"+e),this.config.useUrl&&(e=this.config.win.location.origin+this.config.win.location.pathname+this.config.win.location.search+e),this.config.win.history.pushState({},"",e),u.success("监听popstate事件"),h.on(this.config.win,"popstate",this.popStateEvent,{capture:true});}async quitGestureBackMode(e=false){u.success("退出手势模式"),this.isBacking=true,typeof this.config.beforeHistoryBackCallBack=="function"&&this.config.beforeHistoryBackCallBack(e);let r=Date.now()+1e3*5;for(;;){if(Date.now()>r){u.error("未知情况，history.back()失败，无法退出手势模式");break}if(this.config.win.location.hash.endsWith(this.config.hash))u.info("history.back()"),this.config.win.history.back(),await d.sleep(this.config.backDelayTime||150);else break}u.success("移除popstate事件"),h.off(this.config.win,"popstate",this.popStateEvent,{capture:true}),this.isBacking=false,typeof this.config.afterHistoryBackCallBack=="function"&&this.config.afterHistoryBackCallBack(e);}}const Gr={$data:{isAddBeautifyCSS:false,isInitCommentModule:false,isInitDescModule:false},init(){ne.init(),f.execMenuOnce("bili-video-cover-bottomRecommendVideo",()=>{this.coverBottomRecommendVideo();}),f.execMenuOnce("bili-video-cover-UpWrapper",()=>{this.coverUpWrapper();}),f.execMenuOnce("bili-video-cover-seasonNew",()=>{this.coverSeasonNew();}),h.ready(()=>{f.execMenu("bili-video-addCommentModule",()=>{this.addCommentModule();}),f.execMenu("bili-video-addDescModule",()=>{this.addDescModule();});});},beautify(){u.info("美化显示"),this.$data.isAddBeautifyCSS||(this.$data.isAddBeautifyCSS=true,P(`
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

			`)),d.waitNode(x.className.video+" .bottom-tab .list-view .card-box",1e4).then(t=>{if(!t){u.error("$cardBox is null");return}function e(a){var c,m;let o=a.querySelector(".title"),l=a.querySelector(".count .left"),s=!!a.querySelector(".gm-right-container"),p=T.getVue(a);if(o&&l&&p&&!s){let g=(m=(c=p==null?void 0:p.info)==null?void 0:c.owner)==null?void 0:m.name;if(g==null){u.error("美化显示-handleVCardToApp：获取up主名字失败");return}a.querySelector(".count");let C=o.cloneNode(true),B=l.cloneNode(true);h.hide(o);let _=a.querySelector(".open-app.weakened");_&&h.hide(_);let L=document.createElement("div");L.className="gm-up-name",L.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${g}</span>
						`;let M=document.createElement("div"),$=document.createElement("div");M.className="gm-right-container",$.className="gm-right-bottom",h.after(o,M),M.appendChild(C),M.appendChild($),$.appendChild(L),$.appendChild(B);}}function r(a){var c,m,g;let o=a.querySelector(".title"),l=a.querySelector(".count"),s=!!a.querySelector(".gm-right-container"),p=T.getVue(a);if(o&&l&&p&&!s){let C=(c=p==null?void 0:p.info)==null?void 0:c.duration;if(C==null){u.error("美化显示-handleVCard：获取视频时长失败");return}let B=(g=(m=p==null?void 0:p.info)==null?void 0:m.owner)==null?void 0:g.name;if(B==null){u.error("美化显示-handleVCard：获取up主名字失败");return}let _=o.cloneNode(true),L=l.cloneNode(true);h.hide(o);let M=document.createElement("div");M.className="duration",M.innerText=z.parseDuration(C),L.className="left";let $=document.createElement("div");l.appendChild(M),$.className="gm-up-name",$.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${B}</span>
						`;let v=document.createElement("div"),A=document.createElement("div");v.className="gm-right-container",A.className="gm-right-bottom",h.after(o,v),v.appendChild(_),v.appendChild(A),A.appendChild($),A.appendChild(L);}}let n=new d.LockFunction(()=>{let a=document.querySelectorAll(x.className.video+" .bottom-tab .list-view .card-box .v-card-toapp"),o=document.querySelectorAll(x.className.video+" .bottom-tab .list-view .card-box>a.v-card");a.forEach(l=>{e(l);}),o.forEach(l=>{r(l);});},25),i=document.querySelector(x.className.video);i?d.mutationObserver(i,{config:{subtree:true,attributes:true,childList:true},callback(){n.run();}}):u.error("未找到视频根节点");});},repairVideoBottomAreaHeight(){return u.info("修复视频底部区域高度"),P(`
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
		`)},coverUpWrapper(){u.info("修复up主信息区域的点击事件"),h.on(document,"click",[x.className.video+" .bottom-wrapper .up-wrapper",x.className.mVideo+" .bottom-wrapper .up-wrapper"],function(t){var a,o;let r=t.target.closest(".bottom-wrapper");if(!r){u.error("获取元素.bottom-wrapper失败");return}let n=T.getVue(r);if(!n){u.error("获取元素.bottom-wrapper的vue实例失败");return}let i=(o=(a=n==null?void 0:n.upInfo)==null?void 0:a.card)==null?void 0:o.mid;typeof i=="string"?z.goToUrl(Et.getUserSpaceUrl(i)):k.error("获取mid失败");},{capture:true});},coverBottomRecommendVideo(){u.info("覆盖 相关视频 点击事件"),h.on(document,"click",[x.className.video+" .list-view .card-box .launch-app-btn",x.className.mVideo+" .list-view .card-box .launch-app-btn"],function(t){let e=t.target,r=T.getVue(e);if(!r){k.error("获取相关视频的__vue__失败");return}let n=r.bvid;if(d.isNull(n))if(r.$children&&r.$children[0]&&d.isNotNull(r.$children[0].bvid))n=r.$children[0].bvid;else {k.error("获取相关视频的bvid失败");return}u.info("相关视频的bvid: "+n),z.goToUrl(Et.getVideoUrl(n)),d.preventEvent(t);},{capture:true});},coverSeasonNew(){u.info("覆盖 选集视频列表 点击事件");function t(e){let r=e.target,n=T.getVue(r);if(!n){k.error("获取选集视频的目标视频的__vue__失败");return}let i=n.bvid;if(d.isNull(i)){k.error("获取相关视频的bvid失败");return}u.info("相关视频的bvid: "+i),z.goToUrl(Et.getVideoUrl(i)),d.preventEvent(e);}h.on(document,"click",[x.className.video+" .m-video-season-new .video-card .launch-app-btn",x.className.mVideo+" .m-video-season-new .video-card .launch-app-btn"],t,{capture:true}),h.on(document,"click",[x.className.video+" .m-video-season-panel .season-video-item .launch-app-btn",x.className.mVideo+" .m-video-season-panel .season-video-item .launch-app-btn"],t,{capture:true});},repairLinkJump(){u.info("修复链接跳转");let t=new d.LockFunction(()=>{["a.member-link:not([href])[data-url]","a.jump-link:not([href])[data-url]"].forEach(e=>{ht(e).forEach(r=>{r.href=r.getAttribute("data-url");});});});d.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{t.run();}});},gestureReturnToCloseCommentArea(){u.info("手势返回关闭评论区，全局监听document点击.sub-reply-preview"),d.waitNode("#app").then(t=>{d.waitVueByInterval(t,()=>{var r,n;let e=T.getVue(t);return e==null?false:typeof((n=(r=e==null?void 0:e.$router)==null?void 0:r.options)==null?void 0:n.scrollBehavior)!=null},250,1e4).then(e=>{let r=T.getVue(t);if(!r){u.error("获取#app的vue属性失败");return}let n=r.$router.options.scrollBehavior;r.$router.options.scrollBehavior=function(i,a,o){return i.hash==="#/seeCommentReply"?(u.info("当前操作为打开评论区，scrollBehavior返回null"),null):i.hash===""&&a.hash==="#/seeCommentReply"?(u.info("当前操作为关闭评论区，scrollBehavior返回null"),null):n.call(this,...arguments)};});}),h.on(document,"click",".sub-reply-preview",function(t){let e=document.querySelector("#app"),r=T.getVue(e);if(!r){u.error("获取#app元素失败");return}let n=z.hookGestureReturnByVueRouter({vueObj:r,hash:"#/seeCommentReply",callback(i){if(!i)return  false;let a=document.querySelector(".dialog-close-icon");return a?a.click():u.error("评论区关闭失败，原因：元素dialog-close-icon获取失败"),true}});d.waitNode(".dialog-close-icon").then(i=>{h.on(i,"click",function(){n.resumeBack(false);},{capture:true,once:true});});});},enterVideoFullScreen(){d.waitNode(".mplayer-btn-widescreen",5e3).then(t=>{if(!t){u.error("获取全屏按钮失败"),k.error("获取全屏按钮失败");return}if(t.closest(".mplayer-wide")){u.warn("当前的全屏按钮是【退出全屏】，不点击");return}u.info("进入全屏"),t.click();});},optimizationScroll(){let t=null,e=null,r=null,n=null,i=null,a=0,o=0;function l(s){return !document.contains(s)}h.on(document,"scroll",s=>{if(l(e)){if(e=document.querySelector(".m-video-player"),l(e))return;if(a==0){const g=e.getBoundingClientRect();a=g.height,o=g.top,u.info(`视频区域的最大高度为 ${a}px`),u.info(`视频区域的最大top为 ${o}px`);}}if(l(r)&&(r=document.querySelector(".m-video-info-new"),l(r))||l(t)&&(t=document.querySelector(".m-navbar"),l(t))||l(n)&&(n=document.querySelector(".bottom-tab"),l(n))||l(i)&&(i=document.querySelector(".bottom-tab .v-affix"),l(i)))return;let p=r.getBoundingClientRect().top;p>=0?p<=a?e.style.paddingTop=p+"px":e.style.paddingTop="":e.style.paddingTop="0px";let c=h.height(t);n.getBoundingClientRect().top<c?i.hasAttribute("data-is-fixed")||(i.style.cssText=`position: fixed;left: 0px;top: ${c}px;z-index: 10000;width: 100%;`,i.setAttribute("data-is-fixed","true")):(i.style.cssText="",i.removeAttribute("data-is-fixed"));},{passive:true});},disableSwipeTab(){u.info("禁止滑动切换tab"),T.waitVuePropToSet(".m-video-bottom-tab",{msg:"等待tab的vue属性touchstart、touchmove、touchend事件，_bindEvents函数",check(t){var e,r,n,i,a,o,l,s;return ((e=t==null?void 0:t.slider)==null?void 0:e.el)instanceof HTMLElement&&typeof((n=(r=t==null?void 0:t.slider)==null?void 0:r.events)==null?void 0:n.touchstart)=="function"&&typeof((a=(i=t==null?void 0:t.slider)==null?void 0:i.events)==null?void 0:a.touchmove)=="function"&&typeof((l=(o=t==null?void 0:t.slider)==null?void 0:o.events)==null?void 0:l.touchend)=="function"&&typeof((s=t==null?void 0:t.slider)==null?void 0:s._bindEvents)=="function"},set(t){let e=t.slider.el;e.removeEventListener("touchstart",t.slider.events.touchstart),e.removeEventListener("touchmove",t.slider.events.touchmove),e.removeEventListener("touchend",t.slider.events.touchend),t.slider._bindEvents=()=>{},u.success("成功禁用滑动，清除touchstart、touchmove、touchend事件，覆盖_bindEvents函数");}});},addCommentModule(){u.info("新增评论模块"),this.$data.isInitCommentModule||(this.$data.isInitCommentModule=true,Bt.setGMResourceCSS(Ur.Viewer),P(jr),P(`
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
			`),P(`
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
			`)),d.waitNode(".m-video-info",1e4).then(t=>{if(!t){u.error("获取视频信息元素失败");return}h.remove(".comment-module-show-btn"),h.remove(".close-comment-module-btn"),h.remove("#comment-module-wrapper");const e="comment-module";let r=new qr({hash:e,useUrl:true,beforeHistoryBackCallBack(o){let l=K(".viewer-button.viewer-close");l&&l.click(),o&&i.click();}}),n=h.createElement("div",{className:"comment-module-show-btn",innerHTML:"查看评论"}),i=h.createElement("span",{className:"close-comment-module-btn",innerHTML:"×"});h.on(n,"click",o=>{d.preventEvent(o),h.css(a,{display:"block"}),h.css(i,{display:"flex"}),r.enterGestureBackMode();}),h.on(i,"click",o=>{d.preventEvent(o),h.css(a,{display:""}),h.css(i,{display:""}),r.quitGestureBackMode(false);}),h.append(t,n);let a=h.createElement("div",{id:"comment-module-wrapper"});h.append(document.body,a),h.after(a,i),Hr.init(a);});},addDescModule(){u.info("新增简介模块"),this.$data.isInitDescModule||(this.$data.isInitDescModule=true,P(`
				${x.className.mVideo} .m-video-info .bottom-wrapper{
					flex-direction: column;
					align-items: flex-start;
					height: auto;
				}
			`),P(`
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
	
			`)),h.remove(x.className.mVideo+"  .m-video-info .video-desc-wrapper"),T.waitVuePropToSet(x.className.mVideo+"  .m-video-info .bottom-wrapper",{check(t){var e;return typeof((e=t==null?void 0:t.info)==null?void 0:e.bvid)=="string"},set(t,e){let r=t.info,n=t.upInfo;n.follower,n.archive_count;let i=r.stat.view,a=r.stat.danmaku;r.ctime;let o=r.bvid,l=r.desc,s=r.stat.like,p=r.stat.coin,c=r.stat.favorite,m=r.stat.share,g=h.createElement("div",{className:"video-desc-wrapper",innerHTML:`
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
									<span class="video-info-text" data-value="${i}">${z.parseCount(i)}</span>
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
									<span class="video-info-text" data-value="${a}">${z.parseCount(a)}</span>
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
									<span data-value="${s}">${z.parseCount(s)}</span>
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
									<span data-value="${p}">${z.parseCount(p)}</span>
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
									<span data-value="${c}">${z.parseCount(c)}</span>
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
									<span data-value="${m}">${z.parseCount(m)}</span>
								</div>
							</div>
						`});e.appendChild(g);}});}},Wr=`.artplayer-container {\r
	width: 100vw;\r
	height: 35vh;\r
}`,xt={getUrl(t){if(t!=null)return t.getAttribute("universallink")},jumpToUrl(t){let e=t.target,r=e.querySelector("bili-open-app")||e.querySelector("m-open-app");if(r){let n=xt.getUrl(r);n?z.goToUrl(n):(k.error("获取bili-open-app的Url失败"),u.error("获取bili-open-app的Url失败"));}else k.error("未获取到<bili-open-app>元素"),u.error("未获取到<bili-open-app>元素");}},zt={filteringSensitiveSearchParamData(t){const e=d.assign({},t,true);return Reflect.deleteProperty(e,"access_key"),Reflect.deleteProperty(e,"access_token"),e},failToast(t){u.error(t),alert(JSON.stringify(t,null,4));}},ve={async getPlayUrl(t){let e={avid:"",cid:"",ep_id:"",qn:127,fnver:0,fnval:3088,fourk:1};e=d.assign(e,t);let r=te.getBangumiProxyHost();u.info("番剧播放地址请求数据");let n=[],i;const a="/pgc/player/web/playurl";u.info(`请求路径：${a}`);for(let o=0;o<r.length;o++){const l=r[o],s=l.host,p={};s!==It.web_host&&(d.assign(p,te.getBangumiProxySearchParam({area:l.area}),true),u.info(`代理服务器数据: ${JSON.stringify(l)}`),u.info(`代理服务器请求参数：${JSON.stringify(zt.filteringSensitiveSearchParamData(p))}`));let c=`https://${s}${a}?${d.toSearchParamsStr(e)}&${d.toSearchParamsStr(p)}`,m=await X.get(c,{responseType:"json",fetch:false,allowInterceptConfig:false,headers:{Referer:"https://www.bilibili.com/"}});if(!m.status){u.error(`代理服务器：${s} 请求失败`);continue}let g=d.toJSON(m.data.responseText);if(g.result,!dt.isWebApiSuccess(g)||dt.isAreaLimit(g)){u.error(`请求失败，当前代理服务器：${s} ${JSON.stringify(g)}`),n.push(g);continue}i=g.result;break}return i==null&&zt.failToast(n),i},async getPlayUrlHTML5(t){let e={avid:"",cid:"",ep_id:"",bsource:""};e=d.assign(e,t),u.info("（原版api）番剧播放地址请求数据");let n=`https://${It.web_host}/pgc/player/web/playurl/html5?${d.toSearchParamsStr(e)}`,i=await X.get(n,{responseType:"json",fetch:true,headers:{Host:"www.bilibili.com",Referer:"https://www.bilibili.com"}});if(!i.status)return;let a=d.toJSON(i.data.responseText);if(!dt.isWebApiSuccess(a)){zt.failToast(a);return}return a.result}},Qr="[artplayer-plugin-airborneHelper]：",O={$data:{tipJumpToastTimeoutId:void 0,tipJumpToastInfo:void 0,successJumpToastInfo:void 0},$event:{"video:timeupdate":()=>{if(O.$data.tipJumpToastTimeoutId!=null||!ut.$data.art.playing)return;const t=5;let e=ut.$data.art.currentTime,r=ut.$data.option.clip_info_list.findIndex(n=>{let i=n.start;return i===0?e<=1:e>=i-t&&e<i});if(r!==-1){let n=function(){var l;clearTimeout(O.$data.tipJumpToastTimeoutId),O.$data.tipJumpToastTimeoutId=void 0,(l=O.$data.tipJumpToastInfo)==null||l.close(),O.$data.tipJumpToastInfo=void 0,ut.$data.option.clip_info_list.splice(r,1);},i=ut.$data.option.clip_info_list[r],a=ut.$data.art.plugins[zr],o=(i.start-e)*1e3;O.$data.tipJumpToastTimeoutId=setTimeout(()=>{ut.$data.art.currentTime=i.end,O.$data.tipJumpToastTimeoutId=void 0,O.$data.successJumpToastInfo&&(O.$data.successJumpToastInfo.close(),O.$data.successJumpToastInfo=void 0),O.$data.successJumpToastInfo=a.toast({text:"空降成功~o(*≧▽≦)ツ┏━┓",closeCallback(){O.$data.successJumpToastInfo=void 0;}});},o),O.$data.tipJumpToastInfo&&(O.$data.tipJumpToastInfo.close(),O.$data.tipJumpToastInfo=void 0),O.$data.tipJumpToastInfo=a.toast({text:typeof i.toastText=="string"?i.toastText:"站稳扶好，准备起飞~",timeout:o<2e3?2e3:o,showCloseBtn:false,jumpText:typeof i.toastText=="string"?"不跳过":"坠机",jumpClickCallback:()=>{n();}}),setTimeout(()=>{O.$data.tipJumpToastInfo&&(O.$data.tipJumpToastInfo.close(),O.$data.tipJumpToastInfo=void 0);},(t+3)*1e3);}}},bind(){Object.keys(this.$event).forEach(t=>{ut.$data.art.on(t,this.$event[t]);});},unbind(){Object.keys(this.$event).forEach(t=>{ut.$data.art.off(t,this.$event[t]);}),clearTimeout(O.$data.tipJumpToastTimeoutId),O.$data.tipJumpToastTimeoutId=void 0,O.$data.successJumpToastInfo&&(O.$data.successJumpToastInfo.close(),O.$data.successJumpToastInfo=void 0),O.$data.tipJumpToastInfo&&(O.$data.tipJumpToastInfo.close(),O.$data.tipJumpToastInfo=void 0);}},ut={$key:{plugin_KEY:"plugin-airborne-helper"},$data:{art:null,option:null},init(t,e){this.$data.art=t,this.update(e);},update(t){this.$data.option=t,console.log(Qr+"更新配置",t),O.unbind(),t.clip_info_list.length&&O.bind();}},Yr=t=>e=>(ut.init(e,t),{name:ut.$key.plugin_KEY,update(r){ut.update(r);}}),Jr=ut.$key.plugin_KEY,ye="[flvjs]：",xe=t=>t.epList.map(e=>({isDefault:e.ep_id===t.ep_id&&e.aid===t.aid&&e.cid===t.cid,title:qe(e.long_title,e.title),aid:e.aid,bvid:e.bvid,cid:e.cid,ep_id:e.ep_id,onSelect(r,n){tr.updateArtPlayerVideoInfo(e,t.epList);}})),Ct={$data:{art:null,flv:null,currentOption:null,from:"bangumi"},resetEnv(t){t&&(Reflect.set(this.$data,"art",null),Reflect.set(this.$data,"flv",null)),Reflect.set(this.$data,"currentOption",null);},flvPlayer(){var r,n;if(this.$data.currentOption==null){console.error(ye+"获取当前配置为空");return}let t=this.$data.currentOption.flvInfo;(this.$data.flv!=null||t==null)&&((r=this.$data.flv)==null||r.detachMediaElement(),(n=this.$data.flv)==null||n.destroy());let e=this.$data.currentOption;console.log(ye+"加载视频",t),t.length>1?this.$data.flv=Kt.createPlayer({type:"flv",filesize:e.flvTotalSize,duration:e.flvTotalDuration,segments:t.map(i=>({url:i.url,duration:i.duration,filesize:i.size}))},{stashInitialSize:1024*100}):this.$data.flv=Kt.createPlayer({type:"flv",url:t[0].url},{stashInitialSize:1024*100}),this.$data.flv.attachMediaElement(this.$data.art.video),this.$data.flv.load();},async init(t){this.resetEnv(true),this.$data.currentOption=t;const e="artplayer-bangumi-danmaku-option",r=new Ne(e),n=r.getLocalArtDanmakuOption(),i={...Qe(),container:t.container,settings:[],plugins:[Je(),Ye({from:Ct.$data.from,qualityList:t.quality})]};if(t.isFlv){if(i.quality=[],i.type="flv",t.flvInfo.length===0){zt.failToast("视频播放地址为空，无法播放！");return}i.url=t.flvInfo[0].url,i.customType={flv:(a,o,l)=>{if(!Kt.isSupported()){l.notice.show="Unsupported playback format: flv";return}this.flvPlayer();}};}else i.type="mp4";return f.getValue("artplayer-plugin-bangumi-danmaku-enable")&&i.plugins.push(_e({...Ze(),danmuku:t.danmukuUrl,speed:n.speed,margin:n.margin,opacity:n.opacity,modes:n.modes,fontSize:n.fontSize,antiOverlap:n.antiOverlap,synchronousPlayback:n.synchronousPlayback,visible:n.visible,beforeEmit(a){return new Promise(o=>{console.log(a),setTimeout(()=>{o(true);},1e3);})}})),f.getValue("artplayer-plugin-bangumi-m4sAudioSupport-enable")&&i.plugins.push(Ve({from:Ct.$data.from,audioList:t.audioList||[]})),f.getValue("artplayer-plugin-bangumi-epChoose-enable")&&i.plugins.push(Ge({EP_LIST:xe(t),automaticBroadcast:true})),f.getValue("artplayer-plugin-bangumi-cc-subtitle-enable")&&i.plugins.push(He({from:Ct.$data.from,cid:t.cid,aid:t.aid,bvid:t.bvid,ep_id:t.ep_id})),f.getValue("artplayer-plugin-bangumi-toptoolbar-enable")&&i.plugins.push(ze({onlineInfoParams:{aid:t.aid,cid:t.cid,bvid:t.bvid},title:t.videoTitle,showWrap:true,showTitle:true,showOnlineTotal:true})),f.getValue("artplayer-plugin-bangumi-airborneHelper-enable")&&i.plugins.push(Yr({clip_info_list:t.clip_info_list})),f.getValue("artplayer-plugin-bangumi-statistics-enable")&&i.plugins.push(Ke({data:[]})),this.$data.art=new ie(i),r.onConfigChange(this.$data.art),this.$data.art},async update(t,e){this.resetEnv(false),this.$data.currentOption=e,u.info("更新新的播放信息",e),t.pause(),u.info("暂停视频"),t.currentTime=0,u.info("重置播放进度"),this.updatePluginInfo(t,e),t.play(),u.info("播放");},updatePluginInfo(t,e){if(t.plugins[Mt].update({from:Ct.$data.from,qualityList:e.quality}),u.info("更新画质",e.quality),f.getValue("artplayer-plugin-bangumi-danmaku-enable")&&(t.plugins.artplayerPluginDanmuku.config({danmuku:e.danmukuUrl}),t.plugins.artplayerPluginDanmuku.load(),u.info("更新弹幕姬",e.danmukuUrl)),f.getValue("artplayer-plugin-bangumi-m4sAudioSupport-enable")&&(t.plugins[oe].update({from:Ct.$data.from,audioList:e.audioList||[]}),u.info("更新音频",e.audioList)),f.getValue("artplayer-plugin-bangumi-epChoose-enable")&&(t.plugins[We].update({EP_LIST:xe(e),automaticBroadcast:true}),u.info("更新选集信息",e.epList)),f.getValue("artplayer-plugin-bangumi-cc-subtitle-enable")){let n=t.plugins[je];const i={from:Ct.$data.from,cid:e.cid,aid:e.aid,ep_id:e.ep_id};n.update(i),u.info("更新字幕",i);}if(f.getValue("artplayer-plugin-bangumi-toptoolbar-enable")){let n=t.plugins[Pe];const i={showRight:true,showRightFollow:true,showWrap:true,showTitle:true,showOnlineTotal:true,title:e.videoTitle,onlineInfoParams:{aid:e.aid,cid:e.cid,bvid:e.bvid}};n.update(i),u.info("更新顶部标题",i);}f.getValue("artplayer-plugin-bangumi-airborneHelper-enable")&&(t.plugins[Jr].update({clip_info_list:e.clip_info_list}),u.info("更新空降助手信息",e.clip_info_list));}},Kr={async waitReactPropsToSet(t,e,r){if(!Array.isArray(r)){this.waitReactPropsToSet(t,e,[r]);return}function n(){let i=null;return typeof t=="string"?i=document.querySelector(t):typeof t=="function"?i=t():t instanceof HTMLElement&&(i=t),i}typeof t=="string"&&!await d.waitNode(t,1e4)||r.forEach(i=>{typeof i.msg=="string"&&u.info(i.msg);function a(){let o=n();if(o==null)return  false;let l=d.getReactObj(o);if(l==null)return  false;let s=l[e];return s==null?false:!!i.check(s)}d.waitPropertyByInterval(()=>n(),a,250,1e4).then(()=>{let o=n();if(o==null){typeof i.overTimeCallBack=="function"&&i.overTimeCallBack();return}let l=d.getReactObj(o);if(l==null){typeof i.overTimeCallBack=="function"&&i.overTimeCallBack();return}let s=l[e];if(s==null){typeof i.overTimeCallBack=="function"&&i.overTimeCallBack();return}i.set(s);});});}};function Ce(t){let e=[];return t.video.forEach(r=>{if(!t.accept_quality.includes(r.id))return;let n=t.support_formats.find(o=>o.quality===r.id),i=at.findBetterCDN(r.base_url,r.baseUrl,r.backup_url,r.backupUrl);i=at.replaceBangumiVideoCDN(i);let a=n==null?void 0:n.new_description;e.push({name:a,url:i,type:r.mimeType,id:r.id,size:r.size,quality:r.id,vip:!!(n!=null&&n.need_vip),bandwidth:r.bandwidth,frameRate:r.frameRate,codecid:r.codecid,codecs:r.codecs});}),e}const Zr=(t,e)=>`第${t}话 ${e}`,we=(t,e)=>{var n,i;let r=[];if((i=(n=t==null?void 0:t.dash)==null?void 0:n.video)!=null&&i.length){let a=t;r=[...Ce({accept_quality:a.accept_quality,support_formats:a.support_formats,video:a.dash.video})],r.length===0&&a.dash.video.length!==0&&(u.warn(`当前选择的视频编码id为: ${e}，但是过滤出的视频没有一个符合的，所以直接放弃使用自定义选择视频编码`),r=[...Ce({accept_quality:a.accept_quality,support_formats:a.support_formats,video:a.dash.video})]);}else {let a=t;a.durls.length===0&&a.durl!=null&&a.durls.push({quality:a.quality,durl:a.durl}),a.durls.forEach(o=>{if(!a.accept_quality.includes(o.quality)||!o.durl.length)return;let l=o.durl[0],s=t.support_formats.find(m=>m.quality===o.quality),p=at.findBetterCDN(l.url,l.backup_url),c=s==null?void 0:s.new_description;r.push({name:c,url:p,type:"audio/mp4",id:o.quality,size:l.size,quality:o.quality,vip:!!(s!=null&&s.need_vip),bandwidth:0,frameRate:"",codecid:0,codecs:""});});}return r},Xr=async(t,e)=>{var $,v;const{aid:r,bvid:n,cid:i,ep_id:a,title:o,long_title:l}=t;u.info(`解析番剧信息 aid:${r} cid:${i} ep_id:${a}`);const s=Zr(o,l),p=[];let c=[],m=[],g=false,C=[],B=0,_=0;if(f.getValue("bili-bangumi-unlockAreaLimit")){const A=await ve.getPlayUrl({avid:r,cid:i,ep_id:a});if(!A)return;if(Array.isArray(A==null?void 0:A.clip_info_list)?m=A.clip_info_list:Array.isArray(A==null?void 0:A.clip_info)&&(m=A.clip_info),A.type.toLowerCase()==="flv")g=true,A.durl.forEach(N=>{let U=at.findBetterCDN(N.url,N.backup_url);U=at.replaceBangumiVideoCDN(U),B+=N.length,_+=N.size,C.push({order:N.order,url:U,duration:N.length,length:N.length,size:N.size});});else if(A.type.toLowerCase()==="dash"||A.type.toLowerCase()==="mp4")((($=A==null?void 0:A.dash)==null?void 0:$.audio)||[]).forEach(N=>{let U=at.findBetterCDN(N.baseUrl,N.base_url,N.baseUrl,N.backup_url);f.getValue("bili-bangumi-uposServerSelect-applyAudio")&&(U=at.replaceBangumiVideoCDN(U)),p.push({url:U,id:N.id,size:N.size,text:Re[N.id]||"",bandwidth:N.bandwidth,codecs:N.codecs,mimeType:N.mimeType||N.mime_type});}),u.info("ArtPlayer: 获取的音频信息",p),c=c.concat(we(A)),u.info("ArtPlayer: 获取的视频画质信息",c);else {zt.failToast("暂未适配的视频格式："+A.format);return}}else {const A=await ve.getPlayUrlHTML5({avid:r,cid:i,ep_id:a});if(!A)return;Array.isArray(A==null?void 0:A.clip_info_list)?m=A.clip_info_list:Array.isArray(A==null?void 0:A.clip_info)&&(m=A.clip_info),c=c.concat(we(A));}const L=c.map((A,N)=>({html:A.name,url:A.url,quality:A.quality,mimeType:A.type,codecid:A.codecid,codecs:A.codecs,frameRate:A.frameRate,bandwidth:A.bandwidth})),M={container:null,epList:e,cid:i,aid:r,bvid:n,ep_id:a,videoTitle:s,danmukuUrl:`https://api.bilibili.com/x/v1/dm/list.so?oid=${i}`,quality:L,clip_info_list:m,isFlv:g,flvInfo:C,flvTotalDuration:B,flvTotalSize:_};return M.url=(v=c==null?void 0:c[0])==null?void 0:v.url,p.length&&(M.audioList=p.map((A,N)=>({isDefault:N===0,url:A.url,soundQualityCode:A.id,soundQualityCodeText:A.text,bandwidth:A.bandwidth,codecs:A.codecs,mimeType:A.mimeType,size:A.size}))),M},tr={$data:{art:null},updateArtPlayerVideoInfo(t,e){const r=this;Kr.waitReactPropsToSet(x.className.bangumi_new+' [class^="Player_container"]',"reactFiber",{check(n){var i,a,o,l,s,p;return typeof((p=(s=(l=(o=(a=(i=n==null?void 0:n.return)==null?void 0:i.memoizedState)==null?void 0:a.queue)==null?void 0:o.lastRenderedState)==null?void 0:l[0])==null?void 0:s.epInfo)==null?void 0:p.bvid)=="string"},async set(n){var s,p,c,m,g,C,B,_,L,M;let i=(g=(m=(c=(p=(s=n==null?void 0:n.return)==null?void 0:s.memoizedState)==null?void 0:p.queue)==null?void 0:c.lastRenderedState)==null?void 0:m[0])==null?void 0:g.epInfo;const a=K("#bilibiliPlayer");if(t==null&&(t=i),e==null){e=[];let $=K(x.className.bangumi_new+' [class^="EpisodeList_episodeListWrap"]');if($){let v=d.getReactObj($),A=(M=(L=(_=(B=(C=v==null?void 0:v.reactFiber)==null?void 0:C.return)==null?void 0:B.memoizedState)==null?void 0:_.memoizedState)==null?void 0:L[0])==null?void 0:M.episodes;Array.isArray(A)&&(e=A);}}const o=await Xr(t,e);if(o==null)return;let l=K("#artplayer");if(!l){const $=h.createElement("div",{className:"artplayer-container",innerHTML:`
									<div id="artplayer"></div>
									`});l=$.querySelector("#artplayer"),h.after(a,$);}if(o.container=l,r.$data.art==null){let $=await Ct.init(o);if($)r.$data.art=$;else return;r.$data.art.volume=1;}else Ct.update(r.$data.art,o);}});}},tn={$data:{art:null},init(){f.execMenuOnce("bili-bangumi-initialScale",()=>{z.initialScale();}),f.execMenuOnce("bili-bangumi-hook-callApp",()=>{this.hookCallApp();}),f.execMenu("bili-bangumi-cover-clicl-event-chooseEp",()=>{this.setChooseEpClickEvent();}),f.execMenu("bili-bangumi-cover-clicl-event-other",()=>{this.setClickOtherVideo();}),f.execMenu("bili-bangumi-cover-clicl-event-recommend",()=>{this.setRecommendClickEvent();}),this.coverVideoPlayer();},hookCallApp(){let t=et.setTimeout;et.setTimeout=function(...e){if(e[0].toString().includes("autoOpenApp")){u.success("阻止唤醒App",e);return}return Reflect.apply(t,this,e)};},setChooseEpClickEvent(){d.waitNode(x.className.bangumi+" .ep-list-pre-wrapper ul.ep-list-pre-container").then(t=>{u.info("覆盖【选集】的点击事件"),h.on(t,"click","li.episode-item",function(e){d.preventEvent(e),xt.jumpToUrl(e);},{capture:true});}),d.waitNode(x.className.bangumi+" .ep-list-pre-wrapper ul.season-list-wrapper").then(t=>{u.info("覆盖【xx季】的点击事件"),h.on(t,"click","li",function(e){d.preventEvent(e),xt.jumpToUrl(e);},{capture:true});}),d.waitNode(x.className.bangumi+" .ep-list-pre-header").then(t=>{u.info("覆盖【选集】右上角的【全xx话】Arrow的点击事件"),h.on(t,"click",function(e){d.preventEvent(e);},{capture:true});}),h.on(document,"click",[x.className.bangumi_new+' [class^="EpisodeList_episodeListWrap"] m-open-app[universallink]',x.className.bangumi_new+' [class^="SeasonList_container"] m-open-app[universallink]'],(t,e)=>{let r=xt.getUrl(e);if(!r){k.error("获取跳转链接失败");return}z.goToUrl(r);},{capture:true});},setClickOtherVideo(){d.waitNode(x.className.bangumi+" .section-preview-wrapper ul.ep-list-pre-container").then(t=>{u.info("覆盖【PV&其他】、【预告】、【主题曲】的点击事件"),h.on(t,"click","li.section-preview-item",function(e){d.preventEvent(e),xt.jumpToUrl(e);},{capture:true});}),d.waitNode(x.className.bangumi+" .section-preview-header").then(t=>{u.info("覆盖【PV&其他】、【预告】、【主题曲】右上角的Arrow的点击事件"),h.on(t,"click",function(e){d.preventEvent(e);},{capture:true});}),h.on(document,"click",x.className.bangumi_new+' [class^="SectionPanel_container"] m-open-app[universallink]',(t,e)=>{let r=xt.getUrl(e);if(!r){k.error("获取跳转链接失败");return}z.goToUrl(r);},{capture:true});},setRecommendClickEvent(){d.waitNode(x.className.bangumi+" .recom-wrapper ul.recom-list").then(t=>{u.info("覆盖【更多推荐】番剧的点击事件"),h.on(t,"click","li.recom-item-v2",function(e){d.preventEvent(e),xt.jumpToUrl(e);},{capture:true});}),h.on(document,"click",x.className.bangumi_new+' [class^="Footer_container"] m-open-app[universallink]',(t,e)=>{let r=xt.getUrl(e);if(!r){k.error("获取跳转链接失败");return}z.goToUrl(r);},{capture:true});},coverVideoPlayer(){if(document.querySelector("#artplayer"))u.warn("已存在播放器，更新播放信息");else {P(`
			.player-wrapper,
			.open-app-bar,
			${x.className.bangumi_new} [class^="Player_videoWrap"] > div:not(.artplayer-container){
				display: none !important;
			}
			
			${ae}
			
			${Wr}
			
			.artplayer-container{
				height: -webkit-fill-available;
				height: 100%;
			}
			`);let t=f.getValue("bili-bangumi-artplayer-controlsPadding-left-right",0);t!=0&&P(`
				@media (orientation: landscape) {
					.art-video-player .art-layers .art-layer-top-wrap,
					/* 底部 */
					.art-video-player .art-bottom{
						padding-left: ${t}px !important;
						padding-right: ${t}px !important;
					}
					
					/* 锁定图标 */
					.art-video-player  .art-layer-lock{
						--art-lock-left-size: ${t}px;
					}
				}
				`);}tr.updateArtPlayerVideoInfo();}},er={async getSearchInputPlaceholder(){let t=await X.get("https://api.bilibili.com/x/web-interface/wbi/search/default",{fetch:true,headers:{accept:"application/json, text/plain, */*","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","cache-control":"no-cache",pragma:"no-cache","sec-ch-ua":'""',"sec-ch-ua-mobile":"?1","sec-ch-ua-platform":'""',"sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-site"},allowInterceptConfig:false});if(!t.status)return;let e=d.toJSON(t.data.responseText);if(dt.isWebApiSuccess(e))return e.data},async getBangumiSearchResult(t){let e={search_type:"media_bangumi",keyword:t.keyword,from_client:"BROWSER",drm_tech_type:"2",module:"bangumi",area:t.area.toLowerCase(),access_key:Tt.getAccessToken()},r=`https://${t.host}/x/web-interface/search/type?${d.toSearchParamsStr(e)}`,n=await X.get(r,{fetch:false,headers:{"User-Agent":d.getRandomAndroidUA()}});if(!n.status)return;let i=d.toJSON(n.data.responseText);return dt.isWebApiSuccess(i)?{isSuccess:true,data:i.data.result}:(u.error(`请求失败，当前代理服务器信息：${JSON.stringify(t.host)}`),u.error(`请求失败，当前请求的响应信息：${JSON.stringify(i)}`),{isSuccess:false,data:i})}},en=`#app .m-search {\r
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
`,rr={$flag_css:{enableOtherAreaSearchBangumi:false},init(){P(en),h.ready(()=>{f.execMenu("bili-search-enableOtherAreaSearchBangumi",()=>{this.enableOtherAreaSearchBangumi();});});},enableOtherAreaSearchBangumi(){this.$flag_css.enableOtherAreaSearchBangumi||(this.$flag_css.enableOtherAreaSearchBangumi=true,P(`
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
			`)),d.waitNode(".m-search-result .tabs:not(:has(.gm-tab-item))").then(t=>{te.getSearchProxyHost().forEach(n=>{let i=h.createElement("a",{className:"tab-item gm-tab-item",innerHTML:`番剧（${n.name}）`},{"data-area":n.area,"data-host":n.host});t.appendChild(i);});const r=n=>{t.querySelectorAll(".tab-item").forEach(i=>n!=i&&i.classList.remove("on")),n.classList.add("on");};h.on(t,"click",".tab-item",async n=>{let i=n.target;r(i);let a=document.querySelector(".result-panel"),o=document.querySelector(".gm-result-panel");if(o&&(o.remove(),h.show(a)),!i.classList.contains("gm-tab-item"))return;let l=i.dataset.area,s=i.dataset.host,p=document.querySelector(".m-search-result"),c=T.getVue(p);c.switchTab(233),h.hide(a);let m=c.keyword,g=k.loading("搜索中，请稍后..."),C=await er.getBangumiSearchResult({keyword:m,area:l,host:s});if(g.close(),!C)return;if(!C.isSuccess){alert(JSON.stringify(C.data,null,2));return}let B=C.data;u.info("搜索结果：",B);let _=h.createElement("div",{className:"gm-result-panel",innerHTML:`
						<div class="gm-list-view">
							<div class="gm-video-list-box">
								<div class="gm-video-list">
									<div class="gm-card-box"></div>
								</div>
							</div>
						</div>
					`}),L=_.querySelector(".gm-card-box");B.forEach(M=>{L.appendChild(this.createSearchResultVideoItem(M));}),p.appendChild(_);});});},createSearchResultVideoItem(t){var s,p;let e=h.createElement("div",{className:"gm-card-item",innerHTML:`
				<div class="gm-card-container">
					<div class="gm-card-cover">
						<div class="gm-card-badges">${t.season_type_name}</div>
						<img src="${t.cover}" alt="封面">
					</div>
					<div class="gm-card-info">
						<div class="gm-card-info-container">
							<div class="gm-card-title">${t.title}</div>
							<div class="gm-card-display-info">
							</div>
							<div class="gm-card-styles">${t.styles||Reflect.get(t,"style")||Reflect.get(t,"styles_v2")||""}</div>
						</div>
						<div class="gm-card-media_score">
							
						</div>
					</div>
					<div class="gm-card-ferture">
					</div>
				</div>
				<div class="gm-card-eps">
					
				</div>
				`},{"data-url":t.url,"data-type":t.type,"data-media_id":t.media_id,"data-pgc_season_id":t.pgc_season_id,"data-is_follow":t.is_follow,"data-is_selection":t.is_selection});Reflect.set(e,"data-option",t),h.on(e,"click",c=>{d.preventEvent(c),window.open(t.url,"_blank");});let r=e.querySelector(".gm-card-display-info"),n=[];Array.isArray(t==null?void 0:t.display_info)&&(n=n.concat(t.display_info)),Array.isArray(t==null?void 0:t.badges)&&(n=n.concat(t.badges)),n=d.uniqueArray(n,c=>c.text),n.forEach(c=>{let m=h.createElement("span",{className:"gm-card-badge-info-item",innerText:c.text});typeof c.border_color=="string"&&(m.style.border=`1px solid ${c.border_color}`,m.style.color=c.border_color),h.append(r,m);}),t.pubtime&&h.append(r,`
				<span>${d.formatTime(t.pubtime*1e3,"yyyy")}</span>
				`);let i=t.areas||Reflect.get(t,"area");i&&(r.children.length&&h.append(r,`
					<span> | </span>
				`),h.append(r,`
					<span>${i}</span>
				`));let a=e.querySelector(".gm-card-media_score");t.media_score&&t.media_score.user_count&&h.append(a,`
				<span class="gm-card-media_score-score">${((s=t.media_score)==null?void 0:s.score)||0}分</span>
				<span class="gm-card-media_score-user_count">${((p=t.media_score)==null?void 0:p.user_count)||0}人参与</span>
				`);let o=e.querySelector(".gm-card-eps");return [...t.eps||[],...Reflect.get(t,"episodes_new")||[]].filter(c=>d.isNotNull(c)).forEach(c=>{let m=c.title||c.long_title,g=c.url||Reflect.get(c,"uri"),C=h.createElement("div",{className:"gm-card-ep-conatiner",innerHTML:`
				<div class="gm-card-ep-badges-container">
					
				</div>
				<div class="gm-card-ep-info-container">
					${m}
				</div>`},{"data-id":c.id,"data-url":g,"data-title":m,"data-long_title":c.long_title}),B=C.querySelector(".gm-card-ep-badges-container");if(C.querySelector(".gm-card-ep-info-container"),Array.isArray(c.badges)&&c.badges.length){let _=c.badges[0],L=h.createElement("span",{className:"gm-card-ep-badge-top-right",innerText:_.text});typeof _.bg_color=="string"&&(L.style.backgroundColor=_.bg_color),typeof _.text_color=="string"&&(L.style.color=_.text_color),h.append(B,L);}h.on(C,"click",_=>{d.preventEvent(_),window.open(g,"_blank");}),o.appendChild(C);}),e},searchBangumi(){}},rn={$flag:{mutationSearchResult:false},init(){this.mutationSearchResult();},mutationSearchResult(){this.$flag.mutationSearchResult||(this.$flag.mutationSearchResult=true,P(`
        .bangumi-list{
            padding: 0 10px;
        }
        `),d.mutationObserver(document,{config:{subtree:true,childList:true},callback:d.debounce(()=>{document.querySelectorAll(".m-search-bangumi-item").forEach(t=>{let e=T.getVue(t);if(!e)return;let r=e.info;if(!r)return;let n=rr.createSearchResultVideoItem(r);h.after(t,n),t.remove();});})}));}},nn={init(){f.execMenuOnce("bili-search-vue-prop-noCallApp",()=>{this.noCallApp();}),f.execMenuOnce("bili-search-vue-prop-openAppDialog",()=>{this.openAppDialog();});},noCallApp(){let t=new d.LockFunction(()=>{document.querySelectorAll(".video-list .card-box > div:not([data-gm-inject-no-call-app])").forEach(e=>{let r=T.getVue(e);r&&typeof r.noCallApp=="boolean"&&(Object.defineProperty(r,"noCallApp",{value:true,writable:false,enumerable:true,configurable:true}),e.setAttribute("data-gm-inject-no-call-app","true"));});});d.mutationObserver(document,{config:{subtree:true,childList:true},callback(){t.run();}});},openAppDialog(){let t=new d.LockFunction(()=>{document.querySelectorAll(".video-list .card-box > div:not([data-gm-inject-openAppDialog])").forEach(e=>{let r=T.getVue(e);r&&typeof r.openAppDialog=="boolean"&&(Object.defineProperty(r,"openAppDialog",{value:false,writable:false,enumerable:true,configurable:true}),e.setAttribute("data-gm-inject-openAppDialog","true"));});});d.mutationObserver(document,{config:{subtree:true,childList:true},callback(){t.run();}});}},an={init(){W.isSearchResult()&&rr.init(),nn.init(),f.execMenuOnce("bili-search-cover-cancel",()=>{this.coverCancel();}),f.execMenu("bili-search-beautifySearchResult",()=>{rn.init();}),h.ready(()=>{f.execMenu("bili-search-inputAutoFocus",()=>{this.inputAutoFocus();});});},coverCancel(){u.info("覆盖【取消】按钮的点击事件"),h.on(document,"click","a.cancel",t=>{u.info("点击取消按钮"),d.preventEvent(t),window.history.back();},{capture:true});},inputAutoFocus(){if(new URLSearchParams(window.location.search).has("keyword")){u.warn("当前在搜索结果页面，不执行输入框自动获取焦点");return}u.info("输入框自动获取焦点"),d.waitNode('.m-search .m-search-search-bar input[type="search"]',1e4).then(e=>{if(!e){u.error("获取输入框失败");return}e.focus();});}},on={init(){f.execMenuOnce("bili-live-block-chatRoom",()=>this.blockChatRoom()),f.execMenuOnce("bili-live-block-brush-prompt",()=>this.blockBrushPrompt()),f.execMenuOnce("bili-live-block-control-panel",()=>this.blockControlPanel());},blockChatRoom(){return u.info("屏蔽聊天室"),Bt.addBlockCSS("#chat-items")},blockBrushPrompt(){return u.info("屏蔽xxx进入直播间"),Bt.addBlockCSS("#brush-prompt")},blockControlPanel(){return u.info("屏蔽底部工具栏"),Bt.addBlockCSS(".control-panel")}},ln={init(){on.init(),f.execMenuOnce("bili-live-prevent-openAppBtn",()=>{this.preventOpenAppBtn();});},preventOpenAppBtn(){d.waitNode("body").then(t=>{u.info("阻止.open-app-btn元素触发点击事件"),h.on(t,"click",".open-app-btn",function(e){d.preventEvent(e);},{capture:true}),h.on(t,"click","#web-player-controller-wrap-el",function(e){d.preventEvent(e);},{capture:true});});}},Ae={$data:{dispatchCallBackList:[]},init(){f.execMenu("bili-opus-variable-autoOpenApp",()=>{this.autoOpenApp();}),f.execMenu("bili-opus-variable-go404",()=>{this.go404();}),f.execMenu("bili-opus-variable-handleFallback",()=>{this.dispatch((t,e)=>{if(typeof e=="string"&&e==="opus/handleFallback"&&![1,2].includes(t.fallback.type))return u.success("禁止调用handleFallback函数前往404"),typeof(t==null?void 0:t.showComment)=="boolean"&&t.showComment&&typeof(t==null?void 0:t.initFullComment)=="function"&&t.initFullComment(),false});});},isLimit(){u.info("等待 观察并覆盖变量isLimit"),T.watchVuePropChange(x.className.opus,t=>t.isLimit,t=>{t.isLimit=false,u.success("观察者：覆盖变量isLimit=false");});},autoOpenApp(){T.waitVuePropToSet(x.className.opus,{msg:"等待 覆盖函数autoOpenApp",check(t){return typeof(t==null?void 0:t.autoOpenApp)=="function"},set(t){u.success("成功 覆盖函数autoOpenApp"),t.autoOpenApp=function(){u.success("禁止调用autoOpenApp函数");};}});},go404(){T.waitVuePropToSet(x.className.opus,{msg:"等待 覆盖函数go404",check(t){return typeof(t==null?void 0:t.go404)=="function"},set(t){u.success("成功 覆盖函数go404"),t.go404=function(){u.success("禁止调用go404函数");};}});},fallback(){T.waitVuePropToSet(x.className.opus,{msg:"等待 覆盖对象fallback",check(t){var e;return typeof((e=t==null?void 0:t.fallback)==null?void 0:e.type)=="number"},set(t){u.success("成功 覆盖对象fallback"),t.$watch(()=>t==null?void 0:t.fallback,()=>{t.fallback=null,u.success("覆盖对象fallback");},{deep:true,immediate:true});}});},dispatch(t){let e=t.toString();for(let n=0;n<this.$data.dispatchCallBackList.length;n++)if(this.$data.dispatchCallBackList[n].toString()===e)return;if(u.info("添加dispatch回调判断"),this.$data.dispatchCallBackList.push(t),this.$data.dispatchCallBackList.length>1)return;const r=this;T.waitVuePropToSet(x.className.opus,{msg:"等待 覆盖函数dispatch",check(n){var i;return typeof((i=n==null?void 0:n.$store)==null?void 0:i.dispatch)=="function"},set(n){u.success("成功 覆盖函数dispatch");let i=n.$store.dispatch;n.$store.dispatch=function(...a){let o=a[0];for(let l=0;l<r.$data.dispatchCallBackList.length;l++){const s=r.$data.dispatchCallBackList[l];if(typeof s=="function"){let p=s(n,o);if(typeof p=="boolean"&&!p)return}}return Reflect.apply(i,this,a)};}});}},un={init(){Ae.init(),f.execMenuOnce("bili-opus-cover-topicJump",()=>{this.coverTopicJump();}),f.execMenuOnce("bili-opus-automaticallyExpandToReadFullText",()=>(Ae.isLimit(),this.automaticallyExpandToReadFullText())),f.execMenuOnce("bili-opus-cover-header",()=>{this.coverHeaderJump();});},coverTopicJump(){u.info("覆盖话题跳转点击事件"),h.on(document,"click",x.className.opus+" .launch-app-btn.opus-module-topic",function(t){var a;let e=t.target,r=T.getVue(e);if(!r){k.error("获取话题的__vue__失败");return}let n=(a=r==null?void 0:r.$props)==null?void 0:a.data,i=n==null?void 0:n.jump_url;if(d.isNull(i)){k.error("获取话题的jump_url失败");return}u.info("话题的跳转信息: ",n),z.goToUrl(i);},{capture:true});},automaticallyExpandToReadFullText(){return u.info("自动展开阅读全文"),[Bt.addBlockCSS(x.className.opus+" .opus-read-more"),P(`
			${x.className.opus} .opus-module-content{
				overflow: unset !important;
				max-height: unset !important;
			}
			`)]},coverHeaderJump(){u.info("覆盖header点击事件"),h.on(document,"click",x.className.opus+" .opus-module-author",function(t){var i;d.preventEvent(t);let e=t.target,r=T.getVue(e);if(!r){k.error("获取vue属性失败");return}let n=(i=r==null?void 0:r.data)==null?void 0:i.mid;if(!n){k.error("获取mid失败");return}z.goToUrl(Et.getUserSpaceUrl(n));},{capture:true});}},sn={init(){f.execMenuOnce("bili-dynamic-cover-topicJump",()=>{this.coverTopicJump();}),f.execMenuOnce("bili-dynamic-cover-atJump",()=>{this.coverAtJump();}),f.execMenuOnce("bili-dynamic-cover-referenceJump",()=>{this.coverReferenceJump();}),f.execMenuOnce("bili-dynamic-cover-header",()=>{this.coverHeaderJump();});},coverHeaderJump(){u.info("覆盖header点击事件"),h.on(document,"click",x.className.dynamic+" .launch-app-btn .dyn-header",function(t){d.preventEvent(t);let e=t.target,r=T.getVue(e);if(!r){k.error("获取vue属性失败");return}let n=r.url;if(!n){k.error("获取url失败");return}z.goToUrl(n);},{capture:true});},coverTopicJump(){u.info("覆盖话题跳转点击事件"),h.on(document,"click",x.className.dynamic+" .launch-app-btn .bili-dyn-topic",function(t){var a;d.preventEvent(t);let e=t.target,r=T.getVue(e);if(!r){k.error("获取vue属性失败");return}let n=(a=r==null?void 0:r.$props)==null?void 0:a.data,i=n==null?void 0:n.jump_url;if(d.isNull(i)){k.error("获取jump_url失败");return}u.info("话题的跳转信息: ",n),z.goToUrl(i);},{capture:true});},coverAtJump(){u.info("覆盖@ 跳转"),h.on(document,"click",x.className.dynamic+" .at",function(t){var n,i;d.preventEvent(t);let e=t.target,r=e.getAttribute("data-oid")||((i=(n=T.getVue(e))==null?void 0:n.$props)==null?void 0:i.rid);if(d.isNull(r)){k.error("获取data-oid或rid失败");return}u.info("用户的oid: "+r),z.goToUrl(Et.getUserSpaceDynamicUrl(r));},{capture:true});},coverReferenceJump(){u.info("覆盖引用的点击事件"),h.on(document,"click",x.className.dynamic+" .dyn-content .reference .dyn-orig-author",function(t){d.preventEvent(t);let r=t.target.getAttribute("data-url");if(!r){k.error("获取data-url失败");return}z.goToUrl(r);},{capture:true}),h.on(document,"click",x.className.dynamic+" .dyn-content .reference .dyn-archive",function(t){var i;d.preventEvent(t);let e=t.target,r=T.getVue(e);if(!r){k.error("获取vue属性失败");return}let n=(i=r==null?void 0:r.data)==null?void 0:i.jump_url;if(d.isNull(n)){k.error("获取jump_url失败");return}z.goToUrl(n);},{capture:true});}},Nt={$isHook:{windowPlayerAgent:false,hookWebpackJsonp_openApp:false,overRideLaunchAppBtn_Vue_openApp:false,overRideBiliOpenApp:false,overRideWxTaghandleClick:false},$data:{setTimeout:[]},windowWebPack(t="webpackJsonp",e,r){let n;ce.Object.defineProperty(et,t,{get(){return n},set(i){u.success("成功劫持webpack，当前webpack名："+t),n=i;const a=n.push;n.push=function(...o){let l=o[0][0];return (e==l||Array.isArray(e)&&Array.isArray(l)&&JSON.stringify(e)===JSON.stringify(l))&&Object.keys(o[0][1]).forEach(s=>{let p=o[0][1][s];o[0][1][s]=function(...c){let m=p.call(this,...c);return c[0]=r(c[0]),m};}),a.call(this,...o)};}});},setTimeout(t){if(this.$data.setTimeout.push(t),this.$data.setTimeout.length>1){u.info("window.setTimeout hook新增劫持判断参数："+t);return}et.setTimeout=function(...e){let r=e[0].toString();if(r.match(t)){u.success("劫持setTimeout的函数",r);return}return ce.setTimeout.apply(this,e)};},overRideLaunchAppBtn_Vue_openApp(){if(this.$isHook.overRideLaunchAppBtn_Vue_openApp)return;this.$isHook.overRideLaunchAppBtn_Vue_openApp=true;function t(e){typeof e.openApp!="function"||e.openApp.toString().includes("阻止唤醒App")||(e.openApp=function(...n){u.success("openApp：阻止唤醒App",n);});}d.mutationObserver(document,{config:{subtree:true,childList:true,attributes:true},immediate:true,callback(){document.querySelectorAll(".launch-app-btn").forEach(e=>{let r=T.getVue(e);r&&(t(r),r.$children&&r.$children.length&&r.$children.forEach(n=>{t(n);}));});}});},overRideBiliOpenApp(){this.$isHook.overRideBiliOpenApp||(this.$isHook.overRideBiliOpenApp=true,d.mutationObserver(document,{config:{subtree:true,childList:true,attributes:true},immediate:true,callback(){[...Array.from(ht("bili-open-app")),...Array.from(ht("m-open-app"))].forEach(t=>{if(t.hasAttribute("data-inject-opener-open"))return;let e=Reflect.get(t,"opener");if(e==null)return;typeof(e==null?void 0:e.open)=="function"&&(Reflect.set(e,"open",n=>{u.success(`拦截bili-open-app.open跳转: ${JSON.stringify(n)}`),typeof(n==null?void 0:n.universalLink)=="string"&&z.goToUrl(n.universalLink);}),t.setAttribute("data-inject-opener-open","true"));});}}));},overRideWxTaghandleClick(){this.$isHook.overRideWxTaghandleClick||(this.$isHook.overRideWxTaghandleClick=true,d.mutationObserver(document,{config:{subtree:true,childList:true,attributes:true},immediate:true,callback(){[...Array.from(ht(".wx-tag"))].forEach(t=>{if(t.hasAttribute("data-inject-vueins-handle-click"))return;let e=T.getVue(t);e&&(typeof(e==null?void 0:e.handleClick)=="function"&&(e.handleClick=function(){typeof e.goToVideo=="function"?e.goToVideo():k.error(".wx-tag不存在goToVideo函数",{consoleLogContent:true});},t.setAttribute("data-inject-vueins-handle-click","true")),Array.isArray(e==null?void 0:e.$children)&&e.$children.length&&typeof e.$children[0].handleClick=="function"&&(e.$children[0].handleClick=e.handleClick));});}}));}},cn=`#app .m-head .m-recommend-view {\r
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
`;var pn=23442827791579n,dn=1n<<51n,Ee=58n,mn="FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf";function hn(t){const e=["B","V","1","0","0","0","0","0","0","0","0","0"];let r=e.length-1,n=(dn|BigInt(t))^pn;for(;n>0;)e[r]=mn[Number(n%BigInt(Ee))],n=n/Ee,r-=1;return [e[3],e[9]]=[e[9],e[3]],[e[4],e[7]]=[e[7],e[4]],e.join("")}const Be=t=>(t.startsWith("http://")&&(t=t.replace(/^http/,"https")),t),fn={$flag:{isInitCSS:false,isLoadingNextPage:false},$data:{intersectionObserver:null,loadNums:0},$ele:{$listView:null,$videoListBox:null,$videoList:null,$cardBox:null,$listViewShim:null},$cardGoto:{av:"av",picture:"picture"},init(){this.setCSS(),h.ready(()=>{this.addRecommendTag();});},setCSS(){this.$flag.isInitCSS||(this.$flag.isInitCSS=true,P(cn));},reset(){u.info("重置状态"),this.$flag.isLoadingNextPage=false,this.removeScrollEvent(),Object.keys(this.$ele).forEach(t=>{this.$ele[t]=null;});},addRecommendTag(){if(document.querySelector(".channel-menu a.recommend-tag"))return;let t=document.querySelector(".channel-menu .v-switcher");if(!t){u.error("添加推荐标签失败，原因：.channel-menu .v-switcher不存在"),k.error("添加推荐标签失败，原因：.channel-menu .v-switcher不存在");return}let e=h.createElement("a",{className:"v-switcher__header__tabs__item recommend-tag",innerHTML:"<span>推荐</span>"},{href:"javascript:;"}),r=h.createElement("div",{className:"m-recommend-view",innerHTML:`
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
            `});this.$ele.$listView=r.querySelector(".list-view"),this.$ele.$videoListBox=r.querySelector(".video-list-box"),this.$ele.$videoList=r.querySelector(".video-list"),this.$ele.$cardBox=r.querySelector(".card-box"),this.$ele.$listViewShim=r.querySelector(".list-view__shim"),this.$ele.$listViewShim.style.cssText="z-index:-1;user-select:none;pointer-events:none;background:transparent;left:0;bottom:0;width:100%;height:200px;";let n=document.querySelector("#app .m-head");n&&n.appendChild(r),h.on(e,"click",i=>{d.preventEvent(i),e.classList.add("is-avtive"),this.recommendClickEvent();}),h.on(t,"click",()=>{e.classList.remove("is-avtive");},{capture:true}),h.on(this.$ele.$cardBox,"click",".v-card",i=>{d.preventEvent(i);let a=i.target;window.open(a.href,"_blank");}),h.before(t,e),this.setScrollEvent(),window.location.hash==="#/recommend/"&&(u.info("当前hash为推荐视频，出动触发"),e.click());},async recommendClickEvent(){z.goToUrl("#/recommend/",true);},setScrollEvent(){u.success("推荐视频监听滚动: IntersectionObserver"),this.$data.intersectionObserver=new IntersectionObserver(async t=>{if(!this.$flag.isLoadingNextPage&&t[0].isIntersecting){this.$flag.isLoadingNextPage=true;let e=await this.scrollEvent();this.$flag.isLoadingNextPage=false,this.$data.loadNums<=1&&e?(h.hide(this.$ele.$listViewShim,false),await d.sleep(500),h.show(this.$ele.$listViewShim,false)):h.show(this.$ele.$listViewShim,false);}},{threshold:0,rootMargin:"0px 0px 0px 0px"}),this.$data.intersectionObserver.observe(this.$ele.$listViewShim);},removeScrollEvent(){var t;(t=this.$data.intersectionObserver)==null||t.disconnect(),this.$data.intersectionObserver=null;},async scrollEvent(){let t=await this.getRecommendVideoInfo();if(!t)return  false;u.success("获取推荐视频信息",t);let e=document.createDocumentFragment(),r=f.getValue("bili-head-recommend-push-graphic");return t.forEach(n=>{let i=null;if(n.goto===this.$cardGoto.av)i=this.getRecommendItemAVElement(n);else if(n.goto===this.$cardGoto.picture)if(r)i=this.getRecommendItemPictureElement(n);else return;else {u.error("该goto暂未适配",n);return}e.appendChild(i);}),this.$ele.$cardBox.appendChild(e),this.$data.loadNums++,true},async getRecommendVideoInfo(){var i;let t={appkey:vt.ios.appkey,access_key:((i=Tt.getAccessTokenInfo())==null?void 0:i.access_token)||""},r=await X.get("https://app.bilibili.com/x/v2/feed/index"+"?"+d.toSearchParamsStr(t),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(!r.status)return;let n=d.toJSON(r.data.responseText);if(!dt.isWebApiSuccess(n)){k.error(n.message);return}return n.data.items},getRecommendItemPictureElement(t){let e=t.goto,r=t.param,n="/opus/"+r,i=t.args.up_name,a=t.title,o=Be(t.cover),l=t.cover_left_text_1,s=h.createElement("a",{className:"v-card",href:n,innerHTML:`
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
                `},{"data-param":r,"data-title":a,"data-goto":e});return s["data-picture"]=t,s},getRecommendItemAVElement(t){var g;let e=t.goto,r=((g=t==null?void 0:t.player_args)==null?void 0:g.aid)||t.args.aid,i="/video/"+hn(r),a=t.args.up_name,o=t.title,l=Be(t.cover),s=t.cover_left_text_1,p=t.cover_left_text_2,c=t.cover_right_text,m=h.createElement("a",{className:"v-card",href:i,innerHTML:`
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
                            ${p}
                        </span>
                        <span class="gm-video-duration">${c}</span>
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
                `},{"data-aid":r,"data-title":o,"data-goto":e});return m["data-video"]=t,m}},gn={$flag:{isInit_reconfigurationTinyAppSettingButton:false,isInit_beautifyTopNavBar_css:false},init(){f.execMenuOnce("bili-head-supplementaryVideoStreamingInformation",()=>{this.addVideoListUPInfo();}),f.execMenu("bili-head-recommend-enable",()=>{fn.init();});},addVideoListUPInfo(){u.info("添加视频列表UP主信息"),P(`
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
        `),d.waitNode(x.className.head+" .video-list .card-box").then(()=>{let t=new d.LockFunction(()=>{document.querySelectorAll(x.className.head+" .video-list .card-box .v-card").forEach(e=>{var a,o,l,s,p;let r=T.getVue(e),n=((o=(a=r==null?void 0:r.info)==null?void 0:a.author)==null?void 0:o.name)||((s=(l=r==null?void 0:r.info)==null?void 0:l.owner)==null?void 0:s.name),i=(p=r==null?void 0:r.info)==null?void 0:p.duration;if(n&&!e.querySelector(".gm-up-info")){let c=document.createElement("div");c.innerHTML=`
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
                                    </div>`,c.className="gm-up-info",e.appendChild(c);}if(i){let c=e.querySelector(".count");if(c&&!c.querySelector(".gm-video-duration")){let m=typeof i=="string"?i:z.parseDuration(i),g=document.createElement("span");g.className="gm-video-duration",g.innerHTML=m,c.appendChild(g);}}});},25);d.mutationObserver(document.body,{config:{subtree:true,childList:true,attributes:true},callback(){t.run();}});});},async reconfigurationTinyAppSettingButton(){u.info("重构tinyApp右上角的设置按钮图标"),this.$flag.isInit_reconfigurationTinyAppSettingButton||(this.$flag.isInit_reconfigurationTinyAppSettingButton=true,P(`

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
			`));let t=await d.waitNode(".nav-bar .icon-config",1e4);if(!t){u.error("未找到设置按钮图标，无法重构");return}t.outerHTML=`
		<div class="gm-face">
			<div class="gm-face-avatar">
				<img src="http://i0.hdslb.com/bfs/face/member/noface.jpg">
			</div>
		</div>
		`;let e=false,r=null,n=document.querySelector(".gm-face"),i=n.querySelector("img");T.waitVuePropToSet("#app",[{check(a){var o,l,s,p;return typeof((p=(s=(l=(o=a==null?void 0:a.$store)==null?void 0:o.state)==null?void 0:l.common)==null?void 0:s.userInfo)==null?void 0:p.isLogin)=="boolean"},set(a){var l,s,p;let o=(p=(s=(l=a==null?void 0:a.$store)==null?void 0:l.state)==null?void 0:s.common)==null?void 0:p.userInfo;if(e=o==null?void 0:o.isLogin,e){if(r=o==null?void 0:o.mid,r==null){u.warn("当前是脚本设置的isLogin但其实未登录账号"),e=false;return}o==null||o.uname,i.src=(o==null?void 0:o.face)||i.src;}else u.warn("经检测，Bilibili尚未登录账号");}}]),h.on(n,"click",a=>{if(d.preventEvent(a),e)if(r!=null){let o=Et.getUserSpaceUrl(r);z.goToUrl(o,false);}else k.error("获取用户id失败");else z.goToLogin(window.location.href);});},beautifyTopNavBar(){u.info("美化顶部navbar"),this.$flag.isInit_beautifyTopNavBar_css||(this.$flag.isInit_beautifyTopNavBar_css=true,P(`
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
			`)),d.waitNode(".m-head .m-navbar .icon-search",1e4).then(async t=>{if(!t||t.parentElement.querySelector(".gm-input-area"))return;let e=h.createElement("div",{className:"gm-input-area",innerHTML:`
						<i class="iconfont ic_search_tab"></i>
						<input type="search" placeholder="" readonly="" disabled="">
					`}),r=e.querySelector("input");h.on(e,"click",i=>{d.preventEvent(i),z.goToUrl("/search",true);}),h.after(t,e);let n=await er.getSearchInputPlaceholder();n!=null&&(u.info("热点信息：",n),r.placeholder=n.show_name||n.name);});}},bn={init(){this.removeAds(),f.onceExec("bili-pc-read-mobile-autoExpand",()=>this.autoExpand());},removeAds(){Bt.addBlockCSS("body>.h5-download-bar");},autoExpand(){return u.info("自动展开"),[P(`
			${me.className.read.mobile} .limit{
				overflow: unset !important;
				max-height: unset !important;
			}`),Bt.addBlockCSS(me.className.read.mobile+" .read-more")]}},vn={init(){f.execMenuOnce("bili-space-repairRealJump",()=>{this.repairRealJump();}),f.execMenuOnce("bili-space-coverDynamicStateCardVideo",()=>{this.coverDynamicStateCardVideo();});},repairRealJump(){let t=new d.LockFunction(()=>{ht(x.className.space+" .wx-tag.open-app-wrapper").forEach(e=>{let r=T.getVue(e);typeof(r==null?void 0:r.disabled)=="boolean"&&(r.disabled=false);});});d.mutationObserver(document,{config:{subtree:true,childList:true},immediate:true,callback:()=>{t.run();}});},coverDynamicStateCardVideo(){u.info("覆盖动态视频的点击事件"),h.on(document,"click",".card-content .main .wings",t=>{var a,o;let r=t.target.closest(".card");if(!r){k.error("未找到对应的.card元素");return}let n=T.getVue(r);if(!n){k.error("未找到对应的vue实例");return}let i=(o=(a=n==null?void 0:n.shareData)==null?void 0:a.default)==null?void 0:o.url;if(!i){k.error("未找到对应的url");return}z.goToUrl(i);},{capture:true});}},yn={init(){f.execMenu("bili-noCallApp",()=>{this.noCallApp();}),f.execMenu("bili-setLogin",()=>{this.setLogin();}),f.execMenu("bili-setIsClient",()=>{this.setIsClient();});},noCallApp(){T.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.noCallApp",check(t){var e,r,n;return typeof((n=(r=(e=t==null?void 0:t.$store)==null?void 0:e.state)==null?void 0:r.common)==null?void 0:n.noCallApp)=="boolean"},set(t){u.success("成功设置参数 $store.state.common.noCallApp=true"),t.$store.state.common.noCallApp=true;}}]);},setLogin(){let t=new d.GM_Cookie,e=t.get("DedeUserID");e!=null?u.info("Cookie DedeUserID已存在：",e.value):t.set({name:"DedeUserID",value:"2333"},r=>{r?u.error(r):u.success("Cookie成功设置DedeUserID=>2333");}),T.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.userInfo.isLogin",check(r){var n,i,a,o;return typeof((o=(a=(i=(n=r==null?void 0:r.$store)==null?void 0:n.state)==null?void 0:i.common)==null?void 0:a.userInfo)==null?void 0:o.isLogin)=="boolean"},set(r){u.success("成功设置参数 $store.state.common.userInfo.isLogin=true"),r.$store.state.common.userInfo.isLogin=true;}},{msg:"设置参数 $store.state.loginInfo.isLogin",check(r){var n,i,a;return typeof((a=(i=(n=r==null?void 0:r.$store)==null?void 0:n.state)==null?void 0:i.loginInfo)==null?void 0:a.isLogin)=="boolean"},set(r){u.success("成功设置参数 $store.state.loginInfo.isLogin=true"),r.$store.state.loginInfo.isLogin=true;}}]);},setIsClient(){T.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.video.isClient",check(t){var e,r,n;return typeof typeof((n=(r=(e=t==null?void 0:t.$store)==null?void 0:e.state)==null?void 0:r.video)==null?void 0:n.isClient)=="boolean"},set(t){u.success("成功设置参数 $store.state.video.isClient=true"),t.$store.state.video.isClient=true;}},{msg:"设置参数 $store.state.opus.isClient=true",check(t){var e,r,n;return typeof((n=(r=(e=t==null?void 0:t.$store)==null?void 0:e.state)==null?void 0:r.opus)==null?void 0:n.isClient)=="boolean"},set(t){u.success("成功设置参数 $store.state.opus.isClient"),t.$store.state.opus.isClient=true;}},{msg:"设置参数 $store.state.playlist.isClient",check(t){var e,r,n;return typeof((n=(r=(e=t==null?void 0:t.$store)==null?void 0:e.state)==null?void 0:r.playlist)==null?void 0:n.isClient)=="boolean"},set(t){u.success("成功设置参数 $store.state.playlist.isClient=true"),t.$store.state.playlist.isClient=true;}},{msg:"设置参数 $store.state.ver.bili",check(t){var e,r,n;return typeof((n=(r=(e=t==null?void 0:t.$store)==null?void 0:e.state)==null?void 0:r.ver)==null?void 0:n.bili)=="boolean"},set(t){u.success("成功设置参数 $store.state.ver.bili=true"),t.$store.state.ver.bili=true;}},{msg:"设置参数 $store.state.ver.biliVer",check(t){var e,r,n;return typeof((n=(r=(e=t==null?void 0:t.$store)==null?void 0:e.state)==null?void 0:r.ver)==null?void 0:n.biliVer)=="number"},set(t){u.success("成功设置参数 $store.state.ver.biliVer=2333333"),t.$store.state.ver.biliVer=2333333;}}]);},setTinyApp(){T.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.tinyApp",check(t){var e,r,n;return typeof((n=(r=(e=t==null?void 0:t.$store)==null?void 0:e.state)==null?void 0:r.common)==null?void 0:n.tinyApp)=="boolean"},set(t){t.$store.state.common.tinyApp=true,u.success("成功设置参数 $store.state.common.tinyApp=true"),f.onceExec("bili-tinyApp-init-css",()=>{P(`
							.tiny-app .reply-input,.tiny-app .reply-item .info .name .right,.tiny-app .reply-item .info .toolbar,.tiny-app .sub-reply-input {
								display: block;
							}
						`);});}}]);}},De={async space(t,e=""){let r=await X.get("https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/space",{data:{host_mid:t,offset:e},fetch:true});if(!r.status)return;let n=d.toJSON(r.data.responseText);if(dt.isWebApiSuccess(n))return n.data},async following(t,e=1,r=50){let n=await X.get("https://api.bilibili.com/x/relation/followings",{data:{vmid:t,ps:r,pn:e},fetch:true});if(!n.status)return;let i=d.toJSON(n.data.responseText);return dt.isWebApiSuccess(i)?i.data:i.message}},xn={$data:{searchIcon:`
            <svg viewBox="0 0 24 24" fill="none">
                <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        `},init(){wt.init(),P(`
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
        `),h.ready(()=>{let t=new d.LockFunction(async()=>{ht(".reply-item:not([data-is-inject-search-label])").forEach(e=>{e.setAttribute("data-is-inject-search-label","");let r=e.querySelector(".info .floor-time")||e.querySelector(".content-warp .user-info"),{$container:n,$compositionNameControl:i}=this.createSearchButton(()=>{let a=e.querySelector(".user-name[data-user-id]");if(!a)throw new TypeError("获取用户名元素失败");let o=a.getAttribute("data-user-id");if(o==null)throw new TypeError("获取mid失败");return o});h.after(r,n);}),[...Array.from(ht(".reply-item .member-link[data-url]:not([data-is-inject-search-label])")),...Array.from(ht(".reply-item .jump-link.user[data-user-id]:not([data-is-inject-search-label])")),...Array.from(ht(".reply-item .sub-user-name[data-user-id]:not([data-is-inject-search-label])"))].forEach(e=>{e.setAttribute("data-is-inject-search-label","");let{$container:r,$compositionNameControl:n}=this.createSearchButton(()=>{var o;let a=(o=e.getAttribute("href").match(/space.bilibili.com\/([\d]+)/i))==null?void 0:o[1];if(a==null)throw new TypeError("获取mid失败");return a});h.after(e,r);}),ht(".m-space-info .base:not([data-is-inject-search-label])").forEach(e=>{e.setAttribute("data-is-inject-search-label","");let r=e.closest(".m-space-info"),{$container:n}=this.createSearchButton(()=>{let i=T.getVue(r);if(!i)throw new TypeError("获取vue属性失败");let a=i.info.mid;if(a==null)throw new TypeError("获取mid失败");return a});h.after(e,n);});});d.mutationObserver(document,{config:{subtree:true,childList:true},immediate:true,callback:()=>{t.run();}});});},async queryUserInfo(t){let e=1,r=[];for(;;){u.info(`正在获取用户的关注：${t} ==> 第${e}页`);let l=await De.following(t,e);if(!l){u.error("获取关注列表失败");break}if(typeof l=="string"){u.error("获取关注列表失败，原因："+l);break}if(!l.list.length||(r=r.concat(l.list),l.list.length===l.total&&e===1))break;e++,d.sleep(250);}let n="",i=1,a=[];for(;;){u.info(`正在获取用户的空间动态：${t} ==> 偏移：${n}`);let l=await De.space(t,n);if(!l){u.error("获取用户空间动态数据失败");break}if(typeof l=="string"){u.error("获取用户空间动态数据失败，原因："+l);break}if(n===l.offset&&n!=""||(n=l.offset,a=a.concat(l.items),!l.has_more))break;if(i++,i>5){u.info("最多请求5页空间动态的数据");break}d.sleep(250);}let o={following:[],space:[]};return r.forEach(l=>{o.following.push({name:l.uname,mid:l.mid,sign:l.sign});}),a.forEach(l=>{var s,p,c,m,g,C,B,_,L,M,$,v,A,N,U;if(l.orig==null){let Q={title:(p=(s=l.modules.module_dynamic.major)==null?void 0:s.archive)==null?void 0:p.title,desc:((m=(c=l.modules.module_dynamic.major)==null?void 0:c.archive)==null?void 0:m.desc)||((g=l.modules.module_dynamic.desc)==null?void 0:g.text),pub_ts:l.modules.module_author.pub_ts*1e3,id_str:l.id_str};o.space.push({contentInfo:Q});}else {let Q={title:null,desc:(C=l.modules.module_dynamic.desc)==null?void 0:C.text,pub_ts:l.modules.module_author.pub_ts*1e3,id_str:l.id_str},ot={mid:l.orig.modules.module_author.mid,name:l.orig.modules.module_author.name,title:((L=(_=(B=l.orig.modules.module_dynamic)==null?void 0:B.major)==null?void 0:_.archive)==null?void 0:L.title)||null,desc:((M=l.orig.modules.module_dynamic.desc)==null?void 0:M.text)??((A=(v=($=l.orig.modules.module_dynamic)==null?void 0:$.major)==null?void 0:v.archive)==null?void 0:A.desc),pub_ts:l.orig.modules.module_author.pub_ts*1e3,id_str:l.orig.id_str};typeof ot.desc=="string"&&Array.isArray((U=(N=l.orig.modules.module_dynamic)==null?void 0:N.desc)==null?void 0:U.rich_text_nodes)&&l.orig.modules.module_dynamic.desc.rich_text_nodes.forEach(G=>{var I;G.type==="RICH_TEXT_NODE_TYPE_AT"&&(ot.desc=(I=ot.desc)==null?void 0:I.replace(G.text,""));}),o.space.push({contentInfo:Q,forwardInfo:ot});}}),o},createSearchButton(t){let e=h.createElement("div",{className:"composition-checkable",innerHTML:`
                <div class="composition-badge-control">
                    <span class="composition-name-control">
                        ${this.$data.searchIcon}
                    </span>
                </div>
            `}),r=e.querySelector(".composition-name-control");return h.on(e,"click",async n=>{if(d.preventEvent(n),e.hasAttribute("data-is-searching")){u.error("正在搜索中，请稍后再试");return}e.setAttribute("data-is-searching",""),h.html(r,"...");try{if(wt.$data.ruleData.length===0){k.warning("未配置规则，请在设置中进行添加"),h.html(r,this.$data.searchIcon);return}let i=t();this.clearLabel(e);let a=await this.queryUserInfo(i);this.handleShowLabel(i,a,e),h.html(r,this.$data.searchIcon);}catch(i){u.error(i),k.error(i.message,{timeout:3500}),h.html(r,"重试");}finally{e.removeAttribute("data-is-searching");}}),{$container:e,$compositionNameControl:r}},createLabel(t){let e=h.createElement("div",{className:"composition-checked",innerHTML:`
				<div class="composition-badge">
				</div>
			`}),r=e.querySelector(".composition-badge");if(t.rule.data.isShowDisplayName){let n=h.createElement("span",{className:"composition-name",innerHTML:t.rule.data.displayName});h.append(r,n);}if(t.rule.data.isShowDisplayIcon){let n=null;t.rule.data.displayIcon.startsWith("http")?n=h.createElement("img",{className:"composition-icon",src:t.rule.data.displayIcon},{referrer:"no-referrer",referrerPolicy:"no-referrer"}):n=h.createElement("span",{className:"composition-icon",innerHTML:t.rule.data.displayIcon}),h.append(r,n);}return h.on(r,"click",n=>{d.preventEvent(n),Z.alert({title:{text:"识别信息",html:false,position:"center"},content:{text:`
						${t.matchedInfoList.map(i=>{let a=h.createElement("div",{className:"reason-container",innerHTML:`
										<div class="reason-text"><span>原因：</span>${i.reason}</div>
										<div class="reason-text"><span>匹配：</span>${typeof i.reasonLink=="string"?`
											<a href="${i.reasonLink}" target="_blank">${i.reasonText}</a>
										`:i.reasonText}</div>
									`});if(typeof i.reasonTime=="number"){let o=h.createElement("div",{className:"reason-text",innerHTML:`
										<span>时间：</span>${d.formatTime(i.reasonTime)}
										`});h.append(a,o);}return a.outerHTML}).join(`
`)}
					`,html:true},btn:{ok:{enable:false}},mask:{enable:true,clickEvent:{toClose:true}},width:Lt.setting.width,height:Lt.setting.height,style:`
					.reason-container{
						color: #7367F0;
						margin: 10px 10px;
					}
				`});}),e},clearLabel(t){var e;for(;;){let r=h.prev(t);if(!r)break;if((e=r==null?void 0:r.classList)!=null&&e.contains("composition-checked"))r.remove();else break}},handleShowLabel(t,e,r){if(wt.$data.ruleData.length===0){k.warning("未配置规则，请在设置中进行添加");return}if(t=t.toString(),wt.$data.whiteList.includes(t))return;let n=[],i=(a,o)=>{let l=n.find(s=>s.rule===a);l?l.matchedInfoList.push(o):n.push({rule:a,matchedInfoList:[o]});};wt.$data.ruleData.forEach(a=>{if(Array.isArray(a.data.blacklist)&&a.data.blacklist.find(o=>o.toString()===t)){i(a,{reason:"黑名单用户",reasonText:t,reasonLink:Et.getUserSpaceUrl(t),reasonTime:null});return}if(Array.isArray(a.data.followings)){let o="关注列表",l="";a.data.followings.some(p=>{let c=e.following.some(m=>m.mid.toString()===p.toString());return c&&(l=p.toString()),c})&&i(a,{reason:o,reasonText:l,reasonLink:Et.getUserSpaceUrl(l),reasonTime:null});}Array.isArray(a.data.keywords)&&a.data.keywords.forEach(o=>{var l,s;for(let p=0;p<e.space.length;p++){const c=e.space[p];let m="",g=o,C=`/opus/${c.contentInfo.id_str}`,B=c.contentInfo.pub_ts;c.forwardInfo==null?typeof c.contentInfo.desc=="string"&&c.contentInfo.desc.match(o)?m="投稿视频简介":typeof c.contentInfo.title=="string"&&c.contentInfo.title.match(o)&&(m="投稿视频标题"):typeof c.contentInfo.desc=="string"&&c.contentInfo.desc.match(o)?m="空间动态转发":typeof((l=c.forwardInfo)==null?void 0:l.title)=="string"&&c.forwardInfo.title.match(o)?m="空间动态视频标题":typeof((s=c.forwardInfo)==null?void 0:s.desc)=="string"&&c.forwardInfo.desc.match(o)&&(m="空间动态视频简介"),m!==""&&i(a,{reason:m,reasonText:g,reasonLink:C,reasonTime:B});}});}),d.sortListByProperty(n,a=>a.matchedInfoList.length,true),n.forEach(a=>{let o=this.createLabel(a);h.before(r,o);});}},Cn={$flag:{isWatchVideoChange:false},$data:{art:null},init(){},updateArtPlayerVideoInfo(t,e){const r=this;T.waitVuePropToSet(x.className.playlist+" .playlist-player",{msg:"等待覆盖playlist播放器",check(n){return typeof(n==null?void 0:n.aid)=="number"&&typeof(n==null?void 0:n.cid)=="number"&&typeof(n==null?void 0:n.bvid)=="string"},async set(n){var B;(B=K(".playlist-player .player-container"))==null||B.remove();let i=K(x.className.playlist+" .playlist-player"),a=K(x.className.playlist),o=T.getVue(a),{aid:l,cid:s,bvid:p}=n,{title:c,cover:m}=o.video;u.info(`视频播放信息 => aid：${l} bvid：${p} cid：${s}`),t==null&&(t={aid:l,bvid:p,cid:s,pic:m,title:c});const g=await Xe(t);if(g==null)return;let C=K("#artplayer");if(!C){const _=h.createElement("div",{className:"artplayer-container",innerHTML:`
								<div id="artplayer"></div>
							`});C=_.querySelector("#artplayer"),h.append(i,_);}if(g.container=C,r.$data.art==null){let _=await St.init(g);if(_)r.$data.art=_;else return;r.$data.art.volume=1,r.$data.art.once("ready",()=>{f.execMenu("bili-video-playerAutoPlayVideoFullScreen",async()=>{u.info("自动进入全屏"),r.$data.art.fullscreen=true,r.$data.art.once("fullscreenError",()=>{u.warn("未成功进入全屏，需要用户交互操作，使用网页全屏代替"),r.$data.art.fullscreenWeb=true;});});}),r.$data.art.on("video:ended",()=>{u.info("视频播放结束，自动下一集");let L=K(x.className.playlist+" .control-panel");if(!L){u.error("未找到播放列表，无法自动播放下一集");return}if(T.getVue(L)==null){u.error("未找到播放列表的Vue实例，无法自动播放下一集");return}let{playMode:$,mediaList:v,videoIndex:A}=n.$store.state.playlist;if(A>=v.length-1)u.info("播放列表已播放完毕");else {let N=K(`.video-card[index="${A}"]`),U=T.getVue(N),Q=U.p;if(Q>=U.video.page){let ot=K(`.video-card[index="${A+1}"]`);T.getVue(ot).changeVideo(),u.info(`当前播放列表共：${v.length-1}个，即将播放下一个视频，第${A+2}个`);}else Q++,U.changeVideo(Q),u.info(`当前播放列表共：${v.length-1}个，即将播放第${A+2}-${Q}`);}});}else await St.update(r.$data.art,g);}}),T.waitVuePropToSet(x.className.playlist+" .playlist-player",{msg:"等待监听playlist播放列表改变",check(n){return typeof n.$watch=="function"},set(n){r.$flag.isWatchVideoChange||(r.$flag.isWatchVideoChange=true,n.$watch("cid",(i,a)=>{u.info("切换播放视频"),r.updateArtPlayerVideoInfo();}));}});}},wn={init(){this.coverVideoPlayer();},coverVideoPlayer(){document.querySelector("#artplayer")?u.warn("已存在播放器，更新播放信息"):P(`
			#app .playlist .playlist-player .player-container{
				display: none !important;
			}
			
			${ae}
			
			${Me}
			
			`),Cn.updateArtPlayerVideoInfo();}},nr={init(){yn.init(),f.execMenuOnce("bili-allowCopy",()=>P(`
				.v-drawer{
					-webkit-user-select: unset !important;
					-moz-user-select: unset !important;
					user-select: unset !important;
				}
			`)),f.onceExec("listenRouterChange",()=>{this.listenRouterChange();}),f.execMenuOnce("bili-hookSetTimeout_autoOpenApp",()=>{u.info("hook  window.setTimeout autoOpenApp"),Nt.setTimeout("autoOpenApp"),Nt.setTimeout("bilibili://"),Nt.setTimeout("void 0 !== y && document[y]");}),f.execMenuOnce("bili-overrideLaunchAppBtn_Vue_openApp",()=>{u.info("覆盖元素.launch-app-btn上的openApp"),Nt.overRideLaunchAppBtn_Vue_openApp();}),f.execMenuOnce("bili-cover-bili-open-app-open",()=>{u.info("覆盖元素bili-open-app上的opener.open"),Nt.overRideBiliOpenApp();}),f.execMenuOnce("bili-cover-wx-tag-handleClick",()=>{u.info("覆盖元素.wx-tag的handleClick函数"),Nt.overRideWxTaghandleClick();}),f.execMenuOnce("bili-head-beautify",()=>(u.info("添加美化CSS"),P($r))),f.execMenuOnce("bili-componentDetection",()=>{xn.init();}),W.isVideo()?(u.info("Router: 视频稿件"),Gr.init()):W.isOpus()?(u.info("Router: 专栏稿件"),un.init()):Cr.isReadMobile()?(u.info("PC-Router: 专栏稿件"),bn.init()):W.isDynamic()?(u.info("Router: 动态"),sn.init()):W.isBangumi()?(u.info("Router: 番剧"),tn.init()):W.isSearch()?(u.info("Router: 搜索"),an.init()):W.isLive()?(u.info("Router: 直播"),ln.init()):W.isTopicDetail()?u.info("Router: 话题"):W.isHead()?(u.info("Router: 首页之类的"),gn.init()):W.isSpace()?(u.info("Router: 个人空间"),vn.init()):W.isPlayList()?(u.info("Router: 播放列表"),wn.init()):u.error("该Router暂未适配，可能是首页之类："+window.location.href),h.ready(()=>{});},listenRouterChange(){T.waitVuePropToSet("#app",{msg:"监听路由变化",check:t=>{var e;return typeof((e=t==null?void 0:t.$router)==null?void 0:e.afterEach)=="function"},set:t=>{u.success("成功设置监听路由变化"),t.$router.beforeHooks.splice(0,0,(e,r,n)=>{if(u.info("路由变化 => 更新前",{to:e,from:r}),e.hash==="#/seeCommentReply"||r.hash==="#/seeCommentReply"){u.info("该路由变化判定为#/seeCommentReply"),n();return}if(f.getValue("bili-repairVueRouter404")&&e.name==="space"){u.info("修复空间跳转404"),window.location.href=e.fullPath;return}if(e.fullPath.startsWith("/video")){if(r.fullPath.startsWith("/video")&&f.getValue("bili-video-forceThisPageToRefreshAndRedirect")){u.info("强制本页刷新"),window.location.href=e.fullPath;return}else if(W.isHead()&&f.getValue("bili-head-openVideoInNewTab")){u.info("当前是首页，新标签页打开"),window.open(e.fullPath,"_blank");return}}else if(e.fullPath.startsWith("/bangumi")){if(r.fullPath.startsWith("/bangumi")){u.info("番剧 => 番剧"),window.location.href=e.fullPath;return}else if(W.isHead()&&f.getValue("bili-head-openVideoInNewTab")){u.info("首页 => 番剧"),window.open(e.fullPath,"_blank");return}}n();}),t.$router.afterHooks.splice(0,0,(e,r)=>{if(u.info("路由变化 => 更新后",{to:e,from:r}),e.hash==="#/seeCommentReply"||r.hash==="#/seeCommentReply"){u.info("该路由变化判定为#/seeCommentReply，不重载");return}f.execMenu("bili-listenRouterChange",()=>{nr.init();});});}});}};f.init();nr.init();Z.config.cssText.index+=`
/* bilibili颜色 #FB7299 */
.pops{
    --bili-color: #FB7299;
    --bili-color-rgb: 251, 114, 153;
}
`;Z.config.cssText.panelCSS+=`

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

})(Qmsg, Utils, DOMUtils, pops, MD5, Artplayer, artplayerPluginDanmuku, Viewer, MD5);