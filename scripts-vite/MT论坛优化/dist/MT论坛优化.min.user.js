// ==UserScript==
// @name         MT论坛优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.5.2
// @author       WhiteSevs
// @description  MT论坛效果增强，如自动签到、自动展开帖子、用户状态查看、美化导航、动态头像上传、最新发表、评论过滤器等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAADptJREFUeF7tnQtwVNUZx/9nN5CQgCG8QoAdE3lFeWQDGAK+ikKCQGtHBHlJQeVRrTICJQUrgggkUhiRdIRgyBahpThWEHAob6mCVCApCIUQGiDKK0ACEUMMe2/n3E1Ckt279557d+8mN+fMMJlhv/Od7/vO737ncc+eJdBRLuRfSAbwa0JIogjRrkNVvapKQA6JEL8iVrLSZrPl1SvjaxlLtBp/Pv/8LEJImtb6ZqlHCHnddr9tRX31RxMA+fn5v7AS69766rSv7XaKzgExMTH7fK3XCH3MAJw6dapZaHDoYRB0McLAetGGiFxbtK0HIeTnemFvNSOZAfDV03/rjgWzt7RFeIgTc5IK0TRYMDR2RaVWLNrRGoJAMOPJa2gXXq6rfafojImJiTmnS0kAKjMDcOHchRkA/qTX1vzrjfHHbZGSmqcfKsG4PsV6VTLV/+DLljh0PlSq89rj15EY/RNT/drCFlj6d4jucFCXkgBUZgbgfP75eYSQt/XaKorA/O1tcKYwGFaLiN8+cgP9YvR1glqbjn7fBEv3tJLEI0KdWDjsMsJD9GWg+joPCBgANPh3BYJpn0ahuNSKmJY/45VHbyim4uu3rbh2OwiVf0MbCWgZ5kSrsLvS39DG3jvy8q0g/GFLW5Q7Ce4LEfD6E9fwYGSZWnZk5TgAGkN4pKAJlu11PY2Pd7yNKY/cqKHp++JGOH4xBMcq/ik1Q8fy3rZSdI8qQ2xkGYIsYo0qqbtaS/poGdunGEMeKlFSqepzDoCqMHkWchyKwM7TTaUPX3i4GIMfLMGXeWHYk9sUedcaa9Yc3sSJPrZSJMX+iA7Ny7ExOxybj98n6esf8xNefey6Zt21K3IAdIZy5qYoXLoVhLDGAlqFOXG+qJFOjfeqBweJUprP+cH15EfddxcLhl5Bk0b6xv3qBnIAdHYXTcs0PRtRUgYWome7Oz5tigOgI5wFxY2Qvr8l6HhvRHms421MrTXX0NsuB0BjBOlanK7JjS50srjkmcs+a5YDoCGUW080w9+ONNdQ0zdV6HwjY9QPPlFGAYg+E1MMCy6RgbjiE6UGKAnYPgCd5WccaGGAi96bSLi/FNOeuKbbjjYFY38MLv3atZQRcQwWfI5ywUGG4Kxu5X5UEBAAvrsUgrRdrSHUXKL70U3vqod1K8Ho3vq2otsUjEJw6Tc1GxJRAoIsEMFBBiE7YA56aTggANB3APRdQF0qLyUW4ckuP2o2ySMANbU5AMFBkvCl5kb8UNFwAOjmTuY3EbKuPB4LJHYCmoYAl4uBHceBPI0jarf2wFPdAVtL4FwhsOUocEFm74duRb87VGNDAFQAUOGz+BlESxZJdm7xQ38yqzQcAG9P//AEYBo9ZFatOAXgpdXA/66y+dbDBvx5Qs065U5gdDpw9ZZnXXqygHoAKtsWd8NiySIDnevZPPOttKEAKD39ayYDnVxviGuUj78CVjOeP0r5JTDUwynFVXuA9V97DqKeLMAOQKUN5FuIogPNhCzSH6W+7V5lbYYC8PYXkV739jdPByLC3I3+IgdIZUyYaaOAfp3ddX36LbB8u3xgXnn0Oh55gP21tHYAKmwhOA0BDliFLCOXkYYBQHf5Uj5v6xXJzElAZw8ia/8FfMR44k4uA2TsAdbJZABqHO18CgFr0Q3AvQYvAXBIS8ihyGW1g1XeMAB2nGqKv/xbfvJHDX+mNzBjSE0X7pQDL38EXGBcqneMdM0BQqstNgpLgEkfATe8TPbp0bRVz7NvDvkQgMoA3JZAcK0cDrN2rFp5wwB4959t8N8rwYp20RVA344Vq4CbwM7j8jN3JWVRzYHBcS4pQQA2HQFuqsjuWl4W+QGA6u59DNHiIMl39yj5zPq5IQDQ0zcT1ndgtS1g8r/qfgvP97rJ1L6fAXDZQsTNECgIzk1MxnkRNgQAegxrxqYoX9nsdz1aDosYAkCV5+I+EEsWGeRcqzcYhgBAt34X7zTmXb/egND6XduUYe5gto0HYwGo8FLEUViQhSDBQQZA0zamIQDUlRc/auGgh0s/GH5RrbgkFxAA7lmYBxEOECGLJIHJcEMAUDsBZIq4n4XXjy9gaiHAAFTaStOWA6KQRZJxSo0DHgHo2bNnDCHEwzYKMHny5Bc6tO8wTo3ySpl//CccuYX+efkjlpcAZUWwtn4YljAbYPHNqaJ6CkBlyOl5NwqCgyTjkLe+qgGA3W5/GcBqls6tU7LWEDR+YCSCe7yh26x6DsA9/0X8FZCWkDs9BaUKALvdvhXAUN2RqwMKLOGdEfbkBoBYNFtjGgDurRw+hyj+jiSjxtgmAWC326cBeF9ztOpgRWubRIT2/0DzkGA+ACo6ySJ0IwNxsrLLKgGoI2dzfEtSUNQTaJKQClhd3wdgKaYFADhBkoTuVQDExcUlEEK8ThRYAlfXZIPaPoqQhFSQIA+vGb0Ya2IA6JnF+SRZmEfdJ3FxcS8SQjLrWsf50p6gyH4uCBq5vhamppgaAIK1ZJDwmwYDAHXU2joBTRLSQILVHUM3NQAQ95EkcUCDAkCCoFVvFwQhyl9EMTUADW0IqJ7yrS3tLgiatPE6EpgaAJBnSZLzswaXASp73NqiB0IS0mAJlX9DaWIAvkMjIZ4MwN0GC4A0HEQ85IIgzPM5BdMCIOL3JFmouuOpQawC5HK9pdkDCI5LgSWsvZvI+8/So3nqS8tLr6PxnTr55R/JifYtpBvsvq94+qsO2DVoANR3rzkku9t+OvldQeirOTk5VUdsOQDm6FsmLwgh6dnZ2a816DkAU8RMKEwIGZ2dnb2BZwATdq5Klw7l5OQkUgDmEkLmq6zExUwUAUEQYikAmYSQF03kF3dFZQQIIWMoAGsIIRNV1uFiJoqAKIovcABM1KGsrnAAWCNmMnkOgMk6lNUdDgBrxEwmzwEwWYeyusMBYI2YyeQ5ACbrUFZ3OACsETOZvF8AWL3a+zfLrl69ijfffFNzKMeMGYMBA6TzjLJl0qRJmvV7q6jkm18araV01apVOHzYNzfG+AWA7GzlQxFvvfUWtm6l30RjK507d8bGjRsVK8XHxyvKaBFQ45sWvSx1KNz1HoCSkhI899xzoNmApWRmZqJXr16KVTgAiiGSBAKWAWjjO3bsQEpKijpLAUydOhVTpkxRJc8BUBWmwAJATZw3bx42b96saG3fvn2xcuVKRblKAQ6AulAFNANQE0tLS0EndefOyf/iarNmzZCVlYWOHTuq8woAB0BdqAIOADVz9+7dmDlzpqzFdJgYNWqUOo8qpIwGQGlS1qdPHzf7tdShSkwxCawdjbS0NGzYsMEtSEOGDMHChQuZOp8KGw0AHZ7o8sxToUtHOQDklqt0rkPnPJ5KvQWgrKwMwcGebwotLy/HhAkTcPJk1b0FiI6ORkZGBlq39ny9nDd9HAB1z4yhQwB9SuSopubu378f06bRi0pcJTU1FcnJtX48oJpf3vT5C4Bt27ahXbt2btGdP38+Nm3yfHmnlgwwduxY2WFx9OjROHVK1QVgihQYDkCLFi0wcuRIWcNWrFiBNWvWYPz48XjjDfmLnuhm0I0bN2SB8hcAnuYjd+7cwcSJE2U7RQsAiYmJ+PDDD93idPHiRQwfPhy0TV8UwwGg4+Qnn3yCTp06ebRfEARprZ+eni47XOTl5WHEiBGSnFxG8RcAbdu2xZIlS9C9e9UNK9LyVG78p05qAYDWq+0fXSktX74c+/Yx3pvvhZSAANCtWzesW7dO1iw6O/Y0aaqsMG7cOJw4cSIgAFAb6DyGDk0RERE4c+YMDhw44PVh1AoAVdq/f3/Q7e+ioiJpiCwu1vfLZrUNDQgA1AjaiTNmzGDOYkuXLq2CJxAZgNlgHRlAS1usdQIGADV02bJlim/1qju0d+9eTJ8+veq/OACs3e0uH1AAbDYb1q5di+bNle/soamPTgwLCu7dccgBqOcAUPOHDRuGBQsWKHri6fUxB0AxbIoCAc0AldbNmTNHmtXLFbpqWLRokdvHHADF/lUUqBMAhIeHSzt+Xbp0cTM4NzeX3k6Omzfdf76FA6DYv4oCdQIAaqWWpRIHQLF/FQU4AIoh0i+gBW79rarTUGcAoO8A6Mug2sXhcEi7X54KzwDqOtmbVJ0BgBrp6cClty1dDoDJAKDu0N3B2NhY6cUK3fXzVjgAJgSAxSUOAEu0PMvWqSGA1R0OAGvE3OU5APpjqKiBrwIqQqT03lwxkrUEeAZgjRjPAPojpkEDzwA8AzCfCtbAmaYqfA6gKWxslXgG4BmAZwDKAJ8E1swc9Oyjv+4xUJuj+BCgNlI65PgQwIcAPgTwIcDzl0P5EKAjtfKNIB3Bq6jK5wD6Y6iogc8B+ByAzwH4HIDPAfg+QK3Bgu8DKI6e3gX4JFBnAI2+Jo7vBPKdQK/fo2flmWcA1ojx8wD6I6ZBA18G8mUgXwbyZSBfBvJlIF8Ger9MiXV45ZNA1ogZNAmkN3527drVrbXZs2dj+/bt+q2u0DB48GAsXrzYTd/p06eZr5b1mVEeFMlddUvjRG9IDWTxy8sgT09mYWEhkpKSfO4rvXK+9k2ivt5v0Gs0vfHM0y+N+PLKV602+gUAasygQYOka9wiIyNx8OBBzJo1S6uNivXee+899OvXD1euXJH2GXbu3KlYx2gBetP53Llz0bNnTxw7dgzvvPMOzp49a7QZbu35DYCAe8YNUBUBDoCqMJlXiANg3r5V5RkHQFWYzCvEATBv36ryjAOgKkzmFeIAmLdvVXnGAVAVJvMKcQDM27eqPOMAqAqTeYU4AObtW1WecQBUhcm8QhIAdrs9HcCr5nWTeyYXAULICBIfH/+UKIq7eJgaXgQIIdGEum2324sAKP92S8OLkZk93pWTkzNIAiAuLm4+IWSumb3lvtWMgMViefro0aPbJQBoiY+P3y6KovxvtfIImiYChJDZ2dnZqdShKgAqMsEAQgg9aNcbQJBpPOaO0AicB/B3q9WaceTIkarjSP8HC+OZoHXD4j8AAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://bbs.binmt.cc/*
// @exclude      /^http(s|)://bbs.binmt.cc/uc_server.*$/
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.12.1/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@2.0.7/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.8/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.1/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.js
// @require      https://fastly.jsdelivr.net/npm/@highlightjs/cdn-assets@11.11.1/highlight.min.js
// @resource     HljsCSS    https://fastly.jsdelivr.net/npm/highlight.js@11.11.1/styles/github-dark.min.css
// @resource     ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.css
// @connect      *
// @grant        GM.cookie
// @grant        GM_addStyle
// @grant        GM_addValueChangeListener
// @grant        GM_deleteValue
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_listValues
// @grant        GM_registerMenuCommand
// @grant        GM_removeValueChangeListener
// @grant        GM_setValue
// @grant        GM_setValues
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (x, q, xe, re, pe, He) {
  'use strict';

  const d=new Set;const Pe = async t=>{d.has(t)||(d.add(t),(a=>{function r(n){if(typeof GM_addStyle=="function")return GM_addStyle(n);const e=document.createElement("style");if(e.setAttribute("type","text/css"),e.setAttribute("data-type","gm-css"),globalThis.trustedTypes){const c=globalThis.trustedTypes.createPolicy("safe-innerHTML",{createHTML:i=>i});e.innerHTML=c.createHTML(n);}else e.innerHTML=n;return (document.head||document.documentElement).appendChild(e),e}r(a);})(t));};

  var Ie=typeof GM<"u"?GM:void 0,ze=typeof GM_addValueChangeListener<"u"?GM_addValueChangeListener:void 0,ce=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,Re=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,ne=typeof GM_getValue<"u"?GM_getValue:void 0,se=typeof GM_info<"u"?GM_info:void 0,he=typeof GM_listValues<"u"?GM_listValues:void 0,Ge=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,Ke=typeof GM_removeValueChangeListener<"u"?GM_removeValueChangeListener:void 0,Z=typeof GM_setValue<"u"?GM_setValue:void 0,Me=typeof GM_setValues<"u"?GM_setValues:void 0,Qe=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,We=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,D=typeof unsafeWindow<"u"?unsafeWindow:void 0,je=window;const Ue={Viewer:{keyName:"ViewerCSS",url:"https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"},Hljs:{keyName:"HljsCSS",url:"https://fastly.jsdelivr.net/npm/highlight.js@latest/styles/github-dark.min.css"}},oe={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},G={waitRemove(...e){e.forEach(t=>{typeof t=="string"&&q.waitNodeList(t).then(n=>{n.forEach(a=>a.remove());});});},createBlockCSSNode(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),q.createElement("style",{type:"text/css",innerHTML:`${t.join(`,
`)}{display: none !important;}`})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),W(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){const t=typeof Re=="function"?Re(e.keyName):null;return typeof t=="string"&&t?W(t):G.loadStyleLink(e.url)},async loadStyleLink(e){let t=document.createElement("link");return t.rel="stylesheet",t.type="text/css",t.href=e,new Promise(n=>{q.onReady(()=>{document.head.appendChild(t),n(t);});})},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(n=>{t.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.startsWith("data:")||e.match(/^http(s|):\/\//i)?e:e.startsWith("//")?(e.startsWith("///")||(e=window.location.protocol+e),e):(e.startsWith("/")||(e+="/"),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;try{let t=new URL(e);return t.protocol="https:",t.toString()}catch{return e}},lockScroll(...e){let t=document.createElement("style");t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...e||[]);return n.forEach(a=>{a.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(t),{recovery(){n.forEach(a=>{a.classList.remove("pops-overflow-hidden-important");}),t.remove();}}},async getClipboardText(){function e(a){navigator.clipboard.readText().then(i=>{a(i);}).catch(i=>{b.error("读取剪贴板内容失败👉",i),a("");});}function t(a){navigator.permissions.query({name:"clipboard-read"}).then(()=>{e(a);}).catch(i=>{b.error("申请剪贴板权限失败，尝试直接读取👉",i.message??i.name??i.stack),e(a);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(a=>{if(!n()){a("");return}document.hasFocus()?t(a):window.addEventListener("focus",()=>{t(a);},{once:true});})},escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(e,t,n=5e3){let a,i=n-t,o=t,s=async r=>{const l=await e(r);if(typeof l=="boolean"&&l||r){g.workerClearTimeout(a);return}if(o+=t,o>i){s(true);return}a=g.workerSetTimeout(()=>{s(false);},t);};s(false);},findParentNode(e,t,n){if(n){let a=q.closest(e,n);if(a)return a.querySelector(t)}else return q.matches(e,t)?e:q.closest(e,t)},toStr(e,t=2){const n="__undefined__placeholder__replaced__str__"+performance.now();return JSON.stringify(e,(i,o)=>o===void 0?n:o,t).replace(new RegExp(`"${n}"`,"g"),"undefined")},isVerticalScreen(){return !globalThis.screen.orientation.type.includes("landscape")},isMobileDevice(e=768){return this.isVerticalScreen()?globalThis.innerWidth<e:globalThis.innerHeight<e},isTopWindow(){const e=typeof D=="object"&&D!=null?D:window;return e.top===e.self},formatVideoDuration(e){if(typeof e!="number"&&(e=parseInt(e)),isNaN(e))return e.toString();const t=function(n){return n<10?`0${n}`:n};if(e<60)return `0:${t(e)}`;if(e>=60&&e<3600){const n=Math.floor(e/60),a=e%60;return `${n}:${t(a)}`}else {const n=Math.floor(e/3600),a=Math.floor(e/60)%60,i=e%60;return `${n}:${t(a)}:${t(i)}`}},formatTimeStamp(e,t){if(typeof e=="number"&&e<1e12){const r=String(Date.now()).length-String(e).length;e=e*Math.pow(10,r);}let n=e,a=new Date(typeof e=="string"?e.replace(/-/g,"/"):e),o=new Date(t??Date.now()).getTime()-a.getTime(),s=Math.floor(o/(24*3600*1e3));if(s>0)s>7?n=g.formatTime(a.getTime()):n=s+"天前";else {let r=o%864e5,l=Math.floor(r/(3600*1e3));if(l>0)n=l+"小时前";else {let c=r%36e5,d=Math.floor(c/(60*1e3));if(d>0)n=d+"分钟前";else {let p=c%6e4;n=Math.round(p/1e3)+"秒前";}}}return n}},g=re.noConflict(),u=q.noConflict(),S=xe,b=new g.Log(se,D.console||je.console),Ae=se?.script?.name||void 0,Ye=xe.fn.Utils.AnyTouch();b.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});const _e=()=>{const t=xe.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex??0,n=g.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex??0;return Math.max(100,t,n)};x.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(e){const t=e.setting.type;if(t==="loading")return  false;const n=e.setting.content;return t==="warning"?b.warn(n):t==="error"?b.error(n):b.info(n),false},get position(){return A.getValue(oe.qmsg_config_position.key,oe.qmsg_config_position.defaultValue)},get maxNums(){return A.getValue(oe.qmsg_config_maxnums.key,oe.qmsg_config_maxnums.defaultValue)},get showReverse(){return A.getValue(oe.qmsg_config_showreverse.key,oe.qmsg_config_showreverse.defaultValue)},get zIndex(){return _e()}});S.GlobalConfig.setGlobalConfig({zIndex:()=>_e(),mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const ue=new g.GM_Menu({GM_getValue:ne,GM_setValue:Z,GM_registerMenuCommand:Ge,GM_unregisterMenuCommand:Qe}),P=new g.Httpx({xmlHttpRequest:We,logDetails:false});P.interceptors.request.use(e=>e);P.interceptors.response.use(e=>e,e=>(b.error("[Httpx-HttpxRequest.response] 响应错误",{data:e}),e.type==="onabort"?x.warning("请求取消",{consoleLogContent:true}):e.type==="onerror"?x.error("请求异常",{consoleLogContent:true}):e.type==="ontimeout"?x.error("请求超时",{consoleLogContent:true}):x.error("其它错误",{consoleLogContent:true}),e));D.Object.defineProperty,D.Object.keys,D.Object.values,D.Function.prototype.apply,D.Function.prototype.call,D.Element.prototype.appendChild,D.setTimeout.bind(D),D.clearTimeout.bind(D),D.setInterval.bind(D),D.clearInterval.bind(D);const W=u.addStyle.bind(u);G.addBlockCSS.bind(G);const z=q.selector.bind(q),N=q.selectorAll.bind(q),fe=new g.CookieManagerService({baseCookieHandler:"GM_cookie"});fe.isSupportGM_cookie||(fe.isSupportCookieStore?fe.setOptions({baseCookieHandler:"cookieStore"}):fe.setOptions({baseCookieHandler:"document.cookie"}));new g.DocumentCookieHandler;const ge="GM_Panel",Ce="data-init",J="data-key",X="data-default-value",Ze="data-init-more-value",$e="data-plugin-search-config",I="data-storage-api",K={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},H={setting:{get width(){return K.width<550?"88vw":K.width<700?"550px":"700px"},get height(){return K.height<450?"70vh":K.height<550?"450px":"550px"}},settingMiddle:{get width(){return K.width<350?"88vw":"350px"}},settingBig:{get width(){return K.width<800?"92vw":"800px"},get height(){return K.height<600?"80vh":"600px"}},info:{get width(){return K.width<350?"88vw":"350px"},get height(){return K.height<250?"88vh":"250px"}}},we={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new g.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]},getDefaultBottomContentConfig(e){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let t=false,n;const a=(r,l)=>{if(e&&typeof e.translateCallback=="function")return e.translateCallback(r,l);if(typeof l=="object"&&l)for(const c in l)r=r.replaceAll(`{{${c}}}`,l[c]);return r},i=(r,l)=>{typeof l!="string"&&(l=G.toStr(l));const c=new Blob([l]),d=globalThis.URL.createObjectURL(c);u.createElement("a",{href:d,download:r}).click(),g.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(d);},500);},o=()=>{const r=w=>{const h=S.alert({title:{text:a("请选择导入方式"),position:"center"},content:{text:`
            <div class="btn-control" data-mode="local">${a("本地导入")}</div>
            <div class="btn-control" data-mode="network">${a("网络导入")}</div>
            <div class="btn-control" data-mode="clipboard">${a("剪贴板导入")}</div>`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(k){k.close();}}},drag:true,mask:{enable:true},width:H.info.width,height:H.info.height,style:`
          .btn-control{
            display: inline-block;
            margin: 10px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            cursor: pointer;
          }
          .btn-control:hover{
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
          }`}),f=h.$shadowRoot.querySelector(".btn-control[data-mode='local']"),y=h.$shadowRoot.querySelector(".btn-control[data-mode='network']"),v=h.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),C=async k=>{confirm(a("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）"))&&(typeof he=="function"?typeof ce=="function"?(he().forEach(O=>{ce(O);}),x.success(a("已清空脚本存储的配置"))):x.error(a("不支持GM_deleteValue函数，无法执行删除脚本配置")):x.error(a("不支持GM_listValues函数，无法清空脚本存储的配置"))),typeof Me=="function"?Me(k):Object.keys(k).forEach(O=>{const B=k[O];Z(O,B);}),x.success(a("配置导入完毕"));},_=k=>new Promise(async E=>{const R=g.toJSON(k);Object.keys(R).length===0?x.warning(a("解析为空配置，不导入")):await C(R),E(true);});u.on(f,"click",k=>{u.preventEvent(k),h.close();const E=u.createElement("input",{type:"file",accept:".json"});u.on(E,["propertychange","input"],()=>{if(!E.files?.length)return;const R=E.files[0],O=new FileReader;O.onload=()=>{_(O.result);},O.readAsText(R,"UTF-8");}),E.click();}),u.on(y,"click",k=>{u.preventEvent(k),h.close();const E=S.prompt({title:{text:a("网络导入"),position:"center"},content:{text:"",placeholder:a("请填写URL"),focus:true},btn:{close:{enable:true,callback(B){B.close();}},ok:{text:a("导入"),callback:async B=>{const U=B.text;if(g.isNull(U)){x.error(a("请填入完整的url"));return}const M=x.loading(a("正在获取配置...")),T=await P.get(U,{allowInterceptConfig:false});if(M.close(),!T.status){b.error(T),x.error(a("获取配置失败"),{consoleLogContent:true});return}await _(T.data.responseText)&&B.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:H.info.width,height:"auto"}),R=E.$shadowRoot.querySelector("input"),O=E.$shadowRoot.querySelector(".pops-prompt-btn-ok");u.on(R,["input","propertychange"],()=>{u.val(R)===""?u.attr(O,"disabled","true"):u.removeAttr(O,"disabled");}),u.onKeyboard(R,"keydown",(B,U,M)=>{B==="Enter"&&M.length===0&&u.val(R)!==""&&u.emit(O,"click");}),u.emit(R,"input");}),u.on(v,"click",async k=>{u.preventEvent(k),h.close();let E=await G.getClipboardText();if(E.trim()===""){x.warning(a("获取到的剪贴板内容为空"));return}await _(E);});},l=(w=`${Ae}_panel-setting-${g.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,h)=>{const f=S.alert({title:{text:a("请选择导出方式"),position:"center"},content:{text:`
            <div class="btn-control" data-mode="export-to-file">${a("导出至文件")}</div>
            <div class="btn-control" data-mode="export-to-clipboard">${a("导出至剪贴板")}</div>
            `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(C){C.close();}}},drag:true,mask:{enable:true},width:H.info.width,height:H.info.height,style:`
          .btn-control{
            display: inline-block;
            margin: 10px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            cursor: pointer;
          }
          .btn-control:hover{
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
          }`}),y=f.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),v=f.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");u.on(y,"click",C=>{u.preventEvent(C);try{i(w,h),f.close();}catch(_){x.error(_.toString(),{consoleLogContent:true});}}),u.on(v,"click",async()=>{await g.copy(h)?(x.success(a("复制成功")),f.close()):x.error(a("复制失败"));});},d=S.confirm({title:{text:a("配置"),position:"center"},content:{text:'<textarea name="config-value" id="config" readonly></textarea>',html:true},btn:{ok:{enable:true,type:"primary",text:a("导入"),callback(){r();}},cancel:{enable:true,text:a("导出"),callback(){l(void 0,m);}}},width:K.width<450?"90vw":"450px",height:"auto",style:`
          .pops-content textarea {
            --textarea-bd-color: #dcdfe6;
            display: inline-block;
            resize: vertical;
            padding: 5px 15px;
            margin: 0;
            line-height: normal;
            box-sizing: border-box;
            color: #606266;
            border: 0;
            border-radius: 0;
            outline: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background: none;
            width: 100%;
            height: 100%;
            appearance: none;
            resize: none;
          }
          .pops-content textarea{
            height: 500px;
          }
          .pops-content textarea:focus {
            --textarea-bd-color: #3677f0;
          }
          .pops-content textarea:hover {
            --textarea-bd-color: #c0c4cc;
          }
        `}).$shadowRoot.querySelector("textarea"),p={};if(typeof he=="function")he().forEach(h=>{const f=ne(h);Reflect.set(p,h,f);});else {x.warning(a("不支持函数GM_listValues，仅导出菜单配置"));const w=ne(ge);Reflect.set(p,ge,w);}const m=G.toStr(p);d.value=m;},s=()=>{let r=se?.script?.supportURL||se?.script?.namespace;typeof r=="string"&&g.isNotNull(r)&&window.open(r,"_blank");};return [{id:"script-version",title:a("版本：{{version}}",{version:se?.script?.version||a("未知")}),isBottom:true,views:[],clickFirstCallback(){return  false},afterRender(r){new Ye(r.$asideLiElement).on("tap",function(){clearTimeout(n),n=void 0,t?(t=false,o()):(n=setTimeout(()=>{t=false,s();},200),t=true);});}}]},setDefaultBottomContentConfig(e){this.$data.__defaultBottomContentConfig=e;}},Je={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{A.showPanel(we.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){G.isTopWindow()&&ue.add(this.$data.menuOption);},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e);},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(t=>{let n=this.$data.menuOption.findIndex(a=>a.key===t.key);n!==-1&&(this.$data.menuOption[n]=t);});},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1);}};class Te{data={storeNodeList:[],destoryFnList:[]};option={};constructor(t){this.option=t;}handlerResult(t,n){const a=[],i=[];let o=[];if(Array.isArray(n))o=o.concat(n);else {const r=l=>{if(typeof l=="object"&&l!=null)if(l instanceof Element)o.push(l);else if(Array.isArray(l))r(l);else {const{$css:c,destory:d}=l;c!=null&&(Array.isArray(c)?o=o.concat(c):c instanceof Element&&o.push(c)),typeof d=="function"&&o.push(d);}else o.push(l);};r(n);}const s=r=>{if(r!=null){if(r instanceof Element){a.push(r);return}if(typeof r=="function"){i.push(r);return}}};for(const r of o){const l=s(r);if(typeof l=="boolean"&&!l)break;if(Array.isArray(r))for(const c of r){const d=s(c);if(typeof d=="boolean"&&!d)break}}this.clearStoreNodeList(),this.execDestoryFnAndClear(),t&&(this.data.storeNodeList=this.data.storeNodeList.concat(a),this.data.destoryFnList=this.data.destoryFnList.concat(i));}getEnableStatus(t){return !!this.option.getValue(t)}clearStoreNodeList=()=>{for(let t=this.data.storeNodeList.length-1;t>=0;t--)this.data.storeNodeList[t]?.remove(),this.data.storeNodeList.splice(t,1);};execDestoryFnAndClear=()=>{for(let t=this.data.destoryFnList.length-1;t>=0;t--){const n=this.data.destoryFnList[t];n(),this.data.destoryFnList.splice(t,1);}};checkMenuExec(){let t=false;return typeof this.option.checkExec=="function"?t=this.option.checkExec(this.option.keyList):t=this.option.keyList.every(n=>this.getEnableStatus(n)),t}}class Xe{storageKey;listenerData;cacheData;callbacks=[];constructor(t){if(typeof t=="string"){const n=t.trim();if(n=="")throw new Error("key can not be empty string");this.storageKey=n;}else throw new TypeError("key must be a string");this.listenerData=new re.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.setLocalValue=this.setLocalValue.bind(this),this.destory=this.destory.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this);}[Symbol.dispose](){this.destory();}async[Symbol.asyncDispose](){this.destory();}destory(){this.cacheData=null;for(let t=this.callbacks.length-1;t>=0;t--){const n=this.callbacks[t];n(),this.callbacks.splice(t,1);}}getLocalValue(){if(this.cacheData==null){let t=ne(this.storageKey);t==null&&(t={},this.setLocalValue(t)),this.destory(),this.cacheData=t;const n=ze(this.storageKey,(a,i,o)=>{this.cacheData=null,this.cacheData=o;});return this.callbacks.push(()=>{Ke(n);}),t}else return this.cacheData}setLocalValue(t){this.cacheData=null,this.cacheData=t,Z(this.storageKey,t);}set(t,n){const a=this.get(t),i=this.getLocalValue();Reflect.set(i,t,n),this.setLocalValue(i),this.emitValueChangeListener(t,n,a);}get(t,n){const a=this.getLocalValue();return Reflect.get(a,t)??n}getAll(){return this.getLocalValue()}delete(t){const n=this.get(t),a=this.getLocalValue();Reflect.deleteProperty(a,t),this.setLocalValue(a),this.emitValueChangeListener(t,void 0,n);}has(t){const n=this.getLocalValue();return Reflect.has(n,t)}keys(){const t=this.getLocalValue();return Reflect.ownKeys(t)}values(){const t=this.getLocalValue();return Reflect.ownKeys(t).map(n=>Reflect.get(t,n))}clear(){this.destory(),ce(this.storageKey);}addValueChangeListener(t,n){const a=Math.random(),i=this.listenerData.get(t)||[];return i.push({id:a,key:t,callback:n}),this.listenerData.set(t,i),a}removeValueChangeListener(t){let n=false;for(const[a,i]of this.listenerData.entries()){for(let o=0;o<i.length;o++){const s=i[o];(typeof t=="string"&&s.key===t||typeof t=="number"&&s.id===t)&&(i.splice(o,1),o--,n=true);}this.listenerData.set(a,i);}return n}async emitValueChangeListener(...t){const[n,a,i]=t;if(!this.listenerData.has(n))return;const o=this.listenerData.get(n);for(let s=0;s<o.length;s++){const r=o[s];if(typeof r.callback=="function"){let l,c;t.length===1||(t.length===2?l=a:t.length===3&&(l=a,c=i)),await r.callback(n,l,c);}}}}const Y=new Xe(ge),A={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new g.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new g.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new g.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new g.Dictionary),this.__onceExecData},get scriptName(){return Ae},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e;},key:ge,attributeKeyName:J,attributeDefaultValueName:X},init(){this.initContentDefaultValue(),Je.init();},initContentDefaultValue(){const e=a=>{if(!a.attributes||a.type==="button"||a.type==="container"||a.type==="deepMenu")return;const i=a.attributes,o=i[Ce];if(typeof o=="function"){const c=o();if(typeof c=="boolean"&&!c)return}const s=new Map,r=i[J];if(r!=null){const c=i[X];s.set(r,c);}const l=i[Ze];if(typeof l=="object"&&l&&Object.keys(l).forEach(c=>{const d=l[c];s.set(c,d);}),!s.size){b.warn("请先配置键",a);return}if(a.type==="switch"){const c=typeof a.disabled=="function"?a.disabled():a.disabled;typeof c=="boolean"&&c&&this.$data.contentConfigInitDisabledKeys.push(...s.keys());}for(const[c,d]of s.entries())this.setDefaultValue(c,d);},t=a=>{for(let i=0;i<a.length;i++){const o=a[i];e(o);const s=o.views;s&&Array.isArray(s)&&t(s);}},n=[...we.getAllContentConfig()];for(let a=0;a<n.length;a++){const i=n[a];if(!i.views)continue;const o=i.views;o&&Array.isArray(o)&&t(o);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&b.warn("该key已存在，初始化默认值失败: ",{key:e,initValue:this.$data.contentConfigInitDefaultValue.get(e)}),this.$data.contentConfigInitDefaultValue.set(e,t);},getDefaultValue(e){return this.$data.contentConfigInitDefaultValue.get(e)},setValue(e,t){Y.set(e,t);},getValue(e,t){const n=Y.get(e);return n??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){Y.delete(e);},hasKey(e){return Y.has(e)},addValueChangeListener(e,t,n){const a=Y.addValueChangeListener(e,t);if(n?.immediate||n?.immediateAll){const i=this.getValue(e);n?.immediate?t(e,i,i):n?.immediateAll&&A.emitMenuValueChange(e,i,i);}return a},removeValueChangeListener(e){Y.removeValueChangeListener(e);},emitMenuValueChange(e,t,n){Y.emitValueChangeListener(e,t,n);},async exec(e,t,n,a=true){let i;typeof e=="string"||Array.isArray(e)?i=()=>e:i=e;let o=false;const s=i();let r=[];Array.isArray(s)?(o=true,r=s):r.push(s);const l=r.find(h=>!this.$data.contentConfigInitDefaultValue.has(h));if(l){b.warn(`${l} 键不存在`);return}const c=JSON.stringify(r);if(a&&this.$data.onceExecMenuData.has(c))return this.$data.onceExecMenuData.get(c);const d=[],p=new Te({keyList:r,getValue:h=>!!this.getValue(h),checkExec(h){let f=false;return typeof n=="function"?f=n(h):f=h.every(y=>this.getValue(y)),f}}),m=async h=>{const f=p.checkMenuExec();let y=[];if(f){const v=r.map(C=>this.getValue(C));y=await t({key:r,triggerKey:h?.key,value:o?v:v[0],addStoreValue:(...C)=>p.handlerResult(f,C)});}p.handlerResult(f,y);};a&&r.forEach(h=>{const f=this.addValueChangeListener(h,(y,v,C)=>m({key:y}));d.push(f);}),await m();const w={checkMenuExec:p.checkMenuExec.bind(p),keyList:r,reload(){this.clearStoreNodeList(),this.execDestoryFnAndClear(),m();},clear(){p.clearStoreNodeList(),this.execDestoryFnAndClear(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreNodeList:p.clearStoreNodeList.bind(p),execDestoryFnAndClear:p.execDestoryFnAndClear.bind(p),removeValueChangeListener:()=>{d.forEach(h=>{this.removeValueChangeListener(h);});},clearOnceExecMenuData(){a&&A.$data.onceExecMenuData.delete(c);}};return this.$data.onceExecMenuData.set(c,w),w},async execMenu(e,t,n=false,a=false){return await this.exec(e,async(...i)=>await t(...i),i=>i.every(s=>{let r=!!this.getValue(s);return A.$data.contentConfigInitDisabledKeys.includes(s)&&(r=false,b.warn(`.execMenu${a?"Once":""} ${s} 被禁用`)),n&&(r=!r),r}),a)},async execMenuOnce(e,t,n=false,a=false){const i=await this.execMenu(e,t,n,true);if(a&&i){const o=()=>{i.reload();};this.removeUrlChangeWithExecMenuOnceListener(e),this.addUrlChangeWithExecMenuOnceListener(e,o);}return i},async execMoreMenu(e,t,n=false,a=false,i=false){const o=await Promise.all(e.map(async([d,p])=>await this.execMenu(d,(...w)=>p(...w),n,a))),s=new Te({keyList:e.map(([d])=>d),getValue:d=>!!this.getValue(d)}),r=[],l=(d=false)=>{if(s.clearStoreNodeList(),s.execDestoryFnAndClear(),d){for(const p of r)this.removeValueChangeListener(p);for(const p of o)p&&this.removeUrlChangeWithExecMenuOnceListener(p.keyList);}},c=()=>{const d=o.every(p=>p?p.checkMenuExec():true);if(l(false),d){const p=t();s.handlerResult(d,p);}};c();for(const d of o)if(d){const p=this.addValueChangeListener(d.keyList[0],()=>{c();});if(r.push(p),i){const m=()=>{d.reload();};this.removeUrlChangeWithExecMenuOnceListener(d.keyList),this.addUrlChangeWithExecMenuOnceListener(d.keyList,m);}}return {clear(){for(const d of o)d?.clear();this.execDestoryFnAndClear(),this.removeValueChangeListener();},execDestoryFnAndClear(){for(const d of o)d?.execDestoryFnAndClear();l(false);},removeValueChangeListener(){for(const d of o)d?.removeValueChangeListener();l(true);}}},async execMoreMenuOnce(e,t,n=false,a=false){return await this.execMoreMenu(e,t,n,true,a)},deleteExecMenuOnce(e){return e=this.transformKey(e),this.$data.onceExecMenuData.delete(e),this.$data.urlChangeReloadMenuExecOnce.delete(e),Y.removeValueChangeListener(e)},onceExec(e,t,n=false){if(e=this.transformKey(e),typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(e)||n&&(Array.isArray(e)?e:[e]).findIndex(i=>{if(!!!A.getValue(i))return  true})!==-1||(t(),this.$data.onceExecData.set(e,1));},deleteOnceExec(e){e=this.transformKey(e),this.$data.onceExecData.delete(e);},addUrlChangeWithExecMenuOnceListener(e,t){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.set(e,t),{off:()=>this.removeUrlChangeWithExecMenuOnceListener(e)}},removeUrlChangeWithExecMenuOnceListener(e){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.delete(e);},hasUrlChangeWithExecMenuOnceListener(e){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.has(e)},async emitUrlChangeWithExecMenuOnceEvent(e){const t=this.$data.urlChangeReloadMenuExecOnce.values();for(const n of t)await n(e);},showPanel(e,t=`${Ae}-设置`,n=false,a=false){this.$data.$panel=null,this.$data.panelContent=[];const i=e.findIndex(s=>(typeof s.isBottom=="function"?s.isBottom():!!s.isBottom)&&s.id==="script-version")!==-1;!n&&!i&&e.push(...we.getDefaultBottomContentConfig());const o=S.panel({title:{text:t,position:"center",html:false,style:""},content:e,btn:{close:{enable:true,callback:s=>{s.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:s=>{s(),this.$data.$panel=null;}},width:H.setting.width,height:H.setting.height,drag:true,only:true,style:`
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,...this.$data.panelConfig});return this.$data.$panel=o,this.$data.panelContent=e,a||this.registerConfigSearch({$panel:o,content:e}),{$panel:o,content:e}},registerConfigSearch(e){const{$panel:t,content:n}=e,a=(w,h)=>{if(typeof e.translateCallback=="function")return e.translateCallback(w,h);if(typeof h=="object"&&h)for(const f in h)w=w.replaceAll(`{{${f}}}`,h[f]);return w},i=async(w,h)=>{if(w==null)return;const f=await h(w);return f&&typeof f.isFind=="boolean"&&f.isFind?f.data:await i(f.data,h)},o=(w,h)=>{const f=new IntersectionObserver(y=>{y.forEach(v=>{v.isIntersecting&&(h?.(),f.disconnect());});},{root:null,threshold:1});f.observe(w),w.scrollIntoView({behavior:"smooth",block:"center"});},s=w=>{const h="pops-flashing";u.onAnimationend(w,()=>{w.classList.remove(h);}),w.classList.add(h);},r=w=>{if(w.type==="dblclick"&&m)return;u.preventEvent(w);const h=S.alert({title:{text:a("搜索配置"),position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="${a("请输入需要搜素的配置名称")}">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:H.settingMiddle.width,height:"auto",drag:true,style:`
					${S.config.cssText.panelCSS}

					.search-wrapper{
						border-bottom: 1px solid rgb(235, 238, 245, 1);
					}
					.pops-content:has(.search-result-wrapper:empty) .search-wrapper{
						border-bottom: 0;
					}
					.search-config-text{
						width: 100%;
						border: 0;
						height: 32px;
						padding: 0px 10px;
						outline: none;
					}
					.search-result-wrapper{
						max-height: 400px;
						overflow: auto;
					}
					.search-result-item{
						cursor: pointer;
						padding: 5px 10px;
						display: flex;
						flex-direction: column;
					}
					.search-result-item:hover{
						background-color: #D8F1FD;
					}
					.search-result-item-path{
						display: flex;
            align-items: center;
            flex-wrap: wrap;
					}
					.search-result-item-description{
						font-size: 0.8em;
						color: #6c6c6c;
					}
					${e.searchDialogStyle??""}
				`}),f=h.$shadowRoot.querySelector(".search-config-text"),y=h.$shadowRoot.querySelector(".search-result-wrapper");f.focus();const v=()=>{u.empty(y);},C=k=>{const E=g.queryProperty(k,B=>B?.next?{isFind:false,data:B.next}:{isFind:true,data:B}),R=u.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${E.matchedData?.path}</div>
							<div class="search-result-item-description">${E.matchedData?.description??""}</div>
						`}),O=S.fn.PanelHandlerComponents();return u.on(R,"click",()=>{const U=t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[k.index];if(!U){x.error(a("左侧项下标{{index}}不存在",{index:k.index}));return}U.scrollIntoView({behavior:"smooth",block:"center"}),U.click(),i(k.next,async M=>{if(M?.next){const T=await u.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(L=>{const Q=Reflect.get(L,O.$data.nodeStoreConfigKey);return typeof Q=="object"&&Q!=null&&Q.text===M.name}),2500);if(T)T.click();else return x.error(a("未找到对应的二级菜单")),{isFind:true,data:M};return {isFind:false,data:M.next}}else {const T=await u.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(L=>Reflect.get(L,O.$data.nodeStoreConfigKey)===M.matchedData?.formConfig),2500);if(T){o(T);const L=T.closest(".pops-panel-forms-fold[data-fold-enable]");L&&(L.querySelector(".pops-panel-forms-fold-container").click(),await g.sleep(500)),o(T,()=>{s(T);});}else x.error(a("未找到对应的菜单项"));return {isFind:true,data:M}}});}),R},_=k=>{const E=new RegExp(k,"i"),R=[],O=(U,M)=>{for(let T=0;T<U.length;T++){const L=U[T],Q=L.views;if(Q&&Array.isArray(Q)){const ee=g.deepClone(M);if(L.type==="deepMenu"){const ae=g.queryProperty(ee,ie=>ie?.next?{isFind:false,data:ie.next}:{isFind:true,data:ie});ae.next={name:L.text};}O(Q,ee);}else {let ee,ae;if(L.type==="own"){let F=Reflect.get(L.attributes||{},$e);F&&(typeof F=="function"&&(F=F()),typeof F.text=="string"&&(ee=F.text),typeof F.desc=="string"&&(ae=F.desc));}else ee=L.text,ae=Reflect.get(L,"description");const ie=[ee,ae],ke=ie.findIndex(F=>{if(typeof F=="string")return F.match(E)});if(ke!==-1){const F=g.deepClone(M),Se=g.queryProperty(F,j=>j?.next?{isFind:false,data:j.next}:{isFind:true,data:j});Se.next={name:ee,matchedData:{path:"",formConfig:L,matchedText:ie[ke],description:ae}};const Ee=[];g.queryProperty(F,j=>{const ye=j?.name;return typeof ye=="string"&&ye.trim()!==""&&Ee.push(ye),j?.next?{isFind:false,data:j.next}:{isFind:true,data:j}});const qe=Ee.join(G.escapeHtml(" - "));Se.next.matchedData.path=qe,R.push(F);}}}};for(let U=0;U<n.length;U++){const M=n[U];if(!M.views||M.isBottom&&M.id==="script-version")continue;const T=M.views;if(T&&Array.isArray(T)){let L=M.title;typeof L=="function"&&(L=L()),O(T,{index:U,name:L});}}const B=document.createDocumentFragment();for(const U of R){const M=C(U);B.appendChild(M);}v(),y.append(B);};u.on(f,"input",g.debounce(k=>{u.preventEvent(k);const E=u.val(f).trim();if(E===""){v();return}_(E);},200));};t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(w=>{u.on(w,"dblclick",r);});const c=new WeakMap;let d=false,p,m=false;u.on(t.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(w,h)=>{m=true,clearTimeout(p),p=void 0,d&&c.has(h)?(d=false,c.delete(h),r(w)):(p=setTimeout(()=>{d=false;},200),d=true,c.set(h,w));},{capture:true}),t.$shadowRoot.appendChild(u.createElement("style",{type:"text/css",textContent:`
    			.pops-flashing{
    				animation: double-blink 1.5s ease-in-out;
    			}
    			@keyframes double-blink {
    				 0% {
    					background-color: initial;
    				}
    				25% {
    					background-color: yellow;
    				}
    				50% {
    					background-color: initial;
    				}
    				75% {
    					background-color: yellow;
    				}
    				100% {
    					background-color: initial;
    				}
    			}
    		`}));},transformKey(e){if(Array.isArray(e))if(e.length>1){const t=e.sort();return JSON.stringify(t)}else return e[0];else return e},getDynamicValue(e,t){let n=false,a=t;const i=this.addValueChangeListener(e,(o,s)=>{a=s;});return {get value(){return n||(n=true,a=A.getValue(e,t)),a},destory(){A.removeValueChangeListener(i);}}}};G.setGMResourceCSS(Ue.Viewer);G.setGMResourceCSS(Ue.Hljs);S.GlobalConfig.setGlobalConfig({mask:{enable:true},drag:true});const et=()=>{const e="texttolink",t=/((https?:\/\/|www\.)[\x21-\x7e]+[\w\/]|(\w[\w._-]+\.(com|cn|org|net|info|tv|cc))(\/[\x21-\x7e]*[\w\/])?|ed2k:\/\/[\x21-\x7e]+\|\/|thunder:\/\/[\x21-\x7e]+=)/gi,n=function(h){let f=h.originalTarget??h.target,y;if(f!=null&&f.localName==="a"&&f.className.indexOf(e)!==-1&&(y=f.getAttribute("href"),typeof y=="string"&&y.indexOf("http")!==0&&y.indexOf("ed2k://")!==0&&y.indexOf("thunder://")!==0))return f.setAttribute("href","http://"+f)},a=function(h){if(typeof h!="object"||h==null)return;const f=h?.textContent,y=h?.parentNode;if(y!=null&&y?.className?.indexOf?.(e)===-1&&h.nodeName!=="#cdata-section"&&typeof f=="string"){const v=f.replace(t,`<a href="$1" target="_blank" class="${e}">$1</a>`);if(f.length!==v.length){const C=document.createElement("span");u.html(C,v);const _=C.querySelector("a"),k=_.href;return console.log(`识别: ${k}`),y.nodeName.toLowerCase()==="span"?y.replaceChild(_,h):y.replaceChild(C,h)}}},i="a svg canvas applet input button area pre embed frame frameset head iframe img option map meta noscript object script style textarea code".split(" "),o=`//text()[not(ancestor::${i.join(") and not(ancestor::")})]`,s=new RegExp(`^(${i.join("|")})$`,"i"),r=function(h,f){let y,v;if(f+1e4<h.snapshotLength){let C=y=f;for(v=f+1e4;f<=v?y<=v:y>=v;C=f<=v?++y:--y)a(h.snapshotItem(C));setTimeout(function(){return r(h,f+1e4)},15);}else {let C;for(C=y=f,v=h.snapshotLength;f<=v?y<=v:y>=v;C=f<=v?++y:--y)a(h.snapshotItem(C));}},l=function(h){const f=document.evaluate(o,h,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);return r(f,0)},c=function(h){for(const f=document.createTreeWalker(h,NodeFilter.SHOW_TEXT,{acceptNode:function(y){const v=y?.parentNode?.localName;return s.test(v)?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT}});f.nextNode();)a(f.currentNode);};let d=new g.LockFunction(h=>{for(const f of h)if(f.type==="childList"){const y=f.addedNodes;for(let v=0;v<y.length;v++){const C=y[v];c(C);}}});const p=function(){return l(document.body),g.mutationObserver(document.body,{config:{subtree:true,childList:true},callback:f=>{d.run(f);}})},m=function(h){const f=h.getAttribute("href");if(typeof f=="string"&&f.indexOf("http")!==0&&f.indexOf("ed2k://")!==0&&f.indexOf("thunder://")!==0)return h.setAttribute("href","http://"+f)},w=function(){const h=Array.from(document.getElementsByClassName(e));for(const f of h)m(f);};document.addEventListener("mouseover",n),setTimeout(w,1500),setTimeout(p,100);},be={formhash:/formhash=([0-9a-zA-Z]+)/,uid:/uid(=|-)(\d+)/,fontSpecial:/<font.*?>|<\/font>|<strike>|<strong>|<i>|<u>|align=".*?"|<br>[\s]*<br>[\s]*<br>/g},$={getAvatar:(e,t="middle")=>`/uc_server/avatar.php?uid=${e}&size=${t}&ts=1`,getCurrentUID(){let e=D.discuz_uid;if(typeof e=="string")return e;let t=z('.sidenv_exit a[href*="uid-"]')||z('#comiis_key a[href*="uid-"]');if(t){let n=t.href.match(/uid=([0-9]+)/);if(n)return n[n.length-1]}},async getFormHash(){let e=Array.from((top||globalThis).document.querySelectorAll("input[name=formhash]"));for(let a=0;a<e.length;a++){let o=e[a].value;if(o)return o}let t=Array.from((top||globalThis).document.querySelectorAll('a[href*="formhash="]'));for(let a=0;a<t.length;a++){let o=t[a].href.match(be.formhash);if(o){let s=o[o.length-1];if(s)return s}}let n=await P.get("/home.php?mod=spacecp",{fetch:true,allowInterceptConfig:false});if(n.status){let a=n.data.responseText,o=u.toElement(a,true,true).querySelector("input[name=formhash]");if(o){let s=o.value;if(g.isNotNull(s))return s}}else b.error("请求个人主页获取formhash失败",n);},envIsMobile(){return (D.STYLEID||window.STYLEID||typeof STYLEID<"u"&&STYLEID)==="3"},getThreadId:e=>{let t=e.match(/thread-([\d]+)-|&tid=([\d]+)/i);if(t){let n=t.filter(Boolean);return n[n.length-1]}},getForumId(e){let t=e.match(/&fid=([\d]+)/i);if(t)return t[t.length-1]},getPostId(e){let t=e.match(/&pid=([\d]+)/i);if(t)return t[t.length-1]},getRepquote(e){let t=e.match(/&repquote=([\d]+)/i);if(t)return t[t.length-1]}},me={$key:{sign:"mt-sign-time"},init(){this.sign();},checkSignInfo(){let t=this.getSignInfo().find(n=>n.hostName===window.location.hostname);return t?g.formatTime(Date.now(),"yyyyMMdd")===g.formatTime(t.time,"yyyyMMdd"):false},setSignInfo(){let e={hostName:window.location.hostname,time:Date.now()},t=this.getSignInfo(),n=t.findIndex(a=>a.hostName===e.hostName);n!==-1&&t.splice(n,1),t.push(e),Z(this.$key.sign,t);},getSignInfo(){let e=ne(this.$key.sign,[]);return Array.isArray(e)?e:(this.clearSignInfo(),[])},getHostNameSignInfo(e=window.location.hostname){return this.getSignInfo().find(n=>n.hostName===e)},clearSignInfo(e){if(typeof e=="string"){let t=this.getSignInfo(),n=t.findIndex(a=>a.hostName===e);n!==-1&&t.splice(n,1),Z(this.$key.sign,t);}else ce(this.$key.sign);},checkLogin(){return $.envIsMobile()?!!z("a[href*='member.php?mod=logging&action=logout']"):!!z("#comiis_key")},async sign(){let e=await $.getFormHash();if(e==null){if(z("#comiis_picshowbox")){b.info("当前为评论区的看图模式 ");return}b.error("自动签到：获取账号formhash失败"),this.clearSignInfo(window.location.hostname),x.error({content:"自动签到：获取账号formhash失败"});return}if(this.checkSignInfo()){b.info("今日已签到");return}let t=!!A.getValue("mt-auto-sign-useFetch"),n=g.getRandomPCUA(),a=()=>{this.setSignInfo();},i=()=>{this.clearSignInfo(window.location.hostname);},o=r=>{let c=xe.alert({title:{text:"未知签到内容",position:"center"},content:{text:"",html:false},width:"88vw",height:"300px"}).$shadowRoot.querySelector(".pops-alert-content");c.innerText=r;},s=[{checkPluginEnableUrl:"/plugin.php?id=k_misign:sign",async sign(){let r={operation:"qiandao",format:"button",formhash:e,inajax:1,ajaxtarget:"midaben_sign"},l=await P.get(`/k_misign-sign.html?${g.toSearchParamsStr(r)}`,{fetch:t,headers:{"User-Agent":n},allowInterceptConfig:false});if(!l.status){x.error("签到：网络异常，请求失败",{consoleLogContent:true});return}a(),b.info("签到信息：",l);let c=l.data.responseText,d=g.parseCDATA(c),p=u.toElement(`<div>${d}</div>`,true,false),m=u.text(p);if(m.includes("需要先登录")){x.error("签到：请先登录账号",{timeout:3e3,consoleLogContent:true}),i();return}else if(m.includes("请稍后再试")||m.includes("您已经被列入黑名单")||m.includes("绑定手机号后才可以签到")||m.includes("您所在用户组不允许使用")){x.error("签到："+m,{timeout:5e3});return}else if(m.includes("今日已签")||m.includes("今日已经签到")){x.info("签到："+m);return}else if(c.includes("您当前的访问请求当中含有非法字符，已经被系统拒绝")){x.error("签到: 您当前的访问请求当中含有非法字符，已经被系统拒绝",{timeout:6e3});return}else if(t&&"location"in g.toJSON(c)){x.success("签到: 签到成功");return}let w=p.querySelector(".con"),h=p.querySelector(".line");if(w&&h){let f=u.text(w).match(/([0-9]+)金币/),y=u.text(h).match(/([0-9]+)/),v=f[f.length-1],C=y[y.length-1];b.success(`金币${v}，排名${C}`),x.info(`
							<div style="display: flex;${$.envIsMobile()?"":"padding: 20px;"}">
								<div style="align-self: center;margin-right: 20px;">签到</div>
								<div>排名 ${C}<br>金币 ${v}</div>
							</div>`,{timeout:4e3,isHTML:true});return}o(c);}},{checkPluginEnableUrl:"/plugin.php?id=dsu_paulsign:sign",async sign(){let r={id:"dsu_paulsign:sign",operation:"qiandao",infloat:1,inajax:1},l=await P.post(`/plugin.php?${g.toSearchParamsStr(r)}`,{data:{formhash:e,qdxq:"kx",qdmode:3,todaysay:"",fastreply:0},processData:true,fetch:t,headers:{"User-Agent":n,"Content-Type":"application/x-www-form-urlencoded"},allowInterceptConfig:false});if(!l.status){x.error("签到：网络异常，请求失败",{consoleLogContent:true});return}a(),b.info("签到信息：",l);let c=l.data.responseText;if(c.includes("签到成功")){x.success("签到：签到成功");return}if(c.includes("今日已经签到")){x.info("签到：您今日已经签到，请明天再来！");return}o(c);}}];for(let r=0;r<s.length;r++){const l=s[r];let c=await P.get(l.checkPluginEnableUrl,{fetch:t,headers:{"User-Agent":g.getRandomPCUA()},allowInterceptConfig:false});if(!c.status){b.error("签到：检查签到插件是否启用的请求失败",c);continue}if(u.toElement(c.data.responseText,true,true).querySelector("#messagetext")||c.data.responseText.includes("插件不存在或已关闭")){b.error(`插件：${l.checkPluginEnableUrl} 未启用或不存在`);continue}await l.sign();break}}},le={isKMiSign(){return window.location.pathname.startsWith("/k_misign-sign.html")},isPost(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/thread-")||window.location.pathname.startsWith("/forum.php")&&e.has("mod","viewthread")},isPage(){return !!window.location.pathname.match(/^\/page-([0-9]+).html/g)},isGuide(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/forum.php")&&e.has("mod","guide")},isPlate(){return !!window.location.pathname.match(/\/forum-[0-9]{1,2}-[0-9]{1,2}.html/g)},isSearch(){return window.location.pathname.startsWith("/search.php")},isSpace(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/home.php")&&e.has("mod","space")},isMySpace(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/home.php")&&e.has("mod","space")&&e.has("do","profile")&&e.has("mycenter")},isSpaceWithAt(){return window.location.pathname.startsWith("/space-uid-")},isForumList(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/forum.php")&&e.has("forumlist")},isMessage(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/home.php")&&e.has("mod","space")&&e.has("do","notice")},isMessageList(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/home.php")&&e.has("mod","space")&&e.has("do","pm")},isPointsMall(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/keke_integralmall-keke_integralmall.html")||window.location.pathname.startsWith("/plugin.php")&&e.has("id","keke_integralmal")},isPostPublish(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/forum.php")&&e.has("mod","post")},isPostPublish_voting(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/forum.php")&&e.has("special","1")||e.has("fid","42")},isPostPublish_edit(){const e=new URLSearchParams(window.location.search);return this.isPostPublish()&&e.has("action","edit")},isPostPublish_newthread(){const e=new URLSearchParams(window.location.search);return this.isPostPublish()&&e.has("action","newthread")},isPostPublish_reply(){const e=new URLSearchParams(window.location.search);return this.isPostPublish()&&e.has("action","reply")}},tt={init(){u.onReady(()=>{A.execMenuOnce("mt-forum-post-quickCollentBtn",()=>this.quickCollentBtn()),A.execMenuOnce("mt-forum-post-quickReplyOptimization",()=>this.quickReplyOptimization());});},async quickCollentBtn(){b.info("【快捷收藏】");const e=await u.waitNode("#scrolltop",1e4);if(!e)return;let t=await $.getFormHash(),n=$.getThreadId(window.location.href),a=`/home.php?${g.toSearchParamsStr({mod:"spacecp",ac:"favorite",type:"thread",id:n,formhash:t,infloat:"yes",handlekey:"k_favorite",inajax:1,ajaxtarget:"fwin_content_k_favorite"})}`,i=u.createElement("span",{innerHTML:`
      <a href="${a}" 
        id="k_favorite"
        onclick="showWindow(this.id, this.href, 'get', 0);"
        onmouseover="this.title = $('favoritenumber').innerHTML + ' 人收藏'">
        <img src="data:image/png;base64,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"
            height="26" 
            width="26" 
            style="position:absolute;top:10px;left:11px">
      </a>
      `});return u.prepend(e,i),[W(`
      a#k_favorite{
        background: #ffffff;
      }
      a#k_favorite:hover{
        background: #f80 !important;
      }
    `),()=>{u.remove(i);}]},async quickReplyOptimization(){const e=await u.waitNode('#scrolltop a[title="快速回复"]',1e4);return e?(b.info("快捷回复优化"),u.on(e,"click",function(){D.showWindow("reply",e.href),b.info("等待弹窗出现"),u.waitNode("#moreconf",1e4).then(n=>{if(!n)return;b.success("弹出出现，添加按钮");let a=u.createElement("button",{innerText:"一键空格",type:"button",id:"insertspace2"},{style:"float: left;"});u.on(a,"click",i=>{u.preventEvent(i),u.val(z("#postmessage"),u.val(z("#postmessage"))+"           ");}),u.append(n,a);});}).off):void 0}},nt=".pls .avatar img,.avtm img{border-radius:10%}.pls .avatar img{--avatar-size: 90px;width:var(--avatar-size);height:var(--avatar-size)}";Pe(nt);const Fe={$flag:{isSetHljsCSS:false},init(){tt.init(),A.execMenuOnce("mt-forum-post-autoExpandContent",()=>this.autoExpandContent()),A.execMenuOnce("mt-forum-post-repairImageWidth",()=>this.repairImageWidth()),A.execMenuOnce("mt-forum-post-hideBottomInfoBlock",()=>this.hideBottomInfoBlock()),u.onReady(()=>{A.execMenu("mt-forum-post-removeFontStyle",()=>{this.removeFontStyle();}),A.execMenu("mt-forum-post-removeCommentFontStyle",()=>{this.removeCommentFontStyle();}),A.execMenuOnce("mt-forum-post-loadNextPageComment",()=>this.loadNextPageComment()),A.execMenuOnce("mt-forum-post-codeQuoteOptimization",()=>this.codeQuoteOptimization()),A.execMenuOnce("mt-forum-post-optimizationImagePreview",()=>this.optimizationImagePreview()),A.execMenuOnce("mt-forum-post-interceptionAttachment",()=>this.setAttachmentsClickTip()),A.execMenu("mt-forum-post-detectingUserOnlineStatus",()=>{this.detectingUserOnlineStatus();}),A.execMenu("mt-forum-post-showUserLevel",()=>{this.showUserLevel();});});},autoExpandContent(){return b.info("自动展开帖子内容"),[W(`
				div.comiis_message.bg_f.view_one.b_b.cl.message>div.comiis_messages.comiis_aimg_show.cl{
					max-height:inherit!important;
					overflow-y:inherit!important;
					position:inherit!important
				}
        	`),G.addBlockCSS(".comiis_lookfulltext_bg",".comiis_lookfulltext_key")]},repairImageWidth(){return b.info("修复图片宽度"),W(`
        .comiis_messages img{
            max-width: 100% !important;
        }`)},removeFontStyle(){let e=z(".comiis_a.comiis_message_table");e&&(b.info("移除帖子字体效果"),u.html(e,u.html(e).replace(be.fontSpecial,"")));},removeCommentFontStyle(){b.info("移除评论区的字体效果");let e=N("font"),t=u.html(z(".comiis_postlist .comiis_postli"))||"";t!==""&&(e.forEach(n=>{t.includes(n.innerHTML)||(n.removeAttribute("color"),n.removeAttribute("style"),n.removeAttribute("size"));}),N(".comiis_message.message").forEach(n=>{if(t.includes(n.innerHTML)){u.html(n,u.html(n).replace(be.fontSpecial,""));let a=u.next(n);a&&a.localName==="strike"&&(a.outerHTML=a.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));}})),N(".comiis_postli.comiis_list_readimgs.nfqsqi").forEach(n=>{let a=n.parentElement;a&&a.localName==="strike"&&(a.outerHTML=a.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));});},loadNextPageComment(){if(b.info("自动加载下一页评论"),document.title.includes("提示信息 - MT论坛"))return;if(N(".pgbtn").length==0){b.warn("没有找到下一页按钮");return}const e=async function(i){let o=await P.get(i,{fetch:true,allowInterceptConfig:false});if(!o.status){x.error("网络异常，请求下一页失败");return}const s=g.parseFromString(o.data.responseText),r=s.querySelector(".pgbtn a");return s.querySelector("#postlistreply")?.remove(),s.querySelector(".bm_h.comiis_snvbt")?.remove(),{url:r?r.getAttribute("href"):null,postlist:s.querySelector("#postlist"),pgbtn:s.querySelector(".pgbtn"),pgs:s.querySelector(".pgs.mtm")}},t=async function(){const i=z(".pgbtn a").getAttribute("href");if(i){let o=await e(i);o&&(o.postlist?.querySelector(".comiis_vrx")?.querySelector(".km1")&&(Object.keys(o).forEach(s=>{o[s]=null;}),b.warn("检测到请求的本页内容中存在【楼主】标识，判断为重复页请求")),(!o.url||o.url==i)&&(b.error("最后一页，取消监听"),u.off(document,["scroll","wheel"],n.run),u.remove(".pgbtn")),o.postlist&&u.append("#postlist",u.html(o.postlist)),o.pgbtn&&u.html(".pgbtn",u.html(o.pgbtn)),o.pgs&&u.html(".pgs.mtm",u.html(o.pgs)),Fe.init());}else b.error("获取下一页元素失败");};let n=new g.LockFunction(async()=>{g.isNearBottom()&&await t();});const a=u.on(document,["scroll","wheel"],n.run);return [()=>{a.off();}]},codeQuoteOptimization(){b.info("代码块优化");function e(a){const i=["add","and","cmp","cmpg","cmpl","const","div","double","float","goto","if","int","long","move","mul","neg","new","nop","not","or","rem","return","shl","shr","sput","sub","throw","ushr","xor"],o=["aget","aput","array","check","execute","fill","filled","goto/16","goto/32","iget","instance","invoke","iput","monitor","packed","sget","sparse"],s=["transient","constructor","abstract","final","synthetic","public","private","protected","static","bridge","system","interface","enum","annotation","volatile","native","strictfp","synchronized"],r=["void","boolean","byte","short","char","int","long","float","double","boolean\\[","byte\\[","short\\[","char\\[","int\\[","long\\[","float\\[","double\\["];return {aliases:["smali"],keywords:{keyword:s.join(" "),built_in:i.concat(o).join(" "),type:r.join(" ")},contains:[{className:"string",begin:'"',end:'"',relevance:0,contains:[a.BACKSLASH_ESCAPE,{className:"char.escape",begin:/\\[nrtbf]/,relevance:0}]},{className:"string",begin:"'",end:"'",relevance:0},a.COMMENT("#","$",{relevance:0}),{className:"keyword",variants:[{begin:"\\s*\\.end\\s[a-zA-Z0-9]*"},{begin:"^[ ]*\\.[a-zA-Z]*",relevance:0},{begin:"\\s:[a-zA-Z_0-9]*",relevance:0},{begin:"\\s("+s.join("|")+")"}]},{className:"built_in",variants:[{begin:"\\s("+i.join("|")+")\\s"},{begin:"\\s("+i.join("|")+")((\\-|/)[a-zA-Z0-9]+)+\\s",relevance:10},{begin:"\\s("+o.join("|")+")((\\-|/)[a-zA-Z0-9]+)*\\s",relevance:10}]},{className:"class",begin:`L[^(;:
]*;`,relevance:0},{className:"function",begin:"\\s*[a-zA-Z_<][a-zA-Z0-9_<>]*\\s*\\(",end:"\\s*\\)",excludeBegin:true,excludeEnd:true,relevance:0,contains:[{className:"params",begin:"\\S",endsWithParent:true,relevance:0}]},{className:"variable",begin:"[vp][0-9]+",relevance:0},{className:"number",variants:[{begin:"\\b-?0[xX][0-9a-fA-F]+[lL]?"},{begin:"\\b-?0[0-7]+[lL]?"},{begin:"\\b-?[0-9]+[lLfF]?"}],relevance:0},{className:"property",begin:"\\s*[a-zA-Z_<][a-zA-Z0-9_<>]*\\s*->\\s*[a-zA-Z_<][a-zA-Z0-9_<>]*",relevance:0}]}}pe.registerLanguage("smali",e);let t=new g.LockFunction(()=>{function a(o,s="java"){o.oldValue||(o.oldValue=o.textContent),u.html(o,pe.highlight(o.oldValue,{language:s}).value.replace(/\\n$/gi,""));}N("em[onclick^=copycode]").forEach(o=>{if(o.nextElementSibling&&typeof o.nextElementSibling.className=="string"&&o.nextElementSibling.className=="code-select-language")return;const s=u.text(o.parentElement.querySelector("div[id^=code]"));let r=pe.highlightAuto(s).language;s.trim().startsWith("invoke-")&&(r="smali"),r&&!["bash","css","javascript","json","java","kotlin","python","smali","typescript"].includes(r)&&(r="plaintext");const l=u.createElement("select",{className:"code-select-language"});let c=pe.listLanguages().sort();c=c.concat("自动检测");let d="";c.forEach(p=>{p.startsWith("自动检测")?d+=`<option data-value="${r}" selected="selected">${p}(${r})</option>`:d+=`<option data-value="${p}">${p}</option>`;}),u.html(l,d),u.on(l,"change",()=>{let p=l.selectedOptions[0].getAttribute("data-value");b.info("切换代码块语言: ",p),u.parent(l).querySelectorAll("li").forEach(m=>{a(m,p);});}),u.preventEvent(l,"click"),u.preventEvent(o,"click"),o.insertAdjacentElement("afterend",l),u.emit(l,"change");}),N(".blockcode").forEach(o=>o.className="hljs");},this,500);const n=g.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{t.run();}});return [W(`
			.hljs{text-align:left}
			.hljs ol{margin:0 0 0 10px;padding:10px 10px}
			.hljs li{padding-left:10px;list-style-type:decimal-leading-zero;font-family:Monaco,Consolas,'Lucida Console','Courier New',serif;font-size:12px;line-height:1.8em}
			.hljs li:hover{background:#2c313c}
			.hljs li::marker{unicode-bidi:isolate;font-variant-numeric:tabular-nums;text-transform:none;text-indent:0!important;text-align:start!important;text-align-last:start!important}
			.hljs em[onclick^=copycode]{color:#fff;background:#246fff;margin:5px 10px;border-radius:3px;padding:0 5px;cursor:pointer;height:32px;line-height:32px;display:inline-flex}
			.hljs .code-select-language{height:32px;line-height:32px;font-size:14px;border:1px solid #5c5c5c;border-radius:5px;text-align:center;outline:0}
		`),()=>{n.disconnect();}]},optimizationImagePreview(){b.info("图片查看优化");const e=[{hostName:"avatar-bbs.mt2.cn",pathName:"*"},{hostName:"cdn-bbs.mt2.cn",pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"/uc_server/avatar.php"}];function t(o=[],s=0){let r="";o.forEach(d=>{r+=`<li><img data-src="${d}"></li>`;});let l=u.createElement("ul",{innerHTML:r}),c=new He(l,{inline:false,url:"data-src",zIndex:g.getMaxZIndex()+100,hidden:()=>{c.destroy();}});c.view(s),c.zoomTo(1),c.show();}function n(){N("#postlist .comiis_vrx:not([data-isHandlingViewIMG])").forEach(o=>{o.setAttribute("data-isHandlingViewIMG","true");let s=[];o.querySelectorAll("img").forEach(r=>{let l=r.getAttribute("file")||r.src;if(g.isNull(l))return;let c=new URL(l).hostname,d=new URL(l).pathname,p=r.parentElement;p.nodeName.toLowerCase()==="a"&&p.getAttribute("href")===l&&(p.setAttribute("href","javascript:;"),p.removeAttribute("target"));let m=false;for(let w of e)if(c.indexOf(w.hostName)!=-1&&d.match(w.pathName)){m=true;break}m||(s.push(l),r.removeAttribute("onclick"),r.setAttribute("onclick",""),u.on(r,"click",function(w){u.preventEvent(w),b.info("点击图片",r);let h=s.findIndex(f=>f==l);t(s,h);},{capture:true}));});});}let a=new g.LockFunction(()=>{n();});const i=g.mutationObserver(document,{config:{subtree:true,childList:true},immediate:true,callback:()=>{a.run();}});return [()=>{i.disconnect();}]},setAttachmentsClickTip(){b.info("附件点击提醒");function e(n){if(n.hasAttribute("href")){let a=n.hasAttribute("id")?n.id:n.parentElement.id,i=n.getAttribute("href"),o=n.innerText;if(z(`#${a}_menu`).innerText.indexOf("金币")===-1)return;console.log("发现附件",n),console.log("该附件是金币附件，拦截！"),n.setAttribute("data-href",i),n.style.setProperty("cursor","pointer"),n.removeAttribute("href"),n.innerText="【已拦截】"+o,n.onclick=function(){S.confirm({title:{text:"提示",position:"center"},content:{text:`<br />确定花费2金币下载附件 <a style="color: #507daf !important;">${o}</a> ？<br /><br />`,html:true},btn:{ok:{callback:r=>{window.open(i,"_blank"),r.close();}}},width:"400px",height:"200px"});};}}const t=g.mutationObserver(document.documentElement,{callback:()=>{N(".attnm a").forEach(n=>{e(n);}),N(".comiis_attach a").forEach(n=>{e(n);}),N("span[id*=attach_] a").forEach(n=>{e(n);});},immediate:true,config:{childList:true,subtree:true}});return [()=>{t.disconnect();}]},async detectingUserOnlineStatus(){b.info("探测用户在线状态"),A.onceExec("mt-forum-post-detectingUserOnlineStatus",()=>{W(`
				.gm-user-status-icon{
					border: 0 !important;
					float: right !important;
					display: block !important;
					width: 40px !important;
					height: 40px !important;
				}
			`);});function e(a){return u.createElement("img",{className:"gm-user-status-icon",smilied:a?"1353":"1384",loading:"lazy",src:a?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAFAxJREFUeF7tWwuQVNWZ/u6rnzPd0/PoeTC8tNkJ7gQBt0pYHDESUZcNWrBi1qjlEl2q8LG7apngs2JMsFLRLV9sUINWiZTRlfhIJGKwhMEF14iERcmEEZhhGGZ6Xt093TPd97n5z+3Tc6ftngeDValKTtWt7pl777nn//7vf57bAv7Ch/AXLj/+CsBfGfDVIyBefvnlfwegSdf1ubIsn2cYxjRRFIOCIATp8ZZlxU3TjEuSdErX9c9lWT4CoPndd9/9HQDzq1ziV2UCyvLly1dZlrVGEIRlsuIJSoofsuyCJCuQJBmCKI2SyzINGIYOQ9eg6yoMLQVdS8cty9olCMKrO3fu3A5AO9tgnFUAmpqaqtxu9x2iKN6uuINBl9sHl9vL1iyJE1ekYYo5OdXMMNTMELRMnFjyVCaTebK5ubnnbAFxVgCIRCLuWbNm3U+Cu30VQbfHz7TMBRcsvch6OSgkMH0f+TQceOlZQIZT8RwQJ06ceKS1tTUzVSCmDMBFF110hcfj2ez2hmZ4/cykITu0zTVvWSYEQYQoGGOu2TBHL8m0bCA5CLphQUsnkBkeaE+n0+v27t37m6mAcMYAkNZnzpz5mKz4b5XdpfB6baqLljqiedGmsijY6hQE+3GWZRVcM53n5+jTdIDBzUIzBFiCDE1NQ88MQtdSz7S1td11pmw4IwAuueSSekmS3pbdZfO9/jIQxRXJFoprXIAJQRRyQjsBGE9jJHwOCNOe1zBtEFU96x8EBWQmmXQSeiZ20DCMb33wwQcd482df37SAFx22WVzLMv6reQKznB7SiDReiwNLnnEaCVRZMIz7WdZMNmFcaaYWWfAATANGxDdsqOIYSkMBEONtwuC8M333nvv6GSeNSkASHjDMPYqnlCYCS/YUUkWDIiSPRUJz7Sd1T6n/WQWxa/lTLBMK8cADoDGgbFkmJZIIRNaeiAqSdJFkwFhwgAQ7WVZ/pA0LyseZteSYHt3WbIgQGIgcO2T4FMRvhgIBIAFAwSKaZq2P6BliC5k0inASLbrur5kouYwIQCyDm+/IJfOpxAHU4ViO2dIgm3rI2HPpv9XBQCjvaHnAKC/NQOwIEM3JRh6GpY+eLCtrW3RRBzjhABYtmzZ8xB935VdfsiiAQHk9GwAyMY5AJz+oiSeFe07WeD0BU4ATMvESIQQAUGBrqYAc+jnu3btunk80xsXgCVLlqxyewKvK54gc3aKZDs78vYixXUHAMw5aRp0Q2f0pIPO06EoCtxu94ScIt2XyWSgadqoeWxzkyHJUo4BBABdT/mDQSmGSNFBooQJuppc/eGHH1IKXXSMB0DpxRdf3CK6K2vdigCYGiSJhLdswQSRLYbRUNPg9/lx/vzzcd5556G2thaBQACJRALd3d04fPgwfn/w90wwAoLf51yZoRu58+PNM5gcZGBwAAgE3eCRQYSmW7C0gdN79uxpADBYDIExAWhqavqxqAQ2KC4/YKnM3vMB4Nq+8sorQUdJSQlcLhdkOeskiBW6DlVVkUwmsWPHDnZQ4sSTJ1rc8PAwOyY7DzdDxoJsZNAMGQYUWEYGppbY2NzcfO+kAaDCxjTNo4qvOkipLXN2IAbYlKaDBHMpLqy/dT3mzZsHn8/HqE5H/iCG0DE0NIRDhw5h0zObGAsIBBKctH+m86ianX0SAAwIy2X/DQXaUHdcFMU5xQqoogxg2pdLNgiyFxLI9kcKGg5CKpXC3XffjQsuuIDRnTTPNZIPAC2MBjGBzOKTTz7B448/jnBVGF3dXVOeR5YVUL3Bs2zdEGHABV3LQLRSRVlQEAAKe9XV1d2yp5JVNxJUyBIVM5TPi4wFZMtXX301Vq1ahVAoxISfSNZHQHAQXnvtNWYORPtrrrkmB+KZzLN9+3bGPJYbUB1hKTAsEYYlwVL74t3d3dWFwmJBAMjzQ/S+TmEPlm7bvqjb1Vw20yMQnnzySYTDYUb9iSyas4IWSbQnJjz44IN4+OGHmfBkDpOdh0wqGo3ijjvuYMDSIAA05hCJBQpMNUHmWzAiFAJAXLx48XZBKb+KJTus0LFLWEpuKOEZHhrCZcsvwy233IKysjLm8Ca7cPIfBMTAwABjEN1/pvPEYjE899xz2PnuTrjcLtsP0JIFCZrpggADphZ/c9++favyW2yFAPAtWrQoKnvDfrJ9alRQzm87Pol99vf14d777sXSpUuZ5goJT9q477778NZbb8PtdmHlypVM29xPcJ/g9BV8nvHudd5D8xCT9u7dix8+/EMEgoFRAFB2aEGCqfal9u/fHwYw5Lz/SwBQg0PThR2KNwTLUCELKgt9zBdINgCdnZ144YUX0NDQUJT+d911F7Zu3Yq6ujoESgNIDCaYv3jggQeKZyXZM5O5lwAgMzh27Biuv/56VFVV2X6AymhBgm65GACGmoAiW1fmN1DyARAbGxsf9AfCD0myF4qoApYBQRjJ6IgF7e3teOutN1myU8z+6Rxpe9bMWWxRPT09GIgNsBA43pjMvRwA8gMrVvwj6upqWUjl/QSKBBBk1mhNJaI/OHz48MNOM/gSAAsXLnxR8VbeIFOhb+l2e4tAEAWmfWLB8ePH8corr4zJABKCFudkwNDQMFpa/jCe/AzYid7rZMDq1atRX1/PtE8A8DYaA4Gy1eHelw4cOHBTUQAo/AWDwd2yJ3whlbgsAkC1K7ssAATCiRMn8Oijj2LZsmVFfQDR+Nlnn2UM8Xg8SKfTzGk+8sgjbDFj+YDx7i3kA3bv3s1yCQ6AYdqOm3qKHAA93fdRPB5f6gyHoxiQBeAL2ROeRnkUCS8KOsv5nSB0dp7GVVetxJ133lk0CpAj27BhA7Zt28YWct1112Hjxo3MLFjePkYUGOvefOFpHooClFT98pdvoLamhmnfMGzWjgAgQU9HT8Xj8XOLAgDAt2DBgm6Xr6ZEFjVYpg7B0mztUw6QTYOTg0kMp4fxxhtvTDkPWLv2u9iy5edTzgMoKaNEqMRfwjAiAFhOQL1Di8pkN9ShruSnn35a7YwE+T7At3DhwpTirQasjJ3/W3bbi2yfs4BQJz9w00034dZbbz3jTHDz5s14+umncdttt2HdunVnnAlSQvbiiy9ixowZUGSFVYgcANZWFxUGgDbcjQMHDvjHAqB0/vz5Cbe/lgFA5S/v8XMW8DZX/0A/Ojo6WALS1NQ06VqgubmZ+YSqqjB6eqJTnoccZ3l5ua11apexuoDaZ0o+AAFneZzPgNIFCxZ0kglwAMgH0GC1fzYhIBCoAjt16hRD+plnnsHixYsnXA3u27ePMcflcmN6fT1OdnRAVTNnPA+tj5yf2+XOaZ47QQKA+oaCqEAd6iETqBsTgHnz5v3BW1pTZ5ka6/cTAISkJEo5X8AdEXn29pPtrDBav3491q5dO24/YMuWLdi0aRMDa86cOfD7/aCq8ujRoyyhmew8ZPckvNfjZevj2reLIrJ9MgEbgOHBrs5Dhw59bUwAGhsb3/eW1tB2NkQrwxyhKFrM/lk0yDpEDkIylURvby/6+/sZBZcvX45LL70Us2fPRkVFBfr6+pi/eP/997Fz5052XU1NDarD1SgNBKAoMjRNx2Aigc7Tp5k55M9D9cb23Z/h8Z0dWKj8ES37fpV7Hl1LnSin8Ll2ehYAS3Sz5Q4Pdv3u8OHDl44FgG/u3LlbvKXhayVJgWBmWC5AmSDv8uaDQLamZlTE4nEkEnHW9aFKL39QpRcMBplw9Emad3aNCIRUMsmyxXg8zg7nPOI3HsScFTeju+VTWO98D+WujB058jQ/alfJAQAVRIOxrl8cOXJk7ZhRoLGx8R7FE3pIVtw5BhAANIqBQOfIJ5BJpNMZ6LqWK02peqTSmbXAPF74/D5m+4UKKNYMTaft9ljabpFRTpAxZaj/9BKev30xtn4yiF1vvoXZR/4LJR47QXM6PZb88K1lgcxWBiQvNC0DdaiPUuGfFAWAEiFN0/6htCy83V9SCctMA0YaFu3zWRbLAzgQxAT2Pc8kyCmSA6JF8P0B8h+kbWqB2eF0ZP/fyRS7o2NveOiazhwatdG6jBDEq36KX/97I5Iq8C9bOxHd8QQiiT3MN3GPzyIAeX5KhSl7pe12yQNZ8SERj2IwFl2lKMo7Y2aCHR0d1TNnzvy8ojriN/RhWIbGzIDXA/lMyAeBh8lie4Nj9Q3y02P6W1M1tJQsQdPN9+GxFRTBgJ8dNPHqbz+H8OsNqBZ77dCX7YWxKpAtytY+MVmQfejpbEm1tbWdV19f3z1WJkiqKW9oaHg5UD59uUuR2SYDOUICgAtbCIRCbOCJU74/KEb//OtImKF0GscWPoDvr1+BlbPtK47FgYd29OCLHdtw7sltuY3YnPBZAEh4SH4YhoZYb9vOlpaW7wDoH7MaBOCvrq5eE66d/XwwFIalD7HGommqzAzyQcg3iUJA8Gu4gJwdo+jPNefQJlG7Ta9G1Zof4UdrGlBuO3M2Nn5k4OAnR2C+eTdqpIFR2NH8tGcAuZQxoL+vG9HTx2/u7u5+FUBqLABoIt+fWFbT0NBwqKquwU9NEctIMxA4C/IFce4Dct/gBIq+O/+fr+n8v0lwGmT/JyM3Yum1N+LGhXaOz8c77cBHn/Xgixc3YObwp7bAWZ/EvkteUKfYFNyInjqSamlpmQega9yOEEC5I4LTp0//QVXtOetLSwKAmba3qYz0iIfNrsSpzfwN0UJCF9I+F8pJYQKhy6hA6Ns/xTcvnIPzq0c7zs9jwOH2OD5+/WWEP3uO7U+Qk2YOl6hP+b/oweBgDD2nj206efLkQwDi+W+aFWyKkhkoihI555xzmsPT5vpFaIwB5Assk8wh23JyaCQfiHzaT5YB1NVpq74Ci9beicYZQUyjEsYxTqWA9riBz/bsgbb931gGytN1QSIAXDChMO0fO3asSdO01nz6szUWoiOFw9bW1vLp06ffX1k9a30gWM62xGFmYBgqC0+FQMg3jXwQCv3tfL7z3SHKKbRlD2DRihWoCbhRZjd1ciOmAgkV+Lj5f5HcdhvKSt1M+yS4nf66kIj343TH0S1dXV33RyKR/gnvC2TfVwsoijK7vr7+N+G6OWGP2832B6lCJCbweM/jbjG7LkZ558sThV6aorpAWfUEllz+DXgUEyWu0SaQVG0/se+DjxHbejvKA1QL8NLXhfSf6pNo59FoR0fHFZqmHQeQKPTWadGtMc6CysrKa2umzf7PyvB0ttnImEAh0bITnlHFh8OTFwOkEEtGha/sBVRj+Ff+EJesvhouhXaiR89Ij1I1E7t+tRvmm3ciSCwVbAaQCfRGT6Lr1PH/6O3t/UUx7Rc1geyjCHKyvHBdXd2Pq2pmrSkLVWUByOYFlt19ZZmYswbPZmPjgTDWeUqFT9deiX/+3j0I11QUvDTa1Yf/fuIp1Ha8jdJARY76sYEe9HSdeLWzs5N2haOFbD+niHEWySKCoijTa2pqXq6snjU35w+y2SEPjZzG+WDQ/OOZSf4ayGyoxD6ZcuPCO57A4ovno8zvSAIAxFIZ7NtzEAd+9n3MKDHg9ZXk7L63+8SRrq6u72iadrKQ53c+b7wXJIgFHgAhv9//tXA4vC1UNSNcWlr2JSbwSZ32zMHg53h8d16b/yIVjxZkXrTj0y7NwcX/ugFNi/4G54btXOCLaBLN+/+IPc9uRL3RhoqKStA+JoW8gZ72aDQavS6VSlH/nTKk9FhvnI8HAD2Pm0JFKBT6eklJyUuV1bOCX2ICU3Xh12ALOTknGMVCZEbNIB5PoMcIQJi9FLMXXsgAOH7gI1jHd6NKSiAQqoHXW4LBZILifTyZTN4wMDDwfwD6xqL+RE2AX0emQP6gPBQK/a3f799cEZ5Ry3wCMwU67A2UYiCciT8g4Cgckj9IJlOsbUaDymm3N4BAMMSEj8X60BdtP51KpdYNDAx8ls33KeUd9/X6iTAgH4QKv98/q7y8/KmyimlzK6rqHBXjSNF0toDgPX5NN+2yHNSVkhnlRdmDWH8XYn2njvT399+eSqVOODQ/rvDjRYFCSssxQVGUyqqqqrsCZeE1pcFK+Hz2uwQ5NjhNoohpjMsKCmtslfwz2+MTZAwNpTAY70UiFn21p6fnMU3TqC6mSm9Cmp+sCTjXykEoA1BaWVm5zOPx3BOqrK+l6lGigM1Ngn4DwE0jX9p8ULiQo1y0RB0X2w3RpyDDMC3EB6IY6O04nU6nf9Lb27sr2+OLZYUnRzThX2dMxgScS+OOkToUlDGWVlRUrJNl+duhynrfCBC0jiwIuc9x9T5a6KzwDsGHdF1/pa+vb7OmafT6G2V4dIwqcyfwFJtcE72wwHU8RFL5TED4PR5PRVlZ2Q2Koqz2l1YEyTQ8XipSsl0aVuY6lJMte20t85HVNtvYFJAeTjKqpwb74pqmvR6LxV5Kp9Pcw5Pg9MLDmKFuLBmnAgDNSysnA6VcgYI0HR5FUbzBYPDvXS7Xt0RRXOTz+X0ubwD0GyJFcUNxeXIvW9GrbdQLNKmXaNCrdBloagaZoQGy8yHTNPerqvp2PB7/H03TqN1MwiazB32fFOXzwZgqADm1RSIRpbW1lX42QgexwqUoCgGjlJeXf93lci00TXOGKIrnWpZF/iNoWZaPmqT0sznLsoYEQYiZpvmFKIrtqqoe6O/vp3iuaZpGgtIbUKTt4UgkMtza2mq/vzPFcbYAyAeCilfKXQkM+k4Ha9kotBMyxtBog8Ae9ElC00Gaz0QiEfVsCT6VKDARzJlpRCIRsbW1lYQnMyEwSHj6br/DNjK4JonOdJDwJLSRFZrOT4nqxRZ9thlQ6DlMUDIR+mxtbeW/mBz9y0lbQLqOfWY1TV+nTPOv0glOhA1/1tf8P+a/O+ZB7/yUAAAAAElFTkSuQmCC":"data:image/png;base64,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"})}function t(a,i){let o=e(i);u.prepend(a,o);}let n=Array.from(N(".pls.favatar:not([data-is-detectingUserOnlineStatus])"));for(let a=0;a<n.length;a++){const i=n[a];let o=i.querySelector(".comiis_o.cl a.kmfxx");if(!o){b.error("探测用户在线状态失败，未找到发消息按钮");return}i.setAttribute("data-is-detectingUserOnlineStatus","true");let s=o.href,r=await P.get(s,{fetch:true,allowInterceptConfig:false});if(!r.status){b.error("探测用户在线状态，中止网络请求探测"),t(i,true);return}let c=u.toElement(r.data.responseText,true,true).querySelector(".flb");if(c){let p=(u.text(c)?.trim()).endsWith("……[离线]");t(i,p);}else t(i,true);}},showUserLevel(){b.info("显示用户等级"),N(".pls.favatar:not([data-show-user-level])").forEach(e=>{e.setAttribute("data-show-user-level","true");let t="0级",n=e.querySelector(".tns tr"),a=e.querySelector("p em").innerText,i=document.createElement("td");switch(i.setAttribute("style","border-left: 1px solid #e3e3e3;"),a){case "幼儿园":case "初级工程师":t="1级";break;case "小学生":case "中级工程师":t="2级";break;case "初中生":case "高级工程师":t="3级";break;case "高中生":case "专家":t="4级";break;case "大学生":case "高级专家":t="5级";break;case "硕士生":case "资深专家":t="6级";break;case "博士生":case "实习版主":case "版主":case "审核员":case "研究员":t="7级";break;case "博士后":case "超级版主":case "网站编辑":case "高级研究员":case "荣誉开发者":t="8级";break;case "管理员":case "信息监察员":case "资深研究员":t="9级";break}u.html(i,`<p><a class="dj">${t}</a></p>Lv`),n.appendChild(i);});},hideBottomInfoBlock(){return b.info("隐藏底部信息块"),W(`
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
		`)}},at={init(){u.onReady(()=>{A.execMenuOnce("mt-guide-beautifyPage",()=>{this.beautifyPage();});});},beautifyPage(){b.info("页面美化"),W(`
		.xst{font-size:15px}
		td.author_img{width:50px;padding:15px 0}
		td.author_img img{width:40px;height:40px;border-radius:50%}
		.list_author{margin-top:2px;color:#999;font-size:12px}
		.bankuai_tu_by a{color:#999!important}
		.bankuai_tu_by img{height:16px;margin:1px 1px 0 0;vertical-align:top}
		tbody a:hover{text-decoration:none;color:#3498db}
		.byg_th_align em+a{margin-right:5px}
	`),N(".bm_c table tbody").forEach(e=>{let t=e.querySelector("th.common"),n=u.html(t),a=t.querySelectorAll("a")[0].getAttribute("href"),i=null,s=e.querySelector("td.by>cite>a").getAttribute("href").match(/uid-(\d+)/)[1],r=`
			<td class="author_img">
				<a href="space-uid-${s}.html" c="1" mid="${i}">
					<img src="${$.getAvatar(s,"middle")}">
				</a>
			</td>
			<th colspan="3" class="new byg_th">
				<div class="byg_th_align">
					<em>[${e.querySelector("tr>td.by>a").outerHTML}]</em>
					${n}
				</div>
				<div class="list_author cl">
					<span class="z">作者:&nbsp;
						${e.querySelectorAll("td.by>cite>a")[0].innerHTML}
						${e.querySelectorAll("td.by>em>span")[0].innerHTML}
					</span>
					<span class="z pipe">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
					<span class="z">最后发表:&nbsp;
						${e.querySelectorAll("td.by>cite>a")[1].innerHTML}&nbsp;&nbsp;&nbsp;
						${e.querySelectorAll("td.by>em>a")[0].innerHTML}
					</span>
					<span class="y bankuai_tu_by">
						<a href="${a}">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACOUlEQVRYR+1X0XETMRDdtfRP0gFUgG9O+iZUAKmApAJMBZgKMBUQKohTQcy3dHOmApIOzL/lZTbc3eh0ki/kfMkww37Zlkbv7e7bJxnhiQOfGB/+HQJlWR45594AwAkAvAWAo6B6GwBYAsBKCHGVZRl/743eCjDwbrd7T0SzCGgKYIOIi8lk8qWPyF4C1lrO9OtfAIeEuArnSimuTDSSBIqiOCMiBh8ciPghz/NF7KAogUOC16CIeJ7n+UVIokPAGHOCiNeD044cQESvtdYrf6lDwFq7BoCXIxFYa62zJIFKdJdjgHtnnvqibFXAWss9ejcygW9KqbNGGz6YtZbH5tnIBDZKqeMUAQrBieiT1noemYwfQgj2CXDO8Zw3uqkVb4yZI+LH8EylVFP55kNZllPnXLlvszFmhYiveI8/20VRzIjoM/9ORN+11mzXd2Gt7SQlhMiyLGOxty+j2OZ6dKq74Kfnikul1GkFwhXge4JjI4R4wRacGuloBVJsq0N5dqehJRPRnywQec0P1hKvNZXwF5ME/BKPKMQrpdSddjotGMOCw0RCS275QNXnmxFH8VYIMfWv6I4V+4oeoQ0tF+y0wBsdX9WH4tFywKgG6h+rVrDyD3UpRcGTFfAqMfhuqJ00Vca9T7IhbwN2RCnlrHa8xyJwyy9jIlqGD4+DEOCsAGAupbzZbrfP/UOllOu+F3CMxN4WeMb0CxFnsTfd0BHp08CcAaSUi4dkdx9yvX9M7nPIkD3/CfwGBboJMIftEqkAAAAASUVORK5CYII=" />${e.querySelectorAll("td.num>a")[0].innerText}
						</a>&nbsp;
					</span>
					<span class="y bankuai_tu_by" style="margin-right: 20px">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACVElEQVRYR+1W3W3bQAwmTb83GzSdoDnr7rn2BukETSeoO0HtCdpO0GSCeoPYzzrhnA3sDZJ3yywYSIIk352sOIBRIHwTxCM/kh9/EM4seGb/8Abg/8mAc+4yz/NPAHANAFcAcNnizwYA1gCwIKKVUkq+O6UzA4XjHwBw02mtqXBLRPMuIFEAaZrOEFGcv1gQcZYkyTxkwAvAOXex2+3uEVFSfbIw83o4HE6UUo9tYwcAnHNXeZ7/9dS4/nYrtUbE5zozs/BBuPE+gnZDRAKiwY0GgCMif0LEaZIktz5HWZbdMPMvAHjn++/LRAOAtVZY/DEQxRMRjZVSohOUIoPLGAhjjCoNVACstYL8W5AsiF/bkadpOiYiHo1Gq/q7IhN/Ijh/a62n8v8ZgBhCxPvIg63Wuup7D0+kvp/r2bHWSq2DnGDmiTFmWQJYIqIMmZBUiEUhYHyjtf5QGujKKAAstdYTtNYKe4X1QUHE70mSSImi2SqjEr0sy6bM/DNmV/TPD6CI6jVK0OBJVwmYeWWMGR9LwkZ9CxIuaiTbEtF1HxISkRL9k9tQMihs7tOGzDw3xsyqNqwxNzaIHotReswgkpa+CBDwQWtd7ZiDUZznuUQTmoayTKZa6zuf8WIACfODzotpWi0l3zKSw0NARBcLMzeWESJKO7ePlDrOh7bzgxKU2rKUOjIRa2/fP6/zIIDSwmscJHXC+ZAde5IJY7/0DPuOiGYnnWR1h3Ib7vf7MTOXR2mbI3KkrBFxMRgMFr7r50UZ6Bl1b/XOEvS22PPBG4CzZ+AfrntRcuAjU2wAAAAASUVORK5CYII=" />${e.querySelectorAll("td.num>em")[0].innerText}
					</span>
				</div>
			</th>
			`;u.html(e,r);});}},Le=function(e,t,n,a,i,o,s,r,l,c){const d={text:e,type:"button",attributes:{},props:{},description:t,buttonIcon:a,buttonIsRightIcon:i,buttonIconIsLoading:o,buttonType:s,buttonText:n,callback(p){typeof r=="function"&&r(p);},afterAddToUListCallBack:l};return Reflect.set(d.attributes,Ce,()=>{d.disable=false;}),d},De=function(e,t,n,a,i,o="",s="text",r,l){const c={text:e,type:"input",inputType:s,attributes:{},props:{},description:a,placeholder:o,afterAddToUListCallBack:r,getValue(){return this.props[I].get(t,n)},callback(d,p){d.target.validity.valid,this.props[I].set(t,p);}};return Reflect.set(c.attributes,J,t),Reflect.set(c.attributes,X,n),de.initComponentsStorageApi("input",c,{get(d,p){return A.getValue(d,p)},set(d,p){A.setValue(d,p);}}),c},Ve=function(e,t,n,a,i,o="",s,r){const l={text:e,type:"input",inputType:"number",attributes:{},props:{},description:a,placeholder:o,afterAddToUListCallBack:s,getValue(){return this.props[I].get(t,n)},callback(c,d,p){this.props[I].set(t,d);}};return Reflect.set(l.attributes,J,t),Reflect.set(l.attributes,X,n),de.initComponentsStorageApi("input",l,{get(c,d){return A.getValue(c,d)},set(c,d){A.setValue(c,d);}}),l},Oe=function(e,t,n,a,i,o){const s={type:"own",attributes:{},props:{},createLIElement:e,afterAddToUListCallBack:o};return Reflect.set(s.attributes,Ce,()=>false),typeof n=="object"&&n!==null&&Reflect.set(s.attributes,$e,n),s},Be=function(e,t,n,a,i,o,s){const r={text:e,type:"select",description:o,attributes:{},props:{},getValue(){return this.props[I].get(t,n)},callback(l){if(l==null)return;const c=l.value;if(b.info(`选择：${l.text}`),typeof i=="function"&&i(l))return;this.props[I].set(t,c);},data:a};return Reflect.set(r.attributes,J,t),Reflect.set(r.attributes,X,n),de.initComponentsStorageApi("select",r,{get(l,c){return A.getValue(l,c)},set(l,c){A.setValue(l,c);}}),r},ve=function(e,t,n,a,i,o="",s,r){const l={text:e,type:"textarea",attributes:{},props:{},description:a,placeholder:o,disabled:s,getValue(){const d=this.props[I].get(t,n);return Array.isArray(d)?d.join(`
`):d},callback(c,d){this.props[I].set(t,d);}};return Reflect.set(l.attributes,J,t),Reflect.set(l.attributes,X,n),de.initComponentsStorageApi("switch",l,{get(c,d){return A.getValue(c,d)},set(c,d){A.setValue(c,d);}}),l},de={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new re.Dictionary),this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t);},initComponentsStorageApi(e,t,n){let a;this.hasStorageApi(e)?a=this.getStorageApi(e):a=n,this.setComponentsStorageApiProperty(t,a);},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,I,t);}},V=function(e,t,n=false,a,i,o,s,r,l){const c={text:e,type:"switch",description:i,disabled:s,attributes:{},props:{},getValue(){return this.props[I].get(t,n)},callback(d,p){const m=!!p;b.success(`${m?"开启":"关闭"} ${e}`),this.props[I].set(t,m);},afterAddToUListCallBack:(...d)=>{}};return Reflect.set(c.attributes,J,t),Reflect.set(c.attributes,X,n),de.initComponentsStorageApi("switch",c,{get(d,p){return A.getValue(d,p)},set(d,p){A.setValue(d,p);}}),c};class Ne{option;constructor(t){this.option=t;}async showView(){const t=S.confirm({title:{text:this.option.title,position:"center"},content:{text:`
        <form class="rule-form-container" onsubmit="return false">
            <ul class="rule-form-ulist"></ul>
            <input type="submit" style="display: none;" />
        </form>
        `,html:true},btn:g.assign({ok:{callback:async()=>{await o();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
      ${S.config.cssText.panelCSS}
      
      .rule-form-container {
          
      }
      .rule-form-container li{
        display: flex;
        align-items: flex-start;
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

      ${this.option?.style??""}
      `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),n=t.$shadowRoot.querySelector(".rule-form-container");t.$shadowRoot.querySelector("input[type=submit]");const a=t.$shadowRoot.querySelector(".rule-form-ulist"),i=await this.option.getView(await this.option.data());u.append(a,i);const o=async()=>{(await this.option.onsubmit(n,await this.option.data())).success&&(t.close(),typeof this.option.dialogCloseCallBack=="function"&&await this.option.dialogCloseCallBack(true));};return t}}const it={$el:{isFilterElementHTML:[]},$key:{STORAGE_KEY:"mt-post-comment-filter-rule"},init(){if(this.registerMenu(),le.isPost()){let e=this.getData();if(!e.enable)return;let t=new g.LockFunction(()=>{this.runFilter(e);});g.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{t.run();}});}},registerMenu(){ue.add({key:"comment-filter",text:"⚙ 评论过滤器",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showView();}});},runFilter(e){let t=function(a){for(const i of e.userBlackList)if(i==a.userName||i==a.userUID)return b.success("评论过滤器：黑名单用户",a),true;return  false},n=function(a){for(const i of e.userWhiteList)if(i===a.userName||i===a.userUID)return b.success("评论过滤器：白名单用户",a),true;return  false};N(".comiis_vrx").forEach(a=>{if(a.querySelector(".plc .pti .authi .show"))return;let i=a.querySelector(".pls .authi a"),o={userName:i?.innerText||"",userUID:i?.href?.match(be.uid)?.[2]?.trim()||"",content:a.querySelector(".plc td.t_f")?.innerText?.trim()||"",isAuthor:false};if(!n(o)){if(e.replyFlag&&a.querySelector(".quote")){let s=a.querySelector(".quote");this.$el.isFilterElementHTML.push(s.outerHTML),s.remove();}if(!(o.isAuthor&&!e.avatarFlag)){if(t(o)){this.$el.isFilterElementHTML.push(a.outerHTML),a.remove();return}if(!(typeof e.minLength=="number"&&e.minLength>o.content.length)&&!(typeof e.keywordLength=="number"&&e.keywordLength<o.content.length))for(const s of e.keywords){if(typeof s!="string")continue;let r=new RegExp(s);if(o.content.match(r)){console.log("评论过滤器：",o),this.$el.isFilterElementHTML.push(a.outerHTML),a.remove();return}}}}});},showView(){const e=this,t=function(i){return {get(o,s){let r=e.getData(),l=Reflect.get(r,o,s);return (o==="keywords"||o==="userWhiteList"||o==="userBlackList")&&(l=l.join(`
`)),l},set(o,s){(o==="keywords"||o==="userWhiteList"||o==="userBlackList")&&(s=s.split(`
`).filter(r=>r.trim()!="")),Reflect.set(i,o,s),e.setData(i);}}},n=S.fn.PanelHandlerComponents();new Ne({title:"评论过滤器",data:()=>this.getData(),getView:i=>{const o=document.createDocumentFragment(),s=V("启用","enable",true);Reflect.set(s.props,I,t(i));const r=n.createSectionContainerItem_switch(s).$el,l=V("处理回复引用","replyFlag",false,void 0,"移除引用");Reflect.set(l.props,I,t(i));const c=n.createSectionContainerItem_switch(l).$el,d=V("处理作者评论","avatarFlag",false);Reflect.set(d.props,I,t(i));const p=n.createSectionContainerItem_switch(d).$el,m=V('处理从"搜索页面"或"我的帖子提醒页面"进入的网站',"viewthreadFlag",false);Reflect.set(m.props,I,t(i));const w=n.createSectionContainerItem_switch(m).$el,h=Ve("匹配的评论内容长度最小值","minLength",5,"小于此长度的评论就算关键字匹配成功了也不会被排除");Reflect.set(h.props,I,t(i));const f=n.createSectionContainerItem_input(h).$el,y=Ve("匹配的评论内容长度最大值","keywordLength",8,"大于此长度的评论就算关键字匹配成功了也不会被排除");Reflect.set(y.props,I,t(i));const v=n.createSectionContainerItem_input(y).$el,C=ve("评论关键字","keywords","","多个评论关键字换行分割");Reflect.set(C.props,I,t(i));const _=n.createSectionContainerItem_textarea(C).$el,k=ve("黑名单用户","userBlackList","","多个用户换行分割");Reflect.set(k.props,I,t(i));const E=n.createSectionContainerItem_textarea(k).$el,R=ve("白名单用户","userWhiteList","","多个用户换行分割");Reflect.set(R.props,I,t(i));const O=n.createSectionContainerItem_textarea(R).$el;return o.append(r,c,p,w,f,v,_,E,O),o},btn:{merge:true,position:"space-between",ok:{enable:false},cancel:{enable:true,text:"关闭"},other:{enable:true,text:`查看已过滤（${this.$el.isFilterElementHTML.length}）`,type:"primary",callback:(i,o)=>{S.alert({title:{text:"评论过滤器-已过滤",position:"center"},content:{text:`
                ${Array.from(N('link[rel="stylesheet"]')).map(s=>s.outerHTML).join(`
`)}

                ${this.$el.isFilterElementHTML.join(`
`)}
                `,html:true},style:`
							.plhin{
								width: 100%;
							}
							td.plc .pi{
								height: auto;
							}
							`,width:"88vw",height:"80vh"});}}},dialogCloseCallBack(i){},onsubmit:(i,o)=>({success:true,data:o}),style:`
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
      `}).showView();},getTemplateData(){return {enable:true,avatarFlag:false,replyFlag:false,viewthreadFlag:false,minLength:5,keywordLength:8,keywords:[],userBlackList:[],userWhiteList:[]}},getData(){return ne(this.$key.STORAGE_KEY,this.getTemplateData())},setData(e){Z(this.$key.STORAGE_KEY,e);}};class ot{option;constructor(t){this.option=t;}async showView(t){const n=S.confirm({title:{text:this.option.title,position:"center"},content:{text:`
        <div class="rule-view-search-container">
          <div class="pops-panel-select pops-user-select-none" data-mode="native" style="min-width: 50px;">
            <select class="select-rule-status">
            </select>
          </div>
          <div class="pops-panel-select pops-user-select-none" data-mode="native" style="min-width: 50px;">
            <select class="select-rule-value">
            </select>
          </div>
          <div class="pops-panel-input pops-user-select-none">
            <div class="pops-panel-input_inner">
                <input type="text" placeholder="">
            </div>
          </div>
        </div>
        <div class="rule-view-container"></div>
        `,html:true},style:`
      ${S.config.cssText.panelCSS}

      .rule-view-search-container{
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 4px 8px;
      }
      .rule-view-search-container .pops-panel-select{
        min-width: fit-content;
        max-width: 60px;
      }
      .rule-view-search-container .pops-panel-select select{
        width: 100%;
        min-width: auto;
      }
      .rule-view-search-container .pops-panel-input{
        width: 100%;
      }


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
      `,btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async()=>{this.showEditView(false,await this.option.getAddData(),n.$shadowRoot);}},close:{enable:true,callback(){n.close();}},cancel:{enable:false},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:()=>{const r=S.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async()=>{if(b.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){x.error("清理失败");return}else x.success("清理成功");await this.updateDeleteAllBtnText(n.$shadowRoot),this.clearContent(n.$shadowRoot),r.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh"}),{$searchContainer:a,$externalSelect:i,$ruleValueSelect:o,$searchInput:s}=this.parseViewElement(n.$shadowRoot);if(this.option.bottomControls?.filter?.enable){let r=null,l=null;Array.isArray(this.option.bottomControls?.filter?.option)&&u.append(i,this.option.bottomControls?.filter?.option.map(p=>{const m=u.createElement("option",{innerText:p.name});return Reflect.set(m,"data-value",p),m})),Array.isArray(this.option.bottomControls?.filter?.inputOption)&&u.append(o,this.option.bottomControls?.filter?.inputOption.map(p=>{const m=u.createElement("option",{innerText:p.name});return Reflect.set(m,"data-value",p),m})),u.on(i,"change",async()=>{const p=i[i.selectedIndex],m=Reflect.get(p,"data-value");typeof m?.selectedCallBack=="function"&&m.selectedCallBack(m),r=m,await d(false);}),u.on(o,"change",async()=>{const p=o[o.selectedIndex],m=Reflect.get(p,"data-value");typeof m?.selectedCallBack=="function"&&m.selectedCallBack(m),l=m,await d(false);}),u.onInput(s,g.debounce(async()=>{await d(false);}));const c=()=>{const p=i[i.selectedIndex];r=Reflect.get(p,"data-value");const m=o[o.selectedIndex];l=Reflect.get(m,"data-value");},d=async p=>{this.clearContent(n.$shadowRoot),p&&c();const m=await this.option.data(),w=[],h=u.val(s);for(let f=0;f<m.length;f++){const y=m[f];if(typeof t=="function"){const v=await t(y);if(typeof v=="boolean"&&!v)continue}if(r){const v=await r?.filterCallBack?.(y);if(typeof v=="boolean"&&!v)continue}if(l){let v=true;if(h===""?v=true:v=false,v||(v=await l?.filterCallBack?.(y,h)),!v)continue}w.push(y);}await this.appendRuleItemElement(n.$shadowRoot,w);};if(typeof t=="object"&&t!=null){let p;typeof t.external=="number"?p=t.external:p=Array.from(i.options).findIndex(w=>Reflect.get(w,"data-value").value===t.external),p!==-1&&(i.selectedIndex=p);let m;typeof t.rule=="number"?m=t.rule:m=Array.from(o.options).findIndex(w=>Reflect.get(w,"data-value").value===t.rule),m!==-1&&(o.selectedIndex=m);}await d(true);}else u.hide(a,false);}showEditView(t,n,a,i,o,s){let r=async c=>{if(c){if(typeof s=="function"){let d=await this.option.getData(n);s(d);}}else if(t||await this.option.deleteData(n),typeof o=="function"){let d=await this.option.getData(n);o(d);}};new Ne({title:t?"编辑":"添加",data:()=>n,dialogCloseCallBack:r,getView:async c=>await this.option.itemControls.edit.getView(c,t),btn:{ok:{enable:true,text:t?"修改":"添加"},cancel:{callback:async c=>{c.close(),await r(false);}},close:{callback:async c=>{c.close(),await r(false);}}},onsubmit:async(c,d)=>{let p=await this.option.itemControls.edit.onsubmit(c,t,d);return p.success?t?(x.success("修改成功"),a&&await this.updateRuleItemElement(p.data,i,a)):a&&await this.appendRuleItemElement(a,p.data):t&&b.error("修改失败"),p},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(t){const n=t.querySelector(".rule-view-container"),a=t.querySelector(".pops-confirm-btn button.pops-confirm-btn-other"),i=t.querySelector(".rule-view-search-container"),o=i.querySelector(".pops-panel-select .select-rule-status"),s=i.querySelector(".pops-panel-select .select-rule-value"),r=i.querySelector(".pops-panel-input input");return {$container:n,$deleteBtn:a,$searchContainer:i,$externalSelect:o,$ruleValueSelect:s,$searchInput:r}}parseRuleItemElement(t){const n=t.querySelector(".rule-controls-enable"),a=n.querySelector(".pops-panel-switch"),i=n.querySelector(".pops-panel-switch__input"),o=n.querySelector(".pops-panel-switch__core"),s=t.querySelector(".rule-controls-edit"),r=t.querySelector(".rule-controls-delete");return {$enable:n,$enableSwitch:a,$enableSwitchInput:i,$enableSwitchCore:o,$edit:s,$delete:r,data:Reflect.get(t,"data-rule")}}async createRuleItemElement(t,n){const a=await this.option.getDataItemName(t),i=u.createElement("div",{className:"rule-item",innerHTML:`
			<div class="rule-name">${a}</div>
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
					${S.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${S.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(i,"data-rule",t);const o="pops-panel-switch-is-checked",{$enable:s,$enableSwitch:r,$enableSwitchCore:l,$enableSwitchInput:c,$delete:d,$edit:p}=this.parseRuleItemElement(i);return this.option.itemControls.enable.enable?(u.on(l,"click",async()=>{let m=false;r.classList.contains(o)?(r.classList.remove(o),m=false):(r.classList.add(o),m=true),c.checked=m,await this.option.itemControls.enable.callback(t,m);}),await this.option.itemControls.enable.getEnable(t)&&r.classList.add(o)):s.remove(),this.option.itemControls.edit.enable?u.on(p,"click",m=>{u.preventEvent(m),this.showEditView(true,t,n,i,w=>{t=null,t=w;});}):p.remove(),this.option.itemControls.delete.enable?u.on(d,"click",m=>{u.preventEvent(m);const w=S.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async()=>{b.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(t)?(x.success("成功删除该数据"),i.remove(),await this.updateDeleteAllBtnText(n),w.close()):x.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):d.remove(),i}async appendRuleItemElement(t,n){const{$container:a}=this.parseViewElement(t),i=[],o=Array.isArray(n)?n:[n];for(let s=0;s<o.length;s++){const r=o[s],l=await this.createRuleItemElement(r,t);i.push(l);}return u.append(a,i),await this.updateDeleteAllBtnText(t),i}async updateRuleContaienrElement(t){this.clearContent(t);const n=await this.option.data();await this.appendRuleItemElement(t,n),await this.updateDeleteAllBtnText(t);}async updateRuleItemElement(t,n,a){const i=await this.createRuleItemElement(t,a);n.after(i),n.remove();}clearContent(t){const{$container:n}=this.parseViewElement(t);u.html(n,"");}setDeleteBtnText(t,n,a=false){const{$deleteBtn:i}=this.parseViewElement(t);a?u.html(i,n):u.text(i,n);}async updateDeleteAllBtnText(t){let n=await this.option.data();this.setDeleteBtnText(t,`清空所有(${n.length})`);}}const rt={$key:{STORAGE_KEY:"mt-productListingReminder-rule"},init(){this.registerMenu(),this.runRule();},registerMenu(){ue.add({key:"product-reminder",text:"⚙ 商品上架提醒",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showView();}});},async runRule(){async function e(){let a=await P.get("/keke_integralmall-keke_integralmall.html",{allowInterceptConfig:false,headers:{"User-Agent":g.getRandomAndroidUA()}});if(!a.status){x.error("【积分商城】获取数据失败");return}let i=[];return u.toElement(a.data.responseText,true,true).querySelectorAll(".task-list-wrapper li.col-xs-12").forEach(s=>{i.push({name:u.text(s.querySelector(".mall-info a > *:first-child"))||u.text(s.querySelector(".mall-info a")),price:u.text(s.querySelector(".mall-info span.discount-price i")),endTime:u.text(s.querySelector(".mall-info #time_hz span.time")),remainingQuantity:parseInt(s.querySelector(".mall-info .mall-count .count-r")?.innerText?.replace(/仅剩|件/gi,"")||"0")});}),i}if(le.isPointsMall())return;let t=this.getData();if(!t.length)return;let n=await e();if(n){for(const a of n)for(const i of t)if(i.enable&&a.name.match(new RegExp(i.productName,"i"))&&!isNaN(a.remainingQuantity)&&a.remainingQuantity>0){b.success("成功匹配对应商品",i,a),S.confirm({title:{text:"积分商城提醒",position:"center"},content:{text:`<br />
                            您设置的商品已上架在积分商城中，当前售价 ${a.price}金币，仅剩${a.remainingQuantity}件，是否前往购买？
                            <a style="color: red !important;">(如需关闭提醒，请删除该关键字)</a>
                            <br />`,html:true},btn:{merge:true,position:"space-between",other:{enable:true,type:"danger",text:"删除提醒",callback:()=>{this.deleteData(i)?x.success("删除成功"):x.error("删除失败");}},ok:{text:"前往购买",callback:()=>{window.location.href=`${window.location.origin}/keke_integralmall-keke_integralmall.html`;}}},width:"300px",height:"300px"});return}}},getTemplateData(){return {uuid:g.generateUUID(),enable:true,name:"",productName:""}},showView(){let e=S.fn.PanelHandlerComponents();function t(a){return {get(i,o){return a[i]??o},set(i,o){a[i]=o;}}}new ot({title:"商品上架提醒",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:a=>a.name,updateData:a=>this.updateData(a),deleteData:a=>this.deleteData(a),getData:a=>this.getData().find(s=>s.uuid===a.uuid)??a,itemControls:{enable:{enable:true,getEnable(a){return a.enable},callback:(a,i)=>{a.enable=i,this.updateData(a);}},edit:{enable:true,getView:(a,i)=>{let o=document.createDocumentFragment();i||(a=this.getTemplateData());let s=V("启用","enable",true);Reflect.set(s.props,I,t(a));let r=e.createSectionContainerItem_switch(s).$el,l=De("规则名称","name","","",void 0,"必填");Reflect.set(l.props,I,t(a));let c=e.createSectionContainerItem_input(l).$el,d=De("商品名","productName","","",void 0,"可正则，需手动转义");Reflect.set(d.props,I,t(a));let p=e.createSectionContainerItem_input(d).$el;return o.append(r,c,p),o},onsubmit:(a,i,o)=>{let s=a.querySelectorAll(".rule-form-ulist > li"),r=this.getTemplateData();return i&&(r.uuid=o.uuid),s.forEach(l=>{let c=Reflect.get(l,e.$data.nodeStoreConfigKey),d=Reflect.get(c,"attributes"),p=Reflect.get(l,I),m=Reflect.get(d,J),w=Reflect.get(d,X),h=p.get(m,w);Reflect.has(r,m)?Reflect.set(r,m,h):b.error(`${m}不在数据中`);}),r.name.trim()===""?(x.error("规则名称不能为空"),{success:false,data:r}):i?{success:this.updateData(r),data:r}:{success:this.addData(r),data:r}}},delete:{enable:true,deleteCallBack:a=>this.deleteData(a)}},bottomControls:{filter:{enable:true,option:[{name:"无",value:"",filterCallBack(a){return  true}},{name:"启用",value:"enable",filterCallBack(a){return a.enable}},{name:"未启用",value:"notEnable",filterCallBack(a){return !a.enable}}],inputOption:[{name:"规则名",value:"name",filterCallBack(a,i){return !!a.name.match(i)}},{name:"商品名",value:"productName",filterCallBack(a,i){return !!a.productName.match(i)}}]}}}).showView();},getData(){return ne(this.$key.STORAGE_KEY,[])},setData(e){Z(this.$key.STORAGE_KEY,e);},addData(e){let t=this.getData();return t.findIndex(a=>a.uuid==e.uuid)===-1?(t.push(e),Z(this.$key.STORAGE_KEY,t),true):false},updateData(e){let t=this.getData(),n=t.findIndex(i=>i.uuid==e.uuid),a=false;return n!==-1&&(a=true,t[n]=e),this.setData(t),a},deleteData(e){let t=this.getData(),n=t.findIndex(i=>i.uuid==e.uuid),a=false;return n!==-1&&(a=true,t.splice(n,1)),this.setData(t),a},clearData(){ce(this.$key.STORAGE_KEY);}},st=`.pops-confirm-content {
  display: flex;
  flex-direction: column;
}
.blackhome-user-filter input {
  width: -moz-available;
  width: -webkit-fill-available;
  height: 30px;
  margin: 8px 20px;
  border: 0;
  border-bottom: 1px solid;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.blackhome-user-filter input:focus-within {
  outline: none;
}
.blackhome-user-list {
  flex: 1;
  overflow-y: auto;
}
.blackhome-user-list .blackhome-user-item {
  margin: 15px 10px;
  padding: 10px;
  border-radius: 8px;
  box-shadow:
    0 0 0.6rem #c8d0e7,
    -0.2rem -0.2rem 0.5rem #fff;
}
.blackhome-user {
  display: flex;
}
.blackhome-user img {
  width: 45px;
  height: 45px;
  border-radius: 45px;
}
.blackhome-user-info {
  margin-left: 10px;
}
.blackhome-user-info p:nth-child(1) {
  margin-bottom: 5px;
}
.blackhome-user-info p:nth-child(2) {
  font-size: 14px;
}
.blackhome-user-action {
  display: flex;
  margin: 10px 0;
}
.blackhome-user-action p:nth-child(1),
.blackhome-user-action p:nth-child(2) {
  border: 1px solid red;
  color: red;
  border-radius: 4px;
  padding: 2px 4px;
  font-weight: 500;
  font-size: 14px;
  place-self: center;
}
.blackhome-user-action p:nth-child(2) {
  border: 1px solid #ff4b4b;
  color: #ff4b4b;
  margin-left: 8px;
}
.blackhome-user-uuid {
  border: 1px solid #ff7600;
  color: #ff7600;
  border-radius: 4px;
  padding: 2px 4px;
  font-weight: 500;
  font-size: 14px;
  width: fit-content;
  width: -moz-fit-content;
  margin: 10px 0;
}
.blackhome-operator {
  padding: 10px;
  background-color: #efefef;
  border-radius: 6px;
}
.blackhome-operator-user {
  display: flex;
}
.blackhome-operator-user img {
  width: 35px;
  height: 35px;
  border-radius: 35px;
}
.blackhome-operator-user p {
  align-self: center;
  margin-left: 10px;
}
.blackhome-operator-user-info {
  margin: 10px 0;
  font-weight: 500;
}

@media screen and (min-width: 800px) {
  .blackhome-user-list {
    display: flex;
    flex-wrap: wrap;
  }
  .blackhome-user-list .blackhome-user-item {
    flex: 1 1 250px;
    max-width: calc(50% - 10px - 10px);
  }
}
`,lt={$data:{cid:""},init(){this.registerMenu();},registerMenu(){ue.add({key:"black-home",text:"⚙ 小黑屋",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showBlackHome();}});},async showBlackHome(){let e=x.loading("正在获取小黑屋名单中..."),t=await this.getBlackListInfo("");if(e.close(),!t)return;if(t.data.length===0){x.error("获取小黑屋名单为空");return}this.$data.cid=t.next_cid;let n=S.confirm({title:{text:"小黑屋名单",position:"center"},content:{text:`
                <div class="blackhome-user-filter">
                    <input placeholder="过滤用户名/操作人员/UID(可正则)">
                </div>
                <div class="blackhome-user-list"></div>
                `,html:true},btn:{ok:{text:"下一页",callback:async()=>{let r=x.loading("正在获取小黑屋名单中...");b.info("下一页的cid: ",this.$data.cid);let l=await this.getBlackListInfo(this.$data.cid);r.close(),l&&(this.$data.cid=l.next_cid,l.data.forEach(c=>{let d=this.createListViewItem(c);a.appendChild(d);}),l.data.length===0?x.error("获取小黑屋名单为空"):x.success(`成功获取 ${l.data.length}条数据`),u.emit(i,"input"));}},cancel:{text:"关闭"}},width:H.settingBig.width,height:H.settingBig.height,style:st}),a=n.$shadowRoot.querySelector(".blackhome-user-list"),i=n.$shadowRoot.querySelector(".blackhome-user-filter input");t.data.forEach(r=>{let l=this.createListViewItem(r);a.appendChild(l);}),x.success(`成功获取 ${t.data.length}条数据`);let o=false;u.on(i,["input","propertychange"],g.debounce(()=>{let r=i.value.trim();if(!o){if(o=true,r==""){n.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(l=>{l.removeAttribute("style");}),o=false;return}n.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(l=>{l.getAttribute("data-name").match(new RegExp(r,"ig"))||l.getAttribute("data-uid").trim().match(new RegExp(r,"ig"))||l.getAttribute("data-operator").match(new RegExp(r,"ig"))?l.removeAttribute("style"):l.setAttribute("style","display:none;");}),o=false;}}));let s=await this.getBlackListInfo(this.$data.cid);s&&(this.$data.cid=s.next_cid);},async getBlackListInfo(e=""){let t={mod:"misc",action:"showdarkroom",cid:e,ajaxdata:"json"},n=await P.get(`/forum.php?${g.toSearchParamsStr(t)}`,{headers:{"User-Agent":g.getRandomPCUA()},responseType:"json"});if(!n.status)return;let a=g.toJSON(n.data.responseText),i=a.message.split("|"),o=i[i.length-1],s=g.parseObjectToArray(a.data),r=[],l=[];return s.forEach(c=>{let d=c.dateline.match(/([0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]*[0-9]{1,2}:[0-9]{1,2})/g);if(d==null){let p=parseInt((Date.now()/1e3).toString()),m=0,w=c.dateline.match(/([0-9]+|半)[\s\S]*秒前/),h=c.dateline.match(/([0-9]+|半)[\s\S]*分钟前/),f=c.dateline.match(/([0-9]+|半)[\s\S]*小时前/),y=c.dateline.match(/昨天[\s\S]*(\d{2}):(\d{2})/),v=c.dateline.match(/前天[\s\S]*(\d{2}):(\d{2})/),C=c.dateline.match(/([0-9]+|半)[\s\S]*天前/);if(w)w=w[w.length-1],w=w.replace(/半/g,.5),w=parseFloat(w),m=p-w;else if(h)h=h[h.length-1],h=h.replace(/半/g,.5),h=parseFloat(h),m=p-h*60;else if(f)f=f[f.length-1],f=f.replace(/半/g,.5),f=parseFloat(f),m=p-f*60*60;else if(y){let _=y[1],k=y[2];m=p-86400-parseInt(_)*3600-parseInt(k)*60;}else if(v){let _=v[1],k=v[2];m=p-86400*2-parseInt(_)*3600-parseInt(k)*60;}else C&&(C=C[C.length-1],C=C.replace(/半/g,.5),C=parseFloat(C),m=p-C*60*60*24);c.time=parseInt(m.toString())*1e3,r=r.concat(c);return}else d=d[0];c.time=g.formatToTimeStamp(d),r=r.concat(c);}),g.sortListByProperty(r,"time"),g.sortListByProperty(l,"time",false),r=r.concat(l),{next_cid:o,data:r}},createListViewItem(e){let t=u.createElement("div",{className:"blackhome-user-item",innerHTML:`
                <div class="blackhome-user-avatar">
                    <div class="blackhome-user">
                    <img src="${$.getAvatar(e.uid,"big")}" loading="lazy">
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
                        <img loading="lazy" src="${$.getAvatar(e.operatorid,"big")}">
                        <p>${e.operator}</p>
                    </div>
                    <div class="blackhome-operator-user-info">
                    ${e.reason}
                    </div>
                    </div>
                </div>
                `},{"data-name":e.username,"data-uid":e.uid,"data-operator":e.operator,"data-operator-uid":e.operatorid});return u.on(t,"click",".blackhome-user img",function(){window.open(`home.php?mod=space&uid=${e.uid}&do=profile`,"_blank");}),u.on(t,"click",".blackhome-operator-user img",function(){window.open(`home.php?mod=space&uid=${e.operatorid}&do=profile`,"_blank");}),t}},ct=`.pops-alert-content {
  display: flex;
  flex-direction: column;
}
.pops-alert-content > .online-user-info {
  text-align: center;
  padding: 0px 6px;
}
.online-user-filter input {
  width: -webkit-fill-available;
  width: -moz-available;
  height: 30px;
  margin: 8px 20px;
  border: 0;
  border-bottom: 1px solid;
}
.online-user-filter input:focus-within {
  outline: none;
}
.online-user-list {
  flex: 1;
  overflow-y: auto;
}
.online-user-list li {
  margin: 18px 0;
}
.online-user {
  display: flex;
  margin: 2px 20px;
  align-items: center;
}
.online-user img[data-avatar] {
  width: 45px;
  height: 45px;
  border-radius: 45px;
}
.online-user-list .online-user-info {
  margin: 2px 14px;
}
.online-user-list .online-user-info p[data-name] {
  margin-bottom: 4px;
}
.online-user-list .online-user-info span[data-sf] {
  border-radius: 4px;
  padding: 2px 4px;
  font-weight: 500;
  font-size: 14px;
}
.online-user-list .online-user-info span[data-uid] {
  border: 1px solid #ff7600;
  color: #ff7600;
  border-radius: 4px;
  padding: 2px 4px;
  font-weight: 500;
  font-size: 14px;
  width: fit-content;
  width: -moz-fit-content;
  margin: 10px 0;
}
.online-user-list .online-user-info span[data-sf="会员"] {
  color: #88b500;
  border: 1px solid #88b500;
}
.online-user-list .online-user-info span[data-sf="版主"] {
  color: #2db5e3;
  border: 1px solid #2db5e3;
}
.online-user-list .online-user-info span[data-sf="超级版主"] {
  color: #e89e38;
  border: 1px solid #e89e38;
}
.online-user-list .online-user-info span[data-sf="管理员"] {
  color: #ff5416;
  border: 1px solid #ff5416;
}

@media screen and (min-width: 800px) {
  .online-user-list {
    display: flex;
    flex-wrap: wrap;
  }
  .online-user-list .online-item {
    flex: 1 1 250px;
  }
}
`,ut={$data:{},init(){this.registerMenu();},registerMenu(){ue.add({key:"online-user",text:"⚙ 在线用户",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showOnlineUser();}});},async showOnlineUser(){let e=x.loading("正在获取在线用户名单中..."),t=await this.getOnlineUserListInfo();if(e.close(),!t)return;let n=S.alert({title:{text:"在线用户",position:"center"},content:{text:`
                <div class="online-user-info">${t.totalOnline} 人在线 - ${t.onlineUser} 会员${t.invisibleUser==0?"":`(${t.invisibleUser}隐身)`} - ${t.noRegisterUser} 位游客</div>
                <div class="online-user-filter">
                    <input placeholder="过滤用户名/身份/UID(可正则)"></div>
                <div class="online-user-list"></div>
                `,html:true},btn:{ok:{text:"关闭",type:"default"}},width:H.settingBig.width,height:H.settingBig.height,style:ct}),a=n.$shadowRoot.querySelector(".online-user-list"),i=n.$shadowRoot.querySelector(".online-user-filter input");t.data.forEach(s=>{let r=this.createListViewItem(s);a.appendChild(r);}),x.success(`成功获取 ${t.data.length}条数据`);let o=false;q.on(i,["propertychange","input"],g.debounce(()=>{let s=i.value.trim();if(!o){if(o=true,s==""){n.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(r=>{r.removeAttribute("style");}),o=false;return}n.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(r=>{r.getAttribute("data-name").match(new RegExp(s,"ig"))||r.getAttribute("data-sf").match(new RegExp(s,"ig"))||r.getAttribute("data-uid").match(new RegExp(s,"ig"))?r.removeAttribute("style"):r.setAttribute("style","display:none;");}),o=false;}}));},async getOnlineUserListInfo(){let e={showoldetails:"yes"},t=await P.get(`/forum.php?${g.toSearchParamsStr(e)}`,{headers:{"User-Agent":g.getRandomPCUA()}});if(!t.status)return;let n=g.parseFromString(t.data.responseText,"text/html"),a={data:[],totalOnline:0,onlineUser:0,noRegisterUser:0,invisibleUser:0};n.querySelectorAll("#onlinelist ul li").forEach(s=>{let r=s.querySelector("a").getAttribute("href").match("uid-(.+?).html")[1],l=$.getAvatar(r,"middle"),c=s.querySelector("a").innerText,d="",p=s.querySelector("a").getAttribute("href"),m=s.querySelector("img").src;m.indexOf("online_member")!=-1?d="会员":m.indexOf("online_moderator")!=-1?d="版主":m.indexOf("online_supermod")!=-1?d="超级版主":m.indexOf("online_admin")!=-1?d="管理员":d="未知身份",a.data.push({uid:r,avatar:l,name:c,sf:d,space:p});});let o=n.querySelector("#online div.bm_h span.xs1").textContent;return a.totalOnline=g.parseInt(o.match(/([0-9]*)\s*人在线/i),0),a.onlineUser=g.parseInt(o.match(/([0-9]*)\s*会员/i),0),a.noRegisterUser=g.parseInt(o.match(/([0-9]*)\s*位游客/i),0),a.invisibleUser=g.parseInt(o.match(/([0-9]*)\s*隐身/i),0),a},createListViewItem(e){let t=q.createElement("div",{className:"online-item",innerHTML:`
                <div class="online-user">
                    <img data-avatar src="${e.avatar}" loading="lazy" class="online-user-avatar">
                    <div class="online-user-info">
                        <p data-name>${e.name}</p>
                        <span data-sf="${e.sf}">${e.sf}</span>
                        <span data-uid>UID: ${e.uid}</span>
                    </div>
                </div>
            `},{"data-name":e.name,"data-uid":e.uid,"data-sf":e.sf});return q.on(t,"click",".online-user-avatar",n=>{q.preventEvent(n),window.open(`home.php?mod=space&uid=${e.uid}&do=profile`,"_blank");}),t}},dt={$flag:{showUserUID_initCSS:false},init(){A.onceExec("mt-MTCommentFilter",()=>{it.init();}),le.isPost()?(b.info("Router: 帖子"),Fe.init()):le.isGuide()?(b.info("Router: 导读"),at.init()):b.error("Router: 未适配的链接 ==> "+window.location.href),u.onReady(()=>{A.onceExec("mt-MTProductListingReminder",()=>{rt.init();}),A.onceExec("mt-blackHome",()=>{lt.init();}),A.onceExec("mt-onlineUser",()=>{ut.init();}),A.execMenuOnce("mt-addLatestPostBtn",()=>this.addLatestPostBtn()),A.execMenu("mt-auto-sign",()=>{me.init();}),A.execMenu("mt-extend-cookie-expire",()=>{this.extendCookieExpire();}),le.isPostPublish_edit()||A.execMenuOnce("mt-link-text-to-hyperlink",()=>et());});},addLatestPostBtn(){b.info("新增【最新发表】");const e=u.createElement("li",{id:"latest_publication",innerHTML:`
				<a href="/forum.php?mod=guide&view=newthread" hidefocus="true" title="最新发表">最新发表</a>
			`}),t=e.querySelector("a");return u.append("#comiis_nv .wp.comiis_nvbox.cl ul",e),window.location.href.includes("/forum.php?mod=guide&view=newthread")&&(u.removeClass("#mn_forum_10","a"),u.css(t,"background",'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAADICAYAAAAk7PuyAAAAAXNSR0IArs4c6QAAAGFJREFUWEft1zESgCAQQ9HsVfb+d5RRlLHRVotHS5f5+YHKyymXiRAihKMISBDCNOInJHT39iTkcpkIYUcTCUKYkkKCEJBwTaY6cML5eiNGYiRGYrz9pqyDdbAOqxC/q8MApobR97qxnMwAAAAASUVORK5CYII=") repeat-x 50% -50px')),[e]},async extendCookieExpire(){b.info("延长cookie有效期");let e=await Ie.cookie.list({}),t=["_auth","_saltkey","_client_created","_client_token"];e.forEach(async n=>{if(n.session)return;let a=n.expirationDate,i=Date.now()/1e3;if(a<i)return;let o=3600*24*30;a-i>o||!t.find(r=>n.name.endsWith(r))||Ie.cookie.set({name:n.name,value:n.value,expirationDate:n.expirationDate+o}).then(()=>{b.info(`延长Cookie +30天成功：${n.name}`);}).catch(()=>{b.error(`延长Cookie +30天失败：${n.name}`);});});}},te={$upload:{small:false,middle:false,big:false},$data:{avatarInfo:{maxSize:2097152,small:{width:48,height:48},middle:{width:120,height:120},big:{width:200,height:250}}},$el:{$smallUpload:null,$middleUpload:null,$bigUpload:null,$smallStatus:null,$middleStatus:null,$bigStatus:null},$avatar:{get small(){return te.$el.$smallUpload.files[0]},get middle(){return te.$el.$middleUpload.files[0]},get big(){return te.$el.$bigUpload.files[0]}},init(){this.showView();},showView(){const e=this;let t=S.confirm({title:{text:"修改头像",position:"center"},content:{text:`
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
                `,html:true},btn:{ok:{text:"上传",callback:async()=>{if(!e.$upload.small){x.error("请上传小头像");return}if(!e.$upload.middle){x.error("请上传中头像");return}if(!e.$upload.big){x.error("请上传大头像");return}let n=x.loading("正在处理数据中...");try{let a=await this.getUploadUrl();if(a==null)return;let i=await $.getFormHash();if(i==null){x.error("获取formhash失败");return}let o={big:{base64:await g.parseFileToBase64(this.$avatar.big)},middle:{base64:await g.parseFileToBase64(this.$avatar.middle)},small:{base64:await g.parseFileToBase64(this.$avatar.small)}};Object.keys(o).forEach(l=>{let c=o[l];c.base64=c.base64.substring(c.base64.indexOf(",")+1);});let s=new FormData;s.append("Filedata",this.$avatar.big||""),s.append("confirm","确定"),s.append("avatar1",o.big.base64),s.append("avatar2",o.middle.base64),s.append("avatar3",o.small.base64),s.append("formhash",i),b.info("头像的base64字符串",o);let r=await P.post(a,{data:s,processData:!1,headers:{Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9","User-Agent":g.getRandomPCUA(),Host:window.location.hostname,Origin:window.location.origin,Referer:`${window.location.origin}/home.php?mod=spacecp&ac=avatar`}});if(!r.status)return;r.data.responseText.indexOf("window.parent.postMessage('success','*')")!=-1?(t.close(),x.success("上传成功")):(b.error("上传失败",r),x.error(r.data.responseText,{timeout:6e3,isHTML:!1}));}catch(a){b.error(a);}finally{n.close();}}}},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
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
            `});this.$el.$smallUpload=t.$shadowRoot.querySelector(".avatar-upload[data-type='small']"),this.$el.$middleUpload=t.$shadowRoot.querySelector(".avatar-upload[data-type='middle']"),this.$el.$bigUpload=t.$shadowRoot.querySelector(".avatar-upload[data-type='big']"),this.$el.$smallStatus=t.$shadowRoot.querySelector(".avatar-upload-status[data-type='small']"),this.$el.$middleStatus=t.$shadowRoot.querySelector(".avatar-upload-status[data-type='middle']"),this.$el.$bigStatus=t.$shadowRoot.querySelector(".avatar-upload-status[data-type='big']"),this.setUploadChangeEvent(this.$el.$smallUpload,this.$el.$smallStatus,this.$data.avatarInfo.small,()=>{this.$upload.small=true;}),this.setUploadChangeEvent(this.$el.$middleUpload,this.$el.$middleStatus,this.$data.avatarInfo.middle,()=>{this.$upload.middle=true;}),this.setUploadChangeEvent(this.$el.$bigUpload,this.$el.$bigStatus,this.$data.avatarInfo.big,()=>{this.$upload.big=true;});},setUploadChangeEvent(e,t,n,a){u.on(e,"change",i=>{if(!e.files?.length)return;u.text(t,"🤡获取文件信息中..."),t.removeAttribute("data-success");let o=e.files[0],s=o.size,r=new Image,l=new FileReader;l.readAsDataURL(o),l.onload=function(c){r.src=c.target.result,r.onload=function(){if(r.width>n.width||r.height>n.height){e.value="",t.setAttribute("data-success","false"),u.text(t,`🤡校验失败 ==> 图片尺寸不符合，宽：${r.width} 高：${r.height}`);return}if(s>te.$data.avatarInfo.maxSize){e.value="",t.setAttribute("data-success","false"),u.text(t,`🤡校验失败 ==> 图片大小不符合：${s}byte，限制最大：${te.$data.avatarInfo.maxSize}byte`);return}t.setAttribute("data-success","true"),u.text(t,`🤣 通过 宽:${r.width} 高:${r.height} 大小(byte):${s}`),a();};};});},async getUploadUrl(){let e=await P.get("/home.php?mod=spacecp&ac=avatar",{headers:{"User-Agent":g.getRandomPCUA()}});if(!e.status)return;if(g.isNull(e.data.responseText)){x.error("动态头像：获取上传地址的内容失败");return}let t=e.data.responseText.match(/var[\s]*data[\s]*=[\s]*"(.+?)"/);if(t==null||t.length!=2){x.error("动态头像：获取变量data失败");return}let a=t[t.length-1].split(","),i=a.indexOf("stl_src");if(i===-1&&(i=a.indexOf("src")),i===-1){x.error("动态头像：获取上传地址失败");return}let o=a[i+1],s=new URL(o);return s.pathname=s.pathname.replace("/images/camera.swf","/index.php"),s.searchParams.delete("inajax"),s.searchParams.set("m","user"),s.searchParams.set("a","rectavatar"),s.searchParams.set("base64","yes"),o=s.toString(),b.info("上传地址："+o),o}},pt={id:"component-common",title:"通用",views:[{text:"",type:"container",views:[{text:"Toast配置",type:"deepMenu",views:[{text:"",type:"container",views:[Be("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],e=>{b.info("设置当前Qmsg弹出位置"+e.text);},"Toast显示在页面九宫格的位置"),Be("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),V("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"container",views:[{text:"功能",type:"deepMenu",views:[{text:"",type:"container",views:[V("新增【最新发表】","mt-addLatestPostBtn",true,void 0,"便于快捷跳转"),V("文本转超链接","mt-link-text-to-hyperlink",true,void 0,"自动把符合超链接格式的文字转为超链接"),V("延长登录Cookie过期时间","mt-extend-cookie-expire",false,void 0,"减少频繁登录账号的问题")]}]},{type:"deepMenu",text:"自动签到",views:[{text:"",type:"container",views:[V("启用","mt-auto-sign",true,void 0,"自动请求签到"),V("使用fetch请求","mt-auto-sign-useFetch",false,void 0,""),Le("签到信息",`上次签到时间：${(()=>{let e=me.getHostNameSignInfo(window.location.hostname);return e?re.formatTime(e.time):"尚未签到"})()}`,"清空信息",void 0,void 0,void 0,"primary",e=>{let n=e.composedPath()[0].closest("li").querySelector(".pops-panel-item-left-desc-text");S.confirm({title:{text:"提示 ",position:"center"},content:{text:"<p>是否清空脚本签到记录的时间?</p>",html:true},btn:{ok:{enable:true,callback:a=>{let i=window.location.hostname;me.clearSignInfo(i),x.success("删除成功"),u.text(n,`上次签到时间：${(()=>{let o=me.getHostNameSignInfo(i);return o?re.formatTime(o.time):"尚未签到"})()}`),a.close();}}},width:"300px",height:"200px"});})]}]},{text:"头像",type:"deepMenu",views:[{text:"<a href='https://ezgif.com/resize' target='_blank'>Resize Image</a>",type:"container",views:[Oe(e=>{const t=u.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
											<p class="pops-panel-item-left-main-text">头像（有缓存）</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),n=u.createElement("div",{className:"pops-panel-avatar-img",innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${$.getCurrentUID()}&size=small"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${$.getCurrentUID()}&size=middle"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${$.getCurrentUID()}&size=big"
												class="avatar-img" data-size="big">
											`}),a=u.createElement("style",{innerHTML:`
											.avatar-img {
												width: 30px;
												height: 30px;
												border-radius: 50%;
												overflow: hidden;
											}
										`});return n.querySelector(".avatar-img[data-size='small']"),n.querySelector(".avatar-img[data-size='middle']"),n.querySelector(".avatar-img[data-size='big']"),e.appendChild(t),e.appendChild(n),e.appendChild(a),e},void 0,{text:"头像（有缓存）",desc:"小、中、大"}),Oe(e=>{const t=u.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
											<p class="pops-panel-item-left-main-text">头像</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),n=u.createElement("div",{className:"pops-panel-avatar-img",innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${$.getCurrentUID()}&size=small&ts=${Date.now()}"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${$.getCurrentUID()}&size=middle&ts=${Date.now()}"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${$.getCurrentUID()}&size=big&ts=${Date.now()}"
												class="avatar-img" data-size="big">
											`});return e.appendChild(t),e.appendChild(n),e},void 0,{text:"头像",desc:"小、中、大"}),Le("修改头像",`可以上传gif图片，注意图片最大限制为${re.formatByteToSize(te.$data.avatarInfo.maxSize)}`,"上传",void 0,false,false,"primary",()=>{te.init();})]}]}]}]},ht={id:"component-forum-post",title:"帖子",views:[{type:"container",text:"",views:[{text:"功能",type:"deepMenu",views:[{type:"container",text:"",views:[V("拦截附件","mt-forum-post-interceptionAttachment",true,void 0,"点击附件时弹出提示框进行确认是否下载附件"),V("图片查看优化","mt-forum-post-optimizationImagePreview",true,void 0,"使用Viewer查看图片"),V("自动加载下一页","mt-forum-post-loadNextPageComment",true,void 0,"无缝预览下一页"),V("代码块优化","mt-forum-post-codeQuoteOptimization",true,void 0,"自动检测代码块语言并设置关键字高亮")]}]},{type:"deepMenu",text:"用户信息块",views:[{type:"container",text:"",views:[V("探测用户在线状态","mt-forum-post-detectingUserOnlineStatus",false,void 0,"获取用户在线状态并在用户信息处显示状态表情"),V("显示用户等级","mt-forum-post-showUserLevel",true,void 0,"在用户信息处显示当前用户的等级"),V("隐藏底部信息块","mt-forum-post-hideBottomInfoBlock",false,void 0,"包括金币、好评、信誉等信息")]}]},{type:"deepMenu",text:"右侧悬浮工具栏",views:[{type:"container",text:"",views:[V("新增【快捷收藏】","mt-forum-post-quickCollentBtn",true,void 0,"在右侧悬浮工具栏添加【收藏】按钮，用于快捷收藏"),V("快捷回复优化","mt-forum-post-quickReplyOptimization",true,void 0,"为快捷回复弹窗底部区域添加【一键空格】按钮")]}]}]}]},ft={id:"component-guide",title:"导读",views:[{type:"container",text:"",views:[V("页面美化","mt-guide-beautifyPage",true,void 0,"美化样式")]}]};we.addContentConfig([pt,ht,ft]);A.init();dt.init();

})(Qmsg, DOMUtils, pops, Utils, hljs, Viewer);