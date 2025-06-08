// ==UserScript==
// @name         【移动端】MT论坛优化
// @namespace    https://greasyfork.org/zh-CN/scripts/401359
// @version      2025.6.8
// @author       WhiteSevs
// @description  MT论坛效果增强，如自动签到、自动展开帖子、滚动加载评论、显示UID、自定义屏蔽、手机版小黑屋、编辑器优化、在线用户查看、便捷式图床、自定义用户标签、积分商城商品上架提醒等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAADptJREFUeF7tnQtwVNUZx/9nN5CQgCG8QoAdE3lFeWQDGAK+ikKCQGtHBHlJQeVRrTICJQUrgggkUhiRdIRgyBahpThWEHAob6mCVCApCIUQGiDKK0ACEUMMe2/n3E1Ckt279557d+8mN+fMMJlhv/Od7/vO737ncc+eJdBRLuRfSAbwa0JIogjRrkNVvapKQA6JEL8iVrLSZrPl1SvjaxlLtBp/Pv/8LEJImtb6ZqlHCHnddr9tRX31RxMA+fn5v7AS69766rSv7XaKzgExMTH7fK3XCH3MAJw6dapZaHDoYRB0McLAetGGiFxbtK0HIeTnemFvNSOZAfDV03/rjgWzt7RFeIgTc5IK0TRYMDR2RaVWLNrRGoJAMOPJa2gXXq6rfafojImJiTmnS0kAKjMDcOHchRkA/qTX1vzrjfHHbZGSmqcfKsG4PsV6VTLV/+DLljh0PlSq89rj15EY/RNT/drCFlj6d4jucFCXkgBUZgbgfP75eYSQt/XaKorA/O1tcKYwGFaLiN8+cgP9YvR1glqbjn7fBEv3tJLEI0KdWDjsMsJD9GWg+joPCBgANPh3BYJpn0ahuNSKmJY/45VHbyim4uu3rbh2OwiVf0MbCWgZ5kSrsLvS39DG3jvy8q0g/GFLW5Q7Ce4LEfD6E9fwYGSZWnZk5TgAGkN4pKAJlu11PY2Pd7yNKY/cqKHp++JGOH4xBMcq/ik1Q8fy3rZSdI8qQ2xkGYIsYo0qqbtaS/poGdunGEMeKlFSqepzDoCqMHkWchyKwM7TTaUPX3i4GIMfLMGXeWHYk9sUedcaa9Yc3sSJPrZSJMX+iA7Ny7ExOxybj98n6esf8xNefey6Zt21K3IAdIZy5qYoXLoVhLDGAlqFOXG+qJFOjfeqBweJUprP+cH15EfddxcLhl5Bk0b6xv3qBnIAdHYXTcs0PRtRUgYWome7Oz5tigOgI5wFxY2Qvr8l6HhvRHms421MrTXX0NsuB0BjBOlanK7JjS50srjkmcs+a5YDoCGUW080w9+ONNdQ0zdV6HwjY9QPPlFGAYg+E1MMCy6RgbjiE6UGKAnYPgCd5WccaGGAi96bSLi/FNOeuKbbjjYFY38MLv3atZQRcQwWfI5ywUGG4Kxu5X5UEBAAvrsUgrRdrSHUXKL70U3vqod1K8Ho3vq2otsUjEJw6Tc1GxJRAoIsEMFBBiE7YA56aTggANB3APRdQF0qLyUW4ckuP2o2ySMANbU5AMFBkvCl5kb8UNFwAOjmTuY3EbKuPB4LJHYCmoYAl4uBHceBPI0jarf2wFPdAVtL4FwhsOUocEFm74duRb87VGNDAFQAUOGz+BlESxZJdm7xQ38yqzQcAG9P//AEYBo9ZFatOAXgpdXA/66y+dbDBvx5Qs065U5gdDpw9ZZnXXqygHoAKtsWd8NiySIDnevZPPOttKEAKD39ayYDnVxviGuUj78CVjOeP0r5JTDUwynFVXuA9V97DqKeLMAOQKUN5FuIogPNhCzSH6W+7V5lbYYC8PYXkV739jdPByLC3I3+IgdIZUyYaaOAfp3ddX36LbB8u3xgXnn0Oh55gP21tHYAKmwhOA0BDliFLCOXkYYBQHf5Uj5v6xXJzElAZw8ia/8FfMR44k4uA2TsAdbJZABqHO18CgFr0Q3AvQYvAXBIS8ihyGW1g1XeMAB2nGqKv/xbfvJHDX+mNzBjSE0X7pQDL38EXGBcqneMdM0BQqstNgpLgEkfATe8TPbp0bRVz7NvDvkQgMoA3JZAcK0cDrN2rFp5wwB4959t8N8rwYp20RVA344Vq4CbwM7j8jN3JWVRzYHBcS4pQQA2HQFuqsjuWl4W+QGA6u59DNHiIMl39yj5zPq5IQDQ0zcT1ndgtS1g8r/qfgvP97rJ1L6fAXDZQsTNECgIzk1MxnkRNgQAegxrxqYoX9nsdz1aDosYAkCV5+I+EEsWGeRcqzcYhgBAt34X7zTmXb/egND6XduUYe5gto0HYwGo8FLEUViQhSDBQQZA0zamIQDUlRc/auGgh0s/GH5RrbgkFxAA7lmYBxEOECGLJIHJcEMAUDsBZIq4n4XXjy9gaiHAAFTaStOWA6KQRZJxSo0DHgHo2bNnDCHEwzYKMHny5Bc6tO8wTo3ySpl//CccuYX+efkjlpcAZUWwtn4YljAbYPHNqaJ6CkBlyOl5NwqCgyTjkLe+qgGA3W5/GcBqls6tU7LWEDR+YCSCe7yh26x6DsA9/0X8FZCWkDs9BaUKALvdvhXAUN2RqwMKLOGdEfbkBoBYNFtjGgDurRw+hyj+jiSjxtgmAWC326cBeF9ztOpgRWubRIT2/0DzkGA+ACo6ySJ0IwNxsrLLKgGoI2dzfEtSUNQTaJKQClhd3wdgKaYFADhBkoTuVQDExcUlEEK8ThRYAlfXZIPaPoqQhFSQIA+vGb0Ya2IA6JnF+SRZmEfdJ3FxcS8SQjLrWsf50p6gyH4uCBq5vhamppgaAIK1ZJDwmwYDAHXU2joBTRLSQILVHUM3NQAQ95EkcUCDAkCCoFVvFwQhyl9EMTUADW0IqJ7yrS3tLgiatPE6EpgaAJBnSZLzswaXASp73NqiB0IS0mAJlX9DaWIAvkMjIZ4MwN0GC4A0HEQ85IIgzPM5BdMCIOL3JFmouuOpQawC5HK9pdkDCI5LgSWsvZvI+8/So3nqS8tLr6PxnTr55R/JifYtpBvsvq94+qsO2DVoANR3rzkku9t+OvldQeirOTk5VUdsOQDm6FsmLwgh6dnZ2a816DkAU8RMKEwIGZ2dnb2BZwATdq5Klw7l5OQkUgDmEkLmq6zExUwUAUEQYikAmYSQF03kF3dFZQQIIWMoAGsIIRNV1uFiJoqAKIovcABM1KGsrnAAWCNmMnkOgMk6lNUdDgBrxEwmzwEwWYeyusMBYI2YyeQ5ACbrUFZ3OACsETOZvF8AWL3a+zfLrl69ijfffFNzKMeMGYMBA6TzjLJl0qRJmvV7q6jkm18araV01apVOHzYNzfG+AWA7GzlQxFvvfUWtm6l30RjK507d8bGjRsVK8XHxyvKaBFQ45sWvSx1KNz1HoCSkhI899xzoNmApWRmZqJXr16KVTgAiiGSBAKWAWjjO3bsQEpKijpLAUydOhVTpkxRJc8BUBWmwAJATZw3bx42b96saG3fvn2xcuVKRblKAQ6AulAFNANQE0tLS0EndefOyf/iarNmzZCVlYWOHTuq8woAB0BdqAIOADVz9+7dmDlzpqzFdJgYNWqUOo8qpIwGQGlS1qdPHzf7tdShSkwxCawdjbS0NGzYsMEtSEOGDMHChQuZOp8KGw0AHZ7o8sxToUtHOQDklqt0rkPnPJ5KvQWgrKwMwcGebwotLy/HhAkTcPJk1b0FiI6ORkZGBlq39ny9nDd9HAB1z4yhQwB9SuSopubu378f06bRi0pcJTU1FcnJtX48oJpf3vT5C4Bt27ahXbt2btGdP38+Nm3yfHmnlgwwduxY2WFx9OjROHVK1QVgihQYDkCLFi0wcuRIWcNWrFiBNWvWYPz48XjjDfmLnuhm0I0bN2SB8hcAnuYjd+7cwcSJE2U7RQsAiYmJ+PDDD93idPHiRQwfPhy0TV8UwwGg4+Qnn3yCTp06ebRfEARprZ+eni47XOTl5WHEiBGSnFxG8RcAbdu2xZIlS9C9e9UNK9LyVG78p05qAYDWq+0fXSktX74c+/Yx3pvvhZSAANCtWzesW7dO1iw6O/Y0aaqsMG7cOJw4cSIgAFAb6DyGDk0RERE4c+YMDhw44PVh1AoAVdq/f3/Q7e+ioiJpiCwu1vfLZrUNDQgA1AjaiTNmzGDOYkuXLq2CJxAZgNlgHRlAS1usdQIGADV02bJlim/1qju0d+9eTJ8+veq/OACs3e0uH1AAbDYb1q5di+bNle/soamPTgwLCu7dccgBqOcAUPOHDRuGBQsWKHri6fUxB0AxbIoCAc0AldbNmTNHmtXLFbpqWLRokdvHHADF/lUUqBMAhIeHSzt+Xbp0cTM4NzeX3k6Omzfdf76FA6DYv4oCdQIAaqWWpRIHQLF/FQU4AIoh0i+gBW79rarTUGcAoO8A6Mug2sXhcEi7X54KzwDqOtmbVJ0BgBrp6cClty1dDoDJAKDu0N3B2NhY6cUK3fXzVjgAJgSAxSUOAEu0PMvWqSGA1R0OAGvE3OU5APpjqKiBrwIqQqT03lwxkrUEeAZgjRjPAPojpkEDzwA8AzCfCtbAmaYqfA6gKWxslXgG4BmAZwDKAJ8E1swc9Oyjv+4xUJuj+BCgNlI65PgQwIcAPgTwIcDzl0P5EKAjtfKNIB3Bq6jK5wD6Y6iogc8B+ByAzwH4HIDPAfg+QK3Bgu8DKI6e3gX4JFBnAI2+Jo7vBPKdQK/fo2flmWcA1ojx8wD6I6ZBA18G8mUgXwbyZSBfBvJlIF8Ger9MiXV45ZNA1ogZNAmkN3527drVrbXZs2dj+/bt+q2u0DB48GAsXrzYTd/p06eZr5b1mVEeFMlddUvjRG9IDWTxy8sgT09mYWEhkpKSfO4rvXK+9k2ivt5v0Gs0vfHM0y+N+PLKV602+gUAasygQYOka9wiIyNx8OBBzJo1S6uNivXee+899OvXD1euXJH2GXbu3KlYx2gBetP53Llz0bNnTxw7dgzvvPMOzp49a7QZbu35DYCAe8YNUBUBDoCqMJlXiANg3r5V5RkHQFWYzCvEATBv36ryjAOgKkzmFeIAmLdvVXnGAVAVJvMKcQDM27eqPOMAqAqTeYU4AObtW1WecQBUhcm8QhIAdrs9HcCr5nWTeyYXAULICBIfH/+UKIq7eJgaXgQIIdGEum2324sAKP92S8OLkZk93pWTkzNIAiAuLm4+IWSumb3lvtWMgMViefro0aPbJQBoiY+P3y6KovxvtfIImiYChJDZ2dnZqdShKgAqMsEAQgg9aNcbQJBpPOaO0AicB/B3q9WaceTIkarjSP8HC+OZoHXD4j8AAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://bbs.binmt.cc/*
// @exclude      /^http(s|)://bbs.binmt.cc/uc_server.*$/
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@79fb4d854f1e2cdf606339b0dac18d50104e2ebe/lib/js-watermark/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.6.9/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.5.10/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.1.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.3.8/dist/index.umd.js
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
// @grant        GM.cookie
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

