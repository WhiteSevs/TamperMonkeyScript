// ==UserScript==
// @name         【移动端】MT论坛优化
// @namespace    https://greasyfork.org/zh-CN/scripts/401359
// @version      2025.2.5
// @author       WhiteSevs
// @description  MT论坛效果增强，如自动签到、自动展开帖子、滚动加载评论、显示UID、自定义屏蔽、手机版小黑屋、编辑器优化、在线用户查看、便捷式图床、自定义用户标签、积分商城商品上架提醒等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAADptJREFUeF7tnQtwVNUZx/9nN5CQgCG8QoAdE3lFeWQDGAK+ikKCQGtHBHlJQeVRrTICJQUrgggkUhiRdIRgyBahpThWEHAob6mCVCApCIUQGiDKK0ACEUMMe2/n3E1Ckt279557d+8mN+fMMJlhv/Od7/vO737ncc+eJdBRLuRfSAbwa0JIogjRrkNVvapKQA6JEL8iVrLSZrPl1SvjaxlLtBp/Pv/8LEJImtb6ZqlHCHnddr9tRX31RxMA+fn5v7AS69766rSv7XaKzgExMTH7fK3XCH3MAJw6dapZaHDoYRB0McLAetGGiFxbtK0HIeTnemFvNSOZAfDV03/rjgWzt7RFeIgTc5IK0TRYMDR2RaVWLNrRGoJAMOPJa2gXXq6rfafojImJiTmnS0kAKjMDcOHchRkA/qTX1vzrjfHHbZGSmqcfKsG4PsV6VTLV/+DLljh0PlSq89rj15EY/RNT/drCFlj6d4jucFCXkgBUZgbgfP75eYSQt/XaKorA/O1tcKYwGFaLiN8+cgP9YvR1glqbjn7fBEv3tJLEI0KdWDjsMsJD9GWg+joPCBgANPh3BYJpn0ahuNSKmJY/45VHbyim4uu3rbh2OwiVf0MbCWgZ5kSrsLvS39DG3jvy8q0g/GFLW5Q7Ce4LEfD6E9fwYGSZWnZk5TgAGkN4pKAJlu11PY2Pd7yNKY/cqKHp++JGOH4xBMcq/ik1Q8fy3rZSdI8qQ2xkGYIsYo0qqbtaS/poGdunGEMeKlFSqepzDoCqMHkWchyKwM7TTaUPX3i4GIMfLMGXeWHYk9sUedcaa9Yc3sSJPrZSJMX+iA7Ny7ExOxybj98n6esf8xNefey6Zt21K3IAdIZy5qYoXLoVhLDGAlqFOXG+qJFOjfeqBweJUprP+cH15EfddxcLhl5Bk0b6xv3qBnIAdHYXTcs0PRtRUgYWome7Oz5tigOgI5wFxY2Qvr8l6HhvRHms421MrTXX0NsuB0BjBOlanK7JjS50srjkmcs+a5YDoCGUW080w9+ONNdQ0zdV6HwjY9QPPlFGAYg+E1MMCy6RgbjiE6UGKAnYPgCd5WccaGGAi96bSLi/FNOeuKbbjjYFY38MLv3atZQRcQwWfI5ywUGG4Kxu5X5UEBAAvrsUgrRdrSHUXKL70U3vqod1K8Ho3vq2otsUjEJw6Tc1GxJRAoIsEMFBBiE7YA56aTggANB3APRdQF0qLyUW4ckuP2o2ySMANbU5AMFBkvCl5kb8UNFwAOjmTuY3EbKuPB4LJHYCmoYAl4uBHceBPI0jarf2wFPdAVtL4FwhsOUocEFm74duRb87VGNDAFQAUOGz+BlESxZJdm7xQ38yqzQcAG9P//AEYBo9ZFatOAXgpdXA/66y+dbDBvx5Qs065U5gdDpw9ZZnXXqygHoAKtsWd8NiySIDnevZPPOttKEAKD39ayYDnVxviGuUj78CVjOeP0r5JTDUwynFVXuA9V97DqKeLMAOQKUN5FuIogPNhCzSH6W+7V5lbYYC8PYXkV739jdPByLC3I3+IgdIZUyYaaOAfp3ddX36LbB8u3xgXnn0Oh55gP21tHYAKmwhOA0BDliFLCOXkYYBQHf5Uj5v6xXJzElAZw8ia/8FfMR44k4uA2TsAdbJZABqHO18CgFr0Q3AvQYvAXBIS8ihyGW1g1XeMAB2nGqKv/xbfvJHDX+mNzBjSE0X7pQDL38EXGBcqneMdM0BQqstNgpLgEkfATe8TPbp0bRVz7NvDvkQgMoA3JZAcK0cDrN2rFp5wwB4959t8N8rwYp20RVA344Vq4CbwM7j8jN3JWVRzYHBcS4pQQA2HQFuqsjuWl4W+QGA6u59DNHiIMl39yj5zPq5IQDQ0zcT1ndgtS1g8r/qfgvP97rJ1L6fAXDZQsTNECgIzk1MxnkRNgQAegxrxqYoX9nsdz1aDosYAkCV5+I+EEsWGeRcqzcYhgBAt34X7zTmXb/egND6XduUYe5gto0HYwGo8FLEUViQhSDBQQZA0zamIQDUlRc/auGgh0s/GH5RrbgkFxAA7lmYBxEOECGLJIHJcEMAUDsBZIq4n4XXjy9gaiHAAFTaStOWA6KQRZJxSo0DHgHo2bNnDCHEwzYKMHny5Bc6tO8wTo3ySpl//CccuYX+efkjlpcAZUWwtn4YljAbYPHNqaJ6CkBlyOl5NwqCgyTjkLe+qgGA3W5/GcBqls6tU7LWEDR+YCSCe7yh26x6DsA9/0X8FZCWkDs9BaUKALvdvhXAUN2RqwMKLOGdEfbkBoBYNFtjGgDurRw+hyj+jiSjxtgmAWC326cBeF9ztOpgRWubRIT2/0DzkGA+ACo6ySJ0IwNxsrLLKgGoI2dzfEtSUNQTaJKQClhd3wdgKaYFADhBkoTuVQDExcUlEEK8ThRYAlfXZIPaPoqQhFSQIA+vGb0Ya2IA6JnF+SRZmEfdJ3FxcS8SQjLrWsf50p6gyH4uCBq5vhamppgaAIK1ZJDwmwYDAHXU2joBTRLSQILVHUM3NQAQ95EkcUCDAkCCoFVvFwQhyl9EMTUADW0IqJ7yrS3tLgiatPE6EpgaAJBnSZLzswaXASp73NqiB0IS0mAJlX9DaWIAvkMjIZ4MwN0GC4A0HEQ85IIgzPM5BdMCIOL3JFmouuOpQawC5HK9pdkDCI5LgSWsvZvI+8/So3nqS8tLr6PxnTr55R/JifYtpBvsvq94+qsO2DVoANR3rzkku9t+OvldQeirOTk5VUdsOQDm6FsmLwgh6dnZ2a816DkAU8RMKEwIGZ2dnb2BZwATdq5Klw7l5OQkUgDmEkLmq6zExUwUAUEQYikAmYSQF03kF3dFZQQIIWMoAGsIIRNV1uFiJoqAKIovcABM1KGsrnAAWCNmMnkOgMk6lNUdDgBrxEwmzwEwWYeyusMBYI2YyeQ5ACbrUFZ3OACsETOZvF8AWL3a+zfLrl69ijfffFNzKMeMGYMBA6TzjLJl0qRJmvV7q6jkm18araV01apVOHzYNzfG+AWA7GzlQxFvvfUWtm6l30RjK507d8bGjRsVK8XHxyvKaBFQ45sWvSx1KNz1HoCSkhI899xzoNmApWRmZqJXr16KVTgAiiGSBAKWAWjjO3bsQEpKijpLAUydOhVTpkxRJc8BUBWmwAJATZw3bx42b96saG3fvn2xcuVKRblKAQ6AulAFNANQE0tLS0EndefOyf/iarNmzZCVlYWOHTuq8woAB0BdqAIOADVz9+7dmDlzpqzFdJgYNWqUOo8qpIwGQGlS1qdPHzf7tdShSkwxCawdjbS0NGzYsMEtSEOGDMHChQuZOp8KGw0AHZ7o8sxToUtHOQDklqt0rkPnPJ5KvQWgrKwMwcGebwotLy/HhAkTcPJk1b0FiI6ORkZGBlq39ny9nDd9HAB1z4yhQwB9SuSopubu378f06bRi0pcJTU1FcnJtX48oJpf3vT5C4Bt27ahXbt2btGdP38+Nm3yfHmnlgwwduxY2WFx9OjROHVK1QVgihQYDkCLFi0wcuRIWcNWrFiBNWvWYPz48XjjDfmLnuhm0I0bN2SB8hcAnuYjd+7cwcSJE2U7RQsAiYmJ+PDDD93idPHiRQwfPhy0TV8UwwGg4+Qnn3yCTp06ebRfEARprZ+eni47XOTl5WHEiBGSnFxG8RcAbdu2xZIlS9C9e9UNK9LyVG78p05qAYDWq+0fXSktX74c+/Yx3pvvhZSAANCtWzesW7dO1iw6O/Y0aaqsMG7cOJw4cSIgAFAb6DyGDk0RERE4c+YMDhw44PVh1AoAVdq/f3/Q7e+ioiJpiCwu1vfLZrUNDQgA1AjaiTNmzGDOYkuXLq2CJxAZgNlgHRlAS1usdQIGADV02bJlim/1qju0d+9eTJ8+veq/OACs3e0uH1AAbDYb1q5di+bNle/soamPTgwLCu7dccgBqOcAUPOHDRuGBQsWKHri6fUxB0AxbIoCAc0AldbNmTNHmtXLFbpqWLRokdvHHADF/lUUqBMAhIeHSzt+Xbp0cTM4NzeX3k6Omzfdf76FA6DYv4oCdQIAaqWWpRIHQLF/FQU4AIoh0i+gBW79rarTUGcAoO8A6Mug2sXhcEi7X54KzwDqOtmbVJ0BgBrp6cClty1dDoDJAKDu0N3B2NhY6cUK3fXzVjgAJgSAxSUOAEu0PMvWqSGA1R0OAGvE3OU5APpjqKiBrwIqQqT03lwxkrUEeAZgjRjPAPojpkEDzwA8AzCfCtbAmaYqfA6gKWxslXgG4BmAZwDKAJ8E1swc9Oyjv+4xUJuj+BCgNlI65PgQwIcAPgTwIcDzl0P5EKAjtfKNIB3Bq6jK5wD6Y6iogc8B+ByAzwH4HIDPAfg+QK3Bgu8DKI6e3gX4JFBnAI2+Jo7vBPKdQK/fo2flmWcA1ojx8wD6I6ZBA18G8mUgXwbyZSBfBvJlIF8Ger9MiXV45ZNA1ogZNAmkN3527drVrbXZs2dj+/bt+q2u0DB48GAsXrzYTd/p06eZr5b1mVEeFMlddUvjRG9IDWTxy8sgT09mYWEhkpKSfO4rvXK+9k2ivt5v0Gs0vfHM0y+N+PLKV602+gUAasygQYOka9wiIyNx8OBBzJo1S6uNivXee+899OvXD1euXJH2GXbu3KlYx2gBetP53Llz0bNnTxw7dgzvvPMOzp49a7QZbu35DYCAe8YNUBUBDoCqMJlXiANg3r5V5RkHQFWYzCvEATBv36ryjAOgKkzmFeIAmLdvVXnGAVAVJvMKcQDM27eqPOMAqAqTeYU4AObtW1WecQBUhcm8QhIAdrs9HcCr5nWTeyYXAULICBIfH/+UKIq7eJgaXgQIIdGEum2324sAKP92S8OLkZk93pWTkzNIAiAuLm4+IWSumb3lvtWMgMViefro0aPbJQBoiY+P3y6KovxvtfIImiYChJDZ2dnZqdShKgAqMsEAQgg9aNcbQJBpPOaO0AicB/B3q9WaceTIkarjSP8HC+OZoHXD4j8AAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://bbs.binmt.cc/*
// @exclude      /^http(s|)://bbs.binmt.cc/uc_server.*$/
// @require      https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/452322/1470429/js-watermark.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.5.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.4.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.9.7/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.js
// @require      https://fastly.jsdelivr.net/npm/@highlightjs/cdn-assets@11.11.1/highlight.min.js
// @resource     HljsCSS    https://fastly.jsdelivr.net/npm/highlight.js@11.11.1/styles/github-dark.min.css
// @resource     ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.css
// @connect      *
// @connect      *
// @connect      helloimg.com
// @connect      z4a.net
// @connect      kggzs.cn
// @connect      woozooo.com
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

(function (x, Z, st, bt, Rt, ut) {
	'use strict';

	var Gt=Object.defineProperty;var Wt=(t,e,n)=>e in t?Gt(t,e,{enumerable:true,configurable:true,writable:true,value:n}):t[e]=n;var Yt=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var nt=(t,e,n)=>Wt(t,typeof e!="symbol"?e+"":e,n);var Re=Yt((Ot,wt)=>{var at=typeof GM_deleteValue<"u"?GM_deleteValue:undefined,$t=typeof GM_getResourceText<"u"?GM_getResourceText:undefined,Y=typeof GM_getValue<"u"?GM_getValue:undefined,ht=typeof GM_info<"u"?GM_info:undefined,Kt=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:undefined,W=typeof GM_setValue<"u"?GM_setValue:undefined,Qt=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:undefined,Jt=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:undefined,y=typeof unsafeWindow<"u"?unsafeWindow:undefined,Zt=window;const Xt={$data:{get enable(){return $.getValue("httpx-use-cookie-enable")},get useDocumentCookie(){return $.getValue("httpx-use-document-cookie")},cookieRule:[{key:"httpx-cookie-bbs.binmt.cc",hostname:/bbs.binmt.cc/g}]},fixCookieSplit(t){return g.isNotNull(t)&&!t.trim().endsWith(";")&&(t+=";"),t},concatCookie(t,e){return g.isNull(t)?e:(t=t.trim(),e=e.trim(),t=this.fixCookieSplit(t),e.startsWith(";")&&(e=e.substring(1)),t.concat(e))},handle(t){if(t.fetch||!this.$data.enable)return;let e="",n=t.url;n.startsWith("//")&&(n=window.location.protocol+n);let i=new URL(n);this.$data.useDocumentCookie&&i.hostname.endsWith(window.location.hostname.split(".").slice(-2).join("."))&&(e=this.concatCookie(e,document.cookie.trim()));for(let s=0;s<this.$data.cookieRule.length;s++){let l=this.$data.cookieRule[s];if(i.hostname.match(l.hostname)){let o=$.getValue(l.key);if(g.isNull(o))break;e=this.concatCookie(e,o);}}g.isNotNull(e)&&(t.headers&&t.headers.Cookie?t.headers.Cookie=this.concatCookie(t.headers.Cookie,e):t.headers.Cookie=e,b.info(["Httpx => 设置cookie:",t])),t.headers&&t.headers.Cookie!=null&&g.isNull(t.headers.Cookie)&&delete t.headers.Cookie;}},At={Viewer:{keyName:"ViewerCSS",url:"https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"},Hljs:{keyName:"HljsCSS",url:"https://fastly.jsdelivr.net/npm/highlight.js@latest/styles/github-dark.min.css"}};(function(t,e){typeof Ot=="object"&&typeof wt<"u"?wt.exports=e():(t=typeof globalThis<"u"?globalThis:t||self,t.Watermark=e(t.Watermark));})(typeof window<"u"?window:undefined,function(t){let e=function(){};CanvasRenderingContext2D.prototype.letterSpacingText=function(o,a,c,m){var d=this,u=d.canvas;if(!m&&u&&(m=parseFloat(window.getComputedStyle(u).letterSpacing)),!m)return this.fillText(o,a,c);var f=o.split(""),p=d.textAlign||"left",h=d.measureText(o).width,_=h+m*(f.length-1);p=="center"?a=a-_/2:p=="right"&&(a=a-_),d.textAlign="left",f.forEach(function(k){var q=d.measureText(k).width;d.fillText(k,a,c),a=a+q+m;}),d.textAlign=p;},CanvasRenderingContext2D.prototype.wrapText=function(o,a,c,m,d,u){if(!(typeof o!="string"||typeof a!="number"||typeof c!="number")){var f=this,p=f.canvas;typeof m>"u"&&(m=p&&p.width||300),typeof d>"u"&&(d=p&&parseInt(window.getComputedStyle(p).lineHeight)||parseInt(window.getComputedStyle(document.body).lineHeight));for(var h=o.split(""),_="",k=0;k<h.length;k++){var q=_+h[k],S=f.measureText(q),R=S.width;R>m&&k>0?(u?f.strokeText(_,a,c,p.width):f.fillText(_,a,c),_=h[k],c+=d):_=q;}u?f.strokeText(_,a,c,p.width):f.fillText(_,a,c);}},CanvasRenderingContext2D.prototype.fillTextVertical=function(o,a,c){var m=this;m.canvas;var d=o.split(""),u=d.map(function(h){return m.measureText(h).width}),f=m.textAlign,p=m.textBaseline;f=="left"?a=a+Math.max.apply(null,u)/2:f=="right"&&(a=a-Math.max.apply(null,u)/2),p=="bottom"||p=="alphabetic"||p=="ideographic"?c=c-u[0]/2:(p=="top"||p=="hanging")&&(c=c+u[0]/2),m.textAlign="center",m.textBaseline="middle",d.forEach(function(h,_){var q=u[_],k=h.charCodeAt(0);k<=256?(m.translate(a,c),m.rotate(90*Math.PI/180),m.translate(-a,-c)):_>0&&o.charCodeAt(_-1)<256&&(c=c+u[_-1]/2),m.fillText(h,a,c),m.setTransform(1,0,0,1,0,0);var q=u[_];c=c+q;}),m.textAlign=f,m.textBaseline=p;};function n(o){let a=new FileReader;return new Promise(c=>{a.onloadend=async function(m){c(m);},a.readAsDataURL(o);})}function i(o){let a=new Image;return new Promise(c=>{a.onload=()=>{c(a);},a.src=o;})}function s(o,a,c){let m=false;return Array.from(o).forEach(d=>{if(d.x==a&&d.y==c){m=true;return}}),m}function l(o){return o instanceof Array?o[Math.floor(Math.random()*o.length)]:o}return e.prototype.setFile=function(o){let a=this;return new Promise(async c=>{try{var m=await n(o);await a.setImage(m.target.result),c(!0);}catch{c(false);}})},e.prototype.setImage=function(o){this.dataUrl=o;let a=this;return new Promise(async c=>{var m=await i(o);a.sizes={width:m.width,height:m.height};var d=document.createElement("canvas");d.width=a.sizes.width,d.height=a.sizes.height;var u=d.getContext("2d");u.drawImage(m,0,0),m=null,a.canvas=d,c(true);})},e.prototype.hasImage=function(){return !!this.dataUrl},e.prototype.getSize=function(){return this.sizes},e.prototype.clearMark=function(){let o=this;if(typeof o.canvas>"u")return;function a(){var c=o.canvas.getContext("2d");c.clearRect(0,0,o.canvas.width,o.canvas.height);var m=o.canvas.width,d=o.canvas.height;o.canvas.width=m,o.canvas.height=d,c.beginPath();var u=new Image;u.src=o.dataUrl,c.drawImage(u,0,0),u=null;}a();},e.prototype.addText=function(o){var a={text:["Call By waterMark.addText"],fontSize:"6vw",fontFamily:"Microsoft Yahei",color:"#000000",textAlign:"center",stroke:false,globalAlpha:.7,rotateAngle:50,maxWidth:100,xMoveDistance:30,yMoveDistance:30};for(let z in a)typeof o[z]<"u"&&(a[z]=o[z]);a.maxWidth=parseInt(a.maxWidth)>0?a.maxWidth:1,a.xMoveDistance=parseInt(a.xMoveDistance)>0?a.xMoveDistance:1,a.yMoveDistance=parseInt(a.yMoveDistance)>0?a.yMoveDistance:1;var c=this.canvas.getContext("2d"),m=a.fontSize;m=m.toString(),~m.indexOf("vw")&&(m=(this.sizes.width/100*parseInt(m)).toFixed(0)),m=parseInt(m),c.font=m+"px "+a.fontFamily,c.fillStyle=a.color,c.textAlign=a.textAlign,c.globalAlpha=a.globalAlpha;let d=this.sizes.width,u=this.sizes.height,f=a.rotateAngle*Math.PI/180,p=a.xMoveDistance,h=a.yMoveDistance,_=a.maxWidth,k=m,q=[];for(var S=d/2;S<d;S+=p){for(var R=u/2;R<u;R+=h)s(q,S,R)||(q=q.concat({x:S,y:R}),c.setTransform(1,0,0,1,0,0),c.translate(S,R),c.rotate(f),c.wrapText(l(a.text),0,0,_,k,a.stroke));for(var I=u/2;I>0;I-=h)s(q,S,I)||(q=q.concat({x:S,y:I}),c.setTransform(1,0,0,1,0,0),c.translate(S,I),c.rotate(f),c.wrapText(l(a.text),0,0,_,k,a.stroke));}for(var S=d/2;S>0;S-=p){for(var R=u/2;R<u;R+=h)s(q,S,R)||(q=q.concat({x:S,y:R}),c.setTransform(1,0,0,1,0,0),c.translate(S,R),c.rotate(f),c.wrapText(l(a.text),0,0,_,k,a.stroke));for(var I=u/2;I>0;I-=h)s(q,S,I)||(q=q.concat({x:S,y:I}),c.setTransform(1,0,0,1,0,0),c.translate(S,I),c.rotate(f),c.wrapText(l(a.text),0,0,_,k,a.stroke));}},e.prototype.addPixelText=function(o){var a={text:"像素文字水印",big:{fontSize:150,fontFamily:"微软雅黑",textAlign:"center",rotateAngle:0,stroke:false},small:{fontSize:10,fontFamily:"微软雅黑",color:"#000",textAlign:"center",globalAlpha:.7}};for(let S in a)typeof o[S]<"u"&&(a[S]=o[S]);var c=this.canvas.getContext("2d"),m=document.createElement("canvas"),d=m.getContext("2d");m.width=this.sizes.width,m.height=this.sizes.height,d.font=a.big.fontSize+"px "+a.big.fontFamily,d.textAlign=a.big.textAlign,d.textBaseline="middle",d.translate(m.width/2,m.height/2),d.rotate(a.big.rotateAngle*Math.PI/180),d.translate(-m.width/2,-m.height/2),a.big.stroke?d.strokeText(a.text,m.width/2,m.height/2,m.width):d.fillText(a.text,m.width/2,m.height/2);for(var u=a.text.split(""),f=d.getImageData(0,0,m.width,m.height),p=[],h=0;h<m.height;h+=a.small.fontSize)for(var _=0;_<m.width;_+=a.small.fontSize){var k=_+h*m.width,q=f.data[k*4+3];q>128&&p.push({text:l(u),x:_,y:h});}c.font=a.small.fontSize+"px "+a.small.fontFamily,c.fillStyle=a.small.color,c.textAlign=a.small.textAlign,c.textBaseline="middle",c.globalAlpha=a.small.globalAlpha,p.forEach(S=>{c.fillText(S.text,S.x,S.y);});},e.prototype.addImage=function(o){if(o.imageArray==null)return alert("参数缺少imageArray"),false;if(o.imageArray.length===0)return alert("参数imageArray不能为空"),false;let a={imageArray:[],width:50,height:50,globalAlpha:.5,rotateAngle:0,xMoveDistance:70,yMoveDistance:70};for(let E in a)typeof o[E]<"u"&&(a[E]=o[E]);a.width=parseInt(a.width)>0?a.width:1,a.height=parseInt(a.height)>0?a.height:1,a.xMoveDistance=parseInt(a.xMoveDistance)>0?a.xMoveDistance:1,a.yMoveDistance=parseInt(a.yMoveDistance)>0?a.yMoveDistance:1;let c=this.canvas.getContext("2d"),m=[],d=parseInt(Math.sqrt(a.width*a.width+a.height*a.height)),u=this.sizes.width,f=this.sizes.height,p=a.rotateAngle*Math.PI/180,h=a.xMoveDistance,_=a.yMoveDistance,k=u/2-d/2,q=f/2-d/2,S=(d-a.width)/2,R=(d-a.height)/2;Array.from(a.imageArray).forEach(E=>{var A=document.createElement("canvas"),O=A.getContext("2d");A.width=d,A.height=d,O.globalAlpha=a.globalAlpha,O.translate(d/2,d/2),O.rotate(p),O.translate(-d/2,-d/2),O.drawImage(E,S,R,a.width,a.height),m=m.concat(A);});function I(E){return E[Math.floor(Math.random()*E.length)]}c.setTransform(1,0,0,1,0,0);let z=[];for(let E=k;E<u;E+=h){for(let A=q;A<f;A+=_)s(z,E,A)||(z=z.concat({x:E,y:A}),c.drawImage(I(m),E,A));for(let A=q;A>-Math.abs(d);A-=_)s(z,E,A)||(z=z.concat({x:E,y:A}),c.drawImage(I(m),E,A));}for(let E=k;E>-Math.abs(d);E-=h){for(let A=q;A<f;A+=_)s(z,E,A)||(z=z.concat({x:E,y:A}),c.drawImage(I(m),E,A));for(let A=q;A>-Math.abs(d);A-=_)s(z,E,A)||(z=z.concat({x:E,y:A}),c.drawImage(I(m),E,A));}},e.prototype.getPreview=function(){return this.dataUrl},e.prototype.render=function(o){return o=o==="png"?"png":"jpeg",this.canvas.toDataURL("image/"+o)},e.prototype.renderBlob=function(){let o=this;return new Promise(a=>{o.canvas.toBlob(function(c){a(window.URL.createObjectURL(c));});})},e.prototype.noConflict=function(){return window.Watermark&&delete window.Watermark,t&&(window.Watermark=t),e},e});const vt={addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),G(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){let e=typeof $t=="function"?$t(t.keyName):"";typeof e=="string"&&e?G(e):vt.loadStyleLink(t.url);},async loadStyleLink(t){let e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=t,r.ready(()=>{document.head.appendChild(e);});},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(n=>{e.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.match(/^http(s|):\/\//i)||(t.startsWith("/")||(t+="/"),t=window.location.origin+t),t},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;let e=new URL(t);return e.protocol="https:",e.toString()}},te="【移动端】MT论坛优化",g=st.noConflict(),r=Z.noConflict(),B=bt,b=new g.Log(ht,y.console||Zt.console);var Et;const kt=((Et=ht==null?undefined:ht.script)==null?undefined:Et.name)||te,Lt=false;b.config({debug:Lt,logMaxCount:1e3,autoClearConsole:true,tag:true});x.config(Object.defineProperties({html:true,autoClose:true,showClose:false},{position:{get(){return $.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return $.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return $.getValue("qmsg-config-showreverse",true)}},zIndex:{get(){let t=st.getMaxZIndex(),e=bt.config.InstanceUtils.getPopsMaxZIndex().zIndex;return st.getMaxValue(t,e)+100}}}));const ee=new g.GM_Menu({GM_getValue:Y,GM_setValue:W,GM_registerMenuCommand:Kt,GM_unregisterMenuCommand:Qt}),H=new g.Httpx(Jt);H.interceptors.request.use(t=>(Xt.handle(t),t));H.interceptors.response.use(undefined,t=>(b.error("拦截器-请求错误",t),t.type==="onabort"?x.warning("请求取消"):t.type==="onerror"?x.error("请求异常"):t.type==="ontimeout"?x.error("请求超时"):x.error("其它错误"),t));H.config({logDetails:Lt});bt.GlobalConfig.setGlobalConfig({mask:{enable:true,clickEvent:{toClose:false,toHide:false}}});y.Object.defineProperty,y.Function.prototype.apply,y.Function.prototype.call,y.Element.prototype.appendChild,y.setTimeout;const G=g.addStyle.bind(g);vt.setGMResourceCSS(At.Viewer);vt.setGMResourceCSS(At.Hljs);const C=document.querySelector.bind(document),N=document.querySelectorAll.bind(document),rt="GM_Panel",Dt="data-init",et="data-key",it="data-default-value",ie="data-init-more-value",D="data-storage-api",L=function(t,e,n,i,s,l){let o={text:t,type:"switch",description:s,attributes:{},props:{},getValue(){return !!this.props[D].get(e,n)},callback(a,c){let m=!!c;b.success(`${m?"开启":"关闭"} ${t}`),this.props[D].set(e,m);},afterAddToUListCallBack:l};return Reflect.set(o.attributes,et,e),Reflect.set(o.attributes,it,n),Reflect.set(o.props,D,{get(a,c){return $.getValue(a,c)},set(a,c){$.setValue(a,c);}}),o},pt=function(t,e,n,i,s,l="",o){let a={text:t,type:"textarea",attributes:{},props:{},description:i,placeholder:l,disabled:o,getValue(){return this.props[D].get(e,n)},callback(c,m){this.props[D].set(e,m);}};return Reflect.set(a.attributes,et,e),Reflect.set(a.attributes,it,n),Reflect.set(a.props,D,{get(c,m){return $.getValue(c,m)},set(c,m){$.setValue(c,m);}}),a},St=function(t,e,n,i,s,l){let o=[];typeof i=="function"?o=i():o=i;let a={text:t,type:"select",description:l,attributes:{},props:{},getValue(){return this.props[D].get(e,n)},callback(c,m,d){let u=m;b.info(`选择：${d}`),this.props[D].set(e,u),typeof s=="function"&&s(c,u,d);},data:o};return Reflect.set(a.attributes,et,e),Reflect.set(a.attributes,it,n),Reflect.set(a.props,D,{get(c,m){return $.getValue(c,m)},set(c,m){$.setValue(c,m);}}),a},ft=function(t,e,n,i,s,l,o,a,c){return {text:t,type:"button",description:e,buttonIcon:i,buttonIsRightIcon:s,buttonIconIsLoading:l,buttonType:o,buttonText:n,callback(d){typeof a=="function"&&a(d);},afterAddToUListCallBack:c}},Tt=function(t,e,n,i){let s={type:"own",attributes:{},props:n,getLiElementCallBack:t,afterAddToUListCallBack:i};return Reflect.set(s.attributes,Dt,()=>false),s},X={formhash:/formhash=([0-9a-zA-Z]+)/,uid:/uid(=|-)(\d+)/,fontSpecial:/<font.*?>|<\/font>|<strike>|<strong>|<i>|<u>|align=".*?"|<br>[\s]*<br>[\s]*<br>/g,ptid:/&ptid=([\d]+)/i,pid:/&pid=([\d]+)/i,tid:/&tid=([\d]+)/i},F={getAvatar:(t,e="middle")=>`/uc_server/avatar.php?uid=${t}&size=${e}&ts=1`,getCurrentUID(){let t=y.discuz_uid;if(typeof t=="string")return t;let e=document.querySelector('.sidenv_exit a[href*="uid="]');if(e){let n=e.href.match(/uid=([0-9]+)/);if(n)return n[n.length-1]}},getFormHash(){let t=Array.from((top||globalThis).document.querySelectorAll("input[name=formhash]"));for(let n=0;n<t.length;n++){let s=t[n].value;if(s)return s}let e=Array.from((top||globalThis).document.querySelectorAll('a[href*="formhash="]'));for(let n=0;n<e.length;n++){let s=e[n].href.match(X.formhash);if(s){let l=s[s.length-1];if(l)return l}}},envIsMobile(){return (y.STYLEID||window.STYLEID||typeof STYLEID<"u"&&STYLEID)==="3"},getThreadId:t=>{let e=t.match(/thread-([\d]+)-|&tid=([\d]+)/i);if(e){let n=e.filter(Boolean);return n[n.length-1]}},getForumId(t){let e=t.match(/&fid=([\d]+)/i);if(e)return e[e.length-1]},getPostId(t){let e=t.match(/&pid=([\d]+)/i);if(e)return e[e.length-1]},getRepquote(t){let e=t.match(/&repquote=([\d]+)/i);if(e)return e[e.length-1]}},lt={$upload:{small:false,middle:false,big:false},$data:{avatarInfo:{maxSize:2097152,small:{width:48,height:48},middle:{width:120,height:120},big:{width:200,height:250}}},$el:{$smallUpload:null,$middleUpload:null,$bigUpload:null,$smallStatus:null,$middleStatus:null,$bigStatus:null},$avatar:{get small(){return lt.$el.$smallUpload.files[0]},get middle(){return lt.$el.$middleUpload.files[0]},get big(){return lt.$el.$bigUpload.files[0]}},showView(){const t=this;let e=B.confirm({title:{text:"修改头像",position:"center"},content:{text:`
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
                `,html:true},btn:{ok:{text:"上传",callback:async()=>{if(!t.$upload.small){x.error("请上传小头像");return}if(!t.$upload.middle){x.error("请上传中头像");return}if(!t.$upload.big){x.error("请上传大头像");return}let n=x.loading("正在处理数据中...");try{let i=await this.getUploadUrl();if(i==null)return;let s=F.getFormHash();if(s==null){x.error("获取formhash失败");return}let l={big:{base64:await g.parseFileToBase64(this.$avatar.big)},middle:{base64:await g.parseFileToBase64(this.$avatar.middle)},small:{base64:await g.parseFileToBase64(this.$avatar.small)}};Object.keys(l).forEach(c=>{let m=l[c];m.base64=m.base64.substring(m.base64.indexOf(",")+1);});let o=new FormData;o.append("Filedata",this.$avatar.big||""),o.append("confirm","确定"),o.append("avatar1",l.big.base64),o.append("avatar2",l.middle.base64),o.append("avatar3",l.small.base64),o.append("formhash",s),b.info("头像的base64字符串",l);let a=await H.post(i,{data:o,processData:!1,headers:{Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9","User-Agent":g.getRandomPCUA(),Host:window.location.hostname,Origin:window.location.origin,Referer:`${window.location.origin}/home.php?mod=spacecp&ac=avatar`}});if(!a.status)return;a.data.responseText.indexOf("window.parent.postMessage('success','*')")!=-1?(e.close(),x.success("上传成功")):(b.error("上传失败",a),x.error(a.data.responseText,{timeout:6e3,isHTML:!1,html:!1}));}catch(i){b.error(i);}finally{n.close();}}}},mask:{enable:true},width:"88vw",height:"500px",style:`
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
            `});this.$el.$smallUpload=e.$shadowRoot.querySelector(".avatar-upload[data-type='small']"),this.$el.$middleUpload=e.$shadowRoot.querySelector(".avatar-upload[data-type='middle']"),this.$el.$bigUpload=e.$shadowRoot.querySelector(".avatar-upload[data-type='big']"),this.$el.$smallStatus=e.$shadowRoot.querySelector(".avatar-upload-status[data-type='small']"),this.$el.$middleStatus=e.$shadowRoot.querySelector(".avatar-upload-status[data-type='middle']"),this.$el.$bigStatus=e.$shadowRoot.querySelector(".avatar-upload-status[data-type='big']"),this.setUploadChangeEvent(this.$el.$smallUpload,this.$el.$smallStatus,this.$data.avatarInfo.small,()=>{this.$upload.small=true;}),this.setUploadChangeEvent(this.$el.$middleUpload,this.$el.$middleStatus,this.$data.avatarInfo.middle,()=>{this.$upload.middle=true;}),this.setUploadChangeEvent(this.$el.$bigUpload,this.$el.$bigStatus,this.$data.avatarInfo.big,()=>{this.$upload.big=true;});},setUploadChangeEvent(t,e,n,i){r.on(t,"change",s=>{var m;if(!((m=t.files)!=null&&m.length))return;r.text(e,"🤡获取文件信息中..."),e.removeAttribute("data-success");let l=t.files[0],o=l.size,a=new Image,c=new FileReader;c.readAsDataURL(l),c.onload=function(d){a.src=d.target.result,a.onload=function(){if(a.width>n.width||a.height>n.height){t.value="",e.setAttribute("data-success","false"),r.text(e,`🤡校验失败 ==> 图片尺寸不符合，宽：${a.width} 高：${a.height}`);return}if(o>lt.$data.avatarInfo.maxSize){t.value="",e.setAttribute("data-success","false"),r.text(e,`🤡校验失败 ==> 图片大小不符合：${o}byte，限制最大：${lt.$data.avatarInfo.maxSize}byte`);return}e.setAttribute("data-success","true"),r.text(e,`🤣 通过 宽:${a.width} 高:${a.height} 大小(byte):${o}`),i();};};});},async getUploadUrl(){let t=await H.get("/home.php?mod=spacecp&ac=avatar",{headers:{"User-Agent":g.getRandomPCUA()}});if(!t.status)return;if(g.isNull(t.data.responseText)){x.error("动态头像：获取上传地址失败");return}let e=t.data.responseText.match(/var[\s]*data[\s]*=[\s]*"(.+?)"/);if(e==null||e.length!=2){x.error("动态头像：获取变量data失败");return}let i=e[e.length-1].split(","),s=i[i.indexOf("src")+1].replace("images/camera.swf?inajax=1","index.php?m=user&a=rectavatar&base64=yes");return b.info("上传地址："+s),s}},ne={id:"component-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[St("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(t,e,n)=>{b.info("设置当前Qmsg弹出位置"+n);},"Toast显示在页面九宫格的位置"),St("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],undefined,"限制Toast显示的数量"),L("逆序弹出","qmsg-config-showreverse",false,undefined,"修改Toast弹出的顺序")]}]},{text:"Cookie配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[L("启用","httpx-use-cookie-enable",false,undefined,"启用后，将根据下面的配置进行添加cookie"),L("使用document.cookie","httpx-use-document-cookie",false,undefined,"自动根据请求的域名来设置对应的cookie"),pt("bbs.binmt.cc","httpx-cookie-bbs.binmt.cc","",undefined,undefined,"Cookie格式：xxx=xxxx;xxx=xxxx")]}]}]},{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[L("链接文本转超链接","mt-link-text-to-hyperlink",true,undefined,"自动把页面中的链接文本转换为超链接"),L("显示用户UID","mt-show-user-uid",true,undefined,"格式为UID：xxx"),L("小窗模式","mt-small-window",true,undefined,"开启后点击帖子右侧区域为小窗打开")]}]},{text:"额外菜单项",type:"deepMenu",forms:[{type:"forms",text:"",forms:[L("小黑屋","mt-black-home",true,undefined,"将会在左侧面板添加【小黑屋】菜单"),L("在线用户","mt-online-user",true,undefined,"将会在左侧面板添加【在线用户】菜单"),L("付费主题白嫖提醒","mt-post-paidThemePost",true,undefined,"将会在左侧面板添加【付费主题白嫖提醒】菜单"),L("我的屏蔽","mt-ownBlock",true,undefined,"将会在左侧面板添加【我的屏蔽】菜单"),L("商品上架提醒","mt-productListingReminder",true,undefined,"将会在左侧面板添加【商品上架提醒】菜单"),L("自定义用户标签","mt-customizeUserLabels",true,undefined,"将会在左侧面板添加【自定义用户标签】菜单"),L("评论过滤器","mt-post-comment-filter",true,undefined,"将会在左侧面板添加【评论过滤器】菜单")]}]},{text:"头像",type:"deepMenu",forms:[{text:"<a href='https://ezgif.com/resize' target='_blank'>Resize Image</a>",type:"forms",forms:[Tt(t=>{let e=r.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
											<p class="pops-panel-item-left-main-text">头像（有缓存）</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),n=r.createElement("div",{className:"pops-panel-avatar-img",innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${F.getCurrentUID()}&size=small"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${F.getCurrentUID()}&size=middle"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${F.getCurrentUID()}&size=big"
												class="avatar-img" data-size="big">
											`}),i=r.createElement("style",{innerHTML:`
											.avatar-img {
												width: 30px;
												height: 30px;
												border-radius: 50%;
												overflow: hidden;
											}
										`});return n.querySelector(".avatar-img[data-size='small']"),n.querySelector(".avatar-img[data-size='middle']"),n.querySelector(".avatar-img[data-size='big']"),t.appendChild(e),t.appendChild(n),t.appendChild(i),t}),Tt(t=>{let e=r.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
											<p class="pops-panel-item-left-main-text">头像</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),n=r.createElement("div",{className:"pops-panel-avatar-img",innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${F.getCurrentUID()}&size=small&ts=${Date.now()}"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${F.getCurrentUID()}&size=middle&ts=${Date.now()}"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${F.getCurrentUID()}&size=big&ts=${Date.now()}"
												class="avatar-img" data-size="big">
											`});return t.appendChild(e),t.appendChild(n),t}),ft("修改头像",`可以上传gif图片，注意图片最大限制为${st.formatByteToSize(lt.$data.avatarInfo.maxSize)}`,"上传",undefined,false,false,"primary",()=>{lt.showView();})]}]}]}]},j={registerLeftMenu(t){g.waitNode(".comiis_sidenv_box .sidenv_li .comiis_left_Touch",1e4).then(e=>{if(!e){b.error("注册左侧面板菜单失败，原因：该元素不存在");return}let n=r.createElement("li",{className:"comiis_left_Touch",innerHTML:`
						<a href="javascript:;" class="comiis_left_Touch">
							<i class="comiis_font"></i>
							${t.name}
						</a>
						`}),i=n.querySelector(".comiis_font");typeof t.style=="string"&&(i.style.cssText=t.style),typeof t.icon=="string"&&(i.innerHTML=t.icon),typeof t.iconColor=="string"&&(i.style.color=t.iconColor),typeof t.iconSize=="string"&&(i.style.fontSize=t.iconSize),r.on(n,"click",s=>{g.preventEvent(s),typeof t.callback=="function"&&t.callback();}),r.append(e,n);});},comiisForumList:()=>document.querySelectorAll("li.forumlist_li"),comiisPostli:()=>document.querySelectorAll("div.comiis_postli.comiis_list_readimgs.nfqsqi"),comiisMmlist:()=>document.querySelectorAll(".comiis_mmlist")},V=function(t,e,n,i,s,l="",o,a,c){let m={text:t,type:"input",isNumber:!!o,isPassword:!!a,props:{},attributes:{},description:i,afterAddToUListCallBack:c,getValue(){return this.props[D].get(e,n)},callback(d,u,f){this.props[D].set(e,o?f:u);},placeholder:l};return Reflect.set(m.attributes,et,e),Reflect.set(m.attributes,it,n),Reflect.set(m.props,D,{get(d,u){return $.getValue(d,u)},set(d,u){$.setValue(d,u);}}),m},se=`#comiis_foot_menu_beautify {\r
	position: fixed;\r
	display: inline-flex;\r
	z-index: 90;\r
	left: 0;\r
	right: 0;\r
	bottom: 0;\r
	width: 100%;\r
	height: 48px;\r
	overflow: hidden;\r
	align-content: center;\r
	justify-content: center;\r
	align-items: center;\r
}\r
#comiis_foot_menu_beautify_big {\r
	position: fixed;\r
	display: inline-flex;\r
	flex-direction: column;\r
	z-index: 92;\r
	left: 0;\r
	right: 0;\r
	bottom: 0;\r
	width: 100%;\r
	min-height: 120px;\r
	overflow: hidden;\r
	align-content: center;\r
	justify-content: center;\r
	align-items: center;\r
}\r
#comiis_foot_menu_beautify input.bg_e.f_c::-webkit-input-placeholder {\r
	padding-left: 10px;\r
	color: #999;\r
}\r
#comiis_foot_menu_beautify input.bg_e.f_c::-moz-input-placeholder {\r
	padding-left: 10px;\r
	color: #999;\r
}\r
#comiis_foot_menu_beautify .reply_area ul li a {\r
	display: block;\r
	width: 22px;\r
	height: 22px;\r
	padding: 4px 8px;\r
	margin: 8px 0;\r
	position: relative;\r
}\r
#comiis_foot_menu_beautify .reply_area ul {\r
	display: inline-flex;\r
	align-content: center;\r
	align-items: center;\r
	justify-content: center;\r
}\r
#comiis_foot_menu_beautify .reply_area,\r
#comiis_foot_menu_beautify .reply_area ul {\r
	width: 100%;\r
}\r
#comiis_foot_menu_beautify .reply_area li a i {\r
	width: 22px;\r
	height: 22px;\r
	line-height: 22px;\r
	font-size: 22px;\r
}\r
#comiis_foot_menu_beautify .reply_area li a span {\r
	position: absolute;\r
	display: block;\r
	font-size: 10px;\r
	height: 14px;\r
	line-height: 14px;\r
	padding: 0 6px;\r
	right: -8px;\r
	top: 4px;\r
	overflow: hidden;\r
	border-radius: 20px;\r
}\r
#comiis_foot_menu_beautify li[data-attr="回帖"] input {\r
	border: transparent;\r
	border-radius: 15px;\r
	height: 30px;\r
	width: 100%;\r
}\r
#comiis_foot_menu_beautify_big .comiis_smiley_box {\r
	padding: 6px 6px 0;\r
}\r
#comiis_foot_menu_beautify_big .reply_area {\r
	margin: 10px 0 5px 0;\r
}\r
#comiis_foot_menu_beautify_big .reply_area ul {\r
	display: inline-flex;\r
	align-content: center;\r
	justify-content: center;\r
	align-items: flex-end;\r
}\r
#comiis_foot_menu_beautify_big li[data-attr="回帖"] {\r
	width: 75vw;\r
	margin-right: 15px;\r
}\r
#comiis_foot_menu_beautify_big .reply_user_content {\r
	width: 75vw;\r
	word-wrap: break-word;\r
	overflow: hidden;\r
	text-overflow: ellipsis;\r
	white-space: nowrap;\r
	margin: 8px 10px;\r
}\r
#comiis_foot_menu_beautify_big li[data-attr="发表"] .fastpostform_new {\r
	text-align: center;\r
	margin-bottom: 28px;\r
}\r
#comiis_foot_menu_beautify_big li[data-attr="发表"] .fastpostform_new i {\r
	font-size: 22px;\r
}\r
#comiis_foot_menu_beautify_big li[data-attr="发表"] input {\r
	width: 60px;\r
	height: 30px;\r
	border: transparent;\r
	color: #fff;\r
	background: #d1c9fc;\r
	border-radius: 30px;\r
	margin-bottom: 6px;\r
}\r
#comiis_foot_menu_beautify_big li[data-attr="发表"] input[data-text="true"] {\r
	background: #7a61fb;\r
}\r
#comiis_foot_menu_beautify_big li[data-attr="回帖"] textarea {\r
	padding: 10px 10px 10px 10px;\r
	border: transparent;\r
	border-radius: 6px;\r
	min-height: 70px;\r
	max-height: 180px;\r
	background: #e9e8ec;\r
	overflow-y: auto;\r
	width: -webkit-fill-available;\r
	width: -moz-available;\r
}\r
#comiis_foot_menu_beautify .reply_area li[data-attr="回帖"] {\r
	width: 65%;\r
	margin: 0 3%;\r
	text-align: center;\r
}\r
#comiis_foot_menu_beautify .reply_area li:not(first-child) {\r
	width: 7%;\r
	text-align: -webkit-center;\r
	text-align: center;\r
}\r
#comiis_foot_menu_beautify_big .other_area {\r
	width: 100%;\r
	text-align: center;\r
}\r
#comiis_foot_menu_beautify_big .other_area .menu_icon a {\r
	margin: 0 20px;\r
}\r
#comiis_foot_menu_beautify_big .other_area i {\r
	font-size: 24px;\r
}\r
#comiis_foot_menu_beautify_big .other_area #comiis_insert_ubb_tab i {\r
	font-size: 16px;\r
}\r
#comiis_foot_menu_beautify_big .other_area .menu_body {\r
	background: #f4f4f4;\r
}\r
#comiis_foot_menu_beautify_big\r
	.other_area\r
	.menu_body\r
	.comiis_smiley_box\r
	.comiis_optimization {\r
	max-height: 140px;\r
	overflow-y: auto;\r
	flex-direction: column;\r
}\r
#comiis_foot_menu_beautify_big\r
	.other_area\r
	.menu_body\r
	.comiis_smiley_box\r
	.bqbox_t {\r
	background: #fff;\r
}\r
#comiis_foot_menu_beautify_big\r
	.other_area\r
	.menu_body\r
	.comiis_smiley_box\r
	.bqbox_t\r
	ul#comiis_smilies_key\r
	li\r
	a.bg_f.b_l.b_r {\r
	background: #f4f4f4 !important;\r
}\r
#comiis_foot_menu_beautify_big\r
	.menu_body\r
	#comiis_pictitle_tab\r
	#comiis_pictitle_key {\r
	display: -webkit-box;\r
	top: 0;\r
	left: 0;\r
	height: 42px;\r
	line-height: 42px;\r
	overflow: hidden;\r
	overflow-x: auto;\r
}\r
#comiis_foot_menu_beautify_big\r
	.menu_body\r
	#comiis_pictitle_tab\r
	#comiis_pictitle_key\r
	li {\r
	padding: 0 10px;\r
}\r
#comiis_foot_menu_beautify_big\r
	.menu_body\r
	#comiis_insert_ubb_tab\r
	.comiis_input_style,\r
