// ==UserScript==
// @name         【移动端】MT论坛优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.5.11
// @author       WhiteSevs
// @description  MT论坛效果增强，如自动签到、自动展开帖子、滚动加载评论、显示UID、自定义屏蔽、手机版小黑屋、编辑器优化、在线用户查看、便捷式图床、自定义用户标签、积分商城商品上架提醒等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAADptJREFUeF7tnQtwVNUZx/9nN5CQgCG8QoAdE3lFeWQDGAK+ikKCQGtHBHlJQeVRrTICJQUrgggkUhiRdIRgyBahpThWEHAob6mCVCApCIUQGiDKK0ACEUMMe2/n3E1Ckt279557d+8mN+fMMJlhv/Od7/vO737ncc+eJdBRLuRfSAbwa0JIogjRrkNVvapKQA6JEL8iVrLSZrPl1SvjaxlLtBp/Pv/8LEJImtb6ZqlHCHnddr9tRX31RxMA+fn5v7AS69766rSv7XaKzgExMTH7fK3XCH3MAJw6dapZaHDoYRB0McLAetGGiFxbtK0HIeTnemFvNSOZAfDV03/rjgWzt7RFeIgTc5IK0TRYMDR2RaVWLNrRGoJAMOPJa2gXXq6rfafojImJiTmnS0kAKjMDcOHchRkA/qTX1vzrjfHHbZGSmqcfKsG4PsV6VTLV/+DLljh0PlSq89rj15EY/RNT/drCFlj6d4jucFCXkgBUZgbgfP75eYSQt/XaKorA/O1tcKYwGFaLiN8+cgP9YvR1glqbjn7fBEv3tJLEI0KdWDjsMsJD9GWg+joPCBgANPh3BYJpn0ahuNSKmJY/45VHbyim4uu3rbh2OwiVf0MbCWgZ5kSrsLvS39DG3jvy8q0g/GFLW5Q7Ce4LEfD6E9fwYGSZWnZk5TgAGkN4pKAJlu11PY2Pd7yNKY/cqKHp++JGOH4xBMcq/ik1Q8fy3rZSdI8qQ2xkGYIsYo0qqbtaS/poGdunGEMeKlFSqepzDoCqMHkWchyKwM7TTaUPX3i4GIMfLMGXeWHYk9sUedcaa9Yc3sSJPrZSJMX+iA7Ny7ExOxybj98n6esf8xNefey6Zt21K3IAdIZy5qYoXLoVhLDGAlqFOXG+qJFOjfeqBweJUprP+cH15EfddxcLhl5Bk0b6xv3qBnIAdHYXTcs0PRtRUgYWome7Oz5tigOgI5wFxY2Qvr8l6HhvRHms421MrTXX0NsuB0BjBOlanK7JjS50srjkmcs+a5YDoCGUW080w9+ONNdQ0zdV6HwjY9QPPlFGAYg+E1MMCy6RgbjiE6UGKAnYPgCd5WccaGGAi96bSLi/FNOeuKbbjjYFY38MLv3atZQRcQwWfI5ywUGG4Kxu5X5UEBAAvrsUgrRdrSHUXKL70U3vqod1K8Ho3vq2otsUjEJw6Tc1GxJRAoIsEMFBBiE7YA56aTggANB3APRdQF0qLyUW4ckuP2o2ySMANbU5AMFBkvCl5kb8UNFwAOjmTuY3EbKuPB4LJHYCmoYAl4uBHceBPI0jarf2wFPdAVtL4FwhsOUocEFm74duRb87VGNDAFQAUOGz+BlESxZJdm7xQ38yqzQcAG9P//AEYBo9ZFatOAXgpdXA/66y+dbDBvx5Qs065U5gdDpw9ZZnXXqygHoAKtsWd8NiySIDnevZPPOttKEAKD39ayYDnVxviGuUj78CVjOeP0r5JTDUwynFVXuA9V97DqKeLMAOQKUN5FuIogPNhCzSH6W+7V5lbYYC8PYXkV739jdPByLC3I3+IgdIZUyYaaOAfp3ddX36LbB8u3xgXnn0Oh55gP21tHYAKmwhOA0BDliFLCOXkYYBQHf5Uj5v6xXJzElAZw8ia/8FfMR44k4uA2TsAdbJZABqHO18CgFr0Q3AvQYvAXBIS8ihyGW1g1XeMAB2nGqKv/xbfvJHDX+mNzBjSE0X7pQDL38EXGBcqneMdM0BQqstNgpLgEkfATe8TPbp0bRVz7NvDvkQgMoA3JZAcK0cDrN2rFp5wwB4959t8N8rwYp20RVA344Vq4CbwM7j8jN3JWVRzYHBcS4pQQA2HQFuqsjuWl4W+QGA6u59DNHiIMl39yj5zPq5IQDQ0zcT1ndgtS1g8r/qfgvP97rJ1L6fAXDZQsTNECgIzk1MxnkRNgQAegxrxqYoX9nsdz1aDosYAkCV5+I+EEsWGeRcqzcYhgBAt34X7zTmXb/egND6XduUYe5gto0HYwGo8FLEUViQhSDBQQZA0zamIQDUlRc/auGgh0s/GH5RrbgkFxAA7lmYBxEOECGLJIHJcEMAUDsBZIq4n4XXjy9gaiHAAFTaStOWA6KQRZJxSo0DHgHo2bNnDCHEwzYKMHny5Bc6tO8wTo3ySpl//CccuYX+efkjlpcAZUWwtn4YljAbYPHNqaJ6CkBlyOl5NwqCgyTjkLe+qgGA3W5/GcBqls6tU7LWEDR+YCSCe7yh26x6DsA9/0X8FZCWkDs9BaUKALvdvhXAUN2RqwMKLOGdEfbkBoBYNFtjGgDurRw+hyj+jiSjxtgmAWC326cBeF9ztOpgRWubRIT2/0DzkGA+ACo6ySJ0IwNxsrLLKgGoI2dzfEtSUNQTaJKQClhd3wdgKaYFADhBkoTuVQDExcUlEEK8ThRYAlfXZIPaPoqQhFSQIA+vGb0Ya2IA6JnF+SRZmEfdJ3FxcS8SQjLrWsf50p6gyH4uCBq5vhamppgaAIK1ZJDwmwYDAHXU2joBTRLSQILVHUM3NQAQ95EkcUCDAkCCoFVvFwQhyl9EMTUADW0IqJ7yrS3tLgiatPE6EpgaAJBnSZLzswaXASp73NqiB0IS0mAJlX9DaWIAvkMjIZ4MwN0GC4A0HEQ85IIgzPM5BdMCIOL3JFmouuOpQawC5HK9pdkDCI5LgSWsvZvI+8/So3nqS8tLr6PxnTr55R/JifYtpBvsvq94+qsO2DVoANR3rzkku9t+OvldQeirOTk5VUdsOQDm6FsmLwgh6dnZ2a816DkAU8RMKEwIGZ2dnb2BZwATdq5Klw7l5OQkUgDmEkLmq6zExUwUAUEQYikAmYSQF03kF3dFZQQIIWMoAGsIIRNV1uFiJoqAKIovcABM1KGsrnAAWCNmMnkOgMk6lNUdDgBrxEwmzwEwWYeyusMBYI2YyeQ5ACbrUFZ3OACsETOZvF8AWL3a+zfLrl69ijfffFNzKMeMGYMBA6TzjLJl0qRJmvV7q6jkm18araV01apVOHzYNzfG+AWA7GzlQxFvvfUWtm6l30RjK507d8bGjRsVK8XHxyvKaBFQ45sWvSx1KNz1HoCSkhI899xzoNmApWRmZqJXr16KVTgAiiGSBAKWAWjjO3bsQEpKijpLAUydOhVTpkxRJc8BUBWmwAJATZw3bx42b96saG3fvn2xcuVKRblKAQ6AulAFNANQE0tLS0EndefOyf/iarNmzZCVlYWOHTuq8woAB0BdqAIOADVz9+7dmDlzpqzFdJgYNWqUOo8qpIwGQGlS1qdPHzf7tdShSkwxCawdjbS0NGzYsMEtSEOGDMHChQuZOp8KGw0AHZ7o8sxToUtHOQDklqt0rkPnPJ5KvQWgrKwMwcGebwotLy/HhAkTcPJk1b0FiI6ORkZGBlq39ny9nDd9HAB1z4yhQwB9SuSopubu378f06bRi0pcJTU1FcnJtX48oJpf3vT5C4Bt27ahXbt2btGdP38+Nm3yfHmnlgwwduxY2WFx9OjROHVK1QVgihQYDkCLFi0wcuRIWcNWrFiBNWvWYPz48XjjDfmLnuhm0I0bN2SB8hcAnuYjd+7cwcSJE2U7RQsAiYmJ+PDDD93idPHiRQwfPhy0TV8UwwGg4+Qnn3yCTp06ebRfEARprZ+eni47XOTl5WHEiBGSnFxG8RcAbdu2xZIlS9C9e9UNK9LyVG78p05qAYDWq+0fXSktX74c+/Yx3pvvhZSAANCtWzesW7dO1iw6O/Y0aaqsMG7cOJw4cSIgAFAb6DyGDk0RERE4c+YMDhw44PVh1AoAVdq/f3/Q7e+ioiJpiCwu1vfLZrUNDQgA1AjaiTNmzGDOYkuXLq2CJxAZgNlgHRlAS1usdQIGADV02bJlim/1qju0d+9eTJ8+veq/OACs3e0uH1AAbDYb1q5di+bNle/soamPTgwLCu7dccgBqOcAUPOHDRuGBQsWKHri6fUxB0AxbIoCAc0AldbNmTNHmtXLFbpqWLRokdvHHADF/lUUqBMAhIeHSzt+Xbp0cTM4NzeX3k6Omzfdf76FA6DYv4oCdQIAaqWWpRIHQLF/FQU4AIoh0i+gBW79rarTUGcAoO8A6Mug2sXhcEi7X54KzwDqOtmbVJ0BgBrp6cClty1dDoDJAKDu0N3B2NhY6cUK3fXzVjgAJgSAxSUOAEu0PMvWqSGA1R0OAGvE3OU5APpjqKiBrwIqQqT03lwxkrUEeAZgjRjPAPojpkEDzwA8AzCfCtbAmaYqfA6gKWxslXgG4BmAZwDKAJ8E1swc9Oyjv+4xUJuj+BCgNlI65PgQwIcAPgTwIcDzl0P5EKAjtfKNIB3Bq6jK5wD6Y6iogc8B+ByAzwH4HIDPAfg+QK3Bgu8DKI6e3gX4JFBnAI2+Jo7vBPKdQK/fo2flmWcA1ojx8wD6I6ZBA18G8mUgXwbyZSBfBvJlIF8Ger9MiXV45ZNA1ogZNAmkN3527drVrbXZs2dj+/bt+q2u0DB48GAsXrzYTd/p06eZr5b1mVEeFMlddUvjRG9IDWTxy8sgT09mYWEhkpKSfO4rvXK+9k2ivt5v0Gs0vfHM0y+N+PLKV602+gUAasygQYOka9wiIyNx8OBBzJo1S6uNivXee+899OvXD1euXJH2GXbu3KlYx2gBetP53Llz0bNnTxw7dgzvvPMOzp49a7QZbu35DYCAe8YNUBUBDoCqMJlXiANg3r5V5RkHQFWYzCvEATBv36ryjAOgKkzmFeIAmLdvVXnGAVAVJvMKcQDM27eqPOMAqAqTeYU4AObtW1WecQBUhcm8QhIAdrs9HcCr5nWTeyYXAULICBIfH/+UKIq7eJgaXgQIIdGEum2324sAKP92S8OLkZk93pWTkzNIAiAuLm4+IWSumb3lvtWMgMViefro0aPbJQBoiY+P3y6KovxvtfIImiYChJDZ2dnZqdShKgAqMsEAQgg9aNcbQJBpPOaO0AicB/B3q9WaceTIkarjSP8HC+OZoHXD4j8AAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://bbs.binmt.cc/*
// @exclude      /^http(s|)://bbs.binmt.cc/uc_server.*$/
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@79fb4d854f1e2cdf606339b0dac18d50104e2ebe/lib/js-watermark/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.12.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@2.0.8/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.8/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.js
// @require      https://fastly.jsdelivr.net/npm/@highlightjs/cdn-assets@11.11.1/highlight.min.js
// @resource     HljsCSS    https://fastly.jsdelivr.net/npm/highlight.js@11.11.1/styles/github-dark.min.css
// @resource     ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.css
// @connect      *
// @connect      helloimg.com
// @connect      z4a.net
// @connect      kggzs.cn
// @connect      woozooo.com
// @grant        GM.cookie
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

(function(e,t,n,r,i,a){'use strict';var o=Object.create,s=Object.defineProperty,c=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,u=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty,f=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=l(t),a=0,o=i.length,u;a<o;a++)u=i[a],!d.call(e,u)&&u!==n&&s(e,u,{get:(e=>t[e]).bind(null,u),enumerable:!(r=c(t,u))||r.enumerable});return e},p=(e,t,n)=>(n=e==null?{}:o(u(e)),f(t||!e||!e.__esModule?s(n,`default`,{value:e,enumerable:!0}):n,e));e=p(e),t=p(t),n=p(n),r=p(r),i=p(i),a=p(a);var m=typeof GM<`u`?GM:void 0,h=typeof GM_addValueChangeListener<`u`?GM_addValueChangeListener:void 0,g=typeof GM_deleteValue<`u`?GM_deleteValue:void 0,_=typeof GM_getResourceText<`u`?GM_getResourceText:void 0,v=typeof GM_getValue<`u`?GM_getValue:void 0,y=typeof GM_info<`u`?GM_info:void 0,b=typeof GM_listValues<`u`?GM_listValues:void 0,x=typeof GM_registerMenuCommand<`u`?GM_registerMenuCommand:void 0,ee=typeof GM_removeValueChangeListener<`u`?GM_removeValueChangeListener:void 0,S=typeof GM_setValue<`u`?GM_setValue:void 0,te=typeof GM_setValues<`u`?GM_setValues:void 0,ne=typeof GM_unregisterMenuCommand<`u`?GM_unregisterMenuCommand:void 0,re=typeof GM_xmlhttpRequest<`u`?GM_xmlhttpRequest:void 0,C=typeof unsafeWindow<`u`?unsafeWindow:void 0,ie=window,ae={ElementPlus:{keyName:`ElementPlusResourceCSS`,url:`https://fastly.jsdelivr.net/npm/element-plus@latest/dist/index.min.css`},Viewer:{keyName:`ViewerCSS`,url:`https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css`},Hljs:{keyName:`HljsCSS`,url:`https://fastly.jsdelivr.net/npm/highlight.js@latest/styles/github-dark.min.css`}},w={qmsg_config_position:{key:`qmsg-config-position`,defaultValue:`bottom`},qmsg_config_maxnums:{key:`qmsg-config-maxnums`,defaultValue:3},qmsg_config_showreverse:{key:`qmsg-config-showreverse`,defaultValue:!1},httpx_cookie_manager_enable:{key:`httpx-use-cookie-enable`,defaultValue:!1},httpx_cookie_manager_use_document_cookie:{key:`httpx-use-document-cookie`,defaultValue:!1}},T={waitRemove(...e){e.forEach(e=>{typeof e==`string`&&t.default.waitNodeList(e).then(e=>{e.forEach(e=>e.remove())})})},createBlockCSSNode(...e){let n=[];if(e.length!==0&&!(e.length===1&&typeof e[0]==`string`&&e[0].trim()===``))return e.forEach(e=>{Array.isArray(e)?n=n.concat(e):n.push(e)}),t.default.createElement(`style`,{type:`text/css`,innerHTML:`${n.join(`,
`)}{display: none !important;}`})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]==`string`&&e[0].trim()===``)&&(e.forEach(e=>{Array.isArray(e)?t=t.concat(e):t.push(e)}),t=t.map(e=>e.trim()).filter(e=>e!==``),t.length))return j(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){let t=typeof _==`function`?_(e.keyName):null;return typeof t==`string`&&t?j(t):T.loadStyleLink(e.url)},async loadStyleLink(e){let n=document.createElement(`link`);return n.rel=`stylesheet`,n.type=`text/css`,n.href=e,new Promise(e=>{t.default.onReady(()=>{document.head.appendChild(n),e(n)})})},async loadScript(e){let t=document.createElement(`script`);return t.src=e,new Promise(e=>{t.onload=()=>{e(null)},(document.head||document.documentElement).appendChild(t)})},fixUrl(e){return e=e.trim(),e.startsWith(`data:`)||e.match(/^http(s|):\/\//i)?e:e.startsWith(`//`)?(e.startsWith(`///`)||(e=window.location.protocol+e),e):(e.startsWith(`/`)||(e+=`/`),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith(`https://`)||!e.startsWith(`http://`))return e;try{let t=new URL(e);return t.protocol=`https:`,t.toString()}catch{return e}},lockScroll(...e){let t=document.createElement(`style`);t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...e||[]);return n.forEach(e=>{e.classList.add(`pops-overflow-hidden-important`)}),(document.head||document.documentElement).appendChild(t),{recovery(){n.forEach(e=>{e.classList.remove(`pops-overflow-hidden-important`)}),t.remove()}}},async getClipboardText(){function e(e){navigator.clipboard.readText().then(t=>{e(t)}).catch(t=>{k.error(`读取剪贴板内容失败👉`,t),e(``)})}function t(t){navigator.permissions.query({name:`clipboard-read`}).then(()=>{e(t)}).catch(n=>{k.error(`申请剪贴板权限失败，尝试直接读取👉`,n.message??n.name??n.stack),e(t)})}function n(){return!(typeof navigator?.clipboard?.readText!=`function`||typeof navigator?.permissions?.query!=`function`)}return new Promise(e=>{if(!n()){e(``);return}document.hasFocus()?t(e):window.addEventListener(`focus`,()=>{t(e)},{once:!0})})},escapeHtml(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`).replace(/©/g,`&copy;`).replace(/®/g,`&reg;`).replace(/™/g,`&trade;`).replace(/→/g,`&rarr;`).replace(/←/g,`&larr;`).replace(/↑/g,`&uarr;`).replace(/↓/g,`&darr;`).replace(/—/g,`&mdash;`).replace(/–/g,`&ndash;`).replace(/…/g,`&hellip;`).replace(/ /g,`&nbsp;`).replace(/\r\n/g,`<br>`).replace(/\r/g,`<br>`).replace(/\n/g,`<br>`).replace(/\t/g,`&nbsp;&nbsp;&nbsp;&nbsp;`)},interval(e,t,n=5e3){let r,i=n-t,a=t,o=async n=>{let s=await e(n);if(typeof s==`boolean`&&s||n){E.workerClearTimeout(r);return}if(a+=t,a>i){o(!0);return}r=E.workerSetTimeout(()=>{o(!1)},t)};o(!1)},findParentNode(e,n,r){if(r){let i=t.default.closest(e,r);if(i)return i.querySelector(n)}else return t.default.matches(e,n)?e:t.default.closest(e,n)},toStr(e,t=2){let n=`__undefined__placeholder__replaced__str__`+performance.now();return JSON.stringify(e,(e,t)=>t===void 0?n:t,t).replace(RegExp(`"${n}"`,`g`),`undefined`)},isVerticalScreen(){return!globalThis.screen.orientation.type.includes(`landscape`)},isMobileDevice(e=768){return this.isVerticalScreen()?globalThis.innerWidth<e:globalThis.innerHeight<e},isTopWindow(){let e=typeof C==`object`&&C?C:window;return e.top===e.self},formatVideoDuration(e){if(typeof e!=`number`&&(e=parseInt(e)),isNaN(e))return e.toString();let t=function(e){return e<10?`0${e}`:e};if(e<60)return`0:${t(e)}`;if(e>=60&&e<3600)return`${Math.floor(e/60)}:${t(e%60)}`;{let n=Math.floor(e/3600),r=Math.floor(e/60)%60,i=e%60;return`${n}:${t(r)}:${t(i)}`}},formatTimeStamp(e,t){if(typeof e==`number`&&e<0xe8d4a51000){let t=String(Date.now()).length-String(e).length;e*=10**t}let n=e,r=new Date(typeof e==`string`?e.replace(/-/g,`/`):e),i=new Date(t??Date.now()).getTime()-r.getTime(),a=Math.floor(i/(24*3600*1e3));if(a>0)n=a>7?E.formatTime(r.getTime()):a+`天前`;else{let e=i%(24*3600*1e3),t=Math.floor(e/(3600*1e3));if(t>0)n=t+`小时前`;else{let t=e%(3600*1e3),r=Math.floor(t/(60*1e3));if(r>0)n=r+`分钟前`;else{let e=t%(60*1e3);n=Math.round(e/1e3)+`秒前`}}}return n}},E=r.default.noConflict(),D=t.default.noConflict(),O=n.default,k=new E.Log(y,C.console||ie.console),oe=y?.script?.name||void 0,se=n.default.fn.Utils.AnyTouch();k.config({debug:!1,logMaxCount:250,autoClearConsole:!0,tag:!0});var ce=()=>{let e=n.default.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex??0,t=E.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex??0;return Math.max(100,e,t)};e.default.config({isHTML:!0,autoClose:!0,showClose:!1,consoleLogContent(e){let t=e.setting.type;if(t===`loading`)return!1;let n=e.setting.content;return t===`warning`?k.warn(n):t===`error`?k.error(n):k.info(n),!1},get position(){return B.getValue(w.qmsg_config_position.key,w.qmsg_config_position.defaultValue)},get maxNums(){return B.getValue(w.qmsg_config_maxnums.key,w.qmsg_config_maxnums.defaultValue)},get showReverse(){return B.getValue(w.qmsg_config_showreverse.key,w.qmsg_config_showreverse.defaultValue)},get zIndex(){return ce()}}),O.GlobalConfig.setGlobalConfig({zIndex:()=>ce(),mask:{enable:!0,clickEvent:{toClose:!1,toHide:!1}},drag:!0});var le=new E.GM_Menu({GM_getValue:v,GM_setValue:S,GM_registerMenuCommand:x,GM_unregisterMenuCommand:ne}),A=new E.Httpx({xmlHttpRequest:re,logDetails:!1});A.interceptors.request.use(e=>e),A.interceptors.response.use(e=>e,t=>(k.error(`[Httpx-HttpxRequest.response] 响应错误`,{data:t}),t.type===`onabort`?e.default.warning(`请求取消`,{consoleLogContent:!0}):t.type===`onerror`?e.default.error(`请求异常`,{consoleLogContent:!0}):t.type===`ontimeout`?e.default.error(`请求超时`,{consoleLogContent:!0}):e.default.error(`其它错误`,{consoleLogContent:!0}),t)),C.Object.defineProperty,C.Object.keys,C.Object.values,C.Function.prototype.apply,C.Function.prototype.call,C.Element.prototype.appendChild,C.setTimeout.bind(C),C.clearTimeout.bind(C),C.setInterval.bind(C),C.clearInterval.bind(C);var j=D.addStyle.bind(D);T.addBlockCSS.bind(T);var M=t.default.selector.bind(t.default),N=t.default.selectorAll.bind(t.default),ue=new E.CookieManagerService({baseCookieHandler:`GM_cookie`});ue.isSupportGM_cookie||(ue.isSupportCookieStore?ue.setOptions({baseCookieHandler:`cookieStore`}):ue.setOptions({baseCookieHandler:`document.cookie`})),new E.DocumentCookieHandler;var de=`GM_Panel`,fe=`data-init`,P=`data-key`,F=`data-default-value`,pe=`data-init-more-value`,me=`data-plugin-search-config`,I=`data-storage-api`,L={followBrowserSize:!1,get width(){return L.followBrowserSize?globalThis.outerWidth:globalThis.innerWidth},get height(){return L.followBrowserSize?globalThis.outerHeight:globalThis.innerHeight}},R={setting:{get width(){return L.width<550?`88vw`:L.width<700?`550px`:`700px`},get height(){return L.height<450?`70vh`:L.height<550?`450px`:`550px`}},settingMiddle:{get width(){return L.width<350?`88vw`:`350px`},get height(){return L.height<450?`88vh`:`450px`}},settingBig:{get width(){return L.width<800?`92vw`:`800px`},get height(){return L.height<600?`80vh`:`600px`}},info:{get width(){return L.width<350?`88vw`:`350px`},get height(){return L.height<250?`88vh`:`250px`}}},he={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig??=new E.Dictionary,this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e)},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]},getDefaultBottomContentConfig(t){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let n=!1,r,i=(e,n)=>{if(t&&typeof t.translateCallback==`function`)return t.translateCallback(e,n);if(typeof n==`object`&&n)for(let t in n)e=e.replaceAll(`{{${t}}}`,n[t]);return e},a=(e,t)=>{typeof t!=`string`&&(t=T.toStr(t));let n=new Blob([t]),r=globalThis.URL.createObjectURL(n);D.createElement(`a`,{href:r,download:e}).click(),E.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(r)},500)},o=()=>{let t=t=>{let n=O.alert({title:{text:i(`请选择导入方式`),position:`center`},content:{text:`
            <div class="btn-control" data-mode="local">${i(`本地导入`)}</div>
            <div class="btn-control" data-mode="network">${i(`网络导入`)}</div>
            <div class="btn-control" data-mode="clipboard">${i(`剪贴板导入`)}</div>`,html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(e){e.close()}}},drag:!0,mask:{enable:!0},width:R.info.width,height:R.info.height,style:`
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
          }`}),r=n.$shadowRoot.querySelector(`.btn-control[data-mode='local']`),a=n.$shadowRoot.querySelector(`.btn-control[data-mode='network']`),o=n.$shadowRoot.querySelector(`.btn-control[data-mode='clipboard']`),s=async n=>{confirm(i(`是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）`))&&(typeof b==`function`?typeof g==`function`?(b().forEach(e=>{g(e)}),e.default.success(i(`已清空脚本存储的配置`))):e.default.error(i(`不支持GM_deleteValue函数，无法执行删除脚本配置`)):e.default.error(i(`不支持GM_listValues函数，无法清空脚本存储的配置`))),typeof te==`function`?te(n):Object.keys(n).forEach(e=>{let t=n[e];S(e,t)}),e.default.success(i(`配置导入完毕`)),t?.()},c=t=>new Promise(async n=>{let r=E.toJSON(t);Object.keys(r).length===0?e.default.warning(i(`解析为空配置，不导入`)):await s(r),n(!0)});D.on(r,`click`,e=>{D.preventEvent(e),n.close();let t=D.createElement(`input`,{type:`file`,accept:`.json`});D.on(t,[`propertychange`,`input`],()=>{if(!t.files?.length)return;let e=t.files[0],n=new FileReader;n.onload=()=>{c(n.result)},n.readAsText(e,`UTF-8`)}),t.click()}),D.on(a,`click`,t=>{D.preventEvent(t),n.close();let r=O.prompt({title:{text:i(`网络导入`),position:`center`},content:{text:``,placeholder:i(`请填写URL`),focus:!0},btn:{close:{enable:!0,callback(e){e.close()}},ok:{text:i(`导入`),callback:async t=>{let n=t.text;if(E.isNull(n)){e.default.error(i(`请填入完整的url`));return}let r=e.default.loading(i(`正在获取配置...`)),a=await A.get(n,{allowInterceptConfig:!1});if(r.close(),!a.status){k.error(a),e.default.error(i(`获取配置失败`),{consoleLogContent:!0});return}await c(a.data.responseText)&&t.close()}},cancel:{enable:!1}},drag:!0,mask:{enable:!0},width:R.info.width,height:`auto`}),a=r.$shadowRoot.querySelector(`input`),o=r.$shadowRoot.querySelector(`.pops-prompt-btn-ok`);D.on(a,[`input`,`propertychange`],()=>{D.val(a)===``?D.attr(o,`disabled`,`true`):D.removeAttr(o,`disabled`)}),D.onKeyboard(a,`keydown`,(e,t,n)=>{e===`Enter`&&n.length===0&&D.val(a)!==``&&D.emit(o,`click`)}),D.emit(a,`input`)}),D.on(o,`click`,async t=>{D.preventEvent(t),n.close();let r=await T.getClipboardText();if(r.trim()===``){e.default.warning(i(`获取到的剪贴板内容为空`));return}await c(r)})},n=(t=`${oe}_panel-setting-${E.formatTime(Date.now(),`yyyy_MM_dd_HH_mm_ss`)}.json`,n)=>{let r=O.alert({title:{text:i(`请选择导出方式`),position:`center`},content:{text:`
            <div class="btn-control" data-mode="export-to-file">${i(`导出至文件`)}</div>
            <div class="btn-control" data-mode="export-to-clipboard">${i(`导出至剪贴板`)}</div>
            `,html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(e){e.close()}}},drag:!0,mask:{enable:!0},width:R.info.width,height:R.info.height,style:`
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
          }`}),o=r.$shadowRoot.querySelector(`.btn-control[data-mode='export-to-file']`),s=r.$shadowRoot.querySelector(`.btn-control[data-mode='export-to-clipboard']`);D.on(o,`click`,i=>{D.preventEvent(i);try{a(t,n),r.close()}catch(t){e.default.error(t.toString(),{consoleLogContent:!0})}}),D.on(s,`click`,async()=>{await E.copy(n)?(e.default.success(i(`复制成功`)),r.close()):e.default.error(i(`复制失败`))})},r=O.confirm({title:{text:i(`配置`),position:`center`},content:{text:`<textarea name="config-value" id="config" readonly></textarea>`,html:!0},btn:{ok:{enable:!0,type:`primary`,text:i(`导入`),callback(){t()}},cancel:{enable:!0,text:i(`导出`),callback(){n(void 0,s)}}},width:L.width<450?`90vw`:`450px`,height:`auto`,style:`
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
        `}).$shadowRoot.querySelector(`textarea`),o={};if(typeof b==`function`)b().forEach(e=>{let t=v(e);Reflect.set(o,e,t)});else{e.default.warning(i(`不支持函数GM_listValues，仅导出菜单配置`));let t=v(de);Reflect.set(o,de,t)}let s=T.toStr(o);r.value=s},s=()=>{let e=y?.script?.supportURL||y?.script?.namespace;typeof e==`string`&&E.isNotNull(e)&&window.open(e,`_blank`)};return[{id:`script-version`,title:i(`版本：{{version}}`,{version:y?.script?.version||i(`未知`)}),isBottom:!0,views:[],clickFirstCallback(){return!1},afterRender(e){new se(e.$asideLiElement).on(`tap`,function(){clearTimeout(r),r=void 0,n?(n=!1,o()):(r=setTimeout(()=>{n=!1,s()},200),n=!0)})}}]},setDefaultBottomContentConfig(e){this.$data.__defaultBottomContentConfig=e}},ge={$data:{__menuOption:[{key:`show_pops_panel_setting`,text:`⚙ 设置`,autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{B.showPanel(he.getConfig(0))}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu()},initExtensionsMenu(){T.isTopWindow()&&le.add(this.$data.menuOption)},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e)},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(e=>{let t=this.$data.menuOption.findIndex(t=>t.key===e.key);t!==-1&&(this.$data.menuOption[t]=e)})},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1)}},_e=class{data={storeNodeList:[],destoryFnList:[]};option={};constructor(e){this.option=e}handlerResult(e,t){let n=[],r=[],i=[];if(Array.isArray(t))i=i.concat(t);else{let e=t=>{if(typeof t==`object`&&t)if(t instanceof Element)i.push(t);else if(Array.isArray(t))e(t);else{let{$css:e,destory:n}=t;e!=null&&(Array.isArray(e)?i=i.concat(e):e instanceof Element&&i.push(e)),typeof n==`function`&&i.push(n)}else i.push(t)};e(t)}let a=e=>{if(e!=null){if(e instanceof Element){n.push(e);return}if(typeof e==`function`){r.push(e);return}}};for(let e of i){let t=a(e);if(typeof t==`boolean`&&!t)break;if(Array.isArray(e))for(let t of e){let e=a(t);if(typeof e==`boolean`&&!e)break}}this.clearStoreNodeList(),this.execDestoryFnAndClear(),e&&(this.data.storeNodeList=this.data.storeNodeList.concat(n),this.data.destoryFnList=this.data.destoryFnList.concat(r))}getEnableStatus(e){return!!this.option.getValue(e)}clearStoreNodeList=()=>{for(let e=this.data.storeNodeList.length-1;e>=0;e--)this.data.storeNodeList[e]?.remove(),this.data.storeNodeList.splice(e,1)};execDestoryFnAndClear=()=>{for(let e=this.data.destoryFnList.length-1;e>=0;e--){let t=this.data.destoryFnList[e];t(),this.data.destoryFnList.splice(e,1)}};checkMenuExec(){let e=!1;return e=typeof this.option.checkExec==`function`?this.option.checkExec(this.option.keyList):this.option.keyList.every(e=>this.getEnableStatus(e)),e}},z=new class{storageKey;listenerData;cacheData;callbacks=[];constructor(e){if(typeof e==`string`){let t=e.trim();if(t==``)throw Error(`key can not be empty string`);this.storageKey=t}else throw TypeError(`key must be a string`);this.listenerData=new r.default.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.setLocalValue=this.setLocalValue.bind(this),this.destory=this.destory.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this)}[Symbol.dispose](){this.destory()}async[Symbol.asyncDispose](){this.destory()}destory(){this.cacheData=null;for(let e=this.callbacks.length-1;e>=0;e--){let t=this.callbacks[e];t(),this.callbacks.splice(e,1)}}getLocalValue(){if(this.cacheData==null){let e=v(this.storageKey);e??(e={},this.setLocalValue(e)),this.destory(),this.cacheData=e;let t=h(this.storageKey,(e,t,n)=>{this.cacheData=null,this.cacheData=n});return this.callbacks.push(()=>{ee(t)}),e}else return this.cacheData}setLocalValue(e){this.cacheData=null,this.cacheData=e,S(this.storageKey,e)}set(e,t){let n=this.get(e),r=this.getLocalValue();Reflect.set(r,e,t),this.setLocalValue(r),this.emitValueChangeListener(e,t,n)}get(e,t){let n=this.getLocalValue();return Reflect.get(n,e)??t}getAll(){return this.getLocalValue()}delete(e){let t=this.get(e),n=this.getLocalValue();Reflect.deleteProperty(n,e),this.setLocalValue(n),this.emitValueChangeListener(e,void 0,t)}has(e){let t=this.getLocalValue();return Reflect.has(t,e)}keys(){let e=this.getLocalValue();return Reflect.ownKeys(e)}values(){let e=this.getLocalValue();return Reflect.ownKeys(e).map(t=>Reflect.get(e,t))}clear(){this.destory(),g(this.storageKey)}addValueChangeListener(e,t){let n=Math.random(),r=this.listenerData.get(e)||[];return r.push({id:n,key:e,callback:t}),this.listenerData.set(e,r),n}removeValueChangeListener(e){let t=!1;for(let[n,r]of this.listenerData.entries()){for(let n=0;n<r.length;n++){let i=r[n];(typeof e==`string`&&i.key===e||typeof e==`number`&&i.id===e)&&(r.splice(n,1),n--,t=!0)}this.listenerData.set(n,r)}return t}async emitValueChangeListener(...e){let[t,n,r]=e;if(!this.listenerData.has(t))return;let i=this.listenerData.get(t);for(let a=0;a<i.length;a++){let o=i[a];if(typeof o.callback==`function`){let i,a;e.length===1||(e.length===2?i=n:e.length===3&&(i=n,a=r)),await o.callback(t,i,a)}}}}(de),B={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue??=new E.Dictionary,this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData??=new E.Dictionary,this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce??=new E.Dictionary,this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData??=new E.Dictionary,this.__onceExecData},get scriptName(){return oe},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e},key:de,attributeKeyName:P,attributeDefaultValueName:F},init(){this.initContentDefaultValue(),ge.init()},initContentDefaultValue(){let e=e=>{if(!e.attributes||e.type===`button`||e.type===`container`||e.type===`deepMenu`)return;let t=e.attributes,n=t[fe];if(typeof n==`function`){let e=n();if(typeof e==`boolean`&&!e)return}let r=new Map,i=t[P];if(i!=null){let e=t[F];r.set(i,e)}let a=t[pe];if(typeof a==`object`&&a&&Object.keys(a).forEach(e=>{let t=a[e];r.set(e,t)}),!r.size){k.warn(`请先配置键`,e);return}if(e.type===`switch`){let t=typeof e.disabled==`function`?e.disabled():e.disabled;typeof t==`boolean`&&t&&this.$data.contentConfigInitDisabledKeys.push(...r.keys())}for(let[e,t]of r.entries())this.setDefaultValue(e,t)},t=n=>{for(let r=0;r<n.length;r++){let i=n[r];e(i);let a=i.views;a&&Array.isArray(a)&&t(a)}},n=[...he.getAllContentConfig()];for(let e=0;e<n.length;e++){let r=n[e];if(!r.views)continue;let i=r.views;i&&Array.isArray(i)&&t(i)}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)]},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&k.warn(`该key已存在，初始化默认值失败: `,{key:e,initValue:this.$data.contentConfigInitDefaultValue.get(e)}),this.$data.contentConfigInitDefaultValue.set(e,t)},getDefaultValue(e){return this.$data.contentConfigInitDefaultValue.get(e)},setValue(e,t){z.set(e,t)},getValue(e,t){return z.get(e)??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){z.delete(e)},hasKey(e){return z.has(e)},addValueChangeListener(e,t,n){let r=z.addValueChangeListener(e,t);if(n?.immediate||n?.immediateAll){let r=this.getValue(e);n?.immediate?t(e,r,r):n?.immediateAll&&B.emitMenuValueChange(e,r,r)}return r},removeValueChangeListener(e){z.removeValueChangeListener(e)},emitMenuValueChange(e,t,n){z.emitValueChangeListener(e,t,n)},async exec(e,t,n,r=!0){let i;i=typeof e==`string`||Array.isArray(e)?()=>e:e;let a=!1,o=i(),s=[];Array.isArray(o)?(a=!0,s=o):s.push(o);let c=s.find(e=>!this.$data.contentConfigInitDefaultValue.has(e));if(c){k.warn(`${c} 键不存在`);return}let l=JSON.stringify(s);if(r&&this.$data.onceExecMenuData.has(l))return this.$data.onceExecMenuData.get(l);let u=[],d=new _e({keyList:s,getValue:e=>!!this.getValue(e),checkExec(e){let t=!1;return t=typeof n==`function`?n(e):e.every(e=>this.getValue(e)),t}}),f=async e=>{let n=d.checkMenuExec(),r=[];if(n){let i=s.map(e=>this.getValue(e));r=await t({key:s,triggerKey:e?.key,value:a?i:i[0],addStoreValue:(...e)=>d.handlerResult(n,e)})}d.handlerResult(n,r)};r&&s.forEach(e=>{let t=this.addValueChangeListener(e,(e,t,n)=>f({key:e,newValue:t,oldValue:n}));u.push(t)}),await f();let p={checkMenuExec:d.checkMenuExec.bind(d),keyList:s,reload(){this.clearStoreNodeList(),this.execDestoryFnAndClear(),f()},clear(){d.clearStoreNodeList(),this.execDestoryFnAndClear(),this.removeValueChangeListener(),this.clearOnceExecMenuData()},clearStoreNodeList:d.clearStoreNodeList.bind(d),execDestoryFnAndClear:d.execDestoryFnAndClear.bind(d),removeValueChangeListener:()=>{u.forEach(e=>{this.removeValueChangeListener(e)})},clearOnceExecMenuData(){r&&B.$data.onceExecMenuData.delete(l)}};return this.$data.onceExecMenuData.set(l,p),p},async execMenu(e,t,n=!1,r=!1){return await this.exec(e,async(...e)=>await t(...e),e=>e.every(e=>{let t=!!this.getValue(e);return B.$data.contentConfigInitDisabledKeys.includes(e)&&(t=!1,k.warn(`.execMenu${r?`Once`:``} ${e} 被禁用`)),n&&(t=!t),t}),r)},async execMenuOnce(e,t,n=!1,r=!1){let i=await this.execMenu(e,t,n,!0);return r&&i&&(this.removeUrlChangeWithExecMenuOnceListener(e),this.addUrlChangeWithExecMenuOnceListener(e,()=>{i.reload()})),i},async execMoreMenu(e,t,n=!1,r=!1,i=!1){let a=await Promise.all(e.map(async([e,t])=>await this.execMenu(e,(...e)=>t(...e),n,r))),o=new _e({keyList:e.map(([e])=>e),getValue:e=>!!this.getValue(e)}),s=[],c=(e=!1)=>{if(o.clearStoreNodeList(),o.execDestoryFnAndClear(),e){for(let e of s)this.removeValueChangeListener(e);for(let e of a)e&&this.removeUrlChangeWithExecMenuOnceListener(e.keyList)}},l=()=>{let e=a.every(e=>e?e.checkMenuExec():!0);if(c(!1),e){let n=t();o.handlerResult(e,n)}};l();for(let e of a)if(e){let t=this.addValueChangeListener(e.keyList[0],()=>{l()});s.push(t),i&&(this.removeUrlChangeWithExecMenuOnceListener(e.keyList),this.addUrlChangeWithExecMenuOnceListener(e.keyList,()=>{e.reload()}))}return{clear(){for(let e of a)e?.clear();this.execDestoryFnAndClear(),this.removeValueChangeListener()},execDestoryFnAndClear(){for(let e of a)e?.execDestoryFnAndClear();c(!1)},removeValueChangeListener(){for(let e of a)e?.removeValueChangeListener();c(!0)}}},async execMoreMenuOnce(e,t,n=!1,r=!1){return await this.execMoreMenu(e,t,n,!0,r)},deleteExecMenuOnce(e){return e=this.transformKey(e),this.$data.onceExecMenuData.delete(e),this.$data.urlChangeReloadMenuExecOnce.delete(e),z.removeValueChangeListener(e)},onceExec(e,t,n=!1){if(e=this.transformKey(e),typeof e!=`string`)throw TypeError(`key 必须是字符串`);this.$data.onceExecData.has(e)||n&&(Array.isArray(e)?e:[e]).findIndex(e=>{if(!B.getValue(e))return!0})!==-1||(t(),this.$data.onceExecData.set(e,1))},deleteOnceExec(e){e=this.transformKey(e),this.$data.onceExecData.delete(e)},addUrlChangeWithExecMenuOnceListener(e,t){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.set(e,t),{off:()=>this.removeUrlChangeWithExecMenuOnceListener(e)}},removeUrlChangeWithExecMenuOnceListener(e){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.delete(e)},hasUrlChangeWithExecMenuOnceListener(e){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.has(e)},async emitUrlChangeWithExecMenuOnceEvent(e){let t=this.$data.urlChangeReloadMenuExecOnce.values();for(let n of t)await n(e)},showPanel(e,t=`${oe}-设置`,n=!1,r=!1){this.$data.$panel=null,this.$data.panelContent=[];let i=e.findIndex(e=>(typeof e.isBottom==`function`?e.isBottom():!!e.isBottom)&&e.id===`script-version`)!==-1;!n&&!i&&e.push(...he.getDefaultBottomContentConfig());let a=O.panel({title:{text:t,position:`center`,html:!1,style:``},content:e,btn:{close:{enable:!0,callback:e=>{e.close(),this.$data.$panel=null}}},mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1},clickCallBack:e=>{e(),this.$data.$panel=null}},width:R.setting.width,height:R.setting.height,drag:!0,only:!0,style:`
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,...this.$data.panelConfig});return this.$data.$panel=a,this.$data.panelContent=e,r||this.registerConfigSearch({$panel:a,content:e}),{$panel:a,content:e}},registerConfigSearch(t){let{$panel:n,content:r}=t,i=(e,n)=>{if(typeof t.translateCallback==`function`)return t.translateCallback(e,n);if(typeof n==`object`&&n)for(let t in n)e=e.replaceAll(`{{${t}}}`,n[t]);return e},a=async(e,t)=>{if(e==null)return;let n=await t(e);return n&&typeof n.isFind==`boolean`&&n.isFind?n.data:await a(n.data,t)},o=(e,t)=>{let n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(t?.(),n.disconnect())})},{root:null,threshold:1});n.observe(e),e.scrollIntoView({behavior:`smooth`,block:`center`})},s=e=>{let t=`pops-flashing`;D.onAnimationend(e,()=>{e.classList.remove(t)}),e.classList.add(t)},c=c=>{if(c.type===`dblclick`&&f)return;D.preventEvent(c);let l=O.alert({title:{text:i(`搜索配置`),position:`center`},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="${i(`请输入需要搜素的配置名称`)}">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:!0},btn:{ok:{enable:!1}},mask:{clickEvent:{toClose:!0}},width:R.settingMiddle.width,height:`auto`,drag:!0,style:`
					${O.config.cssText.panelCSS}

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
					${t.searchDialogStyle??``}
				`}),u=l.$shadowRoot.querySelector(`.search-config-text`),d=l.$shadowRoot.querySelector(`.search-result-wrapper`);u.focus();let p=()=>{D.empty(d)},m=t=>{let r=E.queryProperty(t,e=>e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e}),c=D.createElement(`div`,{className:`search-result-item`,innerHTML:`
							<div class="search-result-item-path">${r.matchedData?.path}</div>
							<div class="search-result-item-description">${r.matchedData?.description??``}</div>
						`}),l=O.fn.PanelHandlerComponents();return D.on(c,`click`,()=>{let r=n.$shadowRoot.querySelectorAll(`aside.pops-panel-aside .pops-panel-aside-top-container li`)[t.index];if(!r){e.default.error(i(`左侧项下标{{index}}不存在`,{index:t.index}));return}r.scrollIntoView({behavior:`smooth`,block:`center`}),r.click(),a(t.next,async t=>{if(t?.next){let r=await D.waitNode(()=>Array.from(n.$shadowRoot.querySelectorAll(`.pops-panel-deepMenu-nav-item`)).find(e=>{let n=Reflect.get(e,l.$data.nodeStoreConfigKey);return typeof n==`object`&&!!n&&n.text===t.name}),2500);if(r)r.click();else return e.default.error(i(`未找到对应的二级菜单`)),{isFind:!0,data:t};return{isFind:!1,data:t.next}}else{let r=await D.waitNode(()=>Array.from(n.$shadowRoot.querySelectorAll(`li:not(.pops-panel-deepMenu-nav-item)`)).find(e=>Reflect.get(e,l.$data.nodeStoreConfigKey)===t.matchedData?.formConfig),2500);if(r){o(r);let e=r.closest(`.pops-panel-forms-fold[data-fold-enable]`);e&&(e.querySelector(`.pops-panel-forms-fold-container`).click(),await E.sleep(500)),o(r,()=>{s(r)})}else e.default.error(i(`未找到对应的菜单项`));return{isFind:!0,data:t}}})}),c},h=e=>{let t=new RegExp(e,`i`),n=[],i=(e,r)=>{for(let a=0;a<e.length;a++){let o=e[a],s=o.views;if(s&&Array.isArray(s)){let e=E.deepClone(r);if(o.type===`deepMenu`){let t=E.queryProperty(e,e=>e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e});t.next={name:o.text}}i(s,e)}else{let e,i;if(o.type===`own`){let t=Reflect.get(o.attributes||{},me);t&&(typeof t==`function`&&(t=t()),typeof t.text==`string`&&(e=t.text),typeof t.desc==`string`&&(i=t.desc))}else e=o.text,i=Reflect.get(o,`description`);let a=[e,i],s=a.findIndex(e=>{if(typeof e==`string`)return e.match(t)});if(s!==-1){let t=E.deepClone(r),c=E.queryProperty(t,e=>e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e});c.next={name:e,matchedData:{path:``,formConfig:o,matchedText:a[s],description:i}};let l=[];E.queryProperty(t,e=>{let t=e?.name;return typeof t==`string`&&t.trim()!==``&&l.push(t),e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e}});let u=l.join(T.escapeHtml(` - `));c.next.matchedData.path=u,n.push(t)}}}};for(let e=0;e<r.length;e++){let t=r[e];if(!t.views||t.isBottom&&t.id===`script-version`)continue;let n=t.views;if(n&&Array.isArray(n)){let r=t.title;typeof r==`function`&&(r=r()),i(n,{index:e,name:r})}}let a=document.createDocumentFragment();for(let e of n){let t=m(e);a.appendChild(t)}p(),d.append(a)};D.on(u,`input`,E.debounce(e=>{D.preventEvent(e);let t=D.val(u).trim();if(t===``){p();return}h(t)},200))};n.$shadowRoot.querySelectorAll(`aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`).forEach(e=>{D.on(e,`dblclick`,c)});let l=new WeakMap,u=!1,d,f=!1;D.on(n.$shadowRoot,`touchend`,`aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`,(e,t)=>{f=!0,clearTimeout(d),d=void 0,u&&l.has(t)?(u=!1,l.delete(t),c(e)):(d=setTimeout(()=>{u=!1},200),u=!0,l.set(t,e))},{capture:!0}),n.$shadowRoot.appendChild(D.createElement(`style`,{type:`text/css`,textContent:`
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
    		`}))},transformKey(e){if(Array.isArray(e))if(e.length>1){let t=e.sort();return JSON.stringify(t)}else return e[0];else return e},getDynamicValue(e,t){let n=!1,r=t,i=this.addValueChangeListener(e,(e,t)=>{r=t});return{get value(){return n||(n=!0,r=B.getValue(e,t)),r},destory(){B.removeValueChangeListener(i)}}}},ve=class{$data={get enable(){return B.getValue(w.httpx_cookie_manager_enable.key,w.httpx_cookie_manager_enable.defaultValue)},get useDocumentCookie(){return B.getValue(w.httpx_cookie_manager_use_document_cookie.key,w.httpx_cookie_manager_use_document_cookie.defaultValue)},cookieRule:[]};constructor(e){Array.isArray(e)&&(this.$data.cookieRule=e)}fixCookieSplit(e){return E.isNotNull(e)&&!e.trim().endsWith(`;`)&&(e+=`;`),e}concatCookie(e,t){return E.isNull(e)?t:(e=e.trim(),t=t.trim(),e=this.fixCookieSplit(e),t.startsWith(`;`)&&(t=t.substring(1)),e.concat(t))}handle(e){if(e.fetch||!this.$data.enable)return;let t=``,n=e.url;n.startsWith(`//`)&&(n=window.location.protocol+n);let r=new URL(n);this.$data.useDocumentCookie&&r.hostname.endsWith(window.location.hostname.split(`.`).slice(-2).join(`.`))&&(t=this.concatCookie(t,document.cookie.trim()));for(let e=0;e<this.$data.cookieRule.length;e++){let n=this.$data.cookieRule[e];if(r.hostname.match(n.hostname)){let e=B.getValue(n.key);if(E.isNull(e))break;t=this.concatCookie(t,e)}}E.isNotNull(t)&&(e.headers&&e.headers.Cookie?e.headers.Cookie=this.concatCookie(e.headers.Cookie,t):e.headers.Cookie=t,k.info(`Httpx => 设置cookie:`,e)),e.headers&&e.headers.Cookie!=null&&E.isNull(e.headers.Cookie)&&delete e.headers.Cookie}};T.setGMResourceCSS(ae.Viewer),T.setGMResourceCSS(ae.Hljs);var ye=new ve([{key:`httpx-cookie-bbs.binmt.cc`,hostname:/bbs.binmt.cc/g}]);A.interceptors.request.use(e=>(ye.handle(e),e)),O.GlobalConfig.setGlobalConfig({mask:{enable:!0},drag:!0}),e.default.config({isLimitWidth:!0,limitWidthWrap:`wrap`});var V={registerLeftMenu(e){D.waitNode(`.comiis_sidenv_box .sidenv_li .comiis_left_Touch`,1e4).then(t=>{if(!t){k.error(`注册左侧面板菜单失败，原因：该元素不存在`);return}let n=D.createElement(`li`,{className:`comiis_left_Touch`,innerHTML:`
						<a href="javascript:;" class="comiis_left_Touch">
							<i class="comiis_font"></i>
							${e.name}
						</a>
						`}),r=n.querySelector(`.comiis_font`);typeof e.style==`string`&&(r.style.cssText=e.style),typeof e.icon==`string`&&(r.innerHTML=e.icon),typeof e.iconColor==`string`&&(r.style.color=e.iconColor),typeof e.iconSize==`string`&&(r.style.fontSize=e.iconSize),D.on(n,`click`,t=>{D.preventEvent(t),typeof e.callback==`function`&&e.callback()}),D.append(t,n)})},comiisForumList:()=>document.querySelectorAll(`li.forumlist_li`),comiisPostli:()=>document.querySelectorAll(`div.comiis_postli.comiis_list_readimgs.nfqsqi`),comiisMmlist:()=>document.querySelectorAll(`.comiis_mmlist`)},be=`.pops-confirm-content {
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
`,H={formhash:/formhash=([0-9a-zA-Z]+)/,hash:/hash=(.+)&/,uid:/uid(=|-)(\d+)/,fontSpecial:/<font.*?>|<\/font>|<strike>|<strong>|<i>|<u>|align=".*?"|<br>[\s]*<br>[\s]*<br>/g,ptid:/&ptid=([\d]+)/i,pid:/&pid=([\d]+)/i,tid:/&tid=([\d]+)/i},U={getAvatar:(e,t=`middle`)=>`/uc_server/avatar.php?uid=${e}&size=${t}&ts=1`,getCurrentUID(){let e=C.discuz_uid;if(typeof e==`string`)return e;let t=document.querySelector(`.sidenv_exit a[href*="uid="]`);if(t){let e=t.href.match(/uid=([0-9]+)/);if(e)return e[e.length-1]}},async getFormHash(){let e=Array.from((top||globalThis).document.querySelectorAll(`input[name=formhash]`));for(let t=0;t<e.length;t++){let n=e[t].value;if(n)return n}let t=Array.from((top||globalThis).document.querySelectorAll(`a[href*="formhash="]`));for(let e=0;e<t.length;e++){let n=t[e].href.match(H.formhash);if(n){let e=n[n.length-1];if(e)return e}}let n=await A.get(`/home.php?mod=spacecp`,{fetch:!0,allowInterceptConfig:!1});if(n.status){let e=n.data.responseText,t=D.toElement(e,!0,!0).querySelector(`input[name=formhash]`);if(t){let e=t.value;if(E.isNotNull(e))return e}}else k.error(`请求个人主页获取formhash失败`,n)},envIsMobile(){return(C.STYLEID||window.STYLEID||typeof STYLEID<`u`&&STYLEID)===`3`},getThreadId:e=>{let t=e.match(/thread-([\d]+)-|&tid=([\d]+)/i);if(t){let e=t.filter(Boolean);return e[e.length-1]}},getForumId(e){let t=e.match(/&fid=([\d]+)/i);if(t)return t[t.length-1]},getPostId(e){let t=e.match(/&pid=([\d]+)/i);if(t)return t[t.length-1]},getRepquote(e){let t=e.match(/&repquote=([\d]+)/i);if(t)return t[t.length-1]}},xe={$data:{cid:``},init(){this.registerMenu()},registerMenu(){V.registerLeftMenu({name:`小黑屋`,iconColor:`#000000`,icon:``,callback:()=>{this.showBlackHome()}})},async showBlackHome(){let t=e.default.loading(`正在获取小黑屋名单中...`),n=await this.getBlackListInfo(``);if(t.close(),!n)return;if(n.data.length===0){e.default.error(`获取小黑屋名单为空`);return}this.$data.cid=n.next_cid;let r=O.confirm({title:{text:`小黑屋名单`,position:`center`},content:{text:`
                <div class="blackhome-user-filter">
                    <input placeholder="过滤用户名/操作人员/UID(可正则)">
                </div>
                <div class="blackhome-user-list"></div>
                `,html:!0},btn:{ok:{text:`下一页`,callback:async()=>{let t=e.default.loading(`正在获取小黑屋名单中...`);k.info(`下一页的cid: `,this.$data.cid);let n=await this.getBlackListInfo(this.$data.cid);t.close(),n&&(this.$data.cid=n.next_cid,n.data.forEach(e=>{let t=this.createListViewItem(e);i.appendChild(t)}),n.data.length===0?e.default.error(`获取小黑屋名单为空`):e.default.success(`成功获取 ${n.data.length}条数据`),D.emit(a,`input`))}},cancel:{text:`关闭`}},width:`88vw`,height:`82vh`,style:be}),i=r.$shadowRoot.querySelector(`.blackhome-user-list`),a=r.$shadowRoot.querySelector(`.blackhome-user-filter input`);n.data.forEach(e=>{let t=this.createListViewItem(e);i.appendChild(t)}),e.default.success(`成功获取 ${n.data.length}条数据`);let o=!1;D.on(a,[`input`,`propertychange`],E.debounce(()=>{let e=a.value.trim();if(!o){if(o=!0,e==``){r.$shadowRoot.querySelectorAll(`.blackhome-user-item`).forEach(e=>{e.removeAttribute(`style`)}),o=!1;return}r.$shadowRoot.querySelectorAll(`.blackhome-user-item`).forEach(t=>{t.getAttribute(`data-name`).match(new RegExp(e,`ig`))||t.getAttribute(`data-uid`).trim().match(new RegExp(e,`ig`))||t.getAttribute(`data-operator`).match(new RegExp(e,`ig`))?t.removeAttribute(`style`):t.setAttribute(`style`,`display:none;`)}),o=!1}}));let s=await this.getBlackListInfo(this.$data.cid);s&&(this.$data.cid=s.next_cid)},async getBlackListInfo(e=``){let t={mod:`misc`,action:`showdarkroom`,cid:e,ajaxdata:`json`},n=await A.get(`/forum.php?${E.toSearchParamsStr(t)}`,{headers:{"User-Agent":E.getRandomPCUA()},responseType:`json`});if(!n.status)return;let r=E.toJSON(n.data.responseText),i=r.message.split(`|`),a=i[i.length-1],o=E.parseObjectToArray(r.data),s=[],c=[];return o.forEach(e=>{let t=e.dateline.match(/([0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]*[0-9]{1,2}:[0-9]{1,2})/g);if(t==null){let t=parseInt((Date.now()/1e3).toString()),n=0,r=e.dateline.match(/([0-9]+|半)[\s\S]*秒前/),i=e.dateline.match(/([0-9]+|半)[\s\S]*分钟前/),a=e.dateline.match(/([0-9]+|半)[\s\S]*小时前/),o=e.dateline.match(/昨天[\s\S]*(\d{2}):(\d{2})/),c=e.dateline.match(/前天[\s\S]*(\d{2}):(\d{2})/),l=e.dateline.match(/([0-9]+|半)[\s\S]*天前/);if(r)r=r[r.length-1],r=r.replace(/半/g,.5),r=parseFloat(r),n=t-r;else if(i)i=i[i.length-1],i=i.replace(/半/g,.5),i=parseFloat(i),n=t-i*60;else if(a)a=a[a.length-1],a=a.replace(/半/g,.5),a=parseFloat(a),n=t-a*60*60;else if(o){let e=o[1],r=o[2];n=t-86400-parseInt(e)*3600-parseInt(r)*60}else if(c){let e=c[1],r=c[2];n=t-86400*2-parseInt(e)*3600-parseInt(r)*60}else l&&(l=l[l.length-1],l=l.replace(/半/g,.5),l=parseFloat(l),n=t-l*60*60*24);e.time=parseInt(n.toString())*1e3,s=s.concat(e);return}else t=t[0];e.time=E.formatToTimeStamp(t),s=s.concat(e)}),E.sortListByProperty(s,`time`),E.sortListByProperty(c,`time`,!1),s=s.concat(c),{next_cid:a,data:s}},createListViewItem(e){let t=D.createElement(`div`,{className:`blackhome-user-item`,innerHTML:`
                <div class="blackhome-user-avatar">
                    <div class="blackhome-user">
                    <img src="${U.getAvatar(e.uid,`big`)}" loading="lazy">
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
                        <img loading="lazy" src="${U.getAvatar(e.operatorid,`big`)}">
                        <p>${e.operator}</p>
                    </div>
                    <div class="blackhome-operator-user-info">
                    ${e.reason}
                    </div>
                    </div>
                </div>
                `},{"data-name":e.username,"data-uid":e.uid,"data-operator":e.operator,"data-operator-uid":e.operatorid});return D.on(t,`click`,`.blackhome-user img`,function(){window.open(`home.php?mod=space&uid=${e.uid}&do=profile`,`_blank`)},{overrideTarget:!1}),D.on(t,`click`,`.blackhome-operator-user img`,function(){window.open(`home.php?mod=space&uid=${e.operatorid}&do=profile`,`_blank`)},{overrideTarget:!1}),t}},Se=`.pops-alert-content {
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
`,Ce={$data:{},init(){this.registerMenu()},registerMenu(){V.registerLeftMenu({name:`在线用户`,iconColor:`#2d92ff`,icon:``,callback:()=>{this.showOnlineUser()}})},async showOnlineUser(){let n=e.default.loading(`正在获取在线用户名单中...`),r=await this.getOnlineUserListInfo();if(n.close(),!r)return;let i=O.alert({title:{text:`在线用户`,position:`center`},content:{text:`
                <div class="online-user-info">${r.totalOnline} 人在线 - ${r.onlineUser} 会员${r.invisibleUser==0?``:`(${r.invisibleUser}隐身)`} - ${r.noRegisterUser} 位游客</div>
                <div class="online-user-filter">
                    <input placeholder="过滤用户名/身份/UID(可正则)"></div>
                <div class="online-user-list"></div>
                `,html:!0},btn:{ok:{text:`关闭`,type:`default`}},width:`88vw`,height:`82vh`,style:Se}),a=i.$shadowRoot.querySelector(`.online-user-list`),o=i.$shadowRoot.querySelector(`.online-user-filter input`);r.data.forEach(e=>{let t=this.createListViewItem(e);a.appendChild(t)}),e.default.success(`成功获取 ${r.data.length}条数据`);let s=!1;t.default.on(o,[`propertychange`,`input`],E.debounce(()=>{let e=o.value.trim();if(!s){if(s=!0,e==``){i.$shadowRoot.querySelectorAll(`.online-user-list .online-item`).forEach(e=>{e.removeAttribute(`style`)}),s=!1;return}i.$shadowRoot.querySelectorAll(`.online-user-list .online-item`).forEach(t=>{t.getAttribute(`data-name`).match(new RegExp(e,`ig`))||t.getAttribute(`data-sf`).match(new RegExp(e,`ig`))||t.getAttribute(`data-uid`).match(new RegExp(e,`ig`))?t.removeAttribute(`style`):t.setAttribute(`style`,`display:none;`)}),s=!1}}))},async getOnlineUserListInfo(){let e=await A.get(`/forum.php?${E.toSearchParamsStr({showoldetails:`yes`})}`,{headers:{"User-Agent":E.getRandomPCUA()}});if(!e.status)return;let t=E.parseFromString(e.data.responseText,`text/html`),n={data:[],totalOnline:0,onlineUser:0,noRegisterUser:0,invisibleUser:0};t.querySelectorAll(`#onlinelist ul li`).forEach(e=>{let t=e.querySelector(`a`).getAttribute(`href`).match(`uid-(.+?).html`)[1],r=U.getAvatar(t,`middle`),i=e.querySelector(`a`).innerText,a=``,o=e.querySelector(`a`).getAttribute(`href`),s=e.querySelector(`img`).src;a=s.indexOf(`online_member`)==-1?s.indexOf(`online_moderator`)==-1?s.indexOf(`online_supermod`)==-1?s.indexOf(`online_admin`)==-1?`未知身份`:`管理员`:`超级版主`:`版主`:`会员`,n.data.push({uid:t,avatar:r,name:i,sf:a,space:o})});let r=t.querySelector(`#online div.bm_h span.xs1`).textContent;return n.totalOnline=E.parseInt(r.match(/([0-9]*)\s*人在线/i),0),n.onlineUser=E.parseInt(r.match(/([0-9]*)\s*会员/i),0),n.noRegisterUser=E.parseInt(r.match(/([0-9]*)\s*位游客/i),0),n.invisibleUser=E.parseInt(r.match(/([0-9]*)\s*隐身/i),0),n},createListViewItem(e){let n=t.default.createElement(`div`,{className:`online-item`,innerHTML:`
                <div class="online-user">
                    <img data-avatar src="${e.avatar}" loading="lazy" class="online-user-avatar">
                    <div class="online-user-info">
                        <p data-name>${e.name}</p>
                        <span data-sf="${e.sf}">${e.sf}</span>
                        <span data-uid>UID: ${e.uid}</span>
                    </div>
                </div>
            `},{"data-name":e.name,"data-uid":e.uid,"data-sf":e.sf});return t.default.on(n,`click`,`.online-user-avatar`,n=>{t.default.preventEvent(n),window.open(`home.php?mod=space&uid=${e.uid}&do=profile`,`_blank`)},{overrideTarget:!1}),n}},we=()=>{let e=`texttolink`,t=/((https?:\/\/|www\.)[\x21-\x7e]+[\w\/]|(\w[\w._-]+\.(com|cn|org|net|info|tv|cc))(\/[\x21-\x7e]*[\w\/])?|ed2k:\/\/[\x21-\x7e]+\|\/|thunder:\/\/[\x21-\x7e]+=)/gi,n=function(t){let n=t.originalTarget??t.target,r;if(n!=null&&n.localName===`a`&&n.className.indexOf(e)!==-1&&(r=n.getAttribute(`href`),typeof r==`string`&&r.indexOf(`http`)!==0&&r.indexOf(`ed2k://`)!==0&&r.indexOf(`thunder://`)!==0))return n.setAttribute(`href`,`http://`+n)},r=function(n){if(typeof n!=`object`||!n)return;let r=n?.textContent,i=n?.parentNode;if(i!=null&&i?.className?.indexOf?.(e)===-1&&n.nodeName!==`#cdata-section`&&typeof r==`string`){let a=r.replace(t,`<a href="$1" target="_blank" class="${e}">$1</a>`);if(r.length!==a.length){let e=document.createElement(`span`);D.html(e,a);let t=e.querySelector(`a`),r=t.href;return console.log(`识别: ${r}`),i.nodeName.toLowerCase()===`span`?i.replaceChild(t,n):i.replaceChild(e,n)}}},i=`a svg canvas applet input button area pre embed frame frameset head iframe img option map meta noscript object script style textarea code`.split(` `),a=`//text()[not(ancestor::${i.join(`) and not(ancestor::`)})]`,o=RegExp(`^(${i.join(`|`)})$`,`i`),s=function(e,t){let n,i;if(t+1e4<e.snapshotLength){let a=n=t;for(i=t+1e4;t<=i?n<=i:n>=i;a=t<=i?++n:--n)r(e.snapshotItem(a));setTimeout(function(){return s(e,t+1e4)},15)}else{let a;for(a=n=t,i=e.snapshotLength;t<=i?n<=i:n>=i;a=t<=i?++n:--n)r(e.snapshotItem(a))}},c=function(e){return s(document.evaluate(a,e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null),0)},l=function(e){for(let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,{acceptNode:function(e){let t=e?.parentNode?.localName;return o.test(t)?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT}});t.nextNode();)r(t.currentNode)},u=new E.LockFunction(e=>{for(let t of e)if(t.type===`childList`){let e=t.addedNodes;for(let t=0;t<e.length;t++){let n=e[t];l(n)}}}),d=function(){return c(document.body),E.mutationObserver(document.body,{config:{subtree:!0,childList:!0},callback:e=>{u.run(e)}})},f=function(e){let t=e.getAttribute(`href`);if(typeof t==`string`&&t.indexOf(`http`)!==0&&t.indexOf(`ed2k://`)!==0&&t.indexOf(`thunder://`)!==0)return e.setAttribute(`href`,`http://`+t)};document.addEventListener(`mouseover`,n),setTimeout(function(){let t=Array.from(document.getElementsByClassName(e));for(let e of t)f(e)},1500),setTimeout(d,100)},Te={$key:{sign:`mt-sign-time`},init(){this.sign()},checkSignInfo(){let e=this.getSignInfo().find(e=>e.hostName===window.location.hostname);return e?E.formatTime(Date.now(),`yyyyMMdd`)===E.formatTime(e.time,`yyyyMMdd`):!1},setSignInfo(){let e={hostName:window.location.hostname,time:Date.now()},t=this.getSignInfo(),n=t.findIndex(t=>t.hostName===e.hostName);n!==-1&&t.splice(n,1),t.push(e),S(this.$key.sign,t)},getSignInfo(){let e=v(this.$key.sign,[]);return Array.isArray(e)?e:(this.clearSignInfo(),[])},getHostNameSignInfo(e=window.location.hostname){return this.getSignInfo().find(t=>t.hostName===e)},clearSignInfo(e){if(typeof e==`string`){let t=this.getSignInfo(),n=t.findIndex(t=>t.hostName===e);n!==-1&&t.splice(n,1),S(this.$key.sign,t)}else g(this.$key.sign)},checkLogin(){return U.envIsMobile()?!!M(`a[href*='member.php?mod=logging&action=logout']`):!!M(`#comiis_key`)},async sign(){if(this.checkSignInfo()){k.info(`今日已签到`);return}let t=await U.getFormHash();if(t==null){if(M(`#comiis_picshowbox`)){k.info(`当前为评论区的看图模式 `);return}this.clearSignInfo(window.location.hostname),e.default.error(`自动签到：获取账号formhash失败`,{consoleLogContent:!0});return}let r=!!B.getValue(`mt-auto-sign-useFetch`),i=E.getRandomPCUA(),a=()=>{this.setSignInfo()},o=()=>{this.clearSignInfo(window.location.hostname)},s=e=>{let t=n.default.alert({title:{text:`未知签到内容`,position:`center`},content:{text:``,html:!1},width:`88vw`,height:`300px`}).$shadowRoot.querySelector(`.pops-alert-content`);t.innerText=e},c=[{checkPluginEnableUrl:`/plugin.php?id=k_misign:sign`,async sign(){let n={operation:`qiandao`,format:`button`,formhash:t,inajax:1,ajaxtarget:`midaben_sign`},c=await A.get(`/k_misign-sign.html?${E.toSearchParamsStr(n)}`,{fetch:r,headers:{"User-Agent":i},allowInterceptConfig:!1});if(!c.status){e.default.error(`签到：网络异常，请求失败`,{consoleLogContent:!0});return}a(),k.info(`签到信息：`,c);let l=c.data.responseText,u=E.parseCDATA(l),d=D.toElement(`<div>${u}</div>`,!0,!1),f=D.text(d);if(f.includes(`需要先登录`)){e.default.error(`签到：请先登录账号`,{timeout:3e3,consoleLogContent:!0}),o();return}else if(f.includes(`请稍后再试`)||f.includes(`您已经被列入黑名单`)||f.includes(`绑定手机号后才可以签到`)||f.includes(`您所在用户组不允许使用`)){e.default.error(`签到：`+f,{timeout:5e3});return}else if(f.includes(`今日已签`)||f.includes(`今日已经签到`)){e.default.info(`签到：`+f);return}else if(l.includes(`您当前的访问请求当中含有非法字符，已经被系统拒绝`)){e.default.error(`签到: 您当前的访问请求当中含有非法字符，已经被系统拒绝`,{timeout:6e3});return}else if(r&&`location`in E.toJSON(l)){e.default.success(`签到: 签到成功`);return}let p=d.querySelector(`.con`),m=d.querySelector(`.line`);if(p&&m){let t=D.text(p).match(/([0-9]+)金币/),n=D.text(m).match(/([0-9]+)/),r=t[t.length-1],i=n[n.length-1];k.success(`金币${r}，排名${i}`),e.default.info(`
							<div style="display: flex;${U.envIsMobile()?``:`padding: 20px;`}">
								<div style="align-self: center;margin-right: 20px;">签到</div>
								<div>排名 ${i}<br>金币 ${r}</div>
							</div>`,{timeout:4e3,isHTML:!0});return}s(l)}},{checkPluginEnableUrl:`/plugin.php?id=dsu_paulsign:sign`,async sign(){let n=await A.post(`/plugin.php?${E.toSearchParamsStr({id:`dsu_paulsign:sign`,operation:`qiandao`,infloat:1,inajax:1})}`,{data:{formhash:t,qdxq:`kx`,qdmode:3,todaysay:``,fastreply:0},processData:!0,fetch:r,headers:{"User-Agent":i,"Content-Type":`application/x-www-form-urlencoded`},allowInterceptConfig:!1});if(!n.status){e.default.error(`签到：网络异常，请求失败`,{consoleLogContent:!0});return}a(),k.info(`签到信息：`,n);let o=n.data.responseText;if(o.includes(`签到成功`)){e.default.success(`签到：签到成功`);return}if(o.includes(`今日已经签到`)){e.default.info(`签到：您今日已经签到，请明天再来！`);return}s(o)}}];for(let e=0;e<c.length;e++){let t=c[e],n=await A.get(t.checkPluginEnableUrl,{fetch:r,headers:{"User-Agent":E.getRandomPCUA()},allowInterceptConfig:!1});if(!n.status){k.error(`签到：检查签到插件是否启用的请求失败`,n);continue}if(D.toElement(n.data.responseText,!0,!0).querySelector(`#messagetext`)||n.data.responseText.includes(`插件不存在或已关闭`)){k.error(`插件：${t.checkPluginEnableUrl} 未启用或不存在`);continue}await t.sign();break}}},Ee=class e{__href__;get __href(){return this.__href__||globalThis.location.href}__origin={value:void 0,type:`same`};__protocol={value:void 0,type:`same`};__host={value:void 0,type:`same`,hasPort:!1};__pathname={value:void 0,type:`same`};__searchParams={value:new Set};otherInstResultWithOr=!1;constructor(e){typeof e==`string`&&this.href(e)}href(e){return this.__href__=e,this}origin(e){return this.__origin={value:e,type:`same`},this}originStartsWith(e){return this.__origin={value:e,type:`startsWith`},this}originEndsWith(e){return this.__origin={value:e,type:`endsWith`},this}originIncludes(e){return this.__origin={value:e,type:`includes`},this}originMatch(e){return this.__origin={value:e,type:`match`},this}protocol(e){return this.__protocol={value:e,type:`same`},this}protocolStartsWith(e){return this.__protocol={value:e,type:`startsWith`},this}protocolEndsWith(e){return this.__protocol={value:e,type:`endsWith`},this}protocolIncludes(e){return this.__protocol={value:e,type:`includes`},this}protocolMatch(e){return this.__protocol={value:e,type:`match`},this}host(e){return this.__host={value:e,type:`same`,hasPort:!0},this}hostStartsWith(e){return this.__host={value:e,type:`startsWith`,hasPort:!0},this}hostEndsWith(e){return this.__host={value:e,type:`endsWith`,hasPort:!0},this}hostIncludes(e){return this.__host={value:e,type:`includes`,hasPort:!0},this}hostMatch(e){return this.__host={value:e,type:`match`,hasPort:!0},this}hostName(e){return this.__host={value:e,type:`same`,hasPort:!1},this}hostNameStartsWith(e){return this.__host={value:e,type:`startsWith`,hasPort:!1},this}hostNameEndsWith(e){return this.__host={value:e,type:`endsWith`,hasPort:!1},this}hostNameIncludes(e){return this.__host={value:e,type:`includes`,hasPort:!1},this}hostNameMatch(e){return this.__host={value:e,type:`match`,hasPort:!1},this}pathname(e){return this.__pathname={value:e,type:`same`},this}pathnameStartsWith(e){return this.__pathname={value:e,type:`startsWith`},this}pathnameEndsWith(e){return this.__pathname={value:e,type:`endsWith`},this}pathnameIncludes(e){return this.__pathname={value:e,type:`includes`},this}pathnameMatch(e){return this.__pathname={value:e,type:`match`},this}searchParams(e,t){return this.__searchParams.value.add({name:e,value:t}),this}search(e){return this.__searchParams.value.add({name:``,value:e,type:`same`}),this}searchStartsWith(e){return this.__searchParams.value.add({name:``,value:e,type:`startsWith`}),this}searchEndsWith(e){return this.__searchParams.value.add({name:``,value:e,type:`endsWith`}),this}searchIncludes(e){return this.__searchParams.value.add({name:``,value:e,type:`includes`}),this}searchMatch(e){return this.__searchParams.value.add({name:``,value:e,type:`match`}),this}build(){if(!this.__host.value)throw TypeError(`host or hostName should be required`);let e=`${this.__protocol.value||`https`}://${this.__host.value}${this.__pathname.value||`/`}`;if(this.__searchParams.value.size>0){let t=[];this.__searchParams.value.forEach(e=>{if(typeof e.name==`string`){let n=``;(typeof e.value==`string`||typeof e.value==`number`||typeof e.value==`boolean`)&&(n=e.value.toString()),t.push(`${encodeURIComponent(e.name)}=${encodeURIComponent(n)}`)}}),t.length&&(e+=`?${t.join(`&`)}`)}return e}or(t){this.otherInstResultWithOr=this.otherInstResultWithOr||this.r();let n=new e(t);return n.otherInstResultWithOr=this.otherInstResultWithOr,n}r(){if(this.otherInstResultWithOr)return this.otherInstResultWithOr;let e=new URL(this.__href);return[()=>{if(this.__origin.value)if(this.__origin.type===`same`){if(typeof this.__origin.value==`string`)return e.origin===this.__origin.value;throw TypeError(`origin value should be string by type `+this.__origin.type)}else if(this.__origin.type===`startsWith`){if(typeof this.__origin.value==`string`)return e.origin.startsWith(this.__origin.value);throw TypeError(`origin value should be string by type `+this.__origin.type)}else if(this.__origin.type===`endsWith`){if(typeof this.__origin.value==`string`)return e.origin.endsWith(this.__origin.value);throw TypeError(`origin value should be string by type `+this.__origin.type)}else if(this.__origin.type===`includes`){if(typeof this.__origin.value==`string`)return e.origin.includes(this.__origin.value);throw TypeError(`origin value should be string by type `+this.__origin.type)}else if(this.__origin.type===`match`){if(this.__origin.value instanceof RegExp)return this.__origin.value.test(e.origin);if(typeof this.__origin.value==`string`)return e.origin.match(this.__origin.value);throw TypeError(`origin value should be RegExp or string by type `+this.__origin.type)}else throw TypeError(`origin type should be same or startsWith or endsWith or includes or match`);else return!0},()=>{if(this.__protocol.value)if(this.__protocol.type===`same`){if(typeof this.__protocol.value==`string`)return e.protocol===this.__protocol.value;throw TypeError(`protocol value should be string by type `+this.__protocol.type)}else if(this.__protocol.type===`startsWith`){if(typeof this.__protocol.value==`string`)return e.protocol.startsWith(this.__protocol.value);throw TypeError(`protocol value should be string by type `+this.__protocol.type)}else if(this.__protocol.type===`endsWith`){if(typeof this.__protocol.value==`string`)return e.protocol.endsWith(this.__protocol.value);throw TypeError(`protocol value should be string by type `+this.__protocol.type)}else if(this.__protocol.type===`includes`){if(typeof this.__protocol.value==`string`)return e.protocol.includes(this.__protocol.value);throw TypeError(`protocol value should be string by type `+this.__protocol.type)}else if(this.__protocol.type===`match`){if(this.__protocol.value instanceof RegExp)return this.__protocol.value.test(e.protocol);if(typeof this.__protocol.value==`string`)return e.protocol.match(this.__protocol.value);throw TypeError(`protocol value should be RegExp or string by type `+this.__protocol.type)}else throw TypeError(`protocol type should be same,startsWith,endsWith,includes,match`);else return!0},()=>{if(this.__host.value){let t=this.__host.hasPort?e.host:e.hostname;if(this.__host.type===`same`){if(typeof this.__host.value==`string`)return this.__host.value===t;throw TypeError(`host value should be string by type `+this.__host.type)}else if(this.__host.type===`startsWith`){if(typeof this.__host.value==`string`)return t.startsWith(this.__host.value);throw TypeError(`host value should be string by type `+this.__host.type)}else if(this.__host.type===`endsWith`){if(typeof this.__host.value==`string`)return t.endsWith(this.__host.value);throw TypeError(`host value should be string by type `+this.__host.type)}else if(this.__host.type===`includes`){if(typeof this.__host.value==`string`)return t.includes(this.__host.value);throw TypeError(`host value should be string by type `+this.__host.type)}else if(this.__host.type===`match`){if(this.__host.value instanceof RegExp)return this.__host.value.test(t);if(typeof this.__host.value==`string`)return t.match(this.__host.value);throw TypeError(`host value should be RegExp or string by type `+this.__host.type)}else throw TypeError(`host type should be same,startsWith,endsWith,includes,match`)}else return!0},()=>{if(this.__pathname.value)if(this.__pathname.type===`same`){if(typeof this.__pathname.value==`string`)return e.pathname===this.__pathname.value;throw TypeError(`pathname value should be string by type `+this.__pathname.type)}else if(this.__pathname.type===`startsWith`){if(typeof this.__pathname.value==`string`)return e.pathname.startsWith(this.__pathname.value);throw TypeError(`pathname value should be string by type `+this.__pathname.type)}else if(this.__pathname.type===`endsWith`){if(typeof this.__pathname.value==`string`)return e.pathname.endsWith(this.__pathname.value);throw TypeError(`pathname value should be string by type `+this.__pathname.type)}else if(this.__pathname.type===`includes`){if(typeof this.__pathname.value==`string`)return e.pathname.includes(this.__pathname.value);throw TypeError(`pathname value should be string by type `+this.__pathname.type)}else if(this.__pathname.type===`match`){if(this.__pathname.value instanceof RegExp)return this.__pathname.value.test(e.pathname);if(typeof this.__pathname.value==`string`)return e.pathname.match(this.__pathname.value);throw TypeError(`pathname value should be RegExp or string by type `+this.__pathname.type)}else throw TypeError(`pathname type should be same,startsWith,endsWith,includes,match`);else return!0},()=>{let t=!0,n=[];this.__searchParams.value.forEach(e=>{n.push(e)});for(let r=0;r<n.length;r++){let i=n[r];if(i.type)if(i.type===`same`){if(typeof i.value==`string`||typeof i.value==`number`||typeof i.value==`boolean`)return e.search===i.value.toString();throw TypeError(`search value should be string、number、boolean by type `+i.type)}else if(i.type===`startsWith`){if(typeof i.value==`string`||typeof i.value==`number`||typeof i.value==`boolean`)return e.search.startsWith(i.value.toString());throw TypeError(`search value should be string、number、boolean by type `+i.type)}else if(i.type===`endsWith`){if(typeof i.value==`string`||typeof i.value==`number`||typeof i.value==`boolean`)return e.search.endsWith(i.value.toString());throw TypeError(`search value should be string、number、boolean by type `+i.type)}else if(i.type===`includes`){if(typeof i.value==`string`||typeof i.value==`number`||typeof i.value==`boolean`)return e.search.includes(i.value.toString());throw TypeError(`search value should be string、number、boolean by type `+i.type)}else if(i.type===`match`){if(i.value instanceof RegExp)return i.value.test(e.search);if(typeof i.value==`string`||typeof i.value==`number`||typeof i.value==`boolean`)return e.search.match(i.value.toString());throw TypeError(`search value should be RegExp、string、number、boolean by type `+i.type)}else throw TypeError(`search type should be same, startsWith, endsWith, includes, match`);else if(typeof i.name==`string`){let n=i.value;if(n==null||typeof n==`string`||typeof n==`number`||typeof n==`boolean`){if(n=n?.toString(),!e.searchParams.has(i.name,n)){t=!1;break}}else if(n instanceof RegExp){let r=e.searchParams.get(i.name);if(r){if(!n.test(r)){t=!1;break}}else{t=!1;break}}else throw TypeError(`searchParams value should be string, RegExp, boolean, number, null, undefined`)}else if(i.name instanceof RegExp){let n,r;if(e.searchParams.forEach((e,t)=>{!n&&t.match(i.name)&&(n=t,r=e)}),n){let e=i.value;if(e!=null)if(typeof e==`string`||typeof e==`number`||typeof e==`boolean`){if(e=e.toString(),t=e===r,!t)break}else if(e instanceof RegExp)if(r){if(!e.test(r)){t=!1;break}}else{t=!1;break}else throw TypeError(`searchParams value should be string, RegExp, boolean, number, null, undefined`)}else{t=!1;break}}else throw TypeError(`searchParams name should be string or RegExp`)}return t}].every(e=>e())}},W={host(e,t){return W.builder(t).host(e)},hostName(e,t){return W.builder(t).hostName(e)},search(e,t){return W.builder(t).search(e)},seachParams(e,t,n){return W.builder(n).searchParams(e,t)},pathname(e,t){return W.builder(t).pathname(e)},protocol(e,t){return W.builder(t).protocol(e)},builder(e){return new Ee(e)}},G={isKMiSign(){return W.builder().pathnameStartsWith(`/k_misign-sign.html`).r()},isPost(){return W.builder().pathnameStartsWith(`/thread-`).r()||W.builder().pathnameStartsWith(`/forum.php`).searchParams(`mod`,`viewthread`).r()},isPage(){return W.builder().pathnameMatch(/^\/page-([0-9]+).html/g).r()},isGuide(){return W.builder().pathnameStartsWith(`/forum.php`).searchParams(`mod`,`guide`).r()},isPlate(){return W.builder().pathnameMatch(/\/forum-[0-9]{1,2}-[0-9]{1,2}.html/g).r()},isSearch(){return W.builder().pathnameStartsWith(`/search.php`).r()},isSpace(){return W.builder().pathnameStartsWith(`/home.php`).searchParams(`mod`,`space`).r()},isMySpace(){return W.builder().pathnameStartsWith(`/home.php`).searchParams(`mod`,`space`).searchParams(`do`,`profile`).searchParams(`mycenter`).r()},isSpaceWithAt(){return W.builder().pathnameStartsWith(`/space-uid-`).r()},isForumList(){return W.builder().pathnameStartsWith(`/forum.php`).searchParams(`forumlist`).r()},isMessage(){return W.builder().pathnameStartsWith(`/home.php`).searchParams(`mod`,`space`).searchParams(`do`,`notice`).r()},isMessageList(){return W.builder().pathnameStartsWith(`/home.php`).searchParams(`mod`,`space`).searchParams(`do`,`pm`).r()},isPointsMall(){return W.builder().pathnameStartsWith(`/keke_integralmall-keke_integralmall.html`).or().pathnameStartsWith(`/plugin.php`).searchParams(`id`,`keke_integralmal`).r()},isPostPublish(){return W.builder().pathnameStartsWith(`/forum.php`).searchParams(`mod`,`post`).r()},isPostPublish_voting(){return W.builder().pathnameStartsWith(`/forum.php`).searchParams(`special`,`1`).or().searchParams(`fid`,`42`).r()},isPostPublish_edit(){return this.isPostPublish()&&W.seachParams(`action`,`edit`).r()},isPostPublish_newthread(){return this.isPostPublish()&&W.seachParams(`action`,`newthread`).r()},isPostPublish_reply(){return this.isPostPublish()&&W.seachParams(`action`,`reply`).r()}},De=`#comiis_foot_menu_beautify {
  position: fixed;
  display: inline-flex;
  z-index: 90;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 48px;
  overflow: hidden;
  align-content: center;
  justify-content: center;
  align-items: center;
}
#comiis_foot_menu_beautify_big {
  position: fixed;
  display: inline-flex;
  flex-direction: column;
  z-index: 92;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  min-height: 120px;
  overflow: hidden;
  align-content: center;
  justify-content: center;
  align-items: center;
}
#comiis_foot_menu_beautify input.bg_e.f_c::-webkit-input-placeholder {
  padding-left: 10px;
  color: #999;
}
#comiis_foot_menu_beautify input.bg_e.f_c::-moz-input-placeholder {
  padding-left: 10px;
  color: #999;
}
#comiis_foot_menu_beautify .reply_area ul li a {
  display: block;
  width: 22px;
  height: 22px;
  padding: 4px 8px;
  margin: 8px 0;
  position: relative;
}
#comiis_foot_menu_beautify .reply_area ul {
  display: inline-flex;
  align-content: center;
  align-items: center;
  justify-content: center;
}
#comiis_foot_menu_beautify .reply_area,
#comiis_foot_menu_beautify .reply_area ul {
  width: 100%;
}
#comiis_foot_menu_beautify .reply_area li a i {
  width: 22px;
  height: 22px;
  line-height: 22px;
  font-size: 22px;
}
#comiis_foot_menu_beautify .reply_area li a span {
  position: absolute;
  display: block;
  font-size: 10px;
  height: 14px;
  line-height: 14px;
  padding: 0 6px;
  right: -8px;
  top: 4px;
  overflow: hidden;
  border-radius: 20px;
}
#comiis_foot_menu_beautify li[data-attr="回帖"] input {
  border: transparent;
  border-radius: 15px;
  height: 30px;
  width: 100%;
}
#comiis_foot_menu_beautify_big .comiis_smiley_box {
  padding: 6px 6px 0;
}
#comiis_foot_menu_beautify_big .reply_area {
  margin: 10px 0 5px 0;
}
#comiis_foot_menu_beautify_big .reply_area ul {
  display: inline-flex;
  align-content: center;
  justify-content: center;
  align-items: flex-end;
}
#comiis_foot_menu_beautify_big li[data-attr="回帖"] {
  width: 75vw;
  margin-right: 15px;
}
#comiis_foot_menu_beautify_big .reply_user_content {
  width: 75vw;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 8px 10px;
}
#comiis_foot_menu_beautify_big li[data-attr="发表"] .fastpostform_new {
  text-align: center;
  margin-bottom: 28px;
}
#comiis_foot_menu_beautify_big li[data-attr="发表"] .fastpostform_new i {
  font-size: 22px;
}
#comiis_foot_menu_beautify_big li[data-attr="发表"] input {
  width: 60px;
  height: 30px;
  border: transparent;
  color: #fff;
  background: #d1c9fc;
  border-radius: 30px;
  margin-bottom: 6px;
}
#comiis_foot_menu_beautify_big li[data-attr="发表"] input[data-text="true"] {
  background: #7a61fb;
}
#comiis_foot_menu_beautify_big li[data-attr="回帖"] textarea {
  padding: 10px 10px 10px 10px;
  border: transparent;
  border-radius: 6px;
  min-height: 70px;
  max-height: 180px;
  background: #e9e8ec;
  overflow-y: auto;
  width: -webkit-fill-available;
  width: -moz-available;
}
#comiis_foot_menu_beautify .reply_area li[data-attr="回帖"] {
  width: 65%;
  margin: 0 3%;
  text-align: center;
}
#comiis_foot_menu_beautify .reply_area li:not(first-child) {
  width: 7%;
  text-align: -webkit-center;
  text-align: center;
}
#comiis_foot_menu_beautify_big .other_area {
  width: 100%;
  text-align: center;
}
#comiis_foot_menu_beautify_big .other_area .menu_icon a {
  margin: 0 20px;
}
#comiis_foot_menu_beautify_big .other_area i {
  font-size: 24px;
}
#comiis_foot_menu_beautify_big .other_area #comiis_insert_ubb_tab i {
  font-size: 16px;
}
#comiis_foot_menu_beautify_big .other_area .menu_body {
  background: #f4f4f4;
}
#comiis_foot_menu_beautify_big .other_area .menu_body .comiis_smiley_box .comiis_optimization {
  max-height: 140px;
  overflow-y: auto;
  flex-direction: column;
}
#comiis_foot_menu_beautify_big .other_area .menu_body .comiis_smiley_box .bqbox_t {
  background: #fff;
}
#comiis_foot_menu_beautify_big
  .other_area
  .menu_body
  .comiis_smiley_box
  .bqbox_t
  ul#comiis_smilies_key
  li
  a.bg_f.b_l.b_r {
  background: #f4f4f4 !important;
}
#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab #comiis_pictitle_key {
  display: -webkit-box;
  top: 0;
  left: 0;
  height: 42px;
  line-height: 42px;
  overflow: hidden;
  overflow-x: auto;
}
#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab #comiis_pictitle_key li {
  padding: 0 10px;
}
#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab .comiis_input_style,
#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab .comiis_upbox {
  height: 140px;
  overflow-y: auto;
  flex-direction: column;
}
#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab #filedata_hello,
#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab #filedata_kggzs,
#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab #filedata_mt,
#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab #filedata_z4a {
  display: none;
}
@media screen and (max-width: 350px) {
  .comiis_bqbox .bqbox_c li {
    width: 14.5%;
  }
}
@media screen and (min-width: 350px) and (max-width: 400px) {
  .comiis_bqbox .bqbox_c li {
    width: 12.5%;
  }
}
@media screen and (min-width: 400px) and (max-width: 450px) {
  .comiis_bqbox .bqbox_c li {
    width: 11%;
  }
}
@media screen and (min-width: 450px) and (max-width: 500px) {
  .comiis_bqbox .bqbox_c li {
    width: 10%;
  }
}
@media screen and (min-width: 500px) and (max-width: 550px) {
  .comiis_bqbox .bqbox_c li {
    width: 9.5%;
  }
}
@media screen and (min-width: 550px) and (max-width: 600px) {
  .comiis_bqbox .bqbox_c li {
    width: 9%;
  }
}
@media screen and (min-width: 600px) and (max-width: 650px) {
  .comiis_bqbox .bqbox_c li {
    width: 8.5%;
  }
}
@media screen and (min-width: 650px) and (max-width: 700px) {
  .comiis_bqbox .bqbox_c li {
    width: 8%;
  }
}
@media screen and (min-width: 700px) and (max-width: 750px) {
  .comiis_bqbox .bqbox_c li {
    width: 7.5%;
  }
}
@media screen and (min-width: 750px) and (max-width: 800px) {
  .comiis_bqbox .bqbox_c li {
    width: 7%;
  }
}
@media screen and (min-width: 800px) and (max-width: 850px) {
  .comiis_bqbox .bqbox_c li {
    width: 6.5%;
  }
}
@media screen and (min-width: 850px) and (max-width: 1200px) {
  .comiis_bqbox .bqbox_c li {
    width: 6%;
  }
}
@media screen and (min-width: 1200px) {
  .comiis_bqbox .bqbox_c li {
    width: 4.5%;
  }
}
#imglist_settings button {
  font-size: 13.333px;
  color: #9baacf;
  outline: 0;
  border: none;
  height: 35px;
  width: 80px;
  border-radius: 10px;
  box-shadow:
    0.3rem 0.3rem 0.6rem #c8d0e7,
    -0.2rem -0.2rem 0.5rem #fff;
  font-weight: 800;
  line-height: 40px;
  background: #efefef;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
#imglist_settings button:active {
  box-shadow:
    inset 0.2rem 0.2rem 0.5rem #c8d0e7,
    inset -0.2rem -0.2rem 0.5rem #fff !important;
  color: #638ffb !important;
}

#comiis_head .header_y {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
}
#comiis_head .header_y input {
  border: transparent;
  background: 0 0;
  text-align: center;
  margin: 0 5px;
}
#comiis_head .header_y input[value="删除"] {
  color: #d00;
}
#comiis_head .header_y input[value="保存"] {
  color: #b0ff6a;
}
#comiis_head .header_y input[value="保存草稿"] {
  color: #f90;
}
#comiis_head .header_y input[value="发表"] {
  color: #b0ff6a;
}
#comiis_head .header_y input[value="回复"] {
  color: #b0ff6a;
}
#comiis_post_tab {
  color: #000;
}
#comiis_pictitle_tab #imglist input {
  display: none;
}

.comiis_post_imglist .delImg {
  position: absolute;
  top: -5px;
  left: -5px;
}

.comiis_post_imglist .p_img a {
  float: left;
  height: 36px;
}
#imglist .p_img a {
  float: left;
  height: 36px;
}
#imglist .del a {
  padding: 0;
}
`,Oe=[],ke=class{option;$data={STORAGE_KEY:`mt-image-bed-upload-history`};constructor(t){this.option=t,Oe.push({id:this.option.id,callback:this.option.delImageEvent.bind(this)}),this.addTab(),D.on(`.comiis_post_imglist[data-chartbed="${this.option.name}"] .up_btn a`,`click`,async e=>{await this.option.uploadBtnClickEvent(e)&&M(`.comiis_post_imglist[data-chartbed="${this.option.name}"] input[type="file"]`).click()}),D.on(`.comiis_post_imglist[data-chartbed="${this.option.name}"] input[type="file"]`,`change`,async t=>{let n=t.target,r=()=>{n.value=``},i=async e=>{let n=await this.option.fileChangeEvent(t,e);r(),n.success&&n.data.forEach(e=>{this.addImage(e);let t=this.createImageBtnElement(`插入`,e.url);this.setImageBtnDeleteEvent(t,e),D.append(`.comiis_post_imglist[data-chartbed="${this.option.name}"]`,t)})};if(n.files&&n.files.length){let t=n.files;if(B.getValue(`mt-image-bed-watermark-enable`)){let a=e.default.loading(`处理水印中...`),o=[],s=[];await Promise.all(Array.from(n.files).map(async(n,r)=>{if(n.type===`image/gif`){let e=await E.parseFileToBase64(n);o.push(e),s.push(n)}else{e.default.info(`添加水印 ${r+1}/${t.length}`);var i=new window.Watermark;await i.setFile(n),i.addText({text:[B.getValue(`mt-image-bed-watermark-text`)],color:B.getValue(`mt-image-bed-watermark-text-color`),fontSize:B.getValue(`mt-image-bed-watermark-font-size`),globalAlpha:B.getValue(`mt-image-bed-watermark-font-opacity`),xMoveDistance:B.getValue(`mt-image-bed-watermark-left-right-margin`),yMoveDistance:B.getValue(`mt-image-bed-watermark-top-bottom-margin`),rotateAngle:B.getValue(`mt-image-bed-watermark-rotate`)}),o.push(i.render(`png`)),s.push(E.parseBase64ToFile(i.render(`png`),`WaterMark_`+n.name))}})),a.close(),t=s,B.getValue(`mt-image-bed-watermark-autoAddWaterMark`)?await i(t):O.confirm({title:{text:`水印预览`,position:`center`},content:{text:`
									<div class="upload-image-water">${o.map(e=>`<img src="${e}" crossoriginNew="anonymous" loading="lazy">`).join(`
`)}
									</div>
									`,html:!0},btn:{ok:{text:`继续上传`,async callback(e,n){e.close(),await i(t)}},close:{callback(e,t){e.close(),r()}},cancel:{callback(e,t){e.close(),r()}}},width:`88vw`,height:`80vh`,style:`
								.upload-image-water {

								}
								.upload-image-water img{
									width: 100%;
								}
								`})}else await i(t)}})}addTab(){let e=M(`#comiis_pictitle_key`);if(!e)return;let t=e.querySelector(`a[data-type='history']`),n=`
    <li>
        <a href="javascript:;" class="comiis-picture-tab" data-type="image-bed">${this.option.name}</a>
    </li>`;if(!t){let n=D.createElement(`li`);t=D.createElement(`a`,{href:`javascript:;`,className:`comiis-picture-tab`,innerHTML:`历史图片`},{"data-type":`history`}),D.on(t,`click`,()=>{this.initHistoryUploadImageList()}),D.append(n,t),D.append(e,n)}D.before(t.parentElement,n);let r=M(`#comiis_pictitle_tab .bqbox_t`),i=Array.from(N(`#comiis_pictitle_tab .comiis_upbox`)).find(e=>!!e.querySelector(`#imglist_history`));i||=(i=D.createElement(`div`,{className:`comiis_upbox bg_f cl`,innerHTML:`<ul class="comiis_post_imglist cl" id="imglist_history"></ul>`},{style:`display: none;`}),D.before(r,i),Array.from(N(`#comiis_pictitle_tab .comiis_upbox`)).find(e=>!!e.querySelector(`#imglist_history`))),D.before(i,`
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
            `)}createImageBtnElement(e,t){return D.createElement(`li`,{innerHTML:`
      <span class="delImg" data-id="${this.option.id}" data-name="${this.option.name}">
          <a href="javascript:;">
              <i class="comiis_font f_g"></i>
          </a>
      </span>
      <span class="charu f_f">${e}</span>
      <span class="p_img">
          <a href="javascript:;"
          onclick="comiis_addsmilies('[img]${t}[/img]')">
              <img style="height:54px;width:54px;" 
                  title="${t}" 
                  src="${t}" 
                  loading="lazy"
                  class="vm b_ok"></a>
      </span>`})}initHistoryUploadImageList(){let e=M(`#comiis_pictitle_tab #imglist_history`);e.innerHTML=``;let t=document.createDocumentFragment();this.getAllImage().forEach(e=>{let n=this.createImageBtnElement(e.labelName,e.data.url);this.setHistoryImageBtnDeleteEvent(n,e),t.appendChild(n)}),e.appendChild(t)}setImageBtnDeleteEvent(e,t){let n=e.querySelector(`.delImg`);D.on(n,`click`,async n=>{await this.option.delImageEvent(n,t)&&this.deleteImage(this.option.id,t)&&D.remove(e)})}setHistoryImageBtnDeleteEvent(e,t){let n=e.querySelector(`.delImg`);D.on(n,`click`,async n=>{let r=Oe.find(e=>e.id===t.id);r&&await r.callback(n,t.data)&&this.deleteImage(t.id,t.data)&&D.remove(e)})}addImage(e){let t=v(this.$data.STORAGE_KEY,[]);t.push({id:this.option.id,name:this.option.name,labelName:this.option.labelName,data:e}),S(this.$data.STORAGE_KEY,t)}getAllImage(){return v(this.$data.STORAGE_KEY,[])}deleteImage(e,t){let n=this.getAllImage(),r=n.findIndex(n=>n.id===e&&JSON.stringify(n.data)===JSON.stringify(t));return r==-1?!1:(n.splice(r,1),S(this.$data.STORAGE_KEY,n),!0)}},Ae={$data:{get account(){return B.getValue(`mt-image-bed-hello-account`)},get password(){return B.getValue(`mt-image-bed-hello-password`)},get token(){return B.getValue(`mt-image-bed-hello-token`)}},$code:{401:`未登录或授权失败`,403:`管理员关闭了接口功能或没有该接口权限`,429:`超出请求配额，请求受限`,500:`服务端出现异常`},$config:{base_url:`https://www.helloimg.com/api/v1`,TAG:`Hello图床：`},$tabConfig:{id:`www.helloimg.com`,name:`Hello图床`,labelName:`hello`},init(){let t=this;new ke({id:this.$tabConfig.id,name:this.$tabConfig.name,labelName:this.$tabConfig.labelName,async uploadBtnClickEvent(e){return await t.checkLogin()},async fileChangeEvent(n,r){let i=[],a=e.default.loading(`上传中...`),o=!0;for(let e=0;e<Array.from(r).length;e++){let n=Array.from(r)[e],a=await t.uploadImage(n);a?(i.push({url:a.data.links.url,data:a.data}),o&&=!0):o&&=!1}return a.close(),{success:o,data:i}},storageSaveCallBack(e){return e.data},async delImageEvent(n,r){if(await t.checkLogin()){let n=e.default.loading(`正在删除图片...`),i=await t.deleteImage(r.data.key)??!1;return n.close(),i}else return!1}})},async checkLogin(){return this.$data.account?this.$data.password?this.$data.token?!0:(e.default.error(`${this.$config.TAG}请先配置token`),!1):(e.default.error(`${this.$config.TAG}请先配置密码`),!1):(e.default.error(`${this.$config.TAG}请先配置账号`),!1)},async uploadImage(t){let n=new FormData;n.append(`file`,t),n.append(`permission`,`0`),n.append(`strategy_id`,`0`),n.append(`album_id`,`0`);let r=await A.post(`${this.$config.base_url}/upload`,{data:n,headers:{Accept:`application/json`,Authorization:`Bearer ${this.$data.token}`,"User-Agent":E.getRandomPCUA(),Referer:`${this.$config.base_url}/`,Origin:this.$config.base_url},allowInterceptConfig:!1});if(!r.status){k.error(r),e.default.error(this.$config.TAG+`网络异常，上传图片失败`);return}if(r.data.status in this.$code){k.error(r),e.default.error(this.$config.TAG+this.$code[r.data.status]);return}let i=E.toJSON(r.data.responseText);if(k.info(i),!i.status){e.default.error(this.$config.TAG+i.message);return}e.default.success(this.$config.TAG+`上传成功`);let a=new FileReader;return a.readAsDataURL(t),await new Promise(e=>{a.onload=function(){e({imageUri:this.result,data:i.data})}})},async deleteImage(t){let n=await A.delete(this.$config.base_url+`/images/`+t,{timeout:15e3,headers:{Accept:`application/json`,Authorization:`Bearer ${this.$data.token}`,"User-Agent":E.getRandomPCUA(),Referer:`${this.$config.base_url}/`,Origin:this.$config.base_url},allowInterceptConfig:!1});if(n.data.status in this.$code)return e.default.error(this.$config.TAG+this.$code[n.data.status]),!1;let r=E.toJSON(n.data.responseText);return r.status?(e.default.success(this.$config.TAG+`删除成功`),!0):(e.default.error(this.$config.TAG+r.message),!1)}},je={$data:{csrf_token:null},$config:{TAG:`MT图床：`,base_url:`https://img.binmt.cc`},$tabConfig:{id:`img.binmt.cc`,name:`MT图床`,labelName:`mt`},init(){let t=this;new ke({id:this.$tabConfig.id,name:this.$tabConfig.name,labelName:this.$tabConfig.labelName,async uploadBtnClickEvent(e){return await t.checkLogin()},async fileChangeEvent(n,r){let i=[],a=e.default.loading(`上传中...`),o=!0;for(let e=0;e<Array.from(r).length;e++){let n=Array.from(r)[e],a=await t.uploadImage(n);a?(i.push({url:a.data.links.url,data:a.data}),o&&=!0):o&&=!1}return a.close(),{success:o,data:i}},storageSaveCallBack(e){return e.data},async delImageEvent(e,t){return!0}})},async checkLogin(){if(!this.$data.csrf_token){let t=e.default.loading(`正在获取CSRF Token中...`),n=await this.getCSRFToken();if(t.close(),!n)return!1;this.$data.csrf_token=n}return!0},async getCSRFToken(){let t=await A.get(this.$config.base_url,{allowInterceptConfig:!1,headers:{"User-Agent":E.getRandomPCUA(),Referer:this.$config.base_url+`/`,Origin:this.$config.base_url}});if(!t.status){e.default.error(this.$config.TAG+`获取CSRF Token失败，网络异常`);return}let n=D.toElement(t.data.responseText,!0,!0).querySelector(`meta[name="csrf-token"]`)?.getAttribute(`content`);if(n)return k.info(`获取的CSRF token：`,n),e.default.success(this.$config.TAG+`获取CSRF Token成功`),n},async uploadImage(t){let n=new FormData;n.append(`strategy_id`,`2`),n.append(`file`,t);let r=await A.post(`${this.$config.base_url}/upload`,{data:n,headers:{Accept:`application/json, text/javascript, */*; q=0.01`,"User-Agent":E.getRandomAndroidUA(),Origin:this.$config.base_url,pragma:`no-cache`,"Accept-Encoding":`gzip, deflate, br`,"Accept-Language":`zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6`,Referer:this.$config.base_url+`/`,Pragma:`no-cache`,"x-csrf-token":this.$data.csrf_token,"X-Requested-With":`XMLHttpRequest`},allowInterceptConfig:!1});if(!r.status){k.error(r),e.default.error(this.$config.TAG+`网络异常，上传图片失败`);return}let i=E.toJSON(r.data.responseText);if(k.info(i),!i.status){k.error(r),e.default.error(this.$config.TAG+i.message||JSON.stringify(i));return}e.default.success(this.$config.TAG+`上传成功`);let a=new FileReader;return a.readAsDataURL(t),await new Promise(e=>{a.onload=function(){e({imageUri:this.result,data:i.data})}})}},Me=()=>[{"[呵呵]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq001.gif`,"[撇嘴]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq002.gif`,"[色]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq003.gif`,"[发呆]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq004.gif`,"[得意]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq005.gif`,"[流泪]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq006.gif`,"[害羞]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq007.gif`,"[闭嘴]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq008.gif`,"[睡]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq009.gif`,"[大哭]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq010.gif`,"[尴尬]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq011.gif`,"[发怒]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq012.gif`,"[调皮]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq013.gif`,"[呲牙]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq014.gif`,"[惊讶]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq015.gif`,"[难过]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq016.gif`,"[酷]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq017.gif`,"[冷汗]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq018.gif`,"[抓狂]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq019.gif`,"[吐]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq020.gif`,"[偷笑]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq021.gif`,"[可爱]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq022.gif`,"[白眼]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq023.gif`,"[傲慢]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq024.gif`,"[饥饿]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq025.gif`,"[困]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq026.gif`,"[惊恐]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq027.gif`,"[流汗]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq028.gif`,"[憨笑]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq029.gif`,"[装逼]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq030.gif`,"[奋斗]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq031.gif`,"[咒骂]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq032.gif`,"[疑问]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq033.gif`,"[嘘]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq034.gif`,"[晕]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq035.gif`,"[折磨]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq036.gif`,"[衰]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq037.gif`,"[骷髅]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq038.gif`,"[敲打]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq039.gif`,"[再见]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq040.gif`,"[擦汗]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq041.gif`,"[抠鼻]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq042.gif`,"[鼓掌]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq043.gif`,"[糗大了]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq044.gif`,"[坏笑]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq045.gif`,"[左哼哼]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq046.gif`,"[右哼哼]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq047.gif`,"[哈欠]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq048.gif`,"[鄙视]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq049.gif`,"[委屈]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq050.gif`,"[快哭了]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq051.gif`,"[阴脸]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq052.gif`,"[亲亲]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq053.gif`,"[吓]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq054.gif`,"[可怜]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq055.gif`,"[眨眼睛]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq056.gif`,"[笑哭]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq057.gif`,"[dogeQQ]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq058.gif`,"[泪奔]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq059.gif`,"[无奈]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq060.gif`,"[托腮]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq061.gif`,"[卖萌]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq062.png`,"[斜眼笑]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq063.gif`,"[喷血]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq064.gif`,"[惊喜]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq065.gif`,"[骚扰]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq066.gif`,"[小纠结]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq067.gif`,"[我最美]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq068.gif`,"[菜刀]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq069.gif`,"[西瓜]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq070.gif`,"[啤酒]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq071.gif`,"[篮球]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq072.gif`,"[乒乓]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq073.gif`,"[咖啡]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq074.gif`,"[饭]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq075.gif`,"[猪]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq076.gif`,"[玫瑰]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq077.gif`,"[凋谢]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq078.gif`,"[示爱]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq079.gif`,"[爱心]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq080.gif`,"[心碎]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq081.gif`,"[蛋糕]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq082.gif`,"[闪电]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq083.gif`,"[炸弹]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq084.gif`,"[刀]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq085.gif`,"[足球]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq086.gif`,"[瓢虫]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq087.gif`,"[便便]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq088.gif`,"[月亮]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq089.gif`,"[太阳]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq090.gif`,"[礼物]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq091.gif`,"[抱抱]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq092.gif`,"[喝彩]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq93.gif`,"[祈祷]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq94.gif`,"[棒棒糖]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq95.gif`,"[药]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq96.gif`,"[赞]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq097.gif`,"[差劲]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq098.gif`,"[握手]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq099.gif`,"[胜利]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq100.gif`,"[抱拳]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq101.gif`,"[勾引]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq102.gif`,"[拳头]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq103.gif`,"[爱你]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq105.gif`,"[NO]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq106.gif`,"[OK]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq107.gif`},{"[#呵呵]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_1.png`,"[#滑稽]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_10.png`,"[#吐舌]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_3.png`,"[#哈哈]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_2.png`,"[#啊]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_23.png`,"[#酷]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_22.png`,"[#怒]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_13.png`,"[#开心]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_39.png`,"[#汗]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_14.png`,"[#泪]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_16.png`,"[#黑线]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_15.png`,"[#鄙视]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_21.png`,"[#不高兴]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_12.png`,"[#真棒]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_17.png`,"[#钱]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_40.png`,"[#疑问]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_26.png`,"[#阴险]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_20.png`,"[#吐]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_34.png`,"[#咦]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_41.png`,"[#委屈]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_29.png`,"[#花心]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_6.png`,"[#呼～]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_42.png`,"[#激动]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_5.png`,"[#冷]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_43.png`,"[#可爱]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_4.png`,"[#What？]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_25.png`,"[#勉强]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_38.png`,"[#狂汗]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_24.png`,"[#酸爽]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_27.png`,"[#乖]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_8.png`,"[#雅美蝶]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_28.png`,"[#睡觉]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_31.png`,"[#惊哭]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_19.png`,"[#哼]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_44.png`,"[#笑尿]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_32.png`,"[#惊讶]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_30.png`,"[#小乖]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_7.png`,"[#喷]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_18.png`,"[#抠鼻]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_33.png`,"[#捂嘴笑]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_9.png`,"[#你懂的]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_11.png`,"[#犀利]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_35.png`,"[#小红脸]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_36.png`,"[#懒得理]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_37.png`,"[#爱心]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_45.png`,"[#心碎]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_46.png`,"[#玫瑰]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_47.png`,"[#礼物]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_48.png`,"[#彩虹]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_49.png`,"[#太阳]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_50.png`,"[#月亮]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_51.png`,"[#钱币]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_52.png`,"[#咖啡]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_53.png`,"[#蛋糕]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_54.png`,"[#大拇指]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_55.png`,"[#胜利]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_56.png`,"[#爱你]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_57.png`,"[#OK]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_58.png`,"[#弱]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_59.png`,"[#沙发]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_60.png`,"[#纸巾]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_61.png`,"[#香蕉]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_62.png`,"[#便便]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_63.png`,"[#药丸]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_64.png`,"[#红领巾]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_65.png`,"[#蜡烛]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_66.png`,"[#三道杠]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_67.png`,"[#音乐]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_68.png`,"[#灯泡]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_69.png`},{"[doge]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/1.png`,"[doge思考]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/2.png`,"[doge再见]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/3.png`,"[doge生气]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/4.png`,"[doge气哭]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/5.png`,"[doge笑哭]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/7.png`,"[doge调皮]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/6.png`,"[doge啊哈]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/8.png`,"[doge原谅TA]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/9.png`,"[miao]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/10.png`,"[miao思考]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/11.png`,"[miao拜拜]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/12.png`,"[miao生气]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/13.png`,"[miao气哭]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/14.png`,"[二哈]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/15.png`,"[摊手]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/19.png`,"[w并不简单]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/20.png`,"[w滑稽]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/21.png`,"[w色]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/22.png`,"[w爱你]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/23.png`,"[w拜拜]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/24.png`,"[w悲伤]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/25.png`,"[w鄙视]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/26.png`,"[w馋嘴]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/27.png`,"[w冷汗]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/28.png`,"[w打哈欠]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/29.png`,"[w打脸]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/30.png`,"[w敲打]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/31.png`,"[w生病]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/32.png`,"[w闭嘴]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/33.png`,"[w鼓掌]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/34.png`,"[w哈哈]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/35.png`,"[w害羞]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/36.png`,"[w呵呵]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/37.png`,"[w黑线]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/38.png`,"[w哼哼]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/39.png`,"[w调皮]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/40.png`,"[w可爱]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/41.png`,"[w可怜]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/42.png`,"[w酷]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/43.png`,"[w困]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/44.png`,"[w懒得理你]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/45.png`,"[w流泪]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/46.png`,"[w怒]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/47.png`,"[w怒骂]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/48.png`,"[w钱]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/49.png`,"[w亲亲]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/50.png`,"[w傻眼]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/51.png`,"[w便秘]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/52.png`,"[w失望]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/53.png`,"[w衰]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/54.png`,"[w睡觉]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/55.png`,"[w思考]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/56.png`,"[w开心]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/57.png`,"[w色舔]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/58.png`,"[w偷笑]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/59.png`,"[w吐]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/60.png`,"[w抠鼻]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/61.png`,"[w委屈]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/62.png`,"[w笑哭]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/63.png`,"[w嘻嘻]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/64.png`,"[w嘘]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/65.png`,"[w阴险]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/66.png`,"[w疑问]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/67.png`,"[w抓狂]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/70.png`,"[w晕]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/69.png`,"[w右哼哼]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/68.png`,"[w左哼哼]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/71.png`,"[w肥皂]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/77.png`,"[w奥特曼]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/78.png`,"[w草泥马]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/79.png`,"[w兔子]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/80.png`,"[w熊猫]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/81.png`,"[w猪头]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/82.png`,"[w→_→]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/83.png`,"[w给力]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/84.png`,"[w囧]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/85.png`,"[w萌]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/86.png`,"[w神马]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/87.png`,"[w威武]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/88.png`}],Ne=()=>({rainbow1:{key:`转普通彩虹`,value:``,isFunc:!0,num:1},rainbow2:{key:`转黑白彩虹`,value:``,isFunc:!0,num:2},rainbow3:{key:`转黑红彩虹`,value:``,isFunc:!0,num:3},rainbow4:{key:`转蓝绿彩虹`,value:``,isFunc:!0,num:4},size:{key:`大小`,value:`[size=][/size]`,tagL:`=`,tagR:`]`,L:`[size=]`,R:`[/size]`,cursorL:`[size=`,cursorLength:6,quickUBBReplace:`[size=14]replace[/size]`},color:{key:`颜色`,value:`[color=][/color]`,tagL:`=`,tagR:`]`,L:`[color=]`,R:`[/color]`,cursorL:`[color=`,cursorLength:7,quickUBBReplace:`[color=#000]replace[/color]`},b:{key:`加粗`,value:`[b][/b]`,tagL:`]`,tagR:`[`,L:`[b]`,R:`[/b]`,cursorR:`[/b]`,cursorLength:4,quickUBBReplace:`[b]replace[/b]`},u:{key:`下划线`,value:`[u][/u]`,tagL:`]`,tagR:`[`,L:`[u]`,R:`[/u]`,cursorR:`[/u]`,cursorLength:4,quickUBBReplace:`[u]replace[/u]`},i:{key:`倾斜`,value:`[i][/i]`,tagL:`]`,tagR:`[`,L:`[i]`,R:`[/i]`,cursorR:`[/i]`,cursorLength:4,quickUBBReplace:`[i]replace[/i]`},s:{key:`中划线`,value:`[s][/s]`,tagL:`]`,tagR:`[`,L:`[s]`,R:`[/s]`,cursorR:`[/s]`,cursorLength:4,quickUBBReplace:`[s]replace[/s]`},lineFeed:{key:`换行`,value:`[*]`,L:``,R:`[*]`,cursorL:`[*]`,cursorLength:3,quickUBBReplace:`replace[*]`},longHorizontalLine:{key:`水平线`,value:`[hr]`,L:``,R:`[hr]`,cursorL:`[hr]`,cursorLength:4,quickUBBReplace:`replace[hr]`},link:{key:`链接`,value:`[url=][/url]`,tagL:`=`,tagR:`]`,L:`[url=]`,R:`[/url]`,cursorL:`[url=`,cursorLength:5,quickUBBReplace:`[url=replace]replace[/url]`},hide:{key:`隐藏`,value:`[hide]
[/hide]`,tagL:`]`,tagR:`[`,L:`[hide]`,R:`[/hide]`,cursorR:`[/hide]`,cursorLength:7,quickUBBReplace:`[hide]replace
[/hide]`},quote:{key:`引用`,value:`[quote][/quote]`,tagL:`]`,tagR:`[`,L:`[quote]`,R:`[/quote]`,cursorR:`[/quote]`,cursorLength:8,quickUBBReplace:`[quote]replace[/quote]`},email:{key:`邮件`,value:`[email=][/email]`,tagL:`=`,tagR:`]`,L:`[email=]`,R:`[/email]`,cursorL:`[email=`,cursorLength:7,quickUBBReplace:`[email=replace]replace[/email]`}}),Pe=(e,t)=>{if(t==``)return``;var n=t,r,i,a=0,o=0,s=0,c,l,u=0;if(r=``,e==1){u=40,a=255,c=1,l=0;do n.charCodeAt(l)==32?r+=n.charAt(l):(o+u<256?c==1&&(o+=u):c==1&&(c=2,o=255),a-u>-1?c==2&&(a-=u):c==2&&(c=3,a=0),s+u<256?c==3&&(s+=u):c==3&&(c=4,s=255),o-u>-1?c==4&&(o-=u):c==4&&(c=5,o=0),a+u<256?c==5&&(a+=u):c==5&&(c=6,a=255),s-u>-1?c==6&&(s-=u):c==6&&(c=1,s=0),i=``,i+=parseInt(a).toString(16).length==1?0+parseInt(a).toString(16):parseInt(a).toString(16),i+=parseInt(o).toString(16).length==1?0+parseInt(o).toString(16):parseInt(o).toString(16),i+=parseInt(s).toString(16).length==1?0+parseInt(s).toString(16):parseInt(s).toString(16),i=i.toUpperCase(),r+=`[color=#${i}]${n.charAt(l)}[/color]`),l++;while(l<n.length)}else if(e==2)for(u=255/n.length,c=1;c<n.length+1;c++)n.charCodeAt(c-1)==32?r+=n.charAt(c-1):(a+=u,o+=u,s+=u,a>255&&(a=255),o>255&&(o=255),s>255&&(s=255),i=``,i+=parseInt(a).toString(16).length==1?0+parseInt(a).toString(16):parseInt(a).toString(16),i+=parseInt(o).toString(16).length==1?0+parseInt(o).toString(16):parseInt(o).toString(16),i+=parseInt(s).toString(16).length==1?0+parseInt(s).toString(16):parseInt(s).toString(16),i=i.toUpperCase(),r+=`[color=#${i}]${n.charAt(c-1)}[/color]`);else if(e==3)for(u=255/n.length,c=1;c<n.length+1;c++)n.charCodeAt(c-1)==32?r+=n.charAt(c-1):(a+=u,o=29,s=36,a>255&&(a=255),o>255&&(o=255),s>255&&(s=255),i=``,i+=parseInt(a).toString(16).length==1?0+parseInt(a).toString(16):parseInt(a).toString(16),i+=parseInt(o).toString(16).length==1?0+parseInt(o).toString(16):parseInt(o).toString(16),i+=parseInt(s).toString(16).length==1?0+parseInt(s).toString(16):parseInt(s).toString(16),i=i.toUpperCase(),r+=`[color=#${i}]${n.charAt(c-1)}[/color]`);else if(e==4)for(u=255/n.length,c=1;c<n.length+1;c++)n.charCodeAt(c-1)==32?r+=n.charAt(c-1):(a=0,o=174,s+=u,a>255&&(a=255),o>255&&(o=255),s>255&&(s=255),i=``,i+=parseInt(a).toString(16).length==1?0+parseInt(a).toString(16):parseInt(a).toString(16),i+=parseInt(o).toString(16).length==1?0+parseInt(o).toString(16):parseInt(o).toString(16),i+=parseInt(255-s).toString(16).length==1?0+parseInt(255-s).toString(16):parseInt(255-s).toString(16),i=i.toUpperCase(),r+=`[color=#${i}]${n.charAt(c-1)}[/color]`);return r},Fe=function(){C.$.fn.extend({insertAtCaret:function(e){var t=C.$(this)[0];if(document.selection){this.focus();var n=document.selection.createRange();n.text=e,this.focus()}else if(t.selectionStart||t.selectionStart==`0`){var r=t.selectionStart,i=t.selectionEnd,a=t.scrollTop;t.value=t.value.substring(0,r)+e+t.value.substring(i,t.value.length),this.focus(),t.selectionStart=r+e.length,t.selectionEnd=r+e.length,t.scrollTop=a}else this.value+=e,this.focus()},selectRange:function(e,t){return t===void 0&&(t=e),this.each(function(){if(`selectionStart`in this)this.selectionStart=e,this.selectionEnd=t;else if(this.setSelectionRange)this.setSelectionRange(e,t);else if(this.createTextRange){var n=this.createTextRange();n.collapse(!0),n.moveEnd(`character`,t),n.moveStart(`character`,e),n.select()}})},getCursorPosition:function(){var e=C.$(this)[0],t=0;if(`selectionStart`in e)t=e.selectionStart;else if(`selection`in document){e.focus();var n=document.selection.createRange(),r=document.selection.createRange().text.length;n.moveStart(`character`,-e.value.length),t=n.text.length-r}return t},moveCursorInCenterByText:function(e,t){var n=C.$(this)[0],r=n.value;for(let i=n.selectionStart-1;i>0;i--){let n=r[i-1],a=r[i];if(n==e&&a==t){this.selectRange(i);break}}},moveCursorToCenterByTextWithLeft:function(e,t){var n=C.$(this)[0],r=n.value;for(let i=n.selectionStart-1;i>0;i--)if(r.substring(i-t,i)==e){this.selectRange(i);break}},moveCursorToCenterByTextWithRight:function(e,t){var n=C.$(this)[0],r=n.value;for(let i=n.selectionStart-1;i>0;i--)if(r.substring(i,i+t)==e){this.selectRange(i+t);break}}})},Ie=[{match:`抱歉，您填写的内容包含敏感词而无法提交`,msg:`{$0}`},{match:/抱歉，管理员设置了本版块发表于 (.+?) 天以前的主题自动关闭，不再接受新回复/,msg:`抱歉，管理员设置了本版块发表于 {$1} 天以前的主题自动关闭，不再接受新回复`},{match:`抱歉，本主题已关闭，不再接受新内容`,msg:`{$0}`},{match:/抱歉，您的帖子小于 (.+?) 个字符的限制/,msg:`抱歉，您的帖子小于 {$1} 个字符的限制`}],Le=null,K={$data:{isUBBCodeInsertClick:!1,isPosting:!1,db:new r.default.indexedDB(`mt_reply_record`,`input_text`),forum_action:null,get tid(){return U.getThreadId(window.location.href)}},$el:{$like:null,$btn_submit:null,$input:null,$form:null,$fastpostsubmit:null},init(){k.info(`编辑器优化-简略版`),j(De),this.overridePageEditor()},overridePageEditor(){let e=M(`#comiis_foot_memu .comiis_flex li:nth-child(2)`),t=M(`#comiis_foot_memu .comiis_flex li:nth-child(3)`),n=M(`#comiis_foot_memu .comiis_flex li:nth-child(4)`);this.$el.$form=M(`#fastpostform`),this.$data.forum_action=this.$el.$form.getAttribute(`action`);let r=D.serialize(this.$el.$form),i=M(`#fastpostform .header_y a`).href;D.remove(`#needmessage[name='message']`),D.remove(`#imglist`),D.remove(`#fastpostsubmitline`),D.remove(`#fastpostsubmit`);let a=M(`#comiis_foot_memu`);D.hide(a,!1);let o=Me(),s=Object.keys(o[0]).map(e=>`<li><a href="javascript:;" onclick="comiis_addsmilies('${e}');"><img loading="lazy" data-src="${o[0][e]}" class="vm"></a></li>`),c=Object.keys(o[1]).map(e=>`<li><a href="javascript:;" onclick="comiis_addsmilies('${e}');"><img loading="lazy" data-src="${o[1][e]}" class="vm"></a></li>`),l=Object.keys(o[2]).map(e=>`<li><a href="javascript:;" onclick="comiis_addsmilies('${e}');"><img loading="lazy" data-src="${o[2][e]}" class="vm"></a></li>`);D.after(a,`
      <div id="comiis_foot_menu_beautify" class="bg_f b_t">
          <div class="reply_area">
              <ul>
                  <li data-attr="回帖"><input type="text" class="bg_e f_c" placeholder="发帖千百度，文明第一步" readonly="readonly"></li>
                  <li data-attr="评论数量">${e.innerHTML}</li>
                  <li data-attr="点赞">${t.innerHTML}</li>
                  <li data-attr="收藏">${n.innerHTML}</li>
              </ul>
          </div>
      </div>`,`
      <div id="comiis_foot_menu_beautify_big" data-model="comment" class="bg_f b_t" style="display:none;">
          <div class="reply_area">
              <div class="reply_user_content" style="display:none;"></div>
              <ul>
                  <li data-attr="回帖"><textarea id="needmessage" placeholder="发帖千百度，文明第一步"></textarea></li>
                  <li data-attr="发表">
                      <div class="fastpostform_new"><a href="${i}" data-comment-url="${i}" target="_blank"><i class="comiis_font f_d"></i></a></div>
                      <div id="fastpostsubmitline"><input data-comment-url="${i}" data-comment-action="${this.$data.forum_action}" data-comment-serialize="${r}" data-text="false" type="button" value="发表" name="replysubmit" id="fastpostsubmit" comiis="handle"></div>
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
                                  ${s.join(`
`)}
                              </div>
                              <div class="swiper-slide" style="display: none;">
                                  ${c.join(`
`)}
                              </div>
                              <div class="swiper-slide" style="display: none;">
                                  ${l.join(`
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
      `),M(`#comiis_foot_menu_beautify .comiis_position_key`),this.$el.$like=M(`#comiis_foot_menu_beautify .comiis_recommend_addkey`),M(`#comiis_foot_menu_beautify #comiis_favorite_a`),M(`#comiis_pictitle_key`),this.$el.$btn_submit=M(`#comiis_foot_menu_beautify_big li[data-attr="发表"] input`),this.$el.$input=M(`#comiis_foot_menu_beautify_big textarea`),this.$el.$fastpostsubmit=M(`#fastpostsubmit`),C.textarea_scrollHeight=()=>{},typeof C.comiis_addsmilies==`function`&&(C.comiis_addsmilies=e=>{C.$(`#needmessage`).comiis_insert(e),C.$(`#needmessage`)[0].dispatchEvent(new Event(`propertychange`))}),C.$(`#imglist .up_btn`).append(C.$(`#filedata`)),C.$(document).on(`click`,`#imglist .up_btn a`,function(){C.$(this).next().click()}),C.$(document).on(`click`,`#imglist .p_img a`,function(){let e=C.$(this);if(e.attr(`onclick`)==null){let t=e.find(`img`).attr(`id`).replace(`aimg_`,``);C.comiis_addsmilies(`[attachimg]${t}[/attachimg]`)}}),D.hide(`#comiis_foot_menu_beautify_big .menu_body`,!1),this.setInputChangeEvent(),this.setLikeBtnClickEvent(),this.setSubmitBtnClickEvent(),this.setGlobalReplyBtnClickEvent(),this.setGlobalClickCheckEvent(),this.setMenuIconToggleEvent(),this.setMenuImageClickEvent(),this.setMenuImageToggleEvent(),this.setMenuSmileClickEvent(),this.setMenuSmileTabClickEvent(),this.setMenuInsertClickEvent(),this.setMenuQuickUBB(),B.execMenu(`mt-forum-post-editorOptimizationNormal-recordInputText`,async()=>{this.setInputChangeSaveEvent(),await this.initReplyText()}),B.execMenuOnce(`mt-image-bed-hello-enable`,()=>{Ae.init()}),B.execMenuOnce(`mt-image-bed-mt-enable`,()=>{je.init()})},handle_error(t){let n=!1,r=D.text(D.toElement(t,!1,!1).querySelector(`#messagetext`));return!r||typeof r==`string`&&r.trim()==``||Ie.forEach(t=>{let i=t.match instanceof RegExp?t.match:new RegExp(t.match),a=r.match(i);if(a){if(r.includes(`typeof errorhandle_=='function'`)){let n=t.msg;a.forEach((e,t)=>{n=n.replace(`{$${t}}`,e)}),e.default.error(n)}n=!0;return}}),n},setInputChangeEvent(){let e=this;D.on(this.$el.$input,[`input`,`propertychange`],function(){e.$el.$input.value===``?(e.$el.$btn_submit.setAttribute(`data-text`,`false`),M(`#comiis_foot_menu_beautify li[data-attr='回帖'] input`)?.setAttribute(`placeholder`,`发帖千百度，文明第一步`)):(e.$el.$btn_submit.setAttribute(`data-text`,`true`),M(`#comiis_foot_menu_beautify li[data-attr='回帖'] input`)?.setAttribute(`placeholder`,`[草稿待发送]`)),D.css(e.$el.$input,`height`,`70px`),D.css(e.$el.$input,`height`,e.$el.$input.scrollHeight-20+`px`)})},setInputChangeSaveEvent(){let e=this;D.on(this.$el.$input,[`input`,`propertychange`],async()=>{let t=e.$el.$input.value,n=e.$el.$input.closest(`.reply_area`).querySelector(`.reply_user_content`).getAttribute(`data-reply-url`),r={url:window.location.href,text:t,repquote:n?U.getRepquote(n):void 0,forumId:e.$data.tid},i=await e.$data.db.get(`data`);if(!i.success||i.code===201){console.warn(i);return}let a=i.data.findIndex(e=>e.forumId===r.forumId&&e.repquote===r.repquote);a===-1?i.data.push(r):t==null||t===``?i.data.splice(a,1):i.data[a]=E.assign(i.data[a],{text:r.text}),await e.$data.db.save(`data`,i.data)})},async initReplyText(e=!1,t=void 0){let n=this;(await this.$data.db.get(`data`)).code===201&&await this.$data.db.save(`data`,[]);let r=await this.$data.db.get(`data`);if(!r.success||r.code===201){console.warn(r);return}let i;t&&(i=U.getRepquote(t));let a=r.data.find(t=>e?t.forumId===n.$data.tid&&t.repquote==i:t.forumId===n.$data.tid&&t.repquote==null);a&&(D.val(this.$el.$input,a.text),D.emit(this.$el.$input,`input`))},setLikeBtnClickEvent(){D.on(this.$el.$like,`click`,async t=>{if(D.preventEvent(t),C.comiis_recommend_key==0){C.comiis_recommend_key=1;let t=await A.get(this.$el.$like.href+`&inajax=1`,{headers:{Accept:`application/xml, text/xml, */*; q=0.01`},fetch:!0,allowInterceptConfig:!1});if(!t.status){window.location.href=this.$el.$like.href,setTimeout(function(){C.comiis_recommend_key=0},500);return}let o=E.parseFromString(t.data.responseText,`text/xml`).lastChild?.firstChild?.nodeValue;if(o.includes(`您已评价过本主题`)){let t=this.$el.$like.href.match(H.tid)[1];if(!(await A.get(`plugin.php?id=comiis_app&comiis=re_recommend&tid=${t}&inajax=1`,{headers:{Accept:`application/xml, text/xml, */*; q=0.01`},fetch:!0,allowInterceptConfig:!1})).status){e.default.error(`取消点赞失败，网络异常`);return}var n=Number(D.text(`#comiis_recommend_num`));document.querySelectorAll(`.comiis_recommend_list_a`).length>0&&D.remove(`#comiis_recommend_list_a`+C.uid),document.querySelectorAll(`.comiis_recommend_list_s`).length>0&&D.remove(`#comiis_recommend_list_s`+C.uid),document.querySelectorAll(`.comiis_recommend_list_t`).length>0&&D.remove(`#comiis_recommend_list_t`+C.uid),n>1?(D.text(`.comiis_recommend_num`,n-Number(C.allowrecommend)),D.text(`.comiis_recommend_nums`,`+`+(n-Number(C.allowrecommend)))):(D.remove(`#comiis_recommend_num`),D.text(`.comiis_recommend_nums`,``),document.querySelectorAll(`.comiis_recommend_list_a`).length>0&&(D.empty(`.comiis_recommend_list_a`),D.removeClass(`.comiis_recommend_list_a`,`comiis_recommend_list_on`)),document.querySelectorAll(`.comiis_recommend_list_t`).length>0&&D.removeClass(`.comiis_recommend_list_t`,`comiis_recommend_list_on`)),D.html(`.comiis_recommend_addkey i`,`&#xe63b;`),D.removeClass(`.comiis_recommend_color`,`f_a`),D.addClass(`.comiis_recommend_color`,`f_b`),document.querySelectorAll(`.comiis_recommend_list_s`).length>0&&(document.querySelectorAll(`.comiis_recommend_list_s li`).length<7?D.hide(`.txshow_more`,!1):D.show(`.txshow_more`,!1)),e.default.success(`已取消点赞`)}else if(o.includes(`您不能评价自己的帖子`))e.default.error(`不能点赞自己的帖子`);else if(o.includes(`今日评价机会已用完`))e.default.warning(`您今日的点赞机会已用完`);else if(o.includes(`'recommendv':'+`+C.allowrecommend+`'`)){var r={recommendc:0,daycount:0},i=o.match(/\'recommendc\':\'(.*?)\'/);i==null?r.recommendc=0:r.recommendc=parseInt(i[1]),i=o.match(/\'daycount\':\'(.*?)\'/),i==null?r.daycount=0:r.daycount=parseInt(i[1]),document.querySelectorAll(`.comiis_recommend_new span`).length<1&&D.append(`.comiis_recommend_new`,`<span class="bg_del f_f comiis_kmvnum comiis_recommend_num" id="comiis_recommend_num">0</span>`);var a=Number(D.text(`#comiis_recommend_num`));if(N(`.comiis_recommend_list_a`).length>0){let e=N(`.comiis_recommend_list_a`);D.removeClass(e,`comiis_recommend_list_on`),D.addClass(e,`comiis_recommend_list_on`),D.prepend(e,(N(`.comiis_recommend_list_a li`).length>0?``:`<li style="float:right;margin-right:0;"><a href="misc.php?op=recommend&tid= `+C.tid+`&mod=faq&mobile=2"><span class="bg_b f_c"><em class="comiis_recommend_num">`+a+`</em>赞</span></a></li>`)+`<li id="comiis_recommend_list_a`+C.uid+`"><a href="home.php?mod=space&uid=`+C.uid+`"><img src="`+U.getAvatar(C.uid,`small`)+`"></a></li>`)}if(N(`.comiis_recommend_list_t`).length>0){let e=N(`.comiis_recommend_list_t`);D.removeClass(e,`comiis_recommend_list_on`),D.addClass(e,`comiis_recommend_list_on`),D.prepend(e,`<span id="comiis_recommend_list_t${C.uid}">
                          							<a href="home.php?mod=space&uid=${C.uid}" class="f_c">${C.username}</a>
													${N(`.comiis_recommend_list_t a`).length>0?`<span class="f_d"> , </span>`:``}
                        						</span>`)}if(N(`.comiis_recommend_list_s`).length>0){let e=N(`.comiis_recommend_list_s`);D.removeClass(e,`comiis_recommend_list_on`),D.addClass(e,`comiis_recommend_list_on`),D.prepend(e,(N(`.comiis_recommend_list_s li`).length,``)+`<li id="comiis_recommend_list_s`+C.uid+`"><a href="home.php?mod=space&uid=`+C.uid+`"><img loading="lazy" src="`+U.getAvatar(C.uid,`small`)+`"></a></li>`)}D.text(`.comiis_recommend_num`,a+Number(C.allowrecommend)),D.text(`.comiis_recommend_nums`,`+`+(a+Number(C.allowrecommend))),D.html(`.comiis_recommend_addkey i`,`&#xe654;`),D.removeClass(`.comiis_recommend_color`,`f_b`),D.addClass(`.comiis_recommend_color`,`f_a`),N(`.comiis_recommend_list_s`).length>0&&(N(`.comiis_recommend_list_s li`).length<7?D.hide(`.txshow_more`,!1):D.show(`.txshow_more`,!1)),e.default.success(`点赞成功`+(r.daycount?`, 您今天还能点赞 ${r.daycount-1} 次`:``))}else o.indexOf(`window.location.href = 'member.php?mod=logging&action=login&mobile=2'`)>=0?window.location.href=`member.php?mod=logging&action=login&mobile=2`:e.default.error(`没有点赞权限或帖子不存在`);setTimeout(function(){C.comiis_recommend_key=0},500)}return!1})},setSubmitBtnClickEvent(){let t=this;D.on(this.$el.$fastpostsubmit,`click`,async n=>{D.preventEvent(n),t.$data.isPosting=!0;let r=M(`#needmessage`),i=D.val(r);if(i=encodeURIComponent(i),!(i==null||i===``)){try{if(D.val(t.$el.$fastpostsubmit)==`发表`){let n=e.default.loading(`发表中，请稍后...`),r=`message=`+i;N(`#imglist input[type='hidden']`).forEach(e=>{let t=e.getAttribute(`name`);r+=`&${t}=`}),r=D.serialize(t.$el.$form)+`&`+r;let a=t.$data.forum_action+`reply&handlekey=fastpost&loc=1&inajax=1`,o=await A.post(a,{data:r,fetch:!0,allowInterceptConfig:!1,headers:{"Content-Type":`application/x-www-form-urlencoded`}});if(n.close(),!o.status){e.default.error(`发表失败，网络异常`);return}let s=E.parseFromString(o.data.responseText,`text/xml`).lastChild?.firstChild?.nodeValue;if(C.evalscript(s),this.handle_error(s))return;window.scrollTo({top:D.height(document)}),D.val(`#needmessage`,``),M(`#comiis_head`)?.click(),D.hide(`#comiis_foot_menu_beautify_big .reply_user_content`,!1),D.attr(`#comiis_foot_menu_beautify_big li[data-attr="发表"] input`,`data-text`,`false`),D.attr(`#comiis_foot_menu_beautify li[data-attr='回帖'] input`,`placeholder`,`发帖千百度，文明第一步`),await this.deleteReplyTextStorage()}else{let t=D.attr(`#comiis_foot_menu_beautify_big .reply_user_content`,`data-reply-serialize`)+i;N(`#imglist input[type='hidden']`).forEach(e=>{t=`${t}&${e.getAttribute(`name`)}=`});let n=D.attr(`#comiis_foot_menu_beautify_big .reply_user_content`,`data-reply-action`),r=await A.post(n+`&handlekey=fastposts&loc=1&inajax=1`,{allowInterceptConfig:!1,fetch:!0,data:t,headers:{"Content-Type":`application/x-www-form-urlencoded`}});if(!r.status){e.default.error(`回复失败，网络异常`);return}let a=E.parseFromString(r.data.responseText,`text/xml`).lastChild?.firstChild?.nodeValue;if(k.info(a),C.evalscript(a),this.handle_error(a))return;M(a)?.click(),D.val(`#needmessage`,``),M(`#comiis_head`).click(),D.val(`#comiis_foot_menu_beautify_big li[data-attr="发表"] input`,`发表`),D.attr(`#comiis_foot_menu_beautify_big li[data-attr="发表"] input`,`data-text`,`false`),D.attr(`#comiis_foot_menu_beautify li[data-attr='回帖'] input`,`placeholder`,`发帖千百度，文明第一步`),window.scrollTo({top:D.height(document)}),await this.deleteReplyTextStorage(!0,n)}}catch(e){console.error(e)}finally{t.$data.isPosting=!1}return!1}})},setGlobalReplyBtnClickEvent(){D.on(document,`click`,`.comiis_postli_times .dialog[href*="reply"]`,async(t,n)=>{D.preventEvent(t);let r=n;D.attr(`#comiis_foot_menu_beautify_big`,`data-model`,`reply`);let i=await A.get(D.attr(r,`datahref`)||r.href+`&inajax=1`,{fetch:!0,allowInterceptConfig:!1});if(!i.status){e.default.error(`网络异常，获取回复参数失败`);return}let a=E.parseFromString(i.data.responseText,`text/xml`).lastChild?.firstChild?.nodeValue;if(this.handle_error(a))return;let o=D.toElement(`<div>${a}</div>`,!0,!1),s=o.querySelector(`.comiis_tip .tip_tit a`)?.getAttribute(`href`),c=D.text(o.querySelector(`.comiis_tip span.f_0`)),l=D.val(o.querySelector(`input[name='noticeauthormsg']`)),u=D.attr(o.querySelector(`#postforms`),`action`),d=D.serialize(o.querySelector(`#postforms`));D.text(`#comiis_foot_menu_beautify_big .reply_user_content`,`回复 ${c}: ${l}`),D.show(`#comiis_foot_menu_beautify_big .reply_user_content`,!1),M(`#comiis_foot_menu_beautify li[data-attr='回帖'] input`)?.click(),D.focus(`#comiis_foot_menu_beautify li[data-attr='回帖'] input`),D.val(`#fastpostsubmitline input`,`回复`),D.attr(`#comiis_foot_menu_beautify_big .fastpostform_new a`,`href`,s),D.attr(`#comiis_foot_menu_beautify_big .reply_user_content`,`data-reply-url`,s),D.attr(`#comiis_foot_menu_beautify_big .reply_user_content`,`data-reply-action`,u),D.attr(`#comiis_foot_menu_beautify_big .reply_user_content`,`data-reply-serialize`,d),Le=r,D.val(`#needmessage`,D.attr(r,`data-text`)||``),B.execMenu(`mt-forum-post-editorOptimizationNormal-recordInputText`,async()=>{await this.initReplyText(!0,s)})},{capture:!0,overrideTarget:!1})},setGlobalClickCheckEvent(){let e=this,t=M(`#fastpostform .header_y a`).href;D.on(document,`click`,function(n){let r=n.target;if(M(`.popups-popmenu`)||K.$data.isUBBCodeInsertClick){k.info(`点击的是弹出层，不做处理`),K.$data.isUBBCodeInsertClick=!1;return}else r?.classList&&r?.classList?.contains(`.dialog_reply`)||r?.closest&&r?.closest(`.dialog_reply`)||r===M(`li[data-attr="回帖"] input`)?(k.info(`点击回复按钮或者是编辑器，显示编辑器`),D.hide(`#comiis_foot_menu_beautify`,!1),D.show(`#comiis_foot_menu_beautify_big`,!1),D.focus(`#needmessage`)):window.event&&!D.checkUserClickInNode(M(`#comiis_foot_menu_beautify_big`))&&(k.info(`点击的其它区域，隐藏大编辑器，显示小编辑器`),D.show(`#comiis_foot_menu_beautify`,!1),D.hide(`#comiis_foot_menu_beautify_big`,!1),D.attr(`#comiis_foot_menu_beautify_big`,`data-model`)==`reply`&&(D.attr(`#comiis_foot_menu_beautify_big`,`data-model`,`comment`),D.val(`#fastpostsubmitline input`,`发表`),D.attr(`#comiis_foot_menu_beautify_big .fastpostform_new a`,`href`,t),D.text(`#comiis_foot_menu_beautify_big .reply_area .reply_user_content`),D.hide(`#comiis_foot_menu_beautify_big .reply_area .reply_user_content`,!1),D.attr(`#comiis_foot_menu_beautify_big .reply_area .reply_user_content`,`data-reply-url`,``),D.attr(`#comiis_foot_menu_beautify_big .reply_area .reply_user_content`,`data-reply-action`,``),D.attr(`#comiis_foot_menu_beautify_big .reply_area .reply_user_content`,`data-reply-serialize`,``),Le&&(D.attr(Le,`data-text`,D.val(`#needmessage`)),D.val(`#needmessage`,``),D.attr(`#comiis_foot_menu_beautify_big li[data-attr="发表"] input`,`data-text`,`false`),D.attr(`#comiis_foot_menu_beautify li[data-attr='回帖'] input`,`placeholder`,`发帖千百度，文明第一步`))),D.val(e.$el.$input)===``&&!e.$data.isPosting&&B.execMenu(`mt-forum-post-editorOptimizationNormal-recordInputText`,async()=>{await e.initReplyText()}))})},setMenuIconToggleEvent(){D.on(`#comiis_foot_menu_beautify_big .menu_icon a i`,`click`,function(){let e=this;e.classList.contains(`f_0`)?(D.hide(`#comiis_foot_menu_beautify_big .menu_body`,!1),D.removeClass(`#comiis_foot_menu_beautify_big .menu_icon a i`,`f_0`)):(D.show(`#comiis_foot_menu_beautify_big .menu_body`,!1),D.removeClass(`#comiis_foot_menu_beautify_big .menu_icon a i`,`f_0`),D.addClass(e,`f_0`))})},setMenuImageClickEvent(){D.on(`#comiis_foot_menu_beautify_big .menu_icon a.comiis_pictitle`,`click`,function(){D.hide(`#comiis_foot_menu_beautify_big .menu_body #comiis_post_tab`,!1),D.hide(`#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab`,!1),D.show(`#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab`,!1)})},setMenuImageToggleEvent(){D.on(`#comiis_foot_menu_beautify_big #comiis_pictitle_tab #comiis_pictitle_key`,`click`,`li`,function(e,t){D.removeClass(`#comiis_foot_menu_beautify_big #comiis_pictitle_tab #comiis_pictitle_key li`,`bg_f`),D.addClass(t,`bg_f`),C.$(`#comiis_foot_menu_beautify_big #comiis_pictitle_tab div.comiis_upbox`).hide().eq(C.$(t).index()).fadeIn()},{overrideTarget:!1})},setMenuSmileClickEvent(){D.on(`#comiis_foot_menu_beautify_big .menu_icon a.comiis_smile`,`click`,function(){D.hide(`#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab`,!1),D.hide(`#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab`,!1),D.show(`#comiis_foot_menu_beautify_big .menu_body #comiis_post_tab`,!1);let e=M(`#comiis_foot_menu_beautify_big .menu_body .comiis_bqbox`);D.attr(e,`data-isLoaded`)!=1&&(D.attr(e,`data-isLoaded`,1),e.querySelectorAll(`img`).forEach(e=>{let t=e.getAttribute(`data-src`);t&&e.setAttribute(`src`,t)}))})},setMenuSmileTabClickEvent(){D.on(`#comiis_foot_menu_beautify_big #comiis_smilies_key li`,`click`,function(){let e=this;D.removeClass(`#comiis_foot_menu_beautify_big #comiis_smilies_key li a`),D.addClass(e.querySelector(`a`),`bg_f b_l b_r`),C.$(`#comiis_post_tab div.swiper-wrapper.bqbox_c.comiis_optimization .swiper-slide`).hide().eq(C.$(e).index()).fadeIn()})},setMenuInsertClickEvent(){D.on(`#comiis_foot_menu_beautify_big .menu_icon a.commis_insert_bbs`,`click`,()=>{D.hide(`#comiis_foot_menu_beautify_big .menu_body #comiis_post_tab`,!1),D.hide(`#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab`,!1),D.show(`#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab`,!1)})},async getReplyRecordSize(){let e=await this.$data.db.get(`data`);return e.success?E.getTextStorageSize(e?.data?.length?JSON.stringify(e.data):``):E.formatByteToSize(0)},async clearAllReplyRecord(){return await this.$data.db.deleteAll()},async deleteReplyTextStorage(e=!1,t=void 0){let n=this,r=async()=>{let r=await this.$data.db.get(`data`);if(!r.success||r.code===201)return console.warn(r),i.off(),!1;let a=r.data.findIndex(r=>e?r.forumId===n.$data.tid&&t&&r.repquote===U.getRepquote(t):r.forumId===n.$data.tid&&E.isNull(r.repquote)),o=!1;return a!==-1&&(r.data.splice(a,1),await this.$data.db.save(`data`,r.data),o=!0),i.off(),o},i=D.on(window,`beforeunload`,async()=>{await r()},{capture:!0});await r()},setMenuQuickUBB(){let t=M(`#comiis_insert_ubb_tab_list`),n=Ne();Reflect.set(n,`code`,{key:`代码`,value:`[code][/code]`,tagL:`]`,tagR:`[`,L:`[code]`,R:`[/code]`,cursorL:`[code]`,cursorLength:7,quickUBBReplace:`[code]replace[/code]`}),Reflect.set(n,`password`,{key:`密码`,value:`[password][/password]`,tagL:`]`,tagR:`[`,L:`[password]`,R:`[/password]`,cursorL:`[password]`,cursorLength:10,quickUBBReplace:`[password]replace[/password]`}),Object.keys(n).forEach(r=>{let i=n[r],a=D.createElement(`li`,{className:`quickUBBs`,innerHTML:`
                    <a href="javascript:;" class="comiis_xifont f_d">
                        <i class="comiis_font"></i>${i.key}
                    </a>
                `});D.on(a,`click`,()=>{D.removeClass(`#comiis_insert_ubb_tab div.comiis_post_urlico ul li.quickUBBs a.comiis_xifont`,`f_0`),D.addClass(`#comiis_insert_ubb_tab div.comiis_post_urlico ul li.quickUBBs a.comiis_xifont`,`f_d`);let t=a.querySelector(`.comiis_xifont`);D.removeClass(t,`f_d`),D.removeClass(t,`f_d`);let n=O.prompt({title:{text:`UBB代码`,position:`center`},content:{text:``,placeholder:`请输入需要${i.key}的文字`,focus:!0},btn:{ok:{text:`插入`,type:`primary`,callback:t=>{if(t.text.trim()===``){e.default.error(`输入框不能为空或纯空格`);return}i.isFunc?C.comiis_addsmilies(Pe(i.num,t.text)):i.quickUBBReplace?C.comiis_addsmilies(i.quickUBBReplace.replaceAll(`replace`,t.text)):C.comiis_addsmilies(t.text),n.close()}},cancel:{text:`关闭`,callback:()=>{n.close()}}},width:`300px`,height:`200px`})}),t.append(a)})}},Re={$flag:{isSetHljsCSS:!1},init(){B.execMenuOnce(`mt-forum-post-autoExpandContent`,()=>this.autoExpandContent()),B.execMenuOnce(`mt-forum-post-repairImageWidth`,()=>this.repairImageWidth()),D.onReady(()=>{B.execMenu(`mt-forum-post-removeFontStyle`,()=>{this.removeFontStyle()}),B.execMenu(`mt-forum-post-removeCommentFontStyle`,()=>{this.removeCommentFontStyle()}),B.execMenu(`mt-forum-post-addCommentOnBtn`,()=>{this.addCommentOnBtn()}),B.execMenuOnce(`mt-forum-post-loadNextPageComment`,()=>{this.loadNextPageComment()}),B.execMenuOnce(`mt-forum-post-codeQuoteOptimization`,()=>{this.codeQuoteOptimization()}),B.execMenuOnce(`mt-forum-post-editorOptimizationNormal`,()=>{K.init()}),B.execMenu(`mt-forum-post-optimizationImagePreview`,()=>{this.optimizationImagePreview()}),B.execMenuOnce(`mt-forum-post-setAttachmentsClickTip`,()=>{this.setAttachmentsClickTip()})})},autoExpandContent(){return k.info(`自动展开帖子内容`),j(`
        div.comiis_message.bg_f.view_one.b_b.cl.message>div.comiis_messages.comiis_aimg_show.cl{max-height:inherit!important;overflow-y:inherit!important;position:inherit!important}
        .comiis_lookfulltext_bg,.comiis_lookfulltext_key{display:none!important} 
        `)},repairImageWidth(){return k.info(`修复图片宽度`),j(`
        .comiis_messages img{
            max-width: 100% !important;
        }`)},removeFontStyle(){k.info(`移除帖子字体效果`);let e=M(`.comiis_a.comiis_message_table`);e&&D.html(e,D.html(e).replace(H.fontSpecial,``))},removeCommentFontStyle(){k.info(`移除评论区的字体效果`);let e=N(`font`),t=M(`.comiis_postlist .comiis_postli`)?.innerHTML||``;t!==``&&(e.forEach(e=>{t.includes(e.innerHTML)||(e.removeAttribute(`color`),e.removeAttribute(`style`),e.removeAttribute(`size`))}),N(`.comiis_message.message`).forEach(e=>{if(t.includes(e.innerHTML)){e.innerHTML=e.innerHTML.replace(H.fontSpecial,``);let t=e.nextElementSibling;t&&t.localName===`strike`&&(t.outerHTML=t.outerHTML.replace(/^<strike>(\n|)/g,``).replace(/<\/strike>$/g,``))}})),N(`.comiis_postli.comiis_list_readimgs.nfqsqi`).forEach(e=>{let t=e.parentElement;t&&t.localName===`strike`&&(t.outerHTML=t.outerHTML.replace(/^<strike>(\n|)/g,``).replace(/<\/strike>$/g,``))})},addCommentOnBtn(){k.info(`添加【点评】按钮`),D.waitNodeList(`.bottom_zhan:not([data-isaddreviews])`).then(e=>{e.forEach(e=>{e.setAttribute(`data-isaddreviews`,`true`);var t=e.querySelector(`a`);if(t){var n=t.getAttribute(`datahref`)||t.getAttribute(`data-href`)||t.href||``,r=`${n.replace(`mod=post&`,`mod=misc&`).replace(`action=reply&`,`action=comment&`)}&extra=page%3D1&page=${n?.match(/&page=([\w]+)/i)?.[1]}`,i=e?.closest(`.comiis_postli[id]`),a=i.getAttribute(`id`)?.replace(`pid`,`&pid=`);r+=a;var o=i.querySelector(`.top_user.f_b`)?.textContent||``,s=D.toElement(`
						<a href="${r}" class="f_c dialog">
							<i class="comiis_font mt_review" style="content: url(&quot;https://s1.ax1x.com/2020/04/26/Jcq8VU.png&quot;); height: 15px;"></i>
						</a>
						`,!0,!1);D.on(s,`click`,function(){D.waitNode(`div[id=ntcmsg_popmenu]>div>span.f_c`).then(e=>{try{e.innerText=`点评 `+o}catch(e){k.error(`修改点评失败`,e)}})}),D.prepend(e,s)}})})},loadNextPageComment(){if(k.info(`自动加载下一页评论`),document.title.includes(`提示信息 - MT论坛`))return;function e(){return M(`#loading-comment-tip`)}function t(){return M(`#loading-comment-tip`).parentElement}function n(n){let r=e(),i=t();D.css(i,`display`,``);let a=Array.from(n.querySelectorAll(`a[href]`)).find(e=>e.textContent?.trim()===`下一页`).href;if(k.info(`获取下一页url：`,a),a.includes(`javascript:;`)){k.info(`暂无下一页的评论`),D.remove(i);return}function o(){D.remove(`.comiis_page.bg_f`),D.remove(i),D.off(r,`click`,s),D.off(window,`scroll`,c.run)}async function s(){D.text(r,`正在加载评论中...`),D.css(i,`display`,``),k.info(`请求下一页评论：`+a);let e=a,t=await A.get(e,{fetch:!0});if(!t.status)return;let n=D.toElement(t.data.responseText,!0,!0),s=M(`.comiis_postlist.kqide`),c=n.querySelector(`.comiis_postlist.kqide`),l=n.querySelector(`.nxt`),u=l?.getAttribute(`href`)||l?.href;if(u){if(k.success(`成功获取到下一页评论`),u===a){k.warn(`获取到下一页评论的url和上次请求的url相同，判定为已加载完全部评论，移除监听事件`),o();return}a=u}else k.error(`评论全部加载完毕，移除监听事件`),o();let d=l?.parentElement.querySelector(`strong`);if(d){let e=M(`#select_a`);if(e){let t=Array.from(e.childNodes).find(e=>e.nodeName===`#text`);t&&(t.textContent=`第 ${d.textContent} 页`)}}B.execMenu(`mt-forum-post-syncNextPageUrl`,()=>{if(window===top?.window){let t=new URL(e),n=`${t.pathname}${t.search}`;window.history.pushState(`forward`,``,n)}}),D.append(s,c),Re.init()}var c=new E.LockFunction(async()=>{E.isNearBottom(50)&&await s()});D.text(r,`请上下滑动或点击加载`),D.on(window,`scroll`,c.run),D.on(r,`click`,s),c.run()}let r=D.toElement(`
		<div class="comiis_multi_box bg_f b_t">
			<label class="comiis_loadbtn bg_e f_d" id="loading-comment-tip">正在等待页面加载完毕</label>
		</div>`,!0,!1),i=M(`.comiis_bodybox`);D.append(i,r);let a=M(`.comiis_pltit span.f_d`)||M(`#comiis_foot_memu .comiis_kmvnum`);if(M(`.comiis_pltit h2`)&&M(`.comiis_pltit h2`)?.textContent.includes(`暂无评论`)){D.remove(t()),k.info(`暂无评论`);return}parseInt(a.textContent)>=10?D.waitNode(`.comiis_page.bg_f`).then(e=>{n(e)}):(D.remove(t()),k.info(`无多页评论`))},codeQuoteOptimization(){k.info(`代码块优化`);function t(e){var t=`add.and.cmp.cmpg.cmpl.const.div.double.float.goto.if.int.long.move.mul.neg.new.nop.not.or.rem.return.shl.shr.sput.sub.throw.ushr.xor`.split(`.`);return{aliases:[`smali`],contains:[{className:`string`,begin:`"`,end:`"`,relevance:0},e.COMMENT(`#`,`$`,{relevance:0}),{className:`keyword`,variants:[{begin:`\\s*\\.end\\s[a-zA-Z0-9]*`},{begin:`^[ ]*\\.[a-zA-Z]*`,relevance:0},{begin:`\\s:[a-zA-Z_0-9]*`,relevance:0},{begin:`\\s(`+[`transient`,`constructor`,`abstract`,`final`,`synthetic`,`public`,`private`,`protected`,`static`,`bridge`,`system`].join(`|`)+`)`}]},{className:`built_in`,variants:[{begin:`\\s(`+t.join(`|`)+`)\\s`},{begin:`\\s(`+t.join(`|`)+`)((\\-|/)[a-zA-Z0-9]+)+\\s`,relevance:10},{begin:`\\s(`+[`aget`,`aput`,`array`,`check`,`execute`,`fill`,`filled`,`goto/16`,`goto/32`,`iget`,`instance`,`invoke`,`iput`,`monitor`,`packed`,`sget`,`sparse`].join(`|`)+`)((\\-|/)[a-zA-Z0-9]+)*\\s`,relevance:10}]},{className:`class`,begin:`L[^(;:
]*;`,relevance:0},{begin:`[vp][0-9]+`}]}}this.$flag.isSetHljsCSS||(i.default.registerLanguage(`smali`,t),j(`
			.hljs ol{margin:0 0 0 10px;padding:10px 10px 10px 25px}
			.hljs li{padding-left:10px;list-style-type:decimal-leading-zero;font-family:Monaco,Consolas,'Lucida Console','Courier New',serif;font-size:12px;line-height:1.8em}
			.hljs li:hover{background:#2c313c}
			.hljs li::marker{unicode-bidi:isolate;font-variant-numeric:tabular-nums;text-transform:none;text-indent:0!important;text-align:start!important;text-align-last:start!important}
			select.code-select-language{height:40px;line-height:40px;font-size:14px;border:1px solid #5c5c5c;border-radius:5px;text-align:center;outline:0;margin-left:10px}
			`),j(`
			.reader-copy-button{background:#000;background-size:cover;background-repeat:no-repeat;background-position:0;color:#fff;line-height:40px;display:block;text-align:center;border-radius:5px;cursor:pointer;font-size:15px;width:70px;user-select:none}
			.reader-copy-button i{display:inline-block;margin-right:6px;width:16px;height:16px;background-size:cover;vertical-align:sub;user-select:none}
			`),D.on(document,`click`,`.reader-copy-button`,async function(t,n){D.preventEvent(t);let r=M(n.getAttribute(`data-code-selector`));return await E.copy(r.outerText||r.innerText),e.default.success(`已复制到剪贴板`),!1},{overrideTarget:!1})),N(`.comiis_blockcode.comiis_bodybg`).forEach(e=>{if(e.getAttribute(`data-copy`))return;e.setAttribute(`data-copy`,`true`);let t=D.createElement(`div`,{innerHTML:`
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
					</span>`},{style:`height: 34px;margin: 14px 0px;display: inline-flex;align-items: flex-end;`});D.before(e,t);function n(e,t=`java`){e.oldValue||=e.textContent,e.innerHTML=i.default.highlight(e.oldValue,{language:t}).value.replace(/\\n$/gi,``)}let r=i.default.highlightAuto(e.textContent).language,a=document.createElement(`div`),o=document.createElement(`select`),s=i.default.listLanguages().sort();s=s.concat(`自动检测`);let c=``;s.forEach(e=>{e.startsWith(`自动检测`)?c+=`<option data-value="${r}" selected="selected">${e}(${r})</option>`:c+=`<option data-value="${e}">${e}</option>`}),o.className=`code-select-language`,o.innerHTML=c,D.on(o,`change`,function(){let t=o.selectedOptions[0].getAttribute(`data-value`);o.setAttribute(`aria-label`,t),k.info(`切换代码块语言: `,t),e.querySelectorAll(`li`).forEach(e=>{n(e,t)})}),D.preventEvent(o,`click`),a.appendChild(o),t.append(a),D.emit(o,`change`),e.className=`hljs`,e.firstChild.removeAttribute(`class`),t.querySelector(`.reader-copy-button`).setAttribute(`data-code-selector`,D.getElementSelector(e))})},optimizationImagePreview(){k.info(`图片查看优化`);function e(e=[],t=0){let n=``;e.forEach(e=>{n+=`<li><img data-src="${e}"></li>`});let r=new a.default(D.createElement(`ul`,{innerHTML:n}),{inline:!1,url:`data-src`,zIndex:E.getMaxZIndex()+100,hidden:()=>{r.destroy()}});k.info(`查看的图片的下标`,t),r.view(t),r.zoomTo(1),r.show()}let t=[{hostName:`avatar-bbs.mt2.cn`,pathName:`*`},{hostName:`cdn-bbs.mt2.cn`,pathName:`^(/static(/|//)image|/template)`},{hostName:window.location.hostname,pathName:`^(/static(/|//)image|/template)`},{hostName:window.location.hostname,pathName:`/uc_server/avatar.php`}];D.waitNodeList(`div.comiis_postlist.kqide .comiis_postli:not([data-isHandlingViewIMG])`).then(n=>{n.forEach(n=>{n.setAttribute(`data-isHandlingViewIMG`,`true`);let r=[];n.querySelectorAll(`img`).forEach(n=>{let i=n.src,a=new URL(i).hostname,o=new URL(i).pathname,s=n.parentElement;s.nodeName.toLowerCase()===`span`&&s.removeAttribute(`onclick`),s.nodeName.toLowerCase()===`a`&&s.getAttribute(`href`)===i&&(s.setAttribute(`href`,`javascript:;`),s.removeAttribute(`target`));let c=!1;for(let e of t)if(a.indexOf(e.hostName)!=-1&&o.match(e.pathName)){c=!0;break}c||(r=[...r,i],D.on(n,`click`,function(){k.info(`点击图片`,n);let t=r.findIndex(e=>e==i);e(r,t)}))}),r.length&&k.info(`处理的图片`,r)})})},setAttachmentsClickTip(){k.info(`附件点击提醒`);function e(e){if(e.hasAttribute(`href`)){let t=e.getAttribute(`href`),n=e.querySelector(`span.f_ok`),r=e.querySelector(`.attach_size`);if(D.text(r).indexOf(`金币`)===-1)return;k.info(`发现附件`,e),k.info(`该附件是金币附件，拦截！`);let i=D.text(n);e.setAttribute(`data-href`,e.getAttribute(`href`)),e.removeAttribute(`href`),n.innerText=`【已拦截】`+i,e.onclick=function(){k.info(`附件url：`,t),O.confirm({title:{text:`提示`,position:`center`},content:{text:`<br />确定花费2金币下载附件 <a style="color: #507daf !important;">${i}</a> ？<br /><br />`,html:!0},btn:{ok:{callback:e=>{window.open(t,`_blank`),e.close()}}},mask:{enable:!0},width:`88vw`,height:`200px`})}}}E.mutationObserver(document.documentElement,{callback:()=>{N(`.attnm a`).forEach(t=>{e(t)}),N(`.comiis_attach a`).forEach(t=>{e(t)})},config:{childList:!0,subtree:!0}}),D.waitNodeList(`.attnm a`).then(t=>{t.forEach(t=>{e(t)})}),D.waitNodeList(`.comiis_attach a`).then(t=>{t.forEach(t=>{e(t)})})}},ze={init(){j(`
		/* 去除搜索框的蒙版 */
        #comiis_search_noe{
            display: none !important;
        }
		/* 显示真正的试搜索框 */
        #comiis_search_two{
            display: block !important;
        }
        `),t.default.onReady(()=>{B.execMenuOnce(`mt-search-showSearchHistory`,()=>{this.showSearchHistory()}),B.execMenuOnce(`mt-search-repairClearBtn`,()=>{this.repairClearBtn()}),B.execMenuOnce(`mt-search-searchInputAutoFocus`,()=>{this.searchInputAutoFocus()})})},async showSearchHistory(){k.info(`显示搜索历史`);let e=v(`search_history`,[]),n=M(`#scform_srchtxt`),r=M(`#searchform`),i=e.map(t=>({value:t,enableDeleteButton:!0,deleteButtonClickCallback(t,n,r,i){let a=e.findIndex(e=>e===r.value);a!==-1&&(e.splice(a,1),S(`search_history`,e)),n.remove()},itemView(e,t,n){return e.value},clickCallback(e,t,i,a){n.value=i.value,r.submit()}})),a=O.searchSuggestion({$target:n,$inputTarget:n,data:i,inputTargetChangeRefreshShowDataCallback(e,t,n){return i.filter(t=>t.value.includes(e))}});a.init(),a.setAllEvent();function o(){let e=document.querySelector(`#scform_submit`);t.default.on(e,`click`,function(){let e=n.value;if(e!=``){let t=v(`search_history`,[]);t.includes(e)?k.info(`已有该搜索历史记录`):(k.info(`无该记录，追加`),t.push(e)),S(`search_history`,t)}})}function s(){let e=`<div class="comiis_p12 f14 bg_f f_c b_b cl" style="padding-bottom:10px">搜索记录个数: `+v(`search_history`,[]).length+`<button class="btn_clear_search_history" style="
                    border: none;
                    float: right;
                    background: red;
                    color: #fff;
                    border-radius: 3px;
                    font-weight: 600;
                    min-width: 20vw;
                    width: 20vw;
                ">清理记录</button></div>`;t.default.before(document.querySelector(`.comiis_p12`),e);let n=document.querySelector(`.btn_clear_search_history`);t.default.on(n,`click`,e=>{t.default.preventEvent(e),g(`search_history`),window.location.reload()})}o(),s()},repairClearBtn(){t.default.waitNode(`a.ssclose`).then(n=>{k.info(`修复清空按钮`),t.default.on(n,`click`,()=>{let t=document.querySelector(`#scform_srchtxt`);t?t.value=``:e.default.error(`获取输入框失败`)},{capture:!0})})},searchInputAutoFocus(){new URLSearchParams(window.location.search).has(`kw`)||t.default.waitNode(`#scform_srchtxt`).then(e=>{k.info(`搜索框自动获取焦点`),e.focus()})}},Be={init(){D.onReady(()=>{B.execMenuOnce(`mt-sign-showTodaySignStar`,()=>{this.showTodaySignStar()}),B.execMenuOnce(`mt-sign-showTodayRanking`,()=>{this.showTodayRanking()})})},async showTodaySignStar(){k.info(`显示【今日签到之星】`);let e=document.querySelector(`.pg_k_misign .comiis_qdinfo`),t=document.createElement(`ul`),n=await A.get(`/k_misign-sign.html`,{headers:{"User-Agent":E.getRandomPCUA()}});if(!n.status)return;let r=D.toElement(n.data.responseText,!0,!0).querySelector(`#pt span.xg1`);if(!r)return;t.innerHTML=`
		<li class="f_f" style="display: flex;flex-direction: column;width: 100%;">
			<span class="comiis_tm">今日签到之星</span>
			${D.text(r).replace(`今日签到之星：`,``)}
		</li>
		`;let i=document.querySelector(`.comiis_space_box`);j(`
		.comiis_space_box{
			height: ${parseInt(getComputedStyle(i,null).height.replace(`px`,``))+parseInt(getComputedStyle(i,null).paddingBottom.replace(`px`,``))+50}px;
			background-size: 100% 100%;
		}
		.pg_k_misign .comiis_qdinfo{
			height: 110px !important;
		}`),e.append(t)},showTodayRanking(){k.info(`显示【今日最先】`);let t=document.querySelector(`.comiis_topnv .comiis_flex .flex`),n=D.createElement(`li`,{className:`flex`}),r=D.createElement(`a`,{id:`k_misignlist_today_latest`,href:`javascript:;`,innerHTML:`今日最先`},{onclick:`ajaxlist('todayLatest');`});n.appendChild(r),D.after(t,n);let i=async t=>{let n=await A.get(`/k_misign-sign.html?operation=${t}`,{responseType:`html`,headers:{"User-Agent":E.getRandomPCUA()}});if(!n.status)return;let r=D.toElement(n.data.responseText,!0,!0).querySelector(`#J_list_detail .pg span`);if(r&&r.title!==void 0){let t=r.title.match(/([0-9]+)/);if(t&&t.length==2)return parseInt(t[t.length-1]);e.default.error(`获取页失败`)}else e.default.error(`请求最先签到的页失败`)},a=async e=>{let t=await A.get(`/k_misign-sign.html?operation=list&op=&page=${e}`,{responseType:`html`,headers:{"User-Agent":E.getRandomPCUA()}});if(!t.status)return;let n=D.toElement(t.data.responseText,!0,!0).querySelectorAll(`#J_list_detail tbody tr`),r=[];if(n.length==2&&n[0].textContent.indexOf(`暂无内容`)!=-1)return r;for(let e=1;e<=n.length-2;e++){let t=n[e],i={user:``,uid:``,avatar:``,days:``,monthDays:``,time:``,reward:``},a=t.children[0].getElementsByTagName(`a`)[0].textContent,o=t.children[0].getElementsByTagName(`a`)[0].href.match(/space-uid-([0-9]*)/)[1],s=t.children[1].textContent,c=t.children[2].textContent,l=t.children[3].textContent,u=t.children[5].textContent;i.user=a,i.uid=o,i.avatar=U.getAvatar(o,`small`),i.days=s,i.monthDays=c,i.time=l,i.reward=u,r.push(i)}return r};function o(e,t){let n=document.querySelector(`#ranklist`);D.html(n,e),D.attr(n,`listtype`,t)}C.ajaxlist=async e=>{if(e=e,e==`today`?(loadingdelay=!1,urlextra=`list&op=today`):e==`month`?(loadingdelay=!1,urlextra=`list&op=month`):e==`zong`?(loadingdelay=!1,urlextra=`list&op=zong`):e==`calendar`?(loadingdelay=!0,urlextra=`calendar`):(loadingdelay=!1,urlextra=`list`),e==`todayLatest`){loadingdelay=!1,urlextra=`list&op=&page=0`;let t=await i(urlextra);if(!t)return;let n=await a(t);if(n.reverse(),n.length<10){let e=await a(t-1);e.reverse(),n=n.concat(e),n.reverse()}let r=``;n.reverse(),n.forEach(e=>{r+=`
						<tbody id="autolist_${e.uid}">
			  				<tr>
								<td class="k_misign_lu">
									<a href="home.php?mod=space&amp;uid=${e.uid}">
										<img src="${e.avatar}" loading="lazy">
									</a>
								</td>
								<td class="k_misign_ll"><span></span></td>
								<td class="k_misign_lc">
									<h4 class="f_c">
										<a href="home.php?mod=space&amp;uid=${e.uid}">${e.user}</a>
										<span>${e.time}</span>
										<span class="y">总天数 ${e.days}天</span>
									</h4>
									<p class="f_0">月天数 ${e.monthDays} 天，上次奖励 ${e.reward}</p>
				  				</td>
							</tr>
			  			</tbody>`}),o(`
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
							${r}
							</table>
						</div>
					</div>`,e)}else A.get(`plugin.php?id=k_misign:sign&operation=${urlextra}`,{responseType:`html`,fetch:!0}).then(t=>{let n=t.data.responseText;n=n.replace(`今日排行</a></li>`,`今日排行</a></li>
							<li class="flex">
								<a href="javascript:;" id="k_misignlist_today_latest" onclick="ajaxlist('todayLatest');" class="f_c">今日最先</a>
							</li>`),e==`today`&&(n=n.replace(`<li class="flex"><a href="javascript:;" id="k_misignlist_today" onclick="ajaxlist('today');">今日排行</a></li>`,`
								<li class="flex f_0">
									<em class="bg_0"></em>
									<a href="javascript:;" id="k_misignlist_today" onclick="ajaxlist('today');">今日排行</a>
								</li>
								`)),o(n,e)})}}},Ve={init(){B.execMenuOnce(`mt-space-repairEnterSpace`,()=>{this.repairEnterSpace()}),D.onReady(()=>{B.execMenuOnce(`mt-space-showCommentContent`,()=>{this.showCommentContent()})})},repairEnterSpace(){if(k.info(`修复无法进入空间`),G.isSpace()){let e=window.location.href.match(/home.php\?(.+)/gi),t=e[e.length-1];t.split(`&`).length==2&&t.indexOf(`uid=`)!=-1&&t.indexOf(`mod=space`)!=-1&&(window.location.href=window.location.href+`&do=profile`)}else if(G.isSpaceWithAt()){let e=window.location.href.match(/space-uid-(.+).html/i),t=e[e.length-1];window.location.href=`${window.location.origin}/home.php?mod=space&uid=${t}&do=profile`}},async showCommentContent(){k.info(`显示帖子回复内容`),j(`
		div.contrete-reply{padding:5px 10px;border-top:1px solid #f3f3f3}
		div.contrete-reply a{margin:0 10px}
		`);async function t(){let e=await A.get(window.location.href,{headers:{"User-Agent":E.getRandomPCUA()}});if(!e.status)return;let t=D.toElement(e.data.responseText,!0,!0),n=[];return t.querySelectorAll(`#delform tr.bw0_all+tr`).forEach(e=>{let r=[],i=e.querySelector(`td`),a=D.html(i).replace(/^&nbsp;/,``);r.push(a);let o=D.next(e),s=t.querySelectorAll(`#delform tr`);for(let e=0;e<s.length&&!(!o||D.attr(o,`class`)===`bw0_all`);e++){let e=o.querySelector(`td`),t=D.html(e).replace(/^&nbsp;/,``);r=r.concat(t),o=D.next(o)}n.push(...r)}),n}function n(){return E.getNodeListValue(V.comiisForumList(),V.comiisPostli(),V.comiisMmlist())}function r(t){let n={};return t.forEach(t=>{let r=D.createElement(`div`,{innerHTML:t}).querySelector(`a`)?.getAttribute(`href`),i=r.match(H.ptid),a=r.match(H.pid);if(!i){e.default.error(`获取ptid失败`);return}if(!a){e.default.error(`获取pid失败`);return}let o=i[i.length-1],s=a[a.length-1];n[o]?n[o].data.push(t):n[o]={ptid:o,pid:s,data:[t]}}),n}var i=await t();if(i!=null){var a=r(i);n().forEach((t,n)=>{let r=t.querySelector(`.comiis_xznalist_bottom a`).getAttribute(`tid`);if(!r){e.default.error(`获取帖子tid失败`),k.error(t);return}a[r]&&a[r].data.forEach(e=>{D.append(t,`<div class="contrete-reply">${e}</div>`)})})}}},q={$key:{tipData:`tipToFreeSubjectForumPost`},init(){this.registerMenu();let t=this.getTipData();if(G.isPost()&&document.querySelector(`span.kmren`)){k.info(`当前帖子存在需要购买主题`);let n=!1,r;t.forEach((e,t)=>{if(window.location.href.match(e.url)){n=!0;return}}),n?(k.warn(`已设置提醒`),r=D.createElement(`a`,{href:`javascript:;`,className:`styli_tit f_c`,innerHTML:`
                        <i class="comiis_font" style="color: #ffffff;"></i>
                        `}),D.on(r,`click`,function(){O.confirm({title:{text:`提示`,position:`center`},content:{text:`<p>确定移出付费主题白嫖列表？</p>`,html:!0},btn:{ok:{callback:function(){let n=t.findIndex((e,t)=>window.location.href.match(e.url));n===-1?e.default.error(`移除失败`):(t.splice(n,1),q.setTipData(t),e.default.success(`移除成功`))}}},width:`88vw`,height:`300px`})})):(k.info(`未设置提醒`),r=D.createElement(`a`,{href:`javascript:;`,className:`styli_tit f_c`,innerHTML:`
                        <i class="comiis_font" style="color: #FF9900;"></i>
                        `}),D.on(r,`click`,()=>{let n=document.querySelector(`.kmren`),r=D.parent(n),i=D.text(r).replace(/\t|\n/g,``).match(/[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]{1}[0-9]{1,2}:[0-9]{1,2}/);if(!i||i.length==0){e.default.error(`获取付费主题到期时间失败`);return}let a=i[0],o=E.formatToTimeStamp(a);t.push({url:window.location.href,title:document.title.replace(` - MT论坛`,``),expirationTime:a,expirationTimeStamp:o,isVisited:!1}),S(`tipToFreeSubjectForumPost`,t),e.default.success(`添加成功`),setTimeout(function(){window.location.reload()},1500)}));let i=document.querySelector(`.comiis_head.f_top .header_y`);D.append(i,r)}function n(){let e=0;return Array.from(q.getTipData()).forEach((t,n)=>{new Date().getTime()>t.expirationTimeStamp&&t.isVisited==0&&(e+=1)}),e}if(G.isMySpace()||G.isGuide()||G.isForumList()||G.isPlate()){let e=document.querySelector(`.icon_msgs.bg_del.f_f`),t=0;e?(t=parseInt(D.text(e)),D.html(e,(t+n()).toString()),D.append(`.comiis_head .header_z .kmuser em`,`<span class="icon_msgs bg_del"></span>`)):n()&&D.append(`.comiis_head .header_z .kmuser em`,`<span class="icon_msgs bg_del"></span>`)}let r=document.querySelector(`.sidenv_num.bg_del.f_f`),i=0;if(r)i=parseInt(D.text(r)),D.html(`.sidenv_num.bg_del.f_f`,(i+n()).toString());else{let e=n();e&&D.before(`.sidenv_user em`,`<span class="sidenv_num bg_del f_f">${e}</span>`)}n()&&D.append(`.comiis_left_Touch .paymentsubjectreminder div.flex`,`
                <span class="sidenv_num bg_del f_f" style="
                    position: relative;
                    border-radius: 18px;
                    height: 6px;
                    width: 6px;
                    left: 3px;
                    display: inline-flex;
                    bottom: 8px;
                "></span>`)},registerMenu(){V.registerLeftMenu({name:`付费主题白嫖提醒`,icon:``,iconColor:`#ec0000`,callback:()=>{this.showView()}})},showView(){k.info(`显示白嫖列表`);let e=q.getTipData();O.alert({title:{text:`付费主题白嫖列表`,position:`center`},content:{text:``,html:!0},btn:{ok:{text:`关闭`,type:`default`}},width:`88vw`,height:`88vh`});let t=``,n=0,r=``,i=``,a=[],o=[],s=[];e.forEach((e,t)=>{let r=`#f91212`,i=``;new Date().getTime()>e.expirationTimeStamp&&(r=`#1e90ff`,e.isVisited||(i=`
                        <span class="icon_msgs bg_del" style="position: fixed;width: 10px;height: 10px;border-radius: 50%;margin: 10px 0px 0px -15px;"></span>
                    `,n+=1));let c={content:`
                <tbody id="autolist">
                    <tr>
                        <td style="width: 100%;">
                            <div style="display: inline-flex;">
                            ${i}
                            <div style="width: 240px;">                 
                                <a href="javascript:void(0);" t-href="${e.url}" t-index="${t}" style="color: #1e90ff;">${e.title}</a>
                                <li style="margin: 5px 15px;color: ${r};">${e.expirationTime}</li>
                            </div>
                            <div style="align-self: center;margin-left: 10px;" t-index="${t}" class="delsubjecttip">
                                <i class="comiis_font" style="font-size: 24px;padding: 0px 6px;"></i>
                            </div>
                            </div>
                        </td>
                    </tr>
                    <tr style="height:15px;"></tr>
                </tbody>`,timestamp:e.expirationTimeStamp};new Date().getTime()>e.expirationTimeStamp?i==``?o.push(c):a.push(c):s.push(c)}),k.info(`可白嫖但未访问：`,a),k.info(`可白嫖：`,o),k.info(`未到白嫖时间：`,s),E.sortListByProperty(a,`expirationTimeStamp`,!1),E.sortListByProperty(o,`timestamp`,!1),E.sortListByProperty(s,`timestamp`,!1),k.info(`排序后——可白嫖但未访问：`,a),k.info(`排序后——可白嫖：`,o),k.info(`排序后——未到白嫖时间：`,s),r=E.mergeArrayToString(a,`content`)+E.mergeArrayToString(o,`content`),i=E.mergeArrayToString(s,`content`),n>0&&(t=`
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
                    ${r}    
                </table>
            </details>
        `,l=`
            <details class="subjectnotvisit">
                <summary>需付费</summary>
                <table id="paymentSubjectReminderIsPaidList" style="overflow: auto;height: inherit;margin: 15px 0px;">
                    ${i}
                </table>
            </details>
        `,u=document.querySelector(`.msgcon`);D.html(u,``),D.append(u,c),D.append(u,l),D.css(u,`height`,`400px`),D.on(document.querySelector(`.delsubjecttip i.comiis_font`),`click`,t=>{let n=t.target,r=D.parent(n);var i=parseInt(r.getAttribute(`t-index`));O.confirm({title:{text:`提示`,position:`center`},content:{text:`<p>确定移出付费主题白嫖列表？</p>`,html:!0},btn:{ok:{callback:t=>{e.splice(i,1),q.setTipData(e),D.deleteParentNode(n,`tr`),t.close()}}},width:`80vw`,height:`300px`})});let d=document.querySelector(`#paymentSubjectReminderIsFreeList`);D.on(d,`click`,`a`,(t,n)=>{let r=n,i=parseInt(r.getAttribute(`t-index`)),a=r.getAttribute(`t-href`);if(e[i].isVisited=!0,q.setTipData(e),window.open(a,`_blank`),r.setAttribute(`style`,`color: #000000;`),r?.parentElement?.parentElement?.children[0].className!=`icon_msgs bg_del`)return;r.parentElement.parentElement.children[0].remove(),D.append(d,r?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement);let o=document.querySelector(`.subjectcanvisit summary span.icon_msgs.bg_del.f_f`),s=D.text(o),c=parseInt(s)-1;c>0?D.html(o,c.toString()):o.remove()},{overrideTarget:!1});let f=document.querySelector(`paymentSubjectReminderIsPaidList`);D.on(f,`click`,`a`,(e,t)=>{let n=t;n.getAttribute(`t-index`);let r=n.getAttribute(`t-href`);window.open(r,`_blank`),n.setAttribute(`style`,`color: #000000;`)},{overrideTarget:!1})},getTipData(){return v(this.$key.tipData,[])},setTipData(e){S(this.$key.tipData,e)}},He=class{isBacking=!1;config;constructor(e){this.config=e,this.enterGestureBackMode=this.enterGestureBackMode.bind(this),this.quitGestureBackMode=this.quitGestureBackMode.bind(this),this.popStateEvent=this.popStateEvent.bind(this),(typeof this.config.backDelayTime!=`number`||isNaN(this.config.backDelayTime))&&(this.config.backDelayTime=150),this.config.win??(this.config.win=self)}popStateEvent(e){D.preventEvent(e),!this.isBacking&&this.quitGestureBackMode(!0)}enterGestureBackMode(){k.success(`进入手势模式`);let e=this.config.hash;e.startsWith(`#`)||(e.startsWith(`/`)||(e=`/`+e),e=`#`+e),this.config.useUrl&&(e=this.config.win.location.origin+this.config.win.location.pathname+this.config.win.location.search+e),this.config.win.history.pushState({},``,e),k.success(`监听popstate事件`),D.on(this.config.win,`popstate`,this.popStateEvent,{capture:!0})}async quitGestureBackMode(e=!1){this.isBacking=!0,k.success(`退出手势模式`),typeof this.config.beforeHistoryBackCallBack==`function`&&this.config.beforeHistoryBackCallBack(e);let t=Date.now()+1e3*5;for(;;){if(Date.now()>t){k.error(`未知情况，history.back()失败，无法退出手势模式`);break}if(this.config.win.location.hash.endsWith(this.config.hash))k.info(`history.back()`),this.config.win.history.back(),await r.default.sleep(this.config.backDelayTime||150);else break}k.success(`移除popstate事件`),D.off(this.config.win,`popstate`,this.popStateEvent,{capture:!0}),this.isBacking=!1,typeof this.config.afterHistoryBackCallBack==`function`&&this.config.afterHistoryBackCallBack(e)}},Ue=`.pops {
  --icon-width: 24px;
  --right-btn-width: 115px;
}

.small-window-drag {
  width: 100%;
  position: relative;
  height: 10px;
}
.small-window-drag div {
  width: 50px;
  margin: 0 auto;
  height: 4px;
  background: #d9d9d9;
  border-radius: 15px;
  bottom: 3px;
  position: relative;
}

.pops[type-value] .pops-drawer-title {
  display: block;
  background: #fff;
  width: 100%;
  box-sizing: border-box;
  padding: 16px 0px;
  border-bottom: 1px solid #d6d6d6;
}

.small-window-title-container {
  display: flex;
  justify-content: space-between;
  padding: 0px 16px;
}
.small-window-website-icon {
  width: var(--icon-width);
  height: var(--icon-width);
  align-self: center;
  border-radius: 3px;
}
.small-window-title-text-container {
  margin-right: auto;
  max-width: calc(100% - var(--icon-width) - var(--right-btn-width));
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0px 16px;
}
.small-window-title-text,
.small-window-website-host {
  min-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.xtiper_sheet_tit.xtiper_sheet_left {
  display: block;
  background: #fff;
  width: 100%;
  box-sizing: border-box;
}
.small-window-protocol-info {
  display: flex;
  align-items: center;
}
.small-window-control {
  display: flex;
  align-items: center;
  align-content: center;
  width: var(--right-btn-width);
  justify-content: center;
  gap: 12px;
}
.small-window-control-image-view,
.small-window-control-open-blank,
.small-window-control-close {
  width: 2rem;
  height: 2rem;
  text-align: center;
  margin: 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.refresh-icon {
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 16px;
}
.refresh-icon-in,
.refresh-icon-out {
  position: absolute;
  border: 5px solid rgba(0, 183, 229, 0.9);
  opacity: 0.9;
  border-radius: 50px;
  box-shadow: 0 0 15px #2187e7;
  width: 20px;
  height: 20px;
  margin: 0 auto;
}
.refresh-icon-out {
  background-color: rgba(0, 0, 0, 0);
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  -moz-animation: spinPulse 1s infinite ease-in-out;
  -webkit-animation: spinPulse 1s infinite ease-in-out;
  -o-animation: spinPulse 1s infinite ease-in-out;
  -ms-animation: spinPulse 1s infinite ease-in-out;
}
.refresh-icon-in {
  background: rgba(0, 0, 0, 0) no-repeat center center;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  -moz-animation: spinoffPulse 3s infinite linear;
  -webkit-animation: spinoffPulse 3s infinite linear;
  -o-animation: spinoffPulse 3s infinite linear;
  -ms-animation: spinoffPulse 3s infinite linear;
}
@-moz-keyframes spinPulse {
  0% {
    -moz-transform: rotate(160deg);
    opacity: 0;
    box-shadow: 0 0 1px #505050;
  }
  50% {
    -moz-transform: rotate(145deg);
    opacity: 1;
  }
  100% {
    -moz-transform: rotate(-320deg);
    opacity: 0;
  }
}
@-moz-keyframes spinoffPulse {
  0% {
    -moz-transform: rotate(0);
  }
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spinPulse {
  0% {
    -webkit-transform: rotate(160deg);
    opacity: 0;
    box-shadow: 0 0 1px #505050;
  }
  50% {
    -webkit-transform: rotate(145deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-320deg);
    opacity: 0;
  }
}
@-webkit-keyframes spinoffPulse {
  0% {
    -webkit-transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@-o-keyframes spinPulse {
  0% {
    -o-transform: rotate(160deg);
    opacity: 0;
    box-shadow: 0 0 1px #505050;
  }
  50% {
    -o-transform: rotate(145deg);
    opacity: 1;
  }
  100% {
    -o-transform: rotate(-320deg);
    opacity: 0;
  }
}
@-o-keyframes spinoffPulse {
  0% {
    -o-transform: rotate(0);
  }
  100% {
    -o-transform: rotate(360deg);
  }
}
@-ms-keyframes spinPulse {
  0% {
    -ms-transform: rotate(160deg);
    opacity: 0;
    box-shadow: 0 0 1px #505050;
  }
  50% {
    -ms-transform: rotate(145deg);
    opacity: 1;
  }
  100% {
    -ms-transform: rotate(-320deg);
    opacity: 0;
  }
}
@-ms-keyframes spinoffPulse {
  0% {
    -ms-transform: rotate(0);
  }
  100% {
    -ms-transform: rotate(360deg);
  }
}
@-moz-keyframes spinPulse {
  0% {
    -moz-transform: rotate(160deg);
    opacity: 0;
    box-shadow: 0 0 1px #505050;
  }
  50% {
    -moz-transform: rotate(145deg);
    opacity: 1;
  }
  100% {
    -moz-transform: rotate(-320deg);
    opacity: 0;
  }
}
@-moz-keyframes spinoffPulse {
  0% {
    -moz-transform: rotate(0);
  }
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spinPulse {
  0% {
    -webkit-transform: rotate(160deg);
    opacity: 0;
    box-shadow: 0 0 1px #505050;
  }
  50% {
    -webkit-transform: rotate(145deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-320deg);
    opacity: 0;
  }
}
@-webkit-keyframes spinoffPulse {
  0% {
    -webkit-transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@-o-keyframes spinPulse {
  0% {
    -o-transform: rotate(160deg);
    opacity: 0;
    box-shadow: 0 0 1px #505050;
  }
  50% {
    -o-transform: rotate(145deg);
    opacity: 1;
  }
  100% {
    -o-transform: rotate(-320deg);
    opacity: 0;
  }
}
@-o-keyframes spinoffPulse {
  0% {
    -o-transform: rotate(0);
  }
  100% {
    -o-transform: rotate(360deg);
  }
}
@-ms-keyframes spinPulse {
  0% {
    -ms-transform: rotate(160deg);
    opacity: 0;
    box-shadow: 0 0 1px #505050;
  }
  50% {
    -ms-transform: rotate(145deg);
    opacity: 1;
  }
  100% {
    -ms-transform: rotate(-320deg);
    opacity: 0;
  }
}
@-ms-keyframes spinoffPulse {
  0% {
    -ms-transform: rotate(0);
  }
  100% {
    -ms-transform: rotate(360deg);
  }
}
`,J={https:`
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
		</svg>`},We={$key:{smallWindow:`smallWindow`},$el:{$refreshIcon:null,$webSiteIcon:null},init(){let e=new E.LockFunction(()=>{let e=this.getForumList();e.length&&this.handleForumPost(e)});E.mutationObserver(document.documentElement,{callback:(t,n)=>{e.run()},config:{subtree:!0,childList:!0}})},getForumList(){return E.getNodeListValue(V.comiisForumList(),V.comiisPostli(),V.comiisMmlist())},showSmallWindow(t,n,r=[]){let i=new URL(n),o=i.protocol.includes(`https:`),s=`
        <div class="small-window-drag">
            <!-- 这里是拖拽区域 -->
            <div></div>
        </div>
        <div class="small-window-title-container">
            <i class="small-window-website-icon" style="display: none;">
                ${J.mt}
            </i>
            <div class="refresh-icon">
                <div class="refresh-icon-out"></div>
                <div class="refresh-icon-in"></div>
            </div>
            <div class="small-window-title-text-container">
                <p class="small-window-title-text">${t}</p>
                <div class="small-window-protocol-info">
                    <i class="small-window-protocol-icon">
                        ${o?J.https:J.http}
                    </i>
                    <p class="small-window-website-host">${i.host}</p>
                </div>
            </div>
            <div class="small-window-control">
                ${r.length?`
                    <i class="small-window-control-image-view">
                        ${J.image}
                    </i>
                    `:``}
                <i class="small-window-control-open-blank">
                    ${J.openBlank}
                </i>
                <i class="small-window-control-close">
                    ${J.close}
                </i>
            </div>
        </div>`,c=O.drawer({title:{enable:!0,text:s,html:!0,style:`height: auto;line-height: normal;`},content:{text:`
                <iframe scrolling="auto" allowtransparency="true" frameborder="0" src="${n}" style="width:100%; height:100%;">
                </iframe>
                `,html:!0},mask:{enable:!0,clickEvent:{toClose:!0},clickCallBack(e,t){b.quitGestureBackMode()}},btn:{ok:{enable:!1},cancel:{enable:!1},close:{enable:!1}},direction:`bottom`,size:`92%`,borderRadius:18,style:Ue}),l=c.$shadowRoot.querySelector(`.small-window-website-icon`),u=c.$shadowRoot.querySelector(`.refresh-icon`),d=c.$shadowRoot.querySelector(`.small-window-control-image-view`),f=c.$shadowRoot.querySelector(`.small-window-control-open-blank`),p=c.$shadowRoot.querySelector(`.small-window-control-close`),m=c.$shadowRoot.querySelector(`.small-window-title-text`);this.$el.$refreshIcon=u,this.$el.$webSiteIcon=l;let h=c.$shadowRoot.querySelector(`iframe`),g=c.$shadowRoot.querySelector(`.small-window-drag`),_=new(O.fn.Utils.AnyTouch())(g),v=c.$pops,y=D.height(v);_.on(`pan`,e=>{e.phase==`move`&&e.displacementY>0&&(v.style.transition=`none`,v.style.height=Math.abs(y-e.distanceY)+`px`),e.isEnd&&(v.style.transition=`0.2s ease-in`,parseInt(v.style.height)>window.innerHeight/2?v.style.height=y+`px`:c.close())});let b=new He({hash:this.$key.smallWindow,useUrl:!0,win:C,beforeHistoryBackCallBack:e=>{c.close()}});b.enterGestureBackMode(),D.on(m,`click`,r=>{D.preventEvent(r),E.copy(`『${t}』 - ${n}`),e.default.success(`已复制链接`)}),D.on(d,`click`,e=>{D.preventEvent(e),k.info(`查看图片`,r);var t=``;r.forEach(e=>{t+=`<li><img data-src="${e}"></li>`});let n=new a.default(D.toElement(`<ul>${t}</ul>`,!1,!1),{inline:!1,url:`data-src`,zIndex:ce(),hidden:()=>{n.destroy()}});n.zoomTo(1),n.show()}),D.on(p,`click`,e=>{D.preventEvent(e),b.quitGestureBackMode()}),D.on(f,`click`,e=>{D.preventEvent(e),window.open(n,`_blank`)}),D.on(l,`click`,e=>{D.preventEvent(e),h.contentWindow.location.reload(),this.checkIframeReadyState(h)}),this.checkIframeReadyState(h)},async handleForumPost(e){e.forEach(e=>{if(e.getAttribute(`data-injection-small-window`))return;let t=D.text(e.querySelector(`.mmlist_li_box h2 a`));(t==``||t==null)&&(t=D.text(e.querySelector(`.mmlist_li_box a`))),t=t.trim();let n=e.querySelector(`.mmlist_li_box a`).href;var r=[];e.setAttribute(`data-injection-small-window`,`true`),e.setAttribute(`data-injection-small-window-url`,n),e.setAttribute(`data-injection-small-window-title`,t),e.querySelectorAll(`.comiis_pyqlist_img img`).forEach(e=>{r.push(e.getAttribute(`src`))}),e.querySelectorAll(`.comiis_pyqlist_imgs img`).forEach(e=>{r.push(e.getAttribute(`src`))}),e.querySelectorAll(`.mmlist_li_box a`).forEach(e=>{e.removeAttribute(`href`),e.setAttribute(`data-href`,n)});let i=e.querySelector(`.mmlist_li_box`);D.on(i,`click`,function(e){var i=Number(e.clientX);document.body.offsetWidth/2>i?window.location.href=n:We.showSmallWindow(t,n,r)})})},checkIframeReadyState(e){this.showRefreshIcon();let t=setInterval(()=>{e.contentWindow&&(clearInterval(t),D.createDOMUtils({document:e.contentWindow.document,window:e.contentWindow,globalThis:e.contentWindow,self:e.contentWindow,top}).onReady(()=>{k.success(`小窗内容已加载完毕`),this.hideRefreshIcon()}))},400)},hideRefreshIcon(){this.$el.$refreshIcon.style.display=`none`,this.$el.$webSiteIcon.style.display=``},showRefreshIcon(){this.$el.$refreshIcon.style.display=``,this.$el.$webSiteIcon.style.display=`none`}},Ge={init(){t.default.onReady(()=>{B.execMenuOnce(`mt-guide-showLatestPost`,()=>{this.showLatestPost()})})},showLatestPost(){k.info(`显示最新帖子`);async function n(){let n=await A.get(`/forum.php?mod=guide&view=hot`,{fetch:!0,allowInterceptConfig:!1});if(!n.status){e.default.error(`获取轮播失败`);return}if(n.data.responseText.indexOf(`<script src="/_guard/auto.js"><\/script>`)!==-1){e.default.error(`获取轮播失败 未知的/_guard/auto.js文件`);return}var r=t.default.toElement(n.data.responseText,!0,!0).querySelectorAll(`div.comiis_mh_kxtxt div[id*="comiis_mh_kxtxt"] ul`);if(r.length===0){e.default.error(`获取轮播失败`);return}else{var i=[];r[r.length-1].querySelectorAll(`a`).forEach(e=>{i.push({href:e.getAttribute(`href`),title:e.getAttribute(`title`)})})}return i}n().then(e=>{if(!e)return;j(`
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
            `);var n=``;E.sortListByProperty(e,e=>{var t=e.href.match(/thread-(.+?)-/i);return parseInt(t[t.length-1])},!0),k.info(`导读内容`,e),e.forEach(e=>{n+=`
                <li>
                    <span>新帖</span>
                    <a href="${e.href}" title="${e.title}" target="_blank">${e.title}</a>
                </li>`});let r=document.querySelector(`.comiis_forumlist.comiis_xznlist`);t.default.before(r,`<div class="comiis_mh_kxtxt bg_f comiis_mh_kxtxt_owm"><ul>${n}</ul></div>`)})}},Ke=function(e,t,n,r,i,a,o,s,c,l){let u={text:e,type:`button`,attributes:{},props:{},description:t,buttonIcon:r,buttonIsRightIcon:i,buttonIconIsLoading:a,buttonType:o,buttonText:n,callback(e){typeof s==`function`&&s(e)},afterAddToUListCallBack:c};return Reflect.set(u.attributes,fe,()=>{u.disable=!!(typeof l==`function`?l():l)}),u},Y=function(e,t,n,r,i,a=``,o,s){let c={text:e,type:`input`,inputType:`number`,attributes:{},props:{},description:r,placeholder:a,afterAddToUListCallBack:o,getValue(){return this.props[I].get(t,n)},callback(e,r,a){a??=Number(n),!(typeof i==`function`&&i(e,r,a))&&(this.props[I].set(t,r),typeof s==`function`&&s(e,r,a))}};return Reflect.set(c.attributes,P,t),Reflect.set(c.attributes,F,n),Z.initComponentsStorageApi(`input`,c,{get(e,t){return B.getValue(e,t)},set(e,t){B.setValue(e,t)}}),c},qe=function(e,t,n,r,i,a=``,o,s){let c={text:e,type:`input`,inputType:`password`,attributes:{},props:{},description:r,placeholder:a,afterAddToUListCallBack:o,getValue(){return this.props[I].get(t,n)},callback(e,n){typeof i==`function`&&i(e,n)||(this.props[I].set(t,n),typeof s==`function`&&s(e,n))}};return Reflect.set(c.attributes,P,t),Reflect.set(c.attributes,F,n),Z.initComponentsStorageApi(`input`,c,{get(e,t){return B.getValue(e,t)},set(e,t){B.setValue(e,t)}}),c},Je=function(e,t,n,r,i,a){let o={type:`own`,attributes:r||{},props:i||{},createLIElement:e,afterAddToUListCallBack:a};return typeof t==`object`&&t&&Object.keys(t).length>0?Reflect.set(o.attributes,pe,t):Reflect.set(o.attributes,fe,()=>!1),typeof n==`object`&&n&&Reflect.set(o.attributes,me,n),o},Ye=function(e,t,n,r,i,a,o){let s={text:e,type:`select`,description:a,attributes:{},props:{},getValue(){return this.props[I].get(t,n)},callback(e){if(e==null)return;let n=e.value;k.info(`选择：${e.text}`),!(typeof i==`function`&&i(e))&&(this.props[I].set(t,n),typeof o==`function`&&o(e))},data:r};return Reflect.set(s.attributes,P,t),Reflect.set(s.attributes,F,n),Z.initComponentsStorageApi(`select`,s,{get(e,t){return B.getValue(e,t)},set(e,t){B.setValue(e,t)}}),s},X=function(t,n,r=!1,i,a,o,s,c,l){if(l&&typeof l.defaultValue==`object`&&l.defaultValue!=null){let e=l.key??n;l.handler.add({key:e,name:t}),l.handler.shortCut.initConfig(e,l.defaultValue)}let u={text:t,type:`switch`,description:a,disabled:s,attributes:{},props:{},getValue(){return this.props[I].get(n,r)},callback(e,r){let a=!!r;k.success(`${a?`开启`:`关闭`} ${t}`),!(typeof i==`function`&&i(e,a))&&(this.props[I].set(n,a),typeof c==`function`&&c(e,a))},afterAddToUListCallBack:(...r)=>{if(o?.(...r),l){let i=l.handler.shortCut,a=l.key??n,[o,s]=r,c=s.target?.querySelector(`.pops-panel-item-left-main-text`);if(!c)return;let u=()=>{let e=l.handler.shortCut.getShowText(a,`暂未录入快捷键`),n=D.createElement(`div`,{className:`pops-switch-shortcut-wrapper`,innerHTML:`
              <i class="pops-bottom-icon" is-loading="false">
                <svg viewBox="0 0 1123 1024" xmlns="http://www.w3.org/2000/svg" data-type="keyboard">
                  <path d="M1014.122186 1024H109.753483A109.753483 109.753483 0 0 1 0 914.246517V392.917471a109.753483 109.753483 0 0 1 109.753483-109.753484h904.368703a109.753483 109.753483 0 0 1 109.753484 109.753484v521.329046a109.753483 109.753483 0 0 1-109.753484 109.753483zM109.753483 370.966774a21.950697 21.950697 0 0 0-21.950696 21.950697v521.329046a21.950697 21.950697 0 0 0 21.950696 21.950696h904.368703a21.950697 21.950697 0 0 0 21.950697-21.950696V392.917471a21.950697 21.950697 0 0 0-21.950697-21.950697z"></path>
                  <path d="M687.056806 891.198285H307.309753a43.901393 43.901393 0 0 1 0-87.802787h379.747053a43.901393 43.901393 0 0 1 0 87.802787zM175.605573 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM432.428725 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM947.172562 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 546.572347a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 803.395498a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 678.276527a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM948.270096 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394z"></path>
                  <path d="M881.320472 766.079314H689.251876a43.901393 43.901393 0 0 1 0-87.802787h192.068596a21.950697 21.950697 0 0 0 21.950696-21.950696v-65.85209a43.901393 43.901393 0 0 1 87.802787 0v65.85209a109.753483 109.753483 0 0 1-109.753483 109.753483zM305.114684 502.670954H175.605573a43.901393 43.901393 0 0 1 0-87.802787h129.509111a43.901393 43.901393 0 0 1 0 87.802787zM563.03537 365.4791a43.901393 43.901393 0 0 1-43.901394-43.901394v-105.363344A109.753483 109.753483 0 0 1 628.88746 106.460879h61.461951a21.950697 21.950697 0 0 0 21.950696-21.950697V43.901393a43.901393 43.901393 0 0 1 87.802787 0v40.608789a109.753483 109.753483 0 0 1-109.753483 109.753484h-61.461951a21.950697 21.950697 0 0 0-21.950697 21.950696v105.363344a43.901393 43.901393 0 0 1-43.901393 43.901394z"></path>
                </svg>
              </i>
            `},{style:`margin-right: 5px;display: inline-flex;`}),r=n.querySelector(`.pops-bottom-icon`);D.on(r,`click`,function(e){l.handler.shortCut.deleteOption(a),i.toolTip.offEvent(),i.toolTip.close(),i.toolTip.destory(),n.remove()},{once:!0});let i=O.tooltip({$target:r,content:()=>e,className:`github-tooltip`,isFixed:!0,only:!0});D.empty(c),D.append(c,n,t)};if(O.rightClickMenu({$target:c,only:!0,data:[{text:()=>l.handler.shortCut.hasOption(a)?`修改快捷键`:`添加快捷键`,icon:O.config.iconSVG.keyboard,callback(t,n,r,o){if(i.isWaitKeyboardPress()){e.default.warning(`请先执行当前的录入操作`);return}let s=e.default.loading(`请按下快捷键...`,{showClose:!0,onClose(){i.cancelEnterShortcutKeys()}});i.enterShortcutKeys(a).then(({status:t,option:n,key:r})=>{s.close(),t?(k.success(`录入快捷键`,n),e.default.success(`录入成功`),u()):e.default.error(`快捷键 ${i.translateKeyboardValueToButtonText(n)} 已被 ${r} 占用`)})}}]}),!i.hasOption(a))return;u()}}};return Reflect.set(u.attributes,P,n),Reflect.set(u.attributes,F,r),Z.initComponentsStorageApi(`switch`,u,{get(e,t){return B.getValue(e,t)},set(e,t){B.setValue(e,t)}}),u},Xe=function(e,t,n,r,i,a=``,o,s){let c={text:e,type:`textarea`,attributes:{},props:{},description:r,placeholder:a,disabled:o,getValue(){let e=this.props[I].get(t,n);return Array.isArray(e)?e.join(`
`):e},callback(e,n){typeof i==`function`&&i(e,n)||(this.props[I].set(t,n),typeof s==`function`&&s(e,n))}};return Reflect.set(c.attributes,P,t),Reflect.set(c.attributes,F,n),Z.initComponentsStorageApi(`switch`,c,{get(e,t){return B.getValue(e,t)},set(e,t){B.setValue(e,t)}}),c},Z={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||=new r.default.Dictionary,this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t)},initComponentsStorageApi(e,t,n){let r;r=this.hasStorageApi(e)?this.getStorageApi(e):n,this.setComponentsStorageApiProperty(t,r)},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,I,t)}},Q=function(e,t,n,r,i,a=``,o=`text`,s,c){let l={text:e,type:`input`,inputType:o,attributes:{},props:{},description:r,placeholder:a,afterAddToUListCallBack:s,getValue(){return this.props[I].get(t,n)},callback(e,n){let r=e.target.validity.valid;typeof i==`function`&&i(e,n,r)||(this.props[I].set(t,n),typeof c==`function`&&c(e,n,r))}};return Reflect.set(l.attributes,P,t),Reflect.set(l.attributes,F,n),Z.initComponentsStorageApi(`input`,l,{get(e,t){return B.getValue(e,t)},set(e,t){B.setValue(e,t)}}),l},Ze=class{option;constructor(e){this.option=e}async showView(){let e=O.confirm({title:{text:this.option.title,position:`center`},content:{text:`
        <form class="rule-form-container" onsubmit="return false">
            <ul class="rule-form-ulist"></ul>
            <input type="submit" style="display: none;" />
        </form>
        `,html:!0},btn:E.assign({ok:{callback:async()=>{await i()}}},this.option.btn||{},!0),drag:!0,mask:{enable:!0},style:`
      ${O.config.cssText.panelCSS}
      
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

      ${this.option?.style??``}
      `,width:typeof this.option.width==`function`?this.option.width():window.innerWidth>500?`500px`:`88vw`,height:typeof this.option.height==`function`?this.option.height():window.innerHeight>500?`500px`:`80vh`}),t=e.$shadowRoot.querySelector(`.rule-form-container`);e.$shadowRoot.querySelector(`input[type=submit]`);let n=e.$shadowRoot.querySelector(`.rule-form-ulist`),r=await this.option.getView(await this.option.data());D.append(n,r);let i=async()=>{(await this.option.onsubmit(t,await this.option.data())).success&&(e.close(),typeof this.option.dialogCloseCallBack==`function`&&await this.option.dialogCloseCallBack(!0))};return e}},Qe=class{option;constructor(e){this.option=e}async showView(t){let n=O.confirm({title:{text:this.option.title,position:`center`},content:{text:`
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
        `,html:!0},style:`
      ${O.config.cssText.panelCSS}

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
      `,btn:{merge:!0,reverse:!1,position:`space-between`,ok:{enable:this.option?.bottomControls?.add?.enable||!0,type:`primary`,text:`添加`,callback:async()=>{this.showEditView(!1,await this.option.getAddData(),n.$shadowRoot)}},close:{enable:!0,callback(){n.close()}},cancel:{enable:!1},other:{enable:this.option?.bottomControls?.clear?.enable||!0,type:`xiaomi-primary`,text:`清空所有(${(await this.option.data()).length})`,callback:()=>{let t=O.confirm({title:{text:`提示`,position:`center`},content:{text:`确定清空所有的数据？`,html:!1},btn:{ok:{enable:!0,callback:async()=>{if(k.success(`清空所有`),typeof this.option?.bottomControls?.clear?.callback==`function`&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){e.default.error(`清理失败`);return}else e.default.success(`清理成功`);await this.updateDeleteAllBtnText(n.$shadowRoot),this.clearContent(n.$shadowRoot),t.close()}},cancel:{text:`取消`,enable:!0}},mask:{enable:!0},width:`300px`,height:`200px`})}}},mask:{enable:!0},width:window.innerWidth>500?`500px`:`88vw`,height:window.innerHeight>500?`500px`:`80vh`}),{$searchContainer:r,$externalSelect:i,$ruleValueSelect:a,$searchInput:o}=this.parseViewElement(n.$shadowRoot);if(this.option.bottomControls?.filter?.enable){let e=null,r=null;Array.isArray(this.option.bottomControls?.filter?.option)&&D.append(i,this.option.bottomControls?.filter?.option.map(e=>{let t=D.createElement(`option`,{innerText:e.name});return Reflect.set(t,`data-value`,e),t})),Array.isArray(this.option.bottomControls?.filter?.inputOption)&&D.append(a,this.option.bottomControls?.filter?.inputOption.map(e=>{let t=D.createElement(`option`,{innerText:e.name});return Reflect.set(t,`data-value`,e),t})),D.on(i,`change`,async()=>{let t=i[i.selectedIndex],n=Reflect.get(t,`data-value`);typeof n?.selectedCallBack==`function`&&n.selectedCallBack(n),e=n,await c(!1)}),D.on(a,`change`,async()=>{let e=a[a.selectedIndex],t=Reflect.get(e,`data-value`);typeof t?.selectedCallBack==`function`&&t.selectedCallBack(t),r=t,await c(!1)}),D.onInput(o,E.debounce(async()=>{await c(!1)}));let s=()=>{let t=i[i.selectedIndex];e=Reflect.get(t,`data-value`);let n=a[a.selectedIndex];r=Reflect.get(n,`data-value`)},c=async i=>{this.clearContent(n.$shadowRoot),i&&s();let a=await this.option.data(),c=[],l=D.val(o);for(let n=0;n<a.length;n++){let i=a[n];if(typeof t==`function`){let e=await t(i);if(typeof e==`boolean`&&!e)continue}if(e){let t=await e?.filterCallBack?.(i);if(typeof t==`boolean`&&!t)continue}if(r){let e=!0;if(e=l===``,e||=await r?.filterCallBack?.(i,l),!e)continue}c.push(i)}await this.appendRuleItemElement(n.$shadowRoot,c)};if(typeof t==`object`&&t){let e;e=typeof t.external==`number`?t.external:Array.from(i.options).findIndex(e=>Reflect.get(e,`data-value`).value===t.external),e!==-1&&(i.selectedIndex=e);let n;n=typeof t.rule==`number`?t.rule:Array.from(a.options).findIndex(e=>Reflect.get(e,`data-value`).value===t.rule),n!==-1&&(a.selectedIndex=n)}await c(!0)}else D.hide(r,!1)}showEditView(t,n,r,i,a,o){let s=async e=>{e?typeof o==`function`&&o(await this.option.getData(n)):(t||await this.option.deleteData(n),typeof a==`function`&&a(await this.option.getData(n)))};new Ze({title:t?`编辑`:`添加`,data:()=>n,dialogCloseCallBack:s,getView:async e=>await this.option.itemControls.edit.getView(e,t),btn:{ok:{enable:!0,text:t?`修改`:`添加`},cancel:{callback:async e=>{e.close(),await s(!1)}},close:{callback:async e=>{e.close(),await s(!1)}}},onsubmit:async(n,a)=>{let o=await this.option.itemControls.edit.onsubmit(n,t,a);return o.success?t?(e.default.success(`修改成功`),r&&await this.updateRuleItemElement(o.data,i,r)):r&&await this.appendRuleItemElement(r,o.data):t&&k.error(`修改失败`),o},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView()}parseViewElement(e){let t=e.querySelector(`.rule-view-container`),n=e.querySelector(`.pops-confirm-btn button.pops-confirm-btn-other`),r=e.querySelector(`.rule-view-search-container`);return{$container:t,$deleteBtn:n,$searchContainer:r,$externalSelect:r.querySelector(`.pops-panel-select .select-rule-status`),$ruleValueSelect:r.querySelector(`.pops-panel-select .select-rule-value`),$searchInput:r.querySelector(`.pops-panel-input input`)}}parseRuleItemElement(e){let t=e.querySelector(`.rule-controls-enable`);return{$enable:t,$enableSwitch:t.querySelector(`.pops-panel-switch`),$enableSwitchInput:t.querySelector(`.pops-panel-switch__input`),$enableSwitchCore:t.querySelector(`.pops-panel-switch__core`),$edit:e.querySelector(`.rule-controls-edit`),$delete:e.querySelector(`.rule-controls-delete`),data:Reflect.get(e,`data-rule`)}}async createRuleItemElement(t,n){let r=await this.option.getDataItemName(t),i=D.createElement(`div`,{className:`rule-item`,innerHTML:`
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
					${O.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${O.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(i,`data-rule`,t);let a=`pops-panel-switch-is-checked`,{$enable:o,$enableSwitch:s,$enableSwitchCore:c,$enableSwitchInput:l,$delete:u,$edit:d}=this.parseRuleItemElement(i);return this.option.itemControls.enable.enable?(D.on(c,`click`,async()=>{let e=!1;s.classList.contains(a)?(s.classList.remove(a),e=!1):(s.classList.add(a),e=!0),l.checked=e,await this.option.itemControls.enable.callback(t,e)}),await this.option.itemControls.enable.getEnable(t)&&s.classList.add(a)):o.remove(),this.option.itemControls.edit.enable?D.on(d,`click`,e=>{D.preventEvent(e),this.showEditView(!0,t,n,i,e=>{t=null,t=e})}):d.remove(),this.option.itemControls.delete.enable?D.on(u,`click`,r=>{D.preventEvent(r);let a=O.confirm({title:{text:`提示`,position:`center`},content:{text:`确定删除该条数据？`,html:!1},btn:{ok:{enable:!0,callback:async()=>{k.success(`删除数据`),await this.option.itemControls.delete.deleteCallBack(t)?(e.default.success(`成功删除该数据`),i.remove(),await this.updateDeleteAllBtnText(n),a.close()):e.default.error(`删除该数据失败`)}},cancel:{text:`取消`,enable:!0}},mask:{enable:!0},width:`300px`,height:`200px`})}):u.remove(),i}async appendRuleItemElement(e,t){let{$container:n}=this.parseViewElement(e),r=[],i=Array.isArray(t)?t:[t];for(let t=0;t<i.length;t++){let n=i[t],a=await this.createRuleItemElement(n,e);r.push(a)}return D.append(n,r),await this.updateDeleteAllBtnText(e),r}async updateRuleContaienrElement(e){this.clearContent(e);let t=await this.option.data();await this.appendRuleItemElement(e,t),await this.updateDeleteAllBtnText(e)}async updateRuleItemElement(e,t,n){let r=await this.createRuleItemElement(e,n);t.after(r),t.remove()}clearContent(e){let{$container:t}=this.parseViewElement(e);D.html(t,``)}setDeleteBtnText(e,t,n=!1){let{$deleteBtn:r}=this.parseViewElement(e);n?D.html(r,t):D.text(r,t)}async updateDeleteAllBtnText(e){let t=await this.option.data();this.setDeleteBtnText(e,`清空所有(${t.length})`)}},$e={$key:{STORAGE_KEY:`mt-own-block-rule`},$data:{isRegister:!1},init(){this.registerMenu();let e=new E.LockFunction(()=>{this.execRule()});E.mutationObserver(document,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{e.run()}})},registerMenu(){this.$data.isRegister||(this.$data.isRegister=!0,V.registerLeftMenu({name:`我的屏蔽`,icon:``,iconColor:`#000`,callback:()=>{this.showView()}}))},getTemplateData(){return{uuid:E.generateUUID(),enable:!0,name:``,data:{userName:``,userUID:``,userLevel:``,postUrl:``,postTitle:``,postContent:``,postPlateName:``}}},showView(){let t=O.fn.PanelHandlerComponents();function n(e){return{get(t,n){return e[t]??n},set(t,n){e[t]=n}}}new Qe({title:`我的屏蔽`,data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:e=>e.name,updateData:e=>this.updateData(e),deleteData:e=>this.deleteData(e),getData:e=>this.getData().find(t=>t.uuid===e.uuid)??e,itemControls:{enable:{enable:!0,getEnable(e){return e.enable},callback:(e,t)=>{e.enable=t,this.updateData(e)}},edit:{enable:!0,getView:(e,r)=>{let i=document.createDocumentFragment();r||(e=this.getTemplateData());let a=X(`启用`,`enable`,!0);Reflect.set(a.props,I,n(e));let o=t.createSectionContainerItem_switch(a).$el,s=Q(`规则名称`,`name`,``,``,void 0,`必填`);Reflect.set(s.props,I,n(e));let c=t.createSectionContainerItem_input(s).$el,l=Q(`用户名`,`userName`,``,``,void 0,`可正则`);Reflect.set(l.props,I,n(e.data));let u=t.createSectionContainerItem_input(l).$el,d=Q(`用户UID`,`userUID`,``,``,void 0,`可正则`);Reflect.set(d.props,I,n(e.data));let f=t.createSectionContainerItem_input(d).$el,p=Q(`用户等级`,`userLevel`,``,``,void 0,`可正则`);Reflect.set(p.props,I,n(e.data));let m=t.createSectionContainerItem_input(p).$el,h=Q(`帖子url`,`postUrl`,``,``,void 0,`可正则`);Reflect.set(h.props,I,n(e.data));let g=t.createSectionContainerItem_input(h).$el,_=Q(`帖子标题`,`postTitle`,``,``,void 0,`可正则`);Reflect.set(_.props,I,n(e.data));let v=t.createSectionContainerItem_input(_).$el,y=Q(`帖子内容`,`postContent`,``,``,void 0,`可正则`);Reflect.set(y.props,I,n(e.data));let b=t.createSectionContainerItem_input(y).$el,x=Q(`帖子所在的板块名`,`postPlateName`,``,``,void 0,`可正则`);Reflect.set(x.props,I,n(e.data));let ee=t.createSectionContainerItem_input(x).$el;return i.appendChild(o),i.appendChild(c),i.appendChild(u),i.appendChild(f),i.appendChild(m),i.appendChild(g),i.appendChild(v),i.appendChild(b),i.appendChild(ee),i},onsubmit:(n,r,i)=>{let a=n.querySelectorAll(`.rule-form-ulist > li`),o=this.getTemplateData();return r&&(o.uuid=i.uuid),a.forEach(e=>{let n=Reflect.get(e,t.$data.nodeStoreConfigKey),r=Reflect.get(n,`attributes`),i=Reflect.get(e,I),a=Reflect.get(r,P),s=Reflect.get(r,F),c=i.get(a,s);Reflect.has(o,a)?Reflect.set(o,a,c):Reflect.has(o.data,a)?Reflect.set(o.data,a,c):k.error(`${a}不在数据中`)}),o.name.trim()===``?(e.default.error(`规则名称不能为空`),{success:!1,data:o}):r?{success:this.updateData(o),data:o}:{success:this.addData(o),data:o}}},delete:{enable:!0,deleteCallBack:e=>this.deleteData(e)}},bottomControls:{filter:{enable:!0,option:[{name:`无`,value:``,filterCallBack(){return!0}},{name:`启用`,value:`enable`,filterCallBack(e){return e.enable}},{name:`未启用`,value:`notEnable`,filterCallBack(e){return!e.enable}}],inputOption:[{name:`规则名`,value:`name`,filterCallBack(e,t){return!!e.name.match(t)}}]}}}).showView()},execRule(){let e=this.getData();function t(t){for(let n of e){let e=n.data;if(Object.keys(e).find(n=>{let r=e[n];if(E.isNotNull(r)){let i=new RegExp(r,`i`),a=Reflect.get(t,n);if(typeof a==`string`&&E.isNotNull(a)&&a.match(i))return k.info(`屏蔽`,[e,a]),!0}return!1}))return!0}return!1}(G.isGuide()||G.isPlate()||G.isPost()||G.isSpace())&&(N(`.comiis_forumlist .forumlist_li`).forEach(e=>{let n=e.querySelector(`a.top_user`),r=n.href.match(H.uid),i={userName:n.innerText,userUID:r[r.length-1].trim(),userLevel:e.querySelector(`span.top_lev`).innerText.replace(`Lv.`,``),postUrl:e.querySelector(`.mmlist_li_box a`).getAttribute(`href`)||e.querySelector(`.mmlist_li_box a`).getAttribute(`data-href`),postTitle:e.querySelector(`.mmlist_li_box h2 a`)?.innerText||``,postContent:e.querySelector(`.mmlist_li_box .list_body`).innerText,postPlateName:(e.querySelector(`.forumlist_li_time a.f_d`)||e.querySelector(`.comiis_xznalist_bk.cl`)).innerText.replace(//g,``).replace(/\s*/g,``).replace(/来自/g,``)};E.isNull(i.postPlateName)&&(i.postPlateName=M(`#comiis_wx_title_box`).innerText),t(i)&&e.remove()}),N(`.comiis_postlist .comiis_postli`).forEach(e=>{let n=e.querySelector(`a.top_user`),r=n.href.match(H.uid);t({userName:n.innerText,userUID:r[r.length-1].trim(),userLevel:e.querySelector(`a.top_lev`).innerText.replace(`Lv.`,``),postUrl:void 0,postTitle:void 0,postContent:e.querySelector(`.comiis_message_table`).innerText,postPlateName:void 0})&&e.remove()})),G.isMessageList()&&N(`.comiis_pms_box .comiis_pmlist ul li`).forEach(e=>{let n=e.querySelector(`a.b_b`).href.match(H.uid);t({userName:e.querySelector(`h2`).innerText.replace(e.querySelector(`h2 span`).innerText,``).replace(/\s*/,``),userUID:n[n.length-1].trim(),userLevel:void 0,postUrl:e.querySelector(`a.b_b`).href,postTitle:void 0,postContent:e.querySelector(`p.f_c`).innerText.trim(),postPlateName:void 0})&&e.remove()})},getData(){return v(this.$key.STORAGE_KEY,[])},setData(e){S(this.$key.STORAGE_KEY,e)},addData(e){let t=this.getData();return t.findIndex(t=>t.uuid==e.uuid)===-1?(t.push(e),S(this.$key.STORAGE_KEY,t),!0):!1},updateData(e){let t=this.getData(),n=t.findIndex(t=>t.uuid==e.uuid),r=!1;return n!==-1&&(r=!0,t[n]=e),this.setData(t),r},deleteData(e){let t=this.getData(),n=t.findIndex(t=>t.uuid==e.uuid),r=!1;return n!==-1&&(r=!0,t.splice(n,1)),this.setData(t),r},clearData(){g(this.$key.STORAGE_KEY)}},et={$el:{isFilterElementHTML:[]},$key:{STORAGE_KEY:`mt-post-comment-filter-rule`},init(){if(this.registerMenu(),G.isPost()){let e=this.getData();if(!e.enable)return;let t=new E.LockFunction(()=>{this.runFilter(e)});E.mutationObserver(document,{config:{subtree:!0,childList:!0},callback:()=>{t.run()}})}},registerMenu(){V.registerLeftMenu({name:`评论过滤器`,icon:``,iconColor:`#ff0019`,callback:()=>{this.showView()}})},runFilter(e){let t=function(t){for(let n of e.userBlackList)if(n==t.userName||n==t.userUID)return k.success(`评论过滤器：黑名单用户`,t),!0;return!1},n=function(t){for(let n of e.userWhiteList)if(n===t.userName||n===t.userUID)return k.success(`评论过滤器：白名单用户`,t),!0;return!1};N(`.comiis_postlist .comiis_postli`).forEach(r=>{if(r.querySelector(`#comiis_allreplies`))return;let i=r.querySelector(`a.top_user`),a=i.href.match(H.uid),o={userName:i?.innerText||``,userUID:a&&a[a?.length-1]?.trim()||``,content:r.querySelector(`.comiis_message_table`)?.innerText?.trim()||``,isAuthor:!!r.querySelector(`span.top_lev`)};if(!n(o)){if(e.replyFlag&&r.querySelector(`.comiis_quote`)){let e=r.querySelector(`.comiis_quote`);this.$el.isFilterElementHTML.push(e.outerHTML),e.remove()}if(!(o.isAuthor&&!e.avatarFlag)){if(t(o)){this.$el.isFilterElementHTML.push(r.outerHTML),r.remove();return}if(!(typeof e.minLength==`number`&&e.minLength>o.content.length)&&!(typeof e.keywordLength==`number`&&e.keywordLength<o.content.length))for(let t of e.keywords){if(typeof t!=`string`)continue;let e=new RegExp(t);if(o.content.match(e)){console.log(`评论过滤器：`,o),this.$el.isFilterElementHTML.push(r.outerHTML),r.remove();return}}}}})},showView(){let e=this;function t(t){return{get(t,n){let r=e.getData(),i=Reflect.get(r,t,n);return(t===`keywords`||t===`userWhiteList`||t===`userBlackList`)&&(i=i.join(`
`)),i},set(n,r){(n===`keywords`||n===`userWhiteList`||n===`userBlackList`)&&(r=r.split(`
`).filter(e=>e.trim()!=``)),Reflect.set(t,n,r),e.setData(t)}}}let n=O.fn.PanelHandlerComponents();new Ze({title:`评论过滤器`,data:()=>this.getData(),getView:e=>{let r=document.createDocumentFragment(),i=X(`启用`,`enable`,!0);Reflect.set(i.props,I,t(e));let a=n.createSectionContainerItem_switch(i).$el,o=X(`处理回复引用`,`replyFlag`,!1,void 0,`移除引用`);Reflect.set(o.props,I,t(e));let s=n.createSectionContainerItem_switch(o).$el,c=X(`处理作者评论`,`avatarFlag`,!1);Reflect.set(c.props,I,t(e));let l=n.createSectionContainerItem_switch(c).$el,u=X(`处理从"搜索页面"或"我的帖子提醒页面"进入的网站`,`viewthreadFlag`,!1);Reflect.set(u.props,I,t(e));let d=n.createSectionContainerItem_switch(u).$el,f=Y(`匹配的评论内容长度最小值`,`minLength`,5,`小于此长度的评论就算关键字匹配成功了也不会被排除`);Reflect.set(f.props,I,t(e));let p=n.createSectionContainerItem_input(f).$el,m=Y(`匹配的评论内容长度最大值`,`keywordLength`,8,`大于此长度的评论就算关键字匹配成功了也不会被排除`);Reflect.set(m.props,I,t(e));let h=n.createSectionContainerItem_input(m).$el,g=Xe(`评论关键字`,`keywords`,``,`多个关键字换行分割`,void 0);Reflect.set(g.props,I,t(e));let _=n.createSectionContainerItem_textarea(g).$el,v=Xe(`黑名单用户`,`userBlackList`,``,`多个用户换行分割`,void 0);Reflect.set(v.props,I,t(e));let y=n.createSectionContainerItem_textarea(v).$el,b=Xe(`白名单用户`,`userWhiteList`,``,`多个用户换行分割`,void 0);Reflect.set(b.props,I,t(e));let x=n.createSectionContainerItem_textarea(b).$el;return r.append(a,s,l,d,p,h,_,y,x),r},btn:{merge:!0,position:`space-between`,ok:{enable:!1},cancel:{enable:!0,text:`关闭`},other:{enable:!0,text:`查看已过滤（${this.$el.isFilterElementHTML.length}）`,type:`primary`,callback:(e,t)=>{console.log(this.$el.isFilterElementHTML),O.alert({title:{text:`评论过滤器-已过滤`,position:`center`},content:{text:`
                                ${Array.from(document.querySelectorAll(`link[rel="stylesheet"]`)).map(e=>e.outerHTML).join(`
`)}

                                ${this.$el.isFilterElementHTML.join(`
`)}
                                `,html:!0},btn:{ok:{type:`default`,text:`关闭`}},width:window.innerWidth>500?`500px`:`88vw`,height:window.innerHeight>500?`500px`:`80vh`})}}},dialogCloseCallBack(e){},onsubmit:(e,t)=>({success:!0,data:t}),style:`
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
            `}).showView()},getTemplateData(){return{enable:!0,avatarFlag:!1,replyFlag:!1,viewthreadFlag:!1,minLength:5,keywordLength:8,keywords:[],userBlackList:[],userWhiteList:[]}},getData(){return v(this.$key.STORAGE_KEY,this.getTemplateData())},setData(e){S(this.$key.STORAGE_KEY,e)}},tt={$key:{STORAGE_KEY:`mt-productListingReminder-rule`},init(){this.registerMenu(),this.runRule()},registerMenu(){V.registerLeftMenu({name:`商品上架提醒`,icon:``,iconColor:`#2376b7`,callback:()=>{this.showView()}})},async runRule(){async function t(){let t=await A.get(`/keke_integralmall-keke_integralmall.html`,{fetch:!0,allowInterceptConfig:!1});if(!t.status){e.default.error(`【积分商城】获取数据失败`);return}let n=[];return D.toElement(t.data.responseText,!0,!0).querySelectorAll(`.task-list-wrapper li.col-xs-12`).forEach(e=>{n.push({name:D.text(e.querySelector(`.mall-info a > *:first-child`))||D.text(e.querySelector(`.mall-info a`)),price:D.text(e.querySelector(`.mall-info span.discount-price i`)),endTime:D.text(e.querySelector(`.mall-info #time_hz span.time`)),remainingQuantity:parseInt(e.querySelector(`.mall-info .mall-count .count-r`)?.innerText?.replace(/仅剩|件/gi,``)||`0`)})}),n}if(G.isPointsMall())return;let n=this.getData();if(!n.length)return;let r=await t();if(r){for(let t of r)for(let r of n)if(r.enable&&t.name.match(new RegExp(r.productName,`i`))&&!isNaN(t.remainingQuantity)&&t.remainingQuantity>0){k.success(`成功匹配对应商品`,r,t),O.confirm({title:{text:`积分商城提醒`,position:`center`},content:{text:`<br />
                            您设置的商品已上架在积分商城中，当前售价 ${t.price}金币，仅剩${t.remainingQuantity}件，是否前往购买？
                            <a style="color: red !important;">(如需关闭提醒，请删除该关键字)</a>
                            <br />`,html:!0},btn:{merge:!0,position:`space-between`,other:{enable:!0,type:`danger`,text:`删除提醒`,callback:()=>{this.deleteData(r)?e.default.success(`删除成功`):e.default.error(`删除失败`)}},ok:{text:`前往购买`,callback:()=>{window.location.href=`${window.location.origin}/keke_integralmall-keke_integralmall.html`}}},width:`300px`,height:`300px`});return}}},getTemplateData(){return{uuid:E.generateUUID(),enable:!0,name:``,productName:``}},showView(){let t=O.fn.PanelHandlerComponents();function n(e){return{get(t,n){return e[t]??n},set(t,n){e[t]=n}}}new Qe({title:`商品上架提醒`,data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:e=>e.name,updateData:e=>this.updateData(e),deleteData:e=>this.deleteData(e),getData:e=>this.getData().find(t=>t.uuid===e.uuid)??e,itemControls:{enable:{enable:!0,getEnable(e){return e.enable},callback:(e,t)=>{e.enable=t,this.updateData(e)}},edit:{enable:!0,getView:(e,r)=>{let i=document.createDocumentFragment();r||(e=this.getTemplateData());let a=X(`启用`,`enable`,!0);Reflect.set(a.props,I,n(e));let o=t.createSectionContainerItem_switch(a).$el,s=Q(`规则名称`,`name`,``,``,void 0,`必填`);Reflect.set(s.props,I,n(e));let c=t.createSectionContainerItem_input(s).$el,l=Q(`商品名`,`productName`,``,``,void 0,`可正则，需手动转义`);Reflect.set(l.props,I,n(e));let u=t.createSectionContainerItem_input(l).$el;return i.append(o,c,u),i},onsubmit:(n,r,i)=>{let a=n.querySelectorAll(`.rule-form-ulist > li`),o=this.getTemplateData();return r&&(o.uuid=i.uuid),a.forEach(e=>{let n=Reflect.get(e,t.$data.nodeStoreConfigKey),r=Reflect.get(n,`attributes`),i=Reflect.get(e,I),a=Reflect.get(r,P),s=Reflect.get(r,F),c=i.get(a,s);Reflect.has(o,a)?Reflect.set(o,a,c):k.error(`${a}不在数据中`)}),o.name.trim()===``?(e.default.error(`规则名称不能为空`),{success:!1,data:o}):r?{success:this.updateData(o),data:o}:{success:this.addData(o),data:o}}},delete:{enable:!0,deleteCallBack:e=>this.deleteData(e)}},bottomControls:{filter:{enable:!0,option:[{name:`无`,value:``,filterCallBack(e){return!0}},{name:`启用`,value:`enable`,filterCallBack(e){return e.enable}},{name:`未启用`,value:`notEnable`,filterCallBack(e){return!e.enable}}],inputOption:[{name:`规则名`,value:`name`,filterCallBack(e,t){return!!e.name.match(t)}},{name:`商品名`,value:`productName`,filterCallBack(e,t){return!!e.productName.match(t)}}]}}}).showView()},getData(){return v(this.$key.STORAGE_KEY,[])},setData(e){S(this.$key.STORAGE_KEY,e)},addData(e){let t=this.getData();return t.findIndex(t=>t.uuid==e.uuid)===-1?(t.push(e),S(this.$key.STORAGE_KEY,t),!0):!1},updateData(e){let t=this.getData(),n=t.findIndex(t=>t.uuid==e.uuid),r=!1;return n!==-1&&(r=!0,t[n]=e),this.setData(t),r},deleteData(e){let t=this.getData(),n=t.findIndex(t=>t.uuid==e.uuid),r=!1;return n!==-1&&(r=!0,t.splice(n,1)),this.setData(t),r},clearData(){g(this.$key.STORAGE_KEY)}},nt={$key:{STORAGE_KEY:`mt-customizeUserLabels-rule`},init(){if(this.registerMenu(),G.isPage()||G.isGuide()||G.isPlate()||G.isPost()||G.isSearch()||G.isSpace()){let e=this.getData();if(!e.length)return;let t=new E.LockFunction(()=>{this.runRule(e)});E.mutationObserver(document,{config:{subtree:!0,childList:!0},callback:()=>{t.run()}})}},registerMenu(){V.registerLeftMenu({name:`自定义用户标签`,icon:``,iconColor:`#c70ea6`,callback:()=>{this.showView()}})},showView(){let t=O.fn.PanelHandlerComponents();function n(e){return{get(t,n){return e[t]??n},set(t,n){e[t]=n}}}new Qe({title:`自定义用户标签`,data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:e=>e.name,updateData:e=>this.updateData(e),deleteData:e=>this.deleteData(e),getData:e=>this.getData().find(t=>t.uuid===e.uuid)??e,itemControls:{enable:{enable:!0,getEnable(e){return e.enable},callback:(e,t)=>{e.enable=t,this.updateData(e)}},edit:{enable:!0,getView:(e,r)=>{let i=document.createDocumentFragment();r||(e=this.getTemplateData());let a=X(`启用`,`enable`,!0);Reflect.set(a.props,I,n(e));let o=t.createSectionContainerItem_switch(a).$el,s=Q(`规则名称`,`name`,``,``,void 0,`必填`);Reflect.set(s.props,I,n(e));let c=t.createSectionContainerItem_input(s).$el,l=Q(`用户UID`,`userUID`,``,``,void 0,`必填，可正则，注意转义`);Reflect.set(l.props,I,n(e));let u=t.createSectionContainerItem_input(l).$el,d=Q(`标签名`,`labelName`,``,``,void 0,`必填`);Reflect.set(d.props,I,n(e));let f=t.createSectionContainerItem_input(d).$el,p=Q(`标签颜色`,`labelColor`,``,``,void 0);Reflect.set(p.props,I,n(e));let m=t.createSectionContainerItem_input(p).$el,h=m.querySelector(`input`);m.querySelector(`.pops-panel-input__suffix`)?.remove(),h.setAttribute(`type`,`color`),D.css(h,{margin:`unset`,padding:`unset`,width:`80px`});let g=Q(`标签CSS`,`labelStyle`,``,``,void 0);Reflect.set(g.props,I,n(e));let _=t.createSectionContainerItem_input(g).$el,v=Xe(`标签点击事件`,`labelClickEvent`,``,``,void 0);Reflect.set(v.props,I,n(e));let y=t.createSectionContainerItem_textarea(v).$el;return i.append(o,c,u,f,m,_,y),i},onsubmit:(n,r,i)=>{let a=n.querySelectorAll(`.rule-form-ulist > li`),o=this.getTemplateData();return r&&(o.uuid=i.uuid),a.forEach(e=>{let n=Reflect.get(e,t.$data.nodeStoreConfigKey),r=Reflect.get(n,`attributes`),i=Reflect.get(e,I),a=Reflect.get(r,P),s=Reflect.get(r,F),c=i.get(a,s);Reflect.has(o,a)?Reflect.set(o,a,c):k.error(`${a}不在数据中`)}),o.name.trim()===``?(e.default.error(`规则名称不能为空`),{success:!1,data:o}):o.userUID.trim()===``?(e.default.error(`用户UID不能为空`),{success:!1,data:o}):o.labelName.trim()===``?(e.default.error(`标签名不能为空`),{success:!1,data:o}):r?{success:this.updateData(o),data:o}:{success:this.addData(o),data:o}},style:`
                    .pops-panel-textarea textarea{
                        height: 150px;
                    }
                    `},delete:{enable:!0,deleteCallBack:e=>this.deleteData(e)}},bottomControls:{filter:{enable:!0,option:[{name:`无`,value:``,filterCallBack(e){return!0}},{name:`启用`,value:`enable`,filterCallBack(e){return e.enable}},{name:`未启用`,value:`notEnable`,filterCallBack(e){return!e.enable}}],inputOption:[{name:`规则名`,value:`name`,filterCallBack(e,t){return!!e.name.match(t)}},{name:`标签名`,value:`label-name`,filterCallBack(e,t){return!!e.labelName.match(t)}}]}}}).showView()},runRule(e){let t=E.getNodeListValue(V.comiisForumList(),V.comiisPostli(),V.comiisMmlist());t.length&&t.forEach(t=>{if(t.hasAttribute(`data-custom-label`))return;t.setAttribute(`data-custom-label`,`true`);let n=Array.from(t.querySelectorAll(`a`)).map(e=>{let t=e.href.match(H.uid);if(t)return t[t.length-1]}).filter(e=>e!=null);if(n.length){let r=n[0],i=e.filter(e=>e.enable&&r.match(new RegExp(e.userUID)));if(!i.length)return;let a=document.createElement(`a`),o=t.querySelector(`.top_lev`);i.forEach(e=>{a.className=o.className,a.classList.add(`gm-custom-label`),a.style.cssText=`
                    background: ${e.labelColor} !important;${e.labelStyle||``}`,a.innerHTML=e.labelName,D.on(a,`click`,async t=>{D.preventEvent(t),E.isNotNull(e.labelClickEvent)&&C.eval(e.labelClickEvent)}),o.parentElement.append(a)})}})},getTemplateData(){return{uuid:E.generateUUID(),enable:!0,name:``,userUID:``,labelName:``,labelColor:``,labelStyle:``,labelClickEvent:``}},getData(){return v(this.$key.STORAGE_KEY,[])},setData(e){S(this.$key.STORAGE_KEY,e)},addData(e){let t=this.getData();return t.findIndex(t=>t.uuid==e.uuid)===-1?(t.push(e),S(this.$key.STORAGE_KEY,t),!0):!1},updateData(e){let t=this.getData(),n=t.findIndex(t=>t.uuid==e.uuid),r=!1;return n!==-1&&(r=!0,t[n]=e),this.setData(t),r},deleteData(e){let t=this.getData(),n=t.findIndex(t=>t.uuid==e.uuid),r=!1;return n!==-1&&(r=!0,t.splice(n,1)),this.setData(t),r},clearData(){g(this.$key.STORAGE_KEY)}},rt=`.f_c,
.f_c a,
.ntc_body {
  color: #000 !important;
}
input::placeholder,
textarea::placeholder {
  color: #cfcfcf;
}
#needsubject::placeholder {
  font-weight: 700;
}
#postform #comiis_mh_sub {
  height: 60px;
  display: flex;
  align-items: center;
}
#postform #comiis_post_tab {
  display: inherit;
  width: 100%;
}
#postform .comiis_sendbtn {
  padding: 0 12px;
  display: flex !important;
  -webkit-box-align: center;
  -moz-box-align: center;
  align-items: center;
}
#postform .f_f {
  color: #fff !important;
}
#postform #comiis_post_tab .bg_f.b_b.cl:nth-child(2) .comiis_atlist a:hover,
#postform #comiis_post_tab .bg_f.b_b.cl:nth-child(2) .comiis_atlist a:link,
#postform #comiis_post_tab .bg_f.b_b.cl:nth-child(2) .comiis_atlist a:visited {
  color: #333 !important;
}
#postform .comiis_post_from .comiis_post_ico.comiis_minipost_icot {
  position: fixed;
  display: inline-table;
  z-index: 90;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  padding: 0;
}
#postform .comiis_post_from #comiis_post_tab .comiis_bqbox {
  height: 200px;
}
#postform .comiis_post_from #comiis_post_tab .comiis_smiley_box {
  height: 150px;
}
#postform .comiis_post_from #comiis_post_tab .comiis_input_style .comiis_post_urlico {
  overflow-y: auto;
  height: 110px;
}
#postform .comiis_post_from #comiis_post_tab .comiis_smiley_box .comiis_optimization {
  display: block;
  overflow-y: auto;
  height: 100%;
}
#postform #comiis_post_tab .comiis_input_style .comiis_xifont {
  width: -webkit-fill-available;
  width: -moz-available;
}
#postform #comiis_post_tab .comiis_input_style .comiis_xifont i.comiis_font {
  font-size: 16px;
  line-height: inherit;
  padding-top: 0;
}
#postform #comiis_post_tab .comiis_input_style .styli_h10 {
  display: none;
}
.gm_plugin_chartbed .comiis_chartbed_hello,
.gm_plugin_chartbed .comiis_chartbed_history,
.gm_plugin_chartbed .comiis_chartbed_kggzs,
.gm_plugin_chartbed .comiis_chartbed_luntan,
.gm_plugin_chartbed .comiis_chartbed_mt,
.gm_plugin_chartbed .comiis_chartbed_z4a {
  height: 140px;
  overflow-y: auto;
  flex-direction: column;
}
#comiis_pictitle_key {
  display: -webkit-box;
  top: 0;
  left: 0;
  height: 42px;
  line-height: 42px;
  overflow: hidden;
  overflow-x: auto;
  background: #f8f8f8;
}
#comiis_pictitle_key a {
  color: #333 !important;
  padding: 0 10px;
}
#comiis_mh_sub {
  height: auto !important;
}
#comiis_mh_sub .swiper-wrapper.comiis_post_ico {
  flex-flow: wrap;
}
#comiis_mh_sub a {
  margin: 5px 0;
}
#comiis_post_tab .comiis_over_box {
  max-height: 225px;
}
@media screen and (max-width: 350px) {
  .comiis_bqbox .bqbox_c li {
    width: 14.5%;
  }
}
@media screen and (min-width: 350px) and (max-width: 400px) {
  .comiis_bqbox .bqbox_c li {
    width: 12.5%;
  }
}
@media screen and (min-width: 400px) and (max-width: 450px) {
  .comiis_bqbox .bqbox_c li {
    width: 11%;
  }
}
@media screen and (min-width: 450px) and (max-width: 500px) {
  .comiis_bqbox .bqbox_c li {
    width: 10%;
  }
}
@media screen and (min-width: 500px) and (max-width: 550px) {
  .comiis_bqbox .bqbox_c li {
    width: 9.5%;
  }
}
@media screen and (min-width: 550px) and (max-width: 600px) {
  .comiis_bqbox .bqbox_c li {
    width: 9%;
  }
}
@media screen and (min-width: 600px) and (max-width: 650px) {
  .comiis_bqbox .bqbox_c li {
    width: 8.5%;
  }
}
@media screen and (min-width: 650px) and (max-width: 700px) {
  .comiis_bqbox .bqbox_c li {
    width: 8%;
  }
}
@media screen and (min-width: 700px) and (max-width: 750px) {
  .comiis_bqbox .bqbox_c li {
    width: 7.5%;
  }
}
@media screen and (min-width: 750px) and (max-width: 800px) {
  .comiis_bqbox .bqbox_c li {
    width: 7%;
  }
}
@media screen and (min-width: 800px) and (max-width: 850px) {
  .comiis_bqbox .bqbox_c li {
    width: 6.5%;
  }
}
@media screen and (min-width: 850px) and (max-width: 1200px) {
  .comiis_bqbox .bqbox_c li {
    width: 6%;
  }
}
@media screen and (min-width: 1200px) {
  .comiis_bqbox .bqbox_c li {
    width: 4.5%;
  }
}

#comiis_head .header_y {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
}
#comiis_head .header_y input {
  border: transparent;
  background: 0 0;
  text-align: center;
  margin: 0 5px;
}
#comiis_head .header_y input[value="删除"] {
  color: #d00;
}
#comiis_head .header_y input[value="保存"] {
  color: #b0ff6a;
}
#comiis_head .header_y input[value="保存草稿"] {
  color: #f90;
}
#comiis_head .header_y input[value="发表"] {
  color: #b0ff6a;
}
#comiis_head .header_y input[value="回复"] {
  color: #b0ff6a;
}
#comiis_post_tab {
  color: #000;
}
.gm_plugin_chartbed .delImg a,
.gm_plugin_chartbed .p_img a {
  padding: 0;
}
.gm_plugin_chartbed .delImg a i {
  line-height: inherit;
}
#filedata,
#filedata_hello,
#filedata_kggzs,
#filedata_mt {
  display: none;
}

#comiis_mh_sub {
  height: 40px;
}
#imglist .del a {
  padding: 0;
}
.comiis_post_from.mt15 {
  margin-top: unset !important;
}
`,it=()=>({"[呵呵]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq001.gif`,"[撇嘴]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq002.gif`,"[色]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq003.gif`,"[发呆]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq004.gif`,"[得意]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq005.gif`,"[流泪]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq006.gif`,"[害羞]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq007.gif`,"[闭嘴]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq008.gif`,"[睡]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq009.gif`,"[大哭]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq010.gif`,"[尴尬]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq011.gif`,"[发怒]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq012.gif`,"[调皮]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq013.gif`,"[呲牙]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq014.gif`,"[惊讶]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq015.gif`,"[难过]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq016.gif`,"[酷]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq017.gif`,"[冷汗]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq018.gif`,"[抓狂]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq019.gif`,"[吐]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq020.gif`,"[偷笑]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq021.gif`,"[可爱]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq022.gif`,"[白眼]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq023.gif`,"[傲慢]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq024.gif`,"[饥饿]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq025.gif`,"[困]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq026.gif`,"[惊恐]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq027.gif`,"[流汗]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq028.gif`,"[憨笑]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq029.gif`,"[装逼]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq030.gif`,"[奋斗]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq031.gif`,"[咒骂]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq032.gif`,"[疑问]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq033.gif`,"[嘘]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq034.gif`,"[晕]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq035.gif`,"[折磨]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq036.gif`,"[衰]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq037.gif`,"[骷髅]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq038.gif`,"[敲打]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq039.gif`,"[再见]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq040.gif`,"[擦汗]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq041.gif`,"[抠鼻]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq042.gif`,"[鼓掌]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq043.gif`,"[糗大了]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq044.gif`,"[坏笑]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq045.gif`,"[左哼哼]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq046.gif`,"[右哼哼]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq047.gif`,"[哈欠]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq048.gif`,"[鄙视]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq049.gif`,"[委屈]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq050.gif`,"[快哭了]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq051.gif`,"[阴脸]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq052.gif`,"[亲亲]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq053.gif`,"[吓]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq054.gif`,"[可怜]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq055.gif`,"[眨眼睛]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq056.gif`,"[笑哭]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq057.gif`,"[dogeQQ]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq058.gif`,"[泪奔]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq059.gif`,"[无奈]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq060.gif`,"[托腮]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq061.gif`,"[卖萌]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq062.png`,"[斜眼笑]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq063.gif`,"[喷血]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq064.gif`,"[惊喜]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq065.gif`,"[骚扰]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq066.gif`,"[小纠结]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq067.gif`,"[我最美]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq068.gif`,"[菜刀]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq069.gif`,"[西瓜]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq070.gif`,"[啤酒]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq071.gif`,"[篮球]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq072.gif`,"[乒乓]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq073.gif`,"[咖啡]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq074.gif`,"[饭]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq075.gif`,"[猪]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq076.gif`,"[玫瑰]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq077.gif`,"[凋谢]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq078.gif`,"[示爱]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq079.gif`,"[爱心]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq080.gif`,"[心碎]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq081.gif`,"[蛋糕]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq082.gif`,"[闪电]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq083.gif`,"[炸弹]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq084.gif`,"[刀]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq085.gif`,"[足球]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq086.gif`,"[瓢虫]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq087.gif`,"[便便]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq088.gif`,"[月亮]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq089.gif`,"[太阳]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq090.gif`,"[礼物]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq091.gif`,"[抱抱]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq092.gif`,"[喝彩]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq93.gif`,"[祈祷]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq94.gif`,"[棒棒糖]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq95.gif`,"[药]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq96.gif`,"[赞]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq097.gif`,"[差劲]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq098.gif`,"[握手]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq099.gif`,"[胜利]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq100.gif`,"[抱拳]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq101.gif`,"[勾引]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq102.gif`,"[拳头]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq103.gif`,"[爱你]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq105.gif`,"[NO]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq106.gif`,"[OK]":`https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq107.gif`,"[#呵呵]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_1.png`,"[#滑稽]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_10.png`,"[#吐舌]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_3.png`,"[#哈哈]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_2.png`,"[#啊]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_23.png`,"[#酷]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_22.png`,"[#怒]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_13.png`,"[#开心]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_39.png`,"[#汗]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_14.png`,"[#泪]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_16.png`,"[#黑线]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_15.png`,"[#鄙视]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_21.png`,"[#不高兴]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_12.png`,"[#真棒]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_17.png`,"[#钱]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_40.png`,"[#疑问]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_26.png`,"[#阴险]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_20.png`,"[#吐]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_34.png`,"[#咦]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_41.png`,"[#委屈]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_29.png`,"[#花心]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_6.png`,"[#呼～]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_42.png`,"[#激动]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_5.png`,"[#冷]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_43.png`,"[#可爱]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_4.png`,"[#What？]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_25.png`,"[#勉强]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_38.png`,"[#狂汗]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_24.png`,"[#酸爽]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_27.png`,"[#乖]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_8.png`,"[#雅美蝶]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_28.png`,"[#睡觉]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_31.png`,"[#惊哭]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_19.png`,"[#哼]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_44.png`,"[#笑尿]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_32.png`,"[#惊讶]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_30.png`,"[#小乖]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_7.png`,"[#喷]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_18.png`,"[#抠鼻]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_33.png`,"[#捂嘴笑]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_9.png`,"[#你懂的]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_11.png`,"[#犀利]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_35.png`,"[#小红脸]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_36.png`,"[#懒得理]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_37.png`,"[#爱心]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_45.png`,"[#心碎]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_46.png`,"[#玫瑰]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_47.png`,"[#礼物]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_48.png`,"[#彩虹]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_49.png`,"[#太阳]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_50.png`,"[#月亮]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_51.png`,"[#钱币]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_52.png`,"[#咖啡]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_53.png`,"[#蛋糕]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_54.png`,"[#大拇指]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_55.png`,"[#胜利]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_56.png`,"[#爱你]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_57.png`,"[#OK]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_58.png`,"[#弱]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_59.png`,"[#沙发]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_60.png`,"[#纸巾]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_61.png`,"[#香蕉]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_62.png`,"[#便便]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_63.png`,"[#药丸]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_64.png`,"[#红领巾]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_65.png`,"[#蜡烛]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_66.png`,"[#三道杠]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_67.png`,"[#音乐]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_68.png`,"[#灯泡]":`https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_69.png`,"[doge]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/1.png`,"[doge思考]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/2.png`,"[doge再见]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/3.png`,"[doge生气]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/4.png`,"[doge气哭]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/5.png`,"[doge笑哭]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/7.png`,"[doge调皮]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/6.png`,"[doge啊哈]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/8.png`,"[doge原谅TA]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/9.png`,"[miao]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/10.png`,"[miao思考]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/11.png`,"[miao拜拜]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/12.png`,"[miao生气]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/13.png`,"[miao气哭]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/14.png`,"[二哈]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/15.png`,"[摊手]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/19.png`,"[w并不简单]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/20.png`,"[w滑稽]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/21.png`,"[w色]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/22.png`,"[w爱你]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/23.png`,"[w拜拜]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/24.png`,"[w悲伤]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/25.png`,"[w鄙视]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/26.png`,"[w馋嘴]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/27.png`,"[w冷汗]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/28.png`,"[w打哈欠]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/29.png`,"[w打脸]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/30.png`,"[w敲打]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/31.png`,"[w生病]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/32.png`,"[w闭嘴]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/33.png`,"[w鼓掌]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/34.png`,"[w哈哈]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/35.png`,"[w害羞]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/36.png`,"[w呵呵]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/37.png`,"[w黑线]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/38.png`,"[w哼哼]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/39.png`,"[w调皮]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/40.png`,"[w可爱]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/41.png`,"[w可怜]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/42.png`,"[w酷]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/43.png`,"[w困]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/44.png`,"[w懒得理你]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/45.png`,"[w流泪]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/46.png`,"[w怒]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/47.png`,"[w怒骂]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/48.png`,"[w钱]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/49.png`,"[w亲亲]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/50.png`,"[w傻眼]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/51.png`,"[w便秘]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/52.png`,"[w失望]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/53.png`,"[w衰]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/54.png`,"[w睡觉]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/55.png`,"[w思考]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/56.png`,"[w开心]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/57.png`,"[w色舔]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/58.png`,"[w偷笑]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/59.png`,"[w吐]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/60.png`,"[w抠鼻]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/61.png`,"[w委屈]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/62.png`,"[w笑哭]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/63.png`,"[w嘻嘻]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/64.png`,"[w嘘]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/65.png`,"[w阴险]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/66.png`,"[w疑问]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/67.png`,"[w抓狂]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/70.png`,"[w晕]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/69.png`,"[w右哼哼]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/68.png`,"[w左哼哼]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/71.png`,"[w肥皂]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/77.png`,"[w奥特曼]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/78.png`,"[w草泥马]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/79.png`,"[w兔子]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/80.png`,"[w熊猫]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/81.png`,"[w猪头]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/82.png`,"[w→_→]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/83.png`,"[w给力]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/84.png`,"[w囧]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/85.png`,"[w萌]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/86.png`,"[w神马]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/87.png`,"[w威武]":`https://cdn-bbs.mt2.cn/static/image/smiley/doge/88.png`}),at={parseText(e){let t=it(),n=e.match(/\[attachimg\]([\s\S]+?)\[\/attachimg\]/g);n&&n.forEach(t=>{let n=t.match(/\[attachimg\]([\s\S]+?)\[\/attachimg\]/),r=n?n[n.length-1]:``,i=D.attr(`#aimg_${r}`,`title`),a=D.attr(`#aimg_${r}`,`src`);a||(i=`该图片不存在`),e=e.replace(t,`<span class="comiis_postimg vm"><img loading="lazy" id="aimg_${r}" src="${a}" alt="${i}" title="${i}"></span>`)});let r=e.match(/\[code\]([\s\S]*?)\[\/code\]/g);r&&r.forEach(t=>{let n=t.match(/\[code\]([\s\S]*?)\[\/code\]/),r=n?n[n.length-1]:``,i=``,a=r.split(`
`);a.length==1?i=`<li>${r}</li>`:Array.from(a).forEach((e,t)=>{i=t==a.length-1?`${i}<li>${e}</li>`:`${i}<li>${e}<br></li>`}),e=e.replace(t,`
                <div class="comiis_blockcode comiis_bodybg b_ok f_b"><div class="bg_f b_l"><ol>${i}</ol></div></div>`)});let i=e.match(/\[url\=[\s\S]*?\]([\s\S]*?)\[\/url\]/g);i&&i.forEach(t=>{let n=t.match(/\[url=([\s\S]*?)\][\s\S]*\[\/url\]/),r=t.match(/\[url=[\s\S]*?\]([\s\S]*?)\[\/url\]/),i=n?n[n.length-1]:``,a=r?r[r.length-1]:``;e=e.replace(t,`<a href="${i}" target="_blank">${a}</a>`)});let a=e.match(/\[color\=[\s\S]*?\]([\s\S]*?)\[\/color\]/g);a&&a.forEach(t=>{let n=t.match(/\[color=([\s\S]*?)\][\s\S]*\[\/color\]/),r=t.match(/\[color=[\s\S]*?\]([\s\S]*?)\[\/color\]/),i=n?n[n.length-1]:``,a=r?r[r.length-1]:``;e=e.replace(t,`<font color="${i}">${a}</font>`)});let o=e.match(/\[size\=[\s\S]*?\]([\s\S]*?)\[\/size\]/g);o&&o.forEach(t=>{let n=t.match(/\[size=([\s\S]*?)\][\s\S]*\[\/size\]/),r=t.match(/\[size=[\s\S]*?\]([\s\S]*?)\[\/size\]/),i=n?n[n.length-1]:``,a=r?r[r.length-1]:``;e=e.replace(t,`<font size="${i}">${a}</font>`)});let s=e.match(/\[img(|\=[\s\S]+?)\]([\s\S]*?)\[\/img\]/g);s&&s.forEach(t=>{let n=null,r=null,i=t.match(/\[img\=([\s\S]+?)\][\s\S]*?\[\/img\]/);i&&(i=i[i.length-1].split(`,`),n=i[0],r=i[1]),n||=``,r||=``;let a=t.match(/\[img\]([\s\S]*?)\[\/img\]|\[img=[\s\S]*?\]([\s\S]*?)\[\/img\]/),o=``;a&&(o=a[a.length-1]==null?a[a.length-2]:a[a.length-1]),e=e.replace(t,`<img loading="lazy" src="${o}" border="0" alt="" width="${n}" height="${r}" crossoriginNew="anonymous">`)});let c=e.match(/\[hide\]([\s\S]*?)\[\/hide\]/g);c&&c.forEach(t=>{let n=t.match(/\[hide\]([\s\S]*?)\[\/hide\]/),r=n?n[n.length-1]:``;e=e.replace(t,`<div class="comiis_quote bg_h f_c"><h2 class="f_a">本帖隐藏的内容: </h2>${r}</div>`)});let l=e.match(/\[hide=[\s\S]*?\]([\s\S]*?)\[\/hide\]/g);l&&l.forEach(t=>{let n=t.match(/\[hide=([\s\S]*?)\]([\s\S]*?)\[\/hide\]/),r=n?n[n.length-2]:``;r=r.split(`,`);let i=r.length==2?r[1]:``;e=e.replace(t,`<div class="comiis_quote bg_h f_c">以下内容需要积分高于 ${i} 才可浏览</div>`)});let u=e.match(/\[quote\]([\s\S]*?)\[\/quote\]/g);u&&u.forEach(t=>{let n=t.match(/\[quote\]([\s\S]*?)\[\/quote\]/),r=n?n[n.length-1]:``;e=e.replace(t,`<div class="comiis_quote bg_h b_dashed f_c"><blockquote><font>回复</font> ${r}</blockquote></div>`)});let d=e.match(/\[free\]([\s\S]*?)\[\/free\]/g);d&&d.forEach(t=>{let n=t.match(/\[free\]([\s\S]*?)\[\/free\]/),r=n?n[n.length-1]:``;e=e.replace(t,`<div class="comiis_quote bg_h f_c"><blockquote>${r}</blockquote></div>`)});let f=e.match(/\[b\]([\s\S]*?)\[\/b\]/g);f&&f.forEach(t=>{let n=t.match(/\[b\]([\s\S]*?)\[\/b\]/i),r=n?n[n.length-1]:``;e=e.replace(t,`<strong>${r}</strong>`)});let p=e.match(/\[u\]([\s\S]*?)\[\/u\]/g);p&&p.forEach(t=>{let n=t.match(/\[u\]([\s\S]*?)\[\/u\]/),r=n?n[n.length-1]:``;e=e.replace(t,`<u>${r}</u>`)});let m=e.match(/\[i\]([\s\S]*?)\[\/i\]/g);m&&m.forEach(t=>{let n=t.match(/\[i\]([\s\S]*?)\[\/i\]/),r=n?n[n.length-1]:``;e=e.replace(t,`<i>${r}</i>`)});let h=e.match(/\[s\]([\s\S]*?)\[\/s\]/g);h&&h.forEach(t=>{let n=t.match(/\[s\]([\s\S]*?)\[\/s\]/),r=n?n[n.length-1]:``;e=e.replace(t,`<strike>${r}</strike>`)});let g=e.match(/\[([\s\S]+?)\]/g);g&&g.forEach(n=>{let r=t[n];r&&(e=e.replace(n,`<img loading="lazy" src="${r}" border="0" alt="" smilieid="">`))});let _=e.match(/\[media=[\s\S]+?\][\s\S]+?\[\/media\]/g);_&&_.forEach(t=>{let n=t.match(/\[media=[\s\S]*?\]([\s\S]*?)\[\/media\]/),r=n?n[n.length-1]:``;r&&(e=e.replace(t,`<ignore_js_op><span><iframe src="${r}" border="0" scrolling="no" framespacing="0" allowfullscreen="true" style="max-width: 100%" width="100%" height="auto" frameborder="no"></iframe></span></ignore_js_op>`))});let v=e.match(/\[email=[\s\S]+?\][\s\S]+?\[\/email\]/g);v&&v.forEach(t=>{let n=t.match(/\[email=([\s\S]*?)\][\s\S]*?\[\/email\]/),r=t.match(/\[email=[\s\S]*?\]([\s\S]*?)\[\/email\]/),i=n.length?n[n.length-1]:``,a=r.length?r[r.length-1]:``;(i||a)&&(e=e.replace(t,`<a href="mailto:${i}">${a}</a>`))});let y=e.match(/\[align=[\s\S]+?\][\s\S]+?\[\/align\]/g);y&&y.forEach(t=>{let n=t.match(/\[align=([\s\S]*?)\][\s\S]+?\[\/align\]/),r=t.match(/\[align=[\s\S]*?\]([\s\S]+?)\[\/align\]/),i=n.length?n[n.length-1]:``,a=r.length?r[r.length-1]:``;(i||a)&&(e=e.replace(t,`<div align="${i}">${a}</div>`))});let b=e.match(/\[qq\][\s\S]*?\[\/qq\]/g);b&&b.forEach(t=>{let n=t.match(/\[qq\]([\s\S]*?)\[\/qq\]/),r=n?n[n.length-1]:``;e=e.replace(t,`<a href="http://wpa.qq.com/msgrd?v=3&uin=${r}&site=[Discuz!]&from=discuz&menu=yes" target="_blank"><img loading="lazy" src="static/image/common/qq_big.gif" border="0"></a>`)});let x=e.match(/\[td\][\s\S]+?\[\/td\]/g);x&&x.forEach(t=>{let n=t.match(/\[td\]([\s\S]*?)\[\/td\]/),r=n?n[n.length-1]:``;e=e.replace(t,`<td>${r}</td>`)});let ee=e.match(/\[tr\][\s\S]+?\[\/tr\]/g);ee&&ee.forEach(t=>{let n=t.match(/\[tr\]([\s\S]*?)\[\/tr\]/),r=n?n[n.length-1]:``;e=e.replace(t,`<tr>${r}</tr>`)});let S=e.match(/\[table\][\s\S]+?\[\/table\]/g);S&&S.forEach(t=>{let n=t.match(/\[table\]([\s\S]*?)\[\/table\]/),r=n?n[n.length-1]:``;r=r.replace(/\n/g,``),e=e.replace(t,`<table>${r}</table>`)});let te=e.match(/\[list=[\s\S]+?\][\s\S]+?\[\/list\]/g);return te&&te.forEach(t=>{let n=t.match(/\[list=([\s\S]*?)\][\s\S]*?\[\/list\]/),r=t.match(/\[list=[\s\S]*?\]([\s\S]*?)\[\/list\]/),i=n?n[n.length-1]:``,a=``;i===`a`?a=`litype_2`:i===`A`?a=`litype_3`:i.length===1&&i.match(/[0-9]{1}/)&&(a=`litype_1`);let o=r?r[r.length-1]:``,s=o.split(`[*]`);if(s.length>1){let e=``;s[0].replace(/[\s]*/,``)==``&&(s=s.slice(1)),Array.from(s).forEach(t=>{e=`${e}<li>${t}</li>`}),o=e}o=o.replace(/\n/g,``),e=e.replace(t,`<ul type="${i}" class="${a}">${o}</ul>`)}),e},parseVoteText(){let e=[`rgb(233, 39, 37)`,`rgb(242, 123, 33)`,`rgb(242, 166, 31)`,`rgb(90, 175, 74)`,`rgb(66, 196, 245)`,`rgb(0, 153, 204)`,`rgb(51, 101, 174)`,`rgb(42, 53, 145)`,`rgb(89, 45, 142)`,`rgb(219, 49, 145)`,`rgb(233, 39, 37)`,`rgb(242, 123, 33)`,`rgb(242, 166, 31)`,`rgb(90, 175, 74)`,`rgb(66, 196, 245)`,`rgb(0, 153, 204)`,`rgb(51, 101, 174)`,`rgb(42, 53, 145)`,`rgb(89, 45, 142)`,`rgb(219, 49, 145)`],t=N(`.comiis_polloption_add ul li:first-child div.flex .comiis_input.kmshow[type='text']`),n=parseInt(D.val(`input#maxchoices`));n=isNaN(n)?0:n,n=n>0?n:0,n=n>t.length?t.length:n;let r=parseInt(D.val(`input#polldatas`));r=isNaN(r)?0:r,C.$(`input#visibilitypoll`).parent().find(`.comiis_checkbox`).hasClass(`comiis_checkbox_close`);let i=!C.$(`input#overt`).parent().find(`.comiis_checkbox`).hasClass(`comiis_checkbox_close`),a=``,o=``;t.forEach((t,r)=>{r>=20||(o+=`
                    <li class="kmnop">
                        <input type="${n>1?`checkbox`:`radio`}">
                        <label><i class="comiis_font f_d"></i>${t.value}</label>
                    </li>
                    <li class="poll_ok cl">
                        <span class="bg_b">
                            <em style="width:2%;background-color:${e[r]}"></em>
                        </span>
                        <em style="color:${e[r]}">0% (0)</em>
                    </li>`)}),a=`
                    <div class="comiis_poll cl comiis_input_style b_t postforum_vote">
                            <div class="comiis_poll_top">
                                <i class="comiis_font bg_a f_f"></i>
                                <h2>${n>1?`多选投票<em class="f_c"> 最多可选 `+n+` 项</em>`:`单选投票`}</h2>
                                <p class="f_c">共有 0 人参与投票</p>
                                ${r>0?` <p class="kmbtn">
                                <span class="bg_e">距结束还有:
                                ${r>1?`<em class="f_a">`+(r-1)+`</em> 天 `:``}<em class="f_a">23</em> 小时 <em class="f_a">59</em> 分钟</span>
                            </p>`:``}
                               
                            </div>
                            <div class="comiis_poll_list comiis_input_style cl">
                                <ul>
                                    ${o}
                                </ul>
                            </div>
                            <div class="comiis_poll_bottom cl">
                                <input type="submit" value="提交" class="formdialog comiis_btn kmshow bg_c f_f" disabled>
                                ${i?`<div class="comiis_quote bg_h b_dashed f_a"><i class="comiis_font"></i>此为公开投票，其他人可看到您的投票项目</div>`:``}
                            </div>
                    </div>
                `,C.$(`.gm_plugin_previewpostforum_html .postforum_vote`).remove(),C.$(`.gm_plugin_previewpostforum_html .comiis_messages.comiis_aimg_show`).children().eq(0).before(C.$(a))}},ot={$data:{db:new r.default.indexedDB(`mt_full_reply_record`,`input_text`),get type(){return G.isPostPublish_voting()?`post-vote`:`post`},get tid(){return U.getThreadId(window.location.href)},get pid(){return U.getPostId(window.location.href)}},$key:{noPublishSerializeText:`mt-editor-no-publish-serialize-text`,noPublishVotingSerializeText:`mt-editor-no-publish-voting-serialize-text`},$el:{$title:null,$input:null,$form:null},init(){k.info(`编辑器优化`),j(rt),this.overridePageEditor()},overridePageEditor(){let e=this;this.$el.$title=M(`#needsubject`),this.$el.$form=M(`#postform`),this.$el.$input=M(`#needmessage`),D.hide(D.parent(`.comiis_scrollTop_box`),!1),D.css(`#postform .comiis_post_from.mt15`,{"margin-top":`0px !important`});let t=C.$(`#postform .comiis_post_from #comiis_post_tab`);C.$(`#postform .comiis_post_from .comiis_post_ico`).append(t),t.remove(),C.textarea_scrollHeight=()=>{};let n=C.$.fn.comiis_delete;C.$.fn.extend({comiis_delete:function(...t){let r=n.call(this,...t);return D.emit(e.$el.$input,`input`),r}}),D.hide(`.comiis_btnbox`,!1),this.initVotePage(),C.$(`.gm_plugin_chartbed .comiis_over_box.comiis_input_style #imglist`),j(`
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
        `),D.attr(`#filedata`,`multiple`,!0),D.remove(`.gm_plugin_chartbed .comiis_over_box.comiis_input_style`),D.on(document,`#comiis_pictitle_key li`,`click`,function(){D.removeClass(`#comiis_pictitle_key li`,`bg_f`),D.addClass(this,`bg_f`),C.$(`.gm_plugin_chartbed .comiis_upbox`).hide().eq(C.$(this).index()).fadeIn()},{overrideTarget:!1});let r=parseInt(D.css(`#comiis_head`,`height`))||0,i=parseInt(D.css(`#comiis_sub`,`height`))||0,a=M(`#pollm_c_1`)?60:0,o=parseInt(D.css(`.comiis_styli.comiis_flex`,`height`))||0,s=parseInt(D.css(`.comiis_post_ico.comiis_minipost_icot`,`height`))||0;D.css(`#needmessage`,`height`,`${window.screen.height-r-i-48-o-s-10}px`),D.css(`#needmessage`,`margin-bottom`,a+`px`),G.isPostPublish_edit()&&D.val(`#needsubject`)===``?D.hide(`.comiis_styli.comiis_flex`,!1):D.attr(`#needsubject`,`placeholder`,`请输入完整的帖子标题 (1-80个字)`),D.attr(`#needmessage`,`placeholder`,`来吧，尽情发挥吧...`),typeof C.comiis_addsmilies==`function`&&(C.comiis_addsmilies=e=>{C.$(`#needmessage`).comiis_insert(e),C.$(`#needmessage`)[0].dispatchEvent(new Event(`input`))}),(B.getValue(`mt-forum-post-editorOptimizationNormal-recordInputText`)||B.getValue(`mt-forum-post-editorOptimization-recordInputText`))&&(this.setInputChangeEvent(),this.initReplyText()),this.initDeleteBtn(),this.initSaveDraftBtn(),this.initSaveBtn(),this.initPostBtn(),this.initReplyBtn(),this.observerChangeEditorHeight(),this.listenResize(),this.initSelectPostingSection(),this.initUBB(),this.initImage(),this.initPreview(),this.initCharacterCount(),this.initSettingImmersionMode()},async initReplyText(){let t=this,n=null,r=null,i=null;if(G.isPostPublish_newthread())k.info(`新发布帖子的页面`),G.isPostPublish_voting()?(k.info(`投票页面`),n=v(this.$key.noPublishVotingSerializeText),i=()=>{g(t.$key.noPublishVotingSerializeText)}):(k.info(`普通帖子页面`),n=v(this.$key.noPublishSerializeText),i=()=>{g(this.$key.noPublishSerializeText)});else if(G.isPostPublish_edit()){k.info(`草稿的页面`),k.info(`type：${this.$data.type} tid：${this.$data.tid} pid：${this.$data.pid}`),(await this.$data.db.get(`data`)).code===201&&await this.$data.db.save(`data`,[]);let e=await this.$data.db.get(`data`);if(e.data){let r=e.data.find(e=>{if(e.type===t.$data.type&&!(e.tid!==t.$data.tid||e.pid!==t.$data.pid))return!0});r&&(n=r.data,i=async()=>{let e=await this.$data.db.get(`data`);if(e.data){let n=e.data.findIndex(e=>{if(e.type===t.$data.type&&!(e.tid!==t.$data.tid||e.pid!==t.$data.pid))return!0});n!=-1&&(e.data.splice(n,1),await this.$data.db.save(`data`,e.data))}})}}else if(G.isPostPublish_reply()&&(k.info(`回复页面`),B.getValue(`mt-forum-post-editorOptimizationNormal-recordInputText`))){(await K.$data.db.get(`data`)).code===201&&await this.$data.db.save(`data`,[]);let e=await K.$data.db.get(`data`);if(e.data){let r=e.data.find(e=>e.forumId===t.$data.tid&&e.repquote===U.getRepquote(window.location.href));r&&(n=r)}}n&&(r=G.isPostPublish_voting()?()=>{let e=t.$el.$form.querySelector(`input[name='subject']`),r=t.$el.$form.querySelector(`textarea[name='message']`),i=t.$el.$form.querySelector(`input[name='maxchoices']`),a=t.$el.$form.querySelector(`input[name='expiration']`),o=t.$el.$form.querySelector(`input[name='visibilitypoll']`),s=t.$el.$form.querySelector(`input[name='overt']`);return D.val(e,n.title),D.val(r,n.content),D.val(i,n.maxchoices),D.val(a,n.expiration),D.val(o,n.visibilitypoll),D.val(s,n.overt),D.emit(e,`input`),D.emit(r,`input`),D.emit(i,`input`),D.emit(a,`input`),D.emit(o,`input`),D.emit(s,`input`),!0}:G.isPostPublish_reply()?()=>{let e=t.$el.$form.querySelector(`textarea[name='message']`);return D.val(e,n.text),D.emit(e,`input`),!0}:()=>{let e=t.$el.$form.querySelector(`input[name='subject']`),r=t.$el.$form.querySelector(`textarea[name='message']`);return D.val(e,n.title),D.val(r,n.content),D.emit(e,`input`),D.emit(r,`input`),!0},G.isPostPublish_newthread()?(k.info(`新发布帖子的页面`),typeof r==`function`&&r()):G.isPostPublish_edit()?(k.info(`草稿的页面`),typeof r==`function`&&typeof i==`function`&&O.confirm({title:{text:`提示`,position:`center`},content:{text:`<p>存在历史写入的数据，是否恢复到编辑器里？</p>`,html:!0},btn:{merge:!0,position:`space-between`,ok:{text:`恢复`,callback:async t=>{await r()&&(e.default.success(`恢复成功`),t.close())}},other:{enable:!0,type:`danger`,text:`删除该数据`,callback:async t=>{await i(),t.close(),e.default.success(`删除成功`)}}},width:`300px`,height:`200px`})):G.isPostPublish_reply()&&(k.info(`回复页面`),typeof r==`function`&&r()))},async getReplyRecordSize(){let e=await this.$data.db.get(`data`);return e.success?E.getTextStorageSize(e?.data?.length?JSON.stringify(e.data):``):E.formatByteToSize(0)},async clearAllReplyRecord(){return await this.$data.db.deleteAll()},deleteReplyTextStorage(){let e=this;this.$data.db.get(`data`).then(t=>{if(!t.success){console.warn(t);return}let n=G.isPostPublish_voting()?`post-vote`:`post`,r=U.getThreadId(window.location.href),i=U.getPostId(window.location.href),a=t.data.findIndex(e=>{if(e.type===n&&!(e.tid!==r||e.pid!==i))return!0});a!==-1&&(t.data.splice(a,1),e.$data.db.save(`data`,t.data).then(e=>{}))})},setInputChangeEvent(){let e=this;D.on([this.$el.$input,this.$el.$title].filter(Boolean),[`input`,`propertychange`],function(){let t=null;if(G.isPostPublish_voting()){let n=e.$el.$form.querySelector(`input[name='subject']`),r=e.$el.$form.querySelector(`textarea[name='message']`),i=e.$el.$form.querySelector(`input[name='maxchoices']`),a=e.$el.$form.querySelector(`input[name='expiration']`),o=e.$el.$form.querySelector(`input[name='visibilitypoll']`),s=e.$el.$form.querySelector(`input[name='overt']`);t={title:n.value,maxchoices:i.value,expiration:a.value,visibilitypoll:o.checked,overt:s.checked,content:r.value}}else{let n=e.$el.$form.querySelector(`input[name='subject']`),r=e.$el.$form.querySelector(`textarea[name='message']`);t={title:n?.value,content:r.value}}G.isPostPublish_newthread()?(k.info(`内容改变 ==> 新发布帖子的页面`),G.isPostPublish_voting()?S(e.$key.noPublishVotingSerializeText,t):S(e.$key.noPublishSerializeText,t)):G.isPostPublish_edit()?(k.info(`内容改变 ==> 草稿的页面`),e.$data.db.get(`data`).then(n=>{if(!n.success){console.warn(n);return}let r=n.data.findIndex(t=>{if(t.type===e.$data.type&&!(t.tid!==e.$data.tid||t.pid!==e.$data.pid))return!0});r!==-1&&n.data.splice(r,1),n.data.push({url:window.location.href,data:t,pid:e.$data.pid,tid:e.$data.tid,type:e.$data.type}),e.$data.db.save(`data`,n.data).then(e=>{})})):G.isPostPublish_reply()&&(k.info(`内容改变 ==> 回复页面`),B.execMenu(`mt-forum-post-editorOptimizationNormal-recordInputText`,()=>{K.$data.db.get(`data`).then(n=>{if(!n.success||n.code===201){console.warn(n);return}let r=n.data.findIndex(t=>t.forumId===e.$data.tid&&t.repquote===U.getRepquote(window.location.href));r===-1?n.data.push({forumId:e.$data.tid,url:window.location.href,repquote:U.getRepquote(window.location.href),text:t.content}):t.content==null||t.content===``?n.data.splice(r,1):n.data[r]=E.assign(n.data[r],{text:t.content}),K.$data.db.save(`data`,n.data).then(e=>{})})}))})},initDeleteBtn(){if(!M(`.comiis_btnbox .comiis_btn.bg_del`))return;let e=M(`#comiis_head .header_y`),t=D.createElement(`input`,{className:`new_btn_del`},{type:`button`,value:`删除`});D.append(e,t),D.on(t,`click`,function(){O.confirm({title:{text:`提示`,position:`center`},content:{text:`<p>是否删除帖子?</p>`,html:!0},btn:{ok:{callback:e=>{e.close(),C.comiis_delthread()}}},width:`300px`,height:`200px`})})},initSaveBtn(){let e=D.selector(`.comiis_btnbox button#postsubmit:contains('保存')`);if(!e||D.text(e).includes(`草稿`))return;let t=M(`#comiis_head .header_y`),n=D.createElement(`input`,{className:`new_btn_save`},{type:`button`,value:`保存`});D.append(t,n),D.on(n,`click`,function(){e.click()})},initPostBtn(){let e=D.selector(`.comiis_btnbox button#postsubmit:contains('发表')`);if(!e)return;let t=M(`#comiis_head .header_y`),n=D.createElement(`input`,{className:`new_btn_post`},{type:`button`,value:`发表`});D.append(t,n),D.on(n,`click`,function(){D.val(`#postsave`,0),e.click()})},initReplyBtn(){let e=this,t=D.selector(`.comiis_btnbox button#postsubmit:contains('回复')`);if(!t)return;let n=M(`#comiis_head .header_y`),r=D.createElement(`input`,{className:`new_btn_reply`},{type:`button`,value:`回复`});D.append(n,r),D.on(r,`click`,function(){t.click(),e.deleteReplyTextStorage()})},initVotePage(){N(`.comiis_scrollTop_box`).length&&(C.$(`#htmlon`).parent().append(`
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
                `),C.$(`.comiis_scrollTop_box .swiper-slide a:contains('发表帖子')`).attr(`class`)==`f_c`?C.$(`.comiis_checkbox.comiis_choose_vote`).removeClass(`comiis_checkbox_close`):C.$(`.comiis_checkbox.comiis_choose_post`).removeClass(`comiis_checkbox_close`),C.$(`.comiis_checkbox.comiis_choose_post`).on(`click`,function(){let e=C.$(this);e.addClass(`comiis_checkbox_close`),C.$(`.comiis_checkbox.comiis_choose_vote`).addClass(`comiis_checkbox_close`),e.removeClass(`comiis_checkbox_close`),window.location.href=window.location.href.replace(`&special=1`,``)}),C.$(`.comiis_checkbox.comiis_choose_vote`).on(`click`,function(){let e=C.$(this);e.addClass(`comiis_checkbox_close`),C.$(`.comiis_checkbox.comiis_choose_post`).addClass(`comiis_checkbox_close`),e.removeClass(`comiis_checkbox_close`),window.location.href=window.location.href+`&special=1`}))},initSaveDraftBtn(){let e=D.selector(`.comiis_btnbox button#postsubmit em:contains('保存草稿')`);if(!e)return;let t=M(`#comiis_head .header_y`),n=D.createElement(`input`,{className:`new_btn_save_temp`},{type:`button`,value:`保存草稿`});M(`#needsubject`),D.append(t,n),D.selector(`.comiis_scrollTop_box .swiper-slide a:contains('发表帖子')`),D.on(n,`click`,function(){e.click()})},observerChangeEditorHeight(){var e=0;D.waitNode(`#postform > div > div.comiis_post_ico.comiis_minipost_icot`).then(t=>{E.mutationObserver(t,{callback:t=>{var n=M(`#postform > div > div.comiis_post_ico.comiis_minipost_icot`);let r=window.getComputedStyle(n).getPropertyValue(`height`);if(r.toString()===e.toString())return;e=parseInt(r);let i=document.documentElement.clientHeight-M(`#postform > div > div.comiis_post_ico.comiis_minipost_icot`).getBoundingClientRect().height-M(`#needmessage`).getBoundingClientRect().top;i-5<100?(C.$(`#needmessage`).css(`height`,`100px`),C.$(`.gm_plugin_previewpostforum_html.double-preview .comiis_over_box`).css(`height`,`100px`)):(C.$(`#needmessage`).css(`height`,i-5+`px`),C.$(`.gm_plugin_previewpostforum_html.double-preview .comiis_over_box`).css(`height`,i-5+`px`))},config:{childList:!0,attributes:!0,characterData:!0,subtree:!0}})})},listenResize(){D.on(window,`resize`,function(){let e=document.documentElement.clientHeight-M(`#postform > div > div.comiis_post_ico.comiis_minipost_icot`).getBoundingClientRect().height-M(`#needmessage`).getBoundingClientRect().top;e-5<100?(D.css(`#needmessage`,`height`,`100px`),D.css(`.gm_plugin_previewpostforum_html.double-preview .comiis_over_box`,`height`,`100px`)):(k.info(`设置输入框、预览高度`,e-5),D.css(`#needmessage`,`height`,e-5+`px`),D.css(`.gm_plugin_previewpostforum_html.double-preview .comiis_over_box`,`height`,e-5+`px`))})},initSelectPostingSection(){j(`
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
            `);let e={2:`版本发布`,37:`插件交流`,38:`建议反馈`,41:`逆向交流`,39:`玩机交流`,42:`编程开发`,40:`求助问答`,44:`综合交流`,50:`休闲灌水`,46:`官方公告`,53:`申诉举报`,92:`站务专区`};D.before(`.comiis_post_from .comiis_wzpost.comiis_input_style .comiis_styli:contains('标题')`,`
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
        `);let t=M(`#select-post-section`),n=U.getForumId(window.location.href);G.isPostPublish_newthread()?(k.info(`发帖`),D.on(t,`change`,function(){let n=D.val(t),r=`forum.php?mod=post&action=newthread&fid=${n}&extra=&topicsubmit=yes&mobile=2`;k.info(`修改发帖板块: ${e[n]} ${r}`);let i={求助问答:{className:`gm_user_select_help`,optionHTML:`<option value="0" selected="selected">请选择</option>
                        <option value="59">求助问答</option>
                        <option value="58">已解决</option>`},建议反馈:{className:`gm_user_select_feedback`,optionHTML:`<option value="0" selected="selected">请选择</option>
                        <option value="62">BUG反馈</option>
                        <option value="63">意见反馈</option>
                        <option value="65">论坛问题</option>
                        <option value="64">已解决</option>`},站务专区:{className:`gm_user_select_depot`,optionHTML:`<option value="0" selected="selected">请选择</option>
                        <option value="42">版主申请</option>
                        <option value="43">职位调整</option>`}},a=i[e[n]];a?(D.remove(D.parent(`.comiis_post_from .styli_tit:contains('分类')`)),D.before(`.comiis_stylino.comiis_needmessage`,`
                        <li class="comiis_styli comiis_flex b_b ${a.className}">
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
                                        ${a.optionHTML}
                                    </select>
                                </div>	
                            </div>
                        </li>
                        `)):Object.keys(i).forEach(e=>{D.remove(`.comiis_post_from .`+i[e].className)}),D.attr(`#postform`,`action`,r)})):D.attr(t,`disabled`,!0),D.val(t,n),D.emit(t,`change`)},initCharacterCount(){k.info(`添加功能：字符计数`),j(`
        .gm_plugin_word_count{display:flex}
        .gm_plugin_word_count::after{content:"/20000"}
        `),D.append(`#comiis_mh_sub .swiper-wrapper.comiis_post_ico`,`
            <a href="javascript:;" class="swiper-slide gm_plugin_word_count">
                <p>0</p>
            </a>`),D.on(this.$el.$input,[`input`,`propertychange`],()=>{let e=this.$el.$input.value,t=E.getTextLength(e),n=at.parseText(e);D.html(`.gm_plugin_previewpostforum_html .comiis_message_table`,n);let r=M(`.gm_plugin_word_count p`);D.text(r,t),t>2e4||t<10?D.attr(r,`style`,`color: red;`):D.attr(r,`style`,``)})},initUBB(){if(!M(`.comiis_post_urlico`)){k.error(`未找到插入元素`);return}j(`
        #comiis_post_tab .comiis_input_style .comiis_post_urlico li a.f_0{
            color: #53bcf5 !important;
        }
        `);let t=Ne(),n=M(`.comiis_post_urlico > ul`),r=M(`#comiis_post_qydiv > ul`),i=N(`#comiis_post_qydiv ul li`).length;Fe(),D.on(`#comiis_post_tab .comiis_input_style .comiis_post_urlico li`,`click`,function(){D.removeClass(`#comiis_post_tab .comiis_input_style .comiis_post_urlico li a`,`f_0`),D.addClass(`#comiis_post_tab .comiis_input_style .comiis_post_urlico li a`,`f_d`),D.attr(this.querySelector(`a`),`class`,`comiis_xifont f_0`),C.$(`#comiis_post_qydiv ul li`).hide().eq(C.$(this).index()).fadeIn()}),C.$.each(t,function(a,o){let s=D.createElement(`li`,{className:`quickUBBs`,innerHTML:`
                <a href="javascript:;" class="comiis_xifont f_d"><i class="comiis_font"></i>${o.key}</a>
                `});D.on(s,`click`,()=>{if(!M(`#comiis_post_qydiv li[data-key='${o.key}']`)){k.error(`未找到该元素`);return}N(`#comiis_post_tab div.comiis_post_urlico ul li a.comiis_xifont`).forEach(e=>{e.className=`comiis_xifont f_d`});let e=s.querySelector(`a`);e.className=`comiis_xifont f_0`;let n=i+Object.keys(t).indexOf(a);C.$(`#comiis_post_qydiv ul li`).hide().eq(n).fadeIn()}),D.append(n,s);let c=document.createElement(`li`);c.setAttribute(`style`,`display: none;`),c.setAttribute(`data-key`,o.key),c.innerHTML=`
            <div class="comiis_styli_m f15" style="padding-top:12px;">
                <div class="bg_e comiis_p5" style="border-radius:4px">
                    <textarea class="comiis_pt kmshow f_c" id="comiis_input_${a}" style="font-size:15px" placeholder="请输入需要${o.key}的文字"></textarea>
                </div>
            </div>
            <div class="comiis_styli_m f15 comiis_flex" style="padding-top:0;">
                <div class="styli_tit">
                    <button class="comiis_sendbtn bg_0 f_f" data-keyI="${a}" type="button">插入</button>
                </div>
                <div class="flex"></div>
            </div>`,D.append(r,c),D.on(`.comiis_sendbtn[data-keyI="${a}"]`,`click`,()=>{let n=C.$(`#comiis_input_${a}`).val();if(n==``){e.default.warning(`请输入需要插入的内容`);return}let r=t[a];r.isFunc&&(n=Pe(r.num,n)),r.hasOwnProperty(`L`)&&(n=r.L+n+r.R),C.$(`#needmessage`).insertAtCaret(n),r.hasOwnProperty(`cursorL`)&&C.$(`#needmessage`).moveCursorToCenterByTextWithLeft(r.cursorL,r.cursorLength),r.hasOwnProperty(`cursorR`)&&C.$(`#needmessage`).moveCursorToCenterByTextWithRight(r.cursorR,r.cursorLength)})})},initImage(){k.info(`添加功能：图片`),j(`
            #comiis_pictitle_tab .comiis_upbox{
                height: 140px;
                overflow-y: auto;
            }
            `),D.append(`#comiis_mh_sub .swiper-wrapper.comiis_post_ico`,`
        <a href="javascript:;" class="comiis_pictitle"><i class="comiis_font"><em>图片</em></i></a>`),D.on(`.comiis_pictitle`,`click`,function(){this.querySelector(`i.comiis_font`).classList.contains(`f_0`)?D.hide(`.gm_plugin_chartbed`,!1):D.show(`.gm_plugin_chartbed`,!1)}),D.append(`#comiis_post_tab`,`
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
            `);let e=M(`#imglist`),t=D.parent(e);D.before(`.gm_plugin_chartbed .bqbox_t`,t),D.on(`#imglist .comiis_font`,`click`,()=>{M(`#filedata`).click()}),D.on(`#comiis_pictitle_tab #comiis_pictitle_key`,`click`,`li`,function(e,t){D.removeClass(`#comiis_pictitle_tab #comiis_pictitle_key li`,`bg_f`),D.addClass(t,`bg_f`),C.$(`#comiis_pictitle_tab div.comiis_upbox`).hide().eq(C.$(t).index()).fadeIn()},{overrideTarget:!1}),B.execMenuOnce(`mt-image-bed-hello-enable`,()=>{Ae.init()}),B.execMenuOnce(`mt-image-bed-mt-enable`,()=>{je.init()})},initPreview(){let e=this;k.info(`添加功能：双列预览`),j(`
        .gm_plugin_previewpostforum_html .comiis_message_table{margin-top:10px;font-weight:initial;line-height:24px}
        .gm_plugin_previewpostforum_html .comiis_message_table a{height:auto;float:unset;color:#507daf!important}
        .gm_plugin_previewpostforum_html .comiis_message_table i{text-align:unset;font-size:unset;line-height:unset;padding-top:unset;display:unset}
        .comiis_postli.comiis_list_readimgs.nfqsqi{width:100vw}
        .gm_plugin_previewpostforum_html.double-preview{width:50vw}
        .gm_plugin_previewpostforum_html.double-preview .comiis_over_box.comiis_input_style{border-left:1px solid}
        `),D.append(`#comiis_mh_sub .swiper-wrapper.comiis_post_ico`,`
        <a href="javascript:;" class="swiper-slide gm_plugin_previewpostforum">
            <i class="comiis_font" style="display: flex;flex-direction: column;padding-top: 1px;">
                <svg t="1661243615511" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2399" width="22" height="22" fill="currentColor">
                    <path d="M470.1 885.3H208.8V138.7h597.3v336c0 20.6 16.7 37.3 37.3 37.3 20.6 0 37.3-16.7 37.3-37.3v-336c0-41.2-33.4-74.7-74.7-74.7H208.8c-41.2 0-74.7 33.4-74.7 74.7v746.7c0 41.2 33.4 74.7 74.7 74.7h261.3c20.6 0 37.3-16.7 37.3-37.3 0.1-20.8-16.6-37.5-37.3-37.5z" p-id="2400"></path>
                    <path d="M641.3 496.5c-54.3 0-108.5 23.5-146.2 70.5-54.7 68.3-53.4 168.6 2.8 235.6 37.5 44.8 90.5 67.2 143.4 67.2 35.9 0 71.8-10.3 103-30.9l81.8 81.8c7.3 7.3 16.8 10.9 26.4 10.9 9.6 0 19.1-3.6 26.4-10.9 14.6-14.6 14.6-38.2 0-52.8l-81.8-81.8c48-72.5 40.1-171.1-23.7-234.9-36.5-36.4-84.3-54.7-132.1-54.7z m0 298.7c-36.5 0-72.9-17.6-95.3-52.9-22.6-35.6-22.6-82.5 0-118.1 22.4-35.3 58.9-52.9 95.3-52.9 36.5 0 72.9 17.6 95.3 52.9 22.6 35.6 22.6 82.5 0 118.1-22.4 35.2-58.8 52.9-95.3 52.9z" p-id="2401"></path>
                </svg>
                <em style="bottom: 1px;position: relative;">预览</em>
            </i>
        </a>`),D.css(D.parent(this.$el.$input),`display`,`flex`),D.after(this.$el.$input,`
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
            </div>`),D.on(`.gm_plugin_previewpostforum`,`click`,function(){let t=this;if(N(`#polldatas`).length&&at.parseVoteText(),t.querySelector(`i.comiis_font`).classList.contains(`f_0`))D.hide(`.gm_plugin_previewpostforum_html`,!1);else{D.show(`.gm_plugin_previewpostforum_html`,!1);let t=at.parseText(D.val(e.$el.$input));D.html(`.gm_plugin_previewpostforum_html .comiis_message_table`,t),D.css(`.gm_plugin_previewpostforum_html.double-preview .comiis_over_box.comiis_input_style`,`height`,D.css(e.$el.$input,`height`))}})},initSettingImmersionMode(){k.info(`初始化设置功能-使用沉浸模式`),D.append(D.parent(`#htmlon`),`
            <li class="comiis_styli_m f15 comiis_flex b_b">
                <div class="flex">使用沉浸输入</div>
                <div class="styli_r">
                    <input type="checkbox" name="immersiveinput" id="immersiveinput" value="" class="comiis_checkbox_key">
                    <label for="immersiveinput" class="wauto">
                        <code class="bg_f b_ok comiis_checkbox comiis_checkbox_close"></code>
                    </label>
                </div>	
            </li>
            `),D.on(`#immersiveinput`,`click`,function(){let e=this,t=D.parent(e).querySelector(`.comiis_checkbox`),n=[`.comiis_wzpost ul li.comiis_flex`,`.comiis_wzpost ul li.comiis_styli.kmquote`,D.parent(D.parent(`#pollchecked`)),`#pollm_c_1`,`.comiis_polloption_add+div.f_0`,`.comiis_wzpost ul li.comiis_thread_content:contains('内容')`,`div#comiis_head`,`div#comiis_head+*:not([class])`];D.hasClass(t,`comiis_checkbox_close`)?n.forEach(e=>{e&&D.hide(e,!1)}):n.forEach(e=>{e&&D.show(e,!1)}),window.dispatchEvent(new Event(`resize`))})}},st={init(){D.onReady(()=>{B.execMenuOnce(`mt-forum-post-publish-editorOptimization`,()=>{ot.init()})})}},ct={$flag:{showUserUID_initCSS:!1},init(){(G.isPage()||G.isGuide()||G.isPlate()||G.isPost()||G.isSearch()||G.isSpace())&&B.execMenuOnce(`mt-show-user-uid`,()=>{this.showUserUID()}),(G.isSearch()||G.isGuide()||G.isSpace()||G.isPlate())&&B.execMenuOnce(`mt-small-window`,()=>{We.init()}),G.isPost()?(k.info(`Router: 帖子`),Re.init()):G.isSearch()?(k.info(`Router: 搜索`),ze.init()):G.isKMiSign()?(k.info(`Router: 签到`),Be.init()):G.isSpace()||G.isSpaceWithAt()?(k.info(`Router: 空间`),Ve.init()):G.isGuide()?(k.info(`Router: 导读`),Ge.init()):G.isPostPublish()?(k.info(`Router: 发帖页面`),st.init()):k.error(`Router: 未适配的链接 ==> `+window.location.href),D.onReady(()=>{B.execMenuOnce(`mt-black-home`,()=>{xe.init()}),B.execMenuOnce(`mt-online-user`,()=>{Ce.init()}),B.execMenuOnce(`mt-post-paidThemePost`,()=>{q.init()}),B.execMenuOnce(`mt-ownBlock`,()=>{$e.init()}),B.execMenuOnce(`mt-post-comment-filter`,()=>{et.init()}),B.execMenuOnce(`mt-productListingReminder`,()=>{tt.init()}),B.execMenuOnce(`mt-customizeUserLabels`,()=>{nt.init()}),B.execMenu(`mt-auto-sign`,()=>{Te.init()}),B.execMenu(`mt-extend-cookie-expire`,()=>{this.extendCookieExpire()}),G.isPostPublish_edit()||B.execMenuOnce(`mt-link-text-to-hyperlink`,()=>{we()})})},showUserUID(){k.info(`显示用户UID`),this.$flag.showUserUID_initCSS||(this.$flag.showUserUID_initCSS=!0,j(`
			.postli_top_tximg + h2{
 				height: auto;
			}
			.comiis_postli_top.bg_f.b_t h2{
            	height: auto;
          	}
			`));let t=new E.LockFunction(()=>{let t=E.getNodeListValue(V.comiisForumList(),V.comiisPostli(),V.comiisMmlist());t.length&&t.forEach(t=>{if(t.querySelector(`.gm-custom-label-uid`))return;let n=Array.from(t.querySelectorAll(`a`)).map(e=>{let t=e.href.match(H.uid);if(t)return t[t.length-1]}).filter(e=>e!=null);if(n.length){let r=n[0],i=document.createElement(`a`),a=t.querySelector(`.top_lev`);i.className=a.className,i.classList.add(`gm-custom-label-uid`),i.style.cssText=`background: #FF7600 !important;`,i.innerHTML=`UID:`+r,D.on(i,`click`,async t=>{D.preventEvent(t),await E.copy(r)?e.default.success(`${r}已复制`):e.default.error(`${r}复制失败`)}),a.parentElement.append(i)}})});E.mutationObserver(document,{config:{subtree:!0,childList:!0},callback(){t.run()}})},async extendCookieExpire(){k.info(`延长cookie有效期`);let e=await m.cookie.list({}),t=[`_auth`,`_saltkey`,`_client_created`,`_client_token`];e.forEach(async e=>{if(e.session)return;let n=e.expirationDate,r=Date.now()/1e3;if(n<r)return;let i=3600*24*30;n-r>i||t.find(t=>e.name.endsWith(t))&&m.cookie.set({name:e.name,value:e.value,expirationDate:e.expirationDate+i}).then(()=>{k.info(`延长Cookie +30天成功：${e.name}`)}).catch(()=>{k.error(`延长Cookie +30天失败：${e.name}`)})})}},$={$upload:{small:!1,middle:!1,big:!1},$data:{avatarInfo:{maxSize:2097152,small:{width:48,height:48},middle:{width:120,height:120},big:{width:200,height:250}}},$el:{$smallUpload:null,$middleUpload:null,$bigUpload:null,$smallStatus:null,$middleStatus:null,$bigStatus:null},$avatar:{get small(){return $.$el.$smallUpload.files[0]},get middle(){return $.$el.$middleUpload.files[0]},get big(){return $.$el.$bigUpload.files[0]}},showView(){let t=this,n=O.confirm({title:{text:`修改头像`,position:`center`},content:{text:`
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
                `,html:!0},btn:{ok:{text:`上传`,callback:async()=>{if(!t.$upload.small){e.default.error(`请上传小头像`);return}if(!t.$upload.middle){e.default.error(`请上传中头像`);return}if(!t.$upload.big){e.default.error(`请上传大头像`);return}let r=e.default.loading(`正在处理数据中...`);try{let t=await this.getUploadUrl();if(t==null)return;let r=await U.getFormHash();if(r==null){e.default.error(`获取formhash失败`);return}let i={big:{base64:await E.parseFileToBase64(this.$avatar.big)},middle:{base64:await E.parseFileToBase64(this.$avatar.middle)},small:{base64:await E.parseFileToBase64(this.$avatar.small)}};Object.keys(i).forEach(e=>{let t=i[e];t.base64=t.base64.substring(t.base64.indexOf(`,`)+1)});let a=new FormData;a.append(`Filedata`,this.$avatar.big||``),a.append(`confirm`,`确定`),a.append(`avatar1`,i.big.base64),a.append(`avatar2`,i.middle.base64),a.append(`avatar3`,i.small.base64),a.append(`formhash`,r),k.info(`头像的base64字符串`,i);let o=await A.post(t,{data:a,processData:!1,headers:{Accept:`text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9`,"User-Agent":E.getRandomPCUA(),Host:window.location.hostname,Origin:window.location.origin,Referer:`${window.location.origin}/home.php?mod=spacecp&ac=avatar`}});if(!o.status)return;o.data.responseText.indexOf(`window.parent.postMessage('success','*')`)==-1?(k.error(`上传失败`,o),e.default.error(o.data.responseText,{timeout:6e3,isHTML:!1})):(n.close(),e.default.success(`上传成功`))}catch(e){k.error(e)}finally{r.close()}}}},width:`88vw`,height:`500px`,style:`
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
            `});this.$el.$smallUpload=n.$shadowRoot.querySelector(`.avatar-upload[data-type='small']`),this.$el.$middleUpload=n.$shadowRoot.querySelector(`.avatar-upload[data-type='middle']`),this.$el.$bigUpload=n.$shadowRoot.querySelector(`.avatar-upload[data-type='big']`),this.$el.$smallStatus=n.$shadowRoot.querySelector(`.avatar-upload-status[data-type='small']`),this.$el.$middleStatus=n.$shadowRoot.querySelector(`.avatar-upload-status[data-type='middle']`),this.$el.$bigStatus=n.$shadowRoot.querySelector(`.avatar-upload-status[data-type='big']`),this.setUploadChangeEvent(this.$el.$smallUpload,this.$el.$smallStatus,this.$data.avatarInfo.small,()=>{this.$upload.small=!0}),this.setUploadChangeEvent(this.$el.$middleUpload,this.$el.$middleStatus,this.$data.avatarInfo.middle,()=>{this.$upload.middle=!0}),this.setUploadChangeEvent(this.$el.$bigUpload,this.$el.$bigStatus,this.$data.avatarInfo.big,()=>{this.$upload.big=!0})},setUploadChangeEvent(e,t,n,r){D.on(e,`change`,()=>{if(!e.files?.length)return;D.text(t,`🤡获取文件信息中...`),t.removeAttribute(`data-success`);let i=e.files[0],a=i.size,o=new Image,s=new FileReader;s.readAsDataURL(i),s.onload=function(i){o.src=i.target.result,o.onload=function(){if(o.width>n.width||o.height>n.height){e.value=``,t.setAttribute(`data-success`,`false`),D.text(t,`🤡校验失败 ==> 图片尺寸不符合，宽：${o.width} 高：${o.height}`);return}if(a>$.$data.avatarInfo.maxSize){e.value=``,t.setAttribute(`data-success`,`false`),D.text(t,`🤡校验失败 ==> 图片大小不符合：${a}byte，限制最大：${$.$data.avatarInfo.maxSize}byte`);return}t.setAttribute(`data-success`,`true`),D.text(t,`🤣 通过 宽:${o.width} 高:${o.height} 大小(byte):${a}`),r()}}})},async getUploadUrl(){let t=await A.get(`/home.php?mod=spacecp&ac=avatar`,{headers:{"User-Agent":E.getRandomPCUA()}});if(!t.status)return;if(E.isNull(t.data.responseText)){e.default.error(`动态头像：获取上传地址失败`);return}let n=t.data.responseText.match(/var[\s]*data[\s]*=[\s]*"(.+?)"/);if(n==null||n.length!=2){e.default.error(`动态头像：获取变量data失败`);return}let r=n[n.length-1].split(`,`),i=r.indexOf(`stl_src`);if(i===-1&&(i=r.indexOf(`src`)),i===-1){e.default.error(`动态头像：获取上传地址失败`);return}let a=r[i+1],o=new URL(a);return o.pathname=o.pathname.replace(`/images/camera.swf`,`/index.php`),o.searchParams.delete(`inajax`),o.searchParams.set(`m`,`user`),o.searchParams.set(`a`,`rectavatar`),o.searchParams.set(`base64`,`yes`),a=o.toString(),k.info(`上传地址：`+a),a}},lt={id:`component-common`,title:`通用`,views:[{text:``,type:`container`,views:[{text:`Toast配置`,type:`deepMenu`,views:[{text:``,type:`container`,views:[Ye(`Toast位置`,`qmsg-config-position`,`bottom`,[{value:`topleft`,text:`左上角`},{value:`top`,text:`顶部`},{value:`topright`,text:`右上角`},{value:`left`,text:`左边`},{value:`center`,text:`中间`},{value:`right`,text:`右边`},{value:`bottomleft`,text:`左下角`},{value:`bottom`,text:`底部`},{value:`bottomright`,text:`右下角`}],e=>{k.info(`设置当前Qmsg弹出位置`+e.text)},`Toast显示在页面九宫格的位置`),Ye(`最多显示的数量`,`qmsg-config-maxnums`,3,[{value:1,text:`1`},{value:2,text:`2`},{value:3,text:`3`},{value:4,text:`4`},{value:5,text:`5`}],void 0,`限制Toast显示的数量`),X(`逆序弹出`,`qmsg-config-showreverse`,!1,void 0,`修改Toast弹出的顺序`)]}]},{text:`Cookie配置`,type:`deepMenu`,views:[{text:``,type:`container`,views:[X(`启用`,`httpx-use-cookie-enable`,!1,void 0,`启用后，将根据下面的配置进行添加cookie`),X(`使用document.cookie`,`httpx-use-document-cookie`,!1,void 0,`自动根据请求的域名来设置对应的cookie`),Xe(`bbs.binmt.cc`,`httpx-cookie-bbs.binmt.cc`,``,void 0,void 0,`Cookie格式：xxx=xxxx;xxx=xxxx`)]}]}]},{text:``,type:`container`,views:[{text:`功能`,type:`deepMenu`,views:[{text:``,type:`container`,views:[X(`文本转超链接`,`mt-link-text-to-hyperlink`,!0,void 0,`自动把符合超链接格式的文字转为超链接`),X(`显示用户UID`,`mt-show-user-uid`,!0,void 0,`格式为UID：xxx`),X(`小窗模式`,`mt-small-window`,!0,void 0,`开启后点击帖子右侧区域为小窗打开`),X(`延长登录Cookie过期时间`,`mt-extend-cookie-expire`,!1,void 0,`减少频繁登录账号的问题`)]}]},{text:`额外菜单项`,type:`deepMenu`,views:[{type:`container`,text:``,views:[X(`小黑屋`,`mt-black-home`,!0,void 0,`将会在左侧面板添加【小黑屋】菜单`),X(`在线用户`,`mt-online-user`,!0,void 0,`将会在左侧面板添加【在线用户】菜单`),X(`付费主题白嫖提醒`,`mt-post-paidThemePost`,!0,void 0,`将会在左侧面板添加【付费主题白嫖提醒】菜单`),X(`我的屏蔽`,`mt-ownBlock`,!0,void 0,`将会在左侧面板添加【我的屏蔽】菜单`),X(`商品上架提醒`,`mt-productListingReminder`,!0,void 0,`将会在左侧面板添加【商品上架提醒】菜单`),X(`自定义用户标签`,`mt-customizeUserLabels`,!0,void 0,`将会在左侧面板添加【自定义用户标签】菜单`),X(`评论过滤器`,`mt-post-comment-filter`,!0,void 0,`将会在左侧面板添加【评论过滤器】菜单`)]}]},{text:`头像`,type:`deepMenu`,views:[{text:`<a href='https://ezgif.com/resize' target='_blank'>Resize Image</a>`,type:`container`,views:[Je(e=>{let t=D.createElement(`div`,{className:`pops-panel-item-left-text`,innerHTML:`
											<p class="pops-panel-item-left-main-text">头像（有缓存）</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),n=D.createElement(`div`,{className:`pops-panel-avatar-img`,innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${U.getCurrentUID()}&size=small"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${U.getCurrentUID()}&size=middle"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${U.getCurrentUID()}&size=big"
												class="avatar-img" data-size="big">
											`}),r=D.createElement(`style`,{innerHTML:`
											.avatar-img {
												width: 30px;
												height: 30px;
												border-radius: 50%;
												overflow: hidden;
											}
										`});return n.querySelector(`.avatar-img[data-size='small']`),n.querySelector(`.avatar-img[data-size='middle']`),n.querySelector(`.avatar-img[data-size='big']`),e.appendChild(t),e.appendChild(n),e.appendChild(r),e},void 0,{text:`头像（有缓存）`,desc:`小、中、大`}),Je(e=>{let t=D.createElement(`div`,{className:`pops-panel-item-left-text`,innerHTML:`
											<p class="pops-panel-item-left-main-text">头像</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),n=D.createElement(`div`,{className:`pops-panel-avatar-img`,innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${U.getCurrentUID()}&size=small&ts=${Date.now()}"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${U.getCurrentUID()}&size=middle&ts=${Date.now()}"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${U.getCurrentUID()}&size=big&ts=${Date.now()}"
												class="avatar-img" data-size="big">
											`});return e.appendChild(t),e.appendChild(n),e},void 0,{text:`头像`,desc:`小、中、大`}),Ke(`修改头像`,`可以上传gif图片，注意图片最大限制为${r.default.formatByteToSize($.$data.avatarInfo.maxSize)}`,`上传`,void 0,!1,!1,`primary`,()=>{$.showView()})]}]}]}]},ut={id:`component-forum-post`,title:`帖子`,views:[{text:``,type:`container`,views:[{text:`功能`,type:`deepMenu`,views:[{text:``,type:`container`,views:[X(`自动展开内容`,`mt-forum-post-autoExpandContent`,!0,void 0,`注入CSS展开帖子的内容`),X(`修复图片宽度`,`mt-forum-post-repairImageWidth`,!0,void 0,`修复图片宽度超出页面宽度的问题`),X(`移除帖子字体效果`,`mt-forum-post-removeFontStyle`,!1,void 0,``),X(`移除评论区的字体效果`,`mt-forum-post-removeCommentFontStyle`,!1,void 0,``),X(`添加【点评】按钮`,`mt-forum-post-addCommentOnBtn`,!1,void 0,`在评论区的每个评论右下角添加按钮`),X(`附件点击提醒`,`mt-forum-post-setAttachmentsClickTip`,!0,void 0,`阻止默认点击附件就会触发附件下载`),X(`代码块优化`,`mt-forum-post-codeQuoteOptimization`,!0,void 0,`自动检测代码块语言并设置关键字高亮`),X(`图片查看优化`,`mt-forum-post-optimizationImagePreview`,!0,void 0,`使用Viewer查看图片`)]}]},{text:`自动加载评论`,type:`deepMenu`,views:[{type:`container`,text:``,views:[X(`自动加载下一页评论`,`mt-forum-post-loadNextPageComment`,!0,void 0,``),X(`同步加载的地址`,`mt-forum-post-syncNextPageUrl`,!1,void 0,`便于刷新页面会停留在当前查看的评论页面`)]}]},{text:`编辑器-简略版`,type:`deepMenu`,views:[{type:`container`,text:``,views:[X(`启用`,`mt-forum-post-editorOptimizationNormal`,!0,void 0,`优化样式，插入bbcode代码等`),X(`自动保存输入记录`,`mt-forum-post-editorOptimizationNormal-recordInputText`,!0,void 0,`当回复时会自动清空记录`),Ke(`清空回复记录`,`当前占用空间大小：计算中`,`清理`,void 0,!1,!1,`default`,async t=>{let n=t.target.closest(`li`).querySelector(`.pops-panel-item-left-desc-text`),r=await K.clearAllReplyRecord();r.success?(e.default.success(`清理成功`),D.text(n,`当前占用空间大小：${await K.getReplyRecordSize()}`)):e.default.error(`清理失败 `+r.msg)},async(e,t)=>{let n=t.target.querySelector(`.pops-panel-item-left-desc-text`);D.text(n,`当前占用空间大小：${await K.getReplyRecordSize()}`)})]}]},{text:`编辑器-完整版`,type:`deepMenu`,views:[{type:`container`,text:``,views:[X(`启用`,`mt-forum-post-publish-editorOptimization`,!0,void 0,`优化样式，插入bbcode代码，双列预览等`),X(`自动保存输入记录`,`mt-forum-post-editorOptimization-recordInputText`,!0,void 0,`当回复/发表时会自动清空记录`),Ke(`清空回复记录`,`当前占用空间大小：计算中`,`清理`,void 0,!1,!1,`default`,async t=>{let n=t.target.closest(`li`).querySelector(`.pops-panel-item-left-desc-text`),r=await ot.clearAllReplyRecord();r.success?(e.default.success(`清理成功`),D.text(n,`当前占用空间大小：${await ot.getReplyRecordSize()}`)):e.default.error(`清理失败 `+r.msg)},async(e,t)=>{let n=t.target.querySelector(`.pops-panel-item-left-desc-text`);D.text(n,`当前占用空间大小：${await ot.getReplyRecordSize()}`)})]}]},{text:`编辑器-图床配置`,type:`deepMenu`,views:[{type:`container`,text:`<a href="https://www.helloimg.com/" target="_blank">Hello图床</a>`,views:[X(`启用`,`mt-image-bed-hello-enable`,!1,void 0,`启用Hello图床`),Q(`账号`,`mt-image-bed-hello-account`,``,``,void 0,`必填`),qe(`密码`,`mt-image-bed-hello-password`,``,``,void 0,`必填`),qe(`token`,`mt-image-bed-hello-token`,``,``,void 0,`必填`)]},{type:`container`,text:`<a href="https://img.binmt.cc/" target="_blank">MT图床</a>`,views:[X(`启用`,`mt-image-bed-mt-enable`,!0,void 0,`启用MT图床`)]},{type:`container`,text:`图片水印`,views:[X(`启用`,`mt-image-bed-watermark-enable`,!1,void 0,`开启后会为图床图片添加文字水印`),X(`自动添加水印`,`mt-image-bed-watermark-autoAddWaterMark`,!1,void 0,`开启后会自动添加水印，关闭后会有添加水印后的图片预览`),Q(`水印文字`,`mt-image-bed-watermark-text`,`MT论坛`),Q(`颜色`,`mt-image-bed-watermark-text-color`,`#000000`,void 0,void 0,``,`color`,(e,t)=>{let n=t.target?.querySelector(`input`),r=t.target?.querySelector(`.pops-panel-input__suffix`);D.hide(r,!1),n.setAttribute(`type`,`color`),D.css(n,{margin:`unset`,padding:`unset`,width:`80px`})}),Y(`大小`,`mt-image-bed-watermark-font-size`,16),Y(`透明度`,`mt-image-bed-watermark-font-opacity`,1),Y(`左右间距`,`mt-image-bed-watermark-left-right-margin`,80),Y(`上下间距`,`mt-image-bed-watermark-top-bottom-margin`,80),Y(`旋转角度`,`mt-image-bed-watermark-rotate`,45)]}]}]}]},dt={id:`component-search`,title:`搜索`,views:[{type:`container`,text:``,views:[X(`显示搜索历史`,`mt-search-showSearchHistory`,!0,void 0,`自动记住搜索历史并显示`),X(`修复清空按钮`,`mt-search-repairClearBtn`,!0,void 0,`修复点击清空按钮不清空输入框的问题`),X(`搜索框自动获取焦点`,`mt-search-searchInputAutoFocus`,!0,void 0,``)]}]},ft={id:`component-sigh`,title:`签到`,views:[{text:`功能`,type:`container`,views:[X(`显示【今日签到之星】`,`mt-sign-showTodaySignStar`,!0,void 0,`在签到按钮上面显示今日签到之星`),X(`显示【今日最先】`,`mt-sign-showTodayRanking`,!0,void 0,`在签到排名上面新增【今日最先】`)]},{text:`自动签到`,type:`container`,views:[X(`启用`,`mt-auto-sign`,!0,void 0,`自动请求签到`),X(`使用fetch请求`,`mt-auto-sign-useFetch`,!1,void 0,``),Ke(`签到信息`,`上次签到时间：${(()=>{let e=Te.getHostNameSignInfo(window.location.hostname);return e?r.default.formatTime(e.time):`尚未签到`})()}`,`清空信息`,void 0,void 0,void 0,`primary`,t=>{let n=t.composedPath()[0].closest(`li`).querySelector(`.pops-panel-item-left-desc-text`);O.confirm({title:{text:`提示 `,position:`center`},content:{text:`<p>是否清空脚本签到记录的时间?</p>`,html:!0},btn:{ok:{enable:!0,callback:t=>{let i=window.location.hostname;Te.clearSignInfo(i),e.default.success(`删除成功`),D.text(n,`上次签到时间：${(()=>{let e=Te.getHostNameSignInfo(i);return e?r.default.formatTime(e.time):`尚未签到`})()}`),t.close()}}},width:`88vw`,height:`200px`})})]}]},pt={id:`component-space`,title:`空间`,views:[{type:`container`,text:``,views:[X(`修复无法进入空间`,`mt-space-repairEnterSpace`,!0,void 0,`修复链接错误导致不能进入空间的问题`),X(`显示帖子回复内容`,`mt-space-showCommentContent`,!0,void 0,`在帖子-回复下面显示具体评论的内容`)]}]},mt={id:`component-guide`,title:`导读`,views:[{type:`container`,text:``,views:[X(`显示最新帖子`,`mt-guide-showLatestPost`,!0,void 0,`在最上面显示最新发布的帖子`)]}]};he.addContentConfig([lt,ut,dt,ft,pt,mt]),B.init(),V.registerLeftMenu({name:`MT论坛脚本设置`,icon:``,iconColor:`#ff0505`,iconSize:`23px`,callback:()=>{B.showPanel(he.getConfig(0))}}),ct.init()})(Qmsg,DOMUtils,pops,Utils,hljs,Viewer);
