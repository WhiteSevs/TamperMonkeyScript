// ==UserScript==
// @name         【移动端】bilibili优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.10.7.23
// @author       WhiteSevs
// @description  移动端专用，免登录（但登录后可以看更多评论）、阻止跳转App、App端推荐视频流、解锁视频画质(番剧解锁需配合其它插件)、美化显示、去广告等
// @license      GPL-3.0-only
// @icon         https://i0.hdslb.com/bfs/static/jinkela/long/images/512.png
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://m.bilibili.com/*
// @match        *://live.bilibili.com/*
// @match        *://www.bilibili.com/read/*
// @require      https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/497907/1413262/QRCodeJS.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.3/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.3.5/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.3.3/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.7.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/md5@2.3.0/dist/md5.min.js
// @require      https://fastly.jsdelivr.net/npm/flv.js@1.6.2/dist/flv.js
// @require      https://fastly.jsdelivr.net/npm/artplayer-plugin-danmuku@5.1.4/dist/artplayer-plugin-danmuku.js
// @require      https://fastly.jsdelivr.net/npm/artplayer@5.1.7/dist/artplayer.js
// @connect      *
// @connect      m.bilibili.com
// @connect      www.bilibili.com
// @connect      api.bilibili.com
// @connect      app.bilibili.com
// @connect      passport.bilibili.com
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

(a=>{if(typeof GM_addStyle=="function"){GM_addStyle(a);return}function n(e){let p=document.createElement("style");return p.innerHTML=e,document.head?document.head.appendChild(p):document.documentElement.appendChild(p),p}n(a)})(' @charset "UTF-8";.m-video2-awaken-btn,.openapp-dialog,.m-head .launch-app-btn.m-nav-openapp,.m-head .launch-app-btn.home-float-openapp,.m-home .launch-app-btn.home-float-openapp,.m-space .launch-app-btn.m-space-float-openapp,.m-space .launch-app-btn.m-nav-openapp{display:none!important}#app .video .launch-app-btn.m-video-main-launchapp:has([class^=m-video2-awaken]),#app .video .launch-app-btn.m-nav-openapp,#app .video .mplayer-widescreen-callapp,#app .video .launch-app-btn.m-float-openapp,#app .video .m-video-season-panel .launch-app-btn .open-app{display:none!important}#app.LIVE .open-app-btn.bili-btn-warp,#app .m-dynamic .launch-app-btn.m-nav-openapp,#app .m-dynamic .dynamic-float-openapp.dynamic-float-btn,#app .m-opus .float-openapp.opus-float-btn,#app .m-opus .v-switcher .launch-app-btn.list-more,#app .m-opus .opus-nav .launch-app-btn.m-nav-openapp,#app .topic-detail .launch-app-btn.m-nav-openapp,#app .topic-detail .launch-app-btn.m-topic-float-openapp{display:none!important}#app.main-container bili-open-app.btn-download{display:none!important}#app .read-app-main bili-open-app{display:none!important}html{--bili-color: #fb7299;--bili-color-rgb: 251, 114, 153} ');

