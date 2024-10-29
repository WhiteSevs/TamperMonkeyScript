// ==UserScript==
// @name         【移动端】MT论坛优化
// @namespace    https://greasyfork.org/zh-CN/scripts/401359
// @version      2024.10.29
// @author       WhiteSevs
// @description  MT论坛效果增强，如自动签到、自动展开帖子、滚动加载评论、显示UID、自定义屏蔽、手机版小黑屋、编辑器优化、在线用户查看、便捷式图床、自定义用户标签、积分商城商品上架提醒等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAADptJREFUeF7tnQtwVNUZx/9nN5CQgCG8QoAdE3lFeWQDGAK+ikKCQGtHBHlJQeVRrTICJQUrgggkUhiRdIRgyBahpThWEHAob6mCVCApCIUQGiDKK0ACEUMMe2/n3E1Ckt279557d+8mN+fMMJlhv/Od7/vO737ncc+eJdBRLuRfSAbwa0JIogjRrkNVvapKQA6JEL8iVrLSZrPl1SvjaxlLtBp/Pv/8LEJImtb6ZqlHCHnddr9tRX31RxMA+fn5v7AS69766rSv7XaKzgExMTH7fK3XCH3MAJw6dapZaHDoYRB0McLAetGGiFxbtK0HIeTnemFvNSOZAfDV03/rjgWzt7RFeIgTc5IK0TRYMDR2RaVWLNrRGoJAMOPJa2gXXq6rfafojImJiTmnS0kAKjMDcOHchRkA/qTX1vzrjfHHbZGSmqcfKsG4PsV6VTLV/+DLljh0PlSq89rj15EY/RNT/drCFlj6d4jucFCXkgBUZgbgfP75eYSQt/XaKorA/O1tcKYwGFaLiN8+cgP9YvR1glqbjn7fBEv3tJLEI0KdWDjsMsJD9GWg+joPCBgANPh3BYJpn0ahuNSKmJY/45VHbyim4uu3rbh2OwiVf0MbCWgZ5kSrsLvS39DG3jvy8q0g/GFLW5Q7Ce4LEfD6E9fwYGSZWnZk5TgAGkN4pKAJlu11PY2Pd7yNKY/cqKHp++JGOH4xBMcq/ik1Q8fy3rZSdI8qQ2xkGYIsYo0qqbtaS/poGdunGEMeKlFSqepzDoCqMHkWchyKwM7TTaUPX3i4GIMfLMGXeWHYk9sUedcaa9Yc3sSJPrZSJMX+iA7Ny7ExOxybj98n6esf8xNefey6Zt21K3IAdIZy5qYoXLoVhLDGAlqFOXG+qJFOjfeqBweJUprP+cH15EfddxcLhl5Bk0b6xv3qBnIAdHYXTcs0PRtRUgYWome7Oz5tigOgI5wFxY2Qvr8l6HhvRHms421MrTXX0NsuB0BjBOlanK7JjS50srjkmcs+a5YDoCGUW080w9+ONNdQ0zdV6HwjY9QPPlFGAYg+E1MMCy6RgbjiE6UGKAnYPgCd5WccaGGAi96bSLi/FNOeuKbbjjYFY38MLv3atZQRcQwWfI5ywUGG4Kxu5X5UEBAAvrsUgrRdrSHUXKL70U3vqod1K8Ho3vq2otsUjEJw6Tc1GxJRAoIsEMFBBiE7YA56aTggANB3APRdQF0qLyUW4ckuP2o2ySMANbU5AMFBkvCl5kb8UNFwAOjmTuY3EbKuPB4LJHYCmoYAl4uBHceBPI0jarf2wFPdAVtL4FwhsOUocEFm74duRb87VGNDAFQAUOGz+BlESxZJdm7xQ38yqzQcAG9P//AEYBo9ZFatOAXgpdXA/66y+dbDBvx5Qs065U5gdDpw9ZZnXXqygHoAKtsWd8NiySIDnevZPPOttKEAKD39ayYDnVxviGuUj78CVjOeP0r5JTDUwynFVXuA9V97DqKeLMAOQKUN5FuIogPNhCzSH6W+7V5lbYYC8PYXkV739jdPByLC3I3+IgdIZUyYaaOAfp3ddX36LbB8u3xgXnn0Oh55gP21tHYAKmwhOA0BDliFLCOXkYYBQHf5Uj5v6xXJzElAZw8ia/8FfMR44k4uA2TsAdbJZABqHO18CgFr0Q3AvQYvAXBIS8ihyGW1g1XeMAB2nGqKv/xbfvJHDX+mNzBjSE0X7pQDL38EXGBcqneMdM0BQqstNgpLgEkfATe8TPbp0bRVz7NvDvkQgMoA3JZAcK0cDrN2rFp5wwB4959t8N8rwYp20RVA344Vq4CbwM7j8jN3JWVRzYHBcS4pQQA2HQFuqsjuWl4W+QGA6u59DNHiIMl39yj5zPq5IQDQ0zcT1ndgtS1g8r/qfgvP97rJ1L6fAXDZQsTNECgIzk1MxnkRNgQAegxrxqYoX9nsdz1aDosYAkCV5+I+EEsWGeRcqzcYhgBAt34X7zTmXb/egND6XduUYe5gto0HYwGo8FLEUViQhSDBQQZA0zamIQDUlRc/auGgh0s/GH5RrbgkFxAA7lmYBxEOECGLJIHJcEMAUDsBZIq4n4XXjy9gaiHAAFTaStOWA6KQRZJxSo0DHgHo2bNnDCHEwzYKMHny5Bc6tO8wTo3ySpl//CccuYX+efkjlpcAZUWwtn4YljAbYPHNqaJ6CkBlyOl5NwqCgyTjkLe+qgGA3W5/GcBqls6tU7LWEDR+YCSCe7yh26x6DsA9/0X8FZCWkDs9BaUKALvdvhXAUN2RqwMKLOGdEfbkBoBYNFtjGgDurRw+hyj+jiSjxtgmAWC326cBeF9ztOpgRWubRIT2/0DzkGA+ACo6ySJ0IwNxsrLLKgGoI2dzfEtSUNQTaJKQClhd3wdgKaYFADhBkoTuVQDExcUlEEK8ThRYAlfXZIPaPoqQhFSQIA+vGb0Ya2IA6JnF+SRZmEfdJ3FxcS8SQjLrWsf50p6gyH4uCBq5vhamppgaAIK1ZJDwmwYDAHXU2joBTRLSQILVHUM3NQAQ95EkcUCDAkCCoFVvFwQhyl9EMTUADW0IqJ7yrS3tLgiatPE6EpgaAJBnSZLzswaXASp73NqiB0IS0mAJlX9DaWIAvkMjIZ4MwN0GC4A0HEQ85IIgzPM5BdMCIOL3JFmouuOpQawC5HK9pdkDCI5LgSWsvZvI+8/So3nqS8tLr6PxnTr55R/JifYtpBvsvq94+qsO2DVoANR3rzkku9t+OvldQeirOTk5VUdsOQDm6FsmLwgh6dnZ2a816DkAU8RMKEwIGZ2dnb2BZwATdq5Klw7l5OQkUgDmEkLmq6zExUwUAUEQYikAmYSQF03kF3dFZQQIIWMoAGsIIRNV1uFiJoqAKIovcABM1KGsrnAAWCNmMnkOgMk6lNUdDgBrxEwmzwEwWYeyusMBYI2YyeQ5ACbrUFZ3OACsETOZvF8AWL3a+zfLrl69ijfffFNzKMeMGYMBA6TzjLJl0qRJmvV7q6jkm18araV01apVOHzYNzfG+AWA7GzlQxFvvfUWtm6l30RjK507d8bGjRsVK8XHxyvKaBFQ45sWvSx1KNz1HoCSkhI899xzoNmApWRmZqJXr16KVTgAiiGSBAKWAWjjO3bsQEpKijpLAUydOhVTpkxRJc8BUBWmwAJATZw3bx42b96saG3fvn2xcuVKRblKAQ6AulAFNANQE0tLS0EndefOyf/iarNmzZCVlYWOHTuq8woAB0BdqAIOADVz9+7dmDlzpqzFdJgYNWqUOo8qpIwGQGlS1qdPHzf7tdShSkwxCawdjbS0NGzYsMEtSEOGDMHChQuZOp8KGw0AHZ7o8sxToUtHOQDklqt0rkPnPJ5KvQWgrKwMwcGebwotLy/HhAkTcPJk1b0FiI6ORkZGBlq39ny9nDd9HAB1z4yhQwB9SuSopubu378f06bRi0pcJTU1FcnJtX48oJpf3vT5C4Bt27ahXbt2btGdP38+Nm3yfHmnlgwwduxY2WFx9OjROHVK1QVgihQYDkCLFi0wcuRIWcNWrFiBNWvWYPz48XjjDfmLnuhm0I0bN2SB8hcAnuYjd+7cwcSJE2U7RQsAiYmJ+PDDD93idPHiRQwfPhy0TV8UwwGg4+Qnn3yCTp06ebRfEARprZ+eni47XOTl5WHEiBGSnFxG8RcAbdu2xZIlS9C9e9UNK9LyVG78p05qAYDWq+0fXSktX74c+/Yx3pvvhZSAANCtWzesW7dO1iw6O/Y0aaqsMG7cOJw4cSIgAFAb6DyGDk0RERE4c+YMDhw44PVh1AoAVdq/f3/Q7e+ioiJpiCwu1vfLZrUNDQgA1AjaiTNmzGDOYkuXLq2CJxAZgNlgHRlAS1usdQIGADV02bJlim/1qju0d+9eTJ8+veq/OACs3e0uH1AAbDYb1q5di+bNle/soamPTgwLCu7dccgBqOcAUPOHDRuGBQsWKHri6fUxB0AxbIoCAc0AldbNmTNHmtXLFbpqWLRokdvHHADF/lUUqBMAhIeHSzt+Xbp0cTM4NzeX3k6Omzfdf76FA6DYv4oCdQIAaqWWpRIHQLF/FQU4AIoh0i+gBW79rarTUGcAoO8A6Mug2sXhcEi7X54KzwDqOtmbVJ0BgBrp6cClty1dDoDJAKDu0N3B2NhY6cUK3fXzVjgAJgSAxSUOAEu0PMvWqSGA1R0OAGvE3OU5APpjqKiBrwIqQqT03lwxkrUEeAZgjRjPAPojpkEDzwA8AzCfCtbAmaYqfA6gKWxslXgG4BmAZwDKAJ8E1swc9Oyjv+4xUJuj+BCgNlI65PgQwIcAPgTwIcDzl0P5EKAjtfKNIB3Bq6jK5wD6Y6iogc8B+ByAzwH4HIDPAfg+QK3Bgu8DKI6e3gX4JFBnAI2+Jo7vBPKdQK/fo2flmWcA1ojx8wD6I6ZBA18G8mUgXwbyZSBfBvJlIF8Ger9MiXV45ZNA1ogZNAmkN3527drVrbXZs2dj+/bt+q2u0DB48GAsXrzYTd/p06eZr5b1mVEeFMlddUvjRG9IDWTxy8sgT09mYWEhkpKSfO4rvXK+9k2ivt5v0Gs0vfHM0y+N+PLKV602+gUAasygQYOka9wiIyNx8OBBzJo1S6uNivXee+899OvXD1euXJH2GXbu3KlYx2gBetP53Llz0bNnTxw7dgzvvPMOzp49a7QZbu35DYCAe8YNUBUBDoCqMJlXiANg3r5V5RkHQFWYzCvEATBv36ryjAOgKkzmFeIAmLdvVXnGAVAVJvMKcQDM27eqPOMAqAqTeYU4AObtW1WecQBUhcm8QhIAdrs9HcCr5nWTeyYXAULICBIfH/+UKIq7eJgaXgQIIdGEum2324sAKP92S8OLkZk93pWTkzNIAiAuLm4+IWSumb3lvtWMgMViefro0aPbJQBoiY+P3y6KovxvtfIImiYChJDZ2dnZqdShKgAqMsEAQgg9aNcbQJBpPOaO0AicB/B3q9WaceTIkarjSP8HC+OZoHXD4j8AAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://bbs.binmt.cc/*
// @exclude      /^http(s|)://bbs.binmt.cc/uc_server.*$/
// @require      https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/452322/1470429/js-watermark.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.5/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.4.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.3.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.8.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.6/dist/viewer.min.js
// @require      https://fastly.jsdelivr.net/npm/@highlightjs/cdn-assets@11.10.0/highlight.min.js
// @resource     HljsCSS    https://fastly.jsdelivr.net/npm/highlight.js@11.10.0/styles/github-dark.min.css
// @resource     ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.6/dist/viewer.min.css
// @connect      *
// @connect      helloimg.com
// @connect      z4a.net
// @connect      kggzs.cn
// @connect      woozooo.com
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

