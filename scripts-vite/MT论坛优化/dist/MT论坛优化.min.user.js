// ==UserScript==
// @name         MT论坛优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.12.20
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
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.9.6/dist/index.umd.js
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

(function (S, J, G, ne, X, ke) {
	'use strict';

	var Ae=Object.defineProperty;var ye=(t,e,l)=>e in t?Ae(t,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[e]=l;var Se=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Z=(t,e,l)=>ye(t,e+"",l);var je=Se((ve,oe)=>{var le=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,ce=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,q=typeof GM_getValue<"u"?GM_getValue:void 0,ee=typeof GM_info<"u"?GM_info:void 0,Te=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,W=typeof GM_setValue<"u"?GM_setValue:void 0,Ce=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Ie=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,U=typeof unsafeWindow<"u"?unsafeWindow:void 0,Me=window;const Ee={$data:{get enable(){return b.getValue("httpx-use-cookie-enable")},get useDocumentCookie(){return b.getValue("httpx-use-document-cookie")},cookieRule:[]},fixCookieSplit(t){return x.isNotNull(t)&&!t.trim().endsWith(";")&&(t+=";"),t},concatCookie(t,e){return x.isNull(t)?e:(t=t.trim(),e=e.trim(),t=this.fixCookieSplit(t),e.startsWith(";")&&(e=e.substring(1)),t.concat(e))},handle(t){if(t.fetch||!this.$data.enable)return;let e="",l=t.url;l.startsWith("//")&&(l=window.location.protocol+l);let r=new URL(l);this.$data.useDocumentCookie&&r.hostname.endsWith(window.location.hostname.split(".").slice(-2).join("."))&&(e=this.concatCookie(e,document.cookie.trim()));for(let i=0;i<this.$data.cookieRule.length;i++){let s=this.$data.cookieRule[i];if(r.hostname.match(s.hostname)){let n=b.getValue(s.key);if(x.isNull(n))break;e=this.concatCookie(e,n);}}x.isNotNull(e)&&(t.headers&&t.headers.Cookie?t.headers.Cookie=this.concatCookie(t.headers.Cookie,e):t.headers.Cookie=e,w.info(["Httpx => 设置cookie:",t])),t.headers&&t.headers.Cookie!=null&&x.isNull(t.headers.Cookie)&&delete t.headers.Cookie;}},se={addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(l=>{Array.isArray(l)?e=e.concat(l):e.push(l);}),V(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){let e=typeof ce=="function"?ce(t.keyName):"";typeof e=="string"&&e?V(e):se.loadStyleLink(t.url);},async loadStyleLink(t){let e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=t,f.ready(()=>{document.head.appendChild(e);});},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(l=>{e.onload=()=>{l(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.match(/^http(s|):\/\//i)||(t.startsWith("/")||(t+="/"),t=window.location.origin+t),t},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;let e=new URL(t);return e.protocol="https:",e.toString()}},fe={ElementPlus:{keyName:"ElementPlusResourceCSS",url:"https://fastly.jsdelivr.net/npm/element-plus@latest/dist/index.min.css"},Viewer:{keyName:"ViewerCSS",url:"https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"},Hljs:{keyName:"HljsCSS",url:"https://fastly.jsdelivr.net/npm/highlight.js@latest/styles/github-dark.min.css"}};(function(t,e){typeof ve=="object"&&typeof oe<"u"?oe.exports=e():(t=typeof globalThis<"u"?globalThis:t||self,t.Watermark=e(t.Watermark));})(typeof window<"u"?window:void 0,function(t){let e=function(){};CanvasRenderingContext2D.prototype.letterSpacingText=function(n,a,o,c){var u=this,h=u.canvas;if(!c&&h&&(c=parseFloat(window.getComputedStyle(h).letterSpacing)),!c)return this.fillText(n,a,o);var m=n.split(""),d=u.textAlign||"left",p=u.measureText(n).width,g=p+c*(m.length-1);d=="center"?a=a-g/2:d=="right"&&(a=a-g),u.textAlign="left",m.forEach(function(y){var A=u.measureText(y).width;u.fillText(y,a,o),a=a+A+c;}),u.textAlign=d;},CanvasRenderingContext2D.prototype.wrapText=function(n,a,o,c,u,h){if(!(typeof n!="string"||typeof a!="number"||typeof o!="number")){var m=this,d=m.canvas;typeof c>"u"&&(c=d&&d.width||300),typeof u>"u"&&(u=d&&parseInt(window.getComputedStyle(d).lineHeight)||parseInt(window.getComputedStyle(document.body).lineHeight));for(var p=n.split(""),g="",y=0;y<p.length;y++){var A=g+p[y],v=m.measureText(A),C=v.width;C>c&&y>0?(h?m.strokeText(g,a,o,d.width):m.fillText(g,a,o),g=p[y],o+=u):g=A;}h?m.strokeText(g,a,o,d.width):m.fillText(g,a,o);}},CanvasRenderingContext2D.prototype.fillTextVertical=function(n,a,o){var c=this;c.canvas;var u=n.split(""),h=u.map(function(p){return c.measureText(p).width}),m=c.textAlign,d=c.textBaseline;m=="left"?a=a+Math.max.apply(null,h)/2:m=="right"&&(a=a-Math.max.apply(null,h)/2),d=="bottom"||d=="alphabetic"||d=="ideographic"?o=o-h[0]/2:(d=="top"||d=="hanging")&&(o=o+h[0]/2),c.textAlign="center",c.textBaseline="middle",u.forEach(function(p,g){var A=h[g],y=p.charCodeAt(0);y<=256?(c.translate(a,o),c.rotate(90*Math.PI/180),c.translate(-a,-o)):g>0&&n.charCodeAt(g-1)<256&&(o=o+h[g-1]/2),c.fillText(p,a,o),c.setTransform(1,0,0,1,0,0);var A=h[g];o=o+A;}),c.textAlign=m,c.textBaseline=d;};function l(n){let a=new FileReader;return new Promise(o=>{a.onloadend=async function(c){o(c);},a.readAsDataURL(n);})}function r(n){let a=new Image;return new Promise(o=>{a.onload=()=>{o(a);},a.src=n;})}function i(n,a,o){let c=!1;return Array.from(n).forEach(u=>{if(u.x==a&&u.y==o){c=!0;return}}),c}function s(n){return n instanceof Array?n[Math.floor(Math.random()*n.length)]:n}return e.prototype.setFile=function(n){let a=this;return new Promise(async o=>{try{var c=await l(n);await a.setImage(c.target.result),o(!0);}catch{o(!1);}})},e.prototype.setImage=function(n){this.dataUrl=n;let a=this;return new Promise(async o=>{var c=await r(n);a.sizes={width:c.width,height:c.height};var u=document.createElement("canvas");u.width=a.sizes.width,u.height=a.sizes.height;var h=u.getContext("2d");h.drawImage(c,0,0),c=null,a.canvas=u,o(!0);})},e.prototype.hasImage=function(){return !!this.dataUrl},e.prototype.getSize=function(){return this.sizes},e.prototype.clearMark=function(){let n=this;if(typeof n.canvas>"u")return;function a(){var o=n.canvas.getContext("2d");o.clearRect(0,0,n.canvas.width,n.canvas.height);var c=n.canvas.width,u=n.canvas.height;n.canvas.width=c,n.canvas.height=u,o.beginPath();var h=new Image;h.src=n.dataUrl,o.drawImage(h,0,0),h=null;}a();},e.prototype.addText=function(n){var a={text:["Call By waterMark.addText"],fontSize:"6vw",fontFamily:"Microsoft Yahei",color:"#000000",textAlign:"center",stroke:!1,globalAlpha:.7,rotateAngle:50,maxWidth:100,xMoveDistance:30,yMoveDistance:30};for(let E in a)typeof n[E]<"u"&&(a[E]=n[E]);a.maxWidth=parseInt(a.maxWidth)>0?a.maxWidth:1,a.xMoveDistance=parseInt(a.xMoveDistance)>0?a.xMoveDistance:1,a.yMoveDistance=parseInt(a.yMoveDistance)>0?a.yMoveDistance:1;var o=this.canvas.getContext("2d"),c=a.fontSize;c=c.toString(),~c.indexOf("vw")&&(c=(this.sizes.width/100*parseInt(c)).toFixed(0)),c=parseInt(c),o.font=c+"px "+a.fontFamily,o.fillStyle=a.color,o.textAlign=a.textAlign,o.globalAlpha=a.globalAlpha;let u=this.sizes.width,h=this.sizes.height,m=a.rotateAngle*Math.PI/180,d=a.xMoveDistance,p=a.yMoveDistance,g=a.maxWidth,y=c,A=[];for(var v=u/2;v<u;v+=d){for(var C=h/2;C<h;C+=p)i(A,v,C)||(A=A.concat({x:v,y:C}),o.setTransform(1,0,0,1,0,0),o.translate(v,C),o.rotate(m),o.wrapText(s(a.text),0,0,g,y,a.stroke));for(var I=h/2;I>0;I-=p)i(A,v,I)||(A=A.concat({x:v,y:I}),o.setTransform(1,0,0,1,0,0),o.translate(v,I),o.rotate(m),o.wrapText(s(a.text),0,0,g,y,a.stroke));}for(var v=u/2;v>0;v-=d){for(var C=h/2;C<h;C+=p)i(A,v,C)||(A=A.concat({x:v,y:C}),o.setTransform(1,0,0,1,0,0),o.translate(v,C),o.rotate(m),o.wrapText(s(a.text),0,0,g,y,a.stroke));for(var I=h/2;I>0;I-=p)i(A,v,I)||(A=A.concat({x:v,y:I}),o.setTransform(1,0,0,1,0,0),o.translate(v,I),o.rotate(m),o.wrapText(s(a.text),0,0,g,y,a.stroke));}},e.prototype.addPixelText=function(n){var a={text:"像素文字水印",big:{fontSize:150,fontFamily:"微软雅黑",textAlign:"center",rotateAngle:0,stroke:!1},small:{fontSize:10,fontFamily:"微软雅黑",color:"#000",textAlign:"center",globalAlpha:.7}};for(let v in a)typeof n[v]<"u"&&(a[v]=n[v]);var o=this.canvas.getContext("2d"),c=document.createElement("canvas"),u=c.getContext("2d");c.width=this.sizes.width,c.height=this.sizes.height,u.font=a.big.fontSize+"px "+a.big.fontFamily,u.textAlign=a.big.textAlign,u.textBaseline="middle",u.translate(c.width/2,c.height/2),u.rotate(a.big.rotateAngle*Math.PI/180),u.translate(-c.width/2,-c.height/2),a.big.stroke?u.strokeText(a.text,c.width/2,c.height/2,c.width):u.fillText(a.text,c.width/2,c.height/2);for(var h=a.text.split(""),m=u.getImageData(0,0,c.width,c.height),d=[],p=0;p<c.height;p+=a.small.fontSize)for(var g=0;g<c.width;g+=a.small.fontSize){var y=g+p*c.width,A=m.data[y*4+3];A>128&&d.push({text:s(h),x:g,y:p});}o.font=a.small.fontSize+"px "+a.small.fontFamily,o.fillStyle=a.small.color,o.textAlign=a.small.textAlign,o.textBaseline="middle",o.globalAlpha=a.small.globalAlpha,d.forEach(v=>{o.fillText(v.text,v.x,v.y);});},e.prototype.addImage=function(n){if(n.imageArray==null)return alert("参数缺少imageArray"),!1;if(n.imageArray.length===0)return alert("参数imageArray不能为空"),!1;let a={imageArray:[],width:50,height:50,globalAlpha:.5,rotateAngle:0,xMoveDistance:70,yMoveDistance:70};for(let T in a)typeof n[T]<"u"&&(a[T]=n[T]);a.width=parseInt(a.width)>0?a.width:1,a.height=parseInt(a.height)>0?a.height:1,a.xMoveDistance=parseInt(a.xMoveDistance)>0?a.xMoveDistance:1,a.yMoveDistance=parseInt(a.yMoveDistance)>0?a.yMoveDistance:1;let o=this.canvas.getContext("2d"),c=[],u=parseInt(Math.sqrt(a.width*a.width+a.height*a.height)),h=this.sizes.width,m=this.sizes.height,d=a.rotateAngle*Math.PI/180,p=a.xMoveDistance,g=a.yMoveDistance,y=h/2-u/2,A=m/2-u/2,v=(u-a.width)/2,C=(u-a.height)/2;Array.from(a.imageArray).forEach(T=>{var k=document.createElement("canvas"),H=k.getContext("2d");k.width=u,k.height=u,H.globalAlpha=a.globalAlpha,H.translate(u/2,u/2),H.rotate(d),H.translate(-u/2,-u/2),H.drawImage(T,v,C,a.width,a.height),c=c.concat(k);});function I(T){return T[Math.floor(Math.random()*T.length)]}o.setTransform(1,0,0,1,0,0);let E=[];for(let T=y;T<h;T+=p){for(let k=A;k<m;k+=g)i(E,T,k)||(E=E.concat({x:T,y:k}),o.drawImage(I(c),T,k));for(let k=A;k>-Math.abs(u);k-=g)i(E,T,k)||(E=E.concat({x:T,y:k}),o.drawImage(I(c),T,k));}for(let T=y;T>-Math.abs(u);T-=p){for(let k=A;k<m;k+=g)i(E,T,k)||(E=E.concat({x:T,y:k}),o.drawImage(I(c),T,k));for(let k=A;k>-Math.abs(u);k-=g)i(E,T,k)||(E=E.concat({x:T,y:k}),o.drawImage(I(c),T,k));}},e.prototype.getPreview=function(){return this.dataUrl},e.prototype.render=function(n){return n=n==="png"?"png":"jpeg",this.canvas.toDataURL("image/"+n)},e.prototype.renderBlob=function(){let n=this;return new Promise(a=>{n.canvas.toBlob(function(o){a(window.URL.createObjectURL(o));});})},e.prototype.noConflict=function(){return window.Watermark&&delete window.Watermark,t&&(window.Watermark=t),e},e});const Re="MT论坛优化",x=G.noConflict(),f=J.noConflict(),D=ne,w=new x.Log(ee,U.console||Me.console);var me;const ue=((me=ee==null?void 0:ee.script)==null?void 0:me.name)||Re,ge=!1;w.config({debug:ge,logMaxCount:1e3,autoClearConsole:!0,tag:!0});S.config(Object.defineProperties({html:!0,autoClose:!0,showClose:!1},{position:{get(){return b.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return b.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return b.getValue("qmsg-config-showreverse",!0)}},zIndex:{get(){let t=G.getMaxZIndex(),e=ne.config.InstanceUtils.getPopsMaxZIndex().zIndex;return G.getMaxValue(t,e)+100}}}));const Y=new x.GM_Menu({GM_getValue:q,GM_setValue:W,GM_registerMenuCommand:Te,GM_unregisterMenuCommand:Ce}),N=new x.Httpx(Ie);N.interceptors.request.use(t=>(Ee.handle(t),t));N.interceptors.response.use(void 0,t=>(w.error(["拦截器-请求错误",t]),t.type==="onabort"?S.warning("请求取消"):t.type==="onerror"?S.error("请求异常"):t.type==="ontimeout"?S.error("请求超时"):S.error("其它错误"),t));N.config({logDetails:ge});ne.GlobalConfig.setGlobalConfig({mask:{enable:!0,clickEvent:{toClose:!1,toHide:!1}}});U.Object.defineProperty,U.Function.prototype.apply,U.Function.prototype.call,U.Element.prototype.appendChild,U.setTimeout;const V=x.addStyle.bind(x);se.setGMResourceCSS(fe.Viewer);se.setGMResourceCSS(fe.Hljs);const F=document.querySelector.bind(document),z=document.querySelectorAll.bind(document),P="GM_Panel",xe="data-init",Q="data-key",$="data-default-value",De="data-init-more-value",M="data-storage-api",R=function(t,e,l,r,i,s){let n={text:t,type:"switch",description:i,attributes:{},props:{},getValue(){return !!this.props[M].get(e,l)},callback(a,o){let c=!!o;w.success(`${c?"开启":"关闭"} ${t}`),this.props[M].set(e,c);},afterAddToUListCallBack:s};return Reflect.set(n.attributes,Q,e),Reflect.set(n.attributes,$,l),Reflect.set(n.props,M,{get(a,o){return b.getValue(a,o)},set(a,o){b.setValue(a,o);}}),n},de=function(t,e,l,r,i,s){let n=[];typeof r=="function"?n=r():n=r;let a={text:t,type:"select",description:s,attributes:{},props:{},getValue(){return this.props[M].get(e,l)},callback(o,c,u){let h=c;w.info(`选择：${u}`),this.props[M].set(e,h),typeof i=="function"&&i(o,h,u);},data:n};return Reflect.set(a.attributes,Q,e),Reflect.set(a.attributes,$,l),Reflect.set(a.props,M,{get(o,c){return b.getValue(o,c)},set(o,c){b.setValue(o,c);}}),a},pe=function(t,e,l,r,i,s,n,a,o){return {text:t,type:"button",description:e,buttonIcon:r,buttonIsRightIcon:i,buttonIconIsLoading:s,buttonType:n,buttonText:l,callback(u){typeof a=="function"&&a(u);},afterAddToUListCallBack:o}},he=function(t,e,l,r){let i={type:"own",attributes:{},props:l,getLiElementCallBack:t,afterAddToUListCallBack:r};return Reflect.set(i.attributes,xe,()=>!1),i},te={formhash:/formhash=([0-9a-zA-Z]+)/,hash:/hash=(.+)&/,uid:/uid(=|-)(\d+)/,fontSpecial:/<font.*?>|<\/font>|<strike>|<strong>|<i>|<u>|align=".*?"|<br>[\s]*<br>[\s]*<br>/g,ptid:/&ptid=([\d]+)/i,pid:/&pid=([\d]+)/i,tid:/&tid=([\d]+)/i},B={getAvatar:(t,e="middle")=>`/uc_server/avatar.php?uid=${t}&size=${e}&ts=1`,getCurrentUID(){let t=U.discuz_uid;if(typeof t=="string")return t;let e=F('.sidenv_exit a[href*="uid-"]')||F('#comiis_key a[href*="uid-"]');if(e){let l=e.href.match(/uid=([0-9]+)/);if(l)return l[l.length-1]}},getFormHash(){let t=Array.from((top||globalThis).document.querySelectorAll("input[name=formhash]"));for(let l=0;l<t.length;l++){let i=t[l].value;if(i)return i}let e=Array.from((top||globalThis).document.querySelectorAll('a[href*="formhash="]'));for(let l=0;l<e.length;l++){let i=e[l].href.match(te.formhash);if(i){let s=i[i.length-1];if(s)return s}}},envIsMobile(){return (U.STYLEID||window.STYLEID||typeof STYLEID<"u"&&STYLEID)==="3"},getThreadId:t=>{let e=t.match(/thread-([\d]+)-|&tid=([\d]+)/i);if(e){let l=e.filter(Boolean);return l[l.length-1]}},getForumId(t){let e=t.match(/&fid=([\d]+)/i);if(e)return e[e.length-1]},getPostId(t){let e=t.match(/&pid=([\d]+)/i);if(e)return e[e.length-1]},getRepquote(t){let e=t.match(/&repquote=([\d]+)/i);if(e)return e[e.length-1]}},_={$upload:{small:!1,middle:!1,big:!1},$data:{avatarInfo:{maxSize:2097152,small:{width:48,height:48},middle:{width:120,height:120},big:{width:200,height:250}}},$el:{$smallUpload:null,$middleUpload:null,$bigUpload:null,$smallStatus:null,$middleStatus:null,$bigStatus:null},$avatar:{get small(){return _.$el.$smallUpload.files[0]},get middle(){return _.$el.$middleUpload.files[0]},get big(){return _.$el.$bigUpload.files[0]}},init(){this.showView();},showView(){const t=this;let e=D.confirm({title:{text:"修改头像",position:"center"},content:{text:`
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
                `,html:!0},btn:{ok:{text:"上传",callback:async()=>{if(!t.$upload.small){S.error("请上传小头像");return}if(!t.$upload.middle){S.error("请上传中头像");return}if(!t.$upload.big){S.error("请上传大头像");return}let l=S.loading("正在处理数据中...");try{let r=await this.getUploadUrl();if(r==null)return;let i=B.getFormHash();if(i==null){S.error("获取formhash失败");return}let s={big:{base64:await x.parseFileToBase64(this.$avatar.big)},middle:{base64:await x.parseFileToBase64(this.$avatar.middle)},small:{base64:await x.parseFileToBase64(this.$avatar.small)}};Object.keys(s).forEach(o=>{let c=s[o];c.base64=c.base64.substring(c.base64.indexOf(",")+1);});let n=new FormData;n.append("Filedata",this.$avatar.big||""),n.append("confirm","确定"),n.append("avatar1",s.big.base64),n.append("avatar2",s.middle.base64),n.append("avatar3",s.small.base64),n.append("formhash",i),w.info("头像的base64字符串",s);let a=await N.post(r,{data:n,processData:!1,headers:{Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9","User-Agent":x.getRandomPCUA(),Host:window.location.hostname,Origin:window.location.origin,Referer:`${window.location.origin}/home.php?mod=spacecp&ac=avatar`}});if(!a.status)return;a.data.responseText.indexOf("window.parent.postMessage('success','*')")!=-1?(e.close(),S.success("上传成功")):(w.error("上传失败",a),S.error(a.data.responseText,{timeout:6e3,isHTML:!1,html:!1}));}catch(r){w.error(r);}finally{l.close();}}}},mask:{enable:!0},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
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
            `});this.$el.$smallUpload=e.$shadowRoot.querySelector(".avatar-upload[data-type='small']"),this.$el.$middleUpload=e.$shadowRoot.querySelector(".avatar-upload[data-type='middle']"),this.$el.$bigUpload=e.$shadowRoot.querySelector(".avatar-upload[data-type='big']"),this.$el.$smallStatus=e.$shadowRoot.querySelector(".avatar-upload-status[data-type='small']"),this.$el.$middleStatus=e.$shadowRoot.querySelector(".avatar-upload-status[data-type='middle']"),this.$el.$bigStatus=e.$shadowRoot.querySelector(".avatar-upload-status[data-type='big']"),this.setUploadChangeEvent(this.$el.$smallUpload,this.$el.$smallStatus,this.$data.avatarInfo.small,()=>{this.$upload.small=!0;}),this.setUploadChangeEvent(this.$el.$middleUpload,this.$el.$middleStatus,this.$data.avatarInfo.middle,()=>{this.$upload.middle=!0;}),this.setUploadChangeEvent(this.$el.$bigUpload,this.$el.$bigStatus,this.$data.avatarInfo.big,()=>{this.$upload.big=!0;});},setUploadChangeEvent(t,e,l,r){f.on(t,"change",i=>{var c;if(!((c=t.files)!=null&&c.length))return;f.text(e,"🤡获取文件信息中..."),e.removeAttribute("data-success");let s=t.files[0],n=s.size,a=new Image,o=new FileReader;o.readAsDataURL(s),o.onload=function(u){a.src=u.target.result,a.onload=function(){if(a.width>l.width||a.height>l.height){t.value="",e.setAttribute("data-success","false"),f.text(e,`🤡校验失败 ==> 图片尺寸不符合，宽：${a.width} 高：${a.height}`);return}if(n>_.$data.avatarInfo.maxSize){t.value="",e.setAttribute("data-success","false"),f.text(e,`🤡校验失败 ==> 图片大小不符合：${n}byte，限制最大：${_.$data.avatarInfo.maxSize}byte`);return}e.setAttribute("data-success","true"),f.text(e,`🤣 通过 宽:${a.width} 高:${a.height} 大小(byte):${n}`),r();};};});},async getUploadUrl(){let t=await N.get("/home.php?mod=spacecp&ac=avatar",{headers:{"User-Agent":x.getRandomPCUA()}});if(!t.status)return;if(x.isNull(t.data.responseText)){S.error("动态头像：获取上传地址失败");return}let e=t.data.responseText.match(/var[\s]*data[\s]*=[\s]*"(.+?)"/);if(e==null||e.length!=2){S.error("动态头像：获取变量data失败");return}let r=e[e.length-1].split(","),i=r[r.indexOf("src")+1].replace("images/camera.swf?inajax=1","index.php?m=user&a=rectavatar&base64=yes");return w.info("上传地址："+i),i}},j={$key:{signTime:"mt-sign-time"},init(){this.sign();},todayIsSign(){let t=this.getSignTime();return !(t==null||x.formatTime(Date.now(),"yyyyMMdd")!==x.formatTime(t,"yyyyMMdd"))},setSignTime(){W(this.$key.signTime,Date.now());},getSignTime(){return q(this.$key.signTime)},clearSignTime(){le(this.$key.signTime);},checkLogin(){return B.envIsMobile()?!!F("a[href*='member.php?mod=logging&action=logout']"):!!F("#comiis_key")},async sign(){let t=B.getFormHash();if(t==null){if(F("#comiis_picshowbox")){w.info("当前为评论区的看图模式 ");return}w.error("自动签到：获取账号formhash失败"),le("mt_sign"),S.error({content:"自动签到：获取账号formhash失败"});return}if(this.todayIsSign()){w.info("今日已签到");return}let e={id:"k_misign:sign",operation:"qiandao",formhash:t,format:"empty",inajax:1,ajaxtarget:""},l=!!b.getValue("mt-auto-sign-useFetch"),r=await N.get(`/plugin.php?${x.toSearchParamsStr(e)}`,{fetch:l,headers:{"User-Agent":x.getRandomPCUA()},allowInterceptConfig:!1});if(!r.status){w.error("签到：网络异常，请求失败"),S.error("签到：网络异常，请求失败");return}this.setSignTime(),w.info("签到信息：",r);let i=r.data.responseText,s=x.parseCDATA(i),n=f.parseHTML(`<div>${s}</div>`,!0,!1),a=f.text(n);if(a.includes("需要先登录")){S.error("签到：请先登录账号",{timeout:3e3}),this.clearSignTime();return}else if(a.includes("请稍后再试")||a.includes("您已经被列入黑名单")||a.includes("绑定手机号后才可以签到")||a.includes("您所在用户组不允许使用")){S.error("签到："+a,{timeout:5e3});return}else if(a.includes("今日已签")||a.includes("今日已经签到")){S.info("签到："+a);return}else if(i.includes("您当前的访问请求当中含有非法字符，已经被系统拒绝")){S.error("签到: 您当前的访问请求当中含有非法字符，已经被系统拒绝",{timeout:6e3});return}else if(l&&"location"in x.toJSON(i)){S.success("签到: 签到成功");return}let o=n.querySelector(".con"),c=n.querySelector(".line");if(o&&c){let m=f.text(o).match(/([0-9]+)金币/),d=f.text(c).match(/([0-9]+)/),p=m[m.length-1],g=d[d.length-1];w.success(`金币${p}，排名${g}`),S.info(`
                <div style="display: flex;${B.envIsMobile()?"":"padding: 20px;"}">
                    <div style="align-self: center;margin-right: 20px;">签到</div>
                    <div>排名 ${g}<br>金币 ${p}</div>
                </div>`,{timeout:4e3,isHTML:!0});return}let h=ne.alert({title:{text:"未知签到内容",position:"center"},content:{text:"",html:!1},width:"88vw",height:"400px"}).$shadowRoot.querySelector(".pops-alert-content");h.innerText=r.data.responseText;}},Le={id:"component-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[de("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(t,e,l)=>{w.info("设置当前Qmsg弹出位置"+l);},"Toast显示在页面九宫格的位置"),de("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),R("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[R("新增【最新发表】","mt-addLatestPostBtn",!0,void 0,"便于快捷跳转"),R("超链接文字转换","mt-link-text-to-hyperlink",!0,void 0,"自动把符合超链接格式的文字转为超链接")]}]},{type:"deepMenu",text:"自动签到",forms:[{text:"",type:"forms",forms:[R("启用","mt-auto-sign",!0,void 0,"自动请求签到"),R("使用fetch请求","mt-auto-sign-useFetch",!1,void 0,""),pe("签到信息",`上次签到时间：${j.getSignTime()==null?"尚未签到":G.formatTime(j.getSignTime())}`,"清空信息",void 0,void 0,void 0,"primary",t=>{let l=t.composedPath()[0].closest("li").querySelector(".pops-panel-item-left-desc-text");D.confirm({title:{text:"提示 ",position:"center"},content:{text:"<p>是否清空脚本签到记录的时间?</p>",html:!0},btn:{ok:{enable:!0,callback:r=>{j.clearSignTime(),S.success("删除成功"),f.text(l,`上次签到时间：${j.getSignTime()==null?"尚未签到":G.formatTime(j.getSignTime())}`),r.close();}}},mask:{enable:!0},width:"300px",height:"200px"});})]}]},{text:"头像",type:"deepMenu",forms:[{text:"<a href='https://ezgif.com/resize' target='_blank'>Resize Image</a>",type:"forms",forms:[he(t=>{let e=f.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
											<p class="pops-panel-item-left-main-text">头像（有缓存）</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),l=f.createElement("div",{className:"pops-panel-avatar-img",innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${B.getCurrentUID()}&size=small"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${B.getCurrentUID()}&size=middle"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${B.getCurrentUID()}&size=big"
												class="avatar-img" data-size="big">
											`}),r=f.createElement("style",{innerHTML:`
											.avatar-img {
												width: 30px;
												height: 30px;
												border-radius: 50%;
												overflow: hidden;
											}
										`});return l.querySelector(".avatar-img[data-size='small']"),l.querySelector(".avatar-img[data-size='middle']"),l.querySelector(".avatar-img[data-size='big']"),t.appendChild(e),t.appendChild(l),t.appendChild(r),t}),he(t=>{let e=f.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
											<p class="pops-panel-item-left-main-text">头像</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),l=f.createElement("div",{className:"pops-panel-avatar-img",innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${B.getCurrentUID()}&size=small&ts=${Date.now()}"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${B.getCurrentUID()}&size=middle&ts=${Date.now()}"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${B.getCurrentUID()}&size=big&ts=${Date.now()}"
												class="avatar-img" data-size="big">
											`});return t.appendChild(e),t.appendChild(l),t}),pe("修改头像",`可以上传gif图片，注意图片最大限制为${G.formatByteToSize(_.$data.avatarInfo.maxSize)}`,"上传",void 0,!1,!1,"primary",()=>{_.init();})]}]}]}]},Be={id:"component-forum-post",title:"帖子",forms:[{type:"forms",text:"",forms:[{text:"功能",type:"deepMenu",forms:[{type:"forms",text:"",forms:[R("拦截附件","mt-forum-post-interceptionAttachment",!0,void 0,"点击附件时弹出提示框进行确认是否下载附件"),R("图片查看优化","mt-forum-post-optimizationImagePreview",!0,void 0,"使用Viewer查看图片"),R("自动加载下一页","mt-forum-post-loadNextPageComment",!0,void 0,"无缝预览下一页"),R("代码块优化","mt-forum-post-codeQuoteOptimization",!0,void 0,"自动检测代码块语言并设置关键字高亮")]}]},{type:"deepMenu",text:"用户信息块",forms:[{type:"forms",text:"",forms:[R("探测用户在线状态","mt-forum-post-detectingUserOnlineStatus",!1,void 0,"获取用户在线状态并在用户信息处显示状态表情"),R("显示用户等级","mt-forum-post-showUserLevel",!0,void 0,"在用户信息处显示当前用户的等级"),R("隐藏底部信息块","mt-forum-post-hideBottomInfoBlock",!1,void 0,"包括金币、好评、信誉等信息")]}]},{type:"deepMenu",text:"右侧悬浮工具栏",forms:[{type:"forms",text:"",forms:[R("新增【快捷收藏】","mt-forum-post-quickCollentBtn",!0,void 0,"在右侧悬浮工具栏添加【收藏】按钮，用于快捷收藏"),R("快捷回复优化","mt-forum-post-quickReplyOptimization",!0,void 0,"为快捷回复弹窗底部区域添加【一键空格】按钮")]}]}]}]},Oe={id:"component-guide",title:"导读",forms:[{type:"forms",text:"",forms:[R("页面美化","mt-guide-beautifyPage",!0,void 0,"美化样式")]}]},K={setting:{get width(){return window.innerWidth<550?"88vw":"550px"},get height(){return window.innerHeight<450?"70vh":"450px"}},settingBig:{get width(){return window.innerWidth<800?"92vw":"800px"},get height(){return window.innerHeight<600?"80vh":"600px"}},info:{get width(){return "350px"},get height(){return "250px"}}},b={$data:{__data:null,__oneSuccessExecMenu:null,__onceExec:null,__listenData:null,get data(){return b.$data.__data==null&&(b.$data.__data=new x.Dictionary),b.$data.__data},get oneSuccessExecMenu(){return b.$data.__oneSuccessExecMenu==null&&(b.$data.__oneSuccessExecMenu=new x.Dictionary),b.$data.__oneSuccessExecMenu},get onceExec(){return b.$data.__onceExec==null&&(b.$data.__onceExec=new x.Dictionary),b.$data.__onceExec},get scriptName(){return ue},key:P,attributeKeyName:Q,attributeDefaultValueName:$},$listener:{get listenData(){return b.$data.__listenData==null&&(b.$data.__listenData=new x.Dictionary),b.$data.__listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},isTopWindow(){return U.top===U.self},initExtensionsMenu(){this.isTopWindow()&&Y.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:!1,isStoreValue:!1,showText(t){return t},callback:()=>{this.showPanel();}}]);},initPanelDefaultValue(){let t=this;function e(i){if(!i.attributes)return;let s={},n=i.attributes[Q];n!=null&&(s[n]=i.attributes[$]);let a=i.attributes[xe];if(typeof a=="function"){let u=a();if(typeof u=="boolean"&&!u)return}let o=i.attributes[De];o&&typeof o=="object"&&Object.assign(s,o);let c=Object.keys(s);if(!c.length){w.warn(["请先配置键",i]);return}c.forEach(u=>{let h=s[u];t.$data.data.has(u)&&w.warn("请检查该key(已存在): "+u),t.$data.data.set(u,h);});}function l(i){for(let s=0;s<i.length;s++){let n=i[s];e(n);let a=n.forms;a&&Array.isArray(a)&&l(a);}}let r=this.getPanelContentConfig();for(let i=0;i<r.length;i++){let s=r[i];if(!s.forms)continue;let n=s.forms;n&&Array.isArray(n)&&l(n);}},setValue(t,e){let l=q(P,{}),r=l[t];l[t]=e,W(P,l),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,r,e);},getValue(t,e){let r=q(P,{})[t];return r??(this.$data.data.has(t)?this.$data.data.get(t):e)},deleteValue(t){let e=q(P,{}),l=e[t];Reflect.deleteProperty(e,t),W(P,e),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,l,void 0);},addValueChangeListener(t,e,l){let r=Math.random();return this.$listener.listenData.set(t,{id:r,key:t,callback:e}),l&&l.immediate&&e(t,this.getValue(t),this.getValue(t)),r},removeValueChangeListener(t){let e=null;for(const[l,r]of this.$listener.listenData.entries())if(r.id===t){e=l;break}typeof e=="string"?this.$listener.listenData.delete(e):console.warn("没有找到对应的监听器");},triggerMenuValueChange(t,e,l){if(this.$listener.listenData.has(t)){let r=this.$listener.listenData.get(t);if(typeof r.callback=="function"){let i=this.getValue(t),s=i,n=i;typeof e<"u"&&arguments.length>1&&(s=e),typeof l<"u"&&arguments.length>2&&(n=l),r.callback(t,n,s);}}},hasKey(t){let e=q(P,{});return t in e},execMenu(t,e,l=!1,r){if(!(typeof t=="string"||typeof t=="object"&&Array.isArray(t)))throw new TypeError("key 必须是字符串或者字符串数组");let i=[];typeof t=="object"&&Array.isArray(t)?i=[...t]:i.push(t);let s;for(let n=0;n<i.length;n++){const a=i[n];if(!this.$data.data.has(a)){w.warn(`${t} 键不存在`);return}let o=b.getValue(a);if(l&&(o=!o),typeof r=="function"){let c=r(a,o);typeof c=="boolean"&&(o=c);}if(!o)break;s=o;}s&&e(s);},execMenuOnce(t,e,l,r,i){if(typeof t!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(t)){w.warn(`${t} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(t))return;this.$data.oneSuccessExecMenu.set(t,1);let s=()=>{let h=b.getValue(t);return typeof l=="function"?l(t,h):h},n=[],a=h=>{let m=s(),d=[];if(h instanceof HTMLStyleElement?d=[h]:Array.isArray(h)&&(d=[...h.filter(p=>p!=null&&p instanceof HTMLStyleElement)]),m)n=n.concat(d);else for(let p=0;p<d.length;p++)d[p].remove(),d.splice(p,1),p--;},o=h=>typeof i=="function"?i(t,h):h,c=h=>{let m=[];if(o(h)){let d=e(h,a);d instanceof HTMLStyleElement?m=[d]:Array.isArray(d)&&(m=[...d.filter(p=>p!=null&&p instanceof HTMLStyleElement)]);}for(let d=0;d<n.length;d++)n[d].remove(),n.splice(d,1),d--;n=[...m];};this.addValueChangeListener(t,(h,m,d)=>{let p=d;typeof r=="function"&&(p=r(h,d,m)),c(p);});let u=s();u&&c(u);},execInheritMenuOnce(t,e,l,r){let i=this;const s=(n,a)=>{let o=i.getValue(n),c=i.getValue(a);if(typeof r=="function"){let u=r(o,c);if(u!=null)return u}return o};this.execMenuOnce(t,l,()=>s(t,e),()=>s(t,e)),this.execMenuOnce(e,()=>{},()=>!1,()=>(this.triggerMenuValueChange(t),!1));},onceExec(t,e){if(typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(t)||(e(),this.$data.onceExec.set(t,1));},showPanel(){D.panel({title:{text:`${ue}-设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},width:K.setting.width,height:K.setting.height,drag:!0,only:!0});},getPanelContentConfig(){return [Le,Be,Oe]}},Ue=()=>{var t,e,l,r,i,s,n,a,o,c,u;c=/((https?:\/\/|www\.)[\x21-\x7e]+[\w\/]|(\w[\w._-]+\.(com|cn|org|net|info|tv|cc))(\/[\x21-\x7e]*[\w\/])?|ed2k:\/\/[\x21-\x7e]+\|\/|thunder:\/\/[\x21-\x7e]+=)/gi,t=function(d){var p;if(d=(p=d.originalTarget)!=null?p:d.target,d!=null&&d.localName==="a"&&d.className.indexOf("texttolink")!==-1&&(p=d.getAttribute("href"),p.indexOf("http")!==0&&p.indexOf("ed2k://")!==0&&p.indexOf("thunder://")!==0))return d.setAttribute("href","http://"+p)},document.addEventListener("mouseover",t),o=function(d){if(typeof d=="object"&&d!=null&&typeof d.parentNode<"u"&&typeof d.parentNode.className<"u"&&typeof d.parentNode.className.indexOf=="function"&&d.parentNode.className.indexOf("texttolink")===-1&&d.nodeName!=="#cdata-section"){var p=d.textContent.replace(c,'<a href="$1" target="_blank" class="texttolink">$1</a>');if(d.textContent.length!==p.length){var g=document.createElement("span");return g.innerHTML=p,console.log(`识别: ${g.querySelector("a")}`),d.parentNode.replaceChild(g,d)}}},e="a svg canvas applet input button area pre embed frame frameset head iframe img option map meta noscript object script style textarea code".split(" "),u=`//text()[not(ancestor::${e.join(") and not(ancestor::")})]`,l=new RegExp(`^(${e.join("|")})$`,"i"),i=function(d,p){var g,y;if(p+1e4<d.snapshotLength){var A=g=p;for(y=p+1e4;p<=y?g<=y:g>=y;A=p<=y?++g:--g)o(d.snapshotItem(A));setTimeout(function(){return i(d,p+1e4)},15);}else for(A=g=p,y=d.snapshotLength;p<=y?g<=y:g>=y;A=p<=y?++g:--g)o(d.snapshotItem(A));},s=function(d){return d=document.evaluate(u,d,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null),i(d,0)},n=function(d){for(d=document.createTreeWalker(d,NodeFilter.SHOW_TEXT,{acceptNode:function(p){if(!l.test(p.parentNode.localName))return NodeFilter.FILTER_ACCEPT}},!1);d.nextNode();)o(d.currentNode);},a=new window.MutationObserver(function(d){var p,g,y=0;for(p=d.length;y<p;y++){var A=d[y];if(A.type==="childList"){var v=A.addedNodes,C=0;for(g=v.length;C<g;C++)A=v[C],n(A);}}}),r=function(){return s(document.body),a.observe(document.body,{childList:!0,subtree:!0})};var h=function(d){var p=d.getAttribute("href");if(p.indexOf("http")!==0&&p.indexOf("ed2k://")!==0&&p.indexOf("thunder://")!==0)return d.setAttribute("href","http://"+p)},m=function(){for(var d=document.getElementsByClassName("texttolink"),p=0;p<d.length;p++)h(d[p]);};setTimeout(m,1500),setTimeout(r,100);},L=globalThis.location.pathname,O=globalThis.location.search;new URLSearchParams(O);const ae={isKMiSign(){return L.startsWith("/k_misign-sign.html")},isPost(){return L.startsWith("/thread-")||L.startsWith("/forum.php")&&O.startsWith("?mod=viewthread")},isPage(){return !!L.match(/^\/page-([0-9]+).html/g)},isGuide(){return L.startsWith("/forum.php")&&O.startsWith("?mod=guide")},isPlate(){return !!L.match(/\/forum-[0-9]{1,2}-[0-9]{1,2}.html/g)},isSearch(){return L.startsWith("/search.php")},isSpace(){return L.startsWith("/home.php")&&O.startsWith("?mod=space")},isMySpace(){return L.startsWith("/home.php")&&O.startsWith("?mod=space&do=profile&mycenter")},isSpaceWithAt(){return L.startsWith("/space-uid-")},isForumList(){return L.startsWith("/forum.php")&&O.startsWith("?forumlist")},isMessage(){return L.startsWith("/home.php")&&O.startsWith("?mod=space&do=notice")},isMessageList(){return L.startsWith("/home.php")&&O.startsWith("?mod=space&do=pm")},isPointsMall(){return L.startsWith("/keke_integralmall-keke_integralmall.html")||L.startsWith("/plugin.php")&&O.startsWith("?id=keke_integralmal")},isPostPublish(){return L.startsWith("/forum.php")&&O.startsWith("?mod=post")},isPostPublish_voting(){return L.startsWith("/forum.php")&&O.includes("&special=1")||O.includes("&fid=42")},isPostPublish_edit(){return this.isPostPublish()&&O.includes("&action=edit")},isPostPublish_newthread(){return this.isPostPublish()&&O.includes("&action=newthread")},isPostPublish_reply(){return this.isPostPublish()&&O.includes("&action=reply")}},Ne={init(){f.ready(()=>{b.execMenuOnce("mt-forum-post-quickCollentBtn",()=>{this.quickCollentBtn();}),b.execMenuOnce("mt-forum-post-quickReplyOptimization",()=>{this.quickReplyOptimization();});});},quickCollentBtn(){w.info("【快捷收藏】"),x.waitNode("#scrolltop",1e4).then(t=>{if(!t)return;let e=B.getFormHash(),l=B.getThreadId(window.location.href),r=`/home.php?${x.toSearchParamsStr({mod:"spacecp",ac:"favorite",type:"thread",id:l,formhash:e,infloat:"yes",handlekey:"k_favorite",inajax:1,ajaxtarget:"fwin_content_k_favorite"})}`,i=document.createElement("span");i.innerHTML=`
			<a href="${r}" 
				id="k_favorite"
				onclick="showWindow(this.id, this.href, 'get', 0);"
				onmouseover="this.title = $('favoritenumber').innerHTML + ' 人收藏'">
				<img src="https://s1.ax1x.com/2020/04/29/JTk3lD.gif"
						height="26" 
						width="26" 
						style="position:absolute;top:10px;left:11px">
			</a>
			`,f.prepend(t,i);});},quickReplyOptimization(){x.waitNode('#scrolltop a[title="快速回复"]',1e4).then(t=>{t&&(w.info("快捷回复优化"),f.on(t,"click",function(){U.showWindow("reply",t.href),w.info("等待弹窗出现"),x.waitNode("#moreconf",1e4).then(e=>{if(!e)return;w.success("弹出出现，添加按钮");let l=f.createElement("button",{innerText:"一键空格",type:"button",id:"insertspace2"},{style:"float: left;"});f.on(l,"click",r=>{x.preventEvent(r),f.val(F("#postmessage"),f.val(F("#postmessage"))+"           ");}),f.append(e,l);});}));});}},we={$flag:{isSetHljsCSS:!1},init(){Ne.init(),b.execMenuOnce("mt-forum-post-autoExpandContent",()=>this.autoExpandContent()),b.execMenuOnce("mt-forum-post-repairImageWidth",()=>this.repairImageWidth()),b.execMenuOnce("mt-forum-post-hideBottomInfoBlock",()=>this.hideBottomInfoBlock()),f.ready(()=>{b.execMenu("mt-forum-post-removeFontStyle",()=>{this.removeFontStyle();}),b.execMenu("mt-forum-post-removeCommentFontStyle",()=>{this.removeCommentFontStyle();}),b.execMenuOnce("mt-forum-post-loadNextPageComment",()=>{this.loadNextPageComment();}),b.execMenuOnce("mt-forum-post-codeQuoteOptimization",()=>{this.codeQuoteOptimization();}),b.execMenuOnce("mt-forum-post-optimizationImagePreview",()=>{this.optimizationImagePreview();}),b.execMenuOnce("mt-forum-post-interceptionAttachment",()=>{this.setAttachmentsClickTip();}),b.execMenu("mt-forum-post-detectingUserOnlineStatus",()=>{this.detectingUserOnlineStatus();}),b.execMenu("mt-forum-post-showUserLevel",()=>{this.showUserLevel();});});},autoExpandContent(){return w.info("自动展开帖子内容"),V(`
        div.comiis_message.bg_f.view_one.b_b.cl.message>div.comiis_messages.comiis_aimg_show.cl{max-height:inherit!important;overflow-y:inherit!important;position:inherit!important}
        .comiis_lookfulltext_bg,.comiis_lookfulltext_key{display:none!important} 
        `)},repairImageWidth(){return w.info("修复图片宽度"),V(`
        .comiis_messages img{
            max-width: 100% !important;
        }`)},removeFontStyle(){let t=document.querySelector(".comiis_a.comiis_message_table");t&&(w.info("移除帖子字体效果"),f.html(t,f.html(t).replace(te.fontSpecial,"")));},removeCommentFontStyle(){var l;w.info("移除评论区的字体效果");let t=z("font"),e=((l=F(".comiis_postlist .comiis_postli"))==null?void 0:l.innerHTML)||"";e!==""&&(t.forEach(r=>{e.includes(r.innerHTML)||(r.removeAttribute("color"),r.removeAttribute("style"),r.removeAttribute("size"));}),z(".comiis_message.message").forEach(r=>{if(e.includes(r.innerHTML)){r.innerHTML=r.innerHTML.replace(te.fontSpecial,"");let i=r.nextElementSibling;i&&i.localName==="strike"&&(i.outerHTML=i.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));}})),z(".comiis_postli.comiis_list_readimgs.nfqsqi").forEach(r=>{let i=r.parentElement;i&&i.localName==="strike"&&(i.outerHTML=i.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));});},loadNextPageComment(){if(w.info("自动加载下一页评论"),document.title.includes("提示信息 - MT论坛"))return;if(z(".pgbtn").length==0){w.warn("没有找到下一页按钮");return}var t=async function(r){var a,o;let i=await N.get(r,{fetch:!0,allowInterceptConfig:!1});if(!i.status){S.error("网络异常，请求下一页失败");return}var s=x.parseFromString(i.data.responseText),n=s.querySelector(".pgbtn a");return (a=s.querySelector("#postlistreply"))==null||a.remove(),(o=s.querySelector(".bm_h.comiis_snvbt"))==null||o.remove(),{url:n?n.getAttribute("href"):null,postlist:s.querySelector("#postlist"),pgbtn:s.querySelector(".pgbtn"),pgs:s.querySelector(".pgs.mtm")}},e=async function(){var i,s;var r=F(".pgbtn a").getAttribute("href");if(r){let n=await t(r);n&&((s=(i=n.postlist)==null?void 0:i.querySelector(".comiis_vrx"))!=null&&s.querySelector(".km1")&&(Object.keys(n).forEach(a=>{n[a]=null;}),w.warn("检测到请求的本页内容中存在【楼主】标识，判断为重复页请求")),(!n.url||n.url==r)&&(w.error("最后一页，取消监听"),f.off(document,["scroll","wheel"],l.run),f.remove(".pgbtn")),n.postlist&&f.append("#postlist",f.html(n.postlist)),n.pgbtn&&f.html(".pgbtn",f.html(n.pgbtn)),n.pgs&&f.html(".pgs.mtm",f.html(n.pgs)),we.init());}else w.error("获取下一页元素失败");};let l=new x.LockFunction(async()=>{x.isNearBottom()&&await e();});f.on(document,["scroll","wheel"],l.run);},codeQuoteOptimization(){w.info("代码块优化");function t(l){var r=["add","and","cmp","cmpg","cmpl","const","div","double","float","goto","if","int","long","move","mul","neg","new","nop","not","or","rem","return","shl","shr","sput","sub","throw","ushr","xor"],i=["aget","aput","array","check","execute","fill","filled","goto/16","goto/32","iget","instance","invoke","iput","monitor","packed","sget","sparse"],s=["transient","constructor","abstract","final","synthetic","public","private","protected","static","bridge","system"];return {aliases:["smali"],contains:[{className:"string",begin:'"',end:'"',relevance:0},l.COMMENT("#","$",{relevance:0}),{className:"keyword",variants:[{begin:"\\s*\\.end\\s[a-zA-Z0-9]*"},{begin:"^[ ]*\\.[a-zA-Z]*",relevance:0},{begin:"\\s:[a-zA-Z_0-9]*",relevance:0},{begin:"\\s("+s.join("|")+")"}]},{className:"built_in",variants:[{begin:"\\s("+r.join("|")+")\\s"},{begin:"\\s("+r.join("|")+")((\\-|/)[a-zA-Z0-9]+)+\\s",relevance:10},{begin:"\\s("+i.join("|")+")((\\-|/)[a-zA-Z0-9]+)*\\s",relevance:10}]},{className:"class",begin:`L[^(;:
]*;`,relevance:0},{begin:"[vp][0-9]+"}]}}V(`
			.hljs{text-align:left}
			.hljs ol{margin:0 0 0 10px;padding:10px 10px}
			.hljs li{padding-left:10px;list-style-type:decimal-leading-zero;font-family:Monaco,Consolas,'Lucida Console','Courier New',serif;font-size:12px;line-height:1.8em}
			.hljs li:hover{background:#2c313c}
			.hljs li::marker{unicode-bidi:isolate;font-variant-numeric:tabular-nums;text-transform:none;text-indent:0!important;text-align:start!important;text-align-last:start!important}
			.hljs em[onclick^=copycode]{color:#fff;background:#246fff;margin:5px 10px;border-radius:3px;padding:0 5px;cursor:pointer;height:32px;line-height:32px;display:inline-flex}
			.hljs .code-select-language{height:32px;line-height:32px;font-size:14px;border:1px solid #5c5c5c;border-radius:5px;text-align:center;outline:0}
		`),X.registerLanguage("smali",t);let e=new x.LockFunction(()=>{function l(i,s="java"){i.oldValue||(i.oldValue=i.textContent),i.innerHTML=X.highlight(i.oldValue,{language:s}).value.replace(/\\n$/gi,"");}document.querySelectorAll("em[onclick^=copycode]").forEach(i=>{if(i.nextElementSibling&&typeof i.nextElementSibling.className=="string"&&i.nextElementSibling.className=="code-select-language")return;let s=X.highlightAuto(f.text(i.parentElement.querySelector("div[id^=code]"))).language,n=document.createElement("select"),a=X.listLanguages().sort();a=a.concat("自动检测");let o="";a.forEach(c=>{c.startsWith("自动检测")?o+=`<option data-value="${s}" selected="selected">${c}(${s})</option>`:o+=`<option data-value="${c}">${c}</option>`;}),n.className="code-select-language",n.innerHTML=o,f.on(n,"change",()=>{let c=n.selectedOptions[0].getAttribute("data-value");w.info("切换代码块语言: ",c),f.parent(n).querySelectorAll("li").forEach(u=>{l(u,c);});}),x.preventEvent(n,"click"),x.preventEvent(i,"click"),i.insertAdjacentElement("afterend",n),x.dispatchEvent(n,"change");}),document.querySelectorAll(".blockcode").forEach(i=>i.className="hljs");},this,500);x.mutationObserver(document,{config:{subtree:!0,childList:!0},callback:()=>{e.run();}});},optimizationImagePreview(){w.info("图片查看优化");let t=[{hostName:"avatar-bbs.mt2.cn",pathName:"*"},{hostName:"cdn-bbs.mt2.cn",pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"/uc_server/avatar.php"}];function e(i=[],s=0){let n="";i.forEach(c=>{n+=`<li><img data-src="${c}"></li>`;});let a=f.createElement("ul",{innerHTML:n}),o=new ke(a,{inline:!1,url:"data-src",zIndex:x.getMaxZIndex()+100,hidden:()=>{o.destroy();}});o.view(s),o.zoomTo(1),o.show();}function l(){document.querySelectorAll("#postlist .comiis_vrx:not([data-isHandlingViewIMG])").forEach(i=>{i.setAttribute("data-isHandlingViewIMG","true");let s=[];i.querySelectorAll("img").forEach(n=>{let a=n.src,o=new URL(a).hostname,c=new URL(a).pathname,u=n.parentElement;u.nodeName.toLowerCase()==="a"&&u.getAttribute("href")===a&&(u.setAttribute("href","javascript:;"),u.removeAttribute("target"));let h=!1;for(let m of t)if(o.indexOf(m.hostName)!=-1&&c.match(m.pathName)){h=!0;break}h||(s=[...s,a],n.removeAttribute("onclick"),n.setAttribute("onclick",""),f.on(n,"click",function(){w.info("点击图片",n);let m=s.findIndex(d=>d==a);e(s,m);}));});});}let r=new x.LockFunction(()=>{l();});x.mutationObserver(document,{config:{subtree:!0,childList:!0},callback:()=>{r.run();}});},setAttachmentsClickTip(){w.info("附件点击提醒");function t(e){if(e.hasAttribute("href")){let l=e.hasAttribute("id")?e.id:e.parentElement.id,r=e.getAttribute("href"),i=e.innerText;if(document.querySelector(`#${l}_menu`).innerText.indexOf("金币")===-1)return;console.log("发现附件",e),console.log("该附件是金币附件，拦截！"),e.setAttribute("data-href",r),e.style.setProperty("cursor","pointer"),e.removeAttribute("href"),e.innerText="【已拦截】"+i,e.onclick=function(){D.confirm({title:{text:"提示",position:"center"},content:{text:`<br />确定花费2金币下载附件 <a style="color: #507daf !important;">${i}</a> ？<br /><br />`,html:!0},btn:{ok:{callback:n=>{window.open(r,"_blank"),n.close();}}},mask:{enable:!0},width:"400px",height:"200px"});};}}x.mutationObserver(document.documentElement,{callback:()=>{document.querySelectorAll(".attnm a").forEach(e=>{t(e);}),document.querySelectorAll(".comiis_attach a").forEach(e=>{t(e);}),document.querySelectorAll("span[id*=attach_] a").forEach(e=>{t(e);});},immediate:!0,config:{childList:!0,subtree:!0}});},async detectingUserOnlineStatus(){var r;w.info("探测用户在线状态"),b.onceExec("mt-forum-post-detectingUserOnlineStatus",()=>{V(`
				.gm-user-status-icon{
					border: 0 !important;
					float: right !important;
					display: block !important;
					width: 40px !important;
					height: 40px !important;
				}
			`);});function t(i){return f.createElement("img",{className:"gm-user-status-icon",smilied:i?"1353":"1384",loading:"lazy",src:i?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAFAxJREFUeF7tWwuQVNWZ/u6rnzPd0/PoeTC8tNkJ7gQBt0pYHDESUZcNWrBi1qjlEl2q8LG7apngs2JMsFLRLV9sUINWiZTRlfhIJGKwhMEF14iERcmEEZhhGGZ6Xt093TPd97n5z+3Tc6ftngeDValKTtWt7pl777nn//7vf57bAv7Ch/AXLj/+CsBfGfDVIyBefvnlfwegSdf1ubIsn2cYxjRRFIOCIATp8ZZlxU3TjEuSdErX9c9lWT4CoPndd9/9HQDzq1ziV2UCyvLly1dZlrVGEIRlsuIJSoofsuyCJCuQJBmCKI2SyzINGIYOQ9eg6yoMLQVdS8cty9olCMKrO3fu3A5AO9tgnFUAmpqaqtxu9x2iKN6uuINBl9sHl9vL1iyJE1ekYYo5OdXMMNTMELRMnFjyVCaTebK5ubnnbAFxVgCIRCLuWbNm3U+Cu30VQbfHz7TMBRcsvch6OSgkMH0f+TQceOlZQIZT8RwQJ06ceKS1tTUzVSCmDMBFF110hcfj2ez2hmZ4/cykITu0zTVvWSYEQYQoGGOu2TBHL8m0bCA5CLphQUsnkBkeaE+n0+v27t37m6mAcMYAkNZnzpz5mKz4b5XdpfB6baqLljqiedGmsijY6hQE+3GWZRVcM53n5+jTdIDBzUIzBFiCDE1NQ88MQtdSz7S1td11pmw4IwAuueSSekmS3pbdZfO9/jIQxRXJFoprXIAJQRRyQjsBGE9jJHwOCNOe1zBtEFU96x8EBWQmmXQSeiZ20DCMb33wwQcd482df37SAFx22WVzLMv6reQKznB7SiDReiwNLnnEaCVRZMIz7WdZMNmFcaaYWWfAATANGxDdsqOIYSkMBEONtwuC8M333nvv6GSeNSkASHjDMPYqnlCYCS/YUUkWDIiSPRUJz7Sd1T6n/WQWxa/lTLBMK8cADoDGgbFkmJZIIRNaeiAqSdJFkwFhwgAQ7WVZ/pA0LyseZteSYHt3WbIgQGIgcO2T4FMRvhgIBIAFAwSKaZq2P6BliC5k0inASLbrur5kouYwIQCyDm+/IJfOpxAHU4ViO2dIgm3rI2HPpv9XBQCjvaHnAKC/NQOwIEM3JRh6GpY+eLCtrW3RRBzjhABYtmzZ8xB935VdfsiiAQHk9GwAyMY5AJz+oiSeFe07WeD0BU4ATMvESIQQAUGBrqYAc+jnu3btunk80xsXgCVLlqxyewKvK54gc3aKZDs78vYixXUHAMw5aRp0Q2f0pIPO06EoCtxu94ScIt2XyWSgadqoeWxzkyHJUo4BBABdT/mDQSmGSNFBooQJuppc/eGHH1IKXXSMB0DpxRdf3CK6K2vdigCYGiSJhLdswQSRLYbRUNPg9/lx/vzzcd5556G2thaBQACJRALd3d04fPgwfn/w90wwAoLf51yZoRu58+PNM5gcZGBwAAgE3eCRQYSmW7C0gdN79uxpADBYDIExAWhqavqxqAQ2KC4/YKnM3vMB4Nq+8sorQUdJSQlcLhdkOeskiBW6DlVVkUwmsWPHDnZQ4sSTJ1rc8PAwOyY7DzdDxoJsZNAMGQYUWEYGppbY2NzcfO+kAaDCxjTNo4qvOkipLXN2IAbYlKaDBHMpLqy/dT3mzZsHn8/HqE5H/iCG0DE0NIRDhw5h0zObGAsIBBKctH+m86ianX0SAAwIy2X/DQXaUHdcFMU5xQqoogxg2pdLNgiyFxLI9kcKGg5CKpXC3XffjQsuuIDRnTTPNZIPAC2MBjGBzOKTTz7B448/jnBVGF3dXVOeR5YVUL3Bs2zdEGHABV3LQLRSRVlQEAAKe9XV1d2yp5JVNxJUyBIVM5TPi4wFZMtXX301Vq1ahVAoxISfSNZHQHAQXnvtNWYORPtrrrkmB+KZzLN9+3bGPJYbUB1hKTAsEYYlwVL74t3d3dWFwmJBAMjzQ/S+TmEPlm7bvqjb1Vw20yMQnnzySYTDYUb9iSyas4IWSbQnJjz44IN4+OGHmfBkDpOdh0wqGo3ijjvuYMDSIAA05hCJBQpMNUHmWzAiFAJAXLx48XZBKb+KJTus0LFLWEpuKOEZHhrCZcsvwy233IKysjLm8Ca7cPIfBMTAwABjEN1/pvPEYjE899xz2PnuTrjcLtsP0JIFCZrpggADphZ/c9++favyW2yFAPAtWrQoKnvDfrJ9alRQzm87Pol99vf14d777sXSpUuZ5goJT9q477778NZbb8PtdmHlypVM29xPcJ/g9BV8nvHudd5D8xCT9u7dix8+/EMEgoFRAFB2aEGCqfal9u/fHwYw5Lz/SwBQg0PThR2KNwTLUCELKgt9zBdINgCdnZ144YUX0NDQUJT+d911F7Zu3Yq6ujoESgNIDCaYv3jggQeKZyXZM5O5lwAgMzh27Biuv/56VFVV2X6AymhBgm65GACGmoAiW1fmN1DyARAbGxsf9AfCD0myF4qoApYBQRjJ6IgF7e3teOutN1myU8z+6Rxpe9bMWWxRPT09GIgNsBA43pjMvRwA8gMrVvwj6upqWUjl/QSKBBBk1mhNJaI/OHz48MNOM/gSAAsXLnxR8VbeIFOhb+l2e4tAEAWmfWLB8ePH8corr4zJABKCFudkwNDQMFpa/jCe/AzYid7rZMDq1atRX1/PtE8A8DYaA4Gy1eHelw4cOHBTUQAo/AWDwd2yJ3whlbgsAkC1K7ssAATCiRMn8Oijj2LZsmVFfQDR+Nlnn2UM8Xg8SKfTzGk+8sgjbDFj+YDx7i3kA3bv3s1yCQ6AYdqOm3qKHAA93fdRPB5f6gyHoxiQBeAL2ROeRnkUCS8KOsv5nSB0dp7GVVetxJ133lk0CpAj27BhA7Zt28YWct1112Hjxo3MLFjePkYUGOvefOFpHooClFT98pdvoLamhmnfMGzWjgAgQU9HT8Xj8XOLAgDAt2DBgm6Xr6ZEFjVYpg7B0mztUw6QTYOTg0kMp4fxxhtvTDkPWLv2u9iy5edTzgMoKaNEqMRfwjAiAFhOQL1Di8pkN9ShruSnn35a7YwE+T7At3DhwpTirQasjJ3/W3bbi2yfs4BQJz9w00034dZbbz3jTHDz5s14+umncdttt2HdunVnnAlSQvbiiy9ixowZUGSFVYgcANZWFxUGgDbcjQMHDvjHAqB0/vz5Cbe/lgFA5S/v8XMW8DZX/0A/Ojo6WALS1NQ06VqgubmZ+YSqqjB6eqJTnoccZ3l5ua11apexuoDaZ0o+AAFneZzPgNIFCxZ0kglwAMgH0GC1fzYhIBCoAjt16hRD+plnnsHixYsnXA3u27ePMcflcmN6fT1OdnRAVTNnPA+tj5yf2+XOaZ47QQKA+oaCqEAd6iETqBsTgHnz5v3BW1pTZ5ka6/cTAISkJEo5X8AdEXn29pPtrDBav3491q5dO24/YMuWLdi0aRMDa86cOfD7/aCq8ujRoyyhmew8ZPckvNfjZevj2reLIrJ9MgEbgOHBrs5Dhw59bUwAGhsb3/eW1tB2NkQrwxyhKFrM/lk0yDpEDkIylURvby/6+/sZBZcvX45LL70Us2fPRkVFBfr6+pi/eP/997Fz5052XU1NDarD1SgNBKAoMjRNx2Aigc7Tp5k55M9D9cb23Z/h8Z0dWKj8ES37fpV7Hl1LnSin8Ll2ehYAS3Sz5Q4Pdv3u8OHDl44FgG/u3LlbvKXhayVJgWBmWC5AmSDv8uaDQLamZlTE4nEkEnHW9aFKL39QpRcMBplw9Emad3aNCIRUMsmyxXg8zg7nPOI3HsScFTeju+VTWO98D+WujB058jQ/alfJAQAVRIOxrl8cOXJk7ZhRoLGx8R7FE3pIVtw5BhAANIqBQOfIJ5BJpNMZ6LqWK02peqTSmbXAPF74/D5m+4UKKNYMTaft9ljabpFRTpAxZaj/9BKev30xtn4yiF1vvoXZR/4LJR47QXM6PZb88K1lgcxWBiQvNC0DdaiPUuGfFAWAEiFN0/6htCy83V9SCctMA0YaFu3zWRbLAzgQxAT2Pc8kyCmSA6JF8P0B8h+kbWqB2eF0ZP/fyRS7o2NveOiazhwatdG6jBDEq36KX/97I5Iq8C9bOxHd8QQiiT3MN3GPzyIAeX5KhSl7pe12yQNZ8SERj2IwFl2lKMo7Y2aCHR0d1TNnzvy8ojriN/RhWIbGzIDXA/lMyAeBh8lie4Nj9Q3y02P6W1M1tJQsQdPN9+GxFRTBgJ8dNPHqbz+H8OsNqBZ77dCX7YWxKpAtytY+MVmQfejpbEm1tbWdV19f3z1WJkiqKW9oaHg5UD59uUuR2SYDOUICgAtbCIRCbOCJU74/KEb//OtImKF0GscWPoDvr1+BlbPtK47FgYd29OCLHdtw7sltuY3YnPBZAEh4SH4YhoZYb9vOlpaW7wDoH7MaBOCvrq5eE66d/XwwFIalD7HGommqzAzyQcg3iUJA8Gu4gJwdo+jPNefQJlG7Ta9G1Zof4UdrGlBuO3M2Nn5k4OAnR2C+eTdqpIFR2NH8tGcAuZQxoL+vG9HTx2/u7u5+FUBqLABoIt+fWFbT0NBwqKquwU9NEctIMxA4C/IFce4Dct/gBIq+O/+fr+n8v0lwGmT/JyM3Yum1N+LGhXaOz8c77cBHn/Xgixc3YObwp7bAWZ/EvkteUKfYFNyInjqSamlpmQega9yOEEC5I4LTp0//QVXtOetLSwKAmba3qYz0iIfNrsSpzfwN0UJCF9I+F8pJYQKhy6hA6Ns/xTcvnIPzq0c7zs9jwOH2OD5+/WWEP3uO7U+Qk2YOl6hP+b/oweBgDD2nj206efLkQwDi+W+aFWyKkhkoihI555xzmsPT5vpFaIwB5Assk8wh23JyaCQfiHzaT5YB1NVpq74Ci9beicYZQUyjEsYxTqWA9riBz/bsgbb931gGytN1QSIAXDChMO0fO3asSdO01nz6szUWoiOFw9bW1vLp06ffX1k9a30gWM62xGFmYBgqC0+FQMg3jXwQCv3tfL7z3SHKKbRlD2DRihWoCbhRZjd1ciOmAgkV+Lj5f5HcdhvKSt1M+yS4nf66kIj343TH0S1dXV33RyKR/gnvC2TfVwsoijK7vr7+N+G6OWGP2832B6lCJCbweM/jbjG7LkZ558sThV6aorpAWfUEllz+DXgUEyWu0SaQVG0/se+DjxHbejvKA1QL8NLXhfSf6pNo59FoR0fHFZqmHQeQKPTWadGtMc6CysrKa2umzf7PyvB0ttnImEAh0bITnlHFh8OTFwOkEEtGha/sBVRj+Ff+EJesvhouhXaiR89Ij1I1E7t+tRvmm3ciSCwVbAaQCfRGT6Lr1PH/6O3t/UUx7Rc1geyjCHKyvHBdXd2Pq2pmrSkLVWUByOYFlt19ZZmYswbPZmPjgTDWeUqFT9deiX/+3j0I11QUvDTa1Yf/fuIp1Ha8jdJARY76sYEe9HSdeLWzs5N2haOFbD+niHEWySKCoijTa2pqXq6snjU35w+y2SEPjZzG+WDQ/OOZSf4ayGyoxD6ZcuPCO57A4ovno8zvSAIAxFIZ7NtzEAd+9n3MKDHg9ZXk7L63+8SRrq6u72iadrKQ53c+b7wXJIgFHgAhv9//tXA4vC1UNSNcWlr2JSbwSZ32zMHg53h8d16b/yIVjxZkXrTj0y7NwcX/ugFNi/4G54btXOCLaBLN+/+IPc9uRL3RhoqKStA+JoW8gZ72aDQavS6VSlH/nTKk9FhvnI8HAD2Pm0JFKBT6eklJyUuV1bOCX2ICU3Xh12ALOTknGMVCZEbNIB5PoMcIQJi9FLMXXsgAOH7gI1jHd6NKSiAQqoHXW4LBZILifTyZTN4wMDDwfwD6xqL+RE2AX0emQP6gPBQK/a3f799cEZ5Ry3wCMwU67A2UYiCciT8g4Cgckj9IJlOsbUaDymm3N4BAMMSEj8X60BdtP51KpdYNDAx8ls33KeUd9/X6iTAgH4QKv98/q7y8/KmyimlzK6rqHBXjSNF0toDgPX5NN+2yHNSVkhnlRdmDWH8XYn2njvT399+eSqVOODQ/rvDjRYFCSssxQVGUyqqqqrsCZeE1pcFK+Hz2uwQ5NjhNoohpjMsKCmtslfwz2+MTZAwNpTAY70UiFn21p6fnMU3TqC6mSm9Cmp+sCTjXykEoA1BaWVm5zOPx3BOqrK+l6lGigM1Ngn4DwE0jX9p8ULiQo1y0RB0X2w3RpyDDMC3EB6IY6O04nU6nf9Lb27sr2+OLZYUnRzThX2dMxgScS+OOkToUlDGWVlRUrJNl+duhynrfCBC0jiwIuc9x9T5a6KzwDsGHdF1/pa+vb7OmafT6G2V4dIwqcyfwFJtcE72wwHU8RFL5TED4PR5PRVlZ2Q2Koqz2l1YEyTQ8XipSsl0aVuY6lJMte20t85HVNtvYFJAeTjKqpwb74pqmvR6LxV5Kp9Pcw5Pg9MLDmKFuLBmnAgDNSysnA6VcgYI0HR5FUbzBYPDvXS7Xt0RRXOTz+X0ubwD0GyJFcUNxeXIvW9GrbdQLNKmXaNCrdBloagaZoQGy8yHTNPerqvp2PB7/H03TqN1MwiazB32fFOXzwZgqADm1RSIRpbW1lX42QgexwqUoCgGjlJeXf93lci00TXOGKIrnWpZF/iNoWZaPmqT0sznLsoYEQYiZpvmFKIrtqqoe6O/vp3iuaZpGgtIbUKTt4UgkMtza2mq/vzPFcbYAyAeCilfKXQkM+k4Ha9kotBMyxtBog8Ae9ElC00Gaz0QiEfVsCT6VKDARzJlpRCIRsbW1lYQnMyEwSHj6br/DNjK4JonOdJDwJLSRFZrOT4nqxRZ9thlQ6DlMUDIR+mxtbeW/mBz9y0lbQLqOfWY1TV+nTPOv0glOhA1/1tf8P+a/O+ZB7/yUAAAAAElFTkSuQmCC":"data:image/png;base64,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"})}function e(i,s){let n=t(s);f.prepend(i,n);}let l=Array.from(z(".pls.favatar:not([data-is-detectingUserOnlineStatus])"));for(let i=0;i<l.length;i++){const s=l[i];let n=s.querySelector(".comiis_o.cl a.kmfxx");if(!n){w.error("探测用户在线状态失败，未找到发消息按钮");return}s.setAttribute("data-is-detectingUserOnlineStatus","true");let a=n.href,o=await N.get(a,{fetch:!0,allowInterceptConfig:!1});if(!o.status){w.error("探测用户在线状态，中止网络请求探测"),e(s,!0);return}let u=f.parseHTML(o.data.responseText,!0,!0).querySelector(".flb");if(u){let m=((r=f.text(u))==null?void 0:r.trim()).endsWith("……[离线]");e(s,m);}else e(s,!0);}},showUserLevel(){w.info("显示用户等级"),z(".pls.favatar:not([data-show-user-level])").forEach(t=>{t.setAttribute("data-show-user-level","true");let e="0级",l=t.querySelector(".tns tr"),r=t.querySelector("p em").innerText,i=document.createElement("td");switch(i.setAttribute("style","border-left: 1px solid #e3e3e3;"),r){case"幼儿园":case"初级工程师":e="1级";break;case"小学生":case"中级工程师":e="2级";break;case"初中生":case"高级工程师":e="3级";break;case"高中生":case"专家":e="4级";break;case"大学生":case"高级专家":e="5级";break;case"硕士生":case"资深专家":e="6级";break;case"博士生":case"实习版主":case"版主":case"审核员":case"研究员":e="7级";break;case"博士后":case"超级版主":case"网站编辑":case"高级研究员":e="8级";break;case"管理员":case"信息监察员":case"资深研究员":e="9级";break}i.innerHTML=`<p><a class="dj">${e}</a></p>Lv`,l.appendChild(i);});},hideBottomInfoBlock(){return w.info("隐藏底部信息块"),V(`
			.pls .favatar>*:not([id^="userinfo"]+div){
				display: none;
			}
			.pls .favatar>div[id^="userinfo"],
			.pls .favatar>div.tns{
				display: block;
			}
			.t_f{
				min-height: 100px !important;
			}
		`)}},Fe={init(){f.ready(()=>{b.execMenuOnce("mt-guide-beautifyPage",()=>this.beautifyPage());});},beautifyPage(){w.info("页面美化"),V(`
			.xst{font-size:15px}
			td.author_img{width:50px;padding:15px 0}
			td.author_img img{width:40px;height:40px;border-radius:50%}
			.list_author{margin-top:2px;color:#999;font-size:12px}
			.bankuai_tu_by a{color:#999!important}
			.bankuai_tu_by img{height:16px;margin:1px 1px 0 0;vertical-align:top}
			tbody a:hover{text-decoration:none;color:#3498db}
			.byg_th_align em+a{margin-right:5px}
		`),z(".bm_c table tbody").forEach(t=>{let e=t.querySelector("th.common"),l=f.html(e),r=e.querySelectorAll("a")[0].getAttribute("href"),i=null,n=t.querySelector("td.by>cite>a").getAttribute("href").match(/uid-(\d+)/)[1],a=`
			<td class="author_img">
				<a href="space-uid-${n}.html" c="1" mid="${i}">
					<img src="${B.getAvatar(n,"middle")}">
				</a>
			</td>
			<th colspan="3" class="new byg_th">
				<div class="byg_th_align">
					<em>[${t.querySelector("tr>td.by>a").outerHTML}]</em>
					${l}
				</div>
				<div class="list_author cl">
					<span class="z">作者:&nbsp;
						${t.querySelectorAll("td.by>cite>a")[0].innerHTML}
						${t.querySelectorAll("td.by>em>span")[0].innerHTML}
					</span>
					<span class="z pipe">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
					<span class="z">最后发表:&nbsp;
						${t.querySelectorAll("td.by>cite>a")[1].innerHTML}&nbsp;&nbsp;&nbsp;
						${t.querySelectorAll("td.by>em>a")[0].innerHTML}
					</span>
					<span class="y bankuai_tu_by">
						<a href="${r}">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACOUlEQVRYR+1X0XETMRDdtfRP0gFUgG9O+iZUAKmApAJMBZgKMBUQKohTQcy3dHOmApIOzL/lZTbc3eh0ki/kfMkww37Zlkbv7e7bJxnhiQOfGB/+HQJlWR45594AwAkAvAWAo6B6GwBYAsBKCHGVZRl/743eCjDwbrd7T0SzCGgKYIOIi8lk8qWPyF4C1lrO9OtfAIeEuArnSimuTDSSBIqiOCMiBh8ciPghz/NF7KAogUOC16CIeJ7n+UVIokPAGHOCiNeD044cQESvtdYrf6lDwFq7BoCXIxFYa62zJIFKdJdjgHtnnvqibFXAWss9ejcygW9KqbNGGz6YtZbH5tnIBDZKqeMUAQrBieiT1noemYwfQgj2CXDO8Zw3uqkVb4yZI+LH8EylVFP55kNZllPnXLlvszFmhYiveI8/20VRzIjoM/9ORN+11mzXd2Gt7SQlhMiyLGOxty+j2OZ6dKq74Kfnikul1GkFwhXge4JjI4R4wRacGuloBVJsq0N5dqehJRPRnywQec0P1hKvNZXwF5ME/BKPKMQrpdSddjotGMOCw0RCS275QNXnmxFH8VYIMfWv6I4V+4oeoQ0tF+y0wBsdX9WH4tFywKgG6h+rVrDyD3UpRcGTFfAqMfhuqJ00Vca9T7IhbwN2RCnlrHa8xyJwyy9jIlqGD4+DEOCsAGAupbzZbrfP/UOllOu+F3CMxN4WeMb0CxFnsTfd0BHp08CcAaSUi4dkdx9yvX9M7nPIkD3/CfwGBboJMIftEqkAAAAASUVORK5CYII=" />${t.querySelectorAll("td.num>a")[0].innerText}
						</a>&nbsp;
					</span>
					<span class="y bankuai_tu_by" style="margin-right: 20px">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACVElEQVRYR+1W3W3bQAwmTb83GzSdoDnr7rn2BukETSeoO0HtCdpO0GSCeoPYzzrhnA3sDZJ3yywYSIIk352sOIBRIHwTxCM/kh9/EM4seGb/8Abg/8mAc+4yz/NPAHANAFcAcNnizwYA1gCwIKKVUkq+O6UzA4XjHwBw02mtqXBLRPMuIFEAaZrOEFGcv1gQcZYkyTxkwAvAOXex2+3uEVFSfbIw83o4HE6UUo9tYwcAnHNXeZ7/9dS4/nYrtUbE5zozs/BBuPE+gnZDRAKiwY0GgCMif0LEaZIktz5HWZbdMPMvAHjn++/LRAOAtVZY/DEQxRMRjZVSohOUIoPLGAhjjCoNVACstYL8W5AsiF/bkadpOiYiHo1Gq/q7IhN/Ijh/a62n8v8ZgBhCxPvIg63Wuup7D0+kvp/r2bHWSq2DnGDmiTFmWQJYIqIMmZBUiEUhYHyjtf5QGujKKAAstdYTtNYKe4X1QUHE70mSSImi2SqjEr0sy6bM/DNmV/TPD6CI6jVK0OBJVwmYeWWMGR9LwkZ9CxIuaiTbEtF1HxISkRL9k9tQMihs7tOGzDw3xsyqNqwxNzaIHotReswgkpa+CBDwQWtd7ZiDUZznuUQTmoayTKZa6zuf8WIACfODzotpWi0l3zKSw0NARBcLMzeWESJKO7ePlDrOh7bzgxKU2rKUOjIRa2/fP6/zIIDSwmscJHXC+ZAde5IJY7/0DPuOiGYnnWR1h3Ib7vf7MTOXR2mbI3KkrBFxMRgMFr7r50UZ6Bl1b/XOEvS22PPBG4CzZ+AfrntRcuAjU2wAAAAASUVORK5CYII=" />${t.querySelectorAll("td.num>em")[0].innerText}
					</span>
				</div>
			</th>
			`;f.html(t,a);});}},ie=function(t,e,l,r,i,s="",n,a,o){let c={text:t,type:"input",isNumber:!!n,isPassword:!!a,props:{},attributes:{},description:r,afterAddToUListCallBack:o,getValue(){return this.props[M].get(e,l)},callback(u,h,m){this.props[M].set(e,n?m:h);},placeholder:s};return Reflect.set(c.attributes,Q,e),Reflect.set(c.attributes,$,l),Reflect.set(c.props,M,{get(u,h){return b.getValue(u,h)},set(u,h){b.setValue(u,h);}}),c},re=function(t,e,l,r,i,s="",n){let a={text:t,type:"textarea",attributes:{},props:{},description:r,placeholder:s,disabled:n,getValue(){return this.props[M].get(e,l)},callback(o,c){this.props[M].set(e,c);}};return Reflect.set(a.attributes,Q,e),Reflect.set(a.attributes,$,l),Reflect.set(a.props,M,{get(o,c){return b.getValue(o,c)},set(o,c){b.setValue(o,c);}}),a};class be{constructor(e){Z(this,"option");this.option=e;}async showView(){var n;let e=D.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist">
                            
                        </ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:!0},btn:x.assign({ok:{callback:async()=>{await s();}}},this.option.btn||{},!0),mask:{enable:!0},style:`
                ${D.config.cssText.panelCSS}
                
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
            `,width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh"}),l=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");let r=e.$shadowRoot.querySelector(".rule-form-ulist"),i=await this.option.getView(await this.option.data());r.appendChild(i);const s=async()=>{(await this.option.onsubmit(l,await this.option.data())).success&&(e.close(),await this.option.dialogCloseCallBack(!0));};}}const He={$el:{isFilterElementHTML:[]},$key:{STORAGE_KEY:"mt-post-comment-filter-rule"},init(){if(this.registerMenu(),ae.isPost()){let t=this.getData();if(!t.enable)return;let e=new x.LockFunction(()=>{this.runFilter(t);});x.mutationObserver(document,{config:{subtree:!0,childList:!0},callback:()=>{e.run();}});}},registerMenu(){Y.add({key:"comment-filter",text:"⚙ 评论过滤器",autoReload:!1,isStoreValue:!1,showText(t){return t},callback:()=>{this.showView();}});},runFilter(t){let e=function(r){for(const i of t.userBlackList)if(i==r.userName||i==r.userUID)return w.success("评论过滤器：黑名单用户",r),!0;return !1},l=function(r){for(const i of t.userWhiteList)if(i===r.userName||i===r.userUID)return w.success("评论过滤器：白名单用户",r),!0;return !1};z(".comiis_vrx").forEach(r=>{var n,a,o,c,u;if(r.querySelector(".plc .pti .authi .show"))return;let i=r.querySelector(".pls .authi a"),s={userName:(i==null?void 0:i.innerText)||"",userUID:((o=(a=(n=i==null?void 0:i.href)==null?void 0:n.match(te.uid))==null?void 0:a[2])==null?void 0:o.trim())||"",content:((u=(c=r.querySelector(".plc td.t_f"))==null?void 0:c.innerText)==null?void 0:u.trim())||"",isAuthor:!1};if(!l(s)){if(t.replyFlag&&r.querySelector(".quote")){let h=r.querySelector(".quote");this.$el.isFilterElementHTML.push(h.outerHTML),h.remove();}if(!(s.isAuthor&&!t.avatarFlag)){if(e(s)){this.$el.isFilterElementHTML.push(r.outerHTML),r.remove();return}if(!(typeof t.minLength=="number"&&t.minLength>s.content.length)&&!(typeof t.keywordLength=="number"&&t.keywordLength<s.content.length))for(const h of t.keywords){if(typeof h!="string")continue;let m=new RegExp(h);if(s.content.match(m)){console.log("评论过滤器：",s),this.$el.isFilterElementHTML.push(r.outerHTML),r.remove();return}}}}});},showView(){const t=this;function e(i){return {get(s,n){let a=t.getData(),o=Reflect.get(a,s,n);return (s==="keywords"||s==="userWhiteList"||s==="userBlackList")&&(o=o.join(`
`)),o},set(s,n){(s==="keywords"||s==="userWhiteList"||s==="userBlackList")&&(n=n.split(`
`).filter(a=>a.trim()!="")),Reflect.set(i,s,n),t.setData(i);}}}let l=D.config.panelHandleContentUtils();new be({title:"评论过滤器",data:()=>this.getData(),getView:i=>{let s=document.createDocumentFragment(),n=R("启用","enable",!0);Reflect.set(n.props,M,e(i));let a=l.createSectionContainerItem_switch(n),o=R("处理回复引用","replyFlag",!1,void 0,"移除引用");Reflect.set(o.props,M,e(i));let c=l.createSectionContainerItem_switch(o),u=R("处理作者评论","avatarFlag",!1);Reflect.set(u.props,M,e(i));let h=l.createSectionContainerItem_switch(u),m=R('处理从"搜索页面"或"我的帖子提醒页面"进入的网站',"viewthreadFlag",!1);Reflect.set(m.props,M,e(i));let d=l.createSectionContainerItem_switch(m),p=ie("匹配的评论内容长度最小值","minLength",5,"小于此长度的评论就算关键字匹配成功了也不会被排除",void 0,"",!0);Reflect.set(p.props,M,e(i));let g=l.createSectionContainerItem_input(p),y=ie("匹配的评论内容长度最大值","keywordLength",8,"大于此长度的评论就算关键字匹配成功了也不会被排除",void 0,"",!0);Reflect.set(y.props,M,e(i));let A=l.createSectionContainerItem_input(y),v=re("评论关键字","keywords","","多个评论关键字换行分割");Reflect.set(v.props,M,e(i));let C=l.createSectionContainerItem_textarea(v),I=re("黑名单用户","userBlackList","","多个用户换行分割");Reflect.set(I.props,M,e(i));let E=l.createSectionContainerItem_textarea(I),T=re("白名单用户","userWhiteList","","多个用户换行分割");Reflect.set(T.props,M,e(i));let k=l.createSectionContainerItem_textarea(T);return s.append(a,c,h,d,g,A,C,E,k),s},btn:{merge:!0,position:"space-between",ok:{enable:!1},cancel:{enable:!0,text:"关闭"},other:{enable:!0,text:`查看已过滤（${this.$el.isFilterElementHTML.length}）`,type:"primary",callback:(i,s)=>{D.alert({title:{text:"评论过滤器-已过滤",position:"center"},content:{text:`
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
            `}).showView();},getTemplateData(){return {enable:!0,avatarFlag:!1,replyFlag:!1,viewthreadFlag:!1,minLength:5,keywordLength:8,keywords:[],userBlackList:[],userWhiteList:[]}},getData(){return q(this.$key.STORAGE_KEY,this.getTemplateData())},setData(t){W(this.$key.STORAGE_KEY,t);}};class ze{constructor(e){Z(this,"option");this.option=e;}showView(){let e=D.alert({title:{text:this.option.title,position:"center"},content:{text:`
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
            `}),l=e.$shadowRoot.querySelector(".filter-container"),r=document.createDocumentFragment();this.option.filterOption.forEach(i=>{let s=document.createElement("button");s.innerText=i.name;let n=async()=>{(await this.option.getAllRuleInfo()).forEach(async o=>{await i.filterCallBack(o.data)?f.show(o.$el,!1):f.hide(o.$el,!1);}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),e.close();};f.on(s,"click",async a=>{x.preventEvent(a),!(typeof i.callback=="function"&&!await i.callback(a,n))&&await n();}),r.appendChild(s);}),l.appendChild(r);}}class Ve{constructor(e){Z(this,"option");this.option=e;}async showView(){var r,i,s,n,a,o,c,u,h;let e=D.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:!0},btn:{merge:!0,reverse:!1,position:"space-between",ok:{enable:((s=(i=(r=this.option)==null?void 0:r.bottomControls)==null?void 0:i.add)==null?void 0:s.enable)||!0,type:"primary",text:"添加",callback:async m=>{this.showEditView(e.$shadowRoot,!1,await this.option.getAddData());}},close:{enable:!0,callback(m){e.close();}},cancel:{enable:((o=(a=(n=this.option)==null?void 0:n.bottomControls)==null?void 0:a.filter)==null?void 0:o.enable)||!1,type:"default",text:"过滤",callback:(m,d)=>{var y,A,v,C,I,E,T;typeof((v=(A=(y=this.option)==null?void 0:y.bottomControls)==null?void 0:A.filter)==null?void 0:v.callback)=="function"&&this.option.bottomControls.filter.callback();let p=()=>Array.from(e.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),g=d.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");f.text(g).includes("取消")?(p().forEach(k=>{f.show(k,!1);}),f.text(g,"过滤")):new ze({title:((I=(C=this.option.bottomControls)==null?void 0:C.filter)==null?void 0:I.title)??"过滤规则",filterOption:((T=(E=this.option.bottomControls)==null?void 0:E.filter)==null?void 0:T.option)||[],execFilterCallBack(){f.text(g,"取消过滤");},getAllRuleInfo:()=>p().map(H=>({data:this.parseRuleItemElement(H).data,$el:H}))}).showView();}},other:{enable:((h=(u=(c=this.option)==null?void 0:c.bottomControls)==null?void 0:u.clear)==null?void 0:h.enable)||!0,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:m=>{let d=D.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:!1},btn:{ok:{enable:!0,callback:async p=>{var y,A,v;if(w.success("清空所有"),typeof((v=(A=(y=this.option)==null?void 0:y.bottomControls)==null?void 0:A.clear)==null?void 0:v.callback)=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){S.error("清理失败");return}else S.success("清理成功");await this.updateDeleteAllBtnText(e.$shadowRoot),this.clearContent(e.$shadowRoot),d.close();}},cancel:{text:"取消",enable:!0}},mask:{enable:!0},width:"300px",height:"200px"});}}},mask:{enable:!0},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
            ${D.config.cssText.panelCSS}
            
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
            `}),l=await this.option.data();for(let m=0;m<l.length;m++)await this.appendRuleItemElement(e.$shadowRoot,l[m]);}parseViewElement(e){let l=e.querySelector(".rule-view-container"),r=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:l,$deleteBtn:r}}parseRuleItemElement(e){let l=e.querySelector(".rule-controls-enable"),r=l.querySelector(".pops-panel-switch"),i=l.querySelector(".pops-panel-switch__input"),s=l.querySelector(".pops-panel-switch__core"),n=e.querySelector(".rule-controls-edit"),a=e.querySelector(".rule-controls-delete");return {$enable:l,$enableSwitch:r,$enableSwitchInput:i,$enableSwitchCore:s,$edit:n,$delete:a,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,l){let r=await this.option.getDataItemName(e),i=f.createElement("div",{className:"rule-item",innerHTML:`
			<div class="rule-name">${r}</div>
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
					${D.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${D.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(i,"data-rule",e);let s="pops-panel-switch-is-checked";const{$enable:n,$enableSwitch:a,$enableSwitchCore:o,$enableSwitchInput:c,$delete:u,$edit:h}=this.parseRuleItemElement(i);return this.option.itemControls.enable.enable?(f.on(o,"click",async m=>{let d=!1;a.classList.contains(s)?(a.classList.remove(s),d=!1):(a.classList.add(s),d=!0),c.checked=d,await this.option.itemControls.enable.callback(e,d);}),await this.option.itemControls.enable.getEnable(e)&&a.classList.add(s)):n.remove(),this.option.itemControls.edit.enable?f.on(h,"click",m=>{x.preventEvent(m),this.showEditView(l,!0,e,i,d=>{e=null,e=d;});}):h.remove(),this.option.itemControls.delete.enable?f.on(u,"click",m=>{x.preventEvent(m);let d=D.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:!1},btn:{ok:{enable:!0,callback:async p=>{w.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(S.success("成功删除该数据"),i.remove(),await this.updateDeleteAllBtnText(l),d.close()):S.error("删除该数据失败");}},cancel:{text:"取消",enable:!0}},mask:{enable:!0},width:"300px",height:"200px"});}):u.remove(),i}async appendRuleItemElement(e,l){const{$container:r}=this.parseViewElement(e);if(Array.isArray(l))for(let i=0;i<l.length;i++){const s=l[i];r.appendChild(await this.createRuleItemElement(s,e));}else r.appendChild(await this.createRuleItemElement(l,e));await this.updateDeleteAllBtnText(e);}async updateRuleContaienrElement(e){this.clearContent(e),this.parseViewElement(e);let l=await this.option.data();await this.appendRuleItemElement(e,l),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,l,r){let i=await this.createRuleItemElement(e,r);l.after(i),l.remove();}clearContent(e){const{$container:l}=this.parseViewElement(e);f.html(l,"");}setDeleteBtnText(e,l,r=!1){const{$deleteBtn:i}=this.parseViewElement(e);r?f.html(i,l):f.text(i,l);}async updateDeleteAllBtnText(e){let l=await this.option.data();this.setDeleteBtnText(e,`清空所有(${l.length})`);}showEditView(e,l,r,i,s){let n=async o=>{if(!o){if(l||await this.option.deleteData(r),typeof s=="function"){let c=await this.option.getData(r);s(c);}}};new be({title:l?"编辑":"添加",data:()=>r,dialogCloseCallBack:n,getView:async o=>await this.option.itemControls.edit.getView(o,l),btn:{ok:{enable:!0,text:l?"修改":"添加"},cancel:{callback:async(o,c)=>{o.close(),await n(!1);}},close:{callback:async(o,c)=>{o.close(),await n(!1);}}},onsubmit:async(o,c)=>{let u=await this.option.itemControls.edit.onsubmit(o,l,c);return u.success?l?(S.success("修改成功"),await this.updateRuleItemElement(u.data,i,e)):await this.appendRuleItemElement(e,u.data):l&&S.error("修改失败"),u},style:this.option.itemControls.edit.style}).showView();}}const qe={$key:{STORAGE_KEY:"mt-productListingReminder-rule"},init(){this.registerMenu(),this.runRule();},registerMenu(){Y.add({key:"product-reminder",text:"⚙ 商品上架提醒",autoReload:!1,isStoreValue:!1,showText(t){return t},callback:()=>{this.showView();}});},async runRule(){async function t(){let r=await N.get("/keke_integralmall-keke_integralmall.html",{allowInterceptConfig:!1,headers:{"User-Agent":x.getRandomAndroidUA()}});if(!r.status){S.error("【积分商城】获取数据失败");return}let i=[];return f.parseHTML(r.data.responseText,!0,!0).querySelectorAll(".task-list-wrapper li.col-xs-12").forEach(n=>{var a,o;i.push({name:f.text(n.querySelector(".mall-info a > *:first-child"))||f.text(n.querySelector(".mall-info a")),price:f.text(n.querySelector(".mall-info span.discount-price i")),endTime:f.text(n.querySelector(".mall-info #time_hz span.time")),remainingQuantity:parseInt(((o=(a=n.querySelector(".mall-info .mall-count .count-r"))==null?void 0:a.innerText)==null?void 0:o.replace(/仅剩|件/gi,""))||"0")});}),i}if(ae.isPointsMall())return;let e=this.getData();if(!e.length)return;let l=await t();if(l){for(const r of l)for(const i of e)if(i.enable&&r.name.match(new RegExp(i.productName,"i"))&&!isNaN(r.remainingQuantity)&&r.remainingQuantity>0){w.success("成功匹配对应商品",i,r),D.confirm({title:{text:"积分商城提醒",position:"center"},content:{text:`<br />
                            您设置的商品已上架在积分商城中，当前售价 ${r.price}金币，仅剩${r.remainingQuantity}件，是否前往购买？
                            <a style="color: red !important;">(如需关闭提醒，请删除该关键字)</a>
                            <br />`,html:!0},btn:{merge:!0,position:"space-between",other:{enable:!0,type:"danger",text:"删除提醒",callback:()=>{this.deleteData(i)?S.success("删除成功"):S.error("删除失败");}},ok:{text:"前往购买",callback:()=>{window.location.href=`${window.location.origin}/keke_integralmall-keke_integralmall.html`;}}},width:"300px",height:"300px"});return}}},getTemplateData(){return {uuid:x.generateUUID(),enable:!0,name:"",productName:""}},showView(){let t=D.config.panelHandleContentUtils();function e(r){return {get(i,s){return r[i]??s},set(i,s){r[i]=s;}}}new Ve({title:"商品上架提醒",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:r=>r.name,updateData:r=>this.updateData(r),deleteData:r=>this.deleteData(r),getData:r=>this.getData().find(n=>n.uuid===r.uuid)??r,itemControls:{enable:{enable:!0,getEnable(r){return r.enable},callback:(r,i)=>{r.enable=i,this.updateData(r);}},edit:{enable:!0,getView:(r,i)=>{let s=document.createDocumentFragment();i||(r=this.getTemplateData());let n=R("启用","enable",!0);Reflect.set(n.props,M,e(r));let a=t.createSectionContainerItem_switch(n),o=ie("规则名称","name","","",void 0,"必填");Reflect.set(o.props,M,e(r));let c=t.createSectionContainerItem_input(o),u=ie("商品名","productName","","",void 0,"可正则，需手动转义");Reflect.set(u.props,M,e(r));let h=t.createSectionContainerItem_input(u);return s.append(a,c,h),s},onsubmit:(r,i,s)=>{let n=r.querySelectorAll(".rule-form-ulist > li"),a=this.getTemplateData();return i&&(a.uuid=s.uuid),n.forEach(o=>{let c=Reflect.get(o,"__formConfig__"),u=Reflect.get(c,"attributes"),h=Reflect.get(o,M),m=Reflect.get(u,Q),d=Reflect.get(u,$),p=h.get(m,d);Reflect.has(a,m)?Reflect.set(a,m,p):w.error(`${m}不在数据中`);}),a.name.trim()===""?(S.error("规则名称不能为空"),{success:!1,data:a}):i?{success:this.updateData(a),data:a}:{success:this.addData(a),data:a}}},delete:{enable:!0,deleteCallBack:r=>this.deleteData(r)}}}).showView();},getData(){return q(this.$key.STORAGE_KEY,[])},setData(t){W(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(r=>r.uuid==t.uuid)===-1?(e.push(t),W(this.$key.STORAGE_KEY,e),!0):!1},updateData(t){let e=this.getData(),l=e.findIndex(i=>i.uuid==t.uuid),r=!1;return l!==-1&&(r=!0,e[l]=t),this.setData(e),r},deleteData(t){let e=this.getData(),l=e.findIndex(i=>i.uuid==t.uuid),r=!1;return l!==-1&&(r=!0,e.splice(l,1)),this.setData(e),r},clearData(){le(this.$key.STORAGE_KEY);}},Pe=`.pops-confirm-content {\r
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
`,_e={$data:{cid:""},init(){this.registerMenu();},registerMenu(){Y.add({key:"black-home",text:"⚙ 小黑屋",autoReload:!1,isStoreValue:!1,showText(t){return t},callback:()=>{this.showBlackHome();}});},async showBlackHome(){let t=S.loading("正在获取小黑屋名单中..."),e=await this.getBlackListInfo("");if(t.close(),!e)return;if(e.data.length===0){S.error("获取小黑屋名单为空");return}this.$data.cid=e.next_cid;let l=D.confirm({title:{text:"小黑屋名单",position:"center"},content:{text:`
                <div class="blackhome-user-filter">
                    <input placeholder="过滤用户名/操作人员/UID(可正则)">
                </div>
                <div class="blackhome-user-list"></div>
                `,html:!0},btn:{ok:{text:"下一页",callback:async()=>{let a=S.loading("正在获取小黑屋名单中...");w.info("下一页的cid: ",this.$data.cid);let o=await this.getBlackListInfo(this.$data.cid);a.close(),o&&(this.$data.cid=o.next_cid,o.data.forEach(c=>{let u=this.createListViewItem(c);r.appendChild(u);}),o.data.length===0?S.error("获取小黑屋名单为空"):S.success(`成功获取 ${o.data.length}条数据`));}},cancel:{text:"关闭"}},width:K.settingBig.width,height:K.settingBig.height,style:Pe,mask:{enable:!0}}),r=l.$shadowRoot.querySelector(".blackhome-user-list"),i=l.$shadowRoot.querySelector(".blackhome-user-filter input");e.data.forEach(a=>{let o=this.createListViewItem(a);r.appendChild(o);}),S.success(`成功获取 ${e.data.length}条数据`);let s=!1;f.on(i,["input","propertychange"],x.debounce(()=>{let a=i.value.trim();if(!s){if(s=!0,a==""){l.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(o=>{o.removeAttribute("style");}),s=!1;return}l.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(o=>{o.getAttribute("data-name").match(new RegExp(a,"ig"))||o.getAttribute("data-uid").trim().match(new RegExp(a,"ig"))||o.getAttribute("data-operator").match(new RegExp(a,"ig"))?o.removeAttribute("style"):o.setAttribute("style","display:none;");}),s=!1;}}));let n=await this.getBlackListInfo(this.$data.cid);n&&(this.$data.cid=n.next_cid);},async getBlackListInfo(t=""){let e={mod:"misc",action:"showdarkroom",cid:t,ajaxdata:"json"},l=await N.get(`/forum.php?${x.toSearchParamsStr(e)}`,{headers:{"User-Agent":x.getRandomPCUA()},responseType:"json"});if(!l.status)return;let r=x.toJSON(l.data.responseText),i=r.message.split("|"),s=i[i.length-1],n=x.parseObjectToArray(r.data),a=[],o=[];return n.forEach(c=>{let u=c.dateline.match(/([0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]*[0-9]{1,2}:[0-9]{1,2})/g);if(u==null){let h=parseInt((Date.now()/1e3).toString()),m=0,d=c.dateline.match(/([0-9]+|半)[\s\S]*秒前/),p=c.dateline.match(/([0-9]+|半)[\s\S]*分钟前/),g=c.dateline.match(/([0-9]+|半)[\s\S]*小时前/),y=c.dateline.match(/昨天[\s\S]*(\d{2}):(\d{2})/),A=c.dateline.match(/前天[\s\S]*(\d{2}):(\d{2})/),v=c.dateline.match(/([0-9]+|半)[\s\S]*天前/);if(d)d=d[d.length-1],d=d.replace(/半/g,.5),d=parseFloat(d),m=h-d;else if(p)p=p[p.length-1],p=p.replace(/半/g,.5),p=parseFloat(p),m=h-p*60;else if(g)g=g[g.length-1],g=g.replace(/半/g,.5),g=parseFloat(g),m=h-g*60*60;else if(y){let C=y[1],I=y[2];m=h-86400-parseInt(C)*3600-parseInt(I)*60;}else if(A){let C=A[1],I=A[2];m=h-86400*2-parseInt(C)*3600-parseInt(I)*60;}else v&&(v=v[v.length-1],v=v.replace(/半/g,.5),v=parseFloat(v),m=h-v*60*60*24);c.time=parseInt(m.toString())*1e3,a=a.concat(c);return}else u=u[0];c.time=x.formatToTimeStamp(u),a=a.concat(c);}),x.sortListByProperty(a,"time"),x.sortListByProperty(o,"time",!1),a=a.concat(o),{next_cid:s,data:a}},createListViewItem(t){let e=f.createElement("div",{className:"blackhome-user-item",innerHTML:`
                <div class="blackhome-user-avatar">
                    <div class="blackhome-user">
                    <img src="${B.getAvatar(t.uid,"big")}" loading="lazy">
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
                        <img loading="lazy" src="${B.getAvatar(t.operatorid,"big")}">
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
`,Qe={$data:{},init(){this.registerMenu();},registerMenu(){Y.add({key:"online-user",text:"⚙ 在线用户",autoReload:!1,isStoreValue:!1,showText(t){return t},callback:()=>{this.showOnlineUser();}});},async showOnlineUser(){let t=S.loading("正在获取在线用户名单中..."),e=await this.getOnlineUserListInfo();if(t.close(),!e)return;let l=D.alert({title:{text:"在线用户",position:"center"},content:{text:`
                <div class="online-user-info">${e.totalOnline} 人在线 - ${e.onlineUser} 会员${e.invisibleUser==0?"":`(${e.invisibleUser}隐身)`} - ${e.noRegisterUser} 位游客</div>
                <div class="online-user-filter">
                    <input placeholder="过滤用户名/身份/UID(可正则)"></div>
                <div class="online-user-list"></div>
                `,html:!0},btn:{ok:{text:"关闭",type:"default"}},width:K.settingBig.width,height:K.settingBig.height,style:We,mask:{enable:!0}}),r=l.$shadowRoot.querySelector(".online-user-list"),i=l.$shadowRoot.querySelector(".online-user-filter input");e.data.forEach(n=>{let a=this.createListViewItem(n);r.appendChild(a);}),S.success(`成功获取 ${e.data.length}条数据`);let s=!1;J.on(i,["propertychange","input"],x.debounce(()=>{let n=i.value.trim();if(!s){if(s=!0,n==""){l.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(a=>{a.removeAttribute("style");}),s=!1;return}l.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(a=>{a.getAttribute("data-name").match(new RegExp(n,"ig"))||a.getAttribute("data-sf").match(new RegExp(n,"ig"))||a.getAttribute("data-uid").match(new RegExp(n,"ig"))?a.removeAttribute("style"):a.setAttribute("style","display:none;");}),s=!1;}}));},async getOnlineUserListInfo(){let t={showoldetails:"yes"},e=await N.get(`/forum.php?${x.toSearchParamsStr(t)}`,{headers:{"User-Agent":x.getRandomPCUA()}});if(!e.status)return;let l=x.parseFromString(e.data.responseText,"text/html"),r={data:[],totalOnline:0,onlineUser:0,noRegisterUser:0,invisibleUser:0};l.querySelectorAll("#onlinelist ul li").forEach(n=>{let a=n.querySelector("a").getAttribute("href").match("uid-(.+?).html")[1],o=B.getAvatar(a,"middle"),c=n.querySelector("a").innerText,u="",h=n.querySelector("a").getAttribute("href"),m=n.querySelector("img").src;m.indexOf("online_member")!=-1?u="会员":m.indexOf("online_moderator")!=-1?u="版主":m.indexOf("online_supermod")!=-1?u="超级版主":m.indexOf("online_admin")!=-1?u="管理员":u="未知身份",r.data.push({uid:a,avatar:o,name:c,sf:u,space:h});});let s=l.querySelector("#online div.bm_h span.xs1").textContent;return r.totalOnline=x.parseInt(s.match(/([0-9]*)\s*人在线/i),0),r.onlineUser=x.parseInt(s.match(/([0-9]*)\s*会员/i),0),r.noRegisterUser=x.parseInt(s.match(/([0-9]*)\s*位游客/i),0),r.invisibleUser=x.parseInt(s.match(/([0-9]*)\s*隐身/i),0),r},createListViewItem(t){let e=J.createElement("div",{className:"online-item",innerHTML:`
                <div class="online-user">
                    <img data-avatar src="${t.avatar}" loading="lazy" class="online-user-avatar">
                    <div class="online-user-info">
                        <p data-name>${t.name}</p>
                        <span data-sf="${t.sf}">${t.sf}</span>
                        <span data-uid>UID: ${t.uid}</span>
                    </div>
                </div>
            `},{"data-name":t.name,"data-uid":t.uid,"data-sf":t.sf});return J.on(e,"click",".online-user-avatar",l=>{x.preventEvent(l),window.open(`home.php?mod=space&uid=${t.uid}&do=profile`,"_blank");}),e}},$e={$flag:{showUserUID_initCSS:!1},init(){b.onceExec("mt-MTCommentFilter",()=>{He.init();}),ae.isPost()?(w.info("Router: 帖子"),we.init()):ae.isGuide()?(w.info("Router: 导读"),Fe.init()):w.error("Router: 未适配的链接 ==> "+window.location.href),f.ready(()=>{b.onceExec("mt-MTProductListingReminder",()=>{qe.init();}),b.onceExec("mt-blackHome",()=>{_e.init();}),b.onceExec("mt-onlineUser",()=>{Qe.init();}),b.execMenuOnce("mt-link-text-to-hyperlink",()=>{Ue();}),b.execMenuOnce("mt-addLatestPostBtn",()=>{this.addLatestPostBtn();}),b.execMenu("mt-auto-sign",()=>{j.init();});});},addLatestPostBtn(){w.info("新增【最新发表】"),f.append("#comiis_nv .wp.comiis_nvbox.cl ul",`
			<li id="latest_publication">
				<a href="/forum.php?mod=guide&view=newthread" hidefocus="true" title="最新发表">最新发表</a>
			</li>
		`),window.location.href.includes("/forum.php?mod=guide&view=newthread")&&(f.removeClass("#mn_forum_10","a"),f.css("#latest_publication a","background",'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAADICAYAAAAk7PuyAAAAAXNSR0IArs4c6QAAAGFJREFUWEft1zESgCAQQ9HsVfb+d5RRlLHRVotHS5f5+YHKyymXiRAihKMISBDCNOInJHT39iTkcpkIYUcTCUKYkkKCEJBwTaY6cML5eiNGYiRGYrz9pqyDdbAOqxC/q8MApobR97qxnMwAAAAASUVORK5CYII=") repeat-x 50% -50px'));}};b.init();$e.init();});je();

})(Qmsg, DOMUtils, Utils, pops, hljs, Viewer);