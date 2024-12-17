// ==UserScript==
// @name         MT论坛优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.12.17
// @author       WhiteSevs
// @description  MT论坛效果增强，如自动签到、自动展开帖子、用户状态查看、美化导航、动态头像上传、最新发表、评论过滤器等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://bbs.binmt.cc/*
// @exclude      /^http(s|)://bbs.binmt.cc/uc_server.*$/
// @require      https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.5.5/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.4.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.9.5/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.js
// @require      https://fastly.jsdelivr.net/npm/@highlightjs/cdn-assets@11.11.0/highlight.min.js
// @resource     HljsCSS    https://fastly.jsdelivr.net/npm/highlight.js@11.11.0/styles/github-dark.min.css
// @resource     ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.css
// @connect      *
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

(t=>{function n(d){if(typeof d!="string")throw new TypeError("cssText must be a string");let e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=d,document.head?document.head.appendChild(e):document.body?document.body.appendChild(e):document.documentElement.childNodes.length===0?document.documentElement.appendChild(e):document.documentElement.insertBefore(e,document.documentElement.childNodes[0]),e}if(typeof GM_addStyle=="function"){GM_addStyle(t);return}n(t)})(" .pls .avatar img,.avtm img{border-radius:10%}.pls .avatar img{--avatar-size: 90px;width:var(--avatar-size);height:var(--avatar-size)} ");