(function (Qmsg, DOMUtils, Utils, pops, hljs, Viewer) {
	'use strict';

	var D=Object.defineProperty;var O=(t,e,i)=>e in t?D(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var B=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var P=(t,e,i)=>O(t,typeof e!="symbol"?e+"":e,i);var z=B((exports,module)=>{var _GM_deleteValue=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,_GM_getResourceText=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,_GM_getValue=typeof GM_getValue<"u"?GM_getValue:void 0,_GM_info=typeof GM_info<"u"?GM_info:void 0,_GM_registerMenuCommand=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,_GM_setValue=typeof GM_setValue<"u"?GM_setValue:void 0,_GM_unregisterMenuCommand=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,_GM_xmlhttpRequest=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,_unsafeWindow=typeof unsafeWindow<"u"?unsafeWindow:void 0,_monkeyWindow=window;const HttpxCookieManager={$data:{get enable(){return PopsPanel.getValue("httpx-use-cookie-enable")},get useDocumentCookie(){return PopsPanel.getValue("httpx-use-document-cookie")},cookieRule:[{key:"httpx-cookie-bbs.binmt.cc",hostname:/bbs.binmt.cc/g}]},fixCookieSplit(t){return utils.isNotNull(t)&&!t.trim().endsWith(";")&&(t+=";"),t},concatCookie(t,e){return utils.isNull(t)?e:(t=t.trim(),e=e.trim(),t=this.fixCookieSplit(t),e.startsWith(";")&&(e=e.substring(1)),t.concat(e))},handle(t){if(t.fetch||!this.$data.enable)return;let e="",i=t.url;i.startsWith("//")&&(i=window.location.protocol+i);let s=new URL(i);this.$data.useDocumentCookie&&s.hostname.endsWith(window.location.hostname.split(".").slice(-2).join("."))&&(e=this.concatCookie(e,document.cookie.trim()));for(let n=0;n<this.$data.cookieRule.length;n++){let l=this.$data.cookieRule[n];if(s.hostname.match(l.hostname)){let o=PopsPanel.getValue(l.key);if(utils.isNull(o))break;e=this.concatCookie(e,o);}}utils.isNotNull(e)&&(t.headers&&t.headers.Cookie?t.headers.Cookie=this.concatCookie(t.headers.Cookie,e):t.headers.Cookie=e,log.info(["Httpx => 设置cookie:",t])),t.headers&&t.headers.Cookie!=null&&utils.isNull(t.headers.Cookie)&&delete t.headers.Cookie;}},CommonUtils={addBlockCSS(...t){let e=[];t.length!==0&&(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""||(t.forEach(i=>{Array.isArray(i)?e=e.concat(i):e.push(i);}),addStyle(`${e.join(`,
`)}{display: none !important;}`)));},setGMResourceCSS(t){let e=typeof _GM_getResourceText=="function"?_GM_getResourceText(t.keyName):"";typeof e=="string"&&e?addStyle(e):CommonUtils.addLinkNode(t.url);},async addLinkNode(t){let e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=t,domUtils.ready(()=>{document.head.appendChild(e);});},fixUrl(t){return t=t.trim(),t.match(/^http(s|):\/\//i)||(t.startsWith("/")||(t+="/"),t=window.location.origin+t),t},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;let e=new URL(t);return e.protocol="https:",e.toString()}},GM_RESOURCE_MAP={ElementPlus:{keyName:"ElementPlusResourceCSS",url:"https://fastly.jsdelivr.net/npm/element-plus@latest/dist/index.min.css"},Viewer:{keyName:"ViewerCSS",url:"https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"},Hljs:{keyName:"HljsCSS",url:"https://fastly.jsdelivr.net/npm/highlight.js@latest/styles/github-dark.min.css"}};(function(t,e){typeof exports=="object"&&typeof module<"u"?module.exports=e():(t=typeof globalThis<"u"?globalThis:t||self,t.Watermark=e(t.Watermark));})(typeof window<"u"?window:void 0,function(t){let e=function(){};CanvasRenderingContext2D.prototype.letterSpacingText=function(o,a,r,c){var m=this,p=m.canvas;if(!c&&p&&(c=parseFloat(window.getComputedStyle(p).letterSpacing)),!c)return this.fillText(o,a,r);var g=o.split(""),d=m.textAlign||"left",u=m.measureText(o).width,h=u+c*(g.length-1);d=="center"?a=a-h/2:d=="right"&&(a=a-h),m.textAlign="left",g.forEach(function(y){var _=m.measureText(y).width;m.fillText(y,a,r),a=a+_+c;}),m.textAlign=d;},CanvasRenderingContext2D.prototype.wrapText=function(o,a,r,c,m,p){if(!(typeof o!="string"||typeof a!="number"||typeof r!="number")){var g=this,d=g.canvas;typeof c>"u"&&(c=d&&d.width||300),typeof m>"u"&&(m=d&&parseInt(window.getComputedStyle(d).lineHeight)||parseInt(window.getComputedStyle(document.body).lineHeight));for(var u=o.split(""),h="",y=0;y<u.length;y++){var _=h+u[y],x=g.measureText(_),S=x.width;S>c&&y>0?(p?g.strokeText(h,a,r,d.width):g.fillText(h,a,r),h=u[y],r+=m):h=_;}p?g.strokeText(h,a,r,d.width):g.fillText(h,a,r);}},CanvasRenderingContext2D.prototype.fillTextVertical=function(o,a,r){var c=this;c.canvas;var m=o.split(""),p=m.map(function(u){return c.measureText(u).width}),g=c.textAlign,d=c.textBaseline;g=="left"?a=a+Math.max.apply(null,p)/2:g=="right"&&(a=a-Math.max.apply(null,p)/2),d=="bottom"||d=="alphabetic"||d=="ideographic"?r=r-p[0]/2:(d=="top"||d=="hanging")&&(r=r+p[0]/2),c.textAlign="center",c.textBaseline="middle",m.forEach(function(u,h){var _=p[h],y=u.charCodeAt(0);y<=256?(c.translate(a,r),c.rotate(90*Math.PI/180),c.translate(-a,-r)):h>0&&o.charCodeAt(h-1)<256&&(r=r+p[h-1]/2),c.fillText(u,a,r),c.setTransform(1,0,0,1,0,0);var _=p[h];r=r+_;}),c.textAlign=g,c.textBaseline=d;};function i(o){let a=new FileReader;return new Promise(r=>{a.onloadend=async function(c){r(c);},a.readAsDataURL(o);})}function s(o){let a=new Image;return new Promise(r=>{a.onload=()=>{r(a);},a.src=o;})}function n(o,a,r){let c=!1;return Array.from(o).forEach(m=>{if(m.x==a&&m.y==r){c=!0;return}}),c}function l(o){return o instanceof Array?o[Math.floor(Math.random()*o.length)]:o}return e.prototype.setFile=function(o){let a=this;return new Promise(async r=>{try{var c=await i(o);await a.setImage(c.target.result),r(!0);}catch{r(!1);}})},e.prototype.setImage=function(o){this.dataUrl=o;let a=this;return new Promise(async r=>{var c=await s(o);a.sizes={width:c.width,height:c.height};var m=document.createElement("canvas");m.width=a.sizes.width,m.height=a.sizes.height;var p=m.getContext("2d");p.drawImage(c,0,0),c=null,a.canvas=m,r(!0);})},e.prototype.hasImage=function(){return !!this.dataUrl},e.prototype.getSize=function(){return this.sizes},e.prototype.clearMark=function(){let o=this;if(typeof o.canvas>"u")return;function a(){var r=o.canvas.getContext("2d");r.clearRect(0,0,o.canvas.width,o.canvas.height);var c=o.canvas.width,m=o.canvas.height;o.canvas.width=c,o.canvas.height=m,r.beginPath();var p=new Image;p.src=o.dataUrl,r.drawImage(p,0,0),p=null;}a();},e.prototype.addText=function(o){var a={text:["Call By waterMark.addText"],fontSize:"6vw",fontFamily:"Microsoft Yahei",color:"#000000",textAlign:"center",stroke:!1,globalAlpha:.7,rotateAngle:50,maxWidth:100,xMoveDistance:30,yMoveDistance:30};for(let U in a)typeof o[U]<"u"&&(a[U]=o[U]);a.maxWidth=parseInt(a.maxWidth)>0?a.maxWidth:1,a.xMoveDistance=parseInt(a.xMoveDistance)>0?a.xMoveDistance:1,a.yMoveDistance=parseInt(a.yMoveDistance)>0?a.yMoveDistance:1;var r=this.canvas.getContext("2d"),c=a.fontSize;c=c.toString(),~c.indexOf("vw")&&(c=(this.sizes.width/100*parseInt(c)).toFixed(0)),c=parseInt(c),r.font=c+"px "+a.fontFamily,r.fillStyle=a.color,r.textAlign=a.textAlign,r.globalAlpha=a.globalAlpha;let m=this.sizes.width,p=this.sizes.height,g=a.rotateAngle*Math.PI/180,d=a.xMoveDistance,u=a.yMoveDistance,h=a.maxWidth,y=c,_=[];for(var x=m/2;x<m;x+=d){for(var S=p/2;S<p;S+=u)n(_,x,S)||(_=_.concat({x,y:S}),r.setTransform(1,0,0,1,0,0),r.translate(x,S),r.rotate(g),r.wrapText(l(a.text),0,0,h,y,a.stroke));for(var v=p/2;v>0;v-=u)n(_,x,v)||(_=_.concat({x,y:v}),r.setTransform(1,0,0,1,0,0),r.translate(x,v),r.rotate(g),r.wrapText(l(a.text),0,0,h,y,a.stroke));}for(var x=m/2;x>0;x-=d){for(var S=p/2;S<p;S+=u)n(_,x,S)||(_=_.concat({x,y:S}),r.setTransform(1,0,0,1,0,0),r.translate(x,S),r.rotate(g),r.wrapText(l(a.text),0,0,h,y,a.stroke));for(var v=p/2;v>0;v-=u)n(_,x,v)||(_=_.concat({x,y:v}),r.setTransform(1,0,0,1,0,0),r.translate(x,v),r.rotate(g),r.wrapText(l(a.text),0,0,h,y,a.stroke));}},e.prototype.addPixelText=function(o){var a={text:"像素文字水印",big:{fontSize:150,fontFamily:"微软雅黑",textAlign:"center",rotateAngle:0,stroke:!1},small:{fontSize:10,fontFamily:"微软雅黑",color:"#000",textAlign:"center",globalAlpha:.7}};for(let x in a)typeof o[x]<"u"&&(a[x]=o[x]);var r=this.canvas.getContext("2d"),c=document.createElement("canvas"),m=c.getContext("2d");c.width=this.sizes.width,c.height=this.sizes.height,m.font=a.big.fontSize+"px "+a.big.fontFamily,m.textAlign=a.big.textAlign,m.textBaseline="middle",m.translate(c.width/2,c.height/2),m.rotate(a.big.rotateAngle*Math.PI/180),m.translate(-c.width/2,-c.height/2),a.big.stroke?m.strokeText(a.text,c.width/2,c.height/2,c.width):m.fillText(a.text,c.width/2,c.height/2);for(var p=a.text.split(""),g=m.getImageData(0,0,c.width,c.height),d=[],u=0;u<c.height;u+=a.small.fontSize)for(var h=0;h<c.width;h+=a.small.fontSize){var y=h+u*c.width,_=g.data[y*4+3];_>128&&d.push({text:l(p),x:h,y:u});}r.font=a.small.fontSize+"px "+a.small.fontFamily,r.fillStyle=a.small.color,r.textAlign=a.small.textAlign,r.textBaseline="middle",r.globalAlpha=a.small.globalAlpha,d.forEach(x=>{r.fillText(x.text,x.x,x.y);});},e.prototype.addImage=function(o){if(o.imageArray==null)return alert("参数缺少imageArray"),!1;if(o.imageArray.length===0)return alert("参数imageArray不能为空"),!1;let a={imageArray:[],width:50,height:50,globalAlpha:.5,rotateAngle:0,xMoveDistance:70,yMoveDistance:70};for(let k in a)typeof o[k]<"u"&&(a[k]=o[k]);a.width=parseInt(a.width)>0?a.width:1,a.height=parseInt(a.height)>0?a.height:1,a.xMoveDistance=parseInt(a.xMoveDistance)>0?a.xMoveDistance:1,a.yMoveDistance=parseInt(a.yMoveDistance)>0?a.yMoveDistance:1;let r=this.canvas.getContext("2d"),c=[],m=parseInt(Math.sqrt(a.width*a.width+a.height*a.height)),p=this.sizes.width,g=this.sizes.height,d=a.rotateAngle*Math.PI/180,u=a.xMoveDistance,h=a.yMoveDistance,y=p/2-m/2,_=g/2-m/2,x=(m-a.width)/2,S=(m-a.height)/2;Array.from(a.imageArray).forEach(k=>{var q=document.createElement("canvas"),M=q.getContext("2d");q.width=m,q.height=m,M.globalAlpha=a.globalAlpha,M.translate(m/2,m/2),M.rotate(d),M.translate(-m/2,-m/2),M.drawImage(k,x,S,a.width,a.height),c=c.concat(q);});function v(k){return k[Math.floor(Math.random()*k.length)]}r.setTransform(1,0,0,1,0,0);let U=[];for(let k=y;k<p;k+=u){for(let q=_;q<g;q+=h)n(U,k,q)||(U=U.concat({x:k,y:q}),r.drawImage(v(c),k,q));for(let q=_;q>-Math.abs(m);q-=h)n(U,k,q)||(U=U.concat({x:k,y:q}),r.drawImage(v(c),k,q));}for(let k=y;k>-Math.abs(m);k-=u){for(let q=_;q<g;q+=h)n(U,k,q)||(U=U.concat({x:k,y:q}),r.drawImage(v(c),k,q));for(let q=_;q>-Math.abs(m);q-=h)n(U,k,q)||(U=U.concat({x:k,y:q}),r.drawImage(v(c),k,q));}},e.prototype.getPreview=function(){return this.dataUrl},e.prototype.render=function(o){return o=o==="png"?"png":"jpeg",this.canvas.toDataURL("image/"+o)},e.prototype.renderBlob=function(){let o=this;return new Promise(a=>{o.canvas.toBlob(function(r){a(window.URL.createObjectURL(r));});})},e.prototype.noConflict=function(){return window.Watermark&&delete window.Watermark,t&&(window.Watermark=t),e},e});const _SCRIPT_NAME_="【移动端】MT论坛优化",utils=Utils.noConflict(),domUtils=DOMUtils.noConflict(),__pops=pops,log=new utils.Log(_GM_info,_unsafeWindow.console||_monkeyWindow.console);var C;const SCRIPT_NAME=((C=_GM_info==null?void 0:_GM_info.script)==null?void 0:C.name)||_SCRIPT_NAME_,DEBUG=!1;log.config({debug:DEBUG,logMaxCount:1e3,autoClearConsole:!0,tag:!0});Qmsg.config(Object.defineProperties({html:!0,autoClose:!0,showClose:!1},{position:{get(){return PopsPanel.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return PopsPanel.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return PopsPanel.getValue("qmsg-config-showreverse",!0)}},zIndex:{get(){let t=Utils.getMaxZIndex(),e=pops.config.InstanceUtils.getPopsMaxZIndex().zIndex;return Utils.getMaxValue(t,e)+100}}}));const GM_Menu=new utils.GM_Menu({GM_getValue:_GM_getValue,GM_setValue:_GM_setValue,GM_registerMenuCommand:_GM_registerMenuCommand,GM_unregisterMenuCommand:_GM_unregisterMenuCommand}),httpx=new utils.Httpx(_GM_xmlhttpRequest);httpx.interceptors.request.use(t=>(HttpxCookieManager.handle(t),t));httpx.interceptors.response.use(void 0,t=>(log.error(["拦截器-请求错误",t]),t.type==="onabort"?Qmsg.warning("请求取消"):t.type==="onerror"?Qmsg.error("请求异常"):t.type==="ontimeout"?Qmsg.error("请求超时"):Qmsg.error("其它错误"),t));httpx.config({logDetails:DEBUG});pops.GlobalConfig.setGlobalConfig({mask:{enable:!0,clickEvent:{toClose:!1,toHide:!1}}});_unsafeWindow.Object.defineProperty,_unsafeWindow.Function.prototype.apply,_unsafeWindow.Function.prototype.call,_unsafeWindow.Element.prototype.appendChild,_unsafeWindow.setTimeout;const addStyle=utils.addStyle.bind(utils);CommonUtils.setGMResourceCSS(GM_RESOURCE_MAP.Viewer);CommonUtils.setGMResourceCSS(GM_RESOURCE_MAP.Hljs);const $=document.querySelector.bind(document),$$=document.querySelectorAll.bind(document),KEY="GM_Panel",ATTRIBUTE_INIT="data-init",ATTRIBUTE_KEY="data-key",ATTRIBUTE_DEFAULT_VALUE="data-default-value",ATTRIBUTE_INIT_MORE_VALUE="data-init-more-value",PROPS_STORAGE_API="data-storage-api",UISwitch=function(t,e,i,s,n,l){let o={text:t,type:"switch",description:n,attributes:{},props:{},getValue(){return !!this.props[PROPS_STORAGE_API].get(e,i)},callback(a,r){let c=!!r;log.success(`${c?"开启":"关闭"} ${t}`),this.props[PROPS_STORAGE_API].set(e,c);},afterAddToUListCallBack:l};return Reflect.set(o.attributes,ATTRIBUTE_KEY,e),Reflect.set(o.attributes,ATTRIBUTE_DEFAULT_VALUE,i),Reflect.set(o.props,PROPS_STORAGE_API,{get(a,r){return PopsPanel.getValue(a,r)},set(a,r){PopsPanel.setValue(a,r);}}),o},UITextArea=function(t,e,i,s,n,l="",o){let a={text:t,type:"textarea",attributes:{},props:{},description:s,placeholder:l,disabled:o,getValue(){return this.props[PROPS_STORAGE_API].get(e,i)},callback(r,c){this.props[PROPS_STORAGE_API].set(e,c);}};return Reflect.set(a.attributes,ATTRIBUTE_KEY,e),Reflect.set(a.attributes,ATTRIBUTE_DEFAULT_VALUE,i),Reflect.set(a.props,PROPS_STORAGE_API,{get(r,c){return PopsPanel.getValue(r,c)},set(r,c){PopsPanel.setValue(r,c);}}),a},UISelect=function(t,e,i,s,n,l){let o=[];typeof s=="function"?o=s():o=s;let a={text:t,type:"select",description:l,attributes:{},props:{},getValue(){return this.props[PROPS_STORAGE_API].get(e,i)},callback(r,c,m){let p=c;log.info(`选择：${m}`),this.props[PROPS_STORAGE_API].set(e,p),typeof n=="function"&&n(r,p,m);},data:o};return Reflect.set(a.attributes,ATTRIBUTE_KEY,e),Reflect.set(a.attributes,ATTRIBUTE_DEFAULT_VALUE,i),Reflect.set(a.props,PROPS_STORAGE_API,{get(r,c){return PopsPanel.getValue(r,c)},set(r,c){PopsPanel.setValue(r,c);}}),a},UIButton=function(t,e,i,s,n,l,o,a,r){return {text:t,type:"button",description:e,buttonIcon:s,buttonIsRightIcon:n,buttonIconIsLoading:l,buttonType:o,buttonText:i,callback(m){typeof a=="function"&&a(m);},afterAddToUListCallBack:r}},UIOwn=function(t,e,i,s){let n={type:"own",attributes:{},props:i,getLiElementCallBack:t,afterAddToUListCallBack:s};return Reflect.set(n.attributes,ATTRIBUTE_INIT,()=>!1),n},MTUtils={getAvatar:(t,e="middle")=>`/uc_server/avatar.php?uid=${t}&size=${e}&ts=1`,getCurrentUID(){let t=_unsafeWindow.discuz_uid;if(typeof t=="string")return t;let e=document.querySelector('.sidenv_exit a[href*="uid="]');if(e){let i=e.href.match(/uid=([0-9]+)/);if(i)return i[i.length-1]}},getCurrentFormHash(){let t=document.querySelector('.sidenv_exit a[href*="formhash="]');if(t){let e=t.href.match(/formhash=([0-9a-zA-Z]+)/);if(e)return e[e.length-1]}},envIsMobile(){return (_unsafeWindow.STYLEID||window.STYLEID||typeof STYLEID<"u"&&STYLEID)==="3"},getThreadId:t=>{let e=t.match(/thread-([\d]+)-|&tid=([\d]+)/i);if(e){let i=e.filter(Boolean);return i[i.length-1]}},getForumId(t){let e=t.match(/&fid=([\d]+)/i);if(e)return e[e.length-1]},getPostId(t){let e=t.match(/&pid=([\d]+)/i);if(e)return e[e.length-1]},getRepquote(t){let e=t.match(/&repquote=([\d]+)/i);if(e)return e[e.length-1]}},MTDyncmicAvatar={$upload:{small:!1,middle:!1,big:!1},$data:{avatarInfo:{maxSize:2097152,small:{width:48,height:48},middle:{width:120,height:120},big:{width:200,height:250}}},$el:{$smallUpload:null,$middleUpload:null,$bigUpload:null,$smallStatus:null,$middleStatus:null,$bigStatus:null},init(){this.showView();},showView(){let t=__pops.confirm({title:{text:"修改头像",position:"center"},content:{text:`
                <div class="avatar-container">
                    <p class="avatar-tip">1. 小头像（图片宽高限制最大：48×48）</p>
                    <p class="avatar-upload-status" data-type="small">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="small" data-maxwidth="48" data-maxheight="48" accept="image/*">
                </div>
                <div class="avatar-container">
                    <p class="avatar-tip">2. 中头像（图片最大宽高最大：120×120）</p>
                    <p class="avatar-upload-status" data-type="middle">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="middle" data-maxwidth="120" data-maxheight="120" accept="image/*">
                </div>
                <div class="avatar-container">
                    <p class="avatar-tip">3. 大头像（图片最大宽高最大：200×250）</p>
                    <p class="avatar-upload-status" data-type="big">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="big" data-maxwidth="200" data-maxheight="250" accept="image/*">
                </div>
                `,html:!0},btn:{ok:{text:"上传",callback:async()=>{if(!MTDyncmicAvatar.$upload.small||!MTDyncmicAvatar.$upload.middle||!MTDyncmicAvatar.$upload.big){Qmsg.error("校验失败");return}let e=Qmsg.loading("正在处理数据中..."),i=await utils.parseFileToBase64(this.$el.$smallUpload.files[0]),s=await utils.parseFileToBase64(this.$el.$middleUpload.files[0]);const o=[await utils.parseFileToBase64(this.$el.$bigUpload.files[0]),s,i].map(p=>p.substring(p.indexOf(",")+1));let a=await this.getUploadUrl();if(e.close(),a==null)return;let r=MTUtils.getCurrentFormHash();if(r==null){Qmsg.error("获取formhash失败");return}let c=new FormData;c.append("Filedata",""),c.append("avatar1",o[0]),c.append("avatar2",o[1]),c.append("avatar3",o[2]),c.append("formhash",r);let m=await httpx.post(a,{data:c,headers:{Referer:`${window.location.origin}/home.php?mod=spacecp&ac=avatar`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9","User-Agent":utils.getRandomPCUA()}});m.status&&(m.data.responseText.indexOf("window.parent.postMessage('success','*')")!=-1?(Qmsg.success("上传成功"),t.close(),setTimeout(()=>{window.location.reload();},1500)):(log.error(m),Qmsg.error(m.data.responseText)));}}},mask:{enable:!0},width:"88vw",height:"500px",style:`
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
            `});this.$el.$smallUpload=t.$shadowRoot.querySelector(".avatar-upload[data-type='small']"),this.$el.$middleUpload=t.$shadowRoot.querySelector(".avatar-upload[data-type='middle']"),this.$el.$bigUpload=t.$shadowRoot.querySelector(".avatar-upload[data-type='big']"),this.$el.$smallStatus=t.$shadowRoot.querySelector(".avatar-upload-status[data-type='small']"),this.$el.$middleStatus=t.$shadowRoot.querySelector(".avatar-upload-status[data-type='middle']"),this.$el.$bigStatus=t.$shadowRoot.querySelector(".avatar-upload-status[data-type='big']"),this.setUploadChangeEvent(this.$el.$smallUpload,this.$el.$smallStatus,this.$data.avatarInfo.small,()=>{this.$upload.small=!0;}),this.setUploadChangeEvent(this.$el.$middleUpload,this.$el.$middleStatus,this.$data.avatarInfo.middle,()=>{this.$upload.middle=!0;}),this.setUploadChangeEvent(this.$el.$bigUpload,this.$el.$bigStatus,this.$data.avatarInfo.big,()=>{this.$upload.big=!0;});},setUploadChangeEvent(t,e,i,s){domUtils.on(t,"change",n=>{var c;if(!((c=t.files)!=null&&c.length))return;domUtils.text(e,"🤡获取文件信息中..."),e.removeAttribute("data-success");let l=t.files[0],o=l.size,a=new Image,r=new FileReader;r.readAsDataURL(l),r.onload=function(m){a.src=m.target.result,a.onload=function(){if(a.width>i.width||a.height>i.height){t.value="",e.setAttribute("data-success","false"),domUtils.text(e,`🤡校验失败 ==> 图片尺寸不符合，宽：${a.width} 高：${a.height}`);return}if(o>MTDyncmicAvatar.$data.avatarInfo.maxSize){t.value="",e.setAttribute("data-success","false"),domUtils.text(e,`🤡校验失败 ==> 图片大小不符合：${o}byte，限制最大：${MTDyncmicAvatar.$data.avatarInfo.maxSize}byte`);return}e.setAttribute("data-success","true"),domUtils.text(e,`🤣 通过 宽:${a.width} 高:${a.height} 大小(byte):${o}`),s();};};});},async getUploadUrl(){let t=await httpx.get("/home.php?mod=spacecp&ac=avatar",{headers:{"User-Agent":utils.getRandomPCUA()}});if(!t.status)return;if(utils.isNull(t.data.responseText)){Qmsg.error("获取PC数据失败");return}let e=t.data.responseText.match(/var[\s]*data[\s]*=[\s]*"(.+?)"/);if(e==null||e.length!=2){Qmsg.error("获取变量-data失败");return}let s=e[e.length-1].split(",");return s[s.indexOf("src")+1].replace("images/camera.swf?inajax=1","index.php?m=user&a=rectavatar&base64=yes")}},Component_Common={id:"component-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[UISelect("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(t,e,i)=>{log.info("设置当前Qmsg弹出位置"+i);},"Toast显示在页面九宫格的位置"),UISelect("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),UISwitch("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]},{text:"Cookie配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[UISwitch("启用","httpx-use-cookie-enable",!1,void 0,"启用后，将根据下面的配置进行添加cookie"),UISwitch("使用document.cookie","httpx-use-document-cookie",!1,void 0,"自动根据请求的域名来设置对应的cookie"),UITextArea("bbs.binmt.cc","httpx-cookie-bbs.binmt.cc","",void 0,void 0,"Cookie格式：xxx=xxxx;xxx=xxxx")]}]}]},{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[UISwitch("链接文本转超链接","mt-link-text-to-hyperlink",!0,void 0,"自动把页面中的链接文本转换为超链接"),UISwitch("显示用户UID","mt-show-user-uid",!0,void 0,"格式为UID：xxx"),UISwitch("小窗模式","mt-small-window",!0,void 0,"开启后点击帖子右侧区域为小窗打开")]}]},{text:"额外菜单项",type:"deepMenu",forms:[{type:"forms",text:"",forms:[UISwitch("小黑屋","mt-black-home",!0,void 0,"将会在左侧面板添加【小黑屋】菜单"),UISwitch("在线用户","mt-online-user",!0,void 0,"将会在左侧面板添加【在线用户】菜单"),UISwitch("付费主题白嫖提醒","mt-post-paidThemePost",!0,void 0,"将会在左侧面板添加【付费主题白嫖提醒】菜单"),UISwitch("我的屏蔽","mt-ownBlock",!0,void 0,"将会在左侧面板添加【我的屏蔽】菜单"),UISwitch("商品上架提醒","mt-productListingReminder",!0,void 0,"将会在左侧面板添加【商品上架提醒】菜单"),UISwitch("自定义用户标签","mt-customizeUserLabels",!0,void 0,"将会在左侧面板添加【自定义用户标签】菜单"),UISwitch("评论过滤器","mt-post-comment-filter",!0,void 0,"将会在左侧面板添加【评论过滤器】菜单")]}]},{text:"头像",type:"deepMenu",forms:[{text:"",type:"forms",forms:[UIOwn(t=>{let e=domUtils.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
											<p class="pops-panel-item-left-main-text">小头像</p>
											`}),i=domUtils.createElement("div",{className:"pops-panel-avatar-img",innerHTML:`
											<img 
												loading="lazy"
												src="/uc_server/avatar.php?uid=${MTUtils.getCurrentUID()}&size=small&ts=1"
												style="
													width: 30px;
													height: 30px;
													border-radius: 50%;
													overflow: hidden;
												">
											`});return t.appendChild(e),t.appendChild(i),t}),UIOwn(t=>{let e=domUtils.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
											<p class="pops-panel-item-left-main-text">中头像</p>
											`}),i=domUtils.createElement("div",{className:"pops-panel-avatar-img",innerHTML:`
											<img 
												loading="lazy"
												src="/uc_server/avatar.php?uid=${MTUtils.getCurrentUID()}&size=middle&ts=1"
												style="
													width: 30px;
													height: 30px;
													border-radius: 50%;
													overflow: hidden;
												">
											`});return t.appendChild(e),t.appendChild(i),t}),UIOwn(t=>{let e=domUtils.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
											<p class="pops-panel-item-left-main-text">大头像</p>
											`}),i=domUtils.createElement("div",{className:"pops-panel-avatar-img",innerHTML:`
											<img 
												loading="lazy"
												src="/uc_server/avatar.php?uid=${MTUtils.getCurrentUID()}&size=big&ts=1"
												style="
													width: 30px;
													height: 30px;
													border-radius: 50%;
													overflow: hidden;
												">
											`});return t.appendChild(e),t.appendChild(i),t}),UIButton("修改头像",`可以上传gif图片，注意图片最大限制为${Utils.formatByteToSize(MTDyncmicAvatar.$data.avatarInfo.maxSize)}`,"上传",void 0,!1,!1,"primary",()=>{MTDyncmicAvatar.init();})]}]}]}]},ElementUtils={registerLeftMenu(t){utils.waitNode(".comiis_sidenv_box .sidenv_li .comiis_left_Touch",1e4).then(e=>{if(!e){log.error("注册左侧面板菜单失败，原因：该元素不存在");return}let i=domUtils.createElement("li",{className:"comiis_left_Touch",innerHTML:`
						<a href="javascript:;" class="comiis_left_Touch">
							<i class="comiis_font"></i>
							${t.name}
						</a>
						`}),s=i.querySelector(".comiis_font");typeof t.style=="string"&&(s.style.cssText=t.style),typeof t.icon=="string"&&(s.innerHTML=t.icon),typeof t.iconColor=="string"&&(s.style.color=t.iconColor),typeof t.iconSize=="string"&&(s.style.fontSize=t.iconSize),domUtils.on(i,"click",n=>{utils.preventEvent(n),typeof t.callback=="function"&&t.callback();}),domUtils.append(e,i);});},comiisForumList:()=>document.querySelectorAll("li.forumlist_li"),comiisPostli:()=>document.querySelectorAll("div.comiis_postli.comiis_list_readimgs.nfqsqi"),comiisMmlist:()=>document.querySelectorAll(".comiis_mmlist")},UIInput=function(t,e,i,s,n,l="",o,a,r){let c={text:t,type:"input",isNumber:!!o,isPassword:!!a,props:{},attributes:{},description:s,afterAddToUListCallBack:r,getValue(){return this.props[PROPS_STORAGE_API].get(e,i)},callback(m,p,g){this.props[PROPS_STORAGE_API].set(e,o?g:p);},placeholder:l};return Reflect.set(c.attributes,ATTRIBUTE_KEY,e),Reflect.set(c.attributes,ATTRIBUTE_DEFAULT_VALUE,i),Reflect.set(c.props,PROPS_STORAGE_API,{get(m,p){return PopsPanel.getValue(m,p)},set(m,p){PopsPanel.setValue(m,p);}}),c},optimizationCSS$1=`#comiis_foot_menu_beautify {\r
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
`,MTEditorSmilies=()=>[{"[呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq001.gif","[撇嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq002.gif","[色]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq003.gif","[发呆]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq004.gif","[得意]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq005.gif","[流泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq006.gif","[害羞]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq007.gif","[闭嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq008.gif","[睡]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq009.gif","[大哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq010.gif","[尴尬]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq011.gif","[发怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq012.gif","[调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq013.gif","[呲牙]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq014.gif","[惊讶]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq015.gif","[难过]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq016.gif","[酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq017.gif","[冷汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq018.gif","[抓狂]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq019.gif","[吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq020.gif","[偷笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq021.gif","[可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq022.gif","[白眼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq023.gif","[傲慢]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq024.gif","[饥饿]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq025.gif","[困]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq026.gif","[惊恐]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq027.gif","[流汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq028.gif","[憨笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq029.gif","[装逼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq030.gif","[奋斗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq031.gif","[咒骂]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq032.gif","[疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq033.gif","[嘘]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq034.gif","[晕]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq035.gif","[折磨]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq036.gif","[衰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq037.gif","[骷髅]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq038.gif","[敲打]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq039.gif","[再见]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq040.gif","[擦汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq041.gif","[抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq042.gif","[鼓掌]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq043.gif","[糗大了]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq044.gif","[坏笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq045.gif","[左哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq046.gif","[右哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq047.gif","[哈欠]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq048.gif","[鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq049.gif","[委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq050.gif","[快哭了]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq051.gif","[阴脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq052.gif","[亲亲]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq053.gif","[吓]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq054.gif","[可怜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq055.gif","[眨眼睛]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq056.gif","[笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq057.gif","[dogeQQ]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq058.gif","[泪奔]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq059.gif","[无奈]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq060.gif","[托腮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq061.gif","[卖萌]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq062.png","[斜眼笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq063.gif","[喷血]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq064.gif","[惊喜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq065.gif","[骚扰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq066.gif","[小纠结]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq067.gif","[我最美]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq068.gif","[菜刀]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq069.gif","[西瓜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq070.gif","[啤酒]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq071.gif","[篮球]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq072.gif","[乒乓]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq073.gif","[咖啡]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq074.gif","[饭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq075.gif","[猪]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq076.gif","[玫瑰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq077.gif","[凋谢]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq078.gif","[示爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq079.gif","[爱心]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq080.gif","[心碎]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq081.gif","[蛋糕]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq082.gif","[闪电]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq083.gif","[炸弹]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq084.gif","[刀]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq085.gif","[足球]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq086.gif","[瓢虫]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq087.gif","[便便]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq088.gif","[月亮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq089.gif","[太阳]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq090.gif","[礼物]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq091.gif","[抱抱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq092.gif","[喝彩]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq93.gif","[祈祷]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq94.gif","[棒棒糖]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq95.gif","[药]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq96.gif","[赞]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq097.gif","[差劲]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq098.gif","[握手]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq099.gif","[胜利]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq100.gif","[抱拳]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq101.gif","[勾引]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq102.gif","[拳头]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq103.gif","[爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq105.gif","[NO]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq106.gif","[OK]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq107.gif"},{"[#呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_1.png","[#滑稽]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_10.png","[#吐舌]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_3.png","[#哈哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_2.png","[#啊]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_23.png","[#酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_22.png","[#怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_13.png","[#开心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_39.png","[#汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_14.png","[#泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_16.png","[#黑线]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_15.png","[#鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_21.png","[#不高兴]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_12.png","[#真棒]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_17.png","[#钱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_40.png","[#疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_26.png","[#阴险]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_20.png","[#吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_34.png","[#咦]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_41.png","[#委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_29.png","[#花心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_6.png","[#呼～]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_42.png","[#激动]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_5.png","[#冷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_43.png","[#可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_4.png","[#What？]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_25.png","[#勉强]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_38.png","[#狂汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_24.png","[#酸爽]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_27.png","[#乖]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_8.png","[#雅美蝶]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_28.png","[#睡觉]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_31.png","[#惊哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_19.png","[#哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_44.png","[#笑尿]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_32.png","[#惊讶]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_30.png","[#小乖]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_7.png","[#喷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_18.png","[#抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_33.png","[#捂嘴笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_9.png","[#你懂的]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_11.png","[#犀利]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_35.png","[#小红脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_36.png","[#懒得理]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_37.png","[#爱心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_45.png","[#心碎]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_46.png","[#玫瑰]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_47.png","[#礼物]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_48.png","[#彩虹]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_49.png","[#太阳]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_50.png","[#月亮]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_51.png","[#钱币]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_52.png","[#咖啡]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_53.png","[#蛋糕]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_54.png","[#大拇指]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_55.png","[#胜利]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_56.png","[#爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_57.png","[#OK]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_58.png","[#弱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_59.png","[#沙发]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_60.png","[#纸巾]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_61.png","[#香蕉]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_62.png","[#便便]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_63.png","[#药丸]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_64.png","[#红领巾]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_65.png","[#蜡烛]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_66.png","[#三道杠]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_67.png","[#音乐]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_68.png","[#灯泡]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_69.png"},{"[doge]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/1.png","[doge思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/2.png","[doge再见]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/3.png","[doge生气]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/4.png","[doge气哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/5.png","[doge笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/7.png","[doge调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/6.png","[doge啊哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/8.png","[doge原谅TA]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/9.png","[miao]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/10.png","[miao思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/11.png","[miao拜拜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/12.png","[miao生气]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/13.png","[miao气哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/14.png","[二哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/15.png","[摊手]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/19.png","[w并不简单]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/20.png","[w滑稽]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/21.png","[w色]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/22.png","[w爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/23.png","[w拜拜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/24.png","[w悲伤]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/25.png","[w鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/26.png","[w馋嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/27.png","[w冷汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/28.png","[w打哈欠]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/29.png","[w打脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/30.png","[w敲打]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/31.png","[w生病]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/32.png","[w闭嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/33.png","[w鼓掌]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/34.png","[w哈哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/35.png","[w害羞]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/36.png","[w呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/37.png","[w黑线]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/38.png","[w哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/39.png","[w调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/40.png","[w可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/41.png","[w可怜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/42.png","[w酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/43.png","[w困]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/44.png","[w懒得理你]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/45.png","[w流泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/46.png","[w怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/47.png","[w怒骂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/48.png","[w钱]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/49.png","[w亲亲]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/50.png","[w傻眼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/51.png","[w便秘]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/52.png","[w失望]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/53.png","[w衰]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/54.png","[w睡觉]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/55.png","[w思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/56.png","[w开心]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/57.png","[w色舔]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/58.png","[w偷笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/59.png","[w吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/60.png","[w抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/61.png","[w委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/62.png","[w笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/63.png","[w嘻嘻]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/64.png","[w嘘]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/65.png","[w阴险]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/66.png","[w疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/67.png","[w抓狂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/70.png","[w晕]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/69.png","[w右哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/68.png","[w左哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/71.png","[w肥皂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/77.png","[w奥特曼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/78.png","[w草泥马]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/79.png","[w兔子]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/80.png","[w熊猫]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/81.png","[w猪头]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/82.png","[w→_→]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/83.png","[w给力]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/84.png","[w囧]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/85.png","[w萌]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/86.png","[w神马]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/87.png","[w威武]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/88.png"}],MTRegExp={formhash:/formhash=(.+)&/,hash:/hash=(.+)&/,uid:/uid=(\d+)/,fontSpecial:/<font.*?>|<\/font>|<strike>|<strong>|<i>|<u>|align=".*?"|<br>[\s]*<br>[\s]*<br>/g,ptid:/&ptid=([\d]+)/i,pid:/&pid=([\d]+)/i,tid:/&tid=([\d]+)/i},GlobalImageDelete=[];class MTEditorImageBed{constructor(e){P(this,"option");P(this,"$data",{STORAGE_KEY:"mt-image-bed-upload-history"});this.option=e,GlobalImageDelete.push({id:this.option.id,callback:this.option.delImageEvent.bind(this)}),this.addTab(),domUtils.on(`.comiis_post_imglist[data-chartbed="${this.option.name}"] .up_btn a`,"click",async i=>{await this.option.uploadBtnClickEvent(i)&&$(`.comiis_post_imglist[data-chartbed="${this.option.name}"] input[type="file"]`).click();}),domUtils.on(`.comiis_post_imglist[data-chartbed="${this.option.name}"] input[type="file"]`,"change",async i=>{let s=i.target,n=()=>{s.value="";},l=async o=>{let a=await this.option.fileChangeEvent(i,o);n(),a.success&&a.data.forEach(r=>{this.addImage(r);let c=this.createImageBtnElement("插入",r.url);this.setImageBtnDeleteEvent(c,r),domUtils.append(`.comiis_post_imglist[data-chartbed="${this.option.name}"]`,c);});};if(s.files&&s.files.length){let o=s.files;if(PopsPanel.getValue("mt-image-bed-watermark-enable")){let a=Qmsg.loading("处理水印中..."),r=[],c=[];await Promise.all(Array.from(s.files).map(async(m,p)=>{if(m.type==="image/gif"){let d=await utils.parseFileToBase64(m);r.push(d),c.push(m);}else {Qmsg.info(`添加水印 ${p+1}/${o.length}`);var g=new window.Watermark;await g.setFile(m),g.addText({text:[PopsPanel.getValue("mt-image-bed-watermark-text")],color:PopsPanel.getValue("mt-image-bed-watermark-text-color"),fontSize:PopsPanel.getValue("mt-image-bed-watermark-font-size"),globalAlpha:PopsPanel.getValue("mt-image-bed-watermark-font-opacity"),xMoveDistance:PopsPanel.getValue("mt-image-bed-watermark-left-right-margin"),yMoveDistance:PopsPanel.getValue("mt-image-bed-watermark-top-bottom-margin"),rotateAngle:PopsPanel.getValue("mt-image-bed-watermark-rotate")}),r.push(g.render("png")),c.push(utils.parseBase64ToFile(g.render("png"),"WaterMark_"+m.name));}})),a.close(),o=c,PopsPanel.getValue("mt-image-bed-watermark-autoAddWaterMark")?await l(o):__pops.confirm({title:{text:"水印预览",position:"center"},content:{text:`
									<div class="upload-image-water">${r.map(m=>`<img src="${m}" crossoriginNew="anonymous" loading="lazy">`).join(`
`)}
									</div>
									`,html:!0},btn:{ok:{text:"继续上传",async callback(m,p){m.close(),await l(o);}},close:{callback(m,p){m.close(),n();}},cancel:{callback(m,p){m.close(),n();}}},drag:!0,width:"88vw",height:"80vh",style:`
								.upload-image-water {

								}
								.upload-image-water img{
									width: 100%;
								}
								`});}else await l(o);}});}addTab(){let e=$("#comiis_pictitle_key"),i=e.querySelector("a[data-type='history']"),s=`
            <li>
                <a href="javascript:;" class="comiis-picture-tab" data-type="image-bed">${this.option.name}</a>
            </li>
        `;if(!i){let o=domUtils.createElement("li");i=domUtils.createElement("a",{href:"javascript:;",className:"comiis-picture-tab",innerHTML:"历史图片"},{"data-type":"history"}),domUtils.on(i,"click",()=>{this.initHistoryUploadImageList();}),domUtils.append(o,i),domUtils.append(e,o);}domUtils.before(i.parentElement,s);let n=$("#comiis_pictitle_tab .bqbox_t"),l=Array.from($$("#comiis_pictitle_tab .comiis_upbox")).find(o=>!!o.querySelector("#imglist_history"));l||(l=domUtils.createElement("div",{className:"comiis_upbox bg_f cl",innerHTML:`
					<ul class="comiis_post_imglist cl" id="imglist_history">	
                    </ul>
				`},{style:"display: none;"}),domUtils.before(n,l),l=Array.from($$("#comiis_pictitle_tab .comiis_upbox")).find(o=>!!o.querySelector("#imglist_history"))),domUtils.before(l,`
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
            `);}createImageBtnElement(e,i){return domUtils.createElement("li",{innerHTML:`
            <span class="delImg" data-id="${this.option.id}" data-name="${this.option.name}">
                <a href="javascript:;">
                    <i class="comiis_font f_g"></i>
                </a>
            </span>
            <span class="charu f_f">${e}</span>
            <span class="p_img">
                <a href="javascript:;"
                onclick="comiis_addsmilies('[img]${i}[/img]')">
                    <img style="height:54px;width:54px;" 
                        title="${i}" 
                        src="${i}" 
                        loading="lazy"
                        class="vm b_ok"></a>
            </span>
            `})}initHistoryUploadImageList(){let e=$("#comiis_pictitle_tab #imglist_history");e.innerHTML="";let i=document.createDocumentFragment();this.getAllImage().forEach(s=>{let n=this.createImageBtnElement(s.labelName,s.data.url);this.setHistoryImageBtnDeleteEvent(n,s),i.appendChild(n);}),e.appendChild(i);}setImageBtnDeleteEvent(e,i){let s=e.querySelector(".delImg");domUtils.on(s,"click",async n=>{await this.option.delImageEvent(n,i)&&this.deleteImage(this.option.id,i)&&domUtils.remove(e);});}setHistoryImageBtnDeleteEvent(e,i){let s=e.querySelector(".delImg");domUtils.on(s,"click",async n=>{let l=GlobalImageDelete.find(a=>a.id===i.id);if(!l)return;await l.callback(n,i.data)&&this.deleteImage(i.id,i.data)&&domUtils.remove(e);});}addImage(e){let i=_GM_getValue(this.$data.STORAGE_KEY,[]);i.push({id:this.option.id,name:this.option.name,labelName:this.option.labelName,data:e}),_GM_setValue(this.$data.STORAGE_KEY,i);}getAllImage(){return _GM_getValue(this.$data.STORAGE_KEY,[])}deleteImage(e,i){let s=this.getAllImage(),n=s.findIndex(l=>l.id===e&&JSON.stringify(l.data)===JSON.stringify(i));return n!=-1?(s.splice(n,1),_GM_setValue(this.$data.STORAGE_KEY,s),!0):!1}}const MTEditorImageBed_Hello={$data:{get account(){return PopsPanel.getValue("mt-image-bed-hello-account")},get password(){return PopsPanel.getValue("mt-image-bed-hello-password")},get token(){return PopsPanel.getValue("mt-image-bed-hello-token")}},$code:{401:"未登录或授权失败",403:"管理员关闭了接口功能或没有该接口权限",429:"超出请求配额，请求受限",500:"服务端出现异常"},$config:{base_url:"https://www.helloimg.com/api/v1",TAG:"Hello图床："},$tabConfig:{id:"www.helloimg.com",name:"Hello图床",labelName:"hello"},init(){const t=this;new MTEditorImageBed({id:this.$tabConfig.id,name:this.$tabConfig.name,labelName:this.$tabConfig.labelName,async uploadBtnClickEvent(e){return await t.checkLogin()},async fileChangeEvent(e,i){let s=[],n=Qmsg.loading("上传中..."),l=!0;for(let o=0;o<Array.from(i).length;o++){const a=Array.from(i)[o];let r=await t.uploadImage(a);r?(s.push({url:r.data.links.url,data:r.data}),l=l&&!0):l=l&&!1;}return n.close(),{success:l,data:s}},storageSaveCallBack(e){return e.data},async delImageEvent(e,i){if(await t.checkLogin()){let n=Qmsg.loading("正在删除图片..."),l=await t.deleteImage(i.data.key)??!1;return n.close(),l}else return !1}});},async checkLogin(){return this.$data.account?this.$data.password?this.$data.token?!0:(Qmsg.error(`${this.$config.TAG}请先配置token`),!1):(Qmsg.error(`${this.$config.TAG}请先配置密码`),!1):(Qmsg.error(`${this.$config.TAG}请先配置账号`),!1)},async uploadImage(t){let e=new FormData;e.append("file",t),e.append("permission","0"),e.append("strategy_id","0"),e.append("album_id","0");let i=await httpx.post(`${this.$config.base_url}/upload`,{data:e,headers:{Accept:"application/json",Authorization:`Bearer ${this.$data.token}`,"User-Agent":utils.getRandomPCUA(),Referer:`${this.$config.base_url}/`,Origin:this.$config.base_url},allowInterceptConfig:!1});if(!i.status){log.error(i),Qmsg.error(this.$config.TAG+"网络异常，上传图片失败");return}if(i.data.status in this.$code){log.error(i),Qmsg.error(this.$config.TAG+this.$code[i.data.status]);return}let s=utils.toJSON(i.data.responseText);if(log.info(s),!s.status){Qmsg.error(this.$config.TAG+s.message);return}Qmsg.success(this.$config.TAG+"上传成功");let n=new FileReader;return n.readAsDataURL(t),await new Promise(l=>{n.onload=function(){let a={imageUri:this.result,data:s.data};l(a);};})},async deleteImage(t){let e=await httpx.delete(this.$config.base_url+"/images/"+t,{timeout:15e3,headers:{Accept:"application/json",Authorization:`Bearer ${this.$data.token}`,"User-Agent":utils.getRandomPCUA(),Referer:`${this.$config.base_url}/`,Origin:this.$config.base_url},allowInterceptConfig:!1});if(e.data.status in this.$code)return Qmsg.error(this.$config.TAG+this.$code[e.data.status]),!1;let i=utils.toJSON(e.data.responseText);return i.status?(Qmsg.success(this.$config.TAG+"删除成功"),!0):(Qmsg.error(this.$config.TAG+i.message),!1)}},MTEditorImageBed_MT={$data:{csrf_token:null},$config:{TAG:"MT图床：",base_url:"https://img.binmt.cc"},$tabConfig:{id:"img.binmt.cc",name:"MT图床",labelName:"mt"},init(){const t=this;new MTEditorImageBed({id:this.$tabConfig.id,name:this.$tabConfig.name,labelName:this.$tabConfig.labelName,async uploadBtnClickEvent(e){return await t.checkLogin()},async fileChangeEvent(e,i){let s=[],n=Qmsg.loading("上传中..."),l=!0;for(let o=0;o<Array.from(i).length;o++){const a=Array.from(i)[o];let r=await t.uploadImage(a);r?(s.push({url:r.data.links.url,data:r.data}),l=l&&!0):l=l&&!1;}return n.close(),{success:l,data:s}},storageSaveCallBack(e){return e.data},async delImageEvent(e,i){return !0}});},async checkLogin(){if(!this.$data.csrf_token){let t=Qmsg.loading("正在获取CSRF Token中..."),e=await this.getCSRFToken();if(t.close(),!e)return !1;this.$data.csrf_token=e;}return !0},async getCSRFToken(){var s;let t=await httpx.get(this.$config.base_url,{allowInterceptConfig:!1,headers:{"User-Agent":utils.getRandomPCUA(),Referer:this.$config.base_url+"/",Origin:this.$config.base_url}});if(!t.status){Qmsg.error(this.$config.TAG+"获取CSRF Token失败，网络异常");return}let i=(s=domUtils.parseHTML(t.data.responseText,!0,!0).querySelector('meta[name="csrf-token"]'))==null?void 0:s.getAttribute("content");if(i)return log.info("获取的CSRF token：",i),Qmsg.success(this.$config.TAG+"获取CSRF Token成功"),i},async uploadImage(t){let e=new FormData;e.append("strategy_id","2"),e.append("file",t);let i=await httpx.post(`${this.$config.base_url}/upload`,{data:e,headers:{Accept:"application/json, text/javascript, */*; q=0.01","User-Agent":utils.getRandomAndroidUA(),Origin:this.$config.base_url,pragma:"no-cache","Accept-Encoding":"gzip, deflate, br","Accept-Language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",Referer:this.$config.base_url+"/",Pragma:"no-cache","x-csrf-token":this.$data.csrf_token,"X-Requested-With":"XMLHttpRequest"},allowInterceptConfig:!1});if(!i.status){log.error(i),Qmsg.error(this.$config.TAG+"网络异常，上传图片失败");return}let s=utils.toJSON(i.data.responseText);if(log.info(s),!s.status){log.error(i),Qmsg.error(this.$config.TAG+s.message||JSON.stringify(s));return}Qmsg.success(this.$config.TAG+"上传成功");let n=new FileReader;return n.readAsDataURL(t),await new Promise(l=>{n.onload=function(){let a={imageUri:this.result,data:s.data};l(a);};})}},MTQuickUBB=()=>({rainbow1:{key:"转普通彩虹",value:"",isFunc:!0,num:1},rainbow2:{key:"转黑白彩虹",value:"",isFunc:!0,num:2},rainbow3:{key:"转黑红彩虹",value:"",isFunc:!0,num:3},rainbow4:{key:"转蓝绿彩虹",value:"",isFunc:!0,num:4},size:{key:"大小",value:"[size=][/size]",tagL:"=",tagR:"]",L:"[size=]",R:"[/size]",cursorL:"[size=",cursorLength:6,quickUBBReplace:"[size=14]replace[/size]"},color:{key:"颜色",value:"[color=][/color]",tagL:"=",tagR:"]",L:"[color=]",R:"[/color]",cursorL:"[color=",cursorLength:7,quickUBBReplace:"[color=#000]replace[/color]"},b:{key:"加粗",value:"[b][/b]",tagL:"]",tagR:"[",L:"[b]",R:"[/b]",cursorR:"[/b]",cursorLength:4,quickUBBReplace:"[b]replace[/b]"},u:{key:"下划线",value:"[u][/u]",tagL:"]",tagR:"[",L:"[u]",R:"[/u]",cursorR:"[/u]",cursorLength:4,quickUBBReplace:"[u]replace[/u]"},i:{key:"倾斜",value:"[i][/i]",tagL:"]",tagR:"[",L:"[i]",R:"[/i]",cursorR:"[/i]",cursorLength:4,quickUBBReplace:"[i]replace[/i]"},s:{key:"中划线",value:"[s][/s]",tagL:"]",tagR:"[",L:"[s]",R:"[/s]",cursorR:"[/s]",cursorLength:4,quickUBBReplace:"[s]replace[/s]"},lineFeed:{key:"换行",value:"[*]",L:"",R:"[*]",cursorL:"[*]",cursorLength:3,quickUBBReplace:"replace[*]"},longHorizontalLine:{key:"水平线",value:"[hr]",L:"",R:"[hr]",cursorL:"[hr]",cursorLength:4,quickUBBReplace:"replace[hr]"},link:{key:"链接",value:"[url=][/url]",tagL:"=",tagR:"]",L:"[url=]",R:"[/url]",cursorL:"[url=",cursorLength:5,quickUBBReplace:"[url=replace]replace[/url]"},hide:{key:"隐藏",value:`[hide]
[/hide]`,tagL:"]",tagR:"[",L:"[hide]",R:"[/hide]",cursorR:"[/hide]",cursorLength:7,quickUBBReplace:`[hide]replace
[/hide]`},quote:{key:"引用",value:"[quote][/quote]",tagL:"]",tagR:"[",L:"[quote]",R:"[/quote]",cursorR:"[/quote]",cursorLength:8,quickUBBReplace:"[quote]replace[/quote]"},email:{key:"邮件",value:"[email=][/email]",tagL:"=",tagR:"]",L:"[email=]",R:"[/email]",cursorL:"[email=",cursorLength:7,quickUBBReplace:"[email=replace]replace[/email]"}}),MTUBB_Rainbow=(t,e)=>{if(e=="")return "";var i=e,s,n,l,o,a,r,c,m;if(l=0,o=0,a=0,m=0,s="",t==1){m=40,l=255,r=1,c=0;do i.charCodeAt(c)!=32?(o+m<256?r==1&&(o+=m):r==1&&(r=2,o=255),l-m>-1?r==2&&(l-=m):r==2&&(r=3,l=0),a+m<256?r==3&&(a+=m):r==3&&(r=4,a=255),o-m>-1?r==4&&(o-=m):r==4&&(r=5,o=0),l+m<256?r==5&&(l+=m):r==5&&(r=6,l=255),a-m>-1?r==6&&(a-=m):r==6&&(r=1,a=0),n="",n+=parseInt(l).toString(16).length==1?0+parseInt(l).toString(16):parseInt(l).toString(16),n+=parseInt(o).toString(16).length==1?0+parseInt(o).toString(16):parseInt(o).toString(16),n+=parseInt(a).toString(16).length==1?0+parseInt(a).toString(16):parseInt(a).toString(16),n=n.toUpperCase(),s+=`[color=#${n}]${i.charAt(c)}[/color]`):s+=i.charAt(c),c++;while(c<i.length)}else if(t==2)for(m=255/i.length,r=1;r<i.length+1;r++)i.charCodeAt(r-1)!=32?(l+=m,o+=m,a+=m,l>255&&(l=255),o>255&&(o=255),a>255&&(a=255),n="",n+=parseInt(l).toString(16).length==1?0+parseInt(l).toString(16):parseInt(l).toString(16),n+=parseInt(o).toString(16).length==1?0+parseInt(o).toString(16):parseInt(o).toString(16),n+=parseInt(a).toString(16).length==1?0+parseInt(a).toString(16):parseInt(a).toString(16),n=n.toUpperCase(),s+=`[color=#${n}]${i.charAt(r-1)}[/color]`):s+=i.charAt(r-1);else if(t==3)for(m=255/i.length,r=1;r<i.length+1;r++)i.charCodeAt(r-1)!=32?(l+=m,o=29,a=36,l>255&&(l=255),o>255&&(o=255),a>255&&(a=255),n="",n+=parseInt(l).toString(16).length==1?0+parseInt(l).toString(16):parseInt(l).toString(16),n+=parseInt(o).toString(16).length==1?0+parseInt(o).toString(16):parseInt(o).toString(16),n+=parseInt(a).toString(16).length==1?0+parseInt(a).toString(16):parseInt(a).toString(16),n=n.toUpperCase(),s+=`[color=#${n}]${i.charAt(r-1)}[/color]`):s+=i.charAt(r-1);else if(t==4)for(m=255/i.length,r=1;r<i.length+1;r++)i.charCodeAt(r-1)!=32?(l=0,o=174,a+=m,l>255&&(l=255),o>255&&(o=255),a>255&&(a=255),n="",n+=parseInt(l).toString(16).length==1?0+parseInt(l).toString(16):parseInt(l).toString(16),n+=parseInt(o).toString(16).length==1?0+parseInt(o).toString(16):parseInt(o).toString(16),n+=parseInt(255-a).toString(16).length==1?0+parseInt(255-a).toString(16):parseInt(255-a).toString(16),n=n.toUpperCase(),s+=`[color=#${n}]${i.charAt(r-1)}[/color]`):s+=i.charAt(r-1);return s},ExtendJQueryFn=function(){_unsafeWindow.$.fn.extend({insertAtCaret:function(t){var e=_unsafeWindow.$(this)[0];if(document.selection){this.focus();var i=document.selection.createRange();i.text=t,this.focus();}else if(e.selectionStart||e.selectionStart=="0"){var s=e.selectionStart,n=e.selectionEnd,l=e.scrollTop;e.value=e.value.substring(0,s)+t+e.value.substring(n,e.value.length),this.focus(),e.selectionStart=s+t.length,e.selectionEnd=s+t.length,e.scrollTop=l;}else this.value+=t,this.focus();},selectRange:function(t,e){return e===void 0&&(e=t),this.each(function(){if("selectionStart"in this)this.selectionStart=t,this.selectionEnd=e;else if(this.setSelectionRange)this.setSelectionRange(t,e);else if(this.createTextRange){var i=this.createTextRange();i.collapse(!0),i.moveEnd("character",e),i.moveStart("character",t),i.select();}})},getCursorPosition:function(){var t=_unsafeWindow.$(this)[0],e=0;if("selectionStart"in t)e=t.selectionStart;else if("selection"in document){t.focus();var i=document.selection.createRange(),s=document.selection.createRange().text.length;i.moveStart("character",-t.value.length),e=i.text.length-s;}return e},moveCursorInCenterByText:function(t,e){var i=_unsafeWindow.$(this)[0],s=i.value;for(let n=i.selectionStart-1;n>0;n--){let l=s[n-1],o=s[n];if(l==t&&o==e){this.selectRange(n);break}}},moveCursorToCenterByTextWithLeft:function(t,e){var i=_unsafeWindow.$(this)[0],s=i.value;for(let n=i.selectionStart-1;n>0;n--)if(s.substring(n-e,n)==t){this.selectRange(n);break}},moveCursorToCenterByTextWithRight:function(t,e){var i=_unsafeWindow.$(this)[0],s=i.value;for(let n=i.selectionStart-1;n>0;n--)if(s.substring(n,n+e)==t){this.selectRange(n+e);break}}});};let error_code={1:{error_match:"抱歉，您填写的内容包含敏感词而无法提交",popup_text:"抱歉，您填写的内容包含敏感词而无法提交"},2:{error_match:"抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复",popup_text:"抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复"},3:{error_match:"抱歉，本主题已关闭，不再接受新内容",popup_text:"抱歉，本主题已关闭，不再接受新内容"},4:{error_match:"抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复",popup_text:"抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复"},5:{error_match:"抱歉，您的帖子小于 10 个字符的限制",popup_text:"抱歉，您的帖子小于 10 个字符的限制"}},tempReplyBtnNode=null;const MTEditorOptimizationNormal={$data:{isUBBCodeInsertClick:!1,db:new Utils.indexedDB("mt_reply_record","input_text"),forum_action:null,get tid(){return MTUtils.getThreadId(window.location.href)}},$el:{$like:null,$btn_submit:null,$input:null,$form:null,$fastpostsubmit:null},init(){log.info("编辑器优化-简略版"),addStyle(optimizationCSS$1),this.overridePageEditor();},overridePageEditor(){let t=document.querySelector("#comiis_foot_memu .comiis_flex li:nth-child(2)"),e=document.querySelector("#comiis_foot_memu .comiis_flex li:nth-child(3)"),i=document.querySelector("#comiis_foot_memu .comiis_flex li:nth-child(4)");this.$el.$form=document.querySelector("#fastpostform"),this.$data.forum_action=this.$el.$form.getAttribute("action");let s=domUtils.serialize(this.$el.$form),n=document.querySelector("#fastpostform .header_y a").href;domUtils.remove("#needmessage[name='message']"),domUtils.remove("#imglist"),domUtils.remove("#fastpostsubmitline"),domUtils.remove("#fastpostsubmit");let l=document.querySelector("#comiis_foot_memu");domUtils.hide(l,!1);let o=MTEditorSmilies(),a=Object.keys(o[0]).map(m=>{let p=o[0][m];return `<li><a href="javascript:;" onclick="comiis_addsmilies('${m}');"><img loading="lazy" data-src="${p}" class="vm"></a></li>`}),r=Object.keys(o[1]).map(m=>{let p=o[1][m];return `<li><a href="javascript:;" onclick="comiis_addsmilies('${m}');"><img loading="lazy" data-src="${p}" class="vm"></a></li>`}),c=Object.keys(o[2]).map(m=>{let p=o[2][m];return `<li><a href="javascript:;" onclick="comiis_addsmilies('${m}');"><img loading="lazy" data-src="${p}" class="vm"></a></li>`});domUtils.after(l,`
            <div id="comiis_foot_menu_beautify" class="bg_f b_t">
                <div class="reply_area">
                    <ul>
                        <li data-attr="回帖"><input type="text" class="bg_e f_c" placeholder="发帖千百度，文明第一步" readonly="readonly"></li>
                        <li data-attr="评论数量">${t.innerHTML}</li>
                        <li data-attr="点赞">${e.innerHTML}</li>
                        <li data-attr="收藏">${i.innerHTML}</li>
                    </ul>
                </div>
            </div>
            <div id="comiis_foot_menu_beautify_big" data-model="comment" class="bg_f b_t" style="display:none;">
                <div class="reply_area">
                    <div class="reply_user_content" style="display:none;"></div>
                    <ul>
                        <li data-attr="回帖"><textarea id="needmessage" placeholder="发帖千百度，文明第一步"></textarea></li>
                        <li data-attr="发表">
                            <div class="fastpostform_new"><a href="${n}" data-comment-url="${n}" target="_blank"><i class="comiis_font f_d"></i></a></div>
                            <div id="fastpostsubmitline"><input data-comment-url="${n}" data-comment-action="${this.$data.forum_action}" data-comment-serialize="${s}" data-text="false" type="button" value="发表" name="replysubmit" id="fastpostsubmit" comiis="handle"></div>
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
                                        ${r.join(`
`)}
                                    </div>
                                    
                                    <div class="swiper-slide" style="display: none;">
                                        ${c.join(`
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
            `),$("#comiis_foot_menu_beautify .comiis_position_key"),this.$el.$like=$("#comiis_foot_menu_beautify .comiis_recommend_addkey"),$("#comiis_foot_menu_beautify #comiis_favorite_a"),$("#comiis_pictitle_key"),this.$el.$btn_submit=$('#comiis_foot_menu_beautify_big li[data-attr="发表"] input'),this.$el.$input=$("#comiis_foot_menu_beautify_big textarea"),this.$el.$fastpostsubmit=$("#fastpostsubmit"),_unsafeWindow.textarea_scrollHeight=()=>{},typeof _unsafeWindow.comiis_addsmilies=="function"&&(_unsafeWindow.comiis_addsmilies=m=>{_unsafeWindow.$("#needmessage").comiis_insert(m),_unsafeWindow.$("#needmessage")[0].dispatchEvent(new Event("propertychange"));}),_unsafeWindow.$("#imglist .up_btn").append(_unsafeWindow.$("#filedata")),_unsafeWindow.$(document).on("click","#imglist .up_btn a",function(){_unsafeWindow.$(this).next().click();}),_unsafeWindow.$(document).on("click","#imglist .p_img a",function(){let m=_unsafeWindow.$(this);if(m.attr("onclick")==null){let p=m.find("img").attr("id").replace("aimg_","");_unsafeWindow.comiis_addsmilies(`[attachimg]${p}[/attachimg]`);}}),domUtils.hide("#comiis_foot_menu_beautify_big .menu_body",!1),this.setInputChangeEvent(),this.setLikeBtnClickEvent(),this.setSubmitBtnClickEvent(),this.setGlobalReplyBtnClickEvent(),this.setGlobalClickCheckEvent(),this.setMenuIconToggleEvent(),this.setMenuImageClickEvent(),this.setMenuImageToggleEvent(),this.setMenuSmileClickEvent(),this.setMenuSmileTabClickEvent(),this.setMenuInsertClickEvent(),this.setMenuQuickUBB(),PopsPanel.execMenu("mt-forum-post-editorOptimizationNormal-recordInputText",()=>{this.initReplyText(),this.setInputChangeSaveEvent();}),PopsPanel.execMenuOnce("mt-image-bed-hello-enable",()=>{MTEditorImageBed_Hello.init();}),PopsPanel.execMenuOnce("mt-image-bed-mt-enable",()=>{MTEditorImageBed_MT.init();});},handle_error(t){let e=!1,i=domUtils.text(domUtils.parseHTML(t,!1,!1).querySelector("#messagetext"));return !i||typeof i=="string"&&i.trim()==""||Object.keys(error_code).forEach(s=>{let n=error_code[s];if(i.indexOf(n.error_match)!=-1){i.indexOf("typeof errorhandle_=='function'")!=-1&&Qmsg.error(n.popup_text),e=!0;return}}),e},setInputChangeEvent(){const t=this;domUtils.on(t.$el.$input,["input","propertychange"],function(e){var s,n;t.$el.$input.value===""?(t.$el.$btn_submit.setAttribute("data-text","false"),(s=$("#comiis_foot_menu_beautify li[data-attr='回帖'] input"))==null||s.setAttribute("placeholder","发帖千百度，文明第一步")):(t.$el.$btn_submit.setAttribute("data-text","true"),(n=$("#comiis_foot_menu_beautify li[data-attr='回帖'] input"))==null||n.setAttribute("placeholder","[草稿待发送]")),domUtils.css(t.$el.$input,"height","70px"),domUtils.css(t.$el.$input,"height",t.$el.$input.scrollHeight-20+"px");});},setInputChangeSaveEvent(){const t=this;domUtils.on(this.$el.$input,["input","propertychange"],e=>{let i=t.$el.$input.value,n=t.$el.$input.closest(".reply_area").querySelector(".reply_user_content").getAttribute("data-reply-url"),l={url:window.location.href,text:i,repquote:n?MTUtils.getRepquote(n):void 0,forumId:t.$data.tid};t.$data.db.get("data").then(o=>{if(!o.success||o.code===201){console.warn(o);return}let a=o.data.findIndex(r=>r.forumId===l.forumId&&r.repquote===l.repquote);a!==-1?i==null||i===""?o.data.splice(a,1):o.data[a]=utils.assign(o.data[a],{text:l.text}):o.data.push(l),t.$data.db.save("data",o.data).then(r=>{});});});},async initReplyText(t=!1,e=void 0){const i=this;(await this.$data.db.get("data")).code===201&&await this.$data.db.save("data",[]);let n=await this.$data.db.get("data");if(!n.success||n.code===201){console.warn(n);return}let l;e&&(l=MTUtils.getRepquote(e));let o=n.data.find(a=>t?a.forumId===i.$data.tid&&a.repquote==l:a.forumId===i.$data.tid&&a.repquote==null);o&&(domUtils.val(this.$el.$input,o.text),utils.dispatchEvent(this.$el.$input,"input"));},setLikeBtnClickEvent(){domUtils.on(this.$el.$like,"click",async t=>{var l,o;if(utils.preventEvent(t),_unsafeWindow.comiis_recommend_key==0){_unsafeWindow.comiis_recommend_key=1;let a=await httpx.get(this.$el.$like.href+"&inajax=1",{headers:{Accept:"application/xml, text/xml, */*; q=0.01"},allowInterceptConfig:!1});if(!a.status){window.location.href=this.$el.$like.href,setTimeout(function(){_unsafeWindow.comiis_recommend_key=0;},500);return}let c=(o=(l=utils.parseFromString(a.data.responseText,"text/xml").lastChild)==null?void 0:l.firstChild)==null?void 0:o.nodeValue;if(c.includes("您已评价过本主题")){let m=this.$el.$like.href.match(MTRegExp.tid)[1];if(!(await httpx.get(`plugin.php?id=comiis_app&comiis=re_recommend&tid=${m}&inajax=1`,{headers:{Accept:"application/xml, text/xml, */*; q=0.01"},allowInterceptConfig:!1})).status){Qmsg.error("取消点赞失败，网络异常");return}var e=Number(domUtils.text("#comiis_recommend_num"));document.querySelectorAll(".comiis_recommend_list_a").length>0&&domUtils.remove("#comiis_recommend_list_a"+_unsafeWindow.uid),document.querySelectorAll(".comiis_recommend_list_s").length>0&&domUtils.remove("#comiis_recommend_list_s"+_unsafeWindow.uid),document.querySelectorAll(".comiis_recommend_list_t").length>0&&domUtils.remove("#comiis_recommend_list_t"+_unsafeWindow.uid),e>1?(domUtils.text(".comiis_recommend_num",e-Number(_unsafeWindow.allowrecommend)),domUtils.text(".comiis_recommend_nums","+"+(e-Number(_unsafeWindow.allowrecommend)))):(domUtils.remove("#comiis_recommend_num"),domUtils.text(".comiis_recommend_nums",""),document.querySelectorAll(".comiis_recommend_list_a").length>0&&(domUtils.empty(".comiis_recommend_list_a"),domUtils.removeClass(".comiis_recommend_list_a","comiis_recommend_list_on")),document.querySelectorAll(".comiis_recommend_list_t").length>0&&domUtils.removeClass(".comiis_recommend_list_t","comiis_recommend_list_on")),domUtils.html(".comiis_recommend_addkey i","&#xe63b;"),domUtils.removeClass(".comiis_recommend_color","f_a"),domUtils.addClass(".comiis_recommend_color","f_b"),document.querySelectorAll(".comiis_recommend_list_s").length>0&&(document.querySelectorAll(".comiis_recommend_list_s li").length<7?domUtils.hide(".txshow_more",!1):domUtils.show(".txshow_more",!1)),Qmsg.success("已取消点赞");}else if(c.includes("您不能评价自己的帖子"))Qmsg.error("不能点赞自己的帖子");else if(c.includes("今日评价机会已用完"))Qmsg.warning("您今日的点赞机会已用完");else if(c.includes("'recommendv':'+"+_unsafeWindow.allowrecommend+"'")){var i={recommendc:0,daycount:0},s;s=c.match(/\'recommendc\':\'(.*?)\'/),s!=null?i.recommendc=parseInt(s[1]):i.recommendc=0,s=c.match(/\'daycount\':\'(.*?)\'/),s!=null?i.daycount=parseInt(s[1]):i.daycount=0,document.querySelectorAll(".comiis_recommend_new span").length<1&&domUtils.append(".comiis_recommend_new",'<span class="bg_del f_f comiis_kmvnum comiis_recommend_num" id="comiis_recommend_num">0</span>');var n=Number(domUtils.text("#comiis_recommend_num"));if($$(".comiis_recommend_list_a").length>0){let m=$$(".comiis_recommend_list_a");domUtils.removeClass(m,"comiis_recommend_list_on"),domUtils.addClass(m,"comiis_recommend_list_on"),domUtils.prepend(m,($$(".comiis_recommend_list_a li").length>0?"":'<li style="float:right;margin-right:0;"><a href="misc.php?op=recommend&tid= '+_unsafeWindow.tid+'&mod=faq&mobile=2"><span class="bg_b f_c"><em class="comiis_recommend_num">'+n+"</em>赞</span></a></li>")+'<li id="comiis_recommend_list_a'+_unsafeWindow.uid+'"><a href="home.php?mod=space&uid='+_unsafeWindow.uid+'"><img src="'+MTUtils.getAvatar(_unsafeWindow.uid,"small")+'"></a></li>');}if($$(".comiis_recommend_list_t").length>0){let m=$$(".comiis_recommend_list_t");domUtils.removeClass(m,"comiis_recommend_list_on"),domUtils.addClass(m,"comiis_recommend_list_on"),domUtils.prepend(m,`<span id="comiis_recommend_list_t${_unsafeWindow.uid}">
                          							<a href="home.php?mod=space&uid=${_unsafeWindow.uid}" class="f_c">${_unsafeWindow.username}</a>
													${$$(".comiis_recommend_list_t a").length>0?'<span class="f_d"> , </span>':""}
                        						</span>`);}if($$(".comiis_recommend_list_s").length>0){let m=$$(".comiis_recommend_list_s");domUtils.removeClass(m,"comiis_recommend_list_on"),domUtils.addClass(m,"comiis_recommend_list_on"),domUtils.prepend(m,($$(".comiis_recommend_list_s li").length>0,""+'<li id="comiis_recommend_list_s'+_unsafeWindow.uid+'"><a href="home.php?mod=space&uid='+_unsafeWindow.uid+'"><img loading="lazy" src="'+MTUtils.getAvatar(_unsafeWindow.uid,"small")+'"></a></li>'));}domUtils.text(".comiis_recommend_num",n+Number(_unsafeWindow.allowrecommend)),domUtils.text(".comiis_recommend_nums","+"+(n+Number(_unsafeWindow.allowrecommend))),domUtils.html(".comiis_recommend_addkey i","&#xe654;"),domUtils.removeClass(".comiis_recommend_color","f_b"),domUtils.addClass(".comiis_recommend_color","f_a"),$$(".comiis_recommend_list_s").length>0&&($$(".comiis_recommend_list_s li").length<7?domUtils.hide(".txshow_more",!1):domUtils.show(".txshow_more",!1)),Qmsg.success("点赞成功"+(i.daycount?`, 您今天还能点赞 ${i.daycount-1} 次`:""));}else c.indexOf("window.location.href = 'member.php?mod=logging&action=login&mobile=2'")>=0?window.location.href="member.php?mod=logging&action=login&mobile=2":Qmsg.error("没有点赞权限或帖子不存在");setTimeout(function(){_unsafeWindow.comiis_recommend_key=0;},500);}return !1});},setSubmitBtnClickEvent(){const t=this;domUtils.on(this.$el.$fastpostsubmit,"click",async e=>{var n,l,o,a,r,c;utils.preventEvent(e);var i=$("#needmessage"),s=domUtils.val(i);if(s=encodeURIComponent(s),!(s==null||s==="")){if(domUtils.val(t.$el.$fastpostsubmit)=="发表"){let m=Qmsg.loading("发表中，请稍后..."),p=t.$data.forum_action+"reply&handlekey=fastpost&loc=1&inajax=1",g=domUtils.serialize(t.$el.$form)+s;$$("#imglist input[type='hidden']").forEach(y=>{g=`${g}&${y.getAttribute("name")}=`;});let d=await httpx.post(p,{data:g,fetch:!0,allowInterceptConfig:!1,headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(m.close(),!d.status){Qmsg.error("发表失败，网络异常");return}let h=(l=(n=utils.parseFromString(d.data.responseText,"text/xml").lastChild)==null?void 0:n.firstChild)==null?void 0:l.nodeValue;if(_unsafeWindow.evalscript(h),this.handle_error(h))return;window.scrollTo({top:domUtils.height(document)}),domUtils.val("#needmessage",""),(o=$("#comiis_head"))==null||o.click(),domUtils.hide("#comiis_foot_menu_beautify_big .reply_user_content",!1),domUtils.attr('#comiis_foot_menu_beautify_big li[data-attr="发表"] input',"data-text","false"),domUtils.attr("#comiis_foot_menu_beautify li[data-attr='回帖'] input","placeholder","发帖千百度，文明第一步"),this.deleteReplyTextStorage();}else {let m=domUtils.attr("#comiis_foot_menu_beautify_big .reply_user_content","data-reply-serialize")+s;$$("#imglist input[type='hidden']").forEach(h=>{m=`${m}&${h.getAttribute("name")}=`;});let p=domUtils.attr("#comiis_foot_menu_beautify_big .reply_user_content","data-reply-action"),g=await httpx.post(p+"&handlekey=fastposts&loc=1&inajax=1",{allowInterceptConfig:!1,fetch:!0,data:m,headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(!g.status){Qmsg.error("回复失败，网络异常");return}let u=(r=(a=utils.parseFromString(g.data.responseText,"text/xml").lastChild)==null?void 0:a.firstChild)==null?void 0:r.nodeValue;if(log.info(u),_unsafeWindow.evalscript(u),this.handle_error(u))return;(c=$(u))==null||c.click(),domUtils.val("#needmessage",""),$("#comiis_head").click(),domUtils.val('#comiis_foot_menu_beautify_big li[data-attr="发表"] input',"发表"),domUtils.attr('#comiis_foot_menu_beautify_big li[data-attr="发表"] input',"data-text","false"),domUtils.attr("#comiis_foot_menu_beautify li[data-attr='回帖'] input","placeholder","发帖千百度，文明第一步"),window.scrollTo({top:domUtils.height(document)}),this.deleteReplyTextStorage(!0,p);}return !1}});},setGlobalReplyBtnClickEvent(){domUtils.on(document,"click",'.comiis_postli_times .dialog[href*="reply"]',async t=>{var p,g,d,u;utils.preventEvent(t);let e=t.target;domUtils.attr("#comiis_foot_menu_beautify_big","data-model","reply");let i=await httpx.get(domUtils.attr(e,"datahref")||e.href+"&inajax=1",{fetch:!0,allowInterceptConfig:!1});if(!i.status){Qmsg.error("网络异常，获取回复参数失败");return}let n=(g=(p=utils.parseFromString(i.data.responseText,"text/xml").lastChild)==null?void 0:p.firstChild)==null?void 0:g.nodeValue;if(this.handle_error(n))return;let l=domUtils.parseHTML(`<div>${n}</div>`,!0,!1),o=(d=l.querySelector(".comiis_tip .tip_tit a"))==null?void 0:d.getAttribute("href"),a=domUtils.text(l.querySelector(".comiis_tip span.f_0")),r=domUtils.val(l.querySelector("input[name='noticeauthormsg']")),c=domUtils.attr(l.querySelector("#postforms"),"action"),m=domUtils.serialize(l.querySelector("#postforms"));domUtils.text("#comiis_foot_menu_beautify_big .reply_user_content",`回复 ${a}: ${r}`),domUtils.show("#comiis_foot_menu_beautify_big .reply_user_content",!1),(u=$("#comiis_foot_menu_beautify li[data-attr='回帖'] input"))==null||u.click(),domUtils.focus("#comiis_foot_menu_beautify li[data-attr='回帖'] input"),domUtils.val("#fastpostsubmitline input","回复"),domUtils.attr("#comiis_foot_menu_beautify_big .fastpostform_new a","href",o),domUtils.attr("#comiis_foot_menu_beautify_big .reply_user_content","data-reply-url",o),domUtils.attr("#comiis_foot_menu_beautify_big .reply_user_content","data-reply-action",c),domUtils.attr("#comiis_foot_menu_beautify_big .reply_user_content","data-reply-serialize",m),tempReplyBtnNode=e,domUtils.val("#needmessage",domUtils.attr(e,"data-text")||""),PopsPanel.execMenu("mt-forum-post-editorOptimizationNormal-recordInputText",()=>{this.initReplyText(!0,o);});},{capture:!0});},setGlobalClickCheckEvent(){const t=this;let e=$("#fastpostform .header_y a").href;domUtils.on(document,"click",function(i){var n;let s=i.target;if($(".popups-popmenu")||MTEditorOptimizationNormal.$data.isUBBCodeInsertClick){log.info("点击的是弹出层，不做处理"),MTEditorOptimizationNormal.$data.isUBBCodeInsertClick=!1;return}else s!=null&&s.classList&&((n=s==null?void 0:s.classList)!=null&&n.contains(".dialog_reply"))||s!=null&&s.closest&&(s!=null&&s.closest(".dialog_reply"))||s===$('li[data-attr="回帖"] input')?(log.info("点击回复按钮或者是编辑器，显示编辑器"),domUtils.hide("#comiis_foot_menu_beautify",!1),domUtils.show("#comiis_foot_menu_beautify_big",!1),domUtils.focus("#needmessage")):window.event&&!utils.checkUserClickInNode($("#comiis_foot_menu_beautify_big"))&&(log.info("点击的其它区域，隐藏大编辑器，显示小编辑器"),domUtils.show("#comiis_foot_menu_beautify",!1),domUtils.hide("#comiis_foot_menu_beautify_big",!1),domUtils.attr("#comiis_foot_menu_beautify_big","data-model")=="reply"&&(domUtils.attr("#comiis_foot_menu_beautify_big","data-model","comment"),domUtils.val("#fastpostsubmitline input","发表"),domUtils.attr("#comiis_foot_menu_beautify_big .fastpostform_new a","href",e),domUtils.text("#comiis_foot_menu_beautify_big .reply_area .reply_user_content"),domUtils.hide("#comiis_foot_menu_beautify_big .reply_area .reply_user_content",!1),domUtils.attr("#comiis_foot_menu_beautify_big .reply_area .reply_user_content","data-reply-url",""),domUtils.attr("#comiis_foot_menu_beautify_big .reply_area .reply_user_content","data-reply-action",""),domUtils.attr("#comiis_foot_menu_beautify_big .reply_area .reply_user_content","data-reply-serialize",""),tempReplyBtnNode&&(domUtils.attr(tempReplyBtnNode,"data-text",domUtils.val("#needmessage")),domUtils.val("#needmessage",""),domUtils.attr('#comiis_foot_menu_beautify_big li[data-attr="发表"] input',"data-text","false"),domUtils.attr("#comiis_foot_menu_beautify li[data-attr='回帖'] input","placeholder","发帖千百度，文明第一步"))),domUtils.val(t.$el.$input)===""&&PopsPanel.execMenu("mt-forum-post-editorOptimizationNormal-recordInputText",()=>{t.initReplyText();}));});},setMenuIconToggleEvent(){domUtils.on("#comiis_foot_menu_beautify_big .menu_icon a i","click",function(t){let e=this;e.classList.contains("f_0")?(domUtils.hide("#comiis_foot_menu_beautify_big .menu_body",!1),domUtils.removeClass("#comiis_foot_menu_beautify_big .menu_icon a i","f_0")):(domUtils.show("#comiis_foot_menu_beautify_big .menu_body",!1),domUtils.removeClass("#comiis_foot_menu_beautify_big .menu_icon a i","f_0"),domUtils.addClass(e,"f_0"));});},setMenuImageClickEvent(){domUtils.on("#comiis_foot_menu_beautify_big .menu_icon a.comiis_pictitle","click",function(t){domUtils.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_post_tab",!1),domUtils.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab",!1),domUtils.show("#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab",!1);});},setMenuImageToggleEvent(){domUtils.on("#comiis_foot_menu_beautify_big #comiis_pictitle_tab #comiis_pictitle_key","click","li",function(t){let e=t.target;domUtils.removeClass("#comiis_foot_menu_beautify_big #comiis_pictitle_tab #comiis_pictitle_key li","bg_f"),domUtils.addClass(e,"bg_f"),_unsafeWindow.$("#comiis_foot_menu_beautify_big #comiis_pictitle_tab div.comiis_upbox").hide().eq(_unsafeWindow.$(e).index()).fadeIn();});},setMenuSmileClickEvent(){domUtils.on("#comiis_foot_menu_beautify_big .menu_icon a.comiis_smile","click",function(t){domUtils.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab",!1),domUtils.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab",!1),domUtils.show("#comiis_foot_menu_beautify_big .menu_body #comiis_post_tab",!1);let e=$("#comiis_foot_menu_beautify_big .menu_body .comiis_bqbox");domUtils.attr(e,"data-isLoaded")!=1&&(domUtils.attr(e,"data-isLoaded",1),e.querySelectorAll("img").forEach(i=>{let s=i.getAttribute("data-src");s&&i.setAttribute("src",s);}));});},setMenuSmileTabClickEvent(){domUtils.on("#comiis_foot_menu_beautify_big #comiis_smilies_key li","click",function(t){let e=this;domUtils.removeClass("#comiis_foot_menu_beautify_big #comiis_smilies_key li a"),domUtils.addClass(e.querySelector("a"),"bg_f b_l b_r"),_unsafeWindow.$("#comiis_post_tab div.swiper-wrapper.bqbox_c.comiis_optimization .swiper-slide").hide().eq(_unsafeWindow.$(e).index()).fadeIn();});},setMenuInsertClickEvent(){domUtils.on("#comiis_foot_menu_beautify_big .menu_icon a.commis_insert_bbs","click",t=>{domUtils.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_post_tab",!1),domUtils.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab",!1),domUtils.show("#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab",!1);});},async getReplyRecordSize(){var e;let t=await this.$data.db.get("data");return t.success?utils.getTextStorageSize((e=t==null?void 0:t.data)!=null&&e.length?JSON.stringify(t.data):""):utils.formatByteToSize(0)},async clearAllReplyRecord(){return await this.$data.db.deleteAll()},deleteReplyTextStorage(t=!1,e=void 0){const i=this;this.$data.db.get("data").then(s=>{if(!s.success||s.code===201){console.warn(s);return}let n=s.data.findIndex(l=>t?l.forumId===i.$data.tid&&e&&l.repquote===MTUtils.getRepquote(e):l.forumId===i.$data.tid&&utils.isNull(l.repquote));n!==-1&&(s.data.splice(n,1),this.$data.db.save("data",s.data).then(l=>{}));});},setMenuQuickUBB(){let t=$("#comiis_insert_ubb_tab_list"),e=MTQuickUBB();Reflect.set(e,"code",{key:"代码",value:"[code][/code]",tagL:"]",tagR:"[",L:"[code]",R:"[/code]",cursorL:"[code]",cursorLength:7,quickUBBReplace:"[code]replace[/code]"}),Reflect.set(e,"password",{key:"密码",value:"[password][/password]",tagL:"]",tagR:"[",L:"[password]",R:"[/password]",cursorL:"[password]",cursorLength:10,quickUBBReplace:"[password]replace[/password]"}),Object.keys(e).forEach(i=>{let s=e[i],n=domUtils.createElement("li",{className:"quickUBBs",innerHTML:`
                    <a href="javascript:;" class="comiis_xifont f_d">
                        <i class="comiis_font"></i>${s.key}
                    </a>
                `});domUtils.on(n,"click",l=>{domUtils.removeClass("#comiis_insert_ubb_tab div.comiis_post_urlico ul li.quickUBBs a.comiis_xifont","f_0"),domUtils.addClass("#comiis_insert_ubb_tab div.comiis_post_urlico ul li.quickUBBs a.comiis_xifont","f_d");let o=n.querySelector(".comiis_xifont");domUtils.removeClass(o,"f_d"),domUtils.removeClass(o,"f_d");let a=__pops.prompt({title:{text:"UBB代码",position:"center"},content:{text:"",placeholder:`请输入需要${s.key}的文字`,focus:!0},btn:{ok:{text:"插入",type:"primary",callback:r=>{if(r.text.trim()===""){Qmsg.error("输入框不能为空或纯空格");return}s.isFunc?_unsafeWindow.comiis_addsmilies(MTUBB_Rainbow(s.num,r.text)):s.quickUBBReplace?_unsafeWindow.comiis_addsmilies(s.quickUBBReplace.replaceAll("replace",r.text)):_unsafeWindow.comiis_addsmilies(r.text),a.close();}},cancel:{text:"关闭",callback:()=>{a.close();}}},width:"300px",height:"200px"});}),t.append(n);});}},optimizationCSS=`.f_c,\r
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
`,pathname=globalThis.location.pathname,search=globalThis.location.search;new URLSearchParams(search);const Router={isKMiSign(){return pathname.startsWith("/k_misign-sign.html")},isPost(){return pathname.startsWith("/thread-")||pathname.startsWith("/forum.php")&&search.startsWith("?mod=viewthread")},isPage(){return !!pathname.match(/^\/page-([0-9]+).html/g)},isGuide(){return pathname.startsWith("/forum.php")&&search.startsWith("?mod=guide")},isPlate(){return !!pathname.match(/\/forum-[0-9]{1,2}-[0-9]{1,2}.html/g)},isSearch(){return pathname.startsWith("/search.php")},isSpace(){return pathname.startsWith("/home.php")&&search.startsWith("?mod=space")},isMySpace(){return pathname.startsWith("/home.php")&&search.startsWith("?mod=space&do=profile&mycenter")},isSpaceWithAt(){return pathname.startsWith("/space-uid-")},isForumList(){return pathname.startsWith("/forum.php")&&search.startsWith("?forumlist")},isMessage(){return pathname.startsWith("/home.php")&&search.startsWith("?mod=space&do=notice")},isMessageList(){return pathname.startsWith("/home.php")&&search.startsWith("?mod=space&do=pm")},isPointsMall(){return pathname.startsWith("/keke_integralmall-keke_integralmall.html")||pathname.startsWith("/plugin.php")&&search.startsWith("?id=keke_integralmal")},isPostPublish(){return pathname.startsWith("/forum.php")&&search.startsWith("?mod=post")},isPostPublish_voting(){return pathname.startsWith("/forum.php")&&search.includes("&special=1")||search.includes("&fid=42")},isPostPublish_edit(){return this.isPostPublish()&&search.includes("&action=edit")},isPostPublish_newthread(){return this.isPostPublish()&&search.includes("&action=newthread")},isPostPublish_reply(){return this.isPostPublish()&&search.includes("&action=reply")}},MTSmiliesDict=()=>({"[呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq001.gif","[撇嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq002.gif","[色]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq003.gif","[发呆]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq004.gif","[得意]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq005.gif","[流泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq006.gif","[害羞]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq007.gif","[闭嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq008.gif","[睡]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq009.gif","[大哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq010.gif","[尴尬]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq011.gif","[发怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq012.gif","[调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq013.gif","[呲牙]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq014.gif","[惊讶]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq015.gif","[难过]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq016.gif","[酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq017.gif","[冷汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq018.gif","[抓狂]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq019.gif","[吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq020.gif","[偷笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq021.gif","[可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq022.gif","[白眼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq023.gif","[傲慢]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq024.gif","[饥饿]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq025.gif","[困]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq026.gif","[惊恐]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq027.gif","[流汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq028.gif","[憨笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq029.gif","[装逼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq030.gif","[奋斗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq031.gif","[咒骂]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq032.gif","[疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq033.gif","[嘘]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq034.gif","[晕]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq035.gif","[折磨]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq036.gif","[衰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq037.gif","[骷髅]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq038.gif","[敲打]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq039.gif","[再见]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq040.gif","[擦汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq041.gif","[抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq042.gif","[鼓掌]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq043.gif","[糗大了]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq044.gif","[坏笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq045.gif","[左哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq046.gif","[右哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq047.gif","[哈欠]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq048.gif","[鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq049.gif","[委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq050.gif","[快哭了]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq051.gif","[阴脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq052.gif","[亲亲]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq053.gif","[吓]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq054.gif","[可怜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq055.gif","[眨眼睛]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq056.gif","[笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq057.gif","[dogeQQ]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq058.gif","[泪奔]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq059.gif","[无奈]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq060.gif","[托腮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq061.gif","[卖萌]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq062.png","[斜眼笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq063.gif","[喷血]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq064.gif","[惊喜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq065.gif","[骚扰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq066.gif","[小纠结]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq067.gif","[我最美]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq068.gif","[菜刀]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq069.gif","[西瓜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq070.gif","[啤酒]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq071.gif","[篮球]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq072.gif","[乒乓]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq073.gif","[咖啡]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq074.gif","[饭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq075.gif","[猪]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq076.gif","[玫瑰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq077.gif","[凋谢]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq078.gif","[示爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq079.gif","[爱心]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq080.gif","[心碎]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq081.gif","[蛋糕]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq082.gif","[闪电]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq083.gif","[炸弹]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq084.gif","[刀]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq085.gif","[足球]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq086.gif","[瓢虫]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq087.gif","[便便]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq088.gif","[月亮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq089.gif","[太阳]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq090.gif","[礼物]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq091.gif","[抱抱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq092.gif","[喝彩]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq93.gif","[祈祷]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq94.gif","[棒棒糖]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq95.gif","[药]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq96.gif","[赞]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq097.gif","[差劲]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq098.gif","[握手]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq099.gif","[胜利]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq100.gif","[抱拳]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq101.gif","[勾引]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq102.gif","[拳头]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq103.gif","[爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq105.gif","[NO]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq106.gif","[OK]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq107.gif","[#呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_1.png","[#滑稽]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_10.png","[#吐舌]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_3.png","[#哈哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_2.png","[#啊]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_23.png","[#酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_22.png","[#怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_13.png","[#开心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_39.png","[#汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_14.png","[#泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_16.png","[#黑线]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_15.png","[#鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_21.png","[#不高兴]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_12.png","[#真棒]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_17.png","[#钱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_40.png","[#疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_26.png","[#阴险]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_20.png","[#吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_34.png","[#咦]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_41.png","[#委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_29.png","[#花心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_6.png","[#呼～]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_42.png","[#激动]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_5.png","[#冷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_43.png","[#可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_4.png","[#What？]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_25.png","[#勉强]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_38.png","[#狂汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_24.png","[#酸爽]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_27.png","[#乖]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_8.png","[#雅美蝶]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_28.png","[#睡觉]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_31.png","[#惊哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_19.png","[#哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_44.png","[#笑尿]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_32.png","[#惊讶]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_30.png","[#小乖]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_7.png","[#喷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_18.png","[#抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_33.png","[#捂嘴笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_9.png","[#你懂的]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_11.png","[#犀利]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_35.png","[#小红脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_36.png","[#懒得理]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_37.png","[#爱心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_45.png","[#心碎]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_46.png","[#玫瑰]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_47.png","[#礼物]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_48.png","[#彩虹]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_49.png","[#太阳]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_50.png","[#月亮]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_51.png","[#钱币]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_52.png","[#咖啡]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_53.png","[#蛋糕]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_54.png","[#大拇指]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_55.png","[#胜利]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_56.png","[#爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_57.png","[#OK]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_58.png","[#弱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_59.png","[#沙发]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_60.png","[#纸巾]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_61.png","[#香蕉]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_62.png","[#便便]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_63.png","[#药丸]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_64.png","[#红领巾]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_65.png","[#蜡烛]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_66.png","[#三道杠]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_67.png","[#音乐]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_68.png","[#灯泡]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_69.png","[doge]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/1.png","[doge思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/2.png","[doge再见]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/3.png","[doge生气]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/4.png","[doge气哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/5.png","[doge笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/7.png","[doge调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/6.png","[doge啊哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/8.png","[doge原谅TA]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/9.png","[miao]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/10.png","[miao思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/11.png","[miao拜拜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/12.png","[miao生气]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/13.png","[miao气哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/14.png","[二哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/15.png","[摊手]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/19.png","[w并不简单]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/20.png","[w滑稽]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/21.png","[w色]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/22.png","[w爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/23.png","[w拜拜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/24.png","[w悲伤]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/25.png","[w鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/26.png","[w馋嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/27.png","[w冷汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/28.png","[w打哈欠]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/29.png","[w打脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/30.png","[w敲打]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/31.png","[w生病]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/32.png","[w闭嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/33.png","[w鼓掌]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/34.png","[w哈哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/35.png","[w害羞]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/36.png","[w呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/37.png","[w黑线]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/38.png","[w哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/39.png","[w调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/40.png","[w可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/41.png","[w可怜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/42.png","[w酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/43.png","[w困]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/44.png","[w懒得理你]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/45.png","[w流泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/46.png","[w怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/47.png","[w怒骂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/48.png","[w钱]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/49.png","[w亲亲]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/50.png","[w傻眼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/51.png","[w便秘]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/52.png","[w失望]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/53.png","[w衰]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/54.png","[w睡觉]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/55.png","[w思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/56.png","[w开心]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/57.png","[w色舔]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/58.png","[w偷笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/59.png","[w吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/60.png","[w抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/61.png","[w委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/62.png","[w笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/63.png","[w嘻嘻]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/64.png","[w嘘]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/65.png","[w阴险]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/66.png","[w疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/67.png","[w抓狂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/70.png","[w晕]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/69.png","[w右哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/68.png","[w左哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/71.png","[w肥皂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/77.png","[w奥特曼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/78.png","[w草泥马]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/79.png","[w兔子]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/80.png","[w熊猫]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/81.png","[w猪头]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/82.png","[w→_→]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/83.png","[w给力]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/84.png","[w囧]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/85.png","[w萌]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/86.png","[w神马]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/87.png","[w威武]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/88.png"}),MTEditorPreview={parseText(t){const e=MTSmiliesDict();let i=t.match(/\[attachimg\]([\s\S]+?)\[\/attachimg\]/g);i&&i.forEach(b=>{let f=b.match(/\[attachimg\]([\s\S]+?)\[\/attachimg\]/),w=f?f[f.length-1]:"",T=domUtils.attr(`#aimg_${w}`,"title"),I=domUtils.attr(`#aimg_${w}`,"src");I||(T="该图片不存在"),t=t.replace(b,`<span class="comiis_postimg vm"><img loading="lazy" id="aimg_${w}" src="${I}" alt="${T}" title="${T}"></span>`);});let s=t.match(/\[code\]([\s\S]*?)\[\/code\]/g);s&&s.forEach(b=>{let f=b.match(/\[code\]([\s\S]*?)\[\/code\]/),w=f?f[f.length-1]:"",T="",I=w.split(`
`);I.length==1?T=`<li>${w}</li>`:Array.from(I).forEach((E,R)=>{R==I.length-1?T=`${T}<li>${E}</li>`:T=`${T}<li>${E}<br></li>`;}),t=t.replace(b,`
                <div class="comiis_blockcode comiis_bodybg b_ok f_b"><div class="bg_f b_l"><ol>${T}</ol></div></div>`);});let n=t.match(/\[url\=[\s\S]*?\]([\s\S]*?)\[\/url\]/g);n&&n.forEach(b=>{let f=b.match(/\[url=([\s\S]*?)\][\s\S]*\[\/url\]/),w=b.match(/\[url=[\s\S]*?\]([\s\S]*?)\[\/url\]/),T=f?f[f.length-1]:"",I=w?w[w.length-1]:"";t=t.replace(b,`<a href="${T}" target="_blank">${I}</a>`);});let l=t.match(/\[color\=[\s\S]*?\]([\s\S]*?)\[\/color\]/g);l&&l.forEach(b=>{let f=b.match(/\[color=([\s\S]*?)\][\s\S]*\[\/color\]/),w=b.match(/\[color=[\s\S]*?\]([\s\S]*?)\[\/color\]/),T=f?f[f.length-1]:"",I=w?w[w.length-1]:"";t=t.replace(b,`<font color="${T}">${I}</font>`);});let o=t.match(/\[size\=[\s\S]*?\]([\s\S]*?)\[\/size\]/g);o&&o.forEach(b=>{let f=b.match(/\[size=([\s\S]*?)\][\s\S]*\[\/size\]/),w=b.match(/\[size=[\s\S]*?\]([\s\S]*?)\[\/size\]/),T=f?f[f.length-1]:"",I=w?w[w.length-1]:"";t=t.replace(b,`<font size="${T}">${I}</font>`);});let a=t.match(/\[img(|\=[\s\S]+?)\]([\s\S]*?)\[\/img\]/g);a&&a.forEach(b=>{let f=null,w=null,T=b.match(/\[img\=([\s\S]+?)\][\s\S]*?\[\/img\]/);T&&(T=T[T.length-1].split(","),f=T[0],w=T[1]),f=f||"",w=w||"";let I=b.match(/\[img\]([\s\S]*?)\[\/img\]|\[img=[\s\S]*?\]([\s\S]*?)\[\/img\]/),E="";I&&(I[I.length-1]==null?E=I[I.length-2]:E=I[I.length-1]),t=t.replace(b,`<img loading="lazy" src="${E}" border="0" alt="" width="${f}" height="${w}" crossoriginNew="anonymous">`);});let r=t.match(/\[hide\]([\s\S]*?)\[\/hide\]/g);r&&r.forEach(b=>{let f=b.match(/\[hide\]([\s\S]*?)\[\/hide\]/),w=f?f[f.length-1]:"";t=t.replace(b,`<div class="comiis_quote bg_h f_c"><h2 class="f_a">本帖隐藏的内容: </h2>${w}</div>`);});let c=t.match(/\[hide=[\s\S]*?\]([\s\S]*?)\[\/hide\]/g);c&&c.forEach(b=>{let f=b.match(/\[hide=([\s\S]*?)\]([\s\S]*?)\[\/hide\]/),w=f?f[f.length-2]:"";w=w.split(",");let T=w.length==2?w[1]:"";t=t.replace(b,`<div class="comiis_quote bg_h f_c">以下内容需要积分高于 ${T} 才可浏览</div>`);});let m=t.match(/\[quote\]([\s\S]*?)\[\/quote\]/g);m&&m.forEach(b=>{let f=b.match(/\[quote\]([\s\S]*?)\[\/quote\]/),w=f?f[f.length-1]:"";t=t.replace(b,`<div class="comiis_quote bg_h b_dashed f_c"><blockquote><font>回复</font> ${w}</blockquote></div>`);});let p=t.match(/\[free\]([\s\S]*?)\[\/free\]/g);p&&p.forEach(b=>{let f=b.match(/\[free\]([\s\S]*?)\[\/free\]/),w=f?f[f.length-1]:"";t=t.replace(b,`<div class="comiis_quote bg_h f_c"><blockquote>${w}</blockquote></div>`);});let g=t.match(/\[b\]([\s\S]*?)\[\/b\]/g);g&&g.forEach(b=>{let f=b.match(/\[b\]([\s\S]*?)\[\/b\]/i),w=f?f[f.length-1]:"";t=t.replace(b,`<strong>${w}</strong>`);});let d=t.match(/\[u\]([\s\S]*?)\[\/u\]/g);d&&d.forEach(b=>{let f=b.match(/\[u\]([\s\S]*?)\[\/u\]/),w=f?f[f.length-1]:"";t=t.replace(b,`<u>${w}</u>`);});let u=t.match(/\[i\]([\s\S]*?)\[\/i\]/g);u&&u.forEach(b=>{let f=b.match(/\[i\]([\s\S]*?)\[\/i\]/),w=f?f[f.length-1]:"";t=t.replace(b,`<i>${w}</i>`);});let h=t.match(/\[s\]([\s\S]*?)\[\/s\]/g);h&&h.forEach(b=>{let f=b.match(/\[s\]([\s\S]*?)\[\/s\]/),w=f?f[f.length-1]:"";t=t.replace(b,`<strike>${w}</strike>`);});let y=t.match(/\[([\s\S]+?)\]/g);y&&y.forEach(b=>{let f=e[b];f&&(t=t.replace(b,`<img loading="lazy" src="${f}" border="0" alt="" smilieid="">`));});let _=t.match(/\[media=[\s\S]+?\][\s\S]+?\[\/media\]/g);_&&_.forEach(b=>{let f=b.match(/\[media=[\s\S]*?\]([\s\S]*?)\[\/media\]/),w=f?f[f.length-1]:"";w&&(t=t.replace(b,`<ignore_js_op><span><iframe src="${w}" border="0" scrolling="no" framespacing="0" allowfullscreen="true" style="max-width: 100%" width="100%" height="auto" frameborder="no"></iframe></span></ignore_js_op>`));});let x=t.match(/\[email=[\s\S]+?\][\s\S]+?\[\/email\]/g);x&&x.forEach(b=>{let f=b.match(/\[email=([\s\S]*?)\][\s\S]*?\[\/email\]/),w=b.match(/\[email=[\s\S]*?\]([\s\S]*?)\[\/email\]/),T=f.length?f[f.length-1]:"",I=w.length?w[w.length-1]:"";(T||I)&&(t=t.replace(b,`<a href="mailto:${T}">${I}</a>`));});let S=t.match(/\[align=[\s\S]+?\][\s\S]+?\[\/align\]/g);S&&S.forEach(b=>{let f=b.match(/\[align=([\s\S]*?)\][\s\S]+?\[\/align\]/),w=b.match(/\[align=[\s\S]*?\]([\s\S]+?)\[\/align\]/),T=f.length?f[f.length-1]:"",I=w.length?w[w.length-1]:"";(T||I)&&(t=t.replace(b,`<div align="${T}">${I}</div>`));});let v=t.match(/\[qq\][\s\S]*?\[\/qq\]/g);v&&v.forEach(b=>{let f=b.match(/\[qq\]([\s\S]*?)\[\/qq\]/),w=f?f[f.length-1]:"";t=t.replace(b,`<a href="http://wpa.qq.com/msgrd?v=3&uin=${w}&site=[Discuz!]&from=discuz&menu=yes" target="_blank"><img loading="lazy" src="static/image/common/qq_big.gif" border="0"></a>`);});let U=t.match(/\[td\][\s\S]+?\[\/td\]/g);U&&U.forEach(b=>{let f=b.match(/\[td\]([\s\S]*?)\[\/td\]/),w=f?f[f.length-1]:"";t=t.replace(b,`<td>${w}</td>`);});let k=t.match(/\[tr\][\s\S]+?\[\/tr\]/g);k&&k.forEach(b=>{let f=b.match(/\[tr\]([\s\S]*?)\[\/tr\]/),w=f?f[f.length-1]:"";t=t.replace(b,`<tr>${w}</tr>`);});let q=t.match(/\[table\][\s\S]+?\[\/table\]/g);q&&q.forEach(b=>{let f=b.match(/\[table\]([\s\S]*?)\[\/table\]/),w=f?f[f.length-1]:"";w=w.replace(/\n/g,""),t=t.replace(b,`<table>${w}</table>`);});let M=t.match(/\[list=[\s\S]+?\][\s\S]+?\[\/list\]/g);return M&&M.forEach(b=>{let f=b.match(/\[list=([\s\S]*?)\][\s\S]*?\[\/list\]/),w=b.match(/\[list=[\s\S]*?\]([\s\S]*?)\[\/list\]/),T=f?f[f.length-1]:"",I="";T==="a"?I="litype_2":T==="A"?I="litype_3":T.length===1&&T.match(/[0-9]{1}/)&&(I="litype_1");let E=w?w[w.length-1]:"",R=E.split("[*]");if(R.length>1){let A="";R[0].replace(/[\s]*/,"")==""&&(R=R.slice(1)),Array.from(R).forEach(L=>{A=`${A}<li>${L}</li>`;}),E=A;}E=E.replace(/\n/g,""),t=t.replace(b,`<ul type="${T}" class="${I}">${E}</ul>`);}),t},parseVoteText(){let t=["rgb(233, 39, 37)","rgb(242, 123, 33)","rgb(242, 166, 31)","rgb(90, 175, 74)","rgb(66, 196, 245)","rgb(0, 153, 204)","rgb(51, 101, 174)","rgb(42, 53, 145)","rgb(89, 45, 142)","rgb(219, 49, 145)","rgb(233, 39, 37)","rgb(242, 123, 33)","rgb(242, 166, 31)","rgb(90, 175, 74)","rgb(66, 196, 245)","rgb(0, 153, 204)","rgb(51, 101, 174)","rgb(42, 53, 145)","rgb(89, 45, 142)","rgb(219, 49, 145)"],e=$$(".comiis_polloption_add ul li:first-child div.flex .comiis_input.kmshow[type='text']"),i=parseInt(domUtils.val("input#maxchoices"));i=isNaN(i)?0:i,i=i>0?i:0,i=i>e.length?e.length:i;let s=parseInt(domUtils.val("input#polldatas"));s=isNaN(s)?0:s,_unsafeWindow.$("input#visibilitypoll").parent().find(".comiis_checkbox").hasClass("comiis_checkbox_close");let n=!_unsafeWindow.$("input#overt").parent().find(".comiis_checkbox").hasClass("comiis_checkbox_close"),l="",o="";e.forEach((a,r)=>{r>=20||(o=o+`
                    <li class="kmnop">
                        <input type="${i>1?"checkbox":"radio"}">
                        <label><i class="comiis_font f_d"></i>${a.value}</label>
                    </li>
                    <li class="poll_ok cl">
                        <span class="bg_b">
                            <em style="width:2%;background-color:${t[r]}"></em>
                        </span>
                        <em style="color:${t[r]}">0% (0)</em>
                    </li>`);}),l=`
                    <div class="comiis_poll cl comiis_input_style b_t postforum_vote">
                            <div class="comiis_poll_top">
                                <i class="comiis_font bg_a f_f"></i>
                                <h2>${i>1?'多选投票<em class="f_c"> 最多可选 '+i+" 项</em>":"单选投票"}</h2>
                                <p class="f_c">共有 0 人参与投票</p>
                                ${s>0?` <p class="kmbtn">
                                <span class="bg_e">距结束还有:
                                ${s>1?'<em class="f_a">'+(s-1)+"</em> 天 ":""}<em class="f_a">23</em> 小时 <em class="f_a">59</em> 分钟</span>
                            </p>`:""}
                               
                            </div>
                            <div class="comiis_poll_list comiis_input_style cl">
                                <ul>
                                    ${o}
                                </ul>
                            </div>
                            <div class="comiis_poll_bottom cl">
                                <input type="submit" value="提交" class="formdialog comiis_btn kmshow bg_c f_f" disabled>
                                ${n?'<div class="comiis_quote bg_h b_dashed f_a"><i class="comiis_font"></i>此为公开投票，其他人可看到您的投票项目</div>':""}
                            </div>
                    </div>
                `,_unsafeWindow.$(".gm_plugin_previewpostforum_html .postforum_vote").remove(),_unsafeWindow.$(".gm_plugin_previewpostforum_html .comiis_messages.comiis_aimg_show").children().eq(0).before(_unsafeWindow.$(l));}},MTEditorOptimization={$data:{db:new Utils.indexedDB("mt_full_reply_record","input_text"),get type(){return Router.isPostPublish_voting()?"post-vote":"post"},get tid(){return MTUtils.getThreadId(window.location.href)},get pid(){return MTUtils.getPostId(window.location.href)}},$key:{noPublishSerializeText:"mt-editor-no-publish-serialize-text",noPublishVotingSerializeText:"mt-editor-no-publish-voting-serialize-text"},$el:{$title:null,$input:null,$form:null},init(){log.info("编辑器优化"),addStyle(optimizationCSS),this.overridePageEditor();},overridePageEditor(){const t=this;this.$el.$title=$("#needsubject"),this.$el.$form=$("#postform"),this.$el.$input=$("#needmessage"),domUtils.hide(domUtils.parent(".comiis_scrollTop_box"),!1),domUtils.css("#postform .comiis_post_from.mt15",{"margin-top":"0px !important"});let e=_unsafeWindow.$("#postform .comiis_post_from #comiis_post_tab");_unsafeWindow.$("#postform .comiis_post_from .comiis_post_ico").append(e),e.remove(),_unsafeWindow.textarea_scrollHeight=()=>{};let i=_unsafeWindow.$.fn.comiis_delete;_unsafeWindow.$.fn.extend({comiis_delete:function(...r){let c=i.call(this,...r);return utils.dispatchEvent(t.$el.$input,"input"),c}}),domUtils.hide(".comiis_btnbox",!1),this.initVotePage(),_unsafeWindow.$(".gm_plugin_chartbed .comiis_over_box.comiis_input_style #imglist"),addStyle(`
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
        `),domUtils.attr("#filedata","multiple",!0),domUtils.remove(".gm_plugin_chartbed .comiis_over_box.comiis_input_style"),domUtils.on(document,"#comiis_pictitle_key li","click",function(){domUtils.removeClass("#comiis_pictitle_key li","bg_f"),domUtils.addClass(this,"bg_f"),_unsafeWindow.$(".gm_plugin_chartbed .comiis_upbox").hide().eq(_unsafeWindow.$(this).index()).fadeIn();});let s=parseInt(domUtils.css("#comiis_head","height"))||0,n=parseInt(domUtils.css("#comiis_sub","height"))||0,l=$("#pollm_c_1")?60:0,o=parseInt(domUtils.css(".comiis_styli.comiis_flex","height"))||0,a=parseInt(domUtils.css(".comiis_post_ico.comiis_minipost_icot","height"))||0;domUtils.css("#needmessage","height",`${window.screen.height-s-n-48-o-a-10}px`),domUtils.css("#needmessage","marginBottom",l+"px"),Router.isPostPublish_edit()&&domUtils.val("#needsubject")===""?domUtils.hide(".comiis_styli.comiis_flex",!1):domUtils.attr("#needsubject","placeholder","请输入完整的帖子标题 (1-80个字)"),domUtils.attr("#needmessage","placeholder","来吧，尽情发挥吧..."),typeof _unsafeWindow.comiis_addsmilies=="function"&&(_unsafeWindow.comiis_addsmilies=r=>{_unsafeWindow.$("#needmessage").comiis_insert(r),_unsafeWindow.$("#needmessage")[0].dispatchEvent(new Event("input"));}),(PopsPanel.getValue("mt-forum-post-editorOptimizationNormal-recordInputText")||PopsPanel.getValue("mt-forum-post-editorOptimization-recordInputText"))&&(this.setInputChangeEvent(),this.initReplyText()),this.initDeleteBtn(),this.initSaveDraftBtn(),this.initSaveBtn(),this.initPostBtn(),this.initReplyBtn(),this.observerChangeEditorHeight(),this.listenResize(),this.initSelectPostingSection(),this.initUBB(),this.initImage(),this.initPreview(),this.initCharacterCount(),this.initSettingImmersionMode();},async initReplyText(){const t=this;let e=null,i=null,s=null;if(Router.isPostPublish_newthread())log.info("新发布帖子的页面"),Router.isPostPublish_voting()?(log.info("投票页面"),e=_GM_getValue(this.$key.noPublishVotingSerializeText),s=()=>{_GM_deleteValue(t.$key.noPublishVotingSerializeText);}):(log.info("普通帖子页面"),e=_GM_getValue(this.$key.noPublishSerializeText),s=()=>{_GM_deleteValue(this.$key.noPublishSerializeText);});else if(Router.isPostPublish_edit()){log.info("草稿的页面"),log.info(`type：${this.$data.type} tid：${this.$data.tid} pid：${this.$data.pid}`),(await this.$data.db.get("data")).code===201&&await this.$data.db.save("data",[]);let l=await this.$data.db.get("data");if(l.data){let o=l.data.find(a=>{if(a.type===t.$data.type&&!(a.tid!==t.$data.tid||a.pid!==t.$data.pid))return !0});o&&(e=o.data,s=async()=>{let a=await this.$data.db.get("data");if(a.data){let r=a.data.findIndex(c=>{if(c.type===t.$data.type&&!(c.tid!==t.$data.tid||c.pid!==t.$data.pid))return !0});r!=-1&&(a.data.splice(r,1),await this.$data.db.save("data",a.data));}});}}else if(Router.isPostPublish_reply()&&(log.info("回复页面"),PopsPanel.getValue("mt-forum-post-editorOptimizationNormal-recordInputText"))){(await MTEditorOptimizationNormal.$data.db.get("data")).code===201&&await this.$data.db.save("data",[]);let l=await MTEditorOptimizationNormal.$data.db.get("data");if(l.data){let o=l.data.find(a=>a.forumId===t.$data.tid&&a.repquote===MTUtils.getRepquote(window.location.href));o&&(e=o);}}e&&(Router.isPostPublish_voting()?i=()=>{let n=t.$el.$form.querySelector("input[name='subject']"),l=t.$el.$form.querySelector("textarea[name='message']"),o=t.$el.$form.querySelector("input[name='maxchoices']"),a=t.$el.$form.querySelector("input[name='expiration']"),r=t.$el.$form.querySelector("input[name='visibilitypoll']"),c=t.$el.$form.querySelector("input[name='overt']");return domUtils.val(n,e.title),domUtils.val(l,e.content),domUtils.val(o,e.maxchoices),domUtils.val(a,e.expiration),domUtils.val(r,e.visibilitypoll),domUtils.val(c,e.overt),utils.dispatchEvent(n,"input"),utils.dispatchEvent(l,"input"),utils.dispatchEvent(o,"input"),utils.dispatchEvent(a,"input"),utils.dispatchEvent(r,"input"),utils.dispatchEvent(c,"input"),!0}:Router.isPostPublish_reply()?i=()=>{let n=t.$el.$form.querySelector("textarea[name='message']");return domUtils.val(n,e.text),utils.dispatchEvent(n,"input"),!0}:i=()=>{let n=t.$el.$form.querySelector("input[name='subject']"),l=t.$el.$form.querySelector("textarea[name='message']");return domUtils.val(n,e.title),domUtils.val(l,e.content),utils.dispatchEvent(n,"input"),utils.dispatchEvent(l,"input"),!0},Router.isPostPublish_newthread()?(log.info("新发布帖子的页面"),typeof i=="function"&&i()):Router.isPostPublish_edit()?(log.info("草稿的页面"),typeof i=="function"&&typeof s=="function"&&__pops.confirm({title:{text:"提示",position:"center"},content:{text:"<p>存在历史写入的数据，是否恢复到编辑器里？</p>",html:!0},btn:{merge:!0,position:"space-between",ok:{text:"恢复",callback:async n=>{await i()&&(Qmsg.success("恢复成功"),n.close());}},other:{enable:!0,type:"danger",text:"删除该数据",callback:async n=>{await s(),n.close(),Qmsg.success("删除成功");}}},width:"300px",height:"200px"})):Router.isPostPublish_reply()&&(log.info("回复页面"),typeof i=="function"&&i()));},async getReplyRecordSize(){var e;let t=await this.$data.db.get("data");return t.success?utils.getTextStorageSize((e=t==null?void 0:t.data)!=null&&e.length?JSON.stringify(t.data):""):utils.formatByteToSize(0)},async clearAllReplyRecord(){return await this.$data.db.deleteAll()},deleteReplyTextStorage(){const t=this;this.$data.db.get("data").then(e=>{if(!e.success){console.warn(e);return}let i=Router.isPostPublish_voting()?"post-vote":"post",s=MTUtils.getThreadId(window.location.href),n=MTUtils.getPostId(window.location.href),l=e.data.findIndex(o=>{if(o.type===i&&!(o.tid!==s||o.pid!==n))return !0});l!==-1&&(e.data.splice(l,1),t.$data.db.save("data",e.data).then(o=>{}));});},setInputChangeEvent(){const t=this;domUtils.on([this.$el.$input,this.$el.$title].filter(Boolean),["input","propertychange"],function(e){let i=null;if(Router.isPostPublish_voting()){let s=t.$el.$form.querySelector("input[name='subject']"),n=t.$el.$form.querySelector("textarea[name='message']"),l=t.$el.$form.querySelector("input[name='maxchoices']"),o=t.$el.$form.querySelector("input[name='expiration']"),a=t.$el.$form.querySelector("input[name='visibilitypoll']"),r=t.$el.$form.querySelector("input[name='overt']");i={title:s.value,maxchoices:l.value,expiration:o.value,visibilitypoll:a.checked,overt:r.checked,content:n.value};}else {let s=t.$el.$form.querySelector("input[name='subject']"),n=t.$el.$form.querySelector("textarea[name='message']");i={title:s==null?void 0:s.value,content:n.value};}Router.isPostPublish_newthread()?(log.info("内容改变 ==> 新发布帖子的页面"),Router.isPostPublish_voting()?_GM_setValue(t.$key.noPublishVotingSerializeText,i):_GM_setValue(t.$key.noPublishSerializeText,i)):Router.isPostPublish_edit()?(log.info("内容改变 ==> 草稿的页面"),t.$data.db.get("data").then(s=>{if(!s.success){console.warn(s);return}let n=s.data.findIndex(l=>{if(l.type===t.$data.type&&!(l.tid!==t.$data.tid||l.pid!==t.$data.pid))return !0});n!==-1&&s.data.splice(n,1),s.data.push({url:window.location.href,data:i,pid:t.$data.pid,tid:t.$data.tid,type:t.$data.type}),t.$data.db.save("data",s.data).then(l=>{});})):Router.isPostPublish_reply()&&(log.info("内容改变 ==> 回复页面"),PopsPanel.execMenu("mt-forum-post-editorOptimizationNormal-recordInputText",()=>{MTEditorOptimizationNormal.$data.db.get("data").then(s=>{if(!s.success||s.code===201){console.warn(s);return}let n=s.data.findIndex(l=>l.forumId===t.$data.tid&&l.repquote===MTUtils.getRepquote(window.location.href));n!==-1?i.content==null||i.content===""?s.data.splice(n,1):s.data[n]=utils.assign(s.data[n],{text:i.content}):s.data.push({forumId:t.$data.tid,url:window.location.href,repquote:MTUtils.getRepquote(window.location.href),text:i.content}),MTEditorOptimizationNormal.$data.db.save("data",s.data).then(l=>{});});}));});},initDeleteBtn(){if(!$(".comiis_btnbox .comiis_btn.bg_del"))return;let e=$("#comiis_head .header_y"),i=domUtils.createElement("input",{className:"new_btn_del"},{type:"button",value:"删除"});domUtils.append(e,i),domUtils.on(i,"click",function(){__pops.confirm({title:{text:"提示",position:"center"},content:{text:"<p>是否删除帖子?</p>",html:!0},btn:{ok:{callback:s=>{s.close(),_unsafeWindow.comiis_delthread();}}},width:"300px",height:"200px"});});},initSaveBtn(){let t=domUtils.selector(".comiis_btnbox button#postsubmit:contains('保存')");if(!t||domUtils.text(t).includes("草稿"))return;let e=$("#comiis_head .header_y"),i=domUtils.createElement("input",{className:"new_btn_save"},{type:"button",value:"保存"});domUtils.append(e,i),domUtils.on(i,"click",function(){t.click();});},initPostBtn(){let t=domUtils.selector(".comiis_btnbox button#postsubmit:contains('发表')");if(!t)return;let e=$("#comiis_head .header_y"),i=domUtils.createElement("input",{className:"new_btn_post"},{type:"button",value:"发表"});domUtils.append(e,i),domUtils.on(i,"click",function(){domUtils.val("#postsave",0),t.click();});},initReplyBtn(){const t=this;let e=domUtils.selector(".comiis_btnbox button#postsubmit:contains('回复')");if(!e)return;let i=$("#comiis_head .header_y"),s=domUtils.createElement("input",{className:"new_btn_reply"},{type:"button",value:"回复"});domUtils.append(i,s),domUtils.on(s,"click",function(){e.click(),t.deleteReplyTextStorage();});},initVotePage(){$$(".comiis_scrollTop_box").length&&(_unsafeWindow.$("#htmlon").parent().append(`
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
                `),_unsafeWindow.$(".comiis_scrollTop_box .swiper-slide a:contains('发表帖子')").attr("class")!="f_c"?_unsafeWindow.$(".comiis_checkbox.comiis_choose_post").removeClass("comiis_checkbox_close"):_unsafeWindow.$(".comiis_checkbox.comiis_choose_vote").removeClass("comiis_checkbox_close"),_unsafeWindow.$(".comiis_checkbox.comiis_choose_post").on("click",function(){let t=_unsafeWindow.$(this);t.addClass("comiis_checkbox_close"),_unsafeWindow.$(".comiis_checkbox.comiis_choose_vote").addClass("comiis_checkbox_close"),t.removeClass("comiis_checkbox_close"),window.location.href=window.location.href.replace("&special=1","");}),_unsafeWindow.$(".comiis_checkbox.comiis_choose_vote").on("click",function(){let t=_unsafeWindow.$(this);t.addClass("comiis_checkbox_close"),_unsafeWindow.$(".comiis_checkbox.comiis_choose_post").addClass("comiis_checkbox_close"),t.removeClass("comiis_checkbox_close"),window.location.href=window.location.href+"&special=1";}));},initSaveDraftBtn(){let t=domUtils.selector(".comiis_btnbox button#postsubmit em:contains('保存草稿')");if(!t)return;let e=$("#comiis_head .header_y"),i=domUtils.createElement("input",{className:"new_btn_save_temp"},{type:"button",value:"保存草稿"});$("#needsubject"),domUtils.append(e,i),domUtils.selector(".comiis_scrollTop_box .swiper-slide a:contains('发表帖子')"),domUtils.on(i,"click",function(){t.click();});},observerChangeEditorHeight(){var t=0;utils.waitNode("#postform > div > div.comiis_post_ico.comiis_minipost_icot").then(e=>{utils.mutationObserver(e,{callback:i=>{var s=$("#postform > div > div.comiis_post_ico.comiis_minipost_icot");let n=window.getComputedStyle(s).getPropertyValue("height");if(n.toString()===t.toString())return;t=parseInt(n);let l=document.documentElement.clientHeight-$("#postform > div > div.comiis_post_ico.comiis_minipost_icot").getBoundingClientRect().height-$("#needmessage").getBoundingClientRect().top;l-5<100?(_unsafeWindow.$("#needmessage").css("height","100px"),_unsafeWindow.$(".gm_plugin_previewpostforum_html.double-preview .comiis_over_box").css("height","100px")):(_unsafeWindow.$("#needmessage").css("height",l-5+"px"),_unsafeWindow.$(".gm_plugin_previewpostforum_html.double-preview .comiis_over_box").css("height",l-5+"px"));},config:{childList:!0,attributes:!0,characterData:!0,subtree:!0}});});},listenResize(){domUtils.on(window,"resize",function(){let t=document.documentElement.clientHeight-$("#postform > div > div.comiis_post_ico.comiis_minipost_icot").getBoundingClientRect().height-$("#needmessage").getBoundingClientRect().top;t-5<100?(domUtils.css("#needmessage","height","100px"),domUtils.css(".gm_plugin_previewpostforum_html.double-preview .comiis_over_box","height","100px")):(log.info("设置输入框、预览高度",t-5),domUtils.css("#needmessage","height",t-5+"px"),domUtils.css(".gm_plugin_previewpostforum_html.double-preview .comiis_over_box","height",t-5+"px"));});},initSelectPostingSection(){addStyle(`
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
            `);let t={2:"版本发布",37:"插件交流",38:"建议反馈",41:"逆向交流",39:"玩机交流",42:"编程开发",40:"求助问答",44:"综合交流",50:"休闲灌水",46:"官方公告",53:"申诉举报",92:"站务专区"};domUtils.before(".comiis_post_from .comiis_wzpost.comiis_input_style .comiis_styli:contains('标题')",`
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
        `);let e=$("#select-post-section"),i=MTUtils.getForumId(window.location.href);Router.isPostPublish_newthread()?(log.info("发帖"),domUtils.on(e,"change",function(){let s=domUtils.val(e),n=`forum.php?mod=post&action=newthread&fid=${s}&extra=&topicsubmit=yes&mobile=2`;log.info(`修改发帖板块: ${t[s]} ${n}`);let l={求助问答:{className:"gm_user_select_help",optionHTML:`<option value="0" selected="selected">请选择</option>
                        <option value="59">求助问答</option>
                        <option value="58">已解决</option>`},建议反馈:{className:"gm_user_select_feedback",optionHTML:`<option value="0" selected="selected">请选择</option>
                        <option value="62">BUG反馈</option>
                        <option value="63">意见反馈</option>
                        <option value="65">论坛问题</option>
                        <option value="64">已解决</option>`},站务专区:{className:"gm_user_select_depot",optionHTML:`<option value="0" selected="selected">请选择</option>
                        <option value="42">版主申请</option>
                        <option value="43">职位调整</option>`}},o=l[t[s]];o?(domUtils.remove(domUtils.parent(".comiis_post_from .styli_tit:contains('分类')")),domUtils.before(".comiis_stylino.comiis_needmessage",`
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
                        `)):Object.keys(l).forEach(a=>{domUtils.remove(".comiis_post_from ."+l[a].className);}),domUtils.attr("#postform","action",n);})):domUtils.attr(e,"disabled",!0),domUtils.val(e,i),domUtils.trigger(e,"change");},initCharacterCount(){log.info("添加功能：字符计数"),addStyle(`
        .gm_plugin_word_count{display:flex}
        .gm_plugin_word_count::after{content:"/20000"}
        `),domUtils.append("#comiis_mh_sub .swiper-wrapper.comiis_post_ico",`
            <a href="javascript:;" class="swiper-slide gm_plugin_word_count">
                <p>0</p>
            </a>`),domUtils.on(this.$el.$input,["input","propertychange"],t=>{let e=this.$el.$input.value,i=utils.getTextLength(e),s=MTEditorPreview.parseText(e);domUtils.html(".gm_plugin_previewpostforum_html .comiis_message_table",s);let n=$(".gm_plugin_word_count p");domUtils.text(n,i),i>2e4||i<10?domUtils.attr(n,"style","color: red;"):domUtils.attr(n,"style","");});},initUBB(){if(!$(".comiis_post_urlico")){log.error("未找到插入元素");return}addStyle(`
        #comiis_post_tab .comiis_input_style .comiis_post_urlico li a.f_0{
            color: #53bcf5 !important;
        }
        `);let t=MTQuickUBB(),e=$(".comiis_post_urlico > ul"),i=$("#comiis_post_qydiv > ul"),s=$$("#comiis_post_qydiv ul li").length;ExtendJQueryFn(),domUtils.on("#comiis_post_tab .comiis_input_style .comiis_post_urlico li","click",function(){domUtils.removeClass("#comiis_post_tab .comiis_input_style .comiis_post_urlico li a","f_0"),domUtils.addClass("#comiis_post_tab .comiis_input_style .comiis_post_urlico li a","f_d"),domUtils.attr(this.querySelector("a"),"class","comiis_xifont f_0"),_unsafeWindow.$("#comiis_post_qydiv ul li").hide().eq(_unsafeWindow.$(this).index()).fadeIn();}),_unsafeWindow.$.each(t,function(n,l){let o=domUtils.createElement("li",{className:"quickUBBs",innerHTML:`
                <a href="javascript:;" class="comiis_xifont f_d"><i class="comiis_font"></i>${l.key}</a>
                `});domUtils.on(o,"click",r=>{if(!$(`#comiis_post_qydiv li[data-key='${l.key}']`)){log.error("未找到该元素");return}$$("#comiis_post_tab div.comiis_post_urlico ul li a.comiis_xifont").forEach(g=>{g.className="comiis_xifont f_d";});let m=o.querySelector("a");m.className="comiis_xifont f_0";let p=s+Object.keys(t).indexOf(n);_unsafeWindow.$("#comiis_post_qydiv ul li").hide().eq(p).fadeIn();}),domUtils.append(e,o);let a=document.createElement("li");a.setAttribute("style","display: none;"),a.setAttribute("data-key",l.key),a.innerHTML=`
            <div class="comiis_styli_m f15" style="padding-top:12px;">
                <div class="bg_e comiis_p5" style="border-radius:4px">
                    <textarea class="comiis_pt kmshow f_c" id="comiis_input_${n}" style="font-size:15px" placeholder="请输入需要${l.key}的文字"></textarea>
                </div>
            </div>
            <div class="comiis_styli_m f15 comiis_flex" style="padding-top:0;">
                <div class="styli_tit">
                    <button class="comiis_sendbtn bg_0 f_f" data-keyI="${n}" type="button">插入</button>
                </div>
                <div class="flex"></div>
            </div>`,domUtils.append(i,a),domUtils.on(`.comiis_sendbtn[data-keyI="${n}"]`,"click",()=>{let r=_unsafeWindow.$(`#comiis_input_${n}`).val();if(r==""){Qmsg.warning("请输入需要插入的内容");return}let c=t[n];c.isFunc&&(r=MTUBB_Rainbow(c.num,r)),c.hasOwnProperty("L")&&(r=c.L+r+c.R),_unsafeWindow.$("#needmessage").insertAtCaret(r),c.hasOwnProperty("cursorL")&&_unsafeWindow.$("#needmessage").moveCursorToCenterByTextWithLeft(c.cursorL,c.cursorLength),c.hasOwnProperty("cursorR")&&_unsafeWindow.$("#needmessage").moveCursorToCenterByTextWithRight(c.cursorR,c.cursorLength);});});},initImage(){log.info("添加功能：图片"),addStyle(`
            #comiis_pictitle_tab .comiis_upbox{
                height: 140px;
                overflow-y: auto;
            }
            `),domUtils.append("#comiis_mh_sub .swiper-wrapper.comiis_post_ico",`
        <a href="javascript:;" class="comiis_pictitle"><i class="comiis_font"><em>图片</em></i></a>`),domUtils.on(".comiis_pictitle","click",function(s){this.querySelector("i.comiis_font").classList.contains("f_0")?domUtils.hide(".gm_plugin_chartbed",!1):domUtils.show(".gm_plugin_chartbed",!1);}),domUtils.append("#comiis_post_tab",`
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
            `);let e=$("#imglist"),i=domUtils.parent(e);domUtils.before(".gm_plugin_chartbed .bqbox_t",i),domUtils.on("#imglist .comiis_font","click",s=>{$("#filedata").click();}),domUtils.on("#comiis_pictitle_tab #comiis_pictitle_key","click","li",function(s){let n=s.target;domUtils.removeClass("#comiis_pictitle_tab #comiis_pictitle_key li","bg_f"),domUtils.addClass(n,"bg_f"),_unsafeWindow.$("#comiis_pictitle_tab div.comiis_upbox").hide().eq(_unsafeWindow.$(n).index()).fadeIn();}),PopsPanel.execMenuOnce("mt-image-bed-hello-enable",()=>{MTEditorImageBed_Hello.init();}),PopsPanel.execMenuOnce("mt-image-bed-mt-enable",()=>{MTEditorImageBed_MT.init();});},initPreview(){const t=this;log.info("添加功能：双列预览"),addStyle(`
        .gm_plugin_previewpostforum_html .comiis_message_table{margin-top:10px;font-weight:initial;line-height:24px}
        .gm_plugin_previewpostforum_html .comiis_message_table a{height:auto;float:unset;color:#507daf!important}
        .gm_plugin_previewpostforum_html .comiis_message_table i{text-align:unset;font-size:unset;line-height:unset;padding-top:unset;display:unset}
        .comiis_postli.comiis_list_readimgs.nfqsqi{width:100vw}
        .gm_plugin_previewpostforum_html.double-preview{width:50vw}
        .gm_plugin_previewpostforum_html.double-preview .comiis_over_box.comiis_input_style{border-left:1px solid}
        `),domUtils.append("#comiis_mh_sub .swiper-wrapper.comiis_post_ico",`
        <a href="javascript:;" class="swiper-slide gm_plugin_previewpostforum">
            <i class="comiis_font" style="display: flex;flex-direction: column;padding-top: 1px;">
                <svg t="1661243615511" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2399" width="22" height="22" fill="currentColor">
                    <path d="M470.1 885.3H208.8V138.7h597.3v336c0 20.6 16.7 37.3 37.3 37.3 20.6 0 37.3-16.7 37.3-37.3v-336c0-41.2-33.4-74.7-74.7-74.7H208.8c-41.2 0-74.7 33.4-74.7 74.7v746.7c0 41.2 33.4 74.7 74.7 74.7h261.3c20.6 0 37.3-16.7 37.3-37.3 0.1-20.8-16.6-37.5-37.3-37.5z" p-id="2400"></path>
                    <path d="M641.3 496.5c-54.3 0-108.5 23.5-146.2 70.5-54.7 68.3-53.4 168.6 2.8 235.6 37.5 44.8 90.5 67.2 143.4 67.2 35.9 0 71.8-10.3 103-30.9l81.8 81.8c7.3 7.3 16.8 10.9 26.4 10.9 9.6 0 19.1-3.6 26.4-10.9 14.6-14.6 14.6-38.2 0-52.8l-81.8-81.8c48-72.5 40.1-171.1-23.7-234.9-36.5-36.4-84.3-54.7-132.1-54.7z m0 298.7c-36.5 0-72.9-17.6-95.3-52.9-22.6-35.6-22.6-82.5 0-118.1 22.4-35.3 58.9-52.9 95.3-52.9 36.5 0 72.9 17.6 95.3 52.9 22.6 35.6 22.6 82.5 0 118.1-22.4 35.2-58.8 52.9-95.3 52.9z" p-id="2401"></path>
                </svg>
                <em style="bottom: 1px;position: relative;">预览</em>
            </i>
        </a>`),domUtils.css(domUtils.parent(this.$el.$input),"display","flex"),domUtils.after(this.$el.$input,`
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
            </div>`),domUtils.on(".gm_plugin_previewpostforum","click",function(i){let s=this;if($$("#polldatas").length&&MTEditorPreview.parseVoteText(),s.querySelector("i.comiis_font").classList.contains("f_0"))domUtils.hide(".gm_plugin_previewpostforum_html",!1);else {domUtils.show(".gm_plugin_previewpostforum_html",!1);let l=MTEditorPreview.parseText(domUtils.val(t.$el.$input));domUtils.html(".gm_plugin_previewpostforum_html .comiis_message_table",l),domUtils.css(".gm_plugin_previewpostforum_html.double-preview .comiis_over_box.comiis_input_style","height",domUtils.css(t.$el.$input,"height"));}});},initSettingImmersionMode(){log.info("初始化设置功能-使用沉浸模式"),domUtils.append(domUtils.parent("#htmlon"),`
            <li class="comiis_styli_m f15 comiis_flex b_b">
                <div class="flex">使用沉浸输入</div>
                <div class="styli_r">
                    <input type="checkbox" name="immersiveinput" id="immersiveinput" value="" class="comiis_checkbox_key">
                    <label for="immersiveinput" class="wauto">
                        <code class="bg_f b_ok comiis_checkbox comiis_checkbox_close"></code>
                    </label>
                </div>	
            </li>
            `),domUtils.on("#immersiveinput","click",function(){let t=this,e=domUtils.parent(t).querySelector(".comiis_checkbox"),i=[".comiis_wzpost ul li.comiis_flex",".comiis_wzpost ul li.comiis_styli.kmquote",domUtils.parent(domUtils.parent("#pollchecked")),"#pollm_c_1",".comiis_polloption_add+div.f_0",".comiis_wzpost ul li.comiis_thread_content:contains('内容')","div#comiis_head","div#comiis_head+*:not([class])"];domUtils.hasClass(e,"comiis_checkbox_close")?i.forEach(s=>{s&&domUtils.hide(s,!1);}):i.forEach(s=>{s&&domUtils.show(s,!1);}),window.dispatchEvent(new Event("resize"));});}},Component_ForumPost={id:"component-forum-post",title:"帖子",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[UISwitch("自动展开内容","mt-forum-post-autoExpandContent",!0,void 0,"注入CSS展开帖子的内容"),UISwitch("修复图片宽度","mt-forum-post-repairImageWidth",!0,void 0,"修复图片宽度超出页面宽度的问题"),UISwitch("移除帖子字体效果","mt-forum-post-removeFontStyle",!1,void 0,""),UISwitch("移除评论区的字体效果","mt-forum-post-removeCommentFontStyle",!1,void 0,""),UISwitch("添加【点评】按钮","mt-forum-post-addCommentOnBtn",!1,void 0,"在评论区的每个评论右下角添加按钮"),UISwitch("附件点击提醒","mt-forum-post-setAttachmentsClickTip",!0,void 0,"阻止默认点击附件就会触发附件下载"),UISwitch("代码块优化","mt-forum-post-codeQuoteOptimization",!0,void 0,"自动检测代码块语言并设置关键字高亮"),UISwitch("图片查看优化","mt-forum-post-optimizationImagePreview",!0,void 0,"使用Viewer查看图片")]}]},{text:"自动加载评论",type:"deepMenu",forms:[{type:"forms",text:"",forms:[UISwitch("自动加载下一页评论","mt-forum-post-loadNextPageComment",!0,void 0,""),UISwitch("同步加载的地址","mt-forum-post-syncNextPageUrl",!1,void 0,"便于刷新页面会停留在当前查看的评论页面")]}]},{text:"编辑器-简略版",type:"deepMenu",forms:[{type:"forms",text:"",forms:[UISwitch("启用","mt-forum-post-editorOptimizationNormal",!0,void 0,"优化样式，插入bbcode代码等"),UISwitch("自动保存输入记录","mt-forum-post-editorOptimizationNormal-recordInputText",!0,void 0,"当回复时会自动清空记录"),UIButton("清空回复记录","当前占用空间大小：计算中","清理",void 0,!1,!1,"default",async t=>{let s=t.target.closest("li").querySelector(".pops-panel-item-left-desc-text"),n=await MTEditorOptimizationNormal.clearAllReplyRecord();n.success?(Qmsg.success("清理成功"),domUtils.text(s,`当前占用空间大小：${await MTEditorOptimizationNormal.getReplyRecordSize()}`)):Qmsg.error("清理失败 "+n.msg);},async(t,e)=>{let i=e.target.querySelector(".pops-panel-item-left-desc-text");domUtils.text(i,`当前占用空间大小：${await MTEditorOptimizationNormal.getReplyRecordSize()}`);})]}]},{text:"编辑器-完整版",type:"deepMenu",forms:[{type:"forms",text:"",forms:[UISwitch("启用","mt-forum-post-publish-editorOptimization",!0,void 0,"优化样式，插入bbcode代码，双列预览等"),UISwitch("自动保存输入记录","mt-forum-post-editorOptimization-recordInputText",!0,void 0,"当回复/发表时会自动清空记录"),UIButton("清空回复记录","当前占用空间大小：计算中","清理",void 0,!1,!1,"default",async t=>{let s=t.target.closest("li").querySelector(".pops-panel-item-left-desc-text"),n=await MTEditorOptimization.clearAllReplyRecord();n.success?(Qmsg.success("清理成功"),domUtils.text(s,`当前占用空间大小：${await MTEditorOptimization.getReplyRecordSize()}`)):Qmsg.error("清理失败 "+n.msg);},async(t,e)=>{let i=e.target.querySelector(".pops-panel-item-left-desc-text");domUtils.text(i,`当前占用空间大小：${await MTEditorOptimization.getReplyRecordSize()}`);})]}]},{text:"编辑器-图床配置",type:"deepMenu",forms:[{type:"forms",text:'<a href="https://www.helloimg.com/" target="_blank">Hello图床</a>',forms:[UISwitch("启用","mt-image-bed-hello-enable",!1,void 0,"启用Hello图床"),UIInput("账号","mt-image-bed-hello-account","","",void 0,"必填"),UIInput("密码","mt-image-bed-hello-password","","",void 0,"必填",!1,!0),UIInput("token","mt-image-bed-hello-token","","",void 0,"必填",!1,!0)]},{type:"forms",text:'<a href="https://img.binmt.cc/" target="_blank">MT图床</a>',forms:[UISwitch("启用","mt-image-bed-mt-enable",!0,void 0,"启用MT图床")]},{type:"forms",text:"图片水印",forms:[UISwitch("启用","mt-image-bed-watermark-enable",!1,void 0,"开启后会为图床图片添加文字水印"),UISwitch("自动添加水印","mt-image-bed-watermark-autoAddWaterMark",!1,void 0,"开启后会自动添加水印，关闭后会有添加水印后的图片预览"),UIInput("水印文字","mt-image-bed-watermark-text","MT论坛"),UIInput("颜色","mt-image-bed-watermark-text-color","#000000",void 0,void 0,"",!1,!1,(t,e)=>{var n,l;let i=(n=e.target)==null?void 0:n.querySelector("input"),s=(l=e.target)==null?void 0:l.querySelector(".pops-panel-input__suffix");domUtils.hide(s,!1),i.setAttribute("type","color"),domUtils.css(i,{margin:"unset",padding:"unset",width:"80px"});}),UIInput("大小","mt-image-bed-watermark-font-size",16,void 0,void 0,void 0,!0),UIInput("透明度","mt-image-bed-watermark-font-opacity",1,void 0,void 0,void 0,!0),UIInput("左右间距","mt-image-bed-watermark-left-right-margin",80,void 0,void 0,void 0,!0),UIInput("上下间距","mt-image-bed-watermark-top-bottom-margin",80,void 0,void 0,void 0,!0),UIInput("旋转角度","mt-image-bed-watermark-rotate",45,void 0,void 0,void 0,!0)]}]}]}]},Component_Search={id:"component-search",title:"搜索",forms:[{type:"forms",text:"",forms:[UISwitch("显示搜索历史","mt-search-showSearchHistory",!0,void 0,"自动记住搜索历史并显示"),UISwitch("修复清空按钮","mt-search-repairClearBtn",!0,void 0,"修复点击清空按钮不清空输入框的问题"),UISwitch("搜索框自动获取焦点","mt-search-searchInputAutoFocus",!0,void 0,"")]}]},MTAutoSignIn={$key:{signTime:"mt-sign-time"},init(){this.sign();},todayIsSign(){let t=this.getSignTime();return !(t==null||utils.formatTime(Date.now(),"yyyyMMdd")!==utils.formatTime(t,"yyyyMMdd"))},setSignTime(){_GM_setValue(this.$key.signTime,Date.now());},getSignTime(){return _GM_getValue(this.$key.signTime)},clearSignTime(){_GM_deleteValue(this.$key.signTime);},async checkLogin(){return MTUtils.envIsMobile()?document.querySelector(".sidenv_exit a[href*='member.php?mod=logging&action=logout']"):document.querySelector("#comiis_key")},getFormHash(){let t=(top||globalThis).document.querySelector("input[name=formhash]"),e=(top||globalThis).document.querySelector("div[class=sidenv_exit]>a"),i=null,s=(top||globalThis).document.querySelector("a.comiis_recommend_addkey"),n=null,l=t?t.value:null;return e&&(i=e.href.match(MTRegExp.formhash),i=i?i[i.length-1]:null),s&&(n=s.href.match(MTRegExp.hash),n=n?n[n.length-1]:null),l||i||n},async sign(){let t=this.getFormHash();if(t==null){if(document.querySelector("#comiis_picshowbox")){log.info("当前为评论区的看图模式 ");return}log.error("自动签到：获取账号formhash失败"),_GM_deleteValue("mt_sign"),Qmsg.error({content:"自动签到：获取账号formhash失败"});return}if(this.todayIsSign()){log.info("今日已签到");return}let e={operation:"qiandao",format:"button",formhash:t,inajax:1,ajaxtarget:"midaben_sign"},i=await httpx.get(`/k_misign-sign.html?${utils.toSearchParamsStr(e)}`,{headers:{"User-Agent":utils.getRandomPCUA()}});if(!i.status)return;this.setSignTime(),log.info("自动签到信息：",i);let s=utils.parseCDATA(i.data.responseText),n=domUtils.parseHTML(`<div>${s}</div>`,!0,!1),l=domUtils.text(n);if(l.includes("请稍后再试")||l.includes("您已经被列入黑名单")||l.includes("绑定手机号后才可以签到")){Qmsg.error("签到："+l,{timeout:5e3});return}else if(l.includes("今日已签")){Qmsg.info("签到："+l);return}else if(i.data.responseText.includes("您当前的访问请求当中含有非法字符，已经被系统拒绝")){Qmsg.error("签到: 您当前的访问请求当中含有非法字符，已经被系统拒绝",{timeout:6e3});return}let o=n.querySelector(".con"),a=n.querySelector(".line");if(o&&a){let r=domUtils.text(o).match(/([0-9]+)金币/),c=domUtils.text(a).match(/([0-9]+)/),m=r[r.length-1],p=c[c.length-1];log.success(`金币${m}，排名${p}`),Qmsg.info(`
                <div style="display: flex;${MTUtils.envIsMobile()?"":"padding: 20px;"}">
                    <div style="align-self: center;margin-right: 20px;">签到</div>
                    <div>排名 ${p}<br>金币 ${m}</div>
                </div>`,{timeout:4e3,isHTML:!0});return}pops.alert({title:{text:"签到的响应内容",position:"center"},content:{text:i.data.responseText,html:!1},width:"88vw",height:"400px"}),Qmsg.error("签到: 未知结果,请查看控制台信息",{timeout:4e3});}},Component_Sign={id:"component-sigh",title:"签到",forms:[{text:"功能",type:"forms",forms:[UISwitch("显示【今日签到之星】","mt-sign-showTodaySignStar",!0,void 0,"在签到按钮上面显示今日签到之星"),UISwitch("显示【今日最先】","mt-sign-showTodayRanking",!0,void 0,"在签到排名上面新增【今日最先】")]},{text:"自动签到",type:"forms",forms:[UISwitch("启用","mt-auto-sign",!0,void 0,"自动请求签到"),UIButton("签到信息",`上次签到时间：${MTAutoSignIn.getSignTime()==null?"尚未签到":Utils.formatTime(MTAutoSignIn.getSignTime())}`,"清空信息",void 0,void 0,void 0,"primary",t=>{let i=t.composedPath()[0].closest("li").querySelector(".pops-panel-item-left-desc-text");__pops.confirm({title:{text:"提示 ",position:"center"},content:{text:"<p>是否清空脚本签到记录的时间?</p>",html:!0},btn:{ok:{enable:!0,callback:s=>{MTAutoSignIn.clearSignTime(),Qmsg.success("删除成功"),domUtils.text(i,`上次签到时间：${MTAutoSignIn.getSignTime()==null?"尚未签到":Utils.formatTime(MTAutoSignIn.getSignTime())}`),s.close();}}},mask:{enable:!0},width:"88vw",height:"200px"});})]}]},Component_Space={id:"component-space",title:"空间",forms:[{type:"forms",text:"",forms:[UISwitch("修复无法进入空间","mt-space-repairEnterSpace",!0,void 0,"修复链接错误导致不能进入空间的问题"),UISwitch("显示帖子回复内容","mt-space-showCommentContent",!0,void 0,"在帖子-回复下面显示具体评论的内容")]}]},Component_Guide={id:"component-guide",title:"导读",forms:[{type:"forms",text:"",forms:[UISwitch("显示最新帖子","mt-guide-showLatestPost",!0,void 0,"在最上面显示最新发布的帖子")]}]},PopsPanel={$data:{__data:null,__oneSuccessExecMenu:null,__onceExec:null,__listenData:null,get data(){return PopsPanel.$data.__data==null&&(PopsPanel.$data.__data=new utils.Dictionary),PopsPanel.$data.__data},get oneSuccessExecMenu(){return PopsPanel.$data.__oneSuccessExecMenu==null&&(PopsPanel.$data.__oneSuccessExecMenu=new utils.Dictionary),PopsPanel.$data.__oneSuccessExecMenu},get onceExec(){return PopsPanel.$data.__onceExec==null&&(PopsPanel.$data.__onceExec=new utils.Dictionary),PopsPanel.$data.__onceExec},get scriptName(){return SCRIPT_NAME},key:KEY,attributeKeyName:ATTRIBUTE_KEY,attributeDefaultValueName:ATTRIBUTE_DEFAULT_VALUE},$listener:{get listenData(){return PopsPanel.$data.__listenData==null&&(PopsPanel.$data.__listenData=new utils.Dictionary),PopsPanel.$data.__listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},isTopWindow(){return _unsafeWindow.top===_unsafeWindow.self},initExtensionsMenu(){this.isTopWindow()&&(GM_Menu.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:!1,isStoreValue:!1,showText(t){return t},callback:()=>{this.showPanel();}}]),ElementUtils.registerLeftMenu({name:"MT论坛脚本设置",icon:"",iconColor:"#ff0505",iconSize:"23px",callback:()=>{this.showPanel();}}));},initPanelDefaultValue(){let t=this;function e(n){if(!n.attributes)return;let l={},o=n.attributes[ATTRIBUTE_KEY];o!=null&&(l[o]=n.attributes[ATTRIBUTE_DEFAULT_VALUE]);let a=n.attributes[ATTRIBUTE_INIT];if(typeof a=="function"){let m=a();if(typeof m=="boolean"&&!m)return}let r=n.attributes[ATTRIBUTE_INIT_MORE_VALUE];r&&typeof r=="object"&&Object.assign(l,r);let c=Object.keys(l);if(!c.length){log.warn(["请先配置键",n]);return}c.forEach(m=>{let p=l[m];t.$data.data.has(m)&&log.warn("请检查该key(已存在): "+m),t.$data.data.set(m,p);});}function i(n){for(let l=0;l<n.length;l++){let o=n[l];e(o);let a=o.forms;a&&Array.isArray(a)&&i(a);}}let s=this.getPanelContentConfig();for(let n=0;n<s.length;n++){let l=s[n];if(!l.forms)continue;let o=l.forms;o&&Array.isArray(o)&&i(o);}},setValue(t,e){let i=_GM_getValue(KEY,{}),s=i[t];i[t]=e,_GM_setValue(KEY,i),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,s,e);},getValue(t,e){let s=_GM_getValue(KEY,{})[t];return s??(this.$data.data.has(t)?this.$data.data.get(t):e)},deleteValue(t){let e=_GM_getValue(KEY,{}),i=e[t];Reflect.deleteProperty(e,t),_GM_setValue(KEY,e),this.$listener.listenData.has(t)&&this.$listener.listenData.get(t).callback(t,i,void 0);},addValueChangeListener(t,e,i){let s=Math.random();return this.$listener.listenData.set(t,{id:s,key:t,callback:e}),i&&i.immediate&&e(t,this.getValue(t),this.getValue(t)),s},removeValueChangeListener(t){let e=null;for(const[i,s]of this.$listener.listenData.entries())if(s.id===t){e=i;break}typeof e=="string"?this.$listener.listenData.delete(e):console.warn("没有找到对应的监听器");},triggerMenuValueChange(t,e,i){if(this.$listener.listenData.has(t)){let s=this.$listener.listenData.get(t);if(typeof s.callback=="function"){let n=this.getValue(t),l=n,o=n;typeof e<"u"&&arguments.length>1&&(l=e),typeof i<"u"&&arguments.length>2&&(o=i),s.callback(t,o,l);}}},hasKey(t){let e=_GM_getValue(KEY,{});return t in e},execMenu(t,e,i=!1,s){if(!(typeof t=="string"||typeof t=="object"&&Array.isArray(t)))throw new TypeError("key 必须是字符串或者字符串数组");let n=[];typeof t=="object"&&Array.isArray(t)?n=[...t]:n.push(t);let l;for(let o=0;o<n.length;o++){const a=n[o];if(!this.$data.data.has(a)){log.warn(`${t} 键不存在`);return}let r=PopsPanel.getValue(a);if(i&&(r=!r),typeof s=="function"){let c=s(a,r);typeof c=="boolean"&&(r=c);}if(!r)break;l=r;}l&&e(l);},execMenuOnce(t,e,i,s,n){if(typeof t!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(t)){log.warn(`${t} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(t))return;this.$data.oneSuccessExecMenu.set(t,1);let l=()=>{let p=PopsPanel.getValue(t);return typeof i=="function"?i(t,p):p},o=[],a=p=>{let g=l(),d=[];if(p instanceof HTMLStyleElement?d=[p]:Array.isArray(p)&&(d=[...p.filter(u=>u!=null&&u instanceof HTMLStyleElement)]),g)o=o.concat(d);else for(let u=0;u<d.length;u++)d[u].remove(),d.splice(u,1),u--;},r=p=>typeof n=="function"?n(t,p):p,c=p=>{let g=[];if(r(p)){let d=e(p,a);d instanceof HTMLStyleElement?g=[d]:Array.isArray(d)&&(g=[...d.filter(u=>u!=null&&u instanceof HTMLStyleElement)]);}for(let d=0;d<o.length;d++)o[d].remove(),o.splice(d,1),d--;o=[...g];};this.addValueChangeListener(t,(p,g,d)=>{let u=d;typeof s=="function"&&(u=s(p,d,g)),c(u);});let m=l();m&&c(m);},execInheritMenuOnce(t,e,i,s){let n=this;const l=(o,a)=>{let r=n.getValue(o),c=n.getValue(a);if(typeof s=="function"){let m=s(r,c);if(m!=null)return m}return r};this.execMenuOnce(t,i,()=>l(t,e),()=>l(t,e)),this.execMenuOnce(e,()=>{},()=>!1,()=>(this.triggerMenuValueChange(t),!1));},onceExec(t,e){if(typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(t)||(e(),this.$data.onceExec.set(t,1));},showPanel(){__pops.panel({title:{text:`${SCRIPT_NAME}-设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:!0,width:this.getWidth(),height:this.getHeight(),drag:!0,only:!0});},isMobile(){return window.innerWidth<550},getWidth(){return window.innerWidth<550?"88vw":"550px"},getHeight(){return window.innerHeight>450?"450px":"88vh"},getPanelContentConfig(){return [Component_Common,Component_ForumPost,Component_Search,Component_Sign,Component_Space,Component_Guide]}},blackHomeCSS=`.pops-confirm-content {\r
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
`,MTBlackHome={$data:{cid:""},init(){this.registerMenu();},registerMenu(){ElementUtils.registerLeftMenu({name:"小黑屋",iconColor:"#000000",icon:"",callback:()=>{this.showBlackHome();}});},async showBlackHome(){let t=Qmsg.loading("正在获取小黑屋名单中..."),e=await this.getBlackListInfo("");if(t.close(),!e)return;if(e.data.length===0){Qmsg.error("获取小黑屋名单为空");return}this.$data.cid=e.next_cid;let i=__pops.confirm({title:{text:"小黑屋名单",position:"center"},content:{text:`
                <div class="blackhome-user-filter">
                    <input placeholder="过滤用户名/操作人员/UID(可正则)">
                </div>
                <div class="blackhome-user-list"></div>
                `,html:!0},btn:{ok:{text:"下一页",callback:async()=>{let a=Qmsg.loading("正在获取小黑屋名单中...");log.info("下一页的cid: ",this.$data.cid);let r=await this.getBlackListInfo(this.$data.cid);a.close(),r&&(this.$data.cid=r.next_cid,r.data.forEach(c=>{let m=this.createListViewItem(c);s.appendChild(m);}),r.data.length===0?Qmsg.error("获取小黑屋名单为空"):Qmsg.success(`成功获取 ${r.data.length}条数据`));}},close:{text:"关闭"}},width:"88vw",height:"82vh",style:blackHomeCSS,mask:{enable:!0}}),s=i.$shadowRoot.querySelector(".blackhome-user-list"),n=i.$shadowRoot.querySelector(".blackhome-user-filter input");e.data.forEach(a=>{let r=this.createListViewItem(a);s.appendChild(r);}),Qmsg.success(`成功获取 ${e.data.length}条数据`);let l=!1;domUtils.on(n,["input","propertychange"],utils.debounce(()=>{let a=n.value.trim();if(!l){if(l=!0,a==""){i.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(r=>{r.removeAttribute("style");}),l=!1;return}i.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(r=>{r.getAttribute("data-name").match(new RegExp(a,"ig"))||r.getAttribute("data-uid").trim().match(new RegExp(a,"ig"))||r.getAttribute("data-operator").match(new RegExp(a,"ig"))?r.removeAttribute("style"):r.setAttribute("style","display:none;");}),l=!1;}}));let o=await this.getBlackListInfo(this.$data.cid);o&&(this.$data.cid=o.next_cid);},async getBlackListInfo(t=""){let e={mod:"misc",action:"showdarkroom",cid:t,ajaxdata:"json"},i=await httpx.get(`/forum.php?${utils.toSearchParamsStr(e)}`,{headers:{"User-Agent":utils.getRandomPCUA()},responseType:"json"});if(!i.status)return;let s=utils.toJSON(i.data.responseText),n=s.message.split("|"),l=n[n.length-1],o=utils.parseObjectToArray(s.data),a=[],r=[];return o.forEach(c=>{let m=c.dateline.match(/([0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]*[0-9]{1,2}:[0-9]{1,2})/g);if(m==null){let p=parseInt((Date.now()/1e3).toString()),g=0,d=c.dateline.match(/([0-9]+|半)[\s\S]*秒前/),u=c.dateline.match(/([0-9]+|半)[\s\S]*分钟前/),h=c.dateline.match(/([0-9]+|半)[\s\S]*小时前/),y=c.dateline.match(/昨天[\s\S]*(\d{2}):(\d{2})/),_=c.dateline.match(/前天[\s\S]*(\d{2}):(\d{2})/),x=c.dateline.match(/([0-9]+|半)[\s\S]*天前/);if(d)d=d[d.length-1],d=d.replace(/半/g,.5),d=parseFloat(d),g=p-d;else if(u)u=u[u.length-1],u=u.replace(/半/g,.5),u=parseFloat(u),g=p-u*60;else if(h)h=h[h.length-1],h=h.replace(/半/g,.5),h=parseFloat(h),g=p-h*60*60;else if(y){let S=y[1],v=y[2];g=p-86400-parseInt(S)*3600-parseInt(v)*60;}else if(_){let S=_[1],v=_[2];g=p-86400*2-parseInt(S)*3600-parseInt(v)*60;}else x&&(x=x[x.length-1],x=x.replace(/半/g,.5),x=parseFloat(x),g=p-x*60*60*24);c.time=parseInt(g.toString())*1e3,a=a.concat(c);return}else m=m[0];c.time=utils.formatToTimeStamp(m),a=a.concat(c);}),utils.sortListByProperty(a,"time"),utils.sortListByProperty(r,"time",!1),a=a.concat(r),{next_cid:l,data:a}},createListViewItem(t){let e=domUtils.createElement("div",{className:"blackhome-user-item",innerHTML:`
                <div class="blackhome-user-avatar">
                    <div class="blackhome-user">
                    <img src="${MTUtils.getAvatar(t.uid,"big")}" loading="lazy">
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
                        <img loading="lazy" src="${MTUtils.getAvatar(t.operatorid,"big")}">
                        <p>${t.operator}</p>
                    </div>
                    <div class="blackhome-operator-user-info">
                    ${t.reason}
                    </div>
                    </div>
                </div>
                `},{"data-name":t.username,"data-uid":t.uid,"data-operator":t.operator,"data-operator-uid":t.operatorid});return domUtils.on(e,"click",".blackhome-user img",function(){window.open(`home.php?mod=space&uid=${t.uid}&do=profile`,"_blank");}),domUtils.on(e,"click",".blackhome-operator-user img",function(){window.open(`home.php?mod=space&uid=${t.operatorid}&do=profile`,"_blank");}),e}},onlineUserCSS=`.pops-alert-content{\r
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
`,MTOnlineUser={$data:{},init(){this.registerMenu();},registerMenu(){ElementUtils.registerLeftMenu({name:"在线用户",iconColor:"#2d92ff",icon:"",callback:()=>{this.showOnlineUser();}});},async showOnlineUser(){let t=Qmsg.loading("正在获取在线用户名单中..."),e=await this.getOnlineUserListInfo();if(t.close(),!e)return;let i=__pops.alert({title:{text:"在线用户",position:"center"},content:{text:`
                <div class="online-user-info">${e.totalOnline} 人在线 - ${e.onlineUser} 会员${e.invisibleUser==0?"":`(${e.invisibleUser}隐身)`} - ${e.noRegisterUser} 位游客</div>
                <div class="online-user-filter">
                    <input placeholder="过滤用户名/身份/UID(可正则)"></div>
                <div class="online-user-list"></div>
                `,html:!0},btn:{ok:{text:"关闭",type:"default"}},width:"88vw",height:"82vh",style:onlineUserCSS,mask:{enable:!0}}),s=i.$shadowRoot.querySelector(".online-user-list"),n=i.$shadowRoot.querySelector(".online-user-filter input");e.data.forEach(o=>{let a=this.createListViewItem(o);s.appendChild(a);}),Qmsg.success(`成功获取 ${e.data.length}条数据`);let l=!1;DOMUtils.on(n,["propertychange","input"],utils.debounce(()=>{let o=n.value.trim();if(!l){if(l=!0,o==""){i.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(a=>{a.removeAttribute("style");}),l=!1;return}i.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(a=>{a.getAttribute("data-name").match(new RegExp(o,"ig"))||a.getAttribute("data-sf").match(new RegExp(o,"ig"))||a.getAttribute("data-uid").match(new RegExp(o,"ig"))?a.removeAttribute("style"):a.setAttribute("style","display:none;");}),l=!1;}}));},async getOnlineUserListInfo(){let t={showoldetails:"yes"},e=await httpx.get(`/forum.php?${utils.toSearchParamsStr(t)}`,{headers:{"User-Agent":utils.getRandomPCUA()}});if(!e.status)return;let i=utils.parseFromString(e.data.responseText,"text/html"),s={data:[],totalOnline:0,onlineUser:0,noRegisterUser:0,invisibleUser:0};i.querySelectorAll("#onlinelist ul li").forEach(o=>{let a=o.querySelector("a").getAttribute("href").match("uid-(.+?).html")[1],r=MTUtils.getAvatar(a,"middle"),c=o.querySelector("a").innerText,m="",p=o.querySelector("a").getAttribute("href"),g=o.querySelector("img").src;g.indexOf("online_member")!=-1?m="会员":g.indexOf("online_moderator")!=-1?m="版主":g.indexOf("online_supermod")!=-1?m="超级版主":g.indexOf("online_admin")!=-1?m="管理员":m="未知身份",s.data.push({uid:a,avatar:r,name:c,sf:m,space:p});});let l=i.querySelector("#online div.bm_h span.xs1").textContent;return s.totalOnline=utils.parseInt(l.match(/([0-9]*)\s*人在线/i),0),s.onlineUser=utils.parseInt(l.match(/([0-9]*)\s*会员/i),0),s.noRegisterUser=utils.parseInt(l.match(/([0-9]*)\s*位游客/i),0),s.invisibleUser=utils.parseInt(l.match(/([0-9]*)\s*隐身/i),0),s},createListViewItem(t){let e=DOMUtils.createElement("div",{className:"online-item",innerHTML:`
                <div class="online-user">
                    <img data-avatar src="${t.avatar}" loading="lazy" class="online-user-avatar">
                    <div class="online-user-info">
                        <p data-name>${t.name}</p>
                        <span data-sf="${t.sf}">${t.sf}</span>
                        <span data-uid>UID: ${t.uid}</span>
                    </div>
                </div>
            `},{"data-name":t.name,"data-uid":t.uid,"data-sf":t.sf});return DOMUtils.on(e,"click",".online-user-avatar",i=>{utils.preventEvent(i),window.open(`home.php?mod=space&uid=${t.uid}&do=profile`,"_blank");}),e}},MTIdentifyLinks=()=>{var t,e,i,s,n,l,o,a,r,c,m;c=/((https?:\/\/|www\.)[\x21-\x7e]+[\w\/]|(\w[\w._-]+\.(com|cn|org|net|info|tv|cc))(\/[\x21-\x7e]*[\w\/])?|ed2k:\/\/[\x21-\x7e]+\|\/|thunder:\/\/[\x21-\x7e]+=)/gi,t=function(d){var u;if(d=(u=d.originalTarget)!=null?u:d.target,d!=null&&d.localName==="a"&&d.className.indexOf("texttolink")!==-1&&(u=d.getAttribute("href"),u.indexOf("http")!==0&&u.indexOf("ed2k://")!==0&&u.indexOf("thunder://")!==0))return d.setAttribute("href","http://"+u)},document.addEventListener("mouseover",t),r=function(d){if(typeof d=="object"&&d!=null&&typeof d.parentNode<"u"&&typeof d.parentNode.className<"u"&&typeof d.parentNode.className.indexOf=="function"&&d.parentNode.className.indexOf("texttolink")===-1&&d.nodeName!=="#cdata-section"){var u=d.textContent.replace(c,'<a href="$1" target="_blank" class="texttolink">$1</a>');if(d.textContent.length!==u.length){var h=document.createElement("span");return h.innerHTML=u,console.log(`识别: ${h.querySelector("a")}`),d.parentNode.replaceChild(h,d)}}},e="a svg canvas applet input button area pre embed frame frameset head iframe img option map meta noscript object script style textarea code".split(" "),m=`//text()[not(ancestor::${e.join(") and not(ancestor::")})]`,i=new RegExp(`^(${e.join("|")})$`,"i"),n=function(d,u){var h,y;if(u+1e4<d.snapshotLength){var _=h=u;for(y=u+1e4;u<=y?h<=y:h>=y;_=u<=y?++h:--h)r(d.snapshotItem(_));setTimeout(function(){return n(d,u+1e4)},15);}else for(_=h=u,y=d.snapshotLength;u<=y?h<=y:h>=y;_=u<=y?++h:--h)r(d.snapshotItem(_));},l=function(d){return d=document.evaluate(m,d,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null),n(d,0)},o=function(d){for(d=document.createTreeWalker(d,NodeFilter.SHOW_TEXT,{acceptNode:function(u){if(!i.test(u.parentNode.localName))return NodeFilter.FILTER_ACCEPT}},!1);d.nextNode();)r(d.currentNode);},a=new window.MutationObserver(function(d){var u,h,y=0;for(u=d.length;y<u;y++){var _=d[y];if(_.type==="childList"){var x=_.addedNodes,S=0;for(h=x.length;S<h;S++)_=x[S],o(_);}}}),s=function(){return l(document.body),a.observe(document.body,{childList:!0,subtree:!0})};var p=function(d){var u=d.getAttribute("href");if(u.indexOf("http")!==0&&u.indexOf("ed2k://")!==0&&u.indexOf("thunder://")!==0)return d.setAttribute("href","http://"+u)},g=function(){for(var d=document.getElementsByClassName("texttolink"),u=0;u<d.length;u++)p(d[u]);};setTimeout(g,1500),setTimeout(s,100);},MTForumPost={$flag:{isSetHljsCSS:!1},init(){PopsPanel.execMenuOnce("mt-forum-post-autoExpandContent",()=>this.autoExpandContent()),PopsPanel.execMenuOnce("mt-forum-post-repairImageWidth",()=>this.repairImageWidth()),PopsPanel.execMenu("mt-forum-post-removeFontStyle",()=>{this.removeFontStyle();}),PopsPanel.execMenu("mt-forum-post-removeCommentFontStyle",()=>{this.removeCommentFontStyle();}),domUtils.ready(()=>{PopsPanel.execMenu("mt-forum-post-addCommentOnBtn",()=>{this.addCommentOnBtn();}),PopsPanel.execMenuOnce("mt-forum-post-loadNextPageComment",()=>{this.loadNextPageComment();}),PopsPanel.execMenuOnce("mt-forum-post-codeQuoteOptimization",()=>{this.codeQuoteOptimization();}),PopsPanel.execMenuOnce("mt-forum-post-editorOptimizationNormal",()=>{MTEditorOptimizationNormal.init();}),PopsPanel.execMenu("mt-forum-post-optimizationImagePreview",()=>{this.optimizationImagePreview();}),PopsPanel.execMenuOnce("mt-forum-post-setAttachmentsClickTip",()=>{this.setAttachmentsClickTip();});});},autoExpandContent(){return log.info("自动展开帖子内容"),addStyle(`
        div.comiis_message.bg_f.view_one.b_b.cl.message>div.comiis_messages.comiis_aimg_show.cl{max-height:inherit!important;overflow-y:inherit!important;position:inherit!important}
        .comiis_lookfulltext_bg,.comiis_lookfulltext_key{display:none!important} 
        `)},repairImageWidth(){return log.info("修复图片宽度"),addStyle(`
        .comiis_messages img{
            max-width: 100% !important;
        }`)},removeFontStyle(){log.info("移除帖子字体效果");let t=document.querySelector(".comiis_a.comiis_message_table");t&&(t.innerHTML=t.innerHTML.replace(MTRegExp.fontSpecial,""));},removeCommentFontStyle(){var e;log.info("移除评论区的字体效果"),document.querySelectorAll("font");var t=((e=document.querySelector(".comiis_postlist .comiis_postli"))==null?void 0:e.innerHTML)||"";t!==""&&(document.querySelectorAll("font").forEach(i=>{t.includes(i.innerHTML)||(i.removeAttribute("color"),i.removeAttribute("style"),i.removeAttribute("size"));}),document.querySelectorAll(".comiis_message.message").forEach(i=>{if(t.includes(i.innerHTML)){i.innerHTML=i.innerHTML.replace(MTRegExp.fontSpecial,"");let s=i.nextElementSibling;s&&s.localName==="strike"&&(s.outerHTML=s.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));}})),document.querySelectorAll(".comiis_postli.comiis_list_readimgs.nfqsqi").forEach(i=>{let s=i.parentElement;s&&s.localName==="strike"&&(s.outerHTML=s.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));});},addCommentOnBtn(){log.info("添加【点评】按钮"),utils.waitNodeList(".bottom_zhan:not([data-isaddreviews])").then(t=>{t.forEach(e=>{var p,g,d;e.setAttribute("data-isaddreviews","true");var i=e.querySelector("a");if(i){var s=i.getAttribute("datahref")||i.getAttribute("data-href")||i.href||"",n=s.replace("mod=post&","mod=misc&").replace("action=reply&","action=comment&"),l=(p=s==null?void 0:s.match(/&page=([\w]+)/i))==null?void 0:p[1],o=`${n}&extra=page%3D1&page=${l}`,a=e==null?void 0:e.closest(".comiis_postli[id]"),r=(g=a.getAttribute("id"))==null?void 0:g.replace("pid","&pid=");o=o+r;var c=((d=a.querySelector(".top_user.f_b"))==null?void 0:d.textContent)||"",m=domUtils.parseHTML(`
						<a href="${o}" class="f_c dialog">
							<i class="comiis_font mt_review" style="content: url(&quot;https://s1.ax1x.com/2020/04/26/Jcq8VU.png&quot;); height: 15px;"></i>
						</a>
						`,!0,!1);domUtils.on(m,"click",function(){utils.waitNode("div[id=ntcmsg_popmenu]>div>span.f_c").then(u=>{try{u.innerText="点评 "+c;}catch(h){log.error("修改点评失败",h);}});}),domUtils.prepend(e,m);}});});},loadNextPageComment(){var r;if(log.info("自动加载下一页评论"),document.title.includes("提示信息 - MT论坛"))return;function t(){return document.querySelector("#loading-comment-tip")}function e(){return document.querySelector("#loading-comment-tip").parentElement}function i(c){let m=t(),p=e();domUtils.css(p,"display","");let d=Array.from(c.querySelectorAll("a[href]")).find(y=>{var _;return ((_=y.textContent)==null?void 0:_.trim())==="下一页"}).href;if(log.info("获取下一页url：",d),d.includes("javascript:;")){log.info("暂无下一页的评论"),domUtils.remove(p);return}async function u(){domUtils.text(m,"正在加载评论中..."),domUtils.css(p,"display",""),log.info("请求下一页评论："+d);let y=d,_=await httpx.get(y,{fetch:!0});if(!_.status)return;let x=domUtils.parseHTML(_.data.responseText,!0,!0),S=document.querySelector(".comiis_postlist.kqide"),v=x.querySelector(".comiis_postlist.kqide"),U=x.querySelector(".nxt");U?(log.success("成功获取到下一页评论"),d=U.getAttribute("href")||U.href):(log.error("评论全部加载完毕，关闭监听事件"),domUtils.remove(".comiis_page.bg_f"),domUtils.remove(p),domUtils.off(m,"click",u),domUtils.off(window,"scroll",h.run));let k=U==null?void 0:U.parentElement.querySelector("strong");if(k){let q=document.querySelector("#select_a");if(q){let M=Array.from(q.childNodes).find(b=>b.nodeName==="#text");M&&(M.textContent=`第 ${k.textContent} 页`);}}PopsPanel.execMenu("mt-forum-post-syncNextPageUrl",()=>{if(window===(top==null?void 0:top.window)){let q=new URL(y),M=`${q.pathname}${q.search}`;window.history.pushState("forward","",M);}}),domUtils.append(S,v),MTForumPost.init();}var h=new utils.LockFunction(async()=>{utils.isNearBottom(50)&&await u();});domUtils.text(m,"请上下滑动或点击加载"),domUtils.on(window,"scroll",h.run),domUtils.on(m,"click",u),h.run();}let n=domUtils.parseHTML(`
		<div class="comiis_multi_box bg_f b_t">
			<label class="comiis_loadbtn bg_e f_d" id="loading-comment-tip">正在等待页面加载完毕</label>
		</div>`,!0,!1),l=document.querySelector(".comiis_bodybox");domUtils.append(l,n);let o=document.querySelector(".comiis_pltit span.f_d")||document.querySelector("#comiis_foot_memu .comiis_kmvnum");if(document.querySelector(".comiis_pltit h2")&&((r=document.querySelector(".comiis_pltit h2"))!=null&&r.textContent.includes("暂无评论"))){domUtils.remove(e()),log.info("暂无评论");return}parseInt(o.textContent)>=10?utils.waitNode(".comiis_page.bg_f").then(c=>{i(c);}):(domUtils.remove(e()),log.info("无多页评论"));},codeQuoteOptimization(){log.info("代码块优化");function t(i){var s=["add","and","cmp","cmpg","cmpl","const","div","double","float","goto","if","int","long","move","mul","neg","new","nop","not","or","rem","return","shl","shr","sput","sub","throw","ushr","xor"],n=["aget","aput","array","check","execute","fill","filled","goto/16","goto/32","iget","instance","invoke","iput","monitor","packed","sget","sparse"],l=["transient","constructor","abstract","final","synthetic","public","private","protected","static","bridge","system"];return {aliases:["smali"],contains:[{className:"string",begin:'"',end:'"',relevance:0},i.COMMENT("#","$",{relevance:0}),{className:"keyword",variants:[{begin:"\\s*\\.end\\s[a-zA-Z0-9]*"},{begin:"^[ ]*\\.[a-zA-Z]*",relevance:0},{begin:"\\s:[a-zA-Z_0-9]*",relevance:0},{begin:"\\s("+l.join("|")+")"}]},{className:"built_in",variants:[{begin:"\\s("+s.join("|")+")\\s"},{begin:"\\s("+s.join("|")+")((\\-|/)[a-zA-Z0-9]+)+\\s",relevance:10},{begin:"\\s("+n.join("|")+")((\\-|/)[a-zA-Z0-9]+)*\\s",relevance:10}]},{className:"class",begin:`L[^(;:
]*;`,relevance:0},{begin:"[vp][0-9]+"}]}}this.$flag.isSetHljsCSS||(hljs.registerLanguage("smali",t),addStyle(`
			.hljs ol{margin:0 0 0 10px;padding:10px 10px 10px 25px}
			.hljs li{padding-left:10px;list-style-type:decimal-leading-zero;font-family:Monaco,Consolas,'Lucida Console','Courier New',serif;font-size:12px;line-height:1.8em}
			.hljs li:hover{background:#2c313c}
			.hljs li::marker{unicode-bidi:isolate;font-variant-numeric:tabular-nums;text-transform:none;text-indent:0!important;text-align:start!important;text-align-last:start!important}
			select.code-select-language{height:40px;line-height:40px;font-size:14px;border:1px solid #5c5c5c;border-radius:5px;text-align:center;outline:0;margin-left:10px}
			`),addStyle(`
			.reader-copy-button{background:#000;background-size:cover;background-repeat:no-repeat;background-position:0;color:#fff;line-height:40px;display:block;text-align:center;border-radius:5px;cursor:pointer;font-size:15px;width:70px;user-select:none}
			.reader-copy-button i{display:inline-block;margin-right:6px;width:16px;height:16px;background-size:cover;vertical-align:sub;user-select:none}
			`),domUtils.on(document,"click",".reader-copy-button",async function(i){utils.preventEvent(i);let s=i.target,n=document.querySelector(s.getAttribute("data-code-selector"));return await utils.setClip(n.outerText||n.innerText),Qmsg.success("已复制到剪贴板"),!1})),document.querySelectorAll(".comiis_blockcode.comiis_bodybg").forEach(i=>{if(i.getAttribute("data-copy"))return;i.setAttribute("data-copy","true");let s=domUtils.createElement("div",{innerHTML:`
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
					</span>`},{style:"height: 34px;margin: 14px 0px;display: inline-flex;align-items: flex-end;"});domUtils.before(i,s);function n(m,p="java"){m.oldValue||(m.oldValue=m.textContent),m.innerHTML=hljs.highlight(m.oldValue,{language:p}).value.replace(/\\n$/gi,"");}let l=hljs.highlightAuto(i.textContent).language,o=document.createElement("div"),a=document.createElement("select"),r=hljs.listLanguages().sort();r=r.concat("自动检测");let c="";r.forEach(m=>{m.startsWith("自动检测")?c+=`<option data-value="${l}" selected="selected">${m}(${l})</option>`:c+=`<option data-value="${m}">${m}</option>`;}),a.className="code-select-language",a.innerHTML=c,domUtils.on(a,"change",function(){let m=a.selectedOptions[0].getAttribute("data-value");a.setAttribute("aria-label",m),log.info("切换代码块语言: ",m),i.querySelectorAll("li").forEach(p=>{n(p,m);});}),utils.preventEvent(a,"click"),o.appendChild(a),s.append(o),utils.dispatchEvent(a,"change"),i.className="hljs",i.firstChild.removeAttribute("class"),s.querySelector(".reader-copy-button").setAttribute("data-code-selector",utils.getElementSelector(i));});},optimizationImagePreview(){log.info("图片查看优化");function t(i=[],s=0){let n="";i.forEach(a=>{n+=`<li><img data-src="${a}"></li>`;});let l=domUtils.createElement("ul",{innerHTML:n}),o=new Viewer(l,{inline:!1,url:"data-src",zIndex:utils.getMaxZIndex()+100,hidden:()=>{o.destroy();}});log.info("查看的图片的下标",s),o.view(s),o.zoomTo(1),o.show();}let e=[{hostName:"avatar-bbs.mt2.cn",pathName:"*"},{hostName:"cdn-bbs.mt2.cn",pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"/uc_server/avatar.php"}];utils.waitNodeList("div.comiis_postlist.kqide .comiis_postli:not([data-isHandlingViewIMG])").then(i=>{i.forEach(s=>{s.setAttribute("data-isHandlingViewIMG","true");let n=[];s.querySelectorAll("img").forEach(l=>{let o=l.src,a=new URL(o).hostname,r=new URL(o).pathname,c=l.parentElement;c.nodeName.toLowerCase()==="span"&&c.removeAttribute("onclick"),c.nodeName.toLowerCase()==="a"&&c.getAttribute("href")===o&&(c.setAttribute("href","javascript:;"),c.removeAttribute("target"));let m=!1;for(let p of e)if(a.indexOf(p.hostName)!=-1&&r.match(p.pathName)){m=!0;break}m||(n=[...n,o],domUtils.on(l,"click",function(){log.info("点击图片",l);let p=n.findIndex(g=>g==o);t(n,p);}));}),n.length&&log.info("处理的图片",n);});});},setAttachmentsClickTip(){log.info("附件点击提醒");function t(e){if(e.hasAttribute("href")){let i=e.getAttribute("href"),s=e.querySelector("span.f_ok"),n=e.querySelector(".attach_size");if(domUtils.text(n).indexOf("金币")===-1)return;log.info("发现附件",e),log.info("该附件是金币附件，拦截！");let l=domUtils.text(s);e.setAttribute("data-href",e.getAttribute("href")),e.removeAttribute("href"),s.innerText="【已拦截】"+l,e.onclick=function(){log.info("附件url：",i),__pops.confirm({title:{text:"提示",position:"center"},content:{text:`<br />确定花费2金币下载附件 <a style="color: #507daf !important;">${l}</a> ？<br /><br />`,html:!0},btn:{ok:{callback:o=>{window.open(i,"_blank"),o.close();}}},mask:{enable:!0},width:"88vw",height:"200px"});};}}utils.mutationObserver(document.documentElement,{callback:()=>{document.querySelectorAll(".attnm a").forEach(e=>{t(e);}),document.querySelectorAll(".comiis_attach a").forEach(e=>{t(e);});},config:{childList:!0,subtree:!0}}),utils.waitNodeList(".attnm a").then(e=>{e.forEach(i=>{t(i);});}),utils.waitNodeList(".comiis_attach a").then(e=>{e.forEach(i=>{t(i);});});}},MTSearch={$flag:{showSearchHistory:!1},init(){PopsPanel.execMenuOnce("mt-search-showSearchHistory",()=>{this.showSearchHistory();}),DOMUtils.ready(()=>{PopsPanel.execMenuOnce("mt-search-repairClearBtn",()=>{this.repairClearBtn();}),PopsPanel.execMenuOnce("mt-search-searchInputAutoFocus",()=>{this.searchInputAutoFocus();});});},async showSearchHistory(){log.info("显示搜索历史"),addStyle(`
        #comiis_search_noe{
            display: none !important;
        }
        #comiis_search_two{
            display: block !important;
        }
        `);let t=_GM_getValue("search_history",[]),e=document.querySelector("#scform_srchtxt"),i=document.querySelector("#searchform"),s=__pops.searchSuggestion({target:e,inputTarget:e,data:t,getItemHTML:function(o){return o},getData(o){return t.filter(a=>a.includes(o))},deleteIcon:{enable:!0,callback(o,a,r){let c=t.findIndex(m=>m===r);c!==-1&&(t.splice(c,1),_GM_setValue("search_history",t)),a.remove();}},itemClickCallBack(o,a,r){e.value=r,i.submit();}});s.init(),s.setAllEvent();function n(){let o=document.querySelector("#scform_submit");DOMUtils.on(o,"click",function(){let a=e.value;if(a!=""){let r=_GM_getValue("search_history",[]);r.includes(a)?log.info("已有该搜索历史记录"):(log.info("无该记录，追加"),r.push(a)),_GM_setValue("search_history",r);}});}function l(){let a='<div class="comiis_p12 f14 bg_f f_c b_b cl" style="padding-bottom:10px">搜索记录个数: '+_GM_getValue("search_history",[]).length+`<button class="btn_clear_search_history" style="
                    border: none;
                    float: right;
                    background: red;
                    color: #fff;
                    border-radius: 3px;
                    font-weight: 600;
                    min-width: 20vw;
                    width: 20vw;
                ">清理记录</button></div>`;DOMUtils.before(document.querySelector(".comiis_p12"),a);let r=document.querySelector(".btn_clear_search_history");DOMUtils.on(r,"click",c=>{utils.preventEvent(c),_GM_deleteValue("search_history"),window.location.reload();});}n(),l();},repairClearBtn(){utils.waitNode("a.ssclose").then(t=>{log.info("修复清空按钮"),DOMUtils.on(t,"click",e=>{let i=document.querySelector("#scform_srchtxt");i?i.value="":Qmsg.error("获取输入框失败");},{capture:!0});});},searchInputAutoFocus(){new URLSearchParams(window.location.search).has("kw")||utils.waitNode("#scform_srchtxt").then(e=>{log.info("搜索框自动获取焦点"),setTimeout(()=>{e.focus();},25);});}},MTSign={init(){PopsPanel.execMenuOnce("mt-sign-showTodaySignStar",()=>{this.showTodaySignStar();}),PopsPanel.execMenuOnce("mt-sign-showTodayRanking",()=>{this.showTodayRanking();});},async showTodaySignStar(){log.info("显示【今日签到之星】");let t=document.querySelector(".pg_k_misign .comiis_qdinfo"),e=document.createElement("ul"),i=await httpx.get("/k_misign-sign.html",{headers:{"User-Agent":utils.getRandomPCUA()}});if(!i.status)return;let n=domUtils.parseHTML(i.data.responseText,!0,!0).querySelector("#pt span.xg1");if(!n)return;let l=domUtils.text(n).replace("今日签到之星：","");e.innerHTML=`
		<li class="f_f" style="display: flex;flex-direction: column;width: 100%;">
			<span class="comiis_tm">今日签到之星</span>
			${l}
		</li>
		`;let o=document.querySelector(".comiis_space_box"),a=parseInt(getComputedStyle(o,null).height.replace("px","")),r=parseInt(getComputedStyle(o,null).paddingBottom.replace("px","")),c=a+r+50;addStyle(`
		.comiis_space_box{
			height: ${c}px;
			background-size: 100% 100%;
		}
		.pg_k_misign .comiis_qdinfo{
			height: 110px !important;
		}`),t.append(e);},showTodayRanking(){log.info("显示【今日最先】");let t=document.querySelector(".comiis_topnv .comiis_flex .flex"),e=domUtils.createElement("li",{className:"flex"}),i=domUtils.createElement("a",{id:"k_misignlist_today_latest",href:"javascript:;",innerHTML:"今日最先"},{onclick:"ajaxlist('todayLatest');"});e.appendChild(i),domUtils.after(t,e);let s=async o=>{let a=await httpx.get(`/k_misign-sign.html?operation=${o}`,{responseType:"html",headers:{"User-Agent":utils.getRandomPCUA()}});if(!a.status)return;let c=domUtils.parseHTML(a.data.responseText,!0,!0).querySelector("#J_list_detail .pg span");if(c&&typeof c.title<"u"){let m=c.title.match(/([0-9]+)/);if(m&&m.length==2)return parseInt(m[m.length-1]);Qmsg.error("获取页失败");}else Qmsg.error("请求最先签到的页失败");},n=async o=>{let a=await httpx.get(`/k_misign-sign.html?operation=list&op=&page=${o}`,{responseType:"html",headers:{"User-Agent":utils.getRandomPCUA()}});if(!a.status)return;let c=domUtils.parseHTML(a.data.responseText,!0,!0).querySelectorAll("#J_list_detail tbody tr"),m=[];if(c.length==2&&c[0].textContent.indexOf("暂无内容")!=-1)return m;for(let p=1;p<=c.length-2;p++){let g=c[p],d={user:"",uid:"",avatar:"",days:"",monthDays:"",time:"",reward:""},u=g.children[0].getElementsByTagName("a")[0].textContent,y=g.children[0].getElementsByTagName("a")[0].href.match(/space-uid-([0-9]*)/)[1],_=g.children[1].textContent,x=g.children[2].textContent,S=g.children[3].textContent,v=g.children[5].textContent;d.user=u,d.uid=y,d.avatar=MTUtils.getAvatar(y,"small"),d.days=_,d.monthDays=x,d.time=S,d.reward=v,m.push(d);}return m};function l(o,a){let r=document.querySelector("#ranklist");domUtils.html(r,o),domUtils.attr(r,"listtype",a);}_unsafeWindow.ajaxlist=async o=>{if(o=o,o=="today"?(loadingdelay=!1,urlextra="list&op=today"):o=="month"?(loadingdelay=!1,urlextra="list&op=month"):o=="zong"?(loadingdelay=!1,urlextra="list&op=zong"):o=="calendar"?(loadingdelay=!0,urlextra="calendar"):(loadingdelay=!1,urlextra="list"),o=="todayLatest"){loadingdelay=!1,urlextra="list&op=&page=0";let a=await s(urlextra);if(!a)return;let r=await n(a);if(r.reverse(),r.length<10){let p=await n(a-1);p.reverse(),r=r.concat(p),r.reverse();}let c="";r.reverse(),r.forEach(p=>{c=c+`
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
			  			</tbody>`;});let m=`
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
							${c}
							</table>
						</div>
					</div>`;l(m,o);}else httpx.get(`plugin.php?id=k_misign:sign&operation=${urlextra}`,{responseType:"html",fetch:!0}).then(a=>{let r=a.data.responseText;r=r.replace("今日排行</a></li>",`今日排行</a></li>
							<li class="flex">
								<a href="javascript:;" id="k_misignlist_today_latest" onclick="ajaxlist('todayLatest');" class="f_c">今日最先</a>
							</li>`),o=="today"&&(r=r.replace(`<li class="flex"><a href="javascript:;" id="k_misignlist_today" onclick="ajaxlist('today');">今日排行</a></li>`,`
								<li class="flex f_0">
									<em class="bg_0"></em>
									<a href="javascript:;" id="k_misignlist_today" onclick="ajaxlist('today');">今日排行</a>
								</li>
								`)),l(r,o);});};}},MTSpace={init(){PopsPanel.execMenuOnce("mt-space-repairEnterSpace",()=>{this.repairEnterSpace();}),domUtils.ready(()=>{PopsPanel.execMenuOnce("mt-space-showCommentContent",()=>{this.showCommentContent();});});},repairEnterSpace(){if(log.info("修复无法进入空间"),Router.isSpace()){let t=window.location.href.match(/home.php\?(.+)/gi),e=t[t.length-1];e.split("&").length==2&&e.indexOf("uid=")!=-1&&e.indexOf("mod=space")!=-1&&(window.location.href=window.location.href+"&do=profile");}else if(Router.isSpaceWithAt()){let t=window.location.href.match(/space-uid-(.+).html/i),e=t[t.length-1];window.location.href=`${window.location.origin}/home.php?mod=space&uid=${e}&do=profile`;}},async showCommentContent(){log.info("显示帖子回复内容"),addStyle(`
		div.contrete-reply{padding:5px 10px;border-top:1px solid #f3f3f3}
		div.contrete-reply a{margin:0 10px}
		`);async function t(){let o=await httpx.get(window.location.href,{headers:{"User-Agent":utils.getRandomPCUA()}});if(!o.status)return;let a=domUtils.parseHTML(o.data.responseText,!0,!0),r=[];return a.querySelectorAll("#delform tr.bw0_all+tr").forEach(c=>{let m=[],p=c.querySelector("td"),g=domUtils.html(p).replace(/^&nbsp;/,"");m.push(g);let d=domUtils.next(c),u=a.querySelectorAll("#delform tr");for(let h=0;h<u.length&&!(!d||domUtils.attr(d,"class")==="bw0_all");h++){let y=d.querySelector("td"),_=domUtils.html(y).replace(/^&nbsp;/,"");m=m.concat(_),d=domUtils.next(d);}r.push(...m);}),r}function e(){return utils.getNodeListValue(ElementUtils.comiisForumList(),ElementUtils.comiisPostli(),ElementUtils.comiisMmlist())}function i(o){let a={};return o.forEach(r=>{var h;let m=(h=domUtils.createElement("div",{innerHTML:r}).querySelector("a"))==null?void 0:h.getAttribute("href"),p=m.match(MTRegExp.ptid),g=m.match(MTRegExp.pid);if(!p){Qmsg.error("获取ptid失败");return}if(!g){Qmsg.error("获取pid失败");return}let d=p[p.length-1],u=g[g.length-1];a[d]?a[d].data.push(r):a[d]={ptid:d,pid:u,data:[r]};}),a}var s=await t();if(s==null)return;var n=i(s);e().forEach((o,a)=>{let c=o.querySelector(".comiis_xznalist_bottom a").getAttribute("tid");if(!c){Qmsg.error("获取帖子tid失败"),log.error(o);return}n[c]&&n[c].data.forEach(m=>{domUtils.append(o,`<div class="contrete-reply">${m}</div>`);});});}},MTPaidThemePost={$key:{tipData:"tipToFreeSubjectForumPost"},init(){this.registerMenu();let t=this.getTipData();if(Router.isPost()&&document.querySelector("span.kmren")){log.info("当前帖子存在需要购买主题");let l=!1,o;t.forEach((r,c)=>{if(window.location.href.match(r.url)){l=!0;return}}),l?(log.warn("已设置提醒"),o=domUtils.createElement("a",{href:"javascript:;",className:"styli_tit f_c",innerHTML:`
                        <i class="comiis_font" style="color: #ffffff;"></i>
                        `}),domUtils.on(o,"click",function(){__pops.confirm({title:{text:"提示",position:"center"},content:{text:"<p>确定移出付费主题白嫖列表？</p>",html:!0},btn:{ok:{callback:function(){let r=t.findIndex((c,m)=>window.location.href.match(c.url));r!==-1?(t.splice(r,1),MTPaidThemePost.setTipData(t),Qmsg.success("移除成功")):Qmsg.error("移除失败");}}},mask:{enable:!0},width:"88vw",height:"300px"});})):(log.info("未设置提醒"),o=domUtils.createElement("a",{href:"javascript:;",className:"styli_tit f_c",innerHTML:`
                        <i class="comiis_font" style="color: #FF9900;"></i>
                        `}),domUtils.on(o,"click",()=>{let r=document.querySelector(".kmren"),c=domUtils.parent(r),m=domUtils.text(c).replace(/\t|\n/g,"").match(/[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]{1}[0-9]{1,2}:[0-9]{1,2}/);if(!m||m.length==0){Qmsg.error("获取付费主题到期时间失败");return}let p=m[0],g=utils.formatToTimeStamp(p);t.push({url:window.location.href,title:document.title.replace(" - MT论坛",""),expirationTime:p,expirationTimeStamp:g,isVisited:!1}),_GM_setValue("tipToFreeSubjectForumPost",t),Qmsg.success("添加成功"),setTimeout(function(){window.location.reload();},1500);}));let a=document.querySelector(".comiis_head.f_top .header_y");domUtils.append(a,o);}function e(){let n=0;return Array.from(MTPaidThemePost.getTipData()).forEach((l,o)=>{new Date().getTime()>l.expirationTimeStamp&&l.isVisited==!1&&(n+=1);}),n}if(Router.isMySpace()||Router.isGuide()||Router.isForumList()||Router.isPlate()){let n=document.querySelector(".icon_msgs.bg_del.f_f"),l=0;n?(l=parseInt(domUtils.text(n)),domUtils.html(n,(l+e()).toString()),domUtils.append(".comiis_head .header_z .kmuser em",'<span class="icon_msgs bg_del"></span>')):e()&&domUtils.append(".comiis_head .header_z .kmuser em",'<span class="icon_msgs bg_del"></span>');}let i=document.querySelector(".sidenv_num.bg_del.f_f"),s=0;if(i)s=parseInt(domUtils.text(i)),domUtils.html(".sidenv_num.bg_del.f_f",(s+e()).toString());else {let n=e();n&&domUtils.before(".sidenv_user em",`<span class="sidenv_num bg_del f_f">${n}</span>`);}e()&&domUtils.append(".comiis_left_Touch .paymentsubjectreminder div.flex",`
                <span class="sidenv_num bg_del f_f" style="
                    position: relative;
                    border-radius: 18px;
                    height: 6px;
                    width: 6px;
                    left: 3px;
                    display: inline-flex;
                    bottom: 8px;
                "></span>`);},registerMenu(){ElementUtils.registerLeftMenu({name:"付费主题白嫖提醒",icon:"",iconColor:"#ec0000",callback:()=>{this.showView();}});},showView(){log.info("显示白嫖列表");let t=MTPaidThemePost.getTipData();__pops.alert({title:{text:"付费主题白嫖列表",position:"center"},content:{text:"",html:!0},btn:{ok:{text:"关闭",type:"default"}},mask:{enable:!0},width:"88vw",height:"88vh"});let e="",i=0,s="",n="",l=[],o=[],a=[];t.forEach((d,u)=>{let h="#f91212",y="";new Date().getTime()>d.expirationTimeStamp&&(h="#1e90ff",d.isVisited||(y=`
                        <span class="icon_msgs bg_del" style="position: fixed;width: 10px;height: 10px;border-radius: 50%;margin: 10px 0px 0px -15px;"></span>
                    `,i=i+1));let _={content:`
                <tbody id="autolist">
                    <tr>
                        <td style="width: 100%;">
                            <div style="display: inline-flex;">
                            ${y}
                            <div style="width: 240px;">                 
                                <a href="javascript:void(0);" t-href="${d.url}" t-index="${u}" style="color: #1e90ff;">${d.title}</a>
                                <li style="margin: 5px 15px;color: ${h};">${d.expirationTime}</li>
                            </div>
                            <div style="align-self: center;margin-left: 10px;" t-index="${u}" class="delsubjecttip">
                                <i class="comiis_font" style="font-size: 24px;padding: 0px 6px;"></i>
                            </div>
                            </div>
                        </td>
                    </tr>
                    <tr style="height:15px;"></tr>
                </tbody>`,timestamp:d.expirationTimeStamp};new Date().getTime()>d.expirationTimeStamp?y!=""?l.push(_):o.push(_):a.push(_);}),log.info("可白嫖但未访问：",l),log.info("可白嫖：",o),log.info("未到白嫖时间：",a),utils.sortListByProperty(l,"expirationTimeStamp",!1),utils.sortListByProperty(o,"timestamp",!1),utils.sortListByProperty(a,"timestamp",!1),log.info("排序后——可白嫖但未访问：",l),log.info("排序后——可白嫖：",o),log.info("排序后——未到白嫖时间：",a),s=utils.mergeArrayToString(l,"content")+utils.mergeArrayToString(o,"content"),n=utils.mergeArrayToString(a,"content"),i>0&&(e=`
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
            ">${i}</span>`);let r=`
            <details class="subjectcanvisit" open="">
                <summary>可白嫖${e}</summary>
                <table id="paymentSubjectReminderIsFreeList" style="overflow: auto;height: inherit;margin: 15px 0px;">
                    ${s}    
                </table>
            </details>
        `,c=`
            <details class="subjectnotvisit">
                <summary>需付费</summary>
                <table id="paymentSubjectReminderIsPaidList" style="overflow: auto;height: inherit;margin: 15px 0px;">
                    ${n}
                </table>
            </details>
        `,m=document.querySelector(".msgcon");domUtils.html(m,""),domUtils.append(m,r),domUtils.append(m,c),domUtils.css(m,"height","400px"),domUtils.on(document.querySelector(".delsubjecttip i.comiis_font"),"click",d=>{let u=d.target,h=domUtils.parent(u);var y=parseInt(h.getAttribute("t-index"));__pops.confirm({title:{text:"提示",position:"center"},content:{text:"<p>确定移出付费主题白嫖列表？</p>",html:!0},mask:{enable:!0},btn:{ok:{callback:_=>{t.splice(y,1),MTPaidThemePost.setTipData(t),utils.deleteParentNode(u,"tr"),_.close();}}},width:"80vw",height:"300px"});});let p=document.querySelector("#paymentSubjectReminderIsFreeList");domUtils.on(p,"click","a",d=>{var v,U,k,q,M,b;let u=d.target;var h=parseInt(u.getAttribute("t-index")),y=u.getAttribute("t-href");if(t[h].isVisited=!0,MTPaidThemePost.setTipData(t),window.open(y,"_blank"),u.setAttribute("style","color: #000000;"),((U=(v=u==null?void 0:u.parentElement)==null?void 0:v.parentElement)==null?void 0:U.children[0].className)!="icon_msgs bg_del")return;u.parentElement.parentElement.children[0].remove(),domUtils.append(p,(b=(M=(q=(k=u==null?void 0:u.parentElement)==null?void 0:k.parentElement)==null?void 0:q.parentElement)==null?void 0:M.parentElement)==null?void 0:b.parentElement);let _=document.querySelector(".subjectcanvisit summary span.icon_msgs.bg_del.f_f"),x=domUtils.text(_),S=parseInt(x)-1;S>0?domUtils.html(_,S.toString()):_.remove();});let g=document.querySelector("paymentSubjectReminderIsPaidList");domUtils.on(g,"click","a",d=>{let u=d.target;u.getAttribute("t-index");var h=u.getAttribute("t-href");window.open(h,"_blank"),u.setAttribute("style","color: #000000;");});},getTipData(){return _GM_getValue(this.$key.tipData,[])},setTipData(t){_GM_setValue(this.$key.tipData,t);}},smallWindowCSS=`.pops {\r
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
`;class GestureBack{constructor(e){P(this,"isBacking",!1);P(this,"config");this.config=e,this.enterGestureBackMode.bind(this),this.quitGestureBackMode.bind(this),this.popStateEvent.bind(this),(typeof this.config.backDelayTime!="number"||isNaN(this.config.backDelayTime))&&(this.config.backDelayTime=150),this.config.win==null&&(this.config.win=self);}popStateEvent(e){utils.preventEvent(e),!this.isBacking&&this.quitGestureBackMode();}enterGestureBackMode(){log.success("进入手势模式");let e=this.config.hash;e.startsWith("#")||(e.startsWith("/")||(e="/"+e),e="#"+e),this.config.useUrl&&(e=this.config.win.location.origin+this.config.win.location.pathname+this.config.win.location.search+e),this.config.win.history.pushState({},"",e),log.success("监听popstate事件"),domUtils.on(this.config.win,"popstate",this.popStateEvent.bind(this),{capture:!0});}async quitGestureBackMode(){this.isBacking=!0,log.success("退出手势模式"),typeof this.config.beforeHistoryBackCallBack=="function"&&this.config.beforeHistoryBackCallBack();let e=Date.now()+1e3*5;for(;;){if(Date.now()>e){log.error("未知情况，history.back()失败，无法退出手势模式");break}if(this.config.win.location.hash.endsWith(this.config.hash))log.info("history.back()"),this.config.win.history.back(),await utils.sleep(this.config.backDelayTime||150);else break}log.success("移除popstate事件"),domUtils.off(this.config.win,"popstate",this.popStateEvent.bind(this),{capture:!0}),this.isBacking=!1,typeof this.config.afterHistoryBackCallBack=="function"&&this.config.afterHistoryBackCallBack();}}const MTSmallWindowIcon={https:`
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
		</svg>`},MTSmallWindow={$key:{smallWindow:"smallWindow"},$el:{$refreshIcon:null,$webSiteIcon:null},init(){let t=new utils.LockFunction(()=>{let e=this.getForumList();e.length&&this.handleForumPost(e);});utils.mutationObserver(document.documentElement,{callback:(e,i)=>{t.run();},config:{subtree:!0,childList:!0}});},getForumList(){return utils.getNodeListValue(ElementUtils.comiisForumList(),ElementUtils.comiisPostli(),ElementUtils.comiisMmlist())},showSmallWindow(t,e,i=[]){let s=new URL(e),n=s.protocol.includes("https:"),l=`
        <div class="small-window-drag">
            <!-- 这里是拖拽区域 -->
            <div></div>
        </div>
        <div class="small-window-title-container">
            <i class="small-window-website-icon" style="display: none;">
                ${MTSmallWindowIcon.mt}
            </i>
            <div class="refresh-icon">
                <div class="refresh-icon-out"></div>
                <div class="refresh-icon-in"></div>
            </div>
            <div class="small-window-title-text-container">
                <p class="small-window-title-text">${t}</p>
                <div class="small-window-protocol-info">
                    <i class="small-window-protocol-icon">
                        ${n?MTSmallWindowIcon.https:MTSmallWindowIcon.http}
                    </i>
                    <p class="small-window-website-host">${s.host}</p>
                </div>
            </div>
            <div class="small-window-control">
                ${i.length?`
                    <i class="small-window-control-image-view">
                        ${MTSmallWindowIcon.image}
                    </i>
                    `:""}
                <i class="small-window-control-open-blank">
                    ${MTSmallWindowIcon.openBlank}
                </i>
                <i class="small-window-control-close">
                    ${MTSmallWindowIcon.close}
                </i>
            </div>
        </div>`,o=__pops.drawer({title:{enable:!0,text:l,html:!0,style:"height: auto;line-height: normal;"},content:{text:`
                <iframe scrolling="auto" allowtransparency="true" frameborder="0" src="${e}" style="width:100%; height:100%;">
                </iframe>
                `,html:!0},mask:{enable:!0,clickEvent:{toClose:!0},clickCallBack(v,U){S.quitGestureBackMode();}},btn:{ok:{enable:!1},cancel:{enable:!1},close:{enable:!1}},direction:"bottom",size:"92%",borderRadius:18,style:smallWindowCSS}),a=o.$shadowRoot.querySelector(".small-window-website-icon"),r=o.$shadowRoot.querySelector(".refresh-icon"),c=o.$shadowRoot.querySelector(".small-window-control-image-view"),m=o.$shadowRoot.querySelector(".small-window-control-open-blank"),p=o.$shadowRoot.querySelector(".small-window-control-close"),g=o.$shadowRoot.querySelector(".small-window-title-text");this.$el.$refreshIcon=r,this.$el.$webSiteIcon=a;let d=o.$shadowRoot.querySelector("iframe"),u=o.$shadowRoot.querySelector(".small-window-drag"),h=__pops.config.Utils.AnyTouch(),y=new h(u),_=o.popsElement,x=domUtils.height(_);y.on("pan",v=>{v.phase=="move"&&v.displacementY>0&&(_.style.transition="none",_.style.height=Math.abs(x-v.distanceY)+"px"),v.isEnd&&(_.style.transition="0.2s ease-in",parseInt(_.style.height)>window.innerHeight/2?_.style.height=x+"px":o.close());});let S=new GestureBack({win:self,hash:this.$key.smallWindow,useUrl:!0,beforeHistoryBackCallBack:()=>{o.close();}});S.enterGestureBackMode(),domUtils.on(g,"click",v=>{utils.preventEvent(v),utils.setClip(`『${t}』 - ${e}`),Qmsg.success("已复制链接");}),domUtils.on(c,"click",v=>{utils.preventEvent(v),log.info("查看图片",i);var U="";i.forEach(M=>{U+=`<li><img data-src="${M}"></li>`;});var k=domUtils.parseHTML(`<ul>${U}</ul>`,!1,!1);let q=new Viewer(k,{inline:!1,url:"data-src",zIndex:(()=>{let M=utils.getMaxZIndex(),b=__pops.config.InstanceUtils.getPopsMaxZIndex().zIndex;return utils.getMaxValue(M,b)+100})(),hidden:()=>{q.destroy();}});q.zoomTo(1),q.show();}),domUtils.on(p,"click",v=>{utils.preventEvent(v),S.quitGestureBackMode();}),domUtils.on(m,"click",v=>{utils.preventEvent(v),window.open(e,"_blank");}),domUtils.on(a,"click",v=>{utils.preventEvent(v),d.contentWindow.location.reload(),this.checkIframeReadyState(d);}),this.checkIframeReadyState(d);},async handleForumPost(t){t.forEach(e=>{if(e.getAttribute("data-injection-small-window"))return;let i=domUtils.text(e.querySelector(".mmlist_li_box h2 a"));(i==""||i==null)&&(i=domUtils.text(e.querySelector(".mmlist_li_box a"))),i=i.trim();let s=e.querySelector(".mmlist_li_box a").href;var n=[];e.setAttribute("data-injection-small-window","true"),e.setAttribute("data-injection-small-window-url",s),e.setAttribute("data-injection-small-window-title",i),e.querySelectorAll(".comiis_pyqlist_img img").forEach(o=>{n.push(o.getAttribute("src"));}),e.querySelectorAll(".comiis_pyqlist_imgs img").forEach(o=>{n.push(o.getAttribute("src"));}),e.querySelectorAll(".mmlist_li_box a").forEach(o=>{o.removeAttribute("href"),o.setAttribute("data-href",s);});let l=e.querySelector(".mmlist_li_box");domUtils.on(l,"click",function(o){var a=Number(o.clientX);document.body.offsetWidth/2>a?window.location.href=s:MTSmallWindow.showSmallWindow(i,s,n);});});},checkIframeReadyState(t){this.showRefreshIcon();let e=setInterval(()=>{t.contentWindow&&(clearInterval(e),domUtils.createDOMUtils({document:t.contentWindow.document,window:t.contentWindow,globalThis:t.contentWindow,self:t.contentWindow,top}).ready(()=>{log.success("小窗内容已加载完毕"),this.hideRefreshIcon();}));},400);},hideRefreshIcon(){this.$el.$refreshIcon.style.display="none",this.$el.$webSiteIcon.style.display="";},showRefreshIcon(){this.$el.$refreshIcon.style.display="",this.$el.$webSiteIcon.style.display="none";}},MTGuide={init(){DOMUtils.ready(()=>{PopsPanel.execMenuOnce("mt-guide-showLatestPost",()=>{this.showLatestPost();});});},showLatestPost(){log.info("显示最新帖子");async function t(){let e=await httpx.get("/forum.php?mod=guide&view=hot",{fetch:!0,allowInterceptConfig:!1});if(!e.status){Qmsg.error("获取轮播失败");return}if(e.data.responseText.indexOf('<script src="/_guard/auto.js"><\/script>')!==-1){Qmsg.error("获取轮播失败 未知的/_guard/auto.js文件");return}var i=DOMUtils.parseHTML(e.data.responseText,!0,!0),s=i.querySelectorAll('div.comiis_mh_kxtxt div[id*="comiis_mh_kxtxt"] ul');if(s.length===0){Qmsg.error("获取轮播失败");return}else {var n=[];s[s.length-1].querySelectorAll("a").forEach(l=>{n.push({href:l.getAttribute("href"),title:l.getAttribute("title")});});}return n}t().then(e=>{if(!e)return;addStyle(`
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
            `);var i="";utils.sortListByProperty(e,n=>{var l=n.href.match(/thread-(.+?)-/i);return parseInt(l[l.length-1])},!0),log.info("导读内容",e),e.forEach(n=>{i+=`
                <li>
                    <span>新帖</span>
                    <a href="${n.href}" title="${n.title}" target="_blank">${n.title}</a>
                </li>`;});let s=document.querySelector(".comiis_forumlist.comiis_xznlist");DOMUtils.before(s,`<div class="comiis_mh_kxtxt bg_f comiis_mh_kxtxt_owm"><ul>${i}</ul></div>`);});}};class RuleEditView{constructor(e){P(this,"option");this.option=e;}showView(){var o;let e=__pops.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist">
                            
                        </ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:!0},btn:utils.assign({ok:{callback(){l();}}},this.option.btn||{},!0),mask:{enable:!0},style:`
                ${__pops.config.cssText.panelCSS}
                
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
            `,width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh"}),i=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");let s=e.$shadowRoot.querySelector(".rule-form-ulist"),n=this.option.getView(this.option.data());s.appendChild(n);const l=()=>{this.option.onsubmit(i,this.option.data()).success&&(e.close(),this.option.dialogCloseCallBack(!0));};}}class RuleFilterView{constructor(e){P(this,"option");this.option=e;}showView(){let e=__pops.alert({title:{text:this.option.title,position:"center"},content:{text:`
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
            `}),i=e.$shadowRoot.querySelector(".filter-container"),s=document.createDocumentFragment();this.option.filterOption.forEach(n=>{let l=document.createElement("button");l.innerText=n.name;let o=()=>{this.option.getAllRuleInfo().forEach(a=>{n.filterCallBack(a.data)?domUtils.show(a.$el,!1):domUtils.hide(a.$el,!1);}),typeof this.option.execFilterCallBack=="function"&&this.option.execFilterCallBack(),e.close();};domUtils.on(l,"click",a=>{utils.preventEvent(a),!(typeof n.callback=="function"&&!n.callback(a,o))&&o();}),s.appendChild(l);}),i.appendChild(s);}}class RuleView{constructor(e){P(this,"option");this.option=e;}showView(){var s,n,l,o,a,r,c,m,p;let e=__pops.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:!0},btn:{merge:!0,reverse:!1,position:"space-between",ok:{enable:((l=(n=(s=this.option)==null?void 0:s.bottomControls)==null?void 0:n.add)==null?void 0:l.enable)||!0,type:"primary",text:"添加",callback:g=>{this.showEditView(e.$shadowRoot,!1,this.option.getAddData());}},close:{enable:!0,callback(g){e.close();}},cancel:{enable:((r=(a=(o=this.option)==null?void 0:o.bottomControls)==null?void 0:a.filter)==null?void 0:r.enable)||!1,type:"default",text:"过滤",callback:(g,d)=>{var y,_,x,S,v,U,k;typeof((x=(_=(y=this.option)==null?void 0:y.bottomControls)==null?void 0:_.filter)==null?void 0:x.callback)=="function"&&this.option.bottomControls.filter.callback();let u=()=>Array.from(e.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),h=d.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");domUtils.text(h).includes("取消")?u().forEach(q=>{domUtils.show(q,!1);}):new RuleFilterView({title:((v=(S=this.option.bottomControls)==null?void 0:S.filter)==null?void 0:v.title)??"过滤规则",filterOption:((k=(U=this.option.bottomControls)==null?void 0:U.filter)==null?void 0:k.option)||[],execFilterCallBack(){domUtils.text(h,"取消过滤");},getAllRuleInfo:()=>u().map(M=>({data:this.parseRuleItemElement(M).data,$el:M}))}).showView();}},other:{enable:((p=(m=(c=this.option)==null?void 0:c.bottomControls)==null?void 0:m.clear)==null?void 0:p.enable)||!0,type:"xiaomi-primary",text:`清空所有(${this.option.data().length})`,callback:g=>{let d=__pops.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:!1},btn:{ok:{enable:!0,callback:u=>{var h,y,_;if(log.success("清空所有"),typeof((_=(y=(h=this.option)==null?void 0:h.bottomControls)==null?void 0:y.clear)==null?void 0:_.callback)=="function"&&this.option.bottomControls.clear.callback(),this.option.data().length){Qmsg.error("清理失败");return}else Qmsg.success("清理成功");this.updateDeleteAllBtnText(e.$shadowRoot),this.clearContent(e.$shadowRoot),d.close();}},cancel:{text:"取消",enable:!0}},mask:{enable:!0},width:"300px",height:"200px"});}}},mask:{enable:!0},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
            ${__pops.config.cssText.panelCSS}
            
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
            `});this.option.data().forEach(g=>{this.appendRuleItemElement(e.$shadowRoot,g);});}parseViewElement(e){let i=e.querySelector(".rule-view-container"),s=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:i,$deleteBtn:s}}parseRuleItemElement(e){let i=e.querySelector(".rule-controls-enable"),s=i.querySelector(".pops-panel-switch"),n=i.querySelector(".pops-panel-switch__input"),l=i.querySelector(".pops-panel-switch__core"),o=e.querySelector(".rule-controls-edit"),a=e.querySelector(".rule-controls-delete");return {$enable:i,$enableSwitch:s,$enableSwitchInput:n,$enableSwitchCore:l,$edit:o,$delete:a,data:Reflect.get(e,"data-rule")}}createRuleItemElement(e,i){let s=this.option.getDataItemName(e),n=domUtils.createElement("div",{className:"rule-item",innerHTML:`
			<div class="rule-name">${s}</div>
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
					${__pops.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${__pops.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(n,"data-rule",e);let l="pops-panel-switch-is-checked";const{$enable:o,$enableSwitch:a,$enableSwitchCore:r,$enableSwitchInput:c,$delete:m,$edit:p}=this.parseRuleItemElement(n);return this.option.itemControls.enable.enable?(domUtils.on(r,"click",g=>{let d=!1;a.classList.contains(l)?(a.classList.remove(l),d=!1):(a.classList.add(l),d=!0),c.checked=d,this.option.itemControls.enable.callback(e,d);}),this.option.itemControls.enable.getEnable(e)&&a.classList.add(l)):o.remove(),this.option.itemControls.edit.enable?domUtils.on(p,"click",g=>{utils.preventEvent(g),this.showEditView(i,!0,e,n,d=>{e=null,e=d;});}):p.remove(),this.option.itemControls.delete.enable?domUtils.on(m,"click",g=>{utils.preventEvent(g);let d=__pops.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:!1},btn:{ok:{enable:!0,callback:u=>{log.success("删除数据"),this.option.itemControls.delete.deleteCallBack(e)?(Qmsg.success("成功删除该数据"),n.remove(),this.updateDeleteAllBtnText(i),d.close()):Qmsg.error("删除该数据失败");}},cancel:{text:"取消",enable:!0}},mask:{enable:!0},width:"300px",height:"200px"});}):m.remove(),n}appendRuleItemElement(e,i){const{$container:s}=this.parseViewElement(e);if(Array.isArray(i))for(let n=0;n<i.length;n++){const l=i[n];s.appendChild(this.createRuleItemElement(l,e));}else s.appendChild(this.createRuleItemElement(i,e));this.updateDeleteAllBtnText(e);}updateRuleContaienrElement(e){this.clearContent(e),this.parseViewElement(e);let i=this.option.data();this.appendRuleItemElement(e,i),this.updateDeleteAllBtnText(e);}updateRuleItemElement(e,i,s){let n=this.createRuleItemElement(e,s);i.after(n),i.remove();}clearContent(e){const{$container:i}=this.parseViewElement(e);domUtils.html(i,"");}setDeleteBtnText(e,i,s=!1){const{$deleteBtn:n}=this.parseViewElement(e);s?domUtils.html(n,i):domUtils.text(n,i);}updateDeleteAllBtnText(e){let i=this.option.data();this.setDeleteBtnText(e,`清空所有(${i.length})`);}showEditView(e,i,s,n,l){let o=r=>{if(!r){if(i||this.option.deleteData(s),typeof l=="function"){let c=this.option.getData(s);l(c);}}};new RuleEditView({title:i?"编辑":"添加",data:()=>s,dialogCloseCallBack:o,getView:r=>this.option.itemControls.edit.getView(r,i),btn:{ok:{enable:!0,text:i?"修改":"添加"},cancel:{callback(r,c){r.close(),o(!1);}},close:{callback(r,c){r.close(),o(!1);}}},onsubmit:(r,c)=>{let m=this.option.itemControls.edit.onsubmit(r,i,c);return m.success?i?(Qmsg.success("修改成功"),this.updateRuleItemElement(m.data,n,e)):this.appendRuleItemElement(e,m.data):i&&Qmsg.error("修改失败"),m},style:this.option.itemControls.edit.style}).showView();}}const MTOwnBlock={$key:{STORAGE_KEY:"mt-own-block-rule"},$data:{isRegister:!1},init(){this.registerMenu();let t=new utils.LockFunction(()=>{this.runRule();});utils.mutationObserver(document,{config:{subtree:!0,childList:!0},callback:()=>{t.run();}});},registerMenu(){this.$data.isRegister||(this.$data.isRegister=!0,ElementUtils.registerLeftMenu({name:"我的屏蔽",icon:"",iconColor:"#000",callback:()=>{this.showView();}}));},getTemplateData(){return {uuid:utils.generateUUID(),enable:!0,name:"",data:{userName:"",userUID:"",userLevel:"",postUrl:"",postTitle:"",postContent:"",postPlateName:""}}},showView(){let t=__pops.config.panelHandleContentUtils();function e(s){return {get(n,l){return s[n]??l},set(n,l){s[n]=l;}}}new RuleView({title:"我的屏蔽",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:s=>s.name,updateData:s=>this.updateData(s),deleteData:s=>this.deleteData(s),getData:s=>this.getData().find(o=>o.uuid===s.uuid)??s,itemControls:{enable:{enable:!0,getEnable(s){return s.enable},callback:(s,n)=>{s.enable=n,this.updateData(s);}},edit:{enable:!0,getView:(s,n)=>{let l=document.createDocumentFragment();n||(s=this.getTemplateData());let o=UISwitch("启用","enable",!0);Reflect.set(o.props,PROPS_STORAGE_API,e(s));let a=t.createSectionContainerItem_switch(o),r=UIInput("规则名称","name","","",void 0,"必填");Reflect.set(r.props,PROPS_STORAGE_API,e(s));let c=t.createSectionContainerItem_input(r),m=UIInput("用户名","userName","","",void 0,"可正则");Reflect.set(m.props,PROPS_STORAGE_API,e(s.data));let p=t.createSectionContainerItem_input(m),g=UIInput("用户UID","userUID","","",void 0,"可正则");Reflect.set(g.props,PROPS_STORAGE_API,e(s.data));let d=t.createSectionContainerItem_input(g),u=UIInput("用户等级","userLevel","","",void 0,"可正则");Reflect.set(u.props,PROPS_STORAGE_API,e(s.data));let h=t.createSectionContainerItem_input(u),y=UIInput("帖子url","postUrl","","",void 0,"可正则");Reflect.set(y.props,PROPS_STORAGE_API,e(s.data));let _=t.createSectionContainerItem_input(y),x=UIInput("帖子标题","postTitle","","",void 0,"可正则");Reflect.set(x.props,PROPS_STORAGE_API,e(s.data));let S=t.createSectionContainerItem_input(x),v=UIInput("帖子内容","postContent","","",void 0,"可正则");Reflect.set(v.props,PROPS_STORAGE_API,e(s.data));let U=t.createSectionContainerItem_input(v),k=UIInput("帖子所在的板块名","postPlateName","","",void 0,"可正则");Reflect.set(k.props,PROPS_STORAGE_API,e(s.data));let q=t.createSectionContainerItem_input(k);return l.appendChild(a),l.appendChild(c),l.appendChild(p),l.appendChild(d),l.appendChild(h),l.appendChild(_),l.appendChild(S),l.appendChild(U),l.appendChild(q),l},onsubmit:(s,n,l)=>{let o=s.querySelectorAll(".rule-form-ulist > li"),a=this.getTemplateData();return n&&(a.uuid=l.uuid),o.forEach(r=>{let c=Reflect.get(r,"__formConfig__"),m=Reflect.get(c,"attributes"),p=Reflect.get(r,PROPS_STORAGE_API),g=Reflect.get(m,ATTRIBUTE_KEY),d=Reflect.get(m,ATTRIBUTE_DEFAULT_VALUE),u=p.get(g,d);Reflect.has(a,g)?Reflect.set(a,g,u):Reflect.has(a.data,g)?Reflect.set(a.data,g,u):log.error(`${g}不在数据中`);}),a.name.trim()===""?(Qmsg.error("规则名称不能为空"),{success:!1,data:a}):n?{success:this.updateData(a),data:a}:{success:this.addData(a),data:a}}},delete:{enable:!0,deleteCallBack:s=>this.deleteData(s)}}}).showView();},runRule(){let t=this.getData();function e(i){for(const s of t){let n=s.data;if(Object.keys(n).find(o=>{let a=n[o];if(utils.isNotNull(a)){let r=new RegExp(a,"i"),c=Reflect.get(i,o);if(typeof c=="string"&&utils.isNotNull(c)&&c.match(r))return log.info("屏蔽",[n,c]),!0}return !1}))return !0}return !1}(Router.isGuide()||Router.isPlate()||Router.isPost())&&(this.getData(),document.querySelectorAll(".comiis_forumlist .forumlist_li").forEach(i=>{var n;let s={userName:i.querySelector("a.top_user").innerText,userUID:i.querySelector("a.top_user").href.match(MTRegExp.uid)[1].trim(),userLevel:i.querySelector("span.top_lev").innerText.replace("Lv.",""),postUrl:i.querySelector(".mmlist_li_box a").getAttribute("href")||i.querySelector(".mmlist_li_box a").getAttribute("data-href"),postTitle:((n=i.querySelector(".mmlist_li_box h2 a"))==null?void 0:n.innerText)||"",postContent:i.querySelector(".mmlist_li_box .list_body").innerText,postPlateName:(i.querySelector(".forumlist_li_time a.f_d")||i.querySelector(".comiis_xznalist_bk.cl")).innerText.replace(//g,"").replace(/\s*/g,"").replace(/来自/g,"")};utils.isNull(s.postPlateName)&&(s.postPlateName=document.querySelector("#comiis_wx_title_box").innerText),e(s)&&i.remove();}),document.querySelectorAll(".comiis_postlist .comiis_postli").forEach(i=>{let s={userName:i.querySelector("a.top_user").innerText,userUID:i.querySelector("a.top_user").href.match(MTRegExp.uid)[1].trim(),userLevel:i.querySelector("a.top_lev").innerText.replace("Lv.",""),postUrl:void 0,postTitle:void 0,postContent:i.querySelector(".comiis_message_table").innerText,postPlateName:void 0};e(s)&&i.remove();})),Router.isMessageList()&&(this.getData(),document.querySelectorAll(".comiis_pms_box .comiis_pmlist ul li").forEach(i=>{let s={userName:i.querySelector("h2").innerText.replace(i.querySelector("h2 span").innerText,"").replace(/\s*/,""),userUID:i.querySelector("a.b_b").href.match(MTRegExp.uid)[1].trim(),userLevel:void 0,postUrl:i.querySelector("a.b_b").href,postTitle:void 0,postContent:i.querySelector("p.f_c").innerText.trim(),postPlateName:void 0};e(s)&&i.remove();}));},getData(){return _GM_getValue(this.$key.STORAGE_KEY,[])},setData(t){_GM_setValue(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(s=>s.uuid==t.uuid)===-1?(e.push(t),_GM_setValue(this.$key.STORAGE_KEY,e),!0):!1},updateData(t){let e=this.getData(),i=e.findIndex(n=>n.uuid==t.uuid),s=!1;return i!==-1&&(s=!0,e[i]=t),this.setData(e),s},deleteData(t){let e=this.getData(),i=e.findIndex(n=>n.uuid==t.uuid),s=!1;return i!==-1&&(s=!0,e.splice(i,1)),this.setData(e),s},clearData(){_GM_deleteValue(this.$key.STORAGE_KEY);}},MTCommentFilter={$el:{isFilterElementHTML:[]},$key:{STORAGE_KEY:"mt-post-comment-filter-rule"},init(){if(this.registerMenu(),Router.isPost()){let t=this.getData(),e=new utils.LockFunction(()=>{this.runFilter(t);});utils.mutationObserver(document,{config:{subtree:!0,childList:!0},callback:()=>{e.run();}});}},registerMenu(){ElementUtils.registerLeftMenu({name:"评论过滤器",icon:"",iconColor:"#ff0019",callback:()=>{this.showView();}});},runFilter(t){let e=function(s){for(const n of t.userBlackList)if(n==s.userName||n==s.userUID)return log.success("评论过滤器：黑名单用户",s),!0;return !1},i=function(s){for(const n of t.userWhiteList)if(n===s.userName||n===s.userUID)return log.success("评论过滤器：白名单用户",s),!0;return !1};document.querySelectorAll(".comiis_postlist .comiis_postli").forEach(s=>{var l,o,a,r,c,m,p;if(s.querySelector("#comiis_allreplies"))return;let n={userName:((l=s.querySelector("a.top_user"))==null?void 0:l.innerText)||"",userUID:((c=(r=(a=(o=s.querySelector("a.top_user"))==null?void 0:o.href)==null?void 0:a.match(MTRegExp.uid))==null?void 0:r[1])==null?void 0:c.trim())||"",content:((p=(m=s.querySelector(".comiis_message_table"))==null?void 0:m.innerText)==null?void 0:p.trim())||"",isAuthor:!!s.querySelector("span.top_lev")};if(!i(n)){if(t.replyFlag&&s.querySelector(".comiis_quote")){let g=s.querySelector(".comiis_quote");this.$el.isFilterElementHTML.push(g.outerHTML),g.remove();}if(!(n.isAuthor&&!t.avatarFlag)){if(e(n)){this.$el.isFilterElementHTML.push(s.outerHTML),s.remove();return}if(!(typeof t.minLength=="number"&&t.minLength>n.content.length)&&!(typeof t.keywordLength=="number"&&t.keywordLength<n.content.length))for(const g of t.keywords){if(typeof g!="string")continue;let d=new RegExp(g);if(n.content.match(d)){console.log("评论过滤器：",n),this.$el.isFilterElementHTML.push(s.outerHTML),s.remove();return}}}}});},showView(){const t=this;function e(n){return {get(l,o){let a=t.getData(),r=Reflect.get(a,l,o);return (l==="keywords"||l==="userWhiteList"||l==="userBlackList")&&(r=r.join(`
`)),r},set(l,o){(l==="keywords"||l==="userWhiteList"||l==="userBlackList")&&(o=o.split(`
`).filter(a=>a.trim()!="")),Reflect.set(n,l,o),t.setData(n);}}}let i=__pops.config.panelHandleContentUtils();new RuleEditView({title:"评论过滤器",data:()=>this.getData(),getView:n=>{let l=document.createDocumentFragment(),o=UISwitch("启用","enable",!0);Reflect.set(o.props,PROPS_STORAGE_API,e(n));let a=i.createSectionContainerItem_switch(o),r=UISwitch("处理回复评论","replyFlag",!1);Reflect.set(r.props,PROPS_STORAGE_API,e(n));let c=i.createSectionContainerItem_switch(r),m=UISwitch("处理作者评论","avatarFlag",!1);Reflect.set(m.props,PROPS_STORAGE_API,e(n));let p=i.createSectionContainerItem_switch(m),g=UISwitch('处理从"搜索页面"或"我的帖子提醒页面"进入的网站',"viewthreadFlag",!1);Reflect.set(g.props,PROPS_STORAGE_API,e(n));let d=i.createSectionContainerItem_switch(g),u=UIInput("匹配的评论内容长度最小值","minLength",5,"小于此长度的评论就算关键字匹配成功了也不会被排除",void 0,"",!0);Reflect.set(u.props,PROPS_STORAGE_API,e(n));let h=i.createSectionContainerItem_input(u),y=UIInput("匹配的评论内容长度最大值","keywordLength",8,"大于此长度的评论就算关键字匹配成功了也不会被排除",void 0,"",!0);Reflect.set(y.props,PROPS_STORAGE_API,e(n));let _=i.createSectionContainerItem_input(y),x=UITextArea("评论关键字","keywords","","多个关键字换行分割");Reflect.set(x.props,PROPS_STORAGE_API,e(n));let S=i.createSectionContainerItem_textarea(x),v=UITextArea("黑名单用户","userBlackList","","多个用户换行分割");Reflect.set(v.props,PROPS_STORAGE_API,e(n));let U=i.createSectionContainerItem_textarea(v),k=UITextArea("白名单用户","userWhiteList","","多个用户换行分割");Reflect.set(k.props,PROPS_STORAGE_API,e(n));let q=i.createSectionContainerItem_textarea(k);return l.append(a,c,p,d,h,_,S,U,q),l},btn:{merge:!0,position:"space-between",ok:{enable:!1},cancel:{enable:!0,text:"关闭"},other:{enable:!0,text:`查看已过滤（${this.$el.isFilterElementHTML.length}）`,type:"primary",callback:(n,l)=>{console.log(this.$el.isFilterElementHTML),__pops.alert({title:{text:"评论过滤器-已过滤",position:"center"},content:{text:`
                                ${Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(o=>o.outerHTML).join(`
`)}

                                ${this.$el.isFilterElementHTML.join(`
`)}
                                `,html:!0},btn:{ok:{type:"default",text:"关闭"}},mask:{enable:!0},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh"});}}},dialogCloseCallBack(n){},onsubmit:(n,l)=>({success:!0,data:l}),style:`
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
            `}).showView();},getTemplateData(){return {enable:!0,avatarFlag:!1,replyFlag:!1,viewthreadFlag:!1,minLength:5,keywordLength:8,keywords:[],userBlackList:[],userWhiteList:[]}},getData(){return _GM_getValue(this.$key.STORAGE_KEY,this.getTemplateData())},setData(t){_GM_setValue(this.$key.STORAGE_KEY,t);}},MTProductListingReminder={$key:{STORAGE_KEY:"mt-productListingReminder-rule"},init(){this.registerMenu(),this.runRule();},registerMenu(){ElementUtils.registerLeftMenu({name:"商品上架提醒",icon:"",iconColor:"#2376b7",callback:()=>{this.showView();}});},async runRule(){async function t(){let s=await httpx.get("/keke_integralmall-keke_integralmall.html",{fetch:!0,allowInterceptConfig:!1});if(!s.status){Qmsg.error("【积分商城】获取数据失败");return}let n=[];return domUtils.parseHTML(s.data.responseText,!0,!0).querySelectorAll(".task-list-wrapper li.col-xs-12").forEach(o=>{var a,r;n.push({name:domUtils.text(o.querySelector(".mall-info a > *:first-child"))||domUtils.text(o.querySelector(".mall-info a")),price:domUtils.text(o.querySelector(".mall-info span.discount-price i")),endTime:domUtils.text(o.querySelector(".mall-info #time_hz span.time")),remainingQuantity:parseInt(((r=(a=o.querySelector(".mall-info .mall-count .count-r"))==null?void 0:a.innerText)==null?void 0:r.replace(/仅剩|件/gi,""))||"0")});}),n}if(Router.isPointsMall())return;let e=this.getData();if(!e.length)return;let i=await t();if(i){for(const s of i)for(const n of e)if(n.enable&&s.name.match(new RegExp(n.productName,"i"))&&!isNaN(s.remainingQuantity)&&s.remainingQuantity>0){log.success("成功匹配对应商品",n,s),__pops.confirm({title:{text:"积分商城提醒",position:"center"},content:{text:`<br />
                            您设置的商品已上架在积分商城中，当前售价 ${s.price}金币，仅剩${s.remainingQuantity}件，是否前往购买？
                            <a style="color: red !important;">(如需关闭提醒，请删除该关键字)</a>
                            <br />`,html:!0},btn:{merge:!0,position:"space-between",other:{enable:!0,type:"danger",text:"删除提醒",callback:()=>{this.deleteData(n)?Qmsg.success("删除成功"):Qmsg.error("删除失败");}},ok:{text:"前往购买",callback:()=>{window.location.href=`${window.location.origin}/keke_integralmall-keke_integralmall.html`;}}},width:"300px",height:"300px"});return}}},getTemplateData(){return {uuid:utils.generateUUID(),enable:!0,name:"",productName:""}},showView(){let t=__pops.config.panelHandleContentUtils();function e(s){return {get(n,l){return s[n]??l},set(n,l){s[n]=l;}}}new RuleView({title:"商品上架提醒",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:s=>s.name,updateData:s=>this.updateData(s),deleteData:s=>this.deleteData(s),getData:s=>this.getData().find(o=>o.uuid===s.uuid)??s,itemControls:{enable:{enable:!0,getEnable(s){return s.enable},callback:(s,n)=>{s.enable=n,this.updateData(s);}},edit:{enable:!0,getView:(s,n)=>{let l=document.createDocumentFragment();n||(s=this.getTemplateData());let o=UISwitch("启用","enable",!0);Reflect.set(o.props,PROPS_STORAGE_API,e(s));let a=t.createSectionContainerItem_switch(o),r=UIInput("规则名称","name","","",void 0,"必填");Reflect.set(r.props,PROPS_STORAGE_API,e(s));let c=t.createSectionContainerItem_input(r),m=UIInput("商品名","productName","","",void 0,"可正则，需手动转义");Reflect.set(m.props,PROPS_STORAGE_API,e(s));let p=t.createSectionContainerItem_input(m);return l.append(a,c,p),l},onsubmit:(s,n,l)=>{let o=s.querySelectorAll(".rule-form-ulist > li"),a=this.getTemplateData();return n&&(a.uuid=l.uuid),o.forEach(r=>{let c=Reflect.get(r,"__formConfig__"),m=Reflect.get(c,"attributes"),p=Reflect.get(r,PROPS_STORAGE_API),g=Reflect.get(m,ATTRIBUTE_KEY),d=Reflect.get(m,ATTRIBUTE_DEFAULT_VALUE),u=p.get(g,d);Reflect.has(a,g)?Reflect.set(a,g,u):log.error(`${g}不在数据中`);}),a.name.trim()===""?(Qmsg.error("规则名称不能为空"),{success:!1,data:a}):n?{success:this.updateData(a),data:a}:{success:this.addData(a),data:a}}},delete:{enable:!0,deleteCallBack:s=>this.deleteData(s)}}}).showView();},getData(){return _GM_getValue(this.$key.STORAGE_KEY,[])},setData(t){_GM_setValue(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(s=>s.uuid==t.uuid)===-1?(e.push(t),_GM_setValue(this.$key.STORAGE_KEY,e),!0):!1},updateData(t){let e=this.getData(),i=e.findIndex(n=>n.uuid==t.uuid),s=!1;return i!==-1&&(s=!0,e[i]=t),this.setData(e),s},deleteData(t){let e=this.getData(),i=e.findIndex(n=>n.uuid==t.uuid),s=!1;return i!==-1&&(s=!0,e.splice(i,1)),this.setData(e),s},clearData(){_GM_deleteValue(this.$key.STORAGE_KEY);}},MTCustomizeUserLabels={$key:{STORAGE_KEY:"mt-customizeUserLabels-rule"},init(){if(this.registerMenu(),Router.isPage()||Router.isGuide()||Router.isPlate()||Router.isPost()||Router.isSearch()||Router.isSpace()){let t=this.getData();if(!t.length)return;let e=new utils.LockFunction(()=>{this.runRule(t);});utils.mutationObserver(document,{config:{subtree:!0,childList:!0},callback:()=>{e.run();}});}},registerMenu(){ElementUtils.registerLeftMenu({name:"自定义用户标签",icon:"",iconColor:"#c70ea6",callback:()=>{this.showView();}});},showView(){let t=__pops.config.panelHandleContentUtils();function e(s){return {get(n,l){return s[n]??l},set(n,l){s[n]=l;}}}new RuleView({title:"自定义用户标签",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:s=>s.name,updateData:s=>this.updateData(s),deleteData:s=>this.deleteData(s),getData:s=>this.getData().find(o=>o.uuid===s.uuid)??s,itemControls:{enable:{enable:!0,getEnable(s){return s.enable},callback:(s,n)=>{s.enable=n,this.updateData(s);}},edit:{enable:!0,getView:(s,n)=>{var U;let l=document.createDocumentFragment();n||(s=this.getTemplateData());let o=UISwitch("启用","enable",!0);Reflect.set(o.props,PROPS_STORAGE_API,e(s));let a=t.createSectionContainerItem_switch(o),r=UIInput("规则名称","name","","",void 0,"必填");Reflect.set(r.props,PROPS_STORAGE_API,e(s));let c=t.createSectionContainerItem_input(r),m=UIInput("用户UID","userUID","","",void 0,"必填，可正则，注意转义");Reflect.set(m.props,PROPS_STORAGE_API,e(s));let p=t.createSectionContainerItem_input(m),g=UIInput("标签名","labelName","","",void 0,"必填");Reflect.set(g.props,PROPS_STORAGE_API,e(s));let d=t.createSectionContainerItem_input(g),u=UIInput("标签颜色","labelColor","","");Reflect.set(u.props,PROPS_STORAGE_API,e(s));let h=t.createSectionContainerItem_input(u),y=h.querySelector("input");(U=h.querySelector(".pops-panel-input__suffix"))==null||U.remove(),y.setAttribute("type","color"),domUtils.css(y,{margin:"unset",padding:"unset",width:"80px"});let _=UIInput("标签CSS","labelStyle","","");Reflect.set(_.props,PROPS_STORAGE_API,e(s));let x=t.createSectionContainerItem_input(_),S=UITextArea("标签点击事件","labelClickEvent","","");Reflect.set(S.props,PROPS_STORAGE_API,e(s));let v=t.createSectionContainerItem_textarea(S);return l.append(a,c,p,d,h,x,v),l},onsubmit:(s,n,l)=>{let o=s.querySelectorAll(".rule-form-ulist > li"),a=this.getTemplateData();return n&&(a.uuid=l.uuid),o.forEach(r=>{let c=Reflect.get(r,"__formConfig__"),m=Reflect.get(c,"attributes"),p=Reflect.get(r,PROPS_STORAGE_API),g=Reflect.get(m,ATTRIBUTE_KEY),d=Reflect.get(m,ATTRIBUTE_DEFAULT_VALUE),u=p.get(g,d);Reflect.has(a,g)?Reflect.set(a,g,u):log.error(`${g}不在数据中`);}),a.name.trim()===""?(Qmsg.error("规则名称不能为空"),{success:!1,data:a}):a.userUID.trim()===""?(Qmsg.error("用户UID不能为空"),{success:!1,data:a}):a.labelName.trim()===""?(Qmsg.error("标签名不能为空"),{success:!1,data:a}):n?{success:this.updateData(a),data:a}:{success:this.addData(a),data:a}},style:`
                    .pops-panel-textarea textarea{
                        height: 150px;
                    }
                    `},delete:{enable:!0,deleteCallBack:s=>this.deleteData(s)}}}).showView();},runRule(ruleDataList){let forumList=utils.getNodeListValue(ElementUtils.comiisForumList(),ElementUtils.comiisPostli(),ElementUtils.comiisMmlist());forumList.length&&forumList.forEach($post=>{if($post.hasAttribute("data-custom-label"))return;$post.setAttribute("data-custom-label","true");let mt_uid_array=Array.from($post.querySelectorAll("a")).map(t=>{let i=t.href.match(MTRegExp.uid);if(i)return i[i.length-1]}).filter(t=>t!=null);if(mt_uid_array.length){let mt_uid=mt_uid_array[0],ownLabelList=ruleDataList.filter(t=>t.enable&&mt_uid.match(new RegExp(t.userUID)));if(!ownLabelList.length)return;let $label=document.createElement("a"),$topLev=$post.querySelector(".top_lev");ownLabelList.forEach(labelOption=>{$label.className=$topLev.className,$label.classList.add("gm-custom-label"),$label.style.cssText=`
                    background: ${labelOption.labelColor} !important;${labelOption.labelStyle||""}`,$label.innerHTML=labelOption.labelName,domUtils.on($label,"click",async event=>{utils.preventEvent(event),utils.isNotNull(labelOption.labelClickEvent)&&eval(labelOption.labelClickEvent);}),$topLev.parentElement.append($label);});}});},getTemplateData(){return {uuid:utils.generateUUID(),enable:!0,name:"",userUID:"",labelName:"",labelColor:"",labelStyle:"",labelClickEvent:""}},getData(){return _GM_getValue(this.$key.STORAGE_KEY,[])},setData(t){_GM_setValue(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(s=>s.uuid==t.uuid)===-1?(e.push(t),_GM_setValue(this.$key.STORAGE_KEY,e),!0):!1},updateData(t){let e=this.getData(),i=e.findIndex(n=>n.uuid==t.uuid),s=!1;return i!==-1&&(s=!0,e[i]=t),this.setData(e),s},deleteData(t){let e=this.getData(),i=e.findIndex(n=>n.uuid==t.uuid),s=!1;return i!==-1&&(s=!0,e.splice(i,1)),this.setData(e),s},clearData(){_GM_deleteValue(this.$key.STORAGE_KEY);}},MTForumPostPublish={init(){domUtils.ready(()=>{PopsPanel.execMenuOnce("mt-forum-post-publish-editorOptimization",()=>{MTEditorOptimization.init();});});}},MT={$flag:{showUserUID_initCSS:!1},init(){PopsPanel.execMenuOnce("mt-black-home",()=>{MTBlackHome.init();}),PopsPanel.execMenuOnce("mt-online-user",()=>{MTOnlineUser.init();}),PopsPanel.execMenuOnce("mt-post-paidThemePost",()=>{MTPaidThemePost.init();}),PopsPanel.execMenuOnce("mt-ownBlock",()=>{MTOwnBlock.init();}),PopsPanel.execMenuOnce("mt-link-text-to-hyperlink",()=>{MTIdentifyLinks();}),PopsPanel.execMenuOnce("mt-post-comment-filter",()=>{MTCommentFilter.init();}),PopsPanel.execMenuOnce("mt-productListingReminder",()=>{MTProductListingReminder.init();}),PopsPanel.execMenuOnce("mt-customizeUserLabels",()=>{MTCustomizeUserLabels.init();}),(Router.isPage()||Router.isGuide()||Router.isPlate()||Router.isPost()||Router.isSearch()||Router.isSpace())&&PopsPanel.execMenuOnce("mt-show-user-uid",()=>{this.showUserUID();}),(Router.isSearch()||Router.isGuide()||Router.isSpace()||Router.isPlate())&&PopsPanel.execMenuOnce("mt-small-window",()=>{MTSmallWindow.init();}),Router.isPost()?(log.info("Router: 帖子"),MTForumPost.init()):Router.isSearch()?(log.info("Router: 搜索"),MTSearch.init()):Router.isKMiSign()?(log.info("Router: 签到"),MTSign.init()):Router.isSpace()||Router.isSpaceWithAt()?(log.info("Router: 空间"),MTSpace.init()):Router.isGuide()?(log.info("Router: 导读"),MTGuide.init()):Router.isPostPublish()?(log.info("Router: 发帖页面"),MTForumPostPublish.init()):log.error("Router: 未适配的链接 ==> "+window.location.href),domUtils.ready(()=>{PopsPanel.execMenu("mt-auto-sign",()=>{MTAutoSignIn.init();});});},showUserUID(){log.info("显示用户UID"),this.$flag.showUserUID_initCSS||(this.$flag.showUserUID_initCSS=!0,addStyle(`
			.postli_top_tximg + h2{
 				height: auto;
			}
			.comiis_postli_top.bg_f.b_t h2{
            	height: auto;
          	}
			`));let t=new utils.LockFunction(()=>{let e=utils.getNodeListValue(ElementUtils.comiisForumList(),ElementUtils.comiisPostli(),ElementUtils.comiisMmlist());e.length&&e.forEach(i=>{if(i.querySelector(".gm-custom-label-uid"))return;let n=Array.from(i.querySelectorAll("a")).map(l=>{let a=l.href.match(MTRegExp.uid);if(a)return a[a.length-1]}).filter(l=>l!=null);if(n.length){let l=n[0],o=document.createElement("a"),a=i.querySelector(".top_lev");o.className=a.className,o.classList.add("gm-custom-label-uid"),o.style.cssText="background: #FF7600 !important;",o.innerHTML="UID:"+l,domUtils.on(o,"click",async r=>{utils.preventEvent(r),await utils.setClip(l)?Qmsg.success(`${l}已复制`):Qmsg.error(`${l}复制失败`);}),a.parentElement.append(o);}});});utils.mutationObserver(document,{config:{subtree:!0,childList:!0},callback(){t.run();}});}};PopsPanel.init();MT.init();});z();

})(Qmsg, DOMUtils, Utils, pops, hljs, Viewer);