(function (b, ye, $t, Qe, Tt, Ze, Xe, Be) {
	'use strict';

	var wt=Object.defineProperty;var xt=(e,t,u)=>t in e?wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u;var Te=(e,t,u)=>xt(e,t+"",u);var K=typeof GM_getValue<"u"?GM_getValue:void 0,ve=typeof GM_info<"u"?GM_info:void 0,St=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,de=typeof GM_setValue<"u"?GM_setValue:void 0,kt=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,_t=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,U=typeof unsafeWindow<"u"?unsafeWindow:void 0,et=window;const Vt={$data:{get enable(){return s.getValue("httpx-use-cookie-enable")},get useDocumentCookie(){return s.getValue("httpx-use-document-cookie")},cookieRule:[{key:"httpx-cookie-bilibili.com",hostname:/bilibili.com/g}]},fixCookieSplit(e){return c.isNotNull(e)&&!e.trim().endsWith(";")&&(e+=";"),e},concatCookie(e,t){return c.isNull(e)?t:(e=e.trim(),t=t.trim(),e=this.fixCookieSplit(e),t.startsWith(";")&&(t=t.substring(1)),e.concat(t))},handle(e){if(e.fetch||!this.$data.enable)return;let t="",u=e.url;u.startsWith("//")&&(u=window.location.protocol+u);let i=new URL(u);this.$data.useDocumentCookie&&i.hostname.endsWith(window.location.hostname.split(".").slice(-2).join("."))&&(t=this.concatCookie(t,document.cookie.trim()));for(let r=0;r<this.$data.cookieRule.length;r++){let a=this.$data.cookieRule[r];if(i.hostname.match(a.hostname)){let n=s.getValue(a.key);if(c.isNull(n))break;t=this.concatCookie(t,n);}}c.isNotNull(t)&&(e.headers&&e.headers.Cookie?e.headers.Cookie=this.concatCookie(e.headers.Cookie,t):e.headers.Cookie=t,o.info(["Httpx => 设置cookie:",e])),e.headers&&e.headers.Cookie!=null&&c.isNull(e.headers.Cookie)&&delete e.headers.Cookie;}},Pt="【移动端】bilibili优化",c=ye.noConflict(),f=$t.noConflict(),pe=Qe,Se=et.QRCode||U.QRCode,o=new c.Log(ve,U.console||et.console);var Ke;const ke=((Ke=ve==null?void 0:ve.script)==null?void 0:Ke.name)||Pt,tt=new c.GM_Cookie,ut=!1;o.config({debug:ut,logMaxCount:1e3,autoClearConsole:!0,tag:!0});b.config(Object.defineProperties({html:!0,autoClose:!0,showClose:!1},{position:{get(){return s.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return s.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return s.getValue("qmsg-config-showreverse",!0)}},zIndex:{get(){let e=ye.getMaxZIndex(),t=Qe.config.InstanceUtils.getPopsMaxZIndex(e).zIndex;return ye.getMaxValue(e,t)+100}}}));const Nt=new c.GM_Menu({GM_getValue:K,GM_setValue:de,GM_registerMenuCommand:St,GM_unregisterMenuCommand:kt}),R=new c.Httpx(_t);R.interceptors.request.use(e=>(Vt.handle(e),e));R.interceptors.response.use(void 0,e=>(o.error(["拦截器-请求错误",e]),e.type==="onabort"?b.warning("请求取消"):e.type==="onerror"?b.error("请求异常"):e.type==="ontimeout"?b.error("请求超时"):b.error("其它错误"),e));R.config({logDetails:ut});const _e={Object:{defineProperty:U.Object.defineProperty},Function:{apply:U.Function.prototype.apply,call:U.Function.prototype.call},Element:{appendChild:U.Element.prototype.appendChild},setTimeout:U.setTimeout},S=c.addStyle.bind(c),j="GM_Panel",Mt="data-init",te="data-key",ue="data-default-value",Rt="data-init-more-value",C=function(e,t,u,i,r){let a={text:e,type:"switch",description:r,attributes:{},getValue(){return !!s.getValue(t,u)},callback(n,l){o.success(`${l?"开启":"关闭"} ${e}`),s.setValue(t,!!l);},afterAddToUListCallBack:void 0};return a.attributes&&(a.attributes[te]=t,a.attributes[ue]=!!u),a},Lt=function(e,t,u,i,r,a="",n){let l={text:e,type:"textarea",attributes:{},description:i,placeholder:a,disabled:n,getValue(){return s.getValue(t,u)},callback(d,p){s.setValue(t,p);}};return l.attributes&&(l.attributes[te]=t,l.attributes[ue]=u),l},me=function(e,t,u,i,r,a){let n=[];typeof i=="function"?n=i():n=i;let l={text:e,type:"select",description:a,attributes:{},getValue(){return s.getValue(t,u)},callback(d,p,m){s.setValue(t,p),typeof r=="function"&&r(d,p,m);},data:n};return l.attributes&&(l.attributes[te]=t,l.attributes[ue]=u),l},J=function(e,t,u,i,r,a="",n,l){let d={text:e,type:"input",isNumber:!!n,isPassword:!!l,attributes:{},description:i,getValue(){return s.getValue(t,u)},callback(p,m){typeof r=="function"&&r(p,m)||s.setValue(t,m);},placeholder:a};return d.attributes&&(d.attributes[te]=t,d.attributes[ue]=u),d},G={tv:{appkey:"4409e2ce8ffd12b8",appsec:"59b43e04ad6965f34319062b478f83dd",mobi_app:"android_tv_yst"},ios:{appkey:"27eb53fc9058f8c3",appsec:"c2ed53a74eeefe3cf99fbd01d8c9c375",mobi_app:"ipnone"}};function Ve(e,t,u){e.appkey=t;const i=new URLSearchParams(e);return i.sort(),Tt(i.toString()+u)}const H={isWebApiSuccess(e){return (e==null?void 0:e.code)===0&&((e==null?void 0:e.message)==="0"||(e==null?void 0:e.message)==="success")},isAreaLimit(e){let t={6002003:"抱歉您所在地区不可观看！"},u=!1;return Object.keys(t).forEach(i=>{let r=t[i];(e.code.toString()===i.toString()||e.message.includes(r))&&(u=!0);}),u}},Pe={async getQrCodeInfo(){var n;let e="https://passport.bilibili.com/x/passport-tv-login/qrcode/auth_code",t={appkey:G.ios.appkey,local_id:"0",ts:"0",mobi_app:G.ios.mobi_app,csrf:((n=tt.get("bili_jct"))==null?void 0:n.value)||""},u=Ve(t,G.ios.appkey,G.ios.appsec),i=await R.post(e,{data:c.toSearchParamsStr({...t,sign:u}),headers:{"Content-Type":"application/x-www-form-urlencoded"},responseType:"json",fetch:!0});if(o.info(i),!i.status)return;let r=c.toJSON(i.data.responseText);if(r.code!==0){b.error(r.message);return}return r.data},async poll(e){let t="https://passport.bilibili.com/x/passport-tv-login/qrcode/poll",u={appkey:G.ios.appkey,auth_code:e,local_id:"0",ts:"0"},i=Ve(u,G.ios.appkey,G.ios.appsec),r=await R.post(t,{data:c.toSearchParamsStr({...u,sign:i}),headers:{"Content-Type":"application/x-www-form-urlencoded"},responseType:"json",fetch:!0});if(!r.status)return {success:!1,message:"网络错误",action:void 0};const a=c.toJSON(r.data.responseText);o.info(a);const n={0:"成功","-3":"API校验密匙错误","-400":"请求错误","-404":"啥都木有",86038:"二维码已失效",86039:"二维码尚未确认",86090:"二维码已扫码未确认"};if(!H.isWebApiSuccess(a)){const p=a.code.toString(),m=a.message||n[p]||"未知错误";return p==="86038"?{success:!1,message:m,action:"refresh"}:p==="86039"||p==="86090"?{success:!1,message:m,action:"wait"}:{success:!1,message:m,action:void 0}}const l=a.data.access_token,d=Date.now()+a.data.expires_in*1e3;return {success:!0,message:"获取成功",accessKey:l,accessKeyExpireAt:d}}},Z={async init(){b.info("正在申请二维码...");let e=await this.getQRCodeInfo();e&&this.confirmScanQrcode(e);},getQRCodeInfo:async function(){o.info("正在申请二维码...");let e=await Pe.getQrCodeInfo();return o.info(["获取到二维码信息",e]),e},async confirmScanQrcode(e){let t=pe.alert({title:{text:"请扫描二维码登录",position:"center",html:!1,style:""},content:{text:'<div id="bili-qrcode-canvas"></div>',html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(a){r=!0,a.close();}}},mask:{enable:!0,clickEvent:{toClose:!1,toHide:!1}},only:!0,width:"310px",height:"365px",drag:!0,dragLimit:!0,style:`
            #bili-qrcode-canvas{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
            }
            `}),u=t.$shadowRoot.querySelector("#bili-qrcode-canvas"),i=new Se(u,{text:e.url,width:300,height:300,colorDark:"#000000",colorLight:"#ffffff",correctLevel:Se.CorrectLevel.H}),r=!1;for(;;){if(r){o.error("用户关闭扫码登录弹窗、取消扫码登录");break}o.info("正在等待扫码登录...");let a=await Pe.poll(e.auth_code);if(a!=null&&a.success){this.setAccessTokenInfo({access_token:a.accessKey,expireAt:a.accessKeyExpireAt}),o.info(["扫码登录成功",a]),o.success("扫码登录成功"),b.success("扫码登录成功");break}else if((a==null?void 0:a.action)==="refresh"){o.info("刷新二维码"),b.info("刷新二维码");let n=await this.getQRCodeInfo();n&&(i.clear(),i.makeCode(n.url));}else if(a.action==="wait")a.message==="二维码已扫码未确认"&&(o.info("已扫码，等待确认..."),pe.loading({parent:u,content:{text:"已扫码，等待确认"},mask:{enable:!0}}));else {o.error(a.message),b.error(a.message);break}await c.sleep(1500);}t.close();},generateExpireAt(e=6){return new Date().getTime()+1e3*60*60*24*30*e},setAccessTokenInfo(e){de("bili-accessTokenInfo",e);},getAccessTokenInfo(){let e=K("bili-accessTokenInfo");return e&&e.expireAt>Date.now()?e:null},getAccessToken(){var e;return ((e=this.getAccessTokenInfo())==null?void 0:e.access_token)||""}},Ot={id:"panel-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("监听路由-重载所有功能","bili-listenRouterChange",!0,void 0,"用于处理页面跳转(本页)时功能不生效问题"),C("修复VueRouter跳转404问题","bili-repairVueRouter404",!0,void 0,"例如：点击UP主正确进入空间"),C("新标签页打开","bili-go-to-url-blank",!1,void 0,"通过开启【覆盖点击事件】相关的设置，通过新标签页打开链接"),C("允许复制","bili-allowCopy",!0,void 0,"一般用于处理楼层的回复弹窗内无法选中复制问题")]}]},{text:"变量设置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("isLogin","bili-setLogin",!0,void 0,"$store.state.common.noCallApp=true<br>$store.state.common.userInfo.isLogin=true<br>$store.state.loginInfo.isLogin=true"),C("isClient","bili-setIsClient",!0,void 0,"$store.state.video.isClient=true<br>$store.state.opus.isClient=true<br>$store.state.playlist.isClient=true<br>$store.state.ver.bili=true<br>$store.state.ver.biliVer=2333"),C("tinyApp","bili-setTinyApp",!0,void 0,"$store.state.common.tinyApp=true")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("覆盖.launch-app-btn openApp","bili-overrideLaunchAppBtn_Vue_openApp",!0,void 0,"覆盖.launch-app-btn元素上的openApp函数，可阻止点击唤醒/下载App"),C("覆盖bili-open-app opener.open","bili-cover-bili-open-app-open",!0,void 0,"覆盖bili-open-app元素上的opener.open函数，可阻止点击唤醒/下载App"),C("劫持setTimeout-autoOpenApp","bili-hookSetTimeout_autoOpenApp",!0,void 0,"阻止自动调用App")]}]}]},{text:"",type:"forms",forms:[{text:"数据配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[J("access_token","bili-head-recommend-access_token",Z.getAccessToken(),"填入access_token，可用于获取推荐视频数据、番剧搜索、番剧播放等",(e,t,u)=>{Z.setAccessTokenInfo({access_token:t,expireAt:Z.generateExpireAt()});},void 0,!1,!0)]}]},{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[me("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,u)=>{o.info("设置当前Qmsg弹出位置"+u);},"Toast显示在页面九宫格的位置"),me("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),C("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]},{text:"Cookie配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("启用","httpx-use-cookie-enable",!1,void 0,"启用后，将根据下面的配置进行添加cookie"),C("使用document.cookie","httpx-use-document-cookie",!1,void 0,"自动根据请求的域名来获取对应的cookie"),Lt("bilibili.com","httpx-cookie-bilibili.com","",void 0,void 0,"Cookie格式：xxx=xxxx;xxx=xxxx")]}]}]}]},k={isVideo(){return window.location.pathname.startsWith("/video/")},isBangumi(){return window.location.pathname.startsWith("/bangumi/")},isSearch(){return window.location.pathname.startsWith("/search")},isSearchResult(){let e=new URLSearchParams(window.location.search);return this.isSearch()&&e.has("keyword")},isLive(){return window.location.hostname==="live.bilibili.com"},isOpus(){return window.location.pathname.startsWith("/opus")},isTopicDetail(){return window.location.pathname.startsWith("/topic-detail")},isDynamic(){return window.location.pathname.startsWith("/dynamic")},isHead(){return window.location.pathname==="/"||window.location.pathname.startsWith("/channel")},isSpace(){return window.location.pathname.startsWith("/space")}},zt={isPC(){return window.location.hostname==="www.bilibili.com"},isReadMobile(){return this.isPC()&&window.location.pathname.startsWith("/read/mobile")}},fe={web_host:"api.bilibili.com"},L={AVC:7,HEVC:12,AV1:13},Fe={getBangumiProxyHost(){let e=[{name:"中国大陆",area:"",host:s.getValue("bili-bangumi-proxyApiServer-default","").trim()||fe.web_host}];if(!s.getValue("bili-bangumi-unlockAreaLimit"))return e;let t=s.getValue("bili-bangumi-proxyApiServer-hk");c.isNotNull(t)&&e.push({name:"香港",area:"hk",host:t});let u=s.getValue("bili-bangumi-proxyApiServer-tw");c.isNotNull(u)&&e.push({name:"台湾",area:"tw",host:u});let i=s.getValue("bili-bangumi-proxyApiServer-tha-or-sea");return c.isNotNull(i)&&e.push({name:"泰国/东南亚",area:"th",host:i}),e},getSearchProxyHost(){let e=this.getBangumiProxyHost(),t=[],u=s.getValue("bili-search-proxyApiServer-hk");if(c.isNotNull(u))t.push({name:"香港",area:"hk",host:u});else {let a=e.find(n=>n.area==="hk");a&&t.push(a);}let i=s.getValue("bili-search-proxyApiServer-tw");if(c.isNotNull(i))t.push({name:"台湾",area:"tw",host:i});else {let a=e.find(n=>n.area==="tw");a&&t.push(a);}let r=s.getValue("bili-search-proxyApiServer-tha-or-sea");return c.isNotNull(r)?t.push({name:"泰国/东南亚",area:"th",host:r}):e.find(n=>n.area==="th")&&t.push,t},getBangumiProxySearchParam(e={}){return {from_client:"BROWSER",drm_tech_type:2,module:"bangumi",area:(e==null?void 0:e.area)||"",access_key:Z.getAccessToken()}}},O={findBetterCDN(...e){let t=[];e.forEach(i=>{Array.isArray(i)?t=t.concat(i.filter(r=>typeof r=="string")):typeof i=="string"&&t.push(i);});let u=t.find(i=>{if(new URL(i).host.startsWith("upos"))return i});return u||t[0]},replaceBangumiVideoCDN(e){let t=s.getValue("bili-bangumi-uposServerSelect");return this.replaceVideoCDNHost(e,t)},replaceVideoCDN(e){let t=s.getValue("bili-video-uposServerSelect");return this.replaceVideoCDNHost(e,t)},replaceVideoCDNHost(e,t){try{let u=new URL(e),i=this.getUposCDNServerList().find(n=>n.host===t);if(c.isNull(i)||c.isNull(i.host))return e;let r=i.host,a=u.host;return a.includes("mirror")&&(o.info(`原Host为：${a}`),o.info(`替换CDN为：${JSON.stringify(i)}`),u.host=r),u.toString()}catch(u){return o.error(["视频upos替换失败",u]),o.error(u),e}},getUposCDNServerList(){return [{name:"不替换",host:""},{name:"ali（阿里云）",host:"upos-sz-mirrorali.bilivideo.com"},{name:"alib（阿里云）",host:"upos-sz-mirroralib.bilivideo.com"},{name:"alio1（阿里云）",host:"upos-sz-mirroralio1.bilivideo.com"},{name:"cos（腾讯云）",host:"upos-sz-mirrorcos.bilivideo.com"},{name:"cosb（腾讯云，VOD加速类型）",host:"upos-sz-mirrorcosb.bilivideo.com"},{name:"coso1（腾讯云）",host:"upos-sz-mirrorcoso1.bilivideo.com"},{name:"hw（华为云，融合CDN）",host:"upos-sz-mirrorhw.bilivideo.com"},{name:"hwb（华为云，融合CDN）",host:"upos-sz-mirrorhwb.bilivideo.com"},{name:"hwo1（华为云，融合CDN）",host:"upos-sz-mirrorhwo1.bilivideo.com"},{name:"08c（华为云，融合CDN）",host:"upos-sz-mirror08c.bilivideo.com"},{name:"08h（华为云，融合CDN）",host:"upos-sz-mirror08h.bilivideo.com"},{name:"08ct（华为云，融合CDN）",host:"upos-sz-mirror08ct.bilivideo.com"},{name:"tf_hw（华为云）",host:"upos-tf-all-hw.bilivideo.com"},{name:"tf_tx（腾讯云）",host:"upos-tf-all-tx.bilivideo.com"},{name:"akamai（Akamai海外）",host:"upos-hz-mirrorakam.akamaized.net"},{name:"aliov（阿里云海外）",host:"upos-sz-mirroraliov.bilivideo.com"},{name:"cosov（腾讯云海外）",host:"upos-sz-mirrorcosov.bilivideo.com"},{name:"hwov（华为云海外）",host:"upos-sz-mirrorhwov.bilivideo.com"},{name:"hk_bcache（Bilibili海外）",host:"cn-hk-eq-bcache-01.bilivideo.com"},{name:"alibstar1（阿里云海外-东南亚）",host:"upos-sz-mirroralibstar1.bilivideo.com"},{name:"cosbstar1（腾讯云海外-东南亚）",host:"upos-sz-mirrorcosbstar1.bilivideo.com"},{name:"hwbstar1（华为云海外-东南亚）",host:"upos-sz-mirrorhwbstar1.bilivideo.com"},{name:"akamai（Akamai海外-东南亚）",host:"upos-bstar1-mirrorakam.akamaized.net"}]}},it=function(e,t,u,i,r,a,n,l,d){let p={text:e,type:"slider",description:d,attributes:{},getValue(){return s.getValue(t,u)},getToolTipContent(m){return typeof l=="function"?l(m):`${m}`},callback(m,g){s.setValue(t,g);},min:i,max:r,step:a};return p.attributes&&(p.attributes[te]=t,p.attributes[ue]=u),p},It={id:"panel-video",title:"视频",isDefault(){return k.isVideo()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("调整视频底部区域高度","bili-video-repairVideoBottomAreaHeight",!0,void 0,"添加margin-top"),C("美化底部推荐视频","bili-video-beautify",!0,void 0,"调整底部推荐视频卡片样式类似哔哩哔哩App"),C("手势返回关闭评论区","bili-video-gestureReturnToCloseCommentArea",!0,void 0,"当浏览器手势触发浏览器回退页面时，关闭评论区"),C("强制本页刷新跳转","bili-video-forceThisPageToRefreshAndRedirect",!1,void 0,"用于处理内存泄露问题")]},{type:"forms",text:"底部Tab",forms:[C("滚动固钉Tab","bili-video-optimizationScroll",!0,void 0,"向下滚动时，自动跳转视频区域大小且对Tab进行吸附处理"),C("禁止滑动切换Tab","bili-video-disableSwipeTab",!1,void 0,"禁止左右滑动切换Tab")]}]},{text:"ArtPlayer播放器",type:"deepMenu",forms:[{text:"功能",type:"forms",forms:[C("启用","bili-video-enableArtPlayer",!0,void 0,"使用artplayer代替页面的播放器"),me("播放的视频类型","bili-video-playType","mp4",[{text:"mp4",value:"mp4"},{text:"dash",value:"dash"}],void 0,"当选择dash时会有画质更高的选项"),C("自动播放视频","bili-video-playerAutoPlayVideo",!1,void 0,""),C("自动进入全屏","bili-video-playerAutoPlayVideoFullScreen",!1,void 0,"")]},{text:"控件设置",type:"forms",forms:[it("controls左右边距","bili-video-artplayer-controlsPadding-left-right",0,0,50,1,void 0,e=>e+"px","可用于全屏横屏适配屏幕")]},{text:"插件",type:"forms",forms:[C("弹幕","artplayer-plugin-video-danmaku-enable",!1),C("dash Audio Support","artplayer-plugin-video-m4sAudioSupport-enable",!0),C("选集","artplayer-plugin-video-epChoose-enable",!0),C("CC字幕","artplayer-plugin-video-cc-subtitle-enable",!0),C("顶部工具栏","artplayer-plugin-video-toptoolbar-enable",!0)]},{text:"加速CDN设置",type:"forms",forms:[me("UPOS服务器设置","bili-video-uposServerSelect","",O.getUposCDNServerList().map(e=>({text:e.name,value:e.host})),void 0,"设置视频流的服务器，可加快视频加载速度"),C("作用于Audio上","bili-video-uposServerSelect-applyAudio",!1,void 0,"把m4s类型的audio也进行upos替换")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("相关视频","bili-video-cover-bottomRecommendVideo",!0,void 0,"点击下面的相关视频可正确跳转至该视频"),C("选集","bili-video-cover-seasonNew",!0,void 0,"点击下面的选集列表内的视频可正确跳转至该视频")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("阻止调用App","bili-video-hook-callApp",!0,void 0,"处理函数: PlayerAgent")]}]}]}]},Ut={id:"panel-bangumi",title:"番剧",isDefault(){return k.isBangumi()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("固定缩放倍率","bili-bangumi-initialScale",!0,void 0,"")]}]},{text:"ArtPlayer播放器",type:"deepMenu",forms:[{text:"控件设置",type:"forms",forms:[it("controls左右边距","bili-bangumi-artplayer-controlsPadding-left-right",0,0,50,1,void 0,e=>e+"px","可用于全屏横屏适配屏幕")]},{text:"插件",type:"forms",forms:[C("弹幕","artplayer-plugin-bangumi-danmaku-enable",!1),C("dash Audio Support","artplayer-plugin-bangumi-m4sAudioSupport-enable",!0),C("选集","artplayer-plugin-bangumi-epChoose-enable",!0),C("CC字幕","artplayer-plugin-bangumi-cc-subtitle-enable",!0),C("顶部工具栏","artplayer-plugin-bangumi-toptoolbar-enable",!0),C("空降助手","artplayer-plugin-bangumi-airborneHelper-enable",!1,void 0,"如果获取到的信息中存在空降信息，如跳过片头片尾，那么会自动跳过")]},{text:"解除区域限制",type:"forms",forms:[C("解锁番剧限制","bili-bangumi-unlockAreaLimit",!1,void 0,"使用户可以观看区域外版权番剧"),C("生成简中字幕","bili-bangumi-generateSimpleChineseSubtitle",!1,void 0,"根据繁体字幕自动生成简体中文字幕")]},{text:"加速CDN设置",type:"forms",forms:[me("UPOS服务器设置","bili-bangumi-uposServerSelect","",O.getUposCDNServerList().map(e=>({text:e.name,value:e.host})),void 0,"设置解锁番剧的服务器，可加快视频加载速度"),C("作用于Audio上","bili-bangumi-uposServerSelect-applyAudio",!1,void 0,"把m4s类型的audio也进行upos替换")]},{text:"<a href='https://github.com/yujincheng08/BiliRoaming/wiki/%E5%85%AC%E5%85%B1%E8%A7%A3%E6%9E%90%E6%9C%8D%E5%8A%A1%E5%99%A8' target='_blank'>解析服务器</a>",type:"forms",forms:[J("中国大陆","bili-bangumi-proxyApiServer-default","","用于请求播放地址的代理",void 0,"bilibili优化.example.com"),J("香港","bili-bangumi-proxyApiServer-hk","","用于请求播放地址的代理",void 0,"bilibili优化.example.com"),J("台湾","bili-bangumi-proxyApiServer-tw","","用于请求播放地址的代理",void 0,"bilibili优化.example.com"),J("泰国/东南亚","bili-bangumi-proxyApiServer-tha-or-sea","","用于请求播放地址的代理",void 0,"bilibili优化.example.com")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("【选集】","bili-bangumi-cover-clicl-event-chooseEp",!0,void 0,"让【选集】的视频列表可点击跳转"),C("【其它】","bili-bangumi-cover-clicl-event-other",!0,void 0,"让【PV&其他】、【预告】、【主题曲】、【香境剧场】等的视频列表可点击跳转"),C("【更多推荐】","bili-bangumi-cover-clicl-event-recommend",!0,void 0,"让【更多推荐】的视频列表可点击跳转")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("阻止调用App","bili-bangumi-hook-callApp",!0,void 0,"")]}]}]}]},qt={id:"panel-search",title:"搜索",isDefault(){return k.isSearch()},forms:[{type:"forms",text:"",forms:[{type:"deepMenu",text:"功能",forms:[{type:"forms",text:"",forms:[C("搜索框自动获取焦点","bili-search-inputAutoFocus",!1,void 0,""),C("美化搜索结果","bili-search-beautifySearchResult",!0,void 0,"重构搜索结果的样式"),C("开启其它地区番剧搜索","bili-search-enableOtherAreaSearchBangumi",!1,void 0,"在搜索页面添加其它地区番剧搜索结果，需要解析服务器支持")]},{text:"<a href='https://github.com/yujincheng08/BiliRoaming/wiki/%E5%85%AC%E5%85%B1%E8%A7%A3%E6%9E%90%E6%9C%8D%E5%8A%A1%E5%99%A8' target='_blank'>搜索服务器</a>",type:"forms",forms:[J("香港","bili-search-proxyApiServer-hk","","用于搜索番剧结果的代理",void 0,"bilibili优化.example.com"),J("台湾","bili-search-proxyApiServer-tw","","用于搜索番剧结果的代理",void 0,"bilibili优化.example.com"),J("泰国/东南亚","bili-search-proxyApiServer-tha-or-sea","","用于搜索番剧结果的代理",void 0,"bilibili优化.example.com")]}]},{type:"deepMenu",text:"覆盖点击事件",forms:[{type:"forms",text:"",forms:[C("取消","bili-search-cover-cancel",!1,void 0,"点击取消按钮回退至上一页")]}]}]}]},Ht={id:"panel-live",title:"直播",isDefault(){return k.isLive()},forms:[{text:"",type:"forms",forms:[{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("【屏蔽】聊天室","bili-live-block-chatRoom",!1,void 0,"直接不显示底部的聊天室"),C("【屏蔽】xxx进入直播间","bili-live-block-brush-prompt",!1,void 0,"直接不显示底部的xxx进入直播间"),C("【屏蔽】控制面板","bili-live-block-control-panel",!1,void 0,"屏蔽底部的发个弹幕、送礼")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("阻止open-app-btn元素点击事件触发","bili-live-prevent-openAppBtn",!0,void 0,"开启后可不跳转至唤醒App页面")]}]}]}]},Gt={id:"panel-opus",title:"专栏",isDefault(){return k.isOpus()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("自动展开阅读全文","bili-opus-automaticallyExpandToReadFullText",!0,void 0,"屏蔽【展开阅读全文】按钮并自动处理全文高度")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("话题","bili-opus-cover-topicJump",!0,void 0,"点击话题正确跳转"),C("header用户","bili-opus-cover-header",!0,void 0,"点击内容上的发布本动态的用户正确跳转个人空间")]}]}]}]},Wt={id:"panel-dynamic",title:"动态",isDefault(){return k.isDynamic()},forms:[{text:"",type:"forms",forms:[{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("话题","bili-dynamic-cover-topicJump",!0,void 0,"点击话题正确跳转"),C("header用户","bili-dynamic-cover-header",!0,void 0,"点击内容上的发布本动态的用户正确跳转个人空间"),C("@用户","bili-dynamic-cover-atJump",!0,void 0,"点击@用户正确跳转个人空间"),C("引用","bili-dynamic-cover-referenceJump",!0,void 0,"点击引用的视频|用户正确跳转")]}]}]}]},Jt={id:"panel-head",title:"首页",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("美化显示","bili-head-beautify",!0,void 0,"调整瀑布流视频卡片样式类似哔哩哔哩App"),C("美化顶部NavBar","bili-beautifyTopNavBar",!0,void 0,"类似哔哩哔哩App的样式"),C("补充推荐视频信息","bili-head-supplementaryVideoStreamingInformation",!0,void 0,"给视频添加UP主名，当前视频总时长信息"),C("新标签页打开","bili-head-openVideoInNewTab",!1,void 0,"包括视频、番剧")]}]},{text:"推荐视频",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("启用","bili-head-recommend-enable",!1,void 0,"添加【推荐】标签，数据来源为App端(如果填入了access_token的话)"),C("显示【图文】","bili-head-recommend-push-graphic",!0,void 0,"加载App端推送的【图文】卡片")]}]}]}]},y={getVue(e){return e==null?void 0:e.__vue__},waitVuePropToSet(e,t){if(!Array.isArray(t)){y.waitVuePropToSet(e,[t]);return}function u(){let i=null;return typeof e=="string"?i=document.querySelector(e):typeof e=="function"?i=e():e instanceof HTMLElement&&(i=e),i}t.forEach(i=>{typeof i.msg=="string"&&o.info(i.msg);function r(){let a=u();if(a==null)return !1;let n=y.getVue(a);return n==null?!1:!!i.check(n)}c.waitVueByInterval(()=>u(),r,250,1e4).then(a=>{if(!a)return;let n=u(),l=y.getVue(n);l!=null&&i.set(l);});});},goToUrl(e,t,u=!1){if(e==null){b.error("跳转Url: 获取根元素#app失败"),o.error("跳转Url: 获取根元素#app失败："+t);return}let i=y.getVue(e);if(i==null){o.error("获取vue属性失败"),b.error("获取vue属性失败");return}let r=i.$router,a=!0;if(o.info("即将跳转URL："+t),u&&(a=!1),a)window.open(t,"_blank");else {if(t.startsWith("http")||t.startsWith("//")){t.startsWith("//")&&(t=window.location.protocol+t);let n=new URL(t);if(n.origin===window.location.origin)t=n.pathname+n.search+n.hash;else {o.info("不同域名，直接本页打开，不用Router："+t),window.location.href=t;return}}o.info("$router push跳转Url："+t),r.push(t);}},hookGestureReturnByVueRouter(e){function t(){o.success("触发popstate事件"),i(!0);}function u(){o.success("监听地址改变"),e.vueInstance.$router.history.push(e.hash),f.on(window,"popstate",t);}async function i(r=!1){if(f.off(window,"popstate",t),!e.callback(r))for(;;)if(e.vueInstance.$router.history.current.hash===e.hash)o.info("后退！"),e.vueInstance.$router.back(),await c.sleep(250);else return}return u(),{resumeBack:i}}},T={goToUrl(e,t=!1){let u=document.querySelector("#app");if(u==null){b.error("跳转Url: 获取根元素#app失败"),o.error("跳转Url: 获取根元素#app失败："+e);return}let i=y.getVue(u);if(i==null){o.error("获取#app的vue属性失败"),b.error("获取#app的vue属性失败");return}let r=i.$router,a=s.getValue("bili-go-to-url-blank");if(o.info("即将跳转URL："+e),t&&(a=!1),a)window.open(e,"_blank");else {if(e.startsWith("http")||e.startsWith("//")){e.startsWith("//")&&(e=window.location.protocol+e);let n=new URL(e);if(n.origin===window.location.origin)e=n.pathname+n.search+n.hash;else {o.info("不同域名，直接本页打开，不用Router："+e),window.location.href=e;return}}o.info("$router push跳转Url："+e),r.push(e);}},goToLogin(e=""){window.open(`https://passport.bilibili.com/h5-app/passport/login?gourl=${encodeURIComponent(e)}`);},parseDuration(e){if(typeof e!="number"&&(e=parseInt(e)),isNaN(e))return e.toString();function t(u){return u<10?`0${u}`:u}return e<60?`0:${t(e)}`:e>=60&&e<3600?`${Math.floor(e/60)}:${t(e%60)}`:`${Math.floor(e/3600)}:${t(Math.floor(e/60)%60)}:${t(e%60)}`},hookGestureReturnByVueRouter(e){function t(){o.success("触发popstate事件"),i(!0);}function u(){o.success("监听地址改变"),e.vueObj.$router.history.push(e.hash),f.on(window,"popstate",t);}async function i(r=!1){if(f.off(window,"popstate",t),!e.callback(r))for(;;)if(e.vueObj.$router.history.current.hash===e.hash)o.info("后退！"),e.vueObj.$router.back(),await c.sleep(250);else return}return u(),{resumeBack:i}}},jt={id:"panel-space",title:"个人空间",isDefault(){return k.isSpace()},forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("修复正确跳转","bili-space-repairRealJump",!0,void 0,"修复视频|动态的正确跳转，避免跳转404")]}]},{text:"覆盖点击事件",type:"deepMenu",forms:[{text:"",type:"forms",forms:[C("动态视频","bili-space-coverDynamicStateCardVideo",!0,void 0,"点击发布动态的视频可正常跳转至该视频")]}]}]}]},s={$data:{__data:null,__oneSuccessExecMenu:null,__onceExec:null,__listenData:null,get data(){return s.$data.__data==null&&(s.$data.__data=new c.Dictionary),s.$data.__data},get oneSuccessExecMenu(){return s.$data.__oneSuccessExecMenu==null&&(s.$data.__oneSuccessExecMenu=new c.Dictionary),s.$data.__oneSuccessExecMenu},get onceExec(){return s.$data.__onceExec==null&&(s.$data.__onceExec=new c.Dictionary),s.$data.__onceExec},get scriptName(){return ke},key:j,attributeKeyName:te,attributeDefaultValueName:ue},$listener:{get listenData(){return s.$data.__listenData==null&&(s.$data.__listenData=new c.Dictionary),s.$data.__listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},isTopWindow(){return U.top===U.self},initExtensionsMenu(){this.isTopWindow()&&Nt.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPanel();}},{key:"go_to_login",text:"🛠 前往登录",autoReload:!1,isStoreValue:!1,showText(e){return e},callback(){T.goToLogin();}},{key:"go_to_login_to_parse_access_key",text:"🛠 扫码并解析access_key",autoReload:!1,isStoreValue:!1,showText(e){return e},callback(){Z.init();}}]);},initPanelDefaultValue(){let e=this;function t(r){if(!r.attributes)return;let a={},n=r.attributes[te];n!=null&&(a[n]=r.attributes[ue]);let l=r.attributes[Mt];if(typeof l=="function"){let m=l();if(typeof m=="boolean"&&!m)return}let d=r.attributes[Rt];d&&typeof d=="object"&&Object.assign(a,d);let p=Object.keys(a);if(!p.length){o.warn(["请先配置键",r]);return}p.forEach(m=>{let g=a[m];e.$data.data.has(m)&&o.warn("请检查该key(已存在): "+m),e.$data.data.set(m,g);});}function u(r){for(let a=0;a<r.length;a++){let n=r[a];t(n);let l=n.forms;l&&Array.isArray(l)&&u(l);}}let i=this.getPanelContentConfig();for(let r=0;r<i.length;r++){let a=i[r];if(!a.forms)continue;let n=a.forms;n&&Array.isArray(n)&&u(n);}},setValue(e,t){let u=K(j,{}),i=u[e];u[e]=t,de(j,u),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,i,t);},getValue(e,t){let i=K(j,{})[e];return i??(this.$data.data.has(e)?this.$data.data.get(e):t)},deleteValue(e){let t=K(j,{}),u=t[e];Reflect.deleteProperty(t,e),de(j,t),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,u,void 0);},addValueChangeListener(e,t){let u=Math.random();return this.$listener.listenData.set(e,{id:u,key:e,callback:t}),u},removeValueChangeListener(e){let t=null;for(const[u,i]of this.$listener.listenData.entries())if(i.id===e){t=u;break}this.$listener.listenData.delete(t);},triggerMenuValueChange(e,t,u){if(this.$listener.listenData.has(e)){let i=this.$listener.listenData.get(e);if(typeof i.callback=="function"){let r=this.getValue(e),a=r,n=r;typeof t<"u"&&arguments.length>1&&(a=t),typeof u<"u"&&arguments.length>2&&(n=u),i.callback(e,n,a);}}},hasKey(e){let t=K(j,{});return e in t},execMenu(e,t,u=!1,i){if(!(typeof e=="string"||typeof e=="object"&&Array.isArray(e)))throw new TypeError("key 必须是字符串或者字符串数组");let r=[];typeof e=="object"&&Array.isArray(e)?r=[...e]:r.push(e);let a;for(let n=0;n<r.length;n++){const l=r[n];if(!this.$data.data.has(l)){o.warn(`${e} 键不存在`);return}let d=s.getValue(l);if(u&&(d=!d),typeof i=="function"){let p=i(l,d);typeof p=="boolean"&&(d=p);}if(!d)break;a=d;}a&&t(a);},execMenuOnce(e,t,u,i,r){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){o.warn(`${e} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(e))return;this.$data.oneSuccessExecMenu.set(e,1);let a=()=>{let g=s.getValue(e);return typeof u=="function"?u(e,g):g},n=[],l=g=>{let v=a(),A=[];if(g instanceof HTMLStyleElement?A=[g]:Array.isArray(g)&&(A=[...g.filter(E=>E!=null&&E instanceof HTMLStyleElement)]),v)n=n.concat(A);else for(let E=0;E<A.length;E++)A[E].remove(),A.splice(E,1),E--;},d=g=>typeof r=="function"?r(e,g):g,p=g=>{let v=[];if(d(g)){let A=t(g,l);A instanceof HTMLStyleElement?v=[A]:Array.isArray(A)&&(v=[...A.filter(E=>E!=null&&E instanceof HTMLStyleElement)]);}for(let A=0;A<n.length;A++)n[A].remove(),n.splice(A,1),A--;n=[...v];};this.addValueChangeListener(e,(g,v,A)=>{let E=A;typeof i=="function"&&(E=i(g,A,v)),p(E);});let m=a();m&&p(m);},execInheritMenuOnce(e,t,u,i){let r=this;const a=(n,l)=>{let d=r.getValue(n),p=r.getValue(l);if(typeof i=="function"){let m=i(d,p);if(m!=null)return m}return d};this.execMenuOnce(e,u,()=>a(e,t),()=>a(e,t)),this.execMenuOnce(t,()=>{},()=>!1,()=>(this.triggerMenuValueChange(e),!1));},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(t(),this.$data.onceExec.set(e,1));},showPanel(){pe.panel({title:{text:`${ke}-设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:this.isMobile(),width:this.getWidth(),height:this.getHeight(),drag:!0,only:!0});},isMobile(){return window.innerWidth<550},getWidth(){return window.innerWidth<550?"92vw":"550px"},getHeight(){return window.innerHeight<550?"80vh":"450px"},getPanelContentConfig(){return [Ot,Jt,It,Gt,Wt,Ut,qt,jt,Ht]}},Yt=`@charset "UTF-8";\r
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
`,re={getUserSpaceUrl(e){return `https://m.bilibili.com/space/${e}`},getUserSpaceDynamicUrl(e){return `https://m.bilibili.com/dynamic/${e}`},getUserSpaceOpusUrl(e){return `https://m.bilibili.com/opus/${e}`},getVideoUrl(e){return `https://m.bilibili.com/video/${e}`}},F={className:{bangumi:"#app.main-container",dynamic:"#app .m-dynamic",opus:"#app .m-opus",search:"#app .m-search","topic-detail":"#app .topic-detail",video:"#app .video",head:"#app .m-head"},theme:"#FB7299"},Ne={className:{read:{mobile:"#app .read-app-main"}}},Kt=`@charset "UTF-8";\r
#app .video {\r
	/* 下面的推荐视频卡片 */\r
}\r
#app .video .video-list .card-box {\r
	--left-card-width: 33%;\r
	--right-child-padding: 1.333vmin;\r
	/* 开启了bili-video-beautify */\r
}\r
#app .video .video-list .card-box .v-card-toapp {\r
	width: 100%;\r
	border-bottom: 1px solid #b5b5b5;\r
	padding-left: 0;\r
	padding-right: 0;\r
}\r
#app .video .video-list .card-box .v-card-toapp > a {\r
	display: flex;\r
	flex-wrap: nowrap;\r
	gap: var(--right-child-padding);\r
}\r
#app .video .video-list .card-box .v-card-toapp > a .card {\r
	width: var(--left-card-width);\r
	height: 80px;\r
	flex: 0 auto;\r
}\r
#app .video .video-list .card-box .v-card-toapp > a .card .count {\r
	background: transparent;\r
}\r
#app .video .video-list .card-box .v-card-toapp > a .card .count .left {\r
	display: list-item;\r
}\r
#app\r
	.video\r
	.video-list\r
	.card-box\r
	.v-card-toapp\r
	> a\r
	.card\r
	.count\r
	.left\r
	span.item {\r
	display: none;\r
}\r
#app .video .video-list .card-box .v-card-toapp > a .card .count .duration {\r
	background: rgba(0, 0, 0, 0.4);\r
	border-radius: 0.6vmin;\r
	padding: 0px 0.5vmin;\r
	right: 1vmin;\r
	bottom: 1vmin;\r
}\r
#app .video .video-list .card-box .v-card-toapp > a .title {\r
	flex: 1;\r
	/*padding: var(--right-child-padding);*/\r
	padding-top: 0;\r
	margin-top: 0;\r
	display: -webkit-box;\r
	-webkit-line-clamp: 2;\r
	-webkit-box-orient: vertical;\r
	overflow: hidden;\r
}\r
#app .video .video-list .card-box .gm-right-container {\r
	display: flex;\r
	flex-direction: column;\r
	width: calc(100% - var(--left-card-width));\r
}\r
#app .video .video-list .card-box .gm-right-container > * {\r
	padding: var(--right-child-padding);\r
	padding-bottom: 0;\r
}\r
#app .video .video-list .card-box .gm-right-container .left {\r
	gap: 1rem;\r
}\r
#app .video .video-list .card-box .gm-right-container .left span {\r
	display: flex;\r
	align-items: safe center;\r
	gap: 1vmin;\r
}\r
#app .video .video-list .card-box .gm-right-container .gm-up-name,\r
#app .video .video-list .card-box .gm-right-container .left {\r
	color: #999;\r
	font-size: 3vmin;\r
	transform-origin: left;\r
	display: flex;\r
	/*align-items: safe center;*/\r
	align-items: safe flex-end;\r
}\r
#app .video .video-list .card-box .gm-right-container .gm-up-name svg{\r
	width: 3vmin;\r
	height: 3vmin;\r
}\r
#app .video .video-list .card-box .gm-right-container .gm-up-name-text {\r
	margin-left: 1vmin;\r
}\r
#app .video .video-list .card-box .gm-right-container .num {\r
	margin-right: 4vmin;\r
}\r
#app .video .video-list .card-box > a.v-card {\r
	width: 100%;\r
	border-bottom: 1px solid #b5b5b5;\r
	padding-left: 0;\r
	padding-right: 0;\r
	display: flex;\r
	flex-wrap: nowrap;\r
}\r
#app .video .video-list .card-box > a.v-card .card {\r
	width: var(--left-card-width);\r
	height: 100%;\r
	flex: 0 auto;\r
}\r
#app .video .video-list .card-box > a.v-card .card .count {\r
	background: transparent;\r
}\r
#app .video .video-list .card-box > a.v-card .card .count span {\r
	display: none;\r
}\r
#app .video .video-list .card-box > a.v-card .card .count .duration {\r
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
#app .video .video-list .card-box > a.v-card .title {\r
	flex: 1;\r
	/*padding: var(--right-child-padding);*/\r
	padding-top: 0;\r
	margin-top: 0;\r
	display: -webkit-box;\r
	-webkit-line-clamp: 2;\r
	-webkit-box-orient: vertical;\r
	overflow: hidden;\r
}\r
`,Qt=`.artplayer-container {\r
	position: absolute;\r
	width: 100%;\r
	height: 100%;\r
	top: 0;\r
	left: 0;\r
	overflow: hidden;\r
}`,rt=`/* 设置播放器基础宽高 */\r
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
`,De={mergeAidOrBvidSearchParamsData(e,t){if("aid"in t&&t.aid!=null)Reflect.set(e,"aid",t.aid);else if("bvid"in t&&t.bvid!=null)Reflect.set(e,"bvid",t.bvid);else throw new TypeError("avid or bvid must give one")}},we={"240P 极速":6,"360P 流畅":16,"480P 清晰":32,"720P 高清":64,"720P60 高帧率":74,"1080P 高清":80,"1080P+ 高码率":112,"1080P60 高帧率":116,"4K 超清":120,"HDR 真彩色":125,杜比视界:126,"8K 超高清":127},Zt={};Object.keys(we).forEach(e=>{let t=Reflect.get(we,e);Reflect.set(Zt,t,e);});const xe={async playUrl(e,t){let u={cid:e.cid,qn:e.qn??we["1080P60 高帧率"],high_quality:e.high_quality??1,fnval:e.fnval??1,fnver:e.fnver??0,fourk:e.fourk??1};e.setPlatformHTML5&&Reflect.set(u,"platform","html5"),De.mergeAidOrBvidSearchParamsData(u,e),typeof t=="object"&&Object.assign(u,t);let i=await R.get("https://api.bilibili.com/x/player/playurl?"+c.toSearchParamsStr(u),{responseType:"json",fetch:!0});if(!i.status)return;let r=c.toJSON(i.data.responseText);if(r.code===0)return r.data},async onlineTotal(e){let t={cid:e.cid};De.mergeAidOrBvidSearchParamsData(t,e);let u=await R.get(`https://${fe.web_host}/x/player/online/total?${c.toSearchParamsStr(t)}`,{responseType:"json",fetch:!0});if(!u.status)return;let i=c.toJSON(u.data.responseText);return H.isWebApiSuccess(i)||o.error(`获取在线观看人数失败: ${JSON.stringify(i)}`),i.data},async like(e){var a;let t={like:e.like,csrf:((a=tt.get("bili_jct"))==null?void 0:a.value)||""};De.mergeAidOrBvidSearchParamsData(t,e);let u=await R.get("https://api.bilibili.com/x/web-interface/archive/like?"+c.toSearchParamsStr(t),{fetch:!0});if(!u.status)return !1;let i=c.toJSON(u.data.responseText);const r=i.code;return r===0?!0:(r===-101?b.error("账号未登录"):r===-111?b.error("csrf校验失败"):r===-400?b.error("请求错误"):r===-403?b.error("账号异常"):r===10003?b.error("不存在该稿件"):r===65004?b.error("取消点赞失败"):r===65006?b.warning("重复点赞"):b.error("未知错误："+i.message),!1)}},Xt={getUserChooseVideoCodingCode(){let e=s.getValue("bili-video-artplayer-videoCodingCode",L.AV1);return Object.values(L).includes(e)||(o.error("意外情况，选择的编码格式不是允许的编码，将强制使用默认，防止过滤掉的视频链接为空："+e),e=L.AV1),e}},at={30216:"64K",30232:"132K",30280:"192K",30250:"杜比全景声",30251:"Hi-Res无损"};class nt{constructor(t){Te(this,"$data",{KEY:"art-player-danmaku-option",localArtDanmakuOption:{}});this.$data.KEY=t;const u=this.getDefaultDanmakuOption();this.$data.localArtDanmakuOption=c.assign(u,K(this.$data.KEY,{}));}getDefaultDanmakuOption(){return {speed:5,margin:[10,"75%"],opacity:1,modes:[0,1,2],fontSize:18,antiOverlap:!1,synchronousPlayback:!0,visible:!0}}getLocalArtDanmakuOption(){return this.$data.localArtDanmakuOption}repairBrowserNoResponse(t){console.warn("目前尚未知晓导致浏览器卡死的原因是哪里的问题，但是启用该弹幕插件100%复现，复现操作：点击播放，然后重复全屏和退出全屏，拖动进度到弹幕量最多的时间点，过一会卡死");}onConfigChange(t){t.on("artplayerPluginDanmuku:config",u=>{Object.keys(this.$data.localArtDanmakuOption).forEach(i=>{if(Reflect.has(u,i)){let r=Reflect.get(u,i);Reflect.set(this.$data.localArtDanmakuOption,i,r);}}),de(this.$data.KEY,this.$data.localArtDanmakuOption);});}}const W="[artplayer-plugin-bilibiliCCSubTitle]：",ge="setting-bilibili-m4sAudio",ae={$flag:{isIntervaling:!1},intervalHandler(e,t=5,u=555,i=!1){if(i&&(this.$flag.isIntervaling=!1),this.$flag.isIntervaling)return;this.$flag.isIntervaling=!0;let r=1,a=()=>{if(r>t){this.$flag.isIntervaling=!1,clearInterval(n);return}if(typeof e=="function")try{e();}catch(l){console.error(W,l);}r++;};a();let n=setInterval(a,u);}},h={$key:{plugin_KEY:"plugin-bilibili-m4sAudio"},$data:{art:null,audio:new Audio,reconnectConfig:{maxCount:5,delayTime:1e3},reconnectInfo:{url:"",count:0}},userEvent:{onRestart:void 0},events:{play:()=>{h.handler.syncTime(),h.handler.play();},seek:e=>{ae.intervalHandler(()=>{h.handler.syncTime(),h.handler.syncPlayState();},2,800,!0);},pause:()=>{h.handler.syncTime(),h.handler.pause();},restart:e=>{if(typeof h.userEvent.onRestart=="function"){let t=h.userEvent.onRestart(e);h.handler.playUrl(t);}h.handler.syncTime(),h.handler.syncPlayState();},muted:e=>{h.handler.syncVolume(),h.handler.syncMuted();},destroy:()=>{h.handler.pause();},error:(e,t)=>{h.handler.pause();},resize:()=>{ae.intervalHandler(()=>{h.handler.syncTime();});},fullscreen:()=>{ae.intervalHandler(()=>{h.handler.syncTime();});},"video:ended":()=>{h.handler.pause();},"video:ratechange":()=>{h.handler.syncPlayBackRate();},"video:waiting":()=>{h.handler.pause();},"video:playing":()=>{h.handler.syncTime(),h.handler.play();},"video:pause":()=>{h.handler.pause(),h.handler.syncTime();},"video:volumechange":()=>{h.handler.syncTime();},"video:timeupdate":()=>{2<=h.$data.art.currentTime&&h.$data.art.currentTime<=4&&h.handler.syncTime();}},audioEvents:{loadedmetadata:e=>{console.log(W+"Audio预加载完成"),h.$data.reconnectInfo.count=0,h.$data.reconnectInfo.url="",h.handler.syncPlayState(),h.handler.syncMuted(),h.handler.syncPlayBackRate(),h.handler.syncVolume(),ae.intervalHandler(()=>{h.handler.syncTime();});},canplaythrough:e=>{console.log(W+"浏览器估计该音频可以在不停止内容缓冲的情况下播放媒体直到结束"),ae.intervalHandler(()=>{h.handler.syncTime();},void 0,void 0,!0);},error:e=>{console.error(W+"Audio加载失败",e),c.isNull(h.$data.reconnectInfo.url)&&(h.$data.reconnectInfo.url=h.$data.audio.src),h.$data.reconnectInfo.count<h.$data.reconnectConfig.maxCount?(console.log(W+`Audio第${h.$data.reconnectInfo.count+1}次尝试重新连接`),h.$data.art.notice.show=`Audio第${h.$data.reconnectInfo.count+1}次尝试重新连接`,h.$data.reconnectInfo.count++,setTimeout(()=>{h.handler.playUrl(""),h.handler.playUrl(h.$data.reconnectInfo.url),h.$data.audio.load();},h.$data.reconnectConfig.delayTime)):(console.error(W+"Audio已超出重连次数"),h.$data.art.notice.show="Audio已超出重连次数，请尝试切换源");}},handler:{playUrl(e){typeof e=="string"&&(h.$data.audio.src=e,h.unbindAudio(),c.isNotNull(e)&&h.bindAudio());},play(){h.$data.audio.paused&&h.$data.audio.play();},pause(){h.$data.audio.paused||h.$data.audio.pause();},syncPlayState(){h.$data.art.playing?this.play():this.pause();},syncTime(){h.$data.audio.currentTime=h.$data.art.currentTime,this.syncVolume(),this.syncMuted();},syncVolume(){h.$data.audio.volume=h.$data.art.volume;},syncMuted(){let e=h.$data.art.muted,t=h.$data.audio.muted;e!==t&&(h.$data.audio.muted=e);},syncPlayBackRate(){let e=h.$data.art.playbackRate,t=h.$data.audio.playbackRate;e!==t&&(h.$data.audio.playbackRate=e);}},update(e){var u;this.unbind(),this.unbindAudio();const t=this;if((u=e.audioList)!=null&&u.length){let i=e.audioList[0];const r=`artplayer-m4s-audio-${e.from}`,a=this.$data.art.storage.get(r);let n={index:0,html:i.soundQualityCodeText,url:i.url};if(a){const m=e.audioList.findIndex(g=>g.soundQualityCode===a.soundQualityCode);if(m!==-1){const g=e.audioList[m];n.index=m,n.url=g.url,n.html=g.soundQualityCodeText;}else console.warn(W+"没有找到上次选的音频代码，使用当前默认第一个音频");}let l=e.audioList.map((m,g)=>({default:g===n.index,html:m.soundQualityCodeText,url:m.url,soundQualityCode:m.soundQualityCode,soundQualityCodeText:m.soundQualityCodeText}));const d={name:ge,width:200,html:"音频",tooltip:n.html,icon:`
				<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
					<path d="M123.5 438.5h131.3v310.7H123.5zM769.2 438.5h131.3v310.7H769.2z"></path>
					<path d="M859.8 398.8h-48.3c-7.9 0-15.4 1.6-22.5 3.9v-32.4c0-125.2-101.9-227.1-227.1-227.1h-99.7c-125.2 0-227.1 101.9-227.1 227.1v32.4c-7.1-2.3-14.6-3.9-22.5-3.9h-48.3c-40.9 0-74.2 33.3-74.2 74.2v243c0 40.9 33.3 74.2 74.2 74.2h48.3c40.9 0 74.2-33.3 74.2-74.2V370.3c0-96.7 78.7-175.4 175.4-175.4h99.7c96.7 0 175.4 78.7 175.4 175.4V716c0 40.9 33.3 74.2 74.2 74.2h48.3c40.9 0 74.2-33.3 74.2-74.2V473c-0.1-40.9-33.3-74.2-74.2-74.2zM235.1 716c0 12.4-10.1 22.5-22.5 22.5h-48.3c-12.4 0-22.5-10.1-22.5-22.5V473c0-12.4 10.1-22.5 22.5-22.5h48.3c12.4 0 22.5 10.1 22.5 22.5v243z m647.2 0c0 12.4-10.1 22.5-22.5 22.5h-48.3c-12.4 0-22.5-10.1-22.5-22.5V473c0-12.4 10.1-22.5 22.5-22.5h48.3c12.4 0 22.5 10.1 22.5 22.5v243z"></path>
					<path d="M531.3 652.3c-1.7 0-3.3-0.1-5-0.4-10.2-1.7-18.7-8.3-22.7-17.8l-41.1-95.4-37 43.8c-8.1 9.6-19.9 15.1-32.5 15.1h-71.9V546h67.6l56.6-67.1c6.8-8.1 17-12 27.5-10.4 10.4 1.5 19.1 8.2 23.3 17.9l41.6 96.7 21.9-24c8-8.8 19.5-13.9 31.4-13.9h102.4v51.7H595l-41.6 45.7c-5.6 6.2-13.7 9.7-22.1 9.7z"></path>
				</svg>
				`,selector:l,onSelect:function(m){let g=m;return console.log(W+"切换音频",g),t.handler.playUrl(g.url),t.$data.art.storage.set(r,{soundQualityCode:g.soundQualityCode}),m.html}};h.$data.art.setting.find(ge)?h.$data.art.setting.update(d):h.$data.art.setting.add(d),o.info(["加载m4s的音频：",n]),h.handler.playUrl(n.url),this.bind(),this.bindAudio();}else h.handler.playUrl(""),h.$data.art.setting.option.find(r=>r.name===ge)&&h.$data.art.setting.remove(ge);},bind(){Object.keys(this.events).forEach(e=>{this.$data.art.on(e,this.events[e]);});},bindAudio(){Object.keys(this.audioEvents).forEach(e=>{this.$data.audio.addEventListener(e,this.audioEvents[e],{once:!0});});},unbind(){Object.keys(this.events).forEach(e=>{this.$data.art.off(e,this.events[e]);});},unbindAudio(){Object.keys(this.audioEvents).forEach(e=>{this.$data.audio.removeEventListener(e,this.audioEvents[e]);});}},ot=e=>t=>(h.$data.art=t,typeof e.onRestart=="function"&&(h.userEvent.onRestart=e.onRestart),h.update({from:e.from,audioList:e.audioList}),{name:h.$key.plugin_KEY,update(...u){h.update(...u),h.handler.syncVolume(),h.handler.syncTime();}}),lt=h.$key.plugin_KEY,eu={events:{control:e=>{e&&D.updateOnlineTotal({showOnlineTotal:D.$data.option.showOnlineTotal,onlineInfoParams:D.$data.option.onlineInfoParams});}},bind(){Object.keys(this.events).forEach(e=>{D.art.on(e,this.events[e]);});},unbind(){Object.keys(this.events).forEach(e=>{D.art.off(e,this.events[e]);});}},D={art:null,$el:{$topWrap:null,$topTitle:null,$topTitleText:null,$topTitleFollow:null,$topTitleFollowText:null,$topRight:null,$topRightFollow:null},$data:{isInit:!1,__option:{},option:{}},$key:{plugin_KEY:"plugin-bilibili-topToolBar"},init(e){this.art.layers.add({name:"top-wrap",html:`
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
            `,mounted:async function(t){D.$el.$topWrap=t,D.$el.$topTitle=t.querySelector(".art-player-top-title"),D.$el.$topTitleText=t.querySelector(".art-player-top-title-text"),D.$el.$topTitleFollow=t.querySelector(".art-player-top-follow"),D.$el.$topTitleFollowText=t.querySelector(".art-player-top-follow-text"),D.$el.$topRight=t.querySelector(".art-player-top-right"),D.$el.$topRightFollow=t.querySelector(".art-player-top-right-follow"),D.update(e),eu.bind();}});},update(e){this.$data.isInit||(this.$data.isInit=!0,Object.defineProperties(this.$data.option,{showWrap:{set(t){D.$data.__option.showWrap=t;},get(){return D.$data.__option.showWrap}},showTitle:{set(t){D.$data.__option.showTitle=t;},get(){return D.$data.__option.showTitle}},title:{set(t){D.$data.__option.title=t,typeof t=="string"&&(D.$el.$topTitleText.innerText=t);},get(){return D.$data.__option.title}},showOnlineTotal:{set(t){D.$data.__option.showOnlineTotal=t;},get(){return D.$data.__option.showOnlineTotal}},onlineInfoParams:{set(t){D.$data.__option.onlineInfoParams=t,D.updateOnlineTotal({showOnlineTotal:this.showOnlineTotal,onlineInfoParams:t});},get(){return D.$data.__option.onlineInfoParams}},showRight:{set(t){D.$data.__option.showRight=t;},get(){return D.$data.__option.showRight}},showRightFollow:{set(t){D.$data.__option.showRightFollow=t;},get(){return D.$data.__option.showRightFollow}}})),Object.assign(this.$data.option,e);},async updateOnlineTotal(e){if(!e.showOnlineTotal)return;let t=await xe.onlineTotal({aid:e.onlineInfoParams.aid,bvid:e.onlineInfoParams.bvid,cid:e.onlineInfoParams.cid});t&&(D.$el.$topTitleFollowText.innerText=`${t.total||t.count||0}人正在看`);}},st=e=>t=>(D.art=t,D.init(e),{name:D.$key.plugin_KEY,update(u){D.update(u);}}),ct=D.$key.plugin_KEY,dt={S:"万与丑专业丛东丝丢两严丧个丬丰临为丽举么义乌乐乔习乡书买乱争于亏云亘亚产亩亲亵亸亿仅从仑仓仪们价众优伙会伛伞伟传伤伥伦伧伪伫体余佣佥侠侣侥侦侧侨侩侪侬俣俦俨俩俪俭债倾偬偻偾偿傥傧储傩儿兑兖党兰关兴兹养兽冁内冈册写军农冢冯冲决况冻净凄凉凌减凑凛几凤凫凭凯击凼凿刍划刘则刚创删别刬刭刽刿剀剂剐剑剥剧劝办务劢动励劲劳势勋勐勚匀匦匮区医华协单卖卢卤卧卫却卺厂厅历厉压厌厍厕厢厣厦厨厩厮县参叆叇双发变叙叠叶号叹叽吁后吓吕吗吣吨听启吴呒呓呕呖呗员呙呛呜咏咔咙咛咝咤咴咸哌响哑哒哓哔哕哗哙哜哝哟唛唝唠唡唢唣唤唿啧啬啭啮啰啴啸喷喽喾嗫呵嗳嘘嘤嘱噜噼嚣嚯团园囱围囵国图圆圣圹场坂坏块坚坛坜坝坞坟坠垄垅垆垒垦垧垩垫垭垯垱垲垴埘埙埚埝埯堑堕塆墙壮声壳壶壸处备复够头夸夹夺奁奂奋奖奥妆妇妈妩妪妫姗姜娄娅娆娇娈娱娲娴婳婴婵婶媪嫒嫔嫱嬷孙学孪宁宝实宠审宪宫宽宾寝对寻导寿将尔尘尧尴尸尽层屃屉届属屡屦屿岁岂岖岗岘岙岚岛岭岳岽岿峃峄峡峣峤峥峦崂崃崄崭嵘嵚嵛嵝嵴巅巩巯币帅师帏帐帘帜带帧帮帱帻帼幂幞干并广庄庆庐庑库应庙庞废庼廪开异弃张弥弪弯弹强归当录彟彦彻径徕御忆忏忧忾怀态怂怃怄怅怆怜总怼怿恋恳恶恸恹恺恻恼恽悦悫悬悭悯惊惧惨惩惫惬惭惮惯愍愠愤愦愿慑慭憷懑懒懔戆戋戏戗战戬户扎扑扦执扩扪扫扬扰抚抛抟抠抡抢护报担拟拢拣拥拦拧拨择挂挚挛挜挝挞挟挠挡挢挣挤挥挦捞损捡换捣据捻掳掴掷掸掺掼揸揽揿搀搁搂搅携摄摅摆摇摈摊撄撑撵撷撸撺擞攒敌敛数斋斓斗斩断无旧时旷旸昙昼昽显晋晒晓晔晕晖暂暧札术朴机杀杂权条来杨杩杰极构枞枢枣枥枧枨枪枫枭柜柠柽栀栅标栈栉栊栋栌栎栏树栖样栾桊桠桡桢档桤桥桦桧桨桩梦梼梾检棂椁椟椠椤椭楼榄榇榈榉槚槛槟槠横樯樱橥橱橹橼檐檩欢欤欧歼殁殇残殒殓殚殡殴毁毂毕毙毡毵氇气氢氩氲汇汉污汤汹沓沟没沣沤沥沦沧沨沩沪沵泞泪泶泷泸泺泻泼泽泾洁洒洼浃浅浆浇浈浉浊测浍济浏浐浑浒浓浔浕涂涌涛涝涞涟涠涡涢涣涤润涧涨涩淀渊渌渍渎渐渑渔渖渗温游湾湿溃溅溆溇滗滚滞滟滠满滢滤滥滦滨滩滪漤潆潇潋潍潜潴澜濑濒灏灭灯灵灾灿炀炉炖炜炝点炼炽烁烂烃烛烟烦烧烨烩烫烬热焕焖焘煅煳熘爱爷牍牦牵牺犊犟状犷犸犹狈狍狝狞独狭狮狯狰狱狲猃猎猕猡猪猫猬献獭玑玙玚玛玮环现玱玺珉珏珐珑珰珲琎琏琐琼瑶瑷璇璎瓒瓮瓯电画畅畲畴疖疗疟疠疡疬疮疯疱疴痈痉痒痖痨痪痫痴瘅瘆瘗瘘瘪瘫瘾瘿癞癣癫癯皑皱皲盏盐监盖盗盘眍眦眬着睁睐睑瞒瞩矫矶矾矿砀码砖砗砚砜砺砻砾础硁硅硕硖硗硙硚确硷碍碛碜碱碹磙礼祎祢祯祷祸禀禄禅离秃秆种积称秽秾稆税稣稳穑穷窃窍窑窜窝窥窦窭竖竞笃笋笔笕笺笼笾筑筚筛筜筝筹签简箓箦箧箨箩箪箫篑篓篮篱簖籁籴类籼粜粝粤粪粮糁糇紧絷纟纠纡红纣纤纥约级纨纩纪纫纬纭纮纯纰纱纲纳纴纵纶纷纸纹纺纻纼纽纾线绀绁绂练组绅细织终绉绊绋绌绍绎经绐绑绒结绔绕绖绗绘给绚绛络绝绞统绠绡绢绣绤绥绦继绨绩绪绫绬续绮绯绰绱绲绳维绵绶绷绸绹绺绻综绽绾绿缀缁缂缃缄缅缆缇缈缉缊缋缌缍缎缏缐缑缒缓缔缕编缗缘缙缚缛缜缝缞缟缠缡缢缣缤缥缦缧缨缩缪缫缬缭缮缯缰缱缲缳缴缵罂网罗罚罢罴羁羟羡翘翙翚耢耧耸耻聂聋职聍联聩聪肃肠肤肷肾肿胀胁胆胜胧胨胪胫胶脉脍脏脐脑脓脔脚脱脶脸腊腌腘腭腻腼腽腾膑臜舆舣舰舱舻艰艳艹艺节芈芗芜芦苁苇苈苋苌苍苎苏苘苹茎茏茑茔茕茧荆荐荙荚荛荜荞荟荠荡荣荤荥荦荧荨荩荪荫荬荭荮药莅莜莱莲莳莴莶获莸莹莺莼萚萝萤营萦萧萨葱蒇蒉蒋蒌蓝蓟蓠蓣蓥蓦蔷蔹蔺蔼蕲蕴薮藁藓虏虑虚虫虬虮虽虾虿蚀蚁蚂蚕蚝蚬蛊蛎蛏蛮蛰蛱蛲蛳蛴蜕蜗蜡蝇蝈蝉蝎蝼蝾螀螨蟏衅衔补衬衮袄袅袆袜袭袯装裆裈裢裣裤裥褛褴襁襕见观觃规觅视觇览觉觊觋觌觍觎觏觐觑觞触觯詟誉誊讠计订讣认讥讦讧讨让讪讫训议讯记讱讲讳讴讵讶讷许讹论讻讼讽设访诀证诂诃评诅识诇诈诉诊诋诌词诎诏诐译诒诓诔试诖诗诘诙诚诛诜话诞诟诠诡询诣诤该详诧诨诩诪诫诬语诮误诰诱诲诳说诵诶请诸诹诺读诼诽课诿谀谁谂调谄谅谆谇谈谊谋谌谍谎谏谐谑谒谓谔谕谖谗谘谙谚谛谜谝谞谟谠谡谢谣谤谥谦谧谨谩谪谫谬谭谮谯谰谱谲谳谴谵谶谷豮贝贞负贠贡财责贤败账货质贩贪贫贬购贮贯贰贱贲贳贴贵贶贷贸费贺贻贼贽贾贿赀赁赂赃资赅赆赇赈赉赊赋赌赍赎赏赐赑赒赓赔赕赖赗赘赙赚赛赜赝赞赟赠赡赢赣赪赵赶趋趱趸跃跄跖跞践跶跷跸跹跻踊踌踪踬踯蹑蹒蹰蹿躏躜躯车轧轨轩轪轫转轭轮软轰轱轲轳轴轵轶轷轸轹轺轻轼载轾轿辀辁辂较辄辅辆辇辈辉辊辋辌辍辎辏辐辑辒输辔辕辖辗辘辙辚辞辩辫边辽达迁过迈运还这进远违连迟迩迳迹适选逊递逦逻遗遥邓邝邬邮邹邺邻郁郄郏郐郑郓郦郧郸酝酦酱酽酾酿释里鉅鉴銮錾钆钇针钉钊钋钌钍钎钏钐钑钒钓钔钕钖钗钘钙钚钛钝钞钟钠钡钢钣钤钥钦钧钨钩钪钫钬钭钮钯钰钱钲钳钴钵钶钷钸钹钺钻钼钽钾钿铀铁铂铃铄铅铆铈铉铊铋铍铎铏铐铑铒铕铗铘铙铚铛铜铝铞铟铠铡铢铣铤铥铦铧铨铪铫铬铭铮铯铰铱铲铳铴铵银铷铸铹铺铻铼铽链铿销锁锂锃锄锅锆锇锈锉锊锋锌锍锎锏锐锑锒锓锔锕锖锗错锚锜锞锟锠锡锢锣锤锥锦锨锩锫锬锭键锯锰锱锲锳锴锵锶锷锸锹锺锻锼锽锾锿镀镁镂镃镆镇镈镉镊镌镍镎镏镐镑镒镕镖镗镙镚镛镜镝镞镟镠镡镢镣镤镥镦镧镨镩镪镫镬镭镮镯镰镱镲镳镴镶长门闩闪闫闬闭问闯闰闱闲闳间闵闶闷闸闹闺闻闼闽闾闿阀阁阂阃阄阅阆阇阈阉阊阋阌阍阎阏阐阑阒阓阔阕阖阗阘阙阚阛队阳阴阵阶际陆陇陈陉陕陧陨险随隐隶隽难雏雠雳雾霁霉霭靓静靥鞑鞒鞯鞴韦韧韨韩韪韫韬韵页顶顷顸项顺须顼顽顾顿颀颁颂颃预颅领颇颈颉颊颋颌颍颎颏颐频颒颓颔颕颖颗题颙颚颛颜额颞颟颠颡颢颣颤颥颦颧风飏飐飑飒飓飔飕飖飗飘飙飚飞飨餍饤饥饦饧饨饩饪饫饬饭饮饯饰饱饲饳饴饵饶饷饸饹饺饻饼饽饾饿馀馁馂馃馄馅馆馇馈馉馊馋馌馍馎馏馐馑馒馓馔馕马驭驮驯驰驱驲驳驴驵驶驷驸驹驺驻驼驽驾驿骀骁骂骃骄骅骆骇骈骉骊骋验骍骎骏骐骑骒骓骔骕骖骗骘骙骚骛骜骝骞骟骠骡骢骣骤骥骦骧髅髋髌鬓魇魉鱼鱽鱾鱿鲀鲁鲂鲄鲅鲆鲇鲈鲉鲊鲋鲌鲍鲎鲏鲐鲑鲒鲓鲔鲕鲖鲗鲘鲙鲚鲛鲜鲝鲞鲟鲠鲡鲢鲣鲤鲥鲦鲧鲨鲩鲪鲫鲬鲭鲮鲯鲰鲱鲲鲳鲴鲵鲶鲷鲸鲹鲺鲻鲼鲽鲾鲿鳀鳁鳂鳃鳄鳅鳆鳇鳈鳉鳊鳋鳌鳍鳎鳏鳐鳑鳒鳓鳔鳕鳖鳗鳘鳙鳛鳜鳝鳞鳟鳠鳡鳢鳣鸟鸠鸡鸢鸣鸤鸥鸦鸧鸨鸩鸪鸫鸬鸭鸮鸯鸰鸱鸲鸳鸴鸵鸶鸷鸸鸹鸺鸻鸼鸽鸾鸿鹀鹁鹂鹃鹄鹅鹆鹇鹈鹉鹊鹋鹌鹍鹎鹏鹐鹑鹒鹓鹔鹕鹖鹗鹘鹚鹛鹜鹝鹞鹟鹠鹡鹢鹣鹤鹥鹦鹧鹨鹩鹪鹫鹬鹭鹯鹰鹱鹲鹳鹴鹾麦麸黄黉黡黩黪黾鼋鼌鼍鼗鼹齄齐齑齿龀龁龂龃龄龅龆龇龈龉龊龋龌龙龚龛龟志制咨只里系范松没尝尝闹面准钟别闲乾尽脏拼冲里",T:"萬與醜專業叢東絲丟兩嚴喪個丬豐臨爲麗舉麼義烏樂喬習鄉書買亂爭於虧雲亙亞產畝親褻嚲億僅從侖倉儀們價衆優夥會傴傘偉傳傷倀倫傖僞佇體餘傭僉俠侶僥偵側僑儈儕儂俁儔儼倆儷儉債傾傯僂僨償儻儐儲儺兒兌兗黨蘭關興茲養獸囅內岡冊寫軍農冢馮沖決況凍淨淒涼凌減湊凜幾鳳鳧憑凱擊凼鑿芻劃劉則剛創刪別剗剄劊劌剴劑剮劍剝劇勸辦務勱動勵勁勞勢勳勐勩勻匭匱區醫華協單賣盧滷臥衛卻巹廠廳歷厲壓厭厙廁廂厴廈廚廄廝縣參靉靆雙發變敘疊葉號嘆嘰籲後嚇呂嗎唚噸聽啓吳嘸囈嘔嚦唄員咼嗆嗚詠咔嚨嚀噝吒咴鹹哌響啞噠嘵嗶噦譁噲嚌噥喲嘜嗊嘮啢嗩唣喚唿嘖嗇囀齧囉嘽嘯噴嘍嚳囁呵噯噓嚶囑嚕噼囂嚯團園囪圍圇國圖圓聖壙場阪壞塊堅壇壢壩塢墳墜壟壠壚壘墾垧堊墊埡墶壋塏堖塒壎堝埝垵塹墮壪牆壯聲殼壺壼處備復夠頭誇夾奪奩奐奮獎奧妝婦媽嫵嫗嬀姍姜婁婭嬈嬌孌娛媧嫺嫿嬰嬋嬸媼嬡嬪嬙嬤孫學孿寧寶實寵審憲宮寬賓寢對尋導壽將爾塵堯尷屍盡層屓屜屆屬屢屨嶼歲豈嶇崗峴嶴嵐島嶺嶽崬巋嶨嶧峽嶢嶠崢巒嶗崍嶮嶄嶸嶔嵛嶁嵴巔鞏巰幣帥師幃帳簾幟帶幀幫幬幘幗冪襆幹並廣莊慶廬廡庫應廟龐廢廎廩開異棄張彌弳彎彈強歸當錄彠彥徹徑徠御憶懺憂愾懷態慫憮慪悵愴憐總懟懌戀懇惡慟懨愷惻惱惲悅愨懸慳憫驚懼慘懲憊愜慚憚慣愍慍憤憒願懾憖憷懣懶懍戇戔戲戧戰戩戶扎撲扦執擴捫掃揚擾撫拋摶摳掄搶護報擔擬攏揀擁攔擰撥擇掛摯攣掗撾撻挾撓擋撟掙擠揮撏撈損撿換搗據捻擄摑擲撣摻摜揸攬撳攙擱摟攪攜攝攄擺搖擯攤攖撐攆擷擼攛擻攢敵斂數齋斕鬥斬斷無舊時曠暘曇晝曨顯晉曬曉曄暈暉暫曖札術樸機殺雜權條來楊榪傑極構樅樞棗櫪梘棖槍楓梟櫃檸檉梔柵標棧櫛櫳棟櫨櫟欄樹棲樣欒桊椏橈楨檔榿橋樺檜槳樁夢檮棶檢櫺槨櫝槧欏橢樓欖櫬櫚櫸檟檻檳櫧橫檣櫻櫫櫥櫓櫞檐檁歡歟歐殲歿殤殘殞殮殫殯毆毀轂畢斃氈毿氌氣氫氬氳匯漢污湯洶沓溝沒灃漚瀝淪滄渢潙滬沵濘淚澩瀧瀘濼瀉潑澤涇潔灑窪浹淺漿澆湞溮濁測澮濟瀏滻渾滸濃潯濜塗涌濤澇淶漣潿渦溳渙滌潤澗漲澀澱淵淥漬瀆漸澠漁瀋滲溫遊灣溼潰濺漵漊潷滾滯灩灄滿瀅濾濫灤濱灘澦漤瀠瀟瀲濰潛瀦瀾瀨瀕灝滅燈靈災燦煬爐燉煒熗點煉熾爍爛烴燭煙煩燒燁燴燙燼熱煥燜燾煅煳熘愛爺牘犛牽犧犢犟狀獷獁猶狽狍獮獰獨狹獅獪猙獄猻獫獵獼玀豬貓蝟獻獺璣璵瑒瑪瑋環現瑲璽珉珏琺瓏璫琿璡璉瑣瓊瑤璦璇瓔瓚甕甌電畫暢畲疇癤療瘧癘瘍癧瘡瘋皰痾癰痙癢瘂癆瘓癇癡癉瘮瘞瘻癟癱癮癭癩癬癲癯皚皺皸盞鹽監蓋盜盤瞘眥矓着睜睞瞼瞞矚矯磯礬礦碭碼磚硨硯碸礪礱礫礎硜硅碩硤磽磑礄確礆礙磧磣鹼碹磙禮禕禰禎禱禍稟祿禪離禿稈種積稱穢穠穭稅穌穩穡窮竊竅窯竄窩窺竇窶豎競篤筍筆筧箋籠籩築篳篩簹箏籌籤簡籙簀篋籜籮簞簫簣簍籃籬籪籟糴類秈糶糲粵糞糧糝餱緊縶糹糾紆紅紂纖紇約級紈纊紀紉緯紜紘純紕紗綱納紝縱綸紛紙紋紡紵紖紐紓線紺紲紱練組紳細織終縐絆紼絀紹繹經紿綁絨結絝繞絰絎繪給絢絳絡絕絞統綆綃絹繡綌綏絛繼綈績緒綾緓續綺緋綽鞝緄繩維綿綬繃綢綯綹綣綜綻綰綠綴緇緙緗緘緬纜緹緲緝縕繢緦綞緞緶線緱縋緩締縷編緡緣縉縛縟縝縫縗縞纏縭縊縑繽縹縵縲纓縮繆繅纈繚繕繒繮繾繰繯繳纘罌網羅罰罷羆羈羥羨翹翽翬耮耬聳恥聶聾職聹聯聵聰肅腸膚肷腎腫脹脅膽勝朧腖臚脛膠脈膾髒臍腦膿臠腳脫腡臉臘醃膕齶膩靦膃騰臏臢輿艤艦艙艫艱豔艹藝節羋薌蕪蘆蓯葦藶莧萇蒼苧蘇檾蘋莖蘢蔦塋煢繭荊薦薘莢蕘蓽蕎薈薺蕩榮葷滎犖熒蕁藎蓀蔭蕒葒葤藥蒞莜萊蓮蒔萵薟獲蕕瑩鶯蓴蘀蘿螢營縈蕭薩蔥蕆蕢蔣蔞藍薊蘺蕷鎣驀薔蘞藺藹蘄蘊藪藁蘚虜慮虛蟲虯蟣雖蝦蠆蝕蟻螞蠶蠔蜆蠱蠣蟶蠻蟄蛺蟯螄蠐蛻蝸蠟蠅蟈蟬蠍螻蠑螿蟎蠨釁銜補襯袞襖嫋褘襪襲襏裝襠褌褳襝褲襉褸襤襁襴見觀覎規覓視覘覽覺覬覡覿覥覦覯覲覷觴觸觶讋譽謄訁計訂訃認譏訐訌討讓訕訖訓議訊記訒講諱謳詎訝訥許訛論訩訟諷設訪訣證詁訶評詛識詗詐訴診詆謅詞詘詔詖譯詒誆誄試詿詩詰詼誠誅詵話誕詬詮詭詢詣諍該詳詫諢詡譸誡誣語誚誤誥誘誨誑說誦誒請諸諏諾讀諑誹課諉諛誰諗調諂諒諄誶談誼謀諶諜謊諫諧謔謁謂諤諭諼讒諮諳諺諦謎諞諝謨讜謖謝謠謗諡謙謐謹謾謫譾謬譚譖譙讕譜譎讞譴譫讖谷豶貝貞負貟貢財責賢敗賬貨質販貪貧貶購貯貫貳賤賁貰貼貴貺貸貿費賀貽賊贄賈賄貲賃賂贓資賅贐賕賑賚賒賦賭齎贖賞賜贔賙賡賠賧賴賵贅賻賺賽賾贗贊贇贈贍贏贛赬趙趕趨趲躉躍蹌跖躒踐躂蹺蹕躚躋踊躊蹤躓躑躡蹣躕躥躪躦軀車軋軌軒軑軔轉軛輪軟轟軲軻轤軸軹軼軤軫轢軺輕軾載輊轎輈輇輅較輒輔輛輦輩輝輥輞輬輟輜輳輻輯轀輸轡轅轄輾轆轍轔辭辯辮邊遼達遷過邁運還這進遠違連遲邇逕跡適選遜遞邐邏遺遙鄧鄺鄔郵鄒鄴鄰鬱郄郟鄶鄭鄆酈鄖鄲醞醱醬釅釃釀釋裏鉅鑑鑾鏨釓釔針釘釗釙釕釷釺釧釤鈒釩釣鍆釹鍚釵鈃鈣鈈鈦鈍鈔鍾鈉鋇鋼鈑鈐鑰欽鈞鎢鉤鈧鈁鈥鈄鈕鈀鈺錢鉦鉗鈷鉢鈳鉕鈽鈸鉞鑽鉬鉭鉀鈿鈾鐵鉑鈴鑠鉛鉚鈰鉉鉈鉍鈹鐸鉶銬銠鉺銪鋏鋣鐃銍鐺銅鋁銱銦鎧鍘銖銑鋌銩銛鏵銓鉿銚鉻銘錚銫鉸銥鏟銃鐋銨銀銣鑄鐒鋪鋙錸鋱鏈鏗銷鎖鋰鋥鋤鍋鋯鋨鏽銼鋝鋒鋅鋶鐦鐗銳銻鋃鋟鋦錒錆鍺錯錨錡錁錕錩錫錮鑼錘錐錦杴錈錇錟錠鍵鋸錳錙鍥鍈鍇鏘鍶鍔鍤鍬鍾鍛鎪鍠鍰鎄鍍鎂鏤鎡鏌鎮鎛鎘鑷鐫鎳鎿鎦鎬鎊鎰鎔鏢鏜鏍鏰鏞鏡鏑鏃鏇鏐鐔钁鐐鏷鑥鐓鑭鐠鑹鏹鐙鑊鐳鐶鐲鐮鐿鑔鑣鑞鑲長門閂閃閆閈閉問闖閏闈閒閎間閔閌悶閘鬧閨聞闥閩閭闓閥閣閡閫鬮閱閬闍閾閹閶鬩閿閽閻閼闡闌闃闠闊闋闔闐闒闕闞闤隊陽陰陣階際陸隴陳陘陝隉隕險隨隱隸雋難雛讎靂霧霽黴靄靚靜靨韃鞽韉鞴韋韌韍韓韙韞韜韻頁頂頃頇項順須頊頑顧頓頎頒頌頏預顱領頗頸頡頰頲頜潁熲頦頤頻頮頹頷頴穎顆題顒顎顓顏額顳顢顛顙顥纇顫顬顰顴風颺颭颮颯颶颸颼颻飀飄飆飈飛饗饜飣飢飥餳飩餼飪飫飭飯飲餞飾飽飼飿飴餌饒餉餄餎餃餏餅餑餖餓餘餒餕餜餛餡館餷饋餶餿饞饁饃餺餾饈饉饅饊饌饢馬馭馱馴馳驅馹駁驢駔駛駟駙駒騶駐駝駑駕驛駘驍罵駰驕驊駱駭駢驫驪騁驗騂駸駿騏騎騍騅騌驌驂騙騭騤騷騖驁騮騫騸驃騾驄驏驟驥驦驤髏髖髕鬢魘魎魚魛魢魷魨魯魴魺鮁鮃鮎鱸鮋鮓鮒鮊鮑鱟鮍鮐鮭鮚鮳鮪鮞鮦鰂鮜鱠鱭鮫鮮鮺鯗鱘鯁鱺鰱鰹鯉鰣鰷鯀鯊鯇鮶鯽鯒鯖鯪鯕鯫鯡鯤鯧鯝鯢鮎鯛鯨鰺鯴鯔鱝鰈鰏鱨鯷鰮鰃鰓鱷鰍鰒鰉鰁鱂鯿鰠鰲鰭鰨鰥鰩鰟鰜鰳鰾鱈鱉鰻鰵鱅鰼鱖鱔鱗鱒鱯鱤鱧鱣鳥鳩雞鳶鳴鳲鷗鴉鶬鴇鴆鴣鶇鸕鴨鴞鴦鴒鴟鴝鴛鷽鴕鷥鷙鴯鴰鵂鴴鵃鴿鸞鴻鵐鵓鸝鵑鵠鵝鵒鷳鵜鵡鵲鶓鵪鵾鵯鵬鵮鶉鶊鵷鷫鶘鶡鶚鶻鶿鶥鶩鷊鷂鶲鶹鶺鷁鶼鶴鷖鸚鷓鷚鷯鷦鷲鷸鷺鸇鷹鸌鸏鸛鸘鹺麥麩黃黌黶黷黲黽黿鼂鼉鞀鼴齇齊齏齒齔齕齗齟齡齙齠齜齦齬齪齲齷龍龔龕龜志制諮只裏系範鬆沒嚐嚐鬧面準鍾別閒乾盡髒拼衝裡"},Me=dt.S,Re=dt.T,Ce=(e,t)=>{let u,i,r,a,n="",l;for(t?(u=Me,i=Re):(u=Re,i=Me),r=0;r<e.length;r++){a=e.charAt(r);const d=e.charCodeAt(r);if(!(d>13312&&d<40899||d>63744&&d<64106)){n+=a;continue}l=u.indexOf(a),l!==-1?n+=i.charAt(l):n+=a;}return n},tu={s2t:(e,t)=>{if(t){for(let u=0;u<t.length;u++)e.includes(t[u].src)&&(e=e.replaceAll(t[u].src,t[u].des));return Ce(e,!0)}else return Ce(e,!0)},t2s:(e,t)=>{if(t){for(let u=0;u<t.length;u++)e.includes(t[u].src)&&(e=e.replaceAll(t[u].src,t[u].des));return Ce(e,!1)}else return Ce(e,!1)}},Y="[artplayer-plugin-bilibiliCCSubTitle]：",pt={src:"臟妳為傢蔔餵眾係姊託迴蹟儘封啟",des:"脏你为家卜喂众系姐托回迹尽对启",more_src:["乾脆","随著","相信著","奇蹟","拚命","採取","製造"],more_des:["干脆","随着","相信着","奇迹","拼命","采取","制造"],_custom_str:[],generteCustomStr(){for(let e=0;e<this.src.length;e++)this._custom_str.push({src:this.src[e],des:this.des[e]});for(let e=0;e<this.more_src.length;e++)this._custom_str.push({src:this.more_src[e],des:this.more_des[e]});},getCustomStr(){return this._custom_str}},Ae={reset(){this.unbind();},bind(){I.art.on("video:timeupdate",this.event,this);},unbind(){I.clearSubTitle(),I.art.off("video:timeupdate",this.event);},event(){var r;let e=I.art.currentTime,t=(r=V.allSubTitleInfo[V.currentSelectIndex])==null?void 0:r.data;if(!t)return;let u=t.find(a=>a.to>=e&&a.from<=e),i=Array.from(I.$el.$subtitle.querySelectorAll(".art-subtitle-line"));for(let a=0;a<i.length;a++){const n=i[a],{from:l,to:d}=Reflect.get(n,"data-subtitle-line-info");if(d<=e||l>=e)n.remove();else if(u&&u.from===l&&u.to===d)return}if(u){let a=document.createElement("div");a.className="art-subtitle-line",Reflect.set(a,"data-subtitle-line-info",u),a.setAttribute("data-group","0"),a.innerHTML=u.content,I.$el.$subtitle.appendChild(a);}}},V={allSubTitleInfo:[],currentSelectIndex:-1,reset(){this.allSubTitleInfo=[],this.currentSelectIndex=-1;}},I={art:null,$key:{plugin_KEY:"plugin-bilibili-cc-subtitle"},$el:{$subtitle:null},async update(e){const t=this,u=`artplayer-bili-cc-subtitle-${e.from}`,i={config:{NAME:"setting-bilibili-cc-subtitle"},reset(){I.art.setting.option.find(E=>E.name===this.config.NAME)&&I.art.setting.remove(this.config.NAME);},getSettingOption:()=>({name:i.config.NAME,width:200,html:"字幕",tooltip:"",icon:`
					<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 48 48">
						<path d="M0 0h48v48H0z" fill="none"/>
						<path fill="#ffffff" d="M40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM8 24h8v4H8v-4zm20 12H8v-4h20v4zm12 0h-8v-4h8v4zm0-8H20v-4h20v4z"/>
					</svg>
					`,selector:[],onSelect:function(A){let E=A;return t.art.storage.set(u,{lan:E.subTitle_lan}),Ae.unbind(),V.currentSelectIndex=E.subTitle_index,E.subTitle_index!==-1&&Ae.bind(),A.html}}),getDefaultSelector:()=>({default:!0,html:"无",subTitle_lan:"",subTitle_index:0,subTitle_data:[]})};V.reset(),i.reset(),Ae.reset();const r=i.getSettingOption(),a=i.getDefaultSelector();r.selector.push(a),r.tooltip=a.html,V.currentSelectIndex=0,V.allSubTitleInfo.push({name:a.html,lan:a.subTitle_lan,data:a.subTitle_data}),this.art.setting.add(r),this.$el.$subtitle=this.art.template.$subtitle;const n={cid:e.cid};if(e.ep_id&&Reflect.set(n,"ep_id",e.ep_id),e.aid)Reflect.set(n,"aid",e.aid);else if(e.bvid)Reflect.set(n,"bvid",e.bvid);else throw new TypeError("avid or bvid must give one");const l=await R.get(`https://${fe.web_host}/x/player/v2?${c.toSearchParamsStr(n)}`,{fetch:!0,allowInterceptConfig:!1,responseType:"json",headers:{Host:"www.bilibili.com",Referer:"https://www.bilibili.com"}});if(!l.status){console.error(Y+"获取视频信息失败",l);return}console.log(Y+"视频字幕信息",l);const d=c.toJSON(l.data.responseText);if(!H.isWebApiSuccess(d)){console.error(Y+"获取视频信息失败",d);return}let p=d.data.subtitle.subtitles;if(!p.length){console.warn(Y+"获取字幕链接列表为空",d);return}for(let A=0;A<p.length;A++){const E=p[A],x=await R.get(E.subtitle_url,{responseType:"json",allowInterceptConfig:!1,fetch:!1,headers:{"User-Agent":c.getRandomPCUA()}});if(x.status){const $=c.toJSON(x.data.responseText).body;let M=V.allSubTitleInfo.length,N={name:E.lan_doc,lan:E.lan,data:$};V.allSubTitleInfo.push(N),r.selector.push({html:E.lan_doc,subTitle_index:M,subTitle_lan:E.lan,subTitle_data:$});}}if(s.getValue("bili-bangumi-generateSimpleChineseSubtitle")){let A=V.allSubTitleInfo.find($=>$.lan==="zh-Hant"||$.name.includes("繁体"));if(!A)return;let E=[];A.data.forEach($=>{const{content:M,...N}=$,B=tu.t2s(M,pt.getCustomStr());E.push({content:B,...N});});let x="简体（自动生成）",P=V.allSubTitleInfo.length;V.allSubTitleInfo.push({name:x,lan:"zh-CN-auto",data:E}),r.selector.push({html:x,subTitle_index:P,subTitle_lan:"zh-CN-auto",subTitle_data:E});}console.log(Y+"加载视频CC字幕信息",V.allSubTitleInfo);let g={index:0,html:r.selector[0].html};const v=this.art.storage.get(u);if(v){const A=r.selector.findIndex(E=>E.subTitle_lan===v.lan);if(A!==-1){const E=r.selector[A];console.log(Y+"选择字幕："+E.html),g.index=A,g.html=E.html;}else console.warn(Y+"没有找到上次选的字幕，使用当前默认无");}for(let A=0;A<r.selector.length;A++)r.selector[A].default=A===g.index;r.tooltip=g.html,V.currentSelectIndex=g.index,V.allSubTitleInfo[V.currentSelectIndex].data==null||V.allSubTitleInfo[V.currentSelectIndex].data.length==0||Ae.bind(),this.art.setting.update(r);},clearSubTitle(){this.$el.$subtitle&&(this.$el.$subtitle.innerHTML="");},updateArtPlayer(e){this.art=e;}};function mt(e){return t=>(pt.generteCustomStr(),I.updateArtPlayer(t),I.update(e),{name:I.$key.plugin_KEY,update(u){I.update(u);}})}const ft=I.$key.plugin_KEY,ht="[artplayer-plugin-epChoose]：",gt=(e,t)=>t==null?e:`第${t}话 ${e}`,uu=e=>{let t="",u=e.EP_LIST.map((i,r)=>(i.isDefault&&(t=i.title),{html:i.title,default:i.isDefault,index:r,callback:i.onSelect}));return {name:X.$key.SETTING_KEY,icon:'<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2295" width="24" height="24"><path d="M983.745542 312.673133a510.516437 510.516437 0 0 0-109.673817-162.745211A510.516437 510.516437 0 0 0 511.999823 0.000353 510.516437 510.516437 0 0 0 149.927922 149.927922 510.516437 510.516437 0 0 0 0.000353 511.999823a510.516437 510.516437 0 0 0 149.927569 362.071902A510.516437 510.516437 0 0 0 511.999823 1023.999294a510.516437 510.516437 0 0 0 362.071902-149.927569A510.516437 510.516437 0 0 0 1023.999294 511.999823c0-69.137584-13.488538-136.121238-40.253752-199.32669z m-62.852348 372.029408a443.779955 443.779955 0 0 1-95.05535 140.994061 441.908508 441.908508 0 0 1-313.73209 129.941935c-59.886283 0-118.042361-11.758333-172.667407-34.851274a443.779955 443.779955 0 0 1-141.029372-95.090661 441.908508 441.908508 0 0 1-129.941934-313.696779c0-59.886283 11.758333-118.042361 34.851274-172.667407a443.779955 443.779955 0 0 1 95.09066-141.029371 441.908508 441.908508 0 0 1 313.696779-129.941935c59.886283 0 118.077671 11.758333 172.667408 34.851274a443.779955 443.779955 0 0 1 141.064682 95.090661 441.908508 441.908508 0 0 1 129.941934 313.696778c0 59.886283-11.793643 118.042361-34.851274 172.667408zM388.413744 706.206519l317.792775-211.86185-317.792775-211.861849v423.723699z" p-id="2296"></path></svg>',html:"选集",selector:u,tooltip:t,onSelect:function(i){return typeof i.callback=="function"&&i.callback(i,i.index),i.html},playNext(){let i=this.selector.findIndex(r=>r.default);i!==-1&&i+1<this.selector.length-1?(i+=1,this.onSelect(this.selector[i])):console.warn(ht+"当前播放列表已无下一集");}}},Ee={$event:{"video:ended":()=>{console.log(ht+"当前ep播放完毕，连播下一集"),X.$data.art.setting.find(X.$key.SETTING_KEY).playNext();}},bind(e){Object.keys(this.$event).forEach(t=>{e.on(t,this.$event[t]);});},unbind(e){Object.keys(this.$event).forEach(t=>{e.off(t,this.$event[t]);});}},X={$key:{SETTING_KEY:"setting-ep-choose",PLUGIN_KEY:"plugin-ep-choose"},$data:{art:null},resetEnv(){Object.keys(this.$data).forEach(e=>{Reflect.set(this.$data,e,null);});},init(e,t){this.resetEnv(),this.$data.art=e,Ee.unbind(e),t.automaticBroadcast&&Ee.bind(e),this.update(t);},update(e){if(Ee.unbind(this.$data.art),e.EP_LIST==null||e.EP_LIST.length===0)return;let t=uu(e);this.$data.art.setting.find(this.$key.SETTING_KEY)?this.$data.art.setting.update(t):this.$data.art.setting.add(t),e.automaticBroadcast&&Ee.bind(this.$data.art);}},Ct=e=>t=>(X.init(t,e),{name:X.$key.PLUGIN_KEY,update(u){X.update(u);}}),At=X.$key.PLUGIN_KEY,iu={loading:'<img src="data:image/gif;base64,R0lGODlhWgBaALMOAHR0dAICAnd3dwEBAXh4eAMDAwkJCQ0NDQsLCxwcHA4ODggICHl5eQAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiYWE1ODg5ZS1jN2RmLTRmZmUtYjkzOS0wMmVkMTZhNmNjZDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0I2ODI2NjA1NzhGMTFFNkEyMEVDNzhEOUY1RkQxRjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0I2ODI2NUY1NzhGMTFFNkEyMEVDNzhEOUY1RkQxRjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjljYjgzNjY2LWYxYWUtNGMyZi1hMGEwLThhODJmYjIxM2U0MyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmU1NDE3YzFmLTllODAtMTE3OS04NjdiLWUyN2Y3M2VkMTZkOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAkKAA4ALAAAAABaAFoAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsz3Ta3HW+3bjuV7wbg/H7BYXEYu7YGCaVjuDr6Hwqjy2qEzphNlTaIZfi/ZqY2zHZW0KL1RVGeRS2wiXD+ad+x8jZHXx9GX9MO2GDG3mGGG52iX5ojUFVRWWXmJmam1IknJ+goXoioqWmnHSnqquUpDxVsLGys7S1tk6Uj4dIt72+v7K5IcKQF8R7r1asPC7HHs7L0Z3Ogclr0tES1BzH2NiLSMPWUcnAsd7gTboaxLnm77e527vq2uMm8FXy98/j8z77woFoxw9Fp2pI/mUgKBDMQXrp3iATqNBeD3rMIBaqN9BfwWsZ/7kBmpTwo0aLHIF4kchupIWAKftRLHgpDYeND7skq2jMY0NyjlgqwnlRZ8mfCDlCqyO0A1E7MJueBBrTnc0RG1lGXbfQZ0w8sFLEAhmRK0khKJtWConv6lZXaKlKNWpmyk6TJxVqoWvw7iu49fQyLOrJWitx4QTzQhnX4sTAeLsmjuyO8cWcLScjFan5K9kkl9KapSuG50vDlFtlkjtaNGvEkDeDXIlprsrOts+WjkzVUZmrkmN7zsu7dzkiK3OTRl78NO7WQenK7vkc9u7pt9UJrZz0+vDMwpVPGGuBPOfwrbO/8SbNu3j1oNkvc5/+s3T5oraYhn8f/6e1zfFHQZY+BPbiWkdIFajgLMs9ZgoX+1nmn0upYOfchPK95iCG+L034HHpAAAAh6V4OOAsQYh4hAAC3EJAMO3VV55WmLBYiwAv+pKiirzoE+CGDbAoZFu4eCGiiOdYCBgPQrK4wiVHXlDJk0w4mUUZAGgAXApNDtmMkVn+0KWVLhxppojFsHBmlGm26eabcMYp55x01mnnnXjSEAEAIfkECQoADgAsAAAAAFoAWgAABP/QyUmrvTjrzbv/YCiOZGmeaKqubOu+cCxbTT3fX23jfKbXDEZvSPk1gkSiMShM8pZMZ1HngjalEiPLip1qUdZr12Hcmbhj73eETlMY5QbpxxS7JfCyqH2v5NccfH1+cR6CgxVxchqHiIR6GGGOG38/kXRIkxyVR2SKn6CFbKGkpaangDmoq6ytdh2tsbKhmaqzpHW5uru8lbWGOr3Cw8TFvJghmMbLUVvBrxvImmq/sM+Jt9mWE9K2R2La4VRZ1yDdnuLaTefWQFfp4kjsgeXo38z4xMjz0fXK+QB37asHzB03gkqu8WPkD+GQgQbNNYxIY1zBRf0MLvQx8duFVBn/zXDU6DBkrXllqo3cdokkxYsnEaZUudJiRZceJVI8N5NmTZsHcfpcGXOnpBCcRJITCo2h0afuhlISFdTjxpY57RW91/QDJ3AKSzrNyi5XCl/vwr5sB6RqtToZPZhdalXs2LRrvXwEqgEuXXl2ia4Ty7Jq1qX0mO4pt7DbTDWJ6+aNnKkx48duu2oVchVrZcKXqW6+yzmw58GTR4eie/im5NZsP6emhUsqRNiUUeO2F4cJqGanRycLvfs3kqSmb0sNLnxvzyvIlyvXzPyqMD9oqU9fHLEzLwy7TJZOTfovdRF+y3d2ThZeNsDkBRt272r87vLz6Z+Kst71L/2x8GcapHsqBWTgMOZxB9uBDIbXnDcAAricaxFKeB42FUY4IYbpHJCAAgYYsEABoQRgYgA6nIiicaNw9VUQ/zCoIhMz6tKfBcco84MAAjTIQI0/npjjfZtspQiPKdTogJI4AgcGKDwKoIKQKprok5MpCFBGlEgmWSWTPPBoBJctBCkklmFyKaULZgYwVxJqwnDmhtN4hWadJtyJ55589unnn4AGKuigG0QAACH5BAkKAA4ALAAAAABaAFoAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsW009319t43ym1wxGb0j5NYJEojEoTPKWTOfzF5VOfi1o0yoxNlTaLdf7PXmr3CvZpE1bGORyKOx+x+Udev0CX3vaexhBcRyAgRmDXhp6U3ghfVQ+VEhDd5aXmJmajjmbnp+gOiShpKWWlCCmqqtHYn86TLGys7S1tre3kyKTuL2+v7mwrnnChxi6c8VqrFnKqc4OrNJ4yM9AYtPSy627xaLZzNHQr9fiNsC22ULVneWR6PC/k+zk3PQk8bHz48Tu/ErC7hXy9q9SwIKLCJZbgaVeooXW7CHsImpgww37ILaTqLGIIotG/zAe7NiPI7cKd1BJ8nMh48mISNidUomIUMuRLzfGdJYyloeHsG5eEyjSH8Qzsx5Byklx6MRjCl/y8olPFg2cNEvu7Jg0BVWPTkmC3MrUZ8VlYLAOG7sO4cWmnEa4zMrWHFOwJ5egmLu2qEm6dvMS1bkUcEKjd+FWOYNyh9bCfQ//7csr8Fm7hAevnAx14Z1thvECDd2Zs1DBmkgrhtwNMWBFS2ZGFs06mevIsnvOBl0bZluxcJEKWfqUt+bSZEP3nDBa9erjp5PvBtrKFS2HvQnbVW2LDxq20K+6BqeqeWuT5Mtnxx48/SdZ4RtDJO4+tb7i4nPm2/+L9/ms/AVYi3Z/tiVmTHx41Vefc/IpuOBupzmYHoMJZoPAAQ5SWEEtwkCGDgHBXOMhEwhuSEuHU+FCAIi48JIiJN/ttVxaQBjCXIxmKPKVjHHgiGOOYUAYERQGlbhRZUNc98KLSXT1woDGtLBjlFRWaeWVWGap5ZZcdumlChEAACH5BAkKAA4ALAAAAABaAFoAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsW009319t43ym1wxGbzj5AYXEoTGITOKWTOfzx2xKHb8W1Ho1NlTba8X7PW25YnJ55I2KLQw1mxp8Y+LyHL1uv6vXGmd9GkF5gXuDHIVkPoiJHYtGF4JEf5aXmJmZJZqdnp+GIaCjpJloHKWpqlCiOlWvsLGys7S1THStR7a7vL2xuCDAj5Oup4dHwxjCHsvJRcW5DXxYqzouzajQ1NXc1hLYG8Dd4zvgx9JI5ONC5o3I2+i+sOSR6NF8e/L6tXTtytr+POyr0k+bnncBbxR8d9AevGkpsjArlnAMQIPEdmTzthFdRQri/zA+k9SBUTiKIjviE/kHojuS/458HOlwCc02Ll9KzOgx5UmGVL6pefUBjxee9XL+dPiQ3Rk3RY3upJnU2MtpuPJBFSEViEWZPs9hNQhLhVSIC5lOBErWDccSZal2tRqTqbmpQgFB2prV1b0mdzHCBKlRrFOGJQ0GRjw4r966dWY2lQvZCivKhic3HIuYMGObjtUiPSx6KWevoz3vdHSVtNLWqo0JGwovnmnXdGkI9smo09bKmteqBafqd2rJyxYP7Vost+PIYYFjvsBcF5kqiZEh3925wq3mSGQJh949881UEmJtxh2Mu7pU5EubD/1+VPzX0unX10R0e2fw+nDTX5l0qXk30IG0xOacgtThtxeCaBGoW3nO+LffhRTWheF+Dk64IYcLqjZOACQGUEABJA6g4orVdNjgPDoAIKNWENYDwA8y/pIhITA2cCNONRIUI44A2MLCj17IyIIRSCp5h4sgIBmjjAAsqYaTPTBJZZUrXInlEFt+CQYZVDoRZgwzTunMCmGWuWYLW74p55x01mnnnXjmqecNEQAAIfkEBQoADgAsAAAAAFoAWgAABP/QyUmrvTjrzbv/YCiOZGmeaKqubOu+cCzP9Nrcdb7duO5XvBuD8fsFhcSi7jhMKh3BF7P5lBxb02HVelUdG9Qtt3vKiinfRjnYdJ6h31LW/XYw0qJvuE65x0FmfBdpah1zghh+ZBmHiIl4jIGOGYo8kTx7NYSbnJ2en5t5oKOkpaEhpqmqo1ofq6+wenQ7mG22t7i5uru8TWyzGr+9w8TFub+AtZODyq7NY7AwyM5IaLHXURPTHttw2NjW1dRgSd/m5NCt3M3Cxm3nrd0c0+3u9rr0z4bs+iP37/zErRMnz0hAdOPi9TNIcGGwg+qY9dg38WFDgRQRFtSWLWNFiRr/HV4KiTGcSCCEMOQrSesiQpO1gIH8Y1IhS4skX0KLKfNCpUXeckacB9FNmjYhhhytWe4kSJsvZWUC4evZSp1EXaqb09MDLo5au1pgks5JOxZIy6pNJmTtBFuXUCCbgkqZPKSWUH4UVU1Y3b4nO4IFY2JuzL/oNroNOpRtYqcq7QbWRzZcRi2KcWJ2ygZmIWiXiWQeufnm4M8pFz8VDXk1466lVI+VbFoz69o7SzXW+xh3ZMC+g07ZNHU2cKyhX3f4aYtQcd6lkWftLd1nrtzVmSpHHH03pbRv/bak7t228HOvuot1jR6ber7U2696z72p/Pm3s5N28q9/se2OReTffYC7AJjQemeMZpx8MSjI230Q6rdghPeV9xuF8lmYyC48kcMLhhJuiIsw9RDo3IitOQbJBsawwQMAANxymA2cwEjjFzZapyFiL8Lo4404iojFET4WCSSRPgRRJABSEJKjDksyGUOUP/pg5AxUPrnMllx26eWXYIYp5phkjhkBADs=">',state:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 80" width="100" height="100"><defs><path id="pid-64-svgo-a" d="M0 0h80v80H0z"/><path d="M52.546 8.014a3.998 3.998 0 014.222 3.077c.104.446.093.808.039 1.138a2.74 2.74 0 01-.312.881c-.073.132-.16.254-.246.376l-.257.366-.521.73c-.7.969-1.415 1.926-2.154 2.866l-.015.02a240.945 240.945 0 015.986.341l1.643.123.822.066.41.034.206.018.103.008.115.012c1.266.116 2.516.45 3.677.975a11.663 11.663 0 013.166 2.114c.931.87 1.719 1.895 2.321 3.022a11.595 11.595 0 011.224 3.613c.03.157.046.316.068.474l.015.119.013.112.022.206.085.822.159 1.646c.1 1.098.19 2.198.27 3.298.315 4.4.463 8.829.36 13.255a166.489 166.489 0 01-.843 13.213c-.012.127-.034.297-.053.454a7.589 7.589 0 01-.072.475l-.04.237-.05.236a11.762 11.762 0 01-.74 2.287 11.755 11.755 0 01-5.118 5.57 11.705 11.705 0 01-3.623 1.263c-.158.024-.316.052-.475.072l-.477.053-.821.071-1.644.134c-1.096.086-2.192.16-3.288.23a260.08 260.08 0 01-6.578.325c-8.772.324-17.546.22-26.313-.302a242.458 242.458 0 01-3.287-.22l-1.643-.129-.822-.069-.41-.035-.206-.018c-.068-.006-.133-.01-.218-.02a11.566 11.566 0 01-3.7-.992 11.732 11.732 0 01-5.497-5.178 11.73 11.73 0 01-1.215-3.627c-.024-.158-.051-.316-.067-.475l-.026-.238-.013-.119-.01-.103-.07-.823-.132-1.648a190.637 190.637 0 01-.22-3.298c-.256-4.399-.358-8.817-.258-13.233.099-4.412.372-8.811.788-13.197a11.65 11.65 0 013.039-6.835 11.585 11.585 0 016.572-3.563c.157-.023.312-.051.47-.07l.47-.05.82-.07 1.643-.13a228.493 228.493 0 016.647-.405l-.041-.05a88.145 88.145 0 01-2.154-2.867l-.52-.73-.258-.366c-.086-.122-.173-.244-.246-.376a2.74 2.74 0 01-.312-.881 2.808 2.808 0 01.04-1.138 3.998 3.998 0 014.22-3.077 2.8 2.8 0 011.093.313c.294.155.538.347.742.568.102.11.19.23.28.35l.27.359.532.72a88.059 88.059 0 012.06 2.936 73.036 73.036 0 011.929 3.03c.187.313.373.628.556.945 2.724-.047 5.447-.056 8.17-.038.748.006 1.496.015 2.244.026.18-.313.364-.624.549-.934a73.281 73.281 0 011.93-3.03 88.737 88.737 0 012.059-2.935l.533-.72.268-.359c.09-.12.179-.24.281-.35a2.8 2.8 0 011.834-.881zM30.13 34.631a4 4 0 00-.418 1.42 91.157 91.157 0 00-.446 9.128c0 2.828.121 5.656.364 8.483l.11 1.212a4 4 0 005.858 3.143c2.82-1.498 5.55-3.033 8.193-4.606a177.41 177.41 0 005.896-3.666l1.434-.942a4 4 0 00.047-6.632 137.703 137.703 0 00-7.377-4.708 146.88 146.88 0 00-6.879-3.849l-1.4-.725a4 4 0 00-5.382 1.742z" id="pid-64-svgo-d"/><filter x="-15.4%" y="-16.3%" width="130.9%" height="132.5%" filterUnits="objectBoundingBox" id="pid-64-svgo-c"><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feOffset in="SourceAlpha" result="shadowOffsetOuter2"/><feGaussianBlur stdDeviation="3.5" in="shadowOffsetOuter2" result="shadowBlurOuter2"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowBlurOuter2" result="shadowMatrixOuter2"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="shadowMatrixOuter2"/></feMerge></filter></defs><g fill="none" fill-rule="evenodd" opacity=".8"><mask id="pid-64-svgo-b" fill="#fff"><use xlink:href="#pid-64-svgo-a"/></mask><g mask="url(#pid-64-svgo-b)"><use fill="#000" filter="url(#pid-64-svgo-c)" xlink:href="#pid-64-svgo-d"/><use fill="#FFF" xlink:href="#pid-64-svgo-d"/></g></g></svg>',indicator:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="16" height="16">
        <path d="M16.118 3.667h.382a3.667 3.667 0 013.667 3.667v7.333a3.667 3.667 0 01-3.667 3.667h-11a3.667 3.667 0 01-3.667-3.667V7.333A3.667 3.667 0 015.5 3.666h.382L4.95 2.053a1.1 1.1 0 011.906-1.1l1.567 2.714h5.156L15.146.953a1.101 1.101 0 011.906 1.1l-.934 1.614z" fill="#333"></path>
        <path d="M5.561 5.194h10.878a2.2 2.2 0 012.2 2.2v7.211a2.2 2.2 0 01-2.2 2.2H5.561a2.2 2.2 0 01-2.2-2.2V7.394a2.2 2.2 0 012.2-2.2z" fill="#fff"></path>
        <path d="M6.967 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1zM15.033 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1z" fill="#333"></path>
    </svg>
        `,fullscreenWebOn:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="28" height="28" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_172"><rect width="88" height="88" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_172)"><g transform="matrix(1,0,0,1,44,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-14,-20 C-14,-20 -26,-20 -26,-20 C-27.049999237060547,-20 -27.920000076293945,-19.18000030517578 -27.989999771118164,-18.149999618530273 C-27.989999771118164,-18.149999618530273 -28,-18 -28,-18 C-28,-18 -28,-6 -28,-6 C-28,-4.949999809265137 -27.18000030517578,-4.079999923706055 -26.149999618530273,-4.010000228881836 C-26.149999618530273,-4.010000228881836 -26,-4 -26,-4 C-26,-4 -22,-4 -22,-4 C-20.950000762939453,-4 -20.079999923706055,-4.820000171661377 -20.010000228881836,-5.849999904632568 C-20.010000228881836,-5.849999904632568 -20,-6 -20,-6 C-20,-6 -20,-12 -20,-12 C-20,-12 -14,-12 -14,-12 C-12.949999809265137,-12 -12.079999923706055,-12.819999694824219 -12.010000228881836,-13.850000381469727 C-12.010000228881836,-13.850000381469727 -12,-14 -12,-14 C-12,-14 -12,-18 -12,-18 C-12,-19.049999237060547 -12.819999694824219,-19.920000076293945 -13.850000381469727,-19.989999771118164 C-13.850000381469727,-19.989999771118164 -14,-20 -14,-20z M26,-20 C26,-20 14,-20 14,-20 C12.949999809265137,-20 12.079999923706055,-19.18000030517578 12.010000228881836,-18.149999618530273 C12.010000228881836,-18.149999618530273 12,-18 12,-18 C12,-18 12,-14 12,-14 C12,-12.949999809265137 12.819999694824219,-12.079999923706055 13.850000381469727,-12.010000228881836 C13.850000381469727,-12.010000228881836 14,-12 14,-12 C14,-12 20,-12 20,-12 C20,-12 20,-6 20,-6 C20,-4.949999809265137 20.81999969482422,-4.079999923706055 21.850000381469727,-4.010000228881836 C21.850000381469727,-4.010000228881836 22,-4 22,-4 C22,-4 26,-4 26,-4 C27.049999237060547,-4 27.920000076293945,-4.820000171661377 27.989999771118164,-5.849999904632568 C27.989999771118164,-5.849999904632568 28,-6 28,-6 C28,-6 28,-18 28,-18 C28,-19.049999237060547 27.18000030517578,-19.920000076293945 26.149999618530273,-19.989999771118164 C26.149999618530273,-19.989999771118164 26,-20 26,-20z M-22,4 C-22,4 -26,4 -26,4 C-27.049999237060547,4 -27.920000076293945,4.820000171661377 -27.989999771118164,5.849999904632568 C-27.989999771118164,5.849999904632568 -28,6 -28,6 C-28,6 -28,18 -28,18 C-28,19.049999237060547 -27.18000030517578,19.920000076293945 -26.149999618530273,19.989999771118164 C-26.149999618530273,19.989999771118164 -26,20 -26,20 C-26,20 -14,20 -14,20 C-12.949999809265137,20 -12.079999923706055,19.18000030517578 -12.010000228881836,18.149999618530273 C-12.010000228881836,18.149999618530273 -12,18 -12,18 C-12,18 -12,14 -12,14 C-12,12.949999809265137 -12.819999694824219,12.079999923706055 -13.850000381469727,12.010000228881836 C-13.850000381469727,12.010000228881836 -14,12 -14,12 C-14,12 -20,12 -20,12 C-20,12 -20,6 -20,6 C-20,4.949999809265137 -20.81999969482422,4.079999923706055 -21.850000381469727,4.010000228881836 C-21.850000381469727,4.010000228881836 -22,4 -22,4z M26,4 C26,4 22,4 22,4 C20.950000762939453,4 20.079999923706055,4.820000171661377 20.010000228881836,5.849999904632568 C20.010000228881836,5.849999904632568 20,6 20,6 C20,6 20,12 20,12 C20,12 14,12 14,12 C12.949999809265137,12 12.079999923706055,12.819999694824219 12.010000228881836,13.850000381469727 C12.010000228881836,13.850000381469727 12,14 12,14 C12,14 12,18 12,18 C12,19.049999237060547 12.819999694824219,19.920000076293945 13.850000381469727,19.989999771118164 C13.850000381469727,19.989999771118164 14,20 14,20 C14,20 26,20 26,20 C27.049999237060547,20 27.920000076293945,19.18000030517578 27.989999771118164,18.149999618530273 C27.989999771118164,18.149999618530273 28,18 28,18 C28,18 28,6 28,6 C28,4.949999809265137 27.18000030517578,4.079999923706055 26.149999618530273,4.010000228881836 C26.149999618530273,4.010000228881836 26,4 26,4z M28,-28 C32.41999816894531,-28 36,-24.420000076293945 36,-20 C36,-20 36,20 36,20 C36,24.420000076293945 32.41999816894531,28 28,28 C28,28 -28,28 -28,28 C-32.41999816894531,28 -36,24.420000076293945 -36,20 C-36,20 -36,-20 -36,-20 C-36,-24.420000076293945 -32.41999816894531,-28 -28,-28 C-28,-28 28,-28 28,-28z"></path></g></g></g></svg>',fullscreenWebOff:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="28" height="28" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_177"><rect width="88" height="88" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_177)"><g transform="matrix(1,0,0,1,44,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-14,-20 C-14,-20 -18,-20 -18,-20 C-19.049999237060547,-20 -19.920000076293945,-19.18000030517578 -19.989999771118164,-18.149999618530273 C-19.989999771118164,-18.149999618530273 -20,-18 -20,-18 C-20,-18 -20,-12 -20,-12 C-20,-12 -26,-12 -26,-12 C-27.049999237060547,-12 -27.920000076293945,-11.180000305175781 -27.989999771118164,-10.149999618530273 C-27.989999771118164,-10.149999618530273 -28,-10 -28,-10 C-28,-10 -28,-6 -28,-6 C-28,-4.949999809265137 -27.18000030517578,-4.079999923706055 -26.149999618530273,-4.010000228881836 C-26.149999618530273,-4.010000228881836 -26,-4 -26,-4 C-26,-4 -14,-4 -14,-4 C-12.949999809265137,-4 -12.079999923706055,-4.820000171661377 -12.010000228881836,-5.849999904632568 C-12.010000228881836,-5.849999904632568 -12,-6 -12,-6 C-12,-6 -12,-18 -12,-18 C-12,-19.049999237060547 -12.819999694824219,-19.920000076293945 -13.850000381469727,-19.989999771118164 C-13.850000381469727,-19.989999771118164 -14,-20 -14,-20z M18,-20 C18,-20 14,-20 14,-20 C12.949999809265137,-20 12.079999923706055,-19.18000030517578 12.010000228881836,-18.149999618530273 C12.010000228881836,-18.149999618530273 12,-18 12,-18 C12,-18 12,-6 12,-6 C12,-4.949999809265137 12.819999694824219,-4.079999923706055 13.850000381469727,-4.010000228881836 C13.850000381469727,-4.010000228881836 14,-4 14,-4 C14,-4 26,-4 26,-4 C27.049999237060547,-4 27.920000076293945,-4.820000171661377 27.989999771118164,-5.849999904632568 C27.989999771118164,-5.849999904632568 28,-6 28,-6 C28,-6 28,-10 28,-10 C28,-11.050000190734863 27.18000030517578,-11.920000076293945 26.149999618530273,-11.989999771118164 C26.149999618530273,-11.989999771118164 26,-12 26,-12 C26,-12 20,-12 20,-12 C20,-12 20,-18 20,-18 C20,-19.049999237060547 19.18000030517578,-19.920000076293945 18.149999618530273,-19.989999771118164 C18.149999618530273,-19.989999771118164 18,-20 18,-20z M-14,4 C-14,4 -26,4 -26,4 C-27.049999237060547,4 -27.920000076293945,4.820000171661377 -27.989999771118164,5.849999904632568 C-27.989999771118164,5.849999904632568 -28,6 -28,6 C-28,6 -28,10 -28,10 C-28,11.050000190734863 -27.18000030517578,11.920000076293945 -26.149999618530273,11.989999771118164 C-26.149999618530273,11.989999771118164 -26,12 -26,12 C-26,12 -20,12 -20,12 C-20,12 -20,18 -20,18 C-20,19.049999237060547 -19.18000030517578,19.920000076293945 -18.149999618530273,19.989999771118164 C-18.149999618530273,19.989999771118164 -18,20 -18,20 C-18,20 -14,20 -14,20 C-12.949999809265137,20 -12.079999923706055,19.18000030517578 -12.010000228881836,18.149999618530273 C-12.010000228881836,18.149999618530273 -12,18 -12,18 C-12,18 -12,6 -12,6 C-12,4.949999809265137 -12.819999694824219,4.079999923706055 -13.850000381469727,4.010000228881836 C-13.850000381469727,4.010000228881836 -14,4 -14,4z M26,4 C26,4 14,4 14,4 C12.949999809265137,4 12.079999923706055,4.820000171661377 12.010000228881836,5.849999904632568 C12.010000228881836,5.849999904632568 12,6 12,6 C12,6 12,18 12,18 C12,19.049999237060547 12.819999694824219,19.920000076293945 13.850000381469727,19.989999771118164 C13.850000381469727,19.989999771118164 14,20 14,20 C14,20 18,20 18,20 C19.049999237060547,20 19.920000076293945,19.18000030517578 19.989999771118164,18.149999618530273 C19.989999771118164,18.149999618530273 20,18 20,18 C20,18 20,12 20,12 C20,12 26,12 26,12 C27.049999237060547,12 27.920000076293945,11.180000305175781 27.989999771118164,10.149999618530273 C27.989999771118164,10.149999618530273 28,10 28,10 C28,10 28,6 28,6 C28,4.949999809265137 27.18000030517578,4.079999923706055 26.149999618530273,4.010000228881836 C26.149999618530273,4.010000228881836 26,4 26,4z M28,-28 C32.41999816894531,-28 36,-24.420000076293945 36,-20 C36,-20 36,20 36,20 C36,24.420000076293945 32.41999816894531,28 28,28 C28,28 -28,28 -28,28 C-32.41999816894531,28 -36,24.420000076293945 -36,20 C-36,20 -36,-20 -36,-20 C-36,-24.420000076293945 -32.41999816894531,-28 -28,-28 C-28,-28 28,-28 28,-28z"></path></g></g></g></svg>'},Et=()=>({container:"",url:"",volume:1,isLive:!1,muted:!1,autoplay:!1,pip:!1,autoMini:!1,screenshot:!1,setting:!0,loop:!1,flip:!0,playbackRate:!0,autoSize:!1,aspectRatio:!1,fullscreen:!0,fullscreenWeb:!0,subtitleOffset:!0,miniProgressBar:!0,mutex:!1,backdrop:!0,playsInline:!1,autoPlayback:!0,airplay:!0,lock:!0,fastForward:!0,theme:F.theme,lang:navigator.language.toLowerCase(),moreVideoAttr:{crossOrigin:"anonymous"},icons:iu}),Le="[artplayer-plugin-quality]：",Q="artplayer-plugin-quality",Oe={$data:{art:null},init(e,t){Reflect.set(this.$data,"art",null),this.$data.art=e,this.update(t);},update(e){const t=this;if(e.qualityList.length){let u=e.qualityList[0];const i=`artplayer-quality-${e.from}`,r=this.$data.art.storage.get(i);let a={index:0,html:u.html,url:u.url};if(r){const d=e.qualityList.findIndex(p=>p.quality===r.quality);if(d!==-1){const p=e.qualityList[d];a.index=d,a.url=p.url,a.html=p.html;}else console.warn(Le+"没有找到上次选的画质，使用当前默认第一个画质");}let n=e.qualityList.map((d,p)=>({default:p===a.index,html:d.html,url:d.url,quality:d.quality}));const l={name:Q,index:10,position:"right",html:a.html,selector:n,onSelect:function(d){let p=d;return console.log(Le+"切换画质",p),t.$data.art.switchQuality(p.url),t.$data.art.storage.set(i,{quality:p.quality}),d.html}};Reflect.has(this.$data.art.controls,Q)?this.$data.art.controls.update(l):this.$data.art.controls.add(l),this.$data.art.url=a.url;}else Reflect.has(this.$data.art.controls,Q)&&this.$data.art.controls.remove(Q);}},vt=e=>t=>(Oe.init(t,e),{name:Q,update(u){Oe.update(u);}}),be={$data:{art:null},$key:{plugin_KEY:"artplayer-plugin-toast"},$flag:{isInitCSS:!1},$config:{originToast:"art-layer-auto-playback",hideClassName:"art-toast-hide-opacity",prefix:"mplayer-toast-gm"},$el:{get $originPlayer(){return document.querySelector(".art-video-player .art-layers")}},toast(e){typeof e=="string"&&(e={text:e}),this.initCSS();let t=e.parent??this.$el.$originPlayer;if(!t)throw new TypeError("toast parent is null");this.mutationMPlayerOriginToast(t);let u=f.createElement("div",{"data-from":"gm"});if(f.addClass(u,this.$config.prefix),e.showCloseBtn){let n=f.createElement("div",{className:this.$config.prefix+"-close",innerHTML:`
                    <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="m571.733 512 268.8-268.8c17.067-17.067 17.067-42.667 0-59.733-17.066-17.067-42.666-17.067-59.733 0L512 452.267l-268.8-268.8c-17.067-17.067-42.667-17.067-59.733 0-17.067 17.066-17.067 42.666 0 59.733l268.8 268.8-268.8 268.8c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.534 19.2 12.8 29.866 12.8s21.334-4.266 29.867-12.8l268.8-268.8 268.8 268.8c8.533 8.534 19.2 12.8 29.867 12.8s21.333-4.266 29.866-12.8c17.067-17.066 17.067-42.666 0-59.733L571.733 512z"></path></svg>
                `});u.appendChild(n),f.on(n,"click",l=>{c.preventEvent(l),this.closeToast(u);},{capture:!0});}let i=f.createElement("span",{className:this.$config.prefix+"-text",innerText:e.text});if(u.appendChild(i),typeof e.timeText=="string"&&e.timeText.trim()!=""){let n=f.createElement("span",{className:this.$config.prefix+"-time",innerText:e.timeText});u.appendChild(n);}if(typeof e.jumpText=="string"&&e.jumpText.trim()!=""){let n=f.createElement("span",{className:this.$config.prefix+"-jump",innerText:e.jumpText});u.appendChild(n),f.on(n,"click",l=>{typeof e.jumpClickCallback=="function"&&(c.preventEvent(l),e.jumpClickCallback(l));},{capture:!0});}this.setTransitionendEvent(u,e);let r=typeof e.timeout=="number"&&!isNaN(e.timeout)?e.timeout:3500;t.appendChild(u);let a=setTimeout(()=>{this.closeToast(u);},r);return {$toast:u,timeoutId:a,close:()=>{clearTimeout(a),this.closeToast(u);}}},initCSS(){this.$flag.isInitCSS||(this.$flag.isInitCSS=!0,S(`
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
		`),S(`
        .${this.$config.hideClassName}{
            opacity: 0;
            visibility: hidden;
        }
        `));},mutationMPlayerOriginToast(e){let t=this.$el.$originPlayer;t&&(t.hasAttribute("data-mutation")||(o.success("添加观察器，动态更新toast的位置"),t.setAttribute("data-mutation","gm"),c.mutationObserver(t,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{this.updatePageToastBottom();}})));},updatePageToastBottom(){let e=Array.from(document.querySelectorAll(`.${this.$config.prefix}`)).concat(Array.from(document.querySelectorAll(".".concat(this.$config.originToast))));e.length&&(e.length-1,e.forEach((t,u)=>{t.setAttribute("data-transition","move"),t.style.bottom=`calc( calc( var(--art-control-height) + var(--art-bottom-gap) ) * ${u+1} + 10px)`;}));},closeToast(e){e.classList.add(this.$config.hideClassName);},getTransitionendEventNameList(){return ["webkitTransitionEnd","mozTransitionEnd","MSTransitionEnd","otransitionend","transitionend"]},setTransitionendEvent(e,t){let u=this,i=this.getTransitionendEventNameList();f.on(e,i,function(r){let a=e.getAttribute("data-transition");if(e.classList.contains(u.$config.hideClassName)){typeof t=="object"&&typeof(t==null?void 0:t.closeCallback)=="function"&&t.closeCallback(),e.remove();return}if(a==="move"){e.removeAttribute("data-transition");return}},{capture:!0});}},bt=e=>t=>(be.$data.art=t,{name:be.$key.plugin_KEY,toast(...u){return be.toast(...u)}}),ru=be.$key.plugin_KEY,ze=e=>(e.epList||[]).map(t=>({isDefault:t.aid===e.aid&&t.cid===e.cid,title:gt(t.title),aid:t.aid,bvid:t.bvid,cid:t.cid,onSelect(u,i){ie.updateArtPlayerVideoInfo({aid:t.aid,bvid:t.bvid,cid:t.cid,pic:t.arc.pic,title:t.title,epList:e.epList||[]},!0);}})),ne={$data:{art:null,currentOption:null},resetEnv(e){e&&Reflect.set(this.$data,"art",null),Reflect.set(this.$data,"currentOption",null);},async init(e){this.resetEnv(!0),this.$data.currentOption=e;const t="artplayer-video-danmaku-option",u=new nt(t),i=u.getLocalArtDanmakuOption(),r={...Et(),container:e.container,poster:e.poster,settings:[{name:"video-playback-codeid",html:"播放策略",tooltip:"默认",icon:'<svg t="1727413004405" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3183" width="24" height="24"><path d="M170.666667 256h682.666666c23.466667 0 42.666667 19.2 42.666667 42.666667v170.666666h85.333333V256c0-46.933333-38.4-85.333333-85.333333-85.333333H128c-46.933333 0-85.333333 38.4-85.333333 85.333333v512c0 46.933333 38.4 85.333333 85.333333 85.333333h384v-85.333333H170.666667c-23.466667 0-42.666667-19.2-42.666667-42.666667V298.666667c0-23.466667 19.2-42.666667 42.666667-42.666667z" p-id="3184"></path><path d="M640 512L384 341.333333v341.333334zM968.96 786.346667c1.28-12.373333 1.706667-24.746667 0.426667-36.693334l45.653333-36.266666c4.266667-3.413333 5.12-8.96 2.56-13.653334l-43.946667-76.373333c-2.56-4.693333-8.106667-6.4-13.226666-4.693333l-54.613334 21.333333a146.773333 146.773333 0 0 0-32-17.92l-8.533333-58.026667a10.624 10.624 0 0 0-10.666667-9.386666h-88.32c-5.12 0-9.813333 3.84-10.666666 8.96l-8.533334 58.026666c-11.093333 4.693333-21.76 11.093333-31.573333 17.92l-54.613333-21.333333c-5.12-2.133333-10.666667 0-13.226667 4.693333l-43.946667 76.373334c-2.56 4.693333-1.706667 10.24 2.56 13.653333l45.653334 36.693333c-1.28 12.373333-1.706667 24.746667-0.426667 36.693334l-45.653333 36.266666c-4.266667 3.413333-5.12 8.96-2.56 13.653334l43.946666 76.373333c2.56 4.693333 8.106667 6.4 13.226667 4.693333l54.186667-21.333333c9.813333 7.253333 20.48 13.226667 32 17.92l8.533333 58.026667c0.853333 5.12 5.12 8.96 10.666667 8.96h88.32c5.12 0 9.813333-3.84 10.666666-8.96l8.533334-58.026667c11.093333-4.693333 21.76-11.093333 31.573333-17.92l54.613333 21.333333c5.12 2.133333 10.666667 0 13.226667-4.693333l43.946667-76.373333c2.56-4.693333 1.706667-10.24-2.56-13.653334l-45.226667-36.266666zM810.666667 832c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64z" p-id="3185"></path></svg>',selector:[{default:!0,html:"默认",value:L.AV1},{html:"AV1",value:L.AV1},{html:"HEVC",value:L.HEVC},{html:"AVC",value:L.AVC}],onSelect:function(a){return s.setValue("bili-bangumi-videoCodingCode",a.value),a.html}}],plugins:[bt(),vt({from:"video",qualityList:e.quality})]};return r.type="mp4",s.getValue("artplayer-plugin-video-danmaku-enable")&&r.plugins.push(Xe({danmuku:e.danmukuUrl,speed:i.speed,margin:i.margin,opacity:i.opacity,color:"#FFFFFF",mode:0,modes:i.modes,fontSize:i.fontSize,antiOverlap:i.antiOverlap,synchronousPlayback:i.synchronousPlayback,mount:void 0,heatmap:!0,width:800,points:[],filter:a=>a.text.length<=100,beforeVisible:()=>!0,visible:i.visible,emitter:!1,maxLength:50,lockTime:3,theme:c.isThemeDark()?"dark":"light",beforeEmit(a){return new Promise(n=>{console.log(a),setTimeout(()=>{n(!0);},1e3);})}})),s.getValue("artplayer-plugin-video-m4sAudioSupport-enable")&&r.plugins.push(ot({from:"video",showSetting:!0,audioList:e.audioList||[]})),s.getValue("artplayer-plugin-video-epChoose-enable")&&r.plugins.push(Ct({EP_LIST:ze(e),automaticBroadcast:!0})),s.getValue("artplayer-plugin-video-cc-subtitle-enable")&&r.plugins.push(mt({from:"video",cid:e.cid,aid:e.aid,bvid:e.bvid})),s.getValue("artplayer-plugin-video-toptoolbar-enable")&&r.plugins.push(st({onlineInfoParams:{aid:e.aid,cid:e.cid,bvid:e.bvid},title:e.videoTitle,showWrap:!0,showTitle:!0,showOnlineTotal:!0})),s.getValue("bili-video-playerAutoPlayVideo")&&(r.muted=!0,r.autoplay=!0),this.$data.art=new Ze(r),s.getValue("artplayer-plugin-video-danmaku-enable")&&u.repairBrowserNoResponse(this.$data.art),u.onConfigChange(this.$data.art),this.$data.art},async update(e,t){this.resetEnv(!1),this.$data.currentOption=t,o.info(["更新新的播放信息",t]),e.pause(),o.info("暂停视频"),e.currentTime=0,o.info("重置播放进度"),this.updatePluginInfo(e,t),e.play(),o.info("播放");},updatePluginInfo(e,t){if(e.plugins[Q].update({from:"video",qualityList:t.quality}),o.info(["更新画质",t.quality]),s.getValue("artplayer-plugin-video-danmaku-enable")&&(e.plugins.artplayerPluginDanmuku.config({danmuku:t.danmukuUrl}),e.plugins.artplayerPluginDanmuku.load(),o.info(["更新弹幕姬",t.danmukuUrl])),s.getValue("artplayer-plugin-video-m4sAudioSupport-enable")&&(e.plugins[lt].update({from:"video",audioList:t.audioList||[]}),o.info(["更新音频",t.audioList])),s.getValue("artplayer-plugin-video-epChoose-enable")&&(e.plugins[At].update({EP_LIST:ze(t),automaticBroadcast:!0}),o.info(["更新选集信息",t.epList])),s.getValue("artplayer-plugin-video-cc-subtitle-enable")){let i=e.plugins[ft];const r={from:"video",aid:t.aid,bvid:t.bvid,cid:t.cid};i.update(r),o.info(["更新字幕",r]);}if(s.getValue("artplayer-plugin-video-toptoolbar-enable")){let i=e.plugins[ct];const r={showRight:!0,showRightFollow:!0,showWrap:!0,showTitle:!0,showOnlineTotal:!0,title:t.videoTitle,onlineInfoParams:{aid:t.aid,cid:t.cid,bvid:t.bvid}};i.update(r),o.info(["更新顶部标题",r]);}}};function au(e){const t={};return e.forEach(i=>{(!t[i.id]||i.size>t[i.id].size)&&(t[i.id]=i);}),Object.values(t)}function Ie(e,t){let u=[];return e.video.forEach(i=>{if(!e.accept_quality.includes(i.id)||t.codecid!=null&&i.codecid!==t.codecid)return;let r=e.support_formats.find(l=>l.quality===i.id),a=O.findBetterCDN(i.base_url,i.baseUrl,i.backup_url,i.backupUrl);a=O.replaceVideoCDN(a);let n=r==null?void 0:r.new_description;u.push({name:n,url:a,type:i.mimeType,id:i.id,quality:i.id,vip:!1});}),u}const nu=async e=>{var a,n;const t=[];let u=[];if(s.getValue("bili-video-playType","mp4")==="mp4"){const l=await xe.playUrl({bvid:e.bvid,cid:e.cid,fnval:1,fnver:0,fourk:1,high_quality:1,qn:127,setPlatformHTML5:!0});if(o.info(l),!l)return;let d=l.durl[0],p=l.support_formats.find(v=>v.quality===l.quality),m=O.findBetterCDN(d.url,d.url||((a=d.backup_url)==null?void 0:a[0])),g=p==null?void 0:p.new_description;u.push({name:g,url:m,type:"audio/mp4",id:l.quality,quality:l.quality,vip:!1});}else {const l=await xe.playUrl({bvid:e.bvid,cid:e.cid,fnval:3088,fnver:0,fourk:1,high_quality:1,qn:127,setPlatformHTML5:!1});if(o.info(l),!l)return;let d=Xt.getUserChooseVideoCodingCode();l.dash.audio.forEach(p=>{let m=O.findBetterCDN(p.baseUrl,p.base_url,p.baseUrl,p.backup_url);s.getValue("bili-video-uposServerSelect-applyAudio")&&(m=O.replaceVideoCDN(m)),t.push({url:m,id:p.id,text:at[p.id]||""});}),t.sort((p,m)=>m.id-p.id),o.info(["ArtPlayer: 获取的音频信息",t]),u=[...Ie({accept_quality:l.accept_quality,support_formats:l.support_formats,video:l.dash.video},{codecid:d})],u.length===0&&l.dash.video.length!==0&&(o.warn(`当前选择的视频编码id为: ${d}，但是过滤出的视频没有一个符合的，所以直接放弃使用自定义选择视频编码`),u=[],u=[...Ie({accept_quality:l.accept_quality,support_formats:l.support_formats,video:l.dash.video},{})]),u=au(u),u.sort((p,m)=>m.quality-p.quality),o.info(["ArtPlayer: 获取的视频画质信息",u]);}const i=u.map((l,d)=>({quality:l.quality,html:l.name,url:l.url})),r={container:null,epList:e.epList,audioUrl:null,url:"",poster:e.pic,aid:e.aid,bvid:e.bvid,cid:e.cid,videoTitle:e.title,danmukuUrl:`https://api.bilibili.com/x/v1/dm/list.so?oid=${e.cid}`,quality:i};return r.url=(n=u==null?void 0:u[0])==null?void 0:n.url,t.length&&(r.audioList=t.map((l,d)=>({isDefault:d===0,url:l.url,soundQualityCode:l.id,soundQualityCodeText:l.text}))),r},ie={$data:{art:null},init(){s.execMenu("bili-video-enableArtPlayer",()=>{this.coverVideoPlayer();});},coverVideoPlayer(){if(document.querySelector("#artplayer"))o.warn("已存在播放器，更新播放信息");else {S(`
            /* 隐藏原本的播放器 */
			#app .video .m-video-player .player-container{
				display: none !important;
			}
			
			${rt}
			
			${Qt}

			`);let e=s.getValue("bili-video-artplayer-controlsPadding-left-right",0);e!=0&&S(`
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
				`);}this.updateArtPlayerVideoInfo();},updateArtPlayerVideoInfo(e,t){let u=this;y.waitVuePropToSet("#app .video .m-video-player",{msg:"等待m-video-player加载完成",check(i){var r,a,n,l,d,p;return !t&&ne.$data.currentOption!=null?(ne.$data.art.pause(),typeof((r=i==null?void 0:i.info)==null?void 0:r.aid)=="number"&&ne.$data.currentOption.aid!==i.info.aid&&typeof((a=i==null?void 0:i.info)==null?void 0:a.bvid)=="string"&&typeof((n=i==null?void 0:i.info)==null?void 0:n.cid)=="number"):typeof((l=i==null?void 0:i.info)==null?void 0:l.aid)=="number"&&typeof((d=i==null?void 0:i.info)==null?void 0:d.bvid)=="string"&&typeof((p=i==null?void 0:i.info)==null?void 0:p.cid)=="number"},async set(i){const r=document.querySelector("#app .video .m-video-player");let{aid:a,bvid:n,cid:l,pic:d,title:p}=i.info,m=[];const g=document.querySelector(".m-video-season-new");if(g&&y.getVue(g)){let E=y.getVue(g),x=E==null?void 0:E.videoList;Array.isArray(x)&&(m=x);}e==null&&(e={aid:a,bvid:n,cid:l,pic:d,title:p,epList:m}),o.info(`视频播放信息 => aid：${a} bvid：${n} cid：${l}`);const v=await nu(e);if(v==null)return;let A=document.querySelector("#artplayer");if(!A){const E=f.createElement("div",{className:"artplayer-container",innerHTML:`
						<div id="artplayer"></div>
						`});A=E.querySelector("#artplayer"),f.append(r,E);}if(v.container=A,ie.$data.art==null){let E=await ne.init(v);if(E)ie.$data.art=E;else return;ie.$data.art.volume=1,u.$data.art.once("ready",()=>{s.execMenu("bili-video-playerAutoPlayVideoFullScreen",async()=>{o.info("自动进入全屏"),u.$data.art.fullscreen=!0,u.$data.art.once("fullscreenError",()=>{o.warn("未成功进入全屏，需要用户交互操作，使用网页全屏代替"),u.$data.art.fullscreenWeb=!0;});});});}else await ne.update(ie.$data.art,v);r.style.paddingTop="";}});}},ou={$data:{isAddBeautifyCSS:!1},init(){ie.init(),s.execMenuOnce("bili-video-repairVideoBottomAreaHeight",()=>this.repairVideoBottomAreaHeight()),s.execMenuOnce("bili-video-autoClickContinueToWatchOnTheWebpage",()=>{this.autoClickContinueToWatchOnTheWebpage();}),s.execMenu("bili-video-beautify",()=>{this.beautify();}),s.execMenuOnce("bili-video-cover-bottomRecommendVideo",()=>{this.coverBottomRecommendVideo();}),s.execMenuOnce("bili-video-gestureReturnToCloseCommentArea",()=>{this.gestureReturnToCloseCommentArea();}),s.execMenuOnce("bili-video-cover-seasonNew",()=>{this.coverSeasonNew();}),f.ready(()=>{s.execMenuOnce("bili-video-optimizationScroll",()=>{this.optimizationScroll();}),s.execMenu("bili-video-disableSwipeTab",()=>{this.disableSwipeTab();});});},beautify(){o.info("美化显示"),this.$data.isAddBeautifyCSS||(this.$data.isAddBeautifyCSS=!0,S(Kt)),c.waitNode(F.className.video+" .bottom-tab .list-view .card-box",1e4).then(e=>{if(!e){o.error("$cardBox is null");return}function t(a){var m,g;let n=a.querySelector(".title"),l=a.querySelector(".count .left"),d=!!a.querySelector(".gm-right-container"),p=y.getVue(a);if(n&&l&&p&&!d){let v=(g=(m=p==null?void 0:p.info)==null?void 0:m.owner)==null?void 0:g.name;if(v==null){o.error("美化显示-handleVCardToApp：获取up主名字失败");return}let A=a.querySelector(".count"),E=n.cloneNode(!0),x=l.cloneNode(!0);f.hide(n),A&&f.hide(A);let P=a.querySelector(".open-app.weakened");P&&f.hide(P);let $=document.createElement("div");$.className="gm-up-name",$.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${v}</span>
						`;let M=document.createElement("div"),N=document.createElement("div");M.className="gm-right-container",N.className="gm-right-bottom",f.after(n,M),M.appendChild(E),M.appendChild(N),N.appendChild($),N.appendChild(x);}}function u(a){var m,g,v;let n=a.querySelector(".title"),l=a.querySelector(".count"),d=!!a.querySelector(".gm-right-container"),p=y.getVue(a);if(n&&l&&p&&!d){let A=(m=p==null?void 0:p.info)==null?void 0:m.duration;if(A==null){o.error("美化显示-handleVCard：获取视频时长失败");return}let E=(v=(g=p==null?void 0:p.info)==null?void 0:g.owner)==null?void 0:v.name;if(E==null){o.error("美化显示-handleVCard：获取up主名字失败");return}let x=n.cloneNode(!0),P=l.cloneNode(!0);f.hide(n);let $=document.createElement("div");$.className="duration",$.innerText=T.parseDuration(A),P.className="left";let M=document.createElement("div");l.appendChild($),M.className="gm-up-name",M.innerHTML=`
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${E}</span>
						`;let N=document.createElement("div"),B=document.createElement("div");N.className="gm-right-container",B.className="gm-right-bottom",f.after(n,N),N.appendChild(x),N.appendChild(B),B.appendChild(M),B.appendChild(P);}}let i=new c.LockFunction(()=>{let a=document.querySelectorAll(F.className.video+" .bottom-tab .list-view .card-box .v-card-toapp"),n=document.querySelectorAll(F.className.video+" .bottom-tab .list-view .card-box>a.v-card");a.forEach(l=>{t(l);}),n.forEach(l=>{u(l);});},25),r=document.querySelector(F.className.video);r?c.mutationObserver(r,{config:{subtree:!0,attributes:!0,childList:!0},callback(){i.run();}}):o.error("未找到视频根节点");});},repairVideoBottomAreaHeight(){return o.info("修复视频底部区域高度"),S(`
		${F.className.video} {
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
			${F.className.video}{
				.m-video-info-new{
					margin-top: 72vmin;
				}
			}
		}
		`)},autoClickContinueToWatchOnTheWebpage(){f.on(document,"click",F.className.video+" .main-info .btn",function(){o.info("触发点击【立即播放】，自动等待弹窗出现"),c.waitNode(".to-see",1e4).then(e=>{if(!e){o.error("弹窗按钮【继续在网页观看】10秒内未出现，取消等待");return}o.success("自动点击 继续在网页观看"),e.click();});});},coverBottomRecommendVideo(){o.info("覆盖 相关视频 点击事件"),f.on(document,"click",F.className.video+" .list-view .card-box .launch-app-btn",function(e){let t=e.target,u=y.getVue(t);if(!u){b.error("获取相关视频的__vue__失败");return}let i=u.bvid;if(c.isNull(i))if(u.$children&&u.$children[0]&&c.isNotNull(u.$children[0].bvid))i=u.$children[0].bvid;else {b.error("获取相关视频的bvid失败");return}o.info("相关视频的bvid: "+i),T.goToUrl(re.getVideoUrl(i)),c.preventEvent(e);},{capture:!0});},coverSeasonNew(){o.info("覆盖 选集视频列表 点击事件");function e(t){let u=t.target,i=y.getVue(u);if(!i){b.error("获取选集视频的目标视频的__vue__失败");return}let r=i.bvid;if(c.isNull(r)){b.error("获取相关视频的bvid失败");return}o.info("相关视频的bvid: "+r),T.goToUrl(re.getVideoUrl(r)),c.preventEvent(t);}f.on(document,"click",F.className.video+" .m-video-season-new .video-card .launch-app-btn",e,{capture:!0}),f.on(document,"click",F.className.video+" .m-video-season-panel .season-video-item .launch-app-btn",e,{capture:!0});},gestureReturnToCloseCommentArea(){o.info("手势返回关闭评论区，全局监听document点击.sub-reply-preview"),c.waitNode("#app").then(e=>{c.waitVueByInterval(e,()=>{var u,i;let t=y.getVue(e);return t==null?!1:typeof((i=(u=t==null?void 0:t.$router)==null?void 0:u.options)==null?void 0:i.scrollBehavior)!=null},250,1e4).then(t=>{let u=y.getVue(e);if(!u){o.error("获取#app的vue属性失败");return}let i=u.$router.options.scrollBehavior;u.$router.options.scrollBehavior=function(r,a,n){return r.hash==="#/seeCommentReply"?(o.info("当前操作为打开评论区，scrollBehavior返回null"),null):r.hash===""&&a.hash==="#/seeCommentReply"?(o.info("当前操作为关闭评论区，scrollBehavior返回null"),null):i.call(this,...arguments)};});}),f.on(document,"click",".sub-reply-preview",function(e){let t=document.querySelector("#app"),u=y.getVue(t);if(!u){o.error("获取#app元素失败");return}let i=T.hookGestureReturnByVueRouter({vueObj:u,hash:"#/seeCommentReply",callback(r){if(!r)return !1;let a=document.querySelector(".dialog-close-icon");return a?a.click():o.error("评论区关闭失败，原因：元素dialog-close-icon获取失败"),!0}});c.waitNode(".dialog-close-icon").then(r=>{f.on(r,"click",function(){i.resumeBack(!1);},{capture:!0,once:!0});});});},enterVideoFullScreen(){c.waitNode(".mplayer-btn-widescreen",5e3).then(e=>{if(!e){o.error("获取全屏按钮失败"),b.error("获取全屏按钮失败");return}if(e.closest(".mplayer-wide")){o.warn("当前的全屏按钮是【退出全屏】，不点击");return}o.info("进入全屏"),e.click();});},optimizationScroll(){let e=null,t=null,u=null,i=null,r=null,a=0,n=0;function l(d){return !document.contains(d)}f.on(document,"scroll",d=>{if(l(t)){if(t=document.querySelector(".m-video-player"),l(t))return;if(a==0){const v=t.getBoundingClientRect();a=v.height,n=v.top,o.info(`视频区域的最大高度为 ${a}px`),o.info(`视频区域的最大top为 ${n}px`);}}if(l(u)&&(u=document.querySelector(".m-video-info-new"),l(u))||l(e)&&(e=document.querySelector(".m-navbar"),l(e))||l(i)&&(i=document.querySelector(".bottom-tab"),l(i))||l(r)&&(r=document.querySelector(".bottom-tab .v-affix"),l(r)))return;let p=u.getBoundingClientRect().top;p>=0?p<=a?t.style.paddingTop=p+"px":t.style.paddingTop="":t.style.paddingTop="0px";let m=f.height(e);i.getBoundingClientRect().top<m?r.hasAttribute("data-is-fixed")||(r.style.cssText=`position: fixed;left: 0px;top: ${m}px;z-index: 10000;width: 100%;`,r.setAttribute("data-is-fixed","true")):(r.style.cssText="",r.removeAttribute("data-is-fixed"));},{passive:!0});},disableSwipeTab(){o.info("禁止滑动切换tab"),y.waitVuePropToSet(".m-video-bottom-tab",{msg:"等待tab的vue属性touchstart、touchmove、touchend事件，_bindEvents函数",check(e){var t,u,i,r,a,n,l,d;return ((t=e==null?void 0:e.slider)==null?void 0:t.el)instanceof HTMLElement&&typeof((i=(u=e==null?void 0:e.slider)==null?void 0:u.events)==null?void 0:i.touchstart)=="function"&&typeof((a=(r=e==null?void 0:e.slider)==null?void 0:r.events)==null?void 0:a.touchmove)=="function"&&typeof((l=(n=e==null?void 0:e.slider)==null?void 0:n.events)==null?void 0:l.touchend)=="function"&&typeof((d=e==null?void 0:e.slider)==null?void 0:d._bindEvents)=="function"},set(e){let t=e.slider.el;t.removeEventListener("touchstart",e.slider.events.touchstart),t.removeEventListener("touchmove",e.slider.events.touchmove),t.removeEventListener("touchend",e.slider.events.touchend),e.slider._bindEvents=()=>{},o.success("成功禁用滑动，清除touchstart、touchmove、touchend事件，覆盖_bindEvents函数");}});}},lu=`.artplayer-container {\r
	width: 100vw;\r
	height: 35vh;\r
}`,le={getUrl(e){if(e!=null)return e.getAttribute("universallink")},jumpToUrl(e){let u=e.target.querySelector("bili-open-app");if(u){let i=le.getUrl(u);i?T.goToUrl(i):(b.error("获取bili-open-app的Url失败"),o.error("获取bili-open-app的Url失败"));}else b.error("未获取到<bili-open-app>元素"),o.error("未获取到<bili-open-app>元素");}},ce={filteringSensitiveSearchParamData(e){const t=c.assign({},e,!0);return Reflect.deleteProperty(t,"access_key"),Reflect.deleteProperty(t,"access_token"),t},failToast(e){o.error(e),alert(JSON.stringify(e,null,4));}},Ue={async getPlayUrl(e){let t={avid:"",cid:"",ep_id:"",qn:127,fnver:0,fnval:3088,fourk:1};t=c.assign(t,e);let u=Fe.getBangumiProxyHost();o.info("番剧播放地址请求数据");let i=[],r;const a="/pgc/player/web/playurl";o.info(`请求路径：${a}`);for(let n=0;n<u.length;n++){const l=u[n],d=l.host,p={};d!==fe.web_host&&(c.assign(p,Fe.getBangumiProxySearchParam({area:l.area}),!0),o.info(`代理服务器数据: ${JSON.stringify(l)}`),o.info(`代理服务器请求参数：${JSON.stringify(ce.filteringSensitiveSearchParamData(p))}`));let m=`https://${d}${a}?${c.toSearchParamsStr(t)}&${c.toSearchParamsStr(p)}`,g=await R.get(m,{responseType:"json",fetch:!1,allowInterceptConfig:!1,headers:{Referer:"https://www.bilibili.com/"}});if(!g.status){o.error(`代理服务器：${d} 请求失败`);continue}let v=c.toJSON(g.data.responseText);if(v.result,!H.isWebApiSuccess(v)||H.isAreaLimit(v)){o.error(`请求失败，当前代理服务器：${d} ${JSON.stringify(v)}`),i.push(v);continue}r=v.result;break}return r==null&&ce.failToast(i),r},async getPlayUrlHTML5(e){let t={avid:"",cid:"",ep_id:"",bsource:""};t=c.assign(t,e),o.info("（原版api）番剧播放地址请求数据");let i=`https://${fe.web_host}/pgc/player/web/playurl/html5?${c.toSearchParamsStr(t)}`,r=await R.get(i,{responseType:"json",fetch:!0,headers:{Host:"www.bilibili.com",Referer:"https://www.bilibili.com"}});if(!r.status)return;let a=c.toJSON(r.data.responseText);if(!H.isWebApiSuccess(a)){ce.failToast(a);return}return a.result}},su="[artplayer-plugin-airborneHelper]：",w={$data:{tipJumpToastTimeoutId:void 0,tipJumpToastInfo:void 0,successJumpToastInfo:void 0},$event:{"video:timeupdate":()=>{if(w.$data.tipJumpToastTimeoutId!=null||!z.$data.art.playing)return;const e=5;let t=z.$data.art.currentTime,u=z.$data.option.clip_info_list.findIndex(i=>{let r=i.start;return r===0?t<=1:t>=r-e&&t<r});if(u!==-1){let i=function(){var l;clearTimeout(w.$data.tipJumpToastTimeoutId),w.$data.tipJumpToastTimeoutId=void 0,(l=w.$data.tipJumpToastInfo)==null||l.close(),w.$data.tipJumpToastInfo=void 0,z.$data.option.clip_info_list.splice(u,1);},r=z.$data.option.clip_info_list[u],a=z.$data.art.plugins[ru],n=(r.start-t)*1e3;w.$data.tipJumpToastTimeoutId=setTimeout(()=>{z.$data.art.currentTime=r.end,w.$data.tipJumpToastTimeoutId=void 0,w.$data.successJumpToastInfo&&(w.$data.successJumpToastInfo.close(),w.$data.successJumpToastInfo=void 0),w.$data.successJumpToastInfo=a.toast({text:"空降成功~o(*≧▽≦)ツ┏━┓",closeCallback(){w.$data.successJumpToastInfo=void 0;}});},n),w.$data.tipJumpToastInfo&&(w.$data.tipJumpToastInfo.close(),w.$data.tipJumpToastInfo=void 0),w.$data.tipJumpToastInfo=a.toast({text:typeof r.toastText=="string"?r.toastText:"站稳扶好，准备起飞~",timeout:n<2e3?2e3:n,showCloseBtn:!1,jumpText:typeof r.toastText=="string"?"不跳过":"坠机",jumpClickCallback:()=>{i();}}),setTimeout(()=>{w.$data.tipJumpToastInfo&&(w.$data.tipJumpToastInfo.close(),w.$data.tipJumpToastInfo=void 0);},(e+3)*1e3);}}},bind(){Object.keys(this.$event).forEach(e=>{z.$data.art.on(e,this.$event[e]);});},unbind(){Object.keys(this.$event).forEach(e=>{z.$data.art.off(e,this.$event[e]);}),clearTimeout(w.$data.tipJumpToastTimeoutId),w.$data.tipJumpToastTimeoutId=void 0,w.$data.successJumpToastInfo&&(w.$data.successJumpToastInfo.close(),w.$data.successJumpToastInfo=void 0),w.$data.tipJumpToastInfo&&(w.$data.tipJumpToastInfo.close(),w.$data.tipJumpToastInfo=void 0);}},z={$key:{plugin_KEY:"plugin-airborne-helper"},$data:{art:null,option:null},init(e,t){this.$data.art=e,this.update(t);},update(e){this.$data.option=e,console.log(su+"更新配置",e),w.unbind(),e.clip_info_list.length&&w.bind();}},cu=e=>t=>(z.init(t,e),{name:z.$key.plugin_KEY,update(u){z.update(u);}}),du=z.$key.plugin_KEY,qe="[flvjs]：",He=e=>e.epList.map(t=>({isDefault:t.ep_id===e.ep_id&&t.aid===e.aid&&t.cid===e.cid,title:gt(t.long_title,t.title),aid:t.aid,bvid:t.bvid,cid:t.cid,ep_id:t.ep_id,onSelect(u,i){Bt.updateArtPlayerVideoInfo(t,e.epList);}})),Ge={$data:{art:null,flv:null,currentOption:null},resetEnv(e){e&&(Reflect.set(this.$data,"art",null),Reflect.set(this.$data,"flv",null)),Reflect.set(this.$data,"currentOption",null);},flvPlayer(){var u,i;if(this.$data.currentOption==null){console.error(qe+"获取当前配置为空");return}let e=this.$data.currentOption.flvInfo;(this.$data.flv!=null||e==null)&&((u=this.$data.flv)==null||u.detachMediaElement(),(i=this.$data.flv)==null||i.destroy());let t=this.$data.currentOption;console.log(qe+"加载视频",e),e.length>1?this.$data.flv=Be.createPlayer({type:"flv",filesize:t.flvTotalSize,duration:t.flvTotalDuration,segments:e.map(r=>({url:r.url,duration:r.duration,filesize:r.size}))},{stashInitialSize:1024*100}):this.$data.flv=Be.createPlayer({type:"flv",url:e[0].url},{stashInitialSize:1024*100}),this.$data.flv.attachMediaElement(this.$data.art.video),this.$data.flv.load();},async init(e){this.resetEnv(!0),this.$data.currentOption=e;const t="artplayer-bangumi-danmaku-option",u=new nt(t),i=u.getLocalArtDanmakuOption(),r={...Et(),container:e.container,settings:[{name:"video-playback-codeid",html:"播放策略",tooltip:"默认",icon:'<svg t="1727413004405" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3183" width="24" height="24"><path d="M170.666667 256h682.666666c23.466667 0 42.666667 19.2 42.666667 42.666667v170.666666h85.333333V256c0-46.933333-38.4-85.333333-85.333333-85.333333H128c-46.933333 0-85.333333 38.4-85.333333 85.333333v512c0 46.933333 38.4 85.333333 85.333333 85.333333h384v-85.333333H170.666667c-23.466667 0-42.666667-19.2-42.666667-42.666667V298.666667c0-23.466667 19.2-42.666667 42.666667-42.666667z" p-id="3184"></path><path d="M640 512L384 341.333333v341.333334zM968.96 786.346667c1.28-12.373333 1.706667-24.746667 0.426667-36.693334l45.653333-36.266666c4.266667-3.413333 5.12-8.96 2.56-13.653334l-43.946667-76.373333c-2.56-4.693333-8.106667-6.4-13.226666-4.693333l-54.613334 21.333333a146.773333 146.773333 0 0 0-32-17.92l-8.533333-58.026667a10.624 10.624 0 0 0-10.666667-9.386666h-88.32c-5.12 0-9.813333 3.84-10.666666 8.96l-8.533334 58.026666c-11.093333 4.693333-21.76 11.093333-31.573333 17.92l-54.613333-21.333333c-5.12-2.133333-10.666667 0-13.226667 4.693333l-43.946667 76.373334c-2.56 4.693333-1.706667 10.24 2.56 13.653333l45.653334 36.693333c-1.28 12.373333-1.706667 24.746667-0.426667 36.693334l-45.653333 36.266666c-4.266667 3.413333-5.12 8.96-2.56 13.653334l43.946666 76.373333c2.56 4.693333 8.106667 6.4 13.226667 4.693333l54.186667-21.333333c9.813333 7.253333 20.48 13.226667 32 17.92l8.533333 58.026667c0.853333 5.12 5.12 8.96 10.666667 8.96h88.32c5.12 0 9.813333-3.84 10.666666-8.96l8.533334-58.026667c11.093333-4.693333 21.76-11.093333 31.573333-17.92l54.613333 21.333333c5.12 2.133333 10.666667 0 13.226667-4.693333l43.946667-76.373333c2.56-4.693333 1.706667-10.24-2.56-13.653334l-45.226667-36.266666zM810.666667 832c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64z" p-id="3185"></path></svg>',selector:[{default:!0,html:"默认",value:L.AV1},{html:"AV1",value:L.AV1},{html:"HEVC",value:L.HEVC},{html:"AVC",value:L.AVC}],onSelect:function(a){return s.setValue("bili-bangumi-videoCodingCode",a.value),a.html}}],plugins:[bt(),vt({from:"bangumi",qualityList:e.quality})]};if(e.isFlv){if(r.quality=[],r.type="flv",e.flvInfo.length===0){ce.failToast("视频播放地址为空，无法播放！");return}r.url=e.flvInfo[0].url,r.customType={flv:(a,n,l)=>{if(!Be.isSupported()){l.notice.show="Unsupported playback format: flv";return}this.flvPlayer();}};}else r.type="mp4";return s.getValue("artplayer-plugin-bangumi-danmaku-enable")&&r.plugins.push(Xe({danmuku:e.danmukuUrl,speed:i.speed,margin:i.margin,opacity:i.opacity,color:"#FFFFFF",mode:0,modes:i.modes,fontSize:i.fontSize,antiOverlap:i.antiOverlap,synchronousPlayback:i.synchronousPlayback,mount:void 0,heatmap:!0,width:800,points:[],filter:a=>a.text.length<=100,beforeVisible:()=>!0,visible:i.visible,emitter:!1,maxLength:50,lockTime:3,theme:c.isThemeDark()?"dark":"light",beforeEmit(a){return new Promise(n=>{console.log(a),setTimeout(()=>{n(!0);},1e3);})}})),s.getValue("artplayer-plugin-bangumi-m4sAudioSupport-enable")&&r.plugins.push(ot({from:"bangumi",audioList:e.audioList||[],showSetting:!0})),s.getValue("artplayer-plugin-bangumi-epChoose-enable")&&r.plugins.push(Ct({EP_LIST:He(e),automaticBroadcast:!0})),s.getValue("artplayer-plugin-bangumi-cc-subtitle-enable")&&r.plugins.push(mt({from:"bangumi",cid:e.cid,aid:e.aid,bvid:e.bvid,ep_id:e.ep_id})),s.getValue("artplayer-plugin-bangumi-toptoolbar-enable")&&r.plugins.push(st({onlineInfoParams:{aid:e.aid,cid:e.cid,bvid:e.bvid},title:e.videoTitle,showWrap:!0,showTitle:!0,showOnlineTotal:!0})),s.getValue("artplayer-plugin-bangumi-airborneHelper-enable")&&r.plugins.push(cu({clip_info_list:e.clip_info_list})),this.$data.art=new Ze(r),s.getValue("artplayer-plugin-bangumi-danmaku-enable")&&u.repairBrowserNoResponse(this.$data.art),u.onConfigChange(this.$data.art),this.$data.art},async update(e,t){this.resetEnv(!1),this.$data.currentOption=t,o.info("更新新的播放信息",t),e.pause(),o.info("暂停视频"),e.currentTime=0,o.info("重置播放进度"),this.updatePluginInfo(e,t),e.play(),o.info("播放");},updatePluginInfo(e,t){if(e.plugins[Q].update({from:"bangumi",qualityList:t.quality}),o.info("更新画质",t.quality),s.getValue("artplayer-plugin-bangumi-danmaku-enable")&&(e.plugins.artplayerPluginDanmuku.config({danmuku:t.danmukuUrl}),e.plugins.artplayerPluginDanmuku.load(),o.info("更新弹幕姬",t.danmukuUrl)),s.getValue("artplayer-plugin-bangumi-m4sAudioSupport-enable")&&(e.plugins[lt].update({from:"bangumi",audioList:t.audioList||[]}),o.info("更新音频",t.audioList)),s.getValue("artplayer-plugin-bangumi-epChoose-enable")&&(e.plugins[At].update({EP_LIST:He(t),automaticBroadcast:!0}),o.info("更新选集信息",t.epList)),s.getValue("artplayer-plugin-bangumi-cc-subtitle-enable")){let i=e.plugins[ft];const r={from:"bangumi",cid:t.cid,aid:t.aid,ep_id:t.ep_id};i.update(r),o.info("更新字幕",r);}if(s.getValue("artplayer-plugin-bangumi-toptoolbar-enable")){let i=e.plugins[ct];const r={showRight:!0,showRightFollow:!0,showWrap:!0,showTitle:!0,showOnlineTotal:!0,title:t.videoTitle,onlineInfoParams:{aid:t.aid,cid:t.cid,bvid:t.bvid}};i.update(r),o.info("更新顶部标题",r);}s.getValue("artplayer-plugin-bangumi-airborneHelper-enable")&&(e.plugins[du].update({clip_info_list:t.clip_info_list}),o.info("更新空降助手信息",t.clip_info_list));}},pu={getUserChooseVideoCodingCode(){let e=s.getValue("bili-bangumi-videoCodingCode",L.AV1);return Object.values(L).includes(e)||(o.error("意外情况，选择的编码格式不是允许的编码，将强制使用默认，防止过滤掉的视频链接为空："+e),e=L.AV1),e}};function mu(e){const t={};return e.forEach(i=>{(!t[i.id]||i.size>t[i.id].size)&&(t[i.id]=i);}),Object.values(t)}function We(e,t){let u=[];return e.video.forEach(i=>{if(!e.accept_quality.includes(i.id)||t.codecid!=null&&i.codecid!==t.codecid)return;let r=e.support_formats.find(l=>l.quality===i.id),a=O.findBetterCDN(i.base_url,i.baseUrl,i.backup_url,i.backupUrl);a=O.replaceBangumiVideoCDN(a);let n=r==null?void 0:r.new_description;u.push({name:n,url:a,type:i.mimeType,id:i.id,size:i.size,quality:i.id,vip:!!(r!=null&&r.need_vip)});}),u}const fu=(e,t)=>`第${e}话 ${t}`,Je=(e,t)=>{var i,r;let u=[];if((r=(i=e==null?void 0:e.dash)==null?void 0:i.video)!=null&&r.length){let a=e;u=[...We({accept_quality:a.accept_quality,support_formats:a.support_formats,video:a.dash.video},{codecid:t})],u.length===0&&a.dash.video.length!==0&&(o.warn(`当前选择的视频编码id为: ${t}，但是过滤出的视频没有一个符合的，所以直接放弃使用自定义选择视频编码`),u=[],u=[...We({accept_quality:a.accept_quality,support_formats:a.support_formats,video:a.dash.video},{})]),u=mu(u),u.sort((n,l)=>l.quality-n.quality);}else {let a=e;a.durls.length===0&&a.durl!=null&&a.durls.push({quality:a.quality,durl:a.durl}),a.durls.forEach(n=>{if(!a.accept_quality.includes(n.quality)||!n.durl.length)return;let l=n.durl[0],d=e.support_formats.find(g=>g.quality===n.quality),p=O.findBetterCDN(l.url,l.backup_url),m=d==null?void 0:d.new_description;u.push({name:m,url:p,type:"audio/mp4",id:n.quality,size:l.size,quality:n.quality,vip:!!(d!=null&&d.need_vip)});});}return u},hu=async(e,t)=>{var M,N;const{aid:u,bvid:i,cid:r,ep_id:a,title:n,long_title:l}=e;o.info(`解析番剧信息 aid:${u} cid:${r} ep_id:${a}`);const d=fu(n,l),p=[];let m=[],g=[],v=!1,A=[],E=0,x=0;if(s.getValue("bili-bangumi-unlockAreaLimit")){const B=await Ue.getPlayUrl({avid:u,cid:r,ep_id:a});if(!B)return;Array.isArray(B==null?void 0:B.clip_info_list)?g=B.clip_info_list:Array.isArray(B==null?void 0:B.clip_info)&&(g=B.clip_info);let he=pu.getUserChooseVideoCodingCode();if(B.type.toLowerCase()==="flv")v=!0,B.durl.forEach(_=>{let q=O.findBetterCDN(_.url,_.backup_url);q=O.replaceBangumiVideoCDN(q),E+=_.length,x+=_.size,A.push({order:_.order,url:q,duration:_.length,length:_.length,size:_.size});});else if(B.type.toLowerCase()==="dash"||B.type.toLowerCase()==="mp4")(((M=B==null?void 0:B.dash)==null?void 0:M.audio)||[]).forEach(_=>{let q=O.findBetterCDN(_.baseUrl,_.base_url,_.baseUrl,_.backup_url);s.getValue("bili-bangumi-uposServerSelect-applyAudio")&&(q=O.replaceBangumiVideoCDN(q)),p.push({url:q,id:_.id,size:_.size,text:at[_.id]||""});}),p.sort((_,q)=>q.id-_.id),o.info(["ArtPlayer: 获取的音频信息",p]),m=m.concat(Je(B,he)),o.info(["ArtPlayer: 获取的视频画质信息",m]);else {ce.failToast("暂未适配的视频格式："+B.format);return}}else {const B=await Ue.getPlayUrlHTML5({avid:u,cid:r,ep_id:a});if(!B)return;Array.isArray(B==null?void 0:B.clip_info_list)?g=B.clip_info_list:Array.isArray(B==null?void 0:B.clip_info)&&(g=B.clip_info),m=m.concat(Je(B));}const P=m.map((B,he)=>({html:B.name,url:B.url,quality:B.quality})),$={container:null,epList:t,cid:r,aid:u,bvid:i,ep_id:a,videoTitle:d,danmukuUrl:`https://api.bilibili.com/x/v1/dm/list.so?oid=${r}`,quality:P,clip_info_list:g,isFlv:v,flvInfo:A,flvTotalDuration:E,flvTotalSize:x};return $.url=(N=m==null?void 0:m[0])==null?void 0:N.url,p.length&&($.audioList=p.map((B,he)=>({isDefault:he===0,url:B.url,soundQualityCode:B.id,soundQualityCodeText:B.text}))),$},Bt={updateArtPlayerVideoInfo(e,t){y.waitVuePropToSet(".player-wrapper",{msg:"等待player-wrapper加载完成",check(u){var i,r,a;return typeof((i=u==null?void 0:u.EP_INFO)==null?void 0:i.aid)=="number"&&typeof((r=u==null?void 0:u.EP_INFO)==null?void 0:r.cid)=="number"&&typeof((a=u==null?void 0:u.EP_INFO)==null?void 0:a.ep_id)=="number"},async set(u){const i=document.querySelector(".player-wrapper");e==null&&(e=u.EP_INFO),t==null&&(t=u.EP_LIST);const r=await hu(e,t);if(r==null)return;let a=document.querySelector("#artplayer");if(!a){const n=f.createElement("div",{className:"artplayer-container",innerHTML:`
						<div id="artplayer"></div>
						`});a=n.querySelector("#artplayer"),f.after(i,n);}if(r.container=a,se.$data.art==null){let n=await Ge.init(r);if(n)se.$data.art=n;else return;se.$data.art.volume=1;}else Ge.update(se.$data.art,r);}});}},ee={loadScript(e){let t=document.createElement("script");return t.src=e,document.head.appendChild(t),new Promise(u=>{t.onload=function(){o.success("script标签加载完毕："+e),setTimeout(()=>{u(!0);},100);};})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(u=>{Array.isArray(u)?t=t.concat(u):t.push(u);}),S(`${t.join(`,
`)}{display: none !important;}`)},initialScale(){o.info("设置<meta>的viewport固定缩放倍率为1并移除页面原有的<meta>"),f.ready(()=>{let e=f.createElement("meta",{},{name:"viewport",content:"width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover"});f.remove("meta[name='viewport']"),c.waitNode("head").then(()=>{document.head.appendChild(e);});});}},se={$data:{art:null},init(){s.execMenuOnce("bili-bangumi-initialScale",()=>{ee.initialScale();}),s.execMenuOnce("bili-bangumi-hook-callApp",()=>{this.hookCallApp();}),s.execMenu("bili-bangumi-cover-clicl-event-chooseEp",()=>{this.setChooseEpClickEvent();}),s.execMenu("bili-bangumi-cover-clicl-event-other",()=>{this.setClickOtherVideo();}),s.execMenu("bili-bangumi-cover-clicl-event-recommend",()=>{this.setRecommendClickEvent();}),this.coverVideoPlayer();},hookCallApp(){let e=U.setTimeout;U.setTimeout=function(...t){if(t[0].toString().includes("autoOpenApp")){o.success(["阻止唤醒App",t]);return}return e.apply(this,t)};},setPay(){y.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.userStat.pay",check(e){var t,u,i;return typeof typeof((i=(u=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:u.userStat)==null?void 0:i.pay)=="number"},set(e){o.success("成功设置参数 $store.state.userStat.pay=1"),e.$store.state.userStat.pay=1;}},{msg:"设置参数 $store.state.mediaInfo.user_status.pay",check(e){var t,u,i,r;return typeof((r=(i=(u=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:u.mediaInfo)==null?void 0:i.user_status)==null?void 0:r.pay)=="number"},set(e){o.success("成功设置参数 $store.state.mediaInfo.user_status.pay=1"),e.$store.state.mediaInfo.user_status.pay=1;}}]);},setChooseEpClickEvent(){c.waitNode(F.className.bangumi+" .ep-list-pre-wrapper ul.ep-list-pre-container").then(e=>{o.info("覆盖【选集】的点击事件"),f.on(e,"click","li.episode-item",function(t){c.preventEvent(t),le.jumpToUrl(t);},{capture:!0});}),c.waitNode(F.className.bangumi+" .ep-list-pre-wrapper ul.season-list-wrapper").then(e=>{o.info("覆盖【xx季】的点击事件"),f.on(e,"click","li",function(t){c.preventEvent(t),le.jumpToUrl(t);},{capture:!0});}),c.waitNode(F.className.bangumi+" .ep-list-pre-header").then(e=>{o.info("覆盖【选集】右上角的【全xx话】Arrow的点击事件"),f.on(e,"click",function(t){c.preventEvent(t);},{capture:!0});});},setClickOtherVideo(){c.waitNode(F.className.bangumi+" .section-preview-wrapper ul.ep-list-pre-container").then(e=>{o.info("覆盖【PV&其他】、【预告】、【主题曲】的点击事件"),f.on(e,"click","li.section-preview-item",function(t){c.preventEvent(t),le.jumpToUrl(t);},{capture:!0});}),c.waitNode(F.className.bangumi+" .section-preview-header").then(e=>{o.info("覆盖【PV&其他】、【预告】、【主题曲】右上角的Arrow的点击事件"),f.on(e,"click",function(t){c.preventEvent(t);},{capture:!0});});},setRecommendClickEvent(){c.waitNode(F.className.bangumi+" .recom-wrapper ul.recom-list").then(e=>{o.info("覆盖【更多推荐】番剧的点击事件"),f.on(e,"click","li.recom-item-v2",function(t){c.preventEvent(t),le.jumpToUrl(t);},{capture:!0});});},coverVideoPlayer(){if(document.querySelector("#artplayer"))o.warn("已存在播放器，更新播放信息");else {S(`
			.player-wrapper,
			.open-app-bar{
				display: none !important;
			}
			
			${rt}
			
			${lu}
			
			`);let e=s.getValue("bili-bangumi-artplayer-controlsPadding-left-right",0);e!=0&&S(`
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
				`);}Bt.updateArtPlayerVideoInfo();}},Dt={async getSearchInputPlaceholder(){let e=await R.get("https://api.bilibili.com/x/web-interface/wbi/search/default",{fetch:!0,headers:{accept:"application/json, text/plain, */*","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","cache-control":"no-cache",pragma:"no-cache","sec-ch-ua":'""',"sec-ch-ua-mobile":"?1","sec-ch-ua-platform":'""',"sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-site"},allowInterceptConfig:!1});if(!e.status)return;let t=c.toJSON(e.data.responseText);if(H.isWebApiSuccess(t))return t.data},async getBangumiSearchResult(e){let t={search_type:"media_bangumi",keyword:e.keyword,from_client:"BROWSER",drm_tech_type:"2",module:"bangumi",area:e.area.toLowerCase(),access_key:Z.getAccessToken()},u=`https://${e.host}/x/web-interface/search/type?${c.toSearchParamsStr(t)}`,i=await R.get(u,{fetch:!1,headers:{"User-Agent":c.getRandomAndroidUA()}});if(!i.status)return;let r=c.toJSON(i.data.responseText);return H.isWebApiSuccess(r)?{isSuccess:!0,data:r.data.result}:(o.error(`请求失败，当前代理服务器信息：${JSON.stringify(e.host)}`),o.error(`请求失败，当前请求的响应信息：${JSON.stringify(r)}`),{isSuccess:!1,data:r})}},yt={$flag_css:{enableOtherAreaSearchBangumi:!1},$data:{},init(){f.ready(()=>{s.execMenu("bili-search-enableOtherAreaSearchBangumi",()=>{this.enableOtherAreaSearchBangumi();});});},enableOtherAreaSearchBangumi(){this.$flag_css.enableOtherAreaSearchBangumi||(this.$flag_css.enableOtherAreaSearchBangumi=!0,S(`
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
			`),S(`
			#app .m-search{
				--card-img-width: 90px;
				--card-img-height: calc(var(--card-img-width) * 1.33 );
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
			.gm-card-cover{
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
				color: #F77C2E;
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
			.gm-card-badge-info-item{
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

			.gm-card-ep-badges-container{
				position: absolute;
				top: 0;
				right: 0;
				font-size: calc( var(--card-ep-item-padding-top-bottom) - var(--card-ep-item-badge-padding) );
			}
	
			.gm-card-ep-badge-top-right{
				border-top-right-radius: var(--card-ep-item-border-radius);
    			border-bottom-left-radius: var(--card-ep-item-border-radius);
				padding: var(--card-ep-item-badge-padding);
			}
			.gm-card-ep-info-container {
				min-width: 30px;
			}
			`)),c.waitNode(".m-search-result .tabs:not(:has(.gm-tab-item))").then(e=>{Fe.getSearchProxyHost().forEach(i=>{let r=f.createElement("a",{className:"tab-item gm-tab-item",innerHTML:`番剧（${i.name}）`},{"data-area":i.area,"data-host":i.host});e.appendChild(r);});const u=i=>{e.querySelectorAll(".tab-item").forEach(r=>i!=r&&r.classList.remove("on")),i.classList.add("on");};f.on(e,"click",".tab-item",async i=>{let r=i.target;u(r);let a=document.querySelector(".result-panel"),n=document.querySelector(".gm-result-panel");if(n&&(n.remove(),f.show(a)),!r.classList.contains("gm-tab-item"))return;let l=r.dataset.area,d=r.dataset.host,p=document.querySelector(".m-search-result"),m=y.getVue(p);m.switchTab(233),f.hide(a);let g=m.keyword,v=b.loading("搜索中，请稍后..."),A=await Dt.getBangumiSearchResult({keyword:g,area:l,host:d});if(v.close(),!A)return;if(!A.isSuccess){alert(JSON.stringify(A.data,null,2));return}let E=A.data;o.info(["搜索结果：",E]);let x=f.createElement("div",{className:"gm-result-panel",innerHTML:`
						<div class="gm-list-view">
							<div class="gm-video-list-box">
								<div class="gm-video-list">
									<div class="gm-card-box"></div>
								</div>
							</div>
						</div>
					`}),P=x.querySelector(".gm-card-box");E.forEach($=>{P.appendChild(this.createSearchResultVideoItem($));}),p.appendChild(x);});});},createSearchResultVideoItem(e){var d,p;let t=f.createElement("div",{className:"gm-card-item",innerHTML:`
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
				`},{"data-url":e.url,"data-type":e.type,"data-media_id":e.media_id,"data-pgc_season_id":e.pgc_season_id,"data-is_follow":e.is_follow,"data-is_selection":e.is_selection});Reflect.set(t,"data-option",e),f.on(t,"click",m=>{c.preventEvent(m),window.open(e.url,"_blank");});let u=t.querySelector(".gm-card-display-info"),i=[];Array.isArray(e==null?void 0:e.display_info)&&(i=i.concat(e.display_info)),Array.isArray(e==null?void 0:e.badges)&&(i=i.concat(e.badges)),i=c.uniqueArray(i,m=>m.text),i.forEach(m=>{let g=f.createElement("span",{className:"gm-card-badge-info-item",innerText:m.text});typeof m.border_color=="string"&&(g.style.border=`1px solid ${m.border_color}`,g.style.color=m.border_color),f.append(u,g);}),e.pubtime&&f.append(u,`
				<span>${c.formatTime(e.pubtime*1e3,"yyyy")}</span>
				`);let r=e.areas||Reflect.get(e,"area");r&&(u.children.length&&f.append(u,`
					<span> | </span>
				`),f.append(u,`
					<span>${r}</span>
				`));let a=t.querySelector(".gm-card-media_score");e.media_score&&e.media_score.user_count&&f.append(a,`
				<span class="gm-card-media_score-score">${((d=e.media_score)==null?void 0:d.score)||0}分</span>
				<span class="gm-card-media_score-user_count">${((p=e.media_score)==null?void 0:p.user_count)||0}人参与</span>
				`);let n=t.querySelector(".gm-card-eps");return [...e.eps||[],...Reflect.get(e,"episodes_new")||[]].filter(m=>c.isNotNull(m)).forEach(m=>{let g=m.title||m.long_title,v=m.url||Reflect.get(m,"uri"),A=f.createElement("div",{className:"gm-card-ep-conatiner",innerHTML:`
				<div class="gm-card-ep-badges-container">
					
				</div>
				<div class="gm-card-ep-info-container">
					${g}
				</div>`},{"data-id":m.id,"data-url":v,"data-title":g,"data-long_title":m.long_title}),E=A.querySelector(".gm-card-ep-badges-container");if(A.querySelector(".gm-card-ep-info-container"),Array.isArray(m.badges)&&m.badges.length){let x=m.badges[0],P=f.createElement("span",{className:"gm-card-ep-badge-top-right",innerText:x.text});typeof x.bg_color=="string"&&(P.style.backgroundColor=x.bg_color),typeof x.text_color=="string"&&(P.style.color=x.text_color),f.append(E,P);}f.on(A,"click",x=>{c.preventEvent(x),window.open(v,"_blank");}),n.appendChild(A);}),t},searchBangumi(){}},gu={$flag:{mutationSearchResult:!1},init(){this.mutationSearchResult();},mutationSearchResult(){this.$flag.mutationSearchResult||(this.$flag.mutationSearchResult=!0,S(`
        .bangumi-list{
            padding: 0 10px;
        }
        `),c.mutationObserver(document,{config:{subtree:!0,childList:!0},callback:c.debounce(()=>{document.querySelectorAll(".m-search-bangumi-item").forEach(e=>{let t=y.getVue(e);if(!t)return;let u=t.info;if(!u)return;let i=yt.createSearchResultVideoItem(u);f.after(e,i),e.remove();});})}));}},Cu={init(){k.isSearchResult()&&yt.init(),s.execMenuOnce("bili-search-cover-cancel",()=>{this.coverCancel();}),s.execMenu("bili-search-beautifySearchResult",()=>{gu.init();}),f.ready(()=>{s.execMenu("bili-search-inputAutoFocus",()=>{this.inputAutoFocus();});});},coverCancel(){o.info("覆盖【取消】按钮的点击事件"),f.on(document,"click","a.cancel",e=>{o.info("点击取消按钮"),c.preventEvent(e),window.history.back();},{capture:!0});},inputAutoFocus(){if(new URLSearchParams(window.location.search).has("keyword")){o.warn("当前在搜索结果页面，不执行输入框自动获取焦点");return}o.info("输入框自动获取焦点"),c.waitNode('.m-search .m-search-search-bar input[type="search"]',1e4).then(t=>{if(!t){o.error("获取输入框失败");return}t.focus();});}},Au={init(){s.execMenuOnce("bili-live-block-chatRoom",()=>this.blockChatRoom()),s.execMenuOnce("bili-live-block-brush-prompt",()=>this.blockBrushPrompt()),s.execMenuOnce("bili-live-block-control-panel",()=>this.blockControlPanel());},blockChatRoom(){return o.info("屏蔽聊天室"),ee.addBlockCSS("#chat-items")},blockBrushPrompt(){return o.info("屏蔽xxx进入直播间"),ee.addBlockCSS("#brush-prompt")},blockControlPanel(){return o.info("屏蔽底部工具栏"),ee.addBlockCSS(".control-panel")}},Eu={init(){Au.init(),s.execMenuOnce("bili-live-prevent-openAppBtn",()=>{this.preventOpenAppBtn();});},preventOpenAppBtn(){c.waitNode("body").then(e=>{o.info("阻止.open-app-btn元素触发点击事件"),f.on(e,"click",".open-app-btn",function(t){c.preventEvent(t);},{capture:!0}),f.on(e,"click","#web-player-controller-wrap-el",function(t){c.preventEvent(t);},{capture:!0});});}},vu={init(){s.execMenuOnce("bili-opus-cover-topicJump",()=>{this.coverTopicJump();}),s.execMenuOnce("bili-opus-automaticallyExpandToReadFullText",()=>this.automaticallyExpandToReadFullText()),s.execMenuOnce("bili-opus-cover-header",()=>{this.coverHeaderJump();});},coverTopicJump(){o.info("覆盖话题跳转点击事件"),f.on(document,"click",F.className.opus+" .launch-app-btn.opus-module-topic",function(e){var a;let t=e.target,u=y.getVue(t);if(!u){b.error("获取话题的__vue__失败");return}let i=(a=u==null?void 0:u.$props)==null?void 0:a.data,r=i==null?void 0:i.jump_url;if(c.isNull(r)){b.error("获取话题的jump_url失败");return}o.info(["话题的跳转信息: ",i]),T.goToUrl(r);},{capture:!0});},automaticallyExpandToReadFullText(){return o.info("自动展开阅读全文"),[ee.addBlockCSS(F.className.opus+" .opus-read-more"),S(`
			${F.className.opus} .opus-module-content{
				overflow: unset !important;
				max-height: unset !important;
			}
			`)]},coverHeaderJump(){o.info("覆盖header点击事件"),f.on(document,"click",F.className.opus+" .opus-module-author",function(e){var r;c.preventEvent(e);let t=e.target,u=y.getVue(t);if(!u){b.error("获取vue属性失败");return}let i=(r=u==null?void 0:u.data)==null?void 0:r.mid;if(!i){b.error("获取mid失败");return}T.goToUrl(re.getUserSpaceUrl(i));},{capture:!0});}},bu={init(){s.execMenuOnce("bili-dynamic-cover-topicJump",()=>{this.coverTopicJump();}),s.execMenuOnce("bili-dynamic-cover-atJump",()=>{this.coverAtJump();}),s.execMenuOnce("bili-dynamic-cover-referenceJump",()=>{this.coverReferenceJump();}),s.execMenuOnce("bili-dynamic-cover-header",()=>{this.coverHeaderJump();});},coverHeaderJump(){o.info("覆盖header点击事件"),f.on(document,"click",F.className.dynamic+" .launch-app-btn .dyn-header",function(e){c.preventEvent(e);let t=e.target,u=y.getVue(t);if(!u){b.error("获取vue属性失败");return}let i=u.url;if(!i){b.error("获取url失败");return}T.goToUrl(i);},{capture:!0});},coverTopicJump(){o.info("覆盖话题跳转点击事件"),f.on(document,"click",F.className.dynamic+" .launch-app-btn .bili-dyn-topic",function(e){var a;c.preventEvent(e);let t=e.target,u=y.getVue(t);if(!u){b.error("获取vue属性失败");return}let i=(a=u==null?void 0:u.$props)==null?void 0:a.data,r=i==null?void 0:i.jump_url;if(c.isNull(r)){b.error("获取jump_url失败");return}o.info(["话题的跳转信息: ",i]),T.goToUrl(r);},{capture:!0});},coverAtJump(){o.info("覆盖@ 跳转"),f.on(document,"click",F.className.dynamic+" .at",function(e){var i,r;c.preventEvent(e);let t=e.target,u=t.getAttribute("data-oid")||((r=(i=y.getVue(t))==null?void 0:i.$props)==null?void 0:r.rid);if(c.isNull(u)){b.error("获取data-oid或rid失败");return}o.info("用户的oid: "+u),T.goToUrl(re.getUserSpaceDynamicUrl(u));},{capture:!0});},coverReferenceJump(){o.info("覆盖引用的点击事件"),f.on(document,"click",F.className.dynamic+" .dyn-content .reference .dyn-orig-author",function(e){c.preventEvent(e);let u=e.target.getAttribute("data-url");if(!u){b.error("获取data-url失败");return}T.goToUrl(u);},{capture:!0}),f.on(document,"click",F.className.dynamic+" .dyn-content .reference .dyn-archive",function(e){var r;c.preventEvent(e);let t=e.target,u=y.getVue(t);if(!u){b.error("获取vue属性失败");return}let i=(r=u==null?void 0:u.data)==null?void 0:r.jump_url;if(c.isNull(i)){b.error("获取jump_url失败");return}T.goToUrl(i);},{capture:!0});}},oe={$isHook:{windowPlayerAgent:!1,hookWebpackJsonp_openApp:!1,overRideLaunchAppBtn_Vue_openApp:!1,overRideBiliOpenApp:!1},$data:{setTimeout:[]},windowWebPack(e="webpackJsonp",t,u){let i;_e.Object.defineProperty(U,e,{get(){return i},set(r){o.success("成功劫持webpack，当前webpack名："+e),i=r;const a=i.push;i.push=function(...n){let l=n[0][0];return (t==l||Array.isArray(t)&&Array.isArray(l)&&JSON.stringify(t)===JSON.stringify(l))&&Object.keys(n[0][1]).forEach(d=>{let p=n[0][1][d];n[0][1][d]=function(...m){let g=p.call(this,...m);return m[0]=u(m[0]),g};}),a.call(this,...n)};}});},setTimeout(e){if(this.$data.setTimeout.push(e),this.$data.setTimeout.length>1){o.info("window.setTimeout hook新增劫持判断参数："+e);return}U.setTimeout=function(...t){let u=t[0].toString();if(u.match(e)){o.success(["劫持setTimeout的函数",u]);return}return _e.setTimeout.apply(this,t)};},overRideLaunchAppBtn_Vue_openApp(){if(this.$isHook.overRideLaunchAppBtn_Vue_openApp)return;this.$isHook.overRideLaunchAppBtn_Vue_openApp=!0;function e(t){typeof t.openApp!="function"||t.openApp.toString().includes("阻止唤醒App")||(t.openApp=function(...i){o.success(["openApp：阻止唤醒App",i]);});}c.mutationObserver(document,{config:{subtree:!0,childList:!0,attributes:!0},callback(){document.querySelectorAll(".launch-app-btn").forEach(t=>{let u=y.getVue(t);u&&(e(u),u.$children&&u.$children.length&&u.$children.forEach(i=>{e(i);}));});}});},overRideBiliOpenApp(){this.$isHook.overRideBiliOpenApp||(this.$isHook.overRideBiliOpenApp=!0,c.mutationObserver(document,{config:{subtree:!0,childList:!0,attributes:!0},callback(){document.querySelectorAll("bili-open-app").forEach(e=>{if(e.hasAttribute("data-inject-opener-open"))return;let t=Reflect.get(e,"opener");if(t==null)return;typeof(t==null?void 0:t.open)=="function"&&(Reflect.set(t,"open",i=>{o.success(`拦截bili-open-app.open跳转: ${JSON.stringify(i)}`);}),e.setAttribute("data-inject-opener-open","true"));});}}));}},Bu=`#app .m-head .m-recommend-view {\r
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
`;var Du=23442827791579n,yu=1n<<51n,je=58n,Fu="FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf";function wu(e){const t=["B","V","1","0","0","0","0","0","0","0","0","0"];let u=t.length-1,i=(yu|BigInt(e))^Du;for(;i>0;)t[u]=Fu[Number(i%BigInt(je))],i=i/je,u-=1;return [t[3],t[9]]=[t[9],t[3]],[t[4],t[7]]=[t[7],t[4]],t.join("")}const Ye=e=>(e.startsWith("http://")&&(e=e.replace(/^http/,"https")),e),xu={$flag:{isInitCSS:!1,isLoadingNextPage:!1},$data:{intersectionObserver:null},$ele:{$listView:null,$videoListBox:null,$videoList:null,$cardBox:null,$listViewShim:null},$cardGoto:{av:"av",picture:"picture"},init(){this.setCSS(),f.ready(()=>{this.addRecommendTag();});},setCSS(){this.$flag.isInitCSS||(this.$flag.isInitCSS=!0,S(Bu));},reset(){o.info("重置状态"),this.$flag.isLoadingNextPage=!1,this.removeScrollEvent(),Object.keys(this.$ele).forEach(e=>{this.$ele[e]=null;});},addRecommendTag(){if(document.querySelector(".channel-menu a.recommend-tag"))return;let e=document.querySelector(".channel-menu .v-switcher");if(!e){o.error("添加推荐标签失败，原因：.channel-menu .v-switcher不存在");return}let t=f.createElement("a",{className:"v-switcher__header__tabs__item recommend-tag",innerHTML:"<span>推荐</span>"},{href:"javascript:;"}),u=f.createElement("div",{className:"m-recommend-view",innerHTML:`
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
            `});this.$ele.$listView=u.querySelector(".list-view"),this.$ele.$videoListBox=u.querySelector(".video-list-box"),this.$ele.$videoList=u.querySelector(".video-list"),this.$ele.$cardBox=u.querySelector(".card-box"),this.$ele.$listViewShim=u.querySelector(".list-view__shim"),this.$ele.$listViewShim.style.cssText="z-index:-1;user-select:none;pointer-events:none;background:transparent;left:0;bottom:0;width:100%;height:200px;";let i=document.querySelector("#app .m-head");i&&i.appendChild(u),f.on(t,"click",r=>{c.preventEvent(r),t.classList.add("is-avtive"),this.recommendClickEvent();}),f.on(e,"click",()=>{t.classList.remove("is-avtive");},{capture:!0}),f.on(this.$ele.$cardBox,"click",".v-card",r=>{c.preventEvent(r);let a=r.target;window.open(a.href,"_blank");}),f.before(e,t),this.setScrollEvent(),window.location.hash==="#/recommend/"&&(o.info("当前hash为推荐视频，出动触发"),t.click());},async recommendClickEvent(){T.goToUrl("#/recommend/",!0);},setScrollEvent(){o.success("监听滚动: IntersectionObserver"),this.$data.intersectionObserver=new IntersectionObserver(async e=>{!this.$flag.isLoadingNextPage&&e[0].isIntersecting&&(this.$flag.isLoadingNextPage=!0,await this.scrollEvent(),this.$flag.isLoadingNextPage=!1);},{threshold:0}),this.$data.intersectionObserver.observe(this.$ele.$listViewShim);},removeScrollEvent(){var e;(e=this.$data.intersectionObserver)==null||e.disconnect(),this.$data.intersectionObserver=null;},async scrollEvent(){let e=await this.getRecommendVideoInfo();if(!e)return;o.success(["获取推荐视频信息",e]);let t=document.createDocumentFragment(),u=s.getValue("bili-head-recommend-push-graphic");e.forEach(i=>{let r=null;if(i.goto===this.$cardGoto.av)r=this.getRecommendItemAVElement(i);else if(u&&i.goto===this.$cardGoto.picture)r=this.getRecommendItemPictureElement(i);else {o.error(["该goto暂未适配",i]);return}t.appendChild(r);}),this.$ele.$cardBox.appendChild(t);},async getRecommendVideoInfo(){var r;let e={appkey:G.ios.appkey,access_key:((r=Z.getAccessTokenInfo())==null?void 0:r.access_token)||""},u=await R.get("https://app.bilibili.com/x/v2/feed/index"+"?"+c.toSearchParamsStr(e),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(!u.status)return;let i=c.toJSON(u.data.responseText);if(!H.isWebApiSuccess(i)){b.error(i.message);return}return i.data.items},getRecommendItemPictureElement(e){let t=e.goto,u=e.param,i="/opus/"+u,r=e.args.up_name,a=e.title,n=Ye(e.cover),l=e.cover_left_text_1,d=f.createElement("a",{className:"v-card",href:i,innerHTML:`
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
                            ${l}
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
                `},{"data-param":u,"data-title":a,"data-goto":t});return d["data-picture"]=e,d},getRecommendItemAVElement(e){var v;let t=e.goto,u=((v=e==null?void 0:e.player_args)==null?void 0:v.aid)||e.args.aid,r="/video/"+wu(u),a=e.args.up_name,n=e.title,l=Ye(e.cover),d=e.cover_left_text_1,p=e.cover_left_text_2,m=e.cover_right_text,g=f.createElement("a",{className:"v-card",href:r,innerHTML:`
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
                            ${d}
                        </span>
                        <span>
                            <i class="iconfont icon_shipin_danmushu"></i>
                            ${p}
                        </span>
                        <span class="gm-video-duration">${m}</span>
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
                `},{"data-aid":u,"data-title":n,"data-goto":t});return g["data-video"]=e,g}},$e={$flag:{isInit_reconfigurationTinyAppSettingButton:!1,isInit_beautifyTopNavBar_css:!1},init(){s.execMenuOnce("bili-head-supplementaryVideoStreamingInformation",()=>{this.addVideoListUPInfo();}),s.execMenu("bili-head-recommend-enable",()=>{xu.init();});},addVideoListUPInfo(){o.info("添加视频列表UP主信息"),S(`
		${F.className.head} .video-list .card-box .gm-up-info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: var(--pd-width);
		}
		${F.className.head} .video-list .card-box .gm-up-info .gm-up-name {
			display: flex;
			align-items: center;
			font-size: 3vmin;
			color: #999A9E;
		}
		${F.className.head} .video-list .card-box .gm-up-info .gm-up-name svg {
			margin-right: calc(var(--pd-width) / 2);
			width: 3vmin;
			height: 3vmin;
		}
		${F.className.head} .gm-video-duration{
			margin: 0 auto;
		}
        `),c.waitNode(F.className.head+" .video-list .card-box").then(()=>{let e=new c.LockFunction(()=>{document.querySelectorAll(F.className.head+" .video-list .card-box .v-card").forEach(t=>{var a,n,l,d,p;let u=y.getVue(t),i=((n=(a=u==null?void 0:u.info)==null?void 0:a.author)==null?void 0:n.name)||((d=(l=u==null?void 0:u.info)==null?void 0:l.owner)==null?void 0:d.name),r=(p=u==null?void 0:u.info)==null?void 0:p.duration;if(i&&!t.querySelector(".gm-up-info")){let m=document.createElement("div");m.innerHTML=`
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
                                    </div>`,m.className="gm-up-info",t.appendChild(m);}if(r){let m=t.querySelector(".count");if(m&&!m.querySelector(".gm-video-duration")){let g=typeof r=="string"?r:T.parseDuration(r),v=document.createElement("span");v.className="gm-video-duration",v.innerHTML=g,m.appendChild(v);}}});},25);c.mutationObserver(document.body,{config:{subtree:!0,childList:!0,attributes:!0},callback(){e.run();}});});},async reconfigurationTinyAppSettingButton(){o.info("重构tinyApp右上角的设置按钮图标"),this.$flag.isInit_reconfigurationTinyAppSettingButton||(this.$flag.isInit_reconfigurationTinyAppSettingButton=!0,S(`
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
			`));let e=await c.waitNode(".nav-bar .icon-config",1e4);if(!e){o.error("未找到设置按钮图标，无法重构");return}e.outerHTML=`
		<div class="gm-face">
			<div class="gm-face-avatar">
				<img src="http://i0.hdslb.com/bfs/face/member/noface.jpg">
			</div>
		</div>
		`;let t=!1,u=null,i=document.querySelector(".gm-face"),r=i.querySelector("img");y.waitVuePropToSet("#app",[{check(a){var n,l,d,p;return typeof((p=(d=(l=(n=a==null?void 0:a.$store)==null?void 0:n.state)==null?void 0:l.common)==null?void 0:d.userInfo)==null?void 0:p.isLogin)=="boolean"},set(a){var l,d,p;let n=(p=(d=(l=a==null?void 0:a.$store)==null?void 0:l.state)==null?void 0:d.common)==null?void 0:p.userInfo;if(t=n==null?void 0:n.isLogin,t){if(u=n==null?void 0:n.mid,u==null){o.warn("当前是脚本设置的isLogin但其实未登录账号"),t=!1;return}n==null||n.uname,r.src=(n==null?void 0:n.face)||r.src;}else o.warn("经检测，Bilibili尚未登录账号");}}]),f.on(i,"click",a=>{if(c.preventEvent(a),t)if(u!=null){let n=re.getUserSpaceUrl(u);T.goToUrl(n,!1);}else b.error("获取用户id失败");else T.goToLogin(window.location.href);});},beautifyTopNavBar(){o.info("美化顶部navbar"),this.$flag.isInit_beautifyTopNavBar_css||(this.$flag.isInit_beautifyTopNavBar_css=!0,S(`
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
			`)),c.waitNode(".m-head .m-navbar .icon-search",1e4).then(async e=>{if(!e||e.parentElement.querySelector(".gm-input-area"))return;let t=f.createElement("div",{className:"gm-input-area",innerHTML:`
						<i class="iconfont ic_search_tab"></i>
						<input type="search" placeholder="" readonly="" disabled="">
					`}),u=t.querySelector("input");f.on(t,"click",r=>{c.preventEvent(r),T.goToUrl("/search",!0);}),f.after(e,t);let i=await Dt.getSearchInputPlaceholder();i!=null&&(o.info(["热点信息：",i]),u.placeholder=i.show_name||i.name);});}},$u={init(){this.removeAds(),s.onceExec("bili-pc-read-mobile-autoExpand",()=>this.autoExpand());},removeAds(){ee.addBlockCSS("body>.h5-download-bar");},autoExpand(){return o.info("自动展开"),[S(`
			${Ne.className.read.mobile} .limit{
				overflow: unset !important;
				max-height: unset !important;
			}`),ee.addBlockCSS(Ne.className.read.mobile+" .read-more")]}},Tu={init(){s.execMenuOnce("bili-space-repairRealJump",()=>{this.repairRealJump();}),s.execMenuOnce("bili-space-coverDynamicStateCardVideo",()=>{this.coverDynamicStateCardVideo();});},repairRealJump(){f.on(document,"click",e=>{let t=e.target,u=t.closest(".main .forwardingCard")||t.matches(".main .forwardingCard")&&t;if(u){c.preventEvent(e);let i=u.getAttribute("id");o.info(`获取的动态id为：${i}`);let r=re.getUserSpaceDynamicUrl(i);T.goToUrl(r);}},{capture:!0});},coverDynamicStateCardVideo(){o.info("覆盖动态视频的点击事件"),f.on(document,"click",".card-content .main .wings",e=>{var a,n;let u=e.target.closest(".card");if(!u){b.error("未找到对应的.card元素");return}let i=y.getVue(u);if(!i){b.error("未找到对应的vue实例");return}let r=(n=(a=i==null?void 0:i.shareData)==null?void 0:a.default)==null?void 0:n.url;if(!r){b.error("未找到对应的url");return}T.goToUrl(r);},{capture:!0});}},Su={init(){s.execMenu("bili-setLogin",()=>{this.setLogin();}),s.execMenu("bili-setIsClient",()=>{this.setIsClient();}),s.execMenu("bili-setTinyApp",()=>{this.setTinyApp(),f.ready(()=>{$e.reconfigurationTinyAppSettingButton().then(()=>{s.execMenu("bili-beautifyTopNavBar",()=>{$e.beautifyTopNavBar();});});});});},setLogin(){let e=new c.GM_Cookie,t=e.get("DedeUserID");t!=null?o.info(["Cookie DedeUserID已存在：",t.value]):e.set({name:"DedeUserID",value:"2333"},u=>{u?o.error(u):o.success("Cookie成功设置DedeUserID=>2333");}),y.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.noCallApp",check(u){var i,r,a;return typeof((a=(r=(i=u==null?void 0:u.$store)==null?void 0:i.state)==null?void 0:r.common)==null?void 0:a.noCallApp)=="boolean"},set(u){o.success("成功设置参数 $store.state.common.noCallApp=true"),u.$store.state.common.noCallApp=!0;}},{msg:"设置参数 $store.state.common.userInfo.isLogin",check(u){var i,r,a,n;return typeof((n=(a=(r=(i=u==null?void 0:u.$store)==null?void 0:i.state)==null?void 0:r.common)==null?void 0:a.userInfo)==null?void 0:n.isLogin)=="boolean"},set(u){o.success("成功设置参数 $store.state.common.userInfo.isLogin=true"),u.$store.state.common.userInfo.isLogin=!0;}},{msg:"设置参数 $store.state.loginInfo.isLogin",check(u){var i,r,a;return typeof((a=(r=(i=u==null?void 0:u.$store)==null?void 0:i.state)==null?void 0:r.loginInfo)==null?void 0:a.isLogin)=="boolean"},set(u){o.success("成功设置参数 $store.state.loginInfo.isLogin=true"),u.$store.state.loginInfo.isLogin=!0;}}]);},setIsClient(){y.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.video.isClient",check(e){var t,u,i;return typeof typeof((i=(u=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:u.video)==null?void 0:i.isClient)=="boolean"},set(e){o.success("成功设置参数 $store.state.video.isClient=true"),e.$store.state.video.isClient=!0;}},{msg:"设置参数 $store.state.opus.isClient=true",check(e){var t,u,i;return typeof((i=(u=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:u.opus)==null?void 0:i.isClient)=="boolean"},set(e){o.success("成功设置参数 $store.state.opus.isClient"),e.$store.state.opus.isClient=!0;}},{msg:"设置参数 $store.state.playlist.isClient",check(e){var t,u,i;return typeof((i=(u=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:u.playlist)==null?void 0:i.isClient)=="boolean"},set(e){o.success("成功设置参数 $store.state.playlist.isClient=true"),e.$store.state.playlist.isClient=!0;}},{msg:"设置参数 $store.state.ver.bili",check(e){var t,u,i;return typeof((i=(u=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:u.ver)==null?void 0:i.bili)=="boolean"},set(e){o.success("成功设置参数 $store.state.ver.bili=true"),e.$store.state.ver.bili=!0;}},{msg:"设置参数 $store.state.ver.biliVer",check(e){var t,u,i;return typeof((i=(u=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:u.ver)==null?void 0:i.biliVer)=="number"},set(e){o.success("成功设置参数 $store.state.ver.biliVer=2333333"),e.$store.state.ver.biliVer=2333333;}}]);},setTinyApp(){y.waitVuePropToSet("#app",[{msg:"设置参数 $store.state.common.tinyApp",check(e){var t,u,i;return typeof((i=(u=(t=e==null?void 0:e.$store)==null?void 0:t.state)==null?void 0:u.common)==null?void 0:i.tinyApp)=="boolean"},set(e){e.$store.state.common.tinyApp=!0,o.success("成功设置参数 $store.state.common.tinyApp=true");}}]);}},Ft={init(){Su.init(),s.execMenuOnce("bili-allowCopy",()=>S(`
				.v-drawer{
					-webkit-user-select: unset !important;
					-moz-user-select: unset !important;
					user-select: unset !important;
				}
			`)),s.onceExec("listenRouterChange",()=>{this.listenRouterChange();}),s.execMenuOnce("bili-hookSetTimeout_autoOpenApp",()=>{o.info("hook  window.setTimeout autoOpenApp"),oe.setTimeout("autoOpenApp"),oe.setTimeout("bilibili://"),oe.setTimeout("void 0 !== y && document[y]");}),s.execMenuOnce("bili-overrideLaunchAppBtn_Vue_openApp",()=>{o.info("覆盖元素.launch-app-btn上的openApp"),oe.overRideLaunchAppBtn_Vue_openApp();}),s.execMenuOnce("bili-cover-bili-open-app-open",()=>{o.info("覆盖元素bili-open-app上的opener.open"),oe.overRideBiliOpenApp();}),s.execMenuOnce("bili-head-beautify",()=>{o.info("添加美化CSS"),S(Yt);}),k.isVideo()?(o.info("Router: 视频稿件"),ou.init()):k.isOpus()?(o.info("Router: 专栏稿件"),vu.init()):zt.isReadMobile()?(o.info("PC-Router: 专栏稿件"),$u.init()):k.isDynamic()?(o.info("Router: 动态"),bu.init()):k.isBangumi()?(o.info("Router: 番剧"),se.init()):k.isSearch()?(o.info("Router: 搜索"),Cu.init()):k.isLive()?(o.info("Router: 直播"),Eu.init()):k.isTopicDetail()?o.info("Router: 话题"):k.isHead()?(o.info("Router: 首页之类的"),$e.init()):k.isSpace()?(o.info("Router: 个人空间"),Tu.init()):o.error("该Router暂未适配，可能是首页之类："+window.location.href);},listenRouterChange(){c.waitNode("#app").then(e=>{let t=function(u){var i;return typeof((i=u==null?void 0:u.$router)==null?void 0:i.afterEach)=="function"};c.waitVueByInterval(e,t).then(()=>{let u=y.getVue(e);u!=null&&t(u)&&(o.success("成功设置监听路由变化"),e.__vue__.$router.beforeEach((i,r,a)=>{if(o.info(["路由变化 => 更新前",{to:i,from:r}]),s.getValue("bili-repairVueRouter404")&&i.name==="space"){window.location.href=i.fullPath;return}if(i.fullPath.startsWith("/video")){if(r.fullPath.startsWith("/video")&&s.getValue("bili-video-forceThisPageToRefreshAndRedirect")){window.location.href=i.fullPath;return}else if(k.isHead()&&s.getValue("bili-head-openVideoInNewTab")){window.open(i.fullPath,"_blank");return}else if(s.getValue("bili-video-enableArtPlayer")){window.location.href=i.fullPath;return}}else if(i.fullPath.startsWith("/bangumi")){if(r.fullPath.startsWith("/bangumi")){window.location.href=i.fullPath;return}else if(k.isHead()&&s.getValue("bili-head-openVideoInNewTab")){window.open(i.fullPath,"_blank");return}}a();}),e.__vue__.$router.afterEach((i,r)=>{if(o.info(["路由变化 => 更新后",{to:i,from:r}]),i.hash==="#/seeCommentReply"||r.hash==="#/seeCommentReply"){o.info("该路由变化判定为#/seeCommentReply，不重载");return}s.execMenu("bili-listenRouterChange",()=>{Ft.init();});}));});});}};s.init();Ft.init();pe.config.cssText.index+=`
/* bilibili颜色 #FB7299 */
.pops{
    --bili-color: #FB7299;
    --bili-color-rgb: 251, 114, 153;
}
`;pe.config.cssText.panelCSS+=`

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
`;

})(Qmsg, Utils, DOMUtils, pops, MD5, Artplayer, artplayerPluginDanmuku, MD5);