(function (x, Z, it, bt, Dt, pt) {
	'use strict';

	var Yt=Object.defineProperty;var Qt=(e,t,n)=>t in e?Yt(e,t,{enumerable:true,configurable:true,writable:true,value:n}):e[t]=n;var Jt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var tt=(e,t,n)=>Qt(e,typeof t!="symbol"?t+"":t,n);var ze=Jt((Wt,qt)=>{var Ct=typeof GM<"u"?GM:void 0,ot=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,Tt=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,Q=typeof GM_getValue<"u"?GM_getValue:void 0,ut=typeof GM_info<"u"?GM_info:void 0,Zt=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,W=typeof GM_setValue<"u"?GM_setValue:void 0,Xt=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,te=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,y=typeof unsafeWindow<"u"?unsafeWindow:void 0,ee=window;const ie={$data:{get enable(){return C.getValue("httpx-use-cookie-enable")},get useDocumentCookie(){return C.getValue("httpx-use-document-cookie")},cookieRule:[{key:"httpx-cookie-bbs.binmt.cc",hostname:/bbs.binmt.cc/g}]},fixCookieSplit(e){return h.isNotNull(e)&&!e.trim().endsWith(";")&&(e+=";"),e},concatCookie(e,t){return h.isNull(e)?t:(e=e.trim(),t=t.trim(),e=this.fixCookieSplit(e),t.startsWith(";")&&(t=t.substring(1)),e.concat(t))},handle(e){if(e.fetch||!this.$data.enable)return;let t="",n=e.url;n.startsWith("//")&&(n=window.location.protocol+n);let i=new URL(n);this.$data.useDocumentCookie&&i.hostname.endsWith(window.location.hostname.split(".").slice(-2).join("."))&&(t=this.concatCookie(t,document.cookie.trim()));for(let s=0;s<this.$data.cookieRule.length;s++){let l=this.$data.cookieRule[s];if(i.hostname.match(l.hostname)){let o=C.getValue(l.key);if(h.isNull(o))break;t=this.concatCookie(t,o);}}h.isNotNull(t)&&(e.headers&&e.headers.Cookie?e.headers.Cookie=this.concatCookie(e.headers.Cookie,t):e.headers.Cookie=t,f.info(["Httpx => 设置cookie:",e])),e.headers&&e.headers.Cookie!=null&&h.isNull(e.headers.Cookie)&&delete e.headers.Cookie;}},Pt={Viewer:{keyName:"ViewerCSS",url:"https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"},Hljs:{keyName:"HljsCSS",url:"https://fastly.jsdelivr.net/npm/highlight.js@latest/styles/github-dark.min.css"}};(function(e,t){typeof Wt=="object"&&typeof qt<"u"?qt.exports=t():(e=typeof globalThis<"u"?globalThis:e||self,e.Watermark=t(e.Watermark));})(typeof window<"u"?window:void 0,function(e){let t=function(){};CanvasRenderingContext2D.prototype.letterSpacingText=function(o,a,c,m){var d=this,p=d.canvas;if(!m&&p&&(m=parseFloat(window.getComputedStyle(p).letterSpacing)),!m)return this.fillText(o,a,c);var b=o.split(""),u=d.textAlign||"left",g=d.measureText(o).width,_=g+m*(b.length-1);u=="center"?a=a-_/2:u=="right"&&(a=a-_),d.textAlign="left",b.forEach(function(k){var v=d.measureText(k).width;d.fillText(k,a,c),a=a+v+m;}),d.textAlign=u;},CanvasRenderingContext2D.prototype.wrapText=function(o,a,c,m,d,p){if(!(typeof o!="string"||typeof a!="number"||typeof c!="number")){var b=this,u=b.canvas;typeof m>"u"&&(m=u&&u.width||300),typeof d>"u"&&(d=u&&parseInt(window.getComputedStyle(u).lineHeight)||parseInt(window.getComputedStyle(document.body).lineHeight));for(var g=o.split(""),_="",k=0;k<g.length;k++){var v=_+g[k],$=b.measureText(v),T=$.width;T>m&&k>0?(p?b.strokeText(_,a,c,u.width):b.fillText(_,a,c),_=g[k],c+=d):_=v;}p?b.strokeText(_,a,c,u.width):b.fillText(_,a,c);}},CanvasRenderingContext2D.prototype.fillTextVertical=function(o,a,c){var m=this;m.canvas;var d=o.split(""),p=d.map(function(g){return m.measureText(g).width}),b=m.textAlign,u=m.textBaseline;b=="left"?a=a+Math.max.apply(null,p)/2:b=="right"&&(a=a-Math.max.apply(null,p)/2),u=="bottom"||u=="alphabetic"||u=="ideographic"?c=c-p[0]/2:(u=="top"||u=="hanging")&&(c=c+p[0]/2),m.textAlign="center",m.textBaseline="middle",d.forEach(function(g,_){var v=p[_],k=g.charCodeAt(0);k<=256?(m.translate(a,c),m.rotate(90*Math.PI/180),m.translate(-a,-c)):_>0&&o.charCodeAt(_-1)<256&&(c=c+p[_-1]/2),m.fillText(g,a,c),m.setTransform(1,0,0,1,0,0);var v=p[_];c=c+v;}),m.textAlign=b,m.textBaseline=u;};function n(o){let a=new FileReader;return new Promise(c=>{a.onloadend=async function(m){c(m);},a.readAsDataURL(o);})}function i(o){let a=new Image;return new Promise(c=>{a.onload=()=>{c(a);},a.src=o;})}function s(o,a,c){let m=false;return Array.from(o).forEach(d=>{if(d.x==a&&d.y==c){m=true;return}}),m}function l(o){return o instanceof Array?o[Math.floor(Math.random()*o.length)]:o}return t.prototype.setFile=function(o){let a=this;return new Promise(async c=>{try{var m=await n(o);await a.setImage(m.target.result),c(!0);}catch{c(false);}})},t.prototype.setImage=function(o){this.dataUrl=o;let a=this;return new Promise(async c=>{var m=await i(o);a.sizes={width:m.width,height:m.height};var d=document.createElement("canvas");d.width=a.sizes.width,d.height=a.sizes.height;var p=d.getContext("2d");p.drawImage(m,0,0),m=null,a.canvas=d,c(true);})},t.prototype.hasImage=function(){return !!this.dataUrl},t.prototype.getSize=function(){return this.sizes},t.prototype.clearMark=function(){let o=this;if(typeof o.canvas>"u")return;function a(){var c=o.canvas.getContext("2d");c.clearRect(0,0,o.canvas.width,o.canvas.height);var m=o.canvas.width,d=o.canvas.height;o.canvas.width=m,o.canvas.height=d,c.beginPath();var p=new Image;p.src=o.dataUrl,c.drawImage(p,0,0),p=null;}a();},t.prototype.addText=function(o){var a={text:["Call By waterMark.addText"],fontSize:"6vw",fontFamily:"Microsoft Yahei",color:"#000000",textAlign:"center",stroke:false,globalAlpha:.7,rotateAngle:50,maxWidth:100,xMoveDistance:30,yMoveDistance:30};for(let D in a)typeof o[D]<"u"&&(a[D]=o[D]);a.maxWidth=parseInt(a.maxWidth)>0?a.maxWidth:1,a.xMoveDistance=parseInt(a.xMoveDistance)>0?a.xMoveDistance:1,a.yMoveDistance=parseInt(a.yMoveDistance)>0?a.yMoveDistance:1;var c=this.canvas.getContext("2d"),m=a.fontSize;m=m.toString(),~m.indexOf("vw")&&(m=(this.sizes.width/100*parseInt(m)).toFixed(0)),m=parseInt(m),c.font=m+"px "+a.fontFamily,c.fillStyle=a.color,c.textAlign=a.textAlign,c.globalAlpha=a.globalAlpha;let d=this.sizes.width,p=this.sizes.height,b=a.rotateAngle*Math.PI/180,u=a.xMoveDistance,g=a.yMoveDistance,_=a.maxWidth,k=m,v=[];for(var $=d/2;$<d;$+=u){for(var T=p/2;T<p;T+=g)s(v,$,T)||(v=v.concat({x:$,y:T}),c.setTransform(1,0,0,1,0,0),c.translate($,T),c.rotate(b),c.wrapText(l(a.text),0,0,_,k,a.stroke));for(var S=p/2;S>0;S-=g)s(v,$,S)||(v=v.concat({x:$,y:S}),c.setTransform(1,0,0,1,0,0),c.translate($,S),c.rotate(b),c.wrapText(l(a.text),0,0,_,k,a.stroke));}for(var $=d/2;$>0;$-=u){for(var T=p/2;T<p;T+=g)s(v,$,T)||(v=v.concat({x:$,y:T}),c.setTransform(1,0,0,1,0,0),c.translate($,T),c.rotate(b),c.wrapText(l(a.text),0,0,_,k,a.stroke));for(var S=p/2;S>0;S-=g)s(v,$,S)||(v=v.concat({x:$,y:S}),c.setTransform(1,0,0,1,0,0),c.translate($,S),c.rotate(b),c.wrapText(l(a.text),0,0,_,k,a.stroke));}},t.prototype.addPixelText=function(o){var a={text:"像素文字水印",big:{fontSize:150,fontFamily:"微软雅黑",textAlign:"center",rotateAngle:0,stroke:false},small:{fontSize:10,fontFamily:"微软雅黑",color:"#000",textAlign:"center",globalAlpha:.7}};for(let $ in a)typeof o[$]<"u"&&(a[$]=o[$]);var c=this.canvas.getContext("2d"),m=document.createElement("canvas"),d=m.getContext("2d");m.width=this.sizes.width,m.height=this.sizes.height,d.font=a.big.fontSize+"px "+a.big.fontFamily,d.textAlign=a.big.textAlign,d.textBaseline="middle",d.translate(m.width/2,m.height/2),d.rotate(a.big.rotateAngle*Math.PI/180),d.translate(-m.width/2,-m.height/2),a.big.stroke?d.strokeText(a.text,m.width/2,m.height/2,m.width):d.fillText(a.text,m.width/2,m.height/2);for(var p=a.text.split(""),b=d.getImageData(0,0,m.width,m.height),u=[],g=0;g<m.height;g+=a.small.fontSize)for(var _=0;_<m.width;_+=a.small.fontSize){var k=_+g*m.width,v=b.data[k*4+3];v>128&&u.push({text:l(p),x:_,y:g});}c.font=a.small.fontSize+"px "+a.small.fontFamily,c.fillStyle=a.small.color,c.textAlign=a.small.textAlign,c.textBaseline="middle",c.globalAlpha=a.small.globalAlpha,u.forEach($=>{c.fillText($.text,$.x,$.y);});},t.prototype.addImage=function(o){if(o.imageArray==null)return alert("参数缺少imageArray"),false;if(o.imageArray.length===0)return alert("参数imageArray不能为空"),false;let a={imageArray:[],width:50,height:50,globalAlpha:.5,rotateAngle:0,xMoveDistance:70,yMoveDistance:70};for(let M in a)typeof o[M]<"u"&&(a[M]=o[M]);a.width=parseInt(a.width)>0?a.width:1,a.height=parseInt(a.height)>0?a.height:1,a.xMoveDistance=parseInt(a.xMoveDistance)>0?a.xMoveDistance:1,a.yMoveDistance=parseInt(a.yMoveDistance)>0?a.yMoveDistance:1;let c=this.canvas.getContext("2d"),m=[],d=parseInt(Math.sqrt(a.width*a.width+a.height*a.height)),p=this.sizes.width,b=this.sizes.height,u=a.rotateAngle*Math.PI/180,g=a.xMoveDistance,_=a.yMoveDistance,k=p/2-d/2,v=b/2-d/2,$=(d-a.width)/2,T=(d-a.height)/2;Array.from(a.imageArray).forEach(M=>{var L=document.createElement("canvas"),U=L.getContext("2d");L.width=d,L.height=d,U.globalAlpha=a.globalAlpha,U.translate(d/2,d/2),U.rotate(u),U.translate(-d/2,-d/2),U.drawImage(M,$,T,a.width,a.height),m=m.concat(L);});function S(M){return M[Math.floor(Math.random()*M.length)]}c.setTransform(1,0,0,1,0,0);let D=[];for(let M=k;M<p;M+=g){for(let L=v;L<b;L+=_)s(D,M,L)||(D=D.concat({x:M,y:L}),c.drawImage(S(m),M,L));for(let L=v;L>-Math.abs(d);L-=_)s(D,M,L)||(D=D.concat({x:M,y:L}),c.drawImage(S(m),M,L));}for(let M=k;M>-Math.abs(d);M-=g){for(let L=v;L<b;L+=_)s(D,M,L)||(D=D.concat({x:M,y:L}),c.drawImage(S(m),M,L));for(let L=v;L>-Math.abs(d);L-=_)s(D,M,L)||(D=D.concat({x:M,y:L}),c.drawImage(S(m),M,L));}},t.prototype.getPreview=function(){return this.dataUrl},t.prototype.render=function(o){return o=o==="png"?"png":"jpeg",this.canvas.toDataURL("image/"+o)},t.prototype.renderBlob=function(){let o=this;return new Promise(a=>{o.canvas.toBlob(function(c){a(window.URL.createObjectURL(c));});})},t.prototype.noConflict=function(){return window.Watermark&&delete window.Watermark,e&&(window.Watermark=e),t},t});const kt={addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),G(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){let t=typeof Tt=="function"?Tt(e.keyName):"";typeof t=="string"&&t?G(t):kt.loadStyleLink(e.url);},async loadStyleLink(e){let t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=e,r.ready(()=>{document.head.appendChild(t);});},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(n=>{t.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.match(/^http(s|):\/\//i)||(e.startsWith("/")||(e+="/"),e=window.location.origin+e),e},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;let t=new URL(e);return t.protocol="https:",t.toString()}},ne="【移动端】MT论坛优化",h=it.noConflict(),r=Z.noConflict(),N=bt,f=new h.Log(ut,y.console||ee.console);var Rt;const yt=((Rt=ut==null?void 0:ut.script)==null?void 0:Rt.name)||ne,zt=false;f.config({debug:zt,logMaxCount:1e3,autoClearConsole:true,tag:true});x.config(Object.defineProperties({html:true,autoClose:true,showClose:false},{position:{get(){return C.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return C.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return C.getValue("qmsg-config-showreverse",true)}},zIndex:{get(){let e=it.getMaxZIndex(),t=bt.config.InstanceUtils.getPopsMaxZIndex().zIndex;return it.getMaxValue(e,t)+100}}}));const se=new h.GM_Menu({GM_getValue:Q,GM_setValue:W,GM_registerMenuCommand:Zt,GM_unregisterMenuCommand:Xt}),O=new h.Httpx({xmlHttpRequest:te,logDetails:zt});O.interceptors.request.use(e=>(ie.handle(e),e));O.interceptors.response.use(void 0,e=>(f.error("拦截器-请求错误",e),e.type==="onabort"?x.warning("请求取消"):e.type==="onerror"?x.error("请求异常"):e.type==="ontimeout"?x.error("请求超时"):x.error("其它错误"),e));bt.GlobalConfig.setGlobalConfig({mask:{enable:true,clickEvent:{toClose:false,toHide:false}}});y.Object.defineProperty,y.Function.prototype.apply,y.Function.prototype.call,y.Element.prototype.appendChild,y.setTimeout;const G=h.addStyle.bind(h);kt.setGMResourceCSS(Pt.Viewer);kt.setGMResourceCSS(Pt.Hljs);const E=document.querySelector.bind(document),V=document.querySelectorAll.bind(document),Nt="GM_Panel",$t="data-init",nt="data-key",st="data-default-value",ae="data-init-more-value",P="data-storage-api",It={setting:{get width(){return window.innerWidth<550?"88vw":"550px"},get height(){return window.innerHeight<450?"70vh":"450px"}}};class oe{constructor(t){tt(this,"storageKey");tt(this,"listenerData");if(typeof t=="string"){let n=t.trim();if(n=="")throw new Error("key参数不能为空字符串");this.storageKey=n;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new it.Dictionary;}getLocalValue(){let t=Q(this.storageKey);return t==null&&(t={},this.setLocalValue(t)),t}setLocalValue(t){W(this.storageKey,t);}set(t,n){let i=this.get(t),s=this.getLocalValue();Reflect.set(s,t,n),this.setLocalValue(s),this.triggerValueChangeListener(t,i,n);}get(t,n){let i=this.getLocalValue();return Reflect.get(i,t)??n}getAll(){return this.getLocalValue()}delete(t){let n=this.get(t),i=this.getLocalValue();Reflect.deleteProperty(i,t),this.setLocalValue(i),this.triggerValueChangeListener(t,n,void 0);}has(t){let n=this.getLocalValue();return Reflect.has(n,t)}keys(){let t=this.getLocalValue();return Reflect.ownKeys(t)}values(){let t=this.getLocalValue();return Reflect.ownKeys(t).map(n=>Reflect.get(t,n))}clear(){ot(this.storageKey);}addValueChangeListener(t,n){let i=Math.random(),s=this.listenerData.get(t)||[];return s.push({id:i,key:t,callback:n}),this.listenerData.set(t,s),i}removeValueChangeListener(t){let n=false;for(const[i,s]of this.listenerData.entries()){for(let l=0;l<s.length;l++){const o=s[l];(typeof t=="string"&&o.key===t||typeof t=="number"&&o.id===t)&&(s.splice(l,1),l--,n=true);}this.listenerData.set(i,s);}return n}triggerValueChangeListener(t,n,i){if(!this.listenerData.has(t))return;let s=this.listenerData.get(t);for(let l=0;l<s.length;l++){const o=s[l];if(typeof o.callback=="function"){let a=this.get(t),c,m;typeof n<"u"&&arguments.length>=2?m=n:m=a,typeof i<"u"&&arguments.length>2?c=i:c=a,o.callback(t,m,c);}}}}const at=new oe(Nt),j={registerLeftMenu(e){h.waitNode(".comiis_sidenv_box .sidenv_li .comiis_left_Touch",1e4).then(t=>{if(!t){f.error("注册左侧面板菜单失败，原因：该元素不存在");return}let n=r.createElement("li",{className:"comiis_left_Touch",innerHTML:`
						<a href="javascript:;" class="comiis_left_Touch">
							<i class="comiis_font"></i>
							${e.name}
						</a>
						`}),i=n.querySelector(".comiis_font");typeof e.style=="string"&&(i.style.cssText=e.style),typeof e.icon=="string"&&(i.innerHTML=e.icon),typeof e.iconColor=="string"&&(i.style.color=e.iconColor),typeof e.iconSize=="string"&&(i.style.fontSize=e.iconSize),r.on(n,"click",s=>{h.preventEvent(s),typeof e.callback=="function"&&e.callback();}),r.append(t,n);});},comiisForumList:()=>document.querySelectorAll("li.forumlist_li"),comiisPostli:()=>document.querySelectorAll("div.comiis_postli.comiis_list_readimgs.nfqsqi"),comiisMmlist:()=>document.querySelectorAll(".comiis_mmlist")},R=function(e,t,n,i,s,l){let o={text:e,type:"switch",description:s,attributes:{},props:{},getValue(){return !!this.props[P].get(t,n)},callback(a,c){let m=!!c;f.success(`${m?"开启":"关闭"} ${e}`),this.props[P].set(t,m);},afterAddToUListCallBack:l};return Reflect.set(o.attributes,nt,t),Reflect.set(o.attributes,st,n),Reflect.set(o.props,P,{get(a,c){return C.getValue(a,c)},set(a,c){C.setValue(a,c);}}),o},dt=function(e,t,n,i,s,l="",o){let a={text:e,type:"textarea",attributes:{},props:{},description:i,placeholder:l,disabled:o,getValue(){return this.props[P].get(t,n)},callback(c,m){this.props[P].set(t,m);}};return Reflect.set(a.attributes,nt,t),Reflect.set(a.attributes,st,n),Reflect.set(a.props,P,{get(c,m){return C.getValue(c,m)},set(c,m){C.setValue(c,m);}}),a},Et=function(e,t,n,i,s,l){let o=[];typeof i=="function"?o=i():o=i;let a={text:e,type:"select",description:l,attributes:{},props:{},getValue(){return this.props[P].get(t,n)},callback(c,m,d){let p=m;f.info(`选择：${d}`),this.props[P].set(t,p),typeof s=="function"&&s(c,p,d);},data:o};return Reflect.set(a.attributes,nt,t),Reflect.set(a.attributes,st,n),Reflect.set(a.props,P,{get(c,m){return C.getValue(c,m)},set(c,m){C.setValue(c,m);}}),a},ft=function(e,t,n,i,s,l,o,a,c,m){let d={text:e,type:"button",attributes:{},description:t,buttonIcon:i,buttonIsRightIcon:s,buttonIconIsLoading:l,buttonType:o,buttonText:n,callback(p){typeof a=="function"&&a(p);},afterAddToUListCallBack:c};return Reflect.set(d.attributes,$t,()=>(d.disable=false,false)),d},Mt=function(e,t,n,i){let s={type:"own",attributes:{},props:n,getLiElementCallBack:e,afterAddToUListCallBack:i};return Reflect.set(s.attributes,$t,()=>false),s},X={formhash:/formhash=([0-9a-zA-Z]+)/,uid:/uid(=|-)(\d+)/,fontSpecial:/<font.*?>|<\/font>|<strike>|<strong>|<i>|<u>|align=".*?"|<br>[\s]*<br>[\s]*<br>/g,ptid:/&ptid=([\d]+)/i,pid:/&pid=([\d]+)/i,tid:/&tid=([\d]+)/i},F={getAvatar:(e,t="middle")=>`/uc_server/avatar.php?uid=${e}&size=${t}&ts=1`,getCurrentUID(){let e=y.discuz_uid;if(typeof e=="string")return e;let t=document.querySelector('.sidenv_exit a[href*="uid="]');if(t){let n=t.href.match(/uid=([0-9]+)/);if(n)return n[n.length-1]}},async getFormHash(){let e=Array.from((top||globalThis).document.querySelectorAll("input[name=formhash]"));for(let i=0;i<e.length;i++){let l=e[i].value;if(l)return l}let t=Array.from((top||globalThis).document.querySelectorAll('a[href*="formhash="]'));for(let i=0;i<t.length;i++){let l=t[i].href.match(X.formhash);if(l){let o=l[l.length-1];if(o)return o}}let n=await O.get("/home.php?mod=spacecp",{fetch:true,allowInterceptConfig:false});if(n.status){let i=n.data.responseText,l=r.parseHTML(i,true,true).querySelector("input[name=formhash]");if(l){let o=l.value;if(h.isNotNull(o))return o}}else f.error("请求个人主页获取formhash失败",n);},envIsMobile(){return (y.STYLEID||window.STYLEID||typeof STYLEID<"u"&&STYLEID)==="3"},getThreadId:e=>{let t=e.match(/thread-([\d]+)-|&tid=([\d]+)/i);if(t){let n=t.filter(Boolean);return n[n.length-1]}},getForumId(e){let t=e.match(/&fid=([\d]+)/i);if(t)return t[t.length-1]},getPostId(e){let t=e.match(/&pid=([\d]+)/i);if(t)return t[t.length-1]},getRepquote(e){let t=e.match(/&repquote=([\d]+)/i);if(t)return t[t.length-1]}},lt={$upload:{small:false,middle:false,big:false},$data:{avatarInfo:{maxSize:2097152,small:{width:48,height:48},middle:{width:120,height:120},big:{width:200,height:250}}},$el:{$smallUpload:null,$middleUpload:null,$bigUpload:null,$smallStatus:null,$middleStatus:null,$bigStatus:null},$avatar:{get small(){return lt.$el.$smallUpload.files[0]},get middle(){return lt.$el.$middleUpload.files[0]},get big(){return lt.$el.$bigUpload.files[0]}},showView(){const e=this;let t=N.confirm({title:{text:"修改头像",position:"center"},content:{text:`
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
                `,html:true},btn:{ok:{text:"上传",callback:async()=>{if(!e.$upload.small){x.error("请上传小头像");return}if(!e.$upload.middle){x.error("请上传中头像");return}if(!e.$upload.big){x.error("请上传大头像");return}let n=x.loading("正在处理数据中...");try{let i=await this.getUploadUrl();if(i==null)return;let s=await F.getFormHash();if(s==null){x.error("获取formhash失败");return}let l={big:{base64:await h.parseFileToBase64(this.$avatar.big)},middle:{base64:await h.parseFileToBase64(this.$avatar.middle)},small:{base64:await h.parseFileToBase64(this.$avatar.small)}};Object.keys(l).forEach(c=>{let m=l[c];m.base64=m.base64.substring(m.base64.indexOf(",")+1);});let o=new FormData;o.append("Filedata",this.$avatar.big||""),o.append("confirm","确定"),o.append("avatar1",l.big.base64),o.append("avatar2",l.middle.base64),o.append("avatar3",l.small.base64),o.append("formhash",s),f.info("头像的base64字符串",l);let a=await O.post(i,{data:o,processData:!1,headers:{Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9","User-Agent":h.getRandomPCUA(),Host:window.location.hostname,Origin:window.location.origin,Referer:`${window.location.origin}/home.php?mod=spacecp&ac=avatar`}});if(!a.status)return;a.data.responseText.indexOf("window.parent.postMessage('success','*')")!=-1?(t.close(),x.success("上传成功")):(f.error("上传失败",a),x.error(a.data.responseText,{timeout:6e3,isHTML:!1,html:!1}));}catch(i){f.error(i);}finally{n.close();}}}},mask:{enable:true},width:"88vw",height:"500px",style:`
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
            `});this.$el.$smallUpload=t.$shadowRoot.querySelector(".avatar-upload[data-type='small']"),this.$el.$middleUpload=t.$shadowRoot.querySelector(".avatar-upload[data-type='middle']"),this.$el.$bigUpload=t.$shadowRoot.querySelector(".avatar-upload[data-type='big']"),this.$el.$smallStatus=t.$shadowRoot.querySelector(".avatar-upload-status[data-type='small']"),this.$el.$middleStatus=t.$shadowRoot.querySelector(".avatar-upload-status[data-type='middle']"),this.$el.$bigStatus=t.$shadowRoot.querySelector(".avatar-upload-status[data-type='big']"),this.setUploadChangeEvent(this.$el.$smallUpload,this.$el.$smallStatus,this.$data.avatarInfo.small,()=>{this.$upload.small=true;}),this.setUploadChangeEvent(this.$el.$middleUpload,this.$el.$middleStatus,this.$data.avatarInfo.middle,()=>{this.$upload.middle=true;}),this.setUploadChangeEvent(this.$el.$bigUpload,this.$el.$bigStatus,this.$data.avatarInfo.big,()=>{this.$upload.big=true;});},setUploadChangeEvent(e,t,n,i){r.on(e,"change",s=>{var m;if(!((m=e.files)!=null&&m.length))return;r.text(t,"🤡获取文件信息中..."),t.removeAttribute("data-success");let l=e.files[0],o=l.size,a=new Image,c=new FileReader;c.readAsDataURL(l),c.onload=function(d){a.src=d.target.result,a.onload=function(){if(a.width>n.width||a.height>n.height){e.value="",t.setAttribute("data-success","false"),r.text(t,`🤡校验失败 ==> 图片尺寸不符合，宽：${a.width} 高：${a.height}`);return}if(o>lt.$data.avatarInfo.maxSize){e.value="",t.setAttribute("data-success","false"),r.text(t,`🤡校验失败 ==> 图片大小不符合：${o}byte，限制最大：${lt.$data.avatarInfo.maxSize}byte`);return}t.setAttribute("data-success","true"),r.text(t,`🤣 通过 宽:${a.width} 高:${a.height} 大小(byte):${o}`),i();};};});},async getUploadUrl(){let e=await O.get("/home.php?mod=spacecp&ac=avatar",{headers:{"User-Agent":h.getRandomPCUA()}});if(!e.status)return;if(h.isNull(e.data.responseText)){x.error("动态头像：获取上传地址失败");return}let t=e.data.responseText.match(/var[\s]*data[\s]*=[\s]*"(.+?)"/);if(t==null||t.length!=2){x.error("动态头像：获取变量data失败");return}let i=t[t.length-1].split(","),s=i[i.indexOf("src")+1].replace("images/camera.swf?inajax=1","index.php?m=user&a=rectavatar&base64=yes");return f.info("上传地址："+s),s}},re={id:"component-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[Et("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,n)=>{f.info("设置当前Qmsg弹出位置"+n);},"Toast显示在页面九宫格的位置"),Et("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),R("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},{text:"Cookie配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[R("启用","httpx-use-cookie-enable",false,void 0,"启用后，将根据下面的配置进行添加cookie"),R("使用document.cookie","httpx-use-document-cookie",false,void 0,"自动根据请求的域名来设置对应的cookie"),dt("bbs.binmt.cc","httpx-cookie-bbs.binmt.cc","",void 0,void 0,"Cookie格式：xxx=xxxx;xxx=xxxx")]}]}]},{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[R("文本转超链接","mt-link-text-to-hyperlink",true,void 0,"自动把符合超链接格式的文字转为超链接"),R("显示用户UID","mt-show-user-uid",true,void 0,"格式为UID：xxx"),R("小窗模式","mt-small-window",true,void 0,"开启后点击帖子右侧区域为小窗打开"),R("延长登录Cookie过期时间","mt-extend-cookie-expire",false,void 0,"减少频繁登录账号的问题")]}]},{text:"额外菜单项",type:"deepMenu",forms:[{type:"forms",text:"",forms:[R("小黑屋","mt-black-home",true,void 0,"将会在左侧面板添加【小黑屋】菜单"),R("在线用户","mt-online-user",true,void 0,"将会在左侧面板添加【在线用户】菜单"),R("付费主题白嫖提醒","mt-post-paidThemePost",true,void 0,"将会在左侧面板添加【付费主题白嫖提醒】菜单"),R("我的屏蔽","mt-ownBlock",true,void 0,"将会在左侧面板添加【我的屏蔽】菜单"),R("商品上架提醒","mt-productListingReminder",true,void 0,"将会在左侧面板添加【商品上架提醒】菜单"),R("自定义用户标签","mt-customizeUserLabels",true,void 0,"将会在左侧面板添加【自定义用户标签】菜单"),R("评论过滤器","mt-post-comment-filter",true,void 0,"将会在左侧面板添加【评论过滤器】菜单")]}]},{text:"头像",type:"deepMenu",forms:[{text:"<a href='https://ezgif.com/resize' target='_blank'>Resize Image</a>",type:"forms",forms:[Mt(e=>{let t=r.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
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
										`});return n.querySelector(".avatar-img[data-size='small']"),n.querySelector(".avatar-img[data-size='middle']"),n.querySelector(".avatar-img[data-size='big']"),e.appendChild(t),e.appendChild(n),e.appendChild(i),e}),Mt(e=>{let t=r.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
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
											`});return e.appendChild(t),e.appendChild(n),e}),ft("修改头像",`可以上传gif图片，注意图片最大限制为${it.formatByteToSize(lt.$data.avatarInfo.maxSize)}`,"上传",void 0,false,false,"primary",()=>{lt.showView();})]}]}]}]},H=function(e,t,n,i,s,l="",o,a,c){let m={text:e,type:"input",isNumber:!!o,isPassword:!!a,props:{},attributes:{},description:i,afterAddToUListCallBack:c,getValue(){return this.props[P].get(t,n)},callback(d,p,b){this.props[P].set(t,o?b:p);},placeholder:l};return Reflect.set(m.attributes,nt,t),Reflect.set(m.attributes,st,n),Reflect.set(m.props,P,{get(d,p){return C.getValue(d,p)},set(d,p){C.setValue(d,p);}}),m},le=`#comiis_foot_menu_beautify {\r
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
`,ce=()=>[{"[呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq001.gif","[撇嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq002.gif","[色]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq003.gif","[发呆]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq004.gif","[得意]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq005.gif","[流泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq006.gif","[害羞]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq007.gif","[闭嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq008.gif","[睡]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq009.gif","[大哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq010.gif","[尴尬]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq011.gif","[发怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq012.gif","[调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq013.gif","[呲牙]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq014.gif","[惊讶]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq015.gif","[难过]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq016.gif","[酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq017.gif","[冷汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq018.gif","[抓狂]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq019.gif","[吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq020.gif","[偷笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq021.gif","[可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq022.gif","[白眼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq023.gif","[傲慢]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq024.gif","[饥饿]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq025.gif","[困]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq026.gif","[惊恐]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq027.gif","[流汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq028.gif","[憨笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq029.gif","[装逼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq030.gif","[奋斗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq031.gif","[咒骂]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq032.gif","[疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq033.gif","[嘘]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq034.gif","[晕]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq035.gif","[折磨]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq036.gif","[衰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq037.gif","[骷髅]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq038.gif","[敲打]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq039.gif","[再见]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq040.gif","[擦汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq041.gif","[抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq042.gif","[鼓掌]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq043.gif","[糗大了]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq044.gif","[坏笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq045.gif","[左哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq046.gif","[右哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq047.gif","[哈欠]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq048.gif","[鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq049.gif","[委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq050.gif","[快哭了]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq051.gif","[阴脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq052.gif","[亲亲]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq053.gif","[吓]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq054.gif","[可怜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq055.gif","[眨眼睛]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq056.gif","[笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq057.gif","[dogeQQ]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq058.gif","[泪奔]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq059.gif","[无奈]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq060.gif","[托腮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq061.gif","[卖萌]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq062.png","[斜眼笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq063.gif","[喷血]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq064.gif","[惊喜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq065.gif","[骚扰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq066.gif","[小纠结]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq067.gif","[我最美]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq068.gif","[菜刀]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq069.gif","[西瓜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq070.gif","[啤酒]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq071.gif","[篮球]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq072.gif","[乒乓]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq073.gif","[咖啡]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq074.gif","[饭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq075.gif","[猪]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq076.gif","[玫瑰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq077.gif","[凋谢]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq078.gif","[示爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq079.gif","[爱心]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq080.gif","[心碎]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq081.gif","[蛋糕]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq082.gif","[闪电]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq083.gif","[炸弹]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq084.gif","[刀]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq085.gif","[足球]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq086.gif","[瓢虫]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq087.gif","[便便]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq088.gif","[月亮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq089.gif","[太阳]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq090.gif","[礼物]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq091.gif","[抱抱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq092.gif","[喝彩]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq93.gif","[祈祷]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq94.gif","[棒棒糖]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq95.gif","[药]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq96.gif","[赞]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq097.gif","[差劲]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq098.gif","[握手]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq099.gif","[胜利]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq100.gif","[抱拳]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq101.gif","[勾引]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq102.gif","[拳头]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq103.gif","[爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq105.gif","[NO]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq106.gif","[OK]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq107.gif"},{"[#呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_1.png","[#滑稽]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_10.png","[#吐舌]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_3.png","[#哈哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_2.png","[#啊]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_23.png","[#酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_22.png","[#怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_13.png","[#开心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_39.png","[#汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_14.png","[#泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_16.png","[#黑线]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_15.png","[#鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_21.png","[#不高兴]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_12.png","[#真棒]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_17.png","[#钱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_40.png","[#疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_26.png","[#阴险]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_20.png","[#吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_34.png","[#咦]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_41.png","[#委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_29.png","[#花心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_6.png","[#呼～]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_42.png","[#激动]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_5.png","[#冷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_43.png","[#可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_4.png","[#What？]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_25.png","[#勉强]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_38.png","[#狂汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_24.png","[#酸爽]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_27.png","[#乖]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_8.png","[#雅美蝶]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_28.png","[#睡觉]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_31.png","[#惊哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_19.png","[#哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_44.png","[#笑尿]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_32.png","[#惊讶]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_30.png","[#小乖]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_7.png","[#喷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_18.png","[#抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_33.png","[#捂嘴笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_9.png","[#你懂的]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_11.png","[#犀利]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_35.png","[#小红脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_36.png","[#懒得理]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_37.png","[#爱心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_45.png","[#心碎]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_46.png","[#玫瑰]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_47.png","[#礼物]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_48.png","[#彩虹]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_49.png","[#太阳]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_50.png","[#月亮]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_51.png","[#钱币]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_52.png","[#咖啡]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_53.png","[#蛋糕]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_54.png","[#大拇指]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_55.png","[#胜利]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_56.png","[#爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_57.png","[#OK]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_58.png","[#弱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_59.png","[#沙发]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_60.png","[#纸巾]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_61.png","[#香蕉]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_62.png","[#便便]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_63.png","[#药丸]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_64.png","[#红领巾]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_65.png","[#蜡烛]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_66.png","[#三道杠]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_67.png","[#音乐]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_68.png","[#灯泡]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_69.png"},{"[doge]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/1.png","[doge思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/2.png","[doge再见]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/3.png","[doge生气]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/4.png","[doge气哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/5.png","[doge笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/7.png","[doge调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/6.png","[doge啊哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/8.png","[doge原谅TA]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/9.png","[miao]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/10.png","[miao思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/11.png","[miao拜拜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/12.png","[miao生气]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/13.png","[miao气哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/14.png","[二哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/15.png","[摊手]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/19.png","[w并不简单]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/20.png","[w滑稽]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/21.png","[w色]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/22.png","[w爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/23.png","[w拜拜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/24.png","[w悲伤]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/25.png","[w鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/26.png","[w馋嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/27.png","[w冷汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/28.png","[w打哈欠]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/29.png","[w打脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/30.png","[w敲打]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/31.png","[w生病]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/32.png","[w闭嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/33.png","[w鼓掌]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/34.png","[w哈哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/35.png","[w害羞]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/36.png","[w呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/37.png","[w黑线]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/38.png","[w哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/39.png","[w调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/40.png","[w可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/41.png","[w可怜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/42.png","[w酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/43.png","[w困]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/44.png","[w懒得理你]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/45.png","[w流泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/46.png","[w怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/47.png","[w怒骂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/48.png","[w钱]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/49.png","[w亲亲]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/50.png","[w傻眼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/51.png","[w便秘]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/52.png","[w失望]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/53.png","[w衰]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/54.png","[w睡觉]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/55.png","[w思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/56.png","[w开心]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/57.png","[w色舔]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/58.png","[w偷笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/59.png","[w吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/60.png","[w抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/61.png","[w委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/62.png","[w笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/63.png","[w嘻嘻]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/64.png","[w嘘]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/65.png","[w阴险]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/66.png","[w疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/67.png","[w抓狂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/70.png","[w晕]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/69.png","[w右哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/68.png","[w左哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/71.png","[w肥皂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/77.png","[w奥特曼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/78.png","[w草泥马]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/79.png","[w兔子]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/80.png","[w熊猫]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/81.png","[w猪头]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/82.png","[w→_→]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/83.png","[w给力]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/84.png","[w囧]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/85.png","[w萌]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/86.png","[w神马]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/87.png","[w威武]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/88.png"}],Lt=[];class Bt{constructor(t){tt(this,"option");tt(this,"$data",{STORAGE_KEY:"mt-image-bed-upload-history"});this.option=t,Lt.push({id:this.option.id,callback:this.option.delImageEvent.bind(this)}),this.addTab(),r.on(`.comiis_post_imglist[data-chartbed="${this.option.name}"] .up_btn a`,"click",async n=>{await this.option.uploadBtnClickEvent(n)&&E(`.comiis_post_imglist[data-chartbed="${this.option.name}"] input[type="file"]`).click();}),r.on(`.comiis_post_imglist[data-chartbed="${this.option.name}"] input[type="file"]`,"change",async n=>{let i=n.target,s=()=>{i.value="";},l=async o=>{let a=await this.option.fileChangeEvent(n,o);s(),a.success&&a.data.forEach(c=>{this.addImage(c);let m=this.createImageBtnElement("插入",c.url);this.setImageBtnDeleteEvent(m,c),r.append(`.comiis_post_imglist[data-chartbed="${this.option.name}"]`,m);});};if(i.files&&i.files.length){let o=i.files;if(C.getValue("mt-image-bed-watermark-enable")){let a=x.loading("处理水印中..."),c=[],m=[];await Promise.all(Array.from(i.files).map(async(d,p)=>{if(d.type==="image/gif"){let u=await h.parseFileToBase64(d);c.push(u),m.push(d);}else {x.info(`添加水印 ${p+1}/${o.length}`);var b=new window.Watermark;await b.setFile(d),b.addText({text:[C.getValue("mt-image-bed-watermark-text")],color:C.getValue("mt-image-bed-watermark-text-color"),fontSize:C.getValue("mt-image-bed-watermark-font-size"),globalAlpha:C.getValue("mt-image-bed-watermark-font-opacity"),xMoveDistance:C.getValue("mt-image-bed-watermark-left-right-margin"),yMoveDistance:C.getValue("mt-image-bed-watermark-top-bottom-margin"),rotateAngle:C.getValue("mt-image-bed-watermark-rotate")}),c.push(b.render("png")),m.push(h.parseBase64ToFile(b.render("png"),"WaterMark_"+d.name));}})),a.close(),o=m,C.getValue("mt-image-bed-watermark-autoAddWaterMark")?await l(o):N.confirm({title:{text:"水印预览",position:"center"},content:{text:`
									<div class="upload-image-water">${c.map(d=>`<img src="${d}" crossoriginNew="anonymous" loading="lazy">`).join(`
`)}
									</div>
									`,html:true},btn:{ok:{text:"继续上传",async callback(d,p){d.close(),await l(o);}},close:{callback(d,p){d.close(),s();}},cancel:{callback(d,p){d.close(),s();}}},drag:true,width:"88vw",height:"80vh",style:`
								.upload-image-water {

								}
								.upload-image-water img{
									width: 100%;
								}
								`});}else await l(o);}});}addTab(){let t=E("#comiis_pictitle_key"),n=t.querySelector("a[data-type='history']"),i=`
            <li>
                <a href="javascript:;" class="comiis-picture-tab" data-type="image-bed">${this.option.name}</a>
            </li>
        `;if(!n){let o=r.createElement("li");n=r.createElement("a",{href:"javascript:;",className:"comiis-picture-tab",innerHTML:"历史图片"},{"data-type":"history"}),r.on(n,"click",()=>{this.initHistoryUploadImageList();}),r.append(o,n),r.append(t,o);}r.before(n.parentElement,i);let s=E("#comiis_pictitle_tab .bqbox_t"),l=Array.from(V("#comiis_pictitle_tab .comiis_upbox")).find(o=>!!o.querySelector("#imglist_history"));l||(l=r.createElement("div",{className:"comiis_upbox bg_f cl",innerHTML:`
					<ul class="comiis_post_imglist cl" id="imglist_history">	
                    </ul>
				`},{style:"display: none;"}),r.before(s,l),l=Array.from(V("#comiis_pictitle_tab .comiis_upbox")).find(o=>!!o.querySelector("#imglist_history"))),r.before(l,`
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
            `);}createImageBtnElement(t,n){return r.createElement("li",{innerHTML:`
            <span class="delImg" data-id="${this.option.id}" data-name="${this.option.name}">
                <a href="javascript:;">
                    <i class="comiis_font f_g"></i>
                </a>
            </span>
            <span class="charu f_f">${t}</span>
            <span class="p_img">
                <a href="javascript:;"
                onclick="comiis_addsmilies('[img]${n}[/img]')">
                    <img style="height:54px;width:54px;" 
                        title="${n}" 
                        src="${n}" 
                        loading="lazy"
                        class="vm b_ok"></a>
            </span>
            `})}initHistoryUploadImageList(){let t=E("#comiis_pictitle_tab #imglist_history");t.innerHTML="";let n=document.createDocumentFragment();this.getAllImage().forEach(i=>{let s=this.createImageBtnElement(i.labelName,i.data.url);this.setHistoryImageBtnDeleteEvent(s,i),n.appendChild(s);}),t.appendChild(n);}setImageBtnDeleteEvent(t,n){let i=t.querySelector(".delImg");r.on(i,"click",async s=>{await this.option.delImageEvent(s,n)&&this.deleteImage(this.option.id,n)&&r.remove(t);});}setHistoryImageBtnDeleteEvent(t,n){let i=t.querySelector(".delImg");r.on(i,"click",async s=>{let l=Lt.find(a=>a.id===n.id);if(!l)return;await l.callback(s,n.data)&&this.deleteImage(n.id,n.data)&&r.remove(t);});}addImage(t){let n=Q(this.$data.STORAGE_KEY,[]);n.push({id:this.option.id,name:this.option.name,labelName:this.option.labelName,data:t}),W(this.$data.STORAGE_KEY,n);}getAllImage(){return Q(this.$data.STORAGE_KEY,[])}deleteImage(t,n){let i=this.getAllImage(),s=i.findIndex(l=>l.id===t&&JSON.stringify(l.data)===JSON.stringify(n));return s!=-1?(i.splice(s,1),W(this.$data.STORAGE_KEY,i),true):false}}const Ut={$data:{get account(){return C.getValue("mt-image-bed-hello-account")},get password(){return C.getValue("mt-image-bed-hello-password")},get token(){return C.getValue("mt-image-bed-hello-token")}},$code:{401:"未登录或授权失败",403:"管理员关闭了接口功能或没有该接口权限",429:"超出请求配额，请求受限",500:"服务端出现异常"},$config:{base_url:"https://www.helloimg.com/api/v1",TAG:"Hello图床："},$tabConfig:{id:"www.helloimg.com",name:"Hello图床",labelName:"hello"},init(){const e=this;new Bt({id:this.$tabConfig.id,name:this.$tabConfig.name,labelName:this.$tabConfig.labelName,async uploadBtnClickEvent(t){return await e.checkLogin()},async fileChangeEvent(t,n){let i=[],s=x.loading("上传中..."),l=true;for(let o=0;o<Array.from(n).length;o++){const a=Array.from(n)[o];let c=await e.uploadImage(a);c?(i.push({url:c.data.links.url,data:c.data}),l=l&&true):l=l&&false;}return s.close(),{success:l,data:i}},storageSaveCallBack(t){return t.data},async delImageEvent(t,n){if(await e.checkLogin()){let s=x.loading("正在删除图片..."),l=await e.deleteImage(n.data.key)??false;return s.close(),l}else return  false}});},async checkLogin(){return this.$data.account?this.$data.password?this.$data.token?true:(x.error(`${this.$config.TAG}请先配置token`),false):(x.error(`${this.$config.TAG}请先配置密码`),false):(x.error(`${this.$config.TAG}请先配置账号`),false)},async uploadImage(e){let t=new FormData;t.append("file",e),t.append("permission","0"),t.append("strategy_id","0"),t.append("album_id","0");let n=await O.post(`${this.$config.base_url}/upload`,{data:t,headers:{Accept:"application/json",Authorization:`Bearer ${this.$data.token}`,"User-Agent":h.getRandomPCUA(),Referer:`${this.$config.base_url}/`,Origin:this.$config.base_url},allowInterceptConfig:false});if(!n.status){f.error(n),x.error(this.$config.TAG+"网络异常，上传图片失败");return}if(n.data.status in this.$code){f.error(n),x.error(this.$config.TAG+this.$code[n.data.status]);return}let i=h.toJSON(n.data.responseText);if(f.info(i),!i.status){x.error(this.$config.TAG+i.message);return}x.success(this.$config.TAG+"上传成功");let s=new FileReader;return s.readAsDataURL(e),await new Promise(l=>{s.onload=function(){let a={imageUri:this.result,data:i.data};l(a);};})},async deleteImage(e){let t=await O.delete(this.$config.base_url+"/images/"+e,{timeout:15e3,headers:{Accept:"application/json",Authorization:`Bearer ${this.$data.token}`,"User-Agent":h.getRandomPCUA(),Referer:`${this.$config.base_url}/`,Origin:this.$config.base_url},allowInterceptConfig:false});if(t.data.status in this.$code)return x.error(this.$config.TAG+this.$code[t.data.status]),false;let n=h.toJSON(t.data.responseText);return n.status?(x.success(this.$config.TAG+"删除成功"),true):(x.error(this.$config.TAG+n.message),false)}},Vt={$data:{csrf_token:null},$config:{TAG:"MT图床：",base_url:"https://img.binmt.cc"},$tabConfig:{id:"img.binmt.cc",name:"MT图床",labelName:"mt"},init(){const e=this;new Bt({id:this.$tabConfig.id,name:this.$tabConfig.name,labelName:this.$tabConfig.labelName,async uploadBtnClickEvent(t){return await e.checkLogin()},async fileChangeEvent(t,n){let i=[],s=x.loading("上传中..."),l=true;for(let o=0;o<Array.from(n).length;o++){const a=Array.from(n)[o];let c=await e.uploadImage(a);c?(i.push({url:c.data.links.url,data:c.data}),l=l&&true):l=l&&false;}return s.close(),{success:l,data:i}},storageSaveCallBack(t){return t.data},async delImageEvent(t,n){return  true}});},async checkLogin(){if(!this.$data.csrf_token){let e=x.loading("正在获取CSRF Token中..."),t=await this.getCSRFToken();if(e.close(),!t)return  false;this.$data.csrf_token=t;}return  true},async getCSRFToken(){var i;let e=await O.get(this.$config.base_url,{allowInterceptConfig:false,headers:{"User-Agent":h.getRandomPCUA(),Referer:this.$config.base_url+"/",Origin:this.$config.base_url}});if(!e.status){x.error(this.$config.TAG+"获取CSRF Token失败，网络异常");return}let n=(i=r.parseHTML(e.data.responseText,true,true).querySelector('meta[name="csrf-token"]'))==null?void 0:i.getAttribute("content");if(n)return f.info("获取的CSRF token：",n),x.success(this.$config.TAG+"获取CSRF Token成功"),n},async uploadImage(e){let t=new FormData;t.append("strategy_id","2"),t.append("file",e);let n=await O.post(`${this.$config.base_url}/upload`,{data:t,headers:{Accept:"application/json, text/javascript, */*; q=0.01","User-Agent":h.getRandomAndroidUA(),Origin:this.$config.base_url,pragma:"no-cache","Accept-Encoding":"gzip, deflate, br","Accept-Language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",Referer:this.$config.base_url+"/",Pragma:"no-cache","x-csrf-token":this.$data.csrf_token,"X-Requested-With":"XMLHttpRequest"},allowInterceptConfig:false});if(!n.status){f.error(n),x.error(this.$config.TAG+"网络异常，上传图片失败");return}let i=h.toJSON(n.data.responseText);if(f.info(i),!i.status){f.error(n),x.error(this.$config.TAG+i.message||JSON.stringify(i));return}x.success(this.$config.TAG+"上传成功");let s=new FileReader;return s.readAsDataURL(e),await new Promise(l=>{s.onload=function(){let a={imageUri:this.result,data:i.data};l(a);};})}},Ft=()=>({rainbow1:{key:"转普通彩虹",value:"",isFunc:true,num:1},rainbow2:{key:"转黑白彩虹",value:"",isFunc:true,num:2},rainbow3:{key:"转黑红彩虹",value:"",isFunc:true,num:3},rainbow4:{key:"转蓝绿彩虹",value:"",isFunc:true,num:4},size:{key:"大小",value:"[size=][/size]",tagL:"=",tagR:"]",L:"[size=]",R:"[/size]",cursorL:"[size=",cursorLength:6,quickUBBReplace:"[size=14]replace[/size]"},color:{key:"颜色",value:"[color=][/color]",tagL:"=",tagR:"]",L:"[color=]",R:"[/color]",cursorL:"[color=",cursorLength:7,quickUBBReplace:"[color=#000]replace[/color]"},b:{key:"加粗",value:"[b][/b]",tagL:"]",tagR:"[",L:"[b]",R:"[/b]",cursorR:"[/b]",cursorLength:4,quickUBBReplace:"[b]replace[/b]"},u:{key:"下划线",value:"[u][/u]",tagL:"]",tagR:"[",L:"[u]",R:"[/u]",cursorR:"[/u]",cursorLength:4,quickUBBReplace:"[u]replace[/u]"},i:{key:"倾斜",value:"[i][/i]",tagL:"]",tagR:"[",L:"[i]",R:"[/i]",cursorR:"[/i]",cursorLength:4,quickUBBReplace:"[i]replace[/i]"},s:{key:"中划线",value:"[s][/s]",tagL:"]",tagR:"[",L:"[s]",R:"[/s]",cursorR:"[/s]",cursorLength:4,quickUBBReplace:"[s]replace[/s]"},lineFeed:{key:"换行",value:"[*]",L:"",R:"[*]",cursorL:"[*]",cursorLength:3,quickUBBReplace:"replace[*]"},longHorizontalLine:{key:"水平线",value:"[hr]",L:"",R:"[hr]",cursorL:"[hr]",cursorLength:4,quickUBBReplace:"replace[hr]"},link:{key:"链接",value:"[url=][/url]",tagL:"=",tagR:"]",L:"[url=]",R:"[/url]",cursorL:"[url=",cursorLength:5,quickUBBReplace:"[url=replace]replace[/url]"},hide:{key:"隐藏",value:`[hide]
[/hide]`,tagL:"]",tagR:"[",L:"[hide]",R:"[/hide]",cursorR:"[/hide]",cursorLength:7,quickUBBReplace:`[hide]replace
[/hide]`},quote:{key:"引用",value:"[quote][/quote]",tagL:"]",tagR:"[",L:"[quote]",R:"[/quote]",cursorR:"[/quote]",cursorLength:8,quickUBBReplace:"[quote]replace[/quote]"},email:{key:"邮件",value:"[email=][/email]",tagL:"=",tagR:"]",L:"[email=]",R:"[/email]",cursorL:"[email=",cursorLength:7,quickUBBReplace:"[email=replace]replace[/email]"}}),Ht=(e,t)=>{if(t=="")return "";var n=t,i,s,l,o,a,c,m,d;if(l=0,o=0,a=0,d=0,i="",e==1){d=40,l=255,c=1,m=0;do n.charCodeAt(m)!=32?(o+d<256?c==1&&(o+=d):c==1&&(c=2,o=255),l-d>-1?c==2&&(l-=d):c==2&&(c=3,l=0),a+d<256?c==3&&(a+=d):c==3&&(c=4,a=255),o-d>-1?c==4&&(o-=d):c==4&&(c=5,o=0),l+d<256?c==5&&(l+=d):c==5&&(c=6,l=255),a-d>-1?c==6&&(a-=d):c==6&&(c=1,a=0),s="",s+=parseInt(l).toString(16).length==1?0+parseInt(l).toString(16):parseInt(l).toString(16),s+=parseInt(o).toString(16).length==1?0+parseInt(o).toString(16):parseInt(o).toString(16),s+=parseInt(a).toString(16).length==1?0+parseInt(a).toString(16):parseInt(a).toString(16),s=s.toUpperCase(),i+=`[color=#${s}]${n.charAt(m)}[/color]`):i+=n.charAt(m),m++;while(m<n.length)}else if(e==2)for(d=255/n.length,c=1;c<n.length+1;c++)n.charCodeAt(c-1)!=32?(l+=d,o+=d,a+=d,l>255&&(l=255),o>255&&(o=255),a>255&&(a=255),s="",s+=parseInt(l).toString(16).length==1?0+parseInt(l).toString(16):parseInt(l).toString(16),s+=parseInt(o).toString(16).length==1?0+parseInt(o).toString(16):parseInt(o).toString(16),s+=parseInt(a).toString(16).length==1?0+parseInt(a).toString(16):parseInt(a).toString(16),s=s.toUpperCase(),i+=`[color=#${s}]${n.charAt(c-1)}[/color]`):i+=n.charAt(c-1);else if(e==3)for(d=255/n.length,c=1;c<n.length+1;c++)n.charCodeAt(c-1)!=32?(l+=d,o=29,a=36,l>255&&(l=255),o>255&&(o=255),a>255&&(a=255),s="",s+=parseInt(l).toString(16).length==1?0+parseInt(l).toString(16):parseInt(l).toString(16),s+=parseInt(o).toString(16).length==1?0+parseInt(o).toString(16):parseInt(o).toString(16),s+=parseInt(a).toString(16).length==1?0+parseInt(a).toString(16):parseInt(a).toString(16),s=s.toUpperCase(),i+=`[color=#${s}]${n.charAt(c-1)}[/color]`):i+=n.charAt(c-1);else if(e==4)for(d=255/n.length,c=1;c<n.length+1;c++)n.charCodeAt(c-1)!=32?(l=0,o=174,a+=d,l>255&&(l=255),o>255&&(o=255),a>255&&(a=255),s="",s+=parseInt(l).toString(16).length==1?0+parseInt(l).toString(16):parseInt(l).toString(16),s+=parseInt(o).toString(16).length==1?0+parseInt(o).toString(16):parseInt(o).toString(16),s+=parseInt(255-a).toString(16).length==1?0+parseInt(255-a).toString(16):parseInt(255-a).toString(16),s=s.toUpperCase(),i+=`[color=#${s}]${n.charAt(c-1)}[/color]`):i+=n.charAt(c-1);return i},me=function(){y.$.fn.extend({insertAtCaret:function(e){var t=y.$(this)[0];if(document.selection){this.focus();var n=document.selection.createRange();n.text=e,this.focus();}else if(t.selectionStart||t.selectionStart=="0"){var i=t.selectionStart,s=t.selectionEnd,l=t.scrollTop;t.value=t.value.substring(0,i)+e+t.value.substring(s,t.value.length),this.focus(),t.selectionStart=i+e.length,t.selectionEnd=i+e.length,t.scrollTop=l;}else this.value+=e,this.focus();},selectRange:function(e,t){return t===void 0&&(t=e),this.each(function(){if("selectionStart"in this)this.selectionStart=e,this.selectionEnd=t;else if(this.setSelectionRange)this.setSelectionRange(e,t);else if(this.createTextRange){var n=this.createTextRange();n.collapse(true),n.moveEnd("character",t),n.moveStart("character",e),n.select();}})},getCursorPosition:function(){var e=y.$(this)[0],t=0;if("selectionStart"in e)t=e.selectionStart;else if("selection"in document){e.focus();var n=document.selection.createRange(),i=document.selection.createRange().text.length;n.moveStart("character",-e.value.length),t=n.text.length-i;}return t},moveCursorInCenterByText:function(e,t){var n=y.$(this)[0],i=n.value;for(let s=n.selectionStart-1;s>0;s--){let l=i[s-1],o=i[s];if(l==e&&o==t){this.selectRange(s);break}}},moveCursorToCenterByTextWithLeft:function(e,t){var n=y.$(this)[0],i=n.value;for(let s=n.selectionStart-1;s>0;s--)if(i.substring(s-t,s)==e){this.selectRange(s);break}},moveCursorToCenterByTextWithRight:function(e,t){var n=y.$(this)[0],i=n.value;for(let s=n.selectionStart-1;s>0;s--)if(i.substring(s,s+t)==e){this.selectRange(s+t);break}}});};let At={1:{error_match:"抱歉，您填写的内容包含敏感词而无法提交",popup_text:"抱歉，您填写的内容包含敏感词而无法提交"},2:{error_match:"抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复",popup_text:"抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复"},3:{error_match:"抱歉，本主题已关闭，不再接受新内容",popup_text:"抱歉，本主题已关闭，不再接受新内容"},4:{error_match:"抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复",popup_text:"抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复"},5:{error_match:"抱歉，您的帖子小于 10 个字符的限制",popup_text:"抱歉，您的帖子小于 10 个字符的限制"}},xt=null;const et={$data:{isUBBCodeInsertClick:false,db:new it.indexedDB("mt_reply_record","input_text"),forum_action:null,get tid(){return F.getThreadId(window.location.href)}},$el:{$like:null,$btn_submit:null,$input:null,$form:null,$fastpostsubmit:null},init(){f.info("编辑器优化-简略版"),G(le),this.overridePageEditor();},overridePageEditor(){let e=document.querySelector("#comiis_foot_memu .comiis_flex li:nth-child(2)"),t=document.querySelector("#comiis_foot_memu .comiis_flex li:nth-child(3)"),n=document.querySelector("#comiis_foot_memu .comiis_flex li:nth-child(4)");this.$el.$form=document.querySelector("#fastpostform"),this.$data.forum_action=this.$el.$form.getAttribute("action");let i=r.serialize(this.$el.$form),s=document.querySelector("#fastpostform .header_y a").href;r.remove("#needmessage[name='message']"),r.remove("#imglist"),r.remove("#fastpostsubmitline"),r.remove("#fastpostsubmit");let l=document.querySelector("#comiis_foot_memu");r.hide(l,false);let o=ce(),a=Object.keys(o[0]).map(d=>{let p=o[0][d];return `<li><a href="javascript:;" onclick="comiis_addsmilies('${d}');"><img loading="lazy" data-src="${p}" class="vm"></a></li>`}),c=Object.keys(o[1]).map(d=>{let p=o[1][d];return `<li><a href="javascript:;" onclick="comiis_addsmilies('${d}');"><img loading="lazy" data-src="${p}" class="vm"></a></li>`}),m=Object.keys(o[2]).map(d=>{let p=o[2][d];return `<li><a href="javascript:;" onclick="comiis_addsmilies('${d}');"><img loading="lazy" data-src="${p}" class="vm"></a></li>`});r.after(l,`
            <div id="comiis_foot_menu_beautify" class="bg_f b_t">
                <div class="reply_area">
                    <ul>
                        <li data-attr="回帖"><input type="text" class="bg_e f_c" placeholder="发帖千百度，文明第一步" readonly="readonly"></li>
                        <li data-attr="评论数量">${e.innerHTML}</li>
                        <li data-attr="点赞">${t.innerHTML}</li>
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
            `),E("#comiis_foot_menu_beautify .comiis_position_key"),this.$el.$like=E("#comiis_foot_menu_beautify .comiis_recommend_addkey"),E("#comiis_foot_menu_beautify #comiis_favorite_a"),E("#comiis_pictitle_key"),this.$el.$btn_submit=E('#comiis_foot_menu_beautify_big li[data-attr="发表"] input'),this.$el.$input=E("#comiis_foot_menu_beautify_big textarea"),this.$el.$fastpostsubmit=E("#fastpostsubmit"),y.textarea_scrollHeight=()=>{},typeof y.comiis_addsmilies=="function"&&(y.comiis_addsmilies=d=>{y.$("#needmessage").comiis_insert(d),y.$("#needmessage")[0].dispatchEvent(new Event("propertychange"));}),y.$("#imglist .up_btn").append(y.$("#filedata")),y.$(document).on("click","#imglist .up_btn a",function(){y.$(this).next().click();}),y.$(document).on("click","#imglist .p_img a",function(){let d=y.$(this);if(d.attr("onclick")==null){let p=d.find("img").attr("id").replace("aimg_","");y.comiis_addsmilies(`[attachimg]${p}[/attachimg]`);}}),r.hide("#comiis_foot_menu_beautify_big .menu_body",false),this.setInputChangeEvent(),this.setLikeBtnClickEvent(),this.setSubmitBtnClickEvent(),this.setGlobalReplyBtnClickEvent(),this.setGlobalClickCheckEvent(),this.setMenuIconToggleEvent(),this.setMenuImageClickEvent(),this.setMenuImageToggleEvent(),this.setMenuSmileClickEvent(),this.setMenuSmileTabClickEvent(),this.setMenuInsertClickEvent(),this.setMenuQuickUBB(),C.execMenu("mt-forum-post-editorOptimizationNormal-recordInputText",()=>{this.initReplyText(),this.setInputChangeSaveEvent();}),C.execMenuOnce("mt-image-bed-hello-enable",()=>{Ut.init();}),C.execMenuOnce("mt-image-bed-mt-enable",()=>{Vt.init();});},handle_error(e){let t=false,n=r.text(r.parseHTML(e,false,false).querySelector("#messagetext"));return !n||typeof n=="string"&&n.trim()==""||Object.keys(At).forEach(i=>{let s=At[i];if(n.indexOf(s.error_match)!=-1){n.indexOf("typeof errorhandle_=='function'")!=-1&&x.error(s.popup_text),t=true;return}}),t},setInputChangeEvent(){const e=this;r.on(e.$el.$input,["input","propertychange"],function(t){var i,s;e.$el.$input.value===""?(e.$el.$btn_submit.setAttribute("data-text","false"),(i=E("#comiis_foot_menu_beautify li[data-attr='回帖'] input"))==null||i.setAttribute("placeholder","发帖千百度，文明第一步")):(e.$el.$btn_submit.setAttribute("data-text","true"),(s=E("#comiis_foot_menu_beautify li[data-attr='回帖'] input"))==null||s.setAttribute("placeholder","[草稿待发送]")),r.css(e.$el.$input,"height","70px"),r.css(e.$el.$input,"height",e.$el.$input.scrollHeight-20+"px");});},setInputChangeSaveEvent(){const e=this;r.on(this.$el.$input,["input","propertychange"],t=>{let n=e.$el.$input.value,s=e.$el.$input.closest(".reply_area").querySelector(".reply_user_content").getAttribute("data-reply-url"),l={url:window.location.href,text:n,repquote:s?F.getRepquote(s):void 0,forumId:e.$data.tid};e.$data.db.get("data").then(o=>{if(!o.success||o.code===201){console.warn(o);return}let a=o.data.findIndex(c=>c.forumId===l.forumId&&c.repquote===l.repquote);a!==-1?n==null||n===""?o.data.splice(a,1):o.data[a]=h.assign(o.data[a],{text:l.text}):o.data.push(l),e.$data.db.save("data",o.data).then(c=>{});});});},async initReplyText(e=false,t=void 0){const n=this;(await this.$data.db.get("data")).code===201&&await this.$data.db.save("data",[]);let s=await this.$data.db.get("data");if(!s.success||s.code===201){console.warn(s);return}let l;t&&(l=F.getRepquote(t));let o=s.data.find(a=>e?a.forumId===n.$data.tid&&a.repquote==l:a.forumId===n.$data.tid&&a.repquote==null);o&&(r.val(this.$el.$input,o.text),h.dispatchEvent(this.$el.$input,"input"));},setLikeBtnClickEvent(){r.on(this.$el.$like,"click",async e=>{var l,o;if(h.preventEvent(e),y.comiis_recommend_key==0){y.comiis_recommend_key=1;let a=await O.get(this.$el.$like.href+"&inajax=1",{headers:{Accept:"application/xml, text/xml, */*; q=0.01"},fetch:true,allowInterceptConfig:false});if(!a.status){window.location.href=this.$el.$like.href,setTimeout(function(){y.comiis_recommend_key=0;},500);return}let m=(o=(l=h.parseFromString(a.data.responseText,"text/xml").lastChild)==null?void 0:l.firstChild)==null?void 0:o.nodeValue;if(m.includes("您已评价过本主题")){let d=this.$el.$like.href.match(X.tid)[1];if(!(await O.get(`plugin.php?id=comiis_app&comiis=re_recommend&tid=${d}&inajax=1`,{headers:{Accept:"application/xml, text/xml, */*; q=0.01"},fetch:true,allowInterceptConfig:false})).status){x.error("取消点赞失败，网络异常");return}var t=Number(r.text("#comiis_recommend_num"));document.querySelectorAll(".comiis_recommend_list_a").length>0&&r.remove("#comiis_recommend_list_a"+y.uid),document.querySelectorAll(".comiis_recommend_list_s").length>0&&r.remove("#comiis_recommend_list_s"+y.uid),document.querySelectorAll(".comiis_recommend_list_t").length>0&&r.remove("#comiis_recommend_list_t"+y.uid),t>1?(r.text(".comiis_recommend_num",t-Number(y.allowrecommend)),r.text(".comiis_recommend_nums","+"+(t-Number(y.allowrecommend)))):(r.remove("#comiis_recommend_num"),r.text(".comiis_recommend_nums",""),document.querySelectorAll(".comiis_recommend_list_a").length>0&&(r.empty(".comiis_recommend_list_a"),r.removeClass(".comiis_recommend_list_a","comiis_recommend_list_on")),document.querySelectorAll(".comiis_recommend_list_t").length>0&&r.removeClass(".comiis_recommend_list_t","comiis_recommend_list_on")),r.html(".comiis_recommend_addkey i","&#xe63b;"),r.removeClass(".comiis_recommend_color","f_a"),r.addClass(".comiis_recommend_color","f_b"),document.querySelectorAll(".comiis_recommend_list_s").length>0&&(document.querySelectorAll(".comiis_recommend_list_s li").length<7?r.hide(".txshow_more",false):r.show(".txshow_more",false)),x.success("已取消点赞");}else if(m.includes("您不能评价自己的帖子"))x.error("不能点赞自己的帖子");else if(m.includes("今日评价机会已用完"))x.warning("您今日的点赞机会已用完");else if(m.includes("'recommendv':'+"+y.allowrecommend+"'")){var n={recommendc:0,daycount:0},i;i=m.match(/\'recommendc\':\'(.*?)\'/),i!=null?n.recommendc=parseInt(i[1]):n.recommendc=0,i=m.match(/\'daycount\':\'(.*?)\'/),i!=null?n.daycount=parseInt(i[1]):n.daycount=0,document.querySelectorAll(".comiis_recommend_new span").length<1&&r.append(".comiis_recommend_new",'<span class="bg_del f_f comiis_kmvnum comiis_recommend_num" id="comiis_recommend_num">0</span>');var s=Number(r.text("#comiis_recommend_num"));if(V(".comiis_recommend_list_a").length>0){let d=V(".comiis_recommend_list_a");r.removeClass(d,"comiis_recommend_list_on"),r.addClass(d,"comiis_recommend_list_on"),r.prepend(d,(V(".comiis_recommend_list_a li").length>0?"":'<li style="float:right;margin-right:0;"><a href="misc.php?op=recommend&tid= '+y.tid+'&mod=faq&mobile=2"><span class="bg_b f_c"><em class="comiis_recommend_num">'+s+"</em>赞</span></a></li>")+'<li id="comiis_recommend_list_a'+y.uid+'"><a href="home.php?mod=space&uid='+y.uid+'"><img src="'+F.getAvatar(y.uid,"small")+'"></a></li>');}if(V(".comiis_recommend_list_t").length>0){let d=V(".comiis_recommend_list_t");r.removeClass(d,"comiis_recommend_list_on"),r.addClass(d,"comiis_recommend_list_on"),r.prepend(d,`<span id="comiis_recommend_list_t${y.uid}">
                          							<a href="home.php?mod=space&uid=${y.uid}" class="f_c">${y.username}</a>
													${V(".comiis_recommend_list_t a").length>0?'<span class="f_d"> , </span>':""}
                        						</span>`);}if(V(".comiis_recommend_list_s").length>0){let d=V(".comiis_recommend_list_s");r.removeClass(d,"comiis_recommend_list_on"),r.addClass(d,"comiis_recommend_list_on"),r.prepend(d,(V(".comiis_recommend_list_s li").length>0,""+'<li id="comiis_recommend_list_s'+y.uid+'"><a href="home.php?mod=space&uid='+y.uid+'"><img loading="lazy" src="'+F.getAvatar(y.uid,"small")+'"></a></li>'));}r.text(".comiis_recommend_num",s+Number(y.allowrecommend)),r.text(".comiis_recommend_nums","+"+(s+Number(y.allowrecommend))),r.html(".comiis_recommend_addkey i","&#xe654;"),r.removeClass(".comiis_recommend_color","f_b"),r.addClass(".comiis_recommend_color","f_a"),V(".comiis_recommend_list_s").length>0&&(V(".comiis_recommend_list_s li").length<7?r.hide(".txshow_more",false):r.show(".txshow_more",false)),x.success("点赞成功"+(n.daycount?`, 您今天还能点赞 ${n.daycount-1} 次`:""));}else m.indexOf("window.location.href = 'member.php?mod=logging&action=login&mobile=2'")>=0?window.location.href="member.php?mod=logging&action=login&mobile=2":x.error("没有点赞权限或帖子不存在");setTimeout(function(){y.comiis_recommend_key=0;},500);}return  false});},setSubmitBtnClickEvent(){const e=this;r.on(this.$el.$fastpostsubmit,"click",async t=>{var s,l,o,a,c,m;h.preventEvent(t);var n=E("#needmessage"),i=r.val(n);if(i=encodeURIComponent(i),!(i==null||i==="")){if(r.val(e.$el.$fastpostsubmit)=="发表"){let d=x.loading("发表中，请稍后..."),p="message="+i;V("#imglist input[type='hidden']").forEach(k=>{let v=k.getAttribute("name");p+=`&${v}=`;}),p=r.serialize(e.$el.$form)+"&"+p;let b=e.$data.forum_action+"reply&handlekey=fastpost&loc=1&inajax=1",u=await O.post(b,{data:p,fetch:true,allowInterceptConfig:false,headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(d.close(),!u.status){x.error("发表失败，网络异常");return}let _=(l=(s=h.parseFromString(u.data.responseText,"text/xml").lastChild)==null?void 0:s.firstChild)==null?void 0:l.nodeValue;if(y.evalscript(_),this.handle_error(_))return;window.scrollTo({top:r.height(document)}),r.val("#needmessage",""),(o=E("#comiis_head"))==null||o.click(),r.hide("#comiis_foot_menu_beautify_big .reply_user_content",false),r.attr('#comiis_foot_menu_beautify_big li[data-attr="发表"] input',"data-text","false"),r.attr("#comiis_foot_menu_beautify li[data-attr='回帖'] input","placeholder","发帖千百度，文明第一步"),this.deleteReplyTextStorage();}else {let d=r.attr("#comiis_foot_menu_beautify_big .reply_user_content","data-reply-serialize")+i;V("#imglist input[type='hidden']").forEach(_=>{d=`${d}&${_.getAttribute("name")}=`;});let p=r.attr("#comiis_foot_menu_beautify_big .reply_user_content","data-reply-action"),b=await O.post(p+"&handlekey=fastposts&loc=1&inajax=1",{allowInterceptConfig:false,fetch:true,data:d,headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(!b.status){x.error("回复失败，网络异常");return}let g=(c=(a=h.parseFromString(b.data.responseText,"text/xml").lastChild)==null?void 0:a.firstChild)==null?void 0:c.nodeValue;if(f.info(g),y.evalscript(g),this.handle_error(g))return;(m=E(g))==null||m.click(),r.val("#needmessage",""),E("#comiis_head").click(),r.val('#comiis_foot_menu_beautify_big li[data-attr="发表"] input',"发表"),r.attr('#comiis_foot_menu_beautify_big li[data-attr="发表"] input',"data-text","false"),r.attr("#comiis_foot_menu_beautify li[data-attr='回帖'] input","placeholder","发帖千百度，文明第一步"),window.scrollTo({top:r.height(document)}),this.deleteReplyTextStorage(true,p);}return  false}});},setGlobalReplyBtnClickEvent(){r.on(document,"click",'.comiis_postli_times .dialog[href*="reply"]',async e=>{var p,b,u,g;h.preventEvent(e);let t=e.target;r.attr("#comiis_foot_menu_beautify_big","data-model","reply");let n=await O.get(r.attr(t,"datahref")||t.href+"&inajax=1",{fetch:true,allowInterceptConfig:false});if(!n.status){x.error("网络异常，获取回复参数失败");return}let s=(b=(p=h.parseFromString(n.data.responseText,"text/xml").lastChild)==null?void 0:p.firstChild)==null?void 0:b.nodeValue;if(this.handle_error(s))return;let l=r.parseHTML(`<div>${s}</div>`,true,false),o=(u=l.querySelector(".comiis_tip .tip_tit a"))==null?void 0:u.getAttribute("href"),a=r.text(l.querySelector(".comiis_tip span.f_0")),c=r.val(l.querySelector("input[name='noticeauthormsg']")),m=r.attr(l.querySelector("#postforms"),"action"),d=r.serialize(l.querySelector("#postforms"));r.text("#comiis_foot_menu_beautify_big .reply_user_content",`回复 ${a}: ${c}`),r.show("#comiis_foot_menu_beautify_big .reply_user_content",false),(g=E("#comiis_foot_menu_beautify li[data-attr='回帖'] input"))==null||g.click(),r.focus("#comiis_foot_menu_beautify li[data-attr='回帖'] input"),r.val("#fastpostsubmitline input","回复"),r.attr("#comiis_foot_menu_beautify_big .fastpostform_new a","href",o),r.attr("#comiis_foot_menu_beautify_big .reply_user_content","data-reply-url",o),r.attr("#comiis_foot_menu_beautify_big .reply_user_content","data-reply-action",m),r.attr("#comiis_foot_menu_beautify_big .reply_user_content","data-reply-serialize",d),xt=t,r.val("#needmessage",r.attr(t,"data-text")||""),C.execMenu("mt-forum-post-editorOptimizationNormal-recordInputText",()=>{this.initReplyText(true,o);});},{capture:true});},setGlobalClickCheckEvent(){const e=this;let t=E("#fastpostform .header_y a").href;r.on(document,"click",function(n){var s;let i=n.target;if(E(".popups-popmenu")||et.$data.isUBBCodeInsertClick){f.info("点击的是弹出层，不做处理"),et.$data.isUBBCodeInsertClick=false;return}else i!=null&&i.classList&&((s=i==null?void 0:i.classList)!=null&&s.contains(".dialog_reply"))||i!=null&&i.closest&&(i!=null&&i.closest(".dialog_reply"))||i===E('li[data-attr="回帖"] input')?(f.info("点击回复按钮或者是编辑器，显示编辑器"),r.hide("#comiis_foot_menu_beautify",false),r.show("#comiis_foot_menu_beautify_big",false),r.focus("#needmessage")):window.event&&!h.checkUserClickInNode(E("#comiis_foot_menu_beautify_big"))&&(f.info("点击的其它区域，隐藏大编辑器，显示小编辑器"),r.show("#comiis_foot_menu_beautify",false),r.hide("#comiis_foot_menu_beautify_big",false),r.attr("#comiis_foot_menu_beautify_big","data-model")=="reply"&&(r.attr("#comiis_foot_menu_beautify_big","data-model","comment"),r.val("#fastpostsubmitline input","发表"),r.attr("#comiis_foot_menu_beautify_big .fastpostform_new a","href",t),r.text("#comiis_foot_menu_beautify_big .reply_area .reply_user_content"),r.hide("#comiis_foot_menu_beautify_big .reply_area .reply_user_content",false),r.attr("#comiis_foot_menu_beautify_big .reply_area .reply_user_content","data-reply-url",""),r.attr("#comiis_foot_menu_beautify_big .reply_area .reply_user_content","data-reply-action",""),r.attr("#comiis_foot_menu_beautify_big .reply_area .reply_user_content","data-reply-serialize",""),xt&&(r.attr(xt,"data-text",r.val("#needmessage")),r.val("#needmessage",""),r.attr('#comiis_foot_menu_beautify_big li[data-attr="发表"] input',"data-text","false"),r.attr("#comiis_foot_menu_beautify li[data-attr='回帖'] input","placeholder","发帖千百度，文明第一步"))),r.val(e.$el.$input)===""&&C.execMenu("mt-forum-post-editorOptimizationNormal-recordInputText",()=>{e.initReplyText();}));});},setMenuIconToggleEvent(){r.on("#comiis_foot_menu_beautify_big .menu_icon a i","click",function(e){let t=this;t.classList.contains("f_0")?(r.hide("#comiis_foot_menu_beautify_big .menu_body",false),r.removeClass("#comiis_foot_menu_beautify_big .menu_icon a i","f_0")):(r.show("#comiis_foot_menu_beautify_big .menu_body",false),r.removeClass("#comiis_foot_menu_beautify_big .menu_icon a i","f_0"),r.addClass(t,"f_0"));});},setMenuImageClickEvent(){r.on("#comiis_foot_menu_beautify_big .menu_icon a.comiis_pictitle","click",function(e){r.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_post_tab",false),r.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab",false),r.show("#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab",false);});},setMenuImageToggleEvent(){r.on("#comiis_foot_menu_beautify_big #comiis_pictitle_tab #comiis_pictitle_key","click","li",function(e){let t=e.target;r.removeClass("#comiis_foot_menu_beautify_big #comiis_pictitle_tab #comiis_pictitle_key li","bg_f"),r.addClass(t,"bg_f"),y.$("#comiis_foot_menu_beautify_big #comiis_pictitle_tab div.comiis_upbox").hide().eq(y.$(t).index()).fadeIn();});},setMenuSmileClickEvent(){r.on("#comiis_foot_menu_beautify_big .menu_icon a.comiis_smile","click",function(e){r.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab",false),r.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab",false),r.show("#comiis_foot_menu_beautify_big .menu_body #comiis_post_tab",false);let t=E("#comiis_foot_menu_beautify_big .menu_body .comiis_bqbox");r.attr(t,"data-isLoaded")!=1&&(r.attr(t,"data-isLoaded",1),t.querySelectorAll("img").forEach(n=>{let i=n.getAttribute("data-src");i&&n.setAttribute("src",i);}));});},setMenuSmileTabClickEvent(){r.on("#comiis_foot_menu_beautify_big #comiis_smilies_key li","click",function(e){let t=this;r.removeClass("#comiis_foot_menu_beautify_big #comiis_smilies_key li a"),r.addClass(t.querySelector("a"),"bg_f b_l b_r"),y.$("#comiis_post_tab div.swiper-wrapper.bqbox_c.comiis_optimization .swiper-slide").hide().eq(y.$(t).index()).fadeIn();});},setMenuInsertClickEvent(){r.on("#comiis_foot_menu_beautify_big .menu_icon a.commis_insert_bbs","click",e=>{r.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_post_tab",false),r.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab",false),r.show("#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab",false);});},async getReplyRecordSize(){var t;let e=await this.$data.db.get("data");return e.success?h.getTextStorageSize((t=e==null?void 0:e.data)!=null&&t.length?JSON.stringify(e.data):""):h.formatByteToSize(0)},async clearAllReplyRecord(){return await this.$data.db.deleteAll()},deleteReplyTextStorage(e=false,t=void 0){const n=this;this.$data.db.get("data").then(i=>{if(!i.success||i.code===201){console.warn(i);return}let s=i.data.findIndex(l=>e?l.forumId===n.$data.tid&&t&&l.repquote===F.getRepquote(t):l.forumId===n.$data.tid&&h.isNull(l.repquote));s!==-1&&(i.data.splice(s,1),this.$data.db.save("data",i.data).then(l=>{}));});},setMenuQuickUBB(){let e=E("#comiis_insert_ubb_tab_list"),t=Ft();Reflect.set(t,"code",{key:"代码",value:"[code][/code]",tagL:"]",tagR:"[",L:"[code]",R:"[/code]",cursorL:"[code]",cursorLength:7,quickUBBReplace:"[code]replace[/code]"}),Reflect.set(t,"password",{key:"密码",value:"[password][/password]",tagL:"]",tagR:"[",L:"[password]",R:"[/password]",cursorL:"[password]",cursorLength:10,quickUBBReplace:"[password]replace[/password]"}),Object.keys(t).forEach(n=>{let i=t[n],s=r.createElement("li",{className:"quickUBBs",innerHTML:`
                    <a href="javascript:;" class="comiis_xifont f_d">
                        <i class="comiis_font"></i>${i.key}
                    </a>
                `});r.on(s,"click",l=>{r.removeClass("#comiis_insert_ubb_tab div.comiis_post_urlico ul li.quickUBBs a.comiis_xifont","f_0"),r.addClass("#comiis_insert_ubb_tab div.comiis_post_urlico ul li.quickUBBs a.comiis_xifont","f_d");let o=s.querySelector(".comiis_xifont");r.removeClass(o,"f_d"),r.removeClass(o,"f_d");let a=N.prompt({title:{text:"UBB代码",position:"center"},content:{text:"",placeholder:`请输入需要${i.key}的文字`,focus:true},btn:{ok:{text:"插入",type:"primary",callback:c=>{if(c.text.trim()===""){x.error("输入框不能为空或纯空格");return}i.isFunc?y.comiis_addsmilies(Ht(i.num,c.text)):i.quickUBBReplace?y.comiis_addsmilies(i.quickUBBReplace.replaceAll("replace",c.text)):y.comiis_addsmilies(c.text),a.close();}},cancel:{text:"关闭",callback:()=>{a.close();}}},width:"300px",height:"200px"});}),e.append(s);});}},de=`.f_c,\r
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
`,K=globalThis.location.pathname,Y=globalThis.location.search;new URLSearchParams(Y);const A={isKMiSign(){return K.startsWith("/k_misign-sign.html")},isPost(){return K.startsWith("/thread-")||K.startsWith("/forum.php")&&Y.startsWith("?mod=viewthread")},isPage(){return !!K.match(/^\/page-([0-9]+).html/g)},isGuide(){return K.startsWith("/forum.php")&&Y.startsWith("?mod=guide")},isPlate(){return !!K.match(/\/forum-[0-9]{1,2}-[0-9]{1,2}.html/g)},isSearch(){return K.startsWith("/search.php")},isSpace(){return K.startsWith("/home.php")&&Y.startsWith("?mod=space")},isMySpace(){return K.startsWith("/home.php")&&Y.startsWith("?mod=space&do=profile&mycenter")},isSpaceWithAt(){return K.startsWith("/space-uid-")},isForumList(){return K.startsWith("/forum.php")&&Y.startsWith("?forumlist")},isMessage(){return K.startsWith("/home.php")&&Y.startsWith("?mod=space&do=notice")},isMessageList(){return K.startsWith("/home.php")&&Y.startsWith("?mod=space&do=pm")},isPointsMall(){return K.startsWith("/keke_integralmall-keke_integralmall.html")||K.startsWith("/plugin.php")&&Y.startsWith("?id=keke_integralmal")},isPostPublish(){return K.startsWith("/forum.php")&&Y.startsWith("?mod=post")},isPostPublish_voting(){return K.startsWith("/forum.php")&&Y.includes("&special=1")||Y.includes("&fid=42")},isPostPublish_edit(){return this.isPostPublish()&&Y.includes("&action=edit")},isPostPublish_newthread(){return this.isPostPublish()&&Y.includes("&action=newthread")},isPostPublish_reply(){return this.isPostPublish()&&Y.includes("&action=reply")}},pe=()=>({"[呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq001.gif","[撇嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq002.gif","[色]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq003.gif","[发呆]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq004.gif","[得意]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq005.gif","[流泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq006.gif","[害羞]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq007.gif","[闭嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq008.gif","[睡]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq009.gif","[大哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq010.gif","[尴尬]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq011.gif","[发怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq012.gif","[调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq013.gif","[呲牙]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq014.gif","[惊讶]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq015.gif","[难过]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq016.gif","[酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq017.gif","[冷汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq018.gif","[抓狂]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq019.gif","[吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq020.gif","[偷笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq021.gif","[可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq022.gif","[白眼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq023.gif","[傲慢]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq024.gif","[饥饿]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq025.gif","[困]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq026.gif","[惊恐]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq027.gif","[流汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq028.gif","[憨笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq029.gif","[装逼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq030.gif","[奋斗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq031.gif","[咒骂]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq032.gif","[疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq033.gif","[嘘]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq034.gif","[晕]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq035.gif","[折磨]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq036.gif","[衰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq037.gif","[骷髅]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq038.gif","[敲打]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq039.gif","[再见]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq040.gif","[擦汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq041.gif","[抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq042.gif","[鼓掌]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq043.gif","[糗大了]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq044.gif","[坏笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq045.gif","[左哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq046.gif","[右哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq047.gif","[哈欠]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq048.gif","[鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq049.gif","[委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq050.gif","[快哭了]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq051.gif","[阴脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq052.gif","[亲亲]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq053.gif","[吓]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq054.gif","[可怜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq055.gif","[眨眼睛]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq056.gif","[笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq057.gif","[dogeQQ]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq058.gif","[泪奔]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq059.gif","[无奈]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq060.gif","[托腮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq061.gif","[卖萌]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq062.png","[斜眼笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq063.gif","[喷血]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq064.gif","[惊喜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq065.gif","[骚扰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq066.gif","[小纠结]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq067.gif","[我最美]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq068.gif","[菜刀]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq069.gif","[西瓜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq070.gif","[啤酒]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq071.gif","[篮球]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq072.gif","[乒乓]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq073.gif","[咖啡]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq074.gif","[饭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq075.gif","[猪]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq076.gif","[玫瑰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq077.gif","[凋谢]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq078.gif","[示爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq079.gif","[爱心]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq080.gif","[心碎]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq081.gif","[蛋糕]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq082.gif","[闪电]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq083.gif","[炸弹]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq084.gif","[刀]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq085.gif","[足球]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq086.gif","[瓢虫]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq087.gif","[便便]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq088.gif","[月亮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq089.gif","[太阳]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq090.gif","[礼物]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq091.gif","[抱抱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq092.gif","[喝彩]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq93.gif","[祈祷]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq94.gif","[棒棒糖]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq95.gif","[药]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq96.gif","[赞]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq097.gif","[差劲]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq098.gif","[握手]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq099.gif","[胜利]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq100.gif","[抱拳]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq101.gif","[勾引]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq102.gif","[拳头]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq103.gif","[爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq105.gif","[NO]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq106.gif","[OK]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq107.gif","[#呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_1.png","[#滑稽]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_10.png","[#吐舌]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_3.png","[#哈哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_2.png","[#啊]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_23.png","[#酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_22.png","[#怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_13.png","[#开心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_39.png","[#汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_14.png","[#泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_16.png","[#黑线]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_15.png","[#鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_21.png","[#不高兴]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_12.png","[#真棒]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_17.png","[#钱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_40.png","[#疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_26.png","[#阴险]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_20.png","[#吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_34.png","[#咦]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_41.png","[#委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_29.png","[#花心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_6.png","[#呼～]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_42.png","[#激动]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_5.png","[#冷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_43.png","[#可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_4.png","[#What？]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_25.png","[#勉强]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_38.png","[#狂汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_24.png","[#酸爽]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_27.png","[#乖]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_8.png","[#雅美蝶]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_28.png","[#睡觉]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_31.png","[#惊哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_19.png","[#哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_44.png","[#笑尿]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_32.png","[#惊讶]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_30.png","[#小乖]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_7.png","[#喷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_18.png","[#抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_33.png","[#捂嘴笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_9.png","[#你懂的]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_11.png","[#犀利]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_35.png","[#小红脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_36.png","[#懒得理]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_37.png","[#爱心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_45.png","[#心碎]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_46.png","[#玫瑰]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_47.png","[#礼物]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_48.png","[#彩虹]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_49.png","[#太阳]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_50.png","[#月亮]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_51.png","[#钱币]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_52.png","[#咖啡]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_53.png","[#蛋糕]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_54.png","[#大拇指]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_55.png","[#胜利]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_56.png","[#爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_57.png","[#OK]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_58.png","[#弱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_59.png","[#沙发]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_60.png","[#纸巾]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_61.png","[#香蕉]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_62.png","[#便便]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_63.png","[#药丸]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_64.png","[#红领巾]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_65.png","[#蜡烛]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_66.png","[#三道杠]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_67.png","[#音乐]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_68.png","[#灯泡]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_69.png","[doge]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/1.png","[doge思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/2.png","[doge再见]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/3.png","[doge生气]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/4.png","[doge气哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/5.png","[doge笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/7.png","[doge调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/6.png","[doge啊哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/8.png","[doge原谅TA]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/9.png","[miao]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/10.png","[miao思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/11.png","[miao拜拜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/12.png","[miao生气]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/13.png","[miao气哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/14.png","[二哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/15.png","[摊手]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/19.png","[w并不简单]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/20.png","[w滑稽]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/21.png","[w色]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/22.png","[w爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/23.png","[w拜拜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/24.png","[w悲伤]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/25.png","[w鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/26.png","[w馋嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/27.png","[w冷汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/28.png","[w打哈欠]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/29.png","[w打脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/30.png","[w敲打]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/31.png","[w生病]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/32.png","[w闭嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/33.png","[w鼓掌]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/34.png","[w哈哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/35.png","[w害羞]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/36.png","[w呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/37.png","[w黑线]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/38.png","[w哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/39.png","[w调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/40.png","[w可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/41.png","[w可怜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/42.png","[w酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/43.png","[w困]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/44.png","[w懒得理你]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/45.png","[w流泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/46.png","[w怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/47.png","[w怒骂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/48.png","[w钱]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/49.png","[w亲亲]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/50.png","[w傻眼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/51.png","[w便秘]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/52.png","[w失望]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/53.png","[w衰]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/54.png","[w睡觉]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/55.png","[w思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/56.png","[w开心]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/57.png","[w色舔]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/58.png","[w偷笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/59.png","[w吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/60.png","[w抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/61.png","[w委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/62.png","[w笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/63.png","[w嘻嘻]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/64.png","[w嘘]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/65.png","[w阴险]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/66.png","[w疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/67.png","[w抓狂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/70.png","[w晕]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/69.png","[w右哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/68.png","[w左哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/71.png","[w肥皂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/77.png","[w奥特曼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/78.png","[w草泥马]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/79.png","[w兔子]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/80.png","[w熊猫]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/81.png","[w猪头]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/82.png","[w→_→]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/83.png","[w给力]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/84.png","[w囧]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/85.png","[w萌]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/86.png","[w神马]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/87.png","[w威武]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/88.png"}),wt={parseText(e){const t=pe();let n=e.match(/\[attachimg\]([\s\S]+?)\[\/attachimg\]/g);n&&n.forEach(q=>{let w=q.match(/\[attachimg\]([\s\S]+?)\[\/attachimg\]/),I=w?w[w.length-1]:"",z=r.attr(`#aimg_${I}`,"title"),B=r.attr(`#aimg_${I}`,"src");B||(z="该图片不存在"),e=e.replace(q,`<span class="comiis_postimg vm"><img loading="lazy" id="aimg_${I}" src="${B}" alt="${z}" title="${z}"></span>`);});let i=e.match(/\[code\]([\s\S]*?)\[\/code\]/g);i&&i.forEach(q=>{let w=q.match(/\[code\]([\s\S]*?)\[\/code\]/),I=w?w[w.length-1]:"",z="",B=I.split(`
`);B.length==1?z=`<li>${I}</li>`:Array.from(B).forEach((J,rt)=>{rt==B.length-1?z=`${z}<li>${J}</li>`:z=`${z}<li>${J}<br></li>`;}),e=e.replace(q,`
                <div class="comiis_blockcode comiis_bodybg b_ok f_b"><div class="bg_f b_l"><ol>${z}</ol></div></div>`);});let s=e.match(/\[url\=[\s\S]*?\]([\s\S]*?)\[\/url\]/g);s&&s.forEach(q=>{let w=q.match(/\[url=([\s\S]*?)\][\s\S]*\[\/url\]/),I=q.match(/\[url=[\s\S]*?\]([\s\S]*?)\[\/url\]/),z=w?w[w.length-1]:"",B=I?I[I.length-1]:"";e=e.replace(q,`<a href="${z}" target="_blank">${B}</a>`);});let l=e.match(/\[color\=[\s\S]*?\]([\s\S]*?)\[\/color\]/g);l&&l.forEach(q=>{let w=q.match(/\[color=([\s\S]*?)\][\s\S]*\[\/color\]/),I=q.match(/\[color=[\s\S]*?\]([\s\S]*?)\[\/color\]/),z=w?w[w.length-1]:"",B=I?I[I.length-1]:"";e=e.replace(q,`<font color="${z}">${B}</font>`);});let o=e.match(/\[size\=[\s\S]*?\]([\s\S]*?)\[\/size\]/g);o&&o.forEach(q=>{let w=q.match(/\[size=([\s\S]*?)\][\s\S]*\[\/size\]/),I=q.match(/\[size=[\s\S]*?\]([\s\S]*?)\[\/size\]/),z=w?w[w.length-1]:"",B=I?I[I.length-1]:"";e=e.replace(q,`<font size="${z}">${B}</font>`);});let a=e.match(/\[img(|\=[\s\S]+?)\]([\s\S]*?)\[\/img\]/g);a&&a.forEach(q=>{let w=null,I=null,z=q.match(/\[img\=([\s\S]+?)\][\s\S]*?\[\/img\]/);z&&(z=z[z.length-1].split(","),w=z[0],I=z[1]),w=w||"",I=I||"";let B=q.match(/\[img\]([\s\S]*?)\[\/img\]|\[img=[\s\S]*?\]([\s\S]*?)\[\/img\]/),J="";B&&(B[B.length-1]==null?J=B[B.length-2]:J=B[B.length-1]),e=e.replace(q,`<img loading="lazy" src="${J}" border="0" alt="" width="${w}" height="${I}" crossoriginNew="anonymous">`);});let c=e.match(/\[hide\]([\s\S]*?)\[\/hide\]/g);c&&c.forEach(q=>{let w=q.match(/\[hide\]([\s\S]*?)\[\/hide\]/),I=w?w[w.length-1]:"";e=e.replace(q,`<div class="comiis_quote bg_h f_c"><h2 class="f_a">本帖隐藏的内容: </h2>${I}</div>`);});let m=e.match(/\[hide=[\s\S]*?\]([\s\S]*?)\[\/hide\]/g);m&&m.forEach(q=>{let w=q.match(/\[hide=([\s\S]*?)\]([\s\S]*?)\[\/hide\]/),I=w?w[w.length-2]:"";I=I.split(",");let z=I.length==2?I[1]:"";e=e.replace(q,`<div class="comiis_quote bg_h f_c">以下内容需要积分高于 ${z} 才可浏览</div>`);});let d=e.match(/\[quote\]([\s\S]*?)\[\/quote\]/g);d&&d.forEach(q=>{let w=q.match(/\[quote\]([\s\S]*?)\[\/quote\]/),I=w?w[w.length-1]:"";e=e.replace(q,`<div class="comiis_quote bg_h b_dashed f_c"><blockquote><font>回复</font> ${I}</blockquote></div>`);});let p=e.match(/\[free\]([\s\S]*?)\[\/free\]/g);p&&p.forEach(q=>{let w=q.match(/\[free\]([\s\S]*?)\[\/free\]/),I=w?w[w.length-1]:"";e=e.replace(q,`<div class="comiis_quote bg_h f_c"><blockquote>${I}</blockquote></div>`);});let b=e.match(/\[b\]([\s\S]*?)\[\/b\]/g);b&&b.forEach(q=>{let w=q.match(/\[b\]([\s\S]*?)\[\/b\]/i),I=w?w[w.length-1]:"";e=e.replace(q,`<strong>${I}</strong>`);});let u=e.match(/\[u\]([\s\S]*?)\[\/u\]/g);u&&u.forEach(q=>{let w=q.match(/\[u\]([\s\S]*?)\[\/u\]/),I=w?w[w.length-1]:"";e=e.replace(q,`<u>${I}</u>`);});let g=e.match(/\[i\]([\s\S]*?)\[\/i\]/g);g&&g.forEach(q=>{let w=q.match(/\[i\]([\s\S]*?)\[\/i\]/),I=w?w[w.length-1]:"";e=e.replace(q,`<i>${I}</i>`);});let _=e.match(/\[s\]([\s\S]*?)\[\/s\]/g);_&&_.forEach(q=>{let w=q.match(/\[s\]([\s\S]*?)\[\/s\]/),I=w?w[w.length-1]:"";e=e.replace(q,`<strike>${I}</strike>`);});let k=e.match(/\[([\s\S]+?)\]/g);k&&k.forEach(q=>{let w=t[q];w&&(e=e.replace(q,`<img loading="lazy" src="${w}" border="0" alt="" smilieid="">`));});let v=e.match(/\[media=[\s\S]+?\][\s\S]+?\[\/media\]/g);v&&v.forEach(q=>{let w=q.match(/\[media=[\s\S]*?\]([\s\S]*?)\[\/media\]/),I=w?w[w.length-1]:"";I&&(e=e.replace(q,`<ignore_js_op><span><iframe src="${I}" border="0" scrolling="no" framespacing="0" allowfullscreen="true" style="max-width: 100%" width="100%" height="auto" frameborder="no"></iframe></span></ignore_js_op>`));});let $=e.match(/\[email=[\s\S]+?\][\s\S]+?\[\/email\]/g);$&&$.forEach(q=>{let w=q.match(/\[email=([\s\S]*?)\][\s\S]*?\[\/email\]/),I=q.match(/\[email=[\s\S]*?\]([\s\S]*?)\[\/email\]/),z=w.length?w[w.length-1]:"",B=I.length?I[I.length-1]:"";(z||B)&&(e=e.replace(q,`<a href="mailto:${z}">${B}</a>`));});let T=e.match(/\[align=[\s\S]+?\][\s\S]+?\[\/align\]/g);T&&T.forEach(q=>{let w=q.match(/\[align=([\s\S]*?)\][\s\S]+?\[\/align\]/),I=q.match(/\[align=[\s\S]*?\]([\s\S]+?)\[\/align\]/),z=w.length?w[w.length-1]:"",B=I.length?I[I.length-1]:"";(z||B)&&(e=e.replace(q,`<div align="${z}">${B}</div>`));});let S=e.match(/\[qq\][\s\S]*?\[\/qq\]/g);S&&S.forEach(q=>{let w=q.match(/\[qq\]([\s\S]*?)\[\/qq\]/),I=w?w[w.length-1]:"";e=e.replace(q,`<a href="http://wpa.qq.com/msgrd?v=3&uin=${I}&site=[Discuz!]&from=discuz&menu=yes" target="_blank"><img loading="lazy" src="static/image/common/qq_big.gif" border="0"></a>`);});let D=e.match(/\[td\][\s\S]+?\[\/td\]/g);D&&D.forEach(q=>{let w=q.match(/\[td\]([\s\S]*?)\[\/td\]/),I=w?w[w.length-1]:"";e=e.replace(q,`<td>${I}</td>`);});let M=e.match(/\[tr\][\s\S]+?\[\/tr\]/g);M&&M.forEach(q=>{let w=q.match(/\[tr\]([\s\S]*?)\[\/tr\]/),I=w?w[w.length-1]:"";e=e.replace(q,`<tr>${I}</tr>`);});let L=e.match(/\[table\][\s\S]+?\[\/table\]/g);L&&L.forEach(q=>{let w=q.match(/\[table\]([\s\S]*?)\[\/table\]/),I=w?w[w.length-1]:"";I=I.replace(/\n/g,""),e=e.replace(q,`<table>${I}</table>`);});let U=e.match(/\[list=[\s\S]+?\][\s\S]+?\[\/list\]/g);return U&&U.forEach(q=>{let w=q.match(/\[list=([\s\S]*?)\][\s\S]*?\[\/list\]/),I=q.match(/\[list=[\s\S]*?\]([\s\S]*?)\[\/list\]/),z=w?w[w.length-1]:"",B="";z==="a"?B="litype_2":z==="A"?B="litype_3":z.length===1&&z.match(/[0-9]{1}/)&&(B="litype_1");let J=I?I[I.length-1]:"",rt=J.split("[*]");if(rt.length>1){let _t="";rt[0].replace(/[\s]*/,"")==""&&(rt=rt.slice(1)),Array.from(rt).forEach(Kt=>{_t=`${_t}<li>${Kt}</li>`;}),J=_t;}J=J.replace(/\n/g,""),e=e.replace(q,`<ul type="${z}" class="${B}">${J}</ul>`);}),e},parseVoteText(){let e=["rgb(233, 39, 37)","rgb(242, 123, 33)","rgb(242, 166, 31)","rgb(90, 175, 74)","rgb(66, 196, 245)","rgb(0, 153, 204)","rgb(51, 101, 174)","rgb(42, 53, 145)","rgb(89, 45, 142)","rgb(219, 49, 145)","rgb(233, 39, 37)","rgb(242, 123, 33)","rgb(242, 166, 31)","rgb(90, 175, 74)","rgb(66, 196, 245)","rgb(0, 153, 204)","rgb(51, 101, 174)","rgb(42, 53, 145)","rgb(89, 45, 142)","rgb(219, 49, 145)"],t=V(".comiis_polloption_add ul li:first-child div.flex .comiis_input.kmshow[type='text']"),n=parseInt(r.val("input#maxchoices"));n=isNaN(n)?0:n,n=n>0?n:0,n=n>t.length?t.length:n;let i=parseInt(r.val("input#polldatas"));i=isNaN(i)?0:i,y.$("input#visibilitypoll").parent().find(".comiis_checkbox").hasClass("comiis_checkbox_close");let s=!y.$("input#overt").parent().find(".comiis_checkbox").hasClass("comiis_checkbox_close"),l="",o="";t.forEach((a,c)=>{c>=20||(o=o+`
                    <li class="kmnop">
                        <input type="${n>1?"checkbox":"radio"}">
                        <label><i class="comiis_font f_d"></i>${a.value}</label>
                    </li>
                    <li class="poll_ok cl">
                        <span class="bg_b">
                            <em style="width:2%;background-color:${e[c]}"></em>
                        </span>
                        <em style="color:${e[c]}">0% (0)</em>
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
                `,y.$(".gm_plugin_previewpostforum_html .postforum_vote").remove(),y.$(".gm_plugin_previewpostforum_html .comiis_messages.comiis_aimg_show").children().eq(0).before(y.$(l));}},ht={$data:{db:new it.indexedDB("mt_full_reply_record","input_text"),get type(){return A.isPostPublish_voting()?"post-vote":"post"},get tid(){return F.getThreadId(window.location.href)},get pid(){return F.getPostId(window.location.href)}},$key:{noPublishSerializeText:"mt-editor-no-publish-serialize-text",noPublishVotingSerializeText:"mt-editor-no-publish-voting-serialize-text"},$el:{$title:null,$input:null,$form:null},init(){f.info("编辑器优化"),G(de),this.overridePageEditor();},overridePageEditor(){const e=this;this.$el.$title=E("#needsubject"),this.$el.$form=E("#postform"),this.$el.$input=E("#needmessage"),r.hide(r.parent(".comiis_scrollTop_box"),false),r.css("#postform .comiis_post_from.mt15",{"margin-top":"0px !important"});let t=y.$("#postform .comiis_post_from #comiis_post_tab");y.$("#postform .comiis_post_from .comiis_post_ico").append(t),t.remove(),y.textarea_scrollHeight=()=>{};let n=y.$.fn.comiis_delete;y.$.fn.extend({comiis_delete:function(...c){let m=n.call(this,...c);return h.dispatchEvent(e.$el.$input,"input"),m}}),r.hide(".comiis_btnbox",false),this.initVotePage(),y.$(".gm_plugin_chartbed .comiis_over_box.comiis_input_style #imglist"),G(`
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
        `),r.attr("#filedata","multiple",true),r.remove(".gm_plugin_chartbed .comiis_over_box.comiis_input_style"),r.on(document,"#comiis_pictitle_key li","click",function(){r.removeClass("#comiis_pictitle_key li","bg_f"),r.addClass(this,"bg_f"),y.$(".gm_plugin_chartbed .comiis_upbox").hide().eq(y.$(this).index()).fadeIn();});let i=parseInt(r.css("#comiis_head","height"))||0,s=parseInt(r.css("#comiis_sub","height"))||0,l=E("#pollm_c_1")?60:0,o=parseInt(r.css(".comiis_styli.comiis_flex","height"))||0,a=parseInt(r.css(".comiis_post_ico.comiis_minipost_icot","height"))||0;r.css("#needmessage","height",`${window.screen.height-i-s-48-o-a-10}px`),r.css("#needmessage","marginBottom",l+"px"),A.isPostPublish_edit()&&r.val("#needsubject")===""?r.hide(".comiis_styli.comiis_flex",false):r.attr("#needsubject","placeholder","请输入完整的帖子标题 (1-80个字)"),r.attr("#needmessage","placeholder","来吧，尽情发挥吧..."),typeof y.comiis_addsmilies=="function"&&(y.comiis_addsmilies=c=>{y.$("#needmessage").comiis_insert(c),y.$("#needmessage")[0].dispatchEvent(new Event("input"));}),(C.getValue("mt-forum-post-editorOptimizationNormal-recordInputText")||C.getValue("mt-forum-post-editorOptimization-recordInputText"))&&(this.setInputChangeEvent(),this.initReplyText()),this.initDeleteBtn(),this.initSaveDraftBtn(),this.initSaveBtn(),this.initPostBtn(),this.initReplyBtn(),this.observerChangeEditorHeight(),this.listenResize(),this.initSelectPostingSection(),this.initUBB(),this.initImage(),this.initPreview(),this.initCharacterCount(),this.initSettingImmersionMode();},async initReplyText(){const e=this;let t=null,n=null,i=null;if(A.isPostPublish_newthread())f.info("新发布帖子的页面"),A.isPostPublish_voting()?(f.info("投票页面"),t=Q(this.$key.noPublishVotingSerializeText),i=()=>{ot(e.$key.noPublishVotingSerializeText);}):(f.info("普通帖子页面"),t=Q(this.$key.noPublishSerializeText),i=()=>{ot(this.$key.noPublishSerializeText);});else if(A.isPostPublish_edit()){f.info("草稿的页面"),f.info(`type：${this.$data.type} tid：${this.$data.tid} pid：${this.$data.pid}`),(await this.$data.db.get("data")).code===201&&await this.$data.db.save("data",[]);let l=await this.$data.db.get("data");if(l.data){let o=l.data.find(a=>{if(a.type===e.$data.type&&!(a.tid!==e.$data.tid||a.pid!==e.$data.pid))return  true});o&&(t=o.data,i=async()=>{let a=await this.$data.db.get("data");if(a.data){let c=a.data.findIndex(m=>{if(m.type===e.$data.type&&!(m.tid!==e.$data.tid||m.pid!==e.$data.pid))return  true});c!=-1&&(a.data.splice(c,1),await this.$data.db.save("data",a.data));}});}}else if(A.isPostPublish_reply()&&(f.info("回复页面"),C.getValue("mt-forum-post-editorOptimizationNormal-recordInputText"))){(await et.$data.db.get("data")).code===201&&await this.$data.db.save("data",[]);let l=await et.$data.db.get("data");if(l.data){let o=l.data.find(a=>a.forumId===e.$data.tid&&a.repquote===F.getRepquote(window.location.href));o&&(t=o);}}t&&(A.isPostPublish_voting()?n=()=>{let s=e.$el.$form.querySelector("input[name='subject']"),l=e.$el.$form.querySelector("textarea[name='message']"),o=e.$el.$form.querySelector("input[name='maxchoices']"),a=e.$el.$form.querySelector("input[name='expiration']"),c=e.$el.$form.querySelector("input[name='visibilitypoll']"),m=e.$el.$form.querySelector("input[name='overt']");return r.val(s,t.title),r.val(l,t.content),r.val(o,t.maxchoices),r.val(a,t.expiration),r.val(c,t.visibilitypoll),r.val(m,t.overt),h.dispatchEvent(s,"input"),h.dispatchEvent(l,"input"),h.dispatchEvent(o,"input"),h.dispatchEvent(a,"input"),h.dispatchEvent(c,"input"),h.dispatchEvent(m,"input"),true}:A.isPostPublish_reply()?n=()=>{let s=e.$el.$form.querySelector("textarea[name='message']");return r.val(s,t.text),h.dispatchEvent(s,"input"),true}:n=()=>{let s=e.$el.$form.querySelector("input[name='subject']"),l=e.$el.$form.querySelector("textarea[name='message']");return r.val(s,t.title),r.val(l,t.content),h.dispatchEvent(s,"input"),h.dispatchEvent(l,"input"),true},A.isPostPublish_newthread()?(f.info("新发布帖子的页面"),typeof n=="function"&&n()):A.isPostPublish_edit()?(f.info("草稿的页面"),typeof n=="function"&&typeof i=="function"&&N.confirm({title:{text:"提示",position:"center"},content:{text:"<p>存在历史写入的数据，是否恢复到编辑器里？</p>",html:true},btn:{merge:true,position:"space-between",ok:{text:"恢复",callback:async s=>{await n()&&(x.success("恢复成功"),s.close());}},other:{enable:true,type:"danger",text:"删除该数据",callback:async s=>{await i(),s.close(),x.success("删除成功");}}},width:"300px",height:"200px"})):A.isPostPublish_reply()&&(f.info("回复页面"),typeof n=="function"&&n()));},async getReplyRecordSize(){var t;let e=await this.$data.db.get("data");return e.success?h.getTextStorageSize((t=e==null?void 0:e.data)!=null&&t.length?JSON.stringify(e.data):""):h.formatByteToSize(0)},async clearAllReplyRecord(){return await this.$data.db.deleteAll()},deleteReplyTextStorage(){const e=this;this.$data.db.get("data").then(t=>{if(!t.success){console.warn(t);return}let n=A.isPostPublish_voting()?"post-vote":"post",i=F.getThreadId(window.location.href),s=F.getPostId(window.location.href),l=t.data.findIndex(o=>{if(o.type===n&&!(o.tid!==i||o.pid!==s))return  true});l!==-1&&(t.data.splice(l,1),e.$data.db.save("data",t.data).then(o=>{}));});},setInputChangeEvent(){const e=this;r.on([this.$el.$input,this.$el.$title].filter(Boolean),["input","propertychange"],function(t){let n=null;if(A.isPostPublish_voting()){let i=e.$el.$form.querySelector("input[name='subject']"),s=e.$el.$form.querySelector("textarea[name='message']"),l=e.$el.$form.querySelector("input[name='maxchoices']"),o=e.$el.$form.querySelector("input[name='expiration']"),a=e.$el.$form.querySelector("input[name='visibilitypoll']"),c=e.$el.$form.querySelector("input[name='overt']");n={title:i.value,maxchoices:l.value,expiration:o.value,visibilitypoll:a.checked,overt:c.checked,content:s.value};}else {let i=e.$el.$form.querySelector("input[name='subject']"),s=e.$el.$form.querySelector("textarea[name='message']");n={title:i==null?void 0:i.value,content:s.value};}A.isPostPublish_newthread()?(f.info("内容改变 ==> 新发布帖子的页面"),A.isPostPublish_voting()?W(e.$key.noPublishVotingSerializeText,n):W(e.$key.noPublishSerializeText,n)):A.isPostPublish_edit()?(f.info("内容改变 ==> 草稿的页面"),e.$data.db.get("data").then(i=>{if(!i.success){console.warn(i);return}let s=i.data.findIndex(l=>{if(l.type===e.$data.type&&!(l.tid!==e.$data.tid||l.pid!==e.$data.pid))return  true});s!==-1&&i.data.splice(s,1),i.data.push({url:window.location.href,data:n,pid:e.$data.pid,tid:e.$data.tid,type:e.$data.type}),e.$data.db.save("data",i.data).then(l=>{});})):A.isPostPublish_reply()&&(f.info("内容改变 ==> 回复页面"),C.execMenu("mt-forum-post-editorOptimizationNormal-recordInputText",()=>{et.$data.db.get("data").then(i=>{if(!i.success||i.code===201){console.warn(i);return}let s=i.data.findIndex(l=>l.forumId===e.$data.tid&&l.repquote===F.getRepquote(window.location.href));s!==-1?n.content==null||n.content===""?i.data.splice(s,1):i.data[s]=h.assign(i.data[s],{text:n.content}):i.data.push({forumId:e.$data.tid,url:window.location.href,repquote:F.getRepquote(window.location.href),text:n.content}),et.$data.db.save("data",i.data).then(l=>{});});}));});},initDeleteBtn(){if(!E(".comiis_btnbox .comiis_btn.bg_del"))return;let t=E("#comiis_head .header_y"),n=r.createElement("input",{className:"new_btn_del"},{type:"button",value:"删除"});r.append(t,n),r.on(n,"click",function(){N.confirm({title:{text:"提示",position:"center"},content:{text:"<p>是否删除帖子?</p>",html:true},btn:{ok:{callback:i=>{i.close(),y.comiis_delthread();}}},width:"300px",height:"200px"});});},initSaveBtn(){let e=r.selector(".comiis_btnbox button#postsubmit:contains('保存')");if(!e||r.text(e).includes("草稿"))return;let t=E("#comiis_head .header_y"),n=r.createElement("input",{className:"new_btn_save"},{type:"button",value:"保存"});r.append(t,n),r.on(n,"click",function(){e.click();});},initPostBtn(){let e=r.selector(".comiis_btnbox button#postsubmit:contains('发表')");if(!e)return;let t=E("#comiis_head .header_y"),n=r.createElement("input",{className:"new_btn_post"},{type:"button",value:"发表"});r.append(t,n),r.on(n,"click",function(){r.val("#postsave",0),e.click();});},initReplyBtn(){const e=this;let t=r.selector(".comiis_btnbox button#postsubmit:contains('回复')");if(!t)return;let n=E("#comiis_head .header_y"),i=r.createElement("input",{className:"new_btn_reply"},{type:"button",value:"回复"});r.append(n,i),r.on(i,"click",function(){t.click(),e.deleteReplyTextStorage();});},initVotePage(){V(".comiis_scrollTop_box").length&&(y.$("#htmlon").parent().append(`
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
                `),y.$(".comiis_scrollTop_box .swiper-slide a:contains('发表帖子')").attr("class")!="f_c"?y.$(".comiis_checkbox.comiis_choose_post").removeClass("comiis_checkbox_close"):y.$(".comiis_checkbox.comiis_choose_vote").removeClass("comiis_checkbox_close"),y.$(".comiis_checkbox.comiis_choose_post").on("click",function(){let e=y.$(this);e.addClass("comiis_checkbox_close"),y.$(".comiis_checkbox.comiis_choose_vote").addClass("comiis_checkbox_close"),e.removeClass("comiis_checkbox_close"),window.location.href=window.location.href.replace("&special=1","");}),y.$(".comiis_checkbox.comiis_choose_vote").on("click",function(){let e=y.$(this);e.addClass("comiis_checkbox_close"),y.$(".comiis_checkbox.comiis_choose_post").addClass("comiis_checkbox_close"),e.removeClass("comiis_checkbox_close"),window.location.href=window.location.href+"&special=1";}));},initSaveDraftBtn(){let e=r.selector(".comiis_btnbox button#postsubmit em:contains('保存草稿')");if(!e)return;let t=E("#comiis_head .header_y"),n=r.createElement("input",{className:"new_btn_save_temp"},{type:"button",value:"保存草稿"});E("#needsubject"),r.append(t,n),r.selector(".comiis_scrollTop_box .swiper-slide a:contains('发表帖子')"),r.on(n,"click",function(){e.click();});},observerChangeEditorHeight(){var e=0;h.waitNode("#postform > div > div.comiis_post_ico.comiis_minipost_icot").then(t=>{h.mutationObserver(t,{callback:n=>{var i=E("#postform > div > div.comiis_post_ico.comiis_minipost_icot");let s=window.getComputedStyle(i).getPropertyValue("height");if(s.toString()===e.toString())return;e=parseInt(s);let l=document.documentElement.clientHeight-E("#postform > div > div.comiis_post_ico.comiis_minipost_icot").getBoundingClientRect().height-E("#needmessage").getBoundingClientRect().top;l-5<100?(y.$("#needmessage").css("height","100px"),y.$(".gm_plugin_previewpostforum_html.double-preview .comiis_over_box").css("height","100px")):(y.$("#needmessage").css("height",l-5+"px"),y.$(".gm_plugin_previewpostforum_html.double-preview .comiis_over_box").css("height",l-5+"px"));},config:{childList:true,attributes:true,characterData:true,subtree:true}});});},listenResize(){r.on(window,"resize",function(){let e=document.documentElement.clientHeight-E("#postform > div > div.comiis_post_ico.comiis_minipost_icot").getBoundingClientRect().height-E("#needmessage").getBoundingClientRect().top;e-5<100?(r.css("#needmessage","height","100px"),r.css(".gm_plugin_previewpostforum_html.double-preview .comiis_over_box","height","100px")):(f.info("设置输入框、预览高度",e-5),r.css("#needmessage","height",e-5+"px"),r.css(".gm_plugin_previewpostforum_html.double-preview .comiis_over_box","height",e-5+"px"));});},initSelectPostingSection(){G(`
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
            `);let e={2:"版本发布",37:"插件交流",38:"建议反馈",41:"逆向交流",39:"玩机交流",42:"编程开发",40:"求助问答",44:"综合交流",50:"休闲灌水",46:"官方公告",53:"申诉举报",92:"站务专区"};r.before(".comiis_post_from .comiis_wzpost.comiis_input_style .comiis_styli:contains('标题')",`
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
        `);let t=E("#select-post-section"),n=F.getForumId(window.location.href);A.isPostPublish_newthread()?(f.info("发帖"),r.on(t,"change",function(){let i=r.val(t),s=`forum.php?mod=post&action=newthread&fid=${i}&extra=&topicsubmit=yes&mobile=2`;f.info(`修改发帖板块: ${e[i]} ${s}`);let l={求助问答:{className:"gm_user_select_help",optionHTML:`<option value="0" selected="selected">请选择</option>
                        <option value="59">求助问答</option>
                        <option value="58">已解决</option>`},建议反馈:{className:"gm_user_select_feedback",optionHTML:`<option value="0" selected="selected">请选择</option>
                        <option value="62">BUG反馈</option>
                        <option value="63">意见反馈</option>
                        <option value="65">论坛问题</option>
                        <option value="64">已解决</option>`},站务专区:{className:"gm_user_select_depot",optionHTML:`<option value="0" selected="selected">请选择</option>
                        <option value="42">版主申请</option>
                        <option value="43">职位调整</option>`}},o=l[e[i]];o?(r.remove(r.parent(".comiis_post_from .styli_tit:contains('分类')")),r.before(".comiis_stylino.comiis_needmessage",`
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
                        `)):Object.keys(l).forEach(a=>{r.remove(".comiis_post_from ."+l[a].className);}),r.attr("#postform","action",s);})):r.attr(t,"disabled",true),r.val(t,n),r.trigger(t,"change");},initCharacterCount(){f.info("添加功能：字符计数"),G(`
        .gm_plugin_word_count{display:flex}
        .gm_plugin_word_count::after{content:"/20000"}
        `),r.append("#comiis_mh_sub .swiper-wrapper.comiis_post_ico",`
            <a href="javascript:;" class="swiper-slide gm_plugin_word_count">
                <p>0</p>
            </a>`),r.on(this.$el.$input,["input","propertychange"],e=>{let t=this.$el.$input.value,n=h.getTextLength(t),i=wt.parseText(t);r.html(".gm_plugin_previewpostforum_html .comiis_message_table",i);let s=E(".gm_plugin_word_count p");r.text(s,n),n>2e4||n<10?r.attr(s,"style","color: red;"):r.attr(s,"style","");});},initUBB(){if(!E(".comiis_post_urlico")){f.error("未找到插入元素");return}G(`
        #comiis_post_tab .comiis_input_style .comiis_post_urlico li a.f_0{
            color: #53bcf5 !important;
        }
        `);let e=Ft(),t=E(".comiis_post_urlico > ul"),n=E("#comiis_post_qydiv > ul"),i=V("#comiis_post_qydiv ul li").length;me(),r.on("#comiis_post_tab .comiis_input_style .comiis_post_urlico li","click",function(){r.removeClass("#comiis_post_tab .comiis_input_style .comiis_post_urlico li a","f_0"),r.addClass("#comiis_post_tab .comiis_input_style .comiis_post_urlico li a","f_d"),r.attr(this.querySelector("a"),"class","comiis_xifont f_0"),y.$("#comiis_post_qydiv ul li").hide().eq(y.$(this).index()).fadeIn();}),y.$.each(e,function(s,l){let o=r.createElement("li",{className:"quickUBBs",innerHTML:`
                <a href="javascript:;" class="comiis_xifont f_d"><i class="comiis_font"></i>${l.key}</a>
                `});r.on(o,"click",c=>{if(!E(`#comiis_post_qydiv li[data-key='${l.key}']`)){f.error("未找到该元素");return}V("#comiis_post_tab div.comiis_post_urlico ul li a.comiis_xifont").forEach(b=>{b.className="comiis_xifont f_d";});let d=o.querySelector("a");d.className="comiis_xifont f_0";let p=i+Object.keys(e).indexOf(s);y.$("#comiis_post_qydiv ul li").hide().eq(p).fadeIn();}),r.append(t,o);let a=document.createElement("li");a.setAttribute("style","display: none;"),a.setAttribute("data-key",l.key),a.innerHTML=`
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
            </div>`,r.append(n,a),r.on(`.comiis_sendbtn[data-keyI="${s}"]`,"click",()=>{let c=y.$(`#comiis_input_${s}`).val();if(c==""){x.warning("请输入需要插入的内容");return}let m=e[s];m.isFunc&&(c=Ht(m.num,c)),m.hasOwnProperty("L")&&(c=m.L+c+m.R),y.$("#needmessage").insertAtCaret(c),m.hasOwnProperty("cursorL")&&y.$("#needmessage").moveCursorToCenterByTextWithLeft(m.cursorL,m.cursorLength),m.hasOwnProperty("cursorR")&&y.$("#needmessage").moveCursorToCenterByTextWithRight(m.cursorR,m.cursorLength);});});},initImage(){f.info("添加功能：图片"),G(`
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
            `);let t=E("#imglist"),n=r.parent(t);r.before(".gm_plugin_chartbed .bqbox_t",n),r.on("#imglist .comiis_font","click",i=>{E("#filedata").click();}),r.on("#comiis_pictitle_tab #comiis_pictitle_key","click","li",function(i){let s=i.target;r.removeClass("#comiis_pictitle_tab #comiis_pictitle_key li","bg_f"),r.addClass(s,"bg_f"),y.$("#comiis_pictitle_tab div.comiis_upbox").hide().eq(y.$(s).index()).fadeIn();}),C.execMenuOnce("mt-image-bed-hello-enable",()=>{Ut.init();}),C.execMenuOnce("mt-image-bed-mt-enable",()=>{Vt.init();});},initPreview(){const e=this;f.info("添加功能：双列预览"),G(`
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
            </div>`),r.on(".gm_plugin_previewpostforum","click",function(n){let i=this;if(V("#polldatas").length&&wt.parseVoteText(),i.querySelector("i.comiis_font").classList.contains("f_0"))r.hide(".gm_plugin_previewpostforum_html",false);else {r.show(".gm_plugin_previewpostforum_html",false);let l=wt.parseText(r.val(e.$el.$input));r.html(".gm_plugin_previewpostforum_html .comiis_message_table",l),r.css(".gm_plugin_previewpostforum_html.double-preview .comiis_over_box.comiis_input_style","height",r.css(e.$el.$input,"height"));}});},initSettingImmersionMode(){f.info("初始化设置功能-使用沉浸模式"),r.append(r.parent("#htmlon"),`
            <li class="comiis_styli_m f15 comiis_flex b_b">
                <div class="flex">使用沉浸输入</div>
                <div class="styli_r">
                    <input type="checkbox" name="immersiveinput" id="immersiveinput" value="" class="comiis_checkbox_key">
                    <label for="immersiveinput" class="wauto">
                        <code class="bg_f b_ok comiis_checkbox comiis_checkbox_close"></code>
                    </label>
                </div>	
            </li>
            `),r.on("#immersiveinput","click",function(){let e=this,t=r.parent(e).querySelector(".comiis_checkbox"),n=[".comiis_wzpost ul li.comiis_flex",".comiis_wzpost ul li.comiis_styli.kmquote",r.parent(r.parent("#pollchecked")),"#pollm_c_1",".comiis_polloption_add+div.f_0",".comiis_wzpost ul li.comiis_thread_content:contains('内容')","div#comiis_head","div#comiis_head+*:not([class])"];r.hasClass(t,"comiis_checkbox_close")?n.forEach(i=>{i&&r.hide(i,false);}):n.forEach(i=>{i&&r.show(i,false);}),window.dispatchEvent(new Event("resize"));});}},ue={id:"component-forum-post",title:"帖子",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[R("自动展开内容","mt-forum-post-autoExpandContent",true,void 0,"注入CSS展开帖子的内容"),R("修复图片宽度","mt-forum-post-repairImageWidth",true,void 0,"修复图片宽度超出页面宽度的问题"),R("移除帖子字体效果","mt-forum-post-removeFontStyle",false,void 0,""),R("移除评论区的字体效果","mt-forum-post-removeCommentFontStyle",false,void 0,""),R("添加【点评】按钮","mt-forum-post-addCommentOnBtn",false,void 0,"在评论区的每个评论右下角添加按钮"),R("附件点击提醒","mt-forum-post-setAttachmentsClickTip",true,void 0,"阻止默认点击附件就会触发附件下载"),R("代码块优化","mt-forum-post-codeQuoteOptimization",true,void 0,"自动检测代码块语言并设置关键字高亮"),R("图片查看优化","mt-forum-post-optimizationImagePreview",true,void 0,"使用Viewer查看图片")]}]},{text:"自动加载评论",type:"deepMenu",forms:[{type:"forms",text:"",forms:[R("自动加载下一页评论","mt-forum-post-loadNextPageComment",true,void 0,""),R("同步加载的地址","mt-forum-post-syncNextPageUrl",false,void 0,"便于刷新页面会停留在当前查看的评论页面")]}]},{text:"编辑器-简略版",type:"deepMenu",forms:[{type:"forms",text:"",forms:[R("启用","mt-forum-post-editorOptimizationNormal",true,void 0,"优化样式，插入bbcode代码等"),R("自动保存输入记录","mt-forum-post-editorOptimizationNormal-recordInputText",true,void 0,"当回复时会自动清空记录"),ft("清空回复记录","当前占用空间大小：计算中","清理",void 0,false,false,"default",async e=>{let i=e.target.closest("li").querySelector(".pops-panel-item-left-desc-text"),s=await et.clearAllReplyRecord();s.success?(x.success("清理成功"),r.text(i,`当前占用空间大小：${await et.getReplyRecordSize()}`)):x.error("清理失败 "+s.msg);},async(e,t)=>{let n=t.target.querySelector(".pops-panel-item-left-desc-text");r.text(n,`当前占用空间大小：${await et.getReplyRecordSize()}`);})]}]},{text:"编辑器-完整版",type:"deepMenu",forms:[{type:"forms",text:"",forms:[R("启用","mt-forum-post-publish-editorOptimization",true,void 0,"优化样式，插入bbcode代码，双列预览等"),R("自动保存输入记录","mt-forum-post-editorOptimization-recordInputText",true,void 0,"当回复/发表时会自动清空记录"),ft("清空回复记录","当前占用空间大小：计算中","清理",void 0,false,false,"default",async e=>{let i=e.target.closest("li").querySelector(".pops-panel-item-left-desc-text"),s=await ht.clearAllReplyRecord();s.success?(x.success("清理成功"),r.text(i,`当前占用空间大小：${await ht.getReplyRecordSize()}`)):x.error("清理失败 "+s.msg);},async(e,t)=>{let n=t.target.querySelector(".pops-panel-item-left-desc-text");r.text(n,`当前占用空间大小：${await ht.getReplyRecordSize()}`);})]}]},{text:"编辑器-图床配置",type:"deepMenu",forms:[{type:"forms",text:'<a href="https://www.helloimg.com/" target="_blank">Hello图床</a>',forms:[R("启用","mt-image-bed-hello-enable",false,void 0,"启用Hello图床"),H("账号","mt-image-bed-hello-account","","",void 0,"必填"),H("密码","mt-image-bed-hello-password","","",void 0,"必填",false,true),H("token","mt-image-bed-hello-token","","",void 0,"必填",false,true)]},{type:"forms",text:'<a href="https://img.binmt.cc/" target="_blank">MT图床</a>',forms:[R("启用","mt-image-bed-mt-enable",true,void 0,"启用MT图床")]},{type:"forms",text:"图片水印",forms:[R("启用","mt-image-bed-watermark-enable",false,void 0,"开启后会为图床图片添加文字水印"),R("自动添加水印","mt-image-bed-watermark-autoAddWaterMark",false,void 0,"开启后会自动添加水印，关闭后会有添加水印后的图片预览"),H("水印文字","mt-image-bed-watermark-text","MT论坛"),H("颜色","mt-image-bed-watermark-text-color","#000000",void 0,void 0,"",false,false,(e,t)=>{var s,l;let n=(s=t.target)==null?void 0:s.querySelector("input"),i=(l=t.target)==null?void 0:l.querySelector(".pops-panel-input__suffix");r.hide(i,false),n.setAttribute("type","color"),r.css(n,{margin:"unset",padding:"unset",width:"80px"});}),H("大小","mt-image-bed-watermark-font-size",16,void 0,void 0,void 0,true),H("透明度","mt-image-bed-watermark-font-opacity",1,void 0,void 0,void 0,true),H("左右间距","mt-image-bed-watermark-left-right-margin",80,void 0,void 0,void 0,true),H("上下间距","mt-image-bed-watermark-top-bottom-margin",80,void 0,void 0,void 0,true),H("旋转角度","mt-image-bed-watermark-rotate",45,void 0,void 0,void 0,true)]}]}]}]},he={id:"component-search",title:"搜索",forms:[{type:"forms",text:"",forms:[R("显示搜索历史","mt-search-showSearchHistory",true,void 0,"自动记住搜索历史并显示"),R("修复清空按钮","mt-search-repairClearBtn",true,void 0,"修复点击清空按钮不清空输入框的问题"),R("搜索框自动获取焦点","mt-search-searchInputAutoFocus",true,void 0,"")]}]},gt={$key:{sign:"mt-sign-time"},init(){this.sign();},checkSignInfo(){let t=this.getSignInfo().find(n=>n.hostName===window.location.hostname);return t?h.formatTime(Date.now(),"yyyyMMdd")===h.formatTime(t.time,"yyyyMMdd"):false},setSignInfo(){let e={hostName:window.location.hostname,time:Date.now()},t=this.getSignInfo(),n=t.findIndex(i=>i.hostName===e.hostName);n!==-1&&t.splice(n,1),t.push(e),W(this.$key.sign,t);},getSignInfo(){let e=Q(this.$key.sign,[]);return Array.isArray(e)?e:(this.clearSignInfo(),[])},getHostNameSignInfo(e=window.location.hostname){return this.getSignInfo().find(n=>n.hostName===e)},clearSignInfo(e){if(typeof e=="string"){let t=this.getSignInfo(),n=t.findIndex(i=>i.hostName===e);n!==-1&&t.splice(n,1),W(this.$key.sign,t);}else ot(this.$key.sign);},checkLogin(){return F.envIsMobile()?!!E("a[href*='member.php?mod=logging&action=logout']"):!!E("#comiis_key")},async sign(){if(this.checkSignInfo()){f.info("今日已签到");return}let e=await F.getFormHash();if(e==null){if(E("#comiis_picshowbox")){f.info("当前为评论区的看图模式 ");return}this.clearSignInfo(window.location.hostname),x.error("自动签到：获取账号formhash失败",{consoleLogContent:true});return}let t=!!C.getValue("mt-auto-sign-useFetch"),n=h.getRandomPCUA(),i=()=>{this.setSignInfo();},s=()=>{this.clearSignInfo(window.location.hostname);},l=a=>{let m=bt.alert({title:{text:"未知签到内容",position:"center"},content:{text:"",html:false},width:"88vw",height:"300px"}).$shadowRoot.querySelector(".pops-alert-content");m.innerText=a;},o=[{checkPluginEnableUrl:"/plugin.php?id=k_misign:sign",async sign(){let a={operation:"qiandao",format:"button",formhash:e,inajax:1,ajaxtarget:"midaben_sign"},c=await O.get(`/k_misign-sign.html?${h.toSearchParamsStr(a)}`,{fetch:t,headers:{"User-Agent":n},allowInterceptConfig:false});if(!c.status){x.error("签到：网络异常，请求失败",{consoleLogContent:true});return}i(),f.info("签到信息：",c);let m=c.data.responseText,d=h.parseCDATA(m),p=r.parseHTML(`<div>${d}</div>`,true,false),b=r.text(p);if(b.includes("需要先登录")){x.error("签到：请先登录账号",{timeout:3e3,consoleLogContent:true}),s();return}else if(b.includes("请稍后再试")||b.includes("您已经被列入黑名单")||b.includes("绑定手机号后才可以签到")||b.includes("您所在用户组不允许使用")){x.error("签到："+b,{timeout:5e3});return}else if(b.includes("今日已签")||b.includes("今日已经签到")){x.info("签到："+b);return}else if(m.includes("您当前的访问请求当中含有非法字符，已经被系统拒绝")){x.error("签到: 您当前的访问请求当中含有非法字符，已经被系统拒绝",{timeout:6e3});return}else if(t&&"location"in h.toJSON(m)){x.success("签到: 签到成功");return}let u=p.querySelector(".con"),g=p.querySelector(".line");if(u&&g){let _=r.text(u).match(/([0-9]+)金币/),k=r.text(g).match(/([0-9]+)/),v=_[_.length-1],$=k[k.length-1];f.success(`金币${v}，排名${$}`),x.info(`
							<div style="display: flex;${F.envIsMobile()?"":"padding: 20px;"}">
								<div style="align-self: center;margin-right: 20px;">签到</div>
								<div>排名 ${$}<br>金币 ${v}</div>
							</div>`,{timeout:4e3,isHTML:true});return}l(m);}},{checkPluginEnableUrl:"/plugin.php?id=dsu_paulsign:sign",async sign(){let a={id:"dsu_paulsign:sign",operation:"qiandao",infloat:1,inajax:1},c=await O.post(`/plugin.php?${h.toSearchParamsStr(a)}`,{data:{formhash:e,qdxq:"kx",qdmode:3,todaysay:"",fastreply:0},processData:true,fetch:t,headers:{"User-Agent":n,"Content-Type":"application/x-www-form-urlencoded"},allowInterceptConfig:false});if(!c.status){x.error("签到：网络异常，请求失败",{consoleLogContent:true});return}i(),f.info("签到信息：",c);let m=c.data.responseText;if(m.includes("签到成功")){x.success("签到：签到成功");return}if(m.includes("今日已经签到")){x.info("签到：您今日已经签到，请明天再来！");return}l(m);}}];for(let a=0;a<o.length;a++){const c=o[a];let m=await O.get(c.checkPluginEnableUrl,{fetch:t,headers:{"User-Agent":h.getRandomPCUA()},allowInterceptConfig:false});if(!m.status){f.error("签到：检查签到插件是否启用的请求失败",m);continue}if(r.parseHTML(m.data.responseText,true,true).querySelector("#messagetext")||m.data.responseText.includes("插件不存在或已关闭")){f.error(`插件：${c.checkPluginEnableUrl} 未启用或不存在`);continue}await c.sign();break}}},ge={id:"component-sigh",title:"签到",forms:[{text:"功能",type:"forms",forms:[R("显示【今日签到之星】","mt-sign-showTodaySignStar",true,void 0,"在签到按钮上面显示今日签到之星"),R("显示【今日最先】","mt-sign-showTodayRanking",true,void 0,"在签到排名上面新增【今日最先】")]},{text:"自动签到",type:"forms",forms:[R("启用","mt-auto-sign",true,void 0,"自动请求签到"),R("使用fetch请求","mt-auto-sign-useFetch",false,void 0,""),ft("签到信息",`上次签到时间：${(()=>{let e=gt.getHostNameSignInfo(window.location.hostname);return e?it.formatTime(e.time):"尚未签到"})()}`,"清空信息",void 0,void 0,void 0,"primary",e=>{let n=e.composedPath()[0].closest("li").querySelector(".pops-panel-item-left-desc-text");N.confirm({title:{text:"提示 ",position:"center"},content:{text:"<p>是否清空脚本签到记录的时间?</p>",html:true},btn:{ok:{enable:true,callback:i=>{let s=window.location.hostname;gt.clearSignInfo(s),x.success("删除成功"),r.text(n,`上次签到时间：${(()=>{let l=gt.getHostNameSignInfo(s);return l?it.formatTime(l.time):"尚未签到"})()}`),i.close();}}},mask:{enable:true},width:"88vw",height:"200px"});})]}]},fe={id:"component-space",title:"空间",forms:[{type:"forms",text:"",forms:[R("修复无法进入空间","mt-space-repairEnterSpace",true,void 0,"修复链接错误导致不能进入空间的问题"),R("显示帖子回复内容","mt-space-showCommentContent",true,void 0,"在帖子-回复下面显示具体评论的内容")]}]},be={id:"component-guide",title:"导读",forms:[{type:"forms",text:"",forms:[R("显示最新帖子","mt-guide-showLatestPost",true,void 0,"在最上面显示最新发布的帖子")]}]},vt={getAllConfig(){return [...this.getConfig()]},getConfig(){return [re,ue,he,ge,fe,be]}},_e={init(){this.initExtensionsMenu();},initExtensionsMenu(){C.isTopWindow()&&(se.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{C.showPanel(vt.getAllConfig());}}]),j.registerLeftMenu({name:"MT论坛脚本设置",icon:"",iconColor:"#ff0505",iconSize:"23px",callback:()=>{C.showPanel(vt.getAllConfig());}}));}},C={$data:{__configDefaultValueData:null,__onceExecMenuData:null,__onceExecData:null,$panel:null,get configDefaultValueData(){return this.__configDefaultValueData==null&&(this.__configDefaultValueData=new h.Dictionary),this.__configDefaultValueData},get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new h.Dictionary),this.__onceExecMenuData},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new h.Dictionary),this.__onceExecData},get scriptName(){return yt},key:Nt,attributeKeyName:nt,attributeDefaultValueName:st},init(){this.initContentDefaultValue(),_e.init();},isTopWindow(){return y.top===y.self},initContentDefaultValue(){const e=i=>{if(!i.attributes||i.type==="button"||i.type==="forms"||i.type==="deepMenu")return;let s={},l=i.attributes[nt];l!=null&&(s[l]=i.attributes[st]);let o=i.attributes[$t];if(typeof o=="function"){let m=o();if(typeof m=="boolean"&&!m)return}let a=i.attributes[ae];a&&typeof a=="object"&&Object.assign(s,a);let c=Object.keys(s);if(!c.length){f.warn(["请先配置键",i]);return}c.forEach(m=>{let d=s[m];this.setDefaultValue(m,d);});},t=i=>{for(let s=0;s<i.length;s++){let l=i[s];e(l);let o=l.forms;o&&Array.isArray(o)&&t(o);}},n=[...vt.getAllConfig()];for(let i=0;i<n.length;i++){let s=n[i];if(!s.forms)continue;const l=s.forms;l&&Array.isArray(l)&&t(l);}},setDefaultValue(e,t){this.$data.configDefaultValueData.has(e)&&f.warn("请检查该key(已存在): "+e),this.$data.configDefaultValueData.set(e,t);},setValue(e,t){at.set(e,t);},getValue(e,t){let n=at.get(e);return n??(this.$data.configDefaultValueData.has(e)?this.$data.configDefaultValueData.get(e):t)},deleteValue(e){at.delete(e);},hasKey(e){return at.has(e)},addValueChangeListener(e,t){return at.addValueChangeListener(e,(i,s,l)=>{t(e,l,s);})},removeValueChangeListener(e){at.removeValueChangeListener(e);},triggerMenuValueChange(e,t,n){at.triggerValueChangeListener(e,n,t);},deleteExecMenuOnce(e){return this.$data.onceExecMenuData.delete(e),at.removeValueChangeListener(e)},deleteOnceExec(e){this.$data.onceExecData.delete(e);},exec(e,t,n,i=true){const s=this;let l;typeof e=="string"||Array.isArray(e)?l=()=>e:l=e;let o=false,a=l(),c=[];Array.isArray(a)?(o=true,c=a):c.push(a);let m=c.find(T=>!this.$data.configDefaultValueData.has(T));if(m){f.warn(`${m} 键不存在`);return}let d=JSON.stringify(c);if(i){if(this.$data.onceExecMenuData.has(d))return;this.$data.onceExecMenuData.set(d,1);}let p=[],b=[],u=(T,S)=>{let D=[];S instanceof HTMLStyleElement?D=[S]:Array.isArray(S)&&(D=[...S.filter(M=>M!=null&&M instanceof HTMLStyleElement)]),p=p.concat(D);},g=T=>this.getValue(T),_=()=>{for(let T=0;T<p.length;T++)p[T].remove(),p.splice(T,1),T--;},k=()=>{let T=false;return typeof n=="function"?T=n(c):T=c.every(S=>g(S)),T},v=T=>{let S=k(),D=[];if(S){let M=c.map(U=>this.getValue(U)),L=t({addStyleElement:(...U)=>u(true,...U),value:o?M:M[0]});L instanceof HTMLStyleElement?D.push(L):Array.isArray(L)&&D.push(...L.filter(U=>U!=null&&U instanceof HTMLStyleElement));}_(),p=[...D];};return i&&c.forEach(T=>{let S=this.addValueChangeListener(T,(D,M,L)=>{v();});b.push(S);}),v(),{clear(){this.clearStoreStyleElements(),this.removeValueChangeListener(),i&&s.$data.onceExecMenuData.delete(d);},clearStoreStyleElements:()=>_(),removeValueChangeListener:()=>{b.forEach(T=>{this.removeValueChangeListener(T);});}}},execMenu(e,t,n=false){return this.exec(e,i=>t(i),i=>i.every(l=>{let o=!!this.getValue(l);return n&&(o=!o),o}),false)},execMenuOnce(e,t){return this.exec(e,t,n=>n.every(s=>!!this.getValue(s)),true)},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(e)||(t(),this.$data.onceExecData.set(e,1));},showPanel(e,t=`${yt}-设置`){let n=N.panel({title:{text:`${yt}-设置`,position:"center",html:false,style:""},content:e,btn:{close:{enable:true,callback:(i,s)=>{i.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(i,s)=>{i(),this.$data.$panel=null;}},width:It.setting.width,height:It.setting.height,drag:true,only:true});this.$data.$panel=n;}},ye=`.pops-confirm-content {\r
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
`,xe={$data:{cid:""},init(){this.registerMenu();},registerMenu(){j.registerLeftMenu({name:"小黑屋",iconColor:"#000000",icon:"",callback:()=>{this.showBlackHome();}});},async showBlackHome(){let e=x.loading("正在获取小黑屋名单中..."),t=await this.getBlackListInfo("");if(e.close(),!t)return;if(t.data.length===0){x.error("获取小黑屋名单为空");return}this.$data.cid=t.next_cid;let n=N.confirm({title:{text:"小黑屋名单",position:"center"},content:{text:`
                <div class="blackhome-user-filter">
                    <input placeholder="过滤用户名/操作人员/UID(可正则)">
                </div>
                <div class="blackhome-user-list"></div>
                `,html:true},btn:{ok:{text:"下一页",callback:async()=>{let a=x.loading("正在获取小黑屋名单中...");f.info("下一页的cid: ",this.$data.cid);let c=await this.getBlackListInfo(this.$data.cid);a.close(),c&&(this.$data.cid=c.next_cid,c.data.forEach(m=>{let d=this.createListViewItem(m);i.appendChild(d);}),c.data.length===0?x.error("获取小黑屋名单为空"):x.success(`成功获取 ${c.data.length}条数据`));}},cancel:{text:"关闭"}},width:"88vw",height:"82vh",style:ye,mask:{enable:true}}),i=n.$shadowRoot.querySelector(".blackhome-user-list"),s=n.$shadowRoot.querySelector(".blackhome-user-filter input");t.data.forEach(a=>{let c=this.createListViewItem(a);i.appendChild(c);}),x.success(`成功获取 ${t.data.length}条数据`);let l=false;r.on(s,["input","propertychange"],h.debounce(()=>{let a=s.value.trim();if(!l){if(l=true,a==""){n.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(c=>{c.removeAttribute("style");}),l=false;return}n.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(c=>{c.getAttribute("data-name").match(new RegExp(a,"ig"))||c.getAttribute("data-uid").trim().match(new RegExp(a,"ig"))||c.getAttribute("data-operator").match(new RegExp(a,"ig"))?c.removeAttribute("style"):c.setAttribute("style","display:none;");}),l=false;}}));let o=await this.getBlackListInfo(this.$data.cid);o&&(this.$data.cid=o.next_cid);},async getBlackListInfo(e=""){let t={mod:"misc",action:"showdarkroom",cid:e,ajaxdata:"json"},n=await O.get(`/forum.php?${h.toSearchParamsStr(t)}`,{headers:{"User-Agent":h.getRandomPCUA()},responseType:"json"});if(!n.status)return;let i=h.toJSON(n.data.responseText),s=i.message.split("|"),l=s[s.length-1],o=h.parseObjectToArray(i.data),a=[],c=[];return o.forEach(m=>{let d=m.dateline.match(/([0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]*[0-9]{1,2}:[0-9]{1,2})/g);if(d==null){let p=parseInt((Date.now()/1e3).toString()),b=0,u=m.dateline.match(/([0-9]+|半)[\s\S]*秒前/),g=m.dateline.match(/([0-9]+|半)[\s\S]*分钟前/),_=m.dateline.match(/([0-9]+|半)[\s\S]*小时前/),k=m.dateline.match(/昨天[\s\S]*(\d{2}):(\d{2})/),v=m.dateline.match(/前天[\s\S]*(\d{2}):(\d{2})/),$=m.dateline.match(/([0-9]+|半)[\s\S]*天前/);if(u)u=u[u.length-1],u=u.replace(/半/g,.5),u=parseFloat(u),b=p-u;else if(g)g=g[g.length-1],g=g.replace(/半/g,.5),g=parseFloat(g),b=p-g*60;else if(_)_=_[_.length-1],_=_.replace(/半/g,.5),_=parseFloat(_),b=p-_*60*60;else if(k){let T=k[1],S=k[2];b=p-86400-parseInt(T)*3600-parseInt(S)*60;}else if(v){let T=v[1],S=v[2];b=p-86400*2-parseInt(T)*3600-parseInt(S)*60;}else $&&($=$[$.length-1],$=$.replace(/半/g,.5),$=parseFloat($),b=p-$*60*60*24);m.time=parseInt(b.toString())*1e3,a=a.concat(m);return}else d=d[0];m.time=h.formatToTimeStamp(d),a=a.concat(m);}),h.sortListByProperty(a,"time"),h.sortListByProperty(c,"time",false),a=a.concat(c),{next_cid:l,data:a}},createListViewItem(e){let t=r.createElement("div",{className:"blackhome-user-item",innerHTML:`
                <div class="blackhome-user-avatar">
                    <div class="blackhome-user">
                    <img src="${F.getAvatar(e.uid,"big")}" loading="lazy">
                    <div class="blackhome-user-info">
                        <p>${e.username}</p>
                        <p>${e.dateline}</p>
                    </div>
                    </div>
                    <div class="blackhome-user-action">
                    <p>${e.action}</p>
                    <p>到期: ${e.groupexpiry}</p>
                    </div>
                    <div class="blackhome-user-uuid">UID: ${e.uid}</div>
                    <div class="blackhome-operator">
                    <div class="blackhome-operator-user">
                        <img loading="lazy" src="${F.getAvatar(e.operatorid,"big")}">
                        <p>${e.operator}</p>
                    </div>
                    <div class="blackhome-operator-user-info">
                    ${e.reason}
                    </div>
                    </div>
                </div>
                `},{"data-name":e.username,"data-uid":e.uid,"data-operator":e.operator,"data-operator-uid":e.operatorid});return r.on(t,"click",".blackhome-user img",function(){window.open(`home.php?mod=space&uid=${e.uid}&do=profile`,"_blank");}),r.on(t,"click",".blackhome-operator-user img",function(){window.open(`home.php?mod=space&uid=${e.operatorid}&do=profile`,"_blank");}),t}},we=`.pops-alert-content{\r
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
`,ve={$data:{},init(){this.registerMenu();},registerMenu(){j.registerLeftMenu({name:"在线用户",iconColor:"#2d92ff",icon:"",callback:()=>{this.showOnlineUser();}});},async showOnlineUser(){let e=x.loading("正在获取在线用户名单中..."),t=await this.getOnlineUserListInfo();if(e.close(),!t)return;let n=N.alert({title:{text:"在线用户",position:"center"},content:{text:`
                <div class="online-user-info">${t.totalOnline} 人在线 - ${t.onlineUser} 会员${t.invisibleUser==0?"":`(${t.invisibleUser}隐身)`} - ${t.noRegisterUser} 位游客</div>
                <div class="online-user-filter">
                    <input placeholder="过滤用户名/身份/UID(可正则)"></div>
                <div class="online-user-list"></div>
                `,html:true},btn:{ok:{text:"关闭",type:"default"}},width:"88vw",height:"82vh",style:we,mask:{enable:true}}),i=n.$shadowRoot.querySelector(".online-user-list"),s=n.$shadowRoot.querySelector(".online-user-filter input");t.data.forEach(o=>{let a=this.createListViewItem(o);i.appendChild(a);}),x.success(`成功获取 ${t.data.length}条数据`);let l=false;Z.on(s,["propertychange","input"],h.debounce(()=>{let o=s.value.trim();if(!l){if(l=true,o==""){n.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(a=>{a.removeAttribute("style");}),l=false;return}n.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(a=>{a.getAttribute("data-name").match(new RegExp(o,"ig"))||a.getAttribute("data-sf").match(new RegExp(o,"ig"))||a.getAttribute("data-uid").match(new RegExp(o,"ig"))?a.removeAttribute("style"):a.setAttribute("style","display:none;");}),l=false;}}));},async getOnlineUserListInfo(){let e={showoldetails:"yes"},t=await O.get(`/forum.php?${h.toSearchParamsStr(e)}`,{headers:{"User-Agent":h.getRandomPCUA()}});if(!t.status)return;let n=h.parseFromString(t.data.responseText,"text/html"),i={data:[],totalOnline:0,onlineUser:0,noRegisterUser:0,invisibleUser:0};n.querySelectorAll("#onlinelist ul li").forEach(o=>{let a=o.querySelector("a").getAttribute("href").match("uid-(.+?).html")[1],c=F.getAvatar(a,"middle"),m=o.querySelector("a").innerText,d="",p=o.querySelector("a").getAttribute("href"),b=o.querySelector("img").src;b.indexOf("online_member")!=-1?d="会员":b.indexOf("online_moderator")!=-1?d="版主":b.indexOf("online_supermod")!=-1?d="超级版主":b.indexOf("online_admin")!=-1?d="管理员":d="未知身份",i.data.push({uid:a,avatar:c,name:m,sf:d,space:p});});let l=n.querySelector("#online div.bm_h span.xs1").textContent;return i.totalOnline=h.parseInt(l.match(/([0-9]*)\s*人在线/i),0),i.onlineUser=h.parseInt(l.match(/([0-9]*)\s*会员/i),0),i.noRegisterUser=h.parseInt(l.match(/([0-9]*)\s*位游客/i),0),i.invisibleUser=h.parseInt(l.match(/([0-9]*)\s*隐身/i),0),i},createListViewItem(e){let t=Z.createElement("div",{className:"online-item",innerHTML:`
                <div class="online-user">
                    <img data-avatar src="${e.avatar}" loading="lazy" class="online-user-avatar">
                    <div class="online-user-info">
                        <p data-name>${e.name}</p>
                        <span data-sf="${e.sf}">${e.sf}</span>
                        <span data-uid>UID: ${e.uid}</span>
                    </div>
                </div>
            `},{"data-name":e.name,"data-uid":e.uid,"data-sf":e.sf});return Z.on(t,"click",".online-user-avatar",n=>{h.preventEvent(n),window.open(`home.php?mod=space&uid=${e.uid}&do=profile`,"_blank");}),t}},qe=()=>{var e,t,n,i,s,l,o,a,c,m,d;m=/((https?:\/\/|www\.)[\x21-\x7e]+[\w\/]|(\w[\w._-]+\.(com|cn|org|net|info|tv|cc))(\/[\x21-\x7e]*[\w\/])?|ed2k:\/\/[\x21-\x7e]+\|\/|thunder:\/\/[\x21-\x7e]+=)/gi,e=function(u){var g;if(u=(g=u.originalTarget)!=null?g:u.target,u!=null&&u.localName==="a"&&u.className.indexOf("texttolink")!==-1&&(g=u.getAttribute("href"),g.indexOf("http")!==0&&g.indexOf("ed2k://")!==0&&g.indexOf("thunder://")!==0))return u.setAttribute("href","http://"+g)},document.addEventListener("mouseover",e),c=function(u){if(typeof u=="object"&&u!=null&&typeof u.parentNode<"u"&&typeof u.parentNode.className<"u"&&typeof u.parentNode.className.indexOf=="function"&&u.parentNode.className.indexOf("texttolink")===-1&&u.nodeName!=="#cdata-section"){var g=u.textContent.replace(m,'<a href="$1" target="_blank" class="texttolink">$1</a>');if(u.textContent.length!==g.length){var _=document.createElement("span");return _.innerHTML=g,console.log(`识别: ${_.querySelector("a")}`),u.parentNode.replaceChild(_,u)}}},t="a svg canvas applet input button area pre embed frame frameset head iframe img option map meta noscript object script style textarea code".split(" "),d=`//text()[not(ancestor::${t.join(") and not(ancestor::")})]`,n=new RegExp(`^(${t.join("|")})$`,"i"),s=function(u,g){var _,k;if(g+1e4<u.snapshotLength){var v=_=g;for(k=g+1e4;g<=k?_<=k:_>=k;v=g<=k?++_:--_)c(u.snapshotItem(v));setTimeout(function(){return s(u,g+1e4)},15);}else for(v=_=g,k=u.snapshotLength;g<=k?_<=k:_>=k;v=g<=k?++_:--_)c(u.snapshotItem(v));},l=function(u){return u=document.evaluate(d,u,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null),s(u,0)},o=function(u){for(u=document.createTreeWalker(u,NodeFilter.SHOW_TEXT,{acceptNode:function(g){if(!n.test(g.parentNode.localName))return NodeFilter.FILTER_ACCEPT}},false);u.nextNode();)c(u.currentNode);},a=new window.MutationObserver(function(u){var g,_,k=0;for(g=u.length;k<g;k++){var v=u[k];if(v.type==="childList"){var $=v.addedNodes,T=0;for(_=$.length;T<_;T++)v=$[T],o(v);}}}),i=function(){return l(document.body),a.observe(document.body,{childList:true,subtree:true})};var p=function(u){var g=u.getAttribute("href");if(g.indexOf("http")!==0&&g.indexOf("ed2k://")!==0&&g.indexOf("thunder://")!==0)return u.setAttribute("href","http://"+g)},b=function(){for(var u=document.getElementsByClassName("texttolink"),g=0;g<u.length;g++)p(u[g]);};setTimeout(b,1500),setTimeout(i,100);},Ot={$flag:{isSetHljsCSS:false},init(){C.execMenuOnce("mt-forum-post-autoExpandContent",()=>this.autoExpandContent()),C.execMenuOnce("mt-forum-post-repairImageWidth",()=>this.repairImageWidth()),r.ready(()=>{C.execMenu("mt-forum-post-removeFontStyle",()=>{this.removeFontStyle();}),C.execMenu("mt-forum-post-removeCommentFontStyle",()=>{this.removeCommentFontStyle();}),C.execMenu("mt-forum-post-addCommentOnBtn",()=>{this.addCommentOnBtn();}),C.execMenuOnce("mt-forum-post-loadNextPageComment",()=>{this.loadNextPageComment();}),C.execMenuOnce("mt-forum-post-codeQuoteOptimization",()=>{this.codeQuoteOptimization();}),C.execMenuOnce("mt-forum-post-editorOptimizationNormal",()=>{et.init();}),C.execMenu("mt-forum-post-optimizationImagePreview",()=>{this.optimizationImagePreview();}),C.execMenuOnce("mt-forum-post-setAttachmentsClickTip",()=>{this.setAttachmentsClickTip();});});},autoExpandContent(){return f.info("自动展开帖子内容"),G(`
        div.comiis_message.bg_f.view_one.b_b.cl.message>div.comiis_messages.comiis_aimg_show.cl{max-height:inherit!important;overflow-y:inherit!important;position:inherit!important}
        .comiis_lookfulltext_bg,.comiis_lookfulltext_key{display:none!important} 
        `)},repairImageWidth(){return f.info("修复图片宽度"),G(`
        .comiis_messages img{
            max-width: 100% !important;
        }`)},removeFontStyle(){f.info("移除帖子字体效果");let e=E(".comiis_a.comiis_message_table");e&&r.html(e,r.html(e).replace(X.fontSpecial,""));},removeCommentFontStyle(){var n;f.info("移除评论区的字体效果");let e=V("font"),t=((n=E(".comiis_postlist .comiis_postli"))==null?void 0:n.innerHTML)||"";t!==""&&(e.forEach(i=>{t.includes(i.innerHTML)||(i.removeAttribute("color"),i.removeAttribute("style"),i.removeAttribute("size"));}),V(".comiis_message.message").forEach(i=>{if(t.includes(i.innerHTML)){i.innerHTML=i.innerHTML.replace(X.fontSpecial,"");let s=i.nextElementSibling;s&&s.localName==="strike"&&(s.outerHTML=s.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));}})),V(".comiis_postli.comiis_list_readimgs.nfqsqi").forEach(i=>{let s=i.parentElement;s&&s.localName==="strike"&&(s.outerHTML=s.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));});},addCommentOnBtn(){f.info("添加【点评】按钮"),h.waitNodeList(".bottom_zhan:not([data-isaddreviews])").then(e=>{e.forEach(t=>{var p,b,u;t.setAttribute("data-isaddreviews","true");var n=t.querySelector("a");if(n){var i=n.getAttribute("datahref")||n.getAttribute("data-href")||n.href||"",s=i.replace("mod=post&","mod=misc&").replace("action=reply&","action=comment&"),l=(p=i==null?void 0:i.match(/&page=([\w]+)/i))==null?void 0:p[1],o=`${s}&extra=page%3D1&page=${l}`,a=t==null?void 0:t.closest(".comiis_postli[id]"),c=(b=a.getAttribute("id"))==null?void 0:b.replace("pid","&pid=");o=o+c;var m=((u=a.querySelector(".top_user.f_b"))==null?void 0:u.textContent)||"",d=r.parseHTML(`
						<a href="${o}" class="f_c dialog">
							<i class="comiis_font mt_review" style="content: url(&quot;https://s1.ax1x.com/2020/04/26/Jcq8VU.png&quot;); height: 15px;"></i>
						</a>
						`,true,false);r.on(d,"click",function(){h.waitNode("div[id=ntcmsg_popmenu]>div>span.f_c").then(g=>{try{g.innerText="点评 "+m;}catch(_){f.error("修改点评失败",_);}});}),r.prepend(t,d);}});});},loadNextPageComment(){var c;if(f.info("自动加载下一页评论"),document.title.includes("提示信息 - MT论坛"))return;function e(){return E("#loading-comment-tip")}function t(){return E("#loading-comment-tip").parentElement}function n(m){let d=e(),p=t();r.css(p,"display","");let u=Array.from(m.querySelectorAll("a[href]")).find(v=>{var $;return (($=v.textContent)==null?void 0:$.trim())==="下一页"}).href;if(f.info("获取下一页url：",u),u.includes("javascript:;")){f.info("暂无下一页的评论"),r.remove(p);return}function g(){r.remove(".comiis_page.bg_f"),r.remove(p),r.off(d,"click",_),r.off(window,"scroll",k.run);}async function _(){r.text(d,"正在加载评论中..."),r.css(p,"display",""),f.info("请求下一页评论："+u);let v=u,$=await O.get(v,{fetch:true});if(!$.status)return;let T=r.parseHTML($.data.responseText,true,true),S=E(".comiis_postlist.kqide"),D=T.querySelector(".comiis_postlist.kqide"),M=T.querySelector(".nxt"),L=(M==null?void 0:M.getAttribute("href"))||(M==null?void 0:M.href);if(L){if(f.success("成功获取到下一页评论"),L===u){f.warn("获取到下一页评论的url和上次请求的url相同，判定为已加载完全部评论，移除监听事件"),g();return}u=L;}else f.error("评论全部加载完毕，移除监听事件"),g();let U=M==null?void 0:M.parentElement.querySelector("strong");if(U){let q=E("#select_a");if(q){let w=Array.from(q.childNodes).find(I=>I.nodeName==="#text");w&&(w.textContent=`第 ${U.textContent} 页`);}}C.execMenu("mt-forum-post-syncNextPageUrl",()=>{if(window===(top==null?void 0:top.window)){let q=new URL(v),w=`${q.pathname}${q.search}`;window.history.pushState("forward","",w);}}),r.append(S,D),Ot.init();}var k=new h.LockFunction(async()=>{h.isNearBottom(50)&&await _();});r.text(d,"请上下滑动或点击加载"),r.on(window,"scroll",k.run),r.on(d,"click",_),k.run();}let s=r.parseHTML(`
		<div class="comiis_multi_box bg_f b_t">
			<label class="comiis_loadbtn bg_e f_d" id="loading-comment-tip">正在等待页面加载完毕</label>
		</div>`,true,false),l=E(".comiis_bodybox");r.append(l,s);let o=E(".comiis_pltit span.f_d")||E("#comiis_foot_memu .comiis_kmvnum");if(E(".comiis_pltit h2")&&((c=E(".comiis_pltit h2"))!=null&&c.textContent.includes("暂无评论"))){r.remove(t()),f.info("暂无评论");return}parseInt(o.textContent)>=10?h.waitNode(".comiis_page.bg_f").then(m=>{n(m);}):(r.remove(t()),f.info("无多页评论"));},codeQuoteOptimization(){f.info("代码块优化");function e(n){var i=["add","and","cmp","cmpg","cmpl","const","div","double","float","goto","if","int","long","move","mul","neg","new","nop","not","or","rem","return","shl","shr","sput","sub","throw","ushr","xor"],s=["aget","aput","array","check","execute","fill","filled","goto/16","goto/32","iget","instance","invoke","iput","monitor","packed","sget","sparse"],l=["transient","constructor","abstract","final","synthetic","public","private","protected","static","bridge","system"];return {aliases:["smali"],contains:[{className:"string",begin:'"',end:'"',relevance:0},n.COMMENT("#","$",{relevance:0}),{className:"keyword",variants:[{begin:"\\s*\\.end\\s[a-zA-Z0-9]*"},{begin:"^[ ]*\\.[a-zA-Z]*",relevance:0},{begin:"\\s:[a-zA-Z_0-9]*",relevance:0},{begin:"\\s("+l.join("|")+")"}]},{className:"built_in",variants:[{begin:"\\s("+i.join("|")+")\\s"},{begin:"\\s("+i.join("|")+")((\\-|/)[a-zA-Z0-9]+)+\\s",relevance:10},{begin:"\\s("+s.join("|")+")((\\-|/)[a-zA-Z0-9]+)*\\s",relevance:10}]},{className:"class",begin:`L[^(;:
]*;`,relevance:0},{begin:"[vp][0-9]+"}]}}this.$flag.isSetHljsCSS||(pt.registerLanguage("smali",e),G(`
			.hljs ol{margin:0 0 0 10px;padding:10px 10px 10px 25px}
			.hljs li{padding-left:10px;list-style-type:decimal-leading-zero;font-family:Monaco,Consolas,'Lucida Console','Courier New',serif;font-size:12px;line-height:1.8em}
			.hljs li:hover{background:#2c313c}
			.hljs li::marker{unicode-bidi:isolate;font-variant-numeric:tabular-nums;text-transform:none;text-indent:0!important;text-align:start!important;text-align-last:start!important}
			select.code-select-language{height:40px;line-height:40px;font-size:14px;border:1px solid #5c5c5c;border-radius:5px;text-align:center;outline:0;margin-left:10px}
			`),G(`
			.reader-copy-button{background:#000;background-size:cover;background-repeat:no-repeat;background-position:0;color:#fff;line-height:40px;display:block;text-align:center;border-radius:5px;cursor:pointer;font-size:15px;width:70px;user-select:none}
			.reader-copy-button i{display:inline-block;margin-right:6px;width:16px;height:16px;background-size:cover;vertical-align:sub;user-select:none}
			`),r.on(document,"click",".reader-copy-button",async function(n){h.preventEvent(n);let i=n.target,s=E(i.getAttribute("data-code-selector"));return await h.setClip(s.outerText||s.innerText),x.success("已复制到剪贴板"),false})),V(".comiis_blockcode.comiis_bodybg").forEach(n=>{if(n.getAttribute("data-copy"))return;n.setAttribute("data-copy","true");let i=r.createElement("div",{innerHTML:`
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
					</span>`},{style:"height: 34px;margin: 14px 0px;display: inline-flex;align-items: flex-end;"});r.before(n,i);function s(d,p="java"){d.oldValue||(d.oldValue=d.textContent),d.innerHTML=pt.highlight(d.oldValue,{language:p}).value.replace(/\\n$/gi,"");}let l=pt.highlightAuto(n.textContent).language,o=document.createElement("div"),a=document.createElement("select"),c=pt.listLanguages().sort();c=c.concat("自动检测");let m="";c.forEach(d=>{d.startsWith("自动检测")?m+=`<option data-value="${l}" selected="selected">${d}(${l})</option>`:m+=`<option data-value="${d}">${d}</option>`;}),a.className="code-select-language",a.innerHTML=m,r.on(a,"change",function(){let d=a.selectedOptions[0].getAttribute("data-value");a.setAttribute("aria-label",d),f.info("切换代码块语言: ",d),n.querySelectorAll("li").forEach(p=>{s(p,d);});}),h.preventEvent(a,"click"),o.appendChild(a),i.append(o),h.dispatchEvent(a,"change"),n.className="hljs",n.firstChild.removeAttribute("class"),i.querySelector(".reader-copy-button").setAttribute("data-code-selector",h.getElementSelector(n));});},optimizationImagePreview(){f.info("图片查看优化");function e(n=[],i=0){let s="";n.forEach(a=>{s+=`<li><img data-src="${a}"></li>`;});let l=r.createElement("ul",{innerHTML:s}),o=new Dt(l,{inline:false,url:"data-src",zIndex:h.getMaxZIndex()+100,hidden:()=>{o.destroy();}});f.info("查看的图片的下标",i),o.view(i),o.zoomTo(1),o.show();}let t=[{hostName:"avatar-bbs.mt2.cn",pathName:"*"},{hostName:"cdn-bbs.mt2.cn",pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"/uc_server/avatar.php"}];h.waitNodeList("div.comiis_postlist.kqide .comiis_postli:not([data-isHandlingViewIMG])").then(n=>{n.forEach(i=>{i.setAttribute("data-isHandlingViewIMG","true");let s=[];i.querySelectorAll("img").forEach(l=>{let o=l.src,a=new URL(o).hostname,c=new URL(o).pathname,m=l.parentElement;m.nodeName.toLowerCase()==="span"&&m.removeAttribute("onclick"),m.nodeName.toLowerCase()==="a"&&m.getAttribute("href")===o&&(m.setAttribute("href","javascript:;"),m.removeAttribute("target"));let d=false;for(let p of t)if(a.indexOf(p.hostName)!=-1&&c.match(p.pathName)){d=true;break}d||(s=[...s,o],r.on(l,"click",function(){f.info("点击图片",l);let p=s.findIndex(b=>b==o);e(s,p);}));}),s.length&&f.info("处理的图片",s);});});},setAttachmentsClickTip(){f.info("附件点击提醒");function e(t){if(t.hasAttribute("href")){let n=t.getAttribute("href"),i=t.querySelector("span.f_ok"),s=t.querySelector(".attach_size");if(r.text(s).indexOf("金币")===-1)return;f.info("发现附件",t),f.info("该附件是金币附件，拦截！");let l=r.text(i);t.setAttribute("data-href",t.getAttribute("href")),t.removeAttribute("href"),i.innerText="【已拦截】"+l,t.onclick=function(){f.info("附件url：",n),N.confirm({title:{text:"提示",position:"center"},content:{text:`<br />确定花费2金币下载附件 <a style="color: #507daf !important;">${l}</a> ？<br /><br />`,html:true},btn:{ok:{callback:o=>{window.open(n,"_blank"),o.close();}}},mask:{enable:true},width:"88vw",height:"200px"});};}}h.mutationObserver(document.documentElement,{callback:()=>{V(".attnm a").forEach(t=>{e(t);}),V(".comiis_attach a").forEach(t=>{e(t);});},config:{childList:true,subtree:true}}),h.waitNodeList(".attnm a").then(t=>{t.forEach(n=>{e(n);});}),h.waitNodeList(".comiis_attach a").then(t=>{t.forEach(n=>{e(n);});});}},ke={init(){G(`
		/* 去除搜索框的蒙版 */
        #comiis_search_noe{
            display: none !important;
        }
		/* 显示真正的试搜索框 */
        #comiis_search_two{
            display: block !important;
        }
        `),Z.ready(()=>{C.execMenuOnce("mt-search-showSearchHistory",()=>{this.showSearchHistory();}),C.execMenuOnce("mt-search-repairClearBtn",()=>{this.repairClearBtn();}),C.execMenuOnce("mt-search-searchInputAutoFocus",()=>{this.searchInputAutoFocus();});});},async showSearchHistory(){f.info("显示搜索历史");let e=Q("search_history",[]),t=E("#scform_srchtxt"),n=E("#searchform"),i=N.searchSuggestion({target:t,inputTarget:t,data:e,getItemHTML:function(o){return o},getData(o){return e.filter(a=>a.includes(o))},deleteIcon:{enable:true,callback(o,a,c){let m=e.findIndex(d=>d===c);m!==-1&&(e.splice(m,1),W("search_history",e)),a.remove();}},itemClickCallBack(o,a,c){t.value=c,n.submit();}});i.init(),i.setAllEvent();function s(){let o=document.querySelector("#scform_submit");Z.on(o,"click",function(){let a=t.value;if(a!=""){let c=Q("search_history",[]);c.includes(a)?f.info("已有该搜索历史记录"):(f.info("无该记录，追加"),c.push(a)),W("search_history",c);}});}function l(){let a='<div class="comiis_p12 f14 bg_f f_c b_b cl" style="padding-bottom:10px">搜索记录个数: '+Q("search_history",[]).length+`<button class="btn_clear_search_history" style="
                    border: none;
                    float: right;
                    background: red;
                    color: #fff;
                    border-radius: 3px;
                    font-weight: 600;
                    min-width: 20vw;
                    width: 20vw;
                ">清理记录</button></div>`;Z.before(document.querySelector(".comiis_p12"),a);let c=document.querySelector(".btn_clear_search_history");Z.on(c,"click",m=>{h.preventEvent(m),ot("search_history"),window.location.reload();});}s(),l();},repairClearBtn(){h.waitNode("a.ssclose").then(e=>{f.info("修复清空按钮"),Z.on(e,"click",t=>{let n=document.querySelector("#scform_srchtxt");n?n.value="":x.error("获取输入框失败");},{capture:true});});},searchInputAutoFocus(){new URLSearchParams(window.location.search).has("kw")||h.waitNode("#scform_srchtxt").then(t=>{f.info("搜索框自动获取焦点"),t.focus();});}},$e={init(){r.ready(()=>{C.execMenuOnce("mt-sign-showTodaySignStar",()=>{this.showTodaySignStar();}),C.execMenuOnce("mt-sign-showTodayRanking",()=>{this.showTodayRanking();});});},async showTodaySignStar(){f.info("显示【今日签到之星】");let e=document.querySelector(".pg_k_misign .comiis_qdinfo"),t=document.createElement("ul"),n=await O.get("/k_misign-sign.html",{headers:{"User-Agent":h.getRandomPCUA()}});if(!n.status)return;let s=r.parseHTML(n.data.responseText,true,true).querySelector("#pt span.xg1");if(!s)return;let l=r.text(s).replace("今日签到之星：","");t.innerHTML=`
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
		}`),e.append(t);},showTodayRanking(){f.info("显示【今日最先】");let e=document.querySelector(".comiis_topnv .comiis_flex .flex"),t=r.createElement("li",{className:"flex"}),n=r.createElement("a",{id:"k_misignlist_today_latest",href:"javascript:;",innerHTML:"今日最先"},{onclick:"ajaxlist('todayLatest');"});t.appendChild(n),r.after(e,t);let i=async o=>{let a=await O.get(`/k_misign-sign.html?operation=${o}`,{responseType:"html",headers:{"User-Agent":h.getRandomPCUA()}});if(!a.status)return;let m=r.parseHTML(a.data.responseText,true,true).querySelector("#J_list_detail .pg span");if(m&&typeof m.title<"u"){let d=m.title.match(/([0-9]+)/);if(d&&d.length==2)return parseInt(d[d.length-1]);x.error("获取页失败");}else x.error("请求最先签到的页失败");},s=async o=>{let a=await O.get(`/k_misign-sign.html?operation=list&op=&page=${o}`,{responseType:"html",headers:{"User-Agent":h.getRandomPCUA()}});if(!a.status)return;let m=r.parseHTML(a.data.responseText,true,true).querySelectorAll("#J_list_detail tbody tr"),d=[];if(m.length==2&&m[0].textContent.indexOf("暂无内容")!=-1)return d;for(let p=1;p<=m.length-2;p++){let b=m[p],u={user:"",uid:"",avatar:"",days:"",monthDays:"",time:"",reward:""},g=b.children[0].getElementsByTagName("a")[0].textContent,k=b.children[0].getElementsByTagName("a")[0].href.match(/space-uid-([0-9]*)/)[1],v=b.children[1].textContent,$=b.children[2].textContent,T=b.children[3].textContent,S=b.children[5].textContent;u.user=g,u.uid=k,u.avatar=F.getAvatar(k,"small"),u.days=v,u.monthDays=$,u.time=T,u.reward=S,d.push(u);}return d};function l(o,a){let c=document.querySelector("#ranklist");r.html(c,o),r.attr(c,"listtype",a);}y.ajaxlist=async o=>{if(o=o,o=="today"?(loadingdelay=false,urlextra="list&op=today"):o=="month"?(loadingdelay=false,urlextra="list&op=month"):o=="zong"?(loadingdelay=false,urlextra="list&op=zong"):o=="calendar"?(loadingdelay=true,urlextra="calendar"):(loadingdelay=false,urlextra="list"),o=="todayLatest"){loadingdelay=false,urlextra="list&op=&page=0";let a=await i(urlextra);if(!a)return;let c=await s(a);if(c.reverse(),c.length<10){let p=await s(a-1);p.reverse(),c=c.concat(p),c.reverse();}let m="";c.reverse(),c.forEach(p=>{m=m+`
						<tbody id="autolist_${p.uid}">
			  				<tr>
								<td class="k_misign_lu">
									<a href="home.php?mod=space&amp;uid=${p.uid}">
										<img src="${p.avatar}" loading="lazy">
									</a>
								</td>
								<td class="k_misign_ll"><span></span></td>
								<td class="k_misign_lc">
									<h4 class="f_c">
										<a href="home.php?mod=space&amp;uid=${p.uid}">${p.user}</a>
										<span>${p.time}</span>
										<span class="y">总天数 ${p.days}天</span>
									</h4>
									<p class="f_0">月天数 ${p.monthDays} 天，上次奖励 ${p.reward}</p>
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
					</div>`;l(d,o);}else O.get(`plugin.php?id=k_misign:sign&operation=${urlextra}`,{responseType:"html",fetch:true}).then(a=>{let c=a.data.responseText;c=c.replace("今日排行</a></li>",`今日排行</a></li>
							<li class="flex">
								<a href="javascript:;" id="k_misignlist_today_latest" onclick="ajaxlist('todayLatest');" class="f_c">今日最先</a>
							</li>`),o=="today"&&(c=c.replace(`<li class="flex"><a href="javascript:;" id="k_misignlist_today" onclick="ajaxlist('today');">今日排行</a></li>`,`
								<li class="flex f_0">
									<em class="bg_0"></em>
									<a href="javascript:;" id="k_misignlist_today" onclick="ajaxlist('today');">今日排行</a>
								</li>
								`)),l(c,o);});};}},Se={init(){C.execMenuOnce("mt-space-repairEnterSpace",()=>{this.repairEnterSpace();}),r.ready(()=>{C.execMenuOnce("mt-space-showCommentContent",()=>{this.showCommentContent();});});},repairEnterSpace(){if(f.info("修复无法进入空间"),A.isSpace()){let e=window.location.href.match(/home.php\?(.+)/gi),t=e[e.length-1];t.split("&").length==2&&t.indexOf("uid=")!=-1&&t.indexOf("mod=space")!=-1&&(window.location.href=window.location.href+"&do=profile");}else if(A.isSpaceWithAt()){let e=window.location.href.match(/space-uid-(.+).html/i),t=e[e.length-1];window.location.href=`${window.location.origin}/home.php?mod=space&uid=${t}&do=profile`;}},async showCommentContent(){f.info("显示帖子回复内容"),G(`
		div.contrete-reply{padding:5px 10px;border-top:1px solid #f3f3f3}
		div.contrete-reply a{margin:0 10px}
		`);async function e(){let o=await O.get(window.location.href,{headers:{"User-Agent":h.getRandomPCUA()}});if(!o.status)return;let a=r.parseHTML(o.data.responseText,true,true),c=[];return a.querySelectorAll("#delform tr.bw0_all+tr").forEach(m=>{let d=[],p=m.querySelector("td"),b=r.html(p).replace(/^&nbsp;/,"");d.push(b);let u=r.next(m),g=a.querySelectorAll("#delform tr");for(let _=0;_<g.length&&!(!u||r.attr(u,"class")==="bw0_all");_++){let k=u.querySelector("td"),v=r.html(k).replace(/^&nbsp;/,"");d=d.concat(v),u=r.next(u);}c.push(...d);}),c}function t(){return h.getNodeListValue(j.comiisForumList(),j.comiisPostli(),j.comiisMmlist())}function n(o){let a={};return o.forEach(c=>{var _;let d=(_=r.createElement("div",{innerHTML:c}).querySelector("a"))==null?void 0:_.getAttribute("href"),p=d.match(X.ptid),b=d.match(X.pid);if(!p){x.error("获取ptid失败");return}if(!b){x.error("获取pid失败");return}let u=p[p.length-1],g=b[b.length-1];a[u]?a[u].data.push(c):a[u]={ptid:u,pid:g,data:[c]};}),a}var i=await e();if(i==null)return;var s=n(i);t().forEach((o,a)=>{let m=o.querySelector(".comiis_xznalist_bottom a").getAttribute("tid");if(!m){x.error("获取帖子tid失败"),f.error(o);return}s[m]&&s[m].data.forEach(d=>{r.append(o,`<div class="contrete-reply">${d}</div>`);});});}},mt={$key:{tipData:"tipToFreeSubjectForumPost"},init(){this.registerMenu();let e=this.getTipData();if(A.isPost()&&document.querySelector("span.kmren")){f.info("当前帖子存在需要购买主题");let l=false,o;e.forEach((c,m)=>{if(window.location.href.match(c.url)){l=true;return}}),l?(f.warn("已设置提醒"),o=r.createElement("a",{href:"javascript:;",className:"styli_tit f_c",innerHTML:`
                        <i class="comiis_font" style="color: #ffffff;"></i>
                        `}),r.on(o,"click",function(){N.confirm({title:{text:"提示",position:"center"},content:{text:"<p>确定移出付费主题白嫖列表？</p>",html:true},btn:{ok:{callback:function(){let c=e.findIndex((m,d)=>window.location.href.match(m.url));c!==-1?(e.splice(c,1),mt.setTipData(e),x.success("移除成功")):x.error("移除失败");}}},mask:{enable:true},width:"88vw",height:"300px"});})):(f.info("未设置提醒"),o=r.createElement("a",{href:"javascript:;",className:"styli_tit f_c",innerHTML:`
                        <i class="comiis_font" style="color: #FF9900;"></i>
                        `}),r.on(o,"click",()=>{let c=document.querySelector(".kmren"),m=r.parent(c),d=r.text(m).replace(/\t|\n/g,"").match(/[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]{1}[0-9]{1,2}:[0-9]{1,2}/);if(!d||d.length==0){x.error("获取付费主题到期时间失败");return}let p=d[0],b=h.formatToTimeStamp(p);e.push({url:window.location.href,title:document.title.replace(" - MT论坛",""),expirationTime:p,expirationTimeStamp:b,isVisited:false}),W("tipToFreeSubjectForumPost",e),x.success("添加成功"),setTimeout(function(){window.location.reload();},1500);}));let a=document.querySelector(".comiis_head.f_top .header_y");r.append(a,o);}function t(){let s=0;return Array.from(mt.getTipData()).forEach((l,o)=>{new Date().getTime()>l.expirationTimeStamp&&l.isVisited==false&&(s+=1);}),s}if(A.isMySpace()||A.isGuide()||A.isForumList()||A.isPlate()){let s=document.querySelector(".icon_msgs.bg_del.f_f"),l=0;s?(l=parseInt(r.text(s)),r.html(s,(l+t()).toString()),r.append(".comiis_head .header_z .kmuser em",'<span class="icon_msgs bg_del"></span>')):t()&&r.append(".comiis_head .header_z .kmuser em",'<span class="icon_msgs bg_del"></span>');}let n=document.querySelector(".sidenv_num.bg_del.f_f"),i=0;if(n)i=parseInt(r.text(n)),r.html(".sidenv_num.bg_del.f_f",(i+t()).toString());else {let s=t();s&&r.before(".sidenv_user em",`<span class="sidenv_num bg_del f_f">${s}</span>`);}t()&&r.append(".comiis_left_Touch .paymentsubjectreminder div.flex",`
                <span class="sidenv_num bg_del f_f" style="
                    position: relative;
                    border-radius: 18px;
                    height: 6px;
                    width: 6px;
                    left: 3px;
                    display: inline-flex;
                    bottom: 8px;
                "></span>`);},registerMenu(){j.registerLeftMenu({name:"付费主题白嫖提醒",icon:"",iconColor:"#ec0000",callback:()=>{this.showView();}});},showView(){f.info("显示白嫖列表");let e=mt.getTipData();N.alert({title:{text:"付费主题白嫖列表",position:"center"},content:{text:"",html:true},btn:{ok:{text:"关闭",type:"default"}},mask:{enable:true},width:"88vw",height:"88vh"});let t="",n=0,i="",s="",l=[],o=[],a=[];e.forEach((u,g)=>{let _="#f91212",k="";new Date().getTime()>u.expirationTimeStamp&&(_="#1e90ff",u.isVisited||(k=`
                        <span class="icon_msgs bg_del" style="position: fixed;width: 10px;height: 10px;border-radius: 50%;margin: 10px 0px 0px -15px;"></span>
                    `,n=n+1));let v={content:`
                <tbody id="autolist">
                    <tr>
                        <td style="width: 100%;">
                            <div style="display: inline-flex;">
                            ${k}
                            <div style="width: 240px;">                 
                                <a href="javascript:void(0);" t-href="${u.url}" t-index="${g}" style="color: #1e90ff;">${u.title}</a>
                                <li style="margin: 5px 15px;color: ${_};">${u.expirationTime}</li>
                            </div>
                            <div style="align-self: center;margin-left: 10px;" t-index="${g}" class="delsubjecttip">
                                <i class="comiis_font" style="font-size: 24px;padding: 0px 6px;"></i>
                            </div>
                            </div>
                        </td>
                    </tr>
                    <tr style="height:15px;"></tr>
                </tbody>`,timestamp:u.expirationTimeStamp};new Date().getTime()>u.expirationTimeStamp?k!=""?l.push(v):o.push(v):a.push(v);}),f.info("可白嫖但未访问：",l),f.info("可白嫖：",o),f.info("未到白嫖时间：",a),h.sortListByProperty(l,"expirationTimeStamp",false),h.sortListByProperty(o,"timestamp",false),h.sortListByProperty(a,"timestamp",false),f.info("排序后——可白嫖但未访问：",l),f.info("排序后——可白嫖：",o),f.info("排序后——未到白嫖时间：",a),i=h.mergeArrayToString(l,"content")+h.mergeArrayToString(o,"content"),s=h.mergeArrayToString(a,"content"),n>0&&(t=`
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
                <summary>可白嫖${t}</summary>
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
        `,d=document.querySelector(".msgcon");r.html(d,""),r.append(d,c),r.append(d,m),r.css(d,"height","400px"),r.on(document.querySelector(".delsubjecttip i.comiis_font"),"click",u=>{let g=u.target,_=r.parent(g);var k=parseInt(_.getAttribute("t-index"));N.confirm({title:{text:"提示",position:"center"},content:{text:"<p>确定移出付费主题白嫖列表？</p>",html:true},mask:{enable:true},btn:{ok:{callback:v=>{e.splice(k,1),mt.setTipData(e),h.deleteParentNode(g,"tr"),v.close();}}},width:"80vw",height:"300px"});});let p=document.querySelector("#paymentSubjectReminderIsFreeList");r.on(p,"click","a",u=>{var S,D,M,L,U,q;let g=u.target;var _=parseInt(g.getAttribute("t-index")),k=g.getAttribute("t-href");if(e[_].isVisited=true,mt.setTipData(e),window.open(k,"_blank"),g.setAttribute("style","color: #000000;"),((D=(S=g==null?void 0:g.parentElement)==null?void 0:S.parentElement)==null?void 0:D.children[0].className)!="icon_msgs bg_del")return;g.parentElement.parentElement.children[0].remove(),r.append(p,(q=(U=(L=(M=g==null?void 0:g.parentElement)==null?void 0:M.parentElement)==null?void 0:L.parentElement)==null?void 0:U.parentElement)==null?void 0:q.parentElement);let v=document.querySelector(".subjectcanvisit summary span.icon_msgs.bg_del.f_f"),$=r.text(v),T=parseInt($)-1;T>0?r.html(v,T.toString()):v.remove();});let b=document.querySelector("paymentSubjectReminderIsPaidList");r.on(b,"click","a",u=>{let g=u.target;g.getAttribute("t-index");var _=g.getAttribute("t-href");window.open(_,"_blank"),g.setAttribute("style","color: #000000;");});},getTipData(){return Q(this.$key.tipData,[])},setTipData(e){W(this.$key.tipData,e);}},Ce=`.pops {\r
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
`;class Te{constructor(t){tt(this,"isBacking",false);tt(this,"config");this.config=t,this.enterGestureBackMode=this.enterGestureBackMode.bind(this),this.quitGestureBackMode=this.quitGestureBackMode.bind(this),this.popStateEvent=this.popStateEvent.bind(this),(typeof this.config.backDelayTime!="number"||isNaN(this.config.backDelayTime))&&(this.config.backDelayTime=150),this.config.win==null&&(this.config.win=self);}popStateEvent(t){h.preventEvent(t),!this.isBacking&&this.quitGestureBackMode(true);}enterGestureBackMode(){f.success("进入手势模式");let t=this.config.hash;t.startsWith("#")||(t.startsWith("/")||(t="/"+t),t="#"+t),this.config.useUrl&&(t=this.config.win.location.origin+this.config.win.location.pathname+this.config.win.location.search+t),this.config.win.history.pushState({},"",t),f.success("监听popstate事件"),r.on(this.config.win,"popstate",this.popStateEvent,{capture:true});}async quitGestureBackMode(t=false){this.isBacking=true,f.success("退出手势模式"),typeof this.config.beforeHistoryBackCallBack=="function"&&this.config.beforeHistoryBackCallBack(t);let n=Date.now()+1e3*5;for(;;){if(Date.now()>n){f.error("未知情况，history.back()失败，无法退出手势模式");break}if(this.config.win.location.hash.endsWith(this.config.hash))f.info("history.back()"),this.config.win.history.back(),await h.sleep(this.config.backDelayTime||150);else break}f.success("移除popstate事件"),r.off(this.config.win,"popstate",this.popStateEvent,{capture:true}),this.isBacking=false,typeof this.config.afterHistoryBackCallBack=="function"&&this.config.afterHistoryBackCallBack(t);}}const ct={https:`
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
		</svg>`},jt={$key:{smallWindow:"smallWindow"},$el:{$refreshIcon:null,$webSiteIcon:null},init(){let e=new h.LockFunction(()=>{let t=this.getForumList();t.length&&this.handleForumPost(t);});h.mutationObserver(document.documentElement,{callback:(t,n)=>{e.run();},config:{subtree:true,childList:true}});},getForumList(){return h.getNodeListValue(j.comiisForumList(),j.comiisPostli(),j.comiisMmlist())},showSmallWindow(e,t,n=[]){let i=new URL(t),s=i.protocol.includes("https:"),l=`
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
                <p class="small-window-title-text">${e}</p>
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
        </div>`,o=N.drawer({title:{enable:true,text:l,html:true,style:"height: auto;line-height: normal;"},content:{text:`
                <iframe scrolling="auto" allowtransparency="true" frameborder="0" src="${t}" style="width:100%; height:100%;">
                </iframe>
                `,html:true},mask:{enable:true,clickEvent:{toClose:true},clickCallBack(S,D){T.quitGestureBackMode();}},btn:{ok:{enable:false},cancel:{enable:false},close:{enable:false}},direction:"bottom",size:"92%",borderRadius:18,style:Ce}),a=o.$shadowRoot.querySelector(".small-window-website-icon"),c=o.$shadowRoot.querySelector(".refresh-icon"),m=o.$shadowRoot.querySelector(".small-window-control-image-view"),d=o.$shadowRoot.querySelector(".small-window-control-open-blank"),p=o.$shadowRoot.querySelector(".small-window-control-close"),b=o.$shadowRoot.querySelector(".small-window-title-text");this.$el.$refreshIcon=c,this.$el.$webSiteIcon=a;let u=o.$shadowRoot.querySelector("iframe"),g=o.$shadowRoot.querySelector(".small-window-drag"),_=N.config.Utils.AnyTouch(),k=new _(g),v=o.popsElement,$=r.height(v);k.on("pan",S=>{S.phase=="move"&&S.displacementY>0&&(v.style.transition="none",v.style.height=Math.abs($-S.distanceY)+"px"),S.isEnd&&(v.style.transition="0.2s ease-in",parseInt(v.style.height)>window.innerHeight/2?v.style.height=$+"px":o.close());});let T=new Te({hash:this.$key.smallWindow,useUrl:true,win:y,beforeHistoryBackCallBack:S=>{o.close();}});T.enterGestureBackMode(),r.on(b,"click",S=>{h.preventEvent(S),h.setClip(`『${e}』 - ${t}`),x.success("已复制链接");}),r.on(m,"click",S=>{h.preventEvent(S),f.info("查看图片",n);var D="";n.forEach(U=>{D+=`<li><img data-src="${U}"></li>`;});var M=r.parseHTML(`<ul>${D}</ul>`,false,false);let L=new Dt(M,{inline:false,url:"data-src",zIndex:(()=>{let U=h.getMaxZIndex(),q=N.config.InstanceUtils.getPopsMaxZIndex().zIndex;return h.getMaxValue(U,q)+100})(),hidden:()=>{L.destroy();}});L.zoomTo(1),L.show();}),r.on(p,"click",S=>{h.preventEvent(S),T.quitGestureBackMode();}),r.on(d,"click",S=>{h.preventEvent(S),window.open(t,"_blank");}),r.on(a,"click",S=>{h.preventEvent(S),u.contentWindow.location.reload(),this.checkIframeReadyState(u);}),this.checkIframeReadyState(u);},async handleForumPost(e){e.forEach(t=>{if(t.getAttribute("data-injection-small-window"))return;let n=r.text(t.querySelector(".mmlist_li_box h2 a"));(n==""||n==null)&&(n=r.text(t.querySelector(".mmlist_li_box a"))),n=n.trim();let i=t.querySelector(".mmlist_li_box a").href;var s=[];t.setAttribute("data-injection-small-window","true"),t.setAttribute("data-injection-small-window-url",i),t.setAttribute("data-injection-small-window-title",n),t.querySelectorAll(".comiis_pyqlist_img img").forEach(o=>{s.push(o.getAttribute("src"));}),t.querySelectorAll(".comiis_pyqlist_imgs img").forEach(o=>{s.push(o.getAttribute("src"));}),t.querySelectorAll(".mmlist_li_box a").forEach(o=>{o.removeAttribute("href"),o.setAttribute("data-href",i);});let l=t.querySelector(".mmlist_li_box");r.on(l,"click",function(o){var a=Number(o.clientX);document.body.offsetWidth/2>a?window.location.href=i:jt.showSmallWindow(n,i,s);});});},checkIframeReadyState(e){this.showRefreshIcon();let t=setInterval(()=>{e.contentWindow&&(clearInterval(t),r.createDOMUtils({document:e.contentWindow.document,window:e.contentWindow,globalThis:e.contentWindow,self:e.contentWindow,top}).ready(()=>{f.success("小窗内容已加载完毕"),this.hideRefreshIcon();}));},400);},hideRefreshIcon(){this.$el.$refreshIcon.style.display="none",this.$el.$webSiteIcon.style.display="";},showRefreshIcon(){this.$el.$refreshIcon.style.display="",this.$el.$webSiteIcon.style.display="none";}},Ie={init(){Z.ready(()=>{C.execMenuOnce("mt-guide-showLatestPost",()=>{this.showLatestPost();});});},showLatestPost(){f.info("显示最新帖子");async function e(){let t=await O.get("/forum.php?mod=guide&view=hot",{fetch:true,allowInterceptConfig:false});if(!t.status){x.error("获取轮播失败");return}if(t.data.responseText.indexOf('<script src="/_guard/auto.js"><\/script>')!==-1){x.error("获取轮播失败 未知的/_guard/auto.js文件");return}var n=Z.parseHTML(t.data.responseText,true,true),i=n.querySelectorAll('div.comiis_mh_kxtxt div[id*="comiis_mh_kxtxt"] ul');if(i.length===0){x.error("获取轮播失败");return}else {var s=[];i[i.length-1].querySelectorAll("a").forEach(l=>{s.push({href:l.getAttribute("href"),title:l.getAttribute("title")});});}return s}e().then(t=>{if(!t)return;G(`
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
            `);var n="";h.sortListByProperty(t,s=>{var l=s.href.match(/thread-(.+?)-/i);return parseInt(l[l.length-1])},true),f.info("导读内容",t),t.forEach(s=>{n+=`
                <li>
                    <span>新帖</span>
                    <a href="${s.href}" title="${s.title}" target="_blank">${s.title}</a>
                </li>`;});let i=document.querySelector(".comiis_forumlist.comiis_xznlist");Z.before(i,`<div class="comiis_mh_kxtxt bg_f comiis_mh_kxtxt_owm"><ul>${n}</ul></div>`);});}};class Gt{constructor(t){tt(this,"option");this.option=t;}async showView(){var o;let t=N.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist">
                            
                        </ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:true},btn:h.assign({ok:{callback:async()=>{await l();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
                ${N.config.cssText.panelCSS}
                
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

                ${((o=this.option)==null?void 0:o.style)??""}
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),n=t.$shadowRoot.querySelector(".rule-form-container");t.$shadowRoot.querySelector("input[type=submit]");let i=t.$shadowRoot.querySelector(".rule-form-ulist"),s=await this.option.getView(await this.option.data());i.appendChild(s);const l=async()=>{(await this.option.onsubmit(n,await this.option.data())).success&&(t.close(),await this.option.dialogCloseCallBack(true));};}}class Ee{constructor(t){tt(this,"option");this.option=t;}showView(){let t=N.alert({title:{text:this.option.title,position:"center"},content:{text:`
                <div class="filter-container"></div>
                `},btn:{ok:{text:"关闭",type:"default"}},drag:true,mask:{enable:true},width:window.innerWidth>500?"350px":"80vw",height:window.innerHeight>500?"300px":"70vh",style:`
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
            `}),n=t.$shadowRoot.querySelector(".filter-container"),i=document.createDocumentFragment();this.option.filterOption.forEach(s=>{let l=document.createElement("button");l.innerText=s.name;let o=async()=>{(await this.option.getAllRuleInfo()).forEach(async c=>{await s.filterCallBack(c.data)?r.show(c.$el,false):r.hide(c.$el,false);}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),t.close();};r.on(l,"click",async a=>{h.preventEvent(a),!(typeof s.callback=="function"&&!await s.callback(a,o))&&await o();}),i.appendChild(l);}),n.appendChild(i);}}class St{constructor(t){tt(this,"option");this.option=t;}async showView(t){var l,o,a,c,m,d,p,b,u;let n=N.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:true},btn:{merge:true,reverse:false,position:"space-between",ok:{enable:((a=(o=(l=this.option)==null?void 0:l.bottomControls)==null?void 0:o.add)==null?void 0:a.enable)||true,type:"primary",text:"添加",callback:async g=>{this.showEditView(false,await this.option.getAddData(),n.$shadowRoot);}},close:{enable:true,callback(g){n.close();}},cancel:{enable:((d=(m=(c=this.option)==null?void 0:c.bottomControls)==null?void 0:m.filter)==null?void 0:d.enable)||false,type:"default",text:"过滤",callback:(g,_)=>{var $,T,S,D,M,L,U;typeof((S=(T=($=this.option)==null?void 0:$.bottomControls)==null?void 0:T.filter)==null?void 0:S.callback)=="function"&&this.option.bottomControls.filter.callback();let k=()=>Array.from(n.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),v=_.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");r.text(v).includes("取消")?(k().forEach(q=>{r.show(q,false);}),r.text(v,"过滤")):new Ee({title:((M=(D=this.option.bottomControls)==null?void 0:D.filter)==null?void 0:M.title)??"过滤规则",filterOption:((U=(L=this.option.bottomControls)==null?void 0:L.filter)==null?void 0:U.option)||[],execFilterCallBack(){r.text(v,"取消过滤");},getAllRuleInfo:()=>k().map(w=>({data:this.parseRuleItemElement(w).data,$el:w}))}).showView();}},other:{enable:((u=(b=(p=this.option)==null?void 0:p.bottomControls)==null?void 0:b.clear)==null?void 0:u.enable)||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:g=>{let _=N.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async k=>{var $,T,S;if(f.success("清空所有"),typeof((S=(T=($=this.option)==null?void 0:$.bottomControls)==null?void 0:T.clear)==null?void 0:S.callback)=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){x.error("清理失败");return}else x.success("清理成功");await this.updateDeleteAllBtnText(n.$shadowRoot),this.clearContent(n.$shadowRoot),_.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
            ${N.config.cssText.panelCSS}
            
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
            `}),i=await this.option.data(),s=false;for(let g=0;g<i.length;g++){let _=i[g],k=await this.appendRuleItemElement(n.$shadowRoot,_);(typeof t=="function"?t(_):true)||(s=true,k.forEach($=>{r.hide($,false);}));}if(s){let g=n.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");r.text(g,"取消过滤");}}showEditView(t,n,i,s,l,o){let a=async m=>{if(m){if(typeof o=="function"){let d=await this.option.getData(n);o(d);}}else if(t||await this.option.deleteData(n),typeof l=="function"){let d=await this.option.getData(n);l(d);}};new Gt({title:t?"编辑":"添加",data:()=>n,dialogCloseCallBack:a,getView:async m=>await this.option.itemControls.edit.getView(m,t),btn:{ok:{enable:true,text:t?"修改":"添加"},cancel:{callback:async(m,d)=>{m.close(),await a(false);}},close:{callback:async(m,d)=>{m.close(),await a(false);}}},onsubmit:async(m,d)=>{let p=await this.option.itemControls.edit.onsubmit(m,t,d);return p.success?t?(x.success("修改成功"),i&&await this.updateRuleItemElement(p.data,s,i)):i&&await this.appendRuleItemElement(i,p.data):t&&f.error("修改失败"),p},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(t){let n=t.querySelector(".rule-view-container"),i=t.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:n,$deleteBtn:i}}parseRuleItemElement(t){let n=t.querySelector(".rule-controls-enable"),i=n.querySelector(".pops-panel-switch"),s=n.querySelector(".pops-panel-switch__input"),l=n.querySelector(".pops-panel-switch__core"),o=t.querySelector(".rule-controls-edit"),a=t.querySelector(".rule-controls-delete");return {$enable:n,$enableSwitch:i,$enableSwitchInput:s,$enableSwitchCore:l,$edit:o,$delete:a,data:Reflect.get(t,"data-rule")}}async createRuleItemElement(t,n){let i=await this.option.getDataItemName(t),s=r.createElement("div",{className:"rule-item",innerHTML:`
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
					${N.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${N.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(s,"data-rule",t);let l="pops-panel-switch-is-checked";const{$enable:o,$enableSwitch:a,$enableSwitchCore:c,$enableSwitchInput:m,$delete:d,$edit:p}=this.parseRuleItemElement(s);return this.option.itemControls.enable.enable?(r.on(c,"click",async b=>{let u=false;a.classList.contains(l)?(a.classList.remove(l),u=false):(a.classList.add(l),u=true),m.checked=u,await this.option.itemControls.enable.callback(t,u);}),await this.option.itemControls.enable.getEnable(t)&&a.classList.add(l)):o.remove(),this.option.itemControls.edit.enable?r.on(p,"click",b=>{h.preventEvent(b),this.showEditView(true,t,n,s,u=>{t=null,t=u;});}):p.remove(),this.option.itemControls.delete.enable?r.on(d,"click",b=>{h.preventEvent(b);let u=N.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async g=>{f.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(t)?(x.success("成功删除该数据"),s.remove(),await this.updateDeleteAllBtnText(n),u.close()):x.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):d.remove(),s}async appendRuleItemElement(t,n){let{$container:i}=this.parseViewElement(t),s=[],l=Array.isArray(n)?n:[n];for(let o=0;o<l.length;o++){let a=l[o],c=await this.createRuleItemElement(a,t);i.appendChild(c),s.push(c);}return await this.updateDeleteAllBtnText(t),s}async updateRuleContaienrElement(t){this.clearContent(t);const{$container:n}=this.parseViewElement(t);let i=await this.option.data();await this.appendRuleItemElement(t,i),await this.updateDeleteAllBtnText(t);}async updateRuleItemElement(t,n,i){let s=await this.createRuleItemElement(t,i);n.after(s),n.remove();}clearContent(t){const{$container:n}=this.parseViewElement(t);r.html(n,"");}setDeleteBtnText(t,n,i=false){const{$deleteBtn:s}=this.parseViewElement(t);i?r.html(s,n):r.text(s,n);}async updateDeleteAllBtnText(t){let n=await this.option.data();this.setDeleteBtnText(t,`清空所有(${n.length})`);}}const Me={$key:{STORAGE_KEY:"mt-own-block-rule"},$data:{isRegister:false},init(){this.registerMenu();let e=new h.LockFunction(()=>{this.runRule();});h.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{e.run();}});},registerMenu(){this.$data.isRegister||(this.$data.isRegister=true,j.registerLeftMenu({name:"我的屏蔽",icon:"",iconColor:"#000",callback:()=>{this.showView();}}));},getTemplateData(){return {uuid:h.generateUUID(),enable:true,name:"",data:{userName:"",userUID:"",userLevel:"",postUrl:"",postTitle:"",postContent:"",postPlateName:""}}},showView(){let e=N.config.panelHandleContentUtils();function t(i){return {get(s,l){return i[s]??l},set(s,l){i[s]=l;}}}new St({title:"我的屏蔽",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:i=>i.name,updateData:i=>this.updateData(i),deleteData:i=>this.deleteData(i),getData:i=>this.getData().find(o=>o.uuid===i.uuid)??i,itemControls:{enable:{enable:true,getEnable(i){return i.enable},callback:(i,s)=>{i.enable=s,this.updateData(i);}},edit:{enable:true,getView:(i,s)=>{let l=document.createDocumentFragment();s||(i=this.getTemplateData());let o=R("启用","enable",true);Reflect.set(o.props,P,t(i));let a=e.createSectionContainerItem_switch(o),c=H("规则名称","name","","",void 0,"必填");Reflect.set(c.props,P,t(i));let m=e.createSectionContainerItem_input(c),d=H("用户名","userName","","",void 0,"可正则");Reflect.set(d.props,P,t(i.data));let p=e.createSectionContainerItem_input(d),b=H("用户UID","userUID","","",void 0,"可正则");Reflect.set(b.props,P,t(i.data));let u=e.createSectionContainerItem_input(b),g=H("用户等级","userLevel","","",void 0,"可正则");Reflect.set(g.props,P,t(i.data));let _=e.createSectionContainerItem_input(g),k=H("帖子url","postUrl","","",void 0,"可正则");Reflect.set(k.props,P,t(i.data));let v=e.createSectionContainerItem_input(k),$=H("帖子标题","postTitle","","",void 0,"可正则");Reflect.set($.props,P,t(i.data));let T=e.createSectionContainerItem_input($),S=H("帖子内容","postContent","","",void 0,"可正则");Reflect.set(S.props,P,t(i.data));let D=e.createSectionContainerItem_input(S),M=H("帖子所在的板块名","postPlateName","","",void 0,"可正则");Reflect.set(M.props,P,t(i.data));let L=e.createSectionContainerItem_input(M);return l.appendChild(a),l.appendChild(m),l.appendChild(p),l.appendChild(u),l.appendChild(_),l.appendChild(v),l.appendChild(T),l.appendChild(D),l.appendChild(L),l},onsubmit:(i,s,l)=>{let o=i.querySelectorAll(".rule-form-ulist > li"),a=this.getTemplateData();return s&&(a.uuid=l.uuid),o.forEach(c=>{let m=Reflect.get(c,"__formConfig__"),d=Reflect.get(m,"attributes"),p=Reflect.get(c,P),b=Reflect.get(d,nt),u=Reflect.get(d,st),g=p.get(b,u);Reflect.has(a,b)?Reflect.set(a,b,g):Reflect.has(a.data,b)?Reflect.set(a.data,b,g):f.error(`${b}不在数据中`);}),a.name.trim()===""?(x.error("规则名称不能为空"),{success:false,data:a}):s?{success:this.updateData(a),data:a}:{success:this.addData(a),data:a}}},delete:{enable:true,deleteCallBack:i=>this.deleteData(i)}}}).showView();},runRule(){let e=this.getData();function t(n){for(const i of e){let s=i.data;if(Object.keys(s).find(o=>{let a=s[o];if(h.isNotNull(a)){let c=new RegExp(a,"i"),m=Reflect.get(n,o);if(typeof m=="string"&&h.isNotNull(m)&&m.match(c))return f.info("屏蔽",[s,m]),true}return  false}))return  true}return  false}(A.isGuide()||A.isPlate()||A.isPost())&&(this.getData(),document.querySelectorAll(".comiis_forumlist .forumlist_li").forEach(n=>{var o;let i=n.querySelector("a.top_user"),s=i.href.match(X.uid),l={userName:i.innerText,userUID:s[s.length-1].trim(),userLevel:n.querySelector("span.top_lev").innerText.replace("Lv.",""),postUrl:n.querySelector(".mmlist_li_box a").getAttribute("href")||n.querySelector(".mmlist_li_box a").getAttribute("data-href"),postTitle:((o=n.querySelector(".mmlist_li_box h2 a"))==null?void 0:o.innerText)||"",postContent:n.querySelector(".mmlist_li_box .list_body").innerText,postPlateName:(n.querySelector(".forumlist_li_time a.f_d")||n.querySelector(".comiis_xznalist_bk.cl")).innerText.replace(//g,"").replace(/\s*/g,"").replace(/来自/g,"")};h.isNull(l.postPlateName)&&(l.postPlateName=document.querySelector("#comiis_wx_title_box").innerText),t(l)&&n.remove();}),document.querySelectorAll(".comiis_postlist .comiis_postli").forEach(n=>{let i=n.querySelector("a.top_user"),s=i.href.match(X.uid),l={userName:i.innerText,userUID:s[s.length-1].trim(),userLevel:n.querySelector("a.top_lev").innerText.replace("Lv.",""),postUrl:void 0,postTitle:void 0,postContent:n.querySelector(".comiis_message_table").innerText,postPlateName:void 0};t(l)&&n.remove();})),A.isMessageList()&&(this.getData(),V(".comiis_pms_box .comiis_pmlist ul li").forEach(n=>{let i=n.querySelector("a.b_b").href.match(X.uid),s={userName:n.querySelector("h2").innerText.replace(n.querySelector("h2 span").innerText,"").replace(/\s*/,""),userUID:i[i.length-1].trim(),userLevel:void 0,postUrl:n.querySelector("a.b_b").href,postTitle:void 0,postContent:n.querySelector("p.f_c").innerText.trim(),postPlateName:void 0};t(s)&&n.remove();}));},getData(){return Q(this.$key.STORAGE_KEY,[])},setData(e){W(this.$key.STORAGE_KEY,e);},addData(e){let t=this.getData();return t.findIndex(i=>i.uuid==e.uuid)===-1?(t.push(e),W(this.$key.STORAGE_KEY,t),true):false},updateData(e){let t=this.getData(),n=t.findIndex(s=>s.uuid==e.uuid),i=false;return n!==-1&&(i=true,t[n]=e),this.setData(t),i},deleteData(e){let t=this.getData(),n=t.findIndex(s=>s.uuid==e.uuid),i=false;return n!==-1&&(i=true,t.splice(n,1)),this.setData(t),i},clearData(){ot(this.$key.STORAGE_KEY);}},Le={$el:{isFilterElementHTML:[]},$key:{STORAGE_KEY:"mt-post-comment-filter-rule"},init(){if(this.registerMenu(),A.isPost()){let e=this.getData();if(!e.enable)return;let t=new h.LockFunction(()=>{this.runFilter(e);});h.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{t.run();}});}},registerMenu(){j.registerLeftMenu({name:"评论过滤器",icon:"",iconColor:"#ff0019",callback:()=>{this.showView();}});},runFilter(e){let t=function(i){for(const s of e.userBlackList)if(s==i.userName||s==i.userUID)return f.success("评论过滤器：黑名单用户",i),true;return  false},n=function(i){for(const s of e.userWhiteList)if(s===i.userName||s===i.userUID)return f.success("评论过滤器：白名单用户",i),true;return  false};V(".comiis_postlist .comiis_postli").forEach(i=>{var a,c,m;if(i.querySelector("#comiis_allreplies"))return;let s=i.querySelector("a.top_user"),l=s.href.match(X.uid),o={userName:(s==null?void 0:s.innerText)||"",userUID:l&&((a=l[(l==null?void 0:l.length)-1])==null?void 0:a.trim())||"",content:((m=(c=i.querySelector(".comiis_message_table"))==null?void 0:c.innerText)==null?void 0:m.trim())||"",isAuthor:!!i.querySelector("span.top_lev")};if(!n(o)){if(e.replyFlag&&i.querySelector(".comiis_quote")){let d=i.querySelector(".comiis_quote");this.$el.isFilterElementHTML.push(d.outerHTML),d.remove();}if(!(o.isAuthor&&!e.avatarFlag)){if(t(o)){this.$el.isFilterElementHTML.push(i.outerHTML),i.remove();return}if(!(typeof e.minLength=="number"&&e.minLength>o.content.length)&&!(typeof e.keywordLength=="number"&&e.keywordLength<o.content.length))for(const d of e.keywords){if(typeof d!="string")continue;let p=new RegExp(d);if(o.content.match(p)){console.log("评论过滤器：",o),this.$el.isFilterElementHTML.push(i.outerHTML),i.remove();return}}}}});},showView(){const e=this;function t(s){return {get(l,o){let a=e.getData(),c=Reflect.get(a,l,o);return (l==="keywords"||l==="userWhiteList"||l==="userBlackList")&&(c=c.join(`
`)),c},set(l,o){(l==="keywords"||l==="userWhiteList"||l==="userBlackList")&&(o=o.split(`
`).filter(a=>a.trim()!="")),Reflect.set(s,l,o),e.setData(s);}}}let n=N.config.panelHandleContentUtils();new Gt({title:"评论过滤器",data:()=>this.getData(),getView:s=>{let l=document.createDocumentFragment(),o=R("启用","enable",true);Reflect.set(o.props,P,t(s));let a=n.createSectionContainerItem_switch(o),c=R("处理回复引用","replyFlag",false,void 0,"移除引用");Reflect.set(c.props,P,t(s));let m=n.createSectionContainerItem_switch(c),d=R("处理作者评论","avatarFlag",false);Reflect.set(d.props,P,t(s));let p=n.createSectionContainerItem_switch(d),b=R('处理从"搜索页面"或"我的帖子提醒页面"进入的网站',"viewthreadFlag",false);Reflect.set(b.props,P,t(s));let u=n.createSectionContainerItem_switch(b),g=H("匹配的评论内容长度最小值","minLength",5,"小于此长度的评论就算关键字匹配成功了也不会被排除",void 0,"",true);Reflect.set(g.props,P,t(s));let _=n.createSectionContainerItem_input(g),k=H("匹配的评论内容长度最大值","keywordLength",8,"大于此长度的评论就算关键字匹配成功了也不会被排除",void 0,"",true);Reflect.set(k.props,P,t(s));let v=n.createSectionContainerItem_input(k),$=dt("评论关键字","keywords","","多个关键字换行分割");Reflect.set($.props,P,t(s));let T=n.createSectionContainerItem_textarea($),S=dt("黑名单用户","userBlackList","","多个用户换行分割");Reflect.set(S.props,P,t(s));let D=n.createSectionContainerItem_textarea(S),M=dt("白名单用户","userWhiteList","","多个用户换行分割");Reflect.set(M.props,P,t(s));let L=n.createSectionContainerItem_textarea(M);return l.append(a,m,p,u,_,v,T,D,L),l},btn:{merge:true,position:"space-between",ok:{enable:false},cancel:{enable:true,text:"关闭"},other:{enable:true,text:`查看已过滤（${this.$el.isFilterElementHTML.length}）`,type:"primary",callback:(s,l)=>{console.log(this.$el.isFilterElementHTML),N.alert({title:{text:"评论过滤器-已过滤",position:"center"},content:{text:`
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
            `}).showView();},getTemplateData(){return {enable:true,avatarFlag:false,replyFlag:false,viewthreadFlag:false,minLength:5,keywordLength:8,keywords:[],userBlackList:[],userWhiteList:[]}},getData(){return Q(this.$key.STORAGE_KEY,this.getTemplateData())},setData(e){W(this.$key.STORAGE_KEY,e);}},Ae={$key:{STORAGE_KEY:"mt-productListingReminder-rule"},init(){this.registerMenu(),this.runRule();},registerMenu(){j.registerLeftMenu({name:"商品上架提醒",icon:"",iconColor:"#2376b7",callback:()=>{this.showView();}});},async runRule(){async function e(){let i=await O.get("/keke_integralmall-keke_integralmall.html",{fetch:true,allowInterceptConfig:false});if(!i.status){x.error("【积分商城】获取数据失败");return}let s=[];return r.parseHTML(i.data.responseText,true,true).querySelectorAll(".task-list-wrapper li.col-xs-12").forEach(o=>{var a,c;s.push({name:r.text(o.querySelector(".mall-info a > *:first-child"))||r.text(o.querySelector(".mall-info a")),price:r.text(o.querySelector(".mall-info span.discount-price i")),endTime:r.text(o.querySelector(".mall-info #time_hz span.time")),remainingQuantity:parseInt(((c=(a=o.querySelector(".mall-info .mall-count .count-r"))==null?void 0:a.innerText)==null?void 0:c.replace(/仅剩|件/gi,""))||"0")});}),s}if(A.isPointsMall())return;let t=this.getData();if(!t.length)return;let n=await e();if(n){for(const i of n)for(const s of t)if(s.enable&&i.name.match(new RegExp(s.productName,"i"))&&!isNaN(i.remainingQuantity)&&i.remainingQuantity>0){f.success("成功匹配对应商品",s,i),N.confirm({title:{text:"积分商城提醒",position:"center"},content:{text:`<br />
                            您设置的商品已上架在积分商城中，当前售价 ${i.price}金币，仅剩${i.remainingQuantity}件，是否前往购买？
                            <a style="color: red !important;">(如需关闭提醒，请删除该关键字)</a>
                            <br />`,html:true},btn:{merge:true,position:"space-between",other:{enable:true,type:"danger",text:"删除提醒",callback:()=>{this.deleteData(s)?x.success("删除成功"):x.error("删除失败");}},ok:{text:"前往购买",callback:()=>{window.location.href=`${window.location.origin}/keke_integralmall-keke_integralmall.html`;}}},width:"300px",height:"300px"});return}}},getTemplateData(){return {uuid:h.generateUUID(),enable:true,name:"",productName:""}},showView(){let e=N.config.panelHandleContentUtils();function t(i){return {get(s,l){return i[s]??l},set(s,l){i[s]=l;}}}new St({title:"商品上架提醒",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:i=>i.name,updateData:i=>this.updateData(i),deleteData:i=>this.deleteData(i),getData:i=>this.getData().find(o=>o.uuid===i.uuid)??i,itemControls:{enable:{enable:true,getEnable(i){return i.enable},callback:(i,s)=>{i.enable=s,this.updateData(i);}},edit:{enable:true,getView:(i,s)=>{let l=document.createDocumentFragment();s||(i=this.getTemplateData());let o=R("启用","enable",true);Reflect.set(o.props,P,t(i));let a=e.createSectionContainerItem_switch(o),c=H("规则名称","name","","",void 0,"必填");Reflect.set(c.props,P,t(i));let m=e.createSectionContainerItem_input(c),d=H("商品名","productName","","",void 0,"可正则，需手动转义");Reflect.set(d.props,P,t(i));let p=e.createSectionContainerItem_input(d);return l.append(a,m,p),l},onsubmit:(i,s,l)=>{let o=i.querySelectorAll(".rule-form-ulist > li"),a=this.getTemplateData();return s&&(a.uuid=l.uuid),o.forEach(c=>{let m=Reflect.get(c,"__formConfig__"),d=Reflect.get(m,"attributes"),p=Reflect.get(c,P),b=Reflect.get(d,nt),u=Reflect.get(d,st),g=p.get(b,u);Reflect.has(a,b)?Reflect.set(a,b,g):f.error(`${b}不在数据中`);}),a.name.trim()===""?(x.error("规则名称不能为空"),{success:false,data:a}):s?{success:this.updateData(a),data:a}:{success:this.addData(a),data:a}}},delete:{enable:true,deleteCallBack:i=>this.deleteData(i)}}}).showView();},getData(){return Q(this.$key.STORAGE_KEY,[])},setData(e){W(this.$key.STORAGE_KEY,e);},addData(e){let t=this.getData();return t.findIndex(i=>i.uuid==e.uuid)===-1?(t.push(e),W(this.$key.STORAGE_KEY,t),true):false},updateData(e){let t=this.getData(),n=t.findIndex(s=>s.uuid==e.uuid),i=false;return n!==-1&&(i=true,t[n]=e),this.setData(t),i},deleteData(e){let t=this.getData(),n=t.findIndex(s=>s.uuid==e.uuid),i=false;return n!==-1&&(i=true,t.splice(n,1)),this.setData(t),i},clearData(){ot(this.$key.STORAGE_KEY);}},Re={$key:{STORAGE_KEY:"mt-customizeUserLabels-rule"},init(){if(this.registerMenu(),A.isPage()||A.isGuide()||A.isPlate()||A.isPost()||A.isSearch()||A.isSpace()){let e=this.getData();if(!e.length)return;let t=new h.LockFunction(()=>{this.runRule(e);});h.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{t.run();}});}},registerMenu(){j.registerLeftMenu({name:"自定义用户标签",icon:"",iconColor:"#c70ea6",callback:()=>{this.showView();}});},showView(){let e=N.config.panelHandleContentUtils();function t(i){return {get(s,l){return i[s]??l},set(s,l){i[s]=l;}}}new St({title:"自定义用户标签",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:i=>i.name,updateData:i=>this.updateData(i),deleteData:i=>this.deleteData(i),getData:i=>this.getData().find(o=>o.uuid===i.uuid)??i,itemControls:{enable:{enable:true,getEnable(i){return i.enable},callback:(i,s)=>{i.enable=s,this.updateData(i);}},edit:{enable:true,getView:(i,s)=>{var D;let l=document.createDocumentFragment();s||(i=this.getTemplateData());let o=R("启用","enable",true);Reflect.set(o.props,P,t(i));let a=e.createSectionContainerItem_switch(o),c=H("规则名称","name","","",void 0,"必填");Reflect.set(c.props,P,t(i));let m=e.createSectionContainerItem_input(c),d=H("用户UID","userUID","","",void 0,"必填，可正则，注意转义");Reflect.set(d.props,P,t(i));let p=e.createSectionContainerItem_input(d),b=H("标签名","labelName","","",void 0,"必填");Reflect.set(b.props,P,t(i));let u=e.createSectionContainerItem_input(b),g=H("标签颜色","labelColor","","");Reflect.set(g.props,P,t(i));let _=e.createSectionContainerItem_input(g),k=_.querySelector("input");(D=_.querySelector(".pops-panel-input__suffix"))==null||D.remove(),k.setAttribute("type","color"),r.css(k,{margin:"unset",padding:"unset",width:"80px"});let v=H("标签CSS","labelStyle","","");Reflect.set(v.props,P,t(i));let $=e.createSectionContainerItem_input(v),T=dt("标签点击事件","labelClickEvent","","");Reflect.set(T.props,P,t(i));let S=e.createSectionContainerItem_textarea(T);return l.append(a,m,p,u,_,$,S),l},onsubmit:(i,s,l)=>{let o=i.querySelectorAll(".rule-form-ulist > li"),a=this.getTemplateData();return s&&(a.uuid=l.uuid),o.forEach(c=>{let m=Reflect.get(c,"__formConfig__"),d=Reflect.get(m,"attributes"),p=Reflect.get(c,P),b=Reflect.get(d,nt),u=Reflect.get(d,st),g=p.get(b,u);Reflect.has(a,b)?Reflect.set(a,b,g):f.error(`${b}不在数据中`);}),a.name.trim()===""?(x.error("规则名称不能为空"),{success:false,data:a}):a.userUID.trim()===""?(x.error("用户UID不能为空"),{success:false,data:a}):a.labelName.trim()===""?(x.error("标签名不能为空"),{success:false,data:a}):s?{success:this.updateData(a),data:a}:{success:this.addData(a),data:a}},style:`
                    .pops-panel-textarea textarea{
                        height: 150px;
                    }
                    `},delete:{enable:true,deleteCallBack:i=>this.deleteData(i)}}}).showView();},runRule(e){let t=h.getNodeListValue(j.comiisForumList(),j.comiisPostli(),j.comiisMmlist());t.length&&t.forEach(n=>{if(n.hasAttribute("data-custom-label"))return;n.setAttribute("data-custom-label","true");let i=Array.from(n.querySelectorAll("a")).map(s=>{let o=s.href.match(X.uid);if(o)return o[o.length-1]}).filter(s=>s!=null);if(i.length){let s=i[0],l=e.filter(c=>c.enable&&s.match(new RegExp(c.userUID)));if(!l.length)return;let o=document.createElement("a"),a=n.querySelector(".top_lev");l.forEach(c=>{o.className=a.className,o.classList.add("gm-custom-label"),o.style.cssText=`
                    background: ${c.labelColor} !important;${c.labelStyle||""}`,o.innerHTML=c.labelName,r.on(o,"click",async m=>{h.preventEvent(m),h.isNotNull(c.labelClickEvent)&&y.eval(c.labelClickEvent);}),a.parentElement.append(o);});}});},getTemplateData(){return {uuid:h.generateUUID(),enable:true,name:"",userUID:"",labelName:"",labelColor:"",labelStyle:"",labelClickEvent:""}},getData(){return Q(this.$key.STORAGE_KEY,[])},setData(e){W(this.$key.STORAGE_KEY,e);},addData(e){let t=this.getData();return t.findIndex(i=>i.uuid==e.uuid)===-1?(t.push(e),W(this.$key.STORAGE_KEY,t),true):false},updateData(e){let t=this.getData(),n=t.findIndex(s=>s.uuid==e.uuid),i=false;return n!==-1&&(i=true,t[n]=e),this.setData(t),i},deleteData(e){let t=this.getData(),n=t.findIndex(s=>s.uuid==e.uuid),i=false;return n!==-1&&(i=true,t.splice(n,1)),this.setData(t),i},clearData(){ot(this.$key.STORAGE_KEY);}},De={init(){r.ready(()=>{C.execMenuOnce("mt-forum-post-publish-editorOptimization",()=>{ht.init();});});}},Pe={$flag:{showUserUID_initCSS:false},init(){(A.isPage()||A.isGuide()||A.isPlate()||A.isPost()||A.isSearch()||A.isSpace())&&C.execMenuOnce("mt-show-user-uid",()=>{this.showUserUID();}),(A.isSearch()||A.isGuide()||A.isSpace()||A.isPlate())&&C.execMenuOnce("mt-small-window",()=>{jt.init();}),A.isPost()?(f.info("Router: 帖子"),Ot.init()):A.isSearch()?(f.info("Router: 搜索"),ke.init()):A.isKMiSign()?(f.info("Router: 签到"),$e.init()):A.isSpace()||A.isSpaceWithAt()?(f.info("Router: 空间"),Se.init()):A.isGuide()?(f.info("Router: 导读"),Ie.init()):A.isPostPublish()?(f.info("Router: 发帖页面"),De.init()):f.error("Router: 未适配的链接 ==> "+window.location.href),r.ready(()=>{C.execMenuOnce("mt-black-home",()=>{xe.init();}),C.execMenuOnce("mt-online-user",()=>{ve.init();}),C.execMenuOnce("mt-post-paidThemePost",()=>{mt.init();}),C.execMenuOnce("mt-ownBlock",()=>{Me.init();}),C.execMenuOnce("mt-post-comment-filter",()=>{Le.init();}),C.execMenuOnce("mt-productListingReminder",()=>{Ae.init();}),C.execMenuOnce("mt-customizeUserLabels",()=>{Re.init();}),C.execMenuOnce("mt-link-text-to-hyperlink",()=>{qe();}),C.execMenu("mt-auto-sign",()=>{gt.init();}),C.execMenu("mt-extend-cookie-expire",()=>{this.extendCookieExpire();});});},showUserUID(){f.info("显示用户UID"),this.$flag.showUserUID_initCSS||(this.$flag.showUserUID_initCSS=true,G(`
			.postli_top_tximg + h2{
 				height: auto;
			}
			.comiis_postli_top.bg_f.b_t h2{
            	height: auto;
          	}
			`));let e=new h.LockFunction(()=>{let t=h.getNodeListValue(j.comiisForumList(),j.comiisPostli(),j.comiisMmlist());t.length&&t.forEach(n=>{if(n.querySelector(".gm-custom-label-uid"))return;let s=Array.from(n.querySelectorAll("a")).map(l=>{let a=l.href.match(X.uid);if(a)return a[a.length-1]}).filter(l=>l!=null);if(s.length){let l=s[0],o=document.createElement("a"),a=n.querySelector(".top_lev");o.className=a.className,o.classList.add("gm-custom-label-uid"),o.style.cssText="background: #FF7600 !important;",o.innerHTML="UID:"+l,r.on(o,"click",async c=>{h.preventEvent(c),await h.setClip(l)?x.success(`${l}已复制`):x.error(`${l}复制失败`);}),a.parentElement.append(o);}});});h.mutationObserver(document,{config:{subtree:true,childList:true},callback(){e.run();}});},async extendCookieExpire(){f.info("延长cookie有效期");let e=await Ct.cookie.list({}),t=["_auth","_saltkey","_client_created","_client_token"];e.forEach(async n=>{if(n.session)return;let i=n.expirationDate,s=Date.now()/1e3;if(i<s)return;let l=60*60*24*30;i-s>l||!t.find(a=>n.name.endsWith(a))||Ct.cookie.set({name:n.name,value:n.value,expirationDate:n.expirationDate+l}).then(()=>{f.info(`延长Cookie +30天成功：${n.name}`);}).catch(()=>{f.error(`延长Cookie +30天失败：${n.name}`);});});}};C.init();Pe.init();});ze();

})(Qmsg, DOMUtils, Utils, pops, Viewer, hljs);