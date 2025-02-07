// ==UserScript==
// @name         MT论坛优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.2.7
// @author       WhiteSevs
// @description  MT论坛效果增强，如自动签到、自动展开帖子、用户状态查看、美化导航、动态头像上传、最新发表、评论过滤器等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://bbs.binmt.cc/*
// @exclude      /^http(s|)://bbs.binmt.cc/uc_server.*$/
// @require      https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.6.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.4.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.9.7/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.js
// @require      https://fastly.jsdelivr.net/npm/@highlightjs/cdn-assets@11.11.1/highlight.min.js
// @resource     HljsCSS    https://fastly.jsdelivr.net/npm/highlight.js@11.11.1/styles/github-dark.min.css
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

(function (k, J, G, ie, X, Ce) {
	'use strict';

	var ke=Object.defineProperty;var Se=(t,e,o)=>e in t?ke(t,e,{enumerable:true,configurable:true,writable:true,value:o}):t[e]=o;var Te=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Z=(t,e,o)=>Se(t,e+"",o);var Ke=Te((ye,oe)=>{var le=typeof GM_deleteValue<"u"?GM_deleteValue:undefined,de=typeof GM_getResourceText<"u"?GM_getResourceText:undefined,V=typeof GM_getValue<"u"?GM_getValue:undefined,ee=typeof GM_info<"u"?GM_info:undefined,Ie=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:undefined,W=typeof GM_setValue<"u"?GM_setValue:undefined,Me=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:undefined,Ee=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:undefined,N=typeof unsafeWindow<"u"?unsafeWindow:undefined,Re=window;const De={$data:{get enable(){return A.getValue("httpx-use-cookie-enable")},get useDocumentCookie(){return A.getValue("httpx-use-document-cookie")},cookieRule:[]},fixCookieSplit(t){return x.isNotNull(t)&&!t.trim().endsWith(";")&&(t+=";"),t},concatCookie(t,e){return x.isNull(t)?e:(t=t.trim(),e=e.trim(),t=this.fixCookieSplit(t),e.startsWith(";")&&(e=e.substring(1)),t.concat(e))},handle(t){if(t.fetch||!this.$data.enable)return;let e="",o=t.url;o.startsWith("//")&&(o=window.location.protocol+o);let l=new URL(o);this.$data.useDocumentCookie&&l.hostname.endsWith(window.location.hostname.split(".").slice(-2).join("."))&&(e=this.concatCookie(e,document.cookie.trim()));for(let i=0;i<this.$data.cookieRule.length;i++){let c=this.$data.cookieRule[i];if(l.hostname.match(c.hostname)){let a=A.getValue(c.key);if(x.isNull(a))break;e=this.concatCookie(e,a);}}x.isNotNull(e)&&(t.headers&&t.headers.Cookie?t.headers.Cookie=this.concatCookie(t.headers.Cookie,e):t.headers.Cookie=e,w.info(["Httpx => 设置cookie:",t])),t.headers&&t.headers.Cookie!=null&&x.isNull(t.headers.Cookie)&&delete t.headers.Cookie;}},se={addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(o=>{Array.isArray(o)?e=e.concat(o):e.push(o);}),z(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){let e=typeof de=="function"?de(t.keyName):"";typeof e=="string"&&e?z(e):se.loadStyleLink(t.url);},async loadStyleLink(t){let e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=t,m.ready(()=>{document.head.appendChild(e);});},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(o=>{e.onload=()=>{o(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.match(/^http(s|):\/\//i)||(t.startsWith("/")||(t+="/"),t=window.location.origin+t),t},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;let e=new URL(t);return e.protocol="https:",e.toString()}},xe={Viewer:{keyName:"ViewerCSS",url:"https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"},Hljs:{keyName:"HljsCSS",url:"https://fastly.jsdelivr.net/npm/highlight.js@latest/styles/github-dark.min.css"}};(function(t,e){typeof ye=="object"&&typeof oe<"u"?oe.exports=e():(t=typeof globalThis<"u"?globalThis:t||self,t.Watermark=e(t.Watermark));})(typeof window<"u"?window:undefined,function(t){let e=function(){};CanvasRenderingContext2D.prototype.letterSpacingText=function(a,n,r,s){var u=this,h=u.canvas;if(!s&&h&&(s=parseFloat(window.getComputedStyle(h).letterSpacing)),!s)return this.fillText(a,n,r);var f=a.split(""),d=u.textAlign||"left",p=u.measureText(a).width,g=p+s*(f.length-1);d=="center"?n=n-g/2:d=="right"&&(n=n-g),u.textAlign="left",f.forEach(function(y){var v=u.measureText(y).width;u.fillText(y,n,r),n=n+v+s;}),u.textAlign=d;},CanvasRenderingContext2D.prototype.wrapText=function(a,n,r,s,u,h){if(!(typeof a!="string"||typeof n!="number"||typeof r!="number")){var f=this,d=f.canvas;typeof s>"u"&&(s=d&&d.width||300),typeof u>"u"&&(u=d&&parseInt(window.getComputedStyle(d).lineHeight)||parseInt(window.getComputedStyle(document.body).lineHeight));for(var p=a.split(""),g="",y=0;y<p.length;y++){var v=g+p[y],b=f.measureText(v),C=b.width;C>s&&y>0?(h?f.strokeText(g,n,r,d.width):f.fillText(g,n,r),g=p[y],r+=u):g=v;}h?f.strokeText(g,n,r,d.width):f.fillText(g,n,r);}},CanvasRenderingContext2D.prototype.fillTextVertical=function(a,n,r){var s=this;s.canvas;var u=a.split(""),h=u.map(function(p){return s.measureText(p).width}),f=s.textAlign,d=s.textBaseline;f=="left"?n=n+Math.max.apply(null,h)/2:f=="right"&&(n=n-Math.max.apply(null,h)/2),d=="bottom"||d=="alphabetic"||d=="ideographic"?r=r-h[0]/2:(d=="top"||d=="hanging")&&(r=r+h[0]/2),s.textAlign="center",s.textBaseline="middle",u.forEach(function(p,g){var v=h[g],y=p.charCodeAt(0);y<=256?(s.translate(n,r),s.rotate(90*Math.PI/180),s.translate(-n,-r)):g>0&&a.charCodeAt(g-1)<256&&(r=r+h[g-1]/2),s.fillText(p,n,r),s.setTransform(1,0,0,1,0,0);var v=h[g];r=r+v;}),s.textAlign=f,s.textBaseline=d;};function o(a){let n=new FileReader;return new Promise(r=>{n.onloadend=async function(s){r(s);},n.readAsDataURL(a);})}function l(a){let n=new Image;return new Promise(r=>{n.onload=()=>{r(n);},n.src=a;})}function i(a,n,r){let s=false;return Array.from(a).forEach(u=>{if(u.x==n&&u.y==r){s=true;return}}),s}function c(a){return a instanceof Array?a[Math.floor(Math.random()*a.length)]:a}return e.prototype.setFile=function(a){let n=this;return new Promise(async r=>{try{var s=await o(a);await n.setImage(s.target.result),r(!0);}catch{r(false);}})},e.prototype.setImage=function(a){this.dataUrl=a;let n=this;return new Promise(async r=>{var s=await l(a);n.sizes={width:s.width,height:s.height};var u=document.createElement("canvas");u.width=n.sizes.width,u.height=n.sizes.height;var h=u.getContext("2d");h.drawImage(s,0,0),s=null,n.canvas=u,r(true);})},e.prototype.hasImage=function(){return !!this.dataUrl},e.prototype.getSize=function(){return this.sizes},e.prototype.clearMark=function(){let a=this;if(typeof a.canvas>"u")return;function n(){var r=a.canvas.getContext("2d");r.clearRect(0,0,a.canvas.width,a.canvas.height);var s=a.canvas.width,u=a.canvas.height;a.canvas.width=s,a.canvas.height=u,r.beginPath();var h=new Image;h.src=a.dataUrl,r.drawImage(h,0,0),h=null;}n();},e.prototype.addText=function(a){var n={text:["Call By waterMark.addText"],fontSize:"6vw",fontFamily:"Microsoft Yahei",color:"#000000",textAlign:"center",stroke:false,globalAlpha:.7,rotateAngle:50,maxWidth:100,xMoveDistance:30,yMoveDistance:30};for(let E in n)typeof a[E]<"u"&&(n[E]=a[E]);n.maxWidth=parseInt(n.maxWidth)>0?n.maxWidth:1,n.xMoveDistance=parseInt(n.xMoveDistance)>0?n.xMoveDistance:1,n.yMoveDistance=parseInt(n.yMoveDistance)>0?n.yMoveDistance:1;var r=this.canvas.getContext("2d"),s=n.fontSize;s=s.toString(),~s.indexOf("vw")&&(s=(this.sizes.width/100*parseInt(s)).toFixed(0)),s=parseInt(s),r.font=s+"px "+n.fontFamily,r.fillStyle=n.color,r.textAlign=n.textAlign,r.globalAlpha=n.globalAlpha;let u=this.sizes.width,h=this.sizes.height,f=n.rotateAngle*Math.PI/180,d=n.xMoveDistance,p=n.yMoveDistance,g=n.maxWidth,y=s,v=[];for(var b=u/2;b<u;b+=d){for(var C=h/2;C<h;C+=p)i(v,b,C)||(v=v.concat({x:b,y:C}),r.setTransform(1,0,0,1,0,0),r.translate(b,C),r.rotate(f),r.wrapText(c(n.text),0,0,g,y,n.stroke));for(var I=h/2;I>0;I-=p)i(v,b,I)||(v=v.concat({x:b,y:I}),r.setTransform(1,0,0,1,0,0),r.translate(b,I),r.rotate(f),r.wrapText(c(n.text),0,0,g,y,n.stroke));}for(var b=u/2;b>0;b-=d){for(var C=h/2;C<h;C+=p)i(v,b,C)||(v=v.concat({x:b,y:C}),r.setTransform(1,0,0,1,0,0),r.translate(b,C),r.rotate(f),r.wrapText(c(n.text),0,0,g,y,n.stroke));for(var I=h/2;I>0;I-=p)i(v,b,I)||(v=v.concat({x:b,y:I}),r.setTransform(1,0,0,1,0,0),r.translate(b,I),r.rotate(f),r.wrapText(c(n.text),0,0,g,y,n.stroke));}},e.prototype.addPixelText=function(a){var n={text:"像素文字水印",big:{fontSize:150,fontFamily:"微软雅黑",textAlign:"center",rotateAngle:0,stroke:false},small:{fontSize:10,fontFamily:"微软雅黑",color:"#000",textAlign:"center",globalAlpha:.7}};for(let b in n)typeof a[b]<"u"&&(n[b]=a[b]);var r=this.canvas.getContext("2d"),s=document.createElement("canvas"),u=s.getContext("2d");s.width=this.sizes.width,s.height=this.sizes.height,u.font=n.big.fontSize+"px "+n.big.fontFamily,u.textAlign=n.big.textAlign,u.textBaseline="middle",u.translate(s.width/2,s.height/2),u.rotate(n.big.rotateAngle*Math.PI/180),u.translate(-s.width/2,-s.height/2),n.big.stroke?u.strokeText(n.text,s.width/2,s.height/2,s.width):u.fillText(n.text,s.width/2,s.height/2);for(var h=n.text.split(""),f=u.getImageData(0,0,s.width,s.height),d=[],p=0;p<s.height;p+=n.small.fontSize)for(var g=0;g<s.width;g+=n.small.fontSize){var y=g+p*s.width,v=f.data[y*4+3];v>128&&d.push({text:c(h),x:g,y:p});}r.font=n.small.fontSize+"px "+n.small.fontFamily,r.fillStyle=n.small.color,r.textAlign=n.small.textAlign,r.textBaseline="middle",r.globalAlpha=n.small.globalAlpha,d.forEach(b=>{r.fillText(b.text,b.x,b.y);});},e.prototype.addImage=function(a){if(a.imageArray==null)return alert("参数缺少imageArray"),false;if(a.imageArray.length===0)return alert("参数imageArray不能为空"),false;let n={imageArray:[],width:50,height:50,globalAlpha:.5,rotateAngle:0,xMoveDistance:70,yMoveDistance:70};for(let T in n)typeof a[T]<"u"&&(n[T]=a[T]);n.width=parseInt(n.width)>0?n.width:1,n.height=parseInt(n.height)>0?n.height:1,n.xMoveDistance=parseInt(n.xMoveDistance)>0?n.xMoveDistance:1,n.yMoveDistance=parseInt(n.yMoveDistance)>0?n.yMoveDistance:1;let r=this.canvas.getContext("2d"),s=[],u=parseInt(Math.sqrt(n.width*n.width+n.height*n.height)),h=this.sizes.width,f=this.sizes.height,d=n.rotateAngle*Math.PI/180,p=n.xMoveDistance,g=n.yMoveDistance,y=h/2-u/2,v=f/2-u/2,b=(u-n.width)/2,C=(u-n.height)/2;Array.from(n.imageArray).forEach(T=>{var S=document.createElement("canvas"),q=S.getContext("2d");S.width=u,S.height=u,q.globalAlpha=n.globalAlpha,q.translate(u/2,u/2),q.rotate(d),q.translate(-u/2,-u/2),q.drawImage(T,b,C,n.width,n.height),s=s.concat(S);});function I(T){return T[Math.floor(Math.random()*T.length)]}r.setTransform(1,0,0,1,0,0);let E=[];for(let T=y;T<h;T+=p){for(let S=v;S<f;S+=g)i(E,T,S)||(E=E.concat({x:T,y:S}),r.drawImage(I(s),T,S));for(let S=v;S>-Math.abs(u);S-=g)i(E,T,S)||(E=E.concat({x:T,y:S}),r.drawImage(I(s),T,S));}for(let T=y;T>-Math.abs(u);T-=p){for(let S=v;S<f;S+=g)i(E,T,S)||(E=E.concat({x:T,y:S}),r.drawImage(I(s),T,S));for(let S=v;S>-Math.abs(u);S-=g)i(E,T,S)||(E=E.concat({x:T,y:S}),r.drawImage(I(s),T,S));}},e.prototype.getPreview=function(){return this.dataUrl},e.prototype.render=function(a){return a=a==="png"?"png":"jpeg",this.canvas.toDataURL("image/"+a)},e.prototype.renderBlob=function(){let a=this;return new Promise(n=>{a.canvas.toBlob(function(r){n(window.URL.createObjectURL(r));});})},e.prototype.noConflict=function(){return window.Watermark&&delete window.Watermark,t&&(window.Watermark=t),e},e});const Le="MT论坛优化",x=G.noConflict(),m=J.noConflict(),D=ie,w=new x.Log(ee,N.console||Re.console);var ge;const pe=((ge=ee==null?undefined:ee.script)==null?undefined:ge.name)||Le,we=false;w.config({debug:we,logMaxCount:1e3,autoClearConsole:true,tag:true});k.config(Object.defineProperties({html:true,autoClose:true,showClose:false},{position:{get(){return A.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return A.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return A.getValue("qmsg-config-showreverse",true)}},zIndex:{get(){let t=G.getMaxZIndex(),e=ie.config.InstanceUtils.getPopsMaxZIndex().zIndex;return G.getMaxValue(t,e)+100}}}));const Y=new x.GM_Menu({GM_getValue:V,GM_setValue:W,GM_registerMenuCommand:Ie,GM_unregisterMenuCommand:Me}),U=new x.Httpx(Ee);U.interceptors.request.use(t=>(De.handle(t),t));U.interceptors.response.use(undefined,t=>(w.error(["拦截器-请求错误",t]),t.type==="onabort"?k.warning("请求取消"):t.type==="onerror"?k.error("请求异常"):t.type==="ontimeout"?k.error("请求超时"):k.error("其它错误"),t));U.config({logDetails:we});ie.GlobalConfig.setGlobalConfig({mask:{enable:true,clickEvent:{toClose:false,toHide:false}}});N.Object.defineProperty,N.Function.prototype.apply,N.Function.prototype.call,N.Element.prototype.appendChild,N.setTimeout;const z=x.addStyle.bind(x);se.setGMResourceCSS(xe.Viewer);se.setGMResourceCSS(xe.Hljs);const F=document.querySelector.bind(document),H=document.querySelectorAll.bind(document),P="GM_Panel",be="data-init",$="data-key",Q="data-default-value",Be="data-init-more-value",M="data-storage-api",R=function(t,e,o,l,i,c){let a={text:t,type:"switch",description:i,attributes:{},props:{},getValue(){return !!this.props[M].get(e,o)},callback(n,r){let s=!!r;w.success(`${s?"开启":"关闭"} ${t}`),this.props[M].set(e,s);},afterAddToUListCallBack:c};return Reflect.set(a.attributes,$,e),Reflect.set(a.attributes,Q,o),Reflect.set(a.props,M,{get(n,r){return A.getValue(n,r)},set(n,r){A.setValue(n,r);}}),a},he=function(t,e,o,l,i,c){let a=[];typeof l=="function"?a=l():a=l;let n={text:t,type:"select",description:c,attributes:{},props:{},getValue(){return this.props[M].get(e,o)},callback(r,s,u){let h=s;w.info(`选择：${u}`),this.props[M].set(e,h),typeof i=="function"&&i(r,h,u);},data:a};return Reflect.set(n.attributes,$,e),Reflect.set(n.attributes,Q,o),Reflect.set(n.props,M,{get(r,s){return A.getValue(r,s)},set(r,s){A.setValue(r,s);}}),n},fe=function(t,e,o,l,i,c,a,n,r){return {text:t,type:"button",description:e,buttonIcon:l,buttonIsRightIcon:i,buttonIconIsLoading:c,buttonType:a,buttonText:o,callback(u){typeof n=="function"&&n(u);},afterAddToUListCallBack:r}},me=function(t,e,o,l){let i={type:"own",attributes:{},props:o,getLiElementCallBack:t,afterAddToUListCallBack:l};return Reflect.set(i.attributes,be,()=>false),i},te={formhash:/formhash=([0-9a-zA-Z]+)/,uid:/uid(=|-)(\d+)/,fontSpecial:/<font.*?>|<\/font>|<strike>|<strong>|<i>|<u>|align=".*?"|<br>[\s]*<br>[\s]*<br>/g},B={getAvatar:(t,e="middle")=>`/uc_server/avatar.php?uid=${t}&size=${e}&ts=1`,getCurrentUID(){let t=N.discuz_uid;if(typeof t=="string")return t;let e=F('.sidenv_exit a[href*="uid-"]')||F('#comiis_key a[href*="uid-"]');if(e){let o=e.href.match(/uid=([0-9]+)/);if(o)return o[o.length-1]}},getFormHash(){let t=Array.from((top||globalThis).document.querySelectorAll("input[name=formhash]"));for(let o=0;o<t.length;o++){let i=t[o].value;if(i)return i}let e=Array.from((top||globalThis).document.querySelectorAll('a[href*="formhash="]'));for(let o=0;o<e.length;o++){let i=e[o].href.match(te.formhash);if(i){let c=i[i.length-1];if(c)return c}}},envIsMobile(){return (N.STYLEID||window.STYLEID||typeof STYLEID<"u"&&STYLEID)==="3"},getThreadId:t=>{let e=t.match(/thread-([\d]+)-|&tid=([\d]+)/i);if(e){let o=e.filter(Boolean);return o[o.length-1]}},getForumId(t){let e=t.match(/&fid=([\d]+)/i);if(e)return e[e.length-1]},getPostId(t){let e=t.match(/&pid=([\d]+)/i);if(e)return e[e.length-1]},getRepquote(t){let e=t.match(/&repquote=([\d]+)/i);if(e)return e[e.length-1]}},_={$upload:{small:false,middle:false,big:false},$data:{avatarInfo:{maxSize:2097152,small:{width:48,height:48},middle:{width:120,height:120},big:{width:200,height:250}}},$el:{$smallUpload:null,$middleUpload:null,$bigUpload:null,$smallStatus:null,$middleStatus:null,$bigStatus:null},$avatar:{get small(){return _.$el.$smallUpload.files[0]},get middle(){return _.$el.$middleUpload.files[0]},get big(){return _.$el.$bigUpload.files[0]}},init(){this.showView();},showView(){const t=this;let e=D.confirm({title:{text:"修改头像",position:"center"},content:{text:`
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
                `,html:true},btn:{ok:{text:"上传",callback:async()=>{if(!t.$upload.small){k.error("请上传小头像");return}if(!t.$upload.middle){k.error("请上传中头像");return}if(!t.$upload.big){k.error("请上传大头像");return}let o=k.loading("正在处理数据中...");try{let l=await this.getUploadUrl();if(l==null)return;let i=B.getFormHash();if(i==null){k.error("获取formhash失败");return}let c={big:{base64:await x.parseFileToBase64(this.$avatar.big)},middle:{base64:await x.parseFileToBase64(this.$avatar.middle)},small:{base64:await x.parseFileToBase64(this.$avatar.small)}};Object.keys(c).forEach(r=>{let s=c[r];s.base64=s.base64.substring(s.base64.indexOf(",")+1);});let a=new FormData;a.append("Filedata",this.$avatar.big||""),a.append("confirm","确定"),a.append("avatar1",c.big.base64),a.append("avatar2",c.middle.base64),a.append("avatar3",c.small.base64),a.append("formhash",i),w.info("头像的base64字符串",c);let n=await U.post(l,{data:a,processData:!1,headers:{Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9","User-Agent":x.getRandomPCUA(),Host:window.location.hostname,Origin:window.location.origin,Referer:`${window.location.origin}/home.php?mod=spacecp&ac=avatar`}});if(!n.status)return;n.data.responseText.indexOf("window.parent.postMessage('success','*')")!=-1?(e.close(),k.success("上传成功")):(w.error("上传失败",n),k.error(n.data.responseText,{timeout:6e3,isHTML:!1,html:!1}));}catch(l){w.error(l);}finally{o.close();}}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
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
            `});this.$el.$smallUpload=e.$shadowRoot.querySelector(".avatar-upload[data-type='small']"),this.$el.$middleUpload=e.$shadowRoot.querySelector(".avatar-upload[data-type='middle']"),this.$el.$bigUpload=e.$shadowRoot.querySelector(".avatar-upload[data-type='big']"),this.$el.$smallStatus=e.$shadowRoot.querySelector(".avatar-upload-status[data-type='small']"),this.$el.$middleStatus=e.$shadowRoot.querySelector(".avatar-upload-status[data-type='middle']"),this.$el.$bigStatus=e.$shadowRoot.querySelector(".avatar-upload-status[data-type='big']"),this.setUploadChangeEvent(this.$el.$smallUpload,this.$el.$smallStatus,this.$data.avatarInfo.small,()=>{this.$upload.small=true;}),this.setUploadChangeEvent(this.$el.$middleUpload,this.$el.$middleStatus,this.$data.avatarInfo.middle,()=>{this.$upload.middle=true;}),this.setUploadChangeEvent(this.$el.$bigUpload,this.$el.$bigStatus,this.$data.avatarInfo.big,()=>{this.$upload.big=true;});},setUploadChangeEvent(t,e,o,l){m.on(t,"change",i=>{var s;if(!((s=t.files)!=null&&s.length))return;m.text(e,"🤡获取文件信息中..."),e.removeAttribute("data-success");let c=t.files[0],a=c.size,n=new Image,r=new FileReader;r.readAsDataURL(c),r.onload=function(u){n.src=u.target.result,n.onload=function(){if(n.width>o.width||n.height>o.height){t.value="",e.setAttribute("data-success","false"),m.text(e,`🤡校验失败 ==> 图片尺寸不符合，宽：${n.width} 高：${n.height}`);return}if(a>_.$data.avatarInfo.maxSize){t.value="",e.setAttribute("data-success","false"),m.text(e,`🤡校验失败 ==> 图片大小不符合：${a}byte，限制最大：${_.$data.avatarInfo.maxSize}byte`);return}e.setAttribute("data-success","true"),m.text(e,`🤣 通过 宽:${n.width} 高:${n.height} 大小(byte):${a}`),l();};};});},async getUploadUrl(){let t=await U.get("/home.php?mod=spacecp&ac=avatar",{headers:{"User-Agent":x.getRandomPCUA()}});if(!t.status)return;if(x.isNull(t.data.responseText)){k.error("动态头像：获取上传地址失败");return}let e=t.data.responseText.match(/var[\s]*data[\s]*=[\s]*"(.+?)"/);if(e==null||e.length!=2){k.error("动态头像：获取变量data失败");return}let l=e[e.length-1].split(","),i=l[l.indexOf("src")+1].replace("images/camera.swf?inajax=1","index.php?m=user&a=rectavatar&base64=yes");return w.info("上传地址："+i),i}},j={$key:{signTime:"mt-sign-time"},init(){this.sign();},todayIsSign(){let t=this.getSignTime();return !(t==null||x.formatTime(Date.now(),"yyyyMMdd")!==x.formatTime(t,"yyyyMMdd"))},setSignTime(){W(this.$key.signTime,Date.now());},getSignTime(){return V(this.$key.signTime)},clearSignTime(){le(this.$key.signTime);},checkLogin(){return B.envIsMobile()?!!F("a[href*='member.php?mod=logging&action=logout']"):!!F("#comiis_key")},async sign(){let t=B.getFormHash();if(t==null){if(F("#comiis_picshowbox")){w.info("当前为评论区的看图模式 ");return}w.error("自动签到：获取账号formhash失败"),le("mt_sign"),k.error({content:"自动签到：获取账号formhash失败"});return}if(this.todayIsSign()){w.info("今日已签到");return}let e=!!A.getValue("mt-auto-sign-useFetch"),o=x.getRandomPCUA(),l=()=>{this.setSignTime();},i=()=>{this.clearSignTime();},c=n=>{let s=ie.alert({title:{text:"未知签到内容",position:"center"},content:{text:"",html:false},width:"88vw",height:"300px"}).$shadowRoot.querySelector(".pops-alert-content");s.innerText=n;},a=[{id:"k_misign",async sign(){let n={operation:"qiandao",format:"button",formhash:t,inajax:1,ajaxtarget:"midaben_sign"},r=await U.get(`/k_misign-sign.html?${x.toSearchParamsStr(n)}`,{fetch:e,headers:{"User-Agent":o},allowInterceptConfig:false});if(!r.status){k.error("签到：网络异常，请求失败",{consoleLogContent:true});return}l(),w.info("签到信息：",r);let s=r.data.responseText,u=x.parseCDATA(s),h=m.parseHTML(`<div>${u}</div>`,true,false),f=m.text(h);if(f.includes("需要先登录")){k.error("签到：请先登录账号",{timeout:3e3,consoleLogContent:true}),i();return}else if(f.includes("请稍后再试")||f.includes("您已经被列入黑名单")||f.includes("绑定手机号后才可以签到")||f.includes("您所在用户组不允许使用")){k.error("签到："+f,{timeout:5e3});return}else if(f.includes("今日已签")||f.includes("今日已经签到")){k.info("签到："+f);return}else if(s.includes("您当前的访问请求当中含有非法字符，已经被系统拒绝")){k.error("签到: 您当前的访问请求当中含有非法字符，已经被系统拒绝",{timeout:6e3});return}else if(e&&"location"in x.toJSON(s)){k.success("签到: 签到成功");return}let d=h.querySelector(".con"),p=h.querySelector(".line");if(d&&p){let g=m.text(d).match(/([0-9]+)金币/),y=m.text(p).match(/([0-9]+)/),v=g[g.length-1],b=y[y.length-1];w.success(`金币${v}，排名${b}`),k.info(`
							<div style="display: flex;${B.envIsMobile()?"":"padding: 20px;"}">
								<div style="align-self: center;margin-right: 20px;">签到</div>
								<div>排名 ${b}<br>金币 ${v}</div>
							</div>`,{timeout:4e3,isHTML:true});return}c(s);}},{id:"dsu_paulsign",async sign(){let n={id:"dsu_paulsign:sign",operation:"qiandao",infloat:1,inajax:1},r=await U.post(`/plugin.php?${x.toSearchParamsStr(n)}`,{data:{formhash:t,qdxq:"kx",qdmode:3,todaysay:"",fastreply:0},processData:true,fetch:e,headers:{"User-Agent":o,"Content-Type":"application/x-www-form-urlencoded"},allowInterceptConfig:false});if(!r.status){k.error("签到：网络异常，请求失败",{consoleLogContent:true});return}l(),w.info("签到信息：",r);let s=r.data.responseText;if(s.includes("签到成功")){k.success("签到：签到成功");return}if(s.includes("今日已经签到")){k.info("签到：您今日已经签到，请明天再来！");return}c(s);}}];for(let n=0;n<a.length;n++){const r=a[n];let s=await U.get(`/plugin.php?id=${r.id}:sign`,{headers:{"User-Agent":x.getRandomPCUA()},allowInterceptConfig:false});if(!s.status){w.error("签到：检查签到插件是否启用的请求失败",s);continue}if(m.parseHTML(s.data.responseText,true,true).querySelector("#messagetext")){w.error(`插件：${r.id} 未启用或不存在`);continue}await r.sign();break}}},Oe={id:"component-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[he("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(t,e,o)=>{w.info("设置当前Qmsg弹出位置"+o);},"Toast显示在页面九宫格的位置"),he("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],undefined,"限制Toast显示的数量"),R("逆序弹出","qmsg-config-showreverse",false,undefined,"修改Toast弹出的顺序")]}]}]},{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[R("新增【最新发表】","mt-addLatestPostBtn",true,undefined,"便于快捷跳转"),R("超链接文字转换","mt-link-text-to-hyperlink",true,undefined,"自动把符合超链接格式的文字转为超链接")]}]},{type:"deepMenu",text:"自动签到",forms:[{text:"",type:"forms",forms:[R("启用","mt-auto-sign",true,undefined,"自动请求签到"),R("使用fetch请求","mt-auto-sign-useFetch",false,undefined,""),fe("签到信息",`上次签到时间：${j.getSignTime()==null?"尚未签到":G.formatTime(j.getSignTime())}`,"清空信息",undefined,undefined,undefined,"primary",t=>{let o=t.composedPath()[0].closest("li").querySelector(".pops-panel-item-left-desc-text");D.confirm({title:{text:"提示 ",position:"center"},content:{text:"<p>是否清空脚本签到记录的时间?</p>",html:true},btn:{ok:{enable:true,callback:l=>{j.clearSignTime(),k.success("删除成功"),m.text(o,`上次签到时间：${j.getSignTime()==null?"尚未签到":G.formatTime(j.getSignTime())}`),l.close();}}},mask:{enable:true},width:"300px",height:"200px"});})]}]},{text:"头像",type:"deepMenu",forms:[{text:"<a href='https://ezgif.com/resize' target='_blank'>Resize Image</a>",type:"forms",forms:[me(t=>{let e=m.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
											<p class="pops-panel-item-left-main-text">头像（有缓存）</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),o=m.createElement("div",{className:"pops-panel-avatar-img",innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${B.getCurrentUID()}&size=small"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${B.getCurrentUID()}&size=middle"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${B.getCurrentUID()}&size=big"
												class="avatar-img" data-size="big">
											`}),l=m.createElement("style",{innerHTML:`
											.avatar-img {
												width: 30px;
												height: 30px;
												border-radius: 50%;
												overflow: hidden;
											}
										`});return o.querySelector(".avatar-img[data-size='small']"),o.querySelector(".avatar-img[data-size='middle']"),o.querySelector(".avatar-img[data-size='big']"),t.appendChild(e),t.appendChild(o),t.appendChild(l),t}),me(t=>{let e=m.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
											<p class="pops-panel-item-left-main-text">头像</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),o=m.createElement("div",{className:"pops-panel-avatar-img",innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${B.getCurrentUID()}&size=small&ts=${Date.now()}"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${B.getCurrentUID()}&size=middle&ts=${Date.now()}"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${B.getCurrentUID()}&size=big&ts=${Date.now()}"
												class="avatar-img" data-size="big">
											`});return t.appendChild(e),t.appendChild(o),t}),fe("修改头像",`可以上传gif图片，注意图片最大限制为${G.formatByteToSize(_.$data.avatarInfo.maxSize)}`,"上传",undefined,false,false,"primary",()=>{_.init();})]}]}]}]},Ue={id:"component-forum-post",title:"帖子",forms:[{type:"forms",text:"",forms:[{text:"功能",type:"deepMenu",forms:[{type:"forms",text:"",forms:[R("拦截附件","mt-forum-post-interceptionAttachment",true,undefined,"点击附件时弹出提示框进行确认是否下载附件"),R("图片查看优化","mt-forum-post-optimizationImagePreview",true,undefined,"使用Viewer查看图片"),R("自动加载下一页","mt-forum-post-loadNextPageComment",true,undefined,"无缝预览下一页"),R("代码块优化","mt-forum-post-codeQuoteOptimization",true,undefined,"自动检测代码块语言并设置关键字高亮")]}]},{type:"deepMenu",text:"用户信息块",forms:[{type:"forms",text:"",forms:[R("探测用户在线状态","mt-forum-post-detectingUserOnlineStatus",false,undefined,"获取用户在线状态并在用户信息处显示状态表情"),R("显示用户等级","mt-forum-post-showUserLevel",true,undefined,"在用户信息处显示当前用户的等级"),R("隐藏底部信息块","mt-forum-post-hideBottomInfoBlock",false,undefined,"包括金币、好评、信誉等信息")]}]},{type:"deepMenu",text:"右侧悬浮工具栏",forms:[{type:"forms",text:"",forms:[R("新增【快捷收藏】","mt-forum-post-quickCollentBtn",true,undefined,"在右侧悬浮工具栏添加【收藏】按钮，用于快捷收藏"),R("快捷回复优化","mt-forum-post-quickReplyOptimization",true,undefined,"为快捷回复弹窗底部区域添加【一键空格】按钮")]}]}]}]},Ne={id:"component-guide",title:"导读",forms:[{type:"forms",text:"",forms:[R("页面美化","mt-guide-beautifyPage",true,undefined,"美化样式")]}]},K={setting:{get width(){return window.innerWidth<550?"88vw":"550px"},get height(){return window.innerHeight<450?"70vh":"450px"}},settingBig:{get width(){return window.innerWidth<800?"92vw":"800px"},get height(){return window.innerHeight<600?"80vh":"600px"}}},A={$data:{__data:null,__oneSuccessExecMenu:null,__onceExec:null,__listenData:null,get data(){return A.$data.__data==null&&(A.$data.__data=new x.Dictionary),A.$data.__data},get oneSuccessExecMenu(){return A.$data.__oneSuccessExecMenu==null&&(A.$data.__oneSuccessExecMenu=new x.Dictionary),A.$data.__oneSuccessExecMenu},get onceExec(){return A.$data.__onceExec==null&&(A.$data.__onceExec=new x.Dictionary),A.$data.__onceExec},get scriptName(){return pe},key:P,attributeKeyName:$,attributeDefaultValueName:Q},$listener:{get listenData(){return A.$data.__listenData==null&&(A.$data.__listenData=new x.Dictionary),A.$data.__listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},isTopWindow(){return N.top===N.self},initExtensionsMenu(){this.isTopWindow()&&Y.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{this.showPanel();}}]);},initPanelDefaultValue(){let t=this;function e(i){if(!i.attributes)return;let c={},a=i.attributes[$];a!=null&&(c[a]=i.attributes[Q]);let n=i.attributes[be];if(typeof n=="function"){let u=n();if(typeof u=="boolean"&&!u)return}let r=i.attributes[Be];r&&typeof r=="object"&&Object.assign(c,r);let s=Object.keys(c);if(!s.length){w.warn(["请先配置键",i]);return}s.forEach(u=>{let h=c[u];t.$data.data.has(u)&&w.warn("请检查该key(已存在): "+u),t.$data.data.set(u,h);});}function o(i){for(let c=0;c<i.length;c++){let a=i[c];e(a);let n=a.forms;n&&Array.isArray(n)&&o(n);}}let l=this.getPanelContentConfig();for(let i=0;i<l.length;i++){let c=l[i];if(!c.forms)continue;let a=c.forms;a&&Array.isArray(a)&&o(a);}},setValue(t,e){let o=V(P,{}),l=o[t];o[t]=e,W(P,o),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,l,e);},getValue(t,e){let l=V(P,{})[t];return l??(this.$data.data.has(t)?this.$data.data.get(t):e)},deleteValue(t){let e=V(P,{}),o=e[t];Reflect.deleteProperty(e,t),W(P,e),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,o,undefined);},addValueChangeListener(t,e,o){let l=Math.random();return this.$listener.listenData.set(t,{id:l,key:t,callback:e}),o&&o.immediate&&e(t,this.getValue(t),this.getValue(t)),l},removeValueChangeListener(t){let e=null;for(const[o,l]of this.$listener.listenData.entries())if(l.id===t){e=o;break}typeof e=="string"?this.$listener.listenData.delete(e):console.warn("没有找到对应的监听器");},triggerMenuValueChange(t,e,o){if(this.$listener.listenData.has(t)){let l=this.$listener.listenData.get(t);if(typeof l.callback=="function"){let i=this.getValue(t),c=i,a=i;typeof e<"u"&&arguments.length>1&&(c=e),typeof o<"u"&&arguments.length>2&&(a=o),l.callback(t,a,c);}}},hasKey(t){let e=V(P,{});return t in e},execMenu(t,e,o=false,l){if(!(typeof t=="string"||typeof t=="object"&&Array.isArray(t)))throw new TypeError("key 必须是字符串或者字符串数组");let i=[];typeof t=="object"&&Array.isArray(t)?i=[...t]:i.push(t);let c;for(let a=0;a<i.length;a++){const n=i[a];if(!this.$data.data.has(n)){w.warn(`${t} 键不存在`);return}let r=A.getValue(n);if(o&&(r=!r),typeof l=="function"){let s=l(n,r);typeof s=="boolean"&&(r=s);}if(!r)break;c=r;}c&&e(c);},execMenuOnce(t,e,o,l,i){if(typeof t!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(t)){w.warn(`${t} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(t))return;this.$data.oneSuccessExecMenu.set(t,1);let c=()=>{let h=A.getValue(t);return typeof o=="function"?o(t,h):h},a=[],n=h=>{let f=c(),d=[];if(h instanceof HTMLStyleElement?d=[h]:Array.isArray(h)&&(d=[...h.filter(p=>p!=null&&p instanceof HTMLStyleElement)]),f)a=a.concat(d);else for(let p=0;p<d.length;p++)d[p].remove(),d.splice(p,1),p--;},r=h=>typeof i=="function"?i(t,h):h,s=h=>{let f=[];if(r(h)){let d=e(h,n);d instanceof HTMLStyleElement?f=[d]:Array.isArray(d)&&(f=[...d.filter(p=>p!=null&&p instanceof HTMLStyleElement)]);}for(let d=0;d<a.length;d++)a[d].remove(),a.splice(d,1),d--;a=[...f];};this.addValueChangeListener(t,(h,f,d)=>{let p=d;typeof l=="function"&&(p=l(h,d,f)),s(p);});let u=c();u&&s(u);},execInheritMenuOnce(t,e,o,l){let i=this;const c=(a,n)=>{let r=i.getValue(a),s=i.getValue(n);if(typeof l=="function"){let u=l(r,s);if(u!=null)return u}return r};this.execMenuOnce(t,o,()=>c(t,e),()=>c(t,e)),this.execMenuOnce(e,()=>{},()=>false,()=>(this.triggerMenuValueChange(t),false));},onceExec(t,e){if(typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(t)||(e(),this.$data.onceExec.set(t,1));},showPanel(){D.panel({title:{text:`${pe}-设置`,position:"center",html:false,style:""},content:this.getPanelContentConfig(),mask:{enable:true,clickEvent:{toClose:true,toHide:false}},width:K.setting.width,height:K.setting.height,drag:true,only:true});},getPanelContentConfig(){return [Oe,Ue,Ne]}},Fe=()=>{var t,e,o,l,i,c,a,n,r,s,u;s=/((https?:\/\/|www\.)[\x21-\x7e]+[\w\/]|(\w[\w._-]+\.(com|cn|org|net|info|tv|cc))(\/[\x21-\x7e]*[\w\/])?|ed2k:\/\/[\x21-\x7e]+\|\/|thunder:\/\/[\x21-\x7e]+=)/gi,t=function(d){var p;if(d=(p=d.originalTarget)!=null?p:d.target,d!=null&&d.localName==="a"&&d.className.indexOf("texttolink")!==-1&&(p=d.getAttribute("href"),p.indexOf("http")!==0&&p.indexOf("ed2k://")!==0&&p.indexOf("thunder://")!==0))return d.setAttribute("href","http://"+p)},document.addEventListener("mouseover",t),r=function(d){if(typeof d=="object"&&d!=null&&typeof d.parentNode<"u"&&typeof d.parentNode.className<"u"&&typeof d.parentNode.className.indexOf=="function"&&d.parentNode.className.indexOf("texttolink")===-1&&d.nodeName!=="#cdata-section"){var p=d.textContent.replace(s,'<a href="$1" target="_blank" class="texttolink">$1</a>');if(d.textContent.length!==p.length){var g=document.createElement("span");return g.innerHTML=p,console.log(`识别: ${g.querySelector("a")}`),d.parentNode.replaceChild(g,d)}}},e="a svg canvas applet input button area pre embed frame frameset head iframe img option map meta noscript object script style textarea code".split(" "),u=`//text()[not(ancestor::${e.join(") and not(ancestor::")})]`,o=new RegExp(`^(${e.join("|")})$`,"i"),i=function(d,p){var g,y;if(p+1e4<d.snapshotLength){var v=g=p;for(y=p+1e4;p<=y?g<=y:g>=y;v=p<=y?++g:--g)r(d.snapshotItem(v));setTimeout(function(){return i(d,p+1e4)},15);}else for(v=g=p,y=d.snapshotLength;p<=y?g<=y:g>=y;v=p<=y?++g:--g)r(d.snapshotItem(v));},c=function(d){return d=document.evaluate(u,d,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null),i(d,0)},a=function(d){for(d=document.createTreeWalker(d,NodeFilter.SHOW_TEXT,{acceptNode:function(p){if(!o.test(p.parentNode.localName))return NodeFilter.FILTER_ACCEPT}},false);d.nextNode();)r(d.currentNode);},n=new window.MutationObserver(function(d){var p,g,y=0;for(p=d.length;y<p;y++){var v=d[y];if(v.type==="childList"){var b=v.addedNodes,C=0;for(g=b.length;C<g;C++)v=b[C],a(v);}}}),l=function(){return c(document.body),n.observe(document.body,{childList:true,subtree:true})};var h=function(d){var p=d.getAttribute("href");if(p.indexOf("http")!==0&&p.indexOf("ed2k://")!==0&&p.indexOf("thunder://")!==0)return d.setAttribute("href","http://"+p)},f=function(){for(var d=document.getElementsByClassName("texttolink"),p=0;p<d.length;p++)h(d[p]);};setTimeout(f,1500),setTimeout(l,100);},L=globalThis.location.pathname,O=globalThis.location.search;new URLSearchParams(O);const ne={isKMiSign(){return L.startsWith("/k_misign-sign.html")},isPost(){return L.startsWith("/thread-")||L.startsWith("/forum.php")&&O.startsWith("?mod=viewthread")},isPage(){return !!L.match(/^\/page-([0-9]+).html/g)},isGuide(){return L.startsWith("/forum.php")&&O.startsWith("?mod=guide")},isPlate(){return !!L.match(/\/forum-[0-9]{1,2}-[0-9]{1,2}.html/g)},isSearch(){return L.startsWith("/search.php")},isSpace(){return L.startsWith("/home.php")&&O.startsWith("?mod=space")},isMySpace(){return L.startsWith("/home.php")&&O.startsWith("?mod=space&do=profile&mycenter")},isSpaceWithAt(){return L.startsWith("/space-uid-")},isForumList(){return L.startsWith("/forum.php")&&O.startsWith("?forumlist")},isMessage(){return L.startsWith("/home.php")&&O.startsWith("?mod=space&do=notice")},isMessageList(){return L.startsWith("/home.php")&&O.startsWith("?mod=space&do=pm")},isPointsMall(){return L.startsWith("/keke_integralmall-keke_integralmall.html")||L.startsWith("/plugin.php")&&O.startsWith("?id=keke_integralmal")},isPostPublish(){return L.startsWith("/forum.php")&&O.startsWith("?mod=post")},isPostPublish_voting(){return L.startsWith("/forum.php")&&O.includes("&special=1")||O.includes("&fid=42")},isPostPublish_edit(){return this.isPostPublish()&&O.includes("&action=edit")},isPostPublish_newthread(){return this.isPostPublish()&&O.includes("&action=newthread")},isPostPublish_reply(){return this.isPostPublish()&&O.includes("&action=reply")}},qe={init(){m.ready(()=>{A.execMenuOnce("mt-forum-post-quickCollentBtn",()=>{this.quickCollentBtn();}),A.execMenuOnce("mt-forum-post-quickReplyOptimization",()=>{this.quickReplyOptimization();});});},quickCollentBtn(){w.info("【快捷收藏】"),x.waitNode("#scrolltop",1e4).then(t=>{if(!t)return;let e=B.getFormHash(),o=B.getThreadId(window.location.href),l=`/home.php?${x.toSearchParamsStr({mod:"spacecp",ac:"favorite",type:"thread",id:o,formhash:e,infloat:"yes",handlekey:"k_favorite",inajax:1,ajaxtarget:"fwin_content_k_favorite"})}`,i=document.createElement("span");i.innerHTML=`
			<a href="${l}" 
				id="k_favorite"
				onclick="showWindow(this.id, this.href, 'get', 0);"
				onmouseover="this.title = $('favoritenumber').innerHTML + ' 人收藏'">
				<img src="https://s1.ax1x.com/2020/04/29/JTk3lD.gif"
						height="26" 
						width="26" 
						style="position:absolute;top:10px;left:11px">
			</a>
			`,m.prepend(t,i);});},quickReplyOptimization(){x.waitNode('#scrolltop a[title="快速回复"]',1e4).then(t=>{t&&(w.info("快捷回复优化"),m.on(t,"click",function(){N.showWindow("reply",t.href),w.info("等待弹窗出现"),x.waitNode("#moreconf",1e4).then(e=>{if(!e)return;w.success("弹出出现，添加按钮");let o=m.createElement("button",{innerText:"一键空格",type:"button",id:"insertspace2"},{style:"float: left;"});m.on(o,"click",l=>{x.preventEvent(l),m.val(F("#postmessage"),m.val(F("#postmessage"))+"           ");}),m.append(e,o);});}));});}},ve={$flag:{isSetHljsCSS:false},init(){qe.init(),A.execMenuOnce("mt-forum-post-autoExpandContent",()=>this.autoExpandContent()),A.execMenuOnce("mt-forum-post-repairImageWidth",()=>this.repairImageWidth()),A.execMenuOnce("mt-forum-post-hideBottomInfoBlock",()=>this.hideBottomInfoBlock()),m.ready(()=>{A.execMenu("mt-forum-post-removeFontStyle",()=>{this.removeFontStyle();}),A.execMenu("mt-forum-post-removeCommentFontStyle",()=>{this.removeCommentFontStyle();}),A.execMenuOnce("mt-forum-post-loadNextPageComment",()=>{this.loadNextPageComment();}),A.execMenuOnce("mt-forum-post-codeQuoteOptimization",()=>{this.codeQuoteOptimization();}),A.execMenuOnce("mt-forum-post-optimizationImagePreview",()=>{this.optimizationImagePreview();}),A.execMenuOnce("mt-forum-post-interceptionAttachment",()=>{this.setAttachmentsClickTip();}),A.execMenu("mt-forum-post-detectingUserOnlineStatus",()=>{this.detectingUserOnlineStatus();}),A.execMenu("mt-forum-post-showUserLevel",()=>{this.showUserLevel();});});},autoExpandContent(){return w.info("自动展开帖子内容"),z(`
        div.comiis_message.bg_f.view_one.b_b.cl.message>div.comiis_messages.comiis_aimg_show.cl{max-height:inherit!important;overflow-y:inherit!important;position:inherit!important}
        .comiis_lookfulltext_bg,.comiis_lookfulltext_key{display:none!important} 
        `)},repairImageWidth(){return w.info("修复图片宽度"),z(`
        .comiis_messages img{
            max-width: 100% !important;
        }`)},removeFontStyle(){let t=document.querySelector(".comiis_a.comiis_message_table");t&&(w.info("移除帖子字体效果"),m.html(t,m.html(t).replace(te.fontSpecial,"")));},removeCommentFontStyle(){var o;w.info("移除评论区的字体效果");let t=H("font"),e=((o=F(".comiis_postlist .comiis_postli"))==null?undefined:o.innerHTML)||"";e!==""&&(t.forEach(l=>{e.includes(l.innerHTML)||(l.removeAttribute("color"),l.removeAttribute("style"),l.removeAttribute("size"));}),H(".comiis_message.message").forEach(l=>{if(e.includes(l.innerHTML)){l.innerHTML=l.innerHTML.replace(te.fontSpecial,"");let i=l.nextElementSibling;i&&i.localName==="strike"&&(i.outerHTML=i.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));}})),H(".comiis_postli.comiis_list_readimgs.nfqsqi").forEach(l=>{let i=l.parentElement;i&&i.localName==="strike"&&(i.outerHTML=i.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));});},loadNextPageComment(){if(w.info("自动加载下一页评论"),document.title.includes("提示信息 - MT论坛"))return;if(H(".pgbtn").length==0){w.warn("没有找到下一页按钮");return}var t=async function(l){var n,r;let i=await U.get(l,{fetch:true,allowInterceptConfig:false});if(!i.status){k.error("网络异常，请求下一页失败");return}var c=x.parseFromString(i.data.responseText),a=c.querySelector(".pgbtn a");return (n=c.querySelector("#postlistreply"))==null||n.remove(),(r=c.querySelector(".bm_h.comiis_snvbt"))==null||r.remove(),{url:a?a.getAttribute("href"):null,postlist:c.querySelector("#postlist"),pgbtn:c.querySelector(".pgbtn"),pgs:c.querySelector(".pgs.mtm")}},e=async function(){var i,c;var l=F(".pgbtn a").getAttribute("href");if(l){let a=await t(l);a&&((c=(i=a.postlist)==null?undefined:i.querySelector(".comiis_vrx"))!=null&&c.querySelector(".km1")&&(Object.keys(a).forEach(n=>{a[n]=null;}),w.warn("检测到请求的本页内容中存在【楼主】标识，判断为重复页请求")),(!a.url||a.url==l)&&(w.error("最后一页，取消监听"),m.off(document,["scroll","wheel"],o.run),m.remove(".pgbtn")),a.postlist&&m.append("#postlist",m.html(a.postlist)),a.pgbtn&&m.html(".pgbtn",m.html(a.pgbtn)),a.pgs&&m.html(".pgs.mtm",m.html(a.pgs)),ve.init());}else w.error("获取下一页元素失败");};let o=new x.LockFunction(async()=>{x.isNearBottom()&&await e();});m.on(document,["scroll","wheel"],o.run);},codeQuoteOptimization(){w.info("代码块优化");function t(o){var l=["add","and","cmp","cmpg","cmpl","const","div","double","float","goto","if","int","long","move","mul","neg","new","nop","not","or","rem","return","shl","shr","sput","sub","throw","ushr","xor"],i=["aget","aput","array","check","execute","fill","filled","goto/16","goto/32","iget","instance","invoke","iput","monitor","packed","sget","sparse"],c=["transient","constructor","abstract","final","synthetic","public","private","protected","static","bridge","system"];return {aliases:["smali"],contains:[{className:"string",begin:'"',end:'"',relevance:0},o.COMMENT("#","$",{relevance:0}),{className:"keyword",variants:[{begin:"\\s*\\.end\\s[a-zA-Z0-9]*"},{begin:"^[ ]*\\.[a-zA-Z]*",relevance:0},{begin:"\\s:[a-zA-Z_0-9]*",relevance:0},{begin:"\\s("+c.join("|")+")"}]},{className:"built_in",variants:[{begin:"\\s("+l.join("|")+")\\s"},{begin:"\\s("+l.join("|")+")((\\-|/)[a-zA-Z0-9]+)+\\s",relevance:10},{begin:"\\s("+i.join("|")+")((\\-|/)[a-zA-Z0-9]+)*\\s",relevance:10}]},{className:"class",begin:`L[^(;:
]*;`,relevance:0},{begin:"[vp][0-9]+"}]}}z(`
			.hljs{text-align:left}
			.hljs ol{margin:0 0 0 10px;padding:10px 10px}
			.hljs li{padding-left:10px;list-style-type:decimal-leading-zero;font-family:Monaco,Consolas,'Lucida Console','Courier New',serif;font-size:12px;line-height:1.8em}
			.hljs li:hover{background:#2c313c}
			.hljs li::marker{unicode-bidi:isolate;font-variant-numeric:tabular-nums;text-transform:none;text-indent:0!important;text-align:start!important;text-align-last:start!important}
			.hljs em[onclick^=copycode]{color:#fff;background:#246fff;margin:5px 10px;border-radius:3px;padding:0 5px;cursor:pointer;height:32px;line-height:32px;display:inline-flex}
			.hljs .code-select-language{height:32px;line-height:32px;font-size:14px;border:1px solid #5c5c5c;border-radius:5px;text-align:center;outline:0}
		`),X.registerLanguage("smali",t);let e=new x.LockFunction(()=>{function o(i,c="java"){i.oldValue||(i.oldValue=i.textContent),i.innerHTML=X.highlight(i.oldValue,{language:c}).value.replace(/\\n$/gi,"");}document.querySelectorAll("em[onclick^=copycode]").forEach(i=>{if(i.nextElementSibling&&typeof i.nextElementSibling.className=="string"&&i.nextElementSibling.className=="code-select-language")return;let c=X.highlightAuto(m.text(i.parentElement.querySelector("div[id^=code]"))).language,a=document.createElement("select"),n=X.listLanguages().sort();n=n.concat("自动检测");let r="";n.forEach(s=>{s.startsWith("自动检测")?r+=`<option data-value="${c}" selected="selected">${s}(${c})</option>`:r+=`<option data-value="${s}">${s}</option>`;}),a.className="code-select-language",a.innerHTML=r,m.on(a,"change",()=>{let s=a.selectedOptions[0].getAttribute("data-value");w.info("切换代码块语言: ",s),m.parent(a).querySelectorAll("li").forEach(u=>{o(u,s);});}),x.preventEvent(a,"click"),x.preventEvent(i,"click"),i.insertAdjacentElement("afterend",a),x.dispatchEvent(a,"change");}),document.querySelectorAll(".blockcode").forEach(i=>i.className="hljs");},this,500);x.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{e.run();}});},optimizationImagePreview(){w.info("图片查看优化");let t=[{hostName:"avatar-bbs.mt2.cn",pathName:"*"},{hostName:"cdn-bbs.mt2.cn",pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"/uc_server/avatar.php"}];function e(i=[],c=0){let a="";i.forEach(s=>{a+=`<li><img data-src="${s}"></li>`;});let n=m.createElement("ul",{innerHTML:a}),r=new Ce(n,{inline:false,url:"data-src",zIndex:x.getMaxZIndex()+100,hidden:()=>{r.destroy();}});r.view(c),r.zoomTo(1),r.show();}function o(){document.querySelectorAll("#postlist .comiis_vrx:not([data-isHandlingViewIMG])").forEach(i=>{i.setAttribute("data-isHandlingViewIMG","true");let c=[];i.querySelectorAll("img").forEach(a=>{let n=a.src,r=new URL(n).hostname,s=new URL(n).pathname,u=a.parentElement;u.nodeName.toLowerCase()==="a"&&u.getAttribute("href")===n&&(u.setAttribute("href","javascript:;"),u.removeAttribute("target"));let h=false;for(let f of t)if(r.indexOf(f.hostName)!=-1&&s.match(f.pathName)){h=true;break}h||(c=[...c,n],a.removeAttribute("onclick"),a.setAttribute("onclick",""),m.on(a,"click",function(){w.info("点击图片",a);let f=c.findIndex(d=>d==n);e(c,f);}));});});}let l=new x.LockFunction(()=>{o();});x.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{l.run();}});},setAttachmentsClickTip(){w.info("附件点击提醒");function t(e){if(e.hasAttribute("href")){let o=e.hasAttribute("id")?e.id:e.parentElement.id,l=e.getAttribute("href"),i=e.innerText;if(document.querySelector(`#${o}_menu`).innerText.indexOf("金币")===-1)return;console.log("发现附件",e),console.log("该附件是金币附件，拦截！"),e.setAttribute("data-href",l),e.style.setProperty("cursor","pointer"),e.removeAttribute("href"),e.innerText="【已拦截】"+i,e.onclick=function(){D.confirm({title:{text:"提示",position:"center"},content:{text:`<br />确定花费2金币下载附件 <a style="color: #507daf !important;">${i}</a> ？<br /><br />`,html:true},btn:{ok:{callback:a=>{window.open(l,"_blank"),a.close();}}},mask:{enable:true},width:"400px",height:"200px"});};}}x.mutationObserver(document.documentElement,{callback:()=>{document.querySelectorAll(".attnm a").forEach(e=>{t(e);}),document.querySelectorAll(".comiis_attach a").forEach(e=>{t(e);}),document.querySelectorAll("span[id*=attach_] a").forEach(e=>{t(e);});},immediate:true,config:{childList:true,subtree:true}});},async detectingUserOnlineStatus(){var l;w.info("探测用户在线状态"),A.onceExec("mt-forum-post-detectingUserOnlineStatus",()=>{z(`
				.gm-user-status-icon{
					border: 0 !important;
					float: right !important;
					display: block !important;
					width: 40px !important;
					height: 40px !important;
				}
			`);});function t(i){return m.createElement("img",{className:"gm-user-status-icon",smilied:i?"1353":"1384",loading:"lazy",src:i?"data:image/png;base64,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":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAE5dJREFUeF7tmwl0VdW5x393zs1NbnIzEzOThARBEQQcQeoDq6sOtGLB6qtYsKtQYlV8jlVRqnb5pA6VFsGKtSpaKtJS7cMBwVqUSVQkZICMZE5uppubO7+3z5Dc3NxMEOtbq91rnZXknH3O2f//9/++/e1vn2j4F2+af3H8/JuAfyvg62dA+/mLXJgUz2zgXL+PPI2GRK2OWA1Ei9cHoMvvoz0QoFmroww40NTKp2cv5WPA/3UO8WtxgX+sw5w5kau1Gq7RaLjCZJ0crYudgd46iYioVDCloNFbQWeRsfkcBLyd4Gqgt7sOb2cJvvaDuDqPdgUCvO0P8FbVcbZfcDvO8SZjXAn48lWS46NYRYAfR6YsSDClLiAifqY8Zr8dfB4IuORD6wG/T76m1YHfABqTfOgMoLVJl3pb9+Oq20lPw84WNGxo7ebZqdfTOF5EjAsBwuJZudyn1VAUlbM82pS2GL3eBZ42CHT0j1UAHamppAR8oNGBJgYMcXi9Jly1W+g+sbHLH+CZynJ+MR6KOF0CtNVvcqVey7NR2Temm7NuQk8b+OqhD4BOtrDaNPqhKQh4+68JIsQz1EOQoU/DSxzOys10V7xc4/WzKuO7/OV04sQpEyCsnpjKM/EZc5aZMxcREZUCnioZgGQ55VDBDwc8lBKViFAS/ApBxjR6HXacVX+ktXrPpuY6ik5VDadCgPbQJtKT43kzOufG6VHZS9D0FMs+rdWfPniVjOFIEERo9QQizqK74jW6Trx8qLGV705fRs1Y1TBWArRfvEp+QiQ7rXnL0yOTzkfjqZaB9x1GmYRTsfxISvC7QYAPOgKmHHqa9tJZtrGmpYcFZ11P6VhIGAsBMngLH0Xnr0yIsuWA1y4D10eEt/5YZD9UZBBKCOcK3t5+IoxRdNvr6Sp9rqXFwcVjIWG0BEiyT0ngo+hJK9OjYhJBDEAFrtXT0uhk1zufUHzwOPamVgmOLSmeaXOmseCauUREm0eK/wOu93Y52fnWbg7vOTzgeYUzJjLv8vNISDTIBIhxiECpM9HdZaer5LmahhYuHq07jIYA7T/WYcrM5u8x+cunW6Lj+16oyv6zT4/z+6fewux3YzbpMWgCEhhPQIPT5cUQa6PolyuJT00cFQmtdc08c9dzeNrtYZ/n1Br5z1uv5JxZOTIJPpFbeEGjx9HdTkfpxkNVFVx0we24RnKHURFQtoUNiXlLlsUkZoJfJDGmPp+vKa/l6Xu2YEVLlFXHxFkFRFgziYi00NvjoK22mrJ9R4gtyKHoVz8dFQHP3PZr2o+dIG/WFFLzC4kwR9Hr7Ka5oZGGI5/T1tBBJ35ufWwx6Tkpiiu45J9aPR2tDTSXvbYpbzE/Pl0CtMWvsjA5a85WW9oF4HUowPsJePHxbdR+XMaCVcuZsfAq9CYlvQ2CuvvFjezcuIVffPj0qAi475JbuapoGbMXLxnc3+/lwF//wjuPP0vahXks/a8rBxIg1GCMwX7yUxor91xbeD3bhiNhOAVo33iU+Jl5HEmcvDzJYtRIfibLvp+AhxetY/qll/Gde++QBxvoAr8nKPsTKW60fF7NE0aiwZDZf494VsCt5BdihrFKY9jx6JMcev9/eOD1osEE+D04vHqaj25s2l/GlOvuRQSlsIuqYQkofY1HE3KvvstmjQOtISwBWKeBPgVcNeBvkgcqpsDgGUCbIPdxHxkJunzdOAW8DeBvUUgNmQl0iRCRK/dpPxCWAPxu7N3dtJRv/2X+Eu4dKwGS9c/OpjZ/+lKjDGoIAmyXgK8dXBUDs7/xmAKDk6LgqVDI3DQRjInQ+t6QBIjbSw+/4v68grShVDCUArTC+kk5C+6KsSaC1igTICyri5Ct2+cOShIk/g5Of79uAoITInUW8IncwCe7oEiaAj46utpoOrFzSBWEI0B781VYfn4j5VmFi5LQCfBhCJAWJ0oCpGaBUgYo+iqLn/EgITglVkANyAbVPED0CyXAJzJHN5Ul25seeZnc3/0ZR6grhCVg3wtcm5lV+HpS8hRkArSgNff7tqQCAVaxfkgm2OtwU1pcQ2XZSdpbOmhr6qCzpQ27vQd3rwu3R84TXE4nAT9EWOQkyWjQYIwwYbNFYk2IIy4phtiEGLLyziAvLxGz1SLnIGoCpKpAnBPg1azR7wS/HwQBAR9NTcVUVRZ/f9aP2DoSAVpAV/wHtibnzLnKZk1WZG8AlJRXWDVkJhB/f/V5DZ99WMLBg6U01bfhD4BWA9bEVBJSs4iNSyQmJZOkxAQsMXKxI7Q5OuzSqabmFjoaqqivPk5H4wm6u3qk8ympcRSelcHMi/I559wM+XaJBCUHEAQIRSDUoBRc/G5cjnoqju/7c+ENXCvqT8EkhCpAkv9dS2jJL7zCKPm7UECftEPigEbHR7tKefOVT2ioa5NjpYY+8Nc9sgWr1YrNZiM5OZm4uDhMJtOIM0F3VxetbUIxdhobG/j9nQv7nimIFS0uzsI1S2Yz//JJ8okw/q8qAK+T0pKd7l++RkKoGwwiQBQwE5Iz9qSmndMf1ELjgEZPc3Mvv1m3i5KjtUMCGk8ChnpJWno8P737ctLPEGuDoACoyF92GQ91dUdoaayeE1poDSZAkv+e9dwzOTd3TXxSgSx/NaiJOp1wA62Bmno/j9+/jXa7iCn9Tavpf5zXH2Dx2vFRwObVC9ELaSnNH1BkoPwdadKx+oH5TJokXGug/OW6o5/WplKOlpc/OGcFjwW7wSACyrawPmHC5GWxMVny1CfkH+QGHd29PLT6bzS19Bdog4FrBI3iDb4A85YUMfG8b4d1AZfLhcetZHhAVLRUIZdasAvs+2AHuzf/Ap1OHqoImuGIiI7QsfbJb5OQGCEHSlUB0pTopb2rlpb6o2J9sGI4AkxfvsQHefmzzjOZE4RHB4EXRBh48bkveG9XCcGgxYAE8CAj4fNBjxeiE9MwR1lxdndKR09357AxIDLKKvUXh2hNFUeJFGlHUFlRjQOhZEyZmsQ991/QXz8QJIgM2O/F5WqnrHTfJ1N/yLfEBKQGwlAFmL54ifLJky5M1RktSrTvV0FLi4fbi97us4Jq7WDgOsUNfIEALk8At380C86hOTFqA5gMGoKf268A+TeVCOEaax+dS3aWOl3K1pcU6XZwtOTjurN+SO5QBAgnNx95mbozCy+xyL4vKrj9Ktj+x1q2bjssWVttKnh1gMFQBAmqtUL7DwU5uL8AJiw/1LPDEfGtS/JZunyi7AKK9eVA6OarYx85ptxIKkgbLNKKLdg8EgElr9Gcn3+pUfJ90aQ5X1bBk0+UcPjwiQFyDx6cNlgKwwr99C76g1gSJIsmTgnCcrLjWfPIDCUdVqrISmm9tOxD96QliKrMCATkXSIToGZ7QgVaHbet3o+9WU5WVOD/LNBDKkYhQyXCoNOycdO8gdZXCBiVAoQLFORdaNEZIuR3BpGwsmgvjq4eCXwocCVIn55px3C3b+BMiKoKQcTGDRdjEN4rgEtBwofP6+FY2ccju8AXL1Gcnz8r1WSI7E+EFFdYWfQpvd3OPvD/bNBD8aOSoZLw299e1E+AYn2X10Vp6T4RBAuHdYH9G3l3UsHUWdERsQM3Of7vrrvu/4qO5va+ceiDguEYjDfuXb0htZ7fbpyrFEqVrTWgq7edkmNf7pu5nPnDEvD+02w8uzD3unjbBJkA1Q1EEHzqJGXFldIpFbxYKH7TTSz8RBNEJKfaWPPgZLkeoMhf/Gi11/N5cfkbl97K8mEJ2LOen03MyliTKirAKnjl59Y/m/nwb7uk0wL4/ycXUEk464LZ3PIDhRE1BgB1zVUcr6wWqfBTQxEgbGl64R7mz5lh256bOaXfsIoSDlTMZvN//xqDIoxw8/M3oQZ1BvD4YNFNi5k783h/AJTkCuXHj7DnoP3qHz3Gu8NmgmYzcR89R+m0aedH6nxBW9kaHa1Rl7Fm6VrJ8ip4nTYkHH8DDPj8GgQJgoCHNq0mofeD/lHowRfwcvjw3p6LV5LvdIr9+6FTYWHbmHd/xSvnTp+8INYaLy2u+lr8NJ5/9iuOfboXMd+Kpvz4BmDLr/Qpavf4/JyRm8Mda6+ERvFpkWx50do7Wzlw6OjO+bfxA0B8sdFXFBm0GhTZ4Po7uH7++bbf5E5U3EAlQWfmWMflPH/fvRIBKvjRzAYGrQZPaF48DG2j6a9Gf0GCIOD624o4t6AMepv7wKOD8tIjvLvX/pMVT/Kq4v9hCZBim1iZms1Ef/gMxTNmnB+tUwubalaZtZRn736Gk6VlEgHDgU/xGpjlm0CaLxqT4il2rYsybQeHzC04gwgxazVMdyaQ54/B5perRi4N1Oq62Kerp0EftNkSRJwgQRBgSZ3AAxsegrINA8D7vF4OHtzbdUkRhU4nXWK1PWxJTARCwLLjCdacc2bGitS0TFkwogkSYgs50XoOG+5c3UeAsFZom+VMYHZEDnqbDW1QGczvcuG122mrr8fhFWORm0UfRdyECWH79zY3c9BbzT6zslGi3CMUpRJww333M7WgCewH5KtKoK6rreKzr6rXf+dOHgSpKjxgw3RQSUy51TxvJumP38JeSQV6xZkEEYKE/CK2rnuJQx/ukhQgEaAs2MXOcI7TwrfIQxcVNaTIfd3d1NdX4HR4MVv0TJiQPWL/DyijJEIukIqCg0pA1vTZLF+zGs3xx/qAS10U69/9POfv2i99PSIWQcMWRVU3ECqw7niCB/pUoEIRt0dm4U25iadXFdFRUykRYFB8wajVsaAhiQRjzDAergSnNjv1jlYmWOKJjQtfKQ5+SIu7gx1J9dIpj9cvEaCx2rhrwwtE9uyA7sMD3hlk/YcBUYkZtF0edl9AUUHUvJmkPnIzu8+aMjU+OiZ2IKDERTR1JrNh1S2SNYRGNHotc5rjSXEqC6kRKYCqjkYyY5JH0VPuUmZzSvFDCkk6HTc9/ivS0kFT/+KAZ3R1tPPFkS9bf/475u7aT53i+wOsL24YcmtMiQXW9XewUJoR8oMSI+nlZshcQU1pG5vvvk0iwWI0cEW5KKWNvnU6urFahnaV0Cd56OWtDHlJvuj+Ryg4bwqceAJ8Az8iDYr8Yns8rPVHIkCEETEjRO54nHU52WnXZWVlDxyPMQkyiqg5dpxX7vkZAa+fuZUxWLzDfAs4em7C9qwz9nAg282iex6iYPZMqNkALnl9orbKygpOVNS+8Z27ud3pRAQNEW0HWX84AsQ1KTUWAXreTJJ/fiNbJ+VmFEizQnAzZUH6j2mqOcn2tWvwVNYxrc4yahJcHjcmg7wBPVJz6L0cmqbl6vvWkF6QD/WvgGPglrvw+5Ly6mOPvMy1u/ZLn9QOivzB7xn2+wB1RhDJ0cK55Nx+HdtysjOSw5OwDK/Hy/ubNnLo7R1MqzYT7xg/JdTE9hJYdCFX/GQVkWKP8OTvwVk8gDMB/kRFdeO6N1i4bTcnlKg/KPKPlgBVBcIVzCI5WnY5hd+fz5bszIz4QSQId0i7UfoQouboUd7b/DTOz6pIbtUQ164hwidKjmNrvToPJ5N8OKeewaUrV5Ez7RwC7jY09a8Nkr0AX1FV3fr6uyze9A7FStIzLPiRXEAdreoKESIeCBK+O4/N+RMzzhhEggiM8ZdB7IXSvScOf8ahd/5K+Sd7sPZosXYFMLu1RHr0RDjU7KqflF6Ljh6DF6fRT2e0ButF05j97WvIm32e3Ml5EOq2Dwp4Anzp8eqTb+7iJgW88HuxSzo+X4kpQxTxQMxv0Qvncsaq7/G77Ky0gkGBUXQWcSH5MvkzFpE7uRyUH/qCqkOfSl+NtVbX4O7pxuWW01uT0YAxMor4jHTi0jJIPfNsJk6bTmSskkuIz2+a3h0keXGvCHgVlbXHnv0TN2/bzUlR/AkCL7oM+w8Xo921UOs+EglCCWYzMS/cycP52XHfS52QQqwtfrC+TbkE4i5GY8lX9hjG4AJ+LwFHKZr2T8ICb7e3UlffQGlF259+9AQPOJ10KBFftfyI4EfrAsGuIBlMJcHplFaO/1GQyYPZWWkp6Wnp9KXNwViFa0RMBEsuRCQT0Mah0YudJ2Wr3O8i4HWg8bdBbyP0VIKzZJDUxSNFeltTWyOs3nCsijUrnuQ9sxnnqYAfKwFqUFRJkDZSBCFxcUSt/xm3pti4ITMzLXJIIsYggNCuKvCqqtqeBjt/WPEUT7e1SfO78HN1o0P8PirLq88frQsEj0d1B2l2EF+2mM2YhBoWziXx+5dykyAiMTEuMiExmXhbbHhVjIIMAbrV3k5LcyPNzW0S8NffZ/O23TQrVheARfVTjfZjAn8qCgglQpAgJnsRHEU2IzRtjIvDuHYpc/LSWGjQc5HVGh1ps8UQaYnGbNRj1JvRm3R9xAigXpcPt9eJ0+2lx9GF3d5BZ2dXj8fL38tq2Xb/i+xpa5PAikMFrnwPEz7LGwXHp/2Pk8FqGESEGIAg45bLmVqYxbnWKLLNRnKNBpK1GuT9b6UFwO5y0+J0U97ZTUVxJQeef4cvFdCi11DAx2z14PeeiguEIzaUCBEfVNdQd/b78l1BSriHBIFVAWM243M6+ywu5k2xEFSTiNP+n8LxIkDFE44IcU0A1pnNcpnS6VTrNf00CKDqX05nH0j1E5JxB346QXA0rhW8X6QqQF0YjJQTq8U/tRQbnDKetsVDBz/eChjOPdRrI/3zYGiOPO6ggwf5v+5Gprm31vWZAAAAAElFTkSuQmCC"})}function e(i,c){let a=t(c);m.prepend(i,a);}let o=Array.from(H(".pls.favatar:not([data-is-detectingUserOnlineStatus])"));for(let i=0;i<o.length;i++){const c=o[i];let a=c.querySelector(".comiis_o.cl a.kmfxx");if(!a){w.error("探测用户在线状态失败，未找到发消息按钮");return}c.setAttribute("data-is-detectingUserOnlineStatus","true");let n=a.href,r=await U.get(n,{fetch:true,allowInterceptConfig:false});if(!r.status){w.error("探测用户在线状态，中止网络请求探测"),e(c,true);return}let u=m.parseHTML(r.data.responseText,true,true).querySelector(".flb");if(u){let f=((l=m.text(u))==null?undefined:l.trim()).endsWith("……[离线]");e(c,f);}else e(c,true);}},showUserLevel(){w.info("显示用户等级"),H(".pls.favatar:not([data-show-user-level])").forEach(t=>{t.setAttribute("data-show-user-level","true");let e="0级",o=t.querySelector(".tns tr"),l=t.querySelector("p em").innerText,i=document.createElement("td");switch(i.setAttribute("style","border-left: 1px solid #e3e3e3;"),l){case "幼儿园":case "初级工程师":e="1级";break;case "小学生":case "中级工程师":e="2级";break;case "初中生":case "高级工程师":e="3级";break;case "高中生":case "专家":e="4级";break;case "大学生":case "高级专家":e="5级";break;case "硕士生":case "资深专家":e="6级";break;case "博士生":case "实习版主":case "版主":case "审核员":case "研究员":e="7级";break;case "博士后":case "超级版主":case "网站编辑":case "高级研究员":case "荣誉开发者":e="8级";break;case "管理员":case "信息监察员":case "资深研究员":e="9级";break}i.innerHTML=`<p><a class="dj">${e}</a></p>Lv`,o.appendChild(i);});},hideBottomInfoBlock(){return w.info("隐藏底部信息块"),z(`
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
		`)}},He={init(){m.ready(()=>{A.execMenuOnce("mt-guide-beautifyPage",()=>this.beautifyPage());});},beautifyPage(){w.info("页面美化"),z(`
			.xst{font-size:15px}
			td.author_img{width:50px;padding:15px 0}
			td.author_img img{width:40px;height:40px;border-radius:50%}
			.list_author{margin-top:2px;color:#999;font-size:12px}
			.bankuai_tu_by a{color:#999!important}
			.bankuai_tu_by img{height:16px;margin:1px 1px 0 0;vertical-align:top}
			tbody a:hover{text-decoration:none;color:#3498db}
			.byg_th_align em+a{margin-right:5px}
		`),H(".bm_c table tbody").forEach(t=>{let e=t.querySelector("th.common"),o=m.html(e),l=e.querySelectorAll("a")[0].getAttribute("href"),i=null,a=t.querySelector("td.by>cite>a").getAttribute("href").match(/uid-(\d+)/)[1],n=`
			<td class="author_img">
				<a href="space-uid-${a}.html" c="1" mid="${i}">
					<img src="${B.getAvatar(a,"middle")}">
				</a>
			</td>
			<th colspan="3" class="new byg_th">
				<div class="byg_th_align">
					<em>[${t.querySelector("tr>td.by>a").outerHTML}]</em>
					${o}
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
						<a href="${l}">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACOUlEQVRYR+1X0XETMRDdtfRP0gFUgG9O+iZUAKmApAJMBZgKMBUQKohTQcy3dHOmApIOzL/lZTbc3eh0ki/kfMkww37Zlkbv7e7bJxnhiQOfGB/+HQJlWR45594AwAkAvAWAo6B6GwBYAsBKCHGVZRl/743eCjDwbrd7T0SzCGgKYIOIi8lk8qWPyF4C1lrO9OtfAIeEuArnSimuTDSSBIqiOCMiBh8ciPghz/NF7KAogUOC16CIeJ7n+UVIokPAGHOCiNeD044cQESvtdYrf6lDwFq7BoCXIxFYa62zJIFKdJdjgHtnnvqibFXAWss9ejcygW9KqbNGGz6YtZbH5tnIBDZKqeMUAQrBieiT1noemYwfQgj2CXDO8Zw3uqkVb4yZI+LH8EylVFP55kNZllPnXLlvszFmhYiveI8/20VRzIjoM/9ORN+11mzXd2Gt7SQlhMiyLGOxty+j2OZ6dKq74Kfnikul1GkFwhXge4JjI4R4wRacGuloBVJsq0N5dqehJRPRnywQec0P1hKvNZXwF5ME/BKPKMQrpdSddjotGMOCw0RCS275QNXnmxFH8VYIMfWv6I4V+4oeoQ0tF+y0wBsdX9WH4tFywKgG6h+rVrDyD3UpRcGTFfAqMfhuqJ00Vca9T7IhbwN2RCnlrHa8xyJwyy9jIlqGD4+DEOCsAGAupbzZbrfP/UOllOu+F3CMxN4WeMb0CxFnsTfd0BHp08CcAaSUi4dkdx9yvX9M7nPIkD3/CfwGBboJMIftEqkAAAAASUVORK5CYII=" />${t.querySelectorAll("td.num>a")[0].innerText}
						</a>&nbsp;
					</span>
					<span class="y bankuai_tu_by" style="margin-right: 20px">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACVElEQVRYR+1W3W3bQAwmTb83GzSdoDnr7rn2BukETSeoO0HtCdpO0GSCeoPYzzrhnA3sDZJ3yywYSIIk352sOIBRIHwTxCM/kh9/EM4seGb/8Abg/8mAc+4yz/NPAHANAFcAcNnizwYA1gCwIKKVUkq+O6UzA4XjHwBw02mtqXBLRPMuIFEAaZrOEFGcv1gQcZYkyTxkwAvAOXex2+3uEVFSfbIw83o4HE6UUo9tYwcAnHNXeZ7/9dS4/nYrtUbE5zozs/BBuPE+gnZDRAKiwY0GgCMif0LEaZIktz5HWZbdMPMvAHjn++/LRAOAtVZY/DEQxRMRjZVSohOUIoPLGAhjjCoNVACstYL8W5AsiF/bkadpOiYiHo1Gq/q7IhN/Ijh/a62n8v8ZgBhCxPvIg63Wuup7D0+kvp/r2bHWSq2DnGDmiTFmWQJYIqIMmZBUiEUhYHyjtf5QGujKKAAstdYTtNYKe4X1QUHE70mSSImi2SqjEr0sy6bM/DNmV/TPD6CI6jVK0OBJVwmYeWWMGR9LwkZ9CxIuaiTbEtF1HxISkRL9k9tQMihs7tOGzDw3xsyqNqwxNzaIHotReswgkpa+CBDwQWtd7ZiDUZznuUQTmoayTKZa6zuf8WIACfODzotpWi0l3zKSw0NARBcLMzeWESJKO7ePlDrOh7bzgxKU2rKUOjIRa2/fP6/zIIDSwmscJHXC+ZAde5IJY7/0DPuOiGYnnWR1h3Ib7vf7MTOXR2mbI3KkrBFxMRgMFr7r50UZ6Bl1b/XOEvS22PPBG4CzZ+AfrntRcuAjU2wAAAAASUVORK5CYII=" />${t.querySelectorAll("td.num>em")[0].innerText}
					</span>
				</div>
			</th>
			`;m.html(t,n);});}},ae=function(t,e,o,l,i,c="",a,n,r){let s={text:t,type:"input",isNumber:!!a,isPassword:false,props:{},attributes:{},description:l,afterAddToUListCallBack:r,getValue(){return this.props[M].get(e,o)},callback(u,h,f){this.props[M].set(e,a?f:h);},placeholder:c};return Reflect.set(s.attributes,$,e),Reflect.set(s.attributes,Q,o),Reflect.set(s.props,M,{get(u,h){return A.getValue(u,h)},set(u,h){A.setValue(u,h);}}),s},re=function(t,e,o,l,i,c="",a){let n={text:t,type:"textarea",attributes:{},props:{},description:l,placeholder:c,disabled:a,getValue(){return this.props[M].get(e,o)},callback(r,s){this.props[M].set(e,s);}};return Reflect.set(n.attributes,$,e),Reflect.set(n.attributes,Q,o),Reflect.set(n.props,M,{get(r,s){return A.getValue(r,s)},set(r,s){A.setValue(r,s);}}),n};class Ae{constructor(e){Z(this,"option");this.option=e;}async showView(){var a;let e=D.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist">
                            
                        </ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:true},btn:x.assign({ok:{callback:async()=>{await c();}}},this.option.btn||{},true),mask:{enable:true},style:`
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

                ${((a=this.option)==null?undefined:a.style)??""}
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),o=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");let l=e.$shadowRoot.querySelector(".rule-form-ulist"),i=await this.option.getView(await this.option.data());l.appendChild(i);const c=async()=>{(await this.option.onsubmit(o,await this.option.data())).success&&(e.close(),await this.option.dialogCloseCallBack(true));};}}const ze={$el:{isFilterElementHTML:[]},$key:{STORAGE_KEY:"mt-post-comment-filter-rule"},init(){if(this.registerMenu(),ne.isPost()){let t=this.getData();if(!t.enable)return;let e=new x.LockFunction(()=>{this.runFilter(t);});x.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{e.run();}});}},registerMenu(){Y.add({key:"comment-filter",text:"⚙ 评论过滤器",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{this.showView();}});},runFilter(t){let e=function(l){for(const i of t.userBlackList)if(i==l.userName||i==l.userUID)return w.success("评论过滤器：黑名单用户",l),true;return  false},o=function(l){for(const i of t.userWhiteList)if(i===l.userName||i===l.userUID)return w.success("评论过滤器：白名单用户",l),true;return  false};H(".comiis_vrx").forEach(l=>{var a,n,r,s,u;if(l.querySelector(".plc .pti .authi .show"))return;let i=l.querySelector(".pls .authi a"),c={userName:(i==null?undefined:i.innerText)||"",userUID:((r=(n=(a=i==null?undefined:i.href)==null?undefined:a.match(te.uid))==null?undefined:n[2])==null?undefined:r.trim())||"",content:((u=(s=l.querySelector(".plc td.t_f"))==null?undefined:s.innerText)==null?undefined:u.trim())||"",isAuthor:false};if(!o(c)){if(t.replyFlag&&l.querySelector(".quote")){let h=l.querySelector(".quote");this.$el.isFilterElementHTML.push(h.outerHTML),h.remove();}if(!(c.isAuthor&&!t.avatarFlag)){if(e(c)){this.$el.isFilterElementHTML.push(l.outerHTML),l.remove();return}if(!(typeof t.minLength=="number"&&t.minLength>c.content.length)&&!(typeof t.keywordLength=="number"&&t.keywordLength<c.content.length))for(const h of t.keywords){if(typeof h!="string")continue;let f=new RegExp(h);if(c.content.match(f)){console.log("评论过滤器：",c),this.$el.isFilterElementHTML.push(l.outerHTML),l.remove();return}}}}});},showView(){const t=this;function e(i){return {get(c,a){let n=t.getData(),r=Reflect.get(n,c,a);return (c==="keywords"||c==="userWhiteList"||c==="userBlackList")&&(r=r.join(`
`)),r},set(c,a){(c==="keywords"||c==="userWhiteList"||c==="userBlackList")&&(a=a.split(`
`).filter(n=>n.trim()!="")),Reflect.set(i,c,a),t.setData(i);}}}let o=D.config.panelHandleContentUtils();new Ae({title:"评论过滤器",data:()=>this.getData(),getView:i=>{let c=document.createDocumentFragment(),a=R("启用","enable",true);Reflect.set(a.props,M,e(i));let n=o.createSectionContainerItem_switch(a),r=R("处理回复引用","replyFlag",false,undefined,"移除引用");Reflect.set(r.props,M,e(i));let s=o.createSectionContainerItem_switch(r),u=R("处理作者评论","avatarFlag",false);Reflect.set(u.props,M,e(i));let h=o.createSectionContainerItem_switch(u),f=R('处理从"搜索页面"或"我的帖子提醒页面"进入的网站',"viewthreadFlag",false);Reflect.set(f.props,M,e(i));let d=o.createSectionContainerItem_switch(f),p=ae("匹配的评论内容长度最小值","minLength",5,"小于此长度的评论就算关键字匹配成功了也不会被排除",undefined,"",true);Reflect.set(p.props,M,e(i));let g=o.createSectionContainerItem_input(p),y=ae("匹配的评论内容长度最大值","keywordLength",8,"大于此长度的评论就算关键字匹配成功了也不会被排除",undefined,"",true);Reflect.set(y.props,M,e(i));let v=o.createSectionContainerItem_input(y),b=re("评论关键字","keywords","","多个评论关键字换行分割");Reflect.set(b.props,M,e(i));let C=o.createSectionContainerItem_textarea(b),I=re("黑名单用户","userBlackList","","多个用户换行分割");Reflect.set(I.props,M,e(i));let E=o.createSectionContainerItem_textarea(I),T=re("白名单用户","userWhiteList","","多个用户换行分割");Reflect.set(T.props,M,e(i));let S=o.createSectionContainerItem_textarea(T);return c.append(n,s,h,d,g,v,C,E,S),c},btn:{merge:true,position:"space-between",ok:{enable:false},cancel:{enable:true,text:"关闭"},other:{enable:true,text:`查看已过滤（${this.$el.isFilterElementHTML.length}）`,type:"primary",callback:(i,c)=>{D.alert({title:{text:"评论过滤器-已过滤",position:"center"},content:{text:`
                                ${Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(a=>a.outerHTML).join(`
`)}

                                ${this.$el.isFilterElementHTML.join(`
`)}
                                `,html:true},mask:{enable:true},style:`
							.plhin{
								width: 100%;
							}
							td.plc .pi{
								height: auto;
							}
							`,width:"88vw",height:"80vh"});}}},dialogCloseCallBack(i){},onsubmit:(i,c)=>({success:true,data:c}),style:`
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
            `}).showView();},getTemplateData(){return {enable:true,avatarFlag:false,replyFlag:false,viewthreadFlag:false,minLength:5,keywordLength:8,keywords:[],userBlackList:[],userWhiteList:[]}},getData(){return V(this.$key.STORAGE_KEY,this.getTemplateData())},setData(t){W(this.$key.STORAGE_KEY,t);}};class Ve{constructor(e){Z(this,"option");this.option=e;}showView(){let e=D.alert({title:{text:this.option.title,position:"center"},content:{text:`
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
            `}),o=e.$shadowRoot.querySelector(".filter-container"),l=document.createDocumentFragment();this.option.filterOption.forEach(i=>{let c=document.createElement("button");c.innerText=i.name;let a=async()=>{(await this.option.getAllRuleInfo()).forEach(async r=>{await i.filterCallBack(r.data)?m.show(r.$el,false):m.hide(r.$el,false);}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),e.close();};m.on(c,"click",async n=>{x.preventEvent(n),!(typeof i.callback=="function"&&!await i.callback(n,a))&&await a();}),l.appendChild(c);}),o.appendChild(l);}}class Pe{constructor(e){Z(this,"option");this.option=e;}async showView(e){var c,a,n,r,s,u,h,f,d;let o=D.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:true},btn:{merge:true,reverse:false,position:"space-between",ok:{enable:((n=(a=(c=this.option)==null?undefined:c.bottomControls)==null?undefined:a.add)==null?undefined:n.enable)||true,type:"primary",text:"添加",callback:async p=>{this.showEditView(false,await this.option.getAddData(),o.$shadowRoot);}},close:{enable:true,callback(p){o.close();}},cancel:{enable:((u=(s=(r=this.option)==null?undefined:r.bottomControls)==null?undefined:s.filter)==null?undefined:u.enable)||false,type:"default",text:"过滤",callback:(p,g)=>{var b,C,I,E,T,S,q;typeof((I=(C=(b=this.option)==null?undefined:b.bottomControls)==null?undefined:C.filter)==null?undefined:I.callback)=="function"&&this.option.bottomControls.filter.callback();let y=()=>Array.from(o.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),v=g.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");m.text(v).includes("取消")?(y().forEach(ce=>{m.show(ce,false);}),m.text(v,"过滤")):new Ve({title:((T=(E=this.option.bottomControls)==null?undefined:E.filter)==null?undefined:T.title)??"过滤规则",filterOption:((q=(S=this.option.bottomControls)==null?undefined:S.filter)==null?undefined:q.option)||[],execFilterCallBack(){m.text(v,"取消过滤");},getAllRuleInfo:()=>y().map(ue=>({data:this.parseRuleItemElement(ue).data,$el:ue}))}).showView();}},other:{enable:((d=(f=(h=this.option)==null?undefined:h.bottomControls)==null?undefined:f.clear)==null?undefined:d.enable)||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:p=>{let g=D.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async y=>{var b,C,I;if(w.success("清空所有"),typeof((I=(C=(b=this.option)==null?undefined:b.bottomControls)==null?undefined:C.clear)==null?undefined:I.callback)=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){k.error("清理失败");return}else k.success("清理成功");await this.updateDeleteAllBtnText(o.$shadowRoot),this.clearContent(o.$shadowRoot),g.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
            ${D.config.cssText.panelCSS}
            
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
            `}),l=await this.option.data(),i=false;for(let p=0;p<l.length;p++){let g=l[p],y=await this.appendRuleItemElement(o.$shadowRoot,g);(typeof e=="function"?e(g):true)||(i=true,y.forEach(b=>{m.hide(b,false);}));}if(i){let p=o.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");m.text(p,"取消过滤");}}parseViewElement(e){let o=e.querySelector(".rule-view-container"),l=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:o,$deleteBtn:l}}parseRuleItemElement(e){let o=e.querySelector(".rule-controls-enable"),l=o.querySelector(".pops-panel-switch"),i=o.querySelector(".pops-panel-switch__input"),c=o.querySelector(".pops-panel-switch__core"),a=e.querySelector(".rule-controls-edit"),n=e.querySelector(".rule-controls-delete");return {$enable:o,$enableSwitch:l,$enableSwitchInput:i,$enableSwitchCore:c,$edit:a,$delete:n,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,o){let l=await this.option.getDataItemName(e),i=m.createElement("div",{className:"rule-item",innerHTML:`
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
					${D.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${D.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(i,"data-rule",e);let c="pops-panel-switch-is-checked";const{$enable:a,$enableSwitch:n,$enableSwitchCore:r,$enableSwitchInput:s,$delete:u,$edit:h}=this.parseRuleItemElement(i);return this.option.itemControls.enable.enable?(m.on(r,"click",async f=>{let d=false;n.classList.contains(c)?(n.classList.remove(c),d=false):(n.classList.add(c),d=true),s.checked=d,await this.option.itemControls.enable.callback(e,d);}),await this.option.itemControls.enable.getEnable(e)&&n.classList.add(c)):a.remove(),this.option.itemControls.edit.enable?m.on(h,"click",f=>{x.preventEvent(f),this.showEditView(true,e,o,i,d=>{e=null,e=d;});}):h.remove(),this.option.itemControls.delete.enable?m.on(u,"click",f=>{x.preventEvent(f);let d=D.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async p=>{w.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(k.success("成功删除该数据"),i.remove(),await this.updateDeleteAllBtnText(o),d.close()):k.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):u.remove(),i}async appendRuleItemElement(e,o){let{$container:l}=this.parseViewElement(e),i=[],c=Array.isArray(o)?o:[o];for(let a=0;a<c.length;a++){let n=c[a],r=await this.createRuleItemElement(n,e);l.appendChild(r),i.push(r);}return await this.updateDeleteAllBtnText(e),i}async updateRuleContaienrElement(e){this.clearContent(e);const{$container:o}=this.parseViewElement(e);let l=await this.option.data();await this.appendRuleItemElement(e,l),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,o,l){let i=await this.createRuleItemElement(e,l);o.after(i),o.remove();}clearContent(e){const{$container:o}=this.parseViewElement(e);m.html(o,"");}setDeleteBtnText(e,o,l=false){const{$deleteBtn:i}=this.parseViewElement(e);l?m.html(i,o):m.text(i,o);}async updateDeleteAllBtnText(e){let o=await this.option.data();this.setDeleteBtnText(e,`清空所有(${o.length})`);}showEditView(e,o,l,i,c){let a=async r=>{if(!r){if(e||await this.option.deleteData(o),typeof c=="function"){let s=await this.option.getData(o);c(s);}}};new Ae({title:e?"编辑":"添加",data:()=>o,dialogCloseCallBack:a,getView:async r=>await this.option.itemControls.edit.getView(r,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async(r,s)=>{r.close(),await a(false);}},close:{callback:async(r,s)=>{r.close(),await a(false);}}},onsubmit:async(r,s)=>{let u=await this.option.itemControls.edit.onsubmit(r,e,s);return u.success?e?(k.success("修改成功"),l&&await this.updateRuleItemElement(u.data,i,l)):l&&await this.appendRuleItemElement(l,u.data):e&&k.error("修改失败"),u},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}}const _e={$key:{STORAGE_KEY:"mt-productListingReminder-rule"},init(){this.registerMenu(),this.runRule();},registerMenu(){Y.add({key:"product-reminder",text:"⚙ 商品上架提醒",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{this.showView();}});},async runRule(){async function t(){let l=await U.get("/keke_integralmall-keke_integralmall.html",{allowInterceptConfig:false,headers:{"User-Agent":x.getRandomAndroidUA()}});if(!l.status){k.error("【积分商城】获取数据失败");return}let i=[];return m.parseHTML(l.data.responseText,true,true).querySelectorAll(".task-list-wrapper li.col-xs-12").forEach(a=>{var n,r;i.push({name:m.text(a.querySelector(".mall-info a > *:first-child"))||m.text(a.querySelector(".mall-info a")),price:m.text(a.querySelector(".mall-info span.discount-price i")),endTime:m.text(a.querySelector(".mall-info #time_hz span.time")),remainingQuantity:parseInt(((r=(n=a.querySelector(".mall-info .mall-count .count-r"))==null?undefined:n.innerText)==null?undefined:r.replace(/仅剩|件/gi,""))||"0")});}),i}if(ne.isPointsMall())return;let e=this.getData();if(!e.length)return;let o=await t();if(o){for(const l of o)for(const i of e)if(i.enable&&l.name.match(new RegExp(i.productName,"i"))&&!isNaN(l.remainingQuantity)&&l.remainingQuantity>0){w.success("成功匹配对应商品",i,l),D.confirm({title:{text:"积分商城提醒",position:"center"},content:{text:`<br />
                            您设置的商品已上架在积分商城中，当前售价 ${l.price}金币，仅剩${l.remainingQuantity}件，是否前往购买？
                            <a style="color: red !important;">(如需关闭提醒，请删除该关键字)</a>
                            <br />`,html:true},btn:{merge:true,position:"space-between",other:{enable:true,type:"danger",text:"删除提醒",callback:()=>{this.deleteData(i)?k.success("删除成功"):k.error("删除失败");}},ok:{text:"前往购买",callback:()=>{window.location.href=`${window.location.origin}/keke_integralmall-keke_integralmall.html`;}}},width:"300px",height:"300px"});return}}},getTemplateData(){return {uuid:x.generateUUID(),enable:true,name:"",productName:""}},showView(){let t=D.config.panelHandleContentUtils();function e(l){return {get(i,c){return l[i]??c},set(i,c){l[i]=c;}}}new Pe({title:"商品上架提醒",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:l=>l.name,updateData:l=>this.updateData(l),deleteData:l=>this.deleteData(l),getData:l=>this.getData().find(a=>a.uuid===l.uuid)??l,itemControls:{enable:{enable:true,getEnable(l){return l.enable},callback:(l,i)=>{l.enable=i,this.updateData(l);}},edit:{enable:true,getView:(l,i)=>{let c=document.createDocumentFragment();i||(l=this.getTemplateData());let a=R("启用","enable",true);Reflect.set(a.props,M,e(l));let n=t.createSectionContainerItem_switch(a),r=ae("规则名称","name","","",undefined,"必填");Reflect.set(r.props,M,e(l));let s=t.createSectionContainerItem_input(r),u=ae("商品名","productName","","",undefined,"可正则，需手动转义");Reflect.set(u.props,M,e(l));let h=t.createSectionContainerItem_input(u);return c.append(n,s,h),c},onsubmit:(l,i,c)=>{let a=l.querySelectorAll(".rule-form-ulist > li"),n=this.getTemplateData();return i&&(n.uuid=c.uuid),a.forEach(r=>{let s=Reflect.get(r,"__formConfig__"),u=Reflect.get(s,"attributes"),h=Reflect.get(r,M),f=Reflect.get(u,$),d=Reflect.get(u,Q),p=h.get(f,d);Reflect.has(n,f)?Reflect.set(n,f,p):w.error(`${f}不在数据中`);}),n.name.trim()===""?(k.error("规则名称不能为空"),{success:false,data:n}):i?{success:this.updateData(n),data:n}:{success:this.addData(n),data:n}}},delete:{enable:true,deleteCallBack:l=>this.deleteData(l)}}}).showView();},getData(){return V(this.$key.STORAGE_KEY,[])},setData(t){W(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(l=>l.uuid==t.uuid)===-1?(e.push(t),W(this.$key.STORAGE_KEY,e),true):false},updateData(t){let e=this.getData(),o=e.findIndex(i=>i.uuid==t.uuid),l=false;return o!==-1&&(l=true,e[o]=t),this.setData(e),l},deleteData(t){let e=this.getData(),o=e.findIndex(i=>i.uuid==t.uuid),l=false;return o!==-1&&(l=true,e.splice(o,1)),this.setData(e),l},clearData(){le(this.$key.STORAGE_KEY);}},We=`.pops-confirm-content {\r
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
`,$e={$data:{cid:""},init(){this.registerMenu();},registerMenu(){Y.add({key:"black-home",text:"⚙ 小黑屋",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{this.showBlackHome();}});},async showBlackHome(){let t=k.loading("正在获取小黑屋名单中..."),e=await this.getBlackListInfo("");if(t.close(),!e)return;if(e.data.length===0){k.error("获取小黑屋名单为空");return}this.$data.cid=e.next_cid;let o=D.confirm({title:{text:"小黑屋名单",position:"center"},content:{text:`
                <div class="blackhome-user-filter">
                    <input placeholder="过滤用户名/操作人员/UID(可正则)">
                </div>
                <div class="blackhome-user-list"></div>
                `,html:true},btn:{ok:{text:"下一页",callback:async()=>{let n=k.loading("正在获取小黑屋名单中...");w.info("下一页的cid: ",this.$data.cid);let r=await this.getBlackListInfo(this.$data.cid);n.close(),r&&(this.$data.cid=r.next_cid,r.data.forEach(s=>{let u=this.createListViewItem(s);l.appendChild(u);}),r.data.length===0?k.error("获取小黑屋名单为空"):k.success(`成功获取 ${r.data.length}条数据`));}},cancel:{text:"关闭"}},width:K.settingBig.width,height:K.settingBig.height,style:We,mask:{enable:true}}),l=o.$shadowRoot.querySelector(".blackhome-user-list"),i=o.$shadowRoot.querySelector(".blackhome-user-filter input");e.data.forEach(n=>{let r=this.createListViewItem(n);l.appendChild(r);}),k.success(`成功获取 ${e.data.length}条数据`);let c=false;m.on(i,["input","propertychange"],x.debounce(()=>{let n=i.value.trim();if(!c){if(c=true,n==""){o.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(r=>{r.removeAttribute("style");}),c=false;return}o.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(r=>{r.getAttribute("data-name").match(new RegExp(n,"ig"))||r.getAttribute("data-uid").trim().match(new RegExp(n,"ig"))||r.getAttribute("data-operator").match(new RegExp(n,"ig"))?r.removeAttribute("style"):r.setAttribute("style","display:none;");}),c=false;}}));let a=await this.getBlackListInfo(this.$data.cid);a&&(this.$data.cid=a.next_cid);},async getBlackListInfo(t=""){let e={mod:"misc",action:"showdarkroom",cid:t,ajaxdata:"json"},o=await U.get(`/forum.php?${x.toSearchParamsStr(e)}`,{headers:{"User-Agent":x.getRandomPCUA()},responseType:"json"});if(!o.status)return;let l=x.toJSON(o.data.responseText),i=l.message.split("|"),c=i[i.length-1],a=x.parseObjectToArray(l.data),n=[],r=[];return a.forEach(s=>{let u=s.dateline.match(/([0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]*[0-9]{1,2}:[0-9]{1,2})/g);if(u==null){let h=parseInt((Date.now()/1e3).toString()),f=0,d=s.dateline.match(/([0-9]+|半)[\s\S]*秒前/),p=s.dateline.match(/([0-9]+|半)[\s\S]*分钟前/),g=s.dateline.match(/([0-9]+|半)[\s\S]*小时前/),y=s.dateline.match(/昨天[\s\S]*(\d{2}):(\d{2})/),v=s.dateline.match(/前天[\s\S]*(\d{2}):(\d{2})/),b=s.dateline.match(/([0-9]+|半)[\s\S]*天前/);if(d)d=d[d.length-1],d=d.replace(/半/g,.5),d=parseFloat(d),f=h-d;else if(p)p=p[p.length-1],p=p.replace(/半/g,.5),p=parseFloat(p),f=h-p*60;else if(g)g=g[g.length-1],g=g.replace(/半/g,.5),g=parseFloat(g),f=h-g*60*60;else if(y){let C=y[1],I=y[2];f=h-86400-parseInt(C)*3600-parseInt(I)*60;}else if(v){let C=v[1],I=v[2];f=h-86400*2-parseInt(C)*3600-parseInt(I)*60;}else b&&(b=b[b.length-1],b=b.replace(/半/g,.5),b=parseFloat(b),f=h-b*60*60*24);s.time=parseInt(f.toString())*1e3,n=n.concat(s);return}else u=u[0];s.time=x.formatToTimeStamp(u),n=n.concat(s);}),x.sortListByProperty(n,"time"),x.sortListByProperty(r,"time",false),n=n.concat(r),{next_cid:c,data:n}},createListViewItem(t){let e=m.createElement("div",{className:"blackhome-user-item",innerHTML:`
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
                `},{"data-name":t.username,"data-uid":t.uid,"data-operator":t.operator,"data-operator-uid":t.operatorid});return m.on(e,"click",".blackhome-user img",function(){window.open(`home.php?mod=space&uid=${t.uid}&do=profile`,"_blank");}),m.on(e,"click",".blackhome-operator-user img",function(){window.open(`home.php?mod=space&uid=${t.operatorid}&do=profile`,"_blank");}),e}},Qe=`.pops-alert-content {\r
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
`,je={$data:{},init(){this.registerMenu();},registerMenu(){Y.add({key:"online-user",text:"⚙ 在线用户",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{this.showOnlineUser();}});},async showOnlineUser(){let t=k.loading("正在获取在线用户名单中..."),e=await this.getOnlineUserListInfo();if(t.close(),!e)return;let o=D.alert({title:{text:"在线用户",position:"center"},content:{text:`
                <div class="online-user-info">${e.totalOnline} 人在线 - ${e.onlineUser} 会员${e.invisibleUser==0?"":`(${e.invisibleUser}隐身)`} - ${e.noRegisterUser} 位游客</div>
                <div class="online-user-filter">
                    <input placeholder="过滤用户名/身份/UID(可正则)"></div>
                <div class="online-user-list"></div>
                `,html:true},btn:{ok:{text:"关闭",type:"default"}},width:K.settingBig.width,height:K.settingBig.height,style:Qe,mask:{enable:true}}),l=o.$shadowRoot.querySelector(".online-user-list"),i=o.$shadowRoot.querySelector(".online-user-filter input");e.data.forEach(a=>{let n=this.createListViewItem(a);l.appendChild(n);}),k.success(`成功获取 ${e.data.length}条数据`);let c=false;J.on(i,["propertychange","input"],x.debounce(()=>{let a=i.value.trim();if(!c){if(c=true,a==""){o.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(n=>{n.removeAttribute("style");}),c=false;return}o.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(n=>{n.getAttribute("data-name").match(new RegExp(a,"ig"))||n.getAttribute("data-sf").match(new RegExp(a,"ig"))||n.getAttribute("data-uid").match(new RegExp(a,"ig"))?n.removeAttribute("style"):n.setAttribute("style","display:none;");}),c=false;}}));},async getOnlineUserListInfo(){let t={showoldetails:"yes"},e=await U.get(`/forum.php?${x.toSearchParamsStr(t)}`,{headers:{"User-Agent":x.getRandomPCUA()}});if(!e.status)return;let o=x.parseFromString(e.data.responseText,"text/html"),l={data:[],totalOnline:0,onlineUser:0,noRegisterUser:0,invisibleUser:0};o.querySelectorAll("#onlinelist ul li").forEach(a=>{let n=a.querySelector("a").getAttribute("href").match("uid-(.+?).html")[1],r=B.getAvatar(n,"middle"),s=a.querySelector("a").innerText,u="",h=a.querySelector("a").getAttribute("href"),f=a.querySelector("img").src;f.indexOf("online_member")!=-1?u="会员":f.indexOf("online_moderator")!=-1?u="版主":f.indexOf("online_supermod")!=-1?u="超级版主":f.indexOf("online_admin")!=-1?u="管理员":u="未知身份",l.data.push({uid:n,avatar:r,name:s,sf:u,space:h});});let c=o.querySelector("#online div.bm_h span.xs1").textContent;return l.totalOnline=x.parseInt(c.match(/([0-9]*)\s*人在线/i),0),l.onlineUser=x.parseInt(c.match(/([0-9]*)\s*会员/i),0),l.noRegisterUser=x.parseInt(c.match(/([0-9]*)\s*位游客/i),0),l.invisibleUser=x.parseInt(c.match(/([0-9]*)\s*隐身/i),0),l},createListViewItem(t){let e=J.createElement("div",{className:"online-item",innerHTML:`
                <div class="online-user">
                    <img data-avatar src="${t.avatar}" loading="lazy" class="online-user-avatar">
                    <div class="online-user-info">
                        <p data-name>${t.name}</p>
                        <span data-sf="${t.sf}">${t.sf}</span>
                        <span data-uid>UID: ${t.uid}</span>
                    </div>
                </div>
            `},{"data-name":t.name,"data-uid":t.uid,"data-sf":t.sf});return J.on(e,"click",".online-user-avatar",o=>{x.preventEvent(o),window.open(`home.php?mod=space&uid=${t.uid}&do=profile`,"_blank");}),e}},Ge={$flag:{showUserUID_initCSS:false},init(){A.onceExec("mt-MTCommentFilter",()=>{ze.init();}),ne.isPost()?(w.info("Router: 帖子"),ve.init()):ne.isGuide()?(w.info("Router: 导读"),He.init()):w.error("Router: 未适配的链接 ==> "+window.location.href),m.ready(()=>{A.onceExec("mt-MTProductListingReminder",()=>{_e.init();}),A.onceExec("mt-blackHome",()=>{$e.init();}),A.onceExec("mt-onlineUser",()=>{je.init();}),A.execMenuOnce("mt-link-text-to-hyperlink",()=>{Fe();}),A.execMenuOnce("mt-addLatestPostBtn",()=>{this.addLatestPostBtn();}),A.execMenu("mt-auto-sign",()=>{j.init();});});},addLatestPostBtn(){w.info("新增【最新发表】"),m.append("#comiis_nv .wp.comiis_nvbox.cl ul",`
			<li id="latest_publication">
				<a href="/forum.php?mod=guide&view=newthread" hidefocus="true" title="最新发表">最新发表</a>
			</li>
		`),window.location.href.includes("/forum.php?mod=guide&view=newthread")&&(m.removeClass("#mn_forum_10","a"),m.css("#latest_publication a","background",'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAADICAYAAAAk7PuyAAAAAXNSR0IArs4c6QAAAGFJREFUWEft1zESgCAQQ9HsVfb+d5RRlLHRVotHS5f5+YHKyymXiRAihKMISBDCNOInJHT39iTkcpkIYUcTCUKYkkKCEJBwTaY6cML5eiNGYiRGYrz9pqyDdbAOqxC/q8MApobR97qxnMwAAAAASUVORK5CYII=") repeat-x 50% -50px'));}};A.init();Ge.init();});Ke();

})(Qmsg, DOMUtils, Utils, pops, hljs, Viewer);