#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab .comiis_upbox {\r
	height: 140px;\r
	overflow-y: auto;\r
	flex-direction: column;\r
}\r
#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab #filedata_hello,\r
#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab #filedata_kggzs,\r
#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab #filedata_mt,\r
#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab #filedata_z4a {\r
	display: none;\r
}\r
@media screen and (max-width: 350px) {\r
	.comiis_bqbox .bqbox_c li {\r
		width: 14.5%;\r
	}\r
}\r
@media screen and (min-width: 350px) and (max-width: 400px) {\r
	.comiis_bqbox .bqbox_c li {\r
		width: 12.5%;\r
	}\r
}\r
@media screen and (min-width: 400px) and (max-width: 450px) {\r
	.comiis_bqbox .bqbox_c li {\r
		width: 11%;\r
	}\r
}\r
@media screen and (min-width: 450px) and (max-width: 500px) {\r
	.comiis_bqbox .bqbox_c li {\r
		width: 10%;\r
	}\r
}\r
@media screen and (min-width: 500px) and (max-width: 550px) {\r
	.comiis_bqbox .bqbox_c li {\r
		width: 9.5%;\r
	}\r
}\r
@media screen and (min-width: 550px) and (max-width: 600px) {\r
	.comiis_bqbox .bqbox_c li {\r
		width: 9%;\r
	}\r
}\r
@media screen and (min-width: 600px) and (max-width: 650px) {\r
	.comiis_bqbox .bqbox_c li {\r
		width: 8.5%;\r
	}\r
}\r
@media screen and (min-width: 650px) and (max-width: 700px) {\r
	.comiis_bqbox .bqbox_c li {\r
		width: 8%;\r
	}\r
}\r
@media screen and (min-width: 700px) and (max-width: 750px) {\r
	.comiis_bqbox .bqbox_c li {\r
		width: 7.5%;\r
	}\r
}\r
@media screen and (min-width: 750px) and (max-width: 800px) {\r
	.comiis_bqbox .bqbox_c li {\r
		width: 7%;\r
	}\r
}\r
@media screen and (min-width: 800px) and (max-width: 850px) {\r
	.comiis_bqbox .bqbox_c li {\r
		width: 6.5%;\r
	}\r
}\r
@media screen and (min-width: 850px) and (max-width: 1200px) {\r
	.comiis_bqbox .bqbox_c li {\r
		width: 6%;\r
	}\r
}\r
@media screen and (min-width: 1200px) {\r
	.comiis_bqbox .bqbox_c li {\r
		width: 4.5%;\r
	}\r
}\r
#imglist_settings button {\r
	font-size: 13.333px;\r
	color: #9baacf;\r
	outline: 0;\r
	border: none;\r
	height: 35px;\r
	width: 80px;\r
	border-radius: 10px;\r
	box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #fff;\r
	font-weight: 800;\r
	line-height: 40px;\r
	background: #efefef;\r
	padding: 0;\r
	display: flex;\r
	align-items: center;\r
	justify-content: center;\r
}\r
#imglist_settings button:active {\r
	box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7,\r
		inset -0.2rem -0.2rem 0.5rem #fff !important;\r
	color: #638ffb !important;\r
}\r
\r
#comiis_head .header_y {\r
	display: flex;\r
	align-content: center;\r
	align-items: center;\r
	justify-content: flex-end;\r
	height: 100%;\r
}\r
#comiis_head .header_y input {\r
	border: transparent;\r
	background: 0 0;\r
	text-align: center;\r
	margin: 0 5px;\r
}\r
#comiis_head .header_y input[value="删除"] {\r
	color: #d00;\r
}\r
#comiis_head .header_y input[value="保存"] {\r
	color: #b0ff6a;\r
}\r
#comiis_head .header_y input[value="保存草稿"] {\r
	color: #f90;\r
}\r
#comiis_head .header_y input[value="发表"] {\r
	color: #b0ff6a;\r
}\r
#comiis_head .header_y input[value="回复"] {\r
	color: #b0ff6a;\r
}\r
#comiis_post_tab {\r
	color: #000;\r
}\r
#comiis_pictitle_tab #imglist input {\r
	display: none;\r
}\r
\r
.comiis_post_imglist .delImg {\r
	position: absolute;\r
	top: -5px;\r
	left: -5px;\r
}\r
\r
.comiis_post_imglist .p_img a {\r
	float: left;\r
	height: 36px;\r
}\r
#imglist .p_img a {\r
	float: left;\r
	height: 36px;\r
}\r
#imglist .del a {\r
	padding: 0;\r
}\r
`,ae=()=>[{"[呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq001.gif","[撇嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq002.gif","[色]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq003.gif","[发呆]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq004.gif","[得意]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq005.gif","[流泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq006.gif","[害羞]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq007.gif","[闭嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq008.gif","[睡]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq009.gif","[大哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq010.gif","[尴尬]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq011.gif","[发怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq012.gif","[调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq013.gif","[呲牙]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq014.gif","[惊讶]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq015.gif","[难过]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq016.gif","[酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq017.gif","[冷汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq018.gif","[抓狂]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq019.gif","[吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq020.gif","[偷笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq021.gif","[可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq022.gif","[白眼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq023.gif","[傲慢]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq024.gif","[饥饿]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq025.gif","[困]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq026.gif","[惊恐]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq027.gif","[流汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq028.gif","[憨笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq029.gif","[装逼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq030.gif","[奋斗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq031.gif","[咒骂]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq032.gif","[疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq033.gif","[嘘]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq034.gif","[晕]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq035.gif","[折磨]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq036.gif","[衰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq037.gif","[骷髅]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq038.gif","[敲打]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq039.gif","[再见]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq040.gif","[擦汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq041.gif","[抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq042.gif","[鼓掌]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq043.gif","[糗大了]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq044.gif","[坏笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq045.gif","[左哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq046.gif","[右哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq047.gif","[哈欠]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq048.gif","[鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq049.gif","[委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq050.gif","[快哭了]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq051.gif","[阴脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq052.gif","[亲亲]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq053.gif","[吓]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq054.gif","[可怜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq055.gif","[眨眼睛]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq056.gif","[笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq057.gif","[dogeQQ]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq058.gif","[泪奔]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq059.gif","[无奈]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq060.gif","[托腮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq061.gif","[卖萌]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq062.png","[斜眼笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq063.gif","[喷血]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq064.gif","[惊喜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq065.gif","[骚扰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq066.gif","[小纠结]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq067.gif","[我最美]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq068.gif","[菜刀]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq069.gif","[西瓜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq070.gif","[啤酒]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq071.gif","[篮球]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq072.gif","[乒乓]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq073.gif","[咖啡]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq074.gif","[饭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq075.gif","[猪]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq076.gif","[玫瑰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq077.gif","[凋谢]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq078.gif","[示爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq079.gif","[爱心]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq080.gif","[心碎]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq081.gif","[蛋糕]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq082.gif","[闪电]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq083.gif","[炸弹]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq084.gif","[刀]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq085.gif","[足球]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq086.gif","[瓢虫]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq087.gif","[便便]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq088.gif","[月亮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq089.gif","[太阳]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq090.gif","[礼物]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq091.gif","[抱抱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq092.gif","[喝彩]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq93.gif","[祈祷]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq94.gif","[棒棒糖]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq95.gif","[药]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq96.gif","[赞]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq097.gif","[差劲]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq098.gif","[握手]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq099.gif","[胜利]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq100.gif","[抱拳]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq101.gif","[勾引]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq102.gif","[拳头]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq103.gif","[爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq105.gif","[NO]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq106.gif","[OK]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq107.gif"},{"[#呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_1.png","[#滑稽]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_10.png","[#吐舌]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_3.png","[#哈哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_2.png","[#啊]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_23.png","[#酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_22.png","[#怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_13.png","[#开心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_39.png","[#汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_14.png","[#泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_16.png","[#黑线]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_15.png","[#鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_21.png","[#不高兴]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_12.png","[#真棒]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_17.png","[#钱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_40.png","[#疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_26.png","[#阴险]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_20.png","[#吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_34.png","[#咦]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_41.png","[#委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_29.png","[#花心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_6.png","[#呼～]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_42.png","[#激动]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_5.png","[#冷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_43.png","[#可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_4.png","[#What？]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_25.png","[#勉强]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_38.png","[#狂汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_24.png","[#酸爽]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_27.png","[#乖]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_8.png","[#雅美蝶]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_28.png","[#睡觉]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_31.png","[#惊哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_19.png","[#哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_44.png","[#笑尿]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_32.png","[#惊讶]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_30.png","[#小乖]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_7.png","[#喷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_18.png","[#抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_33.png","[#捂嘴笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_9.png","[#你懂的]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_11.png","[#犀利]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_35.png","[#小红脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_36.png","[#懒得理]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_37.png","[#爱心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_45.png","[#心碎]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_46.png","[#玫瑰]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_47.png","[#礼物]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_48.png","[#彩虹]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_49.png","[#太阳]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_50.png","[#月亮]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_51.png","[#钱币]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_52.png","[#咖啡]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_53.png","[#蛋糕]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_54.png","[#大拇指]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_55.png","[#胜利]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_56.png","[#爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_57.png","[#OK]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_58.png","[#弱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_59.png","[#沙发]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_60.png","[#纸巾]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_61.png","[#香蕉]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_62.png","[#便便]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_63.png","[#药丸]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_64.png","[#红领巾]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_65.png","[#蜡烛]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_66.png","[#三道杠]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_67.png","[#音乐]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_68.png","[#灯泡]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_69.png"},{"[doge]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/1.png","[doge思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/2.png","[doge再见]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/3.png","[doge生气]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/4.png","[doge气哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/5.png","[doge笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/7.png","[doge调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/6.png","[doge啊哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/8.png","[doge原谅TA]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/9.png","[miao]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/10.png","[miao思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/11.png","[miao拜拜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/12.png","[miao生气]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/13.png","[miao气哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/14.png","[二哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/15.png","[摊手]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/19.png","[w并不简单]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/20.png","[w滑稽]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/21.png","[w色]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/22.png","[w爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/23.png","[w拜拜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/24.png","[w悲伤]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/25.png","[w鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/26.png","[w馋嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/27.png","[w冷汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/28.png","[w打哈欠]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/29.png","[w打脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/30.png","[w敲打]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/31.png","[w生病]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/32.png","[w闭嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/33.png","[w鼓掌]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/34.png","[w哈哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/35.png","[w害羞]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/36.png","[w呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/37.png","[w黑线]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/38.png","[w哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/39.png","[w调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/40.png","[w可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/41.png","[w可怜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/42.png","[w酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/43.png","[w困]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/44.png","[w懒得理你]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/45.png","[w流泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/46.png","[w怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/47.png","[w怒骂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/48.png","[w钱]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/49.png","[w亲亲]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/50.png","[w傻眼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/51.png","[w便秘]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/52.png","[w失望]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/53.png","[w衰]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/54.png","[w睡觉]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/55.png","[w思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/56.png","[w开心]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/57.png","[w色舔]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/58.png","[w偷笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/59.png","[w吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/60.png","[w抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/61.png","[w委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/62.png","[w笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/63.png","[w嘻嘻]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/64.png","[w嘘]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/65.png","[w阴险]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/66.png","[w疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/67.png","[w抓狂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/70.png","[w晕]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/69.png","[w右哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/68.png","[w左哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/71.png","[w肥皂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/77.png","[w奥特曼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/78.png","[w草泥马]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/79.png","[w兔子]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/80.png","[w熊猫]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/81.png","[w猪头]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/82.png","[w→_→]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/83.png","[w给力]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/84.png","[w囧]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/85.png","[w萌]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/86.png","[w神马]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/87.png","[w威武]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/88.png"}],Ct=[];class zt{constructor(e){nt(this,"option");nt(this,"$data",{STORAGE_KEY:"mt-image-bed-upload-history"});this.option=e,Ct.push({id:this.option.id,callback:this.option.delImageEvent.bind(this)}),this.addTab(),r.on(`.comiis_post_imglist[data-chartbed="${this.option.name}"] .up_btn a`,"click",async n=>{await this.option.uploadBtnClickEvent(n)&&C(`.comiis_post_imglist[data-chartbed="${this.option.name}"] input[type="file"]`).click();}),r.on(`.comiis_post_imglist[data-chartbed="${this.option.name}"] input[type="file"]`,"change",async n=>{let i=n.target,s=()=>{i.value="";},l=async o=>{let a=await this.option.fileChangeEvent(n,o);s(),a.success&&a.data.forEach(c=>{this.addImage(c);let m=this.createImageBtnElement("插入",c.url);this.setImageBtnDeleteEvent(m,c),r.append(`.comiis_post_imglist[data-chartbed="${this.option.name}"]`,m);});};if(i.files&&i.files.length){let o=i.files;if($.getValue("mt-image-bed-watermark-enable")){let a=x.loading("处理水印中..."),c=[],m=[];await Promise.all(Array.from(i.files).map(async(d,u)=>{if(d.type==="image/gif"){let p=await g.parseFileToBase64(d);c.push(p),m.push(d);}else {x.info(`添加水印 ${u+1}/${o.length}`);var f=new window.Watermark;await f.setFile(d),f.addText({text:[$.getValue("mt-image-bed-watermark-text")],color:$.getValue("mt-image-bed-watermark-text-color"),fontSize:$.getValue("mt-image-bed-watermark-font-size"),globalAlpha:$.getValue("mt-image-bed-watermark-font-opacity"),xMoveDistance:$.getValue("mt-image-bed-watermark-left-right-margin"),yMoveDistance:$.getValue("mt-image-bed-watermark-top-bottom-margin"),rotateAngle:$.getValue("mt-image-bed-watermark-rotate")}),c.push(f.render("png")),m.push(g.parseBase64ToFile(f.render("png"),"WaterMark_"+d.name));}})),a.close(),o=m,$.getValue("mt-image-bed-watermark-autoAddWaterMark")?await l(o):B.confirm({title:{text:"水印预览",position:"center"},content:{text:`
									<div class="upload-image-water">${c.map(d=>`<img src="${d}" crossoriginNew="anonymous" loading="lazy">`).join(`
`)}
									</div>
									`,html:true},btn:{ok:{text:"继续上传",async callback(d,u){d.close(),await l(o);}},close:{callback(d,u){d.close(),s();}},cancel:{callback(d,u){d.close(),s();}}},drag:true,width:"88vw",height:"80vh",style:`
								.upload-image-water {

								}
								.upload-image-water img{
									width: 100%;
								}
								`});}else await l(o);}});}addTab(){let e=C("#comiis_pictitle_key"),n=e.querySelector("a[data-type='history']"),i=`
            <li>
                <a href="javascript:;" class="comiis-picture-tab" data-type="image-bed">${this.option.name}</a>
            </li>
        `;if(!n){let o=r.createElement("li");n=r.createElement("a",{href:"javascript:;",className:"comiis-picture-tab",innerHTML:"历史图片"},{"data-type":"history"}),r.on(n,"click",()=>{this.initHistoryUploadImageList();}),r.append(o,n),r.append(e,o);}r.before(n.parentElement,i);let s=C("#comiis_pictitle_tab .bqbox_t"),l=Array.from(N("#comiis_pictitle_tab .comiis_upbox")).find(o=>!!o.querySelector("#imglist_history"));l||(l=r.createElement("div",{className:"comiis_upbox bg_f cl",innerHTML:`
					<ul class="comiis_post_imglist cl" id="imglist_history">	
                    </ul>
				`},{style:"display: none;"}),r.before(s,l),l=Array.from(N("#comiis_pictitle_tab .comiis_upbox")).find(o=>!!o.querySelector("#imglist_history"))),r.before(l,`
            <div class="comiis_upbox bg_f cl" style="display: none;">
                <ul class="comiis_post_imglist cl" data-chartbed="${this.option.name}">
                    <li class="up_btn">
                        <a href="javascript:;" class="bg_e b_ok f_d">
                            <i class="comiis_font"></i>
                            
                        </a>
                        <input type="file" name="Filedata" accept="image/*" multiple="" style="display: none;">
                    </li>				
                </ul>
            </div>
            `);}createImageBtnElement(e,n){return r.createElement("li",{innerHTML:`
            <span class="delImg" data-id="${this.option.id}" data-name="${this.option.name}">
                <a href="javascript:;">
                    <i class="comiis_font f_g"></i>
                </a>
            </span>
            <span class="charu f_f">${e}</span>
            <span class="p_img">
                <a href="javascript:;"
                onclick="comiis_addsmilies('[img]${n}[/img]')">
                    <img style="height:54px;width:54px;" 
                        title="${n}" 
                        src="${n}" 
                        loading="lazy"
                        class="vm b_ok"></a>
            </span>
            `})}initHistoryUploadImageList(){let e=C("#comiis_pictitle_tab #imglist_history");e.innerHTML="";let n=document.createDocumentFragment();this.getAllImage().forEach(i=>{let s=this.createImageBtnElement(i.labelName,i.data.url);this.setHistoryImageBtnDeleteEvent(s,i),n.appendChild(s);}),e.appendChild(n);}setImageBtnDeleteEvent(e,n){let i=e.querySelector(".delImg");r.on(i,"click",async s=>{await this.option.delImageEvent(s,n)&&this.deleteImage(this.option.id,n)&&r.remove(e);});}setHistoryImageBtnDeleteEvent(e,n){let i=e.querySelector(".delImg");r.on(i,"click",async s=>{let l=Ct.find(a=>a.id===n.id);if(!l)return;await l.callback(s,n.data)&&this.deleteImage(n.id,n.data)&&r.remove(e);});}addImage(e){let n=Y(this.$data.STORAGE_KEY,[]);n.push({id:this.option.id,name:this.option.name,labelName:this.option.labelName,data:e}),W(this.$data.STORAGE_KEY,n);}getAllImage(){return Y(this.$data.STORAGE_KEY,[])}deleteImage(e,n){let i=this.getAllImage(),s=i.findIndex(l=>l.id===e&&JSON.stringify(l.data)===JSON.stringify(n));return s!=-1?(i.splice(s,1),W(this.$data.STORAGE_KEY,i),true):false}}const Pt={$data:{get account(){return $.getValue("mt-image-bed-hello-account")},get password(){return $.getValue("mt-image-bed-hello-password")},get token(){return $.getValue("mt-image-bed-hello-token")}},$code:{401:"未登录或授权失败",403:"管理员关闭了接口功能或没有该接口权限",429:"超出请求配额，请求受限",500:"服务端出现异常"},$config:{base_url:"https://www.helloimg.com/api/v1",TAG:"Hello图床："},$tabConfig:{id:"www.helloimg.com",name:"Hello图床",labelName:"hello"},init(){const t=this;new zt({id:this.$tabConfig.id,name:this.$tabConfig.name,labelName:this.$tabConfig.labelName,async uploadBtnClickEvent(e){return await t.checkLogin()},async fileChangeEvent(e,n){let i=[],s=x.loading("上传中..."),l=true;for(let o=0;o<Array.from(n).length;o++){const a=Array.from(n)[o];let c=await t.uploadImage(a);c?(i.push({url:c.data.links.url,data:c.data}),l=l&&true):l=l&&false;}return s.close(),{success:l,data:i}},storageSaveCallBack(e){return e.data},async delImageEvent(e,n){if(await t.checkLogin()){let s=x.loading("正在删除图片..."),l=await t.deleteImage(n.data.key)??false;return s.close(),l}else return  false}});},async checkLogin(){return this.$data.account?this.$data.password?this.$data.token?true:(x.error(`${this.$config.TAG}请先配置token`),false):(x.error(`${this.$config.TAG}请先配置密码`),false):(x.error(`${this.$config.TAG}请先配置账号`),false)},async uploadImage(t){let e=new FormData;e.append("file",t),e.append("permission","0"),e.append("strategy_id","0"),e.append("album_id","0");let n=await H.post(`${this.$config.base_url}/upload`,{data:e,headers:{Accept:"application/json",Authorization:`Bearer ${this.$data.token}`,"User-Agent":g.getRandomPCUA(),Referer:`${this.$config.base_url}/`,Origin:this.$config.base_url},allowInterceptConfig:false});if(!n.status){b.error(n),x.error(this.$config.TAG+"网络异常，上传图片失败");return}if(n.data.status in this.$code){b.error(n),x.error(this.$config.TAG+this.$code[n.data.status]);return}let i=g.toJSON(n.data.responseText);if(b.info(i),!i.status){x.error(this.$config.TAG+i.message);return}x.success(this.$config.TAG+"上传成功");let s=new FileReader;return s.readAsDataURL(t),await new Promise(l=>{s.onload=function(){let a={imageUri:this.result,data:i.data};l(a);};})},async deleteImage(t){let e=await H.delete(this.$config.base_url+"/images/"+t,{timeout:15e3,headers:{Accept:"application/json",Authorization:`Bearer ${this.$data.token}`,"User-Agent":g.getRandomPCUA(),Referer:`${this.$config.base_url}/`,Origin:this.$config.base_url},allowInterceptConfig:false});if(e.data.status in this.$code)return x.error(this.$config.TAG+this.$code[e.data.status]),false;let n=g.toJSON(e.data.responseText);return n.status?(x.success(this.$config.TAG+"删除成功"),true):(x.error(this.$config.TAG+n.message),false)}},Bt={$data:{csrf_token:null},$config:{TAG:"MT图床：",base_url:"https://img.binmt.cc"},$tabConfig:{id:"img.binmt.cc",name:"MT图床",labelName:"mt"},init(){const t=this;new zt({id:this.$tabConfig.id,name:this.$tabConfig.name,labelName:this.$tabConfig.labelName,async uploadBtnClickEvent(e){return await t.checkLogin()},async fileChangeEvent(e,n){let i=[],s=x.loading("上传中..."),l=true;for(let o=0;o<Array.from(n).length;o++){const a=Array.from(n)[o];let c=await t.uploadImage(a);c?(i.push({url:c.data.links.url,data:c.data}),l=l&&true):l=l&&false;}return s.close(),{success:l,data:i}},storageSaveCallBack(e){return e.data},async delImageEvent(e,n){return  true}});},async checkLogin(){if(!this.$data.csrf_token){let t=x.loading("正在获取CSRF Token中..."),e=await this.getCSRFToken();if(t.close(),!e)return  false;this.$data.csrf_token=e;}return  true},async getCSRFToken(){var i;let t=await H.get(this.$config.base_url,{allowInterceptConfig:false,headers:{"User-Agent":g.getRandomPCUA(),Referer:this.$config.base_url+"/",Origin:this.$config.base_url}});if(!t.status){x.error(this.$config.TAG+"获取CSRF Token失败，网络异常");return}let n=(i=r.parseHTML(t.data.responseText,true,true).querySelector('meta[name="csrf-token"]'))==null?undefined:i.getAttribute("content");if(n)return b.info("获取的CSRF token：",n),x.success(this.$config.TAG+"获取CSRF Token成功"),n},async uploadImage(t){let e=new FormData;e.append("strategy_id","2"),e.append("file",t);let n=await H.post(`${this.$config.base_url}/upload`,{data:e,headers:{Accept:"application/json, text/javascript, */*; q=0.01","User-Agent":g.getRandomAndroidUA(),Origin:this.$config.base_url,pragma:"no-cache","Accept-Encoding":"gzip, deflate, br","Accept-Language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",Referer:this.$config.base_url+"/",Pragma:"no-cache","x-csrf-token":this.$data.csrf_token,"X-Requested-With":"XMLHttpRequest"},allowInterceptConfig:false});if(!n.status){b.error(n),x.error(this.$config.TAG+"网络异常，上传图片失败");return}let i=g.toJSON(n.data.responseText);if(b.info(i),!i.status){b.error(n),x.error(this.$config.TAG+i.message||JSON.stringify(i));return}x.success(this.$config.TAG+"上传成功");let s=new FileReader;return s.readAsDataURL(t),await new Promise(l=>{s.onload=function(){let a={imageUri:this.result,data:i.data};l(a);};})}},Ut=()=>({rainbow1:{key:"转普通彩虹",value:"",isFunc:true,num:1},rainbow2:{key:"转黑白彩虹",value:"",isFunc:true,num:2},rainbow3:{key:"转黑红彩虹",value:"",isFunc:true,num:3},rainbow4:{key:"转蓝绿彩虹",value:"",isFunc:true,num:4},size:{key:"大小",value:"[size=][/size]",tagL:"=",tagR:"]",L:"[size=]",R:"[/size]",cursorL:"[size=",cursorLength:6,quickUBBReplace:"[size=14]replace[/size]"},color:{key:"颜色",value:"[color=][/color]",tagL:"=",tagR:"]",L:"[color=]",R:"[/color]",cursorL:"[color=",cursorLength:7,quickUBBReplace:"[color=#000]replace[/color]"},b:{key:"加粗",value:"[b][/b]",tagL:"]",tagR:"[",L:"[b]",R:"[/b]",cursorR:"[/b]",cursorLength:4,quickUBBReplace:"[b]replace[/b]"},u:{key:"下划线",value:"[u][/u]",tagL:"]",tagR:"[",L:"[u]",R:"[/u]",cursorR:"[/u]",cursorLength:4,quickUBBReplace:"[u]replace[/u]"},i:{key:"倾斜",value:"[i][/i]",tagL:"]",tagR:"[",L:"[i]",R:"[/i]",cursorR:"[/i]",cursorLength:4,quickUBBReplace:"[i]replace[/i]"},s:{key:"中划线",value:"[s][/s]",tagL:"]",tagR:"[",L:"[s]",R:"[/s]",cursorR:"[/s]",cursorLength:4,quickUBBReplace:"[s]replace[/s]"},lineFeed:{key:"换行",value:"[*]",L:"",R:"[*]",cursorL:"[*]",cursorLength:3,quickUBBReplace:"replace[*]"},longHorizontalLine:{key:"水平线",value:"[hr]",L:"",R:"[hr]",cursorL:"[hr]",cursorLength:4,quickUBBReplace:"replace[hr]"},link:{key:"链接",value:"[url=][/url]",tagL:"=",tagR:"]",L:"[url=]",R:"[/url]",cursorL:"[url=",cursorLength:5,quickUBBReplace:"[url=replace]replace[/url]"},hide:{key:"隐藏",value:`[hide]