(function (_, ee, j, ne, J, Se) {
	'use strict';

	var ye=Object.defineProperty;var ke=(t,e,r)=>e in t?ye(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var _e=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var X=(t,e,r)=>ke(t,e+"",r);var Ye=_e((ve,oe)=>{var le=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,ce=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,q=typeof GM_getValue<"u"?GM_getValue:void 0,te=typeof GM_info<"u"?GM_info:void 0,Ae=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,H=typeof GM_setValue<"u"?GM_setValue:void 0,$e=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Me=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,U=typeof unsafeWindow<"u"?unsafeWindow:void 0,Te=window;const Ce={$data:{get enable(){return v.getValue("httpx-use-cookie-enable")},get useDocumentCookie(){return v.getValue("httpx-use-document-cookie")},cookieRule:[]},fixCookieSplit(t){return x.isNotNull(t)&&!t.trim().endsWith(";")&&(t+=";"),t},concatCookie(t,e){return x.isNull(t)?e:(t=t.trim(),e=e.trim(),t=this.fixCookieSplit(t),e.startsWith(";")&&(e=e.substring(1)),t.concat(e))},handle(t){if(t.fetch||!this.$data.enable)return;let e="",r=t.url;r.startsWith("//")&&(r=window.location.protocol+r);let l=new URL(r);this.$data.useDocumentCookie&&l.hostname.endsWith(window.location.hostname.split(".").slice(-2).join("."))&&(e=this.concatCookie(e,document.cookie.trim()));for(let i=0;i<this.$data.cookieRule.length;i++){let s=this.$data.cookieRule[i];if(l.hostname.match(s.hostname)){let n=v.getValue(s.key);if(x.isNull(n))break;e=this.concatCookie(e,n);}}x.isNotNull(e)&&(t.headers&&t.headers.Cookie?t.headers.Cookie=this.concatCookie(t.headers.Cookie,e):t.headers.Cookie=e,w.info(["Httpx => 设置cookie:",t])),t.headers&&t.headers.Cookie!=null&&x.isNull(t.headers.Cookie)&&delete t.headers.Cookie;}},se={addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(r=>{Array.isArray(r)?e=e.concat(r):e.push(r);}),N(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){let e=typeof ce=="function"?ce(t.keyName):"";typeof e=="string"&&e?N(e):se.loadStyleLink(t.url);},async loadStyleLink(t){let e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=t,f.ready(()=>{document.head.appendChild(e);});},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(r=>{e.onload=()=>{r(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.match(/^http(s|):\/\//i)||(t.startsWith("/")||(t+="/"),t=window.location.origin+t),t},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;let e=new URL(t);return e.protocol="https:",e.toString()}},me={ElementPlus:{keyName:"ElementPlusResourceCSS",url:"https://fastly.jsdelivr.net/npm/element-plus@latest/dist/index.min.css"},Viewer:{keyName:"ViewerCSS",url:"https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"},Hljs:{keyName:"HljsCSS",url:"https://fastly.jsdelivr.net/npm/highlight.js@latest/styles/github-dark.min.css"}};(function(t,e){typeof ve=="object"&&typeof oe<"u"?oe.exports=e():(t=typeof globalThis<"u"?globalThis:t||self,t.Watermark=e(t.Watermark));})(typeof window<"u"?window:void 0,function(t){let e=function(){};CanvasRenderingContext2D.prototype.letterSpacingText=function(n,a,o,c){var u=this,h=u.canvas;if(!c&&h&&(c=parseFloat(window.getComputedStyle(h).letterSpacing)),!c)return this.fillText(n,a,o);var m=n.split(""),d=u.textAlign||"left",p=u.measureText(n).width,g=p+c*(m.length-1);d=="center"?a=a-g/2:d=="right"&&(a=a-g),u.textAlign="left",m.forEach(function(k){var y=u.measureText(k).width;u.fillText(k,a,o),a=a+y+c;}),u.textAlign=d;},CanvasRenderingContext2D.prototype.wrapText=function(n,a,o,c,u,h){if(!(typeof n!="string"||typeof a!="number"||typeof o!="number")){var m=this,d=m.canvas;typeof c>"u"&&(c=d&&d.width||300),typeof u>"u"&&(u=d&&parseInt(window.getComputedStyle(d).lineHeight)||parseInt(window.getComputedStyle(document.body).lineHeight));for(var p=n.split(""),g="",k=0;k<p.length;k++){var y=g+p[k],b=m.measureText(y),$=b.width;$>c&&k>0?(h?m.strokeText(g,a,o,d.width):m.fillText(g,a,o),g=p[k],o+=u):g=y;}h?m.strokeText(g,a,o,d.width):m.fillText(g,a,o);}},CanvasRenderingContext2D.prototype.fillTextVertical=function(n,a,o){var c=this;c.canvas;var u=n.split(""),h=u.map(function(p){return c.measureText(p).width}),m=c.textAlign,d=c.textBaseline;m=="left"?a=a+Math.max.apply(null,h)/2:m=="right"&&(a=a-Math.max.apply(null,h)/2),d=="bottom"||d=="alphabetic"||d=="ideographic"?o=o-h[0]/2:(d=="top"||d=="hanging")&&(o=o+h[0]/2),c.textAlign="center",c.textBaseline="middle",u.forEach(function(p,g){var y=h[g],k=p.charCodeAt(0);k<=256?(c.translate(a,o),c.rotate(90*Math.PI/180),c.translate(-a,-o)):g>0&&n.charCodeAt(g-1)<256&&(o=o+h[g-1]/2),c.fillText(p,a,o),c.setTransform(1,0,0,1,0,0);var y=h[g];o=o+y;}),c.textAlign=m,c.textBaseline=d;};function r(n){let a=new FileReader;return new Promise(o=>{a.onloadend=async function(c){o(c);},a.readAsDataURL(n);})}function l(n){let a=new Image;return new Promise(o=>{a.onload=()=>{o(a);},a.src=n;})}function i(n,a,o){let c=!1;return Array.from(n).forEach(u=>{if(u.x==a&&u.y==o){c=!0;return}}),c}function s(n){return n instanceof Array?n[Math.floor(Math.random()*n.length)]:n}return e.prototype.setFile=function(n){let a=this;return new Promise(async o=>{try{var c=await r(n);await a.setImage(c.target.result),o(!0);}catch{o(!1);}})},e.prototype.setImage=function(n){this.dataUrl=n;let a=this;return new Promise(async o=>{var c=await l(n);a.sizes={width:c.width,height:c.height};var u=document.createElement("canvas");u.width=a.sizes.width,u.height=a.sizes.height;var h=u.getContext("2d");h.drawImage(c,0,0),c=null,a.canvas=u,o(!0);})},e.prototype.hasImage=function(){return !!this.dataUrl},e.prototype.getSize=function(){return this.sizes},e.prototype.clearMark=function(){let n=this;if(typeof n.canvas>"u")return;function a(){var o=n.canvas.getContext("2d");o.clearRect(0,0,n.canvas.width,n.canvas.height);var c=n.canvas.width,u=n.canvas.height;n.canvas.width=c,n.canvas.height=u,o.beginPath();var h=new Image;h.src=n.dataUrl,o.drawImage(h,0,0),h=null;}a();},e.prototype.addText=function(n){var a={text:["Call By waterMark.addText"],fontSize:"6vw",fontFamily:"Microsoft Yahei",color:"#000000",textAlign:"center",stroke:!1,globalAlpha:.7,rotateAngle:50,maxWidth:100,xMoveDistance:30,yMoveDistance:30};for(let C in a)typeof n[C]<"u"&&(a[C]=n[C]);a.maxWidth=parseInt(a.maxWidth)>0?a.maxWidth:1,a.xMoveDistance=parseInt(a.xMoveDistance)>0?a.xMoveDistance:1,a.yMoveDistance=parseInt(a.yMoveDistance)>0?a.yMoveDistance:1;var o=this.canvas.getContext("2d"),c=a.fontSize;c=c.toString(),~c.indexOf("vw")&&(c=(this.sizes.width/100*parseInt(c)).toFixed(0)),c=parseInt(c),o.font=c+"px "+a.fontFamily,o.fillStyle=a.color,o.textAlign=a.textAlign,o.globalAlpha=a.globalAlpha;let u=this.sizes.width,h=this.sizes.height,m=a.rotateAngle*Math.PI/180,d=a.xMoveDistance,p=a.yMoveDistance,g=a.maxWidth,k=c,y=[];for(var b=u/2;b<u;b+=d){for(var $=h/2;$<h;$+=p)i(y,b,$)||(y=y.concat({x:b,y:$}),o.setTransform(1,0,0,1,0,0),o.translate(b,$),o.rotate(m),o.wrapText(s(a.text),0,0,g,k,a.stroke));for(var M=h/2;M>0;M-=p)i(y,b,M)||(y=y.concat({x:b,y:M}),o.setTransform(1,0,0,1,0,0),o.translate(b,M),o.rotate(m),o.wrapText(s(a.text),0,0,g,k,a.stroke));}for(var b=u/2;b>0;b-=d){for(var $=h/2;$<h;$+=p)i(y,b,$)||(y=y.concat({x:b,y:$}),o.setTransform(1,0,0,1,0,0),o.translate(b,$),o.rotate(m),o.wrapText(s(a.text),0,0,g,k,a.stroke));for(var M=h/2;M>0;M-=p)i(y,b,M)||(y=y.concat({x:b,y:M}),o.setTransform(1,0,0,1,0,0),o.translate(b,M),o.rotate(m),o.wrapText(s(a.text),0,0,g,k,a.stroke));}},e.prototype.addPixelText=function(n){var a={text:"像素文字水印",big:{fontSize:150,fontFamily:"微软雅黑",textAlign:"center",rotateAngle:0,stroke:!1},small:{fontSize:10,fontFamily:"微软雅黑",color:"#000",textAlign:"center",globalAlpha:.7}};for(let b in a)typeof n[b]<"u"&&(a[b]=n[b]);var o=this.canvas.getContext("2d"),c=document.createElement("canvas"),u=c.getContext("2d");c.width=this.sizes.width,c.height=this.sizes.height,u.font=a.big.fontSize+"px "+a.big.fontFamily,u.textAlign=a.big.textAlign,u.textBaseline="middle",u.translate(c.width/2,c.height/2),u.rotate(a.big.rotateAngle*Math.PI/180),u.translate(-c.width/2,-c.height/2),a.big.stroke?u.strokeText(a.text,c.width/2,c.height/2,c.width):u.fillText(a.text,c.width/2,c.height/2);for(var h=a.text.split(""),m=u.getImageData(0,0,c.width,c.height),d=[],p=0;p<c.height;p+=a.small.fontSize)for(var g=0;g<c.width;g+=a.small.fontSize){var k=g+p*c.width,y=m.data[k*4+3];y>128&&d.push({text:s(h),x:g,y:p});}o.font=a.small.fontSize+"px "+a.small.fontFamily,o.fillStyle=a.small.color,o.textAlign=a.small.textAlign,o.textBaseline="middle",o.globalAlpha=a.small.globalAlpha,d.forEach(b=>{o.fillText(b.text,b.x,b.y);});},e.prototype.addImage=function(n){if(n.imageArray==null)return alert("参数缺少imageArray"),!1;if(n.imageArray.length===0)return alert("参数imageArray不能为空"),!1;let a={imageArray:[],width:50,height:50,globalAlpha:.5,rotateAngle:0,xMoveDistance:70,yMoveDistance:70};for(let A in a)typeof n[A]<"u"&&(a[A]=n[A]);a.width=parseInt(a.width)>0?a.width:1,a.height=parseInt(a.height)>0?a.height:1,a.xMoveDistance=parseInt(a.xMoveDistance)>0?a.xMoveDistance:1,a.yMoveDistance=parseInt(a.yMoveDistance)>0?a.yMoveDistance:1;let o=this.canvas.getContext("2d"),c=[],u=parseInt(Math.sqrt(a.width*a.width+a.height*a.height)),h=this.sizes.width,m=this.sizes.height,d=a.rotateAngle*Math.PI/180,p=a.xMoveDistance,g=a.yMoveDistance,k=h/2-u/2,y=m/2-u/2,b=(u-a.width)/2,$=(u-a.height)/2;Array.from(a.imageArray).forEach(A=>{var S=document.createElement("canvas"),V=S.getContext("2d");S.width=u,S.height=u,V.globalAlpha=a.globalAlpha,V.translate(u/2,u/2),V.rotate(d),V.translate(-u/2,-u/2),V.drawImage(A,b,$,a.width,a.height),c=c.concat(S);});function M(A){return A[Math.floor(Math.random()*A.length)]}o.setTransform(1,0,0,1,0,0);let C=[];for(let A=k;A<h;A+=p){for(let S=y;S<m;S+=g)i(C,A,S)||(C=C.concat({x:A,y:S}),o.drawImage(M(c),A,S));for(let S=y;S>-Math.abs(u);S-=g)i(C,A,S)||(C=C.concat({x:A,y:S}),o.drawImage(M(c),A,S));}for(let A=k;A>-Math.abs(u);A-=p){for(let S=y;S<m;S+=g)i(C,A,S)||(C=C.concat({x:A,y:S}),o.drawImage(M(c),A,S));for(let S=y;S>-Math.abs(u);S-=g)i(C,A,S)||(C=C.concat({x:A,y:S}),o.drawImage(M(c),A,S));}},e.prototype.getPreview=function(){return this.dataUrl},e.prototype.render=function(n){return n=n==="png"?"png":"jpeg",this.canvas.toDataURL("image/"+n)},e.prototype.renderBlob=function(){let n=this;return new Promise(a=>{n.canvas.toBlob(function(o){a(window.URL.createObjectURL(o));});})},e.prototype.noConflict=function(){return window.Watermark&&delete window.Watermark,t&&(window.Watermark=t),e},e});const Ie="MT论坛优化",x=j.noConflict(),f=ee.noConflict(),E=ne,w=new x.Log(te,U.console||Te.console);var he;const ue=((he=te==null?void 0:te.script)==null?void 0:he.name)||Ie,fe=!1;w.config({debug:fe,logMaxCount:1e3,autoClearConsole:!0,tag:!0});_.config(Object.defineProperties({html:!0,autoClose:!0,showClose:!1},{position:{get(){return v.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return v.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return v.getValue("qmsg-config-showreverse",!0)}},zIndex:{get(){let t=j.getMaxZIndex(),e=ne.config.InstanceUtils.getPopsMaxZIndex().zIndex;return j.getMaxValue(t,e)+100}}}));const Q=new x.GM_Menu({GM_getValue:q,GM_setValue:H,GM_registerMenuCommand:Ae,GM_unregisterMenuCommand:$e}),P=new x.Httpx(Me);P.interceptors.request.use(t=>(Ce.handle(t),t));P.interceptors.response.use(void 0,t=>(w.error(["拦截器-请求错误",t]),t.type==="onabort"?_.warning("请求取消"):t.type==="onerror"?_.error("请求异常"):t.type==="ontimeout"?_.error("请求超时"):_.error("其它错误"),t));P.config({logDetails:fe});ne.GlobalConfig.setGlobalConfig({mask:{enable:!0,clickEvent:{toClose:!1,toHide:!1}}});U.Object.defineProperty,U.Function.prototype.apply,U.Function.prototype.call,U.Element.prototype.appendChild,U.setTimeout;const N=x.addStyle.bind(x);se.setGMResourceCSS(me.Viewer);se.setGMResourceCSS(me.Hljs);const K=document.querySelector.bind(document),z=document.querySelectorAll.bind(document),O="GM_Panel",ge="data-init",F="data-key",W="data-default-value",Ee="data-init-more-value",T="data-storage-api",I=function(t,e,r,l,i,s){let n={text:t,type:"switch",description:i,attributes:{},props:{},getValue(){return !!this.props[T].get(e,r)},callback(a,o){let c=!!o;w.success(`${c?"开启":"关闭"} ${t}`),this.props[T].set(e,c);},afterAddToUListCallBack:s};return Reflect.set(n.attributes,F,e),Reflect.set(n.attributes,W,r),Reflect.set(n.props,T,{get(a,o){return v.getValue(a,o)},set(a,o){v.setValue(a,o);}}),n},de=function(t,e,r,l,i,s){let n=[];typeof l=="function"?n=l():n=l;let a={text:t,type:"select",description:s,attributes:{},props:{},getValue(){return this.props[T].get(e,r)},callback(o,c,u){let h=c;w.info(`选择：${u}`),this.props[T].set(e,h),typeof i=="function"&&i(o,h,u);},data:n};return Reflect.set(a.attributes,F,e),Reflect.set(a.attributes,W,r),Reflect.set(a.props,T,{get(o,c){return v.getValue(o,c)},set(o,c){v.setValue(o,c);}}),a},xe=function(t,e,r,l,i,s,n,a,o){return {text:t,type:"button",description:e,buttonIcon:l,buttonIsRightIcon:i,buttonIconIsLoading:s,buttonType:n,buttonText:r,callback(u){typeof a=="function"&&a(u);},afterAddToUListCallBack:o}},pe=function(t,e,r,l){let i={type:"own",attributes:{},props:r,getLiElementCallBack:t,afterAddToUListCallBack:l};return Reflect.set(i.attributes,ge,()=>!1),i},D={getAvatar:(t,e="middle")=>`/uc_server/avatar.php?uid=${t}&size=${e}&ts=1`,getCurrentUID(){let t=U.discuz_uid;if(typeof t=="string")return t;let e=document.querySelector('.sidenv_exit a[href*="uid="]');if(e){let r=e.href.match(/uid=([0-9]+)/);if(r)return r[r.length-1]}},getCurrentFormHash(){let t=document.querySelector('.comiis_user_info a[href*="&formhash="]');if(t){let e=t.href.match(/formhash=([0-9a-zA-Z]+)/);if(e)return e[e.length-1]}},envIsMobile(){return (U.STYLEID||window.STYLEID||typeof STYLEID<"u"&&STYLEID)==="3"},getThreadId:t=>{let e=t.match(/thread-([\d]+)-|&tid=([\d]+)/i);if(e){let r=e.filter(Boolean);return r[r.length-1]}},getForumId(t){let e=t.match(/&fid=([\d]+)/i);if(e)return e[e.length-1]},getPostId(t){let e=t.match(/&pid=([\d]+)/i);if(e)return e[e.length-1]},getRepquote(t){let e=t.match(/&repquote=([\d]+)/i);if(e)return e[e.length-1]}},B={$upload:{small:!1,middle:!1,big:!1},$data:{avatarInfo:{maxSize:2097152,small:{width:48,height:48},middle:{width:120,height:120},big:{width:200,height:250}}},$el:{$smallUpload:null,$middleUpload:null,$bigUpload:null,$smallStatus:null,$middleStatus:null,$bigStatus:null},$avatar:{get small(){return B.$el.$smallUpload.files[0]},get middle(){return B.$el.$middleUpload.files[0]},get big(){return B.$el.$bigUpload.files[0]}},init(){this.showView();},showView(){const t=this;let e=E.confirm({title:{text:"修改头像",position:"center"},content:{text:`
                <div class="avatar-container">
                    <p class="avatar-tip">1. 小头像（图片宽高限制最大尺寸：48×48）</p>
                    <p class="avatar-upload-status" data-type="small">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="small" data-maxwidth="48" data-maxheight="48" accept="image/*">
                </div>
                <div class="avatar-container">
                    <p class="avatar-tip">2. 中头像（图片宽高限制最大尺寸：120×120）</p>
                    <p class="avatar-upload-status" data-type="middle">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="middle" data-maxwidth="120" data-maxheight="120" accept="image/*">
                </div>
                <div class="avatar-container">
                    <p class="avatar-tip">3. 大头像（图片宽高限制最大尺寸：200×250）</p>
                    <p class="avatar-upload-status" data-type="big">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="big" data-maxwidth="200" data-maxheight="250" accept="image/*">
                </div>
                `,html:!0},btn:{ok:{text:"上传",callback:async()=>{if(!t.$upload.small){_.error("请上传小头像");return}if(!t.$upload.middle){_.error("请上传中头像");return}if(!t.$upload.big){_.error("请上传大头像");return}let r=_.loading("正在处理数据中...");try{let l=await this.getUploadUrl();if(l==null)return;let i=D.getCurrentFormHash();if(i==null){_.error("获取formhash失败");return}let s={big:{base64:await x.parseFileToBase64(this.$avatar.big)},middle:{base64:await x.parseFileToBase64(this.$avatar.middle)},small:{base64:await x.parseFileToBase64(this.$avatar.small)}};Object.keys(s).forEach(o=>{let c=s[o];c.base64=c.base64.substring(c.base64.indexOf(",")+1);});let n=new FormData;n.append("Filedata",this.$avatar.big||""),n.append("confirm","确定"),n.append("avatar1",s.big.base64),n.append("avatar2",s.middle.base64),n.append("avatar3",s.small.base64),n.append("formhash",i),w.info("头像的base64字符串",s);let a=await P.post(l,{data:n,processData:!1,headers:{Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9","User-Agent":x.getRandomPCUA(),Host:window.location.hostname,Origin:window.location.origin,Referer:`${window.location.origin}/home.php?mod=spacecp&ac=avatar`}});if(!a.status)return;a.data.responseText.indexOf("window.parent.postMessage('success','*')")!=-1?(e.close(),_.success("上传成功")):(w.error("上传失败",a),_.error(a.data.responseText,{timeout:6e3,isHTML:!1,html:!1}));}catch(l){w.error(l);}finally{r.close();}}}},mask:{enable:!0},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
            .avatar-container{
                display: flex;
                width: -webkit-fill-available;
                width: -moz-available;
                margin: 6px 10px;
                flex-direction: column;
            }
            .avatar-tip{
                float: left;
                font-weight: bold;
            }
            .avatar-upload-status {
                padding: 0px;
                padding-left: 10px;
                font-weight: bold;
                width: -webkit-fill-available;
                text-align: left;
                font-size: small;
            }
            .avatar-upload-status[data-success="false"]{
                color: red;
            }
            .avatar-upload-status[data-success="true"]{
                color: green;
            }
            .avatar-upload {
                margin: 20px 0px;
            }
            `});this.$el.$smallUpload=e.$shadowRoot.querySelector(".avatar-upload[data-type='small']"),this.$el.$middleUpload=e.$shadowRoot.querySelector(".avatar-upload[data-type='middle']"),this.$el.$bigUpload=e.$shadowRoot.querySelector(".avatar-upload[data-type='big']"),this.$el.$smallStatus=e.$shadowRoot.querySelector(".avatar-upload-status[data-type='small']"),this.$el.$middleStatus=e.$shadowRoot.querySelector(".avatar-upload-status[data-type='middle']"),this.$el.$bigStatus=e.$shadowRoot.querySelector(".avatar-upload-status[data-type='big']"),this.setUploadChangeEvent(this.$el.$smallUpload,this.$el.$smallStatus,this.$data.avatarInfo.small,()=>{this.$upload.small=!0;}),this.setUploadChangeEvent(this.$el.$middleUpload,this.$el.$middleStatus,this.$data.avatarInfo.middle,()=>{this.$upload.middle=!0;}),this.setUploadChangeEvent(this.$el.$bigUpload,this.$el.$bigStatus,this.$data.avatarInfo.big,()=>{this.$upload.big=!0;});},setUploadChangeEvent(t,e,r,l){f.on(t,"change",i=>{var c;if(!((c=t.files)!=null&&c.length))return;f.text(e,"🤡获取文件信息中..."),e.removeAttribute("data-success");let s=t.files[0],n=s.size,a=new Image,o=new FileReader;o.readAsDataURL(s),o.onload=function(u){a.src=u.target.result,a.onload=function(){if(a.width>r.width||a.height>r.height){t.value="",e.setAttribute("data-success","false"),f.text(e,`🤡校验失败 ==> 图片尺寸不符合，宽：${a.width} 高：${a.height}`);return}if(n>B.$data.avatarInfo.maxSize){t.value="",e.setAttribute("data-success","false"),f.text(e,`🤡校验失败 ==> 图片大小不符合：${n}byte，限制最大：${B.$data.avatarInfo.maxSize}byte`);return}e.setAttribute("data-success","true"),f.text(e,`🤣 通过 宽:${a.width} 高:${a.height} 大小(byte):${n}`),l();};};});},async getUploadUrl(){let t=await P.get("/home.php?mod=spacecp&ac=avatar",{headers:{"User-Agent":x.getRandomPCUA()}});if(!t.status)return;if(x.isNull(t.data.responseText)){_.error("动态头像：获取上传地址失败");return}let e=t.data.responseText.match(/var[\s]*data[\s]*=[\s]*"(.+?)"/);if(e==null||e.length!=2){_.error("动态头像：获取变量data失败");return}let l=e[e.length-1].split(","),i=l[l.indexOf("src")+1].replace("images/camera.swf?inajax=1","index.php?m=user&a=rectavatar&base64=yes");return w.info("上传地址："+i),i}},Re={id:"component-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[de("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(t,e,r)=>{w.info("设置当前Qmsg弹出位置"+r);},"Toast显示在页面九宫格的位置"),de("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),I("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[I("新增【最新发表】","mt-addLatestPostBtn",!0,void 0,"便于快捷跳转"),I("超链接文字转换","mt-link-text-to-hyperlink",!0,void 0,"自动把符合超链接格式的文字转为超链接")]}]},{text:"头像",type:"deepMenu",forms:[{text:"<a href='https://ezgif.com/resize' target='_blank'>Resize Image</a>",type:"forms",forms:[pe(t=>{let e=f.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
											<p class="pops-panel-item-left-main-text">头像（有缓存）</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),r=f.createElement("div",{className:"pops-panel-avatar-img",innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${D.getCurrentUID()}&size=small"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${D.getCurrentUID()}&size=middle"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${D.getCurrentUID()}&size=big"
												class="avatar-img" data-size="big">
											`}),l=f.createElement("style",{innerHTML:`
											.avatar-img {
												width: 30px;
												height: 30px;
												border-radius: 50%;
												overflow: hidden;
											}
										`});return r.querySelector(".avatar-img[data-size='small']"),r.querySelector(".avatar-img[data-size='middle']"),r.querySelector(".avatar-img[data-size='big']"),t.appendChild(e),t.appendChild(r),t.appendChild(l),t}),pe(t=>{let e=f.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
											<p class="pops-panel-item-left-main-text">头像</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),r=f.createElement("div",{className:"pops-panel-avatar-img",innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${D.getCurrentUID()}&size=small&ts=${Date.now()}"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${D.getCurrentUID()}&size=middle&ts=${Date.now()}"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${D.getCurrentUID()}&size=big&ts=${Date.now()}"
												class="avatar-img" data-size="big">
											`});return t.appendChild(e),t.appendChild(r),t}),xe("修改头像",`可以上传gif图片，注意图片最大限制为${j.formatByteToSize(B.$data.avatarInfo.maxSize)}`,"上传",void 0,!1,!1,"primary",()=>{B.init();})]}]}]}]},Le={id:"component-forum-post",title:"帖子",forms:[{type:"forms",text:"",forms:[{text:"功能",type:"deepMenu",forms:[{type:"forms",text:"",forms:[I("拦截附件","mt-forum-post-interceptionAttachment",!0,void 0,"点击附件时弹出提示框进行确认是否下载附件"),I("图片查看优化","mt-forum-post-optimizationImagePreview",!0,void 0,"使用Viewer查看图片"),I("自动加载下一页","mt-forum-post-loadNextPageComment",!0,void 0,"无缝预览下一页"),I("代码块优化","mt-forum-post-codeQuoteOptimization",!0,void 0,"自动检测代码块语言并设置关键字高亮")]}]},{type:"deepMenu",text:"用户信息块",forms:[{type:"forms",text:"",forms:[I("探测用户在线状态","mt-forum-post-detectingUserOnlineStatus",!1,void 0,"获取用户在线状态并在用户信息处显示状态表情"),I("显示用户等级","mt-forum-post-showUserLevel",!0,void 0,"在用户信息处显示当前用户的等级"),I("隐藏底部信息块","mt-forum-post-hideBottomInfoBlock",!1,void 0,"包括金币、好评、信誉等信息")]}]},{type:"deepMenu",text:"右侧悬浮工具栏",forms:[{type:"forms",text:"",forms:[I("新增【快捷收藏】","mt-forum-post-quickCollentBtn",!0,void 0,"在右侧悬浮工具栏添加【收藏】按钮，用于快捷收藏"),I("快捷回复优化","mt-forum-post-quickReplyOptimization",!0,void 0,"为快捷回复弹窗底部区域添加【一键空格】按钮")]}]}]}]},Z={formhash:/formhash=(.+)&/,hash:/hash=(.+)&/,uid:/uid=(\d+)/,fontSpecial:/<font.*?>|<\/font>|<strike>|<strong>|<i>|<u>|align=".*?"|<br>[\s]*<br>[\s]*<br>/g,ptid:/&ptid=([\d]+)/i,pid:/&pid=([\d]+)/i,tid:/&tid=([\d]+)/i},G={$key:{signTime:"mt-sign-time"},init(){this.sign();},todayIsSign(){let t=this.getSignTime();return !(t==null||x.formatTime(Date.now(),"yyyyMMdd")!==x.formatTime(t,"yyyyMMdd"))},setSignTime(){H(this.$key.signTime,Date.now());},getSignTime(){return q(this.$key.signTime)},clearSignTime(){le(this.$key.signTime);},async checkLogin(){return D.envIsMobile()?document.querySelector(".sidenv_exit a[href*='member.php?mod=logging&action=logout']"):document.querySelector("#comiis_key")},getFormHash(){let t=(top||globalThis).document.querySelector("input[name=formhash]"),e=(top||globalThis).document.querySelector("div[class=sidenv_exit]>a"),r=null,l=(top||globalThis).document.querySelector("a.comiis_recommend_addkey"),i=null,s=t?t.value:null;return e&&(r=e.href.match(Z.formhash),r=r?r[r.length-1]:null),l&&(i=l.href.match(Z.hash),i=i?i[i.length-1]:null),s||r||i},async sign(){let t=this.getFormHash();if(t==null){if(document.querySelector("#comiis_picshowbox")){w.info("当前为评论区的看图模式 ");return}w.error("自动签到：获取账号formhash失败"),le("mt_sign"),_.error({content:"自动签到：获取账号formhash失败"});return}if(this.todayIsSign()){w.info("今日已签到");return}let e={operation:"qiandao",format:"button",formhash:t,inajax:1,ajaxtarget:"midaben_sign"},r=await P.get(`/k_misign-sign.html?${x.toSearchParamsStr(e)}`,{fetch:!!v.getValue("mt-auto-sign-useFetch"),headers:{"User-Agent":x.getRandomPCUA()},allowInterceptConfig:!1});if(!r.status){w.error("签到：网络异常，请求失败"),_.error("签到：网络异常，请求失败");return}this.setSignTime(),w.info("签到信息：",r);let l=x.parseCDATA(r.data.responseText),i=f.parseHTML(`<div>${l}</div>`,!0,!1),s=f.text(i);if(s.includes("需要先登录")){_.error("签到：请先登录账号",{timeout:3e3}),this.clearSignTime();return}else if(s.includes("请稍后再试")||s.includes("您已经被列入黑名单")||s.includes("绑定手机号后才可以签到")||s.includes("您所在用户组不允许使用")){_.error("签到："+s,{timeout:5e3});return}else if(s.includes("今日已签")){_.info("签到："+s);return}else if(r.data.responseText.includes("您当前的访问请求当中含有非法字符，已经被系统拒绝")){_.error("签到: 您当前的访问请求当中含有非法字符，已经被系统拒绝",{timeout:6e3});return}let n=i.querySelector(".con"),a=i.querySelector(".line");if(n&&a){let u=f.text(n).match(/([0-9]+)金币/),h=f.text(a).match(/([0-9]+)/),m=u[u.length-1],d=h[h.length-1];w.success(`金币${m}，排名${d}`),_.info(`
                <div style="display: flex;${D.envIsMobile()?"":"padding: 20px;"}">
                    <div style="align-self: center;margin-right: 20px;">签到</div>
                    <div>排名 ${d}<br>金币 ${m}</div>
                </div>`,{timeout:4e3,isHTML:!0});return}let c=ne.alert({title:{text:"未知签到内容",position:"center"},content:{text:"",html:!1},width:"88vw",height:"400px"}).$shadowRoot.querySelector(".pops-alert-content");c.innerText=r.data.responseText,_.error("签到: 未知结果,请查看控制台信息",{timeout:4e3});}},De={id:"component-sigh",title:"签到",forms:[{text:"自动签到",type:"forms",forms:[I("启用","mt-auto-sign",!0,void 0,"自动请求签到"),I("使用fetch请求","mt-auto-sign-useFetch",!1,void 0,""),xe("签到信息",`上次签到时间：${G.getSignTime()==null?"尚未签到":j.formatTime(G.getSignTime())}`,"清空信息",void 0,void 0,void 0,"primary",t=>{let r=t.composedPath()[0].closest("li").querySelector(".pops-panel-item-left-desc-text");E.confirm({title:{text:"提示 ",position:"center"},content:{text:"<p>是否清空脚本签到记录的时间?</p>",html:!0},btn:{ok:{enable:!0,callback:l=>{G.clearSignTime(),_.success("删除成功"),f.text(r,`上次签到时间：${G.getSignTime()==null?"尚未签到":j.formatTime(G.getSignTime())}`),l.close();}}},mask:{enable:!0},width:"300px",height:"200px"});})]}]},Ue={id:"component-guide",title:"导读",forms:[{type:"forms",text:"",forms:[I("页面美化","mt-guide-beautifyPage",!0,void 0,"美化样式")]}]},Y={setting:{get width(){return window.innerWidth<550?"88vw":"550px"},get height(){return window.innerHeight<450?"70vh":"450px"}},settingBig:{get width(){return window.innerWidth<800?"92vw":"800px"},get height(){return window.innerHeight<600?"80vh":"600px"}},info:{get width(){return "350px"},get height(){return "250px"}}},v={$data:{__data:null,__oneSuccessExecMenu:null,__onceExec:null,__listenData:null,get data(){return v.$data.__data==null&&(v.$data.__data=new x.Dictionary),v.$data.__data},get oneSuccessExecMenu(){return v.$data.__oneSuccessExecMenu==null&&(v.$data.__oneSuccessExecMenu=new x.Dictionary),v.$data.__oneSuccessExecMenu},get onceExec(){return v.$data.__onceExec==null&&(v.$data.__onceExec=new x.Dictionary),v.$data.__onceExec},get scriptName(){return ue},key:O,attributeKeyName:F,attributeDefaultValueName:W},$listener:{get listenData(){return v.$data.__listenData==null&&(v.$data.__listenData=new x.Dictionary),v.$data.__listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},isTopWindow(){return U.top===U.self},initExtensionsMenu(){this.isTopWindow()&&Q.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:!1,isStoreValue:!1,showText(t){return t},callback:()=>{this.showPanel();}}]);},initPanelDefaultValue(){let t=this;function e(i){if(!i.attributes)return;let s={},n=i.attributes[F];n!=null&&(s[n]=i.attributes[W]);let a=i.attributes[ge];if(typeof a=="function"){let u=a();if(typeof u=="boolean"&&!u)return}let o=i.attributes[Ee];o&&typeof o=="object"&&Object.assign(s,o);let c=Object.keys(s);if(!c.length){w.warn(["请先配置键",i]);return}c.forEach(u=>{let h=s[u];t.$data.data.has(u)&&w.warn("请检查该key(已存在): "+u),t.$data.data.set(u,h);});}function r(i){for(let s=0;s<i.length;s++){let n=i[s];e(n);let a=n.forms;a&&Array.isArray(a)&&r(a);}}let l=this.getPanelContentConfig();for(let i=0;i<l.length;i++){let s=l[i];if(!s.forms)continue;let n=s.forms;n&&Array.isArray(n)&&r(n);}},setValue(t,e){let r=q(O,{}),l=r[t];r[t]=e,H(O,r),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,l,e);},getValue(t,e){let l=q(O,{})[t];return l??(this.$data.data.has(t)?this.$data.data.get(t):e)},deleteValue(t){let e=q(O,{}),r=e[t];Reflect.deleteProperty(e,t),H(O,e),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,r,void 0);},addValueChangeListener(t,e,r){let l=Math.random();return this.$listener.listenData.set(t,{id:l,key:t,callback:e}),r&&r.immediate&&e(t,this.getValue(t),this.getValue(t)),l},removeValueChangeListener(t){let e=null;for(const[r,l]of this.$listener.listenData.entries())if(l.id===t){e=r;break}typeof e=="string"?this.$listener.listenData.delete(e):console.warn("没有找到对应的监听器");},triggerMenuValueChange(t,e,r){if(this.$listener.listenData.has(t)){let l=this.$listener.listenData.get(t);if(typeof l.callback=="function"){let i=this.getValue(t),s=i,n=i;typeof e<"u"&&arguments.length>1&&(s=e),typeof r<"u"&&arguments.length>2&&(n=r),l.callback(t,n,s);}}},hasKey(t){let e=q(O,{});return t in e},execMenu(t,e,r=!1,l){if(!(typeof t=="string"||typeof t=="object"&&Array.isArray(t)))throw new TypeError("key 必须是字符串或者字符串数组");let i=[];typeof t=="object"&&Array.isArray(t)?i=[...t]:i.push(t);let s;for(let n=0;n<i.length;n++){const a=i[n];if(!this.$data.data.has(a)){w.warn(`${t} 键不存在`);return}let o=v.getValue(a);if(r&&(o=!o),typeof l=="function"){let c=l(a,o);typeof c=="boolean"&&(o=c);}if(!o)break;s=o;}s&&e(s);},execMenuOnce(t,e,r,l,i){if(typeof t!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(t)){w.warn(`${t} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(t))return;this.$data.oneSuccessExecMenu.set(t,1);let s=()=>{let h=v.getValue(t);return typeof r=="function"?r(t,h):h},n=[],a=h=>{let m=s(),d=[];if(h instanceof HTMLStyleElement?d=[h]:Array.isArray(h)&&(d=[...h.filter(p=>p!=null&&p instanceof HTMLStyleElement)]),m)n=n.concat(d);else for(let p=0;p<d.length;p++)d[p].remove(),d.splice(p,1),p--;},o=h=>typeof i=="function"?i(t,h):h,c=h=>{let m=[];if(o(h)){let d=e(h,a);d instanceof HTMLStyleElement?m=[d]:Array.isArray(d)&&(m=[...d.filter(p=>p!=null&&p instanceof HTMLStyleElement)]);}for(let d=0;d<n.length;d++)n[d].remove(),n.splice(d,1),d--;n=[...m];};this.addValueChangeListener(t,(h,m,d)=>{let p=d;typeof l=="function"&&(p=l(h,d,m)),c(p);});let u=s();u&&c(u);},execInheritMenuOnce(t,e,r,l){let i=this;const s=(n,a)=>{let o=i.getValue(n),c=i.getValue(a);if(typeof l=="function"){let u=l(o,c);if(u!=null)return u}return o};this.execMenuOnce(t,r,()=>s(t,e),()=>s(t,e)),this.execMenuOnce(e,()=>{},()=>!1,()=>(this.triggerMenuValueChange(t),!1));},onceExec(t,e){if(typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(t)||(e(),this.$data.onceExec.set(t,1));},showPanel(){E.panel({title:{text:`${ue}-设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},width:Y.setting.width,height:Y.setting.height,drag:!0,only:!0});},getPanelContentConfig(){return [Re,Le,De,Ue]}},Pe=()=>{var t,e,r,l,i,s,n,a,o,c,u;c=/((https?:\/\/|www\.)[\x21-\x7e]+[\w\/]|(\w[\w._-]+\.(com|cn|org|net|info|tv|cc))(\/[\x21-\x7e]*[\w\/])?|ed2k:\/\/[\x21-\x7e]+\|\/|thunder:\/\/[\x21-\x7e]+=)/gi,t=function(d){var p;if(d=(p=d.originalTarget)!=null?p:d.target,d!=null&&d.localName==="a"&&d.className.indexOf("texttolink")!==-1&&(p=d.getAttribute("href"),p.indexOf("http")!==0&&p.indexOf("ed2k://")!==0&&p.indexOf("thunder://")!==0))return d.setAttribute("href","http://"+p)},document.addEventListener("mouseover",t),o=function(d){if(typeof d=="object"&&d!=null&&typeof d.parentNode<"u"&&typeof d.parentNode.className<"u"&&typeof d.parentNode.className.indexOf=="function"&&d.parentNode.className.indexOf("texttolink")===-1&&d.nodeName!=="#cdata-section"){var p=d.textContent.replace(c,'<a href="$1" target="_blank" class="texttolink">$1</a>');if(d.textContent.length!==p.length){var g=document.createElement("span");return g.innerHTML=p,console.log(`识别: ${g.querySelector("a")}`),d.parentNode.replaceChild(g,d)}}},e="a svg canvas applet input button area pre embed frame frameset head iframe img option map meta noscript object script style textarea code".split(" "),u=`//text()[not(ancestor::${e.join(") and not(ancestor::")})]`,r=new RegExp(`^(${e.join("|")})$`,"i"),i=function(d,p){var g,k;if(p+1e4<d.snapshotLength){var y=g=p;for(k=p+1e4;p<=k?g<=k:g>=k;y=p<=k?++g:--g)o(d.snapshotItem(y));setTimeout(function(){return i(d,p+1e4)},15);}else for(y=g=p,k=d.snapshotLength;p<=k?g<=k:g>=k;y=p<=k?++g:--g)o(d.snapshotItem(y));},s=function(d){return d=document.evaluate(u,d,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null),i(d,0)},n=function(d){for(d=document.createTreeWalker(d,NodeFilter.SHOW_TEXT,{acceptNode:function(p){if(!r.test(p.parentNode.localName))return NodeFilter.FILTER_ACCEPT}},!1);d.nextNode();)o(d.currentNode);},a=new window.MutationObserver(function(d){var p,g,k=0;for(p=d.length;k<p;k++){var y=d[k];if(y.type==="childList"){var b=y.addedNodes,$=0;for(g=b.length;$<g;$++)y=b[$],n(y);}}}),l=function(){return s(document.body),a.observe(document.body,{childList:!0,subtree:!0})};var h=function(d){var p=d.getAttribute("href");if(p.indexOf("http")!==0&&p.indexOf("ed2k://")!==0&&p.indexOf("thunder://")!==0)return d.setAttribute("href","http://"+p)},m=function(){for(var d=document.getElementsByClassName("texttolink"),p=0;p<d.length;p++)h(d[p]);};setTimeout(m,1500),setTimeout(l,100);},R=globalThis.location.pathname,L=globalThis.location.search;new URLSearchParams(L);const ae={isKMiSign(){return R.startsWith("/k_misign-sign.html")},isPost(){return R.startsWith("/thread-")||R.startsWith("/forum.php")&&L.startsWith("?mod=viewthread")},isPage(){return !!R.match(/^\/page-([0-9]+).html/g)},isGuide(){return R.startsWith("/forum.php")&&L.startsWith("?mod=guide")},isPlate(){return !!R.match(/\/forum-[0-9]{1,2}-[0-9]{1,2}.html/g)},isSearch(){return R.startsWith("/search.php")},isSpace(){return R.startsWith("/home.php")&&L.startsWith("?mod=space")},isMySpace(){return R.startsWith("/home.php")&&L.startsWith("?mod=space&do=profile&mycenter")},isSpaceWithAt(){return R.startsWith("/space-uid-")},isForumList(){return R.startsWith("/forum.php")&&L.startsWith("?forumlist")},isMessage(){return R.startsWith("/home.php")&&L.startsWith("?mod=space&do=notice")},isMessageList(){return R.startsWith("/home.php")&&L.startsWith("?mod=space&do=pm")},isPointsMall(){return R.startsWith("/keke_integralmall-keke_integralmall.html")||R.startsWith("/plugin.php")&&L.startsWith("?id=keke_integralmal")},isPostPublish(){return R.startsWith("/forum.php")&&L.startsWith("?mod=post")},isPostPublish_voting(){return R.startsWith("/forum.php")&&L.includes("&special=1")||L.includes("&fid=42")},isPostPublish_edit(){return this.isPostPublish()&&L.includes("&action=edit")},isPostPublish_newthread(){return this.isPostPublish()&&L.includes("&action=newthread")},isPostPublish_reply(){return this.isPostPublish()&&L.includes("&action=reply")}},Ve={init(){f.ready(()=>{v.execMenuOnce("mt-forum-post-quickCollentBtn",()=>{this.quickCollentBtn();}),v.execMenuOnce("mt-forum-post-quickReplyOptimization",()=>{this.quickReplyOptimization();});});},quickCollentBtn(){w.info("【快捷收藏】"),x.waitNode("#scrolltop",1e4).then(t=>{if(!t)return;let e=K('#scform input[name="formhash"]').value,r=D.getThreadId(window.location.href),l=`/home.php?${x.toSearchParamsStr({mod:"spacecp",ac:"favorite",type:"thread",id:r,formhash:e,infloat:"yes",handlekey:"k_favorite",inajax:1,ajaxtarget:"fwin_content_k_favorite"})}`,i=document.createElement("span");i.innerHTML=`
			<a href="${l}" 
				id="k_favorite"
				onclick="showWindow(this.id, this.href, 'get', 0);"
				onmouseover="this.title = $('favoritenumber').innerHTML + ' 人收藏'">
				<img src="https://s1.ax1x.com/2020/04/29/JTk3lD.gif"
						height="26" 
						width="26" 
						style="position:absolute;top:10px;left:11px">
			</a>
			`,f.prepend(t,i);});},quickReplyOptimization(){x.waitNode('#scrolltop a[title="快速回复"]',1e4).then(t=>{t&&(w.info("快捷回复优化"),f.on(t,"click",function(){U.showWindow("reply",t.href),w.info("等待弹窗出现"),x.waitNode("#moreconf",1e4).then(e=>{if(!e)return;w.success("弹出出现，添加按钮");let r=f.createElement("button",{innerText:"一键空格",type:"button",id:"insertspace2"},{style:"float: left;"});f.on(r,"click",l=>{x.preventEvent(l),f.val(K("#postmessage"),f.val(K("#postmessage"))+"           ");}),f.append(e,r);});}));});}},we={$flag:{isSetHljsCSS:!1},init(){Ve.init(),v.execMenuOnce("mt-forum-post-autoExpandContent",()=>this.autoExpandContent()),v.execMenuOnce("mt-forum-post-repairImageWidth",()=>this.repairImageWidth()),v.execMenuOnce("mt-forum-post-hideBottomInfoBlock",()=>this.hideBottomInfoBlock()),f.ready(()=>{v.execMenu("mt-forum-post-removeFontStyle",()=>{this.removeFontStyle();}),v.execMenu("mt-forum-post-removeCommentFontStyle",()=>{this.removeCommentFontStyle();}),v.execMenuOnce("mt-forum-post-loadNextPageComment",()=>{this.loadNextPageComment();}),v.execMenuOnce("mt-forum-post-codeQuoteOptimization",()=>{this.codeQuoteOptimization();}),v.execMenuOnce("mt-forum-post-optimizationImagePreview",()=>{this.optimizationImagePreview();}),v.execMenuOnce("mt-forum-post-interceptionAttachment",()=>{this.setAttachmentsClickTip();}),v.execMenu("mt-forum-post-detectingUserOnlineStatus",()=>{this.detectingUserOnlineStatus();}),v.execMenu("mt-forum-post-showUserLevel",()=>{this.showUserLevel();});});},autoExpandContent(){return w.info("自动展开帖子内容"),N(`
        div.comiis_message.bg_f.view_one.b_b.cl.message>div.comiis_messages.comiis_aimg_show.cl{max-height:inherit!important;overflow-y:inherit!important;position:inherit!important}
        .comiis_lookfulltext_bg,.comiis_lookfulltext_key{display:none!important} 
        `)},repairImageWidth(){return w.info("修复图片宽度"),N(`
        .comiis_messages img{
            max-width: 100% !important;
        }`)},removeFontStyle(){let t=document.querySelector(".comiis_a.comiis_message_table");t&&(w.info("移除帖子字体效果"),f.html(t,f.html(t).replace(Z.fontSpecial,"")));},removeCommentFontStyle(){var r;w.info("移除评论区的字体效果");let t=z("font"),e=((r=K(".comiis_postlist .comiis_postli"))==null?void 0:r.innerHTML)||"";e!==""&&(t.forEach(l=>{e.includes(l.innerHTML)||(l.removeAttribute("color"),l.removeAttribute("style"),l.removeAttribute("size"));}),z(".comiis_message.message").forEach(l=>{if(e.includes(l.innerHTML)){l.innerHTML=l.innerHTML.replace(Z.fontSpecial,"");let i=l.nextElementSibling;i&&i.localName==="strike"&&(i.outerHTML=i.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));}})),z(".comiis_postli.comiis_list_readimgs.nfqsqi").forEach(l=>{let i=l.parentElement;i&&i.localName==="strike"&&(i.outerHTML=i.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));});},loadNextPageComment(){if(w.info("自动加载下一页评论"),document.title.includes("提示信息 - MT论坛"))return;if(z(".pgbtn").length==0){w.warn("没有找到下一页按钮");return}var t=async function(l){var a,o;let i=await P.get(l,{headers:{"User-Agent":x.getRandomPCUA()},allowInterceptConfig:!1});if(!i.status){_.error("网络异常，请求下一页失败");return}var s=x.parseFromString(i.data.responseText),n=s.querySelector(".pgbtn a");return (a=s.querySelector("#postlistreply"))==null||a.remove(),(o=s.querySelector(".bm_h.comiis_snvbt"))==null||o.remove(),{url:n?n.getAttribute("href"):null,postlist:s.querySelector("#postlist"),pgbtn:s.querySelector(".pgbtn"),pgs:s.querySelector(".pgs.mtm")}},e=async function(){var l=K(".pgbtn a").getAttribute("href");if(l){let i=await t(l);i&&(i.url||(w.error("最后一页，取消监听"),f.off(document,["scroll","wheel"],r.run),f.remove(".pgbtn")),i.postlist&&f.append("#postlist",f.html(i.postlist)),i.pgbtn&&f.html(".pgbtn",f.html(i.pgbtn)),i.pgs&&f.html(".pgs.mtm",f.html(i.pgs)),we.init());}else w.error("获取下一页元素失败");};let r=new x.LockFunction(async()=>{x.isNearBottom()&&await e();});f.on(document,["scroll","wheel"],r.run);},codeQuoteOptimization(){w.info("代码块优化");function t(r){var l=["add","and","cmp","cmpg","cmpl","const","div","double","float","goto","if","int","long","move","mul","neg","new","nop","not","or","rem","return","shl","shr","sput","sub","throw","ushr","xor"],i=["aget","aput","array","check","execute","fill","filled","goto/16","goto/32","iget","instance","invoke","iput","monitor","packed","sget","sparse"],s=["transient","constructor","abstract","final","synthetic","public","private","protected","static","bridge","system"];return {aliases:["smali"],contains:[{className:"string",begin:'"',end:'"',relevance:0},r.COMMENT("#","$",{relevance:0}),{className:"keyword",variants:[{begin:"\\s*\\.end\\s[a-zA-Z0-9]*"},{begin:"^[ ]*\\.[a-zA-Z]*",relevance:0},{begin:"\\s:[a-zA-Z_0-9]*",relevance:0},{begin:"\\s("+s.join("|")+")"}]},{className:"built_in",variants:[{begin:"\\s("+l.join("|")+")\\s"},{begin:"\\s("+l.join("|")+")((\\-|/)[a-zA-Z0-9]+)+\\s",relevance:10},{begin:"\\s("+i.join("|")+")((\\-|/)[a-zA-Z0-9]+)*\\s",relevance:10}]},{className:"class",begin:`L[^(;:
]*;`,relevance:0},{begin:"[vp][0-9]+"}]}}N(`
			.hljs{text-align:left}
			.hljs ol{margin:0 0 0 10px;padding:10px 10px}
			.hljs li{padding-left:10px;list-style-type:decimal-leading-zero;font-family:Monaco,Consolas,'Lucida Console','Courier New',serif;font-size:12px;line-height:1.8em}
			.hljs li:hover{background:#2c313c}
			.hljs li::marker{unicode-bidi:isolate;font-variant-numeric:tabular-nums;text-transform:none;text-indent:0!important;text-align:start!important;text-align-last:start!important}
			.hljs em[onclick^=copycode]{color:#fff;background:#246fff;margin:5px 10px;border-radius:3px;padding:0 5px;cursor:pointer;height:32px;line-height:32px;display:inline-flex}
			.hljs .code-select-language{height:32px;line-height:32px;font-size:14px;border:1px solid #5c5c5c;border-radius:5px;text-align:center;outline:0}
		`),J.registerLanguage("smali",t);let e=new x.LockFunction(()=>{function r(i,s="java"){i.oldValue||(i.oldValue=i.textContent),i.innerHTML=J.highlight(i.oldValue,{language:s}).value.replace(/\\n$/gi,"");}document.querySelectorAll("em[onclick^=copycode]").forEach(i=>{if(i.nextElementSibling&&typeof i.nextElementSibling.className=="string"&&i.nextElementSibling.className=="code-select-language")return;let s=J.highlightAuto(f.text(i.parentElement.querySelector("div[id^=code]"))).language,n=document.createElement("select"),a=J.listLanguages().sort();a=a.concat("自动检测");let o="";a.forEach(c=>{c.startsWith("自动检测")?o+=`<option data-value="${s}" selected="selected">${c}(${s})</option>`:o+=`<option data-value="${c}">${c}</option>`;}),n.className="code-select-language",n.innerHTML=o,f.on(n,"change",()=>{let c=n.selectedOptions[0].getAttribute("data-value");w.info("切换代码块语言: ",c),f.parent(n).querySelectorAll("li").forEach(u=>{r(u,c);});}),x.preventEvent(n,"click"),x.preventEvent(i,"click"),i.insertAdjacentElement("afterend",n),x.dispatchEvent(n,"change");}),document.querySelectorAll(".blockcode").forEach(i=>i.className="hljs");},this,500);x.mutationObserver(document,{config:{subtree:!0,childList:!0},callback:()=>{e.run();}});},optimizationImagePreview(){w.info("图片查看优化");let t=[{hostName:"avatar-bbs.mt2.cn",pathName:"*"},{hostName:"cdn-bbs.mt2.cn",pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"/uc_server/avatar.php"}];function e(i=[],s=0){let n="";i.forEach(c=>{n+=`<li><img data-src="${c}"></li>`;});let a=f.createElement("ul",{innerHTML:n}),o=new Se(a,{inline:!1,url:"data-src",zIndex:x.getMaxZIndex()+100,hidden:()=>{o.destroy();}});o.view(s),o.zoomTo(1),o.show();}function r(){document.querySelectorAll("#postlist .comiis_vrx:not([data-isHandlingViewIMG])").forEach(i=>{i.setAttribute("data-isHandlingViewIMG","true");let s=[];i.querySelectorAll("img").forEach(n=>{let a=n.src,o=new URL(a).hostname,c=new URL(a).pathname,u=n.parentElement;u.nodeName.toLowerCase()==="a"&&u.getAttribute("href")===a&&(u.setAttribute("href","javascript:;"),u.removeAttribute("target"));let h=!1;for(let m of t)if(o.indexOf(m.hostName)!=-1&&c.match(m.pathName)){h=!0;break}h||(s=[...s,a],n.removeAttribute("onclick"),n.setAttribute("onclick",""),f.on(n,"click",function(){w.info("点击图片",n);let m=s.findIndex(d=>d==a);e(s,m);}));});});}let l=new x.LockFunction(()=>{r();});x.mutationObserver(document,{config:{subtree:!0,childList:!0},callback:()=>{l.run();}});},setAttachmentsClickTip(){w.info("附件点击提醒");function t(e){if(e.hasAttribute("href")){let r=e.hasAttribute("id")?e.id:e.parentElement.id,l=e.getAttribute("href"),i=e.innerText;if(document.querySelector(`#${r}_menu`).innerText.indexOf("金币")===-1)return;console.log("发现附件",e),console.log("该附件是金币附件，拦截！"),e.setAttribute("data-href",l),e.style.setProperty("cursor","pointer"),e.removeAttribute("href"),e.innerText="【已拦截】"+i,e.onclick=function(){E.confirm({title:{text:"提示",position:"center"},content:{text:`<br />确定花费2金币下载附件 <a style="color: #507daf !important;">${i}</a> ？<br /><br />`,html:!0},btn:{ok:{callback:n=>{window.open(l,"_blank"),n.close();}}},mask:{enable:!0},width:"400px",height:"200px"});};}}x.mutationObserver(document.documentElement,{callback:()=>{document.querySelectorAll(".attnm a").forEach(e=>{t(e);}),document.querySelectorAll(".comiis_attach a").forEach(e=>{t(e);}),document.querySelectorAll("span[id*=attach_] a").forEach(e=>{t(e);});},immediate:!0,config:{childList:!0,subtree:!0}});},async detectingUserOnlineStatus(){var i;w.info("探测用户在线状态");let t=Array.from(z(".pls.favatar:not([data-is-detectingUserOnlineStatus])"));function e(s){return f.createElement("img",{smilied:s?"1353":"1384",loading:"lazy",src:s?"https://cdn-bbs.mt2.cn/static/image/smiley/doge/54.png":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/35.png"},{style:"border:0;float:right;"})}function r(s,n){let a=e(n);f.prepend(s,a);}for(let s=0;s<t.length;s++){const n=t[s];var l=n.querySelector(".comiis_o.cl");if(!l)return;let a=l.querySelector("a.kmfxx");if(!a)return;n.setAttribute("data-is-detectingUserOnlineStatus","true");let o=a.href,c=await P.get(o,{fetch:!0,allowInterceptConfig:!1});if(!c.status){r(n,!0);return}let h=f.parseHTML(c.data.responseText,!0,!0).querySelector(".flb");if(h){let d=((i=f.text(h))==null?void 0:i.trim()).endsWith("……[离线]");r(n,d);}else r(n,!0);}},showUserLevel(){w.info("显示用户等级"),z(".pls.favatar:not([data-show-user-level])").forEach(t=>{t.setAttribute("data-show-user-level","true");let e="0级",r=t.querySelector("tr"),l=t.querySelector("p em").innerText,i=document.createElement("td");switch(i.setAttribute("style","border-left: 1px solid #e3e3e3;"),l){case"幼儿园":e="1级";break;case"小学生":e="2级";break;case"初中生":e="3级";break;case"高中生":e="4级";break;case"大学生":e="5级";break;case"硕士生":e="6级";break;case"博士生":case"实习版主":case"版主":case"审核员":e="7级";break;case"博士后":case"超级版主":case"网站编辑":e="8级";break;case"管理员":case"信息监察员":e="9级";break}i.innerHTML=`<p><a class="dj">${e}</a></p>Lv`,r.appendChild(i);});},hideBottomInfoBlock(){return w.info("隐藏底部信息块"),N(`
			.pls .favatar>*:not([id^="userinfo"]+div){
				display: none;
			}
			.pls .favatar>div[id^="userinfo"],
			.pls .favatar>div.tns{
				display: block;
			}
		`)}},qe={init(){f.ready(()=>{v.execMenuOnce("mt-guide-beautifyPage",()=>this.beautifyPage());});},beautifyPage(){w.info("页面美化"),N(`
			table>tbody[id^=normal]>tr{display:none}
			.xst{font-size:15px}
			td.author_img{width:50px;padding:15px 0}
			td.author_img img{width:40px;height:40px;border-radius:50%}
			.list_author{margin-top:2px;color:#999;font-size:12px}
			.bankuai_tu_by a{color:#999!important}
			.bankuai_tu_by img{height:16px;margin:1px 1px 0 0;vertical-align:top}
			tbody a:hover{text-decoration:none;color:#3498db}
			.byg_th_align em+a{margin-right:5px}
		`),z(".bm_c table tbody").forEach(t=>{let e=U.jQuery(t),r=e.find("th.common").html(),l=e.find("th.common")[0].querySelectorAll("a")[0].getAttribute("href"),i=null,s=e.find("td.by>cite>a")[0].getAttribute("href").match(/uid-(\d+)/)[1],n=`
			<td class="author_img">
				<a href="space-uid-${s}.html" c="1" mid="${i}">
					<img src="${D.getAvatar(s,"middle")}">
				</a>
			</td>
			<th colspan="3" class="new byg_th">
				<div class="byg_th_align">
					${r}
				</div>
				<div class="list_author cl">
					<span class="z">作者:&nbsp;
						${e.find("td.by>cite>a")[0].innerHTML}
						${e.find("td.by>em>span")[0].innerHTML}
					</span>
					<span class="z pipe">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
					<span class="z">最后发表:&nbsp;
						${e.find("td.by>cite>a")[1].innerHTML}&nbsp;&nbsp;&nbsp;
						${e.find("td.by>em>a")[0].innerHTML}
					</span>
					<span class="y bankuai_tu_by">
						<a href="${l}">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACOUlEQVRYR+1X0XETMRDdtfRP0gFUgG9O+iZUAKmApAJMBZgKMBUQKohTQcy3dHOmApIOzL/lZTbc3eh0ki/kfMkww37Zlkbv7e7bJxnhiQOfGB/+HQJlWR45594AwAkAvAWAo6B6GwBYAsBKCHGVZRl/743eCjDwbrd7T0SzCGgKYIOIi8lk8qWPyF4C1lrO9OtfAIeEuArnSimuTDSSBIqiOCMiBh8ciPghz/NF7KAogUOC16CIeJ7n+UVIokPAGHOCiNeD044cQESvtdYrf6lDwFq7BoCXIxFYa62zJIFKdJdjgHtnnvqibFXAWss9ejcygW9KqbNGGz6YtZbH5tnIBDZKqeMUAQrBieiT1noemYwfQgj2CXDO8Zw3uqkVb4yZI+LH8EylVFP55kNZllPnXLlvszFmhYiveI8/20VRzIjoM/9ORN+11mzXd2Gt7SQlhMiyLGOxty+j2OZ6dKq74Kfnikul1GkFwhXge4JjI4R4wRacGuloBVJsq0N5dqehJRPRnywQec0P1hKvNZXwF5ME/BKPKMQrpdSddjotGMOCw0RCS275QNXnmxFH8VYIMfWv6I4V+4oeoQ0tF+y0wBsdX9WH4tFywKgG6h+rVrDyD3UpRcGTFfAqMfhuqJ00Vca9T7IhbwN2RCnlrHa8xyJwyy9jIlqGD4+DEOCsAGAupbzZbrfP/UOllOu+F3CMxN4WeMb0CxFnsTfd0BHp08CcAaSUi4dkdx9yvX9M7nPIkD3/CfwGBboJMIftEqkAAAAASUVORK5CYII=" />${e.find("td.num>a")[0].innerText}
						</a>&nbsp;
					</span>
					<span class="y bankuai_tu_by" style="margin-right: 20px">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACVElEQVRYR+1W3W3bQAwmTb83GzSdoDnr7rn2BukETSeoO0HtCdpO0GSCeoPYzzrhnA3sDZJ3yywYSIIk352sOIBRIHwTxCM/kh9/EM4seGb/8Abg/8mAc+4yz/NPAHANAFcAcNnizwYA1gCwIKKVUkq+O6UzA4XjHwBw02mtqXBLRPMuIFEAaZrOEFGcv1gQcZYkyTxkwAvAOXex2+3uEVFSfbIw83o4HE6UUo9tYwcAnHNXeZ7/9dS4/nYrtUbE5zozs/BBuPE+gnZDRAKiwY0GgCMif0LEaZIktz5HWZbdMPMvAHjn++/LRAOAtVZY/DEQxRMRjZVSohOUIoPLGAhjjCoNVACstYL8W5AsiF/bkadpOiYiHo1Gq/q7IhN/Ijh/a62n8v8ZgBhCxPvIg63Wuup7D0+kvp/r2bHWSq2DnGDmiTFmWQJYIqIMmZBUiEUhYHyjtf5QGujKKAAstdYTtNYKe4X1QUHE70mSSImi2SqjEr0sy6bM/DNmV/TPD6CI6jVK0OBJVwmYeWWMGR9LwkZ9CxIuaiTbEtF1HxISkRL9k9tQMihs7tOGzDw3xsyqNqwxNzaIHotReswgkpa+CBDwQWtd7ZiDUZznuUQTmoayTKZa6zuf8WIACfODzotpWi0l3zKSw0NARBcLMzeWESJKO7ePlDrOh7bzgxKU2rKUOjIRa2/fP6/zIIDSwmscJHXC+ZAde5IJY7/0DPuOiGYnnWR1h3Ib7vf7MTOXR2mbI3KkrBFxMRgMFr7r50UZ6Bl1b/XOEvS22PPBG4CzZ+AfrntRcuAjU2wAAAAASUVORK5CYII=" />${e.find("td.num>em")[0].innerText}
					</span>
				</div>
			</th>
			`,a=U.jQuery(n);U.jQuery(a.find(".byg_th_align")[0].children[0]).before(`<em>[${e.find("tr>td.by>a")[0].outerHTML}]</em>`),e.html(a);});}},ie=function(t,e,r,l,i,s="",n,a,o){let c={text:t,type:"input",isNumber:!!n,isPassword:!!a,props:{},attributes:{},description:l,afterAddToUListCallBack:o,getValue(){return this.props[T].get(e,r)},callback(u,h,m){this.props[T].set(e,n?m:h);},placeholder:s};return Reflect.set(c.attributes,F,e),Reflect.set(c.attributes,W,r),Reflect.set(c.props,T,{get(u,h){return v.getValue(u,h)},set(u,h){v.setValue(u,h);}}),c},re=function(t,e,r,l,i,s="",n){let a={text:t,type:"textarea",attributes:{},props:{},description:l,placeholder:s,disabled:n,getValue(){return this.props[T].get(e,r)},callback(o,c){this.props[T].set(e,c);}};return Reflect.set(a.attributes,F,e),Reflect.set(a.attributes,W,r),Reflect.set(a.props,T,{get(o,c){return v.getValue(o,c)},set(o,c){v.setValue(o,c);}}),a};class be{constructor(e){X(this,"option");this.option=e;}async showView(){var n;let e=E.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist">
                            
                        </ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:!0},btn:x.assign({ok:{callback:async()=>{await s();}}},this.option.btn||{},!0),mask:{enable:!0},style:`
                ${E.config.cssText.panelCSS}
                
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
            `,width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh"}),r=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");let l=e.$shadowRoot.querySelector(".rule-form-ulist"),i=await this.option.getView(await this.option.data());l.appendChild(i);const s=async()=>{(await this.option.onsubmit(r,await this.option.data())).success&&(e.close(),await this.option.dialogCloseCallBack(!0));};}}const Oe={$el:{isFilterElementHTML:[]},$key:{STORAGE_KEY:"mt-post-comment-filter-rule"},init(){if(this.registerMenu(),ae.isPost()){let t=this.getData();if(!t.enable)return;let e=new x.LockFunction(()=>{this.runFilter(t);});x.mutationObserver(document,{config:{subtree:!0,childList:!0},callback:()=>{e.run();}});}},registerMenu(){Q.add({key:"comment-filter",text:"⚙ 评论过滤器",autoReload:!1,isStoreValue:!1,showText(t){return t},callback:()=>{this.showView();}});},runFilter(t){let e=function(l){for(const i of t.userBlackList)if(i==l.userName||i==l.userUID)return w.success("评论过滤器：黑名单用户",l),!0;return !1},r=function(l){for(const i of t.userWhiteList)if(i===l.userName||i===l.userUID)return w.success("评论过滤器：白名单用户",l),!0;return !1};document.querySelectorAll(".comiis_vrx").forEach(l=>{var s,n,a,o,c,u,h;if(l.querySelector(".plc .pti .authi .show"))return;let i={userName:((s=l.querySelector(".pls .authi a"))==null?void 0:s.innerText)||"",userUID:((c=(o=(a=(n=l.querySelector(".pls .authi a"))==null?void 0:n.href)==null?void 0:a.match(Z.uid))==null?void 0:o[1])==null?void 0:c.trim())||"",content:((h=(u=l.querySelector(".plc td.t_f"))==null?void 0:u.innerText)==null?void 0:h.trim())||"",isAuthor:!1};if(!r(i)){if(t.replyFlag&&l.querySelector(".quote")){let m=l.querySelector(".quote");this.$el.isFilterElementHTML.push(m.outerHTML),m.remove();}if(!(i.isAuthor&&!t.avatarFlag)){if(e(i)){this.$el.isFilterElementHTML.push(l.outerHTML),l.remove();return}if(!(typeof t.minLength=="number"&&t.minLength>i.content.length)&&!(typeof t.keywordLength=="number"&&t.keywordLength<i.content.length))for(const m of t.keywords){if(typeof m!="string")continue;let d=new RegExp(m);if(i.content.match(d)){console.log("评论过滤器：",i),this.$el.isFilterElementHTML.push(l.outerHTML),l.remove();return}}}}});},showView(){const t=this;function e(i){return {get(s,n){let a=t.getData(),o=Reflect.get(a,s,n);return (s==="keywords"||s==="userWhiteList"||s==="userBlackList")&&(o=o.join(`
`)),o},set(s,n){(s==="keywords"||s==="userWhiteList"||s==="userBlackList")&&(n=n.split(`
`).filter(a=>a.trim()!="")),Reflect.set(i,s,n),t.setData(i);}}}let r=E.config.panelHandleContentUtils();new be({title:"评论过滤器",data:()=>this.getData(),getView:i=>{let s=document.createDocumentFragment(),n=I("启用","enable",!0);Reflect.set(n.props,T,e(i));let a=r.createSectionContainerItem_switch(n),o=I("处理回复引用","replyFlag",!1,void 0,"移除引用");Reflect.set(o.props,T,e(i));let c=r.createSectionContainerItem_switch(o),u=I("处理作者评论","avatarFlag",!1);Reflect.set(u.props,T,e(i));let h=r.createSectionContainerItem_switch(u),m=I('处理从"搜索页面"或"我的帖子提醒页面"进入的网站',"viewthreadFlag",!1);Reflect.set(m.props,T,e(i));let d=r.createSectionContainerItem_switch(m),p=ie("匹配的评论内容长度最小值","minLength",5,"小于此长度的评论就算关键字匹配成功了也不会被排除",void 0,"",!0);Reflect.set(p.props,T,e(i));let g=r.createSectionContainerItem_input(p),k=ie("匹配的评论内容长度最大值","keywordLength",8,"大于此长度的评论就算关键字匹配成功了也不会被排除",void 0,"",!0);Reflect.set(k.props,T,e(i));let y=r.createSectionContainerItem_input(k),b=re("评论关键字","keywords","","多个评论关键字换行分割");Reflect.set(b.props,T,e(i));let $=r.createSectionContainerItem_textarea(b),M=re("黑名单用户","userBlackList","","多个用户换行分割");Reflect.set(M.props,T,e(i));let C=r.createSectionContainerItem_textarea(M),A=re("白名单用户","userWhiteList","","多个用户换行分割");Reflect.set(A.props,T,e(i));let S=r.createSectionContainerItem_textarea(A);return s.append(a,c,h,d,g,y,$,C,S),s},btn:{merge:!0,position:"space-between",ok:{enable:!1},cancel:{enable:!0,text:"关闭"},other:{enable:!0,text:`查看已过滤（${this.$el.isFilterElementHTML.length}）`,type:"primary",callback:(i,s)=>{E.alert({title:{text:"评论过滤器-已过滤",position:"center"},content:{text:`
                                ${Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(n=>n.outerHTML).join(`
`)}

                                ${this.$el.isFilterElementHTML.join(`
`)}
                                `,html:!0},mask:{enable:!0},style:`
							.plhin{
								width: 100%;
							}
							td.plc .pi{
								height: auto;
							}
							`,width:"88vw",height:"80vh"});}}},dialogCloseCallBack(i){},onsubmit:(i,s)=>({success:!0,data:s}),style:`
            .pops-panel-item-left-desc-text{
                line-height: normal;
                margin-top: 6px;
                font-size: 0.8em;
                color: rgb(108, 108, 108);
            }
            .pops-panel-item-left-main-text{
                max-width: unset;
            }
            .pops-panel-textarea textarea{
                height: 150px;
            }
            `}).showView();},getTemplateData(){return {enable:!0,avatarFlag:!1,replyFlag:!1,viewthreadFlag:!1,minLength:5,keywordLength:8,keywords:[],userBlackList:[],userWhiteList:[]}},getData(){return q(this.$key.STORAGE_KEY,this.getTemplateData())},setData(t){H(this.$key.STORAGE_KEY,t);}};class ze{constructor(e){X(this,"option");this.option=e;}showView(){let e=E.alert({title:{text:this.option.title,position:"center"},content:{text:`
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
            `}),r=e.$shadowRoot.querySelector(".filter-container"),l=document.createDocumentFragment();this.option.filterOption.forEach(i=>{let s=document.createElement("button");s.innerText=i.name;let n=async()=>{(await this.option.getAllRuleInfo()).forEach(async o=>{await i.filterCallBack(o.data)?f.show(o.$el,!1):f.hide(o.$el,!1);}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),e.close();};f.on(s,"click",async a=>{x.preventEvent(a),!(typeof i.callback=="function"&&!await i.callback(a,n))&&await n();}),l.appendChild(s);}),r.appendChild(l);}}class Be{constructor(e){X(this,"option");this.option=e;}async showView(){var l,i,s,n,a,o,c,u,h;let e=E.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:!0},btn:{merge:!0,reverse:!1,position:"space-between",ok:{enable:((s=(i=(l=this.option)==null?void 0:l.bottomControls)==null?void 0:i.add)==null?void 0:s.enable)||!0,type:"primary",text:"添加",callback:async m=>{this.showEditView(e.$shadowRoot,!1,await this.option.getAddData());}},close:{enable:!0,callback(m){e.close();}},cancel:{enable:((o=(a=(n=this.option)==null?void 0:n.bottomControls)==null?void 0:a.filter)==null?void 0:o.enable)||!1,type:"default",text:"过滤",callback:(m,d)=>{var k,y,b,$,M,C,A;typeof((b=(y=(k=this.option)==null?void 0:k.bottomControls)==null?void 0:y.filter)==null?void 0:b.callback)=="function"&&this.option.bottomControls.filter.callback();let p=()=>Array.from(e.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),g=d.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");f.text(g).includes("取消")?(p().forEach(S=>{f.show(S,!1);}),f.text(g,"过滤")):new ze({title:((M=($=this.option.bottomControls)==null?void 0:$.filter)==null?void 0:M.title)??"过滤规则",filterOption:((A=(C=this.option.bottomControls)==null?void 0:C.filter)==null?void 0:A.option)||[],execFilterCallBack(){f.text(g,"取消过滤");},getAllRuleInfo:()=>p().map(V=>({data:this.parseRuleItemElement(V).data,$el:V}))}).showView();}},other:{enable:((h=(u=(c=this.option)==null?void 0:c.bottomControls)==null?void 0:u.clear)==null?void 0:h.enable)||!0,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:m=>{let d=E.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:!1},btn:{ok:{enable:!0,callback:async p=>{var k,y,b;if(w.success("清空所有"),typeof((b=(y=(k=this.option)==null?void 0:k.bottomControls)==null?void 0:y.clear)==null?void 0:b.callback)=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){_.error("清理失败");return}else _.success("清理成功");await this.updateDeleteAllBtnText(e.$shadowRoot),this.clearContent(e.$shadowRoot),d.close();}},cancel:{text:"取消",enable:!0}},mask:{enable:!0},width:"300px",height:"200px"});}}},mask:{enable:!0},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
            ${E.config.cssText.panelCSS}
            
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
            `}),r=await this.option.data();for(let m=0;m<r.length;m++)await this.appendRuleItemElement(e.$shadowRoot,r[m]);}parseViewElement(e){let r=e.querySelector(".rule-view-container"),l=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:r,$deleteBtn:l}}parseRuleItemElement(e){let r=e.querySelector(".rule-controls-enable"),l=r.querySelector(".pops-panel-switch"),i=r.querySelector(".pops-panel-switch__input"),s=r.querySelector(".pops-panel-switch__core"),n=e.querySelector(".rule-controls-edit"),a=e.querySelector(".rule-controls-delete");return {$enable:r,$enableSwitch:l,$enableSwitchInput:i,$enableSwitchCore:s,$edit:n,$delete:a,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,r){let l=await this.option.getDataItemName(e),i=f.createElement("div",{className:"rule-item",innerHTML:`
			<div class="rule-name">${l}</div>
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
					${E.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${E.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(i,"data-rule",e);let s="pops-panel-switch-is-checked";const{$enable:n,$enableSwitch:a,$enableSwitchCore:o,$enableSwitchInput:c,$delete:u,$edit:h}=this.parseRuleItemElement(i);return this.option.itemControls.enable.enable?(f.on(o,"click",async m=>{let d=!1;a.classList.contains(s)?(a.classList.remove(s),d=!1):(a.classList.add(s),d=!0),c.checked=d,await this.option.itemControls.enable.callback(e,d);}),await this.option.itemControls.enable.getEnable(e)&&a.classList.add(s)):n.remove(),this.option.itemControls.edit.enable?f.on(h,"click",m=>{x.preventEvent(m),this.showEditView(r,!0,e,i,d=>{e=null,e=d;});}):h.remove(),this.option.itemControls.delete.enable?f.on(u,"click",m=>{x.preventEvent(m);let d=E.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:!1},btn:{ok:{enable:!0,callback:async p=>{w.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(_.success("成功删除该数据"),i.remove(),await this.updateDeleteAllBtnText(r),d.close()):_.error("删除该数据失败");}},cancel:{text:"取消",enable:!0}},mask:{enable:!0},width:"300px",height:"200px"});}):u.remove(),i}async appendRuleItemElement(e,r){const{$container:l}=this.parseViewElement(e);if(Array.isArray(r))for(let i=0;i<r.length;i++){const s=r[i];l.appendChild(await this.createRuleItemElement(s,e));}else l.appendChild(await this.createRuleItemElement(r,e));await this.updateDeleteAllBtnText(e);}async updateRuleContaienrElement(e){this.clearContent(e),this.parseViewElement(e);let r=await this.option.data();await this.appendRuleItemElement(e,r),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,r,l){let i=await this.createRuleItemElement(e,l);r.after(i),r.remove();}clearContent(e){const{$container:r}=this.parseViewElement(e);f.html(r,"");}setDeleteBtnText(e,r,l=!1){const{$deleteBtn:i}=this.parseViewElement(e);l?f.html(i,r):f.text(i,r);}async updateDeleteAllBtnText(e){let r=await this.option.data();this.setDeleteBtnText(e,`清空所有(${r.length})`);}showEditView(e,r,l,i,s){let n=async o=>{if(!o){if(r||await this.option.deleteData(l),typeof s=="function"){let c=await this.option.getData(l);s(c);}}};new be({title:r?"编辑":"添加",data:()=>l,dialogCloseCallBack:n,getView:async o=>await this.option.itemControls.edit.getView(o,r),btn:{ok:{enable:!0,text:r?"修改":"添加"},cancel:{callback:async(o,c)=>{o.close(),await n(!1);}},close:{callback:async(o,c)=>{o.close(),await n(!1);}}},onsubmit:async(o,c)=>{let u=await this.option.itemControls.edit.onsubmit(o,r,c);return u.success?r?(_.success("修改成功"),await this.updateRuleItemElement(u.data,i,e)):await this.appendRuleItemElement(e,u.data):r&&_.error("修改失败"),u},style:this.option.itemControls.edit.style}).showView();}}const Ne={$key:{STORAGE_KEY:"mt-productListingReminder-rule"},init(){this.registerMenu(),this.runRule();},registerMenu(){Q.add({key:"product-reminder",text:"⚙ 商品上架提醒",autoReload:!1,isStoreValue:!1,showText(t){return t},callback:()=>{this.showView();}});},async runRule(){async function t(){let l=await P.get("/keke_integralmall-keke_integralmall.html",{allowInterceptConfig:!1,headers:{"User-Agent":x.getRandomAndroidUA()}});if(!l.status){_.error("【积分商城】获取数据失败");return}let i=[];return f.parseHTML(l.data.responseText,!0,!0).querySelectorAll(".task-list-wrapper li.col-xs-12").forEach(n=>{var a,o;i.push({name:f.text(n.querySelector(".mall-info a > *:first-child"))||f.text(n.querySelector(".mall-info a")),price:f.text(n.querySelector(".mall-info span.discount-price i")),endTime:f.text(n.querySelector(".mall-info #time_hz span.time")),remainingQuantity:parseInt(((o=(a=n.querySelector(".mall-info .mall-count .count-r"))==null?void 0:a.innerText)==null?void 0:o.replace(/仅剩|件/gi,""))||"0")});}),i}if(ae.isPointsMall())return;let e=this.getData();if(!e.length)return;let r=await t();if(r){for(const l of r)for(const i of e)if(i.enable&&l.name.match(new RegExp(i.productName,"i"))&&!isNaN(l.remainingQuantity)&&l.remainingQuantity>0){w.success("成功匹配对应商品",i,l),E.confirm({title:{text:"积分商城提醒",position:"center"},content:{text:`<br />
                            您设置的商品已上架在积分商城中，当前售价 ${l.price}金币，仅剩${l.remainingQuantity}件，是否前往购买？
                            <a style="color: red !important;">(如需关闭提醒，请删除该关键字)</a>
                            <br />`,html:!0},btn:{merge:!0,position:"space-between",other:{enable:!0,type:"danger",text:"删除提醒",callback:()=>{this.deleteData(i)?_.success("删除成功"):_.error("删除失败");}},ok:{text:"前往购买",callback:()=>{window.location.href=`${window.location.origin}/keke_integralmall-keke_integralmall.html`;}}},width:"300px",height:"300px"});return}}},getTemplateData(){return {uuid:x.generateUUID(),enable:!0,name:"",productName:""}},showView(){let t=E.config.panelHandleContentUtils();function e(l){return {get(i,s){return l[i]??s},set(i,s){l[i]=s;}}}new Be({title:"商品上架提醒",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:l=>l.name,updateData:l=>this.updateData(l),deleteData:l=>this.deleteData(l),getData:l=>this.getData().find(n=>n.uuid===l.uuid)??l,itemControls:{enable:{enable:!0,getEnable(l){return l.enable},callback:(l,i)=>{l.enable=i,this.updateData(l);}},edit:{enable:!0,getView:(l,i)=>{let s=document.createDocumentFragment();i||(l=this.getTemplateData());let n=I("启用","enable",!0);Reflect.set(n.props,T,e(l));let a=t.createSectionContainerItem_switch(n),o=ie("规则名称","name","","",void 0,"必填");Reflect.set(o.props,T,e(l));let c=t.createSectionContainerItem_input(o),u=ie("商品名","productName","","",void 0,"可正则，需手动转义");Reflect.set(u.props,T,e(l));let h=t.createSectionContainerItem_input(u);return s.append(a,c,h),s},onsubmit:(l,i,s)=>{let n=l.querySelectorAll(".rule-form-ulist > li"),a=this.getTemplateData();return i&&(a.uuid=s.uuid),n.forEach(o=>{let c=Reflect.get(o,"__formConfig__"),u=Reflect.get(c,"attributes"),h=Reflect.get(o,T),m=Reflect.get(u,F),d=Reflect.get(u,W),p=h.get(m,d);Reflect.has(a,m)?Reflect.set(a,m,p):w.error(`${m}不在数据中`);}),a.name.trim()===""?(_.error("规则名称不能为空"),{success:!1,data:a}):i?{success:this.updateData(a),data:a}:{success:this.addData(a),data:a}}},delete:{enable:!0,deleteCallBack:l=>this.deleteData(l)}}}).showView();},getData(){return q(this.$key.STORAGE_KEY,[])},setData(t){H(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(l=>l.uuid==t.uuid)===-1?(e.push(t),H(this.$key.STORAGE_KEY,e),!0):!1},updateData(t){let e=this.getData(),r=e.findIndex(i=>i.uuid==t.uuid),l=!1;return r!==-1&&(l=!0,e[r]=t),this.setData(e),l},deleteData(t){let e=this.getData(),r=e.findIndex(i=>i.uuid==t.uuid),l=!1;return r!==-1&&(l=!0,e.splice(r,1)),this.setData(e),l},clearData(){le(this.$key.STORAGE_KEY);}},He=`.pops-confirm-content {\r
	display: flex;\r
	flex-direction: column;\r
}\r
.blackhome-user-filter input {\r
	width: -moz-available;\r
	width: -webkit-fill-available;\r
	height: 30px;\r
	margin: 8px 20px;\r
	border: 0;\r
	border-bottom: 1px solid;\r
	text-overflow: ellipsis;\r
	overflow: hidden;\r
	white-space: nowrap;\r
}\r
.blackhome-user-filter input:focus-within {\r
	outline: none;\r
}\r
.blackhome-user-list {\r
	flex: 1;\r
	overflow-y: auto;\r
}\r
.blackhome-user-list .blackhome-user-item {\r
	margin: 15px 10px;\r
	padding: 10px;\r
	border-radius: 8px;\r
	box-shadow: 0 0 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #fff;\r
}\r
.blackhome-user {\r
	display: flex;\r
}\r
.blackhome-user img {\r
	width: 45px;\r
	height: 45px;\r
	border-radius: 45px;\r
}\r
.blackhome-user-info {\r
	margin-left: 10px;\r
}\r
.blackhome-user-info p:nth-child(1) {\r
	margin-bottom: 5px;\r
}\r
.blackhome-user-info p:nth-child(2) {\r
	font-size: 14px;\r
}\r
.blackhome-user-action {\r
	display: flex;\r
	margin: 10px 0;\r
}\r
.blackhome-user-action p:nth-child(1),\r
.blackhome-user-action p:nth-child(2) {\r
	border: 1px solid red;\r
	color: red;\r
	border-radius: 4px;\r
	padding: 2px 4px;\r
	font-weight: 500;\r
	font-size: 14px;\r
	place-self: center;\r
}\r
.blackhome-user-action p:nth-child(2) {\r
	border: 1px solid #ff4b4b;\r
	color: #ff4b4b;\r
	margin-left: 8px;\r
}\r
.blackhome-user-uuid {\r
	border: 1px solid #ff7600;\r
	color: #ff7600;\r
	border-radius: 4px;\r
	padding: 2px 4px;\r
	font-weight: 500;\r
	font-size: 14px;\r
	width: fit-content;\r
	width: -moz-fit-content;\r
	margin: 10px 0;\r
}\r
.blackhome-operator {\r
	padding: 10px;\r
	background-color: #efefef;\r
	border-radius: 6px;\r
}\r
.blackhome-operator-user {\r
	display: flex;\r
}\r
.blackhome-operator-user img {\r
	width: 35px;\r
	height: 35px;\r
	border-radius: 35px;\r
}\r
.blackhome-operator-user p {\r
	align-self: center;\r
	margin-left: 10px;\r
}\r
.blackhome-operator-user-info {\r
	margin: 10px 0;\r
	font-weight: 500;\r
}\r
\r
@media screen and (min-width: 800px) {\r
	.blackhome-user-list {\r
		display: flex;\r
		flex-wrap: wrap;\r
	}\r
	.blackhome-user-list .blackhome-user-item {\r
		flex: 1 1 250px;\r
		max-width: calc(50% - 10px - 10px);\r
	}\r
}\r
`,Fe={$data:{cid:""},init(){this.registerMenu();},registerMenu(){Q.add({key:"black-home",text:"⚙ 小黑屋",autoReload:!1,isStoreValue:!1,showText(t){return t},callback:()=>{this.showBlackHome();}});},async showBlackHome(){let t=_.loading("正在获取小黑屋名单中..."),e=await this.getBlackListInfo("");if(t.close(),!e)return;if(e.data.length===0){_.error("获取小黑屋名单为空");return}this.$data.cid=e.next_cid;let r=E.confirm({title:{text:"小黑屋名单",position:"center"},content:{text:`
                <div class="blackhome-user-filter">
                    <input placeholder="过滤用户名/操作人员/UID(可正则)">
                </div>
                <div class="blackhome-user-list"></div>
                `,html:!0},btn:{ok:{text:"下一页",callback:async()=>{let a=_.loading("正在获取小黑屋名单中...");w.info("下一页的cid: ",this.$data.cid);let o=await this.getBlackListInfo(this.$data.cid);a.close(),o&&(this.$data.cid=o.next_cid,o.data.forEach(c=>{let u=this.createListViewItem(c);l.appendChild(u);}),o.data.length===0?_.error("获取小黑屋名单为空"):_.success(`成功获取 ${o.data.length}条数据`));}},cancel:{text:"关闭"}},width:Y.settingBig.width,height:Y.settingBig.height,style:He,mask:{enable:!0}}),l=r.$shadowRoot.querySelector(".blackhome-user-list"),i=r.$shadowRoot.querySelector(".blackhome-user-filter input");e.data.forEach(a=>{let o=this.createListViewItem(a);l.appendChild(o);}),_.success(`成功获取 ${e.data.length}条数据`);let s=!1;f.on(i,["input","propertychange"],x.debounce(()=>{let a=i.value.trim();if(!s){if(s=!0,a==""){r.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(o=>{o.removeAttribute("style");}),s=!1;return}r.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(o=>{o.getAttribute("data-name").match(new RegExp(a,"ig"))||o.getAttribute("data-uid").trim().match(new RegExp(a,"ig"))||o.getAttribute("data-operator").match(new RegExp(a,"ig"))?o.removeAttribute("style"):o.setAttribute("style","display:none;");}),s=!1;}}));let n=await this.getBlackListInfo(this.$data.cid);n&&(this.$data.cid=n.next_cid);},async getBlackListInfo(t=""){let e={mod:"misc",action:"showdarkroom",cid:t,ajaxdata:"json"},r=await P.get(`/forum.php?${x.toSearchParamsStr(e)}`,{headers:{"User-Agent":x.getRandomPCUA()},responseType:"json"});if(!r.status)return;let l=x.toJSON(r.data.responseText),i=l.message.split("|"),s=i[i.length-1],n=x.parseObjectToArray(l.data),a=[],o=[];return n.forEach(c=>{let u=c.dateline.match(/([0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]*[0-9]{1,2}:[0-9]{1,2})/g);if(u==null){let h=parseInt((Date.now()/1e3).toString()),m=0,d=c.dateline.match(/([0-9]+|半)[\s\S]*秒前/),p=c.dateline.match(/([0-9]+|半)[\s\S]*分钟前/),g=c.dateline.match(/([0-9]+|半)[\s\S]*小时前/),k=c.dateline.match(/昨天[\s\S]*(\d{2}):(\d{2})/),y=c.dateline.match(/前天[\s\S]*(\d{2}):(\d{2})/),b=c.dateline.match(/([0-9]+|半)[\s\S]*天前/);if(d)d=d[d.length-1],d=d.replace(/半/g,.5),d=parseFloat(d),m=h-d;else if(p)p=p[p.length-1],p=p.replace(/半/g,.5),p=parseFloat(p),m=h-p*60;else if(g)g=g[g.length-1],g=g.replace(/半/g,.5),g=parseFloat(g),m=h-g*60*60;else if(k){let $=k[1],M=k[2];m=h-86400-parseInt($)*3600-parseInt(M)*60;}else if(y){let $=y[1],M=y[2];m=h-86400*2-parseInt($)*3600-parseInt(M)*60;}else b&&(b=b[b.length-1],b=b.replace(/半/g,.5),b=parseFloat(b),m=h-b*60*60*24);c.time=parseInt(m.toString())*1e3,a=a.concat(c);return}else u=u[0];c.time=x.formatToTimeStamp(u),a=a.concat(c);}),x.sortListByProperty(a,"time"),x.sortListByProperty(o,"time",!1),a=a.concat(o),{next_cid:s,data:a}},createListViewItem(t){let e=f.createElement("div",{className:"blackhome-user-item",innerHTML:`
                <div class="blackhome-user-avatar">
                    <div class="blackhome-user">
                    <img src="${D.getAvatar(t.uid,"big")}" loading="lazy">
                    <div class="blackhome-user-info">
                        <p>${t.username}</p>
                        <p>${t.dateline}</p>
                    </div>
                    </div>
                    <div class="blackhome-user-action">
                    <p>${t.action}</p>
                    <p>到期: ${t.groupexpiry}</p>
                    </div>
                    <div class="blackhome-user-uuid">UID: ${t.uid}</div>
                    <div class="blackhome-operator">
                    <div class="blackhome-operator-user">
                        <img loading="lazy" src="${D.getAvatar(t.operatorid,"big")}">
                        <p>${t.operator}</p>
                    </div>
                    <div class="blackhome-operator-user-info">
                    ${t.reason}
                    </div>
                    </div>
                </div>
                `},{"data-name":t.username,"data-uid":t.uid,"data-operator":t.operator,"data-operator-uid":t.operatorid});return f.on(e,"click",".blackhome-user img",function(){window.open(`home.php?mod=space&uid=${t.uid}&do=profile`,"_blank");}),f.on(e,"click",".blackhome-operator-user img",function(){window.open(`home.php?mod=space&uid=${t.operatorid}&do=profile`,"_blank");}),e}},We=`.pops-alert-content {\r
	display: flex;\r
	flex-direction: column;\r
}\r
.pops-alert-content > .online-user-info {\r
	text-align: center;\r
	padding: 0px 6px;\r
}\r
.online-user-filter input {\r
	width: -webkit-fill-available;\r
	width: -moz-available;\r
	height: 30px;\r
	margin: 8px 20px;\r
	border: 0;\r
	border-bottom: 1px solid;\r
}\r
.online-user-filter input:focus-within {\r
	outline: none;\r
}\r
.online-user-list {\r
	flex: 1;\r
	overflow-y: auto;\r
}\r
.online-user-list li {\r
	margin: 18px 0;\r
}\r
.online-user {\r
	display: flex;\r
	margin: 2px 20px;\r
	align-items: center;\r
}\r
.online-user img[data-avatar] {\r
	width: 45px;\r
	height: 45px;\r
	border-radius: 45px;\r
}\r
.online-user-list .online-user-info {\r
	margin: 2px 14px;\r
}\r
.online-user-list .online-user-info p[data-name] {\r
	margin-bottom: 4px;\r
}\r
.online-user-list .online-user-info span[data-sf] {\r
	border-radius: 4px;\r
	padding: 2px 4px;\r
	font-weight: 500;\r
	font-size: 14px;\r
}\r
.online-user-list .online-user-info span[data-uid] {\r
	border: 1px solid #ff7600;\r
	color: #ff7600;\r
	border-radius: 4px;\r
	padding: 2px 4px;\r
	font-weight: 500;\r
	font-size: 14px;\r
	width: fit-content;\r
	width: -moz-fit-content;\r
	margin: 10px 0;\r
}\r
.online-user-list .online-user-info span[data-sf="会员"] {\r
	color: #88b500;\r
	border: 1px solid #88b500;\r
}\r
.online-user-list .online-user-info span[data-sf="版主"] {\r
	color: #2db5e3;\r
	border: 1px solid #2db5e3;\r
}\r
.online-user-list .online-user-info span[data-sf="超级版主"] {\r
	color: #e89e38;\r
	border: 1px solid #e89e38;\r
}\r
.online-user-list .online-user-info span[data-sf="管理员"] {\r
	color: #ff5416;\r
	border: 1px solid #ff5416;\r
}\r
\r
@media screen and (min-width: 800px) {\r
	.online-user-list {\r
		display: flex;\r
		flex-wrap: wrap;\r
	}\r
	.online-user-list .online-item {\r
		flex: 1 1 250px;\r
	}\r
}\r
`,Ge={$data:{},init(){this.registerMenu();},registerMenu(){Q.add({key:"online-user",text:"⚙ 在线用户",autoReload:!1,isStoreValue:!1,showText(t){return t},callback:()=>{this.showOnlineUser();}});},async showOnlineUser(){let t=_.loading("正在获取在线用户名单中..."),e=await this.getOnlineUserListInfo();if(t.close(),!e)return;let r=E.alert({title:{text:"在线用户",position:"center"},content:{text:`
                <div class="online-user-info">${e.totalOnline} 人在线 - ${e.onlineUser} 会员${e.invisibleUser==0?"":`(${e.invisibleUser}隐身)`} - ${e.noRegisterUser} 位游客</div>
                <div class="online-user-filter">
                    <input placeholder="过滤用户名/身份/UID(可正则)"></div>
                <div class="online-user-list"></div>
                `,html:!0},btn:{ok:{text:"关闭",type:"default"}},width:Y.settingBig.width,height:Y.settingBig.height,style:We,mask:{enable:!0}}),l=r.$shadowRoot.querySelector(".online-user-list"),i=r.$shadowRoot.querySelector(".online-user-filter input");e.data.forEach(n=>{let a=this.createListViewItem(n);l.appendChild(a);}),_.success(`成功获取 ${e.data.length}条数据`);let s=!1;ee.on(i,["propertychange","input"],x.debounce(()=>{let n=i.value.trim();if(!s){if(s=!0,n==""){r.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(a=>{a.removeAttribute("style");}),s=!1;return}r.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(a=>{a.getAttribute("data-name").match(new RegExp(n,"ig"))||a.getAttribute("data-sf").match(new RegExp(n,"ig"))||a.getAttribute("data-uid").match(new RegExp(n,"ig"))?a.removeAttribute("style"):a.setAttribute("style","display:none;");}),s=!1;}}));},async getOnlineUserListInfo(){let t={showoldetails:"yes"},e=await P.get(`/forum.php?${x.toSearchParamsStr(t)}`,{headers:{"User-Agent":x.getRandomPCUA()}});if(!e.status)return;let r=x.parseFromString(e.data.responseText,"text/html"),l={data:[],totalOnline:0,onlineUser:0,noRegisterUser:0,invisibleUser:0};r.querySelectorAll("#onlinelist ul li").forEach(n=>{let a=n.querySelector("a").getAttribute("href").match("uid-(.+?).html")[1],o=D.getAvatar(a,"middle"),c=n.querySelector("a").innerText,u="",h=n.querySelector("a").getAttribute("href"),m=n.querySelector("img").src;m.indexOf("online_member")!=-1?u="会员":m.indexOf("online_moderator")!=-1?u="版主":m.indexOf("online_supermod")!=-1?u="超级版主":m.indexOf("online_admin")!=-1?u="管理员":u="未知身份",l.data.push({uid:a,avatar:o,name:c,sf:u,space:h});});let s=r.querySelector("#online div.bm_h span.xs1").textContent;return l.totalOnline=x.parseInt(s.match(/([0-9]*)\s*人在线/i),0),l.onlineUser=x.parseInt(s.match(/([0-9]*)\s*会员/i),0),l.noRegisterUser=x.parseInt(s.match(/([0-9]*)\s*位游客/i),0),l.invisibleUser=x.parseInt(s.match(/([0-9]*)\s*隐身/i),0),l},createListViewItem(t){let e=ee.createElement("div",{className:"online-item",innerHTML:`
                <div class="online-user">
                    <img data-avatar src="${t.avatar}" loading="lazy" class="online-user-avatar">
                    <div class="online-user-info">
                        <p data-name>${t.name}</p>
                        <span data-sf="${t.sf}">${t.sf}</span>
                        <span data-uid>UID: ${t.uid}</span>
                    </div>
                </div>
            `},{"data-name":t.name,"data-uid":t.uid,"data-sf":t.sf});return ee.on(e,"click",".online-user-avatar",r=>{x.preventEvent(r),window.open(`home.php?mod=space&uid=${t.uid}&do=profile`,"_blank");}),e}},je={$flag:{showUserUID_initCSS:!1},init(){v.onceExec("mt-MTCommentFilter",()=>{Oe.init();}),ae.isPost()?(w.info("Router: 帖子"),we.init()):ae.isGuide()?(w.info("Router: 导读"),qe.init()):w.error("Router: 未适配的链接 ==> "+window.location.href),f.ready(()=>{v.onceExec("mt-MTProductListingReminder",()=>{Ne.init();}),v.onceExec("mt-blackHome",()=>{Fe.init();}),v.onceExec("mt-onlineUser",()=>{Ge.init();}),v.execMenuOnce("mt-link-text-to-hyperlink",()=>{Pe();}),v.execMenuOnce("mt-addLatestPostBtn",()=>{this.addLatestPostBtn();}),v.execMenu("mt-auto-sign",()=>{G.init();});});},addLatestPostBtn(){w.info("新增【最新发表】"),f.append("#comiis_nv .wp.comiis_nvbox.cl ul",`
			<li id="latest_publication">
				<a href="/forum.php?mod=guide&view=newthread" hidefocus="true" title="最新发表">最新发表</a>
			</li>
		`),window.location.href.includes("/forum.php?mod=guide&view=newthread")&&(f.removeClass("#mn_forum_10","a"),f.css("#latest_publication a","background",'url("https://cdn-bbs.mt2.cn/template/comiis_mi/img/nv_a.png") repeat-x 50% -50px'));}};v.init();je.init();});Ye();

})(Qmsg, DOMUtils, Utils, pops, hljs, Viewer);