[/hide]`,tagL:"]",tagR:"[",L:"[hide]",R:"[/hide]",cursorR:"[/hide]",cursorLength:7,quickUBBReplace:`[hide]replace
[/hide]`},quote:{key:"引用",value:"[quote][/quote]",tagL:"]",tagR:"[",L:"[quote]",R:"[/quote]",cursorR:"[/quote]",cursorLength:8,quickUBBReplace:"[quote]replace[/quote]"},email:{key:"邮件",value:"[email=][/email]",tagL:"=",tagR:"]",L:"[email=]",R:"[/email]",cursorL:"[email=",cursorLength:7,quickUBBReplace:"[email=replace]replace[/email]"}}),Nt=(t,e)=>{if(e=="")return "";var n=e,i,s,l,o,a,c,m,d;if(l=0,o=0,a=0,d=0,i="",t==1){d=40,l=255,c=1,m=0;do n.charCodeAt(m)!=32?(o+d<256?c==1&&(o+=d):c==1&&(c=2,o=255),l-d>-1?c==2&&(l-=d):c==2&&(c=3,l=0),a+d<256?c==3&&(a+=d):c==3&&(c=4,a=255),o-d>-1?c==4&&(o-=d):c==4&&(c=5,o=0),l+d<256?c==5&&(l+=d):c==5&&(c=6,l=255),a-d>-1?c==6&&(a-=d):c==6&&(c=1,a=0),s="",s+=parseInt(l).toString(16).length==1?0+parseInt(l).toString(16):parseInt(l).toString(16),s+=parseInt(o).toString(16).length==1?0+parseInt(o).toString(16):parseInt(o).toString(16),s+=parseInt(a).toString(16).length==1?0+parseInt(a).toString(16):parseInt(a).toString(16),s=s.toUpperCase(),i+=`[color=#${s}]${n.charAt(m)}[/color]`):i+=n.charAt(m),m++;while(m<n.length)}else if(t==2)for(d=255/n.length,c=1;c<n.length+1;c++)n.charCodeAt(c-1)!=32?(l+=d,o+=d,a+=d,l>255&&(l=255),o>255&&(o=255),a>255&&(a=255),s="",s+=parseInt(l).toString(16).length==1?0+parseInt(l).toString(16):parseInt(l).toString(16),s+=parseInt(o).toString(16).length==1?0+parseInt(o).toString(16):parseInt(o).toString(16),s+=parseInt(a).toString(16).length==1?0+parseInt(a).toString(16):parseInt(a).toString(16),s=s.toUpperCase(),i+=`[color=#${s}]${n.charAt(c-1)}[/color]`):i+=n.charAt(c-1);else if(t==3)for(d=255/n.length,c=1;c<n.length+1;c++)n.charCodeAt(c-1)!=32?(l+=d,o=29,a=36,l>255&&(l=255),o>255&&(o=255),a>255&&(a=255),s="",s+=parseInt(l).toString(16).length==1?0+parseInt(l).toString(16):parseInt(l).toString(16),s+=parseInt(o).toString(16).length==1?0+parseInt(o).toString(16):parseInt(o).toString(16),s+=parseInt(a).toString(16).length==1?0+parseInt(a).toString(16):parseInt(a).toString(16),s=s.toUpperCase(),i+=`[color=#${s}]${n.charAt(c-1)}[/color]`):i+=n.charAt(c-1);else if(t==4)for(d=255/n.length,c=1;c<n.length+1;c++)n.charCodeAt(c-1)!=32?(l=0,o=174,a+=d,l>255&&(l=255),o>255&&(o=255),a>255&&(a=255),s="",s+=parseInt(l).toString(16).length==1?0+parseInt(l).toString(16):parseInt(l).toString(16),s+=parseInt(o).toString(16).length==1?0+parseInt(o).toString(16):parseInt(o).toString(16),s+=parseInt(255-a).toString(16).length==1?0+parseInt(255-a).toString(16):parseInt(255-a).toString(16),s=s.toUpperCase(),i+=`[color=#${s}]${n.charAt(c-1)}[/color]`):i+=n.charAt(c-1);return i},oe=function(){y.$.fn.extend({insertAtCaret:function(t){var e=y.$(this)[0];if(document.selection){this.focus();var n=document.selection.createRange();n.text=t,this.focus();}else if(e.selectionStart||e.selectionStart=="0"){var i=e.selectionStart,s=e.selectionEnd,l=e.scrollTop;e.value=e.value.substring(0,i)+t+e.value.substring(s,e.value.length),this.focus(),e.selectionStart=i+t.length,e.selectionEnd=i+t.length,e.scrollTop=l;}else this.value+=t,this.focus();},selectRange:function(t,e){return e===undefined&&(e=t),this.each(function(){if("selectionStart"in this)this.selectionStart=t,this.selectionEnd=e;else if(this.setSelectionRange)this.setSelectionRange(t,e);else if(this.createTextRange){var n=this.createTextRange();n.collapse(true),n.moveEnd("character",e),n.moveStart("character",t),n.select();}})},getCursorPosition:function(){var t=y.$(this)[0],e=0;if("selectionStart"in t)e=t.selectionStart;else if("selection"in document){t.focus();var n=document.selection.createRange(),i=document.selection.createRange().text.length;n.moveStart("character",-t.value.length),e=n.text.length-i;}return e},moveCursorInCenterByText:function(t,e){var n=y.$(this)[0],i=n.value;for(let s=n.selectionStart-1;s>0;s--){let l=i[s-1],o=i[s];if(l==t&&o==e){this.selectRange(s);break}}},moveCursorToCenterByTextWithLeft:function(t,e){var n=y.$(this)[0],i=n.value;for(let s=n.selectionStart-1;s>0;s--)if(i.substring(s-e,s)==t){this.selectRange(s);break}},moveCursorToCenterByTextWithRight:function(t,e){var n=y.$(this)[0],i=n.value;for(let s=n.selectionStart-1;s>0;s--)if(i.substring(s,s+e)==t){this.selectRange(s+e);break}}});};let It={1:{error_match:"抱歉，您填写的内容包含敏感词而无法提交",popup_text:"抱歉，您填写的内容包含敏感词而无法提交"},2:{error_match:"抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复",popup_text:"抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复"},3:{error_match:"抱歉，本主题已关闭，不再接受新内容",popup_text:"抱歉，本主题已关闭，不再接受新内容"},4:{error_match:"抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复",popup_text:"抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复"},5:{error_match:"抱歉，您的帖子小于 10 个字符的限制",popup_text:"抱歉，您的帖子小于 10 个字符的限制"}},yt=null;const tt={$data:{isUBBCodeInsertClick:false,db:new st.indexedDB("mt_reply_record","input_text"),forum_action:null,get tid(){return F.getThreadId(window.location.href)}},$el:{$like:null,$btn_submit:null,$input:null,$form:null,$fastpostsubmit:null},init(){b.info("编辑器优化-简略版"),G(se),this.overridePageEditor();},overridePageEditor(){let t=document.querySelector("#comiis_foot_memu .comiis_flex li:nth-child(2)"),e=document.querySelector("#comiis_foot_memu .comiis_flex li:nth-child(3)"),n=document.querySelector("#comiis_foot_memu .comiis_flex li:nth-child(4)");this.$el.$form=document.querySelector("#fastpostform"),this.$data.forum_action=this.$el.$form.getAttribute("action");let i=r.serialize(this.$el.$form),s=document.querySelector("#fastpostform .header_y a").href;r.remove("#needmessage[name='message']"),r.remove("#imglist"),r.remove("#fastpostsubmitline"),r.remove("#fastpostsubmit");let l=document.querySelector("#comiis_foot_memu");r.hide(l,false);let o=ae(),a=Object.keys(o[0]).map(d=>{let u=o[0][d];return `<li><a href="javascript:;" onclick="comiis_addsmilies('${d}');"><img loading="lazy" data-src="${u}" class="vm"></a></li>`}),c=Object.keys(o[1]).map(d=>{let u=o[1][d];return `<li><a href="javascript:;" onclick="comiis_addsmilies('${d}');"><img loading="lazy" data-src="${u}" class="vm"></a></li>`}),m=Object.keys(o[2]).map(d=>{let u=o[2][d];return `<li><a href="javascript:;" onclick="comiis_addsmilies('${d}');"><img loading="lazy" data-src="${u}" class="vm"></a></li>`});r.after(l,`
            <div id="comiis_foot_menu_beautify" class="bg_f b_t">
                <div class="reply_area">
                    <ul>
                        <li data-attr="回帖"><input type="text" class="bg_e f_c" placeholder="发帖千百度，文明第一步" readonly="readonly"></li>
                        <li data-attr="评论数量">${t.innerHTML}</li>
                        <li data-attr="点赞">${e.innerHTML}</li>
                        <li data-attr="收藏">${n.innerHTML}</li>
                    </ul>
                </div>
            </div>
            <div id="comiis_foot_menu_beautify_big" data-model="comment" class="bg_f b_t" style="display:none;">
                <div class="reply_area">
                    <div class="reply_user_content" style="display:none;"></div>
                    <ul>
                        <li data-attr="回帖"><textarea id="needmessage" placeholder="发帖千百度，文明第一步"></textarea></li>
                        <li data-attr="发表">
                            <div class="fastpostform_new"><a href="${s}" data-comment-url="${s}" target="_blank"><i class="comiis_font f_d"></i></a></div>
                            <div id="fastpostsubmitline"><input data-comment-url="${s}" data-comment-action="${this.$data.forum_action}" data-comment-serialize="${i}" data-text="false" type="button" value="发表" name="replysubmit" id="fastpostsubmit" comiis="handle"></div>
                        </li>
                    </ul>
                </div>
                <div class="other_area">
                    <div class="menu_icon">
                        <a href="javascript:;" class="comiis_pictitle"><i class="comiis_font"></i></a>
                        <a href="javascript:;" class="comiis_smile"><i class="comiis_font"></i></a>
                        <a href="javascript:;" class="commis_insert_bbs"><i class="comiis_font"></i></a>
                    </div>
                    <div class="menu_body">
                        <div id="comiis_pictitle_tab">
                            <!-- 列表项 -->
                            <div class="comiis_upbox bg_f cl">
                                <ul id="imglist" class="comiis_post_imglist cl">
                                    <li class="up_btn">
                                        <a href="javascript:;" class="bg_e b_ok f_d">
                                            <i class="comiis_font"></i>
                                        </a>
                                        <input type="file" name="Filedata" id="filedata" accept="image/*" multiple>
                                    </li>				
                                </ul>
                             </div>
                             <!-- 菜单项 -->
                             <div class="bqbox_t">
                                <ul id="comiis_pictitle_key">
                                    <li class="bg_f" id="comiis_pictitle_tab_n_1"><a href="javascript:;" class="">论坛</a></li>
                                </ul>
                            </div>
                        </div>
                        <div id="comiis_post_tab" class="comiis_bqbox">
                            <div class="comiis_smiley_box swiper-container-horizontal swiper-container-android">
                                <div class="swiper-wrapper bqbox_c comiis_optimization">
                                    <div class="swiper-slide">
                                        ${a.join(`
`)}
                                    </div>
    
                                    <div class="swiper-slide" style="display: none;">
                                        ${c.join(`
`)}
                                    </div>
                                    
                                    <div class="swiper-slide" style="display: none;">
                                        ${m.join(`
`)}    
                                    </div>
                                </div>
                                <div class="bqbox_t">
                                    <ul id="comiis_smilies_key">
                                        <li>
                                            <a href="javascript:;" id="comiis_smilies_tab_n_1" class="bg_f b_l b_r">
                                                <img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq063.gif" class="vm">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" id="comiis_smilies_tab_n_2" class="">
                                                <img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_10.png" class="vm">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" id="comiis_smilies_tab_n_3" class="">
                                                <img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/21.png" class="vm">
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="comiis_insert_ubb_tab" style="display: none;">
                            <div class="bg_f comiis_input_style">
                                <div class="comiis_post_urlico b_b">
                                    <ul id="comiis_insert_ubb_tab_list">
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `),C("#comiis_foot_menu_beautify .comiis_position_key"),this.$el.$like=C("#comiis_foot_menu_beautify .comiis_recommend_addkey"),C("#comiis_foot_menu_beautify #comiis_favorite_a"),C("#comiis_pictitle_key"),this.$el.$btn_submit=C('#comiis_foot_menu_beautify_big li[data-attr="发表"] input'),this.$el.$input=C("#comiis_foot_menu_beautify_big textarea"),this.$el.$fastpostsubmit=C("#fastpostsubmit"),y.textarea_scrollHeight=()=>{},typeof y.comiis_addsmilies=="function"&&(y.comiis_addsmilies=d=>{y.$("#needmessage").comiis_insert(d),y.$("#needmessage")[0].dispatchEvent(new Event("propertychange"));}),y.$("#imglist .up_btn").append(y.$("#filedata")),y.$(document).on("click","#imglist .up_btn a",function(){y.$(this).next().click();}),y.$(document).on("click","#imglist .p_img a",function(){let d=y.$(this);if(d.attr("onclick")==null){let u=d.find("img").attr("id").replace("aimg_","");y.comiis_addsmilies(`[attachimg]${u}[/attachimg]`);}}),r.hide("#comiis_foot_menu_beautify_big .menu_body",false),this.setInputChangeEvent(),this.setLikeBtnClickEvent(),this.setSubmitBtnClickEvent(),this.setGlobalReplyBtnClickEvent(),this.setGlobalClickCheckEvent(),this.setMenuIconToggleEvent(),this.setMenuImageClickEvent(),this.setMenuImageToggleEvent(),this.setMenuSmileClickEvent(),this.setMenuSmileTabClickEvent(),this.setMenuInsertClickEvent(),this.setMenuQuickUBB(),$.execMenu("mt-forum-post-editorOptimizationNormal-recordInputText",()=>{this.initReplyText(),this.setInputChangeSaveEvent();}),$.execMenuOnce("mt-image-bed-hello-enable",()=>{Pt.init();}),$.execMenuOnce("mt-image-bed-mt-enable",()=>{Bt.init();});},handle_error(t){let e=false,n=r.text(r.parseHTML(t,false,false).querySelector("#messagetext"));return !n||typeof n=="string"&&n.trim()==""||Object.keys(It).forEach(i=>{let s=It[i];if(n.indexOf(s.error_match)!=-1){n.indexOf("typeof errorhandle_=='function'")!=-1&&x.error(s.popup_text),e=true;return}}),e},setInputChangeEvent(){const t=this;r.on(t.$el.$input,["input","propertychange"],function(e){var i,s;t.$el.$input.value===""?(t.$el.$btn_submit.setAttribute("data-text","false"),(i=C("#comiis_foot_menu_beautify li[data-attr='回帖'] input"))==null||i.setAttribute("placeholder","发帖千百度，文明第一步")):(t.$el.$btn_submit.setAttribute("data-text","true"),(s=C("#comiis_foot_menu_beautify li[data-attr='回帖'] input"))==null||s.setAttribute("placeholder","[草稿待发送]")),r.css(t.$el.$input,"height","70px"),r.css(t.$el.$input,"height",t.$el.$input.scrollHeight-20+"px");});},setInputChangeSaveEvent(){const t=this;r.on(this.$el.$input,["input","propertychange"],e=>{let n=t.$el.$input.value,s=t.$el.$input.closest(".reply_area").querySelector(".reply_user_content").getAttribute("data-reply-url"),l={url:window.location.href,text:n,repquote:s?F.getRepquote(s):undefined,forumId:t.$data.tid};t.$data.db.get("data").then(o=>{if(!o.success||o.code===201){console.warn(o);return}let a=o.data.findIndex(c=>c.forumId===l.forumId&&c.repquote===l.repquote);a!==-1?n==null||n===""?o.data.splice(a,1):o.data[a]=g.assign(o.data[a],{text:l.text}):o.data.push(l),t.$data.db.save("data",o.data).then(c=>{});});});},async initReplyText(t=false,e=undefined){const n=this;(await this.$data.db.get("data")).code===201&&await this.$data.db.save("data",[]);let s=await this.$data.db.get("data");if(!s.success||s.code===201){console.warn(s);return}let l;e&&(l=F.getRepquote(e));let o=s.data.find(a=>t?a.forumId===n.$data.tid&&a.repquote==l:a.forumId===n.$data.tid&&a.repquote==null);o&&(r.val(this.$el.$input,o.text),g.dispatchEvent(this.$el.$input,"input"));},setLikeBtnClickEvent(){r.on(this.$el.$like,"click",async t=>{var l,o;if(g.preventEvent(t),y.comiis_recommend_key==0){y.comiis_recommend_key=1;let a=await H.get(this.$el.$like.href+"&inajax=1",{headers:{Accept:"application/xml, text/xml, */*; q=0.01"},fetch:true,allowInterceptConfig:false});if(!a.status){window.location.href=this.$el.$like.href,setTimeout(function(){y.comiis_recommend_key=0;},500);return}let m=(o=(l=g.parseFromString(a.data.responseText,"text/xml").lastChild)==null?undefined:l.firstChild)==null?undefined:o.nodeValue;if(m.includes("您已评价过本主题")){let d=this.$el.$like.href.match(X.tid)[1];if(!(await H.get(`plugin.php?id=comiis_app&comiis=re_recommend&tid=${d}&inajax=1`,{headers:{Accept:"application/xml, text/xml, */*; q=0.01"},fetch:true,allowInterceptConfig:false})).status){x.error("取消点赞失败，网络异常");return}var e=Number(r.text("#comiis_recommend_num"));document.querySelectorAll(".comiis_recommend_list_a").length>0&&r.remove("#comiis_recommend_list_a"+y.uid),document.querySelectorAll(".comiis_recommend_list_s").length>0&&r.remove("#comiis_recommend_list_s"+y.uid),document.querySelectorAll(".comiis_recommend_list_t").length>0&&r.remove("#comiis_recommend_list_t"+y.uid),e>1?(r.text(".comiis_recommend_num",e-Number(y.allowrecommend)),r.text(".comiis_recommend_nums","+"+(e-Number(y.allowrecommend)))):(r.remove("#comiis_recommend_num"),r.text(".comiis_recommend_nums",""),document.querySelectorAll(".comiis_recommend_list_a").length>0&&(r.empty(".comiis_recommend_list_a"),r.removeClass(".comiis_recommend_list_a","comiis_recommend_list_on")),document.querySelectorAll(".comiis_recommend_list_t").length>0&&r.removeClass(".comiis_recommend_list_t","comiis_recommend_list_on")),r.html(".comiis_recommend_addkey i","&#xe63b;"),r.removeClass(".comiis_recommend_color","f_a"),r.addClass(".comiis_recommend_color","f_b"),document.querySelectorAll(".comiis_recommend_list_s").length>0&&(document.querySelectorAll(".comiis_recommend_list_s li").length<7?r.hide(".txshow_more",false):r.show(".txshow_more",false)),x.success("已取消点赞");}else if(m.includes("您不能评价自己的帖子"))x.error("不能点赞自己的帖子");else if(m.includes("今日评价机会已用完"))x.warning("您今日的点赞机会已用完");else if(m.includes("'recommendv':'+"+y.allowrecommend+"'")){var n={recommendc:0,daycount:0},i;i=m.match(/\'recommendc\':\'(.*?)\'/),i!=null?n.recommendc=parseInt(i[1]):n.recommendc=0,i=m.match(/\'daycount\':\'(.*?)\'/),i!=null?n.daycount=parseInt(i[1]):n.daycount=0,document.querySelectorAll(".comiis_recommend_new span").length<1&&r.append(".comiis_recommend_new",'<span class="bg_del f_f comiis_kmvnum comiis_recommend_num" id="comiis_recommend_num">0</span>');var s=Number(r.text("#comiis_recommend_num"));if(N(".comiis_recommend_list_a").length>0){let d=N(".comiis_recommend_list_a");r.removeClass(d,"comiis_recommend_list_on"),r.addClass(d,"comiis_recommend_list_on"),r.prepend(d,(N(".comiis_recommend_list_a li").length>0?"":'<li style="float:right;margin-right:0;"><a href="misc.php?op=recommend&tid= '+y.tid+'&mod=faq&mobile=2"><span class="bg_b f_c"><em class="comiis_recommend_num">'+s+"</em>赞</span></a></li>")+'<li id="comiis_recommend_list_a'+y.uid+'"><a href="home.php?mod=space&uid='+y.uid+'"><img src="'+F.getAvatar(y.uid,"small")+'"></a></li>');}if(N(".comiis_recommend_list_t").length>0){let d=N(".comiis_recommend_list_t");r.removeClass(d,"comiis_recommend_list_on"),r.addClass(d,"comiis_recommend_list_on"),r.prepend(d,`<span id="comiis_recommend_list_t${y.uid}">
                          							<a href="home.php?mod=space&uid=${y.uid}" class="f_c">${y.username}</a>
													${N(".comiis_recommend_list_t a").length>0?'<span class="f_d"> , </span>':""}
                        						</span>`);}if(N(".comiis_recommend_list_s").length>0){let d=N(".comiis_recommend_list_s");r.removeClass(d,"comiis_recommend_list_on"),r.addClass(d,"comiis_recommend_list_on"),r.prepend(d,(N(".comiis_recommend_list_s li").length>0,""+'<li id="comiis_recommend_list_s'+y.uid+'"><a href="home.php?mod=space&uid='+y.uid+'"><img loading="lazy" src="'+F.getAvatar(y.uid,"small")+'"></a></li>'));}r.text(".comiis_recommend_num",s+Number(y.allowrecommend)),r.text(".comiis_recommend_nums","+"+(s+Number(y.allowrecommend))),r.html(".comiis_recommend_addkey i","&#xe654;"),r.removeClass(".comiis_recommend_color","f_b"),r.addClass(".comiis_recommend_color","f_a"),N(".comiis_recommend_list_s").length>0&&(N(".comiis_recommend_list_s li").length<7?r.hide(".txshow_more",false):r.show(".txshow_more",false)),x.success("点赞成功"+(n.daycount?`, 您今天还能点赞 ${n.daycount-1} 次`:""));}else m.indexOf("window.location.href = 'member.php?mod=logging&action=login&mobile=2'")>=0?window.location.href="member.php?mod=logging&action=login&mobile=2":x.error("没有点赞权限或帖子不存在");setTimeout(function(){y.comiis_recommend_key=0;},500);}return  false});},setSubmitBtnClickEvent(){const t=this;r.on(this.$el.$fastpostsubmit,"click",async e=>{var s,l,o,a,c,m;g.preventEvent(e);var n=C("#needmessage"),i=r.val(n);if(i=encodeURIComponent(i),!(i==null||i==="")){if(r.val(t.$el.$fastpostsubmit)=="发表"){let d=x.loading("发表中，请稍后..."),u="message="+i;N("#imglist input[type='hidden']").forEach(k=>{let q=k.getAttribute("name");u+=`&${q}=`;}),u=r.serialize(t.$el.$form)+"&"+u;let f=t.$data.forum_action+"reply&handlekey=fastpost&loc=1&inajax=1",p=await H.post(f,{data:u,fetch:true,allowInterceptConfig:false,headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(d.close(),!p.status){x.error("发表失败，网络异常");return}let _=(l=(s=g.parseFromString(p.data.responseText,"text/xml").lastChild)==null?undefined:s.firstChild)==null?undefined:l.nodeValue;if(y.evalscript(_),this.handle_error(_))return;window.scrollTo({top:r.height(document)}),r.val("#needmessage",""),(o=C("#comiis_head"))==null||o.click(),r.hide("#comiis_foot_menu_beautify_big .reply_user_content",false),r.attr('#comiis_foot_menu_beautify_big li[data-attr="发表"] input',"data-text","false"),r.attr("#comiis_foot_menu_beautify li[data-attr='回帖'] input","placeholder","发帖千百度，文明第一步"),this.deleteReplyTextStorage();}else {let d=r.attr("#comiis_foot_menu_beautify_big .reply_user_content","data-reply-serialize")+i;N("#imglist input[type='hidden']").forEach(_=>{d=`${d}&${_.getAttribute("name")}=`;});let u=r.attr("#comiis_foot_menu_beautify_big .reply_user_content","data-reply-action"),f=await H.post(u+"&handlekey=fastposts&loc=1&inajax=1",{allowInterceptConfig:false,fetch:true,data:d,headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(!f.status){x.error("回复失败，网络异常");return}let h=(c=(a=g.parseFromString(f.data.responseText,"text/xml").lastChild)==null?undefined:a.firstChild)==null?undefined:c.nodeValue;if(b.info(h),y.evalscript(h),this.handle_error(h))return;(m=C(h))==null||m.click(),r.val("#needmessage",""),C("#comiis_head").click(),r.val('#comiis_foot_menu_beautify_big li[data-attr="发表"] input',"发表"),r.attr('#comiis_foot_menu_beautify_big li[data-attr="发表"] input',"data-text","false"),r.attr("#comiis_foot_menu_beautify li[data-attr='回帖'] input","placeholder","发帖千百度，文明第一步"),window.scrollTo({top:r.height(document)}),this.deleteReplyTextStorage(true,u);}return  false}});},setGlobalReplyBtnClickEvent(){r.on(document,"click",'.comiis_postli_times .dialog[href*="reply"]',async t=>{var u,f,p,h;g.preventEvent(t);let e=t.target;r.attr("#comiis_foot_menu_beautify_big","data-model","reply");let n=await H.get(r.attr(e,"datahref")||e.href+"&inajax=1",{fetch:true,allowInterceptConfig:false});if(!n.status){x.error("网络异常，获取回复参数失败");return}let s=(f=(u=g.parseFromString(n.data.responseText,"text/xml").lastChild)==null?undefined:u.firstChild)==null?undefined:f.nodeValue;if(this.handle_error(s))return;let l=r.parseHTML(`<div>${s}</div>`,true,false),o=(p=l.querySelector(".comiis_tip .tip_tit a"))==null?undefined:p.getAttribute("href"),a=r.text(l.querySelector(".comiis_tip span.f_0")),c=r.val(l.querySelector("input[name='noticeauthormsg']")),m=r.attr(l.querySelector("#postforms"),"action"),d=r.serialize(l.querySelector("#postforms"));r.text("#comiis_foot_menu_beautify_big .reply_user_content",`回复 ${a}: ${c}`),r.show("#comiis_foot_menu_beautify_big .reply_user_content",false),(h=C("#comiis_foot_menu_beautify li[data-attr='回帖'] input"))==null||h.click(),r.focus("#comiis_foot_menu_beautify li[data-attr='回帖'] input"),r.val("#fastpostsubmitline input","回复"),r.attr("#comiis_foot_menu_beautify_big .fastpostform_new a","href",o),r.attr("#comiis_foot_menu_beautify_big .reply_user_content","data-reply-url",o),r.attr("#comiis_foot_menu_beautify_big .reply_user_content","data-reply-action",m),r.attr("#comiis_foot_menu_beautify_big .reply_user_content","data-reply-serialize",d),yt=e,r.val("#needmessage",r.attr(e,"data-text")||""),$.execMenu("mt-forum-post-editorOptimizationNormal-recordInputText",()=>{this.initReplyText(true,o);});},{capture:true});},setGlobalClickCheckEvent(){const t=this;let e=C("#fastpostform .header_y a").href;r.on(document,"click",function(n){var s;let i=n.target;if(C(".popups-popmenu")||tt.$data.isUBBCodeInsertClick){b.info("点击的是弹出层，不做处理"),tt.$data.isUBBCodeInsertClick=false;return}else i!=null&&i.classList&&((s=i==null?undefined:i.classList)!=null&&s.contains(".dialog_reply"))||i!=null&&i.closest&&(i!=null&&i.closest(".dialog_reply"))||i===C('li[data-attr="回帖"] input')?(b.info("点击回复按钮或者是编辑器，显示编辑器"),r.hide("#comiis_foot_menu_beautify",false),r.show("#comiis_foot_menu_beautify_big",false),r.focus("#needmessage")):window.event&&!g.checkUserClickInNode(C("#comiis_foot_menu_beautify_big"))&&(b.info("点击的其它区域，隐藏大编辑器，显示小编辑器"),r.show("#comiis_foot_menu_beautify",false),r.hide("#comiis_foot_menu_beautify_big",false),r.attr("#comiis_foot_menu_beautify_big","data-model")=="reply"&&(r.attr("#comiis_foot_menu_beautify_big","data-model","comment"),r.val("#fastpostsubmitline input","发表"),r.attr("#comiis_foot_menu_beautify_big .fastpostform_new a","href",e),r.text("#comiis_foot_menu_beautify_big .reply_area .reply_user_content"),r.hide("#comiis_foot_menu_beautify_big .reply_area .reply_user_content",false),r.attr("#comiis_foot_menu_beautify_big .reply_area .reply_user_content","data-reply-url",""),r.attr("#comiis_foot_menu_beautify_big .reply_area .reply_user_content","data-reply-action",""),r.attr("#comiis_foot_menu_beautify_big .reply_area .reply_user_content","data-reply-serialize",""),yt&&(r.attr(yt,"data-text",r.val("#needmessage")),r.val("#needmessage",""),r.attr('#comiis_foot_menu_beautify_big li[data-attr="发表"] input',"data-text","false"),r.attr("#comiis_foot_menu_beautify li[data-attr='回帖'] input","placeholder","发帖千百度，文明第一步"))),r.val(t.$el.$input)===""&&$.execMenu("mt-forum-post-editorOptimizationNormal-recordInputText",()=>{t.initReplyText();}));});},setMenuIconToggleEvent(){r.on("#comiis_foot_menu_beautify_big .menu_icon a i","click",function(t){let e=this;e.classList.contains("f_0")?(r.hide("#comiis_foot_menu_beautify_big .menu_body",false),r.removeClass("#comiis_foot_menu_beautify_big .menu_icon a i","f_0")):(r.show("#comiis_foot_menu_beautify_big .menu_body",false),r.removeClass("#comiis_foot_menu_beautify_big .menu_icon a i","f_0"),r.addClass(e,"f_0"));});},setMenuImageClickEvent(){r.on("#comiis_foot_menu_beautify_big .menu_icon a.comiis_pictitle","click",function(t){r.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_post_tab",false),r.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab",false),r.show("#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab",false);});},setMenuImageToggleEvent(){r.on("#comiis_foot_menu_beautify_big #comiis_pictitle_tab #comiis_pictitle_key","click","li",function(t){let e=t.target;r.removeClass("#comiis_foot_menu_beautify_big #comiis_pictitle_tab #comiis_pictitle_key li","bg_f"),r.addClass(e,"bg_f"),y.$("#comiis_foot_menu_beautify_big #comiis_pictitle_tab div.comiis_upbox").hide().eq(y.$(e).index()).fadeIn();});},setMenuSmileClickEvent(){r.on("#comiis_foot_menu_beautify_big .menu_icon a.comiis_smile","click",function(t){r.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab",false),r.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab",false),r.show("#comiis_foot_menu_beautify_big .menu_body #comiis_post_tab",false);let e=C("#comiis_foot_menu_beautify_big .menu_body .comiis_bqbox");r.attr(e,"data-isLoaded")!=1&&(r.attr(e,"data-isLoaded",1),e.querySelectorAll("img").forEach(n=>{let i=n.getAttribute("data-src");i&&n.setAttribute("src",i);}));});},setMenuSmileTabClickEvent(){r.on("#comiis_foot_menu_beautify_big #comiis_smilies_key li","click",function(t){let e=this;r.removeClass("#comiis_foot_menu_beautify_big #comiis_smilies_key li a"),r.addClass(e.querySelector("a"),"bg_f b_l b_r"),y.$("#comiis_post_tab div.swiper-wrapper.bqbox_c.comiis_optimization .swiper-slide").hide().eq(y.$(e).index()).fadeIn();});},setMenuInsertClickEvent(){r.on("#comiis_foot_menu_beautify_big .menu_icon a.commis_insert_bbs","click",t=>{r.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_post_tab",false),r.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab",false),r.show("#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab",false);});},async getReplyRecordSize(){var e;let t=await this.$data.db.get("data");return t.success?g.getTextStorageSize((e=t==null?undefined:t.data)!=null&&e.length?JSON.stringify(t.data):""):g.formatByteToSize(0)},async clearAllReplyRecord(){return await this.$data.db.deleteAll()},deleteReplyTextStorage(t=false,e=undefined){const n=this;this.$data.db.get("data").then(i=>{if(!i.success||i.code===201){console.warn(i);return}let s=i.data.findIndex(l=>t?l.forumId===n.$data.tid&&e&&l.repquote===F.getRepquote(e):l.forumId===n.$data.tid&&g.isNull(l.repquote));s!==-1&&(i.data.splice(s,1),this.$data.db.save("data",i.data).then(l=>{}));});},setMenuQuickUBB(){let t=C("#comiis_insert_ubb_tab_list"),e=Ut();Reflect.set(e,"code",{key:"代码",value:"[code][/code]",tagL:"]",tagR:"[",L:"[code]",R:"[/code]",cursorL:"[code]",cursorLength:7,quickUBBReplace:"[code]replace[/code]"}),Reflect.set(e,"password",{key:"密码",value:"[password][/password]",tagL:"]",tagR:"[",L:"[password]",R:"[/password]",cursorL:"[password]",cursorLength:10,quickUBBReplace:"[password]replace[/password]"}),Object.keys(e).forEach(n=>{let i=e[n],s=r.createElement("li",{className:"quickUBBs",innerHTML:`
                    <a href="javascript:;" class="comiis_xifont f_d">
                        <i class="comiis_font"></i>${i.key}
                    </a>
                `});r.on(s,"click",l=>{r.removeClass("#comiis_insert_ubb_tab div.comiis_post_urlico ul li.quickUBBs a.comiis_xifont","f_0"),r.addClass("#comiis_insert_ubb_tab div.comiis_post_urlico ul li.quickUBBs a.comiis_xifont","f_d");let o=s.querySelector(".comiis_xifont");r.removeClass(o,"f_d"),r.removeClass(o,"f_d");let a=B.prompt({title:{text:"UBB代码",position:"center"},content:{text:"",placeholder:`请输入需要${i.key}的文字`,focus:true},btn:{ok:{text:"插入",type:"primary",callback:c=>{if(c.text.trim()===""){x.error("输入框不能为空或纯空格");return}i.isFunc?y.comiis_addsmilies(Nt(i.num,c.text)):i.quickUBBReplace?y.comiis_addsmilies(i.quickUBBReplace.replaceAll("replace",c.text)):y.comiis_addsmilies(c.text),a.close();}},cancel:{text:"关闭",callback:()=>{a.close();}}},width:"300px",height:"200px"});}),t.append(s);});}},re=`.f_c,\r
.f_c a,\r
.ntc_body {\r
	color: #000 !important;\r
}\r
input::placeholder,\r
textarea::placeholder {\r
	color: #cfcfcf;\r
}\r
#needsubject::placeholder {\r
	font-weight: 700;\r
}\r
#postform #comiis_mh_sub {\r
	height: 60px;\r
	display: flex;\r
	align-items: center;\r
}\r
#postform #comiis_post_tab {\r
	display: inherit;\r
	width: 100%;\r
}\r
#postform .comiis_sendbtn {\r
	padding: 0 12px;\r
	display: flex !important;\r
	-webkit-box-align: center;\r
	-moz-box-align: center;\r
	align-items: center;\r
}\r
#postform .f_f {\r
	color: #fff !important;\r
}\r
#postform #comiis_post_tab .bg_f.b_b.cl:nth-child(2) .comiis_atlist a:hover,\r
#postform #comiis_post_tab .bg_f.b_b.cl:nth-child(2) .comiis_atlist a:link,\r
#postform #comiis_post_tab .bg_f.b_b.cl:nth-child(2) .comiis_atlist a:visited {\r
	color: #333 !important;\r
}\r
#postform .comiis_post_from .comiis_post_ico.comiis_minipost_icot {\r
	position: fixed;\r
	display: inline-table;\r
	z-index: 90;\r
	left: 0;\r
	right: 0;\r
	bottom: 0;\r
	width: 100%;\r
	overflow: hidden;\r
	padding: 0;\r
}\r
#postform .comiis_post_from #comiis_post_tab .comiis_bqbox {\r
	height: 200px;\r
}\r
#postform .comiis_post_from #comiis_post_tab .comiis_smiley_box {\r
	height: 150px;\r
}\r
#postform\r
	.comiis_post_from\r
	#comiis_post_tab\r
	.comiis_input_style\r
	.comiis_post_urlico {\r
	overflow-y: auto;\r
	height: 110px;\r
}\r
#postform\r
	.comiis_post_from\r
	#comiis_post_tab\r
	.comiis_smiley_box\r
	.comiis_optimization {\r
	display: block;\r
	overflow-y: auto;\r
	height: 100%;\r
}\r
#postform #comiis_post_tab .comiis_input_style .comiis_xifont {\r
	width: -webkit-fill-available;\r
	width: -moz-available;\r
}\r
#postform #comiis_post_tab .comiis_input_style .comiis_xifont i.comiis_font {\r
	font-size: 16px;\r
	line-height: inherit;\r
	padding-top: 0;\r
}\r
#postform #comiis_post_tab .comiis_input_style .styli_h10 {\r
	display: none;\r
}\r
.gm_plugin_chartbed .comiis_chartbed_hello,\r
.gm_plugin_chartbed .comiis_chartbed_history,\r
.gm_plugin_chartbed .comiis_chartbed_kggzs,\r
.gm_plugin_chartbed .comiis_chartbed_luntan,\r
.gm_plugin_chartbed .comiis_chartbed_mt,\r
.gm_plugin_chartbed .comiis_chartbed_z4a {\r
	height: 140px;\r
	overflow-y: auto;\r
	flex-direction: column;\r
}\r
#comiis_pictitle_key {\r
	display: -webkit-box;\r
	top: 0;\r
	left: 0;\r
	height: 42px;\r
	line-height: 42px;\r
	overflow: hidden;\r
	overflow-x: auto;\r
	background: #f8f8f8;\r
}\r
#comiis_pictitle_key a {\r
	color: #333 !important;\r
	padding: 0 10px;\r
}\r
#comiis_mh_sub {\r
	height: auto !important;\r
}\r
#comiis_mh_sub .swiper-wrapper.comiis_post_ico {\r
	flex-flow: wrap;\r
}\r
#comiis_mh_sub a {\r
	margin: 5px 0;\r
}\r
#comiis_post_tab .comiis_over_box {\r
	max-height: 225px;\r
}\r
@media screen and (max-width: 350px) {\r
	.comiis_bqbox .bqbox_c li {\r
		width: 14.5%;\r
	}\r
}\r
@media screen and (min-width: 350px) and (max-width: 400px) {\r
	.comiis_bqbox .bqbox_c li {\r
		width: 12.5%;\r
	}\r
}\r
@media screen and (min-width: 400px) and (max-width: 450px) {\r
	.comiis_bqbox .bqbox_c li {\r
		width: 11%;\r
	}\r
}\r
@media screen and (min-width: 450px) and (max-width: 500px) {\r
	.comiis_bqbox .bqbox_c li {\r
		width: 10%;\r
	}\r
}\r
@media screen and (min-width: 500px) and (max-width: 550px) {\r
	.comiis_bqbox .bqbox_c li {\r
		width: 9.5%;\r
	}\r
}\r
@media screen and (min-width: 550px) and (max-width: 600px) {\r
	.comiis_bqbox .bqbox_c li {\r
		width: 9%;\r
	}\r
}\r
@media screen and (min-width: 600px) and (max-width: 650px) {\r
	.comiis_bqbox .bqbox_c li {\r
		width: 8.5%;\r
	}\r
}\r
@media screen and (min-width: 650px) and (max-width: 700px) {\r
	.comiis_bqbox .bqbox_c li {\r
		width: 8%;\r
	}\r
}\r
@media screen and (min-width: 700px) and (max-width: 750px) {\r
	.comiis_bqbox .bqbox_c li {\r
		width: 7.5%;\r
	}\r
}\r
@media screen and (min-width: 750px) and (max-width: 800px) {\r
	.comiis_bqbox .bqbox_c li {\r
		width: 7%;\r
	}\r
}\r
@media screen and (min-width: 800px) and (max-width: 850px) {\r
	.comiis_bqbox .bqbox_c li {\r
		width: 6.5%;\r
	}\r
}\r
@media screen and (min-width: 850px) and (max-width: 1200px) {\r
	.comiis_bqbox .bqbox_c li {\r
		width: 6%;\r
	}\r
}\r
@media screen and (min-width: 1200px) {\r
	.comiis_bqbox .bqbox_c li {\r
		width: 4.5%;\r
	}\r
}\r
\r
#comiis_head .header_y {\r
	display: flex;\r
	align-content: center;\r
	align-items: center;\r
	justify-content: flex-end;\r
	height: 100%;\r
}\r
#comiis_head .header_y input {\r
	border: transparent;\r
	background: 0 0;\r
	text-align: center;\r
	margin: 0 5px;\r
}\r
#comiis_head .header_y input[value="删除"] {\r
	color: #d00;\r
}\r
#comiis_head .header_y input[value="保存"] {\r
	color: #b0ff6a;\r
}\r
#comiis_head .header_y input[value="保存草稿"] {\r
	color: #f90;\r
}\r
#comiis_head .header_y input[value="发表"] {\r
	color: #b0ff6a;\r
}\r
#comiis_head .header_y input[value="回复"] {\r
	color: #b0ff6a;\r
}\r
#comiis_post_tab {\r
	color: #000;\r
}\r
.gm_plugin_chartbed .delImg a,\r
.gm_plugin_chartbed .p_img a {\r
	padding: 0;\r
}\r
.gm_plugin_chartbed .delImg a i {\r
	line-height: inherit;\r
}\r
#filedata,\r
#filedata_hello,\r
#filedata_kggzs,\r
#filedata_mt {\r
	display: none;\r
}\r
\r
#comiis_mh_sub {\r
	height: 40px;\r
}\r
#imglist .del a {\r
	padding: 0;\r
}\r
.comiis_post_from.mt15 {\r
	margin-top: unset !important;\r
}\r
`,K=globalThis.location.pathname,Q=globalThis.location.search;new URLSearchParams(Q);const M={isKMiSign(){return K.startsWith("/k_misign-sign.html")},isPost(){return K.startsWith("/thread-")||K.startsWith("/forum.php")&&Q.startsWith("?mod=viewthread")},isPage(){return !!K.match(/^\/page-([0-9]+).html/g)},isGuide(){return K.startsWith("/forum.php")&&Q.startsWith("?mod=guide")},isPlate(){return !!K.match(/\/forum-[0-9]{1,2}-[0-9]{1,2}.html/g)},isSearch(){return K.startsWith("/search.php")},isSpace(){return K.startsWith("/home.php")&&Q.startsWith("?mod=space")},isMySpace(){return K.startsWith("/home.php")&&Q.startsWith("?mod=space&do=profile&mycenter")},isSpaceWithAt(){return K.startsWith("/space-uid-")},isForumList(){return K.startsWith("/forum.php")&&Q.startsWith("?forumlist")},isMessage(){return K.startsWith("/home.php")&&Q.startsWith("?mod=space&do=notice")},isMessageList(){return K.startsWith("/home.php")&&Q.startsWith("?mod=space&do=pm")},isPointsMall(){return K.startsWith("/keke_integralmall-keke_integralmall.html")||K.startsWith("/plugin.php")&&Q.startsWith("?id=keke_integralmal")},isPostPublish(){return K.startsWith("/forum.php")&&Q.startsWith("?mod=post")},isPostPublish_voting(){return K.startsWith("/forum.php")&&Q.includes("&special=1")||Q.includes("&fid=42")},isPostPublish_edit(){return this.isPostPublish()&&Q.includes("&action=edit")},isPostPublish_newthread(){return this.isPostPublish()&&Q.includes("&action=newthread")},isPostPublish_reply(){return this.isPostPublish()&&Q.includes("&action=reply")}},le=()=>({"[呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq001.gif","[撇嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq002.gif","[色]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq003.gif","[发呆]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq004.gif","[得意]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq005.gif","[流泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq006.gif","[害羞]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq007.gif","[闭嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq008.gif","[睡]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq009.gif","[大哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq010.gif","[尴尬]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq011.gif","[发怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq012.gif","[调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq013.gif","[呲牙]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq014.gif","[惊讶]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq015.gif","[难过]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq016.gif","[酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq017.gif","[冷汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq018.gif","[抓狂]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq019.gif","[吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq020.gif","[偷笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq021.gif","[可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq022.gif","[白眼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq023.gif","[傲慢]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq024.gif","[饥饿]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq025.gif","[困]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq026.gif","[惊恐]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq027.gif","[流汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq028.gif","[憨笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq029.gif","[装逼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq030.gif","[奋斗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq031.gif","[咒骂]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq032.gif","[疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq033.gif","[嘘]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq034.gif","[晕]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq035.gif","[折磨]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq036.gif","[衰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq037.gif","[骷髅]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq038.gif","[敲打]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq039.gif","[再见]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq040.gif","[擦汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq041.gif","[抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq042.gif","[鼓掌]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq043.gif","[糗大了]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq044.gif","[坏笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq045.gif","[左哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq046.gif","[右哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq047.gif","[哈欠]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq048.gif","[鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq049.gif","[委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq050.gif","[快哭了]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq051.gif","[阴脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq052.gif","[亲亲]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq053.gif","[吓]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq054.gif","[可怜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq055.gif","[眨眼睛]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq056.gif","[笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq057.gif","[dogeQQ]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq058.gif","[泪奔]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq059.gif","[无奈]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq060.gif","[托腮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq061.gif","[卖萌]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq062.png","[斜眼笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq063.gif","[喷血]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq064.gif","[惊喜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq065.gif","[骚扰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq066.gif","[小纠结]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq067.gif","[我最美]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq068.gif","[菜刀]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq069.gif","[西瓜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq070.gif","[啤酒]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq071.gif","[篮球]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq072.gif","[乒乓]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq073.gif","[咖啡]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq074.gif","[饭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq075.gif","[猪]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq076.gif","[玫瑰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq077.gif","[凋谢]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq078.gif","[示爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq079.gif","[爱心]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq080.gif","[心碎]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq081.gif","[蛋糕]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq082.gif","[闪电]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq083.gif","[炸弹]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq084.gif","[刀]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq085.gif","[足球]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq086.gif","[瓢虫]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq087.gif","[便便]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq088.gif","[月亮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq089.gif","[太阳]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq090.gif","[礼物]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq091.gif","[抱抱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq092.gif","[喝彩]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq93.gif","[祈祷]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq94.gif","[棒棒糖]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq95.gif","[药]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq96.gif","[赞]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq097.gif","[差劲]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq098.gif","[握手]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq099.gif","[胜利]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq100.gif","[抱拳]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq101.gif","[勾引]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq102.gif","[拳头]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq103.gif","[爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq105.gif","[NO]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq106.gif","[OK]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq107.gif","[#呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_1.png","[#滑稽]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_10.png","[#吐舌]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_3.png","[#哈哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_2.png","[#啊]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_23.png","[#酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_22.png","[#怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_13.png","[#开心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_39.png","[#汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_14.png","[#泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_16.png","[#黑线]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_15.png","[#鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_21.png","[#不高兴]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_12.png","[#真棒]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_17.png","[#钱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_40.png","[#疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_26.png","[#阴险]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_20.png","[#吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_34.png","[#咦]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_41.png","[#委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_29.png","[#花心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_6.png","[#呼～]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_42.png","[#激动]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_5.png","[#冷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_43.png","[#可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_4.png","[#What？]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_25.png","[#勉强]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_38.png","[#狂汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_24.png","[#酸爽]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_27.png","[#乖]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_8.png","[#雅美蝶]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_28.png","[#睡觉]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_31.png","[#惊哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_19.png","[#哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_44.png","[#笑尿]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_32.png","[#惊讶]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_30.png","[#小乖]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_7.png","[#喷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_18.png","[#抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_33.png","[#捂嘴笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_9.png","[#你懂的]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_11.png","[#犀利]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_35.png","[#小红脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_36.png","[#懒得理]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_37.png","[#爱心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_45.png","[#心碎]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_46.png","[#玫瑰]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_47.png","[#礼物]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_48.png","[#彩虹]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_49.png","[#太阳]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_50.png","[#月亮]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_51.png","[#钱币]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_52.png","[#咖啡]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_53.png","[#蛋糕]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_54.png","[#大拇指]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_55.png","[#胜利]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_56.png","[#爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_57.png","[#OK]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_58.png","[#弱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_59.png","[#沙发]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_60.png","[#纸巾]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_61.png","[#香蕉]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_62.png","[#便便]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_63.png","[#药丸]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_64.png","[#红领巾]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_65.png","[#蜡烛]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_66.png","[#三道杠]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_67.png","[#音乐]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_68.png","[#灯泡]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_69.png","[doge]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/1.png","[doge思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/2.png","[doge再见]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/3.png","[doge生气]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/4.png","[doge气哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/5.png","[doge笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/7.png","[doge调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/6.png","[doge啊哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/8.png","[doge原谅TA]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/9.png","[miao]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/10.png","[miao思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/11.png","[miao拜拜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/12.png","[miao生气]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/13.png","[miao气哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/14.png","[二哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/15.png","[摊手]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/19.png","[w并不简单]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/20.png","[w滑稽]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/21.png","[w色]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/22.png","[w爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/23.png","[w拜拜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/24.png","[w悲伤]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/25.png","[w鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/26.png","[w馋嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/27.png","[w冷汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/28.png","[w打哈欠]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/29.png","[w打脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/30.png","[w敲打]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/31.png","[w生病]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/32.png","[w闭嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/33.png","[w鼓掌]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/34.png","[w哈哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/35.png","[w害羞]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/36.png","[w呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/37.png","[w黑线]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/38.png","[w哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/39.png","[w调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/40.png","[w可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/41.png","[w可怜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/42.png","[w酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/43.png","[w困]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/44.png","[w懒得理你]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/45.png","[w流泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/46.png","[w怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/47.png","[w怒骂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/48.png","[w钱]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/49.png","[w亲亲]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/50.png","[w傻眼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/51.png","[w便秘]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/52.png","[w失望]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/53.png","[w衰]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/54.png","[w睡觉]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/55.png","[w思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/56.png","[w开心]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/57.png","[w色舔]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/58.png","[w偷笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/59.png","[w吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/60.png","[w抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/61.png","[w委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/62.png","[w笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/63.png","[w嘻嘻]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/64.png","[w嘘]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/65.png","[w阴险]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/66.png","[w疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/67.png","[w抓狂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/70.png","[w晕]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/69.png","[w右哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/68.png","[w左哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/71.png","[w肥皂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/77.png","[w奥特曼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/78.png","[w草泥马]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/79.png","[w兔子]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/80.png","[w熊猫]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/81.png","[w猪头]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/82.png","[w→_→]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/83.png","[w给力]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/84.png","[w囧]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/85.png","[w萌]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/86.png","[w神马]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/87.png","[w威武]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/88.png"}),xt={parseText(t){const e=le();let n=t.match(/\[attachimg\]([\s\S]+?)\[\/attachimg\]/g);n&&n.forEach(v=>{let w=v.match(/\[attachimg\]([\s\S]+?)\[\/attachimg\]/),T=w?w[w.length-1]:"",P=r.attr(`#aimg_${T}`,"title"),U=r.attr(`#aimg_${T}`,"src");U||(P="该图片不存在"),t=t.replace(v,`<span class="comiis_postimg vm"><img loading="lazy" id="aimg_${T}" src="${U}" alt="${P}" title="${P}"></span>`);});let i=t.match(/\[code\]([\s\S]*?)\[\/code\]/g);i&&i.forEach(v=>{let w=v.match(/\[code\]([\s\S]*?)\[\/code\]/),T=w?w[w.length-1]:"",P="",U=T.split(`
`);U.length==1?P=`<li>${T}</li>`:Array.from(U).forEach((J,ot)=>{ot==U.length-1?P=`${P}<li>${J}</li>`:P=`${P}<li>${J}<br></li>`;}),t=t.replace(v,`
                <div class="comiis_blockcode comiis_bodybg b_ok f_b"><div class="bg_f b_l"><ol>${P}</ol></div></div>`);});let s=t.match(/\[url\=[\s\S]*?\]([\s\S]*?)\[\/url\]/g);s&&s.forEach(v=>{let w=v.match(/\[url=([\s\S]*?)\][\s\S]*\[\/url\]/),T=v.match(/\[url=[\s\S]*?\]([\s\S]*?)\[\/url\]/),P=w?w[w.length-1]:"",U=T?T[T.length-1]:"";t=t.replace(v,`<a href="${P}" target="_blank">${U}</a>`);});let l=t.match(/\[color\=[\s\S]*?\]([\s\S]*?)\[\/color\]/g);l&&l.forEach(v=>{let w=v.match(/\[color=([\s\S]*?)\][\s\S]*\[\/color\]/),T=v.match(/\[color=[\s\S]*?\]([\s\S]*?)\[\/color\]/),P=w?w[w.length-1]:"",U=T?T[T.length-1]:"";t=t.replace(v,`<font color="${P}">${U}</font>`);});let o=t.match(/\[size\=[\s\S]*?\]([\s\S]*?)\[\/size\]/g);o&&o.forEach(v=>{let w=v.match(/\[size=([\s\S]*?)\][\s\S]*\[\/size\]/),T=v.match(/\[size=[\s\S]*?\]([\s\S]*?)\[\/size\]/),P=w?w[w.length-1]:"",U=T?T[T.length-1]:"";t=t.replace(v,`<font size="${P}">${U}</font>`);});let a=t.match(/\[img(|\=[\s\S]+?)\]([\s\S]*?)\[\/img\]/g);a&&a.forEach(v=>{let w=null,T=null,P=v.match(/\[img\=([\s\S]+?)\][\s\S]*?\[\/img\]/);P&&(P=P[P.length-1].split(","),w=P[0],T=P[1]),w=w||"",T=T||"";let U=v.match(/\[img\]([\s\S]*?)\[\/img\]|\[img=[\s\S]*?\]([\s\S]*?)\[\/img\]/),J="";U&&(U[U.length-1]==null?J=U[U.length-2]:J=U[U.length-1]),t=t.replace(v,`<img loading="lazy" src="${J}" border="0" alt="" width="${w}" height="${T}" crossoriginNew="anonymous">`);});let c=t.match(/\[hide\]([\s\S]*?)\[\/hide\]/g);c&&c.forEach(v=>{let w=v.match(/\[hide\]([\s\S]*?)\[\/hide\]/),T=w?w[w.length-1]:"";t=t.replace(v,`<div class="comiis_quote bg_h f_c"><h2 class="f_a">本帖隐藏的内容: </h2>${T}</div>`);});let m=t.match(/\[hide=[\s\S]*?\]([\s\S]*?)\[\/hide\]/g);m&&m.forEach(v=>{let w=v.match(/\[hide=([\s\S]*?)\]([\s\S]*?)\[\/hide\]/),T=w?w[w.length-2]:"";T=T.split(",");let P=T.length==2?T[1]:"";t=t.replace(v,`<div class="comiis_quote bg_h f_c">以下内容需要积分高于 ${P} 才可浏览</div>`);});let d=t.match(/\[quote\]([\s\S]*?)\[\/quote\]/g);d&&d.forEach(v=>{let w=v.match(/\[quote\]([\s\S]*?)\[\/quote\]/),T=w?w[w.length-1]:"";t=t.replace(v,`<div class="comiis_quote bg_h b_dashed f_c"><blockquote><font>回复</font> ${T}</blockquote></div>`);});let u=t.match(/\[free\]([\s\S]*?)\[\/free\]/g);u&&u.forEach(v=>{let w=v.match(/\[free\]([\s\S]*?)\[\/free\]/),T=w?w[w.length-1]:"";t=t.replace(v,`<div class="comiis_quote bg_h f_c"><blockquote>${T}</blockquote></div>`);});let f=t.match(/\[b\]([\s\S]*?)\[\/b\]/g);f&&f.forEach(v=>{let w=v.match(/\[b\]([\s\S]*?)\[\/b\]/i),T=w?w[w.length-1]:"";t=t.replace(v,`<strong>${T}</strong>`);});let p=t.match(/\[u\]([\s\S]*?)\[\/u\]/g);p&&p.forEach(v=>{let w=v.match(/\[u\]([\s\S]*?)\[\/u\]/),T=w?w[w.length-1]:"";t=t.replace(v,`<u>${T}</u>`);});let h=t.match(/\[i\]([\s\S]*?)\[\/i\]/g);h&&h.forEach(v=>{let w=v.match(/\[i\]([\s\S]*?)\[\/i\]/),T=w?w[w.length-1]:"";t=t.replace(v,`<i>${T}</i>`);});let _=t.match(/\[s\]([\s\S]*?)\[\/s\]/g);_&&_.forEach(v=>{let w=v.match(/\[s\]([\s\S]*?)\[\/s\]/),T=w?w[w.length-1]:"";t=t.replace(v,`<strike>${T}</strike>`);});let k=t.match(/\[([\s\S]+?)\]/g);k&&k.forEach(v=>{let w=e[v];w&&(t=t.replace(v,`<img loading="lazy" src="${w}" border="0" alt="" smilieid="">`));});let q=t.match(/\[media=[\s\S]+?\][\s\S]+?\[\/media\]/g);q&&q.forEach(v=>{let w=v.match(/\[media=[\s\S]*?\]([\s\S]*?)\[\/media\]/),T=w?w[w.length-1]:"";T&&(t=t.replace(v,`<ignore_js_op><span><iframe src="${T}" border="0" scrolling="no" framespacing="0" allowfullscreen="true" style="max-width: 100%" width="100%" height="auto" frameborder="no"></iframe></span></ignore_js_op>`));});let S=t.match(/\[email=[\s\S]+?\][\s\S]+?\[\/email\]/g);S&&S.forEach(v=>{let w=v.match(/\[email=([\s\S]*?)\][\s\S]*?\[\/email\]/),T=v.match(/\[email=[\s\S]*?\]([\s\S]*?)\[\/email\]/),P=w.length?w[w.length-1]:"",U=T.length?T[T.length-1]:"";(P||U)&&(t=t.replace(v,`<a href="mailto:${P}">${U}</a>`));});let R=t.match(/\[align=[\s\S]+?\][\s\S]+?\[\/align\]/g);R&&R.forEach(v=>{let w=v.match(/\[align=([\s\S]*?)\][\s\S]+?\[\/align\]/),T=v.match(/\[align=[\s\S]*?\]([\s\S]+?)\[\/align\]/),P=w.length?w[w.length-1]:"",U=T.length?T[T.length-1]:"";(P||U)&&(t=t.replace(v,`<div align="${P}">${U}</div>`));});let I=t.match(/\[qq\][\s\S]*?\[\/qq\]/g);I&&I.forEach(v=>{let w=v.match(/\[qq\]([\s\S]*?)\[\/qq\]/),T=w?w[w.length-1]:"";t=t.replace(v,`<a href="http://wpa.qq.com/msgrd?v=3&uin=${T}&site=[Discuz!]&from=discuz&menu=yes" target="_blank"><img loading="lazy" src="static/image/common/qq_big.gif" border="0"></a>`);});let z=t.match(/\[td\][\s\S]+?\[\/td\]/g);z&&z.forEach(v=>{let w=v.match(/\[td\]([\s\S]*?)\[\/td\]/),T=w?w[w.length-1]:"";t=t.replace(v,`<td>${T}</td>`);});let E=t.match(/\[tr\][\s\S]+?\[\/tr\]/g);E&&E.forEach(v=>{let w=v.match(/\[tr\]([\s\S]*?)\[\/tr\]/),T=w?w[w.length-1]:"";t=t.replace(v,`<tr>${T}</tr>`);});let A=t.match(/\[table\][\s\S]+?\[\/table\]/g);A&&A.forEach(v=>{let w=v.match(/\[table\]([\s\S]*?)\[\/table\]/),T=w?w[w.length-1]:"";T=T.replace(/\n/g,""),t=t.replace(v,`<table>${T}</table>`);});let O=t.match(/\[list=[\s\S]+?\][\s\S]+?\[\/list\]/g);return O&&O.forEach(v=>{let w=v.match(/\[list=([\s\S]*?)\][\s\S]*?\[\/list\]/),T=v.match(/\[list=[\s\S]*?\]([\s\S]*?)\[\/list\]/),P=w?w[w.length-1]:"",U="";P==="a"?U="litype_2":P==="A"?U="litype_3":P.length===1&&P.match(/[0-9]{1}/)&&(U="litype_1");let J=T?T[T.length-1]:"",ot=J.split("[*]");if(ot.length>1){let _t="";ot[0].replace(/[\s]*/,"")==""&&(ot=ot.slice(1)),Array.from(ot).forEach(jt=>{_t=`${_t}<li>${jt}</li>`;}),J=_t;}J=J.replace(/\n/g,""),t=t.replace(v,`<ul type="${P}" class="${U}">${J}</ul>`);}),t},parseVoteText(){let t=["rgb(233, 39, 37)","rgb(242, 123, 33)","rgb(242, 166, 31)","rgb(90, 175, 74)","rgb(66, 196, 245)","rgb(0, 153, 204)","rgb(51, 101, 174)","rgb(42, 53, 145)","rgb(89, 45, 142)","rgb(219, 49, 145)","rgb(233, 39, 37)","rgb(242, 123, 33)","rgb(242, 166, 31)","rgb(90, 175, 74)","rgb(66, 196, 245)","rgb(0, 153, 204)","rgb(51, 101, 174)","rgb(42, 53, 145)","rgb(89, 45, 142)","rgb(219, 49, 145)"],e=N(".comiis_polloption_add ul li:first-child div.flex .comiis_input.kmshow[type='text']"),n=parseInt(r.val("input#maxchoices"));n=isNaN(n)?0:n,n=n>0?n:0,n=n>e.length?e.length:n;let i=parseInt(r.val("input#polldatas"));i=isNaN(i)?0:i,y.$("input#visibilitypoll").parent().find(".comiis_checkbox").hasClass("comiis_checkbox_close");let s=!y.$("input#overt").parent().find(".comiis_checkbox").hasClass("comiis_checkbox_close"),l="",o="";e.forEach((a,c)=>{c>=20||(o=o+`
                    <li class="kmnop">
                        <input type="${n>1?"checkbox":"radio"}">
                        <label><i class="comiis_font f_d"></i>${a.value}</label>
                    </li>
                    <li class="poll_ok cl">
                        <span class="bg_b">
                            <em style="width:2%;background-color:${t[c]}"></em>
                        </span>
                        <em style="color:${t[c]}">0% (0)</em>
                    </li>`);}),l=`
                    <div class="comiis_poll cl comiis_input_style b_t postforum_vote">
                            <div class="comiis_poll_top">
                                <i class="comiis_font bg_a f_f"></i>
                                <h2>${n>1?'多选投票<em class="f_c"> 最多可选 '+n+" 项</em>":"单选投票"}</h2>
                                <p class="f_c">共有 0 人参与投票</p>
                                ${i>0?` <p class="kmbtn">
                                <span class="bg_e">距结束还有:
                                ${i>1?'<em class="f_a">'+(i-1)+"</em> 天 ":""}<em class="f_a">23</em> 小时 <em class="f_a">59</em> 分钟</span>
                            </p>`:""}
                               
                            </div>
                            <div class="comiis_poll_list comiis_input_style cl">
                                <ul>
                                    ${o}
                                </ul>
                            </div>
                            <div class="comiis_poll_bottom cl">
                                <input type="submit" value="提交" class="formdialog comiis_btn kmshow bg_c f_f" disabled>
                                ${s?'<div class="comiis_quote bg_h b_dashed f_a"><i class="comiis_font"></i>此为公开投票，其他人可看到您的投票项目</div>':""}
                            </div>
                    </div>
                `,y.$(".gm_plugin_previewpostforum_html .postforum_vote").remove(),y.$(".gm_plugin_previewpostforum_html .comiis_messages.comiis_aimg_show").children().eq(0).before(y.$(l));}},gt={$data:{db:new st.indexedDB("mt_full_reply_record","input_text"),get type(){return M.isPostPublish_voting()?"post-vote":"post"},get tid(){return F.getThreadId(window.location.href)},get pid(){return F.getPostId(window.location.href)}},$key:{noPublishSerializeText:"mt-editor-no-publish-serialize-text",noPublishVotingSerializeText:"mt-editor-no-publish-voting-serialize-text"},$el:{$title:null,$input:null,$form:null},init(){b.info("编辑器优化"),G(re),this.overridePageEditor();},overridePageEditor(){const t=this;this.$el.$title=C("#needsubject"),this.$el.$form=C("#postform"),this.$el.$input=C("#needmessage"),r.hide(r.parent(".comiis_scrollTop_box"),false),r.css("#postform .comiis_post_from.mt15",{"margin-top":"0px !important"});let e=y.$("#postform .comiis_post_from #comiis_post_tab");y.$("#postform .comiis_post_from .comiis_post_ico").append(e),e.remove(),y.textarea_scrollHeight=()=>{};let n=y.$.fn.comiis_delete;y.$.fn.extend({comiis_delete:function(...c){let m=n.call(this,...c);return g.dispatchEvent(t.$el.$input,"input"),m}}),r.hide(".comiis_btnbox",false),this.initVotePage(),y.$(".gm_plugin_chartbed .comiis_over_box.comiis_input_style #imglist"),G(`
        #imglist_settings button{
            font-size: 13.333px;
            color: #9baacf;
            outline: none;
            border: none;
            height: 35px;
            width: 80px;
            border-radius: 10px;
            box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
            font-weight: 800;
            line-height: 40px;
            background: #efefef;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        #imglist_settings button:active{box-shadow:inset .2rem .2rem .5rem #c8d0e7,inset -.2rem -.2rem .5rem #fff!important;color:#638ffb!important}
        `),r.attr("#filedata","multiple",true),r.remove(".gm_plugin_chartbed .comiis_over_box.comiis_input_style"),r.on(document,"#comiis_pictitle_key li","click",function(){r.removeClass("#comiis_pictitle_key li","bg_f"),r.addClass(this,"bg_f"),y.$(".gm_plugin_chartbed .comiis_upbox").hide().eq(y.$(this).index()).fadeIn();});let i=parseInt(r.css("#comiis_head","height"))||0,s=parseInt(r.css("#comiis_sub","height"))||0,l=C("#pollm_c_1")?60:0,o=parseInt(r.css(".comiis_styli.comiis_flex","height"))||0,a=parseInt(r.css(".comiis_post_ico.comiis_minipost_icot","height"))||0;r.css("#needmessage","height",`${window.screen.height-i-s-48-o-a-10}px`),r.css("#needmessage","marginBottom",l+"px"),M.isPostPublish_edit()&&r.val("#needsubject")===""?r.hide(".comiis_styli.comiis_flex",false):r.attr("#needsubject","placeholder","请输入完整的帖子标题 (1-80个字)"),r.attr("#needmessage","placeholder","来吧，尽情发挥吧..."),typeof y.comiis_addsmilies=="function"&&(y.comiis_addsmilies=c=>{y.$("#needmessage").comiis_insert(c),y.$("#needmessage")[0].dispatchEvent(new Event("input"));}),($.getValue("mt-forum-post-editorOptimizationNormal-recordInputText")||$.getValue("mt-forum-post-editorOptimization-recordInputText"))&&(this.setInputChangeEvent(),this.initReplyText()),this.initDeleteBtn(),this.initSaveDraftBtn(),this.initSaveBtn(),this.initPostBtn(),this.initReplyBtn(),this.observerChangeEditorHeight(),this.listenResize(),this.initSelectPostingSection(),this.initUBB(),this.initImage(),this.initPreview(),this.initCharacterCount(),this.initSettingImmersionMode();},async initReplyText(){const t=this;let e=null,n=null,i=null;if(M.isPostPublish_newthread())b.info("新发布帖子的页面"),M.isPostPublish_voting()?(b.info("投票页面"),e=Y(this.$key.noPublishVotingSerializeText),i=()=>{at(t.$key.noPublishVotingSerializeText);}):(b.info("普通帖子页面"),e=Y(this.$key.noPublishSerializeText),i=()=>{at(this.$key.noPublishSerializeText);});else if(M.isPostPublish_edit()){b.info("草稿的页面"),b.info(`type：${this.$data.type} tid：${this.$data.tid} pid：${this.$data.pid}`),(await this.$data.db.get("data")).code===201&&await this.$data.db.save("data",[]);let l=await this.$data.db.get("data");if(l.data){let o=l.data.find(a=>{if(a.type===t.$data.type&&!(a.tid!==t.$data.tid||a.pid!==t.$data.pid))return  true});o&&(e=o.data,i=async()=>{let a=await this.$data.db.get("data");if(a.data){let c=a.data.findIndex(m=>{if(m.type===t.$data.type&&!(m.tid!==t.$data.tid||m.pid!==t.$data.pid))return  true});c!=-1&&(a.data.splice(c,1),await this.$data.db.save("data",a.data));}});}}else if(M.isPostPublish_reply()&&(b.info("回复页面"),$.getValue("mt-forum-post-editorOptimizationNormal-recordInputText"))){(await tt.$data.db.get("data")).code===201&&await this.$data.db.save("data",[]);let l=await tt.$data.db.get("data");if(l.data){let o=l.data.find(a=>a.forumId===t.$data.tid&&a.repquote===F.getRepquote(window.location.href));o&&(e=o);}}e&&(M.isPostPublish_voting()?n=()=>{let s=t.$el.$form.querySelector("input[name='subject']"),l=t.$el.$form.querySelector("textarea[name='message']"),o=t.$el.$form.querySelector("input[name='maxchoices']"),a=t.$el.$form.querySelector("input[name='expiration']"),c=t.$el.$form.querySelector("input[name='visibilitypoll']"),m=t.$el.$form.querySelector("input[name='overt']");return r.val(s,e.title),r.val(l,e.content),r.val(o,e.maxchoices),r.val(a,e.expiration),r.val(c,e.visibilitypoll),r.val(m,e.overt),g.dispatchEvent(s,"input"),g.dispatchEvent(l,"input"),g.dispatchEvent(o,"input"),g.dispatchEvent(a,"input"),g.dispatchEvent(c,"input"),g.dispatchEvent(m,"input"),true}:M.isPostPublish_reply()?n=()=>{let s=t.$el.$form.querySelector("textarea[name='message']");return r.val(s,e.text),g.dispatchEvent(s,"input"),true}:n=()=>{let s=t.$el.$form.querySelector("input[name='subject']"),l=t.$el.$form.querySelector("textarea[name='message']");return r.val(s,e.title),r.val(l,e.content),g.dispatchEvent(s,"input"),g.dispatchEvent(l,"input"),true},M.isPostPublish_newthread()?(b.info("新发布帖子的页面"),typeof n=="function"&&n()):M.isPostPublish_edit()?(b.info("草稿的页面"),typeof n=="function"&&typeof i=="function"&&B.confirm({title:{text:"提示",position:"center"},content:{text:"<p>存在历史写入的数据，是否恢复到编辑器里？</p>",html:true},btn:{merge:true,position:"space-between",ok:{text:"恢复",callback:async s=>{await n()&&(x.success("恢复成功"),s.close());}},other:{enable:true,type:"danger",text:"删除该数据",callback:async s=>{await i(),s.close(),x.success("删除成功");}}},width:"300px",height:"200px"})):M.isPostPublish_reply()&&(b.info("回复页面"),typeof n=="function"&&n()));},async getReplyRecordSize(){var e;let t=await this.$data.db.get("data");return t.success?g.getTextStorageSize((e=t==null?undefined:t.data)!=null&&e.length?JSON.stringify(t.data):""):g.formatByteToSize(0)},async clearAllReplyRecord(){return await this.$data.db.deleteAll()},deleteReplyTextStorage(){const t=this;this.$data.db.get("data").then(e=>{if(!e.success){console.warn(e);return}let n=M.isPostPublish_voting()?"post-vote":"post",i=F.getThreadId(window.location.href),s=F.getPostId(window.location.href),l=e.data.findIndex(o=>{if(o.type===n&&!(o.tid!==i||o.pid!==s))return  true});l!==-1&&(e.data.splice(l,1),t.$data.db.save("data",e.data).then(o=>{}));});},setInputChangeEvent(){const t=this;r.on([this.$el.$input,this.$el.$title].filter(Boolean),["input","propertychange"],function(e){let n=null;if(M.isPostPublish_voting()){let i=t.$el.$form.querySelector("input[name='subject']"),s=t.$el.$form.querySelector("textarea[name='message']"),l=t.$el.$form.querySelector("input[name='maxchoices']"),o=t.$el.$form.querySelector("input[name='expiration']"),a=t.$el.$form.querySelector("input[name='visibilitypoll']"),c=t.$el.$form.querySelector("input[name='overt']");n={title:i.value,maxchoices:l.value,expiration:o.value,visibilitypoll:a.checked,overt:c.checked,content:s.value};}else {let i=t.$el.$form.querySelector("input[name='subject']"),s=t.$el.$form.querySelector("textarea[name='message']");n={title:i==null?undefined:i.value,content:s.value};}M.isPostPublish_newthread()?(b.info("内容改变 ==> 新发布帖子的页面"),M.isPostPublish_voting()?W(t.$key.noPublishVotingSerializeText,n):W(t.$key.noPublishSerializeText,n)):M.isPostPublish_edit()?(b.info("内容改变 ==> 草稿的页面"),t.$data.db.get("data").then(i=>{if(!i.success){console.warn(i);return}let s=i.data.findIndex(l=>{if(l.type===t.$data.type&&!(l.tid!==t.$data.tid||l.pid!==t.$data.pid))return  true});s!==-1&&i.data.splice(s,1),i.data.push({url:window.location.href,data:n,pid:t.$data.pid,tid:t.$data.tid,type:t.$data.type}),t.$data.db.save("data",i.data).then(l=>{});})):M.isPostPublish_reply()&&(b.info("内容改变 ==> 回复页面"),$.execMenu("mt-forum-post-editorOptimizationNormal-recordInputText",()=>{tt.$data.db.get("data").then(i=>{if(!i.success||i.code===201){console.warn(i);return}let s=i.data.findIndex(l=>l.forumId===t.$data.tid&&l.repquote===F.getRepquote(window.location.href));s!==-1?n.content==null||n.content===""?i.data.splice(s,1):i.data[s]=g.assign(i.data[s],{text:n.content}):i.data.push({forumId:t.$data.tid,url:window.location.href,repquote:F.getRepquote(window.location.href),text:n.content}),tt.$data.db.save("data",i.data).then(l=>{});});}));});},initDeleteBtn(){if(!C(".comiis_btnbox .comiis_btn.bg_del"))return;let e=C("#comiis_head .header_y"),n=r.createElement("input",{className:"new_btn_del"},{type:"button",value:"删除"});r.append(e,n),r.on(n,"click",function(){B.confirm({title:{text:"提示",position:"center"},content:{text:"<p>是否删除帖子?</p>",html:true},btn:{ok:{callback:i=>{i.close(),y.comiis_delthread();}}},width:"300px",height:"200px"});});},initSaveBtn(){let t=r.selector(".comiis_btnbox button#postsubmit:contains('保存')");if(!t||r.text(t).includes("草稿"))return;let e=C("#comiis_head .header_y"),n=r.createElement("input",{className:"new_btn_save"},{type:"button",value:"保存"});r.append(e,n),r.on(n,"click",function(){t.click();});},initPostBtn(){let t=r.selector(".comiis_btnbox button#postsubmit:contains('发表')");if(!t)return;let e=C("#comiis_head .header_y"),n=r.createElement("input",{className:"new_btn_post"},{type:"button",value:"发表"});r.append(e,n),r.on(n,"click",function(){r.val("#postsave",0),t.click();});},initReplyBtn(){const t=this;let e=r.selector(".comiis_btnbox button#postsubmit:contains('回复')");if(!e)return;let n=C("#comiis_head .header_y"),i=r.createElement("input",{className:"new_btn_reply"},{type:"button",value:"回复"});r.append(n,i),r.on(i,"click",function(){e.click(),t.deleteReplyTextStorage();});},initVotePage(){N(".comiis_scrollTop_box").length&&(y.$("#htmlon").parent().append(`
                <li class="comiis_styli_m f15 comiis_flex b_b">
                    <div class="flex">发表帖子</div>
                    <div class="styli_r">
                        <input type="checkbox" name="usesig" value="1" class="comiis_checkbox_key">
                        <label for="" class="wauto">
                            <code class="bg_f b_ok comiis_checkbox comiis_choose_post comiis_checkbox_close"></code>
                        </label>
                    </div>	
                </li>
                <li class="comiis_styli_m f15 comiis_flex b_b">
                    <div class="flex">发投票</div>
                    <div class="styli_r">
                        <input type="checkbox" name="usesig" value="1" class="comiis_checkbox_key">
                        <label for="" class="wauto">
                            <code class="bg_f b_ok comiis_checkbox comiis_choose_vote comiis_checkbox_close"></code>
                        </label>
                    </div>	
                </li>
                `),y.$(".comiis_scrollTop_box .swiper-slide a:contains('发表帖子')").attr("class")!="f_c"?y.$(".comiis_checkbox.comiis_choose_post").removeClass("comiis_checkbox_close"):y.$(".comiis_checkbox.comiis_choose_vote").removeClass("comiis_checkbox_close"),y.$(".comiis_checkbox.comiis_choose_post").on("click",function(){let t=y.$(this);t.addClass("comiis_checkbox_close"),y.$(".comiis_checkbox.comiis_choose_vote").addClass("comiis_checkbox_close"),t.removeClass("comiis_checkbox_close"),window.location.href=window.location.href.replace("&special=1","");}),y.$(".comiis_checkbox.comiis_choose_vote").on("click",function(){let t=y.$(this);t.addClass("comiis_checkbox_close"),y.$(".comiis_checkbox.comiis_choose_post").addClass("comiis_checkbox_close"),t.removeClass("comiis_checkbox_close"),window.location.href=window.location.href+"&special=1";}));},initSaveDraftBtn(){let t=r.selector(".comiis_btnbox button#postsubmit em:contains('保存草稿')");if(!t)return;let e=C("#comiis_head .header_y"),n=r.createElement("input",{className:"new_btn_save_temp"},{type:"button",value:"保存草稿"});C("#needsubject"),r.append(e,n),r.selector(".comiis_scrollTop_box .swiper-slide a:contains('发表帖子')"),r.on(n,"click",function(){t.click();});},observerChangeEditorHeight(){var t=0;g.waitNode("#postform > div > div.comiis_post_ico.comiis_minipost_icot").then(e=>{g.mutationObserver(e,{callback:n=>{var i=C("#postform > div > div.comiis_post_ico.comiis_minipost_icot");let s=window.getComputedStyle(i).getPropertyValue("height");if(s.toString()===t.toString())return;t=parseInt(s);let l=document.documentElement.clientHeight-C("#postform > div > div.comiis_post_ico.comiis_minipost_icot").getBoundingClientRect().height-C("#needmessage").getBoundingClientRect().top;l-5<100?(y.$("#needmessage").css("height","100px"),y.$(".gm_plugin_previewpostforum_html.double-preview .comiis_over_box").css("height","100px")):(y.$("#needmessage").css("height",l-5+"px"),y.$(".gm_plugin_previewpostforum_html.double-preview .comiis_over_box").css("height",l-5+"px"));},config:{childList:true,attributes:true,characterData:true,subtree:true}});});},listenResize(){r.on(window,"resize",function(){let t=document.documentElement.clientHeight-C("#postform > div > div.comiis_post_ico.comiis_minipost_icot").getBoundingClientRect().height-C("#needmessage").getBoundingClientRect().top;t-5<100?(r.css("#needmessage","height","100px"),r.css(".gm_plugin_previewpostforum_html.double-preview .comiis_over_box","height","100px")):(b.info("设置输入框、预览高度",t-5),r.css("#needmessage","height",t-5+"px"),r.css(".gm_plugin_previewpostforum_html.double-preview .comiis_over_box","height",t-5+"px"));});},initSelectPostingSection(){G(`
            #select-post-section {
                height: 28px;
                width: 160px;
                line-height: 28px;
                border: 1px solid #ececec;
                background: url(w.png) no-repeat;
                background-position: 95% 50%;
                -webkit-appearance: none;
                appearance: none;
                -moz-appearance: none;
            }
            `);let t={2:"版本发布",37:"插件交流",38:"建议反馈",41:"逆向交流",39:"玩机交流",42:"编程开发",40:"求助问答",44:"综合交流",50:"休闲灌水",46:"官方公告",53:"申诉举报",92:"站务专区"};r.before(".comiis_post_from .comiis_wzpost.comiis_input_style .comiis_styli:contains('标题')",`
        <li class="comiis_styli_section comiis_flex b_b" style="padding: 10px 12px;font-size: 16px;">
            <div class="styli_section f_c" style="padding-right: 8px;vertical-align: top;">板块</div>
            <div class="flex">
                <select id="select-post-section" style="vertical-align:top;border-color:transparent;font-size: 17px;font-weight: 300;text-overflow:ellipsis;white-space:nowrap;">
                    <option value="2">版本发布</option>
                    <option value="37">插件交流</option>
                    <option value="38">建议反馈</option>
                    <option value="39">玩机交流</option>
                    <option value="40">求助问答</option>
                    <option value="41">逆向交流</option>
                    <option value="42">编程开发</option>
                    <option value="44">综合交流</option>
                    <option value="46">官方公告</option>
                    <option value="50">休闲灌水</option>
                    <option value="53">申诉举报</option>
                    <option value="92">站务专区</option>
                </select>
            </div>
        </li>
        `);let e=C("#select-post-section"),n=F.getForumId(window.location.href);M.isPostPublish_newthread()?(b.info("发帖"),r.on(e,"change",function(){let i=r.val(e),s=`forum.php?mod=post&action=newthread&fid=${i}&extra=&topicsubmit=yes&mobile=2`;b.info(`修改发帖板块: ${t[i]} ${s}`);let l={求助问答:{className:"gm_user_select_help",optionHTML:`<option value="0" selected="selected">请选择</option>
                        <option value="59">求助问答</option>
                        <option value="58">已解决</option>`},建议反馈:{className:"gm_user_select_feedback",optionHTML:`<option value="0" selected="selected">请选择</option>
                        <option value="62">BUG反馈</option>
                        <option value="63">意见反馈</option>
                        <option value="65">论坛问题</option>
                        <option value="64">已解决</option>`},站务专区:{className:"gm_user_select_depot",optionHTML:`<option value="0" selected="selected">请选择</option>
                        <option value="42">版主申请</option>
                        <option value="43">职位调整</option>`}},o=l[t[i]];o?(r.remove(r.parent(".comiis_post_from .styli_tit:contains('分类')")),r.before(".comiis_stylino.comiis_needmessage",`
                        <li class="comiis_styli comiis_flex b_b ${o.className}">
                            <div class="styli_tit f_c">分类</div>
                                <div class="flex comiis_input_style">
                                    <div class="comiis_login_select">
                                    <span class="inner">
                                        <i class="comiis_font f_d"></i>
                                        <span class="z">
                                            <span class="comiis_question" id="typeid_name">请选择</span>
                                        </span>					
                                    </span>
                                    <select id="typeid" name="typeid">
                                        ${o.optionHTML}
                                    </select>
                                </div>	
                            </div>
                        </li>
                        `)):Object.keys(l).forEach(a=>{r.remove(".comiis_post_from ."+l[a].className);}),r.attr("#postform","action",s);})):r.attr(e,"disabled",true),r.val(e,n),r.trigger(e,"change");},initCharacterCount(){b.info("添加功能：字符计数"),G(`
        .gm_plugin_word_count{display:flex}
        .gm_plugin_word_count::after{content:"/20000"}
        `),r.append("#comiis_mh_sub .swiper-wrapper.comiis_post_ico",`
            <a href="javascript:;" class="swiper-slide gm_plugin_word_count">
                <p>0</p>
            </a>`),r.on(this.$el.$input,["input","propertychange"],t=>{let e=this.$el.$input.value,n=g.getTextLength(e),i=xt.parseText(e);r.html(".gm_plugin_previewpostforum_html .comiis_message_table",i);let s=C(".gm_plugin_word_count p");r.text(s,n),n>2e4||n<10?r.attr(s,"style","color: red;"):r.attr(s,"style","");});},initUBB(){if(!C(".comiis_post_urlico")){b.error("未找到插入元素");return}G(`
        #comiis_post_tab .comiis_input_style .comiis_post_urlico li a.f_0{
            color: #53bcf5 !important;
        }
        `);let t=Ut(),e=C(".comiis_post_urlico > ul"),n=C("#comiis_post_qydiv > ul"),i=N("#comiis_post_qydiv ul li").length;oe(),r.on("#comiis_post_tab .comiis_input_style .comiis_post_urlico li","click",function(){r.removeClass("#comiis_post_tab .comiis_input_style .comiis_post_urlico li a","f_0"),r.addClass("#comiis_post_tab .comiis_input_style .comiis_post_urlico li a","f_d"),r.attr(this.querySelector("a"),"class","comiis_xifont f_0"),y.$("#comiis_post_qydiv ul li").hide().eq(y.$(this).index()).fadeIn();}),y.$.each(t,function(s,l){let o=r.createElement("li",{className:"quickUBBs",innerHTML:`
                <a href="javascript:;" class="comiis_xifont f_d"><i class="comiis_font"></i>${l.key}</a>
                `});r.on(o,"click",c=>{if(!C(`#comiis_post_qydiv li[data-key='${l.key}']`)){b.error("未找到该元素");return}N("#comiis_post_tab div.comiis_post_urlico ul li a.comiis_xifont").forEach(f=>{f.className="comiis_xifont f_d";});let d=o.querySelector("a");d.className="comiis_xifont f_0";let u=i+Object.keys(t).indexOf(s);y.$("#comiis_post_qydiv ul li").hide().eq(u).fadeIn();}),r.append(e,o);let a=document.createElement("li");a.setAttribute("style","display: none;"),a.setAttribute("data-key",l.key),a.innerHTML=`
            <div class="comiis_styli_m f15" style="padding-top:12px;">
                <div class="bg_e comiis_p5" style="border-radius:4px">
                    <textarea class="comiis_pt kmshow f_c" id="comiis_input_${s}" style="font-size:15px" placeholder="请输入需要${l.key}的文字"></textarea>
                </div>
            </div>
            <div class="comiis_styli_m f15 comiis_flex" style="padding-top:0;">
                <div class="styli_tit">
                    <button class="comiis_sendbtn bg_0 f_f" data-keyI="${s}" type="button">插入</button>
                </div>
                <div class="flex"></div>
            </div>`,r.append(n,a),r.on(`.comiis_sendbtn[data-keyI="${s}"]`,"click",()=>{let c=y.$(`#comiis_input_${s}`).val();if(c==""){x.warning("请输入需要插入的内容");return}let m=t[s];m.isFunc&&(c=Nt(m.num,c)),m.hasOwnProperty("L")&&(c=m.L+c+m.R),y.$("#needmessage").insertAtCaret(c),m.hasOwnProperty("cursorL")&&y.$("#needmessage").moveCursorToCenterByTextWithLeft(m.cursorL,m.cursorLength),m.hasOwnProperty("cursorR")&&y.$("#needmessage").moveCursorToCenterByTextWithRight(m.cursorR,m.cursorLength);});});},initImage(){b.info("添加功能：图片"),G(`
            #comiis_pictitle_tab .comiis_upbox{
                height: 140px;
                overflow-y: auto;
            }
            `),r.append("#comiis_mh_sub .swiper-wrapper.comiis_post_ico",`
        <a href="javascript:;" class="comiis_pictitle"><i class="comiis_font"><em>图片</em></i></a>`),r.on(".comiis_pictitle","click",function(){this.querySelector("i.comiis_font").classList.contains("f_0")?r.hide(".gm_plugin_chartbed",false):r.show(".gm_plugin_chartbed",false);}),r.append("#comiis_post_tab",`
            <div id="comiis_pictitle_tab" class="gm_plugin_chartbed" style="display: none">
                <!-- <div class="comiis_upbox bg_f cl">
                    <ul id="mt-imglist" class="comiis_post_imglist cl">
                        <li class="up_btn">
                            <a href="javascript:;" class="bg_e b_ok f_d">
                                <i class="comiis_font"></i>
                            </a>
                        </li>				
                    </ul>
                </div> -->
                <div class="bqbox_t">
                    <ul id="comiis_pictitle_key">
                        <li class="bg_f" id="comiis_pictitle_tab_n_1"><a href="javascript:;" class="">论坛</a></li>
                    </ul>
                </div>
            </div>
            `);let e=C("#imglist"),n=r.parent(e);r.before(".gm_plugin_chartbed .bqbox_t",n),r.on("#imglist .comiis_font","click",i=>{C("#filedata").click();}),r.on("#comiis_pictitle_tab #comiis_pictitle_key","click","li",function(i){let s=i.target;r.removeClass("#comiis_pictitle_tab #comiis_pictitle_key li","bg_f"),r.addClass(s,"bg_f"),y.$("#comiis_pictitle_tab div.comiis_upbox").hide().eq(y.$(s).index()).fadeIn();}),$.execMenuOnce("mt-image-bed-hello-enable",()=>{Pt.init();}),$.execMenuOnce("mt-image-bed-mt-enable",()=>{Bt.init();});},initPreview(){const t=this;b.info("添加功能：双列预览"),G(`
        .gm_plugin_previewpostforum_html .comiis_message_table{margin-top:10px;font-weight:initial;line-height:24px}
        .gm_plugin_previewpostforum_html .comiis_message_table a{height:auto;float:unset;color:#507daf!important}
        .gm_plugin_previewpostforum_html .comiis_message_table i{text-align:unset;font-size:unset;line-height:unset;padding-top:unset;display:unset}
        .comiis_postli.comiis_list_readimgs.nfqsqi{width:100vw}
        .gm_plugin_previewpostforum_html.double-preview{width:50vw}
        .gm_plugin_previewpostforum_html.double-preview .comiis_over_box.comiis_input_style{border-left:1px solid}
        `),r.append("#comiis_mh_sub .swiper-wrapper.comiis_post_ico",`
        <a href="javascript:;" class="swiper-slide gm_plugin_previewpostforum">
            <i class="comiis_font" style="display: flex;flex-direction: column;padding-top: 1px;">
                <svg t="1661243615511" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2399" width="22" height="22" fill="currentColor">
                    <path d="M470.1 885.3H208.8V138.7h597.3v336c0 20.6 16.7 37.3 37.3 37.3 20.6 0 37.3-16.7 37.3-37.3v-336c0-41.2-33.4-74.7-74.7-74.7H208.8c-41.2 0-74.7 33.4-74.7 74.7v746.7c0 41.2 33.4 74.7 74.7 74.7h261.3c20.6 0 37.3-16.7 37.3-37.3 0.1-20.8-16.6-37.5-37.3-37.5z" p-id="2400"></path>
                    <path d="M641.3 496.5c-54.3 0-108.5 23.5-146.2 70.5-54.7 68.3-53.4 168.6 2.8 235.6 37.5 44.8 90.5 67.2 143.4 67.2 35.9 0 71.8-10.3 103-30.9l81.8 81.8c7.3 7.3 16.8 10.9 26.4 10.9 9.6 0 19.1-3.6 26.4-10.9 14.6-14.6 14.6-38.2 0-52.8l-81.8-81.8c48-72.5 40.1-171.1-23.7-234.9-36.5-36.4-84.3-54.7-132.1-54.7z m0 298.7c-36.5 0-72.9-17.6-95.3-52.9-22.6-35.6-22.6-82.5 0-118.1 22.4-35.3 58.9-52.9 95.3-52.9 36.5 0 72.9 17.6 95.3 52.9 22.6 35.6 22.6 82.5 0 118.1-22.4 35.2-58.8 52.9-95.3 52.9z" p-id="2401"></path>
                </svg>
                <em style="bottom: 1px;position: relative;">预览</em>
            </i>
        </a>`),r.css(r.parent(this.$el.$input),"display","flex"),r.after(this.$el.$input,`
            <div class="bg_f cl gm_plugin_previewpostforum_html double-preview" style="display: none;">
              <div class="comiis_over_box comiis_input_style">
                <div class="comiis_postli comiis_list_readimgs nfqsqi" style="width: 50vw;">
                  <div class="comiis_message bg_f view_one cl message" style="margin-bottom: auto;padding: 0px 12px 0px 12px;">
                    <div class="comiis_messages comiis_aimg_show cl" style="overflow-y: auto;position: relative;">
                      <div class="comiis_a comiis_message_table cl" style="margin: 0;"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`),r.on(".gm_plugin_previewpostforum","click",function(n){let i=this;if(N("#polldatas").length&&xt.parseVoteText(),i.querySelector("i.comiis_font").classList.contains("f_0"))r.hide(".gm_plugin_previewpostforum_html",false);else {r.show(".gm_plugin_previewpostforum_html",false);let l=xt.parseText(r.val(t.$el.$input));r.html(".gm_plugin_previewpostforum_html .comiis_message_table",l),r.css(".gm_plugin_previewpostforum_html.double-preview .comiis_over_box.comiis_input_style","height",r.css(t.$el.$input,"height"));}});},initSettingImmersionMode(){b.info("初始化设置功能-使用沉浸模式"),r.append(r.parent("#htmlon"),`
            <li class="comiis_styli_m f15 comiis_flex b_b">
                <div class="flex">使用沉浸输入</div>
                <div class="styli_r">
                    <input type="checkbox" name="immersiveinput" id="immersiveinput" value="" class="comiis_checkbox_key">
                    <label for="immersiveinput" class="wauto">
                        <code class="bg_f b_ok comiis_checkbox comiis_checkbox_close"></code>
                    </label>
                </div>	
            </li>
            `),r.on("#immersiveinput","click",function(){let t=this,e=r.parent(t).querySelector(".comiis_checkbox"),n=[".comiis_wzpost ul li.comiis_flex",".comiis_wzpost ul li.comiis_styli.kmquote",r.parent(r.parent("#pollchecked")),"#pollm_c_1",".comiis_polloption_add+div.f_0",".comiis_wzpost ul li.comiis_thread_content:contains('内容')","div#comiis_head","div#comiis_head+*:not([class])"];r.hasClass(e,"comiis_checkbox_close")?n.forEach(i=>{i&&r.hide(i,false);}):n.forEach(i=>{i&&r.show(i,false);}),window.dispatchEvent(new Event("resize"));});}},ce={id:"component-forum-post",title:"帖子",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[L("自动展开内容","mt-forum-post-autoExpandContent",true,undefined,"注入CSS展开帖子的内容"),L("修复图片宽度","mt-forum-post-repairImageWidth",true,undefined,"修复图片宽度超出页面宽度的问题"),L("移除帖子字体效果","mt-forum-post-removeFontStyle",false,undefined,""),L("移除评论区的字体效果","mt-forum-post-removeCommentFontStyle",false,undefined,""),L("添加【点评】按钮","mt-forum-post-addCommentOnBtn",false,undefined,"在评论区的每个评论右下角添加按钮"),L("附件点击提醒","mt-forum-post-setAttachmentsClickTip",true,undefined,"阻止默认点击附件就会触发附件下载"),L("代码块优化","mt-forum-post-codeQuoteOptimization",true,undefined,"自动检测代码块语言并设置关键字高亮"),L("图片查看优化","mt-forum-post-optimizationImagePreview",true,undefined,"使用Viewer查看图片")]}]},{text:"自动加载评论",type:"deepMenu",forms:[{type:"forms",text:"",forms:[L("自动加载下一页评论","mt-forum-post-loadNextPageComment",true,undefined,""),L("同步加载的地址","mt-forum-post-syncNextPageUrl",false,undefined,"便于刷新页面会停留在当前查看的评论页面")]}]},{text:"编辑器-简略版",type:"deepMenu",forms:[{type:"forms",text:"",forms:[L("启用","mt-forum-post-editorOptimizationNormal",true,undefined,"优化样式，插入bbcode代码等"),L("自动保存输入记录","mt-forum-post-editorOptimizationNormal-recordInputText",true,undefined,"当回复时会自动清空记录"),ft("清空回复记录","当前占用空间大小：计算中","清理",undefined,false,false,"default",async t=>{let i=t.target.closest("li").querySelector(".pops-panel-item-left-desc-text"),s=await tt.clearAllReplyRecord();s.success?(x.success("清理成功"),r.text(i,`当前占用空间大小：${await tt.getReplyRecordSize()}`)):x.error("清理失败 "+s.msg);},async(t,e)=>{let n=e.target.querySelector(".pops-panel-item-left-desc-text");r.text(n,`当前占用空间大小：${await tt.getReplyRecordSize()}`);})]}]},{text:"编辑器-完整版",type:"deepMenu",forms:[{type:"forms",text:"",forms:[L("启用","mt-forum-post-publish-editorOptimization",true,undefined,"优化样式，插入bbcode代码，双列预览等"),L("自动保存输入记录","mt-forum-post-editorOptimization-recordInputText",true,undefined,"当回复/发表时会自动清空记录"),ft("清空回复记录","当前占用空间大小：计算中","清理",undefined,false,false,"default",async t=>{let i=t.target.closest("li").querySelector(".pops-panel-item-left-desc-text"),s=await gt.clearAllReplyRecord();s.success?(x.success("清理成功"),r.text(i,`当前占用空间大小：${await gt.getReplyRecordSize()}`)):x.error("清理失败 "+s.msg);},async(t,e)=>{let n=e.target.querySelector(".pops-panel-item-left-desc-text");r.text(n,`当前占用空间大小：${await gt.getReplyRecordSize()}`);})]}]},{text:"编辑器-图床配置",type:"deepMenu",forms:[{type:"forms",text:'<a href="https://www.helloimg.com/" target="_blank">Hello图床</a>',forms:[L("启用","mt-image-bed-hello-enable",false,undefined,"启用Hello图床"),V("账号","mt-image-bed-hello-account","","",undefined,"必填"),V("密码","mt-image-bed-hello-password","","",undefined,"必填",false,true),V("token","mt-image-bed-hello-token","","",undefined,"必填",false,true)]},{type:"forms",text:'<a href="https://img.binmt.cc/" target="_blank">MT图床</a>',forms:[L("启用","mt-image-bed-mt-enable",true,undefined,"启用MT图床")]},{type:"forms",text:"图片水印",forms:[L("启用","mt-image-bed-watermark-enable",false,undefined,"开启后会为图床图片添加文字水印"),L("自动添加水印","mt-image-bed-watermark-autoAddWaterMark",false,undefined,"开启后会自动添加水印，关闭后会有添加水印后的图片预览"),V("水印文字","mt-image-bed-watermark-text","MT论坛"),V("颜色","mt-image-bed-watermark-text-color","#000000",undefined,undefined,"",false,false,(t,e)=>{var s,l;let n=(s=e.target)==null?undefined:s.querySelector("input"),i=(l=e.target)==null?undefined:l.querySelector(".pops-panel-input__suffix");r.hide(i,false),n.setAttribute("type","color"),r.css(n,{margin:"unset",padding:"unset",width:"80px"});}),V("大小","mt-image-bed-watermark-font-size",16,undefined,undefined,undefined,true),V("透明度","mt-image-bed-watermark-font-opacity",1,undefined,undefined,undefined,true),V("左右间距","mt-image-bed-watermark-left-right-margin",80,undefined,undefined,undefined,true),V("上下间距","mt-image-bed-watermark-top-bottom-margin",80,undefined,undefined,undefined,true),V("旋转角度","mt-image-bed-watermark-rotate",45,undefined,undefined,undefined,true)]}]}]}]},me={id:"component-search",title:"搜索",forms:[{type:"forms",text:"",forms:[L("显示搜索历史","mt-search-showSearchHistory",true,undefined,"自动记住搜索历史并显示"),L("修复清空按钮","mt-search-repairClearBtn",true,undefined,"修复点击清空按钮不清空输入框的问题"),L("搜索框自动获取焦点","mt-search-searchInputAutoFocus",true,undefined,"")]}]},mt={$key:{signTime:"mt-sign-time"},init(){this.sign();},todayIsSign(){let t=this.getSignTime();return !(t==null||g.formatTime(Date.now(),"yyyyMMdd")!==g.formatTime(t,"yyyyMMdd"))},setSignTime(){W(this.$key.signTime,Date.now());},getSignTime(){return Y(this.$key.signTime)},clearSignTime(){at(this.$key.signTime);},checkLogin(){return F.envIsMobile()?C(".sidenv_exit a[href*='member.php?mod=logging&action=logout']"):C("#comiis_key")},async sign(){let t=F.getFormHash();if(t==null){if(C("#comiis_picshowbox")){b.info("当前为评论区的看图模式 ");return}b.error("自动签到：获取账号formhash失败"),at("mt_sign"),x.error({content:"自动签到：获取账号formhash失败"});return}if(this.todayIsSign()){b.info("今日已签到");return}let e={operation:"qiandao",format:"button",formhash:t,inajax:1,ajaxtarget:"midaben_sign"},n=!!$.getValue("mt-auto-sign-useFetch"),i=await H.get(`/k_misign-sign.html?${g.toSearchParamsStr(e)}`,{fetch:n,headers:{"User-Agent":g.getRandomPCUA()},allowInterceptConfig:false});if(!i.status){b.error("签到：网络异常，请求失败"),x.error("签到：网络异常，请求失败");return}this.setSignTime(),b.info("签到信息：",i);let s=i.data.responseText,l=g.parseCDATA(s),o=r.parseHTML(`<div>${l}</div>`,true,false),a=r.text(o);if(a.includes("需要先登录")){x.error("签到：请先登录账号",{timeout:3e3}),this.clearSignTime();return}else if(a.includes("请稍后再试")||a.includes("您已经被列入黑名单")||a.includes("绑定手机号后才可以签到")||a.includes("您所在用户组不允许使用")){x.error("签到："+a,{timeout:5e3});return}else if(a.includes("今日已签")||a.includes("今日已经签到")){x.info("签到："+a);return}else if(s.includes("您当前的访问请求当中含有非法字符，已经被系统拒绝")){x.error("签到: 您当前的访问请求当中含有非法字符，已经被系统拒绝",{timeout:6e3});return}else if(n&&"location"in g.toJSON(s)){x.success("签到: 签到成功");return}let c=o.querySelector(".con"),m=o.querySelector(".line");if(c&&m){let f=r.text(c).match(/([0-9]+)金币/),p=r.text(m).match(/([0-9]+)/),h=f[f.length-1],_=p[p.length-1];b.success(`金币${h}，排名${_}`),x.info(`
                <div style="display: flex;${F.envIsMobile()?"":"padding: 20px;"}">
                    <div style="align-self: center;margin-right: 20px;">签到</div>
                    <div>排名 ${_}<br>金币 ${h}</div>
                </div>`,{timeout:4e3,isHTML:true});return}let u=bt.alert({title:{text:"未知签到内容",position:"center"},content:{text:"",html:false},width:"88vw",height:"300px"}).$shadowRoot.querySelector(".pops-alert-content");u.innerText=i.data.responseText;}},de={id:"component-sigh",title:"签到",forms:[{text:"功能",type:"forms",forms:[L("显示【今日签到之星】","mt-sign-showTodaySignStar",true,undefined,"在签到按钮上面显示今日签到之星"),L("显示【今日最先】","mt-sign-showTodayRanking",true,undefined,"在签到排名上面新增【今日最先】")]},{text:"自动签到",type:"forms",forms:[L("启用","mt-auto-sign",true,undefined,"自动请求签到"),L("使用fetch请求","mt-auto-sign-useFetch",false,undefined,""),ft("签到信息",`上次签到时间：${mt.getSignTime()==null?"尚未签到":st.formatTime(mt.getSignTime())}`,"清空信息",undefined,undefined,undefined,"primary",t=>{let n=t.composedPath()[0].closest("li").querySelector(".pops-panel-item-left-desc-text");B.confirm({title:{text:"提示 ",position:"center"},content:{text:"<p>是否清空脚本签到记录的时间?</p>",html:true},btn:{ok:{enable:true,callback:i=>{mt.clearSignTime(),x.success("删除成功"),r.text(n,`上次签到时间：${mt.getSignTime()==null?"尚未签到":st.formatTime(mt.getSignTime())}`),i.close();}}},mask:{enable:true},width:"88vw",height:"200px"});})]}]},pe={id:"component-space",title:"空间",forms:[{type:"forms",text:"",forms:[L("修复无法进入空间","mt-space-repairEnterSpace",true,undefined,"修复链接错误导致不能进入空间的问题"),L("显示帖子回复内容","mt-space-showCommentContent",true,undefined,"在帖子-回复下面显示具体评论的内容")]}]},ue={id:"component-guide",title:"导读",forms:[{type:"forms",text:"",forms:[L("显示最新帖子","mt-guide-showLatestPost",true,undefined,"在最上面显示最新发布的帖子")]}]},Mt={setting:{get width(){return window.innerWidth<550?"88vw":"550px"},get height(){return window.innerHeight<450?"70vh":"450px"}}},$={$data:{__data:null,__oneSuccessExecMenu:null,__onceExec:null,__listenData:null,get data(){return $.$data.__data==null&&($.$data.__data=new g.Dictionary),$.$data.__data},get oneSuccessExecMenu(){return $.$data.__oneSuccessExecMenu==null&&($.$data.__oneSuccessExecMenu=new g.Dictionary),$.$data.__oneSuccessExecMenu},get onceExec(){return $.$data.__onceExec==null&&($.$data.__onceExec=new g.Dictionary),$.$data.__onceExec},get scriptName(){return kt},key:rt,attributeKeyName:et,attributeDefaultValueName:it},$listener:{get listenData(){return $.$data.__listenData==null&&($.$data.__listenData=new g.Dictionary),$.$data.__listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},isTopWindow(){return y.top===y.self},initExtensionsMenu(){this.isTopWindow()&&(ee.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{this.showPanel();}}]),j.registerLeftMenu({name:"MT论坛脚本设置",icon:"",iconColor:"#ff0505",iconSize:"23px",callback:()=>{this.showPanel();}}));},initPanelDefaultValue(){let t=this;function e(s){if(!s.attributes)return;let l={},o=s.attributes[et];o!=null&&(l[o]=s.attributes[it]);let a=s.attributes[Dt];if(typeof a=="function"){let d=a();if(typeof d=="boolean"&&!d)return}let c=s.attributes[ie];c&&typeof c=="object"&&Object.assign(l,c);let m=Object.keys(l);if(!m.length){b.warn(["请先配置键",s]);return}m.forEach(d=>{let u=l[d];t.$data.data.has(d)&&b.warn("请检查该key(已存在): "+d),t.$data.data.set(d,u);});}function n(s){for(let l=0;l<s.length;l++){let o=s[l];e(o);let a=o.forms;a&&Array.isArray(a)&&n(a);}}let i=this.getPanelContentConfig();for(let s=0;s<i.length;s++){let l=i[s];if(!l.forms)continue;let o=l.forms;o&&Array.isArray(o)&&n(o);}},setValue(t,e){let n=Y(rt,{}),i=n[t];n[t]=e,W(rt,n),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,i,e);},getValue(t,e){let i=Y(rt,{})[t];return i??(this.$data.data.has(t)?this.$data.data.get(t):e)},deleteValue(t){let e=Y(rt,{}),n=e[t];Reflect.deleteProperty(e,t),W(rt,e),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,n,undefined);},addValueChangeListener(t,e,n){let i=Math.random();return this.$listener.listenData.set(t,{id:i,key:t,callback:e}),n&&n.immediate&&e(t,this.getValue(t),this.getValue(t)),i},removeValueChangeListener(t){let e=null;for(const[n,i]of this.$listener.listenData.entries())if(i.id===t){e=n;break}typeof e=="string"?this.$listener.listenData.delete(e):console.warn("没有找到对应的监听器");},triggerMenuValueChange(t,e,n){if(this.$listener.listenData.has(t)){let i=this.$listener.listenData.get(t);if(typeof i.callback=="function"){let s=this.getValue(t),l=s,o=s;typeof e<"u"&&arguments.length>1&&(l=e),typeof n<"u"&&arguments.length>2&&(o=n),i.callback(t,o,l);}}},hasKey(t){let e=Y(rt,{});return t in e},execMenu(t,e,n=false,i){if(!(typeof t=="string"||typeof t=="object"&&Array.isArray(t)))throw new TypeError("key 必须是字符串或者字符串数组");let s=[];typeof t=="object"&&Array.isArray(t)?s=[...t]:s.push(t);let l;for(let o=0;o<s.length;o++){const a=s[o];if(!this.$data.data.has(a)){b.warn(`${t} 键不存在`);return}let c=$.getValue(a);if(n&&(c=!c),typeof i=="function"){let m=i(a,c);typeof m=="boolean"&&(c=m);}if(!c)break;l=c;}l&&e(l);},execMenuOnce(t,e,n,i,s){if(typeof t!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(t)){b.warn(`${t} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(t))return;this.$data.oneSuccessExecMenu.set(t,1);let l=()=>{let u=$.getValue(t);return typeof n=="function"?n(t,u):u},o=[],a=u=>{let f=l(),p=[];if(u instanceof HTMLStyleElement?p=[u]:Array.isArray(u)&&(p=[...u.filter(h=>h!=null&&h instanceof HTMLStyleElement)]),f)o=o.concat(p);else for(let h=0;h<p.length;h++)p[h].remove(),p.splice(h,1),h--;},c=u=>typeof s=="function"?s(t,u):u,m=u=>{let f=[];if(c(u)){let p=e(u,a);p instanceof HTMLStyleElement?f=[p]:Array.isArray(p)&&(f=[...p.filter(h=>h!=null&&h instanceof HTMLStyleElement)]);}for(let p=0;p<o.length;p++)o[p].remove(),o.splice(p,1),p--;o=[...f];};this.addValueChangeListener(t,(u,f,p)=>{let h=p;typeof i=="function"&&(h=i(u,p,f)),m(h);});let d=l();d&&m(d);},execInheritMenuOnce(t,e,n,i){let s=this;const l=(o,a)=>{let c=s.getValue(o),m=s.getValue(a);if(typeof i=="function"){let d=i(c,m);if(d!=null)return d}return c};this.execMenuOnce(t,n,()=>l(t,e),()=>l(t,e)),this.execMenuOnce(e,()=>{},()=>false,()=>(this.triggerMenuValueChange(t),false));},onceExec(t,e){if(typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(t)||(e(),this.$data.onceExec.set(t,1));},showPanel(){B.panel({title:{text:`${kt}-设置`,position:"center",html:false,style:""},content:this.getPanelContentConfig(),mask:{enable:true,clickEvent:{toClose:true,toHide:false}},width:Mt.setting.width,height:Mt.setting.height,drag:true,only:true});},isMobile(){return window.innerWidth<550},getWidth(){return window.innerWidth<550?"88vw":"550px"},getHeight(){return window.innerHeight>450?"450px":"88vh"},getPanelContentConfig(){return [ne,ce,me,de,pe,ue]}},he=`.pops-confirm-content {\r
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
`,ge={$data:{cid:""},init(){this.registerMenu();},registerMenu(){j.registerLeftMenu({name:"小黑屋",iconColor:"#000000",icon:"",callback:()=>{this.showBlackHome();}});},async showBlackHome(){let t=x.loading("正在获取小黑屋名单中..."),e=await this.getBlackListInfo("");if(t.close(),!e)return;if(e.data.length===0){x.error("获取小黑屋名单为空");return}this.$data.cid=e.next_cid;let n=B.confirm({title:{text:"小黑屋名单",position:"center"},content:{text:`
                <div class="blackhome-user-filter">
                    <input placeholder="过滤用户名/操作人员/UID(可正则)">
                </div>
                <div class="blackhome-user-list"></div>
                `,html:true},btn:{ok:{text:"下一页",callback:async()=>{let a=x.loading("正在获取小黑屋名单中...");b.info("下一页的cid: ",this.$data.cid);let c=await this.getBlackListInfo(this.$data.cid);a.close(),c&&(this.$data.cid=c.next_cid,c.data.forEach(m=>{let d=this.createListViewItem(m);i.appendChild(d);}),c.data.length===0?x.error("获取小黑屋名单为空"):x.success(`成功获取 ${c.data.length}条数据`));}},cancel:{text:"关闭"}},width:"88vw",height:"82vh",style:he,mask:{enable:true}}),i=n.$shadowRoot.querySelector(".blackhome-user-list"),s=n.$shadowRoot.querySelector(".blackhome-user-filter input");e.data.forEach(a=>{let c=this.createListViewItem(a);i.appendChild(c);}),x.success(`成功获取 ${e.data.length}条数据`);let l=false;r.on(s,["input","propertychange"],g.debounce(()=>{let a=s.value.trim();if(!l){if(l=true,a==""){n.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(c=>{c.removeAttribute("style");}),l=false;return}n.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(c=>{c.getAttribute("data-name").match(new RegExp(a,"ig"))||c.getAttribute("data-uid").trim().match(new RegExp(a,"ig"))||c.getAttribute("data-operator").match(new RegExp(a,"ig"))?c.removeAttribute("style"):c.setAttribute("style","display:none;");}),l=false;}}));let o=await this.getBlackListInfo(this.$data.cid);o&&(this.$data.cid=o.next_cid);},async getBlackListInfo(t=""){let e={mod:"misc",action:"showdarkroom",cid:t,ajaxdata:"json"},n=await H.get(`/forum.php?${g.toSearchParamsStr(e)}`,{headers:{"User-Agent":g.getRandomPCUA()},responseType:"json"});if(!n.status)return;let i=g.toJSON(n.data.responseText),s=i.message.split("|"),l=s[s.length-1],o=g.parseObjectToArray(i.data),a=[],c=[];return o.forEach(m=>{let d=m.dateline.match(/([0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]*[0-9]{1,2}:[0-9]{1,2})/g);if(d==null){let u=parseInt((Date.now()/1e3).toString()),f=0,p=m.dateline.match(/([0-9]+|半)[\s\S]*秒前/),h=m.dateline.match(/([0-9]+|半)[\s\S]*分钟前/),_=m.dateline.match(/([0-9]+|半)[\s\S]*小时前/),k=m.dateline.match(/昨天[\s\S]*(\d{2}):(\d{2})/),q=m.dateline.match(/前天[\s\S]*(\d{2}):(\d{2})/),S=m.dateline.match(/([0-9]+|半)[\s\S]*天前/);if(p)p=p[p.length-1],p=p.replace(/半/g,.5),p=parseFloat(p),f=u-p;else if(h)h=h[h.length-1],h=h.replace(/半/g,.5),h=parseFloat(h),f=u-h*60;else if(_)_=_[_.length-1],_=_.replace(/半/g,.5),_=parseFloat(_),f=u-_*60*60;else if(k){let R=k[1],I=k[2];f=u-86400-parseInt(R)*3600-parseInt(I)*60;}else if(q){let R=q[1],I=q[2];f=u-86400*2-parseInt(R)*3600-parseInt(I)*60;}else S&&(S=S[S.length-1],S=S.replace(/半/g,.5),S=parseFloat(S),f=u-S*60*60*24);m.time=parseInt(f.toString())*1e3,a=a.concat(m);return}else d=d[0];m.time=g.formatToTimeStamp(d),a=a.concat(m);}),g.sortListByProperty(a,"time"),g.sortListByProperty(c,"time",false),a=a.concat(c),{next_cid:l,data:a}},createListViewItem(t){let e=r.createElement("div",{className:"blackhome-user-item",innerHTML:`
                <div class="blackhome-user-avatar">
                    <div class="blackhome-user">
                    <img src="${F.getAvatar(t.uid,"big")}" loading="lazy">
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
                        <img loading="lazy" src="${F.getAvatar(t.operatorid,"big")}">
                        <p>${t.operator}</p>
                    </div>
                    <div class="blackhome-operator-user-info">
                    ${t.reason}
                    </div>
                    </div>
                </div>
                `},{"data-name":t.username,"data-uid":t.uid,"data-operator":t.operator,"data-operator-uid":t.operatorid});return r.on(e,"click",".blackhome-user img",function(){window.open(`home.php?mod=space&uid=${t.uid}&do=profile`,"_blank");}),r.on(e,"click",".blackhome-operator-user img",function(){window.open(`home.php?mod=space&uid=${t.operatorid}&do=profile`,"_blank");}),e}},fe=`.pops-alert-content{\r
	display: flex;\r
	flex-direction: column;\r
}\r
.pops-alert-content > .online-user-info{\r
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
`,be={$data:{},init(){this.registerMenu();},registerMenu(){j.registerLeftMenu({name:"在线用户",iconColor:"#2d92ff",icon:"",callback:()=>{this.showOnlineUser();}});},async showOnlineUser(){let t=x.loading("正在获取在线用户名单中..."),e=await this.getOnlineUserListInfo();if(t.close(),!e)return;let n=B.alert({title:{text:"在线用户",position:"center"},content:{text:`
                <div class="online-user-info">${e.totalOnline} 人在线 - ${e.onlineUser} 会员${e.invisibleUser==0?"":`(${e.invisibleUser}隐身)`} - ${e.noRegisterUser} 位游客</div>
                <div class="online-user-filter">
                    <input placeholder="过滤用户名/身份/UID(可正则)"></div>
                <div class="online-user-list"></div>
                `,html:true},btn:{ok:{text:"关闭",type:"default"}},width:"88vw",height:"82vh",style:fe,mask:{enable:true}}),i=n.$shadowRoot.querySelector(".online-user-list"),s=n.$shadowRoot.querySelector(".online-user-filter input");e.data.forEach(o=>{let a=this.createListViewItem(o);i.appendChild(a);}),x.success(`成功获取 ${e.data.length}条数据`);let l=false;Z.on(s,["propertychange","input"],g.debounce(()=>{let o=s.value.trim();if(!l){if(l=true,o==""){n.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(a=>{a.removeAttribute("style");}),l=false;return}n.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(a=>{a.getAttribute("data-name").match(new RegExp(o,"ig"))||a.getAttribute("data-sf").match(new RegExp(o,"ig"))||a.getAttribute("data-uid").match(new RegExp(o,"ig"))?a.removeAttribute("style"):a.setAttribute("style","display:none;");}),l=false;}}));},async getOnlineUserListInfo(){let t={showoldetails:"yes"},e=await H.get(`/forum.php?${g.toSearchParamsStr(t)}`,{headers:{"User-Agent":g.getRandomPCUA()}});if(!e.status)return;let n=g.parseFromString(e.data.responseText,"text/html"),i={data:[],totalOnline:0,onlineUser:0,noRegisterUser:0,invisibleUser:0};n.querySelectorAll("#onlinelist ul li").forEach(o=>{let a=o.querySelector("a").getAttribute("href").match("uid-(.+?).html")[1],c=F.getAvatar(a,"middle"),m=o.querySelector("a").innerText,d="",u=o.querySelector("a").getAttribute("href"),f=o.querySelector("img").src;f.indexOf("online_member")!=-1?d="会员":f.indexOf("online_moderator")!=-1?d="版主":f.indexOf("online_supermod")!=-1?d="超级版主":f.indexOf("online_admin")!=-1?d="管理员":d="未知身份",i.data.push({uid:a,avatar:c,name:m,sf:d,space:u});});let l=n.querySelector("#online div.bm_h span.xs1").textContent;return i.totalOnline=g.parseInt(l.match(/([0-9]*)\s*人在线/i),0),i.onlineUser=g.parseInt(l.match(/([0-9]*)\s*会员/i),0),i.noRegisterUser=g.parseInt(l.match(/([0-9]*)\s*位游客/i),0),i.invisibleUser=g.parseInt(l.match(/([0-9]*)\s*隐身/i),0),i},createListViewItem(t){let e=Z.createElement("div",{className:"online-item",innerHTML:`
                <div class="online-user">
                    <img data-avatar src="${t.avatar}" loading="lazy" class="online-user-avatar">
                    <div class="online-user-info">
                        <p data-name>${t.name}</p>
                        <span data-sf="${t.sf}">${t.sf}</span>
                        <span data-uid>UID: ${t.uid}</span>
                    </div>
                </div>
            `},{"data-name":t.name,"data-uid":t.uid,"data-sf":t.sf});return Z.on(e,"click",".online-user-avatar",n=>{g.preventEvent(n),window.open(`home.php?mod=space&uid=${t.uid}&do=profile`,"_blank");}),e}},_e=()=>{var t,e,n,i,s,l,o,a,c,m,d;m=/((https?:\/\/|www\.)[\x21-\x7e]+[\w\/]|(\w[\w._-]+\.(com|cn|org|net|info|tv|cc))(\/[\x21-\x7e]*[\w\/])?|ed2k:\/\/[\x21-\x7e]+\|\/|thunder:\/\/[\x21-\x7e]+=)/gi,t=function(p){var h;if(p=(h=p.originalTarget)!=null?h:p.target,p!=null&&p.localName==="a"&&p.className.indexOf("texttolink")!==-1&&(h=p.getAttribute("href"),h.indexOf("http")!==0&&h.indexOf("ed2k://")!==0&&h.indexOf("thunder://")!==0))return p.setAttribute("href","http://"+h)},document.addEventListener("mouseover",t),c=function(p){if(typeof p=="object"&&p!=null&&typeof p.parentNode<"u"&&typeof p.parentNode.className<"u"&&typeof p.parentNode.className.indexOf=="function"&&p.parentNode.className.indexOf("texttolink")===-1&&p.nodeName!=="#cdata-section"){var h=p.textContent.replace(m,'<a href="$1" target="_blank" class="texttolink">$1</a>');if(p.textContent.length!==h.length){var _=document.createElement("span");return _.innerHTML=h,console.log(`识别: ${_.querySelector("a")}`),p.parentNode.replaceChild(_,p)}}},e="a svg canvas applet input button area pre embed frame frameset head iframe img option map meta noscript object script style textarea code".split(" "),d=`//text()[not(ancestor::${e.join(") and not(ancestor::")})]`,n=new RegExp(`^(${e.join("|")})$`,"i"),s=function(p,h){var _,k;if(h+1e4<p.snapshotLength){var q=_=h;for(k=h+1e4;h<=k?_<=k:_>=k;q=h<=k?++_:--_)c(p.snapshotItem(q));setTimeout(function(){return s(p,h+1e4)},15);}else for(q=_=h,k=p.snapshotLength;h<=k?_<=k:_>=k;q=h<=k?++_:--_)c(p.snapshotItem(q));},l=function(p){return p=document.evaluate(d,p,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null),s(p,0)},o=function(p){for(p=document.createTreeWalker(p,NodeFilter.SHOW_TEXT,{acceptNode:function(h){if(!n.test(h.parentNode.localName))return NodeFilter.FILTER_ACCEPT}},false);p.nextNode();)c(p.currentNode);},a=new window.MutationObserver(function(p){var h,_,k=0;for(h=p.length;k<h;k++){var q=p[k];if(q.type==="childList"){var S=q.addedNodes,R=0;for(_=S.length;R<_;R++)q=S[R],o(q);}}}),i=function(){return l(document.body),a.observe(document.body,{childList:true,subtree:true})};var u=function(p){var h=p.getAttribute("href");if(h.indexOf("http")!==0&&h.indexOf("ed2k://")!==0&&h.indexOf("thunder://")!==0)return p.setAttribute("href","http://"+h)},f=function(){for(var p=document.getElementsByClassName("texttolink"),h=0;h<p.length;h++)u(p[h]);};setTimeout(f,1500),setTimeout(i,100);},Ft={$flag:{isSetHljsCSS:false},init(){$.execMenuOnce("mt-forum-post-autoExpandContent",()=>this.autoExpandContent()),$.execMenuOnce("mt-forum-post-repairImageWidth",()=>this.repairImageWidth()),r.ready(()=>{$.execMenu("mt-forum-post-removeFontStyle",()=>{this.removeFontStyle();}),$.execMenu("mt-forum-post-removeCommentFontStyle",()=>{this.removeCommentFontStyle();}),$.execMenu("mt-forum-post-addCommentOnBtn",()=>{this.addCommentOnBtn();}),$.execMenuOnce("mt-forum-post-loadNextPageComment",()=>{this.loadNextPageComment();}),$.execMenuOnce("mt-forum-post-codeQuoteOptimization",()=>{this.codeQuoteOptimization();}),$.execMenuOnce("mt-forum-post-editorOptimizationNormal",()=>{tt.init();}),$.execMenu("mt-forum-post-optimizationImagePreview",()=>{this.optimizationImagePreview();}),$.execMenuOnce("mt-forum-post-setAttachmentsClickTip",()=>{this.setAttachmentsClickTip();});});},autoExpandContent(){return b.info("自动展开帖子内容"),G(`
        div.comiis_message.bg_f.view_one.b_b.cl.message>div.comiis_messages.comiis_aimg_show.cl{max-height:inherit!important;overflow-y:inherit!important;position:inherit!important}
        .comiis_lookfulltext_bg,.comiis_lookfulltext_key{display:none!important} 
        `)},repairImageWidth(){return b.info("修复图片宽度"),G(`
        .comiis_messages img{
            max-width: 100% !important;
        }`)},removeFontStyle(){b.info("移除帖子字体效果");let t=C(".comiis_a.comiis_message_table");t&&r.html(t,r.html(t).replace(X.fontSpecial,""));},removeCommentFontStyle(){var n;b.info("移除评论区的字体效果");let t=N("font"),e=((n=C(".comiis_postlist .comiis_postli"))==null?undefined:n.innerHTML)||"";e!==""&&(t.forEach(i=>{e.includes(i.innerHTML)||(i.removeAttribute("color"),i.removeAttribute("style"),i.removeAttribute("size"));}),N(".comiis_message.message").forEach(i=>{if(e.includes(i.innerHTML)){i.innerHTML=i.innerHTML.replace(X.fontSpecial,"");let s=i.nextElementSibling;s&&s.localName==="strike"&&(s.outerHTML=s.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));}})),N(".comiis_postli.comiis_list_readimgs.nfqsqi").forEach(i=>{let s=i.parentElement;s&&s.localName==="strike"&&(s.outerHTML=s.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));});},addCommentOnBtn(){b.info("添加【点评】按钮"),g.waitNodeList(".bottom_zhan:not([data-isaddreviews])").then(t=>{t.forEach(e=>{var u,f,p;e.setAttribute("data-isaddreviews","true");var n=e.querySelector("a");if(n){var i=n.getAttribute("datahref")||n.getAttribute("data-href")||n.href||"",s=i.replace("mod=post&","mod=misc&").replace("action=reply&","action=comment&"),l=(u=i==null?undefined:i.match(/&page=([\w]+)/i))==null?undefined:u[1],o=`${s}&extra=page%3D1&page=${l}`,a=e==null?undefined:e.closest(".comiis_postli[id]"),c=(f=a.getAttribute("id"))==null?undefined:f.replace("pid","&pid=");o=o+c;var m=((p=a.querySelector(".top_user.f_b"))==null?undefined:p.textContent)||"",d=r.parseHTML(`
						<a href="${o}" class="f_c dialog">
							<i class="comiis_font mt_review" style="content: url(&quot;https://s1.ax1x.com/2020/04/26/Jcq8VU.png&quot;); height: 15px;"></i>
						</a>
						`,true,false);r.on(d,"click",function(){g.waitNode("div[id=ntcmsg_popmenu]>div>span.f_c").then(h=>{try{h.innerText="点评 "+m;}catch(_){b.error("修改点评失败",_);}});}),r.prepend(e,d);}});});},loadNextPageComment(){var c;if(b.info("自动加载下一页评论"),document.title.includes("提示信息 - MT论坛"))return;function t(){return C("#loading-comment-tip")}function e(){return C("#loading-comment-tip").parentElement}function n(m){let d=t(),u=e();r.css(u,"display","");let p=Array.from(m.querySelectorAll("a[href]")).find(q=>{var S;return ((S=q.textContent)==null?undefined:S.trim())==="下一页"}).href;if(b.info("获取下一页url：",p),p.includes("javascript:;")){b.info("暂无下一页的评论"),r.remove(u);return}function h(){r.remove(".comiis_page.bg_f"),r.remove(u),r.off(d,"click",_),r.off(window,"scroll",k.run);}async function _(){r.text(d,"正在加载评论中..."),r.css(u,"display",""),b.info("请求下一页评论："+p);let q=p,S=await H.get(q,{fetch:true});if(!S.status)return;let R=r.parseHTML(S.data.responseText,true,true),I=C(".comiis_postlist.kqide"),z=R.querySelector(".comiis_postlist.kqide"),E=R.querySelector(".nxt"),A=(E==null?undefined:E.getAttribute("href"))||(E==null?undefined:E.href);if(A){if(b.success("成功获取到下一页评论"),A===p){b.warn("获取到下一页评论的url和上次请求的url相同，判定为已加载完全部评论，移除监听事件"),h();return}p=A;}else b.error("评论全部加载完毕，移除监听事件"),h();let O=E==null?undefined:E.parentElement.querySelector("strong");if(O){let v=C("#select_a");if(v){let w=Array.from(v.childNodes).find(T=>T.nodeName==="#text");w&&(w.textContent=`第 ${O.textContent} 页`);}}$.execMenu("mt-forum-post-syncNextPageUrl",()=>{if(window===(top==null?undefined:top.window)){let v=new URL(q),w=`${v.pathname}${v.search}`;window.history.pushState("forward","",w);}}),r.append(I,z),Ft.init();}var k=new g.LockFunction(async()=>{g.isNearBottom(50)&&await _();});r.text(d,"请上下滑动或点击加载"),r.on(window,"scroll",k.run),r.on(d,"click",_),k.run();}let s=r.parseHTML(`
		<div class="comiis_multi_box bg_f b_t">
			<label class="comiis_loadbtn bg_e f_d" id="loading-comment-tip">正在等待页面加载完毕</label>
		</div>`,true,false),l=C(".comiis_bodybox");r.append(l,s);let o=C(".comiis_pltit span.f_d")||C("#comiis_foot_memu .comiis_kmvnum");if(C(".comiis_pltit h2")&&((c=C(".comiis_pltit h2"))!=null&&c.textContent.includes("暂无评论"))){r.remove(e()),b.info("暂无评论");return}parseInt(o.textContent)>=10?g.waitNode(".comiis_page.bg_f").then(m=>{n(m);}):(r.remove(e()),b.info("无多页评论"));},codeQuoteOptimization(){b.info("代码块优化");function t(n){var i=["add","and","cmp","cmpg","cmpl","const","div","double","float","goto","if","int","long","move","mul","neg","new","nop","not","or","rem","return","shl","shr","sput","sub","throw","ushr","xor"],s=["aget","aput","array","check","execute","fill","filled","goto/16","goto/32","iget","instance","invoke","iput","monitor","packed","sget","sparse"],l=["transient","constructor","abstract","final","synthetic","public","private","protected","static","bridge","system"];return {aliases:["smali"],contains:[{className:"string",begin:'"',end:'"',relevance:0},n.COMMENT("#","$",{relevance:0}),{className:"keyword",variants:[{begin:"\\s*\\.end\\s[a-zA-Z0-9]*"},{begin:"^[ ]*\\.[a-zA-Z]*",relevance:0},{begin:"\\s:[a-zA-Z_0-9]*",relevance:0},{begin:"\\s("+l.join("|")+")"}]},{className:"built_in",variants:[{begin:"\\s("+i.join("|")+")\\s"},{begin:"\\s("+i.join("|")+")((\\-|/)[a-zA-Z0-9]+)+\\s",relevance:10},{begin:"\\s("+s.join("|")+")((\\-|/)[a-zA-Z0-9]+)*\\s",relevance:10}]},{className:"class",begin:`L[^(;:
]*;`,relevance:0},{begin:"[vp][0-9]+"}]}}this.$flag.isSetHljsCSS||(ut.registerLanguage("smali",t),G(`
			.hljs ol{margin:0 0 0 10px;padding:10px 10px 10px 25px}
			.hljs li{padding-left:10px;list-style-type:decimal-leading-zero;font-family:Monaco,Consolas,'Lucida Console','Courier New',serif;font-size:12px;line-height:1.8em}
			.hljs li:hover{background:#2c313c}
			.hljs li::marker{unicode-bidi:isolate;font-variant-numeric:tabular-nums;text-transform:none;text-indent:0!important;text-align:start!important;text-align-last:start!important}
			select.code-select-language{height:40px;line-height:40px;font-size:14px;border:1px solid #5c5c5c;border-radius:5px;text-align:center;outline:0;margin-left:10px}
			`),G(`
			.reader-copy-button{background:#000;background-size:cover;background-repeat:no-repeat;background-position:0;color:#fff;line-height:40px;display:block;text-align:center;border-radius:5px;cursor:pointer;font-size:15px;width:70px;user-select:none}
			.reader-copy-button i{display:inline-block;margin-right:6px;width:16px;height:16px;background-size:cover;vertical-align:sub;user-select:none}
			`),r.on(document,"click",".reader-copy-button",async function(n){g.preventEvent(n);let i=n.target,s=C(i.getAttribute("data-code-selector"));return await g.setClip(s.outerText||s.innerText),x.success("已复制到剪贴板"),false})),N(".comiis_blockcode.comiis_bodybg").forEach(n=>{if(n.getAttribute("data-copy"))return;n.setAttribute("data-copy","true");let i=r.createElement("div",{innerHTML:`
					<span class="reader-copy-button">
						<i>
						<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<title>复制按钮</title>
							<defs>
								<rect id="path-1" x="0" y="0" width="16" height="16"></rect>
							</defs>
							<g id="阅读页复制-拦截" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<g>
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<g id="矩形"></g>
									<path d="M4.11794319,3.55555556 L9.51168644,3.55555556 C10.4768443,3.55555556 11.2592593,4.33797056 11.2592593,5.30312837 L11.2592593,13.067242 C11.2592593,14.0323998 10.4768443,14.8148148 9.51168644,14.8148148 L4.11794319,14.8148148 C3.15278537,14.8148148 2.37037037,14.0323998 2.37037037,13.067242 L2.37037037,5.30312837 C2.37037037,4.33797056 3.15278537,3.55555556 4.11794319,3.55555556 Z" id="矩形" stroke="#DFDFDF" stroke-width="1.45631068" mask="url(#mask-2)"></path>
									<path d="M5.03703704,0.888888889 L12.1481481,0.888888889 C13.1299877,0.888888889 13.9259259,1.68482711 13.9259259,2.66666667 L13.9259259,12.7407407" id="形状" stroke="#DFDFDF" stroke-width="1.45631068" mask="url(#mask-2)"></path>
								</g>
							</g>
						</svg>
						</i>
					复制
					</span>`},{style:"height: 34px;margin: 14px 0px;display: inline-flex;align-items: flex-end;"});r.before(n,i);function s(d,u="java"){d.oldValue||(d.oldValue=d.textContent),d.innerHTML=ut.highlight(d.oldValue,{language:u}).value.replace(/\\n$/gi,"");}let l=ut.highlightAuto(n.textContent).language,o=document.createElement("div"),a=document.createElement("select"),c=ut.listLanguages().sort();c=c.concat("自动检测");let m="";c.forEach(d=>{d.startsWith("自动检测")?m+=`<option data-value="${l}" selected="selected">${d}(${l})</option>`:m+=`<option data-value="${d}">${d}</option>`;}),a.className="code-select-language",a.innerHTML=m,r.on(a,"change",function(){let d=a.selectedOptions[0].getAttribute("data-value");a.setAttribute("aria-label",d),b.info("切换代码块语言: ",d),n.querySelectorAll("li").forEach(u=>{s(u,d);});}),g.preventEvent(a,"click"),o.appendChild(a),i.append(o),g.dispatchEvent(a,"change"),n.className="hljs",n.firstChild.removeAttribute("class"),i.querySelector(".reader-copy-button").setAttribute("data-code-selector",g.getElementSelector(n));});},optimizationImagePreview(){b.info("图片查看优化");function t(n=[],i=0){let s="";n.forEach(a=>{s+=`<li><img data-src="${a}"></li>`;});let l=r.createElement("ul",{innerHTML:s}),o=new Rt(l,{inline:false,url:"data-src",zIndex:g.getMaxZIndex()+100,hidden:()=>{o.destroy();}});b.info("查看的图片的下标",i),o.view(i),o.zoomTo(1),o.show();}let e=[{hostName:"avatar-bbs.mt2.cn",pathName:"*"},{hostName:"cdn-bbs.mt2.cn",pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"/uc_server/avatar.php"}];g.waitNodeList("div.comiis_postlist.kqide .comiis_postli:not([data-isHandlingViewIMG])").then(n=>{n.forEach(i=>{i.setAttribute("data-isHandlingViewIMG","true");let s=[];i.querySelectorAll("img").forEach(l=>{let o=l.src,a=new URL(o).hostname,c=new URL(o).pathname,m=l.parentElement;m.nodeName.toLowerCase()==="span"&&m.removeAttribute("onclick"),m.nodeName.toLowerCase()==="a"&&m.getAttribute("href")===o&&(m.setAttribute("href","javascript:;"),m.removeAttribute("target"));let d=false;for(let u of e)if(a.indexOf(u.hostName)!=-1&&c.match(u.pathName)){d=true;break}d||(s=[...s,o],r.on(l,"click",function(){b.info("点击图片",l);let u=s.findIndex(f=>f==o);t(s,u);}));}),s.length&&b.info("处理的图片",s);});});},setAttachmentsClickTip(){b.info("附件点击提醒");function t(e){if(e.hasAttribute("href")){let n=e.getAttribute("href"),i=e.querySelector("span.f_ok"),s=e.querySelector(".attach_size");if(r.text(s).indexOf("金币")===-1)return;b.info("发现附件",e),b.info("该附件是金币附件，拦截！");let l=r.text(i);e.setAttribute("data-href",e.getAttribute("href")),e.removeAttribute("href"),i.innerText="【已拦截】"+l,e.onclick=function(){b.info("附件url：",n),B.confirm({title:{text:"提示",position:"center"},content:{text:`<br />确定花费2金币下载附件 <a style="color: #507daf !important;">${l}</a> ？<br /><br />`,html:true},btn:{ok:{callback:o=>{window.open(n,"_blank"),o.close();}}},mask:{enable:true},width:"88vw",height:"200px"});};}}g.mutationObserver(document.documentElement,{callback:()=>{N(".attnm a").forEach(e=>{t(e);}),N(".comiis_attach a").forEach(e=>{t(e);});},config:{childList:true,subtree:true}}),g.waitNodeList(".attnm a").then(e=>{e.forEach(n=>{t(n);});}),g.waitNodeList(".comiis_attach a").then(e=>{e.forEach(n=>{t(n);});});}},ye={init(){G(`
		/* 去除搜索框的蒙版 */
        #comiis_search_noe{
            display: none !important;
        }
		/* 显示真正的试搜索框 */
        #comiis_search_two{
            display: block !important;
        }
        `),Z.ready(()=>{$.execMenuOnce("mt-search-showSearchHistory",()=>{this.showSearchHistory();}),$.execMenuOnce("mt-search-repairClearBtn",()=>{this.repairClearBtn();}),$.execMenuOnce("mt-search-searchInputAutoFocus",()=>{this.searchInputAutoFocus();});});},async showSearchHistory(){b.info("显示搜索历史");let t=Y("search_history",[]),e=C("#scform_srchtxt"),n=C("#searchform"),i=B.searchSuggestion({target:e,inputTarget:e,data:t,getItemHTML:function(o){return o},getData(o){return t.filter(a=>a.includes(o))},deleteIcon:{enable:true,callback(o,a,c){let m=t.findIndex(d=>d===c);m!==-1&&(t.splice(m,1),W("search_history",t)),a.remove();}},itemClickCallBack(o,a,c){e.value=c,n.submit();}});i.init(),i.setAllEvent();function s(){let o=document.querySelector("#scform_submit");Z.on(o,"click",function(){let a=e.value;if(a!=""){let c=Y("search_history",[]);c.includes(a)?b.info("已有该搜索历史记录"):(b.info("无该记录，追加"),c.push(a)),W("search_history",c);}});}function l(){let a='<div class="comiis_p12 f14 bg_f f_c b_b cl" style="padding-bottom:10px">搜索记录个数: '+Y("search_history",[]).length+`<button class="btn_clear_search_history" style="
                    border: none;
                    float: right;
                    background: red;
                    color: #fff;
                    border-radius: 3px;
                    font-weight: 600;
                    min-width: 20vw;
                    width: 20vw;
                ">清理记录</button></div>`;Z.before(document.querySelector(".comiis_p12"),a);let c=document.querySelector(".btn_clear_search_history");Z.on(c,"click",m=>{g.preventEvent(m),at("search_history"),window.location.reload();});}s(),l();},repairClearBtn(){g.waitNode("a.ssclose").then(t=>{b.info("修复清空按钮"),Z.on(t,"click",e=>{let n=document.querySelector("#scform_srchtxt");n?n.value="":x.error("获取输入框失败");},{capture:true});});},searchInputAutoFocus(){new URLSearchParams(window.location.search).has("kw")||g.waitNode("#scform_srchtxt").then(e=>{b.info("搜索框自动获取焦点"),e.focus();});}},xe={init(){r.ready(()=>{$.execMenuOnce("mt-sign-showTodaySignStar",()=>{this.showTodaySignStar();}),$.execMenuOnce("mt-sign-showTodayRanking",()=>{this.showTodayRanking();});});},async showTodaySignStar(){b.info("显示【今日签到之星】");let t=document.querySelector(".pg_k_misign .comiis_qdinfo"),e=document.createElement("ul"),n=await H.get("/k_misign-sign.html",{headers:{"User-Agent":g.getRandomPCUA()}});if(!n.status)return;let s=r.parseHTML(n.data.responseText,true,true).querySelector("#pt span.xg1");if(!s)return;let l=r.text(s).replace("今日签到之星：","");e.innerHTML=`
		<li class="f_f" style="display: flex;flex-direction: column;width: 100%;">
			<span class="comiis_tm">今日签到之星</span>
			${l}
		</li>
		`;let o=document.querySelector(".comiis_space_box"),a=parseInt(getComputedStyle(o,null).height.replace("px","")),c=parseInt(getComputedStyle(o,null).paddingBottom.replace("px","")),m=a+c+50;G(`
		.comiis_space_box{
			height: ${m}px;
			background-size: 100% 100%;
		}
		.pg_k_misign .comiis_qdinfo{
			height: 110px !important;
		}`),t.append(e);},showTodayRanking(){b.info("显示【今日最先】");let t=document.querySelector(".comiis_topnv .comiis_flex .flex"),e=r.createElement("li",{className:"flex"}),n=r.createElement("a",{id:"k_misignlist_today_latest",href:"javascript:;",innerHTML:"今日最先"},{onclick:"ajaxlist('todayLatest');"});e.appendChild(n),r.after(t,e);let i=async o=>{let a=await H.get(`/k_misign-sign.html?operation=${o}`,{responseType:"html",headers:{"User-Agent":g.getRandomPCUA()}});if(!a.status)return;let m=r.parseHTML(a.data.responseText,true,true).querySelector("#J_list_detail .pg span");if(m&&typeof m.title<"u"){let d=m.title.match(/([0-9]+)/);if(d&&d.length==2)return parseInt(d[d.length-1]);x.error("获取页失败");}else x.error("请求最先签到的页失败");},s=async o=>{let a=await H.get(`/k_misign-sign.html?operation=list&op=&page=${o}`,{responseType:"html",headers:{"User-Agent":g.getRandomPCUA()}});if(!a.status)return;let m=r.parseHTML(a.data.responseText,true,true).querySelectorAll("#J_list_detail tbody tr"),d=[];if(m.length==2&&m[0].textContent.indexOf("暂无内容")!=-1)return d;for(let u=1;u<=m.length-2;u++){let f=m[u],p={user:"",uid:"",avatar:"",days:"",monthDays:"",time:"",reward:""},h=f.children[0].getElementsByTagName("a")[0].textContent,k=f.children[0].getElementsByTagName("a")[0].href.match(/space-uid-([0-9]*)/)[1],q=f.children[1].textContent,S=f.children[2].textContent,R=f.children[3].textContent,I=f.children[5].textContent;p.user=h,p.uid=k,p.avatar=F.getAvatar(k,"small"),p.days=q,p.monthDays=S,p.time=R,p.reward=I,d.push(p);}return d};function l(o,a){let c=document.querySelector("#ranklist");r.html(c,o),r.attr(c,"listtype",a);}y.ajaxlist=async o=>{if(o=o,o=="today"?(loadingdelay=false,urlextra="list&op=today"):o=="month"?(loadingdelay=false,urlextra="list&op=month"):o=="zong"?(loadingdelay=false,urlextra="list&op=zong"):o=="calendar"?(loadingdelay=true,urlextra="calendar"):(loadingdelay=false,urlextra="list"),o=="todayLatest"){loadingdelay=false,urlextra="list&op=&page=0";let a=await i(urlextra);if(!a)return;let c=await s(a);if(c.reverse(),c.length<10){let u=await s(a-1);u.reverse(),c=c.concat(u),c.reverse();}let m="";c.reverse(),c.forEach(u=>{m=m+`
						<tbody id="autolist_${u.uid}">
			  				<tr>
								<td class="k_misign_lu">
									<a href="home.php?mod=space&amp;uid=${u.uid}">
										<img src="${u.avatar}" loading="lazy">
									</a>
								</td>
								<td class="k_misign_ll"><span></span></td>
								<td class="k_misign_lc">
									<h4 class="f_c">
										<a href="home.php?mod=space&amp;uid=${u.uid}">${u.user}</a>
										<span>${u.time}</span>
										<span class="y">总天数 ${u.days}天</span>
									</h4>
									<p class="f_0">月天数 ${u.monthDays} 天，上次奖励 ${u.reward}</p>
				  				</td>
							</tr>
			  			</tbody>`;});let d=`
					<li class="styli_h bg_e"></li>
					<div class="comiis_topnv bg_f b_t b_b">
						<ul class="comiis_flex">
							<li class="flex"><a href="javascript:;" id="k_misignlist_today" onclick="ajaxlist('today');">今日排行</a></li>
							<li class="flex f_0"><em class="bg_0"></em><a href="javascript:;" id="k_misignlist_today_latest" onclick="ajaxlist('todayLatest');">今日最先</a>
							</li>
							<li class="flex"><a href="javascript:;" id="k_misignlist_month" onclick="ajaxlist('month');" class="f_c">本月排行</a>
							</li>
							<li class="flex"><a href="javascript:;" id="k_misignlist_zong" onclick="ajaxlist('zong');" class="f_c">总排行</a></li>
						</ul>
					</div>
					<div class="k_misign_wp">
						<div class="k_misign_list bg_f">
							<table id="misign_list">
							${m}
							</table>
						</div>
					</div>`;l(d,o);}else H.get(`plugin.php?id=k_misign:sign&operation=${urlextra}`,{responseType:"html",fetch:true}).then(a=>{let c=a.data.responseText;c=c.replace("今日排行</a></li>",`今日排行</a></li>
							<li class="flex">
								<a href="javascript:;" id="k_misignlist_today_latest" onclick="ajaxlist('todayLatest');" class="f_c">今日最先</a>
							</li>`),o=="today"&&(c=c.replace(`<li class="flex"><a href="javascript:;" id="k_misignlist_today" onclick="ajaxlist('today');">今日排行</a></li>`,`
								<li class="flex f_0">
									<em class="bg_0"></em>
									<a href="javascript:;" id="k_misignlist_today" onclick="ajaxlist('today');">今日排行</a>
								</li>
								`)),l(c,o);});};}},we={init(){$.execMenuOnce("mt-space-repairEnterSpace",()=>{this.repairEnterSpace();}),r.ready(()=>{$.execMenuOnce("mt-space-showCommentContent",()=>{this.showCommentContent();});});},repairEnterSpace(){if(b.info("修复无法进入空间"),M.isSpace()){let t=window.location.href.match(/home.php\?(.+)/gi),e=t[t.length-1];e.split("&").length==2&&e.indexOf("uid=")!=-1&&e.indexOf("mod=space")!=-1&&(window.location.href=window.location.href+"&do=profile");}else if(M.isSpaceWithAt()){let t=window.location.href.match(/space-uid-(.+).html/i),e=t[t.length-1];window.location.href=`${window.location.origin}/home.php?mod=space&uid=${e}&do=profile`;}},async showCommentContent(){b.info("显示帖子回复内容"),G(`
		div.contrete-reply{padding:5px 10px;border-top:1px solid #f3f3f3}
		div.contrete-reply a{margin:0 10px}
		`);async function t(){let o=await H.get(window.location.href,{headers:{"User-Agent":g.getRandomPCUA()}});if(!o.status)return;let a=r.parseHTML(o.data.responseText,true,true),c=[];return a.querySelectorAll("#delform tr.bw0_all+tr").forEach(m=>{let d=[],u=m.querySelector("td"),f=r.html(u).replace(/^&nbsp;/,"");d.push(f);let p=r.next(m),h=a.querySelectorAll("#delform tr");for(let _=0;_<h.length&&!(!p||r.attr(p,"class")==="bw0_all");_++){let k=p.querySelector("td"),q=r.html(k).replace(/^&nbsp;/,"");d=d.concat(q),p=r.next(p);}c.push(...d);}),c}function e(){return g.getNodeListValue(j.comiisForumList(),j.comiisPostli(),j.comiisMmlist())}function n(o){let a={};return o.forEach(c=>{var _;let d=(_=r.createElement("div",{innerHTML:c}).querySelector("a"))==null?undefined:_.getAttribute("href"),u=d.match(X.ptid),f=d.match(X.pid);if(!u){x.error("获取ptid失败");return}if(!f){x.error("获取pid失败");return}let p=u[u.length-1],h=f[f.length-1];a[p]?a[p].data.push(c):a[p]={ptid:p,pid:h,data:[c]};}),a}var i=await t();if(i==null)return;var s=n(i);e().forEach((o,a)=>{let m=o.querySelector(".comiis_xznalist_bottom a").getAttribute("tid");if(!m){x.error("获取帖子tid失败"),b.error(o);return}s[m]&&s[m].data.forEach(d=>{r.append(o,`<div class="contrete-reply">${d}</div>`);});});}},dt={$key:{tipData:"tipToFreeSubjectForumPost"},init(){this.registerMenu();let t=this.getTipData();if(M.isPost()&&document.querySelector("span.kmren")){b.info("当前帖子存在需要购买主题");let l=false,o;t.forEach((c,m)=>{if(window.location.href.match(c.url)){l=true;return}}),l?(b.warn("已设置提醒"),o=r.createElement("a",{href:"javascript:;",className:"styli_tit f_c",innerHTML:`
                        <i class="comiis_font" style="color: #ffffff;"></i>
                        `}),r.on(o,"click",function(){B.confirm({title:{text:"提示",position:"center"},content:{text:"<p>确定移出付费主题白嫖列表？</p>",html:true},btn:{ok:{callback:function(){let c=t.findIndex((m,d)=>window.location.href.match(m.url));c!==-1?(t.splice(c,1),dt.setTipData(t),x.success("移除成功")):x.error("移除失败");}}},mask:{enable:true},width:"88vw",height:"300px"});})):(b.info("未设置提醒"),o=r.createElement("a",{href:"javascript:;",className:"styli_tit f_c",innerHTML:`
                        <i class="comiis_font" style="color: #FF9900;"></i>
                        `}),r.on(o,"click",()=>{let c=document.querySelector(".kmren"),m=r.parent(c),d=r.text(m).replace(/\t|\n/g,"").match(/[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]{1}[0-9]{1,2}:[0-9]{1,2}/);if(!d||d.length==0){x.error("获取付费主题到期时间失败");return}let u=d[0],f=g.formatToTimeStamp(u);t.push({url:window.location.href,title:document.title.replace(" - MT论坛",""),expirationTime:u,expirationTimeStamp:f,isVisited:false}),W("tipToFreeSubjectForumPost",t),x.success("添加成功"),setTimeout(function(){window.location.reload();},1500);}));let a=document.querySelector(".comiis_head.f_top .header_y");r.append(a,o);}function e(){let s=0;return Array.from(dt.getTipData()).forEach((l,o)=>{new Date().getTime()>l.expirationTimeStamp&&l.isVisited==false&&(s+=1);}),s}if(M.isMySpace()||M.isGuide()||M.isForumList()||M.isPlate()){let s=document.querySelector(".icon_msgs.bg_del.f_f"),l=0;s?(l=parseInt(r.text(s)),r.html(s,(l+e()).toString()),r.append(".comiis_head .header_z .kmuser em",'<span class="icon_msgs bg_del"></span>')):e()&&r.append(".comiis_head .header_z .kmuser em",'<span class="icon_msgs bg_del"></span>');}let n=document.querySelector(".sidenv_num.bg_del.f_f"),i=0;if(n)i=parseInt(r.text(n)),r.html(".sidenv_num.bg_del.f_f",(i+e()).toString());else {let s=e();s&&r.before(".sidenv_user em",`<span class="sidenv_num bg_del f_f">${s}</span>`);}e()&&r.append(".comiis_left_Touch .paymentsubjectreminder div.flex",`
                <span class="sidenv_num bg_del f_f" style="
                    position: relative;
                    border-radius: 18px;
                    height: 6px;
                    width: 6px;
                    left: 3px;
                    display: inline-flex;
                    bottom: 8px;
                "></span>`);},registerMenu(){j.registerLeftMenu({name:"付费主题白嫖提醒",icon:"",iconColor:"#ec0000",callback:()=>{this.showView();}});},showView(){b.info("显示白嫖列表");let t=dt.getTipData();B.alert({title:{text:"付费主题白嫖列表",position:"center"},content:{text:"",html:true},btn:{ok:{text:"关闭",type:"default"}},mask:{enable:true},width:"88vw",height:"88vh"});let e="",n=0,i="",s="",l=[],o=[],a=[];t.forEach((p,h)=>{let _="#f91212",k="";new Date().getTime()>p.expirationTimeStamp&&(_="#1e90ff",p.isVisited||(k=`
                        <span class="icon_msgs bg_del" style="position: fixed;width: 10px;height: 10px;border-radius: 50%;margin: 10px 0px 0px -15px;"></span>
                    `,n=n+1));let q={content:`
                <tbody id="autolist">
                    <tr>
                        <td style="width: 100%;">
                            <div style="display: inline-flex;">
                            ${k}
                            <div style="width: 240px;">                 
                                <a href="javascript:void(0);" t-href="${p.url}" t-index="${h}" style="color: #1e90ff;">${p.title}</a>
                                <li style="margin: 5px 15px;color: ${_};">${p.expirationTime}</li>
                            </div>
                            <div style="align-self: center;margin-left: 10px;" t-index="${h}" class="delsubjecttip">
                                <i class="comiis_font" style="font-size: 24px;padding: 0px 6px;"></i>
                            </div>
                            </div>
                        </td>
                    </tr>
                    <tr style="height:15px;"></tr>
                </tbody>`,timestamp:p.expirationTimeStamp};new Date().getTime()>p.expirationTimeStamp?k!=""?l.push(q):o.push(q):a.push(q);}),b.info("可白嫖但未访问：",l),b.info("可白嫖：",o),b.info("未到白嫖时间：",a),g.sortListByProperty(l,"expirationTimeStamp",false),g.sortListByProperty(o,"timestamp",false),g.sortListByProperty(a,"timestamp",false),b.info("排序后——可白嫖但未访问：",l),b.info("排序后——可白嫖：",o),b.info("排序后——未到白嫖时间：",a),i=g.mergeArrayToString(l,"content")+g.mergeArrayToString(o,"content"),s=g.mergeArrayToString(a,"content"),n>0&&(e=`
            <span class="icon_msgs bg_del f_f" style="
                display: inline-block;
                position: absolute;
                width: 16px;
                height: 16px;
                line-height: 16px;
                border-radius: 50%;
                font-size: 14px;
                text-align: center;
                margin: 3px 0px 0px 10px;
            ">${n}</span>`);let c=`
            <details class="subjectcanvisit" open="">
                <summary>可白嫖${e}</summary>
                <table id="paymentSubjectReminderIsFreeList" style="overflow: auto;height: inherit;margin: 15px 0px;">
                    ${i}    
                </table>
            </details>
        `,m=`
            <details class="subjectnotvisit">
                <summary>需付费</summary>
                <table id="paymentSubjectReminderIsPaidList" style="overflow: auto;height: inherit;margin: 15px 0px;">
                    ${s}
                </table>
            </details>
        `,d=document.querySelector(".msgcon");r.html(d,""),r.append(d,c),r.append(d,m),r.css(d,"height","400px"),r.on(document.querySelector(".delsubjecttip i.comiis_font"),"click",p=>{let h=p.target,_=r.parent(h);var k=parseInt(_.getAttribute("t-index"));B.confirm({title:{text:"提示",position:"center"},content:{text:"<p>确定移出付费主题白嫖列表？</p>",html:true},mask:{enable:true},btn:{ok:{callback:q=>{t.splice(k,1),dt.setTipData(t),g.deleteParentNode(h,"tr"),q.close();}}},width:"80vw",height:"300px"});});let u=document.querySelector("#paymentSubjectReminderIsFreeList");r.on(u,"click","a",p=>{var I,z,E,A,O,v;let h=p.target;var _=parseInt(h.getAttribute("t-index")),k=h.getAttribute("t-href");if(t[_].isVisited=true,dt.setTipData(t),window.open(k,"_blank"),h.setAttribute("style","color: #000000;"),((z=(I=h==null?undefined:h.parentElement)==null?undefined:I.parentElement)==null?undefined:z.children[0].className)!="icon_msgs bg_del")return;h.parentElement.parentElement.children[0].remove(),r.append(u,(v=(O=(A=(E=h==null?undefined:h.parentElement)==null?undefined:E.parentElement)==null?undefined:A.parentElement)==null?undefined:O.parentElement)==null?undefined:v.parentElement);let q=document.querySelector(".subjectcanvisit summary span.icon_msgs.bg_del.f_f"),S=r.text(q),R=parseInt(S)-1;R>0?r.html(q,R.toString()):q.remove();});let f=document.querySelector("paymentSubjectReminderIsPaidList");r.on(f,"click","a",p=>{let h=p.target;h.getAttribute("t-index");var _=h.getAttribute("t-href");window.open(_,"_blank"),h.setAttribute("style","color: #000000;");});},getTipData(){return Y(this.$key.tipData,[])},setTipData(t){W(this.$key.tipData,t);}},ve=`.pops {\r
	--icon-width: 24px;\r
	--right-btn-width: 115px;\r
}\r
\r
.small-window-drag {\r
	width: 100%;\r
	position: relative;\r
	height: 10px;\r
}\r
.small-window-drag div {\r
	width: 50px;\r
	margin: 0 auto;\r
	height: 4px;\r
	background: #d9d9d9;\r
	border-radius: 15px;\r
	bottom: 3px;\r
	position: relative;\r
}\r
\r
.pops[type-value] .pops-drawer-title {\r
	display: block;\r
	background: #fff;\r
	width: 100%;\r
	box-sizing: border-box;\r
	padding: 16px 0px;\r
	border-bottom: 1px solid #d6d6d6;\r
}\r
\r
.small-window-title-container {\r
	display: flex;\r
	justify-content: space-between;\r
	padding: 0px 16px;\r
}\r
.small-window-website-icon {\r
	width: var(--icon-width);\r
	height: var(--icon-width);\r
	align-self: center;\r
	border-radius: 3px;\r
}\r
.small-window-title-text-container {\r
	margin-right: auto;\r
	max-width: calc(100% - var(--icon-width) - var(--right-btn-width));\r
	display: flex;\r
	flex-direction: column;\r
	gap: 4px;\r
	padding: 0px 16px;\r
}\r
.small-window-title-text,\r
.small-window-website-host {\r
	min-width: 150px;\r
	overflow: hidden;\r
	text-overflow: ellipsis;\r
	white-space: nowrap;\r
}\r
.xtiper_sheet_tit.xtiper_sheet_left {\r
	display: block;\r
	background: #fff;\r
	width: 100%;\r
	box-sizing: border-box;\r
}\r
.small-window-protocol-info {\r
	display: flex;\r
	align-items: center;\r
}\r
.small-window-control {\r
	display: flex;\r
	align-items: center;\r
	align-content: center;\r
	width: var(--right-btn-width);\r
	justify-content: center;\r
	gap: 12px;\r
}\r
.small-window-control-image-view,\r
.small-window-control-open-blank,\r
.small-window-control-close {\r
	width: 2rem;\r
	height: 2rem;\r
	text-align: center;\r
	margin: 0 0;\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
}\r
\r
.refresh-icon {\r
	width: 40px;\r
	display: flex;\r
	align-items: center;\r
	justify-content: center;\r
	padding: 0px 16px;\r
}\r
.refresh-icon-in,\r
.refresh-icon-out {\r
	position: absolute;\r
	border: 5px solid rgba(0, 183, 229, 0.9);\r
	opacity: 0.9;\r
	border-radius: 50px;\r
	box-shadow: 0 0 15px #2187e7;\r
	width: 20px;\r
	height: 20px;\r
	margin: 0 auto;\r
}\r
.refresh-icon-out {\r
	background-color: rgba(0, 0, 0, 0);\r
	border-right: 5px solid transparent;\r
	border-left: 5px solid transparent;\r
	-moz-animation: spinPulse 1s infinite ease-in-out;\r
	-webkit-animation: spinPulse 1s infinite ease-in-out;\r
	-o-animation: spinPulse 1s infinite ease-in-out;\r
	-ms-animation: spinPulse 1s infinite ease-in-out;\r
}\r
.refresh-icon-in {\r
	background: rgba(0, 0, 0, 0) no-repeat center center;\r
	border-top: 5px solid transparent;\r
	border-bottom: 5px solid transparent;\r
	-moz-animation: spinoffPulse 3s infinite linear;\r
	-webkit-animation: spinoffPulse 3s infinite linear;\r
	-o-animation: spinoffPulse 3s infinite linear;\r
	-ms-animation: spinoffPulse 3s infinite linear;\r
}\r
@-moz-keyframes spinPulse {\r
	0% {\r
		-moz-transform: rotate(160deg);\r
		opacity: 0;\r
		box-shadow: 0 0 1px #505050;\r
	}\r
	50% {\r
		-moz-transform: rotate(145deg);\r
		opacity: 1;\r
	}\r
	100% {\r
		-moz-transform: rotate(-320deg);\r
		opacity: 0;\r
	}\r
}\r
@-moz-keyframes spinoffPulse {\r
	0% {\r
		-moz-transform: rotate(0);\r
	}\r
	100% {\r
		-moz-transform: rotate(360deg);\r
	}\r
}\r
@-webkit-keyframes spinPulse {\r
	0% {\r
		-webkit-transform: rotate(160deg);\r
		opacity: 0;\r
		box-shadow: 0 0 1px #505050;\r
	}\r
	50% {\r
		-webkit-transform: rotate(145deg);\r
		opacity: 1;\r
	}\r
	100% {\r
		-webkit-transform: rotate(-320deg);\r
		opacity: 0;\r
	}\r
}\r
@-webkit-keyframes spinoffPulse {\r
	0% {\r
		-webkit-transform: rotate(0);\r
	}\r
	100% {\r
		-webkit-transform: rotate(360deg);\r
	}\r
}\r
@-o-keyframes spinPulse {\r
	0% {\r
		-o-transform: rotate(160deg);\r
		opacity: 0;\r
		box-shadow: 0 0 1px #505050;\r
	}\r
	50% {\r
		-o-transform: rotate(145deg);\r
		opacity: 1;\r
	}\r
	100% {\r
		-o-transform: rotate(-320deg);\r
		opacity: 0;\r
	}\r
}\r
@-o-keyframes spinoffPulse {\r
	0% {\r
		-o-transform: rotate(0);\r
	}\r
	100% {\r
		-o-transform: rotate(360deg);\r
	}\r
}\r
@-ms-keyframes spinPulse {\r
	0% {\r
		-ms-transform: rotate(160deg);\r
		opacity: 0;\r
		box-shadow: 0 0 1px #505050;\r
	}\r
	50% {\r
		-ms-transform: rotate(145deg);\r
		opacity: 1;\r
	}\r
	100% {\r
		-ms-transform: rotate(-320deg);\r
		opacity: 0;\r
	}\r
}\r
@-ms-keyframes spinoffPulse {\r
	0% {\r
		-ms-transform: rotate(0);\r
	}\r
	100% {\r
		-ms-transform: rotate(360deg);\r
	}\r
}\r
@-moz-keyframes spinPulse {\r
	0% {\r
		-moz-transform: rotate(160deg);\r
		opacity: 0;\r
		box-shadow: 0 0 1px #505050;\r
	}\r
	50% {\r
		-moz-transform: rotate(145deg);\r
		opacity: 1;\r
	}\r
	100% {\r
		-moz-transform: rotate(-320deg);\r
		opacity: 0;\r
	}\r
}\r
@-moz-keyframes spinoffPulse {\r
	0% {\r
		-moz-transform: rotate(0);\r
	}\r
	100% {\r
		-moz-transform: rotate(360deg);\r
	}\r
}\r
@-webkit-keyframes spinPulse {\r
	0% {\r
		-webkit-transform: rotate(160deg);\r
		opacity: 0;\r
		box-shadow: 0 0 1px #505050;\r
	}\r
	50% {\r
		-webkit-transform: rotate(145deg);\r
		opacity: 1;\r
	}\r
	100% {\r
		-webkit-transform: rotate(-320deg);\r
		opacity: 0;\r
	}\r
}\r
@-webkit-keyframes spinoffPulse {\r
	0% {\r
		-webkit-transform: rotate(0);\r
	}\r
	100% {\r
		-webkit-transform: rotate(360deg);\r
	}\r
}\r
@-o-keyframes spinPulse {\r
	0% {\r
		-o-transform: rotate(160deg);\r
		opacity: 0;\r
		box-shadow: 0 0 1px #505050;\r
	}\r
	50% {\r
		-o-transform: rotate(145deg);\r
		opacity: 1;\r
	}\r
	100% {\r
		-o-transform: rotate(-320deg);\r
		opacity: 0;\r
	}\r
}\r
@-o-keyframes spinoffPulse {\r
	0% {\r
		-o-transform: rotate(0);\r
	}\r
	100% {\r
		-o-transform: rotate(360deg);\r
	}\r
}\r
@-ms-keyframes spinPulse {\r
	0% {\r
		-ms-transform: rotate(160deg);\r
		opacity: 0;\r
		box-shadow: 0 0 1px #505050;\r
	}\r
	50% {\r
		-ms-transform: rotate(145deg);\r
		opacity: 1;\r
	}\r
	100% {\r
		-ms-transform: rotate(-320deg);\r
		opacity: 0;\r
	}\r
}\r
@-ms-keyframes spinoffPulse {\r
	0% {\r
		-ms-transform: rotate(0);\r
	}\r
	100% {\r
		-ms-transform: rotate(360deg);\r
	}\r
}\r
`;class qe{constructor(e){nt(this,"isBacking",false);nt(this,"config");this.config=e,this.enterGestureBackMode=this.enterGestureBackMode.bind(this),this.quitGestureBackMode=this.quitGestureBackMode.bind(this),this.popStateEvent=this.popStateEvent.bind(this),(typeof this.config.backDelayTime!="number"||isNaN(this.config.backDelayTime))&&(this.config.backDelayTime=150),this.config.win==null&&(this.config.win=self);}popStateEvent(e){g.preventEvent(e),!this.isBacking&&this.quitGestureBackMode(true);}enterGestureBackMode(){b.success("进入手势模式");let e=this.config.hash;e.startsWith("#")||(e.startsWith("/")||(e="/"+e),e="#"+e),this.config.useUrl&&(e=this.config.win.location.origin+this.config.win.location.pathname+this.config.win.location.search+e),this.config.win.history.pushState({},"",e),b.success("监听popstate事件"),r.on(this.config.win,"popstate",this.popStateEvent,{capture:true});}async quitGestureBackMode(e=false){this.isBacking=true,b.success("退出手势模式"),typeof this.config.beforeHistoryBackCallBack=="function"&&this.config.beforeHistoryBackCallBack(e);let n=Date.now()+1e3*5;for(;;){if(Date.now()>n){b.error("未知情况，history.back()失败，无法退出手势模式");break}if(this.config.win.location.hash.endsWith(this.config.hash))b.info("history.back()"),this.config.win.history.back(),await g.sleep(this.config.backDelayTime||150);else break}b.success("移除popstate事件"),r.off(this.config.win,"popstate",this.popStateEvent,{capture:true}),this.isBacking=false,typeof this.config.afterHistoryBackCallBack=="function"&&this.config.afterHistoryBackCallBack(e);}}const ct={https:`
		<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="12" height="12" style="margin: 0px 6px 0px 2px;">
			<path fill="#000000" d="M842.666667 384h-74.666667V277.333333a234.666667 234.666667 0 1 0-469.333333 0v106.666667H224a53.393333 53.393333 0 0 0-53.333333 53.333333v490.666667a53.393333 53.393333 0 0 0 53.333333 53.333333h618.666667a53.393333 53.393333 0 0 0 53.333333-53.333333V437.333333a53.393333 53.393333 0 0 0-53.333333-53.333333zM341.333333 277.333333c0-105.866667 86.133333-192 192-192s192 86.133333 192 192v106.666667H341.333333z"></path>
		</svg>`,http:`
		<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
		<path fill="#2c2c2c" d="M770.423989 451.309956H368.89432V284.246158c0-80.739434 65.689748-146.429182 146.429182-146.429182S661.738235 203.506724 661.738235 284.246158a43.350032 43.350032 0 0 0 86.700063 0c0-128.547294-104.581952-233.129246-233.122021-233.129246-128.547294 0-233.129246 104.581952-233.129245 233.129246v167.063798h-21.978466a43.350032 43.350032 0 0 0-43.350032 43.350031v437.965371a43.350032 43.350032 0 0 0 43.350032 43.350032h510.215423a43.350032 43.350032 0 0 0 43.350032-43.350032V494.659987a43.350032 43.350032 0 0 0-43.350032-43.350031z"></path>
		</svg>`,openBlank:`
		<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<path d="M192 288A96 96 0 0 1 288 192h128a32 32 0 0 0 0-64h-128A160 160 0 0 0 128 288v448A160 160 0 0 0 288 896h448a160 160 0 0 0 160-160v-128a32 32 0 0 0-64 0v128a96 96 0 0 1-96 96h-448A96 96 0 0 1 192 736v-448z" fill="#000000" fill-opacity=".85"></path>
			<path d="M608 128a32 32 0 0 0 0 64h178.752L521.344 457.344a32 32 0 1 0 45.312 45.312L832 237.248V416a32 32 0 0 0 64 0v-256a32 32 0 0 0-32-32h-256z" fill="#000000" fill-opacity=".85" p-id="2334"></path>
		</svg>`,close:`
		<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<path d="M0 0h1024v1024H0z" fill="#FF0033" fill-opacity="0" p-id="3329"></path><path d="M240.448 168l2.346667 2.154667 289.92 289.941333 279.253333-279.253333a42.666667 42.666667 0 0 1 62.506667 58.026666l-2.133334 2.346667-279.296 279.210667 279.274667 279.253333a42.666667 42.666667 0 0 1-58.005333 62.528l-2.346667-2.176-279.253333-279.253333-289.92 289.962666a42.666667 42.666667 0 0 1-62.506667-58.005333l2.154667-2.346667 289.941333-289.962666-289.92-289.92a42.666667 42.666667 0 0 1 57.984-62.506667z" fill="#111111" p-id="3330"></path>
		</svg>`,image:`
		<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<path d="M938.666667 553.92V768c0 64.8-52.533333 117.333333-117.333334 117.333333H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V256c0-64.8 52.533333-117.333333 117.333334-117.333333h618.666666c64.8 0 117.333333 52.533333 117.333334 117.333333v297.92z m-64-74.624V256a53.333333 53.333333 0 0 0-53.333334-53.333333H202.666667a53.333333 53.333333 0 0 0-53.333334 53.333333v344.48A290.090667 290.090667 0 0 1 192 597.333333a286.88 286.88 0 0 1 183.296 65.845334C427.029333 528.384 556.906667 437.333333 704 437.333333c65.706667 0 126.997333 16.778667 170.666667 41.962667z m0 82.24c-5.333333-8.32-21.130667-21.653333-43.648-32.917333C796.768 511.488 753.045333 501.333333 704 501.333333c-121.770667 0-229.130667 76.266667-270.432 188.693334-2.730667 7.445333-7.402667 20.32-13.994667 38.581333-7.68 21.301333-34.453333 28.106667-51.370666 13.056-16.437333-14.634667-28.554667-25.066667-36.138667-31.146667A222.890667 222.890667 0 0 0 192 661.333333c-14.464 0-28.725333 1.365333-42.666667 4.053334V768a53.333333 53.333333 0 0 0 53.333334 53.333333h618.666666a53.333333 53.333333 0 0 0 53.333334-53.333333V561.525333zM320 480a96 96 0 1 1 0-192 96 96 0 0 1 0 192z m0-64a32 32 0 1 0 0-64 32 32 0 0 0 0 64z" fill="#000000"></path>
		</svg>`,mt:`
		<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
			<path d="M979.622067 257.689317c22.828607 10.592474 32.873194 37.804173 22.280721 60.63278l-166.009631 359.778848c-10.592474 22.828607-37.804173 32.873194-60.63278 22.280721l-292.3888-134.780097c-22.828607-10.592474-32.873194-37.804173-22.280721-60.63278l166.009631-359.778848c10.592474-22.828607 37.804173-32.873194 60.632781-22.28072l292.388799 134.780096z" fill="#FFBA02" p-id="1715"></path><path d="M658.743166 46.205101v467.529873c0 25.202782-20.637061 45.657214-45.657214 45.657214H145.556078c-25.202782 0-45.657214-20.637061-45.657214-45.657214v-467.529873c0-25.202782 20.637061-45.657214 45.657214-45.657214h467.529874c25.202782 0 45.657214 20.454432 45.657214 45.657214z" fill="#E2E0E2" p-id="1716"></path><path d="M204.910457 236.50437a177.149991 175.871589 0 1 0 354.299982 0 177.149991 175.871589 0 1 0-354.299982 0Z" fill="#3D82FF" p-id="1717"></path><path d="M245.636692 42.369895a9.861958 9.679329 0 1 0 19.723916 0 9.861958 9.679329 0 1 0-19.723916 0Z" fill="#3D82FF" p-id="1718"></path><path d="M501.864978 43.10041a10.409845 10.409845 0 1 0 20.81969 0 10.409845 10.409845 0 1 0-20.81969 0Z" fill="#3D82FF" p-id="1719"></path><path d="M454.774127 104.071054l48.495267-66.347237 16.807334 12.285443-48.495267 66.347237zM248.102182 48.730858l15.77548-11.220717 50.279551 70.691978-15.775481 11.21889zM204.910457 231.390762h354.299982v193.586588h-354.299982z" fill="#3D82FF" p-id="1720"></path><path d="M280.701432 171.853754a26.115927 25.202782 0 1 0 52.231854 0 26.115927 25.202782 0 1 0-52.231854 0Z" fill="#FFFFFF" p-id="1721"></path><path d="M434.109672 171.671125a25.385411 25.202782 0 1 0 50.770822 0 25.385411 25.202782 0 1 0-50.770822 0Z" fill="#FFFFFF" p-id="1722"></path><path d="M394.844468 1023.817371H50.589073c-25.202782 0-45.657214-20.637061-45.657214-45.657214v-686.684502c0-25.202782 20.637061-45.657214 45.657214-45.657214h344.255395c25.202782 0 45.657214 20.637061 45.657214 45.657214v686.684502c0 25.202782-20.454432 45.657214-45.657214 45.657214z" fill="#303030" p-id="1723"></path><path d="M973.230057 342.976993H50.589073c-25.202782 0-45.657214 20.637061-45.657214 45.657214v589.708579c0 25.202782 20.637061 45.657214 45.657214 45.657214h922.640984c25.202782 0 45.657214-20.637061 45.657215-45.657214V388.634207c0-25.202782-20.637061-45.657214-45.657215-45.657214z" fill="#303030" p-id="1724"></path><path d="M392.287664 488.89745L295.311741 394.843588c-18.080257-17.53237-18.445515-46.570358-1.095773-64.650615l68.303192-70.677368c17.53237-18.080257 46.570358-18.445515 64.650616-1.095773l97.158551 94.053862c18.080257 17.53237 18.445515 46.570358 1.095774 64.650615l-68.303193 70.677367c-17.714999 18.080257-46.752987 18.628143-64.833244 1.095774z" fill="#303030" p-id="1725"></path><path d="M266.273753 628.060638v-13.331906l-54.240771-77.434635v316.495808c0 7.305154-2.556804 13.514535-7.670412 18.628144-5.113608 5.113608-11.322989 7.670412-18.628143 7.670412-7.305154 0-13.514535-2.556804-18.628143-7.853041-5.113608-5.113608-7.670412-11.322989-7.670412-18.445515V465.155698h67.755305l64.467987 94.053861 66.476904-94.053861H424.978229v388.634207c0 7.305154-2.739433 13.514535-8.035669 18.628144-5.296237 5.113608-11.688247 7.670412-18.810773 7.670412-7.122525 0-13.149278-2.556804-18.445514-7.853041-5.113608-5.113608-7.853041-11.322989-7.853041-18.445515V538.572499l-53.144997 74.877831v14.610308c0 7.122525-2.556804 13.149278-7.853041 18.445515-5.113608 5.113608-11.322989 7.853041-18.445515 7.853041-7.305154 0-13.514535-2.556804-18.628143-7.853041-4.930979-5.296237-7.487783-11.322989-7.487783-18.445515z" fill="#FFFFFF" p-id="1726"></path><path d="M600.301932 536.563581V465.703585h264.811842v71.407883c0 7.305154-2.556804 13.514535-7.853041 18.628143-5.113608 5.113608-11.322989 7.670412-18.445514 7.670412-7.305154 0-13.514535-2.556804-18.810772-7.853041-5.296237-5.113608-8.03567-11.322989-8.03567-18.445514v-18.993401h-53.144997v335.48921c0 7.305154-2.556804 13.514535-7.853041 18.628143-5.113608 5.113608-11.322989 7.670412-18.445515 7.670412-7.487783 0-13.879793-2.556804-18.993401-7.670412-5.113608-5.113608-7.853041-11.322989-7.853041-18.628143V518.300696h-53.144997v18.445514c0 7.305154-2.556804 13.514535-7.670412 18.628143-5.113608 5.113608-11.322989 7.670412-18.628143 7.670412-7.305154 0-13.514535-2.556804-18.628144-7.670412-4.74835-5.296237-7.305154-11.505618-7.305154-18.810772z" fill="#FFFFFF"></path>
		</svg>`},Vt={$key:{smallWindow:"smallWindow"},$el:{$refreshIcon:null,$webSiteIcon:null},init(){let t=new g.LockFunction(()=>{let e=this.getForumList();e.length&&this.handleForumPost(e);});g.mutationObserver(document.documentElement,{callback:(e,n)=>{t.run();},config:{subtree:true,childList:true}});},getForumList(){return g.getNodeListValue(j.comiisForumList(),j.comiisPostli(),j.comiisMmlist())},showSmallWindow(t,e,n=[]){let i=new URL(e),s=i.protocol.includes("https:"),l=`
        <div class="small-window-drag">
            <!-- 这里是拖拽区域 -->
            <div></div>
        </div>
        <div class="small-window-title-container">
            <i class="small-window-website-icon" style="display: none;">
                ${ct.mt}
            </i>
            <div class="refresh-icon">
                <div class="refresh-icon-out"></div>
                <div class="refresh-icon-in"></div>
            </div>
            <div class="small-window-title-text-container">
                <p class="small-window-title-text">${t}</p>
                <div class="small-window-protocol-info">
                    <i class="small-window-protocol-icon">
                        ${s?ct.https:ct.http}
                    </i>
                    <p class="small-window-website-host">${i.host}</p>
                </div>
            </div>
            <div class="small-window-control">
                ${n.length?`
                    <i class="small-window-control-image-view">
                        ${ct.image}
                    </i>
                    `:""}
                <i class="small-window-control-open-blank">
                    ${ct.openBlank}
                </i>
                <i class="small-window-control-close">
                    ${ct.close}
                </i>
            </div>
        </div>`,o=B.drawer({title:{enable:true,text:l,html:true,style:"height: auto;line-height: normal;"},content:{text:`
                <iframe scrolling="auto" allowtransparency="true" frameborder="0" src="${e}" style="width:100%; height:100%;">
                </iframe>
                `,html:true},mask:{enable:true,clickEvent:{toClose:true},clickCallBack(I,z){R.quitGestureBackMode();}},btn:{ok:{enable:false},cancel:{enable:false},close:{enable:false}},direction:"bottom",size:"92%",borderRadius:18,style:ve}),a=o.$shadowRoot.querySelector(".small-window-website-icon"),c=o.$shadowRoot.querySelector(".refresh-icon"),m=o.$shadowRoot.querySelector(".small-window-control-image-view"),d=o.$shadowRoot.querySelector(".small-window-control-open-blank"),u=o.$shadowRoot.querySelector(".small-window-control-close"),f=o.$shadowRoot.querySelector(".small-window-title-text");this.$el.$refreshIcon=c,this.$el.$webSiteIcon=a;let p=o.$shadowRoot.querySelector("iframe"),h=o.$shadowRoot.querySelector(".small-window-drag"),_=B.config.Utils.AnyTouch(),k=new _(h),q=o.popsElement,S=r.height(q);k.on("pan",I=>{I.phase=="move"&&I.displacementY>0&&(q.style.transition="none",q.style.height=Math.abs(S-I.distanceY)+"px"),I.isEnd&&(q.style.transition="0.2s ease-in",parseInt(q.style.height)>window.innerHeight/2?q.style.height=S+"px":o.close());});let R=new qe({hash:this.$key.smallWindow,useUrl:true,win:y,beforeHistoryBackCallBack:I=>{o.close();}});R.enterGestureBackMode(),r.on(f,"click",I=>{g.preventEvent(I),g.setClip(`『${t}』 - ${e}`),x.success("已复制链接");}),r.on(m,"click",I=>{g.preventEvent(I),b.info("查看图片",n);var z="";n.forEach(O=>{z+=`<li><img data-src="${O}"></li>`;});var E=r.parseHTML(`<ul>${z}</ul>`,false,false);let A=new Rt(E,{inline:false,url:"data-src",zIndex:(()=>{let O=g.getMaxZIndex(),v=B.config.InstanceUtils.getPopsMaxZIndex().zIndex;return g.getMaxValue(O,v)+100})(),hidden:()=>{A.destroy();}});A.zoomTo(1),A.show();}),r.on(u,"click",I=>{g.preventEvent(I),R.quitGestureBackMode();}),r.on(d,"click",I=>{g.preventEvent(I),window.open(e,"_blank");}),r.on(a,"click",I=>{g.preventEvent(I),p.contentWindow.location.reload(),this.checkIframeReadyState(p);}),this.checkIframeReadyState(p);},async handleForumPost(t){t.forEach(e=>{if(e.getAttribute("data-injection-small-window"))return;let n=r.text(e.querySelector(".mmlist_li_box h2 a"));(n==""||n==null)&&(n=r.text(e.querySelector(".mmlist_li_box a"))),n=n.trim();let i=e.querySelector(".mmlist_li_box a").href;var s=[];e.setAttribute("data-injection-small-window","true"),e.setAttribute("data-injection-small-window-url",i),e.setAttribute("data-injection-small-window-title",n),e.querySelectorAll(".comiis_pyqlist_img img").forEach(o=>{s.push(o.getAttribute("src"));}),e.querySelectorAll(".comiis_pyqlist_imgs img").forEach(o=>{s.push(o.getAttribute("src"));}),e.querySelectorAll(".mmlist_li_box a").forEach(o=>{o.removeAttribute("href"),o.setAttribute("data-href",i);});let l=e.querySelector(".mmlist_li_box");r.on(l,"click",function(o){var a=Number(o.clientX);document.body.offsetWidth/2>a?window.location.href=i:Vt.showSmallWindow(n,i,s);});});},checkIframeReadyState(t){this.showRefreshIcon();let e=setInterval(()=>{t.contentWindow&&(clearInterval(e),r.createDOMUtils({document:t.contentWindow.document,window:t.contentWindow,globalThis:t.contentWindow,self:t.contentWindow,top}).ready(()=>{b.success("小窗内容已加载完毕"),this.hideRefreshIcon();}));},400);},hideRefreshIcon(){this.$el.$refreshIcon.style.display="none",this.$el.$webSiteIcon.style.display="";},showRefreshIcon(){this.$el.$refreshIcon.style.display="",this.$el.$webSiteIcon.style.display="none";}},$e={init(){Z.ready(()=>{$.execMenuOnce("mt-guide-showLatestPost",()=>{this.showLatestPost();});});},showLatestPost(){b.info("显示最新帖子");async function t(){let e=await H.get("/forum.php?mod=guide&view=hot",{fetch:true,allowInterceptConfig:false});if(!e.status){x.error("获取轮播失败");return}if(e.data.responseText.indexOf('<script src="/_guard/auto.js"><\/script>')!==-1){x.error("获取轮播失败 未知的/_guard/auto.js文件");return}var n=Z.parseHTML(e.data.responseText,true,true),i=n.querySelectorAll('div.comiis_mh_kxtxt div[id*="comiis_mh_kxtxt"] ul');if(i.length===0){x.error("获取轮播失败");return}else {var s=[];i[i.length-1].querySelectorAll("a").forEach(l=>{s.push({href:l.getAttribute("href"),title:l.getAttribute("title")});});}return s}t().then(e=>{if(!e)return;G(`
            div.comiis_mh_kxtxt_owm{
                margin-top: 10px;
            }
            div.comiis_mh_kxtxt_owm li{ 
                height: 30px;
                width: 100%;
                display: flex;
                align-items: center;
            }
            div.comiis_mh_kxtxt_owm span{
                background: #FF705E;
                color: #fff;
                float: left;
                height: 18px;
                line-height: 18px;
                padding: 0 3px;
                margin-top: 2px;
                margin-right: 10px;
                overflow: hidden;
                border-radius: 2px;
                margin-left: 10px;
            }
            div.comiis_mh_kxtxt_owm a{
                display: block;
                font-size: 14px;
                font-weight: 400;
                height: 22px;
                line-height: 22px;
                overflow: hidden;
                min-width: 100px;
                max-width: 80%;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin-right: 10px;
            }
            `);var n="";g.sortListByProperty(e,s=>{var l=s.href.match(/thread-(.+?)-/i);return parseInt(l[l.length-1])},true),b.info("导读内容",e),e.forEach(s=>{n+=`
                <li>
                    <span>新帖</span>
                    <a href="${s.href}" title="${s.title}" target="_blank">${s.title}</a>
                </li>`;});let i=document.querySelector(".comiis_forumlist.comiis_xznlist");Z.before(i,`<div class="comiis_mh_kxtxt bg_f comiis_mh_kxtxt_owm"><ul>${n}</ul></div>`);});}};class Ht{constructor(e){nt(this,"option");this.option=e;}async showView(){var o;let e=B.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist">
                            
                        </ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:true},btn:g.assign({ok:{callback:async()=>{await l();}}},this.option.btn||{},true),mask:{enable:true},style:`
                ${B.config.cssText.panelCSS}
                
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

                ${((o=this.option)==null?undefined:o.style)??""}
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),n=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");let i=e.$shadowRoot.querySelector(".rule-form-ulist"),s=await this.option.getView(await this.option.data());i.appendChild(s);const l=async()=>{(await this.option.onsubmit(n,await this.option.data())).success&&(e.close(),await this.option.dialogCloseCallBack(true));};}}class ke{constructor(e){nt(this,"option");this.option=e;}showView(){let e=B.alert({title:{text:this.option.title,position:"center"},content:{text:`
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
            `}),n=e.$shadowRoot.querySelector(".filter-container"),i=document.createDocumentFragment();this.option.filterOption.forEach(s=>{let l=document.createElement("button");l.innerText=s.name;let o=async()=>{(await this.option.getAllRuleInfo()).forEach(async c=>{await s.filterCallBack(c.data)?r.show(c.$el,false):r.hide(c.$el,false);}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),e.close();};r.on(l,"click",async a=>{g.preventEvent(a),!(typeof s.callback=="function"&&!await s.callback(a,o))&&await o();}),i.appendChild(l);}),n.appendChild(i);}}class qt{constructor(e){nt(this,"option");this.option=e;}async showView(e){var l,o,a,c,m,d,u,f,p;let n=B.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:true},btn:{merge:true,reverse:false,position:"space-between",ok:{enable:((a=(o=(l=this.option)==null?undefined:l.bottomControls)==null?undefined:o.add)==null?undefined:a.enable)||true,type:"primary",text:"添加",callback:async h=>{this.showEditView(false,await this.option.getAddData(),n.$shadowRoot);}},close:{enable:true,callback(h){n.close();}},cancel:{enable:((d=(m=(c=this.option)==null?undefined:c.bottomControls)==null?undefined:m.filter)==null?undefined:d.enable)||false,type:"default",text:"过滤",callback:(h,_)=>{var S,R,I,z,E,A,O;typeof((I=(R=(S=this.option)==null?undefined:S.bottomControls)==null?undefined:R.filter)==null?undefined:I.callback)=="function"&&this.option.bottomControls.filter.callback();let k=()=>Array.from(n.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),q=_.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");r.text(q).includes("取消")?(k().forEach(v=>{r.show(v,false);}),r.text(q,"过滤")):new ke({title:((E=(z=this.option.bottomControls)==null?undefined:z.filter)==null?undefined:E.title)??"过滤规则",filterOption:((O=(A=this.option.bottomControls)==null?undefined:A.filter)==null?undefined:O.option)||[],execFilterCallBack(){r.text(q,"取消过滤");},getAllRuleInfo:()=>k().map(w=>({data:this.parseRuleItemElement(w).data,$el:w}))}).showView();}},other:{enable:((p=(f=(u=this.option)==null?undefined:u.bottomControls)==null?undefined:f.clear)==null?undefined:p.enable)||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:h=>{let _=B.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async k=>{var S,R,I;if(b.success("清空所有"),typeof((I=(R=(S=this.option)==null?undefined:S.bottomControls)==null?undefined:R.clear)==null?undefined:I.callback)=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){x.error("清理失败");return}else x.success("清理成功");await this.updateDeleteAllBtnText(n.$shadowRoot),this.clearContent(n.$shadowRoot),_.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
            ${B.config.cssText.panelCSS}
            
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
            `}),i=await this.option.data(),s=false;for(let h=0;h<i.length;h++){let _=i[h],k=await this.appendRuleItemElement(n.$shadowRoot,_);(typeof e=="function"?e(_):true)||(s=true,k.forEach(S=>{r.hide(S,false);}));}if(s){let h=n.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");r.text(h,"取消过滤");}}parseViewElement(e){let n=e.querySelector(".rule-view-container"),i=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:n,$deleteBtn:i}}parseRuleItemElement(e){let n=e.querySelector(".rule-controls-enable"),i=n.querySelector(".pops-panel-switch"),s=n.querySelector(".pops-panel-switch__input"),l=n.querySelector(".pops-panel-switch__core"),o=e.querySelector(".rule-controls-edit"),a=e.querySelector(".rule-controls-delete");return {$enable:n,$enableSwitch:i,$enableSwitchInput:s,$enableSwitchCore:l,$edit:o,$delete:a,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,n){let i=await this.option.getDataItemName(e),s=r.createElement("div",{className:"rule-item",innerHTML:`
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
					${B.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${B.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(s,"data-rule",e);let l="pops-panel-switch-is-checked";const{$enable:o,$enableSwitch:a,$enableSwitchCore:c,$enableSwitchInput:m,$delete:d,$edit:u}=this.parseRuleItemElement(s);return this.option.itemControls.enable.enable?(r.on(c,"click",async f=>{let p=false;a.classList.contains(l)?(a.classList.remove(l),p=false):(a.classList.add(l),p=true),m.checked=p,await this.option.itemControls.enable.callback(e,p);}),await this.option.itemControls.enable.getEnable(e)&&a.classList.add(l)):o.remove(),this.option.itemControls.edit.enable?r.on(u,"click",f=>{g.preventEvent(f),this.showEditView(true,e,n,s,p=>{e=null,e=p;});}):u.remove(),this.option.itemControls.delete.enable?r.on(d,"click",f=>{g.preventEvent(f);let p=B.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async h=>{b.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(x.success("成功删除该数据"),s.remove(),await this.updateDeleteAllBtnText(n),p.close()):x.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):d.remove(),s}async appendRuleItemElement(e,n){let{$container:i}=this.parseViewElement(e),s=[],l=Array.isArray(n)?n:[n];for(let o=0;o<l.length;o++){let a=l[o],c=await this.createRuleItemElement(a,e);i.appendChild(c),s.push(c);}return await this.updateDeleteAllBtnText(e),s}async updateRuleContaienrElement(e){this.clearContent(e);const{$container:n}=this.parseViewElement(e);let i=await this.option.data();await this.appendRuleItemElement(e,i),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,n,i){let s=await this.createRuleItemElement(e,i);n.after(s),n.remove();}clearContent(e){const{$container:n}=this.parseViewElement(e);r.html(n,"");}setDeleteBtnText(e,n,i=false){const{$deleteBtn:s}=this.parseViewElement(e);i?r.html(s,n):r.text(s,n);}async updateDeleteAllBtnText(e){let n=await this.option.data();this.setDeleteBtnText(e,`清空所有(${n.length})`);}showEditView(e,n,i,s,l){let o=async c=>{if(!c){if(e||await this.option.deleteData(n),typeof l=="function"){let m=await this.option.getData(n);l(m);}}};new Ht({title:e?"编辑":"添加",data:()=>n,dialogCloseCallBack:o,getView:async c=>await this.option.itemControls.edit.getView(c,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async(c,m)=>{c.close(),await o(false);}},close:{callback:async(c,m)=>{c.close(),await o(false);}}},onsubmit:async(c,m)=>{let d=await this.option.itemControls.edit.onsubmit(c,e,m);return d.success?e?(x.success("修改成功"),i&&await this.updateRuleItemElement(d.data,s,i)):i&&await this.appendRuleItemElement(i,d.data):e&&x.error("修改失败"),d},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}}const Se={$key:{STORAGE_KEY:"mt-own-block-rule"},$data:{isRegister:false},init(){this.registerMenu();let t=new g.LockFunction(()=>{this.runRule();});g.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{t.run();}});},registerMenu(){this.$data.isRegister||(this.$data.isRegister=true,j.registerLeftMenu({name:"我的屏蔽",icon:"",iconColor:"#000",callback:()=>{this.showView();}}));},getTemplateData(){return {uuid:g.generateUUID(),enable:true,name:"",data:{userName:"",userUID:"",userLevel:"",postUrl:"",postTitle:"",postContent:"",postPlateName:""}}},showView(){let t=B.config.panelHandleContentUtils();function e(i){return {get(s,l){return i[s]??l},set(s,l){i[s]=l;}}}new qt({title:"我的屏蔽",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:i=>i.name,updateData:i=>this.updateData(i),deleteData:i=>this.deleteData(i),getData:i=>this.getData().find(o=>o.uuid===i.uuid)??i,itemControls:{enable:{enable:true,getEnable(i){return i.enable},callback:(i,s)=>{i.enable=s,this.updateData(i);}},edit:{enable:true,getView:(i,s)=>{let l=document.createDocumentFragment();s||(i=this.getTemplateData());let o=L("启用","enable",true);Reflect.set(o.props,D,e(i));let a=t.createSectionContainerItem_switch(o),c=V("规则名称","name","","",undefined,"必填");Reflect.set(c.props,D,e(i));let m=t.createSectionContainerItem_input(c),d=V("用户名","userName","","",undefined,"可正则");Reflect.set(d.props,D,e(i.data));let u=t.createSectionContainerItem_input(d),f=V("用户UID","userUID","","",undefined,"可正则");Reflect.set(f.props,D,e(i.data));let p=t.createSectionContainerItem_input(f),h=V("用户等级","userLevel","","",undefined,"可正则");Reflect.set(h.props,D,e(i.data));let _=t.createSectionContainerItem_input(h),k=V("帖子url","postUrl","","",undefined,"可正则");Reflect.set(k.props,D,e(i.data));let q=t.createSectionContainerItem_input(k),S=V("帖子标题","postTitle","","",undefined,"可正则");Reflect.set(S.props,D,e(i.data));let R=t.createSectionContainerItem_input(S),I=V("帖子内容","postContent","","",undefined,"可正则");Reflect.set(I.props,D,e(i.data));let z=t.createSectionContainerItem_input(I),E=V("帖子所在的板块名","postPlateName","","",undefined,"可正则");Reflect.set(E.props,D,e(i.data));let A=t.createSectionContainerItem_input(E);return l.appendChild(a),l.appendChild(m),l.appendChild(u),l.appendChild(p),l.appendChild(_),l.appendChild(q),l.appendChild(R),l.appendChild(z),l.appendChild(A),l},onsubmit:(i,s,l)=>{let o=i.querySelectorAll(".rule-form-ulist > li"),a=this.getTemplateData();return s&&(a.uuid=l.uuid),o.forEach(c=>{let m=Reflect.get(c,"__formConfig__"),d=Reflect.get(m,"attributes"),u=Reflect.get(c,D),f=Reflect.get(d,et),p=Reflect.get(d,it),h=u.get(f,p);Reflect.has(a,f)?Reflect.set(a,f,h):Reflect.has(a.data,f)?Reflect.set(a.data,f,h):b.error(`${f}不在数据中`);}),a.name.trim()===""?(x.error("规则名称不能为空"),{success:false,data:a}):s?{success:this.updateData(a),data:a}:{success:this.addData(a),data:a}}},delete:{enable:true,deleteCallBack:i=>this.deleteData(i)}}}).showView();},runRule(){let t=this.getData();function e(n){for(const i of t){let s=i.data;if(Object.keys(s).find(o=>{let a=s[o];if(g.isNotNull(a)){let c=new RegExp(a,"i"),m=Reflect.get(n,o);if(typeof m=="string"&&g.isNotNull(m)&&m.match(c))return b.info("屏蔽",[s,m]),true}return  false}))return  true}return  false}(M.isGuide()||M.isPlate()||M.isPost())&&(this.getData(),document.querySelectorAll(".comiis_forumlist .forumlist_li").forEach(n=>{var o;let i=n.querySelector("a.top_user"),s=i.href.match(X.uid),l={userName:i.innerText,userUID:s[s.length-1].trim(),userLevel:n.querySelector("span.top_lev").innerText.replace("Lv.",""),postUrl:n.querySelector(".mmlist_li_box a").getAttribute("href")||n.querySelector(".mmlist_li_box a").getAttribute("data-href"),postTitle:((o=n.querySelector(".mmlist_li_box h2 a"))==null?undefined:o.innerText)||"",postContent:n.querySelector(".mmlist_li_box .list_body").innerText,postPlateName:(n.querySelector(".forumlist_li_time a.f_d")||n.querySelector(".comiis_xznalist_bk.cl")).innerText.replace(//g,"").replace(/\s*/g,"").replace(/来自/g,"")};g.isNull(l.postPlateName)&&(l.postPlateName=document.querySelector("#comiis_wx_title_box").innerText),e(l)&&n.remove();}),document.querySelectorAll(".comiis_postlist .comiis_postli").forEach(n=>{let i=n.querySelector("a.top_user"),s=i.href.match(X.uid),l={userName:i.innerText,userUID:s[s.length-1].trim(),userLevel:n.querySelector("a.top_lev").innerText.replace("Lv.",""),postUrl:undefined,postTitle:undefined,postContent:n.querySelector(".comiis_message_table").innerText,postPlateName:undefined};e(l)&&n.remove();})),M.isMessageList()&&(this.getData(),N(".comiis_pms_box .comiis_pmlist ul li").forEach(n=>{let i=n.querySelector("a.b_b").href.match(X.uid),s={userName:n.querySelector("h2").innerText.replace(n.querySelector("h2 span").innerText,"").replace(/\s*/,""),userUID:i[i.length-1].trim(),userLevel:undefined,postUrl:n.querySelector("a.b_b").href,postTitle:undefined,postContent:n.querySelector("p.f_c").innerText.trim(),postPlateName:undefined};e(s)&&n.remove();}));},getData(){return Y(this.$key.STORAGE_KEY,[])},setData(t){W(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(i=>i.uuid==t.uuid)===-1?(e.push(t),W(this.$key.STORAGE_KEY,e),true):false},updateData(t){let e=this.getData(),n=e.findIndex(s=>s.uuid==t.uuid),i=false;return n!==-1&&(i=true,e[n]=t),this.setData(e),i},deleteData(t){let e=this.getData(),n=e.findIndex(s=>s.uuid==t.uuid),i=false;return n!==-1&&(i=true,e.splice(n,1)),this.setData(e),i},clearData(){at(this.$key.STORAGE_KEY);}},Te={$el:{isFilterElementHTML:[]},$key:{STORAGE_KEY:"mt-post-comment-filter-rule"},init(){if(this.registerMenu(),M.isPost()){let t=this.getData();if(!t.enable)return;let e=new g.LockFunction(()=>{this.runFilter(t);});g.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{e.run();}});}},registerMenu(){j.registerLeftMenu({name:"评论过滤器",icon:"",iconColor:"#ff0019",callback:()=>{this.showView();}});},runFilter(t){let e=function(i){for(const s of t.userBlackList)if(s==i.userName||s==i.userUID)return b.success("评论过滤器：黑名单用户",i),true;return  false},n=function(i){for(const s of t.userWhiteList)if(s===i.userName||s===i.userUID)return b.success("评论过滤器：白名单用户",i),true;return  false};N(".comiis_postlist .comiis_postli").forEach(i=>{var a,c,m;if(i.querySelector("#comiis_allreplies"))return;let s=i.querySelector("a.top_user"),l=s.href.match(X.uid),o={userName:(s==null?undefined:s.innerText)||"",userUID:l&&((a=l[(l==null?undefined:l.length)-1])==null?undefined:a.trim())||"",content:((m=(c=i.querySelector(".comiis_message_table"))==null?undefined:c.innerText)==null?undefined:m.trim())||"",isAuthor:!!i.querySelector("span.top_lev")};if(!n(o)){if(t.replyFlag&&i.querySelector(".comiis_quote")){let d=i.querySelector(".comiis_quote");this.$el.isFilterElementHTML.push(d.outerHTML),d.remove();}if(!(o.isAuthor&&!t.avatarFlag)){if(e(o)){this.$el.isFilterElementHTML.push(i.outerHTML),i.remove();return}if(!(typeof t.minLength=="number"&&t.minLength>o.content.length)&&!(typeof t.keywordLength=="number"&&t.keywordLength<o.content.length))for(const d of t.keywords){if(typeof d!="string")continue;let u=new RegExp(d);if(o.content.match(u)){console.log("评论过滤器：",o),this.$el.isFilterElementHTML.push(i.outerHTML),i.remove();return}}}}});},showView(){const t=this;function e(s){return {get(l,o){let a=t.getData(),c=Reflect.get(a,l,o);return (l==="keywords"||l==="userWhiteList"||l==="userBlackList")&&(c=c.join(`
`)),c},set(l,o){(l==="keywords"||l==="userWhiteList"||l==="userBlackList")&&(o=o.split(`
`).filter(a=>a.trim()!="")),Reflect.set(s,l,o),t.setData(s);}}}let n=B.config.panelHandleContentUtils();new Ht({title:"评论过滤器",data:()=>this.getData(),getView:s=>{let l=document.createDocumentFragment(),o=L("启用","enable",true);Reflect.set(o.props,D,e(s));let a=n.createSectionContainerItem_switch(o),c=L("处理回复引用","replyFlag",false,undefined,"移除引用");Reflect.set(c.props,D,e(s));let m=n.createSectionContainerItem_switch(c),d=L("处理作者评论","avatarFlag",false);Reflect.set(d.props,D,e(s));let u=n.createSectionContainerItem_switch(d),f=L('处理从"搜索页面"或"我的帖子提醒页面"进入的网站',"viewthreadFlag",false);Reflect.set(f.props,D,e(s));let p=n.createSectionContainerItem_switch(f),h=V("匹配的评论内容长度最小值","minLength",5,"小于此长度的评论就算关键字匹配成功了也不会被排除",undefined,"",true);Reflect.set(h.props,D,e(s));let _=n.createSectionContainerItem_input(h),k=V("匹配的评论内容长度最大值","keywordLength",8,"大于此长度的评论就算关键字匹配成功了也不会被排除",undefined,"",true);Reflect.set(k.props,D,e(s));let q=n.createSectionContainerItem_input(k),S=pt("评论关键字","keywords","","多个关键字换行分割");Reflect.set(S.props,D,e(s));let R=n.createSectionContainerItem_textarea(S),I=pt("黑名单用户","userBlackList","","多个用户换行分割");Reflect.set(I.props,D,e(s));let z=n.createSectionContainerItem_textarea(I),E=pt("白名单用户","userWhiteList","","多个用户换行分割");Reflect.set(E.props,D,e(s));let A=n.createSectionContainerItem_textarea(E);return l.append(a,m,u,p,_,q,R,z,A),l},btn:{merge:true,position:"space-between",ok:{enable:false},cancel:{enable:true,text:"关闭"},other:{enable:true,text:`查看已过滤（${this.$el.isFilterElementHTML.length}）`,type:"primary",callback:(s,l)=>{console.log(this.$el.isFilterElementHTML),B.alert({title:{text:"评论过滤器-已过滤",position:"center"},content:{text:`
                                ${Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(o=>o.outerHTML).join(`
`)}

                                ${this.$el.isFilterElementHTML.join(`
`)}
                                `,html:true},btn:{ok:{type:"default",text:"关闭"}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh"});}}},dialogCloseCallBack(s){},onsubmit:(s,l)=>({success:true,data:l}),style:`
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
			.comiis_postli_top h2,
			.comiis_postli_top .top_lev{
				height: auto;
			}
            `}).showView();},getTemplateData(){return {enable:true,avatarFlag:false,replyFlag:false,viewthreadFlag:false,minLength:5,keywordLength:8,keywords:[],userBlackList:[],userWhiteList:[]}},getData(){return Y(this.$key.STORAGE_KEY,this.getTemplateData())},setData(t){W(this.$key.STORAGE_KEY,t);}},Ce={$key:{STORAGE_KEY:"mt-productListingReminder-rule"},init(){this.registerMenu(),this.runRule();},registerMenu(){j.registerLeftMenu({name:"商品上架提醒",icon:"",iconColor:"#2376b7",callback:()=>{this.showView();}});},async runRule(){async function t(){let i=await H.get("/keke_integralmall-keke_integralmall.html",{fetch:true,allowInterceptConfig:false});if(!i.status){x.error("【积分商城】获取数据失败");return}let s=[];return r.parseHTML(i.data.responseText,true,true).querySelectorAll(".task-list-wrapper li.col-xs-12").forEach(o=>{var a,c;s.push({name:r.text(o.querySelector(".mall-info a > *:first-child"))||r.text(o.querySelector(".mall-info a")),price:r.text(o.querySelector(".mall-info span.discount-price i")),endTime:r.text(o.querySelector(".mall-info #time_hz span.time")),remainingQuantity:parseInt(((c=(a=o.querySelector(".mall-info .mall-count .count-r"))==null?undefined:a.innerText)==null?undefined:c.replace(/仅剩|件/gi,""))||"0")});}),s}if(M.isPointsMall())return;let e=this.getData();if(!e.length)return;let n=await t();if(n){for(const i of n)for(const s of e)if(s.enable&&i.name.match(new RegExp(s.productName,"i"))&&!isNaN(i.remainingQuantity)&&i.remainingQuantity>0){b.success("成功匹配对应商品",s,i),B.confirm({title:{text:"积分商城提醒",position:"center"},content:{text:`<br />
                            您设置的商品已上架在积分商城中，当前售价 ${i.price}金币，仅剩${i.remainingQuantity}件，是否前往购买？
                            <a style="color: red !important;">(如需关闭提醒，请删除该关键字)</a>
                            <br />`,html:true},btn:{merge:true,position:"space-between",other:{enable:true,type:"danger",text:"删除提醒",callback:()=>{this.deleteData(s)?x.success("删除成功"):x.error("删除失败");}},ok:{text:"前往购买",callback:()=>{window.location.href=`${window.location.origin}/keke_integralmall-keke_integralmall.html`;}}},width:"300px",height:"300px"});return}}},getTemplateData(){return {uuid:g.generateUUID(),enable:true,name:"",productName:""}},showView(){let t=B.config.panelHandleContentUtils();function e(i){return {get(s,l){return i[s]??l},set(s,l){i[s]=l;}}}new qt({title:"商品上架提醒",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:i=>i.name,updateData:i=>this.updateData(i),deleteData:i=>this.deleteData(i),getData:i=>this.getData().find(o=>o.uuid===i.uuid)??i,itemControls:{enable:{enable:true,getEnable(i){return i.enable},callback:(i,s)=>{i.enable=s,this.updateData(i);}},edit:{enable:true,getView:(i,s)=>{let l=document.createDocumentFragment();s||(i=this.getTemplateData());let o=L("启用","enable",true);Reflect.set(o.props,D,e(i));let a=t.createSectionContainerItem_switch(o),c=V("规则名称","name","","",undefined,"必填");Reflect.set(c.props,D,e(i));let m=t.createSectionContainerItem_input(c),d=V("商品名","productName","","",undefined,"可正则，需手动转义");Reflect.set(d.props,D,e(i));let u=t.createSectionContainerItem_input(d);return l.append(a,m,u),l},onsubmit:(i,s,l)=>{let o=i.querySelectorAll(".rule-form-ulist > li"),a=this.getTemplateData();return s&&(a.uuid=l.uuid),o.forEach(c=>{let m=Reflect.get(c,"__formConfig__"),d=Reflect.get(m,"attributes"),u=Reflect.get(c,D),f=Reflect.get(d,et),p=Reflect.get(d,it),h=u.get(f,p);Reflect.has(a,f)?Reflect.set(a,f,h):b.error(`${f}不在数据中`);}),a.name.trim()===""?(x.error("规则名称不能为空"),{success:false,data:a}):s?{success:this.updateData(a),data:a}:{success:this.addData(a),data:a}}},delete:{enable:true,deleteCallBack:i=>this.deleteData(i)}}}).showView();},getData(){return Y(this.$key.STORAGE_KEY,[])},setData(t){W(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(i=>i.uuid==t.uuid)===-1?(e.push(t),W(this.$key.STORAGE_KEY,e),true):false},updateData(t){let e=this.getData(),n=e.findIndex(s=>s.uuid==t.uuid),i=false;return n!==-1&&(i=true,e[n]=t),this.setData(e),i},deleteData(t){let e=this.getData(),n=e.findIndex(s=>s.uuid==t.uuid),i=false;return n!==-1&&(i=true,e.splice(n,1)),this.setData(e),i},clearData(){at(this.$key.STORAGE_KEY);}},Ie={$key:{STORAGE_KEY:"mt-customizeUserLabels-rule"},init(){if(this.registerMenu(),M.isPage()||M.isGuide()||M.isPlate()||M.isPost()||M.isSearch()||M.isSpace()){let t=this.getData();if(!t.length)return;let e=new g.LockFunction(()=>{this.runRule(t);});g.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{e.run();}});}},registerMenu(){j.registerLeftMenu({name:"自定义用户标签",icon:"",iconColor:"#c70ea6",callback:()=>{this.showView();}});},showView(){let t=B.config.panelHandleContentUtils();function e(i){return {get(s,l){return i[s]??l},set(s,l){i[s]=l;}}}new qt({title:"自定义用户标签",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:i=>i.name,updateData:i=>this.updateData(i),deleteData:i=>this.deleteData(i),getData:i=>this.getData().find(o=>o.uuid===i.uuid)??i,itemControls:{enable:{enable:true,getEnable(i){return i.enable},callback:(i,s)=>{i.enable=s,this.updateData(i);}},edit:{enable:true,getView:(i,s)=>{var z;let l=document.createDocumentFragment();s||(i=this.getTemplateData());let o=L("启用","enable",true);Reflect.set(o.props,D,e(i));let a=t.createSectionContainerItem_switch(o),c=V("规则名称","name","","",undefined,"必填");Reflect.set(c.props,D,e(i));let m=t.createSectionContainerItem_input(c),d=V("用户UID","userUID","","",undefined,"必填，可正则，注意转义");Reflect.set(d.props,D,e(i));let u=t.createSectionContainerItem_input(d),f=V("标签名","labelName","","",undefined,"必填");Reflect.set(f.props,D,e(i));let p=t.createSectionContainerItem_input(f),h=V("标签颜色","labelColor","","");Reflect.set(h.props,D,e(i));let _=t.createSectionContainerItem_input(h),k=_.querySelector("input");(z=_.querySelector(".pops-panel-input__suffix"))==null||z.remove(),k.setAttribute("type","color"),r.css(k,{margin:"unset",padding:"unset",width:"80px"});let q=V("标签CSS","labelStyle","","");Reflect.set(q.props,D,e(i));let S=t.createSectionContainerItem_input(q),R=pt("标签点击事件","labelClickEvent","","");Reflect.set(R.props,D,e(i));let I=t.createSectionContainerItem_textarea(R);return l.append(a,m,u,p,_,S,I),l},onsubmit:(i,s,l)=>{let o=i.querySelectorAll(".rule-form-ulist > li"),a=this.getTemplateData();return s&&(a.uuid=l.uuid),o.forEach(c=>{let m=Reflect.get(c,"__formConfig__"),d=Reflect.get(m,"attributes"),u=Reflect.get(c,D),f=Reflect.get(d,et),p=Reflect.get(d,it),h=u.get(f,p);Reflect.has(a,f)?Reflect.set(a,f,h):b.error(`${f}不在数据中`);}),a.name.trim()===""?(x.error("规则名称不能为空"),{success:false,data:a}):a.userUID.trim()===""?(x.error("用户UID不能为空"),{success:false,data:a}):a.labelName.trim()===""?(x.error("标签名不能为空"),{success:false,data:a}):s?{success:this.updateData(a),data:a}:{success:this.addData(a),data:a}},style:`
                    .pops-panel-textarea textarea{
                        height: 150px;
                    }
                    `},delete:{enable:true,deleteCallBack:i=>this.deleteData(i)}}}).showView();},runRule(t){let e=g.getNodeListValue(j.comiisForumList(),j.comiisPostli(),j.comiisMmlist());e.length&&e.forEach(n=>{if(n.hasAttribute("data-custom-label"))return;n.setAttribute("data-custom-label","true");let i=Array.from(n.querySelectorAll("a")).map(s=>{let o=s.href.match(X.uid);if(o)return o[o.length-1]}).filter(s=>s!=null);if(i.length){let s=i[0],l=t.filter(c=>c.enable&&s.match(new RegExp(c.userUID)));if(!l.length)return;let o=document.createElement("a"),a=n.querySelector(".top_lev");l.forEach(c=>{o.className=a.className,o.classList.add("gm-custom-label"),o.style.cssText=`
                    background: ${c.labelColor} !important;${c.labelStyle||""}`,o.innerHTML=c.labelName,r.on(o,"click",async m=>{g.preventEvent(m),g.isNotNull(c.labelClickEvent)&&y.eval(c.labelClickEvent);}),a.parentElement.append(o);});}});},getTemplateData(){return {uuid:g.generateUUID(),enable:true,name:"",userUID:"",labelName:"",labelColor:"",labelStyle:"",labelClickEvent:""}},getData(){return Y(this.$key.STORAGE_KEY,[])},setData(t){W(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(i=>i.uuid==t.uuid)===-1?(e.push(t),W(this.$key.STORAGE_KEY,e),true):false},updateData(t){let e=this.getData(),n=e.findIndex(s=>s.uuid==t.uuid),i=false;return n!==-1&&(i=true,e[n]=t),this.setData(e),i},deleteData(t){let e=this.getData(),n=e.findIndex(s=>s.uuid==t.uuid),i=false;return n!==-1&&(i=true,e.splice(n,1)),this.setData(e),i},clearData(){at(this.$key.STORAGE_KEY);}},Me={init(){r.ready(()=>{$.execMenuOnce("mt-forum-post-publish-editorOptimization",()=>{gt.init();});});}},Ee={$flag:{showUserUID_initCSS:false},init(){(M.isPage()||M.isGuide()||M.isPlate()||M.isPost()||M.isSearch()||M.isSpace())&&$.execMenuOnce("mt-show-user-uid",()=>{this.showUserUID();}),(M.isSearch()||M.isGuide()||M.isSpace()||M.isPlate())&&$.execMenuOnce("mt-small-window",()=>{Vt.init();}),M.isPost()?(b.info("Router: 帖子"),Ft.init()):M.isSearch()?(b.info("Router: 搜索"),ye.init()):M.isKMiSign()?(b.info("Router: 签到"),xe.init()):M.isSpace()||M.isSpaceWithAt()?(b.info("Router: 空间"),we.init()):M.isGuide()?(b.info("Router: 导读"),$e.init()):M.isPostPublish()?(b.info("Router: 发帖页面"),Me.init()):b.error("Router: 未适配的链接 ==> "+window.location.href),r.ready(()=>{$.execMenuOnce("mt-black-home",()=>{ge.init();}),$.execMenuOnce("mt-online-user",()=>{be.init();}),$.execMenuOnce("mt-post-paidThemePost",()=>{dt.init();}),$.execMenuOnce("mt-ownBlock",()=>{Se.init();}),$.execMenuOnce("mt-post-comment-filter",()=>{Te.init();}),$.execMenuOnce("mt-productListingReminder",()=>{Ce.init();}),$.execMenuOnce("mt-customizeUserLabels",()=>{Ie.init();}),$.execMenuOnce("mt-link-text-to-hyperlink",()=>{_e();}),$.execMenu("mt-auto-sign",()=>{mt.init();});});},showUserUID(){b.info("显示用户UID"),this.$flag.showUserUID_initCSS||(this.$flag.showUserUID_initCSS=true,G(`
			.postli_top_tximg + h2{
 				height: auto;
			}
			.comiis_postli_top.bg_f.b_t h2{
            	height: auto;
          	}
			`));let t=new g.LockFunction(()=>{let e=g.getNodeListValue(j.comiisForumList(),j.comiisPostli(),j.comiisMmlist());e.length&&e.forEach(n=>{if(n.querySelector(".gm-custom-label-uid"))return;let s=Array.from(n.querySelectorAll("a")).map(l=>{let a=l.href.match(X.uid);if(a)return a[a.length-1]}).filter(l=>l!=null);if(s.length){let l=s[0],o=document.createElement("a"),a=n.querySelector(".top_lev");o.className=a.className,o.classList.add("gm-custom-label-uid"),o.style.cssText="background: #FF7600 !important;",o.innerHTML="UID:"+l,r.on(o,"click",async c=>{g.preventEvent(c),await g.setClip(l)?x.success(`${l}已复制`):x.error(`${l}复制失败`);}),a.parentElement.append(o);}});});g.mutationObserver(document,{config:{subtree:true,childList:true},callback(){t.run();}});}};$.init();Ee.init();});Re();

})(Qmsg, DOMUtils, Utils, pops, Viewer, hljs);